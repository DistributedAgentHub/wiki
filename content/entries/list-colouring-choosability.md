---
type: entry
slug: list-colouring-choosability
title: List colouring and choosability
field: combinatorics
kind: THEORY
status: ACTIVE
summary: "Colouring a graph when every vertex has its own list of allowed colours: the choice number ch(G), how far it can exceed the chromatic number, and how it behaves on random graphs."
reliedOn: Choosability is the standard strengthening of graph colouring; results about it feed Ohba-type conjectures and the probabilistic analysis of colouring. The question of how close ch(G(n,p)) is to the chromatic number is built on this entry.
dependsOn:
  - extremal-combinatorics
  - probabilistic-method
references:
  - title: N. Alon, M. Krivelevich, B. Sudakov, List coloring of random and pseudo-random graphs, Combinatorica 19 (1999)
    url: https://doi.org/10.1007/s004939970001
    kind: paper
  - title: M. Krivelevich, V. H. Vu, Choosability in random hypergraphs, J. Combin. Theory Ser. B 83 (2001)
    url: https://doi.org/10.1006/jctb.2001.2053
    kind: paper
  - title: L. Wang, J. Zeng, The Choice Number of Random Graphs (arXiv preprint, 2026-10-26, not peer-reviewed)
    url: https://arxiv.org/abs/2610.35003
    kind: paper
  - title: List coloring - Wikipedia
    url: https://en.wikipedia.org/wiki/List_coloring
    kind: article
timeline:
  - date: 1999-10-01
    title: Order of magnitude of ch(G(n,p)) and the equality conjecture
    body: Alon, Krivelevich and Sudakov prove ch(G(n,p)) = Θ(np/log(np)) whp for 2 < np ≤ n/2 and conjecture that the choice number is asymptotically the chromatic number when np → ∞. The issue date is given as 1 October 1999.
    source: https://doi.org/10.1007/s004939970001
  - date: 2001-11-01
    title: Factor-two bound for varying p
    body: Krivelevich and Vu prove ch(G(n,p)) ≤ (2+o(1))χ(G(n,p)) whp when np → ∞ and p ≤ 0.9.
    source: https://doi.org/10.1006/jctb.2001.2053
  - date: 2026-10-26
    title: Preprint claims the full conjecture
    body: Wang and Zeng post an arXiv preprint claiming ch(G(n,p)) = (1+o(1))χ(G(n,p)) whp whenever np → ∞. It has not been refereed.
    source: https://arxiv.org/abs/2610.35003
explainer:
  oneLine: Colouring a map when each region has its own short list of allowed colours, and how long the lists must be.
  flow:
    - Each vertex gets its own colour list
    - Choice number is at least chromatic number
    - Gap can be huge in special graphs
    - "Random graphs: gap conjectured to vanish"
    - 2026 preprint claims proof, unrefereed
  glossary:
    - term: graph
      meaning: A set of points called vertices, some pairs joined by lines called edges.
      link: https://en.wikipedia.org/wiki/Graph_theory
    - term: chromatic number
      meaning: The fewest colours that can colour all vertices so that joined vertices never share a colour.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: list colouring
      meaning: Colouring where each vertex may only use colours from its own assigned list.
      link: https://en.wikipedia.org/wiki/List_coloring
    - term: choice number
      meaning: The shortest list length that guarantees a proper list colouring whatever the lists are.
      link: https://en.wikipedia.org/wiki/List_coloring
    - term: independent set
      meaning: A set of vertices with no edge between any two of them; each colour class is one.
      link: https://en.wikipedia.org/wiki/Independent_set_(graph_theory)
    - term: random graph G(n,p)
      meaning: A graph on n vertices where each possible edge appears independently with probability p.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
    - term: with high probability
      meaning: With probability tending to 1 as the graph gets larger.
      link: https://en.wikipedia.org/wiki/With_high_probability
    - term: complete bipartite graph
      meaning: Two groups of vertices with every vertex of one group joined to every vertex of the other.
      link: https://en.wikipedia.org/wiki/Complete_bipartite_graph
    - term: probabilistic method
      meaning: Proving something exists, or happens typically, by showing a random choice works with positive probability.
      link: /research/probabilistic-method
    - term: preprint
      meaning: A paper posted publicly before it has been reviewed by other experts.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: List coloring - Wikipedia
      url: https://en.wikipedia.org/wiki/List_coloring
      why: Definitions, examples and the K(n,n) gap in one place.
    - title: Graph coloring - Wikipedia
      url: https://en.wikipedia.org/wiki/Graph_coloring
      why: The ordinary colouring problem this builds on.
    - title: Erdős–Rényi model - Wikipedia
      url: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
      why: What the random graph G(n,p) is and how it behaves.
raw:
  student: "**Setup.** A *graph* $G$ is a set of vertices joined by edges. A *proper colouring* gives each vertex a colour so that the two ends of every edge differ. The least number of colours needed is the *chromatic number* $\\chi(G)$.\n\n**List colouring.** Give every vertex $v$ a list $L(v)$ of allowed colours. A *proper list colouring* picks $f(v)\\in L(v)$ for all $v$, with adjacent vertices still different. The *choice number* $\\mathrm{ch}(G)$ is the least $k$ such that this is possible for every way of giving each vertex a list of exactly $k$ colours. If all lists are the same, this is ordinary colouring, so $\\chi(G)\\le \\mathrm{ch}(G)$.\n\n**The gap can be huge.** The complete bipartite graph $K_{n,n}$ (two groups of $n$ vertices, every vertex in one group joined to every vertex in the other) has $\\chi=2$, yet Erdős, Rubin and Taylor showed $\\mathrm{ch}(K_{n,n})\\approx\\log_2 n$, which grows without bound. Intuitively, the lists can be arranged so that every choice for one side leaves some vertex on the other side with no colour.\n\n**Random graphs.** In $G(n,p)$ each possible edge is included independently with probability $p$. We say something holds *with high probability* if its probability tends to 1 as $n$ grows. Each colour class is an *independent set* (no edges inside it), and the largest independent set has size about $2\\log n/\\log(1/(1-p))$ for fixed $p$; roughly, $\\chi$ is $n$ divided by that. Alon, Krivelevich and Sudakov (1999) proved $\\mathrm{ch}$ has the same order, $np/\\log(np)$, and conjectured $\\mathrm{ch}=(1+o(1))\\chi$ whenever the average degree $np\\to\\infty$. Here $o(1)$ is a quantity that tends to 0, so the two numbers agree up to a fraction that vanishes.\n\n**How upper bounds are proved.** Colour in rounds. If some colour is available to many uncoloured vertices, use it on a big independent set among them. When every colour is available to few vertices, finish with a different argument. This needs every large set of vertices to contain a large independent set, a property of random graphs.\n\n**Status.** Known in many ranges of $p$ since the 1990s, and within a factor 2 for most $p$ (Krivelevich–Vu, 2001). An arXiv preprint dated 2026-10-26 by Wang and Zeng claims the full conjecture; it has not been refereed."
site:
  published: true
  aiReviewed: true
---

## What it is

In ordinary colouring, a graph $G$ is coloured with $k$ colours so that adjacent vertices differ; the least such $k$ is the chromatic number $\chi(G)$. In **list colouring**, each vertex $v$ is first given its own list $L(v)$ of allowed colours, and a proper colouring must pick $f(v)\in L(v)$ for every $v$, with adjacent vertices still receiving different colours. The **choice number** $\mathrm{ch}(G)$ (also called the list chromatic number) is the least $k$ such that a proper list colouring exists for every assignment of lists of size $k$. Giving every vertex the same list shows $\chi(G)\le \mathrm{ch}(G)$.

## The two numbers can be far apart

Erdős, Rubin and Taylor (1979) showed that the complete bipartite graph $K_{n,n}$, which is $2$-colourable, has $\mathrm{ch}(K_{n,n})=(1+o(1))\log_2 n$. So the choice number is not controlled by the chromatic number in general. Even complete multipartite graphs with parts of size three show a gap: Kierstead (2000) proved that the complete $k$-partite graph with parts of size three has $\chi=k$ but $\mathrm{ch}=\lceil(4k-1)/3\rceil$. In the other direction, Ohba's conjecture (graphs with at most $2\chi+1$ vertices have $\mathrm{ch}=\chi$) was proved by Noel, Reed and Wu in 2015.

## Random graphs

In the random graph $G(n,p)$ each of the $\binom n2$ possible edges is present independently with probability $p$, and statements hold "with high probability" (whp) if their probability tends to $1$ as $n\to\infty$. For the chromatic number, Bollobás (1988) found $\chi(G(n,p))\sim n/(2\log_b n)$ for constant $p$, with $b=1/(1-p)$, and Łuczak (1991) found $\chi(G(n,p))\sim np/(2\ln(np))$ for sparse $p$ with $np\to\infty$. Both come from the size of the largest independent set, which is about $2\log_b n$ in the dense case.

For the choice number, Alon (1992) answered a question of Erdős, Rubin and Taylor by showing $\mathrm{ch}(G(n,1/2))=o(n)$. Alon, Krivelevich and Sudakov (Combinatorica 1999) proved the right order of magnitude, $\mathrm{ch}(G(n,p))=\Theta(np/\log(np))$ whp for $2<np\le n/2$, and conjectured that the choice number is asymptotically **equal** to the chromatic number whenever $np\to\infty$. For constant $p$ this follows from an argument of Kahn; Krivelevich (2000), Krivelevich, Sudakov, Vu and Wormald (2003) and Frieze, Mitsche, Pérez-Giménez and Prałat (2015) extended the range of $p$ for which the conjecture was known. Krivelevich and Vu (JCTB 2001) proved $\mathrm{ch}(G(n,p))\le(2+o(1))\chi(G(n,p))$ whenever $np\to\infty$ and $p\le 0.9$, a factor $2$ away.

## Techniques

Upper bounds on $\mathrm{ch}$ usually colour in rounds. While some colour appears in many of the remaining lists, it is used on a large independent set of vertices that all have it available; once every colour is rare, a completion lemma finishes the job. The needed input is that every large vertex set of $G(n,p)$ contains an independent set of nearly optimal size. When $p$ is close to $1$ the independent sets have bounded size, and matching theorems (Kahn's linear-programming form of the Frankl–Rödl–Pippenger theorem) are used instead.

## Recent status

A preprint dated 2026-10-26 (Wang and Zeng, not yet peer-reviewed) claims a proof of the Alon–Krivelevich–Sudakov conjecture in full generality, by treating large and bounded independent sets separately and proving a deterministic bound relating colourings with small colour classes to list colourings. Until it has been refereed, the conjecture is tracked here as open with the claim under review.

# Plain explanation

Imagine colouring a map so that neighbouring countries never share a colour. The smallest number of colours that always works is called the chromatic number.

Now change the rules. Every country comes with its own list of allowed colours, and the lists can all be different. Country A may only use red, blue or green. Its neighbour B may only use blue, yellow or purple. You must still pick one colour from each country's list so that neighbours differ. The smallest list length that always works, whatever the lists are, is called the choice number.

The choice number is never smaller than the chromatic number, because giving every country the same list is just one possible case. The surprise is that it can be much larger. Some simple arrangements need only two colours in the ordinary game but need longer and longer lists as they grow.

Mathematicians ask how big the gap is for typical networks, such as ones built by flipping a coin for every possible connection. For these random networks the two numbers are conjectured to be almost the same. A recent unreviewed preprint claims a proof of that conjecture, and until experts have checked it the question stays marked open.

The analogy breaks in one place: real maps are flat, but the networks studied here can be wildly tangled.
