---
type: entry
slug: sparse-autoencoders-interpretability
title: Sparse autoencoders for interpretability
field: interpretability
kind: ALGORITHM
status: ACTIVE
summary: Dictionary-learning models trained on a network's activations to split them into sparse, often human-readable features; a main tool for finding units of computation in language models, with disputed practical value.
reliedOn: Feature dictionaries from sparse autoencoders underlie much current interpretability work, from circuit tracing to attempts at steering and monitoring model behaviour.
dependsOn:
  - transformer-architecture
references:
  - title: Cunningham et al., Sparse Autoencoders Find Highly Interpretable Features in Language Models (2023)
    url: https://arxiv.org/abs/2309.08600
    kind: paper
  - title: "Bricken et al., Towards Monosemanticity: Decomposing Language Models With Dictionary Learning (Anthropic, 2023)"
    url: https://transformer-circuits.pub/2023/monosemantic-features
    kind: article
  - title: Templeton et al., Scaling Monosemanticity (Anthropic, 2024)
    url: https://transformer-circuits.pub/2024/scaling-monosemanticity/
    kind: article
  - title: Gao et al., Scaling and evaluating sparse autoencoders (OpenAI, 2024)
    url: https://arxiv.org/abs/2406.04093
    kind: paper
  - title: Lieberum et al., Gemma Scope (2024)
    url: https://arxiv.org/abs/2408.05147
    kind: paper
  - title: Karvonen et al., SAEBench (ICML 2025)
    url: https://arxiv.org/abs/2503.09532
    kind: paper
  - title: Paulo and Belrose, Sparse Autoencoders Trained on the Same Data Learn Different Features (2025, preprint)
    url: https://arxiv.org/abs/2501.16615
    kind: paper
  - title: Google DeepMind, Negative Results for Sparse Autoencoders On Downstream Tasks and Deprioritising SAE Research (2025)
    url: https://deepmindsafetyresearch.medium.com/negative-results-for-sparse-autoencoders-on-downstream-tasks-and-deprioritising-sae-research-6cadcfc125b9
    kind: article
timeline:
  - date: 2023-09-15
    title: SAEs applied to language models
    body: Cunningham et al. report SAE features that are more interpretable than neurons.
    source: https://arxiv.org/abs/2309.08600
  - date: 2024-06-06
    title: TopK SAEs and scaling
    body: Gao et al. introduce TopK activation and study scaling of SAEs up to 16 million latents.
    source: https://arxiv.org/abs/2406.04093
  - date: 2025-01-28
    title: Seed dependence of SAE features (preprint)
    body: Paulo and Belrose report that only about 30% of features were shared across seeds for a 131K-latent SAE on Llama 3 8B.
    source: https://arxiv.org/abs/2501.16615
  - date: 2025-03-12
    title: SAEBench
    body: Karvonen et al. benchmark over 200 SAEs on eight metrics and find proxy gains do not reliably translate to practical performance.
    source: https://arxiv.org/abs/2503.09532
explainer:
  oneLine: A way to split a network's internal numbers into a long list of mostly-quiet, often readable features.
  flow:
    - Neurons mix many concepts
    - Train helper to rebuild activations
    - Force it to use few units
    - Units become features, but unstable
  glossary:
    - term: sparse autoencoder
      meaning: A model trained to rebuild a network's internal numbers using only a few active parts at a time, to find readable features.
      link: /research/sparse-autoencoders-interpretability
    - term: feature
      meaning: A direction in a network's internal numbers that seems to stand for a human-understandable concept.
      link: /research/sparse-autoencoders-interpretability
    - term: activation
      meaning: The numbers a layer of the network produces while it processes an input.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: superposition
      meaning: Storing more concepts than there are dimensions by overlapping them, which makes single neurons hard to read.
      link: https://transformer-circuits.pub/2022/toy_model/index.html
    - term: linear probe
      meaning: A simple classifier trained on a network's internal numbers to test what information they contain.
      link: https://en.wikipedia.org/wiki/Logistic_regression
    - term: out-of-distribution
      meaning: Data that differs from what the model or probe was trained on, such as new kinds of attack prompts.
      link: https://en.wikipedia.org/wiki/Domain_adaptation
    - term: seed
      meaning: The starting value of a random number generator. Different seeds give slightly different training runs.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: latent
      meaning: One hidden unit of an autoencoder; in a sparse autoencoder, each stands for a candidate feature.
      link: /research/sparse-autoencoders-interpretability
    - term: autoencoder
      meaning: A network trained to reproduce its input through a middle layer, so the middle layer becomes a new description of the input.
      link: https://en.wikipedia.org/wiki/Autoencoder
    - term: dictionary learning
      meaning: Finding a set of basic directions so that each data vector is a combination of only a few of them.
      link: https://en.wikipedia.org/wiki/Sparse_dictionary_learning
    - term: ReLU
      meaning: "The function max(0, z): it passes positive numbers unchanged and turns negative ones into zero."
      link: https://en.wikipedia.org/wiki/Rectifier_%28neural_networks%29
  readFirst:
    - title: "Anthropic: Toy Models of Superposition"
      url: https://transformer-circuits.pub/2022/toy_model/index.html
      why: Where the superposition idea is laid out.
    - title: "Neel Nanda: Mechanistic interpretability glossary"
      url: https://www.neelnanda.io/mechanistic-interpretability/glossary
      why: Plain definitions of the terms used in this field.
    - title: "Anthropic: Towards Monosemanticity"
      url: https://transformer-circuits.pub/2023/monosemantic-features
      why: The original SAE study on a small model, with an interactive browser of features.
site:
  published: true
  aiReviewed: true
---

## Motivation: superposition

Individual neurons in a transformer often respond to several unrelated things. One hypothesis is _superposition_: the network represents more features than it has dimensions by assigning them nearly orthogonal directions, relying on the fact that each feature is rarely active. If so, the natural unit of analysis is a direction in activation space, not a neuron, and the directions must be found.

## The method

A sparse autoencoder (SAE) is trained to reconstruct a model's activations (the residual stream, an MLP output or an attention output at a chosen layer) through a wide hidden layer whose activations are pushed to be sparse. Each hidden unit's decoder column is a candidate feature direction. Cunningham et al. (2023) and Bricken et al. (Anthropic, 2023) showed that the features of such dictionaries are more interpretable by automated and human ratings than neurons, in small models. Templeton et al. (Anthropic, 2024) scaled the approach to a production-scale model. Gao et al. (OpenAI, 2024) introduced the TopK activation, which sets sparsity directly, and studied scaling laws of SAE size and sparsity, training an SAE with 16 million latents on GPT-4 activations. DeepMind released Gemma Scope (Lieberum et al., 2024), a suite of open SAEs on Gemma 2 models.

## Evaluation and doubts

SAEs are evaluated by reconstruction fidelity versus sparsity, by automated and human interpretability scores, and by downstream tasks. SAEBench (Karvonen et al., ICML 2025) packages eight metrics, covers over 200 open SAEs across eight architectures, and reports that gains on proxy metrics do not reliably translate to better practical performance. The Mechanistic Interpretability Benchmark (Mueller et al., ICML 2025) reports that SAE features were not better than neurons in its causal-variable localization track. A Google DeepMind mechanistic-interpretability team post (26 March 2025) reported that SAE probes underperformed dense linear probes at out-of-distribution harmful-intent detection, and that the team was deprioritising fundamental SAE research as a result. Paulo and Belrose (2025, preprint) reported that SAEs trained on the same data with different seeds learn partly different features (for example only about 30% shared at 131K latents on a Llama 3 8B layer), which complicates treating the dictionary as discovering 'the' features.

SAEs are therefore both a widely used tool and a contested one; the linked problems ask for measurements that would settle two of the disputes.

# Plain explanation

Inside a language model are huge lists of numbers that nobody can read directly. Looking at one number at a time does not help much, because each number responds to a mix of unrelated things.

A sparse autoencoder is a second, helper network trained to rebuild those internal numbers while using only a handful of its own units at a time. This pressure to be sparse tends to make each unit stand for one idea: a particular city, a kind of code bug, a way of being polite. Researchers call them features. Show the units that light up for a sentence and you get a list of ideas the model seems to be using.

The method is popular and also under scrutiny. Different training runs find partly different feature lists. In one test, helper networks built to detect harmful requests from these features did worse than simple ones on new kinds of attack. So it is a promising microscope, not yet a proven one.

The analogy: it is like sorting a pile of mixed-up jigsaw pieces into boxes by picture; some boxes are clean, some are not, and a different sorter makes different boxes.

# Student explanation

**The question.** Inside a language model, each token is represented at each layer by a long vector of numbers, its _activations_. Interpretability asks what those numbers mean. The obvious idea, that each entry (each "neuron") stands for one concept, mostly fails: a single neuron often responds to several unrelated things.

**Superposition.** One explanation: the model stores more concepts (_features_) than it has dimensions by giving each a direction in the vector space rather than an axis. In 3D only three directions can be exactly perpendicular, but in a 4096-dimensional space very many directions can be almost perpendicular. If each concept is rarely present, a few active ones can share the space with little interference. The activation vector is then roughly

$x \approx \sum_i a_i\, d_i,$

a sum of feature directions $d_i$ weighted by strengths $a_i$, where almost all $a_i$ are zero for any given token. Finding the $d_i$ is then like solving a linear system with more unknowns than equations, which only works because most unknowns are zero.

**The method.** A sparse autoencoder (SAE) is a small separate network trained to reproduce the model's activations through a much wider middle layer. The encoder computes strengths $a = \mathrm{ReLU}(W_e x + b)$, where $\mathrm{ReLU}(z) = \max(0, z)$ sets negatives to zero; the decoder rebuilds $\hat{x} = W_d a$, whose columns are the candidate feature directions. Training minimises the squared reconstruction error $\lVert x - \hat{x} \rVert^2$ plus a penalty that pushes most $a_i$ to zero (or, in TopK SAEs, keeps only the $k$ largest). Many resulting features are readable: one fires on legal text, another on a particular city.

**An analogy.** It is like unmixing a chord into notes when you know only a few notes sound at once. The analogy breaks because nobody knows the true list of "notes", so there is no answer key to check the SAE against.

**Doubts.** SAEs have been scaled to production models with millions of features, but their usefulness is contested. A benchmark of over 200 SAEs found that better scores on proxy measures do not reliably mean better results on practical tasks. A DeepMind team found that simple probes built from SAE features detected harmful requests worse than a plain linear probe (a straight-line classifier on the raw activations) when tested on new kinds of input. Another study found that SAEs trained on the same data with different random seeds shared only about 30% of their features at one size, so the dictionary is not unique.

**What is open.** Whether SAEs find the model's real units of computation or one of many equally good decompositions, and whether they beat simpler tools on tasks that matter.
