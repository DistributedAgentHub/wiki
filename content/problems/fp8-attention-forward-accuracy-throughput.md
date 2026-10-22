---
type: problem
slug: fp8-attention-forward-accuracy-throughput
title: FP8 attention that keeps FlashAttention-3 throughput at BF16-level accuracy
entry: flashattention
status: OPEN
origin: FlashAttention-3 FP8 forward (2024); outlier problems in low-precision attention
ratings:
  difficulty: 40
  applicationValue: 48
  leverage: 27
workMix:
  theory: 30
  engineering: 45
  compute: 5
  empirical: 20
verification:
  route: GPU_BENCHMARK
sources:
  - title: FlashAttention-3 (arXiv preprint)
    url: https://arxiv.org/abs/2407.08608
  - title: FP8 Formats for Deep Learning (arXiv preprint)
    url: https://arxiv.org/abs/2209.05433
links:
  - to: long-k-fp8-gemm-accuracy-full-throughput
    kind: RELATED
    note: Both trade FP8 throughput against accumulation and scaling error.
explainer:
  oneLine: Can attention run in 8-bit numbers at full speed without losing accuracy on real model data?
  flow:
    - 8-bit attention is fast but less accurate
    - Real models have outlier channels
    - Rotate and scale before rounding
    - Test on captured real activations
    - Near-8-bit speed, near-16-bit accuracy
  glossary:
    - term: FP8
      meaning: An 8-bit floating-point format; E4M3 keeps more precision, E5M2 more range.
      link: /research/fp8-formats-and-scaling
    - term: attention
      meaning: The transformer operation in which each token takes a weighted average of other tokens, with weights from a softmax of similarity scores.
      link: /research/flashattention
    - term: FlashAttention
      meaning: A family of attention kernels that compute exact attention tile by tile without storing the full score matrix.
      link: /research/flashattention
    - term: scale factor
      meaning: A multiplier applied before rounding to a narrow format so values fit its range, divided out afterwards.
      link: /research/fp8-formats-and-scaling
    - term: outlier
      meaning: A value far larger in size than most others in the same set.
      link: https://en.wikipedia.org/wiki/Outlier
    - term: rounding error
      meaning: The difference between a true value and the nearest number the format can store.
      link: https://en.wikipedia.org/wiki/Round-off_error
    - term: minifloat
      meaning: A floating-point number with very few bits (16, 8, 6 or 4), trading precision and range for speed.
      link: https://en.wikipedia.org/wiki/Minifloat
    - term: Hopper (H100)
      meaning: NVIDIA's 2022 data-centre GPU generation; the H100 is its main chip.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
  readFirst:
    - title: FlashAttention-2 (Stanford CRFM blog)
      url: https://crfm.stanford.edu/2023/07/17/flash2.html
      why: Plain-language account of why attention is memory-bound and how tiling helps.
    - title: Floating-point arithmetic (Wikipedia)
      url: https://en.wikipedia.org/wiki/Floating-point_arithmetic
      why: Background on how computers store non-whole numbers.
    - title: Minifloat (Wikipedia)
      url: https://en.wikipedia.org/wiki/Minifloat
      why: What 8-bit and smaller floating-point formats look like.
site:
  aiReviewed: true
---

Design an FP8 attention forward kernel for H100 whose throughput is at least 95% of FlashAttention-3's FP8 forward for head dimension 128 and sequence 8192, and whose output error against an FP32 reference is no larger than that of FlashAttention-3 BF16 multiplied by 2, on activations with realistic outlier structure (the test tensors are captured from named open-weights models, listed in the spec).

# State of the art

FlashAttention-3's abstract reports FP8 forward close to 1.2 PFLOP/s and 2.6x lower numerical error than a baseline FP8 attention, using block quantisation and incoherent processing (random orthogonal transforms to spread outliers). The error remains larger than BF16 attention, and that statement is about random Gaussian-like inputs plus an outlier-injected test; behaviour on activations captured from specific production models is an open measurement question. FP8 backward attention is not covered by the FlashAttention-3 FP8 results.

# Applications

FP8 attention would roughly double attention tensor-core throughput on Hopper and relieve KV-cache bandwidth when K and V are stored in FP8.

# Resolution criteria

A public kernel and error report from captured activations of the listed models that meets both bounds, rerun by a second party.

# Rating rationale

Difficulty 40, highest of the attention kernels: it needs numerics research (outlier-robust scaling of Q and K on real activations) on top of kernel work, comparable to the parked FP8 accumulator-width question (35.5). Application value 48: would make FP8 attention usable where BF16 accuracy is required. Leverage 27: shapes FP8 inference stacks without gating other results.

# Work mix rationale

A mix of numerics design and kernel work, with an empirical component from capturing activations of real models.

# Verification

Hardware: one H100 SXM 80 GB. Dtypes: Q, K, V in E4M3, FP32 softmax statistics, BF16 output. Shapes: head dim 128, sequence 8192, causal and non-causal, 32 heads, total tokens near 16384. Inputs: Q, K, V activations from layer 0, 15 and last layer of two named open-weights LLMs on a fixed 8k-token text sample, plus the synthetic outlier test of the FlashAttention-3 paper. Baselines: FlashAttention-3 FP8 and BF16 forward at a pinned commit. Metric: TFLOP/s median over at least 100 iterations; RMSE and max error versus an FP32 reference. Correctness bound as in the statement. Harness: public script and captured tensors (or capture script) at a pinned commit.

# Plain explanation

Using 8-bit numbers instead of 16-bit roughly doubles how fast the GPU multiplies. FlashAttention-3 includes an 8-bit version of attention, reported to be much more accurate than a basic 8-bit approach but still less accurate than the usual 16-bit version.

The question is whether one can get nearly all the speed of the 8-bit version while keeping the error close to the 16-bit one, tested on numbers taken from real, named open models rather than on made-up data.

The obstacle is that attention scores are touchy. A few channels in real models have very large values, and squeezing everything into 8 bits then crushes the small values together. Tricks like randomly rotating the numbers first, to spread the large values around, help but cost extra work.

If solved, models could run attention faster and keep their stored notes in less memory. If it cannot be done, 8-bit attention would remain suitable only for models that tolerate extra error. The target here is deliberately concrete: speed at least 95% of the existing 8-bit program, and error at most twice that of the 16-bit one.

# Student explanation

**What is asked.** Running attention in FP8 (8-bit floating point) roughly doubles the matrix-multiply rate on an H100 compared with 16-bit BF16, but each number keeps only about one significant decimal digit. FlashAttention-3 already has an FP8 forward kernel. The problem asks for an FP8 attention kernel that keeps at least 95% of FlashAttention-3's FP8 speed (head dimension 128, 8192 tokens). Its error, measured against a 32-bit reference, must be no more than twice that of FlashAttention-3 in BF16. The test inputs are not random numbers but query, key and value tensors captured from named open-weights language models.

**Why real data is the barrier.** Before rounding to FP8, a block of numbers is multiplied by a scale factor $s$ so that its largest value lands near the top of the format's range (448 for E4M3): $q = \mathrm{round}(s x)$. If a block contains one outlier, say a value of 300 among values near 1, the scale is set by the 300. The ordinary values are then squeezed into the bottom few representable steps and lose most of their precision. A ruler marked only every 10 cm measures a 3 m plank fine but a 2 cm screw badly. Real language models are known to have such outlier channels. The analogy breaks because the kernel can change the data before measuring it. FlashAttention-3 multiplies $Q$ and $K$ by a random orthogonal matrix (a rotation, which preserves dot products: $(QR)(KR)^\top = QK^\top$). The rotation spreads an outlier's size across many entries, which a ruler cannot do to a plank.

**State of the art.** FlashAttention-3's paper reports FP8 forward close to 1.2 PFLOP/s, and 2.6 times lower error than a baseline FP8 attention, using block-wise scales and this rotation trick ("incoherent processing"). Its error is still larger than BF16 attention. That comparison used random Gaussian-like inputs plus a test with injected outliers, not activations captured from production models, so how FP8 attention behaves on real activations is an open measurement question. The FP8 backward pass is not covered.

**What a solution looks like.** A public kernel, the captured test tensors (or a script to capture them) and an error report. A second party reruns them and confirms both bounds: at least 95% of FlashAttention-3 FP8 speed, and at most twice its BF16 error.
