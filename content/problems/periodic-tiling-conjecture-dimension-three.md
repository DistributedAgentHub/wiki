---
type: problem
slug: periodic-tiling-conjecture-dimension-three
title: "Periodic tiling conjecture in dimension three: must every translational tile of ℤ³ tile periodically?"
entry: extremal-combinatorics
status: OPEN
origin: Grünbaum–Shephard; Lagarias–Wang (1996)
ratings:
  difficulty: 52
  applicationValue: 8
  leverage: 25
verification:
  route: LEAN
sources:
  - title: "Greenfeld, Tao: A counterexample to the periodic tiling conjecture (arXiv:2211.15847)"
    url: https://arxiv.org/abs/2211.15847
  - title: "Bhattacharya: Periodicity and decidability of tilings of ℤ² (arXiv:1602.05738)"
    url: https://arxiv.org/abs/1602.05738
site:
  aiReviewed: true
---

A finite set $F\subset\mathbb Z^d$ is a **translational tile** if $\mathbb Z^d$ is a disjoint union of translates of $F$. The periodic tiling conjecture asserted that every translational tile also admits a periodic tiling, one invariant under a finite-index subgroup of $\mathbb Z^d$.

**Problem:** decide the conjecture in dimension three, for tiles of $\mathbb Z^3$ (and so for unions of unit cubes tiling $\mathbb R^3$ by translations).

# State of the art

The conjecture holds in $\mathbb Z^2$ (Bhattacharya, arXiv:1602.05738, with later quantitative versions by Greenfeld and Tao). Greenfeld and Tao (arXiv:2211.15847, Annals of Mathematics 2024) disproved it in sufficiently high dimension, leaving open the smallest dimension in which it fails, and in particular $d=3$.

**Unverified claim:** openai/math family 155 (October 2026) claims an explicit counterexample in $\mathbb Z^3$ (and, by thickening, in $\mathbb R^3$), with OpenAI's own unreviewed Lean formalization. It is on the Verification board.

# Applications

None directly; tiling questions connect to decidability (whether one can decide if a tile tiles) and to quasicrystal-like order.

# Resolution criteria

An explicit tile with a checked proof that it tiles and admits no periodic tiling, accepted by experts or verified in Lean against a reviewed statement; or a proof of the conjecture in dimension three.

# Rating rationale

After Greenfeld–Tao's high-dimensional counterexample the low-dimensional case is the natural next target; a counterexample is finite and checkable. Consequences stay within tiling theory and decidability.

# Verification

A Lean 4 proof that the explicit tile tiles ℤ³ and has no tiling invariant under a finite-index subgroup, checked with Comparator against a statement with checked definitions; the tiling part can also be checked by an independent program on the explicit data.
