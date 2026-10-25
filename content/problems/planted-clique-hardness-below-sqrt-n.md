---
type: problem
slug: planted-clique-hardness-below-sqrt-n
title: "Planted clique at k = n^(1/2−ε): hardness beyond low-degree polynomials and sum-of-squares"
entry: computational-complexity
status: PARTIAL
origin: "Jerrum (1992), Kučera (1995); polynomial-time threshold k = Θ(√n): Alon–Krivelevich–Sudakov (1998)"
ratings:
  difficulty: 64
  applicationValue: 20
  leverage: 58
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Barak et al.: A Nearly Tight Sum-of-Squares Lower Bound for the Planted Clique Problem"
    url: https://arxiv.org/abs/1604.03084
  - title: "Wein: Computational Complexity of Statistics: New Insights from Low-Degree Polynomials"
    url: https://arxiv.org/abs/2506.10748
  - title: "Brennan, Bresler, Huleihel: Reducibility and Computational Lower Bounds for Problems with Planted Sparse Structure"
    url: https://arxiv.org/abs/1806.07508
  - title: "Mardia, Verchand, Wein: Low-degree phase transitions for detecting a planted clique in sublinear time"
    url: https://arxiv.org/abs/2402.05451
links:
  - to: lwe-quantum-hardness
    kind: RELATED
    note: Both are average-case problems whose hardness is assumed for statistics or cryptography without a worst-case NP-hardness proof; LWE has worst-case lattice reductions, planted clique has none.
timeline:
  - date: 2016-04-11
    title: Nearly tight SoS lower bound
    body: Barak et al. proved that degree-d sum-of-squares fails to refute the absence of a clique of size n^(1/2 − c√(d/log n)), which is n^(1/2−o(1)) for d = o(log n).
    source: https://arxiv.org/abs/1604.03084
  - date: 2018-06-19
    title: Reductions from planted clique
    body: Brennan, Bresler and Huleihel derived computational lower bounds for many planted-structure problems from planted clique.
    source: https://arxiv.org/abs/1806.07508
  - date: 2025-06-12
    title: Low-degree survey
    body: Wein surveys low-degree lower bounds, including the k ≈ √n detection threshold for planted clique, and lists open questions.
    source: https://arxiv.org/abs/2506.10748
explainer:
  oneLine: A hidden clique in a random network is easy to spot above a size threshold and seems hard below it.
  flow:
    - Plant a clique in a random network
    - "Large cliques: simple methods find them"
    - "Just below √n: no method known"
    - Hardness only shown for limited methods
    - "Open: derive hardness from a standard assumption"
  glossary:
    - term: clique
      meaning: A group of nodes in which every pair is directly linked.
      link: https://en.wikipedia.org/wiki/Clique_problem
    - term: planted clique
      meaning: A clique secretly inserted into an otherwise random network, which a method must find or detect.
      link: https://en.wikipedia.org/wiki/Planted_clique
    - term: random graph
      meaning: A network where each possible link is present with some fixed probability, independently.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
    - term: spectral method
      meaning: A technique that extracts structure from a network using the eigenvalues and eigenvectors of its link table.
      link: https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors
    - term: sum-of-squares
      meaning: A powerful family of optimisation relaxations used both to design algorithms and to show limits on algorithms.
      link: https://en.wikipedia.org/wiki/Sum-of-squares_optimization
    - term: low-degree polynomials
      meaning: A restricted class of statistical tests whose failure is used as evidence that a task is hard for efficient methods.
      link: https://en.wikipedia.org/wiki/Planted_clique
    - term: average-case hardness
      meaning: Difficulty on typical random inputs, as opposed to the hardest possible inputs.
      link: https://en.wikipedia.org/wiki/Planted_clique
    - term: NP-hard
      meaning: At least as hard as every problem in NP; planted clique is not known to be NP-hard.
      link: https://en.wikipedia.org/wiki/NP-hardness
    - term: reduction
      meaning: A way to turn one problem into another so a method for the second solves the first.
      link: https://en.wikipedia.org/wiki/Reduction_(complexity)
    - term: stochastic block model
      meaning: A random network with hidden communities, where links are more likely inside a community; finding the communities is a standard test task.
      link: https://en.wikipedia.org/wiki/Stochastic_block_model
    - term: information-theoretic threshold
      meaning: The point beyond which a task is possible at all with unlimited computing time, regardless of efficiency.
      link: https://en.wikipedia.org/wiki/Planted_clique
  readFirst:
    - title: Planted clique (Wikipedia)
      url: https://en.wikipedia.org/wiki/Planted_clique
      why: A short account of the model and thresholds.
    - title: Clique problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Clique_problem
      why: Background on cliques and why finding them is hard in general.
    - title: Sum-of-squares optimization (Wikipedia)
      url: https://en.wikipedia.org/wiki/Sum-of-squares_optimization
      why: The main tool used to show limits for this problem.
site:
  aiReviewed: true
---

In $G(n,1/2)$ plant a clique on $k$ uniformly random vertices. Detecting the plant (distinguishing from $G(n,1/2)$) is information-theoretically possible once $k\ge(2+\varepsilon)\log_2 n$, and exact recovery when $k\ge 2\log_2 n$ is possible in time $n^{O(\log n)}$ by brute force. Polynomial-time algorithms exist for $k\ge c\sqrt n$ (spectral methods; Alon, Krivelevich and Sudakov 1998) and no polynomial-time algorithm is known for $k=n^{1/2-\varepsilon}$, any fixed $\varepsilon>0$. _Show that for every $\varepsilon>0$, detecting a planted clique of size $n^{1/2-\varepsilon}$ is hard for polynomial time under a standard worst-case or cryptographic assumption (or give a polynomial-time algorithm)._ Evidence of hardness today comes from restricted algorithm classes: degree-$O(\log n)$ polynomials, sum-of-squares of degree $O(\log n)$, statistical queries, and the overlap-gap property for local algorithms.

# State of the art

**Algorithmic upper bounds.** Alon, Krivelevich and Sudakov (Random Structures & Algorithms 1998) found cliques of size $c\sqrt n$ by spectral methods; Feige and Krauthgamer, and Dekel, Gurel-Gurevich and Peres (2014) gave variants. Nothing polynomial-time is known below $\sqrt n$.

**Restricted-model lower bounds.** Barak, Hopkins, Kelner, Kothari, Moitra and Potechin (FOCS 2016, arXiv:1604.03084) proved a nearly tight sum-of-squares lower bound: degree-$d$ SoS fails when $k\le n^{1/2-c(d/\log n)^{1/2}}$ roughly, matching the threshold up to lower-order terms. Hopkins' 2018 thesis and Wein's survey (arXiv:2506.10748, 2025) put the detection threshold for degree-$O(\log n)$ polynomials at $k\approx\sqrt n$; the behaviour at $k=c\sqrt n$ for constant $c$ is not fully worked out. Mardia, Verchand and Wein (COLT 2024) characterise non-adaptive low-degree algorithms in sublinear time. A 2026 preprint (arXiv:2604.07278, unrefereed) extends the SoS lower bound to several disjoint planted cliques of total size $kt\le n^{1/2-c\sqrt{d/\log n}}$ and proves a statistical-query lower bound for planted bicliques. No reduction from a standard assumption was found as of October 2026.

**Reductions.** Planted clique is the base problem for average-case reductions to sparse PCA, stochastic block models, tensor PCA and others (Berthet–Rigollet 2013; Brennan–Bresler–Huleihel 2018). It is not known to be NP-hard, and each of these reductions assumes the planted clique conjecture.

# Applications

A proof of hardness from a standard assumption would put a large literature of statistical-computational gaps (sparse PCA, community detection, tensor problems, certain cryptographic primitives based on planted structures) on firm ground; a polynomial-time algorithm below $\sqrt n$ would overturn the heuristic picture that low-degree hardness predicts computational hardness.

# Resolution criteria

(a) A reduction from a standard problem (for example worst-case lattice or hidden-structure assumptions, or a well-studied average-case problem) establishing hardness of detection at $k=n^{1/2-\varepsilon}$ for every $\varepsilon>0$; or (b) a polynomial-time algorithm for some $\varepsilon>0$. A proof of hardness against a significantly broader class than low-degree and SoS (for example all constant-depth algorithms or all local algorithms) would be partial progress.

# Rating rationale

An unusually precise open question: the threshold is known on the algorithmic side and matched by several restricted-model lower bounds, but no reduction from a standard assumption exists, and such reductions are widely thought to need new ideas (average-case-to-worst-case barriers). Application value is modest, mostly guiding which statistical tasks are tractable. Leverage is relatively high because dozens of average-case hardness results use it as a base assumption.

# Work mix rationale

Pure proof/reduction work; numerical experiments only probe small cases.

# Verification

The target is a reduction from a standard problem showing hardness of planted-clique detection at k = n^(1/2-eps), or a polynomial-time algorithm. This is average-case complexity, with no Mathlib framework, so experts review the reduction. Hardness against low-degree and sum-of-squares algorithms is already known, and a result against a broader class would be partial progress.

# Plain explanation

Make a random network of n people, where each pair is linked by a coin flip. Now secretly pick k people and link every pair among them, so they form a tight clique. Can you tell that a clique was planted, or find it?

If k is large, around the square root of n or more, simple methods work: the clique leaves a visible trace. If k is very small, around twice the logarithm of n or less, no method can work, because a clique that size appears by chance anyway. In between, a slow brute-force search can find the clique, but the best fast methods stop working just below the square root of n.

The open problem: show this is genuinely hard. Today, hardness is shown only against specific families of methods, like certain statistical tests and mathematical relaxations. It has not been derived from a standard assumption. Planted clique is not even known to be NP-hard, since the instances are random.

Why care? Dozens of statistics and machine-learning tasks, such as finding communities in networks, are tied to planted clique by reductions: if planted clique is as hard as believed, so are they. Many results about gaps between what can be learned in principle and what can be learned efficiently rest on that assumption.

The analogy: spotting a small group of close friends in a huge crowd where everyone knows half the others at random.

# Student explanation

**The model.** Sample a graph from $G(n,1/2)$ (each pair is an edge independently with probability $1/2$) and plant a clique on $k$ uniformly random vertices. _Detection_ means distinguishing this from a plain $G(n,1/2)$. _Recovery_ means finding the clique.

**Thresholds.**

- Information-theoretically, detection is possible once $k\ge(2+\varepsilon)\log_2 n$, since a random graph has no clique much larger than $2\log_2 n$. Exact recovery for $k\ge2\log_2 n$ is possible in time $n^{O(\log n)}$ by exhaustive search.
- Polynomial-time algorithms exist for $k\ge c\sqrt n$ (spectral methods; Alon, Krivelevich and Sudakov 1998; Feige and Krauthgamer; Dekel, Gurel-Gurevich and Peres 2014).
- Below $\sqrt n$ no polynomial-time algorithm is known, for $k=n^{1/2-\varepsilon}$ with any fixed $\varepsilon>0$.

**The problem.** Show that for every $\varepsilon>0$, detecting a planted clique of size $n^{1/2-\varepsilon}$ is hard for polynomial-time algorithms under a standard worst-case or cryptographic assumption (or give a polynomial-time algorithm).

**Evidence from restricted models.**

- _Sum-of-squares._ Barak, Hopkins, Kelner, Kothari, Moitra and Potechin (2016) proved a nearly tight lower bound: degree-$d$ sum-of-squares relaxations fail when $k$ is below roughly $n^{1/2-c(d/\log n)^{1/2}}$.
- _Low-degree polynomials._ Hopkins's 2018 thesis and Wein's survey put the detection threshold for degree-$O(\log n)$ polynomials at $k\approx\sqrt n$.
- Statistical-query algorithms and the overlap-gap property for local algorithms give further evidence.
- A 2026 preprint extends the sum-of-squares bound to several disjoint planted cliques (unrefereed).

**What is missing.** No reduction from a standard assumption has been found as of October 2026. Because the input is a random graph, NP-hardness arguments do not apply directly. This is what makes it a _conjecture-based_ foundation.

**Why it matters.** Planted clique is the base problem for average-case reductions to sparse PCA, stochastic block models, tensor PCA and other problems (Berthet–Rigollet 2013; Brennan, Bresler and Huleihel 2018). Each of those results assumes the planted clique conjecture. A proof of hardness would put a large literature on statistical–computational gaps on firm ground. A polynomial-time algorithm below $\sqrt n$ would overturn that literature.
