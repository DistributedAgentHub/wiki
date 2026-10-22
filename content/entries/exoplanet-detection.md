---
type: entry
slug: exoplanet-detection
title: "Exoplanet detection: transits and radial velocities"
field: physics
kind: ALGORITHM
status: ACTIVE
summary: "The two workhorse methods for finding planets: periodic dimming as a planet crosses its star, and periodic Doppler shifts as it tugs the star. Both are limited by stellar variability once planets get small."
reliedOn: Almost all of the roughly 6,400 confirmed exoplanets, their occurrence rates and the target lists for atmospheric characterisation come from these two methods. Any search for an Earth analogue depends on pushing them below their current noise floors.
dependsOn:
  - n-body-simulation
  - radiative-transfer
references:
  - title: "Kovács, Zucker and Mazeh 2002: A box-fitting algorithm in the search for periodic transits"
    url: https://arxiv.org/abs/astro-ph/0206099
    kind: paper
  - title: "Hippke and Heller 2019: Transit Least Squares"
    url: https://arxiv.org/abs/1901.02015
    kind: paper
  - title: "Rajpaul et al. 2015: A Gaussian process framework for modelling stellar activity signals in radial velocity data"
    url: https://arxiv.org/abs/1506.07304
    kind: paper
  - title: "Fischer et al. 2016: State of the field, extreme precision radial velocities"
    url: https://arxiv.org/abs/1602.07939
    kind: paper
  - title: "Figueira et al. 2025: A comprehensive study on radial velocity signals using ESPRESSO, pushing precision to the 10 cm/s level"
    url: https://arxiv.org/abs/2507.07514
    kind: paper
  - title: "Bryson et al. 2021: The occurrence of rocky habitable zone planets around solar-like stars from Kepler data"
    url: https://arxiv.org/abs/2010.14812
    kind: paper
  - title: "NASA Exoplanet Archive: 2025 news (6,000-planet milestone)"
    url: https://exoplanetarchive.ipac.caltech.edu/docs/2025news.html
    kind: docs
  - title: "ESA: PLATO mission page"
    url: https://www.esa.int/Science_Exploration/Space_Science/Plato
    kind: docs
timeline:
  - date: 2002-06-06
    title: Box Least Squares
    body: Kovacs, Zucker and Mazeh give the standard fast period search for transit signals and a detectability criterion based on depth over noise.
    source: https://arxiv.org/abs/astro-ph/0206099
  - date: 2015-06-24
    title: Gaussian-process activity modelling
    body: A framework that models RVs jointly with activity indicators separates stellar and planetary signals and becomes a standard method.
    source: https://arxiv.org/abs/1506.07304
  - date: 2019-01-07
    title: Transit Least Squares
    body: A template-matched search recovers more Earth-size planets than the box search at equal false-positive rate.
    source: https://arxiv.org/abs/1901.02015
  - date: 2025-07-10
    title: ESPRESSO reaches 10 cm/s short-term precision
    body: On-sky precision below 10 cm/s on timescales under an hour and about 40 cm/s over 3.5 years (Figueira et al., A&A 700, 2025).
    source: https://arxiv.org/abs/2507.07514
explainer:
  oneLine: Finding planets around other stars by watching for tiny dips in starlight or tiny wobbles in the star's motion.
  flow:
    - Planet blocks starlight or tugs on star
    - Dip or Doppler shift repeats each orbit
    - Fold data to find the period
    - Stellar spots and bubbling mimic signals
    - Earth twins hide in the noise
  glossary:
    - term: transit
      meaning: The passing of a planet in front of its star as seen from Earth, causing a small dip in brightness.
      link: https://en.wikipedia.org/wiki/Transit_(astronomy)
    - term: radial velocity
      meaning: The speed of a star toward or away from us, measured from the Doppler shift of its light.
      link: https://en.wikipedia.org/wiki/Doppler_spectroscopy
    - term: Doppler shift
      meaning: A change in the colour of light because the source moves toward or away from the observer.
      link: https://en.wikipedia.org/wiki/Doppler_effect
    - term: light curve
      meaning: A graph of a star's brightness over time.
      link: https://en.wikipedia.org/wiki/Light_curve
    - term: periodogram
      meaning: A graph that shows which repeat periods are present in a time series.
      link: https://en.wikipedia.org/wiki/Periodogram
    - term: limb darkening
      meaning: The effect that a star looks dimmer near its edge than in its middle, which changes the shape of a transit.
      link: https://en.wikipedia.org/wiki/Limb_darkening
    - term: habitable zone
      meaning: The range of distances from a star where a planet could have liquid water on its surface.
      link: https://en.wikipedia.org/wiki/Circumstellar_habitable_zone
    - term: Gaussian process
      meaning: A flexible statistical tool for modelling smooth but random variation, such as stellar activity.
      link: https://en.wikipedia.org/wiki/Gaussian_process
    - term: granulation
      meaning: The bubbling pattern of hot rising and cool sinking gas on a star's surface.
      link: https://en.wikipedia.org/wiki/Granule_(solar_physics)
    - term: matched filter
      meaning: Finding a known signal shape in noise by comparing the data to a copy of that shape.
      link: /research/gw-matched-filtering
    - term: astronomical unit (AU)
      meaning: The average Earth–Sun distance, about 150 million km.
      link: https://en.wikipedia.org/wiki/Astronomical_unit
    - term: plage
      meaning: Bright, magnetically active patches on a star's surface that distort its spectral lines.
      link: https://en.wikipedia.org/wiki/Plage_(astronomy)
  readFirst:
    - title: Methods of detecting exoplanets (Wikipedia)
      url: https://en.wikipedia.org/wiki/Methods_of_detecting_exoplanets
      why: Compares all the main detection techniques in one place.
    - title: NASA Exoplanet Exploration
      url: https://exoplanets.nasa.gov/
      why: NASA's friendly hub with the current planet count and mission news.
    - title: Transit method (Wikipedia)
      url: https://en.wikipedia.org/wiki/Transit_method
      why: A closer look at how transit signals are found.
site:
  published: true
  aiReviewed: true
---

## The two signals

**Transits.** If a planet's orbit is edge-on to us, it periodically blocks a fraction $\delta \approx (R_p/R_\star)^2$ of the starlight. For an Earth-size planet around a Sun-like star, $\delta$ is about 84 parts per million, and only about 0.5% of randomly oriented orbits at 1 AU transit. Transits give the planet's radius and orbital period.

**Radial velocities (RV).** The planet and star orbit a common centre of mass, so the star's line-of-sight velocity varies with semi-amplitude $K \propto m_p \sin i / (M_\star^{2/3} P^{1/3})$. Spectrographs measure the Doppler shift of thousands of absorption lines. The Earth induces about 9 cm/s on the Sun with a one-year period. RV gives a minimum planet mass; combined with a transit it gives density.

## Detection algorithms

Transit searches fold the light curve at trial periods and look for a repeating box-shaped dip. The Box Least Squares algorithm (Kovács, Zucker and Mazeh 2002) is a matched filter for that shape and finds that a detection is significant when the transit depth exceeds the standard deviation of the in-transit mean flux by a factor of about 6. Transit Least Squares (Hippke and Heller 2019) replaces the box with a limb-darkened transit shape and, in injection-recovery tests with Earth-size planets around Sun-like stars, recovered about 93% of planets at a 1% false-positive rate versus about 76% for the box search. This is the same signal-processing idea as the matched filtering used for gravitational waves, applied to a much simpler template family.

RV analysis fits Keplerian orbits to unevenly sampled time series, using periodograms to find candidate periods and Bayesian model comparison to decide how many planets are present. The hard part is not the orbit fit but the star: spots, plage, granulation and pulsation produce apparent velocity changes that are comparable to or larger than the planetary signal. Gaussian-process models trained jointly on the RV series and on activity indicators (line widths, bisector spans, chromospheric indices) are the standard tool (Rajpaul et al. 2015).

## State of the art (October 2026)

Space photometry (Kepler, then TESS) supplies the transit sample; the NASA Exoplanet Archive passed 6,000 confirmed planets on 17 September 2025 and listed about 6,450 in mid-October 2026. Kepler data give an occurrence rate of rocky planets (0.5 to 1.5 Earth radii) in the conservative habitable zone of Sun-like stars of 0.37 to 0.60 per star, with large uncertainty that reflects the lack of sensitivity at long periods.

On the RV side, the ESPRESSO spectrograph achieves on-sky precision better than 10 cm/s on timescales under an hour and about 40 cm/s over 3.5 years (20 to 30 cm/s over one year for a subset). Its authors find that for the three stars analysed for planets (tau Ceti = HD 10700, HD 102365 and the M dwarf HD 304636) the ESPRESSO data alone do not give conclusive evidence for the low-mass planets proposed, and that for HD 10700 the sensitivity is about 1.7 Earth masses for periods up to 100 days and 2 to 5 Earth masses in the habitable zone. For one of the stars, half of the RV variance is directly attributable to activity.

ESA's PLATO mission, with 26 cameras, is planned to launch on Ariane 6 in March 2027 (ESA mission page, October 2026) to find rocky planets in the habitable zones of Sun-like stars via transits.

## Limits

Transit surveys need long baselines (several orbits of a one-year planet) and RV follow-up for mass. RV surveys need hundreds of nights per star, instrument stability at the 10 cm/s level, and stellar-activity mitigation that has not yet been validated at that level on a Sun-like star.

# Plain explanation

Most planets around other stars are too faint to see directly, because the star outshines them, often by a billion times or more. So astronomers look for the effect a planet has on its star instead.

There are two main tricks. The first is the transit method. If a planet's orbit happens to be edge-on to us, the planet crosses in front of its star once per orbit and blocks a little of the starlight. It is like a moth flying across a lamp far away. The star dims slightly, a tiny fraction of a per cent, and then brightens again. A repeating dip reveals the planet's size and the length of its year.

The second trick is the wobble method. A planet and its star orbit a shared point, so the star moves in a small circle. When it moves toward us its light shifts slightly bluer, and when it moves away it shifts slightly redder. By measuring this shift precisely we learn the planet's year and how heavy it is.

Both tricks work best for big planets close to their star. Finding a true Earth twin, a small planet with a one-year orbit around a Sun-like star, is still out of reach, mainly because the star's own surface jitters more than the planet tugs it.

Where the analogy breaks: a moth passes in front of a lamp by chance, but only a small percentage of planetary orbits are lined up for us to see a transit.

# Student explanation

**Transits.** If the orbit is seen edge-on, the planet blocks a fraction δ of the starlight, about (R_p/R\_\*)², the square of the ratio of planet to star radius. For an Earth-size planet around a Sun-like star, δ is about 84 parts per million. The chance that a randomly oriented orbit at 1 AU transits is only about 0.5%. A transit gives the radius and the orbital period.

**Radial velocities (RV).** Planet and star orbit their common centre of mass, so the star's velocity along our line of sight varies periodically. The semi-amplitude K grows with the planet's mass and falls with its orbital period and the star's mass. Spectrographs measure the Doppler shift of thousands of absorption lines. The Earth moves the Sun by only about 9 cm/s. RV gives a minimum mass (because the tilt of the orbit is unknown); combined with a transit radius, it gives the density, and so hints at what the planet is made of.

**Detection algorithms.** For transits, fold the light curve at many trial periods and look for a repeating dip. The Box Least Squares (BLS) algorithm uses a box-shaped dip as a template, which makes it a matched filter (the same idea used for gravitational-wave searches). Transit Least Squares (TLS) uses a realistic limb-darkened transit shape and, in tests, finds more small planets. For RV, one fits Keplerian orbits to unevenly spaced measurements, uses periodograms to find candidate periods, and uses Bayesian model comparison to decide how many planets there are.

**The stellar noise wall.** The hardest part is the star. Magnetic spots, bright plage regions, granulation (bubbling convection), supergranulation and oscillations move the apparent velocity by a metre per second or more for the Sun, far more than the 9 cm/s of an Earth twin. These signals have structure on the time scales of planets' orbits, so they cannot be averaged away. Present methods use Gaussian processes and activity indicators measured from the same spectra.

**Why it matters.** Known planets number in the thousands. Finding Earth-like planets in the habitable zone, and measuring their atmospheres, is a major goal.
