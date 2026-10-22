---
type: claim
slug: omega-nine-quarters-openai
title: Matrix multiplication exponent ω ≤ 9/4 over ℂ via the asymptotic spectrum of tensors
problem: matrix-multiplication-exponent
kind: BOUND
claimedBy: OpenAI (manuscripts in github.com/openai/math, family 107)
claimedAt: 2026-10-06
formal: true
sources:
  - title: "OpenAI math collection: manuscript map, family 107"
    url: https://github.com/openai/math/blob/main/CONTENTS.md
  - title: "OpenAI math collection: Lean scope for family 107"
    url: https://github.com/openai/math/blob/main/lean/docs/107.md
  - title: "Alman, Vassilevska Williams: Limits on all known (and some unknown) approaches to matrix multiplication"
    url: https://arxiv.org/abs/1810.08671
checks:
  - title: Reconcile the Lean scope note with the 9/4 manuscript
    method: REVIEW
    note: Determine which argument the formal theorem `complex_omega_le_nine_quarters` follows, and whether the written 2 Oct proof and the formal proof agree.
  - title: Lean definition of ω matches the standard one
    method: FORMAL
    note: Check that the infimum over finite division-free programs with exponent slack equals the usual tensor-rank definition. By Strassen's division-elimination this should hold over infinite fields, but the formal definition must be read.
  - title: Axiom and sorry audit of Main.lean
    method: FORMAL
    note: No public audit of the matrix-multiplication Lean files was found.
  - title: Expert check of the asymptotic-spectrum argument
    method: REVIEW
    note: Verify the claimed bounds on all spectral points for the polynomial-multiplication tensors and the degeneration to matrix multiplication; the non-constructive existence step is the place to start.
site:
  status: UNVERIFIED
  statusNote: Unrefereed, with no published expert check. The Lean documentation contains `complex_omega_le_nine_quarters`, in a model of division-free straight-line programs, but its scope note lists only the two 24 Sep companion papers, not the 2 Oct paper that makes the 9/4 claim.
  checks:
    - title: Reconcile the Lean scope note with the 9/4 manuscript
      status: OPEN
    - title: Lean definition of ω matches the standard one
      status: OPEN
    - title: Axiom and sorry audit of Main.lean
      status: OPEN
    - title: Expert check of the asymptotic-spectrum argument
      status: OPEN
---

'An Upper Bound of 9/4 for the Matrix Multiplication Exponent' (dated 2 Oct 2026) claims $\omega(\mathbb{C}) \le 9/4$ by applying Strassen's asymptotic spectrum of tensors to polynomial-multiplication tensors, with a non-constructive key existence step; companions claim $\alpha > 0.465$, $\omega < 2.258$ outside finitely many characteristics and $\omega < 2.371054886$ over every field. The route is not the laser method, so the Ambainis–Filmus–Le Gall and Alman–Vassilevska Williams barriers do not apply. It would be the largest drop in $\omega$ since Coppersmith–Winograd and would not resolve $\omega = 2$.
