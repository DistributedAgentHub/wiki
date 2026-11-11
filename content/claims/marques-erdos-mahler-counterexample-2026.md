---
type: claim
slug: marques-erdos-mahler-counterexample-2026
title: A counterexample to the Erdős–Mahler conjecture (Marques, preprint)
problem: erdos-mahler-convergents-conjecture
kind: DISPROOF
claimedBy: Diego Marques (Universidade de Brasília; arXiv:2611.13604, preprint)
claimedAt: 2026-11-10
formal: true
sources:
  - title: "Marques: A counterexample to the Erdős–Mahler conjecture (arXiv:2611.13604)"
    url: https://arxiv.org/abs/2611.13604
  - title: "Marques: Erdos-Mahler Lean 4 formalization repository (README and FORMALIZATION_STATUS.md)"
    url: https://github.com/DiegoMarquesMath/Erdos-Mahler
  - title: "Bugeaud, Nguyen: Some arithmetical properties of convergents to algebraic numbers (arXiv:2209.07485)"
    url: https://arxiv.org/abs/2209.07485
  - title: "Marques: A neighboring-denominator variant of the Erdős–Mahler conjecture (arXiv:2608.26455)"
    url: https://arxiv.org/abs/2608.26455
checks:
  - title: Expert reading of the construction and counting proposition
    method: REVIEW
    note: An expert in Diophantine approximation should read the 15-page argument, in particular Proposition 2.1 (limsup of the number of exceptional indices is at most $CD^{2-\nu}$ for $4<\nu\le5$), the height bound from the $p$-adic subspace theorem (Lemma 3.2), and the Matveev-based class-size bound (Lemma 3.5).
    sourceUrl: https://arxiv.org/abs/2611.13604
  - title: Do the constructed numbers really have 2^a/3^b convergents?
    method: REPRODUCE
    note: Generate a truncated member of the construction (nested intervals $K(t)$ around the fractions $2^{a(b)}/3^b$ for a fixed $\tau$), compute its continued fraction exactly, and confirm each prescribed fraction appears as a convergent (Legendre's criterion). A toy two-stage run by DARC with $\tau=4$, first denominator $3^2$, found the fractions 16/9 and the second prescribed fraction both among the convergents. That is only a sanity check of the Legendre step, not a test of the counting proposition, so the check stays open.
    sourceUrl: https://arxiv.org/abs/2611.13604
  - title: Compatibility with Ridout-type theorems
    method: CROSS_CHECK
    note: Ridout's theorem makes numbers with infinitely many convergents of bounded prime factors in the denominator transcendental, which is consistent with exponent $\tau\ge4>2$. Check that the exponent range $\tau\ge4$ and the use of $\nu_t=4+1/t$ in the counting step do not conflict with the Erdős–Mahler theorem for $P(q_{n-1}q_nq_{n+1})$ (whose conclusion is Liouville) or the Lelis–Marques spacing result cited in the paper's introduction.
    sourceUrl: https://arxiv.org/abs/2611.13604
  - title: Statement of the 1939 conjecture and the Lean premises
    method: CROSS_CHECK
    note: Confirm the conjecture as stated against Erdős–Mahler (J. London Math. Soc. 14, 1939, 12–18), which DARC could not open. For the Lean development, check that the two explicit premises (a Schlickewei-type finiteness statement and a Matveev-type bound for three logarithms) match the published theorems.
    sourceUrl: https://github.com/DiegoMarquesMath/Erdos-Mahler
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.13604
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (v1 of 10 Nov 2026, 15 pages, math.NT), unrefereed; DARC found no expert assessment yet. The paper links a Lean 4 formalization of the counting argument and the main theorem; its repository status page says the subspace theorem and Matveev's bound enter as explicit hypotheses of the final declaration rather than being proved in Lean, and that the final Lean statement allows exponents equal to zero while the paper requires positive ones. The repository's pinned GitHub Actions build and declaration audit (run 42761925776, commit cb25517, 10 Nov 2026) completed successfully, so `formal` is true in the sense that a machine-checked artifact exists, but what it checks is the implication from those two premises; DARC has not rebuilt or audited it. The paper's AI-use declaration says ChatGPT and Codex were used to improve exposition and to review arguments and references; the author takes responsibility for the mathematics. The 1939 source was not available to DARC, so the conjecture's statement rests on the preprint's quotation.
  checks:
    - title: Expert reading of the construction and counting proposition
      status: OPEN
    - title: Do the constructed numbers really have 2^a/3^b convergents?
      status: OPEN
    - title: Compatibility with Ridout-type theorems
      status: OPEN
    - title: Statement of the 1939 conjecture and the Lean premises
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that for every real $\tau\ge4$ there is a Cantor set $K_\tau\subset(1,2)$ such that every $\xi\in K_\tau$ has irrationality exponent exactly $\tau$ and infinitely many regular continued-fraction convergents of the form $2^a/3^b$ with $a,b$ positive integers. Such a $\xi$ has $P(p_nq_n)\le3$ for infinitely many $n$ but is not a Liouville number, contradicting the Erdős–Mahler conjecture (1939) as quoted in the paper: if $P(p_nq_n)$ is bounded for infinitely many $n$, then $\xi$ is a Liouville number. The construction nests intervals around the fractions $R(b)=2^{a(b)}/3^b\in(1,2)$ and keeps two admissible successors at each stage. The key input is a counting estimate (Proposition 2.1) showing that few indices $b$ have an exceptional close rational approximation, proved with rotation estimates, the $p$-adic subspace theorem, Matveev's lower bound for linear forms in logarithms and a Plünnecke–Ruzsa-type argument. The paper states no Hausdorff dimension for $K_\tau$.
