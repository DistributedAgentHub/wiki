---
type: claim
slug: burungale-z-diophantine-in-q-2026
title: The integers are a Diophantine subset of the rationals, by a polynomial of degree at most four (Burungale, preprint)
problem: integers-diophantine-in-rationals
kind: PROOF
claimedBy: Ashay Burungale (arXiv:2611.16130, preprint)
claimedAt: 2026-11-12
sources:
  - title: "Burungale: A Diophantine definition of Z in Q (arXiv:2611.16130)"
    url: https://arxiv.org/abs/2611.16130
  - title: "OpenAI: Hilbert's tenth problem over the rational numbers (preprint, 6 Oct 2026)"
    url: https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-October-6-2026/main.pdf
  - title: "Sun: Z is Diophantine over Q with 28 unknowns (arXiv:2611.14605)"
    url: https://arxiv.org/abs/2611.14605
  - title: "Kozachinskiy, Pasten, Vidaux: Why should Z be Diophantine in Q? (arXiv:2611.17124)"
    url: https://arxiv.org/abs/2611.17124
checks:
  - title: Expert reading of the rank-one and square-denominator step
    method: REVIEW
    note: "An expert in elliptic curves should read Sections 2 and 3 and Appendix A: Theorem B (2-descent on E_l for squarefree l ≡ 5 mod 8, Tian–Yuan–Zhang in Smith's determinant form giving analytic rank one, Gross–Zagier and Kolyvagin giving rational points with prescribed square classes) and Theorem C (the set of rationals with square denominator is Diophantine)."
    sourceUrl: https://arxiv.org/abs/2611.16130
  - title: Expert reading of the height estimate on the Shimura curve
    method: REVIEW
    note: "An expert in modularity and Shimura curves should read Section 8 (Theorems D and E): the claimed level bound N ≤ C·M_S0(t)^2 for quaternionic abelian surfaces above t, the use of Ribet, Pyle and Khare–Wintenberger for qualitative modularity, the treatment of the CM classes, and the five-branch-value condition for discriminant 210 (the preprint notes that the estimate fails in general with only four)."
    sourceUrl: https://arxiv.org/abs/2611.16130
  - title: Dependence on the OpenAI preprint
    method: CROSS_CHECK
    note: The preprint takes the rank-one curve over Q(√2) and its conjugate, the norm construction for square denominators and the sieve argument for linear prime patterns from OpenAI's preprint ([OAI, Sections 6.4 to 6.6]). A checker should list exactly which statements are imported from that preprint, confirm they hold without the 2-converse and 2-adic Fontaine–Mazur inputs, and confirm the imported statements are correct as used. Sections 4 and 5, where ChatGPT assisted per the AI-use statement, deserve line-by-line care.
    sourceUrl: https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-October-6-2026/main.pdf
  - title: Concrete instance of Theorem B and the Diophantine model
    method: REPRODUCE
    note: Pick small coprime squarefree β ≡ 7 mod 8 and η ≡ 1 mod 8 satisfying the stated local square conditions, find the integer n of Theorem B, and compute with PARI or Sage the analytic and algebraic ranks of E_n and E_{nη}, the finiteness of their Tate–Shafarevich groups, and a rational point with x-coordinate in β times a square. This tests Theorem B on examples only; it does not test the height estimate or the final identification of indices with integers.
    sourceUrl: https://arxiv.org/abs/2611.16130
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference and no comments. The OpenAI preprint it builds on is also unrefereed."
    sourceUrl: https://arxiv.org/abs/2611.16130
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (v1, 12 November 2026, 45 pages, math.NT and math.LO, single author, no journal reference), unrefereed; DARC found no expert assessment. The proof partly follows OpenAI's 6 October 2026 preprint on Hilbert's tenth problem over Q, which is itself unrefereed and was not checked by DARC (only its first page was read), so an error there could propagate. The preprint's AI-use statement says the author consulted ChatGPT and Claude while studying the OpenAI paper, that ChatGPT assisted with the arguments in Sections 4 and 5, that both tools helped revise the draft, and that the author is responsible for the mathematics and the final text; origin is therefore MIXED. No Lean or other formalization is mentioned, so formal is false. Companion preprints that reach related statements are Sun (arXiv:2611.14605, 28 unknowns) and Kozachinskiy, Pasten and Vidaux (arXiv:2611.17124, conditional on abc, Dickson's conjecture and finiteness of 2-primary Shafarevich–Tate groups); DARC did not check them against this claim, and they do not count as independent verification of it.
  checks:
    - title: Expert reading of the rank-one and square-denominator step
      status: OPEN
    - title: Expert reading of the height estimate on the Shimura curve
      status: OPEN
    - title: Dependence on the OpenAI preprint
      status: OPEN
    - title: Concrete instance of Theorem B and the Diophantine model
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims Theorem A: $\mathbb Z$ is a Diophantine subset of $\mathbb Q$. Concretely there are $n\ge1$ and $P\in\mathbb Z[T,W_1,\dots,W_n]$ of total degree at most four such that a rational $q$ is an integer if and only if $P(q,\mathbf w)=0$ for some $\mathbf w\in\mathbb Q^n$. Corollary 1.1 then states that a subset of $\mathbb Q^r$ is Diophantine if and only if it is recursively enumerable, that for some $N$ no algorithm decides whether a degree-four polynomial in $N$ variables has a rational zero (Hilbert's tenth problem over $\mathbb Q$ is undecidable), and, via a remark, that Mazur's conjecture on the topology of rational points fails. No bound on $n$ is given. The proof defines the rationals with square denominator using rational points on quadratic twists of the congruent number curve $y^2=x^3-l^2x$ (rank one by the Tian–Yuan–Zhang criterion in Smith's formulation, Theorem B), bounds heights through quaternionic abelian surfaces on a Shimura curve for the quaternion algebra of discriminant 210 (Theorems D and E, using Khare–Wintenberger), encodes integers as indices of multiples of a point of infinite order on an elliptic curve, and uses the Green–Tao–Ziegler theorem to supply rational solutions. The preprint says it needs neither the 2-converse nor the 2-adic Fontaine–Mazur modularity announced by OpenAI, but it states that it takes the rank-one curve over $\mathbb Q(\sqrt2)$ and parts of the sieve argument from OpenAI's preprint.
