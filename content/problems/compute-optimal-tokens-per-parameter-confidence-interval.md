---
type: problem
slug: compute-optimal-tokens-per-parameter-confidence-interval
title: A reproducible confidence interval for the compute-optimal tokens-per-parameter ratio
entry: neural-scaling-laws
status: OPEN
origin: Hoffmann et al. (arXiv:2203.15556), Besiroglu et al. (arXiv:2404.10102, preprint) and Pearce and Song (arXiv:2406.12907)
ratings:
  difficulty: 18
  applicationValue: 40
  leverage: 36
workMix:
  theory: 10
  engineering: 15
  compute: 65
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Hoffmann et al., Training Compute-Optimal Large Language Models
    url: https://arxiv.org/abs/2203.15556
  - title: "Besiroglu et al., Chinchilla Scaling: A replication attempt (preprint)"
    url: https://arxiv.org/abs/2404.10102
  - title: Pearce and Song, Reconciling Kaplan and Chinchilla Scaling Laws
    url: https://arxiv.org/abs/2406.12907
  - title: Porian et al., Resolving Discrepancies in Compute-Optimal Scaling of Language Models
    url: https://arxiv.org/abs/2406.19146
links:
  - to: feature-learning-scaling-exponents-power-law-spectra
    kind: RELATED
    note: That problem asks why scaling exponents take their values; this one asks how well they can be measured.
timeline:
  - date: 2024-04-15
    title: Replication attempt (preprint)
    body: Besiroglu et al. question the published parametric fit and its intervals.
    source: https://arxiv.org/abs/2404.10102
explainer:
  oneLine: How many training tokens per parameter is compute-optimal, with honest error bars from open, per-run-tuned experiments?
  flow:
    - "Chinchilla: about 20 tokens per parameter"
    - Its error bars were questioned
    - Open data exist, no ratio intervals
    - New sweep plus bootstrap intervals
  glossary:
    - term: Chinchilla
      meaning: A 2022 DeepMind study and model that set the rule of thumb of about 20 training tokens per parameter for a fixed compute budget.
      link: https://en.wikipedia.org/wiki/Chinchilla_(language_model)
    - term: scaling law
      meaning: A fitted formula, usually a power law, that predicts a model's loss from its size, data and compute.
      link: /research/neural-scaling-laws
    - term: IsoFLOP sweep
      meaning: A set of training runs that all use the same compute budget but trade model size against number of tokens.
      link: /research/neural-scaling-laws
    - term: bootstrap
      meaning: Estimating uncertainty by resampling the measured runs with replacement many times and refitting each time.
      link: https://en.wikipedia.org/wiki/Bootstrapping_(statistics)
    - term: confidence interval
      meaning: A range of values that, by a stated procedure, contains the true value in a stated share (for example 95%) of repeats.
      link: https://en.wikipedia.org/wiki/Confidence_interval
    - term: token
      meaning: A chunk of text, roughly three-quarters of a word on average, that a language model reads and predicts one at a time.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: parameter
      meaning: One adjustable number (weight) inside a neural network; large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: FLOP
      meaning: One floating-point operation, such as a single multiply or add; training compute is counted in total FLOPs.
      link: https://en.wikipedia.org/wiki/FLOPS
    - term: validation loss
      meaning: The model's average prediction error on held-out text it never trained on; lower means better prediction.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
    - term: random seed
      meaning: The starting number for a computer's random-number generator; changing it changes the random initial weights and data order of a run.
      link: https://en.wikipedia.org/wiki/Random_seed
  readFirst:
    - title: "Wikipedia: Neural scaling law"
      url: https://en.wikipedia.org/wiki/Neural_scaling_law
      why: Short overview of the field.
    - title: "Epoch AI: Chinchilla scaling, a replication attempt"
      url: https://epoch.ai/blog/chinchilla-scaling-a-replication-attempt
      why: Readable account of how the published fit was checked.
    - title: "Chinchilla Scaling: A replication attempt (preprint)"
      url: https://arxiv.org/abs/2404.10102
      why: The critique this problem builds on.
site:
  aiReviewed: true
---

Using an openly released set of training runs, estimate the compute-optimal ratio of tokens to parameters for dense decoder-only transformers with a full uncertainty statement. Precisely: for an IsoFLOP sweep covering at least five compute budgets between 10^18 and 10^21 FLOPs, with at least seven model sizes per budget and a fixed warm-up-stable-decay schedule tuned per run, report the optimal tokens-per-parameter ratio at each budget with a 95% bootstrap interval, and state whether the three Chinchilla estimation approaches (training-curve envelope, IsoFLOP, parametric fit) agree within their intervals.

# State of the art

Chinchilla's own models imply about 20 tokens per parameter (70B parameters on 1.4T tokens). Besiroglu et al. (preprint) report that the published parametric-fit intervals were implausibly narrow, requiring over 600,000 experiments where fewer than 500 were likely run, and that a refit agrees with the other two approaches. Pearce and Song attribute Kaplan's different exponents mostly to non-embedding parameter counting and small scale. Porian et al. (arXiv:2406.19146, NeurIPS 2024) reproduced the Kaplan-versus-Chinchilla discrepancy on two datasets, released their losses and code, and give bootstrap 95% intervals for the scaling exponent of optimal model size (about 0.50); for the optimal tokens-per-parameter ratio they report only ranges across budgets (for example 14–16 on RefinedWeb with tuned hyperparameters, 11–22 on OpenWebText2), with hyperparameters tuned at 20 tokens per parameter. A 2026 community dataset pools 814 published IsoFLOP points (open-athena/isoflop-experiments) without intervals. No released sweep gives per-budget bootstrap intervals on the ratio itself under a per-run-tuned schedule.

# Applications

A defensible interval tells planners how much of the compute-optimal frontier is estimation noise before they fix model size, and the released data lets others test new parametric forms.

# Resolution criteria

A public dataset of final losses for every (N, D) run, code that regenerates the intervals, and a statement on whether the three approaches agree, reproduced by an independent party from the released losses.

# Rating rationale

Difficulty 18: open loss data (Porian et al., a pooled 814-point IsoFLOP dataset) already exist, so the problem is a careful new sweep plus a bootstrap analysis, well below the scaling-exponents theory problem (47). Application value 40: tells planners how much of the compute-optimal size is estimation noise. Leverage 36: a reference dataset for scaling-law and data-mix work.

# Work mix rationale

An experimental sweep with a statistical analysis step.

# Verification

Dataset: one public pre-training corpus with fixed token order. Metric: final validation loss per run, fitted per budget with an IsoFLOP parabola; 95% bootstrap intervals over runs. Threshold: report interval widths; the claim of agreement between approaches holds only if the point estimates of each lie within the others' intervals. Budget: at least 5 budgets x 7 sizes = 35 runs spanning 10^18 to 10^21 FLOPs (a total of the order of 10^22 FLOPs), with 3 seeds at the smallest budget to estimate run-to-run noise.

# Plain explanation

Chinchilla, a famous 2022 experiment, concluded that for the best result for a given computing budget, a model should read about 20 words (tokens) per adjustable number (parameter) it has. This rule of thumb shapes how many labs plan their training.

But how certain is the number? Another team tried to repeat the analysis from the published figures and found that the original error bars were too narrow to be believable and that one of the three methods did not agree with the others. A separate paper explained why an earlier study had reached a different answer.

The open task: run a big, open experiment and publish every result. Train many models of different sizes at several fixed computing budgets, find the best size at each budget, and report honest error bars for the words-per-parameter ratio.

Why hard: it needs dozens of training runs, and the answer also depends on the settings used, like the learning-rate schedule.

# Student explanation

**The question.** With a fixed compute budget $C$, a lab can train a bigger model on fewer tokens or a smaller one on more. Training cost is roughly $C \approx 6ND$ operations, where $N$ is the number of parameters and $D$ the number of tokens. The compute-optimal split is the one that gives the lowest final loss. Chinchilla (2022) found that $N$ and $D$ should grow together, with its 70B model trained on 1.4T tokens, about 20 tokens per parameter. The problem asks for that ratio, $D/N$, measured at several budgets with honest error bars.

**How it is measured.** An _IsoFLOP sweep_ trains several model sizes at the same compute budget and plots final loss against size; the curve has a minimum, like the best gear for a given hill. Fitting a parabola near the bottom gives the optimal $N$, and $D = C/(6N)$ follows. Error bars come from the _bootstrap_: resample the measured runs with replacement many times, refit each time, and see how much the optimum moves. A _95% confidence interval_ is the range covering 95% of those refits.

**What is known.** A 2024 replication rebuilt Chinchilla's data from its figures and found its third fitting method disagreed with the other two; its reported intervals were so narrow they would have needed over 600,000 experiments where fewer than 500 were likely run. A refit agreed with the other methods. Another study traced the gap between the earlier Kaplan law and Chinchilla to how parameters were counted, warm-up length and learning-rate tuning, released its losses and code, and gave bootstrap intervals for the scaling exponent (about 0.50). For the ratio itself it reported only ranges across budgets, for example 14–16 on one dataset and 11–22 on another, with settings tuned at 20 tokens per parameter. A 2026 community dataset pools 814 published IsoFLOP points, without intervals.

**What is asked.** An open sweep of at least five budgets from $10^{18}$ to $10^{21}$ operations, seven model sizes each, with the learning-rate schedule tuned per run, giving the ratio at each budget with a 95% bootstrap interval, and saying whether Chinchilla's three methods agree within those intervals.

**Why it is hard.** Mostly careful work and compute (35+ runs, about $10^{22}$ operations in total), but the bottom of the loss curve is flat, so small noise moves the optimum a lot. A worked example: if the loss differs by only 0.2% between 15 and 25 tokens per parameter, run-to-run noise of 0.1% already blurs the answer. The gear analogy breaks because the "hill" itself shifts with the training recipe.

**How it is checked.** Others rerun the released losses through the released code and get the same intervals.
