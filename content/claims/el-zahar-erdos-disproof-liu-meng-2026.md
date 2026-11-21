---
type: claim
slug: el-zahar-erdos-disproof-liu-meng-2026
title: A disproof of the El-Zahar–Erdős conjecture (Liu and Meng, preprint)
problem: el-zahar-erdos-conjecture
kind: DISPROOF
claimedBy: Chenghua Liu and Boning Meng (arXiv:2611.24735, preprint; affiliation given as Renormalization Group, r13n.group)
claimedAt: 2026-11-18
sources:
  - title: "Liu, Meng: A disproof of the El-Zahar–Erdős conjecture (arXiv:2611.24735, 18 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.24735
  - title: Liu, Meng, arXiv HTML version of v1
    url: https://arxiv.org/html/2611.24735v1
  - title: "Nguyen, Scott, Seymour: On a problem of El-Zahar and Erdős (arXiv:2303.13449)"
    url: https://arxiv.org/abs/2303.13449
  - title: "Scott, Seymour: A survey of χ-boundedness (arXiv:1812.07500)"
    url: https://arxiv.org/abs/1812.07500
checks:
  - title: Reading the construction and the deletion step
    method: REVIEW
    note: An expert should read the definition of the block graph (r = 2d + 2 blocks, edge probabilities growing along a fixed ordering of block pairs), properties (O), (L) and (S), and the Erdős-style deletion that yields girth at least g and, via an independence-number bound of 2n, chromatic number at least d.
    sourceUrl: https://arxiv.org/html/2611.24735v1
  - title: "Lemma 2: one side of every anticomplete pair is 6-colourable"
    method: BOUNDS
    note: Check the claim that the weak-pair graph on each side is 2-degenerate (hence 3-colourable) and that the block structure and the bipartite argument raise this only to 6, for every anticomplete pair and not just those with large sides.
    sourceUrl: https://arxiv.org/html/2611.24735v1
  - title: Consistency with Nguyen, Scott and Seymour
    method: CROSS_CHECK
    note: The new graphs must still contain anticomplete A, B with G[A] of large minimum degree and chi(B) large, as proved in arXiv:2303.13449, and must not contradict the 1985 result that one side can have chromatic number at least 3. A bipartite side has large minimum degree but chromatic number 2, so no conflict is visible, but a reader should confirm it on the construction.
    sourceUrl: https://arxiv.org/abs/2303.13449
  - title: Formalization
    method: FORMAL
    note: No machine-checked version is mentioned in the preprint and DAH found none. Although the paper states that an AI model helped with the proof, no Lean or other formal artifact is cited.
    sourceUrl: https://arxiv.org/abs/2611.24735
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference and no comments. Expert response from the χ-boundedness community is pending."
    sourceUrl: https://arxiv.org/abs/2611.24735
site:
  status: UNDER_REVIEW
  statusNote: "An arXiv preprint (v1, submitted 18 November 2026 by Boning Meng, math.CO, 6 KB source), unrefereed; no journal reference and no comments listed. DAH read the arXiv abstract page and the full four-page text of the v1 PDF, from which the theorem statement and method description above are taken; DAH verified nothing in the proof. Origin: the paper's section 'Use of generative AI' reads 'We used OpenAI's GPT-6.2 Astra to help construct the counterexample and develop its proof' and adds that the authors take responsibility for the manuscript, so the origin is recorded as MIXED. Both authors give the Renormalization Group (r13n.group), with no university affiliation. Prior work as the paper describes it: El-Zahar and Erdős (1985) and Nguyen, Scott and Seymour (2024), whose one-sided result the new graphs must not contradict. DAH did not open the 1985 paper. The preprint does not say whether 7 is optimal. The problem stays OPEN."
  checks:
    - title: Reading the construction and the deletion step
      status: OPEN
    - title: "Lemma 2: one side of every anticomplete pair is 6-colourable"
      status: OPEN
    - title: Consistency with Nguyen, Scott and Seymour
      status: OPEN
    - title: Formalization
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims, for every $g\ge4$ and $d\ge1$, a graph with girth at least $g$ and chromatic number at least $d$ in which every anticomplete pair of vertex sets has a side of chromatic number at most $6$ (its Theorem 1); with $g=4$ the graphs are triangle-free, so the El-Zahar–Erdős conjecture would fail already for clique bound $t=3$ and $c=7$. The construction is a random graph on $2d+2$ equal blocks with rapidly increasing edge probabilities per block pair, followed by deletion of one vertex from each short cycle. Lemma 2 is said to give a 6-colouring of one side of any anticomplete pair, and Lemma 3 the probabilistic properties.
