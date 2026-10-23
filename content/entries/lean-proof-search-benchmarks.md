---
type: entry
slug: lean-proof-search-benchmarks
title: Lean proof-search agents and their benchmarks (miniF2F, PutnamBench, ProofNet, FATE)
field: formal-proof
kind: FRONTIER
status: ACTIVE
summary: The agents that search for Lean proofs and the benchmark suites that score them, from competition problems, now saturated, to research-level algebra.
reliedOn: Benchmarks decide which prover claims are believed and what the next target is; their saturation is why the field is moving to open conjectures.
dependsOn:
  - ai-theorem-proving
  - lean-mathlib
references:
  - title: "Zheng, Han, Polu: MiniF2F (arXiv:2109.00110)"
    url: https://arxiv.org/abs/2109.00110
    kind: paper
  - title: "Tsoukalas et al.: PutnamBench (arXiv:2407.11214)"
    url: https://arxiv.org/abs/2407.11214
    kind: paper
  - title: PutnamBench leaderboard
    url: https://trishullab.github.io/PutnamBench/leaderboard.html
    kind: docs
  - title: "Azerbayev et al.: ProofNet (arXiv:2302.12433)"
    url: https://arxiv.org/abs/2302.12433
    kind: paper
  - title: "Jiang et al.: FATE (arXiv:2511.02872)"
    url: https://arxiv.org/abs/2511.02872
    kind: paper
timeline:
  - date: 2021-09-01
    title: miniF2F released
    body: A cross-system benchmark of 488 Olympiad-level formal statements (arXiv, September 2021).
    source: https://arxiv.org/abs/2109.00110
  - date: 2024-07-17
    title: PutnamBench leaderboard opens
    body: The first entries are added, with single-digit solve counts.
    source: https://trishullab.github.io/PutnamBench/leaderboard.html
  - date: 2025-12-27
    title: Seed-Prover 1.5 reports 581 of 672 on PutnamBench
    body: ByteDance's prover, at a budget the leaderboard records as 10 H20-days per problem.
    source: https://arxiv.org/abs/2512.17260
  - date: 2026-01-11
    title: Aleph Prover reports 668 of 672
    body: Logical Intelligence's closed system, after 637 two weeks earlier; self-reported on the leaderboard.
    source: https://trishullab.github.io/PutnamBench/leaderboard.html
  - date: 2026-07-02
    title: Leanstral 1.5 released
    body: Mistral releases an open-weight 119B-parameter (6B active) Lean prover, reporting 100% on miniF2F and 587 of 672 on PutnamBench at pass@8, at about USD 4 per problem (the leaderboard lists 588, from runs on two Lean versions).
    source: https://mistral.ai/news/leanstral-1-5/
  - date: 2026-08-26
    title: First 672/672 PutnamBench entries
    body: The leaderboard lists entries solving all 672 Lean problems (self-reported), at mean costs from USD 0.17 to about USD 74 per problem.
    source: https://trishullab.github.io/PutnamBench/leaderboard.html
explainer:
  oneLine: Test sets that score how many theorems an AI can prove in Lean, and the AIs that compete on them.
  flow:
    - List of Lean theorems with blank proofs
    - AI searches for proofs
    - Kernel accepts or rejects each
    - Score read with budget and openness
  glossary:
    - term: benchmark
      meaning: A fixed set of tasks used to compare systems fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: pass@k
      meaning: A problem counts as solved if any of k attempts succeeds.
      link: https://arxiv.org/abs/2107.03374
    - term: saturated benchmark
      meaning: A test the best systems already solve, so it no longer tells them apart.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: Putnam Competition
      meaning: A hard annual undergraduate mathematics contest in the US and Canada.
      link: https://en.wikipedia.org/wiki/William_Lowell_Putnam_Mathematical_Competition
    - term: open weights
      meaning: A model whose trained parameters anyone can download and run.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: AI theorem proving
      meaning: Using learned models to search for formal proofs that a proof assistant can verify.
      link: /research/ai-theorem-proving
    - term: data contamination
      meaning: When a test's answers leaked into a model's training data.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
  readFirst:
    - title: PutnamBench leaderboard
      url: https://trishullab.github.io/PutnamBench/leaderboard.html
      why: See real submissions with their budgets and openness labels.
    - title: PutnamBench paper
      url: https://arxiv.org/abs/2407.11214
      why: How the benchmark was built.
    - title: miniF2F paper
      url: https://arxiv.org/abs/2109.00110
      why: The original competition-level benchmark.
    - title: FATE paper
      url: https://arxiv.org/abs/2511.02872
      why: A harder benchmark in graduate algebra.
raw:
  body: "## What is being measured\n\nA **proof-search agent** takes a formal statement and must return a Lean proof the kernel accepts. The score is the number of statements solved under stated rules: attempts per problem, compute or dollar cost, whether answers to \"find the value\" problems are given, and whether weights and harness are public. Because the checker is the kernel, a solved problem is solved, but the *rules* decide how much a number means.\n\n## The main suites\n\n- **miniF2F** ([Zheng, Han, Polu, 2021](https://arxiv.org/abs/2109.00110)): 488 formalized problems from AIME, AMC, IMO and coursework, across several proof assistants. Code: [openai/miniF2F](https://github.com/openai/miniF2F). Mistral reports its Leanstral 1.5 model at 100% on the Lean validation and test sets ([Mistral](https://mistral.ai/news/leanstral-1-5/)), so it no longer separates strong systems.\n- **PutnamBench** ([Tsoukalas et al., 2024](https://arxiv.org/abs/2407.11214)): problems from the Putnam Competition 1962 to 2025, 672 of them in Lean 4. 346 of the 672 require the solver to find an answer, not only prove it. The [leaderboard](https://trishullab.github.io/PutnamBench/leaderboard.html) lists self-reported entries with their compute budgets. Aleph Prover (Logical Intelligence) reported 668 in January 2026, and by October 2026 several entries report 672/672 with answers given (for example an open-weight DeepSeek V4 pipeline whose run cost a mean of USD 0.17 per problem at the prices of the time), and one reports 672/672 without answers; the leaderboard itself says new problems were added after some earlier evaluations.\n- **ProofNet** ([Azerbayev et al., 2023](https://arxiv.org/abs/2302.12433)): undergraduate analysis and algebra statements aligned with textbooks, to test both autoformalization and proving.\n- **FATE** ([Jiang et al., 2025](https://arxiv.org/abs/2511.02872)): FATE-H and FATE-X, 100 problems each, in abstract and commutative algebra, with FATE-X designed to exceed PhD-level difficulty and Mathlib's coverage. The paper reported the best model at 3% pass@64 on FATE-H and 0% on FATE-X; Mistral's July 2026 release reports 87 and 34 solved (vendor-reported, not independently checked).\n- **FLTEval** ([Mistral](https://github.com/mistralai/FLTEval)): repository-level tasks built from pull requests to the Fermat's Last Theorem project, closer to real formalization work than isolated problems.\n\n## The agents\n\nSystems differ in design: language-model provers trained with reinforcement learning on Lean feedback (AlphaProof, DeepSeek-Prover-V2, Seed-Prover, Goedel-Prover), agentic scaffolds that call a general model with Lean tools, and whole-project systems. DeepMind reported four of six IMO 2024 problems solved by AlphaProof and AlphaGeometry 2 with proofs checked in Lean ([blog](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/)).\n\n## How to read a result\n\n1. **Budget:** dollars, GPU days or tokens per problem, and the number of attempts.\n2. **Openness:** weights, harness and proofs public or not; the PutnamBench leaderboard tags each entry.\n3. **Statement version:** benchmarks get fixes and additions, so the version used must be stated.\n4. **Verification:** proofs should be re-checked outside the submitter's pipeline, with the statement fixed in advance (Comparator or SafeVerify style).\n\n## Why this entry is load-bearing\n\nCompetition-style suites are close to saturated, so claims now turn on cost, openness and reproducibility, and on harder suites. Open conjectures with formal statements (the Formal Conjectures corpus) are the next test set because they cannot have leaked into training data."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

To tell whether a theorem-proving AI is getting better, you need an exam. A benchmark is such an exam: a fixed list of theorems written in Lean, each with the proof left blank. The AI must fill in a proof the Lean checker accepts. Because the checker is strict, there is no partial credit and no arguing: each problem is either solved or not.

The exams have been getting easier for the best systems. One exam of school competition problems is now solved completely by several systems. Another, built from the Putnam university competition, has 672 Lean problems, and by late 2026 several teams reported solving all of them. A newer exam in advanced algebra is much harder, and the best reported result is still well short of full marks.

A score only means something with its rules: how much money or computer time was spent per problem, whether the system can be used by others, and whether the questions were changed after it was run.

# Student explanation

**Setting.** A benchmark item is a formal statement ending in `sorry`. A prover returns a proof; the Lean kernel accepts or rejects it. Metrics are the number solved (_pass\@k_: solved if any of $k$ attempts succeeds) and the cost.

**Suites.** _miniF2F_ (488 problems from AIME, AMC, IMO and coursework) has been reported saturated at 100% for Lean by Mistral's Leanstral 1.5. _PutnamBench_ has 672 Lean problems from the Putnam competition (1962 to 2025); 346 require finding an answer before proving. The leaderboard records the compute budget and openness of each entry. _ProofNet_ contains undergraduate textbook statements. _FATE_ (FATE-H and FATE-X, 100 problems each) covers abstract and commutative algebra; the original paper reported the best model at 3% on FATE-H and 0% on FATE-X (pass\@64), and a vendor reported 87 and 34 solved in July 2026. _FLTEval_ poses tasks drawn from the Fermat's Last Theorem project.

**Systems.** Reinforcement-learned provers (AlphaProof, DeepSeek-Prover-V2, Seed-Prover, Goedel-Prover), agent scaffolds around general models, and combinations of these. Seed-Prover 1.5 reported 581 of 672 on PutnamBench at 10 H20-days per problem (December 2025); Aleph Prover reported 668 in January 2026, and by autumn 2026 several systems report all 672.

**Reading a number.** Ask: budget per problem; number of attempts; open weights and harness or not; statement version (benchmarks get corrected); independent verification of the proofs.

**Why saturation matters.** When a suite is solved, it stops separating systems, and attention moves to open conjectures stated in Lean, which cannot be in training data.

**Common pitfalls.** (1) _Answer leakage_: for "find the value" problems, giving the answer in the statement makes the task easier than a human faces, so leaderboards track a with-answer and a no-answer track. (2) _Statement errors_: formalizations occasionally have defects (two PutnamBench statements were corrected in one reproduction), and a proof of a broken statement proves nothing. (3) _Verification_: a proof file should be rechecked with the statement fixed, so a solver cannot swap in an easier theorem. (4) _Budget disclosure_: a result at USD 4 per problem and a result at USD 1,000 per problem are different achievements even with the same score.
