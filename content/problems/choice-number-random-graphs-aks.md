---
type: problem
slug: choice-number-random-graphs-aks
title: "Alon–Krivelevich–Sudakov: is the choice number of G(n,p) asymptotically its chromatic number?"
entry: list-colouring-choosability
status: OPEN
origin: Noga Alon, Michael Krivelevich and Benny Sudakov, Combinatorica 19 (1999)
ratings:
  difficulty: 22
  applicationValue: 70
  leverage: 12
verification:
  route: REVIEW
sources:
  - title: "Alon, Krivelevich, Sudakov: List coloring of random and pseudo-random graphs (Combinatorica 19, 1999)"
    url: https://doi.org/10.1007/s004939970001
  - title: "Krivelevich, Vu: Choosability in random hypergraphs (JCTB 83, 2001)"
    url: https://doi.org/10.1006/jctb.2001.2053
  - title: "Wang, Zeng: The Choice Number of Random Graphs (arXiv, v1 26 Oct 2026, preprint, not peer-reviewed)"
    url: https://arxiv.org/abs/2610.35003
links:
  - to: diagonal-ramsey-numbers
    kind: RELATED
    note: Both rest on the size of the largest independent set (or clique) in random graphs, which controls the chromatic number of G(n,p).
timeline:
  - date: 1999-10-01
    title: Conjecture stated
    body: Alon, Krivelevich and Sudakov prove the order of magnitude Θ(np/log(np)) and conjecture ch(G(n,p)) ~ χ(G(n,p)) for np → ∞.
    source: https://doi.org/10.1007/s004939970001
  - date: 2001-11-01
    title: Factor-two bound
    body: Krivelevich and Vu show ch ≤ (2+o(1))χ whp for np → ∞, p ≤ 0.9.
    source: https://doi.org/10.1006/jctb.2001.2053
  - date: 2026-10-26
    title: Preprint claims the full conjecture (unrefereed)
    body: Wang and Zeng post arXiv:2610.35003, claiming ch(G(n,p)) = (1+o(1))χ(G(n,p)) whp for all p with np → ∞. The preprint has not been refereed.
    source: https://arxiv.org/abs/2610.35003
explainer:
  oneLine: In a random graph, are private colour lists per vertex no harder than one common palette? A 2026 preprint claims yes.
  flow:
    - "Random graph: friends decided by coin flips"
    - Each person gets a private colour list
    - "Conjecture: lists cost almost nothing extra"
    - Known only in some ranges, else factor two
    - 2026 preprint claims all ranges, unrefereed
  glossary:
    - term: random graph
      meaning: A graph built by deciding each possible edge independently by a coin flip with probability p.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
    - term: chromatic number
      meaning: The fewest colours that colour every vertex so that joined vertices differ.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: choice number
      meaning: The shortest list length for which a proper colouring exists whatever the vertex lists are.
      link: https://en.wikipedia.org/wiki/List_coloring
    - term: independent set
      meaning: A set of vertices with no edge between any two of them.
      link: https://en.wikipedia.org/wiki/Independent_set_(graph_theory)
    - term: with high probability
      meaning: With probability tending to 1 as the graph grows.
      link: https://en.wikipedia.org/wiki/With_high_probability
    - term: o(1)
      meaning: A quantity that tends to zero as n grows, so (1+o(1)) means a factor tending to 1.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: colour class
      meaning: The set of all vertices that received the same colour in a colouring.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: preprint
      meaning: A paper posted publicly before it has been reviewed by other experts.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: list colouring and choosability
      meaning: The DARC entry on colouring with per-vertex lists and the choice number.
      link: /research/list-colouring-choosability
  readFirst:
    - title: List coloring - Wikipedia
      url: https://en.wikipedia.org/wiki/List_coloring
      why: Definitions and the standard examples.
    - title: Erdős–Rényi model - Wikipedia
      url: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
      why: What the random graph is.
    - title: Independent set (graph theory) - Wikipedia
      url: https://en.wikipedia.org/wiki/Independent_set_(graph_theory)
      why: The object that controls both colouring numbers.
raw:
  body: "Let $G(n,p)$ be the binomial random graph and let $\\chi$ and $\\mathrm{ch}$ denote the chromatic number and the choice (list chromatic) number. **Conjecture (Alon–Krivelevich–Sudakov, 1999).** If $p=p(n)\\in(0,1)$ satisfies $np\\to\\infty$, then with high probability\n$$\\mathrm{ch}(G(n,p))=(1+o(1))\\,\\chi(G(n,p)).$$\nThe choice number $\\mathrm{ch}(G)$ is the least $k$ such that, for every assignment of lists $L(v)$ with $|L(v)|=k$, there is a proper colouring with $f(v)\\in L(v)$ for all $v$. Always $\\chi\\le\\mathrm{ch}$, so the content of the conjecture is the upper bound $\\mathrm{ch}\\le(1+o(1))\\chi$ over the full range of $p$, including $p$ very close to $1$ and $np$ growing arbitrarily slowly."
  student: "**The conjecture.** Let $G(n,p)$ be the random graph on $n$ vertices where every pair is joined independently with probability $p$. Let $\\chi$ be its chromatic number and $\\mathrm{ch}$ its choice number (the least list size that always allows a proper list colouring). Always $\\chi\\le\\mathrm{ch}$. Alon, Krivelevich and Sudakov (1999) conjectured that whenever $np\\to\\infty$, with high probability\n$$\\mathrm{ch}(G(n,p))=(1+o(1))\\,\\chi(G(n,p)).$$\nHere $np$ is the average number of neighbours of a vertex, and $(1+o(1))$ means a factor that tends to 1.\n\n**Why it is believable.** Both numbers are driven by the size of the biggest independent set. For fixed $p$ that size is about $2\\log n/\\log(1/(1-p))$, and $\\chi$ is roughly $n$ divided by it. Alon (1992) showed $\\mathrm{ch}(G(n,1/2))=o(n)$, and Alon–Krivelevich–Sudakov showed $\\mathrm{ch}$ is of the same order $np/\\log(np)$.\n\n**What was known.** Equality was proved for constant $p$ (Kahn), then for $p$ above about $n^{-1/3}$ and below $1-\\varepsilon$ (Krivelevich; Krivelevich–Sudakov–Vu–Wormald; Frieze–Mitsche–Pérez-Giménez–Prałat). For $np\\to\\infty$ and $p\\le0.9$, Krivelevich and Vu (2001) proved $\\mathrm{ch}\\le(2+o(1))\\chi$, off by a factor of two.\n\n**The 2026 claim.** Wang and Zeng (arXiv:2610.35003, 26 Oct 2026) claim the full conjecture, including $p$ very close to 1 and $np$ growing slowly. They split into two cases. When independent sets are large, they sharpen the independent-set estimate used by Krivelevich and Vu so the factor two disappears. When $p$ is so close to 1 that independent sets stay small, they prove a non-random theorem: if a graph can be properly coloured with $k$ colour classes, each of size at most $s+1$, and every set of more than $\\delta n$ vertices contains an independent set of size $s$, then $\\mathrm{ch}\\le k+\\varepsilon n$. Here $\\varepsilon$ can be any small positive number, and $\\delta$ is chosen depending on $s$ and $\\varepsilon$.\n\n**Honest status.** This is a 12-page preprint, not refereed, with no formal proof. We list the conjecture as open and the proof as a claim under review. If it holds, the remaining step is checking, not discovering a new idea."
site:
  aiReviewed: true
---

# State of the art

Alon (1992) showed $\mathrm{ch}(G(n,1/2))=o(n)$; Alon, Krivelevich and Sudakov (1999) proved $\mathrm{ch}(G(n,p))=\Theta(np/\log(np))$ whp for $2<np\le n/2$ and made the conjecture. It was known for constant $p$ (Kahn; see Alon's 1993 survey), then for $n^{-1/4+\varepsilon}\le p\le 3/4$ (Krivelevich, 2000), $n^{-1/3+\varepsilon}\le p\le 3/4$ (Krivelevich, Sudakov, Vu and Wormald, 2003) and $n^{-1/3}(\log n)^2(\log\log n)^{1/3}\le p\le 1-\varepsilon$ (Frieze, Mitsche, Pérez-Giménez and Prałat, 2015). For the full range with $np\to\infty$ and $p\le0.9$, Krivelevich and Vu (2001) proved $\mathrm{ch}\le(2+o(1))\chi$, a factor $2$ short. **Claim of 2026-10-26.** The arXiv preprint 2610.35003 (Lanchao Wang and Jiasheng Zeng, v1, 12 pages, no journal reference) claims a proof of the conjecture in full generality. It splits into two cases: when independent sets of growing size exist it proves a sharper uniform independent-set estimate that removes the factor two of Krivelevich–Vu, and when $p$ is close enough to $1$ that independent sets have bounded size it proves a deterministic theorem (a graph with a proper colouring into $k$ classes of size at most $s+1$, in which every vertex set of size above $\delta n$ contains an independent set of size $s$, has $\mathrm{ch}\le k+\varepsilon n$, where $\varepsilon>0$ is arbitrary and $\delta$ depends on $s$ and $\varepsilon$; Theorem 1.3). The preprint has not been refereed, and no independent confirmation is known, so the conjecture is treated as open here with the claim under review.

# Applications

None direct. List colouring models assignment problems in which each task has its own set of admissible resources, and the result would sharpen how much that restriction costs on random instances. The proof techniques (independent-set estimates, matching theorems) are reusable in other probabilistic colouring problems.

# Resolution criteria

A proof that $\mathrm{ch}(G(n,p))=(1+o(1))\chi(G(n,p))$ whp whenever $np\to\infty$, accepted by experts (for example by publication after refereeing and independent reading of the two-case argument), or a range of $p$ with $np\to\infty$ where the ratio $\mathrm{ch}/\chi$ stays bounded away from $1$. The 2026 preprint is treated as a claim until then.

# Rating rationale

If the 2026 preprint holds, the remaining work is verification; the visible path (known techniques, earlier partial ranges) puts the problem in the 10–29 band at 22. Application value 4: a refinement of a probabilistic combinatorics statement with no foreseeable use. Leverage 12: the conjecture is a specific benchmark for list colouring and little else depends on it.

# Verification

Only expert review is possible today: the argument is a long probabilistic estimate plus a deterministic colouring theorem with no machine-checkable certificate. A reviewer should read the uniform independent-set estimate (Section 3) and the bounded-class-size theorem (Section 4) against the case split at log(1/(1−p)) = o(log(np)), and check the bounded-independence reduction that deletes o(n) exceptional vertices.

# Plain explanation

Take a large group of people and, for every pair, flip a coin to decide whether they are friends. This is a random graph. Now give everyone a colour so that friends never share one. The fewest colours that always work is the chromatic number.

Make it harder: each person has their own private list of allowed colours, and the lists can differ from person to person. How long must every list be so that a valid colouring always exists, whatever the lists are? That is the choice number.

In 1999 Noga Alon, Michael Krivelevich and Benny Sudakov conjectured that for random graphs of this kind, the two numbers are nearly equal. Letting people have private lists costs almost nothing extra. This was known only for some densities, and for most others only within a factor of two.

On 26 October 2026 Lanchao Wang and Jiasheng Zeng posted a preprint claiming a proof for every density where the typical person has many friends. It has not been checked by other experts, so the question stays marked open here, with the claim under review.

The analogy breaks in one place: in a random graph, who is friends with whom is independent of everything else, which real social networks are not.
