---
type: claim
slug: supercritical-ten-martini-ge-jitomirskaya-you-2026
title: The Supercritical Ten Martini Problem (Ge, Jitomirskaya, You, preprint)
problem: ten-martini-problem-analytic-one-frequency
kind: PROOF
claimedBy: Lingrui Ge, Svetlana Jitomirskaya and Jiangong You (arXiv:2611.13068, preprint)
claimedAt: 2026-11-09
sources:
  - title: "Ge, Jitomirskaya, You: The Supercritical Ten Martini Problem (arXiv:2611.13068)"
    url: https://arxiv.org/abs/2611.13068
checks:
  - title: Expert reading of the new center construction
    method: REVIEW
    note: A specialist in quasiperiodic operators should check the finite-dimensional intrinsic center with an analytic injective solution frame (Proposition 3.1), the extension of the Kotani argument to a center of dimension 2k (Theorem 4.1) and the opposite energy monotonicity of the two unitary blocks (Proposition 4.1).
    sourceUrl: https://arxiv.org/abs/2611.13068
  - title: Almost reducibility, resonance and the final contradiction
    method: REVIEW
    note: Check almost reducibility on a fixed strip via Krikorian renormalization (Proposition 5.1), the choice of energy producing the resonance between eigenphases of the two blocks (Section 6, Proposition 6.1) and the Gram-matrix and Wronskian estimates that give the contradiction excluding intervals in the spectrum (Section 7).
    sourceUrl: https://arxiv.org/abs/2611.13068
  - title: Consistency with the two-dimensional-center papers
    method: CROSS_CHECK
    note: Confirm that for acceleration one (two-dimensional center) the argument reduces to arXiv:2609.15812 and the symplectic structure of arXiv:2407.08866, and that the almost Mathieu case with λ>1 recovers Avila–Jitomirskaya.
    sourceUrl: https://arxiv.org/abs/2609.15812
  - title: Compatibility with the reported counterexamples
    method: CROSS_CHECK
    note: The preprint reports announced subcritical analytic potentials with intervals in the spectrum (Argentieri–Avila) and a supercritical Type II counterexample to the dry statement (Ge–Xu–Wang–Zhao). Check that the stated theorem, restricted to {L>0} and to Cantor (not dry) spectrum, is consistent with both.
    sourceUrl: https://arxiv.org/abs/2611.13068
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.13068
site:
  status: UNDER_REVIEW
  statusNote: A 60-page arXiv preprint (v1 of 9 Nov 2026; math-ph, with math.DS and math.SP), unrefereed; DARC found no expert assessment yet. The authors are the group that developed the method in their 2023, 2024 and September 2026 preprints, and the paper builds on them. The arXiv page lists no journal reference, and no formal verification is mentioned. Appendix B (Acknowledgement and AI-use) says the authors conceived the whole proof strategy in 2025 without AI, and later used an LLM to help carry out the renormalization and local parameter KAM steps, including deriving the renormalization estimate in Lemma 5.1 and discovering the monotonicity property in Lemma 3.2, as well as to stress-test arguments and improve the exposition; the authors take full responsibility for the arguments, so the origin is listed as mixed. The claim covers only the positive-Lyapunov (supercritical) part of the spectrum; the preprint itself reports announced examples (Argentieri–Avila) showing Cantor spectrum cannot be expected for all subcritical analytic potentials.
  checks:
    - title: Expert reading of the new center construction
      status: OPEN
    - title: Almost reducibility, resonance and the final contradiction
      status: OPEN
    - title: Consistency with the two-dimensional-center papers
      status: OPEN
    - title: Compatibility with the reported counterexamples
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that for every nonconstant real-analytic potential $v$ and every irrational frequency $\alpha$, the part of the spectrum of the one-frequency Schrödinger operator where the Lyapunov exponent is positive is a Cantor set (Theorem 1.1; stated for the set when it is nonempty). The proof extends the Kotani and almost-reducibility argument of Ge–Jitomirskaya–You (The Robust Ten Martini Problem, arXiv:2609.15812) from two-dimensional to arbitrary finite-dimensional dual centers, using the intrinsic symplectic center of Ge–Jitomirskaya (arXiv:2407.08866). It does not address subcritical or critical energies.
