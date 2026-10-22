---
type: problem
slug: putnambench-open-pipeline-reproduction
title: Independent reproduction of a full PutnamBench solve with open-weight models and a public harness
entry: lean-proof-search-benchmarks
status: IN_PROGRESS
origin: PutnamBench leaderboard, entry added 4 September 2026
ratings:
  difficulty: 8
  applicationValue: 14
  leverage: 10
workMix:
  theory: 2
  engineering: 58
  compute: 40
  empirical: 0
verification:
  route: REPRODUCTION
sources:
  - title: PutnamBench leaderboard
    url: https://trishullab.github.io/PutnamBench/leaderboard.html
  - title: "nearai/putnambench-deepseek: agent harness, README and costs.tsv (NEAR AI entry)"
    url: https://github.com/nearai/putnambench-deepseek
  - title: "PutnamBench repository (README: policy on public proofs, statistics)"
    url: https://github.com/trishullab/PutnamBench
  - title: "Tsoukalas et al.: PutnamBench (arXiv:2407.11214)"
    url: https://arxiv.org/abs/2407.11214
  - title: Seed-Prover 1.5 (arXiv:2512.17260)
    url: https://arxiv.org/abs/2512.17260
timeline:
  - date: 2025-12-27
    title: "Seed-Prover 1.5: 581 of 672"
    body: ByteDance's prover at a budget the leaderboard records as 10 H20-days per problem.
    source: https://arxiv.org/abs/2512.17260
  - date: 2026-01-11
    title: "Aleph Prover: 668 of 672"
    body: Logical Intelligence's closed system reports 668 (self-reported), after 637 on 26 December 2025.
    source: https://trishullab.github.io/PutnamBench/leaderboard.html
  - date: 2026-08-26
    title: First 672/672 entries
    body: Aleph Prover and Humanfia report solving all 672 Lean problems with answers (self-reported).
    source: https://trishullab.github.io/PutnamBench/leaderboard.html
  - date: 2026-09-04
    title: NEAR AI entry with open-weight DeepSeek V4
    body: 672/672 at a mean of USD 0.17 per problem; agent code public, solution bundle shared privately for verification.
    source: https://github.com/nearai/putnambench-deepseek
explainer:
  oneLine: Can someone else rerun the public, cheap AI prover that reports solving all 672 Putnam problems in Lean?
  flow:
    - Public agent code and open models
    - Rerun on a pinned PutnamBench commit
    - Send proofs privately for checking
    - Compare solved count and cost
  glossary:
    - term: benchmark
      meaning: A fixed set of tasks used to compare systems fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: PutnamBench
      meaning: A set of Putnam competition problems written in Lean for testing AI provers.
      link: /research/lean-proof-search-benchmarks
    - term: open-weight model
      meaning: An AI model whose trained parameters can be downloaded and run by anyone.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: agent harness
      meaning: The program that lets an AI call tools in a loop until it finishes a task.
      link: https://en.wikipedia.org/wiki/Intelligent_agent
    - term: reproduction
      meaning: Running someone else's experiment again independently to see if the result holds.
      link: https://en.wikipedia.org/wiki/Reproducibility
    - term: data contamination
      meaning: When test answers leak into the training data of a model.
      link: https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets
  readFirst:
    - title: PutnamBench leaderboard
      url: https://trishullab.github.io/PutnamBench/leaderboard.html
      why: The entries and their labels.
    - title: putnambench-deepseek README
      url: https://github.com/nearai/putnambench-deepseek
      why: How the public pipeline works.
    - title: PutnamBench paper
      url: https://arxiv.org/abs/2407.11214
      why: What the exam measures.
site:
  aiReviewed: true
---

The PutnamBench leaderboard lists an entry (NEAR AI with DeepSeek V4) reporting 672 of 672 Lean problems solved with the answer given, at a mean cost of USD 0.17 per problem (median USD 0.04, maximum USD 11.18). Its agent code is public ([nearai/putnambench-deepseek](https://github.com/nearai/putnambench-deepseek)), but the solution bundle was shared privately with the benchmark maintainers. The open task is an **independent rerun by a party not involved in the original**: run the public harness with the stated open-weight models against a pinned PutnamBench commit, and have the resulting Lean files verified, to confirm that a public harness plus open-weight models solves essentially the whole benchmark at that cost.

# State of the art

**The benchmark is saturated on self-reported results.** The [leaderboard](https://trishullab.github.io/PutnamBench/leaderboard.html) lists 672 of 672 solved with answers given by Aleph Prover (Logical Intelligence, average USD 74 per problem, 26 August 2026), Humanfia (GPT-5.6, average USD 44.50), NEAR AI (DeepSeek V4, mean USD 0.17) and Forall (Astrio, Claude Opus 5, mean USD 3.52 actor-side cost, closed harness), and 672 of 672 in no-answer mode by Midas Prover (average USD 6.17). Earlier steps: Seed-Prover 1.5 reported 581 in December 2025 at a budget recorded as 10 H20-days per problem ([arXiv:2512.17260](https://arxiv.org/abs/2512.17260)); Aleph Prover reported 637 and then 668 (December 2025 and January 2026); Mistral's open-weight Leanstral 1.5 reported 587 at about USD 4 per problem (July 2026), and a Mistral scaffold combining DeepSeek V4 Pro with Leanstral reported 658 (September 2026). The NEAR AI entry is the one with a fully public harness and open-weight models; its repository reports 672 validated, namely all 670 solvable upstream problems plus corrected variants of the two whose upstream formalizations were defective. Its total cost was USD 111.85 at the prices of the time; DeepSeek raised prices on 17 August 2026, and the same tokens would now cost a mean of about USD 0.49 per problem at off-peak rates. **What is missing is independent confirmation.** Several entries are marked as shared privately, the maintainers ask that proofs not be posted publicly (to limit training contamination), and the leaderboard says benchmarked methods were not rerun on problems added after the original release.

# Applications

Indirect. A cheap, reproducible recipe for competition-level formal proving is a baseline for AI-assisted formalization at scale and tells the field that this benchmark can be retired as a frontier test.

# Resolution criteria

An independent team publishes a run log, compute and token cost, the model and harness versions and the pinned PutnamBench, Lean and Mathlib commits, and submits the Lean solutions privately to the PutnamBench maintainers (or a delegated verifier) who confirm the solved count. Success is at least 650 of 672 on statements as they appear at the pinned commit (the two known-defective statements may be handled as the original did, and must be listed), with total token usage within 3 times that of the original run (its `costs.tsv` lists tokens per run; dollar costs move with API prices), in each of two independent full runs.

# Rating rationale

Difficulty 8: engineering and API spend to rerun a published, public harness; the open questions are run-to-run variance and whether the two DeepSeek V4 snapshots stay available, so it sits at the floor with the other reproduction tasks and far below the FATE-X target (35). Application value 14: it settles whether a cheap, open recipe really saturates competition-level formal proving, which sets expectations for open-weight provers. Leverage 10: it informs how benchmark claims are weighed; little else depends on it.

# Work mix rationale

Mostly running a published agent at scale and having the results verified; no new mathematics or method.

# Verification

Benchmark: [PutnamBench](https://github.com/trishullab/PutnamBench), Lean 4 track, 672 problems, 346 of which require inferring an answer (the track with the answer given is the one reproduced). Pipeline: the harness in [nearai/putnambench-deepseek](https://github.com/nearai/putnambench-deepseek) with DeepSeek V4 Flash (0731 snapshot) for the first pass and V4 Pro (0813 snapshot) for the remainder, as the README describes. Metric: number of the 672 problems for which a Lean file is accepted by the kernel against the unmodified statement from the pinned commit; the threshold is at least 650 in each of two independent full runs. Budget: tokens per problem and total API cost reported; total tokens at most 3 times the original run's (the original cost USD 111.85 in total at the prices of the time, a mean of USD 0.17 per problem). Variance: two runs with fresh sessions, since the agent is stochastic and the original needed multiple passes with nudges and a model swap. Verification: solutions are not posted publicly (the maintainers ask that no formal proofs for the benchmark be released in public); they are sent to the maintainers or a delegated verifier, who confirm the count with a kernel check (Comparator or SafeVerify-style) and record the commit used.

# Plain explanation

A benchmark is an exam for AI. PutnamBench takes problems from a hard university maths contest and writes them in Lean, a language where a computer checks every step of a proof. For most of 2025 the best systems solved only a fraction. By autumn 2026 several teams said they solved all 672 Lean problems, and one team said its system used freely downloadable AI models and cost a few cents on average per problem.

Saying it is one thing; checking is another. Most of these results have not been rerun by anyone else, partly because some teams keep their software private and partly because the exam's makers ask that solutions not be posted publicly, to stop future AIs from simply memorising them.

This task asks for an independent rerun of the one entry with public software and downloadable models: run it again, send the proofs privately to the exam's makers, and see if almost the full score comes back at similar cost. It is mostly engineering and cost, not new maths, but it tells us how much to trust the claim.

# Student explanation

**Setup.** A _formal proof_ is one that the Lean proof checker accepts, and a _benchmark_ is a fixed exam for AI systems. PutnamBench (Tsoukalas et al., 2024) has Lean 4 formalizations of Putnam problems 1962 to 2025: 672 in total, of which 346 require finding an answer. There are separate tracks: with the answer given (the "with solution" track) and without.

**The claim.** The leaderboard entry "NEAR AI (w/ DeepSeek V4)" reports 672 of 672 with the answer given, at a mean USD 0.17, median USD 0.04, maximum USD 11.18 per problem. It used DeepSeek V4 Flash and V4 Pro open-weight models. The harness is a plain agent loop with a bash tool; the README describes a first pass on V4 Flash (639 solved), a rerun (22 more), then a final run with V4 Pro and a nudge when the agent stops, with the longest problem taking over three days. Two upstream formalizations were defective and were corrected for that run.

**Why a rerun matters.** Several entries report 672/672 from closed systems at costs from about USD 3.52 to USD 74 per problem. Only this one has public software and open weights, and the solution bundle was shared privately. A second party reproducing the run would turn a leaderboard claim into a replicated result.

**What is needed.** Pin the benchmark commit and Lean/Mathlib versions; run twice with fresh sessions; report cost; send proofs to the maintainers for kernel verification, without posting them publicly; list the two defective problems and how they were handled.

**Risks.** Model snapshots may disappear; agents are stochastic; the benchmark has changed since some early evaluations.

**Cost arithmetic.** The original run cost USD 111.85 in total, a mean of USD 0.17 per problem; at the maximum of USD 11.18, one hard problem cost as much as sixty-five average ones. DeepSeek raised its prices on 17 August 2026, and the same tokens would now cost about USD 331, which is why the rerun's budget is counted in tokens. A rerun therefore needs a budget of a few hundred dollars plus the ability to run long jobs (one problem took more than three days).

**What counts as a reproduction.** Using the public code with the same models and the same benchmark commit, in a fresh environment by a team independent of the original, with all random choices and failures logged. A different harness or different models would be a new result, valuable, but not a reproduction of this one.
