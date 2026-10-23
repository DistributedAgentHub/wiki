---
type: problem
slug: sensitivity-block-sensitivity-quadratic-gap
title: "Sensitivity versus block sensitivity: is bs(f) = O(s(f)²)?"
entry: computational-complexity
status: OPEN
origin: Nisan–Szegedy (1992); quadratic form after Rubinstein (1995)
ratings:
  difficulty: 50
  applicationValue: 8
  leverage: 30
verification:
  route: LEAN
sources:
  - title: "Huang: Induced subgraphs of hypercubes and a proof of the Sensitivity Conjecture (arXiv:1907.00847)"
    url: https://arxiv.org/abs/1907.00847
  - title: "Rubinstein: Sensitivity vs. block sensitivity of Boolean functions (Combinatorica 15, 1995)"
    url: https://doi.org/10.1007/BF01200762
  - title: "Ambainis, Sun: New separation between s(f) and bs(f) (arXiv:1108.3494)"
    url: https://arxiv.org/abs/1108.3494
site:
  aiReviewed: true
---

For a Boolean function $f:\{0,1\}^n\to\{0,1\}$, the **sensitivity** $s(f)$ is the largest number, over inputs $x$, of single bits whose flip changes $f(x)$; the **block sensitivity** $\mathrm{bs}(f)$ is the largest number of disjoint blocks of bits whose flip changes $f(x)$. Always $s(f)\le\mathrm{bs}(f)$.

**Problem:** determine the right exponent relating them. Is $\mathrm{bs}(f)=O(s(f)^2)$ for every total Boolean function, or is there a superquadratic separation?

# State of the art

Huang (arXiv:1907.00847, Annals 2019) proved the Sensitivity Conjecture: $\deg(f)\le s(f)^2$, which gives $\mathrm{bs}(f)\le 2\,s(f)^4$. Rubinstein (Combinatorica 1995) gave functions with $\mathrm{bs}(f)=\Omega(s(f)^2)$, and Ambainis and Sun (arXiv:1108.3494) improved the constant. So the true exponent lies between 2 and 4, and many expected the quadratic separation to be tight.

**Unverified claim:** openai/math family 132 (October 2026) claims functions with $\mathrm{bs}(f)\ge s(f)^{\alpha}$ for a fixed $\alpha>2$; OpenAI's unreviewed Lean formalization states only the weaker fact that $\mathrm{bs}(f)/s(f)^2$ is unbounded. It is on the Verification board.

# Applications

None directly; sensitivity measures feed into query complexity, learning theory and circuit lower bounds, where the exponent fixes how tightly these measures are related.

# Resolution criteria

A construction (for a superquadratic separation) or a proof (for the quadratic bound) accepted by experts, or a Lean proof against a reviewed definition of sensitivity and block sensitivity.

# Rating rationale

A sharp residual question after Huang's 2019 theorem, research-grade but narrower than the Sensitivity Conjecture itself. It fixes relations between query measures within one subfield.

# Verification

A Lean 4 construction or proof checked with Comparator, with sensitivity and block sensitivity as checked definitions. For a separation, the formal statement must give the exponent α > 2, not only that bs(f)/s(f)² is unbounded.
