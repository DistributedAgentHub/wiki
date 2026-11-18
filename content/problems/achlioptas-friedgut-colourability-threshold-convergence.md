---
type: problem
slug: achlioptas-friedgut-colourability-threshold-convergence
title: Convergence of the q-colourability threshold of sparse random graphs (Achlioptas–Friedgut conjecture)
entry: random-constraint-satisfaction-thresholds
status: OPEN
origin: Achlioptas and Friedgut, 1999 (existence of a sharp threshold sequence; convergence conjectured)
ratings:
  difficulty: 40
  applicationValue: 6
  leverage: 25
verification:
  route: REVIEW
sources:
  - title: "Carenini: A Proof of the Achlioptas-Friedgut Convergence Conjecture (arXiv:2611.21665, v1 of 9 Nov 2026, unrefereed)"
    url: https://arxiv.org/abs/2611.21665
  - title: Carenini, full text (HTML)
    url: https://arxiv.org/html/2611.21665
  - title: "Achlioptas and Friedgut: A sharp threshold for k-colorability (1999)"
    url: https://cgi.di.uoa.gr/~optas/papers/k-col-threshold.pdf
links:
  - to: random-k-sat-satisfiability-threshold-conjecture
    kind: BUILDS_ON
    note: The preprint's proof adapts the scaling-window argument claimed for random k-SAT, so it depends on that unrefereed result.
timeline:
  - date: 1999-01-01
    title: "Achlioptas and Friedgut: sharp threshold sequence"
    body: Existence of a sharp threshold d_k(n) for k-colourability, k at least 3; convergence left open. Year-only date.
    source: https://cgi.di.uoa.gr/~optas/papers/k-col-threshold.pdf
  - date: 2009-12-12
    title: "Bayati, Gamarnik and Tetali: free-energy limits"
    body: Interpolation proves limits for related optimisation quantities on sparse random graphs, including colouring.
    source: https://arxiv.org/abs/0912.2444
  - date: 2026-11-09
    title: "Carenini: preprint claiming convergence"
    body: A preprint (arXiv:2611.21665, v1 of 9 November 2026, unrefereed) claims convergence of d_q(n) for every fixed q at least 3, adapting the author's unrefereed k-SAT argument.
    source: https://arxiv.org/abs/2611.21665
explainer:
  oneLine: Does the number of colours a random sparse graph needs flip at one fixed edge density? A 2026 preprint claims yes.
  flow:
    - Sharp threshold d_q(n) known since 1999
    - Does d_q(n) settle to one number?
    - "2026 claim: narrow window forces a limit"
    - Window bound imported from k-SAT paper
    - Both papers unrefereed, unchecked
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
    - term: chromatic number
      meaning: The smallest number of colours needed to colour a graph's vertices so that no edge joins two vertices of the same colour.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: scaling window
      meaning: The range of the density over which the property's probability moves from near 1 to near 0.
      link: https://en.wikipedia.org/wiki/Random_graph
    - term: Chebyshev's inequality
      meaning: A bound saying a random variable with small variance rarely lands far from its mean.
      link: https://en.wikipedia.org/wiki/Chebyshev%27s_inequality
    - term: variance
      meaning: A number measuring how far a random quantity typically strays from its average.
      link: https://en.wikipedia.org/wiki/Variance
    - term: Poisson distribution
      meaning: The pattern of how many rare, independent events occur in a fixed stretch.
      link: https://en.wikipedia.org/wiki/Poisson_distribution
    - term: interpolation method
      meaning: A proof technique that connects a hard random model to an easy one along a path and tracks how a quantity changes.
      link: /research/diluted-spin-glasses
  readFirst:
    - title: Graph coloring (Wikipedia)
      url: https://en.wikipedia.org/wiki/Graph_coloring
      why: What colouring and chromatic number mean.
    - title: Erdős–Rényi model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model
      why: The random graph model the problem is about.
    - title: "Gamarnik: The satisfiability conjecture for random k-SAT formulas (arXiv)"
      url: https://arxiv.org/abs/2611.10139
      why: A readable exposition of the sister problem, with background on sharp thresholds and interpolation.
raw:
  student: "**Statement.** Fix $q\\ge3$. $G(n,d/n)$ has $n$ vertices; each pair is an edge independently with probability $d/n$. A graph is $q$-colourable if its vertices can be coloured with $q$ colours with no edge having both ends the same colour. Achlioptas and Friedgut (1999) proved there is a sequence $d_q(n)$ such that for each $\\varepsilon>0$, $\\Pr[G(n,d/n)\\ \\text{is}\\ q\\text{-colourable}]\\to1$ for $d<d_q(n)-\\varepsilon$ and $\\to0$ for $d>d_q(n)+\\varepsilon$. The conjecture: $d_q(n)$ converges to a constant $d_q$.\n\n**Why sharpness is not enough.** Friedgut's criterion shows the transition is narrow, but it does not tell where it sits for different $n$. A sequence can have sharp transitions at positions that drift, like $\\sin(\\ln n)$, which never converges. A standard fact (Shamir–Spencer, Łuczak and Alon–Krivelevich, as cited by the preprint) is that the chromatic number is concentrated on very few values; that is a statement about colours, not about where the transition lies.\n\n**What the 2026 preprint claims.** Carenini's arXiv:2611.21665 proves convergence by reducing it to a *narrow scaling window*: the range of $d$ over which the colourability probability moves from near 1 to near 0 must shrink fast enough. Roughly: add the edges of the graph one by one (the *edge process*); let $H_n$ be the number of edges at which the graph first becomes uncolourable. The paper bounds the variance of $H_n$ using Chebyshev's inequality, which says a random variable is rarely far from its mean when the variance is small, and Aldous's covering-time inequality, and bounds the expected *remaining lifetime* of the last colourable graph by studying *frozen pairs*, pairs of vertices that every proper colouring gives the same colour. A Poisson interpolation step from Bayati–Gamarnik–Tetali then locates the threshold as $d_q=2\\alpha_q$ where $\\alpha_q=\\lim \\mathbb E[H_n]/n$.\n\n**Dependence and status.** The width bound is taken from the author's $k$-SAT report (ECCC TR26-229), also unrefereed. The paper says none of its mathematical arguments was produced by a large language model. DARC has checked no step, so the problem stays OPEN."
site:
  aiReviewed: true
---

Fix an integer $q\ge3$. Achlioptas and Friedgut proved that there is a sequence $d_q(n)$ such that for every $\varepsilon>0$ the random graph $G(n,d/n)$ is $q$-colourable with probability tending to 1 if $d<d_q(n)-\varepsilon$ and to 0 if $d>d_q(n)+\varepsilon$. Prove that $d_q(n)$ converges, that is, that there is a constant $d_q$ such that $G(n,d/n)$ is a.s. $q$-colourable for $d<d_q$ and a.s. not $q$-colourable for $d>d_q$.

# State of the art

**Open as of today; one unrefereed claim.** Sharp threshold: Achlioptas and Friedgut (Random Structures & Algorithms 14, 1999), using Friedgut's criterion; the threshold location may a priori depend on $n$ (Friedgut's 1998/1999 paper shows a coarse threshold can occur only at a rational power of $n$). Convergence was not known; Bayati–Gamarnik–Tetali (arXiv:0912.2444) proved the existence of free-energy limits for colouring on sparse random graphs, a related but different statement.

**Claim of November 2026.** Gaia Carenini's preprint (arXiv:2611.21665, v1 of 9 November 2026, math.PR, unrefereed) states that for each fixed $q\ge3$ there is $d_q\in(0,\infty)$ such that $G(n,d/n)$ is a.s. $q$-colourable for $d<d_q$ and a.s. not for $d>d_q$. It says the proof adapts the author's recent argument for the satisfiability conjecture (ECCC TR26-229, itself unrefereed): a polynomial bound on the width of the transition feeds a variance bound and a bound on the expected remaining lifetime of the last colourable graph in the edge process, with a Poisson interpolation step from Bayati–Gamarnik–Tetali locating the threshold. The paper says none of its mathematical arguments was generated by a large language model. DARC found no independent assessment, so the problem stays OPEN, and the claim inherits any gap in the unrefereed $k$-SAT report.

# Applications

Indirect: it would settle a basic question about when random constraint satisfaction instances become infeasible, and so sharpens benchmarks used to test colouring and SAT solvers. No direct deployed use.

# Resolution criteria

A proof of convergence of $d_q(n)$ for every fixed $q\ge3$ that has been refereed or checked by independent experts (including the $k$-SAT window bound it depends on), or a formal proof. A preprint does not change the status.

# Rating rationale

Difficulty 40: open since 1999 with the sharp threshold known and the large-k satisfiability analogue proved, and now one unrefereed claim that depends on another unrefereed claim. Application value 3: understanding, not a deployed tool. Leverage 25: settles a standard conjecture in random graph theory and supports related random-CSP results, one subfield.

# Verification

Expert reading of the preprint (Theorem 1.2; the Poisson interpolation step of Section 2; the edge-process and remaining-lifetime reduction of Section 3; the frozen-pair estimates of Sections 4 and 5), and of exactly which statements it imports from the unrefereed k-SAT report TR26-229 and from Bayati–Gamarnik–Tetali. The conclusion should not be accepted until the k-SAT window bound it uses has itself been checked.

# Plain explanation

Draw dots on paper and connect pairs at random, keeping the average number of lines per dot fixed. Now try to colour the dots with three colours so that no line joins two dots of the same colour.

When there are few lines, this almost always works. When there are many, it almost never does. In 1999 two mathematicians showed the switch is sharp: for each number of dots there is a tipping value for the number of lines per dot, and just below it the colouring almost always works while just above it almost always fails.

What they could not show is that the tipping value is the same fixed number once the picture gets very large. For all anyone proved, it could keep creeping around. The question of whether it settles down is the Achlioptas–Friedgut conjecture.

In November 2026 a researcher, Gaia Carenini, posted a paper claiming to prove it. It reuses the method of her earlier, also unreviewed, paper on a related logic puzzle. Other experts have not yet checked either one, and neither has appeared in a journal. So nobody should treat this as settled yet.

If the claim holds, the fact is mostly a matter of understanding: it says random puzzles of this kind have one well-defined tipping point, which scientists had assumed for a long time.
