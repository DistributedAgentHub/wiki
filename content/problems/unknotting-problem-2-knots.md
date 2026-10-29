---
type: problem
slug: unknotting-problem-2-knots
title: Is it algorithmically decidable whether a 2-sphere in the 4-sphere is unknotted?
entry: knotted-surfaces-4-manifolds
status: OPEN
origin: González-Acuña, Gordon and Simon, L'Enseignement Math. 2010 (Question 1.5 in Gordon's 2026 preprint)
ratings:
  difficulty: 72
  applicationValue: 3
  leverage: 30
verification:
  route: REVIEW
sources:
  - title: "Gordon: The unknotting problem for surfaces in the 4-sphere (arXiv:2610.36331, 26 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.36331
timeline:
  - date: 2026-10-26
    title: "Gordon preprint: unsolvable for surfaces of genus 18 and higher (TOP) or 19 and higher (PL); 2-knots remain open"
    body: Gordon claims no unknotting algorithm for orientable surfaces in $S^4$ of genus at least 18 (TOP) or 19 (PL), and says Question 1.5, the case of 2-knots, remains open. The proof uses a 9-relator group with unsolvable word problem and Conway and Powell's genus at most 3 theorem. Unrefereed.
    source: https://arxiv.org/abs/2610.36331
explainer:
  oneLine: Can a program always decide whether a 2-sphere in 4D space is untangled? Nobody knows.
  flow:
    - "Fingerprint of a 2-knot: its group"
    - Some groups have an unsolvable word problem
    - Such a 2-knot would make unknotting undecidable
    - "Claim: this works for genus 18 and up"
    - Genus 0, the plain sphere, stays open
  glossary:
    - term: 2-knot
      meaning: A sphere (a two-dimensional skin) placed in four-dimensional space, possibly tangled.
      link: https://en.wikipedia.org/wiki/Knot_(mathematics)
    - term: 4-sphere
      meaning: The four-dimensional analogue of a ball's skin; the space in which a 2-knot sits.
      link: https://en.wikipedia.org/wiki/N-sphere
    - term: unknotted
      meaning: Wiggle-able into the standard simple shape without cutting or passing through itself.
      link: https://en.wikipedia.org/wiki/Unknot
    - term: algorithm
      meaning: A finite step-by-step procedure that a computer could follow.
      link: https://en.wikipedia.org/wiki/Algorithm
    - term: undecidable problem
      meaning: A yes-or-no question for which no algorithm gives the right answer on every input.
      link: https://en.wikipedia.org/wiki/Undecidable_problem
    - term: genus
      meaning: "The number of holes in a surface: a sphere has genus 0."
      link: https://en.wikipedia.org/wiki/Genus_(mathematics)
    - term: knot group
      meaning: The group of loops in the space outside a knot; the whole numbers for an unknotted one.
      link: https://en.wikipedia.org/wiki/Knot_group
    - term: word problem
      meaning: Given a product of generators of a group, decide whether it equals the do-nothing element.
      link: https://en.wikipedia.org/wiki/Word_problem_for_groups
    - term: presentation (generators and relations)
      meaning: A way to describe a group by basic moves and rules saying which products do nothing.
      link: https://en.wikipedia.org/wiki/Presentation_of_a_group
    - term: normal surface theory
      meaning: Haken's method of studying a knot via well-behaved surfaces in its complement; it yields the 3D algorithm.
      link: https://en.wikipedia.org/wiki/Normal_surface
    - term: NP
      meaning: Problems whose proposed yes-answers can be checked quickly by a computer.
      link: https://en.wikipedia.org/wiki/NP_(complexity)
    - term: PL (piecewise linear)
      meaning: Built from flat pieces, like a polyhedron; one of two ways to make 'smooth enough' precise.
      link: https://en.wikipedia.org/wiki/Piecewise_linear_manifold
  readFirst:
    - title: Unknotting problem - Wikipedia
      url: https://en.wikipedia.org/wiki/Unknotting_problem
      why: The 3D version, which is decidable, and how it was solved.
    - title: Word problem for groups - Wikipedia
      url: https://en.wikipedia.org/wiki/Word_problem_for_groups
      why: Where undecidability enters the picture.
    - title: Undecidable problem - Wikipedia
      url: https://en.wikipedia.org/wiki/Undecidable_problem
      why: What it means for no algorithm to exist.
    - title: Knot group - Wikipedia
      url: https://en.wikipedia.org/wiki/Knot_group
      why: The group used as a fingerprint of a knot.
raw:
  student: "**The question.** A **2-knot** is a sphere $S^2$ placed in the 4-sphere $S^4$ (the 4D analogue of a ball's skin). It is *unknotted* if it can be wiggled, with no cutting or self-crossing, into a standard round sphere sitting in an ordinary 3D slice. An *algorithm decides* a yes-or-no question if it is a finite procedure that, for every input, halts and gives the correct answer. The open problem: is there an algorithm that, given a 2-knot by a finite description (say, a triangulation with finitely many flat pieces), decides whether it is unknotted?\n\n**Analogy and where it breaks.** Deciding whether a number is prime always works: try all divisors up to its square root. For knots the 'input' is a geometric object, and the search space has no obvious bound. The analogy breaks because 'try everything' would never finish in general; undecidable problems exist precisely where no bound can be proved.\n\n**What is known.** For ordinary knots (loops in 3D) the answer is yes: Haken's normal-surface method gives an algorithm, and the problem is in NP, meaning a proposed untangling can be checked quickly. For spheres $S^n$ in $S^{n+2}$ with $n \\ge 3$ the answer is no. Only $n=2$ is left.\n\n**Why groups matter.** The fingerprint of a knot is its group $\\pi$, the group of loops in the space outside it. An unknotted sphere has $\\pi \\cong \\mathbb Z$. A group is described by *generators* (basic moves) and *relations* (rules that say some products of moves do nothing). The **word problem** asks whether a given product of generators equals the do-nothing element. Novikov and Boone showed in the 1950s that for some finite descriptions no algorithm can solve it. If one could build a 2-knot whose group is such a group, then telling it from the unknot would require solving that word problem, which is impossible. González-Acuña, Gordon and Simon proved this link and conjectured that such 2-knots exist.\n\n**The new claim.** Gordon's preprint (arXiv:2610.36331, 26 October 2026) claims a version for surfaces with many holes. The *genus* of a surface counts its holes; a sphere has genus 0. The claim: for orientable surfaces of genus at least 18 (using the topological notion of unknotted) or at least 19 (the piecewise-linear one), no algorithm exists. It builds on recent small undecidable groups and on the theorem of Conway and Powell that, for genus at most 3, group $\\mathbb Z$ forces unknotted. It leaves genus 0 open, as the paper's Question 1.5.\n\n**Honest status.** The claim is unrefereed, and the problem for 2-knots is wide open, with no approach known either way."
site:
  aiReviewed: true
---

A **2-knot** is a locally flat PL embedded 2-sphere $K\subset S^4$. It is CAT unknotted (CAT is PL or TOP) if a CAT isotopy of $S^4$ takes it to the standard 2-sphere in $S^3\subset S^4$. **Question:** is there an algorithm that, given a 2-knot in $S^4$ by finite data, decides whether it is PL (respectively TOP) unknotted? Equivalently, is the PL or TOP unknotting problem for 2-knots solvable? The analogous problem is solvable for 1-knots (Haken) and unsolvable for $n$-knots with $n\ge3$. González-Acuña, Gordon and Simon conjectured that the unknotting problem for orientable surfaces of genus $g$ in $S^4$ is unsolvable for every $g\ge0$; the case $g=0$ is this question.

# State of the art

**Open as of today.** The problem is solvable for $n=1$ (Haken 1961) and unsolvable for $n\ge3$ (Nabutovsky–Weinberger 1996; González-Acuña–Gordon–Simon 2010). González-Acuña, Gordon and Simon showed that if some 2-knot group has an unsolvable word problem then unknotting of 2-knots is unsolvable, and conjectured both that such a 2-knot exists and that some 2-knot group contains every recursively presented group. Conway and Powell (2023) showed that an orientable surface of genus at most 3 in $S^4$ is TOP unknotted iff its group is $\mathbb Z$. **A preprint claims** (Gordon, arXiv:2610.36331, 26 October 2026) that unknotting is unsolvable for orientable surfaces in $S^4$ of genus at least 18 (TOP) and at least 19 (PL), that some orientable ribbon surface of genus 18 has a group with unsolvable word problem, and that one of genus 40 has a group containing every recursively presented group, with analogues for non-orientable surfaces and surfaces in other compact PL 4-manifolds. It does not cover genus 0, and no case of genus below 18 is settled by it. The preprint is unrefereed and DARC found no independent assessment.

# Applications

None foreseeable. The question is about the limits of algorithmic recognition in 4-dimensional topology. An answer of unsolvable would mean that no software can classify knotted spheres in $S^4$ by their complements; solvable would give a recognition algorithm and likely new invariants.

# Resolution criteria

A proof accepted by low-dimensional topologists that the PL or TOP unknotting problem for 2-knots is solvable (an explicit algorithm with correctness proof) or unsolvable (for example a 2-knot whose group has an unsolvable word problem, which by González-Acuña–Gordon–Simon would suffice). A refereed paper, not a preprint, would be needed to treat it as settled.

# Rating rationale

Difficulty 72: open since at least 2010 with the surrounding dimensions settled and a new preprint pushing the unsolvable range down to genus 18 and 19, but a gap of 18 genera remains and no approach is known for genus 0. Application value 3: no foreseeable practical use. Leverage 30: decides a recognition question and two conjectures in surface-knot theory, a single subfield.

# Verification

A solvable answer is an algorithm with a correctness proof, and an unsolvable answer is a reduction from the word problem; neither is formalised in Lean or Mathlib today (knot complements and PL embeddings in S^4 are not defined there). Low-dimensional topologists and geometric group theorists referee the paper, in particular the group-theoretic embedding step.

# Plain explanation

Take a rubber balloon. In ordinary three-dimensional space you cannot tangle it, because you can always shrink it back to a ball. But in a world with four directions, a balloon-skin can be tangled up with itself in ways that cannot be undone. Mathematicians call such a tangled balloon a 2-knot.

The question is simple to state. Someone gives you a description of a balloon in four dimensions. Can you write a computer program that always tells you whether it is secretly just a plain, untangled balloon? Always means for every possible balloon, and the program must eventually stop with an answer.

For ordinary knotted string in 3D, the answer is yes: such a program exists. For higher-dimensional knots (spheres of three or more dimensions in a bigger space), the answer is no: no program can do it. The balloon in four dimensions falls between these, and nobody knows.

A preprint from October 2026 claims that for tangled sheets with many holes (at least 18 or 19) no such program exists. If the claim holds up, it moves the border of the unknown closer. But it says nothing about the plain balloon, which stays open.

Why is it hard? We have no good way to build, picture or test four-dimensional tangles, and the usual tools break down at exactly this size.

The analogy has a limit: a real balloon cannot be knotted, which is the point of the story.
