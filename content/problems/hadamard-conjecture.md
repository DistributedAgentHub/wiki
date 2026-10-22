---
type: problem
slug: hadamard-conjecture
title: "The Hadamard conjecture: a Hadamard matrix of every order divisible by 4"
entry: extremal-combinatorics
status: OPEN
origin: Jacques Hadamard, 1893
ratings:
  difficulty: 70.5
  applicationValue: 14
  leverage: 28
workMix:
  theory: 55
  engineering: 10
  compute: 35
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Formal Conjectures: Hadamard conjecture (Lean statement)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/Hadamard.lean
  - title: "Eliahou: A 64-modular Hadamard matrix of order 668 (Australas. J. Combin. 93, 2025)"
    url: https://ajc-new.maths.uq.edu.au/v93.p422
  - title: "Alpöge: announcement on X, 12 August 2026 (primary report; login required)"
    url: https://x.com/__alpoge__/status/2087504785952182273
  - title: "Nechita: New Hadamard matrices (blog, 13 August 2026; informal check)"
    url: https://ion.nechita.net/posts/new-hadamard-matrices/
  - title: "Epoch AI: FrontierMath Open Problems, Hadamard Matrix of Order 668"
    url: https://epoch.ai/frontiermath/open-problems/hadamard
  - title: Hadamard matrix (Wikipedia)
    url: https://en.wikipedia.org/wiki/Hadamard_matrix
timeline:
  - date: 2004-01-01
    title: Order 428 settled
    body: Kharaghani and Tayfeh-Rezaie construct a Hadamard matrix of order 428, per Epoch AI (year only known).
    source: https://epoch.ai/frontiermath/open-problems/hadamard
  - date: 2025-09-24
    title: 64-modular matrix of order 668
    body: Eliahou's paper (received 24 September 2025) raises the modulus record to 64 without producing a true Hadamard matrix.
    source: https://ajc-new.maths.uq.edu.au/v93.p422
  - date: 2026-08-12
    title: Matrices of order 668 and other open orders below 2000 reported
    body: Levent Alpöge posts data encoding the matrices on X, crediting two collaborators and Claude; no paper or data file yet, and no published independent check.
    source: https://x.com/__alpoge__/status/2087504785952182273
explainer:
  oneLine: Is there a square grid of +1 and −1 with perfectly 'orthogonal' rows for every size divisible by 4?
  flow:
    - Grid of +1 and −1
    - Rows must be perfectly balanced pairs
    - Recipes cover most sizes
    - Size 668 reported found in 2026
  glossary:
    - term: Hadamard matrix
      meaning: A square grid of +1 and −1 whose rows are pairwise orthogonal.
      link: https://en.wikipedia.org/wiki/Hadamard_matrix
    - term: orthogonal
      meaning: Two rows are orthogonal if multiplying matching entries and adding gives zero.
      link: https://en.wikipedia.org/wiki/Orthogonality
    - term: Paley construction
      meaning: A recipe that builds Hadamard matrices from finite fields.
      link: https://en.wikipedia.org/wiki/Paley_construction
    - term: determinant
      meaning: A number computed from a square grid that measures how it scales volumes.
      link: https://en.wikipedia.org/wiki/Determinant
    - term: error-correcting code
      meaning: A way of adding structure to messages so errors can be detected and fixed.
      link: https://en.wikipedia.org/wiki/Error_correction_code
    - term: Epoch AI open problems
      meaning: A benchmark of unsolved research problems for AI.
      link: https://epoch.ai/frontiermath/open-problems/hadamard
  readFirst:
    - title: Hadamard matrix (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hadamard_matrix
      why: Constructions and the known orders.
    - title: "Epoch AI: Hadamard matrix of order 668"
      url: https://epoch.ai/frontiermath/open-problems/hadamard
      why: The problem statement and the unverified solution report.
    - title: "Eliahou: A 64-modular Hadamard matrix of order 668"
      url: https://ajc-new.maths.uq.edu.au/v93.p422
      why: The most recent published progress.
    - title: "Nechita: New Hadamard matrices (blog, August 2026)"
      url: https://ion.nechita.net/posts/new-hadamard-matrices/
      why: A mathematician's short account of the 2026 report and how to check a matrix yourself.
site:
  aiReviewed: true
---

A **Hadamard matrix** of order $n$ is an $n\times n$ matrix with entries $\pm 1$ whose rows are pairwise orthogonal, equivalently $HH^{\mathsf T}=nI$. Its order is $1$, $2$ or a multiple of $4$. The conjecture: a Hadamard matrix exists for every order $4k$.

Lean 4 statement in the Formal Conjectures corpus:

```lean
def IsHadamard {n : ℕ} (M : Matrix (Fin n) (Fin n) ℝ) : Prop :=
    (∀ (i j : Fin n), M i j ∈ ({1, -1} : Finset ℝ)) ∧
    |M.det| = n ^ ((n : ℝ) / 2)

theorem HadamardConjecture (k : ℕ) : ∃ M, IsHadamard (n := 4 * k) M
```

# State of the art

Constructions cover most orders: Sylvester's doubling gives all powers of 2, and Paley's constructions give orders $q+1$ and $2(q+1)$ for prime powers $q$ in the right residue classes; Williamson-type and other constructions fill many more. The previous smallest open order, 428, was settled in 2004 by Kharaghani and Tayfeh-Rezaie, leaving **668** as the smallest order with no known Hadamard matrix. A 2025 paper by Eliahou ([Australas. J. Combin. 93](https://ajc-new.maths.uq.edu.au/v93.p422)) built a matrix of order 668 satisfying $HH^{\mathsf T}\equiv 668\,I \pmod{64}$, raising the record modulus from 32 but not reaching a true Hadamard matrix. **Reported in August 2026, not yet published:** on 12 August 2026 Levent Alpöge (Anthropic) posted on X ([post](https://x.com/__alpoge__/status/2087504785952182273)) data, in the form of a puzzle with a decoder, encoding Hadamard matrices of order 668 and of every other order up to 2000 for which none was known, crediting two collaborators and Claude. There is no paper or data file. The mathematician Ion Nechita reported checking the order-668 matrix ($\pm1$ entries and $HH^{\mathsf T}=668I$) with a short script but did not publish the check ([blog, 13 August 2026](https://ion.nechita.net/posts/new-hadamard-matrices/)); Epoch AI lists the order as solved, provisionally crediting AI ([Epoch AI](https://epoch.ai/frontiermath/open-problems/hadamard)); and the Formal Conjectures corpus still labels the order-668 statement open (commit e754a78, 17 October 2026). This entry records the report as a claim under review (see the claims file). Even if confirmed, the conjecture for all orders remains open.

# Applications

Hadamard matrices underlie error-correcting codes (Reed–Muller and Hadamard codes), spread-spectrum and CDMA sequences, optimal experimental designs, and Hadamard transforms in signal processing and quantum information. Having a matrix at every order would let designers choose sizes freely, but existing constructions already cover the sizes used in practice.

# Resolution criteria

A Lean proof of `HadamardConjecture` for all $k$; the realistic partial milestones are Lean-checked Hadamard matrices at specific open orders (a matrix is its own certificate).

# Rating rationale

Difficulty 70.5: 130 years old with no general construction; each open order has needed its own method, and the reported August 2026 matrices (orders up to 2000, unpublished) would fill finitely many gaps without touching the general case. It sits just below sunflowers (71) and Lehmer (72), above the finite R(5,5) question (67). Application value 14: Hadamard matrices are used in codes, designs and signal processing, but the orders used in practice are already known, so a full proof changes little; above the other combinatorics problems (3–12.5) and below RH (30). Leverage 28: equivalent to existence statements for Hadamard designs and related codes.

# Work mix rationale

Existence at each remaining order is settled by clever constructions plus search; a general proof for every multiple of 4 needs a new idea.

# Verification

Statement: `Hadamard.HadamardConjecture` in [formal-conjectures](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/Hadamard.lean) (quoted above). The same file states the first open order as its own open declaration, `HadamardConjecture.variants.«167» : ∃ M, IsHadamard (n := 4 * 167) M`, and the solved range `HadamardConjecture.variants.first_cases` for $k \le 166$. It also defines the equivalent `IsHadamard'` via $M^{\mathsf T}M=nI$; the equivalence `isHadamard_equiv_isHadamard'` is proved in one direction only (the other is `sorry`), so check which form a proof uses. Mathlib supplies `Matrix`, `Matrix.det` and real powers, so no new definitions are needed. Verifying a specific order is a finite computation: for an explicit $\pm1$ matrix of order 668, check $MM^{\mathsf T}=668I$, about $668^3 \approx 3\times 10^8$ integer operations, heavy for plain `decide` but feasible with certified computation in Lean; the corpus's own `isHadamard_H12` shows the pattern at order 12. A full proof must cover every $k$. Judge with Comparator; for specific orders also publish the matrix so others can re-check it independently.

# Plain explanation

Take a square grid and fill each cell with plus one or minus one. Choose the entries so that any two different rows agree in exactly half of their positions and disagree in the other half. Such a grid is called a Hadamard matrix, and its rows behave like perfectly distinct signals. They are used to design error-correcting codes, to build test plans for experiments, and in signal processing.

Such a grid can only exist if its side length is 1, 2, or a multiple of 4. The Hadamard conjecture says that every multiple of 4 works. Mathematicians have built them for many sizes with clever recipes, such as doubling a smaller grid. Whole families of sizes are covered, but each missing size has needed its own idea.

Until 2026, the smallest size without a known example was 668. In August 2026 a researcher at Anthropic posted grids of that size and of the other missing sizes below 2000, found with two collaborators and the Claude AI. There is no write-up yet and no published independent check, so the report is still being reviewed. Even if true, the conjecture for all sizes is open. A grid is a certificate that the computer can check.

# Student explanation

**Definition.** A Hadamard matrix of order $n$ is an $n\times n$ matrix $H$ with entries $\pm1$ and $HH^{\mathsf T}=nI$. Equivalently $|\det H|=n^{n/2}$ (Hadamard's inequality is attained). For $n>2$, $4\mid n$.

**Constructions.** _Sylvester:_ $H_{2n}=\begin{pmatrix}H&H\\H&-H\end{pmatrix}$ gives orders $2^k$. _Paley:_ orders $q+1$ for prime powers $q\equiv3\pmod4$, and $2(q+1)$ for $q\equiv1\pmod 4$. _Williamson and others_ give more orders. Order $428$ was resolved in 2004 (Kharaghani and Tayfeh-Rezaie), leaving $668$ as the smallest open order.

**Near-misses.** Eliahou (2025) built a $\pm1$ matrix $H$ of order 668 with $HH^{\mathsf T}\equiv668I \pmod{64}$, raising the record modulus from 32.

**A 2026 report under review.** On 12 August 2026 Levent Alpöge of Anthropic posted on X, crediting two collaborators and Claude, data encoding Hadamard matrices of order 668 and of every other order below 2000 for which none was known. There is no paper yet. Because a matrix is its own certificate, checking one is easy, and one mathematician reported checking the order-668 matrix with a short script; but no published, reproducible check was found, and the Formal Conjectures corpus still lists order 668 as open. See the claims file.

**Check.** An explicit matrix of order $n$ is a certificate: verify $HH^{\mathsf T}=nI$, about $n^3$ integer operations ($\approx3\times10^8$ for $n=668$); in Lean this needs a certified computation. The all-orders conjecture is the Lean statement `HadamardConjecture`, still open.

**Why hard.** No general construction exists; each gap needs ad hoc search in structured families.

**Smallest cases.** Order 1: the matrix $(1)$. Order 2: $\begin{pmatrix}1&1\\1&-1\end{pmatrix}$. Order 4: rows $(1,1,1,1)$, $(1,-1,1,-1)$, $(1,1,-1,-1)$, $(1,-1,-1,1)$. Each row has dot product 0 with every other row. The next orders are 8, 12, 16, 20 and so on; some orders such as 92 required more elaborate methods than doubling or Paley's recipes.

**Why order 668 mattered.** Its size is $668=4\cdot167$, and it does not fit the standard doubling and Paley recipes, so a matrix there needs a different structure or a search. The record modulus result of 2025 shows how close structured searches can get without achieving exact orthogonality.
