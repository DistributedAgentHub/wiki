---
type: claim
slug: dyt-normalization-free-transformers-zhu-2025
title: Dynamic Tanh replaces normalization layers in transformers with matching performance
problem: normalization-free-transformer-llm-parity
kind: IMPLEMENTATION
claimedBy: Jiachen Zhu, Xinlei Chen, Kaiming He, Yann LeCun, Zhuang Liu
claimedAt: 2025-03-13
sources:
  - title: Zhu et al., Transformers without Normalization
    url: https://arxiv.org/abs/2503.10622
checks:
  - title: Reproduce parity at 7B parameters and 1T tokens
    method: REPRODUCE
    note: Paired runs against tuned RMSNorm as specified in the linked problem.
site:
  status: UNDER_REVIEW
  statusNote: Peer-reviewed (CVPR 2025). Language results reach 70B parameters but only 200B tokens per run; no independent reproduction at 7B or more, and no run at 1T tokens or more, was found. Small-scale follow-ups (Derf, arXiv:2512.10938) put DyT slightly behind LayerNorm on GPT-2 124M.
  checks:
    - title: Reproduce parity at 7B parameters and 1T tokens
      status: OPEN
---

The paper claims that an element-wise tanh with a learnable scale, used in place of each normalization layer, lets transformers match or exceed their normalized counterparts across vision, self-supervised, generative and language settings; for LLaMA language models (7B to 70B parameters, 200B tokens each) the initial tanh scale was tuned per model size.
