---
type: entry
slug: probabilistic-method
title: The probabilistic method and concentration of measure
field: combinatorics
kind: THEORY
status: ACTIVE
summary: "Proving existence by random construction: moments, alteration, the Lovász Local Lemma, martingale and Talagrand concentration, entropy and hypergraph containers, with uses in combinatorics and complexity."
reliedOn: "The extremal problems here depend on it: diagonal Ramsey numbers, the logarithmic gap for R(4,t), union-closed sets, the sunflower conjecture and Erdős–Hajnal. Complexity theory (PCP, communication complexity, planted clique) uses the same tools."
references:
  - title: N. Alon and J. H. Spencer, The Probabilistic Method (4th ed.), Wiley
    url: https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953
    kind: book
  - title: "S. Boucheron, G. Lugosi and P. Massart, Concentration Inequalities: A Nonasymptotic Theory of Independence, Oxford University Press"
    url: https://doi.org/10.1093/acprof:oso/9780199535255.001.0001
    kind: book
  - title: M. Molloy and B. Reed, Graph Colouring and the Probabilistic Method, Springer
    url: https://doi.org/10.1007/978-3-642-04016-0
    kind: book
  - title: R. A. Moser and G. Tardos, A constructive proof of the general Lovász Local Lemma (arXiv:0903.0544)
    url: https://arxiv.org/abs/0903.0544
    kind: paper
  - title: J. Balogh, R. Morris and W. Samotij, Independent sets in hypergraphs (arXiv:1204.6530)
    url: https://arxiv.org/abs/1204.6530
    kind: paper
  - title: D. Saxton and A. Thomason, Hypergraph containers (arXiv:1204.6595)
    url: https://arxiv.org/abs/1204.6595
    kind: paper
  - title: J. Gilmer, A constant lower bound for the union-closed sets conjecture (arXiv:2211.09055)
    url: https://arxiv.org/abs/2211.09055
    kind: paper
  - title: R. Alweiss, S. Lovett, K. Wu and J. Zhang, Improved bounds for the sunflower lemma (arXiv:1908.08483)
    url: https://arxiv.org/abs/1908.08483
    kind: paper
timeline:
  - date: 2009-03-03
    title: Algorithmic Local Lemma
    body: Moser and Tardos showed that a simple resampling algorithm finds an assignment avoiding all bad events under the general LLL condition, in expected polynomial time.
    source: https://arxiv.org/abs/0903.0544
  - date: 2012-04-29
    title: Hypergraph container method
    body: Balogh–Morris–Samotij (and independently Saxton–Thomason, arXiv:1204.6595) proved container theorems for independent sets in hypergraphs. These give counting and sparse-random analogues of extremal theorems.
    source: https://arxiv.org/abs/1204.6530
  - date: 2019-08-22
    title: Improved sunflower bounds
    body: Alweiss, Lovett, Wu and Zhang improved the Erdős–Rado sunflower bound to about (log w)^w per set size, through a spread-family and random-set argument.
    source: https://arxiv.org/abs/1908.08483
  - date: 2022-11-16
    title: Entropy proof of a constant for union-closed sets
    body: Gilmer proved by an entropy argument that some element lies in at least a 0.01 fraction of the sets of any union-closed family. Follow-up work quickly raised the constant to about 0.38.
    source: https://arxiv.org/abs/2211.09055
  - date: 2023-03-16
    title: Exponential improvement for diagonal Ramsey
    body: Campos, Griffiths, Morris and Sahasrabudhe proved R(k,k) ≤ (4−ε)^k, the first exponential improvement on the Erdős–Szekeres upper bound.
    source: https://arxiv.org/abs/2303.09521
explainer:
  oneLine: Proving something exists by showing a random choice works with positive probability.
  flow:
    - Need an object with a property
    - Build one at random
    - Show success chance is above zero
    - So a good object exists
  glossary:
    - term: probability
      meaning: A number between 0 and 1 saying how likely an event is.
      link: https://en.wikipedia.org/wiki/Probability
    - term: Ramsey number
      meaning: The smallest size of a group in which some pattern is forced to appear, however it is arranged.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: union bound
      meaning: The chance that at least one of several events happens is at most the sum of their chances.
      link: https://en.wikipedia.org/wiki/Boole%27s_inequality
    - term: expected value
      meaning: The average outcome of a random quantity over many repetitions.
      link: https://en.wikipedia.org/wiki/Expected_value
    - term: variance
      meaning: A measure of how spread out a random quantity is around its average.
      link: https://en.wikipedia.org/wiki/Variance
    - term: Lovász Local Lemma
      meaning: A result that guarantees no bad event happens, if each is unlikely and depends on only a few others.
      link: https://en.wikipedia.org/wiki/Lov%C3%A1sz_local_lemma
    - term: concentration of measure
      meaning: The fact that a quantity depending on many small independent choices is almost always very near its average.
      link: https://en.wikipedia.org/wiki/Concentration_of_measure
    - term: non-constructive proof
      meaning: A proof that something exists without showing how to build or find it.
      link: https://en.wikipedia.org/wiki/Non-constructive_algorithm_existence_proofs
    - term: random graph
      meaning: A network in which each possible link is present with some probability, independently.
      link: https://en.wikipedia.org/wiki/Random_graph
    - term: complete graph
      meaning: A network in which every pair of dots is joined by a line.
      link: https://en.wikipedia.org/wiki/Complete_graph
    - term: monochromatic
      meaning: All of one colour; for example a triangle whose three edges are all red.
      link: https://en.wikipedia.org/wiki/Monochromatic_triangle
    - term: hypergraph
      meaning: A generalization of a network in which a single "edge" can join more than two dots.
      link: https://en.wikipedia.org/wiki/Hypergraph
  readFirst:
    - title: Probabilistic method - Wikipedia
      url: https://en.wikipedia.org/wiki/Probabilistic_method
      why: A readable list of the basic arguments with examples.
    - title: Ramsey's theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
      why: The problem where the method first shone.
    - title: Lovász local lemma - Wikipedia
      url: https://en.wikipedia.org/wiki/Lov%C3%A1sz_local_lemma
      why: The method's most famous refinement.
    - title: Concentration of measure - Wikipedia
      url: https://en.wikipedia.org/wiki/Concentration_of_measure
      why: The second half of the entry's title.
site:
  published: true
  aiReviewed: true
---

## What it is

The probabilistic method proves that an object exists by showing that a random construction has the desired property with positive probability. Concentration of measure supplies the quantitative input: Lipschitz functions of many independent variables are sharply concentrated. The method is now also a design principle for algorithms and lower bounds in theoretical computer science.

## The core machinery

- **First moment.** If $\binom{n}{k}2^{1-\binom{k}{2}}<1$, then a uniformly random 2-colouring of $E(K_n)$ has no monochromatic $K_k$. Hence $R(k,k)>2^{k/2}$ (Erdős, 1947).
- **Alteration.** Sample, then delete the bad configurations. This gives graphs of large girth and large chromatic number, and $R(k,k)>(1-o(1))\frac{k}{e}2^{k/2}$.
- **Second moment.** $\Pr[X=0]\le\operatorname{Var}X/(\mathbb{E}X)^2$. It gives thresholds for subgraph containment in $G(n,p)$, and shows that the clique number of $G(n,1/2)$ is concentrated on two values near $2\log_2n$.
- **Lovász Local Lemma.** Let each event $A_i$ have probability at most $p$ and be mutually independent of all but at most $d$ others. If $ep(d+1)\le1$, then $\Pr[\bigcap\bar A_i]>0$. The asymmetric form has weights $x_i$ with $\Pr[A_i]\le x_i\prod_{j\sim i}(1-x_j)$. Moser–Tardos resampling finds a good point in expected $\sum_i x_i/(1-x_i)$ resamplings, which makes the lemma algorithmic.
- **Chernoff–Hoeffding.** For a sum $X$ of independent $[0,1]$ variables with mean $\mu$, $\Pr[|X-\mu|\ge\delta\mu]\le2e^{-\delta^2\mu/3}$ for $0<\delta\le1$.
- **Martingales.** Azuma–Hoeffding: if $|X_i-X_{i-1}|\le c_i$, then $\Pr[|X_n-X_0|\ge\lambda]\le2\exp\big(-\lambda^2/2\sum c_i^2\big)$. Vertex and edge exposure martingales give concentration of $\chi(G(n,p))$ (Shamir–Spencer), and Bollobás used them to show $\chi(G(n,1/2))\sim n/(2\log_2n)$.
- **Janson and Talagrand.** Janson's inequality $\Pr[X=0]\le e^{-\mu+\Delta/2}$ controls lower tails of subgraph counts. Talagrand's convex-distance inequality concentrates certifiable Lipschitz functions around their median.
- **Entropy.** Shearer's lemma: if every coordinate is covered at least $k$ times by a family $\mathcal{F}$, then $H(X_1,\dots,X_n)\le\frac1k\sum_{F\in\mathcal{F}}H(X_F)$. Gilmer's 2022 union-closed argument compares the union of two independent samples from the family with a single sample, and gives a constant fraction.
- **Hypergraph containers.** Balogh–Morris–Samotij and Saxton–Thomason prove that the independent sets of a hypergraph with controlled codegrees lie inside few containers, each nearly independent. Consequences include counting $H$-free graphs, sparse random Turán theorems and list colouring.
- **Nibble and random greedy processes.** Rödl's nibble gives approximate designs. The triangle-free process, analysed by the differential-equation method, gives $R(3,t)\ge(\tfrac14-o(1))t^2/\log t$.
- **Dependent random choice.** A dense graph contains a large vertex set in which every small subset has many common neighbours. This bounds Turán numbers of bipartite graphs.
- **Theoretical computer science.** Derandomization uses conditional expectations, $k$-wise independence and pseudorandom generators. Random restrictions and Håstad's switching lemma put parity outside $AC^0$. Expander walks drive PCP gap amplification. Entropy and information arguments give communication lower bounds. Planted clique sets the average-case hardness baseline.

## Techniques to master

Linearity of expectation, deletion, the choice between union bound and local lemma, exposure martingales, Efron–Stein and the entropy method for concentration, and the differential-equation method for random processes.

## Standard references / Reading path

Prerequisites are measure-theoretic probability (conditional expectation, martingales) and basic graph theory. Read Alon–Spencer, _The Probabilistic Method_ (4th ed.), Chapters 1–8 and 10; Boucheron–Lugosi–Massart, _Concentration Inequalities_, Chapters 2–6; and Molloy–Reed, _Graph Colouring and the Probabilistic Method_, for the LLL, Talagrand and nibble in action.

## Where it bites

- **Diagonal Ramsey.** Erdős's $2^{k/2}$ lower bound has been improved only by constant factors. Campos–Griffiths–Morris–Sahasrabudhe gave the upper bound $(4-\epsilon)^k$.
- **$R(4,t)$.** Mattheus–Verstraete obtain $t^3/\log^4t$ by taking a random subgraph of an algebraic pseudorandom graph. The remaining gap to the $t^3/\log^2t$ upper bound is logarithmic.
- **Union-closed sets.** The entropy method stalls near $0.38$, well short of $1/2$.
- **Sunflowers.** Alweiss–Lovett–Wu–Zhang reach $(C\log w\log\log w)^w$ through spread families and random-set arguments; Erdős–Rado conjectured $C^w$.
- **Erdős–Hajnal.** Random graphs show that polynomial-size homogeneous sets are the best one can hope for.
- **Complexity theory.** PCP, communication complexity and planted-clique lower bounds are built from the same toolkit.

# Plain explanation

Suppose you want to prove that a certain arrangement exists, but you cannot build it by hand. Here is a surprising trick: choose an arrangement at random, and show that the chance it works is above zero. If the chance is above zero, then at least one working arrangement must exist, even though you never saw one.

A party analogy: say you want to seat guests so that no table has a group of enemies. Instead of searching for a seating plan, you show that if you seat guests at random, the chance of success is not zero. So a good seating exists. The proof gives no recipe for finding it, which is both its strength and its weakness.

Paul Erdős made this method famous. It proves that surprising structures exist, such as networks with no short loops that still need many colours, and it shows how large some combinatorial quantities must be.

A second part of the story is concentration of measure. When a result depends on many small independent random choices, it is almost always very close to its average. That is why a long coin-flipping experiment is so predictable. Concentration lets the method say not just 'possible' but 'typical'.

The method is now also used inside computer science, for designing algorithms and for proving that some tasks are impossible for simple programs.

The analogy fails in one respect: the proof is usually existential. It tells you something exists without telling you how to find it.

# Student explanation

The method rests on a one-line fact: if a random object has property $P$ with positive probability, then some object with $P$ exists. Its first classic use is Erdős's 1947 bound for **Ramsey numbers**. Colour each edge of the complete graph $K_n$ red or blue independently with probability $1/2$. For a fixed set of $k$ vertices, the chance it is monochromatic is $2^{1-\binom k2}$. By the **union bound** (the probability of any of several events is at most the sum of the probabilities), the chance that some $k$-set is monochromatic is at most $\binom nk 2^{1-\binom k2}$. If this is below $1$, some colouring has no monochromatic $K_k$, hence $R(k,k)>n$. Optimizing $n$ gives $R(k,k)>2^{k/2}$. In words: there are so many colourings, and so few of them are bad, that good ones must exist.

The basic toolbox has several levels of sophistication.

- **First moment**: use the union bound or the expected value of a count. If the expected number of bad objects is below $1$, some outcome has none.
- **Alteration**: sample randomly, then fix the few defects by deleting them. This improves many bounds by constant factors.
- **Second moment**: if $X$ counts something, then $\Pr[X=0]\le \mathrm{Var}(X)/(\mathbb E X)^2$. This shows a structure appears reliably when the average count is large and does not vary too much.
- **Lovász Local Lemma**: if each bad event has small probability and depends on only a few others, then with positive probability _none_ occurs. It handles the case where there are far too many bad events for the union bound.
- **Concentration inequalities** (Chernoff, Azuma, Talagrand): a function of many independent inputs, which changes little when one input changes, is very close to its mean.
- **Hypergraph containers** count, in a compact way, all structures avoiding a forbidden pattern, and have solved long-standing counting problems.

Another key idea is that the probabilistic method is often _non-constructive_: it proves existence, not an algorithm. Modern research looks for algorithmic versions (for example the algorithmic Local Lemma) and for explicit constructions matching random ones. For some problems, such as exponential lower bounds for Ramsey numbers, no explicit construction even comes close to the random one.

The method appears in later entries: for Ramsey numbers and sphere packing, where random constructions give the best known lower bounds, and for sunflowers and union-closed sets, where probabilistic and entropy arguments give the best known bounds.
