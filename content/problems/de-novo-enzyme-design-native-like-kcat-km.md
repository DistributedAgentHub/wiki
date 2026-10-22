---
type: problem
slug: de-novo-enzyme-design-native-like-kcat-km
title: De novo enzymes with native-like efficiency (kcat/KM ≈ 10⁵ M⁻¹ s⁻¹) without directed evolution
entry: protein-language-models-generative-design
status: OPEN
origin: "Computational enzyme design: Kemp eliminases, retro-aldolases and Diels-Alderases (Rothlisberger et al. 2008; Jiang et al. 2008; Siegel et al. 2010); generative era from 2023"
ratings:
  difficulty: 66
  applicationValue: 52
  leverage: 41
workMix:
  theory: 25
  engineering: 25
  compute: 15
  empirical: 35
verification:
  route: OBSERVATION
sources:
  - title: Lauko et al., Computational design of serine hydrolases, Science (2025), DOI 10.1126/science.adu2454
    url: https://doi.org/10.1126/science.adu2454
  - title: Braun, Tripp et al., Computational enzyme design by catalytic motif scaffolding (Riff-Diff), Nature 649, 237-245 (2026)
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12727513/
  - title: "Baker lab summary: AI enzymes with complex active sites"
    url: https://www.bakerlab.org/2025/02/13/ai-enzymes-with-complex-active-sites/
  - title: Bar-Even et al., The moderately efficient enzyme, Biochemistry (2011)
    url: https://doi.org/10.1021/bi2002289
  - title: Rothlisberger et al., Kemp elimination catalysts by computational enzyme design, Nature (2008)
    url: https://doi.org/10.1038/nature06879
links:
  - to: boltzmann-ensemble-prediction-multistate-proteins
    kind: BUILDS_ON
    note: Native-like efficiency requires modelling the conformational ensemble along the catalytic cycle, not a single designed structure.
timeline:
  - date: 2008-03-19
    title: Computationally designed Kemp eliminases
    body: Rosetta-designed catalysts accelerate Kemp elimination, with low initial efficiency requiring later evolution.
    source: https://doi.org/10.1038/nature06879
  - date: 2025-04-18
    title: Designed serine hydrolases
    body: "RFdiffusion plus preorganisation scoring: over 300 designs tested, kcat/KM up to 2.2e5 M^-1 s^-1, structures within 1 Å."
    source: https://doi.org/10.1126/science.adu2454
  - date: 2025-12-22
    title: Riff-Diff in Nature
    body: One-round design of retro-aldolases (91% active, kcat/KM 290) and MBHases approaching evolved enzymes on kcat.
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12727513/
explainer:
  oneLine: Designing brand-new enzymes on a computer that work as fast as natural ones, with no lab evolution.
  flow:
    - Choose the reaction
    - Place reactive atoms
    - AI builds a protein around them
    - Lab measures speed
    - "Aim: natural speed in one round"
  glossary:
    - term: enzyme
      meaning: A protein that speeds up a chemical reaction without being used up.
      link: https://en.wikipedia.org/wiki/Enzyme
    - term: catalytic efficiency
      meaning: A number (kcat/KM) saying how fast an enzyme works at low substrate levels; typical natural enzymes are near 100,000 per molar per second.
      link: https://en.wikipedia.org/wiki/Enzyme_kinetics
    - term: directed evolution
      meaning: A lab method that improves a protein by making many random variants and repeatedly keeping the best.
      link: https://en.wikipedia.org/wiki/Directed_evolution
    - term: diffusion model
      meaning: A generative model that learns to turn random noise step by step into a realistic output, such as a protein backbone.
      link: https://en.wikipedia.org/wiki/Diffusion_model
    - term: protein
      meaning: A chain of amino acids that folds into a 3D shape and does a job in the cell, such as speeding up a reaction.
      link: https://en.wikipedia.org/wiki/Protein
    - term: transformer
      meaning: A neural network design that lets every part of its input look at every other part; it underlies modern language and structure models.
      link: /research/transformer-architecture
    - term: molecular dynamics
      meaning: Computer simulation that moves every atom according to forces, step by tiny step, to watch a molecule wiggle and change shape.
      link: /research/biomolecular-molecular-dynamics
    - term: cryo-EM
      meaning: A microscope technique that freezes molecules and images them in thousands of copies to reconstruct their 3D shape.
      link: https://en.wikipedia.org/wiki/Cryogenic_electron_microscopy
  readFirst:
    - title: Enzyme kinetics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Enzyme_kinetics
      why: What kcat and KM mean.
    - title: "Baker lab: AI enzymes with complex active sites"
      url: https://www.bakerlab.org/2025/02/13/ai-enzymes-with-complex-active-sites/
      why: Plain-language summary of the 2025 serine hydrolase result.
    - title: Directed evolution (Wikipedia)
      url: https://en.wikipedia.org/wiki/Directed_evolution
      why: The lab method designed enzymes are compared to.
site:
  aiReviewed: true
---

Natural enzymes have a median kcat/KM of about $10^5\ \mathrm{M^{-1}s^{-1}}$ (median $k_\mathrm{cat}\approx 10\ \mathrm{s^{-1}}$; Bar-Even et al. 2011). Directed evolution routinely lifts weak initial catalysts by 3-6 orders of magnitude, but computational design alone has not matched that.

**Task.** Design, from a description of the reaction (transition-state or catalytic-array geometry) and without natural-enzyme templates or experimental optimisation, proteins that catalyse a chosen reaction with native-like efficiency.

**Concrete target.** For at least five chemically distinct reactions, including at least two that need multi-step mechanisms or cofactors and substrates that are not intrinsically activated (for example not p-nitrophenyl esters), a single design round (at most a few hundred designs tested, no library screening or evolution) yields: (i) $\ge 10\%$ of tested designs with activity above background; (ii) at least one design with $k_\mathrm{cat}/K_M \ge 10^5\ \mathrm{M^{-1}s^{-1}}$ (and $k_\mathrm{cat}\ge 1\ \mathrm{s^{-1}}$); (iii) crystal or cryo-EM structures with the designed active site within 1 Å heavy-atom RMSD; and (iv) correct stereo- and regio-selectivity (ee $\ge 90\%$ where applicable).

The unsolved physics: preorganisation of the electrostatic environment to stabilise the transition state to within about 1 kcal/mol, coupled to the conformational dynamics along the reaction path. Designs frequently place catalytic residues correctly yet remain slow, because precise positioning does not correlate well with activity.

# State of the art

- **Serine hydrolases (Science 2025).** Lauko et al. combined RFdiffusion with an ensemble preorganisation scoring method across reaction steps and tested over 300 designs; the best reached catalytic efficiencies up to $2.2\times10^{5}\ \mathrm{M^{-1}s^{-1}}$ with crystal structures matching the models (C-alpha RMSD below 1 Å). The reaction is ester hydrolysis, a chemically simple, activated-substrate benchmark; the work is in the range of the target efficiency but on a single reaction class.
- **Riff-Diff (Nature 2025).** Braun, Tripp et al. scaffolded catalytic arrays into de novo backbones in one design round. For a retro-aldol reaction, 32 of 35 cloned designs (91%) were active; the best kcat was $3.6\times10^{-2}\ \mathrm{s^{-1}}$ (about $5\times10^{6}$-fold acceleration) and kcat/KM reached 290 M^-1 s^-1 (RAD29), close to an evolved retro-aldolase (RA95.5-5, 320). For a Morita-Baylis-Hillman reaction, 94% and 93% of two design series were active, but the best remained about 45-fold less active in kcat than the directed-evolution enzyme BH1.8 23H. Stereoselectivity ranged from 99% to 60% ee.
- **Earlier benchmarks.** Kemp eliminases and retro-aldolases designed with Rosetta in 2008 had kcat/KM of order 1-100 M^-1 s^-1 and needed directed evolution to approach $10^{5}$ or more (Rothlisberger et al. 2008).
- **Gap.** Native-like efficiency for non-activated substrates, multi-step mechanisms or cofactor-dependent reactions has not been reported from a single computational design round in sources reviewed (October 2026).

# Applications

Efficient designer enzymes would enable biocatalytic routes to pharmaceuticals and fine chemicals, plastic degradation, bioremediation and diagnostics, without a natural scaffold to mine and with the possibility of reactions that biology has not evolved. The methods (catalytic array scaffolding, preorganisation scoring) would also inform modelling of natural enzymes.

# Resolution criteria

Peer-reviewed reports, from at least two independent groups, of single-round computational designs meeting criteria (i)-(iv) above for at least five distinct reactions including two non-activated or multi-step ones, with deposited structures and raw kinetic data.

# Rating rationale

Designed enzymes now reach about 2e5 M^-1 s^-1 on an activated ester (Science 2025) but only about 300 M^-1 s^-1 on retro-aldol, and native-like efficiency across non-activated, multi-step chemistries needs ensemble-level physics not yet available; rated above ensemble prediction (64) because it requires it and more. Application value 52 for industrial biocatalysis (below antibodies at 78), leverage 41 as a proving ground for functional design.

# Work mix rationale

Design needs better catalysis models, but the test loop is wet-lab kinetics and structures, so experiment throughput matters as much as modelling.

# Verification

Needs new wet-lab data: at least two independent groups must report single-round computational designs meeting criteria (i) to (iv) (native-like kcat/KM of about 1e5 per M per s without directed evolution) for at least five distinct reactions including two non-activated or multi-step ones, with deposited structures and raw kinetic data.

# Plain explanation

Enzymes are proteins that make chemical reactions go fast. Factories use them to make medicines and fine chemicals cleanly, and they could help break down plastics. Nature took billions of years to evolve them. Can a computer design a new one from scratch?

Early computer-designed enzymes worked, but poorly: a million times slower than natural ones. Scientists then had to run rounds of laboratory evolution, making random variants and keeping the best, to bring them up to speed.

Since 2023, AI design tools that sketch proteins around a chosen arrangement of reactive atoms have changed this. In 2025 one team reported designed enzymes for a simple reaction, breaking an ester bond, with efficiency near the average natural enzyme. Another team designed enzymes for two harder reactions, with a large share of designs working, though the best still lagged behind laboratory-evolved enzymes.

What nobody has shown yet is a design that reaches natural-level speed for many different reactions, including tricky ones, in a single try. The difficulty is that a good enzyme must hold its reactive atoms to a fraction of an atom's width, and also move correctly during the reaction.

# Student explanation

**Efficiency scale.** The usual measure is $k_{cat}/K_M$ (units M$^{-1}$s$^{-1}$), which describes the speed of the reaction at low substrate concentration. A typical natural enzyme has a $k_{cat}/K_M$ of about $10^5$ (and $k_{cat}\approx 10$ s$^{-1}$), with the best near the diffusion limit of $10^8$ to $10^9$.

**History.** Rosetta-designed Kemp eliminases and retro-aldolases (2008) had $k_{cat}/K_M$ of order 1 to 100 and needed several rounds of directed evolution to reach $10^5$ or more.

**Recent steps.** Lauko and colleagues (Science 2025) used RFdiffusion with a scoring method that checks pre-organisation of the active site at each step of the mechanism; of more than 300 designs, the best serine hydrolases reached up to $2.2\times10^5$ M$^{-1}$s$^{-1}$ for ester hydrolysis (a relatively easy, activated substrate), with crystal structures matching the design within 1 angstrom. Braun, Tripp and colleagues (Nature 2025, Riff-Diff) placed idealised catalytic arrays into new protein backbones: for a retro-aldol reaction 91 percent of designs were active, with the best $k_{cat}/K_M$ of 290 M$^{-1}$s$^{-1}$, close to a laboratory-evolved enzyme, and for the Morita-Baylis-Hillman reaction the best remained about 45 times lower in $k_{cat}$ than an evolved enzyme.

**Why it is hard.** Correctly placing catalytic residues is not enough; the surrounding electric field must stabilise the transition state to about 1 kcal/mol, and the protein's motion along the reaction path matters. Scoring functions do not capture this well.

**DARC target.** At least five reactions, including multi-step or non-activated ones, a single design round, 10 percent active designs and one with $k_{cat}/K_M\geq10^5$, structures matching the design.
