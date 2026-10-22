---
type: problem
slug: jwst-black-hole-seed-mass-function-z7
title: "Heavy versus light super-Eddington seeds: the 10⁵–10⁷ M☉ black-hole mass function of JWST AGN at z = 7–10"
entry: lambda-cdm
status: IN_PROGRESS
origin: Quasars at z > 7 with 10⁹ M☉ black holes (2011 onwards) posed the seeding problem; JWST AGN at z = 4–10 (2023 onwards) made it quantitative at lower masses.
ratings:
  difficulty: 48
  applicationValue: 3
  leverage: 40
workMix:
  theory: 35
  engineering: 10
  compute: 25
  empirical: 30
verification:
  route: OBSERVATION
sources:
  - title: Evidence for heavy seed origin of early supermassive black holes from a z ≈ 10 X-ray quasar (Bogdan et al. 2023)
    url: https://arxiv.org/abs/2305.15458
  - title: "UNCOVER: The growth of the first massive black holes from JWST/NIRSpec (Goulding et al. 2023)"
    url: https://arxiv.org/abs/2308.02750
  - title: A small and vigorous black hole in the early Universe (Maiolino et al. 2023)
    url: https://arxiv.org/abs/2305.12492
  - title: JWST CEERS & JADES Active Galaxies at z = 4–7 Violate the Local M•–M⋆ Relation at >3σ (Pacucci et al. 2023)
    url: https://arxiv.org/abs/2308.12331
  - title: UNCOVER spectroscopy confirms a surprising ubiquity of AGN in red galaxies at z > 5 (Greene et al. 2023)
    url: https://arxiv.org/abs/2309.05714
  - title: Little red dots as young supermassive black holes in dense ionized cocoons (Rusakov et al. 2025)
    url: https://arxiv.org/abs/2503.16595
  - title: A direct black hole mass measurement in a Little Red Dot at the Epoch of Reionization (Juodžbalis et al. 2025)
    url: https://arxiv.org/abs/2508.21748
  - title: A Critical Evaluation of the Physical Nature of the Little Red Dots (Inayoshi 2025)
    url: https://arxiv.org/abs/2512.03130
links:
  - to: final-parsec-gas-driven-eccentricity-pta-amplitude
    kind: RELATED
    note: The seeded black-hole mass function sets the merger population whose binaries must harden through the final parsec.
timeline:
  - date: 2023-05-24
    title: UHZ1 heavy-seed interpretation
    body: Chandra plus JWST at z ≈ 10.1 interpreted as a heavy-seed black hole.
    source: https://arxiv.org/abs/2305.15458
  - date: 2023-08-23
    title: Overmassive black holes
    body: JWST AGN at z = 4–7 lie above the local M_BH–M⋆ relation.
    source: https://arxiv.org/abs/2308.12331
  - date: 2025-03-20
    title: Electron-scattering and black-hole-star interpretations
    body: Rusakov et al. argue LRD masses are 10⁵–10⁷ M☉; Naidu et al. propose gas-enshrouded "black hole stars".
    source: https://arxiv.org/abs/2503.16595
  - date: 2025-08-29
    title: Dynamical mass in Abell2744-QSO1
    body: Gas rotation at z = 7.04 gives about 5×10⁷ M☉, consistent with the virial mass.
    source: https://arxiv.org/abs/2508.21748
explainer:
  oneLine: How did huge black holes already exist when the universe was under a billion years old?
  flow:
    - Webb finds big black holes very early
    - Speed limit on how fast they can grow
    - Need a heavy seed or faster feeding
    - Compare light, medium and heavy seeds
    - Correct for hidden and missed objects
  glossary:
    - term: supermassive black hole
      meaning: A black hole millions to billions of times the Sun's mass.
      link: https://en.wikipedia.org/wiki/Supermassive_black_hole
    - term: active galactic nucleus
      meaning: A galaxy centre that shines brightly because a black hole is swallowing gas.
      link: https://en.wikipedia.org/wiki/Active_galactic_nucleus
    - term: redshift
      meaning: The stretching of light from distant objects; a larger redshift means we see an earlier time in the universe.
      link: https://en.wikipedia.org/wiki/Redshift
    - term: Eddington limit
      meaning: The brightness at which outward light pressure balances gravity, setting a natural limit on how fast a black hole can feed.
      link: https://en.wikipedia.org/wiki/Eddington_luminosity
    - term: super-Eddington accretion
      meaning: Feeding a black hole faster than the Eddington rate, which can happen in special conditions.
      link: https://en.wikipedia.org/wiki/Eddington_luminosity
    - term: Population III stars
      meaning: The hypothetical very first stars, made of only hydrogen and helium.
      link: https://en.wikipedia.org/wiki/Stellar_population
    - term: direct-collapse black hole
      meaning: A black hole formed by the collapse of a large gas cloud without making a star first.
      link: https://en.wikipedia.org/wiki/Direct_collapse_black_hole
    - term: seed (black hole)
      meaning: The first, initial black hole from which a supermassive black hole grows.
      link: https://en.wikipedia.org/wiki/Supermassive_black_hole
    - term: duty cycle
      meaning: The fraction of time a black hole is actively feeding.
      link: https://en.wikipedia.org/wiki/Duty_cycle
    - term: James Webb Space Telescope
      meaning: NASA's large infrared telescope launched in 2021.
      link: https://en.wikipedia.org/wiki/James_Webb_Space_Telescope
    - term: little red dots
      meaning: Compact, red, very early objects found by JWST, many showing signs of a growing black hole wrapped in dense gas.
      link: https://en.wikipedia.org/wiki/Little_Red_Dots
    - term: broad emission lines
      meaning: Spectral lines widened by fast-moving gas near a black hole; their width is the usual way to estimate its mass.
      link: https://en.wikipedia.org/wiki/Active_galactic_nucleus
  readFirst:
    - title: Supermassive black hole (Wikipedia)
      url: https://en.wikipedia.org/wiki/Supermassive_black_hole
      why: Includes a section on how they form and the early-growth puzzle.
    - title: Direct collapse black hole (Wikipedia)
      url: https://en.wikipedia.org/wiki/Direct_collapse_black_hole
      why: Describes the heavy-seed idea.
    - title: Eddington luminosity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Eddington_luminosity
      why: The speed limit on black-hole feeding.
site:
  aiReviewed: true
---

Determine the black-hole seed mass function and growth histories that reproduce the abundance, masses and host-to-black-hole mass ratios of broad-line AGN and X-ray AGN at z ≳ 7 discovered by JWST, including UHZ1 (z ≈ 10.1), GHZ9 and GN-z11. Candidate channels are light Population III remnants (about 10²–10³ M☉) growing at sustained or super-Eddington rates, runaway stellar-collision seeds in dense clusters (10³–10⁴ M☉) and direct-collapse seeds (10⁴–10⁶ M☉). The problem is to quantify, with accretion-disc and cosmological-simulation inputs, what accretion rate and duty cycle each channel requires, to extract the intrinsic mass function after correcting for the bolometric and obscuration biases of broad-line detection in 'little red dots', and to test the predictions against the overmassive M_BH–M⋆ relation (z = 4–7) reported from JWST. The decisive quantity is the number density of 10⁵–10⁶ M☉ black holes at z = 8–10 and its Eddington-ratio distribution.

# State of the art

Bogdan et al. interpreted UHZ1 (z ≈ 10.1) as an X-ray quasar consistent with a heavy seed (arXiv:2305.15458), with the spectroscopic confirmation in Goulding et al. (arXiv:2308.02750). Maiolino et al. reported a small, vigorously accreting black hole in GN-z11 at z = 10.6 (arXiv:2305.12492). JWST CEERS and JADES AGN at z = 4–7 lie above the local M_BH–M⋆ relation at more than 3σ (Pacucci et al., arXiv:2308.12331), and UNCOVER spectroscopy found AGN to be common in red galaxies at z > 5 (Greene et al., arXiv:2309.05714). Since 2025 the mass scale of the broad-line 'little red dots' (LRDs) has become the central question. Rusakov et al. (arXiv:2503.16595) argue that electron scattering in dense ionised cocoons broadens the Balmer lines, giving masses of 10⁵–10⁷ M☉, about two orders of magnitude below virial estimates; Brazzini et al. (arXiv:2507.08929) rule out dominant electron scattering in one well-studied LRD using multiple hydrogen lines. Naidu et al. (arXiv:2503.16596) and de Graaff et al. (arXiv:2511.21820, 146 LRDs) interpret the spectra as accreting black holes inside dense gas envelopes ('black hole stars'), so the continuum is not starlight. Against the low-mass view, Juodžbalis et al. (arXiv:2508.21748) measured Keplerian gas rotation in Abell2744-QSO1 at z = 7.04 implying about 5×10⁷ M☉, consistent with the virial estimate and with M_BH/M⋆ > 2. Inayoshi's critical review (arXiv:2512.03130, December 2025) and a September 2026 preprint arguing for 10⁴–10⁵ M☉ seeds accreting at 5–50 times Eddington (Sun et al., arXiv:2609.09274) show that the community has not converged. The envelope picture is now the leading interpretation of LRD spectra, but the black-hole mass function at z = 8–10, and therefore the seeding channel, is not established as of October 2026; the status is IN_PROGRESS.

# Applications

The seed channel fixes the black-hole mass function used in galaxy-formation simulations, predictions for LISA mergers at z > 5, and the high-redshift contribution to the nanohertz background. There is no practical application beyond these.

# Resolution criteria

Resolved when JWST (and Euclid, Chandra and ground-based) samples with validated mass estimators constrain the z = 8–10 black-hole mass function to within a factor of 2–3 at 10⁵–10⁶ M☉ and one seeding channel (or a mix) is shown to reproduce it, with predictions for LISA event rates or 21-cm heating accepted by independent groups.

# Rating rationale

Mass estimators for little red dots are contested by an order of magnitude and theory offers several viable channels, so difficulty is above the old early-SMBH entry (42), as the z = 8–10 mass function is a sharper target. Leverage 40, slightly above the old 37, because the seed channel feeds LISA rates, the PTA amplitude and galaxy-formation models. Application value 3.

# Work mix rationale

Theory and simulation of seeds and super-Eddington growth, plus new spectroscopy and mass calibrations.

# Verification

Settled by JWST, Euclid, Chandra and ground-based samples with validated mass estimators that constrain the z = 8 to 10 black-hole mass function to within a factor of 2 to 3 at 1e5 to 1e6 solar masses, plus a seeding channel that reproduces it and has predictions for LISA event rates or 21-cm heating.

# Plain explanation

The James Webb Space Telescope has found black holes in galaxies seen when the universe was only a few hundred million years old. Some of these black holes look surprisingly heavy for their age, and surprisingly common.

Black holes grow by swallowing gas, but there is a speed limit: the glowing, heated gas pushes back on gas falling in. At the standard rate, growing a black hole to millions of times the Sun's mass in so little time requires a head start, a "seed".

Three kinds of seeds are proposed. Light seeds are the remains of the first stars, a hundred to a thousand times the Sun's mass. They would need to grow nonstop, at or above the limit. Medium seeds come from stars colliding in packed clusters. Heavy seeds form when a huge gas cloud collapses directly into a black hole, perhaps ten thousand to a million Suns, and need much less growing.

The task is to work out which kinds fit the black holes Webb sees, correcting for the fact that we spot only the brightest ones. A newer twist: many of these black holes sit in compact red objects nicknamed "little red dots", and some researchers argue their masses are overestimated, perhaps by a hundred times. So nobody yet knows how many heavy early black holes there really are.

Where the analogy breaks: a speed limit on a road is a rule, but this limit can be exceeded in special conditions, which is part of the debate.

# Student explanation

**The observations.** JWST has discovered broad-line active galactic nuclei (AGN) and X-ray AGN at redshifts z of 7 and above, such as UHZ1 (z about 10.1), GHZ9 and GN-z11 (z = 10.6). Several lie above the local relation between black-hole mass and host-galaxy stellar mass (more than 3σ in some samples). Spectroscopy of JWST fields such as UNCOVER finds AGN to be common in red galaxies at z above 5.

**The growth problem.** A black hole accreting at the Eddington rate, where radiation pressure balances gravity, grows exponentially with an e-folding time of about 50 million years (for a typical radiative efficiency). Reaching 10⁶ to 10⁷ solar masses by z of 7 to 10, when the universe is under a billion years old, needs either a massive seed or phases of accretion above the Eddington rate (super-Eddington).

**Seed channels.**

- _Light seeds_: remnants of Population III stars, about 10² to 10³ solar masses. Need sustained or super-Eddington accretion.
- _Runaway collision seeds_: stars colliding in dense clusters, about 10³ to 10⁴ solar masses.
- _Direct-collapse seeds_: gas clouds collapsing without fragmenting into stars, about 10⁴ to 10⁶ solar masses.

**What the problem asks.** Find the seed mass function and growth histories that reproduce the abundance, masses and host-to-black-hole mass ratios of the JWST AGN. One needs to:

- quantify what accretion rate and duty cycle (fraction of time actively accreting) each channel needs, using accretion-disc and cosmological-simulation inputs;
- extract the intrinsic mass function after correcting for bolometric and obscuration biases and for selection effects (mass estimates from broad lines have uncertainties of a factor of a few).

**State of the art.** Bogdan and collaborators interpreted UHZ1 as an X-ray quasar consistent with a heavy seed. Maiolino and collaborators reported a small, vigorously accreting black hole in GN-z11. These are individual objects. Since 2025 the central question has been the masses of the broad-line "little red dots": one group argues that scattering in dense gas cocoons broadens the lines, giving masses about a hundred times below the usual estimates, while gas-rotation measurements in at least one object support the high mass. The black-hole mass function at z of 8 to 10, and so the seeding channel, is not established.

**Why it matters.** The seed channel affects how supermassive black holes form in general, the rate of black-hole mergers that low-frequency gravitational-wave detectors will see, and models of galaxy growth.
