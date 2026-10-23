---
type: problem
slug: self-correcting-quantum-memory-3d
title: A self-correcting quantum memory in three dimensions
entry: surface-code-fault-tolerance
status: OPEN
origin: Dennis, Kitaev, Landahl and Preskill, 2002 (4D toric code); Bravyi and Terhal, 2009 (2D no-go)
ratings:
  difficulty: 72
  applicationValue: 20
  leverage: 42
workMix:
  theory: 75
  engineering: 0
  compute: 25
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: Dennis, Kitaev, Landahl, Preskill, Topological quantum memory (J. Math. Phys. 2002)
    url: https://arxiv.org/abs/quant-ph/0110143
  - title: Alicki, Horodecki, Horodecki, Horodecki, On thermal stability of topological qubit in Kitaev's 4D model (2010)
    url: https://arxiv.org/abs/0811.0033
  - title: Bravyi, Terhal, A no-go theorem for a two-dimensional self-correcting quantum memory based on stabilizer codes (NJP 2009)
    url: https://arxiv.org/abs/0810.1983
  - title: Haah, Local stabilizer codes in three dimensions without string logical operators (PRA 2011)
    url: https://arxiv.org/abs/1101.1962
  - title: Bravyi, Haah, Quantum self-correction in the 3D cubic code model (PRL 2013)
    url: https://arxiv.org/abs/1112.3252
  - title: Williamson, Baspin, Layer Codes (Nat. Commun. 2024)
    url: https://arxiv.org/abs/2309.16503
  - title: Williamson, Partial Self-Correction in Layer Codes (preprint, 2025)
    url: https://arxiv.org/abs/2510.09218
  - title: Gu et al., Layer codes as partially self-correcting quantum memories (PRL 2026)
    url: https://arxiv.org/abs/2510.06659
  - title: Roberts, Koh, Tan, Yao, Cored product codes for quantum self-correction in three dimensions (preprint, 2025)
    url: https://arxiv.org/abs/2510.05479
  - title: Stengele, Caha, Capel, Warzel, Haah's 3D cubic code thermalizes rapidly (preprint, 2026)
    url: https://arxiv.org/abs/2609.39959
  - title: Brown, Loss, Pachos, Self, Wootton, Quantum memories at finite temperature (Rev. Mod. Phys. 2016)
    url: https://arxiv.org/abs/1411.6643
links:
  - to: quantum-pcp-conjecture
    kind: RELATED
    note: "Both ask about the low-energy and thermal structure of local Hamiltonians built from codes: good qLDPC codes underlie the NLTS theorem on the quantum PCP side and the layer codes that are the best 3D self-correction candidates."
timeline:
  - date: 2008-10-11
    title: 2D no-go
    body: Bravyi and Terhal proved that 2D stabilizer codes have constant energy barriers.
    source: https://arxiv.org/abs/0810.1983
  - date: 2011-01-10
    title: Cubic code
    body: Haah introduced 3D stabilizer codes without string logical operators.
    source: https://arxiv.org/abs/1101.1962
  - date: 2011-12-14
    title: Partial self-correction in the cubic code
    body: Bravyi and Haah proved memory time $L^{c\beta}$ up to a size $L^*\sim e^{\beta/3}$.
    source: https://arxiv.org/abs/1112.3252
  - date: 2023-09-28
    title: Layer codes
    body: Williamson and Baspin built 3D codes with optimal parameters and a polynomial energy barrier.
    source: https://arxiv.org/abs/2309.16503
  - date: 2025-10-10
    title: Layer codes partially self-correct
    body: Williamson, and independently Gu et al., showed partial self-correction for layer codes.
    source: https://arxiv.org/abs/2510.09218
  - date: 2026-09-30
    title: Cubic code ruled out (preprint)
    body: Stengele et al. proved the cubic code thermalises rapidly at all positive temperatures.
    source: https://arxiv.org/abs/2609.39959
explainer:
  oneLine: Can a 3D material keep quantum information safe on its own, as a magnet keeps a hard-drive bit?
  flow:
    - Magnets protect bits passively
    - Quantum memories need active correction
    - 4D works, 2D impossible
    - 3D designs fail beyond a size
    - "Open: a truly self-correcting 3D code"
  glossary:
    - term: self-correcting memory
      meaning: A system whose own thermal physics protects stored information without active correction.
      link: https://en.wikipedia.org/wiki/Quantum_memory
    - term: energy barrier
      meaning: The energy a system must pass through to change its stored state.
      link: https://en.wikipedia.org/wiki/Activation_energy
    - term: Ising model
      meaning: A simple model of a magnet with up or down spins on a lattice.
      link: https://en.wikipedia.org/wiki/Ising_model
    - term: toric code
      meaning: Kitaev's lattice code; self-correcting in 4D but not in 2D.
      link: https://en.wikipedia.org/wiki/Toric_code
    - term: topological order
      meaning: A kind of quantum order stored in global patterns rather than local properties.
      link: https://en.wikipedia.org/wiki/Topological_order
    - term: thermal equilibrium
      meaning: The steady state a system reaches when exchanging energy with surroundings at fixed temperature.
      link: https://en.wikipedia.org/wiki/Thermal_equilibrium
    - term: stabilizer code
      meaning: A quantum code defined by commuting parity checks.
      link: https://en.wikipedia.org/wiki/Stabilizer_code
    - term: surface code
      meaning: The 2D code used for active error correction.
      link: /research/surface-code-fault-tolerance
  readFirst:
    - title: Toric code (Wikipedia)
      url: https://en.wikipedia.org/wiki/Toric_code
      why: The model whose 4D version self-corrects.
    - title: Topological order (Wikipedia)
      url: https://en.wikipedia.org/wiki/Topological_order
      why: The physics question behind self-correction.
site:
  aiReviewed: true
---

Consider qubits on a three-dimensional lattice of linear size $L$ with a Hamiltonian $H=-\sum_j S_j$ made of geometrically local, bounded-norm, commuting terms (for example the checks of a stabilizer code) whose ground space encodes at least one logical qubit. The system is weakly coupled to a thermal bath at inverse temperature $\beta$, modelled by the Davies master equation, with no active error correction during storage. The **memory time** $T_{\mathrm{mem}}(L,\beta)$ is the time after which an efficient decoder applied at readout can no longer recover the logical state with error below a fixed constant.

**Question:** does there exist such a family, together with a critical inverse temperature $\beta_c<\infty$, such that for every $\beta>\beta_c$ the memory time grows without bound as $L\to\infty$, ideally as $\exp(\Omega(L^{c}))$? Equivalently: can a three-dimensional quantum memory protect itself passively at nonzero temperature, as the two-dimensional Ising ferromagnet does for a classical bit?

# State of the art

**Other dimensions.** The 4D toric code is self-correcting (Dennis et al., 2002; proved for Davies dynamics by Alicki, Horodecki, Horodecki and Horodecki, 2010). In 2D, Bravyi and Terhal (2009) proved that every local stabilizer code has an energy barrier bounded by a constant, which rules out self-correction for 2D stabilizer codes.

**3D candidates.** Haah's cubic code (2011) has no string-like logical operators. Bravyi and Haah (PRL 2013) proved $T_{\mathrm{mem}}\ge L^{c\beta}$, but only up to a critical size $L^*\sim e^{\beta/3}$, which is _partial_ self-correction. Stengele, Caha, Capel and Warzel (arXiv:2609.39959, September 2026, preprint) prove that the cubic code thermalises rapidly at every positive temperature, so it is not self-correcting. **Layer codes** (Williamson and Baspin, Nat. Commun. 2024) reach the optimal code parameters and a polynomial energy barrier in 3D. Williamson (arXiv:2510.09218, preprint) shows a family based on good quantum Tanner codes has memory time growing exponentially with $L$ up to a length scale exponential in $\beta$, and Gu et al. (PRL 2026) prove partial self-correction for layer codes with decoders that have guarantees; neither reaches strict self-correction in the thermodynamic limit. Roberts, Koh, Tan and Yao (arXiv:2510.05479, preprint) introduce disordered "cored product" codes and report numerical memory times that increase with size up to 60,000 qubits below a critical temperature.

**What is known to be needed.** A diverging energy barrier is necessary but not sufficient, because the number of low-energy paths (entropy) can still make errors spread. Brown, Loss, Pachos, Self and Wootton (Rev. Mod. Phys. 2016) review the no-go theorems and their loopholes.

# Applications

A passive quantum memory would store qubits without continuous syndrome measurement and decoding, reducing control and classical-processing load, much as magnetic domains store classical bits. Its practical value is moderate: active error correction already works below threshold, and real devices are driven far from thermal equilibrium. The answer would also settle whether quantum topological order can be stable at nonzero temperature in three dimensions.

# Resolution criteria

A family of 3D geometrically local commuting Hamiltonians with a proof, accepted by experts, that under Davies dynamics at all sufficiently low positive temperatures the memory time with an efficient decoder grows superpolynomially (ideally exponentially) in L; or a no-go theorem covering all 3D commuting-projector or stabilizer Hamiltonians.

# Rating rationale

Difficulty 72: open since 2002; every 3D candidate so far (cubic code, welded codes, layer codes) has ended in partial self-correction, and 2026 work ruled the cubic code out, so it sits with long-standing combinatorial problems such as the 3×3 tensor rank (72), below quantum PCP (83). Application value 20: a passive memory would cut control overhead, but active error correction already works below threshold. Leverage 42: it connects quantum codes with finite-temperature topological order, comparable to the log-rank conjecture's standing in its field.

# Work mix rationale

Constructions and mixing-time proofs are theory; Monte Carlo simulation of thermal dynamics tests candidates.

# Verification

Expert review of the proof: the Hamiltonian family and its locality in 3D, the bath model (Davies generator), the decoder and its running time, and a lower bound on memory time that grows without limit in $L$ at fixed $\beta>\beta_c$. Monte Carlo simulations of the thermal dynamics (memory time against $L$ at several $\beta$, with finite-size scaling) support a claim but cannot settle it, because partial self-correction looks the same below a crossover length that grows like $e^{c\beta}$.

# Plain explanation

A hard drive stores bits in tiny magnetic regions. Heat jostles the atoms, but a region pointing up stays up for years, because flipping it would mean flipping many atoms at once, which is extremely unlikely. The material corrects its own errors just by sitting at a cool temperature.

Quantum computers instead need constant active error correction: measure, decode, fix, over and over, millions of times a second. A 'self-correcting' quantum memory would be a material whose own physics protects stored quantum information at a low but nonzero temperature, without that constant effort.

In four dimensions such a material exists on paper. In two dimensions it has been proved impossible for the standard family of designs. Our world is three-dimensional, and that is the open case. Several clever 3D designs, including Haah's cubic code and the newer layer codes, protect information for a long time but only up to a certain size; beyond it, errors win. In 2026 researchers proved that the cubic code fails at every temperature. Whether any 3D design works for arbitrarily large sizes is still unknown.

# Student explanation

**Setup.** Qubits on a 3D grid of side $L$ with a Hamiltonian $H=-\sum_j S_j$, where each $S_j$ is a local parity check of a quantum code, so code states are the lowest-energy states. Couple the system to a heat bath at temperature $T$. Errors are thermal excitations, which cost energy. The _memory time_ is how long the stored logical state can still be recovered by decoding at the end.

**The classical analogy.** In the 2D Ising model (a model of a magnet), flipping the overall magnetisation needs a domain wall whose energy grows with system size, so below a critical temperature the flip time grows exponentially with $L$. A self-correcting quantum memory needs the analogous behaviour for quantum information.

**Energy barrier versus entropy.** A large _energy barrier_ (the energy needed partway through any error process that changes the logical state) is necessary, since the rate of crossing behaves like $e^{-\beta\Delta E}$ by the Boltzmann factor. But it is not sufficient: if the number of low-energy paths grows fast enough, entropy wins.

**Known results.** 4D toric code: works. 2D stabilizer codes: proved impossible (constant energy barrier). 3D: Haah's cubic code has a barrier growing like $\log L$, giving memory time $L^{c\beta}$ only up to a size around $e^{\beta/3}$, and a 2026 preprint proves it thermalises quickly at every temperature. Layer codes have barriers growing like a power of $L$ and memory times exponential in $L$, but again only up to a size that grows with $1/T$.

**Open:** a 3D local code whose memory time grows without limit at a fixed low temperature.
