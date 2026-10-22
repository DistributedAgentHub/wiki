---
type: problem
slug: mib-circuit-localization-leaderboard-record
title: Beating the best circuit-localization method on the MIB benchmark
entry: mechanistic-circuits
status: OPEN
origin: "Mueller, Geiger, Wiegreffe et al., MIB: A Mechanistic Interpretability Benchmark (arXiv:2504.13151, ICML 2025)"
ratings:
  difficulty: 32
  applicationValue: 24
  leverage: 19
workMix:
  theory: 35
  engineering: 30
  compute: 30
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: "Mueller et al., MIB: A Mechanistic Interpretability Benchmark"
    url: https://arxiv.org/abs/2504.13151
  - title: MIB project site
    url: https://mib-bench.github.io
  - title: MIB public leaderboard (Hugging Face space)
    url: https://huggingface.co/spaces/mib-bench/leaderboard
timeline:
  - date: 2025-04-17
    title: MIB released
    body: Benchmark with circuit-localization and causal-variable tracks introduced.
    source: https://arxiv.org/abs/2504.13151
explainer:
  oneLine: Which method finds the parts of a model that produce a behaviour best on the shared MIB test?
  flow:
    - Pick task and model
    - Method selects components
    - Score faithfulness at fixed size
    - Beat the leaderboard
  glossary:
    - term: circuit
      meaning: A small set of model components and the connections between them that together carry out one behaviour.
      link: /research/mechanistic-circuits
    - term: activation patching
      meaning: Replacing one component's activation with its value from a different input and measuring how the output changes.
      link: /research/mechanistic-circuits
    - term: faithfulness
      meaning: How well a circuit on its own reproduces the full model's behaviour on the task.
      link: /research/mechanistic-circuits
    - term: attention head
      meaning: A transformer component that lets each token gather information from earlier tokens, weighted by learned relevance.
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: activation
      meaning: The vector of numbers a network layer outputs for a given input; interpretability methods study these.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: leaderboard
      meaning: A public ranking of submitted methods on a fixed benchmark, scored by the organisers' code.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: benchmark
      meaning: A fixed set of tasks and a scoring rule used to compare methods fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: sparse autoencoder (SAE)
      meaning: A model trained to rebuild a network's internal activations from a few active units out of a very large dictionary.
      link: /research/sparse-autoencoders-interpretability
  readFirst:
    - title: "Distill: Zoom In, An Introduction to Circuits"
      url: https://distill.pub/2020/circuits/zoom-in/
      why: Why circuits are a useful unit of explanation.
    - title: MIB project site
      url: https://mib-bench.github.io
      why: The benchmark and its leaderboard.
    - title: "Interpretability in the Wild: a Circuit for Indirect Object Identification"
      url: https://arxiv.org/abs/2211.00593
      why: The worked example behind the "Mary and John" task.
site:
  aiReviewed: true
---

On the circuit-localization track of MIB (four tasks and five models), find a method whose circuits score better than those of the best existing method on the benchmark's faithfulness-based metrics at matched circuit sizes, averaged over all task-model pairs, using the benchmark's own evaluation code and public leaderboard.

# State of the art

The MIB paper reports that attribution and mask optimisation methods perform best on circuit localization, and that SAE features are not better than neurons on the causal-variable localization track. The causal-variable track, not this one, is where SAE features did no better than neurons. The public leaderboard is a Hugging Face space (mib-bench/leaderboard), live on 2026-10-17; no figures are quoted here because leaderboard values change and were not independently rerun.

# Applications

A better localization method means circuits that explain more of a model's behaviour with fewer components, which is the prerequisite for scaling circuit-level explanations beyond hand analysis of small models.

# Resolution criteria

A submission to the MIB circuit-localization leaderboard with higher scores than the best prior entry on the benchmark's aggregate metric, reproduced from released code.

# Rating rationale

Difficulty 32: an incremental leaderboard improvement on a fixed benchmark, easier than the SAE questions (45 to 55). Application value 24: indirect, through better circuit tools. Leverage 19: the benchmark covers small models, so a record says little about frontier-scale analysis.

# Work mix rationale

Method design evaluated on a fixed benchmark.

# Verification

Benchmark: MIB circuit-localization track, all four tasks and five models as defined in the paper, evaluated with the official code. Metric: the benchmark's aggregate circuit faithfulness score at matched circuit sizes. Threshold: strictly above the best entry on the official leaderboard at submission time. Budget: the benchmark's published compute requirements; report seeds for any stochastic method.

# Plain explanation

If you want to know which parts of a language model make it do something, say pick the right name in a sentence, you need a way to search. Several search methods exist, and until recently they were tested on different problems, so nobody could say which was best.

The Mechanistic Interpretability Benchmark (MIB), published in 2025, fixes this. It sets four tasks and five models, and a score for how well the parts a method picks reproduce the model's behaviour at a given size of selection. The authors found that methods based on tracking how outputs change with each part, and on learning which parts to switch off, did best.

The open task is to submit a method that scores higher than the best one on the benchmark's public leaderboard.

Why hard: exact answers need a huge number of test runs, shortcuts give errors, and bigger models make everything slower. Progress is likely to come in small steps.

# Student explanation

**The idea of a circuit.** A language model is built from components: attention heads, which let a token gather information from earlier tokens, and feed-forward blocks. For a narrow behaviour, such as completing "When Mary and John went to the store, John gave a drink to \_\_\_" with "Mary", only a small subset of components and the connections between them may matter. That subset is called a _circuit_. Finding it is like tracing which wires in a large electronic board carry a particular signal.

**How circuits are found.** The basic tool is _activation patching_: run the model on a clean input and on a slightly altered one, swap one component's output between the runs, and see how much the answer changes. A component whose swap changes the answer a lot is part of the circuit. Patching every component one by one is too slow for large models, so methods approximate it, for example by using derivatives to estimate each swap's effect in one pass (attribution), or by learning a mask that switches components on or off.

**The benchmark.** The Mechanistic Interpretability Benchmark (MIB) standardises the comparison. Its circuit-localization track uses four tasks (including the name example above and arithmetic) and five models, from GPT-2 small to Llama-3.1 8B. A method proposes a circuit of a given size; the benchmark measures _faithfulness_, how much of the full model's behaviour the circuit alone reproduces, across circuit sizes. The paper reports that attribution-based and mask-optimisation methods do best. A separate track, on locating variables, found sparse-autoencoder features no better than individual neurons. The leaderboard is public.

**What is asked.** A method whose circuits score higher than the best existing entry on the benchmark's aggregate faithfulness measure at matched circuit sizes, averaged over all task–model pairs, using the official code.

**Why it is hard.** Faithfulness depends on many interacting components, so a component that looks unimportant alone may matter in combination; testing all combinations grows exponentially. A worked number: a model with 300 components has $2^{300}$ possible subsets, so methods must rank components cleverly rather than search. Gains are expected to be incremental, and a record says little about very large models, which the benchmark does not cover.

**How it is checked.** The new method is submitted to the leaderboard and reproduced from released code.
