---
type: entry
slug: state-space-sequence-models
title: State-space sequence models (S4, Mamba, Mamba-2)
field: ml-architectures
kind: ALGORITHM
status: ACTIVE
summary: Sequence layers that carry a fixed-size recurrent state, giving linear-time training and constant-memory decoding; the main architectural alternative to attention, with a known recall gap.
reliedOn: Mamba-style layers are used in pure and hybrid language models as a way to avoid the quadratic cost and growing key-value cache of attention on long sequences.
dependsOn:
  - reverse-mode-autodiff
  - transformer-architecture
references:
  - title: Gu, Goel, Re, Efficiently Modeling Long Sequences with Structured State Spaces (S4, 2021)
    url: https://arxiv.org/abs/2111.00396
    kind: paper
  - title: "Gu and Dao, Mamba: Linear-Time Sequence Modeling with Selective State Spaces (2023, preprint)"
    url: https://arxiv.org/abs/2312.00752
    kind: paper
  - title: Dao and Gu, Transformers are SSMs (Mamba-2, ICML 2024)
    url: https://arxiv.org/abs/2405.21060
    kind: paper
  - title: "Arora et al., Zoology: Measuring and Improving Recall in Efficient Language Models (2023)"
    url: https://arxiv.org/abs/2312.04927
    kind: paper
  - title: "Jelassi et al., Repeat After Me: Transformers are Better than State Space Models at Copying (2024)"
    url: https://arxiv.org/abs/2402.01032
    kind: paper
timeline:
  - date: 2021-10-31
    title: S4
    body: Gu, Goel and Ré introduce a structured state-space layer that handles very long sequences efficiently.
    source: https://arxiv.org/abs/2111.00396
  - date: 2023-12-01
    title: Mamba (preprint)
    body: Gu and Dao propose input-dependent state updates with a hardware-aware scan.
    source: https://arxiv.org/abs/2312.00752
  - date: 2023-12-08
    title: "Zoology: recall explains the quality gap"
    body: Arora et al. attribute most of the gap between efficient sequence models and attention to associative recall.
    source: https://arxiv.org/abs/2312.04927
  - date: 2024-05-31
    title: Mamba-2 and state-space duality
    body: Dao and Gu relate SSMs to masked linear attention and report a 2-8x faster core layer than Mamba.
    source: https://arxiv.org/abs/2405.21060
explainer:
  oneLine: Sequence models that carry a fixed-size memory forward, so cost grows only linearly with text length.
  flow:
    - Transformers reread everything
    - Keep one fixed-size memory
    - Cheap for long text
    - Weaker exact recall, so hybrids
  glossary:
    - term: state-space model
      meaning: A sequence model that keeps a fixed-size memory updated word by word instead of attending to all earlier words.
      link: /research/state-space-sequence-models
    - term: transformer
      meaning: The neural-network design behind modern chatbots, in which every word looks at every other word through attention.
      link: /research/transformer-architecture
    - term: attention
      meaning: The operation by which each token decides which other tokens to read from, and how much.
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: kernel
      meaning: A small program that runs on a GPU; its speed often decides how fast a model trains.
      link: https://en.wikipedia.org/wiki/Compute_kernel
    - term: GPU
      meaning: A chip with thousands of small cores, used to train and run neural networks quickly.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: large language model
      meaning: A very large neural network trained on text to predict the next token, as in modern chatbots.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: token
      meaning: A chunk of text, often a word or part of a word, that a language model reads as one unit.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: recurrence
      meaning: A rule that computes each step from the previous step, like h_t = A h_(t-1) + B x_t.
      link: https://en.wikipedia.org/wiki/Recurrent_neural_network
    - term: convolution
      meaning: A weighted running sum of past inputs, using the same weights at every position.
      link: https://en.wikipedia.org/wiki/Convolution
    - term: scan (prefix sum)
      meaning: Computing all running totals of a sequence; it can be split into parallel pieces and recombined.
      link: https://en.wikipedia.org/wiki/Prefix_sum
    - term: associative recall
      meaning: Retrieving a value given the key it was paired with earlier, such as a name given a phone number seen before.
      link: https://en.wikipedia.org/wiki/Content-addressable_memory
  readFirst:
    - title: "The Gradient: Mamba Explained"
      url: https://thegradient.pub/mamba-explained/
      why: A gentle explanation of Mamba and why it matters.
    - title: 3Blue1Brown, Large language models explained
      url: https://www.youtube.com/watch?v=wjZofJX0v4M
      why: A visual walk through how a transformer language model works.
    - title: "Maarten Grootendorst: A Visual Guide to Mamba and State Space Models"
      url: https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state
      why: Builds from the state equation to Mamba with clear diagrams.
    - title: "Tri Dao: State Space Duality (Mamba-2), Part I"
      url: https://tridao.me/blog/2024/mamba2-part1-model/
      why: The co-author explains the link between SSMs and attention in blog form.
raw:
  body: "## From linear systems to a neural layer\n\nA state-space model maps an input sequence to an output through a hidden state that evolves linearly: the state is updated from the previous state and the current input, and the output is read from the state. Run as a recurrence, decoding needs constant memory per step regardless of context length. Because the update is linear, it can also be written as a long convolution, or computed with a parallel scan, so training parallelises over the sequence.\n\n**S4** (Gu, Goel and Ré, 2021) made this practical by parametrizing the state matrix in a structured form that is both stable and efficient on long-range benchmarks. **Mamba** (Gu and Dao, 2023, preprint) made the state-update parameters depend on the input (a *selective* SSM), which lets the layer decide per token what to keep or forget; because input-dependence breaks the convolutional form, the authors wrote a hardware-aware scan kernel. **Mamba-2** (Dao and Gu, ICML 2024) showed a duality between selective SSMs and a form of masked linear attention (structured state space duality, SSD), and rewrote the layer around matrix multiplications; the authors report the core layer is 2-8 times faster than Mamba's scan while staying competitive with transformers on language modelling.\n\n## The recall gap\n\nA fixed-size state is a bottleneck. Arora et al. (Zoology, 2023) found that most of the quality gap between gated-convolution/recurrent models and attention on language modelling is attributable to *associative recall*: looking up a value associated with an earlier key. Jelassi et al. (2024) proved and measured that fixed-state models are worse than transformers at copying long inputs. For this reason many deployed designs are **hybrids** that interleave a few attention layers with SSM layers.\n\n## Open points\n\nHow much state is needed for a given recall ability, whether kernels remain faster than FlashAttention-class attention at the context lengths people actually use, and whether SSMs can match transformers at the frontier are all open and mostly settled by benchmarks rather than theory. The related theory question of how many attention layers multi-hop retrieval needs is tracked in the transformer entry."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A transformer rereads everything that came before each time it writes a word. That is thorough, but it gets more expensive the longer the text, and its notes (its memory of the past) keep growing.

A state-space model works like a person taking running notes on a single index card. As each word arrives, it updates the card. The card never gets bigger, so reading very long text costs only a little more than reading short text.

The problem is the size of the card. If you must recall a specific detail from long ago, such as a phone number mentioned in the first paragraph, a small card may have dropped it. Researchers have shown that these models are worse at such exact look-ups and at copying long passages.

So recent models often mix the two: mostly the cheap running-notes layers, with a few attention layers that can look back at everything.

The analogy is imperfect: the card is not read by a person, and what it stores is decided by learned rules (in Mamba, depending on the word being read).

# Student explanation

**What it is for.** A transformer reads text by letting each new token look back at every earlier token (attention). That costs work proportional to the square of the sequence length, and while generating text the model must keep a growing memory of all earlier tokens. State-space models (SSMs) aim to process sequences in time proportional to their length, with a fixed-size memory.

**The idea from engineering.** First-year circuits already contain a state-space model. An RC circuit has one state, the capacitor voltage, updated from its old value and the input. In discrete time, with input $x_t$ at step $t$:

$h_t = A\,h_{t-1} + B\,x_t, \qquad y_t = C\,h_t.$

Here $h_t$ is a state vector (the system's memory), $A$ says how the old state decays or mixes, $B$ how the input enters, and $C$ how the output is read off the state. Because each step is a matrix-vector product, generating one more token costs the same no matter how long the text already is.

**Making it trainable.** Run naively, this recurrence must be computed one step after another, which is slow on a GPU. Because it is linear, though, the whole output can be rewritten as a _convolution_ (a weighted running sum of past inputs) or computed with a parallel _scan_ (a divide-and-conquer way of doing running sums), so training parallelises over the sequence. S4 (2021) chose a structured form of $A$ that is stable over very long sequences.

**Selectivity.** In Mamba (2023), $A$, $B$ and $C$ depend on the current input, so the model can decide token by token what to keep and what to forget, like a capacitor whose leak resistor changes with the signal. That breaks the convolution trick, so the authors wrote a custom GPU scan. Mamba-2 (2024) showed that this selective SSM is equivalent to a restricted form of attention and rewrote it around matrix multiplications, which GPUs do fastest; the authors report its core layer is 2 to 8 times faster than Mamba's scan.

**The catch: recall.** A fixed-size state is a bottleneck. If a document says early on that "the key for room 12 is blue" and much later asks for the key of room 12, an attention layer can look straight back at that sentence; an SSM must have chosen to keep it in a state of fixed size. The Zoology study traced most of the quality gap between such models and attention on language modelling to this kind of associative recall, and another study proved that fixed-state models copy long inputs worse than transformers. Many deployed designs are therefore hybrids: mostly SSM layers plus a few attention layers.

**Open questions.** How large the state must be for a given recall ability, at what lengths SSM kernels actually beat optimized attention, and whether SSMs can match transformers at the largest scales are open, and are being settled mostly by measurement.
