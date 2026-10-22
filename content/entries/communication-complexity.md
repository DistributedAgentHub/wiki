---
type: entry
slug: communication-complexity
title: Communication complexity and cell-probe lower bounds
field: complexity
kind: THEORY
status: ACTIVE
summary: "Two-party communication: rectangles, rank, discrepancy, information complexity and lifting; and its use for cell-probe data-structure lower bounds, where static bounds stall near log n."
reliedOn: The log-rank conjecture and the problem of an ω(log n) static cell-probe lower bound at linear space live here; communication bounds also underlie streaming, circuit-depth and proof-complexity lower bounds.
dependsOn:
  - computational-complexity
  - probabilistic-method
references:
  - title: "E. Kushilevitz, N. Nisan: Communication Complexity (Cambridge University Press, 1997)"
    url: https://doi.org/10.1017/CBO9780511574948
    kind: book
  - title: "A. Rao, A. Yehudayoff: Communication Complexity and Applications (Cambridge University Press, 2020)"
    url: https://doi.org/10.1017/9781108671644
    kind: book
  - title: "S. Lovett: Communication is bounded by root of rank"
    url: https://arxiv.org/abs/1306.1877
    kind: paper
  - title: "B. Sudakov, I. Tomon: Matrix discrepancy and the log-rank conjecture"
    url: https://arxiv.org/abs/2311.18524
    kind: paper
  - title: "M. Göös, T. Pitassi, T. Watson: Deterministic Communication vs. Partition Number (SIAM J. Comput. 2018)"
    url: https://doi.org/10.1137/16M1059369
    kind: paper
  - title: "P. B. Miltersen, N. Nisan, S. Safra, A. Wigderson: On Data Structures and Asymmetric Communication Complexity (JCSS 1998)"
    url: https://doi.org/10.1006/jcss.1998.1577
    kind: paper
  - title: "K. G. Larsen, O. Weinstein, H. Yu: Crossing the Logarithmic Barrier for Dynamic Boolean Data Structure Lower Bounds"
    url: https://arxiv.org/abs/1703.03575
    kind: paper
  - title: "Z. Dvir, A. Golovnev, O. Weinstein: Static Data Structure Lower Bounds Imply Rigidity"
    url: https://arxiv.org/abs/1811.02725
    kind: paper
timeline:
  - date: 1979-01-01
    title: Communication complexity defined
    body: Yao introduced the two-party model in 'Some complexity questions related to distributive computing' (STOC 1979; year only).
    source: https://doi.org/10.1145/800135.804414
  - date: 2013-06-08
    title: Root-of-rank upper bound
    body: Lovett proved D(f) = O(√rank · log rank) via discrepancy.
    source: https://arxiv.org/abs/1306.1877
  - date: 2017-03-10
    title: Super-logarithmic dynamic Boolean lower bound
    body: Larsen, Weinstein and Yu proved Ω̃(log^1.5 n) for dynamic range counting over F₂ and related Boolean problems (STOC 2018).
    source: https://arxiv.org/abs/1703.03575
  - date: 2018-11-07
    title: Static lower bounds imply rigidity
    body: Dvir, Golovnev and Weinstein showed that ω(log² n) lower bounds for linear static data structures at space (1+ε)n would give new P^NP rigid matrices.
    source: https://arxiv.org/abs/1811.02725
  - date: 2023-11-30
    title: D(f) = O(√rank)
    body: Sudakov and Tomon removed the logarithmic factor from Lovett's bound using matrix discrepancy.
    source: https://arxiv.org/abs/2311.18524
explainer:
  oneLine: How many bits two people must exchange to compute something together when each holds only part of the data.
  flow:
    - Two people each hold part of the data
    - Count the bits they must exchange
    - Protocols cut the table into rectangles
    - Needing many rectangles forces many bits
    - Talking costs become memory and speed limits
  glossary:
    - term: communication complexity
      meaning: The study of how many bits parties must exchange to compute a function of their combined inputs.
      link: https://en.wikipedia.org/wiki/Communication_complexity
    - term: deterministic vs randomised protocol
      meaning: A deterministic protocol always follows fixed rules; a randomised one may flip coins and is allowed a small chance of error.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: rank of a matrix
      meaning: A number measuring how many independent rows or columns a table of numbers has; low rank means it has simple structure.
      link: https://en.wikipedia.org/wiki/Rank_(linear_algebra)
    - term: log-rank conjecture
      meaning: The conjecture that communication cost is at most a power of the logarithm of the table's rank.
      link: https://en.wikipedia.org/wiki/Log-rank_conjecture
    - term: cell-probe model
      meaning: A model of data structures that counts only how many memory cells a query reads, ignoring other work.
      link: https://en.wikipedia.org/wiki/Cell-probe_model
    - term: data structure
      meaning: A way of organising data in memory so questions about it can be answered quickly.
      link: https://en.wikipedia.org/wiki/Data_structure
    - term: nondeterminism
      meaning: A model in which a helpful guesser supplies hints, and the machine only needs to check them.
      link: https://en.wikipedia.org/wiki/Nondeterministic_algorithm
    - term: lower bound
      meaning: A proof that no method can do a task using fewer than a given amount of some resource.
      link: https://en.wikipedia.org/wiki/Computational_complexity_theory
    - term: set disjointness
      meaning: The task of deciding whether Alice's set and Bob's set share an element; it provably needs about n bits even with randomness.
      link: https://en.wikipedia.org/wiki/Communication_complexity
    - term: lifting theorem
      meaning: A result that turns a lower bound for a simple query model into a lower bound for communication, by composing with a small gadget.
      link: https://en.wikipedia.org/wiki/Communication_complexity
  readFirst:
    - title: Communication complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Communication_complexity
      why: Defines the model and shows the main examples.
    - title: Cell-probe model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cell-probe_model
      why: Introduces how these ideas apply to data structures.
    - title: Log-rank conjecture (Wikipedia)
      url: https://en.wikipedia.org/wiki/Log-rank_conjecture
      why: A short account of the field's best-known open question.
site:
  published: true
  aiReviewed: true
---

## What it is

In Yao's model (1979) Alice holds $x\in X$, Bob $y\in Y$, and they exchange bits to compute $f(x,y)$. $D(f)$ is the deterministic cost, $R_\varepsilon(f)$ the public-coin randomized cost with error $\varepsilon$, $N^1(f)$ the nondeterministic cost. A $c$-bit protocol partitions $X\times Y$ into at most $2^c$ $f$-monochromatic _combinatorial rectangles_ $A\times B$; this one fact drives most lower bounds.

## Core results

- **Fooling sets and rank.** A fooling set of size $s$ gives $D(f)\ge\log_2 s$; and $D(f)\ge\log_2\mathrm{rank}(M_f)$ over $\mathbb R$ (Mehlhorn–Schmidt). EQ and DISJ need $n+1$ bits deterministically.
- **Log-rank conjecture** (Lovász–Saks 1988): $D(f)\le(\log\mathrm{rank}\,M_f)^{O(1)}$. Lovett (2014) proved $D(f)=O(\sqrt{r}\log r)$ for rank $r$, and Sudakov–Tomon (arXiv 2023) $D(f)=O(\sqrt r)$ by finding a monochromatic rectangle of relative size $2^{-O(\sqrt r)}$. The best separation is $D(f)=\tilde\Omega(\log^2 r)$ (Göös–Pitassi–Watson).
- **Discrepancy.** $R_\varepsilon(f)\ge\log_2\frac{1-2\varepsilon}{\mathrm{disc}_\mu(f)}$; for inner product mod 2, $\mathrm{disc}\le2^{-n/2}$, so $R(\mathrm{IP})=\Omega(n)$.
- **Disjointness.** $R(\mathrm{DISJ}_n)=\Theta(n)$ (Kalyanasundaram–Schnitger 1992; Razborov 1992 via a corruption bound). The information-complexity proof (Bar-Yossef–Jayram–Kumar–Sivakumar) uses $\mathrm{IC}_\mu(\pi)=I(\Pi;X\mid Y)+I(\Pi;Y\mid X)$ and a direct sum over coordinates; Braverman–Rao showed information complexity equals amortized communication.
- **Lifting.** For a gadget $g$ such as indexing on $\mathrm{poly}(n)$ bits, $D(f\circ g^n)=\Theta(D^{\mathrm{dt}}(f)\cdot\log n)$ (Raz–McKenzie; Göös–Pitassi–Watson), which turns query lower bounds into communication lower bounds. Göös, Pitassi and Watson used it to separate $D$ from the partition number and to obtain the $\tilde\Omega(\log^2\mathrm{rank})$ log-rank gap.

## Cell-probe lower bounds

A static data structure stores the input in $S$ cells of $w$ bits and answers a query with $t$ probes. Miltersen, Nisan, Safra and Wigderson (JCSS 1998) turned this into an asymmetric protocol in which Alice (the query) sends $\log S$ bits and Bob (the table) $w$ bits per round, so asymmetric communication bounds such as the richness lemma give probe lower bounds. Pătraşcu and Thorup sharpened this with direct-sum arguments and settled predecessor search. _Cell sampling_ (Panigrahy–Talwar–Wieder; Larsen) gives the strongest static bounds: $t=\Omega(\log(m/n)/\log(S/n))$ for problems with $m$ queries, i.e. $\Omega(\log n)$ at linear space for polynomial evaluation (Larsen, FOCS 2012). For dynamic problems the Fredman–Saks chronogram, combined with cell sampling, gives $\Omega((\log n/\log\log n)^2)$ for weighted range counting (Larsen, STOC 2012), and Larsen, Weinstein and Yu (STOC 2018) gave $\tilde\Omega(\log^{1.5}n)$ for Boolean dynamic problems.

## Techniques to master

Rectangle arguments, rank and approximate rank, discrepancy and the corruption/rectangle bound, information-theoretic inequalities (chain rule, Pinsker, direct sums), lifting via the gadget simulation, round elimination, the MNSW reduction, chronograms and cell sampling.

## Standard references / Reading path

Kushilevitz–Nisan, _Communication Complexity_ (CUP 1997) for the classical theory; Rao–Yehudayoff, _Communication Complexity and Applications_ (CUP 2020) for information complexity, lifting and data-structure applications; then Lovett, Sudakov–Tomon, Göös–Pitassi–Watson, Larsen–Weinstein–Yu and Dvir–Golovnev–Weinstein.

## Where it bites

The **log-rank conjecture** has an exponential gap between $O(\sqrt{\mathrm{rank}})$ and $\tilde\Omega(\log^2\mathrm{rank})$. An **ω(log n) static cell-probe lower bound at linear space** is open: cell sampling cannot exceed $\log(m/n)/\log(S/n)$, and Dvir, Golovnev and Weinstein (STOC 2019) showed that a $t\ge\omega(\log^2n)$ bound for linear data structures even at space $(1+\varepsilon)n$ would give $\mathsf{P}^{\mathsf{NP}}$ constructions of rigid matrices beating the state of the art, so the problem is at least as hard as a rigidity question.

# Plain explanation

Alice and Bob each hold a long string of bits. They want to answer a question about both strings together, for example: do your strings match exactly? Neither can see the other's data, and talking costs. The question is the minimum number of bits they must exchange.

This simple setup turns out to be a powerful tool. Checking whether two files are identical can be done with very little talk if you allow randomness (compare short random fingerprints). But another task, deciding whether two sets overlap, needs about as many bits as the sets are long, even with randomness. These facts are proved, not just believed.

Why does it matter outside the puzzle? Because many questions about computers boil down to the same thing: information has to flow from one part of a machine to another. Lower bounds on talking become lower bounds on the memory of streaming programs, on how fast data structures can answer queries, and on the size of circuits.

The analogy is two people planning a dinner over the phone, each knowing only their own diary. The question is not how fast they talk, but how little they need to say.

One open puzzle: when a table describing the question has a simple structure (low rank), is the talking always cheap? Nobody knows.

# Student explanation

**The model.** In Yao's two-party model (1979), Alice holds $x$, Bob holds $y$, and they must compute $f(x,y)$ by sending bits. The cost is the number of bits sent in the worst case. $D(f)$ is the cost with deterministic protocols. $R(f)$ allows shared random coins and a small error probability. $N(f)$ allows nondeterminism (a helpful prover).

**Key structure: rectangles.** Write $f$ as a table (the _communication matrix_) with a row for each $x$ and a column for each $y$. A protocol with $c$ bits of communication cuts the table into at most $2^c$ rectangles (sub-grids $A\times B$) on each of which the answer is constant. Many lower bounds work by showing that no small number of such rectangles can cover the table.

**Standard tools and results.**

- _Fooling sets_ and _rank_: the deterministic cost is at least $\log_2$ of the rank of the matrix. Equality (are $x$ and $y$ equal?) needs $n$ bits deterministically but only $O(\log n)$ with randomness.
- _Discrepancy_: if every rectangle is nearly balanced between 0s and 1s, randomised protocols need many bits. This gives $\Omega(n)$ for the inner product mod 2.
- _Set disjointness_: decide if two subsets of $\{1,\dots,n\}$ share an element. Randomised cost is $\Theta(n)$ (Kalyanasundaram and Schnitger; Razborov, 1992). The information-theoretic proof measures how much information the conversation reveals about the inputs.
- _Lifting theorems_: complicated communication problems can be built from simpler query problems with a gadget, turning lower bounds in the simple model into lower bounds in the communication model.

**Log-rank conjecture** (Lovász–Saks, 1988): deterministic communication is at most a polynomial in $\log(\mathrm{rank})$. The best proven upper bound is about $\sqrt{\mathrm{rank}}$ (Lovett; Sudakov and Tomon). The best known gap in the other direction is about $\log^2$ of the rank.

**Application to data structures.** In the _cell-probe model_ a data structure stores its data in memory cells and counts only how many cells a query reads. Communication arguments give lower bounds on how many probes are needed. For _static_ structures with linear space the best known lower bounds stall at about $\log n$ probes, and no one knows how to prove more for an explicit problem.

The field is a rare place where strong, unconditional lower bounds exist, and it is a source of ideas for others.
