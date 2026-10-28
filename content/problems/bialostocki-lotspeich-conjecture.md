---
type: problem
slug: bialostocki-lotspeich-conjecture
title: The Bialostocki–Lotspeich conjecture on counting zero-sum subsequences
entry: zero-sum-theory
status: OPEN
origin: Arie Bialostocki and Mark Lotspeich, 1992
ratings:
  difficulty: 38
  applicationValue: 6
  leverage: 22
verification:
  route: REVIEW
sources:
  - title: "Wang, Zeng: Enumeration of zero-sum subsequences: A proof of Bialostocki-Lotspeich conjecture (arXiv:2610.37125, v1, preprint)"
    url: https://arxiv.org/abs/2610.37125
  - title: "Kisin: The number of zero sums modulo m in a sequence of length n (Mathematika 41, 1994)"
    url: https://www.cambridge.org/core/journals/mathematika/article/abs/number-of-zero-sums-modulo-m-in-a-sequence-of-length-n/DA5330AB545B55DD21BB715E7E07B3B2
  - title: "Grynkiewicz: On the number of m-term zero-sum subsequences (Acta Arith. 121, 2006)"
    url: https://www.impan.pl/en/publishing-house/journals-and-series/acta-arithmetica/all/121/3/82766/on-the-number-of-m-term-zero-sum-subsequences
  - title: "Gao, Geroldinger: Zero-sum problems in finite abelian groups: a survey (Expo. Math. 24, 2006)"
    url: https://doi.org/10.1016/j.exmath.2006.07.002
  - title: "Móricz, Nagy: Maximizing the number of rational-value sums or zero-sums (arXiv:2411.04449)"
    url: https://arxiv.org/abs/2411.04449
  - title: "Wikipedia: Zero-sum problem (Erdős–Ginzburg–Ziv theorem)"
    url: https://en.wikipedia.org/wiki/Zero-sum_problem
timeline:
  - date: 1992-01-01
    title: Conjecture published
    body: Bialostocki and Lotspeich state the lower bound in 'Some developments of the Erdős–Ginzburg–Ziv theorem I' (Sets, Graphs and Numbers, Colloq. Math. Soc. János Bolyai 60). Date is the first of January of the publication year.
    source: https://arxiv.org/abs/2610.37125
  - date: 1994-06-01
    title: Kisin proves moduli p^a and p^a q
    body: Kisin's Theorem 8 gives the bound for moduli p^a and p^a q with no restriction on the sequence length. Month known, day set to the first.
    source: https://www.cambridge.org/core/journals/mathematika/article/abs/number-of-zero-sums-modulo-m-in-a-sequence-of-length-n/DA5330AB545B55DD21BB715E7E07B3B2
  - date: 2006-01-01
    title: "Grynkiewicz: groups of order at least 30"
    body: Grynkiewicz proves a lower bound, a minimum of two binomial-type expressions, for groups of order n at least 30 and sequences of length at least 2n-1, as summarised by Wang and Zeng.
    source: https://www.impan.pl/en/publishing-house/journals-and-series/acta-arithmetica/all/121/3/82766/on-the-number-of-m-term-zero-sum-subsequences
  - date: 2026-10-27
    title: Preprint claims the full conjecture
    body: Wang and Zeng post arXiv:2610.37125, claiming a complete proof for every n by strong induction on n. It is unrefereed and no expert assessment has been found. Status unchanged.
    source: https://arxiv.org/abs/2610.37125
explainer:
  oneLine: A conjectured minimum number of n-term zero-sum picks from a list over a clock of size n. A 2026 preprint claims it.
  flow:
    - "EGZ: 2n-1 terms force one zero-sum"
    - How many zero-sum picks are forced?
    - Half zeros, half ones sets the guess
    - Proved for many n, not all
    - Preprint claims all n, unchecked
  glossary:
    - term: Erdős–Ginzburg–Ziv theorem
      meaning: Any 2n-1 integers contain n whose sum is divisible by n, and 2n-1 cannot be reduced.
      link: https://en.wikipedia.org/wiki/Zero-sum_problem
    - term: zero-sum subsequence
      meaning: A selection of terms from a sequence whose sum is the zero element of the group.
      link: https://en.wikipedia.org/wiki/Zero-sum_problem
    - term: cyclic group
      meaning: A group in which every element is a repeated sum of one element, such as the integers modulo n.
      link: https://en.wikipedia.org/wiki/Cyclic_group
    - term: modular arithmetic
      meaning: Arithmetic in which numbers wrap around after reaching a fixed value n, like clock hours.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: binomial coefficient
      meaning: The number of ways to choose k items from a set of a items, written a choose k.
      link: https://en.wikipedia.org/wiki/Binomial_coefficient
    - term: floor and ceiling
      meaning: The floor rounds a number down to a whole number and the ceiling rounds it up.
      link: https://en.wikipedia.org/wiki/Floor_and_ceiling_functions
    - term: preprint
      meaning: A paper posted publicly before peer review, so its claims have not yet been checked by referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: "Wikipedia: Zero-sum problem"
      url: https://en.wikipedia.org/wiki/Zero-sum_problem
      why: Statement and context of the theorem the conjecture strengthens.
    - title: "Wang, Zeng: arXiv:2610.37125 (abstract page)"
      url: https://arxiv.org/abs/2610.37125
      why: The claim itself, with the conjectured bound stated in the abstract.
    - title: "Gao, Geroldinger: Zero-sum problems in finite abelian groups: a survey"
      url: https://doi.org/10.1016/j.exmath.2006.07.002
      why: The standard survey of the field, for readers with some proof experience.
raw:
  body: "Let $n\\ge2$ and let $S=(a_1,\\dots,a_m)$ be a sequence of $m$ elements of the cyclic group $C_n=\\mathbb Z/n\\mathbb Z$, repetitions allowed. Let $\\mathsf N_0^n(S)$ be the number of index sets $I\\subseteq\\{1,\\dots,m\\}$ with $|I|=n$ and $\\sum_{i\\in I}a_i=0$. The conjecture states that\n\n$$\\mathsf N_0^n(S)\\ \\ge\\ \\binom{\\lfloor m/2\\rfloor}{n}+\\binom{\\lceil m/2\\rceil}{n}.$$\n\nThe bound is attained by $\\lfloor m/2\\rfloor$ copies of $0$ together with $\\lceil m/2\\rceil$ copies of $1$. For $m=2n-1$ the right side is $1$, which is the Erdős–Ginzburg–Ziv theorem (1961); the conjecture is a counting version of it for every $m$."
  student: "**What is counted.** Let $C_n=\\mathbb Z/n\\mathbb Z$ be the integers modulo $n$ and let $S=(a_1,\\dots,a_m)$ be a list of $m$ elements of it, repeats allowed. Let $\\mathsf N_0^n(S)$ be the number of choices of $n$ positions $I$ with $\\sum_{i\\in I}a_i\\equiv0\\pmod n$.\n\n**Starting point.** The Erdős–Ginzburg–Ziv theorem (1961) says that if $m\\ge2n-1$ then $\\mathsf N_0^n(S)\\ge1$. This is sharp: $n-1$ zeros and $n-1$ ones (length $2n-2$) have none.\n\n**The conjecture.** Bialostocki and Lotspeich conjectured (1992) that\n\n$$\\mathsf N_0^n(S)\\ \\ge\\ \\binom{\\lfloor m/2\\rfloor}{n}+\\binom{\\lceil m/2\\rceil}{n}.$$\n\nHere $\\binom{a}{n}$ counts the ways to choose $n$ items from $a$, and $\\lfloor\\cdot\\rfloor,\\lceil\\cdot\\rceil$ round down and up. Check $m=2n-1$: the right side is $\\binom{n-1}{n}+\\binom{n}{n}=0+1=1$, which is the EGZ theorem.\n\n**Why that number.** Take $\\lfloor m/2\\rfloor$ zeros and $\\lceil m/2\\rceil$ ones. A choice of $n$ positions with $k$ ones has sum $k$, and $0\\le k\\le n$, so the sum is $0$ modulo $n$ only for $k=0$ or $k=n$. Those choices number $\\binom{\\lfloor m/2\\rfloor}{n}+\\binom{\\lceil m/2\\rceil}{n}$. The conjecture says no other list has fewer.\n\n**Why it is hard.** For a given $S$ the count mixes the structure of $S$ (how many equal terms, how the terms spread over residues) with arithmetic modulo $n$. Proofs split on the prime factorization of $n$. Induction on $n$ reduces to divisors, and results such as Kneser's theorem on sumsets control the structure of the sums.\n\n**What is known.** Proved for $n=p^a$ and $n=p^aq$ (Kisin 1994), for $n$ a product of two distinct primes and, separately, for very long sequences (Füredi–Kleitman 1993), for short sequences (Gao), and for a range with a weaker bound (Grynkiewicz 2006). On 27 October 2026 Wang and Zeng posted a preprint that claims all $n$. It is unrefereed."
site:
  aiReviewed: true
---

# State of the art

**Open in the accepted literature; a full proof is claimed in an unrefereed preprint.** Bialostocki posed the problem in a 1989 research proposal and it was published with Lotspeich in 1992; Caro and Gao–Geroldinger restated it in their surveys. As described in the introduction to the Wang–Zeng preprint, partial results are: Füredi and Kleitman (1993) for $n$ a product of two distinct primes, and separately for sufficiently long sequences; Kisin (Mathematika 41, 1994) for $n=p^a$ and $n=p^aq$ with no restriction on the length; Gao (1997, 1999) for sequences shorter than $5n/2$ together with structure results; and Grynkiewicz (Acta Arith. 121, 2006) for groups of order at least $30$ and $m\ge2n-1$, with a bound that is the minimum of two binomial-type expressions. On 27 October 2026 Guoqing Wang and Xiangneng Zeng posted arXiv:2610.37125, which claims the conjecture for every $n\ge2$ and every length, by strong induction on $n$. DARC has not found any expert assessment of it, so it is recorded as a claim and the status stays OPEN.

# Applications

Few. Zero-sum counting results are used inside additive combinatorics and in the study of non-unique factorization, and a proof would add a sharp tool to that toolkit. There is no foreseeable engineering application.

# Resolution criteria

A proof (or a counterexample) of the inequality for every $n\ge2$ and every length $m\ge n$, accepted by experts in zero-sum theory, for example through publication in a refereed journal or a formal proof whose statement matches the one above. Proofs only for special families of $n$ (prime powers, $p^aq$) do not resolve it.

# Rating rationale

Difficulty 38: open for 34 years, but proved for many families of moduli and for short sequences, and a full proof is claimed, which is not credited until checked. Application value 6: no foreseeable practical use beyond tools for other combinatorial number theory. Leverage 22: sharpens the Erdős–Ginzburg–Ziv theorem and a few results in zero-sum theory, with little else depending on it.

# Verification

Experts in zero-sum theory read the proof and check it against the statement above: that the bound is claimed for every n at least 2 and every sequence length, not only for special n or for long sequences. Focus on the strong induction on n, the use of Kneser's theorem and the handling of small and boundary cases such as lengths between n and 2n-1. A small computer search confirming the bound for small n and m is a useful cross-check but not a proof.

# Plain explanation

Imagine a clock with n hours and a long list of marks on it, repeats allowed. A 1961 theorem says that if the list has at least about twice n marks, you can always pick n of them whose sum goes exactly around the clock back to the start.

This problem asks for more: not just one such pick, but how many. A longer list should give many more picks. In 1992 two mathematicians, Bialostocki and Lotspeich, guessed the exact minimum. The guess comes from the laziest list you can write: half of the marks at 12 o'clock and half at 1 o'clock. In that list the only picks that work are n marks all at 12 or n marks all at 1. The guess says no list does worse than this one.

Mathematicians proved the guess for many special clock sizes, such as prime powers, and for lists that are short or very long. Nobody had proved it for every clock size.

On 27 October 2026 two authors posted a paper that claims a full proof. Nobody outside the authors has checked it yet, so the problem stays listed as open here. It is pure mathematics with no everyday use.
