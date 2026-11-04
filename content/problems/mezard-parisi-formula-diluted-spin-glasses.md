---
type: problem
slug: mezard-parisi-formula-diluted-spin-glasses
title: Mézard–Parisi formula for the free energy of diluted spin glasses
entry: diluted-spin-glasses
status: OPEN
origin: Mézard and Parisi, 2001 (cavity method); the full hierarchical form is the extension discussed in Panchenko's 2014 and 2026 papers
ratings:
  difficulty: 50
  applicationValue: 2
  leverage: 40
verification:
  route: REVIEW
sources:
  - title: "Panchenko: The Mézard–Parisi formula (arXiv:2610.39545, preprint of 29 Oct 2026)"
    url: https://arxiv.org/abs/2610.39545
  - title: "OpenAI: openai/math family 221, the Mézard–Parisi formula for diluted spin glasses (AI-generated, unrefereed; pinned at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/CONTENTS.md
timeline:
  - date: 2000-09-27
    title: "Mézard and Parisi: the Bethe lattice spin glass revisited"
    body: "Proposes, by the cavity method, a non-perturbative one-step replica-symmetry-breaking solution of the spin glass on the Bethe lattice: the origin of the Mézard–Parisi formula."
    source: https://arxiv.org/abs/cond-mat/0009418
  - date: 2002-08-14
    title: "Franz and Leone: replica bounds for diluted spin systems"
    body: Extends Guerra's interpolation to diluted models (Viana–Bray, diluted p-spin, random K-SAT and XOR-SAT), proving that the replica-symmetry-breaking ansatz gives rigorous one-sided bounds on the free energy.
    source: https://arxiv.org/abs/cond-mat/0208280
  - date: 2004-05-18
    title: "Panchenko and Talagrand: bounds for diluted spin glasses"
    body: Derives the Franz–Leone bounds for the diluted p-spin and K-SAT models from a single general principle, with a shorter proof.
    source: https://arxiv.org/abs/math/0405357
  - date: 2013-08-08
    title: "Panchenko: 1-RSB Gibbs measures in diluted p-spin models"
    body: Proves that 1-RSB asymptotic Gibbs measures of diluted p-spin models are described by the Mézard–Parisi ansatz (with an exceptional zero-overlap case without external field only partly characterised).
    source: https://arxiv.org/abs/1308.1944
  - date: 2014-06-18
    title: "Panchenko: finite-RSB Gibbs measures in diluted models"
    body: Shows that after a small modification of the Hamiltonian, all finite-RSB asymptotic Gibbs measures satisfy the Mézard–Parisi ansatz, and proposes this as a route to the formula; what remained missing was a description of general full-RSB measures.
    source: https://arxiv.org/abs/1406.4702
  - date: 2017-09-12
    title: "Coja-Oghlan and Perkins: Bethe states of random factor graphs"
    body: Verifies for a broad class of random factor graph models that the Gibbs measure decomposes into a moderate number of Bethe states whose marginals are Belief Propagation fixed points.
    source: https://arxiv.org/abs/1709.03827
  - date: 2018-08-10
    title: "Coja-Oghlan and Perkins: spin systems on Bethe lattices"
    body: Establishes rigorously the Bethe-state decomposition hypothesized by Mézard and Parisi for a general family of spin systems on random regular graphs, and derives a variational formula for the free energy.
    source: https://arxiv.org/abs/1808.03440
  - date: 2024-10-21
    title: "Biswas, Chen and Sen: replica symmetric solution in diluted spin glasses"
    body: Identifies two regimes (high temperature, and a subcritical sparsity regime independent of temperature) in which general diluted spin glasses are replica symmetric with an explicit free energy.
    source: https://arxiv.org/abs/2410.15599
  - date: 2026-10-06
    title: "OpenAI release: claimed proof for even-arity Ising models"
    body: The openai/math release (family 221, manuscript dated 23 Sep 2026) claims the Mézard–Parisi formula for Poisson-diluted even-arity Ising models in the Panchenko–Talagrand class; a Lean formalization is listed. AI-generated and unrefereed.
    source: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/221.md
  - date: 2026-10-29
    title: "Panchenko: the Mézard–Parisi formula (preprint)"
    body: A preprint claims the matching lower bound for a general class of diluted models under symmetry and integrability assumptions, completing the formula for diluted even K-spin and random K-SAT, via an approximate reproducibility result without finite-support overlaps. The author credits ChatGPT Astra with finding the proof. Unrefereed.
    source: https://arxiv.org/abs/2610.39545
explainer:
  oneLine: Is the physicists' energy recipe for sparse random magnets exact? Half is proved; two 2026 manuscripts claim the rest.
  flow:
    - Interpolation gives one inequality
    - Lower bound needs multioverlap structure
    - "Reproducibility: multioverlaps fixed by pairs"
    - Proved for finite levels (2013, 2014)
    - "2026 claims: approximate version, any levels"
  glossary:
    - term: free energy
      meaning: The quantity combining energy and entropy that determines a system's equilibrium behaviour.
      link: https://en.wikipedia.org/wiki/Free_energy
    - term: Gibbs measure
      meaning: The probability rule that weights each configuration exponentially by its energy, with the temperature setting how strongly.
      link: https://en.wikipedia.org/wiki/Gibbs_measure
    - term: replica
      meaning: One of several independent copies sampled from the same random system, used to measure how much typical states agree.
      link: https://en.wikipedia.org/wiki/Replica_trick
    - term: overlap
      meaning: The fraction of spins on which two replicas agree, rescaled so that identical replicas have overlap 1.
      link: https://en.wikipedia.org/wiki/Spin_glass
    - term: replica symmetry breaking
      meaning: The spin-glass phenomenon where the equilibrium splits into many states arranged in a hierarchy; the depth counts the levels.
      link: https://en.wikipedia.org/wiki/Replica_trick
    - term: cavity method
      meaning: A technique that removes one site from a system and studies how the rest respond, to derive self-consistent equations.
      link: https://en.wikipedia.org/wiki/Cavity_method
    - term: interpolation
      meaning: A proof technique that connects a hard model to an easy one along a path and tracks how a quantity changes.
      link: https://en.wikipedia.org/wiki/Spin_glass
    - term: Sherrington–Kirkpatrick model
      meaning: The classic spin glass in which every spin interacts with every other; its free energy is given by the Parisi formula.
      link: https://en.wikipedia.org/wiki/Sherrington%E2%80%93Kirkpatrick_model
    - term: random K-SAT
      meaning: A random logic puzzle made of clauses, each involving K variables, which may or may not be satisfiable all at once.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: Poisson distribution
      meaning: The pattern of how many rare, independent events occur in a fixed stretch, here the number of random clauses.
      link: https://en.wikipedia.org/wiki/Poisson_distribution
    - term: preprint
      meaning: A paper made public before peer review; other experts have not yet checked it.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: diluted spin glasses
      meaning: The DARC research page on this model class and the cavity method.
      link: /research/diluted-spin-glasses
  readFirst:
    - title: Spin glass (Wikipedia)
      url: https://en.wikipedia.org/wiki/Spin_glass
      why: Overview of the physics and of the replica approach.
    - title: Sherrington–Kirkpatrick model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Sherrington%E2%80%93Kirkpatrick_model
      why: The dense version of the model, whose Parisi formula the diluted formula parallels.
    - title: Cavity method (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cavity_method
      why: The technique behind the Mézard–Parisi recipe.
raw:
  student: "**What is asked.** Take $N$ spins $\\sigma_i=\\pm1$ and a random energy $H(\\sigma)$ made of a Poisson number (mean proportional to $N$) of random clauses, each involving $K$ spins chosen uniformly at random. Examples: the diluted $K$-spin model, $H=\\sum_a J_a\\sigma_{i_1}\\cdots\\sigma_{i_K}$ with random signs, and random $K$-SAT. Let\n$$F_N=\\frac1N\\,\\mathbb E\\log\\sum_\\sigma e^{\\beta H(\\sigma)}$$\nbe the free energy per spin (the average, over the randomness, of the log of the sum over all $2^N$ configurations). The **Mézard–Parisi formula** says $F_N$ converges as $N\\to\\infty$, and its limit equals the infimum, over a depth $r$ and trial distributions, of an explicit functional built from a hierarchy of random variables.\n\n**Known: one inequality.** An interpolation argument, due to Franz and Leone and to Panchenko and Talagrand, introduces a path between the true model and a simple tree-like model, and shows by differentiating along the path that $F_N$ is at most that infimum, for every $N$. This is the diluted analogue of Guerra's bound for the Sherrington–Kirkpatrick model.\n\n**Missing: the reverse inequality.** It needs the structure of the Gibbs measure. Replicas are independent samples from the same Gibbs measure, and the *overlap* of two replicas is the fraction of spins where they agree. The Ghirlanda–Guerra identities, enforced by a small perturbation, force the overlaps into a tree-like (ultrametric) pattern. For diluted models that is not enough: the cavity fields depend on all *multioverlaps*, the joint statistics of several replicas at once. The **reproducibility hypothesis** says multioverlaps are determined by pairwise overlaps. Panchenko proved reproducibility when the overlap takes finitely many values (1-RSB in 2013, finite RSB in 2014 after a small perturbation). The gap: allow any overlap distribution.\n\n**The October 2026 claims.** (1) OpenAI's openai/math family 221 claims the formula for even-arity Poisson-diluted Ising models in the Panchenko–Talagrand class, with positivity and integrability assumptions and a listed Lean formalization. (2) Panchenko's preprint (arXiv:2610.39545) claims an *approximate* reproducibility, with errors controlled uniformly as the overlap partition gets finer, from which the lower bound follows. Combined with the upper bound, it claims the full limit for even $K$-spin and for random $K$-SAT, and only the lower bound on the liminf for other clause laws that satisfy a symmetry and exponential-integrability condition.\n\n**Status.** Both are unrefereed. Panchenko's paper states that the proof was found by an AI system and then checked and rewritten by the author. DARC keeps the problem OPEN until experts check them."
site:
  aiReviewed: true
---

For diluted spin-glass models (Viana–Bray, diluted even $p$-spin, positive-temperature random $K$-SAT) on sparse Poisson random hypergraphs, prove that the limiting free energy exists and equals the infimum of the Mézard–Parisi hierarchical cavity functional over all depths and trial laws. The upper bound (free energy at most the infimum, at every $N$) is the Franz–Leone interpolation bound; the open part is the matching lower bound.

# State of the art

**Open as of today; two unrefereed claims.** Upper bound: Franz–Leone (arXiv:cond-mat/0208280) for even $p$-spin and $K$-SAT, simplified by Panchenko–Talagrand (arXiv:math/0405357); Panchenko's 2026 preprint says Talagrand observed that the argument covers every $K\ge2$ in $K$-SAT. Structure of Gibbs measures: Panchenko (arXiv:1308.1944 for 1-RSB, arXiv:1406.4702 for finite RSB after a small perturbation, with the passage to general overlap distributions left open), Coja-Oghlan–Perkins (arXiv:1709.03827, arXiv:1808.03440). Replica symmetric regimes: Biswas–Chen–Sen (arXiv:2410.15599).

**Claims of October 2026.** (1) OpenAI's release (openai/math family 221, dated 23 September, released 6 October 2026; AI-generated, unrefereed, with a Lean formalization listed but not reviewed) claims the formula for Poisson-diluted even-arity Ising models satisfying the Panchenko–Talagrand factorization, independence, integrability and positivity assumptions; the class includes Viana–Bray, symmetric diluted even-spin models and weighted soft even-$K$ satisfiability. (2) Panchenko's preprint (arXiv:2610.39545, 29 October 2026, unrefereed) claims the limit equals the infimum of the Mézard–Parisi functional for the diluted $K$-spin model with even $K\ge2$ (Gaussian or symmetric-sign coupling) and for random $K$-SAT with $K\ge2$, and proves a lower bound on the liminf for any clause law that is symmetric under permutations of its inputs and satisfies an exponential-moment integrability condition. Its main new tool is an approximate form of the Mézard–Parisi reproducibility hypothesis (multioverlaps determined by pairwise overlaps), proved without assuming a finite-support overlap distribution, using a small diluted random-energy-model perturbation. The paper's acknowledgement says the proof was found by ChatGPT Astra at the author's request; the author reports reading, checking and rewriting it, with ChatGPT Astra and Claude Fable assisting the rewriting. The paper says OpenAI's proof appeared a few days after this one was found and appears to follow a different approach. The preprint does not mention a formal verification, and some standard ingredients are deferred to a supplementary note. DARC found no independent assessment of either manuscript, so the problem stays OPEN.

# Applications

Indirect: thresholds and algorithmic phase transitions for random constraint satisfaction, coding and inference problems.

# Resolution criteria

A refereed proof (or an expert-reviewed formal proof) of the formula for a stated class of diluted models at all temperatures, with the assumptions made explicit. A preprint, or an AI-generated manuscript, does not change the status.

# Rating rationale

Difficulty 50: a gap open since the 2002 interpolation bound, with a systematic programme (Panchenko, 2013 to 2016) towards the lower bound, but now two unrefereed manuscripts claim it, one by the programme's own author. Application value 2: indirect, through thresholds and algorithmic phase transitions for random constraint satisfaction. Leverage 40: would complete the rigorous cavity theory for diluted models, one subfield.

# Verification

Expert reading of the lower bound in Panchenko's preprint (the approximate reproducibility theorem, the diluted REM perturbation, the induction on the number of replicas and the compactness step, including the supplementary note the paper cites) and of which clause laws satisfy its symmetry and integrability assumptions; comparison with OpenAI's family 221 manuscript and its Lean statements, which cover a class defined by different assumptions.

# Plain explanation

Picture a huge crowd where each person is linked to only a few others and every link carries a random "agree" or "disagree" rule. Each person picks yes or no. The question is: how low can the total number of broken rules be?

Two physicists, Mézard and Parisi, wrote down a recipe for the answer. It is built in layers, like nested boxes, and the final number is the best score over all possible layered setups. Physicists trust it, and it has passed many tests. But a mathematical proof is something else.

Over twenty years ago, mathematicians proved one half: the true answer can never be worse than the recipe says. The other half, that the recipe is not too cautious either, needs a deep understanding of how the crowd splits into groups, and it stayed unproven in general.

In October 2026 two manuscripts claimed to supply the missing half. One was released by OpenAI and was written by an AI system. The other is by the mathematician Dmitry Panchenko, who has worked on this question for years and says an AI system found the key argument, which he then checked and rewrote. Neither has been through peer review, and no independent expert has published a verdict. So this stays an open problem on DARC for now.

Why care? The same mathematics describes random puzzles with many rules, and the points where such puzzles suddenly become unsolvable.

The crowd picture breaks down in one place: the real model has billions of people and the proof is about the limit as the crowd grows.
