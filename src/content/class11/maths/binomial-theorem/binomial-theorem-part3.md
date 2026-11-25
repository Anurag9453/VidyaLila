# Chapter: Binomial Theorem (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [binomial-theorem-part2.md](binomial-theorem-part2.md) se aage chalti hai** (wahan Topic 2 mein General Term Tᵣ₊₁ aur Middle Term the). Chapter ki shuruaat: [binomial-theorem.md](binomial-theorem.md).
> **Topics covered in this file:**
> 3. Applications: Specific Terms (xᵐ Aur Independent of x), Approximations Aur Divisibility Proofs

---

# Topic 3: Applications: Specific Terms (xᵐ Aur Independent of x), Approximations Aur Divisibility Proofs

Topic 2 mein tumne General Term **Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ** seekha. Ab dekhte hain ye chhota sa formula **teen alag-alag duniyaon** mein kaise jaadoo karta hai: (1) kisi bade expansion mein **xᵐ ka coefficient** ya **x se mukt (independent) term** dhoondhna, (2) bina calculator **(98)⁵** ya **(1.01)¹⁰⁰⁰⁰⁰⁰** jaisi badi powers ka exact ya approximate maan nikaalna, aur (3) **9ⁿ⁺¹ − 8n − 9** hamesha **64** se bhaag hota hai jaise divisibility proofs 3 line mein saabit karna!

---

## Uday ka compound-interest estimate aur 64 ka raaz

Bank passbook dekhte hue Uday ke Papa ne kaha, "Agar 1% interest har mahine lage, to 5 mahine mein ₹1 badhkar **(1.01)⁵** ho jaata hai — lagbhag kitna hoga?"
Uday ne bina calculator Binomial Theorem lagaya:
(1 + 0.01)⁵ = 1 + 5(0.01) + 10(0.0001) + ... ≈ **1.05101**! (Pehle 3 terms se hi 5 decimal tak exact jawab mil gaya!)

Phir Maths class mein teacher ma'am ne poocha: *"Kya **9ⁿ⁺¹ − 8n − 9** har natural number n ke liye 64 se poora bhaag hoga?"*
Uday ne turant 9 ko **(1 + 8)** likha! Jaise hi **(1 + 8)ⁿ⁺¹** khola, pehle do terms 1 + 8(n + 1) = **9 + 8n** bane — jo −8n − 9 se kat gaye, aur bache sabhi terms mein **8² = 64** common tha!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Coefficient of xᵐ** | xᵐ ke saath guna hone wala poora constant number (bina xᵐ ke!) | (x + 3)⁸ mein x⁵ ka coeff = 1512 |
| **Term independent of x** | Aisa constant term jisme x ki power **0** ho (x⁰ = 1) | (2x² − 1/x)⁹ mein T₇ = 672 |
| **Divisibility trick** | Base ko **(1 + k)** ya **(k − 1)** mein tod kar Binomial expansion se k² common nikaalna | 9ⁿ⁺¹ = (1 + 8)ⁿ⁺¹ |

---

## Part A: Coefficient of xᵐ Aur Term Independent of x

**3-Step Recipe:**
1. General Term **Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ** likho aur **constants** ko ek taraf aur **x ki kul power** ko ek taraf ikattha karo!
2. x ki kul power ko **m** (ya **0**, jab term independent of x chahiye!) ke barabar rakh kar **r** nikalo.
3. **Check karo:** Kya r ek integer hai jo **0 ≤ r ≤ n** mein aata hai?
   - Agar **HAAN:** r ko constant hisse mein rakho → exact coefficient!
   - Agar **NAHI** (fraction ya negative ya > n): aisa koi term exist nahi karta → coefficient = **0**!

### Example 1: Coefficient of x⁵ in (x + 3)⁸ aur a⁵ b⁷ in (a − 2b)¹²

(i) **(x + 3)⁸** mein **x⁵** ka coefficient nikalo.
(ii) **(a − 2b)¹²** mein **a⁵ b⁷** ka coefficient nikalo.

**Hal:**
- **(i)** Tᵣ₊₁ = ⁸Cᵣ x⁸⁻ʳ 3ʳ.
  x⁵ chahiye ⟹ 8 − r = 5 ⟹ **r = 3**.
  Coefficient = ⁸C₃ × 3³ = 56 × 27 = **1512**.
- **(ii)** Tᵣ₊₁ = ¹²Cᵣ a¹²⁻ʳ (−2b)ʳ = ¹²Cᵣ (−2)ʳ a¹²⁻ʳ bʳ.
  a⁵ b⁷ chahiye ⟹ **r = 7** (check: 12 − 7 = 5!).
  Coefficient = ¹²C₇ × (−2)⁷ = ¹²C₅ × (−128) = 792 × (−128) = **−101,376**.

**Jaanch:** (i) 56 × 27 = 1512 ✅; (ii) ¹²C₅ = (12×11×10×9×8)/120 = 792, 792 × (−128) = −101376 ✅.

### Example 2: Term Independent of x in (2x² − 1/x)⁹

**(2x² − 1/x)⁹** mein **x se independent term** (constant term) nikalo.

**Hal:**
1. General term:
   Tᵣ₊₁ = ⁹Cᵣ (2x²)⁹⁻ʳ (−1/x)ʳ
   = ⁹Cᵣ · 2⁹⁻ʳ · (−1)ʳ · x^(18 − 2r − r)
   = **⁹Cᵣ · 2⁹⁻ʳ · (−1)ʳ · x^(18 − 3r)**.
2. Independent of x ⟹ power of x = 0:
   18 − 3r = 0 ⟹ **r = 6** (integer, 0 ≤ 6 ≤ 9 → exist karta hai!).
3. r = 6 rakho (**T₇**):
   ⁹C₆ · 2³ · (−1)⁶ = ⁹C₃ × 8 × 1 = 84 × 8 = **672**.

**Jaanch:** r = 6 par (x²)³ (1/x)⁶ = x⁶/x⁶ = 1 ✅; 84 × 8 = 672 ✅.

---

## Part B: Numerical Evaluations Aur Comparisons

### Example 3: (98)⁵ ka Exact Maan

Binomial Theorem se **(98)⁵** ka exact maan nikalo.

**Hal:**
98 = 100 − 2 likho (Row 5: 1, 5, 10, 10, 5, 1):
(100 − 2)⁵ = 100⁵ − 5(100⁴)(2) + 10(100³)(4) − 10(100²)(8) + 5(100)(16) − 32
= 10,000,000,000 − 1,000,000,000 + 40,000,000 − 800,000 + 8,000 − 32
= 9,000,000,000 + 39,200,000 + 7,968
= **9,039,207,968**.

**Jaanch:** Last two digits: 8000 − 32 = 7968; 98⁵ = 9039207968 ✅!

### Example 4: Kaun Bada Hai — (1.01)¹⁰⁰⁰⁰⁰⁰ ya 10,000?

Bina calculator batao: **(1.01)¹⁰⁰⁰⁰⁰⁰** aur **10,000** mein kaun bada hai?

**Hal:**
1.01 = 1 + 0.01 likho aur sirf pehle 2 terms kholo (baaki sabhi terms positive hain!):
(1 + 0.01)¹⁰⁰⁰⁰⁰⁰ = 1 + (1,000,000)(0.01) + (other positive terms)
= 1 + 10,000 + (other positive terms)
= **10,001 + (positive terms) > 10,000**!
Isliye **(1.01)¹⁰⁰⁰⁰⁰⁰ > 10,000**!

**Jaanch:** 1,000,000 × 0.01 = 10,000, aur + 1 + positive terms > 10,000 ✅!

---

## Part C: Divisibility Aur Remainder Proofs

### Example 5: Prove Karo — 9ⁿ⁺¹ − 8n − 9 Hamesha 64 Se Divisible Hai

Har positive integer n ke liye prove karo ki **9ⁿ⁺¹ − 8n − 9**, **64** se poora bhaag hota hai.

**Hal:**
9 = 1 + 8 likho aur **(1 + 8)ⁿ⁺¹** ko Binomial Theorem se kholo:
9ⁿ⁺¹ = (1 + 8)ⁿ⁺¹
= ⁿ⁺¹C₀ + ⁿ⁺¹C₁ (8) + ⁿ⁺¹C₂ (8²) + ⁿ⁺¹C₃ (8³) + ... + ⁿ⁺¹Cₙ₊₁ (8ⁿ⁺¹)
= 1 + 8(n + 1) + 64 [ⁿ⁺¹C₂ + ⁿ⁺¹C₃ (8) + ... + ⁿ⁺¹Cₙ₊₁ (8ⁿ⁻¹)]
= **9 + 8n + 64k**   *(jahan k bracket ke andar ka ek integer hai!)*

Ab 8n + 9 ko left side le aao:
**9ⁿ⁺¹ − 8n − 9 = 64k**!
Isliye ye hamesha **64 se divisible** hai!

**Jaanch:** n = 1 par 9² − 8 − 9 = 81 − 17 = 64 = 64(1) ✅; n = 2 par 729 − 16 − 9 = 704 = 64(11) ✅!

### Example 6: Remainder Proof — 6ⁿ − 5n Divided by 25

Prove karo ki har positive integer n ke liye **6ⁿ − 5n** ko **25** se bhaag dene par hamesha **remainder 1** bachta hai.

**Hal:**
6 = 1 + 5 rakho:
6ⁿ = (1 + 5)ⁿ = 1 + ⁿC₁(5) + ⁿC₂(5²) + ⁿC₃(5³) + ... + ⁿCₙ(5ⁿ)
= **1 + 5n + 25k**   *(jahan k ek integer hai!)*
Isliye:
**6ⁿ − 5n = 25k + 1**!
Saaf dikhta hai ki 25 se bhaag dene par hamesha **remainder 1** bachega!

**Jaanch:** n = 2 par 36 − 10 = 26 = 25(1) + 1 ✅; n = 3 par 216 − 15 = 201 = 25(8) + 1 ✅!

---

## Aam galtiyan

1. **r fraction aane par bhi zabardasti ⁿCᵣ nikaalna:** Agar 18 − 3r = 5 se r = 13/3 aaye, to iska matlab us expansion mein **x⁵ ka koi term hi nahi hai** (coefficient = **0**)!
2. **Coefficient of xᵐ mein a aur b ke constant factors chhod dena:** (2x² − 1/x)⁹ mein 2³ = 8 ko bhool kar sirf ⁹C₆ = 84 likh dena galat hai!
3. **(100 − 2)⁵ mein minus signs bhool jaana:** Alternating signs +, −, +, −, +, − zaroor check karo.

---

## Quick Recap

- **Coefficient of xᵐ / Independent of x:** Tᵣ₊₁ likho → x ki power = m (ya 0) → r nikalo (check integer 0 ≤ r ≤ n) → constant part calculate karo.
- **Evaluations:** 98 = 100 − 2, 1.01 = 1 + 0.01; comparison ke liye sirf pehle 2 terms kaafi!
- **Divisibility:** Base ko (1 + k) banao, pehle 2 terms ghatao, baaki sabse k² common niklega!

---

## Practice Questions

1. Find the coefficient of **x⁵** in the expansion of **(x + 2)⁹**.

2. Find the coefficient of **x⁶ y³** in the expansion of **(x + 2y)⁹**.

3. Find the term **independent of x** in the expansion of **(x² − 1/x)⁹** (x ≠ 0).

4. Find the term **independent of x** in the expansion of **(2x + 1/(3x²))⁹** (x ≠ 0).

5. Does the expansion of **(x² − 2/x)⁸** contain a term independent of x? Justify!

6. Using the Binomial Theorem, compute **(102)⁵** exactly.

7. Using the Binomial Theorem, find the approximate value of **(0.99)⁵** correct to 4 decimal places (use the first 4 terms).

8. Which number is larger: **(1.1)¹⁰⁰⁰⁰** or **1000**? Prove using the Binomial Theorem.

9. Prove using the Binomial Theorem that **7ⁿ − 6n − 1** is divisible by **36** for every positive integer n.

10. Prove that **4ⁿ − 3n − 1** is divisible by **9** for every positive integer n.

11. Find the coefficient of **x⁴** in the product **(1 + 2x)⁴ (2 − x)⁵**! (Hint: expand each only up to x⁴ or pair terms whose powers add to 4!)

12. Find the remainder when **5⁹⁹** is divided by **13**? (Challenging bonus: write 5² = 25 = 26 − 1, so 5⁹⁹ = 5 · (26 − 1)⁴⁹!)

### Answers

1. Tᵣ₊₁ = ⁹Cᵣ x⁹⁻ʳ 2ʳ. 9 − r = 5 ⟹ r = 4.
   Coeff = ⁹C₄ × 2⁴ = 126 × 16 = **2016**. Jaanch: 126 × 16 = 2016 ✅.

2. r = 3: ⁹C₃ × 2³ = 84 × 8 = **672**. Jaanch: 84 × 8 = 672 ✅.

3. Tᵣ₊₁ = ⁹Cᵣ x¹⁸⁻²ʳ (−1)ʳ x⁻ʳ = (−1)ʳ ⁹Cᵣ x¹⁸⁻³ʳ.
   18 − 3r = 0 ⟹ r = 6. Term = (−1)⁶ ⁹C₆ = **84**. Jaanch: ⁹C₃ = 84 ✅.

4. Tᵣ₊₁ = ⁹Cᵣ 2⁹⁻ʳ (1/3)ʳ x⁹⁻³ʳ.
   9 − 3r = 0 ⟹ r = 3. Term = ⁹C₃ × 2⁶ × (1/3)³ = 84 × 64 / 27 = 28 × 64 / 9 = **1792 / 9**.
   Jaanch: 84/27 = 28/9, 28 × 64 = 1792 ✅.

5. Tᵣ₊₁ = ⁸Cᵣ (−2)ʳ x¹⁶⁻³ʳ.
   16 − 3r = 0 ⟹ r = 16/3, jo **integer nahi** hai!
   Isliye **Nahi**, is expansion mein x se independent koi term nahi hai (coefficient = 0).

6. (100 + 2)⁵ = 10¹⁰ + 5(10⁸)(2) + 10(10⁶)(4) + 10(10⁴)(8) + 5(10²)(16) + 32
   = 10,000,000,000 + 1,000,000,000 + 40,000,000 + 800,000 + 8,000 + 32 = **11,040,808,032**.
   Jaanch: 102⁵ = 11040808032 ✅.

7. (1 − 0.01)⁵ = 1 − 5(0.01) + 10(0.0001) − 10(0.000001) + ...
   = 1 − 0.05 + 0.001 − 0.00001 = **0.95099 ≈ 0.9510**. Jaanch: 0.99⁵ = 0.9509900499 ✅.

8. (1 + 0.1)¹⁰⁰⁰⁰ = 1 + 10000(0.1) + (positive terms) = 1 + 1000 + (positive terms) = 1001 + ... > 1000.
   Isliye **(1.1)¹⁰⁰⁰⁰ > 1000**!

9. 7ⁿ = (1 + 6)ⁿ = 1 + 6n + 36(ⁿC₂ + 6 · ⁿC₃ + ...) = 1 + 6n + 36k ⟹ **7ⁿ − 6n − 1 = 36k** (divisible by 36!).
   Jaanch: n = 2 par 49 − 12 − 1 = 36 ✅.

10. 4ⁿ = (1 + 3)ⁿ = 1 + 3n + 9(ⁿC₂ + ...) = 1 + 3n + 9k ⟹ **4ⁿ − 3n − 1 = 9k** (divisible by 9!).
    Jaanch: n = 2 par 16 − 6 − 1 = 9 ✅.

11. (1 + 2x)⁴ = 1 + 8x + 24x² + 32x³ + 16x⁴.
    (2 − x)⁵ = 32 − 80x + 80x² − 40x³ + 10x⁴ − x⁵.
    x⁴ ke liye pairs (x⁰·x⁴, x¹·x³, x²·x², x³·x¹, x⁴·x⁰):
    1(10) + 8(−40) + 24(80) + 32(−80) + 16(32) = 10 − 320 + 1920 − 2560 + 512 = **−438**.
    Jaanch: 10 + 1920 + 512 = 2442; 320 + 2560 = 2880; 2442 − 2880 = −438 ✅!

12. 5⁹⁹ = 5 · (5²)⁴⁹ = 5 · (26 − 1)⁴⁹ = 5 · [26k + (−1)⁴⁹] = 130k − 5 = 13(10k − 1) + 8.
    Isliye remainder = **8**! Jaanch: 13 − 5 = 8 ✅.

---

Ab tum specific terms, numerical approximations aur divisibility proofs par poori pakad bana chuke ho.

**Agle aur aakhri topic mein:** poore chapter ke saare tools ko ek saath jodne wale **Decision Map, 6 mixed challenge problems (consecutive-term ratios, equal coefficients, Σ 3ʳ ⁿCᵣ = 4ⁿ), 12 practice sawaal** aur **Chapter Ka Saar**!
