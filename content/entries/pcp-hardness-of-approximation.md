---
type: entry
slug: pcp-hardness-of-approximation
title: The PCP theorem and hardness of approximation
field: complexity
kind: THEORY
status: ACTIVE
summary: "Probabilistically checkable proofs, label cover, long-code tests and Fourier analysis, the Unique Games Conjecture and the 2-to-2 theorem: the machinery behind optimal NP-hardness of approximation."
reliedOn: The Unique Games Conjecture, NP-hardness of Vertex Cover beyond √2 without UGC, and the quantum PCP conjecture are all stated in this framework; every tight inapproximability ratio for a CSP is proved or conjectured with it.
dependsOn:
  - computational-complexity
  - probabilistic-method
references:
  - title: "S. Arora, C. Lund, R. Motwani, M. Sudan, M. Szegedy: Proof verification and the hardness of approximation problems (J. ACM 1998)"
    url: https://doi.org/10.1145/278298.278306
    kind: paper
  - title: "I. Dinur: The PCP theorem by gap amplification (J. ACM 2007)"
    url: https://doi.org/10.1145/1236457.1236459
    kind: paper
  - title: "J. Håstad: Some optimal inapproximability results (J. ACM 2001)"
    url: https://doi.org/10.1145/502090.502098
    kind: paper
  - title: "R. O'Donnell: Analysis of Boolean Functions (Cambridge University Press 2014; arXiv version)"
    url: https://arxiv.org/abs/2105.10386
    kind: book
  - title: "S. Khot: On the power of unique 2-prover 1-round games (STOC 2002)"
    url: https://doi.org/10.1145/509907.510017
    kind: paper
  - title: "P. Raghavendra: Optimal algorithms and inapproximability results for every CSP? (STOC 2008)"
    url: https://doi.org/10.1145/1374376.1374414
    kind: paper
  - title: "S. Khot, D. Minzer, M. Safra: Pseudorandom sets in Grassmann graph have near-perfect expansion (Annals of Mathematics 198, 2023)"
    url: https://annals.math.princeton.edu/2023/198-1/p01
    kind: paper
  - title: "D. Aharonov, I. Arad, T. Vidick: The Quantum PCP Conjecture (survey)"
    url: https://arxiv.org/abs/1309.7495
    kind: paper
timeline:
  - date: 1998-05-01
    title: PCP theorem published
    body: Arora, Lund, Motwani, Sudan and Szegedy's proof that NP = PCP[O(log n), O(1)] appeared in J. ACM (conference version FOCS 1992).
    source: https://doi.org/10.1145/278298.278306
  - date: 2001-07-01
    title: Optimal inapproximability via long-code tests
    body: Håstad proved tight NP-hardness of Max-3LIN (1/2+ε) and Max-3SAT (7/8+ε) using 3-bit tests analyzed by Fourier methods.
    source: https://doi.org/10.1145/502090.502098
  - date: 2002-05-19
    title: Unique Games Conjecture
    body: Khot formulated UGC and the d-to-1 conjectures at STOC 2002.
    source: https://doi.org/10.1145/509907.510017
  - date: 2007-06-01
    title: Combinatorial proof of the PCP theorem
    body: Dinur's gap-amplification proof replaced the algebraic machinery of the original proof (J. ACM, June 2007).
    source: https://doi.org/10.1145/1236457.1236459
  - date: 2018-01-10
    title: 2-to-2 Games Theorem
    body: Khot, Minzer and Safra completed the proof of the 2-to-2 theorem with imperfect completeness (ECCC TR18-006; Annals of Mathematics 2023), giving √2−ε NP-hardness for Vertex Cover.
    source: https://eccc.weizmann.ac.il/report/2018/006
explainer:
  oneLine: A proof can be checked by peeking at a few random spots, so many problems are hard even to approximate.
  flow:
    - Hard problems resist exact solutions
    - "PCP: check proofs by few random peeks"
    - Errors in a PCP spread widely
    - Even near-optimal answers are hard
    - Games and codes find the exact limits
  glossary:
    - term: NP
      meaning: Problems whose answers can be checked quickly once someone shows you a solution.
      link: https://en.wikipedia.org/wiki/NP-completeness
    - term: probabilistically checkable proof (PCP)
      meaning: A proof written in a special form so a verifier can check it with high confidence by reading only a few random positions.
      link: https://en.wikipedia.org/wiki/Probabilistically_checkable_proof
    - term: approximation algorithm
      meaning: A fast method that does not find the best answer but guarantees one within a stated factor of the best.
      link: https://en.wikipedia.org/wiki/Approximation_algorithm
    - term: hardness of approximation
      meaning: A proof that even getting within some factor of the best answer is as hard as solving the problem exactly.
      link: https://en.wikipedia.org/wiki/Hardness_of_approximation
    - term: NP-hard
      meaning: At least as hard as every problem in NP; a fast method would give a fast method for all of them.
      link: https://en.wikipedia.org/wiki/NP-hardness
    - term: 3-CNF formula
      meaning: A logical formula made of clauses, each an OR of three yes/no variables (or their negations), all of which must hold.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: expander graph
      meaning: "A sparse graph that is nonetheless very well connected: information spreads quickly across it."
      link: https://en.wikipedia.org/wiki/Expander_graph
    - term: Fourier analysis of Boolean functions
      meaning: Writing a function of yes/no inputs as a sum of simple parity patterns, to measure how much each input matters.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
    - term: Unique Games Conjecture
      meaning: A proposed hardness statement about a special game with permutation constraints; if true, it fixes the best approximations for many problems.
      link: https://en.wikipedia.org/wiki/Unique_games_conjecture
    - term: semidefinite programming
      meaning: A powerful kind of optimisation, a generalisation of linear programming, often used to design approximation algorithms.
      link: https://en.wikipedia.org/wiki/Semidefinite_programming
    - term: verifier
      meaning: "The checking procedure in a proof system: it reads the input and parts of the proof, then accepts or rejects."
      link: https://en.wikipedia.org/wiki/Probabilistically_checkable_proof
    - term: completeness and soundness
      meaning: "Completeness: a true statement has a proof the verifier always accepts. Soundness: for a false statement every proof is rejected with good probability."
      link: https://en.wikipedia.org/wiki/Probabilistically_checkable_proof
  readFirst:
    - title: Probabilistically checkable proof (Wikipedia)
      url: https://en.wikipedia.org/wiki/Probabilistically_checkable_proof
      why: A short statement of the theorem and why it matters.
    - title: Hardness of approximation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hardness_of_approximation
      why: Shows how PCP results translate into limits on approximation.
    - title: Unique games conjecture (Wikipedia)
      url: https://en.wikipedia.org/wiki/Unique_games_conjecture
      why: Explains what the main remaining conjecture would settle.
raw:
  body: "## What it is\n\nA verifier $V$ with oracle access to a proof $\\pi$ is a $(r(n),q(n))$-PCP verifier for $L$ if it tosses $r(n)$ random coins, reads $q(n)$ positions of $\\pi$, accepts some $\\pi$ with probability 1 when $x\\in L$ (completeness), and accepts every $\\pi$ with probability at most $1/2$ when $x\\notin L$ (soundness). The **PCP theorem** (Arora–Safra; Arora–Lund–Motwani–Sudan–Szegedy, J. ACM 1998) states\n$$\\mathsf{NP}=\\mathsf{PCP}[O(\\log n),O(1)].$$\nEquivalently, there is $\\varepsilon_0>0$ such that distinguishing satisfiable 3-CNFs from those in which every assignment violates an $\\varepsilon_0$ fraction of clauses is NP-hard: a *gap* version of 3SAT.\n\n## Core machinery\n\n- **Dinur's proof (J. ACM 2007).** Starting from a constraint graph with gap $1/\\mathrm{poly}(n)$, each round (i) makes the graph an expander, (ii) raises it to a constant power $t$, multiplying the unsatisfied fraction by $\\Omega(\\sqrt t)$ (while it is below $1/t$) at the cost of a larger alphabet, and (iii) reduces the alphabet by composing with an assignment tester. $O(\\log n)$ rounds give a constant gap with polynomial blow-up.\n- **Label Cover and parallel repetition.** Label Cover is a bipartite 2-prover game with projection constraints. Raz's parallel repetition theorem gives $\\mathrm{val}(G^{\\otimes k})\\le(1-\\varepsilon^{c})^{\\Omega(k/\\log|\\Sigma|)}$ when $\\mathrm{val}(G)\\le 1-\\varepsilon$, so Label Cover with value 1 versus $\\delta$ is NP-hard for any constant $\\delta$.\n- **Long code and Fourier analysis.** Each label is encoded by its dictator function $f(x)=x_i$ on $\\{-1,1\\}^n$. A test is analyzed by expanding $f=\\sum_S\\hat f(S)\\chi_S$; soundness reduces to showing that functions passing with high probability have a coordinate of large (low-degree) influence. Håstad (J. ACM 2001) used 3-bit linear tests to show, for every $\\varepsilon>0$, that Max-3LIN is NP-hard to approximate within $1/2+\\varepsilon$ and Max-3SAT within $7/8+\\varepsilon$, both optimal.\n\n## Unique games and SDPs\n\nKhot (STOC 2002) conjectured that for every $\\varepsilon,\\delta>0$ there is an alphabet size $q$ such that it is NP-hard to distinguish unique games (constraints are permutations) of value $\\ge1-\\varepsilon$ from value $\\le\\delta$. Under UGC, Vertex Cover is hard within $2-\\varepsilon$ (Khot–Regev) and the Goemans–Williamson constant $\\alpha_{GW}=\\min_{\\theta}\\frac{2}{\\pi}\\frac{\\theta}{1-\\cos\\theta}\\approx0.878$ is optimal for Max-Cut (Khot–Kindler–Mossel–O'Donnell), using the Majority-is-Stablest theorem: a balanced function with small influences has noise stability at most $1-\\frac{2}{\\pi}\\arccos\\rho+o(1)$. Raghavendra (STOC 2008) showed that under UGC, for every CSP, the integrality gap of a basic SDP equals the approximation threshold. Unconditionally, Dinur and Safra (Annals 2005) proved Vertex Cover hard within $1.36$, and the 2-to-2 theorem of Khot, Minzer and Safra (ECCC 2018; Annals 2023), via expansion of pseudorandom sets in the Grassmann graph, gives NP-hardness of unique games with completeness $1/2$ and of Vertex Cover within $\\sqrt2-\\varepsilon$.\n\n## Techniques to master\n\nFourier analysis on the hypercube (Parseval, influences, noise operator $T_\\rho$, hypercontractivity, the invariance principle); composition of PCPs and Label Cover reductions; dictatorship tests and their soundness analysis; SDP relaxations, rounding and integrality-gap instances; small-set expansion on Grassmann and Johnson graphs.\n\n## Standard references / Reading path\n\nArora–Barak (Chapters 11 and 22); O'Donnell, *Analysis of Boolean Functions* (CUP 2014, free online), Chapters 1–2, 7, 9 and 11; then Dinur's paper, Håstad's paper, Khot's 2002 paper and Raghavendra's paper. For the quantum version, the Aharonov–Arad–Vidick survey (2013).\n\n## Where it bites\n\nThe **Unique Games Conjecture** remains the central open problem. An AI-generated manuscript released by OpenAI on 6 October 2026 claims a proof; as of mid-October 2026 it is unrefereed and no expert verification of the full argument has been reported. **Vertex Cover beyond √2**: improving the unconditional factor without UGC needs reductions beyond the 2-to-2 theorem. The **quantum PCP conjecture** asks whether estimating the ground energy of a $k$-local Hamiltonian to within a constant fraction of the number of terms is QMA-hard; NLTS (2022) is proved, but no quantum analogue of gap amplification is known."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Suppose someone hands you a thousand-page proof and says it is correct. Normally you would need to read it all. The PCP theorem says something startling: the proof can be rewritten in a special form so that you only need to look at a few randomly chosen spots to be almost sure it is right. If the proof is wrong, a lot of it must be broken, so a random peek is likely to catch the error.

Why do people care? This fact turns out to answer a different question: how well can we approximate hard problems? Many problems, like packing items or colouring maps with few colours, are hard to solve perfectly. One might hope for a fast method that always gets close. The PCP theorem shows that for many such problems, getting close enough is just as hard as getting it exactly right.

Since then, researchers have found the exact limits of approximation for a long list of problems. The most famous unfinished piece is the Unique Games Conjecture, which would settle many more. An AI-written manuscript claimed a proof in October 2026; experts have not yet checked it, so it remains open.

The analogy: a smoke alarm. A tiny fire in one corner may not set it off. But if the house is built so that any spark fills every room with smoke, one sniff anywhere is enough. The special proof format spreads every error everywhere.

# Student explanation

**PCP verifiers.** A _probabilistically checkable proof_ system for a language $L$ has a randomized verifier. It reads the input, tosses some random coins, reads a few positions of a written proof, and accepts or rejects. If the input is in $L$, some proof is accepted always (completeness). If not, every proof is accepted with probability at most $1/2$ (soundness). The **PCP theorem** (Arora–Safra; Arora–Lund–Motwani–Sudan–Szegedy, 1990s) says every problem in NP has such a verifier using only logarithmically many random bits and reading a constant number of proof positions. In short: $\mathsf{NP}=\mathsf{PCP}[O(\log n),O(1)]$.

**The approximation view.** Equivalent form: there is a constant $\varepsilon_0>0$ such that it is NP-hard to tell whether a 3-CNF formula is fully satisfiable or every assignment violates at least an $\varepsilon_0$ fraction of its clauses. This is a _gap_: the two cases are far apart. Any algorithm that approximates the maximum number of satisfiable clauses within a fine enough factor would tell the cases apart, so no such algorithm exists unless P equals NP. Gap-preserving reductions then carry the hardness to other problems.

**How it is proved (Dinur's route).** Start with a constraint graph with a tiny gap. Repeat for about $\log n$ rounds: make the graph an expander (well-connected), raise it to a constant power (which multiplies the fraction of violated constraints but enlarges the alphabet of allowed values), then shrink the alphabet back by composing with a small verifier. Each round amplifies the gap by a constant factor, and after enough rounds it is constant.

**Tools for optimal results.**

- _Label Cover_ is a two-prover game. _Parallel repetition_ (Raz) shows that playing many copies at once drives the best winning chance down, so one can make the gap as extreme as wanted.
- The _long code_ encodes a value $i$ by the full truth table of the _dictator_ function $f(x)=x_i$ (the function that just reads coordinate $i$), listed over all $\pm1$ input strings $x$. It is hugely redundant, which makes it easy to test. Tests on this code are analysed with Fourier analysis of Boolean functions. This led to Håstad's optimal results, for example that approximating Max-3-Lin (solving linear equations mod 2) better than random guessing is NP-hard.

**Unique Games Conjecture (UGC).** Khot's 2002 conjecture says a certain special Label Cover (where constraints are permutations) is hard to approximate. If true, it would show that simple algorithms (such as semidefinite programming) are best possible for a very broad family of problems. The _2-to-2 Games theorem_ (Khot–Minzer–Safra, with Dinur, Kindler and Safra) proves a weaker related statement, which gives NP-hardness of Vertex Cover within $\sqrt2-\varepsilon$ with no conjecture needed. An AI-generated manuscript released by OpenAI in October 2026 claims a full proof of UGC; it is unrefereed and no expert verification has been reported, so UGC is still treated as open.

The topic is a toolkit: verifier design, gap amplification, games, codes and Fourier analysis, all aimed at pinning down exactly how well hard problems can be approximated.
