---
type: entry
slug: llm-evaluation-methodology
title: Language-model evaluation methodology
field: scaling-laws
kind: THEORY
status: ACTIVE
summary: "How benchmark scores of language models are produced and what can go wrong: prompt format, contamination, judge models, metric choice and predicting task scores from loss."
reliedOn: Model comparisons, scaling-law claims and safety decisions all rest on benchmark scores, so evaluation choices determine what the field believes works.
dependsOn:
  - neural-scaling-laws
references:
  - title: Liang et al., Holistic Evaluation of Language Models (HELM, 2022)
    url: https://arxiv.org/abs/2211.09110
    kind: paper
  - title: Biderman et al., Lessons from the Trenches on Reproducible Evaluation of Language Models (2024)
    url: https://arxiv.org/abs/2405.14782
    kind: paper
  - title: Zheng et al., Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (2023)
    url: https://arxiv.org/abs/2306.05685
    kind: paper
  - title: Schaeffer et al., Are Emergent Abilities of Large Language Models a Mirage? (2023)
    url: https://arxiv.org/abs/2304.15004
    kind: paper
  - title: Dominguez-Olmedo et al., Training on the Test Task Confounds Evaluation and Emergence (2024)
    url: https://arxiv.org/abs/2407.07890
    kind: paper
  - title: "Xu et al., Benchmark Data Contamination of Large Language Models: A Survey (2024)"
    url: https://arxiv.org/abs/2406.04244
    kind: paper
  - title: Ruan et al., Observational Scaling Laws and the Predictability of Language Model Performance (2024)
    url: https://arxiv.org/abs/2405.10938
    kind: paper
  - title: Bhagia et al., Establishing Task Scaling Laws via Compute-Efficient Model Ladders (COLM 2025)
    url: https://arxiv.org/abs/2412.04403
    kind: paper
timeline:
  - date: 2022-11-16
    title: HELM
    body: Liang et al. propose multi-metric, multi-scenario evaluation of language models.
    source: https://arxiv.org/abs/2211.09110
  - date: 2023-04-28
    title: Emergence and metric choice
    body: Schaeffer et al. argue that apparent emergent abilities can follow from the choice of metric.
    source: https://arxiv.org/abs/2304.15004
  - date: 2024-12-05
    title: Task scaling laws via model ladders
    body: Bhagia et al. predict 7B and 13B accuracy on four tasks within 2 points from about 1% of the compute.
    source: https://arxiv.org/abs/2412.04403
explainer:
  oneLine: How we score language models, and the many ways a score can mislead.
  flow:
    - Score depends on many choices
    - Contamination and metric traps
    - Judges have biases
    - Predicting scores before training
  glossary:
    - term: benchmark
      meaning: A fixed test, with fixed rules, used to compare methods fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: large language model
      meaning: A very large neural network trained on text to predict the next token, as in modern chatbots.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: contamination
      meaning: When test questions leaked into the training text, so scores overstate ability.
      link: /research/llm-evaluation-methodology
    - term: ranked classification
      meaning: Scoring a multiple-choice question by checking which answer the model finds most likely.
      link: /research/llm-evaluation-methodology
    - term: scaling law
      meaning: A smooth rule that predicts how a model's error falls as model size, data and computing grow.
      link: /research/neural-scaling-laws
    - term: baseline
      meaning: The standard method a new idea must beat for the comparison to mean anything.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: loss
      meaning: A single number measuring how wrong the model is on the training or test text. Lower is better.
      link: https://en.wikipedia.org/wiki/Loss_function
    - term: prompt template
      meaning: The fixed wrapping text around each test question, such as instructions or worked examples, that the model is shown.
      link: https://en.wikipedia.org/wiki/Prompt_engineering
    - term: exact match
      meaning: A metric that counts an answer correct only if it equals the reference answer exactly.
      link: https://en.wikipedia.org/wiki/Evaluation_measures_%28information_retrieval%29
    - term: LLM-as-a-judge
      meaning: Using a strong language model to grade or compare the answers of other models instead of human raters.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: model ladder
      meaning: A series of small models trained to fit a curve that predicts how a large model will score.
      link: /research/neural-scaling-laws
  readFirst:
    - title: "Wikipedia: Large language model, evaluation section"
      url: https://en.wikipedia.org/wiki/Large_language_model
      why: Overview of how models are evaluated.
    - title: EleutherAI lm-evaluation-harness
      url: https://github.com/EleutherAI/lm-evaluation-harness
      why: The open tool used to run many standard tests.
    - title: "Hugging Face: Let's talk about LLM evaluation"
      url: https://huggingface.co/blog/clefourrier/llm-evaluation
      why: An evaluation maintainer explains automatic benchmarks, human ratings and model judges.
raw:
  body: "## What is being measured\n\nA language-model score is the output of a pipeline: a task dataset, a prompt template (zero- or few-shot), a way of reading the answer (the likelihood of each multiple-choice option, or a generated string checked by rule or by a judge model), and a metric. Small changes in any step shift the number, which is why results from different groups often disagree. **Lessons from the Trenches** (Biderman et al., 2024) documents these sensitivities and describes the lm-evaluation-harness, an open framework meant to make runs reproducible. **HELM** (Liang et al., 2022) argues for reporting many scenarios and metrics (accuracy, calibration, robustness, fairness, efficiency) rather than a single score.\n\n## Failure modes\n\n- **Contamination.** Test items appearing in pre-training data inflate scores; a survey (Xu et al., 2024) catalogues detection methods, all of which have limits.\n- **Training on the test task.** Dominguez-Olmedo et al. (2024) argue that models trained on different amounts of task-style data are not comparable, and that giving every model the same task-specific fine-tuning before testing changes rankings and reduces apparent emergence.\n- **Metric artefacts.** Schaeffer et al. (2023) argued that apparently sudden 'emergent' abilities can come from discontinuous metrics such as exact match rather than from a change in the model.\n- **Judge models.** Zheng et al. (2023) examine using strong models as judges (MT-Bench, Chatbot Arena), report agreement with human preferences above 80% for GPT-4, and document position, verbosity and self-preference biases.\n\n## Predicting scores\n\nPre-training loss follows smooth scaling laws, but task accuracy does not follow them directly. Two lines of work address this: *model ladders* (Bhagia et al., 2024) fit a two-step relation from model and data size to loss and from loss to task accuracy using small models, and *observational scaling laws* (Ruan et al., 2024) fit a low-dimensional capability space across many existing models. Bhagia et al. report predicting the accuracy of 7B and 13B target models within 2 points absolute error on four multiple-choice tasks using about 1% of the targets' compute.\n\nEvaluation methodology is not a closed field: there is no agreed answer for how to evaluate open-ended generation, agents or long-context behaviour with the reliability expected of a measurement instrument."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A score on a test seems simple: ask the model questions and count the right answers. In practice many choices change the number. How the question is phrased, how many examples are shown first, how the answer is read, and whether the model already saw the test questions during training can each shift a result by a lot.

This is why two groups can report different scores for the same model. Careful projects now publish exactly how their tests were run so that others can repeat them.

There are further traps. If test questions leaked into training text, the score measures memory. Some abilities seem to appear suddenly in big models, but part of that can come from how the test is graded: all-or-nothing grading hides gradual progress. Using one model to grade another is cheap and agrees with human preference much of the time, but graders have habits, such as liking longer answers.

A newer line of work tries to predict a model's test score before it is trained, using small models. It is possible for a few multiple-choice tests, and is harder for open-ended tasks.

The analogy: it is like marking exams where the exam paper, the marker and the pupil's earlier homework all affect the grade.

# Student explanation

**Why it matters.** Claims such as "model A is better at maths than model B" decide which models get built, deployed and trusted. Each such claim rests on a benchmark score, and a score is the output of a measurement pipeline that can go wrong in many places, like any lab measurement.

**The pipeline.** A score needs (1) a dataset of questions, (2) a prompt template that wraps each question (with or without worked examples), (3) a way to read the answer and (4) a metric. For multiple choice, one common reading compares the probability the model assigns to each option and picks the highest. For open answers, the generated text is checked by a rule (exact match, running the code against tests) or by another model acting as judge. Changing any of these, even the wording of the template, can move the score by several points, which is why results from different groups often disagree. Open tools such as the lm-evaluation-harness fix the pipeline in code so others can rerun it.

**An analogy.** It is like measuring a resistor: the reading depends on the meter, the leads, the temperature and how you hold the probes, so a number without its method is not a measurement. The analogy breaks because language models can also have seen the "test resistor" before.

**Failure modes.**

- _Contamination_: test questions that appeared in the training text inflate scores, and detection methods all have gaps.
- _Training on the test task_: models trained on more exam-style data look better; giving every model the same task-specific practice before testing changes the rankings.
- _Metric artefacts_: with an all-or-nothing metric such as exact match, a model that gets steadily better at each step of a ten-step answer still scores zero until every step is right, so an ability can appear "suddenly" even when the underlying improvement is smooth. If each step is right with probability $p$, the whole answer is right with probability $p^{10}$: at $p = 0.8$ that is about 0.11, at $p = 0.95$ about 0.60.
- _Judge models_: a strong model used as judge agreed with human preferences more than 80% of the time in one study, but it favours longer answers, answers in a certain position and its own style.

**Predicting scores in advance.** Training loss follows smooth scaling laws, but accuracy on a particular test does not follow them directly. _Model ladders_ fit two steps with small models: from size and data to loss, then from loss to accuracy. One study predicted the accuracy of 7- and 13-billion-parameter models within 2 points on four multiple-choice tasks using about 1% of their compute.

**What is open.** There is no agreed, reliable way to evaluate open-ended writing, agents that act over many steps, or long documents, with the repeatability expected of an engineering measurement.
