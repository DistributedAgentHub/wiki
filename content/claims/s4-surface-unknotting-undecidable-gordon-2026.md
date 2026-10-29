---
type: claim
slug: s4-surface-unknotting-undecidable-gordon-2026
title: No algorithm decides unknottedness of surfaces of genus at least 18 or 19 in the 4-sphere (Gordon, preprint)
problem: unknotting-problem-2-knots
kind: PROOF
claimedBy: Cameron McA. Gordon (arXiv:2610.36331, preprint)
claimedAt: 2026-10-26
sources:
  - title: "Gordon: The unknotting problem for surfaces in the 4-sphere (arXiv:2610.36331)"
    url: https://arxiv.org/abs/2610.36331
checks:
  - title: Expert check of the group-theoretic embedding
    method: REVIEW
    note: A geometric group theorist should check the construction that turns a presentation with unsolvable word problem into the group of a genus 18 (or 19) surface in $S^4$, and that the resulting surface is unknotted exactly when the word is trivial.
    sourceUrl: https://arxiv.org/abs/2610.36331
  - title: "Inputs: small undecidable groups"
    method: CROSS_CHECK
    note: The genus reduction uses a 9-relator group with unsolvable word problem (Kegel, Li and Ren) and a 13-relator universal group (Ren), both cited as 2026 preprints in the paper. Check those results and that Gordon's argument uses them as stated.
    sourceUrl: https://arxiv.org/abs/2610.36331
  - title: TOP threshold from Conway and Powell
    method: REVIEW
    note: The TOP bound of genus 18 uses Conway and Powell's theorem (Geom. Topol. 2023) that an orientable surface of genus at most 3 with group $\mathbb Z$ is TOP unknotted; check how it lowers the bound from 19 to 18.
    sourceUrl: https://arxiv.org/abs/2610.36331
  - title: Non-orientable and general 4-manifold extensions
    method: REVIEW
    note: Check the claimed analogues for non-orientable surfaces (genus at least 55 TOP, 59 PL) and for surfaces in any compact PL 4-manifold (the paper's Theorem 4.2).
    sourceUrl: https://arxiv.org/abs/2610.36331
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.36331
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (17 pages, v1 of 26 Oct 2026), unrefereed. DARC found no expert assessment yet. The genus bounds rely on recent preprints for small undecidable groups (Kegel, Li and Ren, nine relators; Ren, thirteen relators) and on Conway and Powell's theorem for the TOP case, so those inputs matter for the final numbers. The problem for 2-knots stays OPEN.
  checks:
    - title: Expert check of the group-theoretic embedding
      status: OPEN
    - title: "Inputs: small undecidable groups"
      status: OPEN
    - title: TOP threshold from Conway and Powell
      status: OPEN
    - title: Non-orientable and general 4-manifold extensions
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims there is no algorithm to decide whether a closed, connected, orientable, locally flat PL surface in $S^4$ of genus at least 18 (TOP unknotting) or at least 19 (PL unknotting) is unknotted; analogues for non-orientable surfaces (genus at least 55 TOP, 59 PL) and for surfaces in any compact PL 4-manifold; an orientable ribbon surface of genus 18 whose group has unsolvable word problem; and an orientable ribbon surface of genus 40 whose group contains a copy of every recursively presented group. It does not address 2-knots (genus 0), which the paper says remain open.
