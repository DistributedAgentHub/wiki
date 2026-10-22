---
type: problem
slug: go-self-play-compute-one-tenth-katago
title: ELF OpenGo-level 19x19 Go from scratch at one tenth of KataGo's reported compute (about 51 V100-days)
entry: mcts-alphazero
status: OPEN
origin: Wu, Accelerating Self-Play Learning in Go (KataGo, 2019)
ratings:
  difficulty: 35
  applicationValue: 12
  leverage: 12
workMix:
  theory: 10
  engineering: 45
  compute: 40
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: Wu (2019). Accelerating Self-Play Learning in Go (arXiv)
    url: https://arxiv.org/abs/1902.10565
  - title: Danihelka et al. (2022). Policy improvement by planning with Gumbel (ICLR 2022)
    url: https://openreview.net/forum?id=bERaNdoegnO
  - title: mctx (GitHub)
    url: https://github.com/google-deepmind/mctx
  - title: KataGo (GitHub)
    url: https://github.com/lightvector/KataGo
timeline:
  - date: 2019-02-27
    title: KataGo
    body: Reports surpassing ELF OpenGo's final model after 19 days on about 27 V100 GPUs, a 50x compute reduction.
    source: https://arxiv.org/abs/1902.10565
explainer:
  oneLine: Build a world-class Go player from scratch using one tenth of the computing a leading open project reported.
  flow:
    - Self-play generates training games
    - Search improves the network's guesses
    - Network trains on search results
    - Cut cost with better targets
    - Match reference in 400 games
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: self-play
      meaning: An agent improving by playing against copies of itself.
      link: https://en.wikipedia.org/wiki/Self-play
    - term: Monte Carlo tree search
      meaning: A planning method that tries many simulated move sequences and focuses on promising ones.
      link: /research/mcts-alphazero
    - term: ELF OpenGo
      meaning: An open-source reimplementation of AlphaZero for Go released by Facebook AI Research.
      link: https://en.wikipedia.org/wiki/Facebook_AI_Research
    - term: KataGo
      meaning: A strong open-source Go program trained by self-play.
      link: https://github.com/lightvector/KataGo
    - term: Elo rating
      meaning: A number measuring relative playing strength from game results.
      link: https://en.wikipedia.org/wiki/Elo_rating_system
    - term: GPU-hour
      meaning: One graphics processor running for one hour, a common unit for how much computing a training run used.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: neural network
      meaning: A large function with many adjustable numbers (weights), fitted to data by gradient descent.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: binomial confidence interval
      meaning: The range of true success rates consistent with an observed count of successes and failures, at a stated confidence level.
      link: https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval
    - term: Go
      meaning: A two-player board game on a 19×19 grid with a very large number of possible positions.
      link: https://en.wikipedia.org/wiki/Go_(game)
    - term: TPU
      meaning: "Tensor Processing Unit: Google's chip specialised for neural-network arithmetic."
      link: https://en.wikipedia.org/wiki/Tensor_Processing_Unit
  readFirst:
    - title: Accelerating Self-Play Learning in Go (arXiv preprint)
      url: https://arxiv.org/abs/1902.10565
      why: The KataGo paper.
    - title: "Wikipedia: AlphaGo Zero"
      url: https://en.wikipedia.org/wiki/AlphaGo_Zero
      why: Background on self-play from scratch.
    - title: KataGo (GitHub)
      url: https://github.com/lightvector/KataGo
      why: The open engine and training code.
site:
  aiReviewed: true
---

Train an AlphaZero-style agent from scratch, with no human data, to match the strength of the final ELF OpenGo model on 19x19 Go (at least a 50% score over at least 400 games at equal search visits) using at most one tenth of the compute that KataGo's paper reports for the same milestone. The KataGo paper reports surpassing ELF's final model after 19 days on about 27 V100 GPUs, about 1.4 GPU-years, so the proposed budget is about 51 V100 GPU-days including self-play, training and gating. Because current GPUs are several times faster than a V100, compute on other GPUs is converted to V100-days by the measured throughput ratio of the same KataGo benchmark run on both GPU types.

# State of the art

KataGo (Wu, 2019, arXiv) reports a 50-fold computation reduction over comparable methods (AlphaZero, ELF OpenGo, Leela Zero) through mostly non-domain-specific changes (auxiliary policy and ownership targets, playout-cap randomisation, global pooling), and surpassing ELF's final model after 19 days on about 27 V100 GPUs (a maximum of 28 at any time), about 1.4 GPU-years against ELF's roughly 74 GPU-years. Gumbel AlphaZero/MuZero (Danihelka et al., ICLR 2022) improves policy learning with few simulations and is implemented in mctx. Later KataGo training runs used further improvements but did not publish a clean compute-to-ELF-strength figure under the same protocol, and no independently reproduced run reaching ELF strength at one tenth of the 2019 compute has been published.

# Applications

Cheap superhuman self-play would make search-plus-learning research accessible and tests whether efficiency tricks transfer to other planning domains.

# Resolution criteria

Released code and training logs, reproduced by an independent group, showing the strength match within the V100-equivalent compute budget.

# Rating rationale

Difficulty 35: KataGo already achieved a 50x reduction in 2019, and later search improvements (Gumbel planning) suggest a further 10x is attainable but undemonstrated; mostly engineering and compute. Application value 12 and leverage 12: efficiency gains may transfer to other planning domains, but Go itself has no further practical stake.

# Work mix rationale

Engineering and compute; improvements are mostly empirical efficiency gains.

# Verification

Task: 19x19 Go under stated rules, trained from random initialisation without human games. Metric: score of the final network against the released final ELF OpenGo model (and, as a second anchor, a fixed public KataGo network) at equal visits per move, at least 400 games, with a binomial 95% confidence interval; pass if the point estimate is at least 50% and the lower bound at least 45%. Compute: at most 51 V100-equivalent GPU-days counting self-play, training and gating, logged with wall-clock timestamps; for non-V100 hardware, report the throughput ratio of the same KataGo `benchmark` command (fixed network, visits per second) measured on both GPU types and convert. Seeds: two full runs if affordable, otherwise one run plus a bootstrap over evaluation games, stated clearly.

# Plain explanation

The AI that beat top Go players, AlphaGo, needed an enormous amount of computing. An open project called KataGo found tricks that made learning about 50 times cheaper than earlier approaches. Its paper reports matching a strong open program, ELF OpenGo, after 19 days on fewer than 30 graphics cards.

That is still a lot of hardware for a small team. This problem asks: can someone get to the same strength with one tenth of that effort, about 57 graphics-card days?

How is strength compared? Two programs play hundreds of games, and the new program must win about half. Both are allowed the same amount of thinking per move, so the comparison is fair.

Most of the cost is the programs playing against themselves to create training games. Savings must come from better training targets, smarter search or a better use of each game.

Why care about Go? Success would show which efficiency tricks are general and could carry over to other planning problems. It would also let more researchers experiment with this kind of learning. Beyond that, Go itself is already solved as a challenge for humans. This is a question about learning efficiency.

# Student explanation

**Why it matters.** AlphaZero learned superhuman Go from self-play alone, but with thousands of TPUs. KataGo (Wu, 2019) showed that general changes to the recipe cut the computation by about 50 times. Another tenfold cut would put strong Go training within reach of a university lab, and would test whether the efficiency ideas are general enough to carry over to other planning problems.

**How the training works.** The program plays games against itself. At each move, Monte Carlo tree search, guided by a neural network that outputs move probabilities and a win estimate, looks ahead and picks a move. After the games, the network is trained to predict the search's move choices and the final result, so the next round of self-play is stronger. Almost all of the computation goes into generating self-play games.

**The reference point.** KataGo's paper reports surpassing the final ELF OpenGo model (Facebook's AlphaZero replication, which used about 2,000 V100 GPUs for 13–14 days) after 19 days on about 27 V100 GPUs, roughly 1.4 V100 GPU-years. KataGo's gains came from changes such as extra prediction targets (for example, which player will own each board point) and randomising how many search playouts each move receives, plus some Go-specific features.

**The target.** Train from random initialisation, with no human games, until the network matches the final ELF OpenGo model: a score of at least 50% over at least 400 games at equal search visits per move, with the lower end of the 95% binomial confidence interval at least 45%. (A binomial confidence interval is the range of true win rates consistent with the observed wins and losses; with 400 games its half-width is about 5 percentage points near 50%.) The budget is about 51 V100 GPU-days, one tenth of KataGo's 1.4 V100 GPU-years, counting self-play, training and evaluation.

**Why the budget is in V100-days.** A modern H100 is several times faster than the 2019-era V100, so a budget in raw GPU-days on new hardware would let most of the tenfold saving come from the hardware rather than the method. Runs on other GPUs are therefore converted by measuring the throughput of the same KataGo benchmark on both GPU types, and the measured ratio is reported with the result.

**What is unknown.** Whether another tenfold saving exists without Go-specific tricks, and which techniques (better training targets, Gumbel-style search that still improves the policy with very few simulations, better network architectures) would deliver it. Later KataGo training runs improved further but did not publish their compute to the same milestone under this protocol; no independently reproduced figure at one tenth of the cost is known.
