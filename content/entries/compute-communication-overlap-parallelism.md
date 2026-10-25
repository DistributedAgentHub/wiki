---
type: entry
slug: compute-communication-overlap-parallelism
title: Tensor, data and pipeline parallelism with compute-communication overlap
field: distributed-communication
kind: ALGORITHM
status: ACTIVE
summary: How large models are split across GPUs (tensor, pipeline, data/ZeRO, sequence and context parallelism) and how fused kernels hide communication behind matrix multiplication.
reliedOn: Training and serving frontier-scale models requires splitting them over many GPUs; the fraction of time lost to exposed communication determines cost, and kernels that fuse communication into GEMMs are the current frontier.
dependsOn:
  - nccl-collectives-all-reduce
  - tiled-gemm-tensor-cores
  - transformer-architecture
references:
  - title: "Shoeybi et al.: Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism (arXiv preprint)"
    url: https://arxiv.org/abs/1909.08053
    kind: paper
  - title: "Rajbhandari et al.: ZeRO: Memory Optimizations Toward Training Trillion Parameter Models (arXiv preprint; SC20)"
    url: https://arxiv.org/abs/1910.02054
    kind: paper
  - title: "Chang et al.: FLUX: Fast Software-based Communication Overlap On GPUs Through Kernel Fusion (arXiv preprint)"
    url: https://arxiv.org/abs/2406.06858
    kind: paper
  - title: "Zheng et al.: Triton-distributed: Programming Overlapping Kernels on Distributed AI Systems with the Triton Compiler (arXiv preprint)"
    url: https://arxiv.org/abs/2504.19442
    kind: paper
  - title: "Liu, Zaharia, Abbeel: Ring Attention with Blockwise Transformers for Near-Infinite Context (arXiv preprint)"
    url: https://arxiv.org/abs/2310.01889
    kind: paper
timeline:
  - date: 2019-09-01
    title: Megatron-LM tensor parallelism
    body: Intra-layer model parallelism for transformers (arXiv, September 2019).
    source: https://arxiv.org/abs/1909.08053
  - date: 2024-06-01
    title: FLUX fused overlap kernels
    body: Fine-grained fusion of GEMM and communication, up to 96% of communication hideable per the authors (arXiv preprint, June 2024).
    source: https://arxiv.org/abs/2406.06858
explainer:
  oneLine: How giant models are split across many GPUs, and how to make them calculate while they talk.
  flow:
    - Model too big for one GPU
    - Split data, layers or sequences
    - GPUs exchange results constantly
    - Fuse compute and sends into one kernel
    - Idle waiting time shrinks
  glossary:
    - term: parallelism
      meaning: Splitting a job so many processors work on it at the same time.
      link: https://en.wikipedia.org/wiki/Parallel_computing
    - term: all-reduce
      meaning: Every GPU contributes a list of numbers; all of them end up with the sum.
      link: https://en.wikipedia.org/wiki/Collective_operation
    - term: collective operation
      meaning: A step in which every GPU in a group sends or receives data together, such as summing a number across all of them.
      link: https://en.wikipedia.org/wiki/Collective_operation
    - term: NVLink
      meaning: A very fast cable-like link between GPUs in the same server.
      link: https://en.wikipedia.org/wiki/NVLink
    - term: GEMM
      meaning: "General matrix multiply: multiplying two grids of numbers. Most of the work in AI models is made of these."
      link: https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
    - term: mixture of experts
      meaning: A model made of many specialist sub-networks, where each input is sent to only a few.
      link: https://en.wikipedia.org/wiki/Mixture_of_experts
    - term: kernel (GPU)
      meaning: A small program that runs on the GPU, started many times in parallel on different pieces of data.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: transformer
      meaning: The neural-network design behind modern chatbots.
      link: /research/transformer-architecture
    - term: data parallelism
      meaning: Running the same model on several processors, each on different data, then combining their results.
      link: https://en.wikipedia.org/wiki/Data_parallelism
    - term: pipeline
      meaning: Splitting work into stages handled by different units, so that several items are in progress at once, like an assembly line.
      link: https://en.wikipedia.org/wiki/Pipeline_(computing)
    - term: race condition
      meaning: A bug where the result depends on which of two simultaneous operations happens to finish first.
      link: https://en.wikipedia.org/wiki/Race_condition
    - term: latency
      meaning: The delay between sending something and the first part of it arriving.
      link: https://en.wikipedia.org/wiki/Latency_(engineering)
  readFirst:
    - title: The Ultra-Scale Playbook (Hugging Face)
      url: https://huggingface.co/spaces/nanotron/ultrascale-playbook
      why: Interactive guide to splitting training across many GPUs and hiding communication.
    - title: Bringing HPC Techniques to Deep Learning (Andrew Gibiansky)
      url: https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce/
      why: Clear walk-through of ring all-reduce with diagrams.
    - title: "NVIDIA: Massively Scale Your Deep Learning Training with NCCL 2.4"
      url: https://developer.nvidia.com/blog/massively-scale-deep-learning-training-nccl-2-4/
      why: Vendor explanation of tree algorithms for all-reduce.
raw:
  body: "## Ways to split a model\n\n- **Data parallelism** replicates the model and splits the batch; gradients are all-reduced. ZeRO (Rajbhandari et al., 2019) shards optimiser state, gradients and then parameters over data-parallel ranks, replacing all-reduce by reduce-scatter and all-gather and cutting memory.\n- **Tensor parallelism** (Megatron-LM, Shoeybi et al., 2019) splits each weight matrix across GPUs; a transformer layer needs all-reduces in the forward and backward pass, on the critical path.\n- **Pipeline parallelism** assigns layers to stages and passes activations between them, with micro-batching to fill the pipeline.\n- **Sequence and context parallelism** shard the sequence; Ring Attention (Liu et al., 2023) circulates K/V blocks around a ring so each GPU attends to the whole sequence without holding it.\n- **Expert parallelism** places mixture-of-experts experts on different GPUs, using all-to-all.\n\nReal systems combine several, placing tensor parallelism inside a node (fast NVLink) and data or pipeline parallelism across nodes (slower network).\n\n## The overlap problem\n\nA collective that must finish before the next operation starts is *exposed* communication. With a roofline view: if the time to move the data is comparable to the time to compute on it, exposing it can cost tens of percent of end-to-end time. Standard remedies: bucket gradients and launch their all-reduce while backward continues; run communication on a separate stream; pipeline so that stage-to-stage transfers overlap computation.\n\n## Fusing communication into kernels\n\nFor tensor parallelism the dependent GEMM and collective cannot be separated by streams alone, because the collective needs the GEMM's output. Approaches such as FLUX (preprint, 2024) over-decompose both operations into finer tiles and fuse them into one kernel so data is sent as soon as each output tile is ready; the authors state that up to 96% of communication can be hidden by a fused kernel and report speedups over Megatron-LM in training. Triton-distributed (preprint, 2025) extends the Triton compiler with OpenSHMEM-style primitives so such overlapping kernels can be written in Python.\n\n## Costs and risks\n\nFusion couples kernel tuning to the interconnect, tile scheduling to message sizes, and failure modes (hangs, races) to custom synchronisation. Collective results can also depend on reduction order, which affects reproducibility of training runs."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

The biggest AI models do not fit on a single GPU, and training them on one would take forever. So the work is split in several ways. One way gives each GPU a different slice of the training data. Another cuts each layer of the model into pieces, one per GPU. A third puts different layers on different GPUs, like stations on an assembly line. For very long texts, the text itself can be split.

Whatever the split, the GPUs must exchange results constantly, and time spent waiting for data to travel is time the calculators sit idle. The remedy is overlap: start sending a finished piece while the next piece is still being worked on, like a baker who loads the first trays into the delivery van while the next batch is still in the oven.

Some exchanges are tricky because the next step needs the result of the last calculation. Recent research fuses the calculation and the communication into one program that works on small tiles and sends each tile the moment it is ready. One research paper reported that a fused program can hide up to 96% of the communication time in its tests, and another extended a GPU programming language so such programs are easier to write.

These techniques are fragile: they tie programs to specific cables and chips, and mistakes cause hangs or wrong answers. But the potential saving is large, because communication can take a big share of training time.

# Student explanation

**What it is for.** The largest neural networks do not fit in the memory of one GPU (an H100 has 80 GB), and training them on one GPU would take far too long. So they are split across many GPUs, which must exchange data as they work. Every millisecond a GPU spends waiting for data is wasted.

**Ways to split.**

- _Data parallelism._ Every GPU holds the whole model and processes different examples; gradients are summed with an all-reduce. ZeRO also splits the optimiser's stored state, the gradients and even the weights among GPUs to save memory.
- _Tensor parallelism_ (Megatron-LM). Each weight matrix is split across GPUs. Splitting $W$ by columns, $W = [W_1 \; W_2]$, gives $XW = [XW_1 \; XW_2]$, so each GPU computes its own slice. Splitting by rows instead gives partial results $XW = X_1W_1 + X_2W_2$ that must be added across GPUs, in every layer, before the next layer can start.
- _Pipeline parallelism._ Groups of layers are placed on different GPUs like stations on an assembly line, and each batch is cut into micro-batches to keep the stations busy.
- _Sequence and context parallelism_ split long inputs; Ring Attention passes blocks of keys and values around a ring of GPUs.
- _Expert parallelism_ puts the experts of a mixture-of-experts model on different GPUs, using all-to-all exchanges.

Real systems combine several: tensor parallelism inside one machine over fast NVLink, data or pipeline parallelism across machines.

**Exposed communication.** If the next step needs data from a communication taking $T_{comm}$ and nothing else runs meanwhile, the time is $T_{comp} + T_{comm}$. If the communication runs while useful work continues, the ideal is
$T = \max(T_{comp},\, T_{comm}).$
Example: 10 ms of computing and 4 ms of communication take 14 ms back to back but 10 ms when overlapped, a 29% saving. Standard tricks: start summing the gradients that are already finished while later ones are still being computed, and put communication on a separate stream (an independent queue of GPU work).

**Fusion.** In tensor parallelism the sum needs the output of the matrix multiply, so separate streams cannot hide it. FLUX (a 2024 preprint) breaks both the multiply and the communication into small tiles inside one kernel and sends each output tile as soon as it is ready; its authors state that up to 96% of the communication can be hidden and report speedups over Megatron-LM. Triton-distributed (a 2025 preprint) adds communication operations to the Triton compiler so such kernels can be written in Python. Analogy: a kitchen that sends each plate out the moment it is ready instead of waiting until the whole table's order is cooked. It breaks when plates are tiny and the waiter's trip time (latency) dominates.

**Limits.** Fused kernels tie their tuning to one interconnect and are hard to debug (hangs, race conditions). The order of additions can change results in the last bits, which affects the reproducibility of training runs.
