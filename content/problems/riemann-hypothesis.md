---
type: problem
slug: riemann-hypothesis
title: "Riemann Hypothesis: all non-trivial zeros of ζ(s) lie on Re s = 1/2"
entry: riemann-zeta-function
status: OPEN
origin: Bernhard Riemann, 1859
prize: $1M Clay Millennium Prize
ratings:
  difficulty: 96
  applicationValue: 30
  leverage: 95
workMix:
  theory: 93
  engineering: 1
  compute: 5
  empirical: 1
verification:
  route: LEAN
sources:
  - title: "Clay Mathematics Institute: Riemann Hypothesis"
    url: https://www.claymath.org/millennium/riemann-hypothesis/
  - title: Bombieri, Clay problem description (PDF)
    url: https://www.claymath.org/wp-content/uploads/2022/05/riemann.pdf
  - title: "Alpöge, Furman: More than two thirds of the zeta zeros are simple and on the critical line (unrefereed)"
    url: https://arxiv.org/abs/2608.13637
  - title: "Lamzouri: A new proof that more than 2/3 of the zeros are simple and on the critical line (unrefereed)"
    url: https://arxiv.org/abs/2609.02882
  - title: "Guth, Maynard: New large value estimates for Dirichlet polynomials"
    url: https://arxiv.org/abs/2405.20552
  - title: "Platt, Trudgian: The Riemann hypothesis is true up to 3·10^12"
    url: https://arxiv.org/abs/2004.09765
  - title: "OpenAI: model-produced manuscripts, family 003 (quasi-Riemann hypothesis; unrefereed)"
    url: https://github.com/openai/math
links:
  - to: zero-density-exponent-beyond-guth-maynard
    kind: IMPLIES
    note: RH gives N(σ,T) = 0 for σ > 1/2, hence the density hypothesis and every zero-density exponent.
  - to: lindelof-exponent-zeta-critical-line
    kind: IMPLIES
    note: RH implies the Lindelöf hypothesis μ(1/2) = 0.
timeline:
  - date: 1859-11-01
    title: Riemann states the hypothesis
    body: In 'Über die Anzahl der Primzahlen unter einer gegebenen Grösse' (date approximate to the month).
    source: https://www.claymath.org/millennium/riemann-hypothesis/
  - date: 2020-04-21
    title: Rigorous check up to height 3·10^12
    body: Platt and Trudgian verify RH to |Im ρ| ≤ 3·10^12 with interval arithmetic.
    source: https://arxiv.org/abs/2004.09765
  - date: 2024-05-31
    title: Guth–Maynard zero-density exponent 30/13
    body: First improvement of Huxley's exponent 12/5 in four decades.
    source: https://arxiv.org/abs/2405.20552
  - date: 2026-08-13
    title: At least 2/3 of zeros simple and on the line (unrefereed)
    body: Alpöge–Furman (v1 13 August 2026), Lean-formalized; Lamzouri gives an independent proof in September.
    source: https://arxiv.org/abs/2608.13637
explainer:
  oneLine: Do all the interesting zeros of the zeta function lie on one straight line? Nobody knows, and the answer controls the primes.
  flow:
    - Primes look irregular but average smoothly
    - Zeta zeros add waves to the prime count
    - Zeros on a single line mean tiny waves
    - Nobody can prove all zeros stay on it
  glossary:
    - term: Riemann zeta function
      meaning: The function built from all whole numbers whose zeros control how primes are spread.
      link: /research/riemann-zeta-function
    - term: zero of a function
      meaning: An input for which the function's output equals zero.
      link: https://en.wikipedia.org/wiki/Zero_of_a_function
    - term: critical line
      meaning: The vertical line in the complex plane where the real part equals one half.
      link: https://en.wikipedia.org/wiki/Riemann_hypothesis
    - term: prime number theorem
      meaning: The result that the number of primes up to x is about x divided by the natural logarithm of x.
      link: https://en.wikipedia.org/wiki/Prime_number_theorem
    - term: explicit formula
      meaning: An exact formula writing the prime count as a main term plus a sum over zeta zeros.
      link: https://en.wikipedia.org/wiki/Explicit_formulae_(L-function)
    - term: zero-free region
      meaning: A part of the complex plane proved to contain no zeros of zeta.
      link: https://en.wikipedia.org/wiki/Riemann_zeta_function
    - term: Mertens function
      meaning: A running total of plus and minus ones recording whether numbers have an even or odd number of prime factors.
      link: https://en.wikipedia.org/wiki/Mertens_function
    - term: Dirichlet L-function
      meaning: A variant of zeta used to study primes in arithmetic progressions.
      link: https://en.wikipedia.org/wiki/Dirichlet_L-function
    - term: Hilbert-Polya conjecture
      meaning: The idea that the zeros of zeta are the eigenvalues of some natural operator.
      link: https://en.wikipedia.org/wiki/Hilbert%E2%80%93P%C3%B3lya_conjecture
    - term: Millennium Prize Problems
      meaning: Seven problems for each of which the Clay Institute offers one million dollars.
      link: https://en.wikipedia.org/wiki/Millennium_Prize_Problems
    - term: complex number
      meaning: A number with a real part and an imaginary part, which can be drawn as a point in a plane.
      link: https://en.wikipedia.org/wiki/Complex_number
    - term: critical strip
      meaning: The band of the complex plane between real part 0 and real part 1, where all the non-trivial zeros lie.
      link: https://en.wikipedia.org/wiki/Riemann_zeta_function
  readFirst:
    - title: But what is the Riemann zeta function? (3Blue1Brown)
      url: https://www.3blue1brown.com/lessons/zeta
      why: A visual explanation of where the zeros come from.
    - title: Riemann hypothesis - Wikipedia
      url: https://en.wikipedia.org/wiki/Riemann_hypothesis
      why: Statement, evidence, equivalent forms and consequences.
    - title: "Clay Mathematics Institute: Riemann Hypothesis"
      url: https://www.claymath.org/millennium/riemann-hypothesis/
      why: Official problem page.
    - title: The Riemann zeta function (research entry)
      url: /research/riemann-zeta-function
      why: Background on the function itself.
raw:
  body: "Prove that every zero ρ of the Riemann zeta function ζ(s) = Σ n^(-s) (continued meromorphically to ℂ) in the critical strip 0 < Re s < 1 satisfies Re ρ = 1/2. Equivalently, π(x) = Li(x) + O(x^(1/2) log x), or the Mertens-type bound Σ_{n≤x} μ(n) = O(x^(1/2+ε)). The generalized version asserts the same for all Dirichlet L-functions and, in the Selberg class setting, for all automorphic L-functions."
site:
  aiReviewed: true
---

# State of the art

**Not proved.** Unconditionally the best zero-free regions are of Vinogradov–Korobov type and shrink towards Re s = 1 as |t| grows. Hardy (1914) showed infinitely many zeros lie on the line; Selberg (1942) a positive proportion; Levinson (1974) more than 1/3; Conrey (1989) more than 2/5; Pratt, Robles, Zaharescu and Zeindler (2020) just over 5/12. In August 2026 Alpöge and Furman (arXiv:2608.13637, v1 13 August, unrefereed) proved that at least 2/3 of the zeros, counted with multiplicity, are simple and on the critical line (0.6725 with the Montgomery–Taylor window), with a Lean 4 formalization; the arXiv comments state that the proof was discovered autonomously by Claude (Anthropic) and verified and communicated by the authors. Lamzouri (arXiv:2609.02882, unrefereed) gave an independent, simpler proof of the 67.25% figure. Proportion results do not bear on the hypothesis itself: they say nothing about the remaining third of the zeros. OpenAI's 6 October 2026 release (github.com/openai/math, family 003) claims a zero-free half-plane Re s > 7/8 for ζ and all Dirichlet L-functions (a 'quasi-Riemann hypothesis'), with a second proof of Re s > 11/12 and a Lean formalization of the 7/8 statement listed in the repository; it is unrefereed and no independent assessment had been published by 15 October 2026. Even if correct, it leaves the strip 1/2 < Re s ≤ 7/8 open. Platt and Trudgian (2021) verified RH rigorously for |Im ρ| ≤ 3·10^12, and Gourdon (2004) checked about 10^13 zeros non-rigorously. Guth and Maynard (2024) lowered the zero-density exponent from Huxley's 12/5 to 30/13. The finite-field analogue is a theorem (Weil, Deligne), and the zeros show GUE statistics (Montgomery, Odlyzko), supporting a spectral (Hilbert–Pólya) picture that has not been realized.

# Applications

None directly. RH would sharpen error terms across prime number theory (primes in short intervals, least prime in progressions, deterministic primality and factoring-related bounds under GRH) and make many conditional results unconditional. Methods developed on the way, such as large-value estimates and decoupling, have been reused in harmonic analysis.

# Resolution criteria

A proof (or disproof by exhibiting a zero off the line) accepted by the analytic number theory community after refereeing, and ideally formalized. Numerical verification of finitely many zeros does not count. A zero-free region Re s > σ0 with σ0 < 1 would be a major partial result, not a resolution.

# Rating rationale

Defining problem of analytic number theory with no credible complete line of attack, hence just below P vs NP (100) and above Yang–Mills (93) in difficulty. The 2026 proportion results and the claimed 7/8 half-plane are far from the line and unrefereed. Application value 30 (GRH-conditional algorithms and prime bounds would become unconditional) leads mathematics; leverage 95 is the highest after P vs NP because thousands of results are conditional on RH or GRH.

# Work mix rationale

The missing ingredient is a new idea, not computation: numerics have verified 10^13 zeros without bearing on a proof. Formalization is a minor future share.

# Verification

Statement: `RiemannHypothesis.riemannHypothesis : RiemannHypothesis` in [Millennium/RiemannHypothesis.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Millennium/RiemannHypothesis.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)), where `RiemannHypothesis` is Mathlib's own definition in Mathlib.NumberTheory.LSeries.RiemannZeta: every zero of `riemannZeta` that is not a trivial zero (−2, −4, …) and not s = 1 has real part 1/2. A proof is accepted when it compiles against the pinned corpus without sorry and passes Comparator with only the standard axioms; a human-readable proof would still be refereed. Numerical verification of finitely many zeros does not count.

# Plain explanation

Prime numbers have no pattern anyone can write down, yet on average they follow a very regular law. In 1859 Bernhard Riemann found a function whose special input values, called its zeros, act like hidden controls on how closely the primes follow that average. He guessed that all the important zeros lie on one straight vertical line. That guess is the Riemann Hypothesis.

Why does a line matter? Each zero adds a small wave to the prime count. Zeros on the line make the waves as small as they can be, so the primes are as evenly spread as the theory allows. Zeros off the line would mean wilder swings.

The evidence is strong. Computers have checked an enormous number of zeros, and every one sits on the line. Mathematicians have also proved that infinitely many zeros are on it, and that a decent fraction of them are, but nobody has shown that all of them are.

Why is it hard? We have no way to see the zeros except by calculating, and the known methods give only weak control on how far from the line a zero could stray. The hypothesis connects so many areas that a proof would settle thousands of results that are currently stated with the words 'assuming the Riemann Hypothesis'.

Nobody knows what a proof would look like. The hypothesis is a Millennium Prize Problem, worth one million dollars.

# Student explanation

**The statement.** The Riemann zeta function $\zeta(s)=\sum n^{-s}$, continued to the whole complex plane, has trivial zeros at $-2,-4,-6,\dots$ and infinitely many non-trivial zeros in the critical strip $0<\Re s<1$. The **Riemann Hypothesis** (RH) says every non-trivial zero $\rho$ has $\Re\rho=1/2$. The generalized version says the same for every Dirichlet L-function and, more broadly, for L-functions of automorphic forms.

**Why primes care.** The explicit formula writes the prime-counting function as a main term plus a sum of oscillations $x^{\rho}/\rho$ over the zeros. The size of each oscillation is about $x^{\Re\rho}$. RH is therefore equivalent to a statement purely about primes: the number of primes up to $x$ is the smooth approximation $\mathrm{Li}(x)$ plus an error of at most about $\sqrt{x}\log x$. It is also equivalent to the statement that the Mertens function $\sum_{n\le x}\mu(n)$ (a signed count of numbers by their prime factors) grows no faster than $x^{1/2+\varepsilon}$ for every $\varepsilon>0$. In words: the primes behave as if they were random, to the extent that the central limit scale allows.

**What is proved.**

- _Zero-free regions._ Vinogradov–Korobov: there are no zeros in a thin region near the line $\Re s=1$, which shrinks as the height $|t|$ grows. It is enough for the prime number theorem with a good error term, but far from the line $1/2$.
- _Zeros on the line._ Hardy (1914) showed there are infinitely many. Selberg (1942) proved a positive proportion lie on the line. Levinson (1974) improved it to more than one third, Conrey (1989) to more than two fifths, and Pratt, Robles, Zaharescu and Zeindler (2020) to just over $5/12$. In August 2026 an unrefereed preprint (Alpöge and Furman, with a Lean formalization; the authors say the proof was found by an AI model) claims at least two thirds, and Lamzouri gave an independent, simpler proof of the same figure. Proportion results, however large, say nothing about the remaining zeros.
- _Numerics._ Every zero up to height $3\cdot10^{12}$ has been rigorously checked to lie on the line (Platt and Trudgian, 2021), and about $10^{13}$ zeros were checked non-rigorously.
- _Unchecked claim._ An October 2026 OpenAI manuscript claims there are no zeros with real part above $7/8$. It is unrefereed, and even if correct it leaves the strip between $1/2$ and $7/8$ open.

**What is stuck.** All methods give only a proportion of zeros, or control on average behaviour. Proving that no single zero strays is a different kind of statement: it needs a mechanism, such as a positivity property or a link to a spectral problem (the Hilbert–Pólya idea of finding an operator whose eigenvalues are the zeros), and nobody has found one that works.

**Consequences.** Hundreds of papers prove results conditional on RH or the generalized version. A proof would make these unconditional, sharpen estimates for primes in short intervals, and turn some known algorithms (for example some primality tests) from conditionally to unconditionally correct.

RH is a Clay Millennium Prize Problem; nearby problems here ask for partial results (zero density, Lindelöf).
