---
type: entry
slug: cuda-memory-hierarchy-roofline
title: The GPU memory hierarchy and the roofline model
field: gemm-attention-kernels
kind: HARDWARE
status: MATURE
summary: How registers, shared memory, L2 and HBM bound what a GPU kernel can reach, and the roofline model that turns arithmetic intensity into a performance ceiling.
reliedOn: Every GPU kernel design (tiling, fusion, quantisation, communication overlap) is an argument about moving fewer bytes or hiding their latency; the roofline model is the standard way to say whether a kernel is limited by compute or by memory.
references:
  - title: "Williams, Waterman, Patterson: Roofline: an insightful visual performance model for multicore architectures (CACM 2009)"
    url: https://doi.org/10.1145/1498765.1498785
    kind: paper
  - title: "NVIDIA CUDA C++ Programming Guide: memory hierarchy and programming model"
    url: https://docs.nvidia.com/cuda/cuda-c-programming-guide/
    kind: docs
  - title: NVIDIA CUDA C++ Best Practices Guide
    url: https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/
    kind: docs
  - title: "Luo et al.: Benchmarking and Dissecting the Nvidia Hopper GPU Architecture (arXiv preprint)"
    url: https://arxiv.org/abs/2402.13499
    kind: paper
  - title: NVIDIA H100 Tensor Core GPU datasheet
    url: https://www.nvidia.com/en-us/data-center/h100/
    kind: docs
timeline:
  - date: 2009-04-01
    title: Roofline model published
    body: Williams, Waterman and Patterson introduce the roofline plot in Communications of the ACM.
    source: https://doi.org/10.1145/1498765.1498785
  - date: 2024-02-01
    title: Hopper microbenchmark study
    body: A preprint measures tensor-core, TMA and distributed-shared-memory behaviour on H100 (arXiv, February 2024).
    source: https://arxiv.org/abs/2402.13499
explainer:
  oneLine: A GPU can calculate far faster than it can fetch data, so speed depends on how few bytes you move.
  flow:
    - Math units far faster than memory
    - Programs wait for data, not arithmetic
    - "Roofline: calculations per byte fetched"
    - Fuse steps and reuse data in fast storage
    - Kernels approach the chip limits
  glossary:
    - term: GPU
      meaning: A chip with thousands of small arithmetic units, built to do many similar calculations at once; the workhorse for training AI models.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: HBM (high-bandwidth memory)
      meaning: The large, fast memory stacked next to the GPU chip. It holds the model and data but is far slower than on-chip storage.
      link: https://en.wikipedia.org/wiki/High_Bandwidth_Memory
    - term: shared memory
      meaning: A small, very fast scratchpad inside each GPU processor block that the program controls directly.
      link: https://en.wikipedia.org/wiki/Memory_hierarchy
    - term: memory bandwidth
      meaning: How many bytes per second can be moved between memory and the chip.
      link: https://en.wikipedia.org/wiki/Bandwidth_(computing)
    - term: roofline model
      meaning: A simple chart that shows whether a program is limited by arithmetic speed or by memory speed.
      link: https://en.wikipedia.org/wiki/Roofline_model
    - term: arithmetic intensity
      meaning: How many calculations a program does for each byte it reads from memory.
      link: https://en.wikipedia.org/wiki/Arithmetic_intensity
    - term: tensor core
      meaning: A special unit inside the GPU that multiplies small blocks of numbers very quickly.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: cache
      meaning: A small, fast store of data likely to be needed again soon.
      link: https://en.wikipedia.org/wiki/Cache_(computing)
    - term: thread
      meaning: One of many copies of a GPU program running at the same time, each working on its own piece of the data.
      link: https://en.wikipedia.org/wiki/Thread_(computing)
    - term: register
      meaning: The smallest and fastest storage on a processor, private to one thread, holding the numbers it is working on right now.
      link: https://en.wikipedia.org/wiki/Processor_register
    - term: FLOP/s
      meaning: "Floating-point operations per second: how many additions or multiplications of real numbers a chip can do each second."
      link: https://en.wikipedia.org/wiki/FLOPS
    - term: latency
      meaning: The delay between asking for something (data, a message) and the first part of it arriving.
      link: https://en.wikipedia.org/wiki/Latency_(engineering)
  readFirst:
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
    - title: Roofline model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Roofline_model
      why: Short overview of the chart and how to read it.
    - title: Memory hierarchy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Memory_hierarchy
      why: The general idea of small-fast versus large-slow storage.
site:
  published: true
  aiReviewed: true
---

## Why the hierarchy matters

A modern data-centre GPU executes thousands of arithmetic operations per byte it can fetch from main memory. On an NVIDIA H100 SXM, the datasheet lists about 989 TFLOP/s of dense BF16 tensor-core throughput and about 3.35 TB/s of HBM3 bandwidth. Dividing the two gives roughly 295 floating-point operations per byte: a kernel that does less work per byte than that is waiting on memory, not on arithmetic. (The quotient is derived here from the two datasheet figures; it is not a number NVIDIA publishes.)

## The levels

- **Registers**: private to each thread, the fastest storage; running out forces spills to slow local memory.
- **Shared memory**: a programmer-managed scratchpad inside each streaming multiprocessor (SM), shared by the thread block. It is split into banks; threads of a warp that hit the same bank serialise (bank conflicts).
- **L1 and L2 caches**: hardware-managed. L2 is shared by all SMs.
- **Global memory (HBM)**: large and far; coalesced access (adjacent threads reading adjacent addresses) is needed to use the full bus.

Hopper adds asynchronous bulk copies through the Tensor Memory Accelerator (TMA) and distributed shared memory across thread-block clusters, so data can move between levels while tensor cores compute.

## The roofline model

Williams, Waterman and Patterson (2009) proposed plotting attainable performance against **arithmetic intensity** (operations per byte moved from the memory level of interest). Attainable performance is the smaller of two ceilings: peak compute, and bandwidth times intensity. The point where the two meet is the **ridge point**. Kernels left of it are memory-bound; kernels right of it are compute-bound. A matrix multiply of size n has intensity growing with n, so large GEMMs are compute-bound; elementwise operations, softmax, layer norm and the attention decode step have fixed low intensity and are memory-bound whatever the programmer does.

## How it is used

Optimisation then has two moves. For memory-bound kernels, reduce bytes: fuse operators so intermediates stay on chip, use narrower data types, and reuse data through tiling. For compute-bound kernels, keep the tensor cores fed: hide latency with asynchrony and enough resident warps, avoid bank conflicts, and pick tile shapes that fill the SMs without leaving a partial last wave. Profilers such as Nsight Compute report achieved bandwidth and tensor-pipe utilisation so a kernel can be placed on the roofline.

## Limits of the model

The basic roofline ignores latency, instruction issue limits, occupancy and the fact that real peaks depend on clocks and power. Microbenchmark studies of Hopper show that achievable tensor-core throughput depends on instruction shapes and data layout. Hierarchical rooflines (one ceiling per memory level) are used to find the binding level.

# Plain explanation

Picture a chef who can chop a hundred vegetables a second but whose pantry is down a long corridor. The chef is not slow; the corridor is. A GPU is like this. Its arithmetic units are enormously fast, but the memory that holds the data is much slower, so a program often waits for data instead of calculating.

GPUs therefore have several layers of storage. Tiny, very fast storage sits right next to the calculators. A larger scratchpad sits inside each processing block. Then comes a shared cache, and finally the big main memory. Good programs bring a chunk of data close, use it many times, and only then put it away.

A simple chart, the roofline, helps people see which problem they have. For each program you ask: how many calculations do I do for every byte I fetch? If the answer is small, the program is limited by the corridor, and only moving less data helps. If the answer is large, the chef is the limit, and the job is to keep the chopping going without pauses.

This idea explains most of what GPU programmers do: combining steps so data is not written out and read back, using smaller number formats, and cutting work into blocks that fit in the fast storage. The analogy breaks in one place: a real GPU can also fetch data in the background while it calculates, which a single chef cannot.

# Student explanation

**What goes wrong without it.** A GPU (graphics processing unit) is a chip with thousands of small arithmetic units working in parallel. A program that runs on it is called a kernel, and each of the many copies running at once is a thread. The arithmetic units can calculate far faster than memory can feed them numbers, so a kernel that ignores where its data lives spends most of its time waiting.

**A worked number.** The NVIDIA H100 SXM datasheet lists about 989 TFLOP/s (989 × 10¹² floating-point operations per second) of dense BF16 matrix arithmetic, and about 3.35 TB/s of memory bandwidth, the rate at which bytes move between the main memory (HBM) and the chip. Dividing gives about 295 operations per byte. Adding two arrays of 2-byte numbers does 1 operation per 6 bytes moved (read two numbers, write one), so the matrix units would sit idle almost all the time. Analogy: a kitchen with 300 cooks and one narrow door for ingredients; hiring more cooks does not help when the door is the limit. The analogy breaks because a GPU can keep ingredients close by and reuse them, which is what the memory hierarchy is for.

**The hierarchy.** Memory runs from small and fast to large and slow: registers private to each thread; shared memory, an on-chip scratchpad shared by a group of threads on one streaming multiprocessor (SM, one of the GPU's processing blocks); an L2 cache shared by all SMs; and HBM, tens of gigabytes but far away. Fast kernels load a piece of data from HBM once and reuse it many times from the faster levels.

**The roofline.** Define arithmetic intensity $I$ as the number of operations done per byte moved from memory. Williams, Waterman and Patterson (2009) bound attainable performance by
$P = \min(P_{peak},\; B \cdot I),$
where $P_{peak}$ is the peak compute rate and $B$ is the bandwidth. In words: a kernel gets the smaller of what the chip can calculate and what memory can deliver multiplied by the work done per byte. Plotted on log-log axes this is a sloped line (memory-bound) meeting a flat roof (compute-bound) at the ridge point $I = P_{peak}/B$, about 295 for BF16 on an H100.

**Examples.** Multiplying two $n \times n$ matrices takes about $2n^3$ operations on about $3n^2$ numbers, so the intensity grows in proportion to $n$ and large matrix multiplies are compute-bound. Element-wise operations, softmax and normalisation do a few operations per number whatever the size, so they stay memory-bound. Hence two strategies: for memory-bound work, move fewer bytes (merge several steps into one kernel, use narrower number formats); for compute-bound work, keep the arithmetic units busy.

**Limits.** The model ignores latency (the delay before the first byte arrives), limits on how many instructions the chip can issue, and clock-speed changes under power limits. Real kernels sit below the roof, and profilers measure how far.
