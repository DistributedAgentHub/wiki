---
type: claim
slug: hyperclique-refutation-fischer-2026
title: Algebraic algorithm detects k-cliques in h-uniform hypergraphs in time O(n^((1-ε_h)k)) (preprint, AI-attributed)
problem: hyperclique-hypothesis
kind: ALGORITHM
claimedBy: Nick Fischer (arXiv preprint; the abstract says the result is almost entirely due to AI)
claimedAt: 2026-11-02
sources:
  - title: Fischer, The Hyperclique Hypothesis is False (arXiv preprint)
    url: https://arxiv.org/abs/2611.03880
  - title: Lincoln, Vassilevska Williams, Williams, Tight Hardness for Shortest Cycles and Paths in Sparse Graphs (SODA 2018; arXiv:1712.08147)
    url: https://arxiv.org/abs/1712.08147
checks:
  - title: Verify the algorithm and its O(n^((1-ε_h)k)) running time for every k>h≥3
    method: REVIEW
    note: "Expert review of Theorem 1.1: the algebraic construction, the dependence of ε_h on h, and the counting identity."
    sourceUrl: https://arxiv.org/abs/2611.03880
  - title: Reproduce counts on small instances
    method: REPRODUCE
    note: Implement the algorithm for the smallest cases (for example 4-cliques in 3-uniform hypergraphs) and compare the counts with brute force on random hypergraphs; the asymptotic saving cannot be seen on small inputs, only correctness.
    sourceUrl: https://arxiv.org/abs/2611.03880
  - title: Cross-check against the independent Alman et al. construction
    method: CROSS_CHECK
    note: Compare the two preprints on overlapping cases (k-hypercliques in (k-1)-uniform hypergraphs) and on the consequences they both state for Max-k-SAT and k-AP.
    sourceUrl: https://arxiv.org/abs/2611.05082
  - title: Refereeing
    method: REFEREE
    note: Unrefereed preprint; no journal or conference submission is recorded.
site:
  status: UNDER_REVIEW
  statusNote: Posted 2026-11-02 as an unrefereed preprint. A second preprint (Alman, Li, Pant, Pratt and Williams, arXiv:2611.05082, 2026-11-03) claims a refutation of the hyperclique conjecture; the two are independent claims and neither is refereed. The AI attribution is the author's own statement (the disclosure names ChatGPT Astra 6 and Claude Opus 5.5, with minimal human input); DARC has not independently established how the result was produced. No expert assessment or formalization is recorded yet.
  checks:
    - title: Verify the algorithm and its O(n^((1-ε_h)k)) running time for every k>h≥3
      status: OPEN
    - title: Reproduce counts on small instances
      status: OPEN
    - title: Cross-check against the independent Alman et al. construction
      status: OPEN
    - title: Refereeing
      status: OPEN
---

arXiv:2611.03880 (v1, 2026-11-02) claims an algebraic algorithm that detects, and even counts, $k$-cliques in $h$-uniform hypergraphs on $n$ vertices in time $O(n^{(1-\varepsilon_h)k})$ for a constant $\varepsilon_h>0$, for all constants $k>h\ge3$. The paper says this refutes the Hyperclique Hypothesis of Lincoln, Vassilevska Williams and Williams and, via known reductions, the $k$-AP Hypothesis, giving an $O(N^{2-\varepsilon_k})$ algorithm for $k$-term arithmetic progressions in subsets of $\{0,\dots,N\}$. It also lists faster Max-$h$-SAT algorithms as a consequence.
