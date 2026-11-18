---
type: claim
slug: lattice-chiral-measure-craig-2026
title: A gauge-invariant fermion measure exists for overlap fermions on a finite 4D lattice for SU(5) 10+5bar and the Standard Model gauge group (Craig; preprint, AI-led proof)
problem: standard-model-nonperturbative-lattice-definition
kind: PROOF
claimedBy: Nathaniel Craig (KITP and UCSB; visiting scientist at OpenAI) with OpenAI's GPT-6 Astra, arXiv:2610.09093v1 (preprint)
claimedAt: 2026-10-06
sources:
  - title: "arXiv:2610.09093v1: A gauge-invariant measure for lattice chiral fermions"
    url: https://arxiv.org/abs/2610.09093
  - title: "Zenodo: mathematical companion and Lean formalization (author-reported archive)"
    url: https://doi.org/10.5281/zenodo.23196062
  - title: "Witten: A Note On Lattice Definition of Gauge Theories With Chiral Fermions (arXiv:2611.05051)"
    url: https://arxiv.org/abs/2611.05051
  - title: "Craig: guest post on the OpenAI science blog, 15 Nov 2026 (opened in a browser only)"
    url: https://openai.com/index/step-toward-defining-the-standard-model/
  - title: "Lüscher: Abelian chiral gauge theories on the lattice with exact gauge invariance (hep-lat/9811032)"
    url: https://arxiv.org/abs/hep-lat/9811032
  - title: "Woit: AI and Chiral Fermions (blog, 8 Oct 2026)"
    url: https://www.math.columbia.edu/~woit/wordpress/?p=15915
checks:
  - title: "Theorem 4.1: smooth local measure current and integrability"
    method: REVIEW
    note: Specialists in lattice chiral fermions should check that the refinement current built from chiral projectors at spacings 1/3, 1/9, ... is smooth, gauge covariant and exponentially local with volume-independent constants on admissible fields, and that it meets Lüscher's integrability condition.
    sourceUrl: https://arxiv.org/abs/2610.09093
  - title: Admissible-field region and the passage to the Standard Model
    method: CROSS_CHECK
    note: Check that the admissibility condition (plaquettes within a volume-independent epsilon of the identity) is the one used throughout, that restriction from SU(5) to the Standard Model gauge group with any number of generations is valid, and what is left on the complement of the admissible fields.
    sourceUrl: https://arxiv.org/abs/2610.09093
  - title: Lean 4 formalization and its match with the paper
    method: FORMAL
    note: The archive on Zenodo holds a Lean project and a verification report; the record says it covers the SU(5) construction restricted to four Standard Model global forms. It is author-reported, no public CI was found, and the paper says AI agents reviewed the correspondence between the Lean statements and the paper, so an independent check that the formal statements say what the paper claims is still needed.
    sourceUrl: https://doi.org/10.5281/zenodo.23196062
  - title: Expert follow-up
    method: CROSS_CHECK
    note: Witten's note (arXiv:2611.05051), Hsu's preprint (arXiv:2610.29019) and Liu's finite-volume comparison (arXiv:2611.16544) build on or compare with Craig's construction, but none is a line-by-line check of the proof. Golterman, Kronfeld and Shamir are reported by the author to have looked over the proof and asked questions.
    sourceUrl: https://arxiv.org/abs/2611.05051
  - title: Reflection positivity and the continuum limit
    method: REVIEW
    note: Not established by the paper. Hsu argues reflection positivity at zero Yukawa coupling and zero theta for a modified reconstruction whose equivalence to Craig's is unproven; Craig says he is studying finite-spacing reflection positivity. The continuum limit of the interacting theory is open.
    sourceUrl: https://arxiv.org/abs/2610.29019
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: arXiv version 1, prepared for submission to JHEP, no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.09093
site:
  status: UNDER_REVIEW
  statusNote: "arXiv version 1, 6 October 2026, 60+63 pages, hep-lat, prepared for submission to JHEP; unrefereed, no journal reference. The acknowledgments say OpenAI's GPT-6 Astra was essential; Craig proposed the refinement strategy and the paper describes an Astra-led proof. A Lean 4 formalization (16 modules) and mathematical companion are archived on Zenodo; the archive is author-reported, no public continuous-integration record was found, and the paper says the match between the Lean statements and the paper was reviewed separately by AI agents, so DARC does not treat the result as machine-checked. Witten (arXiv:2611.05051) writes that Craig constructed a lattice regularization general enough for the Standard Model, which is favourable but is not a verification of the proof. Craig's guest post on OpenAI's blog (15 Nov 2026) says three lattice field theorists looked over the proof and asked questions, which is not a verification statement. The problem stays OPEN: reflection positivity and the continuum limit are unresolved."
  checks:
    - title: "Theorem 4.1: smooth local measure current and integrability"
      status: OPEN
    - title: Admissible-field region and the passage to the Standard Model
      status: OPEN
    - title: Lean 4 formalization and its match with the paper
      status: OPEN
    - title: Expert follow-up
      status: OPEN
    - title: Reflection positivity and the continuum limit
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims (Theorem 4.1 and Sections 10 and 11) that for overlap fermions on a finite periodic four-dimensional Euclidean lattice, and for admissible gauge fields (every plaquette within a volume-independent $\epsilon$ of the identity), there is a smooth, gauge-covariant, exponentially local measure current that satisfies Lüscher's integrability condition. By Lüscher's reconstruction this gives a smooth gauge-invariant fermion measure, unique up to a constant phase on each connected component of the admissible fields, for $SU(5)$ with fermions in $\mathbf{10}\oplus\bar{\mathbf5}$, and by restriction for $[SU(3)\times SU(2)\times U(1)]/\Gamma$ with any number of generations and for some other anomaly-free chiral theories. **Method:** compare the chiral projectors of the overlap operator on successively finer lattices (spacings $1/3, 1/9, \dots$) of a locally reconstructed connection. **Stated limits:** the result is "one of principle, rather than practice"; reflection positivity is not established; a definition of the interacting continuum theory remains open; the constant phases per component are left to be fixed. The paper calls the result a candidate nonperturbative lattice definition of the Standard Model.
