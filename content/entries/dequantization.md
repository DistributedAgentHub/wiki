---
type: entry
slug: dequantization
title: Dequantization and quantum-inspired classical algorithms
field: quantum-algorithms
kind: THEORY
status: ACTIVE
summary: Classical algorithms that match quantum machine-learning speedups up to polynomial factors when given comparable sampling access to the data, showing that many claimed exponential speedups came from the input model.
reliedOn: Before a quantum linear-algebra or machine-learning speedup counts, it has to survive dequantization; the polynomial gap that remains sets how much advantage those applications can offer.
dependsOn:
  - quantum-algorithms
  - quantum-linear-systems
references:
  - title: Kerenidis, Prakash, Quantum Recommendation Systems (ITCS 2017)
    url: https://arxiv.org/abs/1603.08675
    kind: paper
  - title: Tang, A quantum-inspired classical algorithm for recommendation systems (arXiv 1807.04271)
    url: https://arxiv.org/abs/1807.04271
    kind: paper
  - title: Tang, same paper, STOC 2019
    url: https://doi.org/10.1145/3313276.3316310
    kind: paper
  - title: Tang, Quantum principal component analysis only achieves an exponential speedup because of its state preparation assumptions (PRL 2021)
    url: https://arxiv.org/abs/1811.00414
    kind: paper
  - title: Gilyén, Lloyd, Tang, Quantum-inspired low-rank stochastic regression with logarithmic dependence on the dimension (2018)
    url: https://arxiv.org/abs/1811.04909
    kind: paper
  - title: Chia et al., Sampling-based sublinear low-rank matrix arithmetic framework for dequantizing quantum machine learning (STOC 2020)
    url: https://arxiv.org/abs/1910.06151
    kind: paper
  - title: Bakshi, Tang, An Improved Classical Singular Value Transformation for Quantum Machine Learning (2023)
    url: https://arxiv.org/abs/2303.01492
    kind: paper
  - title: Gharibian, Le Gall, Dequantizing the Quantum Singular Value Transformation (SIAM J. Comput. 2023)
    url: https://arxiv.org/abs/2111.09079
    kind: paper
timeline:
  - date: 2016-03-29
    title: Quantum recommendation systems
    body: Kerenidis and Prakash proposed an exponentially faster quantum recommendation algorithm in the QRAM model.
    source: https://arxiv.org/abs/1603.08675
  - date: 2018-07-10
    title: Tang's dequantization
    body: Tang matched the quantum recommendation algorithm classically up to polynomial factors.
    source: https://arxiv.org/abs/1807.04271
  - date: 2019-10-14
    title: Classical singular value transformation
    body: Chia et al. dequantized low-rank QSVT in general.
    source: https://arxiv.org/abs/1910.06151
  - date: 2021-11-17
    title: Sparse QSVT boundary
    body: Gharibian and Le Gall showed constant-precision sparse QSVT is classically easy and inverse-polynomial precision is BQP-complete.
    source: https://arxiv.org/abs/2111.09079
  - date: 2023-03-02
    title: Smaller polynomial gap
    body: Bakshi and Tang improved classical SVT to $\tilde O(d^{11}\|A\|_F^4/(\varepsilon^2\|A\|^4))$.
    source: https://arxiv.org/abs/2303.01492
explainer:
  oneLine: Ordinary algorithms that copy the tricks of quantum machine learning and nearly match its speed.
  flow:
    - Quantum ML assumes special data loading
    - Same structure allows weighted sampling
    - Sampling mimics superposition classically
    - Exponential speedups shrink to polynomial
    - "Open: how big is the gap"
  glossary:
    - term: recommendation system
      meaning: Software that predicts what a user will like from many users' ratings.
      link: https://en.wikipedia.org/wiki/Recommender_system
    - term: low-rank matrix
      meaning: A matrix that is well approximated using only a few independent directions.
      link: https://en.wikipedia.org/wiki/Low-rank_approximation
    - term: singular value decomposition
      meaning: Writing a matrix as rotations and stretches; the stretch factors are singular values.
      link: https://en.wikipedia.org/wiki/Singular_value_decomposition
    - term: sample-and-query access
      meaning: Being able to read any entry and to pick entries at random with probability proportional to their squared size.
      link: /research/dequantization
    - term: quantum machine learning
      meaning: Using quantum computers for data-analysis and learning tasks.
      link: https://en.wikipedia.org/wiki/Quantum_machine_learning
    - term: QSVT
      meaning: Quantum singular value transformation, a framework that unifies most quantum algorithms for matrices.
      link: /research/hamiltonian-simulation
  readFirst:
    - title: A Teenager Finds a Classical Alternative to a Quantum Speedup (Quanta Magazine)
      url: https://www.quantamagazine.org/teenager-finds-classical-alternative-to-quantum-recommendation-algorithm-20180731/
      why: The story of Tang's result in plain language.
    - title: Ewin Tang (Wikipedia)
      url: https://en.wikipedia.org/wiki/Ewin_Tang
      why: Short background on the dequantization programme.
site:
  published: true
  aiReviewed: true
---

## The recommendation-systems story

Kerenidis and Prakash (2016) gave a quantum algorithm that samples recommendations from a low-rank approximation of an $m\times n$ preference matrix in time $\mathrm{poly}(k)\,\mathrm{polylog}(mn)$, assuming the matrix is stored in a binary-tree data structure that a quantum random-access memory (QRAM) can query in superposition. It was regarded as one of the best candidates for an exponential speedup in machine learning.

Tang (2018; STOC 2019) gave a classical algorithm with running time $O(\mathrm{poly}(k)\log(mn))$, only polynomially slower. The key observation is that the same data structure lets a classical computer sample an index $i$ with probability $|v_i|^2/\|v\|^2$ and query entries, called **sample-and-query access**. These $\ell^2$-norm samples play the role that superpositions play in the quantum algorithm.

## The general framework

The method spread quickly: Tang (2018) for principal component analysis, Gilyén, Lloyd and Tang (2018) for low-rank regression, and then Chia, Gilyén, Li, Lin, Tang and Wang (STOC 2020), who gave a classical version of the quantum singular value transformation (QSVT) for matrices of low "stable rank" $\|A\|_F^2/\|A\|^2$. Since QSVT covers essentially all quantum linear algebra, this showed that in the QRAM input model QSVT on such matrices gives no exponential speedup, and it recovered dequantizations of recommendation systems, PCA, clustering, support vector machines and semidefinite programs.

The remaining gap is polynomial but large. Bakshi and Tang (2023) gave a classical algorithm that outputs a description of $v$ with $\|v-p(A)b\|\le\varepsilon\|b\|$ in time $\tilde O(d^{11}\|A\|_F^4/(\varepsilon^2\|A\|^4))$ for a degree-$d$ polynomial $p$, improving the $\tilde O(d^{22}\|A\|_F^6/(\varepsilon^6\|A\|^6))$ of Chia et al.; QSVT estimates an entry of $p(A)b$ in $\tilde O(d\|A\|_F/(\varepsilon\|A\|))$ after loading the data.

## What dequantization does not reach

Dequantization needs low stable rank and sampling access. Sparse, full-rank, well-conditioned matrices given by formulas, the setting of HHL and Hamiltonian simulation, are BQP-complete, so they cannot be dequantized unless BPP = BQP. Gharibian and Le Gall (2023) mapped the boundary for sparse matrices: low-degree QSVT can be dequantized to constant precision, but inverse-polynomial precision is BQP-complete. Problems whose input is itself quantum (data from a quantum experiment) are a different setting, with separate speedups.

## Why it matters

A speedup that is only polynomial must also beat error-correction overhead, and quadratic gaps rarely do (Babbush et al., 2021). Dequantization is therefore the first test any proposed quantum machine-learning application on classical data has to pass, and the size of the remaining polynomial gap is the open question.

# Plain explanation

In 2016 researchers proposed a quantum algorithm for recommendation systems, the kind that suggests films or products, and it looked exponentially faster than any ordinary method. It became a flagship example of quantum machine learning.

In 2018 Ewin Tang, then an undergraduate, found an ordinary algorithm that does almost as well. The quantum method assumed the data were stored in a special structure that lets it load information quickly. Tang noticed that the same structure lets an ordinary computer pick out data points at random in a clever, weighted way, and that this random sampling can play the role of quantum superposition.

This 'dequantization' idea then knocked down many other claimed exponential speedups in quantum machine learning, turning them into much smaller speedups. It does not apply everywhere: for problems such as simulating physics, quantum computers are still expected to be exponentially faster.

The open question is how big the remaining gap is. If quantum methods are only a little faster on these problems, the overhead of running a real quantum computer would wipe out the advantage.

# Student explanation

**The input model.** Quantum machine-learning algorithms on classical data usually assume a _quantum random-access memory_: a data structure (a binary tree of partial sums of squared entries) that can load a vector $v$ as the quantum state $\sum_i v_i|i\rangle/\|v\|$ quickly. Tang's observation: the same tree lets a classical computer _sample_ an index $i$ with probability $|v_i|^2/\|v\|^2$ and _query_ any entry. This is **sample-and-query access**.

**Why sampling helps.** To estimate a product like $u^T v$ or $AB$ for huge matrices, you do not need every term: sampling terms in proportion to their size, and averaging, gives an accurate estimate with a number of samples that depends on norms and accuracy, not on the dimension. For a matrix of low rank $k$ (it is well approximated using only $k$ directions), these estimates let a classical algorithm find an approximate singular value decomposition in time polynomial in $k$ and only logarithmic in the dimension, like the quantum algorithm.

**The general result.** The quantum singular value transformation (QSVT) applies a polynomial to the singular values of a matrix and covers almost all quantum linear algebra. Chia et al. (2020) showed a classical version for low-rank matrices, so QSVT gives no exponential speedup there. The best classical cost (Bakshi and Tang, 2023) is roughly $d^{11}$ in the polynomial degree $d$, versus about $d$ for the quantum algorithm, so a large polynomial gap remains.

**Limits.** Sparse, full-rank matrices described by formulas (as in Hamiltonian simulation and HHL) are BQP-complete and cannot be dequantized unless quantum computers are no more powerful than classical ones.
