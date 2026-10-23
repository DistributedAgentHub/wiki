---
type: problem
slug: ostmann-inverse-goldbach
title: "Ostmann's inverse Goldbach problem: can the primes, up to finitely many changes, be a sumset?"
entry: analytic-number-theory
status: OPEN
origin: Hans-Heinrich Ostmann, 1968
ratings:
  difficulty: 55
  applicationValue: 2
  leverage: 12
verification:
  route: LEAN
sources:
  - title: "Leonetti: On the inverse Goldbach problem (arXiv:2610.15758)"
    url: https://arxiv.org/abs/2610.15758
site:
  aiReviewed: true
---

**Conjecture:** there are no sets $A,B\subseteq\mathbb Z_{\ge0}$, each with at least two elements, such that the sumset $A+B=\{a+b\}$ differs from the set of primes in only finitely many elements.

# State of the art

Earlier work, notably by Elsholtz, showed that any such $A$ and $B$ would have to be very thin and evenly sized. Leonetti (arXiv:2610.15758, October 2026) proves that both counting functions would lie between $\sqrt x/\log x$ and $\sqrt x$ up to constants, and gives lower bounds for how far three-fold sumsets are from the primes. The conjecture itself is open in the accepted literature.

**Unverified claim:** openai/math family 013 (October 2026) claims a proof, with OpenAI's own unreviewed Lean formalization. It is on the Verification board.

# Applications

None foreseeable; it is a structural question about the additive irregularity of the primes.

# Resolution criteria

A proof accepted by analytic number theorists (refereed publication or broad acceptance), or a Lean proof against a reviewed statement.

# Rating rationale

Strong partial results constrain any decomposition tightly; a proof needs a new sieve input but affects only additive number theory.

# Verification

A Lean 4 proof that for all A, B ⊆ ℕ with at least two elements each, A + B has infinite symmetric difference with the primes, checked with Comparator against a Mathlib-only statement.
