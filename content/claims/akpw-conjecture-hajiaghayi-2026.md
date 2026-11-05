---
type: claim
slug: akpw-conjecture-hajiaghayi-2026
title: O(log n) expected stretch for spanning-tree distributions (preprint, AI-assisted)
problem: akpw-spanning-tree-stretch-conjecture
kind: PROOF
claimedBy: Mohammad Hajiaghayi
claimedAt: 2026-11-03
formal: true
sources:
  - title: Hajiaghayi, Logarithmic Embeddings into Probabilistic Spanning Trees for Distances and Capacities (arXiv preprint)
    url: https://arxiv.org/abs/2611.05189
  - title: Preprint, HTML version (AI Use Statement, theorems, bibliography)
    url: https://arxiv.org/html/2611.05189
  - title: hajiaghayi/Spanning-Tree-Embedding (Lean files, zip)
    url: https://github.com/hajiaghayi/Spanning-Tree-Embedding
checks:
  - title: Rebuild the Lean files and list the axioms used
    method: FORMAL
    note: The repository holds one zip, SpanningTreeDecompositions-Theorem-1.1.zip, with no README. Unpack, build with a stated Lean and mathlib version, and report axioms and any sorry or admitted steps.
    sourceUrl: https://github.com/hajiaghayi/Spanning-Tree-Embedding
  - title: Check that the formal statement matches Theorem 1.1
    method: REVIEW
    note: Confirm that the formalized theorem covers spanning trees of arbitrary connected weighted graphs, the domination property d_T >= d_G, and expected stretch O(log n) per edge, not a weaker or specialized statement.
  - title: Expert review of the petal-decomposition and entropy argument
    method: REVIEW
    note: Specialists in tree embeddings and low-stretch spanning trees should check the protected-geodesic petal decomposition, the pathwise entropy bound (Sections 4–6, including the main-charge bound, Theorem 5.1) and the local averaging step against the Abraham–Neiman framework.
    sourceUrl: https://arxiv.org/html/2611.05189
  - title: Check the capacity version and the support-size lower bound
    method: CROSS_CHECK
    note: Compare the capacity claim and O(log n) oblivious routing with Räcke's framework and the Andersen–Feige equivalence, and check Theorem 1.2 (at least k^2/rho trees for congestion rho on the two-star family).
    sourceUrl: https://arxiv.org/abs/0907.3631
  - title: Refereed publication or independent write-up
    method: REFEREE
    note: No journal or conference acceptance is recorded; the status stays UNDER_REVIEW until specialists confirm or find a gap.
site:
  status: UNDER_REVIEW
  statusNote: Submitted 3 November 2026 (v1, the only version on 5 November 2026); single author, not refereed. The paper's AI Use Statement reports extensive interaction with OpenAI's Astra, with the author checking its responses, Astra also used to write and revise the manuscript, and Gemini Argon assisting in parts. It links a GitHub repository holding one zip of Lean files for the main theorems (Theorem 1.1); the repository has one commit, no README and no licence, and no independent rebuild or expert review is recorded. DARC has not checked the proof or the Lean files.
  checks:
    - title: Rebuild the Lean files and list the axioms used
      status: OPEN
    - title: Check that the formal statement matches Theorem 1.1
      status: OPEN
    - title: Expert review of the petal-decomposition and entropy argument
      status: OPEN
    - title: Check the capacity version and the support-size lower bound
      status: OPEN
    - title: Refereed publication or independent write-up
      status: OPEN
---

arXiv:2611.05189 claims that every connected n-vertex graph has a probability distribution over its spanning trees with expected stretch $O(\log n)$, which would settle the conjecture of Alon, Karp, Peleg and West (1991/1995) and remove the last $\log\log n$ factor from the Abraham–Neiman bound. It also claims a capacity version (every tree cut dominates the graph cut, expected tree cut within $O(\log n)$) that gives an $O(\log n)$-competitive fractional oblivious routing, matching $\Omega(\log n)$ lower bounds on diamond graphs, deterministic polynomial-time construction from at most $m$ trees for rational inputs, and an $\Omega(m/\rho)$ lower bound on the number of trees needed for congestion $\rho$. The method combines a protected-geodesic petal decomposition, a pathwise entropy bound, a local averaging inequality that derandomizes the radii and an adaptive rational packing procedure.
