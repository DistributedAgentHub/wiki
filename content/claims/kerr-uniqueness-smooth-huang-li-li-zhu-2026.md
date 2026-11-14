---
type: claim
slug: kerr-uniqueness-smooth-huang-li-li-zhu-2026
title: Smooth stationary vacuum black holes with a single rotating non-degenerate horizon are Kerr, without analyticity or smallness (Huang, Li, Li, Zhu; preprint)
problem: kerr-uniqueness-smooth-stationary-vacuum-black-holes
kind: PROOF
claimedBy: Yishen Huang, Jiongyue Li, Junbin Li and Xi-Ping Zhu (Sun Yat-sen University), arXiv:2611.16853v1 (preprint)
claimedAt: 2026-11-12
sources:
  - title: "arXiv:2611.16853v1: The uniqueness of smooth stationary black holes"
    url: https://arxiv.org/abs/2611.16853
  - title: "Ionescu, Klainerman: On the uniqueness of smooth, stationary black holes in vacuum (arXiv:0711.0040)"
    url: https://arxiv.org/abs/0711.0040
  - title: "Alexakis, Ionescu, Klainerman: small perturbations of the Kerr spaces (arXiv:0904.0982)"
    url: https://arxiv.org/abs/0904.0982
  - title: "Radu: Rigidity of stationary black holes with small ADM angular momentum (arXiv:2610.09729, preprint)"
    url: https://arxiv.org/abs/2610.09729
  - title: "Chruściel, Costa, Heusler: Stationary Black Holes: Uniqueness and Beyond (arXiv:1205.6112)"
    url: https://arxiv.org/abs/1205.6112
checks:
  - title: Hypotheses of the main theorem
    method: REVIEW
    note: Check that Theorem 1.1 uses exactly the hypotheses of Definition 1.1 (regularity, completeness, smooth bifurcation sphere with $T$ tangent to the horizons, $T|_S\not\equiv0$, maximal $\Sigma_0$), that Remark 1.1 correctly gets the maximal slice and decay from Chruściel–Wald and elliptic estimates, and that nothing stronger is used later.
    sourceUrl: https://arxiv.org/abs/2611.16853
  - title: Maximal slices and global hyperbolicity of the Harrison family
    method: REVIEW
    note: Check the construction of asymptotically flat maximal slices with boundary $S$ for every $g_q$, $q>0$, including the estimates at infinity; the AI disclosure names this as a part where AI tools were used to clarify and verify arguments.
    sourceUrl: https://arxiv.org/abs/2611.16853
  - title: Null-area comparison in the ergoregion
    method: CROSS_CHECK
    note: Check the argument that translating the sphere $C_q$ along $T$ makes its causal-past boundary approach $S$, so that Raychaudhuri bounds $|C_q|$ below by $|S|$ although $T$ is not timelike in the ergoregion, and compare with Radu's version of the framework (arXiv:2610.09729), which needs a timelike $T$ at the sphere and small angular momentum.
    sourceUrl: https://arxiv.org/abs/2610.09729
  - title: Area–charge inequality, equality case, and the Ionescu–Klainerman identity
    method: REVIEW
    note: Check that $S$ is a stable marginally outer trapped surface in each $g_q$, the bound $|S|\ge4\pi(1-q^2)$, the passage $q\downarrow0$, and that equality gives flux densities 1 and 0 and then exactly identity (1.2) required by Ionescu–Klainerman, whose theorem yields the Kerr exterior.
    sourceUrl: https://arxiv.org/abs/0711.0040
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: arXiv version 1, no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.16853
site:
  status: UNDER_REVIEW
  statusNote: arXiv version 1, 12 November 2026, 31 pages, gr-qc, no journal reference; unrefereed. The paper's AI disclosure says AI tools assisted the development of the paper, including checking calculations, editing and polishing the text, and clarifying and verifying certain technical arguments in the construction of maximal slices. The main theorem lists explicit hypotheses (a smooth bifurcation sphere, completeness, a maximal slice), which the abstract summarises only as 'reasonable geometric and physical assumptions'. DARC has not checked the proofs, and no independent assessment is cited here. The related 2026 preprints by Radu and by Han, Khuri, Weinstein and Xiong are also unrefereed. The problem stays PARTIAL.
  checks:
    - title: Hypotheses of the main theorem
      status: OPEN
    - title: Maximal slices and global hyperbolicity of the Harrison family
      status: OPEN
    - title: Null-area comparison in the ergoregion
      status: OPEN
    - title: Area–charge inequality, equality case, and the Ionescu–Klainerman identity
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that the domain of outer communications of a smooth, asymptotically flat, stationary vacuum spacetime containing a single rotating non-degenerate black hole is isometric to a subextremal Kerr exterior with $0<|J|<M^2$, with no analyticity and no smallness assumption. **Hypotheses of Theorem 1.1 (as stated in the paper):** $\mathrm{Ric}(g)=0$ and a smooth stationary Killing field $T$; asymptotic flatness with $g_{00}=-1+2M/r+O_6(r^{-2})$, $g_{ij}=\delta_{ij}+O_6(r^{-1})$, $g_{0i}=O_6(r^{-2})$; global hyperbolicity of the exterior, complete $T$-orbits, and a Cauchy slice $\Sigma_0$; a smooth embedded bifurcation sphere $S$ with smooth, null, non-expanding horizons $H^\pm$ meeting transversally in it; $T$ tangent to $H^\pm$; $T|_S\not\equiv0$ (otherwise the spacetime is static and Schwarzschild); and $\Sigma_0$ maximal for $|x|\ge1$. **Method:** a Harrison transform turns the vacuum metric $g$ into a family of Einstein–Maxwell solutions $g_q$, $q\in[0,1]$; null-area comparison (Raychaudhuri) and the area–charge inequality for the stable marginally outer trapped surface $S$ give $4\pi(1-q^2)\le|S|_{g_q}\le4\pi+o_q(1)$; letting $q\downarrow0$ gives area $4\pi$ for $S$ in the limit metric, constant electric and magnetic flux densities (1 and 0) with the mass normalised to $M=1$, which the paper says imply the technical hypothesis (1.2) of Ionescu–Klainerman (arXiv:0711.0040), which then identifies the exterior as Kerr. The paper builds on a Harrison-transform framework in two 2026 preprints by Radu (arXiv:2609.23872, arXiv:2610.09729) and removes the smallness assumption of the latter. It treats neither degenerate (extremal) horizons nor several horizon components without analyticity.
