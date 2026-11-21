---
type: problem
slug: davenport-constant-cyclic-power-conjecture
title: "The van Emde Boas–Kruyswijk conjecture: the Davenport constant of Cₙʳ"
entry: zero-sum-theory
status: OPEN
origin: Peter van Emde Boas and Dirk Kruyswijk, 1969
ratings:
  difficulty: 50
  applicationValue: 6
  leverage: 30
verification:
  route: REVIEW
sources:
  - title: "Gao, Geroldinger, Wang, Zeng: A disproof of the van Emde Boas–Kruyswijk conjecture on the Davenport constant (arXiv:2611.24775, v1, 18 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.24775
  - title: Gao, Geroldinger, Wang, Zeng, HTML version of v1 (introduction, Theorem 1.1, Lemmas 3.1 and 3.2)
    url: https://arxiv.org/html/2611.24775v1
  - title: "Wikipedia: Davenport constant"
    url: https://en.wikipedia.org/wiki/Davenport_constant
timeline:
  - date: 1969-01-01
    title: Equality D = D* for p-groups and rank at most two (1960s)
    body: Per the 2026 preprint, Kruyswijk and Olson independently proved D(G) = D*(G) for p-groups and for groups of rank at most two in the 1960s. The preprint gives no year, so the date is a placeholder within that decade, not a publication date.
    source: https://arxiv.org/html/2611.24775v1
  - date: 1969-12-01
    title: Van Emde Boas and Kruyswijk state the conjecture
    body: In the Mathematisch Centrum report 'A combinatorial problem on finite abelian groups III' (ZW 1969-008, December 1969, §12, p. 31) they conjecture D(Cₙʳ) = r(n−1)+1. DAH has not read the report; the dating follows the 2026 preprint's reference list.
    source: https://arxiv.org/html/2611.24775v1
  - date: 2018-01-01
    title: "Girard: D(C₆⁴) still unknown"
    body: The 2026 preprint cites Girard (2018) for the value of D(C₆⁴) being unknown at that time, and notes that the conjecture was widely expected to hold.
    source: https://arxiv.org/html/2611.24775v1
  - date: 2026-11-18
    title: "Gao, Geroldinger, Wang, Zeng: claimed counterexample for n = 6 (preprint)"
    body: Claims D(C₆ʳ) ≥ 5r + ⌊r/23⌋ + 1, hence D(C₆ʳ) > 5r + 1 for every r ≥ 23. Unrefereed; DAH has not checked the constructions.
    source: https://arxiv.org/abs/2611.24775
explainer:
  oneLine: How long must a list of clock-numbers be to force a group adding to zero? A 1969 guess may fail for 6-hour clocks (unrefereed).
  flow:
    - Easy list shows a lower bound
    - "1969: that bound is always exact"
    - Proved for prime powers and two clocks
    - "2026 preprint: fails for n = 6, r ≥ 23"
    - Unrefereed; DAH has checked nothing
  glossary:
    - term: abelian group
      meaning: A set with an addition that is commutative and associative, has a zero, and where every element has a negative.
      link: https://en.wikipedia.org/wiki/Abelian_group
    - term: cyclic group Cₙ
      meaning: "The integers mod n: numbers 0 to n−1 added with wrap-around, like hours on a clock with n hours."
      link: https://en.wikipedia.org/wiki/Cyclic_group
    - term: direct sum
      meaning: Building a bigger group from smaller ones by taking tuples and adding each coordinate separately; Cₙʳ is r copies of Cₙ.
      link: https://en.wikipedia.org/wiki/Direct_sum_of_groups
    - term: Davenport constant
      meaning: The smallest length that forces every sequence over a group to contain a non-empty sub-list with sum zero.
      link: https://en.wikipedia.org/wiki/Davenport_constant
    - term: zero-sum-free sequence
      meaning: A list of group elements in which no non-empty sub-list adds up to the zero element.
      link: https://en.wikipedia.org/wiki/Zero-sum_problem
    - term: rank
      meaning: Roughly, how many cyclic factors a group needs; Cₙʳ has rank r, so rank at most two means one or two clock factors.
      link: https://en.wikipedia.org/wiki/Rank_of_an_abelian_group
    - term: p-group
      meaning: A group whose size is a power of a prime p; Cₙʳ is one exactly when n is a prime power.
      link: https://en.wikipedia.org/wiki/P-group
    - term: pigeonhole principle
      meaning: If more objects are placed into boxes than there are boxes, some box holds two; used to show D(Cₙ) = n.
      link: https://en.wikipedia.org/wiki/Pigeonhole_principle
    - term: modular arithmetic
      meaning: Arithmetic where numbers wrap around after reaching a fixed size n, as on a clock.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: Erdős–Ginzburg–Ziv theorem
      meaning: Any 2n−1 integers contain n of them whose sum is divisible by n; a sister result in the same area.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Ginzburg%E2%80%93Ziv_theorem
  readFirst:
    - title: "Wikipedia: Davenport constant"
      url: https://en.wikipedia.org/wiki/Davenport_constant
      why: The definition, the equality cases and the known failures for large rank.
    - title: "Gao, Geroldinger, Wang, Zeng: the 2026 preprint (abstract)"
      url: https://arxiv.org/abs/2611.24775
      why: The claim itself, with the date and the absence of a journal reference.
    - title: The preprint, HTML version
      url: https://arxiv.org/html/2611.24775v1
      why: The introduction recounts the history of the conjecture, and Section 3 has the two lemmas.
    - title: "Wikipedia: Zero-sum problem"
      url: https://en.wikipedia.org/wiki/Zero-sum_problem
      why: The wider area, including the Erdős–Ginzburg–Ziv theorem.
raw:
  body: "For a finite abelian group $G$, the **Davenport constant** $\\mathsf D(G)$ is the smallest $\\ell$ such that every sequence over $G$ of length at least $\\ell$ has a non-empty subsequence with sum $0$. Writing $G\\cong C_{n_1}\\oplus\\dots\\oplus C_{n_r}$ with $1<n_1\\mid\\dots\\mid n_r$, set $\\mathsf D^*(G)=1+\\sum_{i=1}^{r}(n_i-1)$. Taking $n_i-1$ copies of a generator of each cyclic summand gives a zero-sum-free sequence, so $\\mathsf D(G)\\ge\\mathsf D^*(G)$ always. **Conjecture (van Emde Boas–Kruyswijk, 1969).** For all positive integers $n$ and $r$,\n$$\\mathsf D(C_n^r)=r(n-1)+1,$$\nthat is, $\\mathsf D(C_n^r)=\\mathsf D^*(C_n^r)$ for the homocyclic groups $C_n^r$. The question is whether this holds for every $n$ and $r$, or, if not, what $\\mathsf D(C_n^r)$ is."
  student: "**The question.** Let $G$ be a finite abelian group, a set with a commutative addition, such as the integers mod 6 ($C_6$: add and take the remainder on division by 6). A *sequence* over $G$ is a list of elements, repeats allowed. It is *zero-sum-free* if no non-empty sub-list adds to $0$. The **Davenport constant** $\\mathsf D(G)$ is the smallest $\\ell$ such that every sequence of length at least $\\ell$ has a non-empty zero-sum sub-list. For $C_3$: the list $1,1$ has sums $1,1,2$ so it is zero-sum-free, but any 3 terms contain a zero-sum sub-list, so $\\mathsf D(C_3)=3$. In general $\\mathsf D(C_n)=n$ by a pigeonhole argument on the $n$ partial sums.\n\n**Several clocks at once.** $C_n^r$ means $r$-tuples of residues mod $n$ added coordinatewise. Take the $r$ unit vectors $e_1,\\dots,e_r$ and write each $n-1$ times. No sub-list sums to zero (some coordinate would be between $1$ and $n-1$), and there are $r(n-1)$ terms, so\n$$\\mathsf D(C_n^r)\\ \\ge\\ r(n-1)+1 .$$\nIn words: the easy example's length plus one is always a lower bound. The **van Emde Boas–Kruyswijk conjecture** (1969) says this is always exactly right: $\\mathsf D(C_n^r)=r(n-1)+1$ for every $n$ and $r$.\n\n**What was known.** As the 2026 preprint recounts, equality was proved in the 1960s for $p$-groups (so when $n$ is a prime power) and for groups of rank at most two (at most two clock factors), by Kruyswijk and Olson. Other $n$ stayed open; even $C_6^4$ was unknown in 2018. Strict inequality $\\mathsf D(G)>\\mathsf D^*(G)$ was already known for some other groups of rank four or more, but those are not of the form $C_n^r$, which is what the conjecture is about.\n\n**What is claimed.** On 18 November 2026 Gao, Geroldinger, Wang and Zeng posted arXiv:2611.24775. Theorem 1.1, as DAH read it, states that for every $r\\ge1$\n$$\\mathsf D(C_6^r)\\ \\ge\\ 5r+\\lfloor r/23\\rfloor+1 ,$$\nwhere $\\lfloor x\\rfloor$ means rounding down. For $r\\ge23$ this is more than the conjectured $5r+1$. The idea: find unusually long zero-sum-free lists in a *small* piece, then reuse them. A length-24 list over $C_6^5$ (Lemma 3.1) and a length-20 list over $\\mathbb F_2^3\\oplus\\mathbb F_3^5$ (Lemma 3.2; $\\mathbb F_2$ and $\\mathbb F_3$ are the integers mod 2 and mod 3) are shown by case analysis and tables, and they combine into a zero-sum-free list of length $116=5\\cdot23+1$ over $C_6^{23}$, one longer than the conjecture allows. Taking copies for larger $r$ gains about one term per 23 clocks.\n\n**Honest status.** This is an unrefereed preprint. DAH read the full text of the paper, found no AI-use statement and no mention of a computer search, and has not checked any table or case. The paper gives only a lower bound: the exact value of $\\mathsf D(C_6^r)$, the case of other $n$, and $n=6$ with $r<23$ are not settled by it. A check you could run: a Python loop over the group's elements tracking which sums are reachable, applied to the two lemmas' tables."
site:
  aiReviewed: true
---

# State of the art

**Open in the accepted literature; a November 2026 preprint claims a counterexample.** As the 2026 preprint describes the history, $\mathsf D(G)=\mathsf D^*(G)$ was proved in the 1960s for $p$-groups and for groups of rank at most two (independently by Kruyswijk and Olson), so the conjecture holds for $C_n^r$ when $n$ is a prime power or $r\le2$. Wikipedia's article on the Davenport constant lists the same equality cases and adds that there are infinitely many groups of rank at least four with $\mathsf D(G)\neq\mathsf D^*(G)$ (its notation is $M(G)$), while it is not known whether a counterexample of rank three exists. The preprint adds that a first example of strict inequality was already found in the 1960s; the example it cites, $C_2\oplus C_{2n}^4$ with $n\ge3$ odd, is not homocyclic, so such examples did not bear on the conjecture as stated for $C_n^r$. The preprint says the conjecture was widely expected to hold and that even $\mathsf D(C_6^4)$ was unknown as late as 2018 (Girard).

On 18 November 2026 Weidong Gao, Alfred Geroldinger, Guoqing Wang and Xiangneng Zeng posted arXiv:2611.24775 (v1). Theorem 1.1 states $\mathsf D(C_6^r)\ge 5r+\lfloor r/23\rfloor+1$ for every $r\ge1$, which exceeds the conjectured $5r+1$ whenever $r\ge23$. The method, as the text reads, is a hand-built zero-sum-free sequence: Lemma 3.1 gives a sequence of length 24 over $C_6^5$ with a controlled set of sums, Lemma 3.2 gives a zero-sum-free sequence of length 20 over $\mathbb F_2^3\oplus\mathbb F_3^5$, and these are combined into a zero-sum-free sequence of length 116 over $C_6^{23}$ (that is, $5\cdot23+1$ terms, one more than the conjecture allows), then extended to all $r$ by taking copies and adding basis elements. Both lemmas are proved by explicit tables and hand case analysis; the paper does not mention a computer search and contains no AI-use statement.

The preprint is unrefereed and DAH has not checked it: DAH read the full five-page text of the PDF but did not verify the tables, the case analysis or the assembly. The paper gives lower bounds only. It determines no exact value of $\mathsf D(C_6^r)$, gives no upper bound, and does not address other $n$ or $n=6$ with $r<23$. The status stays OPEN.

# Applications

Few direct ones. The Davenport constant bounds how long irreducible factorizations can be in rings of integers and in Krull monoids, and the preprint says its result also disproves a conjectured statement about coverings by proper cosets; a confirmed counterexample would therefore withdraw a working assumption in factorization theory rather than enable a technology. No engineering application is foreseeable.

# Resolution criteria

For the conjecture as stated: a proof that $\mathsf D(C_n^r)=r(n-1)+1$ for all $n,r$, or a counterexample, accepted by experts in zero-sum theory (for example by refereed publication or a machine-checked proof whose statement matches the one above). The 2026 claim would be accepted as a disproof once the sequences in Lemmas 3.1 and 3.2 and their assembly are independently checked; an exact value of $\mathsf D(C_6^r)$ for every $r$ would be a separate and stronger result.

# Rating rationale

Rated against the accepted literature, not the unrefereed claim. Difficulty 50: open since 1969, with a claimed counterexample that DAH has not checked and exact values unknown even for C₆⁴ as of 2018, so it is research-grade rather than defining. Application value 6: no foreseeable practical use; it matters inside factorization theory. Leverage 30: a conjecture about the exact size of a basic invariant, cited in surveys and in covering and factorization conjectures, so a change of answer would affect a few results in one subfield.

# Verification

Experts in zero-sum theory read the preprint's Section 3: Lemma 3.1 (a sequence T of length 24 over C₆⁵ in which every non-empty subsequence with sum in the subgroup generated by h = 2e₃ + 4e₅ has sum exactly h) and Lemma 3.2 (a zero-sum-free sequence of length 20 over F₂³ ⊕ F₃⁵), then the assembly into a zero-sum-free sequence of length 116 over C₆²³ and the extension to all r. A concrete machine check is available because both lemmas live in small groups (C₆⁵ has 7776 elements, F₂³ ⊕ F₃⁵ has 1944): a dynamic programme over reachable subsequence sums confirms each lemma from the explicit tables in the paper. A Lean statement of Theorem 1.1 together with a checked certificate would be the formal route; none is known. Confirming the lower bound refutes the conjecture at n = 6 only and says nothing about other n.

# Plain explanation

Take a clock with 6 hours on it, so that 5 plus 1 wraps around to 0. Now line up some numbers on that clock and ask whether you can pick a few of them that add up to exactly zero. For one clock with 6 hours, any 6 numbers always contain such a group, and 5 numbers might not. Mathematicians call the smallest safe length the Davenport constant.

Now use several clocks at once, so that each item is a row of clock readings, added column by column. A simple recipe gives a long list with no group adding to zero, and it suggests that the safe length is a certain easy formula. In 1969 two Dutch mathematicians guessed that this formula is always exactly right. It was proved when the clock size is a prime power such as 2, 3, 4, 5, 7, 8 or 9, and for rows of one or two clocks.

On 18 November 2026 four mathematicians posted a paper saying the guess is wrong for 6-hour clocks once you use 23 or more of them. They say they built a list one longer than the formula allows that still has no group adding to zero.

Nobody independent has checked this yet. It is a preprint, not a refereed paper, and DAH has not verified it. Even if it holds, the exact answer is unknown: the paper only shows the safe length is somewhat larger than the formula.
