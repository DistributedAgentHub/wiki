---
type: problem
slug: lindelof-exponent-zeta-critical-line
title: "Subconvexity for ζ(1/2+it): reducing Bourgain's exponent μ(1/2) ≤ 13/84 toward the Lindelöf value 0"
entry: riemann-zeta-function
status: OPEN
origin: Lindelöf, 1908
ratings:
  difficulty: 74
  applicationValue: 11
  leverage: 49
workMix:
  theory: 92
  engineering: 0
  compute: 8
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Bourgain: Decoupling, exponential sums and the Riemann zeta function"
    url: https://arxiv.org/abs/1408.5794
  - title: "Bourgain, Watt: Mean square of zeta function, circle problem and divisor problem revisited"
    url: https://arxiv.org/abs/1709.04340
  - title: "Guth, Maynard: New large value estimates for Dirichlet polynomials"
    url: https://arxiv.org/abs/2405.20552
links:
  - to: zero-density-exponent-beyond-guth-maynard
    kind: IMPLIES
    note: The Lindelöf hypothesis implies the density hypothesis A(σ) ≤ 2, which is below 30/13.
timeline:
  - date: 1921-01-01
    title: "Hardy–Littlewood: μ(1/2) ≤ 1/6"
    body: Weyl-type differencing (date approximate).
    source: https://arxiv.org/abs/1408.5794
  - date: 2014-08-25
    title: "Bourgain: 13/84 by decoupling"
    body: New Fourier-analytic method for the exponential sums.
    source: https://arxiv.org/abs/1408.5794
  - date: 2017-09-13
    title: Bourgain–Watt sharp mean-square estimates
    body: Applications to the circle and divisor problems.
    source: https://arxiv.org/abs/1709.04340
explainer:
  oneLine: Show the zeta function grows more slowly along the critical line than the current record allows.
  flow:
    - Measure how big zeta gets on the line
    - Easy argument gives exponent 1/4
    - Clever sum bounds lower it to 13/84
    - Lindelöf predicts the truth is zero
  glossary:
    - term: Lindelof hypothesis
      meaning: A conjecture that zeta grows very slowly along the critical line.
      link: https://en.wikipedia.org/wiki/Lindel%C3%B6f_hypothesis
    - term: critical line
      meaning: The vertical line in the complex plane where the real part equals one half.
      link: https://en.wikipedia.org/wiki/Riemann_hypothesis
    - term: limsup
      meaning: The largest value a quantity keeps coming back near as an input grows without bound.
      link: https://en.wikipedia.org/wiki/Limit_inferior_and_limit_superior
    - term: convexity bound
      meaning: The general bound on a function in a strip, obtained from its values at the strip's edges.
      link: https://en.wikipedia.org/wiki/Phragm%C3%A9n%E2%80%93Lindel%C3%B6f_principle
    - term: exponential sum
      meaning: A sum of oscillating terms of the form e to the i times a phase, whose size depends on cancellation.
      link: https://en.wikipedia.org/wiki/Exponential_sum
    - term: van der Corput method
      meaning: A classical technique for bounding exponential sums using differences and calculus.
      link: https://en.wikipedia.org/wiki/Van_der_Corput_lemma_(harmonic_analysis)
    - term: decoupling
      meaning: A result saying waves on different parts of a curved surface add up almost as if they were independent.
      link: https://en.wikipedia.org/wiki/Harmonic_analysis
    - term: moment of zeta
      meaning: The average of a power of the size of zeta along the critical line.
      link: https://en.wikipedia.org/wiki/Riemann_zeta_function
    - term: Riemann Hypothesis
      meaning: The conjecture that every non-trivial zero of zeta has real part one half.
      link: /research/riemann-zeta-function
    - term: density hypothesis
      meaning: A conjecture on the best-possible bound for how many zeta zeros lie away from the critical line.
      link: https://en.wikipedia.org/wiki/Density_hypothesis
    - term: approximate functional equation
      meaning: A formula writing zeta on the critical line as a short sum of about the square root of t terms.
      link: https://en.wikipedia.org/wiki/Riemann_zeta_function
  readFirst:
    - title: Lindelof hypothesis - Wikipedia
      url: https://en.wikipedia.org/wiki/Lindel%C3%B6f_hypothesis
      why: Statement, equivalent forms and known bounds.
    - title: But what is the Riemann zeta function? (3Blue1Brown)
      url: https://www.3blue1brown.com/lessons/zeta
      why: Visual intuition for what the function does.
    - title: Riemann zeta function - Wikipedia
      url: https://en.wikipedia.org/wiki/Riemann_zeta_function
      why: Reference for the function and its growth.
raw:
  body: "Define μ(σ) = limsup_{t→∞} log|ζ(σ+it)| / log t. The Lindelöf hypothesis states μ(1/2) = 0, i.e. ζ(1/2+it) ≪ t^ε. The convexity bound gives μ(1/2) ≤ 1/4. The problem asks for any improvement of Bourgain's μ(1/2) ≤ 13/84 ≈ 0.1548, via exponential-sum or decoupling methods, or any new bound on 2k-th moments of ζ on the critical line."
site:
  aiReviewed: true
---

# State of the art

**Open.** Hardy and Littlewood (around 1921) proved μ(1/2) ≤ 1/6 by Weyl differencing; Huxley (2005) reached 32/205 ≈ 0.1561 with the Bombieri–Iwaniec method; Bourgain (arXiv:1408.5794, J. Amer. Math. Soc. 2017) proved 13/84 ≈ 0.1548 by applying ℓ² decoupling to the first spacing problem of the Bombieri–Iwaniec method. Bourgain and Watt (arXiv:1709.04340) obtained related mean-square bounds with applications to the circle and divisor problems. The Lindelöf hypothesis is implied by RH and implies the density hypothesis. Recent papers (2024–2026) still cite 13/84 as the record, and no improvement was found as of October 2026.

# Applications

Subconvexity feeds bounds for L-functions, lattice-point discrepancies, and moments, and underlies bounds on the divisor problem; there is no engineering application.

# Resolution criteria

A proved bound μ(1/2) < 13/84, or the Lindelöf hypothesis μ(1/2) = 0, accepted after refereeing.

# Rating rationale

A century of work moved the exponent from 1/4 to 13/84 ≈ 0.155, each step needing a new idea, so 74: above the zero-density problem (61) because pointwise bounds on the critical line are harder than averaged ones, and below the parity-limit prime-gap problem (80). Application value 11 is indirect (divisor and circle problems, moment bounds). Leverage 49 covers subconvexity, moments and lattice-point problems that take μ(1/2) as input.

# Work mix rationale

New analytic ideas needed; computation only guides exponent optimization.

# Verification

The target is a subconvexity exponent mu(1/2) < 13/84 or the Lindelof hypothesis mu(1/2) = 0. Mathlib has the zeta function but not exponential-sum estimates of this type; Formal Conjectures has zeta-moment statements ([Paper/RiemannZetaMoments.lean](https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Paper/RiemannZetaMoments.lean)) but not this bound. Resolution is refereed acceptance of the proof.

# Plain explanation

Walk up the critical line of the zeta function, the line where all its important zeros are expected to sit, and watch how big its values get, the way you might note the tallest wave as you walk along a beach. The Lindelöf hypothesis says the values grow extremely slowly, slower than any power of the height. That is a weaker cousin of the Riemann Hypothesis: if the Riemann Hypothesis is true, the Lindelöf hypothesis is true too.

The growth is measured by a number, an exponent. A simple general argument shows it is at most one quarter. Over the last century, mathematicians have chipped that bound down using clever ways of controlling sums of oscillating terms. The current record, from Jean Bourgain in 2017, is about 0.155. The hypothesis predicts the true value is zero.

Why care about tiny improvements in one number? Because each improvement needed a new idea, and the techniques spill over to other problems. Bourgain's improvement used decoupling, a modern tool from harmonic analysis about waves, applied to a classical problem. And the exponent feeds into counting problems, such as how many zeros are off the line.

No improvement of Bourgain's number has been found. Climbing from 0.155 down to 0 is a long way, and no one knows how far the present methods can go.

# Student explanation

**Definition.** Let $\mu(\sigma)=\limsup_{t\to\infty}\log|\zeta(\sigma+it)|/\log t$. This is the smallest exponent such that $\zeta(\sigma+it)\ll t^{\mu(\sigma)+\varepsilon}$. The **Lindelöf hypothesis** says $\mu(1/2)=0$, that is, $\zeta(1/2+it)\ll t^{\varepsilon}$ for every $\varepsilon>0$. The **convexity bound** $\mu(1/2)\le1/4$ follows from the functional equation and the Phragmén–Lindelöf principle, a kind of maximum principle for analytic functions. The problem asks for any improvement on Bourgain's $\mu(1/2)\le13/84\approx0.1548$, via exponential-sum or decoupling methods, or any new bound on the $2k$-th moments $\int_0^T|\zeta(1/2+it)|^{2k}dt$.

**Where it sits.** The Lindelöf hypothesis is implied by the Riemann Hypothesis and implies the density hypothesis for zeros. It is equivalent to bounds on the moments of $\zeta$ on the critical line: $\int_0^T|\zeta(1/2+it)|^{2k}dt\ll T^{1+\varepsilon}$ for every integer $k\ge1$.

**How bounds are proved.** Using an approximate functional equation, $\zeta(1/2+it)$ is a sum of about $\sqrt t$ terms $n^{-1/2-it}$. The question becomes: how large can an **exponential sum** $\sum_{n\sim N}n^{-it}$ be? Cancellation in such sums is controlled by _van der Corput's method_ (differencing and the stationary phase principle), by the _Weyl_ method, and by the more elaborate **Bombieri–Iwaniec** method, which exploits the phases' structure.

**History.**

- Hardy–Littlewood (about 1921): $\mu(1/2)\le1/6$, by Weyl differencing.
- Huxley (2005): $32/205\approx0.1561$, by the Bombieri–Iwaniec method.
- Bourgain (arXiv 1408.5794, J. Amer. Math. Soc. 2017): $13/84\approx0.1548$, applying $\ell^2$ **decoupling** to the first spacing problem of the Bombieri–Iwaniec method.
- Bourgain and Watt (arXiv 1709.04340) obtained related mean-square bounds with applications to the circle and divisor problems.

Recent papers still cite $13/84$ as the record. No improvement was found as of October 2026.

**Why it is stuck.** Each step down in the exponent was a modest gain in a very hard analysis of oscillatory sums. The target, $0$, would require square-root cancellation in exponential sums over essentially all frequencies, which is out of reach of known methods. In the moment formulation, sharp bounds are known only for $k=1$ and $k=2$.

**Why it matters.** A better exponent gives better short-interval results for primes, better error terms in divisor problems, and further input to zero-density estimates; the Lindelöf hypothesis itself implies the density hypothesis.
