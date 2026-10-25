---
type: entry
slug: rlvr-grpo-reasoning
title: RL with verifiable rewards and GRPO for reasoning models
field: reinforcement-learning
kind: FRONTIER
status: ACTIVE
summary: Training language models with reinforcement learning against rewards a program can check, such as exact answers or unit tests, usually with Group Relative Policy Optimization (GRPO). It drives current reasoning models.
reliedOn: Open and proprietary reasoning models (DeepSeek-R1, Kimi k1.5, Tulu 3 and their descendants) are post-trained this way; the recipe also underlies the open RL training frameworks that other labs build on.
dependsOn:
  - policy-gradient-ppo
  - rlhf-preference-optimization
  - transformer-architecture
references:
  - title: "Shao et al. (2024). DeepSeekMath: introduces GRPO (arXiv)"
    url: https://arxiv.org/abs/2402.03300
    kind: paper
  - title: DeepSeek-AI (2025). DeepSeek-R1 (arXiv)
    url: https://arxiv.org/abs/2501.12948
    kind: paper
  - title: DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning (Nature, 2025)
    url: https://doi.org/10.1038/s41586-025-09422-z
    kind: paper
  - title: Lambert et al. (2024). Tulu 3 (arXiv)
    url: https://arxiv.org/abs/2411.15124
    kind: paper
  - title: Yu et al. (2025). DAPO (arXiv)
    url: https://arxiv.org/abs/2503.14476
    kind: paper
  - title: Liu et al. (2025). Understanding R1-Zero-Like Training (arXiv preprint)
    url: https://arxiv.org/abs/2503.20783
    kind: paper
  - title: Kimi Team (2025). Kimi k1.5 (arXiv)
    url: https://arxiv.org/abs/2501.12599
    kind: paper
  - title: Yue et al. (2025). Does RL Really Incentivize Reasoning Capacity Beyond the Base Model? (arXiv preprint)
    url: https://arxiv.org/abs/2504.13837
    kind: paper
  - title: Liu et al. (2025). ProRL (arXiv preprint)
    url: https://arxiv.org/abs/2505.24864
    kind: paper
  - title: "The Invisible Leash: Why RLVR May or May Not Escape Its Origin (arXiv preprint)"
    url: https://arxiv.org/abs/2507.14843
    kind: paper
  - title: Khatri et al. (2025). The Art of Scaling Reinforcement Learning Compute for LLMs (arXiv preprint)
    url: https://arxiv.org/abs/2510.13786
    kind: paper
  - title: verl documentation
    url: https://verl.readthedocs.io
    kind: docs
timeline:
  - date: 2024-02-05
    title: GRPO introduced
    body: DeepSeekMath proposes Group Relative Policy Optimization, a PPO variant without a value network.
    source: https://arxiv.org/abs/2402.03300
  - date: 2024-11-22
    title: RLVR named
    body: The Tulu 3 report describes RL with verifiable rewards as a post-training stage for an open model family.
    source: https://arxiv.org/abs/2411.15124
  - date: 2025-01-22
    title: DeepSeek-R1 and Kimi k1.5
    body: Two technical reports describe RL against verifiable rewards producing long chain-of-thought reasoning; R1-Zero uses no supervised reasoning data.
    source: https://arxiv.org/abs/2501.12948
  - date: 2025-03-18
    title: DAPO open system
    body: ByteDance Seed and collaborators release an open large-scale RL system reporting 50 AIME 2024 points with Qwen2.5-32B.
    source: https://arxiv.org/abs/2503.14476
  - date: 2025-04-18
    title: Pass@k challenge to RLVR
    body: Yue et al. (preprint) report that RLVR-trained models do not exceed base models at large pass@k.
    source: https://arxiv.org/abs/2504.13837
  - date: 2025-05-30
    title: ProRL counter-evidence
    body: NVIDIA researchers (preprint) report that prolonged RL expands the reasoning boundary on tasks where base models fail entirely.
    source: https://arxiv.org/abs/2505.24864
  - date: 2025-10-15
    title: RL scaling study
    body: A 400,000 GPU-hour study (preprint) fits sigmoidal compute curves and extrapolates to a 100,000 GPU-hour run.
    source: https://arxiv.org/abs/2510.13786
explainer:
  oneLine: Training AI to reason by rewarding answers a computer can check, like correct maths results.
  flow:
    - Model writes several answers
    - Program checks each answer
    - Compare answers within the group
    - Reinforce the better ones
    - Does it learn new skills?
  glossary:
    - term: language model
      meaning: A neural network trained to predict the next piece of text, which can then write answers, code and essays.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: reward
      meaning: A number the environment gives after each action, telling the agent how well it is doing.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: PPO
      meaning: "Proximal Policy Optimization: a popular RL algorithm that limits how far each update can move the policy."
      link: /research/policy-gradient-ppo
    - term: KL divergence
      meaning: A measure of how different one probability distribution is from another. Used to keep a new policy close to an old one.
      link: https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence
    - term: chain of thought
      meaning: Step-by-step reasoning written out by the model before it gives a final answer.
      link: https://en.wikipedia.org/wiki/Chain-of-thought_prompting
    - term: pass@k
      meaning: The chance that at least one of k tries at a problem is correct.
      link: https://arxiv.org/abs/2107.03374
    - term: base model
      meaning: A language model after pretraining on text but before the extra training that makes it follow instructions or reason.
      link: https://en.wikipedia.org/wiki/Foundation_model
    - term: distillation
      meaning: Training a model to imitate a stronger model's outputs.
      link: https://en.wikipedia.org/wiki/Knowledge_distillation
    - term: critic
      meaning: A second network that estimates how good a situation is, used by some RL methods.
      link: https://en.wikipedia.org/wiki/Actor-critic_algorithm
    - term: standard deviation
      meaning: "A measure of spread: roughly the typical distance of values from their average."
      link: https://en.wikipedia.org/wiki/Standard_deviation
    - term: unit test
      meaning: A small automatic program that checks whether a piece of code gives the expected output on a given input.
      link: https://en.wikipedia.org/wiki/Unit_testing
    - term: advantage
      meaning: How much better an action turned out than the average or expected outcome; positive advantages are reinforced, negative ones discouraged.
      link: /research/policy-gradient-ppo
  readFirst:
    - title: DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning (Nature)
      url: https://doi.org/10.1038/s41586-025-09422-z
      why: The main R1 result in a journal paper.
    - title: DeepSeekMath, where GRPO was introduced (arXiv)
      url: https://arxiv.org/abs/2402.03300
      why: Shows the method in context.
    - title: Does RL Really Incentivize Reasoning Capacity Beyond the Base Model? (arXiv preprint)
      url: https://arxiv.org/abs/2504.13837
      why: The sharpest statement of the sceptical view.
site:
  published: true
  aiReviewed: true
---

## What changed

RLHF needs a learned reward model, which can be exploited. For maths, code and some logic tasks, correctness can be checked by a program: compare a final answer, run unit tests. Reinforcement learning with verifiable rewards (RLVR; the name was introduced in the Tulu 3 report, 2024) optimises the model directly on such a binary or rule-based reward. DeepSeek-R1-Zero (DeepSeek-AI, 2025) applied RL with rule-based accuracy and format rewards to a pretrained base model with no supervised reasoning demonstrations and reported emergent behaviours such as self-reflection and verification; the final paper appeared in Nature in September 2025.

## GRPO

PPO needs a learned value network the size of the policy to compute advantages, which is costly for large language models. Group Relative Policy Optimization, introduced in DeepSeekMath (Shao et al., 2024), samples a group of $G$ responses per prompt, scores them, and uses the group-normalised reward as the advantage of every token in a response:

$\hat A_i=\frac{r_i-\operatorname{mean}(r_1,\dots,r_G)}{\operatorname{std}(r_1,\dots,r_G)}.$

It then applies a PPO-style clipped objective with a KL penalty to a reference model. No critic is trained.

## Known refinements and criticisms

- **DAPO** (Yu et al., 2025) lists four changes: decoupled clip ranges, dynamic sampling that discards groups with all-correct or all-wrong rewards, token-level loss, and overlong-response reward shaping. It reports 50 points on AIME 2024 with Qwen2.5-32B and releases code built on verl.
- **Dr. GRPO** (Liu et al., 2025) argues that the length normalisation and the standard-deviation term bias GRPO toward longer incorrect responses, and proposes an unbiased variant. The same study finds that some Qwen2.5 base models already show strong reasoning behaviour without a prompt template, which complicates attribution of gains to RL.
- **Kimi k1.5** (2025) reports a critic-free long-context RL recipe with comparable results.

## The central scientific question

Does RLVR give a model reasoning ability it did not have, or does it make the model sample already-latent solutions more reliably? Yue et al. (2025, preprint) evaluate pass@$k$ with $k$ up to 128, 256 or 1024 depending on the benchmark and report that RL-trained models win at small $k$ but base models catch up and sometimes overtake at large $k$, concluding that RLVR "narrows coverage" and that distillation from a stronger teacher, unlike RL, does extend the boundary. ProRL (NVIDIA, 2025, preprint) reports that prolonged RL with KL control and reference resets does expand the boundary, including problems the base model never solves. The "invisible leash" analysis (2025, preprint) finds, question by question, that lost verified successes outweigh new ones at the tested budgets. The question is unsettled and depends on base model, task, training length and sampling budget.

## Compute and scaling

The Art of Scaling RL Compute (Khatri et al., 2025, preprint) fits sigmoidal compute-to-performance curves over more than 400,000 GPU-hours and reports that stable recipes extrapolate from small runs to a single 100,000 GPU-hour run.

## Practice

The main open training stacks are verl, TRL and the Open-R1 reproduction effort.

# Plain explanation

Some questions have answers that a program can check. A maths problem has a right answer. A piece of code either passes its tests or does not. For these questions we do not need people to judge each answer. We can give the AI a point for a correct answer and none for a wrong one.

Researchers use this to teach reasoning. The AI writes out a long chain of thought, then gives an answer. If the answer is right, whatever way of thinking it used gets reinforced. After a lot of practice, models start to check their own work, try other approaches and fix mistakes, even though nobody showed them how.

A popular training method for this is called GRPO. For each question, the model writes several answers. The method then compares each answer with the others in the group: better than the group average gets encouraged, worse gets discouraged. This avoids training a second large network to judge.

A big question remains open. Does this practice teach the model something truly new, or does it only make the model more reliable at things it could already sometimes do? Different careful studies give different answers, and the result seems to depend on the model, the task and how long the training runs.

# Student explanation

**What it is for.** For many maths and programming tasks a computer can check the answer: compare a final number with the known solution, or run unit tests on generated code. Reinforcement learning with verifiable rewards (RLVR) uses that check as the reward. This removes the learned reward model of RLHF and the risk of the model exploiting its flaws. It is how current reasoning models are post-trained to write long step-by-step solutions (chains of thought) before answering.

**Example.** The prompt is a competition maths problem whose answer is 204. The model writes eight attempts; the three ending in 204 get reward 1, the other five get 0.

**GRPO.** PPO needs a critic, a second network as large as the language model that predicts how good each partial answer is, which roughly doubles the memory needed. Group Relative Policy Optimization (GRPO, introduced in DeepSeekMath, 2024) drops it. It samples a group of $G$ answers to the same prompt and gives answer $i$ the advantage
$\hat A_i=\frac{r_i-\mathrm{mean}(r_1,\dots,r_G)}{\mathrm{std}(r_1,\dots,r_G)},$
its reward minus the group average, divided by the standard deviation (the typical spread of the rewards). In words: an answer is reinforced if it beat its siblings. In the example the three correct answers get a positive advantage and the five wrong ones a negative one. The update then uses PPO's clipped objective plus a KL penalty that keeps the model near a reference copy.

**R1-Zero and refinements.** DeepSeek-R1-Zero (2025) applied this to a pretrained base model with no example reasoning and reported self-checking behaviour emerging during training; the work appeared in Nature in September 2025. DAPO (2025) changed four details (separate clip ranges, discarding groups where all answers score the same and therefore carry no signal, a token-level loss, and length shaping) and reported 50 points on AIME 2024 with Qwen2.5-32B. Dr. GRPO argues that GRPO's normalisations bias it toward long wrong answers.

**The open question.** pass@$k$ is the probability that at least one of $k$ samples is correct. If RL only sharpens what the base model could already do, the RL model wins at $k=1$ but the base model catches up at large $k$. Yue et al. (2025, preprint) report exactly this pattern; ProRL (2025, preprint) reports the opposite after much longer training. A 2025 preprint (ScaleRL, more than 400,000 GPU-hours) fits S-shaped curves of performance against compute and predicted a single run scaled to 100,000 GPU-hours.
