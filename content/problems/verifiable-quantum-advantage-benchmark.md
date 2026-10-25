---
type: problem
slug: verifiable-quantum-advantage-benchmark
title: An efficiently verifiable quantum advantage that survives a public classical-spoofing challenge for 12 months
entry: quantum-algorithms
status: IN_PROGRESS
origin: Quantum-supremacy proposals (Aaronson–Arkhipov 2011; Boixo et al. 2018); Google (2019); verifiable line from Mahadev (2018) and Yamakawa–Zhandry (2022)
ratings:
  difficulty: 50
  applicationValue: 62
  leverage: 60
workMix:
  theory: 15
  engineering: 40
  compute: 15
  empirical: 30
verification:
  route: REPRODUCTION
sources:
  - title: Google Quantum AI, Observation of constructive interference at the edge of quantum ergodicity (Nature 2025)
    url: https://doi.org/10.1038/s41586-025-09526-6
  - title: Google Research, A verifiable quantum advantage (blog, 2025-10-22)
    url: https://research.google/blog/a-verifiable-quantum-advantage/
  - title: Kremer, Dupuis, Efficient Classical Simulation of Heuristic Peaked Quantum Circuits (preprint, 2026)
    url: https://arxiv.org/abs/2604.21908
  - title: Tindall et al., Dynamics of disordered quantum systems with two- and three-dimensional tensor networks (Science 2026)
    url: https://doi.org/10.1126/science.adx2728
  - title: Yamakawa, Zhandry, Verifiable Quantum Advantage without Structure (J. ACM 2024)
    url: https://doi.org/10.1145/3658665
  - title: Jordan et al., Optimization by decoded quantum interferometry (Nature 2025)
    url: https://doi.org/10.1038/s41586-025-09527-5
  - title: Kramer et al., A provable quantum advantage for approximate optimization via decoded quantum interferometry (preprint, 2026)
    url: https://arxiv.org/abs/2610.02145
  - title: Martiel et al., Sampling hard circuits with verifiably high fidelity (preprint, 2026)
    url: https://arxiv.org/abs/2607.25941
  - title: "Mahadev: Classical verification of quantum computations"
    url: https://arxiv.org/abs/1804.01082
links:
  - to: aaronson-ambainis-conjecture
    kind: RELATED
    note: "Both concern where quantum speedups can exist: the Aaronson–Ambainis conjecture, if true, rules out large query speedups on unstructured total Boolean functions, which is why advantage proposals use structured tasks."
timeline:
  - date: 2019-10-23
    title: Random circuit sampling on 53 qubits
    body: Google reported a sampling experiment estimated beyond classical reach; later tensor-network simulations narrowed the gap.
    source: https://doi.org/10.1038/s41586-019-1666-5
  - date: 2025-03-26
    title: Certified randomness on a trapped-ion processor
    body: Liu et al. certified randomness with supercomputer-scale classical verification.
    source: https://doi.org/10.1038/s41586-025-08737-1
  - date: 2025-10-22
    title: Quantum Echoes OTOC measurement
    body: Google reported a measurement estimated 13,000 times faster than a supercomputer, verifiable on other quantum devices.
    source: https://doi.org/10.1038/s41586-025-09526-6
  - date: 2026-05-21
    title: Classical simulation of D-Wave spin-glass dynamics
    body: Tindall et al. matched the annealing claim with belief-propagation tensor networks.
    source: https://doi.org/10.1126/science.adx2728
explainer:
  oneLine: Show a quantum computer doing something outsiders can check and no ordinary computer can fake, for a year.
  flow:
    - Quantum claims keep being matched
    - Need a task outsiders can verify
    - Need strong evidence ordinary methods fail
    - Publish challenge, wait twelve months
    - "Open: no entry meets all three"
  glossary:
    - term: quantum advantage
      meaning: A task where a quantum computer beats every known ordinary-computer method.
      link: https://en.wikipedia.org/wiki/Quantum_supremacy
    - term: random circuit sampling
      meaning: A benchmark where a quantum chip runs a random program and its output pattern is hard for ordinary computers to mimic.
      link: https://en.wikipedia.org/wiki/Quantum_supremacy
    - term: tensor network
      meaning: A way of storing a huge quantum state by breaking it into small connected pieces, used for classical simulation.
      link: https://en.wikipedia.org/wiki/Tensor_network
    - term: fidelity
      meaning: A number between 0 and 1 saying how close the actual quantum state is to the intended one.
      link: https://en.wikipedia.org/wiki/Fidelity_of_quantum_states
    - term: qubit
      meaning: The quantum version of a bit, which can hold a blend of 0 and 1.
      link: https://en.wikipedia.org/wiki/Qubit
    - term: spoofing
      meaning: Producing output that passes the test without actually doing the intended computation.
      link: https://en.wikipedia.org/wiki/Quantum_supremacy
    - term: quantum error correction
      meaning: Spreading information across many physical qubits so errors can be detected and repaired.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: classical algorithm
      meaning: An ordinary algorithm run on a conventional computer.
      link: https://en.wikipedia.org/wiki/Quantum_algorithm
    - term: quantum algorithms
      meaning: Methods designed for quantum computers and the evidence about their speedups.
      link: /research/quantum-algorithms
    - term: core-year
      meaning: The work one processor core does running for a full year; a million core-years is a very large supercomputer budget.
      link: https://en.wikipedia.org/wiki/Supercomputer
    - term: Clifford circuit
      meaning: A quantum circuit built from a restricted gate set that ordinary computers can simulate efficiently; adding "T gates" makes it hard to simulate.
      link: https://en.wikipedia.org/wiki/Clifford_gates
  readFirst:
    - title: Quantum supremacy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_supremacy
      why: History of the claims and the classical rebuttals.
    - title: Quantum computing (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_computing
      why: Background on qubits, noise and error correction.
    - title: Quantum algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_algorithm
      why: Which tasks are believed to be quantum-advantaged and why.
raw:
  body: "Define a benchmark task family $\\{T_n\\}$ with a classically checkable output (the verifier runs in time polynomial in $n$ on a laptop, or accepts a cryptographic proof). A claim of *verifiable quantum advantage* at size $n_0$ consists of (i) a quantum experiment that passes verification with a fidelity bound certified without exponential classical simulation, (ii) a stated classical-hardness assumption or classical cost estimate for the best-known algorithms, and (iii) an open challenge: the instances and a classical-spoofing prize are published and no classical algorithm matches the experiment's certified score at size $n_0$ within 12 months. *Is there a task and device for which all three hold at a size where the best-known classical cost exceeds $10^{6}$ core-years?* The target excludes tasks whose classical hardness rests only on tensor-network bond-dimension estimates, since those have repeatedly been overturned by better contraction heuristics."
site:
  aiReviewed: true
---

# State of the art

**Sampling and benchmark experiments.** Google's 2019 random circuit sampling experiment (53 qubits; Nature 2019), whose classical cost Google estimated at about 10,000 years on a supercomputer, was followed by tensor-network simulations of the same circuits, such as Pan, Chen and Zhang (PRL 2022). IBM's 2023 "utility" experiment on a 127-qubit processor (Nature 2023) was classically reproduced by Tindall et al. (PRX Quantum 2024) and Begušić and Chan (arXiv 2023), among others. D-Wave's March 2025 quantum-annealing simulation result (King et al., Science 2025) was challenged by a Flatiron Institute belief-propagation tensor-network simulation of the same spin-glass dynamics (Tindall et al., Science, 21 May 2026). In October 2025 Google reported "Quantum Echoes", an out-of-time-order correlator measurement on its Willow chip (Nature, 22 October 2025), estimating that the classical computation would take about 13,000 times longer on a supercomputer, and calling the result verifiable in the weaker sense that the measured expectation values can be reproduced on other quantum devices; the authors report that a related NMR demonstration is not yet beyond classical. Gharibyan et al. (BlueQubit and collaborators) ran "peaked circuit" instances on Quantinuum's 56-qubit H2 trapped-ion device and estimated a classical cost of years (arXiv, October 2025, preprint); Kremer and Dupuis (arXiv April 2026, preprint) report that the largest instance can be contracted classically in about an hour on one GPU. Martiel et al. (IBM and collaborators; arXiv July 2026, preprint) sampled a 64-qubit, depth-73 Clifford circuit doped with 314 T gates, encoded in error-detecting codes, and certified a fidelity lower bound of 0.349 at 95% confidence under device-dependent noise assumptions; it is not refereed and has not been independently challenged.

**Provable but not yet useful.** Yamakawa and Zhandry (J. ACM 2024) proved a verifiable quantum-classical separation relative to a random oracle. Liu et al. (Nature, March 2025) generated certified randomness on a trapped-ion processor; certification relied on supercomputer-scale classical verification and on a complexity assumption against classical spoofing. Decoded quantum interferometry (Nature 2025) targets optimisation; Parekh (arXiv 2025; TQC 2026) showed that the MaxCut instances on which it attains a nontrivial asymptotic guarantee are solvable exactly in classical polynomial time, and Kramer et al. (arXiv, 1 October 2026, preprint) claim a provable gap in approximation ratio for a variant of the underlying problem in an oracle model.

**Useful, provable, but needs fault tolerance.** Shor's algorithm is both verifiable and useful but needs error-corrected machines far beyond current devices. For search problems, Brehm and Weggemans (Quantum 2026) found that fault-tolerant speedups of quantum backtracking and Grover search for $k$-SAT largely vanish, even asymptotically, once minimal structure is introduced, when compared against the 2023 SAT Competition main-track winner.

Overall, no demonstration meets all three conditions today. A single-author essay (Hagar, arXiv July 2026, preprint) argues that, with one exception, every flagship NISQ-era advantage demonstration was classically reproduced, shown to rest on classically tractable structure, or closed by a simulability theorem within eighteen months; it is an interpretive argument, not a consensus statement.

# Applications

A confirmed verifiable advantage would be the first experimental evidence that a quantum device does something classical computers cannot reproduce at scale, and would calibrate resource estimates for error-corrected machines. It has no direct commercial use unless the task is itself useful (certified randomness is the nearest candidate); this problem requires verifiability and robustness to spoofing, not usefulness.

# Resolution criteria

A published experiment meeting (i)–(iii) above, followed by a public challenge window of 12 months in which no classical method matches the certified score, with the classical-hardness assumption stated explicitly. Resolved negatively for a given task if a classical algorithm reproduces the certified score at the claimed size.

# Rating rationale

Open because every claimed advantage so far has been matched classically or rests on assumptions not yet stress-tested, but a path (sampling or proof-verified tasks on larger devices) is visible, so difficulty is mid-band, below fault-tolerant QEC. Application value is moderate-high as a milestone for the quantum industry, though not a direct use. Leverage reflects its gating role for quantum-algorithms programmes.

# Work mix rationale

The theory of what to verify is partly settled; the remaining work is devices, benchmarks and classical-simulation attacks.

# Verification

Resolution needs a published experiment on named hardware whose output is classically verifiable, followed by a 12-month public challenge in which no classical method matches the certified score. The spec must state the task, the certified-score metric, the classical-hardness assumption and the problem sizes. Anyone can rerun the classical attack on the released instances, and a negative result is recorded if a classical algorithm reproduces the score at the claimed size.

# Plain explanation

Several companies have announced that their quantum computers did a task that would take ordinary supercomputers thousands of years. Several times, other researchers then showed that cleverer ordinary methods could do the same task much faster. So claims of quantum advantage have a track record of being narrowed.

This problem asks for something sturdier. It needs a task where three things hold. First, the answer can be checked by anyone with a laptop, without having to rerun the quantum experiment. Second, there is a clear argument or estimate for why the best known ordinary methods would need a huge amount of computing, over a million core-years. Third, the instances and a prize are published as an open challenge, and no one matches the result for twelve months.

The reason it is hard is partly physics and partly mathematics. Today's quantum chips are noisy, so the result must stay valid despite errors. And proving that no ordinary algorithm can do the task is itself an open research problem: the hardness arguments for many tasks rely on estimates that later improved algorithms overturned.

A confirmed result would be the first solid evidence of a quantum device doing something beyond reach of ordinary computers at scale. It would likely have no direct commercial use. It would mostly help judge how large the future machines need to be.

# Student explanation

**What is being asked.** Define a family of tasks $\{T_n\}$ whose output can be verified classically in polynomial time (or with a cryptographic proof). A claim of **verifiable quantum advantage** at size $n_0$ consists of (i) a quantum experiment that passes verification, with a fidelity bound certified without exponential classical simulation; (ii) a stated classical hardness assumption or cost estimate for the best known algorithms; and (iii) an open challenge: instances and a classical-spoofing prize are published, and no classical algorithm matches the device's certified score for 12 months. The problem asks for such a task and device at a size where the best known classical cost exceeds $10^6$ core-years. It excludes tasks whose classical hardness rests only on tensor-network bond-dimension estimates, since those have repeatedly been overturned by better contraction heuristics.

**Track record.**

- Google's 2019 random circuit sampling experiment (53 qubits) was estimated at about 10,000 years for a supercomputer; tensor-network simulations of the same circuits followed.
- IBM's 2023 "utility" experiment on 127 qubits was reproduced classically by several groups.
- D-Wave's 2025 annealing simulation result was challenged by a belief-propagation tensor-network simulation in 2026.
- Google's 2025 "Quantum Echoes" measurement on its Willow chip was estimated to be about 13,000 times faster than a supercomputer; its verifiability is in the weaker sense that other quantum devices can reproduce the values.
- Peaked-circuit instances on a trapped-ion device (a preprint) were then reported classically contractible in about an hour on one GPU for the largest instance (another preprint).
- A 2026 IBM-led preprint sampled a 64-qubit Clifford circuit doped with T gates, encoded in error-detecting codes, and certified a fidelity lower bound under assumptions about device noise; it is unrefereed.

The pattern is that tensor-network and related methods repeatedly caught up with the claims.

**Why it is hard.** Verification and hardness pull in different directions: tasks with efficient verification tend to be structured, and structure can help classical algorithms. Tasks with solid complexity-theoretic hardness (such as certain sampling problems) are hard to verify, and noise in real hardware weakens the hardness arguments.

**Why it matters.** A confirmed verifiable advantage would be the first experimental evidence that a quantum device does something classical computers cannot reproduce at scale. It would calibrate resource estimates for error-corrected machines. It has no direct commercial use unless the task is itself useful.

This is partly an engineering and partly a theory problem, and the resolution criteria are deliberately demanding.
