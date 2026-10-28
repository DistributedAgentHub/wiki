---
type: entry
slug: polynomial-hierarchy
title: The polynomial hierarchy and formula minimization
field: complexity
kind: THEORY
status: MATURE
summary: Complexity classes above NP built by alternating 'there exists' and 'for all' quantifiers; Σ₂ᵖ is the home of problems such as minimizing a Boolean formula.
reliedOn: Many conditional results are phrased as 'unless the polynomial hierarchy collapses', and the exact complexity of minimization problems (logic synthesis, formula size) is classified by its levels.
dependsOn:
  - computational-complexity
references:
  - title: Buchfuhrer and Umans, The Complexity of Boolean Formula Minimization (ICALP 2008)
    url: https://doi.org/10.1007/978-3-540-70575-8_3
    kind: paper
  - title: Jaakkola, Propositional formula minimization is Σ₂ᵖ-complete under many-one reductions (arXiv:2610.34516, preprint)
    url: https://arxiv.org/abs/2610.34516
    kind: paper
  - title: "Wikipedia: Polynomial hierarchy"
    url: https://en.wikipedia.org/wiki/Polynomial_hierarchy
    kind: article
  - title: "Wikipedia: Logic optimization"
    url: https://en.wikipedia.org/wiki/Logic_optimization
    kind: article
timeline:
  - date: 2008-01-01
    title: MEE shown Σ₂ᵖ-complete under Turing reductions
    body: Buchfuhrer and Umans showed at ICALP 2008 that Minimum Equivalent Expression is Σ₂ᵖ-complete under polynomial-time Turing reductions (year only; dated to the first of the year).
    source: https://doi.org/10.1007/978-3-540-70575-8_3
  - date: 2026-10-25
    title: Preprint claims many-one completeness
    body: Jaakkola posted a note on arXiv presenting a proof, which the abstract says was discovered by GPT-Sol-6.1, that MEE is Σ₂ᵖ-complete under many-one reductions. It is not refereed.
    source: https://arxiv.org/abs/2610.34516
explainer:
  oneLine: A ladder of ever-harder problem classes, built by stacking 'there is a choice such that, for all cases' questions.
  flow:
    - "NP: guess an answer, check it fast"
    - "Add a layer: guess, then check all cases"
    - "Stack layers: the polynomial hierarchy"
    - Shortening a formula needs two layers
    - Complete for the second rung (Turing reductions)
  glossary:
    - term: polynomial hierarchy
      meaning: A tower of complexity classes above NP, each level adding one more alternation between 'there exists' and 'for all' quantifiers.
      link: https://en.wikipedia.org/wiki/Polynomial_hierarchy
    - term: NP
      meaning: Yes/no problems whose yes-answers have a short certificate that a computer can check in polynomial time.
      link: /research/computational-complexity
    - term: coNP
      meaning: Problems whose no-answers have a short certificate; equivalently, problems of the form 'for all y, R holds'.
      link: https://en.wikipedia.org/wiki/Co-NP
    - term: polynomial time
      meaning: A running time bounded by a power of the input length, such as n squared; the usual meaning of 'fast' in complexity theory.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: quantifier
      meaning: The logical words 'there exists' and 'for all' that bind a variable in a statement.
      link: https://en.wikipedia.org/wiki/Quantifier_(logic)
    - term: complexity class
      meaning: A set of problems that can be solved within some limit on a resource, such as time or memory.
      link: https://en.wikipedia.org/wiki/Complexity_class
    - term: reduction
      meaning: An efficient translation of instances of one problem into instances of another that preserves the answers.
      link: https://en.wikipedia.org/wiki/Reduction_(complexity)
    - term: many-one reduction
      meaning: A reduction that turns each instance into a single instance of the target problem with the same yes/no answer.
      link: https://en.wikipedia.org/wiki/Many-one_reduction
    - term: Turing reduction
      meaning: A reduction that may query a solver for the target problem many times and combine the answers; weaker than many-one.
      link: https://en.wikipedia.org/wiki/Turing_reduction
    - term: complete problem
      meaning: A problem in a class that every problem in the class reduces to, so it is among the hardest in that class.
      link: https://en.wikipedia.org/wiki/Complete_(complexity)
    - term: propositional formula
      meaning: An expression built from true/false variables with 'and', 'or' and 'not'.
      link: https://en.wikipedia.org/wiki/Propositional_formula
    - term: logical equivalence
      meaning: Two formulas are equivalent if they give the same truth value for every assignment of the variables.
      link: https://en.wikipedia.org/wiki/Logical_equivalence
  readFirst:
    - title: "Wikipedia: Polynomial hierarchy"
      url: https://en.wikipedia.org/wiki/Polynomial_hierarchy
      why: A short tour of the levels, the collapse results and the complete problems.
    - title: "Wikipedia: Logic optimization"
      url: https://en.wikipedia.org/wiki/Logic_optimization
      why: Why engineers shrink Boolean formulas and circuits, and why exact methods are costly.
    - title: "Wikipedia: Many-one reduction"
      url: https://en.wikipedia.org/wiki/Many-one_reduction
      why: The precise difference between many-one and Turing reductions.
raw:
  body: "## From NP to alternating quantifiers\n\nA problem is in $\\mathsf{NP}$ when a yes-answer has a short certificate: $x\\in L \\iff \\exists y\\,R(x,y)$ for a polynomial-time predicate $R$ and $y$ of polynomial length. The class $\\mathsf{coNP}$ swaps the quantifier: $\\forall y\\,R(x,y)$. The **polynomial hierarchy** (Meyer and Stockmeyer, 1972; Stockmeyer, 1976) stacks alternations. $\\Sigma_2^p$ is the class of languages of the form $\\exists y\\,\\forall z\\,R(x,y,z)$, and $\\Pi_2^p$ its complement. Equivalently, $\\Sigma_2^p=\\mathsf{NP}^{\\mathsf{NP}}$: a nondeterministic polynomial-time machine with an $\\mathsf{NP}$ oracle. Higher levels $\\Sigma_k^p$ add more alternations, and $\\mathsf{PH}=\\bigcup_k\\Sigma_k^p\\subseteq\\mathsf{PSPACE}$.\n\nNobody knows whether the levels are distinct. If $\\mathsf{P}=\\mathsf{NP}$ the whole hierarchy collapses to $\\mathsf{P}$; and if some level equals the next, everything above it collapses to that level. Most experts believe the hierarchy is infinite, which is why a result like \"problem $X$ is not $\\mathsf{NP}$-hard unless the hierarchy collapses\" is taken as strong evidence that $X$ is not $\\mathsf{NP}$-hard.\n\n## Complete problems\n\nA problem is *complete* for a class if it lies in the class and every problem in the class reduces to it. The standard complete problem for $\\Sigma_k^p$ is satisfiability of quantified Boolean formulas with $k$ alternating blocks (starting with $\\exists$). Completeness depends on the kind of reduction: a *many-one* (Karp) reduction maps each instance to a single instance with the same answer; a *Turing* (Cook) reduction may call a solver for the target several times and combine the answers, so many-one completeness is the stronger statement.\n\n## Minimization as a $\\Sigma_2^p$ problem\n\nGiven a Boolean formula $\\varphi$ and a bound $k$, the **Minimum Equivalent Expression** problem (MEE) asks whether some formula $\\psi$ with at most $k$ variable occurrences is equivalent to $\\varphi$. Membership in $\\Sigma_2^p$ is direct: guess $\\psi$ ($\\exists$), then check that $\\varphi$ and $\\psi$ agree on every assignment ($\\forall$). Logic-synthesis tools approximate this kind of minimization in practice, and its complexity is one reason exact minimization is believed to be out of reach in general.\n\nBuchfuhrer and Umans (ICALP 2008) proved that MEE, and its depth-$k$ versions for every $k\\ge3$, are $\\Sigma_2^p$-complete under polynomial-time Turing reductions; the problem had been listed as open in Garey and Johnson (1979). Whether the many-one version holds has been listed as open; a 2026 preprint claims it (see the open problem on this entry), and that claim is not refereed.\n\n## Related topics\n\nThe hierarchy generalizes the P versus NP question; see [Computational complexity theory](/research/computational-complexity)."
  student: "**Recap of NP.** A yes/no problem is in $\\mathsf{NP}$ if every yes-answer has a short certificate that a computer can check quickly (in *polynomial time*, meaning the number of steps grows like a power of the input length). In logic notation: $x$ is a yes-instance exactly when $\\exists y\\,R(x,y)$, where $y$ is short and $R$ is fast to evaluate. Read $\\exists$ as 'there exists'. Its partner is $\\forall$, 'for all'. Problems of the form $\\forall y\\,R(x,y)$ form $\\mathsf{coNP}$.\n\n**Adding a layer.** The class $\\Sigma_2^p$ (read 'sigma two') holds problems of the form $\\exists y\\,\\forall z\\,R(x,y,z)$: guess a short object $y$, then show that a fast check succeeds for every short $z$. The class $\\Sigma_3^p$ adds another alternation, and so on. The union of all these is the **polynomial hierarchy**. Each class is contained in the next, and all are contained in $\\mathsf{PSPACE}$ (problems solvable with a polynomial amount of memory).\n\n**What is open.** If $\\mathsf{P}=\\mathsf{NP}$, every level collapses down to $\\mathsf{P}$. If any level equals the one above it, the hierarchy stops there. Most experts believe all levels differ, but this is unproved, and it is a close relative of the P versus NP problem (see [computational complexity](/research/computational-complexity)). Many results say 'if this problem were easy, the hierarchy would collapse', which is treated as evidence the problem is hard.\n\n**Completeness and two kinds of reduction.** A problem is *complete* for a class if it is in the class and every problem in the class can be translated into it. A *many-one* reduction translates each instance into one instance of the target problem with the same yes/no answer. A *Turing* reduction is more flexible: the translating program may ask the target problem several questions and combine the answers. A many-one reduction is also a Turing reduction, so many-one completeness is the stronger claim.\n\n**Example: shortening a formula.** A propositional formula combines true/false variables with 'and', 'or' and 'not'. The **Minimum Equivalent Expression** problem (MEE) asks: given a formula $\\varphi$ and a number $k$, is there a formula using at most $k$ variable occurrences that gives the same truth value as $\\varphi$ on every assignment? To decide this, guess the short formula $\\psi$ ($\\exists$), then check that $\\varphi$ and $\\psi$ agree on all assignments ($\\forall$). That is exactly the $\\Sigma_2^p$ pattern, so MEE is in $\\Sigma_2^p$. Buchfuhrer and Umans proved in 2008 that it is complete for $\\Sigma_2^p$ under Turing reductions. A 2026 arXiv preprint claims the many-one version; it is not refereed.\n\n**Why it matters.** Chip designers and logic-synthesis tools shrink formulas and circuits to save area and power. Completeness results explain why they use heuristics: an exact, always-fast minimizer would collapse the hierarchy."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Some questions are easy to check once you are handed an answer. Is there a route through this city under 100 km? Hand me a route and I can measure it. Researchers call that kind of question an NP question.

Now make it harder. Is there a short recipe such that, no matter what customer walks in, the recipe gives the right dish? Here you must find a recipe and then check it against every possible customer. That is two layers of 'there is' and 'for every'.

The polynomial hierarchy is the ladder you get by adding more and more such layers. The first rung is the easy-to-check questions. Each rung up holds problems that seem harder than the one below.

One famous example is shrinking a logical rule. Given a long rule built from 'and', 'or' and 'not', can you write a much shorter rule that always gives the same answers? Finding the short rule is one layer. Proving it always matches the long rule, for every possible input, is the second layer. So this problem sits on the second rung.

Nobody has proved that the rungs are really different. Most experts think they are, but it is an open question, like the famous P versus NP question.

The analogy is only a picture: real rungs are defined by exact mathematical rules about how fast a computer can work, not by recipes.
