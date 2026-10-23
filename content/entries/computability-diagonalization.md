---
type: entry
slug: computability-diagonalization
title: Computability, diagonalization and relativization
field: complexity
kind: THEORY
status: MATURE
summary: Turing machines, universality and undecidability; hierarchy theorems by diagonalization; oracles and the relativization, natural-proofs and algebrization barriers that limit what diagonalization can prove.
reliedOn: "The P versus NP problem, ACC⁰ lower bounds beyond NQP and the whole computational-complexity entry rely on these tools: every unconditional class separation known is a diagonalization, and the barrier results say which separations need something more."
references:
  - title: "S. Arora, B. Barak: Computational Complexity: A Modern Approach (Cambridge University Press, 2009)"
    url: https://doi.org/10.1017/CBO9780511804090
    kind: book
  - title: "M. Sipser: Introduction to the Theory of Computation, 3rd ed. (Cengage, 2012; author's book page)"
    url: https://math.mit.edu/~sipser/book.html
    kind: book
  - title: "R. I. Soare: Turing Computability: Theory and Applications (Springer, 2016)"
    url: https://doi.org/10.1007/978-3-642-31933-4
    kind: book
  - title: "A. M. Turing: On Computable Numbers, with an Application to the Entscheidungsproblem (Proc. LMS)"
    url: https://doi.org/10.1112/plms/s2-42.1.230
    kind: paper
  - title: "T. Baker, J. Gill, R. Solovay: Relativizations of the P =? NP Question (SIAM J. Comput. 1975)"
    url: https://doi.org/10.1137/0204037
    kind: paper
  - title: "A. Razborov, S. Rudich: Natural Proofs (JCSS 1997)"
    url: https://doi.org/10.1006/jcss.1997.1494
    kind: paper
  - title: "S. Aaronson, A. Wigderson: Algebrization: A New Barrier in Complexity Theory (ACM TOCT 2009)"
    url: https://doi.org/10.1145/1490270.1490272
    kind: paper
  - title: "R. Williams: Nonuniform ACC Circuit Lower Bounds (J. ACM 2014)"
    url: https://doi.org/10.1145/2559903
    kind: paper
timeline:
  - date: 1965-05-01
    title: Time hierarchy theorem
    body: Hartmanis and Stearns defined time complexity classes and proved by diagonalization that more time decides more languages (Trans. AMS 117, 1965; month approximate).
    source: https://doi.org/10.1090/S0002-9947-1965-0170805-7
  - date: 1975-01-01
    title: Ladner's theorem
    body: Ladner showed that if P ≠ NP there are NP-intermediate languages, via delayed diagonalization (J. ACM, January 1975).
    source: https://doi.org/10.1145/321864.321877
  - date: 1975-12-01
    title: Relativization barrier
    body: Baker, Gill and Solovay gave oracles A, B with P^A = NP^A and P^B ≠ NP^B, so relativizing proofs cannot settle P versus NP.
    source: https://doi.org/10.1137/0204037
  - date: 2009-02-01
    title: Algebrization barrier
    body: Aaronson and Wigderson showed that techniques relativizing with respect to low-degree extensions cannot resolve P versus NP (STOC 2008; ACM TOCT, February 2009).
    source: https://doi.org/10.1145/1490270.1490272
  - date: 2011-06-08
    title: NEXP ⊄ ACC⁰ by diagonalization plus algorithms
    body: Williams combined a faster ACC⁰-SAT algorithm with the nondeterministic time hierarchy (CCC 2011; J. ACM 2014; day approximate, as in the P versus NP entry).
    source: https://doi.org/10.1145/2559903
explainer:
  oneLine: Some questions no program can ever answer, and the same trick shows that more time lets you solve more.
  flow:
    - Programs can be written as data
    - A program can run another program
    - Flip its answer on its own code
    - No program can decide halting
    - Same trick separates time classes
  glossary:
    - term: Turing machine
      meaning: A very simple theoretical computer, a tape and a read-write head following fixed rules, used to define what computing means.
      link: https://en.wikipedia.org/wiki/Turing_machine
    - term: halting problem
      meaning: The question of whether a given program will eventually stop on a given input; no program can answer it for all cases.
      link: https://en.wikipedia.org/wiki/Halting_problem
    - term: diagonalization
      meaning: A proof technique that builds an object differing from every item in a list by changing the diagonal entries of a table.
      link: https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument
    - term: undecidable
      meaning: A yes/no question for which no program is guaranteed to always give the correct answer.
      link: https://en.wikipedia.org/wiki/Undecidable_problem
    - term: universal Turing machine
      meaning: One machine that can simulate any other machine when given its description, like a general-purpose computer.
      link: https://en.wikipedia.org/wiki/Universal_Turing_machine
    - term: Rice's theorem
      meaning: Any nontrivial question about what a program computes (as opposed to how it is written) is undecidable.
      link: https://en.wikipedia.org/wiki/Rice%27s_theorem
    - term: time hierarchy theorem
      meaning: Given noticeably more time, a computer can solve problems it provably could not solve before.
      link: https://en.wikipedia.org/wiki/Time_hierarchy_theorem
    - term: oracle
      meaning: A hypothetical black box that instantly answers questions about some fixed set, used to test which proof methods are robust.
      link: https://en.wikipedia.org/wiki/Oracle_machine
    - term: P versus NP
      meaning: The question of whether every problem whose answer can be checked quickly can also be solved quickly.
      link: https://en.wikipedia.org/wiki/P_versus_NP_problem
    - term: complexity class
      meaning: A set of problems solvable within a given resource budget, such as polynomial time.
      link: https://en.wikipedia.org/wiki/Complexity_class
    - term: reduction
      meaning: A translation of one problem into another, so that solving the second would solve the first; used to spread undecidability or hardness.
      link: https://en.wikipedia.org/wiki/Many-one_reduction
    - term: computably enumerable
      meaning: A set whose members can be listed one by one by some program, even if no program can rule non-members out.
      link: https://en.wikipedia.org/wiki/Computably_enumerable_set
  readFirst:
    - title: Halting problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Halting_problem
      why: Step-by-step version of Turing's proof with intuitive pictures.
    - title: Cantor's diagonal argument (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument
      why: The original table-flipping trick, easier to see than in programs.
    - title: Complexity Theory's 50-Year Journey to the Limits of Knowledge (Quanta)
      url: https://www.quantamagazine.org/complexity-theorys-50-year-journey-to-the-limits-of-knowledge-20230817/
      why: A readable story of the oracle and barrier results and what they mean.
    - title: Time hierarchy theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Time_hierarchy_theorem
      why: The precise statement that more time buys more power.
site:
  published: true
  aiReviewed: true
---

## What it is

A Turing machine $M$ computes a partial function on $\{0,1\}^*$. Machines can be encoded as strings $\langle M\rangle$, and there is a _universal_ machine $U$ with $U(\langle M\rangle,x)=M(x)$ that simulates $t$ steps of a multitape $M$ in $O(t\log t)$ steps (Hennie–Stearns). Universality makes _diagonalization_ possible: if a machine $D$ on input $\langle M\rangle$ runs $U(\langle M\rangle,\langle M\rangle)$ and flips the answer, then $D$ differs from every machine in the enumerated class. Turing (1936) used this to show the halting set $\mathrm{HALT}=\{\langle M,x\rangle : M \text{ halts on } x\}$ is computably enumerable but undecidable.

## Core results

- **Reductions and Rice's theorem.** Many-one reductions $A\le_m B$ transfer undecidability; Rice's theorem says every nontrivial property of the partial function computed by a machine is undecidable. The recursion theorem (Kleene) lets a machine obtain its own description.
- **Hierarchy theorems.** For time-constructible $f,g$ with $f(n)\log f(n)=o(g(n))$, $\mathsf{DTIME}(f)\subsetneq\mathsf{DTIME}(g)$ (Hartmanis–Stearns 1965, sharpened by Hennie–Stearns). For space-constructible $g\ge\log n$ and $f=o(g)$, $\mathsf{DSPACE}(f)\subsetneq\mathsf{DSPACE}(g)$. The nondeterministic time hierarchy (Cook; Seiferas–Fischer–Meyer; Žák) needs _lazy diagonalization_, since a nondeterministic machine cannot cheaply flip a nondeterministic answer. Consequences: $\mathsf{P}\ne\mathsf{EXP}$, $\mathsf{NL}\ne\mathsf{PSPACE}$, $\mathsf{NP}\ne\mathsf{NEXP}$.
- **Ladner's theorem (1975).** If $\mathsf{P}\ne\mathsf{NP}$, there are languages in $\mathsf{NP}\setminus\mathsf{P}$ that are not $\mathsf{NP}$-complete, built by "blowing holes" in SAT through a delayed diagonalization against all polynomial-time machines and reductions.

## Barriers

An _oracle machine_ $M^A$ may query membership in $A$ at unit cost. Almost every diagonalization argument _relativizes_: it remains valid when all machines get the same oracle. Baker, Gill and Solovay (1975) built oracles with $\mathsf{P}^A=\mathsf{NP}^A$ (take $A$ to be $\mathsf{PSPACE}$-complete) and $\mathsf{P}^B\ne\mathsf{NP}^B$, so no relativizing proof settles P versus NP. Two later barriers address the non-relativizing techniques. Razborov and Rudich (JCSS 1997) showed that a circuit lower bound proved via a property that is _constructive_ and _large_ (a "natural" property) against $\mathsf{P/poly}$ would break pseudorandom functions of $2^{n^{\varepsilon}}$ hardness. Aaronson and Wigderson (2009) defined _algebrization_, relativization with access to a low-degree extension $\tilde A$ of the oracle, and showed that arithmetization-based results such as $\mathsf{IP}=\mathsf{PSPACE}$ algebrize while resolving P versus NP, or proving $\mathsf{NEXP}\not\subset\mathsf{P/poly}$, does not.

Williams' algorithmic method (2011) combines diagonalization with algorithms: a $2^{n-n^{\delta}}$-time satisfiability algorithm for $\mathsf{ACC}^0$ circuits, together with the nondeterministic time hierarchy, gives $\mathsf{NEXP}\not\subset\mathsf{ACC}^0$. The argument does not relativize and is not natural, and Murray and Williams (2018) extended it to $\mathsf{NQP}$.

## Techniques to master

Encoding machines and the universal simulation with its overhead; diagonalization, padding (translating separations upward and collapses downward); lazy and delayed diagonalization; oracle constructions by stage-wise diagonalization; the formal statements of each barrier and which known theorems evade which (for example $\mathsf{IP}=\mathsf{PSPACE}$ does not relativize, while $\mathsf{MA_{EXP}}\not\subset\mathsf{P/poly}$ does not relativize but does algebrize).

## Standard references / Reading path

Sipser, _Introduction to the Theory of Computation_ (Cengage, 3rd ed.), Parts 2–3 for computability, reductions and hierarchies; Arora–Barak, _Computational Complexity: A Modern Approach_ (CUP 2009), Chapters 1–3 and 23 for diagonalization, Ladner's theorem, relativization and natural proofs; Soare, _Turing Computability_ (Springer 2016) for the recursion-theoretic side (priority arguments, degrees). Then the original Baker–Gill–Solovay, Razborov–Rudich, Aaronson–Wigderson and Williams papers.

## Where it bites

P versus NP is open in part because every technique known to separate classes relativizes, is natural, or algebrizes. The ACC⁰ problem, a super-polynomial $\mathsf{ACC}^0$ lower bound for a language in $\mathsf{NP}$, asks whether the diagonalization-plus-algorithms method can close the quasi-polynomial gap between $\mathsf{NQP}$ and $\mathsf{NP}$ in the nondeterministic time hierarchy. Both are hosted under the computational-complexity entry.

# Plain explanation

Can a computer, given enough time, answer any question you can state precisely? The surprising answer is no. In 1936 Alan Turing showed there is no program that can look at any other program and always correctly say whether it will eventually stop or run forever. That question is called the halting problem.

The proof uses a trick called diagonalization. Suppose such a checker existed. Build a mischievous program that asks the checker about itself and then does the opposite of whatever the checker predicts. Whatever the checker says, it is wrong. So the checker cannot exist.

The same trick has a second use. It shows that giving a computer more time lets it solve problems it could not solve before. That is how we know some problems can be solved but need exponentially many steps.

The trick also has a limit. Researchers have proved that any argument of this pure kind would also work in imaginary worlds where the answer to the famous P versus NP question goes the other way. So diagonalization alone cannot settle that question.

The analogy: a librarian must write a catalogue listing exactly those catalogues that do not list themselves. Should it list itself? Either answer is wrong. Self-reference breaks it, just as the mischievous program breaks the checker. (The analogy is only a picture; the halting proof is a precise theorem.)

# Student explanation

**Machines as data.** A Turing machine is a simple, precise model of a computer. Its description can be written as a string, so a machine can be given another machine's description as input. A _universal_ machine reads a description and an input and simulates the described machine. Simulation costs only a modest slowdown: a universal machine can simulate $t$ steps with roughly $t\log t$ steps (Hennie and Stearns).

**Diagonalization.** List all machines in a row and all inputs in a column, and write the output of each machine on each input in a table. Build a new machine $D$ that, on input $M$ (a machine's description), runs $M$ on itself and outputs the opposite. $D$ differs from the $M$-th row at the diagonal entry, so $D$ is not in the list. Cantor used the same shape of argument to show that the real numbers cannot be listed.

**Undecidability.** Turing applied this to the halting set: the set of pairs (machine, input) such that the machine halts. It can be listed by running machines (so it is computably enumerable) but no machine decides it. Using _reductions_ (translating one problem into another) one transfers undecidability to many questions. **Rice's theorem** says any nontrivial question about what a program computes, such as "does it ever output 5?", is undecidable.

**Hierarchies.** Diagonalization also separates resource classes. The **time hierarchy theorem** says that if $g$ grows a bit faster than $f$ (by more than a logarithmic factor), then there are problems solvable in time $g$ but not in time $f$. There is a similar theorem for memory (space). Consequences include that P is strictly smaller than EXP (exponential time). The nondeterministic version is harder because a nondeterministic machine cannot cheaply flip its answer, so it needs a delayed form of the argument.

**Ladner's theorem** (1975) says that if P is not equal to NP, then there are problems in NP that are neither easy nor NP-complete, built by delayed diagonalization.

**Barriers.** An _oracle_ is a black box that answers questions about a fixed set for free. Baker, Gill and Solovay (1975) showed there are oracles under which P equals NP and others under which it does not. Since diagonalization arguments typically still work when every machine gets the same oracle, they cannot resolve P versus NP. Related barriers are _natural proofs_ (Razborov and Rudich, 1994) and _algebrization_ (Aaronson and Wigderson, 2008). These explain why new ideas are needed, rather than saying the question is hopeless.
