---
type: problem
slug: boltzmann-ensemble-prediction-multistate-proteins
title: Boltzmann-weighted conformational ensembles of multi-state proteins from sequence
entry: biomolecular-molecular-dynamics
status: OPEN
origin: Anfinsen's thermodynamic hypothesis extended to ensembles; CASP ensemble category (from CASP15, 2022); learned emulators AlphaFlow (2024) and BioEmu (2025)
ratings:
  difficulty: 64
  applicationValue: 45
  leverage: 52
workMix:
  theory: 30
  engineering: 10
  compute: 35
  empirical: 25
verification:
  route: REPRODUCTION
sources:
  - title: Lewis et al., Scalable emulation of protein equilibrium ensembles with generative deep learning (BioEmu), Science 389 (2025); bioRxiv preprint
    url: https://www.biorxiv.org/content/10.1101/2024.12.05.626885
  - title: Jing et al., AlphaFold Meets Flow Matching for Generating Protein Ensembles, ICML 2024
    url: https://arxiv.org/abs/2402.04845
  - title: Modeling Alternative Conformational States in CASP16 (bioRxiv preprint)
    url: https://www.biorxiv.org/content/10.1101/2025.09.02.673835v1
  - title: Passaro et al., Boltz-2 (bioRxiv preprint), limitations section
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12262699/
links:
  - to: fold-switching-prediction-from-sequence
    kind: GENERALIZES
    note: Fold switching is the special case in which the alternative state has a different secondary structure or topology and is a function-defining minor state.
  - to: force-field-folded-and-disordered-proteins
    kind: BUILDS_ON
    note: Generative ensemble models (BioEmu, AlphaFlow) are trained and evaluated against MD in classical force fields, so their state populations inherit the force field's balance between folded, disordered and associated states.
timeline:
  - date: 2024-02-07
    title: AlphaFlow
    body: Flow-matching fine-tuning of AlphaFold generates protein ensembles with improved agreement to MD marginals.
    source: https://arxiv.org/abs/2402.04845
  - date: 2024-12-06
    title: BioEmu preprint
    body: Generative equilibrium-ensemble emulator trained on MD and stability data; thousands of samples per GPU-hour.
    source: https://www.biorxiv.org/content/10.1101/2024.12.05.626885
  - date: 2025-07-10
    title: BioEmu in Science
    body: Peer-reviewed version reports free-energy accuracy of about 1 kcal/mol against MD and experiment for small proteins.
    source: https://www.biorxiv.org/content/10.1101/2024.12.05.626885
  - date: 2025-09-02
    title: CASP16 ensembles assessed
    body: Both states reproduced (TM-score > 0.75) for five of ten targets; RNA and oligomers hardest.
    source: https://www.biorxiv.org/content/10.1101/2025.09.02.673835v1
explainer:
  oneLine: Predicting all the shapes a flexible protein adopts, and how often each one occurs.
  flow:
    - Protein flips between shapes
    - Odds set by free energy
    - Simulations are slow and imperfect
    - AI emulators trained on simulations
    - Test against real measurements
  glossary:
    - term: conformational ensemble
      meaning: The collection of different shapes a flexible molecule switches between, each with its own probability.
      link: https://en.wikipedia.org/wiki/Protein_dynamics
    - term: Boltzmann distribution
      meaning: "The rule that says how likely each shape or state is at a given temperature: low-energy states are common, high-energy ones rare."
      link: https://en.wikipedia.org/wiki/Boltzmann_distribution
    - term: free energy
      meaning: The energy-like quantity that decides which state a molecular system prefers; differences in it set how tightly a drug binds.
      link: https://en.wikipedia.org/wiki/Gibbs_free_energy
    - term: molecular dynamics
      meaning: Computer simulation that moves every atom according to forces, step by tiny step, to watch a molecule wiggle and change shape.
      link: /research/biomolecular-molecular-dynamics
    - term: force field
      meaning: A set of formulas and numbers that give the energy of a molecule from the positions of its atoms, used to run simulations.
      link: /research/biomolecular-molecular-dynamics
    - term: enhanced sampling
      meaning: Tricks that push a simulation over high energy barriers so rare events such as a drug leaving its pocket can be seen in reasonable time.
      link: /research/biomolecular-molecular-dynamics
    - term: cryo-EM
      meaning: A microscope technique that freezes molecules and images them in thousands of copies to reconstruct their 3D shape.
      link: https://en.wikipedia.org/wiki/Cryogenic_electron_microscopy
    - term: protein folding
      meaning: The process by which a protein chain curls up into its working 3D shape.
      link: https://en.wikipedia.org/wiki/Protein_folding
    - term: CASP
      meaning: A blind contest held every two years where groups predict protein structures that experimentalists have solved but not yet published.
      link: https://en.wikipedia.org/wiki/CASP
  readFirst:
    - title: Protein dynamics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Protein_dynamics
      why: Why proteins are ensembles, not single structures.
    - title: BioEmu on GitHub
      url: https://github.com/microsoft/bioemu
      why: Code and description of the generative ensemble model.
    - title: Allosteric regulation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Allosteric_regulation
      why: A key biological reason minor shapes matter.
site:
  aiReviewed: true
---

A folded protein is not one structure but a Boltzmann ensemble $p(\mathbf x)\propto e^{-U_\mathrm{eff}(\mathbf x)/k_BT}$ over conformations, and function (allostery, catalysis, signalling, cryptic pockets) depends on the populations of minor states.

**Task.** Given a sequence (and optionally a ligand, ion or post-translational modification), generate a conformational ensemble whose state populations and structures agree with experiment.

**Concrete target.** For monomeric and small oligomeric proteins up to about 500 residues with at least two experimentally characterised states, on a blind benchmark of at least 50 targets whose experimental ensemble data (multiple crystal or cryo-EM structures, NMR relaxation dispersion, HDX-MS, SAXS, smFRET, cryo-EM heterogeneity analysis) were obtained after the model's training cut-off, a method: (i) recovers each experimentally populated state with TM-score $\ge 0.9$ for $\ge 80\%$ of states; (ii) predicts state free-energy differences with mean absolute error $\le 1$ kcal/mol (populations within roughly a factor of 5); (iii) reproduces experimental observables (chemical shifts, SAXS profile, HDX protection) at the level of a converged reference simulation; and (iv) does so at a cost of GPU-minutes per protein, not GPU-months.

Obstacles: experimental ensembles are indirect and under-determined; force fields and MD sampling are not accurate or converged enough to serve as ground truth; training sets (PDB, MD databases) over-represent the dominant state.

# State of the art

- **BioEmu (Science 2025).** A generative model trained on over 200 ms of MD plus experimental stability data draws thousands of independent conformations per GPU-hour and captures cryptic-pocket opening, local unfolding and domain motions; the authors report free-energy errors of about 1 kcal/mol relative to reference MD and experiment, and correlations above 0.6 with folding free energies of small proteins and their mutants. Generalisation to large multi-domain proteins, ligand-dependent states and membrane proteins is limited, and the 'reference' is itself a force-field MD.
- **AlphaFlow and MSA subsampling.** AlphaFold fine-tuned with flow matching (Jing et al., 2024) generates ensembles that match MD marginals better than MSA subsampling on the ATLAS MD dataset; as for BioEmu, evaluation is against simulation.
- **CASP16 ensembles (2024).** For ten multi-state ensembles, some groups produced reasonably accurate models of both states (TM-score above 0.75) for five targets; apart from one ligand-induced target with an apo template, predictors generally missed the structural details that distinguish states, and accuracy was clearly lower than for single-state targets. The best approaches ran many AlphaFold2 models with enhanced MSAs and sampling and then selected by quality score.
- **Co-folding models.** The Boltz-2 preprint states that it does not significantly deviate from AlphaFlow or BioEmu on MD ensemble tasks and "still often fails to capture large conformational changes".
- **Not shown.** No method has been validated against held-out experimental ensemble data at the scale and accuracy specified above.

# Applications

Ensemble prediction would identify cryptic and allosteric pockets (druggable states absent from crystal structures), predict the effect of mutations on stability and function, support design of conformationally switchable proteins, and supply the conformers needed for docking, free-energy and kinetics calculations.

# Resolution criteria

A refereed blind benchmark (CASP-style or a prospective set of newly solved multi-state proteins) with pre-registered metrics, in which one openly available method meets the state-recovery, free-energy-error and observable-agreement criteria above for at least 50 targets, with the analysis performed by an independent group and not relying on MD of the target as ground truth.

# Rating rationale

Hardest of the structure problems here: ground truth is indirect, force fields cannot yet serve as truth, and the best CASP16 methods resolved both states for only about half of targets. It sits above fold switching (58), which it generalises, by roughly the gap between a special case and a general theory. Application value 45 (cryptic pockets, allostery, stability) and leverage 52 because fold switching, kinetics, design and free-energy methods all draw on it, level with the neutron-star equation-of-state problem (52).

# Work mix rationale

Progress needs new theory for validating ensembles, large-scale compute for reference simulation, and experimental ensemble data of known populations.

# Verification

One openly available method must meet the state-recovery, free-energy-error and observable-agreement criteria for at least 50 targets on a refereed blind benchmark (CASP-style or newly solved multi-state proteins) with pre-registered metrics, analysed by an independent group.

# Plain explanation

A picture of a protein in a textbook is a single snapshot. Real proteins wobble and often flip between a few distinct shapes, for example open and closed. Which shape dominates, and how often the rarer ones appear, decides how the protein works and where a drug can bind. Some drug pockets exist only in a rare shape.

AI programs that predict protein structure normally output one shape. The new goal is to predict the whole set of shapes together with their odds, from the sequence alone.

Recent programs, such as Microsoft's BioEmu, are trained on a vast amount of simulation and can produce thousands of plausible shapes in an hour. They look good against simulations, but simulations are themselves imperfect. In the 2024 blind contest, predictors reproduced both states for only about half of the proteins tested.

What is missing is a fair test against real measurements of populations, and models that stay accurate to about one kilocalorie per mole, since that error already changes the odds fivefold.

# Student explanation

**Target.** At equilibrium a protein samples conformations $x$ with probability $p(x)\propto e^{-F(x)/k_BT}$. For two states A and B, the population ratio is $e^{-\Delta F/k_BT}$; an error of 1 kcal/mol in $\Delta F$ shifts the ratio about five-fold. The task is to output a set of structures with correct populations for proteins of up to roughly 500 residues.

**Approaches.** (1) Molecular dynamics with enhanced sampling, limited by force-field accuracy and cost. (2) Altering the alignment given to AlphaFold (subsampling or clustering) to induce alternative states. (3) Generative models: AlphaFlow fine-tunes AlphaFold with flow matching to match MD ensembles; BioEmu is trained on more than 200 ms of MD, plus experimental stabilities, and produces thousands of independent samples per GPU-hour, with reported free-energy errors of about 1 kcal/mol versus MD and correlations above 0.6 with folding stabilities for small proteins.

**Evidence from blind tests.** In the CASP16 ensemble experiment, both states of five of ten multi-state targets were reproduced to TM-score above 0.75 by some groups; RNA and protein-DNA targets were hardest; the best methods ran many AlphaFold2 models with enhanced alignments.

**Why validation is hard.** Experimental ensemble data (NMR relaxation dispersion, hydrogen-deuterium exchange, FRET, cryo-EM heterogeneity) are indirect. Emulators are checked mostly against MD that may itself be wrong.

**DARC target.** At least 50 held-out multi-state proteins; each populated state with TM-score at least 0.9 in 80 percent; state free-energy differences within 1 kcal/mol; agreement with experimental observables.

**Reading a result.** Ask what the ensemble was compared against: simulation (which can be wrong) or experiment (which is indirect), and whether the test proteins or close relatives were part of the training set.
