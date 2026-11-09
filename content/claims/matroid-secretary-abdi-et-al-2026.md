---
type: claim
slug: matroid-secretary-abdi-et-al-2026
title: Optimal matroid secretary (ratio e) and single-sample matroid prophet (ratio 2) (preprint)
problem: matroid-secretary-conjecture
kind: ALGORITHM
claimedBy: Abdi, Banihashem, Hajiaghayi, Huang, Mittal and Singla (arXiv:2611.08869, preprint)
claimedAt: 2026-11-06
sources:
  - title: "Abdi, Banihashem, Hajiaghayi, Huang, Mittal, Singla: As Easy as Rank One: Optimal Algorithms for Matroid Secretary and Single-Sample Matroid Prophet (arXiv:2611.08869, preprint)"
    url: https://arxiv.org/abs/2611.08869
  - title: "Singla: The Matroid Secretary Conjecture is True (arXiv:2609.14555, preprint)"
    url: https://arxiv.org/abs/2609.14555
  - title: "Abdi, Banihashem, Hajiaghayi, Mittal: On the Strong Matroid Secretary Conjecture and Beyond (arXiv:2609.19118, preprint)"
    url: https://arxiv.org/abs/2609.19118
  - title: "Huang: Settling the Matroid Secretary Problem (arXiv:2609.30421, preprint)"
    url: https://arxiv.org/abs/2609.30421
  - title: "Bérczi, Dughmi, Livanos, Soto, Verdugo: The Strong Secretary Conjecture is True for Linear Matroids (arXiv:2609.20797, preprint)"
    url: https://arxiv.org/abs/2609.20797
checks:
  - title: Expert review of the acceptance-probability argument
    method: REVIEW
    note: Specialists in online selection should check the reference-state construction and the reversible-update argument that yield probability 1/e per element of the canonical optimum.
    sourceUrl: https://arxiv.org/abs/2611.08869
  - title: Consistency with the earlier preprints
    method: CROSS_CHECK
    note: Check that the claim matches 2609.14555 (1/4 per element), 2609.30421 (ratio e) and 2609.19118 (linear matroids, single-sample prophet 1/2) and the independent linear-matroid result 2609.20797.
    sourceUrl: https://arxiv.org/abs/2609.19118
  - title: Simulate the algorithm on small matroids
    method: REPRODUCE
    note: Implement the algorithm from the paper and estimate each canonical-optimum element's acceptance probability on small uniform, graphic and non-linear matroids; it should be at least 1/e.
  - title: Refereed publication or independent write-up
    method: REFEREE
    note: No conference or journal acceptance is recorded; the status stays UNDER_REVIEW until specialists confirm or find a gap.
site:
  status: UNDER_REVIEW
  statusNote: Submitted 6 November 2026 (v1), six authors, not refereed. DARC read only the arXiv abstract pages; the proofs have not been checked, and no independent verification is recorded. Earlier preprints by overlapping authors claimed weaker or partial versions (1/4 per element; linear matroids only), so the community will wait for expert reading.
  checks:
    - title: Expert review of the acceptance-probability argument
      status: OPEN
    - title: Consistency with the earlier preprints
      status: OPEN
    - title: Simulate the algorithm on small matroids
      status: OPEN
    - title: Refereed publication or independent write-up
      status: OPEN
---

arXiv:2611.08869 claims to resolve the strong form of the matroid secretary conjecture: an ordinal algorithm that accepts each element of the canonical optimum independently with probability $1/e$ on every matroid, needing only the number of elements $n$ in advance, so the competitive ratio is $e$. It also claims an optimal $2$-competitive single-sample matroid prophet algorithm that uses one sample per distribution and $O(n^2)$ independence queries and works for any fixed arrival order, and says both ratios are optimal even for rank-one matroids. The paper builds on and merges arXiv:2609.14555, 2609.19118 and 2609.30421.
