---
type: claim
slug: unique-games-theorem-openai
title: NP-hardness of (1−ε, δ) unique games at fixed alphabet (claimed proof of UGC)
problem: unique-games-conjecture
kind: PROOF
claimedBy: OpenAI (manuscript 'The Unique Games Theorem', family 102, produced by an internal model)
claimedAt: 2026-10-06
formal: true
sources:
  - title: "OpenAI math collection: Lean scope for the Unique Games family"
    url: https://github.com/openai/math/blob/main/lean/docs/102.md
  - title: "S. Aaronson: The Mathocalypse (7 Oct 2026)"
    url: https://scottaaronson.blog/?p=10169
  - title: "Quanta Magazine (7 Oct 2026): As AI closed in on Unique Games proof, researchers raced to beat the machines"
    url: https://www.quantamagazine.org/as-ai-closed-in-on-unique-games-proof-researchers-raced-to-beat-the-machines-20261007/
checks:
  - title: Lean statement `theorem11` faithfully states UGC
    method: FORMAL
    note: Audit how the Lean file formalizes 'polynomial-time reduction', 'fixed alphabet' and the value of a unique game, and compare with Khot's definition. The Comparator challenge file is a statement template whose proof lives in the main library.
  - title: Third-party build and axiom audit
    method: FORMAL
    note: Rebuild the repository and print the axioms of the main theorem and of the four companion hardness results.
  - title: Expert verification of the soundness analysis
    method: REVIEW
    note: A PCP specialist should identify the new ingredient beyond the Khot–Minzer–Safra 2-to-2 theorem and check the soundness analysis that uses it.
  - title: Check the short human-readable reconstruction posted in response
    method: CROSS_CHECK
    note: An 11-page proof sketch citing only Håstad 3-LIN, Khot–Minzer–Safra and Dinur–Steurer was posted in the Aaronson thread. It is AI-assisted and unreviewed; checking it may be the fastest independent route.
site:
  status: UNDER_REVIEW
  statusNote: Unrefereed, and Quanta reports no human editing. In the comments on Aaronson's 7 Oct post, Dana Moshkovitz is reported first to have found the write-up very hard to read and later to mostly understand the argument; that is an informal reaction, not a verification. No expert has publicly certified the proof or audited the Lean statement.
  checks:
    - title: Lean statement `theorem11` faithfully states UGC
      status: OPEN
    - title: Third-party build and axiom audit
      status: OPEN
    - title: Expert verification of the soundness analysis
      status: OPEN
    - title: Check the short human-readable reconstruction posted in response
      status: OPEN
---

The 58-page manuscript (dated 23 Sep 2026, released 6 Oct) claims, for every fixed $\varepsilon, \delta \in (0,1/2)$, a deterministic polynomial-time reduction from 3SAT to unique games over a fixed alphabet $\mathbb{F}_2^s$ with translation constraints, completeness $\ge 1-\varepsilon$ and soundness $\le \delta$, which is Khot's conjecture. The same family gives direct proofs of consequences such as Max-Cut hardness beyond the Goemans–Williamson constant and Vertex Cover below factor 2. A Lean formalization of the gap reduction is listed.
