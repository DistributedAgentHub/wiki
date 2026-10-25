---
type: entry
slug: triton-language
title: "Triton: a tile-level language and compiler for GPU kernels"
field: kernel-compilers
kind: LIBRARY
status: ACTIVE
summary: A Python-embedded language in which a kernel is written for a block of data, with the compiler choosing memory layout, coalescing, shared-memory use and synchronisation; the default kernel backend of PyTorch's compiler.
reliedOn: PyTorch 2 (TorchInductor) generates Triton code for GPU operators, and many open attention, quantisation and fused-operator kernels are written in Triton; its compiler decides how close high-level code gets to hand-tuned CUDA.
dependsOn:
  - cuda-memory-hierarchy-roofline
  - pytorch
  - tiled-gemm-tensor-cores
references:
  - title: "Tillet, Kung, Cox: Triton: an intermediate language and compiler for tiled neural network computations (MAPL 2019)"
    url: https://doi.org/10.1145/3315508.3329973
    kind: paper
  - title: Triton documentation and tutorials
    url: https://triton-lang.org/main/index.html
    kind: docs
  - title: "Ansel et al.: PyTorch 2: Faster Machine Learning Through Dynamic Python Bytecode Transformation and Graph Compilation (ASPLOS 2024)"
    url: https://doi.org/10.1145/3620665.3640366
    kind: paper
  - title: Triton repository
    url: https://github.com/triton-lang/triton
    kind: code
timeline:
  - date: 2019-06-01
    title: Triton paper
    body: Tillet, Kung and Cox present Triton at MAPL 2019.
    source: https://doi.org/10.1145/3315508.3329973
  - date: 2024-04-01
    title: PyTorch 2 adopts Triton in TorchInductor
    body: The PyTorch 2 paper (ASPLOS 2024) describes generating Triton kernels for GPU code.
    source: https://doi.org/10.1145/3620665.3640366
explainer:
  oneLine: A way to write fast GPU programs in Python by thinking in blocks of data instead of single threads.
  flow:
    - CUDA needs per-thread instructions
    - Triton describes work per block of data
    - Compiler picks layout, memory and sync
    - Python code becomes tensor-core code
    - Gap to expert kernels shrinks
  glossary:
    - term: compiler
      meaning: A program that translates code written by people into instructions a chip can run.
      link: https://en.wikipedia.org/wiki/Compiler
    - term: domain-specific language
      meaning: A small programming language built for one kind of job.
      link: https://en.wikipedia.org/wiki/Domain-specific_language
    - term: kernel (GPU)
      meaning: A small program that runs on the GPU, started many times in parallel on different pieces of data.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: GPU
      meaning: A chip with thousands of small arithmetic units, built to do many similar calculations at once; the workhorse for training AI models.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: PyTorch
      meaning: The most widely used open-source library for building and training AI models.
      link: /research/pytorch
    - term: autotuning
      meaning: Trying many settings automatically, timing each, and keeping the fastest.
      link: https://en.wikipedia.org/wiki/Hyperparameter_optimization
    - term: GEMM
      meaning: "General matrix multiply: multiplying two grids of numbers. Most of the work in AI models is made of these."
      link: https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
    - term: shared memory
      meaning: A small, very fast scratchpad inside each GPU processor block that the program controls directly.
      link: https://en.wikipedia.org/wiki/Memory_hierarchy
    - term: CUDA
      meaning: NVIDIA’s programming platform and C++-based language for writing programs that run on its GPUs.
      link: https://en.wikipedia.org/wiki/CUDA
    - term: MLIR
      meaning: A toolkit for building compilers out of layers of intermediate representations, each closer to the machine.
      link: https://en.wikipedia.org/wiki/MLIR_(software)
    - term: thread
      meaning: One of many copies of a GPU program running at the same time, each working on its own piece of the data.
      link: https://en.wikipedia.org/wiki/Thread_(computing)
    - term: tensor core
      meaning: GPU hardware that multiplies small blocks of matrices in a single instruction, much faster than ordinary arithmetic units.
      link: /research/tiled-gemm-tensor-cores
  readFirst:
    - title: Triton documentation and tutorials
      url: https://triton-lang.org/main/index.html
      why: Official introduction with runnable examples.
    - title: How to Optimize a CUDA Matmul Kernel for cuBLAS-like Performance (Simon Boehm)
      url: https://siboehm.com/articles/22/CUDA-MMM
      why: Step-by-step matrix multiplication kernel, from slow to fast, with measurements.
    - title: Making Deep Learning Go Brrrr From First Principles (Horace He)
      url: https://horace.io/brrr_intro.html
      why: A readable tour of compute-bound versus memory-bound work on GPUs.
raw:
  body: "## The idea\n\nCUDA exposes the machine at the level of a single thread: the programmer arranges threads, shared memory, synchronisation and memory coalescing by hand. Triton (Tillet, Kung and Cox, 2019) raises the unit of programming to a **block**. A kernel instance, called a *program*, operates on whole tiles of tensors using operations such as `tl.load`, `tl.dot`, `tl.sum` and elementwise arithmetic. The compiler decides how a tile is spread over threads, which tiles are staged through shared memory, and where synchronisation is needed.\n\n## What a kernel looks like\n\nA Triton kernel is a Python function decorated with `@triton.jit`. It computes pointer offsets for a tile with `tl.arange`, loads with a mask for boundaries, performs `tl.dot` on tiles (which lowers to tensor-core instructions) and stores the result. Constants such as tile sizes are `tl.constexpr` parameters, so the compiler specialises code per configuration. Launch grids are given from Python, and tensors are ordinary PyTorch tensors.\n\n## The compiler\n\nTriton lowers through MLIR-based dialects: a front-end Triton IR, then a GPU-specific IR that carries layouts (how tile elements map to threads and to MMA fragments), then LLVM and PTX. Passes handle coalescing, layout conversion, shared-memory allocation, software pipelining of loads, and, in recent releases for Hopper, asynchronous copies through TMA and warp specialisation. Backends exist for NVIDIA and AMD GPUs and other accelerators.\n\n## Role in the ecosystem\n\nTorchInductor, the compiler behind `torch.compile` in PyTorch 2, emits Triton kernels for fused pointwise, reduction and some matrix-multiply operations. FlashAttention-style kernels, quantised GEMMs, mixture-of-experts kernels and many research operators exist as Triton code because it is far quicker to write and modify than templated C++.\n\n## Where it falls short\n\nThe abstraction hides decisions that matter at the top end. On Hopper and later, the fastest kernels use explicit producer and consumer warps, register reallocation and hand-chosen pipeline stages; matching them from Triton depends on compiler heuristics that may not fire, or on newer language extensions. Autotuning (trying several tile shapes and stage counts) covers some of the gap. Related approaches include TileLang and CuTe-based Python DSLs, which expose more of the hardware."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Writing a program for a GPU normally means giving instructions to thousands of tiny workers, one by one: which worker reads which number, which waits for which, where to keep partial results. Doing this well takes years of experience, and small mistakes make the program many times slower.

Triton is a language that lets you describe the job at the level of a block of data instead. You say: take this chunk of the table, multiply it by that chunk, add the result there. The translator, called a compiler, works out how to split the chunk among workers, which pieces to keep in fast storage and when workers must wait for each other.

The result looks like ordinary Python code, which makes it far quicker to write and change than the traditional route. That is why many researchers write new AI operations in it, and why the compiler inside PyTorch writes Triton programs automatically to speed up models.

The catch is that the translator is making choices for you. On the newest chips the very fastest programs organise their workers in specialised roles, and a translator may not find that arrangement by itself. So there is a gap between the first Triton program you write and the best possible one, and closing that gap is a live research and engineering question. Triton is like writing recipes by instruction rather than by individual hand movements: faster to write, but the cook must be good.

# Student explanation

**What it is for.** Writing a fast GPU kernel in CUDA, NVIDIA's C++-based language, means managing individual threads: which of thousands of threads loads which number, when they must wait for each other, and how data is staged in on-chip shared memory. That work is slow and error-prone. Triton (Tillet, Kung and Cox, 2019) lets a programmer write kernels in Python at the level of blocks of data, and its compiler (a program that translates code into machine instructions) works out the thread-level details.

**Analogy.** CUDA is like directing every worker on a building site individually; Triton is like giving a foreman instructions per room ("tile this floor") and letting the foreman assign the workers. The analogy breaks where the foreman's habits are not the best plan: the compiler's choices can leave speed on the table.

**What a kernel looks like.** A function decorated with `@triton.jit` is launched as many independent programs, each handling one block. Vector addition is the hello-world:

```python
@triton.jit
def add(x_ptr, y_ptr, out_ptr, n, BLOCK: tl.constexpr):
    pid = tl.program_id(0)
    offs = pid * BLOCK + tl.arange(0, BLOCK)
    mask = offs < n
    x = tl.load(x_ptr + offs, mask=mask)
    y = tl.load(y_ptr + offs, mask=mask)
    tl.store(out_ptr + offs, x + y, mask=mask)
```

Program number $p$ handles elements $p \cdot B$ to $p \cdot B + B - 1$, where $B$ is the block size; the mask stops the last program from reading past the end of the arrays. For matrix multiplication, `tl.dot(a, b)` multiplies two tiles and the compiler maps it onto tensor cores, the GPU's matrix-multiply units. Block sizes are compile-time constants, so the compiler produces specialised code for each choice.

**The compiler.** Triton lowers code through several intermediate representations built on MLIR, a toolkit for building compilers. Along the way it decides how tile elements map to threads, which tiles pass through shared memory, how to overlap loading the next tile with computing the current one, and, on Hopper GPUs such as the H100, how to use the asynchronous copy engine. Backends exist for NVIDIA and AMD GPUs.

**Why it matters.** PyTorch's compiler (`torch.compile`) generates Triton code for many operations, and many attention, quantisation and research kernels are written in Triton because they can be changed in an afternoon rather than a week.

**Limits.** The fastest H100 kernels split threads into dedicated loaders and dedicated calculators and hand-pick how many tiles to keep in flight. Whether Triton matches them depends on compiler heuristics or on newer language extensions. Autotuning, which tries several configurations and keeps the fastest, closes part of the gap. TileLang and CuTe-based Python languages take a different trade-off and expose more of the hardware.
