---
type: claim
slug: union-closed-constant-0-38288525
title: Union-closed sets constant raised to 0.38288525 (two concurrent computer-assisted proofs)
problem: union-closed-sets
kind: BOUND
claimedBy: Yunjiang Jiang; independently Simone Costa and Ankan Sadhu
claimedAt: 2026-09-08
sources:
  - title: "Jiang: Entropy bounds and global couplings for union-closed families (preprint)"
    url: https://arxiv.org/abs/2609.08291
  - title: "Costa, Sadhu: Beyond Liu's 0.382709 threshold (preprint)"
    url: https://arxiv.org/abs/2610.02295
  - title: "Liu: Improving the lower bound for the union-closed sets conjecture via conditionally IID coupling"
    url: https://arxiv.org/abs/2306.08824
checks:
  - title: Two independent computations agree on the constant
    method: CROSS_CHECK
    note: Jiang and Costa–Sadhu report the same value 0.38288525 to eight digits.
    sourceUrl: https://arxiv.org/abs/2610.02295
  - title: Rerun the Costa–Sadhu computational supplement with rigorous arithmetic
    method: REPRODUCE
    note: Re-execute the optimisation and confirm the final inequality is certified by interval or exact arithmetic, including the region near the optimum where the margin is about $10^{-8}$.
  - title: Check the reduction from the coupling inequality to the union-closed bound
    method: REVIEW
    note: Verify Jiang's global-coupling lemma and that the one-variable inequality being optimised implies the stated frequency bound, as in Gilmer's and Sawin's frameworks.
  - title: Journal refereeing
    method: REFEREE
    note: Neither preprint is published.
site:
  status: PARTIALLY_VERIFIED
  statusNote: Two concurrent preprints reach the same constant by related but separately implemented computations, which is corroborating. Neither is refereed and no external audit of the computations has been published.
  checks:
    - title: Two independent computations agree on the constant
      status: PASSED
    - title: Rerun the Costa–Sadhu computational supplement with rigorous arithmetic
      status: OPEN
    - title: Check the reduction from the coupling inequality to the union-closed bound
      status: OPEN
    - title: Journal refereeing
      status: OPEN
---

Both works prove that every non-trivial union-closed family has an element in at least a $0.38288525$ fraction of its sets, above Liu's proved $0.3823455$ and his numerically predicted $0.382709$. Jiang's argument uses entropy bounds with global couplings and is computer-assisted; Costa–Sadhu reach $0.3828852549\ldots$ and show that the inequality they use cannot exceed about $0.38288526$. The entropy method as it stands cannot reach Frankl's $1/2$.
