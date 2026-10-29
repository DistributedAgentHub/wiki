---
type: problem
slug: exponential-time-hypothesis
title: "Exponential Time Hypothesis: does 3-SAT need 2^(δn) time for some δ > 0?"
entry: fine-grained-complexity
status: OPEN
origin: Russell Impagliazzo and Ramamohan Paturi (1999; JCSS 2001); sparsification with Francis Zane
ratings:
  difficulty: 90
  applicationValue: 15
  leverage: 80
verification:
  route: REVIEW
sources:
  - title: "Impagliazzo, Paturi, Zane: Which Problems Have Strongly Exponential Complexity? (JCSS 2001)"
    url: https://khoury.northeastern.edu/~viola/classes/papers/ImpagliazzoPaturiZane01Which.pdf
  - title: "OpenAI: Building scientific understanding with academic communities (26 October 2026)"
    url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: "OpenAI: The Exponential Time Hypothesis is False (manuscript dated 25 October 2026, unrefereed, openai/math at 7ef5c0cc5c)"
    url: https://github.com/openai/math/blob/7ef5c0cc5c/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf
  - title: OpenAI Lean formalization scope note (openai/math at 7ef5c0cc5c)
    url: https://github.com/openai/math/blob/7ef5c0cc5c/lean/docs/378.md
  - title: "Anthropic: A 2^o(n) Time Algorithm for 3-SAT (anthropics/formal-math at 16a5ce41, unrefereed)"
    url: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
  - title: Anthropic formal-math CI run verifying the eth directory
    url: https://github.com/anthropics/formal-math/actions/runs/40442388505
links:
  - to: p-vs-np
    kind: IMPLIES
    note: ETH implies that 3-SAT has no polynomial-time algorithm, so a proof of ETH would give P ≠ NP.
timeline:
  - date: 2001-01-01
    title: ETH and the sparsification lemma
    body: Impagliazzo and Paturi formulated ETH (conference version 1999), and Impagliazzo, Paturi and Zane proved the sparsification lemma and the equivalence of $s_k>0$ for all $k\ge3$ in JCSS 2001 (month not given here).
    source: https://khoury.northeastern.edu/~viola/classes/papers/ImpagliazzoPaturiZane01Which.pdf
  - date: 2026-10-26
    title: OpenAI announces a proof that ETH is false
    body: "OpenAI said its system proved ETH false, with a Lean formalization, and that Impagliazzo, Paturi and Williams will lead verification. The manuscript claims $2^{O_k(n\\log\\log n/\\sqrt{\\log n})}$ time for exact #k-SAT in polynomial space. Unrefereed."
    source: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - date: 2026-10-27
    title: "Anthropic publishes a deterministic 2^o(n) algorithm for #3-SAT"
    body: "Anthropic released a paper by Claude and a Lean 4 formalization stating `ETHIsFalse`, with a counting algorithm for #3-SAT in time $2^{O(n\\log\\log n/\\sqrt{\\log n})}$; its repository CI passed. It is an independent route to the same conclusion, and is also unrefereed."
    source: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
  - date: 2026-10-28
    title: Expositions of the OpenAI proof by O'Donnell and Kintali; Fortnow says verification is still to come
    body: "Ryan O'Donnell posted an exposition (dated 28 October, produced with LLMs) that reduces #3SAT to a sparse permanent and claims deterministic exact counting in $2^{O(n(\\log\\log n)^2/\\sqrt{\\log n})}$, one $\\log\\log n$ factor worse than OpenAI's; it also reports Subercaseaux's consequence for $\\mathrm{NTIME}(T)$. Shiva Kintali posted a simplified exposition (dated 26 October) claiming a deterministic 3-SAT algorithm in $C(n+m+1)^c\\,2^{\\varepsilon n}$ for every fixed $\\varepsilon>0$. Lance Fortnow wrote that he has not verified the proof himself and that OpenAI will partner with Impagliazzo, Paturi and Williams to verify it. These are unrefereed expositions, not a verification."
    source: https://www.cs.cmu.edu/~odonnell/some_eth_false_exposition.pdf
explainer:
  oneLine: The belief that solving logic puzzles with three-switch rules takes time that grows exponentially with the number of switches.
  flow:
    - Trying all settings takes 2ⁿ steps
    - "Decades of attempts: still exponential"
    - "ETH: no 2^o(n) method exists"
    - Many problems inherit this barrier
    - "Oct 2026: two AI claims to refute it"
  glossary:
    - term: 3-SAT
      meaning: Logic puzzles where every rule mentions exactly three switches and asks that at least one of them be right.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: Strong Exponential Time Hypothesis (SETH)
      meaning: The stronger belief that even for puzzles with longer rules, no method beats trying nearly all settings by a fixed factor per switch.
      link: /research/fine-grained-complexity
    - term: P versus NP
      meaning: The question of whether every problem with quickly checkable answers can also be solved quickly.
      link: /research/computational-complexity
    - term: exponential time
      meaning: Running time that multiplies by a constant for each extra input item, like 2ⁿ.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: 2^o(n) (subexponential time)
      meaning: Running time 2 to a power that grows more slowly than n, so slower growth than any 2^(δn).
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: sparsification lemma
      meaning: A result showing that formulas with many clauses can be reduced to formulas with only about n clauses without losing the hardness.
      link: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
    - term: "#3-SAT (counting version)"
      meaning: The harder task of counting how many settings satisfy a 3-SAT formula, not just whether one exists.
      link: https://en.wikipedia.org/wiki/Sharp-SAT
    - term: Lean
      meaning: "A proof assistant: software that checks every step of a mathematical proof, written in a precise formal language."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    - term: formalization
      meaning: Rewriting a proof in a formal language so that a computer can check it; it is only as good as its statement of the theorem.
      link: https://en.wikipedia.org/wiki/Formal_verification
    - term: Turing machine
      meaning: A simple mathematical model of a computer, used to define precisely what running time means.
      link: https://en.wikipedia.org/wiki/Turing_machine
  readFirst:
    - title: Exponential time hypothesis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
      why: States ETH, its variants and its consequences.
    - title: Boolean satisfiability problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
      why: The puzzle at the centre of the hypothesis.
    - title: "OpenAI: Building scientific understanding with academic communities"
      url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
      why: OpenAI's announcement of its claim and the verification plan (unrefereed).
    - title: "Anthropic: A 2^o(n) Time Algorithm for 3-SAT (README)"
      url: https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth
      why: Anthropic's claim, including its own caveats about what is and is not checked.
raw:
  body: "For $k\\ge 3$ let $s_k=\\inf\\{c:\\ k\\text{-SAT on } n \\text{ variables can be solved in time } O(2^{cn})\\}$, where algorithms may be randomised. The *Exponential Time Hypothesis* (ETH) of Impagliazzo and Paturi states that $s_3>0$: 3-SAT has no $2^{o(n)}$-time algorithm. Equivalently, there is $\\delta>0$ such that 3-SAT cannot be solved in time $O(2^{\\delta n})$. By the sparsification lemma of Impagliazzo, Paturi and Zane, ETH is equivalent to $s_k>0$ for every $k\\ge3$, and it holds if and only if it holds for formulas with only $O(n)$ clauses. The question is whether ETH is true. ETH is implied by the Strong Exponential Time Hypothesis and implies $\\mathsf{P}\\ne\\mathsf{NP}$."
  student: "**Statement.** A *3-SAT* formula on $n$ variables is an AND of clauses, each an OR of three variables or their negations; the question is whether some true/false assignment makes every clause true. Trying all assignments takes about $2^n$ steps. Let $s_3$ be the infimum of numbers $c$ such that 3-SAT can be solved in time $O(2^{cn})$ (randomised algorithms allowed). ETH says $s_3>0$, i.e. there is $\\delta>0$ so that no algorithm runs in $O(2^{\\delta n})$. Equivalently: there is no $2^{o(n)}$-time algorithm, where $o(n)$ means an exponent that grows slower than $n$.\n\n**Sparsification.** Impagliazzo, Paturi and Zane proved that a formula with many clauses can be split into a few formulas with only $O(n)$ clauses, so ETH is equivalent for all clause widths $k\\ge3$ and for sparse formulas. That is what lets ETH be used for other problems, where the input size is the number of vertices or edges.\n\n**Place in the hierarchy.** The Strong Exponential Time Hypothesis (SETH) is the stronger statement that the base 2 cannot be improved as $k$ grows. SETH implies ETH, and ETH implies $\\mathsf{P}\\ne\\mathsf{NP}$ (a polynomial-time SAT algorithm would be $2^{o(n)}$). So a proof of ETH would settle P vs NP, and a refutation of ETH would also refute SETH.\n\n**Why it is used.** Reductions from 3-SAT to a graph problem with only linear blow-up in size turn a $2^{o(n)}$ algorithm for that problem into one for 3-SAT. So ETH implies, for example, that Vertex Cover and Independent Set on $n$-vertex graphs have no $2^{o(n)}$ algorithm and that $k$-Clique has no $n^{o(k)}$ algorithm. Hundreds of such tight bounds in parameterized complexity and exact algorithms are conditional on ETH.\n\n**Evidence and status.** The best known 3-SAT algorithms (PPSZ, local search) run in about $1.3^n$, still exponential. As of 27 October 2026 two unrefereed claims say ETH is false. OpenAI (26 October) claims an algorithm for exact counting of solutions of $k$-CNF formulas in time $(n+m)^{O_k(1)}\\,2^{O_k(n\\log\\log n/\\sqrt{\\log n})}$ and polynomial space, with a Lean formalization (of a slightly weaker bound); a group led by Impagliazzo, Paturi and Williams is to verify it. Anthropic (27 October) claims a deterministic algorithm for counting solutions of 3-CNF formulas in $2^{O(n\\log\\log n/\\sqrt{\\log n})}$ with a Lean 4 formalization that passed its repository CI. The exponent $n\\log\\log n/\\sqrt{\\log n}$ grows more slowly than $n$, so both are $2^{o(n)}$; the gain is asymptotic only, and Anthropic's README says its result says nothing about solving formulas in practice.\n\n**What would count as progress.** Expert acceptance of either proof, checked by a rebuild of the Lean files and an audit that the Lean statement really says \"ETH is false\". Neither has happened yet. Independent expositions of the OpenAI argument have appeared (Ryan O'Donnell, 28 October; Shiva Kintali, 26 October), with O'Donnell describing exact deterministic counting of 3-SAT solutions in $2^{O(n(\\log\\log n)^2/\\sqrt{\\log n})}$ time via a sparse permanent; they are unrefereed, and per Fortnow's blog (28 October) verification by Impagliazzo, Paturi and Williams is still to come. The claim remains under review."
site:
  aiReviewed: true
---

# State of the art

Before October 2026 the best known 3-SAT algorithms were exponential: about $O(1.307^n)$ for randomised refinements of PPSZ, and $O(1.32793^n)$ deterministically (Liu, 2018), as surveyed in OpenAI's manuscript. No subexponential algorithm was known. ETH is the standard assumption behind tight exponential lower bounds in parameterized complexity (for example for $k$-Clique and Vertex Cover on sparse graphs), fine-grained complexity and the study of exact algorithms; hundreds of results are stated conditionally on it.

**Unrefereed claims that ETH is false.** On 26 October 2026 OpenAI announced that its system proved that ETH is false and had the proof formalised in Lean (disproof found on 16 October, Lean on 17 October). The manuscript (dated 25 October 2026) gives an algorithm for exact counting, #k-SAT, for every fixed width $k$, in time $(n+m)^{O_k(1)}\,2^{O_k(n\log\log n/\sqrt{\log n})}$ and polynomial space (with $m\le Dn$ clauses the time is $2^{O(n/\sqrt{\log n})}$). The Lean scope file states a slightly weaker bound, $(L+1)^{O_k(1)}\,2^{O_k(n(\log\log n)^2/\sqrt{\log n})}$, which is still $2^{o(n)}$. A group led by Russell Impagliazzo and Ramamohan Paturi (UC San Diego) and Ryan Williams (MIT) is to verify and shepherd the result, and OpenAI said it will fund a conference. On 27 October 2026 Anthropic released, in its formal-math repository, "A 2^o(n) Time Algorithm for 3-SAT" by Claude, a deterministic algorithm for #3-SAT running in time $2^{O(n\log\log n/\sqrt{\log n})}$, found by an internal research model, with a Lean 4 formalization written by AI models that states `ETHIsFalse`. Its README says the result is purely asymptotic and says nothing about solving formulas in practice, and that no machine checks that the Lean statement says what the paper says; the repository CI (Comparator plus a second kernel, nanoda) succeeded. DARC has not rebuilt either formalization. Neither claim is refereed, and ETH stays open here until experts accept one. Because SETH implies ETH, a refutation of ETH would also refute SETH.

# Applications

ETH-based lower bounds tell algorithm designers where not to look: that no $2^{o(n)}$ or $n^{o(k)}$ algorithm should be expected for a long list of parameterized and exact problems. If ETH is false, those conditional lower bounds lose their basis. Even then, the claimed running times are asymptotic, and Anthropic's README says its result says nothing about solving formulas in practice; the value is conceptual.

# Resolution criteria

A refutation accepted by experts: a $2^{o(n)}$-time algorithm for 3-SAT (or for $k$-SAT for some $k\ge3$), with a proof checked by specialists and, ideally, a formalization whose statement has been audited against the definition of ETH. A proof of ETH would also resolve it but would imply $\mathsf{P}\ne\mathsf{NP}$ and is far beyond current techniques. The status stays OPEN until experts accept or reject the October 2026 claims.

# Rating rationale

Difficulty 90: proving ETH implies P ≠ NP, and for 25 years no subexponential 3-SAT algorithm was found; the unrefereed October 2026 claims of a refutation are not counted until experts accept them, so the rating sits just above SETH (88) because ETH is the weaker statement, which a refutation would settle for both. Application value 15: it guides algorithm designers and the claimed algorithms are asymptotic only, below SETH (21), which also yields fine-grained quadratic bounds. Leverage 80: tight lower bounds throughout parameterized and exact algorithms and fine-grained complexity are conditional on it, comparable to SETH (81).

# Verification

Route: expert review of two independent manuscripts, each with a Lean formalization. A reviewer should check that each algorithm counts solutions correctly and that the running time is $2^{o(n)}$, then audit that the Lean statement (`ETHIsFalse` in Anthropic's MainResults.lean; the scope note for OpenAI) matches the definition of ETH, including the machine model, the meaning of $n$ and exact counting. Rebuild each Lean repository from the pinned commit, print the axioms of the main theorem and check for `sorry`. Compare the two independent proofs for shared ideas and gaps.

# Plain explanation

Take a logic puzzle with n on/off switches and a list of rules, each rule involving only three switches. The question is whether some setting of the switches obeys every rule. Trying every setting takes about 2 to the power n tries, and each extra switch doubles the work. Clever solvers do better than that, but they still need time that grows exponentially.

The Exponential Time Hypothesis, ETH, is the belief that this cannot be fixed: no method will ever be dramatically faster, meaning one whose running time grows much more slowly than an exponential. Nobody has proved it. If it were true, it would also prove the famous P versus NP question, so a proof is far out of reach.

Why do people care? Researchers have shown that many other hard problems would suddenly become much easier if ETH were false. So ETH works as a guide: it tells people which searches for faster methods are probably a waste of time. It is like a map marked "no road here", drawn from a long history of failed explorations.

In October 2026, OpenAI and Anthropic each announced that their AI systems had found a faster method and proved ETH false, and each released a version of the proof written for the Lean proof checker. Anthropic's passed its own automated check; nobody outside OpenAI has reported building OpenAI's. Experts have not yet confirmed either claim. Two researchers have since written their own explanations of the OpenAI argument, but these are not peer-reviewed, and the checking by experts is still going on. The new methods are about extremely large puzzles only, and Anthropic says its result says nothing about solving puzzles in practice.
