---
type: problem
slug: bqp-not-in-ph-beyond-oracles
title: "BQP versus the polynomial hierarchy: evidence beyond oracles that BQP ⊄ PH"
entry: bqp-complexity-class
status: OPEN
origin: Bernstein and Vazirani, 1993; Aaronson, 2010
ratings:
  difficulty: 81
  applicationValue: 4
  leverage: 50
workMix:
  theory: 100
  engineering: 0
  compute: 0
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: Aaronson, BQP and the Polynomial Hierarchy (STOC 2010)
    url: https://arxiv.org/abs/0910.4698
  - title: Aaronson, Ambainis, Forrelation (STOC 2015)
    url: https://arxiv.org/abs/1411.5729
  - title: Raz, Tal, Oracle separation of BQP and PH (STOC 2019)
    url: https://doi.org/10.1145/3313276.3316315
  - title: Raz, Tal, Oracle Separation of BQP and PH (J. ACM 2022)
    url: https://doi.org/10.1145/3530258
  - title: Wu, A stochastic calculus approach to the oracle separation of BQP and PH (2020)
    url: https://arxiv.org/abs/2007.02431
  - title: Bremner, Jozsa, Shepherd, Classical simulation of commuting quantum computations implies collapse of the polynomial hierarchy (2010)
    url: https://arxiv.org/abs/1005.1407
  - title: Aaronson, Arkhipov, The Computational Complexity of Linear Optics (2011)
    url: https://arxiv.org/abs/1011.3245
links:
  - to: aaronson-ambainis-conjecture
    kind: RELATED
    note: The Aaronson–Ambainis conjecture governs whether quantum query speedups survive for random oracles, the random-oracle version of the BQP versus PH question; both rest on Fourier analysis of bounded polynomials.
  - to: p-vs-np
    kind: RELATED
    note: An unconditional BQP ⊄ PH would prove P ≠ PSPACE, and any such proof meets the same relativisation barrier that blocks P versus NP.
timeline:
  - date: 2009-10-25
    title: Forrelation programme
    body: Aaronson proposed Forrelation-type problems and the generalised Linial–Nisan conjecture.
    source: https://arxiv.org/abs/0910.4698
  - date: 2010-05-09
    title: Sampling collapse result
    body: Bremner, Jozsa and Shepherd showed exact classical IQP sampling would collapse PH.
    source: https://arxiv.org/abs/1005.1407
  - date: 2018-05-31
    title: Oracle separation
    body: Raz and Tal proved BQP is not in PH relative to an oracle (ECCC TR18-107).
    source: https://eccc.weizmann.ac.il/report/2018/107/
explainer:
  oneLine: Find real-world evidence, not just black-box proofs, that quantum computers solve problems beyond a whole tower of classical classes.
  flow:
    - "PH: tower of classical problem classes"
    - "Oracle proof: BQP escapes the tower"
    - Direct proof would separate P, PSPACE
    - "Target: escape or tower collapses"
    - Known for sampling, not decisions
  glossary:
    - term: polynomial hierarchy
      meaning: A tower of complexity classes built from NP with alternating 'exists' and 'for all'.
      link: https://en.wikipedia.org/wiki/Polynomial_hierarchy
    - term: BQP
      meaning: Problems quantum computers solve efficiently.
      link: /research/bqp-complexity-class
    - term: oracle
      meaning: A black box an algorithm can only query.
      link: https://en.wikipedia.org/wiki/Oracle_machine
    - term: relativization
      meaning: A proof technique that works relative to every oracle; such proofs cannot settle some questions.
      link: https://en.wikipedia.org/wiki/Relativization
    - term: PSPACE
      meaning: Problems solvable with polynomial memory.
      link: https://en.wikipedia.org/wiki/PSPACE
    - term: collapse
      meaning: When levels of the hierarchy turn out equal, flattening everything above them.
      link: https://en.wikipedia.org/wiki/Polynomial_hierarchy
    - term: Forrelation
      meaning: A problem asking whether one Boolean function correlates with another's Fourier transform.
      link: https://en.wikipedia.org/wiki/BQP
  readFirst:
    - title: Finally, a Problem That Only Quantum Computers Will Ever Be Able to Solve (Quanta Magazine)
      url: https://www.quantamagazine.org/finally-a-problem-that-only-quantum-computers-will-ever-be-able-to-solve-20180621/
      why: The oracle separation, explained plainly.
    - title: Polynomial hierarchy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Polynomial_hierarchy
      why: Definitions and the meaning of collapse.
raw:
  body: "It is known that $\\mathsf{BQP}\\subseteq\\mathsf{PP}\\subseteq\\mathsf{PSPACE}$, and relative to an oracle $\\mathsf{BQP}\\not\\subseteq\\mathsf{PH}$ (Raz and Tal, 2019). Whether $\\mathsf{BQP}\\subseteq\\mathsf{PH}$ in the real (unrelativised) world is open. An unconditional proof that $\\mathsf{BQP}\\not\\subseteq\\mathsf{PH}$ would imply $\\mathsf{PH}\\ne\\mathsf{PSPACE}$ and so $\\mathsf{P}\\ne\\mathsf{PSPACE}$, which is beyond current techniques.\n\n**Question:** give non-oracle evidence that BQP is not contained in PH. The target is a theorem of the form \"if $\\mathsf{BQP}\\subseteq\\mathsf{PH}$ then the polynomial hierarchy collapses to a finite level\", or the same conclusion under another standard, widely believed assumption, for a *decision* (or promise) problem in BQP. For *sampling* problems such results are known; for decision problems none is."
  stateOfArt: "**Oracle evidence.** Simon's problem gives an oracle separation of BQP from BPP. Aaronson (STOC 2010) gave an oracle *relation* problem in BQP but not PH, and reduced an oracle *decision* separation to a generalised Linial–Nisan conjecture. Aaronson and Ambainis (2015) introduced Forrelation, and Raz and Tal (STOC 2019; J. ACM 2022) proved that the Forrelation distribution is pseudorandom for constant-depth classical circuits ($\\mathsf{AC}^0$), which gives an oracle relative to which $\\mathsf{BQP}\\not\\subseteq\\mathsf{PH}$; Wu (2020) gave a simpler stochastic-calculus proof. For *random* oracles the question is tied to the Aaronson–Ambainis conjecture.\n\n**Sampling.** Exact classical sampling from IQP circuits or boson sampling would collapse PH to its third level (Bremner, Jozsa and Shepherd, 2010; Aaronson and Arkhipov, 2011), and approximate versions follow under further conjectures. These concern sampling, and the collapse arguments (based on Stockmeyer approximate counting and PostBQP = PP) do not transfer to decision problems.\n\n**Barriers.** An unconditional separation must be non-relativising, since relative to a PSPACE-complete oracle $\\mathsf{BQP}=\\mathsf{P}\\subseteq\\mathsf{PH}$. No conditional decision-problem result of the requested form is known."
site:
  aiReviewed: true
---

# Applications

No direct practical use. It would show that quantum computers solve some decision problems beyond everything the polynomial hierarchy captures, which shapes expectations for what problems could ever see exponential quantum speedups.

# Resolution criteria

A proof, accepted by experts and ideally refereed at a top theory venue, that BQP ⊆ PH implies a collapse of PH (or another widely disbelieved consequence), for a decision or promise problem. An unconditional proof of BQP ⊄ PH would also resolve it, and would separate P from PSPACE.

# Rating rationale

Difficulty 81: open since 1993; only oracle results exist, and an unconditional answer would separate P from PSPACE, so even the conditional target needs a new technique for decision problems. Placed just below quantum PCP (83) and the ω problem (82). Application value 4: no foreseeable practical use. Leverage 50: a central structural question of quantum complexity, cited in discussions of where exponential speedups can exist, slightly above the Aaronson–Ambainis conjecture (41) that concerns its random-oracle version.

# Work mix rationale

A pure complexity-theory question.

# Verification

Expert review of the argument. A conditional result must state its assumption precisely and prove the implication for a decision or promise problem in BQP, not a sampling or relation problem. An unconditional claim must explain how it avoids relativisation (BQP ⊆ PH holds relative to a PSPACE-complete oracle), natural proofs and algebrisation, since it would also separate P from PSPACE.

# Plain explanation

Complexity theorists build a tower of problem classes on top of NP, called the polynomial hierarchy. Each floor allows one more round of 'is there an X such that for every Y...' questions. Nearly everything ordinary computers might plausibly do lives somewhere in this tower.

Can quantum computers solve problems outside the whole tower? In 2018 Raz and Tal proved the answer is yes in a 'black box' setting, where an algorithm can only learn about its input by asking questions of a box. Black-box results are good evidence but not proof: they do not rule out cleverer methods that look inside the box.

A direct proof is out of reach, because it would also settle a famous open question about ordinary computers (whether memory-limited computation is more powerful than time-limited computation). So this problem asks for the next best thing: a proof that if quantum computers could not escape the tower, the tower itself would collapse to a few floors, which experts consider very unlikely. Such results are known for quantum sampling tasks but not for yes-or-no questions.

# Student explanation

**The hierarchy.** NP asks "does there exist a certificate $y$ such that a quick check passes?". The second level asks "does there exist $y$ such that for all $z$ the check passes?", and so on. The union of all levels is **PH**. Most complexity theorists believe PH has infinitely many distinct levels; if two adjacent levels were equal, everything above would collapse to them.

**Where BQP might sit.** BQP $\subseteq$ PP $\subseteq$ PSPACE. Is BQP inside PH? Relative to an oracle, no: Raz and Tal (2018) built a black box (based on _Forrelation_, which asks whether one Boolean function is correlated with the Fourier transform of another) that a quantum computer handles with one query, while any PH-type algorithm fails. The key step showed that constant-depth classical circuits cannot tell Forrelation inputs from random ones.

**Why oracles are not enough.** If an oracle can solve PSPACE problems, then relative to it BQP is inside PH. So an unconditional proof must use techniques that do not work relative to every oracle, and it would prove $\mathsf{P}\ne\mathsf{PSPACE}$, which is out of reach.

**The target.** A _conditional_ result: "if BQP $\subseteq$ PH, then PH collapses". For _sampling_, such results exist: if a classical computer could sample exactly from certain quantum circuits' outputs, PH would collapse to its third level. The proof uses a counting trick (Stockmeyer's approximate counting) that needs the probabilities of many outputs, which a yes-or-no problem does not provide. Making the step from sampling to decision problems is the open question.
