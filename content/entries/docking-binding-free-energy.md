---
type: entry
slug: docking-binding-free-energy
title: Molecular docking and binding free-energy calculation
field: computational-medicine
kind: ALGORITHM
status: ACTIVE
summary: Methods that pose a small molecule in a protein pocket and estimate its affinity, from fast scoring functions to alchemical free-energy perturbation and learned co-folding affinity heads.
reliedOn: Virtual screening and lead optimisation in structure-based drug discovery choose which compounds to make using these poses and affinity estimates.
dependsOn:
  - biomolecular-molecular-dynamics
  - biomolecular-structure-prediction
references:
  - title: Wang et al., Accurate and reliable prediction of relative ligand binding potency in prospective drug discovery by way of a modern free-energy calculation protocol and force field, JACS (2015)
    url: https://doi.org/10.1021/ja512751q
    kind: paper
  - title: "Mobley and Gilson, Predicting binding free energies: frontiers and benchmarks, Annu. Rev. Biophys. (2017)"
    url: https://doi.org/10.1146/annurev-biophys-070816-033654
    kind: paper
  - title: Trott and Olson, AutoDock Vina, J. Comput. Chem. (2010)
    url: https://doi.org/10.1002/jcc.21334
    kind: paper
  - title: "Buttenschoen, Morris, Deane, PoseBusters: AI-based docking methods fail to generate physically valid poses or generalise to novel sequences, Chem. Sci. (2024)"
    url: https://doi.org/10.1039/D3SC04185A
    kind: paper
  - title: "Corso et al., DiffDock: Diffusion Steps, Twists, and Turns for Molecular Docking"
    url: https://arxiv.org/abs/2210.01776
    kind: paper
  - title: "Passaro et al., Boltz-2: Towards Accurate and Efficient Binding Affinity Prediction (bioRxiv preprint, 2025)"
    url: https://doi.org/10.1101/2025.06.14.659707
    kind: paper
  - title: Gilson et al., Assessment of pharmaceutical protein-ligand pose and affinity predictions in CASP16
    url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12750038/
    kind: paper
  - title: "OpenFE: open-source relative free-energy calculations"
    url: https://openfree.energy/
    kind: code
timeline:
  - date: 1982-10-01
    title: DOCK
    body: Kuntz and colleagues introduce geometric matching of ligands to receptor surfaces, the first widely used docking program.
    source: https://doi.org/10.1016/0022-2836(82)90153-X
  - date: 2015-01-01
    title: FEP+ prospective accuracy
    body: Wang et al. report mean unsigned errors near 1 kcal/mol for relative binding potency across eight targets with a modern force field and protocol.
    source: https://doi.org/10.1021/ja512751q
  - date: 2023-08-01
    title: PoseBusters
    body: Physical-validity checks show that many deep-learning docking poses violate bond lengths, clash or are strained even when RMSD is low.
    source: https://doi.org/10.1039/D3SC04185A
  - date: 2025-06-18
    title: Boltz-2 affinity head (preprint)
    body: Authors report average Pearson 0.66 on a four-target FEP+ subset and approaching OpenFE on 876 measurements, at over 1000 times lower cost; variance between assays is large.
    source: https://doi.org/10.1101/2025.06.14.659707
  - date: 2025-10-01
    title: CASP16 ligand assessment
    body: Best affinity ranking reached Kendall tau 0.42 against an experimental-noise ceiling near 0.73; giving experimental structures did not help.
    source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12750038/
explainer:
  oneLine: Predicting where a drug molecule sits on a protein and how tightly it holds on.
  flow:
    - Protein pocket plus molecule
    - Place the molecule (pose)
    - Estimate grip strength
    - Compare with lab measurement
    - Choose molecules to make
  glossary:
    - term: ligand
      meaning: A small molecule, such as a drug, that binds to a protein.
      link: https://en.wikipedia.org/wiki/Ligand_(biochemistry)
    - term: binding pocket
      meaning: A cavity on a protein surface whose shape and chemistry fit a particular small molecule.
      link: https://en.wikipedia.org/wiki/Binding_site
    - term: docking
      meaning: Computer search for the position and orientation in which a small molecule fits into a protein pocket.
      link: /research/docking-binding-free-energy
    - term: free energy
      meaning: The energy-like quantity that decides which state a molecular system prefers; differences in it set how tightly a drug binds.
      link: https://en.wikipedia.org/wiki/Gibbs_free_energy
    - term: free-energy perturbation
      meaning: A simulation method that gradually changes one molecule into another on the computer to estimate the difference in binding strength.
      link: /research/docking-binding-free-energy
    - term: force field
      meaning: A set of formulas and numbers that give the energy of a molecule from the positions of its atoms, used to run simulations.
      link: /research/biomolecular-molecular-dynamics
    - term: dissociation constant
      meaning: A number that says how tightly a drug sticks to its target; smaller means tighter.
      link: https://en.wikipedia.org/wiki/Dissociation_constant
    - term: data leakage
      meaning: When test examples secretly resemble training examples, making a model look better than it is.
      link: https://en.wikipedia.org/wiki/Leakage_(machine_learning)
    - term: molecular dynamics
      meaning: Computer simulation that moves every atom according to forces, step by tiny step, to watch a molecule wiggle and change shape.
      link: /research/biomolecular-molecular-dynamics
  readFirst:
    - title: Docking (molecular) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Docking_(molecular)
      why: Plain overview of pose search and scoring.
    - title: Free energy perturbation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Free_energy_perturbation
      why: The idea behind alchemical binding calculations.
    - title: OpenFE
      url: https://openfree.energy/
      why: Open project making free-energy calculations accessible, with documentation.
site:
  published: true
  aiReviewed: true
---

## What it is

Two coupled questions: **where** does a ligand bind (pose) and **how tightly** (affinity, $\Delta G_{\mathrm{bind}} = RT\ln K_d$). A 1 kcal/mol error changes $K_d$ by a factor of about 5.4 at 298 K, which is why 1 kcal/mol is the usual target accuracy.

## The core machinery

**Docking.** Search over ligand position, orientation and torsions, scored by an empirical or knowledge-based function. Classic tools: DOCK (1982), Glide, AutoDock Vina (2010), GOLD. Deep-learning docking (DiffDock, a diffusion model over ligand poses) and **co-folding** models (AlphaFold 3, Boltz, Chai-1) now often rival or exceed classical docking on pose accuracy, but PoseBusters-style checks show physically implausible geometries in many learned poses, and accuracy drops for ligands and pockets dissimilar to training data.

**Alchemical free-energy perturbation (FEP).** Instead of simulating binding, morph ligand A into ligand B along a coupling parameter $\lambda$ in both complex and solvent; the relative binding free energy is $\Delta\Delta G = \Delta G_{\mathrm{complex}} - \Delta G_{\mathrm{solvent}}$, with each leg estimated by the Zwanzig identity, the Bennett acceptance ratio or multistate variants (MBAR). Commercial FEP+ (Wang et al., 2015) and open tools (OpenFE, GROMACS/OpenMM workflows) reach root-mean-square errors near 1 kcal/mol on congeneric series of well-behaved targets. **Absolute** binding free energies (ABFE) remove the congeneric restriction at higher cost.

**Learned affinity.** Scoring from graph networks on PDBbind-style data is notoriously hampered by data leakage; Boltz-2 (2025) adds an affinity head and reports approaching OpenFE-level correlation on selected benchmark sets at over 1000x lower cost (company/developer preprint).

## Why it is hard

Protonation and tautomer states, ligand strain, water networks, induced fit and protein reorganisation, force-field error, charged perturbations, and the noise floor of assays: inter-laboratory reproducibility of binding assays is itself about 0.9 kcal/mol pairwise RMSE, so no method can be judged more finely than that.

## Techniques to master

Statistical mechanics of free-energy estimators, cycle-closure and hysteresis diagnostics, enhanced sampling for slow protein degrees of freedom, benchmark hygiene (time splits, scaffold splits, prospective tests), prospective blind challenges (D3R, CASP ligand categories, Polaris).

## Where it bites

Two problems: affinity prediction within about 1 kcal/mol on novel scaffolds across protein families without per-target tuning, and co-folding models that generalise physically rather than recalling training poses.

# Plain explanation

Most drugs work by sticking to a protein and switching it on or off. To design one, chemists need two answers: where does the molecule sit, and how tightly does it stick? A tighter grip usually means a lower dose.

Docking programs try every way of placing the molecule in the protein's pocket and score each placement, like fitting a key into a lock and rating how snug it is. Newer AI models, called co-folding models, predict the protein and the molecule together in one go.

Getting the grip strength right is harder. A different method, called free-energy perturbation, changes one molecule into a similar one on the computer, step by step, and measures how much the grip changes. It can be quite accurate for closely related molecules, but it costs hours of computer time per pair and struggles with very different molecules.

The target accuracy is about one kilocalorie per mole, which is a five-fold change in grip strength, roughly the size of the noise in the lab measurements themselves. Nobody can yet do this reliably for brand-new kinds of molecules.

# Student explanation

**Pose and affinity.** The binding free energy is $\Delta G=RT\ln K_d$, where $K_d$ is the dissociation constant. At room temperature, 1.36 kcal/mol is a factor of 10 in $K_d$, so 1 kcal/mol is about a factor of 5.

**Docking.** A search algorithm samples the molecule's position, orientation and rotatable bonds; a scoring function ranks poses. Classic tools use hand-built scoring terms; deep-learning docking (DiffDock) and co-folding models (AlphaFold 3, Boltz, Chai) learn from known complexes. Tests such as PoseBusters check whether predicted poses are chemically valid, not just close to the answer.

**Free-energy perturbation (FEP).** Binding is a state change from molecule in water to molecule in the pocket. Instead of simulating the real process, we "alchemically" morph molecule A into B using a coupling parameter $\lambda$ between 0 and 1, in the protein and in water. The difference of the two legs equals the difference in binding free energy between A and B. Estimators such as the Zwanzig formula, Bennett's acceptance ratio and MBAR combine the simulations. Quality depends on the force field, on getting charges and water right and on enough sampling.

**Learned affinity.** Models trained on measured affinities can be very fast, but many public datasets leak: test molecules are near-copies of training ones. Boltz-2 (2025, preprint) adds an affinity head and reports FEP-like correlation on selected sets at about a thousand times lower cost; independent prospective tests are still needed.

**Noise floor.** Replicate experiments from different labs disagree by about 0.9 kcal/mol RMSE, so no method can be judged much more finely.

**Open problems in DARC.** Accuracy of about 1 kcal/mol on new scaffolds across protein families, and co-folding that works on unseen chemistry.
