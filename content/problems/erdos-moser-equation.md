---
type: problem
slug: erdos-moser-equation
title: "The Erdős–Moser equation: 1^k + 2^k + … + (m−1)^k = m^k has only the solution k = 1, m = 3"
entry: analytic-number-theory
status: OPEN
origin: Leo Moser, 1953
ratings:
  difficulty: 65
  applicationValue: 1.5
  leverage: 6
workMix:
  theory: 70
  engineering: 0
  compute: 30
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Formal Conjectures: Erdős–Moser (Lean statement)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/ErdosMoser.lean
  - title: "Gallot, Moree, Zudilin: The Erdős–Moser equation revisited using continued fractions (Math. Comp. 80, 2011)"
    url: https://doi.org/10.1090/S0025-5718-2010-02439-1
  - title: "Moree: Moser's mathemagical work on the equation 1^k+...+(m-1)^k = m^k (Rocky Mountain J. Math. 43, 2013)"
    url: https://doi.org/10.1216/RMJ-2013-43-5-1707
  - title: Erdős–Moser equation (Wikipedia)
    url: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Moser_equation
timeline:
  - date: 1953-01-01
    title: Moser's bound
    body: Leo Moser shows any other solution is astronomically large (Scripta Mathematica 19).
    source: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Moser_equation
  - date: 2000-01-01
    title: Exact computation to 10^9,321,155
    body: Butske, Jaje and Mayernik (Math. Comp. 69; year only known).
    source: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Moser_equation
  - date: 2011-01-01
    title: Continued-fraction method to 10^1,667,658,416
    body: Gallot, Moree and Zudilin (Math. Comp. 80; year only known).
    source: https://doi.org/10.1090/S0025-5718-2010-02439-1
explainer:
  oneLine: Does 1^k + 2^k + … + (m−1)^k = m^k have any solution other than k = 1, m = 3?
  flow:
    - "One solution known: k=1, m=3"
    - Algebra pins k/m near ln 2
    - Continued fractions prune candidates
    - Any other has billions of digits
  glossary:
    - term: power sum
      meaning: The sum of the same power of consecutive whole numbers, such as 1 squared plus 2 squared plus 3 squared.
      link: https://en.wikipedia.org/wiki/Faulhaber%27s_formula
    - term: Bernoulli numbers
      meaning: A sequence of rational numbers that appear in formulas for power sums.
      link: https://en.wikipedia.org/wiki/Bernoulli_number
    - term: continued fraction
      meaning: A way of writing a number as a chain of whole numbers that gives the best rational approximations.
      link: https://en.wikipedia.org/wiki/Continued_fraction
    - term: convergent
      meaning: One of the best-approximating fractions in a continued fraction.
      link: https://en.wikipedia.org/wiki/Continued_fraction
    - term: natural logarithm of 2
      meaning: The number about 0.693 that appears when halving repeatedly.
      link: https://en.wikipedia.org/wiki/Natural_logarithm_of_2
  readFirst:
    - title: Erdős–Moser equation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Moser_equation
      why: Summary and the main bounds.
    - title: Faulhaber's formula (Wikipedia)
      url: https://en.wikipedia.org/wiki/Faulhaber%27s_formula
      why: The formula for sums of powers behind the problem.
site:
  aiReviewed: true
---

Is $(k, m) = (1, 3)$ the only solution in positive integers of
$1^k + 2^k + \cdots + (m-1)^k = m^k\ ?$

Lean 4 statement in the Formal Conjectures corpus:

```lean
def powerSum (k m : ℕ) : ℕ := ∑ i ∈ Finset.Ico 1 m, i ^ k

theorem erdos_moser_conjecture :
    ∀ k m : ℕ, 0 < k → 0 < m → powerSum k m = m ^ k → k = 1 ∧ m = 3
```

# State of the art

Moser (1953) showed that any further solution has $m > 10^{10^6}$ (see Moree's survey). Butske, Jaje and Mayernik (2000) replaced estimates by exact computation and raised the bound to $m > 1.485\times 10^{9{,}321{,}155}$. Gallot, Moree and Zudilin (2011) used continued fractions of $\ln 2$ (the quantity $2k/(2m-3)$ must be a convergent) to reach $m > 2.7139\times 10^{1{,}667{,}658{,}416}$. Moree also gives congruence conditions on $m$ (for example $m \equiv 3 \pmod 8$). All of this narrows where a solution could hide but gives no route to excluding one.

# Applications

None. The problem is a probe of how power sums and Bernoulli polynomials interact; the tools (Bernoulli number congruences, continued fractions with huge denominators) are classical number-theory machinery.

# Resolution criteria

A Lean proof of `erdos_moser_conjecture` as stated, or an explicit counterexample $(k,m)$ with $k, m$ large enough that the kernel can still check the identity by computation (probably with a certified bignum procedure).

# Rating rationale

Difficulty 65: elementary to state, with no method for excluding solutions beyond astronomical bounds from Bernoulli-number congruences and continued fractions; below Agoh–Giuga (69.5) and Lehmer (72) because it has a smaller literature and fewer failed structural attacks, close to union-closed sets (66). Application value 1.5 and leverage 6: self-contained; the lowest in the number-theory set.

# Work mix rationale

Bounds come from computation with Bernoulli numbers and continued fractions; excluding all solutions needs a new argument.

# Verification

Statement: `ErdosMoser.erdos_moser_conjecture` in [formal-conjectures](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/ErdosMoser.lean), with the small helper `powerSum` shown in the statement; only core Lean and Mathlib (`Finset.Ico`, `Finset.sum`) are used, so no new definitions are needed. The file also proves sanity checks (`powerSum 1 3 = 3^1` by `decide`) that a reviewer should keep. A counterexample would be an explicit pair $(k, m)$ whose identity Lean can check with kernel arithmetic on very large integers; a proof must handle all $(k, m)$. Use Comparator to pin the statement.

# Plain explanation

Add the first few whole numbers, stopping just before some number m: 1 plus 2 equals 3. That sum is exactly m when m is 3. Now do the same with squares: 1 squared plus 2 squared is 5, not 9. With cubes: 1 plus 8 is 9, not 27. The question is whether any pair of powers ever makes the sum of all the smaller numbers raised to that power equal to m raised to the same power.

Only one such pair is known: adding up to 3 with power one. Leo Moser asked in 1953 whether it is the only one. He showed that if another exists, m must be absurdly large, with more than a million digits. Computers have since pushed the bound to more than a billion digits, and a trick using the fraction digits of the number log 2 pushed it further.

Why can't we finish? Big sums of powers behave like an integral that is just a bit too small, so the equation sits near the edge of possibility for every power, and no method can show it never lands exactly. The check here would be Lean: either a proof for all numbers or an explicit pair.

# Student explanation

**Statement.** For positive integers $k$ and $m$, compare the sum of the first $m-1$ $k$-th powers with the next $k$-th power:
$S_k(m)=1^k+2^k+\cdots+(m-1)^k \quad\text{and}\quad m^k.$
The **Erdős–Moser equation** asks when they are equal. The only known solution is $(k,m)=(1,3)$: $1+2=3$. In Lean the corpus defines `powerSum k m` as this sum and states that `powerSum k m = m ^ k` forces `k = 1 ∧ m = 3`.

**Worked examples.** For $k=1$: $1+2+\cdots+(m-1)=m(m-1)/2$, which equals $m$ exactly when $m=3$. For $k=2$: $\sum_{i<m}i^2=(m-1)m(2m-1)/6$; setting this equal to $m^2$ gives $(m-1)(2m-1)=6m$, a quadratic with no integer root. Each $k$ gives one polynomial equation in $m$, and the question is whether any of them has an integer root other than the first.

**Where a solution would have to be.** Write $S_k(m)=m^k\sum_{j\ge1}(1-j/m)^k$. For large $m$, $(1-j/m)^k\approx e^{-jk/m}$, a geometric series that sums to about $1/(e^{k/m}-1)$. Setting the total equal to $m^k$ forces $e^{k/m}\approx2$, so $k/m$ must be very close to $\ln 2$. Refined with Bernoulli numbers (the coefficients in the exact formulas for $S_k(m)$), Moser showed that $2k/(2m-3)$ must be an extremely good approximation to $\ln 2$; in continued-fraction language it must be a _convergent_ of $\ln 2$.

**Bounds.** Moser (1953): any other solution has $m>10^{10^6}$. Butske, Jaje and Mayernik (2000): $m>1.485\times10^{9{,}321{,}155}$, by exact computation. Gallot, Moree and Zudilin (2011): $m>2.7139\times10^{1{,}667{,}658{,}416}$, by testing the convergents of $\ln 2$. Moree also showed $m\equiv3\pmod 8$.

**Computation versus proof.** These bounds come from testing necessary conditions over enormous ranges. A single solution larger than every bound would still be consistent with all of them, so only a proof (for all $k$ and $m$) or an explicit solution can settle the question.

**How it is checked.** A Lean proof of the corpus statement, or an explicit pair $(k,m)$ whose identity the kernel can verify with certified big-integer arithmetic.
