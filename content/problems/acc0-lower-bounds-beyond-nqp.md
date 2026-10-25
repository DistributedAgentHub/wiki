---
type: problem
slug: acc0-lower-bounds-beyond-nqp
title: "Super-polynomial ACC⁰ lower bounds for a language in NP: extending Murray–Williams beyond NQP"
entry: computational-complexity
status: PARTIAL
origin: Williams (2011) NEXP ⊄ ACC⁰; Murray and Williams (STOC 2018) NQP ⊄ ACC⁰
ratings:
  difficulty: 72
  applicationValue: 3
  leverage: 45
workMix:
  theory: 97
  engineering: 0
  compute: 3
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Williams: Nonuniform ACC Circuit Lower Bounds (J. ACM 2014)"
    url: https://doi.org/10.1145/2559903
  - title: "Murray, Williams: Circuit lower bounds for nondeterministic quasi-polytime: an easy witness lemma for NP and NQP (STOC 2018)"
    url: https://doi.org/10.1145/3188745.3188910
  - title: "Chen: New Lower Bounds and Derandomization for ACC, and a Derandomization-centric View on the Algorithmic Method (ECCC TR22-183)"
    url: https://eccc.weizmann.ac.il/report/2022/183/
  - title: "Chen: Non-deterministic Quasi-Polynomial Time is Average-case Hard for ACC Circuits (ECCC TR19-031; FOCS 2019)"
    url: https://eccc.weizmann.ac.il/report/2019/031/
  - title: "Razborov, Rudich: Natural Proofs"
    url: https://doi.org/10.1006/jcss.1997.1494
links:
  - to: p-vs-np
    kind: RELATED
    note: An ACC⁰ lower bound for NP would be a restricted-circuit separation of the P ≠ NP type; Williams’s method is one of the few techniques that evades relativization, natural proofs and algebrization.
  - to: strong-exponential-time-hypothesis
    kind: RELATED
    note: The algorithmic method converts faster-than-exhaustive satisfiability algorithms into lower bounds; SETH says such algorithms do not exist for general CNF, so the method is limited to restricted circuit classes.
timeline:
  - date: 2011-06-08
    title: NEXP ⊄ ACC⁰
    body: Williams proved the first super-polynomial lower bound for ACC⁰ via the algorithmic method.
    source: https://doi.org/10.1145/2559903
  - date: 2018-06-01
    title: NQP ⊄ ACC⁰
    body: Murray and Williams extended the lower bound to quasi-polynomial nondeterministic time (STOC 2018).
    source: https://doi.org/10.1145/3188745.3188910
  - date: 2022-12-19
    title: Derandomisation-centric view and improved NEXP bound
    body: Chen gave a derandomisation-centred proof of NQP ⊄ ACC⁰ and a sub-half-exponential ACC⁰ lower bound for NEXP (ECCC TR22-183, December 2022; day approximate).
    source: https://eccc.weizmann.ac.il/report/2022/183/
explainer:
  oneLine: Show a restricted kind of circuit cannot compute some NP problem, extending a 2018 result across a small gap.
  flow:
    - General circuit lower bounds out of reach
    - Restrict to shallow ACC0 circuits
    - Faster SAT algorithm gives lower bound
    - "Known: huge class NEXP, then NQP"
    - "Open: get down to NP"
  glossary:
    - term: Boolean circuit
      meaning: A network of AND, OR and NOT gates that computes a yes/no function of its inputs.
      link: https://en.wikipedia.org/wiki/Boolean_circuit
    - term: ACC0
      meaning: Circuits of constant depth and polynomial size with AND, OR, NOT and modular-counting gates.
      link: https://en.wikipedia.org/wiki/ACC0
    - term: circuit lower bound
      meaning: A proof that every circuit computing some function must be at least a certain size.
      link: https://en.wikipedia.org/wiki/Circuit_complexity
    - term: NP
      meaning: Problems whose yes answers can be verified quickly given a hint.
      link: https://en.wikipedia.org/wiki/NP-completeness
    - term: NEXP
      meaning: Like NP but allowing exponential time for the checking; much larger than NP.
      link: https://en.wikipedia.org/wiki/NEXPTIME
    - term: NQP
      meaning: "Nondeterministic quasi-polynomial time: running time n to a power of log n; sits between NP and NEXP."
      link: https://en.wikipedia.org/wiki/Quasi-polynomial_time
    - term: time hierarchy theorem
      meaning: More time lets you solve problems you provably could not solve before.
      link: https://en.wikipedia.org/wiki/Time_hierarchy_theorem
    - term: natural proofs barrier
      meaning: A result showing that a broad class of circuit lower-bound arguments would break strong pseudorandom generators.
      link: https://en.wikipedia.org/wiki/Natural_proof
    - term: SAT algorithm
      meaning: A method for deciding if a logical formula or circuit can be made true.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: MOD gate
      meaning: A gate that outputs 1 exactly when the number of its true inputs is (or is not) divisible by a fixed number m.
      link: https://en.wikipedia.org/wiki/ACC0
    - term: quasi-polynomial time
      meaning: "Running time like n to the power of a polylogarithm of n: just above polynomial, far below exponential."
      link: https://en.wikipedia.org/wiki/Quasi-polynomial_time
    - term: easy witness lemma
      meaning: A result saying that if a class has small circuits, its yes-answers have proofs that are themselves describable by small circuits.
      link: https://en.wikipedia.org/wiki/ACC0
  readFirst:
    - title: Circuit complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Circuit_complexity
      why: Defines circuits, size, depth and why lower bounds are hard.
    - title: ACC0 (Wikipedia)
      url: https://en.wikipedia.org/wiki/ACC0
      why: A short entry on the class and Williams's result.
    - title: Complexity Theory's 50-Year Journey to the Limits of Knowledge (Quanta)
      url: https://www.quantamagazine.org/complexity-theorys-50-year-journey-to-the-limits-of-knowledge-20230817/
      why: Places Williams's algorithmic method in the wider story.
site:
  aiReviewed: true
---

$\mathsf{ACC}^0$ is the class of languages decided by constant-depth, polynomial-size circuits with AND, OR, NOT and MOD$_m$ gates for a fixed $m$. Williams (2011) proved $\mathsf{NEXP}\not\subset\mathsf{ACC}^0$, and Murray and Williams (2018) proved $\mathsf{NQP}=\mathsf{NTIME}[n^{\mathrm{polylog}\,n}]\not\subset\mathsf{ACC}^0$. _Prove $\mathsf{NP}\not\subset\mathsf{ACC}^0$_: exhibit a language in $\mathsf{NP}$ that has no polynomial-size $\mathsf{ACC}^0$ circuits. Intermediate targets are classes strictly between $\mathsf{NP}$ and $\mathsf{NQP}$, such as $\mathsf{NTIME}[n^{\log\log n}]$, and $\mathsf{P}^{\mathsf{NP}}$. Both known results use Williams's algorithmic method: a slightly faster-than-exhaustive satisfiability algorithm for $\mathsf{ACC}^0$ circuits implies a lower bound.

# State of the art

**Known.** Williams (CCC 2011; J. ACM 2014, doi:10.1145/2559903) proved $\mathsf{NEXP}\not\subset\mathsf{ACC}^0$, using an algorithm solving ACC⁰-SAT in time $2^{n-n^{\delta}}$ and the nondeterministic time hierarchy. Murray and Williams (STOC 2018) proved $\mathsf{NQP}\not\subset\mathsf{ACC}^0$ by an "easy witness" lemma showing that NQP languages have witnesses that are circuits of small size; Chen (ECCC TR19-031; FOCS 2019) proved that NQP is average-case hard for ACC⁰. Chen (ECCC TR22-183) gave a derandomisation-centred proof of $\mathsf{NQP}\not\subset\mathsf{ACC}^0$, fixed-polynomial ACC⁰ lower bounds for MA-type classes with ACC⁰ verifiers, and improved the ACC⁰ size lower bound for NEXP from sub-third-exponential to sub-half-exponential. Chen, Hirahara and Ren (2024) and Li (2024) proved symmetric-exponential-time lower bounds, which concern a different class, not ACC⁰.

**Barriers and open gap.** No super-polynomial ACC⁰ lower bound is known for any language in NP. Natural-proofs barriers apply to many combinatorial techniques (Razborov–Rudich), and the algorithmic method sidesteps them by being non-natural. The gap between NQP and NP is a quasi-polynomial versus polynomial gap in the nondeterministic time hierarchy, and no technique is known that bridges it. No 2025–2026 result improving the NQP bound was found in arXiv, ECCC or the 2026 OpenAI manuscript list.

# Applications

A lower bound for ACC⁰ in NP would significantly sharpen understanding of the limits of constant-depth circuits with modular counting, which model parallel and algebraic computation. It would give a template for turning faster algorithms into lower bounds for other classes. There is no direct practical application.

# Resolution criteria

A proof, accepted by complexity theorists, that some language in $\mathsf{NP}$ requires super-polynomial-size $\mathsf{ACC}^0$ circuits. The same for a class strictly between $\mathsf{NP}$ and $\mathsf{NQP}$, or for $\mathsf{P}^{\mathsf{NP}}$, is significant partial progress.

# Rating rationale

A sharply stated lower-bound problem that has been stuck at NQP since 2018, with no known path to NP and barriers for general techniques, but progress has been steady (NEXP 2011, NQP 2018, average case 2020). That puts it above research-grade but below the major open problems (P vs NP at 100). Application value is negligible. Leverage is mid-band: it shapes the algorithmic-method programme.

# Work mix rationale

Pure complexity-theoretic proof; no empirical or engineering component.

# Verification

The target is a super-polynomial ACC^0 circuit lower bound for a language in NP, a circuit-complexity theorem that Mathlib cannot currently express. Complexity theorists review the proof, and intermediate classes (for example P^NP) count as partial progress. No formal route exists yet because the circuit classes and the algorithmic-method machinery are not formalised.

# Plain explanation

A circuit is a network of simple logic gates. We want to prove that certain problems need big circuits. Proving this for general circuits is hopelessly out of reach. So researchers study restricted circuits, where there are more tools. One restriction is a circuit that is shallow (a constant number of layers) and has AND, OR, NOT gates plus gates that count modulo a fixed number. These are called ACC0 circuits.

In 2011 Ryan Williams proved that a very large class of problems, called NEXP, cannot be computed by small ACC0 circuits. In 2018 Murray and Williams brought this down to a smaller class named NQP. The open problem is to push it all the way down to NP itself: show that some NP problem needs big ACC0 circuits.

Why is the gap hard? The method works by turning a faster-than-brute-force algorithm into a lower bound. Along the way it uses a theorem that more time lets you solve more problems, and the argument needs some extra room in time to make that theorem bite. Squeezing from NQP to NP means closing a gap between quasi-polynomial and polynomial time. No technique for this is known.

Proving it would sharpen what we know about the limits of shallow circuits, which are a model of parallel and algebraic computation. It would not by itself solve P versus NP, which is about unrestricted circuits.

# Student explanation

**Setting.** $\mathsf{ACC}^0$ is the class of languages decided by constant-depth, polynomial-size circuits with AND, OR, NOT and $\mathrm{MOD}_m$ gates (gates that test divisibility of the number of true inputs by $m$) for a fixed $m$. Williams (2011) proved $\mathsf{NEXP}\not\subset\mathsf{ACC}^0$. Murray and Williams (2018) proved $\mathsf{NQP}=\mathsf{NTIME}[n^{\mathrm{polylog}\,n}]\not\subset\mathsf{ACC}^0$.

**The problem.** Prove $\mathsf{NP}\not\subset\mathsf{ACC}^0$: exhibit a language in NP with no polynomial-size ACC⁰ circuits. Intermediate targets are classes strictly between NP and NQP, such as $\mathsf{NTIME}[n^{\log\log n}]$.

**How the known proofs work: the algorithmic method.** A slightly faster-than-exhaustive satisfiability algorithm for ACC⁰ circuits (time $2^{n-n^{\delta}}$) implies a lower bound. In outline: assume the class has small ACC⁰ circuits; use the fast algorithm to speed up a nondeterministic computation more than the nondeterministic time hierarchy theorem allows; get a contradiction. Murray and Williams added an _easy witness_ lemma showing that languages in NQP have witnesses that are themselves small circuits, tightening the argument from NEXP to NQP.

**Further results.** Chen (2019) proved that NQP is average-case hard for ACC⁰. Chen (2022) gave a proof centred on derandomisation, plus fixed-polynomial lower bounds for MA-type classes with ACC⁰ verifiers and an improved size bound for NEXP. Recent results on symmetric exponential time concern a different class.

**Barriers.** No super-polynomial ACC⁰ lower bound is known for any language in NP. The natural-proofs barrier of Razborov and Rudich blocks many combinatorial techniques; the algorithmic method sidesteps it by being non-natural. The gap from NQP to NP is a quasi-polynomial versus polynomial gap in the nondeterministic time hierarchy, and no known technique bridges it.

**Why it matters.** It would sharpen our understanding of constant-depth circuits with modular counting, which model parallel and algebraic computation, and would give a template for turning faster algorithms into lower bounds for other classes. There is no direct practical use. It relates to P versus NP as a restricted special case and to SETH-style work through the shared theme of 'algorithms imply lower bounds'.
