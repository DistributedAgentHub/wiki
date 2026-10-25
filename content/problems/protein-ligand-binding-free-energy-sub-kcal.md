---
type: problem
slug: protein-ligand-binding-free-energy-sub-kcal
title: Prospective protein–ligand binding free energies at 1 kcal/mol RMSE across diverse, difficult targets
entry: free-energy-enhanced-sampling
status: IN_PROGRESS
origin: Free-energy perturbation for drug design, Jorgensen and Thomas, 1980s; FEP+ prospective validation, Wang et al., 2015
ratings:
  difficulty: 50
  applicationValue: 74
  leverage: 42
workMix:
  theory: 15
  engineering: 15
  compute: 40
  empirical: 30
verification:
  route: OBSERVATION
sources:
  - title: Wang et al., Accurate and reliable prediction of relative ligand binding potency in prospective drug discovery, JACS (2015)
    url: https://doi.org/10.1021/ja512751q
  - title: Ross et al., The maximal and current accuracy of rigorous protein-ligand binding free energy calculations, Commun. Chem. (2023)
    url: https://doi.org/10.1038/s42004-023-01019-9
  - title: Hahn et al., Best practices for constructing, preparing, and evaluating protein-ligand binding affinity benchmarks, LiveCoMS (2022)
    url: https://doi.org/10.33011/livecoms.4.1.1497
  - title: Evaluating electrostatic embedding MLIP/MM for relative binding free energy calculations (arXiv:2608.13355, preprint)
    url: https://arxiv.org/abs/2608.13355
  - title: Evaluating the use of absolute binding free energy in the fragment optimisation process (J. Chem. Inf. Model. 2022)
    url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9814858/
  - title: Development and large-scale benchmarks of a protein-ligand absolute binding free energy toolkit (arXiv:2603.22274, preprint)
    url: https://arxiv.org/abs/2603.22274
links:
  - to: force-field-folded-and-disordered-proteins
    kind: BUILDS_ON
    note: Residual force-field error in protein and ligand parameters is one of the limits of alchemical free-energy accuracy.
  - to: mlip-long-range-electrostatics-charge-transfer
    kind: BUILDS_ON
    note: Polarisation and charge-transfer effects in binding may be captured by ML/MM models with correct long-range electrostatics.
  - to: boltzmann-ensemble-prediction-multistate-proteins
    kind: BUILDS_ON
    note: Induced fit and flexible-loop cases fail when the alchemical simulation does not sample the relevant protein states; correctly weighted conformational ensembles supply the starting states and the conformational free-energy term.
timeline:
  - date: 2015-01-28
    title: FEP+ prospective accuracy
    body: Relative binding free energies with errors near 1 kcal/mol on curated sets (date approximate).
    source: https://doi.org/10.1021/ja512751q
  - date: 2022-01-01
    title: Benchmark best practices
    body: Hahn et al. define best practice for binding-affinity benchmarks (date given as year of publication).
    source: https://doi.org/10.33011/livecoms.4.1.1497
  - date: 2023-08-01
    title: Maximal accuracy
    body: Ross et al. quantify the experimental reproducibility ceiling for FEP accuracy (date approximate).
    source: https://doi.org/10.1038/s42004-023-01019-9
explainer:
  oneLine: Predicting how tightly a drug candidate binds its target to within one kcal/mol, reliably and in advance.
  flow:
    - Drugs must stick to targets
    - Morph one molecule into another
    - Add energy of each step
    - Good cases ~1 kcal/mol
    - Hard cases and experiments limit
  glossary:
    - term: binding free energy
      meaning: The energy that decides how tightly a drug molecule sticks to its protein target.
      link: https://en.wikipedia.org/wiki/Free_energy_perturbation
    - term: free-energy perturbation
      meaning: A way to compute energy differences by gradually transforming one molecule into another in a simulation.
      link: https://en.wikipedia.org/wiki/Free_energy_perturbation
    - term: free energy
      meaning: The energy that counts at a given temperature, including disorder; it decides which state is stable and how fast things happen.
      link: https://en.wikipedia.org/wiki/Free_energy
    - term: force field
      meaning: A simple formula that gives the energy of atoms from springs and charges, cheap enough to simulate huge molecules.
      link: /research/classical-force-fields-md
    - term: kcal/mol
      meaning: A unit of energy per mole of molecules; 1 kcal/mol changes a reaction rate by about a factor of five at room temperature.
      link: https://en.wikipedia.org/wiki/Calorie
    - term: molecular dynamics
      meaning: A computer simulation that moves atoms step by step under the forces between them.
      link: /research/classical-force-fields-md
    - term: enhanced sampling
      meaning: Tricks that push a simulation across barriers it would otherwise take too long to cross.
      link: /research/free-energy-enhanced-sampling
  readFirst:
    - title: Free energy perturbation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Free_energy_perturbation
      why: The core method.
    - title: The maximal and current accuracy of rigorous protein-ligand binding free energy calculations (Commun. Chem.)
      url: https://doi.org/10.1038/s42004-023-01019-9
      why: Open-access analysis of accuracy and the experimental limit.
    - title: Drug design (Wikipedia)
      url: https://en.wikipedia.org/wiki/Drug_design
      why: Context for why binding strength matters.
raw:
  body: "Demonstrate prospective prediction of relative *and* absolute protein–ligand binding free energies with root-mean-square error of at most 1 kcal/mol and Kendall rank correlation above 0.6 over at least 30 diverse targets, including cases that currently fail: charged or highly polar ligands and net-charge-changing perturbations, buried water networks, flexible loops and induced fit, metalloproteins, covalent inhibitors, membrane proteins and scaffold hops, with no per-target tuning and with results independent of the MD engine and force-field family used.\n\nThe limit is partly experimental: the reproducibility of measured relative affinities is around 0.8–1.0 kcal/mol RMSE in curated sets, so the stated target approaches the noise floor of the benchmark itself and must be verified on assays with replicate measurements."
site:
  aiReviewed: true
---

# State of the art

- **Established practice.** Wang et al. (JACS 2015) reported FEP+ relative binding free energy errors near 1 kcal/mol over a curated set of drug-discovery targets; Ross et al. (Commun. Chem. 2023) assembled the largest public benchmark, show that with careful structure and ligand preparation FEP can reach accuracy comparable to experimental reproducibility, and quantify that reproducibility.
- **Limits.** Accuracy degrades for charged ligands, large changes in ligand shape, protein conformational change and poorly resolved structures; a 2025 J. Chem. Inf. Model. study is reported to show that accuracy is compromised by structure modelling and other upstream choices (reported; not re-checked against the primary paper for this entry). Absolute binding free energies are less accurate than relative ones: a retrospective fragment-optimisation study (J. Chem. Inf. Model. 2022) reported good ranking (Spearman about 0.89) but an RMSE of 2.75 kcal/mol.
- **New tools.** Open-source workflows (OpenFE, 2022 onward) and a recent open absolute-binding-free-energy toolkit reporting large-scale benchmarks with ranking comparable to relative methods (arXiv:2603.22274, 2026, preprint; the reported scope was not independently checked for this entry) reduce cost; machine-learned potential/MM hybrids are being tested for relative free energies (Evaluating electrostatic embedding MLIP/MM for RBFE, arXiv:2608.13355, preprint).
- **Open.** Systematic prospective trials with sub-kcal/mol RMSE on difficult classes, and an assessment of whether force-field error (rather than sampling, structure or protonation) is the remaining limit, are not available.

# Applications

Binding free energies drive lead optimisation in drug discovery: more accurate absolute predictions would allow virtual screening of unseen chemistries and reduce synthesis cycles; sub-kcal/mol relative predictions would let computation replace many assays.

# Resolution criteria

A pre-registered prospective campaign (or blind challenge with experimental values withheld) on at least 30 targets, covering the listed difficult classes, with RMSE at most 1 kcal/mol, performed by at least two independent groups using different engines.

# Rating rationale

Difficulty 50: routine for easy congeneric series, hard in failure classes, and the experimental noise floor sits near the target. Application value 74: lead optimisation in drug discovery has large economic stakes. Leverage 42: shapes validation of force fields and ML/MM hybrids but few other fields depend on it.

# Work mix rationale

Prospective trials and benchmarks, with force-field and sampling improvements.

# Verification

Needs new experimental affinities: a pre-registered prospective campaign (or blind challenge with values withheld) on at least 30 targets covering the stated difficult classes must reach an RMSE of 1 kcal/mol or less, performed by at least two independent groups on different engines.

# Plain explanation

Designing a drug usually means finding a molecule that sticks tightly to a target protein. Chemists make and test thousands of candidates. If a computer could predict binding strength accurately, many would never need to be made.

The best current method gradually morphs one molecule into a slightly different one on the computer and adds up the energy cost. In good cases it predicts relative strengths to about 1 kcal/mol, which means within a factor of five or so. That is already valuable, and drug companies use it.

It works less well for molecules that carry a charge, for proteins that change shape, for cases involving trapped water, and for predicting absolute strength instead of comparing two molecules. Part of the problem is the experiment itself: the same binding measured in two labs often differs by nearly 1 kcal/mol, so there is a ceiling on what can be demonstrated.

The goal is to show, in genuinely blind tests across many targets and the hard cases, an error of about 1 kcal/mol.

# Student explanation

**Alchemical free-energy methods.** For relative binding free energy between ligands A and B, one computes $\Delta\Delta G_{bind}=\Delta G_B^{complex}-\Delta G_A^{complex}-(\Delta G_B^{solvent}-\Delta G_A^{solvent})$ with each leg obtained by morphing A into B with a coupling parameter $\lambda$, as explained in the free-energy entry. Absolute binding free energies instead decouple the ligand completely and add restraints for the bound state.

**State of accuracy.** Wang et al. (2015) reported errors close to 1 kcal/mol on curated sets. Ross et al. (2023) assembled a large public benchmark and showed that with careful preparation, FEP can reach accuracy comparable to experimental reproducibility, which they also measured at roughly 0.8-1 kcal/mol. Absolute free energies are typically less accurate than relative ones.

**Error sources.** (1) Force-field errors in ligand parameters, charges and torsions. (2) Sampling: protein reorganisation, buried-water exchange, slow loops. (3) System preparation: protonation and tautomer states, missing structure. (4) Charge-changing perturbations. (5) Experimental noise.

**What is open.** Prospective, blind studies across 30 or more targets, covering metalloproteins, covalent and membrane targets, with RMSE near 1 kcal/mol, reproduced with different engines. Whether force-field error or sampling error dominates the remaining gap is not established. Machine-learned potential/MM hybrids are being tested for relative free energies.

**Practical notes.** Typical pitfalls are ligand protonation or tautomer errors, unmodelled structural waters, and ligands that change net charge. Good practice is to run each perturbation in several repeats, inspect hysteresis and cycle closure, and quote error bars. Prospective use means predictions are recorded before the experimental values are known.

**Things to check yourself.** Why can relative free energies be more accurate than absolute ones? How does an error of 1 kcal/mol translate into a factor in dissociation constant?
