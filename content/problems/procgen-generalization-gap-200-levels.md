---
type: problem
slug: procgen-generalization-gap-200-levels
title: "Close the ProcGen generalisation gap: agents trained on 200 levels matching agents trained on unlimited levels"
entry: rl-sample-efficiency-benchmarks
status: OPEN
origin: Cobbe et al., Leveraging Procedural Generation to Benchmark Reinforcement Learning (2019)
ratings:
  difficulty: 48
  applicationValue: 30
  leverage: 28
workMix:
  theory: 25
  engineering: 20
  compute: 35
  empirical: 20
verification:
  route: REPRODUCTION
sources:
  - title: Cobbe et al. (2019). Leveraging Procedural Generation to Benchmark RL (arXiv)
    url: https://arxiv.org/abs/1912.01588
  - title: Cobbe et al. (2020). Phasic Policy Gradient (arXiv)
    url: https://arxiv.org/abs/2009.04416
timeline:
  - date: 2019-12-03
    title: ProcGen released
    body: Benchmark and recommended protocols published.
    source: https://arxiv.org/abs/1912.01588
explainer:
  oneLine: Train on 200 levels of a game and do as well on brand-new levels as someone trained on endless levels.
  flow:
    - Train on 200 fixed levels
    - Test on unseen levels
    - Compare with unlimited-level agent
    - Find where the gap remains
    - Try better regularisation
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: procedural generation
      meaning: Making levels automatically with an algorithm, so each one is different.
      link: https://en.wikipedia.org/wiki/Procedural_generation
    - term: generalisation gap
      meaning: The drop in performance from training situations to new ones.
      link: https://en.wikipedia.org/wiki/Generalization_error
    - term: data augmentation
      meaning: Training on altered copies of the data, such as shifted or recoloured images, to help a model ignore irrelevant details.
      link: https://en.wikipedia.org/wiki/Data_augmentation
    - term: regularisation
      meaning: Techniques that stop a model from fitting its training data too specifically.
      link: https://en.wikipedia.org/wiki/Regularization_(mathematics)
    - term: PPO
      meaning: Proximal Policy Optimization, the default RL algorithm used as a baseline.
      link: /research/policy-gradient-ppo
    - term: random seed
      meaning: The starting number of a random process. Different seeds give different training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: overfitting
      meaning: Fitting the training data so closely, including its quirks, that performance on new data gets worse.
      link: https://en.wikipedia.org/wiki/Overfitting
    - term: hyperparameter
      meaning: A setting chosen before training, such as the learning rate, rather than learned from data.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
  readFirst:
    - title: Leveraging Procedural Generation to Benchmark RL (arXiv)
      url: https://arxiv.org/abs/1912.01588
      why: The benchmark paper.
    - title: Phasic Policy Gradient (arXiv)
      url: https://arxiv.org/abs/2009.04416
      why: A method that improved sample efficiency on ProcGen.
    - title: "Wikipedia: Generalization error"
      url: https://en.wikipedia.org/wiki/Generalization_error
      why: Why train and test performance differ.
site:
  aiReviewed: true
---

In ProcGen easy mode, train an agent on the first 200 levels of each of the 16 games for 25M timesteps. The ProcGen paper recommends this training-set size and step count for easy difficulty and evaluates on the full level distribution. Target (proposed): mean normalised test return, averaged over all 16 games and at least 5 seeds, within 5% (relative) of the return of the same algorithm, architecture and step budget trained on unlimited levels, with no game-specific tuning and no hand-designed augmentation specific to a game.

# State of the art

The ProcGen paper reports that agents trained on small level sets generalise worse and that larger models improve both sample efficiency and generalisation. Phasic Policy Gradient (2020) improved sample efficiency over PPO there. The size of the remaining gap depends on the method (augmentation, regularisation, representation learning). No maintained leaderboard reports the 200-level versus unlimited-level comparison for all 16 games under one protocol, so the target is defined relative to a reference that the claimant trains under identical settings, and the 5% threshold is a DARC-proposed target.

# Applications

Generalisation from limited environment variation is a prerequisite for deploying RL in the real world, where the training set of scenes is finite.

# Resolution criteria

A released method meeting the threshold over 16 games and 5 seeds, rerun by an independent party.

# Rating rationale

Difficulty 48: generalisation from limited variation is a core RL weakness and partial methods (augmentation, regularisation, decoupled policy and value) leave game-specific gaps without a principled fix. Application value 30: relevant to sim-to-real transfer only indirectly. Leverage 28: benchmark-specific.

# Work mix rationale

Needs new regularisation or representation ideas as well as experiments across all 16 games.

# Verification

Benchmark: ProcGen, 16 games, easy difficulty, 200 training levels, 25M timesteps (the recommended easy-mode protocol). Metric: mean normalised return $(R-R_{\min})/(R_{\max}-R_{\min})$ on the full level distribution, averaged over games, with the same algorithm trained on unlimited levels as the reference. Threshold: test return of the 200-level agent at least 95% of the reference. Seeds: at least 5, reported with bootstrap CIs. Compute: stated; 25M timesteps over 16 games is roughly 400M environment steps per seed.

# Plain explanation

Imagine learning to play a game by practising on only 200 specific levels, then being tested on levels you have never seen. If you just memorised those 200, you will do badly. If you learned the real skills, you will do fine.

ProcGen is a set of 16 games whose levels are made by a program, so there are practically endless new ones. It is used to test whether AI agents learn skills or memorise. Early results showed agents trained on few levels do much worse on new ones than agents trained on many.

This problem asks for an agent trained on just 200 levels per game that does almost as well on new levels (within five percent) as the same agent trained on endless levels, with no tricks designed for individual games.

Why it matters: real-world robots and software agents also train on a limited set of situations and must work in new ones. If AI can close this gap on games, it is a step toward closing it in the world.

Researchers have tried varying the images, adding noise and building in known structure, but a general answer that works on all 16 games is still open.

# Student explanation

**Why it matters.** An agent that only works in the exact levels it trained on is useless in the real world, where every kitchen or road is slightly different. ProcGen tests this directly: its 16 video games generate their levels by a program, so there is an endless supply, and an agent can be trained on a few levels and tested on new ones.

**Example.** In the game CoinRun the agent must reach a coin at the end of a platform level. Trained on 200 levels, an agent may learn to jump at memorised positions rather than to jump over obstacles wherever they are, and then fail on a new level.

**The protocol.** Following Cobbe et al. (2019), easy mode trains on 200 fixed levels for 25 million timesteps per game and tests on the full distribution of levels. Each game's return $R$ is normalised as $(R-R_{\min})/(R_{\max}-R_{\min})$ so that games with different point scales can be averaged: 0 is the game's minimum and 1 its maximum score.

**The generalisation gap.** Compare the 200-level agent's test score with the score of the same algorithm, network and step budget trained on unlimited levels, which sees a new level almost every episode and so cannot memorise. The difference is the generalisation gap. It is the RL version of overfitting: a high-degree polynomial fitted through ten noisy lab points can match them perfectly and predict new points badly.

**Approaches.** Data augmentation (randomly cropping or recolouring the screen so that irrelevant details vary); regularisation (penalties or noise during training that discourage memorisation, such as weight decay or dropout); larger and better network architectures; and separating the training of the policy from the training of the value estimate, as in Phasic Policy Gradient (2020), which improved sample efficiency over PPO on ProcGen. The ProcGen paper itself found that larger networks improved both sample efficiency and generalisation.

**What is unknown.** No method is known to close the gap across all 16 games at once without tricks tuned to particular games, and there is no principled account of which invariances an agent must learn for each game. Published gap sizes vary with method and setup, so a fresh measurement of the unlimited-level reference is part of any claim.

**The target (a proposed threshold).** Averaged over the 16 games and at least 5 random seeds, the 200-level agent's test return is at least 95% of the unlimited-level reference, with one set of hyperparameters for all games. Supporting evidence should include ablations (removing each component to show which one closes the gap) and a rerun with a different random draw of the 200 training levels. The compute is about 400 million environment steps per seed.
