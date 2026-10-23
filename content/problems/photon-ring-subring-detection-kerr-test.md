---
type: problem
slug: photon-ring-subring-detection-kerr-test
title: "Resolving the n = 1 photon subring of M87* and Sgr A*: detection and percent-level Kerr shape test"
entry: radio-interferometry
status: OPEN
origin: "Theory: Gralla, Lupsasca and Marrone (2020) and Johnson et al. (2020); mission concept BHEX, 2024"
ratings:
  difficulty: 53
  applicationValue: 5.2
  leverage: 35
workMix:
  theory: 15
  engineering: 55
  compute: 10
  empirical: 20
verification:
  route: OBSERVATION
sources:
  - title: "Johnson et al.: Universal interferometric signatures of a black hole's photon ring"
    url: https://arxiv.org/abs/1907.04329
  - title: "Gralla, Lupsasca, Marrone: The shape of the black hole photon ring: a precise test of strong-field general relativity"
    url: https://arxiv.org/abs/2008.03879
  - title: "Lupsasca et al.: The Black Hole Explorer: photon ring science, detection and shape measurement"
    url: https://arxiv.org/abs/2406.09498
  - title: "Johnson et al.: The Black Hole Explorer: motivation and vision"
    url: https://arxiv.org/abs/2406.12917
  - title: "Broderick et al.: The photon ring in M87* (ApJ 935, 61)"
    url: https://iopscience.iop.org/article/10.3847/1538-4357/ac7c1d
  - title: "MIT Haystack Observatory: BHEX news (April 2026)"
    url: https://haystack.mit.edu/news/bhex-test-001/
  - title: "Suzuki et al.: High-order photon rings around Kerr naked singularities (preprint)"
    url: https://arxiv.org/abs/2511.20756
links:
  - to: ringdown-overtone-and-nonlinear-qnm-detectability
    kind: RELATED
    note: Photon-ring Lyapunov exponents and quasinormal-mode frequencies are linked through the geometric-optics correspondence, giving complementary EM and GW Kerr tests.
  - to: black-hole-spin-dynamical-origin-gw-populations
    kind: RELATED
    note: Photon-ring shape would give an independent spin measurement to compare with GW spin populations.
timeline:
  - date: 2019-07-09
    title: Universal interferometric signature of photon rings
    body: Johnson et al. show subrings dominate long-baseline visibilities with a damped periodic signature (arXiv submission month; day approximate).
    source: https://arxiv.org/abs/1907.04329
  - date: 2020-08-10
    title: Photon-ring shape as a GR test
    body: Gralla, Lupsasca and Marrone derive the shape test for the critical curve.
    source: https://arxiv.org/abs/2008.03879
  - date: 2022-08-01
    title: Contested n = 1 claim in EHT 2017 data
    body: Broderick et al. report isolating the M87* photon ring with a hybrid model; the claim is not accepted as a detection (month of publication; day set to the first).
    source: https://iopscience.iop.org/article/10.3847/1538-4357/ac7c1d
  - date: 2024-06-13
    title: BHEX photon-ring science case
    body: Lupsasca et al. describe the space-VLBI design for photon-ring detection and Kerr tests.
    source: https://arxiv.org/abs/2406.09498
explainer:
  oneLine: Spot the thin extra rings of light that wrap around a black hole, and use their shape to test Einstein.
  flow:
    - Some light circles the black hole first
    - Each lap makes a thinner, fainter ring
    - Ring shape depends only on mass and spin
    - Needs a telescope bigger than Earth
    - Space dish could test Einstein's black hole
  glossary:
    - term: photon ring
      meaning: The thin ring of light formed by photons that orbit a black hole before escaping.
      link: https://en.wikipedia.org/wiki/Photon_sphere
    - term: photon sphere
      meaning: The surface around a black hole where light can orbit on an unstable circular path.
      link: https://en.wikipedia.org/wiki/Photon_sphere
    - term: Kerr black hole
      meaning: A spinning, uncharged black hole described by only its mass and spin.
      link: https://en.wikipedia.org/wiki/Kerr_metric
    - term: critical curve
      meaning: The edge of a black hole's shadow in an image.
      link: https://en.wikipedia.org/wiki/Black_hole#Photon_sphere
    - term: Lyapunov exponent
      meaning: A number measuring how quickly nearby paths diverge from each other, here for orbits around a black hole.
      link: https://en.wikipedia.org/wiki/Lyapunov_exponent
    - term: visibility
      meaning: "What a pair of radio telescopes measures: one component of the Fourier transform of the sky image."
      link: /research/radio-interferometry
    - term: Event Horizon Telescope
      meaning: The network of radio telescopes that imaged M87* and Sagittarius A*.
      link: https://en.wikipedia.org/wiki/Event_Horizon_Telescope
    - term: M87*
      meaning: The black hole at the centre of the galaxy Messier 87, imaged in 2019.
      link: https://en.wikipedia.org/wiki/Messier_87
    - term: Sagittarius A*
      meaning: The supermassive black hole at the centre of the Milky Way.
      link: https://en.wikipedia.org/wiki/Sagittarius_A*
    - term: naked singularity
      meaning: A hypothetical singularity not hidden behind an event horizon.
      link: https://en.wikipedia.org/wiki/Naked_singularity
    - term: baseline
      meaning: The distance between two telescopes in an array; longer baselines see finer detail.
      link: https://en.wikipedia.org/wiki/Baseline_(interferometry)
    - term: space VLBI
      meaning: Linking a radio dish in orbit with dishes on the ground to get baselines longer than the Earth.
      link: https://en.wikipedia.org/wiki/Very-long-baseline_interferometry
  readFirst:
    - title: Photon sphere (Wikipedia)
      url: https://en.wikipedia.org/wiki/Photon_sphere
      why: Where the photon ring comes from.
    - title: Event Horizon Telescope (Wikipedia)
      url: https://en.wikipedia.org/wiki/Event_Horizon_Telescope
      why: The telescope that took the images and its limits.
    - title: Event Horizon Telescope website
      url: https://eventhorizontelescope.org/
      why: Official source on the images.
raw:
  body: "A black-hole image contains a sequence of nested thin rings (\"subrings\") of light that has wound $n$ half-orbits around the hole; for a Kerr black hole the $n$-th subring approaches the critical curve with exponentially demagnified flux, $F_{n+1}/F_n\\approx e^{-\\gamma}$ at large $n$, where $\\gamma$ is the Lyapunov exponent of the bound photon orbits ($\\gamma=\\pi$ for Schwarzschild); at $n=1$ the ring still depends on the emission geometry, so it tracks the critical curve only approximately. The ring's diameter and shape are set by mass and spin, with a strongly constrained shape for Kerr. The visibility amplitude of the $n=1$ ring appears as a periodic ripple on long baselines. **Problem:** detect the $n=1$ photon ring of M87* and/or Sgr A* (baselines of order $2\\times10^{10}\\lambda$ for M87*, about twice the Earth's diameter at 230 GHz, so a space element is needed) and measure its diameter and shape to percent-level accuracy, so as to test the Kerr hypothesis against horizonless or non-Kerr alternatives."
  stateOfArt: "EHT images of M87* and Sgr A* resolve the bright n = 0 emission ring but not the n ≥ 1 subrings. Broderick et al. (ApJ 935, 61, 2022) claimed to isolate the n = 1 ring in EHT 2017 M87* data with a hybrid image model; the claim is contested because the 2017 baselines do not reach the ring's characteristic visibility signature, so there is no undisputed detection. Johnson et al. (arXiv:1907.04329, Sci. Adv. 2020) showed that each subring produces a universal damped-periodic visibility signature and that n = 1 needs baselines beyond the Earth at 230 GHz; Gralla, Lupsasca and Marrone (arXiv:2008.03879, PRD 2020) showed that the ring's shape gives a precise GR test. The Black Hole Explorer (BHEX; Johnson et al., arXiv:2406.12917; photon-ring case by Lupsasca et al., arXiv:2406.09498) is a space-VLBI concept observing in two bands near 100 and 300 GHz from an orbit of about 30,000 km; its 2025 SMEX target slipped, and as of April 2026 MIT Haystack said it will be proposed to NASA's Small Explorer call in mid-2026, with no selection announced by October 2026. Theory continues on non-Kerr alternatives: Suzuki et al. (arXiv:2511.20756, preprint) find that high-order rings of a Kerr naked singularity with a = 1.01 differ measurably from Kerr in visibility space."
  resolutionCriteria: "Detection of the n=1 subring signature in visibility data of M87* or Sgr A* at ≥ 5σ, with a measured ring diameter consistent (or inconsistent) with the Kerr critical-curve prediction at ≲ 1–2% precision after marginalising over astrophysical plasma models."
  verifySpec: "Needs new interferometric visibility data detecting the n = 1 subring of M87* or Sgr A* at 5 sigma or more, with a ring diameter measured to about 1 to 2% precision after marginalising over plasma models, to test consistency with the Kerr critical curve."
site:
  aiReviewed: true
---

# Applications

A photon-ring measurement would be a strong-field test of general relativity independent of gravitational waves and would measure black-hole spin; the space-VLBI technology (precision phase referencing, high-rate downlink) has spin-offs for deep-space communication and radio astronomy.

# Rating rationale

Difficulty 53: the physics and the signature are well understood, but detection needs a space-VLBI mission that is not yet selected, and a percent-level shape test must marginalise over plasma physics at n = 1; this puts it just below B-modes (55) and the Earth-twin RV problem (55), which are similarly instrument-gated, and above the GW spin-origin problem (44). Application value 5.2: a strong-field test with modest technology spin-off. Leverage 35: it would provide an EM Kerr test and spin measurements complementary to ringdown (38), below neutron-star EOS (52).

# Work mix rationale

Mainly building and flying a space-VLBI element with stable phase referencing; analysis needs plasma-model simulations.

# Plain explanation

The famous black-hole pictures show a glowing ring of hot gas around a dark centre. But Einstein's theory predicts something more. Some light travels so close to the black hole that it goes around it once, twice, or more before escaping toward us. Each extra lap produces a thinner and fainter ring, stacked ever closer to one sharp edge, like the ripples of a stone dropped in a pond but squeezed together.

These thin rings are called photon subrings. Each one is about 20 times fainter than the previous one for a simple non-spinning black hole. Their size and shape are set mainly by the black hole's mass and spin, and depend less and less on the messy gas around it the more laps the light has made. This makes them a very clean test of whether Einstein's description of black holes is right, or whether the objects are something else.

The telescope that made the first pictures, the Event Horizon Telescope, linked radio dishes across the Earth. It could see the main ring but not the thin ones, which need a telescope even bigger than the Earth.

Some analysts claimed to see the first subring in existing data, but others dispute this and there is no accepted detection.

Where the analogy breaks: ripples in a pond are spread out evenly, but here each ring is much fainter than the one before, so only the first one or two can ever be seen.

# Student explanation

**The physics.** In a black-hole image, light rays that make n half-orbits around the hole produce the n-th "subring". For a Kerr black hole, the n-th subring approaches the critical curve (the edge of the shadow) with exponentially smaller flux: F\_(n+1)/F_n is about e^(−γ) at large n, where γ is the Lyapunov exponent of the bound photon orbits (γ = π for Schwarzschild, a flux ratio of about 1/23). At n = 1 the ring still depends somewhat on the emission geometry, so it tracks the critical curve only approximately. The ring's diameter and shape are set by mass and spin, with a strongly constrained shape for Kerr.

**The observable.** In the interferometric visibility domain, the n = 1 ring appears as a periodic ripple in the visibility amplitude on long baselines (a damped periodic signature, according to Johnson et al.).

**The problem.** Detect the n = 1 photon ring of M87\* and/or Sgr A\*, and measure its diameter and shape to percent-level accuracy, to test the Kerr hypothesis against horizonless or non-Kerr alternatives. The baselines needed are of order 2×10¹⁰ wavelengths for M87\*, about twice the Earth's diameter at 230 GHz, so a space element is needed.

**State of the art.**

- EHT images of M87\* and Sgr A\* resolve the bright n = 0 emission ring but not the n ≥ 1 subrings.
- Broderick et al. (2022) claimed to isolate the n = 1 ring in EHT 2017 M87\* data with a hybrid image model; the claim is contested because the 2017 baselines do not reach the ring's characteristic visibility signature. There is no undisputed detection.
- Johnson et al. (Science Advances, 2020) showed that each subring produces a universal damped-periodic visibility signature and that n = 1 needs baselines beyond the Earth at 230 GHz.
- Gralla, Lupsasca and Marrone (2020) showed that the ring's shape gives a precise GR test.
- The Black Hole Explorer (BHEX) is a space-VLBI concept observing near 100 and 300 GHz from an orbit of about 30,000 km. As of April 2026 it was to be proposed to NASA's Small Explorer call in mid-2026; no selection had been announced by October 2026.
- Theory continues on non-Kerr alternatives; one preprint finds that high-order rings of a Kerr naked singularity differ measurably from Kerr in visibility space.

**Why it matters.** It would be a precision test of general relativity in the strongest gravity we can observe.
