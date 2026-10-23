---
type: entry
slug: quantum-computing-for-chemistry
title: Quantum computing for chemistry
field: computational-chemistry
kind: FRONTIER
status: EMERGING
summary: Phase estimation, variational and sample-based algorithms for molecular energies, and resource estimates for fault-tolerant machines, set against moving classical baselines.
reliedOn: Chemistry is the most-cited application of fault-tolerant quantum computers; the claim of advantage depends on resource estimates, state preparation and the strength of classical competitors.
dependsOn:
  - hamiltonian-simulation
  - quantum-algorithms
  - quantum-phase-estimation
  - strongly-correlated-multireference-methods
references:
  - title: A. Aspuru-Guzik et al., Simulated quantum computation of molecular energies, Science (2005)
    url: https://doi.org/10.1126/science.1113479
    kind: paper
  - title: M. Reiher et al., Elucidating reaction mechanisms on quantum computers (arXiv:1605.03590)
    url: https://arxiv.org/abs/1605.03590
    kind: paper
  - title: J. Lee et al., Even more efficient quantum computations of chemistry through tensor hypercontraction (2021)
    url: https://doi.org/10.1103/PRXQuantum.2.030305
    kind: paper
  - title: S. McArdle et al., Quantum computational chemistry, Rev. Mod. Phys. (2020)
    url: https://doi.org/10.1103/revmodphys.92.015003
    kind: paper
  - title: S. Lee et al., Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry (2023)
    url: https://doi.org/10.1038/s41467-023-37587-6
    kind: paper
  - title: J. Robledo-Moreno et al., Chemistry beyond the scale of exact diagonalization on a quantum-centric supercomputer, Sci. Adv. (2025)
    url: https://doi.org/10.1126/sciadv.adu9991
    kind: paper
timeline:
  - date: 2005-09-09
    title: First quantum chemistry algorithm
    body: Aspuru-Guzik et al. propose phase estimation for molecular energies (date given as approximate).
    source: https://doi.org/10.1126/science.1113479
  - date: 2016-05-11
    title: FeMoco resource estimate
    body: Reiher et al. estimate gate counts for the nitrogenase cofactor (arXiv date).
    source: https://arxiv.org/abs/1605.03590
  - date: 2023-04-05
    title: Evidence for advantage questioned
    body: Lee et al. publish their analysis of state preparation and classical heuristics (date given as approximate).
    source: https://doi.org/10.1038/s41467-023-37587-6
explainer:
  oneLine: Using quantum computers to calculate molecular energies, and the debate about when they would beat ordinary computers.
  flow:
    - Molecules are quantum, hard to simulate
    - Map orbitals to qubits
    - Phase estimation reads out the energy
    - Needs error-corrected machines
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
    - term: overlap
      meaning: A number measuring how much one quantum state resembles another; 1 means identical, 0 means unrelated.
      link: https://en.wikipedia.org/wiki/Wave_function
    - term: active space
      meaning: A hand-picked group of electrons and orbitals treated with extra care because their behaviour is the hardest to get right.
      link: /research/strongly-correlated-multireference-methods
    - term: strong correlation
      meaning: A situation where many electron arrangements matter at once, so simple one-configuration pictures fail.
      link: /research/strongly-correlated-multireference-methods
    - term: chemical accuracy
      meaning: An error of about 1 kcal/mol (4 kJ/mol), roughly what is needed to predict reaction outcomes reliably.
      link: /research/coupled-cluster-theory
    - term: nitrogenase
      meaning: The enzyme bacteria use to turn nitrogen gas from air into ammonia at ordinary temperatures.
      link: https://en.wikipedia.org/wiki/Nitrogenase
  readFirst:
    - title: Quantum computational chemistry (McArdle et al., Rev. Mod. Phys.)
      url: https://doi.org/10.1103/revmodphys.92.015003
      why: The standard review of algorithms for chemistry.
    - title: Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry (open access)
      url: https://doi.org/10.1038/s41467-023-37587-6
      why: A careful look at what is and is not known.
    - title: Quantum phase estimation algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_phase_estimation_algorithm
      why: Background on the key algorithm.
raw:
  body: "## What it is\n\nThe electronic Hamiltonian in second quantisation is $\\hat H=\\sum_{pq}h_{pq}a_p^\\dagger a_q+\\tfrac12\\sum_{pqrs}g_{pqrs}a_p^\\dagger a_q^\\dagger a_s a_r$. A quantum computer encodes spin orbitals in qubits (Jordan–Wigner, Bravyi–Kitaev) and estimates energies.\n\n## Algorithms\n\n- **Quantum phase estimation (QPE)** with Trotterised or qubitised block encodings: cost scales roughly as $\\lambda/\\epsilon$ for Hamiltonian 1-norm $\\lambda$ and target precision $\\epsilon$; needs error-corrected hardware. Tensor hypercontraction and double factorisation cut $\\lambda$ and gate counts.\n- **Variational quantum eigensolver (VQE)**: parametrised short circuits plus classical optimisation; suffers from measurement cost and barren plateaus.\n- **Sample-based quantum diagonalisation (SQD) / Krylov**: use hardware samples to select determinants for classical diagonalisation.\n- **Quantum dynamics and spectroscopy** simulation, where advantage arguments can be cleaner than for ground states.\n\n## Resource estimates\n\nReiher et al. (2017) estimated that the FeMo-cofactor ground state needs of order $10^{14}$ T gates for a 54-electron, 54-orbital model with Trotter methods; tensor-hypercontraction QPE (Lee et al., 2021) reduced this by several orders of magnitude to roughly $10^{10}$ Toffoli gates with a few thousand logical qubits; spectrum amplification (Low et al., preprint 2025) cuts it further.\n\n## What is not settled\n\nWhether ground-state chemistry offers *exponential* advantage depends on initial-state overlap; Lee et al. (2023) argued the evidence for generic exponential advantage is weak, and classical methods (DMRG, SHCI, coupled cluster) continue to solve benchmark instances once thought out of reach.\n\n## Why it is foundational\n\nIt frames which chemistry problems are worth quantum hardware, and sets a moving benchmark for classical methods.\n\n## Worth understanding\n\n- Qubitisation and the role of the Hamiltonian 1-norm\n- Logical vs physical qubit counts (see the quantum error-correction entry)\n- Why overlap with the true ground state controls QPE success\n\n## Current frontier\n\nWork now concentrates on lowering fault-tolerant costs (better block encodings, spectrum amplification, lower-overhead magic-state production), on state-preparation methods, and on hybrid quantum-classical workflows such as sample-based diagonalisation. Parallel classical work (DMRG at very large bond dimension, high-order coupled cluster, neural VMC) keeps raising the bar any claimed advantage must clear."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Molecules obey quantum mechanics, and simulating quantum systems on ordinary computers gets very hard as they grow. In the early 1980s the physicist Richard Feynman suggested that a quantum computer might simulate them naturally. Chemistry is therefore the most cited application of such machines.

The first algorithms read out the energy of a molecule using a trick called phase estimation. They need machines with many thousands of reliable qubits, which do not yet exist. Today's noisy machines can run only small, short programs, so researchers use them together with ordinary computers, for example to pick the most important arrangements of electrons.

Meanwhile, ordinary computers keep improving. Tasks once thought to be out of reach for them, such as the iron–sulfur clusters of enzymes, have been tackled with clever classical methods. So whether, and where, quantum computers will give a real edge for chemistry remains unsettled.

A key question is whether a quantum computer can easily prepare a decent first guess of the molecule's state. If it can, an ordinary computer might also manage.

# Student explanation

**Encoding.** The electronic Hamiltonian is written in second quantisation, $\hat H=\sum_{pq}h_{pq}a_p^\dagger a_q+\tfrac12\sum_{pqrs}g_{pqrs}a_p^\dagger a_q^\dagger a_s a_r$, where $a_p^\dagger$ creates an electron in orbital $p$. Each spin orbital is mapped to a qubit (Jordan–Wigner or Bravyi–Kitaev), so $M$ orbitals need about $2M$ qubits.

**Quantum phase estimation (QPE).** If the quantum computer starts in a state $|\phi\rangle$ with overlap $\gamma=|\langle\Psi_0|\phi\rangle|^2$ with the ground state, QPE returns the ground-state energy to precision $\epsilon$ with probability $\gamma$, using about $\lambda/\epsilon$ applications of a block encoding of $\hat H$, where $\lambda$ is the one-norm of the Hamiltonian coefficients. Techniques such as double factorisation and tensor hypercontraction lower $\lambda$ and the gate count. Running this reliably requires error-corrected logical qubits, covered in the quantum error-correction entry.

**Near-term methods.** The variational quantum eigensolver prepares trial states with short parametrised circuits and optimises them classically; it suffers from measurement cost and flat optimisation landscapes. Sample-based quantum diagonalisation uses hardware samples to pick determinants and then diagonalises classically.

**Resource estimates.** For the nitrogenase cofactor, estimates fell from about $10^{14}$ gates (2017) to roughly $10^{10}$ Toffoli gates with thousands of logical qubits (2021), and further in 2025 preprints.

**Open questions.** Does a family of molecules exist where quantum is exponentially faster? Lee et al. (2023) found no evidence for generic exponential advantage. Classical preprints in 2026 report chemical-accuracy energies for the standard FeMoco model.

**Things to check yourself.** Why does overlap matter? What does a logical qubit cost in physical qubits?
