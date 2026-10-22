---
type: entry
slug: quantum-linear-systems
title: HHL and quantum linear-system solvers
field: quantum-algorithms
kind: ALGORITHM
status: ACTIVE
summary: Quantum algorithms that prepare a state proportional to the solution of Ax = b in time polylogarithmic in the dimension, under strong assumptions on input access, sparsity, condition number and what is read out.
reliedOn: Claims of exponential quantum speedups for machine learning, differential equations and data analysis mostly reduce to a linear-system or matrix-function subroutine, so its caveats decide whether those claims hold.
dependsOn:
  - amplitude-amplification
  - hamiltonian-simulation
  - quantum-phase-estimation
references:
  - title: Harrow, Hassidim, Lloyd, Quantum algorithm for solving linear systems of equations (arXiv 0811.3171)
    url: https://arxiv.org/abs/0811.3171
    kind: paper
  - title: Harrow, Hassidim, Lloyd, same paper, PRL 103, 150502 (2009)
    url: https://doi.org/10.1103/PhysRevLett.103.150502
    kind: paper
  - title: Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations (2012)
    url: https://arxiv.org/abs/1010.4458
    kind: paper
  - title: Childs, Kothari, Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision (SIAM J. Comput. 2017)
    url: https://arxiv.org/abs/1511.02306
    kind: paper
  - title: Subaşı, Somma, Orsucci, Quantum algorithms for systems of linear equations inspired by adiabatic quantum computing (PRL 2019)
    url: https://arxiv.org/abs/1805.10549
    kind: paper
  - title: Costa et al., Optimal scaling quantum linear systems solver via discrete adiabatic theorem (PRX Quantum 2022)
    url: https://arxiv.org/abs/2111.08152
    kind: paper
  - title: Aaronson, Read the fine print (Nature Physics 2015)
    url: https://doi.org/10.1038/nphys3272
    kind: article
  - title: Chia et al., Sampling-based sublinear low-rank matrix arithmetic framework for dequantizing quantum machine learning (STOC 2020)
    url: https://arxiv.org/abs/1910.06151
    kind: paper
timeline:
  - date: 2008-11-19
    title: HHL algorithm
    body: Harrow, Hassidim and Lloyd posted the quantum linear-systems algorithm; it appeared in PRL in October 2009.
    source: https://arxiv.org/abs/0811.3171
  - date: 2010-10-21
    title: Near-linear condition-number dependence
    body: Ambainis introduced variable-time amplitude amplification.
    source: https://arxiv.org/abs/1010.4458
  - date: 2015-04-01
    title: Read the fine print
    body: Aaronson set out the conditions under which HHL-type speedups are meaningful (Nature Physics, April 2015; month only).
    source: https://doi.org/10.1038/nphys3272
  - date: 2015-11-07
    title: Polylogarithmic precision dependence
    body: Childs, Kothari and Somma improved the dependence on $1/\varepsilon$ exponentially.
    source: https://arxiv.org/abs/1511.02306
  - date: 2021-11-16
    title: Optimal scaling
    body: Costa et al. gave an $O(\kappa\log(1/\varepsilon))$ solver via a discrete adiabatic theorem.
    source: https://arxiv.org/abs/2111.08152
explainer:
  oneLine: Quantum methods for solving huge systems of linear equations, fast only under strict conditions on the input and output.
  flow:
    - Load b as a quantum state
    - Phase estimation finds eigenvalues
    - Rotate by one over each eigenvalue
    - Get state proportional to solution
    - Read only summary numbers
  glossary:
    - term: linear system
      meaning: A set of equations Ax = b where each equation is a weighted sum of the unknowns.
      link: https://en.wikipedia.org/wiki/System_of_linear_equations
    - term: sparse matrix
      meaning: A matrix in which most entries are zero.
      link: https://en.wikipedia.org/wiki/Sparse_matrix
    - term: condition number
      meaning: How much the solution of Ax = b can change when b changes slightly; large means ill-behaved.
      link: https://en.wikipedia.org/wiki/Condition_number
    - term: quantum state
      meaning: The complete description of qubits; here its amplitudes encode a vector.
      link: https://en.wikipedia.org/wiki/Qubit
    - term: BQP-complete
      meaning: As hard as any problem a quantum computer solves efficiently.
      link: /research/bqp-complexity-class
    - term: dequantization
      meaning: Classical algorithms that match a quantum speedup under comparable data access.
      link: /research/dequantization
    - term: HHL algorithm
      meaning: The 2008 quantum linear-systems algorithm of Harrow, Hassidim and Lloyd.
      link: https://en.wikipedia.org/wiki/HHL_algorithm
  readFirst:
    - title: HHL algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/HHL_algorithm
      why: The algorithm and its assumptions in one place.
    - title: Aaronson, Read the fine print (Nature Physics 2015)
      url: https://doi.org/10.1038/nphys3272
      why: A short, readable list of the caveats.
site:
  published: true
  aiReviewed: true
---

## The problem and the algorithm

Given an $N\times N$ Hermitian matrix $A$ that is $s$-sparse with efficiently computable entries, with condition number $\kappa$, and a circuit that prepares $|b\rangle$, the task is to prepare a state $\varepsilon$-close to $|x\rangle\propto A^{-1}|b\rangle$. Harrow, Hassidim and Lloyd (HHL, 2009) did this in time $\tilde O(\log(N)\,s^2\kappa^2/\varepsilon)$: phase estimation on $e^{iAt}$ writes eigenvalues $\lambda_j$ into a register, a controlled rotation multiplies each component by $1/\lambda_j$, and amplitude amplification boosts the success probability.

Later algorithms improved every parameter. Ambainis (2012) brought the $\kappa$ dependence close to linear with variable-time amplitude amplification; Childs, Kothari and Somma (2017) made the precision dependence polylogarithmic in $1/\varepsilon$; adiabatic-inspired methods (Subaşı, Somma and Orsucci, 2019) led to the algorithm of Costa et al. (2022) with complexity $O(\kappa\log(1/\varepsilon))$, optimal in both parameters. In the quantum singular value transformation framework, solving $Ax=b$ is applying a polynomial approximation of $1/x$ to a block-encoding of $A$.

## Why the speedup is believed to be real

HHL showed that this matrix-inversion problem is BQP-complete: a classical algorithm with similar scaling would simulate any quantum computation efficiently. So for sparse, well-conditioned matrices given by formulas, an exponential separation is expected under the usual belief that BQP is larger than BPP.

## The fine print

Aaronson (2015) listed the conditions an application must meet. (1) The vector $b$ must be loadable as a quantum state quickly; for generic data this needs a quantum random-access memory or costs $\Omega(N)$. (2) $A$ must be sparse (or block-encodable) and well conditioned; $\kappa$ often grows with $N$ for discretised differential equations. (3) The output is a quantum state, not the vector: reading out all $N$ amplitudes costs $\Omega(N)$, so the method only helps when a few quantities such as $\langle x|M|x\rangle$ are needed. (4) When the data are low-rank and stored in a sampling data structure, classical "dequantized" algorithms match the quantum ones up to polynomial factors (Tang, 2019; Chia et al., 2020).

## Status

The algorithmic question is largely settled: the optimal dependence on $\kappa$ and $\varepsilon$ is known. What is not settled is whether any practically motivated instance meets all four conditions at a size where it beats the best classical solver once error-correction overhead is counted. Proposals cover linear differential equations, some nonlinear equations through linearisation, and least-squares fitting.

# Plain explanation

Solving many equations with many unknowns at once is at the heart of engineering: stress in a bridge, airflow over a wing, fitting data. For a million unknowns, ordinary computers need a lot of work.

In 2008 Harrow, Hassidim and Lloyd (HHL) found a quantum method whose running time grows only with the number of digits needed to write the size, so a billion unknowns cost little more than a thousand. That sounds revolutionary, but there are conditions. The equations must be sparse (each involves only a few unknowns) and well behaved. The input must be loaded into the quantum computer quickly. And the answer comes out as a quantum state, not a list of numbers: you can learn a few summary numbers about the solution, but reading out every value would take as long as solving it the ordinary way.

When all conditions hold, the speedup is believed to be real: the problem is as hard as anything a quantum computer can do. When the data are of a simpler, low-rank kind, ordinary 'quantum-inspired' algorithms almost catch up. Whether any practical problem meets every condition is still debated.

# Student explanation

**The task.** Given a matrix $A$ (size $N\times N$) and a vector $b$, find $x$ with $Ax=b$. Gaussian elimination, from first-year linear algebra, costs about $N^3$ operations; iterative methods for sparse $A$ cost about $N$ times a factor depending on the **condition number** $\kappa$, the ratio of the largest to the smallest eigenvalue magnitude, which measures how sensitive the solution is to small changes.

**HHL's idea.** Prepare $b$ as a quantum state $|b\rangle$ whose amplitudes are the entries of $b$ (normalised). Use phase estimation to write the eigenvalues $\lambda_j$ of $A$ into a register. Then rotate a helper qubit by an amount proportional to $1/\lambda_j$, which multiplies each eigencomponent by $1/\lambda_j$, exactly what $A^{-1}$ does. After undoing the phase estimation, the state is proportional to $A^{-1}b$. The cost grows like $\log N$ and polynomially in $\kappa$ and the sparsity; later algorithms reach the optimal $\kappa\log(1/\varepsilon)$.

**The fine print.**

- Loading $b$: for arbitrary data this costs about $N$ steps unless special memory hardware exists.
- Output: you get $|x\rangle$, a quantum state. You can estimate quantities like $x^TMx$, but writing out all $N$ entries costs about $N$ measurements.
- $\kappa$ must be small; for discretised differential equations it often grows with $N$.

**Why it is still important.** HHL proved that this matrix-inversion problem is BQP-complete, as hard as any quantum computation, so a fast classical algorithm in the same setting would be a shock. The open question is applications, not the algorithm.

**Worked caveat.** For a finite-difference model of heat flow on a grid with $N$ points per side, $\kappa$ grows roughly like $N^2$, so the polynomial dependence on $\kappa$ can cancel much of the $\log N$ advantage unless the system is preconditioned.
