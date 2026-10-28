---
type: claim
slug: eth-false-anthropic-2026
title: A 2^o(n) time algorithm for 3-SAT, so ETH is false (Anthropic, AI-generated proof with Lean 4 formalization)
problem: exponential-time-hypothesis
kind: DISPROOF
claimedBy: Anthropic (paper by Claude; Lean formalization written by AI models)
claimedAt: 2026-10-27
formal: true
sources:
  - title: "Anthropic: A 2^o(n) Time Algorithm for 3-SAT (anthropics/formal-math, eth directory at 16a5ce41)"
    url: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
  - title: "Anthropic formal-math CI run: verify (eth)"
    url: https://github.com/anthropics/formal-math/actions/runs/40442388505
checks:
  - title: Repository CI builds the Lean proof
    method: FORMAL
    note: The verify (eth) job succeeded, using Comparator and the nanoda second kernel according to the README. This is the repository's own CI, not a DARC rebuild.
    sourceUrl: https://github.com/anthropics/formal-math/actions/runs/40442388505
  - title: Independent rebuild and axiom audit
    method: FORMAL
    note: Rebuild at the pinned commit on a clean machine, print the axioms of MainTheorem and ETHIsFalse and check for sorry.
    sourceUrl: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
  - title: Lean statement ETHIsFalse matches ETH
    method: FORMAL
    note: "The README says no machine checks this. Audit the Turing.FinTM2 model, how input size and #3-SAT are encoded and how 2^o(n) is defined, against the Impagliazzo-Paturi definition."
    sourceUrl: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
  - title: Expert verification of the algorithm
    method: REVIEW
    note: Review by specialists in exact algorithms and ETH (for example the Impagliazzo, Paturi and Williams group that OpenAI named for its own claim).
    sourceUrl: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
  - title: Compare with the independent OpenAI claim
    method: CROSS_CHECK
    note: "OpenAI claims a similar bound, $2^{O(n\\log\\log n/\\sqrt{\\log n})}$ for exact #k-SAT in polynomial space, a day earlier. Compare the constructions; both are deterministic, and Anthropic states its headline bound for #3-SAT while its Lean MainTheorem covers k-CNF formulas for every k."
    sourceUrl: https://openai.com/index/building-scientific-understanding-with-academic-communities/
site:
  status: UNDER_REVIEW
  statusNote: The repository CI job "verify (eth)" succeeded (Comparator plus the nanoda second kernel, per the README), but DARC has not rebuilt the proof. The README itself notes that no machine checks that MainResults.lean says what the paper says. No expert verdict is published. Unrefereed; the problem stays OPEN.
  checks:
    - title: Repository CI builds the Lean proof
      status: PASSED
    - title: Independent rebuild and axiom audit
      status: OPEN
    - title: Lean statement ETHIsFalse matches ETH
      status: OPEN
    - title: Expert verification of the algorithm
      status: OPEN
    - title: Compare with the independent OpenAI claim
      status: OPEN
---

The repository anthropics/formal-math contains "A 2^o(n) Time Algorithm for 3-SAT" by Claude (Anthropic), posted on 27 October 2026. It claims a deterministic algorithm for counting satisfying assignments of 3-CNF formulas (#3-SAT) in time $2^{O(n\log\log n/\sqrt{\log n})}$ on $n$ variables, which refutes ETH. The README calls the result purely asymptotic and says it says nothing about solving formulas in practice. It says the result was found by an internal research Claude model and the Lean 4 formalization was written by AI models; MainResults.lean states `ETHIsFalse` and `MainTheorem` on Mathlib `Turing.FinTM2` machines.
