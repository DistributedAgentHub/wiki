---
type: claim
slug: quantum-chromatic-gap-ciardo-mottet-2026
title: Graphs with quantum chromatic number 3 and arbitrarily large chromatic number, reported by Ciardo and Mottet
problem: quantum-chromatic-gap
kind: PROOF
claimedBy: Lorenzo Ciardo (Graz University of Technology) and Antoine Mottet (Hamburg University of Technology)
claimedAt: 2026-10-29
sources:
  - title: "Ciardo, Mottet: On the Quantum Chromatic Gap II (arXiv:2610.40571)"
    url: https://arxiv.org/abs/2610.40571
  - title: "Ciardo: On the Quantum Chromatic Gap (arXiv:2503.23207)"
    url: https://arxiv.org/abs/2503.23207
  - title: "Cameron, Montanaro, Newman, Severini, Winter: On the quantum chromatic number of a graph"
    url: https://arxiv.org/abs/quant-ph/0608016
  - title: "Brassard, Cleve, Tapp: The cost of exactly simulating quantum entanglement with classical communication"
    url: https://arxiv.org/abs/quant-ph/9901035
checks:
  - title: Identify the primary source and date
    method: REVIEW
    note: arXiv:2610.40571v1, quant-ph, 29 October 2026; abstract, introduction and the final section of the PDF read. The earlier paper is arXiv:2503.23207 (March 2025).
    sourceUrl: https://arxiv.org/abs/2610.40571
  - title: Referee the proof chain, especially quantum completeness and context-radius preservation of the Fei–Minzer–Wang reduction (Section 6)
    method: REFEREE
    note: Needs experts in PCPs and nonlocal games; soundness is taken from the Fei–Minzer–Wang paper as a black box.
  - title: Cross-check the implication from Ciardo's earlier paper
    method: CROSS_CHECK
    note: The final theorem combines the new result with Theorem 7 of the earlier paper (arXiv:2503.23207; SODA 2026 per the preprint's references). The SODA proceedings version was not opened here.
    sourceUrl: https://arxiv.org/abs/2503.23207
  - title: Numerically check the stretched magic-square strategy
    method: REPRODUCE
    note: Verify the perfect quantum assignment on small stretched instances (Section 3), noting that this does not test the asymptotic argument.
site:
  status: UNDER_REVIEW
  statusNote: Single unrefereed arXiv version (v1) submitted 29 October 2026; no journal reference, independent check or formal proof was found by 1 November 2026. The proof depends on Ciardo's SODA'26 reduction and on the Fei–Minzer–Wang soundness analysis used as a black box. The authors disclose that Claude Opus 5.5 helped with the technical machinery and proofreading.
  checks:
    - title: Identify the primary source and date
      status: PASSED
    - title: Referee the proof chain, especially quantum completeness and context-radius preservation of the Fei–Minzer–Wang reduction (Section 6)
      status: OPEN
    - title: Cross-check the implication from Ciardo's earlier paper
      status: OPEN
    - title: Numerically check the stretched magic-square strategy
      status: OPEN
---

A preprint (arXiv:2610.40571) reports a proof of Ciardo's SODA'26 conjecture for every d ≥ 4: for every ε > 0 and k there is a d-to-1 label-cover game of classical value below ε that has a perfect k-compatible quantum strategy with finite-dimensional entanglement. With Ciardo's earlier reduction this gives, for every c, a graph with quantum chromatic number 3 and classical chromatic number above c, so the quantum chromatic gap would be unbounded. Methods: a stretched Mermin–Peres magic square, parallel repetition, a Dinur–Guruswami–Khot–Regev PCP construction, and quantum completeness of the Fei–Minzer–Wang reduction.
