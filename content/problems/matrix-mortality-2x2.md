---
type: problem
slug: matrix-mortality-2x2
title: Decidability of mortality for 2×2 integer matrices
entry: matrix-semigroup-decision-problems
status: OPEN
origin: Open since Paterson (1970) proved the 3×3 case undecidable; Bournez and Branicky (1999) listed the low-dimensional cases as an open problem in systems and control theory. A November 2026 unrefereed preprint claims undecidability.
ratings:
  difficulty: 18
  applicationValue: 5
  leverage: 32
verification:
  route: LEAN
sources:
  - title: Quartz, Shevchenko, De Sterck, Liu, Mortality Is Undecidable for 2x2 Integer Matrices (arXiv:2611.06562, 4 November 2026, preprint)
    url: https://arxiv.org/abs/2611.06562
  - title: Lean 4 formalization repository (j49liu/matrix_mortality_lean), as linked from Appendix G of the preprint
    url: https://github.com/j49liu/matrix_mortality_lean
  - title: Paterson, Unsolvability in 3x3 matrices (Studies in Applied Mathematics, 1970)
    url: https://doi.org/10.1002/sapm1970491105
  - title: Cassaigne, Halava, Harju, Nicolas, Tighter undecidability bounds for matrix mortality (arXiv:1404.0644)
    url: https://arxiv.org/abs/1404.0644
  - title: Bournez, Branicky, The mortality problem for matrices of low dimensions (Theory of Computing Systems, 2002)
    url: https://doi.org/10.1007/s00224-002-1010-5
timeline:
  - date: 1970-01-01
    title: Mortality undecidable for 3x3 integer matrices
    body: Paterson showed undecidability in dimension 3, leaving dimension 2 open.
    source: https://doi.org/10.1002/sapm1970491105
  - date: 2002-01-01
    title: "Two rational 2x2 matrices: decidable"
    body: Bournez and Branicky showed decidability for two rational 2x2 matrices, as cited in the 2026 preprint.
    source: https://doi.org/10.1007/s00224-002-1010-5
  - date: 2012-01-01
    title: NP-hard for determinants 0, 1, -1
    body: Bell, Hirvensalo and Potapov proved NP-hardness for 2x2 integer matrices with determinants in {0,1,-1}.
    source: https://doi.org/10.1007/978-3-642-32589-2_16
  - date: 2026-11-04
    title: Preprint claims undecidability for 2x2 integer matrices
    body: Quartz, Shevchenko, De Sterck and Liu claim a reduction from a fixed universal machine using 5,799 matrices and cite a Lean 4 formalization. Unrefereed; not yet checked by DARC.
    source: https://arxiv.org/abs/2611.06562
explainer:
  oneLine: Can an algorithm decide whether some product of given 2x2 integer matrices is zero? A 2026 preprint says no; unchecked.
  flow:
    - "3x3 case: undecidable since 1970"
    - 2x2 too small for the old trick
    - "2026 preprint: simulate a counter machine"
    - Wrong steps leave a stuck prime factor
    - "Unrefereed: expert and Lean audit pending"
  glossary:
    - term: mortality problem
      meaning: Asking whether some product of matrices from a given finite set is the zero matrix.
      link: /research/matrix-semigroup-decision-problems
    - term: decidable / undecidable
      meaning: A question is decidable if a program always answers it correctly in finite time; undecidable if no such program can exist.
      link: https://en.wikipedia.org/wiki/Undecidable_problem
    - term: halting problem
      meaning: Asking whether a program eventually stops. Turing proved no program can answer this correctly for every program.
      link: https://en.wikipedia.org/wiki/Halting_problem
    - term: Turing machine
      meaning: "An idealised computer: a tape, a read/write head and a fixed finite rulebook."
      link: https://en.wikipedia.org/wiki/Turing_machine
    - term: two-counter machine
      meaning: A simple computer with two integer registers and instructions to add one, subtract one and test for zero. It can simulate any Turing machine.
      link: https://en.wikipedia.org/wiki/Counter_machine
    - term: determinant
      meaning: For a 2x2 matrix with rows (a, b) and (c, d), the number ad - bc. The determinant of a product is the product of determinants.
      link: https://en.wikipedia.org/wiki/Determinant
    - term: rank-one matrix
      meaning: A nonzero matrix whose rows are all multiples of one another; for 2x2, a nonzero matrix with determinant 0.
      link: https://en.wikipedia.org/wiki/Rank_(linear_algebra)
    - term: projective line
      meaning: The set of directions in the plane; each is a rational number or infinity. A matrix acts on it by sending a/b to another fraction.
      link: https://en.wikipedia.org/wiki/Projective_line
    - term: Post correspondence problem
      meaning: Given pairs of words, decide whether some sequence of pairs spells the same word on top and bottom. Undecidable.
      link: https://en.wikipedia.org/wiki/Post_correspondence_problem
    - term: Lean
      meaning: "A proof assistant: a program that checks mathematical proofs written in a formal language, step by step."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    - term: computability and diagonalization
      meaning: DARC's entry on what can and cannot be computed, including the proof that the halting problem is unsolvable.
      link: /research/computability-diagonalization
  readFirst:
    - title: Mortality Is Undecidable for 2x2 Integer Matrices (arXiv:2611.06562)
      url: https://arxiv.org/abs/2611.06562
      why: The preprint making the claim; unrefereed, so read critically.
    - title: matrix_mortality_lean (GitHub)
      url: https://github.com/j49liu/matrix_mortality_lean
      why: The Lean 4 formalization the authors cite; DARC has not built it.
    - title: Post correspondence problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Post_correspondence_problem
      why: The puzzle behind the 3x3 undecidability proof.
    - title: Counter machine (Wikipedia)
      url: https://en.wikipedia.org/wiki/Counter_machine
      why: What a two-counter machine is and why it is enough to simulate any computer.
raw:
  body: "**Instance:** a finite set $S=\\{M_1,\\dots,M_k\\}$ of $2\\times2$ integer matrices. **Question:** is there a finite sequence $i_1,\\dots,i_m$ with $m\\ge1$ such that $M_{i_1}M_{i_2}\\cdots M_{i_m}=0$? (This is the *mortality problem*; over the rationals it is equivalent.) Mortality is undecidable for $3\\times3$ integer matrices (Paterson, 1970), so the question is whether the $2\\times2$ case is decidable, in general or for a bounded number of matrices."
  student: "**The question.** Given $S=\\{M_1,\\dots,M_k\\}$, $2\\times2$ integer matrices, is there a product $M_{i_1}\\cdots M_{i_m}=0$ with $m\\ge1$? Over the rationals the problem is equivalent: multiply through by a common denominator, which scales every product by a nonzero number.\n\n**Why it is not just a search.** You can enumerate products of length 1, 2, 3, and so on, and if a zero product exists you will eventually find it. So a 'yes' can always be confirmed. The trouble is a 'no': you can never stop enumerating. The classic example of this situation is the *halting problem* about *Turing machines* (idealised computers with a tape and a finite rulebook): no program decides for every machine whether it stops. A problem that no program always answers is called *undecidable*.\n\n**Known landscape.**\n\n- $3\\times3$: undecidable (Paterson 1970), by encoding Post correspondence instances, since a $3\\times3$ matrix can store two numbers that act like two words. Six matrices already suffice (2014).\n- $2\\times2$, two rational matrices: decidable (Bournez and Branicky, 2002).\n- $2\\times2$ with determinants in $\\{0,1,-1\\}$: NP-hard (2012).\n- Membership of a nonsingular matrix: decidable (2017).\n\nThe *determinant* of $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ is $ad-bc$; it multiplies when you multiply matrices. A nonzero $2\\times2$ matrix has *rank* one exactly when its determinant is $0$, meaning its rows are multiples of each other.\n\n**The claim (unrefereed).** Quartz, Shevchenko, De Sterck and Liu (arXiv:2611.06562, 4 Nov 2026) claim undecidability with 5,799 matrices: 5,798 fixed nonsingular ones with determinant $\\pm p$ for one prime $p$, plus one rank-one matrix that carries the input. They reduce halting of a fixed *two-counter machine* (two integer registers with increment, decrement and zero-test instructions) to *projective reachability*: a vector's direction is a point on the projective line, a rational number or infinity. Any wrong simulation step leaves a factor of $p$ in a denominator that cannot cancel later, so only faithful simulations lead to zero.\n\nThe authors say they used AI coding tools heavily and provide a Lean 4 proof-assistant formalization. DARC has not read the proof, built the Lean code, or checked that its theorem statement matches the paper's. Until experts accept it, the status stays OPEN."
site:
  aiReviewed: true
---

# State of the art

**Known before November 2026.** Mortality is undecidable in dimension 3 and higher, with six $3\times3$ matrices enough (Cassaigne, Halava, Harju and Nicolas, 2014). For $2\times2$ it is decidable for two rational matrices (Bournez and Branicky, 2002), NP-hard when all determinants lie in $\{0,1,-1\}$ (Bell, Hirvensalo and Potapov, 2012), and the related membership problem for nonsingular integer matrices is decidable (Potapov and Semukhin, 2017). The general case was open.\n\n**Claimed resolution (unrefereed).** Quartz, Shevchenko, De Sterck and Liu (arXiv:2611.06562, submitted 4 November 2026, cs.CC) claim that mortality is undecidable for a family of 5,799 distinct $2\times2$ integer matrices: 5,798 are fixed, nonsingular, with determinant $\pm p$ for one prime $p$ (Appendix G of the paper gives $51{,}859$), and one rank-one matrix carries the input. The proof reduces halting of a fixed two-counter machine to projective reachability: configurations are rational points on the projective line, and any wrong step leaves a factor of $p$ in a denominator that cannot cancel later, so only faithful simulations reach a zero product. The authors say they used OpenAI Codex and Claude Code for the research, proofs, manuscript and Lean formalization, and take responsibility for the result. A companion Lean 4 repository (github.com/j49liu/matrix_mortality_lean, main theorem `Mortality.PaperTheorem.paper_result`) is stated to verify the reduction with no extra axioms. DARC has not read the proof in detail, built the Lean code, or checked that its theorem statement matches the informal one. The problem stays OPEN here until experts accept the argument.

# Applications

Few direct ones. A confirmed result would show that deciding whether zero is reachable in two-dimensional linear switching systems, or in automata with $2\times2$ integer weights, has no general algorithm, which tells verification-tool authors where not to look for complete procedures. It would also be a data point on how claims produced with heavy AI assistance get checked. No deployed technology depends on the answer.

# Resolution criteria

Either an accepted proof of undecidability (peer-reviewed or independently verified, for example a Lean development whose definitions and theorem statement have been audited by experts and which builds with no extra axioms) or an algorithm deciding mortality for all finite sets of $2\times2$ integer matrices. If errors are found in the preprint, the problem reverts to open with no credible claim.

# Rating rationale

Difficulty 18: the preprint gives an explicit reduction and a Lean 4 repository that is claimed to use no extra axioms, so what remains is auditing the formal statement and the argument; without the claim, a problem open since 1970 would sit in the 50s to 60s, and it returns there if the preprint fails. Application value 5: no deployed technology depends on the answer, which would only tell tool builders that no complete algorithm exists for two-dimensional switching systems; level with the 3x3 tensor rank question (6). Leverage 32: it would fix the dimension boundary for matrix-semigroup problems and bear on a few related 2-dimensional problems, a subfield effect well below the hyperclique hypothesis (58).

# Verification

Route: Lean. Clone github.com/j49liu/matrix_mortality_lean at a pinned commit, build it with the Lean 4 and Mathlib versions pinned in its README (`lake build`) and run the included axiom audit; the main theorem `Mortality.PaperTheorem.paper_result` should depend only on propext, Classical.choice and Quot.sound, with no `sorry` or custom axioms. The harder part is statement fidelity: a reviewer must read the definitions of matrix, product, mortality and the universal machine, and confirm that the theorem says what the paper says (a fixed family of 5,798 integer matrices with determinant 51,859 or -51,859, plus an input-dependent rank-one matrix, is mortal exactly when the fixed machine halts on the input, and halting is undecidable). Also spot-check the matrices with computer algebra: count, determinants and the rank-one conversion lemma.

# Plain explanation

Imagine you are given a handful of small grids of whole numbers, each just two rows and two columns. You can multiply them together in any order, using each as often as you like. The question: is there some order that makes every number in the result zero?

For bigger grids, three by three or more, it was shown in 1970 that no computer program can always answer this. The reason is that the question can disguise any program, and telling whether a program ever stops is known to be impossible. Two-by-two grids are too cramped for that disguise to fit, so for more than fifty years nobody knew the answer. Some special cases can be solved, and some are known to be hard.

On 4 November 2026, a team posted a paper claiming that even two-by-two grids are impossible in general, using several thousand carefully built grids. They also published a Lean formalization that, they say, has a computer check every step of the reduction. But no independent experts have reviewed it, and DARC has not checked it either. So this problem is still listed as open here.

Why care? It marks the exact edge between questions a program can settle and those it never can, for a basic building block of control systems. Nothing in daily life depends on the answer.

The tricky part: a computer-checked proof can still prove the wrong statement, so people must read what was actually proved.
