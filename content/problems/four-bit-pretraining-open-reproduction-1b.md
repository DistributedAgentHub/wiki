---
type: problem
slug: four-bit-pretraining-open-reproduction-1b
title: An open 4-bit pretraining recipe matching BF16 loss at 1B parameters
entry: microscaling-mx-formats
status: OPEN
origin: MX formats (2023); NVFP4 pretraining report (2025)
ratings:
  difficulty: 30
  applicationValue: 60
  leverage: 38
workMix:
  theory: 20
  engineering: 25
  compute: 45
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Pretraining Large Language Models with NVFP4 (arXiv preprint)
    url: https://arxiv.org/abs/2509.25149
  - title: Microscaling Data Formats for Deep Learning (arXiv preprint)
    url: https://arxiv.org/abs/2310.10537
  - title: "Castro et al.: Quartet: Native FP4 Training Can Be Optimal for Large Language Models (arXiv preprint)"
    url: https://arxiv.org/abs/2505.14669
  - title: "Chmiel et al.: FP4 All the Way: Fully Quantized Training of LLMs (arXiv preprint)"
    url: https://arxiv.org/abs/2505.19115
  - title: "Ding et al.: Full-Stack FP4: Stable LLM Pretraining with Quantized Projections, Optimizers, and Attention (arXiv preprint)"
    url: https://arxiv.org/abs/2607.04422
links:
  - to: block-scaled-fp4-gemm-blackwell-open-kernel
    kind: BUILDS_ON
    note: Fast training depends on an efficient open block-scaled GEMM kernel.
timeline:
  - date: 2025-05-25
    title: 7B model trained mostly in FP4
    body: FP4 All the Way trains a 7B model with NVFP4 on up to 200B tokens, closing a small loss gap with a BF16 backward phase at the end (preprint).
    source: https://arxiv.org/abs/2505.19115
  - date: 2026-07-05
    title: 0.84% gap at 3B parameters
    body: Full-Stack FP4 reports final loss 2.286 versus 2.267 for BF16 on a 3B model trained on 64B tokens (preprint).
    source: https://arxiv.org/abs/2607.04422
explainer:
  oneLine: Can an outside group train a 1B-parameter model in 4-bit numbers with nearly 16-bit quality?
  flow:
    - Vendor reports 4-bit training works
    - Repeat openly at 1B parameters
    - Rotate, round randomly, keep key layers precise
    - Compare with 16-bit over three seeds
    - Loss within 1% of 16-bit
  glossary:
    - term: FP4 (E2M1)
      meaning: "A 4-bit floating-point number with 2 exponent bits and 1 mantissa bit: only 16 possible values."
      link: /research/microscaling-mx-formats
    - term: block scaling (MX, NVFP4)
      meaning: Sharing one scale factor across a small block of 16 or 32 narrow numbers so each block uses the format’s range well.
      link: /research/microscaling-mx-formats
    - term: minifloat
      meaning: A floating-point number with very few bits (16, 8, 6 or 4), trading precision and range for speed.
      link: https://en.wikipedia.org/wiki/Minifloat
    - term: scale factor
      meaning: A multiplier applied before rounding to a narrow format so values fit its range, divided out afterwards.
      link: /research/fp8-formats-and-scaling
    - term: stochastic rounding
      meaning: Rounding up or down at random with probabilities set by the distance, so errors average out over many steps.
      link: https://en.wikipedia.org/wiki/Stochastic_rounding
    - term: validation loss
      meaning: A number measuring how wrong a model's predictions are on held-out text; lower is better.
      link: https://en.wikipedia.org/wiki/Loss_function
    - term: random seed
      meaning: The starting number for a random generator; different seeds give slightly different training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: gradient
      meaning: The list of derivatives of the training loss with respect to each number in the model.
      link: https://en.wikipedia.org/wiki/Gradient
    - term: Blackwell (B200)
      meaning: NVIDIA's GPU generation after Hopper, with native 4-bit and block-scaled matrix instructions.
      link: https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)
    - term: outlier
      meaning: A value far larger in size than most others in the same set.
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
  aiReviewed: true
---

With fully public code, data and seeds, pretrain a roughly 1B-parameter decoder-only transformer on 100B tokens of a named public corpus with MXFP4 or NVFP4 GEMMs for forward and backward passes (master weights and optimiser state in higher precision), such that final validation loss is within 1% (relative) of an identically configured BF16 run, with variance across three seeds reported, and tell which operators were kept in higher precision.

# State of the art

NVIDIA reports a 12-billion-parameter model trained on 10 trillion tokens with NVFP4 with loss and downstream accuracy comparable to FP8 (arXiv preprint, September 2025), and the Microscaling paper reports sub-8-bit training of smaller language models. Open 4-bit work has moved quickly but none meets the bar exactly. Quartet (Castro et al., arXiv:2505.14669, MXFP4, open code) compares against FP8 rather than BF16. FP4 All the Way (Chmiel et al., arXiv:2505.19115, NVFP4) trains a 7B model on up to 200B tokens on Gaudi2 with a small loss gap that it closes by switching the backward pass to BF16 at the end. TetraJet-v2 (arXiv:2510.27527) reaches 370M parameters and 212B tokens and closes about half of the gap to BF16. Quartet II (arXiv:2601.22813) reaches 1.9B parameters on 38B tokens. Full-Stack FP4 (Ding et al., arXiv:2607.04422, preprint) reports a 0.838% loss gap to BF16 at 3B parameters on 64B tokens, with some optimizer and attention operations kept in BF16 and code availability not verified. No public result combines 100B+ tokens, a gap at most 1% against BF16, three seeds and released code.

# Applications

Four-bit training would roughly halve GEMM time and memory traffic again on hardware with native support; open recipes let groups without vendor teams use it.

# Resolution criteria

Independent reruns reproduce the loss gap within the stated bound and seed variance, from the released code.

# Rating rationale

Difficulty 30: 2025-2026 preprints are close (0.84% at 3B on 64B tokens; 7B on 200B tokens with a BF16 tail), so the remaining work is an open, seeded run at 100B tokens rather than a new idea. Application value 60: halving GEMM time and memory traffic again on Blackwell-class hardware matters for every training run. Leverage 38: an open recipe would be reused by most open training stacks.

# Work mix rationale

Dominated by compute for training runs, with recipe design and kernel work.

# Verification

Dataset: a named public pretraining corpus (for example FineWeb) with a fixed 100B-token subset and tokenizer. Model: Llama-style decoder, about 1B parameters, config published. Metric: validation loss on a fixed held-out set at the end of training, and relative gap to the BF16 baseline run with identical data order and hyperparameters; pass if the gap is at most 1% and the three-seed spread is reported. Compute budget: on the order of 1 to 2 thousand GPU-hours on 4-bit capable hardware or emulation (emulation is allowed but must be labelled). Seeds: 3. Artefacts: code, configs, loss logs and checkpoints at a pinned commit.

# Plain explanation

Training an AI model from scratch is the most expensive part of building it. NVIDIA reported training a 12-billion-parameter model on 10 trillion words of text using 4-bit numbers, with results comparable to an 8-bit baseline. That is a company report on its own hardware and has not yet, as far as the sources reviewed here show, been independently repeated in the open.

This problem asks for a repeat at a smaller size that most research groups could afford in principle: a model of about 1 billion parameters trained on 100 billion words from a public collection, with all code and settings published. The final quality must be within 1% of the same model trained in the standard 16-bit way, repeated with three random starts to show how much results vary.

It is hard because 4-bit numbers are crude. Training can become unstable, and recipes use several tricks, such as randomly rotating the numbers, rounding randomly instead of to the nearest value, and keeping sensitive parts of the model in higher precision.

If it works in the open, the cost of training could drop again, and more groups could train their own models. The main barrier is compute: the runs take thousands of GPU-hours.

# Student explanation

**What is asked.** Training a language model is mostly matrix multiplication. Doing those multiplications with 4-bit numbers instead of 16-bit ones lets NVIDIA's newest GPUs run them several times faster and move a quarter of the bytes. The problem asks for a fully open recipe, with public code, data and random seeds. The recipe must train a roughly 1-billion-parameter language model on 100 billion tokens of a public text corpus, with every matrix multiply in the forward and backward passes in a 4-bit format (MXFP4 or NVFP4). It must finish with a validation loss (a measure of prediction error) within 1% of the same model trained in BF16, and report results over three seeds.

**Why 4 bits is hard.** An FP4 number (E2M1) has 2 exponent bits and 1 mantissa bit, so it can hold only 16 values: $0, \pm 0.5, \pm 1, \pm 1.5, \pm 2, \pm 3, \pm 4, \pm 6$. To make that usable, a small block of numbers (16 in NVFP4, 32 in MX) shares one scale factor, so each block is stretched to fit the 16 values (see the microscaling entry). Rounding a gradient of 0.7 to the nearest value, 0.5, makes an error of 0.2. If the same thing happens at every step, training drifts. **Stochastic rounding** rounds 0.7 up to 1 with probability 0.4 and down to 0.5 with probability 0.6. The average is then exactly 0.7, so errors cancel over many steps. The analogy is paying for many coffees with only whole dollars, sometimes rounding up and sometimes down so the total comes out fair. It breaks because rare large values (outliers) still overflow a block, which is why recipes also rotate the data and keep sensitive layers in higher precision.

**State of the art.** NVIDIA reports a 12B model trained on 10T tokens in NVFP4, with loss comparable to an FP8 baseline. Open work is close but no result meets the bar exactly. Quartet (MXFP4, open code) compares against FP8, not BF16. FP4 All the Way trains a 7B model on up to 200B tokens, closing a small loss gap by switching the backward pass to BF16 at the end. TetraJet-v2 reaches 370M parameters and 212B tokens and closes about half of the gap to BF16. Quartet II reaches 1.9B parameters on 38B tokens. Full-Stack FP4 reports a 0.838% gap to BF16 at 3B parameters on 64B tokens, with some operations kept in BF16 and its code not verified.

**What a solution looks like.** Released code, configurations and loss logs that an independent group reruns, confirming a gap of at most 1% across three seeds at 100B tokens.
