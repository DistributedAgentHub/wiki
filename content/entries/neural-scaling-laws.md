---
type: entry
slug: neural-scaling-laws
title: Neural scaling laws and compute-optimal training
field: scaling-laws
kind: THEORY
status: ACTIVE
summary: Empirical power laws relating loss to model size, data and compute, used to choose how big a model to train and on how many tokens before spending the budget.
reliedOn: Labs set model size and token count for multi-million-dollar training runs from fitted scaling laws, so errors in the fits translate directly into wasted compute.
dependsOn:
  - adaptive-optimizers-adamw
  - transformer-architecture
references:
  - title: Kaplan et al., Scaling Laws for Neural Language Models (2020)
    url: https://arxiv.org/abs/2001.08361
    kind: paper
  - title: Hoffmann et al., Training Compute-Optimal Large Language Models (Chinchilla, 2022)
    url: https://arxiv.org/abs/2203.15556
    kind: paper
  - title: "Besiroglu et al., Chinchilla Scaling: A replication attempt (2024, preprint)"
    url: https://arxiv.org/abs/2404.10102
    kind: paper
  - title: Pearce and Song, Reconciling Kaplan and Chinchilla Scaling Laws (TMLR 2024)
    url: https://arxiv.org/abs/2406.12907
    kind: paper
  - title: Muennighoff et al., Scaling Data-Constrained Language Models (2023)
    url: https://arxiv.org/abs/2305.16264
    kind: paper
  - title: Clark et al., Unified Scaling Laws for Routed Language Models (2022)
    url: https://arxiv.org/abs/2202.01169
    kind: paper
  - title: Krajewski et al., Scaling Laws for Fine-Grained Mixture of Experts (2024)
    url: https://arxiv.org/abs/2402.07871
    kind: paper
timeline:
  - date: 2020-01-23
    title: Power-law scaling of language-model loss
    body: Kaplan et al. report smooth power laws in model size, data and compute.
    source: https://arxiv.org/abs/2001.08361
  - date: 2022-03-29
    title: Compute-optimal training (Chinchilla)
    body: Hoffmann et al. conclude that model size and tokens should scale together and train a 70B model on 1.4T tokens.
    source: https://arxiv.org/abs/2203.15556
  - date: 2024-04-15
    title: Chinchilla replication attempt (preprint)
    body: Besiroglu et al. report the published parametric fit is inconsistent with the other approaches and its intervals implausibly narrow.
    source: https://arxiv.org/abs/2404.10102
  - date: 2024-06-12
    title: Kaplan versus Chinchilla reconciled
    body: Pearce and Song attribute the gap mainly to parameter counting and small scale.
    source: https://arxiv.org/abs/2406.12907
explainer:
  oneLine: Smooth rules predicting how a model's error falls as it gets bigger and sees more text.
  flow:
    - Train many small models
    - Fit a power law to the losses
    - Extrapolate to the big run
    - Choose size and data together
  glossary:
    - term: scaling law
      meaning: A smooth rule that predicts how a model's error falls as model size, data and computing grow.
      link: /research/neural-scaling-laws
    - term: Chinchilla
      meaning: A 2022 study and model showing that model size and training text should grow together, at roughly 20 tokens per parameter.
      link: https://en.wikipedia.org/wiki/Chinchilla_(language_model)
    - term: loss
      meaning: A single number measuring how wrong the model is on the training or test text. Lower is better.
      link: https://en.wikipedia.org/wiki/Loss_function
    - term: token
      meaning: A chunk of text, often a word or part of a word, that a language model reads as one unit.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: parameter
      meaning: One of the adjustable numbers inside a model. Large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: FLOP
      meaning: One basic arithmetic operation; the total FLOPs used measure how much computing a training run needed.
      link: https://en.wikipedia.org/wiki/FLOPS
    - term: large language model
      meaning: A very large neural network trained on text to predict the next token, as in modern chatbots.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: power law
      meaning: A relation y = a·x^(−α); on log-log axes it is a straight line with slope −α.
      link: https://en.wikipedia.org/wiki/Power_law
    - term: log-log plot
      meaning: A graph with logarithmic scales on both axes, on which power laws appear as straight lines.
      link: https://en.wikipedia.org/wiki/Log%E2%80%93log_plot
    - term: cross-entropy
      meaning: The average of −ln p over the true answers, where p is the probability the model gave them; lower means less surprised.
      link: https://en.wikipedia.org/wiki/Cross-entropy
  readFirst:
    - title: "Wikipedia: Neural scaling law"
      url: https://en.wikipedia.org/wiki/Neural_scaling_law
      why: A short overview with the main results.
    - title: How to Scale Your Model
      url: https://jax-ml.github.io/scaling-book/
      why: A practical textbook on the compute side of scaling.
    - title: "Google DeepMind: An empirical analysis of compute-optimal large language model training"
      url: https://deepmind.google/discover/blog/an-empirical-analysis-of-compute-optimal-large-language-model-training/
      why: The Chinchilla authors' short summary of the result.
    - title: "Epoch AI: Chinchilla scaling, a replication attempt"
      url: https://epoch.ai/blog/chinchilla-scaling-a-replication-attempt
      why: A readable account of how the published fit was checked and why it matters.
site:
  published: true
  aiReviewed: true
---

## What the laws say

Kaplan et al. (2020) found that the cross-entropy loss of transformer language models falls as a smooth power law in non-embedding parameters N, dataset size D and training compute C, over many orders of magnitude, when the other factors are not bottlenecks. Hoffmann et al. (2022, 'Chinchilla') refitted the relationship with a parametric form in which loss is an irreducible term plus a power law in N plus a power law in D, and concluded that parameters and tokens should be scaled in roughly equal proportion for a fixed compute budget. Their 70B-parameter model trained on 1.4T tokens (about 20 tokens per parameter) outperformed a much larger model trained on fewer tokens. Chinchilla gave three estimation approaches (minimum envelope over training curves, IsoFLOP profiles, and a parametric fit); they are meant to agree.

## Refinements and disputes

- **Reconciling Kaplan and Chinchilla.** Pearce and Song (2024) attribute most of the discrepancy to Kaplan counting non-embedding parameters and working at small scale.
- **Replication.** Besiroglu et al. (2024, preprint) reconstructed the parametric fit from data extracted from the Chinchilla figures and report that the published fit was inconsistent with the other two approaches, and that its confidence intervals were implausibly narrow for the number of experiments run; their own refit agreed with approaches 1 and 2.
- **Repeated data.** Muennighoff et al. (2023) studied data-constrained regimes: repeating data for up to about four epochs was reported to cost little, with value decaying after that.
- **Inference cost.** Sardana and Frankle (2023, preprint) argued that if a model will serve many requests, training a smaller model for longer than compute-optimal is cheaper in total.
- **Mixture-of-experts.** Clark et al. (2022) and Krajewski et al. (2024) extend the laws to routed and fine-grained MoE models.

## Limits

The laws predict pre-training loss, not capabilities on specific tasks; relating the two is a separate, active problem (see the evaluation entry). Fits also depend on learning-rate schedule, tuning and architecture, so exponents measured in one recipe need not carry to another. A theory of why the exponents take their values is partly developed for linear and random-feature models, and is tracked in the related problem on power-law spectra.

# Plain explanation

When researchers train language models of many sizes, a pattern appears: make the model ten times bigger, or give it ten times more text, and the error falls by a predictable amount. Plotted on the right kind of graph, the points fall almost on a straight line. These predictable lines are called scaling laws.

This matters because training a top model costs a fortune and you cannot afford to guess wrong. Instead you train many small models, fit the line, and use it to choose how big the final model should be and how much text to give it.

A famous 2022 study found that the best choice is to grow model size and text together, and that earlier giant models had been given too little text for their size. Later work asked how certain such conclusions are, and found that fits can be shaky if the data are few or counted in different ways.

What the lines do not tell you is which skills a model will have. They predict error on the next word, not whether it can do maths.

The analogy: these are like fuel-economy curves for engines, good for planning a trip, silent about where you should go.

# Student explanation

**What they are for.** A large language-model training run costs millions of dollars. Before spending that, a lab must decide how big the model should be (parameters, $N$) and how much text to train it on (tokens, $D$). Scaling laws are fitted formulas that predict the final loss from $N$ and $D$, using a series of much cheaper small runs.

**The loss.** The model is trained to predict the next token. Its loss, cross-entropy, measures how surprised it is on average by the true next token: if it gave the right token probability $p$, the surprise is $-\ln p$. Lower loss means better prediction.

**Power laws.** Kaplan et al. (2020) found that loss falls as a power law in $N$, $D$ and compute $C$: $L \propto N^{-\alpha}$ for some small exponent $\alpha$. Taking logarithms gives $\ln L = -\alpha \ln N + \text{const}$, a straight line on log-log axes, which is how such laws are spotted and fitted. A useful consequence: each tenfold increase in size cuts the loss by the same fraction, so returns diminish but never stop abruptly.

**Compute-optimal training.** Hoffmann et al. (2022, "Chinchilla") fitted

$L(N, D) = E + \frac{A}{N^{\alpha}} + \frac{B}{D^{\beta}},$

where $E$ is a floor no model can beat (the randomness of text itself), the second term is the penalty for a model that is too small, and the third the penalty for too little data. Training compute is roughly $C \approx 6ND$ floating-point operations. Substituting $D = C/6N$ turns minimising $L$ at fixed $C$ into a one-variable calculus problem (set the derivative with respect to $N$ to zero), and the answer was that $N$ and $D$ should grow in about equal proportion. Their 70-billion-parameter model trained on 1.4 trillion tokens, about 20 tokens per parameter, beat a much larger model trained on less data.

**An analogy.** It is like dividing a fixed budget between a bigger engine and more fuel: a huge engine with little fuel goes nowhere, and so does a small engine with a full tank. The analogy breaks because the "best split" here is measured, not derived from physics.

**Disputes and limits.** Chinchilla estimated the split three ways that should agree. A 2024 replication attempt rebuilt the data from the paper's figures and reported that the published formula fit disagreed with the other two methods and that its error bars were implausibly narrow; their refit agreed with the other methods. Kaplan's and Chinchilla's different answers have been traced mainly to how parameters were counted and to small scale. Repeating data, planning for heavy use after training (which favours smaller models trained longer) and mixture-of-experts models all shift the answer. Scaling laws predict loss, not specific skills, and why the exponents take their values is only partly explained.
