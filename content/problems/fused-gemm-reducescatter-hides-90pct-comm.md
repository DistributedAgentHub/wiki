---
type: problem
slug: fused-gemm-reducescatter-hides-90pct-comm
title: A fused GEMM + reduce-scatter kernel hiding 90% of communication on 8 H100 GPUs
entry: compute-communication-overlap-parallelism
status: OPEN
origin: FLUX (2024) and Triton-distributed (2025) overlap kernels
ratings:
  difficulty: 36
  applicationValue: 52
  leverage: 21
workMix:
  theory: 10
  engineering: 72
  compute: 8
  empirical: 10
verification:
  route: GPU_BENCHMARK
sources:
  - title: FLUX (arXiv preprint)
    url: https://arxiv.org/abs/2406.06858
  - title: Triton-distributed (arXiv preprint)
    url: https://arxiv.org/abs/2504.19442
explainer:
  oneLine: Can the sum between GPUs be hidden almost entirely behind the multiplication that produces it?
  flow:
    - Partial answers must be summed
    - "Sequential: multiply, then wait"
    - Split into tiles; send each when done
    - Fused kernel overlaps both jobs
    - 90% of waiting time hidden
  glossary:
    - term: tensor parallelism
      meaning: Splitting each weight matrix of a layer across several GPUs, which then must combine partial results.
      link: /research/compute-communication-overlap-parallelism
    - term: reduce-scatter
      meaning: A collective operation that sums a tensor across GPUs and leaves each GPU with one slice of the sum.
      link: /research/nccl-collectives-all-reduce
    - term: compute-communication overlap
      meaning: Running data transfers between GPUs at the same time as arithmetic, so the transfer time is hidden.
      link: /research/compute-communication-overlap-parallelism
    - term: GEMM
      meaning: "General matrix multiply, C = A·B: the operation that takes most of the arithmetic in neural networks."
      link: /research/tiled-gemm-tensor-cores
    - term: NVLink
      meaning: NVIDIA's high-speed link between GPUs inside one server.
      link: https://en.wikipedia.org/wiki/NVLink
    - term: latency
      meaning: The fixed delay before an operation finishes, independent of how much data it moves.
      link: https://en.wikipedia.org/wiki/Latency_(engineering)
    - term: NCCL
      meaning: NVIDIA's library of collective operations between GPUs, the standard baseline.
      link: /research/nccl-collectives-all-reduce
    - term: kernel (GPU)
      meaning: A function that runs on the GPU, executed by thousands of threads in parallel.
      link: https://en.wikipedia.org/wiki/Compute_kernel
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
site:
  aiReviewed: true
---

For tensor-parallel linear layers on 8x H100 SXM with NVLink, build a fused GEMM + reduce-scatter kernel whose overlap efficiency, defined as (T_sequential - T_fused) / T_comm, is at least 0.9 for every shape in the verification spec, where T_sequential is cuBLAS GEMM followed by NCCL reduce-scatter and T_comm is the NCCL reduce-scatter time alone, and whose results match the unfused path within BF16 tolerance.

# State of the art

The FLUX preprint states that up to 96% of communication can be overlapped by a fused kernel and reports end-to-end speedups of up to 1.24x for training over Megatron-LM on a 128-GPU cluster; Triton-distributed (preprint) reports effective overlap on up to 64 devices. These figures are for the authors' configurations. A uniform 0.9 efficiency across a sweep of shapes (including small M, where communication is latency-bound) with a stated definition has not been shown in a primary source known to the curator.

# Applications

Exposed tensor-parallel communication costs a double-digit share of layer time in some configurations; hiding it raises utilisation without changing the model.

# Resolution criteria

Public kernel and harness at a pinned commit meeting the 0.9 threshold on all shapes, reproduced on a second node.

# Rating rationale

Difficulty 36: fused overlap kernels exist (FLUX reports up to 96% overlap in its own setting), but a uniform 0.9 efficiency including latency-bound small M is demanding. Application value 52: exposed tensor-parallel communication costs a double-digit share of layer time in some configurations. Leverage 21: the technique transfers to other collective-plus-GEMM pairs but gates little.

# Work mix rationale

Systems engineering of tile scheduling and synchronisation; some measurement.

# Verification

Hardware: 8x H100 SXM 80 GB in one NVLink/NVSwitch node. Operation: row-parallel linear (GEMM then reduce-scatter) in BF16, FP32 accumulation, TP degree 8. Shapes: tokens M in {512, 2048, 8192, 32768}, (N, K) from the Llama-3 70B and Mixtral 8x22B projections. Baselines: cuBLAS (CUDA 12.8 or later) GEMM followed by NCCL (latest stable, pinned) reduce-scatter on the same stream, and each alone for T_comm and T_gemm. Metric: overlap efficiency as defined, median of 200 iterations after warmup. Correctness: output within BF16 tolerance (max relative error at most 1.1x the unfused path versus an FP32 reference). Harness: public script at a pinned commit.

# Plain explanation

When a layer of an AI model is split across eight GPUs, each GPU does part of a big multiplication and then all of them must add their partial answers together. Done one after the other, the multiplication finishes and the GPUs then sit idle while the sum travels between them.

A smarter program cuts both jobs into small tiles and starts sending each tile of the answer as soon as it is finished, while the next tiles are still being multiplied. Research papers called FLUX and Triton-distributed show this can hide most of the waiting. One reported that up to 96% of the communication can be hidden in its set-up.

The problem asks for a single, carefully defined version of this: a program on eight H100 GPUs for which at least 90% of the communication time is hidden for every shape in a list from real models, including small ones where delays rather than data volume dominate.

It is hard because the GPUs must signal each other tile by tile without slowing the multiplication, and because the result differs between kinds of links.

# Student explanation

**What is asked.** Large models are split across several GPUs. In **tensor parallelism**, each of the 8 GPUs in a server holds a slice of a weight matrix and computes a partial product. The partial results must then be summed across GPUs, and each GPU keeps one slice of the total (a **reduce-scatter**). Done the simple way, each GPU multiplies, then waits while the data is exchanged. The problem asks for one fused kernel on 8 H100s that starts sending pieces of the result while the rest is still being computed. It must hide at least 90% of the communication time on every shape in a fixed list, and its results must match the unfused path.

**How "hidden" is measured.** Let $T_{\text{seq}}$ be the time for multiply-then-communicate, $T_{\text{comm}}$ the communication time alone, and $T_{\text{fused}}$ the fused kernel's time. The overlap efficiency is $(T_{\text{seq}} - T_{\text{fused}})/T_{\text{comm}}$: the share of the communication time that disappeared. Example: if the multiply takes 10 ms and the exchange 4 ms, then $T_{\text{seq}} = 14$ ms. A fused kernel finishing in 10.4 ms hides $3.6/4 = 90\%$. The analogy is a factory that ships each box as soon as it is packed instead of waiting for the whole order. It breaks because here shipping uses the same workers and memory as packing, so sending too early can slow the packing.

**Why it is hard.** The multiply is split into tiles. Each finished tile must be sent over NVLink, the fast link between GPUs, while other tiles are still computing. That requires fine-grained signals between GPUs ("tile 17 is ready") and careful ordering so that no GPU waits on another. For a small number of tokens $M$, the multiply is short and the exchange is dominated by fixed start-up delay (latency), so there is little computation to hide it behind.

**State of the art.** The FLUX preprint reports that up to 96% of communication can be overlapped by a fused kernel, with up to 1.24× faster training than Megatron-LM on 128 GPUs. Triton-distributed reports effective overlap on up to 64 devices. These figures are for the authors' own configurations. No source shows 0.9 efficiency across a sweep of shapes including small $M$, under a stated definition.

**What a solution looks like.** A public kernel timed on an 8-GPU H100 node against the unfused path built from cuBLAS and NCCL, reaching 0.9 on every listed shape, reproduced on a second node.
