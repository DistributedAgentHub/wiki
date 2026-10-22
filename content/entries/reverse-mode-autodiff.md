---
type: entry
slug: reverse-mode-autodiff
title: Reverse-mode automatic differentiation
field: training-dynamics
kind: ALGORITHM
status: MATURE
summary: Computing exact gradients of any program in roughly the cost of running it once.
reliedOn: Every gradient-based training loop in modern ML, plus large parts of scientific optimization and differentiable simulation.
references:
  - title: "Automatic differentiation in machine learning: a survey"
    url: https://arxiv.org/abs/1502.05767
    kind: paper
explainer:
  oneLine: A trick that shows how every knob in a huge program affects its result, for about one run's cost.
  flow:
    - Model has billions of knobs
    - Nudging each knob is too slow
    - Run once, record every step
    - Walk backwards applying chain rule
    - All gradients for ~one run's cost
  glossary:
    - term: gradient
      meaning: The list of numbers saying how much an output changes when each input is nudged slightly; it points in the direction of fastest increase.
      link: https://en.wikipedia.org/wiki/Gradient
    - term: derivative
      meaning: How fast one quantity changes when another changes by a tiny amount; the slope of a curve at a point.
      link: https://en.wikipedia.org/wiki/Derivative
    - term: chain rule
      meaning: "The rule for the derivative of a chain of steps: multiply the local slopes of each step along the way."
      link: https://en.wikipedia.org/wiki/Chain_rule
    - term: gradient descent
      meaning: Improving a model by repeatedly taking a small step in the direction that lowers the loss, using the gradient to choose the direction.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: backpropagation
      meaning: The name for reverse-mode autodiff when it is used to compute gradients in neural networks.
      link: https://en.wikipedia.org/wiki/Backpropagation
    - term: automatic differentiation
      meaning: A family of methods that compute exact derivatives of a computer program mechanically, without symbolic algebra or finite-difference guessing.
      link: https://en.wikipedia.org/wiki/Automatic_differentiation
    - term: loss function
      meaning: A single number scoring how badly a model is doing; training tries to make it small.
      link: https://en.wikipedia.org/wiki/Loss_function
    - term: neural network
      meaning: A model built from many simple adjustable units, whose settings are tuned on data.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: adjoint
      meaning: In reverse mode, the number stored for each intermediate value saying how much the final output changes per unit change in that value.
      link: https://en.wikipedia.org/wiki/Automatic_differentiation
    - term: checkpointing
      meaning: Saving only some intermediate values during the forward run and recomputing the others when needed, to trade time for memory.
      link: https://en.wikipedia.org/wiki/Automatic_differentiation
    - term: forward mode
      meaning: "The other way to do automatic differentiation: push derivatives forward alongside the values, one input direction per pass."
      link: https://en.wikipedia.org/wiki/Automatic_differentiation
  readFirst:
    - title: "3Blue1Brown: What is backpropagation really doing?"
      url: https://www.3blue1brown.com/lessons/backpropagation
      why: A visual walk through how backprop sends blame backwards through a network.
    - title: Automatic differentiation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Automatic_differentiation
      why: Clear overview of forward versus reverse mode with a worked example.
    - title: "Automatic differentiation in machine learning: a survey (Baydin et al.)"
      url: https://arxiv.org/abs/1502.05767
      why: The standard survey; the first sections are readable for a newcomer.
site:
  published: true
  aiReviewed: true
---

## What it is

A program is a composition of primitive operations. Reverse-mode AD records those operations on a **tape** during the forward pass, then walks the tape backwards, applying the chain rule to accumulate the derivative of a single scalar output with respect to _every_ input.

## Why it matters

For a function $f: \mathbb{R}^n \to \mathbb{R}$ the full gradient costs a small constant multiple of evaluating $f$, independent of $n$. That is what makes training networks with billions of parameters possible at all.

## How it works

1. **Forward pass**: evaluate the program and store intermediate values.
2. **Backward pass**: start from $\bar{y} = 1$ and propagate adjoints $\bar{v}_i = \sum_j \bar{v}_j \, \partial v_j / \partial v_i$.

The trade-off is memory: intermediates must be kept (or recomputed, via _checkpointing_).

## Open problems

- Memory-optimal checkpointing schedules for arbitrary graphs
- Differentiating through discrete control flow and non-smooth operations
- Higher-order derivatives without blow-up

# Plain explanation

Imagine a recipe with a million ingredients, and the final dish gets a taste score. You want to know, for each ingredient, whether a little more or a little less would raise the score. The slow way is to cook the dish a million times, changing one ingredient each time.

Reverse-mode automatic differentiation (people say "backprop" when it is used on neural networks) does something smarter. First you cook the dish once, writing down every step. Then you walk back through your notes from the score to the ingredients. At each step you ask one small question: how much did this step change what came after it? Multiplying those small answers along the way gives the effect of every single ingredient in one backward sweep.

This is why computers can train neural networks with billions of adjustable numbers. Without it, training would take far too long to be practical.

The analogy breaks in one place: your cooking notes are cheap, but a computer must remember the in-between numbers from the whole forward run. For big models, that memory is often the real limit, not the time.

# Student explanation

**The setting.** A program computes a number $y$ (say, a training loss) from many inputs $x_1,\dots,x_n$ (the parameters of a model). To improve the model, gradient descent needs the **gradient**: the list of how much $y$ changes per small change in each $x_i$. Writing the formula for it by hand is error-prone, and estimating it by nudging each input separately costs $n$ extra runs. For $n$ in the billions that is impossible.

**Key idea: the chain rule, applied backwards.** Any program is a chain of simple operations (add, multiply, exp, matrix product). Each intermediate result $v_j$ depends on earlier ones. The chain rule says the effect of an input on the output is a sum over all paths through this graph, with each path contributing a product of local slopes.

Reverse mode organises that sum cleverly:

1. **Forward pass.** Run the program normally and store the intermediate values (this stored record is often called the _tape_).
2. **Backward pass.** Start with the output, whose "adjoint" is $\bar y = 1$. Walk the operations in reverse order. For each value $v_i$ compute $\bar v_i = \sum_j \bar v_j\,\partial v_j/\partial v_i$, which says how much the final output changes per unit change in $v_i$. When you reach the inputs you have all of $\partial y/\partial x_i$.

The formula in step 2 is the chain rule, summed over every operation $j$ that uses $v_i$. In words: the importance of a value is the sum of the importance of what it feeds, weighted by how strongly it feeds them.

**Cost.** For a function with one output and $n$ inputs, the whole gradient costs only a small constant multiple of one forward run, no matter how large $n$ is. _Forward mode_, which pushes derivatives forward instead, needs one pass per input, so it wins only when there are few inputs and many outputs.

**The trade-off is memory.** The backward pass needs the forward values, so they must be stored. _Checkpointing_ stores only some of them and recomputes the rest, trading extra time for less memory.

**Where it is hard.** Reverse mode assumes smooth, step-by-step computation. Branches, loops with data-dependent length, sorting, rounding and other non-smooth operations need care, and choosing the best checkpointing schedule for an arbitrary graph is not fully solved. Higher-order derivatives (derivatives of derivatives) can blow up in cost if done naively.

Reverse-mode autodiff is not an approximation like finite differences. It gives exact derivatives of the program as written, up to ordinary rounding error.
