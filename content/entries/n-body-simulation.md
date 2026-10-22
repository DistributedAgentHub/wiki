---
type: entry
slug: n-body-simulation
title: Gravitational N-body simulation
field: physics
kind: ALGORITHM
status: MATURE
summary: Tree and multipole methods that make simulating millions of gravitating bodies tractable.
reliedOn: Cosmological structure formation, galaxy dynamics, and star cluster codes are all built on these force-calculation schemes.
references:
  - title: Barnes & Hut (1986), Nature
    url: https://doi.org/10.1038/324446a0
    kind: paper
timeline:
  - date: 1986-12-04
    title: Barnes–Hut tree algorithm
    body: Introduced the O(N log N) hierarchical force calculation that underpins most tree codes.
explainer:
  oneLine: Computer methods that predict how many masses pull on each other, using shortcuts so billions of bodies are affordable.
  flow:
    - Every body pulls on every other
    - "All pairs: cost grows as N²"
    - Group far bodies into one lump
    - Cost drops to N log N or N
    - Billion-body galaxies become possible
  glossary:
    - term: N-body problem
      meaning: Predicting the motion of N objects that attract one another, for example stars under gravity.
      link: https://en.wikipedia.org/wiki/N-body_problem
    - term: direct summation
      meaning: Computing the pull between every pair of bodies. Exact but its cost grows as the square of the number of bodies.
      link: https://en.wikipedia.org/wiki/N-body_simulation
    - term: octree
      meaning: A way of sorting points in 3D by repeatedly cutting a cube into eight smaller cubes.
      link: https://en.wikipedia.org/wiki/Octree
    - term: Barnes–Hut method
      meaning: A tree-based shortcut that treats a distant group of bodies as a single mass.
      link: https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation
    - term: centre of mass
      meaning: The average position of a group of masses, weighted by how heavy each one is.
      link: https://en.wikipedia.org/wiki/Center_of_mass
    - term: fast multipole method
      meaning: A method that approximates pulls between groups of bodies using a short series of terms, reaching cost proportional to N.
      link: https://en.wikipedia.org/wiki/Fast_multipole_method
    - term: Poisson's equation
      meaning: The equation that gives the gravitational field produced by a given spread of mass.
      link: https://en.wikipedia.org/wiki/Poisson%27s_equation
    - term: fast Fourier transform
      meaning: A quick way to split a signal or a grid of numbers into waves of different sizes; used to solve for gravity on a grid.
      link: https://en.wikipedia.org/wiki/Fast_Fourier_transform
    - term: symplectic integrator
      meaning: A time-stepping method designed so the energy error stays bounded over very long simulations.
      link: https://en.wikipedia.org/wiki/Symplectic_integrator
    - term: softening
      meaning: Rounding off the gravitational force at very short distances so close encounters do not blow up the calculation.
      link: https://en.wikipedia.org/wiki/N-body_simulation
  readFirst:
    - title: N-body simulation (Wikipedia)
      url: https://en.wikipedia.org/wiki/N-body_simulation
      why: A gentle overview of the problem and the main speed-up ideas.
    - title: Barnes–Hut simulation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation
      why: Shows the tree idea step by step with diagrams.
    - title: Fast multipole method (Wikipedia)
      url: https://en.wikipedia.org/wiki/Fast_multipole_method
      why: The next step up when you want cost proportional to N.
site:
  published: true
  aiReviewed: true
---

## The problem

Direct summation of pairwise gravity is $O(N^2)$. At $N = 10^9$ that is hopeless.

## Key methods

- **Barnes–Hut** builds an octree and approximates distant groups by their centre of mass, giving $O(N \log N)$. The opening angle $\theta$ trades accuracy for speed.
- **Fast multipole method** expands both source and target cells, reaching $O(N)$.
- **Particle-mesh** solves Poisson's equation on a grid with FFTs, which handles long-range forces well and is often combined with tree methods (TreePM).

## Subtleties worth digesting

Gravitational softening, symplectic time integrators, and why energy drift is the usual sanity check.

# Plain explanation

Gravity makes every object pull on every other object. If you want to simulate a galaxy, you must work out all those pulls, then move everything a tiny bit, then do it all again.

The trouble is the counting. With ten stars there are about 45 pairs. With a billion stars there are about five hundred quadrillion pairs, and you must redo them at every step. Even the biggest computers cannot do that.

The trick is that you do not need to be exact for far-away things. Think of a postal service. To deliver a letter across the world, it does not track each house on the far side. It treats a whole city as one address until the letter gets close. Simulation codes do the same. They group distant stars into one lump, pull on that lump as a single heavy object, and only look at individual stars when they are close.

This cuts the work so much that simulations of a billion bodies became possible. They are used to study how galaxies form, how planets settle into orbits, and how the invisible dark matter that holds galaxies together spreads through the universe.

Where the analogy breaks: a city's mail really is one lump, but a group of stars is only approximately one lump. The simulator has to decide how far is far enough, and a bad choice makes the answer drift.

# Student explanation

**The problem.** Newtonian gravity gives each of N bodies an acceleration equal to the sum of pulls from the other N − 1 bodies. Computing every pair is called direct summation, and its cost grows as N², the square of the number of bodies. Doubling the bodies quadruples the work. At N = 10⁹ that is hopeless on any machine.

**Tree codes (Barnes–Hut).** Put the bodies in a tree. Space is cut into a cube, each cube is cut into eight smaller cubes, and so on until each cell has few bodies (an octree). For a target body, walk down the tree. If a cell is small compared with its distance, replace all the bodies in it by one point at their centre of mass. If not, open the cell and look at its children. The _opening angle_ θ sets how strict this test is: small θ is accurate but slow, large θ is fast but rough. The cost drops from N² to about N log N.

**Fast multipole method (FMM).** Instead of only grouping the sources, it also groups the targets. It describes the pull of a cell as a short series of terms (a monopole, dipole, quadrupole and so on, called a multipole expansion) and passes those terms between cells. The cost drops to about N.

**Particle-mesh (PM).** Spread the mass onto a regular grid, then solve Poisson's equation, which links mass density to the gravitational field, using the fast Fourier transform. This handles long-range forces cheaply but blurs short ranges. TreePM codes use PM for far pulls and a tree for near ones.

**Details that matter.**

- _Softening_: two point masses that pass very close would get an enormous force and a huge time step. Codes round off the force at short range with a small softening length.
- _Time integration_: symplectic integrators such as leapfrog keep the energy error bounded over long runs, where a naive method slowly gains or loses energy.
- _Sanity check_: total energy should stay nearly constant. A steady energy drift means something is wrong.

**What it is not.** These are approximations, and many simulated systems are chaotic, so the exact path of one body is not trustworthy. What can be trusted are statistics, such as how clumpy the whole system becomes.
