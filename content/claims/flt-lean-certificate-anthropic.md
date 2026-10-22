---
type: claim
slug: flt-lean-certificate-anthropic
title: Complete Lean proof of Fermat's Last Theorem produced by an agentic formalization
problem: flt-modern-proof-mathlib-formalization
kind: FORMALIZATION
claimedBy: Anthropic (repository anthropics/fermats-last-theorem)
claimedAt: 2026-09-04
formal: true
sources:
  - title: "Buzzard (Xena): FLT, Anthropic has beaten me to it"
    url: https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
  - title: Repository anthropics/fermats-last-theorem
    url: https://github.com/anthropics/fermats-last-theorem
  - title: Imperial College FLT project blueprint
    url: https://imperialcollegelondon.github.io/FLT/blueprint/
checks:
  - title: Comparator check of the final FLT statement
    method: FORMAL
    note: Buzzard compiled the repository and Comparator accepted the statement against Mathlib's `FermatLastTheorem`.
    sourceUrl: https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
  - title: Manual review of non-theorem code
    method: REVIEW
    note: Buzzard checked the code the agents flagged as not being theorems (a convenience tactic) and found nothing that changes the statement.
    sourceUrl: https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
  - title: Map which deep inputs are proved and which are imported
    method: REVIEW
    note: Buzzard's post says the repository proves the whole argument, including Fontaine theory and Mazur's Eisenstein-ideal results, but does not say how Langlands–Tunnell and Ribet's level lowering are handled. A dependency map would settle this.
  - title: Second independent rebuild and axiom printout
    method: REPRODUCE
    note: Publish a clean-room build log with `#print axioms FermatLastTheorem` output from a party other than the author and Buzzard.
site:
  status: VERIFIED
  statusNote: Kevin Buzzard compiled the repository, ran Comparator against the FLT statement ('it checks out') and inspected non-theorem code flagged by the agents (4 Sep 2026).
  checks:
    - title: Comparator check of the final FLT statement
      status: PASSED
    - title: Manual review of non-theorem code
      status: PASSED
    - title: Map which deep inputs are proved and which are imported
      status: OPEN
    - title: Second independent rebuild and axiom printout
      status: OPEN
---

About 13 million lines of Lean following the Darmon–Diamond–Taylor exposition of Wiles–Taylor–Wiles prove Mathlib's statement of FLT, with small exponents handled via existing regular-prime work. It compiles about twenty times slower than Mathlib and is not integrated with it. It certifies a known theorem; it does not provide the reusable, Mathlib-integrated Galois-representation infrastructure that the Imperial project targets.
