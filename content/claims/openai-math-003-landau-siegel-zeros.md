---
type: claim
slug: openai-math-003-landau-siegel-zeros
title: "No Landau–Siegel zeros: (1 − β) log q ≥ c for every real zero of every real Dirichlet L-function"
problem: riemann-hypothesis
kind: PROOF
claimedBy: "OpenAI: internal model (openai/math family 003; AI-generated, not peer-reviewed)"
claimedAt: 2026-10-06
formal: true
sources:
  - title: "OpenAI (AI-generated, not peer-reviewed): Uniform exclusion of Landau–Siegel zeros (openai/math family 003, PDF at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf
  - title: README and BibTeX for that manuscript (at 1581d4c)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/README.md
  - title: OpenAI's Lean scope for family 003 (unreviewed)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/003.md
  - title: OpenAI's Comparator statement for the uniform real-zero gap (unreviewed, at 1581d4c)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/ComparatorChallenges/SiegelZeros.lean
  - title: "W. D. Banks: On the OpenAI proof that Landau–Siegel zeros do not exist (arXiv:2610.15483, 11 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.15483
  - title: "B. Kerr: A simpler proof that there are no Landau–Siegel zeros (arXiv:2610.21099, 15 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.21099
  - title: "I. Kimura: Imaginary quadratic fields of class number at most 2000 (arXiv:2610.21511, 15 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.21511
  - title: "B. Green: On Landau–Siegel zeros (Hexagon 2610.00311 v2, October 2026, preprint)"
    url: https://hexagonmath.org/2610.00311v2
  - title: "T. Tao: A sketch of the proof of non-existence of Siegel zeroes (blog post, 19 Oct 2026)"
    url: https://terrytao.wordpress.com/2026/10/19/a-sketch-of-the-proof-of-non-existence-of-siegel-zeroes/
  - title: "Community revision (mathcommunity/oai-math-revised, PR #3, merged 20 Oct 2026): adds Tao's sketch and the Barreto and Pescador variants"
    url: https://github.com/mathcommunity/oai-math-revised/pull/3
  - title: The revised manuscript's 'Subsequent expositions' remark at 28a6444, citing K. Barreto, An elementary proof of the non-existence of Landau–Siegel zeros (note, 2026), and J. Pescador (private communication)
    url: https://github.com/mathcommunity/oai-math-revised/blob/28a64449d2b2f3e1f9ffca9a75db2c169f3c19bd/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/build/paper.tex#L168-L194
  - title: "A. Han: Lean 4 formalization of Uniform exclusion of Landau–Siegel zeros, with build and axiom audit (third-party, at 919e60f)"
    url: https://github.com/AolinHAN/landau-siegel-lean/tree/919e60f4630399ba27e1f3c3d4a39d754842cf9c
checks:
  - title: Independent proof of the same statement
    method: CROSS_CHECK
    note: "Kerr proves it by a different route in the same biquadratic field: a pigeonhole construction of a vanishing polynomial, contradicted by Masser's zero estimate, in place of the interpolation lemma and determinant analysis. Green gives a variant that works in Q(√d) alone with an explicit Gram determinant, and Tao's blog post sketches it. All are unrefereed preprints."
    sourceUrl: https://arxiv.org/abs/2610.21099
  - title: Detailed reading of OpenAI's argument, with explicit constants
    method: REVIEW
    note: "Banks rewrites OpenAI's argument as a direct proof with explicit constants: q₀ = 10¹⁰ and δ₀ = 3.0×10⁻³, extended to every q ≥ 3 by the computation of Lu, Zaman and Zhao. Kimura independently makes it explicit with δ₀ = 5.8×10⁻⁴ for q ≥ 3. Both are unrefereed."
    sourceUrl: https://arxiv.org/abs/2610.15483
  - title: Rebuild the third-party Lean formalization and confirm its axiom audit
    method: FORMAL
    note: "Han's formalization (independent of OpenAI's) states the main theorem with Mathlib's own Dirichlet L-function and reports, in verification/status.json, a full build and an audit of 406 theorems with only propext, Classical.choice and Quot.sound, and no sorry. That is the author's own report: rebuild at 919e60f, rerun the audit, and check the statement in Siegel/Main.lean against the paper."
    sourceUrl: https://github.com/AolinHAN/landau-siegel-lean/blob/919e60f4630399ba27e1f3c3d4a39d754842cf9c/verification/status.json
  - title: Rebuild openai/math at 1581d4c and run Comparator on SiegelZeros.lean; audit axioms
    method: FORMAL
    note: OpenAI's unreviewed formalization; DARC audit open. Build `lean/` at 1581d4c, run Comparator on `ComparatorChallenges/SiegelZeros.lean` with every definition checked, print the axioms, and scan the import closure for `sorry` and `native_decide`. OpenAI's scope note says no explicit value of c is given.
    sourceUrl: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/ComparatorChallenges/SiegelZeros.lean
  - title: "Statement fidelity: the Lean theorem states the claimed result"
    method: REVIEW
    note: Check that the formal statements (OpenAI's and Han's) quantify c before the conductor, character and zero, cover primitive nonprincipal real characters of both parities and every q ≥ 3, and use the genuine Dirichlet L-function.
    sourceUrl: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/003.md
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: neither the manuscript nor the follow-up preprints has been refereed. In the comments on Tao's post, Green says a communal write-up with all of these ideas is planned."
    sourceUrl: https://terrytao.wordpress.com/2026/10/19/a-sketch-of-the-proof-of-non-existence-of-siegel-zeroes/
site:
  status: PARTIALLY_VERIFIED
  statusNote: "AI-generated by an internal OpenAI model; source pinned here at openai/math@1581d4c. Unrefereed, and so is all the follow-up below. Since the release, mathematicians have reworked and reproved it in public: Banks (arXiv:2610.15483, 11 Oct) gives a detailed direct proof with explicit constants, (1 − β) log q ≥ 3.0×10⁻³ for every q ≥ 3 when combined with the computation of Lu, Zaman and Zhao; Kerr (arXiv:2610.21099, 15 Oct) gives a simpler proof by a pigeonhole construction and a zero estimate of Masser; Green (Hexagon 2610.00311, October 2026) gives a variant in the quadratic field alone; Kimura (arXiv:2610.21511, 15 Oct) makes the argument explicit and uses it to list all imaginary quadratic fields of class number at most 2000; and Tao (19 Oct) sketches Green's version. Barreto and Pescador have sharper variants, cited by Tao and in the community revision. A third-party Lean 4 formalization by Han reports a full build and an axiom audit with only the standard axioms (10 Oct); DARC has not rerun it. No published source reports an error. Partially verified, as for other claims on this board with an independent unrefereed proof; not VERIFIED until refereed or until a DARC expert decides it. As of 22 Oct 2026."
  checks:
    - title: Independent proof of the same statement
      status: PASSED
    - title: Detailed reading of OpenAI's argument, with explicit constants
      status: PASSED
    - title: Rebuild the third-party Lean formalization and confirm its axiom audit
      status: OPEN
    - title: Rebuild openai/math at 1581d4c and run Comparator on SiegelZeros.lean; audit axioms
      status: OPEN
    - title: "Statement fidelity: the Lean theorem states the claimed result"
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The nine-page manuscript 'Uniform exclusion of Landau–Siegel zeros' (dated 1 Oct 2026, released 6 Oct with the quasi-Riemann hypothesis papers) claims an absolute constant c > 0 such that, for every primitive real Dirichlet character χ of conductor q ≥ 3, every real zero β of L(s, χ) satisfies (1 − β) log q ≥ c. That is, there are no Landau–Siegel (exceptional) zeros: the classical zero-free region c/log q holds for real characters with no exception, which the Generalized Riemann Hypothesis implies but which was open unconditionally. The argument is an interpolation-determinant argument in the biquadratic field Q(√d, √2): a real zero close to 1 forces χ(p) = −1 for most primes p, and Frobenius congruences then make a nonzero determinant divisible by high prime powers. With an explicit c, consequences that rest on Siegel's ineffective theorem become effective, such as complete lists of imaginary quadratic fields of a given class number. It is a separate claim from `quasi-rh-zero-free-seven-eighths-openai`: either could stand without the other. It does not exclude real zeros with 1 − β ≥ c/log q, so it is not GRH.
