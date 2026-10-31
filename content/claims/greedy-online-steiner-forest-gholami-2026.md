---
type: claim
slug: greedy-online-steiner-forest-gholami-2026
title: Greedy is Θ(log k log log k)-competitive for online Steiner forest (preprint)
problem: greedy-online-steiner-forest-competitive-ratio
kind: BOUND
claimedBy: Iman Gholami, Ilya Hajiaghayi, MohammadTaghi Hajiaghayi, Peyman Jabbarzade (arXiv preprint)
claimedAt: 2026-10-29
sources:
  - title: Gholami, Hajiaghayi, Hajiaghayi, Jabbarzade, The Tight Competitive Ratio of Greedy for Online Steiner Forest (arXiv preprint)
    url: https://arxiv.org/abs/2610.40569
  - title: Awerbuch, Azar, Bartal, On-line Generalized Steiner Problem (O(log²) bound and O(log) conjecture)
    url: https://www.cs.jhu.edu/~baruch/RESEARCH/Research_areas/Algorithmic_Theory/2004%20Theoretical_Comp_Sc/gst.pdf
  - title: Bamas, Drygala, Maggiori, An Improved Analysis of Greedy for Online Steiner Forest (SODA 2022)
    url: https://arxiv.org/abs/2111.10086
checks:
  - title: Verify the O(log k log log k) upper bound for all instances
    method: REVIEW
    note: "Expert review of Theorem 1: that the argument covers arbitrary graphs and request orders, and does not rely on the restriction used by Bamas, Drygala and Maggiori."
    sourceUrl: https://arxiv.org/abs/2610.40569
  - title: Verify the Ω(log k log log k) lower-bound family
    method: REPRODUCE
    note: Build the instance family of Theorem 2 for several values of k, run greedy with the stated tie-breaking and compare with an explicit offline forest; the ratio should grow like log k log log k, not log k.
    sourceUrl: https://arxiv.org/abs/2610.40569
  - title: Compare with the earlier log² analysis and restricted-class result
    method: CROSS_CHECK
    note: Check how the new family relates to the near-tightness remark in Awerbuch, Azar and Bartal and to the class of instances covered by Bamas, Drygala and Maggiori.
    sourceUrl: https://www.cs.jhu.edu/~baruch/RESEARCH/Research_areas/Algorithmic_Theory/2004%20Theoretical_Comp_Sc/gst.pdf
  - title: Refereeing
    method: REFEREE
    note: Unrefereed preprint; no journal or conference submission is recorded.
site:
  status: UNDER_REVIEW
  statusNote: Posted 2026-10-29 as an unrefereed arXiv preprint. The upper bound matches the Bamas–Drygala–Maggiori bound that was previously shown only for a restricted class of instances. No independent verification, public expert assessment or formalization is recorded yet.
  checks:
    - title: Verify the O(log k log log k) upper bound for all instances
      status: OPEN
    - title: Verify the Ω(log k log log k) lower-bound family
      status: OPEN
    - title: Compare with the earlier log² analysis and restricted-class result
      status: OPEN
    - title: Refereeing
      status: OPEN
---

arXiv:2610.40569 (v1, 2026-10-29) claims that the greedy algorithm for online Steiner forest, which connects each arriving pair by a shortest path with purchased edges at zero cost, has worst-case competitive ratio exactly $\Theta(\log k\cdot\log\log k)$ in the number $k$ of pairs. Theorem 1 gives the upper bound $C\cdot\mathrm{OPT}\cdot\log(2k)\log\log(4k)$ on every instance; Theorem 2 gives an infinite family on which greedy pays at least $c\cdot\mathrm{OPT}\cdot\log k\log\log k$. This would refute the $O(\log k)$ conjecture of Awerbuch, Azar and Bartal and leave a $\Theta(\log\log k)$ gap to the $O(\log k)$ algorithm of Berman and Coulston.
