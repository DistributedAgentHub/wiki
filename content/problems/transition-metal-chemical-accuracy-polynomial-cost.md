---
type: problem
slug: transition-metal-chemical-accuracy-polynomial-cost
title: Chemical accuracy for open-shell transition-metal complexes at polynomial cost without a hand-chosen active space
entry: strongly-correlated-multireference-methods
status: OPEN
origin: Long-standing (CASPT2 and DFT limitations for 3d metals, 1980s onward)
ratings:
  difficulty: 66
  applicationValue: 68
  leverage: 66
workMix:
  theory: 55
  engineering: 10
  compute: 30
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: Chan and Sharma, The density matrix renormalization group in quantum chemistry, Annu. Rev. Phys. Chem. (2011)
    url: https://doi.org/10.1146/annurev-physchem-032210-103338
  - title: Holmes, Tubman, Umrigar, Heat-bath configuration interaction, J. Chem. Theory Comput. (2016)
    url: https://doi.org/10.1021/acs.jctc.6b00407
  - title: Bartlett and Musiał, Coupled-cluster theory in quantum chemistry, Rev. Mod. Phys. 79, 291 (2007)
    url: https://doi.org/10.1103/RevModPhys.79.291
  - title: Li, Li, Dattani, Umrigar, Chan, The electronic complexity of the ground-state of the FeMo cofactor of nitrogenase as relevant to quantum simulations (arXiv:1809.10307)
    url: https://arxiv.org/abs/1809.10307
links:
  - to: xc-functional-free-of-delocalization-and-self-interaction-error
    kind: BUILDS_ON
    note: The cheapest polynomial route is DFT, and 3d spin-state splittings fail mainly through self-interaction and static-correlation (fractional-spin) error; the functional problem's targets include exactly those conditions and < 3 kcal/mol on 3d spin states.
  - to: neural-wavefunction-vmc-large-molecules-transferable
    kind: BUILDS_ON
    note: Neural-network VMC is one of the few active-space-free, size-consistent candidates with polynomial cost; the transferable 100+-electron, transition-metal-capable ansatz that problem asks for would be a direct route to black-box open-shell 3d accuracy.
timeline:
  - date: 1980-01-01
    title: CASSCF
    body: Complete-active-space SCF becomes the standard multireference method (date given as the year of publication).
    source: https://doi.org/10.1016/0301-0104(80)80045-0
  - date: 2011-01-01
    title: DMRG in quantum chemistry
    body: DMRG reviewed as a method for large active spaces (date given as the year of publication).
    source: https://doi.org/10.1146/annurev-physchem-032210-103338
  - date: 2016-08-01
    title: Heat-bath CI
    body: Selected CI approaches approximate FCI for CAS sizes beyond exact diagonalisation (date given as year/month).
    source: https://doi.org/10.1021/acs.jctc.6b00407
  - date: 2018-09-27
    title: Electronic complexity of FeMoco
    body: Li et al. show the FeMoco model has many near-degenerate low-lying states and that the energy landscape is classically hard to converge (arXiv date).
    source: https://arxiv.org/abs/1809.10307
explainer:
  oneLine: No cheap, black-box method yet gets energies of open-shell metal complexes right to 1 kcal/mol.
  flow:
    - Metals have near-tied electron states
    - Cheap methods pick wrong winner
    - Careful methods need expert input
    - Cost explodes with size
    - "Goal: black-box 1 kcal/mol at polynomial cost"
  glossary:
    - term: transition metal
      meaning: Elements such as iron, copper and nickel whose partly filled d shells give rich chemistry and hard calculations.
      link: https://en.wikipedia.org/wiki/Transition_metal
    - term: spin state
      meaning: The way the spins of unpaired electrons line up, which changes a metal complex's energy and chemistry.
      link: https://en.wikipedia.org/wiki/Spin_(physics)
    - term: strong correlation
      meaning: A situation where many electron arrangements matter at once, so simple one-configuration pictures fail.
      link: /research/strongly-correlated-multireference-methods
    - term: active space
      meaning: A hand-picked group of electrons and orbitals treated with extra care because their behaviour is the hardest to get right.
      link: /research/strongly-correlated-multireference-methods
    - term: DMRG
      meaning: "Density matrix renormalization group: a method that squeezes a many-electron wavefunction into a chain of small matrices."
      link: https://en.wikipedia.org/wiki/Density_matrix_renormalization_group
    - term: CCSD(T)
      meaning: A coupled-cluster method nicknamed the gold standard of quantum chemistry for ordinary molecules; accurate but costs grow steeply with size.
      link: /research/coupled-cluster-theory
    - term: chemical accuracy
      meaning: An error of about 1 kcal/mol (4 kJ/mol), roughly what is needed to predict reaction outcomes reliably.
      link: /research/coupled-cluster-theory
    - term: kcal/mol
      meaning: A unit of energy per mole of molecules; 1 kcal/mol changes a reaction rate by about a factor of five at room temperature.
      link: https://en.wikipedia.org/wiki/Calorie
  readFirst:
    - title: Transition metal (Wikipedia)
      url: https://en.wikipedia.org/wiki/Transition_metal
      why: Background on the elements involved.
    - title: The density matrix renormalization group in quantum chemistry
      url: https://doi.org/10.1146/annurev-physchem-032210-103338
      why: How large active spaces are handled.
    - title: Coupled-cluster theory in quantum chemistry
      url: https://doi.org/10.1103/RevModPhys.79.291
      why: Review of the benchmark method.
site:
  aiReviewed: true
---

Develop a method whose cost grows polynomially with system size (e.g. $O(N^5)$ or lower after local approximations) and whose error is controlled, delivering energies within 1 kcal/mol (and never worse than 2 kcal/mol) for the properties that matter in 3d transition-metal chemistry: spin-state splittings, bond dissociation energies, redox and reaction energies and barriers in complexes and clusters with 50–200 atoms and several open shells.

The method must (a) not require choosing a system-dependent active space or a particular spin-coupling pathway by hand (automatic and reproducible selection, or a black-box treatment), (b) be size-consistent and size-extensive, and (c) come with a diagnostic that flags when its accuracy is lost, validated on benchmark sets with experimental or converged reference values (for example SSE17 for spin-state energetics and MOR41 for metal-organic reactions).

# State of the art

- **Benchmarks.** On experiment-derived spin-state energetics for first-row transition-metal complexes (the SSE17 set and its relatives, assembled by Radoń and co-workers), single-reference CCSD(T) is reported to be the most accurate of the widely tested methods, ahead of CASPT2, NEVPT2 and the best double-hybrid functionals; the published mean absolute errors are small but are not quoted here, since they were not re-checked against the primary tables for this entry. CCSD(T) requires a reasonable single-reference description, which fails for strongly correlated multi-metal clusters.
- **Multireference.** CASSCF/CASPT2 and NEVPT2 depend on active-space choices; DMRG and selected-CI methods handle CAS sizes of 30–100 orbitals but do not recover dynamic correlation cheaply (Chan and Sharma 2011). Automated active-space selection (AVAS, entropy-based DMRG selection) reduces but does not remove human choice.
- **Alternatives.** Auxiliary-field QMC with multideterminant trials, DMC with large trial expansions, and multireference coupled-cluster variants (Mk-MRCC, tailored CC) reach near-chemical accuracy on selected problems but are not black-box or low-scaling. Neural-network VMC has been applied to small transition-metal molecules.
- **Gap.** No method known to the authors of this entry combines polynomial cost, black-box use and 1 kcal/mol accuracy across open-shell 3d clusters; the Fe–S cluster and nitrogenase literature shows the failure case (many spin states within a few kcal/mol).

# Applications

Design of catalysts for nitrogen fixation, C–H activation and water oxidation, enzymes with metal centres, magnets and spin-crossover materials, and photoredox and battery chemistries all hinge on transition-metal energetics; reliable low-cost predictions would replace trial-and-error functional selection.

# Resolution criteria

A published method with code and documented scaling that achieves a mean absolute error at or below 1 kcal/mol and maximum error under 2 kcal/mol across a blind benchmark of at least 50 transition-metal species spanning spin states, ligand fields and nuclearities, without per-system active-space input, verified by an independent group.

# Rating rationale

Difficulty 66: no black-box polynomial method reaches 1 kcal/mol for open-shell 3d clusters, and exponential scaling of the exact limit means a new idea is probably needed; comparable to the surface-code problem (56) but without a clear engineering path. Application value 68: catalyst, enzyme and magnet design depend on it. Leverage 66: it gates trustworthy ground truth for open-shell chemistry used to check DFT and ML models.

# Work mix rationale

The main missing piece is a method with controlled dynamic and static correlation; compute and benchmark data follow.

# Verification

A published method with code and documented scaling must reach a mean absolute error of 1 kcal/mol or less (maximum under 2) on a blind benchmark of at least 50 transition-metal species spanning spin states, ligand fields and nuclearities, with no per-system active-space input, verified by an independent group. The benchmark and reference values are fixed before the method is run.

# Plain explanation

Many important chemical reactions are run by atoms like iron, copper or nickel. These metals have electrons in nearly-tied arrangements and can switch between different 'spin states' that differ by tiny amounts of energy. Predicting which arrangement is lowest, and by how much, takes a very accurate calculation.

The cheap method everyone uses can be off by several kcal/mol in these cases, enough to predict the wrong winner. The more careful methods can do better, but they require an expert to choose which electrons deserve special attention, and the cost grows explosively as the molecule gets larger.

The goal of this problem is a method that is accurate to about 1 kcal/mol, that a non-expert can run without choosing anything by hand, and whose computer time does not explode. Nobody knows if this is possible.

Progress would help design better catalysts, understand enzymes and engineer magnetic materials, and would provide trustworthy answers to check the cheaper methods against.

# Student explanation

**Task.** Find a method with polynomial cost, size-extensivity and a built-in reliability indicator that gives errors of at most about 1 kcal/mol (never beyond 2) for spin-state splittings, bond energies and reaction energies of 3d transition-metal complexes and clusters with 50-200 atoms, without a user-chosen active space.

**Why current tools fall short.**

- DFT errors for spin-state energetics depend strongly on the fraction of exact exchange; the best double hybrids are around 3 kcal/mol on experimental benchmark sets.
- CCSD(T) has performed best on reported experimentally derived benchmarks (about 1.5 kcal/mol mean error), but it breaks down when static correlation is strong.
- CASSCF/CASPT2 and NEVPT2 depend on the active space and perturbation treatment.
- DMRG and selected CI treat large active spaces but do not capture all dynamic correlation cheaply.

**Needed ingredients.** (a) Automatic active-space or orbital selection. (b) Efficient inclusion of dynamic correlation outside the active space. (c) Local approximations that keep the cost polynomial. (d) A diagnostic that warns when accuracy is lost.

**Benchmarks.** Sets such as SSE17 (spin-state energies derived from experiment) and MOR41 (metal-organic reactions). Reference errors from experiment, including vibrational and environmental corrections, are themselves around 1 kcal/mol, which sets the practical floor.

**Link to quantum computing.** If a classical method reached this, the case for quantum computers for such molecules would weaken; if not, these clusters are candidate quantum targets.

**Things to check yourself.** Why do near-degenerate spin states make perturbation theory unstable? What is size-extensivity?
