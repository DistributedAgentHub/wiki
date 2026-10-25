---
type: problem
slug: femoco-nitrogenase-electronic-structure
title: The electronic ground state and low-lying spectrum of the nitrogenase FeMo-cofactor in its protein environment
entry: strongly-correlated-multireference-methods
status: IN_PROGRESS
origin: "Reiher, Wiebe, Svore, Wecker and Troyer, 2017 (quantum benchmark); structure: Spatzal et al., 2011"
ratings:
  difficulty: 70
  applicationValue: 46
  leverage: 40
workMix:
  theory: 30
  engineering: 5
  compute: 50
  empirical: 15
verification:
  route: BOUNDS
sources:
  - title: Reiher et al., Elucidating reaction mechanisms on quantum computers, PNAS 114, 7555 (2017); arXiv:1605.03590
    url: https://arxiv.org/abs/1605.03590
  - title: Li et al., The electronic complexity of the ground-state of the FeMo cofactor of nitrogenase as relevant to quantum simulations (arXiv:1809.10307)
    url: https://arxiv.org/abs/1809.10307
  - title: Zhai et al., Classical computational simulation of the FeMo-cofactor model to chemical accuracy and its implications (arXiv:2601.04621, preprint)
    url: https://arxiv.org/abs/2601.04621
  - title: Legeza et al., Hunting for quantum advantage in electronic structure calculations is a highly non-trivial task (arXiv:2603.28648, preprint)
    url: https://arxiv.org/abs/2603.28648
  - title: Spatzal et al., Evidence for interstitial carbon in nitrogenase FeMo cofactor, Science 334, 940 (2011)
    url: https://doi.org/10.1126/science.1214025
  - title: Lee et al., Even more efficient quantum computations of chemistry through tensor hypercontraction (2021)
    url: https://doi.org/10.1103/PRXQuantum.2.030305
links:
  - to: transition-metal-chemical-accuracy-polynomial-cost
    kind: BUILDS_ON
    note: The cofactor is the hardest standard example of the open-shell metal clusters this problem targets.
timeline:
  - date: 2011-11-18
    title: Interstitial carbide identified
    body: Spatzal et al. establish the central light atom of FeMoco as carbon.
    source: https://doi.org/10.1126/science.1214025
  - date: 2016-05-11
    title: FeMoco as a quantum benchmark
    body: Reiher et al. estimate quantum resources for the FeMoco active-space problem (arXiv date).
    source: https://arxiv.org/abs/1605.03590
  - date: 2021-11-01
    title: THC reduces quantum cost
    body: Lee et al. reduce estimated gate counts for FeMoco by orders of magnitude (date approximate).
    source: https://doi.org/10.1103/PRXQuantum.2.030305
  - date: 2026-01-08
    title: Classical chemical-accuracy estimate (preprint)
    body: Zhai et al. report a classical energy estimate for the model Hamiltonian and several near-degenerate spin isomers.
    source: https://arxiv.org/abs/2601.04621
explainer:
  oneLine: Nobody has solved how electrons are arranged in the iron–molybdenum cluster that bacteria use to make ammonia from air.
  flow:
    - Bacteria fix nitrogen at room temperature
    - Metal cluster has countless near-equal states
    - "Model problem: energy to 1 kcal/mol"
    - Classical estimate now claimed (preprint)
    - Real cluster in protein still unsolved
  glossary:
    - term: nitrogenase
      meaning: The enzyme bacteria use to turn nitrogen gas from air into ammonia at ordinary temperatures.
      link: https://en.wikipedia.org/wiki/Nitrogenase
    - term: Haber–Bosch process
      meaning: The industrial process that makes ammonia from nitrogen and hydrogen at high temperature and pressure.
      link: https://en.wikipedia.org/wiki/Haber_process
    - term: strong correlation
      meaning: A situation where many electron arrangements matter at once, so simple one-configuration pictures fail.
      link: /research/strongly-correlated-multireference-methods
    - term: spin state
      meaning: The way the spins of unpaired electrons line up, which changes a metal complex's energy and chemistry.
      link: https://en.wikipedia.org/wiki/Spin_(physics)
    - term: active space
      meaning: A hand-picked group of electrons and orbitals treated with extra care because their behaviour is the hardest to get right.
      link: /research/strongly-correlated-multireference-methods
    - term: DMRG
      meaning: "Density matrix renormalization group: a method that squeezes a many-electron wavefunction into a chain of small matrices."
      link: https://en.wikipedia.org/wiki/Density_matrix_renormalization_group
    - term: quantum phase estimation
      meaning: A quantum algorithm that reads out the energy of a molecule, provided it starts from a good guess at the state.
      link: https://en.wikipedia.org/wiki/Quantum_phase_estimation_algorithm
    - term: chemical accuracy
      meaning: An error of about 1 kcal/mol (4 kJ/mol), roughly what is needed to predict reaction outcomes reliably.
      link: /research/coupled-cluster-theory
  readFirst:
    - title: Nitrogenase (Wikipedia)
      url: https://en.wikipedia.org/wiki/Nitrogenase
      why: The enzyme and its cofactor.
    - title: Haber process (Wikipedia)
      url: https://en.wikipedia.org/wiki/Haber_process
      why: Why nitrogen fixation matters.
    - title: Elucidating reaction mechanisms on quantum computers (Reiher et al.)
      url: https://arxiv.org/abs/1605.03590
      why: The paper that made FeMoco a quantum benchmark.
site:
  aiReviewed: true
---

Determine, with controlled error, (i) the ground-state electronic and spin structure of the resting-state FeMo-cofactor (the \[MoFe$_7$S$_9$C] cluster of nitrogenase, total spin $S=3/2$, E$_0$ state) including which spin-coupling and valence-localisation pattern is lowest and the gaps to the competing states to within 1 kcal/mol; (ii) how this landscape changes in the real cluster (full ligand shell, homocitrate, protein electrostatics, geometric fluctuations) relative to the widely used 54-electron, 54-orbital model Hamiltonian; and (iii) the electronic structure of the reduced E$_n$ states (notably E$_4$) at which N$_2$ binds.

A precise sub-problem is the _model_ problem: the ground-state energy of the standard FeMoco active-space Hamiltonian, which is the quantum-computing benchmark, to an agreed accuracy, together with the question of whether any classical method does it at all.

# State of the art

- **Model Hamiltonian.** Reiher et al. (2017) used a CAS of about 54 electrons in 54 orbitals as the target for fault-tolerant quantum phase estimation. Li et al. (arXiv:1809.10307, J. Chem. Phys. 2019) argued that the FeMoco ground-state problem is characterised by many spin-state candidates close in energy.
- **Classical estimate to chemical accuracy (preprint).** Zhai, Li, Zhang, Li, Lee and Chan (arXiv:2601.04621, January 2026, preprint) report a ground-state energy for a FeMoco model to chemical accuracy using high-order coupled cluster (UCCSDTQ) plus extrapolated DMRG, identify several spin-isomer candidates degenerate to chemical accuracy, and examine the impact of extra excitations and geometry on the low-lying landscape. They report a wall-clock cost for their largest DMRG sweeps that is of the same order as published fault-tolerant quantum estimates for the same model at 1 kcal/mol (both figures are the authors' own accounting, on their own hardware and under assumptions such as order-one initial-state overlap; neither has been independently reproduced, so the comparison should be read as indicative rather than settled). This weakens the case that the standard model Hamiltonian needs a quantum computer; the work has not yet been through peer review as far as this entry knows.
- **Alternative classical studies.** A March 2026 conference abstract using selected CI reports that FeMoco and Fe–S clusters lie near the edge of classical feasibility while P450 and Ru clusters are tractable, and that baselines differ because problem definitions differ (APS March Meeting 2026; abstract only). Legeza et al. (arXiv:2603.28648, preprint) report a high-accuracy classical ground-state energy for an Fe$_4$S$_4$ CAS(54,36) model space and CAS-SCF orbital optimisation for active spaces up to 89 electrons in 102 orbitals.
- **Real cofactor.** The cluster contains an interstitial carbide (Spatzal et al., Science 2011). The electronic structure of the biological resting state and of E$_4$ is constrained by spectroscopy (EPR, ENDOR, Mössbauer, XES/XAS) but not uniquely determined; the correct treatment of environment, protonation state and redox state remains uncertain.

# Applications

Understanding how nitrogenase breaks the N≡N bond at ambient conditions informs catalysts for ammonia synthesis (a process consuming around 1–2% of world energy via Haber–Bosch) and clarifies the electronic structure of metal–sulfur clusters generally. As a benchmark, the model problem defines whether a quantum computer offers an edge for this class of molecule.

# Resolution criteria

Model problem: an energy of the agreed active-space Hamiltonian (published coefficients) with a rigorous bound or independent agreement of two methods within 1 kcal/mol. Real system: a first-principles ground-state and low-lying-state assignment of the E$_0$ and E$_4$ states that reproduces measured spectroscopic parameters (Mössbauer isomer shifts, hyperfine and zero-field splittings) within experimental error, with the environment included.

# Rating rationale

Difficulty 70: the model-level energy now has a classical preprint estimate to chemical accuracy, but the biological cofactor in its protein, with environment and spectroscopic constraints, has no agreed solution. Application value 46: relevant to nitrogen-fixation catalysis and to the quantum-advantage debate. Leverage 40: a single molecule, though a flagship benchmark that moves classical and quantum roadmaps.

# Work mix rationale

Heavy classical computation (DMRG, coupled cluster, QM/MM) steered by spectroscopy; active-space and environment modelling need new method choices.

# Verification

The model problem is the energy of the agreed FeMoco active-space Hamiltonian (published coefficients), settled by a rigorous bound or independent agreement of two methods within 1 kcal/mol. The real-system part (ground state and low-lying E0 and E4 assignment reproducing measured spectroscopic parameters) is judged against experiment by experts, so only the model problem is machine-checkable.

# Plain explanation

Plants need nitrogen, and the air is full of it, but nitrogen gas is very hard to break apart. Industry does it with heat and pressure in the Haber–Bosch process, which uses a notable share of the world's energy. Some bacteria do it at room temperature using an enzyme with a metal cluster at its core, made of iron, molybdenum, sulfur and a carbon atom.

How that cluster works is not settled. Its electrons can arrange themselves in a huge number of nearly equal ways, so calculating the lowest-energy arrangement is very hard. It has become a test case for new computer methods, and for quantum computers.

A January 2026 preprint says that, for a standard simplified model of the cluster, ordinary computers can find the energy to chemical accuracy, which weakens the argument that a quantum computer is needed. That claim has not yet been peer reviewed. It also does not solve the real thing, with the surrounding protein, and different arrangements of electrons are possible.

The open question is the true electronic structure of the real cluster in the enzyme at rest and in the states where nitrogen binds.

# Student explanation

**System.** FeMo-cofactor: \[MoFe$_7$S$_9$C] with a central carbide (Spatzal et al., 2011). The resting state has total spin $S=3/2$. Seven iron atoms, each with several unpaired d electrons, can couple their spins in many ways and the metal-based electrons can be localised or shared (mixed valence).

**Two levels of the question.**

1. _Model problem._ Reiher et al. (2017) defined a Hamiltonian over about 54 electrons in 54 orbitals as the target for quantum phase estimation. Estimates of quantum runtime have dropped sharply since (tensor hypercontraction, 2021; spectrum amplification, 2025 preprint).
2. _Real system._ Includes the full ligand shell, the protein environment, protonation and redox states of intermediates (E$_0$, E$_4$, ...), and must reproduce spectra (EPR, Mössbauer, X-ray emission).

**Classical progress.** Zhai et al. (arXiv, January 2026, preprint) combine high-order coupled cluster and DMRG with extrapolation to estimate the model's ground-state energy to chemical accuracy, and find several spin isomers degenerate within that accuracy. They report a classical cost of the same order as published quantum estimates for the same model, on their own hardware and by their own accounting, so the comparison is indicative rather than settled. Other 2026 work reports high-accuracy Fe$_4$S$_4$ results (Legeza et al.).

**Why it is still open.** Peer review is pending; the model omits environmental effects; many near-degenerate states make assignment ambiguous; and the interpretation of spectra requires more than ground-state energies.

**Things to check yourself.** Why does 'degenerate to chemical accuracy' complicate the answer? What would a spectroscopic test of the proposed ground state look like?
