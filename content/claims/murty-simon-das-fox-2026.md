---
type: claim
slug: murty-simon-das-fox-2026
title: A proof of the Murty–Simon conjecture on diameter-2-critical graphs for all n (Das–Fox, preprint)
problem: murty-simon-conjecture
kind: PROOF
claimedBy: Sanjana Das and Jacob Fox (arXiv:2610.39032, preprint)
claimedAt: 2026-10-28
sources:
  - title: "Das, Fox: A proof of the Murty–Simon conjecture on diameter-2-critical graphs (arXiv:2610.39032)"
    url: https://arxiv.org/abs/2610.39032
  - title: "Das, Fox: full text (PDF)"
    url: https://arxiv.org/pdf/2610.39032
checks:
  - title: Expert check of the bound (Lemma 1.2)
    method: REVIEW
    note: "An extremal graph theorist should check the proof that for any maximal matching the edges outside it number at most the non-edges: the critical non-edges, the auxiliary bipartite graph, the left-lopsided, balanced and right-lopsided components, and the counting of switch exits."
    sourceUrl: https://arxiv.org/abs/2610.39032
  - title: Expert check of the equality case (Lemma 1.3)
    method: REVIEW
    note: Check that equality for every maximal matching forces triangle-freeness for all $n\ge 3$, including odd $n$ (the AI's equality argument, based on Sumner's theorem on randomly matchable graphs, works for even $n$ only, so the authors wrote a different one), and the reduction to Mantel's theorem.
    sourceUrl: https://arxiv.org/abs/2610.39032
  - title: Small-n enumeration
    method: REPRODUCE
    note: Enumerate all diameter-2-critical graphs for small $n$ (for example with nauty) and check that the edge bound, the equality case and both lemmas hold. This is a sanity check, not a proof.
    sourceUrl: https://arxiv.org/abs/2610.39032
  - title: Agreement with Füredi's large-n theorem
    method: CROSS_CHECK
    note: The result should agree with Füredi's 1992 theorem for $n$ above the tower threshold and with the restricted-class results listed in the preprint's introduction; any disagreement would signal an error.
    sourceUrl: https://arxiv.org/abs/2610.39032
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.39032
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (13 pages, v1 of 28 Oct 2026), unrefereed. DARC found no expert assessment yet. The abstract says a proof of the $\lfloor n^2/4\rfloor$ bound was originally found by AI, and the AI statement names GPT-5.6 Sol on 11 August 2026; the authors say they simplified it and extended it to the full conjecture, wrote the final argument and the equality proof themselves, and made minor edits after a pass through GPT-6 Astra. Hence origin MIXED. The problem stays OPEN until the proof is checked.
  checks:
    - title: Expert check of the bound (Lemma 1.2)
      status: OPEN
    - title: Expert check of the equality case (Lemma 1.3)
      status: OPEN
    - title: Small-n enumeration
      status: OPEN
    - title: Agreement with Füredi's large-n theorem
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that for every $n\ge 3$ an $n$-vertex diameter-2-critical graph has at most $\lfloor n^2/4\rfloor$ edges, with equality only for the balanced complete bipartite graph. Füredi's 1992 proof covered only $n$ above a tower of 2s of height about $10^{14}$. The argument shows that for any maximal matching $M$, the number of edges outside $M$ is at most the number of non-edges (giving the bound), and that equality for every maximal matching forces the graph to be triangle-free, so Mantel's theorem finishes the equality case.
