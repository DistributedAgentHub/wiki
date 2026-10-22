---
type: problem
slug: llm-rl-compute-scaling-extrapolation
title: Do RL compute-performance curves for LLMs extrapolate across models, domains and recipes?
entry: rlvr-grpo-reasoning
status: OPEN
origin: Khatri et al., The Art of Scaling Reinforcement Learning Compute for LLMs (October 2025, preprint)
ratings:
  difficulty: 32
  applicationValue: 50
  leverage: 35
workMix:
  theory: 10
  engineering: 25
  compute: 55
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Khatri et al. (2025). The Art of Scaling Reinforcement Learning Compute for LLMs (arXiv preprint)
    url: https://arxiv.org/abs/2510.13786
timeline:
  - date: 2025-10-15
    title: Sigmoidal RL scaling study
    body: A 400,000 GPU-hour preprint fits compute curves and predicts a 100,000 GPU-hour run.
    source: https://arxiv.org/abs/2510.13786
explainer:
  oneLine: Can small practice runs predict how good a huge reinforcement-learning run will be?
  flow:
    - Run small RL experiments
    - Fit an S-shaped curve
    - Predict a much bigger run
    - Run it and compare
    - Check other models and tasks
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: language model
      meaning: A neural network trained to predict text, which can then write answers and code.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: GPU-hour
      meaning: One graphics processor running for one hour, a common unit for how much computing a training run used.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: scaling law
      meaning: A formula describing how performance improves as compute, data or model size grows.
      link: https://en.wikipedia.org/wiki/Neural_scaling_law
    - term: sigmoid
      meaning: An S-shaped curve that starts flat, rises, then flattens out.
      link: https://en.wikipedia.org/wiki/Sigmoid_function
    - term: asymptote
      meaning: The level a curve approaches but never exceeds as the input grows.
      link: https://en.wikipedia.org/wiki/Asymptote
    - term: extrapolation
      meaning: Predicting beyond the range of the data used to build the prediction.
      link: https://en.wikipedia.org/wiki/Extrapolation
    - term: random seed
      meaning: The starting number of a random process. Different seeds give different training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: power law
      meaning: A relation y = a·x^b; on a plot with logarithmic axes it is a straight line.
      link: https://en.wikipedia.org/wiki/Power_law
    - term: prediction interval
      meaning: A range, stated in advance, within which a future measurement is expected to fall with a given probability.
      link: https://en.wikipedia.org/wiki/Confidence_interval
  readFirst:
    - title: The Art of Scaling Reinforcement Learning Compute for LLMs (arXiv preprint)
      url: https://arxiv.org/abs/2510.13786
      why: The study that proposed the curves.
    - title: "Wikipedia: Neural scaling law"
      url: https://en.wikipedia.org/wiki/Neural_scaling_law
      why: Background on scaling in pretraining.
site:
  aiReviewed: true
---

Pretraining loss follows power laws in compute that practitioners use to plan runs. For RL on language models, is there an analogous functional form that, fitted on small runs up to compute $C_0$, predicts validation performance at $\ge 8C_0$ with calibrated prediction intervals, for base models, task families (maths, code, agentic tool use) and algorithms other than those used to fit it? A sigmoidal compute-to-performance form has been proposed; what is needed is its validity range and failure modes.

# State of the art

A 2025 preprint (more than 400,000 GPU-hours) fits sigmoidal compute-performance curves, reports that some design choices change the asymptote while others (loss aggregation, normalisation, curriculum, off-policy algorithm) mainly change compute efficiency, and demonstrates predicting validation performance of one run scaled to 100,000 GPU-hours. It is a single study from one group, with one recipe (ScaleRL) shown to extrapolate; independent replications, other model families, other domains and sparse (mixture-of-experts) models are not established.

# Applications

Lets labs and academic groups decide whether to launch a large RL run from small pilot runs, and compare algorithms by asymptote rather than by performance at one budget.

# Resolution criteria

Independent replication of the extrapolation test (below) on at least two base-model families not in the original study, on at least two task domains, with the prediction interval covering the held-out result.

# Rating rationale

Difficulty 32: a method and a recipe exist; the open work is replication on other model families and domains. Comparable to compute-optimal-tokens-per-parameter-confidence-interval (30). Application value 50: predictable RL scaling would guide compute planning. Leverage 35: limited to post-training practice.

# Work mix rationale

Dominated by the GPU-hours needed to run enough RL curves; engineering matters for stable recipes.

# Verification

Dataset and metric: held-out validation accuracy (pass\@1, averaged over at least 16 samples per problem) on a stated maths set and a stated code set. Test: fit the curve on runs up to $C_0$ (a proposed value is 2,000 GPU-hours or less so that groups outside large labs can take part), pre-register the prediction and its interval for $\ge 8C_0$, then run to $8C_0$. Pass if the observed value lies in the interval for at least two base-model families and two domains. Seeds: at least 3 seeds at the fit scale to estimate run-to-run variance. Publish training code and the exact hyperparameters, since recipe details determine the asymptote.

# Plain explanation

Training the biggest AI models costs enormous amounts of computing. When people train the basic model that reads text, they have rules of thumb that tell them, from small test runs, roughly how good a large run will be. This lets them decide whether the big run is worth paying for.

For the later stage, where the model practises with rewards, such rules were missing. A 2025 study spent hundreds of thousands of GPU hours and proposed a curve shape: performance rises slowly, then quickly, then flattens. Fit this S-shaped curve on small runs, and you can predict what a much larger run would reach. They tested it by predicting a run that used 100,000 GPU hours.

That is one team's result on one recipe. The open problem is whether it holds up for other models, other kinds of tasks and other training recipes, and where it fails. If it holds, groups can plan big runs from cheap pilots. If it does not, the pilot runs mislead.

The hard part is cost: checking the prediction needs a very large run. Few groups can afford this.

# Student explanation

**Why it matters.** Before a lab trains a large language model it can predict the final loss from small runs, because pretraining loss falls as a power law in compute (a straight line on a log-log plot). RL post-training has no comparable rule, so a group cannot tell from a small pilot whether a 100,000 GPU-hour run (a GPU-hour is one graphics processor working for one hour) will pay off.

**The proposal.** Khatri et al. (2025, preprint) ran more than 400,000 GPU-hours of experiments and fitted validation accuracy against RL compute with a sigmoid, an S-shaped curve. Such a curve starts near the model's initial accuracy, rises, and levels off at an asymptote, the ceiling it approaches as compute grows without bound. It is described by three numbers: the ceiling, the compute at which half of the total gain has been reached, and how steeply it rises. The authors report that some design choices change the ceiling, while others (how the loss is averaged, normalisation, the curriculum, the off-policy variant) mainly change how quickly the ceiling is approached. Their recipe, ScaleRL, was fitted on smaller runs and correctly predicted a single run scaled up to 100,000 GPU-hours.

**What is not known.** That is one study from one group, with one recipe shown to extrapolate. Whether the same form predicts other base models, other domains (code, tool use), mixture-of-experts models or other algorithms has not been established. Extrapolation, predicting outside the range of measured data, is risky in general: a curve fitted to early points can have the right shape but the wrong ceiling. RL runs can also become unstable, for example when the model's outputs collapse onto a few repeated answers, which breaks any smooth curve.

**Why it is hard.** Testing an extrapolation means paying for the large run being predicted, for several models and domains. Run-to-run variation must be measured with several random seeds (different starting random numbers) at the small scale, or a prediction interval cannot be honest.

**The target.** Fit the curve on runs up to compute $C_0$ (a proposed value is 2,000 GPU-hours or less, so that academic groups can take part). Publish the prediction and its uncertainty interval for $8C_0$ before running, then run to $8C_0$. The test passes if the measured accuracy (pass\@1 averaged over at least 16 samples per problem, on a stated maths set and a stated code set) falls inside the interval for at least two base-model families and two domains, with the training code and the exact hyperparameters released.
