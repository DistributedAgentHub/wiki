---
type: claim
slug: aaronson-ambainis-keller-klein-2019
title: Claimed proof of the Aaronson–Ambainis conjecture ('Quantum speedups need structure')
problem: aaronson-ambainis-conjecture
kind: PROOF
claimedBy: Nathan Keller and Ohad Klein
claimedAt: 2019-11-09
sources:
  - title: "Keller, Klein: Quantum speedups need structure (arXiv, withdrawn)"
    url: https://arxiv.org/abs/1911.03748
  - title: "Bhattacharya: Random restrictions of bounded low degree polynomials are juntas"
    url: https://arxiv.org/abs/2402.13952
checks:
  - title: Lemma 5.3 proves its stated assertion
    method: REVIEW
    note: Ivanisvili found that Lemma 5.3 does not establish its claim; the authors withdrew the paper.
    sourceUrl: https://arxiv.org/abs/1911.03748
  - title: Determine whether a restricted statement survives
    method: REVIEW
    note: Check whether the pre-Lemma 5.3 machinery proves the conjecture for a natural subclass (e.g. block-multilinear forms or random restrictions, as in Bhattacharya 2024) not already covered by later work.
site:
  status: RETRACTED
  statusNote: "Withdrawn on 2 December 2019 (v2): the authors state that Lemma 5.3 does not prove what it claims, which collapses the argument, and thank Paata Ivanisvili for finding the flaw."
  checks:
    - title: Lemma 5.3 proves its stated assertion
      status: FAILED
    - title: Determine whether a restricted statement survives
      status: OPEN
---

The preprint claimed that every bounded degree-$d$ polynomial on the Boolean cube has a variable of influence at least $\mathrm{poly}(\mathrm{Var}[f]/d)$, which would imply that quantum query algorithms can be classically simulated on most inputs with polynomial overhead. It would have settled the conjecture in full.
