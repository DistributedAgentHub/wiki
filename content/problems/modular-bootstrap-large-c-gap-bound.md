---
type: problem
slug: modular-bootstrap-large-c-gap-bound
title: The optimal large-c bound on the lightest primary of a 2D CFT from modular invariance, and whether c/12 can be reached
entry: holographic-duality-ads-cft
status: OPEN
origin: Hellerman, 2009 (arXiv:0902.2790); sharpened numerically by Friedan–Keller, Collier–Lin–Yin and Afkhami-Jeddi–Hartman–Tajdini, and analytically by Hartman–Mazáč–Rastelli, 2019
ratings:
  difficulty: 62
  applicationValue: 2
  leverage: 28
verification:
  route: REVIEW
sources:
  - title: "Hexagon 2611.00174v1: The spinless modular bootstrap at large central charge (7 Nov 2026, preprint, credited to Claude (Anthropic))"
    url: https://hexagonmath.org/2611.00174v1
  - title: "Anthropic: Claude Fable 5.2 release post (9 Nov 2026)"
    url: https://www.anthropic.com/claude-fable-and-mythos-5-2
  - title: "Hellerman: A Universal Inequality for CFT and Quantum Gravity (JHEP 1108:130, 2011)"
    url: https://arxiv.org/abs/0902.2790
  - title: "Collier, Lin, Yin: Modular Bootstrap Revisited (2016)"
    url: https://arxiv.org/abs/1608.06241
  - title: "Afkhami-Jeddi, Hartman, Tajdini: Fast Conformal Bootstrap and Constraints on 3d Gravity (2019)"
    url: https://arxiv.org/abs/1903.06272
  - title: "Hartman, Mazáč, Rastelli: Sphere Packing and Quantum Gravity (2019)"
    url: https://arxiv.org/abs/1905.01319
timeline:
  - date: 2009-02-17
    title: Hellerman's universal inequality, about c/6
    body: Hellerman used modular invariance to bound the lightest non-vacuum primary of a 2D CFT at large central charge, with a reading as a bound on 3D quantum gravity.
    source: https://arxiv.org/abs/0902.2790
  - date: 2019-03-14
    title: Numerical evidence that the spinless bound saturates near c/9.1
    body: Afkhami-Jeddi, Hartman and Tajdini extrapolated numerical functionals to large central charge and found a bound of about c/9.1.
    source: https://arxiv.org/abs/1903.06272
  - date: 2019-05-03
    title: Proof of a gap bound of about c/8.503
    body: Hartman, Mazáč and Rastelli proved, with analytic functionals related to sphere packing, that such theories have a non-vacuum primary of dimension at most roughly c/8.503.
    source: https://arxiv.org/abs/1905.01319
  - date: 2026-11-07
    title: Preprint claims the exact spinless slope 9.1266 (AI-generated, unrefereed)
    body: Hexagon 2611.00174, credited to Claude (Anthropic), claims the optimal slope is 12π²/(π²+4 arcsinh²1), within a stated class of functionals, with a conjectural c^(1/3) coefficient. Unrefereed; no independent assessment found; the gap to 12 stays open.
    source: https://hexagonmath.org/2611.00174v1
explainer:
  oneLine: A symmetry of 2D quantum theories forces a light state to exist; how light the bound can be pushed is unsettled.
  flow:
    - "Torus symmetry: Z(β) = Z(4π²/β)"
    - Differentiate at β = 2π to get conditions
    - Positive state counts force a light state
    - Bound improved from c/6 to c/8.503
    - 2026 preprint claims optimum near c/9.13
  glossary:
    - term: conformal field theory
      meaning: A quantum theory whose rules stay the same when lengths are rescaled; in two dimensions it has an unusually rich symmetry.
      link: https://en.wikipedia.org/wiki/Two-dimensional_conformal_field_theory
    - term: central charge
      meaning: A number c counting the effective degrees of freedom of a 2D conformal field theory; large c means a rich theory.
      link: https://en.wikipedia.org/wiki/Central_charge
    - term: holographic duality (AdS/CFT)
      meaning: A proposed equivalence between a quantum theory without gravity and a gravity theory in one more dimension.
      link: /research/holographic-duality-ads-cft
    - term: anti-de Sitter space
      meaning: A curved space-time with negative cosmological constant, used as the setting of the gravity side of the duality.
      link: https://en.wikipedia.org/wiki/Anti-de_Sitter_space
    - term: BTZ black hole
      meaning: A black hole solution of gravity in three-dimensional anti-de Sitter space; it appears at dimension about c/12.
      link: https://en.wikipedia.org/wiki/BTZ_black_hole
    - term: partition function
      meaning: A sum over states of e to the minus beta times energy; it packages the whole spectrum into one function of temperature.
      link: https://en.wikipedia.org/wiki/Partition_function_(statistical_mechanics)
    - term: modular invariance
      meaning: The requirement that the torus partition function is unchanged when the torus's two directions are swapped or reshaped.
      link: https://en.wikipedia.org/wiki/Modular_invariance
    - term: conformal bootstrap
      meaning: A method that constrains a theory using only its symmetries and self-consistency, without writing down equations of motion.
      link: https://en.wikipedia.org/wiki/Conformal_bootstrap
    - term: linear programming
      meaning: Optimising a linear quantity under linear constraints; here it is used to show no spectrum can satisfy the constraints.
      link: https://en.wikipedia.org/wiki/Linear_programming
    - term: sphere packing
      meaning: The problem of fitting equal spheres as densely as possible; its linear-programming bounds match the modular bootstrap mathematically.
      link: https://en.wikipedia.org/wiki/Sphere_packing
    - term: primary state
      meaning: A basic state of a 2D conformal field theory from which a family of related higher states is generated by symmetry.
      link: https://en.wikipedia.org/wiki/Two-dimensional_conformal_field_theory
  readFirst:
    - title: Conformal bootstrap (Wikipedia)
      url: https://en.wikipedia.org/wiki/Conformal_bootstrap
      why: Explains the idea of fixing a theory from consistency alone, the family this problem belongs to.
    - title: Modular invariance (Wikipedia)
      url: https://en.wikipedia.org/wiki/Modular_invariance
      why: Short statement of the torus symmetry behind the argument.
    - title: BTZ black hole (Wikipedia)
      url: https://en.wikipedia.org/wiki/BTZ_black_hole
      why: Describes the three-dimensional black hole whose appearance near c/12 is the benchmark.
    - title: Sphere Packing Solved in Higher Dimensions (Quanta, 2016)
      url: https://www.quantamagazine.org/sphere-packing-solved-in-higher-dimensions-20160330/
      why: Plain account of the sphere packing results in dimensions 8 and 24, the maths behind the 2019 bound.
    - title: Sphere Packing and Quantum Gravity (arXiv abstract)
      url: https://arxiv.org/abs/1905.01319
      why: The published c/8.503 result; the abstract is readable, the paper is for specialists.
raw:
  student: "**Setting.** A two-dimensional conformal field theory (CFT) is a quantum theory whose allowed states have energies, called dimensions $\\Delta$. A number $c$, the central charge, counts how many degrees of freedom it has. By holographic duality, a CFT with large $c$ describes quantum gravity in a three-dimensional anti-de Sitter universe. The lightest state above the vacuum has dimension $\\Delta_1$: it is the mass of the lightest object in that universe other than empty space. Black holes of the BTZ kind appear at $\\Delta \\approx c/12$.\n\n**The symmetry.** Put the theory on a torus (a doughnut surface) at inverse temperature $\\beta$, the same $\\beta = 1/(k_B T)$ as in thermodynamics. Its partition function is\n\n$$Z(\\beta) = \\sum_{\\text{states}} e^{-\\beta(\\Delta - c/12)}.$$\n\nThis is a sum of decaying exponentials, one per state, like the Boltzmann factors from first-year thermodynamics. Swapping the two directions of the torus must not change the physics, which gives\n\n$$Z(\\beta) = Z(4\\pi^2/\\beta).$$\n\nIn words: the sum at high temperature must equal the sum at low temperature, with the self-dual point at $\\beta = 2\\pi$. This is called modular invariance.\n\n**Why light states must exist.** If every state were heavy, the terms would die off quickly at low temperature, while at high temperature (small $\\beta$) the sum would need to be enormous. The two sides could not match. Differentiate both sides of the equation any number of times at $\\beta = 2\\pi$; each derivative gives a condition. Combine several of these derivatives into a linear functional, a weighted sum of conditions. Because every term in the sum is positive (a count of states cannot be negative), a well-chosen functional that is positive for all heavy states yields a contradiction unless some state is light. This is linear programming logic, the modular bootstrap.\n\n**The history.** Hellerman (2009) showed $\\Delta_1 \\le c/6 + O(1)$. Numerics suggested about $c/9.08$. In 2019, Hartman, Mazáč and Rastelli proved $\\Delta_1 < c/8.503$ at large $c$, by linking the problem to sphere packing. Writing the bound as $c/\\Lambda$, the best $\\Lambda$ from this spinless method (using only the partition function with no information about spin) was known to lie between 8.503 and 12.\n\n**The 2026 claim.** A preprint of 7 November 2026, written by Claude and posted on Hexagon, claims the optimal value is $\\Lambda_V = 12\\pi^2/(\\pi^2 + 4\\,\\mathrm{arcsinh}^2 1) \\approx 9.1266$, with an explicit functional giving $\\Delta_1 < c/\\Lambda_V + 0.483\\,c^{1/3} + O(1)$. Optimality is shown within a stated class of functionals; the paper itself calls equality with the full linear program conjectural, and some steps are computer-assisted. It is unrefereed and has no independent verification.\n\n**What stays unknown.** Whether the claim is right. And whether extra information, such as the spins of states or consistency conditions beyond the torus, can raise the bound from about $c/9.13$ to $c/12$. A \"pure gravity\" theory in 3D would need its first state near $c/12$; nobody knows whether one exists."
site:
  aiReviewed: true
---

Let a unitary, compact 2D CFT with central charge $c>1$ and no conserved currents beyond the Virasoro algebra have a modular-invariant torus partition function. Let $\Delta_1$ be the dimension of its lightest non-vacuum primary. Modular $S$-invariance of the partition function at zero angular potential (the spinless bootstrap) gives a bound $\Delta_1\le c/\Lambda+o(c)$ at large $c$. **Problem:** determine the optimal constant $\Lambda$ obtainable from this linear-functional method, prove that no functional does better, and decide whether any stronger argument (using spin, or more than modular invariance of the torus partition function) can reach $\Lambda=12$, that is, $\Delta_1\le c/12$, which is the threshold for BTZ black holes in 3D quantum gravity with a CFT dual.

# State of the art

**Open as of today.** The ladder of bounds on the slope $\Lambda$, with $\Delta_1\lesssim c/\Lambda$: Hellerman (2009) obtained about $c/6$; Friedan and Keller (2013) and Collier, Lin and Yin (2016) improved the bound with numerical functionals; Afkhami-Jeddi, Hartman and Tajdini (2019) gave numerical evidence that the spinless bootstrap saturates at about $c/9.1$; and Hartman, Mazáč and Rastelli (2019) proved $\Delta_1\le c/8.503$ at large $c$. The Hexagon page describes the true optimal slope as lying between 8.503 and 12 before November 2026. **A preprint claims** (Hexagon 2611.00174v1, 7 November 2026, credited to Claude (Anthropic), tagged "Primarily AI-generated text") that the optimal slope of the spinless bootstrap is exactly $\Lambda_V=12\pi^2/(\pi^2+4\,\mathrm{arcsinh}^2 1)\approx9.1266$, with an explicit functional giving $\Delta_1<c/\Lambda_V+0.483\,c^{1/3}+O(1)$ at large $c$. Optimality is argued within a stated class of linear functionals (containing all finite combinations of derivatives), up to $O(c^{1/3}\log^{2/3}c)$; some theorems are described as computer-assisted; a coefficient $0.27666$ of the $c^{1/3}$ correction is conjectured from numerics up to $c=2048$; and the paper itself says that equality with the limit of the full linear program over all orders is conjectural. The page says an internal Claude research model first obtained the result, Claude Opus 5.5 reproduced it independently, and Claude wrote the paper with brief guidance from an unnamed physicist who checked every main result. There is no named human author or reviewer, no code repository and no Lean formalization, and the preprint is unrefereed. DARC found no independent expert assessment. Anthropic's release post of 9 November 2026 describes this as one of two open problems solved by Claude Fable 5.2; DARC has not checked that claim. Even if the claim holds, the gap between 9.1266 and 12 remains open, so the problem stays OPEN.

# Applications

None practical. The bound constrains which 2D CFTs, and through holography which 3D quantum gravity theories, can exist, so it is a test of how much consistency alone says about quantum gravity. The mathematics (extremal functionals, links to sphere packing) is shared with other optimization problems, but no application is foreseen.

# Resolution criteria

For the spinless-bootstrap part: independent verification, by specialists or a machine-checked proof, of the claimed functional and its inequalities, together with a proof (not only numerical evidence) that no functional in the full linear program beats $\Lambda_V$, accepted by experts or in a refereed publication. For the full problem: a proof of a bound $\Delta_1\le c/12+o(c)$ for all such CFTs, or a family of CFTs or a rigorous argument showing the slope cannot reach 12. An unrefereed preprint, including an AI-generated one, does not by itself count as a resolution.

# Rating rationale

Difficulty 62: the constant for the spinless method is claimed to be pinned down by an unrefereed preprint with one conjectural step, so that part is mostly checking, but reaching $c/12$ requires methods beyond modular invariance of the torus partition function and no approach is known. Application value 2: no foreseeable practical use. Leverage 28: it fixes the best universal constraint from one bootstrap method on 3D gravity and sharpens functional-optimization tools, within one subfield.

# Verification

The claim combines an explicit functional, inequalities certified partly by computer-assisted proofs, and one conjectural step, with no public code or Lean formalization. Specialists in the modular bootstrap should reproduce the functional and its inequalities independently, compare the resulting bound with the proved 8.503 and the numerical 9.1, and check the stated class of functionals and the conjectural step. A refereed publication or a machine-checked proof is needed before DARC treats the spinless slope as settled, and the c/12 question is a separate matter.

# Plain explanation

Some physicists study a toy universe: a simple, two-dimensional quantum theory that, through a famous duality, describes gravity in a three-dimensional world. Each such theory has a list of allowed states, each with an energy. The question is how heavy the lightest state above empty space can be.

The list is not free. The theory must look the same when a certain shape (a doughnut surface) is turned inside out, swapping its two directions. That one symmetry puts a hard limit on the list, a bit like a drum whose set of notes must obey a pairing rule. A drum with only very high notes would break the rule, so some note has to be low enough.

The limit has been lowered step by step. A 2019 paper proved a limit by borrowing ideas from the problem of packing spheres as tightly as possible. The best possible limit of this kind was known only to lie in a range.

On 7 November 2026, a preprint written by the AI system Claude claims to pin that limit down exactly. It is unrefereed. One unnamed physicist who guided the work checked its main results, but nobody outside Anthropic has verified it yet.

Even if it holds, a bigger question stays open: whether a theory could have its lightest state as high as the value where black holes appear.

Where the analogy breaks: a real drum has a fixed shape, while here the theory itself is unknown, and only the rule is.
