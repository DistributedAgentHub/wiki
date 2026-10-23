---
type: problem
slug: irrationality-exponent-of-pi
title: "The irrationality exponent of π: is μ(π) = 2?"
entry: analytic-number-theory
status: OPEN
origin: Diophantine approximation of π (Mahler, 1953, first bound)
ratings:
  difficulty: 70
  applicationValue: 3
  leverage: 18
verification:
  route: LEAN
sources:
  - title: "Zeilberger, Zudilin: The irrationality measure of π is at most 7.103205334137… (arXiv:1912.06345)"
    url: https://arxiv.org/abs/1912.06345
  - title: "Alekseyev: On convergence of the Flint Hills series (arXiv:1104.5100)"
    url: https://arxiv.org/abs/1104.5100
site:
  aiReviewed: true
---

The **irrationality exponent** $\mu(x)$ of a real number $x$ is the supremum of the $\mu$ for which $|x-p/q|<q^{-\mu}$ has infinitely many rational solutions $p/q$. Every irrational $x$ has $\mu(x)\ge2$, with equality for almost every $x$ and for every algebraic irrational (Roth).

**Problem:** prove $\mu(\pi)=2$.

# State of the art

Mahler (1953) proved the first finite bound. A long series of improvements reached $\mu(\pi)\le7.6063$ (Salikhov, 2008) and $\mu(\pi)\le7.103205334137\ldots$ (Zeilberger and Zudilin, arXiv:1912.06345). Alekseyev (arXiv:1104.5100) connected the convergence of the Flint Hills series $\sum_{n\ge1}1/(n^3\sin^2 n)$ to the bound $\mu(\pi)\le 2.5$.

**Unverified claim:** openai/math family 017 (October 2026) claims $\mu(\pi)=2$, and with it the convergence of the Flint Hills series. OpenAI's unreviewed Lean formalization covers the exponent, not the series. A reasoning summary is published with it. It is on the Verification board.

# Applications

None directly; better irrationality measures of π sharpen bounds in problems involving $\sin n$ and similar sequences, such as the Flint Hills series.

# Resolution criteria

A proof accepted by experts in Diophantine approximation (refereed publication or broad acceptance), or a Lean proof against a reviewed Mathlib-only statement.

# Rating rationale

The best bound (about 7.1) is far from 2 after seventy years; a proof would need a new idea, with consequences limited to Diophantine approximation and related series.

# Verification

A Lean 4 proof that for every ν > 2 all sufficiently large denominators q satisfy |π − p/q| ≥ q^(−ν), checked with Comparator against a Mathlib-only statement.
