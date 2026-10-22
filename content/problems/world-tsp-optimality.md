---
type: problem
slug: world-tsp-optimality
title: Prove optimality of the World TSP (1,904,711 cities), or close the 0.047% gap
entry: mip-solvers-cutting-planes
status: OPEN
origin: World TSP dataset, University of Waterloo TSP site
ratings:
  difficulty: 62
  applicationValue: 10
  leverage: 18
workMix:
  theory: 30
  engineering: 35
  compute: 35
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: World TSP (University of Waterloo)
    url: https://www.math.uwaterloo.ca/tsp/world/index.html
  - title: Concorde TSP solver
    url: https://www.math.uwaterloo.ca/tsp/concorde.html
timeline:
  - date: 2007-06-05
    title: Current lower bound
    body: Concorde with CPLEX established the lower bound 7,512,218,268.
    source: https://www.math.uwaterloo.ca/tsp/world/index.html
  - date: 2021-02-15
    title: Helsgaun tour
    body: Keld Helsgaun found a tour of length 7,515,755,956.
    source: https://www.math.uwaterloo.ca/tsp/world/index.html
  - date: 2025-10-17
    title: Nagata tour
    body: Yuichi Nagata found a tour of length 7,515,755,912.
    source: https://www.math.uwaterloo.ca/tsp/world/index.html
explainer:
  oneLine: Find the shortest round trip through 1.9 million places, or prove the current tour is within a hair of the best.
  flow:
    - Heuristics find a record tour
    - Cutting planes give a lower bound
    - Gap of 0.047% remains
    - Closing it needs a checkable proof
  glossary:
    - term: travelling salesman problem
      meaning: Finding the shortest closed route that visits every place once.
      link: https://en.wikipedia.org/wiki/Travelling_salesman_problem
    - term: lower bound
      meaning: A proven limit saying no tour can be shorter than this.
      link: https://en.wikipedia.org/wiki/Travelling_salesman_problem
    - term: cutting plane
      meaning: An extra rule that sharpens the estimate of the best tour without removing real tours.
      link: https://en.wikipedia.org/wiki/Cutting-plane_method
    - term: Concorde
      meaning: The leading program for solving TSP exactly using cutting planes.
      link: https://www.math.uwaterloo.ca/tsp/concorde.html
    - term: gap
      meaning: The distance between the best known solution and the proven limit.
      link: /research/mip-solvers-cutting-planes
    - term: heuristic
      meaning: A fast method that finds good but not provably best answers, such as repeated local tour improvements.
      link: https://en.wikipedia.org/wiki/Heuristic_(computer_science)
    - term: linear programming
      meaning: Optimising a linear function subject to linear inequalities; its relaxations give lower bounds here.
      link: /research/linear-programming
    - term: factorial
      meaning: n! = 1 × 2 × … × n; it counts orderings and grows faster than any exponential.
      link: https://en.wikipedia.org/wiki/Factorial
    - term: dual linear program
      meaning: A companion LP whose feasible solutions certify lower bounds for the original minimisation.
      link: https://en.wikipedia.org/wiki/Dual_linear_program
  readFirst:
    - title: World TSP (University of Waterloo)
      url: https://www.math.uwaterloo.ca/tsp/world/index.html
      why: The data and the current records.
    - title: Travelling salesman problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Travelling_salesman_problem
      why: General introduction.
site:
  aiReviewed: true
---

The World TSP asks for the shortest closed tour through 1,904,711 populated places (plus several Antarctic research bases) under the rounded great-circle metric defined by the dataset. **Task:** either find a shorter tour than the current record, or prove a lower bound equal to the length of a tour, i.e. a proof of optimality.

# State of the art

The best tour has length 7,515,755,912, found by Yuichi Nagata on 17 October 2025; it improved by 44 metres the tour of 7,515,755,956 found by Keld Helsgaun on 15 February 2021. The best lower bound is 7,512,218,268, established by the Concorde code in June 2007 with CPLEX as LP solver. The gap is 3,537,644 metres, about 0.047% of the tour length (arithmetic from the two published figures; the page states the same percentage for Helsgaun's tour). Optimality is not proven.

# Applications

Practical routing never needs this instance. The value is as a stress test: closing the gap needs scaling branch-and-cut, LP solving and cut separation to millions of variables, and techniques developed for it transfer to large vehicle routing and chip layout problems.

# Resolution criteria

Improvement: a tour file with length strictly below 7,515,755,912 verified by the dataset's distance function. Optimality: a lower-bound certificate (Concorde cut proof or an equivalent exact LP dual solution) of the tour length, checkable by an independent program.

# Rating rationale

Difficulty 62: the 2007 lower bound has never moved, and an optimality proof would have to scale Concorde-style branch-and-cut from the largest certified instances (tens of thousands of cities) to 1.9 million; level with the kissing number in dimension 5 (64) as a finite question with no route in sight. Application value 10: no routing need for this instance. Leverage 18: large-scale cutting-plane methods.

# Work mix rationale

Progress needs better cutting-plane theory and implementation at the scale of millions of variables, plus long compute for LP solves and separation.

# Verification

Quantity: tour length for the 1,904,711-city World TSP; record 7,515,755,912 (Nagata, 2025-10-17) against lower bound 7,512,218,268 (Concorde, 2007), both from the Waterloo World TSP page. A shorter tour is checked by recomputing its length from the published city coordinates; an optimality claim needs a cutting-plane proof of the lower bound that an independent checker (rational LP dual plus the listed cuts) accepts.

# Plain explanation

The travelling salesman problem asks for the shortest round trip that visits a list of places once each. For the World TSP the list has 1,904,711 places: the towns and villages of the world plus a few polar research stations.

The best known trip is about 7.5 billion metres long. In October 2025 Yuichi Nagata shortened the record by 44 metres. From the other direction, a proof method from 2007 shows that no trip can be shorter than a stated lower limit. The two numbers are about 3.5 million metres apart, which is under five hundredths of a percent. Nobody knows whether the best known trip is perfect.

Closing the gap needs a proof that is checkable, and it would take far bigger computations than any proved-optimal trip before.

The caveat is that nobody needs this trip in practice. The prize is the methods: better ways to handle gigantic planning problems.

# Student explanation

**The problem.** The travelling salesman problem (TSP) asks for the shortest closed tour that visits every city once. The number of possible tours of $n$ cities is $(n-1)!/2$; for just 20 cities that is about $6\times10^{16}$, so trying them all is hopeless. The **World TSP** has 1,904,711 cities: populated places worldwide plus research bases in Antarctica, with distances given by a fixed great-circle formula rounded to whole metres.

**Two numbers that squeeze the answer.** _Heuristics_ produce good tours fast: start from some tour and keep making local swaps (for example, remove two edges and reconnect the pieces the other way) whenever this shortens it. The best tour, found by Yuichi Nagata on 17 October 2025, has length 7,515,755,912 metres, 44 metres shorter than Keld Helsgaun's 2021 tour. Any tour gives an _upper_ bound on the optimum. A _lower_ bound comes from linear programming: describe a tour with a 0/1 variable for each pair of cities, relax the variables to fractions, add **cutting planes** (inequalities true for every real tour, such as "every group of cities must be entered and left at least twice in total") and solve. The best lower bound, 7,512,218,268, was computed with the Concorde code in June 2007.

**The gap.** The difference is 3,537,644 metres, about 0.047% of the tour length. The optimal tour lies somewhere in between, and nobody knows where.

**Why closing it is hard.** Proving optimality means raising the lower bound all the way to a tour's length. That needs stronger cutting planes and then branching (splitting into cases such as "this edge is used" or "not used") until every case is settled, with each case requiring the solution of a linear program with millions of variables. The largest instances proved optimal so far have tens of thousands of cities, and the effort grows steeply with size. The lower bound has not moved since 2007.

**How a claim is checked.** A shorter tour is a list of the 1,904,711 cities in order; a program recomputes its length from the published coordinates and the dataset's distance formula. An optimality proof must be a certificate: the cutting planes and an exact solution of the dual linear program, which an independent program can verify gives a lower bound equal to the tour length.
