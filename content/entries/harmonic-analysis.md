---
type: entry
slug: harmonic-analysis
title: Harmonic analysis
field: analysis-pde
kind: THEORY
status: ACTIVE
summary: "The study of decomposing functions into waves (Fourier analysis) and of the operators that act on them. Its modern core is geometric: restriction, decoupling and Kakeya-type incidence problems."
reliedOn: Harmonic analysis provides the estimates behind linear and nonlinear PDE (Strichartz and dispersive estimates), parts of analytic number theory (exponential sums, the circle method), signal processing and uncertainty principles, and Fourier-analytic bounds for sphere packings.
dependsOn:
  - geometric-measure-theory
  - sobolev-spaces-energy-methods
references:
  - title: J. Bourgain and C. Demeter, The proof of the l^2 decoupling conjecture
    url: https://arxiv.org/abs/1403.5335
    kind: paper
  - title: J. Bourgain, C. Demeter, L. Guth, Proof of the main conjecture in Vinogradov's mean value theorem for degrees higher than three
    url: https://arxiv.org/abs/1512.01565
    kind: paper
  - title: J. Bourgain, Decoupling, exponential sums and the Riemann zeta function
    url: https://arxiv.org/abs/1408.5794
    kind: paper
  - title: H. Wang and S. Wu, Restriction estimates using decoupling theorems and two-ends Furstenberg inequalities
    url: https://arxiv.org/abs/2411.08871
    kind: paper
  - title: H. Wang and J. Zahl, Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions
    url: https://arxiv.org/abs/2502.17655
    kind: paper
  - title: "T. Tao, Rotating needles in space: the road to the Kakeya conjecture, and why it matters"
    url: https://arxiv.org/abs/2608.22209
    kind: paper
  - title: International Mathematical Union, Fields Medals 2026
    url: https://www.mathunion.org/imu-awards/fields-medal/fields-medals-2026
    kind: docs
timeline:
  - date: 2014-03-21
    title: The l^2 decoupling theorem
    body: Bourgain and Demeter prove the $\ell^2$ decoupling conjecture for compact hypersurfaces with positive definite second fundamental form, with applications to discrete restriction and Strichartz estimates on tori.
    source: https://arxiv.org/abs/1403.5335
  - date: 2015-12-04
    title: Vinogradov's mean value theorem via decoupling
    body: Bourgain, Demeter and Guth prove the main conjecture of Vinogradov's mean value theorem in degrees above three, via a sharp decoupling inequality for curves.
    source: https://arxiv.org/abs/1512.01565
  - date: 2024-11-13
    title: Restriction estimates from Furstenberg inequalities
    body: Wang and Wu combine decoupling with two-ends Furstenberg estimates to improve the restriction conjecture in dimension three and higher.
    source: https://arxiv.org/abs/2411.08871
  - date: 2025-02-24
    title: Wang and Zahl prove Kakeya in R^3
    body: Every Kakeya set in $\mathbb{R}^3$ has Minkowski and Hausdorff dimension 3 (arXiv preprint, accepted by specialists; a streamlined proof by Guth, Wang and Zahl, 2026, is to appear in Mathematika).
    source: https://arxiv.org/abs/2502.17655
explainer:
  oneLine: Splitting signals and functions into pure waves, and understanding what that splitting can and cannot do.
  flow:
    - Break a signal into pure waves
    - Ask when the pieces rebuild the signal
    - Wave focusing becomes a geometry problem
    - Kakeya and restriction are the core questions
  glossary:
    - term: Fourier transform
      meaning: A way of splitting a function into waves of different frequencies.
      link: https://en.wikipedia.org/wiki/Fourier_transform
    - term: Fourier series
      meaning: A way of writing a repeating signal as a sum of sines and cosines.
      link: https://en.wikipedia.org/wiki/Fourier_series
    - term: Lp space
      meaning: The functions whose p-th power has a finite total integral; a way to measure a function's size.
      link: https://en.wikipedia.org/wiki/Lp_space
    - term: maximal function
      meaning: A function recording, at each point, the largest average of another function over balls around that point.
      link: https://en.wikipedia.org/wiki/Hardy%E2%80%93Littlewood_maximal_function
    - term: Kakeya set
      meaning: A set containing a line segment of unit length in every direction.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: restriction conjecture
      meaning: A conjecture about how well waves built from data on a curved surface can be controlled.
      link: https://en.wikipedia.org/wiki/Restriction_conjecture
    - term: decoupling
      meaning: A result saying waves on different parts of a curved surface add up almost as if they were independent.
      link: https://en.wikipedia.org/wiki/Harmonic_analysis
    - term: singular integral
      meaning: An integral operator with a kernel that blows up near zero, such as the Hilbert transform.
      link: https://en.wikipedia.org/wiki/Singular_integral
    - term: polynomial partitioning
      meaning: Cutting space into cells using a polynomial so that each cell has a manageable share of the data.
      link: https://en.wikipedia.org/wiki/Polynomial_method_in_combinatorics
    - term: uncertainty principle
      meaning: A function and its Fourier transform cannot both be sharply concentrated.
      link: https://en.wikipedia.org/wiki/Fourier_transform#Uncertainty_principle
    - term: Besicovitch set
      meaning: A Kakeya set of zero area or volume; Besicovitch showed such sets exist.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: Fourier multiplier
      meaning: An operation that changes a signal by boosting or cutting each of its frequencies by a set amount.
      link: https://en.wikipedia.org/wiki/Multiplier_(Fourier_analysis)
  readFirst:
    - title: But what is the Fourier Transform? (3Blue1Brown)
      url: https://www.youtube.com/watch?v=spUNpyF58BY
      why: The clearest visual explanation of splitting a signal into waves.
    - title: Fourier transform - Wikipedia
      url: https://en.wikipedia.org/wiki/Fourier_transform
      why: Definitions, properties and applications.
    - title: Kakeya set - Wikipedia
      url: https://en.wikipedia.org/wiki/Kakeya_set
      why: The needle problem at the core of modern research.
    - title: Geometric measure theory (research entry)
      url: /research/geometric-measure-theory
      why: The geometric toolkit behind the Kakeya problem.
raw:
  body: "## Basic objects\n\nFor $f\\in L^1(\\mathbb{R}^n)$ the Fourier transform is $\\hat f(\\xi)=\\int f(x)e^{-2\\pi i x\\cdot\\xi}\\,dx$. The theory asks when the inverse transform recovers $f$ and in what sense, how norms of $f$ and $\\hat f$ are related, and how operators defined through $\\hat f$ (multipliers, singular integrals, maximal functions) act on function spaces such as $L^p$.\n\n## Classical results\n\n- **Convergence of Fourier series.** Carleson (1966) proved that the Fourier series of an $L^2$ function converges almost everywhere; Hunt extended it to $L^p$, $p>1$. In several variables the situation for general summation shapes is subtle: Fefferman (about 1970) used a Kakeya-type construction (Besicovitch sets) to show that the ball multiplier is unbounded on $L^p$ for $p\\ne2$.\n- **Calderón-Zygmund theory** handles singular integrals, and the Hardy-Littlewood maximal function gives a template for Lebesgue differentiation.\n- **Uncertainty principles** state that a function and its Fourier transform cannot both be concentrated; the sign-uncertainty versions have been tied to sphere-packing bounds.\n\n## Geometry enters: restriction and Kakeya\n\nThe Fourier transform of a measure on a curved hypersurface (a sphere, say) decays, and the *restriction conjecture* of Stein asks for the precise range of $L^p$ estimates for restricting $\\hat f$ to the sphere. It implies the *Kakeya set conjecture*: a compact set in $\\mathbb{R}^n$ containing a unit segment in every direction must have Hausdorff dimension $n$. The Kakeya conjecture was proved in dimension 3 by Wang and Zahl (arXiv 2025). The proof has not yet appeared in a journal, but it is accepted by specialists, and a streamlined version is to appear in Mathematika. The conjecture is open in the accepted literature for $n\\ge4$. Bochner-Riesz summation, Kakeya maximal functions and restriction form a web of conjectures, and the Kakeya problem has analogues over finite fields (Dvir proved the polynomial-method bound in 2008) and in arithmetic settings.\n\n## Decoupling\n\nBourgain and Demeter's $\\ell^2$ decoupling theorem (2014) says that a function whose Fourier transform is supported near a curved hypersurface satisfies an $L^p$ inequality as if its pieces, separated in frequency, behaved like independent random waves. Decoupling is sharp for a range of $p$ and has widespread consequences: the Vinogradov mean value theorem (Bourgain, Demeter and Guth, 2015), new bounds for the zeta function on the critical line (Bourgain, 2014), and Strichartz estimates on tori. Together with polynomial partitioning (Guth), it changed the technique used for restriction and Kakeya problems.\n\n## Where the frontier is\n\nWang and Wu (2024) used decoupling together with Furstenberg-set estimates to improve restriction in dimensions three and above, in a form that also recovers Wolff's classical $5/2$ bound for Kakeya sets in $\\mathbb{R}^3$. Wang and Zahl's proof of the Kakeya set conjecture in $\\mathbb{R}^3$ (a 127-page argument, February 2025) combines the sticky case, a multi-scale reduction and new geometric ideas; Guth, Wang and Zahl posted a streamlined version in 2026. Hong Wang received a 2026 Fields Medal; the IMU citation includes her work on Fourier restriction, Furstenberg sets and the Kakeya problem in three dimensions. Whether such methods extend to higher dimensions is the major open direction. Wang and Zakharov (preprint, September 2026) prove the four-dimensional statement for sticky families of tubes. OpenAI's October 2026 manuscript release claims the full Hausdorff-dimension conjecture in $\\mathbb{R}^4$ and the Kakeya maximal conjecture in $\\mathbb{R}^3$; these claims are unrefereed and were unverified as of mid-October 2026.\n\n## Applications\n\nHarmonic analysis is behind the Strichartz estimates used in local well-posedness theory for nonlinear Schrödinger and wave equations; it supplies mean-value estimates for exponential sums used in additive number theory; and it provides the mathematical basis for time-frequency analysis, wavelets (as used in image compression) and compressed sensing. These applications mostly rest on the classical parts of the theory; the geometric frontier above has so far had indirect effects."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

When you hear a chord, your ear can pick out the separate notes. Fourier analysis is the mathematical version of this: any reasonable signal, a sound, an image or a heartbeat trace, can be written as a sum of pure waves of different frequencies. This idea powers music compression, medical imaging, radio and countless other technologies.

Harmonic analysis is the research field that asks the hard questions behind this idea. When does the sum of waves really give back the signal? How do the sizes of the waves relate to the size of the signal? What happens when we process a signal by boosting some frequencies and cutting others?

In modern research, many of the hardest questions turn out to be geometric. Consider the needle problem: a needle must be able to point in every direction, yet sweep out as small a region as possible. This is the Kakeya problem. It seems like pure geometry, but it controls how waves can focus and overlap, so it is tied to deep questions about how Fourier analysis behaves in several dimensions.

A second modern theme is restriction: how much information does a wave pattern keep when you only look at it along a curved surface? Again, the answer depends on how thin sets and lines can overlap.

The chord analogy is a good start, but breaks for images and higher dimensions, where waves travel in many directions and the geometry takes over.

# Student explanation

For $f\in L^1(\mathbb R^n)$ the **Fourier transform** is $\hat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,dx$. It records how much of each frequency $\xi$ is in $f$. Harmonic analysis asks when the inverse transform recovers $f$ and in what sense, how norms of $f$ and $\hat f$ compare, and how operators defined through $\hat f$ (multipliers, singular integrals, maximal functions) act on function spaces such as $L^p$.

**Classical results.**

- **Carleson's theorem** (1966): the Fourier series of a square-integrable function on the circle converges at almost every point. Hunt extended this to $L^p$ for $p>1$.
- **Fefferman** (about 1970) used a Kakeya-type construction (a _Besicovitch set_) to show that the ball multiplier, which restricts to frequencies in a round ball, is unbounded on $L^p$ for $p\ne2$. So the shape of the cut-off in several dimensions matters.
- **Calderón–Zygmund theory** handles singular integrals, and the **Hardy–Littlewood maximal function**, which takes the largest local average of a function around each point, is the template for the Lebesgue differentiation theorem.
- **Uncertainty principles** say a function and its Fourier transform cannot both be sharply concentrated. Sign-uncertainty versions have been tied to sphere-packing bounds.

**The geometric core.**

- **Kakeya.** A Kakeya set contains a unit line segment in every direction. The conjecture says such sets in $\mathbb R^n$ have dimension $n$. It is known in the plane (Davies, 1971) and was proved in $\mathbb R^3$ by Wang and Zahl (2025; accepted by specialists, journal publication pending); it is open in the accepted literature for $n\ge4$. The _maximal function_ version bounds the size of averages of $f$ over thin tubes pointing in different directions.
- **Restriction.** The extension operator $Ef$ takes a function on a curved surface (a sphere or paraboloid) and returns the wave pattern obtained by taking the inverse Fourier transform of $f$ times the surface measure. The restriction conjecture asks for which $p$ one has $\|Ef\|_{L^p}\lesssim\|f\|_{L^\infty}$. It implies the Kakeya conjecture in the same dimension.
- **Decoupling** (Bourgain–Demeter, 2015) shows that waves with frequencies on different parts of a curved surface behave almost orthogonally, and gave sharp new estimates in number theory.

The tools have moved from Fourier methods to combinatorial geometry: bilinear estimates, **polynomial partitioning** (Guth) and incidence bounds. This is why harmonic analysis today shares techniques with geometric measure theory and number theory.
