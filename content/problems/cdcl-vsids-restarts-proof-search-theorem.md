---
type: problem
slug: cdcl-vsids-restarts-proof-search-theorem
title: "Deterministic CDCL with VSIDS and restarts: polynomial-size refutations on bounded-treewidth CNFs"
entry: sat-solving
status: OPEN
origin: Pipatsrisawat–Darwiche (2011), Atserias–Fichte–Thurley (2011), Atserias–Müller (2019)
ratings:
  difficulty: 54
  applicationValue: 40
  leverage: 29
workMix:
  theory: 80
  engineering: 5
  compute: 15
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: Pipatsrisawat, Darwiche, On the power of clause-learning SAT solvers as resolution engines (Artif. Intell. 2011)
    url: https://doi.org/10.1016/j.artint.2010.10.002
  - title: Atserias, Fichte, Thurley, Clause-Learning Algorithms with Many Restarts and Bounded-Width Resolution (JAIR 2011)
    url: https://doi.org/10.1613/jair.3152
  - title: "Vinyals: Hard Examples for Common Variable Decision Heuristics (AAAI 2020)"
    url: https://doi.org/10.1609/aaai.v34i02.5527
  - title: "Samar, Vinyals, Ganesh: An Exponential Separation between Deterministic CDCL and DPLL Solvers (SAT 2026)"
    url: https://arxiv.org/abs/2603.16156
  - title: "Singh, Liew, Vinyals, Ganesh: Proofdoors and Efficiency of CDCL Solvers (preprint, 2026)"
    url: https://arxiv.org/abs/2603.26286
  - title: Atserias, Müller, Automating Resolution is NP-Hard (FOCS 2019; J. ACM 2020)
    url: https://arxiv.org/abs/1904.02991
  - title: Mull, Fremont, Seshia, On the Hardness of SAT with Community Structure
    url: https://arxiv.org/abs/1602.08620
  - title: "Ben-Sasson, Wigderson, Short proofs are narrow: resolution made simple (J. ACM 2001)"
    url: https://doi.org/10.1145/375827.375835
  - title: "University of Freiburg: Kissat triumphs in the SAT 2024 competition"
    url: https://news.vm.uni-freiburg.de/en/newsarchive/kissat-triumphs-in-the-sat-2024-competition
timeline:
  - date: 2011-01-01
    title: CDCL simulates resolution with idealised decisions
    body: Pipatsrisawat and Darwiche proved a polynomial simulation of general resolution using nondeterministic decisions and restarts (AIJ 2011; month approximate).
    source: https://doi.org/10.1016/j.artint.2010.10.002
  - date: 2019-04-03
    title: Resolution is not automatable
    body: Atserias and Müller proved NP-hardness of finding near-shortest resolution refutations.
    source: https://arxiv.org/abs/1904.02991
  - date: 2020-04-03
    title: Hard examples for common decision heuristics
    body: Vinyals showed that CDCL with VMTF, CHB and some VSIDS/LRB implementations needs exponential time on formulas with short resolution proofs (AAAI 2020).
    source: https://doi.org/10.1609/aaai.v34i02.5527
  - date: 2026-03-17
    title: Deterministic VSIDS-variant CDCL beats DPLL
    body: Samar, Vinyals and Ganesh proved that a deterministic CDCL configuration with a VSIDS variant solves Ordering Principle formulas in polynomial time (SAT 2026).
    source: https://arxiv.org/abs/2603.16156
explainer:
  oneLine: Prove that real SAT solvers, with their usual tricks, run fast on puzzles with simple structure.
  flow:
    - Solvers handle huge puzzles in practice
    - Simple structure means short proofs exist
    - Does the real solver find them?
    - "Known: only idealised solvers proved"
    - "Open: prove it for the deterministic recipe"
  glossary:
    - term: CDCL
      meaning: "Conflict-driven clause learning: the search method in modern SAT solvers that learns a new rule from each dead end."
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
    - term: VSIDS
      meaning: A heuristic that favours variables recently involved in conflicts when deciding what to guess next.
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
    - term: restart
      meaning: Throwing away the current guesses and starting the search again while keeping what was learned.
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
    - term: treewidth
      meaning: A number measuring how tree-like a network is; small treewidth means it is made of loosely connected parts.
      link: https://en.wikipedia.org/wiki/Treewidth
    - term: resolution proof
      meaning: A proof that combines clauses step by step until it reaches an obvious contradiction.
      link: https://en.wikipedia.org/wiki/Resolution_(logic)
    - term: CNF
      meaning: A logical formula written as a list of rules (clauses) that must all hold.
      link: https://en.wikipedia.org/wiki/Conjunctive_normal_form
    - term: unsatisfiable
      meaning: A formula for which no assignment of true/false values makes all rules hold.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: unit propagation
      meaning: When a rule has only one way left to hold, set that variable and follow the consequences.
      link: https://en.wikipedia.org/wiki/Unit_propagation
    - term: SAT solving
      meaning: The topic of algorithms and engineering for deciding Boolean satisfiability.
      link: /research/sat-solving
    - term: primal graph
      meaning: The network with one node per variable and a link between two variables whenever they appear in the same clause.
      link: https://en.wikipedia.org/wiki/Treewidth
    - term: phase saving
      meaning: Remembering the last value each variable had and reusing it when the solver guesses that variable again.
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
    - term: modularity
      meaning: A measure of how strongly a network splits into tightly knit groups with few links between them.
      link: https://en.wikipedia.org/wiki/Modularity_(networks)
  readFirst:
    - title: Conflict-driven clause learning (Wikipedia)
      url: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
      why: Explains the method the problem is about.
    - title: Treewidth (Wikipedia)
      url: https://en.wikipedia.org/wiki/Treewidth
      why: What 'simple structure' means in the statement.
    - title: SAT solver (Wikipedia)
      url: https://en.wikipedia.org/wiki/SAT_solver
      why: Overview of solvers and where they are used.
raw:
  body: "Fix a concrete deterministic CDCL solver model: unit propagation, first-UIP clause learning, the VSIDS decision heuristic with a fixed decay, phase saving and Luby or geometric restarts, with no random decisions. For a CNF formula $F$ with $n$ variables whose primal graph has treewidth at most $k$, is the number of conflicts before this solver terminates on unsatisfiable $F$ bounded by $\\mathrm{poly}(n)\\cdot 2^{O(k)}$? Equivalently: *does the practical heuristic stack, not a nondeterministic or randomised idealisation, find a resolution refutation whose size matches the structure-based upper bound?* Davis–Putnam variable elimination along an elimination order of width $k$ gives resolution refutations of size $2^{O(k)}\\mathrm{poly}(n)$, so short proofs exist; the question is whether the actual heuristic search finds them."
site:
  aiReviewed: true
---

# State of the art

**What is known.** CDCL refutations are resolution proofs, so exponential resolution lower bounds apply to every CDCL solver. With nondeterministic decisions and restarts CDCL polynomially simulates general resolution (Pipatsrisawat and Darwiche, AIJ 2011), and with random decisions and many restarts it refutes formulas of bounded resolution width in polynomial time (Atserias, Fichte and Thurley, JAIR 2011); these idealisations do not cover deterministic VSIDS. Atserias and Müller (FOCS 2019; J. ACM 2020) proved that finding a refutation at most polynomially longer than the shortest is NP-hard (resolution is not automatable unless P = NP), so no proof-search heuristic is optimal on all inputs. Ben-Sasson and Wigderson showed that resolution proof size is governed by width.

**Structure hypotheses.** Industrial instances have high modularity and small treewidth-like parameters, and community structure correlates with solver speed. Mull, Fremont and Seshia (SAT 2016, arXiv:1602.08620) showed that formulas with high modularity can still be NP-hard and that a random community model with few communities and high modularity almost surely requires exponential resolution proofs, so community structure alone does not explain CDCL's success. Vinyals (AAAI 2020) constructed formulas with polynomial-size resolution refutations on which CDCL with VMTF, CHB and certain VSIDS and LRB implementations needs exponential time, so deterministic VSIDS-style CDCL does not simulate resolution; this is why the target above is restricted to a structural class. In the positive direction, Samar, Vinyals and Ganesh (arXiv:2603.16156, SAT 2026) give a deterministic CDCL configuration with a VSIDS variant that solves Ordering Principle formulas in polynomial time, exponentially separating it from DPLL, and Singh, Liew, Vinyals and Ganesh (arXiv:2603.26286, 2026, preprint) prove that a certain CDCL configuration refutes formulas with small "proofdoors" (chunk-wise interpolant decompositions) in polynomial time. An empirical study of 76,600 bounded-model-checking instances (Zhang et al., arXiv:2605.15506, 2026, preprint) finds that treewidth and community structure do not separate linearly from exponentially scaling families, so a bounded-treewidth theorem would explain only part of practice.

**Practice.** Kissat won the SAT Competition 2024. Solvers certify answers with DRAT proofs, and SAT-based results such as Boolean Pythagorean triples (about 200 terabytes of proof) and the empty hexagon number have been verified. No theorem explains why the same heuristics work across these families.

# Applications

A proof would be the first guarantee that practical SAT solving is efficient on a natural structural class, and would indicate which heuristic components (activity decay, restart policy) are necessary. It would inform solver design only modestly; the main benefit is a theoretical foundation for a technology used in hardware verification, planning and mathematics.

# Resolution criteria

A proof that a precisely specified deterministic CDCL model (VSIDS, restarts, phase saving) refutes every unsatisfiable CNF of treewidth $\le k$ using $\mathrm{poly}(n)2^{O(k)}$ conflicts, or an explicit family of bounded-treewidth CNFs on which that model needs superpolynomial-in-$n$ conflicts for $k=O(\log n)$. Either direction resolves the problem for the stated model.

# Rating rationale

The statement is sharp and a partial result (a restricted model, or a lower bound for VSIDS) seems attackable, but proof-search guarantees for deterministic heuristics have resisted a decade of effort and automatability results show limits. Application value is moderate: foundations for solvers used in verification. Leverage is confined to SAT-solving theory.

# Work mix rationale

Mostly proof complexity and online-learning-style analysis of a heuristic; small experiments test conjectures on benchmark families.

# Verification

The target is a theorem about a precisely specified deterministic CDCL model (VSIDS, restarts, phase saving) on bounded-treewidth CNFs, or a superpolynomial counterexample family. A formal CDCL model and proof-size accounting could eventually be written in Lean, but Mathlib has no SAT proof-complexity library, so today it needs expert review. A counterexample family can additionally be run on a real solver to support the claim.

# Plain explanation

Modern SAT solvers settle logic puzzles with millions of variables, even though in the worst case the problem is believed to be hopelessly hard. Engineers know that they work; theorists do not know exactly why.

The puzzles that show up in industry tend to have structure, such as being made of loosely connected parts. One measure of how tangled a puzzle is is called treewidth. A puzzle with small treewidth has a short proof of impossibility, if it is impossible, and a clever systematic method could find it quickly.

The question is whether the actual solver, with its real heuristics, finds that short proof efficiently. The solver follows the most recently troublesome variables, restarts its guesses at intervals while keeping the rules it has learned, and remembers helpful settings. Existing theorems cover only idealised versions, for example with random choices or with decisions guided by a magic hint. They do not cover the exact deterministic recipe used in practice.

Some known bad news: in specially built cases, solvers using such heuristics take exponential time even though short proofs exist. That is why the target is restricted to puzzles with bounded treewidth.

If solved, we would have the first guarantee that practical SAT solving is efficient on a natural class of puzzles, and we would learn which parts of the recipe (the forgetting speed, the restart rule) actually matter.

# Student explanation

**Setting.** Fix a concrete deterministic CDCL solver model: unit propagation, first-UIP clause learning, the VSIDS decision heuristic with a fixed decay, phase saving and Luby or geometric restarts, with no random decisions. Let $F$ be an unsatisfiable CNF formula with $n$ variables whose primal graph (variables connected if they appear together in a clause) has treewidth at most $k$.

**Question.** Is the number of conflicts before the solver terminates bounded by $\mathrm{poly}(n)\cdot2^{O(k)}$? Equivalently: does the practical heuristic stack find a resolution refutation whose size matches the structural upper bound? Davis–Putnam variable elimination along an elimination order of width $k$ gives refutations of size $2^{O(k)}\mathrm{poly}(n)$, so short proofs exist; the question is whether the real search finds them.

**What is known.**

- Every CDCL run is a resolution proof, so exponential resolution lower bounds apply to every CDCL solver.
- With nondeterministic decisions and restarts, CDCL polynomially simulates general resolution (Pipatsrisawat and Darwiche, 2011). With random decisions and many restarts, it refutes formulas of bounded resolution width in polynomial time (Atserias, Fichte and Thurley, 2011). These idealisations do not cover deterministic VSIDS.
- Atserias and Müller (2019/2020) proved that finding a refutation at most polynomially longer than the shortest is NP-hard, so no proof-search heuristic can be optimal on all inputs.
- Ben-Sasson and Wigderson showed that resolution proof size is governed by width.
- Vinyals (2020) built formulas with short resolution refutations on which CDCL with several heuristics, including certain VSIDS implementations, needs exponential time, so deterministic CDCL does not simulate resolution in general. That is why the target is restricted to a structural class.
- A 2026 paper by Samar, Vinyals and Ganesh gives a deterministic CDCL configuration with a VSIDS variant that solves one family of formulas (the Ordering Principle) in polynomial time, but that is not a general structural theorem.

**Structure hypotheses.** Industrial instances have high modularity and small treewidth-like parameters. But Mull, Fremont and Seshia (2016) showed that high modularity alone does not guarantee easiness, so community structure does not fully explain solver success.

**Payoff.** A proof would give the first guarantee that practical SAT solving is efficient on a natural class and would indicate which components (decay, restart policy) are necessary. It would inform solver design only modestly; the main value is a theoretical foundation for a technology already widely deployed.
