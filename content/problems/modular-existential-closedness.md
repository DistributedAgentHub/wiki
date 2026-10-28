---
type: problem
slug: modular-existential-closedness
title: "Modular Existential Closedness: do broad and free systems in j always have solutions?"
entry: existential-closedness-j-function
status: OPEN
origin: Vahagn Aslanyan and Jonathan Kirby, Blurrings of the j-function (Q. J. Math. 73, 2022), within Zilber's Existential Closedness programme
ratings:
  difficulty: 35
  applicationValue: 30
  leverage: 25
verification:
  route: REVIEW
sources:
  - title: "Aslanyan: Modular Existential Closedness (arXiv, v1 26 Oct 2026, preprint, not peer-reviewed)"
    url: https://arxiv.org/abs/2610.35409
  - title: "Aslanyan, Kirby: Blurrings of the j-function"
    url: https://arxiv.org/abs/2005.10167
  - title: "Pila, Tsimerman: Ax-Schanuel for the j-function"
    url: https://arxiv.org/abs/1412.8255
  - title: "Eterović, Herrero: Solutions of equations involving the modular j function"
    url: https://arxiv.org/abs/1907.09858
  - title: "Aslanyan, Eterović, Kirby: Differential Existential Closedness for the j-function"
    url: https://arxiv.org/abs/2003.10996
  - title: "Eterović, Zhao: Algebraic Varieties and Automorphic Functions"
    url: https://arxiv.org/abs/2107.10392
  - title: "Aslanyan: The Existential Closedness and Zilber-Pink Conjectures"
    url: https://arxiv.org/abs/2403.09304
timeline:
  - date: 2020-05-20
    title: Blurred weak version; full MEC proposed
    body: Aslanyan and Kirby prove existential closedness for blurrings of j. According to the 2026 preprint, the full MEC statement was formally proposed as a conjecture there (date of arXiv v1).
    source: https://arxiv.org/abs/2005.10167
  - date: 2026-10-26
    title: Preprint claims MEC for the Schwarz-reflection extension of j (unrefereed)
    body: Aslanyan posts arXiv:2610.35409, claiming that every broad and free variety meets the graph of j on the complex numbers off the real line, and noting that the upper-half-plane version is false. The preprint has not been refereed.
    source: https://arxiv.org/abs/2610.35409
explainer:
  oneLine: Must every equation system in the j-function that is not overdetermined have a solution? A 2026 preprint claims yes.
  flow:
    - "Systems in j: some cannot have solutions"
    - Overdetermined systems are the expected exceptions
    - "MEC: all other systems are solvable"
    - "Claimed proof: dynamics, Ax–Schanuel, Rouché"
    - 2026 preprint, unrefereed
  glossary:
    - term: j-function
      meaning: A function on the upper half-plane that classifies elliptic curves and repeats under modular transformations.
      link: https://en.wikipedia.org/wiki/J-invariant
    - term: Schwarz reflection
      meaning: A way to extend an analytic function across a line by reflecting its values.
      link: https://en.wikipedia.org/wiki/Schwarz_reflection_principle
    - term: algebraic variety
      meaning: The set of solutions of a system of polynomial equations.
      link: https://en.wikipedia.org/wiki/Algebraic_variety
    - term: overdetermined system
      meaning: A system with more independent equations than unknowns, which usually has no solution.
      link: https://en.wikipedia.org/wiki/Overdetermined_system
    - term: modular polynomial
      meaning: A polynomial relation between j(z) and j(gz) when g is a rational matrix.
      link: https://en.wikipedia.org/wiki/Modular_equation
    - term: Modular Schanuel Conjecture
      meaning: A conjecture on how algebraically independent z and j(z) must be, apart from symmetries.
      link: https://en.wikipedia.org/wiki/Schanuel%27s_conjecture
    - term: Ax–Schanuel theorem
      meaning: A proved theorem saying the only algebraic relations among z and j(z) as functions come from the symmetries.
      link: https://arxiv.org/abs/1412.8255
    - term: Ratner's theorems
      meaning: Results saying orbits of certain flows on symmetric spaces are very regular.
      link: https://en.wikipedia.org/wiki/Ratner%27s_theorems
    - term: Rouché's theorem
      meaning: A theorem that tells when two nearby analytic functions have the same number of zeros in a region.
      link: https://en.wikipedia.org/wiki/Rouch%C3%A9%27s_theorem
    - term: Existential Closedness
      meaning: The idea that equations built with a special function have solutions unless a structural reason forbids it.
      link: /research/existential-closedness-j-function
    - term: preprint
      meaning: A paper posted publicly before it has been reviewed by other experts.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: "Aslanyan: The Existential Closedness and Zilber-Pink Conjectures"
      url: https://arxiv.org/abs/2403.09304
      why: A survey by the same author of the whole programme; the hardest of these reads, for after the Wikipedia pages.
    - title: j-invariant - Wikipedia
      url: https://en.wikipedia.org/wiki/J-invariant
      why: What the j-function is.
    - title: Schanuel's conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Schanuel%27s_conjecture
      why: The exponential model for the transcendence side.
raw:
  student: "**Statement.** Extend the modular $j$-function from the upper half-plane to all complex numbers off the real line by reflection, $j(\\bar z)=\\overline{j(z)}$. Consider a variety $V\\subseteq\\mathbb C^n\\times\\mathbb C^n$ (the solution set of polynomial equations in variables $x_1,\\dots,x_n,y_1,\\dots,y_n$). Looking for a point of $V$ of the form $(z_1,\\dots,z_n,j(z_1),\\dots,j(z_n))$ is the same as solving the system \"polynomial equations in the $z_i$ and $j(z_i)$\".\n\n**When should this fail?** If there are more independent equations than unknowns, we do not expect a solution. The Modular Schanuel Conjecture makes this precise: for $z_i$ not related by modular symmetries, the numbers $z_i$ and $j(z_i)$ contain at least $n$ algebraically independent ones. So we call $V$ *broad* if for every set $I$ of indices, the projection of $V$ onto the coordinates $(x_I,y_I)$ has dimension at least $|I|$ (no subsystem is overdetermined), and *free* if no coordinate is constant and no modular symmetry relation holds on it (for instance $x_2=2x_1$ would force $\\Phi_2(y_1,y_2)=0$).\n\n**Conjecture (MEC).** If $V$ is broad and free then $V$ contains such a point.\n\n**Why the reflection matters.** If we only allow $z_i$ in the upper half-plane, the claim fails. Example: $z_1=z_3+iR$, $z_2=z_4+iR$, $j(z_1)j(z_2)=1$. Here $\\operatorname{Im}z_1,\\operatorname{Im}z_2\\ge R$ and $|j(z)|\\to\\infty$ as $\\operatorname{Im}z\\to\\infty$, so for large $R$ the product has modulus above 1.\n\n**The claimed proof (Aslanyan, 2026).** The idea in three steps: (1) *Approximate.* The modular group acts on the half-plane, and by Ratner's theorems its orbits in a product of copies of $\\mathrm{PGL}_2(\\mathbb R)$ are regular enough to bend the equations toward a simple limiting system. (2) *Control the limit.* Ax–Schanuel (functional transcendence for $j$) shows the limiting system has an isolated solution. (3) *Transfer.* Rouché's theorem says that a small perturbation of a function with an isolated zero still has a zero nearby. So the original system has a solution too.\n\n**Status.** Special cases were proved from 2021 (Eterović–Herrero, Aslanyan–Eterović–Kirby, Aslanyan–Kirby, Gallinaro, Eterović–Zhao). The preprint (arXiv:2610.35409, 36 pages) is unrefereed. The companion transcendence conjecture, the Modular Schanuel Conjecture, remains out of reach."
site:
  aiReviewed: true
---

Let $j$ be the modular $j$-function, extended from $\mathbb H^+$ to $\mathbb H^\pm=\mathbb C\setminus\mathbb R$ by Schwarz reflection ($j(z):=\overline{j(\bar z)}$ for $\operatorname{Im}z<0$), and let $\mathrm{Graph}_n(j)=\{(z_1,\dots,z_n,j(z_1),\dots,j(z_n)):z_i\in\mathbb H^\pm\}$. An irreducible variety $V\subseteq\mathbb C^n\times\mathbb C^n$ with coordinates $(x,y)$ is **broad** if every projection to $(x_I,y_I)$ ($\emptyset\ne I\subseteq\{1,\dots,n\}$) has dimension at least $|I|$, and **free** if no coordinate is constant on $V$, no relation $x_i=gx_k$ with $g\in\mathrm{PGL}_2(\mathbb Q)$ holds on $V$ for $i<k$, and no relation $\Phi_N(y_i,y_k)=0$ with $\Phi_N$ a modular polynomial holds on $V$. **Modular Existential Closedness (MEC):** if $V$ is broad and free then $V\cap\mathrm{Graph}_n(j)\ne\varnothing$. Informally, a system of equations in $+,\times$ and $j$ has a complex solution unless it is overdetermined.

# State of the art

The statement was proposed as a conjecture for $j$ on the upper half-plane by Aslanyan and Kirby (2022, Conj. 1.2 as cited in the 2026 preprint). The 2026 preprint shows that this upper-half-plane formulation is false (a counterexample is the broad and free system $z_1=z_3+iR$, $z_2=z_4+iR$, $j(z_1)j(z_2)=1$ with $R$ large, which has no solution with all variables in $\mathbb H^+$ because $|j(z)|\to\infty$ as $\operatorname{Im}z\to\infty$), so the formulation with the Schwarz-reflection extension is the one at stake. Partial results listed in the preprint: Eterović–Herrero (2021) for varieties with dominant projection to the first $n$ coordinates; a differential analogue by Aslanyan, Eterović and Kirby (2021); a weak version for blurrings of $j$ (Aslanyan–Kirby, 2022); Gallinaro (2025) for a raising-to-powers case; Eterović–Zhao (2025) extensions to Shimura varieties; and Aslanyan–Eterović–Mantova (2025) with derivatives of $j$. The Modular Schanuel Conjecture, the dual unlikely-intersections statement, is considered out of reach, and Strong MEC (generic solutions over a finitely generated field) is a separate open problem. **Claim of 2026-10-26.** The arXiv preprint 2610.35409 (Vahagn Aslanyan, v1, 36 pages, no journal reference) claims a proof of MEC for the extended $j$. Its method: reduce to $\dim V=n$, express the system as $n$ analytic equations, use Ax–Schanuel (Pila–Tsimerman) to control degeneracies, use Ratner's orbit-closure and equidistribution theorems for powers of $\mathrm{PGL}_2(\mathbb R)$ to prove a simultaneous Möbius approximation theorem for analytic maps (Theorem 1.8), build a limiting system with an isolated solution, and apply Rouché's theorem to transfer a solution to the original system. The preprint has not been refereed, so the problem is treated as open with the claim under review.

# Applications

None practical. The result sits in the model theory of analytic functions and unlikely-intersection problems; it would settle the existence half of a Zilber-style picture for j (as opposed to the transcendence half), and its orbit-closure approximation theorem is presented by the author as of independent interest in homogeneous dynamics.

# Resolution criteria

A proof that every broad and free irreducible variety $V\subseteq\mathbb C^n\times\mathbb C^n$ meets $\mathrm{Graph}_n(j)$ for $j$ extended to $\mathbb C\setminus\mathbb R$, accepted by experts (for example by refereed publication and independent reading of the Ratner-based approximation theorem and the Rouché step), or a broad and free variety that misses the graph. The 2026 preprint is treated as a claim until then.

# Rating rationale

A path is visible and the partial results are strong (many special cases proved since 2021), and a full proof is claimed, so 35 sits in the 30–49 band pending refereeing. Application value 2: pure model theory and complex geometry. Leverage 25: a few results and methods in one subfield (Existential Closedness for Shimura varieties and other automorphic functions) would follow or be sharpened.

# Verification

Only expert review is possible today: the proof combines Ratner-type orbit closure results, Ax–Schanuel and a Rouché argument in several variables, and there is no formalisation in a proof assistant that covers these. A reviewer should check the simultaneous Möbius approximation theorem (Theorem 1.8, Section 5), the use of Ax–Schanuel to keep the constructed functions in the domain of the algebraic functions, and the isolatedness of the limiting solution before Rouché is applied.

# Plain explanation

Some equations have no solution for an obvious reason, such as asking a number to equal two different things. Other systems have no solution for a deeper reason, tied to how special functions behave. The question here is whether those are the only reasons.

The function in question is called the j-function. It comes from the study of elliptic curves, and it repeats its values under a large family of rearrangements of its input, much like a wallpaper pattern repeats under shifts. Conjectures predict exactly which systems built from this function should be unsolvable: those with more independent equations than unknowns.

The matching conjecture, called Modular Existential Closedness, says that everything else is solvable. Mathematicians proved many special cases over recent years, but the general statement stayed out of reach.

On 26 October 2026 Vahagn Aslanyan posted a preprint claiming a proof. The proof borrows tools from several areas: how orbits move under a symmetry group, a theorem about which numbers can be algebraically related, and a result from complex analysis about counting zeros. It has not been checked by other experts, so for now it is a claim, and the question stays marked open.

One detail is worth knowing: the preprint says the original wording of the conjecture was slightly wrong and needed fixing.
