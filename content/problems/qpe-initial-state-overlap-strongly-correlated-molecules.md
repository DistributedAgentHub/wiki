---
type: problem
slug: qpe-initial-state-overlap-strongly-correlated-molecules
title: "Efficient initial states for quantum phase estimation: overlap that classical heuristics cannot match"
entry: quantum-computing-for-chemistry
status: OPEN
origin: Aspuru-Guzik et al., 2005 (overlap requirement); Lee et al., 2023 (assessment)
ratings:
  difficulty: 59.5
  applicationValue: 42
  leverage: 54
workMix:
  theory: 70
  engineering: 0
  compute: 25
  empirical: 5
verification:
  route: REVIEW
sources:
  - title: Lee et al., Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry, Nat. Commun. (2023)
    url: https://doi.org/10.1038/s41467-023-37587-6
  - title: "Tubman et al., Postponing the orthogonality catastrophe: efficient state preparation for electronic structure simulations on quantum devices (arXiv:1809.05523)"
    url: https://arxiv.org/abs/1809.05523
  - title: Fomichev et al., Initial state preparation for quantum chemistry on quantum computers (arXiv:2310.18410)
    url: https://arxiv.org/abs/2310.18410
  - title: Berry et al., Rapid initial state preparation for the quantum simulation of strongly correlated molecules (arXiv:2409.11748)
    url: https://arxiv.org/abs/2409.11748
  - title: "Gharibian and Le Gall, Dequantizing the quantum singular value transformation: hardness and applications to quantum chemistry and the quantum PCP conjecture (arXiv:2111.09079)"
    url: https://arxiv.org/abs/2111.09079
  - title: Zhai et al., Classical computational simulation of the FeMo-cofactor model to chemical accuracy (arXiv:2601.04621, preprint)
    url: https://arxiv.org/abs/2601.04621
links:
  - to: quantum-pcp-conjecture
    kind: RELATED
    note: Guided local Hamiltonian problems with an overlapping trial state connect to the quantum PCP and complexity of ground-state energy estimation.
timeline:
  - date: 2018-09-14
    title: Postponing the orthogonality catastrophe
    body: Tubman et al. show sparse multideterminant states keep overlap larger for longer (arXiv date).
    source: https://arxiv.org/abs/1809.05523
  - date: 2021-11-17
    title: Dequantization and guiding states
    body: Gharibian and Le Gall relate dequantization to chemistry and quantum PCP (arXiv date).
    source: https://arxiv.org/abs/2111.09079
  - date: 2023-04-05
    title: Assessment of the evidence
    body: Lee et al. conclude evidence for exponential advantage is lacking (date approximate).
    source: https://doi.org/10.1038/s41467-023-37587-6
  - date: 2024-09-18
    title: Rapid state preparation
    body: Berry et al. give faster initial-state preparation for strongly correlated molecules (arXiv date).
    source: https://arxiv.org/abs/2409.11748
explainer:
  oneLine: A quantum computer needs a good first guess of a molecule's state; if one exists, would ordinary computers manage too?
  flow:
    - Phase estimation needs a good start
    - Overlap shrinks with system size
    - Better guesses exist classically
    - If guess is easy, is energy easy?
    - "Open: separation or collapse"
  glossary:
    - term: quantum phase estimation
      meaning: A quantum algorithm that reads out the energy of a molecule, provided it starts from a good guess at the state.
      link: https://en.wikipedia.org/wiki/Quantum_phase_estimation_algorithm
    - term: overlap
      meaning: A number measuring how much one quantum state resembles another; 1 means identical, 0 means unrelated.
      link: https://en.wikipedia.org/wiki/Wave_function
    - term: Slater determinant
      meaning: A standard way to write a many-electron wavefunction that obeys the Pauli exclusion principle.
      link: https://en.wikipedia.org/wiki/Slater_determinant
    - term: active space
      meaning: A hand-picked group of electrons and orbitals treated with extra care because their behaviour is the hardest to get right.
      link: /research/strongly-correlated-multireference-methods
    - term: DMRG
      meaning: "Density matrix renormalization group: a method that squeezes a many-electron wavefunction into a chain of small matrices."
      link: https://en.wikipedia.org/wiki/Density_matrix_renormalization_group
    - term: strong correlation
      meaning: A situation where many electron arrangements matter at once, so simple one-configuration pictures fail.
      link: /research/strongly-correlated-multireference-methods
    - term: qubit
      meaning: The basic unit of a quantum computer, which can hold a blend of 0 and 1.
      link: https://en.wikipedia.org/wiki/Quantum_computing
  readFirst:
    - title: Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry
      url: https://doi.org/10.1038/s41467-023-37587-6
      why: The paper that framed the question.
    - title: Quantum phase estimation algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_phase_estimation_algorithm
      why: The algorithm in question.
    - title: Initial state preparation for quantum chemistry on quantum computers
      url: https://arxiv.org/abs/2310.18410
      why: Survey of preparation methods.
site:
  aiReviewed: true
---

Quantum phase estimation returns the ground-state energy $E_0$ with probability $|\langle\Psi_0|\phi\rangle|^2$ for an input state $|\phi\rangle$, so the algorithm is efficient only if a state with overlap at least $1/\mathrm{poly}(N)$ can be prepared in polynomial time. Determine, for a family of strongly correlated molecules, whether there exists a polynomial-time preparable state $|\phi_N\rangle$ with $|\langle\Psi_0|\phi_N\rangle|^2\ge 1/\mathrm{poly}(N)$ for which _no_ known polynomial-cost classical method (DMRG, selected CI, coupled cluster, AFQMC) computes $E_0$ to chemical accuracy.

Equivalently: either (a) exhibit such a family together with evidence (numerical scaling for system sizes beyond exact diagonalisation, or complexity-theoretic arguments) that classical heuristics fail, or (b) show that the structural features that make state preparation efficient (low entanglement, sparse determinant expansions, matrix-product or Jastrow structure) also make the classical problem tractable, which would rule out generic exponential advantage for ground-state chemistry.

# State of the art

- **Orthogonality catastrophe.** A single Hartree–Fock determinant has overlap with the exact ground state that decays exponentially with system size for extended or strongly correlated systems. Tubman et al. (arXiv:1809.05523, 2018) show that sparse multideterminant states (selected CI) postpone this decay, and Fomichev et al. (PRX Quantum 2024; arXiv:2310.18410) develop and benchmark state-preparation routines including matrix-product-state and sparse-determinant loading. Berry, Tong et al. (arXiv:2409.11748, 2024) give a rapid procedure for strongly correlated molecules with improved gate cost.
- **Assessment.** Lee et al. (Nat. Commun. 2023) found, for the systems studied, that when efficient state preparation was available the classical heuristics also succeeded, and concluded that generic exponential advantage for ground-state chemistry is not supported by present evidence (polynomial speedups remain possible). They do not claim a proof.
- **Complexity.** Gharibian and Le Gall (arXiv:2111.09079; STOC 2022) study dequantization of the quantum singular value transformation and the complexity of ground-state problems with guiding states, with applications to quantum chemistry and the quantum PCP conjecture.
- **FeMoco overlap.** In the Zhai et al. FeMoco preprint (arXiv:2601.04621), the overlap between a filtered broken-symmetry determinant and a bond-dimension-18,000 DMRG state is reported as about 0.45 (their interpretation: overlap with the low-energy manifold); this is a preprint claim.
- **Open.** No family with a proven or convincingly demonstrated efficient-quantum / hard-classical separation exists for molecular Hamiltonians.

# Applications

Determines whether fault-tolerant phase estimation offers exponential or merely polynomial advantage for molecules, which sets the value of chemistry as a quantum application and guides where algorithm and hardware effort goes.

# Resolution criteria

A peer-reviewed result that either (a) gives a molecular family with provable or convincingly validated efficient state preparation and an accepted classical-hardness argument, or (b) gives a proof or strong theoretical argument that efficient state preparation implies classical tractability for physical molecular Hamiltonians, accepted by experts in both communities.

# Rating rationale

Difficulty 59.5: a complexity-flavoured question about physical Hamiltonians with no route to a proof and evidence that so far leans one way. Application value 42: it decides where quantum-chemistry effort is worthwhile. Leverage 54: resolves the central open question in the chemistry advantage debate.

# Work mix rationale

Mostly theory, with numerical studies on molecular families beyond exact diagonalisation.

# Verification

The target is either a molecular family with provable or convincingly validated efficient state preparation and an accepted classical-hardness argument, or a proof that efficient state preparation implies classical tractability. This is a complexity-theoretic argument for physical Hamiltonians, so experts review it; numerical overlap studies on small systems support but do not settle it.

# Plain explanation

The best-known quantum algorithm for molecular energy works like tuning an instrument: it picks out the correct note, but only if you start close enough to it. How close you start is measured by a number called overlap. If the overlap is tiny, the algorithm almost always returns a wrong answer and has to be repeated an impractical number of times.

For small molecules, an easy starting guess has good overlap. For large or strongly correlated molecules, that overlap shrinks rapidly, like trying to guess a lock combination with more and more digits.

Better starting guesses exist, for example from approximate classical calculations that pick out the most important arrangements of electrons. Here is the puzzle. If a classical calculation can make a starting guess that is good enough, perhaps the classical calculation can also get the energy directly, which removes the need for the quantum computer. A study in 2023 looked at several examples and found this seemed to be the case.

Nobody has proven it either way. The task is to find a family of molecules where a good guess is easy for a quantum computer but the energy is still hard for ordinary computers, or to show that this cannot happen.

# Student explanation

**Setup.** Quantum phase estimation applied to an input state $|\phi\rangle$ returns the eigenvalue $E_k$ with probability $|\langle\Psi_k|\phi\rangle|^2$. To get the ground-state energy with constant probability one needs $|\langle\Psi_0|\phi\rangle|^2\ge1/\mathrm{poly}(N)$, preparable in polynomial time. In words: the starting guess must contain a not-too-small share of the true ground state.

**Orthogonality catastrophe.** A single Hartree–Fock determinant has overlap decaying exponentially in system size for extended or strongly correlated systems. Sparse multideterminant states from selected CI (Tubman et al., 2018) hold the overlap up for longer. Fomichev et al. (2024) and Berry et al. (2024) give state-preparation routines with improved gate cost.

**The dilemma.** Lee et al. (2023) examined families of molecules and models: when an efficient state preparation was available, classical heuristics (DMRG, coupled cluster, selected CI) also worked, so evidence of an exponential advantage for generic ground-state chemistry was lacking (polynomial speedups remain possible). No theorem shows that this must be so.

**Complexity connection.** Gharibian and Le Gall (2022) show how 'guided' ground-state problems relate to dequantization, quantum chemistry and the quantum PCP conjecture. A preprint on FeMoco reports an overlap of about 0.45 between a simple broken-symmetry determinant and a DMRG state, suggesting good overlap is cheap there, at least in their model.

**Resolution would be** a molecular family with an efficiently preparable state and a convincing classical-hardness argument, or an argument that preparability implies tractability.

**Things to check yourself.** Why does overlap, not energy error, limit phase estimation? What does 'dequantization' mean?
