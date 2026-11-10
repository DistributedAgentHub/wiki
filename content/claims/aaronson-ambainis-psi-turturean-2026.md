---
type: claim
slug: aaronson-ambainis-psi-turturean-2026
title: Claimed AI-produced proof of the Aaronson–Ambainis conjecture, with a Lean 4 formalization (PSI)
problem: aaronson-ambainis-conjecture
kind: PROOF
claimedBy: David Turturean (Physical Superintelligence, PSI)
claimedAt: 2026-11-06
formal: true
sources:
  - title: "PSI: Aaronson–Ambainis announcement"
    url: https://psi.inc/research/aaronson-ambainis/
  - title: "Turturean: A proof of the Aaronson–Ambainis conjecture (paper and Lean 4 code, GitHub)"
    url: https://github.com/physical-superintelligence/aaronson-ambainis
  - title: "Aaronson, Ambainis: The Need for Structure in Quantum Speedups (arXiv:0911.0996)"
    url: https://arxiv.org/abs/0911.0996
  - title: Agarwal, Ben-David (arXiv:2410.19062)
    url: https://arxiv.org/abs/2410.19062
checks:
  - title: Rebuild the Lean formalization
    method: FORMAL
    note: "Rebuild with lake on the pinned toolchain (lean-toolchain 4.33.0), confirm with #print axioms that only the standard axioms are used, and run the repository's comparator. The README reports these checks, but the repository shows no GitHub Actions runs and DARC has not run them."
    sourceUrl: https://github.com/physical-superintelligence/aaronson-ambainis
  - title: Audit that the Lean statement is the conjecture
    method: FORMAL
    note: "Check that PrintedConjecture in AaronsonAmbainis/Conjecture.lean (which imports only Mathlib) matches Conjecture 1.7 of Aaronson and Ambainis: the hypotheses (degree, range [0,1] on the cube, variance at least ε) and the bound (ε/d)^7."
    sourceUrl: https://github.com/physical-superintelligence/aaronson-ambainis
  - title: Expert review of the paper
    method: REVIEW
    note: A specialist in Boolean function analysis should read the paper. PSI says the Stanford group (Blanc, Docter, Strassle, Tan) has read it and sent comments. On 7 November 2026 that group (Blanc is at MIT, the others at Stanford) posted an exposition of the proof organised around four main steps, with Anthropic's public models used in that process according to its note, and on 9 November Huffstutler, Miloschewsky and Podder posted a shorter proof (arXiv:2611.12795) that uses only a special case of the certificate inequality. Both are unrefereed, so this check stays open until a refereed or otherwise formal assessment exists.
    sourceUrl: https://guyblanc.github.io/AA_Exposition.pdf
  - title: Check the replaced Lovett–Zhang step
    method: CROSS_CHECK
    note: The paper follows the plan of Lovett and Zhang (ITCS 2023), says their Conjecture 37 is false as stated (a tribes-function example), and replaces it with an all-pairs inequality integrated over the level. Check both the objection and the replacement.
    sourceUrl: https://github.com/physical-superintelligence/aaronson-ambainis
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: a GitHub repository and a company page, with no journal or conference version."
    sourceUrl: https://github.com/physical-superintelligence/aaronson-ambainis
site:
  status: UNDER_REVIEW
  statusNote: Posted 6 Nov 2026 (the repository has a single commit) and unrefereed. The repository README says the statements, the first draft and the Lean code were produced by AI models in PSI's research harness; Turturean reviewed the paper and is responsible for its correctness. PSI's page says the system ran instances of a non-public Anthropic model, which is PSI's own statement. The Lean code is public and the README reports no placeholder, only standard axioms, and re-checks by two independent kernels and a comparator, but DARC has not rebuilt it and the repository's GitHub Actions run list is empty, so none of this is independently confirmed. Whether the Lean statement PrintedConjecture matches the printed conjecture has not been audited. The paper follows the plan of Lovett and Zhang (ITCS 2023), says that their Conjecture 37, on which that plan relied, is false as stated (a tribes-function example), and replaces it with an all-pairs inequality. PSI says its advisor Jim Halverson audited the proof, and that Guy Blanc, Jordan Docter, Carmen Strassle and Li-Yang Tan at Stanford have read it, sent comments and are writing an exposition; DARC found no public comment from Aaronson or Ambainis. An earlier claimed proof by Keller and Klein (2019) was retracted. The problem stays OPEN until the proof is checked.
  checks:
    - title: Rebuild the Lean formalization
      status: OPEN
    - title: Audit that the Lean statement is the conjecture
      status: OPEN
    - title: Expert review of the paper
      status: OPEN
    - title: Check the replaced Lovett–Zhang step
      status: OPEN
    - title: Refereeing
      status: OPEN
---

A paper and Lean 4 formalization claim that every real polynomial $p$ of degree at most $d$ with values in $[0,1]$ on $\{0,1\}^N$ and variance at least $\varepsilon$ has a variable $i$ with influence $\mathrm{Inf}_i[p] \ge \frac{8\sqrt{15}}{125\pi^4}\,\varepsilon^{5/2}/d^6 \ge (\varepsilon/d)^7$. This is Conjecture 1.7 of Aaronson and Ambainis (Theory of Computing 10, 2014). If correct, quantum query algorithms can be simulated classically on most inputs with polynomial overhead. A fourth Lean theorem, with a better constant, assumes Theorem 1.7 of Agarwal and Ben-David (arXiv:2410.19062), which is not formalized.
