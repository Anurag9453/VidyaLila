> **Class:** 12 | **Subject:** Mathematics | **Chapter 1:** Relations and Functions (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic mein:** Humne [Binary Operations](relations-and-functions-part4.md) padhe. Ab hum poore Relations and Functions chapter — equivalence relations, bijective functions, composition, inverses aur binary operations — ko ek saath jodkar mixed high-scoring problems solve karenge!

---

Muskan apne school ke Maths Club ka "Logic Relay" host kar rahi thi: 4 desks par 4 alag challenges the — Desk 1 par equivalence classes on {0, 1, ..., 9}, Desk 2 par rational bijection & inverse, Desk 3 par composition reversal (g ∘ f)⁻¹, aur Desk 4 par modular binary operation! Jo team charon desks bina ek bhi domain trap mein phanse paar karti, wahi trophy jeet-ti!

---

## Naye Shabd (Chapter Formula Snapshot)

- **Equivalence:** Reflexive + Symmetric + Transitive → disjoint Equivalence Classes.
- **Bijective ⇔ Invertible:** One-one (f(x₁) = f(x₂) ⇒ x₁ = x₂) + Onto (Range = Codomain).
- **Composition & Inverse:** (g ∘ f)(x) = g(f(x)); **(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹**.
- **Finite Counts (|A| = m, |B| = n):** Total functions = nᵐ; One-one = ⁿPₘ (m ≤ n); Bijections = n! (m = n); Binary ops on A = m^(m²).

---

## Mixed Solved Examples

### Example 1: Equivalence Relation on Z × Z + Equivalence Class
On Z × (Z − {0}), define (a, b) R (c, d) ⇔ ad = bc. Show R is an equivalence relation and find the equivalence class of (1, 2).

**Solution:**
1. **Reflexive:** ab = ba → (a, b) R (a, b).
2. **Symmetric:** ad = bc ⇒ cb = da → (c, d) R (a, b).
3. **Transitive:** ad = bc and cf = de ⇒ (ad)(cf) = (bc)(de). If c ≠ 0, divide by cd (d ≠ 0) ⇒ af = be. If c = 0, then ad = 0 ⇒ a = 0 (since d ≠ 0) and de = 0 ⇒ e = 0 ⇒ af = 0 = be! Thus (a, b) R (e, f) in all cases!
Hence **R is an equivalence relation**.
**Equivalence class [(1, 2)]:** All pairs (x, y) with 2x = y (y ≠ 0), i.e., **{(k, 2k) : k ∈ Z − {0}}** = {..., (−2, −4), (−1, −2), (1, 2), (2, 4), ...} (all fractions equal to 1/2!).

Jaanch: Pick (−1, −2) and (3, 6): (−1)(6) = (−2)(3) = −6 ✅

---

### Example 2: Combining Bijection, Composition & Inverse
Let f: R → R be f(x) = 3x − 2 and g: R → R be g(x) = (x + 2) / 3.
(a) Compute (g ∘ f)(x) and (f ∘ g)(x).
(b) What does this prove about f and g?
(c) Find (f ∘ f)(x).

**Solution:**
(a) (g ∘ f)(x) = g(3x − 2) = [(3x − 2) + 2] / 3 = 3x / 3 = **x**.
    (f ∘ g)(x) = f((x + 2)/3) = 3[(x + 2)/3] − 2 = (x + 2) − 2 = **x**.
(b) Since g ∘ f = I_R and f ∘ g = I_R, **f is bijective (invertible) and g = f⁻¹**!
(c) (f ∘ f)(x) = f(3x − 2) = 3(3x − 2) − 2 = **9x − 8**.

Jaanch: At x = 4: f(4) = 10, g(10) = 4, f(f(4)) = f(10) = 28 = 9(4) − 8 ✅

---

### Example 3: Counting Equivalence Relations on a 3-Element Set
Find the total number of equivalence relations containing **(1, 2)** on the set A = {1, 2, 3}.

**Solution:**
An equivalence relation partitions A = {1, 2, 3} into disjoint equivalence classes. Since (1, 2) ∈ R, elements **1 and 2 MUST be in the same equivalence class!**
Two possible partitions keep {1, 2} together:
1. **{ {1, 2}, {3} }** → R₁ = {(1,1), (2,2), (3,3), (1,2), (2,1)}
2. **{ {1, 2, 3} }** → R₂ = A × A (universal relation, all 9 pairs)
Total = **2 equivalence relations**!

Jaanch: No other partition of {1, 2, 3} places 1 and 2 together ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **Equivalence relation containing (1, 2) mein sirf {(1,1),(2,2),(3,3),(1,2),(2,1)} ginna aur universal relation bhool jana:**
   - *Galat:* Answer = 1.
   - *Sahi:* Universal relation (A × A) mein bhi (1, 2) hota hai → Answer = **2**!

2. **a * b = a + b + ab on R mein −1 ka inverse nikalne ki koshish karna:**
   - *Galat:* a⁻¹ = −a/(1+a) sabhi real numbers ke liye valid hai.
   - *Sahi:* a = −1 par denominator 0 ho jata hai! Isliye −1 invertible **nahi** hai (sirf R − {−1} invertible hai!).

---

## Quick Recap

- **Partition trick:** Counting equivalence relations on small sets = counting partitions!
- **Bijection shortcut:** To prove f is bijective AND find f⁻¹, find g with g ∘ f = I_A and f ∘ g = I_B in one go!
- **Always check domain boundaries:** Fractions on R for relations, denominator ≠ 0 for rational functions and binary inverses.

---

## Practice Questions

1. Let A = {1, 2, 3}. Find the total number of equivalence relations on A containing (1, 2) and (2, 1).
2. Show that R = {(a, b) : |a − b| is even} on A = {1, 2, 3, 4, 5} is an equivalence relation. Show that all elements of {1, 3, 5} are related to each other, and no element of {1, 3, 5} is related to any element of {2, 4}.
3. Let f: R → R be f(x) = x³ + 5. Prove that f is bijective and find f⁻¹(x).
4. Let f: R − {−4/3} → R − {4/3} be f(x) = 4x / (3x + 4). Find f⁻¹(y).
5. If f(x) = (x + 1)/(x − 1) for x ≠ 1, find (f ∘ f)(x) and hence write f⁻¹(x).
6. Let f: {1, 2, 3} → {a, b} be a function. How many total functions, one-one functions, and onto functions exist from {1, 2, 3} to {a, b}?
7. On Q, define a * b = a + b − ab. Check commutativity and associativity, and find which rational numbers are invertible under *.
8. Let f(x) = 2x + 3 and g(x) = x² + 1 on R. Find (g ∘ f)(1) and (f ∘ g)(1).
9. On S = {0, 1, 2, 3, 4}, define a * b = (a + b) mod 5. Find the identity element and the inverse of 3.
10. Show that f: R → [−1, 1] defined by f(x) = sin x is onto, but NOT one-one.

---

### Answers

1. Same as keeping 1 and 2 in the same partition block → **2** equivalence relations: {{1,2},{3}} and {{1,2,3}}.
2. Reflexive (|a−a|=0, even), Symmetric (|a−b|=|b−a|), Transitive (even ± even = even) → Equivalence relation. Difference of two odd numbers ({1,3,5}) is even; difference of an odd and an even number ({2,4}) is odd, so no element of {1,3,5} relates to {2,4}.
3. One-one: x₁³ + 5 = x₂³ + 5 ⇒ x₁³ = x₂³ ⇒ x₁ = x₂.
   Onto: y = x³ + 5 ⇒ **x = (y − 5)¹/³ ∈ R** for all y ∈ R → Bijective!
   **f⁻¹(x) = (x − 5)¹/³**.
   Jaanch: At x = 2: f(2) = 13; f⁻¹(13) = 8¹/³ = 2 ✅
4. y = 4x / (3x + 4) ⇒ 3xy + 4y = 4x ⇒ x(4 − 3y) = 4y ⇒ **f⁻¹(y) = 4y / (4 − 3y)** (valid for y ≠ 4/3).
   Jaanch: At x = 4: f(4) = 16/16 = 1; f⁻¹(1) = 4/(4 − 3) = 4 ✅
5. f(f(x)) = [(x+1)/(x−1) + 1] / [(x+1)/(x−1) − 1] = [2x] / [2] = **x**!
   Since f ∘ f = I, **f⁻¹(x) = f(x) = (x + 1)/(x − 1)**!
   Jaanch: At x = 3: f(3) = 4/2 = 2; f(2) = 3/1 = 3 ✅
6. |A| = 3, |B| = 2:
   - Total functions = 2³ = **8**.
   - One-one functions = **0** (m = 3 > n = 2).
   - Onto functions = Total − (functions hitting only {a} or only {b}) = 8 − 2 = **6**!
   Jaanch: Only 2 constant functions fail to be onto → 8 − 2 = 6 ✅
7. Commutative (a+b−ab = b+a−ba); Associative ((a+b−ab)+c−(a+b−ab)c = a+b+c−ab−bc−ca+abc, symmetric in a,b,c!).
   Identity: e = 0. Inverse: a⁻¹ = a/(a − 1) → **all rational numbers EXCEPT a = 1** are invertible!
8. (g ∘ f)(1) = g(5) = 5² + 1 = **26**; (f ∘ g)(1) = f(2) = 2(2) + 3 = **7**.
   Jaanch: 2(1)+3=5 → 25+1=26; 1²+1=2 → 4+3=7 ✅
9. Identity **e = 0**. Inverse of 3: (3 + b) mod 5 = 0 ⇒ **b = 2** (3 + 2 = 5 ≡ 0 mod 5).
10. Range of sin x on R is [−1, 1] = Codomain → **Onto**. But sin(0) = sin(π) = 0 (0 ≠ π) → **Not one-one**.

---

## Chapter Ka Saar (Relations and Functions Wrap-up)

| Topic | Core Definition / Formula | Key Takeaway |
|---|---|---|
| 1. Types of Relations | Reflexive (a,a), Symmetric (a,b)⇒(b,a), Transitive (a,b),(b,c)⇒(a,c) | All 3 = Equivalence → partitions set into disjoint equivalence classes |
| 2. Types of Functions | One-one: f(x₁)=f(x₂)⇒x₁=x₂; Onto: Range = Codomain | Bijective = One-one + Onto; check Domain & Codomain carefully! |
| 3. Composition & Inverse | (g ∘ f)(x) = g(f(x)); Invertible ⇔ Bijective | Associative, not commutative; **(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹** |
| 4. Binary Operations | *: A × A → A; identity a*e = e*a = a; inverse a*b = e | Closure mandatory; total ops on n elements = **n^(n²)** |

---

Ab tumne Relations and Functions ke sabhi core concepts aur proofs master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Counting Reflexive/Symmetric/Equivalence Relations (Bell Numbers), Principle of Inclusion–Exclusion for Onto Functions, aur Functional Equations** padhne ke liye [Relations and Functions — Gehrai Mein (Advanced Level)](relations-and-functions-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum **Inverse Trigonometric Functions** shuru karenge — jahan sin x, cos x, tan x ke domains ko restrict karke unke principal value branches aur identities nikalenge!
