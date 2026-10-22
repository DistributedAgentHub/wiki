---
type: problem
slug: atari-100k-human-level-iqm-one-gpu-hour
title: Human-level IQM on Atari 100k within one GPU-hour per run, with interval estimates over 10 seeds
entry: rl-sample-efficiency-benchmarks
status: OPEN
origin: Atari 100k (Kaiser et al., 2019); updated goalposts in the BBF paper (Schwarzer et al., 2023)
ratings:
  difficulty: 32
  applicationValue: 15
  leverage: 14
workMix:
  theory: 10
  engineering: 50
  compute: 35
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: "Schwarzer et al. (2023). Bigger, Better, Faster: Human-level Atari with human-level efficiency (arXiv)"
    url: https://arxiv.org/abs/2305.19452
  - title: Ye et al. (2021). EfficientZero (NeurIPS 2021)
    url: https://arxiv.org/abs/2111.00210
  - title: Agarwal et al. (2021). Deep RL at the Edge of the Statistical Precipice (arXiv)
    url: https://arxiv.org/abs/2108.13264
  - title: Kaiser et al. (2019). Model-Based RL for Atari (arXiv)
    url: https://arxiv.org/abs/1903.00374
links:
  - to: procgen-generalization-gap-200-levels
    kind: RELATED
    note: Both are sample-efficiency targets on the ALE/ProcGen benchmark family evaluated with the same interval-estimate protocol.
timeline:
  - date: 2021-10-30
    title: EfficientZero
    body: Model-based agent with search reports human-level mean and median on Atari 100k (NeurIPS 2021).
    source: https://arxiv.org/abs/2111.00210
  - date: 2023-05-30
    title: BBF
    body: Value-based agent reports IQM 1.045 on one GPU.
    source: https://arxiv.org/abs/2305.19452
explainer:
  oneLine: Reach human-level play on 26 Atari games from two hours of experience, using an hour of one graphics card.
  flow:
    - Give agent 100k steps per game
    - Score vs human on 26 games
    - Average with robust IQM
    - Count GPU time per run
    - Check confidence interval
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: Atari 100k
      meaning: A test that gives an agent only 100,000 steps (about two hours) per game on 26 Atari games.
      link: /research/rl-sample-efficiency-benchmarks
    - term: IQM
      meaning: "Interquartile mean: the average of the middle half of the scores."
      link: https://en.wikipedia.org/wiki/Interquartile_mean
    - term: replay ratio
      meaning: How many learning updates are made per step taken in the environment.
      link: https://en.wikipedia.org/wiki/Deep_reinforcement_learning
    - term: bootstrap confidence interval
      meaning: A range for a statistic found by resampling the observed results many times.
      link: https://en.wikipedia.org/wiki/Bootstrapping_(statistics)
    - term: GPU-hour
      meaning: One graphics processor running for one hour, a common unit for how much computing a training run used.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: random seed
      meaning: The starting number of a random process. Different seeds give different training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: human-normalised score
      meaning: A game score rescaled so that 0 is random play and 1 is the human reference score.
      link: /research/rl-sample-efficiency-benchmarks
    - term: confidence interval
      meaning: A range computed from data that would contain the true value in a stated fraction (here 95%) of repeated experiments.
      link: https://en.wikipedia.org/wiki/Confidence_interval
    - term: gradient update
      meaning: One step of adjusting the network's weights against the slope of its error.
      link: https://en.wikipedia.org/wiki/Gradient_descent
  readFirst:
    - title: "Bigger, Better, Faster: Human-level Atari with human-level efficiency (arXiv)"
      url: https://arxiv.org/abs/2305.19452
      why: The BBF paper and its compute accounting.
    - title: Deep RL at the Edge of the Statistical Precipice (arXiv)
      url: https://arxiv.org/abs/2108.13264
      why: How the scores should be averaged and reported.
    - title: "Wikipedia: Arcade Learning Environment"
      url: https://ale.farama.org
      why: Background on the benchmark.
site:
  aiReviewed: true
---

On the 26 Atari 100k games (100,000 agent steps per game), train an agent from scratch with no pretrained or external data and no explicit search, and report the human-normalised interquartile mean (IQM). Target: IQM $\ge 1.0$ with the lower end of a 95% stratified bootstrap confidence interval (rliable protocol) above 0.9, from at least 10 independent seeds per game, with end-to-end training time of at most one hour per game-seed on a single A100-class GPU and at most 8 CPU cores. The compute limit is a DARC-proposed target, roughly a 6x to 10x reduction of what BBF reports for its human-level configuration.

# State of the art

BBF (Schwarzer et al., 2023, Table A.1) reports IQM 1.045, optimality gap 0.344, median 0.917 and mean 2.247 over 26 games, averaged over 50 seeds per game; the paper gives about 6 hours on a single GPU in one place and 10 hours with a CPU and half an A100 in another. EfficientZero (NeurIPS 2021) reports mean 1.945 and median 1.116 in the BBF table (the preprint's own abstract reports 194.3% and 109.0% under its own protocol) but trains in about 8.5 hours using roughly 512 CPU cores and 4 GPUs. The BBF paper also runs a cheaper replay-ratio-2 variant (it reports 40k steps in one hour on half an A100) whose IQM in its ablations is below 1.0, so the one-GPU-hour regime is close to, but not at, human-level IQM. BBF's authors note that no agent was then human-level on all 26 games. Later model-based agents (EfficientZero V2, DIAMOND and others) use search or large world models and report their own aggregates under differing protocols; none of them reports human-level IQM within one GPU-hour per run.

# Applications

Cheaper sample-efficient RL makes agent research accessible to small groups and is a proxy for data-efficient learning in robotics where each step is costly.

# Resolution criteria

A released codebase that, run by an independent party on stated hardware, meets the IQM and compute thresholds with the confidence-interval condition above.

# Rating rationale

Difficulty 32: human-level IQM is already met at about 6–10 GPU-hours, and BBF's cheaper variant runs near the one-hour budget below IQM 1.0, so what remains is efficiency engineering; level with the GPU-kernel parity targets. Application value 15 and leverage 14: Atari 100k is a narrow, saturating proxy.

# Work mix rationale

Mostly systems and algorithm engineering to cut wall-clock per run; a run is cheap but 26 games times 10 seeds is the cost.

# Verification

Benchmark: ALE with the Atari 100k settings (26 games, 100k agent steps, sticky actions reported separately) and human and random reference scores from the BBF or rliable code. Metric: human-normalised IQM across games with a 95% stratified bootstrap CI from the rliable library; also report optimality gap and median. Threshold: IQM at least 1.0 with the CI lower bound at least 0.9. Seeds: at least 10 per game. Compute: at most 1 A100-hour per game-seed end to end, including any evaluation. Verification: an independent party reruns the released code and reports GPU-hours measured by wall clock.

# Plain explanation

A person can pick up a simple Atari game in minutes. Most AI game players need millions of tries. The Atari 100k test asks for far less: only about two hours of game time in 26 games.

Some programs now reach human level on this test. A 2023 program called BBF reached about human level on average. But it needs hours on a powerful graphics card for each game and each run. Another approach, EfficientZero, was reported to need hundreds of processor cores.

This problem asks for something more practical: reach human level using only about one hour of a single graphics card per run, with no special search machinery, and show it over many repeated runs with honest error bars. The hour limit is a target chosen for this problem, about six to ten times less than the BBF paper reports.

Why bother? Cheap, fast learning from little experience matters for robots, where every try costs time and wear. Atari is only a proxy, so the real gain is learning what makes an agent learn quickly. The problem is mainly about clever engineering, not a new law of nature.

# Student explanation

**Why it matters.** Deep RL agents are notoriously hungry for data and compute. Atari 100k asks for human-level play from only 100,000 actions per game, about two hours of gameplay, on 26 games. That data target has been met, but the best agents still need hours of GPU time per game. Cutting that cost makes the benchmark usable by small groups and is a step toward agents, such as robots, that learn quickly and cheaply.

**How performance is measured.** Each game score is converted to a human-normalised score, $(\text{agent}-\text{random})/(\text{human}-\text{random})$, so 0 is random play and 1 is the human reference. Across games and runs the interquartile mean (IQM) is used: sort all scores, drop the lowest and highest quarters, and average the middle half. An IQM of 1.0 means the typical game is played at human level. Because results vary from run to run with the random seed, a 95% confidence interval is computed by the bootstrap: resample the runs many times with replacement, recompute the IQM each time, and take the range holding the middle 95% of those values.

**The current record and its cost.** BBF (Schwarzer et al., 2023), a value-based agent with no lookahead search, reports IQM 1.045 over 26 games, averaged over 50 seeds per game. It gets there with a large network and a high replay ratio: 8 gradient updates for every environment step. The paper reports about 6 hours on a single GPU, and in another account 10 hours using one CPU and half of an A100 GPU. EfficientZero, which uses search, trains in about 8.5 hours but needs about 512 CPU cores and 4 GPUs. The BBF authors also note that no agent was then human-level on all 26 games.

**The target (a proposed threshold).** Train from scratch with no pretrained or external data and no explicit search. Reach IQM at least 1.0, with the lower end of the 95% bootstrap interval above 0.9, from at least 10 seeds per game, using at most one A100 GPU-hour and 8 CPU cores per game and seed, end to end. That is roughly a 6- to 10-fold cut in compute relative to BBF.

**Why it is hard.** BBF's sample efficiency comes precisely from doing many expensive updates per step; so far, fewer updates or a smaller network have lowered the score. Wall-clock time also depends on the game emulator and the data pipeline, not only on the GPU. The evaluation alone is 260 runs (26 games × 10 seeds), so even a cheap method costs hundreds of GPU-hours to verify, and an independent party must rerun the released code and time it.
