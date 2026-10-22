---
type: claim
slug: scalerl-predictable-rl-scaling-2025
title: RL compute for LLMs follows predictable sigmoidal curves that extrapolate to a 100,000 GPU-hour run
problem: llm-rl-compute-scaling-extrapolation
kind: COMPUTATION
claimedBy: Khatri et al., arXiv preprint
claimedAt: 2025-10-15
sources:
  - title: Khatri et al. (2025). The Art of Scaling Reinforcement Learning Compute for LLMs (arXiv preprint)
    url: https://arxiv.org/abs/2510.13786
checks:
  - title: Independent extrapolation test on another base model
    method: REPRODUCE
    note: Needs tens of thousands of GPU-hours.
    sourceUrl: https://arxiv.org/abs/2510.13786
site:
  status: UNVERIFIED
  statusNote: Single preprint from one group; no independent replication has been published.
  checks:
    - title: Independent extrapolation test on another base model
      status: OPEN
---

A systematic study of more than 400,000 GPU-hours reports that stable RL recipes follow sigmoidal compute-to-performance curves from which validation performance of a run scaled to 100,000 GPU-hours was predicted from smaller runs.
