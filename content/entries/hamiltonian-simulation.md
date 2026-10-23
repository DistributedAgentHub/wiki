---
type: entry
slug: hamiltonian-simulation
title: "Hamiltonian simulation: product formulas, LCU and qubitization"
field: quantum-simulation
kind: ALGORITHM
status: ACTIVE
summary: Algorithms that implement the time evolution e^(−iHt) of a quantum system on a quantum computer, from Lloyd's product formulas to qubitization and quantum signal processing with optimal query cost.
reliedOn: Simulating physics and chemistry is the most natural use of a quantum computer, and Hamiltonian simulation is also the subroutine inside phase estimation, linear-system solvers and Gibbs samplers.
dependsOn:
  - quantum-algorithms
references:
  - title: Lloyd, Universal Quantum Simulators (Science 1996)
    url: https://doi.org/10.1126/science.273.5278.1073
    kind: paper
  - title: Berry, Ahokas, Cleve, Sanders, Efficient quantum algorithms for simulating sparse Hamiltonians (Commun. Math. Phys. 2007)
    url: https://arxiv.org/abs/quant-ph/0508139
    kind: paper
  - title: Childs, Wiebe, Hamiltonian Simulation Using Linear Combinations of Unitary Operations (2012)
    url: https://arxiv.org/abs/1202.5822
    kind: paper
  - title: Berry, Childs, Cleve, Kothari, Somma, Simulating Hamiltonian dynamics with a truncated Taylor series (PRL 2015)
    url: https://arxiv.org/abs/1412.4687
    kind: paper
  - title: Low, Chuang, Optimal Hamiltonian Simulation by Quantum Signal Processing (PRL 2017)
    url: https://doi.org/10.1103/PhysRevLett.118.010501
    kind: paper
  - title: Low, Chuang, Hamiltonian Simulation by Qubitization (Quantum 2019)
    url: https://doi.org/10.22331/q-2019-07-12-163
    kind: paper
  - title: Gilyén, Su, Low, Wiebe, Quantum singular value transformation and beyond (STOC 2019)
    url: https://arxiv.org/abs/1806.01838
    kind: paper
  - title: Childs, Su, Tran, Wiebe, Zhu, A Theory of Trotter Error (PRX 2021)
    url: https://arxiv.org/abs/1912.08854
    kind: paper
  - title: Haah, Hastings, Kothari, Low, Quantum algorithm for simulating real time evolution of lattice Hamiltonians (FOCS 2018)
    url: https://arxiv.org/abs/1801.03922
    kind: paper
  - title: Childs, Maslov, Nam, Ross, Su, Toward the first quantum simulation with quantum speedup (PNAS 2018)
    url: https://arxiv.org/abs/1711.10980
    kind: paper
  - title: Babbush et al., Encoding Electronic Spectra in Quantum Circuits with Linear T Complexity (PRX 2018)
    url: https://arxiv.org/abs/1805.03662
    kind: paper
timeline:
  - date: 1996-08-23
    title: Universal quantum simulators
    body: Lloyd showed local Hamiltonians can be simulated efficiently with product formulas.
    source: https://doi.org/10.1126/science.273.5278.1073
  - date: 2014-12-15
    title: Truncated Taylor series
    body: Berry, Childs, Cleve, Kothari and Somma reached cost logarithmic in the inverse error.
    source: https://arxiv.org/abs/1412.4687
  - date: 2016-06-08
    title: Quantum signal processing
    body: Low and Chuang gave query-optimal sparse Hamiltonian simulation.
    source: https://arxiv.org/abs/1606.02685
  - date: 2016-10-20
    title: Qubitization
    body: Low and Chuang gave optimal simulation for block-encoded Hamiltonians.
    source: https://arxiv.org/abs/1610.06546
  - date: 2018-06-05
    title: Quantum singular value transformation
    body: Gilyén, Su, Low and Wiebe unified Hamiltonian simulation and other algorithms.
    source: https://arxiv.org/abs/1806.01838
  - date: 2019-12-18
    title: Theory of Trotter error
    body: Childs et al. gave commutator-scaling error bounds for product formulas.
    source: https://arxiv.org/abs/1912.08854
explainer:
  oneLine: "Turning how a quantum system changes over time into a quantum circuit: the most natural quantum computing task."
  flow:
    - Quantum systems overwhelm classical memory
    - Write energy as simple pieces
    - Apply pieces in short time slices
    - Smarter polynomial methods reach optimum
    - Basis for chemistry and materials
  glossary:
    - term: Hamiltonian
      meaning: The operator that gives a system's energy and drives its evolution.
      link: https://en.wikipedia.org/wiki/Hamiltonian_%28quantum_mechanics%29
    - term: Schrödinger equation
      meaning: The equation describing how a quantum state changes in time.
      link: https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation
    - term: commutator
      meaning: AB − BA; zero when the order of two operations does not matter.
      link: https://en.wikipedia.org/wiki/Commutator
    - term: Trotter formula
      meaning: Approximating the evolution under a sum by alternating short evolutions under each piece.
      link: https://en.wikipedia.org/wiki/Lie_product_formula
    - term: block encoding
      meaning: Placing a matrix inside a corner of a larger unitary so a quantum computer can apply it.
      link: https://en.wikipedia.org/wiki/Hamiltonian_simulation
    - term: qubitization
      meaning: A method that turns a block-encoded Hamiltonian into a walk whose phases encode its energies.
      link: https://en.wikipedia.org/wiki/Hamiltonian_simulation
    - term: phase estimation
      meaning: A routine that reads out energies from time evolution.
      link: /research/quantum-phase-estimation
  readFirst:
    - title: Hamiltonian simulation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hamiltonian_simulation
      why: Overview of product formulas and later methods.
    - title: Quantum simulator (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_simulator
      why: Feynman's idea and the analog and digital approaches.
raw:
  body: "## The task\n\nGiven a Hamiltonian $H$ on $n$ qubits (a sum of local terms, or a sparse matrix with oracle access to its entries), a time $t$ and an accuracy $\\varepsilon$, implement a circuit within $\\varepsilon$ of $e^{-iHt}$. Feynman (1982) proposed using quantum devices to simulate quantum physics, and Lloyd (Science 1996) showed that local Hamiltonians can be simulated efficiently. The problem is BQP-complete, since any quantum circuit can be encoded as the evolution of a suitable Hamiltonian. The *no-fast-forwarding* theorem (Berry et al., 2007) shows that for general Hamiltonians the cost must grow at least linearly in $t$.\n\n## Product formulas\n\nWrite $H=\\sum_j H_j$ with each $e^{-iH_j\\tau}$ easy to implement. The first-order Lie–Trotter formula approximates $e^{-iHt}$ by $\\big(\\prod_j e^{-iH_jt/r}\\big)^r$, with error governed by the commutators $[H_j,H_k]$ and shrinking as $1/r$; Suzuki's higher-order formulas of order $2k$ do better. Childs, Su, Tran, Wiebe and Zhu (PRX 2021) gave a theory of Trotter error in terms of nested commutators that is close to tight in examples. For geometrically local lattice Hamiltonians, Haah, Hastings, Kothari and Low (FOCS 2018) gave an algorithm with $O(nT\\,\\mathrm{polylog}(nT/\\varepsilon))$ gates and proved a matching $\\tilde\\Omega(nT)$ lower bound. Product formulas need no ancilla qubits, and in practice they are often competitive for lattice models (Childs, Maslov, Nam, Ross and Su, PNAS 2018).\n\n## Beyond product formulas\n\nBerry, Ahokas, Cleve and Sanders (2007) simulated sparse Hamiltonians with oracle access. Childs and Wiebe (2012) introduced the **linear combination of unitaries** (LCU) method, and Berry, Childs, Cleve, Kothari and Somma (PRL 2015) used a truncated Taylor series to reach cost logarithmic in $1/\\varepsilon$. Low and Chuang's **quantum signal processing** (PRL 2017) achieved query complexity $O\\big(td\\|H\\|_{\\max}+\\log(1/\\varepsilon)/\\log\\log(1/\\varepsilon)\\big)$ for $d$-sparse $H$, matching lower bounds in all parameters, and **qubitization** (Quantum 2019) achieved $O(\\lambda t+\\log(1/\\varepsilon))$ queries for a Hamiltonian given as a block-encoding with normalisation $\\lambda$, using at most two extra qubits. The **quantum singular value transformation** (Gilyén, Su, Low and Wiebe, STOC 2019) generalises these methods to polynomial transformations of block-encoded matrices and unifies much of quantum algorithm design.\n\n## Use in chemistry and materials\n\nFor electronic structure, qubitization combined with compressed representations of the Hamiltonian is the basis of most fault-tolerant cost estimates: Babbush et al. (PRX 2018) encoded electronic spectra with linear T complexity, and Lee et al. (PRX Quantum 2021) used tensor hypercontraction. Product formulas remain attractive for lattice models because they preserve locality.\n\n## Thermal states\n\nSimulating dynamics is the building block for preparing thermal states with quantum Gibbs samplers, which run a dissipative evolution whose steady state is $e^{-\\beta H}/Z$ and call Hamiltonian simulation as a subroutine."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Molecules, magnets and new materials obey quantum mechanics, and predicting how they behave means following how their quantum state changes over time. For more than a few dozen particles, ordinary computers run out of memory, because the description grows exponentially. Richard Feynman suggested in 1982 that a computer built from quantum parts could keep up, and Seth Lloyd showed in 1996 how.

The basic method chops time into many small slices. In each slice, the system's interactions are applied one at a time, as if each acted alone, which is a good approximation when the slices are short, a bit like making a film from many still frames. More slices give more accuracy but a longer program.

Since 2015, cleverer methods have reached the best possible cost, using tricks with names like qubitization and quantum signal processing. These are also building blocks for other quantum algorithms, from solving equations to measuring energies. For chemistry, they underlie estimates of how big a quantum computer must be to study molecules such as the enzyme that fixes nitrogen.

# Student explanation

**Goal.** The Schrödinger equation says a state evolves as $|\psi(t)\rangle=e^{-iHt}|\psi(0)\rangle$, where the Hamiltonian $H$ is the energy matrix. For $n$ qubits $H$ is $2^n\times2^n$, but physical Hamiltonians are sums of a few simple local pieces, $H=\sum_j H_j$. The task is a circuit that implements $e^{-iHt}$ to accuracy $\varepsilon$.

**Product formulas (Trotter).** If the pieces commuted, $e^{-iHt}$ would equal $\prod_j e^{-iH_jt}$. They usually do not, but over a short time step the error is small. Splitting $t$ into $r$ steps,
$e^{-iHt}\approx\Big(\prod_j e^{-iH_jt/r}\Big)^r,$
with error shrinking like $t^2/r$ times the size of the commutators $[H_j,H_k]=H_jH_k-H_kH_j$. Symmetric and higher-order versions do better. Each small exponential is a short circuit.

**Optimal methods.** Writing $H$ as a weighted sum of unitaries and embedding it in a bigger unitary (a _block encoding_) lets algorithms apply polynomials of $H$. Quantum signal processing and qubitization approximate $e^{-iHt}$ with a polynomial using about $\lambda t+\log(1/\varepsilon)$ queries, where $\lambda$ is the sum of the weights, which is provably optimal.

**Limits.** No general method can simulate time $t$ with cost much less than proportional to $t$ (no fast-forwarding). For local lattice models the best gate count is proportional to the number of qubits times $t$, up to logarithms, and this is also proven optimal.

**Example.** For a chain of $n$ spins with nearest-neighbour coupling, $H$ splits into two groups of commuting terms (even bonds and odd bonds). Each Trotter step applies all even bonds in parallel, then all odd bonds, so one step is a circuit of depth two regardless of $n$. The number of steps needed grows with the total time $t$ and the desired accuracy, so the total gate count grows roughly like $nt$ times a slowly growing factor.

**Choosing a method.** Product formulas need no extra qubits and are often favoured for early machines; qubitization needs extra qubits for the block encoding but has the best asymptotic cost, and is used in most chemistry resource estimates.
