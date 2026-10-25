---
type: entry
slug: nccl-collectives-all-reduce
title: "NCCL and collective communication: ring and tree all-reduce"
field: distributed-communication
kind: LIBRARY
status: MATURE
summary: The collective operations (all-reduce, all-gather, reduce-scatter) that synchronise GPUs in training, the ring and tree algorithms behind them, and NVIDIA's NCCL library that implements them.
reliedOn: Data, tensor and pipeline parallel training in PyTorch, Megatron-LM and DeepSpeed all call NCCL (or its AMD counterpart RCCL); the choice of algorithm decides how well training scales across GPUs.
dependsOn:
  - pytorch
  - reverse-mode-autodiff
references:
  - title: "Patarasuk, Yuan: Bandwidth optimal all-reduce algorithms for clusters of workstations (J. Parallel Distrib. Comput. 2009)"
    url: https://doi.org/10.1016/j.jpdc.2008.09.002
    kind: paper
  - title: "Thakur, Rabenseifner, Gropp: Optimization of Collective Communication Operations in MPICH (IJHPCA 2005)"
    url: https://doi.org/10.1177/1094342005051521
    kind: paper
  - title: NVIDIA NCCL user guide
    url: https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/index.html
    kind: docs
  - title: "NVIDIA: Massively Scale Your Deep Learning Training with NCCL 2.4 (double binary trees)"
    url: https://developer.nvidia.com/blog/massively-scale-deep-learning-training-nccl-2-4/
    kind: article
  - title: "nccl-tests: benchmarks for NCCL collectives"
    url: https://github.com/NVIDIA/nccl-tests
    kind: code
  - title: "NVIDIA: Enabling Fast Inference and Resilient Training with NCCL 2.27"
    url: https://developer.nvidia.com/blog/enabling-fast-inference-and-resilient-training-with-nccl-2-27
    kind: article
  - title: "Shen et al.: Every Microsecond Matters: Achieving Near Speed-of-Light Latency in GPU Collectives (arXiv preprint)"
    url: https://arxiv.org/abs/2607.16100
    kind: paper
timeline:
  - date: 2005-01-01
    title: Collective algorithm survey
    body: Thakur, Rabenseifner and Gropp compare algorithms by message size (IJHPCA 2005).
    source: https://doi.org/10.1177/1094342005051521
  - date: 2009-02-01
    title: Ring all-reduce shown bandwidth-optimal
    body: Patarasuk and Yuan prove bandwidth optimality for clusters with one link per node.
    source: https://doi.org/10.1016/j.jpdc.2008.09.002
explainer:
  oneLine: How many GPUs add up their results together, and the NVIDIA library that does it.
  flow:
    - Many GPUs each learn from some data
    - Results must be summed everywhere
    - Rings use every link evenly
    - Trees cut the number of steps
    - NCCL picks the best pattern per case
  glossary:
    - term: collective operation
      meaning: A step in which every GPU in a group sends or receives data together, such as summing a number across all of them.
      link: https://en.wikipedia.org/wiki/Collective_operation
    - term: all-reduce
      meaning: Every GPU contributes a list of numbers; all of them end up with the sum.
      link: https://en.wikipedia.org/wiki/Collective_operation
    - term: NVLink
      meaning: A very fast cable-like link between GPUs in the same server.
      link: https://en.wikipedia.org/wiki/NVLink
    - term: MPI
      meaning: A long-standing standard for programs that run on many computers and exchange messages.
      link: https://en.wikipedia.org/wiki/Message_Passing_Interface
    - term: memory bandwidth
      meaning: How many bytes per second can be moved between memory and the chip.
      link: https://en.wikipedia.org/wiki/Bandwidth_(computing)
    - term: latency
      meaning: The delay between asking for something and getting it. Small messages are limited by latency, not bandwidth.
      link: https://en.wikipedia.org/wiki/Latency_(engineering)
    - term: GPU
      meaning: A chip with thousands of small arithmetic units, built to do many similar calculations at once; the workhorse for training AI models.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: parallelism
      meaning: Splitting a job so many processors work on it at the same time.
      link: https://en.wikipedia.org/wiki/Parallel_computing
    - term: gradient
      meaning: The derivatives of the training error with respect to each weight, telling which way to change each one.
      link: https://en.wikipedia.org/wiki/Gradient
    - term: ring network
      meaning: Connecting machines in a closed loop so that each one talks only to its two neighbours.
      link: https://en.wikipedia.org/wiki/Ring_network
    - term: binary tree
      meaning: A branching structure in which each node has at most two children; a tree of p leaves has about log₂ p levels.
      link: https://en.wikipedia.org/wiki/Binary_tree
    - term: InfiniBand
      meaning: A high-speed, low-latency network used to connect machines in supercomputers and GPU clusters.
      link: https://en.wikipedia.org/wiki/InfiniBand
  readFirst:
    - title: Bringing HPC Techniques to Deep Learning (Andrew Gibiansky)
      url: https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce/
      why: Clear walk-through of ring all-reduce with diagrams.
    - title: Collective operation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Collective_operation
      why: Definitions of broadcast, reduce, all-reduce and friends.
    - title: "NVIDIA: Massively Scale Your Deep Learning Training with NCCL 2.4"
      url: https://developer.nvidia.com/blog/massively-scale-deep-learning-training-nccl-2-4/
      why: Vendor explanation of tree algorithms for all-reduce.
    - title: The Ultra-Scale Playbook (Hugging Face)
      url: https://huggingface.co/spaces/nanotron/ultrascale-playbook
      why: Interactive guide to splitting training across many GPUs and hiding communication.
site:
  published: true
  aiReviewed: true
---

## What a collective does

When many GPUs train one model, they must combine results. **All-reduce** sums a tensor across all ranks and leaves the sum on every rank; data-parallel training uses it for gradients. **Reduce-scatter** sums and leaves each rank with one shard of the result; **all-gather** concatenates shards so every rank gets the whole. All-reduce equals reduce-scatter followed by all-gather. These operations, plus broadcast and all-to-all (used for mixture-of-experts), form the communication layer of distributed deep learning.

## Ring all-reduce

Arrange the p ranks in a ring and split the tensor into p chunks. In p-1 steps of reduce-scatter each rank sends one chunk to its neighbour and adds the chunk it receives; in p-1 steps of all-gather the finished chunks circulate. Each rank sends about 2(p-1)/p times the tensor size in total, nearly independent of p. Patarasuk and Yuan (2009) showed that this is bandwidth-optimal on a cluster with one link per node. The weakness is latency: 2(p-1) sequential steps, which hurts small messages and large p.

## Tree and hybrid algorithms

Tree algorithms reduce up a tree and broadcast back down, with depth logarithmic in p. Plain trees leave bandwidth unused, so NCCL 2.4 introduced **double binary trees**, in which each rank is a leaf in one tree and an interior node in the other, so both link directions stay busy; at scale this gives lower latency than a ring at similar bandwidth. Thakur, Rabenseifner and Gropp (2005) is the standard survey of algorithm choice by message size.

## NCCL

NCCL discovers the topology (NVLink, NVSwitch, PCIe, InfiniBand or Ethernet), builds rings and trees that fit it, picks an algorithm and a protocol (Simple for large messages; LL and LL128 for low latency) by message size and rank count, and runs communication inside GPU kernels so it can overlap with compute on other streams. Newer paths use NVLink SHARP in-network reduction and GPUDirect RDMA. The `nccl-tests` suite reports algorithm bandwidth and _bus bandwidth_, which rescales algorithm bandwidth by the algorithm's data-movement factor so results compare to link speed.

## Why it is load-bearing

Communication time sits on the critical path of tensor parallelism and of the exposed part of data parallelism. Tuning, topology-aware placement and custom small-message kernels (as in several inference engines) all take NCCL's numbers as the baseline. Since NCCL 2.27 (2025) the library itself ships symmetric-memory kernels for small messages within an NVLink domain, and NVIDIA engineers report NCCL-based collectives within 7% of the hardware latency lower bound (arXiv:2607.16100), which narrows the room for custom kernels.

# Plain explanation

Training a large AI model usually takes many GPUs working together. Each GPU learns from its own share of the data, and then they must agree: all their results are added up and every GPU gets the total. This step is called an all-reduce, and it happens again and again, so a slow all-reduce slows the whole training.

One clever way to do it is a ring. Picture a circle of people, each holding a list of numbers cut into pieces. Each person passes one piece to the neighbour, who adds it to their own. After a number of rounds every person holds the complete total for one piece, and then the finished pieces go around the circle once more until everyone has everything. In this scheme each person sends about the same amount of data however many people are in the circle, which is optimal for large lists.

The problem is that the ring takes many sequential steps, which is slow for short lists and very large groups. So another family arranges people in trees, where messages go up to a root and back down in a number of steps that grows slowly with group size.

NVIDIA's library, NCCL, looks at how the GPUs are wired together, picks a ring or tree pattern and a transfer method suited to the message size, and runs it. The circle analogy fails in one respect: real clusters have fast and slow links, which the library must take into account.

# Student explanation

**What it is for.** Training a large neural network on many GPUs usually gives each GPU a different slice of the data. Each GPU computes gradients (the derivatives of the error with respect to every weight, saying which way to adjust it), and then every GPU needs the sum of all the gradients so that their copies of the model stay identical. That operation is all-reduce: every GPU starts with a vector and ends with the element-wise sum over all GPUs. Related collective operations are reduce-scatter (each GPU ends with one slice of the sum) and all-gather (every GPU ends with all the slices); an all-reduce is a reduce-scatter followed by an all-gather.

**The naive way.** Send everything to one GPU, add, and send the result back. With $p$ GPUs each holding $N$ bytes, that GPU must receive $(p-1)N$ bytes. With $p = 8$ and 1 GB of gradients, its link carries 7 GB in each direction while the other links sit idle.

**Ring all-reduce.** Arrange the GPUs in a ring and cut the vector into $p$ chunks. In each of $p-1$ steps every GPU sends one chunk to its neighbour and adds the chunk it receives; afterwards each GPU holds one fully summed chunk (a reduce-scatter). Then $p-1$ more steps pass the finished chunks around (an all-gather). Each GPU sends
$2\,\frac{p-1}{p}\,N \ \text{bytes in total}.$
For $p = 8$ that is $1.75N$, and it hardly grows with $p$, because all links work at once. Patarasuk and Yuan (2009) proved this bandwidth-optimal for clusters with one link per node. Analogy: passing dishes around a dinner table, each person adding a portion and passing on, instead of everyone queuing at the kitchen. The analogy breaks for small messages: the ring needs $2(p-1)$ steps one after another, and each step has a fixed latency, the start-up delay before any data flows. For messages of a few kilobytes, those delays dominate.

**Trees.** Tree algorithms add values up a tree and broadcast the result down in about $\log_2 p$ steps. NCCL 2.4 introduced double binary trees: two trees arranged so every GPU is a leaf in one and an inner node in the other, keeping links busy while cutting latency at large scale.

**NCCL.** NVIDIA's Collective Communications Library detects how the GPUs are connected (NVLink, NVIDIA's fast GPU-to-GPU link; PCIe; InfiniBand or Ethernet between machines), builds rings and trees that fit, and picks an algorithm and protocol by message size. Its benchmark suite, nccl-tests, reports "bus bandwidth", rescaled by the factor $2(p-1)/p$ so results can be compared directly with link speed.

**Limits.** A collective cannot start until its data exists, so it sits on the critical path of some forms of parallel training. Small messages are latency-bound. And because floating-point addition gives slightly different results in a different order, the algorithm choice can change the last bits of the sum.
