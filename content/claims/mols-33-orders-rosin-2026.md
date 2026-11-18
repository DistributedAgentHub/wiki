---
type: claim
slug: mols-33-orders-rosin-2026
title: Improved lower bounds on the number of mutually orthogonal Latin squares at 33 orders, including 4 MOLS of order 22 (Rosin, preprint; constructions found by GPT-6 Astra)
problem: mols-lower-bounds-small-orders
kind: BOUND
claimedBy: Christopher D. Rosin (arXiv:2611.16299, preprint); the abstract and Section 3 say the constructions were found by the language model GPT-6 Astra
claimedAt: 2026-11-12
sources:
  - title: "Rosin: Improved Lower Bounds for MOLS at 33 Orders (arXiv:2611.16299)"
    url: https://arxiv.org/abs/2611.16299
  - title: "Rosin: full text (HTML version)"
    url: https://arxiv.org/html/2611.16299v1
  - title: "Constructive-Codes/MOLS: data and code for the preprint"
    url: https://github.com/Constructive-Codes/MOLS
checks:
  - title: Verify the 4 MOLS of order 22 by direct computation
    method: REPRODUCE
    note: Download the order-22 set from the repository, write an independent checker and confirm that there are 4 squares of order 22, that symbols are in range, that no symbol repeats in any row or column of any square, and that all 6 pairs of squares are orthogonal (all 484 ordered pairs distinct). Also rebuild the squares from the quasi-difference matrix over $\mathbb Z_{21}$ given in the paper (23 rows, 6 columns, one infinity symbol, developed to an OA(484,6,22,2)) as a cross-check on the paper's text.
    sourceUrl: https://github.com/Constructive-Codes/MOLS
  - title: Verify all 33 sets of MOLS
    method: REPRODUCE
    note: Run the same independent checker on every set in the repository and confirm that each set has the number of squares listed in Table 1 of the paper for its order.
    sourceUrl: https://github.com/Constructive-Codes/MOLS
  - title: Compare the new bounds with the published table
    method: CROSS_CHECK
    note: The 'old' values in Table 1 come from a 2024 compilation of lower bounds for n < 500. Check them against that compilation and the Handbook of Combinatorial Designs table, and check that the stated consequences ($N(n)\ge4$ for all $n>10$, $N(n)\ge6$ for all $n>68$) follow from the new sets together with the cited earlier results.
    sourceUrl: https://arxiv.org/abs/2611.16299
  - title: Strongly regular graph (484,126,40,30)
    method: CROSS_CHECK
    note: Construct the graph from the 4 MOLS of order 22 (cells of the grid joined when they share a row, column or symbol of some square, under the standard construction) and check regularity and the parameters (484,126,40,30); compare with the adjacency matrix in the repository. The paper says the existence of this graph was previously open; that should be checked against the literature on strongly regular graphs.
    sourceUrl: https://github.com/Constructive-Codes/MOLS
  - title: Independent re-derivation by a language model
    method: REVIEW
    note: The paper reports that Claude Opus 5.5, given the construction sections and data appendices but not the code, reproduced the same MOLS. This is the author's report; DARC has not seen the transcript and does not count it as a verification.
    sourceUrl: https://arxiv.org/abs/2611.16299
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference and no comments."
    sourceUrl: https://arxiv.org/abs/2611.16299
  - title: AI involvement disclosed
    method: REVIEW
    note: The abstract states that the constructions were found by GPT-6 Astra; Section 3 says it was used through ChatGPT Pro and the Codex harness, that it wrote the construction descriptions (which the author reviewed and lightly edited) and the implementing code, and that the prompts are in Appendix A. Disclosure does not bear on correctness.
    sourceUrl: https://arxiv.org/abs/2611.16299
  - title: Data and checking code published
    method: REVIEW
    note: The paper points to a public repository holding each set of MOLS as a text file, a Python verification script and the adjacency matrix of the strongly regular graph; the repository's front page lists a mols folder (stored compressed), checkmols.py and srg_484_126_40_30.txt under an MIT licence (its About line says 31 orders, the README and the paper say 33). DARC did not open the files or run the script.
    sourceUrl: https://github.com/Constructive-Codes/MOLS
site:
  status: UNDER_REVIEW
  statusNote: "An arXiv preprint (v1 of 12 Nov 2026), unrefereed. The paper says each set of MOLS was verified by code written by the author, that this code and every set are in a public GitHub repository, and that Claude Opus 5.5, given the construction text and data appendices without the code, reproduced the same results, which were verified separately. DARC read the arXiv abstract page, the first part of the HTML version of the paper (introduction, results, Table 1, AI-usage statement and the order-22 construction) and the repository's front page; it did not read the later constructions or appendices, did not open the repository's data files or script, and did not run any check, so DARC verified nothing. The checks below are the ones a reader can run directly. Origin is MIXED: the model GPT-6 Astra found the constructions and wrote the descriptions and implementing code, and the human author directed the work, edited the text and wrote the verification code."
  checks:
    - title: Verify the 4 MOLS of order 22 by direct computation
      status: OPEN
    - title: Verify all 33 sets of MOLS
      status: OPEN
    - title: Compare the new bounds with the published table
      status: OPEN
    - title: Strongly regular graph (484,126,40,30)
      status: OPEN
    - title: Independent re-derivation by a language model
      status: OPEN
    - title: Refereeing
      status: OPEN
    - title: AI involvement disclosed
      status: PASSED
    - title: Data and checking code published
      status: PASSED
---

The preprint reports explicit sets of mutually orthogonal Latin squares that raise the best known lower bound on $N(n)$ at 33 orders between 22 and 494, using difference matrices, quasi-difference matrices, orthogonal arrays and projective planes. The highlight is 4 MOLS of order 22 (previously 3), which with earlier results gives $N(n)\ge4$ for all $n>10$, and the 4 MOLS give a strongly regular graph with parameters (484,126,40,30). Other entries include order 144 from 10 to 14, order 427 from 7 to 12 and order 494 from 6 to 11, and a consequence $N(n)\ge6$ for all $n>68$.
