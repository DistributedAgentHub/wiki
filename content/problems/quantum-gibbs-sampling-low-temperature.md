---
type: problem
slug: quantum-gibbs-sampling-low-temperature
title: Provably fast quantum Gibbs sampling at low constant temperature for a natural non-commuting model
entry: quantum-gibbs-sampling
status: OPEN
origin: Temme et al., 2011; Chen, Kastoryano and Gilyén, 2023
ratings:
  difficulty: 63
  applicationValue: 42
  leverage: 44
workMix:
  theory: 75
  engineering: 0
  compute: 20
  empirical: 5
verification:
  route: REVIEW
sources:
  - title: Chen, Kastoryano, Gilyén, An efficient and exact noncommutative quantum Gibbs sampler (2023)
    url: https://arxiv.org/abs/2311.09207
  - title: Rouzé, Stilck França, Alhambra, Efficient thermalization and universal quantum computing with quantum Gibbs samplers (Nat. Phys. 2026)
    url: https://doi.org/10.1038/s41567-026-03246-y
  - title: Bakshi, Liu, Moitra, Tang, High-Temperature Gibbs States are Unentangled and Efficiently Preparable (2024)
    url: https://arxiv.org/abs/2403.16850
  - title: Bergamaschi, Chen, Liu, Quantum computational advantage with constant-temperature Gibbs sampling (FOCS 2024)
    url: https://doi.org/10.1109/FOCS61266.2024.00071
  - title: Gamarnik, Kiani, Zlokapa, Slow Mixing of Quantum Gibbs Samplers (2024)
    url: https://arxiv.org/abs/2411.04300
  - title: Harrow, Mehraban, Soleimanifar, Classical algorithms, correlation decay, and complex zeros of partition functions of quantum many-body systems (STOC 2020)
    url: https://arxiv.org/abs/1910.09071
  - title: "Kastoryano, Brandão, Quantum Gibbs Samplers: the commuting case (Commun. Math. Phys. 2016)"
    url: https://arxiv.org/abs/1409.3435
  - title: Ding, Li, Lin, Efficient quantum Gibbs samplers with Kubo–Martin–Schwinger detailed balance condition (Commun. Math. Phys. 2025)
    url: https://arxiv.org/abs/2404.05998
links:
  - to: qpe-initial-state-overlap-strongly-correlated-molecules
    kind: RELATED
    note: Cooling a strongly correlated system with a Gibbs sampler at low temperature is one route to the good initial states phase estimation needs; both hinge on whether low-energy states of such systems are easy to reach.
  - to: self-correcting-quantum-memory-3d
    kind: RELATED
    note: Self-correction is slow mixing of the thermal dynamics between logical sectors; Bergamaschi, Gheissari and Liu (2025) show fast mixing within a logical sector for broad classes of such memories, so the same mixing-time tools govern both questions.
timeline:
  - date: 2023-11-15
    title: Exact noncommutative sampler
    body: Chen, Kastoryano and Gilyén constructed an efficient exactly detailed-balanced Lindbladian.
    source: https://arxiv.org/abs/2311.09207
  - date: 2024-03-19
    title: High-temperature mixing and low-temperature universality
    body: Rouzé, Stilck França and Alhambra proved fast mixing at high temperature and BQP-universality at polynomial β.
    source: https://arxiv.org/abs/2403.12691
  - date: 2024-04-23
    title: Designed constant-temperature advantage
    body: Bergamaschi, Chen and Liu proved a quantum advantage for sampling commuting Gibbs states at constant temperature.
    source: https://arxiv.org/abs/2404.14639
  - date: 2024-11-06
    title: Slow mixing examples
    body: Gamarnik, Kiani and Zlokapa proved slow mixing for some quantum Gibbs samplers at low temperature.
    source: https://arxiv.org/abs/2411.04300
explainer:
  oneLine: Prove a quantum computer quickly reaches a realistic material's low-temperature state where ordinary computers fail.
  flow:
    - Want realistic material at low temperature
    - Quantum sampler mimics a heat bath
    - Speed set by the spectral gap
    - Gap proven only when hot or designed
    - "Open: realistic model, cold, provably fast"
  glossary:
    - term: Gibbs state
      meaning: The thermal state of a quantum system at a given temperature.
      link: https://en.wikipedia.org/wiki/Boltzmann_distribution
    - term: spectral gap
      meaning: The slowest decay rate of a process; a large gap means fast settling.
      link: https://en.wikipedia.org/wiki/Spectral_gap
    - term: mixing time
      meaning: How long a random process takes to reach its steady state.
      link: https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo
    - term: sign problem
      meaning: Why classical quantum Monte Carlo fails for many fermionic and frustrated systems.
      link: https://en.wikipedia.org/wiki/Numerical_sign_problem
    - term: Hubbard model
      meaning: A simple model of electrons hopping on a lattice and repelling each other.
      link: https://en.wikipedia.org/wiki/Hubbard_model
    - term: frustrated magnet
      meaning: A magnet whose interactions cannot all be satisfied at once, as on a triangle.
      link: https://en.wikipedia.org/wiki/Geometrical_frustration
    - term: phase transition
      meaning: A sudden change of a material's state with temperature, like water freezing.
      link: https://en.wikipedia.org/wiki/Phase_transition
    - term: quantum Gibbs sampling
      meaning: Preparing thermal states with a quantum computer.
      link: /research/quantum-gibbs-sampling
  readFirst:
    - title: Numerical sign problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Numerical_sign_problem
      why: Why ordinary methods fail for these materials.
    - title: Hubbard model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hubbard_model
      why: A key target model.
site:
  aiReviewed: true
---

Let $H=\sum_j h_j$ be a geometrically local Hamiltonian on a lattice of dimension $D\ge2$ with $n$ sites, with non-commuting bounded terms, drawn from a physically motivated family (for example the frustrated Heisenberg antiferromagnet on the triangular or kagome lattice, or the Fermi–Hubbard model with a locality-preserving fermion encoding). Let $\mathcal L$ be an efficiently implementable Gibbs sampler, such as the exactly detailed-balanced Lindbladian of Chen, Kastoryano and Gilyén.

**Question:** find such a family and a constant inverse temperature $\beta$ at which (i) $\mathcal L$ provably mixes to $\rho_\beta$ in time polynomial in $n$, and (ii) no polynomial-time classical algorithm is known for sampling $\rho_\beta$ or estimating its local observables to $1/\mathrm{poly}(n)$ accuracy, in particular $\beta$ beyond the range where Gibbs states are provably separable or where cluster expansions converge.

# State of the art

**High temperature is solved, and classically easy.** Rouzé, Stilck França and Alhambra (Nat. Phys. 2026) proved polynomial mixing at sufficiently high temperature for any Hamiltonian with a Lieb–Robinson bound. Bakshi, Liu, Moitra and Tang (2024) proved that Gibbs states are separable for inverse temperature below $1/(c\,\mathfrak d)$, where $\mathfrak d$ is the interaction degree and $c$ a constant, and can be prepared with depth-one circuits and polynomial classical computation for inverse temperature below $1/(c\,\mathfrak d^2)$, and cluster expansions (Harrow, Mehraban and Soleimanifar, STOC 2020) compute high-temperature quantities classically.

**Low temperature is hard in general.** At inverse temperature polynomial in $n$, implementing these dissipative dynamics is as powerful as polynomial-time quantum computation (Rouzé et al.), and some families provably mix slowly (Gamarnik, Kiani and Zlokapa, 2024, via a quantum bottleneck argument).

**Designed advantage at constant temperature.** Bergamaschi, Chen and Liu (FOCS 2024) proved rapid mixing and classical hardness for commuting parent Hamiltonians of shallow circuits, so constant-temperature Gibbs sampling can give a quantum advantage. Their models are commuting and engineered, not natural non-commuting materials models. Commuting models in 1D or at high temperature mix fast (Kastoryano and Brandão, 2016).

**Algorithms.** Efficient exactly detailed-balanced samplers exist (Chen, Kastoryano and Gilyén, 2023; Ding, Li and Lin, 2025), so the open part is the mixing-time analysis, not the construction.

# Applications

Finite-temperature properties of correlated materials (frustrated magnets, Hubbard-model physics) that classical quantum Monte Carlo cannot reach because of the sign problem, and low-energy initial states for phase estimation. A proof would also give the first rigorous natural candidate for useful quantum advantage in simulation beyond ground states.

# Resolution criteria

A proof, accepted by experts, of a polynomial mixing-time bound (spectral gap or modified log-Sobolev inequality) for an efficiently implementable sampler on a natural non-commuting family at a constant temperature outside the known classically tractable regimes, together with an argument that classical methods are not known to work there.

# Rating rationale

Difficulty 63: efficient samplers now exist, so the remaining work is a mixing-time proof, which is known only at high temperature or for designed commuting models; comparable to the QPE initial-state problem (59.5). Application value 42: finite-temperature properties of sign-problem materials are a concrete scientific use, below the chemistry ground-state advantage problem (61.5) because thermal properties are a narrower market. Leverage 44: it decides whether Gibbs sampling is a route to useful quantum advantage in simulation.

# Work mix rationale

Mixing-time proofs are the core; numerics on small systems and comparison with classical methods support them.

# Verification

Expert review of the mixing-time proof (spectral gap or modified log-Sobolev bound) for the stated sampler and family, with the gate cost per unit of simulated time, and of the evidence that the temperature is outside known classical regimes (separability threshold, cluster-expansion convergence, sign-free quantum Monte Carlo, tensor networks). Exact numerics of the Lindbladian gap for small systems (up to about 20 qubits) are a sanity check only.

# Plain explanation

Ordinary computers predict the behaviour of materials at a given temperature with Monte Carlo methods: random moves that gradually settle into the right mix of arrangements. For many important quantum materials, such as certain magnets and models of high-temperature superconductors, these methods break down because of the sign problem.

Quantum computers can imitate nature's own cooling: let the simulated material trade energy with a simulated heat bath until it settles. Recipes for doing this efficiently now exist. The open question is speed. If settling takes a reasonable time, quantum computers could study these materials where ordinary computers cannot.

What has been proved so far falls short. At high temperatures the settling is fast, but there ordinary computers can handle the problem anyway. At very low temperatures that keep falling as the material grows, the task is as hard as any quantum computation. For specially designed toy models, fast settling plus classical hardness has been proved. The missing piece is a realistic material at a fixed low temperature: prove that the quantum cooling is fast, in a regime where ordinary methods are known to struggle.

# Student explanation

**Target state.** The Gibbs state $\rho_\beta=e^{-\beta H}/Z$ describes a system at inverse temperature $\beta=1/(k_BT)$. Local observables of $\rho_\beta$ (magnetisation, correlations) predict experiments.

**Quantum sampler.** A _Lindbladian_ $\mathcal L$ describes an open system exchanging energy with a bath; it can be designed so that $\rho_\beta$ is its unique resting state, and since 2023 such designs can be implemented efficiently using Hamiltonian simulation. Starting from any state, the evolution $e^{t\mathcal L}$ approaches $\rho_\beta$. The **mixing time** is how long that takes; it is controlled by the _spectral gap_ of $\mathcal L$, the slowest decay rate. If the gap is at least $1/\mathrm{poly}(n)$, mixing is fast.

**What is proven.**

- High temperature (small $\beta$): the gap is large for any local Hamiltonian, but the Gibbs state is also unentangled and classically samplable.
- $\beta$ growing polynomially with $n$: simulating the dynamics is as hard as any quantum computation, so no general fast classical method is expected, and mixing can be slow.
- Designed commuting Hamiltonians at constant $\beta$: fast mixing and classical hardness are both proved.

**The open case.** A natural non-commuting model, such as a frustrated Heisenberg magnet ($H=J\sum\vec S_i\cdot\vec S_j$ on a triangular or kagome lattice) or the Fermi–Hubbard model, at constant low temperature, with a proof that the gap stays at least $1/\mathrm{poly}(n)$ and evidence that classical methods fail there. Phase transitions are a danger: below them, a system can get stuck in one of several phases, which slows mixing.

**What a solution would show.** A complete answer would name the model and temperature, prove the gap bound, and give evidence (a hardness argument or failed classical methods) that the regime is classically difficult, so that the quantum speedup is real rather than only a fast quantum method for an easy problem.
