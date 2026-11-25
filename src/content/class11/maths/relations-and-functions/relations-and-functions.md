# Chapter: Relations and Functions

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [sets-part5.md](../sets/sets-part5.md) tha** (Sets ka aakhri topic, jiske teaser ne vaada kiya tha ki ab hum do sets ke elements ko aapas mein **jodna** seekhenge). Ordered pairs aur Cartesian plane ka pehla parichay Class 9 mein dekha tha: [coordinate-geometry.md](../../../class9/maths/coordinate-geometry/coordinate-geometry.md) (yahan hum usi vichaar ko kisi bhi do sets par aage badhayenge).
> **Topics covered in this file:**
> 1. Ordered Pairs Aur Cartesian Product of Sets

---

# Topic 1: Ordered Pairs Aur Cartesian Product of Sets

Chapter 1 mein humne dekha ki kisi **set** mein elements ke kram (order) se koi farq nahi padta: {3, 5} aur {5, 3} bilkul ek hi set hain. Par zindagi aur Maths mein kai jagah **kram bahut maayne rakhta hai** — jaise cinema hall ki seat number, map ke coordinates, ya kisi machine ka (input, output) joda! Is pehle topic mein hum **Ordered Pairs** aur do (ya teen) sets ke **Cartesian Product (A × B)** ko samjhenge, jo poore Relations aur Functions chapter ki neev hai.

---

## Rakesh ka cinema ticket aur snack combo

Saturday shaam ko Rakesh apne Papa ke saath cinema dekhne gaya. Ticket par seat likhi thi **(Row 3, Seat 5)**. Andar jaakar Rakesh galti se Row 5, Seat 3 par baith gaya. Usher bhaiya ne torch dikhakar kaha, "Beta, ye (5, 3) hai, tumhari seat (3, 5) hai — dono alag jagah hain!"

Interval mein Rakesh snack counter par gaya. Wahan **2 snacks** the — S = {popcorn, samosa} — aur **3 drinks** the — D = {water, lassi, juice}. Papa ne kaha, "Ek snack aur ek drink ka combo chuno."

Rakesh ne saare possible combos ginke dekhe:
(popcorn, water), (popcorn, lassi), (popcorn, juice),
(samosa, water), (samosa, lassi), (samosa, juice).

Kul **2 × 3 = 6 combos**! Rakesh ne dekha ki har combo mein **pehli cheez** set S se aayi aur **doosri cheez** set D se, aur unka **kram** tay tha. Maths mein is poori list ko hi **Cartesian Product S × D** kehte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Ordered pair (a, b)** | Do cheezon ka aisa joda jisme pehla aur doosra sthaan (order) pakka ho | (3, 5) ≠ (5, 3) |
| **Equality of ordered pairs** | Do ordered pairs tabhi barabar jab pehla = pehla AUR doosra = doosra | (a, b) = (c, d) ⟺ a = c aur b = d |
| **Cartesian product (A × B)** | Sabhi ordered pairs (a, b) ka set jahan a ∈ A aur b ∈ B | {1, 2} × {x, y} |
| **Ordered triplet (a, b, c)** | Teen cheezon ka kram-baddh joda (A × B × C ka element) | (1, −1, 1) |
| **n(A × B)** | A × B mein kul ordered pairs ki ginti = n(A) × n(B) | n(A) = 2, n(B) = 3 ⟹ 6 pairs |

---

## Part A: Ordered Pairs Aur Unki Barabari

Class 9 ke [coordinate-geometry.md](../../../class9/maths/coordinate-geometry/coordinate-geometry.md) mein tumne (x, y) coordinates ke roop mein ordered pair dekha tha. Yahan hum use general roop mein likhte hain:
- Curly brackets **{a, b}** ek **unordered set** hai: {3, 5} = {5, 3}.
- Round brackets **(a, b)** ek **ordered pair** hai: **a** ko **first component** aur **b** ko **second component** kehte hain.
- Jab a ≠ b ho, to **(a, b) ≠ (b, a)**.

### Equality ka niyam

> **(a, b) = (c, d)  ⟺  a = c  aur  b = d**

(Yaani pehla component pehle ke barabar, aur doosra component doosre ke barabar!)

### Example 1: Ordered Pairs ki equality se x aur y nikaalna

Agar **(3x + 1, y − 2/3) = (7, 1/3)** ho, to x aur y ke maan nikalo.

**Hal:**
Ordered pairs ki equality ke niyam se:
1. Pehla component: 3x + 1 = 7 ⟹ 3x = 6 ⟹ **x = 2**.
2. Doosra component: y − 2/3 = 1/3 ⟹ y = 1/3 + 2/3 = 3/3 = **1**.

**Jaanch:** x = 2 rakhne par 3(2) + 1 = 7 ✅; y = 1 rakhne par 1 − 2/3 = 1/3 ✅.

---

## Part B: Cartesian Product of Two Sets (A × B)

Do non-empty sets A aur B ka **Cartesian product** (likhte hain **A × B**, padhte hain "A cross B") un **sabhi ordered pairs (a, b)** ka set hai jahan pehla element A se aur doosra element B se liya gaya ho:

> **A × B = {(a, b) : a ∈ A  aur  b ∈ B}**

```
   A = {a, b}           B = {1, 2, 3}

      a  -------> 1  ==> (a, 1)
         -------> 2  ==> (a, 2)
         -------> 3  ==> (a, 3)

      b  -------> 1  ==> (b, 1)
         -------> 2  ==> (b, 2)
         -------> 3  ==> (b, 3)
```

> **Figure 1.1** – P × Q banana: P ke har ek element ko Q ke sabhi elements ke saath baari-baari jodo. 2 × 3 = 6 ordered pairs bante hain.

### Chaar Zaroori Niyam (Kyun?)

1. **A × B aur B × A aam taur par barabar NAHI hote:** A × B mein pehla member A se hota hai, jabki B × A mein pehla member B se. (Sirf tab barabar hote hain jab A = B ho, ya koi ek ∅ ho!)
2. **Ginti ka formula:** Agar n(A) = p aur n(B) = q, to **n(A × B) = p × q = n(A) × n(B)**.
   *Kyun?* Pehla component chunne ke p tareeke aur har ek ke saath doosra chunne ke q tareeke → kul p × q pairs!
3. **Empty set ke saath:** Agar A = ∅ ya B = ∅ (ya dono), to koi pair ban hi nahi sakta → **A × B = ∅**.
4. **Infinite set ke saath:** Agar A aur B non-empty hon aur unme se kam se kam ek infinite ho, to **A × B bhi infinite** hota hai. (Jaise **R × R** poora 2D coordinate plane hai!)

### Example 2: P × Q aur Q × P nikaalna (Non-commutativity check)

Maan lo **P = {a, b}** aur **Q = {1, 2, 3}**.
(i) P × Q nikalo. (ii) Q × P nikalo. (iii) Kya P × Q = Q × P? Kya n(P × Q) = n(Q × P)?

**Hal:**
- (i) **P × Q = {(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}**
- (ii) **Q × P = {(1, a), (1, b), (2, a), (2, b), (3, a), (3, b)}**
- (iii) **(a, 1) ∈ P × Q** hai par **(a, 1) ∉ Q × P**, isliye **P × Q ≠ Q × P**!
  Par dono mein pairs ki ginti barabar hai: **n(P × Q) = 2 × 3 = 6 = 3 × 2 = n(Q × P)** (dono sets equivalent hain, equal nahi!).

**Jaanch:** n(P × Q) = 6 aur n(Q × P) = 6 ✅; (a, 1) ≠ (1, a) isliye P × Q ≠ Q × P ✅.

### Example 3: Ulta Sawaal — A × B se A aur B pehchanna

Agar **A × B = {(p, 1), (p, 2), (q, 1), (q, 2), (r, 1), (r, 2)}**, to sets A aur B nikalo.

**Hal:**
- **A** = sabhi **first** components ka set (bina repeat): **A = {p, q, r}**.
- **B** = sabhi **second** components ka set (bina repeat): **B = {1, 2}**.

**Jaanch:** n(A) × n(B) = 3 × 2 = 6 = n(A × B), aur {p, q, r} × {1, 2} wahi 6 pairs deta hai ✅.

---

## Part C: Ordered Triplets (A × A × A) Aur 3D Space

Bilkul do sets ki tarah, hum **teen** sets A, B, C ka Cartesian product bana sakte hain:

> **A × B × C = {(a, b, c) : a ∈ A, b ∈ B, c ∈ C}**

Har element (a, b, c) ko **ordered triplet** kehte hain, aur **n(A × B × C) = n(A) × n(B) × n(C)**.
Khaas case: **R × R × R** (jise R³ bhi likhte hain) 3-dimensional space ke sabhi points (x, y, z) ko dikhata hai!

### Example 4: A × A × A nikaalna

Maan lo **A = {−1, 1}**. A × A × A nikalo aur uske elements ki ginti check karo.

**Hal:**
- Pehle A × A nikalo:
  A × A = {(−1, −1), (−1, 1), (1, −1), (1, 1)}  (kul 2 × 2 = 4 pairs).
- Ab har pair ke saath teesra element −1 aur 1 jodo:
  **A × A × A = {(−1, −1, −1), (−1, −1, 1), (−1, 1, −1), (−1, 1, 1), (1, −1, −1), (1, −1, 1), (1, 1, −1), (1, 1, 1)}**.
- Kul ginti = 2 × 2 × 2 = **8 triplets**.

**Jaanch:** n(A × A × A) = 2³ = 8 distinct triplets ✅.

---

## Part D: Cartesian Product Aur Set Operations Ke Identities

Chapter 1 ke ∪, ∩ aur − operations Cartesian product par **distribute** ho jaate hain (stated and checked on examples; element-chasing proof bhi seedha hai):

1. **A × (B ∪ C) = (A × B) ∪ (A × C)**
2. **A × (B ∩ C) = (A × B) ∩ (A × C)**
3. **A × (B − C) = (A × B) − (A × C)**

### Example 5: Distributive Identities ki verification

Maan lo **A = {1, 2}**, **B = {2, 3, 4}**, aur **C = {4, 5}**.
Verify karo: (i) A × (B ∩ C) = (A × B) ∩ (A × C), aur (ii) A × (B ∪ C) = (A × B) ∪ (A × C).

**Hal:**
- Pehle A × B aur A × C likho:
  - A × B = {(1, 2), (1, 3), (1, 4), (2, 2), (2, 3), (2, 4)}
  - A × C = {(1, 4), (1, 5), (2, 4), (2, 5)}
- **(i) Intersection check:**
  - LHS: B ∩ C = {4} ⟹ A × (B ∩ C) = {1, 2} × {4} = **{(1, 4), (2, 4)}**.
  - RHS: (A × B) ∩ (A × C) = **{(1, 4), (2, 4)}**.
  - Dono bilkul barabar!
- **(ii) Union check:**
  - LHS: B ∪ C = {2, 3, 4, 5} ⟹ A × (B ∪ C) = **{(1, 2), (1, 3), (1, 4), (1, 5), (2, 2), (2, 3), (2, 4), (2, 5)}** (8 pairs).
  - RHS: (A × B) ∪ (A × C) = **{(1, 2), (1, 3), (1, 4), (1, 5), (2, 2), (2, 3), (2, 4), (2, 5)}** (8 pairs).
  - Dono bilkul barabar!

**Jaanch:** (i) mein dono taraf 2 pairs ✅; (ii) mein dono taraf 2 × 4 = 8 pairs ✅.

### Example 6: Cardinality aur Subsets of A × B

Agar n(A) = 4 aur n(B) = 5, to:
(i) n(A × B) nikalo.
(ii) A × B ke kul kitne subsets ban sakte hain?
(iii) Agar A aur B mein 2 elements common hon (n(A ∩ B) = 2), to (A × B) aur (B × A) mein kitne ordered pairs common honge?

**Hal:**
- (i) n(A × B) = 4 × 5 = **20**.
- (ii) Chapter 1 se, 20 elements wale set ke subsets = **2²⁰** (1,048,576).
- (iii) Koi pair (x, y) dono A × B aur B × A mein tabhi hoga jab x ∈ A ∩ B aur y ∈ A ∩ B — yaani **(A × B) ∩ (B × A) = (A ∩ B) × (A ∩ B)**!
  Isliye common pairs ki ginti = 2 × 2 = **4**.

**Jaanch:** Agar A ∩ B = {u, v}, to common pairs {(u, u), (u, v), (v, u), (v, v)} = 4 pairs ✅.

---

## Aam galtiyan

1. **Ordered pair (a, b) ko unordered set {a, b} samajh lena:** Student likhta hai "(2, 5) = (5, 2)".
   - *Galat kyun:* {2, 5} = {5, 2} sach hai (set), par (2, 5) ≠ (5, 2) (ordered pair — pehla aur doosra sthaan alag hai!).
2. **A × B = B × A maan lena:** Student kehta hai "multiplication commutative hota hai to A × B = B × A hoga."
   - *Galat kyun:* Numbers ka guna commutative hai, par Cartesian product mein pairs ka kram palat jaata hai! Sirf unki **ginti** barabar hoti hai: n(A × B) = n(B × A).
3. **n(A × B) = n(A) + n(B) likh dena:** Student 2 snacks aur 3 drinks ke liye 2 + 3 = 5 combos bol deta hai.
   - *Sahi soch:* Har snack ke saath teeno drinks judte hain, isliye **guna** hota hai: n(A × B) = n(A) × n(B) = 2 × 3 = 6.

---

## Quick Recap

- **Ordered pair (a, b):** kram zaroori; **(a, b) = (c, d) ⟺ a = c aur b = d**.
- **Cartesian product:** A × B = {(a, b) : a ∈ A, b ∈ B}; aam taur par **A × B ≠ B × A**.
- **Cardinality:** **n(A × B) = n(A) × n(B)**; agar koi ek ∅ ho to A × B = ∅.
- **Triplets:** A × B × C = {(a, b, c) : a ∈ A, b ∈ B, c ∈ C}, ginti = n(A) × n(B) × n(C).
- **Distributive identities:** A × (B ∪ C) = (A × B) ∪ (A × C), aur yahi ∩ aur − par bhi lagta hai.

---

## Practice Questions

1. Find the values of x and y if:
   (a) (x/3 + 1, y − 2/3) = (5/3, 1/3)
   (b) (2x − 3, x + y) = (5, 9)

2. If G = {7, 8} and H = {5, 4, 2}, find G × H and H × G. Are they equal?

3. If A = {0, 1}, find A × A and A × A × A. Verify the number of elements in each.

4. If the set A has 3 elements and B = {3, 4, 5, 6}, find the number of elements in A × B and B × A.

5. If P × Q = {(m, 4), (m, 7), (n, 4), (n, 7), (k, 4), (k, 7)}, find the sets P and Q.

6. Let A = {1, 2}, B = {1, 2, 3, 4}, C = {5, 6}, and D = {5, 6, 7, 8}. Verify that:
   (a) A × (B ∩ C) = (A × B) ∩ (A × C)
   (b) A × C is a subset of B × D.

7. Let A = {3, 4}, B = {4, 5, 6}, and C = {5, 6, 7}. Verify that A × (B − C) = (A × B) − (A × C).

8. The Cartesian product A × A has 9 elements, among which are found (−1, 0) and (0, 1). Find the set A and the remaining elements of A × A.

9. If A × B has 6 elements and three of its elements are (1, 3), (2, 5), and (3, 3), find A, B, and the remaining elements of A × B.

10. Express the set {(x, y) : x² + y² = 25, where x, y ∈ W} as a set of ordered pairs.

11. If A and B are two non-empty sets having 3 elements in common, how many elements are common to A × B and B × A?

12. True or False? Give a one-line reason:
    (a) If P = {m, n} and Q = {n, m}, then P × Q = {(m, n), (n, m)}.
    (b) If A and B are non-empty sets, then A × B is a non-empty set of ordered pairs (x, y) such that x ∈ A and y ∈ B.
    (c) If A = {1, 2} and B = {3, 4}, then A × (B ∩ ∅) = ∅.

### Answers

1. (a) x/3 + 1 = 5/3 ⟹ x/3 = 2/3 ⟹ **x = 2**; y − 2/3 = 1/3 ⟹ **y = 1**. Jaanch: 2/3 + 1 = 5/3 ✅.
   (b) 2x − 3 = 5 ⟹ 2x = 8 ⟹ **x = 4**; 4 + y = 9 ⟹ **y = 5**. Jaanch: 2(4) − 3 = 5, 4 + 5 = 9 ✅.

2. G × H = **{(7, 5), (7, 4), (7, 2), (8, 5), (8, 4), (8, 2)}** (6 pairs).
   H × G = **{(5, 7), (5, 8), (4, 7), (4, 8), (2, 7), (2, 8)}** (6 pairs).
   Equal nahi hain kyunki (7, 5) ≠ (5, 7).

3. A × A = **{(0, 0), (0, 1), (1, 0), (1, 1)}** (2² = 4 pairs).
   A × A × A = **{(0, 0, 0), (0, 0, 1), (0, 1, 0), (0, 1, 1), (1, 0, 0), (1, 0, 1), (1, 1, 0), (1, 1, 1)}** (2³ = 8 triplets).
   Jaanch: 2 × 2 = 4 aur 2 × 2 × 2 = 8 ✅.

4. n(A) = 3, n(B) = 4 ⟹ n(A × B) = 3 × 4 = **12** aur n(B × A) = 4 × 3 = **12**.

5. First components se **P = {m, n, k}**, second components se **Q = {4, 7}**. Jaanch: 3 × 2 = 6 pairs ✅.

6. (a) B ∩ C = ∅ ⟹ LHS = A × ∅ = **∅**.
   A × B mein second components {1, 2, 3, 4} aur A × C mein {5, 6}, kuch common nahi ⟹ RHS = **∅**. Jaanch: LHS = RHS = ∅ ✅.
   (b) A × C = {(1, 5), (1, 6), (2, 5), (2, 6)}. Har first component ∈ B aur har second component ∈ D, isliye **A × C ⊆ B × D**.

7. LHS: B − C = {4} ⟹ A × (B − C) = {3, 4} × {4} = **{(3, 4), (4, 4)}**.
   RHS: A × B = {(3, 4), (3, 5), (3, 6), (4, 4), (4, 5), (4, 6)}, A × C = {(3, 5), (3, 6), (3, 7), (4, 5), (4, 6), (4, 7)}.
   (A × B) − (A × C) = **{(3, 4), (4, 4)}**. Jaanch: LHS = RHS ✅.

8. n(A × A) = 9 ⟹ n(A)² = 9 ⟹ n(A) = 3.
   Diye pairs (−1, 0) aur (0, 1) ke sabhi components A mein hain, to **A = {−1, 0, 1}**.
   Remaining 7 elements: **(−1, −1), (−1, 1), (0, −1), (0, 0), (1, −1), (1, 0), (1, 1)**. Jaanch: 2 + 7 = 9 ✅.

9. First components {1, 2, 3} ⊆ A aur second components {3, 5} ⊆ B.
   n(A) ≥ 3 aur n(B) ≥ 2, aur n(A) × n(B) = 6 ⟹ **n(A) = 3, n(B) = 2**.
   Isliye **A = {1, 2, 3}** aur **B = {3, 5}**.
   Remaining 3 elements: **(1, 5), (2, 3), (3, 5)**. Jaanch: 3 + 3 = 6 ✅.

10. Whole numbers W = {0, 1, 2, ...} mein x² + y² = 25 ke hal:
    - x = 0 ⟹ y = 5 → (0, 5)
    - x = 3 ⟹ y = 4 → (3, 4)
    - x = 4 ⟹ y = 3 → (4, 3)
    - x = 5 ⟹ y = 0 → (5, 0)
    Set = **{(0, 5), (3, 4), (4, 3), (5, 0)}**. Jaanch: 0²+5²=25, 3²+4²=25 ✅.

11. (A × B) ∩ (B × A) = (A ∩ B) × (A ∩ B), isliye common elements = 3 × 3 = **9**.

12. (a) ❌ False: n(P × Q) = 2 × 2 = 4 hone chahiye: {(m, n), (m, m), (n, n), (n, m)}.
    (b) ✅ True: ye Cartesian product ki seedhi paribhasha hai.
    (c) ✅ True: B ∩ ∅ = ∅, aur A × ∅ = ∅.

---

Ab tum kisi bhi do ya teen sets ke beech sabhi possible ordered pairs (A × B) banana aur ginna seekh chuke ho.

**Agle topic mein:** A × B ke andar se sirf **khaas niyam** maanne wale pairs chhantenge — milenge **Relations, Domain, Codomain aur Range** se!
