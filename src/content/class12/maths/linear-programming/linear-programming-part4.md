# Chapter 12: Linear Programming (Part 4)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Linear Programming (Part 3)](linear-programming-part3.md)

---

Rama apne organic farm par do faslein (wheat aur rice) ugaane ka plan bana rahi hai — zameen ki limit hai, eco-friendly pesticide ki strict limit hai, aur profit maximize karna hai! Kabhi-kabhi ek hi LPP mein maximum aur minimum dono nikaalne padte hain, aur kabhi do alag-alag corners par bilkul same optimal value aa jati hai! Is final part mein hum **Sab Kuch Mila Kar** aise hi mixed problems solve karenge aur poora chapter ek table mein wrap up karenge.

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Multiple Optimal Solutions** | Jab do adjacent corner points par same optimal value aaye, toh unhe jodne wale **poore line segment ka har point** optimal hota hai! |
| **Infeasible LPP** | Jab constraints aapas mein contradict karein aur koi bhi common feasible region na bane |
| **Unbounded Solution** | Jab feasible region unbounded ho aur Z infinity tak badh (ya −infinity tak ghat) sake — koi finite optimum na mile |

---

## 1. Solved Mixed Examples (Sab Kuch Mila Kar)

### Example 1: Finding BOTH Maximum & Minimum (with Multiple Maxima!)
**Question:** Minimize and Maximize Z = 5x + 10y subject to:
x + 2y ≤ 120,   x + y ≥ 60,   x − 2y ≥ 0,   x ≥ 0,   y ≥ 0.

**Solution:**
- Plot all three boundary lines:
  1. x + 2y = 120 through (120, 0), (0, 60) — shade towards (0, 0).
  2. x + y = 60 through (60, 0), (0, 60) — shade away from (0, 0).
  3. x − 2y = 0 (y = x/2) through (0, 0), (60, 30) — test (60, 0): 60 − 0 ≥ 0 (True) ⇒ shade below the line!
- Find exact corner points of the bounded quadrilateral:
  - C(60, 0) and D(120, 0) on the x-axis.
  - A = intersection of x + y = 60 & x − 2y = 0 ⇒ 3y = 60 ⇒ **A(40, 20)**.
  - B = intersection of x + 2y = 120 & x − 2y = 0 ⇒ 4y = 120 ⇒ **B(60, 30)**.

| Corner Point | Z = 5x + 10y |
|---|---|
| A(40, 20) | 400 |
| B(60, 30) | **600 (Maximum)** |
| C(60, 0) | **300 (Minimum)** |
| D(120, 0) | **600 (Maximum)** |

- **Minimum Z = 300** uniquely at **C(60, 0)**.
- **Maximum Z = 600** at **BOTH B(60, 30) and D(120, 0)** — aur isliye segment BD par lie karne wale **har ek point** par Z = 600 hoga (infinitely many optimal solutions)!

**Jaanch:** Midpoint of B(60, 30) and D(120, 0) is (90, 15): 90+30 = 120 ≤ 120, 90+15 = 105 ≥ 60, 90−30 = 60 ≥ 0, and Z = 5(90) + 10(15) = 450 + 150 = 600 ✅

---

### Example 2: Full Formulation + Solution (Rama's Organic Farm!)
**Question:** A cooperative society of farmers has 50 hectares of land to grow two crops X and Y. The profits from crops X and Y per hectare are ₹10,500 and ₹9,000 respectively. To control weeds, a liquid herbicide has to be used for crops X and Y at rates of 20 litres and 10 litres per hectare. Further, no more than 800 litres of herbicide should be used in order to protect wildlife. How much land should be allocated to each crop to maximize total profit?

**Solution:**
- Let x = hectares of crop X, y = hectares of crop Y.
- **Maximize Z = 10500x + 9000y** subject to:
  - Land limit: **x + y ≤ 50**
  - Herbicide limit: 20x + 10y ≤ 800 ⇒ **2x + y ≤ 80**
  - x ≥ 0, y ≥ 0
- Intersection of x + y = 50 and 2x + y = 80: subtract ⇒ **x = 30, y = 20** ⇒ **B(30, 20)**.
- Bounded quadrilateral corners:

| Corner Point | Z = 10500x + 9000y |
|---|---|
| O(0, 0) | ₹0 |
| A(40, 0) | ₹4,20,000 |
| B(30, 20) | **₹4,95,000 (Maximum)** |
| C(0, 50) | ₹4,50,000 |

- **Maximum Profit = ₹4,95,000** by allocating **30 hectares to crop X** and **20 hectares to crop Y**.

**Jaanch:** Land = 30+20 = 50 ≤ 50; Herbicide = 20(30) + 10(20) = 600 + 200 = 800 ≤ 800 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Do corners par same Max aane par sirf "2 optimal solutions" likh dena:**
   - Galat: Example 1 mein bolna ki "Z = 600 ke sirf do optimal solutions (60, 30) aur (120, 0) hain."
   - Sahi: Do adjacent corners par same optimum aaye toh unhe jodne wale **poore line segment par infinitely many optimal solutions** hote hain!
2. **Simultaneous Max & Min question mein sirf Max nikaal kar chhod dena:**
   - Galat: Table se sirf sabse badi value report karna.
   - Sahi: Sawaal dhyan se padho — agar "Minimize and Maximize" dono pucha hai, toh dono values aur unke corner points clearly likho!

---

## Quick Recap

- If two adjacent vertices give the same optimal value of Z, **every point on the line segment joining them** is optimal!
- Always check whether the feasible region is **empty (infeasible)**, **bounded**, or **unbounded**.
- Every word problem needs: **(1) variable definitions, (2) LPP model, (3) corner point table, (4) final answer with units**.

---

## Practice Questions

1. Minimize and Maximize Z = x + 2y subject to x + 2y ≥ 100, 2x − y ≤ 0, 2x + y ≤ 200, x ≥ 0, y ≥ 0.
2. Maximize Z = 6x + 4y subject to x + 2y ≤ 8, 3x + 2y ≤ 12, x ≥ 0, y ≥ 0.
3. Minimize Z = 4x + 6y subject to 3x + 6y ≥ 80, 4x + 3y ≥ 100, x ≥ 0, y ≥ 0.
4. A manufacturer has three machines I, II, III installed in his factory. Machines I and II can run at most 12 hrs/day, whereas machine III must operate at least 5 hrs/day. Product M takes 1 hr on I, 2 hrs on II, 1 hr on III (profit ₹600); Product N takes 2 hrs on I, 1 hr on II, 1.25 hrs on III (profit ₹400). Formulate and find maximum daily profit.
5. An aeroplane can carry a maximum of 200 passengers. A profit of ₹1,000 is made on each executive class ticket and ₹600 on each economy class ticket. The airline reserves at least 20 seats for executive class, and at least 4 times as many passengers prefer economy class as executive class. Find how many tickets of each type maximize profit.
6. Find the maximum value of Z = 11x + 7y subject to x ≤ 3, y ≤ 2, x ≥ 0, y ≥ 0.
7. For the LPP Maximize Z = 2x + 3y subject to x + y ≤ 1, 3x + y ≤ 3, x ≥ 0, y ≥ 0, which constraint is redundant (does not affect the feasible region)?
8. If the corner points of a bounded feasible region are (0, 10), (5, 5), (15, 15), and (0, 20), find the point(s) where Z = px + qy (p, q > 0) takes the same value at (15, 15) and (0, 20), and find the relation between p and q.
9. A fruit grower uses two brands of fertilizer P (₹20/bag: 3 kg N, 1 kg P₂O₅) and Q (₹30/bag: 3 kg N, 2 kg P₂O₅). The garden needs at least 12 kg of N and 6 kg of P₂O₅. Find the minimum fertilizer cost.
10. State True or False: If an LPP has two distinct optimal solutions, then it automatically has infinitely many optimal solutions.

### Answers

1. Corners of bounded region: (0, 50)⇒100, (20, 40)⇒100, (50, 100)⇒250, (0, 200)⇒400.
   **Max Z = 400 at (0, 200)**; **Min Z = 100** at all points on segment joining (0, 50) and (20, 40).
2. Corners: (0,0)⇒0, (4,0)⇒24, (2,3)⇒**24**, (0,4)⇒16.
   **Max Z = 24** at all points on segment joining (4, 0) and (2, 3)!
3. Intersection of 3x+6y=80 & 4x+3y=100: multiply second by 2 ⇒ 8x+6y=200; subtract first ⇒ 5x=120 ⇒ x=24, y=4/3.
   Unbounded corners: (80/3, 0)⇒320/3 ≈ 106.67, (24, 4/3)⇒96+8 = **104**, (0, 100/3)⇒200.
   Half-plane 4x+6y < 104 has no overlap ⇒ **Min Z = 104 at (24, 4/3)**.
4. Max Z = 600x + 400y s.t. x+2y ≤ 12, 2x+y ≤ 12, x + 1.25y ≥ 5 (4x+5y ≥ 20), x, y ≥ 0.
   Bounded corners: (5,0)⇒3000, (6,0)⇒3600, (4,4)⇒**4000**, (0,6)⇒2400, (0,4)⇒1600.
   **Max profit = ₹4,000** (4 of M, 4 of N). Jaanch: 4+8=12, 8+4=12, 4+5=9 ≥ 5 ✅
5. Max Z = 1000x + 600y s.t. x + y ≤ 200, x ≥ 20, y ≥ 4x.
   Bounded triangle corners: (20, 80)⇒68000, (20, 180)⇒128000, (40, 160)⇒**136000**.
   **Max profit = ₹1,36,000** (40 executive, 160 economy).
6. Rectangle corners: (0,0)⇒0, (3,0)⇒33, (3,2)⇒**47**, (0,2)⇒14. **Max Z = 47 at (3, 2)**.
7. Since x ≥ 0, y ≥ 0 and x + y ≤ 1 already implies 3x + y ≤ 3(x + y) ≤ 3, the constraint **3x + y ≤ 3 is redundant**!
8. 15p + 15q = 0·p + 20q ⇒ 15p = 5q ⇒ **q = 3p**.
9. Min Z = 20x + 30y s.t. x + y ≥ 4, x + 2y ≥ 6, x, y ≥ 0.
   Intersection: y = 2, x = 2. Unbounded corners: (6, 0)⇒120, (2, 2)⇒**100**, (0, 4)⇒120.
   Half-plane 20x + 30y < 100 has no overlap ⇒ **Min Z = ₹100 at (2, 2)**.
10. **True** ✅ — every convex combination (point on the line segment) of two optimal solutions is feasible and gives the same optimal Z!

---

## Chapter Ka Saar (Linear Programming Wrap-Up)

| Concept | Key Rule / Method |
|---|---|
| **LPP Structure** | Decision variables (x, y) + Objective Z = ax + by + Linear constraints + x ≥ 0, y ≥ 0 |
| **Corner Point Theorem** | Optimal value of Z (if it exists) ALWAYS occurs at a **corner point** of the feasible region |
| **Bounded Region** | Both Maximum and Minimum are **guaranteed to exist** at corner points |
| **Unbounded Region** | Test open half-plane **ax + by > M** (Max) or **ax + by < m** (Min) for overlap with feasible region! |
| **Multiple Optima** | Same optimal Z at 2 adjacent corners ⇒ **entire connecting edge** is optimal |
| **Classic Models** | Diet (≥, Min cost), Manufacturing (≤, Max profit), Transportation (2×3 reduced to 2 variables) |

---

Shabaash! Tumne **Linear Programming** ke saare core concepts complete kar liye hain! Agar tum **iso-profit lines, sensitivity analysis of objective slope c₁/c₂, aur edge-optima proofs** jaise deep concepts explore karna chahte ho, toh [Gehrai Mein: Linear Programming](linear-programming-advanced.md) zaroor padho.

Agle aur is Class 12 Mathematics ke aakhiri chapter mein hum uncertainty aur chance ki maths mein chalenge — **Probability**, jahan conditional probability, Bayes' theorem, random variables, aur binomial distribution seekhenge!
