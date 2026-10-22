---
type: claim
slug: krpan-povh-c2000-9-upper-bound-168
title: Certified upper bound 168 for the clique number of C2000.9 (preprint)
problem: max-clique-c2000-9
kind: BOUND
claimedBy: Aljaž Krpan, Janez Povh
claimedAt: 2026-07-13
sources:
  - title: Krpan, Povh, Improving Upper Bounds for the Maximum Clique Problem using Reduction Rules (arXiv preprint)
    url: https://arxiv.org/abs/2607.11726
checks:
  - title: Recompute the bound 168 for C2000.9
    method: REPRODUCE
    note: Run the reductions and the theta-function bound on the DIMACS instance file and compare.
  - title: Peer review of the reduction rules
    method: REFEREE
    note: Soundness of the new reduction notions and of the claim that the bound is certified.
site:
  status: UNVERIFIED
  statusNote: Version 1 posted 13 July 2026 as an arXiv preprint; no refereed publication or independent recomputation is recorded.
  checks:
    - title: Recompute the bound 168 for C2000.9
      status: OPEN
    - title: Peer review of the reduction rules
      status: OPEN
---

arXiv:2607.11726 combines core and truss reductions with the Lovász theta function and reports a certified integer upper bound of 168 for C2000.9, improving the previous 177, plus improvements for C500.9 (83 to 73) and C1000.9 (122 to 115). The exact clique numbers of these three graphs remain unknown.
