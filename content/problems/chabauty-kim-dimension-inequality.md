---
type: problem
slug: chabauty-kim-dimension-inequality
title: Kim's dimension inequality for every curve of genus at least 2
entry: chabauty-kim-method
status: OPEN
origin: Minhyong Kim, 2005 (Selmer varieties and the unipotent Albanese map)
ratings:
  difficulty: 70
  applicationValue: 30
  leverage: 50
verification:
  route: REVIEW
sources:
  - title: "Zehavi: The Chabauty–Kim dimension inequality via noncommutative Iwasawa theory (arXiv:2611.18218, 13 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.18218
  - title: "Kim: The unipotent Albanese map and Selmer varieties for curves (arXiv:math/0510441)"
    url: https://arxiv.org/abs/math/0510441
  - title: "Coates, Kim: Selmer varieties for curves with CM Jacobians (arXiv:0810.3354)"
    url: https://arxiv.org/abs/0810.3354
  - title: "Ellenberg, Hast: Rational points on solvable curves over Q via non-abelian Chabauty (arXiv:1706.00525)"
    url: https://arxiv.org/abs/1706.00525
  - title: "Balakrishnan, Dogra: Quadratic Chabauty and rational points I: p-adic heights (arXiv:1601.00388)"
    url: https://arxiv.org/abs/1601.00388
  - title: "Balakrishnan, Dogra, Müller, Tuitman, Vonk: Explicit Chabauty–Kim for the split Cartan modular curve of level 13 (arXiv:1711.05846)"
    url: https://arxiv.org/abs/1711.05846
  - title: "Wikipedia: Faltings's theorem"
    url: https://en.wikipedia.org/wiki/Faltings%27s_theorem
links:
  - to: abc-conjecture
    kind: RELATED
    note: "Both are routes to control of rational points on high-genus curves: abc-type height bounds on one side, p-adic Selmer schemes on the other."
  - to: birch-swinnerton-dyer-sha-finiteness-rank-two
    kind: RELATED
    note: Kim's programme links Birch and Swinnerton-Dyer-type statements about Selmer groups to nonlinear finiteness, and vanishing of H^2 of Bloch–Kato type is what made the inequality conditional.
timeline:
  - date: 2008-10-18
    title: "Coates and Kim: dimension bounds for curves with CM Jacobians"
    body: Elementary multivariable Iwasawa theory gives the bounds when the Jacobian splits into CM abelian varieties.
    source: https://arxiv.org/abs/0810.3354
  - date: 2017-06-02
    title: "Ellenberg and Hast: solvable covers of P^1"
    body: Extends the Coates–Kim result to curves geometrically dominating a curve with CM Jacobian, hence to solvable covers of P^1 and superelliptic curves over Q.
    source: https://arxiv.org/abs/1706.00525
  - date: 2026-11-13
    title: "Zehavi: the dimension inequality over Q, via noncommutative Iwasawa theory (preprint)"
    body: Claims Kim's inequality for every genus-at-least-2 curve over Q with a rational base point, for odd primes of good reduction and large n, by an H^2 bound with a power saving. Unrefereed; its AI declaration describes a long interaction with an AI system.
    source: https://arxiv.org/abs/2611.18218
explainer:
  oneLine: Does Kim's size inequality hold for every curve of genus 2 or more? An unrefereed 2026 preprint says yes over the rationals.
  flow:
    - "Kim: fewer unknowns than equations"
    - Needs H^2 to be small
    - Proved for CM and solvable cases
    - 2026 preprint bounds H^2 for all curves over Q
    - Unrefereed; AI-assisted by its own account
  glossary:
    - term: rational point
      meaning: A point on a curve whose coordinates are all fractions.
      link: https://en.wikipedia.org/wiki/Rational_point
    - term: genus
      meaning: The number of holes of the surface a curve makes over the complex numbers; a circle has genus 0, a doughnut 1.
      link: https://en.wikipedia.org/wiki/Genus_(mathematics)
    - term: Faltings's theorem
      meaning: A curve of genus at least 2 has only finitely many rational points (the Mordell conjecture).
      link: https://en.wikipedia.org/wiki/Faltings%27s_theorem
    - term: p-adic numbers
      meaning: A number system for a prime p in which a number is small if it is divisible by a high power of p.
      link: https://en.wikipedia.org/wiki/P-adic_number
    - term: Selmer scheme
      meaning: A space of Galois-equivariant objects in which the paths from a base point to the rational points of a curve live.
      link: https://en.wikipedia.org/wiki/Selmer_group
    - term: Galois cohomology
      meaning: A tool that counts obstructions and extensions for objects carrying an action of a Galois group.
      link: https://en.wikipedia.org/wiki/Galois_cohomology
    - term: fundamental group
      meaning: The group of loops one can draw in a space, with loops identified if one can be deformed into the other.
      link: https://en.wikipedia.org/wiki/Fundamental_group
    - term: Iwasawa theory
      meaning: A theory that studies number fields through infinite towers of extensions and p-adic L-functions.
      link: https://en.wikipedia.org/wiki/Iwasawa_theory
    - term: complex multiplication
      meaning: An unusual extra symmetry of an elliptic curve or abelian variety that makes its arithmetic easier.
      link: https://en.wikipedia.org/wiki/Complex_multiplication
    - term: preprint
      meaning: A paper posted publicly before peer review; its claims have not yet been checked by independent referees.
      link: https://arxiv.org/abs/2611.18218
  readFirst:
    - title: "Quanta Magazine: Mathematicians Crack the Cursed Curve"
      url: https://www.quantamagazine.org/mathematicians-crack-the-cursed-curve-20171207/
      why: What the method does when it works, in plain language.
    - title: "Kim: The unipotent Albanese map and Selmer varieties for curves"
      url: https://arxiv.org/abs/math/0510441
      why: Where the conjecture comes from; the introduction states the plan.
    - title: "Zehavi: The Chabauty–Kim dimension inequality via noncommutative Iwasawa theory (preprint, unrefereed)"
      url: https://arxiv.org/abs/2611.18218
      why: The claim; Section 1 states the results and the AI declaration.
raw:
  body: "Let $C$ be a smooth projective geometrically connected curve of genus $g\\ge2$ over a number field $K$, $p$ a prime of good reduction and $\\Sigma$ a finite set of places containing those above $p$ and the bad places. Kim's conjecture asks for some $n\\ge1$ with $$\\dim H^1_f(G_{K,\\Sigma},U_n^{\\text{ét}}) < \\dim U_n^{\\mathrm{dR}}/F^0,$$ where $U_n$ is the depth-$n$ quotient of the $p$-adic unipotent fundamental group of $C$. The inequality makes the Chabauty–Kim locus finite and so re-proves finiteness of $C(K)$ (Faltings). The conjecture is also formulated for $S$-integral points on hyperbolic curves over rings of $S$-integers. **The open problem is the inequality in full generality**: all number fields, punctured curves and integral points, and base points that are not rational. A closely related stronger conjecture of Kim predicts that the Chabauty–Kim locus equals the set of rational (or integral) points for large $n$; that is not what is asked here."
  verifySpec: "Experts in Iwasawa theory and nonabelian Chabauty referee the 61-page preprint: the reduction of dim H^2 to kernels of Iwasawa operators over the field Q(A[p^c]) (Hochschild–Serre and the torsion property of the Iwasawa module), the noncommutative Weierstrass-type reduction and the Hilbert-series count, the character estimate on USp(2g) behind Theorem 1.4 and the finite exceptional set of weights, and the deduction of Corollary 1.5 (all large n, every odd prime of good reduction). A concrete check is to test the claimed bound on small examples where H^2 and the Selmer dimension are computable, such as the CM genus-2 cases already covered by Coates–Kim, and to confirm that no unproved Fontaine–Mazur or Bloch–Kato input is used."
  student: "**What is asked.** Fix a curve $C$ of genus $g\\ge2$ over $\\mathbb Q$, a prime $p$ where $C$ is well behaved, and a depth $n\\ge1$. Kim defines two spaces. One, $H^1_f(G_{\\mathbb Q,\\Sigma},U_n^{\\text{ét}})$, is a \"Selmer scheme\" built from Galois-theoretic data of the curve; the other, $U_n^{\\mathrm{dR}}/F^0$, is a $p$-adic space built from differential equations on the curve. Rational points give points of the first that map to the second. The conjecture is\n$$\\dim H^1_f(G_{\\mathbb Q,\\Sigma},U_n^{\\text{ét}}) < \\dim U_n^{\\mathrm{dR}}/F^0 \\quad\\text{for some } n.$$\n\n**Why it matters.** If a map from a smaller space to a bigger one has nonzero functions vanishing on its image, then every rational point is a zero of such a function, restricted to the curve. A nonzero analytic function on a $p$-adic disc has finitely many zeros, so the rational points are finitely many. This is the same dimension count as in first-year linear algebra: a system with fewer unknowns than equations is overdetermined. At $n=1$ it is Chabauty's condition \"rank less than $g$\". At larger $n$ it is more flexible.\n\n**The hard part.** The dimension of the left side is bounded by an Euler-characteristic count plus a correction from $H^2$, the second Galois cohomology (a vector space measuring obstructions). Two big conjectures, Bloch–Kato and Fontaine–Mazur, would make $H^2$ vanish in the needed range, so the inequality was known conditionally. To avoid them one bounds $H^2$ directly. Coates and Kim did this when the Jacobian has complex multiplication, using commutative Iwasawa theory; Ellenberg and Hast extended it to solvable covers of the projective line.\n\n**The 2026 claim.** Zehavi's preprint claims a bound $\\dim H^2(G_{\\mathbb Q,\\Sigma},V_{\\lambda,s}) \\ll \\min\\{d_\\lambda,\\ (1+\\|\\lambda\\|)^{D-g-1}/d_\\lambda\\}$ for irreducible representations of the symplectic group $\\mathrm{Sp}_{2g}$ (here $d_\\lambda$ is the representation's dimension and $D=2g^2+g$), valid outside a finite set of weights. It uses noncommutative Iwasawa theory, which studies the Galois group of an infinite tower of fields, and character estimates on $\\mathrm{USp}(2g)$ to get a power saving. This gives the inequality for all $n$ large enough, for every odd prime of good reduction. The paper's AI declaration says the key bound was developed in a long interaction with an AI system.\n\n**What to keep in mind.** It is an unrefereed preprint. The consequence it states, finiteness of rational points, is Faltings's theorem again. It does not claim the method is effective, and the threshold for $n$ and the exceptional weights are not computed. Number fields other than $\\mathbb Q$ and general punctured curves are untouched."
site:
  aiReviewed: true
---

# State of the art

**Open in general; one unrefereed preprint claims the case over Q.** Kim proved it for the thrice-punctured line and for punctured CM elliptic curves of rank one, and showed it for hyperbolic curves over $\mathbb Z[1/S]$ conditionally on the Bloch–Kato or Fontaine–Mazur conjectures (as summarised in Zehavi's preprint). Coates and Kim (2008, published 2010) proved it unconditionally for curves over $\mathbb Q$ whose Jacobians are isogenous to products of CM abelian varieties, and Ellenberg and Hast (2017, IMRN 2021) for curves geometrically dominating a curve with CM Jacobian, which covers solvable covers of $\mathbb P^1$ and superelliptic curves.

On 13 November 2026 Zehavi posted arXiv:2611.18218 (61 pages), claiming the inequality for every smooth projective geometrically connected curve of genus at least 2 over $\mathbb Q$ with a rational base point, for every odd prime of good reduction and all sufficiently large $n$. The method bounds $H^2$ of the relevant Galois representations through kernels of noncommutative Iwasawa operators on representations of $\mathrm{Sp}_{2g}$, with a power-saving bound from character estimates on $\mathrm{USp}(2g)$; the $H^2$ bound holds outside a finite set of weights that the paper shows exists but does not compute. The preprint is unrefereed and its AI declaration says the nontrivial bound was developed in a long interaction with an AI system. DARC has not checked it, so the problem stays OPEN.

What would remain even if it is correct: curves over number fields other than $\mathbb Q$, general punctured curves and integral points, and the stronger conjecture that the Chabauty–Kim locus equals the set of points. Nothing in the preprint makes rational-point computation effective: the threshold for $n$ and the exceptional weights are not quantified, and the paper notes the vanishing locus may contain extra $p$-adic points.

# Applications

Indirect. The inequality alone gives a new proof of finiteness of rational points, not a new result over $\mathbb Q$. Its value is as the hypothesis under which Kim's method can be pushed towards explicit determination of rational and integral points; such computations (quadratic Chabauty on modular curves) already work curve by curve without it.

# Resolution criteria

A refereed proof of the inequality for all curves of genus at least 2 over $\mathbb Q$, accepted by experts in Iwasawa theory and nonabelian Chabauty, would settle the case over $\mathbb Q$. The full problem also needs number fields and punctured curves. A refereed publication or independent expert verification is needed to change the status from OPEN; given the author-stated AI involvement, an independently re-derived $H^2$ bound would be especially valuable.

# Rating rationale

Difficulty 4 of 5: a central open conjecture of nonabelian Chabauty since 2005, proved only in CM and solvable-cover cases until an unchecked 2026 preprint. Application value 2: it sharpens a method already used for explicit computations and gives no new finiteness result over Q. Leverage 3: it is the hypothesis under which Kim's method gives finiteness and points towards effective Mordell, a few results in one subfield.

# Plain explanation

Kim's method for finding the fraction points on a curve needs one inequality between two sizes. If the inequality holds, the method at least proves there are only finitely many such points. If it holds and some more work is done, it can sometimes list them all.

Think of a library where you want to find the one book that matches a description. The inequality says that the description is narrow enough that only finitely many books can match. Without it, you cannot even rule out that infinitely many do.

Minhyong Kim guessed in 2005 that the inequality always holds for curves with at least two holes. For nearly twenty years it was proved only for special families, for example curves with unusual extra symmetry. On 13 November 2026 a 61-page preprint by Sa'ar Zehavi claimed to prove it for every such curve over the fractions, using tools from a part of number theory built around infinite towers of number systems. The author says an AI system played a large part in developing the key estimate.

Nobody independent has checked it. Even if it is right, it does not give a new result about the fraction points themselves, since finiteness was proved long ago, and it does not turn the method into a recipe that works on every curve. It also leaves open the same question for curves over other number systems. So it is listed as open, with the claim under review.
