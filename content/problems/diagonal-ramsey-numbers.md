---
type: problem
slug: diagonal-ramsey-numbers
title: "Exponential rate of diagonal Ramsey numbers: closing the gap between (√2)^k and 3.8^k"
entry: extremal-combinatorics
status: PARTIAL
origin: Ramsey, 1930; Erdős–Szekeres, 1935
ratings:
  difficulty: 78
  applicationValue: 7.5
  leverage: 46
workMix:
  theory: 88
  engineering: 2
  compute: 10
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Campos, Griffiths, Morris, Sahasrabudhe: An exponential improvement for diagonal Ramsey (Annals)"
    url: https://annals.math.princeton.edu/2026/203-3/p04
  - title: "Gupta, Ndiaye, Norin, Wei: Optimizing the CGMS upper bound"
    url: https://arxiv.org/abs/2407.19026
  - title: "Balister et al.: Upper bounds for multicolour Ramsey numbers"
    url: https://arxiv.org/abs/2410.17197
  - title: "Erdős Problems #77"
    url: https://www.erdosproblems.com/77
  - title: Campos, Griffiths, Morris, Sahasrabudhe (arXiv)
    url: https://arxiv.org/abs/2303.09521
  - title: "Lu, Wang: Retained-set descent for diagonal Ramsey numbers (unrefereed)"
    url: https://arxiv.org/abs/2609.14525
links:
  - to: ramsey-r4t-logarithmic-gap
    kind: RELATED
    note: Both locate the order of magnitude of Ramsey numbers; random and algebraic pseudorandom constructions compete in both.
timeline:
  - date: 1947-01-01
    title: Erdős probabilistic lower bound
    body: R(k) > (√2)^k (date approximate to the year).
    source: https://www.erdosproblems.com/77
  - date: 2023-03-16
    title: Exponential improvement of Erdős–Szekeres
    body: Campos–Griffiths–Morris–Sahasrabudhe.
    source: https://arxiv.org/abs/2303.09521
  - date: 2024-07-26
    title: Base lowered to about 3.8
    body: Gupta–Ndiaye–Norin–Wei.
    source: https://arxiv.org/abs/2407.19026
  - date: 2026-09-13
    title: Preprint claiming base 3.69507
    body: Lu–Wang, unrefereed, with Lean checks.
    source: https://arxiv.org/abs/2609.14525
explainer:
  oneLine: How big must a group be to force k people who all know each other or all are strangers? The growth rate is still unknown.
  flow:
    - How many guests force a clique or strangers?
    - Random colourings give a lower bound
    - Step-by-step arguments give an upper bound
    - Gap between 1.41 and 3.8 per guest remains
  glossary:
    - term: Ramsey number
      meaning: The smallest size of a group in which a given pattern is forced to appear in any colouring.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: complete graph
      meaning: A graph in which every pair of dots is joined by a line.
      link: https://en.wikipedia.org/wiki/Complete_graph
    - term: monochromatic
      meaning: All of one colour.
      link: https://en.wikipedia.org/wiki/Ramsey_theory
    - term: probabilistic method
      meaning: Proving something exists by showing a random choice works with positive probability.
      link: /research/probabilistic-method
    - term: Lovasz Local Lemma
      meaning: A tool showing no bad event happens when each is unlikely and depends on few others.
      link: https://en.wikipedia.org/wiki/Lov%C3%A1sz_local_lemma
    - term: exponential growth rate
      meaning: The factor by which a quantity multiplies each time its input goes up by one.
      link: https://en.wikipedia.org/wiki/Exponential_growth
    - term: limit
      meaning: The value a sequence approaches as it goes on forever.
      link: https://en.wikipedia.org/wiki/Limit_of_a_sequence
    - term: binomial coefficient
      meaning: The number of ways to choose k items from n, often written n choose k.
      link: https://en.wikipedia.org/wiki/Binomial_coefficient
    - term: Erdos-Szekeres bound
      meaning: The 1935 upper bound on Ramsey numbers of about 4 to the power k.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: Extremal combinatorics
      meaning: The study of how large a structure can be while avoiding a given pattern.
      link: /research/extremal-combinatorics
    - term: book (graph)
      meaning: A clique called the spine plus many extra vertices each joined to every spine vertex; the key object in the 2023 proof.
      link: https://en.wikipedia.org/wiki/Book_(graph_theory)
  readFirst:
    - title: Ramsey's theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
      why: Definition, small values and known bounds.
    - title: Theorem on friends and strangers - Wikipedia
      url: https://en.wikipedia.org/wiki/Theorem_on_friends_and_strangers
      why: The six-guest case worked out.
    - title: Probabilistic method (research entry)
      url: /research/probabilistic-method
      why: The main idea behind the lower bound.
raw:
  body: "Let R(k) be the least n such that every 2-colouring of the edges of K_n contains a monochromatic K_k. Determine the exponential growth rate lim R(k)^(1/k), and prove it exists. The known bounds are √2 ≤ liminf R(k)^(1/k) ≤ limsup R(k)^(1/k) ≤ 3.7992…, the upper bound from Gupta–Ndiaye–Norin–Wei's optimization of the Campos–Griffiths–Morris–Sahasrabudhe argument. A thesis-scale target is any improvement of either base: a construction beating √2, or an upper base below 3.7992 by a method that goes beyond the book algorithm. Erdős offered $100 for a proof that the limit exists."
site:
  aiReviewed: true
---

# State of the art

**Partially resolved: an exponential gap remains.** Erdős's 1947 random colouring gives R(k) > (1+o(1)) k 2^(k/2)/(e√2); Spencer (1975) doubled the constant with the Lovász Local Lemma. No improvement of the base √2 is known. The upper bound R(k) ≤ C(2k−2, k−1) ≈ 4^k of Erdős and Szekeres (1935) was improved only by subexponential factors until Campos, Griffiths, Morris and Sahasrabudhe (arXiv 2023; Annals 203 (2026)) proved R(k) ≤ (4−ε)^k via a 'book algorithm'. Gupta, Ndiaye, Norin and Wei (arXiv 2024, revised August 2026) optimized the argument to R(k) ≤ 3.8^(k+o(k)); the Erdős problems database records the base as 3.7992…. Balister et al. (2024) gave a shorter proof extending to more colours. A preprint by Lu and Wang (arXiv:2609.14525, 13 September 2026; unrefereed, with Lean 4 and Python certificate checks) claims R(k) ≤ 3.69507^k for large k by a 'retained-set descent' that still starts from a book-type bound. Small values remain open: 43 ≤ R(5,5) ≤ 46 (upper bound Angeltveit–McKay, arXiv:2409.15709).

# Applications

None directly. Ramsey bounds calibrate probabilistic and book-type arguments in extremal combinatorics and underlie pseudorandomness lower bounds.

# Resolution criteria

A refereed proof that lim R(k)^(1/k) exists and equals a determined constant, or any refereed improvement of the base √2 or 3.7992…. The unrefereed 3.69507 claim counts only once verified.

# Rating rationale

Restored to the calibrated 78/7.5/46 (the draft lowered difficulty to 74 without a reason): the book algorithm broke the upper bound, but the lower base has stood since 1947 and even existence of the limit is open. It sits above sunflowers (71) and r(4,t) (55) and below abc (85). Application value 7.5 is indirect (pseudorandomness); leverage 46 reflects its central place in extremal combinatorics.

# Work mix rationale

New combinatorial ideas, with computer help to optimize parameters and verify.

# Verification

Statement: `Erdos77.erdos_77` in [ErdosProblems/77.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/ErdosProblems/77.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)): R(k)^(1/k) converges, to a value left open as `erdos_77.answer`, with `SimpleGraph.diagonalRamsey` from the corpus' Ramsey helpers (FormalConjecturesForMathlib/Combinatorics/SimpleGraph/Ramsey.lean). Improvements of either base (above √2, below 3.7992) are not yet stated in the corpus; they are written against the same definition as eventual bounds `c^k ≤ diagonalRamsey k` or `diagonalRamsey k ≤ c^k` and checked the same way. Accept when the Lean proof compiles against the pinned corpus and passes Comparator; the unrefereed 3.69507 claim counts only once verified.

# Plain explanation

At a party of six people, there must be three who all know each other or three who are all strangers. With five people that is not guaranteed. So six is the smallest party size that forces a group of three of one kind. These threshold sizes are called Ramsey numbers.

Now ask the same question for groups of k people, with k large. How many guests do you need to guarantee k mutual friends or k mutual strangers? The number grows astonishingly fast. Even for k equal to five, the exact answer is not known.

So mathematicians study how fast the number grows. The best lower estimate, found by Paul Erdős in 1947 by a random-choice argument, says the growth is at least about 1.41 times larger for each extra person. The best upper estimate, which stood essentially unchanged for almost ninety years, was about 4 times for each extra person. In 2023, a team led by Marcelo Campos, Simon Griffiths, Robert Morris and Julian Sahasrabudhe proved the first exponential improvement. Later work brought the upper factor down to about 3.8.

The gap between roughly 1.41 and 3.8 is still huge. Nobody even knows whether the true growth settles to a single rate.

The party picture is nice, but note that the lower bound proof gives no way to build the bad party; it only shows one exists. Finding an actual construction that beats the random one is a separate, unsolved challenge.

# Student explanation

**Definition.** The **Ramsey number** $R(k)$ is the least $n$ such that every red–blue colouring of the edges of the complete graph $K_n$ contains a monochromatic $K_k$ (a set of $k$ vertices with all edges the same colour). The problem is to determine the exponential growth rate $\lim R(k)^{1/k}$, and prove it exists. Known bounds are $\sqrt2\le\liminf R(k)^{1/k}\le\limsup R(k)^{1/k}\le3.7992\ldots$, where the upper bound is from Gupta, Ndiaye, Norin and Wei's optimization of the argument of Campos, Griffiths, Morris and Sahasrabudhe. Erdős offered \$100 for a proof that the limit exists.

**Lower bounds.** Erdős's 1947 **probabilistic method** colours each edge independently at random. The expected number of monochromatic $k$-sets is $\binom nk2^{1-\binom k2}$, which is below $1$ when $n$ is a little under $2^{k/2}$. So some colouring has none, and $R(k)>(1+o(1))\frac{k}{e\sqrt2}2^{k/2}$. Spencer (1975) used the Lovász Local Lemma to double the constant. **No improvement of the base $\sqrt2$ is known**, in 75 years. In particular, no explicit construction (not just random) achieves $(\sqrt2)^k$ or anything exponentially large.

**Upper bounds.** Erdős and Szekeres (1935) showed $R(k)\le\binom{2k-2}{k-1}\approx4^k$ by an induction: pick a vertex and look at its neighbours in the majority colour. For decades only sub-exponential factors were gained. Then Campos–Griffiths–Morris–Sahasrabudhe (arXiv 2023; Annals 2026) proved $R(k)\le(4-\varepsilon)^k$ with a **book algorithm**: instead of growing a monochromatic clique one vertex at a time, it builds a _book_, a red clique (the spine) together with a large set of vertices joined in red to all of it (the pages), while carefully tracking how edge densities change. Gupta et al. refined the argument to $3.8^{k+o(k)}$; the Erdős problems database records the base as $3.7992\ldots$. Balister and coauthors (2024) gave a shorter proof extending to more colours.

**Why the gap is hard.** The two sides use different worlds: random colourings for the lower bound, and a density-increment argument for the upper bound. To raise the lower base, one would need a structured colouring better than random, which would be a rare case of beating the probabilistic method. To lower the upper base substantially, one probably needs ideas beyond the book algorithm. An unrefereed September 2026 preprint (Lu and Wang, with computer-checked certificates) claims $R(k)\le3.69507^k$ for large $k$ by a refinement that still starts from a book-type bound.

**Thesis-scale targets.** A construction beating $\sqrt2$, or an upper base below $3.7992$ by a method going beyond the book algorithm. Small values are also open: $43\le R(5,5)\le46$. Related problems on this site include off-diagonal Ramsey numbers.
