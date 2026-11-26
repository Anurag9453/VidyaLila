# Chapter 12: Linear Programming (Part 2)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Linear Programming (Part 1)](linear-programming.md)

---

Rajan ki bakery mein roz subah oven limited ghanto ke liye chalta hai. Usne bread loaves (x) aur cakes (y) ka LPP toh bana liya, par ab sawaal hai — graph par shaded region ke andar toh hazaaron points (x, y) hain! Kya Rajan ko har ek point par profit Z check karna padega? Nahi! Geometry ka ek kamaal ka theorem — **Corner Point Theorem** — kehta hai ki maximum ya minimum value hamesha region ke **corners (vertices)** par hi milti hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Feasible Region** | Saare constraints (including x ≥ 0, y ≥ 0) ko ek saath satisfy karne wala common shaded region |
| **Feasible Solution** | Feasible region ke andar ya boundary par koi bhi point (x, y) |
| **Optimal Solution** | Wo feasible point jahan objective function Z maximum ya minimum value deta hai |
| **Bounded vs Unbounded Region** | **Bounded:** ek circle ke andar band ho sake (closed polygon); **Unbounded:** ek ya zyada dishaon mein infinity tak faila ho |
| **Corner Point (Vertex)** | Feasible region ki do boundary lines ka intersection point |

---

## 1. Fundamental Corner Point Theorem

*(Standard theorems of LPP — stated, checked on examples)*

1. **Theorem 1:** Let R be the feasible region (convex polygon) for an LPP and Z = ax + by be the objective function. If Z has an optimal value (maximum or minimum), it **must occur at a corner point (vertex)** of the feasible region.
2. **Theorem 2 (Bounded Region):** Agar feasible region **bounded** hai, toh Z = ax + by ki **maximum aur minimum dono values guaranteed exist** karti hain, aur dono kisi na kisi corner point par milti hain!
3. **Unbounded Region Caution!** Agar feasible region **unbounded** hai, toh maximum ya minimum **exist kar bhi sakta hai aur nahi bhi!**
   - Maan lo corner points par sabse badi value **M** aayi ⇒ check karo ki open half-plane **ax + by > M** aur feasible region mein koi common point hai ya nahi:
     - **No common point** ⇒ M hi **maximum** hai!
     - **Has common points** ⇒ **No maximum exists!**
   - Maan lo corner points par sabse chhoti value **m** aayi ⇒ check karo ki open half-plane **ax + by < m** aur feasible region mein koi common point hai ya nahi:
     - **No common point** ⇒ m hi **minimum** hai!
     - **Has common points** ⇒ **No minimum exists!**

---

## 2. Step-by-Step Corner Point Method

```
  Step 1: Har inequality ko '=' maan kar straight line draw karo (2 intercepts se!).
  Step 2: Test point (0, 0) (agar line origin se na guzre) se sahi side shade karo.
  Step 3: Common Feasible Region identify karo (bounded ya unbounded?).
  Step 4: Saare Corner Points (vertices) ke exact coordinates nikaalo.
  Step 5: Table banakar har corner par Z = ax + by calculate karo.
  Step 6: Bounded ⇒ seedha Max/Min likh do!
          Unbounded ⇒ open half-plane (ax+by > M ya < m) test zaroor karo!
```

---

## 3. Solved Examples

### Example 1: Simple bounded maximization
**Question:** Maximize Z = 3x + 4y subject to x + y ≤ 4, x ≥ 0, y ≥ 0.

**Solution:**
- Line x + y = 4 passes through (4, 0) and (0, 4).
- Test (0, 0): 0 + 0 ≤ 4 (True) ⇒ shade towards origin. With x ≥ 0, y ≥ 0, feasible region is bounded triangle OAB.
- Corner points table:

| Corner Point | Z = 3x + 4y |
|---|---|
| O(0, 0) | 0 |
| A(4, 0) | 12 |
| B(0, 4) | **16 (Maximum)** |

- Since region is bounded, **Maximum Z = 16 at (0, 4)**.

**Jaanch:** At (0, 4): 0 + 4 = 4 ≤ 4, x ≥ 0, y ≥ 0 ✅; Z = 0 + 16 = 16 ✅

---

### Example 2: Two-constraint bounded maximization
**Question:** Maximize Z = 4x + y subject to x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.

**Solution:**
- Line 1: x + y = 50 through (50, 0), (0, 50).
- Line 2: 3x + y = 90 through (30, 0), (0, 90).
- Intersection B of both lines: subtract ⇒ 2x = 40 ⇒ x = 20, y = 30 ⇒ **B(20, 30)**.
- Bounded quadrilateral OABC with vertices (0, 0), (30, 0), (20, 30), (0, 50):

| Corner Point | Z = 4x + y |
|---|---|
| O(0, 0) | 0 |
| A(30, 0) | **120 (Maximum)** |
| B(20, 30) | 110 |
| C(0, 50) | 50 |

- **Maximum Z = 120 at (30, 0)**.

**Jaanch:** At (30, 0): 30+0 = 30 ≤ 50, 90+0 = 90 ≤ 90 ✅; Z = 4(30) + 0 = 120 ✅

---

### Example 3: Unbounded region — minimum EXISTS (half-plane test!)
**Question:** Minimize Z = 3x + 5y subject to x + 3y ≥ 3, x + y ≥ 2, x ≥ 0, y ≥ 0.

**Solution:**
- Line 1: x + 3y = 3 through (3, 0), (0, 1). Test (0,0): 0 ≥ 3 (False) ⇒ shade away from origin.
- Line 2: x + y = 2 through (2, 0), (0, 2). Test (0,0): 0 ≥ 2 (False) ⇒ shade away from origin.
- Intersection B of x + 3y = 3 and x + y = 2: subtract ⇒ 2y = 1 ⇒ **y = 1/2, x = 3/2** ⇒ **B(3/2, 1/2)**.
- Feasible region is **unbounded**, with corner points A(3, 0), B(3/2, 1/2), C(0, 2):

| Corner Point | Z = 3x + 5y |
|---|---|
| A(3, 0) | 9 |
| B(3/2, 1/2) | **7 (Candidate Min)** |
| C(0, 2) | 10 |

- **Unbounded Check:** Draw dotted line **3x + 5y = 7** (passes through (7/3, 0) and (0, 7/5), and through B(3/2, 1/2)).
  Open half-plane **3x + 5y < 7** contains (0, 0) and stays completely below the feasible region — **no common point** with the feasible region!
- Therefore, **Minimum Z = 7 at (3/2, 1/2)**!

**Jaanch:** At (3/2, 1/2): x + 3y = 3 ≥ 3, x + y = 2 ≥ 2, Z = 9/2 + 5/2 = 7 ✅

---

### Example 4: Unbounded region — NO maximum exists!
**Question:** Maximize Z = 3x + 2y subject to x + y ≥ 4, x ≥ 0, y ≥ 0.

**Solution:**
- Feasible region is unbounded above x + y = 4 in the first quadrant, with corners (4, 0) [Z = 12] and (0, 4) [Z = 8].
- Candidate M = 12. Check open half-plane **3x + 2y > 12**: point (10, 10) is in the feasible region (10+10 = 20 ≥ 4) AND gives Z = 50 > 12!
- In fact, Z grows without bound as x, y → ∞ ⇒ **No maximum value exists!**

**Jaanch:** At (100, 0): feasible (100 ≥ 4) and Z = 300 > 12 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Unbounded region mein half-plane test kiye bina corner value ko final answer bol dena:**
   - Galat: Example 4 mein corner (4, 0) par Z = 12 dekh kar "Max Z = 12" likh dena!
   - Sahi: Jab bhi region **unbounded** ho, **ax + by > M** (max ke liye) ya **ax + by < m** (min ke liye) ka overlap test karna MUST hai!
2. **Galat intersection point ko corner point maan lena:**
   - Galat: Example 2 mein (50, 0) aur (0, 90) ko bhi corner table mein daal dena.
   - Sahi: (50, 0) constraint 3x + y ≤ 90 ko fail karta hai (150 > 90)! Sirf **feasible** vertices hi corner points hote hain!
3. **Origin (0, 0) se guzarne wali line par (0, 0) ko hi test point bana lena:**
   - Galat: x − 2y ≥ 0 mein (0, 0) put karke 0 ≥ 0 se shading decide karna.
   - Sahi: Jab line origin se guzre, toh koi aur point (jaise (1, 0) ya (0, 1)) test karo!

---

## Quick Recap

- **Bounded feasible region** ⇒ both Max and Min exist at corner points.
- **Unbounded feasible region** ⇒ test open half-plane ax + by > M (for Max) or ax + by < m (for Min) for overlap with feasible region.
- Always verify every corner point satisfies **ALL** constraints!

---

## Practice Questions

1. Minimize Z = −3x + 4y subject to x + 2y ≤ 8, 3x + 2y ≤ 12, x ≥ 0, y ≥ 0.
2. Maximize Z = 5x + 3y subject to 3x + 5y ≤ 15, 5x + 2y ≤ 10, x ≥ 0, y ≥ 0.
3. Minimize Z = 3x + 2y subject to x + y ≥ 8, 3x + 5y ≤ 15, x ≥ 0, y ≥ 0.
4. Maximize Z = x + y subject to x − y ≤ −1, −x + y ≤ 0, x ≥ 0, y ≥ 0.
5. Minimize Z = 200x + 500y subject to x + 2y ≥ 10, 3x + 4y ≤ 24, x ≥ 0, y ≥ 0.
6. Maximize Z = 3x + 2y subject to x + 2y ≤ 10, 3x + y ≤ 15, x ≥ 0, y ≥ 0.
7. Minimize and Maximize Z = x + 2y subject to x + 2y ≥ 100, 2x − y ≤ 0, 2x + y ≤ 200, x ≥ 0, y ≥ 0.
8. Minimize Z = 6x + 3y subject to 4x + y ≥ 80, x + 5y ≥ 115, 3x + 2y ≤ 150, x ≥ 0, y ≥ 0.
9. Maximize Z = 2x + 3y subject to x + y ≥ 5, x ≥ 0, y ≥ 0. Does a maximum exist?
10. State True or False: Every feasible region of a 2-variable LPP is a convex set.

### Answers

1. Corners: (0,0)⇒0, (4,0)⇒**−12**, (2,3)⇒6, (0,4)⇒16. Bounded ⇒ **Min Z = −12 at (4, 0)**.
   Jaanch: 4+0 ≤ 8, 12+0 ≤ 12 ✅
2. Intersection of 3x+5y=15 & 5x+2y=10: x = 20/19, y = 45/19.
   Corners: (0,0)⇒0, (2,0)⇒10, (20/19, 45/19)⇒**235/19 ≈ 12.37**, (0,3)⇒9.
   **Max Z = 235/19 at (20/19, 45/19)**.
3. Notice x+y ≥ 8 lies completely above 3x+5y ≤ 15 (intercepts (5,0) and (0,3)) ⇒ **No feasible region (infeasible)!**
4. Constraints require y ≥ x + 1 AND y ≤ x simultaneously ⇒ **No feasible solution (infeasible)!**
5. Intersection: 2(x+2y)=20 subtracted from 3x+4y=24 ⇒ x = 4, y = 3.
   Bounded triangle corners: (0,5)⇒2500, (0,6)⇒3000, (4,3)⇒**2300**.
   **Min Z = 2300 at (4, 3)**. Jaanch: 4+6=10 ≥ 10, 12+12=24 ≤ 24 ✅
6. Intersection: x = 4, y = 3. Corners: (0,0)⇒0, (5,0)⇒15, (4,3)⇒**18**, (0,5)⇒10.
   **Max Z = 18 at (4, 3)**.
7. Corners of bounded region: (0, 50)⇒100, (20, 40)⇒100, (50, 100)⇒250, (0, 200)⇒400.
   **Max Z = 400 at (0, 200)**; **Min Z = 100** at EVERY point on the segment joining (0, 50) and (20, 40)!
8. Corners of bounded triangle: (15, 20)⇒150, (40, 15)⇒285, (2, 72)⇒228.
   **Min Z = 150 at (15, 20)**. Jaanch: 60+20=80, 15+100=115, 45+40=85≤150 ✅
9. Unbounded above x+y=5; for any M, point (M, 0) gives Z = 2M > M ⇒ **No maximum exists**.
10. **True** ✅ — intersection of closed half-planes is always convex.

---

Ab tum graphical corner point method mein mahir ho! Agle part mein hum teen sabse famous real-world LPP categories — **Diet, Manufacturing, aur Transportation problems** — ko shuru se ant tak solve karenge: [Linear Programming (Part 3)](linear-programming-part3.md).
