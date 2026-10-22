---
type: problem
slug: paged-decode-attention-hbm-bandwidth-90pct
title: A paged decode-attention kernel at 90% of achievable HBM bandwidth on H100
entry: paged-attention-kv-cache
status: OPEN
origin: Split-KV decoding and paged KV caches in vLLM, FlashAttention and FlashInfer
ratings:
  difficulty: 26
  applicationValue: 62
  leverage: 28
workMix:
  theory: 5
  engineering: 75
  compute: 8
  empirical: 12
verification:
  route: GPU_BENCHMARK
sources:
  - title: FlashInfer (arXiv preprint)
    url: https://arxiv.org/abs/2501.01005
  - title: PagedAttention (arXiv preprint)
    url: https://arxiv.org/abs/2309.06180
  - title: FlashMLA repository (decode kernels and bandwidth figures)
    url: https://github.com/deepseek-ai/FlashMLA
explainer:
  oneLine: Can the step that produces each new word read the stored notes at nearly full memory speed in every situation?
  flow:
    - Each new word re-reads stored notes
    - Little arithmetic, much memory reading
    - Ceiling is plain copy speed
    - Balance uneven requests over the chip
    - 90% of copy speed everywhere
  glossary:
    - term: KV cache
      meaning: Stored keys and values of all earlier tokens, re-read every time a language model generates a new token.
      link: /research/paged-attention-kv-cache
    - term: paged attention
      meaning: Keeping the KV cache in fixed-size blocks anywhere in memory, found through a lookup table, like pages in an operating system.
      link: /research/paged-attention-kv-cache
    - term: decoding
      meaning: Generating text one token at a time, each step attending to everything generated so far.
      link: /research/paged-attention-kv-cache
    - term: memory bandwidth
      meaning: How many bytes per second can move between memory and the processor.
      link: https://en.wikipedia.org/wiki/Bandwidth_(computing)
    - term: HBM (high-bandwidth memory)
      meaning: The stacked main memory beside a data-centre GPU; about 3.35 TB/s on an H100 SXM.
      link: https://en.wikipedia.org/wiki/High_Bandwidth_Memory
    - term: arithmetic intensity
      meaning: Operations performed per byte moved from memory; low intensity means memory speed is the limit.
      link: https://en.wikipedia.org/wiki/Roofline_model
    - term: roofline model
      meaning: A chart showing whether a kernel is limited by arithmetic speed or by memory speed.
      link: /research/cuda-memory-hierarchy-roofline
    - term: attention
      meaning: The transformer operation in which each token takes a weighted average of other tokens, with weights from a softmax of similarity scores.
      link: /research/flashattention
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: FP8
      meaning: An 8-bit floating-point format; E4M3 keeps more precision, E5M2 more range.
      link: /research/fp8-formats-and-scaling
  readFirst:
    - title: "vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention"
      url: https://blog.vllm.ai/2023/06/20/vllm.html
      why: The authors explain the memory problem and the paging idea with pictures.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
    - title: Roofline model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Roofline_model
      why: Short overview of the chart and how to read it.
site:
  aiReviewed: true
---

Build a decode-attention kernel over a paged KV cache (block size 16 and 64 tokens, BF16 and FP8 cache) that on one H100 SXM achieves at least 90% of the memory bandwidth measured by a simple device-to-device copy benchmark, for batch sizes 1 to 256 with context lengths from 1k to 128k and grouped-query ratios 1, 4, 8, across a skewed batch (context lengths drawn from a stated distribution).

# State of the art

Decode attention has very low arithmetic intensity, so its ceiling is HBM bandwidth. Production kernels approach that ceiling for large uniform batches: FlashMLA's README reported up to 3000 GB/s for memory-bound MLA decoding on H800 SXM5 (about 90% of the 3.35 TB/s peak), and FlashInfer and FlashAttention split-KV kernels target the same regime, but small batches with long contexts, skewed batches (one very long request among short ones), small query-head counts and quantised caches leave SMs idle or add reduction overhead. The curator did not find a primary source reporting a kernel at 90% of copy bandwidth across all those regimes.

# Applications

Decode time per token is a large part of serving latency and cost; a uniformly bandwidth-efficient kernel directly lowers cost per generated token.

# Resolution criteria

A public kernel and harness at a pinned commit showing at least 90% of the copy-benchmark bandwidth on every configuration, reproduced independently.

# Rating rationale

Difficulty 26: the ceiling is fixed by copy bandwidth and FlashMLA already reports about 90% on H800 in its best regime; the work is covering small, skewed and quantised batches in one kernel. Application value 62, the highest in the pack: decode dominates serving cost per token at very large deployed scale. Leverage 28: serving engines depend on it but little else does.

# Work mix rationale

Mostly engineering against a roofline, with profiling-driven iteration.

# Verification

Hardware: one H100 SXM 80 GB. Shapes: batch 1, 8, 32, 128, 256; context 1k to 128k (cache must fit in 80 GB, configurations that do not fit are skipped and listed); head dim 128; 32 query heads with 32, 8 or 4 KV heads; block sizes 16 and 64; BF16 and FP8 E4M3 cache with per-head scales. Skewed batches: lognormal context lengths with stated parameters. Baselines: FlashInfer decode and FlashAttention split-KV with block table at pinned versions, plus a device-to-device copy kernel measured on the same card as the bandwidth reference. Metric: effective bytes read of K and V divided by kernel time, as % of the copy bandwidth, median of at least 100 iterations. Correctness: max absolute error versus an FP32 reference no larger than 2x the baselines. Harness: public script at a pinned commit.

# Plain explanation

When a chatbot writes an answer, each new word needs a look back at the stored notes of everything so far. This step does little arithmetic but reads a lot of data, so how fast it runs depends almost entirely on how fast the GPU can read memory.

That makes it easy to define a target: the best speed any program can reach is the speed of simply copying data in memory. The question is whether one program can reach 90% of that speed for all realistic cases: a single request or hundreds at once, short or very long histories, mixes where one request is huge and the rest are tiny, and notes stored in compact 8-bit form.

Hard cases are the ones where the work cannot be spread evenly over the chip: a single long history, or one giant request among many small ones. Reading through a table of pages instead of one block also adds overhead.

Solving it would lower the cost of every word a chatbot serves. No primary source reviewed here shows a program at 90% in all these cases, but several existing programs come close in some of them.

# Student explanation

**What is asked.** When a language model writes text, it produces one token at a time. Each new token must attend to the stored keys and values of every earlier token, the **KV cache**. Serving engines store that cache in fixed-size blocks scattered through memory and found through a lookup table (paged attention; see that entry). The problem asks for one decode-attention kernel that reads the cache at 90% or more of the H100's practical memory speed, measured as the speed of a plain memory copy. It must do so in every regime: batches of 1 to 256 requests, contexts of 1k to 128k tokens, BF16 or FP8 caches, and **skewed** batches where request lengths differ wildly.

**Why memory speed is the ceiling.** For each cached token, decoding reads a key and a value vector (say 128 numbers each, 2 bytes per number, so 512 bytes) and does about two multiply-adds per number read. That is roughly 1 floating-point operation per byte. The H100 can do about 989 trillion BF16 operations per second but read only about 3.35 TB/s from its main memory. So the kernel's speed is set entirely by how fast it reads: at 90% of 3.35 TB/s, a 10 GB cache takes about 3.3 ms per generated token. The work must also be spread over all 132 cores. One request with a 128k-token context in a batch of short ones means one long job and many tiny ones. The kernel must cut the long one into pieces (split-KV) and add the partial results afterwards. The analogy is checkout lanes where one customer has a full trolley. It breaks because here the trolley can be split across lanes, at the cost of a final tally.

**State of the art.** Production kernels come close for large, uniform batches. FlashMLA's README reported up to 3000 GB/s for memory-bound decoding on an H800, about 90% of the 3.35 TB/s peak. FlashInfer and FlashAttention's split-KV kernels target the same regime. Small batches with long contexts, skewed batches, few query heads and quantised caches still leave cores idle or add reduction overhead. No source reports a kernel at 90% of copy bandwidth across all these regimes.

**What a solution looks like.** A public kernel, timed on one H100 against a copy kernel on the same card, at 90% or more of copy bandwidth in every listed configuration, reproduced independently.
