---
type: problem
slug: autotuner-near-optimal-in-twenty-trials
title: An autotuner that finds configurations within 2% of the best in 20 trials
entry: kernel-autotuning-and-generation
status: OPEN
origin: Cost-model tuners (AutoTVM, Ansor); Triton autotune; learned heuristics in vendor libraries
ratings:
  difficulty: 41
  applicationValue: 39
  leverage: 24
workMix:
  theory: 35
  engineering: 25
  compute: 35
  empirical: 5
verification:
  route: GPU_BENCHMARK
sources:
  - title: Ansor (arXiv preprint)
    url: https://arxiv.org/abs/2006.06762
  - title: TVM (arXiv preprint)
    url: https://arxiv.org/abs/1802.04799
links:
  - to: triton-bf16-gemm-cublas-gap-h100
    kind: BUILDS_ON
    note: A good tuner is the practical route to closing the Triton versus cuBLAS gap per shape.
explainer:
  oneLine: Can a tuner find nearly the fastest GPU settings for a new size after trying only 20?
  flow:
    - Best settings change per size and chip
    - Exhaustive search is too slow
    - Learn a model that predicts fast settings
    - Test on unseen sizes with 20 trials
    - Near-best without long tuning
  glossary:
    - term: autotuning
      meaning: Trying several settings of a kernel (tile sizes, pipeline depth) by timing them, and keeping the fastest.
      link: /research/kernel-autotuning-and-generation
    - term: cost model
      meaning: A cheap formula or learned predictor that estimates how fast a configuration will run without running it.
      link: /research/kernel-autotuning-and-generation
    - term: search space
      meaning: The full set of configurations a tuner may choose from.
      link: https://en.wikipedia.org/wiki/Feasible_region
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: GEMM
      meaning: "General matrix multiply, C = A·B: the operation that takes most of the arithmetic in neural networks."
      link: /research/tiled-gemm-tensor-cores
    - term: attention
      meaning: The transformer operation in which each token takes a weighted average of other tokens, with weights from a softmax of similarity scores.
      link: /research/flashattention
    - term: compiler
      meaning: A program that translates code from one language into machine instructions.
      link: https://en.wikipedia.org/wiki/Compiler
    - term: benchmark
      meaning: A fixed set of tasks and a scoring rule used to compare systems fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
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
  aiReviewed: true
---

Design a tuner for GEMM and attention kernels in a stated search space (tile sizes, pipeline stages, warps, scheduling options, about 10^3 to 10^4 configurations per shape) that, given an unseen shape, returns within 20 timed trials a configuration whose throughput is at least 98% of the best configuration found by exhaustive search, on average over 200 held-out shapes and on the worst 10% of shapes at least 93%, on H100 SXM and a second named GPU.

# State of the art

Learned cost models reduce the number of trials compared with random or grid search in the TVM line of work, and Triton's autotune relies on user-specified candidate lists with a full benchmark of each. Published numbers for sample efficiency depend on search spaces, hardware and shapes, so no cross-system 20-trial figure at 98% is established. Transfer of a tuner trained on one GPU generation to the next is also open.

# Applications

Serving engines see many dynamic shapes; cheap, near-optimal configuration selection removes both tuning latency and the need to ship large tables.

# Resolution criteria

A public tuner, search-space definition and exhaustively tuned ground-truth dataset showing the bounds on the held-out set, reproduced independently.

# Rating rationale

Difficulty 41: sample-efficient tuning that generalises to unseen shapes and a second GPU is an open machine-learning-for-systems question, harder than any single-kernel parity task here (20 to 34). Application value 39: removes tuning latency and shipped tables in serving engines. Leverage 24: benefits several kernel families; few results hinge on it.

# Work mix rationale

A learning and search problem needing exhaustive timing data (compute) and some engineering of the search space.

# Verification

Hardware: H100 SXM 80 GB and one other named GPU (for example A100 80 GB or B200). Kernels: Triton BF16 GEMM and a Triton causal attention forward with the search space published in the harness repo. Ground truth: exhaustive timing of every configuration for 200 held-out shapes (shapes published after tuner freeze). Metric: for each shape, throughput of the tuner's selected configuration divided by the best exhaustive throughput, after at most 20 timed trials (compile time reported separately). Correctness: every candidate must pass the kernel's reference check. Harness: public tuner and evaluation script at a pinned commit.

# Plain explanation

Every GPU program has settings, such as how big a block of data to handle at once, and the best choice changes with the size of the job and the chip. The usual method is to try many choices and time each, which can take minutes or hours for a single new size.

Researchers have built tuners that learn to predict good settings. The question here is a strict test: after seeing a new, unseen size, the tuner may time only 20 candidates, and the best of those must be within 2% of the best of all thousands of possibilities, on average over 200 held-out sizes, and within 7% even for the worst tenth of sizes, on two different kinds of GPU.

The test is hard because what works on one chip often fails to carry over to another, and because compiling each candidate can take longer than running it.

If solved, serving systems that see a stream of new sizes could stop shipping huge tables of settings or pausing to tune. The judging data needs a large one-off effort: timing every candidate for every test size.

# Student explanation

**What is asked.** A fast GPU kernel has settings: tile sizes, how many stages of data are loaded ahead, how many groups of threads share a tile, and the order tiles are visited. The best settings change with the matrix shape and the GPU model. A typical search space has $10^3$ to $10^4$ combinations per shape, and timing one combination means compiling and running it. The problem asks for a **tuner** that, for a shape it has never seen, tries at most 20 settings and returns one whose speed is at least 98% of the best found by trying everything. That is required on average over 200 new shapes, and at least 93% on the worst tenth. It must work for matrix-multiply and attention kernels, on the H100 and a second named GPU.

**Why it is hard.** Kernel speed is a bumpy function of its settings. A tile shape that is 5% faster for one shape may be 20% slower for a neighbouring shape, because of how tiles fill the chip's 132 cores or whether data fits in fast on-chip memory. A smooth guess from nearby points therefore often misses. Calculus offers an analogy: finding the maximum of a function by sampling it. With a smooth function, a few samples and a derivative find the peak. With a jagged one, you can only sample and hope. Searching 20 out of 4000 settings at random hits the top 2% only about one time in three ($1 - 0.98^{20} \approx 0.33$). A good tuner must therefore _predict_ fast settings from experience on other shapes and GPUs, using a **cost model**. The analogy breaks because kernel speed is not truly random: memory traffic and tile counts follow known formulas, which a cost model can exploit.

**State of the art.** TVM's AutoTVM and Ansor use learned cost models to need fewer trials than random or grid search. Triton's autotuner times every configuration on a list the user supplies. Published sample-efficiency numbers depend on the search space, hardware and shapes, so no cross-system figure at 20 trials and 98% exists. Whether a tuner trained on one GPU generation transfers to the next is also open.

**What a solution looks like.** A public tuner, the search-space definition, and a ground-truth dataset in which every configuration was timed for 200 shapes published after the tuner was frozen. The tuner's picks must meet both bounds on both GPUs, and the result must be reproduced independently.
