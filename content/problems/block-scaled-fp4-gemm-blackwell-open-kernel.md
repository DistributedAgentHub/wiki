---
type: problem
slug: block-scaled-fp4-gemm-blackwell-open-kernel
title: A Triton block-scaled FP4 GEMM within 10% of CUTLASS on B200
entry: microscaling-mx-formats
status: OPEN
origin: Blackwell block-scaled tensor-core instructions; CUTLASS block-scaled kernels
ratings:
  difficulty: 31
  applicationValue: 43
  leverage: 23
workMix:
  theory: 5
  engineering: 80
  compute: 8
  empirical: 7
verification:
  route: GPU_BENCHMARK
sources:
  - title: CUTLASS repository
    url: https://github.com/NVIDIA/cutlass
  - title: OCP Microscaling Formats (MX) specification
    url: https://www.opencompute.org/documents/ocp-microscaling-formats-mx-v1-0-spec-final-pdf
  - title: "Triton tutorial: block-scaled matrix multiplication"
    url: https://triton-lang.org/main/getting-started/tutorials/10-block-scaled-matmul.html
  - title: CUTLASS CuTe DSL examples (Blackwell block-scaled GEMM)
    url: https://github.com/NVIDIA/cutlass/tree/main/examples/python/CuTeDSL
explainer:
  oneLine: Can a Triton matrix multiply on 4-bit block-scaled numbers reach 90% of NVIDIA’s CUTLASS speed on a B200?
  flow:
    - B200 multiplies 4-bit blocks natively
    - CUTLASS and its Python DSL are fast
    - Triton hides layouts from the programmer
    - Compiler must place scales correctly
    - 90% of CUTLASS on every shape
  glossary:
    - term: Triton
      meaning: A Python-embedded language in which a GPU kernel is written for whole tiles; its compiler handles the low-level details.
      link: /research/triton-language
    - term: CUTLASS
      meaning: NVIDIA's open-source C++ template library of fast matrix-multiply building blocks.
      link: /research/tiled-gemm-tensor-cores
    - term: block scaling (MX, NVFP4)
      meaning: Sharing one scale factor across a small block of 16 or 32 narrow numbers so each block uses the format’s range well.
      link: /research/microscaling-mx-formats
    - term: FP4 (E2M1)
      meaning: "A 4-bit floating-point number with 2 exponent bits and 1 mantissa bit: only 16 possible values."
      link: /research/microscaling-mx-formats
    - term: scale factor
      meaning: A multiplier applied before rounding to a narrow format so values fit its range, divided out afterwards.
      link: /research/fp8-formats-and-scaling
    - term: Blackwell (B200)
      meaning: NVIDIA's GPU generation after Hopper, with native 4-bit and block-scaled matrix instructions.
      link: https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)
    - term: tensor core
      meaning: A unit inside each GPU core that multiplies small matrix tiles in one instruction, much faster than ordinary arithmetic.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: compiler
      meaning: A program that translates code from one language into machine instructions.
      link: https://en.wikipedia.org/wiki/Compiler
    - term: GEMM
      meaning: "General matrix multiply, C = A·B: the operation that takes most of the arithmetic in neural networks."
      link: /research/tiled-gemm-tensor-cores
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
  readFirst:
    - title: "Triton tutorial: block-scaled matrix multiplication"
      url: https://triton-lang.org/main/getting-started/tutorials/10-block-scaled-matmul.html
      why: "The starting point: a Triton FP4 matrix multiply with tl.dot_scaled."
    - title: "Wikipedia: Minifloat"
      url: https://en.wikipedia.org/wiki/Minifloat
      why: What 4- and 8-bit floating-point numbers look like.
    - title: "Simon Boehm: How to optimize a CUDA matmul kernel"
      url: https://siboehm.com/articles/22/CUDA-MMM
      why: A step-by-step walk from a naive to a fast matrix multiply, showing what a compiler must automate.
site:
  aiReviewed: true
---

Write a GEMM for NVFP4 and MXFP4 operands with block scales (BF16 output) in the Triton language, using `tl.dot_scaled` or other features of a released upstream Triton (no inline PTX and no Gluon), that on one B200 reaches at least 90% of the throughput of the corresponding CUTLASS block-scaled kernel on every LLM projection shape in the sweep (M from 1 to 16384), and matches a dequantised FP32 reference within the specified tolerance. NVIDIA's own CuTe Python DSL is excluded because it exposes the same primitives as CUTLASS and ships block-scaled GEMM examples; the question is whether a tile-level compiler that hides layouts and scale-factor placement can reach vendor speed.

# State of the art

CUTLASS ships block-scaled kernels for Blackwell, and its CuTe Python DSL includes block-scaled (NVFP4 and MXFP4) GEMM examples; NVIDIA reports CuTe DSL dense GEMMs on par with C++. Triton has a block-scaled matmul tutorial (`10-block-scaled-matmul.py`, using `tl.dot_scaled`) that benchmarks against cuBLAS but publishes no numbers. The only independent Triton-versus-vendor GEMM figures on B200 found are for BF16, where an evaluation of CUDA Tile (arXiv:2604.23466) reports tile-level Python kernels well below cuBLAS on several LLM shapes. No source benchmarks a Triton FP4 GEMM against CUTLASS across a shape sweep.

# Applications

Efficient open 4-bit kernels are a prerequisite for open 4-bit training and inference stacks that do not rely on vendor libraries.

# Resolution criteria

A public kernel meeting the 90% bar on all shapes on B200, reproduced independently.

# Rating rationale

Difficulty 31: Triton must place scale factors and drive tensor-memory MMAs without exposing them, on hardware where tile-level Python GEMMs still trail cuBLAS in BF16; harder than the H100 BF16 Triton task (27). Application value 43: open FP4 kernels in a compiler language help open 4-bit stacks, but CUTLASS and its Python DSL already cover the need. Leverage 23: limited to Blackwell low-precision kernels.

# Work mix rationale

Kernel and compiler engineering on new hardware.

# Verification

Hardware: one NVIDIA B200 (HBM3e) with the CUDA 12.8 or later toolkit supporting its block-scaled instructions. Dtypes: NVFP4 (E2M1 elements, 16-element blocks, E4M3 block scales, FP32 tensor scale) and MXFP4 (E2M1, 32-element blocks, E8M0 scales), BF16 output. Shapes: M in {1, 16, 128, 1024, 4096, 16384}, N and K from Llama-3 70B and DeepSeek-V3 projection sizes. Candidate: Triton kernel at a pinned upstream Triton release. Baseline: CUTLASS block-scaled GEMM (cutlass_profiler, best kernel per shape) at a pinned CUTLASS release. Metric: median TFLOP/s over at least 100 iterations after warmup; pass if at least 90% of the CUTLASS baseline on every shape. Correctness: max relative error versus FP32 GEMM of the dequantised inputs no more than 1.1x the baseline's. Harness: public script at a pinned commit.

# Plain explanation

NVIDIA's newest chips, called Blackwell, can multiply tables of numbers stored in just 4 bits, where each small group of numbers shares a zoom setting. NVIDIA's open library CUTLASS includes programs for this, but they are written in demanding low-level C++.

The problem asks for an open program that gets at least 90% of CUTLASS speed on a list of real language-model sizes, written in a friendlier language such as Triton, TileLang or a Python interface to CuTe, with the same answers to within a stated tolerance.

Why is it hard? The hardware is new, so the tools for the friendlier languages are young. The zoom settings must be stored in a specific layout, and the chip uses a new kind of on-chip memory for the intermediate results. Few developers have the chips to experiment on.

If solved, groups outside the chip maker can build 4-bit training and serving software that they can read and change. The status of this problem should be rechecked against the latest releases of the tools, since support is changing quickly.

# Student explanation

**What is asked.** NVIDIA's Blackwell GPUs (the B200) can multiply matrices of 4-bit numbers directly. The numbers come in blocks of 16 (NVFP4) or 32 (MXFP4), each block with its own scale factor (see the microscaling entry). NVIDIA's CUTLASS library has fast kernels for this, written in C++ templates. The problem asks for the same operation written in **Triton**, a Python-level tile language, using only features in a released version (such as `tl.dot_scaled`). It must reach at least 90% of CUTLASS speed on every matrix shape in a list taken from real models, with $M$ from 1 to 16384. NVIDIA's own CuTe Python DSL is excluded, because it exposes the same low-level controls as CUTLASS. The question is whether a compiler that hides those details can still reach vendor speed.

**Why it is hard.** In a block-scaled product, each 4-bit value $q$ stands for $s \cdot q$, where $s$ is its block's scale. The B200's tensor cores apply the scales inside the multiply instruction, but only if the scales sit in memory in one particular arrangement. The matrices must also be fed through a new on-chip "tensor memory". In CUTLASS, the programmer spells out these layouts by hand. In Triton, the compiler must choose them from a much higher-level description. Getting it slightly wrong forces extra shuffling of data, which can cost a large share of the speed. The analogy is a translator who must produce not just the meaning but the exact page layout a printer demands. It breaks because the compiler is improved once and then serves every kernel, whereas a translator starts over each time.

**State of the art.** CUTLASS ships block-scaled kernels for Blackwell. Its CuTe Python DSL includes NVFP4 and MXFP4 examples, and NVIDIA reports its dense matrix multiplies on par with C++. Triton has a block-scaled matrix-multiply tutorial that benchmarks against cuBLAS but publishes no numbers. The only independent B200 comparison of tile-level Python kernels against the vendor library found is for BF16, where they ran well below cuBLAS on several model shapes. No source compares a Triton FP4 kernel with CUTLASS across a range of shapes.

**What a solution looks like.** A Triton kernel at a pinned release, timed on one B200 against CUTLASS's best kernel for each shape. It must reach 90% or more on every shape, match a 32-bit reference within tolerance, and be reproduced independently.
