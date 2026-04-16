const quizData = [
    {
        id: 1,
        question: "1. Structures of a polymer are determined by",
        hasImage: false,
        options: ["a. Monomers, Polymerization Processes, Catalysts", "b. Reactor type, Reactor Temperature, Reactor Residence Time", "c. Polymerization, Separation, Finishing", "d. Molecular Weight, Composition, Rheology"],
        answer: 0
    },
    {
        id: 2,
        question: "2. An oligomer would become a polymer when its molecular weight exceeds how many times of its entangle molecular weight.",
        hasImage: false,
        options: ["a. 1", "b. 2", "c. 3", "d. 4"],
        answer: 1
    },
    {
        id: 3,
        question: "3. What is the name for the following polymer?",
        hasImage: true,
        options: ["a. Poly(methyl acrylate)", "b. Poly(methyl methacrylate)", "c. Poly(vinyl acetate)", "d. Poly(vinyl propionate)"],
        answer: 2
    },
    {
        id: 4,
        question: "4. What is the name for the following polymer?",
        hasImage: true,
        options: ["a. Polyamide 68", "b. Polyamide 610", "c. Polyester 610", "d. Polyamide 106"],
        answer: 1
    },
    {
        id: 5,
        question: "5. Polydispersity index, or PDI, is defined as",
        hasImage: false,
        options: ["a. Mw/Mn", "b. Mn/Mw", "c. Mz/Mw", "d. Mz/Mn"],
        answer: 0
    },
    {
        id: 6,
        question: "6. Which one thermo-mechanical characteristic (the curve of storage modulus, E’ or G’, plotted against the temperature) that an oligomer does NOT have?",
        hasImage: false,
        options: ["a. Glassy plateau", "b. Glass transition", "c. Rubbery plateau", "d. Flow"],
        answer: 2
    },
    {
        id: 7,
        question: "7. Which polymeric material listed below has its glass transition temperature below 0°C?",
        hasImage: false,
        options: ["a. Polystyrene (a glassy plastic)", "b. Polyethylene terephthalate (a crystalline plastic with glassy amorphous phase)", "c. Epoxy (a thermoset glassy plastic)", "d. Poly(cis-1,4-butadiene) (a rubber)"],
        answer: 3
    },
    {
        id: 8,
        question: "8. Condensation polymerization by esterification is considered as",
        hasImage: false,
        options: ["a. Step growth polymerization", "b. Addition polymerization", "c. Chain growth polymerization", "d. Anionic polymerization"],
        answer: 0
    },
    {
        id: 9,
        question: "9. Which step listed below is NOT a part of chain growth polymerization?",
        hasImage: false,
        options: ["a. Initiation", "b. Propagation", "c. Termination", "d. Amidation"],
        answer: 3
    },
    {
        id: 10,
        question: "10. Which type of polymer listed below has a residual carbon-carbon double bond in every monomeric unit after polymerization?",
        hasImage: false,
        options: ["a. Vinyl polymers (polymerization from vinyl monomers)", "b. Polydienes (polymerization from diene monomers)", "c. Vinylidene polymers (polymerization from vinylidene monomers)", "d. Polyesters (polymerization from diol and di-acid monomers)"],
        answer: 1
    },
    {
        id: 11,
        question: "11. Which polymer type listed below that has a rigid aromatic and heterocyclic backbone that can lead to high glass transition temperatures and is commonly used in microelectronic packaging?",
        hasImage: false,
        options: ["a. Vinyl polymer", "b. Aliphatic polyamide", "c. Polydiene", "d. Polyimide"],
        answer: 3
    },
    {
        id: 12,
        question: "12. Which polymerization method listed below is the only method that can delivered isotactic polypropylene?",
        hasImage: false,
        options: ["a. Radical polymerization", "b. Anionic polymerization", "c. Cationic polymerization", "d. Metal coordinated insertion polymerization 3"],
        answer: 3
    },
    {
        id: 13,
        question: "13. 2,1 insertion of propylene during propylene polymerization leads to",
        hasImage: false,
        options: ["a. Isotactic polypropylene (iPP)", "b. Head-to-head polypropylene (hhPP)", "c. Syndiotactic polypropylene (sPP)", "d. Atactic polypropylene (aPP)"],
        answer: 1
    },
    {
        id: 14,
        question: "14. Which polymer listed below has 100% stereo-regularity with no stereo defects?",
        hasImage: false,
        options: ["a. Isotactic polypropylene", "b. Isotactic polystyrene", "c. Syndiotactic polypropylene", "d. Protein (or L-polypeptide)"],
        answer: 3
    },
    {
        id: 15,
        question: "15. Which rotational state is preferred (with the lowest energy) for a vinyl polymer with a carbon-carbon single-bond backbone?",
        hasImage: false,
        options: ["a. Trans", "b. Gauche +", "c. Gauche -", "d. No preference"],
        answer: 0
    },
    {
        id: 16,
        question: "16. Which method listed below can be used to measure tacticity in isotactic polypropylene?",
        hasImage: false,
        options: ["a. NMR", "b. IR", "c. Raman", "d. MS (Mass spectrometry)"],
        answer: 0
    },
    {
        id: 17,
        question: "17. Which product of reactivity ratios of copolymerization (monomer1 and monomer2) listed below would lead to statistically blocky copolymers?",
        hasImage: false,
        options: ["a. r1r2 = 1", "b. r1r2 >>1", "c. r1r2 << 1", "d. r1r2 = 0"],
        answer: 1
    },
    {
        id: 18,
        question: "18. What type of copolymer is the one shown below?",
        hasImage: true,
        options: ["a. A graft copolymer", "b. An interpenetrating copolymer", "c. A block copolymer", "d. A crosslinked copolymer"],
        answer: 2
    },
    {
        id: 19,
        question: "19. Which average molecular weight listed below in a polymer has the highest value?",
        hasImage: false,
        options: ["a. Weight average molecular weight", "b. Viscosity average molecular weight", "c. Z average molecular weight", "d. Number average molecular weight 4"],
        answer: 2
    },
    {
        id: 20,
        question: "20. Which chain growth polymerization listed below has no termination routes and is considered as a living polymerization?",
        hasImage: false,
        options: ["a. Anionic polymerization", "b. Cationic polymerization", "c. Radical polymerization", "d. Metal coordinated insertion polymerization"],
        answer: 0
    },
    {
        id: 21,
        question: "21. Steady state chain-growth polymerization would lead to what type of molecular weight distribution?",
        hasImage: false,
        options: ["a. Poisson distribution", "b. Gaussian distribution", "c. Most probable (Flory Schulz) distribution", "d. Langevin distribution"],
        answer: 2
    },
    {
        id: 22,
        question: "22. Radius of gyration of a polymer coil in a “good” solvent (self-avoiding walk, not random walk) is dependent of its molecular weight to the power of",
        hasImage: false,
        options: ["a. 0.5", "b. 0.6", "c. 0.9", "d. 1.0"],
        answer: 1
    },
    {
        id: 23,
        question: "23. Which monomer pair listed below would lead to a linear condensation polymer?",
        hasImage: false,
        options: ["a. Bifunctional and bifunctional monomers", "b. Bifunctional and trifunctional monomers", "c. Trifunctional and trifunctional monomers", "d. Trifunctional and tetrafunctional monomers"],
        answer: 0
    },
    {
        id: 24,
        question: "24. Which pair listed below has the lowest mixing conformational entropy?",
        hasImage: false,
        options: ["a. Solvent-solvent, regular solutions", "b. Solvent-polymer, polymer solutions", "c. Polymer-polymer, polymer blends", "d. None, all have zero mixing entropy"],
        answer: 2
    },
    {
        id: 25,
        question: "25. What kind of polymer is the one shown below?",
        hasImage: true,
        options: ["a. Isotactic polypropylene", "b. Isotactic polystyrene", "c. Syndiotactic polypropylene", "d. Syndiotactic polystyrene 5"],
        answer: 3
    },
    {
        id: 26,
        question: "26. Based on the solubility table listed below for various solvents, which solvent would be able to dissolve polybutadiene that has a solubility parameter of 17.2 (MPa) 1/2 ?",
        hasImage: true,
        options: ["a. Acetone", "b. Cyclohexane", "c. n-Decane", "d. Methanol"],
        answer: 1
    },
    {
        id: 27,
        question: "27. In accordance to the measured intrinsic viscosity values of polyisobutene (designated A in the plot) in various solvents with different solubility parameters as shown below, what is the solubility parameter of polyisobutene (also called polyisobutylene)?",
        hasImage: true,
        options: ["a. 7.4 (cal/cm 3 ) 1/2", "b. 7.9 (cal/cm 3 ) 1/2", "c. 8.8 (cal/cm 3 ) 1/2", "d. 9.2 (cal/cm 3 ) 1/2 6"],
        answer: 1
    },
    {
        id: 28,
        question: "28. For a polymer coil in a theta solvent (not a good solvent) that follows random walk with no excluded volume, the coil size of this polymer (radius of gyration or end-to-end distance) is proportional to its degree of polymerization to the power of",
        hasImage: false,
        options: ["a. 0", "b. 0.5", "c. 1.0", "d. 3.4"],
        answer: 1
    },
    {
        id: 29,
        question: "29. All the polymers listed below have the same molecular weight and composition but have different topology, which polymer listed below has the smallest coil dimension?",
        hasImage: false,
        options: ["a. A linear homopolymer", "b. A linear triblock copolymer", "c. A comb polymer with 10 comb-arms", "d. A star polymer with 15 star-arms"],
        answer: 3
    },
    {
        id: 30,
        question: "30. Which method is used by polymer producers to provide an estimate of the polyolefin plastic molecular weight?",
        hasImage: false,
        options: ["a. Melt indexer (for melt index)", "b. Mooney rheometer (for Mooney viscosity)", "c. Solution viscometer (for intrinsic viscosity)", "d. Gel permeation chromatography (for molecular weight distributions and averages)"],
        answer: 0
    },
    {
        id: 31,
        question: "31. What is a typical overlapping concentration of a polymer solution with a polymer of 100,000 g/mole weight average molecular weight?",
        hasImage: false,
        options: ["a. 0.01 wt%", "b. 0.1 wt%", "c. 1 wt%", "d. 10 wt%"],
        answer: 2
    },
    {
        id: 32,
        question: "32. Based on the name of PC, polycarbonate, it can be derived that a PC is synthesized by",
        hasImage: false,
        options: ["a. Addition polymerization of carbonate monomers", "b. Condensation polymerization to form carbonate linkages", "c. Metal catalyzed insertion polymerization of carbonate monomers", "d. Cationic polymerization of carbonate monomers"],
        answer: 1
    },
    {
        id: 33,
        question: "33. Which chain-to-chain interaction between polymer chains can be considered the weakest",
        hasImage: false,
        options: ["a. Dispersive interactions", "b. Pi-pi interactions (between aromatic rings)", "c. Dipole-dipole polar interactions", "d. Hydrogen bonds"],
        answer: 0
    },
    {
        id: 34,
        question: "34. Which polymer listed below is preferred to be polymerized in a “batch” polymerization reactor due to the slow growth in molecular weight, instead of a continuous polymerization reactor, to achieve high conversions and molecular weights?",
        hasImage: false,
        options: ["a. Polyisobutylene by cationic polymerization", "b. Polyethylene terephthalate by condensation polymerization (esterification)", "c. Polypropylene by metal coordinated insertion polymerization", "d. Polymethyl methacrylate by emulsion radical polymerization 7"],
        answer: 1
    },
    {
        id: 35,
        question: "35. The log modulus (storage modulus) and temperature dynamic mechanical curves for the blue, red, and black materials are shown below. For the BLUE curve, what type of polymeric material could it be (its glass transition is at around 100°C)?",
        hasImage: true,
        options: ["a. A polyethylene (a crystallin plastic with rubbery amorphous phase)", "b. A polystyrene (a glassy plastic)", "c. An epoxy (a thermoset plastic)", "d. A polybutadiene (a thermoset rubber)"],
        answer: 1
    },
    {
        id: 36,
        question: "36. The critical point for polymer solution is where both the first and second derivatives of free energy of mixing are zero. Based on the Flory-Huggins equation for a polymer solution where the degree of polymerization for the polymer is greater than 10,000 (or a polymer contains more than 10,000 monomeric units), this critical point will have a  value of",
        hasImage: false,
        options: ["a. 0", "b. 0.5", "c. 1.0", "d. 1.5"],
        answer: 1
    },
    {
        id: 37,
        question: "37. A crystalline plastic has two thermal transitions; one is a first order transition while the other one is a second order transition. Which phase transition listed below is the second order thermal transition that can be found in a crystalline plastic?",
        hasImage: false,
        options: ["a. Crystallization", "b. Melting", "c. Glass transition", "d. Flow transition"],
        answer: 2
    },
    {
        id: 38,
        question: "38. A glassy plastic with only dispersive interactions between polymer chains. Its heat distortion temperature would be raised by adjusting its backbone structure so to",
        hasImage: false,
        options: ["a. Increase its glass transition temperature", "b. Decrease its glass transition temperature", "c. Lower its bulk modulus", "d. Increase its thermal expansion coefficient"],
        answer: 0
    },
    {
        id: 39,
        question: "39. Which polyethylene listed below has many long chain branches that is produced by high- pressure free radical polymerization?",
        hasImage: false,
        options: ["a. HDPE (high density polyethylene)", "b. LDPE (low density polyethylene)", "c. LLDPE (linear low density polyethylene) 8"],
        answer: 1
    },
    {
        id: 40,
        question: "40. Commercial polyethylene copolymers with polar co-monomers, such as vinyl acetate, methyl acrylate, or acrylic acid, are synthesized by",
        hasImage: false,
        options: ["a. Free radical polymerization", "b. Metal-coordinated insertion polymerization", "c. Anionic polymerization", "d. Cationic polymerization"],
        answer: 0
    },
    {
        id: 41,
        question: "41. Melt indexer is a common tool used to measure melt viscosity of a plastic (quantity flow out in 10 minutes at a given temperature under a given weight). This melt index value is used as an indicator for the molecular weight (viscosity average molecular weight) of a plastic. Melt indexer is operated at a shear rate in between",
        hasImage: false,
        options: ["a. 0.01 to 0.1 1/s", "b. 0.1 to 1 1/s", "c. 1 to 10 1/s", "d. 100 to 500 1/s"],
        answer: 2
    },
    {
        id: 42,
        question: "42. Which specific polymer processing of a plastic listed below demands that the molecular weight distribution of the plastic be narrow with PDI (Mw/Mn) less than 3?",
        hasImage: false,
        options: ["a. Rotational molding", "b. Thermoforming", "c. Injection molding", "d. Fiber spinning"],
        answer: 3
    },
    {
        id: 43,
        question: "43. Which plastic listed below would have extensional flow hardening allowing it to be foamed? (all plastics listed below have linear backbone)",
        hasImage: false,
        options: ["a. HDPE (high density polyethylene, linear)", "b. PS (polystyrene, linear)", "c. PP (polypropylene, linear)", "d. PET (polyethylene terephthalate, linear)"],
        answer: 1
    },
    {
        id: 44,
        question: "44. Increasing co-monomer defect content in a polyethylene copolymer would lower polyethylene copolymer’s crystallinity, density, melting temperature, and crystallite size. It would also modify crystalline morphology and transition polyethylene copolymer from a crystalline plastic to",
        hasImage: false,
        options: ["a. A glassy plastic", "b. A plastomer", "c. A thermoset rubber", "d. A thermoset plastic"],
        answer: 1
    },
    {
        id: 45,
        question: "45. What is the most preferred composition distribution in a polyethylene copolymer to maximize its tie chain concentration for toughness while maintaining good processability?",
        hasImage: false,
        options: ["a. A uniform composition distribution (both short and long chains have the same monomer content)", "b. A slope down composition distribution where short chain has a higher co-monomer content with co-monomer content decreasing with increasing chain length, or molecular weight)", "c. A step-up composition distribution where all short chains have a lower co-monomer content while all long chains have a higher co-monomer content 9"],
        answer: 2
    },
    {
        id: 46,
        question: "46. Among the metallocene catalysts with the following symmetry, which one can lead to isotactic polypropylene?",
        hasImage: true,
        options: ["a. C2v achiral", "b. Cs achiral", "c. C1 chiral", "d. C2 chiral"],
        answer: 3
    },
    {
        id: 47,
        question: "47. How many material components one can find in an ICP (impact copolymer) obtained from serial slurry-gas phase polymerization using multi-site ZN (Ziegler-Natta) titanium chloride supported on magnesium chloride catalysts",
        hasImage: false,
        options: ["a. One (PP)", "b. Two (PP and EP)", "c. Three (iPP (isotactic), aPP (atactic), and EP)", "d. Four (iPP, aPP, EPR (ethylene-propylene amorphous rubber), EPC (ethylene- propylene crystalline soft plastic))"],
        answer: 3
    },
    {
        id: 48,
        question: "48. Four generations of ZN (Ziegler-Natta) catalysts, from benzoate to phthalate to diether to succinate internal donors, cannot deliver PDI for a polypropylene (PP) homopolymer that is low enough to satisfy the needs of spun bond and melt blown fiber spinning as shown by the figure below. To deliver a lower PDI in a PP homopolymer, what is the process that a PP producer commonly used?",
        hasImage: true,
        options: ["a. Peroxide chain scission", "b. Peroxide crosslinking", "c. Peroxide grafting", "d. Electron beam irradiation 10"],
        answer: 0
    },
    {
        id: 49,
        question: "49. Poly(vinyl chloride), PVC, is synthesized by free radical suspension polymerization, which backbone structure with a limited amount can be found in a PVC?",
        hasImage: false,
        options: ["a. Head to head, or tail to tail, addition (or 2,1 insertion)", "b. Long chain branches", "c. Short chain branches (by back biting)", "d. Syndiotactic blocks"],
        answer: 3
    },
    {
        id: 50,
        question: "50. PETG is a glassy plastic and is derived from a PET (polyethylene terephthalate) crystalline plastic. To completely remove the crystallinity in a PET to form a PETG, it is achieved by",
        hasImage: false,
        options: ["a. Adding a tri-functional co-monomer to bring in long chain branches", "b. Adding a di-functional co-monomer to interrupt backbone chain regularity", "c. Adding a tetra-functional co-monomer to deliver a crosslinked network"],
        answer: 1
    },
    {
        id: 51,
        question: "51. ABS, acrylonitrile-butadiene-styrene, plastic is",
        hasImage: false,
        options: ["a. A terpolymer by copolymerizing acrylonitrile, butadiene, and styrene monomers", "b. A binary blend of styrene-acrylonitrile copolymer with polybutadiene homopolymer", "c. A ternary blend of styrene-acrylonitrile copolymer, polybutadiene homopolymer, and comb-block copolymer with polybutadiene comb arms and styrene-acrylonitrile copolymer backbone", "d. A ternary blend of polyacrylonitrile, polystyrene, and polybutadiene"],
        answer: 2
    },
    {
        id: 52,
        question: "52. Polystyrene, PS, homopolymer is synthesized by bulk free-radical polymerization of styrene, which backbone structure can be found in a PS?",
        hasImage: false,
        options: ["a. Head to head (or tail to tail) addition (or 2,1 insertion)", "b. Long chain branches", "c. Isotactic blocks", "d. Atactic 1,2 addition of styrene"],
        answer: 3
    },
    {
        id: 53,
        question: "53. Both PC, polycarbonate, and PS, polystyrene, have only dispersive interactions between chains. The glass transition temperature of PC is higher than that of PS. Comparing PC and PS, which plastic is expected to have a higher tensile modulus?",
        hasImage: false,
        options: ["a. PC", "b. PS", "c. About the same"],
        answer: 0
    },
    {
        id: 54,
        question: "54. Considering that the crack tip radius is about 100 nm, which polybutadiene rubber dispersion size (number average) inside a polystyrene glassy plastic matrix listed below would provide the highest toughness in a rubber-toughened PS with 15% rubbers?",
        hasImage: false,
        options: ["a. 1 micron", "b. 0.5 micron", "c. 0.2 micron", "d. 0.01 micron"],
        answer: 2
    },
    {
        id: 55,
        question: "55. Which crystallization statement shown below is correct",
        hasImage: false,
        options: ["a. Coil dimension is preserved (not changed) during crystallization", "b. Coil dimension is reduced during crystallization", "c. Coil dimension is raised during crystallization", "d. Coils no longer exist, all chains become fully extended (no coil dimension) 11"],
        answer: 0
    },
    {
        id: 56,
        question: "56. Which polyolefin listed below satisfies the Dalquist criterion with plateau modulus below 0.1 MPa and is suitable as an adhesive material by itself? (The equation for rubbery plateau shear modulus is provided below)",
        hasImage: true,
        options: ["a. Polypropylene (isotactic, Me = 7,000)", "b. Polyisobutylene (Me = 9,700)", "c. Polyhexene (Me = 13,900)", "d. Polyoctadecene (Me = 109,000)"],
        answer: 3
    },
    {
        id: 57,
        question: "57. The blend morphology development of an immiscible polyolefin blend is by",
        hasImage: false,
        options: ["a. Nucleation and growth", "b. Spinodal decomposition", "c. Drop breakup and coalescence", "d. Ostwald ripening"],
        answer: 2
    },
    {
        id: 58,
        question: "58. For a crystalline plastic, highest crystallization rate occurs at the temperature of",
        hasImage: false,
        options: ["a. melting", "b. crystallization", "c. halfway between melting and glass transition", "d. glass transition"],
        answer: 2
    },
    {
        id: 59,
        question: "59. The viscosity average molecular weight, as determined from the viscosity measurements, of a plastic is closest in value to which of the following average molecular weight",
        hasImage: false,
        options: ["a. Number average molecular weight", "b. Weight average molecular weight", "c. Volume average, or z-average, molecular weight", "d. Peak molecular weight of the molecular weight distribution"],
        answer: 1
    },
    {
        id: 60,
        question: "60. Which crystallin plastic with its coil and crystal sizes listed below has the highest tie chain concentration in between crystals? (all these crystalline plastics have the same amount of crystallinity)",
        hasImage: false,
        options: ["a. Big coils and small crystals", "b. Small coils and big crystals", "c. Big coils and big crystals", "d. Small coils and small crystals"],
        answer: 0
    },
    {
        id: 61,
        question: "61. Among the hierarchical crystalline structures in a plastic, which crystalline structure is responsible for the visible light scattering and the low light transparency in a plastic film?",
        hasImage: false,
        options: ["a. Crystal unit cell", "b. Chain folded crystals", "c. Crystalline-amorphous lamellae", "d. Spherulites of lamellae assembly 12"],
        answer: 3
    },
    {
        id: 62,
        question: "62. Based on the heats of fusion, or heats of melting, of crystalline plastics listed below, which crystalline plastic listed below would have the highest crystalline modulus?",
        hasImage: true,
        options: ["a. PE (polyethylene)", "b. PP (isotactic polypropylene)", "c. PET (polyethylene terephthalate)", "d. Nylon 66 (poly(hexamethylene adipamide))"],
        answer: 3
    },
    {
        id: 63,
        question: "63. Permeation is the rate a gas or vapor passing through a polymer and the permeability of a polymer is defined by",
        hasImage: false,
        options: ["a. Gas diffusivity only", "b. Gas solubility only", "c. Gas diffusivity times gas solubility", "d. Internal gas concentration gradient"],
        answer: 2
    },
    {
        id: 64,
        question: "64. A crystalline plastic with closely packed backbone structure in the amorphous phase would lower the available free volume leading to a lower gas permeability (note that crystals are impermeable with no free volumes). Based on the amorphous packing, which plastic listed below is expected to have lowest permeability?",
        hasImage: false,
        options: ["a. EVOH 44 (ethylene-vinyl alcohol copolymer with 44% vinyl alcohol)", "b. PA 6 or Nylon 6 (polyamide)", "c. PET (polyethylene terephthalate)", "d. HDPE (high density polyethylene)"],
        answer: 0
    },
    {
        id: 65,
        question: "65. A fatter chain would be more difficult to entangle and has a higher entanglement molecular weight. Which polyolefin listed below would have the highest entanglement molecular weight?",
        hasImage: false,
        options: ["a. Polyethylene", "b. Polypropylene", "c. Polybutene", "d. Polyhexene ↑ 13"],
        answer: 3
    },
    {
        id: 66,
        question: "66. Which rubber listed below can incorporate most (largest amount) carbon black fillers? (their entanglement molecular weights are shown in the bracket)",
        hasImage: false,
        options: ["a. EPDM rubber (Me = 2,100 g/mol)", "b. Cis BR, cis butadiene rubber (Me = 3,000 g/mol)", "c. NR, natural rubber (Me = 4,000 g/mol)", "d. IIR, butyl rubber (Me = 9,700 g/mol)"],
        answer: 0
    },
    {
        id: 67,
        question: "67. Tackifiers are low molecular wight oligomers. They are added into a polymer so to lower its rubbery plateau modulus to below the 0.1 MPa Dahlquist requirement for tack. Tackifiers can lower a polymer’s plateau modulus by",
        hasImage: false,
        options: ["a. Disentangle polymer chains so to raise its entanglement molecular weight", "b. Promote more entanglements so to lower its entanglement molecular weight", "c. Swell the polymer so to lower its density", "d. Contract the polymer so to raise its density"],
        answer: 2
    },
    {
        id: 68,
        question: "68. What is the preferred glass transition temperature, Tg, of a hot melt adhesive or a pressure- sensitive adhesive after the addition of tackifiers to allow easy and clean slitting of adhesive webs during manufacturing?",
        hasImage: false,
        options: ["a. 0°C", "b. 50°C", "c. -50°C", "d. 20°C"],
        answer: 0
    },
    {
        id: 69,
        question: "69. Which chain motion inside a polymer is responsible for its glass transition?",
        hasImage: false,
        options: ["a. Short segmental rotational motions with 4 or more chain atoms", "b. Segmental motions in between entanglements with 50 or more chain atoms", "c. Segmental reptation through entanglements", "d. Full chain reptation out of the tube defined by entanglements"],
        answer: 1
    },
    {
        id: 70,
        question: "70. Time-temperature equivalency, or time-temperature superposition principle, in a polymer can relate deformation at a fixed time/frequency at a higher temperature to",
        hasImage: false,
        options: ["a. Deformation at a lower temperature but at a shorter time", "b. Deformation at a lower temperature but at a lower frequency", "c. Deformation at a lower temperature but at a higher frequency", "d. Deformation at a lower temperature but with a smaller deformation"],
        answer: 1
    },
    {
        id: 71,
        question: "71. For a molten polymer, its melt viscosity is related to its molecular weight to the power of (based on chain reptation out of the tube defined by the entanglements but with tube renewal due to entanglement fluctuation)",
        hasImage: false,
        options: ["a. 0.5", "b. 1", "c. 2", "d. 3.4"],
        answer: 3
    },
    {
        id: 72,
        question: "72. Which rheometer listed below can only measure shear viscosity at relatively low shear rate, below 100 1/s shear rate?",
        hasImage: false,
        options: ["a. SAOS- small amplitude oscillatory shear", "b. Capillary rheometer", "c. SER- Sentmanat extensional rheometer", "d. Rheotens- melt strength rheometer 14"],
        answer: 0
    },
    {
        id: 73,
        question: "73. Whis is the required rheological behavior in a plastic melt for this plastic to be processed by foaming and by blown film operations?",
        hasImage: false,
        options: ["a. Shear thinning", "b. Shear thickening", "c. Extensional flow hardening", "d. Newtonian viscosity independent of shear rate"],
        answer: 2
    },
    {
        id: 74,
        question: "74. For a plastic melt with the same viscosity average molecular weight, which type of molecular weight distribution shown below would lead to earliest shear thinning onset and lowest viscosity value during extrusion at shear rates around 500 1/s.",
        hasImage: false,
        options: ["a. Narrow molecular weight distribution with PDI around 2", "b. Broad molecular weight distribution with PDI around 6", "c. Equal bimodal molecular weight distribution with PDI around 10", "d. Asymmetric bimodal molecular weight distribution with PDI greater than 20"],
        answer: 3
    },
    {
        id: 75,
        question: "75. For plastic melts that have no specific interactions (only have dispersive interactions), which topological feature listed below is most important in providing high melt strength and melt extensibility to allow melts to be foamed?",
        hasImage: false,
        options: ["a. Linear backbone", "b. Star-like long chain branches", "c. Comb-like long chain branches", "d. Second-generation long chain branches (branch-on-branch long chain branches)"],
        answer: 3
    },
    {
        id: 76,
        question: "76. Shear thinning can be found in all polymer melts. The slope of the shear thinning, or the so- called power law coefficient, is",
        hasImage: true,
        options: ["a. Same for all polymers, but have a deeper slope with long chain branches", "b. Same for all polymers with dispersive interactions, only have more shallow slopes for polymer with specific polar interactions", "c. Depend on the polymer type, different for different polymers, but do not change with molecular weight distribution or with long chain branches", "d. Depend on the polymer type, different for different polymers, also change with molecular weight distribution or with long chain branches (become stronger with deeper slope) "],
        answer: 2
    },
    {
        id: 77,
        question: "77. Based on the viscosity curves listed below for eight polymers measured at their injection molding temperature, which plastic would be most suitable for injection molding?",
        hasImage: true,
        options: ["a. Polyether sulphone", "b. PBT, or polybutylene terephthalate", "c. Nylon 66", "d. Polypropylene copolymer"],
        answer: 3
    },
    {
        id: 78,
        question: "78. Viscosity curves of 5 polyethylene melts measured at 150C can be found below, which PE shown in the plot is expected to be linear (no long chain branches) and with narrow molecular weight distribution (possibly by metallocene catalyst)?",
        hasImage: true,
        options: ["a. PE1", "b. PE2", "c. PE3", "d. PE4 16"],
        answer: 3
    },
    {
        id: 79,
        question: "79. Based on the atomic force micrographs of three 85/15 immiscible polyolefin blends shown below (15% dispersed phase), which one is expected to have the lowest interfacial tension against PBE (propylene-based elastomer)? (all three blends have the same viscosity ratio during mixing and all of them were mixed at the same temperature and shear rate)",
        hasImage: true,
        options: ["a. RCP (random polypropylene copolymer)", "b. iPP (isotactic polypropylene)", "c. HDPE (high density polyethylene)"],
        answer: 0
    },
    {
        id: 80,
        question: "80. A diblock copolymer compatibilizer used to compatibilize immiscible polymer blends can reduce the dispersion polymer phase domain size by",
        hasImage: false,
        options: ["a. Facilitating the drop breakup", "b. Raising the matrix polymer viscosity", "c. Suppressing droplet coalescence", "d. Equalizing the viscosity ratio between the blend components"],
        answer: 2
    },
    {
        id: 81,
        question: "81. A polymer blend that is guaranteed miscible when its  is",
        hasImage: false,
        options: ["a. Less than 0.5, but greater than 0.001", "b. Negative, less than 0", "c. Greater than 0.5", "d. Greater than 1"],
        answer: 1
    },
    {
        id: 82,
        question: "82. Mixing elements used in an intermeshing twin screw extruder (co or counter rotating) is predominantly used to promote which flow field listed below to facilitate drop break up and deliver better mixing morphology",
        hasImage: true,
        options: ["a. Elongational (extensional) flow", "b. Shear flow", "c. Compressive flow", "d. Rotational flow"],
        answer: 0
    },
    {
        id: 83,
        question: "83. Which statement regarding polyethylene solubility listed below is correct?",
        hasImage: false,
        options: ["a. All polyethylene homo and copolymers are miscible provided that the co-monomers used in copolymers are alpha olefin (such as propylene, butene, hexene, or octene)", "b. HDPE (high density PE) and LDPE (low density PE) are immiscible", "c. HDPE (high density PE with a density of 0.95) and POE (polyolefin elastomer with density of 0.87) are miscible", "d. LLDPE (linear low density PE) with hexene comonomer of 0.92 density is miscible with EVA (ethylene vinyl acetate copolymer) of 0.92 density 17"],
        answer: 1
    },
    {
        id: 84,
        question: "84. Dynamic mechanical curves of tangent delta (which is G”/G’) for polymer A, polymer B, and polymer blend of A+B are shown below. Based on these curve, one can conclude that",
        hasImage: true,
        options: ["a. Polymer A and polymer B are miscible", "b. Polymer A and polymer B are immiscible", "c. Polymer A and polymer B are partially miscible", "d. Dynamic mechanical curves cannot be used to examine blend miscibility"],
        answer: 0
    },
    {
        id: 85,
        question: "85. Coextrusion of an ABA layer structure with a blue polymer A and a green polymer B through a flat co-extrusion die leads to the cross-sectional morphology shown below. This is caused",
        hasImage: true,
        options: ["a. High viscosity of polymer B, much higher than the viscosity of polymer A", "b. High viscosity of polymer A, higher that the viscosity of polymer B", "c. Different melt elasticity between polymers A and B with polymer A greater than polymer B", "d. Not by viscoelasticity differences, probably by the co-extrusion die design"],
        answer: 0
    },
    {
        id: 86,
        question: "86. Using peroxide assisted reactive extrusion grafting of maleic anhydride onto polyolefins at extrusion temperatures greater than 200C. Which polyolefin listed below would have predominantly chain end grafting of maleic anhydride, instead of in-chain grafting?",
        hasImage: false,
        options: ["a. Polyethylene", "b. Polystyrene", "c. Polypropylene", "d. POE (polyolefin elastomer) which is a copolymer of ethylene and octene with greater than 10% octene"],
        answer: 2
    },
    {
        id: 87,
        question: "87. Which statement below is correct in describing the process of compatibilization of immiscible polymer blends",
        hasImage: false,
        options: ["a. Compatibilizer is used to enhance drop breakup and has no effects on coalescence", "b. Interfacial reactive compatibilization using maleic anhydride grafted EPDM in polyamide is less effective (in providing fine EPDM dispersions) than the use of deblock copolymeric compatibilizer in blends of EPDM and polyamide", "c. 5 to 10% of compatibilizers sufficient to suppress coalescence and can deliver fine dispersions in a polymer blend", "d. Block copolymer compatibilizers must be di-block copolymers, cannot be tri-block 18"],
        answer: 2
    },
    {
        id: 88,
        question: "88. Based on the adhesion table listed below, which material is suitable as the tie layer for a co- extrusion of PP and PE?",
        hasImage: true,
        options: ["a. PS (polystyrene)", "b. EMA (ethylene methyl acrylate copolymer)", "c. PET (polyethylene terephthalate)", "d. EAA (ethylene acrylic acid copolymer)"],
        answer: 1
    },
    {
        id: 89,
        question: "89. According to the phase continuity criterion shown below, what is the viscosity ratio required between polymer 1 and polymer 2 for 70 vol% polymer 1 and 30 vol% polymer 2 be co-continuous?",
        hasImage: true,
        options: ["a. 1, 50/50", "b. 2.33, 70/30", "c. 0.43, 30/70", "d. 0.33, 25/75"],
        answer: 1
    },
    {
        id: 90,
        question: "90. The dispersion states of montmorillonites in a clay-polyamide nanocomposite are shown below. From left to right, these morphologies display the state of montmorillonites, from dispersion to intercalation to exfoliation, where polyamide from being outside the clay, to penetrating, to pushing apart individual platelets. Which dispersion state of the clay is expected to provide the highest aspect ratio which, in turn, can provide lowest permeability value in this clay-polyamide nanocomposite.",
        hasImage: true,
        options: ["a. Left, dispersion", "b. Center, intercalation", "c. Right, exfoliation 19"],
        answer: 2
    },
    {
        id: 91,
        question: "91. For a co-extrusion blown film layer design to package meat products, what is the polymer used for the core, or the middle layer (red one shown in the 7-layer blown film structure)?",
        hasImage: true,
        options: ["a. PE (polyethylene)", "b. PP (polypropylene)", "c. EVOH (ethylene vinyl alcohol copolymer)", "d. EVA (ethylene vinyl acetate copolymer)"],
        answer: 2
    },
    {
        id: 92,
        question: "92. Reactivity ratio products (r1r2) of free radical copolymerization of 8 monomers are listed below. Based on this table, an eSBR, or emulsion SBR which is a styrene butadiene rubber, or a copolymer of styrene and butadiene, synthesized in emulsions by free radical polymerization, is expected to have what type of sequence distribution of butadiene and styrene on its backbone?",
        hasImage: true,
        options: ["a. Blocky", "b. Random", "c. Alternating", "d. Sequence distribution cannot be determined by reactivity ratio product"],
        answer: 1
    },
    {
        id: 93,
        question: "93. Which statement about the backbone structures of metallocene polypropylene, or isotactic polypropylene synthesized by metallocene catalysts, is correct?",
        hasImage: false,
        options: ["a. Many different components, including atactic PP and stereo-block PP", "b. Broad molecular weight distribution with PDI greater than 5", "c. Only one isotactic PP component, but contains regio defects (or 2,1 insertion)", "d. Contain syndiotactic and atactic components in addition to isotactic PP component 20"],
        answer: 2
    },
    {
        id: 94,
        question: "94. Stress-optical coefficients, or birefringence (different refractive index in different direction) generated by chain orientation during processing, of many polymers are shown in the plot below. In the plots, there are both positive and negative birefringence (relative to the orientation direction) generating polymers. If you want to injection mold a plastic optical component that is both transparent and has no processing-induced flow birefringence, which polymer listed below you would use?",
        hasImage: true,
        options: ["a. Polycarbonate (PC)", "b. Polyethylene terephthalate (PET)", "c. Polymethylmethacrylate (PMMA)", "d. Polystyrene (PS)"],
        answer: 2
    },
    {
        id: 95,
        question: "95. Molecular weight distributions of two LDPE (low density polyethylene) with the same weight average molecular weight (or MI, melt index), but one is from tubular reactor (pink) and the other is from autoclave reactor (blue). Based on this MWD, which one is expected to have a higher melt strength?",
        hasImage: true,
        options: ["a. Autoclave LDPE", "b. Tubular LDPE", "c. Cannot determine melt strength from molecular weight distribution"],
        answer: 0
    },
    {
        id: 96,
        question: "96. Which statement is incorrect in describing approaches to improve optical transparency, or reduce haze, of crystalline isotactic polypropylene homopolymer",
        hasImage: false,
        options: ["a. Use nucleators to increase spherulite amount which, in turn, reduce spherulite size", "b. Biaxial orientation to suppress lamellae aggregation into spherulites", "c. Add clarifiers to significantly raise spherulite amount which, in turn, drastically reduce spherulite size", "d. Thermal annealing to promote lamellae aggregation and raise the spherulite size 21"],
        answer: 3
    },
    {
        id: 97,
        question: "97. Which polymer solution listed below is at the theta condition where the solvent is a theta solvent?",
        hasImage: true,
        options: ["a. Polystyrene in toluene", "b. Polystyrene in cyclohexane", "c. Polyisoprene in benzene", "d. Cellulose nitrate in acetone"],
        answer: 1
    },
    {
        id: 98,
        question: "98. Three tackifiers, low (purple), med (red), and high (blue) MW tackifiers, are added into the SIS (where its DMA curve is shown on the left) to prepare SIS-based hot melt adhesive. The resulting DMA curves for the hot-melt adhesives are shown on the right. Based on this plot, specifically the plot of tangent delta, one can conclude the miscibility of high MW (blue) tackifier in SIS follows",
        hasImage: true,
        options: ["a. Fully miscible", "b. Partial miscible", "c. Fully immiscible", "d. Cannot determine miscibility from these two plots"],
        answer: 1
    },
    {
        id: 99,
        question: "99. Which polymerization method is required to polymerize 3-methyl butene into the following structure?",
        hasImage: false,
        options: ["a. Condensation polymerization", "b. Metal-coordinated insertion polymerization", "c. Cationic polymerization", "d. Free-radical polymerization"],
        answer: 2
    },
    {
        id: 100,
        question: "100. Based on the molecular size listed below, which gas molecule would permeate theslowest in a polyethylene?",
        hasImage: true,
        options: ["a. Hydrogen (H 2 )", "b. Carbon dioxide (CO 2 )", "c. Oxygen (O 2 )", "d. Nitrogen (N 2 )"],
        answer: 3 // A=0, B=1, C=2, D=3
    },