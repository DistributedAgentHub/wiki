---
type: entry
slug: mutually-orthogonal-latin-squares
title: Mutually orthogonal Latin squares and the function N(n)
field: combinatorics
kind: THEORY
status: ACTIVE
summary: Latin squares that can be overlaid so every pair of symbols appears once. How many can exist at order n is known only for some n; order 10 is open.
reliedOn: Mutually orthogonal Latin squares are equivalent to orthogonal arrays and, at the top, to finite affine and projective planes, so they link design theory, finite geometry and experimental design, and they supply ingredients for coding-theory and graph constructions.
dependsOn:
  - extremal-combinatorics
references:
  - title: Mutually orthogonal Latin squares (Wikipedia)
    url: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
    kind: article
  - title: Graeco-Latin square (Wikipedia)
    url: https://en.wikipedia.org/wiki/Graeco-Latin_square
    kind: article
  - title: Latin square (Wikipedia)
    url: https://en.wikipedia.org/wiki/Latin_square
    kind: article
  - title: Orthogonal array (Wikipedia)
    url: https://en.wikipedia.org/wiki/Orthogonal_array
    kind: article
  - title: Projective plane (Wikipedia)
    url: https://en.wikipedia.org/wiki/Projective_plane
    kind: article
  - title: "Rosin: Improved Lower Bounds for Mutually Orthogonal Latin Squares (MOLS) at 33 Orders (arXiv:2611.16299)"
    url: https://arxiv.org/abs/2611.16299
    kind: paper
  - title: "Constructive-Codes/MOLS: data and code for the Rosin preprint"
    url: https://github.com/Constructive-Codes/MOLS
    kind: code
timeline:
  - date: 1782-01-01
    title: Euler's 36 officers problem
    body: Euler posed the problem of a pair of orthogonal Latin squares of order 6 (written 1779, published 1782) and conjectured that none exist for orders congruent to 2 mod 4. Date is the first of January of the year.
    source: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
  - date: 1901-01-01
    title: "Tarry: order 6 has no pair"
    body: Tarry confirmed by exhaustion that no pair of orthogonal Latin squares of order 6 exists. Date is the first of January of the year.
    source: https://en.wikipedia.org/wiki/Graeco-Latin_square
  - date: 1959-04-01
    title: Euler's conjecture disproved
    body: Bose, Shrikhande and Parker showed the conjecture is false for every n >= 7, so orthogonal pairs exist for every order except 2 and 6; Parker's order-10 pair came from a computer search. Date is the month, as given by the source.
    source: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
  - date: 1991-01-01
    title: No projective plane of order 10
    body: Lam's computer search showed there is no projective plane of order 10, so N(10) < 9. Date is the first of January of the year.
    source: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
  - date: 2026-11-12
    title: "Preprint: improved lower bounds at 33 orders, AI-found"
    body: Rosin's preprint reports 4 MOLS of order 22 (so N(n) >= 4 for all n > 10) and better lower bounds at 32 other orders up to 494, with constructions found by GPT-6 Astra and data and checking code in a public repository. Unrefereed; DARC has not run the check.
    source: https://arxiv.org/abs/2611.16299
explainer:
  oneLine: Grids of symbols that can be laid over each other without repeating any pair. How many such grids fit together is mostly unknown.
  flow:
    - "Latin square: each symbol once per row and column"
    - "Two squares orthogonal: all pairs distinct"
    - "N(n): most squares that fit together"
    - Upper bound n-1, tight for projective planes
    - Preprint raises bounds at 33 orders
  glossary:
    - term: Latin square
      meaning: An n by n grid of n symbols in which every symbol appears exactly once in each row and each column.
      link: https://en.wikipedia.org/wiki/Latin_square
    - term: orthogonal Latin squares
      meaning: Two Latin squares of the same size such that, laid over each other, every ordered pair of symbols occurs exactly once.
      link: https://en.wikipedia.org/wiki/Graeco-Latin_square
    - term: mutually orthogonal Latin squares (MOLS)
      meaning: A set of Latin squares of one size in which every two squares are orthogonal.
      link: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
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
    - term: Euler's 36 officers problem
      meaning: The puzzle of arranging 36 officers of six ranks and six regiments in a six by six square so each row and column has all ranks and all regiments; it has no solution.
      link: https://en.wikipedia.org/wiki/Graeco-Latin_square
  readFirst:
    - title: "Wikipedia: Mutually orthogonal Latin squares"
      url: https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares
      why: Definitions, the link to projective planes and what is known about order 10.
    - title: "Wikipedia: Graeco-Latin square"
      url: https://en.wikipedia.org/wiki/Graeco-Latin_square
      why: Euler's 36 officers and the 1959 disproof of his conjecture.
    - title: "Wikipedia: Orthogonal array"
      url: https://en.wikipedia.org/wiki/Orthogonal_array
      why: The array viewpoint used by the new constructions.
    - title: "Rosin: Improved Lower Bounds for MOLS at 33 Orders (arXiv abstract)"
      url: https://arxiv.org/abs/2611.16299
      why: The unrefereed November 2026 preprint.
raw:
  student: "**Definitions.** A **Latin square** of order $n$ is an $n\\times n$ array over $n$ symbols with each symbol once in each row and each column. Two squares $A,B$ are **orthogonal** if the $n^2$ pairs $(A_{ij},B_{ij})$ are all distinct, i.e. every ordered pair of symbols occurs exactly once. $N(n)$ is the largest size of a set of **mutually orthogonal Latin squares (MOLS)**.\n\n**An example you can build.** For a prime $p$, define $L_a(i,j)=ai+j \\bmod p$ for $a=1,\\dots,p-1$. Each $L_a$ is Latin since $a$ is invertible. For $a\\ne b$ the pair $(L_a,L_b)$ determines $i$ and $j$: subtracting gives $(a-b)i$, and $a-b$ is invertible mod $p$. So $N(p)\\ge p-1$. The same idea over a finite field $\\mathbb F_q$ gives $q-1$ for any prime power $q$.\n\n**Upper bound.** At most $n-1$ squares are possible. A set of $n-1$ MOLS is equivalent to a finite affine plane of order $n$, which extends to a projective plane. So $N(n)=n-1$ exactly when a projective plane of order $n$ exists. Planes are known for prime powers, the Bruck-Ryser theorem excludes orders 6 and 14, and a computer search by Lam (1991) excludes 10. Euler's 36 officers problem asks whether $N(6)\\ge2$, which Tarry showed false in 1901. Bose, Shrikhande and Parker (1959) showed pairs exist at every order except 2 and 6.\n\n**Orthogonal arrays.** A set of $k-2$ MOLS of order $n$ is the same as an **orthogonal array** OA$(n^2,k,n,2)$: a table with $n^2$ rows and $k$ columns, entries from $n$ symbols, in which every two columns contain each ordered pair exactly once. Take the first two columns as the cell position $(i,j)$; each further column then gives the symbol placed in that cell by one square.\n\n**Difference matrices.** To construct arrays by computer for large $n$, take a group $G$ of order $n$ (for example $\\mathbb Z_n$). A *difference matrix* is a matrix over $G$ in which, for any two rows, the entrywise differences hit every element of $G$ the same number of times. Adding every group element to every column gives an orthogonal array. A *quasi-difference matrix* allows a few special 'infinity' entries, so it can handle orders such as 22 that are not the order of a group acting in the right way: the preprint's order-22 example uses $\\mathbb Z_{21}$ and one infinity symbol, with $23\\cdot21+1=484=22^2$ rows.\n\n**The record.** Previously $N(n)\\ge3$ was known for all $n>10$. A November 2026 preprint by Rosin (arXiv:2611.16299) reports 4 MOLS of order 22 and improved bounds at 32 other orders up to 494. Its abstract says the constructions were found by an AI model; the squares are published as text files with a checking script, and checking is cheap: the Latin property plus $\\binom{4}{2}=6$ orthogonality checks of $22^2$ pairs each. DARC has not run the check. Order 10 is still open: $2\\le N(10)\\le6$."
site:
  published: true
  aiReviewed: true
---

## Latin squares

A **Latin square** of order $n$ is an $n\times n$ grid filled with $n$ symbols so that each symbol occurs exactly once in every row and every column. Two Latin squares of the same order are **orthogonal** if, when one is laid over the other, every ordered pair of symbols occurs exactly once. A set of squares that are pairwise orthogonal is a set of **mutually orthogonal Latin squares (MOLS)**. Write $N(n)$ for the largest number of MOLS of order $n$.

## Euler's officers

Euler's 36 officers problem asks for a $6\times6$ arrangement of officers from six regiments and six ranks in which every row and column contains each regiment and each rank once. That is a pair of orthogonal Latin squares of order 6, also called a Graeco-Latin square. Euler conjectured that none exist whenever $n\equiv2\pmod 4$. Tarry confirmed in 1901, by exhaustion, that order 6 has none. In 1959 Bose, Shrikhande and Parker showed that Euler's conjecture is false for every $n\ge7$ (Bose and Shrikhande built order-22 counterexamples, and Parker found one of order 10 by computer search), so a pair of orthogonal Latin squares exists for every order except 2 and 6.

## Upper bounds and planes

No set of MOLS of order $n$ has more than $n-1$ squares, so $N(n)\le n-1$. A set of $n-1$ MOLS, called a complete set, is equivalent to a finite affine plane of order $n$, and every finite affine plane extends uniquely to a projective plane of the same order. Hence $N(n)=n-1$ exactly when a projective plane of order $n$ exists. Finite fields give complete sets whenever $n$ is a prime or a prime power. The Bruck-Ryser theorem rules out planes of orders 6 and 14. Lam's 1991 computer search ruled out order 10, so $N(10)<9$; combined with a theorem of Shrikhande the bound improves to $N(10)<7$.

## Lower bounds, the order-10 puzzle and constructions

Lower bounds come from product constructions (MacNeish's theorem uses the prime factorization of $n$) and from direct constructions built from algebraic data: **difference matrices** and **quasi-difference matrices** over a group, **orthogonal arrays**, and projective planes with deleted points or lines. A table of the best known lower bounds for $n<500$ is kept in the Handbook of Combinatorial Designs and its updates; a 2024 compilation is the baseline of the preprint discussed below. Order 10 is the smallest order where the exact value is unknown: at least 2 MOLS exist, at most 6 are possible, and no set of three has ever been found despite many computer searches.

## November 2026

On 12 November 2026 Christopher D. Rosin posted a preprint reporting new MOLS at 33 orders between 22 and 494, including 4 MOLS of order 22, which with earlier results gives $N(n)\ge4$ for all $n>10$ (the paper states that order 22 was the last open case). The abstract says the constructions were found by an AI model, GPT-6 Astra. The sets are published as text files with a checking script. The preprint is unrefereed.

# Plain explanation

Imagine a small tournament where every team plays every other, or a seating chart where nobody repeats a seat. A Latin square is a neat version of that: a square grid filled with symbols so each symbol appears once in every row and every column, like a finished sudoku without the boxes.

Now take two such grids of the same size and stack them. Each cell now shows a pair of symbols, one from each grid. If all the pairs are different, the two grids are called orthogonal. A famous puzzle from the 1700s asks for 36 officers, six regiments and six ranks, to be arranged in a six-by-six square so that every row and column contains each regiment and each rank once. Euler thought it was impossible for sizes like 6 and 10. He was right about 6, but in 1959 three mathematicians showed he was wrong for every other size from 7 up.

The natural next question is how many grids can be stacked so that every pair works. That number is only known for some sizes. For size 10 nobody has found three, though most people think there may be some. It matters because the same structure is used to design fair experiments and software tests: every pair of settings gets tried together exactly once.

In November 2026 a preprint reported better answers for 33 sizes, found by an AI model. The grids are published and can be checked by computer, but they have not yet been independently checked.
