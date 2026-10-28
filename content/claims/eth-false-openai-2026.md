---
type: claim
slug: eth-false-openai-2026
title: "The Exponential Time Hypothesis is false: 2^o(n)-time exact #k-SAT (OpenAI, AI-generated proof with Lean formalization)"
problem: exponential-time-hypothesis
kind: DISPROOF
claimedBy: OpenAI (announcement and manuscript; verification to be led by Impagliazzo, Paturi and Williams)
claimedAt: 2026-10-26
formal: true
sources:
  - title: "OpenAI: Building scientific understanding with academic communities (26 October 2026)"
    url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: "OpenAI: The Exponential Time Hypothesis is False (manuscript, openai/math at 7ef5c0cc5c)"
    url: https://github.com/openai/math/blob/7ef5c0cc5c/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf
  - title: "OpenAI: Lean formalization scope note (openai/math at 7ef5c0cc5c)"
    url: https://github.com/openai/math/blob/7ef5c0cc5c/lean/docs/378.md
checks:
  - title: Expert verification of the algorithm and its running-time analysis
    method: REVIEW
    note: "Review by the group OpenAI named (Impagliazzo, Paturi, Williams) or other specialists in exact algorithms: correctness of the counting algorithm for every fixed $k$ and the $2^{o(n)}$ bound."
    sourceUrl: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: Rebuild the Lean proof from the pinned commit
    method: FORMAL
    note: OpenAI's unreviewed formalization; the repository has no Lean CI workflow, so no build is recorded. Rebuild at 7ef5c0cc5c, check for sorry and print the axioms of the main theorem.
    sourceUrl: https://github.com/openai/math/blob/7ef5c0cc5c/lean/docs/378.md
  - title: Lean statement matches ETH
    method: FORMAL
    note: Audit how the Lean file defines the machine model, the input size, exact counting and subexponential time, and confirm that the weaker Lean bound still implies the negation of ETH as defined by Impagliazzo and Paturi.
    sourceUrl: https://github.com/openai/math/blob/7ef5c0cc5c/lean/docs/378.md
  - title: Compare with the independent Anthropic claim
    method: CROSS_CHECK
    note: "Anthropic released a separate deterministic #3-SAT algorithm with the same type of bound, $2^{O(n\\log\\log n/\\sqrt{\\log n})}$, on 27 October 2026. Compare the constructions and bounds for shared ideas and gaps."
    sourceUrl: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
site:
  status: UNDER_REVIEW
  statusNote: OpenAI says the result is to be verified and shepherded by a group led by Russell Impagliazzo and Ramamohan Paturi (UC San Diego) and Ryan Williams (MIT), and that it will fund a conference. No expert verdict has been published. The openai/math repository has no Lean CI workflow, so DARC has not seen a build; formal here means that a formalization exists, not that DARC rebuilt it. The bound in the Lean scope file is weaker than the manuscript's bound. Unrefereed; the problem stays OPEN.
  checks:
    - title: Expert verification of the algorithm and its running-time analysis
      status: OPEN
    - title: Rebuild the Lean proof from the pinned commit
      status: OPEN
    - title: Lean statement matches ETH
      status: OPEN
    - title: Compare with the independent Anthropic claim
      status: OPEN
---

OpenAI announced on 26 October 2026 that its system proved ETH false (disproof found 16 October, Lean formalization 17 October). The manuscript (dated 25 October 2026) claims, for every fixed width $k$, an algorithm for exact counting of satisfying assignments of $k$-CNF formulas in time $(n+m)^{O_k(1)}\,2^{O_k(n\log\log n/\sqrt{\log n})}$ and polynomial space, where $n$ is the number of variables and $m$ the number of clauses; for $m\le Dn$ the time is $2^{O(n/\sqrt{\log n})}$. This is $2^{o(n)}$, so 3-SAT would not need $2^{\Omega(n)}$ time. The Lean scope file states the weaker $(L+1)^{O_k(1)}\,2^{O_k(n(\log\log n)^2/\sqrt{\log n})}$, which is still subexponential.
