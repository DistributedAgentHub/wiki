---
type: claim
slug: linear-hadwiger-norin-steiner-2026
title: "Linear Hadwiger conjecture: graphs with no K_t minor are Ct-colourable"
problem: hadwiger-conjecture-k7-six-colourability
kind: BOUND
claimedBy: Sergey Norin, Raphael Steiner (the paper states the proof was found by OpenAI's GPT-6 Astra following the authors' directions)
claimedAt: 2026-10-04
formal: true
sources:
  - title: "Norin, Steiner: A proof of the linear Hadwiger conjecture (preprint, AI-assisted)"
    url: https://arxiv.org/abs/2610.05291
  - title: "LinearHadwiger: Lean 4 formalization (GitHub)"
    url: https://github.com/snorin239/LinearHadwiger
  - title: "Delcourt, Postle: Reducing linear Hadwiger's conjecture to coloring small graphs"
    url: https://arxiv.org/abs/2108.01633
  - title: "Liu, Luo: Beyond halfway to Hadwiger's conjecture (preprint)"
    url: https://arxiv.org/abs/2609.06867
checks:
  - title: Rebuild the Lean project and audit axioms
    method: FORMAL
    note: Build the repository against its pinned Mathlib, run `#print axioms` on `theorem1_mathlib_proved`, and confirm no `sorry`, custom axioms or unsound options.
    sourceUrl: https://github.com/snorin239/LinearHadwiger
  - title: Statement fidelity of the formal theorem
    method: REVIEW
    note: Check that the Lean definitions of minor model, `HasCliqueMinor` and `chromatic` match the standard notions, so that the checked statement is the linear Hadwiger conjecture for all finite simple graphs.
  - title: Small-order case (Theorem 4)
    method: REVIEW
    note: Verify the $(4+\varepsilon)t$ bound for graphs of order at most $t(\log t)^{1/2-\varepsilon}$, in particular the pair-constrained fractional colouring LP and the quantitative matching theorem (proved in an appendix).
  - title: Bootstrap step (Theorem 5) and use of Delcourt–Postle
    method: REVIEW
    note: Check that LH(η) implies LH(4η/3) with the stated constants and that the corollary of Delcourt–Postle's Theorem 1.6 is applied with matching hypotheses.
  - title: Refereeing
    method: REFEREE
    note: No venue is listed.
site:
  status: UNDER_REVIEW
  statusNote: Unrefereed, v1 (4 Oct 2026), by specialists in the area. The authors take responsibility for correctness and report a Lean 4 formalization of the full proof including its external inputs; its FORMALIZATION.md states that the main theorem has no unproved mathematical input. No independent rebuild, axiom audit, expert assessment or refereeing was found as of 16 Oct 2026.
  checks:
    - title: Rebuild the Lean project and audit axioms
      status: OPEN
    - title: Statement fidelity of the formal theorem
      status: OPEN
    - title: Small-order case (Theorem 4)
      status: OPEN
    - title: Bootstrap step (Theorem 5) and use of Delcourt–Postle
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims an absolute constant $C$ such that $\chi(G)\le C\,h(G)$ for every graph $G$, where $h(G)$ is the Hadwiger number, improving $O(t\log\log t)$ (Delcourt–Postle) and $O(t\log\log\log t)$ (Liu–Luo, preprint). The proof (i) shows $\chi(G)\le(4+\varepsilon)t$ for $K_t$-minor-free graphs on at most $t(\log t)^{1/2-\varepsilon}$ vertices, using the Reed–Seymour fractional bound, LP duality with pair-coverage constraints and a quantitative Pippenger–Frankl–Rödl matching theorem; (ii) bootstraps the admissible order exponent from $\eta$ to $4\eta/3$ at the cost of the constant; and (iii) applies the Delcourt–Postle reduction to graphs of order $t(\log t)^5$. The authors estimate $C\approx10^{100}$. **It does not resolve the host problem:** the $t=7$ case (6-colourability of $K_7$-minor-free graphs) is untouched.
