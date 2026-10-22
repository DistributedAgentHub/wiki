---
type: problem
slug: sidm-subhalo-lensing-velocity-dependence
title: SIDM versus CDM from strong-lensing subhalo mass functions and concentrations at 10⁷–10⁸ M☉
entry: lambda-cdm
status: OPEN
origin: Spergel & Steinhardt (2000) proposed self-interacting dark matter; Vegetti et al. (2010) began detecting dark subhalos by gravitational imaging.
ratings:
  difficulty: 46
  applicationValue: 5
  leverage: 46
workMix:
  theory: 35
  engineering: 10
  compute: 30
  empirical: 25
verification:
  route: OBSERVATION
sources:
  - title: An unexpected high concentration for the dark substructure in the gravitational lens SDSSJ0946+1006 (Minor et al. 2021)
    url: https://arxiv.org/abs/2011.10627
  - title: Self-Interacting Dark Matter and Small-Scale Gravitational Lenses in Galaxy Clusters (Yang & Yu 2021)
    url: https://arxiv.org/abs/2102.02375
  - title: Dark Matter Halos as Particle Colliders (Kaplinghat, Tulin & Yu 2016)
    url: https://arxiv.org/abs/1508.03339
  - title: Euclid Quick Data Release (Q1) overview (2025)
    url: https://arxiv.org/abs/2503.15302
  - title: "The overconcentrated dark halo in the strong lens SDSS J0946+1006 is a subhalo: evidence for self interacting dark matter? (Enzi et al. 2024)"
    url: https://arxiv.org/abs/2411.08565
  - title: "JWST lensed quasar dark matter survey IV: Stringent warm dark matter constraints from the joint reconstruction of extended lensed arcs and quasar flux ratios (Gilman et al. 2025)"
    url: https://arxiv.org/abs/2511.07513
links:
  - to: lyman-alpha-warm-fuzzy-dark-matter-bounds
    kind: BUILDS_ON
    note: A deficit of 10⁷–10⁸ M☉ subhalos can come from warm or fuzzy dark-matter free-streaming as well as SIDM; separating them needs the half-mode mass allowed by the Lyman-α P1D bound on m_WDM and m_a, cross-checked by the same lensed-quasar flux ratios.
timeline:
  - date: 2015-08-13
    title: Velocity-dependent SIDM from dwarfs to clusters
    body: A σ/m falling with velocity fits halo cores from dwarfs to clusters (PRL 2016).
    source: https://arxiv.org/abs/1508.03339
  - date: 2020-11-20
    title: Dense substructure in SDSSJ0946+1006
    body: A highly concentrated dark subhalo is reported, difficult in CDM.
    source: https://arxiv.org/abs/2011.10627
  - date: 2024-11-13
    title: SDSSJ0946+1006 as a >5σ outlier
    body: Enzi et al. confirm the over-concentrated subhalo and discuss SIDM core collapse.
    source: https://arxiv.org/abs/2411.08565
  - date: 2025-11-10
    title: JWST lens-population substructure
    body: Joint arc and flux-ratio modelling of 28 lenses constrains the subhalo mass function.
    source: https://arxiv.org/abs/2511.07513
explainer:
  oneLine: Use gravitational lenses to test whether dark matter particles can bounce off one another, by weighing tiny invisible clumps.
  flow:
    - Dark matter clumps inside galaxy halos
    - Bouncing particles change clump density
    - Lenses bend light around clumps
    - Count and weigh clumps from lens kinks
    - Constrain how strongly particles bounce
  glossary:
    - term: dark matter halo
      meaning: A roughly round cloud of dark matter surrounding a galaxy.
      link: https://en.wikipedia.org/wiki/Dark_matter_halo
    - term: subhalo
      meaning: A smaller clump of dark matter that orbits inside a larger halo.
      link: https://en.wikipedia.org/wiki/Dark_matter_halo
    - term: self-interacting dark matter
      meaning: A model in which dark-matter particles scatter off one another.
      link: https://en.wikipedia.org/wiki/Self-interacting_dark_matter
    - term: strong gravitational lensing
      meaning: The bending of light by a massive object into arcs or multiple images of a background source.
      link: https://en.wikipedia.org/wiki/Strong_gravitational_lensing
    - term: cross section per unit mass
      meaning: A measure of how often dark-matter particles scatter, divided by their mass; given in cm² per gram.
      link: https://en.wikipedia.org/wiki/Self-interacting_dark_matter
    - term: gravothermal collapse
      meaning: A runaway process in which heat flows out of a halo's centre, making it shrink and grow denser.
      link: https://en.wikipedia.org/wiki/Self-interacting_dark_matter
    - term: tidal stripping
      meaning: Removal of material from a clump by the gravity of a larger host.
      link: https://en.wikipedia.org/wiki/Tidal_stripping
    - term: cold dark matter
      meaning: Dark matter that moves slowly and does not interact except by gravity.
      link: https://en.wikipedia.org/wiki/Cold_dark_matter
    - term: concentration (halo)
      meaning: How tightly a halo's mass is packed toward its centre.
      link: https://en.wikipedia.org/wiki/Navarro%E2%80%93Frenk%E2%80%93White_profile
    - term: solar mass
      meaning: A unit of mass equal to the mass of the Sun.
      link: https://en.wikipedia.org/wiki/Solar_mass
    - term: quasar
      meaning: The very bright centre of a distant galaxy, powered by gas falling onto a supermassive black hole.
      link: https://en.wikipedia.org/wiki/Quasar
    - term: subhalo mass function
      meaning: How many subhalos there are at each mass.
      link: https://en.wikipedia.org/wiki/Halo_mass_function
  readFirst:
    - title: Self-interacting dark matter (Wikipedia)
      url: https://en.wikipedia.org/wiki/Self-interacting_dark_matter
      why: Overview of the idea and motivation.
    - title: Strong gravitational lensing (Wikipedia)
      url: https://en.wikipedia.org/wiki/Strong_gravitational_lensing
      why: How lens arcs let us weigh invisible mass.
    - title: Dark matter halo (Wikipedia)
      url: https://en.wikipedia.org/wiki/Dark_matter_halo
      why: Background on the objects whose clumps are being measured.
site:
  aiReviewed: true
---

Constrain the velocity-dependent self-interaction cross-section σ/m(v) over relative velocities of about 10–3,000 km/s by measuring the abundance, mass function and central density profiles of dark subhalos with masses 10⁷–10⁸ M☉ in galaxy-scale strong lenses. The target observables are the subhalo mass function slope and normalisation, and the concentration–mass relation, in lens samples of hundreds of systems from JWST, Euclid and ground-based radio and sub-millimetre imaging. Gravothermal core collapse in SIDM halos with σ/m ≳ 10 cm²/g, together with tidal stripping, predicts an excess of very concentrated subhalos relative to CDM. The problem is to model the halo-by-halo evolution (core formation, then collapse, with tidal truncation in the host) with enough accuracy to turn measured concentrations into a bound on σ/m(v) that is not limited by the baryonic and substructure-population systematics.

# State of the art

The unexpectedly high concentration of the dark substructure in the lens SDSSJ0946+1006 (Minor et al., arXiv:2011.10627; 2–3.7×10⁹ M☉ within 1 kpc, so above the 10⁷–10⁸ M☉ target scale) is difficult for CDM and has been interpreted as a signature of gravothermal collapse in SIDM. Yang & Yu (arXiv:2102.02375) showed with gravothermal fluid models that SIDM halos in clusters can reproduce compact small-scale lens features. Kaplinghat, Tulin & Yu (arXiv:1508.03339) showed that a velocity-dependent σ/m of about 2 cm²/g in dwarfs falling to about 0.1 cm²/g in clusters fits halo cores from dwarfs to clusters. Enzi et al. (arXiv:2411.08565) find it a >5σ outlier from ΛCDM expectations and suggestive of SIDM core collapse, while He et al. (arXiv:2506.07978) propose a less dense, luminous alternative, so even this single object is disputed. Population-level substructure measurements now exist for the mass function: JWST flux ratios of 31 lensed quasars (Keeley et al., arXiv:2511.07765) and joint arc plus flux-ratio fits of 28 lenses (Gilman et al., arXiv:2511.07513) bound the half-mode mass and warm dark matter, but they have not yet measured the subhalo concentration–mass relation that distinguishes SIDM from CDM. Euclid Q1 (arXiv:2503.15302, March 2025) found hundreds of strong-lens candidates; Euclid DR1 is not expected before mid-2027. No population-level measurement of σ/m(v) from subhalo concentrations exists as of October 2026.

# Applications

A measured σ/m(v) would be the first non-gravitational information on dark-sector interactions, constraining mediator masses and couplings. The lens-modelling and halo-evolution tools transfer to other substructure tests.

# Resolution criteria

Resolved when a lens-population analysis with at least a few hundred systems measures the mass function and concentration of 10⁷–10⁸ M☉ subhalos to precision that excludes either CDM or SIDM at ≥3σ, validated against hydrodynamic and gravothermal simulations with baryons.

# Rating rationale

A population-level test exists with Euclid, JWST and LSST lens samples, but the inference needs coupled gravothermal and baryonic modelling that is not validated; it sits at the old small-scale-structure difficulty (45). Leverage 46, just below that entry's 49, because a measured σ/m(v) would be the first non-gravitational information on dark matter and fixes mediator masses. Application value 5 is similar to the old entry (4).

# Work mix rationale

Modelling and simulation of halo evolution and lens fitting dominate, with new lens data as the other half.

# Verification

Needs a lens-population analysis of a few hundred systems measuring the mass function and concentration of 1e7 to 1e8 solar-mass subhalos well enough to exclude either CDM or SIDM at 3 sigma or more, validated against hydrodynamic and gravothermal simulations with baryons.

# Plain explanation

Dark matter is thought to form big invisible clouds, called halos, around galaxies. Inside each big halo there are many smaller clumps, like raisins in a loaf. The standard idea says dark-matter particles never collide with each other. An alternative idea says they can bounce off one another, a bit like billiard balls. This is called self-interacting dark matter.

If dark matter particles do bounce, small clumps would behave differently. The bouncing smooths out their centres. Then, in some cases, a clump can undergo a runaway collapse in which its centre becomes unusually dense.

How do we weigh invisible clumps? By lensing. When a distant galaxy lies almost exactly behind a nearer one, the gravity of the nearer galaxy bends the light into arcs and rings. Small clumps in the lens leave small kinks in the arcs. Measuring the kinks tells us how many clumps there are, how heavy, and how dense.

With hundreds of lenses from new telescopes, we can compare what we find with predictions from both ideas. The hard part is the modelling: clumps get stripped by the larger galaxy, and the particles' interactions depend on how fast they move. So far no survey has measured the densities of enough small clumps to tell the two ideas apart.

Where the analogy breaks: raisins in a loaf are all alike, while clumps differ in age, orbit and history, which is why predictions need careful simulation.

# Student explanation

**The physics question.** In standard cold dark matter (CDM), particles interact only gravitationally. In self-interacting dark matter (SIDM), they also scatter off one another with a cross-section per unit mass σ/m, which can depend on the relative velocity v. Models where σ/m is large in small halos (low velocity) and small in clusters (high velocity) are viable and attractive. The task is to constrain σ/m(v) over 10 to 3000 km/s.

**What SIDM does to a halo.** Scattering transfers heat from the hot outskirts to the cooler centre, first making a constant-density core and later, if σ/m is large (≳ 10 cm²/g), causing gravothermal core collapse: the core shrinks and becomes very dense. Tidal stripping by the host galaxy speeds this up for subhalos. Together these predict an excess of very concentrated subhalos compared with CDM.

**Observable.** Strong gravitational lenses with a background source (often a galaxy or quasar) show arcs. Dark subhalos with masses of 10⁷ to 10⁸ solar masses perturb the lensed images. From samples of hundreds of systems, from JWST, Euclid, and radio and sub-millimetre imaging, one can measure the mass function (how many subhalos per mass) and the concentration–mass relation.

**State of the art.** An unexpectedly dense dark substructure in the lens SDSSJ0946+1006 is hard to explain with CDM and has been interpreted as gravothermal collapse in SIDM, though its mass (a few billion solar masses) is above the target range, and other authors propose a less dense, luminous alternative, so even this one object is disputed. JWST studies of about 30 lenses now constrain the subhalo mass function, but not yet the concentrations that distinguish SIDM from CDM. Gravothermal fluid models have shown that SIDM can reproduce compact lensing features. Work by Kaplinghat, Tulin and Yu showed that velocity-dependent cross sections can fit data from dwarf galaxies to clusters.

**The difficulty.** One needs halo-by-halo modelling, including core formation, collapse, stripping and the effect of normal matter in the host galaxy, then a statistical comparison with the lensing data. Detections of single objects are suggestive but not yet constraints on the whole population.

**Why it matters.** It tests whether dark matter has a rich "dark sector" of its own with forces, a big step beyond a simple particle.
