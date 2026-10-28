---
type: problem
slug: mason-tensor-product-conjecture
title: "Mason's conjecture: the generic tensor product of two uniform matroids is their freest tensor product"
entry: matroid-theory
status: OPEN
origin: Mason, 1981 (uniform tensor-product form stated by Cruickshank, Jackson, Jordan and Tanigawa)
ratings:
  difficulty: 50
  applicationValue: 8
  leverage: 25
verification:
  route: REVIEW
sources:
  - title: "Tyomkyn: Generic tensor products are not maximal (arXiv:2610.37616, 27 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.37616
  - title: "Tyomkyn: Linear matroid products: a synthetic approach (arXiv:2609.16747)"
    url: https://arxiv.org/abs/2609.16747
  - title: "Bulavka, Tancer: Maximal matroids and counterexamples (arXiv:2606.14663)"
    url: https://arxiv.org/abs/2606.14663
  - title: "Cruickshank, Jackson, Jordan, Tanigawa: Rigidity of Graphs and Frameworks: A Matroid Theoretic Approach (arXiv:2508.11636)"
    url: https://arxiv.org/abs/2508.11636
  - title: "Jackson, Tanigawa: Maximal Matroids in Weak Order Posets (arXiv:2102.09901)"
    url: https://arxiv.org/abs/2102.09901
timeline:
  - date: 2026-09-15
    title: Mason's conjecture holds among linearly representable matroids
    body: A preprint by Tyomkyn shows the generic birigidity matroid is the freest linearly representable abstract birigidity matroid, which settles the conjecture only inside representable matroids.
    source: https://arxiv.org/abs/2609.16747
  - date: 2026-10-27
    title: A preprint claims a counterexample for two copies of U(7,9)
    body: Tyomkyn's preprint claims a tensor product of two copies of U(7,9) strictly freer than the generic one, non-representable over every field, and counterexamples to the Jackson-Tanigawa hyperconnectivity conjecture for all d >= 2. Unrefereed; status unchanged.
    source: https://arxiv.org/abs/2610.37616
explainer:
  oneLine: Is the 'generic' way of combining two uniform matroids always the most flexible one? A 27 Oct 2026 preprint claims no.
  flow:
    - Matroids model independence
    - "Combine two into a grid: tensor product"
    - "Conjecture: generic one is freest"
    - Representable case proved (preprint)
    - 27 Oct preprint claims a freer one
  glossary:
    - term: matroid
      meaning: A finite set with a family of independent subsets obeying the exchange rule, abstracting linear independence.
      link: /research/matroid-theory
    - term: uniform matroid
      meaning: A matroid in which any set of at most r elements is independent and larger sets are not.
      link: https://en.wikipedia.org/wiki/Uniform_matroid
    - term: tensor product
      meaning: For vectors, the object u⊗v; for matroids, a grid matroid whose box ranks multiply.
      link: https://en.wikipedia.org/wiki/Tensor_product
    - term: generic
      meaning: Chosen with no accidental coincidences, so only relations forced for all choices hold.
      link: https://en.wikipedia.org/wiki/Generic_property
    - term: weak order
      meaning: M is below N if every independent set of M is independent in N; the larger one is freer.
      link: /research/matroid-theory
    - term: representable matroid
      meaning: A matroid realizable by vectors over some field with independence matching linear independence.
      link: https://en.wikipedia.org/wiki/Matroid_representation
    - term: circuit-hyperplane relaxation
      meaning: Replacing a set that is both a circuit and a hyperplane by an independent set, giving a new, freer matroid.
      link: https://en.wikipedia.org/wiki/Matroid
    - term: rigidity matroid
      meaning: The matroid of edges of a graph drawn in space that are not redundant for keeping it stiff.
      link: https://en.wikipedia.org/wiki/Rigidity_matroid
    - term: preprint
      meaning: A paper posted online before refereeing by a journal.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Matroid - Wikipedia
      url: https://en.wikipedia.org/wiki/Matroid
      why: Start here for the vocabulary.
    - title: "Tyomkyn: Generic tensor products are not maximal (arXiv abstract)"
      url: https://arxiv.org/abs/2610.37616
      why: The 27 Oct 2026 preprint making the claim, unrefereed.
    - title: "Tyomkyn: Linear matroid products: a synthetic approach"
      url: https://arxiv.org/abs/2609.16747
      why: The representable case and the link to Mason's 1981 question.
    - title: "Rigidity of Graphs and Frameworks: A Matroid Theoretic Approach"
      url: https://arxiv.org/abs/2508.11636
      why: A survey placing the conjecture in rigidity theory.
raw:
  body: "For loopless matroids $M_1$ on $E_1$ and $M_2$ on $E_2$, a *product* is a matroid on $E_1\\times E_2$ whose restriction to each row and column matches the corresponding factor and in which $F_1\\times F_2$ is a flat whenever $F_i$ is a flat of $M_i$. A product $T$ is a *tensor product* if $r_T(X_1\\times X_2)=r_{M_1}(X_1)\\,r_{M_2}(X_2)$. For uniform factors $U_{r,m}$ and $U_{s,n}$ the *generic tensor product* has independent sets given by linear independence of $u_i\\otimes v_j$ for generic vectors $u_i,v_j$. Compare matroids in the weak order ($M\\preceq N$ if every independent set of $M$ is independent in $N$). **Conjecture (uniform form):** the generic tensor product of two uniform matroids is their freest tensor product, that is, every tensor product of them is $\\preceq$ the generic one. Mason (1981) asked whether any two matroids have a freest product; Las Vergnas (1981) showed this fails in general, and the uniform case is the open one. Via a duality, the conjecture is equivalent to the statement that the generic birigidity matroid is the freest abstract birigidity matroid. A related conjecture of Jackson and Tanigawa says the generic $d$-hyperconnectivity matroid is the unique maximal matroid on $E(K_n)$ in which every copy of $K_{d+2}$ and $K_{d+1,d+1}$ is a circuit."
  stateOfArt: "**Open in the accepted literature; a claimed disproof is unrefereed.** Mason (1981) asked whether freest products exist; Las Vergnas (1981) gave negative answers for general matroids, including pairs with no tensor product at all. The uniform tensor-product form was stated by Cruickshank, Jackson, Jordan and Tanigawa (survey arXiv:2508.11636), and Brakensiek, Chen, Dhar and Zhang connected it to deterministic independence testing for generic birigidity matroids. On 15 September 2026 Tyomkyn posted a preprint (arXiv:2609.16747) showing that the generic birigidity matroid is the freest *linearly representable* abstract birigidity matroid, which is Mason's conjecture restricted to representable matroids. Bulavka and Tancer (arXiv:2606.14663, June 2026) report counterexamples to the Jackson-Tanigawa maximality conjectures for rigidity and hyperconnectivity (Tyomkyn's new preprint describes theirs as covering d >= 3). **A preprint claims** (Tyomkyn, arXiv:2610.37616, 27 October 2026) that the generic tensor product of two copies of $U_{7,9}$ is not maximal, via a tensor product obtained by relaxing a circuit-hyperplane (more generally for $U_{s,s+a}$ and $U_{s,s+b}$ with $s=4k-1$, $k\\ge2$, $a,b\\ge2$), which would disprove the uniform form of Mason's conjecture; that the resulting matroids are non-representable over every field (using the representability theorem of arXiv:2609.16747); and that they give full-rank counterexamples to the Jackson-Tanigawa hyperconnectivity conjecture in every dimension $d\\ge2$. The paper's AI-use statement says the counterexamples were found by ChatGPT 6 in an interaction with the author. The preprint has not been refereed and DARC found no independent expert assessment, so the problem remains open."
  student: "**Setup.** A matroid abstracts linear independence (see the matroid-theory entry). Let $U_{r,m}$ and $U_{s,n}$ be uniform matroids. A *tensor product* of two matroids is a matroid $T$ on the grid $E_1\\times E_2$ in which each row and column looks like the corresponding factor, and in which the rank of a box is the product of the ranks: $r_T(F_1\\times F_2)=r_1(F_1)\\,r_2(F_2)$. The rank-multiplies rule is what you see for tensors $u\\otimes v$, where $u$ and $v$ are vectors. If we pick the vectors $u_i, v_j$ at random (generically), the tensors $u_i\\otimes v_j$ give the **generic tensor product**.\n\n**Freest.** Compare matroids on the same ground set by $M\\preceq N$ when every independent set of $M$ is independent in $N$. A matroid is *freest* in a family if it is at the top. Mason's 1981 question was whether any two matroids have a freest product. Las Vergnas (1981) showed no in general. **The conjecture** is the uniform case: the generic tensor product is the freest tensor product of $U_{r,m}$ and $U_{s,n}$.\n\n**Why people believed it.** If the cells are labelled by rank-one tensors $u_i\\otimes v_j$, a set that is independent for some choice of the vectors is independent for generic vectors, since a polynomial that is nonzero somewhere is nonzero generically. But a representable tensor product can use vectors that are not of the form $u_i\\otimes v_j$, so this argument alone is not enough. Tyomkyn's September 2026 preprint (arXiv:2609.16747) proves that the generic product is still the freest among *representable* tensor products. The conjecture says the same holds when we allow abstract, non-representable products.\n\n**Link to rigidity.** The dual of the generic tensor product is the generic *birigidity* matroid, which governs generic low-rank matrix completion: which patterns of known entries of a low-rank matrix are independent of each other. Jackson and Tanigawa conjectured that the generic rigidity and hyperconnectivity matroids are the unique maximal matroids with prescribed circuits. Bulavka and Tancer (2026) report counterexamples to these.\n\n**The claim.** Tyomkyn's arXiv:2610.37616 reports a tensor product of two copies of $U_{7,9}$ obtained by relaxing one circuit-hyperplane (a set that is both a circuit and a hyperplane; relaxing it makes it independent and adds new independent sets) of the generic product, giving a strictly freer matroid. It also reports that these are non-representable over every field, consistent with the representable-case theorem, and gives Jackson-Tanigawa counterexamples for all $d\\ge2$ (Bulavka and Tancer had covered $d\\ge3$). The paper says the counterexamples were found by ChatGPT 6.\n\n**Status.** Unrefereed. Because the example is a finite matroid, it can in principle be checked by computer, but we have not done so. Until experts accept it the problem stays open."
site:
  aiReviewed: true
---

# Applications

Few direct ones. The conjecture is a question about the structure of matroids. Its dual form concerns birigidity matroids, which govern generic low-rank matrix completion, and Brakensiek and coauthors note that a positive answer would give a deterministic polynomial-time independence test for generic birigidity matroids. A counterexample would instead show that such tests cannot rely on the generic linear representation being freest.

# Resolution criteria

A proof, accepted by matroid and rigidity theorists, that every tensor product of two uniform matroids is weakly below the generic one; or a refereed explicit tensor product of two uniform matroids that is strictly freer than the generic tensor product (a claimed example is arXiv:2610.37616). An example is a finite matroid, so its independence structure and the tensor-product conditions can in principle be verified by computer once it is written out.

# Rating rationale

Difficulty 50: a specific finite counterexample has been claimed and the linear case is a preprint theorem, so a path is visible, but nothing is refereed. Application value 8: structural, with a loose link to matrix completion algorithms. Leverage 25: it settles a few related maximality conjectures in rigidity and hyperconnectivity theory, a single subfield.

# Verification

Experts referee the construction in arXiv:2610.37616. Because the claimed matroid is finite (two copies of U(7,9) give 81 elements), a reviewer can also write out the relaxed circuit-hyperplane, check the matroid axioms, the product and tensor-product conditions, and that it strictly dominates the generic tensor product in the weak order, and check the non-representability argument separately.

# Plain explanation

Imagine you have two simple rulebooks about independence, and you want to build a grid out of them, one square for each pair. Several grids obey the rules. In 1981 Mason asked whether there is always one grid that is the most flexible, allowing the most combinations and forbidding only what must be forbidden. The same year Michel Las Vergnas showed there is not always such a grid in general. For the simplest rulebooks the question stayed open for over forty years.

The natural candidate is the grid you get by using random numbers, called the generic one. A September 2026 preprint by the same author showed it is the most flexible among grids that real numbers (or any field of numbers) can build. On 27 October 2026 a preprint by Mykhaylo Tyomkyn claimed a grid that no numbers can build and that is more flexible still, which would answer Mason's question with a no. Nobody independent has checked it, so it is a claim, not a result.

If it holds, it would also affect a related guess about stiff frameworks of bars. The question matters mostly to specialists. It tells them whether the random-number picture is the whole story.

The analogy has a limit: the grids here are strict mathematical objects, and 'more flexible' has an exact meaning, not a loose one.
