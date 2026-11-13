---
type: problem
slug: erdos-similarity-problem
title: "The Erdős similarity conjecture: for every infinite set of reals, some set of positive measure contains no affine copy of it"
entry: geometric-measure-theory
status: OPEN
origin: Paul Erdős, 1974 (Remarks on some problems in number theory, Math. Balkanica 4, as cited by Yip and by Jung–Lai–Mooroogen); the finite case is due to Steinhaus (1920)
ratings:
  difficulty: 70
  applicationValue: 2
  leverage: 24
workMix:
  theory: 94
  engineering: 2
  compute: 4
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Yip: A resolution of the Erdős similarity problem in the large (arXiv:2611.14056, preprint; introduction recalls the 1974 conjecture and the reduction to sequences)"
    url: https://arxiv.org/abs/2611.14056
  - title: "Jung, Lai, Mooroogen: Fifty years of the Erdős similarity conjecture (arXiv:2412.11062, survey)"
    url: https://arxiv.org/abs/2412.11062
  - title: "Iosevich, Yavicoli: The geometric case of the Erdős Similarity Conjecture. A human exposition of the OpenAI proof (arXiv:2611.02454, preprint)"
    url: https://arxiv.org/abs/2611.02454
  - title: "Jiang, Xi: The Erdős similarity problem for null sequences with adjacent ratios bounded below (arXiv:2610.11449, preprint)"
    url: https://arxiv.org/abs/2610.11449
  - title: "Kolountzakis, Papageorgiou: Large sets containing no copies of a given infinite sequence (arXiv:2208.02637; Anal. PDE 18, 2025)"
    url: https://arxiv.org/abs/2208.02637
  - title: "Gao, Mooroogen, Yip: On an Erdős similarity problem in the large (arXiv:2311.06727; Bull. LMS 57, 2025)"
    url: https://arxiv.org/abs/2311.06727
  - title: "Iosevich, Kulkarni, Mora Cuéllar, Rojas Aravena, Yavicoli: The Erdős similarity conjecture and Rajchman measures (arXiv:2609.04456, preprint)"
    url: https://arxiv.org/abs/2609.04456
  - title: "Cruz, Lai, Pramanik: Large sets avoiding affine copies of infinite sequences (arXiv:2204.12720)"
    url: https://arxiv.org/abs/2204.12720
timeline:
  - date: 1974-01-01
    title: Erdős poses the conjecture
    body: Erdős asks whether an infinite set of reals can be contained, up to an affine copy, in every set of positive measure, writing that he hopes there are no such sets (year known, month not).
    source: https://arxiv.org/abs/2412.11062
  - date: 1984-01-01
    title: "Falconer and Eigen: sublacunary sequences"
    body: Falconer (1984) and Eigen (1985) independently show that decreasing sequences with $a_{n+1}/a_n\to1$ are not measure universal; faster-decaying sequences such as $2^{-n}$ stay open (year known, month not).
    source: https://arxiv.org/abs/2412.11062
  - date: 1987-01-01
    title: "Bourgain: sumsets of three infinite sets"
    body: Bourgain proves that $A_1+A_2+A_3$ is not measure universal for any infinite $A_1,A_2,A_3$, even when each is a very fast sequence (year known, month not).
    source: https://arxiv.org/abs/2412.11062
  - date: 2026-10-06
    title: OpenAI release on geometric progressions
    body: Per the Iosevich–Yavicoli abstract, OpenAI's release of 6 October 2026 claims a compact subset of [0,1] of measure arbitrarily close to one that avoids every affine copy of $\{q^n\}$; DARC has not examined the release itself, and no refereed version was found.
    source: https://arxiv.org/abs/2611.02454
  - date: 2026-10-08
    title: "Jiang–Xi: null sequences with ratios bounded below"
    body: Jiang and Xi post a 10-page preprint extending the geometric case to positive null sequences whose adjacent ratios are bounded below in the liminf sense.
    source: https://arxiv.org/abs/2610.11449
  - date: 2026-11-10
    title: Yip preprint on the unbounded 'in the large' variant
    body: Yip posts a 6-page preprint reporting that every unbounded set of reals is avoided by some closed set filling at least 1−ε of every unit interval. It addresses a question about unbounded sets, not the classical conjecture, which the preprint itself calls open.
    source: https://arxiv.org/abs/2611.14056
explainer:
  oneLine: Erdős conjectured that every infinite set of numbers can be dodged by some set of positive length; nobody has proved it in general.
  flow:
    - Finite sets always fit in positive-length sets
    - "Erdős: surely infinite sets can be dodged"
    - Slow-decay sequences dodged (1984–1997)
    - Geometric case 2^-n claimed 2026, unrefereed
    - "General infinite sets: still open"
  glossary:
    - term: Lebesgue measure
      meaning: The standard notion of length for sets of real numbers, extending interval length to far more complicated sets.
      link: https://en.wikipedia.org/wiki/Lebesgue_measure
    - term: affine copy
      meaning: "The image of a set under x → λx + t with λ ≠ 0: the set stretched or flipped, then slid along the line."
      link: https://en.wikipedia.org/wiki/Affine_transformation
    - term: Lebesgue density theorem
      meaning: At almost every point of a measurable set, tiny intervals around the point are almost entirely inside the set.
      link: https://en.wikipedia.org/wiki/Lebesgue%27s_density_theorem
    - term: measure universal
      meaning: A set that has an affine copy inside every set of positive Lebesgue measure. Finite sets are; the conjecture says no infinite set is.
      link: https://arxiv.org/abs/2412.11062
    - term: geometric progression
      meaning: A sequence where each term is the previous one times a fixed ratio, like 1, 1/2, 1/4, 1/8 and so on.
      link: https://en.wikipedia.org/wiki/Geometric_progression
    - term: Szemerédi's theorem
      meaning: Any set of whole numbers with positive upper density contains arithmetic progressions of every finite length.
      link: https://en.wikipedia.org/wiki/Szemer%C3%A9di%27s_theorem
    - term: probabilistic method
      meaning: Prove something exists by showing a random choice has a positive chance of working, without building it explicitly.
      link: https://en.wikipedia.org/wiki/Probabilistic_method
    - term: unbounded set
      meaning: A set of numbers with no upper limit on its size in absolute value, such as the integers or the powers of two.
      link: https://en.wikipedia.org/wiki/Unbounded_set
    - term: preprint
      meaning: A paper shared publicly before peer review; its claims have not yet been checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: "Jung, Lai, Mooroogen: Fifty years of the Erdős similarity conjecture (arXiv:2412.11062)"
      url: https://arxiv.org/abs/2412.11062
      why: A readable survey of the conjecture, its partial results and three variants, including the one in the large.
    - title: "Gao, Mooroogen, Yip: On an Erdős similarity problem in the large (arXiv:2311.06727)"
      url: https://arxiv.org/abs/2311.06727
      why: The refereed predecessor of the 2026 preprint, with the definition of large sets and the question being answered.
    - title: "Yip: A resolution of the Erdős similarity problem in the large (arXiv:2611.14056)"
      url: https://arxiv.org/abs/2611.14056
      why: Six pages; the introduction states the classical and the unbounded problems side by side, and the proof is elementary. Unrefereed.
    - title: Lebesgue's density theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Lebesgue%27s_density_theorem
      why: The tool behind the finite case, stated with examples.
site:
  aiReviewed: true
---

A **nontrivial affine copy** of a set $A\subset\mathbb R$ is a set $\lambda A+t=\{\lambda a+t: a\in A\}$ with $\lambda\ne0$ and $t\in\mathbb R$. Call $A$ **measure universal** if every Lebesgue measurable set of positive measure contains a nontrivial affine copy of $A$. Steinhaus's theorem (a consequence of the Lebesgue density theorem) says every finite set is measure universal. **Conjecture (Erdős, 1974).** No infinite set $A\subset\mathbb R$ is measure universal: for every infinite $A$ there is a set $E$ of positive Lebesgue measure with $\lambda A+t\not\subset E$ for all $\lambda\ne0$, $t\in\mathbb R$. Two reductions are standard: a superset of a non-universal set is non-universal, and no unbounded set is universal, so it suffices to treat strictly decreasing sequences $a_n\to0$ (Jung–Lai–Mooroogen, Section 1.1). The best-known unsettled instance was the geometric sequence $\{2^{-n}\}$. The **"in the large"** variant (arbitrary unbounded sets $A$, and sets $S$ that fill a proportion $1-\varepsilon$ of every unit interval) is a different question, tracked here as a claim and not part of this problem.

# State of the art

**Open in general; recent unrefereed claims cover geometric progressions.** Falconer (1984) and Eigen (1985) independently showed that sublacunary sequences ($a_{n+1}/a_n\to1$) are not measure universal. Bourgain (Israel J. Math. 1987) showed that a sumset $A_1+A_2+A_3$ of three infinite sets is never measure universal. Kolountzakis (Bull. LMS 1997) gave a probabilistic criterion that generalizes the sublacunary case and proved an almost-everywhere version: for every infinite $A$ there is a positive-measure $E$ such that $\{(\lambda,t):\lambda A+t\subset E\}$ has planar measure zero. Feng, Lai and Xiong proved that lacunary sequences are bi-Lipschitz measure universal while sublacunary ones are not, a bi-Lipschitz variant that does not settle the affine problem. The December 2024 survey of Jung, Lai and Mooroogen says the problem was still open for exponentially decaying sequences (and for Cantor sets with zero Newhouse thickness and zero Hausdorff dimension) and that whether $\{2^{-n}\}$ is measure universal 'has been the major bottleneck'. Svetic's survey (Real Anal. Exchange 26, 2000/01) is the standard account of 1974–1999. Since October 2026 there are unrefereed claims on the exponential side. OpenAI's release of 6 October 2026 claims that for each $q\in(0,1)$ there is a compact subset of $[0,1]$ of measure arbitrarily close to one with no affine copy of $\{q^n\}$; DARC knows this from the abstract of Iosevich and Yavicoli (arXiv:2611.02454, a 37-page preprint giving a human exposition of that proof) and from Yip's introduction, which calls it a claimed proof, and has not examined the release itself. Jiang and Xi (arXiv:2610.11449, preprint of 8 October 2026) report, for every positive null sequence with $\liminf a_{n+1}/a_n>0$, a compact subset of $[0,1]$ of measure greater than $1-\eta$ with no nontrivial affine copy of it, adapting a finite-tree construction for geometric sequences. None of the three has been refereed, as far as DARC found. If they hold, they settle geometric progressions, but the conjecture for arbitrary infinite sets remains open. On 10 November 2026 Yip posted a preprint (arXiv:2611.14056) on the separate unbounded 'in the large' variant: it reports that for every unbounded $A$ and every $0<\varepsilon<1$ there is a closed $(1-\varepsilon)$-large set with no nontrivial affine copy of $A$. Jung, Lai and Mooroogen write that no precise statement making the two problems equivalent is known, so this does not resolve the classical conjecture.

# Applications

None practical. The problem asks which infinite patterns every set of positive length must contain; it belongs to the study of patterns in measurable and fractal sets and has no engineering use. Its methods (probabilistic constructions on the circle, metric number theory, Fourier analysis of measures) are used elsewhere in analysis.

# Resolution criteria

A proof, accepted by experts and ideally refereed, that every infinite $A\subset\mathbb R$ fails to be measure universal; or an explicit infinite $A$ together with a proof that every set of positive Lebesgue measure contains an affine copy of it. Results for restricted classes of sequences (sublacunary, geometric, sumsets of three infinite sets), bi-Lipschitz or topological variants, and the unbounded 'in the large' variant do not resolve it.

# Rating rationale

Difficulty 70: fifty years of work, sparse progress beyond sublacunary sequences until the 2026 geometric-progression claims, and no line of attack known for arbitrary infinite sets; it sits just under the restriction conjecture in R^3 (72) and above the Kakeya problem in R^4 (62), and the new preprints lower the distance only for geometric-type sequences, still unrefereed. Application value 2: no foreseeable practical use (compare Erdős–Szekeres seven-gon at 1.8 and union-closed sets at 3.8). Leverage 24: a handful of results on patterns in measurable sets depend on it, in one subfield, and it gates no larger program.

# Work mix rationale

The remaining work is a new construction or a new obstruction for arbitrary infinite sets; a little computation may help explore constructions, and a formal proof is a minor engineering share once an argument exists.

# Verification

Refereeing by specialists in measure theory and probabilistic constructions. A reviewer checks: (1) the statement proved covers every infinite $A\subset\mathbb R$ (equivalently, by the standard reductions, every strictly decreasing null sequence including $\{2^{-n}\}$), with the avoiding set $E$ of positive Lebesgue measure and all affine copies $\lambda A+t$ with $\lambda\ne0$ excluded, not a bi-Lipschitz, topological or 'in the large' substitute; (2) the construction recovers the known cases (Falconer–Eigen sublacunary sequences, Kolountzakis's criterion, Bourgain's three-fold sumsets) and is consistent with the lacunary bi-Lipschitz universality of Feng–Lai–Xiong; (3) the probabilistic estimates (union bounds, independence, measure of the removed open set) are correct uniformly over the dilation range. There is no computation to reproduce; a Lean formalization would count as extra evidence, not as a replacement for the expert check.

# Plain explanation

Take any set of numbers on a line that has some positive length, like a union of intervals. Now take a few numbers, say 1, 2 and 5. You can always find a copy of those three numbers, stretched and slid along the line, sitting entirely inside your set. This is true for every set with positive length, however thin it looks, and it holds for any finite list.

In 1974 Paul Erdős asked what happens if the list never ends. He guessed that for every infinite list there is some set with positive length that no stretched and slid copy of the list fits inside. Nobody knows. It was open even for the list one half, one quarter, one eighth, and so on, although in October 2026 some unreviewed papers claimed to settle lists of that kind.

A different version of the question asks about lists that grow without bound, together with sets that cover nearly all of every stretch of the line. In November 2026 a six-page preprint reported that no list of that kind works. It has not been checked by outside experts, and it does not settle the original question.

A useful picture is a sieve. A set of positive length is a sieve with some holes. The conjecture says that for any infinite pattern of nails, you can design a sieve that still has holes but catches at least one nail every time the pattern is laid on it.

# Student explanation

**Setup.** Write $|E|$ for the **Lebesgue measure** of $E\subset\mathbb R$: the usual length, so an interval $[a,b]$ has $|E|=b-a$ and a finite set has $|E|=0$. An **affine copy** of a set $A$ is $\lambda A+t=\{\lambda a+t : a\in A\}$ with $\lambda\ne0$: stretch (or flip) by $\lambda$, then slide by $t$.

**Finite sets always fit.** Steinhaus showed that if $|E|>0$ and $A$ is finite, then $E$ contains some $\lambda A+t$. The reason is the Lebesgue density theorem: at almost every point of $E$, small intervals around it are almost entirely inside $E$. Shrink $A$ by a small $\lambda$ and place it there, and every point of the copy lands in the nearly-full interval, with room to spare for finitely many points.

**Conjecture (Erdős, 1974).** For every infinite $A\subset\mathbb R$ there is a set $E$ with $|E|>0$ containing no $\lambda A+t$. The proof for finite sets breaks because with infinitely many points, the small gaps that $E$ is allowed to have can be placed to catch the points of every copy.

**Reduction.** If $A$ is dodged by some $E$ then so is any larger set containing it, and an unbounded set can be dodged outright, so it is enough to treat sequences $a_n\downarrow0$. The hardest case was the geometric sequence $a_n=2^{-n}$: the survey by Jung, Lai and Mooroogen calls it the major bottleneck.

**What is known.** Falconer and Eigen proved it when $a_{n+1}/a_n\to1$ (the terms decay slowly). Kolountzakis gave a **probabilistic** construction: remove small random pieces from $[0,1]$ so that the expected number of copies that survive is below one, then conclude that some choice of pieces works. Bourgain proved that a sum $A_1+A_2+A_3$ of three infinite sets is always dodgeable. In October 2026, preprints reported the geometric case $\{q^n\}$ and null sequences with ratios bounded below; these are not yet refereed.

**The 'in the large' variant.** Call $S\subset\mathbb R$ $(1-\varepsilon)$-large if $|S\cap I|\ge1-\varepsilon$ for every unit interval $I$. Kolountzakis and Papageorgiou asked whether some unbounded increasing sequence fits inside every large set. A preprint of 10 November 2026 by Yip reports that none does: for any unbounded $A$ there is a closed $(1-\varepsilon)$-large $S$ with infinitely many points of every $\lambda A+t$ outside it. The survey literature says no theorem makes this equivalent to Erdős's problem, so it is a separate, unrefereed result.
