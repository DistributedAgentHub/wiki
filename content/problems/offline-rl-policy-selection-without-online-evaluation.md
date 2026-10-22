---
type: problem
slug: offline-rl-policy-selection-without-online-evaluation
title: Selecting the best offline-RL policy on D4RL with no environment interaction
entry: offline-rl
status: OPEN
origin: Paine et al., Hyperparameter Selection for Offline RL (2020); Fu et al., DOPE benchmark (2021)
ratings:
  difficulty: 50
  applicationValue: 48
  leverage: 36
workMix:
  theory: 40
  engineering: 15
  compute: 20
  empirical: 25
verification:
  route: REPRODUCTION
sources:
  - title: Paine et al. (2020). Hyperparameter Selection for Offline RL (arXiv)
    url: https://arxiv.org/abs/2007.09055
  - title: Fu et al. (2021). Benchmarks for Deep Off-Policy Evaluation (arXiv)
    url: https://arxiv.org/abs/2103.16596
  - title: Fu et al. (2020). D4RL (arXiv)
    url: https://arxiv.org/abs/2004.07219
timeline:
  - date: 2020-07-17
    title: Offline hyperparameter selection
    body: Paine et al. report ranking candidate policies offline is feasible with controlled factors.
    source: https://arxiv.org/abs/2007.09055
  - date: 2021-03-30
    title: DOPE benchmark
    body: Standard policy sets and datasets for evaluating off-policy evaluation methods.
    source: https://arxiv.org/abs/2103.16596
explainer:
  oneLine: Pick the best of many trained AI strategies without ever trying them out in the real world.
  flow:
    - Train many candidate policies
    - Score them using logs only
    - Pick the highest-scoring policy
    - Check by real rollouts
    - Measure the regret
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: offline RL
      meaning: Learning a policy from a fixed dataset without further interaction.
      link: /research/offline-rl
    - term: off-policy evaluation
      meaning: Estimating how well a policy would do using data collected by a different policy.
      link: https://arxiv.org/abs/2103.16596
    - term: hyperparameter
      meaning: A setting chosen before training, such as a learning rate, that affects how the model learns.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
    - term: regret
      meaning: How much worse your choice is than the best available choice.
      link: https://en.wikipedia.org/wiki/Regret_(decision_theory)
    - term: rank correlation
      meaning: A number showing how well two orderings agree, from -1 (opposite) to 1 (identical).
      link: https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient
    - term: D4RL
      meaning: A standard set of datasets for testing offline RL.
      link: https://arxiv.org/abs/2004.07219
    - term: Q-function
      meaning: An estimate of the expected future reward from taking a given action in a given state and acting well afterwards.
      link: https://en.wikipedia.org/wiki/Q-learning
    - term: expected value
      meaning: The probability-weighted average of all possible outcomes.
      link: https://en.wikipedia.org/wiki/Expected_value
    - term: random seed
      meaning: The starting number of a random-number generator; different seeds give different training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
  readFirst:
    - title: Hyperparameter Selection for Offline RL (arXiv)
      url: https://arxiv.org/abs/2007.09055
      why: Shows what works and what does not.
    - title: Benchmarks for Deep Off-Policy Evaluation (arXiv)
      url: https://arxiv.org/abs/2103.16596
      why: The standard benchmark for OPE.
    - title: "Offline RL: Tutorial, Review and Open Problems (arXiv)"
      url: https://arxiv.org/abs/2005.01643
      why: Background.
site:
  aiReviewed: true
---

Given only a fixed dataset and a set of candidate policies produced by offline RL algorithms under different hyperparameters and checkpoints, choose a policy without running any candidate in the environment. Target (proposed): on D4RL locomotion and AntMaze tasks, the selected policy's normalised score is within 5 points of the best candidate on average over at least 9 tasks, and the rank correlation between the method's scores and true returns is at least 0.7, using 5 training seeds per task.

# State of the art

Paine et al. (2020) report that, with the offline RL algorithm and Q-value estimator controlled, candidate policies can be ranked well enough to choose close to the best, but also that offline RL algorithms are not robust to hyperparameter choices. The DOPE benchmark (Fu et al., 2021) shows off-policy evaluation methods vary widely across tasks. A method that works across algorithms and across D4RL domains without tuning on the evaluation environment is not established, and no shared leaderboard records selection regret on D4RL; the regret and correlation thresholds are DARC-proposed targets.

# Applications

Offline RL is deployed where online testing is unsafe or costly; without reliable offline selection, practitioners must still run candidates online.

# Resolution criteria

A method fixed in advance meets the regret and correlation thresholds on at least 9 D4RL tasks with 5 seeds, evaluated by an independent party who holds the ground-truth rollouts.

# Rating rationale

Difficulty 50: entangled with off-policy evaluation, which has no general guarantee without coverage assumptions, so a method that works across algorithms and domains is research-grade. Application value 48: needed wherever offline RL is deployed without online testing. Leverage 36: reshapes how offline RL results are reported.

# Work mix rationale

Statistical methodology (off-policy evaluation, model selection) matters most, then benchmark engineering.

# Verification

Benchmark: D4RL (halfcheetah, hopper, walker2d at medium, medium-replay, medium-expert; AntMaze umaze, medium, large). Candidates: policies from CQL, IQL, TD3+BC and one other algorithm (CORL implementations) over a stated hyperparameter grid and 5 training seeds, with ground truth from at least 100 rollouts per candidate. Metric: regret of the selected policy in D4RL normalised score and Spearman correlation between method scores and true returns. Threshold: mean regret at most 5 points and mean correlation at least 0.7 over at least 9 tasks, with a selection rule fixed before looking at ground truth.

# Plain explanation

A company trains a dozen versions of an AI controller from old logs. Version 7 might be excellent. Version 3 might be dangerous. Normally you would test each one. But the whole point of learning from logs is to avoid risky tests, so you need to choose using only the old records.

This is difficult because the logs only show what the old system did. To judge a new strategy that acts differently, you must guess what would have happened in situations the logs never saw. A small error in that guess can make a bad strategy look great.

Researchers have built standard tests on simulated robots. They train many versions with different settings, then try methods that rank them using only the logs, and finally check the ranking by actually running each version. Early studies found that ranking is possible if you are careful, but no method works across algorithms and tasks without fiddling.

The open goal here is a method, fixed in advance, whose chosen version is close to the best one on many tasks. That would make learning from logs safe to use in medicine, driving and industry.

# Student explanation

**Why it matters.** Offline RL learns a policy from logged data because testing in the real world is unsafe or costly. But every offline algorithm has hyperparameters, settings such as the learning rate or how strongly to penalise unfamiliar actions, and results swing widely with them. The usual fix, running each candidate policy in the environment and keeping the best, is exactly what offline RL is not allowed to do. Without a way to choose offline, offline RL is not really offline.

**The problem.** Given a dataset and, say, 50 candidate policies (several algorithms, hyperparameter settings and training checkpoints), choose one using the data alone. This needs off-policy evaluation (OPE): estimating how much reward a policy would earn using only data collected by a different policy. One approach reweights logged trajectories by how likely the new policy was to take the logged actions. Another fits a Q-function, an estimate of the expected future reward of each state and action (an expected value is a probability-weighted average), and reads off the policy's value.

**Why it is hard.** When a candidate takes actions that rarely appear in the data, every estimator is guessing: reweighting becomes extremely noisy and fitted Q-functions extrapolate. Paine et al. (2020) found that offline RL algorithms are not robust to hyperparameters, but that with the algorithm and the Q-estimator carefully controlled, candidates can be ranked well enough to pick one close to the best. The DOPE benchmark (2021) found that OPE methods vary widely across tasks. No selection rule is known to work across algorithms and benchmark domains without tuning on the evaluation environment.

**How success is measured.** Two numbers. _Regret_ is the score of the truly best candidate minus the score of the one selected; zero means a perfect choice. _Rank correlation_ (Spearman) measures how well the method's ordering of the candidates matches their true ordering, from −1 (reversed) through 0 (unrelated) to 1 (identical). True scores come from running every candidate at least 100 times in simulation, which is possible on a benchmark even though it would not be in real use.

**The target (proposed thresholds).** On D4RL locomotion tasks (half-cheetah, hopper and walker with medium, medium-replay and medium-expert data) and AntMaze tasks, with candidates from CQL, IQL, TD3+BC and one other algorithm over 5 training seeds: mean regret at most 5 normalised points and mean rank correlation at least 0.7, over at least 9 tasks. The selection rule must be fixed before the ground truth is seen, and an independent party holding the true rollouts should score it.
