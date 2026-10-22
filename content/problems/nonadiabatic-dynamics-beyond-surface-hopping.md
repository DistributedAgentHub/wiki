---
type: problem
slug: nonadiabatic-dynamics-beyond-surface-hopping
title: Scalable nonadiabatic dynamics with correct decoherence and branching beyond surface hopping
entry: born-oppenheimer-pes
status: OPEN
origin: Tully, 1990 (surface hopping); Abedi, Maitra and Gross, 2010 (exact factorization)
ratings:
  difficulty: 58
  applicationValue: 50
  leverage: 44
workMix:
  theory: 60
  engineering: 10
  compute: 25
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: Tully, Molecular dynamics with electronic transitions, J. Chem. Phys. 93, 1061 (1990)
    url: https://doi.org/10.1063/1.459170
  - title: Subotnik et al., Understanding the surface hopping view of electronic transitions and decoherence, Annu. Rev. Phys. Chem. 67, 387 (2016)
    url: https://doi.org/10.1146/annurev-physchem-040215-112245
  - title: Abedi, Maitra, Gross, Exact factorization of the time-dependent electron-nuclear wave function, Phys. Rev. Lett. 105, 123002 (2010)
    url: https://doi.org/10.1103/PhysRevLett.105.123002
  - title: Beck et al., The MCTDH method, Phys. Rep. 324, 1 (2000)
    url: https://doi.org/10.1016/S0370-1573(99)00047-2
  - title: Valahu et al., Direct observation of geometric-phase interference in dynamics around a conical intersection, Nat. Chem. (2023)
    url: https://doi.org/10.1038/s41557-023-01300-3
  - title: "Martinka et al., Flexible framework for surface hopping: from hybrid schemes for machine learning to benchmarkable nonadiabatic dynamics (arXiv:2512.19152)"
    url: https://arxiv.org/abs/2512.19152
  - title: Ha et al., Unifying decoherence and phase evolution in mixed quantum-classical dynamics through exact factorization (arXiv:2511.05794, preprint)
    url: https://arxiv.org/abs/2511.05794
timeline:
  - date: 1990-07-01
    title: Fewest-switches surface hopping
    body: Tully's algorithm becomes the standard trajectory method.
    source: https://doi.org/10.1063/1.459170
  - date: 2010-09-17
    title: Exact factorization
    body: Abedi, Maitra and Gross formulate the exact electron-nuclear factorization that underlies new decoherence schemes.
    source: https://doi.org/10.1103/PhysRevLett.105.123002
  - date: 2016-01-01
    title: Surface hopping review
    body: Subotnik et al. catalogue failures and decoherence fixes (date given as year of publication).
    source: https://doi.org/10.1146/annurev-physchem-040215-112245
  - date: 2023-06-01
    title: Analogue conical-intersection experiment
    body: Trapped-ion simulation observes geometric-phase interference (date approximate).
    source: https://doi.org/10.1038/s41557-023-01300-3
  - date: 2025-11-08
    title: Unifying decoherence and phase evolution (preprint)
    body: Ha et al. propose an exact-factorization-based treatment of decoherence and phase evolution.
    source: https://arxiv.org/abs/2511.05794
explainer:
  oneLine: Simulating molecules after they absorb light is still unreliable, because the standard shortcut has known flaws.
  flow:
    - Light excites a molecule
    - Atoms move, electronic states mix
    - Classical hopping is a shortcut
    - "Known flaws: coherence, energy"
    - Need parameter-free, benchmarked method
  glossary:
    - term: conical intersection
      meaning: A point where two energy surfaces of a molecule touch, letting an excited molecule fall to a lower state within femtoseconds.
      link: https://en.wikipedia.org/wiki/Conical_intersection
    - term: surface hopping
      meaning: A simulation trick where atoms follow classical paths and randomly jump between energy surfaces to mimic quantum transitions.
      link: https://en.wikipedia.org/wiki/Potential_energy_surface
    - term: decoherence
      meaning: The loss of quantum blending between states as a molecule interacts with its surroundings.
      link: https://en.wikipedia.org/wiki/Quantum_decoherence
    - term: Born–Oppenheimer approximation
      meaning: The shortcut of treating heavy nuclei as standing still while the light electrons settle, which produces the energy map used throughout chemistry.
      link: /research/born-oppenheimer-pes
    - term: potential energy surface
      meaning: A map giving a molecule's energy for every arrangement of its atoms; valleys are stable molecules, passes between valleys are reaction barriers.
      link: /research/born-oppenheimer-pes
    - term: wavefunction
      meaning: The mathematical object that holds everything quantum mechanics can say about a system, such as where its electrons are likely to be.
      link: https://en.wikipedia.org/wiki/Wave_function
  readFirst:
    - title: Conical intersection (Wikipedia)
      url: https://en.wikipedia.org/wiki/Conical_intersection
      why: Where nonadiabatic transitions happen.
    - title: Photochemistry (Wikipedia)
      url: https://en.wikipedia.org/wiki/Photochemistry
      why: The science that relies on this.
    - title: Understanding the surface hopping view of electronic transitions and decoherence
      url: https://doi.org/10.1146/annurev-physchem-040215-112245
      why: Review of strengths and weaknesses of surface hopping.
site:
  aiReviewed: true
---

Construct a mixed quantum–classical (or otherwise polynomial-cost) method for excited-state molecular dynamics through conical intersections that, with no system-specific parameters, reproduces exact quantum-dynamics reference results for populations, product branching ratios, and time scales on a benchmark suite of molecules (e.g. pyrazine, butatriene cation, ethylene, uracil, and the Tully and spin-boson model families extended to 20–50 vibrational modes), to within, say, 10% in branching ratios and 20% in decay time constants, while

- obeying detailed balance and the correct long-time thermalisation,
- treating decoherence from first principles (not with an ad hoc decoherence time or energy-based correction),
- remaining stable for dozens of coupled states and for molecules in solution with explicit solvent, and
- working with ab initio electronic structure (including TDDFT or multireference gradients and couplings) at an acceptable number of electronic-structure calls.

# State of the art

- **Workhorse.** Fewest-switches surface hopping (Tully 1990) with ad hoc decoherence corrections is used in most excited-state dynamics studies. Subotnik et al. (Annu. Rev. Phys. Chem. 2016) review its known failures: overcoherence, inconsistent internal electronic-nuclear state, frustrated hops and sensitivity to the representation.
- **Exact references.** MCTDH and multilayer MCTDH (Beck et al. 2000; Wang and Thoss 2003) give numerically exact quantum dynamics but on model vibronic Hamiltonians of up to about a hundred modes, not with on-the-fly ab initio electronic structure in solution.
- **Trajectory alternatives.** Ab initio multiple spawning, multiconfigurational Ehrenfest, and exact-factorization-based surface hopping (Vindel-Zandbergen et al. 2021–2022; Dupuy et al. 2024; Ha et al. 2025) are improving decoherence treatments, but have not yet been shown in broad blind tests to beat well-parametrised surface hopping on realistic molecules. Benchmark frameworks are emerging (Martinka et al., arXiv:2512.19152, 2025).
- **Experiments.** Trapped-ion analogue simulators have observed geometric-phase interference around a conical intersection in model systems (Valahu et al., Nat. Chem. 2023), and Quantinuum has reported phase-estimation runs on an ethylene conical-intersection effective Hamiltonian (company white paper, 2026; a vendor claim, not a refereed or independently reproduced result). These are not general-molecule dynamics.
- **Gap.** No method meets all the listed requirements; reference quantum dynamics is unavailable for the chemically realistic cases that matter.

# Applications

Photochemistry (vision, DNA photodamage, photoswitches, photocatalysts), OLED and solar-cell materials, charge-transfer and singlet-fission dynamics, and ultrafast spectroscopy interpretation depend on correct branching; a reliable method would turn excited-state simulation into a predictive design tool.

# Resolution criteria

A published method with open implementation whose results match numerically exact or experimentally anchored reference dynamics within the stated tolerances on a pre-registered blind benchmark of at least 10 molecules including at least two in explicit solvent, validated by at least one independent group.

# Rating rationale

Difficulty 58: several competing frameworks, decades of work and no consensus method; exact references exist only for model systems. Application value 50: photochemistry and optoelectronics depend on correct branching. Leverage 44: it reshapes a subfield and provides ground truth for ML excited-state models.

# Work mix rationale

The central need is a consistent, parameter-free treatment of decoherence; benchmarks and electronic-structure cost follow.

# Verification

A published method with an open implementation must match numerically exact or experimentally anchored reference dynamics within the stated tolerances on a pre-registered blind benchmark of at least 10 molecules (at least two in explicit solvent), validated by at least one independent group.

# Plain explanation

When a molecule absorbs light, its electrons jump to a higher energy state. What happens next, such as whether the molecule safely releases the energy, changes shape or breaks, happens within femtoseconds. Understanding this is vital for vision, sunscreen, solar cells and light-driven reactions.

Simulating it needs the atoms and electrons to be treated together, because the atoms' motion can make the electrons jump between energy states. The common shortcut lets atoms move like classical balls and lets them randomly 'hop' between energy states with a probability set by quantum rules. It is simple but it has known flaws: it keeps quantum blending alive too long and sometimes violates basic energy balance.

Exact quantum calculations exist only for simple model molecules. For realistic molecules in a solvent there is nothing to compare against, so it is hard to say which improved shortcut is best.

The goal is a method whose predictions match exact answers on test molecules, without hand-tuned fixes, and which can be run with real electronic-structure calculations.

# Student explanation

**Setting.** After photoexcitation, nuclei move on an excited-state surface until they reach regions of strong nonadiabatic coupling, such as conical intersections, where population transfers between electronic states. The Born–Oppenheimer approximation breaks down.

**Surface hopping.** Tully's fewest-switches algorithm (1990) propagates classical trajectories on one surface, integrates the electronic amplitudes along the trajectory, and hops stochastically with probability set by the amplitude change. Known issues: overcoherence (amplitudes of unoccupied states remain inconsistent with the nuclear path), frustrated hops, and the need to rescale velocities. Decoherence corrections are added, often with adjustable parameters.

**Alternatives.** Ab initio multiple spawning and Ehrenfest-type methods; exact-factorization-based methods, in which the electron-nuclear wavefunction is written exactly as a product of a nuclear part and a conditional electronic part, suggesting decoherence terms from first principles; multi-configuration time-dependent Hartree (MCTDH), which gives numerically exact answers for model Hamiltonians with tens to about a hundred modes.

**What is missing.** A method whose populations, branching ratios and time scales match exact references on a broad blind benchmark, in realistic molecules and solvents, and with cost compatible with on-the-fly electronic structure. Benchmark frameworks are being built (Martinka et al., 2025).

**Experimental hooks.** Trapped-ion simulators have observed the geometric-phase signature near a conical intersection in model systems.

**Practical notes.** On-the-fly dynamics need excited-state gradients and couplings at every step, typically from TDDFT, CASSCF or ADC(2), each with its own failure modes near intersections, so electronic-structure error and dynamics error are entangled. Codes include SHARC and Newton-X; benchmarking against exact model dynamics isolates the dynamics error.

**Things to check yourself.** Why does a trajectory following one surface at a time have trouble with coherence? What does a branching ratio mean in photochemistry?
