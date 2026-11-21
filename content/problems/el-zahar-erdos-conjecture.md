---
type: problem
slug: el-zahar-erdos-conjecture
title: The El-Zahar–Erdős conjecture on anticomplete subgraphs of large chromatic number
entry: chromatic-number-induced-subgraphs
status: OPEN
origin: M. El-Zahar and P. Erdős, Combinatorica 5 (1985)
ratings:
  difficulty: 52
  applicationValue: 90
  leverage: 30
verification:
  route: REVIEW
sources:
  - title: "Liu, Meng: A disproof of the El-Zahar–Erdős conjecture (arXiv:2611.24735, 18 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.24735
  - title: Liu, Meng, arXiv HTML version of v1 (Theorem 1, method, AI statement, references)
    url: https://arxiv.org/html/2611.24735v1
  - title: "Nguyen, Scott, Seymour: On a problem of El-Zahar and Erdős (arXiv:2303.13449)"
    url: https://arxiv.org/abs/2303.13449
  - title: "Scott, Seymour: A survey of χ-boundedness (arXiv:1812.07500)"
    url: https://arxiv.org/abs/1812.07500
  - title: "Wikipedia: Gyárfás–Sumner conjecture"
    url: https://en.wikipedia.org/wiki/Gy%C3%A1rf%C3%A1s%E2%80%93Sumner_conjecture
timeline:
  - date: 1985-01-01
    title: El-Zahar and Erdős pose the question
    body: They prove a weaker form (one side with chromatic number at least 3) and ask for both sides to have large chromatic number. Year as cited by the Liu–Meng preprint.
    source: https://arxiv.org/html/2611.24735v1
  - date: 2023-03-23
    title: "Nguyen, Scott, Seymour: one-sided versions"
    body: One side with large minimum degree and the other with large chromatic number; the full question stays open.
    source: https://arxiv.org/abs/2303.13449
  - date: 2026-11-18
    title: "Liu and Meng: preprint claims a negative answer"
    body: Girth-g graphs of arbitrarily large chromatic number in which every anticomplete pair has a side needing at most 6 colours. Unrefereed.
    source: https://arxiv.org/abs/2611.24735
explainer:
  oneLine: Must a graph needing many colours, but with no big clique, contain two separate pieces that each still need many? A 2026 preprint says no; unchecked.
  flow:
    - Many colours, no big clique
    - "Ask: two separate pieces, each costly?"
    - "1985: weaker forms proved only"
    - "2026 preprint: random graphs say no"
    - Unrefereed; DAH has checked nothing
  glossary:
    - term: chromatic number
      meaning: The fewest colours needed to colour the vertices of a graph so that no edge joins two vertices of the same colour.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: clique
      meaning: A set of vertices in which every two are joined by an edge; a clique of size k needs k colours.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: girth
      meaning: The length of the shortest cycle in a graph; large girth means no short loops anywhere.
      link: https://en.wikipedia.org/wiki/Girth_(graph_theory)
    - term: anticomplete
      meaning: Two sets of vertices are anticomplete when no edge of the graph joins a vertex of one to a vertex of the other.
      link: https://arxiv.org/abs/2611.24735
    - term: χ-bounded
      meaning: A family of graphs where the chromatic number is at most some function of the largest clique size.
      link: https://arxiv.org/abs/1812.07500
    - term: probabilistic method
      meaning: Proving something exists by showing that a random construction has the wanted property with positive probability.
      link: /research/probabilistic-method
    - term: independence number
      meaning: The size of the largest set of vertices with no edge between any two; a small one forces many colours.
      link: https://en.wikipedia.org/wiki/Independent_set_(graph_theory)
    - term: degenerate graph
      meaning: A graph in which every subgraph has a vertex of small degree; a 2-degenerate graph can be coloured with 3 colours.
      link: https://en.wikipedia.org/wiki/Degeneracy_(graph_theory)
  readFirst:
    - title: "Wikipedia: Graph coloring"
      url: https://en.wikipedia.org/wiki/Graph_coloring
      why: Chromatic number and the triangle-free constructions, with pictures.
    - title: "Wikipedia: Gyárfás–Sumner conjecture"
      url: https://en.wikipedia.org/wiki/Gy%C3%A1rf%C3%A1s%E2%80%93Sumner_conjecture
      why: A short account of the best-known question about forced induced subgraphs.
    - title: "Nguyen, Scott, Seymour: On a problem of El-Zahar and Erdős"
      url: https://arxiv.org/abs/2303.13449
      why: The best-known earlier partial result, with an introduction that states the question.
    - title: "Liu, Meng: A disproof of the El-Zahar–Erdős conjecture (preprint)"
      url: https://arxiv.org/abs/2611.24735
      why: The 2026 claim; short, but unrefereed.
site:
  aiReviewed: true
---

Two vertex sets $A,B$ of a graph $G$ are **anticomplete** if there is no edge between them. **Conjecture (El-Zahar–Erdős).** For all positive integers $t,c$ there is $d=d(t,c)$ such that every graph $G$ with $\omega(G)<t$ and $\chi(G)\ge d$ contains two anticomplete sets $A,B$ with $\chi(G[A])\ge c$ and $\chi(G[B])\ge c$. The question is open as a conjecture; a 2026 preprint claims it is false (see below).

# State of the art

**Open; one unrefereed claim of a negative answer.** The Liu–Meng preprint cites El-Zahar and Erdős (1985) for the result that, under the hypotheses above, one can find anticomplete $A,B$ with $\chi(A)\ge3$ and $\chi(B)\ge c$ (as the preprint's introduction states; DAH did not open the 1985 paper, and Nguyen, Scott and Seymour's abstract dates the question to 1986). Nguyen, Scott and Seymour (arXiv:2303.13449; J. Combin. Theory Ser. B, 2024, by the preprint's reference list) showed that $G[A]$ can be required to have minimum degree at least $c$ while $\chi(B)\ge c$, and, in a second theorem, that if large chromatic number is replaced by large minimum degree, excluding $K_t$ does not guarantee two anticomplete subgraphs of large minimum degree while excluding $K_{t,t}$ does. On 18 November 2026 Chenghua Liu and Boning Meng posted arXiv:2611.24735 (v1), which states (Theorem 1): for all $d\ge1$ and $g\ge4$ there is a graph with $\chi\ge d$ and girth at least $g$ in which every anticomplete pair $A,B$ has $\min(\chi(A),\chi(B))\le6$. Taking $g=4$ gives triangle-free graphs, so the preprint says the conjecture fails already for $t=3$, $c=7$. The method is a random graph on blocks with rapidly growing edge probabilities, followed by deletion of one vertex per short cycle in Erdős's manner. The paper states that OpenAI's GPT-6.2 Astra was used to help construct the counterexample and develop its proof. The four-page preprint is not refereed, its authors give only the Renormalization Group (r13n.group) as affiliation, and DAH has read but not checked the proof, so the problem stays OPEN. If the claim holds, what remains is whether the threshold 7 can be lowered (the preprint does not discuss this), that is, for which values of $c$ the conjecture still holds or fails.

# Applications

None foreseeable. The question belongs to structural graph theory; the girth-and-chromatic-number construction it relies on is a standard tool for ruling out guesses about what large chromatic number forces.

# Resolution criteria

A counterexample construction with a proof accepted by experts or published after refereeing (which would resolve the conjecture negatively), or a proof that the conjecture holds. A claim that holds only for large $c$ would settle the conjecture as stated but leave small values of $c$ open.

# Rating rationale

Rated against the accepted literature, not the unrefereed claim. Difficulty 52: a 1985 conjecture with only partial results (one-sided versions by Nguyen, Scott and Seymour), a research-grade question that a 2026 preprint claims to have settled by a probabilistic construction. Application value 5: no foreseeable practical use. Leverage 30: a few results in χ-boundedness hinge on whether anticomplete pairs of large chromatic number must exist.

# Verification

Experts read the Liu–Meng preprint (about 6 KB of source): the definition of the random block graph and the growth of its edge probabilities, Lemma 2 (in any anticomplete pair one side can be coloured with at most 6 colours, via 2-degenerate weak-pair graphs and a bipartite argument), Lemma 3 (the sparsity and large-set edge properties hold with high probability), and the deletion step that gives girth at least $g$ and chromatic number at least $d$. A concrete check is that the independence-number bound really forces $\chi\ge d$ after deletion. Sanity-check the claim against the one-sided theorem of Nguyen, Scott and Seymour, which it must not contradict. No machine-checked version is known.

# Plain explanation

Take a network of dots and lines and colour the dots so that dots joined by a line differ. If the network needs very many colours but has no big group of dots all joined to each other, does it have to contain two separate parts, with no line between them, that each still need many colours?

El-Zahar and Erdős asked this in 1985. They could show that one of the two parts can be forced to need at least three colours, and later work by Nguyen, Scott and Seymour got a different one-sided answer. Getting both parts to need many colours stayed out of reach, so the guess stayed open.

On 18 November 2026 Chenghua Liu and Boning Meng posted a paper claiming the answer is no. They say that there are networks that need as many colours as you like, have no short loops, and yet in every pair of separate parts one part needs at most six colours. Their construction is random, in the style Erdős used in 1959, and they say an AI system from OpenAI helped build the example and the proof.

So what is the honest status? The paper is a preprint that independent experts have not yet checked, and DAH has not checked it either. If it holds up, the guess is false. What the paper does not say is what happens when each part is only asked to need up to six colours.

# Student explanation

**The question.** Write $\chi(G)$ for the chromatic number and $\omega(G)$ for the size of the largest clique. Two vertex sets $A,B$ are anticomplete if no edge joins them. The El-Zahar–Erdős conjecture (1985): for all $t,c$ there is $d$ such that every graph with $\omega<t$ and $\chi\ge d$ contains anticomplete $A,B$ with $\chi(G[A])\ge c$ and $\chi(G[B])\ge c$.

**Why one might believe it.** A graph with big $\chi$ and small $\omega$ looks locally sparse. Erdős's girth theorem even allows no short cycles at all, so any two far-apart vertices have no short connection. One hopes that this sparseness lets you pull out two pieces that do not touch yet each carry a lot of the colouring cost. El-Zahar and Erdős proved a weaker form with $\chi(A)\ge3$ and $\chi(B)\ge c$ (as the Liu–Meng preprint cites it; DAH did not open the 1985 paper). Nguyen, Scott and Seymour (arXiv:2303.13449) showed that you can require $G[A]$ to have minimum degree at least $c$ while keeping $\chi(B)\ge c$. Minimum degree and chromatic number are different, because a bipartite graph has large minimum degree but needs only 2 colours.

**What is claimed.** Liu and Meng (arXiv:2611.24735, 18 November 2026) state in Theorem 1: for all $d\ge1$ and $g\ge4$ there is a graph $G$ with $\chi(G)\ge d$ and girth at least $g$ such that every anticomplete pair satisfies $\min(\chi(A),\chi(B))\le6$. With $g=4$ there are no triangles, so the conjecture would fail for $t=3$ and $c=7$.

**The method, in outline.** Split the vertices into $r=2d+2$ blocks, join pairs randomly with probabilities that grow quickly along a fixed ordering of the block pairs, and show with high probability three properties: an ordering property, an edge-existence property for large sets, and a sparsity property. Then delete one vertex from every short cycle, as in Erdős's 1959 proof. The independence number stays at most $2n$, which forces $\chi\ge d$ by the rule $\chi\ge n/\alpha$. The remaining lemma says that in any anticomplete pair one side can be coloured with 6 colours, because the graph of weak pairs on that side is 2-degenerate (3 colours) and the block structure adds a factor through a bipartite argument.

**What is not known.** The paper says that OpenAI's GPT-6.2 Astra helped construct the counterexample and develop its proof, and that the authors take responsibility. It is an unrefereed preprint, DAH has read the full text but not checked the proofs, and the problem stays OPEN. The preprint does not say whether 7 can be lowered, so whether the conjecture holds for $c$ up to 6 is not addressed.
