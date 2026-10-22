---
type: problem
slug: normalization-free-transformer-llm-parity
title: Normalization-free language models at 7B parameters and beyond
entry: normalization-layers
status: OPEN
origin: Zhu, Chen, He, LeCun and Liu, Transformers without Normalization (arXiv:2503.10622, CVPR 2025)
ratings:
  difficulty: 25
  applicationValue: 22
  leverage: 32
workMix:
  theory: 10
  engineering: 20
  compute: 60
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Zhu et al., Transformers without Normalization
    url: https://arxiv.org/abs/2503.10622
  - title: Xiong et al., On Layer Normalization in the Transformer Architecture
    url: https://arxiv.org/abs/2002.04745
timeline:
  - date: 2025-03-13
    title: DyT proposed
    body: Zhu et al. report parity with normalized transformers across settings.
    source: https://arxiv.org/abs/2503.10622
explainer:
  oneLine: Does a language model without normalization layers still train as well when run for a trillion tokens or more?
  flow:
    - DyT swaps norm layers for tanh
    - Matched RMSNorm at 7B–70B, 200B tokens
    - Trillion-token runs never tested
    - Paired 7B, 1T-token runs decide
  glossary:
    - term: normalization layer
      meaning: A layer that rescales a vector of activations to a fixed size before passing it on, which keeps deep networks stable.
      link: /research/normalization-layers
    - term: RMSNorm
      meaning: A normalization layer that divides a vector by the root mean square of its entries, then applies a learned scale.
      link: /research/normalization-layers
    - term: tanh
      meaning: The hyperbolic tangent, a smooth S-shaped function that squashes any input into the range −1 to 1.
      link: https://en.wikipedia.org/wiki/Hyperbolic_functions
    - term: validation loss
      meaning: The model's average prediction error on held-out text it never trained on; lower means better prediction.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
    - term: token
      meaning: A chunk of text, roughly three-quarters of a word on average, that a language model reads and predicts one at a time.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: parameter
      meaning: One adjustable number (weight) inside a neural network; large language models have billions of them.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: FLOP
      meaning: One floating-point operation, such as a single multiply or add; training compute is counted in total FLOPs.
      link: https://en.wikipedia.org/wiki/FLOPS
    - term: random seed
      meaning: The starting number for a computer's random-number generator; changing it changes the random initial weights and data order of a run.
      link: https://en.wikipedia.org/wiki/Random_seed
    - term: hyperparameter
      meaning: A setting chosen by people before training, such as the learning rate, rather than learned from data.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
    - term: transformer
      meaning: The neural-network design behind modern language models, built from attention and feed-forward blocks stacked many times.
      link: /research/transformer-architecture
  readFirst:
    - title: Transformers without Normalization (paper)
      url: https://arxiv.org/abs/2503.10622
      why: The claim being tested, with the authors' LLaMA experiments.
    - title: "Wikipedia: Normalization (machine learning)"
      url: https://en.wikipedia.org/wiki/Normalization_(machine_learning)
      why: Overview of batch, layer and RMS normalization.
    - title: 3Blue1Brown, Large language models explained
      url: https://www.youtube.com/watch?v=wjZofJX0v4M
      why: A visual walk through how a transformer language model works.
site:
  aiReviewed: true
---

Dynamic Tanh (DyT) replaces each normalization layer with an element-wise tanh(αx) followed by a learnable per-channel scale and shift. The question is whether decoder-only language models with DyT in place of RMSNorm or LayerNorm reach the same pre-training loss and downstream accuracy as the normalized baseline at the scale where such models are actually trained, with the baseline's hyperparameters retuned fairly. Precisely: at 7B parameters and 1T tokens or more (five times the longest DyT run published), does a DyT model reach validation loss within 0.5% (relative) of a tuned RMSNorm model trained on identical data, with no loss spikes and at equal or better wall-clock throughput?

# State of the art

The DyT paper pre-trains LLaMA 7B, 13B, 34B and 70B models on 200B tokens each and reports losses and zero-shot averages matching RMSNorm (for 7B, final loss 1.59 with RMSNorm versus 1.60 with DyT). For language models the initial scale α₀ had to be tuned per size and separately for attention and other layers (from 0.8/0.2 at 7B down to 0.2/0.05 at 34B and 70B), using 30B-token search runs; the paper's claim of working without retuning applies mainly to its vision and diffusion settings. Follow-ups are small-scale: Derf (Chen et al., arXiv:2512.10938) reports DyT slightly behind LayerNorm on GPT-2 124M (loss 2.97 versus 2.94), and the BHyT preprint (arXiv:2601.09719) argues DyT is fragile at depth. No normalization-free language model trained on 1T tokens or more, and no independent reproduction of the 7B result, was found. Normalization placement is known to change trainability (Xiong et al., 2020), so long-horizon stability is the open part.

# Applications

Removing normalization removes a memory-bound operation per sub-layer and a source of reduction-synchronization in tensor-parallel training; the size of the saving has not been measured in the sources used here. The larger value is scientific: it would show which of normalization's several proposed roles is actually needed.

# Resolution criteria

A public report with code and logs of paired runs (DyT versus tuned RMSNorm, same data order, at least 3 seeds each at a smaller proxy scale and one run each at 7B) showing the validation-loss and benchmark parity above, or a documented failure (divergence or a gap above the threshold) that survives a tuning sweep of the DyT initial scale.

# Rating rationale

Difficulty 25: a bounded paired experiment; the DyT paper already reached 70B parameters at 200B tokens, so the open part is the 1T-token horizon, which is cost rather than ideas. Application value 22: removes one memory-bound reduction per sub-layer. Leverage 32: a clean answer says which of normalization's proposed roles matters, which feeds parametrization and optimizer work.

# Work mix rationale

A large paired training comparison; theory plays a small part in choosing the initial scale.

# Verification

Dataset: a fixed public pre-training corpus (for example FineWeb or DCLM) with identical token order for both arms. Metric: held-out validation loss and the average of a fixed benchmark suite (for example the lm-evaluation-harness tasks used by the baseline's own paper). Threshold: DyT within 0.5% relative validation loss of tuned RMSNorm and no divergence. Budget: at least 3 seeds at a proxy scale (about 400M parameters) and one paired run at 7B parameters and 1T tokens or more, which is roughly the 6·N·D rule of 4×10^22 FLOPs per arm. Report the DyT initial-scale sweep.

# Plain explanation

Most language models have small rescaling steps inside, called normalization layers. A 2025 paper claims they can be swapped for a simple curved function, tanh, and the models learn just as well. That would remove a step from every block.

The paper tested many kinds of models, but the language models it tried were smaller than today's real ones. Nobody has published a careful repeat at the 7-billion-parameter size trained on a trillion words, which is where problems like unstable training usually show up.

The test: train two copies of the same model on the same text, one the standard way and one with the swap, and compare how well each predicts held-out text. Both must be tuned fairly. The swap passes if the gap is under half a percent and training never goes unstable.

Why is this hard? Not because of any deep puzzle, but because each run costs a large computing bill, and the standard model's settings must be tuned as carefully as the new one's or the result means little.

# Student explanation

**What is being asked.** Almost every large language model contains _normalization layers_: after each block, the vector of activations $x$ is divided by its root-mean-square size so its entries stay of order one. Without them, numbers can grow layer after layer until training blows up, much like a feedback amplifier with gain above one. Dynamic Tanh (DyT) replaces each normalization layer with a simple element-wise function, $y = \gamma \tanh(\alpha x) + \beta$. Here $\tanh$ squashes every entry into the range −1 to 1, $\alpha$ is a learned "stretch" factor, and $\gamma$, $\beta$ are learned per-channel scale and shift. No statistics over the vector are computed, which saves a small reduction step in every layer. The question is whether a 7-billion-parameter model with DyT, trained on at least 1 trillion tokens (text chunks), ends with a validation loss (prediction error on held-out text) within 0.5% of an identical model that uses RMSNorm, with no sudden loss spikes.

**What is known.** The DyT paper trained LLaMA models of 7B, 13B, 34B and 70B parameters on 200 billion tokens each and matched RMSNorm: at 7B the final loss was 1.60 with DyT against 1.59 with RMSNorm. But it needed care: the initial $\alpha$ had to be tuned per model size, separately for attention layers and the rest, using short 30-billion-token search runs. Small follow-ups put DyT slightly behind LayerNorm on a 124-million-parameter GPT-2 (loss 2.97 versus 2.94), and one preprint argues DyT becomes fragile in very deep models. Nobody has published a normalization-free language model trained for a trillion tokens or more, and the 7B result has not been independently reproduced.

**Why it is hard.** A 0.5% gap is small: on a loss near 1.6 it is about 0.008. Instabilities in long runs often appear late, after hundreds of billions of tokens, when weights have grown. So a short run can look fine and a long one can diverge. The test is also expensive: a 7B model on 1T tokens costs roughly $6ND = 6 \times 7\times10^9 \times 10^{12} \approx 4\times10^{22}$ floating-point operations per arm, and two arms are needed. A fair comparison also needs the RMSNorm baseline tuned as carefully as DyT.

**An analogy.** Normalization is like an automatic gain control on a microphone; DyT is a fixed soft limiter whose threshold is set in advance. A limiter works well if the signal level stays in the expected range, but cannot adapt if levels drift slowly over a long recording. The analogy breaks because DyT's $\alpha$ does keep learning, just not from the current input's statistics.

**What would settle it.** Paired runs with identical data order (several seeds at a \~400M-parameter proxy, one run each at 7B for 1T tokens), with code and logs released, showing the 0.5% parity or a documented divergence that survives a sweep of DyT's initial scale.
