---
type: claim
slug: pach-tardos-zeng-quasiplanar-2026
title: "Quasiplanar graphs have linearly many edges: simplified version of a ChatGPT proof"
problem: pss-quasiplanar-conjecture
kind: PROOF
claimedBy: János Pach, Gábor Tardos and Ji Zeng (arXiv:2611.07314, preprint)
claimedAt: 2026-11-05
sources:
  - title: "Pach, Tardos, Zeng: On the number of edges in quasiplanar graphs (arXiv:2611.07314)"
    url: https://arxiv.org/abs/2611.07314
  - title: "Sadhu: Every k-Quasi-Planar Graph Has Linearly Many Edges (arXiv:2611.01509)"
    url: https://arxiv.org/abs/2611.01509
  - title: "Beeker, Lazarovich: Cubical accessibility and bounds on curves on surfaces (arXiv:1701.01313)"
    url: https://arxiv.org/abs/1701.01313
  - title: "Fox, Pach, Suk: Quasiplanar graphs, string graphs, and the Erdős–Gallai problem (arXiv:2112.02378)"
    url: https://arxiv.org/abs/2112.02378
checks:
  - title: Expert check of the proof
    method: REVIEW
    note: A specialist in geometric graph theory should check the triangulation setup, the width bound on the crossing posets, the four types of representatives and Lemmas 1 and 2, and that the total is $O_k(n)$.
    sourceUrl: https://arxiv.org/abs/2611.07314
  - title: Cross-check against the independent preprint
    method: CROSS_CHECK
    note: Compare with Sadhu's arXiv:2611.01509, which reaches a linear bound through the Beeker–Lazarovich theorem, and check how the purely combinatorial version relates to that theorem. The authors note the strategies are very similar.
    sourceUrl: https://arxiv.org/abs/2611.01509
  - title: Consistency with known cases
    method: CROSS_CHECK
    note: Check that the bound is consistent with the proved cases k = 3 (8n-20, and 6.5n-20 for simple drawings) and k = 4 (linear), and with the Fox–Pach–Suk polylogarithmic bound for larger k.
    sourceUrl: https://arxiv.org/abs/2112.02378
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.07314
site:
  status: UNDER_REVIEW
  statusNote: A preprint posted on arXiv on 5 Nov 2026, unrefereed. DARC found no expert assessment of it yet. The preprint says the original proof was produced by ChatGPT (named there as ChatGPT-6) and that the authors did not write it; they simplified it and made it purely combinatorial, hence origin MIXED. A separate preprint by Sadhu (arXiv:2611.01509, 1 Nov 2026) claims the same bound with a similar strategy via a Beeker–Lazarovich theorem. The problem stays OPEN until the proof is checked.
  checks:
    - title: Expert check of the proof
      status: OPEN
    - title: Cross-check against the independent preprint
      status: OPEN
    - title: Consistency with known cases
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that for every fixed $k$, a $k$-quasiplanar topological graph on $n$ vertices (no $k$ pairwise crossing edges) has $O_k(n)$ edges, proving the Pach–Shahrokhi–Szegedy conjecture. It gives an explicit bound of $2^{(2+o(1))k\log_2 k}\,n$ edges, and a bound of the same form times $(g+n)$ for graphs on a surface of genus $g$. It states that the proof was produced by ChatGPT and that the authors interpreted and simplified it into a self-contained, purely combinatorial argument.
