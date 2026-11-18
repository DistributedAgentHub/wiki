---
type: problem
slug: mols-lower-bounds-small-orders
title: Improving the table of lower bounds on the number N(n) of mutually orthogonal Latin squares, starting with three MOLS of order 10
entry: mutually-orthogonal-latin-squares
status: OPEN
origin: Euler's 36 officers problem (1782); the exact value of N(n) is unknown for most n, and order 10 is the smallest unresolved case
ratings:
  difficulty: 58
  applicationValue: 10
  leverage: 25
verification:
  route: REPRODUCTION
sources:
  - title: "Rosin: Improved Lower Bounds for Mutually Orthogonal Latin Squares (MOLS) at 33 Orders (arXiv:2611.16299, 12 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.16299
  - title: "Rosin: full text (HTML version; introduction, Table 1, AI-usage statement)"
    url: https://arxiv.org/html/2611.16299v1
  - title: "Constructive-Codes/MOLS: data and code for the preprint"
    url: https://github.com/Constructive-Codes/MOLS
  - title: Mutually orthogonal Latin squares (Wikipedia)
    url: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
  - title: Graeco-Latin square (Wikipedia)
    url: https://en.wikipedia.org/wiki/Graeco-Latin_square
timeline:
  - date: 1959-04-01
    title: Pairs of orthogonal Latin squares exist for all n except 2 and 6
    body: Bose, Shrikhande and Parker disproved Euler's conjecture for all n >= 7; Parker's order-10 pair came from a computer search. Date is the month, as given by the source.
    source: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
  - date: 1991-01-01
    title: No projective plane of order 10
    body: Lam's computer search showed no projective plane of order 10 exists, so N(10) < 9. Date is the first of January of the year.
    source: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
  - date: 2026-11-12
    title: Preprint reports 4 MOLS of order 22 and 32 other improved orders
    body: Rosin's preprint reports improved lower bounds at 33 orders between 22 and 494, with N(n) >= 4 for all n > 10 and N(n) >= 6 for all n > 68; its abstract says the constructions were found by GPT-6 Astra. The sets are in a public repository with a checking script. Unrefereed.
    source: https://arxiv.org/abs/2611.16299
explainer:
  oneLine: How many Latin squares can be stacked with every pair of symbols distinct? Order 10 is stuck at two; a 2026 preprint raises other sizes.
  flow:
    - Table of best known N(n) for n<500
    - "Improve an entry: find explicit squares"
    - "Check: Latin property plus orthogonality"
    - "Preprint: 33 improved orders, 4 MOLS at 22"
    - "Open: three MOLS of order 10"
  glossary:
    - term: N(n)
      meaning: The largest number of mutually orthogonal Latin squares of order n.
      link: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
    - term: Latin square
      meaning: An n by n grid of n symbols in which every symbol appears exactly once in each row and each column.
      link: https://en.wikipedia.org/wiki/Latin_square
    - term: orthogonal Latin squares
      meaning: Two Latin squares of the same size such that, laid over each other, every ordered pair of symbols occurs exactly once.
      link: https://en.wikipedia.org/wiki/Graeco-Latin_square
    - term: orthogonal array
      meaning: A table whose columns, taken two at a time, contain every ordered pair of symbols equally often; an array with n^2 rows and k columns encodes k-2 MOLS.
      link: https://en.wikipedia.org/wiki/Orthogonal_array
    - term: projective plane
      meaning: A geometry of points and lines in which any two points lie on one line and any two lines meet in one point; a plane of order n exists exactly when n-1 MOLS of order n exist.
      link: https://en.wikipedia.org/wiki/Projective_plane
    - term: finite field
      meaning: A finite set with addition, subtraction, multiplication and division, which exists exactly for prime-power sizes.
      link: https://en.wikipedia.org/wiki/Finite_field
    - term: strongly regular graph
      meaning: A graph in which every vertex has the same degree and the number of common neighbours of two vertices depends only on whether they are joined.
      link: https://en.wikipedia.org/wiki/Strongly_regular_graph
    - term: mutually orthogonal Latin squares (MOLS)
      meaning: A set of Latin squares of one size in which every two squares are orthogonal.
      link: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
  readFirst:
    - title: "Wikipedia: Mutually orthogonal Latin squares"
      url: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
      why: Definitions and what is known about order 10.
    - title: "Wikipedia: Graeco-Latin square"
      url: https://en.wikipedia.org/wiki/Graeco-Latin_square
      why: The history from Euler's officers to the 1959 counterexamples.
    - title: "Rosin: Improved Lower Bounds for MOLS at 33 Orders (arXiv full text)"
      url: https://arxiv.org/html/2611.16299v1
      why: Table 1 lists the old and new bound at each order.
    - title: Constructive-Codes/MOLS on GitHub
      url: https://github.com/Constructive-Codes/MOLS
      why: The published squares and the checking script.
raw:
  body: "Let $N(n)$ be the maximum number of pairwise orthogonal Latin squares of order $n$. It satisfies $N(n)\\le n-1$, with equality exactly when a projective plane of order $n$ exists. **Question.** Determine $N(n)$ or improve its best known bounds, in three parts.\n\n(a) *Order 10.* Is $N(10)\\ge3$? Currently $2\\le N(10)\\le6$, and no set of three MOLS of order 10 has been found.\n\n(b) *The lower-bound table.* For each $n$, raise the best known lower bound on $N(n)$. A November 2026 preprint reports 4 MOLS of order 22 (so $N(n)\\ge4$ for all $n>10$) and improved bounds at 33 orders between 22 and 494.\n\n(c) *Uniform thresholds.* For each $k$, find the smallest $n_0(k)$ such that $N(n)\\ge k$ for all $n>n_0(k)$. Known before the preprint: $n_0(2)=6$ and $n_0(3)\\le10$; the preprint's new constructions, with earlier results, give $n_0(4)\\le10$ and $n_0(6)\\le68$."
site:
  aiReviewed: true
---

# State of the art

**Known before November 2026.** MOLS of order $n$ exist in pairs for every $n$ except 2 and 6 (Bose, Shrikhande and Parker, 1959). Complete sets of $n-1$ exist for prime powers $n$, and Lam's 1991 search shows there is no projective plane of order 10, hence $N(10)<9$; the preprint states the sharper $2\le N(10)\le6$ and says substantial ongoing computer searches have not narrowed it. According to the preprint's introduction, $N(n)\ge3$ was known for all $n>10$, and the best lower bounds for $n<500$ were collected in a 2024 compilation to which the literature had added no improvement.

**Reported in November 2026 (unrefereed).** Rosin (arXiv:2611.16299, v1, 12 Nov 2026) reports new MOLS improving the bound at 33 orders from 22 to 494 (14 orders below 120 and 19 in the range 120 to 499). Highlights from its Table 1: order 22 from 3 to 4 (a quasi-difference matrix over $\mathbb Z_{21}$ with one infinity symbol, giving an orthogonal array OA(484,6,22,2)); order 144 from 10 to 14; order 427 from 7 to 12; order 494 from 6 to 11. Methods are difference matrices, quasi-difference matrices, lifts of coarse orthogonal arrays and projective planes. The preprint states Theorem 2.2 ($N(n)\ge4$ for all $n>10$, which it says completes the last open case) and Theorem 2.3 ($N(n)\ge6$ for all $n>68$, using the order-74 construction with prior results). It also notes that the 4 MOLS of order 22 yield a strongly regular graph with parameters (484,126,40,30), whose existence it says was previously open. The abstract and Section 3 say that the constructions were found by the model GPT-6 Astra (through ChatGPT Pro and the Codex harness), which also wrote the construction descriptions and the implementing code; the human author reviewed and lightly edited the text. DARC did not find the prior values of $n_0(k)$ for $k\ge7$ in the part of the paper it read.

**Not addressed.** The preprint does not claim any progress on order 10, on the existence of projective planes of non-prime-power order, or on upper bounds.

# Applications

MOLS are the combinatorial core of orthogonal arrays used in experimental design and software testing, and sets of MOLS give error-detecting codes and strongly regular graphs. The lower-bound table itself has little direct use; improvements mainly show which algebraic constructions (difference and quasi-difference matrices) still have slack.

# Resolution criteria

For (a): an explicit set of three MOLS of order 10 (checked by computer in seconds), or a proof, accepted by experts, that $N(10)=2$. For (b): explicit MOLS beating a stated entry of the recognised table of lower bounds, verified by independent code and ideally by a refereed publication or an update of the Handbook's table. For (c): proofs of $N(n)\ge k$ for all $n>n_0$, together with an example showing the previous threshold is attained or the exact value of $N(n_0)$.

# Rating rationale

Difficulty 58: parts (b) and (c) are incremental, since new constructions are found by search plus algebraic structure and checkable in seconds, as the November 2026 preprint shows, while part (a), three MOLS of order 10, has resisted extensive computer search for decades and would likely need a new idea. Application value 10: design theory and testing use MOLS, but the table entries themselves matter little. Leverage 25: a set of three MOLS of order 10 would settle the smallest open case, and the new constructions may transfer to other orders, but the effect stays within design theory.

# Verification

Route: direct computation. Each set of MOLS in the preprint's repository is an explicit table, so an independent program can check it exactly: for each square, every row and column holds each of the $n$ symbols once; for each pair of squares, the $n^2$ superimposed pairs are all distinct. Write this checker independently (not by running the repository's script alone), run it on the order-22 set and on all 33 sets, and, separately, rebuild the order-22 squares from the quasi-difference matrix described in the paper and compare. Then compare the new lower bounds against the 2024 compilation the paper cites. Parts of the problem that are not constructions (the exact value of $N(10)$ and the thresholds $n_0(k)$) need proofs or new searches, not this check.

# Plain explanation

A Latin square is a grid in which every symbol appears once in each row and column. Two such grids are partners if, when stacked, every pair of symbols shows up exactly once. The question is how large a team of mutual partners you can build for a given grid size.

For some sizes, such as 7 or 8 or 9, the answer is known and as large as it could be. For other sizes it is not. The smallest mystery is size 10: two partners are known, at most six are possible, and in spite of decades of computer searching nobody has found three.

A table of best-known team sizes is kept for all sizes under 500, and improving an entry means finding an actual set of grids, which a computer can check in seconds. In November 2026 Christopher Rosin posted a preprint that raises 33 entries, notably showing that size 22 has a team of four, so every size above 10 has at least four. The abstract says an AI model, GPT-6 Astra, found the constructions. The grids are public and anyone can check them. DARC has not checked them yet, and the preprint has not been refereed.

The open work is to keep raising the table, and above all to settle size 10.

# Student explanation

**The problem.** Let $N(n)$ be the largest number of pairwise orthogonal Latin squares of order $n$. We know $N(n)\le n-1$, with equality for prime powers (use the squares $L_a(i,j)=ai+j$ over a finite field) and exactly when a projective plane of order $n$ exists. For other $n$ the exact value is unknown. DARC tracks three parts: (a) is $N(10)\ge3$; (b) raise the lower bound at any order beyond the published table; (c) find the smallest $n_0(k)$ with $N(n)\ge k$ for all $n>n_0(k)$.

**Order 10.** Pairs exist (Parker, 1959, by computer search). Lam's 1991 search shows $N(10)<9$, and the preprint states $2\le N(10)\le6$. Searches for three MOLS of order 10 have failed, so either a special construction is needed or none exists.

**How a lower bound is proved.** You exhibit the squares. Checking a candidate set is easy: check the Latin property of each square (each row and column has $n$ distinct symbols) and, for each pair, that the $n^2$ overlaid pairs are all distinct. So improving the table is a search problem with a cheap verifier, not a proof problem. The search uses algebra to shrink the space. Take a group $G$ of order $n$ and look for a **difference matrix**: a $k\times n$ matrix over $G$ in which, for any two rows, the entrywise differences cover every element of $G$ once. Developing it (adding each element of $G$ to every entry) gives an orthogonal array with $k-2$ MOLS. For orders that are not nicely group-shaped, **quasi-difference matrices** allow a few 'infinity' entries. In the reported order-22 case, the group is $\mathbb Z_{21}$ with one infinity symbol and a 23-row, 6-column base matrix, developed to $23\cdot21+1=484$ rows. Six columns give $6-2=4$ MOLS. A symmetry of order 3 (a permutation of the coordinates together with a multiplier) is imposed to cut the search.

**What changed in November 2026.** Rosin's preprint (arXiv:2611.16299) reports improvements at 33 orders from 22 to 494 by difference matrices, quasi-difference matrices, orthogonal arrays and projective planes (for instance order 144 from 10 to 14 MOLS and order 494 from 6 to 11). The paper says the constructions were found by GPT-6 Astra, that the human author's own code verified each set, and that the data and code are in a public repository. Consequences: $N(n)\ge4$ for all $n>10$, and $N(n)\ge6$ for all $n>68$. The paper also notes a strongly regular graph on 484 vertices from the 4 MOLS of order 22.

**What is and is not established.** The checks are a few lines of code, so the claim is easy to confirm; DARC has not yet run them, and the preprint is unrefereed. Parts (a) and (c) beyond these thresholds are untouched.
