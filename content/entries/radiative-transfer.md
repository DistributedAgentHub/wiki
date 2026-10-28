---
type: entry
slug: radiative-transfer
title: Radiative transfer, from stellar atmospheres to curved spacetime
field: physics
kind: THEORY
status: MATURE
summary: The transport equation for specific intensity, its moment and Monte Carlo solutions, line and synchrotron opacities, and its covariant form used to ray-trace images of black holes.
reliedOn: Radiation-hydrodynamics codes, stellar atmosphere models, exoplanet spectral retrievals and black-hole image synthesis are all built on it. Downstream it feeds core-collapse supernova transport, JWST retrieval degeneracies, the activity-limited Earth-twin radial-velocity problem, photon-ring detection and 21-cm brightness-temperature modelling.
dependsOn:
  - general-relativity
references:
  - title: "Rybicki and Lightman 1979/1985: Radiative Processes in Astrophysics (Wiley)"
    url: https://doi.org/10.1002/9783527618170
    kind: book
  - title: "Hubeny and Mihalas 2014: Theory of Stellar Atmospheres (Princeton University Press)"
    url: https://press.princeton.edu/books/paperback/9780691163291/theory-of-stellar-atmospheres
    kind: book
  - title: "Levermore 1984: Relating Eddington factors to flux limiters (JQSRT 31, 149)"
    url: https://doi.org/10.1016/0022-4073(84)90112-2
    kind: paper
  - title: "Dolence et al. 2009: grmonty, a Monte Carlo code for relativistic radiative transport"
    url: https://arxiv.org/abs/0909.0708
    kind: paper
  - title: "Mościbrodzka and Gammie 2018: ipole, semianalytic scheme for relativistic polarized radiative transport"
    url: https://arxiv.org/abs/1712.03057
    kind: paper
  - title: "Johnson et al. 2020: Universal interferometric signatures of a black hole's photon ring"
    url: https://arxiv.org/abs/1907.04329
    kind: paper
  - title: "Gralla and Lupsasca 2020: Lensing by Kerr black holes"
    url: https://arxiv.org/abs/1910.12873
    kind: paper
  - title: "Madhusudhan 2019: Exoplanetary atmospheres, key insights, challenges and prospects"
    url: https://arxiv.org/abs/1904.03190
    kind: paper
timeline:
  - date: 1981-08-01
    title: Flux-limited diffusion
    body: Levermore and Pomraning derive a flux-limited diffusion theory that interpolates between the diffusion and free-streaming limits, still the default moment closure in many radiation-hydrodynamics codes.
    source: https://doi.org/10.1086/159157
  - date: 2009-10-07
    title: Retrieval methods for exoplanet atmospheres
    body: Madhusudhan and Seager introduce a parametric temperature and abundance retrieval, starting the forward-model-plus-inference approach to exoplanet spectra.
    source: https://arxiv.org/abs/0910.1347
  - date: 2017-12-08
    title: ipole polarized GRRT
    body: A public, covariant, polarized ray-tracing scheme is presented, later used to generate Event Horizon Telescope model images.
    source: https://arxiv.org/abs/1712.03057
  - date: 2019-07-09
    title: Photon-ring interferometric signature
    body: The nested photon subrings are shown to produce universal signatures on long interferometric baselines, enabling mass and spin measurement with sparse arrays.
    source: https://arxiv.org/abs/1907.04329
  - date: 2023-03-21
    title: EHT polarized-transfer code comparison
    body: Polarized GRRT codes used by the Event Horizon Telescope are compared on common GRMHD inputs to quantify inter-code agreement.
    source: https://arxiv.org/abs/2303.12004
explainer:
  oneLine: The rules for how light is emitted, absorbed and scattered as it travels through gas, dust and curved space.
  flow:
    - Light leaves a source
    - Gas and dust absorb or scatter some
    - Gas also adds its own glow
    - Track the net change along each ray
    - Compare predicted light with telescope data
  glossary:
    - term: specific intensity
      meaning: How much light energy flows in one direction, per area, time, solid angle and frequency.
      link: https://en.wikipedia.org/wiki/Radiance
    - term: optical depth
      meaning: "A measure of how opaque a layer is: it counts how many typical absorption-or-scattering distances the light must cross."
      link: https://en.wikipedia.org/wiki/Optical_depth
    - term: emissivity
      meaning: How much light a material gives off, per unit volume, in a given direction and colour.
      link: https://en.wikipedia.org/wiki/Radiative_transfer
    - term: source function
      meaning: The ratio of how much light gas adds to how much it removes; in thermal equilibrium it equals the blackbody curve.
      link: https://en.wikipedia.org/wiki/Radiative_transfer
    - term: blackbody radiation
      meaning: The light given off by an ideal object in thermal equilibrium, with a spectrum set only by temperature.
      link: https://en.wikipedia.org/wiki/Black-body_radiation
    - term: local thermodynamic equilibrium
      meaning: The approximation that gas at each point behaves as if in thermal balance at one local temperature.
      link: https://en.wikipedia.org/wiki/Local_thermodynamic_equilibrium
    - term: Monte Carlo method
      meaning: A way of solving problems by following many random samples, here random packets of light.
      link: https://en.wikipedia.org/wiki/Monte_Carlo_method
    - term: synchrotron radiation
      meaning: Light given off by fast charged particles spiralling in a magnetic field.
      link: https://en.wikipedia.org/wiki/Synchrotron_radiation
    - term: Voigt profile
      meaning: "The usual shape of a spectral line: thermal-motion (Doppler) broadening combined with natural and pressure broadening."
      link: https://en.wikipedia.org/wiki/Voigt_profile
    - term: ray tracing
      meaning: Following many light paths through a scene or through curved spacetime to build up an image.
      link: https://en.wikipedia.org/wiki/Ray_tracing_(graphics)
    - term: closure
      meaning: An extra rule that links radiation pressure to energy density and flux, so the simplified moment equations can be solved.
      link: https://en.wikipedia.org/wiki/Radiative_transfer
    - term: isotropic
      meaning: The same in every direction.
      link: https://en.wikipedia.org/wiki/Isotropy
  readFirst:
    - title: Radiative transfer (Wikipedia)
      url: https://en.wikipedia.org/wiki/Radiative_transfer
      why: A concise overview of the equation and its terms.
    - title: Optical depth (Wikipedia)
      url: https://en.wikipedia.org/wiki/Optical_depth
      why: The one idea you need to read any radiative-transfer discussion.
    - title: "Event Horizon Telescope: science"
      url: https://eventhorizontelescope.org/
      why: See how simulated radiative-transfer images are compared with real black-hole images.
raw:
  body: "## What it is\n\nThe specific intensity $I_\\nu(\\mathbf{x}, \\hat n, t)$ is the energy per unit time, area, solid angle and frequency carried along direction $\\hat n$. In a static medium it obeys the radiative transfer equation (RTE)\n$$\\frac{1}{c}\\frac{\\partial I_\\nu}{\\partial t} + \\hat n\\cdot\\nabla I_\\nu = j_\\nu - \\alpha_\\nu I_\\nu,$$\nwith emissivity $j_\\nu$ and extinction $\\alpha_\\nu = \\alpha^{\\rm abs}_\\nu + \\alpha^{\\rm sca}_\\nu$. Along a ray, with optical depth $d\\tau_\\nu = \\alpha_\\nu ds$ and source function $S_\\nu = j_\\nu/\\alpha_\\nu$, the formal solution is $I_\\nu(\\tau) = I_\\nu(0)e^{-\\tau} + \\int_0^\\tau S_\\nu(\\tau')e^{-(\\tau-\\tau')}d\\tau'$. In LTE Kirchhoff's law gives $S_\\nu = B_\\nu(T)$ for the thermal part. In non-LTE, the level populations come from statistical equilibrium coupled to the radiation field, and the problem becomes non-local and non-linear.\n\n## Core results\n\n**Moments.** The moments $J_\\nu, H_\\nu, K_\\nu$ (energy density, flux and pressure in the Eddington notation) obey moment equations that need a closure. The Eddington approximation $K = J/3$ is exact for isotropic radiation, and at large optical depth it leads to the diffusion limit, $F = -(4\\sigma/3\\kappa_R\\rho)\\nabla T^4$, with the Rosseland mean $1/\\kappa_R = \\int (1/\\kappa_\\nu)\\partial_T B_\\nu d\\nu / \\int \\partial_T B_\\nu d\\nu$. The Planck mean controls emission in optically thin gas. Flux-limited diffusion (Levermore and Pomraning 1981) caps the flux at $cE$, and the M1 closure sets the Eddington tensor from the reduced flux $f = |F|/cE$. Levermore (1984) related the two families.\n\n**Scattering and lines.** Coherent scattering makes $S_\\nu$ depend on $J_\\nu$ and requires iteration (Λ-iteration, accelerated Λ-iteration). Line formation uses profile functions (Doppler, Voigt) and partial or complete redistribution. Opacity tables or k-distributions handle molecular bands in cool atmospheres.\n\n**Synchrotron.** For a power-law electron distribution $N(\\gamma) \\propto \\gamma^{-p}$ the optically thin spectrum is $j_\\nu \\propto \\nu^{-(p-1)/2}$, and self-absorption produces a $\\nu^{5/2}$ thick slope. Thermal synchrotron from relativistic Maxwellian electrons is standard for horizon-scale emission. Faraday rotation and conversion couple the Stokes parameters.\n\n**Covariant form.** $I_\\nu/\\nu^3$ is a Lorentz invariant and is conserved along null geodesics in vacuum. With the invariant emissivity $j_\\nu/\\nu^2$ and absorptivity $\\nu\\alpha_\\nu$, the transfer equation along a geodesic with affine parameter $\\lambda$ reads $d(I_\\nu/\\nu^3)/d\\lambda = (j_\\nu/\\nu^2) - (\\nu\\alpha_\\nu)(I_\\nu/\\nu^3)$, with frequencies measured in the local fluid frame. General-relativistic ray tracing (GRRT) integrates Kerr null geodesics backward from a camera and solves this equation (polarized, in ipole) through GRMHD snapshots. grmonty does the same problem by Monte Carlo.\n\n## Techniques to master\n\nFormal solutions and short- or long-characteristic schemes; discrete ordinates; Monte Carlo photon packets with weighting; implicit time stepping for stiff radiation–matter coupling; frequency-group discretization; polarized transfer with the Mueller-matrix formalism; Bayesian forward-model retrieval (nested sampling over temperature–pressure profiles, abundances and clouds).\n\n## Reading path\n\nRybicki and Lightman, chapters 1–6, are the prerequisite. Hubeny and Mihalas, *Theory of Stellar Atmospheres*, cover non-LTE and numerical methods, and Mihalas and Mihalas, *Foundations of Radiation Hydrodynamics*, cover moving media. For curved spacetime read the grmonty and ipole papers. For photon rings read Johnson et al. (2020) and Gralla and Lupsasca (2020). For retrievals read Madhusudhan's 2019 review.\n\n## Where it bites\n\nClosure error in M1 versus full transport is a live issue in core-collapse supernova radiation hydrodynamics. In JWST transmission spectra of temperate sub-Neptunes, cloud, haze and abundance parameters are degenerate in the forward model. Line formation in convective atmospheres sets the convective blueshift that limits Earth-twin radial velocities. GRRT predicts the width and brightness of the $n=1$ photon subring. The 21-cm brightness temperature is a solution of the RTE through a medium whose spin temperature is set by non-LTE level populations."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Almost everything we know about the universe comes from light. But light seldom travels in a straight, clean line from a star to us. On the way it can be soaked up by gas, scattered by dust, or added to by glowing gas. Radiative transfer is the science of keeping track of all of that.

Think of headlights in fog. A beam leaves the car bright, but the fog scatters and absorbs some of it, and the fog itself glows a little in the glare. How far you can see depends on how thick the fog is. Radiative transfer is the careful bookkeeping for that: how much light is added and how much taken away at each step.

Astronomers need this everywhere. To read the composition of a star from its light, they must know what the star's outer layers did to the light. To see through a dusty galaxy, they must undo the dimming. To understand a supernova explosion, they must know how heat leaks out of its core.

For some problems the bookkeeping is simple. For others, such as photons moving around a black hole, where space itself is bent, it needs powerful computers.

Where the analogy breaks: fog is the same for all colours of light, but real gas and dust treat each colour differently, and that is what makes spectra rich in clues.

# Student explanation

**The quantity we track.** Light in a given direction at a given point is described by the specific intensity I: the energy passing through unit area, per unit time, per unit solid angle (a patch of directions), per unit frequency. Following a ray, intensity changes because the medium emits light (emissivity j) and removes light (extinction α, made of absorption plus scattering). That is the radiative transfer equation (RTE).

**Optical depth and the source function.** Measure distance along the ray in units of optical depth τ, which counts how many mean free paths (average distances before a photon is absorbed or scattered) have been crossed. Then the RTE can be solved: the light that started the ray fades as e^(−τ), and the emission added along the way is weighted by how much of it survives to the end. The ratio of emission to extinction is the source function S. In thermal equilibrium, S is the blackbody (Planck) function at the local temperature. Departing from equilibrium (non-LTE) makes the problem non-local and non-linear: the level populations of atoms depend on the radiation, which depends on the populations.

**Simplifications.**

- _Moments_: instead of tracking all directions, track the energy density, flux and pressure of radiation. These need a closure, a rule linking them. The Eddington approximation works well for nearly isotropic light and leads, in very opaque material, to a diffusion law where heat flows down the temperature gradient.
- _Flux-limited diffusion_ and the _M1 closure_ extend this to cases where light is not so trapped.
- _Scattering and lines_: scattering makes S depend on the light itself, so one iterates (Λ-iteration, and faster accelerated versions). Spectral lines are broadened by thermal (Doppler) motion and by natural and pressure broadening; combined, they give Voigt profiles.
- _Monte Carlo_: follow random packets of light as they scatter and get absorbed; slow but flexible.

**Around black holes.** In curved spacetime, light follows geodesics, and the transfer equation is written in covariant form. Ray-tracing codes use it to make synthetic images of black holes for comparison with the Event Horizon Telescope.

**What is hard.** Real problems couple all frequencies, directions, and moving gas. Methods that are exact in one limit (thick or thin) fail in between. That motivates the radiation-hydrodynamics entry.
