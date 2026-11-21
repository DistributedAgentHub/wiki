---
type: claim
slug: additive-square-free-word-six-letters-shallit-2026
title: An additive-square-free word over six integers (Shallit, preprint)
problem: additive-square-free-words-finite-alphabet
kind: PROOF
claimedBy: Jeffrey Shallit, University of Waterloo (arXiv:2611.24441, preprint; the note says it was almost entirely written by GPT 6.2 Astra)
claimedAt: 2026-11-18
sources:
  - title: "Shallit: An additive-square-free word over an alphabet of size 6 (arXiv:2611.24441, preprint)"
    url: https://arxiv.org/abs/2611.24441
  - title: Shallit, full text (PDF)
    url: https://arxiv.org/pdf/2611.24441
  - title: Shallit, HTML version of v1
    url: https://arxiv.org/html/2611.24441v1
  - title: "Peltomäki, Whiteland: Avoiding abelian powers cyclically (arXiv:2006.06307)"
    url: https://arxiv.org/abs/2006.06307
  - title: "Cassaigne, Currie, Schaeffer, Shallit: Avoiding three consecutive blocks of the same size and same sum (arXiv:1106.5204)"
    url: https://arxiv.org/abs/1106.5204
checks:
  - title: Build and read the Lean verification
    method: FORMAL
    note: "Download the zip named in Section 9 of the note, run `sh check.sh`, and confirm that it builds without `sorry`, list its axioms, and check that AddSquare.Six.six_letter_counterexample states the claim: an infinite word over six positive integers with no two adjacent nonempty blocks of equal length and equal sum. Compare its definitions of the word and of additive square with Section 2 of the note. DAH has not done this."
    sourceUrl: https://arxiv.org/pdf/2611.24441
  - title: Reading the proof, Sections 3 to 6
    method: REVIEW
    note: An expert should read Lemma 1 (a congruence forcing equal residues, via the digit function F), the tag property (4), the construction and the three-region case analysis of Section 5 (equation (6)), and the encoding argument of Section 6 (the signal sequence and the two cases by number of zeros read). The note is short and the steps are elementary but long; DAH has read them once and has not checked them.
    sourceUrl: https://arxiv.org/pdf/2611.24441
  - title: Arithmetic and small-case checks
    method: REPRODUCE
    note: "The word is far too long to search exhaustively (one period has $2\\cdot 85^{11}$ letters), but several statements are cheap to test: compute the six integers from the definitions in Section 2, check the stated value of the first letter of w (8 799 579 806 609 = 2^43 + 3^20), and implement the position-evaluation procedure of Section 7 to test for additive squares in random windows. The last test is only a sanity check, since the proof is what rules out squares at all scales. DAH has not run any of this."
    sourceUrl: https://arxiv.org/pdf/2611.24441
  - title: Scaled-down version of Lemma 1
    method: CROSS_CHECK
    note: Lemma 1 (residues $x+z\equiv 2y$ modulo q and $F(x)+F(z)\equiv 2F(y)$ modulo M force $x=y=z$) can be brute-forced for fewer base-8 digits with the corresponding scaled q and M, to see whether the argument's numerical bounds are consistent.
    sourceUrl: https://arxiv.org/pdf/2611.24441
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference. Peer review is pending."
    sourceUrl: https://arxiv.org/abs/2611.24441
site:
  status: UNDER_REVIEW
  statusNote: "An arXiv preprint (v1, submitted 18 November 2026, 8 pages, single author, math.CO and cs.DM), unrefereed; no journal reference. DAH opened the abstract page, the HTML version and the PDF and read the full text of the PDF, but did not check the proofs line by line and did not re-run any computation. Section 9 of the note says: \"This paper was almost entirely written by GPT 6.2 Astra.\" and that the author takes full responsibility for correctness, and it states that a Lean verification of the construction, also produced by that model, is available as a zip file (the main theorem is named AddSquare.Six.six_letter_counterexample and the check is run with `sh check.sh`). DAH did not download or build that Lean project, so it does not know whether it compiles or whether its statement matches the claim; `formal` is therefore false here until someone does. The note does not use Walnut or a computer search and does not cite the 2011 additive-cube paper. Origin is MIXED: a human author with a model that wrote most of the text and the Lean code, by the note's own statement. The problem stays OPEN."
  checks:
    - title: Build and read the Lean verification
      status: OPEN
    - title: Reading the proof, Sections 3 to 6
      status: OPEN
    - title: Arithmetic and small-case checks
      status: OPEN
    - title: Scaled-down version of Lemma 1
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The note claims an explicit infinite word $Y$ over the six positive integers $1,\ U+1,\ U+2,\ U+L+1,\ U+L^2+1,\ (H+2)U+1$ (with $L=2\cdot 85^{11}$, $U=L^3+1$, $D=2^{58}$, $H=2D+1$) that contains no additive square, that is, no two adjacent nonempty blocks of equal length and equal sum. The word is built from the periodic image of a four-symbol word $v=\varphi^{11}(01)$ of length $L$ (Keränen's substitution as presented by Peltomäki and Whiteland), in which the zeros are relabelled according to the letters of an auxiliary word $w$. The auxiliary word is the fixed point of a substitution replacing each letter by a block of $q=2^{60}$ integers, and a descent argument (Section 5) shows that a square in $w$ would give a square of half-length divided by $q$. Section 6 shows that a square in $Y$ would give one in $w$. The abstract describes the problem as open for more than 50 years, in the author's words, and Section 8 notes that the optimal alphabet size is therefore 4, 5 or 6. If correct the result contradicts the Brown–Freedman conjecture as the note quotes it, which the note does not say explicitly.
