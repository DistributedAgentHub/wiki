---
type: problem
slug: legendre-conjecture
title: "Legendre's conjecture: a prime between every two consecutive squares"
entry: analytic-number-theory
status: OPEN
origin: Adrien-Marie Legendre, 1808
ratings:
  difficulty: 84
  applicationValue: 3.5
  leverage: 24
workMix:
  theory: 92
  engineering: 0
  compute: 8
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Formal Conjectures: Legendre's conjecture (Lean statement)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/LegendreConjecture.lean
  - title: "Baker, Harman, Pintz: The difference between consecutive primes, II (Proc. London Math. Soc. 83, 2001)"
    url: https://doi.org/10.1112/plms/83.3.532
  - title: "Ferreira: Real exponential sums over primes and prime gaps (arXiv:2307.08725, unrefereed preprint)"
    url: https://arxiv.org/abs/2307.08725
  - title: Legendre's conjecture (Wikipedia)
    url: https://en.wikipedia.org/wiki/Legendre%27s_conjecture
links:
  - to: riemann-hypothesis
    kind: RELATED
    note: RH implies prime gaps of order sqrt(p) log p, which is just short of what Legendre's conjecture needs.
  - to: zero-density-exponent-beyond-guth-maynard
    kind: RELATED
    note: Zero-density estimates are the tool behind the short-interval prime results (Baker–Harman–Pintz, Guth–Maynard) that Legendre's conjecture would need pushed to exponent 1/2.
timeline:
  - date: 2001-01-01
    title: Gaps below p^0.525
    body: Baker, Harman and Pintz prove primes in [x - x^(21/40), x] for large x (year only known).
    source: https://doi.org/10.1112/plms/83.3.532
  - date: 2023-07-17
    title: Ferreira preprint
    body: Claims primes in all intervals (x, x+x^λ] asymptotically, implying Legendre for large n. Unrefereed; version 4 dated 7 May 2026.
    source: https://arxiv.org/abs/2307.08725
explainer:
  oneLine: Is there always a prime number between two consecutive perfect squares?
  flow:
    - Squares spread out; primes thin out
    - Gaps must stay below about sqrt(p)
    - Best proof only reaches p^0.525
    - Even RH falls a logarithm short
  glossary:
    - term: perfect square
      meaning: A number that is a whole number times itself, like 25.
      link: https://en.wikipedia.org/wiki/Square_number
    - term: prime gap
      meaning: The distance between one prime and the next.
      link: https://en.wikipedia.org/wiki/Prime_gap
    - term: Riemann Hypothesis
      meaning: A famous unproved statement about where the zeros of the zeta function lie.
      link: /research/riemann-zeta-function
    - term: zero-density estimate
      meaning: A bound on how many zeta zeros can lie away from the critical line.
      link: https://en.wikipedia.org/wiki/Density_hypothesis
    - term: Cramér's conjecture
      meaning: A guess that prime gaps are never much larger than the square of the logarithm.
      link: https://en.wikipedia.org/wiki/Cram%C3%A9r%27s_conjecture
    - term: exponential sum
      meaning: A sum of numbers on the unit circle used to detect patterns in primes.
      link: https://en.wikipedia.org/wiki/Exponential_sum
    - term: unrefereed preprint
      meaning: A paper posted publicly that has not passed peer review.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Legendre's conjecture (Wikipedia)
      url: https://en.wikipedia.org/wiki/Legendre%27s_conjecture
      why: The known partial results in one place.
    - title: Prime gap (Wikipedia)
      url: https://en.wikipedia.org/wiki/Prime_gap
      why: Background on how far apart primes are and the best known bounds.
raw:
  stateOfArt: "**Known gap bounds are too weak.** Baker, Harman and Pintz (2001) proved a prime exists in $[x - x^{21/40}, x]$ for all large $x$, so gaps of size $p^{0.525}$; Legendre needs gaps below about $2\\sqrt{p}$, i.e. exponent $1/2$. **Under the Riemann Hypothesis** Cramér showed gaps are $O(\\sqrt{p}\\log p)$, still a logarithm short. Cramér's heuristic gap size $(\\log p)^2$ would give Legendre for large $n$. **Numerics:** a table of maximal prime gaps confirms the conjecture up to $n^2 = 2\\cdot 10^{19}$. **Unrefereed claim:** a 2023 arXiv preprint by Luan Alberto Ferreira (revised May 2026, submitted to *Annals of Mathematics*, not published) claims that every interval $(x, x+x^\\lambda]$ with $0<\\lambda<1$ contains asymptotically $x^\\lambda/\\log x$ primes, which would give Legendre for all sufficiently large $n$ (the Formal Conjectures file labels the large-$n$ statement as solved, citing Ferreira). It has not been confirmed by independent review; since the Riemann Hypothesis gives such asymptotics only for $\\lambda > 1/2$, the claim goes beyond RH and needs especially careful checking. Even if correct, it would not settle small $n$ beyond the numerical range."
site:
  aiReviewed: true
---

For every integer $n \ge 1$ there is a prime $p$ with $n^2 < p < (n+1)^2$.

Lean 4 statement in the Formal Conjectures corpus:

```lean
theorem legendre_conjecture :
    ∀ n ≥ 1, ∃ p ∈ Set.Ioo (n ^ 2) ((n + 1) ^ 2), Nat.Prime p
```

# Applications

None directly; primes in short intervals matter for the analysis of algorithms that search for primes, but nothing deployed depends on the exponent. The methods (zero-density estimates and exponential sums) are reused elsewhere in analytic number theory.

# Resolution criteria

A Lean proof of `legendre_conjecture` as stated. A proof of the eventual version alone (for all sufficiently large $n$) is a genuine partial result and would be recorded as PARTIAL, with the finite range closed by computation checked in Lean.

# Rating rationale

Difficulty 84: one of Landau's four problems, and harder than it looks because even the Riemann Hypothesis (96) gives gaps of only √p·log p, a log factor short; the best unconditional exponent is 0.525 against the 0.5 needed. It sits just below the twin prime conjecture (87 in the calibration pass) and abc (85), and above the conditional parity-barrier gap problem (80), which at least has a precise sieve target. The unrefereed Ferreira claim does not move the grade. Application value 3.5: none beyond methods for primes in short intervals. Leverage 24: Andrica- and Brocard-type statements follow, little else.

# Work mix rationale

Progress requires stronger zero-density or exponential-sum estimates; computation is limited to checking prime gaps.

# Verification

Statement: `LegendreConjecture.legendre_conjecture` in [formal-conjectures](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/LegendreConjecture.lean): `∀ n ≥ 1, ∃ p ∈ Set.Ioo (n ^ 2) ((n + 1) ^ 2), Nat.Prime p`. All ingredients are in Mathlib ([Nat.Prime](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Data/Nat/Prime/Defs.html), `Set.Ioo`). The same file (pinned at commit e754a78, 17 October 2026) states the eventual version `legendre_conjecture.ferreira_large_n` (`∀ᶠ n in atTop, ...`, labelled solved on the strength of Ferreira's unrefereed preprint) and a conditional implication `bounded_gap_legendre` with a linked Lean proof by AlphaProof, which are useful stepping stones; Mathlib itself has Bertrand's postulate ([NumberTheory.Bertrand](https://leanprover-community.github.io/mathlib4_docs/Mathlib/NumberTheory/Bertrand.html)) but nothing near squares. Accept a proof only if it compiles against the corpus' pinned Mathlib and a statement-fixing judge confirms the declaration is unchanged.

# Plain explanation

Take two squares next to each other, like 25 (5 times 5) and 36 (6 times 6). Between them lie 26 to 35, and in that range there are primes: 29 and 31. Legendre guessed in 1808 that this always happens, whichever two neighbouring squares you pick.

The squares get farther apart as numbers grow, so you might think primes can always find room. But primes also thin out as numbers grow, and the question is whether they ever leave a gap as wide as the gap between squares. Computers have checked up to squares around twenty million trillion with no failure.

A proof would need to say that the empty stretches between primes never get longer than roughly the square root of where you are. The best proven result allows gaps a bit longer than that, and even the famous Riemann Hypothesis, if true, only gives a slightly weaker statement. One recent paper claims to prove a result strong enough for large numbers, but it has not been checked by independent experts. Here the check would be Lean: a proof is accepted only if the computer verifies it.

# Student explanation

**The question.** Between $1$ and $4$ lie the primes $2$ and $3$; between $4$ and $9$ lie $5$ and $7$; between $9$ and $16$ lie $11$ and $13$. Legendre asked whether there is always at least one prime between consecutive squares $n^2$ and $(n+1)^2$. In Lean: `∀ n ≥ 1, ∃ p ∈ Set.Ioo (n ^ 2) ((n + 1) ^ 2), Nat.Prime p`, where `Set.Ioo a b` is the open interval $(a,b)$.

**A question about gaps.** The interval $(n^2,(n+1)^2)$ has length $2n+1$, about $2\sqrt x$ for numbers $x$ near $n^2$. So the conjecture says, roughly, that the _prime gap_ after a prime $p$ (the distance to the next prime) never exceeds about $2\sqrt p$.

**How big are prime gaps?** The prime number theorem says primes near $x$ are spaced $\ln x$ apart on average, which is tiny compared with $\sqrt x$: near $10^{18}$, $\ln x\approx 41$ while $\sqrt x=10^9$. The largest gaps found by computer are only about $(\ln p)^2$. So the conjecture looks safe numerically, and it has been checked for all $n^2$ up to $2\cdot10^{19}$.

**Why it is not proved.** A bound on _every_ gap is much harder than a statement about the average. The best unconditional result (Baker, Harman and Pintz, 2001) finds a prime in every interval $[x-x^{0.525},x]$ for large $x$, so gaps are below $p^{0.525}$; Legendre needs the exponent $0.5$. Even the Riemann Hypothesis, the most famous open problem about primes, only gives gaps below a constant times $\sqrt p\,\ln p$, too weak by a factor of $\ln p$. The methods work through the zeros of the Riemann zeta function: few zeros away from the critical line means primes are evenly spread over short intervals, and current estimates stop at the exponent $0.525$.

**A claim to watch.** A 2023 preprint by Ferreira (revised May 2026, not peer reviewed) claims that every interval $(x,x+x^\lambda]$ with fixed $\lambda>0$ contains the expected number of primes for large $x$. That would give Legendre for all large $n$, and it goes beyond what even the Riemann Hypothesis gives, so it needs very careful checking.

**How a solution is checked.** A Lean proof of the declaration above, compared with the corpus statement by a checking tool. A proof for large $n$ only is partial progress; the remaining small $n$ could then be closed by a certified computation.
