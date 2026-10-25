---
type: problem
slug: transformer-depth-lower-bound-k-hop
title: Unconditional Ω(log k) depth lower bound for k-hop induction heads in narrow transformers
entry: transformer-architecture
status: OPEN
origin: Sanford, Hsu and Telgarsky (arXiv:2402.09268, ICML 2024), who proved the log-depth upper bound and a lower bound conditional on the one-versus-two-cycles MPC conjecture
ratings:
  difficulty: 66
  applicationValue: 30
  leverage: 34
workMix:
  theory: 95
  engineering: 0
  compute: 3
  empirical: 2
verification:
  route: REVIEW
sources:
  - title: "Sanford, Hsu, Telgarsky: Transformers, parallel computation, and logarithmic depth (ICML 2024)"
    url: https://arxiv.org/abs/2402.09268
  - title: "Chen, Peng, Wu: Theoretical limitations of multi-layer Transformer"
    url: https://arxiv.org/abs/2412.02975
  - title: "Wang: How Much Cache Does Reasoning Need? Depth–Cache Tradeoffs in KV-Compressed Transformers (preprint, 2026)"
    url: https://arxiv.org/abs/2604.17935
  - title: "Roughgarden, Vassilvitskii, Wang: Shuffles and Circuits (On Lower Bounds for Modern Parallel Computation) (J. ACM 2018)"
    url: https://doi.org/10.1145/3232536
  - title: "Sanford, Hsu, Telgarsky: Representational Strengths and Limitations of Transformers"
    url: https://arxiv.org/abs/2306.02896
  - title: "Jelassi et al.: Repeat After Me: Transformers are Better than State Space Models at Copying"
    url: https://arxiv.org/abs/2402.01032
  - title: "Arora et al.: Zoology: Measuring and Improving Recall in Efficient Language Models"
    url: https://arxiv.org/abs/2312.04927
timeline:
  - date: 2018-11-22
    title: Barrier for MPC round lower bounds
    body: Roughgarden, Vassilvitskii and Wang showed that super-constant round lower bounds for problems in P in the MPC model would imply new circuit lower bounds (J. ACM 2018; SPAA 2016).
    source: https://doi.org/10.1145/3232536
  - date: 2024-02-14
    title: Log-depth transformers for k-hop induction heads
    body: Sanford, Hsu and Telgarsky gave a ⌊log₂ k⌋+2-layer construction and an Ω(log k) lower bound conditional on the one-versus-two-cycles conjecture.
    source: https://arxiv.org/abs/2402.09268
  - date: 2024-12-04
    title: First unconditional multi-layer transformer lower bound
    body: Chen, Peng and Wu proved that constant-depth decoder-only transformers need polynomial width for sequential function composition.
    source: https://arxiv.org/abs/2412.02975
  - date: 2026-04-20
    title: Depth–cache trade-offs (preprint)
    body: X. Wang proved unconditional max-type depth bounds for KV-compressed transformers on pointer chasing and conjectured the product form. Not refereed.
    source: https://arxiv.org/abs/2604.17935
explainer:
  oneLine: How many layers must a small transformer have to follow a chain of k references? No proof yet.
  flow:
    - "Task: follow k chained look-ups"
    - Doubling jumps need about log k layers
    - Is there a shallower trick?
    - Proof known only given a conjecture
    - "Open: prove it for narrow transformers"
  glossary:
    - term: transformer
      meaning: The attention-based network design behind modern language models.
      link: /research/transformer-architecture
    - term: attention head
      meaning: One parallel part of an attention layer that learns to look at certain other positions in the text.
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: induction head
      meaning: A pattern in language models where, on seeing a token, the model copies what followed it last time.
      link: https://en.wikipedia.org/wiki/Attention_(machine_learning)
    - term: lower bound
      meaning: A proof that no method of a given kind can do a task with fewer than some amount of resources.
      link: https://en.wikipedia.org/wiki/Computational_complexity_theory
    - term: causal mask
      meaning: A rule that stops each position from looking at later positions, as when generating text word by word.
      link: https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)
    - term: Massively Parallel Computation
      meaning: A model of many machines with limited memory each, working in rounds, that mimics big-data systems.
      link: https://en.wikipedia.org/wiki/MapReduce
    - term: conjecture
      meaning: A statement believed true by experts but not yet proved.
      link: https://en.wikipedia.org/wiki/Conjecture
    - term: circuit complexity
      meaning: The study of how big a network of simple logic gates must be to compute a function.
      link: https://en.wikipedia.org/wiki/Circuit_complexity
    - term: communication complexity
      meaning: Counting how many bits parties must exchange to compute something together.
      link: /research/communication-complexity
    - term: embedding dimension
      meaning: The length of the vector of numbers the transformer keeps for each position; a measure of the model's width.
      link: https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)
    - term: KV cache
      meaning: Stored keys and values of earlier tokens that a transformer looks back at; compressing it limits what the model can retrieve.
      link: https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)
  readFirst:
    - title: Transformer (deep learning architecture) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)
      why: Background on layers, heads and attention.
    - title: Representational Strengths and Limitations of Transformers (Sanford, Hsu, Telgarsky)
      url: https://arxiv.org/abs/2306.02896
      why: An accessible earlier paper on what attention can and cannot do.
    - title: Transformers, parallel computation, and logarithmic depth (Sanford, Hsu, Telgarsky)
      url: https://arxiv.org/abs/2402.09268
      why: The paper that introduced the k-hop task and the log-depth results.
site:
  aiReviewed: true
---

For $X\in\Sigma^N$ let $\mathrm{find}^1_X(i)=\max(\{0\}\cup\{j\le i: X_{j-1}=X_i\})$, $\mathrm{find}^k_X=\mathrm{find}^1_X\circ\mathrm{find}^{k-1}_X$, and $\mathrm{hop}_k(X)_i=X_{\mathrm{find}^k_X(i)}$ (or $\bot$ if the index is 0). The $k$-hop induction-heads task asks a causally masked transformer with $L$ layers, $H$ heads, embedding dimension $m$ and $p=\Theta(\log N)$-bit precision to output $\mathrm{hop}_k(X)_i$ at every position $i$. Sanford, Hsu and Telgarsky proved that $m=O(1)$, $H=1$ and $L=\lfloor\log_2k\rfloor+2$ suffice, and that, assuming the one-versus-two-cycles conjecture for Massively Parallel Computation, every such transformer with $mH=O(k^{1-\epsilon})$ and $k=\Theta(N^{\xi})$, $\xi\in(0,1/2]$, needs $L=\Omega(\log k)$. _Problem: prove $L=\Omega(\log k)$ unconditionally in the narrow regime $mH\le\mathrm{polylog}\,N$ (with $k=\Theta(N^{\xi})$), or construct transformers of depth $o(\log k)$ in that regime._ Even an unconditional lower bound $L=\omega(1)$ for any $k=N^{\Omega(1)}$ would be new. Extending the bound to the full regime $mH=O(k^{1-\epsilon})$ runs into a known circuit-complexity barrier (see bottlenecks), which is why the problem is stated for narrow models.

# State of the art

**Upper bound and conditional lower bound.** Sanford, Hsu and Telgarsky (arXiv:2402.09268, ICML 2024) show that a constant number of attention layers can simulate, and be simulated by, a constant number of MPC rounds; they solve $\mathrm{hop}_k$ with $L=\lfloor\log_2 k\rfloor+2$, $H=1$, $m=O(1)$ (Theorem 4.2), and prove $L=\Omega(\log k)$ for $mH=O(k^{1-\epsilon})$ conditional on the one-versus-two-cycles conjecture (Corollary 4.3). Their experiments find that trained transformers also need roughly logarithmic depth in $k$.

**Unconditional multi-layer bounds.** Chen, Peng and Wu (arXiv:2412.02975, 2024) prove the first unconditional lower bound against multi-layer decoder-only transformers: for every constant $L$, an $L$-layer decoder needs model dimension $N^{\Omega(1)}$ to compose $L$ functions sequentially, via a multi-party autoregressive communication model. Their bounds hold for constant $L$ and do not give depth growing with $k$. For transformers with a compressed KV cache of size $s$, X. Wang (arXiv:2604.17935, April 2026, preprint) proves the unconditional bound $L=\Omega(\max(\lceil k/s\rceil,\log N/(Hmp)))$ for $k$-hop pointer chasing, conjectures the product form, and identifies a bandwidth barrier for counting-based arguments once $Hmp\ge\log_2N$.

**Why recurrent models are not the open case.** A stack of $L$ recurrent or state-space layers with $s$-bit states processes the input in one left-to-right pass with $Ls$ bits of memory, so one-way communication lower bounds (INDEX) already force $Ls=\Omega(N)$ for associative recall with the query at the end, for any depth. Separations of this type are proved by Sanford, Hsu and Telgarsky (arXiv:2306.02896, 2023), Jelassi et al. (arXiv:2402.01032, copying) and Arora et al. (arXiv:2312.04927, Zoology). The open question is whether attention depth can be traded against width.

**Different question: time to compute attention.** SETH-based results (Keles–Wijewardena–Hegde 2022; Alman–Song, NeurIPS 2023; Gupta et al., arXiv:2505.14840, 2025) concern the running time of computing exact attention, not what a transformer of given depth can express.

# Applications

A tight unconditional bound would show that multi-step retrieval and reasoning tasks force depth to grow with the number of steps unless width grows polynomially, informing how depth, width and chain-of-thought are traded in long-context models. It yields no faster model by itself, and the bounds are asymptotic, so practical design will still depend on benchmarks.

# Resolution criteria

A proof that every causally masked transformer with $p=O(\log N)$, $mH\le\mathrm{polylog}\,N$ and $k=\Theta(N^{\xi})$ that computes $\mathrm{hop}_k$ has depth $\Omega(\log k)$, or an explicit family of such transformers with depth $o(\log k)$. An unconditional $\omega(1)$ depth lower bound, or an $\Omega(\log k)$ bound for a restricted model (hard attention, KV-cache-limited, or decoder-only with bounded heads), is partial progress.

# Rating rationale

Difficulty 66: the conditional answer has been known since 2024, but unconditional lower bounds for transformers stop at constant depth, and the wide regime is blocked by the MPC/circuit barrier; the narrow regime is a sharp thesis target with no technique yet. Placed below perfect matching in NC (74) and above planted clique (64). Application value 30: it would ground depth and chain-of-thought trade-offs in long-context models, but not change systems directly, so it ranks well below the retired broad subquadratic-attention entry (74). Leverage 34: it organises the expressivity theory of transformers and ties it to MPC lower bounds, a modest literature.

# Work mix rationale

A lower-bound proof in communication complexity; synthetic-task experiments only suggest conjectures.

# Verification

The claim is a circuit-style lower bound (depth Omega(log k) for causally masked transformers with the stated width and precision) or a matching construction. Making it checkable needs a formal transformer model and communication-complexity machinery that Mathlib lacks. Experts review the proof, and the constructive direction can be sanity-checked by running small instances.

# Plain explanation

Imagine a very long list of words. Each word occurrence points to the position just after the previous occurrence of the same word. To answer a question you may have to follow this chain of pointers k times in a row: find where this word appeared before, then do the same for what is found there, and so on. This is the k-hop task, a clean test of multi-step lookup, a skill needed for reasoning over long text.

Transformers solve each lookup using attention. A known construction shows that about the logarithm of k layers are enough, even for a very narrow transformer. Think of it as pointer chasing by doubling: first learn jumps of 1, then 2, then 4, and so on.

The open question is whether you really need that many layers. Is there a cleverer narrow transformer with fewer? A result exists, but it depends on an unproven conjecture from another area of computer science. Unconditional proofs only cover a fixed small number of layers.

Why is it hard? Showing that no small network can do something is a lower-bound problem. Those are notoriously difficult. For general circuits, such lower bounds run into well-known barriers in complexity theory.

A solution would give a precise trade-off between depth, width and number of reasoning steps. It would not produce a faster model by itself.

# Student explanation

**The task.** For a sequence $X$ of length $N$ define $\mathrm{find}^1_X(i)$ as the position right after the most recent earlier occurrence of the symbol $X_i$ (or $0$ if none). Iterate this $k$ times to get $\mathrm{find}^k_X$, and let $\mathrm{hop}_k(X)_i=X_{\mathrm{find}^k_X(i)}$. The **$k$-hop induction heads** task asks a causally masked transformer with $L$ layers, $H$ heads per layer, embedding dimension $m$ and $p=\Theta(\log N)$ bits of numerical precision to output $\mathrm{hop}_k(X)_i$ at every position. For $k=1$ this is the classic _induction head_ behaviour seen in trained language models: copy what followed the last time this token appeared.

**Known results.**

- _Upper bound._ Sanford, Hsu and Telgarsky (ICML 2024) proved that a transformer with $m=O(1)$, a single head and $L=\lfloor\log_2 k\rfloor+2$ layers suffices. The intuition is pointer doubling: after layer $\ell$ each position can jump $2^\ell$ hops.
- _Conditional lower bound._ They also showed that $L=\Omega(\log k)$ is needed when $mH=O(k^{1-\epsilon})$, but conditional on the one-versus-two-cycles conjecture from Massively Parallel Computation (MPC), a model of distributed computing. The connection is that a constant number of attention layers can simulate and be simulated by a constant number of MPC rounds.
- _Unconditional but weaker._ Chen, Peng and Wu (2024) proved that for each constant $L$, an $L$-layer decoder needs model dimension $N^{\Omega(1)}$ to compose $L$ functions in sequence. It does not give depth growing with $k$. A 2026 preprint proves unconditional bounds when the stored memory of earlier tokens (the KV cache) is compressed.

**The problem.** Prove $L=\Omega(\log k)$ unconditionally in the narrow regime $mH\le\mathrm{polylog}\,N$ with $k=\Theta(N^{\xi})$, or construct narrow transformers with depth $o(\log k)$. Even an unconditional $L=\omega(1)$ for polynomial $k$ would be new.

**Why only narrow models.** Extending to wider models would imply new circuit lower bounds, which hits known barriers. Recurrent and state-space models are an easier case: one-pass communication arguments already show they need memory proportional to the input for such recall tasks, for any depth.

**Meaning.** A tight bound would formalise that multi-step retrieval forces depth to grow with the number of steps unless width grows polynomially, informing the trade-off between depth, width and written-out reasoning (chain of thought).
