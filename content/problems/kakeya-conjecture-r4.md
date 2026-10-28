---
type: problem
slug: kakeya-conjecture-r4
title: Kakeya sets in ℝ⁴ have Hausdorff dimension 4, and the Kakeya maximal function in ℝ⁴
entry: harmonic-analysis
status: IN_PROGRESS
origin: Besicovitch, 1919; Kakeya problem; formulated as a dimension conjecture by Wolff, 1990s
ratings:
  difficulty: 62
  applicationValue: 10
  leverage: 53
workMix:
  theory: 95
  engineering: 2
  compute: 3
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Wang, Zahl: Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions"
    url: https://arxiv.org/abs/2502.17655
  - title: "Katz, Zahl: A Kakeya maximal function estimate in four dimensions using planebrushes"
    url: https://arxiv.org/abs/1902.00989
  - title: "Choudhuri: New bound on the Hausdorff dimension of Kakeya sets in ℝ⁴ (unrefereed)"
    url: https://arxiv.org/abs/2610.12480
  - title: "Wang, Zakharov: Kakeya and Furstenberg problems for sticky sets of tubes"
    url: https://arxiv.org/abs/2609.22035
  - title: "OpenAI: model-produced manuscripts, family 074 (unrefereed)"
    url: https://github.com/openai/math
  - title: "IMU: Fields Medals 2026"
    url: https://www.mathunion.org/imu-awards/fields-medal/fields-medals-2026
timeline:
  - date: 2019-02-03
    title: Planebrush bound in ℝ⁴
    body: Katz–Zahl improve Wolff’s dimension 3 to about 3.059 (arXiv v1 February 2019).
    source: https://arxiv.org/abs/1902.00989
  - date: 2025-02-24
    title: Kakeya sets in ℝ³ have dimension 3
    body: Wang–Zahl, 127 pages.
    source: https://arxiv.org/abs/2502.17655
  - date: 2026-09-18
    title: Sticky case in ℝ⁴
    body: Wang–Zakharov prove the conjecture for sticky tube families with convex Wolff axioms.
    source: https://arxiv.org/abs/2609.22035
  - date: 2026-10-06
    title: Unrefereed OpenAI claim in ℝ⁴
    body: Full Hausdorff-dimension conjecture claimed in a model-produced manuscript; no independent assessment yet.
    source: https://github.com/openai/math
  - date: 2026-10-26
    title: OpenAI claims all-dimension local smoothing, covering Kakeya
    body: OpenAI says its models proved the local smoothing conjecture in every dimension, which it says would also give the Kakeya conjecture in all dimensions, with a Lean formalization DARC has not seen build; unrefereed AI output with no organized expert review yet. Status unchanged.
    source: https://openai.com/index/building-scientific-understanding-with-academic-communities/
explainer:
  oneLine: A needle that points in every direction in 4D space must sweep out a set of full 4D size. Proved only in 2D and 3D.
  flow:
    - A needle must point in every direction
    - Area can be tiny, so use dimension
    - "Conjecture: dimension is the full n"
    - Proved in 2D and 3D; 4D is open
  glossary:
    - term: Kakeya set
      meaning: A set containing a line segment of unit length in every direction.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: Hausdorff dimension
      meaning: A number, possibly fractional, measuring how large a set is by how efficiently small pieces cover it.
      link: https://en.wikipedia.org/wiki/Hausdorff_dimension
    - term: Minkowski dimension
      meaning: A dimension found by counting how many small boxes are needed to cover a set as the boxes shrink.
      link: https://en.wikipedia.org/wiki/Minkowski%E2%80%93Bouligand_dimension
    - term: Besicovitch set
      meaning: Another name for a Kakeya set, usually one shown to have zero area.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: maximal function
      meaning: A function recording, at each point, the largest average of another function over regions around that point.
      link: https://en.wikipedia.org/wiki/Hardy%E2%80%93Littlewood_maximal_function
    - term: tube
      meaning: A thin neighbourhood of a line segment, used to represent a slightly fuzzy line.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: polynomial partitioning
      meaning: Cutting space into cells using a polynomial so that each cell contains a manageable share of the data.
      link: https://en.wikipedia.org/wiki/Polynomial_method_in_combinatorics
    - term: Furstenberg set
      meaning: A set containing large pieces of lines in many directions; a generalization of Kakeya sets.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: Fourier extension operator
      meaning: An operator that turns a function on a curved surface into a wave pattern in space.
      link: https://en.wikipedia.org/wiki/Harmonic_analysis
    - term: Geometric measure theory
      meaning: The area of mathematics that measures very thin or fractal sets.
      link: /research/geometric-measure-theory
    - term: Kakeya conjecture
      meaning: The conjecture that a set containing a unit segment in every direction must have full dimension.
      link: https://en.wikipedia.org/wiki/Kakeya_conjecture
  readFirst:
    - title: Kakeya set - Wikipedia
      url: https://en.wikipedia.org/wiki/Kakeya_set
      why: The needle problem and the conjecture in plain terms.
    - title: Kakeya conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Kakeya_conjecture
      why: Status and approaches in each dimension.
    - title: Harmonic analysis (research entry)
      url: /research/harmonic-analysis
      why: Why Kakeya matters for waves.
    - title: Geometric measure theory (research entry)
      url: /research/geometric-measure-theory
      why: The dimension and incidence toolkit used.
raw:
  body: "A Kakeya set K ⊂ ℝ^n contains a unit line segment in every direction. Prove that for n = 4 every Kakeya set has Hausdorff and Minkowski dimension 4. The sharper Kakeya maximal function conjecture asserts ‖f*_δ‖_{L^4(S³)} ≤ C_ε δ^(−ε) ‖f‖_{L^4(ℝ⁴)}, where f*_δ(ω) is the supremum over δ-tubes of direction ω of the average of |f|. The three-dimensional dimension conjecture is a theorem (Wang–Zahl), so the open core is the genuinely four-dimensional geometry."
site:
  aiReviewed: true
---

# State of the art

**Open in the accepted literature for n = 4; a full claim is unverified.** Davies (1971) proved n = 2. Wang and Zahl (arXiv:2502.17655, 2025) proved that every Kakeya set in ℝ³ has Minkowski and Hausdorff dimension 3, reducing to the sticky case (arXiv:2210.09581, J. Amer. Math. Soc. 39 (2026)); the streamlined proof of Guth, Wang and Zahl (arXiv:2601.14411) is to appear in Mathematika, the IMU's 2026 Fields Medal citation for Hong Wang includes it, and a Lean formalization (Project Numina with Nankai University and ByteDance Seed Prover) was released in September 2026. In ℝ⁴, Wolff's hairbrush gives (n+2)/2 = 3; Katz and Zahl (arXiv:1902.00989, Rev. Mat. Iberoam. 2021) improved this to about 3.059 with planebrushes, and Choudhuri (arXiv:2610.12480, v1 30 August 2026, unrefereed) obtains 3.073 by feeding the three-dimensional theorem into the planebrush argument. Wang and Zakharov (arXiv:2609.22035, September 2026) prove the four-dimensional conjecture for sticky families of tubes satisfying convex Wolff axioms. OpenAI's 6 October 2026 release (github.com/openai/math, family 074) includes manuscripts claiming the Hausdorff-dimension conjecture in ℝ⁴ and the Kakeya maximal conjecture in ℝ³; no Lean formalization is listed for them, they are unrefereed, and no independent assessment had appeared by mid-October 2026. Dvir (2008) proved the finite-field analogue, and the Heisenberg-group example of Katz, Łaba and Tao shows that a proof must use real geometry.

# Applications

Kakeya estimates control Fourier restriction, Bochner–Riesz summability and Bourgain's line of results on dispersive PDEs; resolution in all dimensions would settle the endpoint cases of the restriction hierarchy, but there is no engineering application.

# Resolution criteria

A refereed or independently verified proof that every Kakeya set in ℝ⁴ has Hausdorff dimension 4 (or the maximal function bound with ε-loss). Results for sticky or special families, or claims with no independent assessment, do not resolve it.

# Rating rationale

Same grades as the calibrated Kakeya entry (62/10/53), which the calibration pass set from the accepted 3D proof and the 4D sticky case rather than the unrefereed full claim. The 4D accepted bound (3.073) is far from 4 and the non-sticky reduction is missing, but the tools are fresh, so it sits below restriction in ℝ³ (72) and just above the zero-density problem (61). Leverage 53 reflects restriction, Bochner–Riesz and maximal estimates that depend on Kakeya-type bounds.

# Work mix rationale

This is geometric measure theory and incidence geometry, with formalization as a minor future share.

# Verification

Statement: `Kakeya.kakeya_set_conjecture 4`, i.e. `KakeyaSetConjectureDim 4`, in [Wikipedia/Kakeya.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/Kakeya.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)): every Kakeya set in ℝ⁴ has Hausdorff dimension 4, using Mathlib's `dimH`; the cases n = 2 and n = 3 are labelled solved in the same file. A proof is accepted when it compiles against the pinned corpus and passes Comparator. The pack's sharper maximal-function form and the Minkowski-dimension version are not stated in the corpus, so progress on those alone is refereed.

# Plain explanation

Imagine a thin needle that you must be able to turn to point in every direction. How little space can it sweep through? In the plane, a famous trick shows you can make the area as small as you like. So area is a poor way to measure the answer. Mathematicians instead use dimension, a number that says how big a set is in a finer way: a line has dimension one, a flat sheet has dimension two.

The Kakeya conjecture says that even though the needle can sweep out tiny area, the set it sweeps must still have full dimension: two in the plane, three in ordinary space, four in four dimensions, and so on.

It was proved in two dimensions long ago, and in 2025 Hong Wang and Joshua Zahl proved it in three dimensions, a landmark result that specialists accept. Four dimensions is the next case and is open: the best accepted result is that the dimension is a little more than three. An October 2026 computer-generated manuscript claims the four-dimensional case, but nobody has checked it yet.

Why do mathematicians care about needles? Because the same question controls how waves of different directions can focus on a small region, and so it is bound up with Fourier analysis, wave equations and number theory.

Why is four dimensions harder? The 3D proof uses special features of three-dimensional geometry, and in four dimensions there are new ways for the needles to bunch up.

# Student explanation

**Statement.** A **Kakeya set** $K\subset\mathbb R^n$ contains a unit line segment in every direction. The **Kakeya set conjecture** says every such $K$ has Hausdorff and Minkowski dimension $n$. The stronger **Kakeya maximal function conjecture** asserts $\|f^*_\delta\|_{L^n(S^{n-1})}\le C_\varepsilon\delta^{-\varepsilon}\|f\|_{L^n(\mathbb R^n)}$ (here for $n=4$, the exponent is $4$), where $f^*_\delta(\omega)$ is the supremum, over $\delta$-thick tubes of direction $\omega$, of the average of $|f|$ over the tube. In words: a function cannot have large averages along tubes pointing in all directions unless it is large overall.

**Besicovitch sets and why dimension.** Besicovitch showed that Kakeya sets can have zero Lebesgue measure. So size must be measured by dimension, and the conjecture is that dimension cannot drop below $n$. A set of lower dimension would mean that unit segments in $n-1$ degrees of directional freedom overlap very strongly.

**Known results.**

- $n=2$: true (Davies, 1971).
- $n=3$: **Wang and Zahl** (arXiv 2025) proved that every Kakeya set in $\mathbb R^3$ has Minkowski and Hausdorff dimension $3$, by reducing to a 'sticky' case (a configuration in which tubes stay close together at all scales) and resolving that. A streamlined proof by Guth, Wang and Zahl followed, and the 2026 Fields Medal citation for Hong Wang includes the result. A Lean formalization was released in September 2026.
- $n=4$ (this problem): Wolff's _hairbrush_ argument gives dimension at least $(n+2)/2=3$. Katz and Zahl (2021) improved this to about $3.059$, and an unrefereed 2026 preprint (Choudhuri) claims $3.073$ by feeding in the three-dimensional theorem. Wang and Zakharov (preprint, September 2026) prove the four-dimensional statement for 'sticky' families of tubes. The conjecture predicts $4$. An OpenAI release of 6 October 2026 includes a manuscript claiming the full four-dimensional dimension conjecture; it is unrefereed, has no listed formalization, and had not been independently assessed by mid-October 2026.

**Why $\mathbb R^4$ is the next case.** The 3D proof relies on the geometry of a family of tubes in 3-space, where nearby tubes are controlled by a small number of 'planar' configurations. In $\mathbb R^4$ there are more intermediate subspaces (for example 2-planes inside 4-space), so there are more ways for tubes to concentrate, and tools such as polynomial partitioning and Furstenberg-set estimates need new ideas.

**Why it matters.** Kakeya-type estimates control the behaviour of Fourier extension operators, and so give sharp results in the **restriction conjecture**, in wave equation estimates and in counting problems from number theory. Related is the $\delta$-discretized formulation, in which the problem becomes a statement about how many $\delta$-balls can be covered by a family of tubes obeying a no-clumping condition.

The question is listed as in progress: no complete proof is accepted for $n=4$, and any full claim is unverified.
