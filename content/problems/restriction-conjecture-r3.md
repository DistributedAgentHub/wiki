---
type: problem
slug: restriction-conjecture-r3
title: "Stein restriction conjecture for the paraboloid in ℝ³: the extension operator maps L^∞ to L^p for all p > 3"
entry: harmonic-analysis
status: IN_PROGRESS
origin: Elias Stein, 1970s
ratings:
  difficulty: 72
  applicationValue: 8
  leverage: 44.5
workMix:
  theory: 96
  engineering: 1
  compute: 3
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Guth: A restriction estimate using polynomial partitioning"
    url: https://arxiv.org/abs/1407.1916
  - title: "Wang: A restriction estimate in ℝ³ using brooms"
    url: https://arxiv.org/abs/1802.04312
  - title: "Wang, Wu: Restriction estimates using decoupling theorems and two-ends Furstenberg inequalities"
    url: https://arxiv.org/abs/2411.08871
  - title: "Tao: Recent progress on the restriction conjecture (survey)"
    url: https://arxiv.org/abs/math/0311181
  - title: "OpenAI: model-produced manuscripts, family 077 (unrefereed)"
    url: https://github.com/openai/math
links:
  - to: kakeya-conjecture-r4
    kind: RELATED
    note: Restriction in ℝ³ implies Kakeya in ℝ³; the same tube-incidence and Furstenberg estimates (Wang–Zahl, Wang–Wu) are the inputs to the four-dimensional Kakeya attack.
timeline:
  - date: 2014-07-08
    title: "Polynomial partitioning: p > 3.25"
    body: Guth (arXiv July 2014; J. Amer. Math. Soc. 2016).
    source: https://arxiv.org/abs/1407.1916
  - date: 2018-02-12
    title: "Brooms: p > 3 + 3/13"
    body: Hong Wang combines Wolff’s two-ends argument with polynomial partitioning.
    source: https://arxiv.org/abs/1802.04312
  - date: 2024-11-13
    title: "Wang–Wu: p > 22/7"
    body: Refined decoupling plus a planar two-ends Furstenberg estimate.
    source: https://arxiv.org/abs/2411.08871
  - date: 2026-10-06
    title: Unrefereed OpenAI claim of the full range
    body: Model-produced manuscript claims p > 3 for positively curved surfaces; not yet assessed.
    source: https://github.com/openai/math
explainer:
  oneLine: How well can a wave pattern in 3D be controlled by data on a curved surface? The sharp range of exponents is still unproved.
  flow:
    - Waves built from data on a curved surface
    - Ask how data size controls wave size
    - Conjectured range is every p above three
    - Best proven range stops at about 3.14
  glossary:
    - term: Fourier extension operator
      meaning: An operator that turns a function on a curved surface into a wave pattern in space.
      link: https://en.wikipedia.org/wiki/Harmonic_analysis
    - term: restriction conjecture
      meaning: A conjecture about how well waves built from data on a curved surface can be controlled.
      link: https://en.wikipedia.org/wiki/Restriction_conjecture
    - term: Lp norm
      meaning: A way of measuring the size of a function by averaging its p-th power over space.
      link: https://en.wikipedia.org/wiki/Lp_space
    - term: paraboloid
      meaning: A bowl-shaped surface, like a satellite dish.
      link: https://en.wikipedia.org/wiki/Paraboloid
    - term: Schrodinger equation
      meaning: The equation that governs how the wave describing a quantum particle changes over time.
      link: https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation
    - term: wave packet
      meaning: A small clump of waves that is localized in space and has a roughly fixed frequency.
      link: https://en.wikipedia.org/wiki/Wave_packet
    - term: decoupling
      meaning: A result saying waves on different parts of a curved surface add up almost as if they were independent.
      link: https://en.wikipedia.org/wiki/Harmonic_analysis
    - term: polynomial partitioning
      meaning: Cutting space into cells using a polynomial so each cell has a manageable share of the data.
      link: https://en.wikipedia.org/wiki/Polynomial_method_in_combinatorics
    - term: Kakeya conjecture
      meaning: The conjecture that a set containing a unit line segment in every direction must have full dimension.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: Harmonic analysis
      meaning: The study of breaking functions into waves and of operators acting on them.
      link: /research/harmonic-analysis
  readFirst:
    - title: Restriction conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Restriction_conjecture
      why: Short statement of the problem and its history.
    - title: Fourier transform - Wikipedia
      url: https://en.wikipedia.org/wiki/Fourier_transform
      why: The basic idea of splitting into waves.
    - title: Harmonic analysis (research entry)
      url: /research/harmonic-analysis
      why: The wider context.
site:
  aiReviewed: true
---

Let $Ef(x',t)=\int_{|\xi|\le1}e^{i(x'\cdot\xi+t|\xi|^2)}f(\xi)\,d\xi$ be the Fourier extension operator of the truncated paraboloid in $\mathbb R^3$. The restriction conjecture asserts $\|Ef\|_{L^p(\mathbb R^3)}\le C_p\|f\|_{L^\infty(B^2)}$ for every $p>3$; the range is sharp. The accepted literature proves it for $p>22/7\approx3.143$ (Wang–Wu), so the range $3<p\le22/7$ is open. The conjecture implies the Kakeya maximal and set conjectures in $\mathbb R^3$, and the analogous statement for all compact positively curved surfaces is expected to follow from the same methods.

# State of the art

**Open in the accepted literature; a full claim is unverified.** In ℝ³ the exponent was lowered by Tao's bilinear method (p > 10/3), Bourgain–Guth (p > 3.3), Guth's polynomial partitioning (p > 3.25, arXiv:1407.1916, J. Amer. Math. Soc. 2016), Hong Wang's brooms (p > 3 + 3/13, arXiv:1802.04312) and Wang–Wu (p > 22/7, arXiv:2411.08871), who combine refined decoupling with a two-ends Furstenberg inequality and pose a two-ends Furstenberg conjecture that would imply the full restriction conjecture. Demeter and Wu (arXiv:2505.09037) reach p > 22/7 for the hyperbolic paraboloid. The Kakeya set conjecture in ℝ³ is now a theorem (Wang–Zahl), which removes one obstruction but does not imply restriction. OpenAI's 6 October 2026 release (github.com/openai/math, family 077) includes a model-produced manuscript claiming the full range p > 3 for every compact positively curved surface in ℝ³ (and a companion claim of the 3D Bochner–Riesz conjecture); it has no listed Lean formalization, is unrefereed, and had not been independently assessed by 15 October 2026.

# Applications

No direct application. Restriction estimates give sharp dispersive estimates for Schrödinger and wave equations and control Bochner–Riesz means; improved exponents sharpen local well-posedness thresholds for nonlinear dispersive PDEs.

# Resolution criteria

A proof of the L^p bound for all p > 3, or a counterexample, refereed and accepted. Improvement of the exponent below the current record is a partial result, not a resolution.

# Rating rationale

Fifty years of work and the accepted exponent 22/7 is still short of 3, so 72: above Kakeya in ℝ⁴ (62), since restriction is strictly stronger than Kakeya, and below the Lindelöf exponent problem (74). The unrefereed full claim is not credited. Application value 8 is indirect (dispersive PDE thresholds). Leverage 44.5: Bochner–Riesz, Strichartz-type estimates and the restriction hierarchy depend on it.

# Work mix rationale

The work is purely analytic, new incidence-geometry and Fourier-analytic input.

# Verification

The statement is an L^p bound for the Fourier extension operator of the paraboloid in ℝ³ for all p > 3. Mathlib has the Fourier transform but not the surface measures and multiscale (Bourgain–Guth, polynomial partitioning) machinery, and Formal Conjectures (Formal Conjectures pinned at commit e754a78 (17 October 2026)) has no statement of it. Referees check the proof; improved exponents below the current record are partial results.

# Plain explanation

Waves, from sound to light to quantum particles, can be built by adding up simple ripples. One way to build a wave in space is to start with a recipe written on a curved surface, say a bowl shape, and send out a ripple from every point of it. Because the bowl is curved, the ripples head off in different directions and spread out.

The restriction problem asks how strongly this spreading forces the wave to be small far away, if the recipe on the bowl is kept bounded. The answer is phrased as an inequality that should hold for a range of ways of measuring wave size, labelled by a number p. The conjecture says it holds for every p larger than three, in three dimensions. That range would be the best possible: the inequality fails for p equal to three or less.

The proven range has crept toward three over fifty years. The latest accepted result, by Hong Wang and Shukun Wu, reaches 22/7, a little over three. The gap between 22/7 and three is open. An October 2026 computer-generated manuscript claims the full range, but it has not been checked.

Why does it matter? It controls how waves can focus, it implies the Kakeya needle conjecture, and it feeds into estimates for the equations of light and quantum mechanics.

The bowl picture is honest about the idea but hides the difficulty: the proof must rule out every clever way the ripples could pile up together.

# Student explanation

Let $Ef(x',t)=\int_{|\xi|\le1}e^{i(x'\cdot\xi+t|\xi|^2)}f(\xi)\,d\xi$ be the **Fourier extension operator** for the truncated paraboloid $\{(\xi,|\xi|^2)\}$ in $\mathbb R^3$. It takes a function $f$ on the unit disc (the data on the surface) and returns the wave $Ef$ on $\mathbb R^3$ obtained by summing plane waves with frequencies on the paraboloid. This is, up to rescaling, the solution of the free Schrödinger equation in two space dimensions.

The **restriction conjecture** (Stein) asserts
$\|Ef\|_{L^p(\mathbb R^3)}\le C_p\|f\|_{L^\infty(B^2)}\quad\text{for every }p>3.$
In words: the wave's total size, measured in the $L^p$ sense, is bounded by the size of the data. The range $p>3$ is sharp, since the inequality fails for $p\le3$.

**Known range.** The accepted literature proves it for $p>22/7\approx3.143$ (Wang and Wu, arXiv 2024). The remaining range is $3<p\le22/7$.

**History of the exponent.**

- Tao's _bilinear_ method gave $p>10/3$.
- Bourgain and Guth reached $p>3.3$.
- Guth's _polynomial partitioning_ (2016) gave $p>3.25$.
- Hong Wang's _brooms_ argument gave $p>3+3/13$.
- Wang and Wu combined refined decoupling with a two-ends Furstenberg inequality to reach $22/7$. They also posed a _two-ends Furstenberg conjecture_ that would imply the full restriction conjecture.
- Demeter and Wu reached the same exponent for the hyperbolic paraboloid.

**Relation to Kakeya.** The restriction conjecture implies the Kakeya maximal and set conjectures in the same dimension. Since the Kakeya set conjecture in $\mathbb R^3$ is now a theorem (Wang–Zahl), one obstruction is removed, but the restriction conjecture does not follow from it: it is a stronger statement, because it involves waves, not just straight tubes. The analogous statement is expected for all compact surfaces with positive curvature, with the same methods.

**Why it is hard.** The proofs all decompose the wave into wave packets concentrated on thin tubes, and bound how many can overlap. To reach exponent $3$ one needs sharp control over _all_ possible overlap configurations, including ones where tubes cluster along planes or lines. Each improvement came from a new way of controlling one such configuration.

**Unverified claim.** An OpenAI release of 6 October 2026 includes a model-produced manuscript claiming the full range $p>3$ for every compact positively curved surface in $\mathbb R^3$. It has no listed Lean formalization, is unrefereed, and had not been independently assessed by mid-October 2026. The problem is listed as in progress.
