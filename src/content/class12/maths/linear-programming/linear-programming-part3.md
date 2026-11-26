# Chapter 12: Linear Programming (Part 3)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Linear Programming (Part 2)](linear-programming-part2.md)

---

Rajesh ek community welfare organization ke operations sambhalta hai. Ek hi hafte mein use teen alag-alag optimization problems aayi: (1) community kitchen ke liye sabse sasta nutritious **diet mix**, (2) workshop mein machines par maximum profit ke liye **manufacturing plan**, aur (3) do factories se teen depots tak minimum shipping cost mein **transportation plan**! Chalo in teeno classic LPP types ko poora formulate aur solve karein!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Diet Problem** | Minimum cost mein saare nutritional requirements (≥ constraints, aksar unbounded feasible region) poora karna |
| **Manufacturing Problem** | Limited raw material / machine hours (≤ constraints, bounded feasible region) mein maximum profit kamana |
| **Transportation Problem** | Multiple factories (supply) se multiple depots (demand) tak minimum shipping cost mein goods bhejna |

---

## 1. Solved Examples (All Three Classic Types)

### Example 1: Diet Problem (Unbounded Minimization)
**Question:** A dietitian wishes to mix two types of foods F₁ and F₂ so that the vitamin contents of the mixture contain at least 8 units of vitamin A and at least 10 units of vitamin C. Food F₁ contains 2 units/kg of vitamin A and 1 unit/kg of vitamin C, costing ₹50/kg. Food F₂ contains 1 unit/kg of vitamin A and 2 units/kg of vitamin C, costing ₹70/kg. Find the minimum cost of such a mixture.

**Solution:**
- Let x = kg of F₁, y = kg of F₂.
- **Minimize Z = 50x + 70y** subject to:
  - 2x + y ≥ 8
  - x + 2y ≥ 10
  - x ≥ 0, y ≥ 0
- Line 1 (2x + y = 8): passes through (4, 0), (0, 8).
- Line 2 (x + 2y = 10): passes through (10, 0), (0, 5).
- Intersection of 2x + y = 8 and x + 2y = 10: multiply second by 2 ⇒ 2x + 4y = 20; subtract first ⇒ 3y = 12 ⇒ **y = 4, x = 2** ⇒ **B(2, 4)**.
- Unbounded feasible region has corners A(10, 0), B(2, 4), C(0, 8):

| Corner Point | Z = 50x + 70y |
|---|---|
| A(10, 0) | ₹500 |
| B(2, 4) | **₹380 (Candidate Min)** |
| C(0, 8) | ₹560 |

- **Half-plane check (unbounded!):** Open half-plane 50x + 70y < 380 (5x + 7y < 38) contains (0, 0) and has NO point in common with the feasible region (its slope −5/7 lies strictly between −2 and −1/2).
- **Minimum cost = ₹380** by mixing **2 kg of F₁ and 4 kg of F₂**.

**Jaanch:** Vit A = 2(2)+4 = 8 ≥ 8; Vit C = 2+2(4) = 10 ≥ 10; Cost = 100 + 280 = ₹380 ✅

---

### Example 2: Manufacturing Problem (Bounded Maximization)
**Question:** A manufacturer produces nuts and bolts. It takes 1 hour on machine A and 3 hours on machine B to produce a package of nuts. It takes 3 hours on machine A and 1 hour on machine B to produce a package of bolts. He earns a profit of ₹17.50 per package of nuts and ₹7.00 per package of bolts. How many packages of each should be produced each day to maximize profit if each machine operates for at most 12 hours a day?

**Solution:**
- Let x = packages of nuts, y = packages of bolts per day.
- **Maximize Z = 17.5x + 7y** subject to:
  - Machine A: **x + 3y ≤ 12**
  - Machine B: **3x + y ≤ 12**
  - x ≥ 0, y ≥ 0
- Intersection of x + 3y = 12 and 3x + y = 12: add ⇒ 4x + 4y = 24 ⇒ x + y = 6; subtract from first ⇒ 2y = 6 ⇒ **y = 3, x = 3** ⇒ **B(3, 3)**.
- Bounded quadrilateral OABC with corners (0, 0), (4, 0), (3, 3), (0, 4):

| Corner Point | Z = 17.5x + 7y |
|---|---|
| O(0, 0) | ₹0 |
| A(4, 0) | ₹70.00 |
| B(3, 3) | **₹73.50 (Maximum)** |
| C(0, 4) | ₹28.00 |

- **Maximum profit = ₹73.50/day** by producing **3 packages of nuts and 3 packages of bolts**.

**Jaanch:** Machine A = 3 + 9 = 12 ≤ 12; Machine B = 9 + 3 = 12 ≤ 12; Z = 52.50 + 21.00 = ₹73.50 ✅

---

### Example 3: Transportation Problem (2 Factories to 3 Depots!)
**Question:** Two factories A and B have stocks of 8 and 6 units respectively. Three depots P, Q, and R require 5, 5, and 4 units respectively. Transportation costs per unit (in ₹) are:
- From A to P, Q, R: ₹16, ₹10, ₹15
- From B to P, Q, R: ₹10, ₹12, ₹10
How should the supplies be transported to minimize total transportation cost?

**Solution:**
- Notice total supply = 8 + 6 = 14 = total demand (5 + 5 + 4)!
- Let factory A send **x** units to P and **y** units to Q ⇒ then A sends **(8 − x − y)** units to R.
- To meet demands of P, Q, R, factory B must send:
  - To P: **5 − x**
  - To Q: **5 − y**
  - To R: 4 − (8 − x − y) = **x + y − 4**
- Every shipment must be ≥ 0:
  - x ≥ 0, y ≥ 0
  - 8 − x − y ≥ 0 ⇒ **x + y ≤ 8**
  - 5 − x ≥ 0 ⇒ **x ≤ 5**
  - 5 − y ≥ 0 ⇒ **y ≤ 5**
  - x + y − 4 ≥ 0 ⇒ **x + y ≥ 4**
- **Total Cost Z:**
  Z = 16x + 10y + 15(8 − x − y) + 10(5 − x) + 12(5 − y) + 10(x + y − 4)
  Z = (16 − 15 − 10 + 10)x + (10 − 15 − 12 + 10)y + (120 + 50 + 60 − 40)
  **Minimize Z = x − 7y + 190**
- Bounded hexagon corners for 0 ≤ x ≤ 5, 0 ≤ y ≤ 5, 4 ≤ x + y ≤ 8:

| Corner Point (x, y) | Z = x − 7y + 190 |
|---|---|
| (0, 4) | ₹162 |
| (0, 5) | **₹155 (Minimum)** |
| (3, 5) | ₹158 |
| (5, 3) | ₹174 |
| (5, 0) | ₹195 |
| (4, 0) | ₹194 |

- **Minimum cost = ₹155** at **x = 0, y = 5**:
  - From A: **0 to P, 5 to Q, 3 to R** (sum = 8)
  - From B: **5 to P, 0 to Q, 1 to R** (sum = 6)

**Jaanch:** Demands: P = 0+5 = 5, Q = 5+0 = 5, R = 3+1 = 4; Cost = 0 + 50 + 45 + 50 + 0 + 10 = ₹155 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Transportation problem mein 6 alag variables (x₁, x₂, ..., x₆) le lena:**
   - Galat: Har route ke liye alag variable maankar 2D graph na bana pana!
   - Sahi: 2 factories aur 3 depots mein supply-demand balance use karke sirf **do variables (x, y)** mein poora problem aa jata hai!
2. **Transportation mein (8 − x − y) ≥ 0 aur (x + y − 4) ≥ 0 bhool jana:**
   - Galat: Sirf 0 ≤ x ≤ 5 aur 0 ≤ y ≤ 5 likhna.
   - Sahi: Har ek of the 6 routes non-negative hona chahiye — isliye chhe ke chhe expressions ≥ 0 karo!
3. **Final answer mein sirf (x, y) likh kar chhod dena:**
   - Galat: Word problem mein sirf "x = 2, y = 4" likhna.
   - Sahi: Hamesha units aur meaning ke saath poora sentence likho (jaise "2 kg of Food F₁, 4 kg of Food F₂, minimum cost ₹380").

---

## Quick Recap

- **Diet problems:** Usually ≥ constraints (unbounded region) ⇒ always do the **open half-plane check**!
- **Manufacturing problems:** Usually ≤ constraints (bounded region) ⇒ corner point table directly gives Max!
- **Transportation problems (2×3):** Use just **2 variables (x, y)**, express all 6 routes in terms of x, y, and set **all 6 ≥ 0**.

---

## Practice Questions

1. A diet mixes Food P (₹60/kg: 3 units Vit A, 4 units Vit B) and Food Q (₹80/kg: 4 units Vit A, 2 units Vit B) to get at least 12 units of Vit A and 8 units of Vit B. Find the minimum cost.
2. A factory makes tennis rackets (x) and cricket bats (y). A racket takes 1.5 hrs machine time and 3 hrs craft time (profit ₹20); a bat takes 3 hrs machine time and 1 hr craft time (profit ₹10). Daily limits: 42 hrs machine time, 24 hrs craft time. Find maximum profit.
3. A company manufactures two types of novelty souvenirs A and B. Type A requires 5 min for cutting and 10 min for assembling (profit ₹5); Type B requires 8 min for cutting and 8 min for assembling (profit ₹6). Daily limits: 3 hrs 20 min (200 min) for cutting, 4 hrs (240 min) for assembling. Find maximum profit.
4. A dealer sells desktop computers (x, cost ₹25,000, profit ₹4,500) and laptops (y, cost ₹40,000, profit ₹5,000). Total demand ≤ 250 units, budget ≤ ₹70,00,000. Find the number of each to maximize profit.
5. Two godowns A (stock 100 quintals) and B (stock 50 quintals) supply three shops D, E, F needing 60, 50, 40 quintals. Express all 6 shipments in terms of x (A→D) and y (A→E), and write all constraints.
6. A cake of type I requires 200 g flour and 25 g fat; type II requires 100 g flour and 50 g fat. With 5 kg (5000 g) flour and 1 kg (1000 g) fat, find the maximum number of cakes (Z = x + y) that can be made.
7. A dietitian mixes two foods X (₹16/kg: 1 unit Vit A, 2 units Vit B, 3 units Vit C) and Y (₹20/kg: 2 units Vit A, 2 units Vit B, 1 unit Vit C). Minimum requirements: 6 units Vit A, 7 units Vit B, 6 units Vit C. Find the minimum cost.
8. A merchant sells two models of fans: Model A (cost ₹1,000, profit ₹200) and Model B (cost ₹1,500, profit ₹250). Budget ₹1,50,000, max storage 120 fans. Find maximum profit.
9. In a 2-factory, 3-depot transportation problem, why must total supply equal total demand for the 2-variable reduction to work cleanly?
10. State True or False: In a diet problem with all ≥ constraints and positive unit costs (c₁ > 0, c₂ > 0), the minimum cost always exists if the feasible region is non-empty.

### Answers

1. Min Z = 60x + 80y s.t. 3x+4y ≥ 12, 4x+2y ≥ 8 (2x+y ≥ 4), x, y ≥ 0.
   Intersection of 3x+4y=12 and 2x+y=4: y = 4−2x ⇒ 3x + 16 − 8x = 12 ⇒ x = 4/5, y = 12/5.
   Corners: (4,0)⇒240, (4/5, 12/5)⇒48+192=**240**, (0,4)⇒320.
   Notice Z = 60x+80y = 20(3x+4y) is parallel to 3x+4y=12! **Min cost = ₹240** at EVERY point on segment from (4/5, 12/5) to (4, 0) (e.g., 4 kg of P, 0 kg of Q)!
2. Max Z = 20x + 10y s.t. 1.5x + 3y ≤ 42 (x + 2y ≤ 28), 3x + y ≤ 24, x, y ≥ 0.
   Intersection: x = 4, y = 12. Corners: (0,0)⇒0, (8,0)⇒160, (4,12)⇒**200**, (0,14)⇒140.
   **Max profit = ₹200** (4 rackets, 12 bats). Jaanch: 4+24=28, 12+12=24 ✅
3. Max Z = 5x + 6y s.t. 5x + 8y ≤ 200, 10x + 8y ≤ 240, x, y ≥ 0.
   Intersection: 5x = 40 ⇒ x = 8, y = 20. Corners: (0,0)⇒0, (24,0)⇒120, (8,20)⇒**160**, (0,25)⇒150.
   **Max profit = ₹160** (8 of A, 20 of B).
4. Max Z = 4500x + 5000y s.t. x + y ≤ 250, 25x + 40y ≤ 7000 (5x + 8y ≤ 1400), x, y ≥ 0.
   Intersection: 3y = 150 ⇒ y = 50, x = 200. Corners: (0,0)⇒0, (250,0)⇒11,25,000, (200,50)⇒**11,50,000**, (0,175)⇒8,75,000.
   **Max profit = ₹11,50,000** (200 desktops, 50 laptops).
5. A→D = x, A→E = y, A→F = 100−x−y; B→D = 60−x, B→E = 50−y, B→F = x+y−60.
   Constraints: **0 ≤ x ≤ 60, 0 ≤ y ≤ 50, 60 ≤ x + y ≤ 100**.
6. Max Z = x + y s.t. 200x + 100y ≤ 5000 (2x + y ≤ 50), 25x + 50y ≤ 1000 (x + 2y ≤ 40), x, y ≥ 0.
   Intersection: 3x = 60 ⇒ x = 20, y = 10. Corners: (0,0)⇒0, (25,0)⇒25, (20,10)⇒**30**, (0,20)⇒20.
   **Maximum 30 cakes** (20 of type I, 10 of type II).
7. Min Z = 16x + 20y s.t. x+2y ≥ 6, 2x+2y ≥ 7, 3x+y ≥ 6, x, y ≥ 0.
   Feasible corners of the unbounded region: (6, 0)⇒96; intersection of x+2y=6 & 3x+y=6 is (6/5, 12/5) [satisfies 2x+2y = 36/5 = 7.2 ≥ 7] ⇒ Z = 16(6/5) + 20(12/5) = 336/5 = **67.20**; and (0, 6)⇒120.
   **Min cost = ₹67.20** at x = 1.2 kg, y = 2.4 kg.
8. Max Z = 200x + 250y s.t. 2x + 3y ≤ 300, x + y ≤ 120, x, y ≥ 0.
   Intersection: y = 60, x = 60. Corners: (0,0)⇒0, (120,0)⇒24000, (60,60)⇒**27000**, (0,100)⇒25000.
   **Max profit = ₹27,000** (60 of each model).
9. Because each depot's demand is met completely by A and B combined, and total stock = total demand ensures the 6th route (B→R) automatically balances both factory B's remaining supply and depot R's remaining demand.
10. **True** ✅ — since x ≥ 0, y ≥ 0 and c₁, c₂ > 0, Z ≥ 0 is bounded below, so a finite minimum always exists at a corner point.

---

Ab tum diet, manufacturing, aur transportation teeno classic LPPs solve kar sakte ho! Agle aur final part mein hum **Sab Kuch Mila Kar** mixed optimization problems solve karenge aur poora chapter summarize karenge: [Linear Programming (Part 4)](linear-programming-part4.md).
