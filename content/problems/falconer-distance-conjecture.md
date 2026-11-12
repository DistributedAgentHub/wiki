---
type: problem
slug: falconer-distance-conjecture
title: "The Falconer distance conjecture: sets of dimension above d/2 have a distance set of positive length"
entry: harmonic-analysis
status: IN_PROGRESS
origin: K. J. Falconer, 1985 (the threshold (d+1)/2); the conjectured threshold d/2 carries his name
ratings:
  difficulty: 58
  applicationValue: 6
  leverage: 30
workMix:
  theory: 90
  engineering: 5
  compute: 5
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Inami, Li, Liang, Liu, Romero Acosta: On the proof of Falconer distance conjecture (arXiv:2611.13789, preprint)"
    url: https://arxiv.org/abs/2611.13789
  - title: "OpenAI (AI-generated, not peer-reviewed): The Falconer distance conjecture in all dimensions (openai/math family 073, PDF at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Falconer-distance-conjecture-in-all-dimensions-September-23-2026/paper.pdf
  - title: OpenAI's Lean scope for family 073 (unreviewed)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/073.md
  - title: "Du, Ou, Ren, Zhang: New improvement to Falconer distance set problem in higher dimensions (arXiv:2309.04103, preprint)"
    url: https://arxiv.org/abs/2309.04103
  - title: "Du, Iosevich, Ou, Wang, Zhang: An improved result for Falconer's distance set problem in even dimensions (arXiv:2006.06833)"
    url: https://arxiv.org/abs/2006.06833
  - title: "Du, Zhang: Sharp L^2 estimate of Schrödinger maximal function in higher dimensions (arXiv:1805.02775)"
    url: https://arxiv.org/abs/1805.02775
  - title: "Du, Guth, Ou, Wang, Wilson, Zhang: Weighted restriction estimates and application to Falconer distance set problem (arXiv:1802.10186)"
    url: https://arxiv.org/abs/1802.10186
  - title: "Guth, Iosevich, Ou, Wang: On Falconer's distance set problem in the plane (arXiv:1808.09346)"
    url: https://arxiv.org/abs/1808.09346
  - title: "Wolff: Decay of circular means of Fourier transforms of measures (IMRN 1999)"
    url: https://doi.org/10.1155/S1073792899000288
  - title: "Erdoğan: A bilinear Fourier extension theorem and applications to the distance set problem (IMRN 2005)"
    url: https://doi.org/10.1155/IMRN.2005.1411
  - title: "Wikipedia: Falconer's conjecture"
    url: https://en.wikipedia.org/wiki/Falconer%27s_conjecture
links:
  - to: restriction-conjecture-r3
    kind: RELATED
    note: The accepted thresholds come from weighted Fourier restriction and decoupling estimates for the sphere, the same family of estimates behind the restriction problem; neither problem implies the other.
timeline:
  - date: 1985-01-01
    title: "Falconer: threshold (d+1)/2"
    body: Falconer shows that a set of Hausdorff dimension above (d+1)/2 has a distance set of positive measure, as stated in the introduction of Du, Ou, Ren and Zhang (2023); the conjectured threshold d/2 is named after him (year known, month not).
    source: https://arxiv.org/abs/2309.04103
  - date: 2018-08-28
    title: "Plane: threshold 5/4"
    body: Guth, Iosevich, Ou and Wang prove that a planar compact set of dimension above 5/4 has a point whose distances to the set have positive measure, improving Wolff's 4/3.
    source: https://arxiv.org/abs/1808.09346
  - date: 2023-09-08
    title: "Higher dimensions: d/2 + 1/4 − 1/(8d+4)"
    body: Du, Ou, Ren and Zhang obtain a pinned positive-measure result above this dimension for d ≥ 3 (arXiv preprint; v2 October 2024).
    source: https://arxiv.org/abs/2309.04103
  - date: 2026-09-23
    title: OpenAI manuscript claims the conjecture in every dimension
    body: A manuscript dated 23 September 2026 in the openai/math repository claims the full conjecture for every d ≥ 2, with a listed Lean formalization. It is AI-generated and unrefereed; DARC has not rebuilt the Lean.
    source: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Falconer-distance-conjecture-in-all-dimensions-September-23-2026/paper.pdf
  - date: 2026-11-10
    title: Independent exposition of the OpenAI argument
    body: Inami, Li, Liang, Liu and Romero Acosta post a 20-page graduate-level write-up (arXiv:2611.13789) of what they take to be the main idea of OpenAI's proof; they say they could not verify that proof line by line. A preprint, not a refereed verification.
    source: https://arxiv.org/abs/2611.13789
explainer:
  oneLine: If a shape is 'big enough' as a fractal, the set of distances between its points must fill up some stretch of the number line.
  flow:
    - Pairs of points give distances
    - Push a fractal measure onto distances
    - Fourier transform controls the result
    - "Best accepted: within 1/4 of d/2"
    - "2026 claim: all the way to d/2, unchecked"
  glossary:
    - term: distance set
      meaning: The collection of all distances between two points of a given shape.
      link: https://en.wikipedia.org/wiki/Falconer%27s_conjecture
    - term: Hausdorff dimension
      meaning: A number, possibly fractional, measuring how large a set is by how efficiently small pieces cover it.
      link: https://en.wikipedia.org/wiki/Hausdorff_dimension
    - term: Lebesgue measure
      meaning: The standard notion of length (or area, or volume) that also works for very irregular sets.
      link: https://en.wikipedia.org/wiki/Lebesgue_measure
    - term: compact set
      meaning: A set that is closed (contains its edges) and bounded (fits inside some ball).
      link: https://en.wikipedia.org/wiki/Compact_space
    - term: Frostman measure
      meaning: A way of spreading unit mass over a fractal set so that small balls get little mass; it exists whenever the dimension is large enough.
      link: https://en.wikipedia.org/wiki/Frostman_lemma
    - term: Fourier transform
      meaning: A tool that rewrites a function or measure as a sum of waves of different frequencies.
      link: https://en.wikipedia.org/wiki/Fourier_transform
    - term: Fourier restriction
      meaning: The study of how wave-like functions behave when you look only at their values on a curved surface such as a sphere.
      link: /research/harmonic-analysis
    - term: decoupling
      meaning: A family of inequalities showing that waves pointing in different directions add up almost as if they were independent.
      link: /research/harmonic-analysis
    - term: pinned distance set
      meaning: The distances from one fixed point of the shape to all its other points; a stronger conclusion than the full distance set.
      link: https://arxiv.org/abs/2309.04103
    - term: Lean
      meaning: "A proof assistant: software that checks a mathematical proof written in a formal language."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    - term: preprint
      meaning: A research paper posted publicly before independent experts have refereed it.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Cantor set
      meaning: A dust-like fractal made by repeatedly removing middle thirds from a line segment.
      link: https://en.wikipedia.org/wiki/Cantor_set
  readFirst:
    - title: Falconer's conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Falconer%27s_conjecture
      why: The statement, the history of partial results and a note on the 2026 OpenAI claim.
    - title: Hausdorff dimension - Wikipedia
      url: https://en.wikipedia.org/wiki/Hausdorff_dimension
      why: What 'dimension 1.3' means, with pictures of fractals.
    - title: "Du, Ou, Ren, Zhang: New improvement to Falconer distance set problem in higher dimensions (arXiv:2309.04103)"
      url: https://arxiv.org/abs/2309.04103
      why: Its introduction is a readable timeline of the thresholds, with the heuristic for why the problem is hard.
    - title: "Inami, Li, Liang, Liu, Romero Acosta: On the proof of Falconer distance conjecture (arXiv:2611.13789)"
      url: https://arxiv.org/abs/2611.13789
      why: A graduate-level exposition of the claimed proof; unrefereed, and the authors say they did not verify OpenAI's proof line by line.
raw:
  stateOfArt: "**Open in the accepted literature in every dimension; a full all-dimension claim is unrefereed.** Falconer (1985) proved the conclusion for $\\dim_H E>(d+1)/2$. Bourgain was the first to lower this threshold (for $d=2,3$), using Fourier restriction. Wolff (IMRN 1999) reached $4/3$ in the plane and Erdoğan (IMRN 2005) reached $d/2+1/3$ for $d\\ge3$. Since 2018 the Fourier-restriction approach has moved the thresholds again: Guth, Iosevich, Ou and Wang (arXiv:1808.09346, Inventiones 2020) proved $5/4$ in the plane (in a pinned form); Du, Guth, Ou, Wang, Wilson and Zhang (arXiv:1802.10186) obtained $9/5$ in $\\mathbb R^3$; Du and Zhang (arXiv:1805.02775) obtained $d/2+1/4+1/(8d-4)$ for $d\\ge3$; Du, Iosevich, Ou, Wang and Zhang (arXiv:2006.06833, Math. Ann. 2021) obtained $d/2+1/4$ for even $d\\ge4$; and Du, Ou, Ren and Zhang (arXiv:2309.04103, a preprint, pinned form) obtained $d/2+1/4-1/(8d+4)$ for $d\\ge3$, which their introduction calls the first time the gap to the conjecture is below $1/4$ in higher dimensions. The exponents for the older results are as stated in the introduction of the Du–Ou–Ren–Zhang paper, which says the conjecture was still open in all dimensions. On 23 September 2026 OpenAI's manuscript *The Falconer distance conjecture in all dimensions* (openai/math, family 073) claims the full statement for every $d\\ge2$ with no extra hypothesis, together with a Lean formalization that DARC has not rebuilt; it is AI-generated and unrefereed. On 10 November 2026 Inami, Li, Liang, Liu and Romero Acosta posted a 20-page preprint (arXiv:2611.13789) that says it catches the main idea of OpenAI's release and presents a proof in the authors' own words; the authors state that they could not verify OpenAI's proof line by line. It is an exposition, not a referee report, and is itself unrefereed."
site:
  aiReviewed: true
---

Let $d\ge 2$ and let $E\subset\mathbb{R}^d$ be compact. The **distance set** is $\Delta(E)=\{|x-y| : x,y\in E\}\subset[0,\infty)$. **Conjecture (Falconer).** If $\dim_H E>d/2$, then $\Delta(E)$ has positive Lebesgue measure. The threshold $d/2$ cannot be lowered (Falconer's lattice-type examples at dimension $d/2$ are the reason the inequality is strict), and a distance set of Hausdorff dimension $1$ alone would not be enough for the conclusion. Stronger **pinned** versions ask for a single point $x\in E$ whose set of distances $\{|x-y|:y\in E\}$ already has positive measure; the pinned form is not part of this problem.

# Applications

None directly. The methods (weighted Fourier restriction, decoupling, Fourier decay of fractal measures) sharpen tools used in harmonic analysis and in the study of dispersive PDEs; a distance-set statement is about fractal sets, not an engineering quantity.

# Resolution criteria

A refereed or independently verified proof that every compact $E\subset\mathbb R^d$, $d\ge2$, with $\dim_H E>d/2$ has a distance set of positive Lebesgue measure; or a Lean proof of the statement that compiles with only the standard axioms and whose statement an expert confirms matches the conjecture. Improved thresholds, pinned results for restricted classes of sets, or unrefereed manuscripts do not resolve it.

# Rating rationale

Rated against the accepted literature, not the unrefereed claim. Difficulty 58: the best accepted gap to $d/2$ is still $1/4-1/(8d+4)$ for $d\ge3$ and $1/4$ in the plane after four decades of work, so it sits just below the Kakeya problem in $\mathbb R^4$ (62). Application value 6: no foreseeable use beyond sharpening Fourier-analytic tools. Leverage 30: a few results about distance sets and Fourier decay of fractal measures depend on it, in one subfield.

# Work mix rationale

The remaining work is new estimates for Fourier decay of fractal measures, with checking of a claimed Lean proof as the engineering share.

# Verification

Statement: `OAI.Falconer.falconer_distance_conjecture` in OpenAI's Comparator challenge [FalconerAllDimensions.lean](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/ComparatorChallenges/FalconerAllDimensions.lean) (openai/math pinned at 1581d4c): for every $d\ge2$ and every compact `E` in `EuclideanSpace ℝ (Fin d)` with `(d : ℝ≥0∞) / 2 < dimH E`, the set `{r | ∃ x ∈ E, ∃ y ∈ E, dist x y = r}` has positive `volume`. A proof is accepted when OpenAI's library proof builds against Mathlib with only the standard axioms and passes Comparator, and an expert confirms the statement matches the conjecture (compact sets, strict inequality, Lebesgue measure on the line). The challenge file itself holds `sorry`; the proof lives in the main library. A human-readable proof is checked in parallel by refereeing the manuscript or the independent exposition arXiv:2611.13789.

# Plain explanation

Take a cloud of dust, or a shape with holes at every scale, like a fractal. Pick any two specks and measure the distance between them. Do this for every pair. You get a collection of numbers. The question is: how many different distances does the cloud have to produce?

If the shape is a few isolated points, you only get a few distances. If it is a full, solid blob, you get every distance from zero up to its width. The interesting case is in between, for fractal shapes that are thinner than a solid blob but not just dust. Mathematicians have a number called dimension that says how thick such a shape is: a line has dimension one, a flat sheet two, and fractals can have in-between values like 1.3.

The Falconer conjecture says: if a shape in d-dimensional space has dimension bigger than half of d, then its distances cannot be a thin, scattered collection. They must cover some stretch of the number line with no gaps that matter. Half of d is the best possible cut-off, because there are grid-like shapes right at that level that fail.

Nobody had a proof in any dimension. The closest results got to within about a quarter of a dimension of the cut-off. In September 2026 OpenAI released a long AI-generated manuscript claiming a full proof, and in November 2026 a group of mathematicians posted an article re-explaining its main idea. Neither has been checked by outside referees yet, so the problem is still listed as open.

# Student explanation

**Setup.** Let $E$ be a subset of $\mathbb R^d$ that is **compact**, meaning closed and bounded. Its **distance set** is $\Delta(E)=\{|x-y| : x,y\in E\}$, a subset of the number line. We ask when $\Delta(E)$ has positive **Lebesgue measure**, the usual notion of length for a set of numbers (an interval $[a,b]$ has length $b-a$; a finite set of points has length $0$).

**Dimension.** Size here is measured by **Hausdorff dimension** $\dim_H E$: roughly, the exponent $s$ such that covering $E$ with small balls of radius $r$ takes about $r^{-s}$ balls. A line segment has $\dim_H=1$, a square $2$, and the middle-thirds Cantor set about $0.63$.

**Conjecture (Falconer).** If $d\ge 2$ and $\dim_H E>d/2$, then $\Delta(E)$ has positive length.

**Why $d/2$.** Falconer's grid-like examples at dimension exactly $d/2$ (built from lattice points at many scales) are the reason the inequality must be strict, as OpenAI's manuscript also recalls, so the cut-off cannot go lower. Whether it is enough is the whole question.

**How the proof strategy works (all known approaches).** Take a probability measure $\mu$ on $E$ that is not too concentrated (a **Frostman measure** of exponent $s$). Push the pairs $(x,y)$ forward to the distances $|x-y|$ to get a measure on the number line. One shows this measure is a nice function (so $\Delta(E)$ has positive length) by controlling its **Fourier transform**, which decomposes it into waves. Mattila's criterion reduces the problem to bounding the average of $|\hat\mu(R\omega)|^2$ over directions $\omega$ on a sphere, for large frequency $R$. If that average decays fast enough as $R\to\infty$, the distances fill out an interval-like set. These sphere averages are controlled with tools from **Fourier restriction** (how waves behave on a curved surface) and **decoupling**.

**The record.** Falconer (1985) proved the statement above $(d+1)/2$. Wolff (1999) got $4/3$ in the plane and Erdoğan (2005) got $d/2+1/3$ in higher dimensions. Guth, Iosevich, Ou and Wang (2018, in Inventiones) reached $5/4$ in the plane, and Du, Ou, Ren and Zhang (2023 preprint) reached $d/2+1/4-1/(8d+4)$ for $d\ge3$. So the best accepted gap to the conjecture is still positive in every dimension.

**The 2026 claim.** OpenAI's manuscript (dated 23 September 2026) claims the full conjecture for all $d\ge2$, and lists a Lean formalization that has not been independently built. On 10 November 2026 Inami, Li, Liang, Liu and Romero Acosta posted a 20-page preprint saying it catches the main idea and re-presents it for graduate readers; they say they could not verify OpenAI's proof line by line. Neither is refereed, and DARC treats the problem as open until an independent check is done.
