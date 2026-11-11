---
type: problem
slug: alon-kim-chromatic-index-conjecture
title: "The Alon–Kim conjecture: t-simple k-uniform hypergraphs have chromatic index at most (t − 1 + 1/t + ε)Δ"
entry: hypergraph-edge-colouring
status: OPEN
origin: Noga Alon and Jeong Han Kim, 1997
ratings:
  difficulty: 25
  applicationValue: 6
  leverage: 25
verification:
  route: REVIEW
sources:
  - title: "Qiao, Lu, Song: The Proof of the Alon–Kim Conjecture (arXiv:2611.13698, 10 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.13698
  - title: "Qiao, Lu, Song: full text (statement of the conjecture, Theorem 1.5, proof overview, bibliography)"
    url: https://arxiv.org/pdf/2611.13698
  - title: "Frederickson, Hao, Kelly: Improved bounds for the chromatic index of k-uniform hypergraphs (arXiv:2607.03573, 2026)"
    url: https://arxiv.org/abs/2607.03573
  - title: "Kang, Kelly, Kühn, Methuku, Osthus: Graph and hypergraph colouring via nibble methods: A survey (arXiv:2106.13733)"
    url: https://arxiv.org/abs/2106.13733
  - title: "Alon, Kim: A note on the degree, size and chromatic index of a uniform hypergraph (authors' copy; J. Combin. Theory Ser. A 77, 1997), Conjecture 1.1 and Theorem 1.2"
    url: https://web.math.princeton.edu/~nalon/PDFS/akim2.pdf
timeline:
  - date: 1989-01-01
    title: Pippenger–Spencer theorem
    body: Nearly Δ colours for uniform hypergraphs with small pair-degrees and near-regular degrees (as stated in the Qiao–Lu–Song introduction). Date is the first of January of the year.
    source: https://arxiv.org/pdf/2611.13698
  - date: 1996-01-01
    title: "Kahn: list edge-colouring, no degree condition"
    body: Kahn extends the theorem to list colouring and drops the lower bound on vertex degrees, which gives the case t = 1 of the conjecture (as stated in the Qiao–Lu–Song introduction). Date is the first of January of the year.
    source: https://arxiv.org/pdf/2611.13698
  - date: 1997-01-01
    title: Alon and Kim state the conjecture
    body: In J. Combin. Theory Ser. A 77, Alon and Kim prove the edge-count bound $(t-1+1/t)\Delta$ for intersecting t-simple k-uniform hypergraphs and conjecture the matching chromatic index bound (as stated in the Qiao–Lu–Song introduction). Date is the first of January of the year.
    source: https://arxiv.org/pdf/2611.13698
  - date: 2026-07-03
    title: "Frederickson–Hao–Kelly: improved general bounds"
    body: They prove about $2.3581\Delta$ for 3-uniform 2-simple and $2.6791\Delta$ for 3-uniform 3-simple hypergraphs with large maximum degree.
    source: https://arxiv.org/abs/2607.03573
  - date: 2026-11-10
    title: A preprint claims a proof of the Alon–Kim conjecture
    body: Qiao, Lu and Song claim the conjecture for all $k\ge t\ge1$ and $\varepsilon>0$ in a 25-page preprint that discloses AI assistance. Unrefereed; the problem stays open until checked.
    source: https://arxiv.org/abs/2611.13698
explainer:
  oneLine: Do hypergraphs whose edges share at most t vertices need at most (t−1+1/t+ε)Δ colours? A 10 Nov 2026 preprint claims yes.
  flow:
    - Meetings sharing a person need different slots
    - "Overlap of one person: nibble gives about Δ"
    - "Overlap up to t people: conjectured (t−1+1/t)Δ"
    - Projective planes show the factor is needed
    - "Preprint claims proof: unchecked"
  glossary:
    - term: chromatic index
      meaning: The fewest colours (time slots) with which the edges can be coloured so that edges sharing a vertex differ.
      link: https://en.wikipedia.org/wiki/Edge_coloring
    - term: maximum degree
      meaning: The largest number of edges through any single vertex, written Δ; it is a lower bound for the colours needed.
      link: https://en.wikipedia.org/wiki/Degree_(graph_theory)
    - term: hypergraph
      meaning: Like a graph, but each edge may contain any number of vertices.
      link: https://en.wikipedia.org/wiki/Hypergraph
    - term: k-uniform
      meaning: A hypergraph in which every edge has exactly k vertices.
      link: https://en.wikipedia.org/wiki/Hypergraph
    - term: t-simple
      meaning: Any two distinct edges share at most t vertices; 1-simple is the same as linear.
      link: /research/hypergraph-edge-colouring
    - term: linear hypergraph
      meaning: A hypergraph in which any two edges share at most one vertex.
      link: https://en.wikipedia.org/wiki/Hypergraph
    - term: Vizing's theorem
      meaning: For ordinary graphs, one extra colour beyond the maximum degree always suffices.
      link: https://en.wikipedia.org/wiki/Vizing%27s_theorem
    - term: Rödl nibble
      meaning: Build a colouring in many small random rounds, each colouring a tiny fraction of the edges.
      link: https://en.wikipedia.org/wiki/Packing_in_a_hypergraph
    - term: projective plane
      meaning: A finite system of points and lines where any two lines meet in exactly one point; the Fano plane has 7 points and 7 lines.
      link: https://en.wikipedia.org/wiki/Projective_plane
    - term: multihypergraph
      meaning: A hypergraph that may contain the same edge more than once (parallel edges).
      link: /research/hypergraph-edge-colouring
    - term: preprint
      meaning: A paper posted publicly before peer review, so independent referees have not yet checked its claims.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Edge coloring - Wikipedia
      url: https://en.wikipedia.org/wiki/Edge_coloring
      why: Scheduling examples and Vizing's theorem for ordinary graphs.
    - title: Hypergraph - Wikipedia
      url: https://en.wikipedia.org/wiki/Hypergraph
      why: What hypergraphs are, with pictures.
    - title: Packing in a hypergraph - Wikipedia
      url: https://en.wikipedia.org/wiki/Packing_in_a_hypergraph
      why: The history of the nibble method.
    - title: "Qiao, Lu, Song: The Proof of the Alon-Kim Conjecture (arXiv abstract)"
      url: https://arxiv.org/abs/2611.13698
      why: The unrefereed November 2026 claim.
raw:
  body: "A **multihypergraph** $H$ has a vertex set and a multiset of nonempty edges (parallel edges allowed). It is **$k$-uniform** if every edge has $k$ vertices and **$t$-simple** if any two distinct edges share at most $t$ vertices. The **maximum degree** $\\Delta(H)$ is the largest number of edges through a vertex, and the **chromatic index** $\\chi'(H)$ is the least $q$ for which the edges can be coloured with $q$ colours so that edges sharing a vertex get different colours.\n\n**Alon–Kim conjecture** (Alon and Kim 1997, Conjecture 1.1, in the form stated in the 2026 preprint). For all fixed integers $k\\ge t\\ge 1$ and $\\varepsilon>0$ there is $\\Delta_0=\\Delta_0(k,t,\\varepsilon)$ such that every $k$-uniform, $t$-simple multihypergraph $H$ with $\\Delta(H)\\ge\\Delta_0$ satisfies\n\n$$\\chi'(H)\\le\\left(t-1+\\tfrac1t+\\varepsilon\\right)\\Delta(H).$$"
  student: "**Setup.** People are vertices, meetings are edges. A **hypergraph** lets an edge have any number of vertices: a $k$-uniform one has exactly $k$ per edge. A proper colouring gives colours (time slots) to edges so that edges sharing a vertex differ; the fewest colours is $\\chi'$, and $\\Delta$ is the largest number of edges at a vertex. Always $\\Delta\\le\\chi'\\le k(\\Delta-1)+1$. For ordinary graphs Vizing's theorem pins $\\chi'$ to $\\Delta$ or $\\Delta+1$. For hypergraphs the answer depends on overlap.\n\n**Limited overlap.** Call a hypergraph **$t$-simple** if any two distinct edges share at most $t$ vertices. With $t=1$ (a **linear** hypergraph) the nibble method of Pippenger, Spencer and Kahn gives $\\chi'\\le(1+\\varepsilon)\\Delta$ for large $\\Delta$. In each round it hands out a few colours at random and keeps the non-clashing choices, and it works because no pair of vertices lies in many edges. With $t\\ge2$ that fails: the triples $\\{u,v,w_1\\},\\dots,\\{u,v,w_m\\}$ are 2-simple, yet the pair $u,v$ is in all of them.\n\n**The conjecture.** Alon and Kim (1997) conjectured that for fixed $k\\ge t\\ge1$ and $\\varepsilon>0$, once $\\Delta$ is large enough,\n\n$$\\chi'(H)\\le\\left(t-1+\\tfrac1t+\\varepsilon\\right)\\Delta(H).$$\n\nIn words: the number of slots is at most a fixed multiple of the busiest person's load, with the multiple $t-1+1/t$ plus any tiny margin. For $t=1$ it is $1$, which is the linear case.\n\n**Where $t-1+1/t$ comes from.** Take $t=2$: three people A, B, C and meetings AB, BC, CA, each repeated $m$ times. Everyone is in $2m$ meetings, so $\\Delta=2m$, but any two meetings share a person, so all $3m$ need different slots: $3m=1.5\\Delta$, and $t-1+1/t=1.5$. For $t=3$ use the Fano plane, seven triples on seven points with every two sharing exactly one point and every point on three: repeat each $m$ times, $\\Delta=3m$, and $7m$ slots are forced, $7m=\\frac73\\Delta$, and $t-1+1/t=\\frac73$. In general a projective plane of order $t-1$ (when it exists) does this; for $k>t$ add private extra vertices to each edge. Alon and Kim give this example in their paper to show why the coefficient cannot be lower in general. Alon and Kim proved, as reported in the preprint, that this is the worst case among pairwise-intersecting families.\n\n**The claim.** The preprint (arXiv:2611.13698) claims the conjecture for all $k\\ge t\\ge1$. As DARC reads its overview, it randomly splits the edges into groups, replaces each group by a hypergraph with small pair-degrees and degree at most about $(t-1+1/t+\\varepsilon)\\Delta$ divided by the number of groups, and then runs Kahn's nibble theorem on each group with fresh colours. The random splits come from random matchings built using a fixed-point theorem. Previously the best bound for $k=3,t=2$ was about $2.36\\Delta$ against the conjectured $1.5\\Delta$.\n\n**Status.** Unrefereed preprint; the authors disclose AI assistance in exploring strategies and checking the text. Open on DARC until experts check it."
site:
  aiReviewed: true
---

# State of the art

**Open in the accepted literature; a claimed proof is an unrefereed preprint.** Everything below is as reported in the introduction of the Qiao–Lu–Song preprint unless stated otherwise (the conjecture's statement and the intersecting-case theorem were also checked against the authors' copy of the 1997 paper). A $k$-uniform hypergraph has $\chi'\ge\Delta$, and greedy colouring gives $\chi'\le k(\Delta-1)+1$. The case $t=1$ (linear hypergraphs) follows from Kahn's 1996 list-colouring theorem, which extends the Pippenger–Spencer theorem (1989): for fixed rank and pair-degrees at most $\delta\Delta$ with $\delta$ small, $\chi'\le(1+\varepsilon)\Delta$. For $t\ge2$, $t$-simplicity does not bound the pair-degrees: the triples $\{u,v,w_j\}$, $j\le m$, form a 2-simple hypergraph whose pair $\{u,v\}$ lies in $\Delta=m$ edges. Alon and Kim (J. Combin. Theory Ser. A 77, 1997) proved that an intersecting $k$-uniform, $t$-simple hypergraph with large $\Delta$ has at most $(t-1+1/t)\Delta$ edges, which equals the chromatic index since any two of its edges need different colours, and conjectured that the coefficient $t-1+1/t$ suffices for all such hypergraphs up to $\varepsilon$. Frederickson, Hao and Kelly (arXiv:2607.03573, 2026) proved a general bound $\chi'\le(b+\varepsilon)k\Delta$ with $b$ a parameter derived from local structure, and deduced about $2.3581\Delta$ for 3-uniform 2-simple and $2.6791\Delta$ for 3-uniform 3-simple hypergraphs, against conjectured coefficients $3/2$ and $7/3$.

**A preprint claims the full conjecture.** Qiao, Lu and Song (arXiv:2611.13698, v1, 10 Nov 2026, 25 pages, Shandong University) state Theorem 1.5: for every $k\ge t\ge1$ and $\varepsilon>0$ there is $\Delta_0(k,t,\varepsilon)$ such that every $k$-uniform, $t$-simple multihypergraph with $\Delta\ge\Delta_0$ has $\chi'\le(t-1+1/t+\varepsilon)\Delta$, which is the conjecture in the form above. As DARC reads Section 1.3, they split the edges into $s$ groups and map each group to an auxiliary hypergraph of rank at most $k$ with maximum degree at most $(t-1+1/t+\varepsilon)\Delta/s$ and small pair-degrees, whose colourings transfer back to the original edges, and then apply Kahn's theorem to each group with its own set of colours. The groups come from random matchings built from fractional matchings, using Brouwer's fixed-point theorem and concentration inequalities. The authors disclose that they used an AI system (named gpt-6.1-sol) for exploring proof strategies, calculations and editing, and say they verified all statements themselves. The preprint is unrefereed and DARC has found no expert assessment of it yet, so the problem stays open here until it is checked.

# Applications

None foreseeable directly. Edge-colouring models conflict-free scheduling and allocation, but the conjecture is an asymptotic statement for very large degree. A proof would mainly show that the nibble method of Pippenger, Spencer and Kahn extends to hypergraphs whose edges overlap in several vertices.

# Resolution criteria

A proof, accepted by experts in probabilistic and extremal combinatorics (or a refereed publication), that for all fixed $k\ge t\ge1$ and $\varepsilon>0$ every $k$-uniform, $t$-simple multihypergraph of sufficiently large maximum degree has chromatic index at most $(t-1+1/t+\varepsilon)\Delta$; or a family of such hypergraphs with larger chromatic index, beating the bound at some fixed $\varepsilon$ for arbitrarily large $\Delta$.

# Rating rationale

Difficulty 25: open for about 30 years, with the best earlier bounds for k = 3 well above the conjectured coefficients, but a 25-page full proof is now claimed, so what remains is checking; it is unrefereed. Application value 6: asymptotic and structural. Leverage 25: it would settle edge-colouring for a whole family of hypergraph classes and extend nibble methods, within one subfield.

# Verification

Experts in probabilistic combinatorics read the 25-page proof in arXiv:2611.13698 and check Lemma 1.6 (the partition of the edges into groups with auxiliary hypergraphs of maximum degree at most $(t-1+1/t+\varepsilon)\Delta/s$ and pair-degree at most $\delta\Delta/s$, with intersections preserved), the construction of random matchings from fractional matchings (Proposition 3.2, with its fixed-point step), the variance bound of Lemma 5.1, and the final application of Kahn's theorem in Section 7. Check the argument against the hypergraph formed by a projective plane of order $t-1$ with each line repeated $m$ times, where the coefficient is exactly tight, and against the parallel-edge case $k=t$. A comparison with the Frederickson–Hao–Kelly bounds for $k=3$ is a sanity test, not a proof.

# Plain explanation

Picture a company where every meeting has the same number of people, and nobody can attend two meetings in the same time slot. If the busiest person has a huge number of meetings, how many time slots do you need?

A simple rule always works: about the group size times that busiest count. But if two meetings never share more than one person, far fewer slots do the job, only slightly more than the busiest count. This was shown by mathematicians in the late 1980s and 1990s using a clever random method.

What if two meetings may share a few people, say at most a handful? In 1997 Noga Alon and Jeong Han Kim guessed a precise answer: the slots needed grow like a certain fixed multiple of the busiest count, a little above the number of shared people minus one. They also showed that this multiple is enough when every two meetings share someone, and that it cannot be lowered in general. Until now it was not known to be enough in general.

On 10 November 2026 Chengshuo Qiao, Zhijun Lu and Huimin Song posted a 25-page paper claiming to prove the guess. The authors say they used an AI system to help explore ideas and check the text. Nobody independent has checked the proof yet, so on DARC it stays marked open.

The office analogy breaks down because the claim only holds when the busiest person has a very large number of meetings.
