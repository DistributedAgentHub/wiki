---
type: entry
slug: strongly-correlated-multireference-methods
title: "Strong correlation: multireference methods, DMRG and selected CI"
field: computational-chemistry
kind: ALGORITHM
status: ACTIVE
summary: Active-space and tensor-network methods (CASSCF/CASPT2, DMRG, selected CI, FCIQMC) for systems where no single determinant dominates, such as open-shell transition-metal clusters.
reliedOn: Iron–sulfur clusters, nitrogenase, photochemistry and bond breaking cannot be done with CCSD(T) or DFT alone; these methods are also the classical baseline any quantum-computing advantage claim must beat.
dependsOn:
  - born-oppenheimer-pes
  - coupled-cluster-theory
references:
  - title: B. O. Roos et al., A complete active space SCF method (CASSCF) (1980)
    url: https://doi.org/10.1016/0301-0104(80)80045-0
    kind: paper
  - title: S. R. White, Density matrix formulation for quantum renormalization groups (1992)
    url: https://doi.org/10.1103/PhysRevLett.69.2863
    kind: paper
  - title: G. K.-L. Chan and S. Sharma, The density matrix renormalization group in quantum chemistry (2011)
    url: https://doi.org/10.1146/annurev-physchem-032210-103338
    kind: paper
  - title: A. A. Holmes et al., Heat-bath configuration interaction (2016)
    url: https://doi.org/10.1021/acs.jctc.6b00407
    kind: paper
  - title: G. H. Booth et al., Fermion Monte Carlo without fixed nodes (FCIQMC, 2009)
    url: https://doi.org/10.1063/1.3193710
    kind: paper
timeline:
  - date: 1980-01-01
    title: CASSCF
    body: The complete-active-space SCF method becomes the standard multireference starting point (date given as the year of publication).
    source: https://doi.org/10.1016/0301-0104(80)80045-0
  - date: 1992-11-09
    title: DMRG
    body: White's density matrix renormalization group, later adapted to molecules (2000s).
    source: https://doi.org/10.1103/PhysRevLett.69.2863
  - date: 2016-08-01
    title: Heat-bath CI
    body: Selected CI reaches CAS sizes beyond exact diagonalisation with near-FCI accuracy (date given as the year/month of publication).
    source: https://doi.org/10.1021/acs.jctc.6b00407
explainer:
  oneLine: Methods for molecules where many electron arrangements matter at once, such as iron–sulfur clusters.
  flow:
    - Many arrangements share the state
    - Pick an active space
    - Solve it nearly exactly (CAS, DMRG)
    - Add the remaining correlation
    - Results depend on choices
  glossary:
    - term: strong correlation
      meaning: A situation where many electron arrangements matter at once, so simple one-configuration pictures fail.
      link: /research/strongly-correlated-multireference-methods
    - term: active space
      meaning: A hand-picked group of electrons and orbitals treated with extra care because their behaviour is the hardest to get right.
      link: /research/strongly-correlated-multireference-methods
    - term: DMRG
      meaning: "Density matrix renormalization group: a method that squeezes a many-electron wavefunction into a chain of small matrices."
      link: https://en.wikipedia.org/wiki/Density_matrix_renormalization_group
    - term: Slater determinant
      meaning: A standard way to write a many-electron wavefunction that obeys the Pauli exclusion principle.
      link: https://en.wikipedia.org/wiki/Slater_determinant
    - term: spin state
      meaning: The way the spins of unpaired electrons line up, which changes a metal complex's energy and chemistry.
      link: https://en.wikipedia.org/wiki/Spin_(physics)
    - term: transition metal
      meaning: Elements such as iron, copper and nickel whose partly filled d shells give rich chemistry and hard calculations.
      link: https://en.wikipedia.org/wiki/Transition_metal
    - term: electron correlation
      meaning: The way electrons dodge each other because they repel; leaving this out of a calculation is the main source of error in simple methods.
      link: https://en.wikipedia.org/wiki/Electron_correlation
  readFirst:
    - title: Density matrix renormalization group (Wikipedia)
      url: https://en.wikipedia.org/wiki/Density_matrix_renormalization_group
      why: Overview of the tensor-network method.
    - title: The density matrix renormalization group in quantum chemistry (Chan and Sharma)
      url: https://doi.org/10.1146/annurev-physchem-032210-103338
      why: Review of how DMRG is used for molecules.
    - title: Configuration interaction (Wikipedia)
      url: https://en.wikipedia.org/wiki/Configuration_interaction
      why: Background on expanding a wavefunction in electron arrangements.
site:
  published: true
  aiReviewed: true
---

## What it is

When several electronic configurations have comparable weight (static or strong correlation), the wavefunction is not close to one determinant. The standard strategy is to split orbitals into inactive, **active** and virtual sets and treat the active space exactly.

## Main tools

- **CASSCF / RASSCF**: full CI inside an active space of $n$ electrons in $m$ orbitals, CAS($n$,$m$), with orbitals optimised; the cost of exact CI grows combinatorially in $m$ (about 18 electrons in 18 orbitals is already near the limit of exact diagonalisation).
- **CASPT2, NEVPT2, MRCI**: add dynamic correlation from outside the active space; accuracy depends on the active space and on intruder-state treatments.
- **DMRG** (White, 1992): variational matrix-product-state ansatz whose cost grows as $O(m^3 D^3 + m^4D^2)$ in bond dimension $D$; efficient for quasi-one-dimensional entanglement, applied to CAS($n$,$m$) with $m\sim 50$–100.
- **Selected CI** (CIPSI, SHCI, ASCI) and **FCIQMC**: stochastic or heuristic selection of the important determinants, with perturbative or stochastic corrections.
- **Auxiliary-field QMC and CC with multireference corrections** (see the QMC and coupled-cluster entries).

## The difficulty

Choosing the active space is a human-in-the-loop step that affects the answer; relative energies of many nearly degenerate spin states (Heisenberg-type ladders in Fe–S clusters) can differ by well under 1 kcal/mol; and dynamic correlation outside the active space is expensive to recover. Exact treatments scale exponentially in the number of strongly correlated orbitals.

## Why it is foundational

These methods define the answer for strongly correlated molecules to the extent one exists, and they are the classical competition for fault-tolerant quantum phase estimation and for sample-based quantum diagonalization.

## Worth understanding

- Why entanglement structure (area law, orbital ordering) governs DMRG cost
- Size-consistency problems in truncated multireference CI
- How spin symmetry is handled (SU(2)-adapted DMRG)

## Current frontier

Current work includes automated active-space selection, DMRG-based dynamic-correlation methods, multireference coupled-cluster variants, AFQMC with multideterminant trials, and neural-network wavefunctions for metals.

# Plain explanation

Most molecules can be pictured with each electron in one neat slot. In some molecules, the electrons have many nearly equal ways of arranging themselves, and the true state is a blend of all of them. Metal-containing clusters in enzymes are the classic example. For these, simple methods give wrong answers, sometimes badly wrong.

The usual strategy is to pick the handful of electrons and orbitals that cause the trouble, called the active space, and treat them as exactly as possible, then add the rest of the molecule's effects with cheaper corrections. A clever method called DMRG squeezes a huge blend into a chain of small tables, which lets chemists handle active spaces far beyond what brute force allows.

Choosing the active space is partly an art, and different choices can change the answer. The energy gaps between the competing arrangements can be smaller than the accuracy of the method, so results are hard to trust.

These methods matter beyond chemistry because they are the classical competitors that any quantum computer claiming an advantage for molecules has to beat.

# Student explanation

**The issue.** Static (strong) correlation arises when several determinants have comparable weights in the exact wavefunction, for example when a bond stretches or when many half-filled d orbitals can couple their spins in different ways. A single-determinant reference, as in Hartree–Fock, DFT or CCSD(T), then fails.

**Active-space methods.** Split orbitals into core (doubly occupied), active and virtual. In CASSCF one solves the Schrödinger equation exactly within the active space, written CAS($n$,$m$) for $n$ electrons in $m$ orbitals, while optimising the orbitals. Exact solution scales combinatorially, roughly $\binom{m}{n/2}^2$ determinants. Perturbation theory on top (CASPT2, NEVPT2) or multireference CI adds the missing dynamic correlation.

**Beyond exact diagonalisation.** DMRG represents the wavefunction as a matrix product state with bond dimension $D$; accuracy improves as $D$ grows. It works well when orbitals can be arranged so that entanglement is local. Selected CI and FCIQMC pick the most important determinants by importance or random sampling.

**Difficulties.** The result depends on the active space; many nearly degenerate spin states can lie within 1 kcal/mol; dynamic correlation outside the active space is expensive; and the cost of exact methods grows exponentially.

**Why it appears here.** The FeMo-cofactor of nitrogenase is a standard test case. Whether such systems really require a quantum computer depends on how far these classical methods can be pushed, and recent preprints suggest further than previously believed.

**Things to check yourself.** What is the difference between static and dynamic correlation? Why does orbital ordering matter in DMRG?
