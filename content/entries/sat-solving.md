---
type: entry
slug: sat-solving
title: SAT solving (CDCL)
field: sat-solving
kind: ALGORITHM
status: MATURE
summary: Conflict-driven clause-learning solvers decide Boolean satisfiability on formulas with millions of variables, powering hardware and software verification, planning and computer-assisted mathematics.
reliedOn: Bounded model checking, equivalence checking, test generation, configuration and many combinatorial proofs reduce to SAT, so solver speed and proof certificates underpin industrial verification and several computer-assisted theorems.
dependsOn:
  - computational-complexity
references:
  - title: "Marques-Silva, Sakallah, GRASP: a search algorithm for propositional satisfiability (IEEE Trans. Comput. 1999)"
    url: https://doi.org/10.1109/12.769433
    kind: paper
  - title: "Moskewicz et al., Chaff: engineering an efficient SAT solver (DAC 2001)"
    url: https://doi.org/10.1145/378239.379017
    kind: paper
  - title: Pipatsrisawat, Darwiche, On the power of clause-learning SAT solvers as resolution engines (Artif. Intell. 2011)
    url: https://doi.org/10.1016/j.artint.2010.10.002
    kind: paper
  - title: Heule, Kullmann, Marek, Solving and Verifying the boolean Pythagorean Triples problem via Cube-and-Conquer (SAT 2016)
    url: https://arxiv.org/abs/1605.00723
    kind: paper
  - title: Subercaseaux et al., Formal Verification of the Empty Hexagon Number (ITP 2024)
    url: https://arxiv.org/abs/2403.17370
    kind: paper
  - title: Kissat SAT solver (source repository)
    url: https://github.com/arminbiere/kissat
    kind: code
  - title: Brehm, Weggemans, Assessing fault-tolerant quantum advantage for k-SAT with structure (Quantum 10, 1975, 2026)
    url: https://arxiv.org/abs/2412.13274
    kind: paper
timeline:
  - date: 2001-06-01
    title: Chaff
    body: Moskewicz et al. showed that watched literals, VSIDS and restarts made CDCL fast enough for industrial verification; month given as the conference month (DAC 2001).
    source: https://doi.org/10.1145/378239.379017
  - date: 2011-02-01
    title: CDCL and resolution
    body: Pipatsrisawat and Darwiche showed that CDCL with nondeterministic decisions and restarts p-simulates general resolution; Atserias, Fichte and Thurley (JAIR 2011) showed that CDCL with random decisions and many restarts handles bounded-width resolution. Month is the journal issue.
    source: https://doi.org/10.1016/j.artint.2010.10.002
  - date: 2016-05-03
    title: Boolean Pythagorean triples
    body: A cube-and-conquer run produced a DRAT proof of almost 200 terabytes, settling a question of Ronald Graham.
    source: https://arxiv.org/abs/1605.00723
  - date: 2024-03-26
    title: Empty hexagon number verified in Lean
    body: Heule and Scheucher's SAT proof that every 30 points in general position contain an empty convex hexagon had its encoding verified in Lean and its proof checked by a verified checker.
    source: https://arxiv.org/abs/2403.17370
explainer:
  oneLine: Programs that solve huge true-or-false puzzles by learning from their dead ends, used to check chips and software.
  flow:
    - Millions of true/false rules to satisfy
    - Guess, follow consequences, hit a conflict
    - Learn a note about why it failed
    - Jump back and never repeat that mistake
    - Prove chips and programs correct
  glossary:
    - term: Boolean satisfiability (SAT)
      meaning: Asking whether true/false values can be assigned to variables so a logical formula comes out true.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: CNF (conjunctive normal form)
      meaning: A formula written as a list of clauses that must all hold, each clause being an 'or' of variables or their opposites.
      link: https://en.wikipedia.org/wiki/Conjunctive_normal_form
    - term: SAT solver
      meaning: A program that decides satisfiability, often handling millions of variables in practice.
      link: https://en.wikipedia.org/wiki/SAT_solver
    - term: DPLL
      meaning: The classic search algorithm for SAT that guesses values and backtracks on contradictions.
      link: https://en.wikipedia.org/wiki/DPLL_algorithm
    - term: CDCL
      meaning: "Conflict-driven clause learning: DPLL plus learned clauses and jumping back several levels at once."
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
    - term: unit propagation
      meaning: If a rule has only one way left to be satisfied, set that variable accordingly and follow the consequences.
      link: https://en.wikipedia.org/wiki/Unit_propagation
    - term: resolution proof
      meaning: A proof that combines clauses step by step until it derives an obvious contradiction.
      link: https://en.wikipedia.org/wiki/Resolution_(logic)
    - term: NP-complete
      meaning: Among the hardest problems whose answers can be checked quickly; SAT was the first one shown to be so.
      link: https://en.wikipedia.org/wiki/NP-completeness
    - term: formal verification
      meaning: Mathematically proving that a chip or program meets its specification.
      link: /research/formal-hardware-verification
    - term: literal
      meaning: A variable or its negation, such as x or not-x; clauses are built from literals.
      link: https://en.wikipedia.org/wiki/Literal_(mathematical_logic)
    - term: VSIDS
      meaning: A decision heuristic that prefers variables that took part in recent conflicts.
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
    - term: implication graph
      meaning: A record of which variable settings forced which others; the solver analyses it after a conflict to learn a new clause.
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
  readFirst:
    - title: Boolean satisfiability problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
      why: Explains the problem and its role in complexity and practice.
    - title: Conflict-driven clause learning (Wikipedia)
      url: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
      why: A step-by-step account of how modern solvers work.
    - title: DPLL algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/DPLL_algorithm
      why: The simpler ancestor, good for seeing the core idea first.
raw:
  body: "## The problem\n\nBoolean satisfiability (SAT) asks whether a propositional formula, usually given in conjunctive normal form (CNF), has a satisfying assignment. SAT is $\\mathsf{NP}$-complete (Cook, Levin), and no algorithm running in time $(2-\\varepsilon)^{n}$ for some fixed $\\varepsilon>0$ is known for CNF formulas with $n$ variables and unbounded clause width; the Strong Exponential Time Hypothesis conjectures that none exists. Yet solvers routinely decide industrial instances with millions of variables and tens of millions of clauses.\n\n## From DPLL to CDCL\n\nThe Davis–Putnam–Logemann–Loveland procedure (1960–62) searches over partial assignments, applying *unit propagation* (a clause with all but one literal false forces the last one). *Conflict-driven clause learning* (CDCL) adds three ideas. When propagation produces a conflict, the solver analyses the implication graph and derives a new clause, usually at the first unique implication point, that records why the conflict occurred. It then *backjumps* non-chronologically to the level where that clause becomes unit. And the learned clause is kept so the same dead end is not explored again. GRASP (Marques-Silva and Sakallah, 1996) introduced this scheme.\n\nChaff (Moskewicz et al., 2001) made it fast with two-watched-literal propagation, the VSIDS activity heuristic, and restarts. Later solvers added phase saving, learned-clause deletion guided by clause quality (such as literal block distance), and preprocessing and *inprocessing* (variable elimination, subsumption, vivification). Current open-source solvers such as Kissat and CaDiCaL descend from this line; according to the University of Freiburg, Kissat won the SAT Competition 2024.\n\n## Certificates\n\nAn unsatisfiability claim can be checked: a CDCL run is a resolution refutation, and solvers emit proofs in formats such as DRAT that independent, even formally verified, checkers validate. This turned SAT solvers into trustworthy tools for mathematics. Examples include the Boolean Pythagorean triples problem (Heule, Kullmann and Marek 2016; an unsatisfiability proof of almost 200 terabytes, found by *cube-and-conquer* on 800 cores in about two days), the fifth Schur number $S(5)=160$ (Heule 2017), and the empty hexagon number $h(6)=30$ (Heule and Scheucher, 2024), whose SAT encoding was then verified in Lean and whose proof was checked by a formally verified checker (Subercaseaux et al., ITP 2024).\n\n## Where the theory stands\n\nCDCL solvers produce resolution proofs, and resolution has exponential lower bounds, for example on random $k$-CNF and on pigeonhole formulas. So worst-case guarantees cannot be better than resolution's. In the other direction, CDCL with nondeterministic decisions and enough restarts polynomially simulates general resolution (Pipatsrisawat and Darwiche 2011), and with random decisions and many restarts it efficiently refutes formulas with bounded-width resolution refutations (Atserias, Fichte and Thurley 2011); neither result covers the deterministic heuristics used in practice. Atserias and Müller (FOCS 2019; J. ACM 2020) showed that finding a near-shortest resolution refutation is $\\mathsf{NP}$-hard, so resolution is not automatable unless $\\mathsf{P}=\\mathsf{NP}$. Why industrial instances are easy is therefore not explained by proof-complexity results; this is the subject of the open problem on CDCL efficiency.\n\n## Limits and neighbours\n\nLocal search is often better on random satisfiable instances, and quantum algorithms have not been shown to help: Brehm and Weggemans (Quantum, 2026) found that the fault-tolerant speedups of quantum backtracking and Grover search for $k$-SAT largely vanish, even asymptotically, once minimal structure is added to random instances, when compared against the 2023 SAT Competition main-track winner. SAT is also a component of satisfiability modulo theories (SMT), maximum satisfiability and model counting."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Take a very long list of rules, each of the form "at least one of these switches must be on (or off)". Is there a way to set millions of switches so every rule is satisfied? This is the satisfiability problem, SAT. In the worst case it is believed to be extremely hard: it is the standard example in the P versus NP question.

And yet modern SAT solvers routinely settle puzzles with millions of switches. How? They use a method called conflict-driven clause learning. The solver guesses a setting, follows the consequences, and sooner or later hits a contradiction. Instead of just undoing its last guess, it works out why the contradiction happened and writes down a new rule that rules out that whole family of mistakes. It also jumps back several guesses at once and keeps good new rules. Over time it learns the structure of the puzzle.

This makes SAT solvers a quiet workhorse. Chip makers use them to check that designs behave as specified, and software teams use them to check programs. Mathematicians have used them to settle long-standing questions by brute-force-with-cleverness. When a solver says "impossible", it can output a proof that others can check.

The analogy is a detective who, after each wrong lead, writes down a note: "suspect A and suspect B cannot both be right". Nobody fully understands why this works so well in practice.

# Student explanation

**The problem.** _Boolean satisfiability_ (SAT) asks whether a propositional formula, usually in _conjunctive normal form_ (CNF: an AND of clauses, each clause an OR of variables or their negations), has a satisfying assignment. SAT is NP-complete (Cook; Levin). The Strong Exponential Time Hypothesis conjectures that no algorithm beats roughly $2^n$ time for general CNF as clause width grows. Yet solvers decide industrial instances with millions of variables and tens of millions of clauses.

**From DPLL to CDCL.** The Davis–Putnam–Logemann–Loveland procedure (1960s) searches over partial assignments with _unit propagation_: if a clause has all but one literal false, the last must be true. **Conflict-driven clause learning (CDCL)** adds three ideas.

1. On a conflict, analyse the _implication graph_ (which assignments forced which) and derive a new _learned clause_ that records why the conflict occurred, usually at the first unique implication point.
2. _Backjump_ non-chronologically to the decision level where the learned clause becomes unit, rather than undoing only the last decision.
3. Keep the learned clause so the same dead end is not explored again.

GRASP (Marques-Silva and Sakallah, 1996) introduced the scheme. Chaff (2001) made it fast with _two-watched-literal_ propagation, the **VSIDS** heuristic (prefer variables recently involved in conflicts), and _restarts_. Later additions: phase saving, learned-clause deletion by quality, and preprocessing/inprocessing such as variable elimination. Open-source solvers like Kissat and CaDiCaL descend from this line.

**Certificates.** An unsatisfiable answer can be checked: a CDCL run produces a _resolution proof_, a sequence of clauses each following from earlier ones. Solvers can emit these in formats such as DRAT so independent checkers verify the claim. Proofs for large problems can be huge.

**Applications.** Hardware and software verification, planning, scheduling, cryptanalysis, and computer-assisted mathematics (for example, settling bounds on Ramsey-type and colouring problems).

**Theory versus practice.** Resolution lower bounds show some formulas are hard for every CDCL solver. In the other direction, theorists can show CDCL with idealised choices simulates general resolution, but the actual deterministic heuristics (VSIDS, restarts) are poorly understood. Why they work on industrial instances, and what structure they exploit, is a central open question.
