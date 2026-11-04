---
type: entry
slug: vojta-conjecture-heights
title: Heights, Arakelov theory and Vojta's conjecture
field: number-theory
kind: THEORY
status: ACTIVE
summary: Heights measure the arithmetic size of rational points; Arakelov and adelic intersection theory bound them, and Vojta's conjecture predicts sharp bounds that would imply abc and effective Mordell.
reliedOn: Vojta's conjecture is the master statement behind abc, Szpiro and effective versions of Faltings' theorem, and height machinery is the standard language for quantitative Diophantine results.
dependsOn:
  - elliptic-curves
references:
  - title: "Vojta: Diophantine approximations and value distribution theory (Lecture Notes in Mathematics 1239, 1987)"
    url: https://link.springer.com/book/10.1007/BFb0072989
    kind: book
  - title: "Hindry, Silverman: Diophantine Geometry: An Introduction (GTM 201)"
    url: https://link.springer.com/book/10.1007/978-1-4612-1210-2
    kind: book
  - title: "Moret-Bailly: Hauteurs et classes de Chern sur les surfaces arithmétiques (Astérisque 183, 1990)"
    url: https://www.numdam.org/item/AST_1990__183__37_0/
    kind: paper
  - title: "Wikipedia: Vojta's conjecture"
    url: https://en.wikipedia.org/wiki/Vojta%27s_conjecture
    kind: article
  - title: "Soulé: On the abc conjecture (arXiv:2611.05217, preprint)"
    url: https://arxiv.org/abs/2611.05217
    kind: paper
timeline:
  - date: 2026-11-03
    title: Preprint claims a genus-2 Vojta-type bound with constant 12+ε
    body: Soulé claims h(P) ≤ (12+ε)·log|Δ_F|/[F:Q] + c(ε) for points on genus-2 curves over number fields, and a weak abc with exponent 24+ε. Unrefereed; no independent assessment found.
    source: https://arxiv.org/abs/2611.05217
explainer:
  oneLine: A way to measure how complicated a rational solution is, and a conjecture bounding it that would imply abc.
  flow:
    - Rational points on curves are finite
    - Height scores how complicated each one is
    - "Vojta: height ≤ field complexity"
    - Arakelov geometry turns heights into intersections
    - "Parshin: sharp bound would give abc"
  glossary:
    - term: height
      meaning: A number measuring how arithmetically complicated a rational point is; only finitely many points lie below any given height.
      link: https://en.wikipedia.org/wiki/Height_function
    - term: genus
      meaning: The number of holes of a curve viewed over the complex numbers; a curve of genus 2 looks like a pretzel with two holes.
      link: https://en.wikipedia.org/wiki/Genus_(mathematics)
    - term: number field
      meaning: A finite extension of the rational numbers, such as the numbers a + b√2 with a and b rational.
      link: https://en.wikipedia.org/wiki/Number_field
    - term: discriminant
      meaning: A whole number measuring how ramified a number field is; larger values mean a more complicated field.
      link: https://en.wikipedia.org/wiki/Discriminant_of_an_algebraic_number_field
    - term: canonical bundle
      meaning: The natural line bundle attached to a curve, built from its differential forms; its degree on a genus g curve is 2g − 2.
      link: https://en.wikipedia.org/wiki/Canonical_bundle
    - term: Arakelov theory
      meaning: Intersection theory on arithmetic surfaces that adds the real and complex places so degrees of bundles become heights.
      link: https://en.wikipedia.org/wiki/Arakelov_theory
    - term: Faltings' theorem
      meaning: A curve of genus at least 2 over a number field has only finitely many rational points.
      link: https://en.wikipedia.org/wiki/Faltings%27s_theorem
    - term: abc conjecture
      meaning: For coprime a + b = c, the number c is bounded by a power just above one of the product of the primes dividing abc.
      link: /research/elliptic-curves/questions/abc-conjecture
    - term: elliptic curve
      meaning: A smooth cubic curve with a group law on its points; the genus-1 case.
      link: /research/elliptic-curves
    - term: Szpiro's conjecture
      meaning: A bound on the discriminant of an elliptic curve in terms of its conductor; equivalent to a form of abc.
      link: https://en.wikipedia.org/wiki/Szpiro%27s_conjecture
  readFirst:
    - title: "Wikipedia: Height function"
      url: https://en.wikipedia.org/wiki/Height_function
      why: Gentle definition of naive heights and why finiteness holds.
    - title: "Wikipedia: Vojta's conjecture"
      url: https://en.wikipedia.org/wiki/Vojta%27s_conjecture
      why: Statements and consequences in one page, including the link to abc.
    - title: "Wikipedia: Arakelov theory"
      url: https://en.wikipedia.org/wiki/Arakelov_theory
      why: Overview of the geometry behind arithmetic intersection numbers.
    - title: "Wikipedia: Faltings' theorem"
      url: https://en.wikipedia.org/wiki/Faltings%27s_theorem
      why: What is proved about rational points on curves and why it is not effective.
raw:
  body: "## Heights: size of a rational point\n\nA **height** assigns a real number to a rational point of an algebraic variety, measuring how arithmetically complicated it is. On the projective line over $\\mathbb Q$ the point $[a:b]$ in lowest terms has the naive height $\\log\\max(|a|,|b|)$. Only finitely many points lie below any given height (Northcott's theorem), so a height bound turns \"are there infinitely many solutions?\" into a finite search. For a variety $X$ and a line bundle $L$ one gets a height $h_L$, well defined up to a bounded error. The **logarithmic height** is this $h_L$ normalised by the degree of the field of definition.\n\n## The conjectures\n\nFor a smooth projective curve $C$ of genus at least 2 over a number field, Faltings proved in 1983 that $C(K)$ is finite (the Mordell conjecture), but the proof gives no bound on the size of the points. **Vojta's conjecture** (1987, by analogy with Nevanlinna theory) is a family of inequalities relating the height $h_K$ of the canonical bundle to the arithmetic complexity of the field of definition. In its simplest form for a curve $C$ it says that for every $\\varepsilon>0$,\n$$h_K(P)\\le (1+\\varepsilon)\\,\\frac{\\log|\\Delta_F|}{[F:\\mathbb Q]}+c(\\varepsilon)$$\nfor points $P\\in C(F)$ over number fields $F$ of discriminant $\\Delta_F$. Such an inequality would make the Mordell conjecture effective and would imply the **abc conjecture** through a construction of Parshin and Moret-Bailly. Strong forms of abc and of **Szpiro's conjecture** on elliptic curves are likewise statements about heights.\n\n## Tools: Arakelov and adelic intersection theory\n\nArakelov (1974) extended intersection theory on a surface fibred over $\\operatorname{Spec}\\mathbb Z$ by adding the archimedean places, so that the arithmetic degree of a line bundle becomes a height. Faltings, Gillet and Soulé developed the higher-dimensional theory. Zhang's **adelic line bundles** allow metrics at every place of the field, and Yuan and Zhang's book systematises intersection numbers of adelic bundles on quasi-projective varieties. Heights of points on a curve can then be compared to self-intersection numbers, which can be bounded with Minkowski's theorem on lattices together with classical intersection computations.\n\n## Status\n\nVojta's conjecture is open in general. The Parshin and Moret-Bailly programme (late 1980s) reduced abc to a height inequality on a Kodaira fibration over a curve, but the needed bound on the relative dualizing sheaf, a Bogomolov-Miyaoka-Yau type inequality for arithmetic surfaces, was not proved at the time. In November 2026 a preprint by Soulé claims, using adelic intersection theory in this spirit, a weaker inequality for genus-2 curves with the constant $12+\\varepsilon$ in place of $1+\\varepsilon$, and from it an abc-type bound with exponent $24+\\varepsilon$. That preprint is unrefereed and has not been assessed by independent experts."
  student: "**Heights.** A rational number $p/q$ in lowest terms has height $h=\\log\\max(|p|,|q|)$. The key property (Northcott) is that for any bound $B$ there are only finitely many rational numbers with $h\\le B$. A point on a curve defined by polynomial equations with rational coefficients gets a height from its coordinates in the same way. The height is a measure of \"arithmetic size\", the way a vector's length measures geometric size.\n\n**The problem.** A curve of **genus** at least 2 (over the complex numbers, a surface with at least two holes) has only finitely many points with rational coordinates. This is Faltings' theorem (1983). The proof does not say how large these points can be. A bound on $h(P)$ for all rational points $P$ would make the finite search explicit, and so make the theorem **effective**.\n\n**Vojta's conjecture.** Vojta compared this to Nevanlinna theory in complex analysis and predicted inequalities of the following shape for a curve $C$ over a number field and points $P$ over number fields $F$:\n$$h_K(P)\\le(1+\\varepsilon)\\frac{\\log|\\Delta_F|}{[F:\\mathbb Q]}+c(\\varepsilon).$$\nHere $h_K$ is the height attached to the canonical bundle (the natural line bundle of the curve), and $\\Delta_F$ is the discriminant, a whole number that grows as the number system $F$ becomes more complicated. In words: a solution cannot be arithmetically complicated unless the field it lives in is. The right side depends on $P$ only through its field.\n\n**Link to abc.** Parshin and Moret-Bailly showed (late 1980s) that an inequality of this type for a suitable curve implies abc: build a family of curves from a triple $a+b=c$, apply the height bound to the corresponding point, and read off a bound for $c$ in terms of the product of the primes dividing $abc$. A larger constant in front of the discriminant gives a larger exponent in abc.\n\n**Arakelov and adelic geometry.** To get such bounds, one needs an intersection theory that treats $\\operatorname{Spec}\\mathbb Z$ like a curve with extra points at infinity (Arakelov, 1974). Self-intersection numbers of line bundles are then heights. An **adelic metric** (Zhang) puts a size on the line bundle at every prime and at infinity at once. A typical strategy computes the same intersection number two ways: one from classical geometry, one from a lattice argument (Minkowski's theorem bounds the shortest vectors of a lattice of known volume). Together they bound the height.\n\n**What is known.** The sharp inequality is open in general. In November 2026 a preprint (Soulé, arXiv:2611.05217, unrefereed) claims the inequality with constant $12+\\varepsilon$ for genus-2 curves over number fields, and a weak abc with exponent $24+\\varepsilon$ instead of $1+\\varepsilon$."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Some equations have only finitely many whole-number or fraction solutions, but nobody can tell you how big the biggest one is. Imagine a treasure map that says "there are only a few chests" without saying how far from home they are buried.

Mathematicians invented a "complexity score" for a solution, called a height. A fraction like 1/2 has a low score. A fraction like 9803/45521 has a higher one. The useful fact is that there are only finitely many solutions below any given score, so a limit on the score turns an endless hunt into a finite search.

A conjecture by Paul Vojta, from 1987, predicts a limit on the score of solutions to certain curve equations. The limit depends on how tangled the number system used to write the solution is. If it were proved with the best constants, it would imply the abc conjecture, one of the great open problems about adding and multiplying whole numbers.

The tools are strange: a branch of geometry that treats whole numbers as if they were points on a surface, and measures sizes by drawing intersections. A preprint in November 2026 claims a weaker version of the limit for one family of curves. It has not yet been checked by other experts, so nobody should treat it as settled.

The map analogy breaks down in one place: the limit would be a statement about every solution at once, not a way to find one.
