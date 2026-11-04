---
type: claim
slug: hyperclique-refutation-alman-li-pant-pratt-williams-2026
title: Counting k-hypercliques in (k-1)-uniform hypergraphs in time O(n^(k-ε_k)) via arithmetic circuits (preprint)
problem: hyperclique-hypothesis
kind: ALGORITHM
claimedBy: Josh Alman, Baitian Li, Neha Pant, Kevin Pratt, Ryan Williams (arXiv preprint; the paper credits the main result to ChatGPT 6 Pro)
claimedAt: 2026-11-03
sources:
  - title: Alman, Li, Pant, Pratt, Williams, Finding Hypercliques Faster Than Brute Force (arXiv preprint)
    url: https://arxiv.org/abs/2611.05082
  - title: Lincoln, Vassilevska Williams, Williams, Tight Hardness for Shortest Cycles and Paths in Sparse Graphs (SODA 2018; arXiv:1712.08147)
    url: https://arxiv.org/abs/1712.08147
checks:
  - title: Verify the arithmetic-circuit construction and its size O(n^(k-ε_k))
    method: REVIEW
    note: "Expert review of Theorem 1: uniformity of the circuits, the constants in Z[1/2], and the counting argument that turns circuit size into running time."
    sourceUrl: https://arxiv.org/abs/2611.05082
  - title: Reproduce counts on small instances
    method: REPRODUCE
    note: Build the circuit for small k (for example k=4) and compare its value with brute-force hyperclique counts on random hypergraphs; a size saving is asymptotic, so this tests correctness of the polynomial, not speed.
    sourceUrl: https://arxiv.org/abs/2611.05082
  - title: Check the Max-k-SAT and arithmetic-progression corollaries
    method: CROSS_CHECK
    note: Confirm that the stated reductions (Williams 2005, Lincoln, Vassilevska Williams and Williams 2018, and Dudek et al. 2026 for arithmetic progressions) turn the hyperclique bound into the claimed running times.
    sourceUrl: https://arxiv.org/abs/2611.05082
  - title: Cross-check against the independent Fischer algorithm
    method: CROSS_CHECK
    note: Compare with arXiv:2611.03880 on overlapping cases and on the stated consequences.
    sourceUrl: https://arxiv.org/abs/2611.03880
  - title: Refereeing
    method: REFEREE
    note: Unrefereed preprint; no journal or conference submission is recorded.
site:
  status: UNDER_REVIEW
  statusNote: Posted 2026-11-03 as an unrefereed preprint by established researchers. It is independent of the Fischer preprint (arXiv:2611.03880, 2026-11-02), which claims the same refutation; neither is refereed. The paper says the main result was obtained by ChatGPT 6 Pro and links the chat; DARC has not independently checked how the result was produced. No expert assessment or formalization is recorded yet.
  checks:
    - title: Verify the arithmetic-circuit construction and its size O(n^(k-ε_k))
      status: OPEN
    - title: Reproduce counts on small instances
      status: OPEN
    - title: Check the Max-k-SAT and arithmetic-progression corollaries
      status: OPEN
    - title: Cross-check against the independent Fischer algorithm
      status: OPEN
    - title: Refereeing
      status: OPEN
---

arXiv:2611.05082 (v1, 2026-11-03) claims that for every fixed $k$ there is $\varepsilon_k>0$ such that the number of $k$-hypercliques in a $(k-1)$-uniform hypergraph on $n$ vertices can be counted in $O(n^{k-\varepsilon_k})$ time, from a uniform family of arithmetic circuits of size $O(n^{k-\varepsilon_k})$ for the $k$-hyperclique tensor, a higher-order generalization of the matrix multiplication tensor. The abstract states this refutes the hyperclique conjecture of Lincoln, Vassilevska Williams and Williams (SODA 2018), and lists two corollaries: Max-$k$-SAT in $2^{(1-\varepsilon)n}\mathrm{poly}(m,n)$ time for every $k$, and detection of $k$-term arithmetic progressions in subsets of $\{0,\dots,n\}$ in $n^{2-\varepsilon}$ time, each of which it says refutes another prominent conjecture.
