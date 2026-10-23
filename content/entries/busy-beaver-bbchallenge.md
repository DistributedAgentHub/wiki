---
type: entry
slug: busy-beaver-bbchallenge
title: Busy Beaver values and the bbchallenge project
field: complexity
kind: THEORY
status: ACTIVE
summary: BB(5) = 47,176,870 was proved in 2024 and checked in Coq; the six-state case contains Collatz-like machines such as Antihydra whose halting status is open.
reliedOn: "Busy Beaver numbers quantify how far undecidability reaches in small programs: each new value needs a machine-checked decision of every machine of that size, and the open cases link to Collatz-type problems in number theory."
dependsOn:
  - computability-diagonalization
  - computational-complexity
references:
  - title: "bbchallenge: determination of the fifth Busy Beaver value (arXiv:2509.12337)"
    url: https://arxiv.org/abs/2509.12337
    kind: paper
  - title: bbchallenge.org (project page)
    url: https://bbchallenge.org/
    kind: docs
  - title: "BusyBeaverWiki: Antihydra"
    url: https://wiki.bbchallenge.org/wiki/Antihydra
    kind: docs
  - title: Ligocki, BB(6) is Hard (Antihydra), 2024
    url: https://www.sligocki.com/2024/07/06/bb-6-2-is-hard.html
    kind: article
  - title: "Coq-BB5: formal proof that BB(5) = 47,176,870"
    url: https://github.com/ccz181078/Coq-BB5
    kind: code
timeline:
  - date: 1990-01-01
    title: Champion BB(5) machine
    body: Marxen and Buntrock found the machine that halts after 47,176,870 steps; year only.
    source: https://bbchallenge.org/
  - date: 2024-07-02
    title: BB(5) = 47,176,870 announced
    body: The bbchallenge collaboration announced that all 5-state machines are decided and the value is 47,176,870.
    source: https://bbchallenge.org/
  - date: 2025-09-15
    title: BB(5) paper
    body: The paper Determination of the fifth Busy Beaver value appeared on arXiv, with a Coq proof; revised on 23 March 2026.
    source: https://arxiv.org/abs/2509.12337
explainer:
  oneLine: Tiny computer programs that run astonishingly long before stopping, and the project that pinned down the five-state champion.
  flow:
    - Count steps of tiny halting programs
    - Sort 181 million machines by deciders
    - Coq proof fixes BB(5) = 47,176,870
    - Six-state cryptids like Antihydra stay open
  glossary:
    - term: Turing machine
      meaning: A model of a computer made of a tape, a head and a small rule table.
      link: https://en.wikipedia.org/wiki/Turing_machine
    - term: Busy Beaver number
      meaning: The largest number of steps a halting machine with n rules can take.
      link: https://en.wikipedia.org/wiki/Busy_beaver
    - term: halting
      meaning: A machine halts if it eventually stops instead of running for ever.
      link: https://en.wikipedia.org/wiki/Turing_machine
    - term: decider
      meaning: A small program that proves that every machine of some family never halts.
      link: https://bbchallenge.org/
    - term: cryptid
      meaning: A machine whose behaviour looks like an open math problem, so its halting status is unknown.
      link: https://wiki.bbchallenge.org/wiki/Antihydra
    - term: Collatz conjecture
      meaning: "An unsolved problem about a simple number rule: halve even numbers, triple odd ones and add one."
      link: https://en.wikipedia.org/wiki/Collatz_conjecture
    - term: Coq
      meaning: "A proof assistant: software in which a proof is written so a computer can check every step."
      link: https://en.wikipedia.org/wiki/Rocq
    - term: halting problem
      meaning: Turing's 1936 result that no program can decide, for every program, whether it eventually stops.
      link: https://en.wikipedia.org/wiki/Halting_problem
    - term: proof assistant
      meaning: Software such as Coq or Lean that checks every step of a mathematical proof mechanically.
      link: https://en.wikipedia.org/wiki/Proof_assistant
    - term: random walk
      meaning: A process that moves up or down by random steps; used here as a model of Antihydra's tally.
      link: https://en.wikipedia.org/wiki/Random_walk
    - term: Lean
      meaning: A proof assistant and programming language with the Mathlib library of formalised mathematics.
      link: /research/lean-mathlib
  readFirst:
    - title: Amateur Mathematicians Find Fifth Busy Beaver (Quanta)
      url: https://www.quantamagazine.org/amateur-mathematicians-find-fifth-busy-beaver-turing-machine-20240702/
      why: A story of how BB(5) was solved.
    - title: Busy Beaver Hunters Reach Numbers That Overwhelm Ordinary Math (Quanta)
      url: https://www.quantamagazine.org/busy-beaver-hunters-reach-numbers-that-overwhelm-ordinary-math-20250822/
      why: On BB(6) and its giant lower bounds.
    - title: Busy beaver (Wikipedia)
      url: https://en.wikipedia.org/wiki/Busy_beaver
      why: Definitions and known values.
raw:
  body: "## The function\n\nA Turing machine with *n* states and two symbols starts on a blank tape. The Busy Beaver function BB(n) is the largest number of steps that any such machine takes before halting (the value S(n) in the paper). It grows faster than any computable function, so only a few values can ever be found. BB(1) to BB(4) were known from the 1960s and 1980s; BB(5) was settled in 2024.\n\n## BB(5) = 47,176,870\n\nThe **bbchallenge** collaboration enumerated 5-state machines and decided, for each of 181,385,789 candidates in the paper's account, whether it halts. Most machines were handled by *deciders*, short programs that prove non-halting for broad families (cyclers, translated cyclers, counters, and so on); a small set of difficult machines needed individual proofs. On 2 July 2024 the collaboration announced that BB(5) = 47,176,870, the value of a champion machine found by Marxen and Buntrock in 1990. The proof was formalised in **Coq** (repository `ccz181078/Coq-BB5`), the first formally verified new Busy Beaver value, and written up as arXiv:2509.12337 (v1 September 2025, revised March 2026). The bbchallenge site lists no remaining undecided 5-state machines.\n\n## BB(6) and cryptids\n\nFor six states, a champion halting machine of enormous size is known: the project page records BB(6) > 2↑↑↑5 (a halter by mxdys, 2025). Deciding BB(6) is a different order of difficulty because it contains **cryptids**, machines whose behaviour resembles open problems in number theory. **Antihydra** is the best known: a 6-state, 2-symbol machine (code `1RB1RA_0LC1LE_1LD1LC_1LA0LB_1LF1RE_---0RA`) whose configurations follow a Collatz-like iteration. Halting is equivalent to a statement about repeated application of f(n) = ⌊3n/2⌋ + 2, namely that eventually more odd values than twice the number of even values occur; the wiki describes the trajectory as resembling a random walk (steps +2 or −1 with equal probability) and states that this strongly suggests the machine runs forever, but no proof exists. The wiki ties the question to Mahler's Z-number problem and the equidistribution of {ξ(3/2)^n}. Any complete proof of BB(6) must settle Antihydra, as discussed by Ligocki (2024).\n\n## Why it is machine-checkable\n\nA decider output is a proof object. For BB(5) the checker was Coq itself; the 6-state frontier is a natural target for Lean and Mathlib, which defines Turing machine models in the `Mathlib/Computability/TuringMachine/` directory. An unreviewed, LLM-written Lean 4 development (rwst/Antihydra-Basics) already models the Antihydra machine and states the reduction of its halting to the Collatz-like iteration. Open items include small classes such as BB(2,5) and BB(3,3) (machines with different state and symbol counts) listed as challenges by the project.\n\n## Limits\n\nBB values say little about practical computing; their value is as a precise, formal benchmark of how hard it is to decide halting for tiny programs."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A Turing machine is the simplest model of a computer: a tape, a head and a short table of rules. Some machines run for ever, and some stop. The Busy Beaver number for n rules is the longest run of any machine that does stop. These numbers grow faster than anything a computer can compute, so only a few can ever be known.

For five rules the answer is 47,176,870 steps. It was proved in 2024 by an online community called bbchallenge. They sorted more than 181 million machines into those that stop and those that run for ever, using small programs that prove a machine never stops. The whole argument was written in a proof assistant called Coq, so a computer has checked every step.

For six rules, there are machines that behave like unsolved puzzles from number theory. The best known one is called Antihydra. It follows a simple Collatz-like recipe on numbers, and all evidence suggests it never stops, but nobody can prove it. Until that is settled, the six-rule number cannot be known.

The caveat: these numbers have no practical use. They are a precise measuring stick for how hard it is to predict programs.

# Student explanation

**The model.** A **Turing machine** is the simplest model of a computer: an infinite tape of cells holding 0 or 1, a head that reads one cell, and a small table of rules. Each rule says: in state A reading 0, write 1, move right, switch to state B. One rule entry means _halt_. You can simulate one in a dozen lines of Python with a dictionary for the tape. Starting from a blank tape, some machines halt and some run for ever.

**The Busy Beaver function.** BB(n) is the largest number of steps taken by any n-state, 2-symbol machine that eventually halts. It grows faster than any function a program can compute; if it did not, you could decide whether any program halts by running it for BB(n) steps, which Turing proved impossible in 1936. So only a few values can ever be found, and each needs a proof about every machine of that size.

**BB(5) = 47,176,870.** The bbchallenge collaboration enumerated the 5-state machines (181,385,789 candidates in its paper's count) and decided each one. Most were handled by **deciders**: short programs that prove non-halting for whole families, such as machines that repeat a configuration (cyclers) or repeat it shifted along the tape. A small set of hard machines needed individual arguments. The champion machine, found by Marxen and Buntrock in 1990, halts after 47,176,870 steps. The whole proof was written in the Coq proof assistant, so a computer checked every step; it was announced in July 2024 and written up on arXiv in 2025.

**Six states and cryptids.** For six states the known halting machines run for an unimaginable number of steps, and some non-halting candidates behave like open problems in number theory. **Antihydra** is the best known: its behaviour reduces to repeatedly applying $n \mapsto \lfloor 3n/2 \rfloor + 2$ (multiply by 1.5, round down, add 2) while keeping a running tally that goes up by 2 on even values and down by 1 on odd values; it halts only if the tally ever runs out. The tally behaves like a random walk drifting upward, so halting looks extremely unlikely, but no one can prove it never happens. Any determination of BB(6) must settle it.

**Why it is machine-checkable.** Every claim here is a statement a proof assistant can check: Coq for BB(5), and Lean, whose Mathlib library defines Turing machine models, for the 6-state frontier. An unreviewed Lean development already models Antihydra and its reduction.

**Limits.** These values have no practical use; they are a precise measure of how hard it is to predict tiny programs.
