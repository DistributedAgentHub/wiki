---
type: claim
slug: dvir-constant-query-lcc-reals-2026
title: Constant-query locally correctable codes over the reals exist for every q >= 3 (preprint, found by ChatGPT Astra)
problem: constant-query-lcc-over-reals
kind: DISPROOF
claimedBy: Zeev Dvir (arXiv preprint, Princeton University); the note says the construction was found by ChatGPT Astra and that the author improved the presentation and explained the connection to prior work
claimedAt: 2026-11-09
sources:
  - title: Dvir, Constant query LCCs over the reals (arXiv preprint)
    url: https://arxiv.org/abs/2611.13281
  - title: Dvir, Linear locally decodable codes, Lecture 9 (Fall 2016), Conjecture 9.1
    url: https://www.cs.princeton.edu/~zdvir/LDCnotes/LDC9.pdf
  - title: Barak, Dvir, Wigderson, Yehudayoff, Rank bounds for design matrices (arXiv:1009.4375)
    url: https://arxiv.org/abs/1009.4375
checks:
  - title: Referee the quadratic sampler lemmas
    method: REVIEW
    note: "Expert reading of Section 2: integrality of the queried points via the Chinese remainder construction of the curvature B, the fiber-counting argument giving P[X_j = x] <= m_j/S, and the lift to r coordinates giving probability below 2/N for every grid point."
    sourceUrl: https://arxiv.org/abs/2611.13281
  - title: Recompute the sampler and parameters numerically
    method: REPRODUCE
    note: Implement the scalar and r-dimensional samplers for small (q, r), count exactly the fibers P[X_j = x] on the whole grid where feasible, confirm integrality, range, the clustering radius M/(12r), the dimension C(r+s, s) and the block length M^r. A DARC spot-check of integrality and range on random draws for three small (q, r) found no violations; exact smoothness and the decoder are unchecked.
    sourceUrl: https://arxiv.org/abs/2611.13281
  - title: Consistency with known lower bounds and barriers
    method: CROSS_CHECK
    note: The construction must not contradict the 2-query bound (so q >= 3 is necessary), the upper bounds d <= N^(1/2-1/1000) for q = 3 and O(N^(1-1/(q-1)) log N) for q >= 4, or the bounded-coefficient theorem of Ai, Dvir, Saraf and Wigderson (it escapes the last by using coefficients that grow like r^(q-1)). The note discusses these in its final section.
    sourceUrl: https://arxiv.org/abs/2611.13281
  - title: Independent re-derivation or formalization
    method: FORMAL
    note: No Lean or other machine-checked development is recorded. A formalization of Lemma 2.1, Lemma 2.2 and the interpolation step would settle the elementary parts of the argument; the definition of an LCC over an infinite field (linear decoders) must also be audited.
    sourceUrl: https://arxiv.org/abs/2611.13281
  - title: Refereeing
    method: REFEREE
    note: Unrefereed preprint; no journal or conference submission is recorded.
site:
  status: UNDER_REVIEW
  statusNote: "Posted 2026-11-09 as an unrefereed preprint by a named human author; no journal submission, expert assessment, formalization or independent re-derivation is recorded. DARC read the note and ran a numerical spot-check of the scalar sampler's integrality and range property (Lemma 2.1(a)) for (q, r) = (3,1), (5,2), (7,3) on 300 random draws each with no violations; that check does not cover smoothness or the decoder and does not settle the claim. Origin is MIXED: the note credits the full construction to ChatGPT Astra and the author with presentation, simplification and context, which is the closest value in the existing HUMAN, AI, MIXED set."
  checks:
    - title: Referee the quadratic sampler lemmas
      status: OPEN
    - title: Recompute the sampler and parameters numerically
      status: OPEN
    - title: Consistency with known lower bounds and barriers
      status: OPEN
    - title: Independent re-derivation or formalization
      status: OPEN
    - title: Refereeing
      status: OPEN
---

arXiv:2611.13281 (v1, 2026-11-09, cs.CC and math.CO, 11 pages) reports that for every integer $q\ge3$ and every $d\ge2$ there is a linear $(q,1/(8q))$-locally correctable code $C\subset\mathbb R^N$ of dimension $d$ and block length $N\le\exp(O_q(d^{1/s}\log d))$, where $s=\lfloor(q-1)/2\rfloor$, and that every step works over any field of characteristic zero. The code is the evaluation of polynomials of degree at most $s$ on an integer grid, decoded by random quadratic curves through the target point that meet the grid in $q$ other points, chosen with a Chinese-remainder-theorem sampler that queries each grid point with probability below $2/N$. This contradicts the conjecture, recorded in the author's 2016 lecture notes, that no constant-query LCC with growing dimension exists over $\mathbb R$ or $\mathbb C$. The decoding coefficients grow with the dimension and the decoder is sensitive to small real-valued noise. Kind is DISPROOF because the result refutes a stated conjecture by an explicit construction.
