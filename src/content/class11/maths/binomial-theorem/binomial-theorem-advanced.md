# Chapter: Binomial Theorem (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [binomial-theorem-part4.md](binomial-theorem-part4.md) (Topic 4: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Numerically Greatest Term (NGT), Multinomial Theorem, Binomial Coefficient Series (Σ r·ⁿCᵣ aur Σ (ⁿCᵣ)² = ²ⁿCₙ), aur Smart Remainder Tricks master karenge!
> **Advanced topics covered in this file:**
> 1. Numerically Greatest Term (NGT), Multinomial Theorem (Trinomial Expansions), Weighted & Squared Binomial Series (Vandermonde Identity), Aur Modular Remainder Tricks

---

# Gehrai Mein: Advanced Binomial Identities & Multinomial Theorem

Core chapter mein tumne general term Tᵣ₊₁, middle term, aur basic divisibility proofs seekhe. Lekin jab x = 2/3 par **(1 + x)¹⁰** mein sabse bada term (Numerically Greatest Term) poochha jaye — jo middle term **nahi** hota! — ya **(1 + x + x²)⁸** mein x⁴ ka coefficient nikaalna ho, ya **C₀² + C₁² + ... + Cₙ²** ka exact sum chahiye, to yeh chaar advanced weapons seedha rasta kholte hain!

---

## Purnima ka actuarial risk-peak model

Purnima ek insurance firm mein actuarial analyst hai. Ek risk model mein (3 + 2x)⁹ ke terms alag-alag claim scenarios darshate the, jahan x = 1/2 tha.
Intern ne socha: "n = 9 ka middle term T₅ aur T₆ sabse bada hoga!"
Purnima ne roka: "Middle term sirf tab sabse bada hota hai jab a = b ho! Yahan a = 3 aur b = 2(1/2) = 1 alag-alag hain! Ratio test **|Tᵣ₊₁ / Tᵣ| ≥ 1** lagao: m = (9 + 1)(1/3) / (1 + 1/3) = (10/3)/(4/3) = 2.5 => sabse bada term **T₃** hai (T₅ nahi!)!"

---

## Part A: Numerically Greatest Term (NGT) — Full Derivation ("Kyun"!)

Expansion **(a + b)ⁿ = aⁿ (1 + x)ⁿ** (jahan **x = b / a**) mein hum woh index r dhoondhte hain jahan tak terms badhte hain:
|Tᵣ₊₁ / Tᵣ| = [ (n - r + 1) / r ] · |x| ≥ 1
(n - r + 1)|x| ≥ r
(n + 1)|x| ≥ r(|x| + 1)
=> **r ≤ (n + 1)|x| / (|x| + 1)**

Let **m = (n + 1)|x| / (|x| + 1)**:
1. **Agar m integer NAHI hai:** Unique Numerically Greatest Term = **T_{[m] + 1}** (jahan [m] Greatest Integer hai).
2. **Agar m exact INTEGER hai:** Do barabar Numerically Greatest Terms milenge: **T_m** aur **T_{m + 1}**!

---

## Part B: Multinomial Theorem (Trinomials & Beyond)

Expansion **(x₁ + x₂ + ... + xₖ)ⁿ** ka general term hota hai:
**[ n! / (r₁! r₂! ... rₖ!) ] · x₁^(r₁) · x₂^(r₂) · ... · xₖ^(rₖ)**
jahan sabhi rᵢ ≥ 0 integers hain aur **r₁ + r₂ + ... + rₖ = n**!

- **Total number of distinct terms** (Stars & Bars se!): **ⁿ⁺ᵏ⁻¹Cₖ₋₁**!
  *(Jaise trinomial (a + b + c)ⁿ mein k = 3 => **(n + 1)(n + 2) / 2** terms!)*

---

## Part C: Binomial Coefficient Series Identities ("Kyun"!)

Let Cᵣ = ⁿCᵣ:
1. **Weighted Sum Identity:** **C₁ + 2 C₂ + 3 C₃ + ... + n Cₙ = n · 2ⁿ⁻¹**
   *(Proof: Identity **r · ⁿCᵣ = n · ⁿ⁻¹Cᵣ₋₁** lagao! Sum = n (ⁿ⁻¹C₀ + ⁿ⁻¹C₁ + ... + ⁿ⁻¹Cₙ₋₁) = **n · 2ⁿ⁻¹**!)*
2. **Sum of Squares (Vandermonde's Special Case):**
   **C₀² + C₁² + C₂² + ... + Cₙ² = ²ⁿCₙ**
   *(Proof: (1 + x)ⁿ = C₀ + C₁x + ... + Cₙxⁿ aur (x + 1)ⁿ = C₀xⁿ + C₁xⁿ⁻¹ + ... + Cₙ.*
   *Dono ko multiply karo: LHS = (1 + x)²ⁿ mein xⁿ ka coefficient **²ⁿCₙ** hai!*
   *RHS mein xⁿ ka coefficient: C₀·C₀ + C₁·C₁ + ... + Cₙ·Cₙ = **C₀² + C₁² + ... + Cₙ²**! Dono barabar hain!)*

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Finding The Numerically Greatest Term
**Sawaal:** Expansion **(3 - 5x)¹¹** mein x = 1/5 par Numerically Greatest Term (NGT) aur uski value gyat karo.

**Solution:**
Write (3 - 5x)¹¹ = 3¹¹ (1 - 5x/3)¹¹.
Here n = 11, aur |x_eff| = |-5(1/5)/3| = **1/3**.

Compute m:
m = (n + 1)|x_eff| / (|x_eff| + 1)
= (12 × 1/3) / (1/3 + 1) = 4 / (4/3) = **3** (exact integer!).

Kyunki m = 3 ek exact integer hai, **DO barabar NGTs** milenge: **T₃** aur **T₄**!
- |T₃| = ¹¹C₂ · 3⁹ · (1)² = 55 · 3⁹
- |T₄| = ¹¹C₃ · 3⁸ · (1)³ = 165 · 3⁸ = 55 · 3 · 3⁸ = **55 · 3⁹**!
(Exact sign ke saath: T₃ = +55 · 3⁹ aur T₄ = -55 · 3⁹!)

Jaanch:
- Jaanch: |T₃| = 55 · 3⁹ = |T₄|, aur |T₂| = 11 · 3¹⁰ = 33 · 3⁹ < 55 · 3⁹ ✅

---

### Problem 2: Coefficient Of x⁴ In A Trinomial Using Multinomial Theorem
**Sawaal:** Expansion **(1 + 2x - x²)⁵** mein x⁴ ka coefficient gyat karo.

**Solution:**
General term: [5! / (r₁! r₂! r₃!)] · 1^(r₁) · (2x)^(r₂) · (-x²)^(r₃)
= [5! / (r₁! r₂! r₃!)] · 2^(r₂) · (-1)^(r₃) · x^(r₂ + 2r₃),
jahan r₁ + r₂ + r₃ = 5 aur hume **r₂ + 2r₃ = 4** chahiye!

All non-negative integer solutions for (r₁, r₂, r₃):
1. **r₃ = 0 => r₂ = 4 => r₁ = 1:** [5! / (1! 4! 0!)] · 2⁴ · (-1)⁰ = 5 × 16 × 1 = **+80**
2. **r₃ = 1 => r₂ = 2 => r₁ = 2:** [5! / (2! 2! 1!)] · 2² · (-1)¹ = 30 × 4 × (-1) = **-120**
3. **r₃ = 2 => r₂ = 0 => r₁ = 3:** [5! / (3! 0! 2!)] · 2⁰ · (-1)² = 10 × 1 × 1 = **+10**

Total coefficient of x⁴ = 80 - 120 + 10 = **-30**!

Jaanch:
- Jaanch: Grouping check [(1 + 2x) - x²]⁵: coeff of x⁴ = ⁵C₀(⁵C₄·16) - ⁵C₁(⁴C₂·4) + ⁵C₂(1) = 80 - 120 + 10 = -30 ✅

---

### Problem 3: Evaluating A Weighted Binomial Sum
**Sawaal:** Evaluate **Σ_{r=1}^{n} r² · ⁿCᵣ**.

**Solution:**
Write r² = r(r - 1) + r:
Σ r² · ⁿCᵣ = Σ r(r - 1) ⁿCᵣ + Σ r ⁿCᵣ.

1. Second sum = **n · 2ⁿ⁻¹** (from Part C!).
2. First sum: use r(r - 1) ⁿCᵣ = n(n - 1) · ⁿ⁻²Cᵣ₋₂ (for r ≥ 2):
   = n(n - 1) Σ_{r=2}^{n} ⁿ⁻²Cᵣ₋₂ = **n(n - 1) · 2ⁿ⁻²**!

Total sum = n(n - 1) 2ⁿ⁻² + n · 2ⁿ⁻¹
= n · 2ⁿ⁻² [ (n - 1) + 2 ]
= **n(n + 1) · 2ⁿ⁻²**!

Jaanch:
- Jaanch: Test n = 3: 1²(3) + 2²(3) + 3²(1) = 3 + 12 + 9 = 24; Formula: 3(4) · 2¹ = 24 ✅

---

### Problem 4: Sum Of Products Of Shifted Binomial Coefficients
**Sawaal:** Prove karo ki **C₀ C₁ + C₁ C₂ + C₂ C₃ + ... + Cₙ₋₁ Cₙ = ²ⁿCₙ₋₁**.

**Solution:**
(1 + x)ⁿ = C₀ + C₁x + C₂x² + ... + Cₙxⁿ
(x + 1)ⁿ = C₀xⁿ + C₁xⁿ⁻¹ + C₂xⁿ⁻² + ... + Cₙ

Multiply both: LHS = (1 + x)²ⁿ.
LHS mein **xⁿ⁻¹** ka coefficient = **²ⁿCₙ₋₁**!
RHS mein xⁿ⁻¹ kaise banta hai?
C₀(1) × C₁(xⁿ⁻¹) + C₁(x) × C₂(xⁿ⁻²) + ... + Cₙ₋₁(xⁿ⁻¹) × Cₙ(1) = **C₀C₁ + C₁C₂ + ... + Cₙ₋₁Cₙ**!

Equating coefficients of xⁿ⁻¹: **C₀C₁ + C₁C₂ + ... + Cₙ₋₁Cₙ = ²ⁿCₙ₋₁**!

Jaanch:
- Jaanch: Test n = 3 (C = 1, 3, 3, 1): 1(3) + 3(3) + 3(1) = 15; ⁶C₂ = (6 × 5)/2 = 15 ✅

---

### Problem 5: Finding Remainder Of 7¹⁰³ Divided By 25
**Sawaal:** 7¹⁰³ ko 25 se divide karne par exact remainder gyat karo.

**Solution:**
25 ke behad kareeb 7 ki power dhoondho: **7² = 49 = 50 - 1** (jahan 50 = 2 × 25, 25 ka multiple hai!).
7¹⁰³ = 7 · (7²)⁵¹ = 7 · (50 - 1)⁵¹.

Binomial expansion se (50 - 1)⁵¹ = 50K + (-1)⁵¹ = 50K - 1 (jahan 50K 25 se divisible hai!):
7¹⁰³ = 7(50K - 1) = 350K - 7 = 25(14K - 1) + (25 - 7) = 25(14K - 1) + **18**!

Remainder = **18**!

Jaanch:
- Jaanch: Negative remainder -7 mod 25 => -7 + 25 = 18 (strictly between 0 and 24!) ✅

---

### Problem 6: Finding The Last Two Digits Of 17²⁵⁶
**Sawaal:** 17²⁵⁶ ke aakhri do digits (remainder mod 100) gyat karo.

**Solution:**
17² = 289 ≡ -11 (mod 100); 17⁴ = (-11)² = 121 ≡ 21 (mod 100); ya aur tez:
(17⁴) = 21 + 100k => (21)⁵ = ... ya **17⁴ = 1 + 20 + 100k** => **(1 + 20)⁶⁴**!
17²⁵⁶ = (17⁴)⁶⁴ ≡ (21)⁶⁴ = (1 + 20)⁶⁴ (mod 100)!

Binomial expansion of (1 + 20)⁶⁴:
= 1 + ⁶⁴C₁(20) + ⁶⁴C₂(400) + ...  *(3rd term se sabhi terms 400 ke multiple hain => 100 se divisible!)*
≡ 1 + 64(20) = 1 + 1280 = 1281 ≡ **81** (mod 100)!

Aakhri do digits hain **81**!

Jaanch:
- Jaanch: 17⁴ = 83521 ≡ 21 (mod 100); (1 + 20)⁶⁴ ≡ 1 + 1280 ≡ 81 (mod 100) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: NGT mein exact integer m aane par sirf ek term likh dena
- **Galat soch:** "m = 3 aaya to sirf T₃ greatest hai."
- **Sahi samajh:** Jab m exact integer aata hai, to |Tₘ₊₁ / Tₘ| = 1 hota hai, isliye **Tₘ aur Tₘ₊₁ dono barabar aur dono NGT** hote hain!

### Galti 2: Remainder negative chhod dena
- **Galat soch:** "7¹⁰³ = 25m - 7 => remainder = -7."
- **Sahi samajh:** Division remainder hamesha **0 ≤ r < divisor** hona chahiye! -7 mein divisor 25 jodo => **-7 + 25 = 18**!

### Galti 3: (a + b + c)ⁿ mein total terms (n + 1) likh dena
- **Galat soch:** "Power n hai to n + 1 terms honge."
- **Sahi samajh:** n + 1 sirf **binomial (2 terms)** ke liye hai! Trinomial (k = 3) mein **ⁿ⁺²C₂ = (n + 1)(n + 2)/2** distinct terms hote hain!

---

## Quick Recap

- **NGT of (a + b)ⁿ:** m = (n + 1)|b/a| / (1 + |b/a|). Non-integer => T_{[m]+1}; Integer => Tₘ and Tₘ₊₁.
- **Multinomial:** [n! / (r₁!...rₖ!)] x₁^(r₁)...xₖ^(rₖ); total terms = ⁿ⁺ᵏ⁻¹Cₖ₋₁.
- **Key Binomial Series:** Σ r ⁿCᵣ = n · 2ⁿ⁻¹; Σ r² ⁿCᵣ = n(n + 1) 2ⁿ⁻²; Σ (ⁿCᵣ)² = ²ⁿCₙ.
- **Remainder Trick:** Convert base power to (multiple of d ± 1) and expand!

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the numerically greatest term in the expansion of (2 + 3x)⁹ when x = 3/2.

**Solution:**
|x_eff| = |3(3/2) / 2| = 9/4. n = 9.
m = (10 × 9/4) / (9/4 + 1) = (90/4) / (13/4) = 90/13 ≈ 6.92 (non-integer).
[m] = 6 => NGT is **T₇** = ⁹C₆ · 2³ · (9/2)⁶ = 84 · 8 · (3¹² / 64) = **(21 / 2) · 3¹² = 7 · 3¹³ / 2**.

Jaanch:
- Jaanch: [90/13] = 6 => T_{6+1} = T₇ ✅

---

### Question 2
Find the total number of distinct terms in the expansion of (x + y + z)¹⁰.

**Solution:**
Trinomial (k = 3, n = 10): ¹⁰⁺³⁻¹C₃₋₁ = ¹²C₂ = (12 × 11)/2 = **66 terms**.

Jaanch:
- Jaanch: (10 + 1)(10 + 2)/2 = 11 × 12 / 2 = 66 ✅

---

### Question 3
Find the coefficient of x³ in the expansion of (1 - x + 2x²)⁴.

**Solution:**
General term: [4! / (r₁! r₂! r₃!)] (-1)^(r₂) 2^(r₃) x^(r₂ + 2r₃), with r₁ + r₂ + r₃ = 4 and r₂ + 2r₃ = 3.
- r₃ = 0, r₂ = 3, r₁ = 1: (24/6)(-1)³(1) = -4
- r₃ = 1, r₂ = 1, r₁ = 2: (24/2)(-1)¹(2) = -24
Total coefficient = -4 - 24 = **-28**.

Jaanch:
- Jaanch: Check [(1 - x) + 2x²]⁴: ⁴C₀(-4) + ⁴C₁(2)(-3) = -4 - 24 = -28 ✅

---

### Question 4
Evaluate (⁶C₀)² + (⁶C₁)² + (⁶C₂)² + ... + (⁶C₆)².

**Solution:**
By Vandermonde's identity Σ (ⁿCᵣ)² = ²ⁿCₙ:
= ¹²C₆ = (12 × 11 × 10 × 9 × 8 × 7) / 720 = **924**.

Jaanch:
- Jaanch: Direct sum: 1² + 6² + 15² + 20² + 15² + 6² + 1² = 1 + 36 + 225 + 400 + 225 + 36 + 1 = 924 ✅

---

### Question 5
Evaluate 1·¹⁰C₁ + 2·¹⁰C₂ + 3·¹⁰C₃ + ... + 10·¹⁰C₁₀.

**Solution:**
Formula Σ r · ⁿCᵣ = n · 2ⁿ⁻¹:
= 10 × 2⁹ = 10 × 512 = **5,120**.

Jaanch:
- Jaanch: 10 × 512 = 5120 ✅

---

### Question 6
Find the remainder when 5⁹⁹ is divided by 13.

**Solution:**
5² = 25 = 26 - 1 = 2(13) - 1!
5⁹⁹ = 5 · (5²)⁴⁹ = 5 · (26 - 1)⁴⁹ ≡ 5(-1)⁴⁹ = -5 (mod 13).
Positive remainder = -5 + 13 = **8**.

Jaanch:
- Jaanch: 5² ≡ -1 (mod 13) => 5⁹⁸ ≡ -1 => 5⁹⁹ ≡ -5 ≡ 8 (mod 13) ✅

---

### Question 7
Find the remainder when 2²⁰²⁵ is divided by 7.

**Solution:**
2³ = 8 = 7 + 1!
2025 = 3 × 675 => 2²⁰²⁵ = (2³)⁶⁷⁵ = (7 + 1)⁶⁷⁵ ≡ 1⁶⁷⁵ = **1** (mod 7).

Jaanch:
- Jaanch: 2025 is divisible by 3 (2 + 0 + 2 + 5 = 9), so (7 + 1)⁶⁷⁵ leaves remainder 1 ✅

---

### Question 8
Find the coefficient of x⁵ in (1 + x²)⁵ (1 + x)⁴.

**Solution:**
(1 + x²)⁵ gives even powers (1 + 5x² + 10x⁴ + ...); (1 + x)⁴ gives (1 + 4x + 6x² + 4x³ + x⁴).
Ways to form x⁵:
- (1)(x⁵): impossible
- (5x²)(4x³) = 20x⁵
- (10x⁴)(4x) = 40x⁵
Total coefficient = 20 + 40 = **60**.

Jaanch:
- Jaanch: 5 × 4 + 10 × 4 = 20 + 40 = 60 ✅

---

### Question 9
Evaluate Σ_{r=0}^{n} (-1)ʳ · r · ⁿCᵣ (for n ≥ 2).

**Solution:**
Use r · ⁿCᵣ = n · ⁿ⁻¹Cᵣ₋₁:
= n Σ_{r=1}^{n} (-1)ʳ · ⁿ⁻¹Cᵣ₋₁ = -n (1 - 1)ⁿ⁻¹ = **0**.

Jaanch:
- Jaanch: Test n = 3: -1(3) + 2(3) - 3(1) = -3 + 6 - 3 = 0 ✅

---

### Question 10
Find the last two digits of 3⁴⁰⁰.

**Solution:**
3⁴ = 81 = 1 + 80!
3⁴⁰⁰ = (3⁴)¹⁰⁰ = (1 + 80)¹⁰⁰ = 1 + ¹⁰⁰C₁(80) + ¹⁰⁰C₂(6400) + ...
Notice 100 × 80 = 8000 (divisible by 100!) and every later term is divisible by 100!
Therefore 3⁴⁰⁰ ≡ **01** (mod 100). Last two digits: **01**.

Jaanch:
- Jaanch: 81¹⁰⁰ = (1 + 80)¹⁰⁰ ≡ 1 + 8000 ≡ 1 (mod 100) ✅

---

### Question 11
Evaluate C₀/1 + C₁/2 + C₂/3 + ... + Cₙ/(n + 1) (where Cᵣ = ⁿCᵣ).

**Solution:**
Use ⁿCᵣ / (r + 1) = ⁿ⁺¹Cᵣ₊₁ / (n + 1)!
Sum = [1 / (n + 1)] (ⁿ⁺¹C₁ + ⁿ⁺¹C₂ + ... + ⁿ⁺¹Cₙ₊₁)
= **[ 2ⁿ⁺¹ - 1 ] / (n + 1)**.

Jaanch:
- Jaanch: Test n = 2 (C = 1, 2, 1): 1/1 + 2/2 + 1/3 = 7/3; Formula: (2³ - 1)/3 = 7/3 ✅

---

### Question 12
Find the number of rational terms in the expansion of (5^(1/2) + 7^(1/8))¹⁰²⁴.

**Solution:**
General term Tᵣ₊₁ = ¹⁰²⁴Cᵣ · 5^((1024 - r)/2) · 7^(r/8).
For a rational term, BOTH (1024 - r)/2 and r/8 must be integers => **r must be a multiple of 8**!
Multiples of 8 from r = 0 to r = 1024: r = 0, 8, 16, ..., 1024.
Count = 1024/8 + 1 = 128 + 1 = **129 rational terms**.

Jaanch:
- Jaanch: r = 0 (first) and r = 1024 (last) are both multiples of 8 => 128 + 1 = 129 ✅

---

Ab tumne **Binomial Theorem** ke sabse gehre weapons — Numerically Greatest Term, Multinomial Theorem, Vandermonde & Weighted Series, aur Modular Remainder Tricks — ko poori tarah master kar liya hai!
