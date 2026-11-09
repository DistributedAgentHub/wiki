---
type: claim
slug: k-clique-refutation-vassilevska-williams-zamir-2026
title: Algorithm finds and counts k-cliques in n^((ω/3−c)k) time for large k, refuting the k-Clique Hypothesis even if ω=2 (preprint)
problem: k-clique-hypothesis
kind: ALGORITHM
claimedBy: Virginia Vassilevska Williams and Or Zamir (arXiv preprint; the paper says an AI model contributed the key algebraic decomposition)
claimedAt: 2026-11-06
sources:
  - title: Vassilevska Williams, Zamir, The k-Clique hypothesis is dead, for good (arXiv preprint)
    url: https://arxiv.org/abs/2611.09764
  - title: Abboud, Backurs, Vassilevska Williams, If the Current Clique Algorithms are Optimal, so is Valiant's Parser (FOCS 2015; arXiv:1504.01431)
    url: https://arxiv.org/abs/1504.01431
checks:
  - title: Verify the algorithm and its O(n^((ω−δ)k/3)) running time for every k ≥ K₀
    method: REVIEW
    note: "Expert review of Theorems 1.1 and 1.2: the rank-or-swap decomposition (Lemma 3.3), the wedge-folding induction, that δ is independent of ω, and the handling of patterns without two disjoint wedges."
    sourceUrl: https://arxiv.org/abs/2611.09764
  - title: Reproduce counts on small instances
    method: REPRODUCE
    note: Implement the Nešetřil–Poljak reduction and the weighted nine-vertex pattern sum for tiny graphs and compare counts with brute force; the polynomial saving only shows asymptotically, so this checks correctness, not speed.
    sourceUrl: https://arxiv.org/abs/2611.09764
  - title: Cross-check the Max-2-CSP consequence
    method: CROSS_CHECK
    note: Compare the claimed 2^((ω/3−c)n+o(n)) Max-Cut / Max-2-SAT algorithm with the Williams (2005) 2^(ωn/3) algorithm on small instances and check that the improvement follows from the clique result.
    sourceUrl: https://arxiv.org/abs/2611.09764
  - title: Refereeing
    method: REFEREE
    note: Unrefereed preprint; no journal or conference submission is recorded.
site:
  status: UNDER_REVIEW
  statusNote: Posted 2026-11-06 as an unrefereed preprint by established researchers in fine-grained complexity. DARC has read the abstract, introduction and theorem statements but not checked the proofs. The paper's disclosure says the authors used a public AI model (ChatGPT-6) extensively and that the algebraic decomposition is almost purely the model's contribution, with the algorithmic framework mainly the authors'; DARC has not independently established how the result was produced. No expert assessment or formalization is recorded yet. The claim concerns the omega-based form of the hypothesis for large k, not the Combinatorial k-Clique Hypothesis.
  checks:
    - title: Verify the algorithm and its O(n^((ω−δ)k/3)) running time for every k ≥ K₀
      status: OPEN
    - title: Reproduce counts on small instances
      status: OPEN
    - title: Cross-check the Max-2-CSP consequence
      status: OPEN
    - title: Refereeing
      status: OPEN
---

arXiv:2611.09764 (v1, 2026-11-06; cs.DS, cs.CC) claims that for every sufficiently large $k$, $k$-cliques in an $n$-vertex graph can be found, and counted, in time $O(n^{(\omega-\delta)k/3})$ for a constant $\delta>0$ independent of $\omega$ and $k$, beating the Nešetřil–Poljak bound $n^{\omega k/3}$ even if $\omega=2$. The paper says this refutes the $k$-Clique Hypothesis. Its Theorem 1.2 states that weighted sums over copies of a nine-vertex pattern can be computed with $n^{3\omega-\epsilon+o(1)}$ arithmetic operations over fields of characteristic zero, and it lists faster Max-2-CSP, Max-Cut and Max-2-SAT algorithms ($2^{(\omega/3-c)n+o(n)}$) among the corollaries.
