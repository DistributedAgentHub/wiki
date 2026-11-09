---
type: entry
slug: yamabe-problem
title: The Yamabe problem and the Yamabe invariant
field: topology-differential-geometry
kind: THEORY
status: MATURE
summary: Can every Riemannian metric be rescaled to constant scalar curvature? Solved in 1984, it leaves a number, the Yamabe invariant, that measures how much positive curvature a manifold can carry.
reliedOn: The solved Yamabe problem is the standard tool for finding constant-scalar-curvature metrics, and the Yamabe invariant is the basic number relating scalar curvature to the topology of a manifold. Open questions about its value on specific manifolds, such as lens spaces, build on it.
dependsOn:
  - sobolev-spaces-energy-methods
references:
  - title: "Schoen: Conformal deformation of a Riemannian metric to constant scalar curvature (J. Differential Geom. 20, 1984)"
    url: https://doi.org/10.4310/jdg/1214439291
    kind: paper
  - title: "Bray, Neves: Classification of prime 3-manifolds with Yamabe invariant greater than RP^3 (Ann. of Math. 159, 2004)"
    url: https://doi.org/10.4007/annals.2004.159.407
    kind: paper
  - title: Yamabe problem (Wikipedia)
    url: https://en.wikipedia.org/wiki/Yamabe_problem
    kind: article
  - title: Yamabe invariant (Wikipedia)
    url: https://en.wikipedia.org/wiki/Yamabe_invariant
    kind: article
timeline:
  - date: 1960-01-01
    title: Yamabe announces a solution to the problem
    body: Yamabe published an argument that every conformal class on a closed manifold contains a constant scalar curvature metric (Osaka Math. J. 12). Trudinger found a gap in 1968.
    source: https://en.wikipedia.org/wiki/Yamabe_problem
  - date: 1984-01-01
    title: Schoen completes the solution of the Yamabe problem
    body: Building on Trudinger (1968) and Aubin (1976), Schoen settled the remaining cases using the positive mass theorem, so every conformal class on a closed manifold has a constant scalar curvature metric.
    source: https://doi.org/10.4310/jdg/1214439291
  - date: 2004-01-01
    title: Bray and Neves compute the Yamabe invariant of RP^3
    body: Bray and Neves showed that the Yamabe invariant of RP^3 is attained by the round metric and classified the prime 3-manifolds whose Yamabe invariant exceeds it.
    source: https://doi.org/10.4007/annals.2004.159.407
explainer:
  oneLine: Can any curved shape be re-scaled so its curvature is the same everywhere? Solved in 1984; the leftover number matters.
  flow:
    - Can curvature be made even by rescaling?
    - Yamabe's attempt, a gap found in 1968
    - Trudinger, Aubin, Schoen finish it by 1984
    - "Each shape gets a number: Yamabe invariant"
    - Exact values are known only for few shapes
  glossary:
    - term: manifold
      meaning: A shape that looks flat when you zoom in close enough, such as a sphere's surface.
      link: https://en.wikipedia.org/wiki/Manifold
    - term: Riemannian metric
      meaning: A rule for measuring lengths and angles at every point of a manifold.
      link: https://en.wikipedia.org/wiki/Metric_tensor
    - term: conformal change
      meaning: Rescaling a metric by a positive function, so lengths change but angles stay the same.
      link: https://en.wikipedia.org/wiki/Conformal_geometry
    - term: curvature
      meaning: A measure of how much a shape bends away from being flat.
      link: https://en.wikipedia.org/wiki/Curvature_of_Riemannian_manifolds
    - term: Gaussian curvature
      meaning: "The bending of a surface at a point: positive like a sphere, negative like a saddle."
      link: https://en.wikipedia.org/wiki/Gaussian_curvature
    - term: scalar curvature
      meaning: A single number at each point recording how volumes of small balls differ from flat space.
      link: https://en.wikipedia.org/wiki/Scalar_curvature
    - term: Yamabe problem
      meaning: Asks whether every metric can be conformally rescaled to constant scalar curvature; answered yes by 1984.
      link: https://en.wikipedia.org/wiki/Yamabe_problem
    - term: Yamabe invariant
      meaning: The best constant scalar curvature, in a normalised sense, that a manifold's conformal classes can reach.
      link: https://en.wikipedia.org/wiki/Yamabe_invariant
    - term: Sobolev inequality
      meaning: A bound that controls how large a function can get in terms of how fast it changes.
      link: https://en.wikipedia.org/wiki/Sobolev_inequality
    - term: positive mass theorem
      meaning: A result from general relativity saying total mass of an isolated system is not negative; Schoen used it here.
      link: https://en.wikipedia.org/wiki/Positive_mass_theorem
    - term: lens space
      meaning: A 3D shape made by dividing the 3-sphere by a repeating cyclic symmetry.
      link: https://en.wikipedia.org/wiki/Lens_space
  readFirst:
    - title: Yamabe problem - Wikipedia
      url: https://en.wikipedia.org/wiki/Yamabe_problem
      why: The statement, history and the steps to the 1984 solution.
    - title: Yamabe invariant - Wikipedia
      url: https://en.wikipedia.org/wiki/Yamabe_invariant
      why: What the invariant is and which values are known.
    - title: Scalar curvature - Wikipedia
      url: https://en.wikipedia.org/wiki/Scalar_curvature
      why: The curvature quantity the problem is about.
    - title: Conformal geometry - Wikipedia
      url: https://en.wikipedia.org/wiki/Conformal_geometry
      why: What changes and what stays fixed under rescaling.
raw:
  body: "## The problem\n\nLet $(M,g)$ be a closed (compact, no boundary) Riemannian manifold of dimension $n\\ge3$. Two metrics are **conformal** if one is a positive function times the other, $\\tilde g=u^{4/(n-2)}g$; conformal rescaling changes lengths but preserves angles. The **scalar curvature** $R_g$ is the trace of the Ricci curvature, a single function recording how volumes of small balls deviate from Euclidean ones. The **Yamabe problem** asks whether every conformal class contains a metric of *constant* scalar curvature.\n\nIn terms of $u$ this is a nonlinear elliptic equation,\n$$-\\tfrac{4(n-1)}{n-2}\\,\\Delta_g u+R_g\\,u=\\lambda\\,u^{\\frac{n+2}{n-2}},$$\nthe **Yamabe equation**. Its exponent is the critical Sobolev exponent, which is why the standard compactness arguments fail by a hair.\n\n## History\n\nYamabe (1960) announced a solution, but Trudinger (1968) found a gap in his argument and repaired it when the scalar curvature is not too positive. Aubin (1976) settled the case where $M$ is not locally conformally flat and $n\\ge6$ and treated some other cases. Schoen (1984) completed the remaining cases, low dimensions and locally conformally flat manifolds, by using the positive mass theorem from general relativity. The answer is yes: every conformal class on a closed manifold contains a constant scalar curvature metric, obtained by minimising a Sobolev-type quotient.\n\n## The Yamabe invariant\n\nThe minimum of that quotient over a conformal class $[g]$ is the **Yamabe constant** $Y(M,[g])$. It is at most the value $Y(S^n)$ for the round sphere (Aubin), with equality only for the round class. Taking the supremum over all conformal classes gives the **Yamabe invariant** (or sigma invariant) $Y(M)=\\sup_{[g]}Y(M,[g])$, introduced independently by Kobayashi and Schoen. It is a diffeomorphism invariant, and $Y(M)>0$ exactly when $M$ carries a metric of positive scalar curvature.\n\nFor $S^n$ the supremum is attained by the round metric. Every closed manifold satisfies $Y(M)\\le Y(S^n)$, so the interesting question is how close to the sphere's value a given manifold gets.\n\n## Quotients of the sphere\n\nIf $\\Gamma$ is a finite group acting freely and isometrically on the round $S^n$, the quotient $S^n/\\Gamma$ with the round metric has Yamabe constant $Y(S^n)\\,|\\Gamma|^{-2/n}$, so $Y(S^n/\\Gamma)\\ge Y(S^n)|\\Gamma|^{-2/n}$. In dimension 3 the question is whether this lower bound is the truth. Schoen conjectured that it is for every lens space $S^3/\\mathbb Z_p$, and Bray and Neves (2004) proved it for $\\mathbb{RP}^3=S^3/\\mathbb Z_2$ by studying the Yamabe invariant through inverse mean curvature flow. The general case is the open problem hosted on this entry.\n\n## Why it matters\n\nPositive scalar curvature is the one curvature condition with a rich obstruction theory (spin, index theory, minimal hypersurfaces). The Yamabe invariant packages that theory into a number, and computing it exactly, as in the Bray–Neves work, classifies manifolds by how positively curved they can be made."
  student: "**The setting.** A *manifold* is a shape that looks flat when you zoom in, like the surface of the Earth. A *Riemannian metric* $g$ says how to measure lengths and angles on it. If you multiply a metric by a positive function, you get a *conformal* change: lengths change from place to place, but angles do not. All the metrics you can get from $g$ this way form its *conformal class*.\n\n**Curvature.** For a surface, the Gaussian curvature at a point tells you how much it bends (positive on a sphere, negative on a saddle). In higher dimensions there are several curvature measures. The *scalar curvature* $R$ is the simplest: one number at each point, which says whether small balls there have less volume than in flat space (positive $R$) or more (negative $R$).\n\n**The problem.** Given a closed manifold (finite size, no edge) of dimension $n\\ge3$ and a metric on it, is there a conformally equivalent metric with *constant* scalar curvature? Writing the new metric as $u^{4/(n-2)}g$ turns this into a differential equation for the function $u$. A differential equation relates a function to its own rates of change; here it has the form\n$$-c_n\\,\\Delta u + R\\,u = \\lambda\\, u^{(n+2)/(n-2)},$$\nwhere $\\Delta$ measures how much $u$ differs from its local average, $c_n$ is a constant depending on $n$, and $\\lambda$ is the constant curvature you are after. The power of $u$ on the right is the troublemaker: it is exactly the critical exponent where the usual methods for such equations almost, but not quite, work.\n\n**The answer.** Yes, always. Yamabe (1960) had the right idea (minimise an energy), Trudinger (1968) fixed part of the proof, Aubin (1976) did most of the rest, and Schoen (1984) finished the cases that remained, using the positive mass theorem from general relativity.\n\n**The Yamabe invariant.** For each conformal class the minimum energy is a number. The largest such number over all conformal classes is the *Yamabe invariant* $Y(M)$ of the manifold. For the round sphere it is the maximum possible. The question left is to compute $Y(M)$ for other manifolds. For example, a sphere divided by a finite symmetry (a *quotient*) has a round metric with a known value, and in dimension 3 one asks whether it is the best possible.\n\n**What is unknown.** The exact value for lens spaces other than the real projective space is an open problem; see the linked question."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Think of a rubber sheet shaped like a lumpy balloon. Some places are sharply curved, others nearly flat. A natural question is whether you can stretch the balloon, a little here and a little there, so that it ends up curved by exactly the same amount everywhere, like a perfectly even bubble.

There is a catch: you are only allowed one kind of stretching, the kind that keeps angles the same. A map of the Earth does this. It makes countries larger or smaller but keeps the angles between roads.

In 1960 a mathematician named Hidehiko Yamabe claimed the answer is always yes. Another mathematician found a mistake in his proof eight years later. It then took until 1984, with work by Trudinger, Aubin and Richard Schoen, for the question to be fully settled. The answer really is yes.

The story does not end there. For each shape, you can ask how much even curvature it can carry at most. That gives a single number for the shape, called the Yamabe invariant. A round ball has the biggest value possible. Some shapes can never reach it.

Computing this number exactly for particular shapes is hard, and one family of three-dimensional shapes, called lens spaces, is still an open question.

The balloon picture has limits: the shapes mathematicians study can have three or more dimensions, and cannot be drawn.
