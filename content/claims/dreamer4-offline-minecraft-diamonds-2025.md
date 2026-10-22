---
type: claim
slug: dreamer4-offline-minecraft-diamonds-2025
title: An agent trained only inside a learned world model from offline data obtains Minecraft diamonds
problem: dreamer-offline-minecraft-diamond-reproduction
kind: IMPLEMENTATION
claimedBy: Hafner et al. (Dreamer 4), arXiv preprint
claimedAt: 2025-09-29
sources:
  - title: Hafner et al. (2025). Training Agents Inside of Scalable World Models (arXiv preprint)
    url: https://arxiv.org/abs/2509.24527
checks:
  - title: Independent training run and 3,000-episode evaluation
    method: REPRODUCE
    note: Original used 256 to 1,024 TPU-v5p devices.
    sourceUrl: https://arxiv.org/abs/2509.24527
site:
  status: UNVERIFIED
  statusNote: Preprint; no independent reproduction has been published and there is no official code release (unofficial reimplementations exist).
  checks:
    - title: Independent training run and 3,000-episode evaluation
      status: OPEN
---

Dreamer 4 is reported as the first agent to obtain diamonds in Minecraft from offline data alone, with no environment interaction, in 0.7% of 60-minute evaluation episodes, trained on about 2,541 hours of the VPT contractor dataset.
