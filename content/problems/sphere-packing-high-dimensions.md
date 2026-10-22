---
type: problem
slug: sphere-packing-high-dimensions
title: "Exponential rate of the densest sphere packing in ℝ^d: between d² 2^(−d) and 2^(−0.599d)"
entry: lattices-sphere-packing
status: PARTIAL
origin: Kepler, 1611; Minkowski and Rogers lineage
ratings:
  difficulty: 76
  applicationValue: 26
  leverage: 42.5
workMix:
  theory: 88
  engineering: 2
  compute: 10
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Viazovska: The sphere packing problem in dimension 8"
    url: https://arxiv.org/abs/1603.04246
  - title: "Cohn, Elkies: New upper bounds on sphere packings I"
    url: https://arxiv.org/abs/math/0110009
  - title: "Campos, Jenssen, Michelen, Sahasrabudhe: A new lower bound for sphere packing"
    url: https://arxiv.org/abs/2312.10026
  - title: "Klartag: Lattice packing of spheres in high dimensions using a stochastically evolving ellipsoid"
    url: https://arxiv.org/abs/2504.05042
  - title: "Cohn, Kumar, Miller, Radchenko, Viazovska: The sphere packing problem in dimension 24"
    url: https://arxiv.org/abs/1603.06518
  - title: "OpenAI: Ten Advances in Mathematics and Theoretical Computer Science (unrefereed)"
    url: https://cdn.openai.com/pdf/ten-proofs-oai-original.pdf
  - title: "Hariharan et al.: Progress in formalizing sphere packing in dimension 8"
    url: https://arxiv.org/abs/2604.23468
  - title: "Scientific American (17 Sep 2026): OpenAI’s claimed Cohn–Elkies asymptotics and expert reactions"
    url: https://www.scientificamerican.com/article/openai-cracks-the-hidden-math-that-keeps-your-texts-from-turning-to-gibberish/
links:
  - to: lwe-quantum-hardness
    kind: RELATED
    note: Lattice cryptography depends on the hardness of lattice problems; packing and kissing bounds enter sieving cost models, though no implication is known.
timeline:
  - date: 2016-03-14
    title: E8 packing is optimal
    body: Viazovska, via modular forms.
    source: https://arxiv.org/abs/1603.04246
  - date: 2023-12-15
    title: First asymptotic improvement to Rogers' bound
    body: Campos–Jenssen–Michelen–Sahasrabudhe.
    source: https://arxiv.org/abs/2312.10026
  - date: 2025-04-07
    title: Klartag lattice packings of density d² 2^(−d)
    body: Further improvement by a factor d/log d.
    source: https://arxiv.org/abs/2504.05042
  - date: 2026-08-01
    title: Claimed upper-bound exponent 0.6044 (unrefereed)
    body: OpenAI claim about the Cohn–Elkies program.
    source: https://cdn.openai.com/pdf/ten-proofs-oai-original.pdf
explainer:
  oneLine: How fast does the best possible packing density of balls shrink as the number of dimensions grows? The gap between bounds is huge.
  flow:
    - Pack equal balls in d dimensions
    - Best density falls exponentially with d
    - Constructions give rate 1, bounds give 0.599
    - True exponential rate is unknown
  glossary:
    - term: sphere packing
      meaning: An arrangement of equal, non-overlapping balls in space.
      link: https://en.wikipedia.org/wiki/Sphere_packing
    - term: packing density
      meaning: The fraction of space covered by the balls in a packing.
      link: https://en.wikipedia.org/wiki/Sphere_packing#Dense_packing
    - term: lattice packing
      meaning: A packing whose ball centres form a regularly repeating grid.
      link: https://en.wikipedia.org/wiki/Lattice_(group)
    - term: Cohn-Elkies linear programming bound
      meaning: An upper limit on packing density found by constructing a special function satisfying certain inequalities.
      link: https://en.wikipedia.org/wiki/Sphere_packing#Upper_bounds
    - term: Kabatiansky-Levenshtein bound
      meaning: The 1978 upper bound on packing density, still the best known in high dimensions.
      link: https://en.wikipedia.org/wiki/Kissing_number
    - term: exponential rate
      meaning: How fast a quantity shrinks or grows, measured by the logarithm of the quantity divided by the dimension.
      link: https://en.wikipedia.org/wiki/Exponential_decay
    - term: error-correcting code
      meaning: A way of adding structure to messages so that errors from noise can be detected and fixed.
      link: https://en.wikipedia.org/wiki/Error_correction_code
    - term: Minkowski-Hlawka theorem
      meaning: A result showing that lattices with a certain minimum density exist, proved using averaging over all lattices.
      link: https://en.wikipedia.org/wiki/Minkowski%E2%80%93Hlawka_theorem
    - term: lattice-based cryptography
      meaning: Encryption whose security relies on how hard it is to find short vectors in a lattice.
      link: https://en.wikipedia.org/wiki/Lattice-based_cryptography
    - term: Lattices and sphere packing
      meaning: The background topic on exact packing results.
      link: /research/lattices-sphere-packing
  readFirst:
    - title: "Quanta: Sphere packing solved in higher dimensions"
      url: https://www.quantamagazine.org/sphere-packing-solved-in-higher-dimensions-20160330/
      why: Account of the dimension 8 and 24 results.
    - title: Sphere packing - Wikipedia
      url: https://en.wikipedia.org/wiki/Sphere_packing
      why: Overview, including the high-dimension bounds.
    - title: Lattices and sphere packing (research entry)
      url: /research/lattices-sphere-packing
      why: Background on the exact solutions.
site:
  aiReviewed: true
---

Let Δ_d be the supremum of the density of packings of unit balls in ℝ^d. Determine the exponential rate lim −(1/d) log₂ Δ_d, if it exists. The best known bounds put it between 1 (from lattice packings of density about d² 2^(−d)) and about 0.599 (Kabatiansky–Levenshtein). A specific sub-problem is the asymptotic strength of the Cohn–Elkies linear programming bound.

# State of the art

**Exactly solved only in dimensions 1, 2, 3, 8 and 24.** Hales proved d = 3 (Annals 2005, with Ferguson), with the Flyspeck formal proof published in 2017; Viazovska proved d = 8 (arXiv 2016) and Cohn, Kumar, Miller, Radchenko and Viazovska d = 24, using the linear programming bound of Cohn and Elkies (2003). The best lower bounds for general packings are (1−o(1)) d log d / 2^(d+1) (Campos, Jenssen, Michelen and Sahasrabudhe, arXiv December 2023), the first asymptotic improvement over Rogers' 1947 bound. Klartag (arXiv April 2025) showed lattice packings of density at least c d² 2^(−d) exist. The best upper bound for 48 years was Kabatiansky–Levenshtein (1978), density at most 2^(−0.5990...d+o(d)); Cohn–Zhao showed the Cohn–Elkies method is at least as strong. On 1 August 2026 OpenAI released a document claiming that the Cohn–Elkies linear program has exact asymptotic strength sqrt(e/(2π)) per dimension, which would give Δ_d ≤ 2^(−(0.6044...+o(1))d), the first exponent improvement since 1978 and a limit for the method; the rate was conjectured in 2020 by Afkhami-Jeddi, Cohn, Hartman, de Laat and Tajdini; the work is unrefereed, and Scientific American (17 September 2026) reported that experts had only partly checked the accompanying Lean files. The gap between exponents about 0.60 and 1 remains. The dimension-8 proof was formally verified in Lean in February 2026 (Hariharan, Viazovska et al., with Math Inc.).

# Applications

Packing and kissing bounds feed error-correcting codes and the heuristic cost models of lattice sieving attacks. No deployed system depends on the exact asymptotics.

# Resolution criteria

A proof that the exponential rate exists and equals a specific constant, or a verified improvement of the Kabatiansky–Levenshtein exponent by any method. Unrefereed claims do not count until verified.

# Rating rationale

Even the exponential rate is unknown: the upper exponent stood for 48 years and the 2026 improvement is an unrefereed claim that itself marks the limit of linear programming, while lower bounds move by polynomial factors. Difficulty 76 sits just below diagonal Ramsey (78) and above cap sets (58). Application value 26 is second in the area after RH (codes, lattice-cryptanalysis cost models); leverage 42.5 as calibrated.

# Work mix rationale

New constructions or bounds; numerics only suggest conjectures.

# Verification

The target is the exponential rate of the densest sphere packing in ℝ^d, or an improvement of the Kabatiansky–Levenshtein exponent. No Lean statement of the asymptotic rate exists in Mathlib or Formal Conjectures (Formal Conjectures pinned at commit e754a78 (17 October 2026)); the corpus does state the Cohn–Elkies linear-programming scheme ([GreensOpenProblems/42.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/GreensOpenProblems/42.lean), solved for d = 1, 2, 8, 24), which covers the pack's sub-problem in fixed dimensions but not its asymptotics. Proofs go to referees; an explicit packing for a given d can be checked exactly but gives only lower bounds.

# Plain explanation

In ordinary space, balls packed in the best way fill about three quarters of the space. In higher dimensions the fraction filled by the best packing shrinks, and shrinks very fast. The question here is how fast.

Mathematicians phrase it as a rate: for each extra dimension, by roughly what factor does the best density drop? Today we only know the factor lies between two numbers that are far apart. The lower limit comes from arrangements known to exist, mostly found by clever random choices. Work in 2023 and 2025 improved these arrangements, but only by modest factors that do not change the rate. The upper limit, from Kabatiansky and Levenshtein in 1978, comes from arguments showing nothing denser is possible, and it has stood since. An August 2026 manuscript claims a slight improvement to it; experts have only partly checked it.

Why do people care? High-dimensional packings are closely related to error-correcting codes, ways to send messages over a noisy channel so that mistakes can be fixed. They also connect to encryption built on lattices, designed to resist quantum computers.

Our intuition fails here: in high dimensions almost all the volume of a ball sits near its surface, so the orange-stall picture of packing is a poor guide.

So the exact rate is unknown. We only know it lies between the two limits.

# Student explanation

**Statement.** Let $\Delta_d$ be the supremum of the density of packings of unit balls in $\mathbb R^d$. Determine the exponential rate $\lim_{d\to\infty}-\frac1d\log_2\Delta_d$, if it exists. The best known bounds place it between $0.599\ldots$ (from the upper bound of Kabatiansky and Levenshtein) and $1$ (from lattice packings of density about $d^22^{-d}$). A specific sub-problem is the asymptotic strength of the **Cohn–Elkies linear programming bound**.

**Exactly solved cases.** The densest packing is known only in dimensions $1,2,3,8,24$. Hales proved $d=3$ (Annals 2005, with Ferguson), with the Flyspeck formal proof published in 2017. Viazovska proved $d=8$ (arXiv 2016), and Cohn, Kumar, Miller, Radchenko and Viazovska proved $d=24$, using the linear programming bound of Cohn and Elkies (2003).

**Lower bounds (constructions).**

- Minkowski and Hlawka: lattice packings of density at least $2\zeta(d)2^{-d}\approx2\cdot2^{-d}$ exist; Rogers (1947) improved this to about $c\,d\,2^{-d}$. The idea is the probabilistic method: a randomly chosen lattice does this well on average.
- Campos, Jenssen, Michelen and Sahasrabudhe (arXiv Dec 2023) proved $(1-o(1))\,d\log d\,/\,2^{d+1}$ for general packings, the first asymptotic improvement over Rogers' bound.
- Klartag (arXiv April 2025) showed lattice packings of density at least $c\,d^2 2^{-d}$ exist, a further polynomial gain.

Notice that all of these gains are in the _polynomial factor_ in front of $2^{-d}$. The exponential rate $1$ has not changed. So the question about the rate is equivalent to asking if packings can be exponentially denser than $2^{-d}$.

**Upper bounds.** Kabatiansky and Levenshtein (1978) proved density at most $2^{-0.599d}$ up to lower-order factors, using bounds from coding theory. It was the best upper bound for decades. The Cohn–Elkies linear programming bound is at least as strong (Cohn–Zhao), but its exact asymptotic strength is not established. On 1 August 2026 OpenAI released a manuscript claiming that strength exactly, which would give density at most $2^{-0.6044d}$ up to lower-order terms: the first exponent improvement since 1978, and a proof that the method can go no further. It is unrefereed, and experts had only partly checked its Lean files by September 2026.

**What a solution needs.** Either a construction of packings with density exponentially larger than $2^{-d}$, or an upper bound showing the rate must be close to $1$. Both would be major news: the first because random constructions are expected to be near optimal, the second because it would require new, stronger methods than LP bounds in their present use.

**Connections.** Packings correspond to error-correcting codes; the problem is a geometric cousin of finding the capacity of channels. Lattice-based cryptography rests on the hardness of finding short vectors, a related question.
