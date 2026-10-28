---
type: claim
slug: choice-number-random-graphs-wang-zeng-2026
title: ch(G(n,p)) = (1+o(1)) χ(G(n,p)) for all p with np → ∞ (claimed proof of the Alon–Krivelevich–Sudakov conjecture)
problem: choice-number-random-graphs-aks
kind: PROOF
claimedBy: Lanchao Wang and Jiasheng Zeng (preprint, not peer-reviewed)
claimedAt: 2026-10-26
sources:
  - title: "Wang, Zeng: The Choice Number of Random Graphs (arXiv:2610.35003, v1)"
    url: https://arxiv.org/abs/2610.35003
  - title: "Alon, Krivelevich, Sudakov: List coloring of random and pseudo-random graphs (Combinatorica 19, 1999)"
    url: https://doi.org/10.1007/s004939970001
  - title: "Krivelevich, Vu: Choosability in random hypergraphs (JCTB 83, 2001)"
    url: https://doi.org/10.1006/jctb.2001.2053
checks:
  - title: Statement covers the whole conjectured range
    method: REVIEW
    note: Theorem 1.2 states the conjecture for every p = p(n) in (0,1) with np → ∞, with no extra range restriction; the abstract and introduction say the same.
    sourceUrl: https://arxiv.org/abs/2610.35003
  - title: Uniform independent-set estimate (large independent sets case)
    method: REVIEW
    note: An expert should check the sharper estimate that removes the factor two of Krivelevich–Vu, including the union bound over all large vertex subsets.
    sourceUrl: https://arxiv.org/abs/2610.35003
  - title: Deterministic theorem for bounded colour classes and the reduction to it
    method: REVIEW
    note: Check the use of Kahn's matching theorem and the whp deletion of o(n) exceptional vertices that makes G(n,p) satisfy its hypotheses when p is close to 1.
    sourceUrl: https://arxiv.org/abs/2610.35003
  - title: Peer review
    method: REFEREE
    note: No journal reference is listed on arXiv, so no refereed version is known yet.
    sourceUrl: https://arxiv.org/abs/2610.35003
site:
  status: UNDER_REVIEW
  statusNote: A 12-page arXiv v1 posted 2026-10-26; no journal reference, no formal proof, and no independent confirmation or rebuttal known at the time of writing. The preprint's own statement matches the 1999 conjecture in its full range, but the argument has not been checked by anyone outside the authors.
  checks:
    - title: Statement covers the whole conjectured range
      status: PASSED
    - title: Uniform independent-set estimate (large independent sets case)
      status: OPEN
    - title: Deterministic theorem for bounded colour classes and the reduction to it
      status: OPEN
    - title: Peer review
      status: OPEN
---

The preprint claims that with high probability $\mathrm{ch}(G(n,p))=(1+o(1))\chi(G(n,p))$ whenever $np\to\infty$, with no restriction on how fast $np$ grows or how close $p$ is to $1$, improving the factor $2$ of Krivelevich and Vu (2001). The proof splits at $\log(1/(1-p))=o(\log(np))$. With growing independent sets it follows Krivelevich–Vu's two-stage colouring method with a sharper uniform independent-set estimate. With bounded independent sets it proves a deterministic theorem: a graph with a proper colouring into $k$ classes of size at most $s+1$, in which every vertex set of size above $\delta n$ contains an independent set of size $s$, has $\mathrm{ch}\le k+\varepsilon n$ (Theorem 1.3: for every $s$ and $\varepsilon>0$ there is such a $\delta>0$).
