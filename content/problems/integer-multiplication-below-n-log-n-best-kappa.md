---
type: problem
slug: integer-multiplication-below-n-log-n-best-kappa
title: "Integer multiplication and the exact DFT below n log n: how large can the saving κ be?"
entry: computational-complexity
status: OPEN
origin: Schönhage and Strassen's n log n conjecture (1971); reopened by openai/math families 109 and 130 (October 2026)
ratings:
  difficulty: 74
  applicationValue: 12
  leverage: 45
workMix:
  theory: 55
  engineering: 35
  compute: 10
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "OpenAI (AI-generated, not peer-reviewed): Integer multiplication below n log n (openai/math family 109, PDF at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf
  - title: "OpenAI (AI-generated, not peer-reviewed): An explicit power saving for the exact discrete Fourier transform (openai/math family 130, PDF at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/An-explicit-power-saving-for-the-exact-discrete-Fourier-transform-September-25-2026/main.pdf
  - title: OpenAI's Lean scope for family 130 (unreviewed)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/130.md
  - title: "CrocSwap/integer-mult-bounds: selected conditional record (selected-result.json at 1a3ced6, PR #5413)"
    url: https://github.com/CrocSwap/integer-mult-bounds/blob/1a3ced60b2f7a46bc70280a04f2eeb8ca027c700/certificates/selected-result.json
  - title: platypii/integer-mult-bounds-lean at 548d658 (complete Lean 4 proof)
    url: https://github.com/platypii/integer-mult-bounds-lean/tree/548d658d13bb007297098dd5f6e42f3cafbcdd15
  - title: canghaimeng/exact-dft-lean at 1d2cb86 (Lean, δ = 63/50000)
    url: https://github.com/canghaimeng/exact-dft-lean/tree/1d2cb865c2995265195e3482c85bbdd07d542490
  - title: eumemic/exact-dft-bounds at 6f87d1a (conditional exact DFT)
    url: https://github.com/eumemic/exact-dft-bounds/tree/6f87d1a0c9ae462cdcb2034a1361c87623221e66
  - title: FLINT fft_small at 1077e8d
    url: https://github.com/flintlib/flint/tree/1077e8dd3a51554ed2c78e675571c1c3749ddf09/src/fft_small
  - title: "Archive of Formal Proofs: Schönhage-Strassen Multiplication"
    url: https://www.isa-afp.org/entries/Schoenhage_Strassen.html
  - title: "Harvey, van der Hoeven: Integer multiplication in time O(n log n) (Annals of Mathematics 193(2), 2021)"
    url: https://doi.org/10.4007/annals.2021.193.2.4
  - title: "Harvey, van der Hoeven: Integer multiplication in time O(n log n) (preprint, HAL hal-02070778, 2019)"
    url: https://hal.science/hal-02070778
  - title: "Schönhage, Strassen: Schnelle Multiplikation großer Zahlen (Computing 7, 1971)"
    url: https://doi.org/10.1007/BF02242355
  - title: "Fürer: Faster integer multiplication (SIAM J. Computing, 2009)"
    url: https://doi.org/10.1137/070711761
  - title: "Afshani, Freksen, Kamma, Larsen: Lower bounds for multiplication via network coding (arXiv:1902.10935)"
    url: https://arxiv.org/abs/1902.10935
  - title: "Morgenstern: Note on a lower bound on the linear complexity of the fast Fourier transform (J. ACM, 1973)"
    url: https://doi.org/10.1145/321752.321761
links:
  - to: matrix-multiplication-exponent
    kind: RELATED
    note: Both ask for the exact exponent of a basic bilinear operation, and both now carry unrefereed October 2026 openai/math claims whose community follow-ups are being checked in Lean.
timeline:
  - date: 2019-03-18
    title: O(n log n) reached
    body: Harvey and van der Hoeven's preprint; published in Annals of Mathematics in 2021.
    source: https://hal.science/hal-02070778
  - date: 2026-10-06
    title: Claims below n log n
    body: openai/math families 109 (κ = 2^-182) and 130 (δ = 10^-13), AI-generated and unrefereed.
    source: https://github.com/openai/math/tree/1581d4cbdd69a0faf34b2089614fe2a814316a6a
  - date: 2026-10-15
    title: Complete Lean proof of multiplication below n log n
    body: "platypii/integer-mult-bounds-lean merges a full Mathlib proof (PR #3); the proved κ has since risen to 4222422970/2^46."
    source: https://github.com/platypii/integer-mult-bounds-lean/pull/3
  - date: 2026-10-17
    title: Lean exact DFT with δ = 63/50000
    body: canghaimeng/exact-dft-lean proves an all-length exact DFT bound against OpenAI's definitions, CI passing.
    source: https://github.com/canghaimeng/exact-dft-lean/tree/1d2cb865c2995265195e3482c85bbdd07d542490
  - date: 2026-10-22
    title: Conditional κ = 0.00302015
    body: "CrocSwap/integer-mult-bounds selects PR #4470, conditional on named hypotheses."
    source: https://github.com/CrocSwap/integer-mult-bounds/pull/4470
  - date: 2026-10-24
    title: Conditional κ ≈ 0.003027288
    body: "CrocSwap/integer-mult-bounds selects PR #5413: κ = 605457647/200000000000 > 2^-9, with the same five conditional framework assumptions; not a Lean proof."
    source: https://github.com/CrocSwap/integer-mult-bounds/pull/5413
raw:
  body: "Let $\\kappa^*$ be the supremum of all $\\kappa$ such that one fixed multitape Turing machine (fixed finite alphabet, fixed number of one-dimensional tapes) multiplies every pair of $n$-bit integers in worst-case time $O\\bigl(n(\\log n)^{1-\\kappa}\\bigr)$. Since the output must be written, $\\kappa^*\\le 1$. Schönhage and Strassen conjectured in 1971 that $n\\log n$ is optimal, that is $\\kappa^* = 0$.\n\nLet $\\delta^*$ be the same supremum for the **exact discrete Fourier transform**: savings $\\delta$ such that one fixed program computes the length-$n$ DFT exactly, at every length, in $O\\bigl(n(\\log n)^{1-\\delta}\\bigr)$ operations, in the exact complex-arithmetic model of openai/math family 130 (exact complex operations at unit cost, a supplied root of unity, polynomially bounded integers and indices, all preparation and data movement charged).\n\n**Question.** Determine $\\kappa^*$ and $\\delta^*$, or narrow them: raise the best unconditional, checked lower bounds, and find any argument that some value below 1 cannot be beaten. No superlinear lower bound for off-line multiplication on multitape machines is known.\n\n## How to contribute\n\nWork happens in the public repositories listed under *Latest progress*; build on them and credit the repository and pull request you use. Useful contributions now: an independent rebuild and axiom audit of a Lean proof at a pinned commit; an audit of whether a Lean statement says what the paper says; a proof, ideally in Lean, of one of the hypotheses that the conditional records still assume; a larger saving proved against the pinned statement files (see *Resolution*); and reproducible benchmarks of practical multipliers, labelled as context rather than as evidence about asymptotics. Post results, audits and failed attempts on this page so others do not repeat them."
  stateOfArt: "**Before 2026.** Schönhage–Strassen (1971) gave $O(n\\log n\\log\\log n)$ on multitape machines; Fürer (2007) and later refinements shrank the $\\log\\log n$ factor; Harvey and van der Hoeven (preprint March 2019, *Annals of Mathematics* 2021) proved $O(n\\log n)$, using Gaussian resampling to replace one-dimensional transforms by multidimensional transforms of power-of-two side lengths. Lower bounds: Paterson, Fischer and Meyer (1974) proved $\\Omega(n\\log n)$ for *on-line* multiplication on multitape machines, so a faster algorithm must be off-line; Afshani, Freksen, Kamma and Larsen (2019) proved $\\Omega(n\\log n)$ for Boolean circuits assuming the network coding conjecture, which a sub-$n\\log n$ Turing machine does not contradict because simulating a machine by circuits costs an extra logarithmic factor. For the DFT, Morgenstern (1973) proved $\\Omega(n\\log n)$ for linear circuits with bounded coefficients.\n\n**The October 2026 claims.** The openai/math release (6 Oct 2026) contains two AI-generated, unrefereed results: family 109, [*Integer multiplication below n log n*](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf), claims $\\kappa = 2^{-182}$ on a multitape machine; family 130, [*An explicit power saving for the exact DFT*](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/An-explicit-power-saving-for-the-exact-discrete-Fourier-transform-September-25-2026/main.pdf) and [*Finite tensor savings and exact Fourier circuits*](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Finite-tensor-savings-and-exact-Fourier-circuits-September-25-2026/main.pdf), claims $\\delta = 10^{-13}$ and exact nonuniform circuits of size $o(n\\log n)$ with unbounded coefficients, with an unreviewed [Lean formalization](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/130.md). Both are on the Verification board. The constants are astronomically large and no practical speedup is claimed.\n\n## Latest progress (as of 24 Oct 2026)\n\n**Integer multiplication: the conditional record.** [CrocSwap/integer-mult-bounds](https://github.com/CrocSwap/integer-mult-bounds/tree/1a3ced60b2f7a46bc70280a04f2eeb8ca027c700) (commit 1a3ced6) is the community hub, with thousands of pull requests, a PR ledger, a contribution map and a public coordination board; most work is openly AI-agent-assisted. Over many merged steps its record moved from OpenAI's $2^{-182}$ to $\\kappa \\approx 0.00167$ (PR #1094), then [0.0023](https://github.com/CrocSwap/integer-mult-bounds/pull/4359) (PR #4359, merged 21 Oct), then 0.00268647, then [$\\kappa = 60403/20000000 = 0.00302015$](https://github.com/CrocSwap/integer-mult-bounds/pull/4470) (PR #4470, merged 22 Oct) and $0.0030217758$ (PR #4610, selected 23 Oct), and now [$\\kappa = 605457647/200000000000 \\approx 0.003027288 > 2^{-9}$](https://github.com/CrocSwap/integer-mult-bounds/blob/1a3ced60b2f7a46bc70280a04f2eeb8ca027c700/certificates/selected-result.json) (Clear1nsight's [PR #5413](https://github.com/CrocSwap/integer-mult-bounds/pull/5413), merged and selected 24 Oct), with a bounded replay script (`make frontier5413-verify`). The repository says this record is **conditional** on the original #109 framework and keeps exactly the same five conditional framework assumptions as the record before it, and that it is not a complete Lean proof or an independent human verification of the multiplication theorem.\n\n**Integer multiplication: the complete Lean proof.** [platypii/integer-mult-bounds-lean](https://github.com/platypii/integer-mult-bounds-lean/tree/548d658d13bb007297098dd5f6e42f3cafbcdd15) (commit 548d658) proves in Lean 4 / Mathlib, with no remaining assumptions, that one fixed Mathlib `Turing.FinTM2` (multi-stack) machine multiplies in $O(n(\\log n)^{1-\\kappa})$ with $\\kappa = 4222422970/2^{46} \\approx 6.0\\times10^{-5}$ (about $2^{-14.02}$). The statement, [`MathlibTM2/Statement.lean`](https://github.com/platypii/integer-mult-bounds-lean/blob/548d658d13bb007297098dd5f6e42f3cafbcdd15/IntegerMultBounds/MathlibTM2/Statement.lean), imports Mathlib only; stack and tape machines simulate each other with constant overhead. The first full proof merged on 15 Oct (PR #3) and the proved κ has risen several times since; it was unchanged on 24 Oct (main at e2c1379). The repository's CI passed on 548d658, including [an axiom check](https://github.com/platypii/integer-mult-bounds-lean/blob/548d658d13bb007297098dd5f6e42f3cafbcdd15/CompletedProofCheck.lean) that allows only `propext`, `Classical.choice` and `Quot.sound`. It has not yet been rebuilt by a third party and no independent statement audit has been published. Its stated next target is an unconditional version of the 0.0023 construction. The same repository proves a prime-field DFT corollary on the same machine model (bit complexity, not family 130's model).\n\n**Exact DFT.** In family 130's model: [canghaimeng/exact-dft-lean](https://github.com/canghaimeng/exact-dft-lean/tree/1d2cb865c2995265195e3482c85bbdd07d542490) (commit 1d2cb86, 17 Oct) proves in Lean an all-length bound with $\\delta = 63/50000 = 0.00126$ against OpenAI's `DFTProgram` definition, with only the standard axioms and a passing CI; this is the largest Lean-checked saving found. [eumemic/exact-dft-bounds](https://github.com/eumemic/exact-dft-bounds/tree/6f87d1a0c9ae462cdcb2034a1361c87623221e66) (commit 6f87d1a, 9 Oct) gives a paper proof of a saving of about $4.856\\times10^{-4}$ (with a $(\\log\\log n)^{4-\\theta}$ factor), conditional on the CrocSwap community network. [danadran01/exact-dft-power-saving](https://github.com/danadran01/exact-dft-power-saving/tree/1a7b25e3a934459eb2c1bf69f4b85627fbef9cd3) (commit 1a7b25e, 9 Oct) reports a Lean proof of $\\delta = 3.2\\times10^{-6}$ extending OpenAI's formalization with its definitions unchanged; it has no CI. [xangma/exact-fourier-circuits](https://github.com/xangma/exact-fourier-circuits/tree/8a354c45a098de258b1be4f0606ccdb97e251270) (commit 8a354c4) rebuilds OpenAI's family 130 Lean and adds an exact circuit engine. All of these build on OpenAI's model and definitions, so their faithfulness to the intended model rests on the same unreviewed statement files.\n\n**Practical implementations.** None of the sub-$n\\log n$ algorithms is meant to be run; practical code is Fourier-based and sits near $n\\log n$. [FLINT](https://github.com/flintlib/flint/tree/1077e8dd3a51554ed2c78e675571c1c3749ddf09/src/fft_small)'s `fft_small` (small-prime number theoretic transforms) is the fastest open multiplier, with a transposed-transform refactor merged on 18 Oct (PR #2896); FLINT's `src/fft` holds its Schönhage–Strassen code. In Rust, [num-bigint](https://github.com/rust-num/num-bigint/pull/282) added NTT multiplication (merged 12 Aug 2026), [malachite](https://github.com/mhogrefe/malachite/tree/e7db0c8c1e4359bf236d011266726cc8dbcb3a0e/malachite-nz/src/natural/arithmetic/mul) has FFT and Schönhage–Strassen multiplication, [ibig](https://github.com/tczajka/ibig/tree/238fc95ba2d1886b03ed2ae442b82923ec068333) uses NTT multiplication, and [bigint-benchmark-rs](https://github.com/tczajka/bigint-benchmark-rs/tree/0ee2089102b5a4f45b186fa86b466c2ce677f191) compares them.\n\n**Verified classical algorithms (Isabelle).** The Archive of Formal Proofs has [Schönhage–Strassen Multiplication](https://www.isa-afp.org/entries/Schoenhage_Strassen.html) (2024), a verified implementation with its $O(n\\log n\\log\\log n)$ running time; the [Number Theoretic Transform](https://www.isa-afp.org/entries/Number_Theoretic_Transform.html) (2022) with an $O(n\\log n)$ fast NTT; [Karatsuba Multiplication](https://www.isa-afp.org/entries/Karatsuba.html) (2024); and the functional [FFT](https://www.isa-afp.org/entries/FFT.html) (2005). Mirror: [isabelle-prover/mirror-afp-devel](https://github.com/isabelle-prover/mirror-afp-devel/tree/352a4e06c2e2c1dc358200e2a87bd930e458ca90/thys/Schoenhage_Strassen). No formal proof of Harvey–van der Hoeven's $O(n\\log n)$ was found.\n\n**Summary.** Best unconditional, machine-checked bounds: $\\kappa^* \\ge 4222422970/2^{46} \\approx 6.0\\times10^{-5}$ and $\\delta^* \\ge 63/50000$ (both community Lean proofs, CI-checked, not yet independently audited). Best conditional: $\\kappa = 605457647/200000000000 \\approx 0.003027288$ (CrocSwap PR #5413). Nothing better than the trivial $\\kappa^*, \\delta^* \\le 1$ is known on the other side."
  resolutionCriteria: "A new record for κ counts when it is unconditional and machine-checked: a Lean 4 proof of `MulInTime κ` against `MathlibTM2/Statement.lean` of platypii/integer-mult-bounds-lean (or a reviewed equivalent), with an exact rational κ above the current record, only the standard axioms, no `sorry` or `native_decide`, and a rebuild by someone other than the author. A record for δ needs the same against OpenAI's `UniformFourier.lean` / `DFTProgram` definitions, unchanged. Conditional results are listed as conditional. Determining κ* or δ* itself needs a matching impossibility argument, judged by expert review."
  ratingRationale: "Difficulty 74: raising the proved κ is active, partly mechanical work (an unconditional Lean record of about 6.0×10⁻⁵ and a conditional 0.00302 exist), but determining κ* needs lower bounds for off-line multitape multiplication, where nothing superlinear is known; placed below the matrix multiplication exponent (82), which has fifty years of failed attempts at its endpoint. Application value 12: the constants are astronomically large and no practical speedup is claimed. Leverage 45: multiplication time is a parameter of division, roots, polynomial arithmetic and much of computer algebra, and the exact-DFT half bears on linear-circuit lower bounds, but little rests on the precise value of κ."
site:
  aiReviewed: true
---

# Applications

None directly: every sub-n log n construction has astronomically large constants and none claims a practical speedup. The value is in understanding: the results would settle a 55-year-old conjecture in the multitape model and refute the n log n bound for unrestricted linear Fourier circuits, and their data-movement techniques may matter for tape- and cache-bound computation. Practical multiplication (FLINT, GMP, the Rust bignums) is unaffected.

# Work mix rationale

New ideas are needed both to raise κ substantially and for any lower bound. Much of the current work is engineering: formalizing constructions in Lean, closing the conditional record's hypotheses, and rebuilding and auditing large proofs. Compute goes to certificate replays and searches for better finite networks.

# Verification

A Lean 4 / Mathlib proof of `IntegerMultBounds.MathlibTM2.MulInTime κ` for an explicit rational κ, against `MathlibTM2/Statement.lean` of platypii/integer-mult-bounds-lean at a pinned commit (the file imports Mathlib only). `#print axioms` lists only `propext`, `Classical.choice` and `Quot.sound`; no `sorry` or `native_decide`. A verifier other than the author rebuilds at the pinned commit and records the toolchain (Lean and Mathlib v4.34.1 at 548d658) and output. For the exact DFT, the same against OpenAI's `ComparatorChallenges/UniformFourier.lean` (`DFTProgram`) with its definitions unchanged; a statement audit of that model is part of the check.
