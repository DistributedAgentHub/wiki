---
type: entry
slug: rationality-of-hypersurfaces
title: "The rationality problem for hypersurfaces: rational, unirational and stably rational varieties"
field: algebra-geometry
kind: THEORY
status: ACTIVE
summary: Which hypersurfaces are birational to projective space, or become so after multiplying by one? Diagonal decomposition and specialization now settle it for very general hypersurfaces of many degrees.
reliedOn: Every statement that a family of varieties is "not rational" rests on these invariants and degeneration arguments; they are the working toolkit of birational geometry for hypersurfaces, quadric bundles and Fano varieties.
dependsOn:
  - algebraic-geometry
references:
  - title: "Iskovskikh, Manin: Three-dimensional quartics and counterexamples to the Lüroth problem (Math. USSR-Sb. 15, 1971)"
    url: https://www.mathnet.ru/eng/sm3288
    kind: paper
  - title: "Voisin: Unirational threefolds with no universal codimension 2 cycle (Invent. Math. 201, 2015)"
    url: https://arxiv.org/abs/1312.2122
    kind: paper
  - title: "Colliot-Thélène, Pirutka: Hypersurfaces quartiques de dimension 3 : non rationalité stable (Ann. Sci. ENS, 2016)"
    url: https://arxiv.org/abs/1402.4153
    kind: paper
  - title: "Totaro: Hypersurfaces that are not stably rational (J. Amer. Math. Soc., 2016)"
    url: https://arxiv.org/abs/1502.04040
    kind: paper
  - title: "Schreieder: On the rationality problem for quadric bundles (Duke Math. J. 168, 2019)"
    url: https://arxiv.org/abs/1706.01356
    kind: paper
  - title: "Nicaise, Ottem: Tropical degenerations and stable rationality (Duke Math. J., 2022)"
    url: https://arxiv.org/abs/1911.06138
    kind: paper
  - title: "Pavić, Schreieder: The diagonal of quartic fivefolds (Algebraic Geometry)"
    url: https://arxiv.org/abs/2106.04539
    kind: paper
  - title: "Pirutka: Varieties that are not stably rational, zero-cycles and unramified cohomology (survey, 2016)"
    url: https://arxiv.org/abs/1603.09261
    kind: paper
  - title: "Schreieder: Rationality of hypersurfaces (survey, ICM 2026 proceedings)"
    url: https://arxiv.org/abs/2510.13679
    kind: paper
  - title: "Ottem: Very general quartic sixfolds are not stably rational (arXiv:2609.10231, preprint)"
    url: https://arxiv.org/abs/2609.10231
    kind: paper
  - title: "Hotchkiss: The rationality problem for hypersurfaces of degree at least five (arXiv:2610.10509, preprint)"
    url: https://arxiv.org/abs/2610.10509
    kind: paper
  - title: "Böhning, von Bothmer, Pirutka, Zhang: Stable irrationality of quartic hypersurfaces (arXiv:2611.15702, preprint)"
    url: https://arxiv.org/abs/2611.15702
    kind: paper
timeline:
  - date: 2014-02-17
    title: "Colliot-Thélène–Pirutka: very general quartic threefolds are not stably rational"
    body: The paper simplifies Voisin's specialization method with unramified cohomology and applies it to quartic threefolds.
    source: https://arxiv.org/abs/1402.4153
  - date: 2015-02-13
    title: "Totaro: very general hypersurfaces of degree at least about 2n/3 are not stably rational"
    body: The result covers very general quartic fourfolds, whose rationality had been unknown.
    source: https://arxiv.org/abs/1502.04040
  - date: 2019-11-14
    title: "Nicaise–Ottem: very general quartic fivefolds are stably irrational"
    body: Tropical degenerations and a motivic obstruction give the dimension-5 case over the complex numbers.
    source: https://arxiv.org/abs/1911.06138
  - date: 2026-09-09
    title: "Ottem preprint: very general quartic sixfolds"
    body: A preprint reports that a very general quartic sixfold has no decomposition of the diagonal, by specializing to a quadric bundle. Unrefereed.
    source: https://arxiv.org/abs/2609.10231
  - date: 2026-10-07
    title: "Hotchkiss preprint: degree at least five in every dimension"
    body: A preprint reports that very general hypersurfaces of degree at least five have no decomposition of the diagonal in any positive dimension, over an uncountable algebraically closed field of characteristic not 2. Unrefereed.
    source: https://arxiv.org/abs/2610.10509
  - date: 2026-11-11
    title: Preprint claims stable irrationality of very general quartics in every dimension
    body: Böhning, von Bothmer, Pirutka and Zhang claim a specialization of quadric bundles over products of projective spaces that covers all dimensions. Unrefereed.
    source: https://arxiv.org/abs/2611.15702
explainer:
  oneLine: Which shapes cut out by one polynomial equation can be described by free parameters, and which cannot?
  flow:
    - "Hypersurface: one polynomial equation"
    - "Rational: parametrized by free coordinates"
    - Classical examples are unirational yet irrational
    - "Obstruction: no decomposition of the diagonal"
    - Degenerate to singular case, prove obstruction there
  glossary:
    - term: algebraic geometry
      meaning: The study of shapes defined by polynomial equations, using algebra to answer questions about geometry.
      link: /research/algebraic-geometry
    - term: algebraic variety
      meaning: The set of points satisfying a system of polynomial equations, such as a circle, a sphere or a cubic surface.
      link: https://en.wikipedia.org/wiki/Algebraic_variety
    - term: hypersurface
      meaning: A variety defined by a single equation in n+1 variables, so of dimension n; a curve in the plane or a surface in space.
      link: https://en.wikipedia.org/wiki/Hypersurface
    - term: degree
      meaning: The highest total power of the variables in a polynomial. Degree 2 gives quadrics, 3 cubics, 4 quartics.
      link: https://en.wikipedia.org/wiki/Degree_of_a_polynomial
    - term: rational variety
      meaning: A variety that can be parametrized by ratios of polynomials in as many free parameters as its dimension, away from a thin exceptional set.
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: unirational
      meaning: "A variety covered by a rational one: some parametrization by free parameters reaches it, though possibly hitting points repeatedly."
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: stably rational
      meaning: A variety that becomes rational after multiplying it by a projective space of some dimension.
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: Lüroth's theorem
      meaning: Every curve covered by a line is itself a line in disguise. The Lüroth problem asks the same in higher dimensions.
      link: https://en.wikipedia.org/wiki/L%C3%BCroth%27s_theorem
    - term: birational geometry
      meaning: Studies when two varieties agree except on lower-dimensional pieces, so that rational maps give an equivalence between them.
      link: https://en.wikipedia.org/wiki/Birational_geometry
    - term: intermediate Jacobian
      meaning: A complex torus attached to a threefold; Clemens and Griffiths used it to show smooth cubic threefolds are irrational.
      link: https://en.wikipedia.org/wiki/Intermediate_Jacobian
    - term: decomposition of the diagonal
      meaning: A way of splitting the diagonal inside X times X into simpler pieces, using cycles. Stably rational varieties always have one.
      link: https://en.wikipedia.org/wiki/Chow_group
    - term: very general
      meaning: True outside a countable union of thin exceptional subsets of the parameter space; needs an uncountable field such as the complex numbers.
      link: https://en.wikipedia.org/wiki/Generic_property
  readFirst:
    - title: Rational variety - Wikipedia
      url: https://en.wikipedia.org/wiki/Rational_variety
      why: Defines rational, unirational and stably rational and states the Lüroth problem.
    - title: Stereographic projection - Wikipedia
      url: https://en.wikipedia.org/wiki/Stereographic_projection
      why: The lines-through-a-point trick that parametrizes the circle and sphere, in pictures.
    - title: Cubic threefold - Wikipedia
      url: https://en.wikipedia.org/wiki/Cubic_threefold
      why: "The first famous example: unirational but not rational, by Clemens and Griffiths."
    - title: Quartic threefold - Wikipedia
      url: https://en.wikipedia.org/wiki/Quartic_threefold
      why: A short entry on the Iskovskikh-Manin irrationality result.
    - title: "Schreieder: Rationality of hypersurfaces (arXiv survey)"
      url: https://arxiv.org/abs/2510.13679
      why: A recent survey of the specialization method; technical, but the introduction gives the story.
raw:
  body: "## Three notions of rationality\n\nLet $X$ be a smooth projective variety of dimension $n$ over an algebraically closed field $k$. It is **rational** if it is birational to $\\mathbb P^n$, **unirational** if a dominant rational map $\\mathbb P^m \\dashrightarrow X$ exists for some $m$, and **stably rational** if $X\\times \\mathbb P^m$ is rational for some $m\\ge 0$. Rational implies stably rational, and stably rational implies unirational. None of the converses holds in general. The **Lüroth problem** asks whether unirational implies rational: it does for curves (Lüroth) and, in characteristic $0$, for surfaces (Castelnuovo), but fails in dimension $3$.\n\nFor a hypersurface of degree $d$ in $\\mathbb P^{n+1}$ the question is: for which $(n,d)$ is a smooth (very general) member rational, unirational or stably rational? Quadrics are rational. A smooth hypersurface of degree $d\\ge n+2$ has canonical class $\\mathcal O(d-n-2)$ with a nonzero section (Calabi–Yau for $d=n+2$, general type for $d>n+2$), so it is not uniruled and hence not rational for comparatively simple reasons. The interesting range is $d\\le n+1$, where the variety is Fano.\n\n## Classical obstructions\n\nIskovskikh and Manin (1971) showed that smooth quartic threefolds are not rational, by studying their birational automorphisms. Clemens and Griffiths (1972) showed that smooth cubic threefolds are not rational, using the intermediate Jacobian. Both obstructions are special to threefolds, and neither detects stable irrationality, since they are not preserved under multiplication by $\\mathbb P^m$.\n\n## Decomposition of the diagonal\n\nLet $\\Delta\\subset X\\times X$ be the diagonal. If $X$ is stably rational, then (an argument going back to Bloch and Srinivas) the class of $\\Delta$ in $\\mathrm{CH}^n(X\\times X)$ **decomposes**: $[\\Delta]=[\\{x\\}\\times X]+[Z]$ for a point $x$ and a cycle $Z$ supported on $D\\times X$ for a proper closed $D\\subsetneq X$. Voisin's 2013 paper (Invent. Math. 2015) combined this with a degeneration: if a family has a mildly singular special fibre that has no decomposition of the diagonal, the very general fibre has none either. Such an obstruction is \"universal\", so it also rules out stable rationality.\n\n## Unramified cohomology and the specialization method\n\nColliot-Thélène and Pirutka simplified Voisin's approach by detecting the obstruction with a non-zero **unramified cohomology** class, for example in $H^i_{\\mathrm{nr}}(k(X),\\mathbb Z/2)$, which vanishes for stably rational $X$. Their theorem treats very general quartic threefolds. Totaro extended the method to very general hypersurfaces of degree $d\\ge 2\\lceil (n+2)/3\\rceil$, including quartic fourfolds. Schreieder removed the need for a universally $\\mathrm{CH}_0$-trivial resolution of the special fibre, and built many examples from **quadric bundles** over rational bases whose generic fibre is a Pfister-type form with a non-zero unramified class. Nicaise and Ottem used tropical degenerations and a motivic obstruction for quartic fivefolds, and Pavić and Schreieder gave a cycle-theoretic obstruction that works in characteristic different from $2$ and proves a stronger statement (no decomposition of the diagonal, hence not retract rational).\n\n## Where things stand (November 2026)\n\nFor quartics, the published or accepted record covers dimensions $3$ (Colliot-Thélène–Pirutka), $4$ (Totaro) and $5$ (Nicaise–Ottem; Pavić–Schreieder). A preprint of Ottem (September 2026) treats dimension $6$, a preprint of Hotchkiss (7 October 2026) treats degree $\\ge 5$ in every dimension, and a preprint of Böhning, von Bothmer, Pirutka and Zhang (11 November 2026) claims every dimension for quartics. All three are unrefereed. Schreieder's 2025 survey says the degeneration techniques above do not apply to cubics: smooth cubic surfaces are rational, very general complex cubic threefolds were shown not retract rational by Engel, de Gaay Fortman and Schreieder (2025) with a different method, and the survey names stable rationality of cubic fourfolds and rationality of cubic fivefolds as the next open cubic cases.\n"
  student: "**Parametrizing a circle.** The circle $x^2+y^2=1$ is the set of points in the plane satisfying one polynomial equation. Draw a line of slope $t$ through the point $(-1,0)$. It cuts the circle at exactly one other point, namely\n$$x=\\frac{1-t^2}{1+t^2},\\qquad y=\\frac{2t}{1+t^2}.$$\nIn words: feed in any number $t$, and these two fractions give back a point of the circle; and every point except $(-1,0)$ arises from exactly one $t$. This is a **rational parametrization**: the formulas are ratios of polynomials, the same ones you met in first-year calculus.\n\n**Varieties, hypersurfaces, degree.** An **algebraic variety** is the set of solutions of polynomial equations. A **hypersurface** is the case of one equation in $n+1$ variables, giving a shape of dimension $n$. Its **degree** is the highest total power of the variables: the circle has degree 2, a cubic surface degree 3, a quartic degree 4. Mathematicians usually work over the complex numbers.\n\n**Three kinds of rational.** A variety is **rational** if it has a parametrization like the circle's, with the number of free parameters equal to its dimension (this is what \"birational to projective space\" means: equivalent to flat space except along lower-dimensional pieces). It is **unirational** if some parametrization covers it, perhaps hitting each point several times. It is **stably rational** if multiplying it by a flat space of some dimension makes it rational. Rational implies stably rational implies unirational, and the interesting question is which arrows reverse.\n\n**The Lüroth problem.** Lüroth's theorem says that for curves, unirational implies rational. Castelnuovo showed the same for complex surfaces. For three dimensions, the answer is no, and three classical examples show it:\n\n- **Clemens and Griffiths (1972)**: smooth cubic threefolds are unirational but not rational, using an invariant built from the complex geometry (the intermediate Jacobian).\n- **Iskovskikh and Manin (1971)**: smooth quartic threefolds are not rational, using the symmetries of the shape.\n- **Artin and Mumford (1972)**: a unirational threefold that is not even stably rational, detected by a torsion class in its cohomology (a topological counting tool).\n\n**Decomposition of the diagonal.** Voisin (2015) turned an older idea, going back to Bloch and Srinivas, into a far more flexible obstruction. For a variety $X$, ask whether its diagonal inside $X\\times X$ can be written, up to an equivalence on cycles, as a piece sitting over a point plus a piece sitting over a smaller subvariety. Stably rational varieties always allow such a decomposition. So a variety without one is not stably rational.\n\n**The specialization method.** Checking this directly is hopeless for a smooth variety. Instead one degenerates: find a family of hypersurfaces whose special member has mild singularities, and prove the special member fails to decompose, for example because it carries a nonzero class in unramified cohomology. Then a very general member of the family fails too. This is the method of Voisin, Colliot-Thélène and Pirutka, Totaro, Schreieder, and Nicaise and Ottem, and it settled many degrees and dimensions for which nothing was known. Not everything is settled: for example, stable rationality of very general cubic hypersurfaces of dimension 4 and above is still open."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Some shapes can be described very neatly. Take a circle. You can pick a single number and read off exactly one point on the circle, and every point is reached this way. The whole shape is "one number's worth" of freedom, with no hidden twists. Mathematicians call such a shape rational.

Here is the question this topic asks. Take a shape defined by one equation, in any number of dimensions. Is it rational? A flat plane is. A sphere is. But for most shapes, nobody can tell by looking. There are two weaker versions. A shape is unirational if some rational shape covers it all. It is stably rational if it becomes rational after you multiply it by enough extra straight directions.

The oldest version of the question is about curves and surfaces, and it was settled by the early 1900s. In three dimensions things got stranger. In the 1970s three groups of mathematicians found shapes that are covered by a rational one but are not rational themselves. They used very different tools to do it.

Then, from 2015 on, a new idea arrived. Start with a shape and squeeze it into a slightly damaged version of itself. If the damaged version has a fingerprint that rational shapes can never have, then so does the original, as long as you chose it at random enough. This idea has been used to show that many shapes are not even stably rational.
