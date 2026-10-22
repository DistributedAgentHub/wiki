---
type: problem
slug: vertex-cover-np-hardness-beyond-sqrt-2
title: "Vertex Cover: NP-hardness of approximation within a factor above √2, without the Unique Games Conjecture"
entry: pcp-hardness-of-approximation
status: OPEN
origin: Karp (1972) NP-completeness; Dinur–Safra (2002/2005) 1.36 hardness; Khot–Minzer–Safra and the 2-to-2 Games theorem (2017–2018) √2
ratings:
  difficulty: 67
  applicationValue: 6.2
  leverage: 36
workMix:
  theory: 97
  engineering: 0
  compute: 3
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Khot, Minzer, Safra: On independent sets, 2-to-2 games and Grassmann graphs (Theory of Computing 21)"
    url: https://theoryofcomputing.org/articles/v021a010/abstract.txt
  - title: "Khot, Minzer, Safra: Pseudorandom sets in Grassmann graph have near-perfect expansion (ECCC TR18-006)"
    url: https://eccc.weizmann.ac.il/report/2018/006
  - title: "Khot, Minzer, Safra: Pseudorandom sets in Grassmann graph have near-perfect expansion (Annals of Mathematics 198)"
    url: https://annals.math.princeton.edu/2023/198-1/p01
  - title: "Khot, Regev: Vertex cover might be hard to approximate to within 2−ε (JCSS)"
    url: https://www.sciencedirect.com/science/article/pii/S0022000007000864
links:
  - to: shortest-vector-deterministic-np-hardness
    kind: RELATED
    note: Both are hardness-of-approximation questions where PCP-style reductions give constant factors and the optimal threshold is open.
timeline:
  - date: 2016-01-01
    title: Candidate reduction to sqrt(2) hardness proposed
    body: Khot, Minzer and Safra propose a 3-Lin to 2-to-2 Games reduction conditional on a Grassmann hypothesis (preliminary version STOC 2017; year given as first of year).
    source: https://theoryofcomputing.org/articles/v021a010/abstract.txt
  - date: 2018-01-10
    title: 2-to-2 Games theorem (imperfect completeness) proved
    body: The Grassmann-graph expansion result completes the proof, yielding unconditional NP-hardness of sqrt(2) for Vertex Cover.
    source: https://eccc.weizmann.ac.il/report/2018/006
  - date: 2023-01-01
    title: Annals of Mathematics publication
    body: Full proof published in Annals of Mathematics 198(1) (year given as first of year).
    source: https://annals.math.princeton.edu/2023/198-1/p01
explainer:
  oneLine: "Pin down how well a simple covering problem can be approximated: proven hard below 1.41, doable only up to 2."
  flow:
    - Cover every street with few cameras
    - Simple method gets within factor 2
    - "Proven: below 1.41 is NP-hard"
    - Unique Games would make 2 the truth
    - "Open: unconditional hardness above 1.41"
  glossary:
    - term: vertex cover
      meaning: A set of nodes of a network touching every link; the aim is to find the smallest such set.
      link: https://en.wikipedia.org/wiki/Vertex_cover
    - term: approximation ratio
      meaning: How many times larger than the optimum an algorithm's answer can be, in the worst case.
      link: https://en.wikipedia.org/wiki/Approximation_algorithm
    - term: NP-hard
      meaning: At least as hard as every problem in NP.
      link: https://en.wikipedia.org/wiki/NP-hardness
    - term: hardness of approximation
      meaning: A proof that getting within some factor of the optimum is as hard as solving the problem exactly.
      link: https://en.wikipedia.org/wiki/Hardness_of_approximation
    - term: Unique Games Conjecture
      meaning: A conjecture about a special constraint puzzle that, if true, fixes the best approximation for many problems.
      link: /research/pcp-hardness-of-approximation
    - term: 2-to-2 Games theorem
      meaning: A proved statement, weaker than the Unique Games Conjecture, about hardness of a related two-to-two constraint game.
      link: https://en.wikipedia.org/wiki/Unique_games_conjecture
    - term: independent set
      meaning: A set of nodes with no links among them; the complement of a vertex cover.
      link: https://en.wikipedia.org/wiki/Vertex_cover
    - term: PCP theorem
      meaning: The result that proofs can be checked by a few random peeks, the source of most hardness-of-approximation results.
      link: /research/pcp-hardness-of-approximation
    - term: reduction
      meaning: A way to turn instances of one problem into instances of another, so hardness of the first carries over to the second.
      link: https://en.wikipedia.org/wiki/Reduction_(complexity)
    - term: Grassmann graph
      meaning: A network whose nodes are flat subspaces of a vector space, linked when they overlap heavily; its expansion was the key to the 2-to-2 theorem.
      link: https://en.wikipedia.org/wiki/Grassmann_graph
  readFirst:
    - title: Vertex cover (Wikipedia)
      url: https://en.wikipedia.org/wiki/Vertex_cover
      why: Definition, the factor-2 method and what is known about hardness.
    - title: Unique games conjecture (Wikipedia)
      url: https://en.wikipedia.org/wiki/Unique_games_conjecture
      why: The conjecture that would settle the answer at 2.
    - title: Hardness of approximation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hardness_of_approximation
      why: How these hardness results are proved and read.
site:
  aiReviewed: true
---

Minimum Vertex Cover has a simple polynomial-time $2$-approximation, and the best known ratio is $2-\Theta(1/\sqrt{\log n})$ (Karakostas). NP-hardness of approximation is known within every factor $\sqrt2-\varepsilon\approx 1.414$ (from the 2-to-2 Games theorem), improving the earlier $1.3606$ of Dinur–Safra, while hardness of $2-\varepsilon$ is known only under the Unique Games Conjecture (Khot–Regev). **Problem:** prove NP-hardness of approximating Vertex Cover within some constant factor $c>\sqrt2$ (ideally $2-\varepsilon$ for every $\varepsilon>0$), or give a polynomial-time algorithm with a constant approximation ratio $2-\varepsilon$ for some fixed $\varepsilon>0$ (which would refute UGC).

# State of the art

Dinur and Safra (Annals 2005) proved 1.3606-hardness. Khot, Minzer and Safra (STOC 2017; Theory of Computing 21, 2025) gave a reduction producing graphs with an independent set of size (1 − 1/√2)n − o(n) in the YES case and none of size Ω(n) in the NO case, which yields √2 − o(1) hardness for Vertex Cover, conditional on a Grassmann-graph expansion hypothesis. The hypothesis was proved through Dinur–Khot–Kindler–Minzer–Safra (STOC 2018), Barak–Kothari–Steurer (ITCS 2019) and Khot–Minzer–Safra (ECCC TR18-006; Annals of Mathematics 198, 2023), completing the 2-to-2 Games theorem with imperfect completeness and making the √2 − ε hardness unconditional. Under UGC the hardness is 2 − ε (Khot–Regev, JCSS 2008), matching the trivial algorithm; the best algorithm achieves 2 − Θ(1/√log n) (Karakostas). No refereed result in 2024–2026 improves the unconditional factor beyond √2; a few unrefereed preprints claim better algorithms and have not been accepted.

# Applications

Vertex Cover approximation underlies network monitoring, bioinformatics and scheduling formulations; resolving the threshold would settle whether LP/SDP-based 2-approximations are optimal, informing which approximation algorithms are worth engineering.

# Resolution criteria

A proof, accepted by experts, that for some constant c > √2 it is NP-hard to approximate Vertex Cover within factor c; or a polynomial-time algorithm with approximation ratio 2 − ε for a fixed constant ε > 0 (which would refute UGC unless P = NP).

# Rating rationale

Difficulty 67: going beyond √2 unconditionally needs PCP technology between the 2-to-2 theorem and UGC (70), which took a decade and several groups to reach √2; slightly below UGC because a constant above √2, not 2 − ε, suffices, and above planted clique (64). Application value 6.2: it would certify (or overturn) the optimality of the 2-approximation, with little practical change, just above deterministic primes (6). Leverage 36: hardness thresholds for many covering problems run through the same label-cover machinery, but the conditional literature sits on UGC (79), not on this problem.

# Work mix rationale

Needs new PCP and hardness-of-approximation reductions or a new algorithm; computation plays no role beyond small experiments.

# Verification

The result is a proof that approximating Vertex Cover within some constant c > sqrt(2) is NP-hard (without UGC), or a (2 - eps)-approximation, which would refute UGC unless P = NP. PCP-based hardness proofs are not formalised in Mathlib, so experts review the argument.

# Plain explanation

A vertex cover of a network is a set of nodes that touches every link. Think of placing security cameras at intersections so that every street is watched. The goal is to use as few cameras as possible.

Finding the very best set is known to be one of the hardest kinds of puzzle (NP-hard). A simple method gets within a factor of two of the best: pick any street with no camera yet, put cameras at both its ends, and repeat until every street is watched. This never uses more than twice the optimum. Nobody has found a clearly better general method. The slight improvement known is tiny.

How close to the best can any fast method get? It has been proved that getting below about 1.41 times the best is as hard as the hardest puzzles. That figure is the square root of two. Earlier it was about 1.36. If a famous unproven statement called the Unique Games Conjecture is true, then the right answer is exactly two, so the simple method is the best possible.

So the truth lies somewhere between 1.41 and 2. The open problem is to prove, without assuming the Unique Games Conjecture, that the hardness goes beyond 1.41, ideally all the way to 2. Or the opposite: find a fast method that gets below 2 by a constant amount.

This is one of the best-known gaps in the study of approximation.

# Student explanation

**Background.** Minimum Vertex Cover (smallest set of vertices touching every edge) has a simple polynomial-time 2-approximation, and the best known ratio is $2-\Theta(1/\sqrt{\log n})$ (Karakostas). So essentially $2$ is the best algorithm known.

**Hardness known.**

- Dinur and Safra (_Annals_ 2005) proved NP-hardness of approximation within $1.3606$.
- Khot, Minzer and Safra (STOC 2017; _Theory of Computing_ 2025) gave a reduction producing graphs with an independent set of size $(1-1/\sqrt2)n-o(n)$ in the YES case and none of size $\Omega(n)$ in the NO case, which yields $\sqrt2-o(1)$ hardness for Vertex Cover, conditional on a Grassmann-graph expansion hypothesis. That hypothesis was proved through Dinur, Khot, Kindler, Minzer and Safra (2018), Barak, Kothari and Steurer (2019) and Khot, Minzer and Safra (_Annals_ 2023), completing the **2-to-2 Games theorem**. So NP-hardness within every factor $\sqrt2-\varepsilon\approx1.414$ is known.
- Hardness of $2-\varepsilon$ is known only under the **Unique Games Conjecture** (Khot and Regev, 2003).

**The problem.** Prove NP-hardness of approximating Vertex Cover within some constant factor $c>\sqrt2$ (ideally $2-\varepsilon$ for every $\varepsilon>0$), or give a polynomial-time algorithm with ratio $2-\varepsilon$ for some fixed $\varepsilon>0$ (which would refute UGC).

**Why $\sqrt2$?** The 2-to-2 Games theorem is a weaker cousin of the Unique Games Conjecture: it has the form of a game in which each constraint is two-to-two instead of one-to-one. Reductions from 2-to-2 games, via a graph built from the Grassmann structure, yield exactly the $\sqrt2$ barrier. Going further seems to require either strengthening the game being reduced from (towards unique games) or finding a new gadget.

**Why it matters.** Vertex Cover is the simplest of the classic problems whose approximation threshold is not settled. Resolving it beyond $\sqrt2$ unconditionally would be a major advance in the PCP-based approach to hardness of approximation, and an algorithm below 2 would refute the Unique Games Conjecture.

**Status note.** No refereed result in 2024–2026 improves the unconditional factor beyond $\sqrt2$; a few unrefereed preprints claiming better algorithms have not been accepted.
