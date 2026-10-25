---
type: problem
slug: unique-games-conjecture
title: "Unique Games Conjecture: NP-hardness of (1−ε) versus δ satisfiability for unique games at fixed alphabet"
entry: pcp-hardness-of-approximation
status: IN_PROGRESS
origin: Subhash Khot, 2002
ratings:
  difficulty: 70
  applicationValue: 16
  leverage: 79
workMix:
  theory: 80
  engineering: 18
  compute: 2
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Khot: On the power of unique 2-prover 1-round games (STOC 2002)"
    url: https://doi.org/10.1145/509907.510017
  - title: "Khot, Kindler, Mossel, O'Donnell: Optimal Inapproximability Results for MAX-CUT and Other 2-Variable CSPs? (SIAM J. Comput. 2007)"
    url: https://doi.org/10.1137/S0097539705447372
  - title: "Raghavendra: Optimal algorithms and inapproximability results for every CSP? (STOC 2008)"
    url: https://doi.org/10.1145/1374376.1374414
  - title: "Arora, Barak, Steurer: Subexponential Algorithms for Unique Games and Related Problems (JACM 2015)"
    url: https://doi.org/10.1145/2775105
  - title: "Dinur, Khot, Kindler, Minzer, Safra: Towards a Proof of the 2-to-1 Games Conjecture? (ECCC TR16-198)"
    url: https://eccc.weizmann.ac.il/report/2016/198/
  - title: "Khot, Minzer, Safra: Pseudorandom sets in Grassmann graph have near-perfect expansion (Annals 2023)"
    url: https://annals.math.princeton.edu/2023/198-1/p01
  - title: "Fei, Minzer, Wang: On the Hardness of 4-to-1 Games with Perfect Completeness (ECCC TR26-179)"
    url: https://eccc.weizmann.ac.il/report/2026/179/
  - title: "Quanta Magazine: As AI Closed In on 'Unique Games' Proof, Researchers Raced to Beat the Machines (2026-10-07)"
    url: https://www.quantamagazine.org/as-ai-closed-in-on-unique-games-proof-researchers-raced-to-beat-the-machines-20261007/
  - title: S. Aaronson, The Mathocalypse (2026-10-07)
    url: https://scottaaronson.blog/?p=10169
  - title: "OpenAI math collection: scope of the Lean formalisation for the Unique Games family (unrefereed)"
    url: https://github.com/openai/math/blob/main/lean/docs/102.md
links:
  - to: p-vs-np
    kind: RELATED
    note: UGC-based hardness results are conditional on P ≠ NP in addition to UGC; UGC itself is a stronger hardness statement about one problem.
  - to: vertex-cover-np-hardness-beyond-sqrt-2
    kind: IMPLIES
    note: By Khot–Regev, UGC gives NP-hardness of approximating Vertex Cover within 2 − ε, so a proof of UGC would make hardness above √2 (indeed up to 2 − ε) hold under P ≠ NP.
timeline:
  - date: 2002-05-19
    title: Khot formulates the conjecture
    body: Subhash Khot introduced the Unique Games Conjecture, together with the d-to-1 games conjectures, at STOC 2002.
    source: https://doi.org/10.1145/509907.510017
  - date: 2018-01-10
    title: 2-to-2 Games Theorem
    body: Khot, Minzer and Safra (ECCC TR18-006, building on work with Dinur and Kindler) completed the proof of the 2-to-2 Games Conjecture with imperfect completeness; published in Annals of Mathematics (2023).
    source: https://annals.math.princeton.edu/2023/198-1/p01
  - date: 2026-09-14
    title: 4-to-1 games with perfect completeness
    body: Fei, Minzer and Wang posted ECCC TR26-179 (revised 8 October 2026); consequences include NP-hardness of k-colouring 3-colourable graphs for every constant k. Not yet refereed.
    source: https://eccc.weizmann.ac.il/report/2026/179/
  - date: 2026-10-06
    title: OpenAI releases a claimed proof of UGC
    body: OpenAI published an AI-generated manuscript (dated 23 September 2026) claiming a proof of the Unique Games Conjecture, with a Lean formalisation. Not independently verified as of 2026-10-15.
    source: https://www.quantamagazine.org/as-ai-closed-in-on-unique-games-proof-researchers-raced-to-beat-the-machines-20261007/
explainer:
  oneLine: A conjecture that a special constraint puzzle is hard even to approximate, which would fix limits for many problems.
  flow:
    - Pairs of neighbours must agree by a rule
    - Almost all rules can be met
    - "Conjecture: finding any good setting is hard"
    - Would fix limits for many problems
    - Related facts proved; full claim unconfirmed
  glossary:
    - term: unique game
      meaning: A constraint puzzle where each link demands a one-to-one match between the choices at its two ends.
      link: https://en.wikipedia.org/wiki/Unique_games_conjecture
    - term: NP-hard
      meaning: At least as hard as every problem in NP; a fast method would give a fast method for all of them.
      link: https://en.wikipedia.org/wiki/NP-hardness
    - term: approximation algorithm
      meaning: A fast method that guarantees an answer within a known factor of the best one.
      link: https://en.wikipedia.org/wiki/Approximation_algorithm
    - term: hardness of approximation
      meaning: A proof that getting within some factor of the best answer is already as hard as solving the problem exactly.
      link: https://en.wikipedia.org/wiki/Hardness_of_approximation
    - term: Max-Cut
      meaning: Splitting the nodes of a network into two groups so as many links as possible cross between the groups.
      link: https://en.wikipedia.org/wiki/Maximum_cut
    - term: vertex cover
      meaning: A set of nodes touching every link of a network; the goal is to find a smallest one.
      link: https://en.wikipedia.org/wiki/Vertex_cover
    - term: semidefinite programming
      meaning: A powerful kind of optimisation that generalises linear programming.
      link: https://en.wikipedia.org/wiki/Semidefinite_programming
    - term: PCP theorem
      meaning: The result that proofs can be checked by reading just a few random spots, which underlies most hardness-of-approximation results.
      link: /research/pcp-hardness-of-approximation
    - term: Fourier analysis of Boolean functions
      meaning: Writing a function of yes/no inputs as a sum of simple parity patterns to study how much each input matters.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
    - term: completeness
      meaning: In a hardness result, the guaranteed quality of the best solution in the "yes" case; here, that almost all constraints can be satisfied.
      link: https://en.wikipedia.org/wiki/Unique_games_conjecture
    - term: permutation
      meaning: A one-to-one rearrangement of a list of options; in a unique game each link has one.
      link: https://en.wikipedia.org/wiki/Permutation
  readFirst:
    - title: Unique games conjecture (Wikipedia)
      url: https://en.wikipedia.org/wiki/Unique_games_conjecture
      why: States the conjecture and lists its consequences.
    - title: Hardness of approximation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hardness_of_approximation
      why: Background on why approximation limits are provable at all.
    - title: Vertex cover (Wikipedia)
      url: https://en.wikipedia.org/wiki/Vertex_cover
      why: The best-known problem whose approximation limit depends on the conjecture.
raw:
  body: "A *unique game* with alphabet $[k]$ is a graph $G=(V,E)$ with, for each edge $(u,v)$, a permutation $\\pi_{uv}$ of $[k]$. An assignment $\\sigma:V\\to[k]$ *satisfies* the edge if $\\pi_{uv}(\\sigma(u))=\\sigma(v)$. Let $\\mathrm{val}(G)$ be the maximum fraction of edges satisfied. The *Unique Games Conjecture* (UGC) states that for every $\\varepsilon,\\delta>0$ there is a $k$ such that it is $\\mathsf{NP}$-hard to distinguish unique games on alphabet $[k]$ with $\\mathrm{val}\\ge 1-\\varepsilon$ from those with $\\mathrm{val}\\le\\delta$. (With $\\mathrm{val}=1$ the problem is easy, so the completeness $1-\\varepsilon$ is essential.) Khot, Kindler, Mossel and O'Donnell showed an equivalent form for systems of two-variable linear equations modulo $k$."
  stateOfArt: "Status as of 2026-10-15: **open, with an unrefereed AI-generated proof under expert scrutiny.**\n\nConditional results: if UGC holds, the Goemans–Williamson algorithm is optimal for Max-Cut (Khot, Kindler, Mossel, O'Donnell, 2004, together with the Majority Is Stablest theorem of Mossel, O'Donnell and Oleszkiewicz, 2005), Vertex Cover cannot be approximated within $2-\\varepsilon$ (Khot and Regev, 2003), and a basic semidefinite program gives the optimal approximation for every constraint satisfaction problem (Raghavendra, 2008). Arora, Barak and Steurer (2010) gave a subexponential-time algorithm for unique games, so the problem is easier than 3-SAT is believed to be, but this does not refute UGC.\n\nUnconditional progress: building on Dinur, Khot, Kindler, Minzer and Safra (2016–17), Khot, Minzer and Safra (ECCC January 2018; *Annals of Mathematics* 2023) proved the 2-to-2 Games Theorem, which implies that it is NP-hard to distinguish unique games of value at least $1/2$ from those of value at most $\\delta$: UGC \"with completeness $1/2$\". On 14 September 2026 Fei, Minzer and Wang (ECCC TR26-179, revised 8 October; not yet refereed) proved the 4-to-1 Games Conjecture with perfect completeness, which with known reductions implies that for every constant $k$ it is NP-hard to properly $k$-colour a 3-colourable graph.\n\nThe claimed proof: on 6 October 2026 OpenAI released, among 719 AI-generated manuscripts, \"The Unique Games Theorem\" (58 pages, dated 23 September 2026). It claims, for every fixed $\\varepsilon,\\delta\\in(0,1/2)$, a deterministic polynomial-time reduction from 3SAT to unique games over a fixed alphabet with completeness at least $1-\\varepsilon$ and soundness at most $\\delta$, which is the conjecture. OpenAI's notes say a Lean formalisation of this gap reduction exists, checked against a separate \"comparator\" statement. Quanta Magazine reported that the manuscript had no human editing or independent expert review. Scott Aaronson wrote on 7 October that \"no human has understood just about any of these proofs yet\"; in the comment thread he reported that Dana Moshkovitz, a PCP specialist, mostly understands the argument and is impressed by its new ideas, which is an informal reaction, not a verification. The same release contains further unrefereed AI-generated claims in this area (perfect completeness for 2-to-1 games; NP-hardness of colouring 3-colourable graphs). As of 15 October 2026 no expert verification of the full UGC argument has been reported."
site:
  aiReviewed: true
---

# Applications

Direct applications are limited: UGC is a statement about hardness, so resolving it adds no new algorithm. Its value is in certifying that known algorithms are optimal: that semidefinite-programming-based approximation ratios for Max-Cut and many constraint satisfaction problems, and the factor 2 for Vertex Cover, cannot be improved unless $\mathsf{P}=\mathsf{NP}$. This tells practitioners when to stop searching for better approximation algorithms.

# Resolution criteria

A proof (or refutation) of UGC in the form above, accepted by the complexity-theory community after scrutiny. A machine-checked proof helps only if experts confirm that its formal statement matches the conjecture and that the formal development has no gaps; an unreviewed AI-generated manuscript does not by itself meet this bar.

# Rating rationale

Difficulty 70, well below SETH (88) and graph isomorphism (74): the 2-to-2 theorem already gives completeness 1/2 and the 4-to-1 result (unrefereed) shows the toolkit is advancing, and an unrefereed, AI-generated 58-page proof with a partial Lean formalisation is under scrutiny; without that claim the number would be near 78. Application value 16: it certifies the optimality of existing approximation algorithms but yields no new ones, the lowest among the complexity hypotheses. Leverage 79: a large body of tight hardness-of-approximation results (Max-Cut, Vertex Cover, all CSPs via Raghavendra) is conditional on it, just below SETH.

# Work mix rationale

The immediate work is expert checking of the claimed proof (theory) and auditing its Lean formalization (engineering). If the claim fails, the remaining gap from 2-to-2 to full completeness is a theory problem.

# Verification

Neither Mathlib nor Formal Conjectures (Formal Conjectures pinned at commit e754a78 (17 October 2026)) states the Unique Games Conjecture. A statement needs label-cover style constraint problems, the (1−ε, δ) gap version and NP-hardness under polynomial-time reductions; the corpus's P/NP definitions (Computability/Complexity.lean) would be a starting point, but nobody has written it. Until then complexity theorists referee proofs, and any Lean development must first have its statement reviewed against the standard formulation.

# Plain explanation

Picture a network of people, where each linked pair is given a one-to-one rule: if you pick option 3, your friend must pick option 7. You choose an option for everyone and try to satisfy as many links as possible. This is a unique game.

If all the rules can be satisfied at once, finding that setting is easy. But suppose only almost all (say 99 percent) can be. The Unique Games Conjecture says that then even finding a setting that satisfies a tiny fraction (say 1 percent) is as hard as the hardest puzzles in NP, once there are enough options.

Subhash Khot proposed it in 2002. If true, it pins down the exact limits of fast approximate methods for a whole family of problems. For instance, a known simple method for splitting a network into two groups to cut as many links as possible (Max-Cut) would be provably the best possible.

It is not settled. Weaker related statements have been proved. A "subexponential" algorithm (slow, but much faster than brute force) is known, so unique games are easier than the hardest NP puzzles are believed to be; that does not disprove the conjecture. In October 2026 an AI lab released a manuscript claiming a proof. Experts are still checking it, so it is an unconfirmed claim.

The analogy is a keystone in an arch: many approximation limits rest on it, but nobody has yet confirmed the keystone is solid.

# Student explanation

**Definition.** A _unique game_ with alphabet $[k]$ is a graph $G=(V,E)$ in which each edge $(u,v)$ carries a permutation $\pi_{uv}$ of $[k]$. An assignment $\sigma:V\to[k]$ satisfies the edge if $\pi_{uv}(\sigma(u))=\sigma(v)$. Let $\mathrm{val}(G)$ be the largest fraction of edges that can be satisfied. The **Unique Games Conjecture (UGC)** (Khot, 2002) says that for every $\varepsilon,\delta>0$ there is an alphabet size $k$ such that it is NP-hard to distinguish games with $\mathrm{val}\ge1-\varepsilon$ from those with $\mathrm{val}\le\delta$. When $\mathrm{val}=1$ exactly the problem is easy, so near-perfect completeness is essential.

**Consequences if true.**

- The Goemans–Williamson semidefinite-programming algorithm is optimal for Max-Cut (Khot, Kindler, Mossel, O'Donnell, with the Majority Is Stablest theorem).
- Vertex Cover cannot be approximated within $2-\varepsilon$ (Khot and Regev).
- A basic semidefinite program gives the best possible approximation for every constraint satisfaction problem (Raghavendra, 2008).

**Partial results.**

- Arora, Barak and Steurer (2010) gave a subexponential-time algorithm for unique games, so UGC problems are easier than 3-SAT is believed to be (this does not refute UGC).
- Building on Dinur, Khot, Kindler, Minzer and Safra, Khot, Minzer and Safra proved the **2-to-2 Games theorem** (2018; _Annals_ 2023). It implies that it is NP-hard to distinguish unique games of value at least $1/2$ from those of value at most $\delta$: UGC with completeness $1/2$ instead of $1-\varepsilon$.
- In September 2026, Fei, Minzer and Wang announced a proof of the 4-to-1 Games conjecture with perfect completeness (not yet refereed).

**Status in 2026.** On 6 October 2026 OpenAI released a long AI-generated manuscript claiming a proof of UGC, which OpenAI says comes with a Lean formalisation of the gap reduction. Quanta reported that the manuscript had no human editing or independent review. Experts were still examining it, and no expert verdict was available at the time of writing. The wiki records UGC as open.

**Why it is hard.** The reduction must turn arbitrary NP problems into unique games with a very strong gap. It cannot aim for perfect completeness, because fully satisfiable unique games are easy (follow the permutations), so it has to work in the subtle near-perfect regime. Standard PCP tools naturally produce many-to-one constraints, not one-to-one permutations. Tools for it include PCP machinery, long codes and Fourier analysis.

**Why it matters.** UGC organises a large part of approximation theory: it says simple algorithms are often the best possible.
