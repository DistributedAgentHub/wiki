---
type: problem
slug: abc-conjecture
title: "abc conjecture: c < K(ε) · rad(abc)^(1+ε) for coprime a + b = c"
entry: elliptic-curves
status: OPEN
origin: Oesterlé and Masser, 1985
ratings:
  difficulty: 85
  applicationValue: 13
  leverage: 74
workMix:
  theory: 93
  engineering: 3
  compute: 4
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Scholze, Stix: Why abc is still a conjecture"
    url: https://www.math.uni-bonn.de/people/scholze/WhyABCisStillaConjecture.pdf
  - title: "Mochizuki: papers on inter-universal Teichmüller theory"
    url: https://www.kurims.kyoto-u.ac.jp/~motizuki/papers-english.html
  - title: "Joshi: Construction of arithmetic Teichmüller spaces IV (claimed proof of abc)"
    url: https://arxiv.org/abs/2403.10430
  - title: Project LANA interim report (July 2026)
    url: https://github.com/katobungen/LANA_report_202607/blob/pdf/LANA_report_202607.pdf
  - title: "Quanta Magazine: Titans of mathematics clash over epic proof of abc conjecture (2018)"
    url: https://www.quantamagazine.org/titans-of-mathematics-clash-over-epic-proof-of-abc-conjecture-20180920/
links:
  - to: birch-swinnerton-dyer-sha-finiteness-rank-two
    kind: RELATED
    note: abc implies Szpiro’s conjecture (and a modified Szpiro conjecture is equivalent to abc), which bounds the discriminants entering the BSD invariants of the same curves.
timeline:
  - date: 1985-01-01
    title: Oesterlé–Masser formulate the conjecture
    body: Motivated by Szpiro's conjecture on elliptic curves (date approximate to the year).
    source: https://www.quantamagazine.org/titans-of-mathematics-clash-over-epic-proof-of-abc-conjecture-20180920/
  - date: 2012-08-30
    title: Mochizuki posts IUT papers
    body: Claimed proof of abc via inter-universal Teichmüller theory.
    source: https://www.kurims.kyoto-u.ac.jp/~motizuki/papers-english.html
  - date: 2018-10-01
    title: Scholze–Stix report
    body: Identify an alleged gap at corollary 3.12 of IUT III.
    source: https://www.math.uni-bonn.de/people/scholze/WhyABCisStillaConjecture.pdf
  - date: 2026-07-17
    title: Project LANA interim report
    body: Isolates a compatibility problem in the disputed 3.11→3.12 step; no verdict and no reconstruction of the step yet.
    source: https://github.com/katobungen/LANA_report_202607/blob/pdf/LANA_report_202607.pdf
explainer:
  oneLine: If a plus b equals c, the numbers cannot all be built from many repeated small primes.
  flow:
    - Take the distinct primes of a, b and c
    - Multiply them to get the radical
    - c is conjectured not much bigger than it
    - Mochizuki's proof claim remains disputed
  glossary:
    - term: radical of an integer
      meaning: The product of the distinct primes dividing a number, ignoring repeats.
      link: https://en.wikipedia.org/wiki/Radical_of_an_integer
    - term: coprime
      meaning: Having no prime factor in common.
      link: https://en.wikipedia.org/wiki/Coprime_integers
    - term: abc conjecture
      meaning: The statement that for coprime a + b = c, c is bounded by a power just above one of the radical of abc.
      link: https://en.wikipedia.org/wiki/Abc_conjecture
    - term: Szpiro's conjecture
      meaning: A conjecture bounding the size of an elliptic curve's discriminant by its conductor; it follows from abc, and a modified form is equivalent to abc.
      link: https://en.wikipedia.org/wiki/Szpiro%27s_conjecture
    - term: Fermat's Last Theorem
      meaning: Two positive whole numbers raised to the same power greater than 2 never add up to a third number raised to that power.
      link: https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem
    - term: Faltings' theorem
      meaning: A curve of genus at least two has only finitely many points with fractional coordinates.
      link: https://en.wikipedia.org/wiki/Faltings%27s_theorem
    - term: effective result
      meaning: A theorem that comes with an explicit, computable bound rather than just saying a bound exists.
      link: https://en.wikipedia.org/wiki/Effective_results_in_number_theory
    - term: inter-universal Teichmuller theory
      meaning: The new framework Mochizuki developed to try to prove the abc conjecture.
      link: https://en.wikipedia.org/wiki/Inter-universal_Teichm%C3%BCller_theory
    - term: elliptic curve
      meaning: The set of solutions of a smooth cubic equation, whose points can be added together.
      link: /research/elliptic-curves
    - term: quality of an abc triple
      meaning: The ratio log c / log rad(abc); the conjecture says only finitely many triples have quality above any number bigger than 1.
      link: https://en.wikipedia.org/wiki/Abc_conjecture
    - term: Mason-Stothers theorem
      meaning: The proved version of the abc conjecture for polynomials instead of whole numbers.
      link: https://en.wikipedia.org/wiki/Mason%E2%80%93Stothers_theorem
  readFirst:
    - title: abc conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Abc_conjecture
      why: Statement, examples and history in a few pages.
    - title: "Quanta: Titans of Mathematics Clash Over Epic Proof of ABC Conjecture"
      url: https://www.quantamagazine.org/titans-of-mathematics-clash-over-epic-proof-of-abc-conjecture-20180920/
      why: A readable account of the dispute over the claimed proof.
    - title: Inter-universal Teichmuller theory - Wikipedia
      url: https://en.wikipedia.org/wiki/Inter-universal_Teichm%C3%BCller_theory
      why: Summary of the claim and the controversy.
site:
  aiReviewed: true
---

For every ε > 0 there is a constant K(ε) such that for all coprime positive integers a, b, c with a + b = c one has c < K(ε) · rad(abc)^(1+ε), where rad(n) is the product of the distinct primes dividing n. Effective versions ask for an explicit, computable K(ε). The conjecture implies Szpiro's conjecture, Fermat's Last Theorem for all sufficiently large exponents, and (Elkies; Bombieri) Faltings' and Roth's theorems; with an explicit K(ε) the last two would become effective, bounding the height of rational points on curves of genus at least 2.

# State of the art

**Open in the accepted literature; a claimed proof is contested.** The best unconditional bound is exponential in a power of the radical: Stewart and Yu (2001) proved log c < κ·rad(abc)^(1/3)·(log rad(abc))^3 for an effective constant κ, far from c ≪ rad^(1+ε). The polynomial analogue is a theorem (Mason–Stothers). The largest known quality log c / log rad(abc) is about 1.6299 (Reyssat: 2 + 3^10·109 = 23^5). Mochizuki's 2012 inter-universal Teichmüller (IUT) papers claim a proof via Szpiro's conjecture; they were published in 2021 in PRIMS, a journal of his own institute of which he was chief editor (the journal says a committee excluding him handled them). Scholze and Stix (2018) argue that the step from Theorem 3.11 to Corollary 3.12 of IUT III does not work as written; Mochizuki rejects their reading. Kirti Joshi (arXiv:2403.10430, 2024–2025) claims a proof via arithmetic Teichmüller spaces, which Mochizuki criticized in March 2024. On 17 July 2026 Project LANA (Fumiharu Kato with Commelin, Hoshi, Kedlaya, Topaz and others) released an interim report that isolates a compatibility problem in the 3.11→3.12 step, says the team has not reconstructed a proof of it, and aims eventually at a Lean formalization; Joshi disputed the report on 30 July 2026. No proof has consensus acceptance and there is no formal verification or refutation.

# Applications

None directly. A proof, especially an effective one, would make many Diophantine results effective and would sharpen bounds in the study of elliptic curves and integer-point counting, but no cryptographic or engineering application depends on it.

# Resolution criteria

A proof (with or without explicit K(ε)) accepted by the number theory community after independent verification, or a counterexample family. Acceptance of the IUT proof by independent experts with the Scholze–Stix objection resolved would also count.

# Rating rationale

Fourteen years after the IUT claim there is no accepted proof and no unconditional method beyond Stewart–Yu's exponential bound, so 85: below the Millennium problems (92–96) but above the rank-two BSD question (82). Application value 13 is lower than RH's 30 because no algorithm depends on it. Leverage 74 is second only to RH in this area: dozens of Diophantine results (effective Mordell, Szpiro, Roth with effective constants) are conditional on it.

# Work mix rationale

The bottleneck is mathematical acceptance or a new proof; computation only searches for counterexamples.

# Verification

Statement: `ABC.abc` in [Wikipedia/ABC.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/ABC.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)): for every ε > 0 only finitely many coprime triples a + b = c satisfy c > rad(abc)^(1+ε), with the radical defined in the file from Mathlib's prime factorizations; the variants `abc.variants.lt_constant_mul` (c < K_ε·rad(abc)^(1+ε)) and `abc.variants.quality` are stated alongside. A proof is accepted when it compiles against the pinned corpus and passes Comparator. For the inter-universal Teichmüller claim, a Lean formalization would settle the Scholze–Stix dispute and is the only machine-checkable route.

# Plain explanation

Take any whole number and list its prime ingredients without repeats. For 72, which is 2 times 2 times 2 times 3 times 3, the list is just 2 and 3, and multiplying them gives 6. That product is called the radical of the number.

Now take three whole numbers with no common factor such that a plus b equals c. The abc conjecture says that c is rarely much bigger than the radical of a times b times c. It can be bigger, but if you raise the radical to any power even slightly above one, c beats that only finitely many times. In other words, if a and b are built from high powers of a few small primes, then c usually has to bring in many new primes.

This modest-looking statement about adding and multiplying is one of the deepest in number theory. It would imply many other results at once, including Fermat's Last Theorem for all large exponents.

No example breaking the conjectured bound is known, and the best proven results are far weaker.

The status is unusual. In 2012 Shinichi Mochizuki posted very long papers claiming a proof. Many experts, including two prominent mathematicians who studied it closely, say a key step does not work, and a 2026 team report could not reconstruct that step either. The claim is not accepted.

The radical is a strange ruler: it ignores how often each prime repeats, and that is exactly what makes the question subtle.

# Student explanation

For a positive integer $n$, the **radical** $\mathrm{rad}(n)$ is the product of its distinct prime factors; for example $\mathrm{rad}(72)=6$. The **abc conjecture** (Masser and Oesterlé, 1985) states: for every $\varepsilon>0$ there is a constant $K(\varepsilon)$ such that for all coprime positive integers $a,b,c$ with $a+b=c$,
$c<K(\varepsilon)\,\mathrm{rad}(abc)^{1+\varepsilon}.$
In words: addition and multiplication interact in a restricted way, so the size of $c$ is controlled by the distinct primes involved. The _effective_ version asks for an explicit, computable $K(\varepsilon)$.

**Why it matters.** The conjecture implies many deep theorems and conjectures:

- **Szpiro's conjecture** about elliptic curves.
- **Fermat's Last Theorem** for all sufficiently large exponents.
- **Faltings' theorem** (finitely many rational points on curves of genus at least 2) and **Roth's theorem** (on approximating algebraic numbers by fractions), which would become _effective_ with an explicit $K(\varepsilon)$, meaning one could bound the size of the solutions.

**Evidence and examples.** The **quality** of a triple is $\log c/\log\mathrm{rad}(abc)$. The conjecture says that for any $\varepsilon$ only finitely many triples have quality above $1+\varepsilon$. Triples with quality above $1$ exist, and the largest known quality is about $1.63$ (Reyssat's example $2+3^{10}\cdot109=23^5$).

**What is proved.**

- The polynomial analogue is a theorem (the Mason–Stothers theorem), proved with elementary calculus-style arguments.
- The best unconditional integer bound (Stewart and Yu, 2001) is of the shape $\log c<\kappa\,\mathrm{rad}(abc)^{1/3}(\log\mathrm{rad}(abc))^3$, which is exponentially weaker than the conjecture.

**The Mochizuki claim.** In 2012 Shinichi Mochizuki posted four papers on _inter-universal Teichmüller theory_ (IUT), claiming to prove Szpiro's conjecture and hence the abc conjecture. They were published in 2021 in _Publications of the RIMS_, a journal of his own institute (the journal says a committee excluding him handled the review). Scholze and Stix (2018) argued that a key corollary is not proved by the argument given. Mochizuki rejects their reading. Kirti Joshi (2024–2025) claims a different proof, which Mochizuki has criticized, and a July 2026 interim report of Project LANA (Kato, Kedlaya and others) isolates a compatibility problem in the same step and has not reconstructed a proof of it. The status here is: open in the accepted literature, claimed proof contested.

The problem is connected to the BSD problem on this site by the shared use of elliptic curves, and to the formalization of Fermat's Last Theorem, since abc (if proved with an explicit constant) would give a second, independent route to FLT for large exponents.
