---
type: problem
slug: static-cell-probe-lower-bound-beyond-log-n
title: "Static data structures: an ω(log n) cell-probe lower bound for an explicit problem at linear space"
entry: communication-complexity
status: OPEN
origin: Miltersen, Nisan, Safra and Wigderson (1995–98); stated as a major open problem by Pătraşcu and by Dvir, Golovnev and Weinstein (2019)
ratings:
  difficulty: 76.5
  applicationValue: 4.5
  leverage: 41.5
workMix:
  theory: 98
  engineering: 0
  compute: 2
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Dvir, Golovnev, Weinstein: Static data structure lower bounds imply rigidity"
    url: https://arxiv.org/abs/1811.02725
  - title: "Larsen: Higher cell probe lower bounds for evaluating polynomials (FOCS 2012, author copy)"
    url: https://users-cs.au.dk/~larsen/papers/poly_eval.pdf
  - title: "Weinstein, Yu: Amortized dynamic cell-probe lower bounds from four-party communication"
    url: https://arxiv.org/abs/1604.03030
  - title: "Larsen, Weinstein, Yu: Crossing the logarithmic barrier for dynamic Boolean data structure lower bounds"
    url: https://arxiv.org/abs/1703.03575
  - title: "Ko: An Ω((log n/log log n)²) cell-probe lower bound for dynamic Boolean data structures (preprint)"
    url: https://arxiv.org/abs/2603.25914
  - title: "Natarajan Ramamoorthy, Rashtchian: Equivalence of systematic linear data structures and matrix rigidity"
    url: https://arxiv.org/abs/1910.11921
links:
  - to: log-rank-conjecture
    kind: RELATED
    note: Static cell-probe lower bounds are proved through (asymmetric) communication complexity, the toolbox of the log-rank problem.
  - to: explicit-valiant-rigid-matrices
    kind: BUILDS_ON
    note: "For linear data structures the two problems are tied: Dvir–Golovnev–Weinstein show an ω(log² n) bound at space (1+ε)n would give new rigid matrices in P^NP, and systematic linear data-structure lower bounds are equivalent to rigidity bounds (Natarajan Ramamoorthy–Rashtchian), so the linear case of this problem runs through rigidity."
timeline:
  - date: 2012-10-20
    title: Ω(log n) static bound for polynomial evaluation
    body: Larsen's cell-sampling technique gives the highest static bound to date, Ω(log n) at linear space (FOCS 2012; conference date approximate).
    source: https://users-cs.au.dk/~larsen/papers/poly_eval.pdf
  - date: 2016-04-11
    title: Dynamic-to-static route for range counting
    body: Weinstein and Yu show a strengthened amortized dynamic bound would imply a super-logarithmic static bound for 3D range counting.
    source: https://arxiv.org/abs/1604.03030
  - date: 2017-03-10
    title: First super-logarithmic dynamic Boolean lower bound
    body: Larsen, Weinstein and Yu prove Ω̃(log^{1.5} n) for dynamic problems over F₂.
    source: https://arxiv.org/abs/1703.03575
  - date: 2018-11-05
    title: Static lower bounds imply rigidity
    body: "Dvir, Golovnev and Weinstein explain the static barrier: strong enough bounds for linear data structures yield rigid matrices (arXiv month; day approximate)."
    source: https://arxiv.org/abs/1811.02725
  - date: 2026-03-26
    title: Ω((log n / log log n)²) for dynamic Boolean problems (preprint)
    body: Ko's argument, which the author says is the limit of the chronogram framework.
    source: https://arxiv.org/abs/2603.25914
explainer:
  oneLine: Show that some lookup task needs more than about log n memory reads per question when memory barely exceeds the data.
  flow:
    - Data structure answers questions fast
    - "Cost: how many memory cells read"
    - "Best proof: about log n reads needed"
    - No explicit task proven to need more
    - "Open: an explicit task needing more"
  glossary:
    - term: data structure
      meaning: A way of organising stored information so questions about it can be answered quickly.
      link: https://en.wikipedia.org/wiki/Data_structure
    - term: cell-probe model
      meaning: A model where the only cost is how many memory cells a query reads; computation is free.
      link: https://en.wikipedia.org/wiki/Cell-probe_model
    - term: static data structure
      meaning: One built once for fixed data and then only queried, never updated.
      link: https://en.wikipedia.org/wiki/Data_structure
    - term: lower bound
      meaning: A proof that no method can do a task with fewer than a certain amount of some resource.
      link: https://en.wikipedia.org/wiki/Computational_complexity_theory
    - term: linear space
      meaning: Using memory about proportional to the amount of data stored.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: explicit problem
      meaning: A task given by a definite concrete description rather than shown to exist by counting.
      link: https://en.wikipedia.org/wiki/Derandomization
    - term: communication complexity
      meaning: Counting the bits two parties must exchange; the main tool for static lower bounds.
      link: /research/communication-complexity
    - term: polynomial evaluation
      meaning: Computing the value of a polynomial at a given point.
      link: https://en.wikipedia.org/wiki/Polynomial_evaluation
    - term: probe
      meaning: One read of a memory cell; the cost counted in the cell-probe model.
      link: https://en.wikipedia.org/wiki/Cell-probe_model
    - term: cell sampling
      meaning: "A lower-bound technique: show that a few randomly chosen memory cells already answer too many queries to be possible."
      link: https://en.wikipedia.org/wiki/Cell-probe_model
  readFirst:
    - title: Cell-probe model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cell-probe_model
      why: Defines the model and states key known bounds.
    - title: Data structure (Wikipedia)
      url: https://en.wikipedia.org/wiki/Data_structure
      why: A general introduction to what is being studied.
    - title: Communication complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Communication_complexity
      why: The proof technique behind most static lower bounds.
site:
  aiReviewed: true
---

In the cell-probe model a static data structure for a problem with a database of size $n$ and $m=\mathrm{poly}(n)$ possible queries stores $S$ cells of $w=\Theta(\log n)$ bits, and each query probes $t$ cells adaptively. The strongest known lower bound for any explicit problem has the form $t=\Omega\bigl(\log(m/n)/\log(S/n)\bigr)$, which is $\Omega(\log n)$ at linear space $S=O(n)$ and only $O(1)$ at polynomial space. **Problem:** exhibit an explicit static problem (a function $f$ of a database $x\in\{0,1\}^n$ and a query $q$ from a set of size $\mathrm{poly}(n)$) such that every data structure with $S=O(n)$ cells of $O(\log n)$ bits needs $t=\omega(\log n)$ probes in the worst case.

# State of the art

Larsen (FOCS 2012, 'Higher cell probe lower bounds for evaluating polynomials') proved t = Ω(lg|F| / lg(Sw/(n lg|F|))) for polynomial evaluation over a field F with |F| ≥ n^{1+Ω(1)}, which is Ω(log n) at linear space and still the highest static bound. Earlier communication-based methods (Miltersen–Nisan–Safra–Wigderson) give only Ω(1) for poly(n) queries, and Pătraşcu–Thorup's refinement cannot exceed Ω(lg d / lg lg d) for d queries; Larsen's cell-sampling technique beats that by a log log factor and stops at the same scale. Dvir, Golovnev and Weinstein (arXiv:1811.02725, STOC 2019) call an ω(log n) bound at linear space 'a major open problem' and show why it is hard: for linear data structures, a bound of ω(log² n) at space (1+ε)n would give new P^NP rigid matrices, and polynomial bounds at near-optimal space would give log-depth linear-circuit lower bounds via Valiant's rigidity route (see also Natarajan Ramamoorthy–Rashtchian, arXiv:1910.11921). For dynamic data structures the logarithmic barrier has fallen: Larsen, Weinstein and Yu (arXiv:1703.03575, STOC 2018) proved Ω̃(log^{1.5} n) for dynamic Boolean problems, and Ko (arXiv:2603.25914, revised September 2026, to appear at FOCS 2026 per its arXiv comment) proved Ω((log n / log log n)²), which the author argues is the ceiling of the chronogram framework. Weinstein and Yu (arXiv:1604.03030) showed that a slight strengthening of their amortized dynamic bound for 2D weighted range counting would give Ω((log n / log log n)²) for static 3D orthogonal range counting at near-linear space, but that strengthening is unproven. No explicit static problem is known to need ω(log n) probes at linear space.

# Applications

Mostly foundational. Static lower bounds mark where range-searching, membership and predecessor structures cannot be improved; at the strength of polynomial bounds they would also yield circuit lower bounds via matrix rigidity.

# Resolution criteria

A proof, accepted by experts, that an explicit static problem with poly(n) queries requires t = ω(log n) probes for every cell-probe data structure with O(n) cells of O(log n) bits. Conditional results (e.g. assuming a strengthened dynamic bound) and bounds only for restricted (e.g. linear or non-adaptive) data structures do not count.

# Rating rationale

Difficulty 76.5: the static bound has been stuck at Θ(log n) for linear space for over a decade while the dynamic barrier fell twice (2017, 2026), and the rigidity connection shows that strong versions are at least as hard as explicit-rigidity problems; it sits below log-rank (80) and Valiant rigidity (79.5), above ACC⁰ lower bounds (72). Application value 4.5: little practical consequence, just under log-rank (5.5). Leverage 41.5: it would reshape data-structure lower bounds and feed the rigidity programme, between ACC⁰ (45) and the feature-learning exponents (40).

# Work mix rationale

Needs new communication-complexity or information-theoretic arguments; no experimental component.

# Verification

The target is an omega(log n) cell-probe lower bound for an explicit static problem at linear space. The cell-probe model is not in Mathlib, so the lower bound cannot be machine-checked today. Experts review the proof, and conditional or restricted-model results do not count.

# Plain explanation

A data structure is a way of organising information so questions about it can be answered quickly. Think of an index for a book. We want to understand the best possible: how few memory locations must you read to answer a question?

Theorists study this in a clean model called the cell-probe model. The only cost is how many memory cells you read. All computation is free. In this model a lower bound is a mathematical guarantee that no cleverly designed structure can answer queries with fewer reads.

Proving such guarantees is difficult. For the problems in question, where the stored data is fixed in advance (static), the best proven guarantee is about the logarithm of the data size when memory is limited to a constant times the data size. Nobody has proved that any explicit problem needs more than that, such as the square of that logarithm, even though experts expect harder problems exist.

That is an embarrassing gap: it is like having proved only that a multi-storey building has at least a few floors.

The problem asks for an explicit lookup task for which one can prove that more than log n reads are required. Methods that work well for changing (dynamic) data do not apply. This is a version of the broader challenge of proving strong lower bounds in computer science.

# Student explanation

**The model.** In the cell-probe model, a _static_ data structure for a problem with a database of size $n$ and $m=\mathrm{poly}(n)$ possible queries stores $S$ cells of $w=\Theta(\log n)$ bits each. A query is answered by reading ($\text{probing}$) $t$ cells, adaptively, with all other computation free. So lower bounds are information-theoretic and apply to any algorithm.

**The current barrier.** The strongest known lower bound for any explicit problem has the form $t=\Omega\big(\log(m/n)/\log(S/n)\big)$, which is $\Omega(\log n)$ at linear space $S=O(n)$ and only $O(1)$ at polynomial space.

**The problem.** Exhibit an explicit static problem (a function $f$ of a database $x\in\{0,1\}^n$ and a query $q$ from a set of size $\mathrm{poly}(n)$) such that every data structure using linear space needs $\omega(\log n)$ probes per query.

**State of the art.**

- Larsen (FOCS 2012, "Higher cell probe lower bounds for evaluating polynomials") proved $t=\Omega\big(\lg|F|/\lg(Sw/(n\lg|F|))\big)$ for polynomial evaluation over a field $F$ with $|F|\ge n^{1+\Omega(1)}$. This is $\Omega(\log n)$ at linear space and is still the highest static bound.
- Earlier communication-based methods (Miltersen, Nisan, Safra and Wigderson) give only $\Omega(1)$ for $\mathrm{poly}(n)$ queries; the refinement by Pătraşcu and Thorup cannot exceed $\Omega(\lg d/\lg\lg d)$ for $d$ queries. Larsen's _cell-sampling_ technique beats that by a $\log\log$ factor and stops at the same scale.
- Dvir, Golovnev and Weinstein (2019) call an $\omega(\log n)$ bound at linear space "a major open problem" and show why it is hard: for _linear_ data structures, a lower bound of $\omega(\log^2 n)$ at space $(1+\varepsilon)n$ would give new rigid matrices constructible with an NP oracle (see the entry on matrix rigidity), and polynomial bounds at near-optimal space would give lower bounds for log-depth linear circuits. So the problem is tied to other long-standing open problems.

**Why it is hard.** The communication-based method treats the data structure as a conversation between the query-holder and the memory, and the standard accounting loses a logarithmic factor at linear space. Beating it seems to need new techniques that also bear on circuit lower bounds.

**Contrast with dynamic structures.** For data that changes with updates, the logarithmic barrier has fallen: Larsen, Weinstein and Yu (2018) proved about $\log^{1.5}n$ for dynamic Boolean problems, and a 2026 paper by Ko (to appear at FOCS 2026) reports $(\log n/\log\log n)^2$. No explicit static problem is known to need $\omega(\log n)$ probes at linear space.

**Payoff.** A first super-logarithmic static lower bound, with links to other major lower-bound problems.
