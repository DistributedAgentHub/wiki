---
type: claim
slug: hou-qin-song-zhang-leray-hopf-nonuniqueness-2026
title: Non-unique Leray–Hopf solutions to the unforced 3D Navier–Stokes equations from an axisymmetric datum (Hou–Qin–Song–Zhang, preprint)
problem: leray-hopf-uniqueness-unforced-navier-stokes
kind: COUNTEREXAMPLE
claimedBy: Thomas Y. Hou, Xiang Qin, Peicong Song, Wenhan Zhang (arXiv:2611.06117, preprint)
claimedAt: 2026-11-04
sources:
  - title: "Hou, Qin, Song, Zhang: A Viscous Cascade Construction of Nonunique Leray–Hopf Solutions to the Unforced 3D Navier–Stokes Equations (arXiv:2611.06117)"
    url: https://arxiv.org/abs/2611.06117
  - title: Jia, Šverák (arXiv:1306.2136)
    url: https://arxiv.org/abs/1306.2136
  - title: "Albritton, Brué, Colombo: forced non-uniqueness (arXiv:2112.03116)"
    url: https://arxiv.org/abs/2112.03116
checks:
  - title: Expert reading of the cascade construction and the sign of the quadratic stress
    method: REVIEW
    note: A PDE specialist should check the growth of the time-dependent viscous linearisation, the sign of the full quadratic stress including the interaction with the reference velocity, and the transfer to the next larger scale.
    sourceUrl: https://arxiv.org/abs/2611.06117
  - title: "Leray–Hopf and suitability: energy equalities through t = 0"
    method: REVIEW
    note: Confirm that every solution in the family attains $u_0$ strongly in $L^2$, is smooth for $t>0$, and satisfies both the global and the local energy equality up to $t=0$, and that the solutions are pairwise distinct.
    sourceUrl: https://arxiv.org/abs/2611.06117
  - title: Compatibility with the L^3 and Lorentz-scale results
    method: CROSS_CHECK
    note: Check the claim against the Escauriaza–Seregin–Šverák $L^\infty_tL^3_x$ uniqueness criterion (the solutions are claimed not to lie in $L^\infty_tL^{3,r}_x$ for finite $r$), the weak-strong uniqueness statement the authors extend, and the sharpness remark for the $L^{3,\infty}$ endpoint.
    sourceUrl: https://arxiv.org/abs/2611.06117
  - title: Consistency with the Jia–Šverák programme and the forced construction
    method: CROSS_CHECK
    note: Compare the mechanism with the spectral picture of Jia–Šverák and the forced case of Albritton–Brué–Colombo; agreement in structure is informative but is not verification.
    sourceUrl: https://arxiv.org/abs/2112.03116
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.06117
site:
  status: UNDER_REVIEW
  statusNote: A 113-page arXiv preprint (v1, 4 Nov 2026; math.AP), unrefereed; DARC found no expert assessment yet. It builds on the Jia–Šverák programme (arXiv:1306.2136) and on Albritton–Brué–Colombo (forced case); unlike the convex-integration results of Buckmaster–Vicol, the solutions are claimed to satisfy the energy equalities. The authors state that no numerical eigenvalue computation is needed. The paper does not mention a formal verification, and the arXiv page does not mention AI assistance.
  checks:
    - title: Expert reading of the cascade construction and the sign of the quadratic stress
      status: OPEN
    - title: "Leray–Hopf and suitability: energy equalities through t = 0"
      status: OPEN
    - title: Compatibility with the L^3 and Lorentz-scale results
      status: OPEN
    - title: Consistency with the Jia–Šverák programme and the forced construction
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims a nonzero, divergence-free, axisymmetric initial velocity $u_0\in L^2(\mathbb{R}^3)$, smooth away from the origin, with $u_0\in L^{3,\infty}\cap\bigcap_{1\le q<3}L^q$ but $u_0\notin L^3$, and a continuum of pairwise distinct solutions of the unforced 3D Navier–Stokes equations on a common interval $[0,T]$. Each is said to be smooth for $t>0$, to attain $u_0$ strongly in $L^2$, to satisfy the global and local energy equalities down to $t=0$ (so to be Leray–Hopf and suitable) and to lie in $L^\infty_tL^{3,\infty}_x$, which the authors call a sharp endpoint for Leray–Hopf uniqueness in the Lorentz scale. The proof is described as purely analytic, using a cascade of geometrically separated Gaussian swirls. If correct, it answers the Leray–Hopf uniqueness question negatively without a force, for a datum with a singular point; it does not address regularity for smooth data.
