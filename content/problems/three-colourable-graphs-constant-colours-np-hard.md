---
type: problem
slug: three-colourable-graphs-constant-colours-np-hard
title: "Approximate colouring: is colouring a 3-colourable graph with any constant number of colours NP-hard?"
entry: pcp-hardness-of-approximation
status: OPEN
origin: Approximate graph colouring (Garey–Johnson, 1976); long-standing conjecture
ratings:
  difficulty: 68
  applicationValue: 22
  leverage: 40
verification:
  route: LEAN
sources:
  - title: "Barto, Bulín, Krokhin, Opršal: Algebraic approach to promise constraint satisfaction (J. ACM 68, 2021)"
    url: https://doi.org/10.1145/3457606
  - title: "Dinur, Mossel, Regev: Conditional hardness for approximate coloring (arXiv:cs/0504062)"
    url: https://arxiv.org/abs/cs/0504062
links:
  - to: two-to-one-games-perfect-completeness
    kind: RELATED
    note: Dinur–Mossel–Regev derive NP-hardness of colouring 3-colourable graphs with any constant number of colours from 2-to-1-type conjectures with perfect completeness.
site:
  aiReviewed: true
---

Given a graph promised to be 3-colourable, the task is to find a proper colouring with $c$ colours.

**Problem:** prove that for every constant $c\ge 3$ this is NP-hard.

# State of the art

NP-hardness is known for $c=4$ (Khanna–Linial–Safra; Guruswami–Khanna) and for $c=5$ (Barto, Bulín, Krokhin and Opršal, J. ACM 2021, through the algebraic theory of promise constraint satisfaction). For every constant $c$ it is known only under 2-to-1-type conjectures (Dinur, Mossel and Regev). The best polynomial-time algorithms use roughly $n^{0.2}$ colours.

**Unverified claim:** openai/math family 106 (October 2026) claims NP-hardness for every constant $c$, in the stronger form that satisfiable instances map to 3-colourable graphs and unsatisfiable ones to graphs with no independent set of size $\delta n$. It comes with OpenAI's own unreviewed Lean formalization and is on the Verification board.

# Applications

It would tell algorithm designers that no polynomial-time method colours 3-colourable graphs with a bounded number of colours (unless P = NP). Graph-colouring heuristics used in register allocation and scheduling would not change.

# Resolution criteria

A proof accepted by experts in hardness of approximation (refereed publication or broad acceptance), or a Lean proof of the reduction against a reviewed statement.

# Rating rationale

Unconditional progress has moved from 4 to 5 colours in thirty years, comparable to other promise-CSP frontiers. It would settle a textbook approximation question; practical colouring heuristics are unaffected.

# Verification

A Lean 4 proof of a polynomial-time reduction from 3SAT whose YES instances are 3-colourable graphs and whose NO instances have no c-colouring, checked with Comparator with every definition checked, plus expert confirmation that the statement is the standard one.
