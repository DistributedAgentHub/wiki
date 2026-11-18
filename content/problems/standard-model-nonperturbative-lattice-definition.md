---
type: problem
slug: standard-model-nonperturbative-lattice-definition
title: Is there a gauge-invariant, local, reflection-positive lattice definition of the Standard Model's chiral gauge theory with a controlled continuum limit?
entry: lattice-chiral-gauge-theories
status: OPEN
origin: Nielsen and Ninomiya, 1981 (doubling no-go theorem); Ginsparg and Wilson, 1982; Lüscher, 1998 (abelian measure construction, hep-lat/9811032)
ratings:
  difficulty: 78
  applicationValue: 15
  leverage: 50
sources:
  - title: "Craig: A gauge-invariant measure for lattice chiral fermions (arXiv:2610.09093v1, preprint)"
    url: https://arxiv.org/abs/2610.09093
  - title: "Craig: mathematical companion and Lean formalization (Zenodo archive, author-reported)"
    url: https://doi.org/10.5281/zenodo.23196062
  - title: "Witten: A Note On Lattice Definition of Gauge Theories With Chiral Fermions (arXiv:2611.05051)"
    url: https://arxiv.org/abs/2611.05051
  - title: "Hsu: The Standard Model on a finite bosonic lattice with continuum Weyl fermions (arXiv:2610.29019)"
    url: https://arxiv.org/abs/2610.29019
  - title: "Liu: Matching lattice and continuum chiral determinants at finite volume (arXiv:2611.16544)"
    url: https://arxiv.org/abs/2611.16544
  - title: "Lüscher: Abelian chiral gauge theories on the lattice with exact gauge invariance (hep-lat/9811032)"
    url: https://arxiv.org/abs/hep-lat/9811032
  - title: "Lüscher: Weyl fermions on the lattice and the non-abelian gauge anomaly (hep-lat/9904009)"
    url: https://arxiv.org/abs/hep-lat/9904009
  - title: "Kadoh, Kikukawa: A construction of the Glashow-Weinberg-Salam model on the lattice with exact gauge invariance (arXiv:0709.3658)"
    url: https://arxiv.org/abs/0709.3658
  - title: "Woit: AI and Chiral Fermions (blog post, 8 Oct 2026)"
    url: https://www.math.columbia.edu/~woit/wordpress/?p=15915
  - title: "Craig: guest post on the OpenAI science blog, 15 Nov 2026 (could only be opened in a browser by the coordinator)"
    url: https://openai.com/index/step-toward-defining-the-standard-model/
links:
  - to: yang-mills-mass-gap
    kind: RELATED
    note: Both concern defining a four-dimensional gauge theory nonperturbatively; this one is about regularizing chiral fermions, the other about the pure gauge continuum limit and mass gap.
timeline:
  - date: 1998-11-25
    title: Lüscher's abelian construction
    body: Exactly gauge-invariant measure for abelian chiral lattice gauge theories with Ginsparg–Wilson fermions.
    source: https://arxiv.org/abs/hep-lat/9811032
  - date: 2026-10-06
    title: "Craig preprint: gauge-invariant overlap measure for SU(5) and the Standard Model (unrefereed)"
    body: Claims a smooth gauge-covariant, exponentially local measure current on admissible gauge fields of a finite periodic 4D lattice. Reflection positivity and the continuum limit are explicitly left open. Credits OpenAI's GPT-6 Astra; Lean archive on Zenodo.
    source: https://arxiv.org/abs/2610.09093
  - date: 2026-10-21
    title: "Hsu: Standard Model on a bosonic lattice with continuum Weyl fermions (preprint)"
    body: A variant whose gauge and Higgs fields are on a lattice and fermions are continuum Weyl fermions; argues reflection positivity at zero Yukawa coupling for a modified reconstruction. Unrefereed (v2 6 Nov 2026).
    source: https://arxiv.org/abs/2610.29019
  - date: 2026-11-03
    title: Witten's note on lattice definitions of chiral gauge theories
    body: Witten describes a variant with continuum chiral fermions and an eta-invariant phase, and says in his introduction that Craig constructed a lattice regularization general enough to encompass the Standard Model. Not a line-by-line check of Craig's proof.
    source: https://arxiv.org/abs/2611.05051
  - date: 2026-11-12
    title: "Liu: lattice and continuum chiral determinants match at finite volume (preprint)"
    body: For one SU(5) generation on a flat four-torus, argues Craig's overlap weights and the Hsu–Witten continuum determinant agree in the continuum limit along smooth gapped paths. Unrefereed.
    source: https://arxiv.org/abs/2611.16544
  - date: 2026-11-15
    title: Craig's guest post on the OpenAI science blog
    body: Craig calls the result far more an answer in principle than in practice and says he is studying reflection positivity at finite lattice spacing. Lattice field theorists Golterman, Kronfeld and Shamir looked over the proof and asked questions, which the post does not present as verification. The page could only be opened in a browser.
    source: https://openai.com/index/step-toward-defining-the-standard-model/
explainer:
  oneLine: Can the full Standard Model, left-handed weak force included, be defined exactly on a lattice and then made smooth?
  flow:
    - Weak force is chiral
    - Lattice breaks chirality or doubles fermions
    - Overlap fermions keep chiral symmetry
    - Gauge-invariant measure claimed in finite box
    - Reflection positivity and continuum limit open
  glossary:
    - term: overlap fermion
      meaning: A lattice fermion built from the Wilson operator that obeys the Ginsparg–Wilson relation and has exact lattice chiral symmetry.
      link: https://en.wikipedia.org/wiki/Ginsparg%E2%80%93Wilson_equation
    - term: Ginsparg–Wilson relation
      meaning: An equation for the lattice Dirac operator that keeps a deformed chiral symmetry and avoids doubling.
      link: https://en.wikipedia.org/wiki/Ginsparg%E2%80%93Wilson_equation
    - term: fermion measure
      meaning: The rule for weighting fermion field configurations in the path integral, which must be gauge invariant.
      link: https://en.wikipedia.org/wiki/Lattice_gauge_theory
    - term: Weyl fermion
      meaning: A massless fermion with a definite handedness, the building block of a chiral gauge theory.
      link: https://en.wikipedia.org/wiki/Chirality_(physics)
    - term: anomaly cancellation
      meaning: The requirement that quantum corrections break no gauge symmetry; it fixes the Standard Model's charges.
      link: https://en.wikipedia.org/wiki/Gauge_anomaly
    - term: reflection positivity
      meaning: A property that lets a Euclidean lattice theory define a unitary quantum theory in real time.
      link: https://en.wikipedia.org/wiki/Reflection_positivity
    - term: continuum limit
      meaning: What remains when the lattice spacing is shrunk to zero while physical quantities are held fixed.
      link: https://en.wikipedia.org/wiki/Lattice_gauge_theory
    - term: quantum field theory
      meaning: The framework that treats particles as excitations of fields; the Standard Model is one.
      link: /research/quantum-field-theory
  readFirst:
    - title: "Woit: AI and Chiral Fermions"
      url: https://www.math.columbia.edu/~woit/wordpress/?p=15915
      why: A critical but readable account of what the preprint does and does not do.
    - title: Fermion doubling (Wikipedia)
      url: https://en.wikipedia.org/wiki/Fermion_doubling
      why: Why the problem exists.
    - title: Gauge anomaly (Wikipedia)
      url: https://en.wikipedia.org/wiki/Gauge_anomaly
      why: The obstruction the construction has to avoid.
    - title: "Witten: A Note On Lattice Definition of Gauge Theories With Chiral Fermions"
      url: https://arxiv.org/abs/2611.05051
      why: An expert follow-up with an introduction to the setting.
raw:
  student: "**What is asked.** Find a lattice version of the Standard Model such that (1) the gauge symmetry $[SU(3)\\times SU(2)\\times U(1)]/\\Gamma$ is exact at finite lattice spacing $a$, (2) the fermion integral is defined and local, (3) the Euclidean theory is *reflection positive* (a condition that guarantees a physical, unitary theory in real time), and (4) a continuum limit $a\\to0$ exists and is the interacting chiral gauge theory. Nobody has all four. Steps (1) and (2) are what a 2026 preprint claims in a finite box; (3) and (4) are open.\n\n**Why chirality is the obstacle.** On a lattice, fermions come with doublers (Nielsen–Ninomiya), and the standard cure breaks chiral symmetry. The overlap operator keeps it via the Ginsparg–Wilson relation $\\gamma_5 D+D\\gamma_5=aD\\gamma_5D$. For a single left-handed Weyl fermion, overlap gives a projector $\\hat P_-(U)$ that depends on the gauge field $U$. The fermion integral then needs a measure that depends on $U$ too. Following Lüscher, a smooth gauge-invariant measure exists if a *current* on the space of gauge fields is local, gauge covariant and satisfies an integrability condition, essentially that its curl vanishes so that it is the derivative of a phase. A nonzero curl is a gauge anomaly. For the Standard Model, anomalies cancel between quarks and leptons, so this is not blocked in principle.\n\n**Craig's 2026 proposal (arXiv:2610.09093).** The preprint builds the current by comparing chiral projectors on lattices of spacing $1/3, 1/9,\\dots$ of a reconstructed connection, claims it is exponentially local and satisfies integrability for gauge fields whose plaquettes are all near the identity, and so yields the measure for $SU(5)$ with matter $\\mathbf{10}\\oplus\\bar{\\mathbf5}$, hence for the Standard Model by restriction. In the picture Craig uses in his OpenAI post, left-circular light bounces around a box of mirrors: it stays left-circular on each lap, and what must be controlled is the phase the wave picks up after the lap. The measure plays that role for the fermions.\n\n**What is and is not established.** The preprint is unrefereed. The paper describes its proof as Astra-led (OpenAI's GPT-6 Astra), from a strategy Craig proposed, with a Lean 4 archive on Zenodo whose match with the paper was reviewed by AI agents. No public CI was found, so it should not be called machine-checked. Per the paper, reflection positivity is not established and the continuum theory is open. Witten (Nov 2026) wrote a variant using continuum fermions and noted that Monte Carlo cannot be used since the weight is not positive. Hsu and Liu have posted related preprints."
site:
  aiReviewed: true
---

Fix a gauge group $G=[SU(3)\times SU(2)\times U(1)]/\Gamma$ and an anomaly-free set of chiral fermion representations (the Standard Model's, any number of generations). **Problem:** construct a lattice regularization at spacing $a$ such that (i) the gauge symmetry is exact at finite $a$ and the fermion integral is defined for all gauge fields in a region that does not shrink as the volume grows, (ii) the fermion measure is local, with a phase fixed canonically on each component of the space of gauge fields, (iii) the Euclidean theory is reflection positive at finite $a$ (so it defines a unitary Lorentzian theory), and (iv) correlation functions have a continuum limit $a\to0$ that is an interacting chiral gauge theory with the right symmetries and anomalies. The finite-volume measure for overlap fermions in (i) and (ii) has been claimed in a 2026 preprint on admissible gauge fields only (every plaquette close to the identity); the full space of gauge fields, reflection positivity, and the infinite-volume and continuum limits are not established. The continuum limit of the bosonic gauge theory itself in 4D is a separate open problem (the Yang–Mills existence problem).

# State of the art

**Refereed background.** The Nielsen–Ninomiya theorem (1981) forbids a local, translation-invariant, hermitian, chirally symmetric lattice action with a single Weyl fermion. Ginsparg–Wilson fermions (1982; exact lattice chiral symmetry shown by Lüscher 1998) and the overlap operator avoid it. Lüscher (hep-lat/9811032, 1998) obtained an exactly gauge-invariant measure for abelian theories; his 1999 paper (hep-lat/9904009) addressed Weyl fermions and the non-abelian anomaly; Kadoh and Kikukawa (arXiv:0709.3658, JHEP 2008) reported a construction for the Glashow–Weinberg–Salam model. **Unrefereed 2026 work.** Craig (arXiv:2610.09093, 6 Oct 2026, 60+63 pages) claims in Theorem 4.1 and Sections 10 and 11 a smooth gauge-covariant, exponentially local measure current satisfying Lüscher's integrability condition for overlap fermions on a finite periodic 4D lattice, on admissible gauge fields, with the measure fixed up to a constant phase per connected component; this covers $SU(5)$ with $\mathbf{10}\oplus\bar{\mathbf5}$ and, by restriction, the Standard Model gauge group with any number of generations. The method compares chiral projectors of the overlap operator on successively finer lattices (spacings $1/3, 1/9,\dots$) of a locally reconstructed connection. The paper states that reflection positivity is not established, that per-component phases are left to fix, and that a definition of the interacting continuum theory remains open. OpenAI's GPT-6 Astra is credited as essential; a Lean 4 formalization and mathematical companion are archived on Zenodo, and the paper says their correspondence with the paper was reviewed by AI agents. No public continuous-integration record was found, so DARC does not call the result machine-checked. Witten (arXiv:2611.05051, 3 Nov 2026) gives a variant with continuum chiral fermions, notes that the path integral is not positive so Monte Carlo cannot handle it, and in his introduction credits Craig with a lattice regularization general enough to cover the Standard Model; this is not a line-by-line check of the proof. Hsu (arXiv:2610.29019) argues reflection positivity at zero Yukawa coupling and zero theta for a modified reconstruction whose equivalence with Craig's is unproven, and Liu (arXiv:2611.16544) compares the lattice and continuum determinants for one $SU(5)$ generation at finite volume. Woit (blog, 8 Oct 2026) calls the advance modest. Craig's guest post (OpenAI, 15 Nov 2026) calls the result an answer in principle rather than in practice and says he is studying reflection positivity at finite lattice spacing.

# Applications

None direct. A controlled nonperturbative definition would put the electroweak sector on firmer mathematical ground, and a positive-weight formulation could in principle allow Monte Carlo simulation of chiral theories, which does not exist today for the Standard Model. Witten notes that his continuum-fermion variant is not suited to Monte Carlo because the weight is not positive. No practical calculation changes.

# Resolution criteria

A refereed construction, checked by lattice-field-theory specialists, that gives an exactly gauge-invariant, local, reflection-positive lattice definition for the Standard Model's gauge group and representations on the full space of gauge fields, together with control of the infinite-volume and continuum limits. The 2026 preprint, even if its finite-volume measure is confirmed, covers only part of this and is unrefereed.

# Rating rationale

Difficulty 78: the finite-volume measure was open for over 25 years after Lüscher's abelian result and a 2026 preprint claims it, but reflection positivity, the full gauge-field space, the infinite-volume limit and the continuum limit remain, the last tied to Yang–Mills-type problems. Application value 15: it would sharpen the foundations of the electroweak sector and might enable simulations, but changes no current calculation. Leverage 50: it would reshape lattice chiral gauge theory and is a prerequisite for any rigorous nonperturbative Standard Model.

# Plain explanation

The Standard Model is our best theory of particles and three of the four forces. To say exactly what it means as mathematics, and not only as a recipe for approximate calculations, physicists want to define it on a fine grid and then shrink the grid. For most of the model that is routine. The weak force is the sticking point, because it treats left-handed and right-handed particles differently, and grids do not naturally allow that.

In October 2026 Nathaniel Craig posted a long preprint claiming that, on a grid of finite size, there is a consistent way to do it for the whole Standard Model. He credits an OpenAI model, GPT-6 Astra, as essential to the proof, and the proof comes with a computer-checkable file archive, though the paper says the match between that archive and the paper was reviewed by AI agents, and no independent check of it has been published. In Craig's own picture, imagine a box of mirrors that must keep light left-circular: on each lap the light has to come back with exactly the right phase, and the proof is about keeping that bookkeeping right at every scale.

The result is an answer in principle, not in practice. It does not show that the theory behaves well in the way quantum theory needs, and it does not show what happens when the grid is made infinitely fine. Other physicists, including Edward Witten, have written follow-up papers, but the claim has not been through peer review.
