---
type: entry
slug: fp8-formats-and-scaling
title: FP8 formats and scaling recipes for training and inference
field: low-precision-numerics
kind: THEORY
status: ACTIVE
summary: The two 8-bit floating-point encodings (E4M3 and E5M2), why tensors need scale factors, and the recipes (per-tensor, delayed, fine-grained blockwise) that make FP8 GEMMs usable for LLMs.
reliedOn: FP8 tensor cores on Hopper and later GPUs double matrix throughput over 16-bit formats; Transformer Engine, DeepSeek-V3 training and FP8 attention all rest on these formats and scaling choices.
dependsOn:
  - cuda-memory-hierarchy-roofline
  - tiled-gemm-tensor-cores
references:
  - title: "Micikevicius et al.: FP8 Formats for Deep Learning (arXiv preprint)"
    url: https://arxiv.org/abs/2209.05433
    kind: paper
  - title: "DeepSeek-AI: DeepSeek-V3 Technical Report (arXiv preprint; FP8 mixed-precision training section)"
    url: https://arxiv.org/abs/2412.19437
    kind: paper
  - title: "NVIDIA Transformer Engine documentation: FP8 recipes"
    url: https://docs.nvidia.com/deeplearning/transformer-engine/
    kind: docs
  - title: Transformer Engine repository
    url: https://github.com/NVIDIA/TransformerEngine
    kind: code
timeline:
  - date: 2022-09-01
    title: FP8 interchange formats proposed
    body: E4M3 and E5M2 encodings and training results up to 175B parameters (arXiv, September 2022).
    source: https://arxiv.org/abs/2209.05433
  - date: 2024-12-01
    title: FP8 training at scale with blockwise scaling
    body: DeepSeek-V3 reports an FP8 mixed-precision training framework with tile and block scaling (arXiv, December 2024).
    source: https://arxiv.org/abs/2412.19437
explainer:
  oneLine: Storing AI numbers in 8 bits instead of 16, with scale factors that keep them in range.
  flow:
    - 16-bit numbers cost memory and time
    - 8-bit halves both
    - Scale factors fit values into range
    - Sums accumulate in a wider format
    - Large models train mostly in FP8
  glossary:
    - term: floating point
      meaning: "The way computers store numbers with a decimal point: a few digits plus a size, like scientific notation."
      link: https://en.wikipedia.org/wiki/Floating-point_arithmetic
    - term: quantization
      meaning: Storing numbers with fewer bits to save memory and time, at the cost of some precision.
      link: https://en.wikipedia.org/wiki/Quantization_(signal_processing)
    - term: minifloat
      meaning: A floating-point number stored in very few bits, such as 8 or 4.
      link: https://en.wikipedia.org/wiki/Minifloat
    - term: scale factor
      meaning: A number a whole group of values is divided by before being squeezed into few bits, then multiplied back after.
      link: https://en.wikipedia.org/wiki/Quantization_(signal_processing)
    - term: tensor core
      meaning: A special unit inside the GPU that multiplies small blocks of numbers very quickly.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: GEMM
      meaning: "General matrix multiply: multiplying two grids of numbers. Most of the work in AI models is made of these."
      link: https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
    - term: rounding error
      meaning: The small mistake from storing a number with limited digits. Many small mistakes can add up.
      link: https://en.wikipedia.org/wiki/Round-off_error
    - term: Hopper
      meaning: NVIDIA GPU generation (H100) introduced in 2022.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: mantissa (significand)
      meaning: The digits of a floating-point number that give its precision, as opposed to the exponent that sets its size.
      link: https://en.wikipedia.org/wiki/Significand
    - term: BF16
      meaning: A 16-bit floating-point format with FP32’s 8 exponent bits but only 7 mantissa bits, widely used for training.
      link: https://en.wikipedia.org/wiki/Bfloat16_floating-point_format
    - term: gradient
      meaning: The derivatives of the training error with respect to each weight, telling which way to change each one.
      link: https://en.wikipedia.org/wiki/Gradient
    - term: outlier
      meaning: A value far larger in size than most of the others in the same set.
      link: https://en.wikipedia.org/wiki/Outlier
  readFirst:
    - title: Floating-point arithmetic (Wikipedia)
      url: https://en.wikipedia.org/wiki/Floating-point_arithmetic
      why: Background on how computers store non-whole numbers.
    - title: Minifloat (Wikipedia)
      url: https://en.wikipedia.org/wiki/Minifloat
      why: What 8-bit and smaller floating-point formats look like.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
site:
  published: true
  aiReviewed: true
---

## The formats

The 2022 FP8 interchange proposal (Micikevicius et al.) defines two encodings. **E4M3** has 4 exponent bits and 3 mantissa bits; it gives up infinities and has a single NaN pattern, which extends its dynamic range, with a maximum finite value of 448. **E5M2** has 5 exponent bits and 2 mantissa bits, follows IEEE conventions for special values, and has a maximum finite value of 57344. Convention: E4M3 for weights and activations (more precision), E5M2 for gradients (more range). With only 8 bits per number, the usable range of real tensors rarely fits without rescaling.

## Scaling

Each tensor (or part of it) is multiplied by a **scale factor** before conversion so its largest values land near the top of the representable range, and the scale is divided out after the matrix product. Recipes differ in how the scale is chosen:

- **Per-tensor current scaling**: compute the maximum absolute value of the tensor, then scale. Accurate, but needs a pass over the data.
- **Delayed scaling**: take the scale from a history of maxima from previous iterations, avoiding a pass but risking overflow when values spike. NVIDIA's Transformer Engine implements this and other recipes.
- **Fine-grained (blockwise) scaling**: a separate scale for each small tile, limiting the damage from outliers. DeepSeek-V3 (2024) used 1x128 tiles for activations and 128x128 blocks for weights, and reported an FP8 training framework validated at very large scale.

## Accumulation

Products of FP8 numbers are accumulated in higher precision, but hardware accumulators are not full FP32. The DeepSeek-V3 report notes that FP8 GEMM accumulation on the Hopper tensor cores it used keeps limited precision, and it promotes partial sums to FP32 on CUDA cores at intervals; a bit-level model of the tensor cores (Khattak and Mikaitis, arXiv:2512.07004) puts the H100 FP8 accumulation at 13 fractional bits, against 25 on B200. The interaction of inner dimension K, accumulator width and error is a live engineering question (see the related problem).

## Where FP8 is used

Training: forward and backward GEMMs in FP8 with higher-precision master weights, optimiser state and a few sensitive operators (normalisation, softmax, embeddings, often the output head). Inference: weight and activation quantisation, FP8 KV caches, and FP8 attention (FlashAttention-3). Open kernels (DeepGEMM) and libraries (cuBLAS, CUTLASS, Transformer Engine) implement the scaling variants.

## Limits

FP8 helps most where GEMMs dominate. Gains shrink for memory-bound layers, for small models, and when scale computation and format conversion are not fused into neighbouring kernels. Loss spikes and divergence in long runs motivate the finer scaling and narrower formats treated in the microscaling entry.

# Plain explanation

Computers store numbers in a limited number of bits. More bits means more detail and a wider range, but also more memory and slower arithmetic. AI models turned out to cope with surprisingly little precision, so chip makers added support for 8-bit numbers, which are twice as compact as the usual 16-bit ones and let the chip multiply about twice as fast.

There are two main 8-bit designs. One keeps a little more detail and is used for the model's weights and activations. The other covers a wider range of sizes and is used for the signals that flow backwards when the model learns. Eight bits cannot cover the full range of values in a real model, so each group of numbers is first multiplied by a scale factor chosen to make it fit, and divided back out after the calculation. Choosing scales is like zooming a map to show a region: too far out and details vanish, too far in and parts fall off the edge.

Multiplying numbers is cheap but adding up long lists of them needs more precision, so chips add up in a wider format. How wide this really is, and how it affects accuracy, matters for the largest models.

Projects such as DeepSeek-V3 have trained very large models mostly in 8-bit numbers. The saving is real mainly where multiplication dominates; parts of the model that are sensitive still use more bits.

# Student explanation

**Floating point in binary.** A computer stores a real number like scientific notation in base 2, $x = \pm 1.m \times 2^{e}$, with some bits for the exponent $e$ and some for the mantissa (fraction) $m$. Standard FP32 uses 32 bits (8 exponent, 23 mantissa); BF16 and FP16 use 16 bits. FP8 uses 8 bits in total. Why bother: an NVIDIA H100 does about 1979 TFLOP/s of dense FP8 matrix arithmetic against about 989 for BF16, and each number costs half the memory traffic.

**The two FP8 formats.** E4M3 has 4 exponent bits and 3 mantissa bits; its largest value is 448. E5M2 has 5 exponent bits and 2 mantissa bits; its largest value is 57344. With 3 mantissa bits, neighbouring numbers between 1 and 2 are $2^{-3} = 0.125$ apart, so E4M3 keeps only about one significant decimal digit. The usual convention is E4M3 for weights and activations, which need precision, and E5M2 for gradients, which need range.

**What goes wrong without scaling.** The tensors (arrays of numbers) inside a neural network can hold values like 0.0003 and 5000. Values below the smallest representable size become zero, and values above the maximum overflow. So each tensor is multiplied by a scale factor $s$ before conversion and divided by it afterwards:
$q = \mathrm{round}_{\text{FP8}}(s\,x), \qquad x \approx q/s.$
In words: stretch the numbers so the largest lands near the top of the format's range, round, and remember the stretch. Example: if the largest $|x|$ is 3.5, choose $s = 448/3.5 = 128$. Analogy: choosing the units on a ruler so the object fills it. The analogy breaks when one extreme value (an outlier) forces a scale that squeezes all the ordinary values into a few marks.

**Recipes.** Per-tensor current scaling computes the maximum every time: accurate, but needs an extra pass over the data. Delayed scaling reuses maxima from earlier training steps: cheaper, but it can overflow when values suddenly spike. NVIDIA's Transformer Engine implements these recipes. Fine-grained scaling gives each small tile its own scale: DeepSeek-V3 (2024) used 1 × 128 tiles for activations and 128 × 128 blocks for weights, so an outlier only spoils its own tile.

**Accumulation.** Products of FP8 numbers are summed in higher precision, but the DeepSeek-V3 report notes that FP8 matrix multiplication on Hopper tensor cores keeps limited accumulation precision, so it periodically moves partial sums into full FP32 on the ordinary cores.

**Limits.** Sensitive operations (normalisation, softmax, embeddings, often the output layer) stay in higher precision. Gains shrink for memory-bound layers and small models, and long training runs can show sudden loss spikes, which motivates finer scaling.
