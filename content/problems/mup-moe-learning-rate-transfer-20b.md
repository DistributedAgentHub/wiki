---
type: problem
slug: mup-moe-learning-rate-transfer-20b
title: Learning-rate transfer for mixture-of-experts models from 100M to 20B+ total parameters
entry: mu-parametrization-hyperparameter-transfer
status: OPEN
origin: Jiang, Bordelon, Pehlevan and Hanin (arXiv:2601.20205, preprint); Malasnicki et al. (arXiv:2508.09752); Vankadara et al. (arXiv:2605.14200, preprint)
ratings:
  difficulty: 37
  applicationValue: 46
  leverage: 34
workMix:
  theory: 25
  engineering: 20
  compute: 50
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: Jiang et al., Hyperparameter Transfer with Mixture-of-Expert Layers (preprint)
    url: https://arxiv.org/abs/2601.20205
  - title: Malasnicki et al., mu-Parametrization for Mixture of Experts
    url: https://arxiv.org/abs/2508.09752
  - title: "Vankadara et al., How to Scale Mixture-of-Experts: From muP to the Maximally Scale-Stable Parameterization (preprint)"
    url: https://arxiv.org/abs/2605.14200
  - title: "Kim et al., Let's Scale Step by Step: Compute-Efficient Hyperparameter Transfer for Large-Scale Mixture-of-Experts (preprint)"
    url: https://arxiv.org/abs/2608.20061
timeline:
  - date: 2025-08-13
    title: MoE μP proposed
    body: Malasnicki et al. derive a μP for MoE and report learning-rate transfer across model sizes.
    source: https://arxiv.org/abs/2508.09752
  - date: 2026-05-13
    title: μP questioned for MoE (preprint)
    body: Vankadara et al. argue μP does not reliably give transfer for MoE and propose a stricter parametrization.
    source: https://arxiv.org/abs/2605.14200
explainer:
  oneLine: Can the best learning rate found on a 100M-parameter expert model be reused unchanged on one 200 times larger?
  flow:
    - Tune learning rate on a tiny MoE
    - μP rules rescale it with size
    - Shown from 5.6B to 20.7B
    - Test 100M to 20B+ across designs
  glossary:
    - term: μP (maximal update parametrization)
      meaning: A rule for scaling initial weights and per-layer learning rates with width so that settings tuned on a small model stay good on a large one.
      link: /research/mu-parametrization-hyperparameter-transfer
    - term: learning rate
      meaning: The step size used when the training algorithm adjusts the weights; too small is slow, too large is unstable.
      link: https://en.wikipedia.org/wiki/Learning_rate
    - term: mixture of experts
      meaning: A model in which each token is sent to a few of many parallel sub-networks (experts), so only part of the model runs per token.
      link: /research/mixture-of-experts-routing
    - term: router
      meaning: The small network in a mixture-of-experts layer that scores the experts and picks which ones each token goes to.
      link: /research/mixture-of-experts-routing
    - term: hyperparameter
      meaning: A setting chosen by people before training, such as the learning rate, rather than learned from data.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
    - term: parameter
      meaning: One adjustable number (weight) inside a neural network; large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: token
      meaning: A chunk of text, roughly three-quarters of a word on average, that a language model reads and predicts one at a time.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: validation loss
      meaning: The model's average prediction error on held-out text it never trained on; lower means better prediction.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
    - term: Muon
      meaning: An optimizer that orthogonalises each weight matrix's update before applying it; it came out of the NanoGPT speedrun.
      link: https://kellerjordan.github.io/posts/muon/
    - term: FLOP
      meaning: One floating-point operation, such as a single multiply or add; training compute is counted in total FLOPs.
      link: https://en.wikipedia.org/wiki/FLOPS
  readFirst:
    - title: "EleutherAI: Maximal Update Parametrization (μP) and Hyperparameter Transfer"
      url: https://blog.eleuther.ai/mutransfer/
      why: Explains the base idea for ordinary models.
    - title: "Hugging Face: Mixture of Experts explained"
      url: https://huggingface.co/blog/moe
      why: Explains the architecture being scaled.
site:
  aiReviewed: true
---

Several preprints propose μP-style parametrizations for mixture-of-experts transformers (covering width, expert count, expert size, top-k and depth). The test is whether the optimal learning rate transfers over two orders of magnitude of scale. Precisely: take the proposed parametrization, find the optimal peak learning rate (on a grid of factor 2^0.5) for a model of about 100M total parameters trained on D tokens, and for a target of at least 20B total parameters trained on a token budget set by the same tokens-per-parameter ratio. The problem is solved positively if the target's best learning rate on the same grid is within 1.5x of the proxy's, and the target loss at the proxy's learning rate is within 0.5% of the target's best loss, for at least two MoE configurations that differ in granularity and top-k.

# State of the art

Jiang et al. (arXiv:2601.20205, ICML 2026) report transfer from 51M to about 2B total parameters at a fixed budget of about 1B tokens, and leave systematic transfer across training horizon to future work. Małaśnicki et al. (arXiv:2508.09752) test a Switch-style MoE μP (8 experts, top-1) at widths 128 to 2048. Vankadara et al. (arXiv:2605.14200, preprint) argue that μP does not reliably give learning-rate transfer or monotonic improvement for MoE and propose a Maximally Scale-Stable Parameterization, tested up to about 2.5B parameters. The one result at 20B+ is Kim et al. (arXiv:2608.20061, preprint): with μP adapted to MLA attention and the Muon optimizer, the optimal learning rate of a 5.6B-total / 1.8B-active proxy transferred to a 20.7B-total / 3.8B-active target at up to 100B tokens, and the recipe was used for a 155B-total model. That is a 4x jump from an already large proxy, for one architecture; transfer across two orders of magnitude, and across expert granularity and top-k, remains untested.

# Applications

A confirmed rule would let teams tune MoE hyperparameters on cheap proxies before committing to a multi-billion-dollar-scale run, and a failure would show where tuning at scale cannot be avoided.

# Resolution criteria

Released code, configs and loss curves for the proxy grid and at least two target-scale runs per configuration, showing the transfer criterion above for the proposed parametrization (or for each of the competing ones, giving a comparison), reproducible by a third party at the proxy scale.

# Rating rationale

Difficulty 37: transfer from 5.6B to 20.7B is now reported, but two orders of magnitude across expert granularity and top-k is untested and the parametrizations disagree; harder than the replication tasks (21 to 25). Application value 46: tuning on 100M proxies instead of multi-billion runs saves real money. Leverage 34: gates tuning practice for MoE pre-training.

# Work mix rationale

Theory exists in several competing forms; the decisive step is expensive large-scale training.

# Verification

Dataset: one public pre-training corpus with fixed data order. Metric: validation loss at the end of training for each learning rate on a 2^0.5 grid (at least 7 points around the optimum). Threshold: target-scale optimal learning rate within 1.5x of the 100M-parameter optimum, with the loss gap at the transferred rate at most 0.5% relative. Budget: the grid at proxy scale with 3 seeds (of the order of 10^18 to 10^19 FLOPs per run), and for the target at least 5 learning rates at 20B+ total parameters, which is a cluster-scale budget (each run of the order of 10^22 FLOPs or more). The Adam or Muon variant must be stated.

# Plain explanation

Companies can only afford to train their biggest models once. So they choose settings, especially the step size for learning, on small copies. For ordinary models, a scaling recipe called μP says how to carry the settings up. For mixture-of-experts models, which have many specialist sub-networks, several recent papers propose a recipe, and they disagree about how reliable it is.

The papers so far tested up to about 2 billion parameters. The open question is whether the recipe holds across a jump to 20 billion or more.

The test: find the best step size at 100 million parameters. Then train the big model at several step sizes. If the big model's best step size is within one and a half times of the small one, and using the small model's choice only costs half a percent of quality, the recipe passes. It should pass for at least two different expert layouts.

Why hard: the big runs are very expensive, and the theory behind the competing recipes is subtle.

# Student explanation

**The problem in one line.** Training a large model requires picking a _learning rate_, the step size used when weights are nudged downhill along the derivative of the loss. Too small wastes compute; too large makes training unstable. Trying many learning rates on a 20-billion-parameter model would cost several full training runs, so practitioners want to tune on a cheap small model and reuse the answer.

**Why a recipe is needed.** In a naive setup the best learning rate drifts as the model gets wider, so the small model's answer is wrong for the big one. The maximal update parametrization (μP) is a set of scaling rules, derived from the limit of very wide networks, that rescales initial weights and per-layer learning rates with width so that the best setting stays put. It is well supported for ordinary dense transformers. Mixture-of-experts (MoE) models add more size knobs: the number of experts, the size of each, and how many experts each token uses (top-k). Several groups proposed MoE versions of μP and disagree about when transfer works.

**What is known.** One study shows transfer from 51M to about 2B parameters at a fixed budget of about 1B tokens. Another tests a simple 8-expert MoE at small widths. A third argues standard μP fails for MoE and proposes a "maximally scale-stable" alternative, tested to about 2.5B. The one result above 20B: using μP adapted to a particular attention design and the Muon optimizer, the best learning rate of a 5.6B-parameter proxy carried over to a 20.7B-parameter target at up to 100B tokens, and the recipe was used for a 155B-parameter model. That is a 4x jump from an already large proxy, for one architecture.

**What is asked.** Find the best learning rate for a \~100M-parameter MoE on a grid where neighbouring values differ by a factor of $\sqrt{2} \approx 1.41$, then do the same for a 20B+ model trained on the same tokens-per-parameter ratio. Transfer succeeds if the large model's best rate is within 1.5x of the small one's, and using the small model's rate costs at most 0.5% in final loss, for two MoE designs that differ in expert size and top-k.

**Why it is hard.** Mostly cost: at least five large runs, each of the order of $10^{22}$ operations. A worked number shows the precision demanded: 1.5x is only about one grid step, so the answer must be located to within one notch. The analogy of scaling a bridge from a model in a wind tunnel fits: dimensionless rules usually carry over, but new effects can appear at full size; here the router and expert count are the new effects.

**How it is checked.** Released code, configs and loss-versus-learning-rate curves at both scales, reproducible at the small scale by others.
