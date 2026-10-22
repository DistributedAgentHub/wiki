---
type: entry
slug: model-based-rl-world-models
title: Model-based RL and world models (MuZero, Dreamer)
field: reinforcement-learning
kind: ALGORITHM
status: ACTIVE
summary: "RL agents that learn a model of the environment and plan or train inside it: MuZero plans with search over a learned latent model, Dreamer learns behaviour by imagining rollouts in a learned world model."
reliedOn: World models are the main route to sample-efficient RL and to training agents where real interaction is slow or unsafe; MuZero-family agents and Dreamer set many of the sample-efficiency records on Atari and control benchmarks.
dependsOn:
  - mcts-alphazero
  - policy-gradient-ppo
references:
  - title: Schrittwieser et al. (2020). Mastering Atari, Go, chess and shogi by planning with a learned model
    url: https://doi.org/10.1038/s41586-020-03051-4
    kind: paper
  - title: Ye et al. (2021). Mastering Atari Games with Limited Data / EfficientZero (NeurIPS 2021)
    url: https://arxiv.org/abs/2111.00210
    kind: paper
  - title: Wang et al. (2024). EfficientZero V2 (arXiv preprint)
    url: https://arxiv.org/abs/2403.00564
    kind: paper
  - title: Hafner et al. (2019). Dream to Control (arXiv)
    url: https://arxiv.org/abs/1912.01603
    kind: paper
  - title: Hafner et al. (2020). Mastering Atari with Discrete World Models (arXiv)
    url: https://arxiv.org/abs/2010.02193
    kind: paper
  - title: Hafner et al. (2025). Mastering diverse control tasks through world models (Nature)
    url: https://doi.org/10.1038/s41586-025-08744-2
    kind: paper
  - title: Hafner et al. (2025). Training Agents Inside of Scalable World Models (arXiv preprint)
    url: https://arxiv.org/abs/2509.24527
    kind: paper
  - title: Kaiser et al. (2019). Model-Based Reinforcement Learning for Atari (arXiv)
    url: https://arxiv.org/abs/1903.00374
    kind: paper
  - title: Hansen et al. (2023). TD-MPC2 (arXiv)
    url: https://arxiv.org/abs/2310.16828
    kind: paper
timeline:
  - date: 2019-03-01
    title: SimPLe and the Atari 100k benchmark
    body: Kaiser et al. use video-prediction models for sample-efficient Atari play.
    source: https://arxiv.org/abs/1903.00374
  - date: 2019-11-19
    title: MuZero
    body: Planning with a learned model matches AlphaZero without knowing the rules (arXiv version; Nature December 2020).
    source: https://arxiv.org/abs/1911.08265
  - date: 2019-12-03
    title: Dreamer
    body: Behaviours learned by latent imagination from pixels.
    source: https://arxiv.org/abs/1912.01603
  - date: 2021-10-30
    title: EfficientZero
    body: Ye et al. (NeurIPS 2021) report 194.3% mean and 109.0% median human-normalised score on Atari 100k.
    source: https://arxiv.org/abs/2111.00210
  - date: 2023-01-10
    title: DreamerV3
    body: One configuration across more than 150 tasks; first to collect Minecraft diamonds from scratch (Nature, 2025).
    source: https://arxiv.org/abs/2301.04104
  - date: 2025-09-29
    title: Dreamer 4
    body: Preprint reports diamonds in Minecraft from offline data alone, in 0.7% of 60-minute episodes.
    source: https://arxiv.org/abs/2509.24527
explainer:
  oneLine: AI agents that learn how the world works, then practise inside their own imagination.
  flow:
    - Act and record what happens
    - Learn to predict what comes next
    - Plan or practise in the model
    - Improve behaviour from imagined runs
    - Check against the real world
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts its behaviour to collect more reward over time."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: policy
      meaning: The rule an agent uses to choose an action in each situation. In deep RL it is usually a neural network.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning#Policy
    - term: world model
      meaning: A learned program that predicts what the environment will do next, so an agent can plan or practise inside it.
      link: https://arxiv.org/abs/1912.01603
    - term: Monte Carlo tree search
      meaning: A planning method that tries many simulated move sequences and focuses on the promising ones.
      link: https://en.wikipedia.org/wiki/Monte_Carlo_tree_search
    - term: Atari benchmark
      meaning: A set of classic Atari 2600 video games used to compare RL agents.
      link: https://ale.farama.org
    - term: latent state
      meaning: A compact hidden description of a situation that a network invents for itself.
      link: https://en.wikipedia.org/wiki/Latent_space
    - term: sample efficiency
      meaning: How little experience a learner needs to reach a given skill.
      link: https://en.wikipedia.org/wiki/Sample_complexity
    - term: Minecraft
      meaning: A sandbox video game used as a hard long-horizon test for AI agents.
      link: https://en.wikipedia.org/wiki/Minecraft
    - term: neural network
      meaning: A large function with many adjustable numbers (weights), fitted to data by gradient descent.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: actor-critic
      meaning: "An RL design with two networks: an actor that chooses actions and a critic that estimates how good situations are, used to train the actor."
      link: https://en.wikipedia.org/wiki/Actor-critic_algorithm
    - term: human-normalised score
      meaning: A game score rescaled so that 0 is random play and 1 is the human reference score.
      link: /research/rl-sample-efficiency-benchmarks
    - term: transformer
      meaning: A neural-network architecture built on attention, used in language models and here to predict future video frames.
      link: /research/transformer-architecture
  readFirst:
    - title: "Wikipedia: MuZero"
      url: https://en.wikipedia.org/wiki/MuZero
      why: Plain overview of the learned-model idea.
    - title: DreamerV3 project page and paper (arXiv)
      url: https://arxiv.org/abs/2301.04104
      why: Abstract states the main claims.
    - title: "Wikipedia: Model-based reinforcement learning"
      url: https://arxiv.org/abs/1912.01603
      why: Short background.
site:
  published: true
  aiReviewed: true
---

## Why learn a model

Model-free methods such as PPO need millions to billions of environment steps. Humans learn Atari games in minutes. A learned model of the environment lets an agent reuse each real transition many times by planning or training on simulated transitions. The difficulty is compounding model error: policies exploit mistakes in the model.

## MuZero: planning in a learned latent space

AlphaZero needs the rules of the game. MuZero (Schrittwieser et al., Nature 2020) learns three functions: a representation from observations to a latent state, a dynamics function that predicts the next latent state and reward, and a prediction function giving policy and value. The latent model is trained only to predict quantities that matter for planning (reward, value, policy), not to reconstruct pixels, and MCTS runs entirely in latent space. It matched AlphaZero in Go, chess and shogi and set a state of the art on Atari at publication.

EfficientZero (Ye et al., 2021) adds a self-supervised consistency loss, a value-prefix prediction and off-policy corrections, and reports 194.3% mean and 109.0% median human-normalised score on Atari 100k, using two hours of real-time game experience (NeurIPS 2021). EfficientZero V2 (2024) extends it to continuous control with Gumbel search.

## Dreamer: learning in imagination

Dreamer (Hafner et al., 2019) learns a recurrent latent world model from pixels and trains an actor and critic purely on rollouts imagined in latent space. DreamerV2 reached human-level on Atari with a discrete latent. DreamerV3 (arXiv 2023; Nature 2025) uses one set of hyperparameters across more than 150 tasks and is reported as the first algorithm to collect diamonds in Minecraft from scratch without human data or curricula. Dreamer 4 (2025, preprint) trains a transformer world model on the 2,541 hours of VPT contractor gameplay and reports obtaining diamonds from offline data alone, in 0.7% of 60-minute evaluation episodes (1,000 episodes). No official code release has been published; unofficial reimplementations exist.

## Related approaches

- **SimPLe** (Kaiser et al., 2019) used video prediction for Atari and started the Atari 100k benchmark.
- **TD-MPC2** (Hansen et al., 2023) runs local trajectory optimisation in the latent space of a decoder-free model and reports results over 104 online RL tasks.
- **Transformer and diffusion world models** (IRIS, DIAMOND, Simulus and others) replace recurrent models and are an active line.

## Trade-offs

Search-based agents (MuZero, EfficientZero) can be strong with small data but cost more compute per step; the BBF paper reports that EfficientZero trains in about 8.5 hours but needs about 512 CPU cores and four GPUs. Dreamer-style actor-critics in imagination are cheaper but can lag on tasks needing precise multi-step lookahead. Whether world models scale as language models do, and whether imagined data can substitute for real interaction in robotics, is an open question.

# Plain explanation

A person learning a video game does not need thousands of attempts. After a few minutes they understand how the game works and can imagine what would happen if they pressed a button. Most computer learners cannot do this. They learn by trial and error and may need millions of tries.

Model-based reinforcement learning tries to fix that. The program learns a model of the world: a guess of what happens next after each action. With that model it can plan ahead, or it can practise in imagined games without touching the real world.

Two famous families do this. MuZero plans by searching through possible futures in its learned model, as a chess player would. Dreamer practises by imagining many short futures and learning from them. Dreamer was reported to be the first system to collect diamonds in Minecraft without human examples, and a later version reported doing it using only recorded videos of players.

The risk is that the learned model is wrong in small ways. The agent may exploit those mistakes and do well in imagination but badly in reality. Making models accurate enough over long stretches is the main open challenge.

# Student explanation

**What it is for.** Model-free agents such as PPO learn only from real experience and typically need millions of game frames; a person learns a simple Atari game in minutes. If the agent instead learns a model of how its world behaves, it can practise inside that model and reuse each real experience many times. This is model-based RL, and the learned model is called a world model.

**Example.** After watching a few hundred frames of Breakout, a world model can predict where the ball will be in the next frame given the paddle's movement. The agent can then try thousands of imagined paddle strategies without touching the real game.

**The core loop.** Write the environment as $s_{t+1}=f(s_t,a_t)$ with reward $r_t$: the next state depends on the current state and the action. A world model $\hat f$ is a neural network fitted to recorded transitions, much as a curve is fitted to lab data. The catch is compounding error: a small prediction error per step grows over a long imagined rollout, and the policy learns to exploit the model's mistakes.

**MuZero: plan in a compressed space.** MuZero (Nature, 2020) does not try to predict pixels. It maps an observation to a latent state, a learned vector that summarises what matters, and learns to predict only the next latent state, the reward, the value and the move probabilities. Monte Carlo tree search then plans entirely in this latent space. It matched AlphaZero at Go, chess and shogi without being told the rules. EfficientZero (NeurIPS 2021) added a consistency loss and reported 194.3% mean and 109.0% median human-normalised score on Atari 100k with two hours of game experience; it trained in about 8.5 hours but used about 512 CPU cores and 4 GPUs.

**Dreamer: learn in imagination.** Dreamer learns a recurrent latent model from pixels and trains an actor (the policy) and a critic (a value estimator) purely on imagined rollouts. DreamerV3 (Nature, 2025) used one set of settings across more than 150 tasks and was the first algorithm to collect Minecraft diamonds from scratch without human data. Dreamer 4 (2025, preprint) trained a transformer world model on 2,541 hours of recorded human Minecraft play and, learning only inside that model, obtained diamonds in 0.7% of 60-minute episodes, the first agent to do so from offline data alone.

**Trade-offs.** Search-based agents (MuZero, EfficientZero) are strong with little data but spend much computation per step. Actor-critics trained in imagination are cheaper but weaker where precise lookahead matters. Whether world models keep improving with scale, as language models do, is unsettled.
