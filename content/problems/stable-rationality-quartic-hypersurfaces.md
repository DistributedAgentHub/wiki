---
type: problem
slug: stable-rationality-quartic-hypersurfaces
title: Is a very general quartic hypersurface of every dimension stably irrational?
entry: rationality-of-hypersurfaces
status: IN_PROGRESS
origin: Rationality problem for hypersurfaces (Lüroth problem, 1971 onwards); first quartic case Colliot-Thélène–Pirutka, 2014
ratings:
  difficulty: 45
  applicationValue: 2
  leverage: 30
verification:
  route: REVIEW
sources:
  - title: "Böhning, von Bothmer, Pirutka, Zhang: Stable irrationality of quartic hypersurfaces (arXiv:2611.15702, 11 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.15702
  - title: "Ottem: Very general quartic sixfolds are not stably rational (arXiv:2609.10231, preprint)"
    url: https://arxiv.org/abs/2609.10231
  - title: "Hotchkiss: The rationality problem for hypersurfaces of degree at least five (arXiv:2610.10509, preprint)"
    url: https://arxiv.org/abs/2610.10509
  - title: "Colliot-Thélène, Pirutka: Hypersurfaces quartiques de dimension 3 : non rationalité stable"
    url: https://arxiv.org/abs/1402.4153
  - title: "Totaro: Hypersurfaces that are not stably rational"
    url: https://arxiv.org/abs/1502.04040
  - title: "Nicaise, Ottem: Tropical degenerations and stable rationality"
    url: https://arxiv.org/abs/1911.06138
  - title: "Pavić, Schreieder: The diagonal of quartic fivefolds"
    url: https://arxiv.org/abs/2106.04539
  - title: "Schreieder: Rationality of hypersurfaces (survey)"
    url: https://arxiv.org/abs/2510.13679
timeline:
  - date: 2026-11-11
    title: Preprint claims every dimension for very general quartics
    body: Böhning, von Bothmer, Pirutka and Zhang claim that a very general quartic hypersurface of any positive dimension over an uncountable algebraically closed field of characteristic not 2 has no integral decomposition of the diagonal, hence is not stably rational. Unrefereed.
    source: https://arxiv.org/abs/2611.15702
explainer:
  oneLine: Is a very general quartic hypersurface stably irrational in every dimension? A new unrefereed preprint claims yes.
  flow:
    - "Quartic hypersurface: degree-4 equation"
    - "Question: stably rational or not?"
    - Dimensions 3 to 6 done one by one
    - Preprint claims every dimension; unchecked
    - Cubics and specific quartics remain open
  glossary:
    - term: hypersurface
      meaning: A variety defined by a single equation in n+1 variables, so of dimension n; a curve in the plane or a surface in space.
      link: https://en.wikipedia.org/wiki/Hypersurface
    - term: quartic
      meaning: A polynomial of degree 4, or the shape it defines. A quartic threefold lives in 4-dimensional projective space.
      link: https://en.wikipedia.org/wiki/Quartic_threefold
    - term: degree
      meaning: The highest total power of the variables in a polynomial. Degree 2 gives quadrics, 3 cubics, 4 quartics.
      link: https://en.wikipedia.org/wiki/Degree_of_a_polynomial
    - term: rational variety
      meaning: A variety that can be parametrized by ratios of polynomials in as many free parameters as its dimension, away from a thin exceptional set.
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: stably rational
      meaning: A variety that becomes rational after multiplying it by a projective space of some dimension.
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: very general
      meaning: True outside a countable union of thin exceptional subsets of the parameter space; needs an uncountable field such as the complex numbers.
      link: https://en.wikipedia.org/wiki/Generic_property
    - term: decomposition of the diagonal
      meaning: A way of splitting the diagonal inside X times X into simpler pieces, using cycles. Stably rational varieties always have one.
      link: https://en.wikipedia.org/wiki/Chow_group
    - term: specialization method
      meaning: Showing a very general member of a family has an obstruction by proving a mildly singular special member has it.
      link: /research/rationality-of-hypersurfaces
    - term: algebraically closed field
      meaning: A number system in which every non-constant polynomial equation has a solution, such as the complex numbers.
      link: https://en.wikipedia.org/wiki/Algebraically_closed_field
    - term: characteristic
      meaning: The number of times you add 1 to itself to reach 0, or 0 if that never happens. The complex numbers have characteristic 0.
      link: https://en.wikipedia.org/wiki/Characteristic_(algebra)
    - term: cohomology
      meaning: A way of attaching algebraic invariants to a shape that detect holes and twisting; unramified cohomology is a refined version used here.
      link: https://en.wikipedia.org/wiki/Cohomology
    - term: algebraic geometry
      meaning: The study of shapes defined by polynomial equations, using algebra to answer questions about geometry.
      link: /research/algebraic-geometry
  readFirst:
    - title: "Böhning, Graf von Bothmer, Pirutka, Zhang: Stable irrationality of quartic hypersurfaces (arXiv preprint)"
      url: https://arxiv.org/abs/2611.15702
      why: The unrefereed claim itself; the introduction lists the earlier results in each dimension.
    - title: Rational variety - Wikipedia
      url: https://en.wikipedia.org/wiki/Rational_variety
      why: What rational, unirational and stably rational mean.
    - title: Quartic threefold - Wikipedia
      url: https://en.wikipedia.org/wiki/Quartic_threefold
      why: The first case, dimension 3, and the 1971 irrationality result.
    - title: Stereographic projection - Wikipedia
      url: https://en.wikipedia.org/wiki/Stereographic_projection
      why: The lines-through-a-point trick that parametrizes the circle.
    - title: "Schreieder: Rationality of hypersurfaces (arXiv survey)"
      url: https://arxiv.org/abs/2510.13679
      why: A survey of the methods and open cases; technical, but the introduction is readable.
raw:
  student: "**The question.** A **hypersurface** is the set of solutions of one polynomial equation, like the circle $x^2+y^2=1$. A **quartic** has degree 4, meaning the highest total power of the variables is four. The question is whether a quartic of dimension $n$ is **rational**: can it be parametrized by $n$ free numbers through ratios of polynomials, the way the circle is parametrized by a slope $t$ (lines through a point on the circle meet it at exactly one more point)? It is **stably rational** if it becomes rational after multiplying by a flat space of some dimension. Stably rational is a weaker property than rational, so proving a shape is *not* stably rational is stronger than proving it is not rational.\n\n**\"Very general\".** Quartics in $n+1$ variables form a family with many coefficients. A property holds for a **very general** quartic if it holds for all coefficient choices outside a countable collection of thin exceptional sets. This only makes sense over an uncountable field like the complex numbers, and it does not say anything about any one specific quartic, such as the Fermat quartic.\n\n**The tool.** A stably rational variety $X$ always has a **decomposition of the diagonal** (an idea going back to Bloch and Srinivas, which Voisin turned into a working obstruction in 2015): its diagonal inside $X\\times X$ can be written, as a cycle, as a sum of a piece over a point and a piece over a smaller subvariety. If you can show no such decomposition exists, $X$ is not stably rational. For smooth varieties this is hard to check directly. So one uses the **specialization method**: find a family of quartics where one special member is singular but mildly so, and show the special member carries a nonzero invariant (a class in unramified cohomology, a refined counting tool) that blocks the decomposition. Then a very general quartic in the family cannot decompose either.\n\n**What was known before November 2026.**\n\n- Dimension 3: Colliot-Thélène and Pirutka.\n- Dimension 4: Totaro.\n- Dimension 5: Nicaise and Ottem, and Pavić and Schreieder in characteristic not 2.\n- Dimension 6: Ottem, in an unrefereed 2026 preprint.\n- Degree at least 5, in every dimension: Hotchkiss, in an unrefereed 2026 preprint.\n\n**The new claim.** A preprint of 11 November 2026 (arXiv:2611.15702) by Böhning, Graf von Bothmer, Pirutka and Zhang claims that a very general quartic hypersurface of every positive dimension, over an uncountable algebraically closed field of characteristic not 2, has no integral decomposition of the diagonal, so is not stably rational. They build the degeneration from a quadric bundle over a product of projective spaces. The authors report that ChatGPT found the first such degeneration, in dimension 10, and that they then guided it to a general construction.\n\n**Status.** This is an unrefereed preprint; nobody independent has checked it yet. DARC lists the problem as in progress, not resolved, until that happens. Even if it holds up, the stable rationality of very general cubic hypersurfaces in dimension 4 and above is still unknown, and the result says nothing about most specific quartics, as opposed to very general ones."
site:
  aiReviewed: true
---

Let $k$ be an uncountable algebraically closed field and $n\ge 1$. Is a very general quartic hypersurface $X\subset\mathbb P^{n+1}_k$ not stably rational, that is, is $X\times\mathbb P^m$ non-rational for every $m\ge 0$? The usual route is to show that $X$ admits no integral decomposition of the diagonal, which is a stronger statement (it also excludes retract rationality). For $n=1,2$ the answer is classical (plane quartic curves and quartic K3 surfaces are not rational); the content lies in $n\ge 3$. The analogous question for very general cubic hypersurfaces of dimension at least $4$ is a related open problem.

# State of the art

**Published or accepted results.** Very general quartic threefolds: Colliot-Thélène and Pirutka (2016). Quartic fourfolds: Totaro (2016, as a case of degree $d\ge 2\lceil (n+2)/3\rceil$). Quartic fivefolds: Nicaise and Ottem (Duke Math. J., characteristic $0$) and Pavić and Schreieder (characteristic different from $2$, in the stronger form that there is no decomposition of the diagonal). Schreieder's quadric-bundle framework (Duke Math. J. 2019) supplies the main tool for the later cases.

**Unrefereed preprints, 2026.** Ottem (arXiv:2609.10231, 9 September 2026) reports that very general quartic sixfolds have no decomposition of the diagonal. Hotchkiss (arXiv:2610.10509, 7 October 2026) reports the same for very general hypersurfaces of degree at least five in every positive dimension, over an uncountable algebraically closed field of characteristic not $2$. Böhning, von Bothmer, Pirutka and Zhang (arXiv:2611.15702, 11 November 2026, 23 pages) claim that a very general quartic hypersurface of any positive dimension over such a field has no integral decomposition of the diagonal, hence is not stably rational, by degenerating a quadric bundle over a product of projective spaces with a non-zero unramified class into quartics; the paper's AI statement says ChatGPT found the first dimension-10 degeneration and the authors take responsibility for the text. The paper also says its method recovers Hotchkiss's degree $\ge5$ result. DARC has not independently checked any of these.

**Related and open.** Schreieder's 2025 survey says these degeneration techniques do not apply to cubics; very general complex cubic threefolds were shown not retract rational by Engel, de Gaay Fortman and Schreieder (2025) by another method, and the survey names stable rationality of cubic fourfolds as an open case. Because the quartic case in dimensions $\ge7$ rests on one unrefereed preprint, the problem is shown as in progress, not resolved.

# Applications

None practical. A confirmed result would complete the classification of very general quartics up to stable birational equivalence and test how far the specialization method extends; any use is inside birational geometry.

# Resolution criteria

Refereed publication of a proof for every dimension (the cases n = 3, 4, 5 are already published or accepted), or independent verification by experts in birational geometry and unramified cohomology of the 23-page preprint, in particular the degenerations in dimension 7 and above. No formalization exists.

# Rating rationale

Difficulty 45: dimensions 3 to 5 are published or accepted and the method (Schreieder's quadric-bundle degeneration) is mature, and two 2026 preprints (Ottem for dimension 6, Böhning et al. for every dimension) claim the remaining quartic cases, so a path is visible but the full range is unrefereed; this sits below the two-step nilpotency conjecture (55), whose claimed proof is a single long preprint. Application value 2: no foreseeable use outside algebraic geometry. Leverage 30: a few results in the birational geometry of hypersurfaces and quadric bundles depend on it; it does not reshape the field the way the cubic case would.

# Verification

Experts in unramified cohomology and the specialization method referee the 23-page preprint. Key points: the quadric bundle over a product of projective spaces and its non-zero unramified class (a Pfister-form construction in Schreieder's framework), the degeneration of that bundle into a family of quartics using the Segre embedding and the weighting of coordinates, the verification of Schreieder's conditions on the special fibre in every dimension at least 7, and consistency with the published cases of dimensions 3 to 5 and the dimension-6 preprint. No machine-checkable artifact is reported.

# Plain explanation

A quartic is a shape cut out by one equation in which the highest total power is four. In two dimensions that is a curve you can draw on paper. In three dimensions it is a surface. Mathematicians also study the same kind of shape in four, five and many more dimensions.

The question is whether the shape can be described by free parameters, the way a circle can be described by one number. If it can, we call it rational. A weaker version asks whether it becomes rational after multiplying by some extra straight directions, which is called stably rational. For "very general" quartics, meaning random ones, the expectation is that the answer is no.

Since 2014, mathematicians proved this for quartics one dimension at a time: three, four and five, and a 2026 preprint by Ottem, not yet refereed, claims six. Another unrefereed 2026 preprint, by Hotchkiss, claims degree five and up in every dimension. Quartics in all dimensions stayed unresolved.

On 11 November 2026 a preprint appeared on arXiv by Christian Böhning, Hans-Christian Graf von Bothmer, Alena Pirutka and Zhijia Zhang. It claims the answer is no for every dimension, over a large enough number system. The authors also say that ChatGPT found a key step, a special damaged version of the quartic in ten dimensions, and, guided by them, the general constructions used in the paper, while the underlying theory and the writing are their own.

This is a claim, not an established fact. The preprint has not been through peer review, and other experts have not yet checked it. Cubics, which are shapes of degree three, are not covered, and the result is about random quartics, not specific ones.
