---
type: entry
slug: knotted-surfaces-4-manifolds
title: "Knotted surfaces in 4-manifolds: unknotting, knot groups and decidability"
field: topology-differential-geometry
kind: THEORY
status: ACTIVE
summary: Surfaces embedded in the 4-sphere, when they are unknotted, and what the fundamental group of the complement can detect. Includes 2-knots and the algorithmic recognition of unknotted surfaces.
reliedOn: Surface knots are the 4-dimensional analogue of classical knots. Their groups, and the unsolvability results that come from group theory, show where 4-manifold topology stops being algorithmically recognisable.
references:
  - title: "Gordon: The unknotting problem for surfaces in the 4-sphere (arXiv:2610.36331, preprint)"
    url: https://arxiv.org/abs/2610.36331
    kind: paper
  - title: "Conway, Powell: Embedded surfaces with infinite cyclic knot group (Geometry & Topology 27, 2023)"
    url: https://doi.org/10.2140/gt.2023.27.739
    kind: paper
timeline:
  - date: 2026-10-26
    title: "Gordon preprint: unknotting is undecidable for surfaces of genus at least 18 or 19 in the 4-sphere"
    body: Gordon claims no algorithm decides unknottedness of closed orientable locally flat surfaces in $S^4$ of genus at least 18 (TOP) or 19 (PL), with analogues for non-orientable surfaces (genus at least 55 TOP, 59 PL) and for surfaces in any compact PL 4-manifold. Unrefereed.
    source: https://arxiv.org/abs/2610.36331
explainer:
  oneLine: "Tangled sheets in 4D space: a new preprint claims no program can always tell whether one is untangled."
  flow:
    - Loops in 3D can be knotted
    - Surfaces in 4D can be knotted too
    - "Fingerprint: group of loops in the outside"
    - Some groups defeat every algorithm
    - "Claim: high-genus surfaces inherit that"
  glossary:
    - term: knot
      meaning: A closed loop of string in space, considered up to wiggling without cutting.
      link: https://en.wikipedia.org/wiki/Knot_theory
    - term: unknot
      meaning: The plain circle, a loop with no tangling that is equivalent to a round ring.
      link: https://en.wikipedia.org/wiki/Unknot
    - term: surface
      meaning: A two-dimensional skin, such as a sphere or a doughnut skin, with no thickness.
      link: https://en.wikipedia.org/wiki/Surface_(topology)
    - term: genus
      meaning: "The number of holes in a surface: a sphere has genus 0, a torus genus 1."
      link: https://en.wikipedia.org/wiki/Genus_(mathematics)
    - term: 4-sphere
      meaning: The four-dimensional analogue of a ball's skin; the setting where surface knots live.
      link: https://en.wikipedia.org/wiki/N-sphere
    - term: isotopy
      meaning: A smooth wiggling of an object through space with no cutting or passing through itself.
      link: https://en.wikipedia.org/wiki/Ambient_isotopy
    - term: fundamental group
      meaning: The group of loops in a space, where two loops are the same if one can be slid into the other.
      link: https://en.wikipedia.org/wiki/Fundamental_group
    - term: knot group
      meaning: The fundamental group of the space outside a knot; a fingerprint that is the whole numbers for the unknot.
      link: https://en.wikipedia.org/wiki/Knot_group
    - term: group
      meaning: A set with a way to combine two elements, a do-nothing element and an undo for each element.
      link: https://en.wikipedia.org/wiki/Group_(mathematics)
    - term: word problem
      meaning: Given a string of generators of a group, decide whether it equals the do-nothing element.
      link: https://en.wikipedia.org/wiki/Word_problem_for_groups
    - term: undecidable problem
      meaning: A yes-or-no question for which no single algorithm gives the right answer on every input.
      link: https://en.wikipedia.org/wiki/Undecidable_problem
    - term: PL (piecewise linear)
      meaning: Built from flat pieces, like a polyhedron; one of two common ways to make 'smooth enough' precise.
      link: https://en.wikipedia.org/wiki/Piecewise_linear_manifold
  readFirst:
    - title: Knot theory - Wikipedia
      url: https://en.wikipedia.org/wiki/Knot_theory
      why: Pictures and the basic ideas of knots and equivalence.
    - title: Unknotting problem - Wikipedia
      url: https://en.wikipedia.org/wiki/Unknotting_problem
      why: The classical 3D question and what is known about solving it.
    - title: Knot group - Wikipedia
      url: https://en.wikipedia.org/wiki/Knot_group
      why: The fingerprint used throughout this topic.
    - title: Word problem for groups - Wikipedia
      url: https://en.wikipedia.org/wiki/Word_problem_for_groups
      why: The source of the 'no algorithm' results.
raw:
  student: "**Knots and surfaces.** A knot is a closed loop sitting in 3D space; two knots count as the same if one can be wiggled into the other without cutting (an *isotopy*). The *unknot* is the plain circle. A **surface** is a 2D skin, such as a sphere (a balloon's skin) or a torus (a doughnut's skin). Its **genus** counts the holes: sphere $0$, torus $1$, pretzel $2$. Mathematicians also study surfaces sitting in 4D space, or more precisely in the 4-sphere $S^4$, the 4D analogue of a sphere. A **surface knot** is a surface placed in $S^4$ this way, and it is **unknotted** if it can be wiggled into the standard flat model. A 2-sphere in $S^4$ is called a **2-knot**.\n\n**The fingerprint.** To test whether a loop is tangled, look at the space around it and ask how a loop of thread can move through the complement. Two threads are the same if one can be slid into the other without cutting. The collection of thread-loops, with the rule 'follow one, then the other', forms a **group**, called the *fundamental group*; for a knot, the *knot group*. For the unknot it is just the whole numbers $\\mathbb Z$. Compare it to the unit circle's angle: going around once more adds one. For many knots the group is richer, and it is a useful (not perfect) fingerprint. For surfaces in $S^4$ the same idea works: an unknotted one has group $\\mathbb Z$. Conway and Powell proved (2023) that for genus at most 3, the topological version of 'unknotted' is exactly 'group is $\\mathbb Z$'.\n\n**What 'no algorithm decides' means.** An *algorithm* is a procedure a program could follow that always halts with yes or no. A problem is *decidable* if such a procedure exists. Telling the unknot from a knot in 3D is decidable (Haken, using a method of slicing surfaces inside the knot's complement). Think of a sorting program: it always terminates with the right answer. The analogy breaks because here the input is infinitely varied, and undecidability means no single program works for every input, even though particular inputs may be easy.\n\n**The word problem.** A group can be described by a list of generators (basic moves) and relations (rules like $ab=ba$). The *word problem* asks: given a string of generators, does it equal the do-nothing element? In the 1950s Novikov and Boone found finite descriptions where no algorithm can answer this. Connection: if you can build a surface in $S^4$ whose group is one of these, deciding unknottedness would decide the word problem, which is impossible. For dimension $n \\ge 3$ this was done years ago. Gordon's preprint claims such surfaces exist at genus 18 and 19. The question for 2-spheres (genus 0) remains open.\n\n**Status.** The result is a claim from an unrefereed arXiv paper. Experts need to check the group construction and the small undecidable groups it uses."
site:
  published: true
  aiReviewed: true
---

## Surfaces in the 4-sphere

A **surface knot** is a closed, connected surface $F$ embedded in $S^4$, here locally flat (in the topological category, TOP) or piecewise-linear (PL). A **2-knot** is the case $F=S^2$; an $n$-knot is an embedded $S^n\subset S^{n+2}$. A closed orientable surface of genus $g$ is **unknotted** when an isotopy of $S^4$ carries it to a standard Heegaard surface in $S^3\subset S^4$. For non-orientable surfaces the standard models are connected sums of copies of the two unknotted projective planes $P_\pm$, distinguished by their normal Euler number, so a non-orientable surface of genus $h$ has $h+1$ unknotted models.

## The knot group

The basic invariant is the **group** $\pi(F)=\pi_1(S^4\setminus F)$. For an unknotted orientable surface it is $\mathbb Z$. Conway and Powell (Geometry & Topology 2023) showed that an orientable surface in $S^4$ of genus at most 3 is TOP unknotted if and only if $\pi(F)=\mathbb Z$, so for small genus the group decides unknottedness in the topological category. In the PL category the question is subtler: there are 2-spheres and tori in simply connected PL 4-manifolds that are TOP unknotted but not PL unknotted, and for non-orientable surfaces in $S^4$ there are TOP-unknotted, PL-knotted examples. No such orientable example in $S^4$ is known.

## Decidability

The **unknotting problem** for surfaces of genus $g$ asks for an algorithm that, given a surface in $S^4$ described by finite data, decides whether it is unknotted. For classical knots ($n=1$) such an algorithm exists (Haken's normal surface theory). For $n$-knots with $n\ge3$ it does not exist (Nabutovsky and Weinberger 1996; González-Acuña, Gordon and Simon 2010). The reason is group-theoretic: there are finitely presented groups with unsolvable word problem (Novikov, Boone, 1950s), and if some $n$-knot group has an unsolvable word problem then the unknotting problem for $n$-knots is unsolvable. For $n=2$ the question is open.

## What the 2026 preprint adds

Gordon's preprint (arXiv:2610.36331, 26 October 2026, unrefereed) claims that for orientable surfaces of high genus in $S^4$ (at least 18 in TOP, at least 19 in PL) there is no unknotting algorithm, with analogues for non-orientable surfaces and for surfaces in any compact PL 4-manifold. It also claims ribbon surfaces of genus 18 with a group of unsolvable word problem and of genus 40 whose group contains a copy of every recursively presented group. The technique embeds groups with unsolvable word problem into surface groups, using recent small undecidable presentations (nine relators). Conway and Powell's genus-at-most-3 theorem is what allows the TOP threshold to be lower than the PL one.

## Why it matters

Unsolvability in 4-manifold topology is usually proved for recognising manifolds or classical-type invariants. A result about surfaces in the 4-sphere itself shows that the complexity of the group alone already defeats algorithms, and it leaves a gap between the proven range and the case of 2-spheres, where the question is open.

# Plain explanation

Tie a loop of string into a knot, then glue its ends. Is it truly tangled, or can you wiggle it back into a plain circle without cutting? Mathematicians call a plain circle the unknot. For ordinary string in ordinary space, a computer can always answer that question.

Now go up a dimension. Imagine a world with four directions instead of three. There, instead of loops of string, you can have tangled sheets: a sphere, a doughnut skin, a pretzel skin. These are called knotted surfaces. A surface is unknotted if you can wiggle it into the standard, simple shape.

One way to study a knot is to look at everything around it, and ask how loops of thread can move in the empty space outside. That gives a kind of fingerprint. A plain, untangled shape has the simplest possible fingerprint. A tangled one usually has a more complicated one.

A recent paper by Cameron Gordon claims something striking. For sheets with enough holes (at least 18 or 19, depending on the exact meaning of untangled), no computer program can always decide whether the sheet is untangled. The reason is that some fingerprints are so complicated that no program can tell what they are. This is a claim in a preprint that experts have not yet checked.

The paper does not say anything about the simplest case, the plain sphere. That case is still open.

The string analogy breaks in one place: nobody can tie a four-dimensional sheet by hand.
