---
type: problem
slug: antihydra-never-halts
title: Prove that the 6-state Busy Beaver cryptid Antihydra never halts
entry: busy-beaver-bbchallenge
status: OPEN
origin: bbchallenge, Antihydra (2024)
ratings:
  difficulty: 84
  applicationValue: 1.5
  leverage: 25
workMix:
  theory: 92
  engineering: 3
  compute: 5
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "BusyBeaverWiki: Antihydra"
    url: https://wiki.bbchallenge.org/wiki/Antihydra
  - title: Ligocki, BB(6) is Hard (Antihydra)
    url: https://www.sligocki.com/2024/07/06/bb-6-2-is-hard.html
  - title: "bbchallenge: Determination of the fifth Busy Beaver value"
    url: https://arxiv.org/abs/2509.12337
  - title: "rwst/Antihydra-Basics: Lean 4 model of Antihydra and the halting reduction (unreviewed)"
    url: https://github.com/rwst/Antihydra-Basics
timeline:
  - date: 2024-07-06
    title: Antihydra analysed
    body: Ligocki described why BB(6) is hard and the role of Antihydra.
    source: https://www.sligocki.com/2024/07/06/bb-6-2-is-hard.html
explainer:
  oneLine: Prove that a specific six-rule Turing machine, Antihydra, runs for ever, as everyone expects but nobody can show.
  flow:
    - Six rules start a counting game
    - Odd and even tallies wander randomly
    - Halting needs a rare excursion
    - Proof needs equidistribution results
  glossary:
    - term: Turing machine
      meaning: A model of a computer with a tape, head and rule table.
      link: https://en.wikipedia.org/wiki/Turing_machine
    - term: Busy Beaver
      meaning: The longest finite run of a halting machine with a given number of rules.
      link: /research/busy-beaver-bbchallenge
    - term: Collatz conjecture
      meaning: An unsolved problem about halving even numbers and tripling odd ones.
      link: https://en.wikipedia.org/wiki/Collatz_conjecture
    - term: Mahler's Z-numbers
      meaning: Numbers whose repeated multiplication by 3/2 keeps their fractional part in a limited range; an open problem.
      link: https://en.wikipedia.org/wiki/Mahler%27s_3/2_problem
    - term: Lean
      meaning: A proof assistant in which proofs are checked by a small trusted kernel.
      link: /research/lean-mathlib
    - term: floor function
      meaning: ⌊x⌋ is the largest whole number not exceeding x, so ⌊3·5/2⌋ = 7.
      link: https://en.wikipedia.org/wiki/Floor_and_ceiling_functions
    - term: random walk
      meaning: A quantity that moves up or down by random steps; used as a model of Antihydra's tally.
      link: https://en.wikipedia.org/wiki/Random_walk
    - term: parity
      meaning: Whether a whole number is even or odd.
      link: https://en.wikipedia.org/wiki/Parity_(mathematics)
    - term: Busy Beaver number
      meaning: The largest number of steps a halting n-state Turing machine can take from a blank tape.
      link: https://en.wikipedia.org/wiki/Busy_beaver
  readFirst:
    - title: Antihydra (BusyBeaverWiki)
      url: https://wiki.bbchallenge.org/wiki/Antihydra
      why: The machine, its code and the known facts.
    - title: BB(6) is Hard (Ligocki)
      url: https://www.sligocki.com/2024/07/06/bb-6-2-is-hard.html
      why: Why this machine blocks BB(6).
    - title: Busy Beaver Hunters Reach Numbers That Overwhelm Ordinary Math (Quanta)
      url: https://www.quantamagazine.org/busy-beaver-hunters-reach-numbers-that-overwhelm-ordinary-math-20250822/
      why: Context on the six-state frontier.
site:
  aiReviewed: true
---

Antihydra is the 2-symbol Turing machine `1RB1RA_0LC1LE_1LD1LC_1LA0LB_1LF1RE_---0RA` in bbchallenge notation (6 states A to F; transitions listed state by state for read symbols 0 and 1; `---` is the halt transition). Starting from a blank tape it reaches configuration A(0,4) after 11 steps and then repeats a Collatz-like iteration. **Question:** does it ever reach the halt transition? Equivalently (bbchallenge wiki): iterate $(a,b)\mapsto(\lfloor 3a/2\rfloor+2,\ b+2)$ when $a$ is even and $(a,b)\mapsto(\lfloor 3a/2\rfloor+2,\ b-1)$ when $a$ is odd, starting from $(8,2)$; the machine halts if and only if an odd $a$ is reached while $b=0$, i.e. once odd values have outnumbered twice the even values. The expected answer is that it never halts.

# State of the art

The bbchallenge wiki gives only a probabilistic argument: the trajectory resembles a random walk with steps +2 or −1 of equal probability, which strongly suggests that Antihydra runs forever, but no proof exists. The wiki links the question to Mahler's Z-number problem, which needs equidistribution of {ξ(3/2)^n} on (0,1), described as a long-standing open question. Ligocki (2024) argues that any determination of BB(6) must decide Antihydra. The five-state case was resolved and formalised in Coq (arXiv:2509.12337), but that proof has no counterpart for 6-state cryptids. On the formal side, the reduction from the machine to the iteration above has been written in Lean 4 (rwst/Antihydra-Basics, lemma `antihydra_halts_iff`, generated mostly by language models and not independently reviewed); the open part is purely the number-theoretic statement.

# Applications

No practical application. Solving it would remove a main obstacle to BB(6) and would be a rare example of a formal proof for a Collatz-like dynamical system.

# Resolution criteria

A machine-checked proof (Lean 4, with Mathlib's Turing machine definitions or a self-contained model validated against the bbchallenge simulator) that Antihydra never halts, or a halting run proved by an explicit step count. The Lean source must compile with the three standard axioms only.

# Rating rationale

Difficulty 84: halting is a Collatz-type statement about the parity of an iterated ⌊3n/2⌋ + 2 map, tied to Mahler's 3/2 problem, where no proof technique exists; placed above Hadwiger–Nelson (79) and Lehmer's totient problem (74), below Goldbach (92). Application value 1.5: none. Leverage 25: it gates any determination of BB(6) and would be a first proof for a Collatz-like dynamical system.

# Work mix rationale

A proof would need new mathematics about the equidistribution of fractional parts of (3/2)^n type sequences; computation can only run the machine further.

# Verification

Route: Lean 4 + Mathlib, compiled with `lake build` and `#print axioms` showing only `propext`, `Classical.choice` and `Quot.sound`. The machine model must be cross-checked against the bbchallenge simulator on the first $10^6$ steps. An existing (unreviewed, not compiled by DARC) Lean development, rwst/Antihydra-Basics (Lean v4.29.0-rc6), defines the transition table, a zipper-tape `run`, and proves `antihydra_halts_iff : (∃ k, (run initConfig k).state = none) ↔ ∃ i, (Aiter i (8, 2)).1 % 2 = 1 ∧ (Aiter i (8, 2)).1 / 2 ≥ 1 ∧ (Aiter i (8, 2)).2 = 0`. **Target statement (sketch against that model):**

```lean
theorem antihydra_never_halts : ¬ ∃ k, (Antihydra.run Antihydra.initConfig k).state = none
```

A proof via the reduction must also be checked to be sorry-free end to end. Mathlib has general Turing machine models (`Mathlib/Computability/TuringMachine/`) but nothing specific to this machine; the BB(5) proof (ccz181078/Coq-BB5) is in Coq.

# Plain explanation

Antihydra is a tiny computer program with six rules. It starts on a blank tape and does what looks like a simple counting game with numbers: multiply by one and a half and add two, again and again, while keeping a tally of odd and even results. If the odd tally ever gets too big compared to the even tally, the machine stops. Otherwise it goes on for ever.

When people simulate it, the tallies behave like a random walk. Everything suggests the machine never stops. But a simulation can never show for ever, and no mathematician knows how to prove it.

The puzzle matters for a surprising reason: until Antihydra is settled, the Busy Beaver number for six rules cannot be known. And it is a close cousin of famous unsolved problems about numbers such as the Collatz conjecture.

A proof would be best written in a proof assistant, so that a computer can check every step. The caveat: it has no practical application, yet it may need a new idea in number theory.

# Student explanation

**The machine.** Antihydra is a Turing machine with six states and two symbols: a tape of 0s and 1s, a read/write head, and a rule table with one "halt" entry. Its table, `1RB1RA_0LC1LE_1LD1LC_1LA0LB_1LF1RE_---0RA`, can be simulated in a few lines of Python. Started on a blank tape, does it ever reach the halt rule?

**What it is really computing.** People on the bbchallenge project found that, after a short start-up, the machine's tape encodes two numbers $a$ and $b$ and each long pass of the head performs one step of a simple map:

$a \mapsto \lfloor 3a/2 \rfloor + 2,\qquad b \mapsto b + 2 \text{ if } a \text{ was even},\quad b \mapsto b - 1 \text{ if } a \text{ was odd},$

starting from $(a, b) = (8, 2)$. The machine halts exactly when an odd $a$ is reached while $b = 0$. In words: multiply by one and a half, round down, add two; keep a tally that gains 2 for every even value and loses 1 for every odd value; stop if the tally ever runs out. You can iterate this in Python with integers of millions of digits and watch $b$ grow.

**Why everyone expects no halting.** If the values of $a$ were even or odd like fair coin flips, the tally would be a **random walk**, a quantity that moves up or down at random, with steps of +2 or −1 equally likely. That walk drifts upward by 0.5 per step on average, and the chance it ever returns to zero after reaching large values is astronomically small. Simulations agree.

**Why no one can prove it.** "Behaves like coin flips" is not a proof. The parity of $\lfloor 3a/2 \rfloor + 2$ depends on the binary digits of $a$ in a way that mixes like the famous Collatz problem ($n \mapsto n/2$ or $3n+1$), which is unsolved. Closely related questions about the fractional parts of $(3/2)^n$, Mahler's 3/2 problem, have been open for decades. No current technique controls such sequences well enough to rule out one rare long excursion.

**Why it matters.** The Busy Beaver number BB(6), the longest run of any halting 6-state machine, cannot be determined until Antihydra is settled.

**How a claim is checked.** A proof should be written in the Lean proof assistant and compiled with no gaps. An unreviewed Lean development (rwst/Antihydra-Basics) already models the machine and states the reduction above; a complete proof would add the theorem that the halting condition is never met, and checkers would confirm the model against the bbchallenge simulator.
