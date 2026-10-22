---
type: entry
slug: quantum-monte-carlo
title: "Quantum Monte Carlo: DMC, AFQMC and neural-network wavefunctions"
field: computational-chemistry
kind: ALGORITHM
status: ACTIVE
summary: "Stochastic solutions of the electronic Schrödinger equation: variational and diffusion Monte Carlo, auxiliary-field QMC and neural-network wavefunctions, limited by the fermion sign problem."
reliedOn: QMC provides benchmark energies for solids, noncovalent complexes and small molecules independent of CC and DFT, and neural-network VMC is a fast-moving route to systematically improvable wavefunctions.
dependsOn:
  - born-oppenheimer-pes
  - reverse-mode-autodiff
references:
  - title: W. M. C. Foulkes et al., Quantum Monte Carlo simulations of solids (2001)
    url: https://doi.org/10.1103/RevModPhys.73.33
    kind: paper
  - title: D. Pfau et al., Ab initio solution of the many-electron Schrödinger equation with deep neural networks (FermiNet, 2020)
    url: https://doi.org/10.1103/physrevresearch.2.033429
    kind: paper
  - title: J. Hermann et al., Ab initio quantum chemistry with neural-network wavefunctions, Nat. Rev. Chem. (2023)
    url: https://doi.org/10.1038/s41570-023-00516-8
    kind: paper
  - title: S. Zhang and H. Krakauer, Quantum Monte Carlo method using phase-free random walks with Slater determinants (2003)
    url: https://doi.org/10.1103/PhysRevLett.90.136401
    kind: paper
timeline:
  - date: 1980-08-01
    title: Stochastic electron gas
    body: Ceperley and Alder's DMC calculation of the electron gas, the basis of LDA.
    source: https://doi.org/10.1103/PhysRevLett.45.566
  - date: 2019-09-05
    title: FermiNet
    body: Pfau et al. introduce a neural-network ansatz for molecular ground states (arXiv date).
    source: https://arxiv.org/abs/1909.02487
  - date: 2022-11-24
    title: Self-attention wavefunction
    body: Psiformer (von Glehn and Spencer) improves accuracy on larger molecules (arXiv date).
    source: https://arxiv.org/abs/2211.13672
explainer:
  oneLine: Solves the electron problem by random sampling, giving a method independent of coupled cluster and DFT.
  flow:
    - Guess a quantum state
    - Sample electron positions at random
    - Average the energy
    - Improve the guess
    - Fixed nodes keep noise manageable
  glossary:
    - term: quantum Monte Carlo
      meaning: Methods that solve the electron problem by random sampling, trading exact answers for statistical error bars.
      link: /research/quantum-monte-carlo
    - term: fixed-node approximation
      meaning: A trick in diffusion Monte Carlo that avoids the sign problem by fixing where the wavefunction changes sign, at the price of a bias.
      link: /research/quantum-monte-carlo
    - term: variational principle
      meaning: The rule that any trial wavefunction gives an energy at or above the true ground-state energy, so lower is better.
      link: https://en.wikipedia.org/wiki/Variational_Monte_Carlo
    - term: sign problem
      meaning: The cancellation of positive and negative contributions that makes exact random-sampling calculations of electrons exponentially noisy.
      link: https://en.wikipedia.org/wiki/Sign_problem
    - term: wavefunction
      meaning: The mathematical object that holds everything quantum mechanics can say about a system, such as where its electrons are likely to be.
      link: https://en.wikipedia.org/wiki/Wave_function
    - term: neural network
      meaning: A flexible function with many adjustable numbers, fitted to data by training.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: electron correlation
      meaning: The way electrons dodge each other because they repel; leaving this out of a calculation is the main source of error in simple methods.
      link: https://en.wikipedia.org/wiki/Electron_correlation
  readFirst:
    - title: Quantum Monte Carlo (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_Monte_Carlo
      why: Overview of the family of methods.
    - title: Ab initio quantum chemistry with neural-network wavefunctions (Hermann et al.)
      url: https://doi.org/10.1038/s41570-023-00516-8
      why: Review of neural-network QMC for chemists.
    - title: Quantum Monte Carlo simulations of solids (Foulkes et al.)
      url: https://doi.org/10.1103/RevModPhys.73.33
      why: Standard review of VMC and DMC.
site:
  published: true
  aiReviewed: true
---

## What it is

QMC methods estimate integrals over the many-electron wavefunction by random sampling, giving polynomial cost (roughly $O(N^3)$–$O(N^4)$ per sample) and trivially parallel scaling.

- **Variational MC (VMC)** minimises $E[\Psi_\theta]=\langle\Psi_\theta|\hat H|\Psi_\theta\rangle/\langle\Psi_\theta|\Psi_\theta\rangle$ by sampling $|\Psi_\theta|^2$.
- **Diffusion MC (DMC)** projects out the ground state by imaginary-time evolution. To avoid the **fermion sign problem** one imposes the **fixed-node approximation**: the nodal surface of a trial wavefunction is held fixed, giving an upper bound whose error is second order in the nodal error.
- **Auxiliary-field QMC (AFQMC)** writes the propagator as a sum over random Slater determinants and controls the phase problem with a constraint from a trial state.
- **Neural-network wavefunctions** (FermiNet, PauliNet, Psiformer, LapNet) use deep networks with permutation-antisymmetric structure as the ansatz and train it by VMC.

## Strengths and limits

QMC treats dispersion and metals naturally and avoids the $N^7$ wall of CCSD(T). Limits: the fixed-node or constraint bias is uncontrolled in general; statistical error scales as $1/\sqrt{M}$ in the number of samples, and the cost of DMC grows steeply with atomic number (roughly $Z^{5.5}$ to $Z^{6.5}$); neural VMC currently needs expensive per-system optimisation and has mostly been demonstrated on molecules with tens to low hundreds of electrons, as detailed in the problems.

## Why it is foundational

Independent reference energies. The disagreement between DMC and CCSD(T) on large molecules is the main evidence that "gold standard" references still carry unquantified error bars.

## Worth understanding

- Why fixed-node DMC is variational
- The role of the Jastrow factor and backflow
- How neural ansätze reduce nodal error

## Current frontier

Neural-network wavefunctions have reached accuracy beyond conventional trial functions for small molecules and are being scaled and made transferable. DMC is applied to molecular crystals, surfaces and large noncovalent complexes, where it disagrees with CCSD(T) in some cases. AFQMC with GPU implementations is a growing production method for transition-metal and solid-state problems.

# Plain explanation

Another way to calculate a molecule's energy is to guess a shape for the electrons' quantum state and then test the guess by throwing dice. You place many random sets of electron positions, according to your guess, and average the energy you get. The better the guess, the lower the energy. This is called quantum Monte Carlo.

A fancier version lets the random walkers wander in imaginary time so that they drift toward the lowest-energy state automatically. There is a catch: electrons are fermions and their quantum state has positive and negative regions that cancel. To keep the method from drowning in noise, practitioners freeze the boundary between the regions, which introduces a small unknown error.

Recently, researchers have used neural networks, the same kind of tool behind modern image software, to represent the guess. These networks can reach very high accuracy for small and medium molecules but need a lot of computing time.

Quantum Monte Carlo matters because it is a different route from the usual methods. When two trusted methods disagree, as they do for some large molecules, a third approach helps decide who is right.

# Student explanation

**Variational Monte Carlo (VMC).** For a trial wavefunction $\Psi_\theta(\mathbf r_1,\dots,\mathbf r_N)$, the energy $E=\langle\Psi_\theta|\hat H|\Psi_\theta\rangle/\langle\Psi_\theta|\Psi_\theta\rangle$ is estimated by sampling electron positions from $|\Psi_\theta|^2$ and averaging the local energy $\hat H\Psi_\theta/\Psi_\theta$. By the variational principle, the energy is never below the truth; parameters $\theta$ are optimised to lower it. Statistical error shrinks as $1/\sqrt{M}$ with $M$ samples.

**Diffusion Monte Carlo (DMC).** Imaginary-time propagation $e^{-\tau\hat H}$ filters out excited states. For fermions the wavefunction changes sign, which produces the sign problem. The fixed-node approximation forces the walkers to respect the nodes of a trial function: the energy is then an upper bound and its error is second order in the node error.

**Auxiliary-field QMC (AFQMC)** propagates random Slater determinants and applies a constraint to control a phase problem.

**Neural-network wavefunctions.** FermiNet, PauliNet, Psiformer and LapNet use neural networks that are antisymmetric under swapping electrons. They are trained by VMC and now routinely beat conventional trial functions on small molecules. Costs grow quickly with electron number and are paid again for every molecule unless a model is transferable.

**Role in the field.** DMC results disagree with CCSD(T) for some large noncovalent complexes by several kcal/mol, which is the subject of an open problem here.

**Practical notes.** QMC codes (QMCPACK, CASINO, TurboRVB, NECI for FCIQMC, ipie for AFQMC) run on thousands of GPUs. Trial wavefunctions often come from DFT or selected CI, and the quality of their nodes controls DMC accuracy. For solids, finite-size corrections matter, and pseudopotentials are used for heavier elements, adding another approximation.

**Things to check yourself.** Why is fixed-node DMC an upper bound? What does a Jastrow factor do?
