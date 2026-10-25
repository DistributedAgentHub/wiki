---
type: entry
slug: mechanistic-circuits
title: Mechanistic circuits and causal interventions
field: interpretability
kind: THEORY
status: ACTIVE
summary: Methods that locate the subgraph of a network's components responsible for a behaviour, using activation patching and attribution, and check the result by intervention.
reliedOn: Circuit-level explanations are the standard for claiming to understand how a model performs a task, and activation patching is the common causal test used across interpretability research.
dependsOn:
  - reverse-mode-autodiff
  - transformer-architecture
references:
  - title: Elhage et al., A Mathematical Framework for Transformer Circuits (2021)
    url: https://transformer-circuits.pub/2021/framework/index.html
    kind: article
  - title: Olsson et al., In-context Learning and Induction Heads (2022)
    url: https://arxiv.org/abs/2209.11895
    kind: paper
  - title: "Wang et al., Interpretability in the Wild: a Circuit for Indirect Object Identification in GPT-2 small (2022)"
    url: https://arxiv.org/abs/2211.00593
    kind: paper
  - title: Conmy et al., Towards Automated Circuit Discovery for Mechanistic Interpretability (NeurIPS 2023)
    url: https://arxiv.org/abs/2304.14997
    kind: paper
  - title: "Zhang and Nanda, Towards Best Practices of Activation Patching in Language Models: Metrics and Methods (ICLR 2024)"
    url: https://arxiv.org/abs/2309.16042
    kind: paper
  - title: "Ameisen et al., Circuit Tracing: Revealing Computational Graphs in Language Models (Anthropic, 2025)"
    url: https://transformer-circuits.pub/2025/attribution-graphs/methods.html
    kind: article
  - title: "Mueller et al., MIB: A Mechanistic Interpretability Benchmark (ICML 2025)"
    url: https://arxiv.org/abs/2504.13151
    kind: paper
timeline:
  - date: 2022-09-24
    title: Induction heads
    body: Olsson et al. present evidence that induction heads underlie in-context learning in small transformers.
    source: https://arxiv.org/abs/2209.11895
  - date: 2022-11-01
    title: IOI circuit in GPT-2 small
    body: Wang et al. reverse-engineer a circuit for indirect-object identification.
    source: https://arxiv.org/abs/2211.00593
  - date: 2023-04-28
    title: ACDC
    body: Conmy et al. automate circuit discovery by pruning the computational graph.
    source: https://arxiv.org/abs/2304.14997
  - date: 2025-04-17
    title: MIB benchmark
    body: Mueller et al. introduce a benchmark with circuit-localization and causal-variable tracks.
    source: https://arxiv.org/abs/2504.13151
explainer:
  oneLine: Finding the small set of parts inside a model that actually produce one of its behaviours.
  flow:
    - Pick a behaviour
    - Run clean and corrupted inputs
    - Swap internal parts between runs
    - Keep parts that change the output
  glossary:
    - term: circuit
      meaning: A small set of network components that together carry out one behaviour.
      link: /research/mechanistic-circuits
    - term: activation patching
      meaning: Swapping internal numbers from one run into another to test which component causes an output.
      link: /research/mechanistic-circuits
    - term: activation
      meaning: The numbers a layer of the network produces while it processes an input.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: attention
      meaning: The operation by which each token decides which other tokens to read from, and how much.
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: transformer
      meaning: The neural-network design behind modern chatbots, in which every word looks at every other word through attention.
      link: /research/transformer-architecture
    - term: residual connection
      meaning: A shortcut that adds a layer's input to its output, so information and gradients can skip layers.
      link: https://en.wikipedia.org/wiki/Residual_neural_network
    - term: feature
      meaning: A direction in a network's internal numbers that seems to stand for a human-understandable concept.
      link: /research/sparse-autoencoders-interpretability
    - term: attention head
      meaning: A part of a transformer layer that lets each token gather information from chosen earlier tokens.
      link: https://en.wikipedia.org/wiki/Attention_%28machine_learning%29
    - term: induction head
      meaning: "A pair of attention heads that completes repeats: after seeing A then B, on seeing A again it predicts B."
      link: https://en.wikipedia.org/wiki/Mechanistic_interpretability
    - term: ablation
      meaning: Removing or disabling a part of a network to see how its behaviour changes.
      link: https://en.wikipedia.org/wiki/Ablation_%28artificial_intelligence%29
  readFirst:
    - title: "Distill: Zoom In, An Introduction to Circuits"
      url: https://distill.pub/2020/circuits/zoom-in/
      why: The original argument for studying networks as circuits.
    - title: "Neel Nanda: Mechanistic interpretability glossary"
      url: https://www.neelnanda.io/mechanistic-interpretability/glossary
      why: Plain definitions of terms.
    - title: "Anthropic: Tracing the thoughts of a large language model"
      url: https://www.anthropic.com/research/tracing-thoughts-language-model
      why: A non-technical tour of circuit tracing on a production model.
raw:
  body: "## The framework\n\nElhage et al. (Anthropic, 2021) described a transformer as a set of components that read from and write to a shared residual stream, with attention heads as independent circuits whose behaviour can be analysed in terms of query-key and output-value matrices. A *circuit* is a subgraph of components and connections that implements a behaviour. Olsson et al. (2022) identified *induction heads*, pairs of attention heads that complete patterns of the form [A][B] ... [A] to [B], and gave evidence that they underlie much in-context learning in small models. Wang et al. (2022) reverse-engineered a 26-head circuit for indirect-object identification in GPT-2 small, the most-cited worked example.\n\n## Methods\n\n- **Activation patching** replaces a component's activation from a clean run with its value on a corrupted run (or the reverse) and measures the effect on the output. It gives causal, not merely correlational, evidence. Zhang and Nanda (2024) examine metrics and methods for it, including how the choice of corruption and metric changes conclusions.\n- **Automated circuit discovery.** ACDC (Conmy et al., 2023) prunes edges of the computational graph by patching; faster attribution-patching approximations use gradients.\n- **Circuit tracing** with learned replacement models and attribution graphs (Ameisen et al., Anthropic, 2025) extends the idea to features rather than heads.\n\n## Evaluation\n\nTwo questions matter for a claimed circuit: *faithfulness* (does the circuit alone reproduce the model's behaviour?) and *completeness* (does removing it remove the behaviour?). The Mechanistic Interpretability Benchmark (Mueller et al., ICML 2025) standardises circuit localization across four tasks and five models and reports that attribution-based and mask-optimisation methods perform best, which makes methods comparable on a shared leaderboard.\n\n## Caveats\n\nCircuits found with a particular input distribution and corruption may not describe the model elsewhere, and the minimal circuit is not unique. Scaling manual analysis to frontier models is the central unsolved difficulty."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A trained language model is a huge machine with millions of parts. Mechanistic interpretability tries to open it up like a clock and see which gears do what.

A circuit is a small group of parts that together carry out one job, such as noticing that a name was mentioned before and using it again later. To find one, researchers run the model on a sentence, then run it again with one thing changed, and swap pieces of the internal state from one run into the other. If swapping a part changes the answer, that part matters. This cut-and-swap test is called activation patching.

People have mapped a few such circuits by hand in small models, such as the one that lets a model repeat a pattern it has just seen. Newer tools search automatically, and there are now shared tests to compare tools.

The hard part is scale. A circuit found for one kind of sentence may not explain other sentences, there can be several equally good circuits, and hand analysis does not yet work for the largest models.

The analogy: finding which wires in a house run the kitchen lights by flipping breakers and watching what goes dark.

# Student explanation

**The goal.** Mechanistic interpretability tries to explain how a neural network computes an answer, step by step, the way an engineer explains a circuit diagram, rather than only measuring what it outputs. A _circuit_ is the small set of internal parts and connections that carries out one behaviour.

**The parts of a transformer.** A transformer keeps a vector for each token, the _residual stream_, which every layer reads from and adds to. Two kinds of parts write into it: _attention heads_, which move information between token positions (for example, copying something from an earlier word), and feed-forward layers, which transform the vector at one position. Because each part adds its output to the stream, the final result is a sum of contributions, which makes it possible to ask which parts mattered.

**A worked example.** Given the text "When Mary and John went to the store, John gave a drink to", a small model answers "Mary". Researchers traced this indirect-object behaviour in GPT-2 small to a circuit of 26 attention heads: some notice that "John" is repeated, others suppress the repeated name, and others copy the remaining name to the output. Another well-studied circuit, the _induction head_, completes repeated patterns: having seen "Harry Potter" once, on seeing "Harry" again it predicts "Potter".

**The main tool: activation patching.** Correlation is not causation, so circuits are tested by intervention, as in a lab experiment with a control. Run the model on a clean input (the Mary/John sentence) and on a corrupted one (names swapped). Then rerun the corrupted input, but replace the output of one component with its value from the clean run, and measure how far the answer moves back:

$\text{effect} = \frac{m_{\text{patched}} - m_{\text{corrupt}}}{m_{\text{clean}} - m_{\text{corrupt}}},$

where $m$ is a chosen measure of the model's preference for the right answer. An effect near 1 means that component alone carries the needed information; near 0, it does not matter. Automated methods repeat this across the whole network's connections, or approximate it with derivatives to save time.

**An analogy.** It is like debugging a circuit board by swapping one chip from a working board into a faulty one and seeing whether the fault clears. The analogy breaks because a network's parts overlap in function, so swapping one part can understate its role.

**Limits.** A good circuit explanation must be _faithful_ (the circuit alone reproduces the behaviour) and _complete_ (removing it removes the behaviour). Results depend on the inputs and corruptions chosen, minimal circuits are not unique, and a shared benchmark (MIB) now compares methods. Scaling this analysis from small models to frontier models is the central unsolved difficulty.
