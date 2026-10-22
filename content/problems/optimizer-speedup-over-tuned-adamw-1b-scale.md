---
type: problem
slug: optimizer-speedup-over-tuned-adamw-1b-scale
title: A 1.4x speedup over well-tuned AdamW at 1B+ parameters
entry: adaptive-optimizers-adamw
status: OPEN
origin: Wen, Hall, Ma and Liang (arXiv:2509.02046, preprint); Liu et al., Muon is Scalable for LLM Training (arXiv:2502.16982, preprint)
ratings:
  difficulty: 50
  applicationValue: 70
  leverage: 42
workMix:
  theory: 35
  engineering: 10
  compute: 45
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Wen et al., Fantastic Pretraining Optimizers and Where to Find Them (preprint)
    url: https://arxiv.org/abs/2509.02046
  - title: Liu et al., Muon is Scalable for LLM Training (preprint)
    url: https://arxiv.org/abs/2502.16982
  - title: "Wen et al., Fantastic Pretraining Optimizers and Where to Find Them II: Hyperball Optimization (preprint)"
    url: https://arxiv.org/abs/2606.16899
links:
  - to: nanogpt-speedrun-sub-record-optimizer
    kind: RELATED
    note: The speedrun is the small-scale testbed where optimizer gains are first reported; this problem asks whether they hold at 1B+.
  - to: algoperf-self-tuning-beat-schedule-free-adamw
    kind: RELATED
    note: AlgoPerf provides a different, tuning-controlled yardstick for the same optimizer-comparison question.
timeline:
  - date: 2025-09-02
    title: Fair-tuning study (preprint)
    body: Wen et al. report speedups over tuned AdamW shrink to about 1.1x at 1.2B parameters.
    source: https://arxiv.org/abs/2509.02046
explainer:
  oneLine: Does any optimizer train a 1.2-billion-parameter language model 1.4 times faster than a carefully tuned AdamW?
  flow:
    - Papers claim 1.4x to 2x
    - Fair tuning shrinks the gain
    - About 1.1x at 1.2B parameters
    - Find a method that keeps 1.4x
  glossary:
    - term: optimizer
      meaning: The rule that turns gradients into weight updates during training, such as SGD, Adam or AdamW.
      link: /research/adaptive-optimizers-adamw
    - term: AdamW
      meaning: "The default optimizer for large models: Adam's per-weight adaptive steps plus weight decay applied separately."
      link: /research/adaptive-optimizers-adamw
    - term: Muon
      meaning: An optimizer that orthogonalises each weight matrix's update before applying it; it came out of the NanoGPT speedrun.
      link: https://kellerjordan.github.io/posts/muon/
    - term: learning rate
      meaning: The step size used when the training algorithm adjusts the weights; too small is slow, too large is unstable.
      link: https://en.wikipedia.org/wiki/Learning_rate
    - term: hyperparameter
      meaning: A setting chosen by people before training, such as the learning rate, rather than learned from data.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
    - term: Chinchilla
      meaning: A 2022 DeepMind study and model that set the rule of thumb of about 20 training tokens per parameter for a fixed compute budget.
      link: https://en.wikipedia.org/wiki/Chinchilla_(language_model)
    - term: validation loss
      meaning: The model's average prediction error on held-out text it never trained on; lower means better prediction.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
    - term: random seed
      meaning: The starting number for a computer's random-number generator; changing it changes the random initial weights and data order of a run.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: parameter
      meaning: One adjustable number (weight) inside a neural network; large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: FLOP
      meaning: One floating-point operation, such as a single multiply or add; training compute is counted in total FLOPs.
      link: https://en.wikipedia.org/wiki/FLOPS
  readFirst:
    - title: Fantastic Pretraining Optimizers and Where to Find Them (preprint)
      url: https://arxiv.org/abs/2509.02046
      why: The fair-tuning study behind this problem.
    - title: "Keller Jordan: Muon"
      url: https://kellerjordan.github.io/posts/muon/
      why: Plain-language description of one contender.
    - title: "Sebastian Ruder: An overview of gradient descent optimization algorithms"
      url: https://www.ruder.io/optimizing-gradient-descent/
      why: Readable tour of SGD, momentum, Adam and their relatives.
site:
  aiReviewed: true
---

Find an optimizer that reaches a fixed pre-training validation loss in at most 1/1.4 of the steps (or equivalently the tokens) that a fully tuned AdamW needs, for dense decoder-only language models of at least 1.2B parameters trained at one to eight times the Chinchilla-optimal tokens-per-parameter ratio, with both optimizers' hyperparameters tuned on equal budgets.

# State of the art

Wen et al. (preprint) studied ten optimizers across four model scales (0.1B to 1.2B) and data-to-model ratios of 1x to 8x Chinchilla, and report that many claimed 1.4x to 2x speedups shrink under fair tuning: the fastest, matrix-based optimizers such as Muon and Soap, go from about 1.4x at 0.1B parameters to about 1.1x at 1.2B parameters. Liu et al. (preprint) report roughly 2x compute efficiency for Muon under compute-optimal training in their scaling experiments and train a 3B-active / 16B-total MoE model (Moonlight) on 5.7T tokens. The two reports measure against different AdamW baselines, so the gap between them is itself unresolved. A follow-up by Wen et al. (Hyperball, arXiv:2606.16899, preprint) fixes the norms of weights and updates and reports a 20–30% token-equivalent speedup for Muon over weight-decay baselines on models up to 1.2B parameters, still short of 1.4x.

# Applications

A 1.4x step-count saving at 1B+ parameters would reduce the cost of every pre-training run by a comparable factor, since the optimizer is the one component used by all of them.

# Resolution criteria

A public, tuned comparison at at least 1.2B parameters (single runs allowed if the loss gap is far larger than the seed spread measured at 150M), showing steps-to-target ratio of at least 1.4 against AdamW with both sides tuned over matched budgets.

# Rating rationale

Difficulty 50, the highest in the pack: fair-tuning studies show matrix optimizers' gains shrinking from 1.4x to 1.1x between 0.1B and 1.2B, and the best 2026 follow-up reaches 1.2-1.3x, so the target needs a trend reversal; comparable to the feature-learning scaling-exponents problem (47). Application value 70: the optimizer is in every pre-training run. Leverage 42: it would reshape the default training recipe.

# Work mix rationale

A new optimizer idea is needed and then expensive validation at scale.

# Verification

Dataset: a fixed public corpus (for example the one used by the Wen et al. study) with identical data order for both optimizers. Metric: steps (or tokens) to reach a target validation loss that AdamW reaches at the end of its schedule. Threshold: ratio of at least 1.4. Budget: hyperparameter sweeps at 150M parameters with 3 seeds for variance, then at least a 1.2B model at 1x, 2x and 4x Chinchilla tokens, each arm tuned over an equal number of runs (a budget of the order of 10^21 FLOPs per arm). Report weight decay, warm-up and schedule for both.

# Plain explanation

Many papers announce a new training method that is 1.4 to 2 times faster than the standard one, AdamW. If true at large scale, every training run would cost far less.

A careful 2025 study (not yet peer-reviewed) re-tested ten methods, giving each a fair amount of tuning. It found that the speed-up shrinks as models get bigger. For the fastest methods, the gain was about 1.4 times at 100 million parameters but only about 1.1 times at 1.2 billion. A different team reported about 2 times for one method, Muon, under its own setup. So the two reports disagree, partly because they tune the standard method differently.

The open question is whether any method reaches 1.4 times at 1.2 billion parameters or larger, when both sides are tuned equally.

Why hard: gains seem to fade with size, so a method would need to reverse that trend, and each fair test needs many large runs.

# Student explanation

**What is asked.** Find an optimizer that reaches a fixed validation loss in at most $1/1.4 \approx 71\%$ of the training steps that a fully tuned AdamW needs, for language models of at least 1.2 billion parameters, with both optimizers' settings tuned on equal budgets. An optimizer is the rule that turns the derivatives of the loss into weight updates; AdamW, which gives each weight its own adaptive step size and shrinks weights slightly each step (weight decay), is the default for large models.

**Why it matters.** Every pre-training run uses an optimizer, so a 1.4x reduction in steps would cut the cost of all of them by about the same factor, with no change to data or model.

**What is known.** Many papers report 1.4x to 2x speedups, often against an AdamW whose learning rate and other settings were tuned less carefully. A fair-tuning study tested ten optimizers at four model sizes from 0.1B to 1.2B parameters, with data from 1x to 8x the "Chinchilla" amount (about 20 tokens per parameter). The fastest ones, matrix-based optimizers such as Muon and Soap that treat each weight matrix as a whole rather than number by number, gave about 1.4x at 0.1B parameters but only about 1.1x at 1.2B. Another group reports roughly 2x compute efficiency for Muon in their scaling experiments and trained a 16B-parameter mixture-of-experts model on 5.7T tokens with it; the two reports use different AdamW baselines, so the disagreement itself is unresolved. A follow-up that fixes the size of weights and updates reports 20–30% token savings for Muon up to 1.2B, still short of 1.4x.

**Why it is hard.** The evidence points to gains shrinking as models grow, so reaching 1.4x would reverse a trend rather than extend one. Measuring it fairly is also expensive: each optimizer needs a sweep of settings at small scale, repeated with several random seeds to know the run-to-run noise, then tuned runs at 1.2B parameters and several data amounts. A worked number: if AdamW needs 50,000 steps to reach the target loss, the challenger must get there in about 35,700.

**An analogy.** Comparing optimizers is like comparing two drivers on a race track; an under-tuned baseline is a driver with a poorly set-up car. Giving both equal set-up time removes most of the reported gap. The analogy breaks because the "track" changes with model size: an optimizer can win on a small model and lose on a large one.

**How it is checked.** A public comparison at 1.2B+ parameters, same data order, both sides tuned on matched budgets, reporting the step ratio, weight decay, warm-up and schedule.
