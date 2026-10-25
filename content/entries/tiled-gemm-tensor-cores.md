---
type: entry
slug: tiled-gemm-tensor-cores
title: Tiled GEMM on tensor cores (CUTLASS and CuTe)
field: gemm-attention-kernels
kind: ALGORITHM
status: ACTIVE
summary: "How dense matrix multiplication reaches near-peak throughput on NVIDIA GPUs: hierarchical tiling, tensor-core MMA instructions, asynchronous copies, and the CUTLASS and CuTe abstractions."
reliedOn: Transformer training and inference spend most of their FLOPs in GEMMs; cuBLAS, PyTorch, Triton, FlashAttention and FP8 kernels all build on this tiling scheme.
dependsOn:
  - cuda-memory-hierarchy-roofline
references:
  - title: "Goto, van de Geijn: Anatomy of high-performance matrix multiplication (ACM TOMS 2008)"
    url: https://doi.org/10.1145/1356052.1356053
    kind: paper
  - title: "Osama et al.: Stream-K: Work-centric Parallel Decomposition for Dense Matrix-Matrix Multiplication on the GPU (arXiv preprint)"
    url: https://arxiv.org/abs/2301.03598
    kind: paper
  - title: CUTLASS documentation (GEMM, CuTe layouts, Hopper and Blackwell kernels)
    url: https://github.com/NVIDIA/cutlass/tree/main/media/docs
    kind: docs
  - title: NVIDIA CUTLASS repository
    url: https://github.com/NVIDIA/cutlass
    kind: code
  - title: "DeepGEMM: clean and efficient FP8 GEMM kernels"
    url: https://github.com/deepseek-ai/DeepGEMM
    kind: code
timeline:
  - date: 2008-01-01
    title: Anatomy of high-performance GEMM
    body: Goto and van de Geijn describe the blocked, packed algorithm that underlies vendor BLAS (ACM TOMS 34(3), 2008).
    source: https://doi.org/10.1145/1356052.1356053
  - date: 2023-01-01
    title: Stream-K decomposition
    body: A preprint proposes splitting the accumulation dimension across thread blocks to avoid wave quantisation (arXiv, January 2023).
    source: https://arxiv.org/abs/2301.03598
explainer:
  oneLine: How a GPU multiplies two huge grids of numbers quickly by working on small blocks and reusing them.
  flow:
    - Naive multiply refetches the same numbers
    - Cut output into small tiles
    - Load tiles once into fast storage
    - Tensor cores multiply blocks; copies overlap
    - Kernel runs near the chip limit
  glossary:
    - term: GEMM
      meaning: "General matrix multiply: multiplying two grids of numbers. Most of the work in AI models is made of these."
      link: https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
    - term: tiling
      meaning: Cutting a big job into small blocks that fit in fast memory and reusing each block many times.
      link: https://en.wikipedia.org/wiki/Locality_of_reference
    - term: tensor core
      meaning: A special unit inside the GPU that multiplies small blocks of numbers very quickly.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: shared memory
      meaning: A small, very fast scratchpad inside each GPU processor block that the program controls directly.
      link: https://en.wikipedia.org/wiki/Memory_hierarchy
    - term: Hopper
      meaning: NVIDIA GPU generation (H100) introduced in 2022.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: kernel (GPU)
      meaning: A small program that runs on the GPU, started many times in parallel on different pieces of data.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: roofline model
      meaning: A simple chart that shows whether a program is limited by arithmetic speed or by memory speed.
      link: https://en.wikipedia.org/wiki/Roofline_model
    - term: GPU
      meaning: A chip with thousands of small arithmetic units, built to do many similar calculations at once; the workhorse for training AI models.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: matrix multiplication
      meaning: Combining two matrices so each output entry is the dot product of a row of the first with a column of the second.
      link: https://en.wikipedia.org/wiki/Matrix_multiplication
    - term: neural network
      meaning: A function built from layers of weighted sums and simple nonlinear steps, whose weights are adjusted from data.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: thread
      meaning: One of many copies of a GPU program running at the same time, each working on its own piece of the data.
      link: https://en.wikipedia.org/wiki/Thread_(computing)
    - term: register
      meaning: The smallest and fastest storage on a processor, private to one thread, holding the numbers it is working on right now.
      link: https://en.wikipedia.org/wiki/Processor_register
  readFirst:
    - title: How to Optimize a CUDA Matmul Kernel for cuBLAS-like Performance (Simon Boehm)
      url: https://siboehm.com/articles/22/CUDA-MMM
      why: Step-by-step matrix multiplication kernel, from slow to fast, with measurements.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
    - title: Roofline model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Roofline_model
      why: Short overview of the chart and how to read it.
raw:
  body: "## The problem\n\nA general matrix multiply (GEMM) computes C = A·B. Done naively, every output element re-reads a row of A and a column of B from main memory, so the kernel is memory-bound even though the arithmetic intensity of the whole product is high. High-performance GEMM, formalised in the CPU setting by Goto and van de Geijn (2008), reorganises the loops into blocks so each loaded value is reused many times from a faster level.\n\n## Hierarchical tiling on a GPU\n\nThe output is partitioned into **thread-block tiles** (for example 128×256). Each thread block marches along the K dimension, loading a tile of A and a tile of B into shared memory, then accumulating into registers. Inside the block, **warp tiles** divide the work, and each warp issues **tensor-core MMA** instructions on small fixed shapes. Because the accumulators live in registers across the whole K loop, each element of C is written once.\n\n## Hopper-era mechanics\n\nOn Hopper, three features change the structure of a fast kernel:\n\n- **TMA** copies whole tiles from global to shared memory asynchronously, freeing threads from address arithmetic.\n- **WGMMA**, a warpgroup-level asynchronous MMA, reads operands directly from shared memory.\n- **Warp specialisation**: some warps are producers (issue TMA loads) while others are consumers (issue WGMMA), connected by a software pipeline of shared-memory stages and barriers.\n\nPersistent kernels keep one block per SM and loop over tiles to hide launch and prologue cost. Tile scheduling matters too: when the number of tiles is not a multiple of the SM count, the last wave leaves SMs idle. Stream-K (Osama et al.) splits the K loop across blocks to balance this.\n\n## CUTLASS and CuTe\n\nCUTLASS is NVIDIA's open-source C++ template library of these building blocks, and the reference for what vendor kernels do. CUTLASS 3.x is built on **CuTe**, a layout algebra in which a tensor is a pointer plus a *layout* (a nested shape and stride function). Tiling, partitioning across threads and copying between memory levels become compositions of layouts, which lets one kernel source target different tile shapes and data types. Python front ends and the CuTe DSL expose the same ideas without C++ templates.\n\n## Why it is load-bearing\n\nPeak-utilisation numbers for attention, FP8 and block-scaled GEMMs are all reported relative to what a well-tuned GEMM reaches. Open implementations such as DeepGEMM show that a compact, JIT-compiled FP8 GEMM can be competitive with vendor libraries on selected shapes, so reproducing and extending this structure is an active, benchmarkable engineering frontier."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Multiplying two big tables of numbers is the main job inside an AI model. Done the obvious way, the computer keeps fetching the same numbers again and again from slow memory, like a cook who walks to the pantry for every single pinch of salt.

The fast method cuts the answer table into small squares. For each square, the chip loads a strip of numbers from each input table once, keeps them in fast storage close to the calculators, and uses each number many times before putting it away. Special hardware, the tensor cores, multiplies small blocks of numbers in one step. Newer GPUs add a helper that copies the next blocks in while the current ones are being used, and some workers are assigned to fetching while others only calculate, like a kitchen with a runner and a chef.

Because so much of an AI model is this one operation, how well it is done decides how fast training and running models can be. NVIDIA publishes an open library, CUTLASS, that shows the building blocks, and a small layout language called CuTe that describes how pieces of a table map to workers. Companies and open projects check their other programs against how close a well-tuned multiply gets to the chip's limit.

The cooking analogy breaks down in scale: there are thousands of cooks sharing one pantry, and keeping them all busy is the hard part.

# Student explanation

**Why it matters.** GEMM (general matrix multiply) computes $C = AB$. A neural network is a function built from layers, and most layers multiply their input by a learned weight matrix, so training and running large models spends most of its arithmetic in GEMMs. How fast a GPU multiplies matrices sets the speed of the whole field.

**The naive version.** From first-year linear algebra,
$C_{ij} = \sum_{k=1}^{K} A_{ik} B_{kj},$
each entry of $C$ is the dot product of row $i$ of $A$ and column $j$ of $B$. If each entry is computed separately by fetching its row and column from main memory, every number in $A$ is fetched once for every column of $C$. For 4096 × 4096 matrices that is 4096 reads of each number, and the kernel runs at memory speed (see the roofline entry), far below the chip's peak.

**Tiling.** Split $C$ into tiles, for example 128 × 128 blocks. One group of threads owns one tile. It walks along $k$: it loads a strip of $A$ and a strip of $B$ into on-chip shared memory, multiplies them, adds the result into running sums kept in registers, and moves on to the next strip. Each number loaded is now reused 128 times from fast memory. The same formula holds with blocks in place of numbers, $C_{IJ} = \sum_{K} A_{IK} B_{KJ}$, where capital letters index tiles. Bigger tiles give more reuse but need more on-chip storage, which is scarce. Analogy: photocopying a chapter once and working from the copy, instead of walking to the library for every sentence. It breaks because the desk (on-chip memory) is small, so the chapter has to be copied in pieces.

**Tensor cores.** Inside a tile the arithmetic is done by tensor cores, hardware units that multiply small fixed-size matrix blocks in a single instruction. On NVIDIA's Hopper GPUs (H100), fast kernels also use the Tensor Memory Accelerator to copy tiles in the background, and split the threads into producers that load the next tiles and consumers that multiply the current ones, like an assembly line, so loading overlaps with computing.

**Leftovers.** If the number of tiles is not a multiple of the number of processing blocks on the chip, the last round leaves some blocks idle (wave quantisation). Stream-K splits the $k$ loop across blocks to even out the work.

**Libraries.** NVIDIA's open-source CUTLASS library packages these pieces in C++. Its CuTe layer describes a tensor as a pointer plus a layout (a shape and the steps between elements), so tiling and copying become operations on layouts. DeepGEMM shows that a compact FP8 GEMM can compete with vendor libraries on selected shapes.

**Limits.** Small or oddly shaped matrices, common when a model generates text one token at a time, are memory-bound and hard to tile well. Each new GPU generation changes the instructions, so fast kernels are rewritten for every generation.
