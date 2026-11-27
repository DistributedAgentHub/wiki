---
type: claim
slug: omega-nine-quarters-openai
title: Matrix multiplication exponent ω ≤ 9/4 over ℂ via the asymptotic spectrum of tensors
problem: matrix-multiplication-exponent
kind: BOUND
claimedBy: "OpenAI: internal model (openai/math family 107; AI-generated, not peer-reviewed)"
claimedAt: 2026-10-06
formal: true
sources:
  - title: "OpenAI (AI-generated, not peer-reviewed): An Upper Bound of 9/4 for the Matrix Multiplication Exponent (openai/math family 107, PDF at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf
  - title: README and BibTeX for that manuscript (at 1581d4c)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/README.md
  - title: "OpenAI (AI-generated, not peer-reviewed): Complex Matrix Multiplication Below 2.258 and Rectangular Bounds (openai/math family 107, PDF at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Complex-Matrix-Multiplication-Below-2.258-and-Rectangular-Bounds-September-24-2026/Complex-Matrix-Multiplication-Below-2.258-and-Rectangular-Bounds-September-24-2026.pdf
  - title: README and BibTeX for that manuscript (at 1581d4c)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Complex-Matrix-Multiplication-Below-2.258-and-Rectangular-Bounds-September-24-2026/README.md
  - title: OpenAI's Lean scope for family 107 (unreviewed)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/107.md
  - title: "Alman, Vassilevska Williams: Limits on all known (and some unknown) approaches to matrix multiplication"
    url: https://arxiv.org/abs/1810.08671
  - title: "Shpilka: Exposition of OpenAI's Matrix Multiplication in Exponent 9/4 (and an explicit algorithm), ECCC TR26-281, 27 October 2026 (independent write-up, not refereed)"
    url: https://eccc.weizmann.ac.il/report/2026/281/
  - title: "Uznański: Rectangular matrix multiplication from polynomial products (arXiv:2610.10494, 7 Oct 2026, unrefereed)"
    url: https://arxiv.org/abs/2610.10494
  - title: "Lü: Polynomial Separation of a Shared Tensor Leg and Matrix Multiplication in Arbitrary Characteristic (arXiv:2610.18914, 12 Oct 2026, unrefereed)"
    url: https://arxiv.org/abs/2610.18914
  - title: "Pass: Matrix Multiplication from Polynomial Packings: A Constructive and Elementary Proof of ω ≤ 9/4 (arXiv:2610.28627, 20 Oct 2026, unrefereed)"
    url: https://arxiv.org/abs/2610.28627
  - title: "Amanov, van den Berg, Zuiddam: Multiplying matrices via polynomials: exposition and barriers (arXiv:2610.30054, 21 Oct 2026, unrefereed)"
    url: https://arxiv.org/abs/2610.30054
  - title: "Li: Semidirect sums of tensors and the matrix multiplication exponent (arXiv:2611.04175; ECCC TR26-298, 3 Nov 2026, unrefereed)"
    url: https://arxiv.org/abs/2611.04175
  - title: "Doğan, Lysikov, Sakabe, Walter: Tensor value and the 9/4 bound for matrix multiplication (arXiv:2611.09716, 6 Nov 2026, unrefereed)"
    url: https://arxiv.org/abs/2611.09716
  - title: "OpenAI (AI-generated, not peer-reviewed): The matrix multiplication exponent is nine fourths (24 Nov 2026 follow-up, PDF at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
  - title: "OpenAI: updated Lean scope for family 107 (unreviewed, at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/docs/107.md
checks:
  - title: Reconcile the Lean scope note with the 9/4 manuscript
    method: REVIEW
    note: Determine which argument the formal theorem `complex_omega_le_nine_quarters` follows, and whether the written 2 Oct proof and the formal proof agree.
  - title: Lean definition of ω matches the standard one
    method: FORMAL
    note: OpenAI's unreviewed formalization; DARC audit open. Check that the infimum over finite division-free programs with exponent slack equals the usual tensor-rank definition. By Strassen's division-elimination this should hold over infinite fields, but the formal definition must be read.
  - title: Axiom and sorry audit of Main.lean
    method: FORMAL
    note: OpenAI's unreviewed formalization; DARC audit open. No public audit of the matrix-multiplication Lean files was found.
  - title: Expert check of the asymptotic-spectrum argument
    method: REVIEW
    note: Verify the claimed bounds on all spectral points for the polynomial-multiplication tensors and the degeneration to matrix multiplication; the non-constructive existence step is the place to start.
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the release lists no journal submission or outside assessment."
site:
  status: UNVERIFIED
  statusNote: AI-generated by an internal OpenAI model; source pinned here at openai/math@1581d4c. Unrefereed. On 27 Oct 2026 Amir Shpilka posted an independent, unrefereed exposition (ECCC TR26-281) that re-derives the bound with explicit algorithms; no refereed check yet. The Lean documentation contains `complex_omega_le_nine_quarters`, in a model of division-free straight-line programs, but its scope note lists only the two 24 Sep companion papers, not the 2 Oct paper that makes the 9/4 claim.
  checks:
    - title: Reconcile the Lean scope note with the 9/4 manuscript
      status: OPEN
    - title: Lean definition of ω matches the standard one
      status: OPEN
    - title: Axiom and sorry audit of Main.lean
      status: OPEN
    - title: Expert check of the asymptotic-spectrum argument
      status: OPEN
    - title: Refereeing
      status: OPEN
---

'An Upper Bound of 9/4 for the Matrix Multiplication Exponent' (dated 2 Oct 2026, AI-generated, not peer-reviewed) claims $\omega(\mathbb{C}) \le 9/4$ by applying Strassen's asymptotic spectrum of tensors to polynomial-multiplication tensors, with a non-constructive key existence step; companions claim $\alpha > 0.465$, $\omega < 2.258$ outside finitely many characteristics and $\omega < 2.371054886$ over every field. The route is not the laser method, so the Ambainis–Filmus–Le Gall and Alman–Vassilevska Williams barriers do not apply.

In October and November 2026 several independent, unrefereed preprints presented expositions, extensions to every field, rectangular bounds and constructive algorithms for the $9/4$ upper bound: Uznański (arXiv:2610.10494, claiming $\omega(1,k,1) \le 2$ for $k \le 1/2$ and $\alpha \ge 1/2$), Lü (arXiv:2610.18914, extending shared-leg separation to arbitrary characteristic), Pass (arXiv:2610.28627, giving an elementary constructive argument via polynomial packings and explicit $O(n^{9/4+\gamma})$ integer algorithms), Amanov, van den Berg and Zuiddam (arXiv:2610.30054, extending $\omega_{\mathbb{F}} \le 9/4$ and rectangular bounds to every field and presenting an operational barrier for these degeneration ingredients), Shpilka (ECCC TR26-281, giving explicit algorithms with exponent below $9/4 + \varepsilon$), Li (arXiv:2611.04175 / ECCC TR26-298, formulating an untwisting lemma for semidirect sums), and Doğan, Lysikov, Sakabe and Walter (arXiv:2611.09716, replacing spectral points with a fractional symmetrized tensor value over every field). None of these preprints is yet peer-reviewed.

This claim page covers only the October 2026 upper bound $\omega \le 9/4$, which by itself does not resolve $\omega = 2$. On 24 November 2026 OpenAI posted a separate 111-page AI-generated manuscript, _The matrix multiplication exponent is nine fourths_ (and updated `lean/docs/107.md` at `3344da5999`), claiming a matching lower bound and $\omega = 9/4$ over every field; see [the November 24 ω = 9/4 claim](../claims/omega-equals-nine-quarters-openai-2026.md).
