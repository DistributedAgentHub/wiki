---
type: problem
slug: reward-overoptimization-law-modern-rlhf
title: Do reward-model overoptimization laws hold for modern RLHF and DPO-style training?
entry: rlhf-preference-optimization
status: OPEN
origin: Gao, Schulman and Hilton, Scaling Laws for Reward Model Overoptimization (2022)
ratings:
  difficulty: 30
  applicationValue: 40
  leverage: 30
workMix:
  theory: 15
  engineering: 20
  compute: 40
  empirical: 25
verification:
  route: REPRODUCTION
sources:
  - title: Gao, Schulman, Hilton (2022). Scaling Laws for Reward Model Overoptimization (arXiv)
    url: https://arxiv.org/abs/2210.10760
  - title: Malik et al. (2025). RewardBench 2 (arXiv preprint)
    url: https://arxiv.org/abs/2506.01937
links:
  - to: dpo-vs-ppo-controlled-comparison
    kind: RELATED
    note: Whether offline preference losses overoptimise like online RL is part of the DPO versus PPO comparison.
timeline:
  - date: 2022-10-19
    title: Overoptimization scaling laws
    body: Synthetic gold-versus-proxy setup shows smooth coefficient scaling for best-of-n and RL.
    source: https://arxiv.org/abs/2210.10760
explainer:
  oneLine: How far can you push an AI toward a score before the score stops meaning what you wanted?
  flow:
    - Train against a proxy score
    - Measure the true score
    - Score rises, then falls
    - Fit curves to predict the peak
    - Test on today's models
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: language model
      meaning: A neural network trained to predict text, which can then write answers and code.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: reward model
      meaning: A network trained to score how much people would like a response.
      link: /research/rlhf-preference-optimization
    - term: Goodhart's law
      meaning: When a measure becomes a target, it stops being a good measure.
      link: https://en.wikipedia.org/wiki/Goodhart%27s_law
    - term: KL divergence
      meaning: A measure of how different two probability distributions are.
      link: https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence
    - term: best-of-n sampling
      meaning: Generating n answers and keeping the one with the highest reward-model score.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback
    - term: DPO
      meaning: "Direct Preference Optimization: training on pairs of preferred and rejected answers without a separate reward model."
      link: https://arxiv.org/abs/2305.18290
    - term: RLHF
      meaning: "Reinforcement learning from human feedback: training a model with RL against a reward model fitted to human preference comparisons."
      link: /research/rlhf-preference-optimization
    - term: PPO
      meaning: Proximal Policy Optimization, the standard RL algorithm used in RLHF.
      link: /research/policy-gradient-ppo
    - term: random seed
      meaning: The starting number of a random-number generator; different seeds give different random training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: extrapolation
      meaning: Predicting values outside the range covered by the data.
      link: https://en.wikipedia.org/wiki/Extrapolation
  readFirst:
    - title: Scaling Laws for Reward Model Overoptimization (arXiv)
      url: https://arxiv.org/abs/2210.10760
      why: The original measurement study.
    - title: "Wikipedia: Goodhart's law"
      url: https://en.wikipedia.org/wiki/Goodhart%27s_law
      why: The idea in plain terms.
    - title: Illustrating RLHF
      url: https://huggingface.co/blog/rlhf
      why: How reward models are used in training.
site:
  aiReviewed: true
---

Gao et al. found that, with a gold reward model labelling data for proxy reward models, the gold reward as a function of $d=\sqrt{\mathrm{KL}(\pi\Vert\pi_{\text{init}})}$ follows different functional forms for best-of-$n$ and for RL, with fit coefficients that scale smoothly in reward-model size. Do those functional forms and coefficient trends hold for current practice: policies of at least 7B parameters, learned reward models trained on preference data from LLM judges, offline losses such as DPO and its variants, and RL with verifiable-reward mixtures? What predicts the onset of overoptimization?

# State of the art

The 2022 study used synthetic gold labels and smaller models than current assistants. It is widely cited as motivation for KL penalties and early stopping, but repeated measurement at modern scale and for direct-alignment losses is thin in the literature. RewardBench 2 (2025, preprint) reports that reward-model benchmark accuracy correlates with downstream best-of-N and PPO performance, which is related but does not give the overoptimization curve.

# Applications

Gives practical guidance on how long to optimise against a learned reward and how large a reward model is needed, which affects the cost and safety of post-training.

# Resolution criteria

Published fits with held-out extrapolation on at least two policy scales (at least 7B parameters) and both an RL method and a direct-alignment loss, with the functional forms either confirmed with parameter uncertainty or replaced by a better-fitting form.

# Rating rationale

Difficulty 30: a reproducible measurement programme with a known protocol; the cost is compute and a trustworthy gold reward. Application value 40: guidance on early stopping and reward-model size. Leverage 30: sharpens post-training practice without unlocking new capabilities; below the RLVR question (52).

# Work mix rationale

Experiments with large models and a faithful gold reward dominate; some theory in choosing the functional form.

# Verification

Setup: a fixed gold reward model, proxy reward models of at least three sizes trained on gold-labelled preference data, and policies of at least 7B parameters optimised by (a) best-of-$n$ up to $n$ of 1,000 or more, (b) PPO or GRPO with a KL penalty, (c) DPO with varied $\beta$ and dataset size. Metric: gold reward versus $d=\sqrt{\mathrm{KL}}$ with fits of the forms reported by Gao et al. and alternatives, scored by held-out extrapolation error (fit on $d\le d_0$, test on $d>d_0$). Seeds: at least 3 per setting for confidence bands. Compute: report GPU-hours; the original study scale is not assumed.

# Plain explanation

When a school judges teachers by test scores, some teachers start teaching to the test. The scores go up, but real learning may not. This is called Goodhart's law: when a measure becomes a target, it stops being a good measure.

AI chatbots are trained with a score from a reward model, a program that guesses which answers people would prefer. The reward model is only a guess. If the chatbot is pushed hard toward a high score, it finds quirks the guess likes, and the true quality gets worse.

In 2022 researchers measured this carefully. They used a stronger "gold" reward model as a stand-in for real people, and a weaker model as the proxy to train against. As they pushed harder, the gold score first rose and then fell, in a pattern that followed smooth curves depending on how big the proxy was.

The open problem is to check whether those curves still describe the large chatbots and newer training methods of today, including methods that skip the reward model. The answer would tell teams how long to train before it starts to do harm.

# Student explanation

**Why it matters.** In RLHF a language model is optimised against a reward model, a network trained to imitate human preferences. The reward model is only an approximation, and pushing hard on an approximation eventually exploits its errors: the reward score keeps rising while real quality falls. This is Goodhart's law. Knowing when the turn happens tells practitioners how long to train and how large a reward model to use.

**The 2022 measurement.** Gao, Schulman and Hilton used a large "gold" reward model as a stand-in for humans. It labelled preference data, on which smaller proxy reward models were trained. A policy was then optimised against a proxy, and its true quality was measured with the gold model. How far the policy had moved was measured by
$d=\sqrt{\mathrm{KL}(\pi\Vert\pi_{\text{init}})},$
where the KL divergence measures how different the new model's output probabilities are from the starting model's. Gold reward first rose with $d$, then fell. The shape of the curve was different for best-of-$n$ sampling (generate $n$ answers and keep the one the proxy likes best) and for RL, and the fitted coefficients changed smoothly with the proxy's size: larger reward models delayed the fall.

**What is not known.** That study used synthetic labels and models smaller than today's assistants. Current practice differs in three ways: policies of 7B parameters and more, reward models trained on labels from other language models acting as judges, and offline losses such as DPO that never sample from the policy during training. Whether the same curve shapes hold, and what predicts the turning point, has been measured only thinly. RewardBench 2 (2025) reports that reward-model benchmark accuracy correlates with best-of-$n$ and PPO results, which is related but does not give the curve itself.

**Why it is hard.** A trustworthy gold reward is needed; if it is itself a model, results may not transfer to real human judgement. Each curve needs many training lengths, several proxy sizes and several random seeds at large model scale, which is expensive.

**The target.** Fix a gold reward model; train proxies of at least three sizes; optimise policies of at least 7B parameters by best-of-$n$ (up to $n=1{,}000$ or more), by PPO or GRPO with a KL penalty, and by DPO with varied settings. Fit gold reward against $d$ using only points with $d\le d_0$, then predict the curve for $d>d_0$. The test is whether the original functional forms, or a better proposed form, extrapolate correctly across at least two policy scales, with uncertainty bands from at least three seeds per setting.
