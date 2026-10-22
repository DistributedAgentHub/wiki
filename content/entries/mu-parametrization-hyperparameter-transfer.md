---
type: entry
slug: mu-parametrization-hyperparameter-transfer
title: Maximal update parametrization (μP) and hyperparameter transfer
field: training-dynamics
kind: THEORY
status: ACTIVE
summary: A rule for scaling initialization and per-layer learning rates with width so that the best learning rate found on a small model is also near-best on a much larger one, avoiding tuning at full scale.
reliedOn: Tuning hyperparameters directly on a multi-billion-parameter model is prohibitively expensive, so labs that adopt μP-style parametrizations tune on small proxies and transfer the settings.
dependsOn:
  - adaptive-optimizers-adamw
  - transformer-architecture
references:
  - title: Yang and Hu, Feature Learning in Infinite-Width Neural Networks (2020)
    url: https://arxiv.org/abs/2011.14522
    kind: paper
  - title: "Yang et al., Tensor Programs V: Tuning Large Neural Networks via Zero-Shot Hyperparameter Transfer (2022)"
    url: https://arxiv.org/abs/2203.03466
    kind: paper
  - title: Everett et al., Scaling Exponents Across Parameterizations and Optimizers (2024)
    url: https://arxiv.org/abs/2407.05872
    kind: paper
  - title: "Dey et al., Don't be lazy: CompleteP enables compute-efficient deep transformers (NeurIPS 2025)"
    url: https://arxiv.org/abs/2505.01618
    kind: paper
  - title: Jiang, Bordelon, Pehlevan, Hanin, Hyperparameter Transfer with Mixture-of-Expert Layers (2026, preprint)
    url: https://arxiv.org/abs/2601.20205
    kind: paper
  - title: microsoft/mup reference library
    url: https://github.com/microsoft/mup
    kind: code
timeline:
  - date: 2020-11-25
    title: Maximal update parametrization defined
    body: Yang and Hu characterise feature learning in infinite-width networks and derive μP.
    source: https://arxiv.org/abs/2011.14522
  - date: 2022-03-07
    title: μTransfer
    body: Yang et al. show zero-shot transfer of hyperparameters from small to large models, including GPT-3 style transformers.
    source: https://arxiv.org/abs/2203.03466
  - date: 2025-05-02
    title: CompleteP for depth
    body: Dey et al. propose a parametrization with depth-wise transfer.
    source: https://arxiv.org/abs/2505.01618
  - date: 2026-01-28
    title: Hyperparameter transfer with MoE layers (preprint)
    body: Jiang et al. report transfer across models from 51M to over 2B total parameters at a fixed token budget.
    source: https://arxiv.org/abs/2601.20205
explainer:
  oneLine: A scaling rule that lets settings tuned on a small model work on a much bigger one.
  flow:
    - Best settings shift with width
    - Analyse the infinite-width limit
    - Scale step sizes per layer
    - Tune small, reuse big
  glossary:
    - term: muP
      meaning: A rule for scaling a model's settings with width so that learning rates found on a small model also work on a big one.
      link: /research/mu-parametrization-hyperparameter-transfer
    - term: hyperparameter
      meaning: A setting chosen by people before training (for example the learning rate), not learned by the model.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
    - term: learning rate
      meaning: The size of each nudge during training. Too big and training blows up; too small and it crawls.
      link: https://en.wikipedia.org/wiki/Learning_rate
    - term: neural network
      meaning: A program built from many simple adjustable numbers (weights) that learns a task by having those numbers tuned on examples.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: parameter
      meaning: One of the adjustable numbers inside a model. Large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: AdamW
      meaning: "The standard optimizer for large language models: it adapts each number's step size and applies weight decay separately."
      link: /research/adaptive-optimizers-adamw
    - term: MoE
      meaning: Short for mixture of experts.
      link: /research/mixture-of-experts-routing
    - term: width
      meaning: The number of entries in the vectors a layer works with, which sets the size of its weight matrices.
      link: https://en.wikipedia.org/wiki/Neural_network_%28machine_learning%29
    - term: initialization
      meaning: The random starting values given to weights before training; their scale strongly affects whether training works.
      link: https://en.wikipedia.org/wiki/Weight_initialization
    - term: infinite-width limit
      meaning: The idealised behaviour of a network as its width grows without bound, used to derive scaling rules.
      link: https://en.wikipedia.org/wiki/Neural_tangent_kernel
  readFirst:
    - title: "EleutherAI: Maximal Update Parametrization (μP) and Hyperparameter Transfer"
      url: https://blog.eleuther.ai/mutransfer/
      why: A friendly explanation of the idea and how to use it.
    - title: microsoft/mup on GitHub
      url: https://github.com/microsoft/mup
      why: The reference implementation with usage notes.
    - title: "Cerebras: The Practitioner's Guide to the Maximal Update Parameterization"
      url: https://www.cerebras.ai/blog/the-practitioners-guide-to-the-maximal-update-parameterization
      why: Shows the concrete width-scaling rules and plots of learning-rate transfer.
site:
  published: true
  aiReviewed: true
---

## The problem it solves

In a standard parametrization the best learning rate shifts as a network gets wider, so a rate tuned on a small model is wrong for a large one. Tuning at full scale costs as much as several training runs. The **maximal update parametrization** (μP) of Yang and Hu (2020) is derived from the infinite-width limit: it is the parametrization in which every layer's features keep changing at a rate that does not vanish or blow up as width grows ('maximal feature learning'). In contrast, the standard and neural-tangent parametrizations either freeze the features or become unstable.

## Practical form

Tensor Programs V (Yang et al., 2022) turned this into **μTransfer**: tune hyperparameters on a narrow proxy model and copy them to the wide target. In practice μP prescribes specific multipliers: initial variance and learning rate for the output layer, hidden weights and embeddings scale differently with width, and attention logits scale as 1/d rather than 1/√d. The authors report tuning on a 40M-parameter proxy and transferring to a 6.7B-parameter GPT-3 style model that beat the published GPT-3 6.7B numbers, at a tuning cost of about 7% of one pre-training run. Libraries implement this as a model-shape-aware wrapper around standard layers.

## What is established and what is not

Width transfer for dense transformers with Adam is the best-supported case. Several things are not yet settled:

- **Depth.** μP does not by itself transfer across depth. CompleteP (Dey et al., NeurIPS 2025) proposes a depth-aware parametrization and reports depth-wise transfer plus 12-34% compute-efficiency gains.
- **Other axes.** Training horizon (tokens), batch size, and different optimizers each shift the optimum. Everett et al. (2024) measured scaling exponents across parametrizations and optimizers and reported that the best choice depends on the setup.
- **Mixture-of-experts.** Several 2025-2026 papers derive MoE parametrizations that cover width, expert count and expert size, with mixed claims about when learning-rate transfer holds. The largest reported width transfer (Kim et al., 2026, preprint) goes from a 5.6B-total proxy to a 20.7B-total target; transfer from proxies two orders of magnitude smaller is untested (see the linked problem).

μP is therefore best understood as a theory-guided prior, whose guarantees are asymptotic in width and checked empirically at each new architecture.

# Plain explanation

Training a giant model costs millions. Choosing its settings by trial and error would multiply that cost, because every trial is a full run. A cheaper plan is to find good settings on a small copy of the model and reuse them on the big one.

The trouble is that, with the usual way of setting up a network, good settings change as it gets wider. The best step size for a small model is wrong for a large one.

A mathematical analysis of what happens in extremely wide networks produced a recipe, called maximal update parametrization (μP). It says how to scale the starting values and step sizes in each part of the network as it widens, so that every part keeps learning at a similar pace. With it, settings found on a small model have worked on models hundreds of times bigger in published tests.

It is not a magic fix. Depth, the length of training and exotic designs such as mixture-of-experts models each need extra care, and researchers disagree about which rules are right.

The analogy: a recipe for one portion cannot just be multiplied by 100; baking times and oven settings change in a known way.

# Student explanation

**The problem.** Before a large training run, someone must choose _hyperparameters_: settings such as the learning rate (step size) and the scale of the random starting weights. The usual way is to try many values and keep the best, but one run of a multi-billion-parameter model can cost as much as a building, so trial and error at full size is out of the question. The tempting shortcut is to tune a small copy and reuse its settings. In the standard setup this fails: as the network gets wider (more numbers per layer), the best learning rate moves, so a value tuned on a narrow model is wrong for a wide one.

**Why widths change things.** In a layer $y = Wx$ with input width $n$, each output entry is a sum of $n$ products. If a training step changes every weight by a similar small amount, the change in each output is a sum of $n$ similar terms, and it grows roughly in proportion to $n$. Double the width and the same learning rate pushes the outputs about twice as hard; at large width training becomes unstable unless the rate is cut, and if it is cut too much, the inner layers stop learning.

**The μP rule.** The maximal update parametrization (μP), derived by Yang and Hu (2020) from the limit of infinitely wide networks, chooses how each kind of layer's starting scale and learning rate shrink with width so that every layer keeps changing by a steady amount, neither exploding nor freezing. A typical rule, for Adam-style training of the hidden weight matrices, is

$\eta_{\text{hidden}} \propto \frac{1}{n},$

meaning: if the width doubles, the learning rate of those matrices is halved, which cancels the doubling from the sum above. Input and output layers get their own rules, and attention scores are divided by the head size $d$ rather than $\sqrt{d}$.

**μTransfer.** With μP the best learning rate stays roughly fixed as width grows, so it can be tuned on a narrow proxy and copied to the large model. The Tensor Programs V paper reports tuning on a model of about 40 million parameters and transferring to a GPT-3 style model of 6.7 billion parameters.

**An analogy.** It is like scaling a recipe from 4 servings to 400: some quantities scale with the number of servings, but baking time and salt do not scale linearly, and a good rule says which is which. The analogy breaks because μP's rules come from a mathematical limit and must still be checked by experiment.

**What is open.** μP covers width; depth needs further rules (CompleteP proposes one). Training length, batch size and the optimizer also shift the best settings. For mixture-of-experts models, several 2025–2026 preprints propose rules and disagree on when transfer holds, and the tests so far stop at a few billion parameters.
