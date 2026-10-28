---
type: problem
slug: minimum-equivalent-expression-many-one
title: Is Minimum Equivalent Expression Σ₂ᵖ-complete under many-one reductions?
entry: polynomial-hierarchy
status: OPEN
origin: Open since at least 1979, per Jaakkola (arXiv:2610.34516)
ratings:
  difficulty: 12
  applicationValue: 6
  leverage: 10
verification:
  route: REVIEW
sources:
  - title: Jaakkola, Propositional formula minimization is Σ₂ᵖ-complete under many-one reductions (arXiv:2610.34516, preprint)
    url: https://arxiv.org/abs/2610.34516
  - title: Buchfuhrer and Umans, The Complexity of Boolean Formula Minimization (ICALP 2008)
    url: https://doi.org/10.1007/978-3-540-70575-8_3
links:
  - to: p-vs-np
    kind: RELATED
    note: "Both concern the polynomial hierarchy: if P = NP the hierarchy collapses and MEE would be in P."
timeline:
  - date: 2026-10-25
    title: Preprint claims many-one completeness
    body: Jaakkola's arXiv note claims a proof that MEE is Σ₂ᵖ-complete under polynomial-time many-one reductions; its abstract says the proof was discovered by GPT-Sol-6.1. Not refereed.
    source: https://arxiv.org/abs/2610.34516
explainer:
  oneLine: Can a logic formula always be shrunk by a hard-to-beat method? A 2026 preprint claims a new answer; it is unchecked.
  flow:
    - Long logic formula plus a size limit k
    - Is there an equivalent formula within k?
    - Guess a short formula, check all inputs
    - Complete for level 2 under Turing reductions (2008)
    - Preprint claims it for many-one reductions
  glossary:
    - term: propositional formula
      meaning: An expression built from true/false variables with 'and', 'or' and 'not'.
      link: https://en.wikipedia.org/wiki/Propositional_formula
    - term: logical equivalence
      meaning: Two formulas are equivalent if they give the same truth value for every assignment of the variables.
      link: https://en.wikipedia.org/wiki/Logical_equivalence
    - term: variable occurrence
      meaning: One appearance of a variable in a formula; x appears twice in 'x and (not x or y)'.
      link: https://en.wikipedia.org/wiki/Propositional_formula
    - term: polynomial hierarchy
      meaning: A tower of complexity classes above NP, each level adding one more alternation between 'there exists' and 'for all'.
      link: /research/polynomial-hierarchy
    - term: Σ₂ᵖ
      meaning: "The second level of the polynomial hierarchy: problems of the form 'there is a y such that for all z, a fast check holds'."
      link: https://en.wikipedia.org/wiki/Polynomial_hierarchy
    - term: complete problem
      meaning: A problem in a class that every problem in the class reduces to, so it is among the hardest in that class.
      link: https://en.wikipedia.org/wiki/Complete_(complexity)
    - term: many-one reduction
      meaning: A reduction that turns each instance into a single instance of the target problem with the same yes/no answer.
      link: https://en.wikipedia.org/wiki/Many-one_reduction
    - term: Turing reduction
      meaning: A reduction that may query a solver for the target problem many times and combine the answers; weaker than many-one.
      link: https://en.wikipedia.org/wiki/Turing_reduction
    - term: polynomial time
      meaning: A running time bounded by a power of the input length, such as n squared; the usual meaning of 'fast' in complexity theory.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: preprint
      meaning: A paper posted publicly before peer review, so its claims have not been checked by referees.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: logic optimization
      meaning: Rewriting a logic formula or circuit into a smaller or faster equivalent one.
      link: https://en.wikipedia.org/wiki/Logic_optimization
  readFirst:
    - title: arXiv:2610.34516 (the preprint abstract)
      url: https://arxiv.org/abs/2610.34516
      why: The claim itself, in its author's words; remember it is unrefereed.
    - title: "Wikipedia: Polynomial hierarchy"
      url: https://en.wikipedia.org/wiki/Polynomial_hierarchy
      why: Background on the levels of the hierarchy and what completeness means there.
    - title: "Wikipedia: Logic optimization"
      url: https://en.wikipedia.org/wiki/Logic_optimization
      why: "The practical side: why shrinking formulas and circuits matters."
raw:
  student: "**The problem.** The **Minimum Equivalent Expression** problem (MEE): given a propositional formula $\\varphi$ (true/false variables joined by 'and', 'or', 'not') and an integer $k$, is there a formula with at most $k$ occurrences of variables that is *logically equivalent* to $\\varphi$, meaning it has the same truth value on every assignment? For example, $(x\\wedge y)\\vee(x\\wedge z)$ has four variable occurrences but equals $x\\wedge(y\\vee z)$, which has three.\n\n**Where it sits.** MEE is in $\\Sigma_2^p$, the second level of the polynomial hierarchy (see [the polynomial hierarchy](/research/polynomial-hierarchy)): guess a short formula $\\psi$ ('there exists'), then verify that $\\varphi$ and $\\psi$ agree for all assignments ('for all'). The 'for all' part is a coNP-style check, and the 'there exists' part adds a guess on top.\n\n**Hardness and reductions.** A problem is $\\Sigma_2^p$-*complete* if it is in the class and every problem in the class reduces to it. There are two kinds of reduction. A *many-one* reduction is a polynomial-time program that turns each instance of the old problem into one instance of MEE with the same answer. A *Turing* reduction may ask the MEE solver many questions, adaptively, and combine the answers. Every many-one reduction is a Turing reduction, so many-one completeness is stronger. Buchfuhrer and Umans (2008) proved Turing-completeness. Whether MEE is complete under many-one reductions is the question here.\n\n**What a preprint claims.** The arXiv note 2610.34516 (Reijo Jaakkola, 25 October 2026) claims a proof of many-one completeness. Its abstract says the question had been open since at least 1979 and that the proof was discovered by an AI system called GPT-Sol-6.1; this attribution is the author's statement. The note is short and unrefereed.\n\n**What a check involves.** Experts would look at the source problem the reduction starts from, confirm that it runs in polynomial time and calls no solver, and test both directions: a yes-instance must map to a yes-instance, and a no-instance to a no-instance. One could also compare each step with the Turing-reduction proof of 2008. A machine-checked formalization would settle correctness of the argument, but none is recorded yet.\n\n**Why it matters (modestly).** It would complete the picture of how hard exact formula minimization is, in the sense that no algorithm is expected to do it quickly in the worst case. It does not make practical minimizers better or worse."
site:
  aiReviewed: true
---

The **Minimum Equivalent Expression** problem (MEE) takes a propositional formula $\varphi$ and an integer $k$ and asks whether $\varphi$ is equivalent to a formula with at most $k$ occurrences of propositional variables. MEE is in $\Sigma_2^p$ (guess the short formula, then check equivalence for all assignments). **Question:** is MEE $\Sigma_2^p$-hard under polynomial-time many-one (Karp) reductions, i.e. $\Sigma_2^p$-complete in that stricter sense? Completeness under polynomial-time Turing reductions is known (Buchfuhrer and Umans, 2008).

# State of the art

Buchfuhrer and Umans (ICALP 2008) showed MEE, and its depth-$k$ versions for every $k\ge3$, are $\Sigma_2^p$-complete under polynomial-time Turing reductions. The abstract of a preprint, arXiv:2610.34516 (Jaakkola, v1 2026-10-25), says many-one completeness had remained open since at least 1979, and claims a proof that MEE is $\Sigma_2^p$-complete under many-one reductions; the abstract attributes the proof to an AI system, GPT-Sol-6.1. The note is a preprint and has not been refereed, and no independent check is recorded yet, so DARC keeps the problem open.

# Applications

No direct application: MEE is a worst-case classification result. It would sharpen the theoretical picture of why exact logic and formula minimization is believed intractable, which underlies the use of heuristics in logic synthesis.

# Resolution criteria

A many-one reduction from a $\Sigma_2^p$-complete problem to MEE, checked by experts in complexity theory (or formalized in a proof assistant) and accepted after review; or a proof that no such reduction exists under a standard assumption.

# Rating rationale

Difficulty 12: the Turing-reduction version is settled and a short preprint now claims a many-one reduction, so what remains is mostly checking it. Application value 6: a classification result with at most indirect bearing on logic-synthesis practice. Leverage 10: sharpens one well-studied problem, and little else hinges on it.

# Verification

Route: expert review of the preprint's many-one reduction. A reviewer should state the source $\Sigma_2^p$-complete problem, check that the construction is polynomial-time and makes no oracle calls, and confirm correctness in both directions (yes-instances map to yes-instances and no-instances to no-instances), comparing against the Turing-reduction proof of Buchfuhrer and Umans (2008). A formalization of the reduction in a proof assistant would strengthen the check; none is recorded.

# Plain explanation

A logical rule is a recipe of 'and', 'or' and 'not' that says yes or no. Long rules waste space and time, so people try to replace them with shorter rules that always give the same answers.

Here is the puzzle. Someone gives you a long rule and a number. Is there a shorter rule, using at most that many pieces, that always agrees with the long one? To say yes, you must find the short rule. Then you must be sure it agrees with the long one in every single situation. That double job is why this puzzle is believed to be very hard.

Computer scientists sort hard puzzles by how hard they are. This one belongs to a class called the second level of the polynomial hierarchy, and it was shown in 2008 to be among the hardest puzzles there, if you allow a certain flexible kind of translation between puzzles. Whether the same is true when you only allow a stricter, simpler kind of translation had been listed as open for decades.

In October 2026 a short paper appeared online claiming that the stricter statement is true too. Its author says the proof was found by an AI system. The paper has not been checked by other experts yet, so the question stays open on DARC until it is.

The analogy is only a picture: the real statement is about exact mathematical translations between puzzles.
