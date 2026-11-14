---
type: problem
slug: integers-diophantine-in-rationals
title: Is the ring of integers a Diophantine subset of the rationals?
entry: hilberts-tenth-problem-number-fields
status: OPEN
origin: Julia Robinson, 1949 (first-order definition of Z in Q); the existential question follows from Hilbert's tenth problem (1900) and Mazur's conjectures (1992–95)
ratings:
  difficulty: 70
  applicationValue: 4
  leverage: 50
verification:
  route: REVIEW
sources:
  - title: "Burungale: A Diophantine definition of Z in Q (arXiv:2611.16130, 12 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.16130
  - title: "OpenAI: Hilbert's tenth problem over the rational numbers (preprint, 6 Oct 2026)"
    url: https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-October-6-2026/main.pdf
  - title: "Sun: Z is Diophantine over Q with 28 unknowns (arXiv:2611.14605, preprint)"
    url: https://arxiv.org/abs/2611.14605
  - title: "Kozachinskiy, Pasten, Vidaux: Why should Z be Diophantine in Q? (arXiv:2611.17124, preprint)"
    url: https://arxiv.org/abs/2611.17124
  - title: "Wikipedia: Hilbert's tenth problem"
    url: https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem
links:
  - to: abc-conjecture
    kind: RELATED
    note: The Kozachinskiy–Pasten–Vidaux definition of Z in Q is conditional on the abc conjecture.
  - to: birch-swinnerton-dyer-sha-finiteness-rank-two
    kind: RELATED
    note: Congruent number curves, Selmer groups, rank-one criteria and finiteness of Shafarevich–Tate groups enter both the unconditional and the conditional definitions of Z in Q.
timeline:
  - date: 2026-11-10
    title: "Sun: a degree-four definition of Z in Q with 28 unknowns (preprint)"
    body: Sun claims a polynomial of degree four with 28 unknowns that defines Z in Q, building on OpenAI's work. Unrefereed.
    source: https://arxiv.org/abs/2611.14605
  - date: 2026-11-12
    title: "Burungale: Z is a Diophantine subset of Q, polynomial of total degree at most four (preprint)"
    body: Burungale claims an explicit existential definition of Z in Q and, as consequences, undecidability of Hilbert's tenth problem over Q and the failure of Mazur's conjecture. It says it avoids OpenAI's 2-converse and 2-adic Fontaine–Mazur inputs. Unrefereed.
    source: https://arxiv.org/abs/2611.16130
  - date: 2026-11-12
    title: "Kozachinskiy, Pasten, Vidaux: a definition of Z in Q conditional on abc (preprint)"
    body: Conditional on the abc conjecture, Dickson's conjecture and finiteness of 2-primary Shafarevich–Tate groups, the authors give a Diophantine definition of Z in Q. Unrefereed.
    source: https://arxiv.org/abs/2611.17124
explainer:
  oneLine: Can the whole numbers be picked out among the fractions by an equation? A November 2026 preprint says yes; unchecked.
  flow:
    - Integer = no denominators at any prime
    - Encode n as the point nP on a curve
    - Equations for index multiplication, via primes
    - "Claim: integer test is one equation system"
    - "Then undecidability over Q: unchecked"
  glossary:
    - term: Diophantine set
      meaning: A set of numbers that are exactly the ones for which some polynomial equation has a solution in the chosen number system.
      link: https://en.wikipedia.org/wiki/Diophantine_set
    - term: Hilbert's tenth problem
      meaning: Find an algorithm deciding whether any given integer-coefficient polynomial equation has integer solutions; shown impossible in 1970.
      link: https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem
    - term: recursively enumerable set
      meaning: A set whose members a computer program could list one by one, possibly running forever.
      link: https://en.wikipedia.org/wiki/Recursively_enumerable_set
    - term: elliptic curve
      meaning: A curve y² = x³ + ax + b whose rational points can be added to each other by a geometric rule.
      link: https://en.wikipedia.org/wiki/Elliptic_curve
    - term: rational point
      meaning: A point on a curve or surface whose coordinates are all fractions.
      link: https://en.wikipedia.org/wiki/Rational_point
    - term: congruent number
      meaning: A whole number that is the area of a right triangle with rational sides; tied to a family of elliptic curves.
      link: https://en.wikipedia.org/wiki/Congruent_number
    - term: quadratic twist
      meaning: A new elliptic curve obtained from a given one by multiplying part of its equation by a fixed number d.
      link: https://en.wikipedia.org/wiki/Quadratic_twist
    - term: preprint
      meaning: A paper posted publicly before peer review; its claims have not yet been checked by independent referees.
      link: https://arxiv.org/abs/2611.16130
    - term: Shimura curve
      meaning: A curve whose points parametrize certain abelian surfaces; a relative of the modular curves that organize elliptic curves.
      link: https://en.wikipedia.org/wiki/Shimura_variety
    - term: Green–Tao theorem
      meaning: The primes contain arbitrarily long arithmetic progressions; the Green–Tao–Ziegler extension covers more general linear patterns.
      link: https://en.wikipedia.org/wiki/Green%E2%80%93Tao_theorem
    - term: Serre's modularity conjecture
      meaning: Certain two-dimensional representations of Galois groups come from modular forms; proved by Khare and Wintenberger.
      link: https://en.wikipedia.org/wiki/Serre%27s_modularity_conjecture
  readFirst:
    - title: "Wikipedia: Hilbert's tenth problem"
      url: https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem
      why: The 1970 result over the integers and why other rings are harder.
    - title: "Kozachinskiy, Pasten, Vidaux: Why should Z be Diophantine in Q? (preprint, unrefereed)"
      url: https://arxiv.org/abs/2611.17124
      why: Its abstract says it is an entry point to the recent work on Hilbert's tenth problem for the rationals.
    - title: "Burungale: A Diophantine definition of Z in Q (preprint, unrefereed)"
      url: https://arxiv.org/abs/2611.16130
      why: The claim itself; Section 1 gives the plan of the proof.
    - title: "Wikipedia: Elliptic curve"
      url: https://en.wikipedia.org/wiki/Elliptic_curve
      why: The objects the construction is built on.
raw:
  verifySpec: "Experts in arithmetic geometry and logic referee the 45-page preprint section by section: Theorems B and C (rank one for congruent number twists via Tian–Yuan–Zhang in Smith's form, 2-descent), Theorems D and E (level bound and height estimate on the Shimura curve of discriminant 210), the Diophantine model of integer arithmetic in Sections 4 to 7, and the parts taken from the OpenAI preprint. A concrete computational check is to take explicit primes satisfying the hypotheses of Theorem B, compute the ranks of the curves E_n and E_{n eta} and the point with x-coordinate in beta times a square, and confirm the claim."
site:
  aiReviewed: true
---

Is there a polynomial $P\in\mathbb Z[T,W_1,\dots,W_n]$ such that a rational number $q$ is an integer if and only if $P(q,\mathbf w)=0$ for some $\mathbf w\in\mathbb Q^n$? Equivalently, is $\mathbb Z$ a Diophantine subset of $\mathbb Q$? A positive answer would imply that every recursively enumerable subset of $\mathbb Q^r$ is Diophantine, that Hilbert's tenth problem over $\mathbb Q$ is undecidable, and that Mazur's conjecture (the closure of $V(\mathbb Q)$ in $V(\mathbb R)$ has finitely many connected components for every variety $V/\mathbb Q$) fails. A negative answer would leave the decidability of Hilbert's tenth problem over $\mathbb Q$ open.

# State of the art

**Open as far as refereed work goes.** According to the introduction of Burungale's preprint, Robinson (1949) gave a first-order definition of $\mathbb Z$ in $\mathbb Q$, Poonen (2009) improved it to quantifier pattern $\forall\exists$, and Koenigsmann (2016) gave a universal definition; DARC did not open these papers. Mazur's conjecture would exclude an existential definition, so the expected answer was long thought to be negative or at least very hard.

**Preprints from October and November 2026, all unrefereed.** OpenAI's 6 October 2026 preprint states that Hilbert's tenth problem over $\mathbb Q$ has a negative answer; it relies on a pointwise 2-converse theorem and 2-adic Fontaine–Mazur modularity announced in two companion preprints, and according to Burungale it does not itself show that $\mathbb Z$ is Diophantine in $\mathbb Q$. DARC read only that preprint's first page (title and abstract). Burungale (arXiv:2611.16130, v1, 12 November 2026, 45 pages, math.NT and math.LO) claims Theorem A: $\mathbb Z$ is a Diophantine subset of $\mathbb Q$, via a polynomial of total degree at most four, with no numerical bound on the number of unknowns. The proof represents an integer $n$ as the index of the multiple $nP$ of a point on an elliptic curve, defines the rationals with square denominator using quadratic twists of congruent number curves (the Tian–Yuan–Zhang criterion in Smith's form for rank one), bounds heights through quaternionic abelian surfaces on a Shimura curve (Khare–Wintenberger for the level bound), and uses Green–Tao–Ziegler to supply solutions. The preprint says it needs neither the 2-converse nor 2-adic Fontaine–Mazur, but it reuses other parts of OpenAI's argument (the rank-one curve over $\mathbb Q(\sqrt2)$, the norm construction for square denominators and the sieve argument for linear patterns of primes), so it is not independent of that work. Its AI-use statement says the author consulted ChatGPT and Claude, that ChatGPT assisted with the arguments in two sections, and that the author is responsible for the mathematics.

Sun (arXiv:2611.14605, 10 November 2026, 32 pages) claims a degree-four polynomial with 28 unknowns, building on OpenAI's work and, according to its abstract, on a result of G. Conant et al. with 393 unknowns (DARC did not open that result). Kozachinskiy, Pasten and Vidaux (arXiv:2611.17124, 12 November 2026) give a definition conditional on the abc conjecture, Dickson's conjecture and finiteness of 2-primary Shafarevich–Tate groups.

No expert assessment of any of these was found, so this problem stays OPEN.

# Applications

None practical. A confirmed definition would settle which sets of rational numbers are Diophantine and show that no algorithm decides solvability of integer polynomial equations over the rationals, a result about the limits of computation rather than a tool for engineering. It would also refute Mazur's conjecture on the topology of rational points.

# Resolution criteria

Refereed publication of a proof that $\mathbb Z$ is Diophantine over $\mathbb Q$ (or of a proof that it is not), or independent verification by experts in arithmetic geometry and logic of the 45-page preprint together with the OpenAI preprint it partly relies on. Burungale's own claim is not formalized in Lean, so a machine-checked proof would also count. A refereed paper is needed to change the status from OPEN.

# Rating rationale

Rated against the accepted literature, not the unrefereed claims. Difficulty 70: open in existential form since Julia Robinson's 1949 first-order definition, with Mazur's conjecture long read as pointing the other way; several 2026 preprints (OpenAI, Burungale, Sun) now claim complete arguments that share inputs, so a path is visible but none is verified, which puts it level with the Erdős similarity problem (70) and above Leray–Hopf uniqueness with its claimed construction (66). Application value 4: foundations of computability over the rationals, no practical use. Leverage 50: a positive answer would settle the decidability of Diophantine equations over Q, refute Mazur's conjecture and reshape the study of definability of rings in number fields.

# Plain explanation

Among all fractions, the whole numbers are the ones with nothing underneath, like 7 over 1. Can you describe them using only an equation that has a solution for exactly those fractions?

That sounds like a tiny technical question, but a lot hangs on it. If the answer is yes, then one famous impossibility result about whole-number equations carries over to fractions: no computer program can decide, for every equation, whether it has a fraction as a solution. It would also show that a guess by Barry Mazur about how fractions sit inside the real number line is wrong.

For decades many experts expected that the answer was no, or that nobody could prove yes. In October and November 2026 several papers claimed the answer is yes. One, by Ashay Burungale, gives an equation of low degree (in every term the powers add up to at most four), and says it works by using special curves called elliptic curves and a theorem about patterns in the prime numbers. The author says he consulted the AI tools ChatGPT and Claude while studying OpenAI's paper, that ChatGPT helped with the arguments in two sections, and that both helped revise the draft.

Nobody independent has checked these papers yet, and the Burungale paper uses ideas from a long OpenAI paper that is also unchecked. So the question is listed as open, with the claim under review.

# Student explanation

**The question.** Is there a polynomial $P(T,W_1,\dots,W_n)$ with integer coefficients such that a rational number $q$ is an integer exactly when $P(q,w_1,\dots,w_n)=0$ has a solution in rational numbers $w_i$? If so, $\mathbb Z$ is a **Diophantine subset** of $\mathbb Q$.

**What a yes would imply.** (1) Hilbert's tenth problem over $\mathbb Q$ is undecidable: given an integer equation $F=0$, add the equations that force each unknown to be an integer, and solvability over $\mathbb Z$ becomes solvability over $\mathbb Q$. (2) Every recursively enumerable subset of $\mathbb Q^r$ is Diophantine. (3) Mazur's conjecture fails, since some variety has rational points projecting onto the discrete set $\mathbb Z$.

**What the Burungale preprint says it does.** It reports that a rational $q$ is an integer iff $P(q,\mathbf w)=0$ for some rational $\mathbf w$, with $P$ of total degree at most four and no stated bound on the number of unknowns. In outline: (a) rationals whose denominators are perfect squares are defined using rational points on the elliptic curves $y^2=x^3-l^2x$ for suitable $l$; a result of Tian, Yuan and Zhang, in a form due to Smith, gives that these curves have 'analytic rank one', meaning an associated function vanishes to order exactly one at a special point, which is related to there being essentially one independent rational point. (b) A bound on how large the numerator and denominator of a point can be, obtained by studying certain abelian surfaces (higher-dimensional cousins of elliptic curves) attached to a Shimura curve and bounding their 'level' with Khare–Wintenberger's theorem on Galois representations. (c) An integer $n$ is stored as the multiple $nP$ of a fixed point $P$, equations express multiplication of indices, and the Green–Tao–Ziegler theorem on patterns among primes (such as arithmetic progressions) supplies solutions. (d) A final approximation argument identifies the stored indices with the real integers.

**Honest status.** All of this is an unrefereed 45-page preprint. It states that it avoids two inputs from OpenAI's 6 October 2026 work, a 2-converse theorem and 2-adic Fontaine–Mazur modularity, but also that it takes other pieces from it (for example the rank-one curve over $\mathbb Q(\sqrt2)$ and parts of the sieve argument), so it is not independent evidence. OpenAI's preprint is itself unrefereed and DARC read only its abstract. Its AI-use statement says the author consulted ChatGPT and Claude while studying the OpenAI paper, ChatGPT assisted with the arguments in two sections, and both helped revise the draft. Related preprints are Sun's (28 unknowns) and Kozachinskiy–Pasten–Vidaux (a definition that depends on the abc conjecture and two further unproved statements). Until experts have checked them the problem stays open.
