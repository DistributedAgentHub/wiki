---
type: problem
slug: loss-free-moe-balancing-at-scale
title: Does auxiliary-loss-free balancing beat auxiliary-loss routing at 20B+ total parameters?
entry: mixture-of-experts-routing
status: OPEN
origin: Wang, Gao, Zhao, Sun and Dai, Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts (arXiv:2408.15664, preprint, 2024)
ratings:
  difficulty: 21
  applicationValue: 36
  leverage: 20
workMix:
  theory: 5
  engineering: 25
  compute: 60
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Wang et al., Auxiliary-Loss-Free Load Balancing Strategy for MoE (preprint)
    url: https://arxiv.org/abs/2408.15664
  - title: DeepSeek-AI, DeepSeek-V3 Technical Report (preprint)
    url: https://arxiv.org/abs/2412.19437
  - title: "Qiu et al., Demons in the Detail: On Implementing Load Balancing Loss for Training Specialized Mixture-of-Expert Models (preprint)"
    url: https://arxiv.org/abs/2501.11873
  - title: Hu et al., Sigma-MoE-Tiny Technical Report (preprint)
    url: https://arxiv.org/abs/2512.16248
timeline:
  - date: 2024-08-28
    title: Method proposed
    body: Reported gains over auxiliary-loss balancing up to 3B parameters and 200B tokens.
    source: https://arxiv.org/abs/2408.15664
explainer:
  oneLine: Does an independent, open test confirm that bias-based expert balancing beats penalty-based balancing at 20B+ parameters?
  flow:
    - Penalty balances experts but distracts
    - Bias nudges the router instead
    - Authors report wins up to 228.7B
    - Independent open test at 20B+
  glossary:
    - term: mixture of experts
      meaning: A model in which each token is sent to a few of many parallel sub-networks (experts), so only part of the model runs per token.
      link: /research/mixture-of-experts-routing
    - term: router
      meaning: The small network in a mixture-of-experts layer that scores the experts and picks which ones each token goes to.
      link: /research/mixture-of-experts-routing
    - term: auxiliary loss
      meaning: An extra penalty added to the training objective, here one that grows when experts receive unequal numbers of tokens.
      link: https://en.wikipedia.org/wiki/Loss_function
    - term: load imbalance (MaxVio)
      meaning: How far the busiest expert's token count exceeds the average, as a fraction of the average.
      link: /research/mixture-of-experts-routing
    - term: validation loss
      meaning: The model's average prediction error on held-out text it never trained on; lower means better prediction.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
    - term: random seed
      meaning: The starting number for a computer's random-number generator; changing it changes the random initial weights and data order of a run.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: standard deviation
      meaning: A measure of how spread out repeated measurements are around their average.
      link: https://en.wikipedia.org/wiki/Standard_deviation
    - term: replication
      meaning: Repeating a published experiment independently, with released code and data, to check that the result holds.
      link: https://en.wikipedia.org/wiki/Reproducibility
    - term: FLOP
      meaning: One floating-point operation, such as a single multiply or add; training compute is counted in total FLOPs.
      link: https://en.wikipedia.org/wiki/FLOPS
    - term: parameter
      meaning: One adjustable number (weight) inside a neural network; large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
  readFirst:
    - title: "Hugging Face: Mixture of Experts explained"
      url: https://huggingface.co/blog/moe
      why: Background on how MoE models are built and trained.
    - title: Auxiliary-Loss-Free Load Balancing (paper)
      url: https://arxiv.org/abs/2408.15664
      why: The method and its experiments (a preprint).
    - title: "Wikipedia: Mixture of experts"
      url: https://en.wikipedia.org/wiki/Mixture_of_experts
      why: Short general introduction to the idea.
site:
  aiReviewed: true
---

Loss-free balancing adds a per-expert bias to routing scores, updated from observed load, instead of penalising imbalance with an auxiliary loss. The source paper reports lower validation perplexity and better expert balance than auxiliary-loss training for models up to 3B total parameters and 200B tokens, and the DeepSeek-V3 report adds the authors' own ablations at 15.7B total parameters (1.33T tokens) and 228.7B (578B tokens). The question is whether an **independent, open** comparison confirms the advantage at 20B total parameters or more with fine-grained experts and at least 1T tokens, with both methods tuned (bias update rate for one, loss coefficient for the other), measured on the same held-out set, and with balance measured as the maximum expert-load violation (MaxVio) per layer, including the lower layers where balancing has been reported to fail at high sparsity.

# State of the art

Wang et al. (preprint) report the advantage up to 3B parameters and 200B tokens. The DeepSeek-V3 technical report (preprint, section 4.5.2) compares the method with auxiliary-loss baselines at 15.7B total parameters on 1.33T tokens and at 228.7B on 578B tokens and reports better scores on most benchmarks; DeepSeek-V3 itself also keeps a complementary sequence-wise balance loss with a very small weight (α = 0.0001). Neither the configurations nor the logs of those ablations are public. The Qwen study of global-batch balancing (arXiv:2501.11873) ablates auxiliary losses up to 42.8B total parameters but tests the loss-free method only at 3.4B, and the Sigma-MoE-Tiny report (arXiv:2512.16248) shows balancing becoming ineffective in lower layers at extreme sparsity.

# Applications

Training stability and utilisation of very large sparse models: unbalanced experts waste capacity and cause communication stragglers in expert-parallel training. A reliable answer informs a design choice used in current frontier-class open models.

# Resolution criteria

A public study with released configs and logs comparing the two methods at matched active parameters and tokens at 20B or more total parameters, reporting validation loss with seed variance from smaller proxies, and per-layer MaxVio, that either confirms an advantage larger than the seed standard deviation or shows none.

# Rating rationale

Difficulty 21: the authors' own ablations at 15.7B and 228.7B already favour the method, so this is an independent, open replication with a large but standard budget. Application value 36: informs a design choice in current sparse models. Leverage 20: one design decision.

# Work mix rationale

Mostly a large training comparison with expert-parallel engineering.

# Verification

Benchmark: matched pre-training runs on one public corpus with identical data order. Metric: held-out validation loss, plus MaxVio (max over experts of load deviation relative to mean load) averaged over layers. Threshold: an advantage counts only if it exceeds the standard deviation across at least 3 seeds at a 1B-scale proxy; the 20B+ total-parameter arms (about 2B active or more) are single runs at 1T tokens or more, each costing on the order of 10^22 FLOPs. Both arms must report their tuning sweeps.

# Plain explanation

In a mixture-of-experts model, a router sends each word to a few specialists. If it favours a few, the others are wasted. The usual cure is a penalty that punishes uneven use, but the penalty can distract the model from its main job, learning language.

A 2024 proposal skips the penalty. Instead, each expert gets a small adjustable bonus: experts that have been busy get a lower bonus, idle ones a higher one, so that work evens out without adding a penalty. The authors saw better balance and better results in models up to 3 billion parameters. A large public model has since used the method, but without a clean comparison.

The open question is whether the advantage still holds at 20 billion parameters and above. The test: train two copies, one per method, each tuned fairly, and compare how well they predict held-out text and how evenly their experts are used.

Why hard: each run costs a cluster for weeks, and small differences need several repeats on small models to tell signal from noise.

# Student explanation

**The setting.** A mixture-of-experts (MoE) layer holds many parallel sub-networks, called experts, and a small _router_ that sends each token to only a few of them. A model can then have, say, 200 billion parameters while each token uses only a tenth of them. The catch is load balance: a router left alone tends to favour a few experts, which then get most of the training while others sit idle, and when experts live on different GPUs the busiest one makes everyone wait.

**Two fixes.** The classic fix adds an _auxiliary loss_, an extra penalty in the training objective that grows when experts get unequal numbers of tokens. It works, but its gradient pulls the model away from its real goal of predicting text, so its weight trades balance against quality. Loss-free balancing instead adds a bias $b_i$ to each expert's router score and adjusts it after each step: $b_i \leftarrow b_i + u\,(\bar{n} - n_i)$, where $n_i$ is how many tokens expert $i$ just received, $\bar{n}$ the average, and $u$ a small update rate. Overloaded experts get their score lowered, underused ones raised, and no extra gradient touches the model. It is like a traffic controller adjusting signal timings at busy intersections rather than fining drivers.

**What is known.** The original preprint reports better validation perplexity and balance than the penalty method for models up to 3B parameters trained on 200B tokens. The DeepSeek-V3 technical report adds its authors' own ablations at 15.7B total parameters (1.33T tokens) and 228.7B (578B tokens), favouring the method on most benchmarks, but those configurations and logs are not public, and DeepSeek-V3 itself still keeps a tiny sequence-level penalty (weight 0.0001). A separate study ablated penalty variants up to 42.8B parameters but tested the loss-free method only at 3.4B, and a report on a very sparse 20B model (one of 96 experts active per token) found balancing becoming ineffective in the lower layers.

**What is asked.** An independent, open comparison at 20B or more total parameters and at least 1T tokens, with both methods tuned (the bias rate $u$ for one, the penalty weight for the other), measuring validation loss and per-layer imbalance (how far the busiest expert exceeds the average), including the lower layers.

**Why it is hard.** Not ideas but cost and fairness: each large arm costs of the order of $10^{22}$ operations, and an advantage only counts if it exceeds the run-to-run spread. That spread is measured by repeating small proxies with different _random seeds_ and computing the standard deviation of their final losses. The traffic analogy breaks here: unlike signals, the bias also changes which expert learns what, so balance and quality are coupled.

**What would settle it.** Released configs and logs of matched runs, seed variance from \~1B proxies, and per-layer balance curves, reproducible by others.
