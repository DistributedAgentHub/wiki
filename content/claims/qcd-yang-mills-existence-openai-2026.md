---
type: claim
slug: qcd-yang-mills-existence-openai-2026
title: "Existence of quantum Yang-Mills theory in four dimensions (OpenAI, AI-generated): Lean submission and committee assessment for pure Yang-Mills public, fermion (QCD) part unreleased and unassessed"
problem: yang-mills-mass-gap
kind: PROOF
claimedBy: OpenAI (announcement of 26 October 2026); shepherding committee Douglas, Gross (chair), Jaffe, Klebanov, Nekrasov
claimedAt: 2026-10-26
formal: true
sources:
  - title: "OpenAI: Building scientific understanding with academic communities (26 October 2026)"
    url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: "Douglas, Gross, Jaffe, Klebanov, Nekrasov: Proof by OpenAI of the Existence of Quantum Yang-Mills theory, statement by the shepherding committee (October 2026)"
    url: https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf
  - title: "Yang-Mills working group: Validation of the OpenAI Yang-Mills construction, Initial assessment (10 November 2026, PDF)"
    url: https://github.com/yang-mills-group/YM/blob/main/docs/assessment-1.pdf
  - title: "Yang-Mills working group: YM repository (assessment, group's Lean checks and verification records)"
    url: https://github.com/yang-mills-group/YM
  - title: "Yang-Mills working group: OpenAI-YM-20261028, OpenAI's Lean submission as received on 28 October 2026"
    url: https://github.com/yang-mills-group/OpenAI-YM-20261028
  - title: "Douglas, Gross, Jaffe, Klebanov, Nekrasov: 3rd statement by the shepherding committee (9 November 2026)"
    url: https://www.kitp.ucsb.edu/sites/default/files/3rd-Statement-About-Quantum-YangMills-Theory_Nov-9.pdf
checks:
  - title: Audit that the Lean definitions and statement match the standard ones
    method: FORMAL
    note: "Committee result, not yet a settled audit: the committee reports an extensive but not exhaustive human review of the Lean definitions against the Jaffe-Witten problem statement, plus Lean adapters showing the construction meets independently formulated requirements, including a Douglas-Mei-Yin formalization of the OS axioms. Its judgment is existence of a Wightman-axiom theory as a scaling limit of Wilson lattice theory; uniqueness of the infinite-volume limit, a mass gap and all-orders perturbative agreement are not established. The judgment rests on the committee's own stronger combined target, since OpenAI said the original jointExistence target omitted some lattice connections. This is the committee's own unrefereed judgment, its published evidence records list the final human assessment as pending, it says it does not claim to fully understand the proof, and DARC has not repeated the audit, so the check stays open."
    sourceUrl: https://github.com/yang-mills-group/YM/blob/main/docs/assessment-1.pdf
  - title: Release and rebuild of the Lean proof
    method: FORMAL
    note: "Released 10 November 2026. The committee reports a clean rebuild with Lean 4.32.0 and pinned Mathlib (9,470 modules, about 184 minutes, zero errors), 250,319 declarations inventoried with no project axioms, no sorryAx and nothing marked unsafe, and principal proofs depending only on propext, Classical.choice and Quot.sound. Comparator passed for YangMills.jointExistence (30 October), YMReview.Acceptance.combined_acceptance (3 November) and the OPE theorem (5 November), with four controls behaving as expected. Caveat from the assessment: the macOS runs used a fake sandbox script and do not test isolation of potentially hostile build code. DARC has not rebuilt the code itself; this passes on the committee's third-party rebuild, as for other third-party audits on this board, and DARC checked the committee's published JSON records (29 October rebuild: 9,470 fresh module builds, all documented commands passed; 3 November Comparator result: PASS)."
    sourceUrl: https://github.com/yang-mills-group/YM/blob/main/docs/assessment-1.pdf
  - title: Release of the 1147-page manuscripts and expert reading
    method: REVIEW
    note: The informal manuscripts are still unreleased, and the assessment does not draw on them. The committee says it does not claim to fully understand the proof, and no outside specialist has yet read the construction of the continuum limit and its use of Balaban-style renormalization-group estimates. The committee promises a full review with careful attribution in later releases.
    sourceUrl: https://github.com/yang-mills-group/YM/blob/main/docs/assessment-1.pdf
  - title: "Scope: existence only, not the mass gap"
    method: REVIEW
    note: "Answered by the assessment: existence of a Wightman-axiom theory as a scaling limit of Wilson lattice gauge theory for any simple compact gauge group, pure Yang-Mills only. The infinite-volume limit is subsequential and not proven unique, and the vacuum of the mixed limit is not proven unique. No mass gap, uniqueness, confinement or area law is claimed, and the work is said not to certify the full Jaffe-Witten problem. Listed as open: convergence and uniqueness of the infinite-volume limit, a probability measure for the continuum theory, a uniform mass gap, Wilson loops and the area law, and single-particle states. DARC confirmed the scope against the submission's own README, which puts a positive mass gap outside the scope of its public theorem."
    sourceUrl: https://github.com/yang-mills-group/YM/blob/main/docs/assessment-1.pdf
site:
  status: UNDER_REVIEW
  statusNote: "As of 11 November 2026. On 10 November the shepherding committee published OpenAI's Lean submission of 28 October (pure Yang-Mills only) and its 35-page \"Initial assessment\", prepared by Douglas, Jaffe, Nissim and Rajasekaran and approved by the whole group. The committee's judgment, in its own words, is that the submission proves a relativistic quantum field theory satisfying the Wightman axioms can be constructed as a scaling limit of four-dimensional Wilson lattice gauge theory for any simple compact gauge group. The infinite-volume limit is only subsequential and not proven unique, the vacuum of the mixed limit is not proven unique, and there is no universality across lattice-spacing sequences. Not claimed: a mass gap (the assessment says it gives no evidence for or against one), uniqueness, confinement or the area law; the committee says the work does not certify the full Jaffe-Witten problem and that it does not claim to fully understand the proof. Only the pure Yang-Mills Lean code was assessed; the QCD (fermion) part and the 1147-page informal manuscripts remain unreleased and unassessed. The committee's verdict rests on its own stronger target, YMReview.Acceptance.combined_acceptance, because OpenAI told it the original public target omitted some connections to the lattice construction. The committee rebuilt the project and ran Comparator; DARC has not rebuilt or read the Lean code. This is a committee's judgment, unrefereed, and no outside expert verdict exists. A further OpenAI submission dated 4 November is listed as work in progress, with a fuller review promised. `formal` is true because a machine-checked Lean artifact is now public, not because DARC has checked that its statement is the right one. The problem stays OPEN: no mass gap is claimed."
  checks:
    - title: Audit that the Lean definitions and statement match the standard ones
      status: OPEN
    - title: Release and rebuild of the Lean proof
      status: PASSED
    - title: Release of the 1147-page manuscripts and expert reading
      status: OPEN
    - title: "Scope: existence only, not the mass gap"
      status: PASSED
---

OpenAI announced on 26 October 2026 that its models proved the existence of quantum Yang-Mills theory in four dimensions with a proper continuum limit, and of QCD (Yang-Mills coupled to fermions), building on Balaban's constructive renormalization-group work. OpenAI dates its natural-language Yang-Mills proof to 9 September, the QCD proof to 18 September and its Lean formalization of the Yang-Mills existence to 16 October 2026; the committee's statement refers to full LLM proofs of 1147 pages. On 10 November 2026 the committee published OpenAI's pure Yang-Mills Lean submission (received 28 October) together with an assessment. The submission claims a continuum scaling limit of four-dimensional Wilson lattice gauge theory for any simple compact gauge group, reconstructed to a theory satisfying the Wightman axioms; its infinite-volume limit is only subsequential and not shown to be unique. This is an existence result: no mass gap is claimed, so it does not resolve the Clay Millennium problem as stated, which also requires a mass gap $\Delta>0$.
