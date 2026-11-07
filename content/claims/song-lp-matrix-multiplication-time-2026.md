---
type: claim
slug: song-lp-matrix-multiplication-time-2026
title: Linear programming in matrix-multiplication time, restricted setting (preprint)
problem: lp-in-matrix-multiplication-time
kind: ALGORITHM
claimedBy: Zhao Song (arXiv:2611.07980, preprint)
claimedAt: 2026-11-05
sources:
  - title: "Song: Solving Linear Programs in the Matrix Multiplication Time (arXiv:2611.07980, preprint)"
    url: https://arxiv.org/abs/2611.07980
  - title: "Cohen, Lee, Song: Solving Linear Programs in the Current Matrix Multiplication Time (STOC 2019; arXiv:1810.07896)"
    url: https://arxiv.org/abs/1810.07896
  - title: "Jiang, Song, Weinstein, Zhang: Faster Dynamic Matrix Inverse for Faster LPs (arXiv:2004.07470)"
    url: https://arxiv.org/abs/2004.07470
  - title: "van den Brand: A Deterministic Linear Program Solver in Current Matrix Multiplication Time (SODA 2020; arXiv:1910.11957)"
    url: https://arxiv.org/abs/1910.11957
checks:
  - title: Expert review of the 124-page argument
    method: REVIEW
    note: Specialists in interior-point methods and dynamic matrix maintenance should check the central path analysis and the claimed running time.
    sourceUrl: https://arxiv.org/abs/2611.07980
  - title: Compare with the Cohen–Lee–Song and Jiang–Song–Weinstein–Zhang bounds
    method: CROSS_CHECK
    note: Check that the new bound is consistent with the earlier ones in the restricted setting (d ≤ n = O(d), bounded box, additive accuracy ε, expected time) and that the n² log n term and the missing n^(2+1/18) term are correctly accounted for.
    sourceUrl: https://arxiv.org/abs/2004.07470
  - title: Refereed publication or independent write-up
    method: REFEREE
    note: No conference or journal acceptance is recorded; the status stays UNDER_REVIEW until specialists confirm or find a gap.
site:
  status: UNDER_REVIEW
  statusNote: Submitted 5 November 2026 (v1), single author, 124 pages, not refereed. DARC read only the arXiv abstract page and the abstracts of the earlier papers; the proof has not been checked, and no independent verification or expert review is recorded. The result is stated for a restricted setting (feasible, bounded box, n = O(d), additive accuracy, expected time), so it is not a drop-in replacement for the general relative-accuracy bounds.
  checks:
    - title: Expert review of the 124-page argument
      status: OPEN
    - title: Compare with the Cohen–Lee–Song and Jiang–Song–Weinstein–Zhang bounds
      status: OPEN
    - title: Refereed publication or independent write-up
      status: OPEN
---

arXiv:2611.07980 claims a randomized algorithm for feasible linear programs with a bounded box, $n$ variables and $d\le n=O(d)$ linearly independent equality constraints, with additive accuracy $\varepsilon$ and expected running time $O((n^{\omega}+n^{2}\log n)\log(1/\varepsilon))$, where $\omega$ is the matrix multiplication exponent. The author says this answers the matrix-multiplication-time question from his 2019 Ph.D. thesis. The accepted general bounds, from the abstracts, are $O^*((n^{\omega}+n^{2.5-\alpha/2}+n^{2+1/6})\log(n/\delta))$ (Cohen, Lee and Song, STOC 2019) and exponent $2+\max\{1/18,\omega-2,(1-\alpha)/2\}$ (Jiang, Song, Weinstein and Zhang).
