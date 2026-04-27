import fitz
import json
import os
import re

def is_pure_page_number(text, line_y, page_height):
    t = text.strip()
    if re.fullmatch(r'\d{1,3}', t):
        if line_y < page_height * 0.08 or line_y > page_height * 0.90:
            return True
    return False

def get_visual_objects_on_page(page):
    """回傳 (rect, kind) 的 list"""
    objects = []
    try:
        drawings = page.get_drawings()
        for d in drawings:
            rect = d.get("rect")
            if rect is None:
                continue
            r = fitz.Rect(rect)
            if r.width < 5 or r.height < 5:
                continue
            objects.append(r)
    except Exception:
        pass

    try:
        for img_info in page.get_image_info(xrefs=True):
            bbox = img_info.get("bbox")
            if bbox is None:
                continue
            r = fitz.Rect(bbox)
            if r.width < 10 or r.height < 10:
                continue
            objects.append(r)
    except Exception:
        pass
    return objects

def merge_overlapping_rects(rects, padding=3):
    if not rects:
        return []
    expanded = [fitz.Rect(r.x0 - padding, r.y0 - padding,
                          r.x1 + padding, r.y1 + padding) for r in rects]
    changed = True
    while changed:
        changed = False
        result = []
        used = [False] * len(expanded)
        for i in range(len(expanded)):
            if used[i]:
                continue
            current = fitz.Rect(expanded[i])
            used[i] = True
            for j in range(i + 1, len(expanded)):
                if used[j]:
                    continue
                if current.intersects(expanded[j]):
                    current.include_rect(expanded[j])
                    used[j] = True
                    changed = True
            result.append(current)
        expanded = result
    return expanded

def extract_quiz_data(pdf_path):
    print(f"正在分析 {pdf_path} ...")

    base_dir = os.path.dirname(os.path.abspath(pdf_path))
    images_dir = os.path.join(base_dir, "images")
    output_js = os.path.join(base_dir, "quizData.js")
    if not os.path.exists(images_dir):
        os.makedirs(images_dir)

    doc = fitz.open(pdf_path)

    q_pattern = re.compile(r'^(\d{1,3})\.\s*(.*)')
    opt_pattern = re.compile(r'^([a-dA-D])[\.\)]\s*(.*)')

    questions = []
    current = None

    page_visual_objects = {}

    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        page_height = page.rect.height
        page_width = page.rect.width

        raw_objects = get_visual_objects_on_page(page)
        page_visual_objects[page_num] = merge_overlapping_rects(raw_objects, padding=3)

        all_lines = []
        blocks = page.get_text("dict")["blocks"]
        for block in blocks:
            if block.get("type", -1) != 0:
                continue
            for line in block["lines"]:
                line_y0 = line["bbox"][1]
                line_y1 = line["bbox"][3]
                line_x0 = line["bbox"][0]
                line_x1 = line["bbox"][2]
                line_text = ""
                is_marked = False
                for span in line["spans"]:
                    text = span["text"]
                    if not text.strip():
                        continue
                    line_text += text
                    color = span.get("color", 0)
                    flags = span.get("flags", 0)
                    if (color != 0 and color != 3355443) or (flags & 16):
                        is_marked = True
                line_text = line_text.strip()
                if not line_text:
                    continue
                if is_pure_page_number(line_text, line_y0, page_height):
                    continue

                all_lines.append({
                    "y0": line_y0, "y1": line_y1,
                    "x0": line_x0, "x1": line_x1,
                    "text": line_text,
                    "is_marked": is_marked,
                })

        all_lines.sort(key=lambda l: (round(l["y0"], 1), l["x0"]))

        for line in all_lines:
            txt = line["text"]
            is_marked = line["is_marked"]

            qm = q_pattern.match(txt)
            if qm:
                cand = int(qm.group(1))
                rest = qm.group(2).strip()
                cur_num = current["q_num"] if current else 0
                if cand > cur_num and cand <= cur_num + 5:
                    current = {
                        "q_num": cand,
                        "page": page_num,
                        "q_y0": line["y0"],
                        "q_text": rest,
                        "options": [],
                        "last_y": line["y1"],
                    }
                    questions.append(current)
                    continue

            om = opt_pattern.match(txt)
            if om and current is not None:
                letter = om.group(1).lower()
                content = om.group(2).strip()
                current["options"].append({
                    "letter": letter,
                    "y0": line["y0"], "y1": line["y1"],
                    "x0": line["x0"], "x1": line["x1"],
                    "text": content,
                    "is_marked": is_marked,
                    "page": page_num,
                })
                current["last_y"] = max(current["last_y"], line["y1"])
                continue

            if current is not None and len(current["options"]) > 0:
                current["options"][-1]["text"] += " " + txt
                if is_marked:
                    current["options"][-1]["is_marked"] = True
                current["options"][-1]["y1"] = max(current["options"][-1]["y1"], line["y1"])
                current["last_y"] = max(current["last_y"], line["y1"])
                continue

            if current is not None and len(current["options"]) == 0:
                if current["q_text"]:
                    current["q_text"] += " " + txt
                else:
                    current["q_text"] = txt 
                current["last_y"] = max(current["last_y"], line["y1"])
                continue

    # 第二階段：截圖與空間分配
    questions_with_images = set()
    options_with_images = {}

    for idx, q in enumerate(questions):
        page_num = q["page"]
        page = doc.load_page(page_num)
        page_height = page.rect.height
        page_width = page.rect.width

        # 找下一題的開頭作為下界
        next_q_top = None
        for j in range(idx + 1, len(questions)):
            if questions[j]["page"] == page_num:
                next_q_top = questions[j]["q_y0"]
                break
            if questions[j]["page"] > page_num:
                break

        q_top = q["q_y0"]
        q_bottom = next_q_top if next_q_top else (page_height - 30)

        q_visual_objects = []
        for obj_rect in page_visual_objects.get(page_num, []):
            obj_cy = (obj_rect.y0 + obj_rect.y1) / 2
            if q_top <= obj_cy <= q_bottom:
                q_visual_objects.append(obj_rect)

        if not q_visual_objects:
            continue

        first_opt_y = q["options"][0]["y0"] if q["options"] else q_bottom

        question_rects = []
        option_image_rects = {}

        for obj_rect in q_visual_objects:
            obj_cy = (obj_rect.y0 + obj_rect.y1) / 2
            
            is_question_img = False
            
            # 階段 A：強力判定題幹圖 (拯救 Q21 的黏合大圖)
            # 條件 1: 圖片中心點高於第一個選項
            if obj_cy < first_opt_y - 5:
                is_question_img = True
            # 條件 2: 圖片頂部(y0)在第一個選項之上，且具備一定高度 (代表這是一坨從題幹區往下長的巨型方塊)
            elif obj_rect.y0 < first_opt_y - 10 and obj_rect.height > 60:
                is_question_img = True
            # 條件 3: 寬度跨越超過一半版面
            elif obj_rect.width > page_width * 0.5:
                is_question_img = True

            if is_question_img:
                question_rects.append(obj_rect)
                continue

            # 階段 B：歐幾里得距離測算 (找最近的選項)
            assigned_letter = None
            best_dist = float('inf')

            for opt in q["options"]:
                opt_cx = (opt["x0"] + opt["x1"]) / 2
                opt_cy = (opt["y0"] + opt["y1"]) / 2
                obj_cx = (obj_rect.x0 + obj_rect.x1) / 2
                
                dist = ((opt_cx - obj_cx)**2 + (opt_cy - obj_cy)**2)**0.5

                if dist < best_dist:
                    best_dist = dist
                    assigned_letter = opt["letter"]

            if assigned_letter is not None:
                option_image_rects.setdefault(assigned_letter, []).append(obj_rect)
            else:
                question_rects.append(obj_rect)

        # 截取題幹圖
        if question_rects:
            merged = fitz.Rect(question_rects[0])
            for r in question_rects[1:]:
                merged.include_rect(r)
            merged = fitz.Rect(merged.x0 - 5, merged.y0 - 5,
                               merged.x1 + 5, merged.y1 + 5)
            clip = fitz.Rect(
                max(0, merged.x0),
                max(0, merged.y0),
                min(page_width, merged.x1),
                min(page_height, merged.y1)
            )
            try:
                pix = page.get_pixmap(clip=clip, dpi=150)
                img_path = os.path.join(images_dir, f"q{q['q_num']}.png")
                pix.save(img_path)
                questions_with_images.add(q["q_num"])
            except Exception as e:
                pass

        # 截取選項圖
        for letter, rects in option_image_rects.items():
            if not rects:
                continue
            merged = fitz.Rect(rects[0])
            for r in rects[1:]:
                merged.include_rect(r)
            merged = fitz.Rect(merged.x0 - 4, merged.y0 - 4,
                               merged.x1 + 4, merged.y1 + 4)
            clip = fitz.Rect(
                max(0, merged.x0),
                max(0, merged.y0),
                min(page_width, merged.x1),
                min(page_height, merged.y1)
            )
            try:
                pix = page.get_pixmap(clip=clip, dpi=150)
                img_path = os.path.join(images_dir, f"q{q['q_num']}_{letter}.png")
                pix.save(img_path)
                options_with_images.setdefault(q["q_num"], {})[letter] = \
                    f"images/q{q['q_num']}_{letter}.png"
            except Exception as e:
                pass

    # 寫出 JS
    quiz_data = []
    for q in questions:
        opts_text = []
        opts_img = []
        for opt in q["options"]:
            letter = opt["letter"]
            text = opt["text"].strip()
            opts_text.append(f"{letter}. {text}" if text else f"{letter}.")
            img_p = options_with_images.get(q["q_num"], {}).get(letter, None)
            opts_img.append(img_p)

        answer_idx = 0
        for i, opt in enumerate(q["options"]):
            if opt["is_marked"]:
                answer_idx = i
                break

        quiz_data.append({
            "id": q["q_num"],
            "question": f"{q['q_num']}. {q['q_text'].strip()}",
            "hasImage": q["q_num"] in questions_with_images,
            "options": opts_text,
            "optionImages": opts_img,
            "answer": answer_idx,
        })

    with open(output_js, "w", encoding="utf-8") as f:
        f.write("const quizData = [\n")
        for i, q in enumerate(quiz_data):
            f.write("    {\n")
            f.write(f"        id: {q['id']},\n")
            f.write(f"        question: {json.dumps(q['question'], ensure_ascii=False)},\n")
            f.write(f"        hasImage: {str(q['hasImage']).lower()},\n")
            f.write(f"        options: {json.dumps(q['options'], ensure_ascii=False)},\n")
            f.write(f"        optionImages: {json.dumps(q['optionImages'], ensure_ascii=False)},\n")
            f.write(f"        answer: {q['answer']}\n")
            f.write("    }")
            f.write(",\n" if i < len(quiz_data) - 1 else "\n")
        f.write("];\n")

    print(f"\n🎉 執行完畢！共抓到 {len(quiz_data)} 題")
    print(f"圖片目錄: {images_dir}")

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    pdf_path = os.path.join(script_dir, "PMS-2023-Final-Exam_Ans.pdf")
    extract_quiz_data(pdf_path)