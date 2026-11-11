---
type: entry
slug: hypergraph-edge-colouring
title: "Hypergraph edge-colouring: chromatic index, the nibble and the Alon–Kim conjecture"
field: combinatorics
kind: THEORY
status: ACTIVE
summary: Colouring hypergraph edges so that edges sharing a vertex differ. With small overlap the nibble gives about Δ colours; a 2026 preprint claims the Alon–Kim bound for edges sharing up to t vertices.
reliedOn: Edge-colouring models scheduling and conflict-free allocation, and the nibble method developed for it also settled packing and design questions and the Erdős–Faber–Lovász conjecture for large n.
dependsOn:
  - extremal-combinatorics
  - list-colouring-choosability
  - probabilistic-method
references:
  - title: "Qiao, Lu, Song: The Proof of the Alon–Kim Conjecture (arXiv:2611.13698, 10 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.13698
    kind: paper
  - title: "Qiao, Lu, Song: full text (introduction and bibliography with the Pippenger–Spencer, Kahn and Alon–Kim references)"
    url: https://arxiv.org/pdf/2611.13698
    kind: paper
  - title: "Frederickson, Hao, Kelly: Improved bounds for the chromatic index of k-uniform hypergraphs (arXiv:2607.03573, 2026)"
    url: https://arxiv.org/abs/2607.03573
    kind: paper
  - title: "Kang, Kelly, Kühn, Methuku, Osthus: Graph and hypergraph colouring via nibble methods: A survey (arXiv:2106.13733)"
    url: https://arxiv.org/abs/2106.13733
    kind: paper
  - title: "Kang, Kelly, Kühn, Methuku, Osthus: A proof of the Erdős–Faber–Lovász conjecture (arXiv:2101.04698)"
    url: https://arxiv.org/abs/2101.04698
    kind: paper
  - title: Edge coloring (Wikipedia)
    url: https://en.wikipedia.org/wiki/Edge_coloring
    kind: article
  - title: Vizing's theorem (Wikipedia)
    url: https://en.wikipedia.org/wiki/Vizing%27s_theorem
    kind: article
  - title: Packing in a hypergraph (Wikipedia; covers the Rödl nibble)
    url: https://en.wikipedia.org/wiki/Packing_in_a_hypergraph
    kind: article
  - title: Erdős–Faber–Lovász conjecture (Wikipedia)
    url: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Faber%E2%80%93Lov%C3%A1sz_conjecture
    kind: article
timeline:
  - date: 1989-01-01
    title: "Pippenger–Spencer: nearly Δ colours for small pair-degrees"
    body: Pippenger and Spencer prove that k-uniform hypergraphs with large maximum degree, all vertex degrees close to it and small pair-degrees have chromatic index at most $(1+\varepsilon)\Delta$ (as stated in the 2026 preprint's introduction). Only the year is known, so the date is the first of January.
    source: https://arxiv.org/pdf/2611.13698
  - date: 1996-01-01
    title: "Kahn: the same for list colouring, without the degree condition"
    body: Kahn extends the Pippenger–Spencer theorem to list edge-colouring and removes the lower bound on vertex degrees (as stated in the 2026 preprint's introduction). Only the year is known, so the date is the first of January.
    source: https://arxiv.org/pdf/2611.13698
  - date: 1997-01-01
    title: Alon and Kim study t-simple uniform hypergraphs
    body: Alon and Kim bound the number of edges of an intersecting k-uniform, t-simple hypergraph by $(t-1+1/t)\Delta$ and conjecture that the same coefficient suffices for the chromatic index of any such hypergraph (as stated in the 2026 preprint). Only the year is known, so the date is the first of January.
    source: https://arxiv.org/pdf/2611.13698
  - date: 2021-01-01
    title: Erdős–Faber–Lovász conjecture proved for large n
    body: Kang, Kelly, Kühn, Methuku and Osthus post a proof of the Erdős–Faber–Lovász conjecture for all sufficiently large n using nibble methods. The date is the first of the month of the arXiv identifier (2101).
    source: https://arxiv.org/abs/2101.04698
  - date: 2026-07-03
    title: "Frederickson–Hao–Kelly: improved bounds for k = 3"
    body: They bound the chromatic index by about $2.3581\Delta$ for 3-uniform 2-simple and $2.6791\Delta$ for 3-uniform 3-simple hypergraphs with large maximum degree, against conjectured coefficients 3/2 and 7/3.
    source: https://arxiv.org/abs/2607.03573
  - date: 2026-11-10
    title: A preprint claims the Alon–Kim conjecture
    body: Qiao, Lu and Song post a 25-page preprint claiming the conjecture for all $k\ge t\ge 1$. Unrefereed.
    source: https://arxiv.org/abs/2611.13698
explainer:
  oneLine: Giving each meeting a time slot so nobody is in two at once, when a meeting can have many people.
  flow:
    - Meetings need slots; clashes share a person
    - "Graphs: Vizing gives Δ or Δ+1"
    - "Small overlap: nibble gives about Δ"
    - "Bigger overlap: conjecture sets the price"
    - Preprint claims it; unchecked
  glossary:
    - term: edge colouring
      meaning: Giving each edge a colour so that edges sharing a vertex get different colours; like assigning time slots to meetings.
      link: https://en.wikipedia.org/wiki/Edge_coloring
    - term: chromatic index
      meaning: The fewest colours with which the edges of a (hyper)graph can be properly coloured.
      link: https://en.wikipedia.org/wiki/Edge_coloring
    - term: Vizing's theorem
      meaning: Every simple graph can be edge-coloured with at most one more colour than its largest vertex degree.
      link: https://en.wikipedia.org/wiki/Vizing%27s_theorem
    - term: hypergraph
      meaning: Like a graph, but an edge can contain any number of vertices, not just two.
      link: https://en.wikipedia.org/wiki/Hypergraph
    - term: Rödl nibble
      meaning: A method that builds a colouring or packing in many small random rounds, each handling a tiny fraction of the objects.
      link: https://en.wikipedia.org/wiki/Packing_in_a_hypergraph
    - term: Erdős–Faber–Lovász conjecture
      meaning: A 1972 claim about colouring overlapping groups, proved for large cases by Kang, Kelly, Kühn, Methuku and Osthus.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Faber%E2%80%93Lov%C3%A1sz_conjecture
    - term: list colouring
      meaning: Colouring where each item has its own list of allowed colours and must pick from it.
      link: /research/list-colouring-choosability
    - term: probabilistic method
      meaning: Proving something exists by showing a random choice has a positive chance of working.
      link: /research/probabilistic-method
    - term: preprint
      meaning: A paper posted publicly before peer review, so independent referees have not yet checked its claims.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Edge coloring - Wikipedia
      url: https://en.wikipedia.org/wiki/Edge_coloring
      why: Definitions, Vizing's theorem and examples for ordinary graphs.
    - title: Hypergraph - Wikipedia
      url: https://en.wikipedia.org/wiki/Hypergraph
      why: What a hypergraph is, with pictures.
    - title: Packing in a hypergraph - Wikipedia
      url: https://en.wikipedia.org/wiki/Packing_in_a_hypergraph
      why: Where the nibble comes from.
    - title: "Kang, Kelly, Kühn, Methuku, Osthus: nibble methods survey"
      url: https://arxiv.org/abs/2106.13733
      why: A survey by experts; the early sections are readable with some effort.
site:
  published: true
  aiReviewed: true
---

## What it is

An **edge colouring** of a graph gives each edge a colour so that edges meeting at a vertex get different colours. Think of vertices as people, edges as two-person meetings and colours as time slots: nobody attends two meetings in the same slot. The least number of colours is the **chromatic index** $\chi'(G)$. A vertex of degree $\Delta$ needs $\Delta$ different colours on its edges, so $\chi'(G)\ge\Delta(G)$, and **Vizing's theorem** says $\chi'(G)\le\Delta(G)+1$ for every simple graph: the answer is one of two values.

## Hypergraphs

A **hypergraph** allows an edge to be any set of vertices, a meeting of several people. It is **$k$-uniform** when every edge has $k$ vertices. A proper colouring again requires that edges sharing a vertex get different colours, and $\Delta$ is again a lower bound. There is no Vizing-type theorem: each edge meets up to $k(\Delta-1)$ others, so greedy colouring gives $k(\Delta-1)+1$ colours, and the true answer can lie anywhere between $\Delta$ and about $k\Delta$ depending on how the edges overlap.

## Limited overlap and the nibble

If any two edges share at most one vertex (a **linear** hypergraph), the answer drops to $(1+o(1))\Delta$ for large $\Delta$. Pippenger and Spencer (1989) proved this when the pair-degrees are small and all vertex degrees are close to $\Delta$, and Kahn (1996) extended it to list colouring and removed the degree condition, as reported in the introduction of the 2026 preprint on the Alon–Kim conjecture. The tool is the **Rödl nibble**, or semi-random method: colour in many small rounds, each round giving a random small fraction of edges a colour and discarding clashes, so that what remains behaves like a smaller copy of the original problem. The survey of Kang, Kelly, Kühn, Methuku and Osthus covers the method and its use on hypergraph colouring.

A famous relative is the **Erdős–Faber–Lovász conjecture** (1972): a linear hypergraph on $n$ vertices has chromatic index at most $n$. Kang, Kelly, Kühn, Methuku and Osthus proved it for all sufficiently large $n$ with nibble methods.

## Overlap in more than one vertex

Allowing two edges to share up to $t$ vertices breaks the small-pair-degree hypothesis that the nibble needs. Alon and Kim (1997) asked how large the chromatic index can then be. Their conjecture, recorded on the problem page, is that $(t-1+1/t+\varepsilon)\Delta$ colours suffice. That coefficient cannot be lowered in general: repeating each line of a projective plane of order $t-1$ many times (padding each copy with private extra vertices when $k>t$) gives pairwise-intersecting edges that need that many colours, as Alon and Kim note in their paper (such planes exist when $t-1$ is a prime power). Frederickson, Hao and Kelly (2026) gave the best earlier bounds for $k=3$, well above the conjectured coefficients. A preprint of 10 November 2026 claims the full conjecture; it is unrefereed.

## Related entries

Choosability, where each element has its own list of allowed colours, is treated under list colouring; the probabilistic method underlies the nibble.

# Plain explanation

Imagine a school club where every meeting is a group of people, and nobody can be in two meetings at the same time. You want to fit all meetings into as few time slots as possible. That puzzle is called edge colouring: each meeting is a link, each time slot is a colour, and two meetings that share a person must get different colours.

If the busiest person is in, say, 100 meetings, you need at least 100 slots. For meetings of just two people, where no pair meets twice, a classic result says 101 slots always suffice. With bigger groups the answer is less tidy, and it depends on how much the groups overlap. If any two groups share at most one person, a clever random method, built up over decades, shows you need only slightly more than 100 slots when the numbers are large. That method works a bit like peeling a layer at a time: hand out a few slots at random, remove the clashes, and repeat on what is left.

The open question on this page is what happens when groups may share more than one person. A 1997 guess says there is still a clean answer. In November 2026 a paper claimed to prove that guess. Nobody independent has checked it yet.

The school analogy breaks in one place: real clubs are small, while these results only kick in when the busiest person has a very large number of meetings.

# Student explanation

**Edge colouring as scheduling.** Let each person be a vertex and each two-person meeting an edge joining them. A **proper edge colouring** gives each edge a colour (a time slot) so that two edges at the same vertex differ. The fewest colours needed is the **chromatic index** $\chi'$. If the busiest vertex has **degree** $\Delta$ (it is in $\Delta$ meetings), you need at least $\Delta$ colours. **Vizing's theorem** says that for ordinary graphs (no repeated edges) $\Delta+1$ colours always suffice, so $\chi'$ is $\Delta$ or $\Delta+1$.

**Hypergraphs.** Let a meeting have $k$ people. Then it is an edge with $k$ vertices, and the structure is a **$k$-uniform hypergraph**. Colouring is defined the same way. Now an edge can clash with up to $k(\Delta-1)$ others, so colouring edges one at a time always works with $k(\Delta-1)+1$ colours. The truth lies between $\Delta$ and about $k\Delta$, and what decides it is how much the edges overlap.

**Overlap.** If any two edges share at most one vertex (a **linear** hypergraph), then for large $\Delta$ about $\Delta$ colours suffice, with an error that is small compared with $\Delta$ (Pippenger and Spencer 1989, Kahn 1996). The method is the **Rödl nibble**: in each round give a small random fraction of the edges colours at random, discard those that clash, and observe that the leftover edges form a similar but smaller problem. The key point is that nothing weird happens when no pair of vertices is in many common edges, so the random choices behave predictably (this is where probability is needed: we lean on averages of many independent random choices being close to their expected values).

**Where the nibble breaks.** If two edges may share up to $t$ vertices, a single pair of vertices can lie in nearly all of a vertex's edges, and the nibble's predictions fail. The Alon–Kim conjecture says the cost is still modest: about $(t-1+1/t)\Delta$ colours. The best earlier bounds for $k=3$ (Frederickson, Hao and Kelly, 2026) were about $2.36\Delta$ for $t=2$, against the conjectured $1.5\Delta$.

**Related.** The Erdős–Faber–Lovász conjecture (1972) is a linear-hypergraph colouring statement, proved for large $n$ by Kang, Kelly, Kühn, Methuku and Osthus with nibble methods. See the problem page for the Alon–Kim claim, which is an unrefereed preprint.
