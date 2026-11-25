---
type: claim
slug: omega-equals-nine-quarters-openai-2026
title: Matrix multiplication exponent ω = 9/4 over every field (OpenAI, AI-generated disproof claim of ω = 2, Lean formalization)
problem: matrix-multiplication-exponent
kind: DISPROOF
claimedBy: "OpenAI: internal model (openai/math family 379; AI-generated, not peer-reviewed)"
claimedAt: 2026-11-24
formal: true
sources:
  - title: "OpenAI (AI-generated, not peer-reviewed): The matrix multiplication exponent is nine fourths (24 Nov 2026, 111-page PDF at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
  - title: README and BibTeX for The matrix multiplication exponent is nine fourths (at 3344da5999)
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/README.md
  - title: "OpenAI (AI-generated, not peer-reviewed): Euclidean geometry in the asymptotic spectrum of tensors (24 Nov 2026, 86-page PDF at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/Euclidean-geometry-in-the-asymptotic-spectrum-of-tensors-November-24-2026/paper.pdf
  - title: "OpenAI: Lean formalization scope for matrix multiplication (lean/docs/107.md at 3344da5999, unreviewed)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/docs/107.md
  - title: "OpenAI: Lean formalization scope for family 379 (lean/docs/379.md at 3344da5999, unreviewed)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/docs/379.md
  - title: "OpenAI: Comparator challenge MatrixExponent.lean (square, dual and rectangular exponents, at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/ComparatorChallenges/MatrixExponent.lean
  - title: "Amanov, van den Berg, Zuiddam: Multiplying matrices via polynomials: exposition and barriers (arXiv:2610.30054, 21 Oct 2026, unrefereed)"
    url: https://arxiv.org/abs/2610.30054
  - title: "Pass: Matrix Multiplication from Polynomial Packings: A Constructive and Elementary Proof of ω ≤ 9/4 (arXiv:2610.28627, 20 Oct 2026, unrefereed)"
    url: https://arxiv.org/abs/2610.28627
  - title: "Doğan, Lysikov, Sakabe, Walter: Tensor value and the 9/4 bound for matrix multiplication (arXiv:2611.09716, 6 Nov 2026, unrefereed)"
    url: https://arxiv.org/abs/2611.09716
  - title: "Sun: Tensor Degenerations for Matrix Multiplication (arXiv:2610.13971v1, unrefereed; conflicting ω = 2 claim noted on p. 10)"
    url: https://arxiv.org/abs/2610.13971
checks:
  - title: Rebuild openai/math at 3344da5999 and run Comparator with axiom and sorry audit
    method: FORMAL
    note: "OpenAI's unreviewed formalization (`lean/formalization.yaml` marks `review.status: unchecked`); the repository has no Lean CI workflow, and `MatrixExponent.json` sets `enable_nanoda: false`. Rebuild with Lean `v4.34.1`, run Comparator (and an independent kernel such as `nanoda`) on `OAI.LinearAlgebra.SpectralBooks.square_exponent`, `dual_exponent` and `rectangular_exponent`, print axioms, and scan the import closure for `sorry` and `native_decide`."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/ComparatorChallenges/MatrixExponent.lean
  - title: Audit Lean statement fidelity and reconcile discrepancies with the manuscript
    method: FORMAL
    note: "Check `formalOmega`, `formalAlpha`, `FormalCorrect` and `MatrixAlgorithm` in `MatrixExponent.lean` (division-free straight-line programs counting additions, subtractions and multiplications and computing formal polynomial identities) against the standard tensor-rank / arithmetic-circuit definition of $\\omega_F$. Reconcile two documented differences between the manuscript and Lean: (1) `lean/docs/379.md` explicitly states that the paper's finite-$n$ lower bound of $\\lceil n^{9/4}/2 \\rceil$ nonscalar multiplication or division gates for each $n\\ge 2$ remains unformalized; (2) conversely, `MatrixExponent.lean` asserts exact `dual_exponent` ($\\alpha(F)=1/2$) and an exact formula for `rectangular_exponent`, whereas Corollary 1.3 of the 111-page manuscript states only $1/2 \\le \\alpha_F \\le 2/3$ and a lower bound $\\max\\{ab,bc,ca,(abc)^{3/4}\\}$ on rectangular tensor rank."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/docs/379.md
  - title: Expert review of the lower-bound argument via sphere tensors and list distinctness
    method: REVIEW
    note: "Specialists in algebraic complexity and tensors should audit the 111-page manuscript together with its companion dependencies (*Euclidean geometry in the asymptotic spectrum of tensors* and *Circuit lower bounds for Hamiltonian cycle and the permanent*): Part I (tripod exclusion under $\\omega_k < 9/4$ and sphere-tensor pricing), Part II (subquadratic stable sorting and batched table lookup), Part III (concentrating arity via fermionic sphere tensors), Part IV (tensor-power compression, Theorem 2.1), the uniform batched list-distinctness volume lower bound (Theorem 2.2), bilinearization with division gates (Lemma 2.4), and finite-field specialization (Lemma 2.5)."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
  - title: Cross-check finite-n rank consequences, Strassen's tight-tensor conjecture and conflicting claims
    method: CROSS_CHECK
    note: Corollary 1.2 claims geometric border rank $\ge n^{9/4}$ and asymptotic rank $n^{9/4}$ for $T_n$ at every $n \ge 2$ (at least $\lceil n^{9/4} \rceil$ products in exact bilinear algorithms and $\lceil n^{9/4}/2 \rceil$ nonscalar multiplication or division gates in formal circuits), which would also refute Strassen's conjecture on tight three-tensors (p. 10). Check compatibility with all known small-format rank and border-rank bounds and examine the direct conflict noted on p. 10 at $n=2^8$ with Sun's unrefereed `arXiv:2610.13971v1` ($2^{17}$ vs $2^{18}$). Note that the independent October–November 2026 preprints (Pass, Shpilka, Amanov–van den Berg–Zuiddam, Doğan–Lysikov–Sakabe–Walter, Lü, Li, Uznański) address only the $\omega \le 9/4$ upper bound and do not check this lower bound.
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: AI-generated by an internal OpenAI model in `openai/math`, with no journal submission or independent expert assessment of the lower bound."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/README.md
site:
  status: UNVERIFIED
---

On 24 November 2026 OpenAI released the 111-page AI-generated manuscript _The matrix multiplication exponent is nine fourths_ in `openai/math` (family 379, PR #6 merged `2026-11-25 00:18 UTC`, pinned at `3344da5999`), claiming that $\omega_F = 9/4$ over every field $F$—which would refute $\omega = 2$ and settle the square matrix multiplication exponent. Building on the $\omega_F \le 9/4$ upper bound over every field (claimed in OpenAI's October 2026 preprint over $\mathbb{C}$ and extended to arbitrary fields in unrefereed follow-up preprints, citing Amanov, van den Berg and Zuiddam `arXiv:2610.30054` and Lü `arXiv:2610.18914`), Theorem 1.1 and Corollary 1.2 claim the matching lower bound: for every $n \ge 2$ and every field $F$, the geometric border rank of the $n \times n$ matrix multiplication tensor $T_n$ is at least $n^{9/4}$, its asymptotic rank over $F$ equals $n^{9/4}$ (which would also refute Strassen's conjecture on tight tensors), an exact bilinear algorithm uses at least $\lceil n^{9/4} \rceil$ products, and every formal arithmetic circuit (allowing additions, subtractions, multiplications and divisions by nonzero rational functions) requires at least $\lceil n^{9/4}/2 \rceil$ nonscalar multiplication or division gates. The argument specializes a hypothetical algorithm with $\omega_F < 9/4$ to a finite field, uses sphere-tensor prices and fermionic contractions to compress trivalent tensor networks, and aims to derive a contradiction with a batched list-distinctness volume lower bound drawn from companion family 379 manuscripts. OpenAI's unreviewed Lean formalization (`ComparatorChallenges/MatrixExponent.lean`, Lean `v4.34.1`, `review.status: unchecked`, no Lean CI) states `square_exponent : formalOmega F 1 1 1 = 9/4` over every field in a division-free formal-polynomial model (plus `dual_exponent : formalAlpha F = 1/2` and an exact `rectangular_exponent` formula, going beyond Corollary 1.3's $1/2 \le \alpha_F \le 2/3$), while `lean/docs/379.md` notes that the finite-$n$ lower bound of $\lceil n^{9/4}/2 \rceil$ nonscalar gates remains unformalized. Unrefereed and not peer-reviewed.
