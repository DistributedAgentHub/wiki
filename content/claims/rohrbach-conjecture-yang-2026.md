---
type: claim
slug: rohrbach-conjecture-yang-2026
title: Rohrbach's conjecture holds for all finite groups (Yang, preprint)
problem: rohrbach-conjecture-h-bases-finite-groups
kind: PROOF
claimedBy: Yong Yang (arXiv:2611.16938, preprint)
claimedAt: 2026-11-12
sources:
  - title: "Yang: Rohrbach's Conjecture for Finite Groups (arXiv:2611.16938)"
    url: https://arxiv.org/abs/2611.16938
  - title: Yang, HTML version v1
    url: https://arxiv.org/html/2611.16938v1
checks:
  - title: Expert reading of the reduction to simple groups
    method: REVIEW
    note: A finite-group theorist should check the lemmas on products, quotients by normal subgroups and index-d subgroups, and that the constant C does not grow with the length of the composition series.
    sourceUrl: https://arxiv.org/html/2611.16938v1
  - title: Expert reading of the groups of Lie type
    method: REVIEW
    note: Check the BN-pair Bruhat decompositions, the Singer-cycle transversals with the determinant correction for linear groups, the hyperoctahedral Bruhat transversal for classical groups and the longest-Weyl-element argument for exceptional groups, with attention to whether C is uniform in the rank and the field size.
    sourceUrl: https://arxiv.org/html/2611.16938v1
  - title: Consistency with the known cases
    method: CROSS_CHECK
    note: Compare the theorem with the case h = 2 for all finite groups (Kozma–Lev, 1992), finite nilpotent groups (Jia, 1992), solvable and alternating groups (Kozma–Lev, 1994) and the Babai–Gál–Kimmel–Lokam extension, and check that the cited results are used as stated.
    sourceUrl: https://arxiv.org/abs/2611.16938
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.16938
  - title: Formalization
    method: FORMAL
    note: No formalization is recorded; the proof depends on the classification of finite simple groups, which is not formalized.
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (v1, 12 November 2026, single author, no journal reference or comments), unrefereed; DARC found no expert assessment and no outside check. The paper is very short for the scope claimed (13 pages, eight sections and ten references), so every step, in particular the uniformity of the constant over infinite families of groups of Lie type, needs expert reading. Its acknowledgements say OpenAI's ChatGPT was used for mathematical exploration and editorial assistance and that the author checked the final arguments and is responsible for the contents; origin is therefore MIXED. No Lean or other formalization is mentioned, so formal is false. The problem stays OPEN.
  checks:
    - title: Expert reading of the reduction to simple groups
      status: OPEN
    - title: Expert reading of the groups of Lie type
      status: OPEN
    - title: Consistency with the known cases
      status: OPEN
    - title: Refereeing
      status: OPEN
    - title: Formalization
      status: OPEN
---

The preprint claims Theorem 1.1: there is an absolute constant $C\ge1$ such that for every finite group $G$, every $h\ge1$ and all $\alpha_1,\dots,\alpha_h\ge0$ with $\sum\alpha_i=1$, there are subsets $A_1,\dots,A_h\subseteq G$ with $G=A_1\cdots A_h$, $|A_1|\le|G|^{\alpha_1}$ and $|A_i|\le C|G|^{\alpha_i}$ for $2\le i\le h$. Theorem 1.2 deduces Rohrbach's conjecture, with $c_h=1+C(h-1)$. The proof reduces by induction along a normal series to finite simple groups, using lemmas on products, quotients and subgroups of index $d$; it treats solvable factors by cyclic progressions, alternating groups by the Kozma–Lev results, groups of Lie type by $BN$-pair Bruhat decompositions (Singer-cycle transversals with a determinant correction for linear groups, a Bruhat transversal indexed by the hyperoctahedral Weyl group for classical groups, a reduced word for the longest Weyl element for exceptional groups) and the finitely many sporadic groups by one constant. It depends on the classification of finite simple groups.
