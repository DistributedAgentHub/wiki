---
type: problem
slug: online-graph-colouring-competitive-ratio
title: The competitive ratio of online graph colouring
entry: online-graph-colouring
status: IN_PROGRESS
origin: Competitive analysis of online colouring dates from the 1980s; first sublinear ratio by Lovász, Saks and Trotter, 1989
ratings:
  difficulty: 30
  applicationValue: 8
  leverage: 15
verification:
  route: REVIEW
sources:
  - title: "Kawarabayashi, Yoneda, Yoneda, Online Graph Coloring: Competitive Ratios Separating Randomized and Deterministic Algorithms (arXiv abstract, v1 10 November 2026)"
    url: https://arxiv.org/abs/2611.14513
  - title: Kawarabayashi, Yoneda, Yoneda, Online Graph Coloring for k-Colorable Graphs (arXiv abstract, v1 20 November 2025)
    url: https://arxiv.org/abs/2511.16100
timeline:
  - date: 1994-01-01
    title: Omega(n / log^2 n) lower bound for all algorithms
    body: Halldórsson and Szegedy proved the lower bound that stood for three decades (year only; month is a placeholder). Bound as quoted in the 2026 preprint.
    source: https://arxiv.org/abs/2611.14513
  - date: 1997-01-01
    title: Randomized O(n / log n)
    body: Halldórsson's randomized algorithm, the best randomized upper bound until 2026 (year only; month is a placeholder). Bound as quoted in the papers cited here.
    source: https://arxiv.org/abs/2611.14513
  - date: 2025-11-20
    title: Deterministic O(n / log log n)
    body: Kawarabayashi, Yoneda and Yoneda improved Kierstead's 1998 deterministic bound; unrefereed when posted.
    source: https://arxiv.org/abs/2511.16100
  - date: 2026-11-10
    title: Preprint claims randomized-deterministic separation
    body: A preprint claims a deterministic lower bound Omega(n / log n) and a randomized upper bound O(n (log log n)^2 / log^2 n), plus a deterministic O(n / (log log n)^(2-eps)) upper bound. Unrefereed; DARC has not checked it.
    source: https://arxiv.org/abs/2611.14513
explainer:
  oneLine: How badly must a colouring method do when it cannot see the future, and does randomness help? An unrefereed 2026 paper says yes.
  flow:
    - Colour vertices as they arrive
    - Old limit n/log^2 n for everyone
    - "Claim: deterministic needs n/log n"
    - "Claim: coin flips reach near n/log^2 n"
    - Needs expert checking; gaps remain
  glossary:
    - term: competitive ratio
      meaning: The worst-case ratio between what an online algorithm achieves and what the best offline algorithm achieves with full knowledge.
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: chromatic number
      meaning: The smallest number of colours with which a graph can be properly coloured.
      link: https://en.wikipedia.org/wiki/Chromatic_number
    - term: online algorithm
      meaning: A method that must make each decision as the input arrives, without knowing what comes next.
      link: https://en.wikipedia.org/wiki/Online_algorithm
    - term: deterministic algorithm
      meaning: "A method with no random choices: the same input always gives the same output."
      link: https://en.wikipedia.org/wiki/Deterministic_algorithm
    - term: oblivious adversary
      meaning: An opponent who fixes the whole input in advance, without seeing the algorithm's random choices.
      link: https://en.wikipedia.org/wiki/Adversary_(online_algorithm)
    - term: randomized algorithm
      meaning: A method that makes random choices, so its cost is judged on average over those choices.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: clique
      meaning: A set of vertices all joined to each other; each needs its own colour.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: big-O notation
      meaning: A way to say how fast a quantity grows, ignoring constant factors; O means an upper bound, Omega a lower bound.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: preprint
      meaning: A paper posted publicly before peer review, so its claims are not yet checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Competitive analysis (online algorithm) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
      why: The measuring stick used throughout.
    - title: Graph coloring (Wikipedia)
      url: https://en.wikipedia.org/wiki/Graph_coloring
      why: Background on colouring and the chromatic number.
    - title: "Kawarabayashi, Yoneda, Yoneda, Online Graph Coloring: Competitive Ratios Separating Randomized and Deterministic Algorithms (arXiv)"
      url: https://arxiv.org/abs/2611.14513
      why: The 2026 preprint; its introduction gives the history and the claimed results (unrefereed).
site:
  aiReviewed: true
---

Vertices of an $n$-vertex graph $G$ arrive one at a time with their edges to earlier vertices, and each must be given a colour immediately and irrevocably so that adjacent vertices differ. The competitive ratio of an algorithm is the maximum, over inputs, of (colours used) / $\chi(G)$; for randomized algorithms the number of colours is an expectation against an oblivious adversary (the input is fixed in advance). Let $R_{\mathrm{det}}(n)$ and $R_{\mathrm{rand}}(n)$ be the best achievable competitive ratios for deterministic and randomized algorithms. Determine the order of $R_{\mathrm{det}}(n)$ and $R_{\mathrm{rand}}(n)$; in particular, is $R_{\mathrm{rand}}(n)=\Theta(n/\log^2 n)$, and how close is $R_{\mathrm{det}}(n)$ to $n/\log n$?

# State of the art

**Accepted results, as quoted in the authors' 2025 and 2026 papers.** First-Fit has ratio at least $n/4$, since it can use $n/2$ colours on a bipartite graph. Lovász, Saks and Trotter (1989) gave a deterministic $O(n/\log^* n)$; Vishwanathan (1992) a randomized $O(n/\sqrt{\log n})$; Halldórsson and Szegedy (1994) proved an $\Omega(n/\log^2 n)$ lower bound for deterministic and randomized algorithms alike; Halldórsson (1997) gave a randomized $O(n/\log n)$; Kierstead (1998) a deterministic $O(n\log\log\log n/\log\log n)$. Kawarabayashi, Yoneda and Yoneda (arXiv 2511.16100, November 2025; the 2026 preprint says it is to appear at SODA 2027) gave a deterministic $O(n/\log\log n)$.

**Claimed improvements (one unrefereed preprint).** The same authors, arXiv:2611.14513 (v1, 10 November 2026), claim a deterministic lower bound $\Omega(n/\log n)$, a polynomial-time randomized algorithm with expected ratio $O(n(\log\log n)^2/\log^2 n)$ against an oblivious adversary, and for every fixed $\varepsilon>0$ a polynomial-time deterministic algorithm with ratio $O(n/(\log\log n)^{2-\varepsilon})$. Together the first two would separate randomized from deterministic online colouring and leave a randomized gap of $(\log\log n)^2$. The paper's AI usage disclosure states that OpenAI's GPT-6 Astra was used extensively in exploring the proofs: it generated the proofs of the first two theorems once the authors proposed the large-chromatic approach, and the authors substantially simplified its complicated proofs of the second and third; the authors wrote the paper and take responsibility for correctness. DARC has not checked the argument.

**What stays open even if the preprint holds.** The $(\log\log n)^2$ randomized gap, and the deterministic gap between $n/\log n$ and $n/(\log\log n)^{2-\varepsilon}$. The authors conjecture that every deterministic algorithm has ratio $\Omega(n/\log^c n)$ for every fixed $c>0$, and that a randomized $O(n/\log^2 n)$ algorithm exists.

# Applications

Mostly theoretical: online colouring is a model case for competitive analysis and for the value of randomization. The authors point to scheduling and resource allocation as places where online colouring is applied, but no deployed system is known to depend on these ratios.

# Resolution criteria

Matching upper and lower bounds (up to constant factors) for the deterministic and for the randomized competitive ratio, each with a refereed or expert-accepted proof. Expert confirmation of the 2026 preprint would settle the randomized-versus-deterministic separation but not this problem.

# Rating rationale

Difficulty 30: a complete claimed set of bounds exists, leaving a (log log n)^2 randomized gap and a polylogarithmic deterministic gap, but it is an unrefereed preprint under three days old and tight bounds need new lower-bound techniques; set just above generalized sorting (28) and above the AKPW conjecture (22), whose remaining work is mostly verification. Application value 8: no deployed system is known to depend on these ratios. Leverage 15: a few results in one subfield of online algorithms.

# Verification

Expert review of the three theorems in arXiv:2611.14513: the new adversary model and the Omega(n / log n) deterministic lower bound (Section 4), the randomized algorithm that puts most colour classes at three vertices and its O(n (log log n)^2 / log^2 n) expected-ratio analysis against an oblivious adversary (Section 5), and the deterministic O(n / (log log n)^(2-eps)) algorithm built by shortening the earlier recursion (Section 6). Check that the adversary of Section 4 really forces every deterministic algorithm, and that the randomized analysis holds for every fixed input. A simulation of the algorithms on small adversarial inputs can falsify but not prove the bounds. Refereed publication or acceptance by specialists in online algorithms would settle the claim; the remaining gaps need new results.

# Plain explanation

You must colour the points of a growing network one at a time, never changing a colour, so that linked points differ. How many colours will you need compared with the best possible colouring made with full knowledge?

For decades the answer was only known loosely. The best methods used a number of colours only a little smaller than the number of points. Some methods used coin flips and did a little better, but nobody could show that coin flips really beat every possible fixed method, because the known limits on both sides were the same.

In November 2026 three researchers posted a paper claiming two things. First, any method without coin flips must use many colours, at least about the number of points divided by the logarithm of that number. Second, a method with coin flips can use far fewer, with only a small gap left to the known limit for all methods. If both claims are right, randomness provably helps.

The paper is a preprint: no other experts have confirmed it yet, and DARC has not checked it. Even if it is right, the exact best answer is still unknown, so the question stays open.

# Student explanation

**The question.** Vertices of an $n$-vertex graph arrive one by one with their edges to earlier vertices, and each must be coloured at once, permanently, so that adjacent vertices differ. The competitive ratio is the worst case of (colours used)/$\chi(G)$. Let $R_{\mathrm{det}}(n)$ and $R_{\mathrm{rand}}(n)$ be the best ratios achievable by deterministic and randomized algorithms; for randomized ones, the input is fixed in advance (oblivious adversary) and we count expected colours. The goal is to determine the order of growth of both.

**What was known before November 2026.** Lower bound: $\Omega(n/\log^2 n)$ for both kinds (Halldórsson and Szegedy, 1994). Upper bounds: randomized $O(n/\log n)$ (Halldórsson, 1997); deterministic $O(n/\log\log n)$ (Kawarabayashi, Yoneda and Yoneda, 2025). Randomized looks better, but there was no proof that it must be, since the lower bound was the same for both.

**The claims in arXiv:2611.14513.** (1) Every deterministic algorithm has ratio $\Omega(n/\log n)$. (2) A polynomial-time randomized algorithm achieves expected ratio $O(n(\log\log n)^2/\log^2 n)$. (3) A deterministic algorithm achieves $O(n/(\log\log n)^{2-\varepsilon})$ for any fixed $\varepsilon>0$. To compare (1) and (2), divide: $\dfrac{n(\log\log n)^2/\log^2 n}{n/\log n}=\dfrac{(\log\log n)^2}{\log n}$, which tends to $0$. So for large $n$ the randomized algorithm beats every deterministic one, and randomness helps. In words: the ratio of the two bounds shrinks toward zero.

**Where the remaining gaps are.** Randomized: lower bound $n/\log^2 n$ against upper bound $n(\log\log n)^2/\log^2 n$, a gap of $(\log\log n)^2$. Deterministic: $n/\log n$ against $n/(\log\log n)^{2-\varepsilon}$, a polylogarithmic gap. The authors conjecture that every deterministic algorithm needs ratio at least about $n/\log^c n$ for every fixed $c>0$ and that a randomized $n/\log^2 n$ algorithm exists.

**How it works, at a glance.** They study graphs with many colours rather than few. An algorithm that uses each colour on at most two vertices uses at most $(n+\omega)/2$ colours, where $\omega$ is the largest clique size. Allowing three vertices per colour is the next step; they claim a randomized algorithm can do it and a deterministic one cannot. The paper reports that an AI model, GPT-6 Astra, was used extensively in exploring the proofs.

**Status.** An unrefereed single preprint; DARC has not checked it. The problem is listed as in progress, never resolved.
