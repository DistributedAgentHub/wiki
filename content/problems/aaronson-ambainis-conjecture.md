---
type: problem
slug: aaronson-ambainis-conjecture
title: "Aaronson–Ambainis conjecture: bounded low-degree polynomials have a variable of influence poly(Var/d)"
entry: quantum-algorithms
status: OPEN
origin: Scott Aaronson and Andris Ambainis, 2009 (STOC 2011 version)
ratings:
  difficulty: 58
  applicationValue: 5
  leverage: 41
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Aaronson: The Need for Structure in Quantum Speedups (with Ambainis)"
    url: https://arxiv.org/abs/0911.0996
  - title: "Bhattacharya: Random Restrictions of Bounded Low Degree Polynomials are Juntas"
    url: https://arxiv.org/abs/2402.13952
  - title: "Dinur, Friedgut, Kindler, O’Donnell: On the Fourier tails of bounded functions over the discrete cube (STOC 2006)"
    url: https://doi.org/10.1145/1132516.1132580
  - title: "Girish, Mittal, Nehoran, Raz: Distributional Variants of the Aaronson-Ambainis Conjecture (preprint, 2026)"
    url: https://arxiv.org/abs/2609.35327
timeline:
  - date: 2006-05-21
    title: Exponential-in-degree bound
    body: Dinur, Friedgut, Kindler and O'Donnell proved an influence lower bound exponentially small in the degree (STOC 2006).
    source: https://doi.org/10.1145/1132516.1132580
  - date: 2009-11-05
    title: Conjecture stated with quantum consequences
    body: Aaronson and Ambainis posed the conjecture and showed it implies classical simulation of quantum query algorithms on most inputs.
    source: https://arxiv.org/abs/0911.0996
  - date: 2024-02-21
    title: Random restrictions
    body: Bhattacharya proved the conjecture for a non-negligible fraction of random restrictions (ITCS 2025).
    source: https://arxiv.org/abs/2402.13952
  - date: 2026-09-28
    title: Distributional variants equivalent (preprint)
    body: Girish, Mittal, Nehoran and Raz proved that biased-product and slice versions are equivalent to the uniform conjecture. Not refereed.
    source: https://arxiv.org/abs/2609.35327
explainer:
  oneLine: Must every bounded, low-degree function of many yes/no inputs that genuinely varies have one input that matters noticeably?
  flow:
    - Bounded varying function of many bits
    - "Low degree: only small combinations"
    - "Conjecture: some bit matters a fair amount"
    - True ⇒ quantum queries only polynomially better
    - Only exponentially weak version proved
  glossary:
    - term: Boolean function
      meaning: A function whose inputs are yes/no (or +1/−1) values.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
    - term: influence
      meaning: How much changing one input switch changes the output, on average.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
    - term: variance
      meaning: A measure of how much a quantity varies from its average.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
    - term: degree (of a polynomial)
      meaning: The largest number of variables multiplied together in any one term.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
    - term: Fourier analysis on the cube
      meaning: Writing a function of yes/no inputs as a sum of simple parity patterns.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
    - term: query complexity
      meaning: The number of times an algorithm must look at its input.
      link: https://en.wikipedia.org/wiki/Query_complexity
    - term: quantum algorithm
      meaning: A method designed for quantum computers.
      link: /research/quantum-algorithms
    - term: junta
      meaning: A function that depends on only a few of its input variables.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
    - term: multilinear polynomial
      meaning: A polynomial in which no variable appears squared or higher; every function of ±1 inputs can be written as one.
      link: https://en.wikipedia.org/wiki/Multilinear_polynomial
    - term: random restriction
      meaning: Fixing a random subset of a function's inputs to random values and studying the simpler function that remains.
      link: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
  readFirst:
    - title: Analysis of Boolean functions (Wikipedia)
      url: https://en.wikipedia.org/wiki/Analysis_of_Boolean_functions
      why: Introduces influence, variance and Fourier expansions.
    - title: Query complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Query_complexity
      why: Defines the classical and quantum query models in the motivation.
    - title: Quantum algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_algorithm
      why: Where quantum speedups are known to exist.
site:
  aiReviewed: true
---

Let $f:\{-1,1\}^n\to[-1,1]$ be a multilinear polynomial of degree at most $d$ with variance $\mathrm{Var}[f]=\sum_{S\ne\emptyset}\hat f(S)^2$. The influence of coordinate $i$ is $\mathrm{Inf}_i[f]=\sum_{S\ni i}\hat f(S)^2$. The **Aaronson–Ambainis conjecture** states that there exists a constant $c>0$ such that $\max_i\mathrm{Inf}_i[f]\ge \mathrm{poly}\!\big(\mathrm{Var}[f]/d\big)$, concretely $\ge(\mathrm{Var}[f]/d)^{c}$. Dinur, Friedgut, Kindler and O'Donnell (2006) proved a weaker statement in which the influence bound is exponentially small in $d$. The conjecture is a statement about Fourier analysis on the hypercube; its interest is that, if true, every quantum query algorithm making $T$ queries on a random input can be simulated, up to small error, by a classical algorithm making $\mathrm{poly}(T)$ queries.

# State of the art

**Known.** The Dinur–Friedgut–Kindler–O'Donnell theorem (STOC 2006) gives a maximum influence that is polynomial in $\mathrm{Var}[f]$ but exponentially small in $d$. Montanaro (2012) proved the conjecture for block-multilinear forms whose coefficients all have equal magnitude, and Bansal, Sinha and de Wolf (2022) for completely bounded block-multilinear forms. A 2020 claimed proof by Keller and Klein contained an error and was withdrawn. Bhattacharya (arXiv:2402.13952, ITCS 2025) proved that the conjecture holds for a non-negligible fraction of random restrictions when the variance is not too small, using the junta-approximation theorem of Filmus, Hatami, Keller and Lifshitz. Girish, Mittal, Nehoran and Raz (arXiv:2609.35327, September 2026, preprint) show that the analogues of the conjecture for biased product distributions and for Hamming slices are each equivalent to the original.

**Related but distinct.** The October 2026 OpenAI release includes an unrefereed AI-generated claim that the worst-case relation $R(f)=O(Q(f)^4)$ for total Boolean functions is tight; that concerns worst-case query complexity of total functions, not the average-case simulation the conjecture is about.

No proof or counterexample was found as of October 2026.

# Applications

If true, quantum query speed-ups over classical algorithms for total Boolean functions on average inputs are at most polynomial, which clarifies where exponential quantum speed-ups can live (structured problems, not unstructured search over total functions). The conjecture also bears on bounded-depth quantum circuits and on pseudo-random function testing. There are no engineering applications.

# Resolution criteria

A proof of $\max_i\mathrm{Inf}_i[f]\ge(\mathrm{Var}[f]/d)^{C}$ for a universal constant $C$ for all bounded degree-$d$ multilinear $f$, or an explicit family of bounded polynomials with $\max_i\mathrm{Inf}_i[f]\le(\mathrm{Var}[f]/d)^{\omega(1)}$. Any improvement of the DFKO bound to $2^{-o(d)}$ would be partial progress.

# Rating rationale

A crisp analytic conjecture with partial results (special cases, exponential-in-degree bound, restriction results) and one retracted proof, so a path is visible but not obvious. Application value is minimal. Leverage is moderate: it decides how structure-free quantum speed-ups can be.

# Work mix rationale

Fourier-analytic proof; small-case computation only for examples.

# Verification

The statement is an influence bound for bounded low-degree multilinear polynomials, max_i Inf_i\[f] >= (Var\[f]/d)^C, or an explicit counterexample family. Mathlib has no Boolean-function analysis library, so it cannot be Lean-checked yet. Experts review the proof, and a counterexample could be partly screened numerically on small cases.

# Plain explanation

Picture a machine with n switches, each on or off, that outputs a number between minus one and one. Say the output varies from case to case, so it is not almost constant. The machine is also fairly simple in the sense that its formula involves only small combinations of switches, at most d of them at a time.

The conjecture says there must then be some individual switch that has a real influence on the output, at least a reasonable fraction depending on how much the output varies and on d. In other words a simple, varying function cannot be spread so thinly that every switch matters only a tiny bit.

The result that has been proved is weaker. It guarantees a switch of some influence, but the guarantee shrinks exponentially as d grows, so it is useless for large d.

Why do quantum computing researchers care? Because if the conjecture is true, a whole kind of huge quantum speedup is impossible. Any quantum procedure that makes T look-ups at its input could be mimicked, on typical inputs, by an ordinary procedure making only a polynomial in T look-ups. That would show that huge quantum speedups need inputs with special structure; they cannot appear on plain random inputs.

It has resisted proof for well over a decade. Claimed proofs have had errors. It is a pure maths question about how influence is spread among variables.

# Student explanation

**Setup.** Let $f:\{-1,1\}^n\to[-1,1]$ be a multilinear polynomial of degree at most $d$, written in the Fourier basis as $f=\sum_S\hat f(S)\chi_S$. Its variance is $\mathrm{Var}[f]=\sum_{S\ne\emptyset}\hat f(S)^2$. The _influence_ of coordinate $i$ is $\mathrm{Inf}_i[f]=\sum_{S\ni i}\hat f(S)^2$, which measures how much coordinate $i$ affects $f$.

**Conjecture** (Aaronson and Ambainis). There is a constant $c>0$ such that

$\max_i\mathrm{Inf}_i[f]\ \ge\ (\mathrm{Var}[f]/d)^{c}.$

In words: a bounded low-degree function that is not nearly constant has some coordinate with influence at least polynomial in $\mathrm{Var}/d$.

**What is known.** Dinur, Friedgut, Kindler and O'Donnell (2006) proved a weaker statement in which the guaranteed influence is polynomial in the variance but exponentially small in $d$. Montanaro (2012) proved the conjecture for block-multilinear forms whose coefficients all have the same magnitude, and Bansal, Sinha and de Wolf (2022) for completely bounded block-multilinear forms. A claimed proof by Keller and Klein in 2020 contained an error and was withdrawn. Bhattacharya (2024/2025) proved the conjecture holds for a non-negligible fraction of random restrictions when the variance is not too small. A 2026 preprint shows that the analogues for biased product distributions and for Hamming slices are each equivalent to the original. No proof or counterexample was found as of October 2026.

**Why quantum people care.** If true, every quantum query algorithm making $T$ queries to its input, on a random input, can be simulated up to small error by a classical algorithm making $\mathrm{poly}(T)$ queries. So for any task, if success is only needed on most uniformly random inputs, quantum algorithms save at most a polynomial factor in queries. This clarifies where exponential speedups can live: in problems with a promise or structure on the inputs (like Shor's period finding), not on unstructured random inputs.

**A distinct claim.** An unrefereed AI-generated claim in October 2026 concerns the worst-case relation between classical and quantum query complexity of total functions, not the average-case statement here.

**Why it is hard.** The existing tools lose a factor exponential in $d$ because they pass through hypercontractivity and junta approximations. A proof needs a way to exploit the low degree of the polynomial more efficiently.
