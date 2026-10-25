---
type: entry
slug: algebraic-geometry
title: Algebraic geometry and Hodge theory
field: algebra-geometry
kind: THEORY
status: ACTIVE
summary: The study of solution sets of polynomial equations and of the topology they carry; Hodge theory splits that topology into pieces that tell algebraic cycles apart from merely topological ones.
reliedOn: Algebraic geometry supplies the language for arithmetic geometry (elliptic curves, the Weil conjectures, Fermat's Last Theorem) and for much of mathematical physics. Hodge theory is the main tool linking the complex-analytic and the algebraic structure of a variety.
dependsOn:
  - sobolev-spaces-energy-methods
references:
  - title: "Clay Mathematics Institute: The Hodge Conjecture"
    url: https://www.claymath.org/millennium/hodge-conjecture/
    kind: docs
  - title: P. Deligne, The Hodge Conjecture (Clay official problem description)
    url: https://www.claymath.org/wp-content/uploads/2022/06/hodge.pdf
    kind: article
  - title: C. Voisin, The status of the Hodge conjecture (guest post on Terence Tao's blog, 12 September 2026)
    url: https://terrytao.wordpress.com/2026/09/12/the-status-of-the-hodge-conjecture/
    kind: article
  - title: E. Markman, Cycles on abelian 2n-folds of Weil type from secant sheaves on abelian n-folds
    url: https://arxiv.org/abs/2502.03415
    kind: paper
  - title: C. Birkar, P. Cascini, C. Hacon, J. McKernan, Existence of minimal models for varieties of log general type
    url: https://arxiv.org/abs/math/0610203
    kind: paper
  - title: OpenAI, mathematics manuscript repository (released 6 October 2026; includes the unrefereed claim for CM abelian varieties and the withdrawal history)
    url: https://github.com/openai/math
    kind: code
timeline:
  - date: 2006-10-05
    title: Minimal models exist for varieties of general type
    body: Birkar, Cascini, Hacon and McKernan prove finite generation of the canonical ring and existence of minimal models in the general-type case, a landmark for the classification of higher-dimensional varieties (arXiv v1; journal version 2010).
    source: https://arxiv.org/abs/math/0610203
  - date: 2025-02-05
    title: "Markman: Weil classes on abelian fourfolds are algebraic"
    body: Markman proves that Weil classes on abelian sixfolds of Weil type with discriminant $-1$ are algebraic. Via Schoen's degeneration argument this gives algebraicity of Weil classes on all abelian fourfolds of Weil type, from which the Hodge conjecture for abelian fourfolds follows (arXiv preprint).
    source: https://arxiv.org/abs/2502.03415
  - date: 2026-09-12
    title: Voisin's survey of the Hodge conjecture
    body: Claire Voisin's guest post on Tao's blog describes the known cases, the approaches that have failed, and the variational Hodge conjecture.
    source: https://terrytao.wordpress.com/2026/09/12/the-status-of-the-hodge-conjecture/
  - date: 2026-10-06
    title: OpenAI claims the Hodge conjecture for CM abelian varieties (unrefereed)
    body: An OpenAI manuscript claims the rational Hodge conjecture for every complex CM abelian variety. It has no Lean formalization and had not been independently checked by mid-October 2026. Three related OpenAI manuscripts were withdrawn on 7 October after a sign error was found.
    source: https://github.com/openai/math/blob/main/history.md
explainer:
  oneLine: The study of shapes cut out by polynomial equations, and the hidden structure those shapes carry.
  flow:
    - Shapes defined by polynomial equations
    - One framework for many number systems
    - Topology of the shape splits into types
    - "Hodge conjecture: which holes are algebraic"
  glossary:
    - term: polynomial
      meaning: An expression built from variables using addition and multiplication, such as x squared plus 3x plus 1.
      link: https://en.wikipedia.org/wiki/Polynomial
    - term: algebraic variety
      meaning: The set of points where a collection of polynomials all equal zero.
      link: https://en.wikipedia.org/wiki/Algebraic_variety
    - term: scheme
      meaning: Grothendieck's generalization of a variety that allows equations over any ring, including whole numbers.
      link: https://en.wikipedia.org/wiki/Scheme_(mathematics)
    - term: cohomology
      meaning: A system of numbers and vector spaces that detects holes of each dimension in a shape.
      link: https://en.wikipedia.org/wiki/Cohomology
    - term: Hodge theory
      meaning: The study of how the cohomology of a smooth complex shape splits into pieces of different types.
      link: https://en.wikipedia.org/wiki/Hodge_theory
    - term: Kahler manifold
      meaning: A complex shape with compatible geometry and complex structure; smooth projective varieties are examples.
      link: https://en.wikipedia.org/wiki/K%C3%A4hler_manifold
    - term: Hodge conjecture
      meaning: The conjecture that certain balanced cohomology classes always come from algebraic subvarieties.
      link: https://en.wikipedia.org/wiki/Hodge_conjecture
    - term: Weil conjectures
      meaning: Statements about counting solutions of equations over finite fields, proved by Deligne in 1974.
      link: https://en.wikipedia.org/wiki/Weil_conjectures
    - term: projective space
      meaning: Ordinary space with extra points at infinity added, so parallel lines meet.
      link: https://en.wikipedia.org/wiki/Projective_space
    - term: Millennium Prize Problems
      meaning: Seven problems for each of which the Clay Institute offers one million dollars.
      link: https://en.wikipedia.org/wiki/Millennium_Prize_Problems
    - term: Hodge class
      meaning: A rational cohomology class of the balanced type (p,p); the Hodge conjecture says each one comes from algebraic subvarieties.
      link: https://en.wikipedia.org/wiki/Hodge_cycle
    - term: holomorphic
      meaning: Describes a complex function that has a complex derivative everywhere; such functions are extremely rigid.
      link: https://en.wikipedia.org/wiki/Holomorphic_function
  readFirst:
    - title: Algebraic geometry - Wikipedia
      url: https://en.wikipedia.org/wiki/Algebraic_geometry
      why: A broad, readable overview of the field.
    - title: Hodge conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Hodge_conjecture
      why: Statement and status of the prize problem.
    - title: "Clay Mathematics Institute: Hodge Conjecture"
      url: https://www.claymath.org/millennium/hodge-conjecture/
      why: The official description of the prize problem.
    - title: Weil conjectures - Wikipedia
      url: https://en.wikipedia.org/wiki/Weil_conjectures
      why: A major success of the geometry-meets-arithmetic idea.
raw:
  body: "## Varieties and what they remember\n\nAn algebraic variety is the common zero set of polynomials, such as a curve $y^2=x^3+ax+b$ or a surface in $\\mathbb{P}^3$. Grothendieck's schemes (1950s-60s) put polynomial equations over $\\mathbb{Z}$, finite fields and $\\mathbb{C}$ in one framework, so that a statement about integer solutions can be studied with the same cohomological tools as one about complex manifolds. This is the setting in which Deligne proved the Weil conjectures (1974): the analogue of the Riemann Hypothesis for varieties over finite fields.\n\n## Hodge theory\n\nLet $X$ be a smooth complex projective variety. Its singular cohomology with complex coefficients splits canonically as\n$$H^k(X,\\mathbb{C})=\\bigoplus_{p+q=k}H^{p,q}(X),\\qquad \\overline{H^{p,q}}=H^{q,p},$$\nwhere $H^{p,q}$ is represented by differential forms with $p$ holomorphic and $q$ antiholomorphic directions. The decomposition exists because $X$ is Kähler, and it is a source of strong constraints: Betti numbers of odd degree are even, and the Lefschetz theorems relate cohomology in different degrees.\n\nA *Hodge class* of codimension $p$ is an element of $H^{2p}(X,\\mathbb{Q})\\cap H^{p,p}(X)$. Every algebraic subvariety of codimension $p$ defines such a class (its cycle class), so the rational span of algebraic cycles sits inside the Hodge classes. The Hodge conjecture says the inclusion is an equality. It is known for $p=1$ (Lefschetz's theorem on $(1,1)$-classes, 1924), and hence by duality for all varieties of dimension at most three, and in a few further families. It is open in general. Counterexamples are known to the natural variants: with integral coefficients (Atiyah and Hirzebruch, 1962) and for compact Kähler manifolds that are not projective (Voisin, 2002), so any proof must use algebraicity in an essential way.\n\n## Related structures\n\n- **Mixed Hodge structures** (Deligne) extend the theory to singular and non-compact varieties and underlie modern work on degenerations and period maps.\n- **Hodge loci**, the places in a family where extra Hodge classes appear, are algebraic (Cattani, Deligne and Kaplan, 1995). Whether they are defined over a number field is a deeper open question.\n- **Standard conjectures and motives.** Grothendieck's standard conjectures and the Tate conjecture (the $\\ell$-adic analogue of the Hodge conjecture) aim to show that cohomology of varieties is governed by algebraic cycles. Their truth would give a universal \"motivic\" cohomology theory.\n- **Birational geometry.** The minimal model program, completed in key cases by Birkar, Cascini, Hacon and McKernan (2006-2010), classifies varieties up to birational equivalence, showing for example that the canonical ring of a smooth projective variety is finitely generated.\n\n## Current state\n\nThe Hodge conjecture is one of the Clay Millennium Problems and has no accepted resolution. The most notable recent result in the human literature is Markman's (arXiv preprint, February 2025). He proves that Weil classes on abelian sixfolds of Weil type with discriminant $-1$ are algebraic, deduces by a degeneration argument of Schoen that Weil classes on all abelian fourfolds of Weil type are algebraic, and hence (by known reductions) the Hodge conjecture for abelian fourfolds. In September 2026 Claire Voisin surveyed the problem in a guest post on Terence Tao's blog, calling Markman's theorem \"a big recent progress\" and discussing the variational Hodge conjecture and the approaches that have not worked.\n\nOn 6 October 2026 OpenAI released a repository of manuscripts produced by an internal model. Among them is a claimed proof of the rational Hodge conjecture for all complex abelian varieties with complex multiplication (CM). Through theorems of Milne, this would also give the Tate conjecture for abelian varieties over finite fields. The manuscript has no Lean formalization and is unrefereed, and no independent check had been reported by 15 October 2026. On 7 October OpenAI withdrew three related manuscripts (Weil classes on split abelian eightfolds, Kuga–Satake correspondences for K3 surfaces, and the Hodge conjecture for products of K3 surfaces) after a sign error was found. The general conjecture remains open, and the Clay Institute lists it as unsolved.\n\n## Why it matters outside geometry\n\nAlgebraic geometry feeds number theory (the modularity theorem for elliptic curves and Fermat's Last Theorem), coding theory (algebraic-geometry codes from curves over finite fields), cryptography (elliptic-curve groups), and mathematical physics (mirror symmetry, moduli spaces of gauge-theory solutions). The machinery of schemes and sheaf cohomology is also far from fully formalized in proof assistants, which makes the subject an informative stress test for tools such as Lean and Mathlib."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A circle is the set of points that satisfy a simple equation. Most of the shapes we meet in geometry can be described like this: as the places where some polynomial equations hold. Algebraic geometry studies all such shapes, called varieties, using algebra to answer geometric questions and geometry to answer algebraic ones.

Its great trick, due to Alexander Grothendieck in the mid-twentieth century, is to treat equations over different number systems in one framework. An equation can be studied over the complex numbers, where it gives a shape you can picture, or over whole numbers or finite number systems, where it asks about counting solutions. The same tools apply to both. This is how deep facts about whole numbers get proved by geometry.

Hodge theory looks at the holes in these shapes, such as the hole in a doughnut. For a nice smooth shape defined by polynomials, the holes can be sorted into pieces of different types. The Hodge conjecture, a Millennium Prize Problem, asks which holes come from actual sub-shapes cut out by equations and which are merely holes in a topological sense. Nobody knows in general.

The subject matters because equations are everywhere: in coding theory, cryptography, robotics, and physics. The analogy to a circle is helpful but incomplete; modern shapes can have many dimensions and no picture.

# Student explanation

An **algebraic variety** is the common zero set of a collection of polynomials: a plane curve $y^2=x^3+ax+b$, or a surface in projective space $\mathbb P^3$. It is often studied over the complex numbers, where it becomes a geometric object with a topology. **Grothendieck's schemes** (1950s–60s) generalize varieties so that polynomial equations over the integers, over finite fields and over $\mathbb C$ sit in one framework. This allows cohomological tools from topology to be applied to arithmetic questions. A landmark example is **Deligne's proof (1974) of the Weil conjectures**, which are the analogue of the Riemann Hypothesis for varieties over finite fields: the number of points on a variety over $\mathbb F_{q^n}$ is a signed sum of $n$-th powers of numbers whose sizes are exactly half-integer powers of $q$, the finite-field version of zeros lying on a single line.

**Cohomology** assigns to a space a sequence of vector spaces $H^k$ that detect holes of dimension $k$. For a smooth complex projective variety $X$ (the case with the nicest structure), the singular cohomology with complex coefficients has a canonical splitting
$H^k(X,\mathbb C)=\bigoplus_{p+q=k}H^{p,q}(X),\qquad \overline{H^{p,q}}=H^{q,p}.$
In words: a $k$-dimensional hole is written as a sum of pieces, where $H^{p,q}$ is represented by differential forms with $p$ holomorphic directions and $q$ antiholomorphic ones. This is the **Hodge decomposition**. It exists because $X$ is Kähler, and it brings constraints: for example, odd-degree Betti numbers are even.

A **Hodge class** is a rational cohomology class in $H^{p,p}$ (the 'balanced' piece). Any algebraic subvariety of codimension $p$ produces such a class. The **Hodge conjecture** says the converse: every Hodge class is a rational linear combination of classes of algebraic subvarieties. It is known for $p=1$ (the Lefschetz $(1,1)$-theorem, 1924), hence for all varieties of dimension at most three, and in some further families; Markman (preprint, 2025) proved it for abelian fourfolds. It is open in general and is a Clay Millennium Prize Problem. The version with integer instead of rational coefficients is false (Atiyah–Hirzebruch). An October 2026 AI-generated manuscript claims the case of abelian varieties with complex multiplication; it is unrefereed and unchecked.

The conjecture matters because it would say that a purely topological and analytic condition, living in the cohomology, detects whether a class comes from solving polynomial equations. It also fits into the conjectural framework of motives, which seeks a universal cohomology theory.

The subject has practical offshoots. Gröbner bases make polynomial systems computable; algebraic curves over finite fields give error-correcting codes; and elliptic curves support much of modern cryptography.
