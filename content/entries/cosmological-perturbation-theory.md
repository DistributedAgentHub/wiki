---
type: entry
slug: cosmological-perturbation-theory
title: Cosmological perturbation theory and Boltzmann codes
field: physics
kind: THEORY
status: MATURE
summary: Linear perturbations of an FLRW universe coupled to Boltzmann equations for photons, neutrinos, baryons and dark matter, solved by CAMB and CLASS to predict CMB spectra and the matter power spectrum.
reliedOn: Every CMB, BAO, weak-lensing and Lyman-α likelihood calls a Boltzmann code. Downstream it underlies the Hubble tension and sound-horizon models, DESI dynamical dark energy, the S8 tension, the neutrino mass sum, Lyman-α warm and fuzzy dark-matter bounds, primordial B-modes and delensing, and CMB birefringence.
dependsOn:
  - general-relativity
references:
  - title: "Ma and Bertschinger 1995: Cosmological perturbation theory in the synchronous and conformal Newtonian gauges"
    url: https://arxiv.org/abs/astro-ph/9506072
    kind: paper
  - title: "Bardeen 1980: Gauge-invariant cosmological perturbations (Phys. Rev. D 22, 1882)"
    url: https://doi.org/10.1103/PhysRevD.22.1882
    kind: paper
  - title: "Lewis, Challinor and Lasenby 2000: Efficient computation of CMB anisotropies in closed FRW models (CAMB)"
    url: https://arxiv.org/abs/astro-ph/9911177
    kind: paper
  - title: "Lesgourgues 2011: The Cosmic Linear Anisotropy Solving System (CLASS) I: Overview"
    url: https://arxiv.org/abs/1104.2932
    kind: paper
  - title: "Blas, Lesgourgues and Tram 2011: CLASS II: Approximation schemes"
    url: https://arxiv.org/abs/1104.2933
    kind: paper
  - title: "Dodelson and Schmidt 2020: Modern Cosmology, 2nd edition (Academic Press/Elsevier)"
    url: https://doi.org/10.1016/C2017-0-01943-2
    kind: book
  - title: "Baumann 2022: Cosmology (Cambridge University Press)"
    url: https://doi.org/10.1017/9781108937092
    kind: book
  - title: "Mead et al. 2020: HMcode-2020, improved modelling of non-linear cosmological power spectra with baryonic feedback"
    url: https://arxiv.org/abs/2009.01858
    kind: paper
timeline:
  - date: 1995-06-11
    title: Synchronous and Newtonian gauge equations
    body: Ma and Bertschinger give the full linear Einstein–Boltzmann system in both gauges, including massive neutrinos. It is the template for every later Boltzmann code.
    source: https://arxiv.org/abs/astro-ph/9506072
  - date: 1996-03-08
    title: Line-of-sight integration (CMBFAST)
    body: Seljak and Zaldarriaga replace the full multipole hierarchy by a source-times-Bessel integral, speeding up CMB spectrum computation by orders of magnitude.
    source: https://arxiv.org/abs/astro-ph/9603033
  - date: 1999-11-10
    title: CAMB
    body: Lewis, Challinor and Lasenby present the code that became CAMB, extending the line-of-sight method to closed FRW models.
    source: https://arxiv.org/abs/astro-ph/9911177
  - date: 2011-04-14
    title: CLASS
    body: The Cosmic Linear Anisotropy Solving System is released, with documented approximation schemes and accuracy controls that make it an independent cross-check on CAMB.
    source: https://arxiv.org/abs/1104.2932
  - date: 2020-09-03
    title: HMcode-2020
    body: An updated halo-model fit for the non-linear matter power spectrum, including a baryonic-feedback response, is calibrated against simulations.
    source: https://arxiv.org/abs/2009.01858
explainer:
  oneLine: The math that grows tiny early ripples forward in time to predict the afterglow of the Big Bang.
  flow:
    - Smooth universe plus tiny ripples
    - Follow each ripple size separately
    - Light and matter form ringing plasma
    - Freed light freezes the pattern in
    - Codes predict spectra to compare with data
  glossary:
    - term: perturbation
      meaning: A small deviation from a smooth, simple background that is treated with simplified equations.
      link: https://en.wikipedia.org/wiki/Cosmological_perturbation_theory
    - term: power spectrum
      meaning: A plot of how strong the ripples are at each size scale.
      link: https://en.wikipedia.org/wiki/Power_spectrum
    - term: Boltzmann equation
      meaning: An equation that tracks how a gas of particles, such as photons, is distributed in position and direction as it scatters.
      link: https://en.wikipedia.org/wiki/Boltzmann_equation
    - term: gauge
      meaning: A choice of how to label space and time; physical predictions should not depend on it.
      link: https://en.wikipedia.org/wiki/Gauge_theory
    - term: Thomson scattering
      meaning: The scattering of light off free electrons, which kept light and matter tightly coupled in the early universe.
      link: https://en.wikipedia.org/wiki/Thomson_scattering
    - term: baryon acoustic oscillations
      meaning: A characteristic distance imprinted in the distribution of matter by early sound waves; used as a ruler.
      link: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
    - term: sound horizon
      meaning: The farthest distance a sound wave in the early universe could travel before the light was released.
      link: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
    - term: Silk damping
      meaning: The smoothing-out of small ripples caused by photons leaking from one region to another.
      link: https://en.wikipedia.org/wiki/Silk_damping
    - term: recombination
      meaning: The time when electrons and nuclei first joined into neutral atoms and the universe became transparent.
      link: https://en.wikipedia.org/wiki/Recombination_(cosmology)
    - term: cosmic inflation
      meaning: A proposed burst of extremely fast expansion in the very early universe that stretched tiny quantum fluctuations into seeds of structure.
      link: https://en.wikipedia.org/wiki/Cosmic_inflation
    - term: cosmic microwave background
      meaning: The oldest light we can see, released about 380,000 years after the Big Bang.
      link: /research/cosmic-microwave-background
    - term: multipole
      meaning: "One term in a breakdown of a pattern over directions: monopole (average), dipole (one side vs the other), quadrupole, and finer ones."
      link: https://en.wikipedia.org/wiki/Multipole_expansion
  readFirst:
    - title: Cosmic microwave background (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cosmic_microwave_background
      why: Sets the scene for what the perturbation calculation predicts.
    - title: Baryon acoustic oscillations (Wikipedia)
      url: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
      why: Explains the sound-wave ruler that comes out of this theory.
    - title: Wayne Hu's CMB tutorials
      url: https://background.uchicago.edu/~whu/
      why: Famous visual, intuitive introductions to acoustic peaks and the physics behind them.
    - title: CLASS code website
      url: https://github.com/lesgourg/class_public
      why: Home of one of the two standard solver codes mentioned above.
raw:
  body: "## What it is\n\nThe theory perturbs the FLRW metric to first order and evolves each species' phase-space distribution with the linearized Einstein–Boltzmann system. Scalar metric perturbations come in two common gauges (Ma and Bertschinger 1995). The conformal Newtonian gauge is $ds^2 = a^2(\\tau)[-(1+2\\psi)d\\tau^2 + (1-2\\phi)\\delta_{ij}dx^i dx^j]$, and the synchronous gauge uses $h$ and $\\eta$. Bardeen (1980) built the gauge-invariant combinations. In Fourier space each mode $k$ evolves independently, and the initial conditions are set by an inflationary spectrum $\\mathcal{P}_\\mathcal{R}(k) = A_s (k/k_*)^{n_s - 1}$ (adiabatic in the base model).\n\n## The core machinery\n\n**Hierarchy.** Photon temperature and polarization perturbations and massless neutrinos are expanded in Legendre multipoles $\\Theta_\\ell(k,\\tau)$, giving an infinite coupled hierarchy. Thomson scattering at rate $\\dot\\kappa = a n_e \\sigma_T$ couples photons to baryons. Massive neutrinos also need a momentum grid. The hierarchy is truncated at a finite $\\ell_{\\max}$ with a free-streaming closure.\n\n**Tight coupling and acoustic oscillations.** For $\\dot\\kappa \\gg k$ the photon–baryon fluid oscillates with sound speed $c_s = c/\\sqrt{3(1+R)}$, $R = 3\\rho_b/4\\rho_\\gamma$. The comoving sound horizon at the baryon drag epoch,\n$$r_d = \\int_{z_d}^{\\infty} \\frac{c_s(z)\\,dz}{H(z)},$$\nis the BAO standard ruler. Photon diffusion damps small scales roughly as $e^{-k^2/k_D^2}$ (Silk damping).\n\n**Recombination.** The visibility function $g = \\dot\\kappa e^{-\\kappa}$ depends on the ionization history, computed with RECFAST, HyRec or CosmoRec at the accuracy needed for Planck. Reionization adds a large-angle bump in polarization controlled by $\\tau$.\n\n**Line of sight.** Seljak and Zaldarriaga (1996) wrote $\\Theta_\\ell(k,\\tau_0)$ as a time integral of sources times spherical Bessel functions. The CMB spectrum is then $C_\\ell = 4\\pi\\int d\\ln k\\, \\mathcal{P}_\\mathcal{R}(k)\\, |\\Delta_\\ell(k)|^2$ for T, E and B. Scalars source only T and E. Primordial tensors source B (amplitude $r$), and lensing converts E into B.\n\n**Matter.** The linear spectrum is $P(k,z) = \\tfrac{2\\pi^2}{k^3}\\mathcal{P}_\\mathcal{R}(k) T^2(k) D^2(z)$, with the growth rate $f = d\\ln D/d\\ln a$ entering redshift-space distortions as $f\\sigma_8$ and lensing through $S_8 = \\sigma_8\\sqrt{\\Omega_m/0.3}$. Massive neutrinos, warm dark matter and fuzzy (ultralight) dark matter suppress power below their free-streaming or Jeans scales. Projected observables use the Limber approximation, $C_\\ell \\approx \\int d\\chi\\, W^2(\\chi)\\chi^{-2} P(k = (\\ell+1/2)/\\chi)$.\n\n**Beyond linear.** The halo model and fitted emulators such as HMcode-2020 (which includes baryonic feedback) extend $P(k)$ into the non-linear regime that weak lensing probes.\n\n## Techniques to master\n\nGauge transformations and gauge-invariant variables; the Boltzmann equation in an expanding background; tight-coupling and radiation-streaming approximations; stiff ODE integration over many $k$ modes; Bessel-function quadrature; the Fisher matrix and MCMC wrappers (Cobaya, MontePython) that call CAMB or CLASS.\n\n## Reading path\n\nStart with Dodelson and Schmidt, *Modern Cosmology* (2nd ed.), and Baumann, *Cosmology*. Then read Ma and Bertschinger (1995) line by line, Seljak and Zaldarriaga (1996), the CAMB paper of Lewis, Challinor and Lasenby (2000), and CLASS I–II (Lesgourgues 2011; Blas, Lesgourgues and Tram 2011) for approximation schemes. Read the source of either code alongside.\n\n## Where it bites\n\nSound-horizon reduction models (early dark energy, extra $N_{\\rm eff}$, varying electron mass) change $r_d$ through the integral above and are tested against ACT, SPT and DESI. DESI's evolving-dark-energy preference and the neutrino-mass bound both enter through $H(z)$ and growth, and the $\\sum m_\\nu$ limit comes from free-streaming suppression. The $S_8$ problem hinges on the non-linear and baryonic corrections to $P(k)$. Lyman-α WDM and FDM bounds use the small-scale cutoff in the transfer function. B-mode delensing needs the lensing B-mode template, and birefringence rotates E into B."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

The early universe was almost perfectly smooth, but not quite. There were tiny differences in density from place to place, about one part in a hundred thousand. Over billions of years gravity made the denser regions denser, and they grew into galaxies and clusters.

To connect those tiny early ripples to what telescopes see today, scientists need a calculation. They treat the universe as a smooth backdrop and then add the small ripples on top. Because the ripples are so small, the equations can be simplified. Each size of ripple can be followed separately, like following each note in a chord.

In the early universe, light and ordinary matter were stuck together in a hot soup. Gravity pulled the soup inward, and the pressure of the light pushed it back out. The result was sound waves ringing through the whole universe. When the soup cooled and light was freed, the pattern was frozen in. We still see it today in the oldest light we can detect.

Computer programs named CAMB and CLASS do this calculation. Cosmologists feed in guesses for things like how much dark matter exists. The programs then output predictions that can be checked against telescope data. This is how we learn what the universe is made of.

Where the analogy breaks: music notes do not change each other, but in the real universe, at late times and small scales, the ripples interact, and this simple method stops working.

# Student explanation

**Setting up.** Start with a perfectly smooth expanding universe (the FLRW model). Add small perturbations to the metric (the geometry) and to the density, velocity and temperature of each ingredient: photons, neutrinos, ordinary (baryonic) matter and cold dark matter. Keep only terms linear in the perturbation. This is accurate while the ripples are small.

**Gauges.** Splitting the universe into smooth part plus ripples is a choice, called a gauge. Different choices describe the same physics but make different-looking equations. Two common choices are the conformal Newtonian gauge, which looks like Newtonian gravity, and the synchronous gauge. Physical predictions must not depend on the choice.

**Fourier modes.** Because the linearized equations treat different spatial wave-numbers k separately, each mode can be evolved by itself. The starting values come from inflation, which predicts a nearly scale-invariant power spectrum: the amplitude of ripples is almost the same on all sizes, with slightly more on large scales. Two numbers describe it: the amplitude A_s and the tilt n_s.

**The Boltzmann hierarchy.** Photons and neutrinos are not simple fluids, so we track how their distribution depends on direction. We expand that dependence into multipoles (monopole, dipole, quadrupole and higher), which gives a long chain of coupled equations. In practice the chain is cut off at a finite length.

**Tight coupling and acoustic oscillations.** Early on, photons scatter off electrons very frequently (Thomson scattering), so photons and baryons move as one fluid. Gravity compresses it and radiation pressure pushes it back, producing sound waves with speed c_s about c/√3 reduced slightly by the baryon loading. The distance a sound wave can travel before the universe becomes transparent is the sound horizon, and it acts as a standard ruler: the baryon acoustic oscillation (BAO) scale. Photon diffusion damps small scales (Silk damping).

**Recombination.** About 380,000 years after the Big Bang, electrons and nuclei combine and photons escape. The detailed ionization history must be computed accurately, with codes such as RECFAST or HyRec, because the data are now very precise.

**Output.** CAMB and CLASS solve these equations on a grid of k and time and use a line-of-sight integral to quickly give the CMB temperature and polarization spectra, and the matter power spectrum.

**Limits.** At late times and small scales, matter clumps strongly and the linear approximation fails; that needs simulations (see the N-body entry).
