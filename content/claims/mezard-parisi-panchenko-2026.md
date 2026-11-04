---
type: claim
slug: mezard-parisi-panchenko-2026
title: The Mézard–Parisi formula for diluted even K-spin and random K-SAT models (Panchenko, preprint)
problem: mezard-parisi-formula-diluted-spin-glasses
kind: PROOF
claimedBy: Dmitry Panchenko (arXiv:2610.39545, preprint)
claimedAt: 2026-10-29
sources:
  - title: "Panchenko: The Mézard–Parisi formula (arXiv:2610.39545)"
    url: https://arxiv.org/abs/2610.39545
  - title: "OpenAI (AI-generated, unrefereed): family 221, the Mézard–Parisi formula for diluted spin glasses (openai/math at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/CONTENTS.md
checks:
  - title: Expert reading of the lower bound
    method: REVIEW
    note: A spin-glass probabilist should check the approximate reproducibility theorem (Section 4), the induction on the number of replicas (Sections 6 to 12), the compactness step that removes the finite-support assumption, and the final lower bound (Section 13), together with the supplementary note the paper cites for the cavity regularization.
    sourceUrl: https://arxiv.org/abs/2610.39545
  - title: Check the stated model class and assumptions
    method: REVIEW
    note: Confirm which cases Theorem 2.1 gives as a full limit (even $K$-spin with Gaussian or symmetric-sign coupling; $K$-SAT, $K\ge2$) and that the general clause law gets only the liminf lower bound; check the symmetry and exponential-integrability conditions against the estimates used in the proof.
    sourceUrl: https://arxiv.org/abs/2610.39545
  - title: Consistency with the earlier programme
    method: CROSS_CHECK
    note: Compare the argument with the finite-RSB result of arXiv:1406.4702, which it extends (an induction on tree shapes there, on the number of replicas here), and with the 1-RSB case of arXiv:1308.1944; check that it recovers the finite-RSB Mézard–Parisi ansatz and the Franz–Leone bound.
    sourceUrl: https://arxiv.org/abs/1406.4702
  - title: Compare with OpenAI's family 221 manuscript
    method: CROSS_CHECK
    note: Two unrefereed manuscripts claim the formula for overlapping classes by reportedly different methods. An expert could compare the classes, assumptions and conclusions; agreement would be informative but is not verification of either.
    sourceUrl: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/221.md
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.39545
site:
  status: UNDER_REVIEW
  statusNote: A 67-page arXiv preprint (v1 of 29 Oct 2026; math.PR), unrefereed; DARC found no expert assessment yet. The author is a leading expert on this programme and builds on his earlier papers (arXiv:1308.1944, arXiv:1406.4702). The paper's acknowledgement says the proof was found by ChatGPT Astra at the author's request and that the author read, checked and rewrote it, with ChatGPT Astra and Claude Fable assisting the rewriting. The paper does not mention a formal verification, and defers some standard ingredients (the cavity regularization and the cavity lower-bound argument) to a supplementary note. It notes that OpenAI released a different proof of the formula a few days later (openai/math family 221, a separate unrefereed claim for even-arity Ising models in the Panchenko–Talagrand class, with an unreviewed Lean formalization).
  checks:
    - title: Expert reading of the lower bound
      status: OPEN
    - title: Check the stated model class and assumptions
      status: OPEN
    - title: Consistency with the earlier programme
      status: OPEN
    - title: Compare with OpenAI's family 221 manuscript
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that the free energy of the diluted $K$-spin model with even $K\ge2$ (Gaussian or symmetric-sign coupling) and of random $K$-SAT with $K\ge2$ converges to the infimum of the Mézard–Parisi functional over the depth, the cascade parameters and the boundary function. The opposite inequality is the Franz–Leone interpolation bound, which holds at every $N$. For a more general clause law that is symmetric under permutations of its inputs and satisfies an exponential-moment bound, only the lower bound on the liminf is claimed. The main new tool is an approximate form of the Mézard–Parisi reproducibility hypothesis, proved without assuming that the overlap distribution has finite support, using a small diluted random-energy-model perturbation.
