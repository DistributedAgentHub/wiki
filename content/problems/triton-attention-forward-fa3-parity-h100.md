---
type: problem
slug: triton-attention-forward-fa3-parity-h100
title: A Triton attention forward kernel within 5% of FlashAttention-3 on H100
entry: flashattention
status: OPEN
origin: Triton fused-attention tutorial; FlashAttention-3 (Shah et al., 2024)
ratings:
  difficulty: 20
  applicationValue: 49
  leverage: 35
workMix:
  theory: 10
  engineering: 72
  compute: 8
  empirical: 10
verification:
  route: GPU_BENCHMARK
sources:
  - title: FlashAttention-3 (arXiv preprint)
    url: https://arxiv.org/abs/2407.08608
  - title: Triton repository
    url: https://github.com/triton-lang/triton
  - title: "Chen et al.: Tawa: Automatic Warp Specialization for Modern GPUs with Asynchronous References (arXiv preprint; CGO 2026)"
    url: https://arxiv.org/abs/2510.14719
links:
  - to: attention-backward-fa3-parity-h100
    kind: RELATED
    note: Same hardware and baseline; the backward pass is harder because of atomics and recomputation.
timeline:
  - date: 2025-10-16
    title: Tawa reaches up to 96% of FlashAttention-3 (FP16)
    body: A Triton-based compiler with automatic warp specialisation reports near-parity with FlashAttention-3 for FP16 attention forward on H100, from a development branch.
    source: https://arxiv.org/abs/2510.14719
explainer:
  oneLine: Can attention written in Triton reach 95% of FlashAttention-3 on H100? A Triton-based research compiler is close.
  flow:
    - FlashAttention-3 is hand-written low-level C++
    - Triton is Python-level, usually slower
    - Compiler must split warps into roles
    - Tawa branch reaches 96% in FP16
    - Released Triton at 95%, BF16 causal
  glossary:
    - term: attention
      meaning: The transformer operation in which each token takes a weighted average of other tokens, with weights from a softmax of similarity scores.
      link: /research/flashattention
    - term: softmax
      meaning: Turns a list of scores into positive weights that add up to 1, using exponentials.
      link: https://en.wikipedia.org/wiki/Softmax_function
    - term: FlashAttention
      meaning: A family of attention kernels that compute exact attention tile by tile without storing the full score matrix.
      link: /research/flashattention
    - term: Triton
      meaning: A Python-embedded language in which a GPU kernel is written for whole tiles; its compiler handles the low-level details.
      link: /research/triton-language
    - term: compiler
      meaning: A program that translates code from one language into machine instructions.
      link: https://en.wikipedia.org/wiki/Compiler
    - term: warp specialisation
      meaning: Giving different groups of GPU threads different jobs, for example some load data while others compute, so the two overlap.
      link: /research/tiled-gemm-tensor-cores
    - term: tensor core
      meaning: A unit inside each GPU core that multiplies small matrix tiles in one instruction, much faster than ordinary arithmetic.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: Hopper (H100)
      meaning: NVIDIA's 2022 data-centre GPU generation; the H100 is its main chip.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: register
      meaning: The fastest storage on a processor, private to each thread and very limited in number.
      link: https://en.wikipedia.org/wiki/Processor_register
  readFirst:
    - title: FlashAttention-2 (Stanford CRFM blog)
      url: https://crfm.stanford.edu/2023/07/17/flash2.html
      why: Plain-language account of why attention is memory-bound and how tiling helps.
    - title: Triton documentation and tutorials
      url: https://triton-lang.org/main/index.html
      why: Official introduction with runnable examples.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
site:
  aiReviewed: true
---

Write the attention forward pass in the Triton language (no inline PTX beyond what upstream Triton exposes) so that on one H100 SXM it reaches at least 95% of FlashAttention-3's forward throughput for head dimension 128, causal masking, BF16, sequence length 8192, in the batch/head configurations listed in the verification spec, with outputs matching FlashAttention-3 within the stated tolerance.

# State of the art

FlashAttention-3 is written in CUTLASS-style C++ with TMA, WGMMA, warp specialisation and ping-pong scheduling, and its authors report up to 740 TFLOP/s in FP16 on H100 (arXiv abstract). Triton includes a fused-attention tutorial kernel, and releases since 3.2 add TMA descriptors and automatic warp specialisation on Hopper; PyTorch's warp-specialisation post reports gains of 10–15% for FlashAttention-style kernels from it, not parity. The closest result is Tawa (Chen et al., arXiv:2510.14719, CGO 2026), an automatic warp-specialisation compiler built on Triton, which reports up to 96% of FlashAttention-3 throughput for FP16 attention forward on H100 (89% in FP8), from a development branch rather than a Triton release, and without a BF16 causal result at sequence 8192. Triton's lower-level Gluon dialect ships an attention example only for Blackwell. As of 2026-10-17 no released Triton kernel is documented at 95% of FlashAttention-3 on the configuration below.

# Applications

A compiler-language kernel at parity would make attention variants (new masks, positional schemes, sparsity patterns) cheap to write without sacrificing speed, and would indicate that the compiler captures Hopper asynchrony.

# Resolution criteria

A public Triton kernel at a pinned Triton release that meets the 95% bar on all configurations in the spec, reproduced by a second party.

# Rating rationale

Difficulty 20, the lowest in the pack: a Triton-based compiler (Tawa) already reports up to 96% of FlashAttention-3 in FP16 on a development branch, so what remains is BF16 causal coverage and landing the feature in a release. Application value 49: parity would let researchers write new attention variants in Python at full speed. Leverage 35: higher than the GEMM parity tasks because it tests whether a compiler can express Hopper warp specialisation, which every later Triton kernel inherits.

# Work mix rationale

Compiler and scheduling engineering; some new ideas needed to expose asynchrony in a tile-level language.

# Verification

Hardware: one H100 SXM 80 GB. Shapes: head dim 128, causal, BF16, sequence 8192 with batch x heads chosen so total tokens stay near 16384 (for example batch 2, 32 heads), plus sequence lengths 2048 and 16384 as secondary reports. Baseline: FlashAttention-3 from the Dao-AILab/flash-attention hopper/ directory at a pinned commit, compiled with CUDA 12.8 or later. Metric: forward TFLOP/s using the causal FLOP convention of the FlashAttention benchmarks, median of at least 100 iterations after warmup. Correctness: max absolute error versus an FP32 PyTorch reference no larger than 2x the error of FlashAttention-3 on the same inputs. Harness: a public script at a pinned commit timing both kernels in one process with triton.testing.do_bench or CUDA events.

# Plain explanation

Attention is the step where an AI model decides which words matter to each other. The fastest known program for it on NVIDIA's H100 chip is FlashAttention-3, written in a demanding low-level style that few people can modify.

Triton is a language that makes GPU programs much easier to write, but programs written with it have usually run somewhat slower than the best hand-written ones. The question is whether a Triton attention program can get within 5% of FlashAttention-3 for one clearly defined case: heads of size 128, a mask that stops words from looking ahead, and texts of 8,192 words.

Why is it hard? The fastest version organises the chip's workers into roles, with some fetching data and others multiplying, and it overlaps the multiplying with a different step, the softmax, to keep every unit busy. A high-level language has to let the programmer express this, or the translator has to find it on its own.

If achieved, new attention variants (different masks, positional tricks) could be written quickly without a speed penalty. It is worth re-checking against the current Triton release whether this has already been done.

# Student explanation

**What is asked.** Attention is the step in a transformer where each token compares itself with earlier tokens and takes a weighted average of their information. FlashAttention computes it tile by tile without ever storing the huge table of scores (see the FlashAttention entry). Its third version, FlashAttention-3, is written in low-level C++ for NVIDIA's H100 and reaches up to 740 TFLOP/s in FP16. Triton is a Python-level language in which a kernel is written for whole tiles and a compiler handles the details. The problem: a Triton attention forward kernel, using only a released version of Triton, at 95% or more of FlashAttention-3's speed for one fixed case. The case is BF16 numbers, head dimension 128, causal masking (a token may only look backwards), and sequences of 8192 tokens.

**Why it is hard.** For each block of queries, attention does a matrix multiply ($S = QK^\top$), a softmax (exponentials and a row sum), and another matrix multiply with $V$. The matrix multiplies run on tensor cores. The exponentials run on a different, much slower unit. FlashAttention-3 gets its speed by **warp specialisation**: some groups of threads only load data, while two other groups alternate, one doing exponentials while the other uses the tensor cores. A kitchen analogy: one cook fries while another chops, instead of one cook doing both in turn. The analogy breaks because on a GPU the "cooks" share a tiny pool of registers, so giving one role more storage starves the other. A Triton programmer cannot assign roles by hand. The compiler must discover the schedule itself.

**State of the art.** Triton releases since 3.2 add automatic warp specialisation on Hopper. PyTorch reports 10–15% gains from it for FlashAttention-style kernels, which is not parity. The closest result is Tawa, a research compiler built on Triton. It reports up to 96% of FlashAttention-3 for FP16 attention on H100 (89% in FP8). That code is on a development branch rather than in a release, and there is no BF16 causal result at 8192 tokens. As of 2026-10-17, no released Triton kernel is documented at 95% on this case.

**What a solution looks like.** A public Triton kernel at a pinned release, timed in the same process as FlashAttention-3 on one H100 and reproduced by a second party. It must reach the 95% bar on all listed batch and head configurations, with output error at most twice FlashAttention-3's.
