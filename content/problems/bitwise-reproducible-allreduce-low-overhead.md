---
type: problem
slug: bitwise-reproducible-allreduce-low-overhead
title: A bitwise-reproducible all-reduce independent of topology with under 5% overhead
entry: nccl-collectives-all-reduce
status: OPEN
origin: Non-associativity of floating-point addition in collective reductions
ratings:
  difficulty: 39
  applicationValue: 37
  leverage: 31
workMix:
  theory: 30
  engineering: 45
  compute: 10
  empirical: 15
verification:
  route: GPU_BENCHMARK
sources:
  - title: NCCL user guide
    url: https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/index.html
  - title: "Zhang et al.: Deterministic Inference across Tensor Parallel Sizes That Eliminates Training-Inference Mismatch (arXiv preprint)"
    url: https://arxiv.org/abs/2511.17826
  - title: "Donaghy et al.: OPEN-1B: A Fully Auditable Training Run (arXiv preprint)"
    url: https://arxiv.org/abs/2609.17380
timeline:
  - date: 2025-11-21
    title: Tree all-reduce for TP-invariant inference
    body: A fixed binary-tree all-reduce makes outputs bitwise identical across tensor-parallel sizes (preprint).
    source: https://arxiv.org/abs/2511.17826
explainer:
  oneLine: Can GPUs add up numbers in a way that always gives exactly the same bits, without slowing down?
  flow:
    - Rounding makes grouping change results
    - Different patterns give different bits
    - Large runs cannot be restarted exactly
    - Fix the order or add exactly
    - Same bits, within 5% of NCCL speed
  glossary:
    - term: all-reduce
      meaning: A collective operation that sums a tensor across all GPUs and leaves the full sum on every GPU.
      link: /research/nccl-collectives-all-reduce
    - term: reduce-scatter
      meaning: A collective operation that sums a tensor across GPUs and leaves each GPU with one slice of the sum.
      link: /research/nccl-collectives-all-reduce
    - term: associativity
      meaning: The rule (a+b)+c = a+(b+c); exact for real numbers but not for rounded floating-point numbers.
      link: https://en.wikipedia.org/wiki/Associative_property
    - term: rounding error
      meaning: The difference between a true value and the nearest number the format can store.
      link: https://en.wikipedia.org/wiki/Round-off_error
    - term: floating point
      meaning: "Scientific notation in binary: a sign, a fraction (mantissa) and an exponent."
      link: https://en.wikipedia.org/wiki/Floating-point_arithmetic
    - term: NCCL
      meaning: NVIDIA's library of collective operations between GPUs, the standard baseline.
      link: /research/nccl-collectives-all-reduce
    - term: reproducibility
      meaning: Getting the same result when the same computation is run again.
      link: https://en.wikipedia.org/wiki/Reproducibility
    - term: memory bandwidth
      meaning: How many bytes per second can move between memory and the processor.
      link: https://en.wikipedia.org/wiki/Bandwidth_(computing)
    - term: NVLink
      meaning: NVIDIA's high-speed link between GPUs inside one server.
      link: https://en.wikipedia.org/wiki/NVLink
  readFirst:
    - title: Floating-point arithmetic (Wikipedia)
      url: https://en.wikipedia.org/wiki/Floating-point_arithmetic
      why: Background on how computers store non-whole numbers.
    - title: Bringing HPC Techniques to Deep Learning (Andrew Gibiansky)
      url: https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce/
      why: Clear walk-through of ring all-reduce with diagrams.
    - title: Collective operation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Collective_operation
      why: Definitions of broadcast, reduce, all-reduce and friends.
site:
  aiReviewed: true
---

Design and implement an all-reduce (and reduce-scatter) whose output is bitwise identical across runs, across ring versus tree algorithm choices, and across different rank-to-GPU placements on the same node, for BF16 and FP32 sums, with throughput within 5% of NCCL's default for messages from 1 MB to 1 GB on 8x H100.

# State of the art

Floating-point addition is not associative, so the result of a reduction depends on the order in which partial sums are combined. For a fixed NCCL configuration, a given algorithm and rank order generally produce a fixed order, but different algorithms, protocols, rank counts or topologies give different bits, and library documentation notes that results are not guaranteed to match across configurations. NCCL offers no topology-independent deterministic mode. Order-independent summation schemes exist (higher-precision or exactly-rounded accumulation). Two recent systems fix the reduction order instead: Zhang et al. (arXiv:2511.17826) make LLM inference bitwise identical across tensor-parallel sizes with a fixed binary-tree all-reduce written in Triton, and OPEN-1B (arXiv:2609.17380) makes a training run bitwise reproducible across heterogeneous hardware with a fixed-order local sum after an all-to-all. Neither reports bus bandwidth against NCCL across 1 MB to 1 GB, so the cost of determinism at training-scale message sizes is not established.

# Applications

Debugging, regression testing and exact restart of large training runs are easier when parallel configuration changes do not change the numerics.

# Resolution criteria

Public code and a test suite showing bit equality across the listed configurations and overhead under the bound, reproduced independently.

# Rating rationale

Difficulty 39: fixed-order tree reductions already give bitwise determinism (TP-invariant inference, OPEN-1B), but doing it at bandwidth-optimal speed across 1 MB to 1 GB pulls numerics and systems design together. Application value 37: exact restarts, debugging, auditable training and removing train-inference mismatch in RL, not raw speed. Leverage 31: reproducible and auditable training builds on it.

# Work mix rationale

Numerics research on summation order combined with systems engineering.

# Verification

Hardware: one node with 8x H100 SXM 80 GB. Operation: sum all-reduce and reduce-scatter, BF16 and FP32, sizes 1 MB to 1 GB (powers of 4), random normal inputs and adversarial inputs with mixed magnitudes. Reproducibility test: outputs bitwise equal across 100 repeated runs, across NCCL_ALGO in {Ring, Tree} for the baseline (to show it differs), and across at least 5 random permutations of rank-to-GPU assignment, for the candidate. Baseline: NCCL latest stable, pinned, default settings, measured with nccl-tests. Metric: bus bandwidth, median of 100 iterations; pass if at least 95% of NCCL's at every size. Harness: public script and test suite at a pinned commit.

# Plain explanation

Adding decimals on a computer is not quite like adding on paper. Because each number is stored with limited digits, adding a, then b, then c can give a slightly different result than adding c, then b, then a. Most of the time this does not matter. But when a large training run is spread across many GPUs, the order in which partial sums are combined depends on how many GPUs there are, how they are wired and which pattern the library picks, so the same training can give slightly different results on different set-ups.

That makes bugs hard to find and exact restarts impossible. The problem asks for a way of adding across eight GPUs that gives exactly identical results, bit for bit, however the GPUs are arranged and whichever pattern is used, and yet runs within 5% of the standard library's speed for messages from 1 megabyte to 1 gigabyte.

The tension is that fixing the order of additions can force steps that the speed-optimised patterns avoid, and adding with extra precision costs time.

Solving it would make debugging and testing of large runs easier. It would not make a model better.

# Student explanation

**What is asked.** When many GPUs train one model, they repeatedly add up their results with an **all-reduce**: every GPU contributes a tensor and receives the sum. Floating-point addition is not associative. $(a + b) + c$ can differ from $a + (b + c)$ in the last bits, because each addition rounds. So the sum's exact bits depend on the order in which partial sums are combined, and that order changes with the algorithm, the number of GPUs and how they are wired. The problem asks for an all-reduce (and reduce-scatter) whose output is **bitwise identical** across repeated runs, across ring versus tree algorithms, and across different assignments of ranks to GPUs. It must handle BF16 and FP32 sums, and run within 5% of NCCL's speed for messages from 1 MB to 1 GB on 8 H100s.

**A worked example.** In BF16 (8 significant bits), take $a = 256$, $b = 1$, $c = 1$. Adding left to right, $256 + 1 = 257$ is not representable (neighbours are 256 and 258) and rounds back to 256. Then $256 + 1$ rounds to 256 again. Adding $b + c$ first gives 2, and $256 + 2 = 258$ is exact. Same numbers, different answers. The analogy is a cashier who drops pennies when the total is large. The result depends on whether the pennies are counted first. It breaks because the GPUs can be forced to count in one agreed order, which costs coordination.

**Why it is hard.** Two routes exist. One fixes the order, for example a binary tree that always pairs the same partial sums. But the fastest all-reduce algorithms (rings) choose their order to match the network, so fixing it may waste bandwidth. The other route adds in a way whose result does not depend on order, such as wider or exactly rounded accumulators. Those cost extra memory traffic.

**State of the art.** NCCL, NVIDIA's standard library, offers no topology-independent deterministic mode. Zhang et al. make language-model inference bitwise identical across different numbers of GPUs, using a fixed binary-tree all-reduce written in Triton. OPEN-1B makes a whole training run bitwise reproducible across different hardware, using a fixed-order sum after an all-to-all exchange. Neither reports bandwidth against NCCL across 1 MB to 1 GB, so the cost of determinism at training-scale message sizes is unknown.

**What a solution looks like.** Public code and a test suite showing bit-for-bit equality across all listed configurations, and at least 95% of NCCL's bandwidth at every size, reproduced independently.
