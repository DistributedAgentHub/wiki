---
type: entry
slug: number-field-sieve-factoring
title: The general number field sieve and RSA factoring records
field: cryptography
kind: ALGORITHM
status: ACTIVE
summary: The fastest known classical algorithm for factoring large integers, implemented in CADO-NFS; public RSA challenge factorisations measure its real cost and set RSA key-size policy.
reliedOn: Every recommendation for RSA and finite-field Diffie-Hellman key sizes extrapolates the cost of the number field sieve from record computations such as RSA-250, RSA-260 and RSA-896.
dependsOn:
  - analytic-number-theory
  - computational-complexity
references:
  - title: Lenstra, Lenstra (eds.), The development of the number field sieve (Lecture Notes in Mathematics 1554, 1993)
    url: https://doi.org/10.1007/BFb0091534
    kind: book
  - title: Kleinjung et al., Factorization of a 768-bit RSA modulus (CRYPTO 2010; ePrint 2010/006)
    url: https://eprint.iacr.org/2010/006
    kind: paper
  - title: "Boudot, Gaudry, Guillevic, Heninger, Thomé, Zimmermann, Comparing the difficulty of factorization and discrete logarithm: a 240-digit experiment (CRYPTO 2020)"
    url: https://eprint.iacr.org/2020/697
    kind: paper
  - title: Lu, Factoring RSA-260 (Cognition blog, 9 September 2026)
    url: https://cognition.com/blog/factoring-rsa-260
    kind: article
  - title: Weis, RSA-896 (author's post, 19 September 2026)
    url: https://saweis.net/posts/rsa-896.html
    kind: article
  - title: CADO-NFS project page
    url: https://cado-nfs.gitlabpages.inria.fr/
    kind: docs
  - title: RSA numbers (Wikipedia; list of challenge numbers and their status)
    url: https://en.wikipedia.org/wiki/RSA_numbers
    kind: article
timeline:
  - date: 1993-01-01
    title: The number field sieve book
    body: Lenstra and Lenstra edited the collected papers that define the number field sieve; year only.
    source: https://doi.org/10.1007/BFb0091534
  - date: 2009-12-12
    title: RSA-768 factored
    body: Kleinjung and co-authors factored the 232-digit RSA-768 with the number field sieve after about two years of computation.
    source: https://eprint.iacr.org/2010/006
  - date: 2020-02-28
    title: RSA-250 factored
    body: Boudot, Gaudry, Guillevic, Heninger, Thomé and Zimmermann factored the 829-bit RSA-250 with CADO-NFS.
    source: https://en.wikipedia.org/wiki/RSA_numbers
  - date: 2026-09-03
    title: RSA-260 factored
    body: Eric Lu at Cognition factored the 862-bit RSA-260 with a GPU-accelerated CADO-NFS, about 4,900 GPU-days.
    source: https://cognition.com/blog/factoring-rsa-260
  - date: 2026-09-19
    title: RSA-896 factored
    body: Stephen A. Weis, with assistance from Claude, factored the 896-bit RSA-896 on up to 2,048 H100 GPUs, about 30 GPU-years over 10 days.
    source: https://saweis.net/posts/rsa-896.html
explainer:
  oneLine: The fastest known method for splitting a huge number into its prime factors, and the records that set RSA key sizes.
  flow:
    - Pick polynomials sharing a root
    - Sieve for billions of smooth relations
    - Combine relations into perfect squares
    - A gcd reveals a prime factor
  glossary:
    - term: semiprime
      meaning: A number that is the product of exactly two primes, like the RSA moduli.
      link: https://en.wikipedia.org/wiki/Semiprime
    - term: RSA
      meaning: A public-key system whose security rests on the difficulty of factoring a large semiprime N = pq.
      link: https://en.wikipedia.org/wiki/RSA_cryptosystem
    - term: congruence of squares
      meaning: Two numbers x, y with x² − y² divisible by N; then gcd(x − y, N) often reveals a factor.
      link: https://en.wikipedia.org/wiki/Congruence_of_squares
    - term: greatest common divisor
      meaning: The largest number dividing two integers; Euclid's algorithm computes it quickly even for huge numbers.
      link: https://en.wikipedia.org/wiki/Greatest_common_divisor
    - term: smooth number
      meaning: An integer whose prime factors are all below a chosen bound; sieving searches for these.
      link: https://en.wikipedia.org/wiki/Smooth_number
    - term: general number field sieve
      meaning: The fastest known classical algorithm for factoring integers with more than about 100 digits.
      link: https://en.wikipedia.org/wiki/General_number_field_sieve
    - term: modular arithmetic
      meaning: Arithmetic that wraps around at a fixed number, like a clock.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: CADO-NFS
      meaning: An open-source implementation of the number field sieve used for recent RSA records.
      link: https://github.com/cado-nfs/cado-nfs
  readFirst:
    - title: General number field sieve (Wikipedia)
      url: https://en.wikipedia.org/wiki/General_number_field_sieve
      why: Overview of the algorithm and its running time.
    - title: RSA numbers (Wikipedia)
      url: https://en.wikipedia.org/wiki/RSA_numbers
      why: The challenge numbers, which are factored, and by whom.
    - title: Weis, RSA-896
      url: https://saweis.net/posts/rsa-896.html
      why: First-hand account of the 896-bit record, with timings for each stage.
    - title: Lu, Factoring RSA-260 (Cognition)
      url: https://cognition.com/blog/factoring-rsa-260
      why: How the number field sieve was moved onto GPUs, with a cost breakdown.
site:
  published: true
  aiReviewed: true
---

## What it does

RSA is secure only if the public modulus $N=pq$ cannot be factored. The **general number field sieve** (GNFS), developed around 1990 by Pollard, the Lenstras, Manasse and others, is the fastest known classical method for numbers of this size. Its heuristic running time is

$L_N\left[\tfrac13,\ (64/9)^{1/3}\right]=\exp\!\left((1.923+o(1))(\ln N)^{1/3}(\ln\ln N)^{2/3}\right),$

sub-exponential in the number of digits. No proof of this running time exists; it rests on heuristics about how often numbers are _smooth_ (have only small prime factors).

## The four stages

1. **Polynomial selection.** Choose two polynomials with a common root modulo $N$, one of degree 5 or 6. Better polynomials make the later numbers smaller and smoother; this stage alone can take weeks of compute.
2. **Sieving.** Search pairs $(a,b)$ for which two related numbers are simultaneously smooth. Each such pair is a _relation_. Lattice sieving over many _special-q_ primes is the dominant cost.
3. **Filtering and linear algebra.** Combine relations into a huge sparse matrix over GF(2) (more than a billion rows for the largest records) and find vectors in its kernel with block Lanczos or block Wiedemann.
4. **Square root.** Each kernel vector gives a congruence of squares $x^2\equiv y^2 \pmod N$, and $\gcd(x-y,N)$ reveals a factor with probability about one half.

## Records and what they measure

The RSA Factoring Challenge (1991) published semiprimes named by decimal digits (RSA-100 to RSA-617) and, from 2001, by bits (RSA-576 to RSA-2048). Notable factorisations: RSA-768 (232 digits) in 2009 by Kleinjung and co-authors; RSA-240 and RSA-250 (829 bits) in 2019 and 2020 by Boudot, Gaudry, Guillevic, Heninger, Thomé and Zimmermann with CADO-NFS on CPU clusters; RSA-260 (862 bits) on 3 September 2026 by Eric Lu at Cognition, with a modified CADO-NFS including a GPU lattice siever, about 4,900 GPU-days on B200/GB200/GB300-class GPUs; and RSA-896 (270 digits, 896 bits) on 19 September 2026 by Stephen A. Weis with assistance from Claude, using a GPU port of CADO-NFS on up to 2,048 H100 GPUs, about 30 GPU-years over 10 days. Neither 2026 team reports a new algorithmic idea: the gains are GPU engineering.

RSA-270 (also 270 digits, but 895 bits) is a different number from RSA-896 and is still unfactored, as are RSA-280 (928 bits) and all larger challenge numbers.

## Why the records matter

A record is an upper bound on the cost of factoring a number of that size with public tools. Key-size guidance (2048-bit RSA as a minimum, deprecation of 1024-bit keys) is extrapolated from these data points with the $L_N[1/3]$ formula. A factorisation is trivially checkable: multiply the two primes and compare.

## Limits

Records measure money and engineering as much as algorithms. Shor's algorithm on a fault-tolerant quantum computer would make all these sizes easy, which is a separate question.

# Plain explanation

Multiplying two big prime numbers is easy for a computer. Going backwards, from the product to the two primes, is very hard when the numbers have hundreds of digits. Much of internet security has relied on that difficulty for decades.

The best known method for going backwards is called the number field sieve. Instead of trying divisors one by one, it collects billions of small facts about the number, each one a lucky case where certain related numbers break into small primes. It then combines those facts, like solving an enormous puzzle of equations, until two of them line up in a way that reveals a factor.

The work takes months on large computers. In 1991 the company RSA published a list of challenge numbers to measure progress. In September 2026 two of them fell within two weeks, because teams moved the method onto graphics processors, the same chips used for AI.

The caveat: these records show what attacks cost today. The keys used on real websites are far longer and are not threatened.

# Student explanation

**Why it matters.** RSA encryption and signatures publish a number $N = pq$, the product of two secret primes of similar size. Multiplying $p$ and $q$ is instant; recovering them from $N$ is believed to be very hard when $N$ has hundreds of digits, and RSA is secure only as long as that stays true. The **general number field sieve** (GNFS) is the fastest known classical method for such numbers, so its real cost decides how long RSA keys must be.

**Why trial division fails.** Dividing $N$ by every number up to $\sqrt N$ works for small $N$ but needs about $10^{135}$ divisions for a 270-digit number. GNFS instead builds a **congruence of squares**: two numbers $x$ and $y$ with $x^2 - y^2$ a multiple of $N$, i.e. $x^2 \equiv y^2 \pmod N$ in clock arithmetic that wraps at $N$. Then $N$ divides $(x-y)(x+y)$, and computing the greatest common divisor $\gcd(x-y, N)$ (Euclid's algorithm, a few lines of Python) reveals a factor about half the time.

**The four stages.**

1. _Polynomial selection_: pick two polynomials with a common root modulo $N$; good choices make all later numbers smaller.
2. _Sieving_: search many pairs $(a, b)$ for which two associated numbers are both **smooth**, meaning all their prime factors are small. Each such pair is a _relation_. This is the bulk of the work.
3. _Linear algebra_: write each relation as a vector of prime exponents taken modulo 2 and find a combination that sums to zero, so every exponent becomes even and the product is a perfect square. This is Gaussian elimination in spirit, on a sparse matrix with more than a billion rows, solved with iterative methods such as block Wiedemann.
4. _Square root_: turn the combination into $x$ and $y$ and take the gcd.

**Cost.** The running time grows like $\exp\left(1.923\,(\ln N)^{1/3}(\ln\ln N)^{2/3}\right)$: faster than any power of the number of digits would allow for a polynomial-time method, but much slower than exponential in the digits. The formula is a heuristic, not a theorem.

**Records.** RSA-250 (829 bits) fell in 2020 on CPU clusters with the open-source CADO-NFS. In September 2026 two groups ported CADO-NFS stages to GPUs: RSA-260 (862 bits) took about 4,900 GPU-days, and RSA-896 (896 bits) about 30 H100 GPU-years over 10 days. Neither reported a new algorithm; the gains were engineering. RSA-270 (895 bits) is a different, still unfactored number, as is RSA-280 (928 bits).

**Checking.** A factorisation is self-certifying: multiply the two primes and compare with $N$.
