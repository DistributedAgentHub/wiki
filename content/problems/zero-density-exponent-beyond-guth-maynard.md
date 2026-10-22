---
type: problem
slug: zero-density-exponent-beyond-guth-maynard
title: "Zero-density exponent for ζ beyond Guth–Maynard: N(σ,T) ≤ T^(A(σ)(1−σ)+o(1)) with A < 30/13"
entry: riemann-zeta-function
status: OPEN
origin: Ingham, 1940; density hypothesis A(σ) ≤ 2, Bohr–Landau lineage
ratings:
  difficulty: 61
  applicationValue: 14
  leverage: 44
workMix:
  theory: 88
  engineering: 0
  compute: 12
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Guth, Maynard: New large value estimates for Dirichlet polynomials"
    url: https://arxiv.org/abs/2405.20552
  - title: "Chen, Gupta, Li: Large value estimates for Dirichlet polynomials with characters and zero density of Dirichlet L-functions"
    url: https://arxiv.org/abs/2507.08296
  - title: "Tao, Trudgian, Yang: New exponent pairs, zero density estimates, and zero additive energy estimates: a systematic approach"
    url: https://arxiv.org/abs/2501.16779
timeline:
  - date: 1940-01-01
    title: Ingham's zero-density bound
    body: A(σ) ≤ 3/(2−σ) (date approximate to the year; cited in Guth–Maynard).
    source: https://arxiv.org/abs/2405.20552
  - date: 2024-05-31
    title: "Guth–Maynard: 30/13"
    body: A(σ) ≤ 15/(3+5σ); with Ingham this gives sup A ≤ 30/13, the first improvement of Huxley’s 12/5.
    source: https://arxiv.org/abs/2405.20552
  - date: 2025-07-11
    title: Extension to Dirichlet L-functions
    body: Chen–Gupta–Li obtain exponent 7/3 for the sum over characters mod q.
    source: https://arxiv.org/abs/2507.08296
explainer:
  oneLine: Show that very few zeta zeros can lie off the critical line, with a better count than the 2024 record.
  flow:
    - Zeros off the line would hurt prime counts
    - "Count them: few, with a power-law bound"
    - Record bound 12/5 falls to 30/13 in 2024
    - "Next: lower still, or reach the exponent 2"
  glossary:
    - term: zero-density estimate
      meaning: A bound on how many zeta zeros can lie away from the critical line.
      link: https://en.wikipedia.org/wiki/Density_hypothesis
    - term: density hypothesis
      meaning: A conjecture giving the best possible zero-density bound; weaker than the Riemann Hypothesis.
      link: https://en.wikipedia.org/wiki/Density_hypothesis
    - term: Lindelof hypothesis
      meaning: A conjecture that zeta grows very slowly along the critical line.
      link: https://en.wikipedia.org/wiki/Lindel%C3%B6f_hypothesis
    - term: Riemann Hypothesis
      meaning: The conjecture that every non-trivial zero of zeta has real part one half.
      link: /research/riemann-zeta-function
    - term: critical line
      meaning: The vertical line in the complex plane where the real part equals one half.
      link: https://en.wikipedia.org/wiki/Riemann_hypothesis
    - term: Dirichlet polynomial
      meaning: A finite sum of terms a_n times n to a complex power, used to approximate zeta.
      link: https://en.wikipedia.org/wiki/Dirichlet_series
    - term: large values estimate
      meaning: A bound on how often a sum of oscillating terms can take unusually large values.
      link: https://en.wikipedia.org/wiki/Large_sieve
    - term: primes in short intervals
      meaning: The question of whether a short stretch of numbers must contain a prime.
      link: https://en.wikipedia.org/wiki/Prime_gap
    - term: explicit formula
      meaning: An exact formula writing the prime count as a main term plus a sum over zeta zeros.
      link: https://en.wikipedia.org/wiki/Explicit_formulae_(L-function)
    - term: Analytic number theory
      meaning: The use of calculus and complex analysis to study whole numbers.
      link: /research/analytic-number-theory
    - term: Dirichlet character
      meaning: A function on whole numbers that repeats with a fixed period and multiplies nicely; used to pick out primes in one progression.
      link: https://en.wikipedia.org/wiki/Dirichlet_character
  readFirst:
    - title: "Quanta: Sensational Proof Delivers New Insights Into Prime Numbers"
      url: https://www.quantamagazine.org/sensational-proof-delivers-new-insights-into-prime-numbers-20240715/
      why: Quanta's reporting on the Guth-Maynard result.
    - title: Zero-density estimates - Wikipedia
      url: https://en.wikipedia.org/wiki/Density_hypothesis
      why: Definitions and the classic bounds.
    - title: Riemann hypothesis - Wikipedia
      url: https://en.wikipedia.org/wiki/Riemann_hypothesis
      why: Background on what the zeros are.
    - title: Analytic number theory (research entry)
      url: /research/analytic-number-theory
      why: The toolkit used here.
site:
  aiReviewed: true
---

Let N(σ,T) count zeros ρ = β + iγ of ζ with β ≥ σ and |γ| ≤ T, and let A(σ) be the least exponent with $N(\sigma,T)\ll T^{A(\sigma)(1-\sigma)+o(1)}$ for 1/2 ≤ σ ≤ 1. The density hypothesis asserts A(σ) ≤ 2 for all σ; it is implied by the Lindelöf hypothesis. Guth and Maynard (2024) proved $N(\sigma,T)\le T^{15(1-\sigma)/(3+5\sigma)+o(1)}$, which improves the classical bounds for roughly 7/10 ≤ σ ≤ 8/10, and combined with Ingham's bound for σ ≤ 7/10 this gives sup_σ A(σ) ≤ 30/13 ≈ 2.3077, with the maximum at σ = 7/10. The problem asks for a proof that sup_σ A(σ) < 30/13, or of the density hypothesis on a range of σ wider than is currently known.

# State of the art

**Open.** Ingham (1940) gave A(σ) ≤ 3/(2−σ) and Huxley (1972) A(σ) ≤ 3/(3σ−1) for σ ≥ 3/4, so sup A ≤ 12/5, attained at σ = 3/4. Guth and Maynard (arXiv:2405.20552, 2024) proved new large-value estimates for Dirichlet polynomials of length N taking values near N^(3/4), giving A(σ) ≤ 15/(3+5σ) and sup A ≤ 30/13, the first improvement of 12/5 in five decades; they also obtain prime asymptotics in intervals of length x^(17/30+o(1)). Chen, Gupta and Li (arXiv:2507.08296) adapted the method to the sum over characters mod q, with exponent 7/3 in place of Huxley's 12/5. Tao, Trudgian and Yang (arXiv:2501.16779) built an exponent database and obtained new zero-density estimates in several ranges by systematic optimization. The density hypothesis is known for σ ≥ 25/32 (Bourgain, 2000). A zero-free half-plane Re s > 7/8, as claimed in an unrefereed OpenAI manuscript (October 2026), would make N(σ,T) = 0 for σ > 7/8 but would not change the supremum, which is attained near σ = 7/10. No refereed improvement of 30/13 for ζ was found as of October 2026.

# Applications

Zero-density estimates give primes in short intervals, Linnik-type bounds on least primes in progressions, and Goldbach-type results on almost all even integers; each exponent improvement lowers the thresholds in those theorems.

# Resolution criteria

A proved bound N(σ,T) ≪ T^(A(σ)(1−σ)+o(1)) with sup A < 30/13 or the density hypothesis in a wider range, with full proof refereed.

# Rating rationale

One improvement in five decades, now with a new method that others are already extending, so 61: research-grade, just below Kakeya in ℝ⁴ (62) and below the Lindelöf exponent (74), which needs pointwise rather than averaged control. Application value 14 reflects explicit gains for primes in short intervals and least primes in progressions. Leverage 44: many prime-distribution theorems take the zero-density exponent as input.

# Work mix rationale

Mostly new analytic ideas; computer optimization of exponent combinations helps.

# Verification

The target is a bound N(sigma,T) <= T^(A(sigma)(1-sigma)+o(1)) with sup A < 30/13. Mathlib defines riemannZeta but has no zero-counting or large-values machinery, so a Lean check is not realistic today. The exponent optimisation can be reproduced numerically, but resolution needs a refereed full proof.

# Plain explanation

The Riemann Hypothesis says all the important zeros of the zeta function sit on one line. Nobody can prove that, but there is a weaker, useful question: how many zeros can possibly be off the line? If you can show there are very few, many of the consequences of the hypothesis for primes still follow.

Zero-density estimates give such a count. They say that the number of zeros in a given region, farther from the line than a chosen distance, is at most some power of the height. The smaller the power, the better the estimate. A conjecture called the density hypothesis states the best-possible form of the power, and it would follow from the Lindelöf hypothesis (a claim that zeta never gets very large on the line), itself a weaker cousin of the Riemann Hypothesis.

For half a century, the record for the worst place to look stood at a power of 12/5. In 2024, Larry Guth and James Maynard lowered it to 30/13, using new ideas about how large certain sums of oscillating terms can be. This was the first improvement in fifty years, and it immediately gave better results about primes in short stretches of numbers.

The task now is to go below 30/13, or to reach the density hypothesis, which asks for the number 2.

Why is it hard? The proof has to control large sums with many cancellations, and the new method works best in only a narrow range.

# Student explanation

**Setup.** Let $N(\sigma,T)$ count zeros $\rho=\beta+i\gamma$ of $\zeta$ with $\beta\ge\sigma$ and $|\gamma|\le T$. For $1/2\le\sigma\le1$ let $A(\sigma)$ be the least exponent with
$N(\sigma,T)\ll T^{A(\sigma)(1-\sigma)+o(1)}.$
The **density hypothesis** asserts $A(\sigma)\le2$ for all $\sigma$. It would follow from the **Lindelöf hypothesis**, and is implied by the Riemann Hypothesis (which says $N(\sigma,T)=0$ for $\sigma>1/2$). The point of the exponent: for $\sigma$ near $1$, the bound says that zeros far from the line are very rare.

**Why zero densities matter.** The explicit formula shows that each zero $\rho$ contributes about $x^{\beta}$ to the error in counting primes up to $x$. So if few zeros have large real part, then primes are well-behaved _on average_, even without RH. This is exactly what is needed for results on **primes in short intervals** and in arithmetic progressions, and for many sieve arguments, which use zero-density estimates as a substitute for RH.

**History.**

- Ingham (1940): $A(\sigma)\le3/(2-\sigma)$.
- Huxley (1972): $A(\sigma)\le3/(3\sigma-1)$ for $\sigma\ge3/4$. Combining the two gives $\sup_\sigma A(\sigma)\le12/5$, attained at $\sigma=3/4$.
- Guth and Maynard (arXiv 2405.20552, 2024) proved new large-value estimates for **Dirichlet polynomials** (short sums $\sum a_n n^{-it}$) of length $N$ taking values near $N^{3/4}$. This gave $A(\sigma)\le15/(3+5\sigma)$ and, with Ingham, $\sup A\le30/13\approx2.3077$, with the maximum at $\sigma=7/10$. This was the first improvement of $12/5$ in five decades. They also obtained prime asymptotics in intervals of length $x^{17/30+o(1)}$.
- Chen, Gupta and Li adapted the method to sums over characters modulo $q$ (exponent $7/3$ in place of Huxley's $12/5$). Tao, Trudgian and Yang built an exponent database and obtained new estimates in several ranges by combining known inputs.

**The problem.** Prove $\sup_\sigma A(\sigma)<30/13$, or the full density hypothesis $A\le2$. The bound $30/13$ is attained at a single point, $\sigma=7/10$, so any improvement around that point lowers the supremum.

**Why it is hard.** The method turns the question into bounding how often a Dirichlet polynomial can be large; it combines combinatorial structure of the 'large values' with moment estimates. Progress needs either better large-value theorems at the critical range or a way to merge the new method with other techniques. The known routes to the full density hypothesis go through bounds on high moments of zeta on the critical line (the Lindelöf hypothesis is the extreme case) that are far beyond current methods. It is already known for $\sigma\ge25/32$ (Bourgain, 2000).

**Unrefereed claim.** An October 2026 OpenAI manuscript claims no zeros with real part above $7/8$. Even if correct, it would not change the supremum, which is attained near $\sigma=7/10$.
