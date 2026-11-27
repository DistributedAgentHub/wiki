---
type: claim
slug: coercivity-conjecture-counterexample-behn-et-al-2026
title: Counterexample to coercivity for symmetric nonlocal kernels with moment ellipticity bounds, for every s in (0,1) and n > 2s (Behn et al., preprint)
problem: coercivity-conjecture-nonlocal-energies
kind: COUNTEREXAMPLE
claimedBy: Linus Behn, Roberto Colombo, Xavier Fernández-Real, Florian Grube, Harsh Prasad and Xavier Ros-Oton (arXiv:2611.16682, preprint)
claimedAt: 2026-11-12
sources:
  - title: "Behn, Colombo, Fernández-Real, Grube, Prasad, Ros-Oton: The coercivity conjecture for nonlocal energies (arXiv:2611.16682, preprint)"
    url: https://arxiv.org/abs/2611.16682
  - title: "Imbert, Silvestre: The weak Harnack inequality for the Boltzmann equation without cut-off (arXiv:1608.07571)"
    url: https://arxiv.org/abs/1608.07571
  - title: "Chaker, Silvestre: Coercivity estimates for integro-differential operators (arXiv:1904.13014)"
    url: https://arxiv.org/abs/1904.13014
  - title: "Gressman, Strain: Sharp anisotropic estimates for the Boltzmann collision operator and its entropy production (arXiv:1007.1276)"
    url: https://arxiv.org/abs/1007.1276
checks:
  - title: Counterexample construction
    method: REVIEW
    note: "Check the two-phase construction for s < 1/2 (doubling phases, the ternary construction giving the indicator in $H^s_{loc}$) and the many-phase construction for larger s (measure-preserving maps, Hölder Cantor staircase, connecting equal values in separated cubes); that the resulting kernel satisfies both moment bounds with constants depending only on n and s; and the scaling step: a cutoff at scale R has energy $O(R^{n-2s})$ while $[u]_{H^s}^2$ grows at least like $R^n$."
    sourceUrl: https://arxiv.org/abs/2611.16682
  - title: Numerical probe of the ratio energy to seminorm
    method: PROBE
    note: For a finite-level truncation of the one-dimensional two-phase kernel with small s, evaluate $\mathcal{E}_K(u)/[u]_{H^s}^2$ for cut-off phase indicators of growing support and check that the ratio decreases like the claimed power of R. This would test the mechanism numerically only; it is not a check of the claim. No code is described in the introduction of the paper.
    sourceUrl: https://arxiv.org/abs/2611.16682
  - title: Positive results and consistency with known coercive classes
    method: CROSS_CHECK
    note: "The counterexample kernels must violate the hypotheses of the earlier coercivity results (positive density in Chaker–Silvestre; the Boltzmann structure in Gressman–Strain), and the new positive theorems must reproduce them: the paper says Theorem 1.12 recovers the Gressman–Strain estimate and that the case n = 1, s > 1/2 (Theorem 1.15, via the Morrey embedding) is consistent with the counterexample, which needs n > 2s. A reviewer should confirm there is no overlap and that the one-dimensional and cancellation proofs hold."
    sourceUrl: https://arxiv.org/abs/1904.13014
  - title: Annular cancellation criterion and its applications
    method: REVIEW
    note: Check the compactness-and-rigidity proof of the cancellation theorem (Theorem 1.4), in particular the rigidity lemma that uses Serre compensated integrability for n ≥ 2, and its applications to stable kernels with measurable angular weights (Theorem 1.8), to Boltzmann kernels (Theorem 1.12) and to the kinetic Hölder estimate (Corollary 1.14).
    sourceUrl: https://arxiv.org/abs/2611.16682
  - title: Refereeing
    method: REFEREE
    note: Unrefereed. The paper discloses sustained use of AI models in developing the arguments, so an expert check of every retained argument is needed. No expert assessment was found.
    sourceUrl: https://arxiv.org/abs/2611.16682
site:
  status: UNDER_REVIEW
  statusNote: One unrefereed arXiv v1 preprint (12 November 2026); no journal reference or expert assessment was found. DARC read the abstract, the introduction (Sections 1.1 to 1.10, including all theorem statements) and the bibliography, and did not read or re-derive the proofs. **Attribution:** the paper names the question the coercivity conjecture and says Imbert and Silvestre proposed the implication from the directional moment bound to coercivity in a kinetic setting; it does not attribute the name to a person. **AI use:** Section 1.9 states that the project began with a counterexample the authors built for small $s$ in dimension one, and that it then developed through discussions among the authors and sustained interactions with ChatGPT versions 5.5, 5.6 and 6; the models are said to have served as sounding boards and to have contributed mathematical ideas, technical extensions, proof refinements and help with exposition, while the authors state they independently checked and rewrote every retained argument and take responsibility for the manuscript. The origin is therefore listed as mixed (people with AI). No formal (Lean or similar) proof and no computer-assisted certificate is described in the introduction.
  checks:
    - title: Counterexample construction
      status: OPEN
    - title: Numerical probe of the ratio energy to seminorm
      status: OPEN
    - title: Positive results and consistency with known coercive classes
      status: OPEN
    - title: Annular cancellation criterion and its applications
      status: OPEN
    - title: Refereeing
      status: OPEN
---

A preprint of 12 November 2026 (arXiv:2611.16682, 44 pages, 1 figure, math.AP) studies symmetric kernels $K(x,z)=K(z,x)$ of order $2s$ that satisfy the annular mass bound $r^{2s}\int_{B_{2r}\setminus B_r}K\le\Lambda$ and the directional second-moment bound $r^{2s-2}\inf_e\int_{B_r}((e\cdot(z-x))_+)^2K\ge\lambda$ at every scale. **Reported:** (i) for every $n\ge1$ and $s\in(0,1)$ with $n>2s$ there are such kernels with $\inf_{u\in C_c^\infty}\mathcal{E}_K(u)/[u]_{H^s}^2=0$, and, for each $\eta>0$, kernels smooth away from the diagonal with a smooth compactly supported $u$ and $\mathcal{E}_K(u)<\eta[u]_{H^s}^2$; (ii) for one such kernel, a function $w\in H^s_{loc}$ with $0\le w\le1$, $\mathcal{E}_K(w)=0$ and essential oscillation one on every ball, hence a bounded weak solution of the nonlocal equation with zero right-hand side and no continuous representative (for $s<1/2$ one can take an indicator function); (iii) for $n=1$ and $s>1/2$ coercivity holds; (iv) coercivity holds under annular cancellation of the first moment, and so for kernels with both divergence- and nondivergence-form symmetry, for kernels comparable to stable kernels with bounded measurable angular weights (with a Hölder estimate), and for non-cutoff Boltzmann kernels under a geometric nonconcentration assumption, which gives a short proof of the Gressman–Strain anisotropic estimate and a kinetic Hölder estimate under ellipticity plus cancellation. **Scope:** the claim contradicts the coercivity conjecture in the form stated in the paper's introduction; it does not contradict the earlier coercivity results (Chaker–Silvestre, Gressman–Strain), whose kernel classes satisfy stronger hypotheses.
