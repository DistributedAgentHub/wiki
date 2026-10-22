---
type: entry
slug: large-formalization-projects
title: "Large formalization projects: blueprints, Liquid Tensor, PFR, equational theories, FLT"
field: formal-proof
kind: FRONTIER
status: ACTIVE
summary: The practice of formalizing a whole research result in Lean with a public blueprint and many contributors, and what the finished projects showed.
reliedOn: These projects produced both the Mathlib library and the working methods (blueprints, dependency graphs, crowd and agent collaboration) that any new formalization effort now copies.
dependsOn:
  - lean-mathlib
  - mathlib-algebraic-hierarchy
references:
  - title: Liquid Tensor Experiment completed (Lean community blog, 15 July 2022)
    url: https://leanprover-community.github.io/blog/posts/lte-final/
    kind: article
  - title: "Gowers, Green, Manners, Tao: On a conjecture of Marton (arXiv:2311.05762)"
    url: https://arxiv.org/abs/2311.05762
    kind: paper
  - title: "Tao: Formalizing the proof of PFR in Lean4 using Blueprint"
    url: https://terrytao.wordpress.com/2023/11/18/formalizing-the-proof-of-pfr-in-lean4-using-blueprint-a-short-tour/
    kind: article
  - title: "Bolan et al.: The Equational Theories Project (arXiv:2512.07087)"
    url: https://arxiv.org/abs/2512.07087
    kind: paper
  - title: Imperial College FLT project blueprint
    url: https://imperialcollegelondon.github.io/FLT/blueprint/
    kind: docs
timeline:
  - date: 2022-07-14
    title: Liquid Tensor Experiment completed
    body: The Lean formalization of the main theorem on liquid vector spaces is finished, about a year and a half after Scholze's challenge.
    source: https://leanprover-community.github.io/blog/posts/lte-final/
  - date: 2024-09-25
    title: Equational Theories Project launched
    body: Terence Tao opens a public project to settle all implications among 4,694 magma laws.
    source: https://github.com/teorth/equational_theories
  - date: 2024-10-01
    title: Imperial College FLT project starts
    body: EPSRC-funded effort to formalize a modern proof of Fermat's Last Theorem in Lean (month approximate).
    source: https://imperialcollegelondon.github.io/FLT/blueprint/
  - date: 2025-12-08
    title: Equational Theories Project paper
    body: The completion paper reports that all 22,028,942 implications between the 4,694 laws are determined, with proofs checked in Lean.
    source: https://arxiv.org/abs/2512.07087
explainer:
  oneLine: Community efforts to turn a whole research proof into computer-checked code, step by step.
  flow:
    - Cut the proof into numbered pieces
    - Link each piece to Lean code
    - Many people fill in leaves
    - Merge results into the shared library
  glossary:
    - term: blueprint
      meaning: A plan for a formalization that splits a proof into small linked statements.
      link: https://github.com/PatrickMassot/leanblueprint
    - term: dependency graph
      meaning: A diagram showing which statements need which others.
      link: https://en.wikipedia.org/wiki/Dependency_graph
    - term: Fermat's Last Theorem
      meaning: The claim that no three positive whole numbers satisfy a to the power n plus b to the power n equals c to the power n once n is above 2.
      link: https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem
    - term: magma
      meaning: A set with one operation that takes two elements and returns one, with no other rules.
      link: https://en.wikipedia.org/wiki/Magma_(algebra)
    - term: condensed mathematics
      meaning: A new framework of Clausen and Scholze for combining algebra and topology.
      link: https://en.wikipedia.org/wiki/Condensed_mathematics
    - term: Marton's conjecture
      meaning: A statement that sets with small sums are close to sets with a clean algebraic structure.
      link: https://en.wikipedia.org/wiki/Freiman%27s_theorem
    - term: upstreaming
      meaning: Getting new work accepted into the main shared library.
      link: /research/lean-mathlib
  readFirst:
    - title: Liquid Tensor Experiment completed
      url: https://leanprover-community.github.io/blog/posts/lte-final/
      why: The completion announcement of the first major research formalization.
    - title: "Tao: Formalizing the proof of PFR in Lean4 using Blueprint"
      url: https://terrytao.wordpress.com/2023/11/18/formalizing-the-proof-of-pfr-in-lean4-using-blueprint-a-short-tour/
      why: A tour of how a blueprint project runs.
    - title: The Equational Theories Project
      url: https://teorth.github.io/equational_theories/
      why: A live view of a large crowd-and-machine project.
    - title: Imperial College FLT blueprint
      url: https://imperialcollegelondon.github.io/FLT/blueprint/
      why: The plan for Fermat's Last Theorem in Lean.
site:
  published: true
  aiReviewed: true
---

## The method

A large formalization is organized around a **blueprint**: a human-readable outline of the proof broken into small numbered statements, each linked to its Lean declaration and to the statements it depends on. A dependency graph shows which pieces are proved, stated, or not yet touched, so strangers can pick up a leaf without reading the whole proof. This is the same shape as DARC's knowledge tree, and the tooling ([leanblueprint](https://github.com/PatrickMassot/leanblueprint)) comes from this community.

## Landmarks

- **Liquid Tensor Experiment.** In December 2020 Peter Scholze challenged the community to check the main theorem on liquid vector spaces from his work with Dustin Clausen, a result he was not fully sure of. The project, led by Johan Commelin with Adam Topaz, finished on 14 July 2022, per the [community announcement](https://leanprover-community.github.io/blog/posts/lte-final/). It showed that a hard, brand-new research result could be formalized in a general-purpose library, and it drove Mathlib's homological algebra. Code: [lean-liquid](https://github.com/leanprover-community/lean-liquid).
- **Polynomial Freiman-Ruzsa (PFR).** Right after Gowers, Green, Manners and Tao posted their proof of Marton's conjecture ([arXiv:2311.05762](https://arxiv.org/abs/2311.05762)), Tao ran a public Lean 4 formalization with a blueprint ([overview](https://terrytao.wordpress.com/2023/11/18/formalizing-the-proof-of-pfr-in-lean4-using-blueprint-a-short-tour/)). The repository reports that the main goal and a second stage of consequences are complete, with extension to bounded-torsion groups and an exponent improvement also formalized. Code: [teorth/pfr](https://github.com/teorth/pfr).
- **Equational Theories Project.** Launched on 25 September 2024 to determine all implications among 4,694 equational laws of magmas, i.e. 22,028,942 candidate implications. Humans and automated provers split the work, and every claimed implication or refutation was checked in Lean. The completion paper is [arXiv:2512.07087](https://arxiv.org/abs/2512.07087), with 34 authors. Code: [teorth/equational_theories](https://github.com/teorth/equational_theories).
- **Carleson, sphere packing, strong prime number theorem.** Formalizations of a generalized Carleson theorem ([fpvandoorn/carleson](https://github.com/fpvandoorn/carleson)), of Viazovska's dimension-8 sphere packing ([Sphere-Packing-Lean](https://github.com/thefundamentaltheor3m/Sphere-Packing-Lean)) and of prime-number-theorem results ([PrimeNumberTheoremAnd](https://github.com/AlexKontorovich/PrimeNumberTheoremAnd)) follow the same pattern.
- **Fermat's Last Theorem.** The Imperial College project ([FLT](https://github.com/ImperialCollegeLondon/FLT)), led by Kevin Buzzard and funded by the EPSRC until September 2029, aims at a Mathlib-integrated formalization of a modern proof. A separate machine-produced certificate (September 2026) shows the theorem can be checked, but does not replace that goal. See the open problem on the FLT formalization.

## Lessons the projects share

1. **Most effort is infrastructure,** not the headline argument: definitions that other mathematicians will reuse, fitted to Mathlib's hierarchy.
2. **Blueprints let work scale** across contributors, and increasingly across AI agents that need exactly this kind of task graph.
3. **Statement fidelity is reviewed by people.** The checker proves the Lean statement, so mathematicians check that it says the right thing.
4. **Upstreaming is the bottleneck.** Results that stay outside Mathlib rot with each Lean release; getting them merged takes reviewer time that is scarcer than proof effort.

# Plain explanation

Checking a long modern proof by computer is too big for one person. The community solved this by writing a plan first: an outline that cuts the proof into small numbered statements, each linked to the pieces it needs. People then pick up one small piece at a time, like volunteers filling in a huge jigsaw puzzle, and a chart shows which pieces are done.

Several famous proofs have been finished this way. A hard theorem about new kinds of spaces by Peter Scholze and Dustin Clausen was checked in about a year and a half. A proof of a conjecture about sets with small sums was checked soon after it was written. A project led by Terence Tao worked out how 22 million possible implications between rules about an operation relate to each other, with computers and people sharing the work. Fermat's Last Theorem is a larger effort still.

Most of the work is not the headline proof but the background pieces, and getting the new pieces merged into the shared library is slow because reviewers are scarce.

# Student explanation

**Blueprints.** A blueprint is a document whose statements (definitions, lemmas, theorems) each get a label and a list of dependencies; a tool (`leanblueprint`) renders it as a web page and a dependency graph and links each statement to its Lean declaration. Colours show which are stated, proved, or missing. This makes the project parallel: a newcomer can take a leaf.

**Liquid Tensor Experiment.** Scholze posed the challenge in December 2020 about a main theorem of his work with Clausen on liquid vector spaces. Led by Johan Commelin and Adam Topaz, it finished on 14 July 2022. It pushed Mathlib's homological algebra.

**Polynomial Freiman–Ruzsa.** Gowers, Green, Manners and Tao proved Marton's conjecture in November 2023; Tao organised a public Lean 4 formalization right away. The repository reports the main goal complete, and a second stage on consequences and an exponent improvement also complete.

**Equational Theories Project.** Started 25 September 2024 to decide all $4694 \times 4693 = 22{,}028{,}942$ implications among the simplest equational laws of magmas (sets with one binary operation). Human proofs, SAT-style tools and automated provers cooperated, and every implication or counterexample was checked in Lean. The paper is arXiv:2512.07087.

**Others.** Carleson's theorem, Viazovska's sphere packing and prime number theorem results; and the Imperial College project for a Mathlib-integrated proof of Fermat's Last Theorem, funded until September 2029.

**What the projects teach.** Infrastructure dominates the effort; blueprints let strangers and AI agents collaborate; reviewers must check that statements say the right thing; and merging into Mathlib, not proving, is often the bottleneck.
