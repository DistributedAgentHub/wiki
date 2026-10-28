---
type: problem
slug: ramsey-r4t-logarithmic-gap
title: "Off-diagonal Ramsey r(4,t): closing the log² t gap between t³/log⁴ t and t³/log² t"
entry: extremal-combinatorics
status: PARTIAL
origin: Erdős and others; Ajtai–Komlós–Szemerédi, 1980
ratings:
  difficulty: 55
  applicationValue: 6
  leverage: 25
workMix:
  theory: 92
  engineering: 0
  compute: 8
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Mattheus, Verstraete: The asymptotics of r(4,t)"
    url: https://arxiv.org/abs/2306.04007
  - title: "Annals of Mathematics 199 (2024): The asymptotics of r(4,t)"
    url: https://annals.math.princeton.edu/2024/199-2/p08
  - title: "Bohman, Keevash: Dynamic concentration of the triangle-free process"
    url: https://arxiv.org/abs/1302.5963
  - title: "Fiz Pontiveros, Griffiths, Morris: The triangle-free process and the Ramsey number R(3,k)"
    url: https://arxiv.org/abs/1302.6279
  - title: "OpenAI: model-produced manuscripts, family 170 (r(s,t) for s ≥ 5; unrefereed)"
    url: https://github.com/openai/math
timeline:
  - date: 1980-01-01
    title: Ajtai–Komlós–Szemerédi upper bound
    body: r(4,t) = O(t³/log² t) (date approximate to the year).
    source: https://annals.math.princeton.edu/2024/199-2/p08
  - date: 2013-02-25
    title: Triangle-free process
    body: Determines the order of r(3,t).
    source: https://arxiv.org/abs/1302.6279
  - date: 2023-06-07
    title: Mattheus–Verstraete lower bound
    body: Raises the lower bound to t³/log⁴ t.
    source: https://arxiv.org/abs/2306.04007
explainer:
  oneLine: How large must a network be to contain either four mutual friends or t mutual strangers? Pin down the missing logarithmic factors.
  flow:
    - Need 4 mutual friends or t strangers
    - Size grows like t cubed, up to logs
    - Lower bound by a structured-plus-random graph
    - "Open: the exact power of log t"
  glossary:
    - term: Ramsey number
      meaning: The smallest size of a group in which a given pattern is forced to appear in any colouring.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: independent set
      meaning: A set of dots in a network with no lines between any two of them.
      link: https://en.wikipedia.org/wiki/Independent_set_(graph_theory)
    - term: clique
      meaning: A set of dots in a network in which every pair is joined by a line.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: off-diagonal Ramsey number
      meaning: A Ramsey number where the two required patterns have different sizes, such as 4 and t.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: pseudorandom graph
      meaning: A highly structured network that nonetheless behaves like a random one in many ways.
      link: https://en.wikipedia.org/wiki/Expander_graph
    - term: finite field
      meaning: A number system with finitely many elements, such as arithmetic modulo a prime.
      link: https://en.wikipedia.org/wiki/Finite_field
    - term: Hermitian unital
      meaning: A special geometric structure over a finite field, with points and blocks that meet in controlled ways.
      link: https://en.wikipedia.org/wiki/Unital_(geometry)
    - term: triangle-free process
      meaning: Adding random edges one at a time to a graph, skipping any that would form a triangle.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: Landau big-O and Omega
      meaning: Notation saying a quantity grows no faster than, or at least as fast as, a given expression.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: Diagonal Ramsey numbers
      meaning: The case where both required patterns have the same size.
      link: /research/extremal-combinatorics
  readFirst:
    - title: Ramsey's theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
      why: Background on all Ramsey numbers.
    - title: "Quanta: Mathematicians Discover New Way to Predict Structure in Graphs"
      url: https://www.quantamagazine.org/mathematicians-discover-new-way-to-predict-structure-in-graphs-20230622/
      why: Quanta's account of the Mattheus-Verstraete result.
    - title: Extremal and probabilistic combinatorics (research entry)
      url: /research/extremal-combinatorics
      why: The wider field.
raw:
  body: "Let r(4,t) be the least n such that every graph on n vertices contains a K_4 or an independent set of size t. Mattheus and Verstraete (2023) proved r(4,t) = Ω(t³/log⁴ t), and Ajtai, Komlós and Szemerédi (1980) proved r(4,t) = O(t³/log² t). Determine the power of log t, i.e. prove r(4,t) = t³/(log t)^(a+o(1)) for a specific a ∈ [2,4], or narrow the interval for a."
site:
  aiReviewed: true
---

# State of the art

**Partially resolved.** Before Mattheus–Verstraete the best lower bound was t^(5/2) up to logarithms (Bohman–Keevash, via the K_4-free process). Their construction (arXiv:2306.04007, Annals 199 (2024)) takes a random induced subgraph of a pseudorandom graph built from the Hermitian unital over a finite field, giving t³/log⁴ t. For r(3,t) the order t²/log t has been known since Kim (1995) and Ajtai–Komlós–Szemerédi, with the constant now within a small factor after the triangle-free process (Bohman–Keevash; Fiz Pontiveros–Griffiths–Morris) and later work. OpenAI's 6 October 2026 release (github.com/openai/math, family 170; unrefereed, with a Lean formalization listed) claims r(s,t) = t^(s−1)/(log t)^(s−2+o(1)) for every fixed s ≥ 5, matching the AKS upper bound; the claim explicitly excludes s = 4, which stays open between log² and log⁴.

# Applications

None directly. The constructions (algebraic pseudorandom graphs, random greedy processes such as the H-free process) are reused in extremal and probabilistic combinatorics.

# Resolution criteria

A proof that r(4,t) = Θ(t³/log^a t) for a definite a, or any improvement in the power of log, accepted after refereeing.

# Rating rationale

A log² t factor remains after a major 2023 construction, and the claimed s ≥ 5 results (if correct) suggest the AKS bound is the truth, so 55: research-grade, well below diagonal Ramsey (78). Application value 6 is indirect (pseudorandom constructions). Leverage 25: limited to Ramsey theory and algebraic pseudorandom graphs.

# Work mix rationale

Constructions in finite geometry and probabilistic analysis; computation helps search small cases.

# Verification

The target is r(4,t) = Θ(t³/log^a t) for a definite a, or a smaller power of log in the gap. Formal Conjectures (Formal Conjectures pinned at commit e754a78 (17 October 2026)) states only the solved lower bound ([ErdosProblems/166.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/ErdosProblems/166.lean), Mattheus–Verstraete, with a linked Lean proof of a weaker form), not the open exponent question. Referees check the proof.

# Plain explanation

This is a lopsided cousin of the party problem. Ask for four people who all know each other, or t people who are all strangers, where t is large. How many guests are enough to force one or the other?

The answer grows roughly like t cubed, up to some slowly growing factors involving logarithms. The question is exactly how much those logarithmic factors matter. One proof shows you need at least about t cubed divided by the logarithm of t to the fourth power. Another shows that about t cubed divided by the logarithm of t squared always suffices. The truth lies somewhere in between, and nobody knows where.

For a long time the best lower bound was much weaker: about t to the power two and a half. In 2023, Sam Mattheus and Jacques Verstraete closed most of the gap with a construction that is not purely random. They started from a very orderly network built from the geometry of finite fields, then took a random part of it.

The even simpler case, three mutual friends instead of four, has been understood much better for decades: the answer is about t squared divided by the logarithm of t, and the constant is known to within a small factor.

So the open problem is a polish step: not a new order of magnitude, but the exact power of the logarithm.

# Student explanation

**Definition.** Let $r(4,t)$ be the least $n$ such that every graph on $n$ vertices contains a $K_4$ (four mutually adjacent vertices) or an independent set of size $t$ (no two adjacent). Equivalently, 2-colour the edges red and blue; this is the Ramsey number for a red $K_4$ or a blue $K_t$.

**Known bounds.**

- Upper: Ajtai, Komlós and Szemerédi (1980) proved $r(4,t)=O(t^3/\log^2t)$.
- Lower: Mattheus and Verstraete (2023) proved $r(4,t)=\Omega(t^3/\log^4t)$.

So $r(4,t)=t^3/(\log t)^{a+o(1)}$ for some $a\in[2,4]$ if the exponent exists. The problem: determine $a$, or narrow the interval.

**History of the lower bound.** Before 2023 the best lower bound was about $t^{5/2}$ (up to logs), from the $K_4$-free process (Bohman and Keevash): a random graph process in which edges are added one at a time, except those that would create a $K_4$. The new construction (Annals 2024) takes a random induced subgraph of a _pseudorandom_ graph built from the **Hermitian unital** over a finite field, an algebraic structure with strong control on small subgraphs. The key idea is that structured objects can beat purely random ones, which is rare.

**The triangle case.** For $r(3,t)$ the order of magnitude $t^2/\log t$ has been known since Kim (1995), with Ajtai–Komlós–Szemerédi giving the upper bound. The constant is now within a small factor, thanks to the **triangle-free process** (Bohman–Keevash; Fiz Pontiveros–Griffiths–Morris) and later work. The $r(4,t)$ case is more complex because $K_4$ has more structure than a triangle, and the random-graph approach loses extra logarithmic factors.

**Why the log gap is hard.** The upper bound comes from Ajtai–Komlós–Szemerédi's theorem that graphs with few triangles have large independent sets; the lower bound comes from a construction. They balance differently, and closing the gap would require either a better construction (adding more pseudorandom structure) or a sharper counting argument. It is not clear whether a better analysis of the algebraic construction, or a different idea altogether, is needed.

**Unrefereed claims.** An October 2026 OpenAI release claims the exact log power for $r(s,t)$ for every fixed $s\ge5$, with a Lean formalization listed. It is unrefereed and explicitly excludes $s=4$, which stays open.

The problem is marked partially resolved: the order of magnitude up to polylogarithmic factors is known; the exact logarithmic exponent is not.
