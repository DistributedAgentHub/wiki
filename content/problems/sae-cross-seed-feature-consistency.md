---
type: problem
slug: sae-cross-seed-feature-consistency
title: "Seed-stable sparse autoencoder dictionaries: 80% shared features at 131K latents"
entry: sparse-autoencoders-interpretability
status: OPEN
origin: Paulo and Belrose, Sparse Autoencoders Trained on the Same Data Learn Different Features (arXiv:2501.16615, preprint, 2025)
ratings:
  difficulty: 55
  applicationValue: 26
  leverage: 39
workMix:
  theory: 45
  engineering: 15
  compute: 30
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Paulo and Belrose, Sparse Autoencoders Trained on the Same Data Learn Different Features (preprint)
    url: https://arxiv.org/abs/2501.16615
  - title: Karvonen et al., SAEBench
    url: https://arxiv.org/abs/2503.09532
timeline:
  - date: 2025-01-28
    title: Seed dependence reported (preprint)
    body: About 30% of features shared across seeds at 131K latents on Llama 3 8B.
    source: https://arxiv.org/abs/2501.16615
explainer:
  oneLine: Can sparse autoencoders be trained so 80% of features reappear when retrained with a different seed?
  flow:
    - Train SAE twice, change seed
    - Only about 30% features match
    - Design more stable training
    - Reach 80% without losing quality
  glossary:
    - term: sparse autoencoder (SAE)
      meaning: A model trained to rebuild a network's internal activations from a few active units out of a very large dictionary.
      link: /research/sparse-autoencoders-interpretability
    - term: feature (SAE latent)
      meaning: "One unit of an SAE dictionary: a direction in activation space that, ideally, stands for one human-readable concept."
      link: /research/sparse-autoencoders-interpretability
    - term: activation
      meaning: The vector of numbers a network layer outputs for a given input; interpretability methods study these.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: random seed
      meaning: The starting number for a computer's random-number generator; changing it changes the random initial weights and data order of a run.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: cosine similarity
      meaning: "The cosine of the angle between two vectors: 1 if they point the same way, 0 if perpendicular."
      link: https://en.wikipedia.org/wiki/Cosine_similarity
    - term: benchmark
      meaning: A fixed set of tasks and a scoring rule used to compare methods fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: parameter
      meaning: One adjustable number (weight) inside a neural network; large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: transformer
      meaning: The neural-network design behind modern language models, built from attention and feed-forward blocks stacked many times.
      link: /research/transformer-architecture
  readFirst:
    - title: "Anthropic: Toy Models of Superposition"
      url: https://transformer-circuits.pub/2022/toy_model/index.html
      why: Why features are hard to read from raw numbers.
    - title: Sparse Autoencoders Trained on the Same Data Learn Different Features (preprint)
      url: https://arxiv.org/abs/2501.16615
      why: The study that reports the 30% overlap.
    - title: "Wikipedia: Autoencoder"
      url: https://en.wikipedia.org/wiki/Autoencoder
      why: General introduction to autoencoders.
site:
  aiReviewed: true
---

Paulo and Belrose report that for an SAE with 131K latents trained on a Llama 3 8B layer, only about 30% of features are shared between SAEs trained with different random seeds. Find a training method (architecture, loss or initialisation) for which at least 80% of the latents of one SAE have a matching latent in an SAE trained with another seed (under the matching criterion of the paper), at the same 131K width, the same layer and the same reconstruction error and sparsity as the baseline, without reducing the SAEBench scores of the SAE.

# State of the art

The preprint states that seed-dependence appeared across multiple layers of three language models, two datasets and several SAE architectures, and that ReLU SAEs with L1 loss were more stable across seeds than TopK SAEs. Whether the low overlap reflects an unstable optimisation or genuinely many equivalent decompositions of the activations is not settled.

# Applications

If features are an artefact of the seed, claims built on a single dictionary (including circuit analyses and steering vectors) need replication across seeds; a stable method would make dictionaries comparable between labs.

# Resolution criteria

A public method and checkpoints for at least three seeds, with the shared-feature fraction computed by released code under the matching criterion of Paulo and Belrose, at least 80% for all seed pairs, and SAEBench scores within the baseline's variance.

# Rating rationale

Difficulty 55: no method approaches 80% overlap on language models, and the low overlap may reflect a genuine non-uniqueness of sparse decompositions, which would make the target unreachable. Application value 26: indirect, through trust in dictionaries. Leverage 39: claims built on individual SAE features depend on it.

# Work mix rationale

Needs a new training idea, then compute for SAEs at 131K width.

# Verification

Model and layer: Llama 3 8B at the layer used by the source paper, 131K latents, same training tokens as the baseline. Metric: fraction of latents with a match in the other seed's SAE under the source paper's criterion (released code), computed over all pairs of at least 3 seeds. Threshold: 80% or more for every pair, at the baseline's mean squared reconstruction error and L0, and SAEBench scores not worse than the baseline's seed-to-seed spread. Budget: three SAE trainings at 131K width on the baseline's token count (a single-GPU-days to GPU-weeks scale per SAE depending on tokens).

# Plain explanation

When researchers train a feature-finding helper network twice on the same data, changing only the random starting point, they get different lists of features. In one study of a large helper network on a Llama 3 model, only about 30% of the features in one run matched a feature in the other.

That is awkward. If the features found depend on luck, then a claim like 'the model has a feature for this idea' might only be true for one run.

The challenge: find a way to train the helper so that at least 80% of its features appear in a second run with another seed, at the same size and with the same reconstruction quality, without losing quality on standard benchmark tests.

Why hard: there may be many equally good ways to split up the same information, in which case the runs would never fully agree, and the 80% target could be impossible. Either a new method or a convincing proof that the target cannot be met would count as progress.

# Student explanation

**Background.** A _sparse autoencoder_ (SAE) is a tool for reading what a language model represents internally. At some layer the model produces a vector of a few thousand numbers per token, its activations. The SAE learns a large dictionary of directions in that space, here 131,072 of them, and rebuilds each activation vector as a sum of only a few dictionary directions, $x \approx \sum_i a_i d_i$, where most coefficients $a_i$ are zero. Each direction $d_i$ is called a feature, and the hope is that each one means one human-readable thing, such as "French text" or "a closing bracket".

**The problem.** Training starts from random numbers set by a _random seed_. If features are real properties of the model, two SAEs trained on the same data with different seeds should find mostly the same dictionary. A 2025 study trained such pairs on a layer of Llama 3 8B and found only about 30% of features shared at 131K latents, where "shared" means a feature in one dictionary has a closely matching direction in the other (high cosine similarity, the cosine of the angle between the two vectors). Seed dependence appeared across layers, three models, two datasets and several SAE designs; older ReLU SAEs trained with an L1 sparsity penalty were more stable than the popular TopK design, which keeps exactly the k largest coefficients.

**What is asked.** A training method (architecture, loss or initialisation) for which at least 80% of features match across every pair of at least three seeds, at the same width, layer, reconstruction error and sparsity, without losing quality on a standard SAE benchmark.

**Why it is hard.** It may be impossible. If the activations can be written as sparse sums in many equally good ways, different runs will land on different but equally valid dictionaries. An analogy: describing colours with a palette of paints. Many different palettes reproduce the same pictures, and two painters starting from different paints may never agree on a palette. The analogy breaks because SAE dictionaries are much larger than the space they live in, which makes the non-uniqueness worse, not better. Any fix must also not simply trade reconstruction quality for stability, which would be cheating.

**Why it matters.** Circuit analyses and steering experiments are often built on one dictionary. If its features depend on the seed, such claims need to be repeated across seeds, and dictionaries cannot be compared between labs.

**How it is checked.** Released checkpoints for three seeds and code computing the shared fraction under the original paper's matching rule.
