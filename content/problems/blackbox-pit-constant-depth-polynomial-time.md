---
type: problem
slug: blackbox-pit-constant-depth-polynomial-time
title: Polynomial-size explicit hitting sets for depth-3 (ΣΠΣ) arithmetic circuits over ℚ
entry: computational-complexity
status: PARTIAL
origin: "Schwartz–Zippel / DeMillo–Lipton (1978–80); hardness–randomness connection: Kabanets and Impagliazzo (2003)"
ratings:
  difficulty: 68
  applicationValue: 12
  leverage: 52
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Kabanets, Impagliazzo: Derandomizing Polynomial Identity Tests Means Proving Circuit Lower Bounds (ECCC TR02-055)"
    url: https://eccc.weizmann.ac.il/report/2002/055/
  - title: "Limaye, Srinivasan, Tavenas: Superpolynomial Lower Bounds Against Low-Depth Algebraic Circuits (FOCS 2021)"
    url: https://eccc.weizmann.ac.il/report/2021/081/
  - title: "Shpilka, Yehudayoff: Arithmetic circuits: a survey of recent results and open questions"
    url: https://doi.org/10.1561/0400000039
  - title: "Kayal, Saxena: Polynomial identity testing for depth 3 circuits (Comput. Complexity 2007)"
    url: https://doi.org/10.1007/s00037-007-0226-9
  - title: "Guo, Wang: Deterministic Depth-4 PIT and Normalization (preprint, 2025)"
    url: https://arxiv.org/abs/2504.15143
links:
  - to: perfect-matching-in-nc
    kind: RELATED
    note: Matching reduces to determinant identity testing, so deterministic PIT for the relevant circuits feeds into NC algorithms; the matching case is a special structure that may be easier than general PIT.
timeline:
  - date: 2003-06-09
    title: PIT derandomisation equals lower bounds
    body: Kabanets and Impagliazzo proved derandomising PIT implies circuit lower bounds (STOC 2003).
    source: https://eccc.weizmann.ac.il/report/2002/055
  - date: 2021-07-06
    title: Super-polynomial lower bounds for constant-depth algebraic circuits
    body: Limaye, Srinivasan and Tavenas proved the first such lower bounds (ECCC TR21-081, July 2021; FOCS 2021).
    source: https://eccc.weizmann.ac.il/report/2021/081/
explainer:
  oneLine: Test whether a formula built from additions and multiplications is secretly zero, with a fixed list of test inputs.
  flow:
    - Is this formula secretly zero?
    - Random test inputs work well
    - Can a fixed short list do it?
    - Three layers are the first hard case
    - "Open: efficient fixed list for depth 3"
  glossary:
    - term: polynomial identity testing
      meaning: Deciding whether a formula built from additions and multiplications always equals zero.
      link: https://en.wikipedia.org/wiki/Polynomial_identity_testing
    - term: arithmetic circuit
      meaning: A network of addition and multiplication gates that computes a polynomial.
      link: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
    - term: hitting set
      meaning: A fixed list of inputs such that every nonzero formula of a given kind is nonzero somewhere on the list.
      link: https://en.wikipedia.org/wiki/Polynomial_identity_testing
    - term: black-box algorithm
      meaning: A method that may only evaluate the formula at chosen points, without looking inside it.
      link: https://en.wikipedia.org/wiki/Polynomial_identity_testing
    - term: Schwartz–Zippel lemma
      meaning: A nonzero polynomial is unlikely to vanish at a randomly chosen point.
      link: https://en.wikipedia.org/wiki/Schwartz%E2%80%93Zippel_lemma
    - term: derandomization
      meaning: Replacing a method that uses random choices with a deterministic one of similar speed.
      link: https://en.wikipedia.org/wiki/Derandomization
    - term: depth
      meaning: The number of layers of alternating addition and multiplication gates in a circuit.
      link: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
    - term: circuit lower bound
      meaning: A proof that any circuit for a function must be at least a certain size.
      link: https://en.wikipedia.org/wiki/Circuit_complexity
    - term: perfect matching in NC
      meaning: A related derandomisation problem about finding pairings in a network using many processors.
      link: /research/computational-complexity
    - term: top fan-in
      meaning: In a sum-of-products-of-sums circuit, the number of product terms added together at the top.
      link: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
    - term: permanent
      meaning: A cousin of the determinant, computed without minus signs; believed to need much larger formulas.
      link: https://en.wikipedia.org/wiki/Permanent_(mathematics)
    - term: hardness versus randomness
      meaning: The principle that hard-to-compute functions can be used to replace random choices by deterministic ones.
      link: https://en.wikipedia.org/wiki/Derandomization
  readFirst:
    - title: Polynomial identity testing (Wikipedia)
      url: https://en.wikipedia.org/wiki/Polynomial_identity_testing
      why: A concise introduction with the random algorithm.
    - title: Schwartz–Zippel lemma (Wikipedia)
      url: https://en.wikipedia.org/wiki/Schwartz%E2%80%93Zippel_lemma
      why: Why random points find nonzero polynomials.
    - title: Derandomization (Wikipedia)
      url: https://en.wikipedia.org/wiki/Derandomization
      why: The big picture of removing randomness.
raw:
  body: "Polynomial identity testing (PIT) asks whether an arithmetic circuit computes the zero polynomial; a randomised polynomial-time black-box algorithm follows from the Schwartz–Zippel lemma. A **hitting set** for a class $\\mathcal C$ of $n$-variate polynomials is a set $H\\subset\\mathbb F^n$ such that every nonzero $f\\in\\mathcal C$ has $f(a)\\ne0$ for some $a\\in H$. *Construct, in time $\\mathrm{poly}(s)$, a hitting set of size $\\mathrm{poly}(s)$ for the class of $\\Sigma\\Pi\\Sigma$ (depth-3) circuits of size $s$ over $\\mathbb Q$ with unbounded top fan-in* (here $n,d\\le s$), or more broadly for circuits of any constant depth. Currently only subexponential-size hitting sets are known for these classes, and polynomial-size ones only for restricted subclasses such as bounded top fan-in. The problem is load-bearing because depth reduction makes low-depth PIT nearly as hard as general PIT: polynomial-time black-box PIT for depth-4 circuits already implies quasi-polynomial-time PIT for general circuits (Agrawal and Vinay, 2008)."
site:
  aiReviewed: true
---

# State of the art

**Equivalence with lower bounds.** Kabanets and Impagliazzo (STOC 2003; Comput. Complexity 2004) proved that derandomising PIT implies either $\mathsf{NEXP}\not\subset\mathsf{P/poly}$ or that the permanent has no polynomial-size arithmetic circuits; conversely, sufficiently strong explicit lower bounds give hitting sets via algebraic hardness-versus-randomness.

**Constant depth.** Limaye, Srinivasan and Tavenas (ECCC TR21-081; FOCS 2021) proved the first super-polynomial lower bounds for constant-depth algebraic circuits over fields of characteristic zero and, through the hardness–randomness connection, the first deterministic subexponential-time PIT for constant-depth circuits; together with Andrews and Forbes (STOC 2022) this gives subexponential-size hitting sets for every constant depth. Polynomial-size hitting sets are known only for restricted classes: depth-3 circuits with bounded top fan-in (white-box by Kayal and Saxena, 2007; black-box by Saxena and Seshadhri, 2011–12), sparse polynomials, and quasi-polynomial ones for read-once oblivious algebraic branching programs (Forbes–Shpilka and successors). Guo and Wang (arXiv:2504.15143, 2025, preprint) give deterministic polynomial-time black-box PIT for $\Sigma^{[3]}\Pi\Sigma\Pi^{[\delta]}$ circuits when one top summand is squarefree. No polynomial-size (or even quasi-polynomial-size) hitting set is known for $\Sigma\Pi\Sigma$ circuits with unbounded top fan-in.

# Applications

Efficient deterministic PIT would derandomise algorithms that reduce to identity testing, such as perfect matching via Tutte or Edmonds matrices, parallel matching algorithms, and some equivalence and interpolation problems, and through Kabanets–Impagliazzo it would come with explicit algebraic lower bounds. Practical impact is small, since randomised PIT is cheap and reliable.

# Resolution criteria

An explicit, $\mathrm{poly}(s)$-time constructible hitting set of size $\mathrm{poly}(s)$ for $\Sigma\Pi\Sigma$ circuits of size $s$ over $\mathbb Q$ (or over all large fields), with proof accepted by algebraic-complexity experts. A quasi-polynomial-size hitting set for this class is significant partial progress; the same for every constant depth would go beyond the target.

# Rating rationale

Equivalent in strength to proving algebraic circuit lower bounds, but recent constant-depth lower bounds (2021) show real movement, so it is research-grade, below the P vs NP and permanent-vs-determinant problems. Application value is modest because most uses are theoretical derandomisations. Leverage is mid-band: it reshapes derandomisation and algebraic complexity.

# Work mix rationale

Algebraic proof technique; computation helps find small hitting sets but not asymptotics.

# Verification

The result is a poly(s)-time constructible hitting set of poly(s) size for depth-3 circuits, which is an explicit construction with a correctness proof. Only the proof can establish it, since random testing of small circuits cannot show the hitting-set property, and Mathlib has no arithmetic-circuit formalism. Algebraic-complexity experts review it, and a quasi-polynomial-size set is recorded as partial progress.

# Plain explanation

Someone gives you a complicated algebra formula built only by adding and multiplying. Is it secretly zero for every possible input, so that everything cancels out, or does it have some real content? This is called polynomial identity testing.

There is a simple, fast, random method: plug in random numbers. If the formula is not zero, a random input almost always shows it. But it needs random choices, and a long-standing question in computer science is whether randomness is really necessary for such tasks.

The open problem asks for a fixed list of test inputs, chosen in advance and of manageable length, that works for every non-zero formula of a given kind. Such a list is called a hitting set. The kind in question has three layers: a sum of products of sums, with any number of terms in the top sum. That is the simplest kind for which no efficient fixed list is known.

Why does a mere three layers matter? Because mathematicians showed that any formula can be squashed into four layers without growing too much. So an efficient fixed list for four layers would give a nearly efficient (quasi-polynomial) one for every formula. So this is the first real obstacle.

There is also a deep link to lower bounds: finding such lists would force proofs that some algebraic problems need large formulas, and the reverse.

Progress so far gives lists of subexponential length, or efficient ones for restricted special cases.

# Student explanation

**Polynomial identity testing (PIT).** Given an arithmetic circuit (a network of additions and multiplications) computing a polynomial, decide whether it computes the zero polynomial. A randomised polynomial-time _black-box_ algorithm follows from the Schwartz–Zippel lemma: a nonzero polynomial of degree $d$ is nonzero at a random point from a large enough set with high probability.

**Hitting sets.** A _hitting set_ for a class $\mathcal C$ of $n$-variate polynomials is a set $H$ of points such that every nonzero $f\in\mathcal C$ is nonzero at some point of $H$. Having a small, explicit hitting set gives a deterministic black-box PIT algorithm.

**The problem.** Construct, in time $\mathrm{poly}(s)$, a hitting set of size $\mathrm{poly}(s)$ for the class of $\Sigma\Pi\Sigma$ (depth-3) circuits of size $s$ over the rationals with unbounded top fan-in. More broadly, do the same for constant-depth circuits. Currently only subexponential-size hitting sets are known for these classes, and polynomial-size ones only for restricted subclasses.

**Why low depth is the right target.** Depth reduction (Agrawal and Vinay, 2008) shows that polynomial-time black-box PIT for depth-4 circuits already implies quasi-polynomial-time PIT for general circuits. So depth 3 and 4 hold most of the difficulty.

**Link to lower bounds.** Kabanets and Impagliazzo (2003) proved that derandomising PIT implies either $\mathsf{NEXP}\not\subset\mathsf{P/poly}$ or that the permanent has no polynomial-size arithmetic circuits. Conversely, strong enough explicit lower bounds give hitting sets (hardness versus randomness).

**State of the art.**

- Limaye, Srinivasan and Tavenas (2021) proved the first super-polynomial lower bounds for constant-depth algebraic circuits over fields of characteristic zero, and through the hardness–randomness link the first deterministic subexponential-time PIT for constant depth. With Andrews and Forbes (2022) this gives subexponential hitting sets for every constant depth.
- Polynomial-size hitting sets are known for depth-3 circuits with bounded top fan-in (Kayal and Saxena, 2007; Saxena and Seshadhri, 2011-12), sparse polynomials, and quasi-polynomial ones for read-once oblivious algebraic branching programs.
- Guo and Wang (2025 preprint) give polynomial-time black-box PIT for a restricted depth-3-like class when one summand is squarefree.

**Payoff.** Deterministic PIT would derandomise algorithms that reduce to identity testing, such as perfect matching via determinants, and would come with explicit algebraic lower bounds.
