---
type: problem
slug: fate-x-open-weight-half
title: "Half of FATE-X: an open-weight prover solving 50 of 100 PhD-level algebra statements"
entry: lean-proof-search-benchmarks
status: OPEN
origin: FATE benchmark series, Jiang et al., November 2025
ratings:
  difficulty: 35
  applicationValue: 28
  leverage: 26
workMix:
  theory: 30
  engineering: 40
  compute: 30
  empirical: 0
verification:
  route: REPRODUCTION
sources:
  - title: "Jiang et al.: FATE, a Formal Benchmark Series for Frontier Algebra (arXiv:2511.02872)"
    url: https://arxiv.org/abs/2511.02872
  - title: "frenzymath/FATE: benchmark statements (FATE-M 150, FATE-H 100, FATE-X 100)"
    url: https://github.com/frenzymath/FATE
  - title: "Mistral: Leanstral 1.5 release (vendor-reported results)"
    url: https://mistral.ai/news/leanstral-1-5/
  - title: Leanstral 1.5 weights (Apache-2.0)
    url: https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B
links:
  - to: putnambench-open-pipeline-reproduction
    kind: RELATED
    note: Both test whether an open-weight prover's reported benchmark result survives independent reproduction, on competition versus research-level material.
timeline:
  - date: 2025-11-04
    title: FATE benchmark posted
    body: Best model at 3% pass@64 on FATE-H and 0% on FATE-X (arXiv v1; revised to v4 on 8 March 2026).
    source: https://arxiv.org/abs/2511.02872
  - date: 2026-07-02
    title: Leanstral 1.5 reports 34 on FATE-X
    body: Open-weight model with vendor-reported 87 on FATE-H and 34 on FATE-X; budget not stated.
    source: https://mistral.ai/news/leanstral-1-5/
explainer:
  oneLine: Can a downloadable AI prove half of 100 PhD-level algebra statements in Lean?
  flow:
    - 100 hard algebra statements in Lean
    - Best model in 2025 scored 0
    - A vendor reports 34 in 2026
    - "Target: 50, independently reproduced"
  glossary:
    - term: abstract algebra
      meaning: The study of structures like groups, rings and fields.
      link: https://en.wikipedia.org/wiki/Abstract_algebra
    - term: commutative algebra
      meaning: The study of rings where multiplication order does not matter, central to algebraic geometry.
      link: https://en.wikipedia.org/wiki/Commutative_algebra
    - term: pass@k
      meaning: A problem counts as solved if any of k attempts succeeds.
      link: https://arxiv.org/abs/2107.03374
    - term: open-weight model
      meaning: An AI model whose trained parameters can be downloaded and run by anyone.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: SafeVerify
      meaning: A tool that checks a Lean solution matches the target statement and uses no forbidden axioms.
      link: https://github.com/GasStationManager/SafeVerify
    - term: Mathlib
      meaning: The community library of formalized mathematics for Lean.
      link: /research/lean-mathlib
  readFirst:
    - title: FATE benchmark paper
      url: https://arxiv.org/abs/2511.02872
      why: Why the exam was built and the first results.
    - title: FATE repository
      url: https://github.com/frenzymath/FATE
      why: The statements and how they are organised.
    - title: Leanstral 1.5 (Mistral)
      url: https://mistral.ai/news/leanstral-1-5/
      why: The vendor's reported results.
raw:
  body: "FATE-X is a set of 100 Lean statements in abstract and commutative algebra at PhD qualifying exam level and beyond, with minimal supporting definitions given before each statement. The task: an open-weight model and public harness solve **at least 50 of the 100** statements, with proofs accepted by the Lean kernel against the unmodified statements, at a stated pass@k and compute budget, and the result is independently reproduced."
  stateOfArt: "In the November 2025 paper the best evaluated model reached 0% pass@64 on FATE-X (and 3% on FATE-H) ([arXiv:2511.02872](https://arxiv.org/abs/2511.02872)). In July 2026 Mistral reported Leanstral 1.5, an Apache-2.0 open-weight model with 119B parameters (6B active), at 87 problems on FATE-H and 34 problems on FATE-X, for 34% of FATE-X; the release page gives the figures once as percentages and once as problem counts and does not state the pass@k or budget for FATE (vendor-reported, not independently reproduced) ([Mistral](https://mistral.ai/news/leanstral-1-5/)). Qualitatively, FATE-X statements often need definitions or results outside Mathlib's coverage, so a solver must also build supporting theory."
  resolutionCriteria: "A public report with model weights, harness, pass@k, per-problem token or dollar cost, the FATE commit and the Lean and Mathlib versions, giving at least 50 of 100 kernel-checked solutions on unmodified statements, and an independent reproduction of that count by a second party. Reproducing the vendor's 34 of 100 first is a necessary stepping stone."
  verifySpec: "Benchmark: [FATE-X](https://github.com/frenzymath/FATE), 100 Lean files, each with one `sorry` and minimal supporting definitions, pinned by commit. Metric: number of the 100 files for which the submitted proof is accepted by the kernel against the unmodified statement (Comparator or SafeVerify, which Mistral publishes as a fork, [LeanstralSafeVerify](https://github.com/mistralai/LeanstralSafeVerify)); the threshold is at least 50. Rules to state: pass@k (k at most 8, matching the vendor's PutnamBench setting), model weights public, harness public, and the per-problem token budget. Variance: report the solved set over at least three independent seeds and use the intersection or the median, not the best run. The first milestone is reproducing the vendor's claimed 34, with the Lean and Mathlib versions the benchmark was built for."
site:
  aiReviewed: true
---

# Applications

FATE-X measures a skill the field wants: proving graduate algebra in a library that is missing parts of it. A prover that clears half would be useful for filling Mathlib's algebra gaps and for checking research-level algebra papers, and it shows whether competition-style progress carries over to research mathematics.

# Rating rationale

Difficulty 35: a vendor-reported jump from 0 to 34 of 100 in eight months shows a path, but the remaining statements need algebra that Mathlib lacks to be built first, and the open-weight, fixed-budget, reproduced conditions are strict; it sits just below the Mathlib-integrated FLT formalization (38), which is a far larger engineering effort, and well above the PutnamBench rerun (8). Application value 28: a prover at this level would help fill Mathlib's algebra gaps and check graduate algebra, just below the FLT library (29). Leverage 26: a milestone for the claim that provers handle research-level material, below the kernel-conformance proof (42).

# Work mix rationale

Progress comes from better provers and harnesses, and from building the supporting definitions and lemmas that FATE-X statements need in Lean.

# Plain explanation

Think of a very hard exam in advanced algebra, the kind given to graduate students. Now imagine the questions are written in Lean, a language that lets a computer check every step. FATE-X is such an exam with a hundred questions. Its authors designed it to be harder than the PhD level and even beyond what the shared Lean library already knows, so a solver may have to build missing background first.

When the exam came out in late 2025, the best AI tested scored zero on it. In July 2026, a company released a downloadable model and said it solved 34 of the hundred. That is a huge jump, but the company did not say how many tries or how much computer time it used, and no one else has checked it.

The goal here is to reach half, fifty out of a hundred, with a model anyone can download and software anyone can run, and to have a second group confirm it. A first step is just to reproduce the 34. Success would show that AI is beginning to handle research-level algebra, not only contest problems.

# Student explanation

**The benchmark.** _Abstract algebra_ studies structures such as groups and rings (see the Mathlib hierarchy entry); _commutative algebra_ studies rings like the polynomials, and is the language of algebraic geometry. FATE (Formal Algebra Theorem Evaluation; Jiang et al., 2025) has FATE-M (150), FATE-H (100) and FATE-X (100) statements in abstract and commutative algebra. FATE-X contains problems at PhD qualifying exam level and beyond, from textbooks, exams and research literature, with minimal supporting definitions before the statement. Each file has one `sorry`.

**Results so far.** The paper's best model reached 3% (pass\@64) on FATE-H and 0% on FATE-X,. In July 2026 Mistral reported Leanstral 1.5 (119B parameters, 6B active, Apache-2.0) at 87 on FATE-H and 34 on FATE-X, with the release page giving both percentages and counts and no stated budget for FATE. FATE has 100 problems per set, so 34 would be 34%.

**What the task requires.** An open-weight model with public weights and harness; pass\@k fixed in advance (k at most 8); each solution accepted by the kernel against the unmodified statement and checked with a tool like SafeVerify or Comparator; results from at least three seeds; independent reproduction of the count.

**Why it is hard.** Statements often use constructions Mathlib lacks, so the solver has to formalize auxiliary theory first, in a long chain of dependent lemmas.

**What it shows.** Whether the progress seen on competition problems carries over to graduate-level material that matters for filling Mathlib's algebra gaps.

**Sample of the difficulty.** FATE-X statements ask to prove properties of rings or modules built from several constructions (localizations, completions, tensor products), and the proofs may need structure theory that is not yet in Mathlib. Standard textbook facts are in the library already; FATE-X is meant to sit a long step beyond that, in material such as regular sequences or depth in commutative algebra.

**Interpreting a score.** Because the set has only 100 items, one problem is 1 percentage point and a different random seed can shift a result by several points, which is why the task requires multiple seeds and a fixed budget.
