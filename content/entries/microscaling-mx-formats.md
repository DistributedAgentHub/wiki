---
type: entry
slug: microscaling-mx-formats
title: Microscaling (MX) and block-scaled 4-bit formats
field: low-precision-numerics
kind: THEORY
status: EMERGING
summary: Data formats that share one scale across a small block of narrow elements (MXFP8, MXFP6, MXFP4, MXINT8, and NVIDIA's NVFP4), implemented in Blackwell tensor cores.
reliedOn: 4-bit and 6-bit inference and training on Blackwell-class hardware depend on block-scaled formats; the OCP MX specification is the common reference for several vendors.
dependsOn:
  - fp8-formats-and-scaling
references:
  - title: "Rouhani et al.: Microscaling Data Formats for Deep Learning (arXiv preprint)"
    url: https://arxiv.org/abs/2310.10537
    kind: paper
  - title: "NVIDIA: Pretraining Large Language Models with NVFP4 (arXiv preprint)"
    url: https://arxiv.org/abs/2509.25149
    kind: paper
  - title: "Open Compute Project: OCP Microscaling Formats (MX) specification"
    url: https://www.opencompute.org/documents/ocp-microscaling-formats-mx-v1-0-spec-final-pdf
    kind: docs
  - title: "microxcaling: emulation library for MX formats"
    url: https://github.com/microsoft/microxcaling
    kind: code
timeline:
  - date: 2023-10-01
    title: MX formats paper
    body: Microscaling formats evaluated across inference and training benchmarks (arXiv preprint, October 2023).
    source: https://arxiv.org/abs/2310.10537
  - date: 2025-09-01
    title: NVFP4 pretraining report
    body: A 12B-parameter model on 10T tokens reported comparable to an FP8 baseline (arXiv preprint, September 2025).
    source: https://arxiv.org/abs/2509.25149
explainer:
  oneLine: Number formats where small groups of values share one scale, making 4-bit and 6-bit AI math workable.
  flow:
    - Few bits cannot cover wide ranges
    - Give each small group its own scale
    - Hardware applies scales inside the multiply
    - Training in 4 bits reported comparable
    - Open recipes and kernels still needed
  glossary:
    - term: floating point
      meaning: "The way computers store numbers with a decimal point: a few digits plus a size, like scientific notation."
      link: https://en.wikipedia.org/wiki/Floating-point_arithmetic
    - term: minifloat
      meaning: A floating-point number stored in very few bits, such as 8 or 4.
      link: https://en.wikipedia.org/wiki/Minifloat
    - term: quantization
      meaning: Storing numbers with fewer bits to save memory and time, at the cost of some precision.
      link: https://en.wikipedia.org/wiki/Quantization_(signal_processing)
    - term: scale factor
      meaning: A number a whole group of values is divided by before being squeezed into few bits, then multiplied back after.
      link: https://en.wikipedia.org/wiki/Quantization_(signal_processing)
    - term: stochastic rounding
      meaning: Rounding up or down at random, in proportion to how close the number is, so errors cancel on average.
      link: https://en.wikipedia.org/wiki/Stochastic_rounding
    - term: Blackwell
      meaning: NVIDIA GPU generation (B200) with native 4-bit and 6-bit number formats.
      link: https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)
    - term: tensor core
      meaning: A special unit inside the GPU that multiplies small blocks of numbers very quickly.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: rounding error
      meaning: The small mistake from storing a number with limited digits. Many small mistakes can add up.
      link: https://en.wikipedia.org/wiki/Round-off_error
    - term: block floating point
      meaning: Storing a group of numbers with one shared exponent and a separate small mantissa for each, saving bits.
      link: https://en.wikipedia.org/wiki/Block_floating_point
    - term: Hadamard transform
      meaning: A fixed mixing of a block of numbers using only +1 and −1 weights; it spreads one large value across the whole block.
      link: https://en.wikipedia.org/wiki/Hadamard_transform
    - term: mantissa (significand)
      meaning: The digits of a floating-point number that give its precision, as opposed to the exponent that sets its size.
      link: https://en.wikipedia.org/wiki/Significand
    - term: outlier
      meaning: A value far larger in size than most of the others in the same set.
      link: https://en.wikipedia.org/wiki/Outlier
  readFirst:
    - title: Minifloat (Wikipedia)
      url: https://en.wikipedia.org/wiki/Minifloat
      why: What 8-bit and smaller floating-point formats look like.
    - title: Floating-point arithmetic (Wikipedia)
      url: https://en.wikipedia.org/wiki/Floating-point_arithmetic
      why: Background on how computers store non-whole numbers.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
site:
  published: true
  aiReviewed: true
---

## The idea

A single scale per tensor, as in basic FP8, wastes range when different parts of a tensor have different magnitudes. **Microscaling** attaches one shared scale to each short block of elements. The OCP Microscaling Formats specification (v1.0, 2023) defines blocks of 32 elements with a shared 8-bit power-of-two scale (E8M0) and element types FP8 (E5M2 and E4M3), FP6 (E3M2 and E2M3), FP4 (E2M1) and INT8. The matching research paper (Rouhani et al., arXiv preprint, October 2023) reports results on over two dozen benchmarks and training of language models at sub-8-bit weights, activations and gradients with minimal accuracy loss.

## NVFP4

NVIDIA's NVFP4 uses FP4 (E2M1) elements with smaller blocks of 16 and an FP8 (E4M3) scale per block, plus a second-level per-tensor FP32 scale; the shorter blocks and finer scale trade extra metadata for accuracy. The NVFP4 pretraining report (arXiv preprint, September 2025) describes a recipe of random Hadamard transforms to bound block outliers, two-dimensional weight quantisation so forward and backward passes see consistent values, stochastic rounding of gradients and keeping some layers in higher precision, and reports a 12-billion-parameter model trained on 10 trillion tokens with loss and downstream accuracy comparable to an FP8 baseline.

## Hardware and kernels

Blackwell tensor cores take block-scaled operands natively: the scale factors are applied inside the matrix instruction rather than by separate scaling kernels, so a block-scaled GEMM requires a particular scale-factor memory layout. CUTLASS provides block-scaled kernels and Transformer Engine provides MXFP8 and NVFP4 recipes. Microsoft's microxcaling repository is an emulation library for the MX formats.

## Open points

- Quantising activations and gradients (not only weights) to 4 bits without extra tricks.
- Rounding choices (stochastic versus round-to-nearest), outlier handling and which layers stay in higher precision.
- Efficient fused quantise-and-GEMM kernels, since computing block scales is itself memory traffic.
- How results transfer across model scale and architecture (mixture of experts, long context).

Because hardware support is new and training recipes are mostly reported by vendors, independent reproduction is valuable.

# Plain explanation

Squeezing numbers into fewer bits saves memory and time, but fewer bits means less detail. Four bits can store only sixteen different values per number, so a single zoom setting for a whole table of numbers is too crude. If one number is much larger than the rest, the others all collapse to zero.

Microscaling gives each small group of numbers, typically 16 or 32 of them, its own zoom setting. The numbers themselves use very few bits, and the shared setting adjusts the range for that group. Large values in one place do not ruin the detail elsewhere. An industry group published a standard for this, and NVIDIA's latest GPUs have hardware that multiplies such groups directly, applying the zoom settings inside the chip instead of as separate steps.

NVIDIA has also described a variant called NVFP4, with a group size of 16, and reported training a 12-billion-parameter model on 10 trillion words of text in 4 bits, with results comparable to an 8-bit baseline. That report is a company preprint, not yet independently reproduced as far as the sources reviewed here show.

Open questions remain: how to keep training stable at 4 bits, which parts of the model need more bits, and how to build fast open programs for the new hardware. Each shared zoom setting is extra data to store and compute, so the saving is not exactly four times.

# Student explanation

**The problem.** With a single scale factor for a whole tensor (see the FP8 entry), one large value forces a scale that pushes the small values towards zero. Going below 8 bits makes this much worse. A 4-bit float such as E2M1 (2 exponent bits, 1 mantissa bit) has only 16 bit patterns, and its non-negative values are 0, 0.5, 1, 1.5, 2, 3, 4 and 6.

**Microscaling.** Give each short block of numbers its own scale. The OCP Microscaling (MX) specification (v1.0, 2023) groups 32 elements into a block that shares one 8-bit scale, which is a pure power of two (format E8M0: exponent bits only). The elements themselves are stored in FP8, FP6, FP4 or INT8. A block is decoded as
$x_i \approx 2^{k}\, q_i, \qquad i = 1, \dots, 32,$
where $q_i$ is the stored narrow element and $2^{k}$ is the shared scale. In words: the block shares one exponent, and each element keeps its own tiny mantissa. The cost is one 8-bit scale per 32 elements, $8/32 = 0.25$ extra bits each, so MXFP4 averages 4.25 bits per number. Analogy: a sign saying "all prices in this aisle are in hundreds of dollars", with a single digit on each item. It breaks when one aisle mixes 2-dollar and 2000-dollar items, which is why block size matters.

**NVFP4.** NVIDIA's variant uses smaller blocks of 16 FP4 elements, each block with an FP8 (E4M3) scale instead of a power of two, plus one FP32 scale for the whole tensor. That costs $8/16 = 0.5$ extra bits per element and buys finer scales. NVIDIA's 2025 preprint reports pretraining a 12-billion-parameter model on 10 trillion tokens with NVFP4, with loss and downstream accuracy comparable to an FP8 baseline. Its recipe adds random Hadamard transforms (a fixed mixing of each block's values that spreads outliers out), quantises weights the same way in the forward and backward passes, uses stochastic rounding for gradients (rounding up or down at random, more often towards the nearer value, so errors average out), and keeps some layers in higher precision.

**Hardware.** NVIDIA's Blackwell tensor cores apply the block scales inside the matrix-multiply instruction, so the scales must sit in memory in a particular layout. CUTLASS and Transformer Engine provide kernels and recipes, and Microsoft's microxcaling library emulates the formats in software.

**Open points.** Quantising activations and gradients, not only weights, to 4 bits; deciding which layers must stay wider; fusing the scale computation into neighbouring kernels, since computing scales is itself memory traffic; and checking whether vendor-reported results reproduce across model sizes and architectures.
