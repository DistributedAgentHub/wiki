---
type: entry
slug: geometric-measure-theory
title: Geometric measure theory and incidence geometry
field: analysis-pde
kind: THEORY
status: ACTIVE
summary: "Hausdorff and box dimension, Frostman measures, energies and Fourier dimension, projection theorems, Kakeya and Furstenberg sets, and polynomial-method incidence bounds: the toolkit behind Kakeya and restriction."
reliedOn: Harmonic analysis relies on it for Kakeya, Furstenberg and tube-incidence estimates, and through that entry the Kakeya conjecture in ℝ⁴ and the restriction conjecture in ℝ³ depend on it. Partial-regularity theory for Navier–Stokes uses its Hausdorff-measure estimates for singular sets.
references:
  - title: P. Mattila, Geometry of Sets and Measures in Euclidean Spaces (Cambridge University Press, 1995)
    url: https://doi.org/10.1017/CBO9780511623813
    kind: book
  - title: P. Mattila, Fourier Analysis and Hausdorff Dimension (Cambridge University Press, 2015)
    url: https://doi.org/10.1017/CBO9781316227619
    kind: book
  - title: L. Guth, Polynomial Methods in Combinatorics (AMS University Lecture Series 64, 2016)
    url: https://doi.org/10.1090/ulect/064
    kind: book
  - title: "K. Falconer, Fractal Geometry: Mathematical Foundations and Applications, 3rd ed. (Wiley, 2014)"
    url: https://www.wiley.com/en-us/Fractal+Geometry%3A+Mathematical+Foundations+and+Applications%2C+3rd+Edition-p-9781119942399
    kind: book
  - title: T. Wolff, An improved bound for Kakeya type maximal functions, Rev. Mat. Iberoam. 11 (1995)
    url: https://doi.org/10.4171/RMI/188
    kind: paper
  - title: Z. Dvir, On the size of Kakeya sets in finite fields
    url: https://arxiv.org/abs/0803.2336
    kind: paper
  - title: L. Guth and N. H. Katz, On the Erdős distinct distance problem in the plane
    url: https://arxiv.org/abs/1011.4105
    kind: paper
  - title: K. Ren and H. Wang, Furstenberg sets estimate in the plane
    url: https://arxiv.org/abs/2308.08819
    kind: paper
timeline:
  - date: 1982-11-01
    title: Partial regularity for Navier–Stokes
    body: Caffarelli, Kohn and Nirenberg prove that the singular set of a suitable weak solution of the 3D Navier–Stokes equations has zero one-dimensional parabolic Hausdorff measure (Comm. Pure Appl. Math. 35).
    source: https://doi.org/10.1002/cpa.3160350604
  - date: 2008-03-16
    title: Finite-field Kakeya by the polynomial method
    body: Dvir proves that a Kakeya set in the n-dimensional vector space over the field with q elements has at least about q^n/n! points (J. Amer. Math. Soc. 2009).
    source: https://arxiv.org/abs/0803.2336
  - date: 2010-11-17
    title: Polynomial partitioning and distinct distances
    body: Guth and Katz show that N points in the plane determine at least a constant times N/log N distinct distances, introducing polynomial partitioning.
    source: https://arxiv.org/abs/1011.4105
  - date: 2023-08-17
    title: Furstenberg set conjecture in the plane
    body: Ren and Wang prove the sharp lower bound min(s+t, (3s+t)/2, s+1) for the Hausdorff dimension of (s,t)-Furstenberg sets and resolve Oberlin's projection question.
    source: https://arxiv.org/abs/2308.08819
  - date: 2025-02-24
    title: Kakeya sets in ℝ³ have dimension 3
    body: Wang and Zahl prove volume estimates for unions of tubes that obey convex Wolff axioms, giving Minkowski and Hausdorff dimension 3 for every Kakeya set in ℝ³ (arXiv preprint; streamlined proof by Guth, Wang and Zahl, arXiv 2026).
    source: https://arxiv.org/abs/2502.17655
explainer:
  oneLine: Ways of measuring the size of very thin or fractal sets, and counting how lines and points meet.
  flow:
    - Ordinary length and area are too coarse
    - Dimension counts how covers grow when zooming in
    - Thin sets carry spread-out measures
    - Incidence counting limits how lines can overlap
  glossary:
    - term: Hausdorff dimension
      meaning: A number, possibly fractional, measuring how large a set is by how efficiently small pieces cover it.
      link: https://en.wikipedia.org/wiki/Hausdorff_dimension
    - term: box-counting dimension
      meaning: A dimension found by counting how many small boxes are needed to cover a set as the boxes shrink.
      link: https://en.wikipedia.org/wiki/Minkowski%E2%80%93Bouligand_dimension
    - term: fractal
      meaning: A shape with detail at every scale, often with a non-whole-number dimension.
      link: https://en.wikipedia.org/wiki/Fractal
    - term: Frostman measure
      meaning: A way of spreading mass over a set so that no small ball gets too much; it exists exactly when the set is large enough.
      link: https://en.wikipedia.org/wiki/Frostman_lemma
    - term: Kakeya set
      meaning: A set containing a line segment of unit length in every direction.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: Kakeya conjecture
      meaning: The conjecture that a Kakeya set in n dimensions must have dimension n.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: Fourier transform
      meaning: A way of splitting a function or measure into waves of different frequencies.
      link: https://en.wikipedia.org/wiki/Fourier_transform
    - term: incidence geometry
      meaning: The study of how often points, lines and other simple shapes touch each other.
      link: https://en.wikipedia.org/wiki/Incidence_geometry
    - term: Szemeredi-Trotter theorem
      meaning: A sharp bound on the number of times a set of points can lie on a set of lines in the plane.
      link: https://en.wikipedia.org/wiki/Szemer%C3%A9di%E2%80%93Trotter_theorem
    - term: polynomial method
      meaning: Using a polynomial that vanishes on a given set of points to cut space into simple pieces.
      link: https://en.wikipedia.org/wiki/Polynomial_method_in_combinatorics
    - term: Lebesgue measure
      meaning: The usual notion of length, area or volume, extended to very general sets.
      link: https://en.wikipedia.org/wiki/Lebesgue_measure
    - term: Furstenberg set
      meaning: A set that contains a large piece of a line in each of many directions; a generalization of Kakeya sets.
      link: https://en.wikipedia.org/wiki/Kakeya_set
  readFirst:
    - title: Hausdorff dimension - Wikipedia
      url: https://en.wikipedia.org/wiki/Hausdorff_dimension
      why: Gentle introduction with examples from fractals.
    - title: Kakeya set - Wikipedia
      url: https://en.wikipedia.org/wiki/Kakeya_set
      why: The needle problem and where the conjecture stands.
    - title: Fractal - Wikipedia
      url: https://en.wikipedia.org/wiki/Fractal
      why: Pictures and everyday examples of fractional dimension.
    - title: Harmonic analysis (research entry)
      url: /research/harmonic-analysis
      why: The wave side of the same story.
site:
  published: true
  aiReviewed: true
---

## What it is

Geometric measure theory measures the size of sets that are too thin for Lebesgue measure. For $A\subset\mathbb{R}^n$ and $s\ge0$, $\mathcal{H}^s(A)=\lim_{\delta\to0}\inf\{\sum_i(\operatorname{diam}U_i)^s: A\subset\bigcup_i U_i,\ \operatorname{diam}U_i<\delta\}$, and $\dim_H A=\inf\{s:\mathcal{H}^s(A)=0\}$. The upper Minkowski (box) dimension is $\overline{\dim}_M A=\limsup_{\delta\to0}\log N(A,\delta)/\log(1/\delta)$, where $N(A,\delta)$ is the number of $\delta$-balls needed to cover $A$; always $\dim_H\le\underline{\dim}_M\le\overline{\dim}_M$. Incidence geometry is the discrete counterpart: it bounds how often points, lines, tubes or planes can meet. The two subjects meet in the $\delta$-discretized setting, where a set of dimension $s$ is replaced by a union of $\delta$-balls satisfying a Frostman-type non-concentration condition.

## Core results

- **Frostman's lemma.** A Borel set $A$ has $\mathcal{H}^s(A)>0$ iff it carries a nonzero finite measure $\mu$ with $\mu(B(x,r))\le r^s$. With the $s$-energy $I_s(\mu)=\iint|x-y|^{-s}\,d\mu\,d\mu=c_{n,s}\int|\hat\mu(\xi)|^2|\xi|^{s-n}\,d\xi$ ($0<s<n$), one has $\dim_H A=\sup\{s: I_s(\mu)<\infty$ for some probability $\mu$ on $A\}$.
- **Fourier dimension.** $\dim_F A=\sup\{s\le n:\exists\mu$ on $A$ with $|\hat\mu(\xi)|\lesssim|\xi|^{-s/2}\}$, and $\dim_F\le\dim_H$; sets with equality are Salem sets (Kaufman: well-approximable numbers).
- **Projection theorems.** Marstrand (plane) and Mattila (general): for Borel $A\subset\mathbb{R}^n$ and almost every $V\in G(n,m)$, $\dim_H P_V A=\min(\dim_H A,m)$, and $\mathcal{H}^m(P_VA)>0$ when $\dim_H A>m$. Kaufman bounds the exceptional directions in the plane: $\dim_H\{e:\dim_H P_eA<s\}\le s$ for $s\le\dim_H A\le1$; Ren and Wang proved Oberlin's sharper bound $\max(2s-\dim_H A,0)$.
- **Kakeya.** Besicovitch sets of measure zero exist for $n\ge2$; Davies proved that planar Kakeya sets have dimension 2. The Kakeya maximal function $f^*_\delta(e)=\sup_{T\parallel e}|T|^{-1}\int_T|f|$ (supremum over $1\times\delta$ tubes) is conjectured to satisfy $\|f^*_\delta\|_{L^n(S^{n-1})}\le C_\varepsilon\delta^{-\varepsilon}\|f\|_{L^n}$, which implies the dimension conjecture. Wolff's hairbrush argument (1995) gives the maximal bound in $L^{(n+2)/2}$, hence $\dim\ge(n+2)/2$; Bourgain's arithmetic (sums and differences) method and its refinement by Katz and Tao improve this in high dimension.
- **Finite fields.** Dvir: a set $K\subset\mathbb{F}_q^n$ containing a line in every direction has $|K|\ge\binom{q+n-1}{n}\ge q^n/n!$. Otherwise a nonzero polynomial of degree $\le q-1$ vanishes on $K$; it then vanishes on each line, so its top-degree part vanishes in every direction, a contradiction.
- **Incidences.** Szemerédi–Trotter: $I(P,L)\lesssim|P|^{2/3}|L|^{2/3}+|P|+|L|$ for points and lines in the plane. Guth–Katz polynomial partitioning: for finite $P\subset\mathbb{R}^n$ and $D\ge1$ there is a nonzero polynomial of degree $\le D$ whose zero set cuts $\mathbb{R}^n$ into $O(D^n)$ cells, each containing $\lesssim|P|D^{-n}$ points. With the Elekes–Sharir reduction to line incidences in $\mathbb{R}^3$ and ruled-surface algebra, it shows that $N$ points in the plane determine $\gtrsim N/\log N$ distinct distances.
- **Furstenberg sets.** An $(s,t)$-Furstenberg set meets each line of a $t$-dimensional family in a set of dimension $\ge s$. Ren and Wang proved $\dim_H\ge\min(s+t,\tfrac{3s+t}{2},s+1)$ in the plane, which resolves the conjecture.
- **Singular sets in PDE.** Caffarelli–Kohn–Nirenberg: the singular set $S$ of a suitable weak solution of the 3D Navier–Stokes equations has $\mathcal{P}^1(S)=0$, where $\mathcal{P}^1$ is one-dimensional parabolic Hausdorff measure. The proof combines an $\varepsilon$-regularity criterion with a Vitali covering argument.

## Techniques to master

Covering lemmas (Vitali, Besicovitch); Frostman measures and energies; Fourier transforms of measures; $\delta$-discretization and pigeonholing over dyadic scales; the two-ends, bush and hairbrush arguments; polynomial ham-sandwich and partitioning; Bezout-type and ruled-surface facts; and multiscale induction on scales (sticky versus non-sticky reductions, convex Wolff axioms).

## Reading path

Prerequisites are Lebesgue integration and $L^p$ spaces, basic Fourier analysis and elementary algebraic geometry. Start with Falconer, _Fractal Geometry_, for dimension theory. Then read Mattila, _Geometry of Sets and Measures in Euclidean Spaces_ (1995), for Frostman measures, projections and rectifiability, and Mattila, _Fourier Analysis and Hausdorff Dimension_ (2015), for energies, Salem sets, Kakeya and restriction. Guth, _Polynomial Methods in Combinatorics_ (AMS ULECT 64), covers Dvir, Szemerédi–Trotter and Guth–Katz. Finish with Wolff (1995), Ren–Wang and Wang–Zahl.

## Where it bites

Wang and Zahl proved the Kakeya set conjecture in $\mathbb{R}^3$ using volume estimates for unions of tubes that satisfy convex Wolff axioms. Their proof is an arXiv preprint (2025) and has not yet appeared in a journal; Guth, Wang and Zahl posted a streamlined proof on arXiv in 2026. The hosted problem on Kakeya sets in $\mathbb{R}^4$ remains open in the accepted literature: the four-dimensional result for sticky tube families (Wang–Zakharov) and the claimed full proof in OpenAI's October 2026 manuscripts are unrefereed preprints. Through the harmonic-analysis entry, the same tube-incidence and Furstenberg estimates feed the restriction conjecture in $\mathbb{R}^3$, and the parabolic Hausdorff-measure estimates of Caffarelli–Kohn–Nirenberg feed the Navier–Stokes regularity problem.

# Plain explanation

How big is a line? In the plane its area is zero, yet it clearly is not nothing. How big is a coastline, which gets longer the closer you look? Ordinary length and area are too blunt for such sets. Geometric measure theory builds finer rulers.

The main ruler is dimension, which need not be a whole number. A line has dimension one, a filled square has dimension two, and a crinkly curve can have a dimension in between. One way to find it: cover the set with tiny balls and see how fast the number you need grows as the balls shrink.

A neighbouring subject, incidence geometry, counts how often simple things such as points and lines meet. If you have many points and many lines, how many touching pairs can there be? Surprisingly, this counting question is linked to the size of sets.

The most famous example is the Kakeya problem. Picture a needle that must point in every direction while sweeping out as little space as possible. The swept set can have zero area. But how thin can it be, measured by dimension? The conjecture says it must still have full dimension. This is proved in the plane and, in 2025, in three dimensions, and is open beyond.

The needle is just a picture. The real objects are infinitely thin sets, and the proofs mix geometry, counting and waves.

# Student explanation

**Hausdorff measure and dimension.** For a set $A\subset\mathbb R^n$ and a number $s\ge0$, cover $A$ by small sets $U_i$ of diameter less than $\delta$ and add up $(\operatorname{diam}U_i)^s$. Taking the smallest such sum and letting $\delta\to0$ gives the Hausdorff measure $\mathcal H^s(A)$. The **Hausdorff dimension** is the value of $s$ where this measure switches from infinite to zero. A smooth curve has dimension $1$ and a region of the plane dimension $2$; many fractals have fractional dimension. The **box (Minkowski) dimension** instead counts how many $\delta$-balls $N(A,\delta)$ are needed and reads off the growth rate of $\log N$ against $\log(1/\delta)$. Always Hausdorff dimension $\le$ box dimension.

**Frostman's lemma** is the main bridge to analysis: a set has positive $s$-dimensional measure if and only if it carries a nonzero mass distribution $\mu$ that gives a ball of radius $r$ at most mass $r^s$. This turns 'big set' into 'a measure that is spread out'. The **energy** of such a measure, a double integral of $|x-y|^{-s}$, can be rewritten via the Fourier transform, which is why waves come into the story. The _Fourier dimension_ is the version that measures how fast $\hat\mu$ decays.

**Projections.** Marstrand's projection theorem says that for almost every direction, the shadow of a set of dimension $s$ on a line has dimension $\min(s,1)$. Modern work asks what happens for _every_ direction, or for sets with extra structure.

**Kakeya sets** are sets containing a unit line segment in every direction. They can have zero Lebesgue measure (Besicovitch), so the natural question is about dimension. The **Kakeya conjecture** asserts the dimension is $n$ in $\mathbb R^n$. It is true for $n=2$ (Davies), and was proved for $n=3$ by Wang and Zahl in 2025. The related _Furstenberg set_ problem asks how large a set must be if it contains a fractional-dimensional piece of a line in many directions.

**Incidence geometry** is the discrete counterpart. The Szemerédi–Trotter theorem bounds the number of point–line incidences in the plane. Guth and Katz's **polynomial method** (find a low-degree polynomial vanishing on the points and cut space into cells) proved sharp bounds for the distinct-distances problem and now sits behind many advances. In the $\delta$-discretized setting, one replaces a set of dimension $s$ by a union of $\delta$-balls obeying a Frostman-type 'no clumping' condition, and counts how tubes (thickened lines) overlap.

The subject matters beyond pure geometry because Kakeya-type estimates control how waves concentrate, so they feed directly into harmonic analysis and the study of wave equations.
