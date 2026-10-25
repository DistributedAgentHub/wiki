---
type: entry
slug: rl-sample-efficiency-benchmarks
title: "RL benchmarks and evaluation: Atari 100k, ProcGen, rliable"
field: reinforcement-learning
kind: LIBRARY
status: ACTIVE
summary: "The shared environments and statistics used to compare RL agents: the Arcade Learning Environment and its 100k-step variant for sample efficiency, ProcGen for generalisation, rliable for intervals."
reliedOn: Claims of progress in deep RL are stated on these benchmarks; sample-efficiency and generalisation records, and the evaluation protocol used to compare them, define what counts as an improvement.
dependsOn:
  - model-based-rl-world-models
  - policy-gradient-ppo
references:
  - title: Bellemare et al. (2013). The Arcade Learning Environment (JAIR)
    url: https://doi.org/10.1613/jair.3912
    kind: paper
  - title: Mnih et al. (2015). Human-level control through deep reinforcement learning
    url: https://doi.org/10.1038/nature14236
    kind: paper
  - title: Kaiser et al. (2019). Model-Based RL for Atari / Atari 100k (arXiv)
    url: https://arxiv.org/abs/1903.00374
    kind: paper
  - title: Schwarzer et al. (2023). Bigger, Better, Faster (arXiv)
    url: https://arxiv.org/abs/2305.19452
    kind: paper
  - title: Cobbe et al. (2019). Leveraging Procedural Generation to Benchmark RL (arXiv)
    url: https://arxiv.org/abs/1912.01588
    kind: paper
  - title: Cobbe et al. (2020). Phasic Policy Gradient (arXiv)
    url: https://arxiv.org/abs/2009.04416
    kind: paper
  - title: Agarwal et al. (2021). Deep RL at the Edge of the Statistical Precipice (arXiv)
    url: https://arxiv.org/abs/2108.13264
    kind: paper
  - title: ALE documentation
    url: https://ale.farama.org
    kind: docs
timeline:
  - date: 2013-06-14
    title: ALE
    body: The Arcade Learning Environment is published as a platform for general-agent evaluation.
    source: https://doi.org/10.1613/jair.3912
  - date: 2015-02-25
    title: DQN human-level on Atari
    body: Deep Q-networks reach human-level on many Atari games.
    source: https://doi.org/10.1038/nature14236
  - date: 2019-03-01
    title: Atari 100k
    body: SimPLe introduces the 100k-step sample-efficiency setting.
    source: https://arxiv.org/abs/1903.00374
  - date: 2019-12-03
    title: ProcGen
    body: 16 procedurally generated environments for generalisation benchmarks.
    source: https://arxiv.org/abs/1912.01588
  - date: 2021-08-30
    title: Statistical precipice
    body: Agarwal et al. recommend IQM, optimality gap and bootstrap confidence intervals for deep RL evaluation.
    source: https://arxiv.org/abs/2108.13264
  - date: 2023-05-30
    title: BBF
    body: A value-based agent reports IQM 1.045 on Atari 100k using a single GPU.
    source: https://arxiv.org/abs/2305.19452
explainer:
  oneLine: The shared test games and scoring rules used to compare how fast and how well AI agents learn.
  flow:
    - Pick standard games and a scoring rule
    - Limit the data or levels
    - Run many random seeds
    - Report averages with uncertainty
    - Compare against human level
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts its behaviour to collect more reward over time."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: Atari benchmark
      meaning: A set of classic Atari 2600 video games used to compare RL agents.
      link: https://ale.farama.org
    - term: random seed
      meaning: The starting number that fixes a random process. Different seeds give different training runs, so results are averaged over several.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: human-normalised score
      meaning: A score rescaled so that random play is 0 and a reference human is 1.
      link: https://ale.farama.org
    - term: IQM
      meaning: "Interquartile mean: the average of the middle half of the scores, which ignores extreme games."
      link: https://en.wikipedia.org/wiki/Interquartile_mean
    - term: procedural generation
      meaning: Making game levels automatically by an algorithm, so each one is different.
      link: https://en.wikipedia.org/wiki/Procedural_generation
    - term: generalisation
      meaning: Doing well on new cases not seen in training.
      link: https://en.wikipedia.org/wiki/Generalization_error
    - term: confidence interval
      meaning: A range that likely contains the true value, given the randomness of the experiments.
      link: https://en.wikipedia.org/wiki/Confidence_interval
    - term: bootstrap
      meaning: Estimating uncertainty by resampling the observed results many times with replacement and recomputing the statistic each time.
      link: https://en.wikipedia.org/wiki/Bootstrapping_(statistics)
    - term: overfitting
      meaning: Fitting the training data so closely, including its quirks, that performance on new data gets worse.
      link: https://en.wikipedia.org/wiki/Overfitting
    - term: median
      meaning: The middle value when results are sorted.
      link: https://en.wikipedia.org/wiki/Median
  readFirst:
    - title: Deep RL at the Edge of the Statistical Precipice (arXiv)
      url: https://arxiv.org/abs/2108.13264
      why: Why and how to report RL results.
    - title: ALE documentation
      url: https://ale.farama.org
      why: Describes the Atari environment.
    - title: Leveraging Procedural Generation to Benchmark RL (arXiv)
      url: https://arxiv.org/abs/1912.01588
      why: The ProcGen paper and protocol.
site:
  published: true
  aiReviewed: true
---

## Arcade Learning Environment

The Arcade Learning Environment (ALE; Bellemare et al., 2013) wraps Atari 2600 games as an RL testbed with a common interface. DQN (Mnih et al., Nature 2015) reached human-level on many games using 200 million frames per game, the setting that defined deep RL benchmarking. Scores are normalised so that 0 is a random policy and 1 is a human reference: the _human-normalised score_. Aggregates over games include the mean, the median and, as recommended below, the interquartile mean (IQM).

## Atari 100k

Kaiser et al. (2019) introduced a low-data variant: 100,000 agent steps per game (400,000 frames, about two hours of play) on 26 games, to match human learning speed. Progress since: SimPLe (2019), data-augmented model-free agents, EfficientZero (NeurIPS 2021; model-based with search, 109.0% median human-normalised score), and BBF (Schwarzer et al., 2023), a value-based agent that scales the network and reports IQM 1.045 and mean 2.247 with about 6 to 10 hours on a single GPU in the paper's accounts. The BBF authors note that no agent was human-level on all 26 games and propose goals such as matching Rainbow's final performance within two hours of gameplay.

## ProcGen

ProcGen Benchmark (Cobbe et al., 2019) has 16 procedurally generated game environments. Agents train on a limited number of levels and are tested on the full level distribution, which measures generalisation as well as sample efficiency. The paper recommends 200 training levels and 25 million timesteps in "easy" difficulty, and normalised return $(R-R_{\min})/(R_{\max}-R_{\min})$ averaged over games. Phasic Policy Gradient (Cobbe et al., 2020) reported large sample-efficiency gains over PPO there.

## Statistical protocol

Agarwal et al. (2021) showed that point estimates of mean or median scores over a few runs can mislead. Their recommendations, implemented in the rliable library, are to report interquartile mean, optimality gap, performance profiles and stratified bootstrap confidence intervals, and to treat seeds-per-task as part of the result. On Atari 100k they found substantial discrepancies between published point estimates and interval estimates.

## Why it matters for claims

Whether a paper says "human-level" depends on the aggregate (median versus IQM versus all games), the number of seeds, and the compute used (GPU-hours, CPU cores). Reproducing a claim therefore needs the code, the aggregate, and the compute budget stated together.

# Plain explanation

To say one learning program is better than another, you need a fair test. In reinforcement learning, the tests are mostly video games. One famous set is old Atari games. Another set, ProcGen, makes new random levels each time, so a program cannot simply memorise one level.

Two different questions are asked. How quickly does a program learn? The "Atari 100k" test gives the program only about two hours of game time, which is closer to how long a human needs. And does the skill carry over? ProcGen trains on a limited set of levels and tests on new ones.

Scores are usually compared to a human player. A score of one means about human level.

A third, quieter issue is statistics. Training runs are random: the same program can score quite differently twice. A well-known 2021 paper showed that many results were reported from a few runs with misleading summary numbers, and recommended better ways to average and to report uncertainty.

So when someone claims "human-level on Atari", it matters which games, how many runs, how the scores were averaged, and how much computing power was used.

# Student explanation

**What it is for.** A claim like "our agent learns Atari faster" means nothing without a fixed set of games, a fixed amount of experience and a fair way to average results. These benchmarks and statistical rules make RL results comparable.

**Arcade Learning Environment.** The ALE (2013) wraps Atari 2600 games behind one interface: the agent sees the screen and presses joystick buttons. DQN (Nature, 2015) reached human level on many games using 200 million frames per game. To compare games with very different point scales, each score is converted to a human-normalised score, $(\text{agent}-\text{random})/(\text{human}-\text{random})$, so 0 is random play and 1 is the human reference.

**Atari 100k.** Kaiser et al. (2019) limited agents to 100,000 actions per game, about two hours of play, on 26 games, to ask whether machines can learn as quickly as people. EfficientZero (2021) passed human level by mean and median. BBF (2023), which uses no lookahead search, reports an interquartile mean of 1.045, with about 6 hours on a single GPU in one account and 10 hours with half of an A100 GPU in another.

**ProcGen.** ProcGen (2019) has 16 games whose levels are generated by a program, so there are endlessly many. Agents train on a limited set (the recommended easy-mode protocol is 200 levels for 25 million steps) and are tested on unseen levels. A large gap between training and test scores means the agent memorised levels instead of learning the game: a failure of generalisation, the same idea as overfitting a curve to a few data points.

**Statistics.** RL results vary from run to run because training is random: the random seed (the starting number of the random-number generator) changes the initial weights and the exploration. Agarwal et al. (2021) showed that papers using a few seeds and a mean or median often drew conclusions the data did not support. Their rliable library recommends:

- the interquartile mean (IQM): sort all game-run scores, drop the lowest and highest quarters, and average the middle half, which is less swayed by one extreme game than the mean and less jumpy than the median;
- a 95% confidence interval, a range constructed so that it would contain the true value in 95% of repeated experiments, computed by the bootstrap (resample the runs many times with replacement and recompute the IQM each time);
- performance profiles that show the whole distribution of scores.

**Why it matters.** "Human-level" depends on the aggregate (IQM, median or all games), the number of seeds and the compute used. A result is reproducible only when all three are stated together with the code.
