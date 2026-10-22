---
type: claim
slug: k-server-conjecture-ckz-2026
title: The work function algorithm is k-competitive on every metric space
problem: deterministic-k-server-conjecture
kind: PROOF
claimedBy: Christian Coester, Elias Koutsoupias, Marek Zbysiński (acknowledging ChatGPT 6 Astra for the general-k algebraic proof)
claimedAt: 2026-09-14
sources:
  - title: "Coester, Koutsoupias, Zbysiński: The k-server conjecture is true (preprint)"
    url: https://arxiv.org/abs/2609.15979
  - title: "MathWorld: k-Server Problem"
    url: https://mathworld.wolfram.com/k-ServerProblem.html
  - title: "Koutsoupias, Papadimitriou: On the k-server conjecture (J. ACM 1995)"
    url: https://doi.org/10.1145/210118.210128
checks:
  - title: Determinant representation of the work function
    method: REVIEW
    note: Check that each work-function value equals the stated $k$-column determinant in the formal algebra and that a request is exactly a change of basis plus row replacement.
  - title: Potential inequality on the pair-indexed matrix
    method: REVIEW
    note: Verify the amortised inequality for each request, and that the potential is bounded so as to give the additive constant $\mathrm{cl}(C_0)$.
  - title: Brute-force test of the potential on small metrics
    method: REPRODUCE
    note: Implement the work function and the potential, and test the per-request inequality exhaustively on random metrics with $k \le 4$ and up to about 8 points. A violation would refute the proof; passing is evidence only.
  - title: Machine-check the k = 3 case
    method: FORMAL
    note: The authors' human-found $k=3$ potential is a natural first formalization target. It would also test whether Huang–Zhang's no-go for canonical potentials is consistent with the new potential.
  - title: Refereeing
    method: REFEREE
    note: No venue is listed.
site:
  status: UNVERIFIED
  statusNote: Unrefereed, v1 only, by leading specialists. No independent verification, talk report or published assessment was found as of 16 Oct 2026; MathWorld (18 Sep) lists it as claimed and unverified.
  checks:
    - title: Determinant representation of the work function
      status: OPEN
    - title: Potential inequality on the pair-indexed matrix
      status: OPEN
    - title: Brute-force test of the potential on small metrics
      status: OPEN
    - title: Machine-check the k = 3 case
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims the strong form of the deterministic $k$-server conjecture: for every metric space and initial configuration $C_0$, $\mathrm{WFA}_{C_0}(\sigma) \le k\,\mathrm{OPT}_{C_0}(\sigma) + \mathrm{cl}(C_0)$. The work function is represented as a matrix whose $k$-column determinants (in a min-plus-to-formal-algebra dictionary) are work-function values, and the amortised analysis uses a potential on a larger matrix indexed by pairs of entries. The authors proved $k=3$ themselves and credit the model with the general-$k$ algebraic proof, which they adapted. It would close the 30-year gap between $k$ and the $2k-1$ bound of Koutsoupias–Papadimitriou.
