---
type: problem
slug: low-rank-qsvt-dequantization-gap
title: Optimal classical cost of low-rank singular value transformation, and so the largest quantum speedup for it
entry: dequantization
status: OPEN
origin: Tang, 2018; Chia, Gilyén, Li, Lin, Tang and Wang, 2020
ratings:
  difficulty: 52
  applicationValue: 18
  leverage: 30
workMix:
  theory: 90
  engineering: 0
  compute: 10
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: Tang, A quantum-inspired classical algorithm for recommendation systems (STOC 2019)
    url: https://arxiv.org/abs/1807.04271
  - title: Chia et al., Sampling-based sublinear low-rank matrix arithmetic framework for dequantizing quantum machine learning (STOC 2020)
    url: https://arxiv.org/abs/1910.06151
  - title: Bakshi, Tang, An Improved Classical Singular Value Transformation for Quantum Machine Learning (2023)
    url: https://arxiv.org/abs/2303.01492
  - title: Gilyén, Su, Low, Wiebe, Quantum singular value transformation and beyond (STOC 2019)
    url: https://arxiv.org/abs/1806.01838
  - title: Babbush et al., Focus beyond quadratic speedups for error-corrected quantum advantage (PRX Quantum 2021)
    url: https://arxiv.org/abs/2011.04149
timeline:
  - date: 2018-07-10
    title: Sample-and-query model
    body: Tang dequantized quantum recommendation systems.
    source: https://arxiv.org/abs/1807.04271
  - date: 2019-10-14
    title: General classical SVT
    body: Chia et al. gave a classical SVT with time $\tilde O(d^{22}\|A\|_F^6/(\varepsilon^6\|A\|^6))$.
    source: https://arxiv.org/abs/1910.06151
  - date: 2023-03-02
    title: Improved classical SVT
    body: Bakshi and Tang reduced the cost to $\tilde O(d^{11}\|A\|_F^4/(\varepsilon^2\|A\|^4))$.
    source: https://arxiv.org/abs/2303.01492
explainer:
  oneLine: Pin down how much faster quantum computers really are for machine learning on simple, low-rank data.
  flow:
    - Low-rank data, sampling access
    - Quantum cost grows like d
    - Classical cost grows like d¹¹
    - Find the true optimal exponents
    - Decides value of quantum ML
  glossary:
    - term: dequantization
      meaning: Classical algorithms matching quantum speedups under comparable data access.
      link: /research/dequantization
    - term: singular values
      meaning: The stretch factors of a matrix in its singular value decomposition.
      link: https://en.wikipedia.org/wiki/Singular_value_decomposition
    - term: stable rank
      meaning: The squared Frobenius norm divided by the squared largest singular value; a smooth measure of rank.
      link: https://en.wikipedia.org/wiki/Low-rank_approximation
    - term: lower bound
      meaning: A proof that no algorithm can solve a problem faster than some amount.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: QSVT
      meaning: Quantum singular value transformation, the framework covering quantum linear algebra.
      link: /research/hamiltonian-simulation
    - term: polynomial speedup
      meaning: A speedup where the classical cost is a power of the quantum cost, such as squared.
      link: https://en.wikipedia.org/wiki/Quantum_machine_learning
  readFirst:
    - title: A Teenager Finds a Classical Alternative to a Quantum Speedup (Quanta Magazine)
      url: https://www.quantamagazine.org/teenager-finds-classical-alternative-to-quantum-recommendation-algorithm-20180731/
      why: Where dequantization started.
    - title: Quantum machine learning (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_machine_learning
      why: The applications whose value this question decides.
site:
  aiReviewed: true
---

Let $A\in\mathbb C^{m\times n}$ with $\|A\|\le1$ and $b\in\mathbb C^n$ be given with **sample-and-query access** after linear-time preprocessing (one can query entries and sample an index with probability proportional to the squared entry, for $b$ and for the rows of $A$ and their norms). Let $p$ be a polynomial of degree $d$ bounded by 1 on $[-1,1]$. The task is to output a succinct description of a vector $v$ (supporting queries and samples) with $\|v-p(A)b\|\le\varepsilon\|b\|$.

The best known classical algorithm (Bakshi and Tang, 2023) runs in time $\tilde O\big(d^{11}\|A\|_F^4/(\varepsilon^2\|A\|^4)\big)$. With the same data in a quantum-accessible memory, the quantum singular value transformation estimates an entry of $p(A)b$ to error $\varepsilon\|b\|$ in $\tilde O\big(d\,\|A\|_F/(\varepsilon\|A\|)\big)$.

**Question:** what is the optimal classical complexity of this task as a function of $d$, the stable rank $\|A\|_F^2/\|A\|^2$ and $\varepsilon$? In particular, is the quantum advantage for low-rank QSVT at most quadratic in every parameter, or is there a provably larger polynomial gap?

# State of the art

Tang (2018; STOC 2019) introduced the sample-and-query model and dequantized recommendation systems with a high-degree polynomial running time. Chia et al. (STOC 2020) generalised this to singular value transformation with time $\tilde O(d^{22}\|A\|_F^6/(\varepsilon^6\|A\|^6))$, showing that QSVT gives no exponential speedup for low-rank matrices in this input model. Bakshi and Tang (2023) brought it down to $\tilde O(d^{11}\|A\|_F^4/(\varepsilon^2\|A\|^4))$ by combining the Clenshaw recurrence with sketching, a new stability analysis and a non-oblivious sketch for bilinear forms. Specialised tasks (regression, recommendation) have their own improved bounds. Matching classical lower bounds in this model are not known for general SVT, so the true size of the polynomial gap is open; the quantum side is close to optimal by the QSVT lower bounds of Gilyén et al. (2019).

# Applications

Sets the ceiling on speedups for quantum machine learning on classical low-rank data (recommendation, PCA, regression, SDP solving). Babbush et al. (2021) argue that quadratic speedups will not pay off on early fault-tolerant machines while quartic ones might, so whether the gap is below or above quartic decides whether this whole class of applications is worth pursuing.

# Resolution criteria

A classical algorithm with proved complexity together with a matching lower bound in the sample-and-query model (up to polylogarithmic factors), or a proof of a lower bound that separates classical and quantum costs by a stated polynomial, accepted by experts.

# Rating rationale

Difficulty 52: upper bounds have improved steadily (exponents (22,6,6) to (11,4,2)) but classical lower bounds in the sample-and-query model are undeveloped. Application value 18: it bounds quantum machine learning on classical low-rank data rather than enabling anything directly; it matters mostly because quadratic gaps rarely survive error-correction overhead. Leverage 30: one research programme within quantum algorithms, below the Aaronson–Ambainis conjecture (41).

# Work mix rationale

Upper and lower bounds in a query model are proof work; implementations only test constants.

# Verification

Quantity: the exponents $(a,b,c)$ in a classical running time $\tilde O(d^{a}(\|A\|_F/\|A\|)^{b}\varepsilon^{-c})$ for SVT under sample-and-query access; current best $(11,4,2)$ (Bakshi–Tang 2023) against the quantum $(1,1,1)$. An improved upper bound needs a proof reviewed by experts plus a reference implementation tested on synthetic low-rank matrices (error against exact $p(A)b$ computed densely for $n\le 10^4$). A lower bound needs a proof in the stated access model.

# Plain explanation

Quantum machine learning once promised exponential speedups for tasks like recommendations and data analysis. Since 2018, 'dequantized' ordinary algorithms have shown that for data with a simple, low-rank structure, ordinary computers can do the same tasks with only a polynomial slowdown. The quantum advantage there is real but much smaller than first hoped.

How much smaller is unknown. The best ordinary method today has a cost that grows like the eleventh power of one of the problem's parameters, where the quantum method grows only in proportion to it. Nobody has proved that ordinary methods cannot do much better; they might shrink the gap to a square root, or the gap might be provably larger.

The answer matters because running a quantum computer has huge overheads from error correction. Analyses suggest a square-root advantage is not enough to pay for that overhead, while a fourth-power advantage might be. So this question decides whether a whole class of proposed quantum machine-learning applications is worth building hardware for.

# Student explanation

**Setting.** Data: a matrix $A$ and a vector $b$, stored so that you can read any entry and sample entries with probability proportional to their squared size (sample-and-query access). Task: approximate $p(A)b$, where $p$ is a polynomial of degree $d$ applied to $A$'s singular values. Many machine-learning tasks (regression, principal components, recommendations) are of this form.

**Parameters.** The _stable rank_ $\|A\|_F^2/\|A\|^2$ measures how many directions matter (Frobenius norm squared over the largest singular value squared). The accuracy is $\varepsilon$.

**Current costs.**

- Quantum (QSVT, with data in quantum memory): about $d\cdot(\|A\|_F/\|A\|)/\varepsilon$.
- Best classical (Bakshi and Tang, 2023): about $d^{11}(\|A\|_F/\|A\|)^4/\varepsilon^2$, down from $d^{22}(\|A\|_F/\|A\|)^6/\varepsilon^6$ in 2020.

**The question.** What are the smallest possible exponents for a classical algorithm? Proving a classical _lower bound_ means showing no algorithm with this access can do better, which needs techniques that barely exist for this model.

**Why the exponents matter.** If a quantum algorithm takes $T$ steps and the best classical one takes $T^2$, the quantum computer only wins when $T$ is large enough to offset each quantum step being millions of times slower with error correction. Estimates by Babbush et al. (2021) suggest quadratic gaps do not pay off on early fault-tolerant machines while quartic gaps might.

**What a lower bound would look like.** One would show that any classical algorithm making fewer than, say, $d^2$ samples and queries must fail on some input, by constructing two inputs that look the same to any small set of samples but need different outputs. Such _indistinguishability_ arguments are standard for query complexity, but adapting them to sampling access with the norms involved here has not been done.

**Context.** For sparse, high-rank matrices no such dequantization exists, so this question concerns only the low-rank, classical-data setting.
