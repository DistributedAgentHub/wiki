---
type: entry
slug: computational-complexity
title: Computational complexity theory
field: complexity
kind: THEORY
status: ACTIVE
summary: The study of how much time, memory and other resources problems need, organised into classes such as P, NP and PSPACE. Its open questions bound what any algorithm can do.
reliedOn: Every claim that a problem is intrinsically hard, from the security assumptions of cryptography to approximation-hardness and fine-grained lower bounds, is stated relative to conjectures about these classes.
dependsOn:
  - computability-diagonalization
  - probabilistic-method
references:
  - title: "Clay Mathematics Institute: P vs NP"
    url: https://www.claymath.org/millennium/p-vs-np/
    kind: docs
  - title: S. Aaronson, P =? NP (survey, 2017)
    url: https://www.scottaaronson.com/papers/pnp.pdf
    kind: paper
  - title: "Baker, Gill, Solovay: Relativizations of the P =? NP Question (SIAM J. Comput. 1975)"
    url: https://doi.org/10.1137/0204037
    kind: paper
  - title: "Razborov, Rudich: Natural Proofs (JCSS 1997; STOC 1994)"
    url: https://doi.org/10.1006/jcss.1997.1494
    kind: paper
  - title: "Aaronson, Wigderson: Algebrization (ACM TOCT 2009; STOC 2008)"
    url: https://doi.org/10.1145/1490270.1490272
    kind: paper
  - title: "R. Williams: Nonuniform ACC Circuit Lower Bounds (JACM 2014)"
    url: https://doi.org/10.1145/2559903
    kind: paper
  - title: R. Williams, Simulating Time With Square-Root Space (2025)
    url: https://arxiv.org/abs/2502.17779
    kind: paper
  - title: J. Cook and I. Mertz, Tree Evaluation is in Space O(log n · log log n) (ECCC TR23-174)
    url: https://eccc.weizmann.ac.il/report/2023/174/
    kind: paper
  - title: Khot, Minzer, Safra, Pseudorandom sets in Grassmann graph have near-perfect expansion (Annals 2023)
    url: https://annals.math.princeton.edu/2023/198-1/p01
    kind: paper
  - title: "Alman, Vassilevska Williams: Truly Subquadratic 3SUM and Truly Subcubic APSP via Triangles in Sparse Lopsided Graphs (preprint, 2026)"
    url: https://arxiv.org/abs/2610.06783
    kind: paper
  - title: "OpenAI math manuscript collection: manuscript map (released 2026-10-06)"
    url: https://github.com/openai/math/blob/main/CONTENTS.md
    kind: code
  - title: S. Aaronson, The Mathocalypse (Shtetl-Optimized, 2026-10-07)
    url: https://scottaaronson.blog/?p=10169
    kind: article
timeline:
  - date: 1971-05-03
    title: "Cook's theorem: SAT is NP-complete"
    body: Stephen Cook's STOC 1971 paper introduced NP-completeness and proved it for satisfiability; Leonid Levin obtained equivalent results independently (published 1973).
    source: https://www.claymath.org/millennium/p-vs-np/
  - date: 1975-12-01
    title: Relativization barrier
    body: Baker, Gill and Solovay constructed oracles relative to which P = NP and others relative to which P ≠ NP, ruling out proof techniques that relativize.
    source: https://doi.org/10.1137/0204037
  - date: 2023-11-15
    title: Tree Evaluation in space O(log n · log log n)
    body: Cook and Mertz posted ECCC TR23-174 (STOC 2024). The result undercuts Tree Evaluation as a candidate for separating L from P, and its technique enabled the 2025 time–space simulation.
    source: https://eccc.weizmann.ac.il/report/2023/174/
  - date: 2025-02-25
    title: Time t in space √(t log t)
    body: Ryan Williams showed that multitape Turing machine time t can be simulated in O(√(t log t)) space, improving the 1975 Hopcroft–Paul–Valiant bound (STOC 2025).
    source: https://arxiv.org/abs/2502.17779
  - date: 2026-10-05
    title: Preprint refutes the 3SUM and APSP hypotheses
    body: Alman and Vassilevska Williams posted truly subquadratic 3SUM and truly subcubic APSP algorithms for polynomially bounded integers; SETH is unaffected. Not yet peer reviewed.
    source: https://arxiv.org/abs/2610.06783
  - date: 2026-10-06
    title: OpenAI releases AI-generated manuscripts, incl. a claimed UGC proof
    body: OpenAI released 719 manuscripts in 372 result families from an internal model, including a claimed proof of the Unique Games Conjecture. P vs NP is not among the claims. Independent expert verification has not been reported as of 2026-10-15.
    source: https://github.com/openai/math/blob/main/CONTENTS.md
explainer:
  oneLine: The study of how much time and memory problems need, sorted into classes like P and NP.
  flow:
    - Count steps as problems grow
    - "P: solved quickly; NP: checked quickly"
    - Thousands of problems are NP-complete
    - Is P equal to NP? Unknown
    - Proof methods hit known barriers
  glossary:
    - term: decision problem
      meaning: A question with a yes or no answer about a given input.
      link: https://en.wikipedia.org/wiki/Decision_problem
    - term: P
      meaning: The class of problems a computer can solve in time that grows polynomially (like n or n²) with the input size.
      link: https://en.wikipedia.org/wiki/P_versus_NP_problem
    - term: NP
      meaning: The class of problems whose yes answers can be verified quickly given a suitable hint.
      link: https://en.wikipedia.org/wiki/NP-completeness
    - term: NP-complete
      meaning: "The hardest problems in NP: a fast method for any one of them would give a fast method for every problem in NP."
      link: https://en.wikipedia.org/wiki/NP-completeness
    - term: Boolean satisfiability (SAT)
      meaning: Deciding whether the true/false variables of a logical formula can be set to make the whole formula true.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: reduction
      meaning: An efficient way of translating one problem into another so that solving the second solves the first.
      link: https://en.wikipedia.org/wiki/Reduction_(complexity)
    - term: complexity class
      meaning: A set of problems that can be solved within some resource budget.
      link: https://en.wikipedia.org/wiki/Complexity_class
    - term: oracle
      meaning: A hypothetical black box that answers certain questions instantly, used to test proof techniques.
      link: https://en.wikipedia.org/wiki/Oracle_machine
    - term: Boolean circuit
      meaning: A network of AND, OR and NOT gates that computes a yes/no function of its inputs.
      link: https://en.wikipedia.org/wiki/Boolean_circuit
    - term: pseudorandom generator
      meaning: A method that stretches a short random seed into a long sequence that looks random to any efficient test.
      link: https://en.wikipedia.org/wiki/Derandomization
    - term: certificate
      meaning: A short piece of evidence, such as a satisfying assignment, that lets a checker confirm a yes answer quickly.
      link: https://en.wikipedia.org/wiki/NP_(complexity)
    - term: polynomial time
      meaning: Running time that grows like a fixed power of the input size, such as n² or n³.
      link: https://en.wikipedia.org/wiki/Time_complexity
  readFirst:
    - title: Complexity Theory's 50-Year Journey to the Limits of Knowledge (Quanta)
      url: https://www.quantamagazine.org/complexity-theorys-50-year-journey-to-the-limits-of-knowledge-20230817/
      why: A friendly history of P versus NP and why it resists attack.
    - title: P versus NP problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/P_versus_NP_problem
      why: Clear statement of the problem, with examples and consequences.
    - title: NP-completeness (Wikipedia)
      url: https://en.wikipedia.org/wiki/NP-completeness
      why: Explains why one hard problem can stand in for thousands.
site:
  published: true
  aiReviewed: true
---

## What is being measured

A _decision problem_ asks a yes/no question about an encoded input $x$. The class $\mathsf{P}$ contains problems solvable by a deterministic algorithm in time polynomial in $|x|$. The class $\mathsf{NP}$ contains problems with short certificates that can be checked in polynomial time: for a satisfiable Boolean formula, a satisfying assignment is such a certificate. Clearly $\mathsf{P}\subseteq\mathsf{NP}$. Whether the inclusion is strict is the P versus NP problem.

Other resources give other classes: $\mathsf{L}$ (logarithmic space), $\mathsf{PSPACE}$ (polynomial space), $\mathsf{BPP}$ (probabilistic polynomial time), and non-uniform classes defined by circuit size, such as $\mathsf{P/poly}$ and $\mathsf{ACC}^0$.

## Reductions and completeness

A problem $A$ _reduces_ to $B$ if an efficient transformation maps instances of $A$ to instances of $B$ with the same answer. Cook (1971) and, independently, Levin (published 1973) showed that Boolean satisfiability is $\mathsf{NP}$-complete: every problem in $\mathsf{NP}$ reduces to it. Karp (1972) showed 21 classical combinatorial problems $\mathsf{NP}$-complete, and thousands of natural problems, from graph colouring to scheduling, have followed, so a polynomial-time algorithm for any one of them would give one for all.

## Why the big questions are hard

Three barrier results explain why standard techniques fail to separate $\mathsf{P}$ from $\mathsf{NP}$. Relativization (Baker, Gill and Solovay, 1975) shows that any argument that survives adding an arbitrary oracle cannot decide the question. Natural proofs (Razborov and Rudich, 1994) show that a broad class of combinatorial circuit-lower-bound arguments would break strong pseudorandom generators. Algebrization (Aaronson and Wigderson, 2008) extends the relativization barrier to arguments using low-degree extensions. The unconditional lower bounds that do exist are weak: for explicit functions in $\mathsf{NP}$ only linear lower bounds on general Boolean circuit size are known. Williams (2011) proved that $\mathsf{NEXP}$ does not have polynomial-size $\mathsf{ACC}^0$ circuits, a separation for a restricted circuit class that sidesteps the natural-proofs barrier by using algorithms as a tool.

## Beyond exact solution

Many practical questions concern approximation. The PCP theorem (Arora and Safra; Arora, Lund, Motwani, Sudan and Szegedy, 1992) shows that for many optimisation problems even approximate answers are $\mathsf{NP}$-hard to find. The Unique Games Conjecture, a stronger hardness assumption, would pin down the best possible approximation ratio for a whole family of problems. _Fine-grained complexity_ asks for exact exponents inside P: for example, whether edit distance needs essentially quadratic time. Its conditional lower bounds rest on hypotheses such as the Strong Exponential Time Hypothesis (SETH), the 3SUM hypothesis and the APSP hypothesis.

## Space versus time

Hopcroft, Paul and Valiant (1975) showed that $t$ steps of a multitape Turing machine can be simulated in space $O(t/\log t)$. In February 2025 Ryan Williams improved this to $O(\sqrt{t\log t})$ space, building on the Cook–Mertz algorithm for Tree Evaluation (ECCC, November 2023; STOC 2024). A consequence is that some problems solvable in linear space need nearly quadratic time on multitape Turing machines: a small step on time versus space, with no direct bearing on P versus NP.

## State in October 2026

P versus NP remains open and no credible claim of a resolution exists. Several developments in the autumn of 2026 have not yet been through peer review:

- **4-to-1 games.** Fei, Minzer and Wang (ECCC TR26-179, 14 September 2026) proved Khot's 4-to-1 Games Conjecture with perfect completeness, a human-written result in hardness of approximation.
- **3SUM and APSP.** Alman and Vassilevska Williams (arXiv, 5 October 2026) gave deterministic algorithms for 3SUM in $O(n^{1.9992})$ time and APSP in $O(n^{2.9995})$ time for polynomially bounded integers, which would refute two of the three central hypotheses of fine-grained complexity. They state that SETH is unaffected, and credit the core algorithm to Anthropic's Claude.
- **AI-generated manuscripts.** On 6 October 2026 OpenAI released a repository of 719 AI-generated manuscripts in 372 result families, including claimed proofs of the Unique Games Conjecture and of $\omega\le 9/4$ for matrix multiplication, some with Lean formalisations. OpenAI states that the results are at different stages of verification; on 7 October it withdrew three manuscripts in another area after a sign error was found. Expert assessment is ongoing (see the individual problem entries).

# Plain explanation

Some puzzles are easy to solve, some are hard, and some have answers that are hard to find but easy to check. A jigsaw is a good example. Putting it together takes effort, but if someone hands you a finished one you can see at a glance that it is right.

Computational complexity is the science of measuring this. It asks how the number of steps a computer needs grows as the problem gets bigger. Problems whose steps grow slowly (like n or n times n) are called tractable. Problems whose steps double with each extra item are hopeless at scale.

The most famous classes are P, the problems a computer can solve quickly, and NP, the problems whose answers can be checked quickly. Every problem in P is in NP. Nobody knows whether they are the same: this is the P versus NP question, one of the biggest open problems in mathematics. Many practical tasks, such as scheduling, packing and routing, belong to a family where a quick method for one would give a quick method for all.

Researchers have also proved why the usual proof techniques fail to settle the question.

The analogy: P is the jigsaws you can finish quickly; NP is the jigsaws where a finished one can at least be checked quickly. The analogy breaks a little: complexity is about how the effort grows as puzzles get bigger, not about one puzzle.

# Student explanation

**What is measured.** A _decision problem_ asks a yes/no question about an input $x$ (for example: does this map have a route visiting every city within a given distance?). The class **P** contains problems a deterministic algorithm solves in time polynomial in the input length. The class **NP** contains problems with short _certificates_ that can be checked in polynomial time. For a logical formula, a satisfying assignment is such a certificate. Clearly $\mathsf{P}\subseteq\mathsf{NP}$, and whether the inclusion is strict is the **P versus NP** problem.

Other resources give other classes. $\mathsf{L}$ is logarithmic memory, $\mathsf{PSPACE}$ is polynomial memory, $\mathsf{BPP}$ is polynomial time with randomness and a small error, and circuit classes such as $\mathsf{ACC}^0$ restrict the structure of the computing network.

**Reductions and completeness.** Problem $A$ _reduces_ to problem $B$ if an efficient translation turns instances of $A$ into instances of $B$ with the same answer. Cook (1971) and Levin showed that Boolean satisfiability (SAT) is **NP-complete**: every problem in NP reduces to it. Karp (1972) showed 21 classic problems NP-complete. Today thousands of natural problems are known to be NP-complete, so a fast method for any one gives a fast method for all.

**Why it is so hard to resolve.** Three barrier results explain why familiar methods fail.

- _Relativization_ (Baker, Gill, Solovay, 1975): there are imaginary worlds (with oracles) where P equals NP and others where it does not. A proof that works in every such world cannot decide the question.
- _Natural proofs_ (Razborov and Rudich, 1994): a broad class of circuit lower-bound arguments would, if they worked, break strong pseudorandom generators.
- _Algebrization_ (Aaronson and Wigderson, 2008): even some algebraic extensions of the oracle idea fail.

**What is known.** Unconditional results are far weaker than the conjecture. For general Boolean circuits, only linear lower bounds on size are known for explicit functions in NP. Williams (2011) proved that a large class (NEXP) does not have polynomial-size $\mathsf{ACC}^0$ circuits, using a link between algorithms and lower bounds.

**Beyond worst case.** Complexity theory also studies randomised algorithms, approximation, average-case hardness and the foundations of cryptography, which assumes some problems are hard on typical inputs.

Most experts believe $\mathsf{P}\ne\mathsf{NP}$, but belief is not proof.
