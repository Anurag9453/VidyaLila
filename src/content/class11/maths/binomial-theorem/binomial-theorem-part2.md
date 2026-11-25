# Chapter: Binomial Theorem (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [binomial-theorem.md](binomial-theorem.md) se aage chalti hai** (wahan Topic 1 mein Binomial Theorem, Pascal's Triangle aur binomial coefficients ka jod 2ⁿ the). Chapter ki shuruaat: [binomial-theorem.md](binomial-theorem.md).
> **Topics covered in this file:**
> 2. General Term Aur Middle Term

---

# Topic 2: General Term Aur Middle Term

Topic 1 mein humne (1 − 2x)⁵ ya (x² + 3/x)⁴ ko poora khol kar likha. Par agar sawaal poochhe: **(x − 2y)¹²** ke expansion ka **chautha term (4th term)** kya hai, ya **(x/3 + 9y)¹⁰** ka theek **beech wala term (Middle Term)** kya hai? Kya hum poore 13 ya 11 terms likhenge? Bilkul nahi! Is topic mein hum **General Term (Tᵣ₊₁)** ka magic formula seekhenge jo humein seedha kisi bhi term par pahuncha deta hai — chahe shuru se ho, ant se ho, ya theek beech se!

---

## Nalini ki 13-coach express train

Station par Nalini apni family ke saath 13-coach wali express train mein chadhne aayi. Unki ticket **Coach 7** (theek beech wale coach!) ki thi. Nalini ke chhote bhai ne kaha, "Pehle Coach 1 se ginte hue 2, 3, 4, 5, 6 tak jaate hain!"
Papa hanse: "Are, platform par digital board laga hai — seedha Coach 7 ke saamne khade ho jao! Aur dhyan do: 13 coaches mein theek beech mein **1 akela coach (7th)** hota hai, par agar 12 coaches hote to beech mein **do coaches (6th aur 7th)** hote!"

Binomial expansion mein bhi yahi hota hai: **General Term Tᵣ₊₁** hamara digital board hai jo seedha kisi bhi term par le jaata hai, aur **Middle Term** bilkul train ke beech wale coach ki tarah n ke even ya odd hone par 1 ya 2 hote hain!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **General Term (Tᵣ₊₁)** | (a + b)ⁿ ka (r + 1)-th term: **Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ** | 4th term ke liye r = 3 rakho! |
| **k-th term from the end** | (a + b)ⁿ mein ant se k-th term = (b + a)ⁿ mein shuru se k-th term | (n − k + 2)-th term from start |
| **Middle term (n even)** | Jab n even ho (kul n + 1 odd terms): theek **1** middle term: **T_(n/2 + 1)** | n = 10 ⟹ T₆ |
| **Middle terms (n odd)** | Jab n odd ho (kul n + 1 even terms): **2** middle terms: **T_((n+1)/2)** aur **T_((n+3)/2)** | n = 7 ⟹ T₄ aur T₅ |

---

## Part A: General Term Tᵣ₊₁ (Index r + 1 Kyun?)

(a + b)ⁿ ke terms ko gino:
- **1st term (T₁):** ⁿC₀ aⁿ b⁰   *(yahan r = 0!)*
- **2nd term (T₂):** ⁿC₁ aⁿ⁻¹ b¹   *(yahan r = 1!)*
- **3rd term (T₃):** ⁿC₂ aⁿ⁻² b²   *(yahan r = 2!)*
- ...
- **(r + 1)-th term (Tᵣ₊₁):**

> **Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ**   (jahan r = 0, 1, 2, ..., n)

**Yaad rakhne ka golden mantra:** Term number hamesha r se **1 bada** hota hai!
- 4th term chahiye? **r = 3** rakho (T₄ = T₃₊₁)!
- 10th term chahiye? **r = 9** rakho (T₁₀ = T₉₊₁)!

### Ant Se k-th Term (k-th Term From the End) — Sabse Aasaan Trick!

(a + b)ⁿ mein ant se k-th term nikaalne ke do barabar tareeke hain:
1. **Super-Easy Swap Trick:** **(a + b)ⁿ** ko ulta kar do → **(b + a)ⁿ**, aur uska **shuru se k-th term** (r = k − 1) nikaal lo!
2. **Formula Trick:** Shuru se **(n − k + 2)-th term** nikalo! *(Dono bilkul wahi jawab dete hain!)*

### Example 1: 4th Term in (x − 2y)¹²

**(x − 2y)¹²** ke expansion ka **4th term (T₄)** nikalo.

**Hal:**
Yahan a = x, b = **−2y** (minus sign saath rakhna!), n = 12, aur 4th term ke liye **r = 3**:
T₄ = T₃₊₁ = ¹²C₃ (x)¹²⁻³ (−2y)³
= [(12 × 11 × 10) / 6] × x⁹ × (−8y³)
= 220 × (−8) x⁹ y³ = **−1760 x⁹ y³**.

**Jaanch:** ¹²C₃ = 220, (−2)³ = −8, 220 × (−8) = −1760 ✅; power sum 9 + 3 = 12 ✅.

### Example 2: 5th Term From the End in (x³ − 1/x²)¹⁰

**(x³ − 1/x²)¹⁰** ke expansion mein **ant se 5th term** nikalo.

**Hal:**
**Swap Trick:** (−1/x² + x³)¹⁰ ka **shuru se 5th term** (r = 4):
T₅ = ¹⁰C₄ (−1/x²)¹⁰⁻⁴ (x³)⁴
= [(10 × 9 × 8 × 7) / 24] × (1 / x¹²) × (x¹²)
= 210 × 1 = **210**! *(Ye x se independent nikal aaya!)*

**Jaanch:** Formula check: shuru se (10 − 5 + 2) = 7th term (r = 6) in (x³ − 1/x²)¹⁰: ¹⁰C₆ (x³)⁴ (−1/x²)⁶ = 210 x¹² / x¹² = 210 ✅!

---

## Part B: Middle Term(s)

Expansion (a + b)ⁿ mein kul **(n + 1)** terms hote hain:

1. **Case 1: Jab n EVEN ho** (jaise n = 10 → kul 11 terms, odd ginti!):
   Theek beech mein **EK akela Middle Term** hota hai:
   > **Middle Term = T_(n/2 + 1)**   *(yaani r = n/2)*

2. **Case 2: Jab n ODD ho** (jaise n = 7 → kul 8 terms, even ginti!):
   Beech mein **DO Middle Terms** hote hain:
   > **Middle Terms = T_((n + 1)/2)   aur   T_((n + 3)/2)**   *(yaani r = (n − 1)/2 aur r = (n + 1)/2)*

### Example 3: Even Index Middle Term — (x/3 + 9y)¹⁰

**(x/3 + 9y)¹⁰** ka middle term nikalo.

**Hal:**
n = 10 (**even**!) → sirf 1 middle term: **T_(10/2 + 1) = T₆** (r = 5):
T₆ = ¹⁰C₅ (x/3)⁵ (9y)⁵
= [(10 × 9 × 8 × 7 × 6) / 120] × (x⁵ / 3⁵) × (3¹⁰ y⁵)   *(kyunki 9⁵ = (3²)⁵ = 3¹⁰!)*
= 252 × 3⁵ x⁵ y⁵
= 252 × 243 x⁵ y⁵ = **61,236 x⁵ y⁵**.

**Jaanch:** ¹⁰C₅ = 252, (9/3)⁵ = 3⁵ = 243, 252 × 243 = 61236 ✅!

### Example 4: Odd Index Middle Terms — (3 − x³/6)⁷

**(3 − x³/6)⁷** ke dono middle terms nikalo.

**Hal:**
n = 7 (**odd**!) → **2 middle terms**: T_((7+1)/2) = **T₄ (r = 3)** aur T_((7+3)/2) = **T₅ (r = 4)**:
- **T₄ (r = 3):**
  ⁷C₃ (3)⁴ (−x³/6)³ = 35 × 81 × (−x⁹ / 216) = −(35 × 81 / 216) x⁹.
  81 aur 216 dono 27 se kat'te hain (81/27 = 3, 216/27 = 8):
  T₄ = **−(105 / 8) x⁹**.
- **T₅ (r = 4):**
  ⁷C₄ (3)³ (−x³/6)⁴ = 35 × 27 × (x¹² / 1296).
  27 aur 1296 dono 27 se kat'te hain (1296/27 = 48):
  T₅ = **(35 / 48) x¹²**.

**Jaanch:** T₅/T₄ = (7−3)/4 × (−x³/6)/3 = −x³/18; check (−105/8) × (−1/18) = 105/144 = 35/48 ✅!

---

## Aam galtiyan

1. **k-th term ke liye r = k rakh dena (r = k − 1 ke bajay):** Student 4th term ke liye ¹²C₄ likh deta hai!
   - *Galat kyun:* Tᵣ₊₁ formula mein r hamesha **term number − 1** hota hai! 4th term = T₃₊₁ (r = 3).
2. **Odd n par sirf ek middle term nikaalna:**
   - *Sahi soch:* n odd hai to total terms (n + 1) **even** hain — even list ke beech mein hamesha **do** terms hote hain!
3. **b ka minus sign bhool jaana:** (x − 2y)¹² mein b = −2y hai, +2y nahi! Odd r par answer **negative** aata hai.

---

## Quick Recap

- **General Term:** **Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ** (k-th term ke liye **r = k − 1**).
- **k-th from end in (a + b)ⁿ** = k-th from start in **(b + a)ⁿ**.
- **Middle term:** n even → **T_(n/2 + 1)**; n odd → **T_((n+1)/2)** aur **T_((n+3)/2)**.

---

## Practice Questions

1. Write the General Term Tᵣ₊₁ in the expansion of:
   (a) (x² − y)⁶
   (b) (x² − yx)¹²  (x ≠ 0)

2. Find the **13th term** in the expansion of **(9x − 1/(3√x))¹⁸** (x > 0).

3. Find the **7th term** in the expansion of **(2x² − 1/(3x))¹⁰**.

4. Find the **4th term from the end** in the expansion of **(x/2 − 2/x)⁹**.

5. Find the **middle term** in the expansion of **(2x² − 1/x)⁸**.

6. Find the **middle terms** in the expansion of **(3x − x³/6)⁹**.

7. Find the **middle term** in the expansion of **(1 + 2x + x²)¹⁰**! (Hint: notice 1 + 2x + x² = (1 + x)² first!)

8. Show that the middle term in the expansion of **(1 + x)²ⁿ** is **[(1 · 3 · 5 ... (2n − 1)) / n!] × 2ⁿ xⁿ**.

9. If the 2nd, 3rd, and 4th terms in the expansion of **(x + a)ⁿ** are **240, 720, and 1080** respectively, find **x, a, and n**.

10. Find the **6th term** in the expansion of **(y^(1/2) + x^(1/3))ⁿ** if the binomial coefficient of the 3rd term from the end is **45**.

11. In **(a + b)¹¹**, which two terms are the middle terms, and what is the ratio of their binomial coefficients?

12. True or False? Give a one-line reason:
    (a) In (a + b)ⁿ, the 5th term corresponds to r = 5.
    (b) The expansion of (x + 2)¹⁵ has two middle terms: T₈ and T₉.
    (c) The 3rd term from the end in (a + b)⁸ is the 7th term from the beginning.

### Answers

1. (a) Tᵣ₊₁ = (−1)ʳ ⁶Cᵣ x¹²⁻²ʳ yʳ.
   (b) Tᵣ₊₁ = (−1)ʳ ¹²Cᵣ x²⁴⁻ʳ yʳ.

2. r = 12: T₁₃ = ¹⁸C₁₂ (9x)⁶ (−1/(3√x))¹² = ¹⁸C₆ × 3¹² x⁶ × (1 / (3¹² x⁶)) = ¹⁸C₆ = **18,564**.
   Jaanch: 9⁶ = 3¹², 3¹²/3¹² = 1, x⁶/x⁶ = 1; ¹⁸C₆ = 18564 ✅!

3. r = 6: T₇ = ¹⁰C₆ (2x²)⁴ (−1/(3x))⁶ = 210 × 16 x⁸ × (1 / (729 x⁶)) = **(1120 / 243) x²**.
   Jaanch: 210 × 16 / 729 = 70 × 16 / 243 = 1120/243 ✅.

4. Swap Trick: (−2/x + x/2)⁹ ka 4th term from start (r = 3):
   ⁹C₃ (−2/x)⁶ (x/2)³ = 84 × (64/x⁶) × (x³/8) = 84 × 8 / x³ = **672 / x³**. Jaanch: 84 × 8 = 672 ✅.

5. n = 8 (even) → T₅ (r = 4):
   ⁸C₄ (2x²)⁴ (−1/x)⁴ = 70 × 16 x⁸ / x⁴ = **1120 x⁴**. Jaanch: 70 × 16 = 1120 ✅.

6. n = 9 (odd) → T₅ (r = 4) aur T₆ (r = 5):
   - T₅ = ⁹C₄ (3x)⁵ (−x³/6)⁴ = 126 × 243 x⁵ × x¹² / 1296 = **(189 / 8) x¹⁷**.
   - T₆ = ⁹C₅ (3x)⁴ (−x³/6)⁵ = 126 × 81 x⁴ × (−x¹⁵ / 7776) = **−(21 / 16) x¹⁹**.
   Jaanch: T₆/T₅ = (5/5) × (−x³/6)/(3x) = −x²/18; (189/8)(−1/18) = −21/16 ✅!

7. (1 + 2x + x²)¹⁰ = ((1 + x)²)¹⁰ = **(1 + x)²⁰** (even index 20!).
   Middle term = **T₁₁ = ²⁰C₁₀ x¹⁰** (= 184,756 x¹⁰).

8. Index 2n even hai → Middle term Tₙ₊₁ = ²ⁿCₙ xⁿ = [(2n)! / (n! n!)] xⁿ.
   (2n)! ke odd aur even factors alag karo:
   (2n)! = [1 · 3 · 5 ... (2n − 1)] × [2 · 4 · 6 ... (2n)] = [1 · 3 · 5 ... (2n − 1)] × 2ⁿ n!.
   n! kaato → **[(1 · 3 · 5 ... (2n − 1)) / n!] × 2ⁿ xⁿ**!

9. T₂ = n xⁿ⁻¹ a = 240, T₃ = [n(n−1)/2] xⁿ⁻² a² = 720, T₄ = [n(n−1)(n−2)/6] xⁿ⁻³ a³ = 1080.
   Ratios:
   - T₃/T₂ = [(n − 1)/2] × (a/x) = 720/240 = **3** ⟹ (n − 1)(a/x) = 6.
   - T₄/T₃ = [(n − 2)/3] × (a/x) = 1080/720 = **3/2** ⟹ (n − 2)(a/x) = 9/2.
   Divide: (n − 1)/(n − 2) = 6 ÷ (9/2) = 4/3 ⟹ 3n − 3 = 4n − 8 ⟹ **n = 5**.
   Tab 4(a/x) = 6 ⟹ a/x = 3/2. T₂ mein rakho: 5 x⁴ (3x/2) = 240 ⟹ x⁵ = 32 ⟹ **x = 2**, **a = 3**.
   Jaanch: T₂ = 5(16)(3) = 240, T₃ = 10(8)(9) = 720, T₄ = 10(4)(27) = 1080 ✅!

10. 3rd term from end ka binomial coeff = 3rd term from start ka = ⁿC₂ = 45 ⟹ n(n − 1) = 90 ⟹ **n = 10**.
    T₆ (r = 5) = ¹⁰C₅ (y^(1/2))⁵ (x^(1/3))⁵ = **252 y^(5/2) x^(5/3)**. Jaanch: ¹⁰C₂ = 45, ¹⁰C₅ = 252 ✅.

11. n = 11 (odd) → **T₆** aur **T₇**; unke binomial coefficients ¹¹C₅ aur ¹¹C₆ barabar hain (5 + 6 = 11), isliye ratio = **1 : 1**!

12. (a) ❌ False: 5th term ke liye r = 4 (T₅ = T₄₊₁).
    (b) ✅ True: (15 + 1)/2 = 8 aur (15 + 3)/2 = 9.
    (c) ✅ True: n − k + 2 = 8 − 3 + 2 = 7th term.

---

Ab tum bina poora expansion khole seedha kisi bhi term ya middle term ko exact nikaal sakte ho.

**Agle topic mein:** General Term ke **teen sabse powerful applications** — **Coefficient of xᵐ / Term Independent of x**, **Numerical Approximations**, aur **Divisibility Proofs**!
