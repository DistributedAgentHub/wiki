---
type: problem
slug: final-parsec-gas-driven-eccentricity-pta-amplitude
title: "Gas-driven SMBH binary evolution: eccentricity and hardening time versus the PTA background amplitude"
entry: pulsar-timing-arrays
status: PARTIAL
origin: Begelman, Blandford & Rees (1980) identified the stall; Milosavljević & Merritt (2001, 2003) quantified it for collisionless nuclei.
ratings:
  difficulty: 35
  applicationValue: 3
  leverage: 36
workMix:
  theory: 35
  engineering: 5
  compute: 50
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: "The NANOGrav 15-year Data Set: Evidence for a Gravitational-Wave Background"
    url: https://arxiv.org/abs/2306.16213
  - title: "The NANOGrav 15-year Data Set: Constraints on Supermassive Black Hole Binaries from the Gravitational Wave Background"
    url: https://arxiv.org/abs/2306.16220
  - title: "Circumbinary Accretion: From Binary Stars to Massive Binary Black Holes (Lai & Muñoz 2022)"
    url: https://arxiv.org/abs/2211.00028
  - title: Formation of Galactic Nuclei (Milosavljević & Merritt 2001)
    url: https://arxiv.org/abs/astro-ph/0103350
  - title: Equilibrium eccentricity of accreting binaries (Zrake et al. 2021)
    url: https://arxiv.org/abs/2010.09707
  - title: "Orbital Evolution of Equal-mass Eccentric Binaries due to a Gas Disk: Eccentric Inspirals and Circular Outspirals (D'Orazio & Duffell 2021)"
    url: https://arxiv.org/abs/2103.09251
timeline:
  - date: 2001-03-21
    title: Loss-cone refilling and stalling
    body: Milosavljević & Merritt quantify the final-parsec problem for collisionless nuclei.
    source: https://arxiv.org/abs/astro-ph/0103350
  - date: 2020-10-19
    title: Eccentricity attractor near 0.45
    body: Zrake et al. find that equal-mass accreting binaries evolve to e ≈ 0.45 unless they start nearly circular.
    source: https://arxiv.org/abs/2010.09707
  - date: 2022-10-31
    title: Circumbinary accretion review
    body: Lai & Muñoz review evidence that circumbinary gas need not shrink binaries and that the outcome depends on eccentricity, mass ratio and gas thermodynamics.
    source: https://arxiv.org/abs/2211.00028
  - date: 2023-06-28
    title: PTA evidence for a GW background
    body: NANOGrav 15-year and other PTAs detect the background; the amplitude is high.
    source: https://arxiv.org/abs/2306.16213
explainer:
  oneLine: How do two giant black holes get close enough to merge, and does that match the gravitational-wave hum pulsars detect?
  flow:
    - Galaxies merge, black holes sink together
    - Stars alone may stall them at a parsec
    - Gas disc can shrink or widen the orbit
    - Predict how many pairs reach merger
    - Compare with pulsar-timing hum strength
  glossary:
    - term: supermassive black hole binary
      meaning: Two supermassive black holes orbiting each other after a galaxy merger.
      link: https://en.wikipedia.org/wiki/Supermassive_black_hole
    - term: final parsec problem
      meaning: The puzzle of how a black-hole pair gets from about a parsec apart to the much smaller separation where gravitational waves can finish the job.
      link: https://en.wikipedia.org/wiki/Final_parsec_problem
    - term: dynamical friction
      meaning: The drag a heavy object feels as it pulls on surrounding stars or gas, slowing it down.
      link: https://en.wikipedia.org/wiki/Dynamical_friction
    - term: circumbinary disc
      meaning: A ring of gas orbiting around a pair of objects rather than around a single one.
      link: https://en.wikipedia.org/wiki/Accretion_disk
    - term: orbital eccentricity
      meaning: "How stretched an orbit is: 0 is a circle, and values close to 1 are very elongated."
      link: https://en.wikipedia.org/wiki/Orbital_eccentricity
    - term: pulsar timing array
      meaning: A set of pulsars timed precisely to detect very slow gravitational waves.
      link: /research/pulsar-timing-arrays
    - term: gravitational-wave background
      meaning: A random overlapping sea of gravitational waves from many sources.
      link: https://en.wikipedia.org/wiki/Gravitational_wave_background
    - term: parsec
      meaning: A unit of distance equal to about 3.26 light-years.
      link: https://en.wikipedia.org/wiki/Parsec
    - term: mass function
      meaning: A count of how many objects exist at each mass.
      link: https://en.wikipedia.org/wiki/Mass_function
    - term: loss cone
      meaning: The set of star orbits that pass close enough to a black-hole pair to be flung out and carry energy away.
      link: https://en.wikipedia.org/wiki/Final_parsec_problem
    - term: hardening
      meaning: The shrinking of a binary’s orbit as it loses energy, making it more tightly bound.
      link: https://en.wikipedia.org/wiki/Final_parsec_problem
    - term: Mach number
      meaning: Speed of the gas compared with its speed of sound; in a disc, a high Mach number means a thin, cold disc.
      link: https://en.wikipedia.org/wiki/Mach_number
  readFirst:
    - title: Final parsec problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Final_parsec_problem
      why: The problem in plain terms, with proposed solutions.
    - title: NANOGrav 15-year data release
      url: https://nanograv.org/science/data
      why: The data that revealed the possible background.
    - title: Supermassive black hole (Wikipedia)
      url: https://en.wikipedia.org/wiki/Supermassive_black_hole
      why: General background on the objects involved.
site:
  aiReviewed: true
---

Compute the orbital evolution, from separations of about 10 pc to 10⁻² pc, of supermassive black-hole binaries of 10⁸–10¹⁰ M☉ in gas-rich merger remnants with coupled stellar hardening, circumbinary-disc torques and gravitational-wave emission, and predict the distribution of orbital eccentricities and the hardening timescale as functions of mass ratio, gas fraction and disc Mach number. The observable is the spectrum of the nanohertz background (turnover at low frequency, spectral index γ below 13/3), the amplitude A ≈ 2–3×10⁻¹⁵ at 1/yr, and continuous-wave and anisotropy statistics. The problem is to determine whether circumbinary-disc simulations of binaries that expand or contract (sign of the net torque depends on mass ratio, eccentricity and disc thickness) give a population consistent with the PTA amplitude without invoking a high-mass-function normalisation or overmassive black holes.

# State of the art

NANOGrav 15-year data show evidence for a nanohertz background with Hellings–Downs correlations at about 3–4σ (arXiv:2306.16213, June 2023; EPTA, PPTA and CPTA reached similar evidence), with an amplitude of A ≈ 2.4×10⁻¹⁵ at 1/yr, higher than many astrophysical predictions. NANOGrav's interpretation paper (arXiv:2306.16220) found that matching the amplitude requires a high-normalisation black-hole mass function or a high M_BH–M⋆ relation, and little room for stalling. Lai & Muñoz review circumbinary accretion (arXiv:2211.00028): accretion drives binaries toward equal masses and does not always shrink them, with the sign of the secular evolution set by e, q and the gas thermodynamics. For equal-mass binaries, 2D hydrodynamics gives an eccentricity attractor at e ≈ 0.45 (Zrake et al., arXiv:2010.09707) or e ≈ 0.4 (D'Orazio & Duffell, arXiv:2103.09251), unless the binary starts nearly circular (e ≲ 0.08–0.1), in which case it circularises and, at least in the latter study, expands. Milosavljević & Merritt (arXiv:astro-ph/0103350) quantified stellar loss-cone stalling in spherical nuclei. 3D magnetohydrodynamic simulations with a realistic thermodynamics and for long durations are still limited. IPTA DR3 and the NANOGrav 20-year data set had not been released as of October 2026, and no array has a 5σ detection (MeerKAT, arXiv:2412.01153; five-array combination, arXiv:2512.08666). Siwek et al. (arXiv:2302.01785) extend the eccentricity results to unequal masses: the equilibrium eccentricity grows with mass ratio and saturates near 0.5.

# Applications

The solution fixes the merger-delay assumptions used in LISA rate forecasts, the interpretation of the PTA background and electromagnetic counterpart searches for binary candidates. There is no practical application.

# Resolution criteria

Resolved when simulations that include gas, stars, three-dimensional magnetohydrodynamics and relativistic corrections predict the eccentricity and hardening time distributions for the relevant mass range and, combined with a cosmological population model, reproduce the PTA spectrum (A, γ, low-frequency turnover) at the 2σ level.

# Rating rationale

The classic stall is largely removed by gas and non-spherical loss-cone refilling, so the open part is quantitative (eccentricity and delay distributions against PTA data); difficulty rises from the old 20 because long-duration 3D MHD with realistic thermodynamics is still out of reach. Leverage 36, slightly above the old 32, because it is the main astrophysical input to PTA interpretation. Application value 3.

# Work mix rationale

Dominated by long-duration, high-resolution simulations, with theory of torque sign and PTA data analysis.

# Verification

Simulations with gas, stars, 3D MHD and relativistic corrections must predict the eccentricity and hardening-time distributions, and a cosmological population model must then reproduce the PTA spectrum (amplitude, slope, low-frequency turnover) at 2 sigma. The simulations are reproducible by independent groups with the released setup and codes; the PTA comparison uses public NANOGrav and IPTA releases.

# Plain explanation

When two galaxies merge, the supermassive black holes at their centres sink toward each other and form a pair. At first, passing stars carry away energy and bring the pair closer. But when the two are still about a few light-years apart, there may not be enough stars passing close by to keep the process going. The pair can linger there for a very long time. This puzzle is called the final parsec problem.

If gas is around, it can help. Gas in a ring around the pair can act like a brake, the way honey slows a stirring spoon, and shrink the orbit. But simulations show it is not that simple. In some cases the gas actually pushes the black holes apart. What happens depends on how different the two masses are, how stretched the orbits are, and how thick the gas ring is.

Why does it matter now? Pulsar timing experiments have found what looks like a background hum of gravitational waves, though not yet a confirmed detection, and its strength is a bit higher than many models of merging black holes predict.

The task is to compute, from the physics, how fast such pairs shrink and how stretched their orbits are, and then check if that fits the hum.

Where the analogy breaks: honey always slows the spoon, but the gas can also feed energy into the orbit and push the black holes apart.

# Student explanation

**Setup.** Supermassive black-hole binaries (SMBHBs) of 10⁸ to 10¹⁰ solar masses form in galaxy mergers. Their orbit shrinks in stages: dynamical friction against stars and gas brings them to parsec scales; then three-body scattering of stars (stellar hardening), torques from a circumbinary gas disc, and finally gravitational-wave (GW) emission take over at around 10⁻² pc separations. The final parsec problem is that the stellar loss cone (the set of stars on orbits that pass near enough to interact) may empty in a spherical nucleus, slowing the hardening; Milosavljević and Merritt quantified this stalling.

**Gas-driven evolution.** Simulations of circumbinary discs show that accretion tends to push the binary mass ratio toward equal masses, and the sign of the net torque (shrinking or expanding the orbit) depends on mass ratio q, eccentricity e, disc thickness (Mach number) and gas thermodynamics. For equal-mass binaries, 2D hydrodynamics gives an eccentricity attractor near e of 0.4 to 0.45; a nearly circular binary (e below about 0.1) tends to stay circular and in at least one study expands.

**The observable.** The nanohertz GW background from pulsar timing arrays (PTAs). Its spectrum should turn over at low frequency if hardening is slow or eccentricity is high, and for circular, GW-driven binaries the timing-residual power spectrum falls with frequency as a power law with index γ = 13/3 (equivalently, characteristic strain ∝ f^−2/3) (a smaller γ is seen in the 15-year NANOGrav data, with large errors). The amplitude A of about 2 to 3×10⁻¹⁵ at a frequency of 1/yr is higher than many astrophysical predictions.

**State of the art.** NANOGrav 15-year data show evidence for a background with Hellings–Downs correlations at about 3 to 4σ; EPTA, PPTA and CPTA saw similar signs. NANOGrav's interpretation found that matching the amplitude needs a high-normalisation black-hole mass function or an unusually high black-hole-to-host-mass relation, and little room for stalling. No array has yet reached 5σ.

**What is needed.** 3D magnetohydrodynamic simulations with realistic thermodynamics, run long enough to see secular change, and a population model coupling stellar, gas and GW hardening. Then predict the distribution of eccentricities and hardening time and compare with the PTA amplitude without invoking overly heavy black holes.

**Why it matters.** It tells us whether the PTA signal is from ordinary galaxy mergers.
