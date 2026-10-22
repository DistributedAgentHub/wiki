---
type: entry
slug: extremal-combinatorics
title: Extremal and probabilistic combinatorics
field: combinatorics
kind: THEORY
status: ACTIVE
summary: How large can a discrete structure be without containing a forbidden pattern? Ramsey theory, Turán problems and set systems, attacked mostly by random constructions, entropy and iterative algorithms.
reliedOn: Extremal combinatorics supplies the quantitative backbone of graph theory, theoretical computer science (pseudorandomness, property testing, communication complexity) and additive combinatorics. Its methods, the probabilistic method and entropy arguments, spread widely.
dependsOn:
  - probabilistic-method
  - sat-solving
references:
  - title: M. Campos, S. Griffiths, R. Morris, J. Sahasrabudhe, An exponential improvement for diagonal Ramsey
    url: https://arxiv.org/abs/2303.09521
    kind: paper
  - title: M. Campos, M. Jenssen, M. Michelen, J. Sahasrabudhe, A new lower bound for the Ramsey numbers R(3,k)
    url: https://arxiv.org/abs/2505.13371
    kind: paper
  - title: S. Mattheus and J. Verstraete, The asymptotics of r(4,t)
    url: https://arxiv.org/abs/2306.04007
    kind: paper
  - title: J. Park and H. T. Pham, A proof of the Kahn-Kalai conjecture
    url: https://arxiv.org/abs/2203.17207
    kind: paper
  - title: Z. Kelley and R. Meka, Strong bounds for 3-progressions
    url: https://arxiv.org/abs/2302.05537
    kind: paper
  - title: J. Gilmer, A constant lower bound for the union-closed sets conjecture
    url: https://arxiv.org/abs/2211.09055
    kind: paper
timeline:
  - date: 2022-03-31
    title: Kahn-Kalai conjecture proved
    body: Park and Pham prove that the threshold of an increasing property is at most a logarithmic factor above its expectation threshold.
    source: https://arxiv.org/abs/2203.17207
  - date: 2022-11-16
    title: Gilmer's constant bound for union-closed sets
    body: An information-theoretic argument shows that every nonempty union-closed family has an element in at least a $0.01$ fraction of its sets, the first constant lower bound.
    source: https://arxiv.org/abs/2211.09055
  - date: 2023-03-16
    title: Exponential improvement for diagonal Ramsey
    body: Campos, Griffiths, Morris and Sahasrabudhe prove $R(k)\le(4-\varepsilon)^k$ (arXiv v1; Annals of Mathematics 203, 2026).
    source: https://arxiv.org/abs/2303.09521
  - date: 2025-05-19
    title: New lower bound for R(3,k)
    body: The lower bound improves from $(1/4+o(1))k^2/\log k$ to $(1/3+o(1))k^2/\log k$, disproving a conjecture that the earlier constant was sharp.
    source: https://arxiv.org/abs/2505.13371
explainer:
  oneLine: How large can a structure get before a given pattern is forced to appear?
  flow:
    - Ask how large a structure can avoid a pattern
    - Large enough structures force the pattern
    - Random constructions give lower bounds
    - Entropy and algorithms tighten upper bounds
  glossary:
    - term: extremal combinatorics
      meaning: The study of how large a discrete structure can be while avoiding a given pattern.
      link: https://en.wikipedia.org/wiki/Extremal_combinatorics
    - term: Ramsey theory
      meaning: The study of how large a structure must be before some regular pattern is guaranteed to appear.
      link: https://en.wikipedia.org/wiki/Ramsey_theory
    - term: Ramsey number
      meaning: The smallest size of a group in which a given pattern is forced to appear in any colouring.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: Turan's theorem
      meaning: A result giving the most edges a graph can have without containing a complete subgraph of a given size.
      link: https://en.wikipedia.org/wiki/Tur%C3%A1n%27s_theorem
    - term: probabilistic method
      meaning: Proving something exists by showing a random choice works with positive probability.
      link: /research/probabilistic-method
    - term: entropy
      meaning: A measure of how uncertain or spread out a random object is.
      link: https://en.wikipedia.org/wiki/Entropy_(information_theory)
    - term: Lovasz Local Lemma
      meaning: A tool showing no bad event happens when each is unlikely and depends on few others.
      link: https://en.wikipedia.org/wiki/Lov%C3%A1sz_local_lemma
    - term: hypergraph container
      meaning: A technique that groups all structures avoiding a pattern into a small number of simple families.
      link: https://en.wikipedia.org/wiki/Hypergraph_container_method
    - term: set system
      meaning: A collection of subsets of some ground set, studied for their intersections and unions.
      link: https://en.wikipedia.org/wiki/Family_of_sets
    - term: Erdos-Ko-Rado theorem
      meaning: A result bounding the size of a family of equal-size sets in which every two sets overlap.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Ko%E2%80%93Rado_theorem
    - term: monochromatic
      meaning: All of one colour; for example a triangle whose three edges are all red.
      link: https://en.wikipedia.org/wiki/Monochromatic_triangle
    - term: union-closed sets conjecture
      meaning: The conjecture that if a family of sets contains the union of any two of its members, some element lies in at least half the sets.
      link: https://en.wikipedia.org/wiki/Union-closed_sets_conjecture
  readFirst:
    - title: Ramsey's theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
      why: The party problem and its generalizations.
    - title: Theorem on friends and strangers - Wikipedia
      url: https://en.wikipedia.org/wiki/Theorem_on_friends_and_strangers
      why: The six-guest puzzle explained step by step.
    - title: Extremal combinatorics - Wikipedia
      url: https://en.wikipedia.org/wiki/Extremal_combinatorics
      why: Overview of the field and its famous theorems.
    - title: Probabilistic method (research entry)
      url: /research/probabilistic-method
      why: The main tool for the field's lower bounds.
site:
  published: true
  aiReviewed: true
---

## What the field studies

Extremal combinatorics asks questions of the form: how large can a graph, set system or sequence be if it avoids a given configuration? Turán's theorem (1941) for cliques in graphs and the Erdős-Ko-Rado theorem for intersecting families are the prototypes. Ramsey theory asks the dual question: how large must a structure be to force a pattern? Typical answers are asymptotic, with upper and lower bounds that differ by constant, polynomial or even exponential factors.

## The probabilistic method

Erdős's 1947 lower bound for Ramsey numbers, $R(k)>2^{k/2}$ (up to polynomial factors), is the first major application: colour the edges randomly and show that a good colouring exists by a counting argument. The method is a constant theme: random graphs, random greedy and nibble processes (Rödl; Frankl-Rödl; Pippenger), the Lovász Local Lemma, and container theorems (Balogh-Morris-Samotij; Saxton-Thomason) for counting structures with forbidden patterns. In the other direction, constructions that beat random ones are rare and prized.

## Entropy and information-theoretic methods

Entropy gives a quantitative way to track how much "information" a random object contains. It has been used for counting problems since Shearer's lemma, and more recently for Gilmer's 2022 breakthrough on the union-closed sets conjecture, where it replaced the combinatorial arguments that had given only logarithmic bounds for decades.

## Recent progress

- **Ramsey numbers.** Campos, Griffiths, Morris and Sahasrabudhe (2023) proved $R(k)\le(4-\varepsilon)^k$, the first exponential improvement over Erdős and Szekeres (1935). For fixed small first argument, $R(3,k)$ now has lower bound $(1/3+o(1))k^2/\log k$ (Campos, Jenssen, Michelen and Sahasrabudhe, 2025), within a factor of 3 of the upper bound, and Mattheus and Verstraete (2023) determined $r(4,t)$ up to a $\log^2 t$ factor.
- **Thresholds.** Park and Pham (2022) proved the Kahn-Kalai expectation-threshold conjecture: the threshold for a monotone property is at most the "expectation threshold" times a logarithmic factor.
- **Arithmetic progressions.** Kelley and Meka (2023) proved that subsets of $\{1,\dots,N\}$ of density $2^{-O((\log N)^{c})}$ contain three-term arithmetic progressions, a quasi-polynomial improvement over previous bounds.
- **Set systems.** The union-closed sets conjecture is open. Gilmer's method lifted the best constant from a bound decaying like $1/\log_2|\mathcal F|$ to about $0.38$ in 2022–23, and computer-assisted 2026 preprints push it to about $0.38289$.

## The role of computers and AI

Recent years have seen computer-assisted and, more recently, AI-assisted results: Lean and Isabelle formalizations of the Ramsey upper bound, computer-aided upper bounds on small Ramsey numbers (for example $R(5,5)\le46$, Angeltveit and McKay, 2024), and AI-produced work on Erdős problems in 2026. Some of it is formally verified, and none of the large 2026 releases (from OpenAI in August and October 2026) has yet been refereed. Since extremal combinatorics has short, elementary statements and abundant open problems, it is a natural testing ground for these tools.

## Open directions

The central open questions are the exponential growth rate of $R(k)$, whether the union-closed constant can reach $1/2$, the true order of $R(3,k)$, and sharp bounds in Turán-type problems for hypergraphs. Many of these also appear in Erdős's problem lists, where they are tracked on the Erdős problems website.

# Plain explanation

Suppose you invite guests to a party. How many do you need to invite to be sure that either three of them all know each other or three of them are all strangers? The answer is six. This is the flavour of extremal combinatorics: when a structure gets big enough, certain patterns cannot be avoided, even if you try.

The field asks two kinds of question. One is how big can a structure be if it avoids a forbidden pattern. For example, how many handshakes can occur among a group without any three people forming a triangle of mutual handshakes? The other is the flip side, how big must a structure be to force a pattern. This second kind is called Ramsey theory.

Typical answers are not exact. They are bounds: the true value is between a lower limit and an upper limit, and the two can be far apart. Many of the best lower limits come from a surprising trick: choose the structure at random and show that, with positive probability, it works.

This matters because the same questions turn up in computer science, in the design of networks, and in the study of how much order must appear in large data. Many of its problems, some carrying cash prizes from Paul Erdős, are easy to state yet still unsolved.

The party analogy hides a difficulty: the numbers grow explosively. Exact answers are known for only tiny cases, and even those can require serious computer search.

# Student explanation

Extremal combinatorics studies questions like: _how large can a graph, set system or sequence be if it avoids a given configuration?_ **Turán's theorem** (1941) gives the maximum number of edges in a graph with no complete subgraph $K_r$. The **Erdős–Ko–Rado theorem** gives the largest family of $k$-element sets in which any two intersect. **Ramsey theory** asks the dual question: how large must a structure be to _force_ a pattern? **Ramsey's theorem** says that for every $k$ there is a number $R(k)$ such that any red–blue colouring of the edges of the complete graph on $R(k)$ vertices contains $k$ vertices all of whose edges have the same colour. Known values are tiny ($R(3)=6$, $R(4)=18$), and the growth rate is only known up to an exponential gap: roughly between $(\sqrt2)^k$ and $3.8^k$.

**The probabilistic method** is the first and most important tool. Erdős's 1947 argument colours edges randomly and shows that, with positive probability, there is no monochromatic $K_k$ when $n$ is slightly less than $2^{k/2}$, giving $R(k)>2^{k/2}$ up to polynomial factors. Variants include the Lovász Local Lemma, the _nibble_ (random greedy) methods of Rödl and others, and **container theorems** that count structures avoiding a forbidden pattern. Constructions that beat random ones are rare and prized; one example is the 2023 lower bound for the off-diagonal Ramsey number $r(4,t)$ by Mattheus and Verstraete, which takes a random piece of an algebraic (non-random) graph.

**Entropy and information theory** have become another central tool. Entropy measures uncertainty, and bounding it for a random object in two ways can prove inequalities about counts. A striking example is Gilmer's 2022 breakthrough on the union-closed sets conjecture, which showed that some element lies in a fixed fraction of the sets (now about $0.38$; the conjecture asks for $1/2$).

**Iterative algorithms** have also helped. The 2023 proof by Campos, Griffiths, Morris and Sahasrabudhe that diagonal Ramsey numbers satisfy $R(k)\le(4-\varepsilon)^k$ uses a procedure that builds structure step by step (the _book algorithm_). It was the first exponential improvement on a bound from 1935.

**Algebraic methods** matter too. The polynomial (slice-rank) method of Croot–Lev–Pach and Ellenberg–Gijswijt gave the first exponentially smaller upper bound for cap sets in 2016, using the algebra of low-degree polynomials in place of counting; the exact growth rate is still open.

The entry sits beside the probabilistic method and graph minor entries and collects the problems where a gap between lower and upper bounds is the main obstacle: Ramsey numbers, sunflowers, cap sets, union-closed sets, and Erdős–Szekeres-type questions.
