---
type: entry
slug: existential-closedness-j-function
title: Existential closedness and the modular j-function
field: algebra-geometry
kind: THEORY
status: ACTIVE
summary: When does a system of equations built from field operations and the modular j-function have a complex solution? The expectation is yes unless a transcendence reason forbids it; Ax–Schanuel is the tool that makes the obstructions precise.
reliedOn: Existential Closedness statements, together with Schanuel-type conjectures, form Zilber's programme for the model theory of analytic functions. Modular Existential Closedness is built on this entry, and so are related results for Shimura varieties.
dependsOn:
  - algebraic-geometry
  - elliptic-curves
references:
  - title: V. Aslanyan, Modular Existential Closedness (arXiv preprint, 2026-10-26, not peer-reviewed)
    url: https://arxiv.org/abs/2610.35409
    kind: paper
  - title: J. Pila, J. Tsimerman, Ax-Schanuel for the j-function
    url: https://arxiv.org/abs/1412.8255
    kind: paper
  - title: V. Aslanyan, J. Kirby, Blurrings of the j-function
    url: https://arxiv.org/abs/2005.10167
    kind: paper
  - title: V. Aslanyan, The Existential Closedness and Zilber-Pink Conjectures
    url: https://arxiv.org/abs/2403.09304
    kind: paper
  - title: S. Eterović, R. Zhao, Algebraic Varieties and Automorphic Functions
    url: https://arxiv.org/abs/2107.10392
    kind: paper
timeline:
  - date: 2016-01-01
    title: Ax-Schanuel for the j-function
    body: Pila and Tsimerman prove the functional transcendence theorem that underlies the expected obstructions to solving systems of equations in j. The date uses the publication year (Duke Math. J. 165, 2016); the arXiv preprint is 1412.8255.
    source: https://arxiv.org/abs/1412.8255
  - date: 2020-05-20
    title: Blurred weak version; full MEC proposed
    body: Aslanyan and Kirby prove existential closedness for blurred j-functions. According to the 2026 preprint, the full MEC statement was formally proposed as a conjecture in this paper (date of arXiv v1).
    source: https://arxiv.org/abs/2005.10167
  - date: 2026-10-26
    title: Preprint claims Modular Existential Closedness
    body: Aslanyan posts an arXiv preprint claiming the MEC conjecture for j extended to the complex numbers off the real line by Schwarz reflection. It has not been refereed.
    source: https://arxiv.org/abs/2610.35409
explainer:
  oneLine: "When does a system of equations with a famous number-theory function have a solution? Expected: always, unless a hidden reason forbids it."
  flow:
    - "Polynomial systems: solvable unless contradictory"
    - Allow the j-function in equations
    - Transcendence rules say what cannot be solved
    - "Existence half: everything else should be solvable"
    - 2026 preprint claims it, unrefereed
  glossary:
    - term: j-function
      meaning: A function on the upper half-plane that classifies elliptic curves and is unchanged by modular transformations.
      link: https://en.wikipedia.org/wiki/J-invariant
    - term: upper half-plane
      meaning: The complex numbers whose imaginary part is positive.
      link: https://en.wikipedia.org/wiki/Upper_half-plane
    - term: modular group
      meaning: The group of maps z to (az+b)/(cz+d) with integer entries and determinant 1, acting on the upper half-plane.
      link: https://en.wikipedia.org/wiki/Modular_group
    - term: Möbius transformation
      meaning: A map z to (az+b)/(cz+d) of the complex plane, built from matrix entries a, b, c, d.
      link: https://en.wikipedia.org/wiki/M%C3%B6bius_transformation
    - term: Schwarz reflection
      meaning: A way to extend an analytic function across a line by reflecting its values.
      link: https://en.wikipedia.org/wiki/Schwarz_reflection_principle
    - term: Hilbert's Nullstellensatz
      meaning: The theorem that polynomial equations over the complex numbers have a common solution unless they contradict each other.
      link: https://en.wikipedia.org/wiki/Hilbert%27s_Nullstellensatz
    - term: Schanuel's conjecture
      meaning: A conjecture that the numbers z and exp(z) are as algebraically independent as possible, apart from obvious relations.
      link: https://en.wikipedia.org/wiki/Schanuel%27s_conjecture
    - term: transcendence degree
      meaning: The number of algebraically independent elements a field needs beyond the rational numbers.
      link: https://en.wikipedia.org/wiki/Transcendence_degree
    - term: algebraic variety
      meaning: The set of solutions of a system of polynomial equations.
      link: https://en.wikipedia.org/wiki/Algebraic_variety
    - term: Ratner's theorems
      meaning: Results saying that orbits of certain flows on symmetric spaces are very regular and not chaotic.
      link: https://en.wikipedia.org/wiki/Ratner%27s_theorems
    - term: Rouché's theorem
      meaning: A theorem that tells when two nearby analytic functions have the same number of zeros in a region.
      link: https://en.wikipedia.org/wiki/Rouch%C3%A9%27s_theorem
    - term: elliptic curve
      meaning: A smooth cubic curve with a group structure, central in number theory.
      link: /research/elliptic-curves
  readFirst:
    - title: j-invariant - Wikipedia
      url: https://en.wikipedia.org/wiki/J-invariant
      why: What the j-function is and its symmetries.
    - title: Schanuel's conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Schanuel%27s_conjecture
      why: The exponential version of the independence conjectures that the modular one imitates.
    - title: Hilbert's Nullstellensatz - Wikipedia
      url: https://en.wikipedia.org/wiki/Hilbert%27s_Nullstellensatz
      why: The classical solvability theorem that Existential Closedness extends.
    - title: Rouché's theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Rouch%C3%A9%27s_theorem
      why: The complex-analysis tool that turns an approximate zero into a real one.
raw:
  student: "**Starting point.** Over the complex numbers $\\mathbb C$, a system of polynomial equations has a solution unless it is inconsistent (Hilbert's Nullstellensatz). Zilber asked what happens if we also allow a transcendental function, first $\\exp$, and conjectured the answer: *a system has a solution unless there is a structural reason it cannot.* This is called **Existential Closedness (EC)**.\n\n**The j-function.** Let $\\mathbb H^+$ be the upper half-plane, the complex numbers with positive imaginary part. The modular $j$-function is an analytic function on $\\mathbb H^+$ that is unchanged when $z$ is replaced by $\\frac{az+b}{cz+d}$ for integers with $ad-bc=1$ (the modular group). Applying $j$ to a transformed point $gz$ with $g$ a rational matrix gives a value algebraically related to $j(z)$ through a *modular polynomial* $\\Phi_N(X,Y)$. These are the \"obvious symmetries\".\n\n**Why some systems have no solution.** The equations $j(z)=z$ and $j(\\sqrt[3]{2}\\,z)=z^3$ together look like two equations in one unknown, so they are *overdetermined*. The **Modular Schanuel Conjecture** says that if $z_1,\\dots,z_n$ are not quadratic numbers and are not related by those symmetries, then the numbers $z_i$ and $j(z_i)$ together contain at least $n$ algebraically independent ones. This forbids overdetermined solutions. A functional version, **Ax–Schanuel for $j$** (Pila and Tsimerman, 2016), is proved.\n\n**The existence half.** *Modular Existential Closedness* says that if a system is not overdetermined, in a precise geometric sense called *broad and free*, then it does have a solution. A variety is *broad* if for every choice of $k$ of the variable pairs, the solution set projected onto those pairs still has dimension at least $k$, and *free* if no coordinate is constant and no symmetry relation holds on it.\n\n**One more subtlety.** To state the result correctly, $j$ must be defined off the real line in both half-planes, by reflection ($j(\\bar z)=\\overline{j(z)}$). The 2026 preprint says the version with only the upper half-plane is false.\n\n**Status.** Partial results have appeared since 2021 (Eterović–Herrero, Aslanyan–Kirby, Gallinaro, Eterović–Zhao). The preprint of 2026-10-26 by Aslanyan claims the general case using dynamics on $\\mathrm{PGL}_2(\\mathbb R)$ (Ratner's theorems), Ax–Schanuel and Rouché's theorem from complex analysis. It is unrefereed."
site:
  published: true
  aiReviewed: true
---

## Why the question exists

Hilbert's Nullstellensatz says that systems of polynomial equations over $\mathbb C$ have solutions unless they contradict each other. Zilber, in his work on the model theory of complex exponentiation (early 2000s), conjectured an analogue for $\exp$: a system of equations built from $+,\times$ and $\exp$ has a complex solution unless there is a reason it cannot. This is called **Exponential Closedness** or, in general, **Existential Closedness (EC)**. Since the late 2010s analogous problems have been studied for other transcendental functions, in particular the modular $j$-function.

## The j-function and its symmetries

The $j$-function is a holomorphic function on the upper half-plane $\mathbb H^+=\{z:\operatorname{Im}z>0\}$ that classifies complex elliptic curves up to isomorphism. It is invariant under the modular group $\mathrm{SL}_2(\mathbb Z)$ acting by Möbius maps (after the Schwarz-reflection extension to $\mathbb C\setminus\mathbb R$ described below, under $\mathrm{PGL}_2(\mathbb Z)$). There is a family of **modular polynomials** $\Phi_N(X,Y)\in\mathbb Z[X,Y]$, $N\ge1$, such that $z_2=gz_1$ for some $g\in\mathrm{GL}_2^+(\mathbb Q)$ (on $\mathbb H^+$; $\mathrm{PGL}_2(\mathbb Q)$ on $\mathbb C\setminus\mathbb R$) exactly when $\Phi_N(j(z_1),j(z_2))=0$ for some $N$. So $j$ has algebraic behaviour under rational Möbius maps and transcendental behaviour otherwise.

## Transcendence side: Ax–Schanuel and Schanuel-type conjectures

The **Ax–Schanuel theorem for $j$** (Pila and Tsimerman, 2016) is a functional-transcendence theorem: it bounds the dimension of intersections of algebraic varieties with the graph of $j$, so that algebraic relations between $z_i$ and $j(z_i)$ as functions can only come from the modular symmetries. Its number-theoretic counterpart is the **Modular Schanuel Conjecture**: for non-quadratic $z_1,\dots,z_n$ in distinct $\mathrm{PGL}_2(\mathbb Q)$-orbits, the field generated by the $z_i$ and $j(z_i)$ has transcendence degree at least $n$. It would follow from the Grothendieck–André generalised period conjecture and is regarded as out of reach. It says which systems should have no solution, for example $j(z)=z$ together with $j(\sqrt[3]{2}z)=z^3$.

## Existence side: Modular Existential Closedness

**Modular Existential Closedness (MEC)** is the matching statement that solutions exist when the transcendence conjectures do not forbid them. It is phrased for irreducible algebraic varieties $V\subseteq\mathbb C^n\times\mathbb C^n$ that are **broad** (every projection to coordinates $(x_I,y_I)$ has dimension at least $|I|$) and **free** (no coordinate constant, no relation $x_i=gx_k$ with $g\in\mathrm{PGL}_2(\mathbb Q)$, no modular relation $\Phi_N(y_i,y_k)=0$): the claim is that such a $V$ contains a point $(z_1,\dots,z_n,j(z_1),\dots,j(z_n))$.

## Partial results

Eterović and Herrero (2021) treated varieties with dominant projection to the first $n$ coordinates. Aslanyan, Eterović and Kirby (2021) proved a differential analogue. Aslanyan and Kirby (2022) proved a weak version for "blurred" $j$-functions, and formally stated the full conjecture. Gallinaro (2025) proved a case for raising to powers; Eterović and Zhao (2025) extended parts of this to Shimura varieties; Aslanyan, Eterović and Mantova (2025) handled a version with derivatives of $j$.

## Recent status

A preprint of 2026-10-26 (Aslanyan, not yet refereed) claims a proof of MEC for $j$ extended to $\mathbb C\setminus\mathbb R$ by Schwarz reflection, using Ratner's theorems, Ax–Schanuel and Rouché's theorem. The same preprint states that the earlier formulation, with $j$ on the upper half-plane only, is false, so extending $j$ is essential. Related open directions include Strong MEC (generic solutions over a finitely generated field) and the Modular Schanuel Conjecture itself.

# Plain explanation

A system of equations can be impossible for an obvious reason: asking a number to equal both 1 and 2 at once. Algebra gives a clean rule for ordinary polynomial equations: over the complex numbers, a system has a solution unless it contradicts itself.

This topic asks the same question when a special function is allowed in the equations. The function here, called the j-function, comes from the study of elliptic curves and has a very rich pattern of symmetries. An idea from the logician Boris Zilber says that with such functions, systems should also be solvable unless there is a specific, identifiable reason they cannot be.

The flip side of the picture is a set of conjectures about which numbers can be related. These say that, apart from the obvious symmetries, the function's inputs and outputs are as independent as possible. Together the two statements would say: solutions exist exactly when nothing forces them not to.

Proving the existence half is hard because the function only makes sense on half of the complex plane and behaves wildly near its edge. Mathematicians have proved special cases for years. A preprint posted on 26 October 2026 claims the full existence statement. It has not been checked by other experts yet, so for now it is a claim.

The analogy with ordinary algebra is only a guide: the j-function is far less tame than a polynomial.
