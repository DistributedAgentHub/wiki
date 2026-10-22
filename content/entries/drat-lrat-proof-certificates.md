---
type: entry
slug: drat-lrat-proof-certificates
title: DRAT and LRAT proof certificates and checkers
field: sat-solving
kind: LIBRARY
status: ACTIVE
summary: Clausal proof formats and checkers (DRAT-trim, verified LRAT checkers) that let anyone verify a SAT solver's UNSAT answer without trusting the solver.
reliedOn: Every computer-assisted proof by SAT (Boolean Pythagorean triples, Schur number five, the empty hexagon) and the certified tracks of SAT competitions rely on these formats; without them an UNSAT answer is only as trustworthy as the solver binary.
dependsOn:
  - computational-complexity
  - sat-solving
references:
  - title: "Wetzler, Heule, Hunt, DRAT-trim: Efficient Checking and Trimming Using Expressive Clausal Proofs (SAT 2014)"
    url: https://doi.org/10.1007/978-3-319-09284-3_31
    kind: paper
  - title: Cruz-Filipe, Heule, Hunt, Kaufmann, Schneider-Kamp, Efficient Certified RAT Verification (CADE 2017)
    url: https://doi.org/10.1007/978-3-319-63046-5_14
    kind: paper
  - title: "Tan, Heule, Myreen, cake_lpr: Verified Propagation Redundancy Checking in CakeML (TACAS 2021)"
    url: https://doi.org/10.1007/978-3-030-72013-1_12
    kind: paper
  - title: Heule, Schur Number Five (arXiv:1711.08076, AAAI 2018)
    url: https://arxiv.org/abs/1711.08076
    kind: paper
  - title: Heule, Kullmann, Marek, Solving and Verifying the boolean Pythagorean Triples problem via Cube-and-Conquer
    url: https://arxiv.org/abs/1605.00723
    kind: paper
  - title: Subercaseaux et al., Formal Verification of the Empty Hexagon Number
    url: https://arxiv.org/abs/2403.17370
    kind: paper
  - title: drat-trim repository
    url: https://github.com/marijnheule/drat-trim
    kind: code
timeline:
  - date: 2014-07-01
    title: DRAT-trim
    body: Wetzler, Heule and Hunt presented DRAT-trim with backward checking and core extraction; month given as the conference month (SAT 2014).
    source: https://doi.org/10.1007/978-3-319-09284-3_31
  - date: 2017-08-01
    title: Verified LRAT checking in ACL2
    body: Cruz-Filipe et al. introduced LRAT-style hints and a checker with a mechanised correctness proof; month given as the conference month (CADE 2017).
    source: https://doi.org/10.1007/978-3-319-63046-5_14
  - date: 2017-11-01
    title: Schur Number Five
    body: Heule showed S(5) = 160 with a proof of about two petabytes, validated by a formally verified checker; month from the arXiv identifier.
    source: https://arxiv.org/abs/1711.08076
  - date: 2021-04-01
    title: cake_lpr
    body: Tan, Heule and Myreen published a CakeML-verified checker for propagation-redundancy proofs; month given as the conference month (TACAS 2021).
    source: https://doi.org/10.1007/978-3-030-72013-1_12
explainer:
  oneLine: Files that let anyone check, with a small program, that a SAT solver's 'impossible' answer is right.
  flow:
    - Solver learns facts while searching
    - Each fact is logged in a proof file
    - Small checker replays the proof
    - Verified checker removes trust in the solver
  glossary:
    - term: SAT solver
      meaning: A program that decides whether a set of true-or-false rules can all be satisfied at once.
      link: /research/sat-solving
    - term: CNF
      meaning: A formula written as an AND of clauses, each clause an OR of variables or their negations.
      link: https://en.wikipedia.org/wiki/Conjunctive_normal_form
    - term: unit propagation
      meaning: "A forced step: if a rule has only one undecided switch left and all others are wrong, that switch must be set the remaining way."
      link: https://en.wikipedia.org/wiki/Unit_propagation
    - term: clause learning
      meaning: Recording a new rule that explains a dead end so the solver never repeats it.
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
    - term: proof certificate
      meaning: A file that lets a separate program verify a claimed answer.
      link: https://en.wikipedia.org/wiki/Formal_verification
    - term: formally verified checker
      meaning: A checker whose own correctness has been proved by a proof assistant such as ACL2 or CakeML.
      link: https://en.wikipedia.org/wiki/Formal_verification
    - term: clause
      meaning: An 'or' of variables or their negations, such as (x1 or not x2); a CNF formula is an 'and' of clauses.
      link: https://en.wikipedia.org/wiki/Clause_(logic)
    - term: RUP and RAT
      meaning: "Two tests that a single proof step is safe: RUP checks it by unit propagation; RAT also allows steps that cannot destroy satisfiability."
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
    - term: DRAT and LRAT
      meaning: File formats for unsatisfiability proofs; LRAT adds hints naming the earlier clauses each step uses, so checking needs no search.
      link: /research/drat-lrat-proof-certificates
    - term: Schur number
      meaning: The largest n such that 1..n can be split into k groups with no x + y = z inside a group.
      link: https://en.wikipedia.org/wiki/Schur_number
  readFirst:
    - title: Conflict-driven clause learning (Wikipedia)
      url: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
      why: Short overview of how the solver produces the facts that go into a proof.
    - title: Heule, Schur Number Five (arXiv)
      url: https://arxiv.org/abs/1711.08076
      why: A readable paper on a two-petabyte proof that was checked by a verified program.
    - title: drat-trim repository
      url: https://github.com/marijnheule/drat-trim
      why: The reference proof checker with documentation of the proof formats.
site:
  published: true
  aiReviewed: true
---

## Why certificates

A SAT solver that answers _satisfiable_ returns an assignment that anyone can check in linear time. An _unsatisfiable_ answer is different: a bug in a solver with millions of lines of heuristics and inprocessing can produce a wrong "no". A **proof certificate** is a file, written by the solver while it runs, that a separate and much simpler program can check. This turns "trust the solver" into "trust a small checker", and the small checker can itself be formally verified.

## DRAT

A DRAT proof (Deletion Resolution Asymmetric Tautology) is a list of clause additions and deletions, ending in the empty clause. Every added clause must be redundant with respect to the formula so far. The basic test is **RUP** (reverse unit propagation): assume the negation of the new clause, run unit propagation on the current clauses, and a conflict must follow. Learned clauses of a CDCL solver are RUP by construction, so a solver emits a DRAT proof by logging each learned clause, at small cost. The **RAT** check is a more general redundancy test that also covers clauses that are not implied, such as those introduced by bounded variable addition or blocked-clause techniques, so modern inprocessing stays loggable. Deletion lines keep the checker's database small.

**DRAT-trim** (Wetzler, Heule and Hunt, SAT 2014) is the reference checker. It checks backwards, so that only the clauses that actually contribute to the empty clause (the _core_) are verified, and it can emit a trimmed proof. Its reference implementation is the `drat-trim` repository.

## LRAT

An LRAT proof adds **hints**: for every added clause, the identifiers of the clauses that its unit propagation uses. The checker then needs no search at all, it only follows the hints. This makes checking fast and, more importantly, simple enough to verify formally. Cruz-Filipe, Heule, Hunt, Kaufmann and Schneider-Kamp (CADE 2017) gave a checker with a machine-checked correctness proof in the ACL2 theorem prover, and Tan, Heule and Myreen (TACAS 2021) built `cake_lpr`, a checker verified in CakeML for a close LRAT-style format. A typical pipeline is: solver writes DRAT, `drat-trim` trims and annotates it into LRAT, a verified checker accepts the LRAT file.

## What it has been used for

- _Schur Number Five_ (Heule, AAAI 2018): S(5) = 160, with a proof of about two petabytes that was validated by a formally verified checker. Reading the formula and proof is the entire trust base.
- _Boolean Pythagorean triples_ (Heule, Kullmann, Marek, SAT 2016) used the same certificate chain on a cube-and-conquer run.
- _The empty hexagon number_ (Subercaseaux et al., ITP 2024) connects a SAT proof to a Lean statement.
- SAT competitions require certificates for results; see the competition entry.

## Limits

Certificates prove only that the CNF formula is unsatisfiable. Whether the formula really encodes the mathematical question is a separate trust step (the _encoding_), which is why papers publish both the generator and the formula. Proof sizes can reach terabytes and petabytes, so checking cost and storage, not only solving cost, bound what can be settled. Extensions for symmetry breaking and for pseudo-Boolean reasoning are active research.

# Plain explanation

A SAT solver answers a yes-or-no question: can all the rules of a huge puzzle be satisfied at once? If the answer is yes, the solver shows a solution and anyone can check it quickly. If the answer is no, it is much harder to trust. The solver is a big program with many clever shortcuts, and a bug could produce a wrong "no".

A proof certificate fixes this. While it works, the solver writes down every new fact it learns, in a form that a separate, much smaller program can recheck step by step. If the small program accepts the file, the "no" is correct. The small program can even be proven correct by a computer, so the trust rests on a tiny piece of code.

Think of a student who not only gives the final answer but hands in all the working. A teacher does not need to be as clever as the student, only careful enough to check each line.

These certificates have been used to settle questions in mathematics where the working filled petabytes of disk, and they are demanded in SAT competitions. They prove the puzzle has no solution, not that the puzzle was written down correctly.

# Student explanation

**What goes wrong without it.** A SAT solver answers whether a logical formula can be made true. You can picture the formula as a Python expression such as `(x1 or not x2) and (x2 or x3) and (not x1 or not x3)`, with thousands to millions of variables. If the solver says _satisfiable_, it prints values for every variable and you can check them by evaluating the expression once. If it says _unsatisfiable_, there is nothing to plug in. Modern solvers are tens of thousands of lines of heuristics, and a single bug can produce a wrong "no". For mathematical results proved by SAT, that is not acceptable.

**The idea.** The solver writes a **proof certificate** while it runs: a log of every new clause (an "or" of variables or their negations) that it learned, ending with the empty clause, which is false by definition. A separate, much simpler checker replays the log. Each step must be easy to verify on its own, much like checking each line of a long derivation in a calculus solution rather than redoing the whole problem.

**How a step is checked (RUP).** To check a learned clause $C$, the checker temporarily assumes that every part of $C$ is false. It then runs _unit propagation_: whenever a clause has all but one part false, the last part is forced to be true. If this chain of forced values reaches a contradiction, $C$ follows from the clauses already accepted. Learned clauses in conflict-driven (CDCL) solvers pass this test by construction, so logging them costs little. The more general RAT test also admits clauses that are not strictly implied but cannot break satisfiability, which covers advanced simplification steps.

**DRAT and LRAT.** A DRAT file lists additions and deletions; the checker drat-trim works backwards from the empty clause and only checks the clauses actually used. An LRAT file also records, for every step, which earlier clauses the propagation used, so the checker does no searching at all. That makes the checker small enough to be proved correct itself: verified LRAT checkers exist in the ACL2 and CakeML theorem provers.

**Example of use.** Heule's 2017 proof that the Schur number S(5) is 160 produced about two petabytes of proof, all checked by a verified checker. The trust then rests on the formula and the short checker, not on the solver.

**Limits.** A certificate proves that this formula has no solution. Whether the formula correctly encodes the mathematical question is a separate step, which is why authors publish the program that generates the formula.
