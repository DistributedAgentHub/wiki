---
type: problem
slug: attention-backward-fa3-parity-h100
title: An open attention backward kernel within 10% of FlashAttention-3 for head dimension 256
entry: flashattention
status: OPEN
origin: FlashAttention-3 backward pass; head dimension 256 support in Hopper kernels
ratings:
  difficulty: 33
  applicationValue: 38
  leverage: 25
workMix:
  theory: 10
  engineering: 78
  compute: 6
  empirical: 6
verification:
  route: GPU_BENCHMARK
sources:
  - title: FlashAttention-3 (arXiv preprint)
    url: https://arxiv.org/abs/2407.08608
  - title: FlashAttention repository
    url: https://github.com/Dao-AILab/flash-attention
explainer:
  oneLine: Can an open program for the learning-phase of attention run within 10% of the best one at large head sizes?
  flow:
    - Learning needs a backward attention pass
    - Five multiplies per block pair
    - Large heads overflow fast storage
    - Match best program within 10%
    - Open, modifiable training kernels
  glossary:
    - term: backward pass
      meaning: The step in training that computes, by the chain rule, how the loss changes with every input and weight.
      link: https://en.wikipedia.org/wiki/Backpropagation
    - term: gradient
      meaning: The list of derivatives of the training loss with respect to each number in the model.
      link: https://en.wikipedia.org/wiki/Gradient
    - term: attention
      meaning: The transformer operation in which each token takes a weighted average of other tokens, with weights from a softmax of similarity scores.
      link: /research/flashattention
    - term: FlashAttention
      meaning: A family of attention kernels that compute exact attention tile by tile without storing the full score matrix.
      link: /research/flashattention
    - term: shared memory
      meaning: A small, fast, programmer-managed memory inside each GPU core, shared by a block of threads.
      link: /research/cuda-memory-hierarchy-roofline
    - term: register
      meaning: The fastest storage on a processor, private to each thread and very limited in number.
      link: https://en.wikipedia.org/wiki/Processor_register
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: Hopper (H100)
      meaning: NVIDIA's 2022 data-centre GPU generation; the H100 is its main chip.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: tiling
      meaning: Splitting a large matrix operation into small blocks that fit in fast on-chip memory and are reused many times.
      link: /research/tiled-gemm-tensor-cores
  readFirst:
    - title: FlashAttention-2 (Stanford CRFM blog)
      url: https://crfm.stanford.edu/2023/07/17/flash2.html
      why: Plain-language account of why attention is memory-bound and how tiling helps.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
    - title: Roofline model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Roofline_model
      why: Short overview of the chart and how to read it.
site:
  aiReviewed: true
---

Provide an openly licensed attention backward kernel, written in any language other than the FlashAttention-3 codebase itself, that reaches at least 90% of FlashAttention-3's backward throughput on one H100 SXM for BF16, head dimension 256, causal, sequence 4096 to 16384, with gradients matching a float32 reference within the stated tolerance.

# State of the art

The backward pass has lower arithmetic efficiency than the forward pass: it performs five matrix multiplications per tile pair instead of two, needs gradient accumulation into dQ across blocks (often through atomic adds or a separate pass), and keeps more state in registers and shared memory. Large head dimensions (192 and 256) stress the register and shared-memory budget further. FlashAttention-3's hopper/ directory ships head-dimension-256 backward kernels (BF16 and FP16), and the newer CuTe-DSL FlashAttention-4 code accepts head dimensions up to 256 on Hopper; no ThunderKittens, TileLang, Triton or other open kernel publishes a head-dimension-256 backward comparison against FlashAttention-3.

# Applications

Training cost for long-context models depends on the backward pass; large head dimensions appear in some multi-head latent attention and vision models.

# Resolution criteria

A public kernel meeting the 90% bar on the full sweep in two independent reruns.

# Rating rationale

Difficulty 33: five matmuls per tile pair, cross-block dQ accumulation and the register budget at head dimension 256 make it clearly harder than the forward parity task (20), and no open kernel publishes a comparison. Application value 38: training cost for large-head models only, narrower than forward attention (49). Leverage 25: a few downstream kernels.

# Work mix rationale

Kernel engineering dominated by resource budgeting; limited theory.

# Verification

Hardware: one H100 SXM 80 GB. Shapes: head dim 256, causal, BF16, sequence 4096, 8192, 16384, total tokens near 16384. Baseline: FlashAttention-3 backward from the hopper/ directory of Dao-AILab/flash-attention at a pinned commit. Metric: backward TFLOP/s (FlashAttention benchmark convention, 2.5x forward FLOPs), median of at least 100 iterations after warmup, three runs. Correctness: dQ, dK, dV max absolute error versus an FP32 PyTorch autograd reference no larger than 2x that of FlashAttention-3, and bitwise-identical results across two runs are not required but run-to-run variation is reported. Harness: public script at a pinned commit.

# Plain explanation

When an AI model learns, it runs each step forward to make a prediction and then backward to work out how to improve. For attention, the backward step is harder to make fast than the forward step. It needs more matrix multiplications, and the pieces of the answer from different blocks must be added together safely.

This problem asks for an open program, written in anything but the FlashAttention-3 code itself, that gets at least 90% of its backward speed on the H100 chip for one case: heads of size 256 and texts of 4,096 to 16,384 words, with the mask that stops words from looking ahead.

Large head sizes are particularly tough because the blocks of data that must be kept in the chip's fastest storage get too big, so the program has to use smaller blocks and keeps the multiplying units less busy.

If solved, researchers training long-text or unusually shaped models could rely on an open, modifiable backward program without paying a speed penalty. The size of today's gap for this particular case is not published in a source reviewed here, which is why the problem is stated against a measured baseline.

# Student explanation

**What is asked.** Training a neural network needs a **backward pass**: after the model makes a prediction, the chain rule from calculus is applied layer by layer to find how the error changes with every input and weight. For attention, this means computing three gradients, $dQ$, $dK$ and $dV$, for the query, key and value matrices. FlashAttention-3 has a fast backward kernel on NVIDIA's H100, including for large **head dimension** 256 (the length of each query and key vector). The problem asks for an open kernel, in any language other than the FlashAttention-3 code itself, that reaches 90% of its backward speed at head dimension 256. The test uses BF16 numbers, causal masking, and sequences of 4096 to 16384 tokens.

**Why the backward pass is harder.** The forward pass does two matrix multiplies per pair of tiles. The backward pass does five: it recomputes the scores, multiplies them back through $V$, and forms the three gradients. Each query block's $dQ$ also receives contributions from every key block. Different thread blocks must therefore add into the same memory, either with atomic additions (hardware-guaranteed, but slow when many threads collide) or with a separate pass. Head dimension 256 makes it worse. A tile of 64 rows by 256 columns in 4-byte floats is already 64 KB, and the kernel must keep several such tiles plus running sums in registers and in shared memory, a fast scratchpad of a few hundred kilobytes per core. It is like packing a suitcase that is barely big enough. Each extra item forces smaller tiles, and smaller tiles mean less reuse and more memory traffic. The analogy breaks because the programmer can also trade storage for recomputation, which a suitcase cannot.

**State of the art.** FlashAttention-3's Hopper code ships head-dimension-256 backward kernels in BF16 and FP16. The newer FlashAttention-4, written in NVIDIA's CuTe Python DSL, accepts head dimensions up to 256 on Hopper. No other open kernel, whether ThunderKittens, TileLang, Triton or anything else, publishes a head-dimension-256 backward comparison against FlashAttention-3. So nobody knows how big the gap is.

**What a solution looks like.** A public kernel timed against FlashAttention-3 on one H100 across the stated sequence lengths, reaching 90% in two independent reruns. Its gradients must stay within twice FlashAttention-3's error against a 32-bit reference.
