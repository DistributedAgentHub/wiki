---
type: problem
slug: triton-bf16-gemm-cublas-gap-h100
title: A Triton BF16 GEMM within 3% of cuBLAS across an LLM shape sweep on H100
entry: triton-language
status: OPEN
origin: Triton matrix-multiplication tutorial; Hopper support in Triton 3.x
ratings:
  difficulty: 27
  applicationValue: 45
  leverage: 30
workMix:
  theory: 8
  engineering: 70
  compute: 12
  empirical: 10
verification:
  route: GPU_BENCHMARK
sources:
  - title: Triton repository
    url: https://github.com/triton-lang/triton
  - title: Triton tutorials
    url: https://triton-lang.org/main/getting-started/tutorials/index.html
explainer:
  oneLine: Can a Python-level Triton matrix multiply match the closed vendor library within 3% on 40 real sizes?
  flow:
    - cuBLAS is closed and heavily tuned
    - Real shapes are thin, wide and awkward
    - Triton needs Hopper features and tuning
    - At most 20 settings per shape
    - Python-level code at vendor speed
  glossary:
    - term: Triton
      meaning: A Python-embedded language in which a GPU kernel is written for whole tiles; its compiler handles the low-level details.
      link: /research/triton-language
    - term: GEMM
      meaning: "General matrix multiply, C = A·B: the operation that takes most of the arithmetic in neural networks."
      link: /research/tiled-gemm-tensor-cores
    - term: cuBLAS
      meaning: NVIDIA's closed-source library of tuned linear-algebra routines, the usual speed baseline for matrix multiply.
      link: https://en.wikipedia.org/wiki/CUDA
    - term: compiler
      meaning: A program that translates code from one language into machine instructions.
      link: https://en.wikipedia.org/wiki/Compiler
    - term: autotuning
      meaning: Trying several settings of a kernel (tile sizes, pipeline depth) by timing them, and keeping the fastest.
      link: /research/kernel-autotuning-and-generation
    - term: tensor core
      meaning: A unit inside each GPU core that multiplies small matrix tiles in one instruction, much faster than ordinary arithmetic.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: Hopper (H100)
      meaning: NVIDIA's 2022 data-centre GPU generation; the H100 is its main chip.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: warp specialisation
      meaning: Giving different groups of GPU threads different jobs, for example some load data while others compute, so the two overlap.
      link: /research/tiled-gemm-tensor-cores
    - term: PyTorch
      meaning: The open-source Python library in which most neural networks are written; its built-in operators are the baseline here.
      link: /research/pytorch
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
  readFirst:
    - title: Triton documentation and tutorials
      url: https://triton-lang.org/main/index.html
      why: Official introduction with runnable examples.
    - title: How to Optimize a CUDA Matmul Kernel for cuBLAS-like Performance (Simon Boehm)
      url: https://siboehm.com/articles/22/CUDA-MMM
      why: Step-by-step matrix multiplication kernel, from slow to fast, with measurements.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
site:
  aiReviewed: true
---

Using only upstream Triton language features (a pinned public release), write a BF16 GEMM with FP32 accumulation whose median throughput on one H100 SXM is at least 97% of cuBLAS on every shape in a sweep of 40 LLM projection shapes (M from 1 to 16384, N and K from the Llama-3 8B/70B and Mixtral families), including skinny and non-tile-multiple shapes, using autotuning limited to 20 configurations per shape.

# State of the art

Triton's tutorial GEMM and tuned variants reach a large fraction of cuBLAS on large square shapes in public benchmarks, and recent Triton releases support TMA and warp-specialised pipelines on Hopper. The gap on skinny, odd-sized and persistent-scheduling cases is reported by kernel authors but the curator found no primary source that fixes a single number across a full sweep. The 3% bar with a bounded tuning budget is a deliberate stretch; it should be confirmed as open against current Triton benchmarks.

# Applications

If a compiler-language GEMM reaches vendor parity, fused GEMM epilogues and custom quantisation schemes can be written without leaving Python.

# Resolution criteria

A public kernel and sweep at pinned versions that meets the bar on all 40 shapes, rerun by a second party.

# Rating rationale

Difficulty 27: compiler heuristics and scheduling on a well-understood operation; slightly above the FP8 parity task (24) because the kernel author cannot hand-place warps and the tuning budget is capped. Application value 45: matters wherever fused epilogues are written in Python. Leverage 30: decides how close torch.compile output gets to vendor GEMMs.

# Work mix rationale

Compiler engineering and per-shape tuning, measured on H100.

# Verification

Hardware: one H100 SXM 80 GB. Dtypes: BF16 inputs and output, FP32 accumulation. Shapes: 40 listed (M, N, K) triples published in the harness repo, covering decode (M 1 to 64), prefill (M 2048 to 16384) and non-multiples of 128. Baseline: cuBLAS (cublasLt) from CUDA 12.8 or later, exact version recorded, via torch.matmul with the version of PyTorch recorded. Metric: median TFLOP/s over at least 100 iterations after warmup, CUDA events, tuning time excluded but reported with a limit of 20 configurations per shape. Correctness: max relative error versus FP32 reference no more than 1.1x that of cuBLAS. Harness: public script at a pinned commit and Triton release.

# Plain explanation

Matrix multiplication is the core operation of AI models. NVIDIA's closed library cuBLAS is extremely well tuned. Triton lets people write GPU programs in Python-like code, and its matrix multiply is respectable, especially for large square tables, but the real tables in language models come in many shapes: very thin ones when generating one word at a time, very large ones when reading a long prompt, and sizes that divide awkwardly into blocks.

The problem asks for a Triton program that gets at least 97% of cuBLAS speed on every one of 40 listed shapes, using only released Triton features and trying no more than 20 settings per shape.

Difficulty comes from the settings and from what the translator can or cannot express. The fastest modern programs use specialised roles for workers and clever scheduling for awkward sizes. The tuning limit prevents solving the problem simply by trying thousands of settings.

If it can be done, anyone could add custom steps to a multiply, for example new ways to rescale numbers, using Python and still get vendor speed. It should be checked against recent Triton benchmarks that this is still open.

# Student explanation

**What is asked.** Triton lets a programmer write a GPU kernel in Python for whole tiles of a matrix, and a compiler handles the details of threads and memory (see the Triton entry). PyTorch's compiler generates Triton code automatically. The problem asks whether a Triton matrix multiply in BF16 (16-bit floats, with sums kept in 32-bit) can run at 97% or more of NVIDIA's cuBLAS library on one H100. It must do this on every one of 40 shapes taken from real language models. Autotuning may try at most 20 configurations per shape.

**Why the hard shapes matter.** Multiplying an $M \times K$ matrix by a $K \times N$ one costs $2MNK$ operations. When $M = N = K = 8192$, that is about $1.1 \times 10^{12}$ operations, a few milliseconds of tensor-core work, and many tile layouts reach near-peak speed. The 40 shapes also include $M$ from 1 to 64, where a model is generating text and the kernel mostly waits on memory. They include sizes that are not multiples of the tile, which leave part of the chip idle in the last round of tiles. And they include cases where the best kernel stays resident on the chip and loops over tiles, rather than launching one thread block per tile. cuBLAS handles these with heuristics and many precompiled variants, picked per shape. A Triton kernel has one source and a handful of parameters (tile sizes, pipeline depth, number of warps). The compiler must turn them into the asynchronous, warp-specialised code that Hopper needs. The analogy is a tailor-made suit versus an adjustable off-the-rack one. It breaks because the "adjustments", autotuning, can be searched by machine, but the search budget here is capped at 20 tries.

**State of the art.** Triton's tutorial matrix multiply and tuned variants reach a large fraction of cuBLAS on large square shapes in public benchmarks. Recent releases add Hopper's asynchronous copies and warp specialisation. Kernel authors report gaps on skinny, odd-sized and persistent-scheduling shapes, but no source gives a number across a full sweep. The 3% bar with a 20-configuration budget is a deliberate stretch.

**What a solution looks like.** A public Triton kernel at a pinned release, timed against cuBLAS on one H100 on all 40 published shapes, at 97% or more each time, with error no worse than 1.1 times cuBLAS's. A second party must rerun it.
