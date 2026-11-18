---
type: entry
slug: random-constraint-satisfaction-thresholds
title: Sharp thresholds in random graph colouring and random k-SAT
field: probability-mathematical-physics
kind: THEORY
status: ACTIVE
summary: When does a random graph stop being q-colourable, or a random k-SAT formula stop being satisfiable? Friedgut's sharp-threshold theorem, its non-uniformity, and the convergence conjectures.
reliedOn: Random constraint satisfaction models are the testing ground for algorithmic hardness, statistical-physics predictions and proof methods (second moment, interpolation); convergence of thresholds is assumed throughout that literature.
dependsOn:
  - diluted-spin-glasses
  - probabilistic-method
references:
  - title: Ehud Friedgut, Sharp thresholds of graph properties, and the k-sat problem (with an appendix by Jean Bourgain; manuscript dated July 1998, J. Amer. Math. Soc. 12, 1999)
    url: https://web.stevens.edu/algebraic/Files/SAT/SATthre.pdf
    kind: paper
  - title: Dimitris Achlioptas and Ehud Friedgut, A sharp threshold for k-colorability. Random Structures & Algorithms 14 (1999)
    url: https://cgi.di.uoa.gr/~optas/papers/k-col-threshold.pdf
    kind: paper
  - title: Jian Ding, Allan Sly and Nike Sun, Proof of the satisfiability conjecture for large k. arXiv:1411.0650
    url: https://arxiv.org/abs/1411.0650
    kind: paper
  - title: Emmanuel Abbe and Andrea Montanari, On the concentration of the number of solutions of random satisfiability formulas. arXiv:1006.3786
    url: https://arxiv.org/abs/1006.3786
    kind: paper
  - title: Mohsen Bayati, David Gamarnik and Prasad Tetali, Combinatorial approach to the interpolation method and scaling limits in sparse random graphs. Annals of Probability (2013); arXiv:0912.2444
    url: https://arxiv.org/abs/0912.2444
    kind: paper
  - title: Gaia Carenini, A polynomial scaling window for random k-SAT and a proof of the satisfiability conjecture. ECCC TR26-229 (5 October 2026; unrefereed)
    url: https://eccc.weizmann.ac.il/report/2026/229/
    kind: paper
  - title: "David Gamarnik, The satisfiability conjecture for random k-SAT formulas: human-friendly exposition of the recent OpenAI resolution. arXiv:2611.10139 (6 November 2026; unrefereed)"
    url: https://arxiv.org/abs/2611.10139
    kind: paper
  - title: Gaia Carenini, A Proof of the Achlioptas-Friedgut Convergence Conjecture. arXiv:2611.21665 (9 November 2026; unrefereed)
    url: https://arxiv.org/abs/2611.21665
    kind: paper
timeline:
  - date: 1998-07-14
    title: "Friedgut: sharp thresholds and k-SAT"
    body: The manuscript (dated 14 July 1998; journal version 1999) shows a monotone graph property has a coarse threshold only if it is locally approximable by subgraph counts, and settles the existence of a sharp threshold for random k-CNF satisfiability, with the threshold location allowed to depend on n.
    source: https://web.stevens.edu/algebraic/Files/SAT/SATthre.pdf
  - date: 1999-01-01
    title: "Achlioptas and Friedgut: sharp threshold for k-colourability"
    body: Proves that for every fixed k at least 3 there is a sequence d_k(n) with a sharp threshold for k-colourability of G(n, d/n). Published in 1999 (exact date not on the page, so the first of the year is used); convergence of d_k(n) was left open.
    source: https://cgi.di.uoa.gr/~optas/papers/k-col-threshold.pdf
  - date: 2009-12-12
    title: "Bayati, Gamarnik and Tetali: interpolation in sparse random graphs"
    body: Prove existence of free-energy limits for models including colouring and K-SAT on Erdős–Rényi graphs, via a combinatorial form of the interpolation method (arXiv v1 date).
    source: https://arxiv.org/abs/0912.2444
  - date: 2010-06-18
    title: "Abbe and Montanari: concentration of the number of solutions"
    body: Show, by interpolation combined with Friedgut's theorem, concentration of the log solution count under a decay condition on the probability of unsatisfiability.
    source: https://arxiv.org/abs/1006.3786
  - date: 2014-11-03
    title: "Ding, Sly and Sun: satisfiability conjecture for large k"
    body: Prove the satisfiability threshold exists for all k above an absolute constant and matches the 1-RSB prediction (arXiv v1 date).
    source: https://arxiv.org/abs/1411.0650
  - date: 2026-10-05
    title: "Carenini: polynomial scaling window for random k-SAT"
    body: An ECCC report claims a window of width O(n^(1/2+1/k)), which with Abbe–Montanari would give the satisfiability conjecture for all fixed k at least 3. Unrefereed.
    source: https://eccc.weizmann.ac.il/report/2026/229/
  - date: 2026-11-09
    title: "Carenini: colouring convergence preprint"
    body: An arXiv preprint claims convergence of the q-colourability threshold for every fixed q at least 3, adapting the k-SAT argument. Unrefereed.
    source: https://arxiv.org/abs/2611.21665
explainer:
  oneLine: Random puzzles flip from solvable to unsolvable at a critical density; the open question is whether that density is a single number.
  flow:
    - Add random rules to a puzzle
    - Solvable flips to unsolvable at a tipping point
    - "Sharp-threshold theorem: tipping point is narrow"
    - Convergence to one fixed value is open
    - 2026 preprints claim it, unchecked
  glossary:
    - term: random graph
      meaning: A graph whose edges are chosen by chance, for example each pair of vertices joined independently with the same probability.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
    - term: graph colouring
      meaning: Giving each vertex of a graph one of q colours so that no edge joins two vertices of the same colour.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: k-SAT
      meaning: A logic puzzle of clauses, each an OR of k variables or their negations; the question is whether all clauses can be true at once.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: threshold
      meaning: The density at which a random object switches from almost surely having a property to almost surely lacking it.
      link: https://en.wikipedia.org/wiki/Random_graph
    - term: sharp threshold
      meaning: A threshold where the switch happens in a window much narrower than the threshold's own size.
      link: https://en.wikipedia.org/wiki/Random_graph
    - term: almost surely (a.s.)
      meaning: With probability tending to 1 as the size n of the object grows.
      link: https://en.wikipedia.org/wiki/Almost_surely
    - term: preprint
      meaning: A paper made public before peer review; other experts have not yet checked it.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: probabilistic method
      meaning: The DARC research page on proving that objects exist, or have a property, by showing a random choice works with positive probability.
      link: /research/probabilistic-method
    - term: random constraint satisfaction thresholds
      meaning: The DARC research page on sharp thresholds in random colouring and random k-SAT.
      link: /research/random-constraint-satisfaction-thresholds
    - term: Erdős–Rényi graph
      meaning: The random graph in which each pair of vertices is joined independently with the same probability.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
    - term: second moment method
      meaning: A way to show something exists by checking that a count of it is not too spread out compared with its average.
      link: https://en.wikipedia.org/wiki/Second_moment_method
    - term: interpolation method
      meaning: A proof technique that connects a hard random model to an easy one along a path and tracks how a quantity changes.
      link: /research/diluted-spin-glasses
  readFirst:
    - title: Boolean satisfiability problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
      why: What SAT and k-SAT are, with the random-formula threshold briefly discussed.
    - title: Graph coloring (Wikipedia)
      url: https://en.wikipedia.org/wiki/Graph_coloring
      why: Colourings, chromatic number and why colouring is a standard hard problem.
    - title: Erdős–Rényi model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
      why: The random graph G(n, p) and its thresholds, in plain language.
raw:
  body: "## Two random models\n\nTwo standard random models have a \"satisfiable or not\" transition. In the **Erdős–Rényi graph** $G(n, d/n)$ on $n$ vertices each pair is joined independently with probability $d/n$, so the average degree is about $d$. In **random $k$-SAT** a formula on $n$ Boolean variables has $m = \\alpha n$ clauses, each made of $k$ distinct variables negated independently with probability $1/2$. The question in each case is whether the object is $q$-colourable (respectively satisfiable). For small density the answer is yes with high probability, and for large density it is no.\n\n## Sharp thresholds and why location is the issue\n\nFriedgut's 1999 theorem gives a criterion for a monotone graph property to have a *sharp* threshold, meaning the probability falls from near 1 to near 0 inside a window much narrower than the threshold itself. The paper shows that a coarse threshold can occur only when the critical edge probability is a rational power of $n$, and applies the criterion to random $k$-CNF formulas. Achlioptas and Friedgut applied it to colouring: for every fixed $q \\ge 3$ there is a sequence $d_q(n)$ such that $G(n, d/n)$ is a.s. $q$-colourable for $d < d_q(n) - \\varepsilon$ and a.s. not for $d > d_q(n) + \\varepsilon$.\n\nThe sharp-threshold theorem therefore does not say that $d_q(n)$ converges as $n \\to \\infty$. It could in principle oscillate, and the same non-uniformity affects $k$-SAT. Convergence is the **Achlioptas–Friedgut conjecture** for colouring, and the **satisfiability conjecture** for $k$-SAT: a single limiting density $\\alpha_k$ below which random formulas are a.s. satisfiable and above which they are a.s. unsatisfiable.\n\n## Large $k$ and the statistical-physics prediction\n\nDing, Sly and Sun (arXiv 2014, revised 2021) proved the satisfiability conjecture for all $k$ at least some absolute constant, with the threshold matching the one-step replica-symmetry-breaking prediction of statistical physics. Their proof is a refined second-moment calculation that reduces a high-dimensional optimisation to tree recursions. The method does not by itself give small $k$ such as $k = 3$, and it does not address colouring.\n\n## Interpolation and concentration\n\nA second line of work uses **interpolation** methods from spin-glass theory. Bayati, Gamarnik and Tetali showed that free-energy limits exist for several models on sparse random graphs, including colouring and $K$-SAT, at positive and at zero temperature. Abbe and Montanari showed, combining interpolation with Friedgut's theorem, that if the probability of unsatisfiability decays fast enough then the logarithm of the number of solutions concentrates, and that a stronger concentration statement would imply the satisfiability conjecture (as described in Gamarnik's 2026 exposition).\n\n## The 2026 claims\n\nIn October 2026 Carenini posted an ECCC report claiming that the scaling window of random $k$-SAT has width $O(n^{1/2 + 1/k})$, and that combined with the Abbe–Montanari result this proves the satisfiability conjecture for every fixed $k \\ge 3$. Gamarnik's exposition (6 November 2026) says Carenini's resolution came first and that an OpenAI manuscript resolved it shortly after by a different argument. On 9 November 2026 Carenini posted an arXiv preprint adapting the argument to colouring, claiming convergence of $d_q(n)$ for every fixed $q \\ge 3$. None of these has been refereed as far as DARC found, and the colouring preprint relies on the unrefereed $k$-SAT report.\n\n## What to watch\n\nThe two problems on this page remain open here until refereed or formally checked proofs exist. Related open questions include whether the satisfiability threshold equals the ground-state-energy threshold, which Gamarnik's note lists as unknown."
  student: "**The setup.** Take $n$ vertices and join each pair independently with probability $d/n$; this is the random graph $G(n, d/n)$, with average degree about $d$. Ask whether it can be coloured with $q$ colours so that no edge has both ends the same colour. Alternatively take $n$ yes/no variables and $m=\\alpha n$ random clauses, each an OR of $k$ variables or their negations, and ask whether some assignment makes every clause true (random $k$-SAT). In both, more edges or clauses make the answer harder to satisfy.\n\n**Thresholds.** Let $f_n(d)$ be the probability that the graph is colourable. It decreases as $d$ rises. A *threshold* is where $f_n$ falls from near 1 to near 0. The threshold is *sharp* if that fall occurs in a window of width $\\varepsilon$ around some $d_q(n)$ for any fixed $\\varepsilon>0$ as $n\\to\\infty$. Friedgut's 1999 theorem gives a way to prove sharpness: a property that depends on the graph in a spread-out way, rather than on a few small subgraphs, has a sharp threshold. Achlioptas and Friedgut applied it to colouring, and Friedgut applied it to $k$-SAT.\n\n**What it does not give.** Sharpness gives a number $d_q(n)$ for each $n$, not a limit. Compare a sequence like $\\sin(\\ln n)$, which never settles down. Without convergence, one cannot even talk about *the* threshold density $d_q$. Convergence is the Achlioptas–Friedgut conjecture (colouring) and the satisfiability conjecture ($k$-SAT).\n\n**Known tools.** Counting arguments (the first and second moment method) give upper and lower bounds on where the threshold is. Ding, Sly and Sun used a refined second-moment calculation to prove the satisfiability conjecture for all large $k$. A different tool, *interpolation*, joins a hard random model to an easy one along a path and tracks how a quantity such as $\\frac1n\\mathbb E\\log Z$ changes along it, where $Z$ is the number of solutions. It gives that free-energy limits exist for several models.\n\n**The 2026 claims.** A preprint reports a proof for $k$-SAT with every $k\\ge3$ by bounding the width of the transition window by $O(n^{1/2+1/k})$ and combining it with an interpolation theorem of Abbe and Montanari. A second preprint adapts that argument to colouring. Another manuscript, by OpenAI, is reported to prove the $k$-SAT case by a different route. None is refereed; the colouring preprint relies on the unrefereed $k$-SAT one. DARC has not checked them."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Imagine making a puzzle by adding rules at random, one after another. With few rules, the puzzle is almost always solvable. With many, it almost never is. In between there is a tipping point where solvable turns into unsolvable.

Two famous puzzles of this kind are colouring a map of randomly drawn borders with a few colours, and a logic puzzle in which every rule says at least one of three switches must be on. For both, mathematicians proved something clever in 1999: the tipping point is sharp. A small change in the number of rules flips the answer from almost always yes to almost always no.

But the proof left a gap. It said there is a sharp tipping point for each puzzle size, not that the tipping point settles down to one fixed value as the puzzle gets larger. In principle it could drift or wobble. Showing it settles down is called convergence.

For the logic puzzle with very many switches per rule, convergence was proved in 2014. In late 2026 one researcher posted papers claiming it for the logic puzzle in general and for colouring. Nobody independent has checked them yet, and they have not been through peer review, so DARC treats both questions as open.

The analogy breaks in one way: real puzzles here have huge numbers of pieces, and the statements are about what happens as that number grows without limit.
