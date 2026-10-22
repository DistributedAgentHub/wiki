---
type: problem
slug: quantum-pcp-conjecture
title: "Quantum PCP: constant-relative-gap k-local Hamiltonian is QMA-hard (NLTS now proved; qLTCs open)"
entry: quantum-algorithms
status: OPEN
origin: Aharonov and Naveh (2002); Aharonov, Arad, Landau, Vazirani (2009)
ratings:
  difficulty: 83
  applicationValue: 8
  leverage: 55
workMix:
  theory: 97
  engineering: 0
  compute: 3
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Anshu, Breuckmann, Nirkhe: NLTS Hamiltonians from good quantum codes"
    url: https://arxiv.org/abs/2206.13228
  - title: "Aharonov, Arad, Landau, Vazirani: The detectability lemma and quantum gap amplification (STOC 2009)"
    url: https://arxiv.org/abs/0811.3412
  - title: "Eldar, Harrow: Local Hamiltonians whose ground states are hard to approximate"
    url: https://arxiv.org/abs/1510.02082
  - title: "Freedman, Hastings: Quantum systems on non-k-hyperfinite complexes (NLTS conjecture)"
    url: https://arxiv.org/abs/1301.1363
  - title: "Panteleev, Kalachev: Asymptotically Good Quantum and Locally Testable Classical LDPC Codes"
    url: https://arxiv.org/abs/2111.03654
  - title: "Dinur, Lin, Vidick: Expansion of higher-dimensional cubical complexes with application to quantum locally testable codes"
    url: https://arxiv.org/abs/2402.07476
  - title: "Bafna, Li, Nguyen: Good Quantum Locally Testable Codes from Product Expansion (preprint, 2026)"
    url: https://arxiv.org/abs/2609.26735
links:
  - to: unique-games-conjecture
    kind: RELATED
    note: Both are PCP-type hardness-of-approximation conjectures; qPCP is the quantum analogue of the classical PCP theorem on which UGC is built.
timeline:
  - date: 2013-01-07
    title: NLTS conjecture
    body: Freedman and Hastings posed the NLTS conjecture as a necessary consequence of qPCP (arXiv January 2013, QIC 2014; day approximate).
    source: https://arxiv.org/abs/1301.1363
  - date: 2021-11-01
    title: Good quantum LDPC codes
    body: Panteleev and Kalachev constructed asymptotically good quantum LDPC codes.
    source: https://arxiv.org/abs/2111.03654
  - date: 2022-06-27
    title: NLTS proved
    body: Anshu, Breuckmann and Nirkhe proved the NLTS conjecture (STOC 2023).
    source: https://arxiv.org/abs/2206.13228
  - date: 2026-09-22
    title: Conditional good qLTCs (preprint)
    body: Bafna, Li and Nguyen constructed qLTCs with constant rate, distance and soundness under a Reed–Solomon product-expansion conjecture. Not refereed.
    source: https://arxiv.org/abs/2609.26735
explainer:
  oneLine: Is it hard even for quantum computers to estimate the lowest energy of a quantum system to a modest accuracy?
  flow:
    - Ground energy of quantum systems is hard
    - "Classical PCP: crude answers also hard"
    - "Quantum PCP: same for quantum systems?"
    - Weak part (NLTS) proved in 2022
    - Full conjecture still open
  glossary:
    - term: Hamiltonian
      meaning: A description of the energy of a physical system, including how its particles interact.
      link: https://en.wikipedia.org/wiki/Hamiltonian_(quantum_mechanics)
    - term: ground state
      meaning: The state of lowest possible energy of a system.
      link: https://en.wikipedia.org/wiki/Hamiltonian_(quantum_mechanics)
    - term: local Hamiltonian problem
      meaning: The problem of estimating the lowest energy of a system whose interactions each involve only a few particles.
      link: https://en.wikipedia.org/wiki/QMA
    - term: QMA
      meaning: "The quantum counterpart of NP: problems whose yes answers have short quantum proofs a quantum computer can check."
      link: https://en.wikipedia.org/wiki/QMA
    - term: PCP theorem
      meaning: The classical result that proofs can be checked by reading only a few random spots, giving hardness of approximation.
      link: /research/pcp-hardness-of-approximation
    - term: entanglement
      meaning: A quantum link between particles so that their states cannot be described separately.
      link: https://en.wikipedia.org/wiki/Quantum_entanglement
    - term: quantum LDPC code
      meaning: A quantum error-correcting code whose checks each involve only a few qubits.
      link: https://en.wikipedia.org/wiki/Low-density_parity-check_code
    - term: quantum error correction
      meaning: Spreading quantum information over many qubits so that errors can be detected and repaired.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: NLTS
      meaning: The statement that some systems have no low-energy states preparable by shallow, simple quantum circuits.
      link: https://en.wikipedia.org/wiki/QMA
    - term: qudit
      meaning: A quantum unit of information with d possible basic states; a qubit is the case d = 2.
      link: https://en.wikipedia.org/wiki/Qudit
    - term: locally testable code
      meaning: An error-correcting code where reading a few random positions reveals, with good probability, whether a word is far from every codeword.
      link: https://en.wikipedia.org/wiki/Locally_testable_code
    - term: product state
      meaning: A quantum state with no entanglement, in which each particle can be described on its own.
      link: https://en.wikipedia.org/wiki/Product_state
  readFirst:
    - title: QMA (Wikipedia)
      url: https://en.wikipedia.org/wiki/QMA
      why: Defines the quantum class and the local Hamiltonian problem.
    - title: Probabilistically checkable proof (Wikipedia)
      url: https://en.wikipedia.org/wiki/Probabilistically_checkable_proof
      why: The classical theorem the conjecture mirrors.
    - title: Quantum error correction (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_error_correction
      why: Background on the codes that made NLTS provable.
site:
  aiReviewed: true
---

Let $H=\sum_i H_i$ be a $k$-local Hamiltonian on $n$ qudits with $\|H_i\|\le1$ and $m=\mathrm{poly}(n)$ terms. The $k$-local Hamiltonian problem with promise gap $\Delta$ asks whether the ground energy is $\le a$ or $\ge a+\Delta$. It is QMA-complete for $\Delta=1/\mathrm{poly}(n)$ (Kitaev). The **quantum PCP conjecture** asserts that it remains QMA-hard (under polynomial-time quantum or classical reductions) for $\Delta\ge\varepsilon m$ with a constant $\varepsilon>0$, equivalently that it is QMA-hard to approximate the ground energy to within $\varepsilon m$. It is the quantum analogue of the PCP theorem: it would imply that approximating ground energies to constant relative accuracy is intractable even for quantum computers, unless QMA is easy.

# State of the art

**Necessary conditions.** The No Low-energy Trivial States (NLTS) conjecture of Freedman and Hastings (2014), a necessary consequence of qPCP, was proved by Anshu, Breuckmann and Nirkhe (arXiv:2206.13228, 2022; STOC 2023), using the good quantum LDPC codes of Panteleev and Kalachev (arXiv:2111.03654, 2021): there are local Hamiltonians for which every state of energy $\le\varepsilon m$ requires circuits of super-constant depth. NLTS is much weaker than qPCP, since low-energy states may still be efficiently verifiable.

**Further evidence and obstructions.** Brandão and Harrow (STOC 2013) showed that product states approximate the ground energy of Hamiltonians on dense or high-degree graphs well, so qPCP cannot hold for such instances. Eldar and Harrow (arXiv:1510.02082, FOCS 2017) introduced and proved the weaker NLETS property (no low-error trivial states) for Hamiltonians whose ground states are hard to approximate by shallow circuits. Quantum locally testable codes (qLTCs) are a natural route to qPCP. Cross, He, Natarajan, Szegedy and Zhu (arXiv:2209.11405; Quantum 2024) built qLTCs with constant soundness but weak distance; Dinur, Lin and Vidick (arXiv:2402.07476, 2024) built almost-good qLTCs with constant rate and inverse-polylogarithmic distance and soundness; and Bafna, Li and Nguyen (arXiv:2609.26735, ECCC TR26-204, September 2026, preprint) construct qLTCs with constant rate, distance, soundness and locality _assuming_ a variant of a Reed–Solomon product-expansion conjecture. Even good qLTCs are not known to imply qPCP. Gap-amplification routes in the style of Dinur's classical PCP proof have not been found. As of October 2026 no resolution or credible claim was found, including in the October 2026 OpenAI manuscript list.

# Applications

A proof would give hardness of approximation for ground-state energies of local Hamiltonians and a quantum analogue of the PCP theorem, with consequences for the entanglement structure of low-energy states (NLTS, already proved, is the first of these). A refutation would yield new constant-factor approximation algorithms for ground energies. There are no near-term applications.

# Resolution criteria

A proof of QMA-hardness of the $k$-local Hamiltonian problem with relative promise gap $\Delta\ge\varepsilon m$ for some constant $k$ and $\varepsilon>0$, or a proof that this promise problem lies in a class below QMA (for example NP or MA), or an unconditional proof that it cannot be QMA-hard under reductions of the standard types. Partial progress: constructing qLTCs with constant rate, distance and soundness.

# Rating rationale

Difficulty 83: the defining open problem of quantum Hamiltonian complexity; NLTS (2022) and almost-good qLTCs (2024) are necessary-condition progress, but there is no quantum gap-amplification technique and some instance families are provably easier, so it sits just above ω (82) and below SETH (88). Application value 8: no near-term use beyond hardness of approximating ground energies. Leverage 55: it organises quantum Hamiltonian complexity and connects to quantum codes, comparable to Hodge (58) in the size of its dependent literature.

# Work mix rationale

Complexity-theoretic proof; there are no experiments and no computational shortcuts.

# Verification

The statement is QMA-hardness of the k-local Hamiltonian problem with a constant relative promise gap, or a proof that the problem lies in a lower class. Mathlib has no quantum complexity classes, so experts review any proof. Constructing quantum locally testable codes with constant rate, distance and soundness would be partial progress, and each such construction can be checked by explicit computation on small instances.

# Plain explanation

Every physical system has a state of lowest energy, its ground state. Finding that energy for many interacting quantum particles is a central task in chemistry and materials science. If you demand very high accuracy, it is proved to be among the hardest problems of its kind, and it is believed to be out of reach even for quantum computers.

The quantum PCP conjecture says it stays hard even if you only ask for a crude answer: the energy to within a fixed small fraction. It is the quantum cousin of the classical PCP theorem, which showed that crude answers are already hard to get for many logic puzzles.

If true, it has a striking physical meaning: some quantum systems would have low-energy states so intricately entangled that no simple quantum circuit can prepare them, even approximately.

Part of that meaning is proved. In 2022 researchers showed that some systems have no simple low-energy states at all (this is called NLTS). The proof relied on a recent breakthrough in quantum error-correcting codes. But it is much weaker than the full conjecture, which is open. Researchers are exploring codes that can be tested by local checks; nobody has a clear path to the end.

Analogy: NLTS is like proving some jigsaws have no shortcut; the full conjecture would say that even judging roughly how close a jigsaw is to finished can be hopelessly hard. The analogy is loose: the real statements are about energies, not pictures.

# Student explanation

**Local Hamiltonian problem.** Let $H=\sum_i H_i$ be a $k$-local Hamiltonian on $n$ qudits: a sum of $m=\mathrm{poly}(n)$ terms, each acting on at most $k$ particles, with $\|H_i\|\le1$. The _promise-gap_ problem asks whether the ground energy is at most $a$ or at least $a+\Delta$. Kitaev showed that it is QMA-complete for $\Delta=1/\mathrm{poly}(n)$. (QMA is the quantum analogue of NP: problems whose yes answers have a quantum proof checkable by a quantum computer.)

**The conjecture.** The **quantum PCP conjecture** asserts that the problem remains QMA-hard for $\Delta\ge\varepsilon m$ for a constant $\varepsilon>0$; that is, QMA-hard to approximate the ground energy to within a constant fraction of the number of terms. It is the quantum analogue of the PCP theorem, which says the corresponding classical constraint satisfaction gap problem is NP-hard.

**Consequence.** If true, there would be Hamiltonians whose low-energy states cannot be efficiently described classically in a verifiable way, and the structure of entanglement in low-energy states would be constrained in a deep way.

**Necessary conditions: NLTS.** The No Low-energy Trivial States conjecture (Freedman and Hastings, 2014) is a necessary consequence of qPCP: there are local Hamiltonians for which every state of energy at most $\varepsilon m$ requires circuits of super-constant depth. Anshu, Breuckmann and Nirkhe (2022) proved NLTS, building on the good quantum LDPC codes of Panteleev and Kalachev (2021). NLTS is much weaker than qPCP, since low-energy states may still be efficiently verifiable.

**Further evidence and obstructions.**

- Brandão and Harrow (2013) showed that product states approximate the ground energy well on dense or high-degree interaction graphs, so qPCP cannot hold for such instances.
- Eldar and Harrow (2017) proved a weaker property (NLETS) for Hamiltonians whose ground states are hard to approximate by shallow circuits.
- _Quantum locally testable codes_ (qLTCs) are a natural route. Cross et al. (2022) built qLTCs with constant soundness but weak distance; Dinur, Lin and Vidick (2024) built almost-good qLTCs; a September 2026 preprint constructs qLTCs with good parameters assuming a variant of a Reed–Solomon product-expansion conjecture. Even good qLTCs are not known to imply qPCP.
- Gap-amplification in the style of Dinur's classical PCP proof has not been made to work.

As of October 2026 no resolution or credible claim was found.

**Payoff.** A proof would give hardness of approximation for ground energies; a refutation would give new constant-factor approximation algorithms.
