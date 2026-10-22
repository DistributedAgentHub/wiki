---
type: claim
slug: hadamard-668-anthropic-claude-2026
title: Hadamard matrices of order 668 and the other open orders below 2000, reported by Levent Alpöge with Claude
problem: hadamard-conjecture
kind: COMPUTATION
claimedBy: Levent Alpöge (Anthropic), crediting collaborators @tehwalris and Saul Reynolds-Haertle, and Claude
claimedAt: 2026-08-12
sources:
  - title: "Alpöge: announcement on X (12 August 2026; login required)"
    url: https://x.com/__alpoge__/status/2087504785952182273
  - title: "Epoch AI: Hadamard Matrix of Order 668 (FrontierMath Open Problems)"
    url: https://epoch.ai/frontiermath/open-problems/hadamard
  - title: "Nechita: New Hadamard matrices (13 August 2026; informal check)"
    url: https://ion.nechita.net/posts/new-hadamard-matrices/
  - title: "Eliahou: A 64-modular Hadamard matrix of order 668"
    url: https://ajc-new.maths.uq.edu.au/v93.p422
checks:
  - title: Decode the order-668 matrix and check M·Mᵀ = 668·I
    method: REPRODUCE
    note: Nechita reports doing this informally (13 August 2026) without publishing code or output. A published, reproducible check, with the decoded matrix as a plain file, is still needed; it is a few seconds in numpy.
    sourceUrl: https://ion.nechita.net/posts/new-hadamard-matrices/
  - title: Identify the primary source and date of the report
    method: REVIEW
    note: The primary source is Alpöge's X post of 12 August 2026 (Epoch AI links it; the date is from contemporaneous blog posts, since X requires a login). No paper or technical report exists as of 17 October 2026.
    sourceUrl: https://x.com/__alpoge__/status/2087504785952182273
  - title: Check the other claimed orders up to 2000
    method: CROSS_CHECK
    note: Decode every matrix in the post, check each one, and compare the list of orders with the open orders below 2000 in the literature.
  - title: Lean-check the order-668 matrix against the Formal Conjectures statement
    method: FORMAL
    note: A certified-computation proof of `HadamardConjecture.variants.«167»` would close the order formally; the statement is still labelled open at commit e754a78.
site:
  status: UNDER_REVIEW
  statusNote: A Hadamard matrix is its own certificate (±1 entries and M·Mᵀ = n·I), and one mathematician (Ion Nechita) reported checking the order-668 matrix with a short script on 13 August 2026, but he did not publish the code or output, and no other independent check or decoded data file was found by 17 October 2026. The Formal Conjectures corpus still labels the order-668 statement open (commit e754a78). The method is undisclosed. Eliahou's 2025 paper (a 64-modular matrix, not Hadamard) predates the report and is not evidence for it.
  checks:
    - title: Decode the order-668 matrix and check M·Mᵀ = 668·I
      status: OPEN
    - title: Identify the primary source and date of the report
      status: PASSED
    - title: Check the other claimed orders up to 2000
      status: OPEN
    - title: Lean-check the order-668 matrix against the Formal Conjectures statement
      status: OPEN
---

On 12 August 2026 Levent Alpöge posted on X data, in the form of a puzzle with a decoder, that encodes Hadamard matrices of order 668 (the smallest order for which none was known) and of every other admissible order up to 2000 with no previously known example. He credited two collaborators and Claude. No paper, technical report or plain data file has been released. Epoch AI's FrontierMath open-problems page lists order 668 as solved, provisionally crediting AI, and says it will revise this if the team reports that humans contributed the core ideas.
