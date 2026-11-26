# Chapter 12: Linear Programming

> **Class:** 12 | **Subject:** Mathematics  
> **Previous chapter:** [Three Dimensional Geometry (Part 5)](../three-dimensional-geometry/three-dimensional-geometry-part5.md)

---

Raghav ne ek chhota furniture showroom khola. Uske paas ₹50,000 ka budget aur maximum 60 items rakhne ki jagah hai. Ek table ₹2,500 ki aati hai aur ₹250 profit deti hai, jabki ek chair ₹500 ki aati hai aur ₹75 profit deti hai. Ab Raghav soch raha hai — kitni tables aur kitni chairs khareedu ki budget aur space dono ke andar rehkar **maximum profit** ho? Real life mein limited resources (paisa, time, space, raw material) ke andar kisi cheez ko **maximize (profit)** ya **minimize (cost)** karne ke isi mathematical tareeke ko **Linear Programming** kehte hain!

Class 11 ke [Linear Inequalities](../../../class11/maths/linear-inequalities/linear-inequalities.md) mein tumne 2D linear inequalities ka graph banana seekha tha — yahan hum wahi inequalities use karke real-world optimization problems solve karenge.

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Decision Variables (x, y)** | Wo unknown quantities jinki best values humein decide karni hain (jaise tables x, chairs y) |
| **Objective Function (Z = ax + by)** | Wo linear function jise humein **Maximize** (profit) ya **Minimize** (cost) karna hai |
| **Linear Constraints** | Resources ki limits batane wali linear inequalities (≤, ≥) ya equations (=) |
| **Non-Negativity Restrictions** | **x ≥ 0, y ≥ 0** — kyunki real-world quantities (items, kg, hours) negative nahi ho saktin |
| **Linear Programming Problem (LPP)** | Objective function + constraints + non-negativity restrictions ka poora mathematical model |

---

## 1. Standard Form of a 2-Variable LPP

Har Linear Programming Problem ke **chaar zaroori hisse** hote hain:

```
  1. Decision variables:       x, y
  2. Objective function:       Maximize (or Minimize) Z = c₁x + c₂y
  3. Subject to constraints:   a₁x + b₁y ≤ (or ≥) d₁
                               a₂x + b₂y ≤ (or ≥) d₂
                               ...
  4. Non-negativity:           x ≥ 0,  y ≥ 0
```

> **Linear kyun?** Kyunki objective function aur saare constraints mein x aur y ki power sirf **1** hoti hai — koi x², xy, √x, ya 1/x nahi hota!

### Formulation ke 4 Aasan Steps
1. **Define x and y:** Clearly likho ki x aur y kis cheez ki quantity hain (units ke saath, jaise kg, packets, pieces).
2. **Write Objective Function Z:** Profit ya cost per unit se Z = c₁x + c₂y likho aur saaf likho **Maximize** ya **Minimize**.
3. **Translate Every Limit into an Inequality:**
   - "at most / maximum / available / cannot exceed" ⇒ **≤**
   - "at least / minimum / required" ⇒ **≥**
4. **Always Add Non-Negativity:** **x ≥ 0, y ≥ 0** kabhi mat bhoolna!

---

## 2. Solved Examples (Mathematical Formulation)

### Example 1: Furniture showroom problem (Raghav's story!)
**Question:** A furniture dealer deals in tables and chairs. He has ₹50,000 to invest and space to store at most 60 pieces. A table costs ₹2,500 and a chair costs ₹500. He can sell a table at a profit of ₹250 and a chair at a profit of ₹75. Formulate this as an LPP to maximize profit.

**Solution:**
- Let **x** = number of tables, **y** = number of chairs.
- **Objective Function:** Maximize **Z = 250x + 75y** (total profit in ₹).
- **Constraints:**
  1. Investment limit: 2500x + 500y ≤ 50000 ⇒ divide by 500 ⇒ **5x + y ≤ 100**
  2. Storage space limit: **x + y ≤ 60**
  3. Non-negativity: **x ≥ 0, y ≥ 0**

**Jaanch:** Agar x = 10 tables, y = 40 chairs: cost = 25000 + 20000 = ₹45,000 ≤ ₹50,000 (5(10)+40 = 90 ≤ 100); items = 50 ≤ 60; Z = 2500 + 3000 = ₹5,500 ✅

---

### Example 2: Diet formulation problem
**Question:** A nutritionist wants to mix two foods I and II so that the vitamin contents of the mixture contain at least 8 units of vitamin A and at least 10 units of vitamin C. Food I contains 2 units/kg of vitamin A and 1 unit/kg of vitamin C, costing ₹50/kg. Food II contains 1 unit/kg of vitamin A and 2 units/kg of vitamin C, costing ₹70/kg. Formulate the LPP to minimize cost.

**Solution:**
- Let **x** = kg of Food I, **y** = kg of Food II.
- **Objective Function:** Minimize **Z = 50x + 70y** (total cost in ₹).
- **Constraints:**
  1. Vitamin A ("at least 8"): **2x + y ≥ 8**
  2. Vitamin C ("at least 10"): **x + 2y ≥ 10**
  3. Non-negativity: **x ≥ 0, y ≥ 0**

**Jaanch:** Agar x = 2, y = 4: Vit A = 4 + 4 = 8 ≥ 8, Vit C = 2 + 8 = 10 ≥ 10, Cost = 100 + 280 = ₹380 ✅

---

### Example 3: Manufacturing workshop problem
**Question:** A small workshop manufactures two products A and B using two machines M₁ and M₂. Product A needs 2 hours on M₁ and 1 hour on M₂, giving ₹30 profit. Product B needs 1 hour on M₁ and 2 hours on M₂, giving ₹40 profit. Machine M₁ is available for at most 10 hours and M₂ for at most 8 hours per day. Formulate the LPP to maximize daily profit.

**Solution:**
- Let **x** = units of product A, **y** = units of product B produced per day.
- **Objective Function:** Maximize **Z = 30x + 40y**.
- **Constraints:**
  1. Machine M₁ hours: **2x + y ≤ 10**
  2. Machine M₂ hours: **x + 2y ≤ 8**
  3. Non-negativity: **x ≥ 0, y ≥ 0**

**Jaanch:** Units match: (hours/unit) × (units) = hours ≤ available hours ✅

---

## Aam Galtiyan (Common Mistakes)

1. **≤ aur ≥ ulta laga dena:**
   - Galat: "at least 8 units required" ke liye 2x + y ≤ 8 likh dena.
   - Sahi: "at least / minimum" ka matlab 8 ya usse zyada ⇒ **≥ 8**! "at most / maximum" ka matlab limit ke andar ⇒ **≤**!
2. **Non-negativity restrictions (x ≥ 0, y ≥ 0) bhool jana:**
   - Galat: Sirf resource constraints likh kar chhod dena.
   - Sahi: Bina x ≥ 0, y ≥ 0 ke graph sab quadrants mein chala jayega aur negative items ka meaningless answer aayega!
3. **Rows aur columns mix kar dena (table banaye bina):**
   - Galat: Product A ke dono machine hours ko ek hi constraint mein add kar dena (2x + 1x ≤ 10).
   - Sahi: Har **resource** (Machine M₁, Machine M₂, Vitamin A, Budget) ka apna ek alag constraint banta hai — jisme dono x aur y aate hain!

---

## Quick Recap

- Every LPP has: **Decision variables (x, y)**, **Objective function (Max/Min Z = c₁x + c₂y)**, **Linear constraints**, and **x ≥ 0, y ≥ 0**.
- Make a quick **resource-vs-product table** first: each resource row becomes one constraint!
- "at most" ⇒ **≤**; "at least" ⇒ **≥**.

---

## Practice Questions

1. A tailor stitches shirts (x) and trousers (y). A shirt needs 2 m of cloth and 1 hour; a trouser needs 3 m of cloth and 2 hours. Available cloth is 60 m and time is 35 hours. Profits are ₹120/shirt and ₹200/trouser. Formulate the LPP to maximize profit.
2. A student plans study hours for Maths (x) and Physics (y). Total study time is at most 6 hours, Maths needs at least 2 hours, and Physics needs at least 1 hour. Score gain is 10 points/hr in Maths and 8 points/hr in Physics. Formulate the LPP to maximize score gain.
3. A farmer mixes two fertilizers F₁ (₹40/kg: 10% N, 6% P) and F₂ (₹50/kg: 5% N, 10% P) to get at least 14 kg of nitrogen (N) and 14 kg of phosphorus (P). Formulate the LPP to minimize cost.
4. A toy company makes dolls (x) and robots (y). Each doll gives ₹15 profit and each robot gives ₹25 profit. Total toys cannot exceed 100, and robots can be at most twice the number of dolls. Formulate the LPP.
5. Check which of the following is NOT a valid linear constraint: (a) 3x − 2y ≤ 12, (b) x + y ≥ 5, (c) xy ≤ 20, (d) x ≥ 0.
6. A sweet shop packs two gift boxes A and B. Box A has 4 laddoos and 2 barfis (profit ₹60); Box B has 2 laddoos and 3 barfis (profit ₹50). Available stock: 100 laddoos, 90 barfis. Formulate the LPP.
7. A company invests ₹x in Bond A (8% return) and ₹y in Bond B (10% return). Total investment ≤ ₹1,00,000; Bond A ≥ ₹20,000; Bond B ≤ ₹60,000. Formulate the LPP to maximize annual return.
8. Simplify the constraint 1500x + 2500y ≤ 75000 into its lowest integer coefficients.
9. Write the constraint for: "The number of chairs (y) must be at least 10 more than twice the number of tables (x)."
10. State True or False: In a Linear Programming Problem, the objective function can be Z = 4x² + 3y.

### Answers

1. **Maximize Z = 120x + 200y** subject to **2x + 3y ≤ 60**, **x + 2y ≤ 35**, **x ≥ 0, y ≥ 0**.
2. **Maximize Z = 10x + 8y** subject to **x + y ≤ 6**, **x ≥ 2**, **y ≥ 1**.
3. **Minimize Z = 40x + 50y** subject to **0.10x + 0.05y ≥ 14** (⇒ **2x + y ≥ 280**), **0.06x + 0.10y ≥ 14** (⇒ **3x + 5y ≥ 700**), **x ≥ 0, y ≥ 0**.
4. **Maximize Z = 15x + 25y** subject to **x + y ≤ 100**, **y ≤ 2x** (⇒ **2x − y ≥ 0**), **x ≥ 0, y ≥ 0**.
5. **(c) xy ≤ 20** — it contains a product term xy (degree 2, not linear!).
6. **Maximize Z = 60x + 50y** subject to **4x + 2y ≤ 100** (⇒ **2x + y ≤ 50**), **2x + 3y ≤ 90**, **x ≥ 0, y ≥ 0**.
7. **Maximize Z = 0.08x + 0.10y** subject to **x + y ≤ 100000**, **x ≥ 20000**, **0 ≤ y ≤ 60000**.
8. Divide by 500: **3x + 5y ≤ 150**. Jaanch: 500(3) = 1500, 500(5) = 2500, 500(150) = 75000 ✅
9. **y ≥ 2x + 10** (or 2x − y ≤ −10).
10. **False** ❌ — x² is non-linear; objective functions in LPP must be strictly linear (ax + by).

---

Ab tum kisi bhi real-world situation ko LPP mein likh sakte ho! Agle part mein hum in LPPs ko graph par plot karke **Corner Point Method** se exact optimal solution nikaalna seekhenge: [Linear Programming (Part 2)](linear-programming-part2.md).
