---
type: problem
slug: flt-modern-proof-mathlib-formalization
title: Mathlib-integrated formalization of the modern FLT proof with reusable Galois-representation infrastructure
entry: elliptic-curves
status: IN_PROGRESS
origin: Imperial College FLT project (Buzzard), 2024
ratings:
  difficulty: 38
  applicationValue: 29
  leverage: 36
workMix:
  theory: 10
  engineering: 80
  compute: 10
  empirical: 0
verification:
  route: LEAN
sources:
  - title: Imperial College FLT project blueprint
    url: https://imperialcollegelondon.github.io/FLT/blueprint/
  - title: "Buzzard (Xena): Fermat's Last Theorem, how it's going"
    url: https://xenaproject.wordpress.com/2024/12/11/fermats-last-theorem-how-its-going/
  - title: "Buzzard (Xena): FLT, Anthropic has beaten me to it"
    url: https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
  - title: "Lean: FLT use case"
    url: https://lean-lang.org/use-cases/flt/
timeline:
  - date: 2024-10-01
    title: Project starts
    body: EPSRC-funded Imperial FLT project begins (month approximate).
    source: https://imperialcollegelondon.github.io/FLT/blueprint/
  - date: 2024-12-11
    title: Buzzard progress report
    body: Describes the reduction to automorphic input and what remains.
    source: https://xenaproject.wordpress.com/2024/12/11/fermats-last-theorem-how-its-going/
  - date: 2026-09-04
    title: 13M-line certificate appears
    body: Does not replace the integrated library; gives a reference proof to port from.
    source: https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
explainer:
  oneLine: Teach a computer to check the whole modern proof of Fermat's Last Theorem, as reusable pieces of a shared library.
  flow:
    - Wiles proved FLT using deep number theory
    - Computer checking needs all that theory in Lean
    - Build modular forms and Galois tools in Mathlib
    - "Result: trusted proof and reusable library"
  glossary:
    - term: Fermat's Last Theorem
      meaning: Two positive whole numbers raised to the same power greater than 2 never add up to a third number raised to that power.
      link: https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem
    - term: Lean and Mathlib
      meaning: A proof assistant and its shared library of already-checked mathematics.
      link: /research/lean-mathlib
    - term: formalization
      meaning: Rewriting a mathematical statement and proof in a precise form a computer can check.
      link: https://en.wikipedia.org/wiki/Formal_proof
    - term: modular form
      meaning: A highly symmetric complex function; elliptic curves over the rationals correspond to special ones.
      link: https://en.wikipedia.org/wiki/Modular_form
    - term: Galois representation
      meaning: A way of describing the symmetries of number systems using matrices.
      link: https://en.wikipedia.org/wiki/Galois_module
    - term: Hecke algebra
      meaning: A collection of operators acting on modular forms that records arithmetic information.
      link: https://en.wikipedia.org/wiki/Hecke_algebra
    - term: modularity lifting
      meaning: A method showing that if a curve looks modular modulo a prime, then it is actually modular.
      link: https://en.wikipedia.org/wiki/Modularity_theorem
    - term: Taylor-Wiles patching
      meaning: A technique for proving that two rings are equal by combining information from many auxiliary primes.
      link: https://en.wikipedia.org/wiki/Wiles%27s_proof_of_Fermat%27s_Last_Theorem
    - term: elliptic curve
      meaning: The set of solutions of a smooth cubic equation, whose points can be added together.
      link: /research/elliptic-curves
    - term: blueprint
      meaning: A public outline that splits a formalization project into numbered pieces so many people can work on it.
      link: https://leanprover-community.github.io/
    - term: Frey curve
      meaning: The elliptic curve built from a hypothetical solution of a^p + b^p = c^p; it would be too strange to be modular.
      link: https://en.wikipedia.org/wiki/Frey_curve
  readFirst:
    - title: Fermat's Last Theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem
      why: The theorem and its history.
    - title: Wiles's proof of Fermat's Last Theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Wiles%27s_proof_of_Fermat%27s_Last_Theorem
      why: A summary of how the proof goes.
    - title: Lean community home page
      url: https://leanprover-community.github.io/
      why: Where Mathlib and the formalization projects live.
    - title: Lean 4 and Mathlib (research entry)
      url: /research/lean-mathlib
      why: What the formalization is built on.
site:
  aiReviewed: true
---

Formalize the modern proof of Fermat's Last Theorem (modularity lifting via the Taylor–Wiles–Kisin patching method, as in the Imperial blueprint) as a Lean 4 library merged into Mathlib. The deliverable is reusable definitions and theorems for modular forms of level N and weight 2, Hecke algebras, p-adic Galois representations and deformation rings, Hida/Taylor–Wiles patching, and automorphic forms on definite quaternion algebras. Every blueprint node is proved without sorry, each definition is compatible with Mathlib's existing API, and the library builds in time and size comparable to a large Mathlib subtree.

# State of the art

**In progress.** The Imperial project started in October 2024 with an EPSRC grant and a public blueprint. Buzzard's December 2024 report, two months in, describes formalizing a modern R = T (modularity lifting) argument building on Diamond, Fujiwara, Kisin, Taylor and Scholze, with ingredients such as crystalline cohomology and divided powers still missing from Mathlib, and stresses that the aim is the general theorems rather than FLT alone. On 4 September 2026 Anthropic's agentic formalization produced a 13-million-line certificate of FLT following the Darmon–Diamond–Taylor route; it compiles about twenty times slower than Mathlib and is not integrated with it. Buzzard checked its final statement with Comparator and judged that it tells us essentially nothing new mathematically. The integrated formalization of the modern proof, including reusable automorphic infrastructure, remains to be done and is not covered by the certificate.

# Applications

Reusable formal infrastructure for the Langlands program (Galois representations, Hecke algebras, deformation rings) so that further arithmetic theorems can be formalized without rebuilding it. Also a test bed for scaling Mathlib development.

# Resolution criteria

The Imperial blueprint is fully formalized with no sorry, merged into Mathlib or an agreed library compatible with it, the theorem FermatLastTheorem derived from the integrated library, and the library compiles within a stated budget (for example at most 3 times Mathlib's build time).

# Rating rationale

Large but known engineering, now helped by agentic tools: 38, above low-precision training (13) and below the research-grade formal-verification problems around 48, because integration with Mathlib's design and review is harder than producing a certificate. Application value 29, just below RH (30), reflects reusable Langlands-programme infrastructure for formalization. Leverage 36: the library would gate further formalized arithmetic geometry but nothing mathematical depends on it.

# Work mix rationale

Almost all effort is formalization engineering: API design, refactoring, upstreaming and review.

# Verification

Goal: the theorem FermatLastTheorem (Mathlib defines `FermatLastTheoremFor` and has the cases n = 3 and n = 4) derived from the Imperial College FLT project at github.com/ImperialCollegeLondon/FLT, merged into Mathlib or a compatible library. Done means no sorry, the library builds within the stated budget (for example 3 times Mathlib's build time), and CI is green on a pinned Lean and Mathlib version.

# Plain explanation

Fermat's Last Theorem says that two positive whole numbers raised to the same power, bigger than two, never add up to a third number raised to that power. Pierre de Fermat claimed a proof in the 1600s; the real proof came only in 1994, by Andrew Wiles, with a key step completed together with Richard Taylor, and it uses some of the most advanced mathematics ever written. Only a handful of experts can follow all of it.

This project asks a bold question: can the whole proof be written in a form that a computer checks, line by line, with no gaps? The language is Lean, and the destination is Mathlib, the shared library of checked mathematics.

Why do it, when the theorem is already accepted? There are two reasons. The first is trust: a machine-checked proof removes the worry that a rare mistake slipped past human readers. The second, and more important, is the by-products. To check this proof, the project has to build the formal theory of modular forms, elliptic curves and Galois representations. These are tools used all over number theory, so the library becomes much more useful for anyone who comes next.

The work is led by Kevin Buzzard at Imperial College London, started in 2024 and will take years.

A machine-generated formalization has also been announced, but it is huge, slow to check and not part of Mathlib, so the goal of a clean, integrated library is still open.

# Student explanation

**Goal.** Formalize the modern proof of Fermat's Last Theorem (FLT) as a Lean 4 library merged into Mathlib. The proof strategy is: a hypothetical solution to $a^p+b^p=c^p$ gives an elliptic curve (the _Frey curve_) with strange properties; the **modularity lifting** theorems of Wiles and Taylor–Wiles show such a curve would be modular; and Ribet's level-lowering theorem shows no such modular curve exists. The formalization project (led by Kevin Buzzard at Imperial College London, with an EPSRC grant and a public _blueprint_) is aimed at the heart of this: the $R=T$ theorem, which identifies a deformation ring $R$ of Galois representations with a Hecke algebra $T$ acting on modular forms.

**What has to be built.** The deliverable is reusable definitions and theorems for:

- modular forms of level $N$ and weight 2,
- Hecke algebras (operators that act on modular forms and encode arithmetic),
- $p$-adic Galois representations and their deformation rings,
- the **Taylor–Wiles–Kisin patching method** (a technique to prove $R=T$ by combining many auxiliary primes),
- automorphic forms on definite quaternion algebras.

The criteria for success are strict. Every node of the blueprint is proved with no `sorry` (Lean's placeholder for an unproved step), each definition fits Mathlib's existing conventions, and the library builds in a time and size comparable to a large Mathlib area.

**Why reusable infrastructure matters.** Buzzard stresses that the aim is the general theorems, not just FLT: for example, a formal modularity lifting theorem would help with other results in the Langlands programme. A report in December 2024, two months in, described building a modern $R=T$ argument based on work of Diamond, Fujiwara, Kisin, Taylor and Scholze, noting that some ingredients, such as crystalline cohomology and divided powers, were still missing from Mathlib.

**The machine certificate.** On 4 September 2026 Anthropic announced an agentic formalization of FLT, a certificate of about 13 million lines following the Darmon–Diamond–Taylor route. It compiles about twenty times slower than Mathlib and is not integrated into it. Buzzard checked its final statement and judged that it tells us essentially nothing new mathematically. It does not achieve the stated deliverable of a maintainable, merged library with reusable infrastructure.

**Status.** In progress. The real difficulty is not the logic but the sheer amount of background: the project has to formalize the infrastructure of arithmetic geometry that humans take for granted.
