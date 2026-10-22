---
type: problem
slug: algoperf-self-tuning-beat-schedule-free-adamw
title: A hyperparameter-free training algorithm that beats Schedule-Free AdamW on AlgoPerf
entry: adaptive-optimizers-adamw
status: OPEN
origin: AlgoPerf benchmark (Dahl et al., arXiv:2306.07179) and competition analysis (Kasimbeg et al., arXiv:2502.15015)
ratings:
  difficulty: 42
  applicationValue: 44
  leverage: 22
workMix:
  theory: 25
  engineering: 45
  compute: 20
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Dahl et al., Benchmarking Neural Network Training Algorithms
    url: https://arxiv.org/abs/2306.07179
  - title: "Kasimbeg et al., Accelerating Neural Network Training: An Analysis of the AlgoPerf Competition"
    url: https://arxiv.org/abs/2502.15015
  - title: mlcommons/algorithmic-efficiency
    url: https://github.com/mlcommons/algorithmic-efficiency
timeline:
  - date: 2025-02-20
    title: First competition analysed
    body: Schedule-Free AdamW based submission won the self-tuning ruleset.
    source: https://arxiv.org/abs/2502.15015
explainer:
  oneLine: Can a training method with no tuning at all beat Schedule-Free AdamW on the AlgoPerf v1.0 benchmark?
  flow:
    - AlgoPerf times training to target
    - "Self-tuning: one setting for everything"
    - "v0.5 winner: Schedule-Free AdamW"
    - Beat it when rescored on v1.0
  glossary:
    - term: optimizer
      meaning: The rule that turns gradients into weight updates during training, such as SGD, Adam or AdamW.
      link: /research/adaptive-optimizers-adamw
    - term: AdamW
      meaning: "The default optimizer for large models: Adam's per-weight adaptive steps plus weight decay applied separately."
      link: /research/adaptive-optimizers-adamw
    - term: hyperparameter
      meaning: A setting chosen by people before training, such as the learning rate, rather than learned from data.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
    - term: learning rate
      meaning: The step size used when the training algorithm adjusts the weights; too small is slow, too large is unstable.
      link: https://en.wikipedia.org/wiki/Learning_rate
    - term: benchmark
      meaning: A fixed set of tasks and a scoring rule used to compare methods fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: wall-clock time
      meaning: Real elapsed time measured by a clock, as opposed to counts of steps or operations.
      link: https://en.wikipedia.org/wiki/Elapsed_real_time
    - term: leaderboard
      meaning: A public ranking of submitted methods on a fixed benchmark, scored by the organisers' code.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: gradient descent
      meaning: Training by repeatedly nudging each weight a small step downhill along the derivative of the loss.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: validation loss
      meaning: The model's average prediction error on held-out text it never trained on; lower means better prediction.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
  readFirst:
    - title: "Wikipedia: Stochastic gradient descent"
      url: https://en.wikipedia.org/wiki/Stochastic_gradient_descent
      why: The base method that these optimizers refine.
    - title: AlgoPerf repository
      url: https://github.com/mlcommons/algorithmic-efficiency
      why: Rules, workloads and links to the leaderboard.
    - title: AlgoPerf leaderboard repository
      url: https://github.com/mlcommons/submissions_algorithms
      why: The official scores, including the first competition's results.
site:
  aiReviewed: true
---

AlgoPerf scores training algorithms by how fast they reach fixed validation targets on a set of workloads (image classification, speech recognition, translation, graph and recommendation models) on fixed hardware. In the **self-tuning ruleset** a submission gets no hyperparameter search at all: one configuration must work on every workload, and any adaptation happens inside the timed run. The problem: produce a self-tuning submission whose AlgoPerf benchmark score, computed by the organisers on the current long-term-support version (v1.0), is strictly higher than the score of the Schedule-Free AdamW self-tuning submission scored under the same version, and higher than the best self-tuning entry on the official leaderboard at the time of submission.

# State of the art

The first AlgoPerf competition (benchmark v0.5) received 18 submissions from 10 teams (Kasimbeg et al., ICLR 2025). Distributed Shampoo won the external-tuning ruleset and Schedule-Free AdamW won the self-tuning ruleset. On the v0.5 self-tuning leaderboard Schedule-Free AdamW scored 0.8542 against 0.8194 for the NadamW baseline, a small margin; the other self-tuning entries (sequential NadamW, learned optimizers, AdamG) scored lower than the baseline. The live leaderboard (version 0.6, last updated 2025-03-24) shows no scored self-tuning entries yet, and the benchmark README says the working group is focusing on the self-tuning leaderboard and plans v1.0 self-tuning baselines. Scores are only comparable within one benchmark version.

# Applications

Training algorithms that work without per-task tuning cut the number of full training runs needed to start a new project; the benchmark is the shared yardstick for claims of this kind.

# Resolution criteria

A submission merged and scored by the AlgoPerf working group on the self-tuning leaderboard of v1.0 (or a later version), above the Schedule-Free AdamW entry scored on the same version and above every other self-tuning entry at that time.

# Rating rationale

Difficulty 42: in the first competition the self-tuning winner beat the NadamW baseline by only 0.035, and every other entry scored below it, so a hyperparameter-free method that works across all workloads is genuinely hard. Application value 44: tuning-free training saves whole sweeps. Leverage 22: a benchmark record.

# Work mix rationale

Algorithm design plus careful engineering inside the benchmark rules.

# Verification

Benchmark: AlgoPerf v1.0, self-tuning ruleset, from mlcommons/algorithmic-efficiency at the release tag the organisers score with; hardware 4x NVIDIA A100 40 GB as the v1.0 rules specify. Workloads: all base workloads in the v1.0 rules. Metric: the AlgoPerf benchmark score (normalised area under the performance profile of time-to-target), computed by the scoring code in mlcommons/submissions_algorithms. Baseline: Schedule-Free AdamW (Yang, Defazio, Mishchenko) self-tuning submission rescored on v1.0; the v0.5 numbers (0.8542 vs 0.8194 NadamW) are not comparable across versions. Threshold: strictly higher score; the repetition studies required by the rules (v0.6 and later) show the order holds. Constraint: a single hyperparameter configuration, no workload detection.

# Plain explanation

Choosing settings for training is a chore: each choice needs many trial runs. A tuning-free method would work well straight out of the box on any task.

AlgoPerf is a public contest that tests this fairly. It gives training methods nine kinds of tasks (images, speech, translation and more), the same computers, and a stopwatch: which method gets each task to its target quality fastest? A special section forbids any tuning. In the first contest, in 2024, the winner of that section was a variant of the standard method, AdamW, that does not need a learning-rate schedule.

The open task is to beat that winner's overall score on the leaderboard under the same rules.

Why hard: the method must work across very different tasks with no tuning, and the score rewards fast code as well as good ideas. A newer version of the benchmark has since been released, so the incumbent to beat is the one on the current leaderboard.

# Student explanation

**The yardstick.** Neural networks are trained by an _optimizer_, the rule that turns derivatives of the loss into weight updates (examples: plain gradient descent, Adam, AdamW). Optimizer papers often claim speedups that vanish when the competitor is tuned as carefully. AlgoPerf, run by MLCommons, settles such claims by measuring wall-clock time to reach a fixed validation target on several fixed workloads (image classification, speech recognition, translation, graph and recommendation models) on fixed hardware, 4 NVIDIA A100 GPUs in version 1.0. Times across workloads are combined into one score between 0 and 1 using performance profiles: roughly, the share of workloads on which a method is close to the fastest one.

**Self-tuning.** In the self-tuning ruleset a submission gets no hyperparameter search at all. A _hyperparameter_ is a setting chosen before training, such as the learning rate or how fast it decays. One configuration must work on every workload, and any adaptation must happen inside the timed run. It is like an engine control unit that must run a car, a truck and a motorbike with the same factory settings, adapting only from sensor readings while driving.

**What is known.** The first competition (version 0.5) had 18 submissions from 10 teams. The self-tuning winner was Schedule-Free AdamW, which replaces the usual learning-rate decay schedule with averaging of the weights over time, so no stopping point needs to be fixed in advance. It scored 0.8542 against 0.8194 for the NadamW baseline, a small margin, and every other self-tuning entry scored below the baseline. The live leaderboard (version 0.6) shows no scored self-tuning entries yet, and the organisers plan new self-tuning baselines for v1.0. Scores are only comparable within one benchmark version.

**What is asked.** A hyperparameter-free submission whose v1.0 score, computed by the organisers, is strictly higher than Schedule-Free AdamW's when that is rescored on v1.0, and higher than every other self-tuning entry at the time.

**Why it is hard.** The workloads differ by orders of magnitude in size and in how sensitive they are to the learning rate, so a setting that is fast on one is unstable or slow on another. Adapting inside the run costs time that counts against the score. The engine analogy breaks in one respect: an optimizer can watch its own loss curve and change course, but each probe it makes spends the very time being scored.

**How it is checked.** The submission is merged and run by the AlgoPerf working group on the official hardware, with the repeated runs the rules require.
