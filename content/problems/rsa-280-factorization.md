---
type: problem
slug: rsa-280-factorization
title: Factor RSA-280 (928 bits), the next RSA challenge number above the RSA-896 record
entry: number-field-sieve-factoring
status: OPEN
origin: RSA Factoring Challenge (1991); RSA-896 factored on 19 September 2026
ratings:
  difficulty: 22
  applicationValue: 28
  leverage: 10
workMix:
  theory: 5
  engineering: 40
  compute: 55
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: Weis, RSA-896 (author's post with parameters and timings)
    url: https://saweis.net/posts/rsa-896.html
  - title: Lu, Factoring RSA-260 (Cognition blog)
    url: https://cognition.com/blog/factoring-rsa-260
  - title: RSA numbers (Wikipedia; challenge values and status)
    url: https://en.wikipedia.org/wiki/RSA_numbers
  - title: "Boudot et al., Comparing the difficulty of factorization and discrete logarithm: a 240-digit experiment (CRYPTO 2020)"
    url: https://eprint.iacr.org/2020/697
timeline:
  - date: 2026-09-03
    title: RSA-260 factored
    body: Eric Lu at Cognition factored the 862-bit RSA-260 with a GPU-accelerated CADO-NFS (about 4,900 GPU-days).
    source: https://cognition.com/blog/factoring-rsa-260
  - date: 2026-09-19
    title: RSA-896 factored
    body: Stephen A. Weis, with assistance from Claude, factored the 896-bit RSA-896 (about 30 H100 GPU-years over 10 days).
    source: https://saweis.net/posts/rsa-896.html
explainer:
  oneLine: Split the 280-digit challenge number RSA-280 into its two prime factors, beating the current factoring record.
  flow:
    - RSA-896 fell in September 2026
    - RSA-280 is the next larger number
    - Run the number field sieve on GPUs
    - Multiply the factors to check
  glossary:
    - term: semiprime
      meaning: A number that is the product of exactly two primes.
      link: https://en.wikipedia.org/wiki/Semiprime
    - term: RSA challenge numbers
      meaning: Semiprimes published by RSA Laboratories from 1991 to measure progress in factoring.
      link: https://en.wikipedia.org/wiki/RSA_numbers
    - term: number field sieve
      meaning: The fastest known classical factoring algorithm for numbers of this size.
      link: /research/number-field-sieve-factoring
    - term: greatest common divisor
      meaning: The largest number dividing two integers; Euclid's algorithm computes it quickly.
      link: https://en.wikipedia.org/wiki/Greatest_common_divisor
    - term: smooth number
      meaning: An integer whose prime factors are all small; each relation is a pair of smooth numbers.
      link: https://en.wikipedia.org/wiki/Smooth_number
    - term: primality test
      meaning: A fast procedure that decides whether a number is prime without factoring it.
      link: https://en.wikipedia.org/wiki/Primality_test
    - term: GPU-year
      meaning: One graphics processor running for one year; a unit of compute.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: modular arithmetic
      meaning: Arithmetic that wraps around at a fixed number, like a clock; exponents are taken modulo 2 here.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
  readFirst:
    - title: RSA numbers (Wikipedia)
      url: https://en.wikipedia.org/wiki/RSA_numbers
      why: The value of RSA-280 and the status of every challenge number.
    - title: Weis, RSA-896
      url: https://saweis.net/posts/rsa-896.html
      why: Parameters and timings of the current record.
    - title: General number field sieve (Wikipedia)
      url: https://en.wikipedia.org/wiki/General_number_field_sieve
      why: How the algorithm works and why its cost grows as it does.
site:
  aiReviewed: true
---

RSA-280 is a 280-digit (928-bit) semiprime from the RSA Factoring Challenge, beginning 17907077533657954188… (full value on the RSA numbers list). **Task:** find its two prime factors. It is the smallest unfactored challenge number larger than RSA-896 (896 bits), the current record. RSA-270 (895 bits) is also unfactored, but it is a different and slightly smaller number than RSA-896 (despite having the same 270 decimal digits), so factoring it would repeat the record rather than extend it. The check is a single multiplication and two primality tests.

# State of the art

RSA-250 (829 bits) was factored in February 2020 with CADO-NFS on CPU clusters. In September 2026 two groups moved the general number field sieve to GPUs: Eric Lu at Cognition factored RSA-260 (862 bits) on 3 September with about 4,900 GPU-days (643 for polynomial selection, 3,813 for sieving, 467 for linear algebra) on B200/GB200/GB300 GPUs, an estimated USD 400,000 at market prices; Stephen A. Weis, with assistance from Claude, factored RSA-896 (896 bits) on 19 September with a GPU port of CADO-NFS on up to 256 preemptible nodes of 8 H100 GPUs, about 30 GPU-years over 10 days, with about 29 billion unique relations and a final matrix of about 1.48 billion rows. Both authors state that no algorithmic advance was involved. The heuristic $L_N[1/3,1.923]$ cost formula predicts that RSA-280 costs roughly 2.4 times RSA-896 (an estimate from the formula alone, ignoring the $o(1)$ term). The factorisations of RSA-260 and RSA-896 listed on the RSA numbers page multiply out to the published moduli.

# Applications

A 928-bit factorisation would show that RSA moduli well above 896 bits fall to GPU fleets of commercial size, strengthening the case for retiring RSA-1024, which the cost formula puts at roughly 30 times RSA-896. Deployed RSA-2048 keys are far beyond reach.

# Resolution criteria

Two primes whose product equals RSA-280, published with the polynomial, sieving parameters, relation counts, matrix size, software and compute used; verified by multiplication and primality tests.

# Rating rationale

Difficulty 22: two records fell in September 2026 by porting the number field sieve to GPUs, and the cost formula puts RSA-280 at about 2.4 times RSA-896, so it is compute and orchestration on a known algorithm, slightly below the next SVP dimension (25). Application value 28: evidence for retiring RSA-1024; deployed RSA-2048 keys are untouched. Leverage 10: no other result depends on it.

# Work mix rationale

The number field sieve is established; success depends on GPU implementations of sieving and linear algebra and on a large compute budget.

# Verification

Quantity: the largest RSA challenge number with a public factorisation; record RSA-896 (896 bits, Weis, 2026-09-19). Certificate for RSA-280: the two factors $p$ and $q$ as decimal integers; the checker computes $p\cdot q$, compares it with the published RSA-280 value, and runs a primality proof (ECPP or BPSW plus a certificate) on each factor, which takes seconds. Reports should state polynomial, special-q range, unique relations, matrix dimension, software (e.g. CADO-NFS commit) and total GPU- or core-years, so that the cost can be compared with RSA-260 (about 4,900 GPU-days) and RSA-896 (about 30 H100 GPU-years).

# Plain explanation

Multiplying two large prime numbers is easy. Starting from the product and finding the two primes is very hard, and online security has long relied on that. In 1991 the company RSA published a list of such products as a challenge.

In September 2026 two of them were split within two weeks: a 260-digit one by a team at the company Cognition, and a 270-digit one called RSA-896 by Stephen Weis with help from the AI model Claude. Both ran a long, well-known procedure, the number field sieve, on thousands of graphics processors. RSA-896 is the largest ever split.

The next bigger number on the list is RSA-280, with 280 digits. Nobody has split it. A rough estimate says it needs about two and a half times the computing of RSA-896. If someone succeeds, anyone can check the answer by multiplying the two numbers together.

One naming trap: another number, RSA-270, also has 270 digits but is a different, slightly smaller number than RSA-896. It is unsplit too, but splitting it would not set a record.

The caveat: real security keys are much longer and are not threatened.

# Student explanation

**The task.** RSA-280 is a 280-digit (928-bit) number published in the 1991 RSA Factoring Challenge. It is the product of two secret primes of similar size; the task is to find them. Multiplying two 140-digit primes takes a computer microseconds, but undoing the multiplication is the hard problem that RSA encryption relies on.

**Where the record stands.** The largest RSA challenge number factored so far is RSA-896 (896 bits), on 19 September 2026, by Stephen A. Weis with assistance from Claude, using a GPU version of the open-source CADO-NFS on up to 2,048 H100 GPUs: about 30 GPU-years in 10 days. Two weeks earlier Eric Lu at Cognition factored RSA-260 (862 bits) with about 4,900 GPU-days. RSA-280 is the smallest unfactored challenge number above the record. A possible confusion: RSA-270 also has 270 decimal digits like RSA-896, but it is a different, 895-bit number; it is still unfactored, but factoring it would not extend the record.

**The method.** All these records use the general number field sieve. Its goal is two numbers $x$ and $y$ with $x^2 - y^2$ divisible by $N$; then $N$ divides $(x-y)(x+y)$, and the greatest common divisor $\gcd(x - y, N)$, computed by Euclid's algorithm, usually reveals a factor. To get there it collects billions of _relations_ (pairs of numbers whose prime factors are all small, found by sieving), writes each as a vector of prime exponents modulo 2, and solves a huge sparse linear system over the numbers 0 and 1 to combine them into perfect squares. RSA-896 needed about 29 billion unique relations and a matrix with about 1.48 billion rows.

**Why it is hard.** No new mathematics is needed; the obstacle is cost. The heuristic running time grows like $\exp\left(1.923\,(\ln N)^{1/3}(\ln\ln N)^{2/3}\right)$, and plugging in the sizes estimates RSA-280 at about 2.4 times the cost of RSA-896, around 70 H100 GPU-years. That is an estimate from the formula alone. The linear-algebra stage also needs a tightly coupled machine with enough memory for an even larger matrix, which is harder to assemble from spare GPUs than the sieving stage.

**Why it matters.** Each record measures what factoring costs with current hardware, which informs key-size policy, for example retiring 1024-bit RSA keys. 2048-bit keys are far beyond reach.

**How a claim is checked.** The two factors are the certificate: multiply them, compare with the published RSA-280, and run a primality test on each. Reports should state the parameters and compute used.
