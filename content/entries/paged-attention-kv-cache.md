---
type: entry
slug: paged-attention-kv-cache
title: Paged attention and KV-cache kernels
field: gemm-attention-kernels
kind: ALGORITHM
status: ACTIVE
summary: Storing the transformer key-value cache in fixed-size non-contiguous blocks, with attention kernels that gather through a block table; the memory manager behind high-throughput LLM serving.
reliedOn: vLLM and most open serving engines rely on block-based KV caches and decode-attention kernels that read them; serving cost per token is dominated by this memory traffic.
dependsOn:
  - flashattention
  - transformer-architecture
references:
  - title: "Kwon et al.: Efficient Memory Management for Large Language Model Serving with PagedAttention (arXiv preprint; SOSP 2023)"
    url: https://arxiv.org/abs/2309.06180
    kind: paper
  - title: "Ye et al.: FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving (arXiv preprint)"
    url: https://arxiv.org/abs/2501.01005
    kind: paper
  - title: vLLM documentation
    url: https://docs.vllm.ai/
    kind: docs
  - title: vLLM repository
    url: https://github.com/vllm-project/vllm
    kind: code
timeline:
  - date: 2023-09-01
    title: PagedAttention and vLLM
    body: Block-table KV cache with on-demand allocation and sharing is introduced (arXiv, September 2023).
    source: https://arxiv.org/abs/2309.06180
  - date: 2025-01-01
    title: FlashInfer
    body: A preprint describes a template-based attention engine covering paged, ragged and block-sparse KV layouts (arXiv, January 2025).
    source: https://arxiv.org/abs/2501.01005
explainer:
  oneLine: Storing a chatbot's running memory in small pages so GPU memory is not wasted.
  flow:
    - Chatbot notes grow with each word
    - One big block per request wastes memory
    - Store notes in small pages with a table
    - Attention follows the table to read pages
    - More requests fit on each GPU
  glossary:
    - term: large language model
      meaning: An AI model trained on huge amounts of text to predict and generate language.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: attention
      meaning: The step in a transformer where each token looks at other tokens to decide what matters.
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: fragmentation
      meaning: Wasted memory because free space is split into pieces too small to use.
      link: https://en.wikipedia.org/wiki/Fragmentation_(computing)
    - term: HBM (high-bandwidth memory)
      meaning: The large, fast memory stacked next to the GPU chip. It holds the model and data but is far slower than on-chip storage.
      link: https://en.wikipedia.org/wiki/High_Bandwidth_Memory
    - term: memory bandwidth
      meaning: How many bytes per second can be moved between memory and the chip.
      link: https://en.wikipedia.org/wiki/Bandwidth_(computing)
    - term: kernel (GPU)
      meaning: A small program that runs on the GPU, started many times in parallel on different pieces of data.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: transformer
      meaning: The neural-network design behind modern chatbots.
      link: /research/transformer-architecture
    - term: roofline model
      meaning: A simple chart that shows whether a program is limited by arithmetic speed or by memory speed.
      link: https://en.wikipedia.org/wiki/Roofline_model
    - term: virtual memory
      meaning: An operating-system scheme in which programs see continuous addresses while the data actually lives in scattered fixed-size pages.
      link: https://en.wikipedia.org/wiki/Virtual_memory
    - term: page table
      meaning: The lookup table that maps each logical page of a program’s memory to the physical location where it is stored.
      link: https://en.wikipedia.org/wiki/Page_table
    - term: throughput
      meaning: How much work a system completes per unit time, for example tokens generated per second across all users.
      link: https://en.wikipedia.org/wiki/Throughput
    - term: latency
      meaning: The delay between asking for something (data, a reply) and the first part of it arriving.
      link: https://en.wikipedia.org/wiki/Latency_(engineering)
  readFirst:
    - title: "vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention"
      url: https://blog.vllm.ai/2023/06/20/vllm.html
      why: The authors explain the memory problem and the paging idea with pictures.
    - title: FlashAttention-2 (Stanford CRFM blog)
      url: https://crfm.stanford.edu/2023/07/17/flash2.html
      why: Plain-language account of why attention is memory-bound and how tiling helps.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
site:
  published: true
  aiReviewed: true
---

## The serving problem

When an LLM generates text, each new token attends to the keys and values of all earlier tokens. Those key-value (KV) tensors are cached so they are not recomputed. The cache grows by one entry per layer per token, and its final length is unknown when a request starts. Allocating one contiguous buffer per request sized for the maximum length wastes memory through internal and external fragmentation, which limits how many requests fit on a GPU and therefore throughput.

## PagedAttention

Kwon et al. (2023) borrowed virtual memory from operating systems. The KV cache is divided into fixed-size **blocks** (a few dozen tokens each). A per-request **block table** maps logical block positions to physical blocks anywhere in GPU memory, and blocks are allocated on demand. The authors report that waste in their system is small and that throughput improves by roughly 2–4× over then-current systems at the same latency (arXiv preprint abstract; check the paper for the exact conditions). Because blocks are addressable, a prefix shared by many requests (a system prompt, or the branches of beam search) can be stored once and shared copy-on-write.

## The kernel side

Attention kernels must follow the block table: each thread block resolves a logical position to a physical block, then loads keys and values from there. Two features dominate performance:

- **Decode** processes one query token per sequence against a long cache. Its arithmetic intensity is low (each cached byte is used for very few FLOPs), so the roofline says it is bound by HBM bandwidth. Kernels therefore aim to approach achievable memory bandwidth, splitting the sequence dimension across thread blocks (split-KV) and reducing partial results.
- **Prefill and chunked prefill** mix long and short queries in one batch, closer to compute-bound attention.

Grouped-query attention shrinks the cache by sharing K/V across query heads, and quantising the cache to FP8 or INT4 halves or quarters the bytes read; both change kernel layout. Engines such as FlashInfer expose block-sparse, paged and ragged layouts through one interface, and FlashAttention's kernels accept a block table.

## Open issues

Page size trades fragmentation against gather overhead; prefix-aware scheduling, CPU or SSD offload of cold blocks, and disaggregated prefill and decode (moving KV between GPUs) all depend on kernels and transfer paths that treat the cache as an addressable pool rather than one tensor.

# Plain explanation

When a chatbot writes an answer one word at a time, it keeps notes about everything said so far, so it does not redo that work for every new word. These notes grow as the answer grows, and nobody knows in advance how long an answer will be.

The simple way to store the notes is to reserve one big block of memory per request, big enough for the longest possible answer. Most of it stays empty, and memory is the thing that limits how many people one GPU can serve at once.

PagedAttention borrows an idea from how computers manage memory. The notes are stored in many small pages, placed wherever there is room, and a small table records which pages belong to which request. New pages are handed out only when needed. When many requests share the same opening text, such as a standard instruction, they can share the same pages.

The attention step must then follow the table to find the pages, which needs special programs. The main step, producing one new word, reads a lot of stored data but does little arithmetic with it, so its speed is set by how fast memory can be read.

The original authors report that this approach let their serving system handle roughly two to four times more traffic at similar delay. Today most open serving systems use some form of it. The analogy to computer memory pages is close, but pages here are chosen to suit GPU reading speed.

# Student explanation

**What it is for.** A large language model writes its reply one token (word-piece) at a time. Each new token uses attention over all earlier tokens, which needs the earlier tokens' key and value vectors from every layer. Recomputing them at each step would be wasteful, so they are stored: the KV cache. It grows by one entry per layer for every token generated, and nobody knows in advance how long a reply will be.

**What goes wrong.** The simple approach reserves one contiguous region of GPU memory per request, sized for the longest possible reply. Most replies are shorter, so much of that space sits unused, and leftover gaps between regions cannot be reused (fragmentation). Fewer requests fit on the GPU at once, so one GPU serves fewer users.

**The idea.** PagedAttention (Kwon et al., 2023) borrows virtual memory from operating systems. The cache is cut into fixed-size blocks of a few dozen tokens each. Every request keeps a block table, a short list mapping its logical blocks 0, 1, 2, … to wherever the physical blocks actually sit in memory, and blocks are allocated only as they fill. Analogy: a library that shelves the volumes of a long book wherever there is free space and keeps a card saying where each volume is, instead of reserving a whole empty shelf for the longest book imaginable. The analogy breaks on cost: following the card is a lookup that the attention kernel pays on every access. Because blocks are addressable, a prefix shared by many requests (such as a common system prompt) can be stored once and pointed to by many tables. The authors report 2 to 4 times higher throughput than earlier systems at the same latency.

**The kernel side.** At each generation step, every request contributes one query vector that is compared against a long cache. A worked estimate for one attention head: reading $L$ cached tokens of key and value vectors of length $d$, stored as 2-byte numbers, moves about $4Ld$ bytes, and the dot products and weighted sum take about $4Ld$ operations, so roughly
$I \approx \frac{4Ld\ \text{operations}}{4Ld\ \text{bytes}} = 1 \ \text{operation per byte}.$
An H100 can do about 295 operations per byte of memory bandwidth (see the roofline entry), so decode attention is limited entirely by how fast memory can be read. Good kernels aim to approach the memory bandwidth, splitting long sequences across many processing blocks (split-KV) and combining their partial results at the end.

**Shrinking the bytes.** Grouped-query attention lets several query heads share one set of keys and values, and storing the cache in 8-bit or 4-bit numbers halves or quarters what must be read.

**Limits.** Block size trades wasted space against lookup overhead. Batches that mix very long and very short requests leave parts of the GPU idle, and moving caches between GPUs or out to CPU memory adds new transfer problems.
