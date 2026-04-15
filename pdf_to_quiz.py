import fitz
import json
import os
import re

def extract_quiz_data(pdf_path):
    print(f"正在分析 {pdf_path}，啟用【座標空間定位法】精準抓圖...")
    doc = fitz.open(pdf_path)
    
    quiz_data = []
    current_q_num = 0
    current_q_text = ""
    current_options = []
    
    # 用來記錄哪些題號「確實」有配對到圖片
    questions_with_images = set() 
    
    if not os.path.exists("images"):
        os.makedirs("images")
        
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        
        # 紀錄這頁開始前的題號 (處理圖片跨頁的問題)
        q_num_at_page_start = current_q_num 
        
        # 紀錄這頁每一題的 Y 座標: [(Y座標, 題號), ...]
        page_q_positions = [] 
        
        # 1. 抓取文字與座標
        blocks = page.get_text("dict")["blocks"]
        for block in blocks:
            if block.get("type", -1) != 0:
                continue
                
            block_y0 = block["bbox"][1] # 取得文字區塊的頂部 Y 座標
            
            for line in block["lines"]:
                line_text = ""
                is_marked = False
                
                for span in line["spans"]:
                    text = span["text"].strip()
                    if not text:
                        continue
                    line_text += text + " "
                    
                    # 判斷是否為解答標記 (顏色或粗體)
                    color = span.get("color", 0)
                    flags = span.get("flags", 0)
                    if (color != 0 and color != 3355443) or (flags & 16):
                        is_marked = True

                line_text = line_text.strip()
                if not line_text:
                    continue
                
                # 判斷是否為新題目
                q_match = re.match(r'^(\d+)\.\s+(.*)', line_text)
                if q_match:
                    if current_q_num > 0:
                        quiz_data.append({
                            "id": current_q_num,
                            "question": f"{current_q_num}. {current_q_text.strip()}",
                            "options": current_options,
                            "answer": get_correct_answer_index(current_options)
                        })
                    
                    current_q_num = int(q_match.group(1))
                    current_q_text = q_match.group(2)
                    current_options = []
                    
                    # 將這題的 Y 座標記錄下來
                    page_q_positions.append((block_y0, current_q_num))
                    
                # 判斷是否為選項
                elif re.match(r'^[a-d]\.\s+', line_text) or line_text.startswith("$\\underline"):
                    clean_text = line_text.replace("$\\underline{", "").replace("}$", "")
                    current_options.append({
                        "text": clean_text,
                        "is_marked": is_marked or "underline" in line_text.lower()
                    })
                    
                # 多行題目接續
                elif current_q_num > 0 and len(current_options) == 0:
                    if len(line_text) > 3 and not line_text.isdigit():
                        current_q_text += " " + line_text

        # 2. 座標空間配對抓圖 (這頁有幾張圖，就依照座標分給對應的題號)
        images_info = page.get_image_info(xrefs=True)
        for img_info in images_info:
            xref = img_info.get("xref")
            if not xref:
                continue
                
            img_y0 = img_info["bbox"][1] # 圖片的頂部 Y 座標
            assigned_q_num = q_num_at_page_start # 預設分配給上一頁跨過來的最後一題
            
            if page_q_positions:
                # 如果圖片的位置比這頁第一題還要高 (代表是跨頁圖片)
                if img_y0 < page_q_positions[0][0] - 20:
                    assigned_q_num = q_num_at_page_start
                else:
                    # 依序比對圖片落在哪一題的範圍內
                    for i in range(len(page_q_positions)):
                        q_y0, q_num = page_q_positions[i]
                        if img_y0 >= q_y0 - 20: # 圖片在該題下方
                            if i + 1 < len(page_q_positions):
                                next_q_y0 = page_q_positions[i+1][0]
                                if img_y0 < next_q_y0 - 20: # 圖片在下一題的上方
                                    assigned_q_num = q_num
                            else:
                                assigned_q_num = q_num # 這是該頁最後一題的圖片
                                
            # 儲存圖片並標記
            if assigned_q_num > 0:
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                img_filename = f"q{assigned_q_num}.png"
                with open(os.path.join("images", img_filename), "wb") as f:
                    f.write(image_bytes)
                questions_with_images.add(assigned_q_num)

    # 處理最後一題
    if current_q_num > 0:
        quiz_data.append({
            "id": current_q_num,
            "question": f"{current_q_num}. {current_q_text.strip()}",
            "options": current_options,
            "answer": get_correct_answer_index(current_options)
        })

    # 3. 輸出結果
    with open("quizData.js", "w", encoding="utf-8") as f:
        f.write("const quizData = [\n")
        for i, q in enumerate(quiz_data):
            f.write("    {\n")
            f.write(f"        id: {q['id']},\n")
            f.write(f"        question: {json.dumps(q['question'], ensure_ascii=False)},\n")
            
            # 從 set 中確認這題是否有精準配對到圖片
            has_img_flag = str(q['id'] in questions_with_images).lower()
            f.write(f"        hasImage: {has_img_flag},\n")
            
            options_text = [opt["text"] for opt in q["options"]]
            f.write(f"        options: {json.dumps(options_text, ensure_ascii=False)},\n")
            f.write(f"        answer: {q['answer']}\n")
            f.write("    }")
            if i < len(quiz_data) - 1:
                f.write(",\n")
            else:
                f.write("\n")
        f.write("];\n")

    print(f"🎉 任務完成！成功抓取 {len(quiz_data)} 題，並精準配對所有圖片！")

def get_correct_answer_index(options):
    for i, opt in enumerate(options):
        if opt["is_marked"]:
            return i
    return 0 

if __name__ == "__main__":
    extract_quiz_data("PMS-2023-Mid-Term-Exam_Ans.pdf")