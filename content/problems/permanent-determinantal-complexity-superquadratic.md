---
type: problem
slug: permanent-determinantal-complexity-superquadratic
title: "Permanent versus determinant: a superquadratic lower bound on the determinantal complexity of the permanent"
entry: computational-complexity
status: OPEN
origin: Leslie Valiant, 1979 (VP versus VNP)
ratings:
  difficulty: 74
  applicationValue: 12
  leverage: 50
verification:
  route: LEAN
sources:
  - title: "Mignon, Ressayre: A quadratic bound for the determinant and permanent problem (IMRN 2004)"
    url: https://doi.org/10.1155/S1073792804142566
  - title: "Landsberg, Manivel, Ressayre: Hypersurfaces with degenerate duals and the Geometric Complexity Theory program (arXiv:1004.4802)"
    url: https://arxiv.org/abs/1004.4802
site:
  aiReviewed: true
---

The **determinantal complexity** $\mathrm{dc}(\mathrm{perm}_n)$ is the least $m$ such that the $n\times n$ permanent equals the determinant of an $m\times m$ matrix whose entries are affine-linear forms in the $n^2$ variables; the border version also allows limits of such determinants. Valiant's conjecture $\mathsf{VP}\ne\mathsf{VNP}$ is essentially the statement that $\mathrm{dc}(\mathrm{perm}_n)$ grows faster than every polynomial.

**Problem:** break the quadratic barrier: prove $\mathrm{dc}(\mathrm{perm}_n)=\omega(n^2)$ over $\mathbb C$, and ideally the same for the border version.

# State of the art

Mignon and Ressayre (IMRN 2004) proved $\mathrm{dc}(\mathrm{perm}_n)\ge n^2/2$ over fields of characteristic zero using the Hessian; Cai, Chen and Li extended this to other characteristics, and Landsberg, Manivel and Ressayre (arXiv:1004.4802) proved the same quadratic bound for the border version. No superquadratic lower bound is accepted; the best upper bound is exponential.

**Unverified claim:** openai/math family 108 (October 2026) claims an $\Omega(n^3)$ lower bound for the border determinantal complexity, with OpenAI's own unreviewed Lean formalization. It is on the Verification board.

# Applications

None directly. A superquadratic bound would be the first sign that geometric or algebraic methods can make real progress towards VP ≠ VNP, the algebraic analogue of P ≠ NP.

# Resolution criteria

A proof of an $\omega(n^2)$ bound accepted by algebraic-complexity experts (refereed publication or broad acceptance), or a Lean proof against a reviewed statement of (border) determinantal complexity.

# Rating rationale

The n²/2 barrier has stood since 2004; a superquadratic bound is a recognised step towards VP ≠ VNP, below it in difficulty and leverage. No direct applications.

# Verification

A Lean 4 proof of the lower bound, checked with Comparator against a statement file in which the permanent, affine-linear determinantal representations and (for the border version) coefficientwise limits are checked definitions, plus expert confirmation that the notion matches the literature's.
