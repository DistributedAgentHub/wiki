---
type: problem
slug: bounded-prime-gaps-parity-barrier
title: "Prime gaps beyond the sieve parity limit: H₁ < 6 under generalized Elliott–Halberstam"
entry: riemann-zeta-function
status: OPEN
origin: Twin prime conjecture, de Polignac 1849; Zhang 2013
ratings:
  difficulty: 80
  applicationValue: 2.5
  leverage: 35
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Polymath: Variants of the Selberg sieve, and bounded intervals containing many primes"
    url: https://arxiv.org/abs/1407.4897
  - title: "Maynard: Small gaps between primes"
    url: https://arxiv.org/abs/1311.4600
  - title: "Tao: The parity problem in sieve theory"
    url: https://terrytao.wordpress.com/2007/06/05/open-question-the-parity-problem-in-sieve-theory/
  - title: "Stadlmann: Bounded gaps between primes (H₁ ≤ 240; unrefereed)"
    url: https://arxiv.org/abs/2608.31126
  - title: "OpenAI: short gaps between primes manuscript (H₁ ≤ 186; unrefereed)"
    url: https://cdn.openai.com/pdf/51126fac-1b68-4128-9666-c908bcc16033/short_gaps.pdf
timeline:
  - date: 1973-01-01
    title: Chen’s theorem
    body: p + 2 is a prime or a product of two primes infinitely often (date approximate to the year).
    source: https://terrytao.wordpress.com/2007/06/05/open-question-the-parity-problem-in-sieve-theory/
  - date: 2013-11-19
    title: Maynard’s multidimensional sieve
    body: H₁ ≤ 600, and H₁ ≤ 12 under Elliott–Halberstam.
    source: https://arxiv.org/abs/1311.4600
  - date: 2014-07-18
    title: "Polymath8b: 246, 6 under GEH, and the parity limit"
    body: Shows that 6 is the best a sieve argument can give under GEH.
    source: https://arxiv.org/abs/1407.4897
  - date: 2026-08-31
    title: Unconditional bound 240 (preprint)
    body: Stadlmann; AI-produced claims of 212 and 186 followed, all unrefereed and all within the sieve framework.
    source: https://arxiv.org/abs/2608.31126
explainer:
  oneLine: Prove that primes come in close pairs under a standard assumption, getting past a known blind spot of sieve methods.
  flow:
    - Do primes keep coming in close pairs?
    - Sieve methods prove a bounded gap
    - Best possible from sieves alone is 6
    - Parity blind spot blocks twin primes
  glossary:
    - term: prime gap
      meaning: The difference between two consecutive prime numbers.
      link: https://en.wikipedia.org/wiki/Prime_gap
    - term: twin prime conjecture
      meaning: The conjecture that there are infinitely many pairs of primes differing by 2.
      link: https://en.wikipedia.org/wiki/Twin_prime
    - term: sieve
      meaning: A method that counts numbers surviving the removal of multiples of small primes.
      link: https://en.wikipedia.org/wiki/Sieve_theory
    - term: parity problem
      meaning: "The limit of sieves: they cannot tell numbers with an even number of prime factors from an odd number."
      link: https://en.wikipedia.org/wiki/Parity_problem_(sieve_theory)
    - term: admissible set
      meaning: A set of shifts that does not force one of the numbers n + h to be divisible by some small prime.
      link: https://en.wikipedia.org/wiki/Prime_k-tuple
    - term: Elliott-Halberstam conjecture
      meaning: A conjecture that primes are very evenly spread among arithmetic progressions, even for large moduli.
      link: https://en.wikipedia.org/wiki/Elliott%E2%80%93Halberstam_conjecture
    - term: Selberg sieve
      meaning: A sieve that uses carefully chosen weights to get the best possible upper bound on survivors.
      link: https://en.wikipedia.org/wiki/Selberg_sieve
    - term: Polymath project
      meaning: An online collaboration in which many mathematicians work together openly on a problem.
      link: https://en.wikipedia.org/wiki/Polymath_Project
    - term: Mobius function
      meaning: A function that records whether a number has an even or odd number of prime factors, or a repeated prime.
      link: https://en.wikipedia.org/wiki/M%C3%B6bius_function
    - term: Analytic number theory
      meaning: The use of calculus and complex analysis to study whole numbers.
      link: /research/analytic-number-theory
    - term: arithmetic progression
      meaning: A sequence with a constant step, such as 3, 7, 11, 15, ...; primes in one is a classic question.
      link: https://en.wikipedia.org/wiki/Arithmetic_progression
  readFirst:
    - title: "Quanta: After Prime Proof, an Unlikely Star Rises"
      url: https://www.quantamagazine.org/yitang-zhang-and-the-mystery-of-numbers-20150402/
      why: The story of Zhang's 2013 breakthrough.
    - title: Prime gap - Wikipedia
      url: https://en.wikipedia.org/wiki/Prime_gap
      why: Overview of known and conjectured gaps.
    - title: Parity problem (sieve theory) - Wikipedia
      url: https://en.wikipedia.org/wiki/Parity_problem_(sieve_theory)
      why: The barrier explained.
    - title: Twin prime - Wikipedia
      url: https://en.wikipedia.org/wiki/Twin_prime
      why: The conjecture the problem aims at.
site:
  aiReviewed: true
---

Let $H_1=\liminf_{n\to\infty}(p_{n+1}-p_n)$. Polymath8b proved $H_1\le6$ assuming the generalized Elliott–Halberstam conjecture (GEH), in the stronger form that for every admissible triple $(h_1,h_2,h_3)$ infinitely many $n$ have at least two of $n+h_1,n+h_2,n+h_3$ prime, and showed, by adapting Selberg's parity argument, that this is the best possible from purely sieve-theoretic input. The problem is to prove $H_1\le4$ (or $H_1=2$, the twin prime conjecture) under GEH or any other standard distributional hypothesis, which requires an argument that detects the parity of the number of prime factors, beyond sieve weights and level-of-distribution estimates.

# State of the art

**Open.** Chen (1973) proved infinitely many primes p with p + 2 a prime or a product of two primes. Zhang (2013) proved H₁ < 7·10^7; Maynard (arXiv:1311.4600) and Tao independently introduced multidimensional Selberg weights (H₁ ≤ 600, and H₁ ≤ 12 under Elliott–Halberstam); Polymath8b (arXiv:1407.4897) reached H₁ ≤ 246 unconditionally and H₁ ≤ 6 under GEH, and proved that sieve methods cannot go below 6 even under GEH. The unconditional bound moved in late-summer 2026 preprints that are not refereed: Stadlmann (arXiv:2608.31126) H₁ ≤ 240 via equidistribution for smooth moduli; an Axiom Math group claims 212; and an OpenAI manuscript released 3 September 2026 claims 186, with a Lean formalization conditional on stated exponential-sum and numerical assumptions. None of these touches the parity limit. Parity has been broken only for special sequences: Friedlander–Iwaniec (1998) for primes of the form x² + y⁴ and Heath-Brown (2001) for x³ + 2y³, using bilinear (Type II) information. Logarithmically averaged two-point Chowla (Tao, 2016) handles a parity-sensitive correlation but not with the prime weights needed here.

# Applications

None for engineering. A parity-breaking mechanism for prime tuples would transform sieve theory and the study of additive patterns in primes (Goldbach-type and twin-type problems); the sieve and bilinear technology is used throughout analytic number theory.

# Resolution criteria

A refereed proof that H₁ ≤ 4 under GEH (or under Elliott–Halberstam, or unconditionally), or of the twin prime conjecture under any standard distributional hypothesis. Improvements of the unconditional bound 246 do not count, since they stay within the sieve framework.

# Rating rationale

Needs the first parity-breaking argument for prime tuples, which seventy years of sieve theory have not produced, though the target is conditional on GEH and asks only for gap 4. So 80: below the twin prime conjecture (87 in calibration), which needs the same idea without the GEH assumption, and just below rank-two BSD (82); above diagonal Ramsey (78). Application value 2.5 matches twin primes. Leverage 35 is a little above twin primes (29) because a parity-breaking method would be reused across sieve problems.

# Work mix rationale

A new idea for detecting parity is needed; computation helped optimize sieve weights for the existing bounds but cannot cross the parity limit.

# Verification

The target is H_1 <= 4 under generalized Elliott-Halberstam, or any route past the sieve parity limit. Formal Conjectures has Elliott-Halberstam and twin-prime statements ([Wikipedia/ElliottHalberstamConjecture.lean](https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/ElliottHalberstamConjecture.lean)) and a prime-gap helper file, but a new method beyond the sieve has no formal template. Experts referee it; improvements to the unconditional 246 do not count.

# Plain explanation

Primes get rarer as you go up, but do they keep appearing in close pairs, such as 11 and 13, or 17 and 19? The twin prime conjecture says yes: infinitely many pairs differ by exactly two. No one has proved it.

In 2013 Yitang Zhang proved that infinitely many pairs of primes lie within 70 million of each other, the first bound of this kind. Then James Maynard and Terence Tao found a simpler method, and an online collaboration called Polymath brought the bound down to 246.

The method is a sieve, a way to filter numbers like straining pasta: throw out numbers with small factors, and the leftovers are more likely to be prime. If you assume an unproved but widely believed statement about how evenly primes spread, the generalized Elliott-Halberstam conjecture, the same method gets the gap down to 6.

The catch: the method cannot go below 6, even with that assumption. Sieves have a known blind spot, the parity problem: they cannot tell whether a number has an even or odd count of prime factors, and that is exactly the difference between a prime and a product of two primes.

The problem asks for a way past this blind spot, to prove a gap of 4 or even 2 under the same assumption. That needs a genuinely new idea.

The strainer analogy breaks here: parity is not a matter of finer holes but of something the strainer cannot see at all.

# Student explanation

**Setting.** Let $H_1=\liminf_{n\to\infty}(p_{n+1}-p_n)$ be the smallest gap that occurs infinitely often between consecutive primes. The twin prime conjecture is $H_1=2$. A set $\{h_1,\dots,h_k\}$ is _admissible_ if it does not cover all residue classes modulo any prime; the prime $k$-tuples conjecture says that every admissible set has infinitely many translates $n+h_i$ that are simultaneously prime.

**The breakthroughs.**

- Chen (1973): infinitely many primes $p$ with $p+2$ either prime or a product of two primes. This is as close as sieves get to twin primes unconditionally.
- Zhang (2013): $H_1<7\times10^7$.
- Maynard (arXiv 1311.4600) and, independently, Tao introduced _multidimensional Selberg weights_, giving $H_1\le600$, and $H_1\le12$ under the Elliott–Halberstam conjecture.
- Polymath8b (arXiv 1407.4897): $H_1\le246$ unconditionally, and $H_1\le6$ under the **generalized Elliott–Halberstam** (GEH) conjecture. The Elliott–Halberstam conjecture says primes up to $x$ are evenly spread among residue classes for almost all moduli up to $x^{1-\varepsilon}$, far beyond the $x^{1/2}$ that the Bombieri–Vinogradov theorem proves; the generalized form (GEH) asks the same for a wider class of weighted sequences.

**The parity barrier.** Selberg's parity argument shows that a sieve, using only information of the form 'how many numbers in this set are divisible by $d$', cannot distinguish integers with an even number of prime factors from those with an odd number. Primes have one factor; products of two primes have two. So sieve methods alone can detect numbers with at most two prime factors but cannot prove a number is prime. Polymath8b showed, by adapting this argument, that even under GEH the best a purely sieve-theoretic approach can give is $H_1\le6$, using the stronger form in which, among any admissible triple, infinitely often two entries are prime.

**The problem.** Prove $H_1\le4$, or $H_1=2$, under GEH or another standard distributional hypothesis. This requires an argument that _detects the parity_ of the number of prime factors, which means bringing in information beyond equidistribution in progressions. Candidate ideas involve bilinear (Type II) sums and the Möbius function's lack of correlation with structured sequences, which is the territory of the Chowla problem on this site.

**Recent news.** Late-summer 2026 preprints, not refereed, report improved unconditional bounds: Stadlmann claims $H_1\le240$, another group claims $212$, and an OpenAI manuscript claims $186$ with a Lean formalization that is conditional on stated exponential-sum and numerical assumptions. These are claims about the unconditional constant, not about breaking the parity barrier.

The interest lies partly in the fact that there is no known route past the barrier; every proof of bounded gaps so far lives on the sieve side of it.
