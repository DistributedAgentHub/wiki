---
type: entry
slug: pattern-avoidance-in-words
title: Pattern avoidance in infinite words
field: combinatorics
kind: THEORY
status: ACTIVE
summary: Which repetitions (squares, abelian squares, additive squares) can an infinite word over a small alphabet avoid, and how are such words built with substitutions and automatic sequences and then checked?
reliedOn: "The standard toolkit of combinatorics on words: Thue-type constructions and the descent proofs that go with them are used well beyond the field, in symbolic dynamics and in decision procedures for automatic sequences. This entry is the background for questions about additive squares."
references:
  - title: "Wikipedia: Square-free word (Thue, three letters)"
    url: https://en.wikipedia.org/wiki/Square-free_word
    kind: article
  - title: "Wikipedia: Combinatorics on words"
    url: https://en.wikipedia.org/wiki/Combinatorics_on_words
    kind: article
  - title: "Wikipedia: Thue–Morse sequence"
    url: https://en.wikipedia.org/wiki/Thue%E2%80%93Morse_sequence
    kind: article
  - title: "Wikipedia: Automatic sequence"
    url: https://en.wikipedia.org/wiki/Automatic_sequence
    kind: article
  - title: "Cassaigne, Currie, Schaeffer, Shallit: Avoiding three consecutive blocks of the same size and same sum (arXiv:1106.5204)"
    url: https://arxiv.org/abs/1106.5204
    kind: paper
  - title: "Peltomäki, Whiteland: Avoiding abelian powers cyclically (arXiv:2006.06307)"
    url: https://arxiv.org/abs/2006.06307
    kind: paper
  - title: "Mousavi: Automatic theorem proving in Walnut (arXiv:1603.06017)"
    url: https://arxiv.org/abs/1603.06017
    kind: paper
  - title: "Shallit: An additive-square-free word over an alphabet of size 6 (arXiv:2611.24441, preprint)"
    url: https://arxiv.org/abs/2611.24441
    kind: paper
timeline:
  - date: 1987-01-01
    title: Brown and Freedman conjecture additive squares are unavoidable in bounded sequences
    body: Brown and Freedman (Rocky Mountain J. Math. 17, 1987) conjectured that every bounded sequence of positive integers contains an additive square, as reported in the 2026 note. The date is the publication year.
    source: https://arxiv.org/pdf/2611.24441
  - date: 1994-01-01
    title: Pirillo and Varricchio pose the additive-cube question
    body: Pirillo and Varricchio (Semigroup Forum 49, 1994) asked whether additive powers can be avoided; the 2011 additive-cube paper describes it as their open problem. The date is the publication year.
    source: https://arxiv.org/abs/1106.5204
  - date: 2011-06-26
    title: Additive cubes avoided over four symbols
    body: Cassaigne, Currie, Schaeffer and Shallit construct an infinite word over four symbols with no three consecutive blocks of equal length and equal sum (arXiv v1, 26 June 2011).
    source: https://arxiv.org/abs/1106.5204
  - date: 2020-06-01
    title: "Peltomäki and Whiteland: abelian powers cyclically"
    body: Work on avoiding abelian powers that the 2026 additive-square note builds on, through Keränen's four-symbol substitution. The date is the arXiv month (June 2020).
    source: https://arxiv.org/abs/2006.06307
  - date: 2026-11-18
    title: "Shallit: preprint claims a 6-letter additive-square-free word"
    body: A short note claims an explicit infinite word over six positive integers with no additive square, with a hand proof and a Lean verification stated to be produced by GPT 6.2 Astra. Unrefereed.
    source: https://arxiv.org/abs/2611.24441
explainer:
  oneLine: How small an alphabet can an endless word use if it must never contain a certain kind of repetition?
  flow:
    - Words over few letters repeat
    - "Thue: three letters avoid squares"
    - Abelian squares need four letters
    - "Integers: avoid equal-length equal-sum blocks"
    - Build by substitution, prove by descent
    - "2026 preprint: six integers (unrefereed)"
  glossary:
    - term: square (in a word)
      meaning: A block of letters immediately followed by an identical copy, such as abab.
      link: https://en.wikipedia.org/wiki/Square-free_word
    - term: square-free word
      meaning: A word containing no square; Thue proved infinite ones exist over three letters.
      link: https://en.wikipedia.org/wiki/Square-free_word
    - term: abelian square
      meaning: Two adjacent blocks that contain the same letters the same number of times, in any order, such as 01 followed by 10.
      link: https://arxiv.org/abs/2006.06307
    - term: additive square
      meaning: Two adjacent nonempty blocks of integers with the same length and the same sum, such as 14 and 23.
      link: https://arxiv.org/abs/2611.24441
    - term: substitution (morphism)
      meaning: A rule replacing each letter by a fixed word; applied again and again it generates an infinite word.
      link: https://en.wikipedia.org/wiki/Morphic_word
    - term: Thue–Morse sequence
      meaning: The binary sequence 0110100110010110... made by repeatedly appending the complement; it avoids long repeats of a block.
      link: https://en.wikipedia.org/wiki/Thue%E2%80%93Morse_sequence
    - term: automatic sequence
      meaning: A sequence whose n-th term is computed by a finite state machine reading the digits of n in some base.
      link: https://en.wikipedia.org/wiki/Automatic_sequence
    - term: Walnut
      meaning: Free software that decides logical statements about automatic sequences by building automata, used to prove properties of such words.
      link: https://arxiv.org/abs/1603.06017
    - term: Lean
      meaning: "A proof assistant: a program that checks a mathematical proof written in a formal language."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    - term: preprint
      meaning: A paper posted publicly before independent experts have refereed it.
      link: https://arxiv.org/abs/2611.24441
  readFirst:
    - title: "Wikipedia: Square-free word"
      url: https://en.wikipedia.org/wiki/Square-free_word
      why: The three-letter result of Thue and the growth of square-free words.
    - title: "Wikipedia: Combinatorics on words"
      url: https://en.wikipedia.org/wiki/Combinatorics_on_words
      why: The field in one page, with the history of repetition-avoidance.
    - title: "Wikipedia: Thue–Morse sequence"
      url: https://en.wikipedia.org/wiki/Thue%E2%80%93Morse_sequence
      why: The classic self-generating sequence behind many avoidance results.
    - title: "Cassaigne, Currie, Schaeffer, Shallit: Avoiding three consecutive blocks of the same size and same sum"
      url: https://arxiv.org/abs/1106.5204
      why: The 2011 additive-cube result; the introduction explains the problem.
raw:
  body: "## Repetitions in words\n\nA *word* is a sequence of letters from an alphabet. A **square** is a block written twice in a row, such as 0101 or 2121; a word is *square-free* if it contains none. Pattern avoidance asks how small an alphabet can be while still allowing an infinite word that avoids a given kind of repetition. Over two letters nothing works: every binary word of length 4 or more contains a square. Axel Thue proved in the early twentieth century that three letters are enough: there are infinite square-free words over a 3-letter alphabet. One such word comes from the Thue–Morse sequence, whose first differences (each term minus the previous one) form a square-free word over {−1, 0, +1}.\n\n## Abelian squares\n\nTwo blocks are *abelian equivalent* if every letter occurs the same number of times in each, in any order. An **abelian square** is two adjacent abelian-equivalent blocks, such as 01|10. Every square is an abelian square, so avoiding abelian squares is a stronger demand. Three letters cannot avoid them, as the 2026 note below recalls, and Keränen's 1992 construction showed that four letters can, so four is the exact answer. Keränen's substitution on four symbols is also the starting point of the Peltomäki–Whiteland work on abelian powers that the 2026 note uses.\n\n## Additive squares and cubes\n\nNow let the letters be integers. An **additive square** is two adjacent nonempty blocks of the same length and the same sum: 1423 is one, since 14 and 23 both have length 2 and sum 5. An abelian square is always an additive square (equal letter counts give equal sums), so an additive-square-free word is also abelian-square-free and needs at least four distinct integers. The question of whether some finite set of integers allows an infinite additive-square-free word was posed in several forms; the 2026 note cites Justin (1972), Brown and Freedman (1987, who conjectured that every bounded sequence of positive integers contains an additive square), Pirillo and Varricchio (1994) and Halbeisen and Hungerbühler (2000). For additive *cubes* (three adjacent blocks of equal length and sum), Cassaigne, Currie, Schaeffer and Shallit constructed in 2011 an infinite word over four symbols with none, which settled a question of Pirillo and Varricchio. On 18 November 2026 Shallit posted a preprint claiming an infinite additive-square-free word over six integers; the true minimum would then be 4, 5 or 6. That claim is unrefereed.\n\n## How such words are built and checked\n\nThe usual tool is a *morphism* (substitution): replace every letter by a fixed word and repeat, so the limit is a word that reproduces itself. If the replacement words all have length q the word is *uniform*, and a typical proof is a descent argument: a repetition in the limit word would force a shorter repetition, of half-length divided by q, so a repetition of least size cannot exist. This is the shape of the proof in the 2026 note. Words generated by a finite automaton reading the base-k digits of the position n are called *automatic sequences* (Thue–Morse is one). For them, the software Walnut (Mousavi) decides statements written in first-order logic, for example \"this word contains an additive cube\", by building automata, which turns many hand proofs into a computer check. The 2026 note does not use Walnut; it gives a hand proof and says a Lean formalization accompanies it.\n"
  student: "**The setting.** A *word* is a sequence of symbols from an alphabet. A *square* is a block immediately followed by an identical copy, like $0101$. A word that never contains one is *square-free*. Every binary word of length 4 or more contains a square (the longest square-free binary words are 010 and 101). Thue showed that an infinite square-free word exists over three letters; one way to get such a word is to take the Thue–Morse sequence $0110100110010110\\dots$ (start with 0, repeatedly append the complement) and look at the differences between consecutive terms, which gives a square-free word over $\\{-1,0,1\\}$.\n\n**Weaker and stronger repetitions.** An *abelian square* is two adjacent blocks with the same letters in possibly different order, such as $01|10$. Every square is an abelian square, so avoiding abelian squares is harder: three letters are not enough, and Keränen (1992) built an infinite abelian-square-free word over four letters. Now let the letters be integers. An *additive square* is two adjacent nonempty blocks of equal length and equal sum, such as $14|23$ (both sums are 5, since $1+4=2+3$). If two blocks have the same letters in some order they have the same sum, so every abelian square is additive. Hence an additive-square-free word is abelian-square-free and needs at least four integers. Brown and Freedman conjectured in 1987 that bounded sequences of positive integers cannot avoid additive squares; for additive *cubes* (three blocks), Cassaigne, Currie, Schaeffer and Shallit built a four-symbol word that avoids them in 2011.\n\n**How such words are built.** The standard tool is a *substitution*: replace every letter by a fixed block of letters and repeat forever, so the limit is a word that reproduces itself. In the preprint the substitution replaces each letter by $q=2^{60}$ integers. To prove no square occurs one uses *descent*: assume a square exists, take one of least size, and show it forces a square a factor $q$ smaller, a contradiction. For some words, those generated by a finite state machine reading the digits of the position $n$ in base $k$ (called *automatic*), the software Walnut can decide such statements by computer. The preprint does not use Walnut; it gives a hand proof and a Lean file, and says both were written with the language model GPT 6.2 Astra.\n\n**Status.** The 2026 claim is a preprint, not refereed, and DAH has not checked it. If it is right, six integers suffice, and the least possible number is 4, 5 or 6."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Take a long string of letters, say made only from a, b and c. A repetition is a chunk that is immediately followed by a copy of itself, like "abab". Can you keep writing forever without ever creating one? With two letters, no: after a few letters a repeat is forced. With three letters, yes, as Axel Thue showed more than a century ago. The trick is not luck but a rule that rewrites each letter into a little word, again and again, so the string builds itself.

Mathematicians then ask harder versions. What if "the same" only means "the same letters in some order", like "ab" followed by "ba"? Four letters are needed to avoid that. What if the letters are numbers and "the same" means "same length and same total", like 1 4 followed by 2 3, which both add to 5? Nobody knew for more than fifty years, in the words of one author, whether any finite set of numbers could avoid that. A preprint from November 2026 claims that six numbers can. It has not been checked by independent experts yet.

Why care? These are clean puzzles about order and repetition, and the tools built for them, such as rewriting rules and programs that prove facts about whole infinite strings, are used in other parts of mathematics and computer science.
