---
type: entry
slug: kernel-autotuning-and-generation
title: Kernel autotuning and automated kernel generation
field: kernel-compilers
kind: ALGORITHM
status: ACTIVE
summary: Searching tile sizes, pipeline depths and schedules by measurement or learned cost models, and now asking language models to write kernels, scored against hand-written baselines.
reliedOn: Almost every fast kernel ships with tuned parameters per shape and GPU; search-based tuning (TVM, Ansor, Triton autotune) and the new LLM kernel-writing benchmarks set how much expert time kernels need.
dependsOn:
  - cuda-memory-hierarchy-roofline
  - triton-language
references:
  - title: "Ouyang et al.: KernelBench: Can LLMs Write Efficient GPU Kernels? (arXiv preprint)"
    url: https://arxiv.org/abs/2502.10517
    kind: paper
  - title: "Zheng et al.: Ansor: Generating High-Performance Tensor Programs for Deep Learning (OSDI 2020; arXiv)"
    url: https://arxiv.org/abs/2006.06762
    kind: paper
  - title: "Chen et al.: TVM: An Automated End-to-End Optimizing Compiler for Deep Learning (OSDI 2018; arXiv)"
    url: https://arxiv.org/abs/1802.04799
    kind: paper
  - title: Triton autotuning API documentation
    url: https://triton-lang.org/main/python-api/generated/triton.autotune.html
    kind: docs
  - title: KernelBench repository
    url: https://github.com/ScalingIntelligence/KernelBench
    kind: code
timeline:
  - date: 2018-02-01
    title: TVM
    body: End-to-end optimising compiler with learned cost-model tuning for deep learning (arXiv, February 2018).
    source: https://arxiv.org/abs/1802.04799
  - date: 2020-06-01
    title: Ansor
    body: Hierarchical search space plus evolutionary search and learned cost model (arXiv, June 2020).
    source: https://arxiv.org/abs/2006.06762
  - date: 2025-02-01
    title: KernelBench
    body: A 250-task benchmark and the fast_p metric for LLM-written GPU kernels (arXiv preprint, February 2025).
    source: https://arxiv.org/abs/2502.10517
explainer:
  oneLine: Finding the fastest settings for a GPU program by trying many, and teaching AI to write such programs.
  flow:
    - Best settings differ per size and chip
    - Try settings and time each one
    - Learned models predict fast settings
    - AI models write programs for a benchmark
    - Checks stop cheating
  glossary:
    - term: autotuning
      meaning: Trying many settings automatically, timing each, and keeping the fastest.
      link: https://en.wikipedia.org/wiki/Hyperparameter_optimization
    - term: kernel (GPU)
      meaning: A small program that runs on the GPU, started many times in parallel on different pieces of data.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: compiler
      meaning: A program that translates code written by people into instructions a chip can run.
      link: https://en.wikipedia.org/wiki/Compiler
    - term: benchmark
      meaning: A fixed test that measures how fast or how good something is, so different systems can be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: evolutionary search
      meaning: Trying many candidates, keeping the best, and mutating them to make new candidates.
      link: https://en.wikipedia.org/wiki/Evolutionary_algorithm
    - term: reward hacking
      meaning: When a system finds a way to score well on a test without doing the intended task.
      link: https://en.wikipedia.org/wiki/Reward_hacking
    - term: large language model
      meaning: An AI model trained on huge amounts of text to predict and generate language.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: PyTorch
      meaning: The most widely used open-source library for building and training AI models.
      link: /research/pytorch
    - term: tiling
      meaning: Splitting a large matrix computation into small blocks that fit in fast on-chip memory, so each loaded number is reused many times.
      link: /research/tiled-gemm-tensor-cores
    - term: profiler
      meaning: A tool that measures where a program spends its time and which hardware resources it uses.
      link: https://en.wikipedia.org/wiki/Profiling_(computer_programming)
    - term: speedup
      meaning: The ratio of the old running time to the new one; a speedup of 2 means twice as fast.
      link: https://en.wikipedia.org/wiki/Speedup
  readFirst:
    - title: "KernelBench: Can LLMs Write Efficient GPU Kernels? (arXiv preprint)"
      url: https://arxiv.org/abs/2502.10517
      why: The benchmark paper; the intro and metric section are accessible.
    - title: Triton documentation and tutorials
      url: https://triton-lang.org/main/index.html
      why: Official introduction with runnable examples.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
site:
  published: true
  aiReviewed: true
---

## Why tuning exists

For a given operator the best tile shape, number of pipeline stages, warps per block and loop order depend on tensor sizes, data types and the GPU model. Rules of thumb get close, but the fastest configuration for a shape can differ from a neighbour's, and the search space is large. Vendor libraries use heuristics and large tables; open stacks tune by measurement.

## Search-based approaches

- **Exhaustive or grid autotuning.** Triton's `@triton.autotune` decorator takes a list of configurations and a key (the argument values that trigger re-tuning), benchmarks each, and caches the winner. Simple and reliable, but each new shape costs compile and run time.
- **Learned cost models and search.** TVM's AutoTVM and Ansor generate candidate programs from a hierarchical search space and use evolutionary search guided by a learned cost model, reporting speedups over earlier frameworks on CPUs and GPUs (Ansor abstract: up to 1.7x on NVIDIA GPU against the state of the art at the time).
- **Heuristic selection in libraries.** cuBLAS and CUTLASS profilers rank precompiled kernels per problem.

Open questions are sample efficiency (how few timed runs find a near-best configuration), transfer across shapes and GPUs, and the cost of compilation, which often dominates at the dynamic shapes seen in serving.

## Generating kernels with language models

KernelBench (Ouyang et al., 2025) asks language models to write GPU kernels for 250 PyTorch workloads and scores them with **fast\_p**: the fraction of generated kernels that are correct and at least a factor p faster than the PyTorch baseline. The authors report that frontier reasoning models matched the baseline in under 20% of cases out of the box, and that execution and profiler feedback in an iterative loop improves results. By mid-2026 the picture had changed: KernelBench-Verified (Zhang et al., 2026), which adds a TF32 baseline and hidden test distributions to catch kernels that hard-code shortcuts, reports single-shot best-of-5 fast_1 of up to 52% on Level 1 and 65% on Level 2 for frontier models on H200, but at most 38% on Level 3 (whole architectures). Because correctness and speed can be checked mechanically, kernel writing is one of the few areas where agents can be evaluated without human judgement, and where reward hacking (cached results, skipped work, benchmarks that miss edge cases) must be guarded against.

## What depends on it

Compilers that auto-tune determine whether researchers can write a new operator in a day and still get hardware-level speed; any agent that proposes kernels needs a trusted harness and baselines like these.

# Plain explanation

The same GPU program can run at very different speeds depending on settings: how big a block of data to handle at once, how many workers to use, how far ahead to fetch. The best settings change with the size of the data and with the chip model. Nobody can work them out by thought alone.

The usual solution is autotuning: the computer tries a list of settings, times each one, and keeps the winner. This works but takes time, and with many sizes the cost adds up. Research groups have built smarter versions that learn to predict which settings will be fast, so only a handful need to be timed. The tools TVM and Ansor are well-known examples.

A newer question is whether AI models can write the GPU programs themselves. A benchmark called KernelBench gives models 250 tasks written in PyTorch and checks whether the program the model writes gives the right answer and runs faster than the standard one. Its authors reported that even the best models, used without extra help, matched the standard speed in fewer than one case in five, and that results improved when the model could run its code and see timing feedback.

Testing such work is tricky. A system can appear fast by cheating, for example by remembering previous answers or skipping part of the job. So careful checks matter as much as clever generation. The analogy of a mechanic tuning an engine fits, but here the engine is different for every job.

# Student explanation

**Why tuning exists.** A GPU kernel has knobs: the tile size (how big a block of the matrix each group of threads handles), how many tiles to load ahead of time, and how many threads work on each tile. The best setting depends on the matrix sizes, the number format and the GPU model, and a setting that is best for a 4096 × 4096 multiply can be poor for a 1 × 4096 one.

**A worked count.** Suppose there are 3 tile heights, 3 tile widths, 4 tile depths, 4 load-ahead depths and 3 thread counts. That gives $3 \cdot 3 \cdot 4 \cdot 4 \cdot 3 = 432$ configurations. If each took half a second to compile and a tenth of a second to time, trying them all would take about four minutes, for one shape on one GPU. A serving system that meets hundreds of shapes cannot afford that while users wait.

**Approaches.**

- _Grid search._ Triton's `@triton.autotune` decorator times each configuration in a list the programmer supplies and caches the winner for each shape. Reliable, but every new shape costs compile and run time.
- _Learned cost models._ TVM and Ansor generate candidate programs, use a model trained on earlier measurements to predict which will be fast, and time only the promising ones, improving them by evolutionary search (keep good candidates, change them slightly, repeat). Ansor reports up to 1.7× speedups on NVIDIA GPUs over the best systems of its time.
- _Vendor heuristics._ cuBLAS and CUTLASS choose among precompiled kernels using rules and tables.

Analogy: choosing bicycle gears by test-riding every combination on the race course, versus asking an experienced coach to guess. The coach (the cost model) is far quicker, but can be wrong on an unfamiliar course (a new GPU).

**Language models writing kernels.** KernelBench (Ouyang et al., 2025) gives a language model 250 PyTorch programs and asks it to write faster GPU kernels. Its score is
$\mathrm{fast}_p = \frac{\text{tasks whose kernel is correct and more than } p \text{ times faster than PyTorch}}{\text{all tasks}}.$
With $p = 1$, any correct kernel that is not slower counts. The paper reports that frontier models matched the PyTorch baseline in under 20% of tasks out of the box, and did better when shown compiler errors, test results and profiler output and allowed to try again.

**Why it is checkable, and the catch.** Correctness (compare the outputs with a reference) and speed (time it) are measured by a program, so no human judge is needed. That invites reward hacking: a generator may learn to pass weak tests, for example by returning cached answers or by timing incorrectly. Test harnesses therefore have to be designed as if an adversary were trying to fool them.

**Limits.** No method yet predicts a kernel's speed reliably without running it, tuned settings transfer imperfectly to new shapes and GPUs, and compile time often dominates the search.
