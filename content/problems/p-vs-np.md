---
type: problem
slug: p-vs-np
title: "P versus NP: does Boolean satisfiability have a polynomial-time algorithm?"
entry: computational-complexity
status: OPEN
origin: Stephen Cook (1971) and Leonid Levin (independently, published 1973)
prize: $1M Clay Millennium Prize
ratings:
  difficulty: 100
  applicationValue: 100
  leverage: 100
workMix:
  theory: 97
  engineering: 1
  compute: 2
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Clay Mathematics Institute: P vs NP"
    url: https://www.claymath.org/millennium/p-vs-np/
  - title: S. Aaronson, P =? NP (survey, 2017)
    url: https://www.scottaaronson.com/papers/pnp.pdf
  - title: "Cook: The complexity of theorem-proving procedures (STOC 1971)"
    url: https://doi.org/10.1145/800157.805047
  - title: "Razborov, Rudich: Natural Proofs"
    url: https://doi.org/10.1006/jcss.1997.1494
  - title: "R. Williams: Nonuniform ACC Circuit Lower Bounds"
    url: https://doi.org/10.1145/2559903
  - title: S. Aaronson, The Mathocalypse (2026-10-07; lists what the OpenAI release does and does not claim)
    url: https://scottaaronson.blog/?p=10169
timeline:
  - date: 1971-05-03
    title: The problem is formulated
    body: Cook's STOC 1971 paper introduced NP-completeness and posed the question; Levin obtained equivalent results independently (published 1973).
    source: https://doi.org/10.1145/800157.805047
  - date: 1975-12-01
    title: Relativization barrier
    body: Baker, Gill and Solovay gave oracles under which P = NP and others under which P ≠ NP, so relativizing proofs cannot settle the question.
    source: https://doi.org/10.1137/0204037
  - date: 1994-05-23
    title: Natural proofs barrier
    body: Razborov and Rudich showed that 'natural' circuit-lower-bound arguments would break strong pseudorandom generators (STOC 1994; JCSS 1997; day of the STOC presentation approximate).
    source: https://doi.org/10.1006/jcss.1997.1494
  - date: 2011-06-08
    title: NEXP ⊄ ACC⁰
    body: Ryan Williams proved that NEXP lacks polynomial-size ACC⁰ circuits by turning faster satisfiability algorithms into lower bounds (CCC 2011; JACM 2014; day approximate).
    source: https://doi.org/10.1145/2559903
explainer:
  oneLine: If a solution to a puzzle is easy to check, is it also easy to find? Nobody knows.
  flow:
    - Some puzzles are easy to check
    - Are they also easy to solve?
    - SAT stands for thousands of puzzles
    - No proof; known methods blocked
    - Answer reshapes security and optimisation
  glossary:
    - term: P
      meaning: Problems that a computer can solve in time that grows like a fixed power of the input size.
      link: https://en.wikipedia.org/wiki/P_versus_NP_problem
    - term: NP
      meaning: Problems where a proposed answer can be checked quickly, even if finding one may be slow.
      link: https://en.wikipedia.org/wiki/NP-completeness
    - term: NP-complete
      meaning: "The hardest problems in NP: every other NP problem can be translated into them."
      link: https://en.wikipedia.org/wiki/NP-completeness
    - term: Boolean satisfiability (SAT)
      meaning: Deciding if a logical formula can be made true by choosing true/false values for its variables.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: certificate
      meaning: A short piece of evidence, such as a filled-in Sudoku grid, that lets you verify a yes answer quickly.
      link: https://en.wikipedia.org/wiki/NP-completeness
    - term: reduction
      meaning: An efficient method to turn one problem into another with the same answer.
      link: https://en.wikipedia.org/wiki/Reduction_(complexity)
    - term: oracle
      meaning: A pretend black box that answers certain questions instantly, used to test whether a proof technique is too general.
      link: https://en.wikipedia.org/wiki/Oracle_machine
    - term: Boolean circuit
      meaning: A network of AND, OR and NOT gates computing a yes/no function.
      link: https://en.wikipedia.org/wiki/Boolean_circuit
    - term: computational complexity
      meaning: The study of how many steps or how much memory problems need.
      link: /research/computational-complexity
    - term: pseudorandom generator
      meaning: A method that stretches a short random seed into a long sequence that looks random to efficient tests.
      link: https://en.wikipedia.org/wiki/Derandomization
    - term: polynomial time
      meaning: Running time that grows like a fixed power of the input size, such as n² or n³.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: ACC0
      meaning: "A restricted kind of circuit: constant depth, with AND, OR, NOT and counting-modulo-m gates; one of the few classes with proved lower bounds."
      link: https://en.wikipedia.org/wiki/ACC0
  readFirst:
    - title: Complexity Theory's 50-Year Journey to the Limits of Knowledge (Quanta)
      url: https://www.quantamagazine.org/complexity-theorys-50-year-journey-to-the-limits-of-knowledge-20230817/
      why: The best narrative introduction to P versus NP and why it resists proof.
    - title: P versus NP problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/P_versus_NP_problem
      why: A clear definition with examples and the consequences either way.
    - title: NP-completeness (Wikipedia)
      url: https://en.wikipedia.org/wiki/NP-completeness
      why: Explains why one problem can stand in for thousands.
site:
  aiReviewed: true
---

Is $\mathsf{P}=\mathsf{NP}$? Here $\mathsf{P}$ is the class of languages decidable by a deterministic Turing machine in time polynomial in the input length, and $\mathsf{NP}$ the class of languages $L$ for which there is a polynomial-time verifier $V$ and a polynomial $p$ such that $x\in L\iff\exists w,\ |w|\le p(|x|),\ V(x,w)=1$. Equivalently: can every problem whose solutions are efficiently checkable also be efficiently solved? Since Boolean satisfiability is $\mathsf{NP}$-complete, it suffices to decide whether it has a polynomial-time algorithm.

# State of the art

No proof in either direction. Most experts believe $\mathsf{P}\ne\mathsf{NP}$. Three barriers explain why standard techniques fail: relativization (Baker, Gill, Solovay, 1975), natural proofs (Razborov and Rudich, 1994) and algebrization (Aaronson and Wigderson, 2008). The best unconditional results are far weaker: only linear lower bounds on general Boolean circuit size are known for explicit functions in $\mathsf{NP}$, and Williams (2011) proved that $\mathsf{NEXP}$ does not have polynomial-size $\mathsf{ACC}^0$ circuits. Geometric complexity theory (Mulmuley and Sohoni) proposes an algebraic-geometric route to related lower bounds, but no separation has come from it. Related time–space progress, such as Williams's 2025 simulation of time $t$ in space $O(\sqrt{t\log t})$, concerns $\mathsf{P}$ versus $\mathsf{PSPACE}$-type questions, not P versus NP. P versus NP is not among the claims in the batch of AI-generated manuscripts released by OpenAI on 6 October 2026 (Aaronson: "P≠NP isn't there").

# Applications

If $\mathsf{P}=\mathsf{NP}$ were shown with a practical algorithm, most deployed public-key cryptography would fail, and optimisation, verification, scheduling and machine learning would change at scale; this outcome is considered very unlikely, and a proof of $\mathsf{P}=\mathsf{NP}$ with an impractical algorithm (for example with a huge exponent) would have far less effect. A proof of $\mathsf{P}\ne\mathsf{NP}$ would change no deployed system by itself, since cryptography needs average-case hardness and one-way functions, which $\mathsf{P}\ne\mathsf{NP}$ does not provide. Its value would be in the techniques (new lower-bound methods) and in settling whether the search for efficient exact algorithms for $\mathsf{NP}$-complete problems is futile.

# Resolution criteria

A proof of $\mathsf{P}=\mathsf{NP}$ or $\mathsf{P}\ne\mathsf{NP}$ in the standard formalisation above, accepted by the complexity-theory community after scrutiny. The Clay Institute requires publication in a qualifying outlet, at least two years to have passed since publication, and general acceptance in the mathematics community.

# Rating rationale

The anchor: difficulty, application value and leverage are 100 by definition and no other problem reaches 100 on any scale. It is the central open problem of complexity theory, shielded by three formal barriers (relativization, natural proofs, algebrization); a constructive P = NP would upend deployed cryptography and optimisation, and thousands of results across complexity, cryptography and algorithms are stated conditionally on P ≠ NP or on stronger hypotheses.

# Work mix rationale

Resolution needs proof techniques that do not yet exist; all three known barriers are about methods, not computation. Computer search for small circuits says nothing about asymptotics.

# Verification

Statement: `ComplexityTheory.P_ne_NP : P ≠ NP` in [Millennium/PvsNP.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Millennium/PvsNP.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)). The classes are defined in the corpus file [Computability/Complexity.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjecturesForMathlib/Computability/Complexity.lean) on top of Mathlib's polynomial-time Turing machines (`TM2ComputableInPolyTime`) over bit-string encodings, with NP as languages whose witnesses of polynomial length are checked by a polynomial-time relation (Arora–Barak, Definition 2.1). A resolution in either direction is accepted when a Lean proof of `P_ne_NP` or of its negation compiles against the pinned corpus and passes Comparator with only the three standard axioms; because the machine-level definitions belong to the corpus, a complexity theorist must also confirm that they match the textbook classes. No proof technique is known that avoids relativization, natural proofs and algebrization, so a formal proof is far off, and Clay's own rules (publication and two years of acceptance) still govern the prize.

# Plain explanation

Sudoku is a good example. Solving a hard Sudoku can take a long time. But if a friend hands you a finished grid, checking it takes seconds: just look at each row, column and box. The P versus NP question asks whether this gap is real. Is there always a clever shortcut that makes finding a solution about as easy as checking one?

If the answer is yes (P equals NP), then a huge range of hard-looking tasks would suddenly be easy: scheduling, packing, planning routes, breaking many codes, even finding proofs of mathematical theorems of a reasonable length. If the answer is no, then some tasks are truly hard in a way no algorithm can fix, which most experts expect.

Nobody has a proof either way. It has stood open since the early 1970s, and the Clay Mathematics Institute offers a million dollars for a solution.

Why is it so hard? Researchers have proved that the main proof tools we have cannot settle it. Several well-known approaches would work equally well in imaginary worlds where the answer is the opposite, so they cannot tell the two cases apart. The best proven results about how much computation is needed are far weaker than what the conjecture says.

What we do know is only that most experts bet on "no shortcut", but belief is not a proof.

# Student explanation

**Statement.** $\mathsf{P}$ is the class of yes/no problems a deterministic computer solves in time polynomial in the input length. $\mathsf{NP}$ is the class of problems where a yes answer has a short certificate that can be checked in polynomial time. For example, for a logical formula, a satisfying assignment is a certificate. Clearly $\mathsf{P}\subseteq\mathsf{NP}$. **P versus NP** asks whether they are equal.

**Why one problem is enough.** Boolean satisfiability (SAT) is NP-complete (Cook and Levin, early 1970s): every problem in NP can be translated into it efficiently. So to settle the question it is enough to decide whether SAT has a polynomial-time algorithm. Thousands of natural problems (graph colouring, scheduling, the travelling salesman problem in its decision form) are NP-complete too.

**What is known.** There is no proof either way. Most experts believe $\mathsf{P}\ne\mathsf{NP}$. The best unconditional lower bounds are weak: for explicit functions in NP, only linear lower bounds on the size of general Boolean circuits are known. Williams (2011) proved that a larger class, NEXP, does not have polynomial-size $\mathsf{ACC}^0$ circuits, a restricted circuit model, by turning a slightly faster SAT algorithm into a lower bound.

**Three barriers.** These results explain why standard techniques fail.

- _Relativization_ (Baker, Gill, Solovay, 1975): relative to some oracles P equals NP, and relative to others it does not. A technique that works with any oracle cannot decide the question.
- _Natural proofs_ (Razborov and Rudich, 1994): most combinatorial circuit-lower-bound arguments would, if they worked, break strong pseudorandom generators.
- _Algebrization_ (Aaronson and Wigderson, 2008): extends relativization to algebraic techniques.

**Alternative routes.** Geometric complexity theory (Mulmuley and Sohoni) tries to use algebraic geometry and representation theory, but has not produced a separation yet.

**Consequences.** If $\mathsf{P}=\mathsf{NP}$ with a practically fast algorithm, much of modern public-key cryptography would be insecure, and optimisation would be transformed. If $\mathsf{P}\ne\mathsf{NP}$, we gain a mathematical reason for why some tasks resist every algorithm, and the theory of approximation and cryptography stands on firmer ground.

Because so many results are stated "unless P equals NP", the problem sits underneath much of theoretical computer science. A proof would need a technique that is non-relativizing, non-natural and non-algebrizing, which is why the problem is regarded as extraordinarily hard.
