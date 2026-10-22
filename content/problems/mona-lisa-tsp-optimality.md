---
type: problem
slug: mona-lisa-tsp-optimality
title: "Mona Lisa TSP (100,000 cities): shorter tour than 5,757,191 or a proof of optimality"
entry: mip-solvers-cutting-planes
status: OPEN
origin: Mona Lisa TSP, University of Waterloo TSP site
prize: USD 1,000 offered for the first tour shorter than 5,757,191 (Cook's TSP site)
ratings:
  difficulty: 52
  applicationValue: 5
  leverage: 10
workMix:
  theory: 30
  engineering: 35
  compute: 35
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: Mona Lisa TSP (University of Waterloo)
    url: https://www.math.uwaterloo.ca/tsp/data/ml/monalisa.html
  - title: Concorde TSP solver
    url: https://www.math.uwaterloo.ca/tsp/concorde.html
links:
  - to: world-tsp-optimality
    kind: RELATED
    note: "Same method: Concorde lower bounds against record-tour heuristics, on a 100,000-city instance."
timeline:
  - date: 2009-03-17
    title: Best tour
    body: Yuichi Nagata found a tour of length 5,757,191 with a genetic algorithm.
    source: https://www.math.uwaterloo.ca/tsp/data/ml/monalisa.html
  - date: 2012-07-27
    title: Best lower bound
    body: Concorde established the lower bound 5,757,084.
    source: https://www.math.uwaterloo.ca/tsp/data/ml/monalisa.html
explainer:
  oneLine: "A 100,000-point round trip that draws the Mona Lisa: find a shorter one or prove the best is perfect."
  flow:
    - Dots form a Mona Lisa
    - Heuristics found a tour in 2009
    - Cutting planes proved a bound in 2012
    - 107 units remain between them
  glossary:
    - term: tour
      meaning: A closed route visiting every dot exactly once.
      link: https://en.wikipedia.org/wiki/Travelling_salesman_problem
    - term: genetic algorithm
      meaning: A search method that mixes good solutions to produce better ones.
      link: https://en.wikipedia.org/wiki/Travelling_salesman_problem
    - term: lower bound
      meaning: A proven limit saying no tour is shorter.
      link: https://en.wikipedia.org/wiki/Travelling_salesman_problem
    - term: Concorde
      meaning: The leading exact TSP program.
      link: https://www.math.uwaterloo.ca/tsp/concorde.html
    - term: branch-and-cut
      meaning: An exact method that splits into cases and adds cutting planes.
      link: https://en.wikipedia.org/wiki/Branch_and_cut
    - term: travelling salesman problem
      meaning: Find the shortest closed tour visiting every point exactly once.
      link: https://en.wikipedia.org/wiki/Travelling_salesman_problem
    - term: cutting plane
      meaning: An inequality satisfied by every real tour but violated by the current fractional LP solution.
      link: https://en.wikipedia.org/wiki/Cutting-plane_method
    - term: linear program
      meaning: Minimise a linear function subject to linear inequalities; its optimum gives the lower bound.
      link: /research/linear-programming
  readFirst:
    - title: Mona Lisa TSP (University of Waterloo)
      url: https://www.math.uwaterloo.ca/tsp/data/ml/monalisa.html
      why: The instance, records and prize.
    - title: Travelling salesman problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Travelling_salesman_problem
      why: General introduction.
site:
  aiReviewed: true
---

The Mona Lisa TSP is a 100,000-city Euclidean instance whose optimal tour traces the portrait. **Task:** find a tour shorter than the current best, or prove a lower bound equal to its length.

# State of the art

The best known tour has length 5,757,191, found by Yuichi Nagata on 17 March 2009 using a genetic algorithm. The best lower bound is 5,757,084, established with Concorde on 27 July 2012. The gap is 107 units, about 0.0019%. The page states that optimality is not proven.

# Applications

No practical application beyond testing: it is the cleanest 100,000-city case on which exact methods meet record heuristics. Gains in cut separation or branching would carry over to large routing problems.

# Resolution criteria

A tour of length at most 5,757,190 checked from the published coordinates, or a Concorde-style cutting-plane certificate of a lower bound of 5,757,191 verified independently.

# Rating rationale

Difficulty 52: a 107-unit gap on 100,000 cities, unchanged since 2012, is within a factor of a few of instances already solved, so a long dedicated run plus better branching could close it; below the World TSP (62). Application value 5 and leverage 10: a showcase instance for TSP research only.

# Work mix rationale

Same structure as the World TSP at a smaller scale: cut separation and LP scaling with long compute.

# Verification

Quantity: length of the shortest tour on the 100,000-city Mona Lisa instance; record 5,757,191 (Nagata, 2009) against lower bound 5,757,084 (Concorde, 2012) per the Waterloo page. A shorter tour is checked by recomputing its length from the instance file. An optimality proof needs an independently checkable cutting-plane certificate of the lower bound.

# Plain explanation

This puzzle takes 100,000 dots that together look like the Mona Lisa and asks for the shortest closed line that passes through every dot. The best line known has length 5,757,191 units, found in 2009 by Yuichi Nagata. A proof method run in 2012 shows that no line can be shorter than 5,757,084 units. The difference is 107 units, about two thousandths of a percent.

So the best answer is either perfect or at most 107 units too long. Nobody knows which. The site hosting the puzzle offers 1,000 dollars to whoever first finds a shorter line than 5,757,191.

Proving that the line is perfect would need an enormous computation and a checkable proof. The caveat is that this is a test of methods rather than something needed for use: its value lies in showing how far exact methods can reach.

# Student explanation

**The instance.** The Mona Lisa TSP is a set of 100,000 points in the plane placed so that a short tour through them draws the Mona Lisa. The task is the travelling salesman problem: the shortest closed path visiting every point once, with straight-line (Euclidean) distances.

**The two bounds.** The best known tour, found by Yuichi Nagata on 17 March 2009 with a genetic algorithm (a search that combines pieces of good tours, like breeding, and keeps the shortest offspring), has length 5,757,191. The best lower bound, computed with the Concorde code on 27 July 2012, is 5,757,084. The gap is 107 units, about 0.0019%. So the 2009 tour is either optimal or at most 107 units too long. A prize of USD 1,000 is offered for the first tour shorter than 5,757,191.

**Where lower bounds come from.** Write the problem with a 0/1 variable for every pair of points, 1 if the tour uses that edge. Every point must have exactly two tour edges, and every subset of points must be connected to the rest by at least two edges, otherwise the "tour" splits into separate loops. Allowing fractional values gives a linear program whose optimum is a lower bound. Concorde adds **cutting planes**, valid inequalities for every real tour that cut off the current fractional solution, and then branches on edges, solving a linear program at each node of the search tree. Its 2012 run was a truncated branch-and-cut search: it stopped before finishing, leaving the 107-unit gap.

**Why it is still open.** 100,000 cities is not far beyond instances already solved exactly (the largest are in the tens of thousands of cities), but the cost of branch-and-cut grows steeply with size, and each node of the tree requires a large linear program. Either a dedicated long run with better cut separation and branching, or a lucky improvement of the tour (which would also win the prize), could change it. Neither has happened since 2012.

**How a claim is checked.** A shorter tour is an ordering of the 100,000 points; recomputing its length from the published coordinates takes a fraction of a second. A proof that 5,757,191 is optimal must include the cutting planes and branching record in a form that an independent program can check, ideally with exact arithmetic, so that floating-point rounding cannot hide an error.
