---
type: claim
slug: diagonal-ramsey-3-69507-lu-wang
title: Diagonal Ramsey upper bound R(k) ≤ 3.69507^k by retained-set descent
problem: diagonal-ramsey-numbers
kind: BOUND
claimedBy: Zhipeng Lu and Sichen Wang
claimedAt: 2026-09-13
formal: true
sources:
  - title: "Lu, Wang: Retained-Set Descent for Diagonal Ramsey Numbers (preprint)"
    url: https://arxiv.org/abs/2609.14525
  - title: "Campos, Griffiths, Morris, Sahasrabudhe: An exponential improvement for diagonal Ramsey (Annals 2026)"
    url: https://annals.math.princeton.edu/2026/203-3/p04
  - title: "Gupta, Ndiaye, Norin, Wei: Optimizing the CGMS upper bound"
    url: https://arxiv.org/abs/2407.19026
checks:
  - title: Replay the Python exact-interval certificates
    method: REPRODUCE
    note: Run the authors' replay script on a clean machine and confirm that every interval inequality used to reach 3.69507 is certified with rational or interval arithmetic, not floating point.
  - title: Lean build and axiom audit
    method: FORMAL
    note: Build the Lean files, check for `sorry` and project axioms, and record which combinatorial lemmas (e.g. the book-algorithm input) are imported rather than proved.
  - title: Descent step preserves the hypotheses of the book bound
    method: REVIEW
    note: Check that the retained sets produced at each step satisfy the density and size conditions under which the CGMS/GNNW book bound is applied, uniformly in $k$.
site:
  status: UNVERIFIED
  statusNote: Unrefereed preprint, one month old. No public assessment or independent replay of the certificates was found as of 16 Oct 2026.
  checks:
    - title: Replay the Python exact-interval certificates
      status: OPEN
    - title: Lean build and axiom audit
      status: OPEN
    - title: Descent step preserves the hypotheses of the book bound
      status: OPEN
---

The preprint claims $R(k,k) \le 3.69507^k$ for all large $k$, improving the optimized Campos–Griffiths–Morris–Sahasrabudhe base $3.8$ (Gupta–Ndiaye–Norin–Wei). The method is a 'retained-set descent' that still starts from a book-algorithm bound; the authors give Lean 4 files and independent Python exact-interval certificates for the numerical optimisation. It would narrow, not close, the exponential gap with the lower bound $(\sqrt{2})^k$.
