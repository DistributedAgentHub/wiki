---
type: problem
slug: k-clique-hypothesis
title: "The k-Clique Hypothesis: does finding a k-clique in a graph need n^(ωk/3) time?"
entry: fine-grained-complexity
status: OPEN
origin: Nešetřil and Poljak (1985) gave the algorithm; Woeginger (2004) asked whether it can be beaten; Abboud, Backurs and Vassilevska Williams (FOCS 2015) used the hypothesis for fine-grained lower bounds; an unrefereed preprint of November 2026 (Vassilevska Williams and Zamir, arXiv:2611.09764) claims to refute it
ratings:
  difficulty: 25
  applicationValue: 15
  leverage: 60
verification:
  route: REVIEW
sources:
  - title: Vassilevska Williams, Zamir, The k-Clique hypothesis is dead, for good (arXiv:2611.09764, 6 November 2026, preprint)
    url: https://arxiv.org/abs/2611.09764
  - title: Abboud, Backurs, Vassilevska Williams, If the Current Clique Algorithms are Optimal, so is Valiant's Parser (FOCS 2015; arXiv:1504.01431)
    url: https://arxiv.org/abs/1504.01431
  - title: Clique problem (Wikipedia; includes the Nešetřil–Poljak 1985 algorithm)
    url: https://en.wikipedia.org/wiki/Clique_problem
links:
  - to: hyperclique-hypothesis
    kind: RELATED
    note: The Hyperclique Hypothesis is the hypergraph analogue; several preprints of early November 2026 claim to refute it, while this one concerns ordinary graphs where matrix multiplication already helps.
  - to: matrix-multiplication-exponent
    kind: RELATED
    note: The Nešetřil–Poljak bound n^(ωk/3) is stated in terms of ω, and the claimed saving in the exponent holds even if ω=2.
  - to: strong-exponential-time-hypothesis
    kind: RELATED
    note: Both are hardness hypotheses used for fine-grained lower bounds; the claim also gives a Max-2-CSP algorithm beating the 2^(ωn/3) bound of Williams (2005), which is not a statement about SETH.
  - to: exponential-time-hypothesis
    kind: RELATED
    note: The paper attributes its key decomposition to ideas in a recent OpenAI manuscript claiming to refute the Exponential Time Hypothesis.
  - to: apsp-3sum-hypotheses
    kind: RELATED
    note: Same family of fine-grained hypotheses (k-Clique, APSP, 3SUM, OV) from which conditional lower bounds are derived.
timeline:
  - date: 1985-01-01
    title: "Nešetřil and Poljak: k-clique via matrix multiplication"
    body: Nešetřil and Poljak gave an O(n^(ωk/3)) algorithm for k divisible by 3 by reducing k-clique to triangle detection in a graph on n^(k/3) nodes. Year only; the exact date is approximate.
    source: https://en.wikipedia.org/wiki/Clique_problem
  - date: 2015-10-01
    title: k-Clique used as the basis of fine-grained lower bounds
    body: Abboud, Backurs and Vassilevska Williams (FOCS 2015) showed that a faster combinatorial CFG parser would give a faster combinatorial k-clique algorithm and that Valiant's parser would be optimal if the current clique algorithms are. Month approximate; the preprint is arXiv:1504.01431.
    source: https://arxiv.org/abs/1504.01431
  - date: 2026-11-06
    title: Preprint claims the k-Clique Hypothesis is false
    body: Vassilevska Williams and Zamir posted an algorithm that finds and counts k-cliques in n^((ω/3−c)k) time for all large k, with c>0 independent of ω and k, so the saving holds even if ω=2. The paper also gives Max-2-CSP consequences. Unrefereed.
    source: https://arxiv.org/abs/2611.09764
explainer:
  oneLine: Finding a group of k mutual friends in a network seems to need a fixed amount of work. A November 2026 preprint claims to beat that.
  flow:
    - "Brute force: try all n^k groups"
    - "1985: split into three, use matrix multiplication"
    - "Hypothesis: nothing much better exists"
    - Other lower bounds assume it
    - Nov 2026 preprint claims a faster algorithm
    - "Unrefereed: experts must check"
  glossary:
    - term: clique
      meaning: A set of vertices in a graph in which every two are joined by an edge.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: graph
      meaning: A set of points (vertices) with some pairs joined by lines (edges).
      link: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
    - term: matrix multiplication exponent (ω)
      meaning: The smallest number such that two n-by-n matrices can be multiplied in about n^ω steps; known to lie between 2 and 2.372.
      link: /research/fast-matrix-multiplication
    - term: adjacency matrix
      meaning: A grid of 0s and 1s with a 1 in row i, column j when vertices i and j are joined by an edge.
      link: https://en.wikipedia.org/wiki/Adjacency_matrix
    - term: fine-grained complexity
      meaning: The study of the exact running-time exponents of problems, linked by reductions to a few hardness hypotheses.
      link: /research/fine-grained-complexity
    - term: fine-grained reduction
      meaning: A translation between problems that preserves running time, so a speed-up for one gives a speed-up for the other.
      link: https://en.wikipedia.org/wiki/Fine-grained_reduction
    - term: combinatorial algorithm
      meaning: Informally, an algorithm that does not use fast matrix multiplication; the term has no single formal definition.
      link: https://en.wikipedia.org/wiki/Clique_problem
    - term: context-free grammar parsing
      meaning: Deciding whether a string of symbols can be produced by a set of grammar rules; the CYK algorithm does it in cubic time.
      link: https://en.wikipedia.org/wiki/Cocke%E2%80%93Younger%E2%80%93Kasami_algorithm
    - term: Hyperclique Hypothesis
      meaning: The analogous belief for hypergraphs, whose edges join more than two vertices; several other November 2026 preprints claim to refute it.
      link: /research/fine-grained-complexity/questions/hyperclique-hypothesis
    - term: time complexity
      meaning: How the number of steps an algorithm needs grows with the size of its input.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: preprint
      meaning: A paper posted publicly before peer review, so its claims have not yet been checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Clique problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Clique_problem
      why: The problem, and the matrix-multiplication method for small cliques.
    - title: Fine-grained reduction (Wikipedia)
      url: https://en.wikipedia.org/wiki/Fine-grained_reduction
      why: What it means for one problem's running time to be tied to another's.
    - title: Matrix multiplication algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
      why: Where the exponent ω comes from, from the textbook method to Strassen and beyond.
    - title: Abboud, Backurs, Vassilevska Williams, If the Current Clique Algorithms are Optimal, so is Valiant's Parser
      url: https://arxiv.org/abs/1504.01431
      why: The paper that made the hypothesis a basis for lower bounds.
    - title: Vassilevska Williams and Zamir, The k-Clique hypothesis is dead, for good (arXiv preprint)
      url: https://arxiv.org/abs/2611.09764
      why: The claim itself; the abstract and Section 1 explain the setting (unrefereed).
raw:
  body: "A *$k$-clique* in an $n$-vertex graph is a set of $k$ vertices that are pairwise adjacent. Brute force checks all $\\binom{n}{k}$ subsets in about $n^{k}$ time. Nešetřil and Poljak (1985) showed that for $k$ divisible by 3, a $k$-clique can be found in $O(n^{\\omega k/3})$ time, where $\\omega<2.372$ is the matrix multiplication exponent: split the $k$ vertices into three groups of $k/3$, build a graph whose $n^{k/3}$ nodes are the $k/3$-cliques, and detect a triangle in it by matrix multiplication. For other $k$ the exponent grows by at most $2/3$. The **$k$-Clique Hypothesis**, as used in fine-grained complexity (Abboud, Backurs and Vassilevska Williams, FOCS 2015, for CFG parsing; it follows Woeginger's challenge to beat the Nešetřil–Poljak bound), says that for every $k$ divisible by 3, finding a $k$-clique on a word RAM with $O(\\log n)$-bit words requires $n^{\\omega k/3-o(1)}$ time. A second form, the **Combinatorial $k$-Clique Hypothesis**, says that no *combinatorial* algorithm (one that does not use fast matrix multiplication) finds a $k$-clique in $O(n^{k-\\varepsilon})$ time; this form is not touched by algebraic speed-ups. Dalirrooyfard, Vuong and Vassilevska Williams (2021) proposed a stronger version for $k$ not divisible by 3 in terms of rectangular matrix multiplication. **Question:** is the hypothesis false, that is, can the Nešetřil–Poljak exponent $\\omega k/3$ be beaten by a constant factor in the exponent for every large $k$, even if $\\omega=2$?"
  student: "**The problem.** A *graph* has vertices joined by edges. A *$k$-clique* is a set of $k$ vertices that are all joined to one another. Given a graph with $n$ vertices, does it contain one? Trying every set of $k$ vertices takes about $n^k$ steps, so the number of steps grows with $k$ in the exponent.\n\n**The 1985 shortcut (Nešetřil and Poljak).** Take $k=3m$. Make a new graph whose vertices are the $m$-cliques of the original, so it has about $n^m$ vertices. Join two of them if together they form a bigger clique. A triangle in this new graph is exactly a $3m$-clique in the old one. Triangles can be found with matrix multiplication: if $A$ is the adjacency matrix (entry 1 where an edge exists), then $\\operatorname{tr}(A^3)$, the sum of the diagonal entries of $A\\cdot A\\cdot A$, equals six times the number of triangles. Multiplying two $N\\times N$ matrices takes about $N^{\\omega}$ steps, where $\\omega$ is the *matrix multiplication exponent*: the textbook method gives $\\omega=3$, Strassen's method gives about $2.81$, and the best known value is below $2.372$. With $N=n^{k/3}$ this gives $O(n^{\\omega k/3})$ time. Nobody knows whether $\\omega$ can reach its lowest conceivable value, 2.\n\n**The hypothesis.** The *$k$-Clique Hypothesis* says that for $k$ divisible by 3 you cannot do significantly better than $n^{\\omega k/3}$: no algorithm runs in $O(n^{\\omega k/3-\\varepsilon})$ time for a fixed $\\varepsilon>0$. This is a *fine-grained complexity* statement: it fixes the exact exponent, not just 'polynomial or not'. Its importance is that fine-grained *reductions* turn it into lower bounds for other problems. For example, Abboud, Backurs and Vassilevska Williams (2015) showed that a combinatorial way of parsing text with a context-free grammar in less than cubic time would give a faster combinatorial clique algorithm.\n\n**The 2026 claim.** Vassilevska Williams and Zamir (arXiv:2611.09764, 6 November 2026) claim an algorithm running in $n^{(\\omega/3-c)k}$ time for all large enough $k$, where $c>0$ is a constant that does not depend on $\\omega$ or $k$. In words: the exponent drops by a fixed fraction, and that saving remains even in the best imaginable world where $\\omega=2$. Their main tool is algebraic: they write the identity matrix as a low-rank piece plus a few 'swap' pieces, and use that to remove one edge at a time from a nine-vertex pattern. The paper also says an AI model produced the key decomposition, and that the authors built the surrounding algorithm.\n\n**Status.** This is an unrefereed preprint. DARC read the abstract, introduction and theorem statements, not the proofs. The claim concerns the $\\omega$-based form of the hypothesis for large $k$; it says nothing about the separate *combinatorial* version (no fast matrix multiplication allowed), and it is a statement about theory, not a faster program."
site:
  aiReviewed: true
---

# State of the art

**Before November 2026.** Since 1985 no algorithm beat the Nešetřil–Poljak exponent $\omega k/3$ for any fixed $k$ divisible by 3, apart from lower-order improvements for particular small $k$ and rectangular-matrix tweaks for $k$ not divisible by 3. The hypothesis became a standard assumption: Abboud, Backurs and Vassilevska Williams (FOCS 2015) showed that a combinatorial algorithm for context-free grammar parsing faster than cubic would give a faster combinatorial $k$-clique algorithm, and that the Valiant parser would be optimal if the current clique algorithms are, and later lower bounds in fine-grained complexity assume it.

**Claimed refutation (preprint, unrefereed).** Virginia Vassilevska Williams and Or Zamir, 'The k-Clique hypothesis is dead, for good' (arXiv:2611.09764, v1 submitted 6 November 2026; cs.DS, cross-listed cs.CC), state an algorithm that finds and counts $k$-cliques in $O(n^{(\omega-\delta)k/3})$ time for every $k\ge K_0$, where $K_0$ and $\delta>0$ are constants independent of $\omega$. The saving therefore survives even if $\omega=2$. Via the Nešetřil–Poljak reduction the authors reduce to computing weighted sums over copies of a nine-vertex pattern, which they state (Theorem 1.2) can be done with $n^{3\omega-\epsilon+o(1)}$ arithmetic operations over any field of characteristic zero. The method removes pattern edges one at a time by 'folding' wedges, using a decomposition of the identity matrix into a low-rank part plus few partial swaps, applied to two disjoint wedges at once. The paper lists consequences including Max-2-CSP, Max-Cut and Max-2-SAT in $2^{(\omega/3-c)n+o(n)}$ time (improving the $2^{\omega n/3+o(n)}$ bound of Williams, 2005), counting induced copies of fixed-size patterns, and some partition-function computations. A disclosure section says the authors used a public AI model (named as ChatGPT-6) extensively, that the algebraic decomposition is almost purely the model's contribution, attributed by the authors to ideas in a recent OpenAI manuscript claiming to refute the Exponential Time Hypothesis, and that the algorithmic framework around it is mainly the authors'. The title is the authors' own wording; DARC reports it as a claim.

**What stays open.** DARC has read the abstract, introduction and theorem statements but has not checked the proofs, and no independent verification is recorded, so the problem stays OPEN. The claim is about the $\omega$-based form for large $k$; it does not by itself say anything about the Combinatorial $k$-Clique Hypothesis or about small $k$ such as $k=3,6$, and the constants $K_0$ and $\delta$ are not stated here to be practical, so the algorithm is of theoretical interest. Earlier in November 2026, preprints by Fischer (arXiv:2611.03880), by Alman, Li, Pant, Pratt and Williams (arXiv:2611.05082) and by Chan, Itakura, Ma and Yu (arXiv:2611.06813, 3-uniform case) claimed to refute the related Hyperclique Hypothesis; DARC tracks those on the Hyperclique page.

# Applications

If the claim is confirmed, fine-grained lower bounds that assume the $k$-Clique Hypothesis (for example for CFG parsing and some subgraph problems) lose their evidence at the stated exponents, and the technique would give small polynomial savings for exact Max-Cut and Max-2-SAT on Boolean variables. The savings are small and the algebra heavy, so no practical speed-up is implied. If the claim fails, the hypothesis keeps its role in guiding which problems are worth attacking. It has no direct applications either way.

# Resolution criteria

A refutation accepted by experts: peer-reviewed publication or independent verification of an algorithm that finds or counts $k$-cliques in $O(n^{(\omega-\delta)k/3})$ time for a fixed $\delta>0$ and all large $k$, including a check of the running-time analysis and that $\delta$ does not depend on $\omega$. Confirmation of the hypothesis would need a conditional or unconditional lower bound beyond $n^{\omega k/3}$, which no current technique provides for general word-RAM algorithms. If flaws are found in the preprint, the hypothesis reverts to open with no credible claim.

# Rating rationale

Difficulty 25: a preprint by leading researchers in this area claims an explicit mechanism built from established algebraic techniques, so the remaining distance is mostly verification; before it, beating Nešetřil–Poljak had been out of reach since 1985 and would have sat in the 70s, and it returns there if the claim fails. Application value 15: the savings are small and the algorithm is algebraic, so the value lies in redirecting lower-bound research, below APSP/3SUM (24). Leverage 60: many fine-grained conditional bounds (CFG parsing, subgraph problems, Max-CSP-type problems) assume it, slightly above the Hyperclique Hypothesis (58) but below the APSP/3SUM hypotheses (66) and SETH (81).

# Verification

Route: expert review of the preprint. A reviewer should restate the rank-or-swap decomposition of the identity (Lemma 3.3) and the folding of wedges, check that the saving per step compounds to a factor delta in the exponent independent of omega, verify the reduction from k-clique (k divisible by 9) to weighted nine-vertex pattern sums, and confirm the running-time analysis, including the case of patterns without two disjoint wedges. A cheap sanity check is to implement the Nešetřil–Poljak baseline and the weighted nine-vertex sum on tiny graphs and compare against brute-force counts; the polynomial saving cannot be observed on small inputs, only correctness. Cross-check the Max-Cut consequence against the known 2^(omega n/3) algorithm. A formal proof-assistant check would strengthen it; none is recorded.

# Plain explanation

Picture a school with many students. A clique is a group where everybody is friends with everybody else. To find a group of nine such students, the obvious way is to check every possible group of nine. That is a huge amount of work, and it grows very fast as the school gets bigger.

Since 1985 there has been a clever shortcut. It cuts the groups into three smaller pieces and uses a fast way of multiplying big tables of numbers. For forty years nobody found anything better, and many computer scientists came to believe this shortcut was close to the best possible. That belief is called the k-Clique Hypothesis. Other results rest on it: if the shortcut cannot be improved, then some other problems, such as reading a sentence according to grammar rules, cannot be sped up either.

On 6 November 2026, two researchers posted a paper claiming the belief is wrong. They say that for big enough groups there is a faster method. They also say an AI model supplied a key part of the idea. Other experts have not checked the paper yet, so this site lists the question as open.

The analogy is only a picture. The real problem is about counting patterns in huge mathematical networks, and even if the claim holds, the speed-up is small and not useful for everyday programs.
