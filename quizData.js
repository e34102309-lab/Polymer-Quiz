const quizData = [
    {
        id: 1,
        question: "1. Structures of a polymer are established and determined during its synthesis by",
        hasImage: false,
        options: ["a. Monomers, Polymerization Processes, Catalysts", "b. Reactor type, Reactor Temperature, Reactor Residence Time", "c. Polymerization, Separation, Finishing", "d. Molecular Weight, Composition, Rheology"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 2,
        question: "2. An oligomer would become a polymer when its molecular weight exceeds how many times of its entangle molecular weight.",
        hasImage: false,
        options: ["a. 1", "b. 2", "c. 3", "d. 4"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 3,
        question: "3. Polydispersity index, or PDI, is defined as",
        hasImage: false,
        options: ["a. Mw/Mn", "b. Mn/Mw", "c. Mz/Mw", "d. Mz/Mn"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 4,
        question: "4. Which one thermo-mechanical characteristic (the curve of storage modulus, E’ or G’, plotted against the temperature) that an oligomer does NOT have?",
        hasImage: false,
        options: ["a. Glassy plateau", "b. Glass transition", "c. Rubbery plateau", "d. Flow"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 5,
        question: "5. Which type of polymer listed below has a residual carbon-carbon double bond in every monomeric unit after polymerization?",
        hasImage: false,
        options: ["a. Vinyl polymers (polymerization from vinyl monomers)", "b. Polydienes (polymerization from diene monomers)", "c. Vinylidene polymers (polymerization from vinylidene monomers)"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 6,
        question: "6. Which polymerization method listed below is the only method that can delivered isotactic polypropylene?",
        hasImage: false,
        options: ["a. Radical polymerization", "b. Anionic polymerization", "c. Cationic polymerization", "d. Metal coordinated insertion polymerization"],
        optionImages: [null, null, null, null],
        answer: 3
    },
    {
        id: 7,
        question: "7. Which product of reactivity ratios of copolymerization (monomer1 and monomer2) listed below would lead to statistically blocky copolymers?",
        hasImage: false,
        options: ["a. r1r2 = 1", "b. r1r2 >>1", "c. r1r2 << 1", "d. r1r2 = 0"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 8,
        question: "8. Which chain growth polymerization listed below has no termination routes and is considered as a living polymerization?",
        hasImage: false,
        options: ["a. Anionic polymerization", "b. Cationic polymerization", "c. Radical polymerization", "d. Metal coordinated insertion polymerization"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 9,
        question: "9. Radius of gyration of a polymer coil in a “good” solvent (self-avoiding walk, not random walk) is dependent of its molecular weight to the power of",
        hasImage: false,
        options: ["a. 0.5", "b. 0.6", "c. 0.9", "d. 1.0"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 10,
        question: "10. Based on the solubility table listed below for various solvents, which solvent would be able to dissolve polybutadiene that has a solubility parameter of 17.2 (MPa)1/2?",
        hasImage: true,
        options: ["a. Acetone", "b. Cyclohexane", "c. n-Decane", "d. Methanol"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 11,
        question: "11. Which chain-to-chain interaction between polymer chains can be considered the weakest",
        hasImage: false,
        options: ["a. Dispersive interactions", "b. Pi-pi interactions (between aromatic rings)", "c. Dipole-dipole polar interactions", "d. Hydrogen bonds"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 12,
        question: "12. A crystalline plastic has two thermal transitions; one is a first order transition while the other one is a second order transition. Which phase transition listed below is the second order thermal transition that can be found in a crystalline plastic?",
        hasImage: false,
        options: ["a. Crystallization", "b. Melting", "c. Glass transition", "d. Flow transition"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 13,
        question: "13. Which plastic listed below would have extensional flow hardening (due to their interchain interactions) allowing it to be foamed? (all plastics listed below have linear backbone)",
        hasImage: false,
        options: ["a. HDPE (high density polyethylene, linear)", "b. PS (polystyrene, linear)", "c. PP (polypropylene, linear)", "d. PET (polyethylene terephthalate, linear)"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 14,
        question: "14. Which crystallization statement shown below is correct",
        hasImage: false,
        options: ["a. Coil dimension is preserved (not changed) during crystallization", "b. Coil dimension is reduced during crystallization", "c. Coil dimension is raised during crystallization", "d. Coils no longer exist, all chains become fully extended (no coil dimension)"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 15,
        question: "15. The blend morphology development of an immiscible polyolefin blend is by",
        hasImage: false,
        options: ["a. Nucleation and growth", "b. Spinodal decomposition", "c. Drop breakup and coalescence", "d. Ostwald ripening"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 16,
        question: "16. For a crystalline plastic, highest crystallization rate occurs at the temperature of",
        hasImage: false,
        options: ["a. melting", "b. crystallization", "c. halfway between melting and glass transition", "d. glass transition"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 17,
        question: "17. Which crystallin plastic with its coil and crystal sizes listed below has the highest tie chain concentration in between crystals? (all these crystalline plastics have the same amount of crystallinity)",
        hasImage: false,
        options: ["a. Big coils and small crystals", "b. Small coils and big crystals", "c. Big coils and big crystals", "d. Small coils and small crystals"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 18,
        question: "18. Permeation is the rate a gas or vapor passing through a polymer and the permeability of a polymer is defined by",
        hasImage: false,
        options: ["a. Gas diffusivity only", "b. Gas solubility only", "c. Gas diffusivity times gas solubility", "d. Internal gas concentration gradient"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 19,
        question: "19. Tackifiers are low molecular wight oligomers. They are added into a polymer so to lower its rubbery plateau modulus to below the 0.1 MPa Dahlquist requirement for tack. Tackifiers can lower a polymer’s plateau modulus by",
        hasImage: false,
        options: ["a. Disentangle polymer chains so to raise its entanglement molecular weight", "b. Promote more entanglements so to lower its entanglement molecular weight", "c. Swell the polymer so to lower its density", "d. Contract the polymer so to raise its density"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 20,
        question: "20. For a molten polymer, its melt viscosity is related to its molecular weight to the power of (based on chain reptation out of the tube defined by the entanglements but with tube renewal due to entanglement fluctuation)",
        hasImage: false,
        options: ["a. 0.5", "b. 1", "c. 2", "d. 3.4"],
        optionImages: [null, null, null, null],
        answer: 3
    },
   {
        id: 21,
        question: "21. For a polyester shown below, which R' group listed would lead to highest fusion, or melting, temperature (remember that Tf = ΔHf / ΔSf)?",
        hasImage: true, 
        options: ["a.", "b.", "c.", "d."],
        optionImages: [
            "images/q21_a.png", 
            "images/q21_b.png", 
            "images/q21_c.png", 
            "images/q21_d.png"
        ],
        answer: 2 // ⚠️ 請核對標準答案並修改（0=a, 1=b, 2=c, 3=d）
    },
    {
        id: 22,
        question: "22. For a polyester shown below, which R'' group listed would lead to highest fusion, or melting, temperature (remember that Tf = ΔHf / ΔSf)?",
        hasImage: true, 
        options: ["a.", "b.", "c.", "d."],
        optionImages: [
            "images/q22_a.png", 
            "images/q22_b.png", 
            "images/q22_c.png", 
            "images/q22_d.png"
        ],
        answer: 3 // ⚠️ 請核對標準答案並修改（0=a, 1=b, 2=c, 3=d）
    },
    {
        id: 23,
        question: "23. A diblock copolymer compatibilizer used to compatibilize immiscible polymer blends can reduce the dispersion polymer phase domain size by",
        hasImage: false,
        options: ["a. Facilitating the drop breakup", "b. Raising the matrix polymer viscosity", "c. Suppressing droplet coalescence", "d. Equalizing the viscosity ratio between the blend components"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 24,
        question: "24. Which hierarchical crystalline structure in a polymer has the dimension of sub-micron to micron and would interfere the visible light transmission?",
        hasImage: false,
        options: ["a. Crystal unit cells", "b. Folded chain crystals", "c. Crystalline-amorphous lamellae", "d. Spherulites"],
        optionImages: [null, null, null, null],
        answer: 3
    },
    {
        id: 25,
        question: "25. Based on the top view of the chain conformation of an isotactic poly(4-methyl-1-pentene) in its crystalline unit cell structure as shown below, what is the basic helix structure of this polymer?",
        hasImage: true,
        options: ["a. 3/1 (3 monomers per 1 turn)", "b. 4/1 (4 monomers per 1 turn)", "c. 7/2 (7 monomers per 2 turns)", "d. 2/1 (planar zigzag)"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 26,
        question: "26. For a polypropylene with 160°C Tm (melting temperature) and 0°C Tg (glass transition temperature), at what temperature, it will have the fastest crystallization rate",
        hasImage: false,
        options: ["a. 160°C", "b. 150°C", "c. 80°C", "d. 0°C"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 27,
        question: "27. Which thermo-mechanical state is not expected to be observed in a main-chain liquid crystalline polymer that does not entangle?",
        hasImage: false,
        options: ["a. Glass transition", "b. Melting", "c. Rubbery plateau", "d. Flow"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 28,
        question: "28. Main chain liquid crystalline polymers are processed in which state (but are used in their crystalline state)?",
        hasImage: false,
        options: ["a. Isotropic", "b. Nematic", "c. Smectic", "d. Crystalline"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 29,
        question: "29. Which mesophase with lowest order is preferred in liquid crystalline molecules when they are used in a liquid crystal display to minimize light scattering?",
        hasImage: false,
        options: ["a. Crystalline", "b. Smectic", "c. Nematic", "d. Isotropic"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 30,
        question: "30. Isotropic Which dialkoxy substituted aromatic polyester listed below has the highest Ti (nematic to isotropic transition temperature)?",
        hasImage: true,
        options: ["a. OC2H5 substituted", "b. OC4H9 substituted", "c. OC6H13 substituted", "d. All three are the same"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 31,
        question: "31. Which phase shown below is not a mesophase for a liquid crystalline molecule?",
        hasImage: false,
        options: ["a. Discotic", "b. Cholesteric", "c. Banana", "d. Crystalline"],
        optionImages: [null, null, null, null],
        answer: 3
    },
    {
        id: 32,
        question: "32. During polymer crystallization, at which stage, the tie chains in the amorphous phase are established?",
        hasImage: false,
        options: ["a. Nucleation", "b. Primary growth", "c. Secondary growth", "d. Crystallite agglomeration"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 33,
        question: "33. Polyolefin thermoset rubbers require the addition of one more monomer, in addition to their olefin monomers, during polymerization to provide residual double bonds (either in- chain or pendant) within the polymer for subsequent crosslinking. This additional monomer is",
        hasImage: false,
        options: ["a. Diene", "b. Vinyl", "c. Vinylidene", "d. Diacid"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 34,
        question: "34. Solubility parameter of an oil is around 16 MPa0.5. To provide oil resistant rubbers, polybutadiene copolymers are prepared using either styrene or acrylonitrile co-monomer to prepare SBR (styrene butadiene rubber) or NBR (acrylonitrile butadiene rubber). NBR can be hydrogenated to HNBR (hydrogenated NBR) for better thermos-stability. Which polybutadiene copolymer should be selected and used that would provide oil resistant (solubility parameters of these copolymers are listed inside the bracket)?",
        hasImage: false,
        options: ["a. SBR25 (25% styrene, 17.3 MPa0.5)", "b. HNBR17 (17% acrylonitrile, 17.8 MPa0.5)", "c. NBR40 (40% acrylonitrile, 20.3 MPa0.5)"],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 35,
        question: "35. During polymerization of butadiene, which backbone monomeric structure is preferred that can provide highest chain flexibility and deliver lowest glass transition temperature?",
        hasImage: false,
        options: ["a. 1,2 addition (vinyl)", "b. Cis 1,4 addition", "c. Trans 1,4 addition", "d. Chain flexibility and Tg do not depend on backbone structure"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 36,
        question: "36. Which addition polymerization method listed below that is living and can only be used to synthesized triblock copolymers of poly(styrene-b-butadiene-b-styrene), SBS, which are thermoplastic elastomers?",
        hasImage: false,
        options: ["a. Anionic polymerization", "b. Cationic polymerization", "c. Free radical polymerization", "d. Metal coordinated insertion polymerization"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 37,
        question: "37. Which polymer listed below needs to have more than 200,000 g/mol number average molecular weight to extend its rubbery plateau to 90°C flow transition for an acceptable green strength?",
        hasImage: false,
        options: ["a. Thermoplastic elastomers, like SBS", "b. Thermoset rubbers, like BR (butadiene rubber)", "c. Glassy thermoplastics, like PS (polystyrene)", "d. Crystalline thermoplastics, like PE (polyethylene)"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 38,
        question: "38. Which thermoset rubber listed below can incorporate most (largest amount) carbon black fillers? (their entanglement molecular weights are shown in the bracket)",
        hasImage: false,
        options: ["a. EPDM rubber (Me = 2,100 g/mol)", "b. Cis BR, cis butadiene rubber (Me = 3,000 g/mol)", "c. NR, natural rubber (Me = 4,000 g/mol)", "d. IIR, butyl rubber (Me = 9,700 g/mol)"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 39,
        question: "39. Which tackifier listed below should be selected to raise the tack value of a NBR20 (20% acrylonitrile)",
        hasImage: true,
        options: ["a. Pure resins", "b. DCPD resins", "c. TL resins", "d. C resins"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 40,
        question: "40. What is the preferred glass transition temperature, Tg, of a hot melt adhesive or a pressure- sensitive adhesive after the addition of tackifiers to allow easy and clean slitting of adhesive webs during manufacturing?",
        hasImage: false,
        options: ["a. 0°C", "b. 50°C", "c. -50°C", "d. 20°C"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 41,
        question: "41. Using the same amount of tackifiers in NR and in SBR, the tack value of a tackified NR compound is higher (as shown below, tack values listed on the right). What is the reason for the higher tack found in a NR compound?",
        hasImage: true,
        options: ["a. NR has a higher modulus than that of SBR (before adding tackifiers)", "b. NR has a lower modulus than that of SBR (before adding tackifiers)", "c. NR has a higher density value than that of SBR (before adding tackifiers)", "d. NR has a lower density value than that of SBR (before adding tackifiers)"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 42,
        question: "42. In the above table, both tackified NR and SBR compounds lose their tacks with aging time. What is the reason for their tack loss with aging?",
        hasImage: false,
        options: ["a. Tackifiers blooming to the surface and phase separated", "b. Tackifiers migrating to the bulk leading to no tackifiers at the surface", "c. Surface oxidation leading to crosslinking and increasing surface modulus", "d. Surface oxidation of the tackifiers leading to phase separation of oxidized tackifiers"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 43,
        question: "43. The solubility parameters of BR (butadiene rubber) and NR (natural rubber) are about the same. Which statement listed below correctly describe their mutual solubility?",
        hasImage: false,
        options: ["a. BR are NR are fully miscible", "b. BR and NR are immiscible due to their mismatch monomeric unit size (negative mixing entropy)", "c. BR and NR are miscible only at the room temperature up to 60°C"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 44,
        question: "44. A tackifier that is soluble in sSBR (solution SBR, styrene butadiene rubber) can be used to raise the sSBR’s compound Tg for enhanced wet traction in a silica-filled sSBR/BR tire tread compound. This tackifier needs to be introduced into sSBR/BR tread compound during compounding at when, so as not to affect silica dispersion?",
        hasImage: false,
        options: ["a. Tackifiers go in along with the rubbers at the beginning", "b. Tackifiers to go in along with silica and silane coupling agent after the rubbers", "c. Tackifiers to go in last along with extender oils and antioxidants"],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 45,
        question: "45. What is the preferred morphology for an ozone-resistant tire sidewall compound having an ozone-resistant but not-very-elastic EPDM rubber and an elastic but not ozone-resistant BR (butadiene rubber) rubber?",
        hasImage: false,
        options: ["a. BR dispersed with EPDM continuous", "b. EPDM dispersed with BR continuous", "c. BR and EPDM are co-continuous"],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 46,
        question: "46. A tire tread compound of 65/35 SSBR/BR containing 60 phr silica (and silane coupling agent) and 7 phr oil has a co-continuous morphology due to the preferential partition of silica into SSBR and of oil into BR. Remember that co-continuity criterion is <img src='images/q46.png' class='inline-img'>. If one wants to raise the silica content to 80 phr in this tire tread compound for a lower rolling resistance, what is the requirement to keep SSBR and BR co-continuous?",
        hasImage: false, // ⚠️ 因為圖片已經放在句子裡，這裡設為 false，避免下方再出現大圖
        options: [
            "a. Raise the SSBR content, instead of 65/35, to 70/30", 
            "b. Lower the oil content and keep the same SSBR/BR ratio", 
            "c. Increase the BR content and move SSBR/BR to 60/40", 
            "d. No changes in formulation are required"
        ],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 47,
        question: "47. Which carbon black shown below has higher structure? (same TEM magnification and same elemental particle size)",
        hasImage: true,
        options: ["a. N326", "b. N351", "c. Cannot determine based on the TEM image"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 48,
        question: "48. According to the filler-filler and filler-rubber interaction plot shown below for carbon black and silica, which agglomerates (assembly of elemental aggregates) would have a denser fractal structure as shown on the bottom right?",
        hasImage: true,
        options: ["a. CB (carbon blacks)", "b. Silica", "c. Cannot determine based on the plot of filler/filler and filler/rubber interactions"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 49,
        question: "49. Based on the solubility parameter values listed below for rubber fillers, curatives, and rubbers, where would you expect sulfur curative to be?",
        hasImage: true,
        options: ["a. Inside the rubber phase domains (SBR, BR, or NR)", "b. Surround the zinc oxide particles", "c. Surround the carbon black particles", "d. Surround the CBS curative accelerator particles"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 50,
        question: "50. Based on the solubility table listed above, in a carbon-black-filled blend of NR with EPDM, where would the carbon blacks preferentially reside?",
        hasImage: false,
        options: ["a. Inside the NR phase domain", "b. Inside the EPDM phase domain", "c. Equally partition 50/50 among NR and EPDM"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 51,
        question: "51. Stearic acid has been used as a dispersion aid in rubber compounding to help dispersing hard particles. Based on the solubility table listed above, which particle would be assisted by stearic acid in dispersing inside the rubbers, including SBR, BR, NR, and IR?",
        hasImage: false,
        options: ["a. Silica", "b. Carbon black", "c. Sulfur", "d. ZnO (Zinc Oxide)"],
        optionImages: [null, null, null, null],
        answer: 3
    },
    {
        id: 52,
        question: "52. A dispergrader is an optical microscope that can examine the surface roughness of a rubber compound. Based on the photographs shown below, which one has the best dispersion?",
        hasImage: true,
        options: ["a. No. 10", "b. No. 5", "c. No. 1"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 53,
        question: "53. A microtome, as shown below, is required to section rubber compound samples to prepare samples for microscopic evaluation (sections for TEM and transmission OM, faces for SEM and AFM). At which temperature the microtome must operate to prepare cut rubber samples that are free of smearing and deformation?",
        hasImage: true,
        options: ["a. Below the glass transition temperature of the rubber component having the lowest Tg", "b. At the glass transition temperature of the rubber component having the lowest Tg", "c. Above the flow temperature of the rubber component having the highest flow temperature", "d. At the room temperature"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 54,
        question: "54. N330 and N326 carbon blacks have the same elemental particle size but different elemental aggregate size, shape, and surface area. Based on the dispersion performance of these two carbon blacks in natural rubber (higher dispersion coefficient represents better dispersion), which carbon black has a higher aggregate structure?",
        hasImage: true,
        options: ["a. N330", "b. N326", "c. Cannot determine the aggregate structure based on the dispersion plot"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 55,
        question: "55. Based on the storge modulus vs. strain plots shown below for N110 carbon blacks in natural rubber with various volume percent loading of CB. When the N110 CB starts temporary networking (or particles percolate from side to side to form a percolating path)?",
        hasImage: true,
        options: ["a. Between 18% and 23%", "b. At 27%", "c. At 30%", "d. Above 30%"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 56,
        question: "56. Based on the need to force butadiene to insert by bending in to form 1,4 cis addition, which metal listed below as the metal center for coordinated insertion polymerization of butadiene would deliver highest cis content? (butadiene insertion mechanism and periodic table are shown below)",
        hasImage: true,
        options: ["a. Titanium (Ti)", "b. Cobalt (Co)", "c. Nickel (Ni)", "d. Neodymium (Nd)"],
        optionImages: [null, null, null, null],
        answer: 3
    },
    {
        id: 57,
        question: "57. The diene co-monomer used in EPDM could be ENB, VNB, or DCPD as shown below. Only the double bond inside the norbornene ring (7-carbon ring) would participate in polymerization leaving the pendant double bonds for subsequent crosslinking reaction. Based on the pendant double bond position, which co-monomeric unit would have the highest crosslinking reactivity (with sulfur, peroxide, and phenolic)?",
        hasImage: true,
        options: ["a. ENB", "b. VNB", "c. DCPD", "d. All three have the same reactivity"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 58,
        question: "58. Which SBR (styrene butadiene rubber) can be chain-end functionalized at the end of polymerization?",
        hasImage: false,
        options: ["a. Solution SBR (SSBR) by anionic polymerization", "b. Emulsion SBR (ESBR) by free radical polymerization", "c. Both SSBR and ESBR cannot be chain-end functionalized"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 59,
        question: "59. Based on the molecular size listed below, which gas molecule would permeate the slowest in a butyl rubber (and is used to fill up the airplane tires)?",
        hasImage: true,
        options: ["a. Hydrogen (H2)", "b. Carbon dioxide (CO2)", "c. Oxygen (O2)", "d. Nitrogen (N2)"],
        optionImages: [null, null, null, null],
        answer: 3
    },
    {
        id: 60,
        question: "60. Hydrogenation of SIS (styrene-isoprene-styrene) triblock copolymer as shown below would yield what type of triblock copolymer?",
        hasImage: true,
        options: ["a. SEBS (Poly(styrene-b-ethylene-r-butene-b-styrene))", "b. SEPS (Poly(styrene-b-ethylene-alt-propylene-b-styrene))", "c. SPBS (Poly(styrene-b-propylene-r-butene-b-styrene))", "d. SIBS (Poly(styrene-b-isobutylene-b-styrene))"],
        optionImages: [null, null, null, null],
        answer: 1
    },
    {
        id: 61,
        question: "61. What is the purpose of adding oils during rubber compounding?",
        hasImage: false,
        options: ["a. Lubricating the mixer gears", "b. Lubricating the carbon black filler surfaces", "c. Internal cooling to slow down the heating and to extend the mix time", "d. Oils are compatibilizers for carbon black fillers"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 62,
        question: "62. What is the main purpose of adding fillers, such as silicas or carbon blacks, into thermoset rubbers during compounding at a high amount, greater than 50 phr?",
        hasImage: false,
        options: ["a. To suppress die swell thus allowing processing of rubber compounds", "b. To lower the cost by using less expensive fillers inside the rubbers", "c. To be used as light stabilizers to prevent UV degradation", "d. To lower the moduli of rubber compounds for better tack"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 63,
        question: "63. Emulsion polymerized NBR (acrylonitrile butadiene rubber, or nitrile butadiene rubber) has a r1r2= 0.005 (r1r2: product of reactivity ratios, 1-acrylonitrle, 2-butadiene) under the free radical polymerization condition. The sequence distribution of acrylonitrile and butadiene monomeric units is expected to be",
        hasImage: false,
        options: ["a. Statistically random", "b. Statistically blocky", "c. Statistically alternating"],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 64,
        question: "64. A SEBS containing 13wt% styrene has the following average molecular weights, PDI, and thermal properties. What is reason for its low Tg value of 52°C which is significantly lower than the 100°C Tg of a typical polystyrene plastic.",
        hasImage: true,
        options: ["a. The Tg suppression of polystyrene by polybutadiene (polystyrene block is not a pure styrene homopolymer but contains butadiene co-monomer)", "b. Polystyrene block is an oligomer with its molecular weight below the entanglement molecular weight of polystyrene", "c. The polystyrene block is syndiotactic"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 65,
        question: "65. During polymerization of butadiene, 1,2 addition is favored kinetically while 1,4 addition is preferred thermodynamically. By lowering polymerization temperature, one would obtain",
        hasImage: true,
        options: ["a. More 1,2 than 1,4", "b. More 1,4 than 1,2", "c. 1,2 and 1,4 contents do not change with polymerization temperature"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 66,
        question: "66. Based on the following SBS triblock copolymer phase diagram, one would obtain a thermoplastic elastomer when the styrene content is",
        hasImage: true,
        options: ["a. Below 35%", "b. 35 to 65%", "c. 65-85%", "d. Greater than 85%"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 67,
        question: "67. Could the hindered phenol (such as Irganox 1010 shown below left) and phosphite (such as Irgafos shown below right) commonly found as the stabilizers in PE and PP plastics be used as the antioxidant and antiozonant in a thermoset rubber compound? (due to the presence of backbone double bonds in a thermoset rubber that are prone to be attacked by ozone, ozone protection is necessary in all thermoset rubbers)",
        hasImage: true,
        options: ["a. Yes, only hindered phenol, Irganox 1010, is needed (Irgafos does not work)", "b. No, they cannot be used since they do not function as antiozonants, instead, 6PPD or equivalent must be used that can remove both peroxyl radicals and ozone", "c. Yes, but need to use both hindered phenol and phosphite"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 68,
        question: "68. Silane coupling agents are used to disperse silica in thermoset rubbers by raising the silica- rubber interactions and by lowering the silica-silica interactions as shown below. To accomplish this, the silane coupling agent must",
        hasImage: true,
        options: ["a. Act as a surfactant to shield the silica surfaces, but no need to react with rubbers or silicas", "b. Need to react both with silica surface silanol groups and with rubbers to provide chemical bridges between silicas and rubbers", "c. Only needs to graft onto the silica surfaces, but no need to react with rubbers"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 69,
        question: "69. What is a suitable processing temperature range for a triblock SBS copolymeric elastomer?",
        hasImage: false,
        options: ["a. Below the glass transition temperature of the polystyrene block (< 60°C)", "b. Above the glass transition temperature of the polystyrene block (> 60°C)", "c. Above the order to disorder transition temperature of the SBS triblock (> 150°C)"],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 70,
        question: "70. Considering the limited functionalities present on carbon black surfaces, what is a right amount of a carbon black coupling agent to be used in a truck tire tread compounds containing 80 phr carbon blacks in natural rubber?",
        hasImage: true,
        options: ["a. 0.5 – 3 phr", "b. 6 – 10 phr", "c. 12 – 15 phr", "d. Above 20 phr"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 71,
        question: "71. A chain-end functionalized SBR (styrene butadiene rubber) can be used as a silica polymeric dispersant. During passenger tire tread compounding using regular SBR and cis BR blends with silicas and silane coupling agents, when is the proper time for this end functionalized SBR dispersant to be introduced in the first stage of mixing?",
        hasImage: true,
        options: ["a. Together with SBR and BR at the beginning", "b. Together with silica and silane coupling agents (after the polymer introduction)", "c. After the introduction of silica and silane coupling agents"],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 72,
        question: "72. Which one rubber compound listed below that may NOT need a re-mill during compounding to extend the mix time?",
        hasImage: false,
        options: ["a. sSBR/BR silica tire tread compound using silicas and silane coupling agents (with ethanol release during silanization in compounding)", "b. BIIR inner liner compound that requires the removal of all the water to prevent blister formation during vulcanization", "c. NR carbon black compound that does not use any coupling agents"],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 73,
        question: "73. Struktol MS is a common homogenizing agent used in rubber compounds to assist the mixing of two rubbers of different polarity (or solubility parameters), such as BIIR and NR. It is an oligomeric resin with high Tg consisting of aromatic and aliphatic hydrocarbons and is soluble in rubbers. After the addition of Struktol MS homogenizer, the tack of the compound would be?",
        hasImage: true,
        options: ["a. Tack would increase since 40MS can be considered as a tackifier", "b. No change in tack since 40MS is a homogenizer, not a tackifier", "c. Tack would be lowered since 40MS would raise the compound modulus"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 74,
        question: "74. Which sulfur accelerator, DPG (diphenyl guanidine) or ZDT (zinc dialkyl dithiophosphate), should be used along with sulfur and ZnO/stearic acid in curing NR (natural rubber) to ensure highest percentage of polysulfide crosslinks for highest strengths and fatigue resistance?",
        hasImage: true,
        options: ["a. DPG", "b. ZDT", "c. Cannot determine based on the graph provided"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 75,
        question: "75. A butyl rubber can be crosslinked by sulfur cure (sulfide bridges), by peroxide cure (carbon bridges), and by phenolic cure (aromatic-heterocyclic bridges). Based on the stability of these bridges, which cure should be used to crosslink the butyl rubber bladder? A butyl rubber bladder will be used in high temperature applications (bladders are used to cure the tire repetitively under high temperature and pressure steam).",
        hasImage: false,
        options: ["a. Sulfur cure", "b. Peroxide cure", "c. Phenolic cure", "d. Either one will work since crosslink temperature stability does not depend on the crosslink chemical composition"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 76,
        question: "76. Based on the compound mixing torque plot shown below (for a SBR/BR tire tread compound), which tackifier resin, resin A, B, or C, appears to have a better dispersion/mixing at the end during the first stage of SSBR/BR mixing with silica/silane (step shown below is the addition step)?",
        hasImage: true,
        options: ["a. Resin A", "b. Resin B", "c. Resin C", "d. Cannot determine based on the plot shown"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 77,
        question: "77. In a sulfur-cured natural rubber using zinc oxide and stearic acid as the activators and sulfur accelerators, what would an increase in curative amount (including all, from sulfur, ZnO, St. acid, accelerators) lead to? (under the same cure temperature and condition)",
        hasImage: false,
        options: ["a. Higher crosslink density, but more non-uniform cure", "b. Higher crosslink density and more uniform cure", "c. Does not affect crosslink density, crosslink density controlled by temperature only"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 78,
        question: "78. Since anionic polymerization has no termination step, it is an unsteady state chain-growth polymerization. What type of molecular weight distribution is expected for an unsteady state anionic polymerization (different from steady state polymerizations of free-radical, cationic, and metal coordinated insertion)?",
        hasImage: false,
        options: ["a. Poisson distribution", "b. Gaussian distribution", "c. Most probable (Flory Schulz) distribution", "d. Inverse Langevin distribution"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 79,
        question: "79. Which elastic material listed below has its elasticity originated not from entropy, but from enthalpy?",
        hasImage: false,
        options: ["a. Crosslinked thermoset rubber (crosslinked natural rubber)", "b. SBS thermoplastic elastomer (with polybutadiene block being the continuous phase)", "c. Thermoplastic vulcanizate (crosslinked EPDM dispersions inside a PP matrix)"],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 80,
        question: "80. Entropic elasticity of a rubber is different from the enthalpic elasticity found in a metal spring. Considering that the entropy is multiplied by temperature in a free energy expression, raising the temperature of a crosslinked butadiene rubber would lead to",
        hasImage: false,
        options: ["a. Higher stretching stress", "b. Lower stretching stress", "c. No effects on stretching stress"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 81,
        question: "81. All crosslinked thermoset rubbers can be considered ideal at deformation less than 100%. When the deformation is above 100%, mechanical behavior of all rubbers deviates from their ideal behavior. This deviation is primarily due to the breakdown of which assumption used in derive ideal rubber elasticity theory?",
        hasImage: false,
        options: ["a. Gaussian chain segment distribution (change to inversed Langevin distribution under large deformation)", "b. Incompressibility of rubbers (rubber become compressible at large deformation)", "c. An increase in internal energy (internal energy decreases, not increases, at large deformation)"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 82,
        question: "82. Based on the heats of fusion, or heats of melting, of crystalline plastics listed below, which crystalline plastic listed below would have the highest crystalline modulus?",
        hasImage: true,
        options: ["a. PE (polyethylene)", "b. PP (isotactic polypropylene)", "c. PET (polyethylene terephthalate)", "d. Nylon 66 (poly(hexamethylene adipamide))"],
        optionImages: [null, null, null, null],
        answer: 3
    },
    {
        id: 83,
        question: "83. About strain-induced crystallization in thermoset rubbers, which statement shown below is correct?",
        hasImage: false,
        options: ["a. None of the thermoset rubbers can strain-induced crystallize", "b. All thermoset rubbers can strain-induced crystallize at room temperature and above", "c. All thermoset rubbers can strain-induced crystallize but at different temperatures. Only natural rubber and chloroprene rubber can strain-induced crystallize at temperatures from -25 to 75°C."],
        optionImages: [null, null, null],
        answer: 2
    },
    {
        id: 84,
        question: "84. Mixing elements used in an intermeshing twin screw extruder (co- or counter-rotating) for plastic blending is predominantly used to promote which flow field listed below to facilitate drop break up and deliver better mixing morphology?",
        hasImage: true,
        options: ["a. Elongational (extensional) flow", "b. Shear flow", "c. Compressive flow", "d. Rotational flow"],
        optionImages: [null, null, null, null],
        answer: 0
    },
    {
        id: 85,
        question: "85. Viscosity curves of 5 polyethylene melts measured at 150°C can be found below, which PE shown within this plot is expected to be linear (no long chain branches) and with narrow molecular weight distribution (possibly by a metallocene catalyst)?",
        hasImage: true,
        options: ["a. PE1", "b. PE2", "c. PE3", "d. PE4"],
        optionImages: [null, null, null, null],
        answer: 3
    },
    {
        id: 86,
        question: "86. Bound rubbers are rubbers physisorbed onto the filler surfaces as shown below by the simulation. For a carbon-black filled butadiene rubber, BR, compound, would the bound BR have (vs. bulk, not absorbed BR)?",
        hasImage: true,
        options: ["a. Higher glass transition temperature and modulus", "b. Lower modulus and the same glass transition temperature", "c. Bound BR is the same as the bulk regular BR"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 87,
        question: "87. Based on the solubility parameter values listed below for 6PPD antioxidant/antiozonant and for rubbers, would 6PPD bloom to the NBR40 (nitrile butadiene rubber with 40% acrylonitrile) rubber surface to protect NBR from being attacked by ozone leading to surface ozone cracks?",
        hasImage: true,
        options: ["a. 6PPD cannot offer protection to NBR40 due to its high solubility in NBR (will not bloom to the surface)", "b. 6PPD would bloom to the surface to offer protection", "c. Solubility parameters cannot be used to determine surface blooming and phase separation"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 88,
        question: "88. Experimentally measured Payne effects of silica-filled sSBR compounds (25% styrene) are shown in the bottom plot. The silica used is Z1165MP at 80 phr and the silane coupling agent employed is Si75. MSi means no silane coupling agents are used whereas Ac-14 means 14 phr of Si75 is used. Based on this plot, what is the optimal amount required for Si75 to achieve the best silica dispersion?",
        hasImage: true,
        options: ["a. 3 phr", "b. 8 phr", "c. 14 phr"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 89,
        question: "89. Based on the SBS morphology shown below (comparing with SBS triblock phase diagram shown in Question 66), what is the estimated styrene content in this SBS?",
        hasImage: true,
        options: ["a. < 15%", "b. 15 – 30%", "c. 35 – 45%", "d. > 85%"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 90,
        question: "90. The lack of elastic recovery during first deformation found in a polyolefin elastomer (POE), as shown below for a propylene-based elastomer, comes from?",
        hasImage: true,
        options: ["a. Break up, realignment, and migration of polypropylene crystal agglomerates", "b. Melting and removal of polypropylene crystals", "c. Strain-induced crystallization of polypropylene backbone random short blocks"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 91,
        question: "91. Morphology of an EPDM/PP thermoplastic vulcanizate is shown below where the majority EPDM rubber phase is dispersed inside the minority polypropylene plastic phase. How can this morphology be achieved?",
        hasImage: true,
        options: ["a. By crosslinking EPDM to drive its viscosity to infinity and to force phase inversion", "b. By using super low viscosity polypropylene (PP used are oligomers)", "c. By using super high viscosity polypropylene (PP used are ultra-high molecular weight PP with its MW exceeding 3 million g/mole)"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 92,
        question: "92. Hydrodynamic effects on compound modulus of carbon black-filled chloroprene rubber can be modelled by Guth-Gold model as shown below. The model contains only the volume faction of the carbon black fillers and does not concern with the modulus of carbon black. If the filler is changed from carbon blacks to silicas but keeping at the same amount of 7 vol%, should the Guth-Gold model be modified?",
        hasImage: true,
        options: ["a. No, the same equation applies since hydrodynamic effects concern only with the filler’s volume", "b. Yes, a correction factor needs to be introduced to account for the difference in modulus values between carbon blacks and silicas", "c. Yes, at 7 volume%, silica would percolate and the model is no longer applicable"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 93,
        question: "93. Increasing filler loading in a thermoset rubber would lead to filler percolation at * and changes in properties of a filled rubber. Could one conclude that the filler content delivering the abrasion minimum and elongation maximum of a filled-rubber compound represent?",
        hasImage: true,
        options: ["a. Filler percolation threshold", "b. Filler phase inversion (filler becomes the continuous phase with the rubber being dispersed)", "c. No relation to the filler phase morphology"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 94,
        question: "94. Ideal rubber equation is like the ideal gas law since both were derived by assuming no internal energy contribution. Hence, stretching a crosslinked rubber is equal to",
        hasImage: false,
        options: ["a. Squeezing a ballon", "b. Blow up a ballon", "c. Stretching a ballon"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 95,
        question: "95. Based on the failure envelope shown below for a crosslinked rubber, the tensile strength is expected to change with crosslink density in?",
        hasImage: true,
        options: ["a. Tensile strength would continue to rise with crosslink density", "b. Tensile strength would be lower with increasing crosslink density", "c. Tensile strength would rise first and then fall with crosslink density leading to a maximum", "d. Tensile strength would fall first and then rise leading to a minimum"],
        optionImages: [null, null, null, null],
        answer: 2
    },
    {
        id: 96,
        question: "96. After crosslinking, the plateau modulus of a crosslinked rubber shown below does not transition to flow and appears to increase with increasing temperature. Would you expect the modulus to increase with increasing temperature?",
        hasImage: true,
        options: ["a. Yes, in accordance to rubber elasticity theory", "b. No, it should go down since density is lowered with increasing temperature", "c. No, the observed data are the result of instrumental errors"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 97,
        question: "97. An increase in cure temperature during crosslinking of a thermoset rubber would lead to",
        hasImage: false,
        options: ["a. Faster cure and higher crosslink density", "b. Faster cure and lower crosslink density", "c. Faster cure and no change in crosslink density"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 98,
        question: "98. Double bonds are required to be present in a thermoset rubber for it to be crosslinked. However, not all crosslink chemistry would remove the double bonds after reaction. Which cure shown below does not remove the double bonds on the thermoset rubber after crosslinking reaction?",
        hasImage: false,
        options: ["a. Sulfur cure", "b. Peroxide cure", "c. Phenolic cure"],
        optionImages: [null, null, null],
        answer: 0
    },
    {
        id: 99,
        question: "99. The processing windows for silica surface silanization during rubber compounding using three different silane coupling agents of Si69, Si75, and Si266 are shown below. Based on this plot, what is the optimal dump temperature for a silica-containing rubber compound that employs silane coupling agents? (the vertical axis is the compound Mooney value)",
        hasImage: true,
        options: ["a. 135°C", "b. 150°C", "c. 165°C"],
        optionImages: [null, null, null],
        answer: 1
    },
    {
        id: 100,
        question: "100. A customer complained an unusual higher cure rate, much higher than usual, during crosslinking of a bromobutyl, BIIR, curing envelope. Subsequent analysis reveals higher endo allylic bromide to exo allylic bromide content than usual in these production lots. Note that endo allylic bromide is thermodynamically preferred whereas exo allylic bromide is kinetically favored (see Question 65). To bring back higher exo vs. endo allylic bromide, what the production engineer should do?",
        hasImage: false,
        options: ["a. Lower the bromination temperature", "b. Raise the bromination temperature", "c. Keep the same bromination temperature but increase the bromine amount", "d. Keep the same bromination temperature but lower the bromine amount"],
        optionImages: [null, null, null, null],
        answer: 0
    }
];
