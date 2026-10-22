---
type: problem
slug: mercury-instability-probability-gr-tidal
title: Probability of Mercury's orbital instability over 5 Gyr under general-relativistic and tidal perturbations
entry: relativistic-binary-dynamics
status: PARTIAL
origin: Laskar (1989) showed that the inner Solar System is chaotic; Laskar & Gastineau (2009) found an instability probability of about 1% over 5 Gyr.
ratings:
  difficulty: 45
  applicationValue: 6
  leverage: 20
workMix:
  theory: 40
  engineering: 5
  compute: 50
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: Laskar & Gastineau, Existence of collisional trajectories of Mercury, Mars and Venus with the Earth, Nature 459, 817 (2009)
    url: https://doi.org/10.1038/nature08096
  - title: Rare Event Sampling Improves Mercury Instability Statistics (Abbot et al. 2021)
    url: https://arxiv.org/abs/2106.09091
  - title: Mercury's chaotic secular evolution as a subdiffusive process (Abbot et al. 2023)
    url: https://arxiv.org/abs/2306.11870
  - title: General relativistic precession and the long-term stability of the solar system (Brown & Rein 2023)
    url: https://arxiv.org/abs/2303.05567
timeline:
  - date: 2009-06-11
    title: Collisional trajectories found
    body: Laskar & Gastineau find about 1% probability of Mercury's instability in 5 Gyr.
    source: https://doi.org/10.1038/nature08096
  - date: 2021-06-16
    title: Rare-event sampling
    body: Abbot et al. estimate about 10⁻⁴ probability of instability within 2 Gyr.
    source: https://arxiv.org/abs/2106.09091
  - date: 2023-03-09
    title: Advection–diffusion model with varying GR
    body: Brown & Rein show GR lowers the 5-Gyr instability probability about 60-fold and find no critical GR precession rate.
    source: https://arxiv.org/abs/2303.05567
  - date: 2023-06-20
    title: Subdiffusive model
    body: Abbot et al. show that a diffusive model underpredicts short-time instabilities and replace it with a subdiffusive model of g₁.
    source: https://arxiv.org/abs/2306.11870
explainer:
  oneLine: Is the Solar System stable? Estimate the small chance that Mercury is thrown off course within five billion years.
  flow:
    - Mercury's orbit turns slowly
    - Resonance with Jupiter can stretch it
    - Einstein's gravity reduces the risk
    - Chaos plus code errors blur the odds
    - Need a controlled probability estimate
  glossary:
    - term: orbital eccentricity
      meaning: How stretched an orbit is; 0 is a circle.
      link: https://en.wikipedia.org/wiki/Orbital_eccentricity
    - term: perihelion precession
      meaning: The slow turning of an elliptical orbit's long axis.
      link: https://en.wikipedia.org/wiki/Apsidal_precession
    - term: secular resonance
      meaning: A match between the slow turning rates of two orbits that lets one steadily change the other’s shape over very long times.
      link: https://en.wikipedia.org/wiki/Secular_resonance
    - term: chaos
      meaning: "Sensitive dependence on starting conditions: tiny differences grow so predictions fail after long times."
      link: https://en.wikipedia.org/wiki/Chaos_theory
    - term: general relativity
      meaning: Einstein's theory of gravity; it adds a small extra turning of Mercury's orbit.
      link: /research/general-relativity
    - term: tidal dissipation
      meaning: Loss of orbital energy as a body is repeatedly stretched and squeezed by another's gravity.
      link: https://en.wikipedia.org/wiki/Tidal_acceleration
    - term: N-body integration
      meaning: Following many bodies pulling on each other, step by step on a computer.
      link: /research/n-body-simulation
    - term: rare-event sampling
      meaning: Statistical methods that reach unlikely outcomes much more cheaply than brute-force repetition.
      link: https://en.wikipedia.org/wiki/Rare_event_sampling
    - term: diffusion model
      meaning: A model in which a quantity drifts randomly in small steps, like a pollen grain jiggling in water.
      link: https://en.wikipedia.org/wiki/Diffusion_process
    - term: Gyr
      meaning: A billion years.
      link: https://en.wikipedia.org/wiki/Year
    - term: secular
      meaning: In orbital mechanics, slow changes that build up over very many orbits, as opposed to quick wiggles.
      link: https://en.wikipedia.org/wiki/Secular_variation
    - term: subdiffusive
      meaning: Spreading out more slowly than ordinary random-walk diffusion.
      link: https://en.wikipedia.org/wiki/Anomalous_diffusion
  readFirst:
    - title: Stability of the Solar System (Wikipedia)
      url: https://en.wikipedia.org/wiki/Stability_of_the_Solar_System
      why: Overview of Mercury's risk and the history of the question.
    - title: "Tests of general relativity: Mercury's precession"
      url: https://en.wikipedia.org/wiki/Tests_of_general_relativity
      why: Background on Einstein's contribution to Mercury's orbit.
    - title: Chaos theory (Wikipedia)
      url: https://en.wikipedia.org/wiki/Chaos_theory
      why: The idea behind why long-term prediction fails.
site:
  aiReviewed: true
---

Compute the probability that Mercury's eccentricity grows to values leading to collision or ejection (instability) during the next 5 Gyr, and its dependence on the strength of general-relativistic precession, tidal dissipation in Mercury and the Sun, and the initial conditions within observational uncertainties. The structure of the problem is that chaos arises from secular resonance between Mercury's perihelion precession frequency g₁ and Jupiter's g₅; the instability probability in direct N-body integrations is about 1% over 5 Gyr, but events earlier than 3 Gyr are too rare for direct sampling and numerical error (time-step chaos) can produce artificial instability. The task is a mathematically controlled estimate of the instability time distribution, for example from a diffusion model of g₁ validated against rare-event-sampled N-body runs, with GR and tidal terms treated at the accuracy where their effect on the probability is resolved.

# State of the art

Laskar & Gastineau (Nature 459, 817, 2009; doi:10.1038/nature08096) integrated 2,501 solutions and found about 1% probability of Mercury's eccentricity reaching high values over 5 Gyr. Abbot et al. (arXiv:2106.09091) used rare-event sampling to estimate the probability of a Mercury instability within 2 Gyr as about 10⁻⁴, at 100 times lower cost than direct simulation. Abbot et al. (arXiv:2306.11870) showed that a purely diffusive model of g₁ underpredicts the instability probability by factors of 3–10⁴ on timescales below 5 Gyr and built a subdiffusive phenomenological model tuned to N-body statistics over 1–40 Gyr. Brown & Rein (arXiv:2303.05567) ran 1,280 N-body integrations over 12.5 Gyr with time-varying GR precession: GR lowers the 5-Gyr destabilisation probability by a factor of about 60, an advection–diffusion (Fokker–Planck) model reproduces the instability times with and without GR, and there is no critical GR precession frequency below which the system becomes markedly less stable. Time-step-induced numerical chaos (Hernandez, Hadden & Makino 2022) may inflate instability fractions unless small time steps are used. The estimate is not settled across integrators and models, and no resolution is reported.

# Applications

The result would establish the long-term stability of the Solar System, supports architecture studies for exoplanetary systems with similar secular resonances and benchmarks N-body integrators and rare-event methods. No practical application.

# Resolution criteria

Resolved when two independent codes with demonstrated convergence give agreeing instability probabilities (with uncertainties) as functions of time to 5 Gyr, and the dependence on GR and tidal effects is explained by a validated reduced model.

# Rating rationale

Lowered from the drafter's 66: the old 71 graded the broad question of Solar-System stability, while this sharpened problem already has a rare-event method (QDMC) and an advection–diffusion model that reproduce the N-body statistics, so a path is visible and the remaining work is controlled computation plus a justified reduced model. That places it in the 30–49 band, near the ringdown (40) and CCSN (50) problems. Leverage 20 and application value 6 are unchanged.

# Work mix rationale

Theory of secular chaos and large-scale computation with rare-event sampling.

# Verification

Two independent N-body codes with demonstrated convergence must give agreeing instability probabilities, with uncertainties, as functions of time out to 5 Gyr, and the role of GR and tides must be explained by a validated reduced model. The spec fixes the initial-condition ensemble size, integrator and timestep tests, and the instability criterion; the runs are repeatable by others on stated compute.

# Plain explanation

For centuries people have asked whether the planets will keep orbiting forever. The answer is not a clean yes. Mercury, the smallest and innermost planet, has an orbit that can slowly become more stretched. If it stretches enough, Mercury could hit Venus or the Sun, or be flung away.

The cause is a slow dance. Mercury's orbit gradually turns around in space, like a spinning top that wobbles. Jupiter's orbit does the same at a nearly equal rate. When two such rates nearly match, Jupiter can keep nudging Mercury at the same point in its orbit, a process called resonance, and the stretching builds up.

Einstein's gravity helps. It makes Mercury's orbit turn a bit faster, which moves it away from the match with Jupiter and makes a disaster less likely. In computer simulations of the next five billion years, about one run in a hundred ends with Mercury in serious trouble.

But that number is hard to pin down. Because the Solar System is chaotic, tiny differences grow, and computer errors can create fake instabilities.

The task is to get a trustworthy estimate of the probability, and to understand how it depends on Einstein's gravity and the tides that planets and the Sun raise on one another.

Where the analogy breaks: a wobbling top winds down in a predictable way, but Mercury's orbit drifts chaotically, so we can only ask about the odds, not predict one outcome.

# Student explanation

**The question.** Compute the probability that Mercury's eccentricity grows enough to lead to collision or ejection during the next 5 billion years, and how it depends on the strength of general-relativistic (GR) precession, tidal dissipation in Mercury and the Sun, and the initial conditions within observational uncertainties.

**The mechanism.** The long-term (secular) evolution of the planets' orbits can be described by frequencies g_i at which each perihelion turns. Chaos arises from a secular resonance between Mercury's perihelion precession frequency g₁ and Jupiter's g₅. GR adds about 0.43 arcseconds per year to Mercury's precession, shifting g₁ away from g₅ and stabilising the orbit. Without GR, destabilisation is much more common.

**Computing the probability.** In direct N-body integrations the instability probability is about 1% over 5 Gyr. Events earlier than 3 Gyr are too rare for direct sampling, and numerical errors (time-step chaos) can cause artificial instability. The problem calls for a mathematically controlled estimate of the instability-time distribution, for example from a diffusion model of g₁ validated against rare-event-sampled N-body runs, with GR and tidal terms treated at the accuracy where their effect on the probability is resolved.

**State of the art.**

- Laskar and Gastineau (Nature, 2009) integrated 2,501 solutions and found about 1% reaching high eccentricity over 5 Gyr.
- Abbot and collaborators used rare-event sampling to estimate the probability of instability within 2 Gyr as about 10⁻⁴, at 100 times lower cost than direct simulation. They also showed that a purely diffusive model of g₁ underpredicts the probability by large factors on timescales below 5 Gyr, and built a subdiffusive phenomenological model tuned to N-body statistics.
- Brown and Rein ran 1,280 N-body integrations over 12.5 Gyr with time-varying GR precession: GR lowers the 5-Gyr destabilisation probability by a factor of about 60, an advection–diffusion model reproduces the instability times with and without GR, and there is no critical GR precession frequency below which the system becomes markedly less stable.
- Time-step-induced numerical chaos may inflate instability fractions unless small time steps are used.

The estimate is not settled across integrators and models.

**Why it matters.** It is a clean test case for predicting rare outcomes in chaotic systems, and tells how much we can know about the long-term future of the Solar System.
