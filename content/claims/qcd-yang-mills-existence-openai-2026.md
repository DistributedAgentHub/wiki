---
type: claim
slug: qcd-yang-mills-existence-openai-2026
title: Existence of quantum Yang-Mills theory in four dimensions, including coupling to fermions (OpenAI, AI-generated proof, unreleased)
problem: yang-mills-mass-gap
kind: PROOF
claimedBy: OpenAI (announcement of 26 October 2026); shepherding committee Douglas, Gross (chair), Jaffe, Klebanov, Nekrasov
claimedAt: 2026-10-26
sources:
  - title: "OpenAI: Building scientific understanding with academic communities (26 October 2026)"
    url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: "Douglas, Gross, Jaffe, Klebanov, Nekrasov: Proof by OpenAI of the Existence of Quantum Yang-Mills theory, statement by the shepherding committee (October 2026)"
    url: https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf
checks:
  - title: Audit that the Lean definitions and statement match the standard ones
    method: FORMAL
    note: "The committee names this as its first objective: confirm that the Lean definitions of Yang-Mills theory (and of the continuum limit and fermion coupling) and the formal statement correspond to those standard in physics and mathematics, and that the formalization aligns with the informal proof."
    sourceUrl: https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf
  - title: Release and rebuild of the Lean proof
    method: FORMAL
    note: OpenAI says its Lean formalization of Yang-Mills existence was finished on 16 October 2026, but the proof is not public. Once released, rebuild it, check for sorry and print the axioms of the main theorem.
    sourceUrl: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: Release of the 1147-page manuscripts and expert reading
    method: REVIEW
    note: The committee plans to publish its assessment together with the full LLM proofs once satisfied with their correctness. Until then no outside specialist can check the construction of the continuum limit and its use of Balaban's renormalization-group estimates.
    sourceUrl: https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf
  - title: "Scope: existence only, not the mass gap"
    method: REVIEW
    note: The committee states that confinement and the mass gap remain open. Check, when released, which gauge groups and which axiom set (Wightman or Osterwalder-Schrader) the result covers against the Clay problem statement, and whether any mass gap is claimed.
    sourceUrl: https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf
site:
  status: UNDER_REVIEW
  statusNote: "Nothing has been released: neither the manuscripts nor the Lean proof are public. OpenAI asked David Gross on 16 October to take custody of the proof; the committee's statement (October 2026) says it has no responsibility to OpenAI, will first check that the Lean definitions and statement match the standard ones, then release the Lean proof, and later publish its assessment with the full proofs. No expert verdict exists. DARC has seen only OpenAI's post and the committee's statement. Unrefereed and unverified; the problem stays OPEN."
  checks:
    - title: Audit that the Lean definitions and statement match the standard ones
      status: OPEN
    - title: Release and rebuild of the Lean proof
      status: OPEN
    - title: Release of the 1147-page manuscripts and expert reading
      status: OPEN
    - title: "Scope: existence only, not the mass gap"
      status: OPEN
---

OpenAI announced on 26 October 2026 that its models proved the existence of quantum Yang-Mills theory in four dimensions with a proper continuum limit, and of QCD (Yang-Mills coupled to fermions), building on Balaban's constructive renormalization-group work. OpenAI dates its natural-language Yang-Mills proof to 9 September, the QCD proof to 18 September and its Lean formalization of the Yang-Mills existence to 16 October 2026; the committee's statement refers to full LLM proofs of 1147 pages. This is an existence result: the committee says confinement and the mass gap remain open, so it does not resolve the Clay Millennium problem as stated, which also requires a mass gap $\Delta>0$.
