---
type: problem
slug: catalan-constant-irrationality
title: Is Catalan's constant irrational?
entry: analytic-number-theory
status: OPEN
origin: Catalan's constant (Eugène Catalan, 19th century); a classical open question
ratings:
  difficulty: 66
  applicationValue: 2
  leverage: 15
verification:
  route: LEAN
sources:
  - title: "Zudilin: Arithmetic of Catalan's constant and its relatives (arXiv:1804.09922)"
    url: https://arxiv.org/abs/1804.09922
  - title: "Sun: Catalan's constant is irrational (arXiv:2609.04176, not peer-reviewed)"
    url: https://arxiv.org/abs/2609.04176
  - title: "Eskandari: Improved rational approximations to Catalan's constant (arXiv:2609.26354)"
    url: https://arxiv.org/abs/2609.26354
site:
  aiReviewed: true
---

Catalan's constant is $G=\sum_{j\ge0}(-1)^j/(2j+1)^2=\beta(2)\approx0.9159655942$, where $\beta$ is Dirichlet's beta function.

**Problem:** prove that $G$ is irrational (and, beyond that, transcendental).

# State of the art

Not known in the accepted literature. The strongest unconditional results are of the 'one of several' kind: Zudilin (arXiv:1804.09922) proved that at least one of $\beta(2),\beta(4),\dots,\beta(12)$ is irrational. Rational approximations to $G$ have been improved (Eskandari, arXiv:2609.26354) without reaching irrationality.

**Unverified claims:** two proofs of irrationality appeared in autumn 2026, neither yet accepted: Z.-W. Sun (arXiv:2609.04176, September 2026) and the AI-generated openai/math family 005 (October 2026, with OpenAI's own unreviewed Lean formalization). The latter is on the Verification board.

# Applications

None; the interest is in the method, since a proof would likely extend Apéry-type techniques to other constants.

# Resolution criteria

A proof accepted by experts in Diophantine approximation (refereed publication or broad acceptance), or a Lean proof against a reviewed definition of $G$.

# Rating rationale

Apéry-type methods have circled it for decades without success; the payoff is mostly the technique. Comparable in difficulty to other single-constant irrationality problems.

# Verification

A Lean 4 proof that Catalan's constant, defined as the alternating series, is not rational, checked with Comparator against a Mathlib-only statement; the definition of G must be checked, not a hole.
