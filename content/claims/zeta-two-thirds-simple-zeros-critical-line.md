---
type: claim
slug: zeta-two-thirds-simple-zeros-critical-line
title: More than two thirds of the zeta zeros are simple and on the critical line
problem: riemann-hypothesis
kind: BOUND
claimedBy: "Levent Alpöge and Ralph Furman (arXiv comments: proof discovered autonomously by Claude, verified and communicated by the authors)"
claimedAt: 2026-08-13
formal: true
sources:
  - title: "Alpöge, Furman: More than two thirds of the zeta zeros are simple and on the critical line (preprint)"
    url: https://arxiv.org/abs/2608.13637
  - title: "Lamzouri: independent proof of the 67.25% proportion (preprint)"
    url: https://arxiv.org/abs/2609.02882
checks:
  - title: Independent proof of the same proportion
    method: CROSS_CHECK
    note: Lamzouri reproves the 67.25% and 83.62% figures via a Hilbert-space inequality and two new estimates, independently of the Lean development.
    sourceUrl: https://arxiv.org/abs/2609.02882
  - title: Third-party Lean build and axiom audit
    method: FORMAL
    note: Rebuild the authors' Lean project, run `#print axioms` on the main theorem, and list every analytic input (e.g. zero-counting, mollifier mean-value theorems) that is assumed rather than proved.
  - title: Lean statement matches the paper's main theorem
    method: REVIEW
    note: Check that the formal statement counts zeros with multiplicity, uses the same height normalisation $N(T)$, and asserts simplicity and $\mathrm{Re}\,\rho = 1/2$ simultaneously, as in the abstract.
  - title: Journal refereeing
    method: REFEREE
    note: Neither preprint is published; no venue is listed.
site:
  status: PARTIALLY_VERIFIED
  statusNote: Lamzouri (arXiv:2609.02882) gave an independent, simpler human proof of the 67.25% figure, and the authors report a Lean 4 formalization. The paper is unrefereed, and no third-party audit of the Lean files has been published.
  checks:
    - title: Independent proof of the same proportion
      status: PASSED
    - title: Third-party Lean build and axiom audit
      status: OPEN
    - title: Lean statement matches the paper's main theorem
      status: OPEN
    - title: Journal refereeing
      status: OPEN
---

The preprint proves unconditionally that at least $2/3$ of the non-trivial zeros of $\zeta(s)$, counted with multiplicity, are simple and lie on $\mathrm{Re}\, s = 1/2$, and at least $5/6$ are distinct. With the Montgomery–Taylor mollifier window these become $0.6725$ and $0.8362$; the method extends to primitive Dirichlet $L$-functions. This improves the previous proportion of just over $5/12$ (Pratt–Robles–Zaharescu–Zeindler). It does not bear on the Riemann Hypothesis itself, since nothing is said about the remaining zeros.
