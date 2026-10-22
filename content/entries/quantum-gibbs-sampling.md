---
type: entry
slug: quantum-gibbs-sampling
title: Quantum Gibbs sampling and thermal state preparation
field: quantum-simulation
kind: ALGORITHM
status: EMERGING
summary: Quantum analogues of Markov chain Monte Carlo that prepare thermal states e^(−βH)/Z on a quantum computer; efficient samplers now exist, but fast mixing is proven only at high temperature or for special models.
reliedOn: Thermal states give the finite-temperature properties of materials and starting states for ground-state algorithms, and low-temperature Gibbs sampling is a candidate route to useful quantum advantage if its mixing can be proven fast.
dependsOn:
  - hamiltonian-simulation
  - quantum-monte-carlo
references:
  - title: Poulin, Wocjan, Sampling from the thermal quantum Gibbs state and evaluating partition functions with a quantum computer (PRL 2009)
    url: https://arxiv.org/abs/0905.2199
    kind: paper
  - title: Temme, Osborne, Vollbrecht, Poulin, Verstraete, Quantum Metropolis sampling (Nature 2011)
    url: https://doi.org/10.1038/nature09770
    kind: paper
  - title: "Kastoryano, Brandão, Quantum Gibbs Samplers: the commuting case (Commun. Math. Phys. 2016)"
    url: https://arxiv.org/abs/1409.3435
    kind: paper
  - title: Chen, Kastoryano, Brandão, Gilyén, Quantum Thermal State Preparation (2023)
    url: https://arxiv.org/abs/2303.18224
    kind: paper
  - title: Chen, Kastoryano, Gilyén, An efficient and exact noncommutative quantum Gibbs sampler (2023)
    url: https://arxiv.org/abs/2311.09207
    kind: paper
  - title: Ding, Li, Lin, Efficient quantum Gibbs samplers with Kubo–Martin–Schwinger detailed balance condition (Commun. Math. Phys. 2025)
    url: https://arxiv.org/abs/2404.05998
    kind: paper
  - title: Rouzé, Stilck França, Alhambra, Efficient thermalization and universal quantum computing with quantum Gibbs samplers (Nat. Phys. 2026)
    url: https://arxiv.org/abs/2403.12691
    kind: paper
  - title: Bakshi, Liu, Moitra, Tang, High-Temperature Gibbs States are Unentangled and Efficiently Preparable (2024)
    url: https://arxiv.org/abs/2403.16850
    kind: paper
  - title: Bergamaschi, Chen, Liu, Quantum computational advantage with constant-temperature Gibbs sampling (FOCS 2024)
    url: https://arxiv.org/abs/2404.14639
    kind: paper
  - title: Gamarnik, Kiani, Zlokapa, Slow Mixing of Quantum Gibbs Samplers (2024)
    url: https://arxiv.org/abs/2411.04300
    kind: paper
timeline:
  - date: 2009-11-18
    title: Quantum Metropolis sampling
    body: Temme et al. proposed a quantum Metropolis algorithm (Nature 2011).
    source: https://arxiv.org/abs/0911.3635
  - date: 2014-09-11
    title: Commuting Gibbs samplers
    body: Kastoryano and Brandão tied the spectral gap of commuting samplers to correlation decay.
    source: https://arxiv.org/abs/1409.3435
  - date: 2023-11-15
    title: Exact detailed-balance sampler
    body: Chen, Kastoryano and Gilyén gave an efficiently implementable exactly detailed-balanced Lindbladian.
    source: https://arxiv.org/abs/2311.09207
  - date: 2024-03-19
    title: High-temperature fast mixing
    body: Rouzé, Stilck França and Alhambra proved polynomial mixing at high temperature.
    source: https://arxiv.org/abs/2403.12691
  - date: 2024-03-25
    title: High-temperature states are separable
    body: Bakshi, Liu, Moitra and Tang showed Gibbs states above a constant temperature are unentangled and classically samplable.
    source: https://arxiv.org/abs/2403.16850
  - date: 2024-04-23
    title: Constant-temperature advantage for a designed model
    body: Bergamaschi, Chen and Liu proved a sampling advantage for commuting Hamiltonians at constant temperature.
    source: https://arxiv.org/abs/2404.14639
explainer:
  oneLine: Using a quantum computer to prepare a material's state at a given temperature, as Monte Carlo does on ordinary computers.
  flow:
    - Thermal states describe materials at temperature
    - Classical Monte Carlo hits sign problem
    - Quantum sampler mimics a heat bath
    - Cost set by how fast it settles
    - Fast settling proven only when hot
  glossary:
    - term: Gibbs state
      meaning: The thermal state e^(−βH)/Z, weighting each energy by its Boltzmann factor.
      link: https://en.wikipedia.org/wiki/Boltzmann_distribution
    - term: partition function
      meaning: The normalising sum Z of Boltzmann factors over all states.
      link: https://en.wikipedia.org/wiki/Partition_function_%28statistical_mechanics%29
    - term: Markov chain Monte Carlo
      meaning: Sampling from a distribution by a random walk that settles into it.
      link: https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo
    - term: mixing time
      meaning: How long a random process takes to settle into its steady distribution.
      link: https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo
    - term: sign problem
      meaning: Negative or complex weights that make quantum Monte Carlo averages exponentially noisy.
      link: https://en.wikipedia.org/wiki/Numerical_sign_problem
    - term: Lindbladian
      meaning: The generator of an open quantum system's evolution when it exchanges energy with an environment.
      link: https://en.wikipedia.org/wiki/Lindbladian
    - term: quantum Monte Carlo
      meaning: Classical Monte Carlo methods for quantum systems.
      link: /research/quantum-monte-carlo
  readFirst:
    - title: Markov chain Monte Carlo (Wikipedia)
      url: https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo
      why: The classical method quantum samplers imitate.
    - title: Numerical sign problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Numerical_sign_problem
      why: Why classical methods fail for many quantum materials.
site:
  published: true
  aiReviewed: true
---

## The task

Given a local Hamiltonian $H$ on $n$ qubits and an inverse temperature $\beta$, prepare the Gibbs state $\rho_\beta=e^{-\beta H}/\mathrm{Tr}\,e^{-\beta H}$ to accuracy $\varepsilon$ in trace distance, or sample measurement outcomes from it. Classically, Markov chain Monte Carlo handles Hamiltonians without a sign problem through quantum Monte Carlo, but fails for many fermionic and frustrated systems where the sign problem appears.

## Algorithms

Early quantum algorithms were either expensive in general, such as the method of Poulin and Wocjan (2009) whose cost involves the dimension divided by the partition function, or hard to analyse, such as the quantum Metropolis algorithm of Temme et al. (Nature 2011). The modern approach mimics a system coupled to a bath with a **Lindbladian** (a continuous-time quantum Markov chain) whose fixed point is $\rho_\beta$. Kastoryano and Brandão (2016) analysed commuting Hamiltonians and showed that the spectral gap is tied to decay of correlations in the Gibbs state. Chen, Kastoryano, Brandão and Gilyén (2023) gave an efficiently implementable approximate construction, and Chen, Kastoryano and Gilyén (2023) gave the first efficiently implementable Lindbladian with exact detailed balance for non-commuting Hamiltonians, a quantum analogue of Metropolis–Hastings; its cost is Hamiltonian simulation for time proportional to the mixing time times $\beta$, up to polylogarithmic factors. Ding, Li and Lin (2025) generalised the construction through the Kubo–Martin–Schwinger detailed-balance condition.

## What is known about mixing

The cost of all these samplers is the **mixing time**. Rouzé, Stilck França and Alhambra (Nat. Phys. 2026) proved polynomial mixing at high enough temperature for any Hamiltonian with a Lieb–Robinson bound, and showed that at inverse temperatures growing polynomially with system size the dynamics can encode any polynomial-time quantum computation. At high temperature, however, quantum computers are not needed: Bakshi, Liu, Moitra and Tang (2024) proved that Gibbs states of local Hamiltonians are unentangled above a constant temperature and can be sampled with depth-one circuits plus classical computation, and cluster-expansion methods (Harrow, Mehraban and Soleimanifar, STOC 2020) compute high-temperature partition functions classically. In the other direction, Bergamaschi, Chen and Liu (FOCS 2024) designed commuting Hamiltonians whose Gibbs states at constant temperature mix rapidly yet are classically hard to sample, a quantum advantage for a designed model. Slow mixing at low temperature has been proven for some families (Gamarnik, Kiani and Zlokapa, 2024).

## The gap

What is missing is a proof of fast mixing at low constant temperature for a physically motivated, non-commuting model, in a regime where classical methods fail. That is the open problem attached to this entry.

# Plain explanation

A cup of coffee left on the table settles at room temperature. Physicists describe such settled, or 'thermal', states with a formula that weights each possible arrangement by its energy and the temperature. Knowing a material's thermal state tells you whether it is a magnet, a superconductor or a plain metal at that temperature.

Ordinary computers find thermal states with Monte Carlo methods: random moves that are accepted or rejected so that, over time, the system visits arrangements with the right frequencies. For many quantum materials this fails, because of the 'sign problem', where the weights stop behaving like probabilities.

Quantum Gibbs samplers imitate nature instead: they let a simulated system exchange energy with a simulated heat bath until it settles. Since 2023 there are efficient recipes for doing this. What nobody has shown is that the settling is fast for realistic materials at low temperatures, where the interesting physics lives. At high temperatures it is fast, but there ordinary computers also cope. Proving fast settling at low temperature would make this a strong candidate for useful quantum advantage.

# Student explanation

**Thermal states.** At temperature $T$, a quantum system with Hamiltonian $H$ is described by the Gibbs state $\rho_\beta=e^{-\beta H}/Z$, with $\beta=1/(k_BT)$ and $Z=\mathrm{Tr}\,e^{-\beta H}$ the partition function. It weights each energy level $E$ by the Boltzmann factor $e^{-\beta E}$, as in first-year thermodynamics. Low temperature (large $\beta$) favours low energies.

**Classical Monte Carlo.** The Metropolis algorithm proposes a random change and accepts it with probability $\min(1,e^{-\beta\Delta E})$; after enough steps (the **mixing time**) the configurations follow the Boltzmann distribution. Quantum Monte Carlo extends this to some quantum systems, but for many fermionic and frustrated systems some weights become negative (the sign problem) and the averages need exponentially many samples.

**Quantum samplers.** A quantum computer can run a _Lindbladian_, an equation for an open system that loses and gains energy from a bath, designed so its only resting point is $\rho_\beta$. The 2023 construction of Chen, Kastoryano and Gilyén is efficient to implement: its cost is Hamiltonian simulation for a time proportional to the mixing time times $\beta$.

**What is proven.** At high temperature the mixing is fast, but there Gibbs states are also unentangled and classically samplable. At temperatures that fall as the system grows, the problem is as hard as any quantum computation. For specially designed commuting models, constant-temperature sampling is fast and classically hard. The missing case is realistic materials models at low but fixed temperature.

**Detailed balance.** Classical samplers are designed so that, in equilibrium, the flow from state $a$ to $b$ equals the flow back; this guarantees the Boltzmann distribution is a resting point. Quantum samplers use a quantum version of the same condition, which is hard to satisfy exactly when the Hamiltonian's terms do not commute, and this was the main obstacle solved in 2023.
