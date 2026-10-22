---
type: problem
slug: birch-swinnerton-dyer-sha-finiteness-rank-two
title: Finiteness of the Tate–Shafarevich group Ш(E/ℚ) for an elliptic curve of analytic rank 2
entry: elliptic-curves
status: OPEN
origin: Birch and Swinnerton-Dyer, 1960s; Clay Millennium problem
prize: Part of the $1M Clay BSD problem
ratings:
  difficulty: 82
  applicationValue: 12
  leverage: 50
workMix:
  theory: 90
  engineering: 2
  compute: 8
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Clay Mathematics Institute: Birch and Swinnerton-Dyer conjecture"
    url: https://www.claymath.org/millennium/birch-and-swinnerton-dyer-conjecture/
  - title: "Wiles: The Birch and Swinnerton-Dyer conjecture (Clay, PDF)"
    url: https://www.claymath.org/wp-content/uploads/2022/05/birchswin.pdf
  - title: "Bhargava, Skinner: A positive proportion of elliptic curves over ℚ have rank one"
    url: https://arxiv.org/abs/1401.0233
  - title: "Bhargava, Skinner, Zhang: A majority of elliptic curves over ℚ satisfy the BSD rank conjecture"
    url: https://arxiv.org/abs/1407.1826
  - title: "Kim: On the arithmetic of Tate–Shafarevich groups via Kolyvagin’s conjecture (preprint)"
    url: https://arxiv.org/abs/2609.15328
timeline:
  - date: 1965-01-01
    title: BSD conjecture formulated
    body: Birch and Swinnerton-Dyer's computer-based conjecture (date approximate).
    source: https://www.claymath.org/wp-content/uploads/2022/05/birchswin.pdf
  - date: 1990-01-01
    title: Kolyvagin's theorem
    body: Analytic rank ≤ 1 implies equality of ranks and finiteness of Ш (date approximate).
    source: https://www.claymath.org/wp-content/uploads/2022/05/birchswin.pdf
  - date: 2014-01-01
    title: Positive proportion with rank one
    body: Bhargava–Skinner prove a positive proportion of curves have rank one and satisfy BSD.
    source: https://arxiv.org/abs/1401.0233
explainer:
  oneLine: For elliptic curves with a certain behaviour, prove a mysterious group is finite, the first step beyond what is known.
  flow:
    - Rational points form a group with a rank
    - An analytic function should reveal the rank
    - Proofs work when it vanishes 0 or 1 times
    - "Rank 2: no way yet to show Sha is finite"
  glossary:
    - term: elliptic curve
      meaning: The set of solutions of a smooth cubic equation, whose points can be added together.
      link: /research/elliptic-curves
    - term: rank of an elliptic curve
      meaning: The number of independent infinite-order points that generate the rational points.
      link: https://en.wikipedia.org/wiki/Rank_of_an_elliptic_curve
    - term: L-function
      meaning: A zeta-like function built from counting points on the curve modulo each prime.
      link: https://en.wikipedia.org/wiki/Hasse%E2%80%93Weil_zeta_function
    - term: order of vanishing
      meaning: How many times a function equals zero at a point, counting multiplicity.
      link: https://en.wikipedia.org/wiki/Zeros_and_poles
    - term: Birch and Swinnerton-Dyer conjecture
      meaning: A conjecture linking the number of rational points on an elliptic curve to its L-function.
      link: https://en.wikipedia.org/wiki/Birch_and_Swinnerton-Dyer_conjecture
    - term: Tate-Shafarevich group
      meaning: A group measuring equations that have solutions locally everywhere but not globally.
      link: https://en.wikipedia.org/wiki/Tate%E2%80%93Shafarevich_group
    - term: Heegner point
      meaning: A special point on an elliptic curve built from complex multiplication, used to prove the conjecture in rank one.
      link: https://en.wikipedia.org/wiki/Heegner_point
    - term: Mordell-Weil theorem
      meaning: The result that the rational points on an elliptic curve form a finitely generated group.
      link: https://en.wikipedia.org/wiki/Mordell%E2%80%93Weil_theorem
    - term: descent
      meaning: A method that bounds the rank of a curve by computing a related finite group (a Selmer group); it is guaranteed to finish only if Sha is finite.
      link: https://en.wikipedia.org/wiki/Selmer_group
    - term: modularity theorem
      meaning: The result that every elliptic curve over the rationals is linked to a special symmetric function called a modular form.
      link: https://en.wikipedia.org/wiki/Modularity_theorem
    - term: Selmer group
      meaning: A computable finite group that contains information about both the rational points and Sha.
      link: https://en.wikipedia.org/wiki/Selmer_group
    - term: torsion point
      meaning: A point that returns to the starting point after being added to itself finitely many times.
      link: https://en.wikipedia.org/wiki/Torsion_(algebra)
  readFirst:
    - title: Birch and Swinnerton-Dyer conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Birch_and_Swinnerton-Dyer_conjecture
      why: Statement and history of the prize problem.
    - title: "Clay Mathematics Institute: BSD conjecture"
      url: https://www.claymath.org/millennium/birch-and-swinnerton-dyer-conjecture/
      why: Official description.
    - title: Tate-Shafarevich group - Wikipedia
      url: https://en.wikipedia.org/wiki/Tate%E2%80%93Shafarevich_group
      why: What the mysterious group measures.
    - title: Elliptic curves (research entry)
      url: /research/elliptic-curves
      why: Background on the objects and the group law.
site:
  aiReviewed: true
---

Let E/ℚ be an elliptic curve with $\operatorname{ord}_{s=1}L(E,s)=2$. Prove that the Tate–Shafarevich group Ш(E/ℚ) is finite, for at least one such curve and ideally for an infinite family, and that the Mordell–Weil rank equals 2 by a method that does not rely on a case-by-case descent. A complete answer would also give the leading-term formula $L''(E,1)/2=\Omega_E\,\mathrm{Reg}_E\,\prod_p c_p\,|Ш|/|E(\mathbb Q)_{\rm tors}|^2$. For individual curves of analytic rank 2 or 3 the rank equality can be checked by descent (as for the rank-3 curve of conductor 5077), but finiteness of Ш is not known for any curve of analytic rank at least 2. The natural thesis-scale route is a higher-rank Euler or Kolyvagin system, or a p-adic argument, that controls a full p^∞-Selmer group of corank 2.

# State of the art

**Open.** Gross–Zagier (1986) and Kolyvagin (1988–1990), with modularity, prove that analytic rank 0 or 1 implies equality of ranks and finiteness of Ш; the method needs a non-torsion Heegner point, which exists only in analytic rank 1. Skinner–Urban and others proved Iwasawa main conjecture divisibilities for GL₂, giving p-parts of the BSD formula in many rank 0/1 cases. Bhargava–Skinner (2014) showed a positive proportion of curves have rank one, and Bhargava–Skinner–Zhang (2014) that more than 66% of curves, ordered by height, satisfy the rank part of BSD; all such curves have rank 0 or 1. For analytic rank at least 2 the rank equality is checked only curve by curve, and finiteness of Ш is unknown for every such curve. Chan-Ho Kim (arXiv:2609.15328, preprint) shows how Heegner points detect finiteness of the p-primary part of Ш in arbitrary rank under Kolyvagin-type hypotheses, a criterion rather than an unconditional proof. OpenAI's 6–7 October 2026 release (github.com/openai/math, families 002 and 006, unrefereed) claims the full BSD formula whenever some p^∞-Selmer group has corank 0 or 1, and Goldfeld's conjecture for quadratic twists; these claims stay inside corank ≤ 1 and do not address rank 2.

# Applications

Primarily conceptual. Higher-rank Euler systems would extend Iwasawa-theoretic methods that are also used for Galois representations and for explicit determination of rational points on curves. Cryptographic uses of curves rely on point counts, not on BSD.

# Resolution criteria

A proof, for some explicit E/ℚ or an infinite family with analytic rank 2, that rank E(ℚ) = 2 and Ш(E/ℚ) is finite, accepted by experts. Verification of the full BSD formula for such a curve would be a stronger result.

# Rating rationale

Thirty-five years after Kolyvagin there is no Euler system beyond analytic rank 1 and not a single curve of rank ≥ 2 with Ш known to be finite, so 82: below abc (85) and the full BSD conjecture (92 in calibration), which it is a scoped piece of. Application value 12 sits with the other arithmetic problems (abc 13). Leverage 50: a rank-two method would reshape Iwasawa theory and the BSD subfield but few results are conditional on this case alone.

# Work mix rationale

A new Euler-system or p-adic idea is the gap; computations validate formulas but do not prove them.

# Verification

The claim needs the Mordell-Weil rank, analytic rank and Tate-Shafarevich group of an elliptic curve over Q. Mathlib has elliptic curves but not L-functions of curves, Selmer groups or Sha; Formal Conjectures has [Millennium/BSD.lean](https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Millennium/BSD.lean) plus a Sha helper, but these are definitions, not a checkable proof route. Number theorists referee the proof for an explicit curve or family.

# Plain explanation

An elliptic curve is the set of solutions to a certain kind of cubic equation, and one wants to know all its solutions that are fractions. These solutions have a pattern: a finite number of independent building blocks generate all of them. The number of blocks is called the rank.

No known method is guaranteed to find the rank. The Birch and Swinnerton-Dyer conjecture, a Millennium Prize Problem, says the rank can be read off from a related function built by counting solutions modulo each prime: count how many times that function hits zero at a special point, and you have the rank. It also gives an exact formula for a leading number, which includes the size of a puzzling group called the Tate-Shafarevich group (Sha).

When the function hits zero once or not at all, the rank part has been proved and Sha has been shown to be finite, for every such curve. The proof uses a clever construction that produces an actual solution. When it hits zero twice, that construction produces nothing, and no one can show that Sha is finite for even a single such curve.

Individual curves can have their rank checked by computer, one at a time, but there is no general argument.

Think of a lock that has always been opened with a key cut from a special point on the curve. In the rank-two case the key does not exist, and nobody has found another way in.

# Student explanation

Let $E/\mathbb Q$ be an elliptic curve. Its group of rational points is $E(\mathbb Q)\cong\mathbb Z^r\oplus E(\mathbb Q)_{\rm tors}$ (Mordell–Weil), where $r$ is the algebraic **rank**. The **L-function** $L(E,s)$ packages the numbers of points of $E$ modulo each prime into a function of a complex variable $s$. Its _analytic rank_ is the order of vanishing at $s=1$.

The **Birch and Swinnerton-Dyer (BSD) conjecture** states that the analytic rank equals $r$ and that the leading Taylor coefficient is
$\frac{L^{(r)}(E,1)}{r!}=\frac{\Omega_E\,\mathrm{Reg}_E\,\prod_p c_p\,|Ш(E/\mathbb Q)|}{|E(\mathbb Q)_{\rm tors}|^2}.$
Here $\Omega_E$ is a period, $\mathrm{Reg}_E$ a regulator measuring the size of generators, $c_p$ local correction factors, and $Ш$ is the **Tate–Shafarevich group**, which measures failures of a local-to-global principle: it counts curve-like equations that have solutions in every local number system but no rational solution. **That $Ш$ is finite is not known in general**, and the formula presupposes it.

**What is proved.** Gross–Zagier (1986) and Kolyvagin (1988–1990), together with the modularity theorem, show: if the analytic rank is $0$ or $1$, then the ranks agree and $Ш$ is finite. The key is the **Heegner point**, a point built from the theory of complex multiplication, which is a non-torsion point exactly when the analytic rank is $1$. Skinner–Urban and others proved Iwasawa main conjecture divisibilities for $GL_2$ and therefore many cases of the $p$-part of the BSD formula for rank 0 and 1. Bhargava–Skinner (2014) showed a positive proportion of curves have rank one and Bhargava–Skinner–Zhang (2014) that more than $66\%$ of curves, ordered by height, satisfy the rank part of BSD; these all have rank $0$ or $1$.

**The gap at rank 2.** There is no analogue of the Heegner point to supply a point when the analytic rank is 2. For individual curves of analytic rank 2 or 3, the rank equality can be checked by explicit descent (as for the rank-3 curve of conductor 5077), but finiteness of $Ш$ is not known for any single curve of analytic rank at least 2.

**The target.** The problem asks to prove $Ш(E/\mathbb Q)$ is finite, for at least one rank-2 curve and ideally an infinite family, with the rank equal to 2 by a method not relying on case-by-case descent. A complete answer would also give the BSD leading-term formula. A solution would likely require a new construction of points or classes in higher rank, perhaps a higher-rank Euler or Kolyvagin system, or $p$-adic methods.

**Recent claims.** Kim (preprint, 2026) gives a Heegner-point criterion for finiteness of part of $Ш$ in any rank, a criterion rather than an unconditional proof. OpenAI's October 2026 release (unrefereed) claims the full BSD formula in some rank-0 and rank-1 situations; it does not address rank 2.
