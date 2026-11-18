---
type: problem
slug: random-k-sat-satisfiability-threshold-conjecture
title: The satisfiability threshold conjecture for random k-SAT (all k ≥ 3)
entry: random-constraint-satisfaction-thresholds
status: OPEN
origin: Friedgut, 1999 (sharp threshold with possibly n-dependent location); convergence is the satisfiability conjecture
ratings:
  difficulty: 35
  applicationValue: 6
  leverage: 35
verification:
  route: REVIEW
sources:
  - title: "Carenini: A polynomial scaling window for random k-SAT and a proof of the satisfiability conjecture (ECCC TR26-229, 5 Oct 2026, unrefereed)"
    url: https://eccc.weizmann.ac.il/report/2026/229/
  - title: "Gamarnik: The satisfiability conjecture for random k-SAT formulas (arXiv:2611.10139, 6 Nov 2026)"
    url: https://arxiv.org/abs/2611.10139
  - title: "Ding, Sly and Sun: Proof of the satisfiability conjecture for large k (arXiv:1411.0650)"
    url: https://arxiv.org/abs/1411.0650
links:
  - to: mezard-parisi-formula-diluted-spin-glasses
    kind: RELATED
    note: Both concern random K-SAT on sparse random hypergraphs and use interpolation methods; the cavity-method predictions behind the threshold are the same physics.
timeline:
  - date: 1998-07-14
    title: "Friedgut: sharp threshold for random k-SAT"
    body: Shows a sharp threshold exists, with the location allowed to depend on n; convergence left open.
    source: https://web.stevens.edu/algebraic/Files/SAT/SATthre.pdf
  - date: 2010-06-18
    title: "Abbe and Montanari: concentration of the number of solutions"
    body: Interpolation plus Friedgut's theorem; per Gamarnik's exposition, a stronger concentration property would imply the conjecture.
    source: https://arxiv.org/abs/1006.3786
  - date: 2014-11-03
    title: "Ding, Sly and Sun: large k"
    body: Prove the conjecture for all k above an absolute constant, matching the 1-RSB prediction (arXiv v1 date).
    source: https://arxiv.org/abs/1411.0650
  - date: 2026-10-05
    title: "Carenini: polynomial scaling window, claimed proof for all k at least 3"
    body: An ECCC report claims a window of width O(n^(1/2+1/k)); with Abbe–Montanari this would give the conjecture for every fixed k at least 3. Unrefereed.
    source: https://eccc.weizmann.ac.il/report/2026/229/
  - date: 2026-11-06
    title: "Gamarnik: exposition of the recent resolutions"
    body: Reports that Carenini resolved the conjecture first and OpenAI shortly after, by a different argument; the OpenAI manuscript is described as produced by AI only. Not a proof in itself; unrefereed.
    source: https://arxiv.org/abs/2611.10139
explainer:
  oneLine: Random logic puzzles flip from solvable to unsolvable at a critical density. Is it one fixed number for every size k?
  flow:
    - Random clauses added to n variables
    - Sharp flip, location may depend on n
    - Large k proved in 2014
    - 2026 reports claim all k ≥ 3
    - Neither claim refereed or checked
  glossary:
    - term: random graph
      meaning: A graph whose edges are chosen by chance, for example each pair of vertices joined independently with the same probability.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
    - term: graph colouring
      meaning: Giving each vertex of a graph one of q colours so that no edge joins two vertices of the same colour.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: k-SAT
      meaning: A logic puzzle of clauses, each an OR of k variables or their negations; the question is whether all clauses can be true at once.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: threshold
      meaning: The density at which a random object switches from almost surely having a property to almost surely lacking it.
      link: https://en.wikipedia.org/wiki/Random_graph
    - term: sharp threshold
      meaning: A threshold where the switch happens in a window much narrower than the threshold's own size.
      link: https://en.wikipedia.org/wiki/Random_graph
    - term: almost surely (a.s.)
      meaning: With probability tending to 1 as the size n of the object grows.
      link: https://en.wikipedia.org/wiki/Almost_surely
    - term: preprint
      meaning: A paper made public before peer review; other experts have not yet checked it.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: probabilistic method
      meaning: The DARC research page on proving that objects exist, or have a property, by showing a random choice works with positive probability.
      link: /research/probabilistic-method
    - term: random constraint satisfaction thresholds
      meaning: The DARC research page on sharp thresholds in random colouring and random k-SAT.
      link: /research/random-constraint-satisfaction-thresholds
    - term: clause
      meaning: An OR of a few variables or their negations; it is true if at least one of its literals is true.
      link: https://en.wikipedia.org/wiki/Conjunctive_normal_form
    - term: first moment method
      meaning: Bounding the chance that a count is at least 1 by its average value; if the average is tiny, the thing almost surely does not exist.
      link: https://en.wikipedia.org/wiki/Markov%27s_inequality
    - term: second moment method
      meaning: A way to show something exists by checking that a count of it is not too spread out compared with its average.
      link: https://en.wikipedia.org/wiki/Second_moment_method
    - term: replica symmetry breaking
      meaning: A physics picture in which the set of solutions splits into many separated clusters arranged in a hierarchy.
      link: https://en.wikipedia.org/wiki/Replica_trick
    - term: interpolation method
      meaning: A proof technique that connects a hard random model to an easy one along a path and tracks how a quantity changes.
      link: /research/diluted-spin-glasses
  readFirst:
    - title: Boolean satisfiability problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
      why: What SAT and k-SAT are.
    - title: "Gamarnik: The satisfiability conjecture for random k-SAT formulas (arXiv)"
      url: https://arxiv.org/abs/2611.10139
      why: A readable exposition of the conjecture, its history and the 2026 claims (unrefereed).
    - title: "Ding, Sly and Sun: Proof of the satisfiability conjecture for large k (arXiv)"
      url: https://arxiv.org/abs/1411.0650
      why: The large-k result; the abstract states the idea.
site:
  aiReviewed: true
---

Fix $k\ge3$ and let $F$ be a random $k$-CNF formula with $n$ variables and $m=\alpha n$ clauses. Friedgut proved a sharp threshold at some $\alpha_k(n)$ whose location may depend on $n$. Prove that there is a constant $\alpha_k$ such that $F$ is a.s. satisfiable for $\alpha<\alpha_k$ and a.s. unsatisfiable for $\alpha>\alpha_k$.

# State of the art

**Open for general $k$ as of today in the sense that every claimed proof is unrefereed.** Large $k$: Ding, Sly and Sun (arXiv:1411.0650; v1 3 Nov 2014, v3 15 Apr 2021) proved the conjecture for all $k$ at least an absolute constant, matching the 1-RSB prediction of physics. All $k\ge3$: Gamarnik's exposition (arXiv:2611.10139, 6 Nov 2026) says the conjecture was resolved first by Carenini and shortly afterwards by OpenAI, and says the OpenAI manuscript reads 'in a fashion typical for the works produced by AI only'; it does not say whether either is refereed (OpenAI's is a GitHub preprint). Carenini's ECCC report TR26-229 (5 Oct 2026) claims a scaling window of width $O(n^{1/2+1/k})$, an improvement over the earlier $O(n/\log n)$, and with the Abbe–Montanari concentration result this gives the conjecture for every fixed $k\ge3$. Gamarnik's note also lists as unknown whether the satisfiability threshold equals the ground-state-energy threshold. DARC has verified none of this, so the problem stays OPEN.

# Applications

Indirect: locates where random instances switch from easy-to-satisfy to infeasible, which calibrates SAT-solver benchmarks and tests statistical-physics predictions. No direct deployed use.

# Resolution criteria

A refereed or independently expert-checked proof of the existence of the limit $\alpha_k$ for every fixed $k\ge3$ (or a formal proof). Preprints and AI-generated manuscripts do not change the status.

# Rating rationale

Difficulty 35: the large-k case is a published proof and two unrefereed manuscripts claim the general case, but neither has been checked. Application value 5: guides benchmark design for SAT solving, otherwise conceptual. Leverage 35: the central existence question for random constraint satisfaction, with the colouring analogue now claimed to follow from the same argument.

# Verification

Expert reading of Carenini's window bound (the polynomial improvement over $O(n/\log n)$) and its combination with the Abbe–Montanari concentration theorem, and separately of the OpenAI manuscript described in Gamarnik's note; compare the two arguments and check each against Friedgut's sharp-threshold theorem and the Ding–Sly–Sun large-$k$ result as consistency tests.

# Plain explanation

A logic puzzle can be built from rules like "at least one of these three switches must be on". Build one by choosing rules at random. With few rules, some setting of the switches almost always satisfies all of them. With many, almost never.

A 1999 theorem showed the flip is sharp. It did not show that the flip happens at one fixed number of rules per switch as the puzzle grows. Proving that is the satisfiability conjecture.

In 2014 three mathematicians proved it when each rule involves a large number of switches, using a careful counting argument. The case of small rules, including the usual three, stayed open for twelve years.

In autumn 2026 two claims appeared. Gaia Carenini posted a report in October claiming to prove all cases. An exposition by David Gamarnik says that OpenAI then produced its own proof shortly after, and describes it as written in the style typical of work produced by AI alone. These are preprints. Neither has been through peer review, and DARC has not checked them, so the question is still listed as open here.

The practical interest is modest: it tells people who test puzzle-solving programs where random puzzles become hard or impossible. The main value is understanding why such sudden changes happen.

# Student explanation

**Statement.** A $k$-clause is an OR of $k$ distinct variables, each possibly negated. A random $k$-SAT formula has $n$ variables and $m=\alpha n$ clauses chosen independently and uniformly. Let $\Pr[\text{satisfiable}]$ be the probability some assignment of $n$ True/False values satisfies all clauses. Friedgut (1999) proved a sharp threshold $\alpha_k(n)$, but possibly depending on $n$. The **satisfiability conjecture** says it converges to a constant $\alpha_k$ for each $k\ge3$.

**Why it is hard.** Let $Z$ be the number of satisfying assignments. $\mathbb E[Z]=2^n(1-2^{-k})^m$ is easy to compute. It drops below 1 once $\alpha>\ln 2/(-\ln(1-2^{-k}))$, which proves unsatisfiability above that density (the first moment method). Showing satisfiability below the threshold is harder, because $\mathbb E[Z]$ can be huge while $Z$ is zero for most formulas. The second moment method, which compares $\mathbb E[Z^2]$ to $\mathbb E[Z]^2$, fixes this only for formulas that avoid heavy clustering of solutions. Ding, Sly and Sun refined it to prove the conjecture exactly for large $k$, matching a physics prediction (one-step replica symmetry breaking).

**Interpolation route.** Abbe and Montanari used an interpolation argument from spin-glass theory to show that if the probability of unsatisfiability decays fast enough, then $\frac1n\log Z$ concentrates, and that a stronger concentration statement would imply the conjecture, as described in Gamarnik's exposition.

**The 2026 claims.** Carenini's ECCC report TR26-229 (5 October 2026) claims the transition window has width $O(n^{1/2+1/k})$, a polynomial improvement on the earlier $O(n/\log n)$, and that with Abbe–Montanari this gives the conjecture for every fixed $k\ge3$. Gamarnik's exposition (6 November 2026) says Carenini's resolution came first and OpenAI's followed shortly, by a proof using frozen variables, hitting times and a superadditivity argument, and calls OpenAI's manuscript short and readable 'in a fashion typical for the works produced by AI only'. It does not say either is refereed. DARC read the report's abstract and Gamarnik's exposition and verified nothing.

**Open beside it.** Gamarnik's note lists whether the satisfiability threshold equals the ground-state-energy threshold as unknown.
