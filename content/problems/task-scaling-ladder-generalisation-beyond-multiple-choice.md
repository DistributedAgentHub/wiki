---
type: problem
slug: task-scaling-ladder-generalisation-beyond-multiple-choice
title: Predicting benchmark accuracy of 7B+ models within 2 points beyond four multiple-choice tasks
entry: llm-evaluation-methodology
status: OPEN
origin: Bhagia et al., Establishing Task Scaling Laws via Compute-Efficient Model Ladders (arXiv:2412.04403, COLM 2025)
ratings:
  difficulty: 48
  applicationValue: 51
  leverage: 37
workMix:
  theory: 25
  engineering: 20
  compute: 35
  empirical: 20
verification:
  route: REPRODUCTION
sources:
  - title: Bhagia et al., Establishing Task Scaling Laws via Compute-Efficient Model Ladders
    url: https://arxiv.org/abs/2412.04403
  - title: Ruan et al., Observational Scaling Laws
    url: https://arxiv.org/abs/2405.10938
  - title: Schaeffer et al., Are Emergent Abilities of Large Language Models a Mirage?
    url: https://arxiv.org/abs/2304.15004
  - title: "Magnusson et al., DataDecide: How to Predict Best Pretraining Data with Small Experiments"
    url: https://arxiv.org/abs/2504.11393
links:
  - to: compute-optimal-tokens-per-parameter-confidence-interval
    kind: BUILDS_ON
    note: Task-score prediction starts from a loss prediction that needs a well-calibrated scaling fit.
timeline:
  - date: 2024-12-05
    title: Model ladders published
    body: Predicted 7B and 13B accuracy within 2 points on four tasks.
    source: https://arxiv.org/abs/2412.04403
explainer:
  oneLine: Can small models predict a big model's test scores within 2 points on 20 different tests, including coding and maths?
  flow:
    - Fit loss from model and data size
    - Fit task score from loss
    - Forecast the big model
    - Extend to generative tasks
  glossary:
    - term: scaling law
      meaning: A fitted formula, usually a power law, that predicts a model's loss from its size, data and compute.
      link: /research/neural-scaling-laws
    - term: evaluation methodology
      meaning: "How benchmark scores are produced: the task data, the prompt format, how answers are read and the metric used."
      link: /research/llm-evaluation-methodology
    - term: multiple-choice (ranked classification)
      meaning: Scoring a model by which answer option it rates most likely, rather than by text it writes.
      link: /research/llm-evaluation-methodology
    - term: exact match
      meaning: A score that counts an answer correct only if the generated text matches the reference exactly, so partial progress scores zero.
      link: https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)
    - term: benchmark
      meaning: A fixed set of tasks and a scoring rule used to compare methods fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: pre-registration
      meaning: Publishing a prediction (here with a timestamped hash) before the measurement, so it cannot be adjusted afterwards.
      link: https://en.wikipedia.org/wiki/Preregistration_(science)
    - term: validation loss
      meaning: The model's average prediction error on held-out text it never trained on; lower means better prediction.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
    - term: token
      meaning: A chunk of text, roughly three-quarters of a word on average, that a language model reads and predicts one at a time.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: parameter
      meaning: One adjustable number (weight) inside a neural network; large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: random seed
      meaning: The starting number for a computer's random-number generator; changing it changes the random initial weights and data order of a run.
      link: https://en.wikipedia.org/wiki/Random_seed
  readFirst:
    - title: Establishing Task Scaling Laws via Compute-Efficient Model Ladders
      url: https://arxiv.org/abs/2412.04403
      why: The method being extended.
    - title: EleutherAI lm-evaluation-harness
      url: https://github.com/EleutherAI/lm-evaluation-harness
      why: The tool used to score models.
    - title: Are Emergent Abilities of Large Language Models a Mirage?
      url: https://arxiv.org/abs/2304.15004
      why: Why all-or-nothing metrics make abilities look sudden.
raw:
  body: "Model ladders trained at about 1% of a target model's compute predicted the accuracy of a 7B model (4T tokens) and a 13B model (5T tokens) within 2 points of absolute error on four multiple-choice tasks formatted as ranked classification. The question is whether the same procedure achieves absolute error of at most 2 points on at least 20 benchmarks including generative tasks (code pass@1, math with exact-match answers) and on a model family different from the one used to develop the method, and how the error varies with task variance across checkpoints."
site:
  aiReviewed: true
---

# State of the art

Bhagia et al. report that errors within 2 points were obtained on four ranked-classification tasks and that tasks with higher prediction error have higher variance across checkpoints. Standard loss power laws alone do not predict task accuracy. Observational scaling laws (Ruan et al., arXiv:2405.10938) take a different route, fitting across many existing public models. Schaeffer et al. (arXiv:2304.15004) argue that metric choice drives apparent emergence, which suggests generative exact-match tasks are the harder case. The paper's own appendix applies the ladder to OLMo 2 32B (trained on 6T tokens, ladder at about 0.45% of its compute) on seven multiple-choice tasks and reports a mean absolute error of 5.81 points, with ARC-Challenge off by 13.2, so the 2-point result does not yet carry to larger targets. DataDecide (Magnusson et al., arXiv:2504.11393) releases 25-corpus model suites up to 1B parameters and finds small-scale rankings predict the better data about 80% of the time, which is a ranking rather than an accuracy prediction. No ladder prediction validated on 20 or more tasks including generative ones was found.

# Applications

Forecasting benchmark results before launching a large run lets teams choose data mixes and sizes by expected downstream value instead of loss only.

# Resolution criteria

A public study with ladder code, small-model checkpoints and held-out target-model scores, showing absolute error of at most 2 points on at least 20 tasks including generative tasks, with the target predictions published before the target model is evaluated.

# Rating rationale

Difficulty 48: the method's own extension to OLMo 2 32B missed by 5.8 points on average, and generative exact-match metrics are not smooth in loss, so a 2-point bar on 20 tasks needs new ideas. Application value 51: forecasting downstream value before a large run steers data and size choices. Leverage 37: underlies capability forecasting more broadly.

# Work mix rationale

Method development, then ladder training and held-out target evaluation.

# Verification

Benchmarks: at least 20 tasks including generative ones, scored with the lm-evaluation-harness at pinned versions. Metric: absolute accuracy error between predicted and measured score of the target model, per task. Threshold: at most 2 points on at least 18 of 20 tasks, and predictions committed (hashed and timestamped) before the target is evaluated. Budget: ladder runs of about 1% of the target's training compute (for a 7B model on 4T tokens, about 1.7x10^23 FLOPs in total, so about 1.7x10^21 FLOPs for the ladder); at least 3 ladder seeds.

# Plain explanation

Training a big model takes months, yet teams want to know in advance how it will do on real tests. A 2024 method trains a ladder of small models, fits a rule linking their size to their error on text, then a second rule linking that error to their test scores, and uses both to forecast the big model. For two big models, it was right within 2 points on four multiple-choice tests, using about 1% of their training cost.

The open question is whether this works more broadly: on at least 20 tests, including ones where the model must write code or give a numeric answer, and for a family of models other than the one used to build the method.

Why hard: multiple-choice scores change smoothly with model size, while all-or-nothing tests such as exact match can jump, which breaks simple fits. The predictions would also have to be locked in before the big model is tested.

# Student explanation

**What is asked.** Before spending millions on a large training run, a team would like to know how the finished model will score on tests such as coding, maths and general-knowledge benchmarks. A _model ladder_ trains a series of small models costing together about 1% of the target, then predicts the target's scores in two steps: first fit a scaling law from model and data size to loss (the average prediction error), then fit a second curve from loss to task accuracy. The problem asks whether this predicts a 7B-or-larger model's score within 2 percentage points on at least 20 benchmarks, including generative tasks such as writing code that passes tests or maths answers checked by exact match, and on a model family other than the one used to build the method, with predictions published before the target is measured.

**What is known.** The ladder paper predicted a 7B model (4T tokens) and a 13B model (5T tokens) within 2 points on four multiple-choice tasks, scored by which option the model rates most likely. Its own appendix applied the ladder to a 32B model trained on 6T tokens, using about 0.45% of its compute, on seven multiple-choice tasks: the mean error was 5.81 points, and one task (ARC-Challenge) was off by 13.2. A related open suite of models up to 1B parameters found that small-scale rankings pick the better training data about 80% of the time, which is a ranking, not an accuracy prediction. No ladder has been validated on 20 or more tasks including generative ones.

**Why it is hard.** Loss falls smoothly as models grow, but test scores do not have to. Exact-match scoring gives zero credit until the whole answer is right. Suppose each of 10 steps in a maths answer is right with probability $p$; the full answer is right with probability $p^{10}$. Going from $p = 0.8$ to $p = 0.9$ moves that from about 11% to about 35%, a large jump from a modest improvement. The second fitting step must capture such sharp curves from small models whose scores are near zero. Tasks with noisy scores across checkpoints are also the ones predicted worst.

**An analogy.** It is like predicting a bridge's failure load from small test beams: stiffness scales smoothly, but failure depends on the weakest link and can appear suddenly. The analogy breaks because model "failures" can also disappear suddenly as size grows.

**How it is checked.** Predictions are hashed and timestamped before the target is evaluated with a pinned scoring tool, then compared task by task; 18 of 20 tasks must land within 2 points.
