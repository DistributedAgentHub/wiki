---
type: entry
slug: rlhf-preference-optimization
title: RLHF and preference optimization (DPO)
field: reinforcement-learning
kind: ALGORITHM
status: ACTIVE
summary: Aligning language models with human preferences, either by fitting a reward model and optimising it with RL (RLHF, usually PPO) or by optimising the policy directly on preference pairs (DPO and relatives).
reliedOn: Every deployed instruction-following or chat model uses some form of preference optimisation after pretraining; reward models and DPO-style losses are the standard post-training tools for non-verifiable behaviour such as helpfulness and style.
dependsOn:
  - policy-gradient-ppo
  - transformer-architecture
references:
  - title: Christiano et al. (2017). Deep reinforcement learning from human preferences (arXiv)
    url: https://arxiv.org/abs/1706.03741
    kind: paper
  - title: Stiennon et al. (2020). Learning to summarize from human feedback (arXiv)
    url: https://arxiv.org/abs/2009.01325
    kind: paper
  - title: Ouyang et al. (2022). Training language models to follow instructions with human feedback (arXiv)
    url: https://arxiv.org/abs/2203.02155
    kind: paper
  - title: Rafailov et al. (2023). Direct Preference Optimization (arXiv)
    url: https://arxiv.org/abs/2305.18290
    kind: paper
  - title: Azar et al. (2023). A General Theoretical Paradigm to Understand Learning from Human Preferences (arXiv)
    url: https://arxiv.org/abs/2310.12036
    kind: paper
  - title: Gao, Schulman, Hilton (2022). Scaling Laws for Reward Model Overoptimization (arXiv)
    url: https://arxiv.org/abs/2210.10760
    kind: paper
  - title: Xu et al. (2024). Is DPO Superior to PPO for LLM Alignment? (ICML 2024)
    url: https://arxiv.org/abs/2404.10719
    kind: paper
  - title: Ivison et al. (2024). Unpacking DPO and PPO (NeurIPS 2024)
    url: https://arxiv.org/abs/2406.09279
    kind: paper
  - title: Malik et al. (2025). RewardBench 2 (arXiv preprint)
    url: https://arxiv.org/abs/2506.01937
    kind: paper
  - title: "Hugging Face: Illustrating RLHF"
    url: https://huggingface.co/blog/rlhf
    kind: article
timeline:
  - date: 2017-06-12
    title: RL from human preferences
    body: Christiano et al. train agents on Atari and simulated robotics from human comparisons of trajectory segments.
    source: https://arxiv.org/abs/1706.03741
  - date: 2020-09-02
    title: Summarisation from human feedback
    body: Stiennon et al. optimise a summarisation policy against a learned reward model with PPO and report gains over supervised baselines.
    source: https://arxiv.org/abs/2009.01325
  - date: 2022-03-04
    title: InstructGPT
    body: OpenAI reports that labellers prefer a 1.3B InstructGPT to the 175B GPT-3 baseline.
    source: https://arxiv.org/abs/2203.02155
  - date: 2022-10-19
    title: Overoptimization scaling laws
    body: Gao et al. measure gold reward against proxy-reward optimisation for RL and best-of-n and find smooth scaling of the fit coefficients.
    source: https://arxiv.org/abs/2210.10760
  - date: 2023-05-29
    title: DPO
    body: Rafailov et al. show the KL-regularised RLHF optimum can be fit with a supervised loss on preference pairs, removing the reward model and RL loop.
    source: https://arxiv.org/abs/2305.18290
  - date: 2024-06-13
    title: Controlled DPO versus PPO comparison
    body: Ivison et al. (NeurIPS 2024) find PPO outperforms DPO by up to 2.5% in math and 1.2% in general domains, with preference data quality the largest factor.
    source: https://arxiv.org/abs/2406.09279
explainer:
  oneLine: Teaching a chatbot what people prefer by showing it which of two answers people like more.
  flow:
    - People compare two answers
    - Learn what people prefer
    - Train model toward preferred answers
    - Keep it close to the original
    - Watch for reward hacking
  glossary:
    - term: language model
      meaning: A neural network trained to predict the next piece of text, which can then write answers, code and essays.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: policy
      meaning: The rule an agent uses to choose an action in each situation. In deep RL it is usually a neural network.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning#Policy
    - term: reward
      meaning: A number the environment gives after each action, telling the agent how well it is doing.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: KL divergence
      meaning: A measure of how different one probability distribution is from another. Used to keep a new policy close to an old one.
      link: https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence
    - term: PPO
      meaning: "Proximal Policy Optimization: a popular RL algorithm that limits how far each update can move the policy."
      link: /research/policy-gradient-ppo
    - term: reward model
      meaning: A neural network trained to score how much people would like a response.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback
    - term: Bradley-Terry model
      meaning: A simple model that turns the difference of two scores into the probability that one item wins a comparison.
      link: https://en.wikipedia.org/wiki/Bradley%E2%80%93Terry_model
    - term: fine-tuning
      meaning: Further training of an already trained model on a narrower task or data set.
      link: https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)
    - term: Goodhart's law
      meaning: When a measure becomes a target, it stops being a good measure.
      link: https://en.wikipedia.org/wiki/Goodhart%27s_law
    - term: DPO
      meaning: "Direct Preference Optimisation: trains the model directly on preferred/rejected answer pairs with a supervised loss, without a separate reward model or RL loop."
      link: /research/rlhf-preference-optimization
    - term: logistic function
      meaning: The S-shaped curve σ(x) = 1/(1+e^(−x)), which squashes any number into a probability between 0 and 1.
      link: https://en.wikipedia.org/wiki/Logistic_function
    - term: supervised learning
      meaning: Training a model on inputs paired with the correct outputs, adjusting it to reduce the error on those examples.
      link: https://en.wikipedia.org/wiki/Supervised_learning
  readFirst:
    - title: Illustrating Reinforcement Learning from Human Feedback
      url: https://huggingface.co/blog/rlhf
      why: Step-by-step walkthrough with diagrams.
    - title: "Wikipedia: Reinforcement learning from human feedback"
      url: https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback
      why: Overview and history.
    - title: Direct Preference Optimization (arXiv)
      url: https://arxiv.org/abs/2305.18290
      why: The DPO paper; the abstract explains the idea.
site:
  published: true
  aiReviewed: true
---

## From preferences to a reward

Many behaviours we want from a language model, such as helpfulness or tone, cannot be scored by a program. Reinforcement learning from human feedback (RLHF) turns pairwise human comparisons into a training signal. Christiano et al. (2017) showed that an agent can learn Atari and simulated-robot behaviours from a small number of human comparisons of trajectory segments. Ziegler et al. (2019) and Stiennon et al. (2020) applied the same idea to language models for stylistic continuation and summarisation.

## The standard three-stage recipe

The InstructGPT pipeline (Ouyang et al., 2022) is the template most later systems follow:

1. **Supervised fine-tuning** on human demonstrations.
2. **Reward modelling.** Labellers rank several model outputs for a prompt. A reward model $r_\phi(x,y)$ is trained under a Bradley-Terry assumption, $P(y_w\succ y_l\mid x)=\sigma\big(r_\phi(x,y_w)-r_\phi(x,y_l)\big)$.
3. **RL.** The policy is optimised with PPO to maximise $r_\phi$ minus a KL penalty $\beta\,\mathrm{KL}(\pi_\theta\Vert\pi_{\text{ref}})$ that keeps it close to the supervised model.

The InstructGPT paper reports that labellers preferred outputs from a 1.3B-parameter InstructGPT model to those of the 175B GPT-3, which established the method's practical value.

## Direct preference optimisation

Rafailov et al. (2023) observed that the KL-regularised objective has a closed-form optimum, so the reward can be written in terms of the policy: $r(x,y)=\beta\log\frac{\pi_\theta(y\mid x)}{\pi_{\text{ref}}(y\mid x)}+\text{const}$. Substituting into the Bradley-Terry loss gives DPO, a supervised classification-style loss on preference pairs that needs no separate reward model and no sampling during training. This is cheaper and simpler than PPO, and variants followed, including IPO (Azar et al., 2023) which addresses overfitting to deterministic preferences, and KTO (Ethayarajh et al., 2024) which uses unpaired good/bad labels.

## Open tension: offline preference losses versus online RL

DPO trains on a fixed dataset of responses, whereas PPO samples fresh responses from the current policy. Controlled comparisons disagree in size but, in two independent studies, favour careful PPO: Xu et al. (ICML 2024) report PPO surpassing other alignment methods across their testbeds, and Ivison et al. (2024) report PPO ahead of DPO by up to 2.5% in math and 1.2% in general domains while finding preference data quality to matter most (NeurIPS 2024). Reward-model quality is measured with benchmarks such as RewardBench (Lambert et al., 2024) and RewardBench 2 (2025), whose authors report that benchmark accuracy correlates with downstream best-of-N and PPO results.

## Overoptimization

A reward model is a proxy. Gao, Schulman and Hilton (2022) used a fixed "gold" reward model to label data for a proxy and measured how gold reward changes as the policy is optimised against the proxy, by RL or by best-of-$n$ sampling. The relationship follows different functional forms for the two methods and their coefficients scale smoothly with reward-model size. This quantifies Goodhart's law for RLHF and motivates early stopping, KL control and reward-model ensembles.

## Practice

Open implementations are in TRL (Hugging Face), OpenRLHF and AI2's open-instruct, which also publish the evaluation suites used in the comparisons above.

# Plain explanation

Suppose you want a chatbot to be helpful and polite. It is hard to write a formula for "helpful". But it is easy for a person to look at two answers and say which one is better.

RLHF, short for reinforcement learning from human feedback, uses exactly that. People compare pairs of answers. A second program, called a reward model, learns to guess which answer people would pick. Then the chatbot is trained to produce answers that the reward model scores highly, while staying close to how it spoke before so it does not drift into strange behaviour.

A newer shortcut called DPO skips the reward model. It trains the chatbot straight from the pairs of answers: make the preferred answer more likely and the other less likely, relative to the starting model.

Both methods share a danger. The reward model is only a guess, so if the chatbot pushes too hard on it, it can find tricks that score well but are not actually good. Researchers have measured this effect and it gets worse the harder the model is pushed.

Scientists still argue about which approach is better. Some careful tests found the older, more complex approach with live practice slightly ahead of DPO, but the gap depends on the data used.

# Student explanation

**What it is for.** A language model trained only to predict the next word of internet text will happily continue a prompt with something rude, wrong or unhelpful. Qualities people want, such as helpfulness or a suitable tone, cannot be checked by a program, so they cannot simply be scored. Reinforcement learning from human feedback (RLHF) turns human comparisons ("answer A is better than answer B") into a training signal.

**Example.** For the prompt "explain photosynthesis to a ten-year-old", a labeller sees two model answers and picks the clearer one. Thousands of such choices become the data.

**The three-stage recipe (InstructGPT, 2022).**

1. _Supervised fine-tuning:_ continue training the model on human-written example answers.
2. _Reward model:_ train a second network $r_\phi(x,y)$ that scores answer $y$ to prompt $x$. It uses the Bradley–Terry model, $P(y_w \succ y_l)=\sigma\big(r_\phi(x,y_w)-r_\phi(x,y_l)\big)$: the probability that the preferred answer wins is the logistic (S-shaped) function $\sigma$ of the score difference. Training adjusts $r_\phi$ until preferred answers get higher scores.
3. _RL:_ optimise the language model (the policy) with PPO to raise the reward, minus a penalty $\beta\,\mathrm{KL}(\pi_\theta\Vert\pi_{\text{ref}})$. The KL divergence measures how far the new model's word probabilities drift from the supervised model's; the penalty stops the model wandering into strange text that happens to fool the reward model.

InstructGPT's labellers preferred a 1.3B-parameter model trained this way to the 175B-parameter GPT-3.

**DPO.** Rafailov et al. (2023) showed that the best policy for the KL-penalised objective has a closed form, so the reward can be rewritten in terms of the policy itself, $r=\beta\log(\pi_\theta/\pi_{\text{ref}})+\text{const}$. Substituting this into the Bradley–Terry loss gives Direct Preference Optimisation: an ordinary supervised loss on preference pairs, with no separate reward model and no sampling during training. It is cheaper and simpler than PPO.

**Open tension.** DPO learns from a fixed set of answers; PPO keeps sampling new answers from the current model and scoring them. Two careful comparisons (Xu et al., 2024; Ivison et al., NeurIPS 2024) found PPO ahead, by up to 2.5% in maths and 1.2% in general domains in the second, with preference-data quality mattering most.

**Overoptimisation.** A reward model is only a proxy for what people want. Gao, Schulman and Hilton (2022) showed that optimising hard against a proxy first raises and then lowers true quality, a measured case of Goodhart's law: when a measure becomes a target, it stops being a good measure.
