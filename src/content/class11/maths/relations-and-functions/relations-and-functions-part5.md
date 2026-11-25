# Chapter: Relations and Functions (Part 5)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [relations-and-functions-part4.md](relations-and-functions-part4.md) se aage chalti hai** (wahan Topic 4 mein Algebra of Real Functions aur Domain-Range nikaalne ke tareeke the). Chapter ki shuruaat: [relations-and-functions.md](relations-and-functions.md). Relations: [relations-and-functions-part2.md](relations-and-functions-part2.md). Standard Functions aur Graphs: [relations-and-functions-part3.md](relations-and-functions-part3.md).
> **Topics covered in this file:**
> 5. Sab Kuch Mila Kar: Mixed Problems, Proofs, Practice Aur Chapter Ka Saar

---

# Topic 5: Sab Kuch Mila Kar: Mixed Problems, Proofs, Practice Aur Chapter Ka Saar

Pichhle chaar topics mein tumne ek seedha aur mazboot safar tay kiya: Ordered pairs aur Cartesian product A × B (Topic 1) → Relations, Domain, Codomain aur Range (Topic 2) → Functions aur 7 standard graphs (Topic 3) → Algebra of real functions aur Domain-Range tricks (Topic 4). Ab waqt hai in sabko **ek saath** jodne ka! Is aakhri topic mein hum ek Decision Map banayenge, 6 mixed exam-style problems hal karenge, 3 aakhri subtle galtiyon se bachenge, 12 mixed practice sawaal lagayenge, aur poore chapter ka saar ek table mein sametenge.

---

## Bipin ka Maths Lab Function Machine Station

School ke Annual Maths Lab Day par Bipin ko **"Function Machine Station"** chalane ki zimmedari mili thi. Uske table par 4 challenge cards rakhe the:
- **Card 1 (Coordinate Grid):** Cartesian product aur set difference ka combo.
- **Card 2 (Arrow-Diagram Auditor):** Ek bade relation ko check karna — kya wo function hai, aur uske Domain, Codomain, Range kya hain?
- **Card 3 (Domain-Range Scanner):** Tricky functions jaise √(9 − x²) aur x²/(1 + x²) ka exact range nikaalna!
- **Card 4 (Function Combiner):** Do alag-domain wale square-root functions ko jodna aur bhaag karna.

Bipin ne pehle apna **Decision Map** board par lagaya taaki har visitor ko turant pata chale kaun sa tool kab uthana hai. Chalo, Bipin ke saath chaaron challenge cards hal karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Piecewise function** | Aisa function jiska formula alag-alag x-intervals par alag hota hai | f(x) = 1 − x (x < 0), 1 (x = 0), x + 1 (x > 0) |
| **Bounded function** | Jiska range kisi seema ke andar band ho (dono taraf se) | √(9 − x²) ka range [0, 3] |
| **Linear function** | f(x) = mx + c roop ka function jiska graph seedhi line hota hai | f(x) = 2x − 1 |

---

## Part A: Kaun Sa Tool Kab? (Decision Map)

| Sawaal ka suraagh | Kaun sa tool lagao? | Pehla kadam | Topic |
|---|---|---|---|
| (ax + b, cy + d) = (p, q) | Ordered pair equality | Pehla = pehla, doosra = doosra likho | Topic 1 |
| A × (B ∪ C), A × (B − C), n(A × B) | Cartesian product + set ops | Pehle bracket wala set operation karo, phir × | Topic 1 |
| "Total number of relations from A to B" | Subset counting | 2^(n(A) × n(B)); non-empty ke liye −1 | Topic 2 |
| Relation diya, Domain/Codomain/Range chahiye | Roster + Arrow check | Domain = used first elements; Codomain = poora B; Range = used second elements | Topic 2 |
| "Is this relation a function?" | Function test / Vertical line | Check: (1) sabhi A use hue? (2) koi first element repeat to nahi? | Topic 3 |
| abs(x), sgn(x), [x] ki value ya graph | Standard function rules | [−2.3] = −3 (hamesha left integer!); abs(x) ≥ 0 | Topic 3 |
| (f + g), (fg), (f/g) ka domain | Intersection + zero check | D₁ ∩ D₂ nikalo; (f/g) ke liye g(x) = 0 bhi hatao | Topic 4 |
| √(a² − x²) ya x²/(1 + x²) ka Range | Inequality ya x in terms of y | 0 ≤ x² ≤ a² lagao ya y = f(x) ko x² ke liye hal karo! | Topic 4 & 5 |

---

## Part B: 6 Mixed Worked Problems

### Example 1: Cartesian Product + Set Difference Combo

Maan lo **A = {2, 4}**, **B = {1, 3, 5}**, aur **C = {3, 5, 7}**.
Verify karo: **A × (B − C) = (A × B) − (A × C)**.

**Hal:**
- **LHS:** B − C = {1}.
  A × (B − C) = {2, 4} × {1} = **{(2, 1), (4, 1)}**.
- **RHS:**
  - A × B = {(2, 1), (2, 3), (2, 5), (4, 1), (4, 3), (4, 5)}
  - A × C = {(2, 3), (2, 5), (2, 7), (4, 3), (4, 5), (4, 7)}
  - (A × B) − (A × C) = **{(2, 1), (4, 1)}**.
- Dono taraf exact wahi 2 pairs mile!

**Jaanch:** LHS = {(2, 1), (4, 1)} = RHS ✅.

---

### Example 2: Relation on A = {1, 2, ..., 14} — Domain, Codomain, Range aur Function Check

Set **A = {1, 2, 3, ..., 14}** par ek relation define hai:
**R = {(x, y) : 3x − y = 0, jahan x, y ∈ A}**.
(i) R ko Roster form mein likho. (ii) Domain, Codomain aur Range nikalo. (iii) Kya R set A par ek Function hai?

**Hal:**
- (i) 3x − y = 0 ⟹ **y = 3x**. A ke elements 1..14 mein y ≤ 14 hona chahiye:
  - x = 1 → y = 3
  - x = 2 → y = 6
  - x = 3 → y = 9
  - x = 4 → y = 12
  - x = 5 → y = 15 ∉ A!
  **R = {(1, 3), (2, 6), (3, 9), (4, 12)}**.
- (ii) **Domain** = {1, 2, 3, 4}, **Codomain** = {1, 2, ..., 14}, **Range** = {3, 6, 9, 12}.
- (iii) **Function NAHI hai** (A se A par)! Kyunki Domain {1, 2, 3, 4} ≠ A (5 se 14 tak ke elements ki koi image nahi hai). *(Agar domain sirf {1, 2, 3, 4} kar diya jaaye, tab ye function ban jaata!)*

**Jaanch:** 3(4) = 12 ≤ 14 aur 3(5) = 15 > 14 ✅.

---

### Example 3: Piecewise Function — Evaluation aur Graph

Maan lo **f : R → R** define hai:
- f(x) = **1 − x**, jab **x < 0**
- f(x) = **1**, jab **x = 0**
- f(x) = **x + 1**, jab **x > 0**

Nikalo f(−3), f(0), f(2), is function ka simple modulus roop pehchano, aur Range batao!

**Hal:**
- f(−3): −3 < 0, to pehli branch lagegi: 1 − (−3) = **4**.
- f(0): x = 0, to doosri branch: **1**.
- f(2): 2 > 0, to teesri branch: 2 + 1 = **3**.
- **Modulus roop:** Dhyan se dekho! Jab x < 0, |x| = −x, to 1 + |x| = 1 − x. Jab x = 0, 1 + |0| = 1. Jab x > 0, 1 + |x| = 1 + x.
  Yaani ye poora piecewise function asal mein **f(x) = 1 + |x|** hi hai!
- **Range:** |x| ≥ 0 ⟹ 1 + |x| ≥ 1 ⟹ **Range = [1, ∞)**.

```
            y
         \  :  /
          \ : /
           \●/   <-- vertex (0, 1)
            :
     -------+------- x
            :
```

> **Figure 5.1** – f(x) = 1 + |x| ka graph: standard V-shape |x| ko 1 unit upar utha diya gaya hai (minimum value 1 at x = 0).

**Jaanch:** f(−3) = 1 + 3 = 4, f(0) = 1, f(2) = 1 + 2 = 3 ✅.

---

### Example 4: Do Classic Tricky Domain & Range Problems

In dono functions ka exact Domain aur Range nikalo:
(i) **f(x) = √(9 − x²)**
(ii) **g(x) = x² / (1 + x²)**

**Hal:**
- **(i) f(x) = √(9 − x²):**
  - **Domain:** Square root ke andar 9 − x² ≥ 0 ⟹ x² ≤ 9 ⟹ **−3 ≤ x ≤ 3**, yaani **Domain = [−3, 3]**.
  - **Range:** Jab x ∈ [−3, 3], to **0 ≤ x² ≤ 9**.
    Negative lagao: −9 ≤ −x² ≤ 0.
    9 jodo: **0 ≤ 9 − x² ≤ 9**.
    Principal square root lo (≥ 0): **0 ≤ √(9 − x²) ≤ 3**!
    Isliye **Range = [0, 3]** (dhyan rahe [−3, 3] nahi!).

- **(ii) g(x) = x² / (1 + x²):**
  - **Domain:** Har real x ke liye x² ≥ 0, isliye denominator 1 + x² ≥ 1 > 0 (kabhi zero nahi hota!).
    Isliye **Domain = R**.
  - **Range:** Do super-clean tareeke hain:
    - *Tareeka 1 (Algebraic):* y = x²/(1 + x²) ⟹ y + yx² = x² ⟹ x²(1 − y) = y ⟹ **x² = y / (1 − y)**.
      Kyunki x² ≥ 0 aur denominator 1 − y ≠ 0:
      - y = 0 par x = 0 (allowed → 0 shamil [).
      - 0 < y < 1 par numerator + aur denominator + → ratio + (allowed!).
      - y ≥ 1 par 1 − y ≤ 0 (ya to 0 se bhaag ya negative → namumkin!).
      - y < 0 par numerator − aur denominator + → ratio − (namumkin!).
      Isliye **Range = [0, 1)**.
    - *Tareeka 2 (Shortcut):* g(x) = 1 − 1/(1 + x²). Kyunki 1 + x² ≥ 1, to 0 < 1/(1 + x²) ≤ 1 ⟹ **0 ≤ g(x) < 1**!

**Jaanch:** (i) f(0) = 3, f(±3) = 0 ✅; (ii) g(0) = 0, g(1) = 1/2, g(10) = 100/101 < 1 ✅.

---

### Example 5: Do Square-Root Functions ka Algebra aur Combined Domain

Maan lo **f(x) = √(x + 2)** aur **g(x) = √(6 − x)**.
Nikalo (f + g)(x) aur (f/g)(x) ke exact domains, aur (f/g)(2) ka maan nikalo.

**Hal:**
- D_f: x + 2 ≥ 0 ⟹ **x ≥ −2**, yaani **[−2, ∞)**.
- D_g: 6 − x ≥ 0 ⟹ **x ≤ 6**, yaani **(−∞, 6]**.
- **Domain(f + g)** = D_f ∩ D_g = [−2, ∞) ∩ (−∞, 6] = **[−2, 6]**.
- **Domain(f/g):** g(x) = 0 par x = 6 hatao → **[−2, 6)**.
- **(f/g)(2)** = √(2 + 2) ÷ √(6 − 2) = √4 ÷ √4 = 2 ÷ 2 = **1**.

**Jaanch:** x = 2 ∈ [−2, 6), √4 / √4 = 1 ✅; x = 6 par g(6) = 0 isliye 6 bahar ✅.

---

### Example 6: Linear Function aur Functional Identity Check

Ek linear function **f(x) = mx + c** points (1, 1) aur (2, 3) se guzarta hai.
(i) f(x) nikalo.
(ii) Check karo kya **f(x + y) = f(x) + f(y)** is function ke liye sach hai?

**Hal:**
- (i) f(1) = 1 ⟹ m + c = 1; f(2) = 3 ⟹ 2m + c = 3.
  Doosre se pehla ghatao: **m = 2**, aur c = 1 − 2 = **−1**.
  Isliye **f(x) = 2x − 1**.
- (ii) x = 1, y = 2 rakh kar check karo:
  - LHS: f(1 + 2) = f(3) = 2(3) − 1 = **5**.
  - RHS: f(1) + f(2) = 1 + 3 = **4**.
  Kyunki 5 ≠ 4, **f(x + y) = f(x) + f(y) sach NAHI hai!** (Ye sirf c = 0 wale linear functions f(x) = mx ke liye sach hota hai!)

**Jaanch:** f(1) = 2(1) − 1 = 1, f(2) = 2(2) − 1 = 3 ✅; 5 ≠ 4 ✅.

---

## Aam galtiyan (Chapter Synthesis)

1. **f(x) = |x − a| / (x − a) ka range {−1, 0, 1} likh dena:** Student ise Signum function samajh kar 0 ko bhi range mein daal deta hai!
   - *Galat kyun:* Signum mein x = 0 par alag se 0 define kiya gaya hai. Par |x − a|/(x − a) mein x = a par **0/0 (undefined)** hota hai, isliye x = a domain mein hi nahi! Range sirf **{−1, 1}** hai.
2. **√(9 − x²) ka range [−3, 3] likh dena:** Student 9 ka square root ±3 soch kar −3 se +3 likh deta hai.
   - *Galat kyun:* Symbol √ hamesha **principal (non-negative)** square root dikhata hai! Isliye √(9 − x²) ≥ 0 hamesha, aur range **[0, 3]** hai.
3. **Har function ke liye f(x + y) = f(x) + f(y) maan lena:** Student f(x) = x² ya f(x) = 2x − 1 mein f(a + b) = f(a) + f(b) tod deta hai!
   - *Sahi soch:* (a + b)² ≠ a² + b² (jaise (2 + 3)² = 25 ≠ 4 + 9 = 13). Function ka bracket multiplication ki tarah distribute **nahi** hota!

---

## Quick Recap

- **Ordered pairs & A × B:** kram zaroori; n(A × B) = n(A) × n(B).
- **Relations:** R ⊆ A × B; total = 2^(pq); Domain ⊆ A, Range ⊆ Codomain = B.
- **Functions:** har input in A → theek ek output in B; Vertical-line test; 7 standard graphs yaad rakho.
- **Algebra & Domain-Range:** D₁ ∩ D₂ (aur g(x) ≠ 0 for f/g); √ ke andar ≥ 0, √ ka output ≥ 0; x ko y mein badal kar rational range nikalo.

---

## Practice Questions

1. Let A = {1, 2, 3}, B = {3, 4}, and C = {4, 5, 6}. Find:
   (a) A × (B ∩ C)    (b) (A × B) ∩ (A × C)    (c) A × (B ∪ C)

2. Let R = {(x, y) : x, y ∈ N and 2x + y = 10}. Write R in Roster form, find its Domain and Range, and check whether R is a function from {1, 2, 3, 4} to N.

3. Find the Domain and Range of the real function **f(x) = √(16 − x²)**.

4. Find the Domain and Range of **f(x) = 1 / √(25 − x²)**.

5. Find the Domain and Range of **f(x) = x² / (4 + x²)**.

6. Let f(x) = √(x − 2) and g(x) = √(8 − x). Find the domains of (f + g)(x), (fg)(x), and (f/g)(x), and evaluate (f + g)(6).

7. A function f is defined on R by:
   - f(x) = x² when x < 0
   - f(x) = x when 0 ≤ x ≤ 1
   - f(x) = 1/x when x > 1
   Find f(−2), f(0), f(1/2), f(1), and f(4).

8. Let f = {(1, 1), (2, 3), (0, −1), (−1, −3)} be a function from Z to Z defined by f(x) = ax + b. Find f(5) and f(−4).

9. Find the Domain of **f(x) = (x² + 2x + 1) / (x² − 8x + 12)**.

10. If f(x) = (x − 1)/(x + 1) for x ≠ −1, show that:
    (a) f(1/x) = −f(x) (for x ≠ 0, −1)
    (b) f(−1/x) = −1/f(x) (for x ≠ 0, 1).

11. Let A = {9, 10, 11, 12, 13} and let f : A → N be defined by f(n) = the highest prime factor of n. Find the Range of f.

12. Let f(x) = [x] and g(x) = |x|. Find the value of:
    (a) (f + g)(−2.4)
    (b) (f − g)(1.7)
    (c) (fg)(−0.5)

### Answers

1. (a) B ∩ C = {4} ⟹ A × (B ∩ C) = **{(1, 4), (2, 4), (3, 4)}**.
   (b) (A × B) ∩ (A × C) = **{(1, 4), (2, 4), (3, 4)}** (distributive law se exact same!).
   (c) B ∪ C = {3, 4, 5, 6} ⟹ A × (B ∪ C) mein 3 × 4 = **12 pairs**: {(1, 3), (1, 4), (1, 5), (1, 6), (2, 3), (2, 4), (2, 5), (2, 6), (3, 3), (3, 4), (3, 5), (3, 6)}.
   Jaanch: n = 3 × 4 = 12 ✅.

2. y = 10 − 2x aur x, y ∈ N (≥ 1):
   - x = 1 → y = 8; x = 2 → y = 6; x = 3 → y = 4; x = 4 → y = 2; x = 5 → y = 0 ∉ N.
   **R = {(1, 8), (2, 6), (3, 4), (4, 2)}**.
   Domain = **{1, 2, 3, 4}**, Range = **{2, 4, 6, 8}**.
   **Haan**, {1, 2, 3, 4} se N par ye ek **Function hai** (sabhi 4 elements ki theek ek unique image hai). Jaanch: 2(4) + 2 = 10 ✅.

3. **Domain:** 16 − x² ≥ 0 ⟹ x² ≤ 16 ⟹ **[−4, 4]**.
   **Range:** 0 ≤ 16 − x² ≤ 16 ⟹ 0 ≤ √(16 − x²) ≤ 4 ⟹ **[0, 4]**.
   Jaanch: f(0) = 4, f(±4) = 0 ✅.

4. **Domain:** Denominator mein root hai, isliye 25 − x² > 0 (strictly!) ⟹ x² < 25 ⟹ **(−5, 5)**.
   **Range:** 0 < 25 − x² ≤ 25 ⟹ 0 < √(25 − x²) ≤ 5. Ulta karo (reciprocal): 1/√(25 − x²) ≥ 1/5!
   Isliye **Range = [1/5, ∞)**.
   Jaanch: x = 0 par f(0) = 1/5 (minimum); x → 5 par f(x) → ∞ ✅.

5. **Domain:** 4 + x² ≥ 4 > 0 hamesha → **R**.
   **Range:** y = x²/(4 + x²) ⟹ 4y + yx² = x² ⟹ x² = 4y/(1 − y) ≥ 0 ⟹ **Range = [0, 1)**.
   Jaanch: x = 0 par y = 0; x = 2 par y = 4/8 = 1/2 ∈ [0, 1) ✅.

6. D_f = [2, ∞), D_g = (−∞, 8].
   - Domain(f + g) = Domain(fg) = **[2, 8]**.
   - Domain(f/g) = **[2, 8)** (x = 8 par g(8) = 0 hatao).
   - (f + g)(6) = √(6 − 2) + √(8 − 6) = √4 + √2 = **2 + √2**. Jaanch: 6 ∈ [2, 8] ✅.

7. - f(−2) = (−2)² = **4** (kyunki −2 < 0)
   - f(0) = **0** (0 ≤ 0 ≤ 1)
   - f(1/2) = **1/2** (0 ≤ 1/2 ≤ 1)
   - f(1) = **1** (0 ≤ 1 ≤ 1)
   - f(4) = **1/4** (kyunki 4 > 1). Jaanch: har input apni sahi branch mein gaya ✅.

8. f(0) = −1 ⟹ b = −1; f(1) = 1 ⟹ a − 1 = 1 ⟹ a = 2. To f(x) = 2x − 1.
   f(5) = 2(5) − 1 = **9**; f(−4) = 2(−4) − 1 = **−9**. Jaanch: f(2) = 3, f(−1) = −3 ✅.

9. Denominator x² − 8x + 12 = (x − 2)(x − 6) ≠ 0 ⟹ **Domain = R − {2, 6}**.
   Jaanch: 2 + 6 = 8, 2 × 6 = 12 ✅.

10. (a) f(1/x) = (1/x − 1) ÷ (1/x + 1) = (1 − x) ÷ (1 + x) = −(x − 1)/(x + 1) = **−f(x)**.
    (b) f(−1/x) = (−1/x − 1) ÷ (−1/x + 1) = (−1 − x) ÷ (−1 + x) = −(x + 1)/(x − 1) = **−1/f(x)**.
    Jaanch: x = 2 par f(2) = 1/3, f(1/2) = (−1/2)/(3/2) = −1/3 = −f(2) ✅; f(−1/2) = (−3/2)/(1/2) = −3 = −1/f(2) ✅.

11. Har number ka highest prime factor:
    - 9 = 3² → **3**
    - 10 = 2 × 5 → **5**
    - 11 = 11 → **11**
    - 12 = 2² × 3 → **3**
    - 13 = 13 → **13**
    **Range(f) = {3, 5, 11, 13}**. Jaanch: repeats (3) ek hi baar likha ✅.

12. (a) f(−2.4) = [−2.4] = −3, g(−2.4) = |−2.4| = 2.4 ⟹ −3 + 2.4 = **−0.6**.
    (b) f(1.7) = [1.7] = 1, g(1.7) = |1.7| = 1.7 ⟹ 1 − 1.7 = **−0.7**.
    (c) f(−0.5) = [−0.5] = −1, g(−0.5) = |−0.5| = 0.5 ⟹ (−1) × 0.5 = **−0.5**.
    Jaanch: −3 ≤ −2.4 < −2 aur −1 ≤ −0.5 < 0 ✅.

---

Shabaash! Tumne **Relations and Functions** ki poori neev pakki kar li hai — yahi bhasha aur graphs ab Class 11 aur Class 12 ke har aage ke chapter (Trigonometry, Calculus, Probability) mein tumhare sabse bade saathi banenge.

---

## Chapter Ka Saar: Relations and Functions

| Topic | Mukhya vishay | Khaas formula / yaad rakhne ki baat |
|---|---|---|
| **Topic 1** | Ordered Pairs & Cartesian Product A × B | (a, b) = (c, d) ⟺ a = c, b = d; A × B ≠ B × A; n(A × B) = n(A) × n(B); × distributes over ∪, ∩, −. |
| **Topic 2** | Relations, Domain, Codomain & Range | R ⊆ A × B; Domain = used first elements; Range ⊆ Codomain = poora B; total relations = 2^(pq). |
| **Topic 3** | Functions & 7 Standard Real Functions | Har x ∈ A ki theek ek image; vertical-line test; Identity, Constant, x², x³, 1/x, abs(x), sgn(x), [x] (left integer!). |
| **Topic 4** | Algebra of Functions & Domain-Range Rules | f ± g, fg par D₁ ∩ D₂; f/g par g(x) ≠ 0; denominator ≠ 0 aur √ ke andar ≥ 0; √(x²) = abs(x). |
| **Topic 5** | Mixed Problems & Synthesis | Decision Map; Range of √(a² − x²) is [0, a]; Range of x²/(c + x²) is [0, 1); f(x + y) ≠ f(x) + f(y) in general. |

**Aage kya?** Agle chapter **Trigonometric Functions** mein hum Class 10 ke sin, cos, tan ratios ko 0°–90° ke chhote dabbe se bahar nikaal kar poori real number line par **radians** aur **periodic functions** ke roop mein phailayenge!
