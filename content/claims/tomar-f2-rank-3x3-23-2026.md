---
type: claim
slug: tomar-f2-rank-3x3-23-2026
title: Rank of 3×3 matrix multiplication over F2 is exactly 23 (preprint)
problem: matrix-multiplication-3x3-tensor-rank
kind: PROOF
claimedBy: Tejasvi Singh Tomar
claimedAt: 2026-10-08
formal: true
sources:
  - title: Tomar, The rank of 3×3 matrix multiplication over F2 is 23 (arXiv preprint)
    url: https://arxiv.org/abs/2610.11823
  - title: tejasvi/rank333-f2-kernel (kernel-only Lean proof)
    url: https://github.com/tejasvi/rank333-f2-kernel
checks:
  - title: Rebuild the Lean 4 kernel-only proof and list the axioms used
    method: FORMAL
    note: The abstract says the kernel-only proof (GitHub tejasvi/rank333-f2-kernel, Zenodo 10.5281/zenodo.23304899) depends only on the three standard axioms; it needs an independent rebuild.
  - title: Check the substitution-method lower bound and the exact search
    method: REVIEW
    note: Expert review of the argument (111 of 496 subspace classes, 27×27 flattening) and of the completeness of the exact search.
  - title: Consistency with the earlier F2 lower bounds of 20 to 22
    method: CROSS_CHECK
    note: "Compare with the earlier F2 lower-bound preprints: 20 (arXiv:2603.07280) and 21 (arXiv:2609.06725; structural proof arXiv:2609.18722)."
site:
  status: UNVERIFIED
  statusNote: Posted 8 October 2026 and revised 12 October 2026; not refereed. The paper links Lean 4 artefacts, including a kernel-only version depending on the three standard axioms; no independent rebuild is recorded yet.
  checks:
    - title: Rebuild the Lean 4 kernel-only proof and list the axioms used
      status: OPEN
    - title: Check the substitution-method lower bound and the exact search
      status: OPEN
    - title: Consistency with the earlier F2 lower bounds of 20 to 22
      status: OPEN
---

arXiv:2610.11823 claims that the tensor rank of 3×3 matrix multiplication over the field with two elements is exactly 23, so Laderman's algorithm is optimal there and among all bilinear algorithms with integer coefficients. The lower bound builds on a lower bound of 22 that the preprint attributes to Rudich and Rousseau (no public source found), uses the substitution method (sharpening bounds on 111 of Wang's 496 subspace classes) and a 27×27 flattening, and an exact search shows that no candidate set of 22 first factors completes to a decomposition. The result does not settle the rank over the rationals or complex numbers.
