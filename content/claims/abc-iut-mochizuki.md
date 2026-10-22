---
type: claim
slug: abc-iut-mochizuki
title: Proof of the abc conjecture via inter-universal Teichmüller theory
problem: abc-conjecture
kind: PROOF
claimedBy: Shinichi Mochizuki (RIMS, Kyoto)
claimedAt: 2012-08-01
sources:
  - title: "Mochizuki: papers on inter-universal Teichmüller theory"
    url: https://www.kurims.kyoto-u.ac.jp/~motizuki/papers-english.html
  - title: "Scholze, Stix: Why abc is still a conjecture"
    url: https://www.math.uni-bonn.de/people/scholze/WhyABCisStillaConjecture.pdf
  - title: Project LANA interim report (July 2026)
    url: https://github.com/katobungen/LANA_report_202607/blob/pdf/LANA_report_202607.pdf
  - title: "Joshi: Comments on the LANA Project Report (30 July 2026)"
    url: https://bpb-us-e2.wpmucdn.com/sites.arizona.edu/dist/4/404/files/2026/07/Comments-on-the-LANA-Project-Report-of-Kato-et-al.pdf
  - title: "Quanta Magazine: Titans of mathematics clash over epic proof of abc conjecture (2018)"
    url: https://www.quantamagazine.org/titans-of-mathematics-clash-over-epic-proof-of-abc-conjecture-20180920/
checks:
  - title: Corollary 3.12 of IUT III follows from Theorem 3.11
    method: REVIEW
    note: Scholze and Stix argue that once the identifications are made consistently the inequality becomes trivial, so the step does not work as written. Mochizuki disputes this, so the failure is contested.
    sourceUrl: https://www.math.uni-bonn.de/people/scholze/WhyABCisStillaConjecture.pdf
  - title: Independent reconstruction of the 3.11→3.12 compatibility
    method: REVIEW
    note: Project LANA isolates a compatibility problem in this step and reports that it has not reconstructed a proof. A written argument that the LANA team, or another independent group, accepts would settle it.
    sourceUrl: https://github.com/katobungen/LANA_report_202607/blob/pdf/LANA_report_202607.pdf
  - title: Lean specification of the IUT III key proposition
    method: FORMAL
    note: LANA's stated long-term aim is a Lean formalization. A first concrete step is a machine-checked statement of the disputed proposition with all objects defined, which would make the disagreement precise.
site:
  status: UNDER_REVIEW
  statusNote: Not accepted by the wider community. Scholze and Stix (2018) argue the 3.11→3.12 step fails; Mochizuki rejects their reading. Project LANA's interim report (July 2026) has not reconstructed a proof of the key compatibility; Joshi disputed that report on 30 July 2026.
  checks:
    - title: Corollary 3.12 of IUT III follows from Theorem 3.11
      status: FAILED
    - title: Independent reconstruction of the 3.11→3.12 compatibility
      status: OPEN
    - title: Lean specification of the IUT III key proposition
      status: OPEN
---

Four papers posted in August 2012 (reported as 30 or 31 August) claim Szpiro's inequality, and hence abc, over number fields via inter-universal Teichmüller theory; they were published in PRIMS in 2021, a journal of which Mochizuki was chief editor (the journal says a committee excluding him handled them). The disputed step is the passage from Theorem 3.11 to Corollary 3.12 of IUT III. Joshi (arXiv:2403.10430) claims a separate proof through arithmetic Teichmüller spaces.
