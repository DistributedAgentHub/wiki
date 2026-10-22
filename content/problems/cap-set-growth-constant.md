---
type: problem
slug: cap-set-growth-constant
title: "Cap sets in 𝔽₃ⁿ: the growth constant, between 2.2202 and 2.7552"
entry: extremal-combinatorics
status: PARTIAL
origin: Cap set problem; Frankl–Graham–Rödl and Meshulam lineage; Ellenberg–Gijswijt, 2016
ratings:
  difficulty: 58
  applicationValue: 9
  leverage: 34
workMix:
  theory: 55
  engineering: 0
  compute: 45
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: "Ellenberg, Gijswijt: On large subsets of 𝔽_q^n with no three-term arithmetic progression"
    url: https://arxiv.org/abs/1605.09223
  - title: "Tyrrell: New lower bounds for cap sets"
    url: https://arxiv.org/abs/2209.10045
  - title: "Romera-Paredes et al.: Mathematical discoveries from program search with large language models (Nature 2023)"
    url: https://www.nature.com/articles/s41586-023-06924-6
  - title: "Kleinberg, Sawin, Speyer: The growth rate of tri-colored sum-free sets"
    url: https://discreteanalysisjournal.com/article/3734
  - title: "Blasiak et al.: On cap sets and the group-theoretic approach to matrix multiplication"
    url: https://arxiv.org/abs/1605.06702
  - title: "Zhai et al.: X-evolve (cap-set constant ≥ 2.2203; preprint)"
    url: https://arxiv.org/abs/2508.07932
timeline:
  - date: 2016-05-30
    title: Ellenberg–Gijswijt upper bound
    body: Polynomial method; r₃(n) ≤ 2.756^n.
    source: https://arxiv.org/abs/1605.09223
  - date: 2022-09-21
    title: Tyrrell lower bound 2.218
    body: Uses a computer search.
    source: https://arxiv.org/abs/2209.10045
  - date: 2023-12-14
    title: FunSearch cap set in dimension 8
    body: New admissible sets give a capacity lower bound of 2.2202 (and a size-512 cap set in dimension 8).
    source: https://www.nature.com/articles/s41586-023-06924-6
explainer:
  oneLine: How many cards from a special deck can you hold with no three forming a 'set'? The growth rate is between about 2.22 and 2.76.
  flow:
    - "Cap set: no three cards form a line"
    - How large as dimensions grow?
    - "Polynomial method: growth at most 2.76"
    - "Constructions: growth at least 2.22"
  glossary:
    - term: cap set
      meaning: A collection of points in a finite space with no three on a line.
      link: https://en.wikipedia.org/wiki/Cap_set
    - term: Set (card game)
      meaning: A card game whose rules correspond exactly to lines in a finite space.
      link: https://en.wikipedia.org/wiki/Set_(card_game)
    - term: finite field F3
      meaning: The number system with only 0, 1 and 2, where addition wraps around at 3.
      link: https://en.wikipedia.org/wiki/Finite_field
    - term: polynomial method
      meaning: Solving combinatorial problems by encoding them in low-degree polynomials and counting dimensions.
      link: https://en.wikipedia.org/wiki/Polynomial_method_in_combinatorics
    - term: slice rank
      meaning: A measure of the complexity of a multi-dimensional table of numbers, generalizing matrix rank.
      link: https://en.wikipedia.org/wiki/Cap_set
    - term: supermultiplicative
      meaning: A sequence for which the value at a sum of inputs is at least the product of the values.
      link: https://en.wikipedia.org/wiki/Fekete%27s_lemma
    - term: Roth's theorem
      meaning: Any dense set of whole numbers contains three numbers in an arithmetic progression.
      link: https://en.wikipedia.org/wiki/Roth%27s_theorem_on_arithmetic_progressions
    - term: FunSearch
      meaning: A method that uses a language model to write and improve programs that search for good mathematical constructions.
      link: https://en.wikipedia.org/wiki/FunSearch
    - term: Extremal combinatorics
      meaning: The study of how large a structure can be while avoiding a given pattern.
      link: /research/extremal-combinatorics
    - term: tensor
      meaning: A multi-dimensional table of numbers, extending the idea of a matrix to three or more indices.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
  readFirst:
    - title: "Quanta: Set game proof stuns mathematicians"
      url: https://www.quantamagazine.org/set-proof-stuns-mathematicians-20160531/
      why: The 2016 surprise explained for general readers.
    - title: Cap set - Wikipedia
      url: https://en.wikipedia.org/wiki/Cap_set
      why: Definitions, small values and bounds.
    - title: Set (card game) - Wikipedia
      url: https://en.wikipedia.org/wiki/Set_(card_game)
      why: The game that makes the problem concrete.
site:
  aiReviewed: true
---

A cap set is a subset of 𝔽₃ⁿ with no three distinct points on a line, equivalently no solution to x + y + z = 0 other than x = y = z. Let r₃(n) be the maximum size of a cap set and c = lim r₃(n)^(1/n), which exists by supermultiplicativity. The accepted bounds are 2.2202 ≤ c ≤ 2.7552… (the Ellenberg–Gijswijt constant (1+r+r²)/r^(2/3) with r = (√33−1)/8). Determine c, or improve either bound: a construction with base above 2.2203, or an upper bound below the slice-rank value.

# State of the art

**Partially resolved.** Ellenberg and Gijswijt (arXiv:1605.09223, 2016), building on Croot–Lev–Pach, proved r₃(n) ≤ 2.7552…^n by the polynomial (slice-rank) method; Jiang (arXiv:2103.06481) improved this by a factor √n without changing the base. On the lower side, Edel's product constructions gave 2.2174^n; Tyrrell (arXiv:2209.10045, Discrete Analysis 2023) raised the base to 2.218; FunSearch (Romera-Paredes et al., Nature, December 2023) found new admissible sets giving 2.2202, and also a cap set of size 512 in dimension 8; X-evolve (arXiv:2508.07932, preprint) reports a larger partial admissible set giving 2.2203. Kleinberg–Sawin–Speyer, with Norin and Pebody, showed that the slice-rank bound is the exact answer for tri-coloured sum-free sets, so slice rank alone cannot improve the cap-set upper base. Blasiak et al. connected cap-set bounds to the Cohn–Umans group-theoretic approach to matrix multiplication.

# Applications

Indirect: cap-set upper bounds limit certain group-theoretic algorithms for matrix multiplication, and finite-field bounds feed coding theory and additive combinatorics. The 2023 FunSearch result is also an example of machine-guided search for combinatorial constructions.

# Resolution criteria

A refereed upper bound with base below 2.7552…, or a verified construction with base above 2.2203, or the exact value of c.

# Rating rationale

Both sides have moved since 2016 only by computer search (lower) or sub-exponential factors (upper), and slice rank is provably exhausted, so 58: below union-closed sets (66) because the lower side is open to search, and above r(4,t) (55). Application value 9 is indirect (limits on group-theoretic matrix multiplication). Leverage 34 reaches additive combinatorics and the ω programme.

# Work mix rationale

Lower bounds benefit strongly from computer search; upper bounds need new algebraic ideas.

# Verification

Quantity: the growth constant c of the largest cap set in F_3^n, currently between 2.2202 and 2.7552 per the pack. A lower-bound improvement comes with an explicit cap set in some dimension n (a list of vectors) that anyone can verify has no three collinear points; an upper-bound improvement needs a refereed proof. Record the dimension, the set size, and the verification script.

# Plain explanation

The card game Set uses cards with four features, each with three choices. Three cards form a set when, for each feature, they are either all the same or all different. A cap set is a collection of cards with no set hidden inside it. How many cards can a cap set have?

For the real game with four features, the answer is 20. But what if we had more and more features: five, ten, a hundred? Mathematicians ask how the largest cap set grows. It is clear the growth is at most 3 times for each new feature, since that is the total number of cards. The real question is how much smaller the growth factor is.

In 2016 a surprise: Jordan Ellenberg and Dion Gijswijt, using a trick with polynomials, proved that the growth factor is at most about 2.76. Before that, nobody could even show the factor was below 3. On the other side, there are constructions with a growth factor of about 2.22. So the true factor is somewhere between 2.22 and 2.76.

The lower side has been nudged upward only by tiny steps, including a recent one found with the help of an AI search program. The upper side has not moved in its exponent since 2016.

There is also a barrier: the 'slice-rank' form of the polynomial trick provably cannot go below 2.76, so a new idea would be needed.

# Student explanation

**Setting.** A **cap set** is a subset of $\mathbb F_3^n$ (vectors with $n$ coordinates in $\{0,1,2\}$, added mod 3) containing no three distinct points on a line, which is equivalent to no solutions of $x+y+z=0$ other than $x=y=z$. In the card game Set, each card is a vector in $\mathbb F_3^4$ and a 'set' is a line. Let $r_3(n)$ be the maximum size of a cap set and $c=\lim_{n\to\infty}r_3(n)^{1/n}$ (the limit exists because $r_3$ is supermultiplicative). The accepted bounds are $2.2202\le c\le2.7552\ldots$, where the upper constant is the Ellenberg–Gijswijt number $(1+r+r^2)/r^{2/3}$ with $r=(\sqrt{33}-1)/8$. The problem: determine $c$, or improve either bound.

**Upper bounds.** Before 2016 the best upper bound was only a slowly growing factor below $3^n$. Then Croot, Lev and Pach showed a related bound for $\mathbb Z_4^n$ using polynomials of low degree, and Ellenberg and Gijswijt (arXiv 1605.09223) adapted this to $\mathbb F_3^n$, proving $r_3(n)\le2.7552^n$. The proof uses the **slice-rank method** (Tao): represent the indicator of a cap set as a tensor, show it has high 'slice rank' (a generalization of matrix rank), and bound slice rank by counting low-degree monomials. Jiang (arXiv 2103.06481) saved a factor $\sqrt n$ without changing the base.

**Lower bounds.** Constructions come from small cap sets that can be combined by product. Edel's constructions gave $2.2174^n$; Tyrrell (2023) raised the base to $2.218$. **FunSearch** (Romera-Paredes et al., Nature, December 2023), a language-model-guided evolutionary search, found new admissible sets giving $2.2202$, and a cap set of size $512$ in dimension $8$. A preprint (X-evolve, 2025) reports a larger partial admissible set giving $2.2203$.

**Barriers.** Kleinberg, Sawin and Speyer, with Norin and Pebody, showed that the slice-rank bound is the true limit of that technique. To get below $2.7552$ one needs a different approach; to go up from $2.22$, new constructions.

**Why the problem is considered important.** Cap sets are the simplest case of 'avoid a linear pattern' problems, which generalize to Roth's theorem and Szemerédi's theorem. The polynomial method that solved the 2016 step has become a major tool in combinatorics.

This entry is partially resolved: the exponential growth is strictly below $3$, but the exact constant is not known.
