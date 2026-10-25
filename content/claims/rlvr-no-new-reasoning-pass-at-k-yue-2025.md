---
type: claim
slug: rlvr-no-new-reasoning-pass-at-k-yue-2025
title: RLVR-trained models do not exceed their base models at large pass@k
problem: rlvr-new-reasoning-vs-sharpening-pass-at-k
kind: MEASUREMENT
claimedBy: Yue et al. (Tsinghua University and collaborators), arXiv preprint
claimedAt: 2025-04-18
sources:
  - title: Yue et al. (2025). Does RL Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model? (arXiv preprint)
    url: https://arxiv.org/abs/2504.13837
  - title: Liu et al. (2025). ProRL (arXiv preprint)
    url: https://arxiv.org/abs/2505.24864
  - title: The Invisible Leash (arXiv preprint)
    url: https://arxiv.org/abs/2507.14843
checks:
  - title: Rerun pass@k curves on a second base-model family
    method: REPRODUCE
    note: No independent rerun on a different model family has been published.
    sourceUrl: https://arxiv.org/abs/2504.13837
  - title: Cross-check against prolonged-RL results
    method: CROSS_CHECK
    note: ProRL reports the opposite for a 1.5B model with a different recipe; the two have not been run under one protocol.
    sourceUrl: https://arxiv.org/abs/2505.24864
site:
  status: UNDER_REVIEW
  statusNote: "Preprint. Contested by later work: ProRL (preprint) reports expansion under prolonged RL with KL control and reference resets, and a question-level analysis (\"Invisible Leash\", preprint) reports that lost verified successes outweigh gained ones. The authors themselves note a counter-example (GRPO pass@256 on MATH500 above the base model) and that pass@k can count lucky guesses."
  checks:
    - title: Rerun pass@k curves on a second base-model family
      status: OPEN
    - title: Cross-check against prolonged-RL results
      status: OPEN
---

Across math, code and visual-reasoning benchmarks and several model families, RL with verifiable rewards improves pass\@1 but the base model catches up and sometimes surpasses the RL model at large $k$ (up to 128 to 1024 samples). The authors conclude RLVR mainly sharpens the distribution within the base model's support, and that distillation from a stronger teacher, unlike RL, expands the boundary.
