---
type: entry
slug: transformer-architecture
title: The transformer architecture
field: ml-architectures
kind: ALGORITHM
status: ACTIVE
summary: The attention-based neural network design behind modern language models, and the quadratic cost of attention that drives work on exact, approximate and recurrent alternatives.
reliedOn: Nearly all large language models and many vision and protein models are transformers, so its compute and memory costs set the economics of training and inference.
dependsOn:
  - fast-matrix-multiplication
  - reverse-mode-autodiff
references:
  - title: Vaswani et al., Attention Is All You Need (NeurIPS 2017)
    url: https://arxiv.org/abs/1706.03762
    kind: paper
  - title: "Dao, Fu, Ermon, Rudra, Re, FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: https://arxiv.org/abs/2205.14135
    kind: paper
  - title: "Katharopoulos et al., Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention"
    url: https://arxiv.org/abs/2006.16236
    kind: paper
  - title: "Gu, Dao, Mamba: Linear-Time Sequence Modeling with Selective State Spaces"
    url: https://arxiv.org/abs/2312.00752
    kind: paper
  - title: Alman, Song, Fast Attention Requires Bounded Entries (NeurIPS 2023)
    url: https://arxiv.org/abs/2302.13214
    kind: paper
  - title: Merrill, Sabharwal, Smith, Saturated Transformers are Constant-Depth Threshold Circuits
    url: https://arxiv.org/abs/2106.16213
    kind: paper
timeline:
  - date: 2017-06-12
    title: The transformer is introduced
    body: Vaswani et al. proposed an architecture based solely on attention and reported state-of-the-art machine translation at lower training cost.
    source: https://arxiv.org/abs/1706.03762
  - date: 2022-05-27
    title: FlashAttention
    body: An IO-aware exact attention kernel reduced memory traffic and became standard in training and inference stacks.
    source: https://arxiv.org/abs/2205.14135
  - date: 2023-02-26
    title: Fine-grained hardness of attention
    body: Alman and Song proved a SETH-conditional threshold, at entry magnitude about the square root of log n, between near-linear and quadratic attention.
    source: https://arxiv.org/abs/2302.13214
  - date: 2023-12-01
    title: Mamba
    body: Gu and Dao proposed selective state-space models with linear-time sequence modelling; in their experiments a 3-billion-parameter Mamba outperformed transformers of the same size and matched transformers twice its size on language modelling.
    source: https://arxiv.org/abs/2312.00752
explainer:
  oneLine: The neural network design behind chatbots, which lets every word look at every other word, at a rising cost.
  flow:
    - Words need context from far away
    - Attention scores every pair of words
    - Blend information using those scores
    - Runs in parallel, so training scales
    - Pair scores make cost grow with n²
  glossary:
    - term: transformer
      meaning: A neural network design built around attention, used in most modern language models.
      link: https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)
    - term: attention
      meaning: A mechanism that lets each word weigh how relevant every other word is when forming its representation.
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: softmax
      meaning: A function that turns a list of scores into positive weights that add up to one.
      link: https://en.wikipedia.org/wiki/Softmax_function
    - term: large language model
      meaning: A neural network trained on huge amounts of text to predict and generate language.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: token
      meaning: A small chunk of text, such as a word or part of a word, that the model reads as one unit.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: quadratic cost
      meaning: "Cost that grows with the square of the size: double the input, four times the work."
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: reverse-mode autodiff
      meaning: The method that computes all of a network's gradients in one backward pass, used to train transformers.
      link: /research/reverse-mode-autodiff
    - term: GPU
      meaning: A chip with thousands of small cores that does many calculations in parallel.
      link: /research/gpu-architecture
    - term: matrix multiplication
      meaning: "The core arithmetic of neural networks: combining grids of numbers row by column."
      link: /research/fast-matrix-multiplication
    - term: query, key, value
      meaning: "Three vectors computed for each token: a query is compared with every key to get scores, which then weight the values that are averaged."
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: KV cache
      meaning: Stored keys and values of earlier tokens, so generating each new token does not recompute them; reading it is often the bottleneck.
      link: https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)
    - term: recurrent neural network
      meaning: A network that reads a sequence one step at a time, carrying a fixed-size memory forward; transformers replaced it for most language tasks.
      link: https://en.wikipedia.org/wiki/Recurrent_neural_network
  readFirst:
    - title: Transformer (deep learning architecture) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)
      why: A full overview of the design and its history.
    - title: Attention (machine learning) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Attention_(machine_learning)
      why: Focuses on the attention idea itself.
    - title: Attention Is All You Need (Vaswani et al., 2017)
      url: https://arxiv.org/abs/1706.03762
      why: The original paper, whose first sections are readable.
raw:
  body: "## Architecture\n\nA transformer maps a sequence of $n$ token vectors $X\\in\\mathbb R^{n\\times d_{\\mathrm{model}}}$ to a sequence of the same shape through a stack of identical blocks. Each block has a *self-attention* layer and a position-wise feed-forward network, each wrapped in a residual connection and normalisation. In one attention head, learned projections give queries, keys and values $Q,K,V\\in\\mathbb R^{n\\times d}$, and the output is\n$$\\mathrm{Att}(Q,K,V)=\\mathrm{softmax}\\!\\Big(\\tfrac{QK^{\\top}}{\\sqrt d}\\Big)V,$$\nwhere softmax acts on each row. Several heads run in parallel and their outputs are concatenated. In a decoder-only language model a causal mask forbids attending to later positions and the model predicts the next token. Vaswani et al. (2017) introduced the design for machine translation, replacing the recurrent networks that had dominated sequence modelling.\n\n## Cost\n\nForming $QK^{\\top}$ takes $O(n^2 d)$ time and the attention matrix has $n^2$ entries, so naive attention is quadratic in context length. The feed-forward layers cost $O(n\\,d_{\\mathrm{model}}^2)$, which dominates at short context. During autoregressive generation the keys and values of all previous tokens are cached, so each new token costs $O(nd)$ time but requires reading the whole cache from memory, which makes decoding memory-bound on current accelerators. Training uses reverse-mode automatic differentiation and is parallel across positions, which is a main reason transformers displaced recurrent networks.\n\n## Making attention cheaper\n\nThere are three families of responses.\n\n**Exact but IO-aware.** FlashAttention (Dao et al., 2022) computes exactly the same output but tiles the computation so the $n\\times n$ matrix is never written to slow memory, cutting memory traffic and making memory use linear in $n$. The arithmetic stays quadratic.\n\n**Approximate or sparse.** Sparse, low-rank, kernel and hashing-based methods approximate the attention matrix. Linear attention (Katharopoulos et al., 2020) replaces the softmax by a kernel feature map so that attention can be computed as a recurrence with a fixed-size state.\n\n**Recurrent and state-space layers.** Models such as Mamba (Gu and Dao, 2023) use selective state-space recurrences with cost linear in $n$, and hybrids interleave them with a few full-attention layers. Their hidden state has fixed size, which limits how much of a long context they can retrieve exactly; how much this matters in practice has been studied mainly by experiment, not theory.\n\n## What theory says\n\nAlman and Song (2023) proved a sharp threshold for computing attention to within $1/\\mathrm{poly}(n)$ additive error: when entries of $Q,K,V$ are bounded by $o(\\sqrt{\\log n})$ there is an $n^{1+o(1)}$ algorithm, and when they reach $\\Theta(\\sqrt{\\log n})$ no truly subquadratic algorithm exists unless the Strong Exponential Time Hypothesis fails (for head dimension $d=\\Theta(\\log n)$). Standard transformers also face expressivity limits: with saturated attention (Merrill, Sabharwal and Smith, TACL 2022) or with logarithmic numerical precision (Merrill and Sabharwal, TACL 2023), constant-depth transformers compute only functions in the circuit class $\\mathsf{TC}^0$, which limits what they can do in a single forward pass, without long chains of generated reasoning tokens.\n\n## Open questions\n\nWhether a subquadratic layer can match full attention on the tasks that matter, and why transformer loss improves predictably with scale, are treated in the two open problems attached to this entry."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Older language programs read a sentence one word at a time, carrying a small memory along. By the end of a long passage, the early words were mostly forgotten. In 2017 researchers proposed a different design called the transformer, and today almost all large language models use it.

The key idea is called attention. For each word, the model asks: which other words in this text matter for understanding this one? It gives every pair of words a score, then blends information accordingly. In "The dog chased the ball because it was hungry", attention can help work out that "it" refers to the dog.

Two things made transformers take over. They can look at all the words at once, so they can be trained in parallel on thousands of chips. And they handle long-range connections well.

The price: every word compares itself with every other word. Doubling the length of the text roughly quadruples that part of the work. This is a main reason very long documents are expensive for language models, and why so much research is aimed at making attention cheaper. Some of it computes the same answer more cleverly, some approximates it, and some replaces attention with memory-like designs.

The analogy: a meeting where everyone must speak to everyone. It makes for good understanding but scales badly as the group grows.

# Student explanation

**Architecture.** A transformer maps a sequence of $n$ token vectors (each of size $d_{\text{model}}$) to a sequence of the same shape through a stack of identical blocks. Each block has a **self-attention** layer and a position-wise feed-forward network, each wrapped in a residual connection and normalisation. Vaswani et al. (2017) introduced it for machine translation, replacing recurrent networks.

In one attention head, learned linear maps produce _queries_ $Q$, _keys_ $K$ and _values_ $V$ for every token. The output is

$\mathrm{Att}(Q,K,V)=\mathrm{softmax}\!\Big(\tfrac{QK^{\top}}{\sqrt d}\Big)V.$

In words: each token's query is compared with every token's key to get scores; softmax turns each row of scores into weights that add up to 1; the output for each token is the weighted average of the values. Several heads run in parallel and are concatenated. In a decoder-only language model a _causal mask_ stops each position from seeing later ones, and the model predicts the next token.

**Cost.** Forming $QK^{\top}$ takes time proportional to $n^2d$ and the attention matrix has $n^2$ entries, so naive attention is _quadratic_ in context length. The feed-forward layers cost about $n\,d_{\text{model}}^2$, which dominates at short contexts. During generation, the keys and values of earlier tokens are stored in a _KV cache_, so each new token costs time proportional to $n\,d$ but must read the whole cache from memory, which makes decoding limited by memory bandwidth on current accelerators. Training uses reverse-mode automatic differentiation and is parallel across positions, a main reason transformers displaced recurrent networks.

**Making attention cheaper.** Three families of responses:

- _Exact but IO-aware._ FlashAttention (Dao et al., 2022) computes exactly the same output but tiles the computation so the $n\times n$ matrix is never written to slow memory, cutting memory traffic.
- _Approximate._ Sparse patterns, low-rank sketches or hashing reduce the cost by accepting a small error.
- _Recurrent or state-space alternatives._ Replace attention with a fixed-size running state to get linear cost, at some loss of recall of exact earlier details.

**Theory questions.** What can a transformer of given depth, width and precision compute? How many layers does a task like following a chain of references need? What do scaling laws, the smooth improvement of loss with more data and compute, look like theoretically? Some answers are known. With limited numerical precision, constant-depth transformers can only compute functions in the circuit class $\mathsf{TC}^0$ in one forward pass (Merrill and Sabharwal). And computing attention to good accuracy in truly subquadratic time is impossible for large entries unless SETH fails, while it can be done almost linearly for small entries (Alman and Song, 2023). Most other questions, including why scaling laws hold, are open.
