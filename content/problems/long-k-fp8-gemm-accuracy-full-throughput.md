---
type: problem
slug: long-k-fp8-gemm-accuracy-full-throughput
title: FP8 GEMM with FP32-accumulation accuracy at long K without a throughput penalty
entry: fp8-formats-and-scaling
status: OPEN
origin: Limited FP8 tensor-core accumulation reported in the DeepSeek-V3 report (2024)
ratings:
  difficulty: 34
  applicationValue: 47
  leverage: 26
workMix:
  theory: 30
  engineering: 45
  compute: 15
  empirical: 10
verification:
  route: GPU_BENCHMARK
sources:
  - title: DeepSeek-V3 Technical Report (arXiv preprint)
    url: https://arxiv.org/abs/2412.19437
  - title: DeepGEMM repository
    url: https://github.com/deepseek-ai/DeepGEMM
  - title: "Khattak, Mikaitis: Accurate Models of NVIDIA Tensor Cores (arXiv preprint)"
    url: https://arxiv.org/abs/2512.07004
  - title: "PyTorch blog: Some Matrix Multiplication Engines Are Not As Accurate As We Thought"
    url: https://pytorch.org/blog/some-matrix-multiplication-engines-are-not-as-accurate-as-we-thought/
  - title: cuBLAS documentation (CUBLASLT_MATMUL_DESC_FAST_ACCUM)
    url: https://docs.nvidia.com/cuda/cublas/index.html
links:
  - to: open-fp8-gemm-h100-cublas-parity
    kind: RELATED
    note: Parity with cuBLAS is only meaningful if accuracy is also controlled.
explainer:
  oneLine: Can an H100 FP8 matrix multiply add very long sums as accurately as 32-bit, at full fast-mode speed?
  flow:
    - Long sums pile up rounding errors
    - H100 FP8 adds with 13-bit precision
    - Moving sums to FP32 costs time
    - Fast mode skips it, loses accuracy
    - "Want both: accurate and fast"
  glossary:
    - term: FP8
      meaning: An 8-bit floating-point format; E4M3 keeps more precision, E5M2 more range.
      link: /research/fp8-formats-and-scaling
    - term: GEMM
      meaning: "General matrix multiply, C = A·B: the operation that takes most of the arithmetic in neural networks."
      link: /research/tiled-gemm-tensor-cores
    - term: accumulator
      meaning: The register that holds a running sum while many products are added together.
      link: https://en.wikipedia.org/wiki/Accumulator_(computing)
    - term: rounding error
      meaning: The difference between a true value and the nearest number the format can store.
      link: https://en.wikipedia.org/wiki/Round-off_error
    - term: floating point
      meaning: "Scientific notation in binary: a sign, a fraction (mantissa) and an exponent."
      link: https://en.wikipedia.org/wiki/Floating-point_arithmetic
    - term: tensor core
      meaning: A unit inside each GPU core that multiplies small matrix tiles in one instruction, much faster than ordinary arithmetic.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: cuBLAS
      meaning: NVIDIA's closed-source library of tuned linear-algebra routines, the usual speed baseline for matrix multiply.
      link: https://en.wikipedia.org/wiki/CUDA
    - term: Hopper (H100)
      meaning: NVIDIA's 2022 data-centre GPU generation; the H100 is its main chip.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: gradient
      meaning: The list of derivatives of the training loss with respect to each number in the model.
      link: https://en.wikipedia.org/wiki/Gradient
    - term: outlier
      meaning: A value far larger in size than most others in the same set.
      link: https://en.wikipedia.org/wiki/Outlier
  readFirst:
    - title: "PyTorch blog: Some Matrix Multiplication Engines Are Not As Accurate As We Thought"
      url: https://pytorch.org/blog/some-matrix-multiplication-engines-are-not-as-accurate-as-we-thought/
      why: Shows by experiment how limited FP8 accumulation on GPUs is.
    - title: "Wikipedia: Floating-point arithmetic"
      url: https://en.wikipedia.org/wiki/Floating-point_arithmetic
      why: Background on rounding and why the order of additions matters.
    - title: "Wikipedia: Minifloat"
      url: https://en.wikipedia.org/wiki/Minifloat
      why: What 8-bit floating-point numbers can and cannot represent.
site:
  aiReviewed: true
---

For K up to 32768 on one H100 SXM, produce an FP8 GEMM whose output error against an FP64 reference is at most 2x the error of a true FP32-accumulating FP8 emulation, while running within 5% of the throughput of cuBLAS's **fast-accumulate** FP8 GEMM (`CUBLASLT_MATMUL_DESC_FAST_ACCUM` = 1, which skips promotion of partial sums) on the same shapes. In other words: FP32-quality accumulation at the speed of the unpromoted kernel. Test inputs include Gaussian entries and activations with heavy-tailed outliers.

# State of the art

Khattak and Mikaitis (arXiv:2512.07004) model the H100 FP8 tensor-core path (wgmma) as adding groups of 32 products with only 13 fractional bits, truncating aligned significands, whereas B200 keeps 25 bits; a PyTorch engineering post reached a similar conclusion from measurements. The DeepSeek-V3 report works around this by promoting partial sums to FP32 on CUDA cores at fixed intervals, and cuBLAS does the same by default, periodically promoting unless fast accumulation is switched on. Promotion costs issue slots and registers, and its interval trades accuracy against throughput. No primary source publishes the error-versus-throughput frontier over K, or a kernel that gets promoted-level accuracy at fast-accumulate speed.

# Applications

Long-K reductions appear in the backward weight-gradient GEMM (K equal to tokens) and in large-hidden-size layers; accumulation error there decides whether FP8 training is stable.

# Resolution criteria

A public kernel and a published error and throughput table over K at a pinned commit, reproduced by an independent party.

# Rating rationale

Difficulty 34: getting promoted-FP32 accuracy at fast-accumulate speed requires a new way to hide promotion cost against a 13-bit hardware accumulator, harder than plain parity (24) and close to the parked accumulator-width bound problem (35.5). Application value 47: weight-gradient GEMMs with K equal to the token count decide FP8 training stability. Leverage 26: informs FP8 recipes and kernels.

# Work mix rationale

Mostly kernel engineering to hide promotion cost, plus error analysis against a now-documented accumulator model and measurement of error versus K.

# Verification

Hardware: one H100 SXM 80 GB. Dtypes: E4M3 A and B with block scaling, BF16 output. Shapes: M=N in {1024, 4096}, K in {1024, 4096, 8192, 16384, 32768}. Inputs: standard normal and a heavy-tailed mixture (1% of entries scaled by 100) with fixed seeds. Reference: FP64 GEMM of the dequantised inputs. Baselines: cuBLAS FP8 GEMM (CUDA 12.9 or later) with fast accumulation on, for throughput (default-accumulation cuBLAS also reported, for error and speed); an emulated exact-FP32-accumulation FP8 GEMM for the error yardstick. Metric: max and RMS relative error, and median TFLOP/s over at least 100 iterations. Pass: error at most 2x the emulated-FP32 yardstick and throughput at least 95% of fast-accumulate cuBLAS for every listed shape. Harness: public script at a pinned commit.

# Plain explanation

When a chip multiplies two tables of numbers, each result entry is a sum of many products. The longer the sums, the more small rounding mistakes pile up. With ordinary 16-bit numbers chips add up in a wide format and this is fine. With 8-bit numbers the multiplying is also done at low precision, and one large AI lab reported that the adding on the chips they used keeps fewer digits than expected, so they periodically moved partial sums into a wider format. That costs time.

The problem asks for an 8-bit multiply for lists up to 32,768 long whose error is at most twice that of an exact-sum version, while running within 5% of the standard library's speed.

The difficulty is that nobody outside the chip maker knows exactly how many digits the hardware keeps, so the amount of error is found by experiment. Fixing it by adding in wider format more often slows the multiply.

If solved, training with 8-bit numbers becomes more reliable, particularly for the step that works out how to change the model's weights, which adds up over very many data items. The test uses both ordinary random numbers and ones with rare very large values, since real data looks like the second.

# Student explanation

**What is asked.** Each entry of a matrix product is a long sum: $c_{ij} = \sum_{k=1}^{K} a_{ik} b_{kj}$. In neural-network training, $K$ can be tens of thousands, for example when the gradient for a weight matrix is summed over every token in a batch. On an H100, FP8 matrix multiplies are fast, but the hardware adds the products with limited precision. The problem asks for an FP8 matrix multiply, for $K$ up to 32768, whose error is at most twice that of an ideal version that adds in full 32-bit precision. It must also run within 5% of the speed of cuBLAS's **fast-accumulate** mode, which skips the usual accuracy fix.

**Why long sums go wrong.** A running sum stored with only a few fractional bits loses the small products. Suppose the accumulator keeps 13 fractional bits (a relative precision of about $2^{-13} \approx 10^{-4}$) and the running total has reached 1000. Its spacing is then $2^{9-13} approx 0.06$, so adding a product of 0.05 changes nothing after truncation. Over 30000 additions, these lost pieces can add up to a large error. The analogy is a bathroom scale with 100 g steps, used to weigh a sack of rice grain by grain. Every single grain registers zero. The analogy breaks because the hardware rounds whole groups of 32 products at once, not one grain at a time, so the loss depends on the data.

**What is known.** A bit-level study (Khattak and Mikaitis) models the H100's FP8 tensor-core path as adding groups of 32 products with only 13 fractional bits, with truncation. The newer B200 keeps 25. A PyTorch engineering post reached a similar conclusion by measurement. The fix used by DeepSeek-V3, and by cuBLAS by default, is **promotion**: every so often, copy the partial sum out of the tensor core and add it into a full 32-bit register on the ordinary cores. Promotion costs instruction slots and registers. Fast-accumulate mode skips it and is faster. How often to promote trades accuracy against speed, but nobody has published that trade-off curve as a function of $K$. Nor is there a kernel that gets promotion-level accuracy at fast-mode speed.

**What a solution looks like.** A public kernel and a table of error and speed for each $K$ on one H100, on Gaussian and outlier-heavy inputs. It must meet both bounds on every shape, and an independent party must reproduce it.
