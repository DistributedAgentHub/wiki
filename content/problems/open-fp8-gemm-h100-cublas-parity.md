---
type: problem
slug: open-fp8-gemm-h100-cublas-parity
title: An open FP8 GEMM kernel matching cuBLAS across LLM shapes on H100
entry: tiled-gemm-tensor-cores
status: OPEN
origin: FP8 tensor cores on Hopper (2022); open kernels such as DeepGEMM (2025) cover selected shapes
ratings:
  difficulty: 24
  applicationValue: 50
  leverage: 29
workMix:
  theory: 4
  engineering: 78
  compute: 10
  empirical: 8
verification:
  route: GPU_BENCHMARK
sources:
  - title: DeepGEMM repository
    url: https://github.com/deepseek-ai/DeepGEMM
  - title: CUTLASS repository
    url: https://github.com/NVIDIA/cutlass
  - title: FP8 Formats for Deep Learning (arXiv preprint)
    url: https://arxiv.org/abs/2209.05433
links:
  - to: triton-bf16-gemm-cublas-gap-h100
    kind: RELATED
    note: Both ask whether non-vendor code can match cuBLAS; one in a compiler language, the other with hand-written tiling.
explainer:
  oneLine: Can an open FP8 matrix-multiply program run as fast as NVIDIA's closed library on every size that matters?
  flow:
    - Closed library fast, open kernels partial
    - Fix a sweep of real LLM shapes
    - Warp-specialised TMA and WGMMA design
    - Tune thin and odd shapes
    - Reproduce at 97% of cuBLAS
  glossary:
    - term: GEMM
      meaning: "General matrix multiply, C = A·B: the operation that takes most of the arithmetic in neural networks."
      link: /research/tiled-gemm-tensor-cores
    - term: FP8
      meaning: An 8-bit floating-point format; E4M3 keeps more precision, E5M2 more range.
      link: /research/fp8-formats-and-scaling
    - term: cuBLAS
      meaning: NVIDIA's closed-source library of tuned linear-algebra routines, the usual speed baseline for matrix multiply.
      link: https://en.wikipedia.org/wiki/CUDA
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: tensor core
      meaning: A unit inside each GPU core that multiplies small matrix tiles in one instruction, much faster than ordinary arithmetic.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: Hopper (H100)
      meaning: NVIDIA's 2022 data-centre GPU generation; the H100 is its main chip.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: scale factor
      meaning: A multiplier applied before rounding to a narrow format so values fit its range, divided out afterwards.
      link: /research/fp8-formats-and-scaling
    - term: tiling
      meaning: Splitting a large matrix operation into small blocks that fit in fast on-chip memory and are reused many times.
      link: /research/tiled-gemm-tensor-cores
    - term: memory bandwidth
      meaning: How many bytes per second can move between memory and the processor.
      link: https://en.wikipedia.org/wiki/Bandwidth_(computing)
    - term: CUTLASS
      meaning: NVIDIA's open-source C++ template library of fast matrix-multiply building blocks.
      link: /research/tiled-gemm-tensor-cores
  readFirst:
    - title: How to Optimize a CUDA Matmul Kernel for cuBLAS-like Performance (Simon Boehm)
      url: https://siboehm.com/articles/22/CUDA-MMM
      why: Step-by-step matrix multiplication kernel, from slow to fast, with measurements.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
    - title: Minifloat (Wikipedia)
      url: https://en.wikipedia.org/wiki/Minifloat
      why: What 8-bit and smaller floating-point formats look like.
site:
  aiReviewed: true
---

Produce an openly licensed FP8 (E4M3 inputs, BF16 output) GEMM kernel with per-tensor or per-block scaling that, on a single H100 SXM, reaches at least 97% of the throughput of the cuBLAS FP8 GEMM (CUDA 12.9 or later, the first release with block-scaled FP8 on Hopper) with the same scaling scheme on every shape in a stated sweep of LLM-relevant shapes (M in {1, 16, 64, 128, 512, 2048, 8192}, N and K drawn from the Llama-3 70B and DeepSeek-V3 projection sizes), while matching cuBLAS output within the tolerance in the verification spec. Throughput is also reported as a fraction of the dense FP8 peak in the H100 datasheet.

# State of the art

cuBLAS 12.9 added 1x128 and 128x128 block-scaled FP8 GEMMs on Hopper, so per-tensor and block-scaled kernels now both have a vendor baseline. DeepGEMM's original benchmark (H800, February 2025) compared against DeepSeek's internal CUTLASS-based kernels, not cuBLAS, and reported its largest gains at small M (1.4–2.7x at M = 64) and 1.0–1.2x at M = 4096; its current README claims it matches or exceeds expert-tuned libraries without a per-shape cuBLAS table. Small-M (decode-like) shapes and non-multiple-of-tile sizes are where open kernels most often fall behind, because wave quantisation and memory-bound behaviour dominate there. No primary source known to the curator documents a kernel meeting the 97%-on-every-shape bar.

# Applications

FP8 inference and training are the main consumers of GEMM FLOPs; an open, inspectable kernel lets researchers modify scaling, fuse epilogues and port to new hardware without a vendor binary.

# Resolution criteria

Two independent reruns of the stated harness on H100 SXM report the kernel at or above 97% of cuBLAS on every shape, with correctness checks passing, from a public repository at a pinned commit.

# Rating rationale

Difficulty 24: the techniques (TMA, WGMMA, warp specialisation, Stream-K) are public in CUTLASS and DeepGEMM, and the gap is confined to small-M and odd shapes, so it sits with the implementable max-flow problem (30) as engineering rather than research. Application value 50: GEMM carries most LLM FLOPs, but parity replaces an existing vendor library rather than enabling something new, so it ranks below decode bandwidth (62). Leverage 29: fused epilogues, grouped MoE GEMMs and FP8 attention reuse the work; nothing theoretical hinges on it.

# Work mix rationale

Mostly kernel engineering with a measurement loop on real hardware; some tuning compute and a little new scheduling insight.

# Verification

Hardware: one NVIDIA H100 SXM 80 GB, default clocks, power cap recorded. Dtypes: E4M3 A and B, FP32 accumulation, BF16 C; per-tensor scaling and 1x128 / 128x128 block scaling variants reported separately. Shapes: the sweep in the statement, K up to 16384. Baseline: cuBLAS (cublasLt FP8 matmul, per-tensor scaling and the VEC128 / BLK128x128 block-scale modes) from CUDA 12.9 or later, exact version recorded, default (non-fast) accumulation. Metric: median TFLOP/s over at least 100 timed iterations after warmup, CUDA events, three independent runs; also % of the datasheet dense FP8 peak. Correctness: max relative error to an FP32-dequantised reference no worse than 1.1x the cuBLAS kernel's own error on the same inputs. Harness: a public script at a pinned commit that also times cuBLAS in the same process.

# Plain explanation

Multiplying tables of numbers is where AI models spend most of their time, and the latest GPUs can do it with compact 8-bit numbers at about twice the 16-bit speed. NVIDIA ships a closed library, cuBLAS, that does this very well. Open programs exist, but they are known to match it only on some table sizes.

The question is whether an open, readable program can reach at least 97% of cuBLAS speed on every size in a fixed list taken from real language models, including awkward ones: very thin tables, as when producing one word at a time, and sizes that do not divide evenly into the blocks the chip prefers.

It is hard because the chip's fast paths need a careful dance between fetching data and multiplying it, and uneven sizes leave some of the chip idle. Nobody outside the vendor can see how the closed library handles those cases, so matching it takes measurement and patience.

Solving it would give researchers a fast multiply they can change, for example to try new ways of scaling numbers. It would not by itself make models better, only cheaper to experiment with. Whether this is still open should be re-checked against the latest releases of the open projects.

# Student explanation

**What is asked.** Matrix multiplication ($C = AB$) is where a language model spends most of its arithmetic. NVIDIA's H100 can do it in FP8, 8-bit floating-point numbers, at about twice the rate of 16-bit formats (see the entries on tiled GEMM and FP8). The fastest FP8 code is in cuBLAS, NVIDIA's closed library. The problem asks for an open kernel, whose source anyone can read and change, that reaches at least 97% of cuBLAS speed on **every** matrix shape in a fixed list taken from real models, with matching accuracy and the same scaling scheme (one scale per tensor, or one per 1×128 or 128×128 block).

**Why every shape is the hard part.** A product of an $M 	imes K$ matrix with a $K 	imes N$ matrix costs $2MNK$ floating-point operations. Large square products are easy to make fast: the work is split into tiles, each tile reuses its data many times, and every one of the H100's 132 cores stays busy. The list also contains $M = 1$ or $16$, which is what happens when a model generates one token at a time. Then $2MNK$ is small compared with the bytes of $B$ that must be read, so the kernel waits on memory, not arithmetic. Shapes that are not multiples of the tile size cause a second problem, **wave quantisation**. With 132 cores and 140 tiles, the first wave runs 132 tiles and the second runs only 8, so most of the chip idles for a whole wave. The analogy is a bus company with 132 buses and 140 passengers' worth of trips. It breaks because tiles can be cut smaller or split along $K$ (Stream-K), which a bus trip cannot.

**State of the art.** Since cuBLAS 12.9, NVIDIA's library supports the block-scaled FP8 schemes on Hopper, so both scaling schemes now have a vendor baseline. DeepGEMM, DeepSeek's open FP8 library, first compared itself against DeepSeek's internal CUTLASS-based kernels, not cuBLAS. It reported 1.4–2.7× gains at $M = 64$ and 1.0–1.2× at $M = 4096$. Its current README claims parity with expert-tuned libraries but gives no per-shape cuBLAS table. No source shows an open kernel at 97% of cuBLAS on every shape.

**What a solution looks like.** A public kernel plus a script that times it and cuBLAS in the same process on one H100, across the whole shape list. Independent reruns must show at least 97% everywhere, with error no worse than 1.1 times cuBLAS's own.
