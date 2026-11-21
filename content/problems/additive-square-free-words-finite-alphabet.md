---
type: problem
slug: additive-square-free-words-finite-alphabet
title: Additive-square-free infinite words over a finite set of integers
entry: pattern-avoidance-in-words
status: OPEN
origin: Justin (1972); Brown and Freedman (1987); Pirillo and Varricchio (1994); Halbeisen and Hungerbühler (2000), as cited in the 2026 preprint
ratings:
  difficulty: 45
  applicationValue: 50
  leverage: 18
verification:
  route: LEAN
sources:
  - title: "Shallit: An additive-square-free word over an alphabet of size 6 (arXiv:2611.24441, preprint)"
    url: https://arxiv.org/abs/2611.24441
  - title: Shallit, full text (PDF)
    url: https://arxiv.org/pdf/2611.24441
  - title: Shallit, HTML version of v1
    url: https://arxiv.org/html/2611.24441v1
  - title: "Cassaigne, Currie, Schaeffer, Shallit: Avoiding three consecutive blocks of the same size and same sum (arXiv:1106.5204)"
    url: https://arxiv.org/abs/1106.5204
  - title: "Peltomäki, Whiteland: Avoiding abelian powers cyclically (arXiv:2006.06307)"
    url: https://arxiv.org/abs/2006.06307
timeline:
  - date: 1987-01-01
    title: "Brown and Freedman: conjecture for bounded sequences"
    body: They conjectured that every bounded sequence of positive integers contains an additive square (pages 595-596 of their paper, as cited in the 2026 note).
    source: https://arxiv.org/pdf/2611.24441
  - date: 2011-06-26
    title: Additive cubes avoided over four symbols
    body: Cassaigne, Currie, Schaeffer and Shallit construct an infinite word over four symbols with no additive cube.
    source: https://arxiv.org/abs/1106.5204
  - date: 2026-11-18
    title: "Shallit: preprint claims a six-letter additive-square-free word"
    body: Claims an explicit infinite word over six positive integers, with a hand proof and a Lean verification said to be written by GPT 6.2 Astra. The note leaves open whether 4 or 5 integers suffice. Unrefereed.
    source: https://arxiv.org/abs/2611.24441
explainer:
  oneLine: Can an endless string of whole numbers avoid two adjacent chunks of equal length and equal sum? A 2026 preprint says yes, with six numbers.
  flow:
    - Can integers avoid equal-sum adjacent blocks?
    - At least four needed (abelian squares)
    - Cubes avoided over four symbols (2011)
    - "Preprint: six integers by substitution"
    - Claimed Lean check, not rebuilt by DAH
    - "Open: is it 4, 5 or 6?"
  glossary:
    - term: additive square
      meaning: Two adjacent nonempty blocks of integers with equal length and equal sum, such as 14 followed by 23.
      link: https://arxiv.org/abs/2611.24441
    - term: abelian square
      meaning: Two adjacent blocks with the same letters in any order; every abelian square is an additive square.
      link: https://arxiv.org/abs/2006.06307
    - term: additive cube
      meaning: Three adjacent blocks with the same length and the same sum, avoidable over four symbols (2011).
      link: https://arxiv.org/abs/1106.5204
    - term: prefix sum
      meaning: The total of the first n terms of a sequence; block sums are differences of prefix sums.
      link: https://en.wikipedia.org/wiki/Prefix_sum
    - term: substitution (morphism)
      meaning: A rule replacing each letter by a fixed block of letters; iterating it builds an infinite word.
      link: https://en.wikipedia.org/wiki/Morphic_word
    - term: descent argument
      meaning: A proof that assumes a smallest counterexample exists and shows it implies a smaller one, which is impossible.
      link: https://en.wikipedia.org/wiki/Proof_by_infinite_descent
    - term: Walnut
      meaning: Software that decides statements about automatic sequences; not used in the 2026 note.
      link: https://arxiv.org/abs/1603.06017
    - term: Lean
      meaning: "A proof assistant: a program that checks a mathematical proof written in a formal language."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    - term: preprint
      meaning: A paper posted publicly before independent experts have refereed it.
      link: https://arxiv.org/abs/2611.24441
  readFirst:
    - title: "Shallit: An additive-square-free word over an alphabet of size 6"
      url: https://arxiv.org/abs/2611.24441
      why: The 2026 preprint; the introduction and Section 8 state the problem and what is open.
    - title: "Cassaigne, Currie, Schaeffer, Shallit: Avoiding three consecutive blocks of the same size and same sum"
      url: https://arxiv.org/abs/1106.5204
      why: The 2011 cube result and how it was found.
    - title: "Wikipedia: Square-free word"
      url: https://en.wikipedia.org/wiki/Square-free_word
      why: Gentle background on avoiding repetitions in words.
raw:
  stateOfArt: "**Open as far as the accepted literature goes; one unrefereed claim of existence with $k\\le 6$.** Cassaigne, Currie, Schaeffer and Shallit (2011) showed that additive *cubes* can be avoided over four symbols, which is the nearest refereed-literature result DAH found. On 18 November 2026 Shallit posted arXiv:2611.24441 (v1), a short note whose abstract describes it as answering a problem open for more than 50 years: it gives an explicit infinite word over six positive integers with no additive square. The word is built in two steps, an auxiliary word obtained by iterating a substitution with blocks of length $q=2^{60}$ and a descent argument (a square would give one of half-length divided by $q$), then an encoding through a four-symbol word from Keränen's substitution using a result of Peltomäki and Whiteland on abelian squares. The note says it was almost entirely written by GPT 6.2 Astra, that the author takes full responsibility for its correctness, and that a Lean verification, also produced by that model, is available as a zip file. The note itself says the optimal alphabet size is 4, 5 or 6 and that it remains to determine which. If the construction is correct it contradicts the Brown–Freedman conjecture as the note quotes it, although the note does not say so explicitly. DAH has read the full text but has not checked the proofs, downloaded the Lean project or re-run anything. The status stays OPEN."
  student: "**The question.** Let $A$ be a finite set of integers and $x=x_0x_1x_2\\dots$ an infinite word over $A$. An *additive square* in $x$ is two adjacent nonempty blocks of the same length $h$ and the same sum: $x_n+\\dots+x_{n+h-1}=x_{n+h}+\\dots+x_{n+2h-1}$. For example 1423 is one, since $1+4=2+3$. Is there a finite $A$ and an $x$ with no additive square, and what is the least size of such an $A$?\n\n**What is known.** If two blocks contain the same letters in a different order (an abelian square) their sums agree, so every abelian square is additive. Three letters cannot avoid abelian squares, so any additive-square-free word needs at least four integers. Brown and Freedman (1987) conjectured that every bounded sequence of positive integers contains an additive square, which would have made the answer no. The problem was also posed by Justin (1972), Pirillo and Varricchio (1994) and Halbeisen and Hungerbühler (2000), as the 2026 note cites them. For additive *cubes* (three adjacent blocks), Cassaigne, Currie, Schaeffer and Shallit built a word over four symbols avoiding them in 2011.\n\n**The 2026 claim.** Shallit's arXiv note 2611.24441 gives an explicit word over six positive integers. In outline: build an auxiliary word $w$ as the fixed point of a substitution that turns each letter into a block of $q=2^{60}$ integers, whose residues modulo a fixed number are arranged so that the start, middle and end of any square must sit at the same offset in their blocks. The sums then give a square in $w$ of half-length $h/q$, contradicting minimality (descent). Then encode $w$ into six values using a four-symbol word of Keränen's, which has no adjacent abelian-equivalent blocks of the relevant lengths, so a square in the final word would give a square in $w$. The six values are huge numbers built from $L=2\\cdot85^{11}$ and $2^{58}$.\n\n**Why DAH is careful.** The proof is short but dense, and the note says it was almost entirely written by GPT 6.2 Astra; the author says he takes responsibility for it. A Lean verification is said to be available, but DAH has not downloaded or built it, and has not re-run any check. A Lean theorem is only as good as its statement, so the statement has to be compared with the definition above. The note itself says the least number of integers is 4, 5 or 6, and leaves open which.\n\n**Try it.** In Python, write a function that tests a finite list for an additive square by prefix sums (compare $S(n+h)-S(n)$ with $S(n+2h)-S(n+h)$ for all $n,h$). Search by backtracking for the longest word over three, four or five small integers that has none, and see how long it can get."
site:
  aiReviewed: true
---

An **additive square** in a word of integers is two adjacent nonempty blocks of equal length and equal sum (for example 1423, since $1+4=2+3$). **Is there an infinite word over a finite set of integers with no additive square, and if so what is the least size $k$ of such a set?** Every abelian square is an additive square and three letters cannot avoid abelian squares, so $k\ge 4$ whenever it exists. Brown and Freedman (1987) conjectured that every bounded sequence of positive integers contains an additive square, which would make the answer "no".

# Applications

None foreseeable. The question concerns the structure of integer sequences; methods for building and machine-checking such words (substitutions, automatic sequences, Walnut, Lean) are reused elsewhere in combinatorics on words.

# Resolution criteria

For existence, a proof that is accepted by experts or published after refereeing, or a machine-checked proof whose statement matches the definition of additive square above (adjacent nonempty blocks of equal length and equal sum) for an infinite word over a finite set of integers. For the minimum alphabet size, an additive-square-free word over 4 or 5 integers together with a proof that fewer do not suffice.

# Rating rationale

Rated against the accepted literature, not the unrefereed claim. Difficulty 45: a question open since the 1970s whose existence part a 2026 preprint says is now answered, with the exact minimum (4, 5 or 6) still unknown. Application value 3: no foreseeable practical use. Leverage 18: it matters for additive Ramsey-type questions about bounded sequences in one subfield, and little else depends on the answer.

# Verification

The note says the construction has a Lean verification, also produced by GPT 6.2 Astra, in a zip file hosted on the author's university page (the address is in Section 9 of the note; DAH did not open it). A verifier unzips it, runs `sh check.sh`, and confirms that the build succeeds with no `sorry` and only the standard axioms (`#print axioms`), and that the main theorem named in the note, `AddSquare.Six.six_letter_counterexample` in `AdditiveSquare.lean`, states exactly this: an infinite word over six positive integers such that no two adjacent nonempty blocks have equal length and equal sum. The definitions of the word (the alphabet, the 85-symbol word, the substitution, the labelling rule) and of "additive square" must be read against Section 2 of the note, since a Lean theorem can be true of a weaker object than the one claimed. A hand review of Sections 3 to 6 of the note is the independent check.

# Plain explanation

Write numbers in a row forever, using only a few different values, say 1, 2, 3, 4. Look for two chunks side by side that are the same length and add up to the same total. For example 1 4 2 3: the chunk 1 4 and the chunk 2 3 each have two numbers and each add to 5. Mathematicians call that an additive square. The question is whether you can keep going forever using only a fixed, finite set of values without ever creating one.

It is a hard question because there are so many ways for totals to match by accident. Several researchers asked versions of it between 1972 and 2000. One of them conjectured the answer is no for any bounded sequence of positive numbers.

On 18 November 2026 Jeffrey Shallit posted a short note claiming an endless string using just six numbers that never creates an additive square. He calls the problem open for more than 50 years. The note says it was almost entirely written by an AI model, GPT 6.2 Astra, with a computer-checkable proof in the Lean language that the same model wrote. It is not yet checked by independent experts, and DAH has not checked it either. Even if it holds up, nobody knows whether four or five numbers would be enough; at least four are needed.
