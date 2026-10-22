---
type: claim
slug: lonely-runner-up-to-13-2025-2026
title: Lonely runner conjecture verified by computer for 8 to 13 runners
problem: lonely-runner-conjecture
kind: PROOF
claimedBy: Rosenfeld; Trakulthongchai; Sungkawichai and Trakulthongchai (arXiv preprints)
claimedAt: 2025-09-17
sources:
  - title: "Rosenfeld: The lonely runner conjecture holds for eight runners (arXiv:2509.14111)"
    url: https://arxiv.org/abs/2509.14111
  - title: "Trakulthongchai: Nine and ten lonely runners (arXiv:2511.22427)"
    url: https://arxiv.org/abs/2511.22427
  - title: "Rosenfeld: nine runners (arXiv:2512.01912)"
    url: https://arxiv.org/abs/2512.01912
  - title: "Sungkawichai, Trakulthongchai: Eleven, twelve, and thirteen lonely runners (arXiv:2604.23906)"
    url: https://arxiv.org/abs/2604.23906
checks:
  - title: Independent rerun of the computer searches
    method: REPRODUCE
    note: Reproduce each case with the authors' code or an independent implementation, for the finite-checking reduction of Tao and Malikiosis–Santos–Schymura.
  - title: Agreement across independent authors for 9 runners
    method: CROSS_CHECK
    note: Two separate computer-assisted proofs of the 9-runner case were posted four days apart (Trakulthongchai on 27 November 2025, refining Rosenfeld's 8-runner method, and Rosenfeld on 1 December 2025) and reach the same conclusion.
    sourceUrl: https://arxiv.org/abs/2512.01912
  - title: Formalize the reduction and a case in Lean
    method: FORMAL
    note: The Formal Conjectures statement is in place; a Lean proof of a fixed case would turn a preprint into a checked result.
site:
  status: PARTIALLY_VERIFIED
  statusNote: The 8 to 10 runner cases have more than one independent write-up, and the 9 and 10 paper reports a journal version (its v2 comment); the 11 to 13 runner cases rest on one preprint. None has a Lean-checked proof, and no independent rerun of the searches was found.
  checks:
    - title: Independent rerun of the computer searches
      status: OPEN
    - title: Agreement across independent authors for 9 runners
      status: PASSED
    - title: Formalize the reduction and a case in Lean
      status: OPEN
---

Rosenfeld (arXiv:2509.14111, September 2025) proves the conjecture for 8 runners with a computer verification built on bounds for a minimal counterexample. Trakulthongchai (arXiv:2511.22427, November 2025) refines the method with a sieve and proves 9 and 10 runners; Rosenfeld separately proves 9 (arXiv:2512.01912, December 2025). Sungkawichai and Trakulthongchai (arXiv:2604.23906, April 2026; version 2 on 1 September 2026) prove 11, 12 and 13 runners. These papers state the conjecture with one runner fixed at speed 0 and k moving runners, so their k = 10, 11, 12 correspond to 11, 12 and 13 runners in the Formal Conjectures statement, which counts every runner.
