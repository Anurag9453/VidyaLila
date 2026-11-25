# Chapter: Binomial Theorem

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [permutations-and-combinations-part4.md](../permutations-and-combinations/permutations-and-combinations-part4.md) tha** (Permutations and Combinations ka aakhri topic, jiske teaser ne vaada kiya tha ki ab **ⁿCᵣ** aur **Pascal's Identity** ek bilkul naye roop mein **(a + b)ⁿ** ko kholenge!). Chhoti powers (a + b)² aur (a + b)³ Class 9 mein padhe the: [expansions.md](../../../class9/maths/expansions/expansions.md).
> **Topics covered in this file:**
> 1. Binomial Theorem for Positive Integral Indices Aur Pascal's Triangle

---

# Topic 1: Binomial Theorem for Positive Integral Indices Aur Pascal's Triangle

Class 9 ke [expansions.md](../../../class9/maths/expansions/expansions.md) mein tumne (a + b)² = a² + 2ab + b² aur (a + b)³ = a³ + 3a²b + 3ab² + b³ seekhe the. Par agar kisi ne poochh liya **(a + b)⁸** ya **(98)⁵** kya hoga? Kya tum 8 baar bracket ko multiply karoge? Bilkul nahi! Is pehle topic mein hum dekhenge ki Chapter 6 ke **ⁿCᵣ** numbers aur **Pascal's Triangle** kaise milkar kisi bhi positive integer n ke liye **(a + b)ⁿ** ka seedha, ek-line formula — **Binomial Theorem** — banate hain!

---

## Suhas ka paper-cup pyramid

School fair mein Suhas paper cups ka ek pyramid bana raha tha. Har cup par ek number likha tha: sabse upar akela **1**, doosri line mein **1, 1**, aur uske neeche har cup ka number uske theek upar wale **do cups ka jod** tha!
- Row 0: 1
- Row 1: 1, 1
- Row 2: 1, 2, 1  *(ye to (a + b)² ke coefficients hain!)*
- Row 3: 1, 3, 3, 1  *(ye (a + b)³ ke coefficients hain!)*
- Row 4: 1, 4, 6, 4, 1  *(kya ye (a + b)⁴ ke coefficients hain?!)*

Teacher ma'am muskuraayi: "Bilkul Suhas! Is pyramid ko **Pascal's Triangle** kehte hain — aur dhyan se dekho, Row 4 ke 1, 4, 6, 4, 1 asal mein **⁴C₀, ⁴C₁, ⁴C₂, ⁴C₃, ⁴C₄** hi hain! Chapter 6 ki **Pascal's Identity (ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ)** hi har cup ko upar ke do cups ka jod banati hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Binomial** | Do terms wala algebraic expression | a + b, 1 − 2x, x² + 3/x |
| **Binomial Theorem** | Kisi bhi positive integer n ke liye (a + b)ⁿ ka seedha expansion formula | (a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ |
| **Binomial coefficients** | Expansion mein aane wale ⁿC₀, ⁿC₁, ⁿC₂, ..., ⁿCₙ numbers | n = 4 par 1, 4, 6, 4, 1 |
| **Pascal's Triangle** | Binomial coefficients ka trikon jisme har number upar ke do numbers ka jod hota hai | Figure 1.1 |

---

## Part A: Binomial Theorem — Kyun Aata Hai ⁿCᵣ?

### Combinatorial Derivation (Sabse Saaf "Kyun"!)

**(a + b)ⁿ = (a + b)(a + b)(a + b) ... (a + b)**  *(kul n brackets)* ko multiply karte waqt har term kaise banta hai?
Har bracket se hum ya to **a** chunte hain, ya **b**!
Agar humein **aⁿ⁻ʳ bʳ** wala term chahiye, to humein kul **n brackets** mein se kisi bhi **r brackets** se **b** chunna hoga (aur bache hue **n − r** brackets se apne aap **a** aayega!).

Chapter 6 se hum jaante hain ki n brackets mein se r brackets chunne ke kul tareeke = **ⁿCᵣ**!
Isliye **aⁿ⁻ʳ bʳ** kul **ⁿCᵣ** baar aata hai! Sabhi r = 0, 1, 2, ..., n ko jodo:

> **(a + b)ⁿ = ⁿC₀ aⁿ + ⁿC₁ aⁿ⁻¹ b + ⁿC₂ aⁿ⁻² b² + ... + ⁿCᵣ aⁿ⁻ʳ bʳ + ... + ⁿCₙ bⁿ**

```
   Row 0 (n=0):             1                      -->  ⁰C₀
   Row 1 (n=1):           1   1                    -->  ¹C₀  ¹C₁
   Row 2 (n=2):         1   2   1                  -->  ²C₀  ²C₁  ²C₂
   Row 3 (n=3):       1   3   3   1                -->  ³C₀  ³C₁  ³C₂  ³C₃
   Row 4 (n=4):     1   4   6   4   1              -->  ⁴C₀  ⁴C₁  ⁴C₂  ⁴C₃  ⁴C₄
   Row 5 (n=5):   1   5  10  10   5   1            -->  ⁵C₀  ⁵C₁  ⁵C₂  ⁵C₃  ⁵C₄  ⁵C₅
```

> **Figure 1.1** – Pascal's Triangle: har inner number upar ke dono numbers ka jod hai (ⁿCᵣ₋₁ + ⁿCᵣ = ⁿ⁺¹Cᵣ), aur har row symmetric hai (ⁿCᵣ = ⁿCₙ₋ᵣ).

### 5 Sabse Zaroori Observations

1. **Kul terms = n + 1** (kyunki r, 0 se n tak jaata hai — n terms nahi!).
2. **Powers ka jod:** Har term mein a ki power (n − r) aur b ki power (r) ka jod hamesha **n** rehta hai! (a ki power n se 0 tak ghatti hai, b ki power 0 se n tak badhti hai.)
3. **Symmetry:** Shuru aur ant se barabar doori par binomial coefficients barabar hote hain (**ⁿCᵣ = ⁿCₙ₋ᵣ**).
4. **Special Cases:**
   - **(a − b)ⁿ:** b ki jagah −b rakho → signs **alternating (+, −, +, −, ...)** ho jaate hain:
     **(a − b)ⁿ = ⁿC₀ aⁿ − ⁿC₁ aⁿ⁻¹ b + ⁿC₂ aⁿ⁻² b² − ... + (−1)ⁿ ⁿCₙ bⁿ**.
   - **(1 + x)ⁿ = ⁿC₀ + ⁿC₁ x + ⁿC₂ x² + ... + ⁿCₙ xⁿ**.
   - **(1 − x)ⁿ = ⁿC₀ − ⁿC₁ x + ⁿC₂ x² − ... + (−1)ⁿ ⁿCₙ xⁿ**.
5. **Sum of Binomial Coefficients (x = 1 aur x = −1 rakho!):**
   - **(1 + 1)ⁿ = 2ⁿ** ⟹ **ⁿC₀ + ⁿC₁ + ⁿC₂ + ... + ⁿCₙ = 2ⁿ** *(yahi Chapter 1 mein n-element set ke 2ⁿ subsets ka doosra proof hai!)*
   - **(1 − 1)ⁿ = 0** ⟹ **ⁿC₀ − ⁿC₁ + ⁿC₂ − ... + (−1)ⁿ ⁿCₙ = 0**
   - Dono se: **Even-index sum = Odd-index sum = 2ⁿ⁻¹**!

---

## Part B: Worked Examples

### Example 1: (x² + 3/x)⁴ ko Expand Karo (x ≠ 0)

**Hal:**
Yahan a = x², b = 3/x, n = 4 (Row 4 coefficients: 1, 4, 6, 4, 1):
(x² + 3/x)⁴ = ⁴C₀(x²)⁴ + ⁴C₁(x²)³(3/x) + ⁴C₂(x²)²(3/x)² + ⁴C₃(x²)(3/x)³ + ⁴C₄(3/x)⁴
= 1(x⁸) + 4(x⁶)(3/x) + 6(x⁴)(9/x²) + 4(x²)(27/x³) + 1(81/x⁴)
= **x⁸ + 12x⁵ + 54x² + 108/x + 81/x⁴**.

**Jaanch:** x = 1 rakho: LHS = (1 + 3)⁴ = 4⁴ = 256; RHS = 1 + 12 + 54 + 108 + 81 = 256 ✅!

### Example 2: Alternating Signs — (1 − 2x)⁵ ko Expand Karo

**Hal:**
Row 5 coefficients: 1, 5, 10, 10, 5, 1; a = 1, b = −2x:
(1 − 2x)⁵ = 1 − 5(2x) + 10(2x)² − 10(2x)³ + 5(2x)⁴ − 1(2x)⁵
= **1 − 10x + 40x² − 80x³ + 80x⁴ − 32x⁵**.

**Jaanch:** x = 1 rakho: LHS = (1 − 2)⁵ = (−1)⁵ = −1; RHS = 1 − 10 + 40 − 80 + 80 − 32 = −1 ✅!

### Example 3: (x + 1)⁶ + (x − 1)⁶ aur Radical Evaluation

**(x + 1)⁶ + (x − 1)⁶** nikalo, aur isse **(√2 + 1)⁶ + (√2 − 1)⁶** ka exact maan nikalo!

**Hal:**
1. (x + 1)⁶ = ⁶C₀ x⁶ + ⁶C₁ x⁵ + ⁶C₂ x⁴ + ⁶C₃ x³ + ⁶C₄ x² + ⁶C₅ x + ⁶C₆.
2. (x − 1)⁶ = ⁶C₀ x⁶ − ⁶C₁ x⁵ + ⁶C₂ x⁴ − ⁶C₃ x³ + ⁶C₄ x² − ⁶C₅ x + ⁶C₆.
3. Dono ko jodo — saare **odd-power terms kat jaate hain** aur even-power terms double ho jaate hain!
   (x + 1)⁶ + (x − 1)⁶ = 2 [⁶C₀ x⁶ + ⁶C₂ x⁴ + ⁶C₄ x² + ⁶C₆]
   = 2 [x⁶ + 15x⁴ + 15x² + 1] = **2x⁶ + 30x⁴ + 30x² + 2**.
4. Ab **x = √2** rakho (x² = 2, x⁴ = 4, x⁶ = 8):
   (√2 + 1)⁶ + (√2 − 1)⁶ = 2(8) + 30(4) + 30(2) + 2 = 16 + 120 + 60 + 2 = **198**!

**Jaanch:** x = 1 par LHS = 2⁶ + 0 = 64, RHS = 2 + 30 + 30 + 2 = 64 ✅; √2 + 1 ≈ 2.4142, 2.4142⁶ ≈ 197.995, (√2 − 1)⁶ ≈ 0.005, sum = 198 ✅!

### Example 4: Sum of Coefficients Verification (n = 4)

n = 4 par verify karo: (i) ⁴C₀ + ⁴C₁ + ⁴C₂ + ⁴C₃ + ⁴C₄ = 2⁴, aur (ii) ⁴C₀ + ⁴C₂ + ⁴C₄ = ⁴C₁ + ⁴C₃ = 2³.

**Hal:**
Row 4 = 1, 4, 6, 4, 1:
- (i) 1 + 4 + 6 + 4 + 1 = **16 = 2⁴**.
- (ii) Even indices: 1 + 6 + 1 = **8 = 2³**; Odd indices: 4 + 4 = **8 = 2³**.

**Jaanch:** 8 + 8 = 16 = 2⁴ ✅.

---

## Aam galtiyan

1. **(a + b)ⁿ mein n terms maan lena (n + 1 ke bajay):**
   - *Sahi soch:* Power n hone par hamesha **n + 1 terms** hote hain (r = 0 se r = n tak!).
2. **(a + b)ⁿ = aⁿ + bⁿ likh dena:** Student (x + 2)³ = x³ + 8 likh deta hai!
   - *Galat kyun:* x = 1 par (1 + 2)³ = 27 ≠ 1 + 8 = 9! Beech ke saare cross terms (ⁿC₁ aⁿ⁻¹ b + ...) zaroori hain!
3. **(a − b)ⁿ mein saare signs + ya saare − likh dena:**
   - *Sahi soch:* (−b)ʳ even r par **+** aur odd r par **−** deta hai — isliye signs hamesha **+, −, +, −, ...** chalte hain!

---

## Quick Recap

- **(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ** (r = 0 to n); kul **n + 1 terms**; har term mein powers ka jod = **n**.
- **Pascal's Triangle:** har number upar ke do numbers ka jod (**ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ**).
- **(a − b)ⁿ** mein signs alternating (+, −, +, −, ...).
- **Σ ⁿCᵣ = 2ⁿ**; even-index sum = odd-index sum = **2ⁿ⁻¹**.

---

## Practice Questions

1. Expand each of the following using the Binomial Theorem:
   (a) (2x − 3)⁴
   (b) (x/3 + 1/x)⁵
   (c) (x + 1/x)⁶

2. Expand **(2/x − x/2)⁵** (x ≠ 0) and check your expansion at x = 2.

3. Using the Binomial Theorem, expand **(1 + x + x²)³** by grouping as [1 + (x + x²)]³.

4. Find **(a + b)⁴ − (a − b)⁴**. Hence evaluate **(√3 + √2)⁴ − (√3 − √2)⁴**.

5. Find **(x + 1)⁴ + (x − 1)⁴**. Hence evaluate **(√5 + 1)⁴ + (√5 − 1)⁴**.

6. How many terms are there in the expansion of:
   (a) (3x + 2y)¹⁵
   (b) (x + a)⁸ + (x − a)⁸  *(after simplifying!)*
   (c) (x + a)⁷ − (x − a)⁷  *(after simplifying!)*

7. Using the Binomial Theorem, compute **(101)⁴** exactly.

8. Using the Binomial Theorem, compute **(99)⁵** exactly.

9. Find the sum of all coefficients in the expansion of **(3x − 2y)¹⁰** (Hint: put x = 1, y = 1!).

10. Write Row 6 of Pascal's Triangle using Row 5 (1, 5, 10, 10, 5, 1), and verify that its sum is 2⁶ = 64.

11. Evaluate **⁸C₀ + ⁸C₂ + ⁸C₄ + ⁸C₆ + ⁸C₈** without calculating each individual combination.

12. True or False? Give a one-line reason:
    (a) The expansion of (2x − 5)⁹ has 10 terms.
    (b) For all real a, b, (a + b)⁴ = a⁴ + b⁴.
    (c) ⁿC₀ − ⁿC₁ + ⁿC₂ − ... + (−1)ⁿ ⁿCₙ = 0 for every positive integer n.
    (d) In (a + b)ⁿ, the sum of the exponents of a and b in every term is n.

### Answers

1. (a) 16x⁴ − 4(8x³)(3) + 6(4x²)(9) − 4(2x)(27) + 81 = **16x⁴ − 96x³ + 216x² − 216x + 81**. Jaanch: x = 2 par 1⁴ = 1; 256−768+864−432+81 = 1 ✅.
   (b) **x⁵/243 + 5x³/81 + 10x/27 + 10/(9x) + 5/(3x³) + 1/x⁵**.
   (c) **x⁶ + 6x⁴ + 15x² + 20 + 15/x² + 6/x⁴ + 1/x⁶**.

2. **32/x⁵ − 40/x³ + 20/x − 5x + 5x³/8 − x⁵/32**.
   Jaanch: x = 2 par LHS = (1 − 1)⁵ = 0; RHS = 1 − 5 + 10 − 10 + 5 − 1 = 0 ✅!

3. 1 + 3(x + x²) + 3(x + x²)² + (x + x²)³
   = 1 + 3x + 3x² + 3(x² + 2x³ + x⁴) + (x³ + 3x⁴ + 3x⁵ + x⁶)
   = **1 + 3x + 6x² + 7x³ + 6x⁴ + 3x⁵ + x⁶**. Jaanch: x = 1 par 3³ = 27 = 1+3+6+7+6+3+1 ✅.

4. (a + b)⁴ − (a − b)⁴ = 2(⁴C₁ a³b + ⁴C₃ ab³) = **8ab(a² + b²)**.
   a = √3, b = √2 rakho: 8(√6)(3 + 2) = **40√6**. Jaanch: 8 × 5 = 40 ✅.

5. (x + 1)⁴ + (x − 1)⁴ = 2(x⁴ + 6x² + 1) = **2x⁴ + 12x² + 2**.
   x = √5 rakho: 2(25) + 12(5) + 2 = 50 + 60 + 2 = **112**. Jaanch: 50 + 62 = 112 ✅.

6. (a) 15 + 1 = **16 terms**.
   (b) Even-r terms (r = 0, 2, 4, 6, 8) bachte hain → **5 terms**.
   (c) Odd-r terms (r = 1, 3, 5, 7) bachte hain → **4 terms**.

7. (100 + 1)⁴ = 100⁴ + 4(100³) + 6(100²) + 4(100) + 1 = 100,000,000 + 4,000,000 + 60,000 + 400 + 1 = **104,060,401**. Jaanch: 101² = 10201, 10201² = 104060401 ✅.

8. (100 − 1)⁵ = 10¹⁰ − 5(10⁸) + 10(10⁶) − 10(10⁴) + 5(10²) − 1
   = 10,000,000,000 − 500,000,000 + 10,000,000 − 100,000 + 500 − 1 = **9,509,900,499**. Jaanch: 99⁵ = 9509900499 ✅.

9. x = 1, y = 1 rakhne par har term ka x, y hissa 1 ban jaata hai, sirf coefficients ka jod bachta hai:
   (3(1) − 2(1))¹⁰ = 1¹⁰ = **1**.

10. Row 6: **1, 6, 15, 20, 15, 6, 1**. Jaanch: Sum = 1 + 6 + 15 + 20 + 15 + 6 + 1 = **64 = 2⁶** ✅.

11. Even-index sum = 2⁸⁻¹ = 2⁷ = **128**.

12. (a) ✅ True: n + 1 = 9 + 1 = 10 terms.
    (b) ❌ False: a = 1, b = 1 par 16 ≠ 2.
    (c) ✅ True: (1 − 1)ⁿ = 0.
    (d) ✅ True: (n − r) + r = n.

---

Ab tum Pascal's Triangle aur Binomial Theorem se kisi bhi positive integer power ko poora khol sakte ho.

**Agle topic mein:** bina poora expansion likhe seedha **kisi bhi ek khaas term** ya **beech wale term (Middle Term)** par chhalaang lagayenge — **General Term Tᵣ₊₁ aur Middle Term**!
