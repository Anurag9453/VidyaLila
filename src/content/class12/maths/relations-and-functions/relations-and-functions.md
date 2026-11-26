> **Class:** 12 | **Subject:** Mathematics | **Chapter 1:** Relations and Functions

# Types of Relations: Reflexive, Symmetric, Transitive and Equivalence

> **Class 11 bridge:** Cartesian product A × B, relation as a subset of A × B, aur domain/range hum [Class 11 Relations and Functions](../../../class11/maths/relations-and-functions/relations-and-functions.md) mein padh chuke hain. Ab Class 12 mein hum ek hi set A par bane special relations — **Reflexive, Symmetric, Transitive aur Equivalence Relations** — aur unse banne wali **Equivalence Classes** ko deeply samjhenge!

---

Kuldeep apne school ki library mein kitabon ko arrange kar raha tha. Usne do kitabon ke beech ek relation banaya: "Book x aur Book y ke **pages ki sankhya barabar** hai." Kuldeep ne teen baatein notice kin: (1) Har kitab ke pages khud apne barabar hain! (2) Agar x aur y ke pages barabar hain, toh y aur x ke bhi barabar hain! (3) Agar x ke pages y ke barabar aur y ke z ke barabar, toh x aur z ke bhi barabar! Is ek relation ne poori library ko alag-alag **disjoint groups (Equivalence Classes)** mein baant diya — 100-page wali kitabein ek shelf par, 200-page wali doosri shelf par!

Yahi hai **Equivalence Relation** ki asli shakti!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Empty Relation (∅)** | Set A par aisa relation jismein A ka koi bhi element kisi se related na ho (R = ∅ ⊂ A × A) |
| **Universal Relation (A × A)** | Set A par aisa relation jismein A ka har element A ke har element se related ho (R = A × A) |
| **Reflexive Relation** | Jab set A ke **HAR element a** ke liye **(a, a) ∈ R** ho |
| **Symmetric Relation** | Jab har (a, b) ∈ R ke liye **(b, a) ∈ R** bhi maujood ho |
| **Transitive Relation** | Jab har (a, b) ∈ R aur (b, c) ∈ R ke liye **(a, c) ∈ R** bhi maujood ho |
| **Equivalence Relation** | Woh relation jo **Reflexive, Symmetric, AUR Transitive** teeno ho |
| **Equivalence Class [a]** | Set A ke un sabhi elements ka set jo element 'a' se equivalence relation R dwara jude hon |

---

## 1. Empty and Universal Relations (Trivial Relations)

Maan lo set A = {1, 2, 3}:
- **Empty relation:** R₁ = {(a, b) : a − b = 10}. Kisi bhi do elements ka antar 10 nahi ho sakta → R₁ = ∅.
- **Universal relation:** R₂ = {(a, b) : |a − b| ≥ 0}. Har pair ka modulus ≥ 0 hai → R₂ = A × A (9 pairs).

---

## 2. Reflexive, Symmetric, Transitive & Equivalence Relations

Let R be a relation defined on a non-empty set A:

1. **Reflexive:** (a, a) ∈ R **for EVERY a ∈ A**.
   - *Counterexample to disprove:* Agar set A = {1, 2, 3} mein (1, 1) aur (2, 2) hain par **(3, 3) missing** hai → **NOT reflexive!**
2. **Symmetric:** Whenever (a, b) ∈ R, we must have **(b, a) ∈ R**.
   - *Tip:* Agar (a, b) ∈ R hi nahi hai, toh symmetry fail nahi hoti! Fail sirf tab hoti hai jab (a, b) ∈ R ho par (b, a) ∉ R.
3. **Transitive:** Whenever (a, b) ∈ R **AND** (b, c) ∈ R, we must have **(a, c) ∈ R**.
   - *Vacuous truth trap (SUPER IMPORTANT!):* Agar R mein aisa koi pair (a, b) aur (b, c) milta hi nahi jahan pehle ka second aur doosre ka first match kare — jaise R = {(1, 2)} on A = {1, 2, 3} — toh R **AUTOMATICALLY TRANSITIVE** hota hai! Kyunki transitivity todne ke liye (a, b) aur (b, c) dono ka hona zaroori hai!
4. **Equivalence Relation:** R is **Reflexive + Symmetric + Transitive**.

---

## 3. Equivalence Classes and Partition of a Set

Ek equivalence relation R, poore set A ko mutually **disjoint non-empty subsets** (Equivalence Classes) mein baant deta hai, jinka union wapas poora set A hota hai!
- Example: Set of integers **Z** par relation R = {(a, b) : a − b is divisible by 3}.
  - **Equivalence class [0]** = {..., −6, −3, 0, 3, 6, ...} (remainder 0 mod 3)
  - **Equivalence class [1]** = {..., −5, −2, 1, 4, 7, ...} (remainder 1 mod 3)
  - **Equivalence class [2]** = {..., −4, −1, 2, 5, 8, ...} (remainder 2 mod 3)
  - Dekho: [0], [1], [2] aapas mein bilkul **disjoint** hain (koi common element nahi), aur [0] ∪ [1] ∪ [2] = **Z**!

---

## Solved Examples

### Example 1: Testing Reflexivity, Symmetry & Transitivity on a Finite Set
Let A = {1, 2, 3} and R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)}. Check whether R is reflexive, symmetric, and transitive.

**Solution:**
- **Reflexive:** (1, 1), (2, 2), (3, 3) are ALL in R → **Reflexive**.
- **Symmetric:** (1, 2) ∈ R, but (2, 1) ∉ R → **Not symmetric**.
- **Transitive:** (1, 2) ∈ R and (2, 3) ∈ R, but (1, 3) ∉ R → **Not transitive**.

Jaanch: Checking all 3 definitions directly against R gives Reflexive = Yes, Symmetric = No, Transitive = No ✅

---

### Example 2: Proving an Equivalence Relation on Z
Show that the relation R on the set of integers Z defined by R = {(a, b) : 5 divides (a − b)} is an equivalence relation. Also find the equivalence class [2].

**Solution:**
1. **Reflexive:** For any a ∈ Z, a − a = 0 = 5 × 0 (divisible by 5) → (a, a) ∈ R. Hence **reflexive**.
2. **Symmetric:** Let (a, b) ∈ R → a − b = 5k (k ∈ Z) → b − a = 5(−k) (divisible by 5) → (b, a) ∈ R. Hence **symmetric**.
3. **Transitive:** Let (a, b) ∈ R and (b, c) ∈ R → a − b = 5k and b − c = 5m.
   Adding: (a − b) + (b − c) = a − c = 5(k + m), which is divisible by 5 → (a, c) ∈ R. Hence **transitive**.
Since R is reflexive, symmetric, and transitive, **R is an equivalence relation**.

**Equivalence class [2]:** All integers x such that 5 divides (x − 2), i.e., x = 5k + 2:
**[2] = {..., −8, −3, 2, 7, 12, ...}**.

Jaanch: Pick −3 and 12 from [2]: 12 − (−3) = 15 = 5 × 3 (divisible by 5) ✅

---

### Example 3: Testing R = {(a, b) : a ≤ b²} on Real Numbers R (Classic Counterexamples!)
Show that the relation R on the set of real numbers R defined by R = {(a, b) : a ≤ b²} is neither reflexive, nor symmetric, nor transitive.

**Solution:**
1. **Not Reflexive:** Take a = 1/2 ∈ R. Is 1/2 ≤ (1/2)² = 1/4? **No!** (1/2 > 1/4) → (1/2, 1/2) ∉ R.
2. **Not Symmetric:** Take (1, 2) ∈ R since 1 ≤ 2² = 4. Check (2, 1): is 2 ≤ 1² = 1? **No!** → (2, 1) ∉ R.
3. **Not Transitive:** Take a = 2, b = −2, c = −1 (or a = 3, b = 2, c = 1.5):
   - Check (3, 2): 3 ≤ 2² = 4 (True → (3, 2) ∈ R).
   - Check (2, 1.5): 2 ≤ (1.5)² = 2.25 (True → (2, 1.5) ∈ R).
   - Check (3, 1.5): is 3 ≤ (1.5)² = 2.25? **No!** → (3, 1.5) ∉ R.

Jaanch: 1/2 > 1/4, 2 > 1, and 3 > 2.25 — all three counterexamples are exact and indisputable ✅

---

### Example 4: Equivalence Relation on Ordered Pairs N × N
Let R be a relation on N × N defined by (a, b) R (c, d) ⇔ a + d = b + c. Prove that R is an equivalence relation.

**Solution:**
1. **Reflexive:** For any (a, b) ∈ N × N, a + b = b + a → (a, b) R (a, b).
2. **Symmetric:** Let (a, b) R (c, d) → a + d = b + c → c + b = d + a → (c, d) R (a, b).
3. **Transitive:** Let (a, b) R (c, d) and (c, d) R (e, f) → a + d = b + c and c + f = d + e.
   Add both equations: a + d + c + f = b + c + d + e. Cancel (c + d) from both sides → a + f = b + e → (a, b) R (e, f).
Hence **R is an equivalence relation**!

Jaanch: Test (1, 3), (2, 4), (5, 7): 1+4=3+2 (5=5), 2+7=4+5 (9=9), and 1+7=3+5 (8=8) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Counterexample ke liye sirf integers check karna (Real numbers par!):**
   - *Galat:* R = {(a, b) : a ≤ b²} on real numbers mein a = 1, 2, 3 check karke "1 ≤ 1, 2 ≤ 4 → reflexive!" bol dena.
   - *Sahi:* Real numbers mein **0 aur 1 ke beech ke fractions** (jaise **a = 1/2**) zaroor check karo! 1/2 > 1/4 → NOT reflexive!

2. **Vacuously transitive relation ko non-transitive bol dena:**
   - *Galat:* A = {1, 2, 3} par R = {(1, 2)} mein koi (2, c) nahi hai toh yeh transitive nahi hai.
   - *Sahi:* Transitivity sirf tab fail hoti hai jab (a, b) ∈ R AUR (b, c) ∈ R ho par (a, c) ∉ R! Isliye **R = {(1, 2)} TRANSITIVE hai!**

3. **Ek example dikha kar property ko PROVE kar dena:**
   - *Galat:* 5 divides (7 − 2) aur (2 − 7), isliye symmetric proved!
   - *Sahi:* **Disprove** karne ke liye **1 counterexample** kaafi hai, par **Prove** karne ke liye **general variables (a, b, c)** use karna zaroori hai!

---

## Quick Recap

- **Reflexive:** (a, a) ∈ R, ∀ a ∈ A.
- **Symmetric:** (a, b) ∈ R ⇒ (b, a) ∈ R.
- **Transitive:** (a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R.
- **Equivalence:** Reflexive + Symmetric + Transitive → partitions A into disjoint **Equivalence Classes**.
- **Proving vs Disproving:** General proof to prove; single counterexample (check fractions like 1/2 on R!) to disprove.

---

## Practice Questions

1. Let A = {1, 2, 3, 4} and R = {(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1)}. Determine whether R is reflexive, symmetric, and transitive.
2. Check whether the relation R = {(a, b) : a ≤ b} on the set of real numbers R is reflexive, symmetric, and transitive.
3. Show that the relation R on the set of all lines in a plane given by R = {(L₁, L₂) : L₁ is perpendicular to L₂} is symmetric, but neither reflexive nor transitive.
4. Show that the relation R on the set of all lines in a plane given by R = {(L₁, L₂) : L₁ is parallel to L₂} is an equivalence relation. Find the set of all lines related to y = 2x + 4.
5. Prove that the relation R on A = {0, 1, 2, ..., 12} defined by R = {(a, b) : |a − b| is a multiple of 4} is an equivalence relation. Find the equivalence class [1].
6. Show that R = {(a, b) : a ≤ b³} on real numbers R is neither reflexive, nor symmetric, nor transitive.
7. Give an example of a relation on A = {1, 2, 3} which is: (a) symmetric and transitive, but not reflexive; (b) reflexive and symmetric, but not transitive.
8. On the set of natural numbers N, let R = {(x, y) : y = x + 5 and x < 4}. Write R in roster form and check whether it is reflexive, symmetric, or transitive.
9. Let R be a relation on N × N defined by (a, b) R (c, d) ⇔ ad = bc. Show that R is an equivalence relation.
10. Find the minimum number of ordered pairs to be added to R = {(1, 2), (2, 3)} on A = {1, 2, 3} to make it an equivalence relation.

---

### Answers

1. All (a, a) present → **Reflexive**. (1, 2) & (2, 1) present → **Symmetric**. Check transitivity: (1, 2) and (2, 1) ⇒ (1, 1) ∈ R; (2, 1) and (1, 2) ⇒ (2, 2) ∈ R → **Transitive**. Hence **Equivalence relation**.
2. - Reflexive: a ≤ a is always true → **Yes**.
   - Symmetric: 1 ≤ 2, but 2 ≤ 1 is false → **No**.
   - Transitive: a ≤ b and b ≤ c ⇒ a ≤ c → **Yes**.
3. - Not reflexive: No line is perpendicular to itself (L₁ ⊥ L₁ is false).
   - Symmetric: If L₁ ⊥ L₂, then L₂ ⊥ L₁ → **Yes**.
   - Not transitive: If L₁ ⊥ L₂ and L₂ ⊥ L₃, then L₁ is **parallel** (not perpendicular) to L₃!
4. - Reflexive (L₁ ∥ L₁), Symmetric (L₁ ∥ L₂ ⇒ L₂ ∥ L₁), Transitive (L₁ ∥ L₂ and L₂ ∥ L₃ ⇒ L₁ ∥ L₃) → **Equivalence relation**.
   - Lines related (parallel) to y = 2x + 4 have the same slope 2: **{y = 2x + c : c ∈ R}**.
5. - Reflexive: |a − a| = 0 = 4 × 0. Symmetric: |a − b| = |b − a|. Transitive: if a − b = ±4k and b − c = ±4m, then a − c = 4(±k ± m) → multiple of 4 → **Equivalence relation**.
   - Equivalence class **[1] = {1, 5, 9}** (elements in A where |x − 1| is a multiple of 4).
   Jaanch: |5−1|=4, |9−1|=8, |9−5|=4 ✅
6. - Not reflexive: a = 1/2 gives 1/2 > (1/2)³ = 1/8.
   - Not symmetric: (1, 2) ∈ R (1 ≤ 8), but (2, 1) ∉ R (2 > 1).
   - Not transitive: **(10, 3) ∈ R** (10 ≤ 27) and **(3, 2) ∈ R** (3 ≤ 8), but **(10, 2) ∉ R** (10 > 8)!
   Jaanch: 10 ≤ 27 (True), 3 ≤ 8 (True), 10 ≤ 8 (False) ✅
7. (a) **R = {(1, 1), (2, 2), (1, 2), (2, 1)}** (missing (3, 3) → not reflexive!).
   (b) **R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1), (2, 3), (3, 2)}** (missing (1, 3) → not transitive!).
8. For x ∈ {1, 2, 3}: **R = {(1, 6), (2, 7), (3, 8)}**.
   - Not reflexive ((1, 1) ∉ R).
   - Not symmetric ((1, 6) ∈ R, (6, 1) ∉ R).
   - **Transitive!** (Vacuously true — no pairs of form (a, b) and (b, c) exist in R!).
9. - Reflexive: ab = ba.
   - Symmetric: ad = bc ⇒ cb = da ⇒ (c, d) R (a, b).
   - Transitive: ad = bc and cf = de ⇒ (ad)(cf) = (bc)(de) ⇒ divide by cd (nonzero since c, d ∈ N) ⇒ af = be ⇒ (a, b) R (e, f). Hence **Equivalence relation**.
10. To be reflexive: add (1, 1), (2, 2), (3, 3) [3 pairs].
    To be symmetric: add (2, 1), (3, 2) [2 pairs].
    To be transitive (from (1, 2) & (2, 3)): add (1, 3), and by symmetry add (3, 1) [2 pairs].
    Total pairs to add = 3 + 2 + 2 = **7 ordered pairs** (making it the universal relation of 9 pairs!).
    Jaanch: 2 existing + 7 added = 9 = 3² ✅

---

Ab tum kisi bhi relation ki reflexivity, symmetry, transitivity aur equivalence classes bilkul precision ke saath check kar sakte ho!

**Agle topic mein:** Hum [Types of Functions: One-One, Onto and Bijective](relations-and-functions-part2.md) padhenge — aur dekhenge ki sirf domain/codomain badalne se ek hi function f(x) = x² kaise bijective ban jata hai ya fail ho jata hai!
