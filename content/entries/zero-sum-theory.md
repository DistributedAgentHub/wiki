---
type: entry
slug: zero-sum-theory
title: Zero-sum problems in finite abelian groups
field: combinatorics
kind: THEORY
status: ACTIVE
summary: When must a sequence in a finite abelian group contain terms adding to zero? Covers the Erdős–Ginzburg–Ziv theorem, the Davenport constant and counting results.
reliedOn: The Davenport constant controls non-unique factorization in number fields, and Erdős–Ginzburg–Ziv type results feed Ramsey theory on the integers. Counting refinements such as the Bialostocki–Lotspeich conjecture sit on top of both.
dependsOn:
  - extremal-combinatorics
references:
  - title: "Gao, Geroldinger: Zero-sum problems in finite abelian groups: a survey (Expo. Math. 24, 2006)"
    url: https://doi.org/10.1016/j.exmath.2006.07.002
    kind: paper
  - title: "Wikipedia: Zero-sum problem"
    url: https://en.wikipedia.org/wiki/Zero-sum_problem
    kind: article
  - title: "Wikipedia: Davenport constant"
    url: https://en.wikipedia.org/wiki/Davenport_constant
    kind: article
  - title: "Grynkiewicz: On the number of m-term zero-sum subsequences (Acta Arith. 121, 2006)"
    url: https://www.impan.pl/en/publishing-house/journals-and-series/acta-arithmetica/all/121/3/82766/on-the-number-of-m-term-zero-sum-subsequences
    kind: paper
timeline:
  - date: 1961-01-01
    title: Erdős–Ginzburg–Ziv theorem
    body: Erdős, Ginzburg and Ziv prove that any 2n-1 integers contain n whose sum is divisible by n, and that 2n-1 is best possible. Only the year is used here, so the date is the first of January.
    source: https://en.wikipedia.org/wiki/Zero-sum_problem
  - date: 1992-01-01
    title: Bialostocki–Lotspeich counting conjecture
    body: Bialostocki and Lotspeich publish a conjecture that counts n-term zero-sum subsequences over the cyclic group of order n, strengthening the Erdős–Ginzburg–Ziv theorem. Date is the first of January of the publication year.
    source: https://arxiv.org/abs/2610.37125
  - date: 1994-06-01
    title: "Kisin: the counting conjecture for moduli p^a and p^a q"
    body: Kisin proves the lower bound for moduli of the form p^a and p^a q (p, q distinct primes), for sequences of any length. Month known, day set to the first.
    source: https://www.cambridge.org/core/journals/mathematika/article/abs/number-of-zero-sums-modulo-m-in-a-sequence-of-length-n/DA5330AB545B55DD21BB715E7E07B3B2
  - date: 2006-01-01
    title: "Grynkiewicz: m-term zero-sum subsequences"
    body: Grynkiewicz publishes a lower bound on the number of m-term zero-sum subsequences, which Wang and Zeng describe as covering groups of order at least 30 for sequences of length at least 2n-1.
    source: https://www.impan.pl/en/publishing-house/journals-and-series/acta-arithmetica/all/121/3/82766/on-the-number-of-m-term-zero-sum-subsequences
  - date: 2026-10-27
    title: Preprint claims the Bialostocki–Lotspeich conjecture
    body: A preprint by Wang and Zeng claims a complete proof of the counting conjecture over cyclic groups. It is unrefereed and no expert assessment has been found.
    source: https://arxiv.org/abs/2610.37125
explainer:
  oneLine: How long must a list of numbers be before some of them are forced to add up to zero?
  flow:
    - Add list entries around a clock
    - Long enough list forces a zero sum
    - "Erdős–Ginzburg–Ziv: length 2n-1 works"
    - "Next: how many zero sums are forced?"
    - One preprint claims the exact count
  glossary:
    - term: finite abelian group
      meaning: A finite set with an addition that is commutative and has a zero, such as the hours on a clock.
      link: https://en.wikipedia.org/wiki/Abelian_group
    - term: cyclic group
      meaning: A group in which every element is a repeated sum of one element, such as the integers modulo n.
      link: https://en.wikipedia.org/wiki/Cyclic_group
    - term: modular arithmetic
      meaning: Arithmetic in which numbers wrap around after reaching a fixed value n, like clock hours.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: sequence (multiset)
      meaning: A list of elements in which repeats are allowed and the order does not matter here.
      link: https://en.wikipedia.org/wiki/Multiset
    - term: zero-sum subsequence
      meaning: A selection of terms from a sequence whose sum is the zero element of the group.
      link: https://en.wikipedia.org/wiki/Zero-sum_problem
    - term: Davenport constant
      meaning: The smallest length N such that every sequence of N group elements has a non-empty zero-sum subsequence.
      link: https://en.wikipedia.org/wiki/Davenport_constant
    - term: pigeonhole principle
      meaning: If more objects than boxes are placed into boxes, some box holds at least two objects.
      link: https://en.wikipedia.org/wiki/Pigeonhole_principle
    - term: binomial coefficient
      meaning: The number of ways to choose k items from a set of a items, written a choose k.
      link: https://en.wikipedia.org/wiki/Binomial_coefficient
  readFirst:
    - title: "Wikipedia: Zero-sum problem"
      url: https://en.wikipedia.org/wiki/Zero-sum_problem
      why: Short statement of the Erdős–Ginzburg–Ziv theorem and its generalizations.
    - title: "Wikipedia: Davenport constant"
      url: https://en.wikipedia.org/wiki/Davenport_constant
      why: The definition and the known values for small families of groups.
    - title: "Wikipedia: Pigeonhole principle"
      url: https://en.wikipedia.org/wiki/Pigeonhole_principle
      why: The one idea behind the simplest zero-sum argument.
raw:
  body: "## What it is\n\nZero-sum theory asks a simple question about addition in a finite abelian group $G$: how long must a sequence of elements of $G$ be before some part of it is forced to add up to the identity element $0$? A *sequence* here is a multiset, so repeated terms are allowed. Different versions of the question restrict which parts count: any non-empty part, or only parts of a fixed length, or parts whose terms are chosen with weights.\n\n## The two anchor results\n\n**Davenport constant.** $\\mathsf D(G)$ is the smallest $N$ such that every sequence of $N$ elements of $G$ has a non-empty subsequence with sum $0$. For the cyclic group $C_n=\\mathbb Z/n\\mathbb Z$ it equals $n$: among the $n$ partial sums of any $n$ terms, either one is $0$ or two coincide, and their difference is a zero-sum block. The sequence of $n-1$ copies of $1$ shows that $n-1$ terms are not enough. For groups of rank one or two, and for $p$-groups, $\\mathsf D(G)$ equals $1+\\sum(d_i-1)$ over the invariant factors $d_i$. It is known to be larger for infinitely many groups of rank at least four.\n\n**Erdős–Ginzburg–Ziv (1961).** Every sequence of $2n-1$ integers contains $n$ terms whose sum is divisible by $n$. The length $2n-1$ cannot be lowered: $n-1$ zeros and $n-1$ ones have no $n$-term subsequence summing to a multiple of $n$. Writing $\\mathsf s(G)$ for the smallest length that forces a zero-sum subsequence of length $\\exp(G)$, the theorem says $\\mathsf s(C_n)=2n-1$. For $G=C_n^2$ the value $4n-3$ was conjectured by Kemnitz and later proved.\n\n## Counting instead of existing\n\nOnce existence is settled, the next question is how many zero-sum subsequences must exist. Bialostocki and Lotspeich (1992) conjectured that a sequence of length $m\\ge n$ over $C_n$ has at least $\\binom{\\lfloor m/2\\rfloor}{n}+\\binom{\\lceil m/2\\rceil}{n}$ index sets of size $n$ with zero sum. The sequence consisting of $\\lfloor m/2\\rfloor$ zeros and $\\lceil m/2\\rceil$ ones attains this number. For $m=2n-1$ the bound is $1$, which is the Erdős–Ginzburg–Ziv theorem.\n\n## Tools\n\n- Pigeonhole and partial-sum arguments, as above.\n- Additive combinatorics: the Cauchy–Davenport theorem and Kneser's theorem on sumsets in abelian groups.\n- Polynomial methods: Chevalley–Warning and the Combinatorial Nullstellensatz, which give short proofs of EGZ for prime $n$ and of weighted versions.\n- Structure theory of long zero-sum free sequences (inverse problems): what a sequence must look like if it comes close to the extremal length.\n- Induction on the order of $G$, reducing from $n=ab$ to $a$ and $b$.\n\n## Why it matters, and the limits\n\nThe Davenport constant governs the arithmetic of non-unique factorization in rings of integers of number fields, which is the main application. Zero-sum results also appear in Ramsey theory on the integers. Outside pure mathematics there is no direct engineering use.\n\n## Current state\n\nAs of 28 October 2026 the questions above are settled for cyclic groups and many families of groups, but $\\mathsf D(G)$ is not known for every group, notably rank three and general rank. On 27 October 2026 a preprint claims the full Bialostocki–Lotspeich counting conjecture for all $n$. It is unrefereed and has not been independently checked.\n"
  student: "**The setting.** Work with integers modulo $n$: the numbers $0,1,\\dots,n-1$ where adding wraps around, as on a clock. This system is the cyclic group $C_n$. A **sequence** is a list of elements in which repeats are allowed. A **zero-sum subsequence** is a selection of some terms whose sum is $0$ in $C_n$.\n\n**Existence by pigeonhole.** Take any $n$ elements $a_1,\\dots,a_n$ and form the partial sums $s_k=a_1+\\dots+a_k$ for $k=1,\\dots,n$. If one $s_k$ is $0$, we are done. Otherwise the $n$ sums take only $n-1$ nonzero values, so two are equal, say $s_i=s_j$ with $i<j$. Subtracting gives $a_{i+1}+\\dots+a_j=0$. So every sequence of length $n$ contains a non-empty zero-sum block, and this is tight: the sequence $1,1,\\dots,1$ ($n-1$ terms) has none. The smallest such length for a general finite abelian group $G$ is the **Davenport constant** $\\mathsf D(G)$, and $\\mathsf D(C_n)=n$.\n\n**Fixing the length.** Now ask for exactly $n$ terms that sum to $0$. The **Erdős–Ginzburg–Ziv theorem** (1961) says $2n-1$ terms suffice:\n\n$$a_1,\\dots,a_{2n-1}\\in C_n \\ \\Rightarrow\\ \\exists\\, I,\\ |I|=n,\\ \\sum_{i\\in I}a_i=0.$$\n\nIn words: among any $2n-1$ elements, some $n$-element selection $I$ of positions sums to $0$. The example of $n-1$ zeros and $n-1$ ones (length $2n-2$) shows that $2n-1$ cannot be lowered, since an $n$-term choice with $k$ ones sums to $k$, which is nonzero for $0<k<n$.\n\n**Counting.** Once existence is clear, one can ask how many selections must exist. The Bialostocki–Lotspeich conjecture says at least $\\binom{\\lfloor m/2\\rfloor}{n}+\\binom{\\lceil m/2\\rceil}{n}$ for a sequence of length $m$. Here $\\binom{a}{n}$ is the number of ways to choose $n$ items from $a$. The example with half zeros and half ones attains it, because the only zero-sum choices are $n$ zeros or $n$ ones.\n\n**Beyond cyclic groups.** For $C_n\\oplus C_n$ (pairs of residues), the corresponding length is $4n-3$, conjectured by Kemnitz and since proved. The Davenport constant of a general group is still not known.\n\n**Tools.** Pigeonhole, sumset theorems (Cauchy–Davenport, Kneser), polynomial methods and induction on $n$."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Take a clock with n hours. Write down some hour marks in a list, repeats allowed. Add up some of them, always going around the clock, so that 14 on a 12-hour clock is just 2. Can you always find a few marks that add up to exactly 12 o'clock, back to the start?

That is a zero-sum problem. The surprise is that the answer depends mostly on how long the list is. If the list is long enough, a hit is guaranteed, no matter how cleverly you chose the marks to avoid it. If it is just a little shorter, you can dodge it.

A famous example is from 1961. Take any 2n-1 whole numbers, where n is any number you like. Then some n of them add up to a multiple of n. With 2n-2 numbers you can avoid this: use n-1 zeros and n-1 ones.

Think of a combination lock where every wrong guess is ruled out by counting alone: once the list is long enough, there is simply no room left to avoid the answer. The analogy breaks because here nothing is guessed; the claim is about every possible list at once.

Mathematicians study the same question for many kinds of clock, called finite abelian groups, and ask not only whether a zero-sum exists but how many there must be. The topic is pure mathematics. Its main practical link is to how numbers factor in advanced number systems.
