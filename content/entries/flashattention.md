---
type: entry
slug: flashattention
title: "FlashAttention: IO-aware exact attention"
field: gemm-attention-kernels
kind: ALGORITHM
status: ACTIVE
summary: A tiled, fused attention kernel that never writes the full score matrix to GPU memory, using an online softmax; versions 1 to 3 track successive GPU generations.
reliedOn: Long-context training and serving in PyTorch, vLLM, Megatron-LM and most open LLM stacks call FlashAttention kernels; it set the template for fusing operators by their memory traffic.
dependsOn:
  - cuda-memory-hierarchy-roofline
  - tiled-gemm-tensor-cores
  - transformer-architecture
references:
  - title: "Dao, Fu, Ermon, Rudra, Re: FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (arXiv preprint; NeurIPS 2022)"
    url: https://arxiv.org/abs/2205.14135
    kind: paper
  - title: "Dao: FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning (arXiv preprint; ICLR 2024)"
    url: https://arxiv.org/abs/2307.08691
    kind: paper
  - title: "Shah et al.: FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision (arXiv preprint; NeurIPS 2024)"
    url: https://arxiv.org/abs/2407.08608
    kind: paper
  - title: "Milakov, Gimelshein: Online normalizer calculation for softmax (arXiv preprint)"
    url: https://arxiv.org/abs/1805.02867
    kind: paper
  - title: FlashAttention repository
    url: https://github.com/Dao-AILab/flash-attention
    kind: code
timeline:
  - date: 2022-05-01
    title: FlashAttention
    body: Introduces IO-aware tiled exact attention with recomputation in the backward pass (arXiv, May 2022).
    source: https://arxiv.org/abs/2205.14135
  - date: 2023-07-01
    title: FlashAttention-2
    body: Better parallelism and work partitioning, about 2x faster than version 1 per the authors (arXiv, July 2023).
    source: https://arxiv.org/abs/2307.08691
  - date: 2024-07-01
    title: FlashAttention-3 for Hopper
    body: Asynchrony and FP8 support; up to 740 TFLOP/s FP16 on H100 per the abstract (arXiv, July 2024).
    source: https://arxiv.org/abs/2407.08608
explainer:
  oneLine: A way to compute attention exactly while avoiding the huge intermediate table that slows ordinary methods.
  flow:
    - Attention table grows with length squared
    - Writing it to memory is the slow part
    - Process in blocks with a running softmax
    - Recompute pieces instead of storing them
    - Same answer, far less memory traffic
  glossary:
    - term: attention
      meaning: The step in a transformer where each token looks at other tokens to decide what matters.
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: softmax
      meaning: A step that turns a list of scores into percentages that add up to 100, used inside attention.
      link: https://en.wikipedia.org/wiki/Softmax_function
    - term: HBM (high-bandwidth memory)
      meaning: The large, fast memory stacked next to the GPU chip. It holds the model and data but is far slower than on-chip storage.
      link: https://en.wikipedia.org/wiki/High_Bandwidth_Memory
    - term: shared memory
      meaning: A small, very fast scratchpad inside each GPU processor block that the program controls directly.
      link: https://en.wikipedia.org/wiki/Memory_hierarchy
    - term: tiling
      meaning: Cutting a big job into small blocks that fit in fast memory and reusing each block many times.
      link: https://en.wikipedia.org/wiki/Locality_of_reference
    - term: tensor core
      meaning: A special unit inside the GPU that multiplies small blocks of numbers very quickly.
      link: https://en.wikipedia.org/wiki/Tensor_Core
    - term: Hopper
      meaning: NVIDIA GPU generation (H100) introduced in 2022.
      link: https://en.wikipedia.org/wiki/Hopper_(microarchitecture)
    - term: transformer
      meaning: The neural-network design behind modern chatbots.
      link: /research/transformer-architecture
    - term: gradient
      meaning: The vector of derivatives of an error with respect to each adjustable number; it says which way to change each one to reduce the error.
      link: https://en.wikipedia.org/wiki/Gradient
    - term: backpropagation
      meaning: The method that computes all gradients of a network at once by applying the chain rule backwards, layer by layer.
      link: https://en.wikipedia.org/wiki/Backpropagation
    - term: roofline model
      meaning: A chart that bounds a kernel’s speed by the smaller of peak compute and memory bandwidth times work per byte.
      link: /research/cuda-memory-hierarchy-roofline
    - term: FP8
      meaning: Floating-point numbers stored in 8 bits, with a scale factor, used to double matrix throughput on recent GPUs.
      link: /research/fp8-formats-and-scaling
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
  published: true
  aiReviewed: true
---

## What it computes

Standard attention forms the score matrix S = QKᵀ (size n×n for sequence length n), applies softmax row by row, then multiplies by V. Writing S and the softmax output to HBM makes memory traffic grow with n², and for typical head dimensions the operation is memory-bound rather than compute-bound. FlashAttention (Dao et al., 2022) computes the **same exact result** without ever materialising S.

## The two ideas

1. **Tiling with an online softmax.** Q is split into row blocks and K, V into column blocks. For each Q block the kernel streams over K and V blocks, keeping a running row maximum and running normaliser so the softmax can be corrected incrementally (the online normaliser of Milakov and Gimelshein, 2018). Partial outputs are rescaled as new blocks arrive, so only the final output is written.
2. **Recomputation in the backward pass.** Instead of storing S or the softmax matrix, the backward kernel stores only the per-row statistics and recomputes score tiles on chip. This trades extra FLOPs for far fewer bytes, a good deal in a memory-bound regime. Extra memory is linear rather than quadratic in sequence length.

## Versions

- **FlashAttention-2** (2023) reworked work partitioning: fewer non-matmul FLOPs, parallelism over sequence length as well as batch and heads, and better splitting of work between warps. The authors report about 2× speedup over version 1.
- **FlashAttention-3** (2024) targets Hopper: producer and consumer warp specialisation with TMA, interleaving of block matmuls and softmax to overlap tensor-core and special-function-unit work, and FP8 with block quantisation and incoherent processing. The abstract reports 1.5–2.0× speedup over version 2 on H100, up to 740 TFLOP/s in FP16 (75% utilisation), close to 1.2 PFLOP/s in FP8, and 2.6× lower numerical error than a baseline FP8 attention. It notes that version 2 reached 35% utilisation on H100.

## Variants that matter in practice

Causal masking skips fully masked tiles; grouped-query and multi-query attention share K/V across heads; sliding windows restrict the K range; the decode step with a short query and long cached K/V is split across thread blocks along the sequence (split-KV) to use the whole GPU. Customisable engines such as FlashInfer generate such variants from templates.

## Where it stops

The approach is exact, so it does not change the O(n²) compute of full attention, only its memory traffic. Each new GPU generation (Blackwell added new tensor-memory and instruction features) needs a new kernel, and open reimplementations in Triton or other compilers are measured against it.

# Plain explanation

When an AI language model reads a long text, each word has to compare itself with every other word to decide what matters. That comparison produces a table whose size grows with the square of the text length. Ordinary programs write this table out to the GPU's big memory and read it back, and the slow trips to memory, not the arithmetic, are what take the time.

FlashAttention avoids the table. It processes the text in small blocks, keeps each block's partial results in fast storage near the calculators, and combines them as it goes using a bookkeeping trick, so the full table never has to exist. The answer is exactly the same as the ordinary method, only computed with far fewer trips to slow memory. When the model later needs to learn from its mistakes, the program recomputes the pieces it needs instead of storing them, which trades a little extra arithmetic for a lot less memory.

Three versions have followed new GPU designs, each tuned to keep the chip's multiplying units busy. The newest uses tricks specific to NVIDIA's latest hardware and can work in a compact 8-bit number format.

It matters because long inputs are expensive: by cutting memory use and time, it made much longer documents practical for open models. It does not make attention cheaper in total arithmetic; it only removes the memory bottleneck.

# Student explanation

**What attention is.** In a transformer, the neural-network design behind modern language models, each word-piece (token) of a text is represented by a vector. Attention lets each token collect information from the others. For $n$ tokens the model forms three $n \times d$ matrices $Q$, $K$, $V$ (queries, keys, values; $d$ is typically 64 to 128), computes the score matrix $S = QK^\top$ of size $n \times n$, turns each row into weights with softmax,
$\mathrm{softmax}(s)_j = \frac{e^{s_j}}{\sum_k e^{s_k}},$
(positive weights that add to 1, the largest score getting the largest weight), and multiplies the weights by $V$.

**What goes wrong.** $S$ has $n^2$ entries: for $n = 8192$ that is about 67 million numbers per attention head, written to GPU main memory and read back several times. The arithmetic is cheap next to this traffic, so the standard implementation is memory-bound (see the roofline entry), and its memory use grows like $n^2$.

**The trick.** FlashAttention (Dao et al., 2022) never stores $S$. It splits $Q$ into blocks of rows and $K$, $V$ into blocks, and for each $Q$ block streams through the $K$, $V$ blocks inside fast on-chip memory. The obstacle is softmax: its denominator needs the whole row. The fix is an online softmax. Keep a running row maximum $m$ and a running sum $\ell$. When a new block raises the maximum from $m_{old}$ to $m_{new}$, multiply the old sum and the old partial output by $e^{m_{old}-m_{new}}$ and carry on. Because $e^{a-m_{new}} = e^{a-m_{old}}\,e^{m_{old}-m_{new}}$, the final answer is exactly what the standard method gives, not an approximation. Analogy: computing a class average from exam papers handed in one batch at a time, keeping only a running total and count instead of the whole pile. It breaks in one place: softmax also needs the rescaling step whenever a larger score turns up.

**Backward pass.** Training needs gradients, the derivatives of the error with respect to every input, computed by running the network backwards (backpropagation). Instead of storing $S$ for this, FlashAttention keeps only $m$ and $\ell$ per row and recomputes score blocks on chip, trading extra arithmetic for much less memory traffic. Extra memory grows like $n$, not $n^2$.

**Versions.** FlashAttention-2 (2023) reorganised the work across threads and reports about twice the speed of version 1. FlashAttention-3 (2024) targets the H100: data movement overlapped with arithmetic, and 8-bit floating point. Its abstract reports up to 740 TFLOP/s in FP16, 75% of the chip's peak, where version 2 reached 35%.

**Limits.** The arithmetic still grows like $n^2$; only memory traffic falls. Each new GPU generation needs a new hand-tuned kernel, and reimplementations in easier languages are measured against these.
