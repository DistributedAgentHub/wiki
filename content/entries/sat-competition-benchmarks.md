---
type: entry
slug: sat-competition-benchmarks
title: SAT Competition and the Global Benchmark Database
field: sat-solving
kind: LIBRARY
status: ACTIVE
summary: The annual SAT Competition ranks solvers on hundreds of instances with certified answers, and the Global Benchmark Database records instance families and which are still unsolved.
reliedOn: Solver engineering (Kissat, CaDiCaL and their descendants) is steered by competition results and shared instance sets; the unsolved-instance lists define the frontier that new solvers and new proofs are measured against.
dependsOn:
  - drat-lrat-proof-certificates
  - sat-solving
references:
  - title: SAT Competition 2025 (tracks, rules, downloads)
    url: https://satcompetition.github.io/2025/
    kind: docs
  - title: "SAT Competition 2025: track rules"
    url: https://satcompetition.github.io/2025/tracks.html
    kind: docs
  - title: SAT Competition 2026
    url: https://satcompetition.github.io/2026/
    kind: docs
  - title: SAT Competitions and SAT-Races (archive of earlier years)
    url: http://www.satcompetition.org
    kind: docs
  - title: Iser, Jabs, Global Benchmark Database (SAT 2024)
    url: https://doi.org/10.4230/LIPIcs.SAT.2024.18
    kind: paper
  - title: Global Benchmark Database web interface
    url: https://benchmark-database.de/
    kind: docs
  - title: Proceedings of the SAT Competition 2025
    url: https://repositum.tuwien.at/handle/20.500.12708/218424
    kind: docs
timeline:
  - date: 2024-08-01
    title: Global Benchmark Database published
    body: Iser and Jabs presented GBD, a toolset for distributing instances with metadata and result status; month given as the conference month (SAT 2024).
    source: https://doi.org/10.4230/LIPIcs.SAT.2024.18
  - date: 2025-08-15
    title: SAT Competition 2025 results
    body: Results of the Main and Parallel tracks were announced at the SAT Conference; solvers ran on the BenchCloud in Munich.
    source: https://satcompetition.github.io/2025/
explainer:
  oneLine: The yearly contest where SAT solvers race on hundreds of hard puzzles, and the database that records which puzzles are still unsolved.
  flow:
    - Authors submit solvers and puzzles
    - Same machine and time limit for all
    - Answers must come with proofs
    - Winning ideas spread; unsolved puzzles are listed
  glossary:
    - term: SAT Competition
      meaning: A yearly contest in which SAT solvers are run on a shared set of puzzles.
      link: http://www.satcompetition.org
    - term: PAR-2
      meaning: "A score: total runtime where each unsolved puzzle counts as twice the time limit. Lower is better."
      link: https://satcompetition.github.io/2025/tracks.html
    - term: benchmark
      meaning: A fixed test used to compare programs fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: certificate
      meaning: Evidence that a separate program can check, such as a model or a proof.
      link: /research/drat-lrat-proof-certificates
    - term: Global Benchmark Database
      meaning: A service that stores SAT puzzles with notes such as origin and known result.
      link: https://benchmark-database.de/
    - term: SAT solver
      meaning: A program that decides whether a set of true-or-false rules can all be satisfied.
      link: /research/sat-solving
    - term: Boolean formula
      meaning: An expression of True/False variables joined by and, or and not, like a Python boolean expression.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: unsatisfiable
      meaning: No assignment of True/False values makes the formula True; proving this needs a certificate.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: content hash
      meaning: A short fingerprint computed from a file's contents, so identical files get the same identifier.
      link: https://en.wikipedia.org/wiki/Hash_function
    - term: CDCL solver
      meaning: "Conflict-driven clause learning: a SAT solver that learns a new clause from each dead end, used by Kissat and CaDiCaL."
      link: https://en.wikipedia.org/wiki/Conflict-driven_clause_learning
  readFirst:
    - title: SAT Competition 2025
      url: https://satcompetition.github.io/2025/
      why: The rules, tracks and download links of a recent edition.
    - title: Global Benchmark Database
      url: https://benchmark-database.de/
      why: Browse the instances and see which are unknown.
    - title: Boolean satisfiability problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
      why: Background on what a SAT solver is solving.
site:
  published: true
  aiReviewed: true
---

## What it is

The **SAT Competition** is a yearly event, held as a satellite of the SAT Conference, in which solver authors submit programs and the organisers run them on a shared benchmark set under fixed limits. It is the main place where progress in practical SAT solving is measured and where techniques (inprocessing, local search hybrids, parallel cube-and-conquer) become standard.

## Format (2025 edition)

According to the 2025 competition site, there are two tracks.

- **Main Track** (sequential solvers): 300 to 600 benchmark problems, 5000 seconds timeout per instance, up to 30 GB memory, ranked by **PAR-2** (runtime, with twice the timeout charged for every unsolved instance). Solvers must provide certificates for both satisfiable and unsatisfiable answers, checked with one of several proof checkers.
- **Parallel Track**: 1000 seconds wall-clock on one AWS m6i.16xlarge machine (64 virtual cores, 256 GB). Solvers must provide a model for satisfiable answers; the track page does not require proofs for unsatisfiable ones.

Runs in 2025 were hosted on the BenchCloud of the SoSy Lab in Munich, and results were announced at the SAT Conference on 15 August 2025. Proceedings with solver descriptions are published each year. The 2026 edition kept the Main and Parallel tracks, added experimental sub-tracks for AI-generated and AI-tuned solvers and a cloud track, and posted its results on 23 July 2026.

## Benchmarks and the Global Benchmark Database

Instances come from users in academia and industry: hardware and software verification, planning, cryptanalysis, scheduling and combinatorial mathematics. The **Global Benchmark Database (GBD)** by Iser and Jabs (SAT 2024) is a toolset and web service that stores instances together with metadata: a content hash, family, author, the known **result** (`sat`, `unsat` or `unknown`) and the competition track in which each instance appeared (for example `main_2024`). Queries over this metadata let researchers build benchmark sets, compare solvers per family and list instances whose result is still `unknown`.

## Why it matters for verification

An instance whose result is `unknown` is a precise, machine-checkable open problem: a satisfying assignment settles it as `sat`, and a certified proof settles it as `unsat`. Solvers can be compared fairly because the instance, the limits and the checker are fixed. Reference solvers used as baselines include Kissat and CaDiCaL by Armin Biere and colleagues, both open source.

## Limits

Competition results depend on the instance mix and on the time limit; a solver that wins on 5000-second runs may not be the best for industrial users with different structure. Certified answers prove the CNF, not the encoding of the real-world question. The 2025 site does not publish winners on the main page, so rankings must be read from the results slides and proceedings.

# Plain explanation

Every year, people who write SAT solvers send their programs to a competition. The organisers collect hundreds of puzzles from hardware designers, software checkers and mathematicians. Every program gets the same time limit on the same type of computer. The program that solves the most puzzles, and does so fastest, wins.

A solver must also show its work. When it says a puzzle has no solution it must hand in a certificate that a separate checker can verify, so a lucky bug cannot win.

This sounds like sport, but it is how the field makes progress. Ideas that win are copied by everybody the next year, and the winners' source code is open.

There is also a shared database that keeps the puzzles together with notes: where each came from, whether it is known to be solvable, unsolvable, or still unknown. The unknown ones are an honest list of what nobody can do yet. A solver or a proof that settles one of them is a result anyone can check.

The caveat: a winner at five thousand seconds per puzzle is not necessarily the best tool for a company with its own kind of puzzle.

# Student explanation

**Why a competition.** SAT solvers decide whether a Boolean formula, think of a long Python expression of `and`, `or` and `not` over many True/False variables, can be made True. They are used to verify chips and software, plan schedules and settle mathematical questions. Claims like "my solver is faster" mean little unless everyone runs the same problems on the same hardware with the same time limit. The yearly SAT Competition does exactly that.

**How it is scored.** In the 2025 Main Track each solver gets 300 to 600 benchmark problems, at most 5,000 seconds and 30 GB of memory per problem. The ranking metric is **PAR-2**: add up the run times, and charge twice the time limit (10,000 seconds) for each unsolved problem. A small example: two problems, one solved in 100 s and one unsolved, give a PAR-2 total of 100 + 10,000 = 10,100 s. The penalty means that failing hurts more than being slow.

**Answers must be checkable.** For a _satisfiable_ answer the solver prints an assignment of True/False values, which the organisers check by evaluating the formula. For an _unsatisfiable_ answer in the Main Track it must produce a proof certificate (DRAT, LRAT or a similar format) that an independent checker accepts. A bug therefore cannot win by printing "unsatisfiable" quickly. The Parallel Track runs on one 64-core cloud machine for 1,000 seconds and requires models for satisfiable answers. The 2026 edition added experimental sub-tracks for AI-generated and AI-tuned solvers and a cloud track, with results posted on 23 July 2026.

**Where the problems come from.** Users in industry and academia submit formulas from hardware and software verification, planning, cryptanalysis and combinatorics. The **Global Benchmark Database** stores each instance with a content hash (so the same file is recognised under different names), its family, its origin and its known result: `sat`, `unsat` or `unknown`. An instance marked `unknown` is a precise open problem: a satisfying assignment or a checked proof settles it, and either can be verified by a short program.

**Reference solvers.** Kissat and CaDiCaL, by Armin Biere and colleagues, are open-source conflict-driven clause learning solvers that serve as baselines and as the starting point for many entries.

**Limits.** Rankings depend on the mix of problems and the time limit. A solver that wins at 5,000 seconds per problem is not automatically the best choice for a company whose formulas have a different structure, and a certificate proves only the formula, not that it encodes the real-world question correctly.
