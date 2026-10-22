---
type: entry
slug: quantum-phase-estimation
title: Quantum phase estimation
field: quantum-algorithms
kind: ALGORITHM
status: MATURE
summary: Phase estimation reads out an eigenvalue of a unitary to t bits using controlled powers of it and an inverse Fourier transform; it is the core of Shor's algorithm and of ground-state energy estimation.
reliedOn: Fault-tolerant chemistry and materials proposals estimate energies with phase estimation, so its cost and its need for a good initial state decide whether those applications pay off.
dependsOn:
  - hamiltonian-simulation
  - quantum-algorithms
references:
  - title: Kitaev, Quantum measurements and the Abelian Stabilizer Problem (1995)
    url: https://arxiv.org/abs/quant-ph/9511026
    kind: paper
  - title: Cleve, Ekert, Macchiavello, Mosca, Quantum Algorithms Revisited (Proc. R. Soc. A 1998)
    url: https://arxiv.org/abs/quant-ph/9708016
    kind: paper
  - title: Abrams, Lloyd, A quantum algorithm providing exponential speed increase for finding eigenvalues and eigenvectors (PRL 1999)
    url: https://arxiv.org/abs/quant-ph/9807070
    kind: paper
  - title: Aspuru-Guzik, Dutoi, Love, Head-Gordon, Simulated Quantum Computation of Molecular Energies (Science 2005)
    url: https://arxiv.org/abs/quant-ph/0604193
    kind: paper
  - title: Lin, Tong, Heisenberg-limited ground state energy estimation for early fault-tolerant quantum computers (PRX Quantum 2022)
    url: https://arxiv.org/abs/2102.11340
    kind: paper
  - title: Lee et al., Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry (Nat. Commun. 2023)
    url: https://doi.org/10.1038/s41467-023-37587-6
    kind: paper
  - title: Gharibian, Le Gall, Dequantizing the Quantum Singular Value Transformation (SIAM J. Comput. 2023)
    url: https://arxiv.org/abs/2111.09079
    kind: paper
  - title: Reiher, Wiebe, Svore, Wecker, Troyer, Elucidating reaction mechanisms on quantum computers (PNAS 2017)
    url: https://arxiv.org/abs/1605.03590
    kind: paper
  - title: Lee et al., Even more efficient quantum computations of chemistry through tensor hypercontraction (PRX Quantum 2021)
    url: https://arxiv.org/abs/2011.03494
    kind: paper
timeline:
  - date: 1995-11-20
    title: Phase estimation introduced
    body: Kitaev's abelian stabilizer paper introduced phase estimation.
    source: https://arxiv.org/abs/quant-ph/9511026
  - date: 1998-07-24
    title: Eigenvalues by phase estimation
    body: Abrams and Lloyd proposed phase estimation for eigenvalues of physical Hamiltonians.
    source: https://arxiv.org/abs/quant-ph/9807070
  - date: 2016-05-11
    title: FeMoco resource estimate
    body: Reiher et al. gave the first detailed fault-tolerant cost estimate for a chemistry problem of industrial interest.
    source: https://arxiv.org/abs/1605.03590
  - date: 2021-02-22
    title: Single-ancilla Heisenberg-limited estimation
    body: Lin and Tong gave a ground-energy estimator with one ancilla and Heisenberg-limited scaling.
    source: https://arxiv.org/abs/2102.11340
  - date: 2022-08-03
    title: Evidence review for chemistry
    body: Lee et al. found no evidence yet of a generic exponential advantage for ground-state energies.
    source: https://arxiv.org/abs/2208.02199
explainer:
  oneLine: A quantum routine that measures the energy levels of a system very precisely; it powers Shor's algorithm and quantum chemistry.
  flow:
    - Energy appears as a turning phase
    - Apply evolution for doubling times
    - Fourier transform reads off the phase
    - Good starting state needed
    - Precision costs 1/ε, not 1/ε²
  glossary:
    - term: eigenvalue
      meaning: A number λ for which a matrix acting on a vector just scales it by λ.
      link: https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors
    - term: unitary
      meaning: A transformation that preserves the length of quantum state vectors; every quantum gate is one.
      link: https://en.wikipedia.org/wiki/Quantum_logic_gate
    - term: Hamiltonian
      meaning: The operator whose eigenvalues are a system's allowed energies.
      link: https://en.wikipedia.org/wiki/Hamiltonian_%28quantum_mechanics%29
    - term: ground state
      meaning: The lowest-energy state of a system.
      link: https://en.wikipedia.org/wiki/Ground_state
    - term: Heisenberg limit
      meaning: "The best possible scaling of precision with resources: error falling like 1/N rather than 1/√N."
      link: https://en.wikipedia.org/wiki/Quantum_metrology
    - term: Hamiltonian simulation
      meaning: Building the time evolution of a quantum system as a quantum circuit.
      link: /research/hamiltonian-simulation
    - term: quantum Fourier transform
      meaning: A quantum discrete Fourier transform that turns phases into readable bits.
      link: https://en.wikipedia.org/wiki/Quantum_Fourier_transform
  readFirst:
    - title: Quantum phase estimation algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_phase_estimation_algorithm
      why: The circuit and the probability analysis.
    - title: Quantum computing for chemistry (DARC entry)
      url: /research/quantum-computing-for-chemistry
      why: Where phase estimation is meant to be used and what limits it.
site:
  published: true
  aiReviewed: true
---

## The primitive

Let $U$ be a unitary with eigenvector $|\psi\rangle$, $U|\psi\rangle=e^{2\pi i\varphi}|\psi\rangle$. Phase estimation puts $t$ ancilla qubits in uniform superposition, applies $U^{2^j}$ controlled on ancilla $j$, and finishes with an inverse quantum Fourier transform. Measuring the ancillas gives the best $t$-bit approximation of $\varphi$ with probability at least $4/\pi^2\approx 0.405$, and a few extra ancillas push the success probability close to one. The method goes back to Kitaev (1995); Cleve, Ekert, Macchiavello and Mosca (1998) gave the now-standard Fourier-transform form.

Precision $\varepsilon$ costs $O(1/\varepsilon)$ total applications of $U$, the **Heisenberg limit**, against $O(1/\varepsilon^2)$ for estimating the phase by repeated sampling. In Shor's algorithm, $U$ is multiplication by $a$ modulo $N$ and the phase reveals the order $r$.

## Energies of molecules and materials

For a Hamiltonian $H$, phase estimation on $U=e^{-iHt}$ (or on a qubitization walk operator, whose eigenphases are $\arccos(E/\lambda)$) returns an energy. Abrams and Lloyd (1999) proposed this for eigenvalues, and Aspuru-Guzik, Dutoi, Love and Head-Gordon (2005) for molecular energies. If the input state $|\phi\rangle$ is not an eigenstate, the outcome is $E_k$ with probability $|\langle\psi_k|\phi\rangle|^2$, so finding the ground-state energy needs an initial state with non-negligible overlap with the ground state.

That requirement is the crux. Lee et al. (2023) reviewed the evidence and found no case yet for a generic exponential advantage across chemical space: where good initial states are easy to prepare, classical heuristics also tend to work. Gharibian and Le Gall (2023) made this precise: given a good initial state, estimating a local Hamiltonian's ground energy to constant precision can be done classically, while inverse-polynomial precision is BQP-complete, so the quantum advantage, if any, comes from precision.

## Early-fault-tolerant variants

Textbook phase estimation needs many ancillas and deep controlled circuits. Single-ancilla methods keep the Heisenberg scaling with shallower circuits: Kitaev's iterative version, and the method of Lin and Tong (2022), which uses one ancilla and classical post-processing of many short runs to estimate the ground energy and the cumulative spectral distribution.

## Cost

For the iron–molybdenum cofactor of nitrogenase (FeMoco), Reiher et al. (2017) gave the first detailed fault-tolerant estimate; qubitization with low-rank and tensor-hypercontraction factorisations of the Hamiltonian (Babbush et al., 2018; Lee et al., 2021) lowered the estimated gate counts substantially. These remain paper estimates for machines that do not exist yet.

# Plain explanation

Many questions in chemistry come down to one number: the lowest energy a molecule can have. Knowing it tells chemists which reactions happen and how fast. For complicated molecules, ordinary computers can only approximate it.

Quantum phase estimation is the quantum computer's measuring tape for such numbers. It lets a quantum system evolve for longer and longer times, keeps track of how its quantum phase turns, like the hand of a clock, and then reads off how fast the hand turns, which is the energy. Doubling the precision costs only twice the work, where ordinary repeated measurement would cost four times.

There is a catch. The method measures the energy of whatever state you feed it. To get the lowest energy, you must first prepare a starting state that already resembles the lowest-energy state. For the hardest molecules, nobody knows whether that can be done easily, and where it is easy, ordinary computer methods often work well too.

Phase estimation is also the engine inside Shor's factoring algorithm, where the turning rate reveals a hidden period.

# Student explanation

**Eigenvalues as phases.** For a unitary $U$ (a matrix that preserves vector length, like a rotation), each eigenvector $|\psi\rangle$ satisfies $U|\psi\rangle=e^{2\pi i\varphi}|\psi\rangle$: applying $U$ only turns a phase. Phase estimation finds $\varphi$.

**How.** Put $t$ helper qubits in superposition. Helper $j$ controls $2^j$ applications of $U$, so the helpers pick up phases $\varphi, 2\varphi, 4\varphi,\dots$, which encode the binary digits of $\varphi$. An inverse quantum Fourier transform turns these phases into a bit string, and measuring it gives $\varphi$ to $t$ binary digits with good probability.

**Precision.** Getting $\varphi$ to accuracy $\varepsilon$ costs about $1/\varepsilon$ applications of $U$ (the Heisenberg limit). Estimating it by repeating a simple measurement would cost about $1/\varepsilon^2$, because statistical error shrinks only like one over the square root of the number of samples.

**Energies.** For a Hamiltonian $H$ (the energy operator), use $U=e^{-iHt}$, built with Hamiltonian simulation. Its eigenphases are the energies times $t$. If the input is not an eigenvector but a mixture, phase estimation returns energy $E_k$ with probability equal to the squared overlap of the input with eigenvector $k$. So to find the ground-state energy you need a starting state with a decent overlap with the ground state. For strongly correlated molecules this may be hard, and a 2023 review found no evidence yet of a generic exponential advantage for chemistry.

**Early-fault-tolerant versions** use a single helper qubit and many short runs, trading circuit depth for repetitions.

**Engineering analogy.** Phase estimation is like measuring a frequency by counting cycles: the longer you watch an oscillator, the more precisely you know its frequency, and the error falls in proportion to the observation time. That is the source of the $1/\varepsilon$ cost.
