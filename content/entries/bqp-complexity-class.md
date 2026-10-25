---
type: entry
slug: bqp-complexity-class
title: BQP and its place among classical complexity classes
field: quantum-complexity
kind: THEORY
status: ACTIVE
summary: BQP is the class of decision problems a quantum computer solves in polynomial time with bounded error; it sits between BPP and PP, and relative to an oracle it lies outside the whole polynomial hierarchy.
reliedOn: "Every claim that quantum computers are faster in principle is a claim about BQP, and its known containments set the limits: nothing in BQP is beyond PSPACE, and NP-complete problems are not expected to be in it."
dependsOn:
  - computational-complexity
  - quantum-algorithms
references:
  - title: Bernstein, Vazirani, Quantum Complexity Theory (SIAM J. Comput. 1997)
    url: https://doi.org/10.1137/S0097539796300921
    kind: paper
  - title: Bennett, Bernstein, Brassard, Vazirani, Strengths and Weaknesses of Quantum Computing (SIAM J. Comput. 1997)
    url: https://arxiv.org/abs/quant-ph/9701001
    kind: paper
  - title: Aaronson, BQP and the Polynomial Hierarchy (STOC 2010)
    url: https://arxiv.org/abs/0910.4698
    kind: paper
  - title: "Aaronson, Ambainis, Forrelation: A Problem that Optimally Separates Quantum from Classical Computing (STOC 2015)"
    url: https://arxiv.org/abs/1411.5729
    kind: paper
  - title: Raz, Tal, Oracle separation of BQP and PH (ECCC TR18-107)
    url: https://eccc.weizmann.ac.il/report/2018/107/
    kind: paper
  - title: Raz, Tal, Oracle separation of BQP and PH (STOC 2019)
    url: https://doi.org/10.1145/3313276.3316315
    kind: paper
  - title: Raz, Tal, Oracle Separation of BQP and PH (J. ACM 2022)
    url: https://doi.org/10.1145/3530258
    kind: paper
  - title: Wu, A stochastic calculus approach to the oracle separation of BQP and PH (2020)
    url: https://arxiv.org/abs/2007.02431
    kind: paper
  - title: Bravyi, Gosset, Grier, Schaeffer, Classical algorithms for Forrelation (2021)
    url: https://arxiv.org/abs/2102.06963
    kind: paper
timeline:
  - date: 1993-05-01
    title: BQP defined
    body: Bernstein and Vazirani introduced quantum complexity theory at STOC 1993 (month only); journal version 1997.
    source: https://doi.org/10.1137/S0097539796300921
  - date: 1997-01-01
    title: NP not in BQP relative to a random oracle
    body: Bennett, Bernstein, Brassard and Vazirani proved the $\Omega(\sqrt N)$ search bound and its oracle consequence.
    source: https://arxiv.org/abs/quant-ph/9701001
  - date: 2009-10-25
    title: BQP versus PH programme
    body: Aaronson gave a relation-problem separation and proposed Forrelation-type decision problems.
    source: https://arxiv.org/abs/0910.4698
  - date: 2018-05-31
    title: Oracle separation of BQP and PH
    body: Raz and Tal posted the oracle separation on ECCC (TR18-107); STOC 2019, J. ACM 2022.
    source: https://eccc.weizmann.ac.il/report/2018/107/
explainer:
  oneLine: The set of problems quantum computers can solve efficiently, and how it compares with what ordinary computers can do.
  flow:
    - Classify problems by resources needed
    - "BQP: quick for quantum computers"
    - Contains P, inside PSPACE
    - Proofs only in black-box settings
    - Oracle puts BQP outside PH
  glossary:
    - term: complexity class
      meaning: A set of problems solvable within a given resource budget.
      link: https://en.wikipedia.org/wiki/Complexity_class
    - term: BQP
      meaning: Problems quantum computers solve in polynomial time with bounded error.
      link: https://en.wikipedia.org/wiki/BQP
    - term: NP
      meaning: Problems whose yes-answers can be checked quickly.
      link: https://en.wikipedia.org/wiki/NP_%28complexity%29
    - term: PSPACE
      meaning: Problems solvable with a polynomial amount of memory.
      link: https://en.wikipedia.org/wiki/PSPACE
    - term: polynomial hierarchy
      meaning: A tower of classes generalising NP with alternating 'exists' and 'for all' questions.
      link: https://en.wikipedia.org/wiki/Polynomial_hierarchy
    - term: oracle
      meaning: A black box an algorithm can query; lower bounds are proved by counting queries.
      link: https://en.wikipedia.org/wiki/Oracle_machine
    - term: P versus NP
      meaning: The open question whether every quickly checkable problem is quickly solvable.
      link: /research/computational-complexity
  readFirst:
    - title: BQP (Wikipedia)
      url: https://en.wikipedia.org/wiki/BQP
      why: Definition and known relations, with a diagram.
    - title: Finally, a Problem That Only Quantum Computers Will Ever Be Able to Solve (Quanta Magazine)
      url: https://www.quantamagazine.org/finally-a-problem-that-only-quantum-computers-will-ever-be-able-to-solve-20180621/
      why: The Raz–Tal result explained for a general reader.
    - title: Polynomial hierarchy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Polynomial_hierarchy
      why: What the hierarchy is.
site:
  published: true
  aiReviewed: true
---

## Definition

**BQP** (bounded-error quantum polynomial time), defined by Bernstein and Vazirani (1993; SIAM J. Comput. 1997), contains the decision problems solved by a uniform family of polynomial-size quantum circuits that accept yes-instances with probability at least $2/3$ and no-instances with probability at most $1/3$. The choice of a finite universal gate set does not matter, since the Solovay–Kitaev theorem converts between gate sets with polylogarithmic overhead.

## Containments

$\mathsf{BPP}\subseteq\mathsf{BQP}\subseteq\mathsf{PP}\subseteq\mathsf{PSPACE}.$

The first inclusion holds because quantum circuits can simulate classical randomness. Bernstein and Vazirani showed $\mathsf{BQP}\subseteq\mathsf{PSPACE}$ by summing amplitudes path by path, and Adleman, DeMarrais and Huang (1997) showed $\mathsf{BQP}\subseteq\mathsf{PP}$. Since $\mathsf{BQP}\subseteq\mathsf{PSPACE}$, an unconditional proof that $\mathsf{BQP}\ne\mathsf{BPP}$ would prove $\mathsf{P}\ne\mathsf{PSPACE}$, which is out of reach; all evidence for quantum speedups is therefore conditional or relative to oracles.

## Oracle results

In the query (oracle) model separations can be proved outright. Simon's problem (1994) separates BQP from BPP relative to an oracle. Bennett, Bernstein, Brassard and Vazirani (1997) showed that relative to a random oracle, NP is not contained in BQP, which is part of why quantum computers are not expected to solve NP-complete problems efficiently. Aaronson (2010) proposed **Forrelation**-type problems to separate BQP from the polynomial hierarchy PH: he gave an oracle _relation_ problem in BQP but not in PH and reduced the decision version to a "generalised Linial–Nisan conjecture". Aaronson and Ambainis (2015) showed Forrelation gives an essentially optimal 1 versus $\tilde\Omega(\sqrt N)$ query separation. Raz and Tal (STOC 2019; J. ACM 2022) then proved an oracle relative to which $\mathsf{BQP}\not\subseteq\mathsf{PH}$, by showing that a Forrelation distribution fools constant-depth classical circuits; Wu (2020) gave a stochastic-calculus proof. Bravyi, Gosset, Grier and Schaeffer (2021) gave an $O(n2^{n/2})$ classical algorithm for Forrelation and corrected an error in an earlier proof of the optimal quantum-to-classical query simulation.

## Complete problems

BQP has no known complete _language_, but promise versions have natural complete problems: simulating local Hamiltonians, approximating the Jones polynomial at certain roots of unity (Aharonov, Jones and Landau, 2006), $k$-fold Forrelation, and the matrix inversion problem of Harrow, Hassidim and Lloyd. Its quantum analogue of NP, **QMA**, has the local Hamiltonian problem as its complete problem (Kitaev), the starting point of the quantum PCP conjecture.

## Why the boundary matters

Practical speedups come from problems believed to be in BQP but not BPP: factoring and discrete logarithms, simulation of quantum systems, and some algebraic problems. Whether BQP reaches beyond PH, and whether quantum computations can be verified classically, are the main structural questions left.

# Plain explanation

Computer scientists sort problems into classes by how much time or memory they need. 'P' holds problems ordinary computers solve quickly. 'NP' holds problems whose answers are quick to check, like a finished Sudoku. BQP holds problems a quantum computer can solve quickly, allowing a small chance of error.

We know BQP contains everything ordinary computers do quickly, and that it sits inside a class of problems solvable with a reasonable amount of memory, so quantum computers cannot do absolutely anything. Factoring big numbers is in BQP but is believed not to be quick for ordinary computers. On the other hand, the hardest puzzles in NP, such as the travelling-salesperson problem, are not expected to be in BQP: quantum computers are not magic search engines.

Proving any of these beliefs is out of reach, because it would also settle famous open questions about ordinary computers. Researchers instead prove results in simplified 'black box' settings. In 2018 Raz and Tal proved that, in such a setting, quantum computers can solve problems beyond an entire tower of classical classes called the polynomial hierarchy.

# Student explanation

**Definitions.** A _decision problem_ asks a yes/no question about an input of $n$ bits. **P**: solvable by a deterministic algorithm in time polynomial in $n$. **BPP**: solvable in polynomial time by a randomised algorithm that is right with probability at least $2/3$ (repeat and take a majority to make errors negligible). **BQP**: the same, but with polynomial-size quantum circuits. **PSPACE**: solvable with polynomial memory, however long it takes.

**Known relations.** $\mathsf{P}\subseteq\mathsf{BPP}\subseteq\mathsf{BQP}\subseteq\mathsf{PP}\subseteq\mathsf{PSPACE}$. The upper bound comes from adding up the contributions of all computational paths one at a time, which needs little memory. Because of this, proving $\mathsf{BQP}\ne\mathsf{BPP}$ outright would also prove $\mathsf{P}\ne\mathsf{PSPACE}$, a famous unsolved problem.

**Oracle results.** An _oracle_ is a black box the algorithm can query. Counting queries makes lower bounds provable. Results include: Grover search needs about $\sqrt N$ queries, so relative to a random oracle NP is not in BQP; Simon's problem separates BQP from BPP; and Raz and Tal (2018) proved that relative to an oracle based on the _Forrelation_ problem (is one Boolean function correlated with the Fourier transform of another?), BQP is not contained in the polynomial hierarchy PH, a tower of classes built on NP.

**Why it matters.** Practical speedups come from problems in BQP believed to be outside BPP: factoring, discrete logarithms and simulating quantum systems. Open questions include whether BQP escapes PH without oracles, and whether a classical computer can check a quantum computer's answers.

**Reading the inclusions.** $\mathsf{BQP}\subseteq\mathsf{PSPACE}$ means a classical computer with modest memory can simulate any quantum computer, but possibly in exponential time. The question is never whether a classical computer can do it at all, only how fast.
