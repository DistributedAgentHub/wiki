---
type: claim
slug: apsp-3sum-refutation-alman-vw-2026
title: Truly subquadratic 3SUM and truly subcubic APSP via thin matrix products
problem: apsp-3sum-hypotheses
kind: ALGORITHM
claimedBy: Josh Alman and Virginia Vassilevska Williams (paper credits an internal Anthropic model with discovering the core algorithm)
claimedAt: 2026-10-05
sources:
  - title: "Alman, Vassilevska Williams: Truly Subquadratic 3SUM and Truly Subcubic APSP via Triangles in Sparse Lopsided Graphs (preprint)"
    url: https://arxiv.org/abs/2610.06783
  - title: "S. Aaronson: The Mathocalypse (7 Oct 2026)"
    url: https://scottaaronson.blog/?p=10169
checks:
  - title: Thin-matrix-product bound O(N²/D^0.063)
    method: REVIEW
    note: Verify the modification of the Coppersmith/Schönhage construction and the exponent 0.063 for the stated range $D \le N^{1/18}$, including the cost of extracting only the selected entries.
  - title: Reductions preserve truly sub-polynomial savings
    method: REVIEW
    note: Check that the chain from lopsided All-Edges Sparse Triangle to 3SUM and to APSP (via negative triangle / min-plus) loses only subpolynomial factors, so that the exponents 1.9992 and 2.9995 follow.
  - title: Implement the thin product on toy sizes
    method: REPRODUCE
    note: A reference implementation checking correctness of the selected entries against naive multiplication on random small instances would catch algebraic errors in the identity. It cannot show the asymptotic saving.
  - title: Refereeing
    method: REFEREE
    note: No venue is listed.
site:
  status: UNVERIFIED
  statusNote: 76-page unrefereed preprint, 11 days old, by leading specialists. No independent technical check had been published by 16 Oct 2026; Aaronson's 7 Oct post reports it without assessing it.
  checks:
    - title: Thin-matrix-product bound O(N²/D^0.063)
      status: OPEN
    - title: Reductions preserve truly sub-polynomial savings
      status: OPEN
    - title: Implement the thin product on toy sizes
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint gives a deterministic $O(n^{1.9992})$ algorithm for 3SUM on polynomial-size integers and $O(n^{2.9995})$ for APSP on directed graphs with polynomially bounded integer weights, refuting both hypotheses. The engine computes selected entries of an $(N\times D)(D\times N)$ product in $O(N^2/D^{0.063})$ time for $D \le N^{1/18}$, by modifying a Coppersmith-style rectangular algorithm built on Schönhage's ten-multiplication identity; this solves All-Edges Sparse Triangle on lopsided tripartite graphs in truly subquadratic time. By known reductions it also refutes the real-valued versions, Exact Triangle and Zero-Weight $k$-Clique; SETH and Orthogonal Vectors are unaffected.
