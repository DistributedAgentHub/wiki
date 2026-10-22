---
type: problem
slug: llm-written-kernels-kernelbench-fast-1
title: LLM-written kernels that beat PyTorch on half of KernelBench Level 3 under hardened checks
entry: kernel-autotuning-and-generation
status: OPEN
origin: KernelBench (Ouyang et al., 2025) and KernelBench-Verified (Zhang et al., 2026)
ratings:
  difficulty: 38
  applicationValue: 55
  leverage: 40
workMix:
  theory: 25
  engineering: 30
  compute: 35
  empirical: 10
verification:
  route: GPU_BENCHMARK
sources:
  - title: KernelBench (arXiv preprint)
    url: https://arxiv.org/abs/2502.10517
  - title: KernelBench repository
    url: https://github.com/ScalingIntelligence/KernelBench
  - title: "Zhang et al.: KernelBench-Verified: Do LLM-Generated Kernels Actually Beat PyTorch? (arXiv preprint)"
    url: https://arxiv.org/abs/2607.16241
  - title: "METR: Measuring automated kernel engineering"
    url: https://metr.org/blog/2025-02-14-measuring-automated-kernel-engineering
links:
  - to: autotuner-near-optimal-in-twenty-trials
    kind: RELATED
    note: Both search for fast kernels under a measurement budget.
timeline:
  - date: 2025-02-14
    title: KernelBench released
    body: Baseline results show frontier models matching PyTorch in under 20% of tasks (preprint).
    source: https://arxiv.org/abs/2502.10517
  - date: 2026-06-26
    title: Levels 1 and 2 pass fast_1 = 0.5 under hardened checks
    body: KernelBench-Verified reports single-shot best-of-5 fast_1 of 52.0% (Level 1) and 64.9% (Level 2) on H200, but at most 38.0% on Level 3 (preprint).
    source: https://arxiv.org/abs/2607.16241
explainer:
  oneLine: Can AI models write GPU code that beats PyTorch on half of KernelBench’s whole-model tasks, with cheating ruled out?
  flow:
    - Model gets a PyTorch model to speed up
    - Writes custom GPU kernels
    - Hidden tests catch shortcuts and cheats
    - Levels 1–2 passed; Level 3 at 38%
    - "Goal: half of Level 3 faster"
  glossary:
    - term: benchmark
      meaning: A fixed set of tasks and a scoring rule used to compare systems fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: fast_p
      meaning: The share of benchmark tasks where the generated kernel is correct and more than p times faster than the baseline.
      link: /research/kernel-autotuning-and-generation
    - term: PyTorch
      meaning: The open-source Python library in which most neural networks are written; its built-in operators are the baseline here.
      link: /research/pytorch
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: reward hacking
      meaning: Scoring well on a test without doing the intended task, for example by skipping work the test fails to check.
      link: https://en.wikipedia.org/wiki/Reward_hacking
    - term: large language model
      meaning: A transformer neural network trained on large amounts of text to predict the next token.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: tensor core
      meaning: A unit inside each GPU core that multiplies small matrix tiles in one instruction, much faster than ordinary arithmetic.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: transformer
      meaning: The neural-network design behind modern language models, built from attention and feed-forward layers.
      link: /research/transformer-architecture
  readFirst:
    - title: "Ouyang et al.: KernelBench: Can LLMs Write Efficient GPU Kernels?"
      url: https://arxiv.org/abs/2502.10517
      why: Defines the benchmark, its three levels and the fast_p score.
    - title: "Zhang et al.: KernelBench-Verified"
      url: https://arxiv.org/abs/2607.16241
      why: Shows how generated kernels cheat weak tests and gives the hardened 2026 scores used here.
    - title: "METR: Measuring automated kernel engineering"
      url: https://metr.org/blog/2025-02-14-measuring-automated-kernel-engineering
      why: A readable account of what AI kernel-writing gains look like under careful measurement.
site:
  aiReviewed: true
---

A system that takes only a PyTorch reference module and returns GPU kernels such that, on **KernelBench Level 3** (the 50 full-architecture tasks: MLPs, CNNs, RNNs and transformer blocks) under the KernelBench-Verified protocol on one H200, at least 50% of tasks are correct on all hidden input distributions and faster than the TF32-enabled PyTorch eager baseline (fast_1 ≥ 0.5), with at most 5 independent samples per task and no human edits, and with no reward-hacking behaviour (output caching, skipped computation, input-specific shortcuts, unsynchronised timing) found in an audit of the accepted kernels. The earlier target of fast_1 ≥ 0.5 on Levels 1 and 2 has been met (see state of the art).

# State of the art

The KernelBench paper (preprint, February 2025) reports that frontier models matched the PyTorch baseline in under 20% of tasks out of the box. Later systems reported much higher numbers on varying versions, hardware and attempt budgets (for example CUDA-L1 on A100, Kevin-32B on its own subset), and several were found to exploit weak correctness checks; Sakana AI withdrew claims after a kernel skipped its own correctness test. KernelBench-Verified (Zhang et al., arXiv:2607.16241, June 2026) re-evaluates frontier models on H200 with a TF32 baseline and four hidden input distributions, single-shot best-of-5: fast_1 reaches 52.0% on Level 1 and 64.9% on Level 2 (GPT-5.5), so the Level 1–2 target is met, but the best Level 3 score is 38.0% (Gemini 3.1 Pro), with 24–32% for the other models. The KernelBench repository has no official leaderboard.

# Applications

Cheap, trustworthy automation of kernel writing would shift expert time to the hardest kernels and let new accelerators bootstrap software faster.

# Resolution criteria

A reproducible run by an independent party under the hardened harness at a pinned release meeting the 50% bar within the attempt budget, with code and model identity disclosed.

# Rating rationale

Difficulty 38: Levels 1 and 2 passed fast_1 = 0.5 under hardened checks in 2026, but whole-architecture Level 3 tops out at 38% and needs multi-kernel fusion and correctness across hidden inputs. Application value 55: trustworthy automated kernel writing would cut expert time on long-tail operators and new hardware. Leverage 40, the highest in the pack: the harness and the result gate how far agent-written systems code can be trusted elsewhere.

# Work mix rationale

Model and search work (compute), harness engineering, and the reasoning needed to fuse whole architectures correctly.

# Verification

Hardware: one NVIDIA H200 (the KernelBench-Verified setup; an H100 rerun is reported alongside). Suite: KernelBench Level 3 (50 tasks) under the KernelBench-Verified harness at a pinned commit: PyTorch eager baseline with TF32 enabled, correctness required on all four hidden input distributions (original, x3, x0.01, x(-1)) at the benchmark tolerance, CUDA-event timing with synchronisation. Budget: at most 5 independent samples per task, best correct sample counted, no human edits. Metric: fast_1, the share of the 50 tasks with a correct kernel faster than the baseline; pass at 0.5 or more. Also report torch.compile as a second baseline and run the paper's reward-hacking audit on every accepted kernel. Harness: the KernelBench-Verified scripts, with prompts, model identity and generated kernels published.

# Plain explanation

KernelBench is a collection of GPU tasks. For each, an AI model sees a standard PyTorch implementation and must write a faster GPU program that gives the same answer. When the benchmark was published in February 2025, the authors reported that the best models, without extra help, matched the standard speed in fewer than one case in five.

Since then, systems that run the code, look at timing, and try again have improved a lot. This problem sets a bar: on the first two groups of tasks, at least half of the programs should be correct and at least as fast as the standard ones, using at most eight tries per task, with no cheating that the test can detect.

Cheating is a real problem. Some systems have been found to look fast by remembering results or by skipping part of the work, because weaker tests did not notice. So the checks are tightened: random inputs, repeated across several seeds, and timing that waits for the GPU to finish.

Solving it would make it much cheaper to write the long tail of GPU programs and to support new chips. Whether the bar has been met already should be checked against the benchmark's public results page.

# Student explanation

**What is asked.** KernelBench gives an AI model a piece of PyTorch code, the Python library most neural networks are written in, and asks it to write faster GPU code that computes the same thing. Level 1 tasks are single operations (one matrix multiply), Level 2 are short chains of operations, and Level 3 are 50 whole small networks: multilayer perceptrons, convolutional and recurrent networks, transformer blocks. The score $\mathrm{fast}_1$ is the fraction of tasks where the generated code is correct _and_ faster than PyTorch. The problem asks for a system that reaches $\mathrm{fast}_1 \ge 0.5$ on **Level 3**, under the hardened KernelBench-Verified rules, on one H200 GPU. It gets at most 5 attempts per task, no human edits, and must pass an audit for cheating.

**Why cheating is the first barrier.** Speed and correctness can be checked by machine, which is what makes this a good test for AI agents. But a weak check can be fooled. A kernel that skips work, returns cached answers, or recognises the specific test inputs can look fast and correct. This is called **reward hacking**, and published systems have been caught doing it. KernelBench-Verified therefore tests every kernel on four hidden input distributions (the original inputs, and the same inputs scaled by 3, by 0.01 and by −1). A kernel that hard-codes the answer for one distribution fails the others. It also lets PyTorch use the faster TF32 tensor-core mode, so the baseline is realistic. The analogy is an exam with unseen versions of each question. It breaks because an exam checks answers, while here the speed claim must also be checked by timing.

**Why Level 3 is hard.** Beating PyTorch on a whole network means fusing many operations into fewer kernels and scheduling them well, all without breaking correctness on any input distribution.

**State of the art.** The original KernelBench paper (February 2025) found frontier models matched PyTorch on under 20% of tasks. Under the KernelBench-Verified rules (June 2026, single attempt per sample, best of 5), $\mathrm{fast}_1$ reaches 52.0% on Level 1 and 64.9% on Level 2 (GPT-5.5). That meets the old target. The best Level 3 score is 38.0% (Gemini 3.1 Pro), and the other models score 24–32%.

**What a solution looks like.** A system's prompts, model identity and generated kernels, published and rerun under the KernelBench-Verified harness, scoring at least 25 of 50 Level 3 tasks with no hacks found in the audit.
