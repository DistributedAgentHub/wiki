---
type: entry
slug: sobolev-spaces-energy-methods
title: Sobolev spaces and energy methods for PDE
field: analysis-pde
kind: THEORY
status: MATURE
summary: "Weak derivatives, Sobolev and Besov spaces, compactness and a priori energy estimates: the functional-analytic framework for existence, regularity and criticality in elliptic and evolution PDE."
reliedOn: Navier–Stokes regularity (the Clay problem and its unforced uniqueness variant) is posed in this framework. Constructive QFT and the Yang–Mills mass gap use its Besov and Hölder spaces through stochastic quantization, and Hodge theory in algebraic geometry is its elliptic theory on manifolds.
references:
  - title: L. C. Evans, Partial Differential Equations (2nd ed.), AMS Graduate Studies in Mathematics 19
    url: https://doi.org/10.1090/gsm/019
    kind: book
  - title: H. Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Springer
    url: https://doi.org/10.1007/978-0-387-70914-7
    kind: book
  - title: H. Bahouri, J.-Y. Chemin and R. Danchin, Fourier Analysis and Nonlinear Partial Differential Equations, Springer Grundlehren 343
    url: https://doi.org/10.1007/978-3-642-16830-7
    kind: book
  - title: J. C. Robinson, J. L. Rodrigo and W. Sadowski, The Three-Dimensional Navier–Stokes Equations, Cambridge University Press
    url: https://doi.org/10.1017/CBO9781139095143
    kind: book
  - title: F. W. Warner, Foundations of Differentiable Manifolds and Lie Groups, Springer GTM 94 (Hodge theorem, Ch. 6)
    url: https://doi.org/10.1007/978-1-4757-1799-0
    kind: book
  - title: M. Hairer, A theory of regularity structures, Inventiones Mathematicae 198 (2014)
    url: https://doi.org/10.1007/s00222-014-0505-4
    kind: paper
  - title: T. Buckmaster and V. Vicol, Nonuniqueness of weak solutions to the Navier–Stokes equation, Annals of Mathematics 189 (2019)
    url: https://doi.org/10.4007/annals.2019.189.1.3
    kind: paper
timeline:
  - date: 1934-01-01
    title: Leray's weak solutions
    body: Leray constructed global weak solutions of 3D Navier–Stokes satisfying the energy inequality, which began the weak-solution and energy-method approach.
    source: https://doi.org/10.1007/BF02547354
  - date: 2013-03-20
    title: Regularity structures
    body: Hairer's theory of regularity structures gave a solution theory for subcritical singular SPDE in negative-regularity Hölder–Besov spaces, including the dynamic Φ^4_3 model.
    source: https://arxiv.org/abs/1303.5113
  - date: 2017-09-28
    title: Nonuniqueness of weak Navier–Stokes solutions
    body: Buckmaster and Vicol used convex integration to prove nonuniqueness of finite-energy weak solutions, in a class weaker than Leray–Hopf.
    source: https://arxiv.org/abs/1709.10033
  - date: 2021-12-06
    title: Nonuniqueness of forced Leray–Hopf solutions
    body: Albritton, Brué and Colombo exhibited two distinct Leray–Hopf solutions with the same data and a suitable forcing. The unforced question is still open.
    source: https://arxiv.org/abs/2112.03116
explainer:
  oneLine: Tools for measuring how rough a function is, used to prove that equations have sensible solutions.
  flow:
    - Equations need solutions of limited smoothness
    - Sobolev spaces measure size and roughness
    - Energy bounds stop the solution growing
    - Compactness turns bounds into real solutions
  glossary:
    - term: weak derivative
      meaning: A generalized slope defined through integration by parts, so functions with corners still have one.
      link: https://en.wikipedia.org/wiki/Weak_derivative
    - term: Sobolev space
      meaning: A collection of functions whose size and slopes (in a generalized sense) are all controlled.
      link: https://en.wikipedia.org/wiki/Sobolev_space
    - term: Lp space
      meaning: The functions whose p-th power has a finite total integral; a way to measure a function's size.
      link: https://en.wikipedia.org/wiki/Lp_space
    - term: Fourier transform
      meaning: A way of splitting a function into waves of different frequencies.
      link: https://en.wikipedia.org/wiki/Fourier_transform
    - term: embedding theorem
      meaning: A result saying that control on one measure of a function gives control on another, often a stronger one.
      link: https://en.wikipedia.org/wiki/Sobolev_inequality
    - term: compactness
      meaning: A property guaranteeing that a bounded sequence has a subsequence that settles down to a limit.
      link: https://en.wikipedia.org/wiki/Rellich%E2%80%93Kondrachov_theorem
    - term: a priori estimate
      meaning: A bound on a solution proved assuming it exists, then used to show it really does exist.
      link: https://en.wikipedia.org/wiki/A_priori_estimate
    - term: Gronwall inequality
      meaning: A tool that turns a bound on how fast a quantity can grow into a bound on its size at all later times.
      link: https://en.wikipedia.org/wiki/Gr%C3%B6nwall%27s_inequality
    - term: partial differential equation
      meaning: An equation relating a function to its rates of change in several directions, such as space and time.
      link: https://en.wikipedia.org/wiki/Partial_differential_equation
    - term: supercritical
      meaning: Describes an equation whose energy becomes weaker at small scales, so energy alone cannot control tiny-scale behaviour.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
    - term: Besov space
      meaning: A finer family of function spaces that measures smoothness frequency band by frequency band.
      link: https://en.wikipedia.org/wiki/Besov_space
    - term: Hölder space
      meaning: Functions whose values change by at most a fixed power of the distance moved; a way to measure partial smoothness.
      link: https://en.wikipedia.org/wiki/H%C3%B6lder_condition
  readFirst:
    - title: Sobolev space - Wikipedia
      url: https://en.wikipedia.org/wiki/Sobolev_space
      why: Definitions and the main examples in one place.
    - title: Partial differential equation - Wikipedia
      url: https://en.wikipedia.org/wiki/Partial_differential_equation
      why: Gives the setting these tools are built for.
    - title: But what is a partial differential equation? (3Blue1Brown)
      url: https://www.3blue1brown.com/lessons/pdes
      why: A friendly visual introduction to the equations behind the theory.
    - title: The Navier-Stokes equations (research entry)
      url: /research/navier-stokes-equations
      why: The most famous place where these tools reach their limit.
site:
  published: true
  aiReviewed: true
---

## What it is

For $\Omega\subset\mathbb{R}^n$ open, $W^{k,p}(\Omega)$ is the space of $u\in L^p$ whose weak derivatives $\partial^\alpha u$, $|\alpha|\le k$, lie in $L^p$. On $\mathbb{R}^n$ the space $H^s=\{u:(1+|\xi|^2)^{s/2}\hat u\in L^2\}$ makes sense for every real $s$, and $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in $H^1$. Energy methods obtain a priori bounds by testing an equation against the solution, or against its derivatives, and then pass to limits by compactness.

## The core machinery

- **Embeddings.** For $p<n$, Gagliardo–Nirenberg–Sobolev gives $\|u\|_{L^{p^*}}\le C\|\nabla u\|_{L^p}$ with $\frac1{p^*}=\frac1p-\frac1n$. For $p>n$, Morrey's inequality gives $W^{1,p}\subset C^{0,1-n/p}$. On $\mathbb{R}^n$, $H^s\subset L^\infty$ when $s>n/2$. The interpolation inequalities $\|u\|_{L^q}\le C\|\nabla u\|_{L^p}^\theta\|u\|_{L^r}^{1-\theta}$ have $\theta$ fixed by scaling; for example, Ladyzhenskaya's inequality reads $\|u\|_{L^4(\mathbb{R}^2)}^2\le C\|u\|_{L^2}\|\nabla u\|_{L^2}$.
- **Compactness and traces.** Rellich–Kondrachov: on a bounded Lipschitz domain, $W^{1,p}\Subset L^q$ for $q<p^*$. The trace map sends $H^1(\Omega)$ onto $H^{1/2}(\partial\Omega)$.
- **Elliptic theory.** Lax–Milgram: a bounded coercive bilinear form on a Hilbert space represents every bounded functional. Gårding's inequality and difference quotients give interior regularity: $Lu=f\in H^k$ implies $u\in H^{k+2}_{loc}$. Schauder theory is the Hölder-space counterpart.
- **Evolution equations.** Galerkin approximation plus uniform energy bounds gives weak solutions. The Aubin–Lions lemma states: if $X_0\Subset X\subset X_1$, then sets bounded in $L^p(0,T;X_0)$ with $\partial_tu$ bounded in $L^q(0,T;X_1)$ are relatively compact in $L^p(0,T;X)$. This is what passes nonlinear terms to the limit.
- **Leray–Hopf solutions.** For divergence-free $u_0\in L^2(\mathbb{R}^3)$ there is a global weak solution in $L^\infty_tL^2_x\cap L^2_t\dot H^1_x$ satisfying $\tfrac12\|u(t)\|_2^2+\nu\int_0^t\|\nabla u\|_2^2\le\tfrac12\|u_0\|_2^2$. Data in $H^1$ give a unique local strong solution. The Ladyzhenskaya–Prodi–Serrin conditions $u\in L^p_tL^q_x$ with $\frac2p+\frac3q\le1$, $q>3$, imply regularity; the endpoint $L^\infty_tL^3_x$ is due to Escauriaza–Seregin–Šverák.
- **Scaling.** Navier–Stokes is invariant under $u_\lambda(x,t)=\lambda u(\lambda x,\lambda^2t)$. Critical spaces such as $\dot H^{1/2}$, $L^3$ and $\dot B^{-1+3/p}_{p,\infty}$ are invariant under this scaling. The energy scales as $\|u_\lambda(0)\|_{L^2}^2=\lambda^{-1}\|u(0)\|_{L^2}^2$, so it is **supercritical** in 3D: it controls large scales but weakens at small scales, and this mismatch is the gap in the regularity problem.
- **Littlewood–Paley and Besov spaces.** Write $u=\sum_j\Delta_ju$ with dyadic frequency projections, and set $\|u\|_{B^s_{p,q}}=\big\|(2^{js}\|\Delta_ju\|_{L^p})_j\big\|_{\ell^q}$. For non-integer $s>0$, $B^s_{\infty,\infty}=C^s$, and the same scale defines Hölder–Besov spaces $C^\alpha$ for $\alpha<0$. Bony's paraproduct shows that $fg$ is well defined for $f\in C^\alpha$, $g\in C^\beta$ when $\alpha+\beta>0$.
- **Hodge theory as elliptic theory.** On a compact oriented Riemannian manifold, $\Delta=dd^*+d^*d$ is elliptic on $k$-forms. Gårding's inequality plus Rellich make it Fredholm, which gives $\Omega^k=\mathcal{H}^k\oplus d\Omega^{k-1}\oplus d^*\Omega^{k+1}$ and $\mathcal{H}^k\cong H^k_{dR}$. On Kähler manifolds $\Delta_d=2\Delta_{\bar\partial}$, which yields $H^k=\bigoplus_{p+q=k}H^{p,q}$, the starting point of the Hodge conjecture.
- **Singular SPDE.** In the stochastic quantization equation $\partial_t\phi=\Delta\phi-\phi^3+\xi$ on $\mathbb{T}^3$, the white noise $\xi$ lies in parabolic $C^{-5/2-\kappa}$ and $\phi$ in $C^{-1/2-\kappa}$, so $\phi^3$ is undefined. Hairer's regularity structures (or paracontrolled calculus), combined with renormalization, construct the solution and hence the $\Phi^4_3$ measure.

## Techniques to master

Testing and Grönwall arguments, interpolation, weak and weak-\* compactness, difference quotients, bootstrapping regularity, commutator and Kato–Ponce estimates, and scaling heuristics.

## Standard references / Reading path

Prerequisites are measure theory, Banach and Hilbert space theory (weak topologies, Riesz representation) and the Fourier transform. Read Evans, _Partial Differential Equations_ (GSM 19), Chapters 5–7; Brezis, Chapters 8–10; Bahouri–Chemin–Danchin, Chapter 2 and the Navier–Stokes chapters; Robinson–Rodrigo–Sadowski on 3D Navier–Stokes; Warner, Chapter 6, for the Hodge theorem; and Hairer's 2014 Inventiones paper.

## Where it bites

- **Navier–Stokes regularity (Clay)** asks for global smooth solutions in $\mathbb{R}^3$ or $\mathbb{T}^3$; energy supercriticality is the core obstruction. Convex integration gives nonuniqueness of weak solutions (Buckmaster–Vicol), and Albritton–Brué–Colombo prove nonuniqueness of Leray–Hopf solutions with forcing. The unforced uniqueness and regularity problem remains open.
- **Yang–Mills mass gap / constructive QFT.** $\Phi^4_3$ is subcritical, so regularity structures apply. Four-dimensional Yang–Mills is scaling-critical, which puts it outside these methods.
- **Hodge theory** rests on the elliptic package above.

# Plain explanation

Many laws of physics are equations about rates of change, such as how heat spreads or how water flows. To say anything useful about their solutions, you need to measure how wild a function can be. Does it jump around? Does it have sharp corners? Is it smooth enough that its rate of change even makes sense?

Sobolev spaces are the measuring tools. Each one is a collection of functions whose size and whose slopes are both under control. A key idea is that a function may have corners, as long as its slope makes sense in an 'average' way.

Energy methods use a simple physical idea. If some total quantity, like the energy of a system, cannot grow, then the solution cannot blow up in that measure. It is like a bank balance: you may not know every transaction, but if the total can never go up, there is a limit to how bad things can get.

These tools are the standard route to proving that an equation has a solution, that it is unique, and that it stays smooth. They are also where the hard problems live. For fluid flow in three dimensions, energy is measured in a way that is too weak to rule out trouble at tiny scales.

The bank-balance picture breaks there: a balance that never grows can still be squeezed into one tiny spot, and the energy cannot see that.

# Student explanation

A function $u$ on a region $\Omega$ may not have an ordinary derivative everywhere, but it can have a **weak derivative**: a function $g$ such that integrating $u$ against the derivative of any smooth test function equals minus the integral of $g$ against that test function (integration by parts, used as a definition). The **Sobolev space** $W^{k,p}(\Omega)$ contains the functions in $L^p$ (so $\int|u|^p<\infty$) whose weak derivatives up to order $k$ also lie in $L^p$. The special case $H^s$ (with $p=2$) is convenient because it can be described with the Fourier transform: roughly, $u\in H^s$ if its high-frequency waves decay fast enough. This lets $s$ be any real number, so smoothness comes in a continuous scale.

**Embedding theorems** convert one kind of control into another. In dimension $n$, if $u$ has one derivative in $L^p$ with $p<n$, then $u$ itself lies in $L^{p^*}$ with $p^*>p$, a stronger kind of integrability; if $p>n$, then $u$ is actually continuous (Morrey). For $H^s$ on $\mathbb R^n$, $s>n/2$ implies $u$ is bounded. Each such inequality is 'scale-aware': the exponents are fixed by how the inequality behaves when you zoom in on the function.

**Compactness** (Rellich–Kondrachov) says that on a bounded domain a sequence bounded in $H^1$ has a subsequence that converges in $L^2$. This is how approximate solutions are turned into real ones: construct approximations, bound them uniformly, extract a convergent subsequence, show the limit solves the equation.

**Energy methods** produce those uniform bounds. Multiply the equation by the solution (or a derivative of it), integrate, and use integration by parts to obtain an inequality like $\frac{d}{dt}E(t)\le CE(t)$, where $E$ is a norm squared. Gronwall's inequality then bounds $E$ for all later times. These bounds are called **a priori estimates** because they are derived assuming a solution exists.

The notion of **criticality** describes how an equation scales: if solving the equation at a small scale corresponds to a rescaled solution, one can compare the scaling of the energy with the scaling of the equation. If the energy gets _weaker_ at small scales (**supercritical**), energy alone cannot prevent small-scale concentration. That is the structural reason three-dimensional Navier–Stokes is hard, and why it needs ideas beyond a standard energy bound.

Besov spaces and Hölder spaces refine the scale of smoothness, and are used when Sobolev spaces are too coarse.
