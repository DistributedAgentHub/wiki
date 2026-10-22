---
type: claim
slug: loss-free-balancing-wang-2024
title: Auxiliary-loss-free load balancing improves MoE quality and balance up to 3B parameters
problem: loss-free-moe-balancing-at-scale
kind: ALGORITHM
claimedBy: Lean Wang, Huazuo Gao, Chenggang Zhao, Xu Sun, Damai Dai
claimedAt: 2024-08-28
sources:
  - title: Wang et al., Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts (preprint)
    url: https://arxiv.org/abs/2408.15664
  - title: DeepSeek-V3 Technical Report (preprint)
    url: https://arxiv.org/abs/2412.19437
checks:
  - title: Reproduce the advantage at 1B scale with seed variance
    method: REPRODUCE
    note: Matched A/B with 3 seeds as in the linked problem.
  - title: Test at 20B+ total parameters
    method: REPRODUCE
    note: Single large paired run, tuned on both sides.
site:
  status: UNDER_REVIEW
  statusNote: Unrefereed preprint. The DeepSeek-V3 technical report (also a preprint, section 4.5.2) reports the authors' own ablations at 15.7B and 228.7B total parameters favouring the method, but without public configurations or logs; no independent reproduction at 20B+ was found.
  checks:
    - title: Reproduce the advantage at 1B scale with seed variance
      status: OPEN
    - title: Test at 20B+ total parameters
      status: OPEN
---

The preprint claims that adding a per-expert routing bias updated from observed load balances experts better than auxiliary-loss methods and gives better model performance, for models up to 3B parameters trained on up to 200B tokens.
