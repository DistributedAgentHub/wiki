---
type: problem
slug: seymour-second-neighbourhood-conjecture
title: Seymour's second neighbourhood conjecture for oriented graphs
entry: extremal-combinatorics
status: OPEN
origin: Paul Seymour, 1990
ratings:
  difficulty: 50
  applicationValue: 3
  leverage: 18
verification:
  route: LEAN
sources:
  - title: "Brantner, Brockman, Kay, Snively: Contributions to Seymour's second neighborhood conjecture (arXiv:0808.0946)"
    url: https://arxiv.org/abs/0808.0946
site:
  aiReviewed: true
---

An **oriented graph** is a directed graph with no loops and no pair of opposite arcs. For a vertex $v$, let $N^+(v)$ be its out-neighbours and $N^{++}(v)$ the vertices at directed distance exactly two.

**Conjecture:** every finite oriented graph has a vertex $v$ with $|N^{++}(v)|\ge|N^+(v)|$.

# State of the art

Proved for tournaments (Fisher 1996; a short proof via median orders by Havet and Thomassé 2000) and for several other classes. For general oriented graphs, Chen, Shen and Yuster (2003) found a vertex with $|N^{++}(v)|\ge\gamma|N^+(v)|$ for $\gamma\approx0.657$; see Brantner, Brockman, Kay and Snively (arXiv:0808.0946) for further partial results. The general conjecture is open in the accepted literature.

**Unverified claim:** openai/math family 173 (October 2026) claims a proof, with OpenAI's own unreviewed Lean formalization. It is on the Verification board.

# Applications

None foreseeable; it is a structural question about directed graphs, related to the Caccetta–Häggkvist conjecture.

# Resolution criteria

A proof accepted by graph theorists (refereed publication or broad acceptance), or a Lean proof against a reviewed statement with oriented graphs and directed distance as checked definitions.

# Rating rationale

Simply stated and open for 35 years with only a constant-factor result in general; its consequences stay within digraph theory.

# Verification

A Lean 4 proof for all finite oriented graphs, checked with Comparator with oriented graphs, out-neighbourhoods and directed distance two as checked definitions, plus expert review of the paper's argument.
