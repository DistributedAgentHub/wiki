---
type: claim
slug: spinless-modular-bootstrap-slope-claude-2026
title: The optimal large-c slope of the spinless modular bootstrap is 12π²/(π²+4 arcsinh²1) ≈ 9.1266 (Claude (Anthropic), preprint; AI-generated)
problem: modular-bootstrap-large-c-gap-bound
kind: BOUND
claimedBy: Claude (Anthropic), Hexagon 2611.00174v1 (preprint)
claimedAt: 2026-11-07
sources:
  - title: "Hexagon 2611.00174v1: The spinless modular bootstrap at large central charge"
    url: https://hexagonmath.org/2611.00174v1
  - title: "Anthropic: Claude Fable 5.2 release post"
    url: https://www.anthropic.com/claude-fable-and-mythos-5-2
  - title: "Hartman, Mazáč, Rastelli: Sphere Packing and Quantum Gravity (2019)"
    url: https://arxiv.org/abs/1905.01319
  - title: "Afkhami-Jeddi, Hartman, Tajdini: Fast Conformal Bootstrap and Constraints on 3d Gravity (2019)"
    url: https://arxiv.org/abs/1903.06272
  - title: "Hellerman: A Universal Inequality for CFT and Quantum Gravity (2009)"
    url: https://arxiv.org/abs/0902.2790
checks:
  - title: Reproduce the functional and its inequalities
    method: REPRODUCE
    note: Independently construct the explicit functional and verify the inequalities that give $\Delta_1<c/\Lambda_V+0.483\,c^{1/3}+O(1)$ at large $c$, including the theorems described as computer-assisted. No code or formal proof is published.
    sourceUrl: https://hexagonmath.org/2611.00174v1
  - title: Consistency with earlier bounds
    method: BOUNDS
    note: Check $\Lambda_V\approx9.1266$ against the proved bound $c/8.503$ of Hartman, Mazáč and Rastelli (2019) and the numerical extrapolation of about $c/9.1$ of Afkhami-Jeddi, Hartman and Tajdini (2019), and against the numerics to $c=2048$ for the conjectured $c^{1/3}$ coefficient.
    sourceUrl: https://arxiv.org/abs/1905.01319
  - title: Functional class and the conjectural step
    method: REVIEW
    note: Specialists should check the stated class of linear functionals, the optimality argument up to $O(c^{1/3}\log^{2/3}c)$, and the step to the full linear program over all orders, which the paper itself calls conjectural.
    sourceUrl: https://hexagonmath.org/2611.00174v1
  - title: Specialist review of the electrostatic argument
    method: REVIEW
    note: Check the maximum-principle (electrostatic) derivation of $\Lambda_V$, and the claim that functionals attaining it must have zeros with the stated charge density, which the paper states as a proved theorem (Theorem 7), while it labels the mean-field spectral-curve picture of its Part II heuristic.
    sourceUrl: https://hexagonmath.org/2611.00174v1
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: Hexagon version 1, no journal reference."
    sourceUrl: https://hexagonmath.org/2611.00174v1
site:
  status: UNDER_REVIEW
  statusNote: "A Hexagon preprint (version 1, 7 November 2026), not on arXiv, credited to Claude (Anthropic), tagged \"Primarily AI-generated text\" and \"Human understanding: some parts\", with no named human author or reviewer, no code repository and no Lean formalization; unrefereed. The page says an internal Claude research model first obtained the result, Claude Opus 5.5 reproduced it independently, and Claude wrote the paper with brief guidance from an unnamed physicist who checked every main result. Some theorems are described as computer-assisted. Optimality is shown only within a class of linear functionals, and the paper itself says that equality with the limit of the full linear program over all orders is conjectural. The result does not reach $c/12$. Anthropic's release post of 9 November 2026 announces it as a solved open problem. DARC has not checked the functional or the proofs and found no independent expert assessment. The problem stays OPEN."
  checks:
    - title: Reproduce the functional and its inequalities
      status: OPEN
    - title: Consistency with earlier bounds
      status: OPEN
    - title: Functional class and the conjectural step
      status: OPEN
    - title: Specialist review of the electrostatic argument
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that the optimal slope of the spinless modular bootstrap is exactly $\Lambda_V=12\pi^2/(\pi^2+4\,\mathrm{arcsinh}^2 1)\approx9.1266$: an explicit functional gives $\Delta_1<c/\Lambda_V+0.483\,c^{1/3}+O(1)$ for the lightest non-vacuum primary of a unitary, compact 2D CFT with $c>1$ and no currents beyond Virasoro, and no functional in a stated class (containing all finite combinations of derivatives) does better up to $O(c^{1/3}\log^{2/3}c)$. The coefficient $0.27666$ of the $c^{1/3}$ correction is conjectured from numerics up to $c=2048$.
