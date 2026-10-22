---
type: problem
slug: lehmer-totient-problem
title: "Lehmer's totient problem: is there a composite n with φ(n) dividing n − 1?"
entry: analytic-number-theory
status: OPEN
origin: Derrick Henry Lehmer, 1932
ratings:
  difficulty: 72
  applicationValue: 4
  leverage: 10
workMix:
  theory: 72
  engineering: 0
  compute: 28
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Formal Conjectures: Lehmer's totient problem (Lean statement)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/LehmerTotient.lean
  - title: Lehmer's totient problem (Wikipedia, with the bounds of Cohen-Hagis, Burcsi et al., Luca-Pomerance)
    url: https://en.wikipedia.org/wiki/Lehmer%27s_totient_problem
  - title: "Lehmer: On Euler's totient function (Bull. Amer. Math. Soc. 38, 1932)"
    url: https://doi.org/10.1090/S0002-9904-1932-05521-5
links:
  - to: agoh-giuga-conjecture
    kind: RELATED
    note: Both ask whether a congruence characterizes primes, and any counterexample to either would have to be a Carmichael number.
timeline:
  - date: 1932-01-01
    title: Problem posed with first constraints
    body: Lehmer shows a solution must be odd, squarefree, a Carmichael number and have at least 7 prime factors.
    source: https://doi.org/10.1090/S0002-9904-1932-05521-5
  - date: 1980-01-01
    title: At least 14 prime factors
    body: Cohen and Hagis raise the bound on distinct prime factors (year only known).
    source: https://en.wikipedia.org/wiki/Lehmer%27s_totient_problem
  - date: 2011-01-01
    title: Counting bound and the 3 | n case
    body: Luca and Pomerance bound the number of solutions; Burcsi, Czirbusz and Farkas push the 3 | n case to enormous size (year only known).
    source: https://en.wikipedia.org/wiki/Lehmer%27s_totient_problem
explainer:
  oneLine: Is there a non-prime number n for which the count of numbers coprime to n divides n minus 1?
  flow:
    - For primes, the count equals n minus 1
    - Does a composite number share this?
    - An example needs 14+ odd prime factors
    - None known, none ruled out
  glossary:
    - term: Euler's totient
      meaning: The number of integers from 1 to n that share no factor with n.
      link: https://en.wikipedia.org/wiki/Euler%27s_totient_function
    - term: composite number
      meaning: A whole number above 1 that is not prime.
      link: https://en.wikipedia.org/wiki/Composite_number
    - term: squarefree
      meaning: A number not divisible by the square of any prime.
      link: https://en.wikipedia.org/wiki/Square-free_integer
    - term: Carmichael number
      meaning: A composite number that fools a standard primality test based on Fermat's little theorem.
      link: https://en.wikipedia.org/wiki/Carmichael_number
    - term: coprime
      meaning: Having no common factor other than 1.
      link: https://en.wikipedia.org/wiki/Coprime_integers
    - term: Agoh–Giuga conjecture
      meaning: A related claim that a power-sum congruence detects primes.
      link: https://en.wikipedia.org/wiki/Agoh%E2%80%93Giuga_conjecture
  readFirst:
    - title: Lehmer's totient problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lehmer%27s_totient_problem
      why: Statement and known constraints.
    - title: Carmichael number (Wikipedia)
      url: https://en.wikipedia.org/wiki/Carmichael_number
      why: Why these numbers are the natural suspects.
site:
  aiReviewed: true
---

Does there exist a composite integer $n$ such that Euler's totient $\varphi(n)$ divides $n-1$? For a prime $n$ the divisibility always holds, so the question is whether it characterizes primes.

Lean 4 statement in the Formal Conjectures corpus, where the open question is whether the existential holds:

```lean
theorem lehmer_totient :
    ∃ n > 1, ¬Prime n ∧ Nat.totient n ∣ n - 1
```

# State of the art

No composite solution is known. Lehmer (1932) showed a solution must be odd, squarefree, have at least 7 distinct prime factors and be a Carmichael number. Cohen and Hagis (1980) raised the prime-factor count to at least 14. Hagis (1988) showed that if $3$ divides a solution then it exceeds $10^{1{,}937{,}042}$ and has at least 298,848 prime factors; Burcsi, Czirbusz and Farkas (2011, _Ann. Univ. Sci. Budapest. Sect. Comput._ 35) raised this to more than $10^{360{,}000{,}000}$ and at least 40 million prime factors. Luca and Pomerance (2011) bound the number of solutions up to $X$ by roughly $X^{1/2}/(\log X)^{1/2}$. Because solutions are rare or absent and any search must reach enormous sizes, neither computation nor current theory settles it.

# Applications

None. It is a clean test of what a congruence-type condition can say about primality, close in spirit to the primality tests (Fermat, Carmichael) that underlie cryptographic key generation, but no practice depends on the answer.

# Resolution criteria

Either a Lean proof of `lehmer_totient` (an explicit composite $n$ with $\varphi(n) \mid n-1$, checkable by the kernel) or a Lean proof of its negation, i.e. that $\varphi(n)\mid n-1$ forces $n$ prime.

# Rating rationale

Difficulty 72: ninety years old with no line of attack beyond narrowing the shape of a hypothetical solution (Carmichael, squarefree, at least 14 prime factors), comparable to the Hadamard conjecture (70.5) and below Lindelöf (74), where at least the exponent keeps moving. A single large example could settle it, which keeps it below the Landau-type problems (84 and up). Application value 4: pseudoprime-type conditions matter to primality testing, but no practice depends on the answer. Leverage 10: essentially stand-alone.

# Work mix rationale

A proof of nonexistence needs new structure theory; a counterexample would be found by a search constrained by the known shape (odd, squarefree, Carmichael, many primes).

# Verification

Statement: `LehmerTotient.lehmer_totient` in [formal-conjectures](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/LehmerTotient.lean): `∃ n > 1, ¬Prime n ∧ Nat.totient n ∣ n - 1`. Mathlib has `Nat.totient` with a large API ([Data.Nat.Totient](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Data/Nat/Totient.html)), so no new definitions are needed. A positive answer is a certificate: an explicit $n$ plus its factorization, which Lean can verify (`Nat.totient` of a product of distinct primes is a product of $p-1$, so the check reduces to big-integer arithmetic). A negative answer needs a genuine proof. Judge acceptance with Comparator against the pinned statement.

# Plain explanation

For a number n, count how many of the numbers from 1 up to n share no common factor with it. Call that count phi of n. If n is prime, every smaller number qualifies, so phi of n is n minus 1, and of course n minus 1 divides itself. Lehmer asked in 1932 whether any number that is not prime can behave this way: its count divides n minus 1.

That would give a tidy test for primes, which is why people care. No such number is known. Lehmer showed any example would have to be odd and have no repeated prime factors, and later work showed it would need at least fourteen different prime factors. Another result says that if it is divisible by three it would be larger than a number with hundreds of millions of digits.

So the hunt is for a needle in a haystack that may be empty. Computers cannot settle it because the haystack is endless, and so far nobody can prove the haystack is empty either. In this project the check would be Lean: an explicit example would be verified by the kernel, and a proof of the opposite would be a theorem Lean accepts.

# Student explanation

**Euler's totient.** For a positive integer $n$, $\varphi(n)$ counts the numbers from $1$ to $n$ that share no factor with $n$ other than 1 (they are _coprime_ to $n$). For example $\varphi(10)=4$: the numbers 1, 3, 7, 9. If $p$ is prime, every number from 1 to $p-1$ is coprime to it, so $\varphi(p)=p-1$, and in particular $\varphi(p)$ divides $p-1$.

**The question.** Lehmer asked in 1932 whether this divisibility can happen for a _composite_ $n$ (a whole number above 1 that is not prime): is there a composite $n$ with $\varphi(n)\mid n-1$? If not, the condition is an exact test for primality. In Lean: `∃ n > 1, ¬Prime n ∧ Nat.totient n ∣ n - 1`.

**Try a few.** For a product of distinct primes, $\varphi(p_1p_2\cdots p_r)=(p_1-1)(p_2-1)\cdots(p_r-1)$. For $n=15=3\cdot5$: $\varphi(15)=8$, and 14 is not a multiple of 8. For $n=561=3\cdot11\cdot17$: $\varphi(561)=2\cdot10\cdot16=320$, and 560 is not a multiple of 320. Requiring $n-1$ to be a multiple of the whole product $\prod(p_i-1)$ is a strong condition, and no composite example has ever been found.

**What a solution would have to look like.** Lehmer proved that a solution must be odd, have no repeated prime factor (_squarefree_) and have at least 7 distinct prime factors; Cohen and Hagis (1980) raised this to 14. Each $p_i-1$ divides $\varphi(n)$ and hence $n-1$, which makes $n$ a _Carmichael number_: a composite that fools Fermat's primality test, because $a^{n-1}$ leaves remainder 1 on division by $n$ for every $a$ coprime to $n$. If 3 divides a solution, it has more than 40 million prime factors (Burcsi, Czirbusz and Farkas, 2011). Luca and Pomerance (2011) showed that solutions, if any exist, are rare: roughly at most $\sqrt X$ of them below $X$.

**Why it is stuck.** These results narrow the shape of a solution without ruling it out, and the remaining candidates are far too large to search.

**How an answer is checked.** A yes-answer is one number with its factorization: Lean can compute $\varphi(n)$ from the factors and check the divisibility with integer arithmetic. A no-answer needs a proof for every $n$. The problem is a cousin of the Agoh–Giuga conjecture, another congruence test for primes whose counterexamples would also have to be Carmichael numbers.
