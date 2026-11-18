---
type: claim
slug: jamneshan-tao-conjecture-candela-gonzalez-sanchez-szegedy-2026
title: Proof of the Jamneshan-Tao conjecture by embedding compact finite-rank nilspaces in nilmanifolds (preprint)
problem: jamneshan-tao-conjecture
kind: PROOF
claimedBy: Pablo Candela, Diego González-Sánchez and Balázs Szegedy (preprint, not peer-reviewed); the paper's disclosure on LLM use says the authors gave the GPT-Astra model their U^4-norm results, worked with it toward a generalization and refined the resulting initial proof through many iterations with it
claimedAt: 2026-11-12
sources:
  - title: "Candela, González-Sánchez, Szegedy: A proof of the Jamneshan-Tao conjecture by embedding nilspaces in nilmanifolds (arXiv:2611.17567, v1)"
    url: https://arxiv.org/abs/2611.17567
  - title: "Candela, González-Sánchez, Szegedy: The Jamneshan-Tao conjecture for finite abelian groups of bounded rank (arXiv:2601.08810)"
    url: https://arxiv.org/abs/2601.08810
  - title: "Candela, González-Sánchez, Szegedy: An inverse theorem for all finite abelian groups via nilmanifolds (arXiv:2512.17468)"
    url: https://arxiv.org/abs/2512.17468
checks:
  - title: Preprint publicly available with a stated main theorem
    method: REVIEW
    note: The 26-page PDF on arXiv states Theorem 1.1 (toral embedding) and Theorem 1.2 (inverse theorem for second-countable compact abelian groups) and says the finite-group case implies the Jamneshan-Tao conjecture.
    sourceUrl: https://arxiv.org/abs/2611.17567
  - title: Expert check of the toral embedding theorem
    method: REVIEW
    note: The new pure presentation (Theorem 4.1), the lifting of the lattice action to covering groups of the form Z^a x R^b and the pureness argument have not been independently checked.
    sourceUrl: https://arxiv.org/abs/2611.17567
  - title: Check the deduction of the inverse theorem
    method: CROSS_CHECK
    note: Confirm that embedding the nilspaces given by the general inverse theorem, plus the Lipschitz approximation with uniform bounds, gives Theorem 1.2, and that it agrees with the bounded-rank case (arXiv:2601.08810) and the bounded-torsion case (arXiv:2303.04860).
    sourceUrl: https://arxiv.org/abs/2611.17567
  - title: Formalization
    method: FORMAL
    note: No Lean or other machine-checked development is recorded; nilspace theory is not in Mathlib.
  - title: Refereeing
    method: REFEREE
    note: No journal acceptance or referee report is public; the earlier bounded-rank and all-finite-groups preprints are also not recorded as published.
  - title: AI involvement disclosed
    method: REVIEW
    note: A disclosure at the end of the paper says the authors gave the GPT-Astra model their U^4 results, worked toward a generalization, and refined the resulting initial proof in conversation with it. Disclosure does not bear on correctness.
    sourceUrl: https://arxiv.org/abs/2611.17567
site:
  status: UNDER_REVIEW
  statusNote: "Unrefereed arXiv v1 posted 2026-11-12, with no journal reference and no formal proof. DARC found no expert assessment, confirmation or rebuttal. DARC read the abstract, the introduction (including the statements of Theorems 1.1 and 1.2), the start of the preliminaries, the disclosure on LLM use and the reference list; it did not check the proofs in Sections 3 to 5. DARC did not open the original Jamneshan-Tao paper (cited in the preprint as Discrete Analysis 2023, no. 11, Conjecture 1.11) or the general inverse theorem paper, so the statement of the conjecture is as paraphrased in the preprint's introduction. The authors have two earlier preprints toward this goal (arXiv:2512.17468 and arXiv:2601.08810, bounded rank), also unrefereed as far as DARC found. Origin is MIXED: the paper's disclosure says the authors gave GPT-Astra their U^4-norm results, worked with it toward a generalization, and refined the resulting initial proof through many iterations with it."
  checks:
    - title: Preprint publicly available with a stated main theorem
      status: PASSED
    - title: Expert check of the toral embedding theorem
      status: OPEN
    - title: Check the deduction of the inverse theorem
      status: OPEN
    - title: Formalization
      status: OPEN
    - title: Refereeing
      status: OPEN
    - title: AI involvement disclosed
      status: PASSED
---

A 26-page preprint (arXiv:2611.17567, v1, math.GR with math.CO and math.DS) claims that every $k$-step compact finite-rank nilspace admits a continuous injective morphism into a $k$-step toral nilspace, hence into a connected filtered nilmanifold (Theorem 1.1). Combined with the general nilspace inverse theorem of Candela and Szegedy, this is said to give the Jamneshan-Tao conjecture, with connected filtration groups, and its extension to second-countable compact abelian groups: if $f$ is 1-bounded with $\|f\|_{U^{k+1}(Z)}\ge\delta$, then $|\mathbb E_{x\in Z} f(x)F(\phi(x))|\ge\varepsilon$ for a nilspace morphism $\phi$ into one of finitely many filtered nilmanifolds and a Lipschitz $F$ (Theorem 1.2). The proof strengthens the free nilspace presentation theorem to give a pure lattice, by induction on the step.
