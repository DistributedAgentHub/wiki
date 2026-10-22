---
type: problem
slug: sae-probes-match-dense-probes-out-of-distribution
title: SAE-based probes that match dense linear probes out of distribution
entry: sparse-autoencoders-interpretability
status: OPEN
origin: Google DeepMind mechanistic interpretability team, Negative Results for Sparse Autoencoders On Downstream Tasks (blog post, 26 March 2025)
ratings:
  difficulty: 45
  applicationValue: 35
  leverage: 33
workMix:
  theory: 30
  engineering: 15
  compute: 15
  empirical: 40
verification:
  route: REPRODUCTION
sources:
  - title: Google DeepMind, Negative Results for Sparse Autoencoders On Downstream Tasks
    url: https://deepmindsafetyresearch.medium.com/negative-results-for-sparse-autoencoders-on-downstream-tasks-and-deprioritising-sae-research-6cadcfc125b9
  - title: Kantamneni et al., Are Sparse Autoencoders Useful? A Case Study in Sparse Probing
    url: https://arxiv.org/abs/2502.16681
  - title: Yeo et al., Understanding Refusal in Language Models with Sparse Autoencoders
    url: https://arxiv.org/abs/2505.23556
  - title: Alignment Forum copy of the DeepMind post
    url: https://www.alignmentforum.org/posts/4uXCAJNuPKtKBsi28
  - title: Karvonen et al., SAEBench
    url: https://arxiv.org/abs/2503.09532
links:
  - to: sae-cross-seed-feature-consistency
    kind: RELATED
    note: Both ask whether SAE dictionaries are reliable enough for downstream use; instability across seeds is one possible cause of weak transfer.
timeline:
  - date: 2025-03-26
    title: Negative result reported
    body: DeepMind's mechanistic interpretability team reports SAE probes underperforming dense probes out of distribution on harmful-intent detection with held-out jailbreaks.
    source: https://deepmindsafetyresearch.medium.com/negative-results-for-sparse-autoencoders-on-downstream-tasks-and-deprioritising-sae-research-6cadcfc125b9
explainer:
  oneLine: Can a probe reading at most 20 sparse-autoencoder features match a plain probe on unfamiliar data? Evidence conflicts.
  flow:
    - Dense probe reads all activations
    - SAE probe reads ≤ 20 features
    - Worse on new jailbreaks, better on refusal
    - Settle on five fixed datasets
  glossary:
    - term: probe
      meaning: A simple classifier, usually a linear one, trained on a model's internal activations to read out a property such as harmful intent.
      link: https://en.wikipedia.org/wiki/Logistic_regression
    - term: sparse autoencoder (SAE)
      meaning: A model trained to rebuild a network's internal activations from a few active units out of a very large dictionary.
      link: /research/sparse-autoencoders-interpretability
    - term: feature (SAE latent)
      meaning: "One unit of an SAE dictionary: a direction in activation space that, ideally, stands for one human-readable concept."
      link: /research/sparse-autoencoders-interpretability
    - term: activation
      meaning: The vector of numbers a network layer outputs for a given input; interpretability methods study these.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: out-of-distribution
      meaning: Test data that differs in kind from the training data, such as new jailbreak styles a probe never saw.
      link: https://en.wikipedia.org/wiki/Domain_adaptation
    - term: jailbreak
      meaning: A prompt crafted to get a chat model to ignore its safety training.
      link: https://en.wikipedia.org/wiki/Prompt_injection
    - term: AUROC
      meaning: "Area under the ROC curve: 1.0 means a classifier ranks every positive above every negative, 0.5 means guessing."
      link: https://en.wikipedia.org/wiki/Receiver_operating_characteristic
    - term: random seed
      meaning: The starting number for a computer's random-number generator; changing it changes the random initial weights and data order of a run.
      link: https://en.wikipedia.org/wiki/Random_seed
  readFirst:
    - title: "Google DeepMind: Negative Results for Sparse Autoencoders On Downstream Tasks"
      url: https://www.alignmentforum.org/posts/4uXCAJNuPKtKBsi28
      why: The post reporting the negative result.
    - title: "Neel Nanda: Mechanistic interpretability glossary"
      url: https://www.neelnanda.io/mechanistic-interpretability/glossary
      why: Definitions for the terms used.
    - title: Understanding Refusal in Language Models with Sparse Autoencoders
      url: https://arxiv.org/abs/2505.23556
      why: The study where SAE-based probes generalised better.
site:
  aiReviewed: true
---

A DeepMind safety-team post reported that probes built on SAE features underperformed dense linear probes at out-of-distribution harmful-intent detection (new jailbreaks as the out-of-distribution set), and that retraining the SAE on chat data closed only about half of the gap. The question is whether any SAE-based probing method reaches accuracy within 1 percentage point of a dense linear probe on a fixed out-of-distribution split of at least five held-out text-classification datasets, using k-sparse probes with k at most 20, so that the probe stays interpretable.

# State of the art

The blog post reports dense linear probes near-perfect in and out of distribution (AUROC about 0.999 on held-out jailbreaks), while k-sparse SAE probes were noticeably worse out of distribution, and fine-tuning the SAE on chat data closed only about half of the gap. Kantamneni et al. (arXiv:2502.16681) find SAE probes underperform logistic regression on average in four hard regimes (data scarcity, class imbalance, label noise, covariate shift). In the other direction, Yeo et al. (arXiv:2505.23556, Findings of EMNLP 2025) report that probes on SAE refusal features generalise better than dense probes to adversarial out-of-distribution samples (WildJailbreak) for both Gemma-2-2B and Llama-3.1-8B. The evidence therefore conflicts across tasks and setups, which is why a fixed, multi-dataset comparison is needed.

# Applications

The practical case for SAEs over plain probes rests on interpretability of the readout; if sparse probes cannot match dense ones out of distribution, monitoring built on SAE features pays a robustness price.

# Resolution criteria

A public evaluation with code on the stated datasets, comparing k-sparse SAE probes with k at most 20 against dense linear probes on the same activations, with at least 3 SAE seeds and a result within the 1-point margin on the out-of-distribution split.

# Rating rationale

Difficulty 45: the evidence conflicts by task (worse out of distribution on harmful intent and on average in four hard probing regimes, better on adversarial refusal samples), and retraining on chat data closed only half the gap. Application value 35: interpretable monitoring probes. Leverage 33: bears directly on the practical case for SAEs.

# Work mix rationale

Mostly evaluation and iteration on SAE training data and probe design.

# Verification

Datasets: at least five public text-classification sets with a distribution shift split (for example jailbreak versus ordinary prompts for harmful-intent detection), splits fixed before training. Metric: out-of-distribution accuracy (or AUROC) of k-sparse SAE probes with k at most 20, versus an L2-regularised dense logistic-regression probe on the same layer. Threshold: within 1 percentage point, averaged over datasets, and no dataset worse than 3 points. Budget: probe training is cheap; SAE training on chat data is a single-GPU job per SAE. Seeds: at least 3 SAE seeds.

# Plain explanation

A probe is a tiny detector trained on a model's inner numbers, for example to flag harmful requests. A plain probe uses all the numbers. A sparse-autoencoder probe uses only a few readable features, so a person can see why it fired.

In 2025 a Google DeepMind team tested both on detecting harmful requests, then on a fresh set of attacks the probes had not seen. The plain probes stayed nearly perfect. The readable ones did noticeably worse, and retraining the feature finder on chat data closed only about half of the gap. The team said it would give SAE research lower priority. Other studies found mixed results.

The open challenge: find a readable-probe method that comes within one percentage point of the plain probe on new data across at least five text tasks, using no more than 20 features.

Why hard: the plain probe may use directions that the feature finder drops or splits, so the readable version loses information exactly where it is needed.

# Student explanation

**Probes.** A _probe_ is a simple classifier trained on a model's internal activations to read out a property, for example whether a prompt has harmful intent. A _dense_ linear probe takes all the activation numbers $x$ (thousands of them), computes a weighted sum $w \cdot x + b$, and says "harmful" if it is positive. It is just a dot product, fitted to labelled examples. A _sparse_ probe built on a sparse autoencoder (SAE) instead uses at most $k$ of the SAE's features, here $k \le 20$. Its appeal is interpretability: a person can read the 20 features and see why the probe fires.

**What is asked.** Whether some SAE-based probe gets within 1 percentage point of a dense probe on _out-of-distribution_ data, that is, test data unlike the training data, such as jailbreak styles (prompts crafted to bypass safety training) never seen in training, averaged over at least five datasets and no dataset worse by more than 3 points.

**Conflicting evidence.** A March 2025 report from Google DeepMind's interpretability team found dense probes near-perfect both on familiar and new jailbreaks (AUROC about 0.999, where 1.0 means perfect ranking of harmful above harmless), while sparse SAE probes were clearly worse on the new jailbreaks; retraining the SAE on chat data closed only about half of the gap. A separate study found SAE probes worse than ordinary logistic regression on average in four hard regimes: little data, imbalanced classes, noisy labels and shifted inputs. But a study of refusal behaviour found probes on SAE refusal features generalised better than dense probes to adversarial samples for two models (Gemma-2-2B and Llama-3.1-8B). The answer seems to depend on the task and the setup.

**Why it is hard.** A dense probe can use tiny signals spread over many directions, which often carry information the SAE throws away when it rebuilds activations from a few features. Restricting to 20 features is like summarising a medical scan by 20 named findings: easy to read, but a subtle pattern spread across the whole image may be lost. The analogy breaks when the named findings are exactly the robust ones, which is what the refusal study suggests can happen: a dense probe can also latch onto spurious detail that breaks on new data.

**What would settle it.** A public evaluation on five fixed datasets with distribution-shift splits chosen in advance, comparing $k \le 20$ SAE probes with dense probes on the same layer, with at least three SAE seeds.
