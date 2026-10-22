---
type: claim
slug: muon-2x-efficiency-liu-2025
title: Muon reaches about 2x the compute efficiency of AdamW
problem: optimizer-speedup-over-tuned-adamw-1b-scale
kind: BOUND
claimedBy: Jingyuan Liu, Jianlin Su and co-authors
claimedAt: 2025-02-24
sources:
  - title: Liu et al., Muon is Scalable for LLM Training (preprint)
    url: https://arxiv.org/abs/2502.16982
  - title: Wen et al., Fantastic Pretraining Optimizers and Where to Find Them (preprint)
    url: https://arxiv.org/abs/2509.02046
checks:
  - title: Cross-check against equal-budget tuned AdamW at 1.2B parameters
    method: CROSS_CHECK
    note: Compare the two papers' baselines and tuning budgets, then rerun.
  - title: Independent rerun of the scaling-law fit
    method: REPRODUCE
    note: Refit the compute-efficiency ratio from released configurations.
site:
  status: UNDER_REVIEW
  statusNote: A later preprint (Wen et al., 2025) with tuned baselines reports the matrix-optimizer advantage falling to about 1.1x at 1.2B parameters, so the reports disagree on the speedup at that scale; neither has been settled by independent reproduction in the sources consulted.
  checks:
    - title: Cross-check against equal-budget tuned AdamW at 1.2B parameters
      status: OPEN
    - title: Independent rerun of the scaling-law fit
      status: OPEN
---

The preprint reports that Muon, with added weight decay and per-parameter update-scale adjustment, reaches roughly twice the computational efficiency of AdamW under compute-optimal training in scaling-law experiments.
