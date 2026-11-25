# Chapter: Sets (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [sets-part2.md](sets-part2.md) se aage chalti hai** (wahan Topic 2 mein Subsets, Power Set, Real Intervals, Universal Set aur Venn Diagrams the). Chapter ki shuruaat: [sets.md](sets.md).
> **Topics covered in this file:**
> 3. Operations on Sets: Union, Intersection, Difference Aur Complement

---

# Topic 3: Operations on Sets: Union, Intersection, Difference Aur Complement

Numbers ke saath hum chaar operations karte hain: +, −, ×, ÷. Sets ki duniya mein bhi theek waise hi chaar buniyadi operations hote hain jo do (ya zyada) sets se naya set banate hain: **Union (∪)**, **Intersection (∩)**, **Difference (−)** aur **Complement (′)**. Is topic mein hum in chaaron ko roz ki zindagi ke udaharan, Venn diagrams aur real intervals ke saath poori tarah samjhenge.

---

## Umesh aur blood-donation camp ke volunteers

Mohalle mein weekend par blood-donation camp lagne wala tha. Umesh apni Didi ke saath volunteers ki do WhatsApp lists sambhaal raha tha:
- **List A (Saturday ko free):** {1, 2, 4, 6} (volunteer ID numbers)
- **List B (Sunday ko free):** {2, 4, 5, 7}

Didi ne chaar alag-alag kaam maange:
1. "Sabhi volunteers ko **ek saath** thank-you message bhejna hai — jo Saturday **ya** Sunday (kam se kam ek din) aa rahe hain." → {1, 2, 4, 5, 6, 7} (2 aur 4 ko do baar message nahi bhejna!)
2. "Camp ke **team leaders** wahi banenge jo **dono din** (Saturday **aur** Sunday) aa rahe hain." → {2, 4}.
3. "Jo sirf **Saturday** ko free hain (Sunday ko nahi), unhe subah ki shift do." → {1, 6}.
4. "Colony ke jo registered members (U = {1, 2, 3, 4, 5, 6, 7, 8}) Saturday ko **nahi** aa rahe, unhe poster chipkane ka kaam do." → {3, 5, 7, 8}.

Umesh muskuraaya: "Didi, aapne abhi-abhi Sets ke chaaron operations — **Union, Intersection, Difference aur Complement** — use kar liye!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Union (A ∪ B)** | A **ya** B (ya dono) ke sabhi elements milakar (repeats bina) | {1, 2} ∪ {2, 3} = {1, 2, 3} |
| **Intersection (A ∩ B)** | Sirf wo elements jo A **aur** B dono mein common hon | {1, 2} ∩ {2, 3} = {2} |
| **Disjoint sets** | Do sets jinme ek bhi common element na ho: A ∩ B = ∅ | {1, 3, 5} aur {2, 4, 6} |
| **Difference (A − B)** | A ke wo elements jo B mein NAHI hain ("only A") | {1, 2, 3} − {2, 3, 4} = {1} |
| **Symmetric difference (A Δ B)** | Jo A ya B mein se theek ek mein hon: (A − B) ∪ (B − A) | {1, 2} Δ {2, 3} = {1, 3} |
| **Complement (A′ ya Aᶜ)** | Universal set U ke wo elements jo A mein NAHI hain: U − A | U = {1..5}, A = {1, 2} to A′ = {3, 4, 5} |

---

## Part A: Union (A ∪ B) Aur Intersection (A ∩ B)

### 1. Union (A ∪ B) — "Ya (OR)"

Set A aur B ka **Union** (padhte hain "A union B") wo set hai jisme A ke saare elements, B ke saare elements, aur common elements **sirf ek baar** aate hain:

> **A ∪ B = {x : x ∈ A  ya (or)  x ∈ B}**

**Chhote par zaroori gun (Venn se seedhe dikhte hain):**
- A ⊆ A ∪ B aur B ⊆ A ∪ B.
- Agar A ⊆ B ho, to **A ∪ B = B** (bada set jeet jaata hai!).

### 2. Intersection (A ∩ B) — "Aur (AND)"

Set A aur B ka **Intersection** (padhte hain "A intersection B") wo set hai jisme sirf wahi elements aate hain jo **dono** A aur B mein maujood hon:

> **A ∩ B = {x : x ∈ A  aur (and)  x ∈ B}**

- Agar A ⊆ B ho, to **A ∩ B = A** (chhota set common nikalta hai!).
- Agar A aur B mein kuch bhi common na ho (**A ∩ B = ∅**), to A aur B ko **Disjoint sets** kehte hain.

```
   +-------------------------------------------------------+  U
   :    (a) A ∪ B (dono milkar)     (b) A ∩ B (beech ka)   :
   :     +-------+ +-------+         +-------+ +-------+   :
   :     : ##### :#: ##### :         :       :#:       :   :
   :     : # A # :#: # B # :         :   A   :#:   B   :   :
   :     : ##### :#: ##### :         :       :#:       :   :
   :     +-------+ +-------+         +-------+ +-------+   :
   :     (poora # hissa = A ∪ B)     (sirf beech # = A ∩ B):
   +-------------------------------------------------------+
```

> **Figure 3.1** – Union (∪) mein dono circles ka poora hissa aata hai; Intersection (∩) mein sirf dono ka common overlap aata hai.

### Example 1: Union aur Intersection nikaalna

Maan lo **A = {2, 4, 6, 8, 10}** aur **B = {4, 8, 12, 16}**.
(i) A ∪ B aur (ii) A ∩ B nikalo.

**Hal:**
- Common elements dekho: **4** aur **8** dono mein hain.
- (i) **A ∪ B = {2, 4, 6, 8, 10, 12, 16}** (4 aur 8 sirf ek-ek baar!).
- (ii) **A ∩ B = {4, 8}**.

**Jaanch:** n(A) = 5, n(B) = 4, n(A ∩ B) = 2; ginti check: 5 + 4 − 2 = 7 = n(A ∪ B) ✅.

### Example 2: Disjoint Sets ki jaanch

P = {x ∈ N : x is odd aur x ≤ 9} aur Q = {x ∈ N : x is even aur x ≤ 10}. Kya P aur Q disjoint hain?

**Hal:**
- Roster form: P = {1, 3, 5, 7, 9}, Q = {2, 4, 6, 8, 10}.
- Common elements: koi bhi number ek saath odd aur even nahi ho sakta!
- Isliye **P ∩ Q = ∅**, yaani P aur Q **disjoint sets hain**.

**Jaanch:** P ka koi bhi element 2 se bhaag nahi hota, Q ka har element 2 se bhaag hota hai ✅.

---

## Part B: Difference (A − B) Aur Symmetric Difference (A Δ B)

### 1. Difference (A − B) — "Only A"

**A − B** (padhte hain "A minus B") wo set hai jisme A ke wo elements aate hain jo **B mein nahi hain**:

> **A − B = {x : x ∈ A  aur  x ∉ B}**

Sochne ka aasaan tareeka: A ki list uthao, aur usme se jo-jo B mein bhi dikhe (yaani A ∩ B), unhe **kaat do**!

**Bahut zaroori baat:** A − B aur B − A aam taur par **barabar NAHI hote** (Set difference commutative nahi hai).
Saath hi, teen tukde — **A − B**, **A ∩ B**, aur **B − A** — aapas mein **pairwise disjoint** hote hain aur milkar poora **A ∪ B** banate hain!

```
   +-------------------------------------------------------+  U
   :    (a) A − B (only A)          (b) B − A (only B)     :
   :     +-------+ +-------+         +-------+ +-------+   :
   :     : ##### : :       :         :       : : ##### :   :
   :     : # A # : :   B   :         :   A   : : # B # :   :
   :     : ##### : :       :         :       : : ##### :   :
   :     +-------+ +-------+         +-------+ +-------+   :
   +-------------------------------------------------------+
```

> **Figure 3.2** – A − B mein sirf A ka alag hissa aata hai (common part kat jaata hai); B − A mein sirf B ka alag hissa aata hai.

### 2. Symmetric Difference (A Δ B) — "Theek Ek Mein"

Agar hum **only A** aur **only B** ko mila dein (beech ka common hissa chhod kar), to milta hai **Symmetric Difference A Δ B**:

> **A Δ B = (A − B) ∪ (B − A) = (A ∪ B) − (A ∩ B)**

Ye commutative hota hai: A Δ B = B Δ A.

### Example 3: A − B, B − A aur Partition Check

Maan lo **X = {a, e, i, o, u}** aur **Y = {a, b, c, d, e}**.
(i) X − Y nikalo. (ii) Y − X nikalo. (iii) Check karo ki X − Y, X ∩ Y aur Y − X pairwise disjoint hain aur milkar X ∪ Y banate hain.

**Hal:**
- Common elements: X ∩ Y = **{a, e}**.
- (i) X mein se a, e hatao: **X − Y = {i, o, u}**.
- (ii) Y mein se a, e hatao: **Y − X = {b, c, d}**.
  (Saaf dikhta hai X − Y ≠ Y − X!)
- (iii) Teeno tukde {i, o, u}, {a, e}, {b, c, d} mein koi bhi do aapas mein kuch common nahi rakhte (pairwise disjoint), aur teeno ka union = {a, b, c, d, e, i, o, u} = X ∪ Y!

**Jaanch:** 3 + 2 + 3 = 8 elements = n(X ∪ Y) ✅.

### Example 4: Symmetric Difference A Δ B

R = {5, 10, 15, 20} aur S = {15, 20, 25, 30}. R Δ S do tareekon se nikalo.

**Hal:**
- **Tareeka 1:** R − S = {5, 10} aur S − R = {25, 30}.
  R Δ S = (R − S) ∪ (S − R) = **{5, 10, 25, 30}**.
- **Tareeka 2:** R ∪ S = {5, 10, 15, 20, 25, 30} aur R ∩ S = {15, 20}.
  (R ∪ S) − (R ∩ S) = **{5, 10, 25, 30}**.

**Jaanch:** Dono tareekon se exact wahi 4 elements mile ✅.

---

## Part C: Complement of a Set (A′)

Maan lo Universal Set **U** diya hai aur A uska ek subset hai. Tab **A ka Complement** (likhte hain **A′** ya **Aᶜ**, padhte hain "A complement" ya "A dash") U ke un sabhi elements ka set hai jo **A mein nahi hain**:

> **A′ = U − A = {x : x ∈ U  aur  x ∉ A}**

**Ek zaroori baat:** Bina Universal Set U ko jaane A′ nahi nikaala ja sakta! Jaise A = {1, 2} ka complement U = {1, 2, 3, 4} mein {3, 4} hai, par U = N mein {3, 4, 5, 6, ...} hai.

```
   +-----------------------------------+  U
   : ###############################   :
   : #####  +---------------+  #####   :
   : #####  :       A       :  #####   :
   : #####  +---------------+  #####   :
   : ###############################   :
   +-----------------------------------+
     (A ke bahar ka poora # hissa = A′)
```

> **Figure 3.3** – A′ (Complement of A): Universal set U mein se A ko nikaal kar bacha hua poora bahari hissa.

### Example 5: Complement aur De Morgan ki pehli jhalak

Maan lo **U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}**, **A = {1, 3, 5, 7, 9}**, aur **B = {2, 3, 5, 7}**.
Nikalo: (i) A′, (ii) B′, (iii) (A ∪ B)′ aur A′ ∩ B′, (iv) (A ∩ B)′ aur A′ ∪ B′.

**Hal:**
- (i) **A′** = U − A = **{2, 4, 6, 8, 10}**
- (ii) **B′** = U − B = **{1, 4, 6, 8, 9, 10}**
- (iii) A ∪ B = {1, 2, 3, 5, 7, 9} ⟹ **(A ∪ B)′ = {4, 6, 8, 10}**.
  Ab A′ ∩ B′ dekho: {2, 4, 6, 8, 10} ∩ {1, 4, 6, 8, 9, 10} = **{4, 6, 8, 10}**.
  Dono barabar aaye: **(A ∪ B)′ = A′ ∩ B′**!
- (iv) A ∩ B = {3, 5, 7} ⟹ **(A ∩ B)′ = {1, 2, 4, 6, 8, 9, 10}**.
  Ab A′ ∪ B′ dekho: {2, 4, 6, 8, 10} ∪ {1, 4, 6, 8, 9, 10} = **{1, 2, 4, 6, 8, 9, 10}**.
  Ye dono bhi barabar aaye: **(A ∩ B)′ = A′ ∪ B′**!

(Topic 4 mein hum is jadoo — **De Morgan's Laws** — ka poora proof dekhenge!)

**Jaanch:** n(A) + n(A′) = 5 + 5 = 10 = n(U) ✅; n(B) + n(B′) = 4 + 6 = 10 = n(U) ✅; dono identities exact match ✅.

---

## Part D: Real Intervals Par Operations (Number Line Trick!)

Class 11 mein aksar intervals par ∪, ∩, − aur ′ nikaalne ke sawaal aate hain. Sabse pakka tareeka: **dono intervals ko ek hi number line par banao** aur endpoints par dhyan do!

### Example 6: Intervals par Union, Intersection, Difference aur Complement

Maan lo Universal set U = R, aur do intervals hain: **I₁ = [−3, 4)** aur **I₂ = (1, 8]**.
Nikalo: (i) I₁ ∪ I₂, (ii) I₁ ∩ I₂, (iii) I₁ − I₂, (iv) I₂ − I₁, (v) I₁′.

```
   I₁ = [−3, 4):     ●===================o
                    -3                   4
   I₂ = (1, 8]:                  o=====================●
                                 1                     8
   -----------------------------------------------------------> R
                    -3           1       4             8
```

> **Figure 3.4** – Number line par I₁ aur I₂ ko upar-neeche rakhne se overlap (1, 4), union [−3, 8], aur endpoints ki sthiti ek nazar mein dikh jaati hai.

**Hal:**
- (i) **I₁ ∪ I₂** (dono milakar kahan se kahan tak): −3 (shamil) se 8 (shamil) tak, beech mein koi gap nahi!
  **I₁ ∪ I₂ = [−3, 8]**.
- (ii) **I₁ ∩ I₂** (jahan dono ek saath maujood hain): 1 se 4 ke beech.
  - Kya 1 dono mein hai? I₁ mein hai, par I₂ = (1, 8] mein 1 **nahi** hai → 1 par round bracket (.
  - Kya 4 dono mein hai? I₂ mein hai, par I₁ = [−3, 4) mein 4 **nahi** hai → 4 par round bracket ).
  Isliye **I₁ ∩ I₂ = (1, 4)**.
- (iii) **I₁ − I₂** (I₁ mein ho, I₂ mein NA ho): −3 se 1 tak.
  - **Endpoint 1 par dhyan do!** 1 ∈ I₁ hai, aur 1 ∉ I₂ hai — isliye 1 **bachega** (closed bracket ])!
  Isliye **I₁ − I₂ = [−3, 1]**.
- (iv) **I₂ − I₁** (I₂ mein ho, I₁ mein NA ho): 4 se 8 tak.
  - **Endpoint 4 par dhyan do!** 4 ∈ I₂ hai, aur 4 ∉ I₁ hai — isliye 4 **bachega** (closed bracket [)!
  Isliye **I₂ − I₁ = [4, 8]**.
- (v) **I₁′ = R − [−3, 4)**: −3 se chhote (par −3 nahi, kyunki −3 ∈ I₁) **ya** 4 aur usse bade (4 shamil, kyunki 4 ∉ I₁)!
  **I₁′ = (−∞, −3) ∪ [4, ∞)**.

**Jaanch:** Test points: x = 1 ∈ I₁, 1 ∉ I₂ ⟹ 1 ∈ I₁ − I₂ ✅; x = 4 ∈ I₂, 4 ∉ I₁ ⟹ 4 ∈ I₂ − I₁ ✅; I₁ ∪ I₁′ = (−∞, −3) ∪ [−3, 4) ∪ [4, ∞) = R ✅.

---

## Aam galtiyan

1. **A − B aur B − A ko ek hi maan lena:** Student sochta hai "difference to dono taraf same hoga."
   - *Galat kyun:* {1, 2, 3} − {2, 3, 4} = {1}, par {2, 3, 4} − {1, 2, 3} = {4}. Dono tabhi equal hote hain jab A = B ho (tab dono ∅ hote hain).
2. **A ∪ B mein common elements ko do baar likh dena:** Student {1, 2, 3} ∪ {2, 3, 4} = {1, 2, 2, 3, 3, 4} likh deta hai.
   - *Sahi soch:* Union bhi ek set hai, aur set mein har element sirf ek baar likha jaata hai: {1, 2, 3, 4}.
3. **Bina Universal Set U dekhe Complement likhna:** Student A = {2, 4} ka complement seedha {1, 3, 5, ...} likh deta hai, jabki sawaal mein U = {1, 2, 3, 4, 5, 6} diya tha.
   - *Sahi soch:* Hamesha pehle U padho, phir U − A nikalo.
4. **Interval difference ya complement mein endpoint bracket ulta na karna:** Student [−3, 4) − (1, 8] ko [−3, 1) likh deta hai.
   - *Sahi soch:* Jo point doosre interval mein **nahi** tha (1 ∉ (1, 8]), use kaata nahi gaya — isliye wo bachega (])! Har endpoint ko alag se test karo.

---

## Quick Recap

- **A ∪ B** (Union = OR): A ya B ke sabhi elements (bina repeat).
- **A ∩ B** (Intersection = AND): sirf common elements. **Disjoint** ⟺ A ∩ B = ∅.
- **A − B** (Difference): A mein ho, B mein nahi (commutative nahi!). **A − B, A ∩ B, B − A** pairwise disjoint hain.
- **A Δ B** = (A − B) ∪ (B − A) = (A ∪ B) − (A ∩ B).
- **A′** = U − A (Universal set U zaroori hai!).
- **Intervals** par operations ke liye number line banao aur har endpoint ko alag se check karo.

---

## Practice Questions

1. Let A = {1, 3, 5, 7, 9} and B = {3, 6, 9, 12}. Find:
   (a) A ∪ B    (b) A ∩ B    (c) A − B    (d) B − A    (e) A Δ B

2. Let P = {x ∈ N : x is a multiple of 3, x ≤ 18} and Q = {x ∈ N : x is a factor of 18}. Find P ∪ Q, P ∩ Q, and P − Q.

3. State whether each pair of sets is Disjoint or Not Disjoint (justify):
   (a) {2, 5, 8, 11} and {3, 6, 9, 12}
   (b) {x : x is a vowel} and {x : x is a letter of the word RHYTHM}
   (c) {x ∈ Z : x² = 9} and {x ∈ N : x < 5}

4. Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9}, A = {1, 2, 3, 4}, B = {2, 4, 6, 8}, and C = {3, 4, 5, 6}. Find:
   (a) A′    (b) B′    (c) (A ∪ C)′    (d) (A ∪ B)′    (e) (B − C)′    (f) (A′)′

5. Using the sets A = {1, 2, 3, 4}, B = {2, 4, 6, 8}, C = {3, 4, 5, 6} from Question 4, verify that:
   (a) A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
   (b) A − (B ∪ C) = (A − B) ∩ (A − C)

6. If A = {x ∈ N : x is a prime number} and B = {x ∈ N : x is an even natural number}, find A ∩ B and A − B.

7. Let U = R (the set of all real numbers). Given intervals A = [−5, 2] and B = (−1, 6), find:
   (a) A ∪ B    (b) A ∩ B    (c) A − B    (d) B − A    (e) A′    (f) B′

8. Let U = R. Given P = (−∞, 3) and Q = [−2, ∞), find P ∪ Q, P ∩ Q, P − Q, and Q − P.

9. If A ⊆ B, simplify each of the following (give a one-line reason):
   (a) A ∪ B    (b) A ∩ B    (c) A − B    (d) A ∪ B′ (when U is the universal set — express using a Venn description or check with an example).

10. Given U = {a, b, c, d, e, f, g, h}, X = {a, b, c, d}, Y = {c, d, e, f}, verify that X − Y = X ∩ Y′.

11. Find the sets A and B if A − B = {1, 5, 7}, B − A = {2, 8}, and A ∩ B = {3, 6}. Also find A ∪ B and A Δ B.

12. True or False? Give a reason or counterexample:
    (a) For any sets A and B, A − B = B − A.
    (b) (A − B) ∩ (B − A) = ∅ always.
    (c) If A ∩ B = ∅, then A − B = A.
    (d) If U = N and A = {x ∈ N : x ≥ 5}, then A′ = {1, 2, 3, 4}.

### Answers

1. (a) A ∪ B = **{1, 3, 5, 6, 7, 9, 12}**
   (b) A ∩ B = **{3, 9}**
   (c) A − B = **{1, 5, 7}**
   (d) B − A = **{6, 12}**
   (e) A Δ B = {1, 5, 7} ∪ {6, 12} = **{1, 5, 6, 7, 12}**.
   Jaanch: n(A − B) + n(A ∩ B) + n(B − A) = 3 + 2 + 2 = 7 = n(A ∪ B) ✅.

2. P = {3, 6, 9, 12, 15, 18}, Q = {1, 2, 3, 6, 9, 18}.
   - P ∪ Q = **{1, 2, 3, 6, 9, 12, 15, 18}**
   - P ∩ Q = **{3, 6, 9, 18}**
   - P − Q = **{12, 15}**. Jaanch: 6 + 6 − 4 = 8 = n(P ∪ Q) ✅.

3. (a) **Disjoint:** koi common element nahi (intersection = ∅).
   (b) **Disjoint:** vowels = {a, e, i, o, u}, RHYTHM = {R, H, Y, T, M}; intersection = ∅.
   (c) **Not disjoint:** pehla set {−3, 3} hai aur doosra {1, 2, 3, 4}; 3 dono mein common hai.

4. (a) A′ = **{5, 6, 7, 8, 9}**
   (b) B′ = **{1, 3, 5, 7, 9}**
   (c) A ∪ C = {1, 2, 3, 4, 5, 6} ⟹ (A ∪ C)′ = **{7, 8, 9}**
   (d) A ∪ B = {1, 2, 3, 4, 6, 8} ⟹ (A ∪ B)′ = **{5, 7, 9}**
   (e) B − C = {2, 8} ⟹ (B − C)′ = **{1, 3, 4, 5, 6, 7, 9}**
   (f) (A′)′ = U − {5, 6, 7, 8, 9} = **{1, 2, 3, 4} = A**. Jaanch: n(A) + n(A′) = 4 + 5 = 9 ✅.

5. (a) LHS: B ∪ C = {2, 3, 4, 5, 6, 8} ⟹ A ∩ (B ∪ C) = {2, 3, 4}.
   RHS: A ∩ B = {2, 4}, A ∩ C = {3, 4} ⟹ (A ∩ B) ∪ (A ∩ C) = {2, 3, 4}. Jaanch: LHS = RHS ✅.
   (b) LHS: A − (B ∪ C) = {1, 2, 3, 4} − {2, 3, 4, 5, 6, 8} = {1}.
   RHS: A − B = {1, 3}, A − C = {1, 2} ⟹ (A − B) ∩ (A − C) = {1}. Jaanch: LHS = RHS ✅.

6. A = {2, 3, 5, 7, 11, ...}, B = {2, 4, 6, 8, ...}.
   - **A ∩ B = {2}** (ekmatra even prime number!).
   - **A − B = {3, 5, 7, 11, 13, ...}** (sabhi odd prime numbers).

7. A = [−5, 2], B = (−1, 6):
   (a) A ∪ B = **[−5, 6)**
   (b) A ∩ B = **(−1, 2]** (−1 ∉ B par 2 ∈ dono)
   (c) A − B = **[−5, −1]** (kyunki −1 ∈ A aur −1 ∉ B, isliye −1 bachega!)
   (d) B − A = **(2, 6)** (kyunki 2 ∈ A, isliye 2 kat gaya!)
   (e) A′ = **(−∞, −5) ∪ (2, ∞)**
   (f) B′ = **(−∞, −1] ∪ [6, ∞)**. Jaanch: A ∩ A′ = ∅ aur A ∪ A′ = R ✅.

8. P = (−∞, 3), Q = [−2, ∞):
   - P ∪ Q = **(−∞, ∞) = R**
   - P ∩ Q = **[−2, 3)**
   - P − Q = **(−∞, −2)** (−2 ∈ Q isliye kat gaya)
   - Q − P = **[3, ∞)** (3 ∉ P isliye 3 bacha!). Jaanch: (−∞, −2) ∪ [−2, 3) ∪ [3, ∞) = R ✅.

9. (a) **A ∪ B = B** (A ke saare elements pehle se B mein hain).
   (b) **A ∩ B = A** (A ke sabhi elements B mein common hain).
   (c) **A − B = ∅** (A ka koi element B ke bahar nahi).
   (d) **A ∪ B′**: B − A ko chhod kar poora U, yaani **(B − A)′**. (Udaharan: U = {1, 2, 3}, A = {1}, B = {1, 2} ⟹ B′ = {3}, A ∪ B′ = {1, 3} = U − {2}.)

10. LHS: X − Y = {a, b}.
    RHS: Y′ = U − Y = {a, b, g, h}. X ∩ Y′ = {a, b, c, d} ∩ {a, b, g, h} = {a, b}.
    Jaanch: LHS = RHS ✅!

11. A = (A − B) ∪ (A ∩ B) = **{1, 3, 5, 6, 7}**.
    B = (B − A) ∪ (A ∩ B) = **{2, 3, 6, 8}**.
    A ∪ B = **{1, 2, 3, 5, 6, 7, 8}**, A Δ B = (A − B) ∪ (B − A) = **{1, 2, 5, 7, 8}**.
    Jaanch: A − B = {1, 5, 7}, B − A = {2, 8}, A ∩ B = {3, 6} ✅.

12. (a) ❌ False: A = {1, 2}, B = {2, 3} to A − B = {1} ≠ {3} = B − A.
    (b) ✅ True: A − B mein B ke elements nahi, aur B − A mein sirf B ke elements hain, to common = ∅.
    (c) ✅ True: A aur B mein kuch common nahi, isliye A mein se kuch nahi katega.
    (d) ✅ True: N = {1, 2, 3, 4, 5, ...} mein se ≥ 5 hatane par {1, 2, 3, 4} bachta hai.

---

Ab tum sets ke chaaron operations — Union, Intersection, Difference aur Complement — finite sets aur real intervals dono par aasaani se chala sakte ho.

**Agle topic mein:** in operations ke **Algebraic Laws** (khaas kar **De Morgan's Laws**) aur survey wale **practical problems** (2-set aur 3-set ginti ke formulas)!
