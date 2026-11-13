---
type: claim
slug: ntime-subexponential-simulation-strassle-subercaseaux-2026
title: Nondeterministic time t in deterministic time 2^(O(t log log t/√log t)), if the claimed subexponential 3-SAT algorithms hold (preprint)
problem: exponential-time-hypothesis
kind: BOUND
claimedBy: Carmen Strassle and Bernardo Subercaseaux (arXiv preprint)
claimedAt: 2026-11-09
sources:
  - title: "Strassle and Subercaseaux: Simulating Nondeterministic Turing Machines in Subexponential Deterministic Time (arXiv:2611.11832)"
    url: https://arxiv.org/abs/2611.11832
  - title: "OpenAI: Building scientific understanding with academic communities (26 October 2026)"
    url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: "OpenAI: The Exponential Time Hypothesis is False (manuscript, openai/math at 7ef5c0cc5c)"
    url: https://github.com/openai/math/blob/7ef5c0cc5c/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf
  - title: "Anthropic: A 2^o(n) Time Algorithm for 3-SAT (anthropics/formal-math, eth directory at 16a5ce41)"
    url: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
checks:
  - title: Generalized Cook–Levin reduction
    method: REVIEW
    note: "Review the new generalizations of the Cook–Levin theorem: that a multitape nondeterministic Turing machine running in time $t$ reduces to a 3-SAT or circuit-CSP instance of the size the preprint states, and that this size, combined with the labs' running times, gives $2^{O(t\\log\\log t/\\sqrt{\\log t})}$ and the stronger $2^{O(t/\\sqrt{\\log t})}$."
    sourceUrl: https://arxiv.org/abs/2611.11832
  - title: Exponent follows from the labs' stated running times
    method: CROSS_CHECK
    note: Take the running times actually stated in the OpenAI manuscript and the Anthropic paper (including which instance parameter plays the role of $n$, and the $(\log\log n)^2$ variant in OpenAI's Lean scope note) and confirm they yield the exponents in the preprint, and find which proof gives the stronger $2^{O(t/\sqrt{\log t})}$ consequence.
    sourceUrl: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
  - title: Dependency on the OpenAI and Anthropic claims
    method: CROSS_CHECK
    note: The result stands or falls with the claims eth-false-openai-2026 and eth-false-anthropic-2026. If either claimed algorithm is refuted or its bound weakened, re-derive what remains. A verdict on those claims does not follow from this preprint.
    sourceUrl: https://arxiv.org/abs/2611.11832
site:
  status: UNDER_REVIEW
  statusNote: "The result is conditional: it holds only if the 3-SAT algorithms claimed by OpenAI (claim eth-false-openai-2026) and Anthropic (claim eth-false-anthropic-2026) are correct, and both of those are unrefereed and under review on this board. The Strassle and Subercaseaux preprint is itself unrefereed, and DARC has not checked its reductions. It is not independent evidence for the labs' claims. The PDF (v1, 14 pages) states Theorem 1 from Fact 1.1, a $2^{O(n/\\sqrt{\\log n})}$-time 3-SAT algorithm attributed to the OpenAI and Anthropic papers, treating the refutation of ETH as established; this board does not, and also notes the paper's remark that Theorem 1 would settle a conjecture of Lipton. Its AI Disclosure section says OpenAI's Astra and Anthropic's Opus 5.5 and Fable 5.1 were used throughout the authors' process, without saying which parts, so the origin is listed as mixed."
  checks:
    - title: Generalized Cook–Levin reduction
      status: OPEN
    - title: Exponent follows from the labs' stated running times
      status: OPEN
    - title: Dependency on the OpenAI and Anthropic claims
      status: OPEN
---

arXiv:2611.11832 (v1, 2026-11-09, cs.CC) states that the 3-SAT algorithms presented by OpenAI and Anthropic imply $\mathrm{NTIME}[t]\subseteq\mathrm{DTIME}[2^{O(t\log\log t/\sqrt{\log t})}]$ for multitape nondeterministic Turing machines, and that a stronger consequence of their proofs gives $2^{O(t/\sqrt{\log t})}$. The abstract adds that any subexponential algorithm for circuit CSPs would give a deterministic simulation of nondeterministic time with the same savings, via new generalizations of the Cook–Levin theorem. The bound is an implication from the labs' claimed algorithms, not an unconditional result.
