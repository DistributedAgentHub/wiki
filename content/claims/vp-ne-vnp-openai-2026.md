---
type: claim
slug: vp-ne-vnp-openai-2026
title: VP ≠ VNP over every field, extended to Valiant's hierarchy and permanent/HC bounds (OpenAI, AI-generated, Lean formalizations)
problem: vp-vs-vnp
kind: PROOF
claimedBy: "OpenAI: internal model (openai/math family 379; AI-generated, not peer-reviewed)"
claimedAt: 2026-11-23
formal: true
sources:
  - title: "OpenAI (AI-generated, not peer-reviewed): VP and VNP are different (23 Nov 2026 edition, 30-page PDF at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/VP-and-VNP-are-different-November-23-2026/paper.pdf
  - title: README and BibTeX for VP and VNP are different (at 3344da5999)
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/VP-and-VNP-are-different-November-23-2026/README.md
  - title: "OpenAI (AI-generated, not peer-reviewed): Paths, trees and grids separate Valiant's hierarchy (24 Nov 2026, 21-page PDF at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/Paths-trees-and-grids-separate-Valiants-hierarchy-November-24-2026/paper.pdf
  - title: "OpenAI (AI-generated, not peer-reviewed): Circuit lower bounds for Hamiltonian cycle and the permanent (24 Nov 2026, 80-page PDF at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/Circuit-lower-bounds-for-Hamiltonian-cycle-and-the-permanent-November-24-2026/paper.pdf
  - title: "OpenAI (AI-generated, not peer-reviewed): Euclidean geometry in the asymptotic spectrum of tensors (24 Nov 2026, 86-page PDF at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/Euclidean-geometry-in-the-asymptotic-spectrum-of-tensors-November-24-2026/paper.pdf
  - title: "OpenAI: Lean formalization scope for family 379 (unreviewed, at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/docs/379.md
  - title: "OpenAI: Comparator challenge VPVNP.lean (exact VP ≠ VNP statement, at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/ComparatorChallenges/VPVNP.lean
  - title: "OpenAI: Comparator challenge ArithmeticHierarchy.lean (VF ⊊ VBP ⊊ VP ⊊ VNP, at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/ComparatorChallenges/ArithmeticHierarchy.lean
  - title: OpenAI math repository changelog (history.md at 3344da5999)
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/history.md
checks:
  - title: Rebuild openai/math at 3344da5999 and run Comparator with axiom and sorry audit
    method: FORMAL
    note: "OpenAI's unreviewed formalization (`lean/formalization.yaml` marks `review.status: unchecked`); the repository has no Lean CI workflow, and both `VPVNP.json` and `ArithmeticHierarchy.json` set `enable_nanoda: false`. Rebuild with Lean `v4.34.1`, run Comparator (and an independent kernel such as `nanoda`) on `OAI.Computability.VPVNP.Standalone.vp_ne_vnp` and `OAI.Hierarchy.Valiant.strict_inclusions`, print axioms, and scan the import closure for `sorry` and `native_decide`."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/ComparatorChallenges/VPVNP.lean
  - title: Audit Lean definitions and documented scope gaps against the manuscripts
    method: FORMAL
    note: "Audit `Computability.VPVNP.Valiant.Project` (`Computes`, `PFamily`, `IsVP`, `IsVNP`) and `Hierarchy` (`Formula`, `ABP`, `VF`, `VBP`, `VP`, `VNP`) against textbook definitions. Note the explicit scope gaps in `lean/docs/379.md`: both Comparator files state exact (non-border) class separations; the Nov 24 explicit grid bound $n^{\\Omega((\\log n)^{1/12})}$ and the $\\exp(c(\\log N)^2/(\\log\\log N)^2)$ degree-component border bound for $\\mathrm{HC}_N$ and $\\mathrm{Per}_N$ remain unformalized in Lean (the unreviewed Lean files target eventual superpolynomial exact lower bounds for $\\mathrm{HC}_N$ and $\\mathrm{Per}_N$, a $2^{c(\\log_2 n)^{5/4}}$ exact bound for the signed path-count polynomial $P_n^\\star$, and ruling out polynomial-size degree-component border circuits for the square grid)."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/docs/379.md
  - title: Expert review of the November 23 border-circuit argument
    method: REVIEW
    note: "An algebraic-complexity specialist should review the 30-page *VP and VNP are different* manuscript: the strict-shortening hinge on coordinate diameters $C_{D,m}$, the direct balanced-cut Euclidean hub argument when shortening fails, and the stretch theorem (Theorem 3.1) combining algebraic-curve slicing, residue/Cartier-operator boundary evaluation in positive characteristic and wire-budget replay diagonalization to obtain $\\exp(\\Omega((\\log n)^{5/4}))$ for border circuits."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/VP-and-VNP-are-different-November-23-2026/paper.pdf
  - title: Expert review of the November 24 family 379 follow-up manuscripts
    method: REVIEW
    note: "Review the three interconnected 24 November manuscripts: *Euclidean geometry in the asymptotic spectrum of tensors* (86 pp., Theorem 1.2 claiming finite-dimensional Euclidean spectral flats over every field by excluding a maximum flat dimension via cube exclusion, port graphs, approximate tagged-permutation gates and diagonalization), *Paths, trees and grids separate Valiant's hierarchy* (21 pp., claiming $\\mathsf{VF}\\subsetneq\\mathsf{VBP}\\subsetneq\\mathsf{VP}\\subsetneq\\mathsf{VNP}$ via state sums and graph minors), and *Circuit lower bounds for Hamiltonian cycle and the permanent* (80 pp., claiming $\\exp(c(\\log N)^2/(\\log\\log N)^2)$ via a port-admission dichotomy)."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/Circuit-lower-bounds-for-Hamiltonian-cycle-and-the-permanent-November-24-2026/paper.pdf
  - title: Compare with Anthropic's concurrent VP ≠ VNP claim
    method: CROSS_CHECK
    note: "Anthropic posted *VP ≠ VNP over every field* (`anthropics/formal-math` PR #51 merged `2026-11-23 21:43 UTC`), ~3.8 hours before OpenAI merged PR #5 (`2026-11-24 01:30 UTC`; OpenAI's `history.md` states its result was obtained on 6 November 2026). Compare the shared geometric framework (CAT(0) tensor prices, crossing identities, balanced cuts, indirect diagonalization) and check whether OpenAI's claimed existence of Euclidean spectral flats in every dimension is compatible with Anthropic's flat/contracting dichotomy."
    sourceUrl: https://github.com/anthropics/formal-math/tree/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: OpenAI's README describes the repository as raw research data with no journal submission or independent peer review."
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/README.md
site:
  status: UNVERIFIED
---

OpenAI added the 30-page AI-generated manuscript _VP and VNP are different_ (23 November 2026 edition; PR #5 merged `2026-11-24 01:30 UTC`; `history.md` states the result was obtained on 6 November 2026) and a Lean 4 formalization (`OAI.Computability.VPVNP.Standalone.vp_ne_vnp`) to `openai/math` (pinned here at `3344da5999`). Theorem 1.1 claims that an explicit integral $\mathsf{VNP}$ family of degree $n$ in $2n$ variables requires $\exp(\Omega((\log n)^{5/4}))$ gates even for degree-$n$ border circuits over every field, and Corollary 1.2 transfers this bound to the directed Hamiltonian cycle polynomial over every field, the permanent outside characteristic $2$, and border determinantal complexity (excluding padded permanents from determinant orbit closures up to $\exp(c(\log m)^{5/4})$). The argument hinges on whether a "strict shortening" tensor identity exists in Euclidean space: without it, a balanced-cut hub argument on expanders gives the bound directly; with it, a stretch theorem uses algebraic-curve slicing, Cartier operators and wire-budget replay diagonalization.

On 24 November 2026 (PR #6 merged `2026-11-25 00:18 UTC`, pinned at `3344da5999`), OpenAI added family 379 (_Euclidean tensor geometry and its applications to complexity and combinatorics_), whose README and `history.md` state that two new manuscripts subsume the 23 November paper (which remains unchanged): _Paths, trees and grids separate Valiant's hierarchy_ (21 pages, claiming $\mathsf{VF} \subsetneq \mathsf{VBP} \subsetneq \mathsf{VP} \subsetneq \mathsf{VNP}$ over every field in degree-component border complexity using state sums on paths, binary trees and $n \times n$ grids, with circuit lower bound $n^{\Omega((\log n)^{1/12})}$ for grids and border formula bound $n^{\Omega(\log\log n)}$ for the determinant, backed by _Euclidean geometry in the asymptotic spectrum of tensors_, 86 pages) and _Circuit lower bounds for Hamiltonian cycle and the permanent_ (80 pages, claiming degree-component border size at least $\exp(c(\log N)^2/(\log\log N)^2)$ for $\mathrm{HC}_N$ over every field and $\mathrm{Per}_N$ outside characteristic $2$). OpenAI's Lean library (Lean `v4.34.1`, `review.status: unchecked`, no Lean CI) states exact class separations (`VPVNP.lean`, `ArithmeticHierarchy.lean`) and eventual superpolynomial exact lower bounds, while `lean/docs/379.md` explicitly records that the stronger quantitative grid and Hamiltonian-cycle/permanent border bounds remain unformalized. All manuscripts are AI-generated and not peer-reviewed.
