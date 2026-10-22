---
type: problem
slug: agoh-giuga-conjecture
title: "The Agoh–Giuga conjecture: a congruence that detects primes"
entry: analytic-number-theory
status: OPEN
origin: Giuseppe Giuga, 1950; Takashi Agoh, 1995 (Bernoulli form)
ratings:
  difficulty: 69.5
  applicationValue: 3.2
  leverage: 8
workMix:
  theory: 72
  engineering: 0
  compute: 28
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Formal Conjectures: Agoh–Giuga (Lean statements)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/AgohGiuga.lean
  - title: "Borwein, Borwein, Borwein, Girgensohn: Giuga's conjecture on primality (Amer. Math. Monthly 103, 1996)"
    url: https://doi.org/10.2307/2975213
  - title: Agoh–Giuga conjecture (Wikipedia)
    url: https://en.wikipedia.org/wiki/Agoh%E2%80%93Giuga_conjecture
  - title: Giuga number (Wikipedia)
    url: https://en.wikipedia.org/wiki/Giuga_number
timeline:
  - date: 1950-01-01
    title: Giuga's conjecture
    body: Giuga proposes the power-sum characterization of primes (Istituto Lombardo Rendiconti 14).
    source: https://en.wikipedia.org/wiki/Agoh%E2%80%93Giuga_conjecture
  - date: 1996-01-01
    title: 13,800-digit lower bound
    body: Borwein, Borwein, Borwein and Girgensohn show a counterexample is Carmichael and Giuga with at least 13,800 digits (year only known).
    source: https://doi.org/10.2307/2975213
explainer:
  oneLine: Does adding the (n−1)-th powers of 1 through n−1 and getting −1 mod n happen only for primes?
  flow:
    - Primes pass the power-sum test
    - Does any composite number pass?
    - A passer would need 13,800+ digits
    - None known, none excluded
  glossary:
    - term: Fermat's little theorem
      meaning: For a prime p, raising a number not divisible by p to the power p minus 1 leaves remainder 1 modulo p.
      link: https://en.wikipedia.org/wiki/Fermat%27s_little_theorem
    - term: Bernoulli numbers
      meaning: A sequence of rational numbers that appear in formulas for power sums.
      link: https://en.wikipedia.org/wiki/Bernoulli_number
    - term: Giuga number
      meaning: A composite number n where every prime factor p divides n over p minus 1.
      link: https://en.wikipedia.org/wiki/Giuga_number
    - term: Carmichael number
      meaning: A composite number that passes the Fermat primality test for all bases.
      link: https://en.wikipedia.org/wiki/Carmichael_number
    - term: congruence
      meaning: Two numbers have the same remainder after division by n.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: Lehmer's totient problem
      meaning: A related unsolved question about a congruence that detects primes.
      link: https://en.wikipedia.org/wiki/Lehmer%27s_totient_problem
  readFirst:
    - title: Agoh–Giuga conjecture (Wikipedia)
      url: https://en.wikipedia.org/wiki/Agoh%E2%80%93Giuga_conjecture
      why: Statement, equivalent forms and bounds.
    - title: Giuga number (Wikipedia)
      url: https://en.wikipedia.org/wiki/Giuga_number
      why: What a counterexample must look like.
site:
  aiReviewed: true
---

Giuga's form: an integer $n \ge 2$ is prime if and only if
$1^{n-1} + 2^{n-1} + \cdots + (n-1)^{n-1} \equiv -1 \pmod n.$
Agoh's equivalent form uses Bernoulli numbers: $n$ is prime iff $nB_{n-1} \equiv -1 \pmod n$. The forward direction (primes satisfy it) follows from Fermat's little theorem; the open part is that no composite satisfies it.

Lean 4 statement (Giuga's formulation) in the Formal Conjectures corpus:

```lean
def AgohGiugaSum : Prop := ∀ p ≥ 2, p.Prime ↔
  p ∣ 1 + ∑ i ∈ Finset.Ioo 0 p, i^(p - 1 : ℕ)

theorem agoh_giuga.variants.giuga : AgohGiugaSum
```

# State of the art

Borwein, Borwein, Borwein and Girgensohn (1996) showed a composite counterexample must be both a **Carmichael number** and a **Giuga number**, and would have at least 13,800 digits. Sorini (2001), an Italian working paper whose title describes a heuristic method (Quaderni di Economia, Matematica e Statistica, Urbino), is cited for raising this to about $10^{36067}$; it is not refereed, so the 13,800-digit bound is the safe one to quote. Giuga numbers satisfy $p \mid (n/p - 1)$ for every prime $p \mid n$; thirteen are known (the first is $30$, the twelfth has 34 digits), all even, and an odd Giuga number would need at least 14 prime factors. The corpus states the equivalence of the two formulations as a known result (`agoh_giuga.variants.equivalence`), but its Lean proof is still left as `sorry`.

# Applications

None directly. It belongs to the family of primality characterizations whose false positives (Carmichael-type numbers) are exactly what cryptographic primality tests are designed to avoid.

# Resolution criteria

A Lean proof of `agoh_giuga.variants.giuga` (the Bernoulli form `agoh_giuga` would then follow once the corpus' equivalence statement is also proved in Lean), or an explicit composite $n$ with $n \mid 1 + \sum_{i<n} i^{n-1}$, which the kernel can check.

# Rating rationale

Difficulty 69.5: open since 1950, with a counterexample forced to be both a Carmichael and a Giuga number of at least 13,800 digits, but no argument that the two conditions are incompatible; a sibling of Lehmer's problem (72), slightly lower because the structure of a counterexample is sharper. Application value 3.2: a primality characterization whose false positives are the Carmichael numbers that practical tests already handle. Leverage 8: isolated.

# Work mix rationale

The structure theory (Carmichael and Giuga conditions) is the main content; search effort has already pushed the size bound far.

# Verification

Statement: `AgohGiuga.agoh_giuga.variants.giuga` (and `agoh_giuga` for the Bernoulli form, using Mathlib's `bernoulli'`) in [formal-conjectures](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/AgohGiuga.lean). Mathlib supplies `Nat.Prime`, `Finset.Ioo` and Bernoulli numbers ([NumberTheory.Bernoulli](https://leanprover-community.github.io/mathlib4_docs/Mathlib/NumberTheory/Bernoulli.html)); the Giuga-number definitions are in the corpus file itself, which also states the equivalence of the two formulations but leaves its proof as `sorry`, so a proof of one form does not yet give the other in Lean. A counterexample is a single composite $n$ that Lean can check by evaluating the power sum modulo $n$ (kernel-checkable with fast modular exponentiation lemmas). A proof must cover all $n \ge 2$. Judge with Comparator against the pinned statement.

# Plain explanation

Here is a strange way to test whether a number is prime. Take a number n. Raise each of the numbers 1, 2, up to n minus 1 to the power n minus 1, and add them all up. Then divide by n and look at what is left over. For every prime n, the leftover is exactly one less than n, which is the same as saying the sum plus one divides evenly by n.

Giuga guessed in 1950 that this happens only for primes. For any number that is not prime, the leftover should be something else. Takashi Agoh found a version of the same claim using special fractions called Bernoulli numbers.

Nobody has found a number that breaks the rule, and a lot is known about what a breaker would look like. It would have to be one of a rare kind of number, with more than 13,000 digits and probably far more. But rare is not impossible, and no one can prove it doesn't exist. In this project, the exact statement is written in Lean, so a proof or a counterexample can be checked by the computer.

# Student explanation

**Modular arithmetic.** "$a\equiv b \pmod n$" means that $a$ and $b$ leave the same remainder on division by $n$ (in Python, `a % n == b % n`). "$\equiv -1 \pmod n$" means the remainder is $n-1$.

**Fermat's little theorem.** If $p$ is prime and does not divide $a$, then $a^{p-1}\equiv1\pmod p$. Try $p=5$: $2^4=16$, $3^4=81$ and $4^4=256$ all leave remainder 1.

**Giuga's test.** Add up $1^{n-1}+2^{n-1}+\cdots+(n-1)^{n-1}$. If $n=p$ is prime, each of the $p-1$ terms is $\equiv1$, so the sum is $\equiv p-1\equiv-1\pmod p$. Giuga conjectured in 1950 that the converse also holds: if the sum is $\equiv-1\pmod n$, then $n$ is prime. For $n=6$ the sum is $1+32+243+1024+3125=4425$, and $4425+1=4426$ is not a multiple of 6, so 6 fails, as a composite should. For $n=7$ the sum of sixth powers is $67171$, and $67172=7\cdot9596$, so 7 passes. Agoh (1995) gave an equivalent form using _Bernoulli numbers_, the rational numbers that appear in formulas for sums of powers such as $1^2+2^2+\cdots+m^2$.

**In Lean.** For every $p\ge2$: `p.Prime ↔ p ∣ 1 + ∑ i ∈ Finset.Ioo 0 p, i^(p - 1)`. The corpus also states the Bernoulli form and the equivalence of the two; the equivalence is labelled as known, but its Lean proof is still left blank.

**What a counterexample would need.** Borwein, Borwein, Borwein and Girgensohn (1996) proved that a composite passing the test must be a _Carmichael number_ (a composite that passes Fermat's test for every base coprime to it) and a _Giuga number_ (for every prime $p$ dividing $n$, $p$ divides $n/p-1$), and must have at least 13,800 digits. An unrefereed Italian working paper by Sorini (2001) is cited for about $10^{36067}$. Thirteen Giuga numbers are known; the smallest is $30=2\cdot3\cdot5$ (check: $30/2-1=14$, $30/3-1=9$, $30/5-1=5$). All known ones are even, while Carmichael numbers are always odd, so none of them is a counterexample.

**Why it is stuck.** Each condition is very restrictive, but nobody has shown that a number can never satisfy both at once.

**How it is checked.** A counterexample is one number plus a computation of the sum modulo $n$ that Lean can verify with fast modular exponentiation; a proof must cover every $n\ge2$.
