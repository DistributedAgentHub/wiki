---
type: entry
slug: formal-conjectures-corpus
title: "Formal Conjectures: open problems stated in Lean"
field: formal-proof
kind: LIBRARY
status: EMERGING
summary: A public Lean 4 repository of formalized statements of open conjectures, built on Mathlib and used as a benchmark for automated provers.
reliedOn: It fixes the exact formal statement of open problems, so a claimed proof or counterexample can be judged against a statement that was reviewed in advance.
dependsOn:
  - lean-mathlib
  - lean-proof-search-benchmarks
references:
  - title: google-deepmind/formal-conjectures (repository and README)
    url: https://github.com/google-deepmind/formal-conjectures
    kind: code
  - title: "Firsching et al.: Formal Conjectures (arXiv:2605.13171, preprint)"
    url: https://arxiv.org/abs/2605.13171
    kind: paper
  - title: Formal Conjectures documentation
    url: https://google-deepmind.github.io/formal-conjectures/
    kind: docs
  - title: Erdős problems database
    url: https://erdosproblems.com/
    kind: docs
timeline:
  - date: 2026-05-13
    title: Formal Conjectures paper posted
    body: Describes an evolving benchmark of 2,615 Lean statements, 1,029 of them open conjectures (preprint).
    source: https://arxiv.org/abs/2605.13171
explainer:
  oneLine: A public list of famous open problems written precisely in Lean, with the proofs left blank.
  flow:
    - Pick an open problem
    - State it exactly in Lean
    - Leave the proof blank
    - Anyone fills it; the kernel judges
  glossary:
    - term: conjecture
      meaning: A statement believed true but not yet proved.
      link: https://en.wikipedia.org/wiki/Conjecture
    - term: misformalization
      meaning: A formal statement that does not say what the author intended.
      link: https://arxiv.org/abs/2605.13171
    - term: Goldbach's conjecture
      meaning: Every even number above 2 is a sum of two primes.
      link: https://en.wikipedia.org/wiki/Goldbach%27s_conjecture
    - term: AMS subject classification
      meaning: A standard numbering of fields of mathematics.
      link: https://en.wikipedia.org/wiki/Mathematics_Subject_Classification
    - term: Comparator
      meaning: A tool that checks a solution file proves exactly the statement in a challenge file.
      link: https://github.com/leanprover/comparator
    - term: Erdős problems
      meaning: A large collection of open problems posed by Paul Erdős.
      link: https://erdosproblems.com/
    - term: Mathlib
      meaning: The library of formalized mathematics that the statements are built on.
      link: /research/lean-mathlib
  readFirst:
    - title: Formal Conjectures repository
      url: https://github.com/google-deepmind/formal-conjectures
      why: Browse real statements and the contribution rules.
    - title: Formal Conjectures paper (preprint)
      url: https://arxiv.org/abs/2605.13171
      why: The goals, the counts and how errors are audited.
    - title: Erdős problems
      url: https://erdosproblems.com/
      why: The human-readable source of many entries.
site:
  published: true
  aiReviewed: true
---

## What it is

[Formal Conjectures](https://github.com/google-deepmind/formal-conjectures) (Google DeepMind with outside contributors) is a Lean 4 project depending on Mathlib in which each file states a conjecture or a known result and leaves the proof as `sorry`. Statements carry attributes, for example `@[category research open]`, `@[category research solved]` and an AMS subject code. The repository tracks monthly tagged Mathlib releases rather than Mathlib's main branch, and tags immutable benchmark versions so that fixes to misformalizations never change an existing version. Its goals, from the README, are to be a benchmark for automated provers and autoformalization tools, to sharpen the meaning of conjectures by forcing a precise statement, and to show Mathlib which definitions are missing.

## Scale

The accompanying paper (Firsching et al., [arXiv:2605.13171](https://arxiv.org/abs/2605.13171), a May 2026 preprint) reports 2,615 formalized statements, of which 1,029 are open conjectures and 836 are solved problems used to test proof formalization. The source folders include the Erdős problems collection, Green's 100 open problems, OEIS conjectures, Wikipedia lists of unsolved problems, MathOverflow questions, the Millennium problems and individual papers. As a measure of how the repository changes, it records solved status when a conjecture falls: its file on Sidorenko's conjecture, for example, is now marked solved (disproved), with a link to a Lean proof from OpenAI's September 2026 release.

## Why it matters

- **Zero-contamination test set.** No proof exists to leak into training data.
- **Fidelity is reviewed, not assumed.** The README warns that formalization can subtly misstate a conjecture. Human review plus AI attempts to prove or refute statements are used to find misformalizations, and the paper describes AI-generated proofs and disproofs as an auditing mechanism.
- **A shared language.** A mathematician can state a conjecture once in a form every prover can read, with Mathlib doing the heavy lifting on definitions such as `Nat.Prime`, `Nat.totient` or `SimpleGraph.CliqueFree`.

## How to use it for a claim

1. Take the statement from the repository at a pinned commit.
2. Produce a Lean file that proves exactly that declaration, with no changes to the statement and no extra axioms.
3. Check it with a statement-fixing judge such as [Comparator](https://github.com/leanprover/comparator) and review `#print axioms`.
4. Have the statement itself re-read by a person: a correct proof of a mistaken formalization proves nothing about the conjecture.

## Caveats

The repository is a living document and its status labels move; the label on the day of a claim is what counts. Some formalizations are stated for a convenient variant, and that is noted in the docstring. The corpus tilts towards problems that are easy to state in Mathlib's current vocabulary, so areas such as algebraic geometry and PDE are thinner.

# Plain explanation

Many open problems in mathematics are stated in loose, everyday words. Formal Conjectures is a collection where each open problem is written in the strict code of the Lean proof assistant instead, with the proof left empty. Everyone can see exactly which statement is meant.

This helps in three ways. A mathematician who thinks they have a proof can write it in Lean, and the computer decides whether it works on that exact statement. AI systems can try the problems with no worry that the answers were in their training data. And writing the statement forces the question to be precise: if people disagree on a detail, the code has to settle it.

There is one catch. A statement can be coded slightly wrong, so a correct proof of the code might not settle the real question. That is why people review each statement, and why AI attempts to prove or refute statements are used as a check.

# Student explanation

**Format.** Each file states a theorem with the proof `sorry` and attributes such as `@[category research open]` or `research solved` plus an AMS subject code. Examples: Goldbach's conjecture as `∀ n : ℕ, 2 < n → Even n → ∃ p q, Prime p ∧ Prime q ∧ n = p + q`; Legendre's conjecture as the existence of a prime between $n^2$ and $(n+1)^2$.

**Size.** The accompanying May 2026 paper (a preprint) reports 2,615 statements: 1,029 open conjectures and 836 solved problems for proof formalization. Source folders include Erdős problems, Green's 100 open problems, OEIS conjectures, Wikipedia lists, MathOverflow and the Millennium problems.

**Using it for a claim.** (1) Pin a commit. (2) Write a Lean file with the same declaration and a proof. (3) Check with Comparator, which compares the solution's statement with the challenge's and whitelists axioms. (4) Have a person re-read the statement. When a conjecture is settled, the label changes: the Sidorenko's conjecture file is now marked solved (disproved), linking a Lean proof from OpenAI's September 2026 release.

**Weak points.** _Misformalization_ (for example natural-number subtraction truncating at zero, or an overlooked edge case); statements are sometimes given for a variant, which the docstring should say; coverage favours areas where Mathlib already has the definitions; the repository follows monthly Mathlib releases, so statements change with the library.

**Role in the tree.** Because each problem has an exact, machine-readable statement and a checking route (Lean), these problems are a natural list of verifiable targets for people and agents.

**Reading a file.** A typical file begins with a docstring naming the source (a paper, a Wikipedia page or an Erdős problem number), then definitions that the statement needs, then one or more theorems. Variants of the same problem appear side by side: the open question, the proved special cases (labelled solved), and sanity checks marked as tests. If a conjecture is later disproved, the corpus keeps the statement and changes its label, and links the Lean proof of the negation.
