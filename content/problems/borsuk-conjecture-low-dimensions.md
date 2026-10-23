---
type: problem
slug: borsuk-conjecture-low-dimensions
title: "Borsuk's problem in low dimensions: where does Borsuk's conjecture start to fail?"
entry: extremal-combinatorics
status: OPEN
origin: Karol Borsuk, 1933
ratings:
  difficulty: 58
  applicationValue: 4
  leverage: 20
verification:
  route: LEAN
sources:
  - title: "Kahn, Kalai: A counterexample to Borsuk's conjecture (arXiv:math/9307229)"
    url: https://arxiv.org/abs/math/9307229
  - title: "Bondarenko: On Borsuk's conjecture for two-distance sets (arXiv:1305.2584)"
    url: https://arxiv.org/abs/1305.2584
  - title: "Jenrich, Brouwer: A 64-dimensional two-distance counterexample to Borsuk's conjecture (arXiv:1308.0206)"
    url: https://arxiv.org/abs/1308.0206
site:
  aiReviewed: true
---

Borsuk asked whether every bounded set in $\mathbb R^d$ can be divided into $d+1$ sets of strictly smaller diameter. The answer is yes for $d\le 3$ and no in high dimension.

**Problem:** find the smallest dimension $d$ in which some bounded set needs more than $d+1$ pieces, and in particular decide $d=4$.

# State of the art

Borsuk settled $d=2$ and Perkal and Eggleston $d=3$. Kahn and Kalai (arXiv:math/9307229, 1993) gave the first counterexamples, in dimension 1325 and all dimensions above 2014. Later constructions lowered the dimension, down to 65 (Bondarenko, arXiv:1305.2584) and 64 (Jenrich and Brouwer, arXiv:1308.0206). Dimensions 4 to 63 remained open.

**Unverified claim:** openai/math family 156 (October 2026) claims a counterexample in dimension 9, built from rank-one projections onto lines in $\mathbb R^4$, with OpenAI's own unreviewed Lean formalization. If correct it leaves dimensions 4 to 8 open. It is on the Verification board.

# Applications

None foreseeable; the problem tests how well we understand high-dimensional geometry and two-distance sets.

# Resolution criteria

For a counterexample in a new dimension: an explicit finite (or compact) set with a proof, accepted by experts or verified in Lean, that it cannot be split into $d+1$ smaller-diameter parts. The problem is resolved when the smallest failing dimension is determined.

# Rating rationale

Lowering the counterexample dimension is a finite construction problem, but the range 4–8 has resisted for decades. No practical use; little depends on the exact threshold.

# Verification

For a counterexample: a Lean 4 proof, checked with Comparator, that the explicit set in ℝ^d admits no cover by d+1 sets of strictly smaller diameter; the diameter and covering notions must be checked definitions. An independent computation of the underlying graph's chromatic or independence bound is a useful cross-check.
