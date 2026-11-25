# Chapter: Sets (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [sets.md](sets.md) se aage chalti hai** (wahan Topic 1 mein well-defined sets, Roster/Set-builder form, Empty/Finite/Infinite aur Equal sets the). Standard number parivaar (N, W, Z, Q, R): [number-systems.md](../../../class9/maths/number-systems/number-systems.md) aur [number-systems-part3.md](../../../class9/maths/number-systems/number-systems-part3.md).
> **Topics covered in this file:**
> 2. Subsets, Power Set, Intervals, Universal Set Aur Venn Diagrams

---

# Topic 2: Subsets, Power Set, Intervals, Universal Set Aur Venn Diagrams

Topic 1 mein humne sets ko likhna aur unki barabari (A = B) check karna seekha. Par har baar do sets barabar nahi hote — aksar ek chhota set kisi bade set ke **andar** samaya hota hai, jaise Natural numbers N poora ka poora Integers Z ke andar hai. Is topic mein hum is "andar hone" ke rishte (**Subset**) ko samjhenge, dekhenge ki ek set ke kul kitne subsets ban sakte hain (**Power Set**), number line ke tukdon ko **Intervals** ke roop mein likhenge, aur poore khel ko **Universal Set** aur **Venn Diagrams** ki tasveeron mein utaarenge.

---

## Sujata ka weekend backpack

Sujata kal subah school ke nature trek par jaa rahi thi. Uski checklist mein 3 optional cheezein thin: **T = {torch, raincoat, compass}**. Mummy ne kaha, "Bag halka rakhna — chaaho to kuch mat lo, chaaho to koi 1 ya 2 le lo, ya teeno le lo."

Sujata ne apni copy mein saare possible packing choices likhna shuru kiya:
- Kuch nahi liya: { }
- Sirf 1 cheez: {torch}, {raincoat}, {compass}
- Koi 2 cheezein: {torch, raincoat}, {torch, compass}, {raincoat, compass}
- Teeno cheezein: {torch, raincoat, compass}

Usne gina: kul **8 tareeke**! Sujata ne socha, "3 cheezon se 8 kyun bane? 2 × 2 × 2 = 8! Har cheez ke paas sirf do raaste the — **bag mein jao (Haan)** ya **ghar par raho (Naa)**."

Agle din school library mein jab usne dekha ki "Science Books" ka shelf poore "Library Catalogue" ke andar ek chhota hissa hai, to use turant samajh aa gaya: **chhote groups bade groups ke andar hote hain** — aur yahi Subsets aur Power Set ka asli raaz hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Subset (A ⊆ B)** | Agar A ka har element B mein bhi ho, to A, B ka subset hai | {p, q} ⊆ {p, q, r, s} |
| **Proper subset (A ⊂ B)** | A, B ka subset ho aur A ≠ B (B mein kam se kam ek extra element ho) | {p, q} ⊂ {p, q, r, s} |
| **Superset (B ⊇ A)** | Agar A ⊆ B ho, to bade set B ko A ka superset kehte hain | {p, q, r, s} ⊇ {p, q} |
| **Power set P(A)** | Kisi set A ke **sabhi subsets** ka bana hua set | P({7, 11}) = {∅, {7}, {11}, {7, 11}} |
| **Interval** | Real number line R ka ek lagatar (continuous) tukda | (−4, 7] ya [−2, 5] |
| **Open interval (a, b)** | a aur b ke beech ke sabhi real numbers, par a aur b khud shamil NAHI | (2, 5) = {x ∈ R : 2 < x < 5} |
| **Closed interval [a, b]** | a aur b ke beech ke sabhi real numbers, aur a, b dono SHAMIL | [2, 5] = {x ∈ R : 2 ≤ x ≤ 5} |
| **Universal set (U)** | Kisi sawaal ka sabse bada "master set" jiske andar baaki saare sets hote hain | School ke sabhi students ka set |
| **Venn diagram** | Sets ko rectangle (U) aur circles ke chitra se dikhane ka tareeka | Figure 2.2 |

---

## Part A: Subset, Proper Subset Aur Do Pakke Niyam

### Paribhasha

Set A ko set B ka **subset** kehte hain — aur **A ⊆ B** likhte hain — agar A ka **har ek element** B mein bhi maujood ho:

> **A ⊆ B  ⟺  (har x ke liye: agar x ∈ A, to x ∈ B)**

Agar A mein kam se kam ek aisa element hai jo B mein nahi hai, to A, B ka subset nahi hai: **A ⊈ B**.

- **Proper subset (A ⊂ B):** A ⊆ B ho aur A ≠ B (yaani B kam se kam ek element zyada rakhta hai).
- **Equal sets ka doosra niyam:** A = B ⟺ **A ⊆ B aur B ⊆ A**. (Topic 5 ke proofs mein yahi sabse bada hathiyar banega!)

### Do zaroori sach (Kyun?)

1. **Har set khud apna subset hota hai: A ⊆ A.**
   *Kyun?* A ka har element A mein to hota hi hai! Par A khud apna *proper* subset nahi hota (kyunki A = A).
2. **Empty set ∅ har set ka subset hota hai: ∅ ⊆ A.**
   *Kyun?* Kisi set X ko A ka subset *na* hone ke liye X mein kam se kam ek aisa element hona chahiye jo A mein na ho. Par ∅ mein to koi element hai hi nahi! Isliye koi virodh nahi mil sakta, aur **∅ ⊆ A** hamesha sach hota hai (ise vacuous truth kehte hain).

### Standard Number Chain (Class 9 se jod)

Class 9 ke [number-systems.md](../../../class9/maths/number-systems/number-systems.md) aur [number-systems-part3.md](../../../class9/maths/number-systems/number-systems-part3.md) ke parivaaron ko ab subset chain mein ek line mein likh sakte hain:

> **N ⊂ W ⊂ Z ⊂ Q ⊂ R**

(Aur agar T irrational numbers ka set ho, to **T ⊂ R**, par **N ⊈ T**.)

### Example 1: Subset aur Proper Subset ki jaanch

Neeche diye jodon mein ⊆ ya ⊈ bharo aur kaaran batao:
(i) {p, q} ___ {p, q, r, s}
(ii) {x : x is a multiple of 6} ___ {x : x is a multiple of 3}
(iii) {x : x is a multiple of 3} ___ {x : x is a multiple of 6}
(iv) {x : x is an equilateral triangle} ___ {x : x is an isosceles triangle}

**Hal:**
- (i) p aur q dono doosre set mein hain → **{p, q} ⊆ {p, q, r, s}** (balki proper subset ⊂ bhi hai kyunki r, s extra hain).
- (ii) Har multiple of 6 (jaise 6, 12, 18, ...) = 6k = 3(2k), to wo 3 ka bhi multiple hai → **⊆** (proper subset ⊂).
- (iii) 3 pehle set mein hai (3 = 3 × 1), par 3, 6 ka multiple nahi hai → **⊈**.
- (iv) Har equilateral triangle ki teeno sides barabar hoti hain, to kam se kam do sides zaroor barabar hain (isosceles ki shart) → **⊆**.

**Jaanch:** (ii) 6 = 3×2, 12 = 3×4 sab 3 se bhaag hote hain ✅; (iii) 3 ÷ 6 integer nahi ✅.

---

## Part B: ∈ vs ⊆ — Sabse Bada Exam Trap!

Ye antar ek baar pakka samajh liya to kabhi galti nahi hogi:
- **∈ (belongs to)** lagta hai **element** aur **set** ke beech: element ∈ Set.
- **⊆ (subset)** lagta hai **set** aur **set** ke beech: Set ⊆ Set.

Ab socho agar kisi set ke andar hi ek chhota set **ek single dabbe (element)** ki tarah rakha ho!

### Example 2: Nested Set par ∈ aur ⊆ ka master test

Maan lo **M = {10, 20, {30, 40}, 50}**.
Pehle M ke **4 elements** saaf-saaf gino:
1. 10
2. 20
3. {30, 40}  (ye poora band packet M ka **ek akela element** hai!)
4. 50

Ab batao neeche diye 8 statements mein se kaun True (✅) hai aur kaun False (❌):
(i) {30, 40} ∈ M
(ii) {30, 40} ⊆ M
(iii) {{30, 40}} ⊆ M
(iv) 10 ∈ M
(v) 10 ⊆ M
(vi) {10, 20, 50} ⊆ M
(vii) {10, 30} ⊆ M
(viii) ∅ ⊆ M  aur  ∅ ∈ M

**Hal:**
- (i) **{30, 40} ∈ M** — ✅ **True.** {30, 40} seedha M ki list mein teesra member hai.
- (ii) **{30, 40} ⊆ M** — ❌ **False.** Subset hone ke liye 30 ∈ M aur 40 ∈ M alag-alag hone chahiye the, par M mein 30 akele nahi baitha!
- (iii) **{{30, 40}} ⊆ M** — ✅ **True.** Is bahari bracket ka akela member {30, 40} hai, aur wo M ke andar hai!
- (iv) **10 ∈ M** — ✅ **True.** 10 seedha M ka member hai.
- (v) **10 ⊆ M** — ❌ **False.** 10 ek number hai, set nahi! ({10} ⊆ M hota to True hota.)
- (vi) **{10, 20, 50} ⊆ M** — ✅ **True.** 10, 20, 50 teeno M ke members hain.
- (vii) **{10, 30} ⊆ M** — ❌ **False.** 10 ∈ M hai par 30 ∉ M.
- (viii) **∅ ⊆ M** — ✅ **True** (∅ har set ka subset hai); **∅ ∈ M** — ❌ **False** (∅, M ke 4 elements ki list mein nahi hai).

**Jaanch:** M ke exact 4 elements hain: 10, 20, {30, 40}, 50. Inme se kisi ko seedha likho to ∈; uske bahar ek aur { } lagao to ⊆ ✅.

---

## Part C: Subsets Ki Ginti Aur Power Set P(A)

### Kyun hote hain 2ⁿ subsets?

Maan lo finite set A mein **n elements** hain: {a₁, a₂, ..., aₙ}. Koi bhi subset banate waqt hum har element ke saamne jaakar bas ek sawaal poochte hain: **"Is subset mein aana hai ya nahi?"**
- a₁ ke paas **2 choices** (Haan / Naa)
- a₂ ke paas **2 choices** (Haan / Naa)
- ...
- aₙ ke paas **2 choices** (Haan / Naa)

Kyunki har choice baaki sabse aazaad (independent) hai, kul possible subsets honge:
> **Total subsets of A = 2 × 2 × ... × 2 (n baar) = 2ⁿ**

Aur agar **proper subsets** (jo A ke barabar na hon) ginne hon, to sirf khud A ko hata do:
> **Total proper subsets of A = 2ⁿ − 1**
(Aur **non-empty proper subsets** = **2ⁿ − 2**, jab n ≥ 1, kyunki ∅ aur A dono hat jaate hain.)

### Power Set P(A)

Kisi set A ke **sabhi subsets ko ikattha karke** ek bada set bana do — yahi **Power Set** hai, aur ise **P(A)** likhte hain.
- P(A) ka har element khud ek **set** hota hai!
- Agar n(A) = n, to **n(P(A)) = 2ⁿ**.

### Example 3: Power Set likhna (Sujata ka bag aur ∅ ka kamaal)

(i) Sujata ka set T = {torch, raincoat, compass} (short mein {t, r, c}) ka Power Set P(T) likho.
(ii) B = {7, 11} ka P(B) likho.
(iii) P(∅) aur P(P(∅)) nikalo aur unke cardinal numbers batao.

**Hal:**
- (i) n(T) = 3, isliye n(P(T)) = 2³ = 8.
  **P(T) = { ∅, {t}, {r}, {c}, {t, r}, {t, c}, {r, c}, {t, r, c} }**
- (ii) n(B) = 2, isliye n(P(B)) = 2² = 4.
  **P(B) = { ∅, {7}, {11}, {7, 11} }**
- (iii) ∅ mein n(∅) = 0 elements hain, to uske 2⁰ = **1** subset hoga (khud ∅):
  **P(∅) = {∅}**, isliye **n(P(∅)) = 1**.
  Ab P(∅) mein 1 element hai, to uske Power Set mein 2¹ = **2** elements honge:
  **P(P(∅)) = { ∅, {∅} }**, isliye **n(P(P(∅))) = 2**.

**Jaanch:** 2³ = 8 elements in P(T) ✅; 2² = 4 in P(B) ✅; 2⁰ = 1 aur 2¹ = 2 ✅.

### Example 4: Subsets ki ginti par ulta sawaal

(i) Agar n(A) = 5, to A ke kul kitne subsets aur kitne proper subsets honge?
(ii) Agar n(P(X)) = 64, to n(X) nikalo.
(iii) Do finite sets mein m aur n elements hain. Pehle set ke total subsets doosre set ke total subsets se **56 zyada** hain. m aur n nikalo.

**Hal:**
- (i) Total subsets = 2⁵ = **32**; proper subsets = 32 − 1 = **31**.
- (ii) 2ⁿ = 64 = 2⁶, isliye **n(X) = 6**.
- (iii) Diya hai: 2ᵐ − 2ⁿ = 56 (saaf hai m > n).
  2ⁿ common nikalo: **2ⁿ (2ᵐ⁻ⁿ − 1) = 56**.
  56 ko (power of 2) × (odd number) mein todo: 56 = **8 × 7 = 2³ × 7**.
  Kyunki 2ⁿ sirf 2 ki power hai aur (2ᵐ⁻ⁿ − 1) hamesha odd hota hai (jab m > n):
  - 2ⁿ = 2³ ⟹ **n = 3**
  - 2ᵐ⁻ⁿ − 1 = 7 ⟹ 2ᵐ⁻³ = 8 = 2³ ⟹ m − 3 = 3 ⟹ **m = 6**.

**Jaanch:** 2⁶ − 2³ = 64 − 8 = 56 ✅!

---

## Part D: Real Numbers R Ke Subsets — Intervals

Real number line R par agar main kahoon "2 aur 5 ke beech ke sabhi real numbers", to ise roster form mein nahi likh sakte (kyunki anant numbers hain: 2.1, 2.001, √5, π, ...). Iske liye Maths ne chhote aur sundar **Intervals** banaye hain (hamesha a < b):

| Interval | Set-builder roop | Endpoints shamil? | Number line par nishaan |
|---|---|---|---|
| **Open: (a, b)** | {x ∈ R : a < x < b} | Na a, na b | a par o (khali gola), b par o |
| **Closed: [a, b]** | {x ∈ R : a ≤ x ≤ b} | Dono a aur b | a par ● (bhara dot), b par ● |
| **Semi-open: [a, b)** | {x ∈ R : a ≤ x < b} | Sirf a (b nahi) | a par ●, b par o |
| **Semi-open: (a, b]** | {x ∈ R : a < x ≤ b} | Sirf b (a nahi) | a par o, b par ● |

In chaaron intervals ki **length** hamesha **b − a** hoti hai (ek-do endpoint hatane se length nahi badalti!).

### Infinite Intervals

Agar ek taraf koi seema na ho, to **∞** (plus infinity) ya **−∞** (minus infinity) likhte hain. **Yaad rakho:** ∞ aur −∞ koi real numbers nahi hain, isliye unke saath **hamesha round bracket ( ya )** lagta hai, kabhi [ ya ] nahi!
- (a, ∞) = {x ∈ R : x > a}
- [a, ∞) = {x ∈ R : x ≥ a}
- (−∞, b) = {x ∈ R : x < b}
- (−∞, b] = {x ∈ R : x ≤ b}
- (−∞, ∞) = R (poori real number line)

### Example 5: Intervals likhna, number line par dikhana aur length

(i) {x ∈ R : −4 < x ≤ 7} ko interval form mein likho, number line par dikhao aur length nikalo.
(ii) [−2, 5] ko set-builder form mein likho.
(iii) {x ∈ R : x > 3} ko interval form mein likho.

**Hal:**
- (i) −4 par < (shamil nahi → round bracket), 7 par ≤ (shamil → square bracket):
  Interval = **(−4, 7]**. Length = 7 − (−4) = **11**.
- (ii) Dono taraf square bracket hai, to dono shamil: **{x ∈ R : −2 ≤ x ≤ 5}**. Length = 5 − (−2) = 7.
- (iii) 3 se bade sabhi real numbers: **(3, ∞)**.

```
   (−4, 7]:    <------o=======================●------>
                     -4                       7
                  (shamil nahi)            (shamil)

   [−2, 5]:    <------●=======================●------>
                     -2                       5
                  (shamil)                 (shamil)
```

> **Figure 2.1** – Number line par intervals: khali gola o matlab endpoint bahar hai; bhara dot ● matlab endpoint andar hai.

**Jaanch:** (−4, 7] mein −4 ∉ (−4, 7] par 7 ∈ (−4, 7], length 7 − (−4) = 11 ✅; [−2, 5] mein dono endpoints shamil ✅.

---

## Part E: Universal Set (U) Aur Venn Diagrams

Jab hum kisi khaas topic ya survey par kaam karte hain, to hum ek sabse bada **master set** tay kar lete hain jiske andar us sawaal ke saare chhote sets samaye hote hain. Ise **Universal Set (U)** kehte hain.

- Universal set fixed nahi hota — wo sawaal ke hisaab se chuna jaata hai!
- Jaise agar A = {2, 4, 6}, B = {1, 3, 5}, C = {0, 2, 4, 6, 8} hon, to **U = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}** ya **W** (whole numbers) ek achha Universal Set hai.

### Venn Diagrams

Angrez mathematician **John Venn** (1834–1923) ne sets ke rishton ko aankhon se dekhne ka sabse saral tareeka diya:
- **Universal set U** ko ek **rectangle** se dikhate hain.
- Uske **subsets** (A, B, C) ko rectangle ke andar **circles** (ya ovals) se dikhate hain.

```
   +------------------------------------------+  U
   :                                          :
   :   (a) Subset: B ⊂ A      (b) Disjoint    :
   :    +-------------+      +-----+   +----+ :
   :    : A  +-----+  :      :  P  :   : Q  : :
   :    :    :  B  :  :      +-----+   +----+ :
   :    :    +-----+  :                       :
   :    +-------------+                       :
   +------------------------------------------+
```

> **Figure 2.2** – Venn diagrams: bahari box Universal set U hai. (a) B poora A ke andar hai (B ⊂ A); (b) P aur Q mein kuch bhi common nahi (disjoint sets).

### Example 6: Universal Set chunna aur Venn diagram banana

Ek school mein teen clubs hain: Music club M = {1, 2, 4}, Dance club D = {2, 4}, aur Chess club C = {5, 6}.
(i) In teeno ke liye ek chhota sa Universal Set U suggest karo.
(ii) D, M aur C ke beech subset aur disjoint rishta batao.

**Hal:**
- (i) Sabse chhota possible Universal set sabhi elements ko samet kar: **U = {1, 2, 3, 4, 5, 6}** (ya {1, 2, 4, 5, 6}; extra elements rakhna bilkul theek hai).
- (ii) D ke dono elements (2, 4) M mein hain, aur M mein 1 extra hai, isliye **D ⊂ M** (D ka circle poora M ke circle ke andar banega). C = {5, 6} ka M ya D ke saath koi element common nahi, isliye **C ka circle alag (disjoint)** banega.

**Jaanch:** D ⊆ U, M ⊆ U, C ⊆ U ✅; D ⊂ M ✅; C aur M mein zero common elements ✅.

---

## Aam galtiyan

1. **∈ aur ⊆ ko aapas mein mila dena:** Student likhta hai "2 ⊆ {1, 2, 3}" ya "{2} ∈ {1, 2, 3}".
   - *Sahi soch:* 2 ek element hai, to **2 ∈ {1, 2, 3}**. {2} ek set hai, to **{2} ⊆ {1, 2, 3}**. (Nested set {1, {2}, 3} mein {2} ∈ set aur {{2}} ⊆ set!)
2. **Power Set P(A) likhte waqt ∅ ya khud A ko bhool jaana:** Student A = {a, b} ke liye P(A) = {{a}, {b}} likh kar ruk jaata hai.
   - *Galat kyun:* ∅ aur khud A dono A ke subsets hain! Hamesha ginti check karo: n(A) = 2 to P(A) mein 2² = **4** sets hone chahiye: {∅, {a}, {b}, {a, b}}.
3. **Intervals mein ( aur [ ki gadbad (aur ∞ par [ laga dena):** Student [2, 5) mein 5 ko shamil maan leta hai, ya [3, ∞] likh deta hai.
   - *Sahi soch:* Square bracket [ = **shamil** (≤ ya ≥), round bracket ( = **bahar** (< ya >). Aur ∞, −∞ par hamesha round bracket lagta hai.

---

## Quick Recap

- **A ⊆ B**: A ka har element B mein. **A ⊂ B**: subset + A ≠ B. **A = B ⟺ A ⊆ B aur B ⊆ A**.
- Hamesha sach: **∅ ⊆ A** aur **A ⊆ A**.
- **∈** (element to set) ≠ **⊆** (set to set). Nested sets mein brackets dhyan se gino.
- Agar n(A) = n: total subsets = **2ⁿ**, proper subsets = **2ⁿ − 1**, **n(P(A)) = 2ⁿ**.
- **Intervals** R ke continuous subsets hain: (a, b), [a, b], [a, b), (a, b], length = b − a.
- **Universal set U** (rectangle) + circles = **Venn diagram**.

---

## Practice Questions

1. Fill in the blanks with ⊆ or ⊈:
   (a) {2, 4, 6} ___ {1, 2, 3, 4, 5, 6}
   (b) {a, e, i} ___ {a, b, c, d, e}
   (c) {x : x is a square in a plane} ___ {x : x is a rectangle in the same plane}
   (d) {x : x is an even natural number} ___ {x : x is an integer}

2. Let K = {1, {2, 3}, 4, {5}}. State whether each statement is True or False:
   (a) {2, 3} ⊆ K
   (b) {2, 3} ∈ K
   (c) {{2, 3}} ⊆ K
   (d) 5 ∈ K
   (e) {5} ∈ K
   (f) {1, 4} ⊆ K
   (g) ∅ ⊆ K
   (h) {1, {5}} ⊆ K

3. Write down ALL subsets of the following sets:
   (a) {x}
   (b) {m, n}
   (c) {1, 3, 5}
   (d) ∅

4. Write the Power Set P(A) for:
   (a) A = {a, b, c}
   (b) A = {1, {2}}

5. Find the number of subsets and proper subsets of:
   (a) A = {x : x is a vowel in the English alphabet}
   (b) B = {x ∈ N : x is a divisor of 12}

6. If n(P(A)) = 128, find n(A). How many non-empty proper subsets does A have?

7. Two finite sets have p and q elements. The total number of subsets of the first set is 112 more than the total number of subsets of the second set. Find p and q.

8. Write the following sets as Real Intervals and find the length of each finite interval:
   (a) {x ∈ R : −6 < x < 2}
   (b) {x ∈ R : 0 ≤ x ≤ 9}
   (c) {x ∈ R : −1 ≤ x < 4}
   (d) {x ∈ R : 5 < x ≤ 12}
   (e) {x ∈ R : x ≤ −3}

9. Write the following intervals in Set-builder form:
   (a) (−5, 0)
   (b) [−8, −1]
   (c) (4, 15]
   (d) [−2, ∞)

10. Find n(P(P(P(∅)))). Show each step clearly.

11. For the sets A = {1, 3, 5}, B = {2, 4, 6}, and C = {0, 2, 4, 6, 8}, which of the following can be considered a Universal Set?
    (a) {0, 1, 2, 3, 4, 5, 6}
    (b) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    (c) {1, 2, 3, 4, 5, 6, 7, 8}

12. Is the statement "If A ⊂ B and B ∈ C, then A ∈ C" always true? Prove it or give a counterexample.

### Answers

1. (a) **⊆** (2, 4, 6 sab hain); (b) **⊈** (i doosre set mein nahi); (c) **⊆** (har square ek rectangle hota hai); (d) **⊆** (har even natural number ek integer hai).

2. K ke 4 elements hain: 1, {2, 3}, 4, {5}.
   (a) ❌ False (2 aur 3 akele K mein nahi);
   (b) ✅ True ({2, 3} seedha K ka element hai);
   (c) ✅ True (bahari bracket ka element {2, 3} ∈ K);
   (d) ❌ False (5 akele nahi, {5} hai);
   (e) ✅ True ({5} seedha K ka element hai);
   (f) ✅ True (1 ∈ K aur 4 ∈ K);
   (g) ✅ True (∅ har set ka subset hai);
   (h) ✅ True (1 ∈ K aur {5} ∈ K).

3. (a) ∅, {x} (2 subsets).
   (b) ∅, {m}, {n}, {m, n} (4 subsets).
   (c) ∅, {1}, {3}, {5}, {1, 3}, {1, 5}, {3, 5}, {1, 3, 5} (8 subsets).
   (d) ∅ (1 subset).

4. (a) P(A) = {∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}} (8 elements).
   (b) A mein 2 elements hain: 1 aur {2}. Isliye P(A) = {∅, {1}, {{2}}, {1, {2}}} (4 elements). Jaanch: 2² = 4 ✅.

5. (a) n(A) = 5 → subsets = 2⁵ = **32**, proper subsets = **31**.
   (b) 12 ke divisors = {1, 2, 3, 4, 6, 12}, n(B) = 6 → subsets = 2⁶ = **64**, proper subsets = **63**.

6. 2ⁿ = 128 = 2⁷ ⟹ **n(A) = 7**. Non-empty proper subsets = 128 − 2 = **126**. Jaanch: 2⁷ = 128 ✅.

7. 2ᵖ − 2^q = 112 ⟹ 2^q (2^(p−q) − 1) = 112 = 16 × 7 = 2⁴ × 7.
   Isliye 2^q = 2⁴ ⟹ **q = 4**, aur 2^(p−4) − 1 = 7 ⟹ 2^(p−4) = 8 = 2³ ⟹ **p = 7**.
   Jaanch: 2⁷ − 2⁴ = 128 − 16 = 112 ✅.

8. (a) **(−6, 2)**, length = 2 − (−6) = 8;
   (b) **[0, 9]**, length = 9 − 0 = 9;
   (c) **[−1, 4)**, length = 4 − (−1) = 5;
   (d) **(5, 12]**, length = 12 − 5 = 7;
   (e) **(−∞, −3]** (infinite interval).

9. (a) {x ∈ R : −5 < x < 0};
   (b) {x ∈ R : −8 ≤ x ≤ −1};
   (c) {x ∈ R : 4 < x ≤ 15};
   (d) {x ∈ R : x ≥ −2}.

10. Step 1: n(∅) = 0.
    Step 2: n(P(∅)) = 2⁰ = 1.
    Step 3: n(P(P(∅))) = 2¹ = 2.
    Step 4: n(P(P(P(∅)))) = 2² = **4**. Jaanch: 0 → 1 → 2 → 4 ✅.

11. **(b) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}** Universal set ban sakta hai kyunki A, B, C ke saare elements (0, 1, 2, 3, 4, 5, 6, 8) isme hain. (a) mein 8 nahi hai, aur (c) mein 0 nahi hai.

12. **Always true nahi hai!** Counterexample: A = {1}, B = {1, 2}, C = {{1, 2}, 3}.
    Yahan A ⊂ B (sach) aur B ∈ C (sach, kyunki {1, 2} seedha C ka element hai). Par A = {1} ∉ C (kyunki C ke elements sirf {1, 2} aur 3 hain). Jaanch: {1} ≠ {1, 2} aur {1} ≠ 3 ✅.

---

Ab tum kisi bhi set ke andar chhupe subsets, Power Set, real intervals aur Venn diagrams ko samajh chuke ho.

**Agle topic mein:** do sets ko aapas mein **jodna, common nikaalna, ghatana aur ulta karna** — yaani **Union, Intersection, Difference aur Complement**!
