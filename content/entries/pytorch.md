---
type: entry
slug: pytorch
title: PyTorch
field: machine-learning
kind: LIBRARY
status: MATURE
summary: "The dominant open-source deep learning framework: tensors, autograd and a compiler stack."
reliedOn: A huge share of ML research code and production models, plus higher-level libraries built directly on its tensor and autograd APIs.
dependsOn:
  - reverse-mode-autodiff
references:
  - title: pytorch/pytorch
    url: https://github.com/pytorch/pytorch
    kind: code
  - title: PyTorch website
    url: https://pytorch.org
    kind: blog
timeline:
  - date: 2023-03-15
    title: PyTorch 2.0 ships torch.compile
    body: Graph capture via TorchDynamo plus TorchInductor code generation, opt-in with a one-line change.
explainer:
  oneLine: A free Python toolkit for building and training neural networks, with GPU speed and automatic gradients.
  flow:
    - Training needs huge tensor arithmetic
    - Tensors run on GPUs
    - Code runs and records operations
    - Backward walk gives all gradients
    - Compiler fuses steps for speed
  glossary:
    - term: tensor
      meaning: "A grid of numbers with any number of dimensions: a list, a table, a stack of tables, and so on."
      link: https://en.wikipedia.org/wiki/Tensor_(machine_learning)
    - term: GPU
      meaning: A graphics processor with thousands of small cores, very good at doing many similar calculations at once.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: autograd
      meaning: PyTorch's built-in system that records operations and computes gradients automatically.
      link: https://en.wikipedia.org/wiki/Automatic_differentiation
    - term: define-by-run
      meaning: Building the computation graph while the program runs, so ordinary code with loops and conditions can be differentiated.
      link: https://en.wikipedia.org/wiki/PyTorch
    - term: reverse-mode autodiff
      meaning: Computing all gradients by running the program forward, then sweeping backwards applying the chain rule.
      link: /research/reverse-mode-autodiff
    - term: compiler
      meaning: A program that translates code into a faster or lower-level form that a machine can run efficiently.
      link: https://en.wikipedia.org/wiki/Compiler
    - term: kernel (GPU)
      meaning: A small program that runs on the GPU; fusing several operations into one kernel avoids slow trips to memory.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: systolic array
      meaning: A grid of simple processors that pass data rhythmically to each other; the idea behind matrix engines in AI chips.
      link: /research/systolic-arrays
    - term: floating-point number
      meaning: How computers store real numbers with limited precision, so results are rounded and the order of additions can change them slightly.
      link: https://en.wikipedia.org/wiki/Floating-point_arithmetic
    - term: stride
      meaning: How far to step in memory to move one position along a dimension of an array; changing strides lets a tensor be sliced or transposed without copying.
      link: https://en.wikipedia.org/wiki/Stride_of_an_array
    - term: nondeterministic operation
      meaning: An operation that can give slightly different results on repeated runs, usually because parallel additions happen in a different order.
      link: https://en.wikipedia.org/wiki/Floating-point_arithmetic
  readFirst:
    - title: PyTorch (Wikipedia)
      url: https://en.wikipedia.org/wiki/PyTorch
      why: A short history and overview of what the library is and who uses it.
    - title: But what is a Neural Network? (3Blue1Brown)
      url: https://www.3blue1brown.com/lessons/neural-networks
      why: The picture of what a network is, which PyTorch lets you build.
    - title: Automatic differentiation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Automatic_differentiation
      why: The idea behind PyTorch's gradient engine.
site:
  published: true
  aiReviewed: true
---

## What it is

A Python-first tensor library with GPU acceleration and **define-by-run** reverse-mode autodiff: the computation graph is built as your code executes, so ordinary Python control flow just works.

## Core pieces to understand

| Layer           | Role                                              |
| --------------- | ------------------------------------------------- |
| `torch.Tensor`  | Strided n-d arrays with device + dtype            |
| Autograd        | Dynamic tape; each op registers its backward      |
| Dispatcher      | Routes each op to the right kernel (CPU, CUDA, …) |
| `torch.compile` | Captures graphs and generates fused kernels       |

## Why digest it

When millions of applications sit on top of one library, its numerical semantics, defaults, and failure modes become _de facto_ science. Knowing where it silently up-casts, or what makes an op nondeterministic, matters.

## Open questions

See below.

# Plain explanation

Training a modern AI model means doing enormous amounts of arithmetic on big grids of numbers, and keeping track of how to adjust millions of settings. Doing that by hand would be impossible. PyTorch is a free software library that does the heavy lifting.

Think of it as a very well-equipped kitchen. You write the recipe in ordinary Python, a popular programming language. PyTorch takes care of three things behind the scenes. It stores the numbers in efficient grids called tensors. It sends the arithmetic to a graphics card (GPU), which is good at doing many sums at once. And it quietly records what you did so that it can work out, afterwards, how to nudge every setting to improve the result.

Its big selling point is that the recording happens while your code runs. So normal Python features, like if-statements and loops, just work. That made experiments quick, which is a big reason researchers adopted it.

Because so many research papers and products sit on top of the same library, its small details (how it rounds numbers, what it does by default, when results differ between runs) quietly shape scientific results. The analogy breaks here: a kitchen does not change the taste of your food, but a library can change your numbers a little.

# Student explanation

**What it is.** PyTorch is an open-source Python library for tensor computation and deep learning. Its core promise is: write ordinary imperative Python, run it fast on a GPU, and get gradients for free.

**Four layers worth knowing.**

- **Tensors.** A `torch.Tensor` is an n-dimensional array that lives on a device (CPU or GPU) and has a data type (such as 32-bit or 16-bit floating point). It is stored in memory with _strides_ that say how to step along each dimension, which makes slicing and transposing cheap.
- **Autograd.** PyTorch implements _reverse-mode automatic differentiation_ in a **define-by-run** style: the computation graph is built as your code executes. Each operation records how to compute its own backward step. Calling `.backward()` on a scalar loss walks this record in reverse and fills in gradients for every parameter. Because the graph is rebuilt on every run, the graph can differ from one run to the next, so Python control flow is allowed.
- **Dispatcher.** Each operation (matrix multiply, add, etc.) is routed to the right low-level implementation depending on device, data type and other properties. This is how one line of Python can run on a laptop CPU or a data-centre GPU.
- **`torch.compile`.** Define-by-run is flexible but can be slow because each small operation launches separately. The compiler stack captures chunks of the program as a graph and generates fused _kernels_ (single GPU programs that do several operations at once), reducing time spent moving data.

**Why the details matter.** When millions of applications depend on one library, its numerical behaviour becomes a de facto standard. Some examples of what a careful user must know: some operations are nondeterministic (the order of floating-point additions can differ between runs, giving slightly different answers); lower-precision types save memory and time but can lose accuracy; and some operations silently change data types. The compiler's fused kernels can also produce results that differ slightly from the unfused version, because floating-point addition is not exactly associative.

**Relation to other topics.** PyTorch rests on reverse-mode autodiff for gradients and on hardware such as GPUs and systolic arrays for speed. It is a tool, not an algorithm, so its open questions are about engineering and reproducibility: how to make compiled code match eager code, how to get determinism cheaply, and how to expose hardware features without making the programming model complicated.
