---
type: entry
slug: mixture-of-experts-routing
title: Mixture-of-experts routing
field: ml-architectures
kind: ALGORITHM
status: ACTIVE
summary: Sparse transformer layers send each token to a few of many expert networks, decoupling parameter count from per-token compute; the router and its load balancing decide whether the experts are actually used.
reliedOn: Several of the largest open language models (for example DeepSeek-V3) are mixture-of-experts models, so routing and load balancing set their training stability and serving cost.
dependsOn:
  - transformer-architecture
references:
  - title: "Shazeer et al., Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer (2017)"
    url: https://arxiv.org/abs/1701.06538
    kind: paper
  - title: Lepikhin et al., GShard (2020)
    url: https://arxiv.org/abs/2006.16668
    kind: paper
  - title: Fedus, Zoph, Shazeer, Switch Transformers (2021)
    url: https://arxiv.org/abs/2101.03961
    kind: paper
  - title: Zhou et al., Mixture-of-Experts with Expert Choice Routing (2022)
    url: https://arxiv.org/abs/2202.09368
    kind: paper
  - title: Dai et al., DeepSeekMoE (2024)
    url: https://arxiv.org/abs/2401.06066
    kind: paper
  - title: Wang et al., Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts (2024, preprint)
    url: https://arxiv.org/abs/2408.15664
    kind: paper
  - title: DeepSeek-AI, DeepSeek-V3 Technical Report (2024, preprint)
    url: https://arxiv.org/abs/2412.19437
    kind: paper
  - title: Krajewski et al., Scaling Laws for Fine-Grained Mixture of Experts (2024)
    url: https://arxiv.org/abs/2402.07871
    kind: paper
timeline:
  - date: 2017-01-23
    title: Sparsely-gated MoE layer
    body: Shazeer et al. report a layer with up to thousands of experts and a trainable gating network, increasing capacity without proportional compute.
    source: https://arxiv.org/abs/1701.06538
  - date: 2021-01-11
    title: Switch Transformer
    body: Fedus, Zoph and Shazeer simplify routing to one expert per token and train sparse models with up to a trillion parameters.
    source: https://arxiv.org/abs/2101.03961
  - date: 2022-02-18
    title: Expert-choice routing
    body: Zhou et al. let experts select tokens so that load is balanced by construction.
    source: https://arxiv.org/abs/2202.09368
  - date: 2024-08-28
    title: Auxiliary-loss-free balancing proposed
    body: Wang et al. balance load by adjusting a per-expert routing bias instead of adding a loss term; tested up to 3B parameters and 200B tokens (preprint).
    source: https://arxiv.org/abs/2408.15664
  - date: 2024-12-27
    title: DeepSeek-V3 technical report
    body: A large MoE model trained with auxiliary-loss-free balancing is described in a technical report (preprint).
    source: https://arxiv.org/abs/2412.19437
explainer:
  oneLine: A model made of many specialist sub-networks, where each word is sent to only a few of them.
  flow:
    - Many experts, small router
    - Each token goes to top-k experts
    - Load collapses without balancing
    - Balance by loss, capacity or bias
  glossary:
    - term: mixture of experts
      meaning: A network with many specialist sub-networks where each token is sent to only a few of them.
      link: /research/mixture-of-experts-routing
    - term: router
      meaning: The small part of a mixture-of-experts model that chooses which experts handle each token.
      link: /research/mixture-of-experts-routing
    - term: transformer
      meaning: The neural-network design behind modern chatbots, in which every word looks at every other word through attention.
      link: /research/transformer-architecture
    - term: parameter
      meaning: One of the adjustable numbers inside a model. Large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: loss
      meaning: A single number measuring how wrong the model is on the training or test text. Lower is better.
      link: https://en.wikipedia.org/wiki/Loss_function
    - term: GPU
      meaning: A chip with thousands of small cores, used to train and run neural networks quickly.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: token
      meaning: A chunk of text, often a word or part of a word, that a language model reads as one unit.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: softmax
      meaning: A function that turns a list of scores into positive weights summing to one, giving most weight to the largest scores.
      link: https://en.wikipedia.org/wiki/Softmax_function
    - term: load balancing
      meaning: Spreading work evenly across workers or machines so none sits idle while another is overloaded.
      link: https://en.wikipedia.org/wiki/Load_balancing_%28computing%29
    - term: feed-forward network
      meaning: Here, the two matrix multiplications with a nonlinearity between them that each transformer block applies to every token separately.
      link: https://en.wikipedia.org/wiki/Feedforward_neural_network
  readFirst:
    - title: "Hugging Face: Mixture of Experts explained"
      url: https://huggingface.co/blog/moe
      why: A readable tour of MoE models and their training.
    - title: "Wikipedia: Mixture of experts"
      url: https://en.wikipedia.org/wiki/Mixture_of_experts
      why: Background and history.
    - title: "Maarten Grootendorst: A Visual Guide to Mixture of Experts"
      url: https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts
      why: Step-by-step diagrams of routers, top-k selection and load balancing.
site:
  published: true
  aiReviewed: true
---

## The idea

In a mixture-of-experts (MoE) transformer, the feed-forward sub-layer of a block is replaced by many parallel feed-forward networks (experts) plus a small **router**. For each token the router scores all experts and sends the token to the top-k of them (k is typically 1 to 8); the outputs are combined with the router weights. Total parameters grow with the number of experts, but per-token compute grows only with k. Shazeer et al. (2017) introduced the sparsely-gated layer for recurrent networks; GShard (2020) and the Switch Transformer (2021) brought it to transformers, with Switch simplifying routing to a single expert per token.

## The load-balancing problem

A learned router tends to collapse onto a few favoured experts, leaving others untrained and creating stragglers when experts live on different devices. The classic fix is an **auxiliary loss** that penalises uneven expert load, plus a **capacity factor** that drops tokens beyond an expert's buffer. The auxiliary loss adds gradients unrelated to the language-modelling objective, so its weight trades balance against quality. Alternatives include **expert-choice routing** (experts pick tokens, so load is balanced by construction; Zhou et al., 2022), fine-grained and shared experts (DeepSeekMoE, 2024), and **auxiliary-loss-free balancing** (Wang et al., 2024), which adds a per-expert bias to the routing scores, adjusted from recent load, and was used in DeepSeek-V3.

## Systems side

MoE layers need all-to-all communication to move tokens to experts and variable-sized matrix multiplications per expert. Block-sparse and grouped GEMM kernels (for example MegaBlocks) avoid dropping tokens and padding.

## Open questions

Which balancing method is best at frontier scale is not settled independently: the controlled comparisons at 15.7B and 228.7B total parameters are the DeepSeek-V3 authors' own ablations, without released logs, and a 2025 report on an extremely sparse 20B model (Sigma-MoE-Tiny, one of 96 experts active) found the standard balancing loss ineffective in lower layers. Scaling-law work for MoE (Clark et al., 2022; Krajewski et al., 2024) models how the number and granularity of experts change the compute-optimal model size, and hyperparameter transfer rules for MoE are an active topic (see the μP entry).

# Plain explanation

Imagine a hospital where every patient is seen by every doctor. It would be slow. A better hospital has specialists, and a receptionist decides which two or three each patient should see. A mixture-of-experts model works this way. It has many small expert networks, and a small router picks which ones process each word.

The benefit is that the model can hold a huge amount of learned knowledge, because it has many experts, while the work per word stays small, because only a few experts run.

The difficulty is fairness. A router can fall into a habit of sending nearly everything to a few favourite experts. Those become overloaded and the rest never learn, which wastes the model's size. Engineers add rules to spread the work out, and there is an active debate about the best rule.

Another cost: the experts live on different chips, so words must be shipped between chips and back. That takes careful engineering.

The analogy breaks because experts are not trained to be a neat 'heart doctor' or 'skin doctor'; what each one specialises in emerges from training and is often hard to describe.

# Student explanation

**What it is for.** In a transformer language model most of the arithmetic sits in the feed-forward sub-layer of each block: two large matrix multiplications applied to every token (a token is a word piece, represented as a vector). Making the model "know more" usually means making these matrices bigger, and the cost per token grows with them. A mixture-of-experts (MoE) layer breaks that link: it keeps many smaller feed-forward networks, called _experts_, and sends each token through only a few of them.

**An analogy.** Think of a hospital with 64 specialists and a triage nurse. Each patient sees only the two most relevant specialists, so the hospital's total expertise grows with the number of specialists while each visit costs the same. The analogy breaks in one important way: the nurse (the router) and the specialists are trained together from scratch, so nobody decides in advance what each expert is for.

**The mechanism.** The router is a small matrix $W_r$. For a token vector $x$ it computes one score per expert, $s = W_r x$, turns the scores into positive weights that add to one with the softmax function ($p_i = e^{s_i} / \sum_j e^{s_j}$, which exaggerates the largest scores), keeps the top $k$ experts, and outputs

$y = \sum_{i \in \text{top-}k} p_i \, E_i(x),$

the weighted sum of the chosen experts' outputs $E_i(x)$. With 64 experts and $k = 2$, the layer holds 64 experts' worth of parameters but each token pays for only 2.

**The hard part: load balance.** Training nudges the router toward experts that already help, so a few experts can end up taking almost every token while the rest stay untrained. When experts live on different GPUs, the busiest one also makes every other GPU wait. Three families of fixes exist:

- an _auxiliary loss_, an extra penalty added to the training error that grows when the load is uneven; it works but pulls the model away from its real objective;
- _expert-choice routing_, where each expert picks its tokens, so loads are equal by construction;
- _auxiliary-loss-free balancing_, used in DeepSeek-V3: add a per-expert bias to the scores and nudge it up for under-used experts and down for over-used ones, like a thermostat.

**Costs and open questions.** Moving tokens to experts on other GPUs needs all-to-all communication, and each expert gets a different number of tokens, which needs special matrix-multiply kernels. Which balancing method is best for the largest models is not settled in public: the controlled comparisons were run on models of a few billion parameters, and large technical reports describe one choice without a side-by-side test. How to scale the number and size of experts with the compute budget is studied by MoE scaling laws.
