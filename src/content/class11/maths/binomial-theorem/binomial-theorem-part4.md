# Chapter: Binomial Theorem (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [binomial-theorem-part3.md](binomial-theorem-part3.md) se aage chalti hai** (wahan Topic 3 mein xᵐ ka coefficient, term independent of x, approximations aur divisibility proofs the). Chapter ki shuruaat: [binomial-theorem.md](binomial-theorem.md). General & Middle Term: [binomial-theorem-part2.md](binomial-theorem-part2.md).
> **Topics covered in this file:**
> 4. Sab Kuch Mila Kar: Mixed Problems, Proofs, Practice Aur Chapter Ka Saar

---

# Topic 4: Sab Kuch Mila Kar: Mixed Problems, Proofs, Practice Aur Chapter Ka Saar

Pichhle teen topics mein tumne Binomial Theorem ka poora hathiyar-box taiyaar kar liya: Pascal's Triangle aur expansion (Topic 1), General Term Tᵣ₊₁ aur Middle Term (Topic 2), aur specific coefficients, approximations aur divisibility proofs (Topic 3). Ab aakhri padaav: exam ke sabse favorite mixed sawaal — **consecutive terms ka ratio**, **equal coefficients se unknown constant nikaalna**, **Σ 3ʳ ⁿCᵣ = 4ⁿ jaise identities**, aur **tricky radical expansions**! Is topic mein hum ek Decision Map banayenge, 6 mixed problems hal karenge, 3 aakhri galtiyon se bachenge, 12 practice sawaal lagayenge, aur ant mein poore chapter ka saar ek table mein sametenge.

---

## Rachna ka Maths Society "Binomial Sprint"

School Maths Society ke **"Binomial Sprint"** mein Rachna ko 4 synthesis stations diye gaye:
- **Station 1:** (3x²/2 − 1/(3x))⁶ ka term independent of x.
- **Station 2:** Agar (3 + ax)⁹ mein x² aur x³ ke coefficients barabar hon, to **a** kya hoga?
- **Station 3:** (1 + a)ⁿ ke teen lagatar terms ke coefficients ka ratio **1 : 7 : 42** ho, to **n** aur **r** nikalo!
- **Station 4:** Prove karo ki **Σ 3ʳ ⁿCᵣ = 4ⁿ** aur **2³ⁿ − 7n − 1** hamesha **49** se divisible hai!

Rachna ne board par **Decision Map** khola aur chaaron stations ek ke baad ek jeet liye. Chalo, Rachna ke saath sabhi 6 mixed problems hal karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Ratio of consecutive binomial coefficients** | ⁿCᵣ ÷ ⁿCᵣ₋₁ = **(n − r + 1) / r** (factorials turant kat jaate hain!) | ⁿCᵣ / ⁿCᵣ₋₁ = 7 |
| **Binomial coefficient vs Coefficient of xᵐ** | Binomial coeff sirf **ⁿCᵣ** hai; coeff of xᵐ mein a, b ke constants bhi shamil hote hain | (3 + ax)⁹ mein x² ka coeff = ⁹C₂ 3⁷ a² |

---

## Part A: Kaun Sa Formula Kab? (Decision Map)

| Sawaal ka suraagh | Kaun sa tool lagao? | Pehla kadam | Topic |
|---|---|---|---|
| (a + b)ⁿ poora kholna ya (√a + √b)ⁿ ± (√a − √b)ⁿ | Binomial Theorem + cancellation | + par odd-r kat'te hain; − par even-r kat'te hain! | Topic 1 |
| k-th term (start ya end se) ya Middle term | General Term Tᵣ₊₁ | r = k − 1; end se chahiye to (b + a)ⁿ swap; n even → 1 middle, odd → 2 | Topic 2 |
| Coefficient of xᵐ ya term independent of x | Tᵣ₊₁ + power match | x ki power = m (ya 0) → r nikalo (integer 0 ≤ r ≤ n check!) | Topic 3 |
| Consecutive terms ka ratio (Tᵣ : Tᵣ₊₁ : Tᵣ₊₂) | Ratio shortcut | ⁿCᵣ / ⁿCᵣ₋₁ = (n − r + 1)/r lagao → seedha 2 linear equations! | Topic 4 |
| Σ kʳ ⁿCᵣ = (1 + k)ⁿ | Put x = k in (1 + x)ⁿ | Seedha (1 + x)ⁿ mein x = k rakho! | Topic 1 & 4 |
| Divisibility / Remainder proof | Base = (1 + k) trick | Jaise 2³ⁿ = 8ⁿ = (1 + 7)ⁿ → 7² = 49 common! | Topic 3 & 4 |

---

## Part B: 6 Mixed Worked Problems

### Example 1: Term Independent of x in (3x²/2 − 1/(3x))⁶

**(3x²/2 − 1/(3x))⁶** ke expansion mein **x se independent term** nikalo.

**Hal:**
1. General Term:
   Tᵣ₊₁ = ⁶Cᵣ (3x²/2)⁶⁻ʳ (−1/(3x))ʳ
   = (−1)ʳ ⁶Cᵣ · (3⁶⁻ʳ / 2⁶⁻ʳ) · (1 / 3ʳ) · x^(12 − 2r − r)
   = **(−1)ʳ ⁶Cᵣ · 3^(6 − 2r) · 2^(r − 6) · x^(12 − 3r)**.
2. Independent of x ⟹ 12 − 3r = 0 ⟹ **r = 4** (yaani **T₅**!).
3. r = 4 rakho:
   (−1)⁴ ⁶C₄ · 3^(6 − 8) · 2^(4 − 6) = 1 × 15 × (1/9) × (1/4) = 15 / 36 = **5 / 12**.

**Jaanch:** ⁶C₄ = 15, (3/2)² = 9/4, (−1/3)⁴ = 1/81; 15 × (9/4) × (1/81) = 15 / 36 = 5/12 ✅!

---

### Example 2: Equal Coefficients se Unknown 'a' Nikaalna

Agar **(3 + ax)⁹** ke expansion mein **x²** aur **x³** ke coefficients barabar hon, to **a** ka maan nikalo (a ≠ 0).

**Hal:**
- **x² ka coefficient** (r = 2): **⁹C₂ · 3⁷ · a²**.
- **x³ ka coefficient** (r = 3): **⁹C₃ · 3⁶ · a³**.
Dono ko barabar rakho:
⁹C₂ · 3⁷ · a² = ⁹C₃ · 3⁶ · a³
36 · 3⁷ · a² = 84 · 3⁶ · a³
3⁶ a² dono taraf se kaato:
36 × 3 = 84a ⟹ 108 = 84a ⟹ **a = 108 / 84 = 9 / 7**!

**Jaanch:** ⁹C₂(3) = 108, ⁹C₃(9/7) = 84 × (9/7) = 12 × 9 = 108 ✅!

---

### Example 3: Three Consecutive Terms Ratio 1 : 7 : 42

**(1 + a)ⁿ** ke expansion mein teen lagatar terms **(r − 1)-th, r-th aur (r + 1)-th** ke coefficients ka ratio **1 : 7 : 42** hai. **n** aur **r** nikalo!

**Hal:**
(r − 1)-th, r-th, (r + 1)-th terms ke binomial coefficients hain: **ⁿCᵣ₋₂, ⁿCᵣ₋₁, ⁿCᵣ**.
Ratio shortcut **ⁿCₖ / ⁿCₖ₋₁ = (n − k + 1) / k** lagao:
1. **ⁿCᵣ₋₁ / ⁿCᵣ₋₂ = 7 / 1:**
   (n − (r − 1) + 1) / (r − 1) = 7 ⟹ n − r + 2 = 7r − 7 ⟹ **n − 8r = −9**   ...(i)
2. **ⁿCᵣ / ⁿCᵣ₋₁ = 42 / 7 = 6:**
   (n − r + 1) / r = 6 ⟹ n − r + 1 = 6r ⟹ **n − 7r = −1**   ...(ii)
3. Equation (ii) mein se (i) ghatao:
   (n − 7r) − (n − 8r) = −1 − (−9) ⟹ **r = 8**!
   (ii) mein r = 8 rakho: n = 7(8) − 1 = **55**!

*(Check: coefficients ⁵⁵C₆, ⁵⁵C₇, ⁵⁵C₈ hain!)*
**Jaanch:** ⁵⁵C₇ / ⁵⁵C₆ = (55 − 7 + 1)/7 = 49/7 = 7 ✅; ⁵⁵C₈ / ⁵⁵C₇ = (55 − 8 + 1)/8 = 48/8 = 6 = 42/7 ✅!

---

### Example 4: Radical Difference — (√3 + √2)⁶ − (√3 − √2)⁶

Exact maan nikalo: **(√3 + √2)⁶ − (√3 − √2)⁶**.

**Hal:**
Pehle **(a + b)⁶ − (a − b)⁶** likho (minus hone par saare **even-r terms kat jaate hain** aur odd-r terms double ho jaate hain!):
(a + b)⁶ − (a − b)⁶ = 2 [⁶C₁ a⁵ b + ⁶C₃ a³ b³ + ⁶C₅ a b⁵]
= 2ab [6a⁴ + 20a² b² + 6b⁴].
Ab **a = √3** (a² = 3, a⁴ = 9) aur **b = √2** (b² = 2, b⁴ = 4) rakho:
= 2(√6) [6(9) + 20(3)(2) + 6(4)]
= 2√6 [54 + 120 + 24]
= 2√6 (198) = **396√6**!

**Jaanch:** 54 + 120 + 24 = 198, 2 × 198 = 396 ✅!

---

### Example 5: Summation Identity — Prove Σ 3ʳ ⁿCᵣ = 4ⁿ

Prove karo ki har positive integer n ke liye:
**ⁿC₀ + 3 · ⁿC₁ + 3² · ⁿC₂ + ... + 3ⁿ · ⁿCₙ = 4ⁿ**.

**Hal:**
Standard Binomial expansion yaad karo:
**(1 + x)ⁿ = ⁿC₀ + ⁿC₁ x + ⁿC₂ x² + ... + ⁿCₙ xⁿ**.
Bas dono taraf **x = 3** rakh do!
(1 + 3)ⁿ = ⁿC₀ + 3 · ⁿC₁ + 3² · ⁿC₂ + ... + 3ⁿ · ⁿCₙ
⟹ **4ⁿ = Σ 3ʳ ⁿCᵣ** (r = 0 to n)! (2 line mein proved!)

**Jaanch:** n = 3 par 1 + 3(3) + 9(3) + 27(1) = 1 + 9 + 27 + 27 = 64 = 4³ ✅!

---

### Example 6: Divisibility With Power Rewrite — 2³ⁿ − 7n − 1 Divisible by 49

Prove karo ki har positive integer n ke liye **2³ⁿ − 7n − 1**, **49** se divisible hai.

**Hal:**
Pehle 2³ⁿ ko **8ⁿ = (1 + 7)ⁿ** likho!
2³ⁿ = (2³)ⁿ = 8ⁿ = (1 + 7)ⁿ
= 1 + ⁿC₁(7) + ⁿC₂(7²) + ⁿC₃(7³) + ... + ⁿCₙ(7ⁿ)
= **1 + 7n + 49k**   *(jahan k bracket ke andar ka integer hai!)*
Isliye **2³ⁿ − 7n − 1 = 49k**, jo hamesha **49 se divisible** hai!

**Jaanch:** n = 2 par 2⁶ − 14 − 1 = 64 − 15 = 49 ✅; n = 3 par 512 − 21 − 1 = 490 = 49(10) ✅!

---

## Aam galtiyan (Chapter Synthesis)

1. **Binomial coefficient (ⁿCᵣ) aur Coefficient of xᵐ ko ek samajh lena:** Example 2 mein student sirf ⁹C₂ = ⁹C₃ likh kar galti kar deta hai — jabki (3 + ax)⁹ mein x² ka coefficient **⁹C₂ · 3⁷ · a²** hai!
2. **(a + b)ⁿ ± (a − b)ⁿ mein galat terms kaat dena:**
   - *Yaad rakhne ki trick:* Beech mein **+** ho → **even r** (r = 0, 2, 4...) double hote hain! Beech mein **−** ho → **odd r** (r = 1, 3, 5...) double hote hain!
3. **Trinomial (x + y + z)ⁿ par seedha ek ⁿCᵣ formula laga dena:**
   - *Sahi soch:* Pehle do terms ko group karo: **[(x + y) + z]ⁿ**, phir do baar Binomial Theorem lagao!

---

## Quick Recap

- **(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ** (n + 1 terms); Pascal's Triangle; Σ ⁿCᵣ = 2ⁿ; Σ kʳ ⁿCᵣ = (1 + k)ⁿ.
- **General Term:** Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ; **Middle Term:** even n → T_(n/2 + 1), odd n → T_((n+1)/2) aur T_((n+3)/2).
- **Consecutive Ratio:** ⁿCᵣ / ⁿCᵣ₋₁ = (n − r + 1)/r.
- **Applications:** coeff of xᵐ, independent of x, numerical approximations, divisibility via (1 + k)ⁿ.

---

## Practice Questions

1. Find the values of **a** and **n** in the expansion of **(1 + a)ⁿ** if the first three terms are **1, 12x, and 64x²** (i.e., in (1 + bx)ⁿ, first three terms are 1, 12x, 64x² — find b and n!).

2. Find **a** if the coefficients of **x²** and **x³** in the expansion of **(2 + ax)⁸** are equal.

3. Find the coefficient of **x⁵** in the product **(1 + 2x)⁶ (1 − x)⁷**.

4. If **a** and **b** are distinct integers, prove using the Binomial Theorem that **a − b** is a factor of **aⁿ − bⁿ** for every positive integer n. (Hint: write a = (a − b) + b!)

5. Evaluate **(√3 + √2)⁶ + (√3 − √2)⁶**.

6. Find the value of **(a² + √(a² − 1))⁴ + (a² − √(a² − 1))⁴**.

7. Find **n** if the ratio of the **5th term from the beginning** to the **5th term from the end** in the expansion of **(2^(1/4) + 1/(3^(1/4)))ⁿ** is **√6 : 1**.

8. Find the term independent of x in the expansion of **(1 + x + 2x³) (3x²/2 − 1/(3x))⁹**. (Hint: find the coefficients of x⁰, x⁻¹, and x⁻³ in the second bracket!)

9. Prove that **Σ 2ʳ ⁿCᵣ = 3ⁿ** (from r = 0 to n).

10. Prove that **3²ⁿ − 8n − 1** is divisible by **64** for every positive integer n.

11. In the expansion of **(1 + x)ⁿ**, the coefficients of the **5th, 6th, and 7th** terms are in **Arithmetic Progression (AP)** (i.e., 2 · ⁿC₅ = ⁿC₄ + ⁿC₆). Find all possible values of **n**.

12. Expand **(1 + x/2 − 2/x)⁴** (x ≠ 0) using the Binomial Theorem by grouping as [(1 + x/2) − 2/x]⁴ and verify at x = 2.

### Answers

1. T₁ = 1, T₂ = nb x = 12x ⟹ nb = 12; T₃ = [n(n − 1)/2] b² x² = 64x² ⟹ n(n − 1)b² = 128.
   (nb)² = 144 ⟹ n²b² = 144. Divide: (n − 1)/n = 128/144 = 8/9 ⟹ 9n − 9 = 8n ⟹ **n = 9**, aur **b = 12/9 = 4/3**.
   Jaanch: ⁹C₁(4/3) = 12, ⁹C₂(16/9) = 36 × 16/9 = 64 ✅!

2. ⁸C₂ · 2⁶ · a² = ⁸C₃ · 2⁵ · a³ ⟹ 28 × 2 = 56a ⟹ **a = 1**. Jaanch: 28 × 64 = 1792, 56 × 32 = 1792 ✅!

3. (1 + 2x)⁶ = 1 + 12x + 60x² + 160x³ + 240x⁴ + 192x⁵ + 64x⁶.
   (1 − x)⁷ = 1 − 7x + 21x² − 35x³ + 35x⁴ − 21x⁵ + ...
   x⁵ pairs: 1(−21) + 12(35) + 60(−35) + 160(21) + 240(−7) + 192(1)
   = −21 + 420 − 2100 + 3360 − 1680 + 192 = **171**. Jaanch: (420+3360+192) − (21+2100+1680) = 3972 − 3801 = 171 ✅!

4. aⁿ = [(a − b) + b]ⁿ = (a − b)ⁿ + ⁿC₁(a − b)ⁿ⁻¹ b + ... + ⁿCₙ₋₁(a − b) bⁿ⁻¹ + bⁿ.
   bⁿ ko left lao: aⁿ − bⁿ = (a − b) × [integer] → **(a − b) hamesha factor hai!**

5. (a + b)⁶ + (a − b)⁶ = 2[a⁶ + 15a⁴b² + 15a²b⁴ + b⁶].
   a = √3, b = √2 rakho: 2[27 + 15(9)(2) + 15(3)(4) + 8] = 2[27 + 270 + 180 + 8] = 2(485) = **970**.
   Jaanch: 27 + 270 + 180 + 8 = 485, 2 × 485 = 970 ✅!

6. (x + y)⁴ + (x − y)⁴ = 2[x⁴ + 6x²y² + y⁴].
   x = a², y = √(a² − 1) (y² = a² − 1) rakho:
   = 2[a⁸ + 6a⁴(a² − 1) + (a² − 1)²] = 2[a⁸ + 6a⁶ − 6a⁴ + a⁴ − 2a² + 1]
   = **2a⁸ + 12a⁶ − 10a⁴ − 4a² + 2**. Jaanch: a = 1 par LHS = 1 + 1 = 2, RHS = 2+12−10−4+2 = 2 ✅!

7. T₅ (from start) = ⁿC₄ · 2^((n−4)/4) · 3^(−4/4).
   T₅ (from end) = ⁿC₄ · 3^(−(n−4)/4) · 2^(4/4).
   Ratio = 2^((n−8)/4) · 3^((n−8)/4) = **6^((n−8)/4) = 6^(1/2)**.
   (n − 8)/4 = 1/2 ⟹ n − 8 = 2 ⟹ **n = 10**. Jaanch: (10 − 8)/4 = 1/2 ✅!

8. (3x²/2 − 1/(3x))⁹ ka General Term: Tᵣ₊₁ = (−1)ʳ ⁹Cᵣ · 3^(9 − 2r) · 2^(r − 9) · x^(18 − 3r).
   - x⁰ (for 1): 18 − 3r = 0 ⟹ **r = 6**: coeff = ⁹C₆ · 3⁻³ · 2⁻³ = 84 / (27 × 8) = **7/18**.
   - x⁻¹ (for x): 18 − 3r = −1 ⟹ r = 19/3 (not integer → **0**!).
   - x⁻³ (for 2x³): 18 − 3r = −3 ⟹ **r = 7**: coeff = −⁹C₇ · 3⁻⁵ · 2⁻² = −36 / (243 × 4) = −1/27; multiplied by 2 → **−2/27**.
   Total constant term = 7/18 − 2/27 = (21 − 4)/54 = **17 / 54**. Jaanch: 21/54 − 4/54 = 17/54 ✅!

9. (1 + x)ⁿ mein x = 2 rakho: **(1 + 2)ⁿ = 3ⁿ = Σ 2ʳ ⁿCᵣ**.

10. 3²ⁿ = 9ⁿ = (1 + 8)ⁿ = 1 + 8n + 64k ⟹ **3²ⁿ − 8n − 1 = 64k** (divisible by 64!). Jaanch: n = 2 par 81 − 16 − 1 = 64 ✅.

11. 2 · ⁿC₅ = ⁿC₄ + ⁿC₆ ko ⁿC₅ se bhaag do:
    2 = ⁿC₄/ⁿC₅ + ⁿC₆/ⁿC₅ = 5/(n − 4) + (n − 5)/6.
    6(n − 4) se guna: 12(n − 4) = 30 + (n − 5)(n − 4) ⟹ 12n − 48 = 30 + n² − 9n + 20 ⟹ n² − 21n + 98 = 0 ⟹ (n − 7)(n − 14) = 0.
    **n = 7 ya n = 14**! Jaanch: n = 7 par ⁷C₄=35, ⁷C₅=21, ⁷C₆=7 (35, 21, 7 AP mein!) ✅; n = 14 par ¹⁴C₄=1001, ¹⁴C₅=2002, ¹⁴C₆=3003 (AP!) ✅!

12. [(1 + x/2) − 2/x]⁴ = (1 + x/2)⁴ − 4(1 + x/2)³(2/x) + 6(1 + x/2)²(4/x²) − 4(1 + x/2)(8/x³) + 16/x⁴:
    - (1 + x/2)⁴ = 1 + 2x + 3x²/2 + x³/2 + x⁴/16
    - −(8/x)(1 + 3x/2 + 3x²/4 + x³/8) = −8/x − 12 − 6x − x²
    - +(24/x²)(1 + x + x²/4) = 24/x² + 24/x + 6
    - −(32/x³)(1 + x/2) = −32/x³ − 16/x²
    - +16/x⁴
    Jodo like powers:
    **x⁴/16 + x³/2 + x²/2 − 4x − 5 + 16/x + 8/x² − 32/x³ + 16/x⁴**.
    Jaanch: x = 2 par LHS = (1 + 1 − 1)⁴ = 1; RHS = 1 + 4 + 2 − 8 − 5 + 8 + 2 − 4 + 1 = 1 ✅!

---

Shabaash! Tumne **Binomial Theorem** ke har concept — Pascal's Triangle, General/Middle terms, coefficients, approximations aur divisibility proofs — ko poori tarah jeet liya hai!

---

## Chapter Ka Saar: Binomial Theorem

| Topic | Mukhya vishay | Khaas formula / yaad rakhne ki baat |
|---|---|---|
| **Topic 1** | Binomial Theorem & Pascal's Triangle | (a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ (n + 1 terms); Σ ⁿCᵣ = 2ⁿ; alternating sum = 0; (a − b)ⁿ mein +, −, +, −. |
| **Topic 2** | General Term & Middle Term | Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ (k-th term → r = k − 1); n even → 1 middle T_(n/2 + 1); n odd → 2 middle T_((n+1)/2), T_((n+3)/2). |
| **Topic 3** | Specific Terms, Approximations & Divisibility | x ki power = m (ya 0) → r integer check; (1 + k)ⁿ se k² common (divisibility); 98⁵ = (100 − 2)⁵. |
| **Topic 4** | Mixed Problems & Ratios | ⁿCᵣ / ⁿCᵣ₋₁ = (n − r + 1)/r; Σ kʳ ⁿCᵣ = (1 + k)ⁿ; + cancels odd r, − cancels even r. |

**Aage kya?** Agle chapter **Sequences and Series** mein hum numbers ke patterns ko gehrai se padhenge — **Arithmetic aur Geometric Progressions (AP, GP)**, **AM ≥ GM inequality**, aur infinite GP ke sum ka jaadoo!
