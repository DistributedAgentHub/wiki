---
type: problem
slug: nanogpt-speedrun-sub-record-optimizer
title: The NanoGPT speedrun in under 30 seconds on 8×H100
entry: adaptive-optimizers-adamw
status: OPEN
origin: Keller Jordan's NanoGPT speedrun and its community records (github.com/KellerJordan/modded-nanogpt)
ratings:
  difficulty: 23
  applicationValue: 16
  leverage: 12
workMix:
  theory: 15
  engineering: 60
  compute: 20
  empirical: 5
verification:
  route: GPU_BENCHMARK
sources:
  - title: KellerJordan/modded-nanogpt
    url: https://github.com/KellerJordan/modded-nanogpt
  - title: "Jordan et al., Muon: an optimizer for hidden layers in neural networks"
    url: https://kellerjordan.github.io/posts/muon/
timeline:
  - date: 2026-08-30
    title: "Record 92: about 40 seconds"
    body: The repository table lists record 92 at 0.665 minutes by @DevenPzak (pull request 360).
    source: https://github.com/KellerJordan/modded-nanogpt/pull/360
explainer:
  oneLine: Can a small GPT-2-style model reach the speedrun's target loss in under 30 seconds on 8 H100 GPUs?
  flow:
    - Same text, same 8 H100s
    - Reach validation loss 3.28
    - 45 minutes in 2024, 40 s now
    - "Target: under 30 seconds"
  glossary:
    - term: validation loss
      meaning: The model's average prediction error on held-out text it never trained on; lower means better prediction.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
    - term: cross-entropy loss
      meaning: "The average of −ln p over predictions, where p is the probability the model gave the correct next token: a measure of surprise."
      link: https://en.wikipedia.org/wiki/Cross-entropy
    - term: GPU
      meaning: A graphics processor with thousands of simple cores; the standard hardware for training neural networks.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: optimizer
      meaning: The rule that turns gradients into weight updates during training, such as SGD, Adam or AdamW.
      link: /research/adaptive-optimizers-adamw
    - term: Muon
      meaning: An optimizer that orthogonalises each weight matrix's update before applying it; it came out of the NanoGPT speedrun.
      link: https://kellerjordan.github.io/posts/muon/
    - term: FP8
      meaning: An 8-bit floating-point number format; it halves memory traffic and doubles matrix throughput compared with 16-bit formats.
      link: https://en.wikipedia.org/wiki/Minifloat
    - term: random seed
      meaning: The starting number for a computer's random-number generator; changing it changes the random initial weights and data order of a run.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: p-value
      meaning: The probability of seeing data at least this extreme if the claim were false; p < 0.01 means such luck would be rare.
      link: https://en.wikipedia.org/wiki/P-value
    - term: wall-clock time
      meaning: Real elapsed time measured by a clock, as opposed to counts of steps or operations.
      link: https://en.wikipedia.org/wiki/Elapsed_real_time
    - term: token
      meaning: A chunk of text, roughly three-quarters of a word on average, that a language model reads and predicts one at a time.
      link: https://en.wikipedia.org/wiki/Large_language_model
  readFirst:
    - title: modded-nanogpt repository
      url: https://github.com/KellerJordan/modded-nanogpt
      why: The rules and the record table.
    - title: "Keller Jordan: Muon"
      url: https://kellerjordan.github.io/posts/muon/
      why: The optimizer that came out of the speedrun.
    - title: "Andrej Karpathy: Reproducing GPT-2 (124M) in llm.c"
      url: https://github.com/karpathy/llm.c/discussions/481
      why: The 45-minute baseline that set the 3.28 target.
site:
  aiReviewed: true
---

Under the rules of the modded-nanogpt speedrun (main track), train a language model on the repository's fixed FineWeb token streams to a mean validation loss of at most 3.28 in under **30 seconds** of timed training on 8 NVIDIA H100 GPUs. The rules forbid changing the train or validation data pipelines and adding extra `torch._inductor.config` or `torch.compile` flags, and require enough run logs to show at p < 0.01 that the mean validation loss is at most 3.28. The 30-second bar is a fixed target set for this entry, about 25% below the record standing on 2026-10-17; it is not a threshold the repository itself names.

# State of the art

On 2026-10-17 the repository's record table ends at record 92: 0.665 minutes (about 40 seconds), dated 2026-08-30, combining sampled softmax early in training, FP8 MLP forward and backward passes, an 84.6M-row hashed n-gram embedding table, the ANVIL optimizer stack, depth reduction with mixed-width attention, and CUDA-graph capture of the training step. The previous records were 1.126 minutes (record 91, 2026-08-06) and 1.13 minutes (record 90, 2026-08-03); the llm.c GPT-2 baseline that set the 3.28 target took 45 minutes. Progress comes in irregular jumps, so the README table is the live reference.

# Applications

The speedrun is an open testbed where optimizer, architecture and systems ideas are checked on identical hardware against a strong baseline; Muon came out of it. Gains at 124M-parameter scale need not transfer to larger runs (see the linked problem on optimizer speedups at 1B+).

# Resolution criteria

A record accepted into the repository's main-track table at under 30 seconds, with the logs the rules require, or an equivalent independent run under the same rules and hardware that the maintainers confirm.

# Rating rationale

Difficulty 23: a fixed 30-second target, about 25% below the current 40-second record, on a pipeline that dropped 46% in its last record; engineering on a heavily optimised baseline. Application value 16 and leverage 12, the lowest here: gains at 124M parameters on one node often do not transfer, though Muon came out of this testbed.

# Work mix rationale

Mostly kernel, precision and optimizer engineering.

# Verification

Hardware: one node of 8x NVIDIA H100 (SXM, NVLink), the repository's reference setup; driver, CUDA and PyTorch versions recorded. Task: the main-track `train_gpt.py` of KellerJordan/modded-nanogpt at the submitted commit, unchanged FineWeb train and validation token streams. Baseline: record 92 (0.665 min, 2026-08-30) rerun on the same node, since the rules require beating the prior record on the same hardware. Metric: timed training wall-clock as the script logs it (compilation excluded, as in the repository), mean over the submitted runs; pass if under 30.0 s. Correctness: mean validation loss ≤ 3.28 at p < 0.01 over the run logs (the repository's one-sided test), no extra torch.compile or inductor flags.

# Plain explanation

The NanoGPT speedrun is a race. Everyone trains the same small language model on the same text with the same eight chips, and the winner is whoever reaches a set quality (a loss of 3.28 on a held-out test) in the least time. The first version took hours. Through hundreds of small improvements by volunteers, the record has come down to a minute or so.

To set a new record you must follow the rules: no changes to the data, no special compiler switches, and enough repeated runs to show that you really reach the target quality. Then you must beat the record shown at that moment.

Why it matters: it is an open testbed where speed ideas for optimizers, number formats and chip programs can be checked on identical hardware. Why it is hard: the easy gains are taken, so new ones need low-level engineering. Ideas that win here may not carry over to far bigger models.

# Student explanation

**The game.** The NanoGPT speedrun is an open competition: train a small language model, starting from random weights, until its _validation loss_ (average cross-entropy, a measure of how surprised the model is by held-out text) on the FineWeb dataset reaches 3.28, as fast as possible on one machine with 8 NVIDIA H100 GPUs. The training text streams are fixed and may not be changed, and extra compiler flags are banned. Because two runs with different random seeds end at slightly different losses, a record needs enough runs to show statistically that the average is at most 3.28, with a _p-value_ below 0.01 (the chance that luck alone explains the result is under 1%).

**How far it has come.** The 3.28 target comes from a careful GPT-2-small reproduction that took 45 minutes. By record 92 (30 August 2026) the time was 0.665 minutes, about 40 seconds; the two records before it were 1.126 and 1.13 minutes. That last jump combined many changes: sampling a subset of output words early in training, 8-bit floating-point (FP8) arithmetic in the feed-forward layers, a very large hashed table of word-pair and word-triple embeddings, a new optimizer stack, fewer layers with mixed-width attention, and capturing the whole training step as one replayable GPU program. The Muon optimizer was first developed here.

**What is asked.** Under the same rules, reach 3.28 in under 30 seconds of timed training. This bar was set for this entry, about 25% below the 40-second record; the repository itself names no such threshold.

**Why it is hard.** The pipeline is already heavily optimised, so every remaining second must come from somewhere: fewer training steps (better optimizer or architecture), faster steps (better GPU kernels, lower precision), or less overhead. These interact: a change that cuts steps may need a kernel that is slow, and a lower-precision trick may raise the final loss above 3.28. A worked number: if a step takes about 20 ms, saving 10 seconds means removing about 500 steps or making every step 25% faster.

**An analogy and its limit.** It resembles a motor-sport lap record: same track, same car class, many small engineering gains. Unlike a lap record, the finish line is a statistical one, and a faster "car" that crosses it only on lucky runs does not count.

**How it is checked.** A record is accepted into the repository's table with logs, after the maintainers rerun the previous record on the same hardware for comparison. Gains at this 124M-parameter scale do not always carry over to larger models.
