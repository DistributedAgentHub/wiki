---
type: problem
slug: quantum-advantage-chemical-ground-state-energy
title: A verified quantum advantage for a chemically relevant ground-state energy
entry: quantum-computing-for-chemistry
status: OPEN
origin: Aspuru-Guzik et al., 2005; Reiher et al., 2017
ratings:
  difficulty: 65.5
  applicationValue: 61.5
  leverage: 56
workMix:
  theory: 25
  engineering: 45
  compute: 25
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: Robledo-Moreno et al., Chemistry beyond the scale of exact diagonalization on a quantum-centric supercomputer, Sci. Adv. (2025)
    url: https://doi.org/10.1126/sciadv.adu9991
  - title: Legeza et al., Hunting for quantum advantage in electronic structure calculations is a highly non-trivial task (arXiv:2603.28648, preprint)
    url: https://arxiv.org/abs/2603.28648
  - title: Kirby et al., Observation of improved accuracy over classical sparse ground-state solvers using a quantum computer (arXiv:2603.03496, preprint)
    url: https://arxiv.org/abs/2603.03496
  - title: Genin et al., Towards quantum advantage in chemistry (arXiv:2512.13657, preprint)
    url: https://arxiv.org/abs/2512.13657
  - title: Lee et al., Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry, Nat. Commun. (2023)
    url: https://doi.org/10.1038/s41467-023-37587-6
  - title: Google Quantum AI, Observation of constructive interference at the edge of quantum ergodicity, Nature (2025)
    url: https://doi.org/10.1038/s41586-025-09526-6
  - title: Low et al., Fast quantum simulation of electronic structure by spectrum amplification (arXiv:2502.15882, preprint)
    url: https://arxiv.org/abs/2502.15882
links:
  - to: verifiable-quantum-advantage-benchmark
    kind: RELATED
    note: Both ask for a quantum advantage whose result can be checked independently of the device.
  - to: qpe-initial-state-overlap-strongly-correlated-molecules
    kind: BUILDS_ON
    note: Phase-estimation advantage requires an initial state with sufficient overlap with the true ground state.
  - to: femoco-nitrogenase-electronic-structure
    kind: BUILDS_ON
    note: "Criterion 1 is relative to the best classical method, and the FeMoco 54-orbital model is the standard target: the femoco problem's sub-question 'does any classical method solve the model Hamiltonian' (Zhai et al.: DMRG ~23 h vs ~8.6 h QPE estimate) is what an advantage claim on it must beat."
timeline:
  - date: 2021-11-01
    title: THC resource estimate
    body: Lee et al. reduce fault-tolerant cost estimates for FeMoco by orders of magnitude (date approximate).
    source: https://doi.org/10.1103/PRXQuantum.2.030305
  - date: 2023-04-05
    title: Evidence for advantage questioned
    body: Lee et al. publish analysis of state preparation and classical heuristics (date approximate).
    source: https://doi.org/10.1038/s41467-023-37587-6
  - date: 2025-01-01
    title: Sample-based diagonalisation of Fe4S4 (77 qubits)
    body: IBM and RIKEN report a CAS(54,36) calculation combining quantum samples and classical diagonalisation (date given as year of publication).
    source: https://doi.org/10.1126/sciadv.adu9991
  - date: 2026-03-03
    title: Improvement over selected CI on a constructed Hamiltonian (preprint)
    body: Kirby et al. report a quantum algorithm outperforming selected CI for a sparse-ground-state Hamiltonian.
    source: https://arxiv.org/abs/2603.03496
  - date: 2026-03-30
    title: Classical Fe4S4 CAS(54,36) benchmark (preprint)
    body: Legeza et al. report high-accuracy classical results for a tracker-listed instance.
    source: https://arxiv.org/abs/2603.28648
explainer:
  oneLine: No quantum computer has yet beaten the best ordinary methods at calculating the energy of a real molecule.
  flow:
    - "Hope: quantum beats classical for molecules"
    - Present machines small and noisy
    - Results so far reproduced classically
    - Need real molecule, verified energy
    - Classical methods keep improving
  glossary:
    - term: qubit
      meaning: The basic unit of a quantum computer, which can hold a blend of 0 and 1.
      link: https://en.wikipedia.org/wiki/Quantum_computing
    - term: quantum phase estimation
      meaning: A quantum algorithm that reads out the energy of a molecule, provided it starts from a good guess at the state.
      link: https://en.wikipedia.org/wiki/Quantum_phase_estimation_algorithm
    - term: logical qubit
      meaning: A reliable qubit built from many error-prone physical qubits through error correction.
      link: /research/quantum-error-correction
    - term: chemical accuracy
      meaning: An error of about 1 kcal/mol (4 kJ/mol), roughly what is needed to predict reaction outcomes reliably.
      link: /research/coupled-cluster-theory
    - term: active space
      meaning: A hand-picked group of electrons and orbitals treated with extra care because their behaviour is the hardest to get right.
      link: /research/strongly-correlated-multireference-methods
    - term: DMRG
      meaning: "Density matrix renormalization group: a method that squeezes a many-electron wavefunction into a chain of small matrices."
      link: https://en.wikipedia.org/wiki/Density_matrix_renormalization_group
    - term: strong correlation
      meaning: A situation where many electron arrangements matter at once, so simple one-configuration pictures fail.
      link: /research/strongly-correlated-multireference-methods
  readFirst:
    - title: Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry
      url: https://doi.org/10.1038/s41467-023-37587-6
      why: Open-access, sober assessment of the claim.
    - title: Quantum computational chemistry (McArdle et al.)
      url: https://doi.org/10.1103/revmodphys.92.015003
      why: Review of algorithms.
    - title: Quantum computing (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_computing
      why: General background.
raw:
  body: "Demonstrate on quantum hardware the computation of the ground-state energy (or a low-lying excitation energy) of the electronic Hamiltonian of a *chemically relevant* molecule or cluster (all-electron or a stated, chemically meaningful active space in a stated basis, not a synthetic Hamiltonian built to be hard classically) to chemical accuracy (1.6 mHa) such that\n\n1. no classical method run with comparable or larger resources, selected by an independent group from the best-known approaches (DMRG, selected CI, coupled cluster, AFQMC, neural VMC), achieves the same accuracy, and\n2. the result can be checked without relying on the quantum device being right, for example through a variational upper bound with certified error or a cross-check on smaller instances of the same family.\n\n\"Chemically relevant\" excludes tuned model Hamiltonians and requires that the energy answers a chemical question (a spin gap, binding energy, reaction energy or barrier) that classical computation cannot answer with controlled error."
  stateOfArt: "- **No such demonstration as of October 2026.** Hardware results to date are classically reproducible. Robledo-Moreno et al. (Sci. Adv. 2025; IBM and RIKEN) combined quantum samples with classical diagonalisation (sample-based quantum diagonalisation) for an Fe$_4$S$_4$ cluster with a CAS(54,36) space on a 77-qubit device; energies were above those obtained by classical DMRG and selected CI. Legeza et al. (arXiv:2603.28648, preprint, 2026) report a high-accuracy classical ground-state energy for the same Fe$_4$S$_4$ CAS(54,36) model and CAS-SCF optimisation up to 89 electrons in 102 orbitals, a problem listed on the IBM and RIKEN Quantum Advantage Tracker.\n- **Quantum algorithm results (preprints).** Kirby et al. (arXiv:2603.03496, 2026) report a 49-qubit instance on an IBM Heron processor in which sample-based Krylov quantum diagonalisation succeeds where selected CI fails, on a constructed local Hamiltonian with a sparse ground state; they note that the problem is solvable by other classical solvers, so this is not a chemistry advantage. Genin et al. (arXiv:2512.13657, December 2025; arXiv:2603.08883, 2026; preprints) run the quantum-native iterative qubit coupled-cluster algorithm *on classical processors* for Ir/Pt and Ru complexes of hundreds of logical qubits and claim better accuracy than other classical methods; this is classical simulation of a quantum algorithm, not a quantum hardware result.\n- **Related hardware.** Google's Quantum Echoes experiment (Nature 2025) demonstrated verifiable beyond-classical echo measurements, with a companion preprint on molecular geometry through NMR spin echoes (arXiv:2510.19550); these target dynamics rather than ground-state energies.\n- **Fault-tolerant estimates.** Resource estimates for FeMoco-type problems have fallen by orders of magnitude (Lee et al. 2021; Low et al., arXiv:2502.15882, 2025 preprint), but classical results on the same models (Zhai et al., arXiv:2601.04621, preprint) show the goalposts moving. Lee et al. (Nat. Commun. 2023) argue that exponential advantage may not be generic."
site:
  aiReviewed: true
---

# Applications

If real, quantum chemistry on fault-tolerant machines could supply reference energies for open-shell metal catalysts, enzymes and battery materials where classical methods are unreliable. If the classical frontier keeps advancing, the practical value shifts to polynomial speedups and dynamics.

# Resolution criteria

A peer-reviewed experiment on identified hardware with a specified molecule/Hamiltonian that satisfies both numbered criteria, with the classical baseline set by an independent group under a stated compute budget, and an independent verification of the quantum result.

# Rating rationale

Difficulty 65.5: requires error-corrected hardware beyond present scale and a classical frontier that keeps moving (DMRG and coupled-cluster results on FeMoco and Fe4S4 models); somewhat harder than the verifiable-quantum-advantage benchmark (50). Application value 61.5: it would validate the main commercial case for chemistry on quantum computers. Leverage 56: it shapes funding, algorithms and classical benchmarks.

# Work mix rationale

Error-corrected hardware and compilation dominate, with moving classical baselines requiring theory.

# Verification

A peer-reviewed experiment on identified hardware for a specified molecule and Hamiltonian must satisfy both numbered criteria, with the classical baseline set by an independent group under a stated compute budget and the quantum result verified independently.

# Plain explanation

A common hope is that quantum computers will calculate molecules that ordinary computers cannot. So far this has not been shown. Today's quantum machines are small and noisy. The chemistry they have run can also be done on ordinary computers, sometimes better.

In 2025 a team used a 77-qubit machine together with a supercomputer to study an iron–sulfur cluster. Ordinary methods later got a more accurate energy for the same problem. A 2026 preprint shows a quantum algorithm beating one family of classical methods on an artificial problem, but the problem is not chemistry and other classical methods solve it.

The target here is demanding: pick a real molecule, get its energy to chemical accuracy on quantum hardware, show that the best ordinary methods cannot match it with similar effort, and show the answer can be checked.

Two things make it hard. The machines need error correction at a scale that does not exist yet. And ordinary methods keep improving, so the target keeps moving.

# Student explanation

**Definition of success.** (1) A chemically meaningful Hamiltonian (not a construct), (2) energy to 1.6 mHa, (3) a classical baseline from an independent group that cannot reach this accuracy under comparable resources, and (4) a verification path that does not rely on trusting the quantum device.

**Hardware status.** Sample-based quantum diagonalisation (IBM and RIKEN, Sci. Adv. 2025) used up to 77 qubits for Fe$_4$S$_4$ in a CAS(54,36) space, but the final energies were above those from classical DMRG and selected CI. Legeza et al. (2026 preprint) report high-accuracy classical results for the same listed target. Kirby et al. (2026 preprint) show a Krylov quantum algorithm succeeding where selected CI fails on a constructed sparse Hamiltonian with 49 qubits; the authors note other classical solvers handle it. Genin et al. (2025-26 preprints) run a quantum-native algorithm on classical GPUs for metal complexes and claim better accuracy than other classical methods, which is not a quantum-hardware result. Google's Quantum Echoes experiment (Nature 2025) is a dynamics measurement.

**Fault-tolerant outlook.** Phase estimation needs thousands of logical qubits and $10^{9}$-$10^{10}$ non-Clifford gates for molecules like FeMoco; costs have been cut by orders of magnitude but still depend on error-correction progress (see the magic-state and surface-code problems).

**Why the target moves.** Classical algorithms (DMRG with huge bond dimension, coupled cluster, selected CI, neural VMC) keep improving, and Lee et al. (2023) argued there is no evidence of generic exponential advantage.

**Things to check yourself.** Why is verification hard when the quantum answer is claimed to be classically intractable? What is the difference between an upper bound and a certified energy?
