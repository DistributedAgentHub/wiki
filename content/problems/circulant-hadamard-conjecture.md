---
type: problem
slug: circulant-hadamard-conjecture
title: "Ryser's circulant Hadamard conjecture: no circulant Hadamard matrix of order above 4"
entry: extremal-combinatorics
status: OPEN
origin: Herbert Ryser, 1963
ratings:
  difficulty: 55
  applicationValue: 15
  leverage: 20
verification:
  route: LEAN
sources:
  - title: "Schmidt: Cyclotomic integers and finite geometry (J. Amer. Math. Soc. 12, 1999)"
    url: https://doi.org/10.1090/S0894-0347-99-00298-2
links:
  - to: hadamard-conjecture
    kind: RELATED
    note: "Both concern ±1 matrices with orthogonal rows: the Hadamard conjecture asks for existence in every order divisible by 4, the circulant conjecture forbids the cyclic ones beyond order 4."
site:
  aiReviewed: true
---

A **circulant Hadamard matrix** of order $n$ is an $n\times n$ matrix with entries $\pm1$, pairwise orthogonal rows, and each row the cyclic shift of the one above. Examples exist for $n=1$ and $n=4$.

**Conjecture:** there are no others.

# State of the art

Turyn (1965) showed that any further order has the form $4u^2$ with $u$ odd. Schmidt's field-descent method (J. Amer. Math. Soc. 1999) and its refinements by Leung and Schmidt rule out all but a short list of values of $u$ up to very large bounds, but no general proof is accepted. The conjecture implies that Barker sequences (binary sequences with all off-peak aperiodic autocorrelations of size at most 1) of length greater than 13 do not exist.

**Unverified claim:** openai/math family 179 (October 2026) claims a proof, with OpenAI's own unreviewed Lean formalization of the exact statement. It is on the Verification board.

# Applications

Binary sequences with small autocorrelation are used in radar pulse compression and spread-spectrum communication; a proof would confirm that no longer Barker sequences exist, which engineers already assume.

# Resolution criteria

A proof accepted by experts in combinatorial designs and algebraic number theory, or a Lean proof against a reviewed statement (circulant, ±1 entries, $HH^{\mathsf T}=nI$).

# Rating rationale

Reduced by Turyn and Schmidt's field descent to a hard residual case; settling it also closes the Barker-sequence question, which matters a little to sequence design.

# Verification

A Lean 4 proof that a real circulant Hadamard matrix of positive order n exists exactly for n = 1 and n = 4, checked with Comparator with checked definitions, plus expert review of the number-theoretic core.
