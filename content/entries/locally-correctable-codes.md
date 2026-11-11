---
type: entry
slug: locally-correctable-codes
title: Locally correctable codes and the real-number barrier
field: complexity
kind: THEORY
status: ACTIVE
summary: Error-correcting codes where one damaged symbol is repaired from a few others. Reed-Muller codes do it over finite fields; over the reals it was believed impossible until a Nov 2026 preprint.
reliedOn: Local correction underlies program self-correction and probabilistically checkable proofs, and its limits (design-matrix rank bounds, Sylvester-Gallai-type theorems) are tools in combinatorial geometry and algebraic complexity.
dependsOn:
  - computational-complexity
references:
  - title: Dvir, Constant query LCCs over the reals (arXiv:2611.13281, 9 Nov 2026, preprint)
    url: https://arxiv.org/abs/2611.13281
    kind: paper
  - title: Barak, Dvir, Wigderson, Yehudayoff, Rank bounds for design matrices with applications to combinatorial geometry and locally correctable codes (arXiv:1009.4375)
    url: https://arxiv.org/abs/1009.4375
    kind: paper
  - title: Dvir, Saraf, Wigderson, Improved rank bounds for design matrices and a new proof of Kelly's theorem (arXiv:1211.0330)
    url: https://arxiv.org/abs/1211.0330
    kind: paper
  - title: Ai, Dvir, Saraf, Wigderson, Sylvester-Gallai type theorems for approximate collinearity (arXiv:1211.0331)
    url: https://arxiv.org/abs/1211.0331
    kind: paper
  - title: Janzer, Manohar, Reed-Muller Codes are Optimal Binary Linear 3-Query LCCs (arXiv:2611.03145, 2 Nov 2026, preprint)
    url: https://arxiv.org/abs/2611.03145
    kind: paper
  - title: "Dvir, Linear locally decodable codes, Lecture 9: LDCs and LCCs over R and C (Princeton course notes, Fall 2016)"
    url: https://www.cs.princeton.edu/~zdvir/LDCnotes/LDC9.pdf
    kind: docs
timeline:
  - date: 2010-09-22
    title: Rank bounds for design matrices; 2-query LCCs over C have bounded dimension
    body: Barak, Dvir, Wigderson and Yehudayoff posted a quantitative Sylvester-Gallai theorem and used it to show that infinite families of linear 2-query LCCs do not exist over the complex numbers (arXiv v1 date).
    source: https://arxiv.org/abs/1009.4375
  - date: 2026-11-02
    title: "Preprint: Reed-Muller codes optimal for binary linear 3-query LCCs"
    body: Janzer and Manohar report length at least 2^Omega(sqrt k) for binary linear 3-query LCCs, matching Reed-Muller up to constants in the exponent. Unrefereed.
    source: https://arxiv.org/abs/2611.03145
  - date: 2026-11-09
    title: Preprint reports constant-query LCCs over the reals
    body: Dvir presents linear (q, 1/(8q)) LCCs over the reals for every q >= 3, built from low-degree polynomials on an integer grid and random quadratic curves, and says the construction was found by ChatGPT Astra. Unrefereed; contradicts a conjecture recorded in his 2016 lecture notes.
    source: https://arxiv.org/abs/2611.13281
explainer:
  oneLine: Codes that repair one damaged symbol by peeking at a few others; easy over finite fields, believed impossible over the reals until a 2026 preprint.
  flow:
    - Redundant data lets damaged symbols be repaired
    - "Finite fields: repair via a random line"
    - "Reals: lines hit too few points"
    - "2026 preprint: curves on an integer grid"
    - Unrefereed; expert checking pending
  glossary:
    - term: error-correcting code
      meaning: A way of storing data with extra redundancy so the original can be recovered even if some symbols get damaged.
      link: https://en.wikipedia.org/wiki/Error_correction_code
    - term: codeword
      meaning: One of the valid strings of a code. A received word with some symbols damaged is compared to the nearest codeword.
      link: https://en.wikipedia.org/wiki/Error_correction_code
    - term: linear code
      meaning: "A code whose codewords form a vector space: adding two codewords or scaling one gives another codeword. Its dimension is how many numbers of information it stores."
      link: https://en.wikipedia.org/wiki/Linear_code
    - term: locally decodable code
      meaning: A code where any single piece of the original data can be recovered by reading only a few positions of a damaged codeword.
      link: https://en.wikipedia.org/wiki/Locally_decodable_code
    - term: Reed-Muller code
      meaning: A code whose codewords are the lists of values of low-degree polynomials at every point of a space; the standard example of local correction.
      link: https://en.wikipedia.org/wiki/Reed%E2%80%93Muller_code
    - term: finite field
      meaning: A finite set of numbers where you can add, subtract, multiply and divide, such as the integers modulo a prime.
      link: https://en.wikipedia.org/wiki/Finite_field
    - term: characteristic (of a field)
      meaning: The number of times you must add 1 to itself to reach 0; it is a prime for finite fields and 'zero' for the reals, rationals and complex numbers.
      link: https://en.wikipedia.org/wiki/Characteristic_%28algebra%29
    - term: polynomial interpolation
      meaning: Recovering a polynomial of degree n from its values at n+1 distinct points, as a line is fixed by two points and a parabola by three.
      link: https://en.wikipedia.org/wiki/Polynomial_interpolation
    - term: Sylvester-Gallai theorem
      meaning: If finitely many points in the plane are not all on one line, some line passes through exactly two of them. Quantitative versions bound how many 'rich' lines high-dimensional point sets can have.
      link: https://en.wikipedia.org/wiki/Sylvester%E2%80%93Gallai_theorem
    - term: Chinese remainder theorem
      meaning: If you know a number's remainders modulo several pairwise coprime numbers, exactly one number in the right range has those remainders; it lets you build numbers meeting many modular conditions at once.
      link: https://en.wikipedia.org/wiki/Chinese_remainder_theorem
    - term: quadratic curve
      meaning: A curve traced by a point whose coordinates are quadratic polynomials in a parameter, such as a parabola.
      link: https://en.wikipedia.org/wiki/Quadratic_function
  readFirst:
    - title: Reed-Muller code (Wikipedia)
      url: https://en.wikipedia.org/wiki/Reed%E2%80%93Muller_code
      why: The standard finite-field construction behind local correction.
    - title: Locally decodable code (Wikipedia)
      url: https://en.wikipedia.org/wiki/Locally_decodable_code
      why: Definitions and the main known bounds in plain terms.
    - title: Sylvester-Gallai theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Sylvester%E2%80%93Gallai_theorem
      why: The geometric fact whose quantitative versions block lines over the reals.
    - title: Dvir, Constant query LCCs over the reals (arXiv:2611.13281)
      url: https://arxiv.org/abs/2611.13281
      why: The preprint; unrefereed, with an introduction that explains the background.
raw:
  body: "## Local correction\n\nA **linear code** is a subspace $C\\subseteq\\mathbb F^N$: its elements are codewords of $N$ symbols, and its **dimension** $d$ is the number of independent symbols of information stored. A code is a **$(q,\\delta)$-locally correctable code** (LCC) if, for any codeword $z$ and any received word $w$ that differs from $z$ in at most $\\delta N$ places, every single symbol $z_i$ can be recovered with probability at least $3/4$ by reading only $q$ random positions of $w$ and combining them (over infinite fields the combination is required to be a linear one). A **locally decodable code** (LDC) is the weaker notion in which only the message symbols must be recoverable this way. For $q=1$ nothing of growing dimension exists over any field, so the interesting regime is a fixed $q\\ge2$, with $N$ growing.\n\n## Reed-Muller codes\n\nOver a finite field $\\mathbb F$, let $N=|\\mathbb F|^\\ell$ and let the codeword of a polynomial $f$ of total degree at most $s$ in $\\ell$ variables be its list of values at all points of $\\mathbb F^\\ell$. To recover $f(P)$, pick a random line $L$ through $P$ and read $f$ at $q=s+1$ other points of $L$. On $L$ the function $f$ is a univariate polynomial of degree at most $s$, so interpolation returns $f(P)$. Every point of $\\mathbb F^\\ell$ lies on many lines through $P$ that cover the rest of the space evenly, so a small set of corrupted positions rarely meets the chosen line. For fixed $q$ the dimension is about $(\\log N)^{q-1}$.\n\n## Known bounds over finite fields\n\nAs summarized in Dvir's 2026 note, for $q=2$ the length must be exponential in the dimension (Goldreich, Karloff, Schulman and Trevisan 2006; Kerenidis and de Wolf 2004), and for linear $q=3$ codes Kothari and Manohar (2024) and Yankovitz (2024) proved polylogarithmic upper bounds on the dimension over fixed finite fields. A 2 November 2026 preprint by Janzer and Manohar (arXiv:2611.03145, unrefereed) shows that a binary linear 3-query LCC of dimension $k$ has length at least $2^{\\Omega(\\sqrt k)}$, so Reed-Muller is optimal there up to constants in the exponent. For larger fixed $q$ the best upper bounds on dimension are only polynomial in $N$.\n\n## The real-number barrier\n\nReed-Muller needs a finite field. Over $\\mathbb R$ one works on a finite set of points, and a random line through a point rarely contains other points of the set. Barak, Dvir, Wigderson and Yehudayoff (STOC 2011) proved a quantitative Sylvester-Gallai theorem: if every point of a configuration in $\\mathbb C^k$ lies on lines with a third point for a $\\delta$ fraction of the other points, the configuration spans dimension $O(1/\\delta^2)$. Applied to decoder queries this shows that 2-query LCCs over characteristic zero have bounded dimension, and, as the 2026 note summarizes, the design-matrix rank bounds of Barak et al. and Dvir, Saraf and Wigderson also bound the dimension of any code in which every pair of positions appears together in only a bounded number of query tuples. Ai, Dvir, Saraf and Wigderson showed that decoders with uniformly bounded coefficients also give bounded dimension. Dvir's 2016 lecture notes recorded the conjecture that no constant-query LCC with growing dimension exists over $\\mathbb R$ or $\\mathbb C$; for $q=3$ a bound $d\\le N^{1/2-1/1000}$ was known, and for general $q$ one of order $N^{1-1/(q-1)}\\log N$.\n\n## The November 2026 preprint\n\nDvir (arXiv:2611.13281, 9 November 2026, unrefereed) reports that for every $q\\ge3$ and $d\\ge2$ there is a linear $(q,1/(8q))$-LCC over $\\mathbb R$ of dimension $d$ and block length $N\\le\\exp(O_q(d^{1/s}\\log d))$, where $s=\\lfloor(q-1)/2\\rfloor$. The code evaluates polynomials of degree at most $s$ on an integer grid, and the decoder uses random *quadratic curves* through the target point that meet the grid in $q$ other points, instead of lines. The note says the construction was found by ChatGPT Astra and that its author improved the presentation. The dimension is only polylogarithmic in $N$, the decoder's coefficients grow with the dimension, and the decoding is sensitive to small real-valued noise. The open directions are better dimension, noise-robust real LCCs, and independent confirmation.\n\n## Why it matters\n\nLocal correction was introduced for program self-correction and probabilistically checkable proofs. The rank-bound methods developed to rule out real LCCs were also pushed into incidence geometry. Dvir (2010) linked lower bounds for locally self-correctable codes to matrix rigidity, and Sylvester-Gallai-type rank bounds are also used in identity testing of depth-3 arithmetic circuits; both are tracked elsewhere on this site."
  student: "**Error-correcting codes.** To protect $d$ numbers against damage, store $N>d$ numbers instead, chosen so that a few wrong entries can be detected and fixed. If the stored vectors form a subspace of $\\mathbb F^N$ (a *linear code*, a notion from your linear algebra course), $d$ is its dimension. Usually repairing one entry means reading everything. A *locally correctable code* (LCC) lets you repair any single entry from only $q$ other entries, chosen at random, even if up to a fraction $\\delta$ of all entries are wrong. Fewer queries is better; the price is more redundancy, a longer $N$ for the same $d$.\n\n**The line picture (Reed-Muller).** Over a *finite field* (arithmetic modulo a prime $p$), store the value of a polynomial $f$ of degree at most $s$ at every point of a grid in $\\ell$ dimensions. To repair the entry at $P$, pick a random line through $P$ and read $f$ at $s+1$ other points on it. Along the line $f$ is an ordinary degree-$s$ polynomial of one variable, and $s+1$ values determine it (two points fix a line, three fix a parabola), so you can evaluate it at $P$. A random line is unlikely to touch the few damaged entries, because the many lines through $P$ cover the other points evenly.\n\n**Why the reals were believed to be hard.** With real numbers the table is a finite set of points in $\\mathbb R^k$, and a random line through one point almost never passes through a second table point, let alone $s+1$. Theorems of Sylvester-Gallai type (Barak, Dvir, Wigderson and Yehudayoff, 2011) say that a high-dimensional real point set cannot have, for most points, many lines containing three or more of the points. That ruled out 2-query codes over $\\mathbb R$ and $\\mathbb C$ with growing dimension, and further results blocked decoders with bounded coefficients or with queries spread so that each pair of positions is read together only a few times. A 2016 lecture note conjectured that no constant-query LCC with growing dimension exists over $\\mathbb R$ or $\\mathbb C$.\n\n**The 2026 preprint.** Dvir (arXiv:2611.13281, unrefereed) reports that for every $q\\ge3$ such codes do exist, with dimension about $(\\log N)^{\\lfloor(q-1)/2\\rfloor}$ and error fraction $1/(8q)$. Instead of lines it uses random *quadratic curves* $\\gamma(z)=P+zA+z^2B$ through $P$ in an integer grid. Reading $f$ at $q\\ge2s+1$ points of the curve fixes the degree-$2s$ polynomial $f(\\gamma(z))$, so $f(P)$ follows. The hard part is to make the curve hit grid points with integer coordinates. Evaluating at $z=1/m$ for an integer $m$ gives $P+A/m+B/m^2$, which is an integer exactly when $B\\equiv-mA\\pmod{m^2}$. Choosing several coprime values of $m$, a random $A$ and then $B$ by the Chinese remainder theorem makes all $q$ points integer grid points while each one is spread almost uniformly over the grid, so a small damaged set is rarely hit. The note says the construction was found by an AI system, ChatGPT Astra.\n\n**Caveats.** The decoding weights grow with the dimension, so small rounding noise would destroy the repair, and the dimension is only polylogarithmic in $N$. Nobody outside the author has yet reported checking the proof."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

When you save data you can add extra, redundant information so that a few damaged pieces can be repaired. A QR code works this way, and so does a scratched disc that still plays. The usual repair reads the whole thing. A locally correctable code is cleverer: to fix one damaged piece you look at only a handful of other pieces, however huge the file is.

Picture a long list of numbers that all come from one smooth curve. If one number is wrong, you can look at a few others on the curve nearby and work out what the wrong one should have been, the way three points pin down a parabola. This trick is known for lists made from numbers in a small, finite counting system, like clock arithmetic.

Ordinary decimal numbers are different. For decades, theorems about points and straight lines suggested that the trick cannot work for them: there are not enough lines that pass through several points at once. Experts even wrote down a conjecture that it is impossible.

In November 2026 a preprint, a paper not yet checked by other experts, reported that bending the lines into curves gets around the obstacle. If experts confirm it, one conjecture falls. Even then it only works for a small amount of information and is easily upset by tiny rounding errors, so it is a result about what is possible, not a tool for your phone.
