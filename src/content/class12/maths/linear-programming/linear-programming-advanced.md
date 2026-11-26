# Chapter 12: Linear Programming — Gehrai Mein (Advanced)

> **Class:** 12 | **Subject:** Mathematics  
> **Core chapter:** [Linear Programming (Part 4)](linear-programming-part4.md)

---

Rameshwar ek logistics company mein operations head hai. Usne apna LPP solve karke optimal corner point toh nikaal liya, par agle mahine fuel aur profit margins thode badal gaye! Ab Rameshwar pooch raha hai: kya har chhote profit-change par mujhe poora plan badalna padega, ya koi aisa **safe range** hai jiske andar wahi corner point optimal bana rahega? Is Gehrai Mein lesson mein hum seekhenge **Iso-Profit Line Method**, **Edge-Optima Geometry**, aur **Sensitivity Analysis of Objective Slope**!

---

## 1. Iso-Profit / Iso-Cost Line Method (Visual Intuition!)

Objective function **Z = c₁x + c₂y** ko ek family of parallel lines ke roop mein dekho:
- **y = −(c₁/c₂)x + Z/c₂**
- Har line ka slope fixed hota hai: **m = −c₁/c₂**!
- Jaise-jaise hum is parallel line ko **bahar (up/right, jab c₁, c₂ > 0)** slide karte hain, **Z badhta jata hai**!
- Jo **last point** (ya last edge!) feasible region ko touch karta hai, wahi **Maximum** deta hai!
- Aur jo **first point** feasible region ko touch karta hai (origin ke sabse kareeb), wahi **Minimum** deta hai!

```
  Iso-profit lines (slope = −c₁/c₂) sliding across convex feasible region:
    ↗  Z increases as line moves outward
       Last vertex touched = UNIQUE Maximum!
       Last ENTIRE EDGE touched (when −c₁/c₂ = edge slope) = INFINITELY MANY Maxima!
```

---

## 2. Sensitivity Analysis: When Does a Corner Stay Optimal?

Maan lo koi corner point **B** do active (binding) boundary lines L₁ (slope m₁) aur L₂ (slope m₂) ka intersection hai, jahan **m₂ < m₁ < 0**.
Corner B tab tak unique maximum bana rahega jab tak iso-profit line ka slope **−c₁/c₂** in dono slopes ke beech rahe:
- **m₂ ≤ −c₁/c₂ ≤ m₁**  ⇔  **|m₁| ≤ c₁/c₂ ≤ |m₂|**!
- Agar c₁/c₂ boundary value |m₁| ya |m₂| ke barabar ho jaye ⇒ poori edge optimal ban jati hai!
- Agar c₁/c₂ is range se bahar chala jaye ⇒ optimal solution **agle corner par jump** kar jata hai!

---

## 3. Solved Advanced Examples

### Example 1: Sensitivity range of objective slope
**Question:** Consider the LPP: Maximize Z = c₁x + c₂y (c₁, c₂ > 0) subject to x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0. Find the range of the ratio c₁/c₂ for which the corner point B(20, 30) remains optimal.

**Solution:**
- Binding lines at B(20, 30):
  - L₁: x + y = 50 ⇒ slope **m₁ = −1**.
  - L₂: 3x + y = 90 ⇒ slope **m₂ = −3**.
- Iso-profit line slope is **−c₁/c₂**.
- For B(20, 30) to remain optimal, −3 ≤ −c₁/c₂ ≤ −1 ⇒ **1 ≤ c₁/c₂ ≤ 3**!
  - If c₁/c₂ < 1 (e.g., Z = x + 2y), optimum shifts to C(0, 50).
  - If c₁/c₂ > 3 (e.g., Z = 4x + y), optimum shifts to A(30, 0).
  - If c₁/c₂ = 1 or 3, an entire edge is optimal!

**Jaanch:** Test c₁ = 2, c₂ = 1 (ratio 2 ∈ [1, 3]): Z(30,0)=60, Z(20,30)=**70**, Z(0,50)=50 ⇒ B is optimal ✅; test c₁ = 4, c₂ = 1 (ratio 4 > 3): Z(30,0)=**120** > Z(20,30)=110 ⇒ shifts to A ✅

---

### Example 2: Finding ALL points of an optimal edge parametrically
**Question:** Maximize Z = 6x + 12y subject to x + 2y ≤ 10, x + y ≤ 7, x ≥ 0, y ≥ 0. Write the complete set of all optimal solutions.

**Solution:**
- Corners: (0,0)⇒0, (7,0)⇒42, (4,3)⇒**60**, (0,5)⇒**60**.
- Objective slope −6/12 = −1/2 matches boundary line x + 2y = 10!
- Complete set of optimal solutions: all points **(x, y)** on the segment joining (0, 5) and (4, 3), i.e., **{(x, (10 − x)/2) : 0 ≤ x ≤ 4}** (or parametrically (4t, 5 − 2t) for 0 ≤ t ≤ 1).

**Jaanch:** Put t = 0.5 ⇒ (2, 4): 2+8=10 ≤ 10, 2+4=6 ≤ 7, Z = 12 + 48 = 60 ✅

---

### Example 3: Detecting infeasibility vs unboundedness algebraically
**Question:** Classify each LPP as Infeasible or Unbounded (no finite optimum):
(a) Maximize Z = 2x + y subject to x + y ≤ 3, 2x + 2y ≥ 10, x ≥ 0, y ≥ 0.
(b) Maximize Z = 5x + 2y subject to x − y ≥ 2, x ≥ 0, y ≥ 0.

**Solution:**
(a) Second constraint gives x + y ≥ 5, contradicting x + y ≤ 3! No point can satisfy both ⇒ **Infeasible**.
(b) For any large k > 2, point (k, 0) satisfies k − 0 = k ≥ 2 and gives Z = 5k → +∞ ⇒ **Unbounded (no finite maximum)**.

**Jaanch:** In (b), at (1000, 0): 1000 ≥ 2 and Z = 5000 ✅

---

## Challenge Practice Questions

1. For Maximize Z = px + qy (p, q > 0) subject to 2x + y ≤ 10, x + 2y ≤ 8, x ≥ 0, y ≥ 0, find the range of p/q for which the corner (4, 2) remains optimal.
2. In Q1, if p = 10, find the interval of values of q for which (4, 2) is optimal.
3. Maximize Z = 3x + 9y subject to x + 3y ≤ 60, x + y ≥ 10, x ≤ y, x ≥ 0, y ≥ 0. Express the full set of all optimal solutions parametrically.
4. Show that Minimize Z = −x + 2y subject to x ≥ 3, x + y ≥ 5, x + 2y ≥ 6, y ≥ 0 has NO finite minimum!
5. Give an example of a 2-variable LPP with an unbounded feasible region that STILL has a unique finite maximum!

### Answers

1. Binding lines at (4, 2): 2x+y=10 (slope −2) and x+2y=8 (slope −1/2).
   Need −2 ≤ −p/q ≤ −1/2 ⇒ **1/2 ≤ p/q ≤ 2**.
2. 1/2 ≤ 10/q ≤ 2 ⇒ **5 ≤ q ≤ 20**. Jaanch: at q=10 (p/q=1), Z(5,0)=50, Z(4,2)=**60**, Z(0,4)=40 ✅
3. Corners: (5,5)⇒60, (15,15)⇒**180**, (0,20)⇒**180**, (0,10)⇒90.
   Optimal segment from (0, 20) to (15, 15): **{(15t, 20 − 5t) : 0 ≤ t ≤ 1}**, all giving Z = 180.
4. Along the feasible ray (k, 0) for k ≥ 6: k ≥ 3, k+0 ≥ 5, k+0 ≥ 6, y = 0 ≥ 0 — all satisfied!
   Z = −k → −∞ as k → +∞ ⇒ **No finite minimum exists!**
5. Example: **Maximize Z = −2x − 3y** subject to **x + 2y ≥ 4, 2x + y ≥ 4, x ≥ 0, y ≥ 0**. The feasible region is unbounded, yet Z has a **unique finite maximum Z = −20/3 at (4/3, 4/3)**!
