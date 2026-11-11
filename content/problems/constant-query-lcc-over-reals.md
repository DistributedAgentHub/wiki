---
type: problem
slug: constant-query-lcc-over-reals
title: "Constant-query locally correctable codes over the reals: dimension versus length"
entry: locally-correctable-codes
status: OPEN
origin: Conjectured not to exist by Dvir (2016 lecture notes, Conjecture 9.1); 2-query case ruled out by Barak, Dvir, Wigderson and Yehudayoff (2011). A November 2026 unrefereed preprint by Dvir reports a construction for every q >= 3.
ratings:
  difficulty: 55
  applicationValue: 8
  leverage: 22
verification:
  route: REVIEW
sources:
  - title: Dvir, Constant query LCCs over the reals (arXiv:2611.13281, 9 November 2026, preprint)
    url: https://arxiv.org/abs/2611.13281
  - title: "Dvir, Linear locally decodable codes, Lecture 9: LDCs and LCCs over R and C (Princeton, Fall 2016), Conjecture 9.1"
    url: https://www.cs.princeton.edu/~zdvir/LDCnotes/LDC9.pdf
  - title: Barak, Dvir, Wigderson, Yehudayoff, Rank bounds for design matrices with applications to combinatorial geometry and locally correctable codes (arXiv:1009.4375)
    url: https://arxiv.org/abs/1009.4375
  - title: Dvir, Saraf, Wigderson, Improved rank bounds for design matrices and a new proof of Kelly's theorem (arXiv:1211.0330)
    url: https://arxiv.org/abs/1211.0330
  - title: Ai, Dvir, Saraf, Wigderson, Sylvester-Gallai type theorems for approximate collinearity (arXiv:1211.0331)
    url: https://arxiv.org/abs/1211.0331
  - title: Janzer, Manohar, Reed-Muller Codes are Optimal Binary Linear 3-Query LCCs (arXiv:2611.03145, preprint)
    url: https://arxiv.org/abs/2611.03145
links:
  - to: explicit-valiant-rigid-matrices
    kind: RELATED
    note: Dvir (2010, On matrix rigidity and locally self-correctable codes) showed that if the generating matrix of a locally decodable code is not rigid, it yields a high-rate locally self-correctable code, so lower bounds for LCCs would give rigid matrices.
  - to: blackbox-pit-constant-depth-polynomial-time
    kind: RELATED
    note: Sylvester-Gallai-type rank bounds, the tools that limit real LCCs, are also used in identity testing of depth-3 arithmetic circuits.
timeline:
  - date: 2010-09-22
    title: 2-query LCCs over C have bounded dimension
    body: Barak, Dvir, Wigderson and Yehudayoff showed via a quantitative Sylvester-Gallai theorem that infinite families of linear 2-query LCCs do not exist over the complex numbers (arXiv v1 date).
    source: https://arxiv.org/abs/1009.4375
  - date: 2012-11-02
    title: Bounded-coefficient decoders give bounded dimension
    body: Ai, Dvir, Saraf and Wigderson proved Sylvester-Gallai type theorems for approximate collinearity, which the 2026 preprint cites for the bound O((qK/delta)^4) on decoders with coefficients at most K (arXiv v1 date).
    source: https://arxiv.org/abs/1211.0331
  - date: 2026-11-09
    title: Preprint reports constant-query LCCs over the reals
    body: Dvir presents linear (q, 1/(8q)) LCCs over R for every q >= 3 with block length exp(O_q(d^(1/s) log d)), s = floor((q-1)/2), via random quadratic curves on an integer grid, and says the construction was found by ChatGPT Astra. Unrefereed; not yet checked by DARC beyond a numerical spot-check of the sampler.
    source: https://arxiv.org/abs/2611.13281
explainer:
  oneLine: Can data made of real numbers be repaired from a few other pieces? A 2026 preprint says yes; the best efficiency is unknown.
  flow:
    - Reed-Muller repair uses random lines
    - Over the reals lines hit too few points
    - "Conjecture: no constant-query real LCCs"
    - "Preprint: random parabolas on an integer grid"
    - "Open: how large can dimension get?"
  glossary:
    - term: locally correctable code (LCC)
      meaning: A code in which any one symbol of a codeword can be repaired by reading a few other positions, even when a fraction of the received word is damaged.
      link: /research/locally-correctable-codes
    - term: query
      meaning: One position of the damaged word that the decoder is allowed to read; q-query means it reads q positions.
      link: https://en.wikipedia.org/wiki/Locally_decodable_code
    - term: block length and dimension
      meaning: The block length N is how many symbols are stored; the dimension d is how many independent numbers of information they carry.
      link: https://en.wikipedia.org/wiki/Linear_code
    - term: Reed-Muller code
      meaning: A code whose codewords are values of low-degree polynomials at every point of a space; the standard example of local correction over finite fields.
      link: https://en.wikipedia.org/wiki/Reed%E2%80%93Muller_code
    - term: finite field
      meaning: A finite set of numbers where you can add, subtract, multiply and divide, such as the integers modulo a prime.
      link: https://en.wikipedia.org/wiki/Finite_field
    - term: characteristic zero
      meaning: A field where adding 1 to itself never reaches 0, like the rationals, reals and complex numbers; finite fields have positive characteristic.
      link: https://en.wikipedia.org/wiki/Characteristic_%28algebra%29
    - term: Sylvester-Gallai theorem
      meaning: If finitely many points in the plane are not all on one line, some line passes through exactly two of them. Quantitative versions limit how many rich lines high-dimensional real point sets can have.
      link: https://en.wikipedia.org/wiki/Sylvester%E2%80%93Gallai_theorem
    - term: polynomial interpolation
      meaning: Recovering a polynomial of degree n from its values at n+1 distinct points.
      link: https://en.wikipedia.org/wiki/Polynomial_interpolation
    - term: Chinese remainder theorem
      meaning: If you know a number's remainders modulo several pairwise coprime numbers, exactly one number in the right range has those remainders; it lets you build numbers meeting many modular conditions at once.
      link: https://en.wikipedia.org/wiki/Chinese_remainder_theorem
    - term: quadratic curve
      meaning: A curve traced by a point whose coordinates are quadratic polynomials in a parameter, such as a parabola.
      link: https://en.wikipedia.org/wiki/Quadratic_function
    - term: computational complexity
      meaning: DARC's entry on what resources, such as time and space, computations need, and the open problems about it.
      link: /research/computational-complexity
  readFirst:
    - title: Locally decodable code (Wikipedia)
      url: https://en.wikipedia.org/wiki/Locally_decodable_code
      why: Definitions and the main bounds in plain terms.
    - title: Reed-Muller code (Wikipedia)
      url: https://en.wikipedia.org/wiki/Reed%E2%80%93Muller_code
      why: The finite-field construction the new paper departs from.
    - title: Dvir, Linear locally decodable codes, Lecture 9 (Princeton notes)
      url: https://www.cs.princeton.edu/~zdvir/LDCnotes/LDC9.pdf
      why: Where the conjecture was stated, with the 2-query proof for the complex numbers.
    - title: Dvir, Constant query LCCs over the reals (arXiv:2611.13281)
      url: https://arxiv.org/abs/2611.13281
      why: The 11-page preprint; unrefereed, but its introduction is readable.
raw:
  body: "A linear code $C\\subseteq\\mathbb R^N$ is a $(q,\\delta)$-LCC if there is a randomized decoder that, for every codeword $z$, every word $w$ within Hamming distance $\\delta N$ of $z$ and every coordinate $i$, outputs $z_i$ with probability at least $3/4$ as a linear combination $c_1w_{j_1}+\\dots+c_qw_{j_q}$ of $q$ queried coordinates (the indices and coefficients are drawn from a distribution depending only on $i$).\n\n**Question.** For fixed $q\\ge3$ and fixed $\\delta>0$, how large can the dimension $d=\\dim C$ be as a function of the block length $N$? Equivalently, what is the shortest length $N(d)$ of a linear $(q,\\delta)$-LCC over $\\mathbb R$ (or any field of characteristic zero) of dimension $d$?\n\nTwo parts. (a) *Existence:* is there, for some constant $q$ and $\\delta>0$, a family of linear $(q,\\delta)$-LCCs over $\\mathbb R$ of unbounded dimension? A preprint reports yes for every $q\\ge3$. (b) *Quantitative:* the preprint's dimension is only $(\\log N/\\log\\log N)^{\\lfloor(q-1)/2\\rfloor}$ up to constants, while the best upper bounds are $N^{1/2-1/1000}$ for $q=3$ and $O(N^{1-1/(q-1)}\\log N)$ in general. Does some constant $q$ allow dimension $N^{\\Omega(1)}$ over $\\mathbb R$, and what is the true exponent for each $q$?"
  verifySpec: "Route: expert review of the 11-page note. A reviewer should restate the scalar sampler (Lemma 2.1: integrality of the queried points from the Chinese remainder construction of B, and the fiber-counting bound P[X_j = x] <= m_j/S), the lift to r coordinates (Lemma 2.2: probability below 2/N per grid point) and the parameter count (dimension C(r+s, s), block length M^r with M of order r^(2q-1)), then check that the decoder is a valid LCC decoder under Definition 1.1 and does not contradict the known upper bounds on dimension for q = 3 and q >= 4 or the bounded-coefficient theorem (the note says its coefficients grow with r). A cheap computational check is to implement the sampler for small (q, r) and verify integrality, range and exact fiber sizes by brute force."
site:
  aiReviewed: true
---

# State of the art

**Known before November 2026.** There is no linear 1-LCC of growing dimension over any field. Over $\mathbb R$ and $\mathbb C$, Barak, Dvir, Wigderson and Yehudayoff (2011) showed that linear 2-LCCs have dimension bounded by a function of $\delta$ alone (a quantitative Sylvester-Gallai theorem), and Dvir, Saraf and Wigderson extended the rank-bound method (as summarized in the 2026 preprint). Ai, Dvir, Saraf and Wigderson (2014) showed that decoders whose coefficients are bounded by $K$ give dimension at most $O((qK/\delta)^4)$. For $q=3$ the dimension is at most $N^{1/2-1/1000}$ (Dvir, Saraf, Wigderson 2017), and for fixed $q\ge4$ at most $O(N^{1-1/(q-1)}\log N)$ over every field (Dvir, Gopi, Gu, Wigderson 2020), both as cited in the preprint. Dvir's 2016 notes conjectured that no constant-query LCC with growing dimension and constant $\delta$ exists over $\mathbb R$ or $\mathbb C$. According to the preprint, earlier constructions of real LCCs from low-degree polynomials (Amireddy, Behera, Paraashar, Srinivasan and Sudan, 2024, 2025) need a super-constant number of queries.

**Reported in November 2026 (unrefereed).** Dvir (arXiv:2611.13281, 9 November 2026, cs.CC and math.CO, 11 pages) reports that for every $q\ge3$ and $d\ge2$ there is a linear $(q,1/(8q))$-LCC over $\mathbb R$ of dimension $d$ and block length $N\le\exp(O_q(d^{1/s}\log d))$ with $s=\lfloor(q-1)/2\rfloor$, and says every step works over any field of characteristic zero, including $\mathbb Q$ and $\mathbb C$. The code evaluates polynomials of degree at most $s$ on an integer grid $[M]_0^r$; the decoder samples a random quadratic curve $\gamma(z)=P+zA+z^2B$ through the target grid point $P$, evaluates at $z=1/m_j$ for pairwise coprime integers $m_j$ of order $r$, chooses $B$ by the Chinese remainder theorem so that all queried points are integer grid points, and shows each grid point is queried with probability below $2/N$. The queried points all lie within an $\ell_\infty$ ball of radius $M/(12r)$. The decoding coefficients grow like $O(r^{q-1})$ and the decoder is sensitive to small real-valued noise. The note says the construction was found by ChatGPT Astra and that its author improved the presentation. This would contradict the 2016 conjecture, so part (a) is reported answered for $q\ge3$ but not accepted by experts; part (b) is untouched by the note.

**Not known either way.** Whether dimension polynomial in $N$ is possible over $\mathbb R$ for any constant $q$; the best exponent for $q=3$ and $q=4$; whether the $q=3$ case allows better than the $s=1$ bound $d\approx\log N/\log\log N$; whether noise-robust real LCCs exist; and the complex-number case beyond what the preprint's remark covers. Even over finite fields, polynomial-dimension LCCs with a fixed number of queries are not known, and the best lower bounds on length for $q\ge4$ are only polynomial.

# Applications

Few direct ones. Real-valued LCCs bear on error correction for numerical data and analog-style storage, but the reported construction has large decoding coefficients and tolerates only adversarial corruption of a few symbols, not small noise on all of them, so it is not a practical code. The value is theoretical: it tests which rank-bound and Sylvester-Gallai-type obstructions really limit codes over infinite fields, and the clustered query structure may interest authors studying spatially bunched errors, as the preprint suggests.

# Resolution criteria

For part (a): expert acceptance (peer review, or an independent re-derivation or formalization of the sampler lemmas and the code parameters) of a family of linear constant-query LCCs over $\mathbb R$ with unbounded dimension and constant $\delta$; if an error is found, the problem reverts to a plain open question with no credible claim. For part (b): a proof that settles the optimal growth of dimension in $N$ for some fixed $q\ge3$, either a construction with dimension $N^{\Omega(1)}$ or an upper bound matching a construction up to constants in the exponent.

# Rating rationale

Difficulty 55: the existence question is reported answered by an 11-page note with elementary-looking lemmas, which leaves the quantitative gap between polylogarithmic and polynomial dimension (open for $q\ge4$ even over finite fields), research-grade and active but without a consensus approach. Application value 8: no deployed system depends on real-valued LCCs and the reported decoder is noise-sensitive. Leverage 22: the answer reshapes how rank-bound and Sylvester-Gallai techniques are used in coding theory, a few results in one subfield.

# Plain explanation

Imagine a huge list of numbers stored with extra redundancy, so that if some entries get damaged you can still recover each original one. A locally correctable code does this by looking at only a few other entries. For lists built in a small counting system, like clock arithmetic, a simple method has been known for decades: the entries are secretly values along smooth curves, so a few healthy neighbours reveal the broken one.

For ordinary real numbers nobody had a method. Worse, geometry theorems showed that the simplest methods, based on straight lines, cannot work, and a leading researcher conjectured that no method with a fixed number of peeks exists at all.

On 9 November 2026 that researcher, Zeev Dvir, posted a short paper reporting that curved lines do the job, with a construction the paper says was found by an AI system. It is not yet checked by outside experts, so the conjecture stays listed as open here.

The question that remains is how efficient such codes can be. The reported codes store very little information for their size. Nobody knows how much better they can get.

# Student explanation

**Setup.** A linear code $C\subseteq\mathbb R^N$ of dimension $d$ is a $(q,\delta)$-LCC if any single coordinate of a codeword can be recovered, with probability at least $3/4$, as a fixed linear combination of $q$ randomly chosen coordinates of a received word in which up to $\delta N$ entries are wrong. The distribution of the $q$ positions depends only on the coordinate being repaired. The central quantity is how large $d$ can be as a function of $N$, for fixed $q$ and $\delta$.

**Finite fields.** Reed-Muller codes store values of polynomials of degree $s$ at all points of $\mathbb F^\ell$. To repair the value at $P$, take a random line through $P$, read $q=s+1$ other points, interpolate. This gives $d\approx(\log N)^{q-1}$.

**Why lines fail over $\mathbb R$.** In a finite set of real points, lines through a given point rarely contain two others. A quantitative Sylvester-Gallai theorem (Barak, Dvir, Wigderson, Yehudayoff, 2011) says a real configuration where each point has many lines with a third point has bounded dimension. So linear 2-LCCs over $\mathbb R$ have bounded dimension, and the same rank-bound method excludes decoders in which every pair of positions is queried together only a bounded number of times. A 2016 lecture note stated the conjecture that no constant-query LCC of growing dimension exists over $\mathbb R$ or $\mathbb C$. For $q=3$ the dimension is at most $N^{1/2-1/1000}$, and in general $O(N^{1-1/(q-1)}\log N)$.

**The claim.** Dvir's note (arXiv:2611.13281, 9 Nov 2026, unrefereed) reports a $(q,1/(8q))$-LCC over $\mathbb R$ of dimension $d$ and length $N\le\exp(O_q(d^{1/s}\log d))$ for every $q\ge3$, $s=\lfloor(q-1)/2\rfloor$. Take a grid $\{0,\dots,M-1\}^r$ and the values of polynomials of degree at most $s$. Replace lines by random parabolas $\gamma(z)=P+zA+z^2B$: $f\circ\gamma$ has degree at most $2s$, so $q\ge2s+1$ values determine it. For the parabola to hit grid points at $z=1/m_j$ one needs $B\equiv-m_jA\pmod{m_j^2}$ in each coordinate; pick $A$ uniformly and solve for $B$ with the Chinese remainder theorem. Then each query lands on any given grid point with probability below $2/N$, so a damaged set of size $N/(8q)$ is likely avoided. The $q$ queried points are all close to each other, unlike Reed-Muller; the note says this keeps the code far from the evenly spread structure that the earlier rank-bound obstructions need.

**What it costs and what is open.** Decoding coefficients grow like $r^{q-1}$ with $r$ about $d^{1/s}$, so the decoder is sensitive to small noise, and the dimension is only about $(\log N/\log\log N)^s$. Whether any constant $q$ allows dimension $N^{c}$ over the reals, and what the best exponent is, remains open (it is open even over finite fields). Until experts review the paper, DARC lists the problem as OPEN.
