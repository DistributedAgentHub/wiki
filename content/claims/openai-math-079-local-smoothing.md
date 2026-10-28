---
type: claim
slug: openai-math-079-local-smoothing
title: Local smoothing conjecture for the Euclidean wave equation in every dimension
problem: local-smoothing-conjecture
kind: PROOF
claimedBy: "OpenAI: internal model (openai/math family 079; AI-generated, not peer-reviewed)"
claimedAt: 2026-10-26
formal: true
sources:
  - title: "OpenAI: Building scientific understanding with academic communities (26 Oct 2026)"
    url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: "OpenAI (AI-generated, not peer-reviewed): Local smoothing for the Euclidean wave equation (openai/math family 079, PDF at 7ef5c0cc5c)"
    url: https://github.com/openai/math/blob/7ef5c0cc5c/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf
  - title: OpenAI Lean scope for family 079 (lean/docs/079.md at 7ef5c0cc5c)
    url: https://github.com/openai/math/blob/7ef5c0cc5c/lean/docs/079.md
  - title: "Guth, Wang, Zhang: A sharp square function estimate for the cone in ℝ³ (the case n = 2)"
    url: https://arxiv.org/abs/1909.10693
checks:
  - title: Expert reading of the proof and the auxiliary PDE
    method: REVIEW
    note: A harmonic analyst should identify the new auxiliary-PDE step, say what it replaces in the Guth–Wang–Zhang and decoupling arguments, and check it in dimensions n ≥ 3.
    sourceUrl: https://github.com/openai/math/blob/7ef5c0cc5c/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf
  - title: Third-party rebuild of the Lean proof
    method: FORMAL
    note: OpenAI's unreviewed formalization; DARC audit open. Rebuild the repository with Lake, run Comparator against a Mathlib-only challenge, and print the axioms of the main theorem; check for sorry and added axioms.
    sourceUrl: https://github.com/openai/math/blob/7ef5c0cc5c/lean/docs/079.md
  - title: Lean statements match the conjectures
    method: FORMAL
    note: OpenAI's unreviewed formalization; DARC audit open. Check that the formal theorem is the ε-loss bound with s = max(0,(n−1)/2−n/p)+ε for every n ≥ 2 and 2 ≤ p < ∞, that Schwartz data and the time window [1,2] suffice, and that the Kakeya and restriction corollaries are stated with the strict ranges and δ^(−ε) loss the Lean file lists rather than the full conjectures.
    sourceUrl: https://github.com/openai/math/blob/7ef5c0cc5c/lean/docs/079.md
  - title: Compare with the two-dimensional theorem
    method: CROSS_CHECK
    note: The n = 2 case of the claim must agree with Guth–Wang–Zhang (Annals 2020), including the endpoint p = 4 and the ε-loss; a discrepancy would flag an error.
    sourceUrl: https://arxiv.org/abs/1909.10693
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: no journal submission or organized review is listed."
    sourceUrl: https://openai.com/index/building-scientific-understanding-with-academic-communities/
site:
  status: UNDER_REVIEW
  statusNote: AI output obtained 18 Oct 2026 and formalized in Lean on 19 Oct, announced by OpenAI on 26 Oct 2026 and released as raw AI output on an expert's advice, with no organized review group. DARC has not seen a Lean build (the repository has no CI) and no expert assessment is recorded. OpenAI's own history wording on restriction is 'throughout the interior of the conjectured range', so the scope of the restriction consequence needs checking.
  checks:
    - title: Expert reading of the proof and the auxiliary PDE
      status: OPEN
    - title: Third-party rebuild of the Lean proof
      status: OPEN
    - title: Lean statements match the conjectures
      status: OPEN
    - title: Compare with the two-dimensional theorem
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The manuscript (dated 25 October 2026) claims that for every $n\ge2$ and $2\le p<\infty$, $\|e^{it\sqrt{-\Delta}}f\|_{L^p(\mathbb R^n\times[1,2])}\lesssim\|f\|_{W^{s,p}}$ for Schwartz $f$, with $s=\max(0,(n-1)/2-n/p)+\varepsilon$ for every $\varepsilon>0$, proved through a novel auxiliary PDE. OpenAI says this also gives uniform Bochner–Riesz bounds, spherical extension and Stein square-function bounds in their strict ranges, the Kakeya maximal $L^n$ bound with $\delta^{-\varepsilon}$ loss and Hausdorff dimension $n$ for Kakeya sets in $\mathbb R^n$, and so Kakeya and Stein's restriction conjecture in all dimensions. Guth–Wang–Zhang (2019) proved the case $n=2$.
