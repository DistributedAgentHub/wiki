---
type: problem
slug: rlvr-new-reasoning-vs-sharpening-pass-at-k
title: Does RLVR create new reasoning ability or only sharpen the base model? A pass@k protocol that separates the two
entry: rlvr-grpo-reasoning
status: OPEN
origin: Open debate since the DeepSeek-R1 report (January 2025); sharpened by Yue et al. (April 2025) and ProRL (May 2025)
ratings:
  difficulty: 50
  applicationValue: 60
  leverage: 52
workMix:
  theory: 15
  engineering: 15
  compute: 40
  empirical: 30
verification:
  route: REPRODUCTION
sources:
  - title: Yue et al. (2025). Does RL Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model? (arXiv preprint)
    url: https://arxiv.org/abs/2504.13837
  - title: "Liu et al. (2025). ProRL: Prolonged RL Expands Reasoning Boundaries (arXiv preprint)"
    url: https://arxiv.org/abs/2505.24864
  - title: "The Invisible Leash: Why RLVR May or May Not Escape Its Origin (arXiv preprint)"
    url: https://arxiv.org/abs/2507.14843
  - title: Liu et al. (2025). Understanding R1-Zero-Like Training (arXiv preprint)
    url: https://arxiv.org/abs/2503.20783
links:
  - to: llm-rl-compute-scaling-extrapolation
    kind: RELATED
    note: Both concern what extra RL compute buys; the scaling fit predicts pass@1-style accuracy, the pass@k protocol asks whether the capability set grows.
timeline:
  - date: 2025-04-18
    title: Pass@k evidence against expansion
    body: Yue et al. report base models matching or exceeding RL models at large k (preprint).
    source: https://arxiv.org/abs/2504.13837
  - date: 2025-05-30
    title: ProRL evidence for expansion
    body: Prolonged RL is reported to solve problems that base models fail regardless of sampling (preprint).
    source: https://arxiv.org/abs/2505.24864
  - date: 2025-07-20
    title: Support-dynamics analysis
    body: Question-level matching finds shrinkage of verified support outweighs expansion at tested budgets (preprint).
    source: https://arxiv.org/abs/2507.14843
explainer:
  oneLine: When AI practises on checkable problems, does it learn new tricks or just get more reliable at old ones?
  flow:
    - Pick base model and RL recipe
    - Sample thousands of answers each
    - Check answers and reasoning
    - Count problems only RL solves
    - Repeat across seeds and models
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: language model
      meaning: A neural network trained to predict text, which can then write answers and code.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: base model
      meaning: A language model after pretraining but before extra training for instructions or reasoning.
      link: https://en.wikipedia.org/wiki/Foundation_model
    - term: pass@k
      meaning: The chance that at least one of k tries is correct.
      link: https://arxiv.org/abs/2107.03374
    - term: verifiable reward
      meaning: A reward computed by a program that checks an answer, such as a maths result or code tests.
      link: /research/rlvr-grpo-reasoning
    - term: distillation
      meaning: Training a model to imitate a stronger model.
      link: https://en.wikipedia.org/wiki/Knowledge_distillation
    - term: random seed
      meaning: The starting number of a random process. Different seeds give different training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: data contamination
      meaning: When test questions were already in the training data, making scores look better than they should.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
    - term: confidence interval
      meaning: A range computed from data that would contain the true value in a stated fraction (often 95%) of repeated experiments.
      link: https://en.wikipedia.org/wiki/Confidence_interval
    - term: pre-registration
      meaning: Publishing the exact analysis plan before collecting results, so the analysis cannot be tuned to the outcome.
      link: https://en.wikipedia.org/wiki/Preregistration_(science)
    - term: sampling temperature
      meaning: A setting that sharpens (low) or flattens (high) the model's word probabilities before sampling, controlling how varied its answers are.
      link: https://en.wikipedia.org/wiki/Softmax_function
  readFirst:
    - title: Does RL Really Incentivize Reasoning Capacity Beyond the Base Model? (arXiv preprint)
      url: https://arxiv.org/abs/2504.13837
      why: The main sceptical study.
    - title: "ProRL: Prolonged RL Expands Reasoning Boundaries (arXiv preprint)"
      url: https://arxiv.org/abs/2505.24864
      why: The main counter-study.
    - title: The Invisible Leash (arXiv preprint)
      url: https://arxiv.org/abs/2507.14843
      why: A question-by-question look at what is gained and lost.
raw:
  stateOfArt: "Evidence conflicts. Yue et al. (arXiv preprint, 2025) evaluate pass@$k$ with $k$ up to 128 to 1024 on math, code and visual benchmarks and report that RL-trained models beat base models at small $k$ but are overtaken at large $k$; on AIME 2024 at $k=1024$, 13.3% of problems were solved only by the base model and 0.0% only by the RL model, though on MATH500 at $k=256$ GRPO's pass@256 (97.2) was slightly above the base model's (96.2), so the deficit is not universal. They find distilling from a stronger teacher does extend the boundary. ProRL (NVIDIA, preprint) reports that prolonged RL with KL control and reference-policy resets solves problems the base model fails regardless of attempts. \"The Invisible Leash\" (preprint) finds on question-level matching that lost verified successes outweigh gained ones at the tested budgets. Open issues: pass@$k$ on short-answer maths can count lucky guesses; larger $k$ is expensive; base-model pretraining already influences results (Liu et al., 2025, preprint)."
site:
  aiReviewed: true
---

Fix a base language model $B$ and a model $M$ obtained from $B$ by RL with verifiable rewards. For a problem set $\mathcal{P}$ with programmatic verifiers, let $S_k(X)$ be the set of problems for which at least one of $k$ samples from $X$ is verified correct. **Sharpening** means $S_k(M)\subseteq S_k(B)$ up to sampling noise at large $k$, with $M$ merely reaching the same solutions at lower $k$. **Expansion** means $M$ reliably solves a statistically significant set of problems that $B$ never solves at the largest affordable $k$, with reasoning that is correct and not a lucky guess. The question: for which base models, RL recipes, training lengths and task families does expansion occur, and can a single pre-registered protocol decide between the two hypotheses?

# Applications

Decides whether scaling RL compute can produce capabilities beyond pretraining or whether capability must come from better base models and distillation, which shapes how labs allocate compute between pretraining, RL and distillation. No direct product use.

# Resolution criteria

An independently reproduced, pre-registered evaluation on at least two base-model families showing, with confidence intervals over problems and over at least three RL training seeds, either a significant positive set of base-unsolved problems solved by $M$ with verified reasoning, or a bound showing none at the stated budget.

# Rating rationale

Difficulty 50: experiments are feasible but published results conflict and depend on base model, recipe, training length and sampling budget, so a decisive protocol is research-grade; level with optimizer-speedup-over-tuned-adamw-1b-scale (50). Application value 60: labs split compute between pretraining, RL and distillation partly on this answer. Leverage 52: it frames how RL on reasoning models is interpreted, a subfield-shaping question.

# Work mix rationale

Mostly large-scale sampling and training runs plus careful experimental design; the theory content is about defining expansion versus sharpening.

# Verification

Benchmarks: AIME 2024 and 2025, a held-out olympiad set and a code set with hidden unit tests (for example LiveCodeBench), plus a contamination check against the base model's training data. Protocol: sample $n\ge 1024$ responses per problem from $B$ and from $M$ at temperature 0.6 and top-p 0.95 (the setting used by Yue et al.), report unbiased pass@$k$ for $k=1,\dots,n$, and count problems with $\mathrm{pass}@1024(B)=0$ solved by $M$. Accept a correct-reasoning label only after automatic answer checks plus manual or model-assisted chain-of-thought review of a pre-registered sample. Seeds: at least 3 independent RL training runs per recipe with bootstrap confidence intervals over problems. Compute: report GPU-hours for RL and sampling; evaluation alone is on the order of $2\times10^6$ to $10^7$ sampled responses per model on the maths set, so budget accordingly.

# Plain explanation

Picture a student who can solve a hard puzzle about one time in a hundred. After a lot of practice with an answer key, the student solves it nearly every time. Did the student learn something new? Or did they just get better at using a skill they already had?

This question matters for AI reasoning models. They are trained with reinforcement learning on problems whose answers a computer can check. After training they score much higher. But if you let the original model try a thousand times, it sometimes finds the same solutions. Some studies conclude the training only made the model more consistent. Other studies find that long training lets models solve problems that the original model never solved, even with thousands of tries.

Nobody knows which is the full story. The answer probably depends on the model, the kind of problem and how long training runs. A fair test is hard: a model can guess a short answer right by luck, and trying thousands of times is expensive.

The open task is to design one careful, agreed test that tells the two cases apart, and to run it on several models.

# Student explanation

**Why it matters.** Labs spend large amounts of computation on reinforcement learning with verifiable rewards (RLVR) after pretraining. If RL teaches a model to solve problems it previously could not, more RL compute buys new ability. If RL only makes the model pick, more reliably, solutions it could already produce occasionally, the ability has to come from the base model or from distillation (training on a stronger model's outputs).

**The measuring tool.** For a problem with an automatic checker, pass@$k$ is the probability that at least one of $k$ independent samples is correct. If one sample is correct with probability $p$, then
$\text{pass@}k=1-(1-p)^k,$
one minus the chance that all $k$ samples fail. Even a tiny $p$ gives a high pass@$k$ for large $k$, so pass\@1 measures reliability while pass\@1024 measures whether the model can solve the problem at all.

**Two hypotheses.** _Sharpening:_ RL raises $p$ on problems where the base model already had $p>0$, so the RL model wins at $k=1$ but the base model catches up at large $k$. _Expansion:_ RL makes $p>0$ on problems where the base model has $p=0$.

**Evidence so far.** Yue et al. (2025, preprint) sampled with temperature 0.6 and top-p 0.95 (settings that control how random the sampling is). On AIME 2024 at $k=1024$, 13.3% of problems were solved only by the base model and 0.0% only by the RL model, supporting sharpening; but on MATH500, GRPO's pass\@256 (97.2) was slightly above the base model's (96.2). ProRL (2025, preprint) reports problems solved after long RL training that the base model never solves. "The Invisible Leash" (2025, preprint) matches successes question by question and finds more lost than gained at its sampling budgets.

**Why it is hard.** "Never solves" is only a statement at a finite budget: $p=0.0005$ looks like zero at $k=1024$. Short numerical answers can be guessed correctly with flawed reasoning, which inflates pass@$k$. Results depend on the base model, the RL recipe, the training length and whether test problems leaked into pretraining data (contamination). Sampling 1,024 long answers per problem for several models and seeds is expensive.

**The target.** A pre-registered protocol (the analysis is fixed before the data is seen) on at least two base-model families and at least three RL training seeds, with confidence intervals over problems and review of the reasoning for a sample of claimed new solves. It should show either a significant set of base-unsolved problems that the RL model solves, or a bound that none exist at the stated budget.
