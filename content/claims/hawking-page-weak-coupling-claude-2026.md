---
type: claim
slug: hawking-page-weak-coupling-claude-2026
title: The N=4 super Yang–Mills deconfinement transition is first order at weak coupling (Claude (Anthropic), preprint; AI-generated computation)
problem: n4-sym-weak-coupling-deconfinement-order
kind: COMPUTATION
claimedBy: Claude (Anthropic), Hexagon 2611.00175v1 (preprint)
claimedAt: 2026-11-07
sources:
  - title: "Hexagon 2611.00175v1: The Hawking–Page transition at weak coupling"
    url: https://hexagonmath.org/2611.00175v1
  - title: "Anthropic: Claude Fable 5.2 release post"
    url: https://www.anthropic.com/claude-fable-and-mythos-5-2
  - title: "Aharony et al.: The Hagedorn/Deconfinement Phase Transition in Weakly Coupled Large N Gauge Theories (2003)"
    url: https://arxiv.org/abs/hep-th/0310285
  - title: "Aharony et al.: A first order deconfinement transition in large N Yang-Mills theory on a small 3-sphere (2005)"
    url: https://arxiv.org/abs/hep-th/0502149
checks:
  - title: Independent three-loop computation
    method: REPRODUCE
    note: An independent computation of the quartic Polyakov-loop coefficient $b$ for $\mathcal N=4$ super Yang–Mills at large $N$, by a method different from the preprint's, should confirm the sign and the value $-1.48\times10^{-3}\lambda^2$. The reported second Claude computation is not in the paper and cannot count as independent.
    sourceUrl: https://hexagonmath.org/2611.00175v1
  - title: Hagedorn temperature and the pure Yang–Mills value
    method: CROSS_CHECK
    note: Compare the two-loop Hagedorn temperature with the integrability result, and the method and result for pure Yang–Mills theory with the first-order value of Aharony et al. (2005). The analytic derivation of the one finite counterterm used in the Hagedorn cross-check is not given.
    sourceUrl: https://arxiv.org/abs/hep-th/0502149
  - title: Normalization of the coefficient
    method: CROSS_CHECK
    note: Resolve the relation between the abstract's value $b=-1.48\times10^{-3}\lambda^2$ and the body's value $-36.94(1)\,g^4$ in another normalization, and confirm they are the same quantity.
    sourceUrl: https://hexagonmath.org/2611.00175v1
  - title: Specialist review
    method: REVIEW
    note: Experts in large-N gauge theory on $S^3$ should check the Hamiltonian computation and the conclusion that $b<0$ gives a single first-order transition slightly below the Hagedorn temperature, within the stated limits (leading order in $1/N$, order $\lambda^2$).
    sourceUrl: https://hexagonmath.org/2611.00175v1
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: Hexagon version 1, no journal reference."
    sourceUrl: https://hexagonmath.org/2611.00175v1
site:
  status: UNDER_REVIEW
  statusNote: "A Hexagon preprint (version 1, 7 November 2026), not on arXiv, credited to Claude (Anthropic), tagged \"Primarily AI-generated text\" and \"Human understanding: some parts\", with no named human author or reviewer, no code repository and no formal proof; unrefereed. The page says an internal Claude research model, prompted by an unnamed physicist who checked it against known special cases, obtained the result, and that a separate Claude computation by a different method, not included, agrees. Stated limits: leading order in 1/N and order λ² only, no demonstration that the first-order line continues to strong coupling, and one finite counterterm, used only for the Hagedorn-temperature cross-check, has not been derived analytically. The body quotes b in a different normalization from the abstract. Anthropic's release post of 9 November 2026 announces it as a solved open problem. DARC has not checked the computation and found no independent expert assessment. The problem stays OPEN."
  checks:
    - title: Independent three-loop computation
      status: OPEN
    - title: Hagedorn temperature and the pure Yang–Mills value
      status: OPEN
    - title: Normalization of the coefficient
      status: OPEN
    - title: Specialist review
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that the quartic coefficient of the Polyakov-loop effective action for $\mathcal N=4$ super Yang–Mills on $S^3$ at large $N$, which first appears at three loops, is $b=-1.48\times10^{-3}\lambda^2$ (the value in the abstract), so that the weak-coupling deconfinement transition is first order and lies slightly below the Hagedorn temperature, resolving the question left open by Aharony, Marsano, Minwalla, Papadodimas and Van Raamsdonk (2003). The computation is stated to reproduce the two-loop Hagedorn temperature known from integrability.
