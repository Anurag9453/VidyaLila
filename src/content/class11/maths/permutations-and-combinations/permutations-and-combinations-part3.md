# Chapter: Permutations and Combinations (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [permutations-and-combinations-part2.md](permutations-and-combinations-part2.md) se aage chalti hai** (wahan Topic 2 mein Factorial n!, Permutations ⁿPᵣ, identical objects aur Bundle/Gap methods the). Chapter ki shuruaat: [permutations-and-combinations.md](permutations-and-combinations.md).
> **Topics covered in this file:**
> 3. Combinations (ⁿCᵣ), Relation With Permutations Aur Word Problems

---

# Topic 3: Combinations (ⁿCᵣ), Relation With Permutations Aur Word Problems

Topic 2 mein har jagah **kram (order)** maayne rakhta tha: shabd ROSE aur SORE alag-alag words hain! Par ab socho: agar 5 doston mein se 3 ki ek **committee** ya **cricket team** chunni ho, to kya "{A, B, C}" aur "{C, B, A}" do alag teams hain? Bilkul nahi — wahi teen log hain! Jab hum cheezon ko sirf **chunte (select)** hain aur unke **order se koi farq nahi padta**, to use **Combination (ⁿCᵣ)** kehte hain. Is topic mein hum ⁿCᵣ ka formula derive karenge, uski 4 super-useful properties (including **Pascal's Identity**) seekhenge, aur committee aur geometry problems hal karenge.

---

## Preeti ki debate team

Inter-school debate ke liye 5 classmates (A, B, C, D, E) mein se **3 members** ki team chunni thi. Preeti ne pehle Topic 2 ka formula lagaya: ⁵P₃ = 5 × 4 × 3 = **60**.
Phir usne dekha ki ek hi team {A, B, C} us 60 ki list mein **3! = 6 baar** gin li gayi thi: ABC, ACB, BAC, BCA, CAB, CBA! Har ek team theek 6 baar repeat hui thi!
To asli alag-alag teams ki ginti = 60 ÷ 6 = **10 teams**!

Teacher ma'am muskuraayi: "Shabaash Preeti! Tumne abhi-abhi **Permutations aur Combinations ka sabse bada rishta** khud khoj nikala: **ⁿPᵣ = ⁿCᵣ × r!**, yaani **ⁿCᵣ = ⁿPᵣ ÷ r!**"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Combination (ⁿCᵣ)** | n alag cheezon mein se r cheezon ko **bina order ke** chunne (select karne) ke tareeke | ⁵C₃ = 10 |
| **Relation ⁿPᵣ = ⁿCᵣ × r!** | Pehle r cheezein chuno (ⁿCᵣ), phir unhe aapas mein sajhao (r!) = ⁿPᵣ | ⁵P₃ = ⁵C₃ × 3! = 10 × 6 = 60 |
| **Symmetry property** | r cheezein chunna = (n − r) cheezein chhodna: **ⁿCᵣ = ⁿCₙ₋ᵣ** | ¹⁰C₈ = ¹⁰C₂ = 45 |
| **Pascal's Identity** | **ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ** (jo agle chapter Binomial Theorem mein bhi chamkegi!) | ⁷C₃ + ⁷C₂ = ⁸C₃ = 56 |

---

## Part A: Formula Derivation Aur 4 Pakki Properties

### Derivation (Kyun?)

n alag cheezon mein se r cheezon ko **order ke saath** sajane (ⁿPᵣ) ko do kadamon mein todo:
1. Pehle n mein se r cheezein **chuno** (bina order): **ⁿCᵣ** tareeke.
2. Phir chuni hui r cheezon ko aapas mein **sajhao**: **r!** tareeke.

Multiplication Principle se: **ⁿPᵣ = ⁿCᵣ × r!**
Isliye:

> **ⁿCᵣ = ⁿPᵣ / r! = n! / [r! (n − r)!]**   (0 ≤ r ≤ n)

### 4 Super-Useful Properties

1. **Boundary values:** **ⁿC₀ = 1**, **ⁿCₙ = 1**, **ⁿC₁ = n**.
2. **Symmetry:** **ⁿCᵣ = ⁿCₙ₋ᵣ**
   *Kyun?* n mein se r cheezein chunna aur (n − r) cheezein chhodna ek hi baat hai! Isse ¹⁰⁰C₉₈ = ¹⁰⁰C₂ = (100 × 99)/2 = 4950 do second mein nikal jaata hai!
3. **Equality Rule:**
   > **ⁿCₐ = ⁿC_b  ⟹  ya to a = b,  YA  a + b = n**
4. **Pascal's Identity (Proof!):**
   > **ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ**   (1 ≤ r ≤ n)
   *Proof:*
   LHS = n! / [r! (n − r)!] + n! / [(r − 1)! (n − r + 1)!]
   Common nikalo n! / [(r − 1)! (n − r)!]:
   = [n! / ((r − 1)! (n − r)!)] × [1/r + 1/(n − r + 1)]
   = [n! / ((r − 1)! (n − r)!)] × [(n + 1) / (r (n − r + 1))]
   = **(n + 1)! / [r! (n + 1 − r)!] = ⁿ⁺¹Cᵣ** = RHS!

---

## Part B: Worked Examples

### Example 1: Equality Rule aur Pascal's Identity

(i) Agar **ⁿC₉ = ⁿC₈**, to **ⁿC₁₇** nikalo.
(ii) Verify karo: **⁷C₃ + ⁷C₂ = ⁸C₃**.

**Hal:**
- (i) Kyunki 9 ≠ 8, Equality Rule se **n = 9 + 8 = 17**!
  Isliye ⁿC₁₇ = ¹⁷C₁₇ = **1**.
- (ii) ⁷C₃ = (7 × 6 × 5)/6 = **35**; ⁷C₂ = (7 × 6)/2 = **21**.
  LHS = 35 + 21 = **56**.
  RHS = ⁸C₃ = (8 × 7 × 6)/6 = **56**. Dono barabar!

**Jaanch:** 35 + 21 = 56 = ⁸C₃ ✅.

### Example 2: Simple Committee Selection

**2 men aur 3 women** mein se **3 logon** ki ek committee banani hai:
(i) Kul kitne tareekon se ban sakti hai?
(ii) Unme se kitni committees mein **1 man aur 2 women** hongi?

**Hal:**
- (i) Kul log = 2 + 3 = 5. 5 mein se 3 chunne ke tareeke = ⁵C₃ = ⁵C₂ = (5 × 4)/2 = **10**.
- (ii) 2 men mein se 1 man (**²C₁ = 2**) **AUR** 3 women mein se 2 women (**³C₂ = 3**):
  Multiplication Principle se: ²C₁ × ³C₂ = 2 × 3 = **6 committees**.

**Jaanch:** Baaki 4 committees mein (2M, 1W → 1×3 = 3) aur (0M, 3W → 1×1 = 1); 6 + 3 + 1 = 10 ✅!

### Example 3: "At Least" Committee Problem (Disjoint Cases!)

**6 boys aur 4 girls** mein se **5 students** ki committee banani hai jisme **kam se kam (at least) 2 girls** hon. Kul kitne tareeke hain?

**Hal:**
"At least 2 girls" ke **3 disjoint cases** (OR → Add!):
- **Case 1 (2 girls, 3 boys):** ⁴C₂ × ⁶C₃ = 6 × 20 = **120**
- **Case 2 (3 girls, 2 boys):** ⁴C₃ × ⁶C₂ = 4 × 15 = **60**
- **Case 3 (4 girls, 1 boy):** ⁴C₄ × ⁶C₁ = 1 × 6 = **6**
Total = 120 + 60 + 6 = **186 committees**.

**Jaanch:** Total bina shart = ¹⁰C₅ = 252; unwanted cases (0G 5B → 6, 1G 4B → 4×15 = 60); 252 − 66 = 186 ✅!

### Example 4: Geometry Counting — Chords aur Diagonals

(i) Ek circle par **21 points** hain. Unhe jod kar kitni **chords** banayi ja sakti hain?
(ii) Ek **octagon (8 sides)** mein kul kitne **diagonals** hote hain?

**Hal:**
- (i) Har chord banane ke liye circle ke koi bhi **2 points** chunne hote hain (order se farq nahi, AB aur BA ek hi chord hai!):
  Chords = ²¹C₂ = (21 × 20)/2 = **210 chords**.
- (ii) n-sided polygon ke n vertices ko 2-2 karke jodne par **ⁿC₂** lines banti hain, jinme se **n** to polygon ki apni **sides** hain!
  Isliye diagonals ka formula: **ⁿC₂ − n = n(n − 3) / 2**.
  Octagon (n = 8) ke liye: ⁸C₂ − 8 = 28 − 8 = **20 diagonals** (ya 8 × 5 / 2 = 20).

**Jaanch:** Triangle (n = 3) → 3(0)/2 = 0 diagonals ✅; Square (n = 4) → 4(1)/2 = 2 diagonals ✅; Octagon → 28 − 8 = 20 ✅.

---

## Aam galtiyan

1. **Order zaroori ho to ⁿCᵣ laga dena (ya order zaroori na ho to ⁿPᵣ):**
   - *Rule of thumb:* President + Vice-President (alag posts = order matters → **ⁿPᵣ**); 2-member committee (equal members = order doesn't matter → **ⁿCᵣ**)!
2. **"At least 1 girl" mein double-counting kar dena:** Student 4 girls mein se 1 girl chun kar (⁴C₁) baaki 9 mein se 2 (⁹C₂) chun leta hai: 4 × 36 = 144!
   - *Galat kyun:* Isme 2 girls wali team {G1, G2, B1} do baar gin li gayi (ek baar G1 pehle chunne par, ek baar G2 pehle chunne par)! Hamesha **disjoint cases** jodo ya **Total − None** karo!
3. **Diagonals mein polygon ki n sides ghatana bhool jaana:**
   - *Sahi soch:* ⁿC₂ mein sides aur diagonals **dono** hote hain — diagonals ke liye hamesha **ⁿC₂ − n = n(n − 3)/2** lagao!

---

## Quick Recap

- **ⁿCᵣ = n! / [r! (n − r)!]**; **ⁿPᵣ = ⁿCᵣ × r!**.
- **ⁿC₀ = ⁿCₙ = 1**, **ⁿCᵣ = ⁿCₙ₋ᵣ**, **ⁿCₐ = ⁿC_b ⟹ a = b ya a + b = n**, **ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ**.
- **At least / At most:** Disjoint cases jodo ya **Total − Unwanted** lagao.
- **Geometry:** chords = ⁿC₂, triangles (non-collinear) = ⁿC₃, diagonals = **n(n − 3)/2**.

---

## Practice Questions

1. If **ⁿC₈ = ⁿC₂**, find **ⁿC₂** (first find n!).

2. Determine n if:
   (a) **²ⁿC₃ : ⁿC₃ = 12 : 1**
   (b) **²ⁿC₃ : ⁿC₃ = 11 : 1**

3. How many chords can be drawn through **15 points** on a circle?

4. How many triangles can be formed by joining **12 points** in a plane, no three of which are collinear? How many if **5 of the 12 points are collinear**?

5. Find the number of diagonals of a **dodecagon** (12-sided polygon). Which polygon has **54 diagonals**?

6. A bag contains **5 black** and **6 red** balls. Determine the number of ways in which **2 black and 3 red** balls can be selected.

7. In how many ways can a student choose a programme of **5 courses** if **9 courses** are available and **2 specific courses are compulsory** for every student?

8. A committee of **7** has to be formed from **9 boys and 4 girls**. In how many ways can this be done when the committee consists of:
   (a) exactly 3 girls?
   (b) at least 3 girls?
   (c) at most 3 girls?

9. In how many ways can a team of **3 boys and 3 girls** be selected from **5 boys and 4 girls**?

10. Find the number of ways of selecting **9 balls** from **6 red balls, 5 white balls, and 5 blue balls** if each selection consists of **3 balls of each colour**.

11. Out of **7 consonants and 4 vowels**, how many selections of **3 consonants and 2 vowels** can be made? (Only selection, not arrangement!)

12. True or False? Give a one-line reason:
    (a) ¹⁰C₃ = ¹⁰C₇.
    (b) ⁿPᵣ is always greater than or equal to ⁿCᵣ (for 0 ≤ r ≤ n).
    (c) ⁶C₂ + ⁶C₃ = ⁷C₃.
    (d) The number of handshakes among 10 people (each pair shakes hands once) is ¹⁰P₂ = 90.

### Answers

1. 8 ≠ 2 ⟹ n = 8 + 2 = **10**. ¹⁰C₂ = (10 × 9)/2 = **45**. Jaanch: ¹⁰C₈ = ¹⁰C₂ = 45 ✅.

2. (a) [2n(2n − 1)(2n − 2)] ÷ [n(n − 1)(n − 2)] = 12 ⟹ 4(2n − 1)/(n − 2) = 12 ⟹ 2n − 1 = 3n − 6 ⟹ **n = 5**.
   Jaanch: ¹⁰C₃ = 120, ⁵C₃ = 10, 120/10 = 12 ✅.
   (b) 4(2n − 1)/(n − 2) = 11 ⟹ 8n − 4 = 11n − 22 ⟹ 3n = 18 ⟹ **n = 6**.
   Jaanch: ¹²C₃ = 220, ⁶C₃ = 20, 220/20 = 11 ✅.

3. ¹⁵C₂ = (15 × 14)/2 = **105 chords**.

4. No three collinear: ¹²C₃ = (12 × 11 × 10)/6 = **220 triangles**.
   If 5 are collinear, un 5 points se banne wale ⁵C₃ = 10 triangles nahi banenge!
   Valid triangles = 220 − 10 = **210**. Jaanch: 220 − 10 = 210 ✅.

5. Dodecagon (n = 12): 12(12 − 3)/2 = 6 × 9 = **54 diagonals**!
   Aur doosre hisse ka jawab bhi wahi: n(n − 3)/2 = 54 ⟹ n² − 3n − 108 = 0 ⟹ (n − 12)(n + 9) = 0 ⟹ **12-sided polygon (dodecagon)**!

6. ⁵C₂ × ⁶C₃ = 10 × 20 = **200 ways**. Jaanch: 10 × 20 = 200 ✅.

7. 2 compulsory courses pehle hi fixed hain! Ab bache 7 courses mein se 3 aur chunne hain:
   ⁷C₃ = (7 × 6 × 5)/6 = **35 ways**.

8. (a) Exact 3 girls, 4 boys: ⁴C₃ × ⁹C₄ = 4 × 126 = **504**.
   (b) At least 3 girls (3G 4B OR 4G 3B): 504 + (⁴C₄ × ⁹C₃) = 504 + (1 × 84) = **588**.
   (c) At most 3 girls = Total − (4 girls): ¹³C₇ − 84 = 1716 − 84 = **1632**.
   Jaanch: ⁴C₀⁹C₇(36) + ⁴C₁⁹C₆(336) + ⁴C₂⁹C₅(756) + ⁴C₃⁹C₄(504) = 1632 ✅!

9. ⁵C₃ × ⁴C₃ = 10 × 4 = **40 teams**.

10. ⁶C₃ × ⁵C₃ × ⁵C₃ = 20 × 10 × 10 = **2000 ways**.

11. ⁷C₃ × ⁴C₂ = 35 × 6 = **210 selections**.

12. (a) ✅ True: symmetry rule ⁿCᵣ = ⁿCₙ₋ᵣ (3 + 7 = 10).
    (b) ✅ True: ⁿPᵣ = ⁿCᵣ × r!, aur r! ≥ 1 hamesha.
    (c) ✅ True: Pascal's Identity ⁿCᵣ₋₁ + ⁿCᵣ = ⁿ⁺¹Cᵣ.
    (d) ❌ False: A ka B se aur B ka A se ek hi handshake hai (order nahi!), isliye ¹⁰C₂ = **45**!

---

Ab tum Combinations, Pascal's Identity, committees aur geometry counting mein mahir ho chuke ho.

**Agle aur aakhri topic mein:** Permutations aur Combinations ko **ek saath** jodne wale classic problems — **Select-then-Arrange, Dictionary Rank, 52-Card Deck, MISSISSIPPI** aur **Chapter Ka Saar**!
