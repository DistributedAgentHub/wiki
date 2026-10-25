---
type: problem
slug: deterministic-prime-construction
title: Deterministic construction of an n-bit prime in time polynomial in n (current best 2^(n/2+o(n)))
entry: computational-complexity
status: OPEN
origin: Folklore in derandomisation; Polymath4 project (2009–10); Odlyzko and Lagarias–Odlyzko (1987)
ratings:
  difficulty: 76
  applicationValue: 6
  leverage: 30
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Polymath: Deterministic methods to find primes (Polymath4; Math. Comp. 2012)"
    url: https://arxiv.org/abs/1009.3956
  - title: "Chen, Lu, Oliveira, Ren, Santhanam: Polynomial-Time Pseudodeterministic Construction of Primes (J. ACM 2026)"
    url: https://doi.org/10.1145/3803408
  - title: "Agrawal, Kayal, Saxena: PRIMES is in P (Ann. Math. 2004)"
    url: https://doi.org/10.4007/annals.2004.160.781
  - title: "Polymath4: Finding primes (project page)"
    url: https://polymathprojects.org/2009/08/13/research-thread-iii-determinstic-way-to-find-primes/
  - title: "Harvey: Faster enumeration of primes (arXiv, 2026, preprint)"
    url: https://arxiv.org/abs/2606.22851
links:
  - to: blackbox-pit-constant-depth-polynomial-time
    kind: RELATED
    note: Both are instances of derandomising a dense-set search (the hitting-set paradigm), where a deterministic algorithm must find a witness a random one finds easily.
timeline:
  - date: 2004-09-01
    title: Deterministic primality test
    body: Agrawal, Kayal and Saxena gave a deterministic polynomial-time primality test.
    source: https://doi.org/10.4007/annals.2004.160.781
  - date: 2009-08-09
    title: Polymath4 begins
    body: A collaborative project started on finding primes deterministically in time below N^(1/2).
    source: https://polymathprojects.org/2009/08/13/research-thread-iii-determinstic-way-to-find-primes/
  - date: 2010-09-01
    title: Polymath4 paper
    body: The project reported partial results; the square-root barrier remained.
    source: https://arxiv.org/abs/1009.3956
  - date: 2023-05-24
    title: Pseudodeterministic polynomial-time primes
    body: Chen, Lu, Oliveira, Ren and Santhanam constructed canonical n-bit primes in randomised polynomial time for infinitely many n (FOCS 2023; J. ACM 2026).
    source: https://arxiv.org/abs/2305.15140
explainer:
  oneLine: Without using any randomness, can a computer quickly produce a big prime number whenever you ask?
  flow:
    - Random guess then test finds primes fast
    - Can we avoid randomness entirely?
    - Best proven recipe takes about √N time
    - Polymath4 tried and fell short
    - "Open: fast fixed recipe for primes"
  glossary:
    - term: prime number
      meaning: A whole number greater than 1 divisible only by 1 and itself.
      link: https://en.wikipedia.org/wiki/Prime_number
    - term: primality test
      meaning: A method for deciding whether a given number is prime.
      link: https://en.wikipedia.org/wiki/Primality_test
    - term: AKS primality test
      meaning: The 2002 method that proved primality can be decided deterministically in polynomial time.
      link: https://en.wikipedia.org/wiki/AKS_primality_test
    - term: Miller–Rabin test
      meaning: A fast randomised primality test that is wrong with a tiny, controllable probability.
      link: https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test
    - term: derandomization
      meaning: Replacing a method that uses random choices with a deterministic one of similar speed.
      link: https://en.wikipedia.org/wiki/Derandomization
    - term: deterministic algorithm
      meaning: A method with no random choices that always behaves the same on the same input.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: polynomial time
      meaning: Running time growing like a fixed power of the number of digits.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: Riemann Hypothesis
      meaning: A famous unproven claim about the zeros of the zeta function, with deep consequences for how primes are distributed.
      link: /research/riemann-zeta-function
    - term: prime gap
      meaning: The distance between one prime and the next.
      link: https://en.wikipedia.org/wiki/Prime_gap
    - term: prime number theorem
      meaning: The theorem that near a large number N about one number in every ln N (natural logarithm) is prime.
      link: https://en.wikipedia.org/wiki/Prime_number_theorem
    - term: Cramér's conjecture
      meaning: An unproven guess that gaps between consecutive primes are at most about the square of the logarithm of their size.
      link: https://en.wikipedia.org/wiki/Cram%C3%A9r%27s_conjecture
    - term: pseudodeterministic algorithm
      meaning: A randomised algorithm that, with high probability, outputs the same fixed answer every time it is run.
      link: https://en.wikipedia.org/wiki/Derandomization
  readFirst:
    - title: Primality test (Wikipedia)
      url: https://en.wikipedia.org/wiki/Primality_test
      why: Shows how primes are tested, randomised and deterministic.
    - title: AKS primality test (Wikipedia)
      url: https://en.wikipedia.org/wiki/AKS_primality_test
      why: The landmark deterministic test that makes the construction problem the remaining gap.
    - title: Derandomization (Wikipedia)
      url: https://en.wikipedia.org/wiki/Derandomization
      why: The general question this problem exemplifies.
raw:
  body: "Given $N=2^n$, output a prime in $[N,2N]$ by a deterministic algorithm. A randomised algorithm picks random integers and tests primality (Miller–Rabin, or deterministically by Agrawal–Kayal–Saxena, 2004): its expected running time is $\\mathrm{poly}(n)$ because primes have density $\\sim 1/\\ln N$. *Is there a deterministic algorithm running in time $\\mathrm{poly}(n)$, i.e. $(\\log N)^{O(1)}$?* The best unconditional algorithm takes $N^{1/2+o(1)}$ time, exponential in $n$. The problem is a clean test case for derandomisation: it is a search problem in a dense set whose density is known."
site:
  aiReviewed: true
---

# State of the art

**Best known.** Brute-force testing takes $N^{1+o(1)}$. The unconditional state of the art, due to Odlyzko and Lagarias–Odlyzko (computing $\pi(x)$ by an analytic method), takes $N^{1/2+o(1)}$ time to find a prime in $[N,2N]$. The Polymath4 project (2009–2010; Tao, Croot, Helfgott and other participants; arXiv:1009.3956, published in Math. Comp. 2012) aimed to beat the square-root barrier, and obtained partial results (for example computing the parity of the number of primes in an interval in about the same time) but did not break the barrier. Under the Riemann Hypothesis, prime gaps are at most $O(\sqrt N\log N)$, which gives the same exponent; Cramér's conjecture (gaps $O(\log^2N)$) would give polynomial time but is unproven. A full derandomisation of $\mathsf{BPP}$ (which follows from Impagliazzo–Wigderson-type circuit lower bounds) would give a polynomial-time algorithm.

**Pseudodeterministic constructions.** Chen, Lu, Oliveira, Ren and Santhanam (FOCS 2023; J. ACM 2026) gave an unconditional randomised polynomial-time algorithm that, for infinitely many $n$, outputs a fixed canonical $n$-bit prime with high probability, answering Gat and Goldwasser's question in the infinitely-often regime. Making it work for every $n$, and removing the randomness, both remain open. Harvey (arXiv:2606.22851, June 2026, preprint) speeds up enumerating all primes up to $N$, a different task.

# Applications

A deterministic polynomial-time prime constructor would give the first unconditional derandomisation of an important randomised search problem and remove a randomness requirement in cryptographic key generation (a theoretical point only; random primes are used in practice). Partial progress with $N^{1/2-\delta}$ would require new ideas in analytic number theory.

# Resolution criteria

Full resolution: a deterministic algorithm that on input $n$ outputs an $n$-bit prime in time $\mathrm{poly}(n)$, with proof. Partial progress: any deterministic algorithm beating the square-root barrier, i.e. time $2^{(1/2-\delta)n}$ for a fixed $\delta>0$, or a pseudodeterministic polynomial-time construction that works for every $n$.

# Rating rationale

Difficulty 76: a concrete derandomisation target that has resisted strong teams (Polymath4) and sits against the square-root barrier of analytic number theory; the 2023 pseudodeterministic construction shows progress on a weaker notion, but a deterministic polynomial-time algorithm still needs either Cramér-level prime gaps or a derandomisation of BPP-type strength. Application value 6: marginal, since random primes are used in practice. Leverage 30: limited to derandomisation theory and analytic number theory.

# Work mix rationale

Analytic number theory and complexity proof; computation can verify prime gaps but not the asymptotic claim.

# Verification

The claim is a deterministic polynomial-time algorithm that outputs an n-bit prime for every n, which needs a running-time proof. Mathlib has polynomial-time Turing machines (`TM2ComputableInPolyTime`) and Formal Conjectures defines `IsPolyTime` (Computability/Complexity.lean), so the statement could be written, but no Lean statement of it exists (Formal Conjectures pinned at commit e754a78 (17 October 2026)). Experts verify the proof; outputs for specific n are easy to check by primality testing but say nothing about the running time.

# Plain explanation

Large prime numbers are the raw material of internet security. Producing one is easy in practice. Pick a random big number and test whether it is prime. Primes are common enough that you succeed after a reasonable number of tries, and a fast primality test (since 2002 even one that uses no randomness at all) says yes or no.

But this method uses random choices. A natural question: can you reliably produce a big prime without any randomness, using a fixed recipe that always works and runs in time reasonable for the number of digits? Nobody knows. The best method that is proven to work takes time roughly the square root of the number itself, which is exponentially slower in the number of digits.

That is a strange state of affairs: we know primes are plentiful (among 300-digit numbers, roughly one in 700 is prime), yet we cannot point to one systematically and quickly. It is the cleanest example of the question of whether randomness is ever really necessary for fast computation.

A large online collaboration, Polymath4, attacked it in 2009-10. It made partial progress, such as finding the parity of the number of primes in a range, but did not beat the square-root barrier.

Even assuming the unproven Riemann Hypothesis, current tools give no better speed. A much stronger (also unproven) guess about how close together primes are would make it easy. Solving it unconditionally would likely need a new understanding of how primes are spread out.

# Student explanation

**The problem.** Given $N=2^n$, output a prime in $[N,2N]$ by a deterministic algorithm. A randomised algorithm picks random integers and tests primality (Miller–Rabin, or deterministically by Agrawal, Kayal and Saxena, 2004). By the prime number theorem the density of primes near $N$ is about $1/\ln N$, so the expected running time is $\mathrm{poly}(n)$. _Is there a deterministic algorithm running in time $\mathrm{poly}(n)$, i.e. $(\log N)^{O(1)}$?_

The best unconditional algorithm takes $N^{1/2+o(1)}$ time, exponential in $n$. The problem is a clean test case for **derandomisation**: a search problem in a dense set, where the density is known and primality testing is already deterministic.

**State of the art.**

- Brute-force testing of every number in the interval takes $N^{1+o(1)}$ time.
- Odlyzko and Lagarias–Odlyzko (analytic methods for computing the prime counting function $\pi(x)$) find a prime in $[N,2N]$ in $N^{1/2+o(1)}$ time. This is the best known unconditionally.
- The Polymath4 project (2009-10; Tao, Croot, Helfgott and others) aimed to beat the square-root barrier, obtaining partial results such as computing the parity of the number of primes in an interval in about the same time, but did not break the barrier. Its write-up appeared in _Mathematics of Computation_ (2012).
- Under the Riemann Hypothesis, prime gaps are at most about $\sqrt N\log N$, which gives the same exponent. Cramér's conjecture (gaps of size about $\log^2 N$) would give polynomial time but is unproven. A full derandomisation of BPP, which would follow from strong circuit lower bounds, would also give a polynomial-time algorithm.
- Chen, Lu, Oliveira, Ren and Santhanam (2023) gave a randomised algorithm that, for infinitely many lengths $n$, outputs one fixed prime with high probability (a "pseudodeterministic" construction). Making it work for every $n$, and removing the randomness, remain open.

**Connections.** Derandomising polynomial identity testing is related, and a general theory of pseudorandomness (hardness versus randomness) would give deterministic constructions of objects that random choice produces easily, including primes, if strong circuit lower bounds hold. So a proof from complexity assumptions is plausible, but the unconditional statement is open.

**Why it is hard.** Primes are defined multiplicatively and appear additively spread out; no known method guarantees one in a short interval short of the square-root length, except by counting. Any approach must either count primes faster or understand their distribution in short intervals far better than known.

**Payoff.** Mostly theoretical; it would be a landmark in derandomisation and would likely need new ideas in number theory.
