---
type: entry
slug: chabauty-kim-method
title: The Chabauty–Kim method for rational points on curves
field: number-theory
kind: THEORY
status: ACTIVE
summary: A p-adic programme, from Chabauty and Coleman to Kim's Selmer schemes and quadratic Chabauty, that cuts the finitely many rational points of a high-genus curve out of a p-adic space.
reliedOn: Explicit rational-point computations on modular curves (such as the level-13 cursed curve) and Kim's route to effective Mordell both rest on its dimension inequality.
dependsOn:
  - elliptic-curves
  - vojta-conjecture-heights
references:
  - title: "Zehavi: The Chabauty–Kim dimension inequality via noncommutative Iwasawa theory (arXiv:2611.18218, preprint)"
    url: https://arxiv.org/abs/2611.18218
    kind: paper
  - title: "Kim: The unipotent Albanese map and Selmer varieties for curves"
    url: https://arxiv.org/abs/math/0510441
    kind: paper
  - title: "Coates, Kim: Selmer varieties for curves with CM Jacobians"
    url: https://arxiv.org/abs/0810.3354
    kind: paper
  - title: "Ellenberg, Hast: Rational points on solvable curves over Q via non-abelian Chabauty"
    url: https://arxiv.org/abs/1706.00525
    kind: paper
  - title: "Balakrishnan, Dogra: Quadratic Chabauty and rational points I: p-adic heights"
    url: https://arxiv.org/abs/1601.00388
    kind: paper
  - title: "Balakrishnan, Dogra, Müller, Tuitman, Vonk: Explicit Chabauty–Kim for the split Cartan modular curve of level 13"
    url: https://arxiv.org/abs/1711.05846
    kind: paper
  - title: "Quanta Magazine: Mathematicians Crack the Cursed Curve"
    url: https://www.quantamagazine.org/mathematicians-crack-the-cursed-curve-20171207/
    kind: article
  - title: "Wikipedia: Faltings's theorem"
    url: https://en.wikipedia.org/wiki/Faltings%27s_theorem
    kind: article
timeline:
  - date: 2005-10-20
    title: Kim introduces unipotent Albanese maps and Selmer varieties
    body: Kim's paper builds p-adic unipotent Albanese maps for curves and uses them to link Birch–Swinnerton-Dyer-type statements to Faltings–Siegel-type finiteness, starting the nonabelian Chabauty programme.
    source: https://arxiv.org/abs/math/0510441
  - date: 2008-10-18
    title: Coates and Kim prove dimension bounds for curves with CM Jacobians
    body: Using multivariable Iwasawa theory, Coates and Kim establish the dimension bounds for curves whose Jacobian splits into CM abelian varieties, giving a new proof of finiteness of rational points for them.
    source: https://arxiv.org/abs/0810.3354
  - date: 2017-11-15
    title: Rational points on the cursed curve X_s(13) by quadratic Chabauty
    body: Balakrishnan, Dogra, Müller, Tuitman and Vonk extend explicit quadratic Chabauty beyond hyperelliptic curves and determine the rational points on the split Cartan modular curve of level 13.
    source: https://arxiv.org/abs/1711.05846
  - date: 2026-11-13
    title: Preprint claims Kim's dimension inequality for all curves of genus at least 2 over Q
    body: Zehavi's 61-page preprint claims the inequality for every smooth projective geometrically connected curve of genus at least 2 over Q with a rational base point, for odd primes of good reduction and sufficiently large depth. Unrefereed; DARC has not checked it.
    source: https://arxiv.org/abs/2611.18218
explainer:
  oneLine: A p-adic method that tries to list the finitely many fraction points of a curve; a 2026 preprint claims to fix its key hypothesis.
  flow:
    - "Faltings: finitely many fractions, no list"
    - Look at the curve p-adically
    - "Kim: use loops on the curve, depth n"
    - Inequality of dimensions makes locus finite
    - Known for special curves; a 2026 preprint claims all over Q
  glossary:
    - term: rational point
      meaning: A point on a curve whose coordinates are all fractions.
      link: https://en.wikipedia.org/wiki/Rational_point
    - term: genus
      meaning: The number of holes of the surface a curve makes over the complex numbers; a circle has genus 0, a doughnut 1.
      link: https://en.wikipedia.org/wiki/Genus_(mathematics)
    - term: Mordell conjecture
      meaning: A curve of genus at least 2 has only finitely many rational points; proved by Faltings in 1983.
      link: https://en.wikipedia.org/wiki/Faltings%27s_theorem
    - term: p-adic numbers
      meaning: A number system for a prime p in which a number is small if it is divisible by a high power of p.
      link: https://en.wikipedia.org/wiki/P-adic_number
    - term: Jacobian
      meaning: A group attached to a curve, into which the curve maps, whose rational points form a finitely generated group.
      link: https://en.wikipedia.org/wiki/Jacobian_variety
    - term: rank
      meaning: The number of independent generators of the group of rational points on the Jacobian or an elliptic curve.
      link: https://en.wikipedia.org/wiki/Mordell%E2%80%93Weil_theorem
    - term: fundamental group
      meaning: The group of loops one can draw in a space, with loops identified if one can be deformed into the other.
      link: https://en.wikipedia.org/wiki/Fundamental_group
    - term: unipotent group
      meaning: A group of matrices that become the identity after taking differences enough times; the building blocks of Kim's depth-n quotients.
      link: https://en.wikipedia.org/wiki/Unipotent_group
    - term: Selmer scheme
      meaning: A space of Galois-equivariant objects in which the paths from a base point to the rational points of a curve live.
      link: https://en.wikipedia.org/wiki/Selmer_group
    - term: Galois cohomology
      meaning: A tool that counts obstructions and extensions for objects carrying an action of a Galois group.
      link: https://en.wikipedia.org/wiki/Galois_cohomology
    - term: complex multiplication
      meaning: An unusual extra symmetry of an elliptic curve or abelian variety that makes its arithmetic easier.
      link: https://en.wikipedia.org/wiki/Complex_multiplication
    - term: Iwasawa theory
      meaning: A theory that studies number fields through infinite towers of extensions and p-adic L-functions.
      link: https://en.wikipedia.org/wiki/Iwasawa_theory
  readFirst:
    - title: "Quanta Magazine: Mathematicians Crack the Cursed Curve"
      url: https://www.quantamagazine.org/mathematicians-crack-the-cursed-curve-20171207/
      why: A readable account of the 2017 level-13 computation and Kim's method.
    - title: "Wikipedia: Faltings's theorem"
      url: https://en.wikipedia.org/wiki/Faltings%27s_theorem
      why: The finiteness theorem the method re-proves and tries to make effective.
    - title: "Wikipedia: p-adic number"
      url: https://en.wikipedia.org/wiki/P-adic_number
      why: The number system in which the whole method works.
    - title: "Coates, Kim: Selmer varieties for curves with CM Jacobians"
      url: https://arxiv.org/abs/0810.3354
      why: The first unconditional case of the inequality; the introduction explains the plan.
raw:
  body: "## What the method is for\n\nA curve of genus at least 2, for example $y^2 = x^5 - x + 1$ or a modular curve, has only finitely many points with rational coordinates. That is the **Mordell conjecture**, proved by Faltings in 1983, but his proof gives no way to *list* the points. The Chabauty–Kim method is the main programme for turning finiteness into an algorithm, by cutting the rational points out of a $p$-adic space with equations.\n\n## From Chabauty to Kim\n\nLet $C$ be a smooth projective curve of genus $g\\ge 2$ over $\\mathbb Q$ with Jacobian $J$. **Chabauty (1941)** showed that if the Mordell–Weil rank of $J(\\mathbb Q)$ is less than $g$, then $C(\\mathbb Q)$ is finite: inside $J(\\mathbb Q_p)$ the closure of $J(\\mathbb Q)$ has dimension at most the rank, too small to contain $C(\\mathbb Q_p)$ in any open set. **Coleman (1985)** made this effective, using $p$-adic integration to find a function that vanishes on every rational point and has finitely many zeros.\n\n**Kim (2005 onward)** replaced the abelian object $J$ by the $p$-adic *unipotent fundamental group* of $C$, filtered into quotients $U_n$ of depth $n$. A rational point $x$ gives a Galois-equivariant path torsor from the base point to $x$, which lands in the **Selmer scheme** $H^1_f(G_{\\mathbb Q,\\Sigma}, U_n^{\\text{ét}})$. A $p$-adic point has a de Rham counterpart in $U_n^{\\mathrm{dR}}/F^0$. Comparing the two gives a map from the Selmer scheme to the de Rham target, and the rational points lie in the locus cut out by the functions that vanish on its image. Depth $n=1$ is Chabauty–Coleman.\n\n## The dimension inequality\n\nThe locus is finite as soon as the image is a proper subvariety, which happens whenever\n$$\\dim H^1_f(G_{\\mathbb Q,\\Sigma}, U_n^{\\text{ét}}) < \\dim U_n^{\\mathrm{dR}}/F^0$$\nfor some $n$. Kim conjectured this for every curve of genus at least 2 over $\\mathbb Q$ (and, with the right setup, over number fields and for $S$-integral points on hyperbolic curves). The dimension of $H^1_f$ is controlled by Euler-characteristic counts and by the second Galois cohomology $H^2$, which the Bloch–Kato and Fontaine–Mazur conjectures would force to vanish in the relevant range. Unconditionally, the inequality was known for $\\mathbb P^1$ minus three points (Kim), curves whose Jacobians are isogenous to products of CM abelian varieties (Coates–Kim, 2008) and covers of $\\mathbb P^1$ with solvable Galois group (Ellenberg–Hast, 2017).\n\n## What it does in practice\n\nWhere the Selmer scheme is small enough, the method computes rational points. **Quadratic Chabauty** (depth 2, Balakrishnan–Dogra) applies when the Jacobian's rank equals $g$ and the Néron–Severi rank is larger than 1, using $p$-adic heights. It determined the rational points on the \"cursed curve\" $X_s(13)$, the split Cartan modular curve of level 13, in 2017 (Balakrishnan–Dogra–Müller–Tuitman–Vonk), finishing the classification of non-CM elliptic curves over $\\mathbb Q$ with split Cartan level structure. Such computations are curve by curve; they do not follow from the inequality alone.\n\n## Where things stand (November 2026)\n\nThe general inequality for curves over $\\mathbb Q$ was open. On 13 November 2026 Sa'ar Zehavi posted a 61-page preprint (arXiv:2611.18218) claiming it for every smooth projective geometrically connected curve of genus at least 2 over $\\mathbb Q$ with a rational base point, for every odd prime of good reduction and all sufficiently large $n$, by bounding $H^2$ with noncommutative Iwasawa theory and character estimates on $\\mathrm{USp}(2g)$. The preprint notes that this gives a new proof of finiteness of rational points over $\\mathbb Q$, not a new theorem, and it does not claim that rational points become effectively computable. It is unrefereed, and its AI declaration says the key bound was developed in a long interaction with an AI system. DARC has not independently checked it.\n"
  student: "**The question.** A **rational point** on a curve is a point whose coordinates are both fractions. For a curve of **genus** $g\\ge 2$ (think of the number of holes in the surface the curve makes over the complex numbers), the Mordell conjecture, proved by Faltings in 1983, says there are only finitely many. The proof gives no list. The Chabauty–Kim method looks for equations that are satisfied by every rational point and have only finitely many solutions.\n\n**Step 1: $p$-adic numbers.** Pick a prime $p$. The $p$-adic numbers $\\mathbb Q_p$ are a way of measuring numbers where \"small\" means \"divisible by a high power of $p$\"; they contain the fractions, and calculus works there. The rational points of the curve $C$ sit inside the much bigger set $C(\\mathbb Q_p)$.\n\n**Step 2: Chabauty–Coleman.** The Jacobian $J$ of $C$ is a group that the curve maps into. Its rational points form a finitely generated group, and the number of independent generators is the **rank** $r$. If $r < g$, then inside $J(\\mathbb Q_p)$ the rational points lie in a subspace of dimension $r$, smaller than the $g$ dimensions available. Coleman showed how to write a $p$-adic integral that vanishes on that subspace. Restricted to the curve it has finitely many zeros, and every rational point is among them.\n\n**Step 3: Kim's idea.** If $r\\ge g$ the argument fails. Kim replaced $J$ by the **unipotent fundamental group** of the curve: the loops one can draw on it, remembered to depth $n$, so that depth 1 is just $J$. Each rational point defines a \"path from a base point to it\" in this group, and the paths of rational points land in a space of Galois-equivariant objects called the **Selmer scheme**, written $H^1_f(G_{\\mathbb Q,\\Sigma},U_n^{\\text{ét}})$. A second copy of the same data, the de Rham version $U_n^{\\mathrm{dR}}/F^0$, lives on the $p$-adic side. The rational points lie in the set where the two descriptions agree.\n\n**Step 4: the inequality.** The set is finite when the Selmer scheme is smaller than the de Rham space:\n$$\\dim H^1_f(G_{\\mathbb Q,\\Sigma},U_n^{\\text{ét}}) < \\dim U_n^{\\mathrm{dR}}/F^0 .$$\nRead it as: fewer unknowns on the global side than equations on the $p$-adic side. Kim conjectured it holds for some $n$ for every curve of genus at least 2. The left side depends on how big the second Galois cohomology $H^2$ is, where Iwasawa theory enters.\n\n**What is known.** It was proved for curves whose Jacobians have complex multiplication (Coates–Kim, 2008) and for solvable covers of the projective line (Ellenberg–Hast, 2017). In practice, quadratic Chabauty, the depth-2 case, found all rational points on the level-13 \"cursed\" modular curve in 2017. On 13 November 2026 Zehavi's preprint claimed the inequality for all curves over $\\mathbb Q$ with a rational base point, by bounding $H^2$ with Iwasawa theory and character estimates on the group $\\mathrm{USp}(2g)$. It is unrefereed. It is a new proof of Faltings's finiteness over $\\mathbb Q$, not a new theorem, and it does not make point-finding algorithms for every curve."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Some equations have only finitely many answers that are fractions. Take a curve with at least two holes (its genus) and ask which points on it have fractions for both coordinates. In 1983 Gerd Faltings proved there are only finitely many. But his proof does not say how to find them.

A method that started with Claude Chabauty in 1941 tries to find them. The idea is to look at the curve through a different number system, where numbers are measured by how divisible they are by a prime like 7. The fraction points leave a very thin trail inside that world, and a few well-chosen equations can pick them out. The original method works only when a certain count is small. In the 2000s Minhyong Kim extended it, using the loops one can draw on the curve.

His version works whenever one inequality between two sizes holds. For about twenty years that inequality was known only for special families of curves. On 13 November 2026 a preprint by Sa'ar Zehavi claimed to prove it for all curves over the fractions. Other experts have not yet checked it, and the author says an AI system helped develop the key step.

An analogy: finding all the fish in a lake is hard, but if you know the fish can only be in a thin channel, you can search there. The method builds the channel. Where the analogy breaks: even a proven inequality would not by itself tell you how to search every curve.
