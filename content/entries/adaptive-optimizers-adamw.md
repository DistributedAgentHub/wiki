---
type: entry
slug: adaptive-optimizers-adamw
title: Adam, AdamW and the optimizer zoo
field: training-dynamics
kind: ALGORITHM
status: ACTIVE
summary: Adam-style adaptive optimizers rescale each parameter's step by running gradient statistics and train nearly every large model; matrix-aware successors (Shampoo, Muon) and schedule-free variants are the contenders.
reliedOn: AdamW is the default optimizer for large language models, so its memory footprint (two extra states per parameter), tuning needs and stability determine the cost and recipe of almost every pre-training run.
dependsOn:
  - reverse-mode-autodiff
references:
  - title: "Kingma and Ba, Adam: A Method for Stochastic Optimization (2014)"
    url: https://arxiv.org/abs/1412.6980
    kind: paper
  - title: Loshchilov and Hutter, Decoupled Weight Decay Regularization (2017)
    url: https://arxiv.org/abs/1711.05101
    kind: paper
  - title: "Gupta, Koren, Singer, Shampoo: Preconditioned Stochastic Tensor Optimization (2018)"
    url: https://arxiv.org/abs/1802.09568
    kind: paper
  - title: Shi et al., A Distributed Data-Parallel PyTorch Implementation of the Distributed Shampoo Optimizer (2023)
    url: https://arxiv.org/abs/2309.06497
    kind: paper
  - title: Chen et al., Symbolic Discovery of Optimization Algorithms (Lion, 2023)
    url: https://arxiv.org/abs/2302.06675
    kind: paper
  - title: "Jordan et al., Muon: an optimizer for hidden layers in neural networks"
    url: https://kellerjordan.github.io/posts/muon/
    kind: article
  - title: Defazio et al., The Road Less Scheduled (2024)
    url: https://arxiv.org/abs/2405.15682
    kind: paper
  - title: Dahl et al., Benchmarking Neural Network Training Algorithms (AlgoPerf, 2023)
    url: https://arxiv.org/abs/2306.07179
    kind: paper
  - title: "Kasimbeg et al., Accelerating Neural Network Training: An Analysis of the AlgoPerf Competition (ICLR 2025)"
    url: https://arxiv.org/abs/2502.15015
    kind: paper
  - title: Liu et al., Muon is Scalable for LLM Training (2025, preprint)
    url: https://arxiv.org/abs/2502.16982
    kind: paper
  - title: Wen et al., Fantastic Pretraining Optimizers and Where to Find Them (2025, preprint)
    url: https://arxiv.org/abs/2509.02046
    kind: paper
timeline:
  - date: 2014-12-22
    title: Adam
    body: Kingma and Ba introduce adaptive moment estimation.
    source: https://arxiv.org/abs/1412.6980
  - date: 2017-11-14
    title: AdamW
    body: Loshchilov and Hutter decouple weight decay from the adaptive update.
    source: https://arxiv.org/abs/1711.05101
  - date: 2023-06-12
    title: AlgoPerf benchmark
    body: Dahl et al. propose a time-to-result benchmark for training algorithms with external-tuning and self-tuning rulesets.
    source: https://arxiv.org/abs/2306.07179
  - date: 2025-02-20
    title: AlgoPerf competition results
    body: Distributed Shampoo won the external-tuning ruleset and a Schedule-Free AdamW submission won the self-tuning ruleset among 18 submissions from 10 teams.
    source: https://arxiv.org/abs/2502.15015
  - date: 2025-09-02
    title: Optimizer speedups shrink with scale (preprint)
    body: Wen et al. report matrix-based optimizers' advantage over tuned AdamW falls from about 1.4x at 0.1B to about 1.1x at 1.2B parameters.
    source: https://arxiv.org/abs/2509.02046
explainer:
  oneLine: The rule that decides how a model's numbers change after each mistake, and the contenders to replace the standard one.
  flow:
    - Each step needs a direction and size
    - Adam scales steps per number
    - AdamW adds clean weight decay
    - "New optimizers: gains shrink with scale"
  glossary:
    - term: optimizer
      meaning: The rule that turns gradients into actual changes of the model's numbers, such as Adam.
      link: /research/adaptive-optimizers-adamw
    - term: AdamW
      meaning: "The standard optimizer for large language models: it adapts each number's step size and applies weight decay separately."
      link: /research/adaptive-optimizers-adamw
    - term: gradient
      meaning: A list saying, for each adjustable number, which way and how strongly to change it to reduce the error.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: learning rate
      meaning: The size of each nudge during training. Too big and training blows up; too small and it crawls.
      link: https://en.wikipedia.org/wiki/Learning_rate
    - term: weight decay
      meaning: A gentle pull of every weight toward zero during training, to prevent overly large weights.
      link: https://en.wikipedia.org/wiki/Regularization_(mathematics)
    - term: Muon
      meaning: An optimizer that adjusts each weight matrix as a whole, instead of number by number.
      link: https://kellerjordan.github.io/posts/muon/
    - term: AlgoPerf
      meaning: A benchmark that scores training algorithms by how fast they reach target accuracy on fixed hardware.
      link: https://github.com/mlcommons/algorithmic-efficiency
    - term: hyperparameter
      meaning: A setting chosen by people before training (for example the learning rate), not learned by the model.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
    - term: exponential moving average
      meaning: A running average where each update mixes in the new value with a small weight, so older values fade out geometrically.
      link: https://en.wikipedia.org/wiki/Exponential_smoothing
    - term: gradient descent
      meaning: Repeatedly stepping each weight against the derivative of the loss to make the loss smaller.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: orthogonalization
      meaning: Adjusting a matrix so its columns are perpendicular and equal in length, removing any dominant direction.
      link: https://en.wikipedia.org/wiki/Orthogonality
  readFirst:
    - title: "Sebastian Ruder: An overview of gradient descent optimization algorithms"
      url: https://ruder.io/optimizing-gradient-descent/
      why: Clear tour of the optimizers that came before AdamW.
    - title: "Wikipedia: Stochastic gradient descent"
      url: https://en.wikipedia.org/wiki/Stochastic_gradient_descent
      why: The base method that Adam improves on.
    - title: "3Blue1Brown: Gradient descent, how neural networks learn"
      url: https://www.youtube.com/watch?v=IHZwWFHWa-w
      why: A visual explanation of the downhill-stepping idea every optimizer builds on.
    - title: "Keller Jordan: Muon, an optimizer for hidden layers"
      url: https://kellerjordan.github.io/posts/muon/
      why: The original write-up of Muon, readable with linear algebra.
site:
  published: true
  aiReviewed: true
---

## Adam and AdamW

Stochastic gradient descent moves every parameter by the same learning rate times its gradient. **Adam** (Kingma and Ba, 2014) keeps exponential moving averages of the gradient (first moment) and of its square (second moment) and divides the first by the square root of the second, so each parameter gets its own effective step size. **AdamW** (Loshchilov and Hutter, 2017) decouples weight decay from the gradient-based update; with Adam's adaptive scaling, L2 regularization and weight decay are not equivalent, and decoupling them restored the intended behaviour and made the decay coefficient easier to tune. AdamW with a warm-up and a decaying schedule is the default recipe for transformer training. Its cost is two optimizer states per parameter, usually in float32.

## What the successors change

- **Preconditioned methods.** Shampoo (Gupta, Koren and Singer, 2018) uses per-dimension matrix preconditioners for tensors, exploiting the matrix structure of weights; a distributed PyTorch implementation was published by Shi et al. (2023). **Muon** (Jordan et al., 2024) orthogonalizes the momentum update of each weight matrix with a few Newton-Schulz iterations and applies it to hidden 2-D weights only, leaving embeddings and norm gains to AdamW; Liu et al. (2025, preprint) report about 2x compute efficiency over AdamW in their scaling experiments.
- **Sign and memory-light methods.** Lion (Chen et al., 2023) was found by program search and uses only the sign of a momentum average, needing one state per parameter.
- **Schedule-free training.** Defazio et al. (2024) replace the learning-rate decay schedule with iterate averaging so that no stopping time must be fixed in advance.

## How to compare them

Optimizer papers have a record of reporting gains against under-tuned baselines. **AlgoPerf** (Dahl et al., 2023) fixes workloads, hardware and a time-to-target metric and has two rulesets, external tuning (a stated hyperparameter search space) and self-tuning (no tuning allowed). In the first competition, a Distributed Shampoo submission won the external-tuning ruleset and a Schedule-Free AdamW submission won the self-tuning one (Kasimbeg et al., 2025). A large pre-training study (Wen et al., 2025, preprint) found that the speedup of matrix-based optimizers over a well-tuned AdamW shrinks from about 1.4x at 0.1B parameters to about 1.1x at 1.2B parameters.

## Where it connects

The optimizer determines how learning rate should scale with width (see the μP entry) and interacts with normalization layers, because scale-invariant weights followed by a norm layer have an effective learning rate that depends on weight norm and weight decay.

# Plain explanation

Training a model is like walking down a foggy hill to find the lowest point. After each step you feel which way is downhill, and you decide how far to step. The optimizer is the rule for that decision.

The simplest rule takes the same-sized step for every direction. The popular rule, Adam, keeps a memory of how steep and how bumpy each direction has been, and takes smaller steps where it is bumpy. A refined version, AdamW, also gently pulls all numbers toward zero so none grow too big. Nearly all large language models are trained this way.

People keep proposing faster rules. Some treat a whole table of numbers at once instead of one at a time. The surprise from careful tests is that claims of big speed-ups often shrink when the standard rule is tuned as carefully as the new one: at around a billion parameters, one study measured a gain closer to 10% than to 40%.

The fog analogy breaks in that a real model has billions of directions, not two.

# Student explanation

**What an optimizer does.** Training a neural network means finding weights that make a loss (an error score) small. Gradient descent does this by computing the derivative of the loss with respect to every weight and stepping each weight a little against it: $w \leftarrow w - \eta\, g$, where $g$ is the derivative (the _gradient_ entry for that weight) and the _learning rate_ $\eta$ sets the step size. The derivative is estimated from a small random batch of examples, so it is noisy.

**What goes wrong.** One $\eta$ for billions of weights is a poor fit. Some weights get large, consistent gradients and need small steps; others get tiny or rare gradients and barely move. Think of rolling a ball down a long narrow valley: a step large enough to make progress along the gentle floor makes the ball bounce between the steep walls.

**Adam.** Adam keeps two running averages for every weight. An exponential moving average updates a running value as $m \leftarrow \beta m + (1-\beta) g$ with $\beta$ near 1, so recent values count most and old ones fade. Adam keeps $m$, the average of the gradient (its direction, smoothed over steps), and $v$, the average of the squared gradient (its typical size). The update is roughly

$w \leftarrow w - \eta\,\frac{m}{\sqrt{v} + \epsilon}.$

Dividing by $\sqrt{v}$ makes the step about the same size for every weight whatever the scale of its gradient, while noisy gradients that keep changing sign average out in $m$; $\epsilon$ is a tiny number that prevents division by zero. In the valley picture, the steep direction is damped and the gentle direction gets a full step.

**AdamW.** Weight decay shrinks every weight slightly each step to stop weights growing without need. In plain Adam, adding that shrinkage to the gradient means it also gets divided by $\sqrt{v}$, which weakens it unevenly. AdamW applies the decay separately, $w \leftarrow w - \eta\lambda w$, so the decay rate $\lambda$ means what it says. AdamW with a warm-up and a decaying learning rate is the default for language models; its cost is two extra numbers ($m$ and $v$) stored per weight.

**Successors.** Shampoo and Muon treat each weight matrix as a matrix rather than a list of numbers; Muon makes the update's directions balanced (orthogonalized) using a few cheap matrix iterations. Lion keeps only the sign of a momentum term and one stored number per weight. Schedule-free methods remove the need to choose in advance when the learning rate decays.

**Why the comparison is hard.** New optimizers are often compared against a poorly tuned AdamW. Benchmarks such as AlgoPerf fix the tasks, hardware and tuning budget; in its first competition Distributed Shampoo won with tuning and Schedule-Free AdamW won without it. A large careful study reported that the speed-up of matrix-based optimizers over well-tuned AdamW shrinks from about 1.4 times at 0.1 billion parameters to about 1.1 times at 1.2 billion, so whether any optimizer clearly beats AdamW at large scale is open.
