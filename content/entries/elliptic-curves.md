---
type: entry
slug: elliptic-curves
title: Elliptic curves
field: number-theory
kind: THEORY
status: MATURE
summary: Smooth cubic curves with a group law, central to modern number theory (modularity, Fermat's Last Theorem) and to deployed public-key cryptography.
reliedOn: The modularity theorem for elliptic curves over $\mathbb{Q}$ is the engine of Wiles's proof of Fermat's Last Theorem, and the arithmetic of elliptic curves motivates the BSD and abc conjectures. Elliptic-curve cryptography secures a large share of today's internet traffic.
dependsOn:
  - algebraic-geometry
  - analytic-number-theory
references:
  - title: A. Wiles, Modular elliptic curves and Fermat's Last Theorem, Annals of Mathematics 141 (1995)
    url: https://annals.math.princeton.edu/1995/141-3/p01
    kind: paper
  - title: A. Wiles, The Birch and Swinnerton-Dyer Conjecture (Clay official description)
    url: https://www.claymath.org/wp-content/uploads/2022/05/birchswin.pdf
    kind: article
  - title: M. Bhargava and C. Skinner, A positive proportion of elliptic curves over Q have rank one
    url: https://arxiv.org/abs/1401.0233
    kind: paper
  - title: A. Smith, 2^∞-Selmer groups, 2^∞-class groups, and Goldfeld's conjecture
    url: https://arxiv.org/abs/1702.02325
    kind: paper
  - title: Quanta Magazine, New elliptic curve breaks 18-year-old record (2024)
    url: https://www.quantamagazine.org/new-elliptic-curve-breaks-18-year-old-record-20241111/
    kind: article
  - title: "Clay Mathematics Institute: Birch and Swinnerton-Dyer Conjecture"
    url: https://www.claymath.org/millennium/birch-and-swinnerton-dyer-conjecture/
    kind: docs
timeline:
  - date: 1995-05-01
    title: Modularity of semistable elliptic curves and Fermat's Last Theorem
    body: Wiles, with Taylor, proves the semistable case of modularity, which suffices for Fermat's Last Theorem. The paper appeared in the Annals in 1995 (issue 141(3), May).
    source: https://annals.math.princeton.edu/1995/141-3/p01
  - date: 2014-01-01
    title: A positive proportion of elliptic curves have rank one
    body: Bhargava and Skinner prove that a positive proportion of elliptic curves over $\mathbb{Q}$, ordered by height, have algebraic and analytic rank one, so the average rank is strictly positive.
    source: https://arxiv.org/abs/1401.0233
  - date: 2017-02-08
    title: Distribution of 2-power Selmer groups in quadratic twists
    body: Alexander Smith proves the predicted distribution of $2^\infty$-Selmer groups in quadratic-twist families of curves with full rational 2-torsion and no rational cyclic 4-isogeny, so that twists of rank at least two number $o(N)$ among $|d|<N$, supporting Goldfeld's conjecture.
    source: https://arxiv.org/abs/1702.02325
  - date: 2024-08-01
    title: A curve of rank at least 29
    body: Elkies and Klagsbrun find an elliptic curve over $\mathbb{Q}$ with rank at least 29 (exactly 29 under GRH), breaking Elkies's 2006 record of 28. Month as reported; day not asserted.
    source: https://www.quantamagazine.org/new-elliptic-curve-breaks-18-year-old-record-20241111/
explainer:
  oneLine: Curves defined by simple cubic equations whose points can be added together like numbers.
  flow:
    - A cubic curve, drawn as points
    - Chord and tangent rule adds points
    - Point sets form a group with a rank
    - Used for Fermat's theorem and encryption
  glossary:
    - term: elliptic curve
      meaning: The set of solutions of a smooth cubic equation in two variables, with a special point at infinity.
      link: https://en.wikipedia.org/wiki/Elliptic_curve
    - term: group
      meaning: A set with an addition-like operation that is associative, has a neutral element and has inverses.
      link: https://en.wikipedia.org/wiki/Group_(mathematics)
    - term: rational point
      meaning: A point on a curve whose coordinates are fractions.
      link: https://en.wikipedia.org/wiki/Rational_point
    - term: Mordell-Weil theorem
      meaning: The result that the rational points on an elliptic curve form a finitely generated group.
      link: https://en.wikipedia.org/wiki/Mordell%E2%80%93Weil_theorem
    - term: rank
      meaning: The number of independent points of infinite order generating the rational points of a curve.
      link: https://en.wikipedia.org/wiki/Rank_of_an_elliptic_curve
    - term: finite field
      meaning: A number system with finitely many elements, such as arithmetic modulo a prime.
      link: https://en.wikipedia.org/wiki/Finite_field
    - term: Birch and Swinnerton-Dyer conjecture
      meaning: A conjecture linking the number of rational points on an elliptic curve to the behaviour of its L-function.
      link: https://en.wikipedia.org/wiki/Birch_and_Swinnerton-Dyer_conjecture
    - term: modular form
      meaning: A highly symmetric complex function; elliptic curves over the rationals correspond to special ones.
      link: https://en.wikipedia.org/wiki/Modular_form
    - term: Fermat's Last Theorem
      meaning: Two positive whole numbers raised to the same power greater than 2 never add up to a third number raised to that power.
      link: https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem
    - term: elliptic-curve cryptography
      meaning: Encryption that relies on the difficulty of reversing repeated addition of points on an elliptic curve.
      link: https://en.wikipedia.org/wiki/Elliptic-curve_cryptography
    - term: Tate-Shafarevich group
      meaning: A group measuring equations that have solutions in every local number system but no global solution; conjectured to be finite.
      link: https://en.wikipedia.org/wiki/Tate%E2%80%93Shafarevich_group
    - term: discrete logarithm
      meaning: Given a point P and the result of adding P to itself k times, the problem of finding k.
      link: https://en.wikipedia.org/wiki/Discrete_logarithm
  readFirst:
    - title: Elliptic curve - Wikipedia
      url: https://en.wikipedia.org/wiki/Elliptic_curve
      why: Definition, pictures of the group law and the main results.
    - title: Fermat's Last Theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem
      why: The story of how elliptic curves settled a 350-year-old question.
    - title: Elliptic-curve cryptography - Wikipedia
      url: https://en.wikipedia.org/wiki/Elliptic-curve_cryptography
      why: How these curves protect everyday communication.
    - title: "Quanta: New elliptic curve breaks 18-year-old record"
      url: https://www.quantamagazine.org/new-elliptic-curve-breaks-18-year-old-record-20241111/
      why: A readable account of the hunt for curves with large rank.
site:
  published: true
  aiReviewed: true
---

## Definition

An elliptic curve over a field $K$ (of characteristic not 2 or 3) is the set of solutions of
$y^2=x^3+ax+b,\qquad 4a^3+27b^2\neq 0,$
together with a point at infinity $O$. The nonvanishing discriminant ensures the curve is smooth. Over $\mathbb{C}$ such a curve is a torus $\mathbb{C}/\Lambda$; over $\mathbb{Q}$ and finite fields it is a source of deep arithmetic.

## The group law

Chords and tangents define an addition: three collinear points sum to $O$. This makes the set $E(K)$ of $K$-rational points an abelian group.

- **Mordell–Weil theorem.** For a number field $K$, $E(K)\cong \mathbb{Z}^r\oplus E(K)_{\mathrm{tors}}$ with $r$ finite, the _rank_. Mazur (1977) classified the possible torsion subgroups over $\mathbb{Q}$ (15 groups). No algorithm is proven to compute the rank in general; the standard descent method is guaranteed to terminate only if the Tate–Shafarevich group is finite, which is conjectured but unproven.
- **Finite fields.** Hasse's bound gives $\left|\#E(\mathbb{F}_p)-(p+1)\right|\le 2\sqrt{p}$. Schoof's algorithm counts points in polynomial time.

## $L$-functions and modularity

Counting points modulo every prime packages into the Hasse–Weil $L$-function $L(E,s)=\prod_p L_p(E,p^{-s})^{-1}$. The modularity theorem (Wiles and Taylor–Wiles for semistable curves, 1995; Breuil, Conrad, Diamond and Taylor in general, 2001) says every elliptic curve over $\mathbb{Q}$ corresponds to a weight-2 modular form, which proves that $L(E,s)$ has an analytic continuation and functional equation. A "Frey curve" built from a hypothetical solution of $a^p+b^p=c^p$ with $p\ge 5$ prime would be non-modular (Ribet), which is the link to Fermat's Last Theorem (Frey, Serre, Ribet, then Wiles).

## Open questions at the centre of the subject

- **BSD conjecture:** the order of vanishing of $L(E,s)$ at $s=1$ equals the rank, with a precise formula for the leading coefficient.
- **Rank distribution:** whether ranks are unbounded (a curve of rank at least 29 was found by Elkies and Klagsbrun in 2024, exactly 29 assuming GRH) and whether half of all curves have rank 0 and half rank 1 (Goldfeld and Katz–Sarnak heuristics). Bhargava, Shankar, Skinner and collaborators proved that positive proportions have rank 0 and rank 1, and A. Smith's work establishes the predicted behaviour of 2-power Selmer groups in many families of quadratic twists.
- **Szpiro's conjecture** bounds the minimal discriminant by the conductor, $|\Delta_E|\ll_\varepsilon N_E^{6+\varepsilon}$. It follows from the abc conjecture, and a modified form of it is equivalent to abc.

## Cryptography and computation

Elliptic-curve groups over finite fields are used because the best known attacks on the discrete logarithm for well-chosen curves are generic, about $\sqrt{n}$ operations for a group of order $n$, whereas for the multiplicative group of a finite field faster index-calculus methods exist. This allows 256-bit curves (for example Curve25519, NIST P-256) to match the security of roughly 3072-bit RSA keys. Shor's quantum algorithm would break them, which motivates post-quantum standards. Lenstra's elliptic-curve method is also a standard integer-factoring tool. Supersingular isogeny key exchange (SIDH) was broken classically in 2022 (Castryck and Decru), an example of how number-theoretic structure can undermine a proposed scheme.

# Plain explanation

An elliptic curve is the set of solutions to an equation of a particular shape: one unknown squared equals a cubic expression in another unknown. Despite the name, it is not an ellipse.

The magic of these curves is that you can add their points. Take two points on the curve, draw the straight line through them, see where it hits the curve a third time, and reflect that point across the horizontal axis. The result is another point on the curve, and this rule behaves just like ordinary addition. A geometric shape becomes an algebraic system.

That gives two big uses. First, number theory: asking which points have whole-number or fraction coordinates is a very deep question, and the answers have a neat structure. Elliptic curves were at the heart of the 1990s proof of Fermat's Last Theorem, which says that no cube is a sum of two cubes, no fourth power a sum of two fourth powers, and so on for every higher power.

Second, everyday life: elliptic curves over finite number systems are used in the encryption that protects web traffic and messaging apps. Adding a point to itself many times is easy, but working out how many times it was added is believed to be very hard.

A famous unsolved question, the Birch and Swinnerton-Dyer conjecture, links how many fraction solutions a curve has to the behaviour of a related function.

# Student explanation

An **elliptic curve** over a field $K$ (not of characteristic $2$ or $3$) is the set of solutions $(x,y)$ of $y^2=x^3+ax+b$ together with a 'point at infinity' $O$, where the discriminant $4a^3+27b^2$ is nonzero (which makes the curve smooth, with no cusps or self-crossings). Over the complex numbers, an elliptic curve is a torus (a doughnut surface); over the rationals $\mathbb Q$ and finite fields it is a rich arithmetic object.

**Group law.** Three points on the curve that lie on a line sum to $O$. Using this rule one defines $P+Q$ as the reflection of the third intersection point. Its properties (associativity, an identity $O$, inverses) make the rational points $E(K)$ an abelian group.

**Mordell–Weil theorem.** For a number field $K$, the group $E(K)$ is finitely generated: $E(K)\cong\mathbb Z^r\oplus E(K)_{\rm tors}$, where $r$ is the **rank** and the torsion part is a finite group. Mazur (1977) classified all possible torsion groups over $\mathbb Q$: there are $15$. Nobody knows an algorithm proven to always compute the rank. The standard method, _descent_, is guaranteed to finish only if the **Tate–Shafarevich group** $Ш(E/\mathbb Q)$ is finite, which is conjectured but unproven.

**Counting points mod $p$.** Over a finite field $\mathbb F_p$, Hasse's bound says the number of points is $p+1$ up to an error of at most $2\sqrt p$. Schoof's algorithm counts points in polynomial time. These counts are packaged into an **L-function** $L(E,s)$.

**Birch and Swinnerton-Dyer conjecture** (a Clay Millennium Prize Problem): the order of vanishing of $L(E,s)$ at $s=1$ equals the rank $r$, and the leading coefficient is given by a precise formula involving the size of $Ш$, a regulator and other invariants. When the vanishing order is $0$ or $1$ it is known that the rank equals that order and that $Ш$ is finite (Gross–Zagier, Kolyvagin); the exact leading-coefficient formula is known only in part even there, and nothing comparable is known for order $2$ or more.

**Modularity and Fermat.** Every elliptic curve over $\mathbb Q$ is _modular_, meaning its L-function comes from a modular form (Wiles, Taylor–Wiles, and Breuil–Conrad–Diamond–Taylor). Wiles's proof of a special case in 1994 completed Fermat's Last Theorem: a hypothetical solution would give an elliptic curve that cannot be modular.

**Cryptography.** In elliptic-curve cryptography the hard problem is the _discrete logarithm_: given $P$ and $kP$ (the point $P$ added to itself $k$ times), find $k$. Curves over finite fields give security comparable to older systems with much smaller keys, which is why they are widely deployed.
