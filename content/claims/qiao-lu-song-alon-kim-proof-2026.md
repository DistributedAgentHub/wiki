---
type: claim
slug: qiao-lu-song-alon-kim-proof-2026
title: A proof of the Alon–Kim conjecture on the chromatic index of t-simple uniform hypergraphs (Qiao–Lu–Song, preprint)
problem: alon-kim-chromatic-index-conjecture
kind: PROOF
claimedBy: Chengshuo Qiao, Zhijun Lu and Huimin Song, Shandong University (arXiv:2611.13698, preprint)
claimedAt: 2026-11-10
sources:
  - title: "Qiao, Lu, Song: The Proof of the Alon–Kim Conjecture (arXiv:2611.13698)"
    url: https://arxiv.org/abs/2611.13698
  - title: "Qiao, Lu, Song: full text (PDF)"
    url: https://arxiv.org/pdf/2611.13698
  - title: "Frederickson, Hao, Kelly: Improved bounds for the chromatic index of k-uniform hypergraphs (arXiv:2607.03573)"
    url: https://arxiv.org/abs/2607.03573
checks:
  - title: Expert reading of the reduction (Lemma 1.6)
    method: REVIEW
    note: A probabilistic combinatorialist should check that the partition of the edges into $s$ groups, with auxiliary hypergraphs of rank at most $k$, maximum degree at most $(t-1+1/t+\varepsilon)\Delta/s$ and pair-degree at most $\delta\Delta/s$, really preserves intersections (item iii), and that the colour count $(1+\varepsilon')((C+\varepsilon)\Delta+s)$ in Section 7 gives the stated bound.
    sourceUrl: https://arxiv.org/pdf/2611.13698
  - title: Convex-optimization step against tight examples
    method: CROSS_CHECK
    note: "Check the construction of random matchings from fractional matchings (Proposition 3.2, with the fixed-point and projection arguments) and test it on the extremal configurations: a projective plane of order $t-1$ with every line repeated $m$ times, where the coefficient $t-1+1/t$ is exactly attained, so any slack in the constants would show up there."
    sourceUrl: https://arxiv.org/pdf/2611.13698
  - title: Concentration step with parallel edges and large pair-degrees
    method: REVIEW
    note: Check the selection of parts, the variance bound of Lemma 5.1 and the choice of thresholds in Sections 4 and 5, in particular that multi-edges (the case $k=t$) and pair-degrees up to $\Delta$ are handled, and that the constants do not depend on the codegree thresholds in a circular way.
    sourceUrl: https://arxiv.org/pdf/2611.13698
  - title: Consistency with known cases
    method: CROSS_CHECK
    note: The theorem should agree with Kahn's theorem for $t=1$, with the Alon–Kim bound on intersecting hypergraphs, and with the Frederickson–Hao–Kelly bounds (about $2.3581\Delta$ for $k=3,t=2$ and $2.6791\Delta$ for $k=t=3$), being strictly stronger than the latter; any disagreement would signal an error.
    sourceUrl: https://arxiv.org/abs/2607.03573
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.13698
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (25 pages, v1 of 10 Nov 2026), unrefereed. DARC found no expert assessment yet. The authors disclose using an AI system (named gpt-6.1-sol) to explore proof strategies and calculations and to check and edit the text, and say they verified all statements and proofs themselves; no formal verification is mentioned. Hence origin MIXED. The problem stays OPEN until the proof is checked.
  checks:
    - title: Expert reading of the reduction (Lemma 1.6)
      status: OPEN
    - title: Convex-optimization step against tight examples
      status: OPEN
    - title: Concentration step with parallel edges and large pair-degrees
      status: OPEN
    - title: Consistency with known cases
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that for all fixed integers $k\ge t\ge1$ and $\varepsilon>0$, every $k$-uniform multihypergraph in which any two distinct edges share at most $t$ vertices has chromatic index at most $(t-1+1/t+\varepsilon)\Delta$ once the maximum degree $\Delta$ is large enough. The case $t=1$ is Kahn's theorem; for $t\ge2$ the earlier best bounds (Frederickson–Hao–Kelly, 2026) were far above this coefficient. The proof splits the edges into groups with small pair-degrees using random matchings built from fractional matchings (a fixed-point argument) and applies Kahn's theorem to each group.
