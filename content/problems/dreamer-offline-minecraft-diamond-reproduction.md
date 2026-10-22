---
type: problem
slug: dreamer-offline-minecraft-diamond-reproduction
title: Independent reproduction and improvement of offline-only Minecraft diamond collection with a world model
entry: model-based-rl-world-models
status: OPEN
origin: Hafner et al., Training Agents Inside of Scalable World Models (Dreamer 4, September 2025, preprint)
ratings:
  difficulty: 45
  applicationValue: 35
  leverage: 30
workMix:
  theory: 15
  engineering: 40
  compute: 40
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: Hafner et al. (2025). Training Agents Inside of Scalable World Models (arXiv preprint)
    url: https://arxiv.org/abs/2509.24527
  - title: Baker et al. (2022). Video PreTraining (VPT) (arXiv)
    url: https://arxiv.org/abs/2206.11795
timeline:
  - date: 2025-09-29
    title: Dreamer 4 preprint
    body: Reports diamonds from offline data alone, 0.7% of 60-minute episodes.
    source: https://arxiv.org/abs/2509.24527
explainer:
  oneLine: Check, and then improve, the claim that an AI learned to mine Minecraft diamonds from videos alone.
  flow:
    - Watch 2,500 hours of recordings
    - Learn a world model
    - Practise inside the model
    - Test 3,000 times in Minecraft
    - Compare with the 0.7% claim
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: world model
      meaning: A learned program that predicts what the environment will do next.
      link: /research/model-based-rl-world-models
    - term: offline data
      meaning: A fixed set of recordings used for training, with no new trial and error.
      link: /research/offline-rl
    - term: VPT
      meaning: "Video PreTraining: OpenAI's Minecraft dataset and agent trained from human videos."
      link: https://arxiv.org/abs/2206.11795
    - term: Minecraft
      meaning: A sandbox video game used as a hard long-horizon test for AI.
      link: https://en.wikipedia.org/wiki/Minecraft
    - term: Wilson interval
      meaning: A standard way to give a confidence range for a proportion, accurate even for rare events.
      link: https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval
    - term: TPU
      meaning: A chip designed by Google for training neural networks.
      link: https://en.wikipedia.org/wiki/Tensor_Processing_Unit
    - term: transformer
      meaning: A neural-network architecture built on attention, used here to predict future video frames.
      link: /research/transformer-architecture
    - term: binomial distribution
      meaning: The distribution of the number of successes in n independent tries, each succeeding with the same probability p.
      link: https://en.wikipedia.org/wiki/Binomial_distribution
    - term: neural network
      meaning: A large function with many adjustable numbers (weights), fitted to data by gradient descent.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: random seed
      meaning: The starting number of a random-number generator; different seeds give different training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
  readFirst:
    - title: Training Agents Inside of Scalable World Models (arXiv preprint)
      url: https://arxiv.org/abs/2509.24527
      why: The Dreamer 4 paper.
    - title: Video PreTraining (VPT) (arXiv)
      url: https://arxiv.org/abs/2206.11795
      why: The data and earlier agent.
    - title: Mastering diverse control tasks through world models (Nature)
      url: https://doi.org/10.1038/s41586-025-08744-2
      why: DreamerV3, the predecessor.
site:
  aiReviewed: true
---

Dreamer 4 reports obtaining diamonds in Minecraft purely from offline data, by training a world model on about 2,541 hours of the VPT contractor dataset and then reinforcement learning inside it. Reproduce that result independently, then raise the success rate. The task requires choosing sequences of over 20,000 mouse and keyboard actions from raw pixels in 60-minute episodes.

# State of the art

The preprint reports diamonds in 0.7% of 1,000 evaluation episodes and an iron pickaxe in 29%, and says Dreamer 4 substantially outperforms the offline VPT agent while using 100x less data than VPT. Training used 256 to 1,024 TPU-v5p devices. No official code or weights have been released (the project page links only the paper); unofficial reimplementations exist (for example nicklashansen/dreamer4 and lucidrains/dreamer4) but none reports the diamond result. A 0.7% rate has wide uncertainty at small episode counts.

# Applications

Training agents in a learned simulator from logged data is the template for robotics and other domains where online interaction is unsafe or slow.

# Resolution criteria

A released implementation whose offline-only agent, trained only on the VPT contractor data, obtains diamonds in at least 0.7% of at least 3,000 evaluation episodes (confidence interval overlapping the reported figure), and a follow-up result whose interval lies entirely above it.

# Rating rationale

Difficulty 45: hundreds of TPUs in the original, no official code, and a 0.7% success rate that needs thousands of hour-long episodes to measure; the science (whether imagination training from offline data scales) is open. Application value 35: offline-to-policy training matters for robotics. Leverage 30: it tests one research programme.

# Work mix rationale

Needs training of a large world model and a long-horizon RL stage; engineering and compute dominate.

# Verification

Environment: Minecraft with the VPT contractor dataset (about 2,541 hours) as the only training data, no environment interaction during training. Metric: fraction of 60-minute evaluation episodes in which the agent obtains a diamond, with at least 3,000 episodes per model (about 0.3 percentage points half-width at a 0.7% rate), 95% Wilson confidence interval, and at least 3 independent training seeds. Compute: report accelerator type and hours; the original used 256 to 1,024 TPU-v5p devices, so a scaled-down variant must say which components were reduced.

# Plain explanation

In Minecraft, getting a diamond takes a long chain of steps: chop wood, make tools, dig, find iron, build a better pickaxe, and find a deep diamond. A human needs about twenty minutes. An AI must choose over twenty thousand mouse and keyboard actions starting from the screen's pixels.

In 2025 a research team reported an AI that learned to do this without playing the game while it trained. It first watched about 2,500 hours of recorded human play to build a "world model", a program that predicts what happens next. Then it practised inside that imagined world. It got diamonds in 0.7 percent of 60-minute tries, which is rare but remarkable for learning from recordings only.

This is one report, from a preprint, and no independent repetition has been published. Training it took hundreds of specialised chips.

The open job: have another team redo it and see whether the same rate appears, then raise it. Because success is so rare, thousands of test runs are needed to know the true rate with any confidence.

# Student explanation

**Why it matters.** Robots and other real systems cannot afford millions of trial-and-error attempts, but large logs of recorded behaviour often exist. If an agent can learn a world model, a learned simulator, from recordings and then practise inside it, learning needs no risky interaction at all. Dreamer 4 is the most striking test of this idea so far.

**The task.** Obtaining a diamond in Minecraft needs a long chain of sub-goals: collect wood, craft tools, mine stone, find and smelt iron, make an iron pickaxe, dig deep and find diamonds. From raw screen pixels this means choosing over 20,000 mouse and keyboard actions within a 60-minute episode.

**The claim (Hafner, Yan and Lillicrap, 2025, preprint).** A transformer world model, a neural network that predicts the next video frame from past frames and the action taken, was trained mainly on the VPT contractor dataset, 2,541 hours of recorded human play. A policy was then trained by reinforcement learning entirely inside the model's imagined rollouts, with no environment interaction. Over 1,000 evaluation episodes the agent obtained diamonds in 0.7% of them and an iron pickaxe in 29%. The paper reports that it substantially outperforms OpenAI's offline VPT agent while using 100 times less data. Training used 256 to 1,024 TPU-v5p chips (Google's machine-learning accelerators).

**Why reproduction matters.** It is one preprint from one group, and neither the paper nor the project page mentions a code or weight release, so a reproduction may need a reimplementation. A rare success rate is also hard to pin down. If each episode succeeds with probability $p$ and $n$ episodes are run, the number of successes follows a binomial distribution, and the standard error of the estimated rate is about
$\sqrt{p(1-p)/n}.$
At $p=0.007$ and $n=1{,}000$ that is about 0.26 percentage points, so the true rate could plausibly lie anywhere between roughly 0.3% and 1.5%. With 3,000 episodes the 95% interval narrows to about ±0.3 points; the Wilson interval is the standard formula for such proportions.

**The target.** First, an independent implementation trained only on the VPT data whose diamond rate over at least 3,000 episodes has a 95% Wilson interval overlapping 0.7%, from at least 3 independent training seeds. Second, an improved method whose interval lies entirely above 0.7%. A scaled-down reproduction must state which components were reduced (model size, data, accelerator count), because the original's compute is out of reach for most groups.

**Why it is hard.** Very large compute, a long training pipeline (video tokeniser, dynamics model, imagination RL), rare-event evaluation with hour-long episodes, and implementation details that have to be reconstructed from the paper.
