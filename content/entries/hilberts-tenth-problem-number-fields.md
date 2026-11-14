---
type: entry
slug: hilberts-tenth-problem-number-fields
title: Hilbert's tenth problem over the rationals and other number rings
field: number-theory
kind: THEORY
status: ACTIVE
summary: Whether an algorithm can decide if a polynomial equation has solutions in a given ring. Undecidable over the integers (1970); over the rationals it hinges on whether the integers are Diophantine there.
reliedOn: Decidability of Diophantine equations over the rationals, existential definability of the integers in the rationals, and Mazur's conjectures on rational points all turn on which sets are Diophantine.
dependsOn:
  - elliptic-curves
references:
  - title: "Burungale: A Diophantine definition of Z in Q (arXiv:2611.16130, 12 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.16130
    kind: paper
  - title: "OpenAI: Hilbert's tenth problem over the rational numbers (preprint, 6 Oct 2026)"
    url: https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-October-6-2026/main.pdf
    kind: paper
  - title: "Sun: Z is Diophantine over Q with 28 unknowns (arXiv:2611.14605, preprint)"
    url: https://arxiv.org/abs/2611.14605
    kind: paper
  - title: "Kozachinskiy, Pasten, Vidaux: Why should Z be Diophantine in Q? (arXiv:2611.17124, preprint)"
    url: https://arxiv.org/abs/2611.17124
    kind: paper
  - title: "Wikipedia: Hilbert's tenth problem"
    url: https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem
    kind: article
  - title: "Wikipedia: Diophantine set"
    url: https://en.wikipedia.org/wiki/Diophantine_set
    kind: article
timeline:
  - date: 2026-10-06
    title: OpenAI preprint on Hilbert's tenth problem over the rationals
    body: "OpenAI's preprint states a negative answer to Hilbert's tenth problem over Q: no algorithm decides whether an integer polynomial has a rational zero. Unrefereed and not independently checked here."
    source: https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-October-6-2026/main.pdf
  - date: 2026-11-12
    title: Preprint claims an existential definition of Z in Q of degree at most four
    body: Burungale claims a polynomial of total degree at most four defining Z in Q existentially, and draws undecidability of Hilbert's tenth problem over Q and the failure of Mazur's conjecture. Unrefereed.
    source: https://arxiv.org/abs/2611.16130
explainer:
  oneLine: Can a computer decide whether a polynomial equation has solutions? Over the rationals, unrefereed 2026 preprints claim the answer is no.
  flow:
    - Integers need a test at every prime
    - Equations only say 'there exists'
    - Index of nP on an elliptic curve encodes n
    - Preprints claim exact definition of Z in Q
    - "Then undecidability over Q: unchecked"
  glossary:
    - term: Diophantine equation
      meaning: A polynomial equation with integer coefficients, where one asks for integer (or rational) solutions.
      link: https://en.wikipedia.org/wiki/Diophantine_equation
    - term: Diophantine set
      meaning: A set of numbers that are exactly the ones for which some polynomial equation has a solution in the chosen number system.
      link: https://en.wikipedia.org/wiki/Diophantine_set
    - term: Hilbert's tenth problem
      meaning: Find an algorithm deciding whether any given integer-coefficient polynomial equation has integer solutions; shown impossible in 1970.
      link: https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem
    - term: decidable
      meaning: A yes/no question is decidable if one computer program answers it correctly for every input.
      link: https://en.wikipedia.org/wiki/Decidability_(logic)
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
  readFirst:
    - title: "Wikipedia: Hilbert's tenth problem"
      url: https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem
      why: The statement, the 1970 result and the variants over other rings.
    - title: "Wikipedia: Diophantine set"
      url: https://en.wikipedia.org/wiki/Diophantine_set
      why: What a Diophantine set is and why recursively enumerable sets are the same thing over the integers.
    - title: "Kozachinskiy, Pasten, Vidaux: Why should Z be Diophantine in Q? (preprint, unrefereed)"
      url: https://arxiv.org/abs/2611.17124
      why: Its abstract says it is meant as an entry point to the recent work on the rationals.
    - title: "Burungale: A Diophantine definition of Z in Q (preprint, unrefereed)"
      url: https://arxiv.org/abs/2611.16130
      why: The claim; the introduction explains the plan of the proof.
raw:
  body: "## The question\n\nA **Diophantine equation** is a polynomial equation with integer coefficients, such as $x^2-2y^2=1$. Hilbert's tenth problem (1900) asked for a single algorithm that decides, for any such equation, whether it has a solution in the integers. Davis, Putnam, Robinson and Matiyasevich showed in 1970 that no such algorithm exists. The same question makes sense over any ring or field, for example over the rationals $\\mathbb Q$, and the answer can differ from ring to ring.\n\n## Diophantine sets and why $\\mathbb Z$ in $\\mathbb Q$ matters\n\nA set $A\\subseteq R^r$ is **Diophantine over $R$** if it is the projection of the zero set of a polynomial: $a\\in A$ exactly when $P(a,w)=0$ has a solution $w$ in $R^n$ for some fixed $n$ and polynomial $P$. Over $\\mathbb Z$ the DPRM theorem says the Diophantine sets are exactly the recursively enumerable ones, which is what makes the problem undecidable.\n\nOver $\\mathbb Q$ the same transfer would follow at once if $\\mathbb Z$ itself were a Diophantine subset of $\\mathbb Q$: an integer equation would have an integer solution exactly when an associated rational system has a rational solution, so undecidability over $\\mathbb Z$ would transfer to $\\mathbb Q$. The obstacle is that being an integer means having no negative valuation at *any* prime, a condition about all primes at once, while a Diophantine definition can only say \"there exist rational numbers such that...\". Julia Robinson (1949) defined $\\mathbb Z$ in $\\mathbb Q$ with a formula that uses a universal quantifier; Poonen (2009) reduced it to a $\\forall\\exists$ pattern and Koenigsmann (2016) to a purely universal one (these results are as summarised in the November 2026 preprint below). Whether an existential definition exists was open.\n\n## Mazur's conjecture\n\nMazur conjectured that for every variety $V$ over $\\mathbb Q$ the closure of $V(\\mathbb Q)$ in the real points $V(\\mathbb R)$ has finitely many connected components. If $\\mathbb Z$ is Diophantine over $\\mathbb Q$, some variety has rational points that project onto the discrete set $\\mathbb Z$, so the conjecture would fail. Because of this, the conjecture was widely read as evidence that $\\mathbb Z$ is *not* Diophantine over $\\mathbb Q$.\n\n## Where things stand (November 2026)\n\nAll of the following are unrefereed preprints. OpenAI's 6 October 2026 preprint states a negative answer to Hilbert's tenth problem over $\\mathbb Q$ (no algorithm decides whether an integer polynomial has a rational zero). Burungale's arXiv:2611.16130 (12 November 2026) claims an explicit definition of $\\mathbb Z$ in $\\mathbb Q$ by a polynomial of total degree at most four, using congruent number elliptic curves, a height estimate from quaternionic abelian surfaces on a Shimura curve, and Green–Tao–Ziegler. It says it avoids two inputs OpenAI announced (a pointwise 2-converse theorem and 2-adic Fontaine–Mazur modularity), but it does reuse other parts of OpenAI's argument. Sun's arXiv:2611.14605 claims such a polynomial with 28 unknowns. Kozachinskiy, Pasten and Vidaux (arXiv:2611.17124) give a definition conditional on the abc conjecture, Dickson's conjecture and finiteness of 2-primary Shafarevich–Tate groups. None of these has been independently checked on this site.\n"
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Take an equation like x squared plus y squared equals 25 and ask: does it have a solution that is a whole number? In 1900 David Hilbert asked whether one computer program could answer that question for every such equation. In 1970 mathematicians proved the answer is no: some equations are simply beyond any single program.

The same question can be asked if fractions are allowed as answers. That version stayed open for decades. The difficulty is that being a whole number is a strict rule: a fraction must pass a test at every prime number at once, and ordinary equations are bad at saying 'for all'. If someone found a way to say 'this fraction is a whole number' using only equations that have a solution, the fraction version would be impossible for the same reason as the whole-number version.

In October and November 2026 several unrefereed papers, one from OpenAI and one by a mathematician, Ashay Burungale, claim results of this kind (OpenAI claims the fraction version is impossible; Burungale claims the integers can be defined by equations). The Burungale paper says it works with special curves called elliptic curves and with ideas about prime numbers. Other experts have not yet checked these long arguments.

So this is still listed as open, with claims under review. An analogy: proving a lock cannot be picked requires checking every pin, and the checking is still under way.

# Student explanation

**Setting.** A **Diophantine equation** is a polynomial equation with integer coefficients. Hilbert's tenth problem asks for one algorithm that decides, for every such equation, whether it has an integer solution. Davis, Putnam, Robinson and Matiyasevich proved in 1970 that no algorithm exists (the DPRM theorem). The key notion is a **Diophantine set**: $A\subseteq R^r$ is Diophantine over a ring $R$ if there is a polynomial $P$ with $a\in A$ exactly when $P(a,w)=0$ has a solution $w$. The DPRM theorem says the Diophantine sets over $\mathbb Z$ are exactly the sets a computer program could list (recursively enumerable sets); some of those have no decision procedure.

**Why the rationals are different.** Suppose $\mathbb Z$ is a Diophantine subset of $\mathbb Q$: there is $P$ with $q\in\mathbb Z$ iff $P(q,w)=0$ for some rational $w$. Then take any integer equation $F(x_1,\dots,x_k)=0$. Ask for rational $x_i$ that satisfy $F=0$ together with the equations that force each $x_i$ to be an integer. This rational system has a solution exactly when $F$ has an integer solution, so a decision procedure over $\mathbb Q$ would give one over $\mathbb Z$, which cannot exist. Hence Hilbert's tenth problem over $\mathbb Q$ would be undecidable. The obstacle is how to say 'is an integer' with only equations. A rational is an integer when its denominator has no prime factor, a condition at every prime; but an equation can only assert 'there exist numbers such that...'. Julia Robinson (1949), Poonen (2009) and Koenigsmann (2016) found definitions of $\mathbb Z$ in $\mathbb Q$ that need a 'for all' (as summarised in the preprint below); an 'exists-only' definition would have been new.

**An analogy for the idea.** Elliptic curves such as $E_l: y^2=x^3-l^2x$ have rational points that can be added together. Pick a point $P$ of infinite order. Then $P, 2P, 3P,\dots$ are distinct, so each integer $n$ corresponds to the point $nP$. The preprint claims equations that express '$n_1n_2=n_3$' for these indices, which would encode integer arithmetic inside the rationals, and then claims a way to match the indices exactly with the actual integers.

**Mazur's conjecture.** Mazur conjectured that the rational points of any variety, drawn inside its real points, form a set with finitely many connected pieces. A Diophantine definition of $\mathbb Z$ gives a variety whose rational points project onto the integers, which are infinitely many separated points, so the conjecture would fail.

**Status.** OpenAI's 6 October 2026 preprint states that Hilbert's tenth problem over $\mathbb Q$ is undecidable. Burungale's preprint (arXiv:2611.16130, 12 November 2026) claims a polynomial of total degree at most four defining $\mathbb Z$ in $\mathbb Q$ and says it avoids two deep inputs OpenAI announced, but it borrows other parts of OpenAI's argument. Sun (arXiv:2611.14605) claims 28 unknowns, and Kozachinskiy, Pasten and Vidaux (arXiv:2611.17124) give a definition conditional on the abc conjecture and two other assumptions. All are unrefereed and unchecked here.
