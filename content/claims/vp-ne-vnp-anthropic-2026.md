---
type: claim
slug: vp-ne-vnp-anthropic-2026
title: "VP ≠ VNP over every field: m^(c(log m)^(1/3)) circuit and border lower bounds (Anthropic, AI-generated, Lean 4 formalization)"
problem: vp-vs-vnp
kind: PROOF
claimedBy: "Anthropic: internal research Claude model (AI-generated, not peer-reviewed; Lean 4 formalization written by AI models)"
claimedAt: 2026-11-23
formal: true
sources:
  - title: "Anthropic (AI-generated, not peer-reviewed): VP ≠ VNP over every field (anthropics/formal-math, vp-vnp directory at 11b6c7e3)"
    url: https://github.com/anthropics/formal-math/tree/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp
  - title: "Anthropic (AI-generated, not peer-reviewed): VP ≠ VNP over every field (70-page PDF at 11b6c7e3)"
    url: https://github.com/anthropics/formal-math/blob/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp/paper.pdf
  - title: "Anthropic: Statement.lean (Mathlib-only definitions and main theorem statements at 11b6c7e3)"
    url: https://github.com/anthropics/formal-math/blob/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp/Statement.lean
  - title: "Anthropic: comparator.json configuration (Comparator and nanoda at 11b6c7e3)"
    url: https://github.com/anthropics/formal-math/blob/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp/comparator.json
  - title: "Anthropic formal-math CI run: verify (vp-vnp) on commit 11b6c7e3"
    url: https://github.com/anthropics/formal-math/actions/runs/45272623486
  - title: "Anthropic (AI-generated, not peer-reviewed): VP ≠ VNP over every field (Hexagon preprint 2611.00954v1, 23 Nov 2026)"
    url: https://hexagonmath.org/2611.00954v1
  - title: "Fortnow: VP ≠ VNP (Computational Complexity blog, 24 November 2026)"
    url: https://blog.computationalcomplexity.org/2026/11/vp-vnp.html
checks:
  - title: Repository CI builds and checks the Lean 4 formalization
    method: FORMAL
    note: "The repository's own GitHub Actions run 45272623486 (`verify (vp-vnp)`) succeeded on commit `11b6c7e3c9`, running Comparator against `Challenge.lean` with the `nanoda` second kernel enabled (`enable_nanoda: true`) and permitted axioms limited to `propext`, `Quot.sound` and `Classical.choice`. This is the repository's own CI, not a DARC rebuild."
    sourceUrl: https://github.com/anthropics/formal-math/actions/runs/45272623486
  - title: Independent sandboxed rebuild and axiom audit
    method: FORMAL
    note: Rebuild `vp-vnp/` at commit `11b6c7e3c927df2658f513b6b68ea7f8929c62c5` on a clean machine with Lean 4.33.1 and Mathlib `0df444a360e`, run `scripts/PrintAxioms.lean` and Comparator with `nanoda`, and verify that no `sorry` occurs outside `Challenge.lean` and no `native_decide` or custom axioms appear across the 324 `.lean` files.
    sourceUrl: https://github.com/anthropics/formal-math/tree/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp
  - title: Audit Statement.lean definitions against Valiant's classes and border complexity
    method: FORMAL
    note: The README and Appendix Q explicitly state that no human mathematician has checked whether `Statement.lean` says what is claimed (judged only by AI readers). Audit `Computes` (variables and constants counted as gates; addition and multiplication over a commutative semiring, with negation via scalar `-1`), `perm`, `hc`, `Beyond`, `Approximates` (formal Laurent series `LaurentSeries F`), `VP`, `VPBar`, `VNP`, `Separation` (`VP F ⊂ VNP F`) and `SeparationClosure` (`¬ VNP F ⊆ VPBar F`), and check the text-to-Lean differences catalogued in Appendix Q.
    sourceUrl: https://github.com/anthropics/formal-math/blob/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp/Statement.lean
  - title: Expert review of the mathematical argument and Lean-only contracting-case constructions
    method: REVIEW
    note: "An algebraic-complexity specialist should review the 70-page paper: the generalized spectral points and Meixner-polynomial crossing identity yielding CAT(0) price spaces (Appendices A–C), the non-effective flat-versus-contracting dichotomy on $\\mathrm{Mat}_\\mu(\\mathbb{F}_2)$ (Theorem 2.2 / D.2), the flat-case lower bound for $f_{k,\\ell}$ via balanced-set decomposition and cube facet centres (Appendix E), and the contracting-case Poincaré inequality on $U_h(\\mathbb{F}_2)$, duality-based rerouting laws, tree cutting and accelerator diagonalization (Appendices F–K). Note the paper's explicit caveat (p. 17) that the printed proofs of Proposition I.1, Theorem H.2(d)–(e), Theorem J.3 and Proposition N.4 only describe the machines/programs and rely on the Lean development for exactness; Remark N.6 (border determinantal complexity) is not formalized in Lean."
    sourceUrl: https://github.com/anthropics/formal-math/blob/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp/paper.pdf
  - title: Compare with OpenAI's concurrent VP ≠ VNP and Valiant-hierarchy claims
    method: CROSS_CHECK
    note: OpenAI released a separate AI-generated manuscript (*VP and VNP are different*) less than four hours later (`2026-11-24 01:30 UTC`) and follow-up preprints on 24 November (family 379) claiming $\mathsf{VF}\subsetneq\mathsf{VBP}\subsetneq\mathsf{VP}\subsetneq\mathsf{VNP}$ and $\exp(c(\log N)^2/(\log\log N)^2)$ lower bounds for $\mathrm{HC}_N$ and $\mathrm{Per}_N$. Compare both manuscripts' use of CAT(0) tensor prices, crossing identities and indirect diagonalization, and check whether OpenAI's claimed existence of Euclidean spectral flats resolves Anthropic's open question of which branch of its dichotomy holds.
    sourceUrl: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/VP-and-VNP-are-different-November-23-2026/paper.pdf
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the GitHub README states that both paper and Lean code were written by AI models and that no human mathematician has checked the proof; Hexagon 2611.00954v1 adds that Anthropic researchers worked with Claude to improve the presentation, labels human understanding \"some parts\", and lists no journal submission or peer review."
    sourceUrl: https://hexagonmath.org/2611.00954v1
site:
  status: UNVERIFIED
---

Anthropic posted _VP ≠ VNP over every field_ by Claude (70 pages, AI-generated, not peer-reviewed) on 23 November 2026 in `anthropics/formal-math` (PR #51 merged `2026-11-23 21:43 UTC`, pinned at `11b6c7e3`; also posted as Hexagon `2611.00954v1`), accompanied by a 324-file Lean 4 formalization (Lean 4.33.1, Mathlib `0df444a360e`). Its main theorems claim an absolute constant $c > 0$ such that, for every characteristic $p$ (zero or prime), there is a non-effective threshold $m_0$ beyond which every exact or approximating (formal Laurent series) arithmetic circuit computing the directed Hamiltonian cycle polynomial $\mathrm{HC}_m$—and the permanent $\mathrm{PERM}_m$ when $p \ne 2$—has more than $m^{c(\log_2 m)^{1/3}} = 2^{c(\log_2 m)^{4/3}}$ gates, implying $\mathsf{VP} \subsetneq \mathsf{VNP}$ and $\mathsf{VNP} \not\subseteq \overline{\mathsf{VP}}$ over every field. The argument aims to obtain CAT(0) nonpositive curvature for generalized Strassen tensor "prices" via a Meixner-polynomial crossing identity and set up a non-effective dichotomy between a flat (Euclidean) case and a contracting case (claiming a stronger $2^{c(\log m)^2/\log\log m}$ bound via Poincaré inequalities on unitriangular groups $U_h(\mathbb{F}_2)$, tensor-network cutting and indirect diagonalization), and explicitly notes that the result does not settle $\mathsf{P}$ vs $\mathsf{NP}$. Both the README and paper state that no human mathematician has checked the argument or whether `Statement.lean` matches the informal definitions, and p. 17 notes that four contracting-case program/machine exactness steps rely on the Lean code rather than printed proofs; repository CI (`verify (vp-vnp)`, Comparator with `nanoda`) passed, but no independent human audit or peer review exists.
