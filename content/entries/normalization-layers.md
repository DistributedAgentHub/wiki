---
type: entry
slug: normalization-layers
title: Normalization layers (BatchNorm, LayerNorm, RMSNorm)
field: ml-architectures
kind: ALGORITHM
status: MATURE
summary: Layers that rescale activations to a fixed statistic so deep networks train stably; LayerNorm and RMSNorm are the default in transformers, and where they sit (pre- or post-residual) decides trainability.
reliedOn: Every mainstream transformer language model uses LayerNorm or RMSNorm in each block, and the choice of placement and scale determines which learning rates and depths train at all.
dependsOn:
  - reverse-mode-autodiff
  - transformer-architecture
references:
  - title: Ioffe and Szegedy, Batch Normalization (2015)
    url: https://arxiv.org/abs/1502.03167
    kind: paper
  - title: Ba, Kiros and Hinton, Layer Normalization (2016)
    url: https://arxiv.org/abs/1607.06450
    kind: paper
  - title: Zhang and Sennrich, Root Mean Square Layer Normalization (2019)
    url: https://arxiv.org/abs/1910.07467
    kind: paper
  - title: Xiong et al., On Layer Normalization in the Transformer Architecture (ICML 2020)
    url: https://arxiv.org/abs/2002.04745
    kind: paper
  - title: Zhu et al., Transformers without Normalization (CVPR 2025)
    url: https://arxiv.org/abs/2503.10622
    kind: paper
timeline:
  - date: 2015-02-11
    title: Batch normalization introduced
    body: Ioffe and Szegedy normalize layer inputs over the mini-batch and report much faster training of image classifiers.
    source: https://arxiv.org/abs/1502.03167
  - date: 2016-07-21
    title: Layer normalization
    body: Ba, Kiros and Hinton normalize over features of one example, removing the batch dependence.
    source: https://arxiv.org/abs/1607.06450
  - date: 2019-10-16
    title: RMSNorm
    body: Zhang and Sennrich propose dropping mean-centering to reduce cost while keeping LayerNorm's benefits.
    source: https://arxiv.org/abs/1910.07467
  - date: 2020-02-12
    title: Pre-LN versus Post-LN analysed
    body: Xiong et al. show Pre-LN transformers have well-behaved gradients at initialization and can drop the warm-up stage in their experiments.
    source: https://arxiv.org/abs/2002.04745
  - date: 2025-03-13
    title: Normalization-free transformers (Dynamic Tanh)
    body: Zhu et al. report that an element-wise tanh with a learnable scale can replace normalization layers in transformers across vision and language settings.
    source: https://arxiv.org/abs/2503.10622
explainer:
  oneLine: Steps inside a neural network that keep its numbers at a steady size so it can learn.
  flow:
    - Activations grow or shrink with depth
    - Rescale to a standard size
    - Larger steps, deeper nets train
    - Placement and simpler replacements are debated
  glossary:
    - term: neural network
      meaning: A program built from many simple adjustable numbers (weights) that learns a task by having those numbers tuned on examples.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: normalization
      meaning: A step inside a network that rescales numbers to a standard size so training stays stable.
      link: /research/normalization-layers
    - term: residual connection
      meaning: A shortcut that adds a layer's input to its output, so information and gradients can skip layers.
      link: https://en.wikipedia.org/wiki/Residual_neural_network
    - term: learning rate
      meaning: The size of each nudge during training. Too big and training blows up; too small and it crawls.
      link: https://en.wikipedia.org/wiki/Learning_rate
    - term: gradient
      meaning: A list saying, for each adjustable number, which way and how strongly to change it to reduce the error.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: transformer
      meaning: The neural-network design behind modern chatbots, in which every word looks at every other word through attention.
      link: /research/transformer-architecture
    - term: large language model
      meaning: A very large neural network trained on text to predict the next token, as in modern chatbots.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: standard deviation
      meaning: "A measure of spread: the square root of the average squared distance of the values from their mean."
      link: https://en.wikipedia.org/wiki/Standard_deviation
    - term: gradient descent
      meaning: Training by repeatedly nudging each weight against the derivative of the loss, like walking downhill in small steps.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: activation function
      meaning: The simple nonlinear function f applied entry by entry inside a layer, such as tanh or max(0, x).
      link: https://en.wikipedia.org/wiki/Activation_function
    - term: root mean square
      meaning: The square root of the average of the squared values; the size measure RMSNorm divides by.
      link: https://en.wikipedia.org/wiki/Root_mean_square
  readFirst:
    - title: 3Blue1Brown, Large language models explained
      url: https://www.youtube.com/watch?v=wjZofJX0v4M
      why: A visual walk through how a transformer language model works.
    - title: "Wikipedia: Batch normalization"
      url: https://en.wikipedia.org/wiki/Batch_normalization
      why: Short overview of the original idea and its limits.
    - title: "Wikipedia: Layer normalization"
      url: https://en.wikipedia.org/wiki/Layer_normalization
      why: The version used in transformers.
    - title: "Dive into Deep Learning: Batch Normalization"
      url: https://d2l.ai/chapter_convolutional-modern/batch-norm.html
      why: A textbook chapter with equations and runnable code, written for students.
site:
  published: true
  aiReviewed: true
---

## What a normalization layer does

A normalization layer takes the activations of a layer and rescales them using statistics computed from the activations themselves, then applies a learned scale (and sometimes shift). The families differ only in which numbers the statistics are computed over.

- **BatchNorm** (Ioffe and Szegedy, 2015) normalizes each feature over the examples in a mini-batch. It made very deep convolutional networks trainable at high learning rates. It needs batch statistics, so it behaves differently at training and inference time and works poorly with small or variable batches and with variable-length sequences.
- **LayerNorm** (Ba, Kiros and Hinton, 2016) normalizes over the features of a single example (subtracting the mean and dividing by the standard deviation). It has no batch dependence, which is why it was adopted for recurrent networks and then for the transformer.
- **RMSNorm** (Zhang and Sennrich, 2019) drops the mean subtraction and divides only by the root mean square of the features. The authors report it matches LayerNorm quality with lower cost; it is the normalization used in most recent open large language models.

## Placement matters

The original transformer applied normalization after the residual addition (Post-LN). Xiong et al. (2020) analysed Post-LN at initialization and found that gradients near the output layer are large, which makes a learning-rate warm-up stage necessary; moving normalization inside the residual branch (Pre-LN) gives well-behaved gradients and lets training proceed without warm-up in their experiments. Pre-LN is now the common choice, although it has its own known drawback: the residual stream norm grows with depth, so deeper layers contribute relatively less. Variants that add extra norms (for example on queries and keys, or after the sub-layer) are used to stabilise very large runs.

## Why it is still unsettled

What normalization does is itself debated: reduction of internal covariate shift, smoothing of the loss landscape, and control of effective learning rate have each been proposed. A 2025 paper (Zhu et al., CVPR 2025) proposes Dynamic Tanh (DyT), an element-wise function that replaces normalization layers and is reported to match normalized transformers across vision, diffusion and language settings, including LLaMA models from 7B to 70B parameters trained on 200B tokens (with the initial tanh scale tuned per model size). Whether this holds at the token budgets of current language models (trillions of tokens) has not been tested in the open literature (see the linked problem).

## Where it sits in the tree

Normalization interacts with the optimizer (adaptive methods and weight decay change the effective learning rate of scale-invariant weights) and with parametrization (hyperparameter transfer rules must say how a norm layer's gain scales with width).

# Plain explanation

A big neural network is a long chain of steps. If numbers grow a little at each step, they can become enormous by the end, or shrink to almost nothing. Then learning goes wrong: the model gets confused signals about what to change.

Normalization is a repair step placed between the others. It looks at the numbers passing through and rescales them to a standard size, a little like a volume knob that keeps every song at the same loudness. With that in place, the network can use larger learning steps and be deeper without breaking.

There are a few versions. Some look at a whole group of examples at once. The ones used in chatbots look at one example at a time, which is simpler when text comes in different lengths. Where the step goes also matters: putting it in a slightly different spot can decide whether a very deep network learns at all.

The analogy breaks in one place: scientists still argue about why it works so well. Some say it steadies the signals, some say it smooths the problem the model is solving, and a recent paper suggests a simpler function might do the same job.

# Student explanation

**What goes wrong without it.** A neural network is a stack of layers, each computing $y = f(Wx + b)$: multiply the input vector $x$ by a weight matrix $W$, add a bias vector $b$, and apply a simple nonlinear function $f$ to each entry. Training adjusts $W$ and $b$ by gradient descent: compute the derivative of an error measure (the _loss_) with respect to each weight, using the chain rule through every layer, and step each weight a little downhill. Stack fifty such layers and the numbers flowing through can drift: if each layer scales its input by 1.1, after 50 layers the values are about $1.1^{50} \approx 117$ times larger; at 0.9 they shrink to about 0.5% of the start. Chain-rule derivatives grow or shrink the same way, so training either blows up or stalls.

**The fix.** A normalization layer rescales a vector of activations so its entries have a fixed size. Two statistics from first-year-level arithmetic do the work: the _mean_ $\mu$ (the average of the entries) and the _standard deviation_ $\sigma$ (the typical distance of an entry from the mean, the square root of the average squared distance). LayerNorm, used in transformers, computes for one token's vector $x$ with $d$ entries:

$\hat{x}_i = \gamma_i \frac{x_i - \mu}{\sigma} + \beta_i$

In words: shift the vector so its average is zero, divide by its spread so the spread is one, then let the network re-scale ($\gamma$) and re-shift ($\beta$) with learned numbers. RMSNorm skips the mean subtraction and divides by the root mean square $\sqrt{\tfrac{1}{d}\sum_i x_i^2}$ instead, which is slightly cheaper; most recent open language models use it. BatchNorm, the earlier version for image networks, computes the statistics for each feature across the examples in a batch instead of across one example's features, which is why it behaves differently in training and in use.

**An analogy.** It is like the automatic gain control on a microphone: whatever the input volume, the output level is kept in a fixed range so the next stage is not overloaded or starved. The analogy breaks because the learned $\gamma$ and $\beta$ can deliberately undo part of the rescaling when the network benefits from it.

**Placement matters.** A transformer block adds its output back onto its input (a _residual connection_). Putting the norm after that addition (Post-LN, the original design) gives large gradients near the output at the start of training and needs a slow learning-rate warm-up; putting it inside the branch (Pre-LN) trains more smoothly and is now the common choice, though the running sum then grows with depth.

**What is not known.** Why normalization helps is still argued: it has been explained as reducing shifting input statistics, smoothing the loss surface, and controlling the effective step size. A 2025 proposal, Dynamic Tanh, replaces the layer with an element-wise $\tanh(\alpha x)$ and reports matching results; whether that holds for the largest language models is an open test.
