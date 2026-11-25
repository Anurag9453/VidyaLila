# Chapter: Sequences and Series (Part 5)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [sequences-and-series-part4.md](sequences-and-series-part4.md) tha** (Topic 4: Special Series: Sum of Natural Numbers, Squares, and Cubes).
> **Topics covered in this file:**
> 1. Sab Kuch Mila Kar: Mixed Problems, Arithmetico-Geometric Progression (AGP), Chapter Wrap-up Table, Aur Agle Chapter Ka Teaser

---

# Topic 5: Sab Kuch Mila Kar: Mixed Problems, Arithmetico-Geometric Progression (AGP), Aur Chapter Wrap-up

Pichhle 4 topics mein tumne Sequences and Series ke sabhi ahem hathiyar alag-alag seekhe:
1. AP ke formulas aur inserting n Arithmetic Means (AMs)
2. GP ke formulas, inserting n Geometric Means (GMs), aur infinite GP sum
3. AM ≥ GM inequality aur minimum values
4. Special series (Σ n, Σ n², Σ n³) aur polynomial series sums

Lekin real-world problems aur advanced challenges mein sawaal yeh bata kar nahi aate ki "main Topic 2 ka hoon" ya "mujhe AM-GM se solve karo". Wahan sabhi concepts aapas mein ghul-mil jaate hain! 

Is aakhri topic mein hum:
- Ek solid **Decision Map** banayenge ("Kaun sa concept kab lagana hai?").
- **Arithmetico-Geometric Progression (AGP)** ki master shifting technique seekhenge.
- 6 rich multi-concept mixed problems solve karenge.
- Aur aakhri mein poore chapter ka ek comprehensive **Chapter Wrap-up Table** dekhenge!

---

## Yashwant ka science exhibition command center

Yashwant district science exhibition ka logistics coordinator hai. Main auditorium mein use alag-alag blocks ko coordinate karna tha:
- Section A mein seating rows AP mein arrange thin: pehli row mein 20 chairs, agli mein 24, teesri mein 28...
- Section B ke robotic display booths ki battery charging units GP mein load draw kar rahi thin: pehla 2 kW, doosra 4 kW, teesra 8 kW...
- VIP lounge mein square tables par displays special series Σ n² ke mutabiq arranged the.
- Aur main stage par audio-visual delay ek Arithmetico-Geometric pattern (1 + 2r + 3r² + ...) follow kar raha tha!

Yashwant ke paas har type ke sawal ke liye ek toolkit thi: "Agar terms mein constant jod ho, to AP toolkit. Agar multiply ho, to GP toolkit. Agar terms ka combination ho, to shift-and-subtract technique! Har pattern ka apna ek pakka mathematical signature hota hai!"

---

## Decision Map: Kaun Sa Concept Kab?

```
+--------------------------------------------------------------------------+
+                        SEQUENCES & SERIES DECISION MAP                    |
+--------------------------------------------------------------------------+
+  Pattern type                      | Pehchan             | Best Tool      |
+ -----------------------------------+---------------------+----------------|
+  Consecutive terms ka difference   | aₖ - aₖ₋₁ = d       | AP formulas    |
+  constant hai                      |                     | aₙ, Sₙ, AM     |
+ -----------------------------------+---------------------+----------------|
+  Consecutive terms ka ratio        | aₖ / aₖ₋₁ = r       | GP formulas    |
+  constant hai                      |                     | aₙ, Sₙ, GM     |
+ -----------------------------------+---------------------+----------------|
+  Infinite terms (|r| < 1)          | Terms 0 ki taraf    | S_∞ = a/(1 - r)|
+                                    | shrink hote hain    |                |
+ -----------------------------------+---------------------+----------------|
+  Positive terms ka sum/product     | Variables multiply  | AM ≥ GM        |
+  minimize / maximize karna hai     | hoke cancel hote hai| Inequality     |
+ -----------------------------------+---------------------+----------------|
+  Terms powers of n hain            | k, k², k³           | Special Series |
+  ya unke polynomials               |                     | Σ k, Σ k², Σ k³|
+ -----------------------------------+---------------------+----------------|
+  Har term = (AP term) × (GP term)  | 1 + 3x + 5x² + ...  | AGP: Multiply  |
+                                    |                     | by r & subtract|
+--------------------------------------------------------------------------+
```

---

## Part A: Arithmetico-Geometric Progression (AGP)

### AGP Kya Hoti Hai?
Ek aisi series jisme har term ek AP ke term aur ek GP ke corresponding term ka product hota hai:
a, (a + d)r, (a + 2d)r², (a + 3d)r³, ..., [a + (n - 1)d]rⁿ⁻¹

Example:
1 + 3x + 5x² + 7x³ + ...
Yahan:
- Coefficients 1, 3, 5, 7 ek AP hain (a = 1, d = 2).
- Powers 1, x, x², x³ ek GP hain (common ratio r = x).

### AGP Ko Sum Karne Ki Master Shifting Technique:
1. Poori series ko S likho.
2. Poori equation ko common ratio r se multiply karo.
3. Terms ko **ek position right shift** karke likho, taaki x ki same powers ek ke neeche ek aayein.
4. Pehli equation mein se doosri equation ghatao (subtract karo)!

Dekho jaadoo:
Subtract karte hi AP ke terms ka difference hamesha constant d ban jata hai, aur bachi huyi series ek **pure GP** ban jaati hai!

### Infinite AGP Ka Sum (|r| < 1):
S_∞ = a / (1 - r) + dr / (1 - r)²

---

## 6 Rich Mixed Solved Problems (Step-by-Step With Jaanch)

### Problem 5.1: Connecting AP and GP Powers
**Sawaal:** Agar a, b, c teeno numbers ek AP mein hon, aur x, y, z teeno positive numbers ek GP mein hon, to prove karo ki:
xᵇ⁻ᶜ · yᶜ⁻ᵃ · zᵃ⁻ᵇ = 1.

**Solution:**
Diya hai ki a, b, c ek AP mein hain.
Maan lo common difference d hai:
b - a = d
c - b = d => b - c = -d
c - a = (c - b) + (b - a) = d + d = 2d => c - a = 2d, aur a - b = -d.

Diya hai ki x, y, z ek GP mein hain.
Maan lo common ratio R hai:
y = x · R
z = x · R²

Ab diye gaye expression ke LHS mein substitute karte hain:
LHS = xᵇ⁻ᶜ · yᶜ⁻ᵃ · zᵃ⁻ᵇ
= x⁻ᵈ · (x · R)²ᵈ · (x · R²)⁻ᵈ
= x⁻ᵈ · [x²ᵈ · R²ᵈ] · [x⁻ᵈ · R⁻²ᵈ]

Ab x aur R ki powers ko ikattha jodte hain:
Power of x: -d + 2d - d = 0
Power of R: 2d - 2d = 0

LHS = x⁰ · R⁰ = 1 · 1 = 1 = RHS.

Jaanch:
- Let a = 1, b = 2, c = 3 (AP with d = 1).
- Let x = 2, y = 4, z = 8 (GP with R = 2).
- b - c = 2 - 3 = -1, c - a = 3 - 1 = 2, a - b = 1 - 2 = -1.
- Jaanch: LHS = 2⁻¹ · 4² · 8⁻¹ = (1/2) · 16 · (1/8) = 16 / 16 = 1 ✅

---

### Problem 5.2: Sum of an Infinite AGP
**Sawaal:** Infinite series S = 1 + 3x + 5x² + 7x³ + ... ka sum gyat karo, jahan |x| < 1 hai.

**Solution:**
S = 1 + 3x + 5x² + 7x³ + ...   --- (1)

Equation (1) ko x se multiply karte hain:
xS =     x + 3x² + 5x³ + 7x⁴ + ...   --- (2)

Equation (1) mein se Equation (2) ko ghataate hain (shift karke):
S - xS = 1 + (3x - x) + (5x² - 3x²) + (7x³ - 5x³) + ...
(1 - x)S = 1 + [ 2x + 2x² + 2x³ + ... ]
(1 - x)S = 1 + 2x [ 1 + x + x² + ... ]

Bracket ke andar ek infinite GP hai jiska pehla term 1 aur common ratio x hai (|x| < 1):
1 + x + x² + ... = 1 / (1 - x).

Isliye:
(1 - x)S = 1 + 2x · [ 1 / (1 - x) ]
(1 - x)S = [ (1 - x) + 2x ] / (1 - x)
(1 - x)S = (1 + x) / (1 - x)

Dono taraf (1 - x) se divide karne par:
S = (1 + x) / (1 - x)².

Jaanch:
- Formula check: a = 1, d = 2, r = x.
- Jaanch: S = a/(1 - r) + dr/(1 - r)² = 1/(1 - x) + 2x/(1 - x)² = (1 - x + 2x)/(1 - x)² = (1 + x)/(1 - x)² ✅
- Let x = 1/2:
  S = 1 + 3(1/2) + 5(1/4) + 7(1/8) + ...
  Formula se: S = (1 + 1/2) / (1 - 1/2)² = (3/2) / (1/4) = 6.
Jaanch:   Terms sum: 1 + 1.5 + 1.25 + 0.875 + 0.5625 = 5.1875 (approaching 6) ✅

---

### Problem 5.3: Ratio of Numbers Given Sum is 6 Times GM
**Sawaal:** Do positive numbers a aur b ka sum unke geometric mean ka 6 guna hai. Prove karo ki a : b = (3 + 2√2) : (3 - 2√2).

**Solution:**
Given:
a + b = 6√(ab)

Dono taraf 2√(ab) se divide karte hain:
(a + b) / (2√(ab)) = 6 / 2 = 3 / 1

Componendo and Dividendo lagane par:
[(a + b) + 2√(ab)] / [(a + b) - 2√(ab)] = (3 + 1) / (3 - 1)
[ (√a)² + 2√a√b + (√b)² ] / [ (√a)² - 2√a√b + (√b)² ] = 4 / 2
(√a + √b)² / (√a - √b)² = 2 / 1

Dono taraf square root lene par (assuming a > b):
(√a + √b) / (√a - √b) = √2 / 1

Dobara Componendo and Dividendo lagane par:
[(√a + √b) + (√a - √b)] / [(√a + √b) - (√a - √b)] = (√2 + 1) / (√2 - 1)
2√a / 2√b = (√2 + 1) / (√2 - 1)
√a / √b = (√2 + 1) / (√2 - 1)

Dono taraf square karne par:
a / b = (√2 + 1)² / (√2 - 1)²
= (2 + 2√2 + 1) / (2 - 2√2 + 1)
= (3 + 2√2) / (3 - 2√2).

Isliye a : b = (3 + 2√2) : (3 - 2√2).

Jaanch:
- (3 + 2√2)(3 - 2√2) = 9 - 8 = 1.
- Let a = 3 + 2√2 and b = 3 - 2√2.
- a + b = 6.
- ab = 1 => √(ab) = 1.
- Jaanch: a + b = 6 = 6√(ab) ✅

---

### Problem 5.4: Relation Between S₁, S₂, S₃
**Sawaal:** Agar S₁, S₂, S₃ kramashah pehle n natural numbers ka jod, unke squares ka jod, aur unke cubes ka jod hon, to prove karo ki:
9 S₂² = S₃ (1 + 8 S₁).

**Solution:**
Hum jante hain:
S₁ = n(n + 1) / 2
S₂ = n(n + 1)(2n + 1) / 6
S₃ = [ n(n + 1) / 2 ]² = n²(n + 1)² / 4

LHS nikaalte hain:
LHS = 9 S₂²
= 9 · [ n(n + 1)(2n + 1) / 6 ]²
= 9 · [ n²(n + 1)²(2n + 1)² / 36 ]
= n²(n + 1)²(2n + 1)² / 4.

Ab RHS nikaalte hain:
RHS = S₃ · (1 + 8 S₁)
= [ n²(n + 1)² / 4 ] · [ 1 + 8 · (n(n + 1) / 2) ]
= [ n²(n + 1)² / 4 ] · [ 1 + 4n(n + 1) ]
= [ n²(n + 1)² / 4 ] · [ 1 + 4n² + 4n ]

Notice karo: 4n² + 4n + 1 = (2n + 1)²!
Isliye:
RHS = [ n²(n + 1)² / 4 ] · (2n + 1)²
= n²(n + 1)²(2n + 1)² / 4.

LHS = RHS. Proven!

Jaanch:
- For n = 2:
  S₁ = 1 + 2 = 3.
  S₂ = 1 + 4 = 5.
  S₃ = 1 + 8 = 9.
  LHS = 9 · S₂² = 9 · 25 = 225.
  RHS = S₃ · (1 + 8 S₁) = 9 · (1 + 24) = 9 · 25 = 225.
Jaanch:   LHS = RHS = 225 ✅

---

### Problem 5.5: Synthesis Multi-Year Production and Capital Model
**Sawaal:** Ek electronics manufacturing company 3rd year mein 600 units produce karti hai aur 7th year mein 700 units produce karti hai (production uniform AP follow karti hai). Saath hi company ki ek fixed fund investment hai jo ₹10,000 se shuru hoti hai aur har saal 10% compound interest se grow karti hai (GP). Gyat karo:
1. 10th year mein kitni units produce hongi?
2. Pehle 10 saalon mein kul kitni units produce hongi?
3. 3rd year ke ant mein fund ki total value kya hogi?

**Solution:**
Part 1 & 2 (Production AP):
Let first year production be a and annual uniform increase be d.
T₃ = a + 2d = 600   --- (1)
T₇ = a + 6d = 700   --- (2)

Subtracting (1) from (2):
4d = 100 => d = 25 units per year.

From (1):
a + 2(25) = 600 => a = 550 units.

1. 10th year production:
   T₁₀ = a + 9d = 550 + 9(25) = 550 + 225 = 775 units.

2. Total production in first 10 years:
   S₁₀ = (10 / 2) [ 2a + 9d ]
   = 5 [ 2(550) + 225 ]
   = 5 [ 1100 + 225 ]
   = 5 [ 1325 ]
   = 6625 units.

Part 3 (Investment GP):
Initial principal P = 10,000.
Rate = 10% per year => growth multiplier r = 1 + 10/100 = 1.1.
Value after 3 years:
A₃ = P · r³ = 10000 · (1.1)³ = 10000 · 1.331 = ₹13,310.

Jaanch:
- Jaanch: T₃ = 550 + 2(25) = 600 ✅
- Jaanch: T₇ = 550 + 6(25) = 700 ✅
- Jaanch: S₁₀ = 5(550 + 775) = 5(1325) = 6625 ✅
- Jaanch: (1.1)³ = 1.331, 10000 × 1.331 = 13310 ✅

---

### Problem 5.6: Minimum Value of Sum of Squares Subject to Linear Sum
**Sawaal:** Agar a, b, c teeno positive real numbers hon aur a + b + c = 12 ho, to a² + b² + c² ki minimum value gyat karo.

**Solution:**
Algebraic Identity Method:
Hum jante hain:
(a - b)² + (b - c)² + (c - a)² ≥ 0
Expand karne par:
2(a² + b² + c²) - 2(ab + bc + ca) ≥ 0
a² + b² + c² ≥ ab + bc + ca

Ab dono taraf 2(a² + b² + c²) jodte hain:
3(a² + b² + c²) ≥ a² + b² + c² + 2(ab + bc + ca)
Notice karo RHS ek perfect square hai:
3(a² + b² + c²) ≥ (a + b + c)²

Given: a + b + c = 12.
3(a² + b² + c²) ≥ (12)²
3(a² + b² + c²) ≥ 144
a² + b² + c² ≥ 48.

Equality condition:
(a - b)² + (b - c)² + (c - a)² = 0 tabhi hoga jab a = b = c ho.
Kyunki a + b + c = 12, a = b = c = 4.
Minimum value 48 hai, jo a = b = c = 4 par aati hai.

Jaanch:
- Jaanch: At a = b = c = 4: 4² + 4² + 4² = 16 + 16 + 16 = 48 ✅
- Jaanch: If a = 2, b = 4, c = 6: a + b + c = 12, a² + b² + c² = 4 + 16 + 36 = 56 > 48 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: AGP mein equation ko r se multiply kiye bina subtract kar dena
- **Galat soch:** "AGP ke consecutive terms ko aapas mein ghata do to GP mil jayegi."
- **Sahi samajh:** AGP ka har term alag power of r se multiplied hota hai. Jab tak poori equation ko r se multiply karke ek position aage shift nahi karoge, tab tak x ki same powers subtract nahi hongi aur cancellation nahi milega!

### Galti 2: Samajh lena ki agar a, b, c AP mein hain to 1/a, 1/b, 1/c bhi AP mein honge
- **Galat soch:** "AP ke terms ka reciprocal bhi AP hota hai."
- **Sahi samajh:** Bilkul galat! Example: 1, 2, 3 ek AP hai (d = 1). Inke reciprocals 1, 1/2, 1/3 hain. Difference: 1/2 - 1 = -1/2, jabki 1/3 - 1/2 = -1/6. Differences barabar nahi hain! AP ka reciprocal AP nahi hota (wo Harmonic Progression kehlata hai).

### Galti 3: Sₙ aur Tₙ ke beech confuse ho jana
- **Galat soch:** "Question mein aₙ maanga hai to Sₙ ka formula laga diya."
- **Sahi samajh:** aₙ (ya Tₙ) n-th term (single number) hota hai, jabki Sₙ pehle n terms ka total jod hota hai. Yaad rakho: Tₙ = Sₙ - Sₙ₋₁ (for n ≥ 2).

---

## Quick Recap

- **AGP Structure:** a + (a + d)r + (a + 2d)r² + ...
- **AGP Sum Strategy:** Multiply by r, shift one place to the right, and subtract to create a pure GP.
- **Infinite AGP Sum (|r| < 1):** S_∞ = a/(1 - r) + dr/(1 - r)².
- **Componendo and Dividendo in Means:** Agar a/b = c/d, to (a + b)/(a - b) = (c + d)/(c - d).
- **Sum of Powers Identity:** 9 S₂² = S₃ (1 + 8 S₁).
- **AP Term From Sum:** Tₙ = Sₙ - Sₙ₋₁.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the sum to infinity of the series: 1 + 2/3 + 3/9 + 4/27 + ...

**Solution:**
This is an AGP where:
- AP part: 1, 2, 3, 4, ... (a = 1, d = 1)
- GP part: 1, 1/3, 1/9, 1/27, ... (r = 1/3)

Using standard formula S_∞ = a / (1 - r) + dr / (1 - r)²:
Here a = 1, d = 1, r = 1/3.
1 - r = 1 - 1/3 = 2/3.
(1 - r)² = 4/9.

S_∞ = 1 / (2/3) + [ 1 · (1/3) ] / (4/9)
= 3/2 + (1/3) × (9/4)
= 3/2 + 3/4
= 6/4 + 3/4 = 9/4 = 2.25.

Jaanch:
- Direct shift-and-subtract: S - S/3 = (2/3)S = 1 + [1/3 + 1/9 + ...] = 1 + (1/3)/(2/3) = 1 + 1/2 = 3/2.
- Jaanch: (2/3)S = 3/2 => S = (3/2) × (3/2) = 9/4 ✅

---

### Question 2
If a, b, c are in AP, prove that (b + c - a), (c + a - b), (a + b - c) are also in AP.

**Solution:**
Given that a, b, c are in AP, let their common difference be d.
So b - a = d and c - b = d.
Also a + c = 2b.

Let the three given terms be:
T₁ = b + c - a
T₂ = c + a - b
T₃ = a + b - c

Substitute a + c = 2b into T₂:
T₂ = 2b - b = b.

Substitute c = 2b - a into T₁:
T₁ = b + (2b - a) - a = 3b - 2a.

Substitute a = 2b - c into T₃:
T₃ = (2b - c) + b - c = 3b - 2c.

Now check the differences:
T₂ - T₁ = b - (3b - 2a) = 2a - 2b = -2(b - a) = -2d.
T₃ - T₂ = (3b - 2c) - b = 2b - 2c = -2(c - b) = -2d.

Since T₂ - T₁ = T₃ - T₂, the three terms are in AP with common difference -2d.

Jaanch:
- Let a = 1, b = 2, c = 3 (d = 1).
- T₁ = 2 + 3 - 1 = 4.
- T₂ = 3 + 1 - 2 = 2.
- T₃ = 1 + 2 - 3 = 0.
- Jaanch: Sequence: 4, 2, 0 is an AP with common difference -2 ✅

---

### Question 3
The sum of three numbers in AP is 15 and their product is 80. Find the numbers.

**Solution:**
Let the three numbers in AP be a - d, a, a + d.
Sum = (a - d) + a + (a + d) = 3a.
Given 3a = 15 => a = 5.

Product = (a - d) · a · (a + d) = a(a² - d²).
5(25 - d²) = 80
25 - d² = 16
d² = 9 => d = ±3.

If d = 3: numbers are 5 - 3, 5, 5 + 3 => 2, 5, 8.
If d = -3: numbers are 5 - (-3), 5, 5 + (-3) => 8, 5, 2.

The numbers are 2, 5, 8.

Jaanch:
- Jaanch: Sum = 2 + 5 + 8 = 15 ✅
- Jaanch: Product = 2 × 5 × 8 = 80 ✅

---

### Question 4
The sum of three numbers in GP is 26 and their product is 216. Find the numbers.

**Solution:**
Let the three numbers in GP be a/r, a, ar.
Product = (a/r) · a · (ar) = a³.
Given a³ = 216 => a = 6.

Sum = a/r + a + ar = 26.
6/r + 6 + 6r = 26
6(1/r + r) = 20
1/r + r = 20/6 = 10/3
(r² + 1)/r = 10/3
3r² + 3 = 10r
3r² - 10r + 3 = 0
(3r - 1)(r - 3) = 0
r = 3 or r = 1/3.

If r = 3: numbers are 6/3, 6, 6(3) => 2, 6, 18.
If r = 1/3: numbers are 18, 6, 2.

The numbers are 2, 6, 18.

Jaanch:
- Jaanch: Sum = 2 + 6 + 18 = 26 ✅
- Jaanch: Product = 2 × 6 × 18 = 216 ✅

---

### Question 5
Find the sum to n terms of the series whose n-th term is Tₙ = 3ⁿ + 2n.

**Solution:**
Sₙ = Σₖ₌₁ⁿ Tₖ = Σₖ₌₁ⁿ 3ᵏ + 2 Σₖ₌₁ⁿ k

First part is a GP: 3¹ + 3² + ... + 3ⁿ.
Here first term is 3, common ratio is 3:
Sum_GP = 3(3ⁿ - 1) / (3 - 1) = 3(3ⁿ - 1) / 2.

Second part is sum of natural numbers:
2 Σ k = 2 · [ n(n + 1) / 2 ] = n(n + 1).

Total sum:
Sₙ = [ 3(3ⁿ - 1) / 2 ] + n(n + 1).

Jaanch:
- Jaanch: For n = 1: T₁ = 3¹ + 2(1) = 5. Formula: 3(2)/2 + 1(2) = 3 + 2 = 5 ✅
- Jaanch: For n = 2: T₂ = 3² + 2(2) = 13. S₂ = 5 + 13 = 18. Formula: 3(8)/2 + 2(3) = 12 + 6 = 18 ✅

---

### Question 6
The roots of the cubic equation x³ - 12x² + 39x - 28 = 0 are in AP. Find the roots.

**Solution:**
Let the roots be a - d, a, a + d.
Sum of roots:
(a - d) + a + (a + d) = -(-12)/1 = 12
3a = 12 => a = 4.

Product of roots:
(a - d) · a · (a + d) = -(-28)/1 = 28
a(a² - d²) = 28
4(16 - d²) = 28
16 - d² = 7
d² = 9 => d = ±3.

The roots are:
4 - 3 = 1, 4, 4 + 3 = 7.
Roots are 1, 4, 7.

Jaanch:
- Jaanch: Sum = 1 + 4 + 7 = 12 ✅
- Jaanch: Sum of pairwise products = (1)(4) + (4)(7) + (1)(7) = 4 + 28 + 7 = 39 ✅
- Jaanch: Product = 1 × 4 × 7 = 28 ✅

---

### Question 7
Find the sum to n terms of the series: 1/(1·2) + 1/(2·3) + 1/(3·4) + ... + 1/[n(n + 1)].

**Solution:**
Notice that each term can be split using partial fractions:
1 / [k(k + 1)] = 1/k - 1/(k + 1).

Write out the terms:
- k = 1: 1/1 - 1/2
- k = 2: 1/2 - 1/3
- k = 3: 1/3 - 1/4
- ...
- k = n: 1/n - 1/(n + 1)

Adding all terms, the intermediate terms cancel out (telescoping):
Sₙ = 1 - 1/(n + 1)
= (n + 1 - 1) / (n + 1)
= n / (n + 1).

Jaanch:
- Jaanch: For n = 1: 1/(1·2) = 1/2. Formula: 1/(1 + 1) = 1/2 ✅
- Jaanch: For n = 2: 1/2 + 1/6 = 4/6 = 2/3. Formula: 2/(2 + 1) = 2/3 ✅

---

### Question 8
If a, b, c are in GP and a^(1/x) = b^(1/y) = c^(1/z), prove that x, y, z are in AP.

**Solution:**
Given: a^(1/x) = b^(1/y) = c^(1/z) = k (a constant).
Then:
a = kˣ, b = kʸ, c = kᶻ.

Since a, b, c are in GP:
b² = a · c.

Substitute the values in terms of k:
(kʸ)² = kˣ · kᶻ
k²ʸ = k^(x + z).

Equating exponents:
2y = x + z
y - x = z - y.

Therefore, x, y, z are in Arithmetic Progression (AP).

Jaanch:
- Let x = 1, y = 2, z = 3 (AP).
- Let k = 2. Then a = 2¹ = 2, b = 2² = 4, c = 2³ = 8.
- Jaanch: 2, 4, 8 is a GP with r = 2 ✅

---

### Question 9
Find the sum of the first n terms of the sequence 3, 7, 13, 21, 31, ...

**Solution:**
Let S = 3 + 7 + 13 + 21 + ... + Tₙ.
Write S shifted by one position:
S =     3 +  7 + 13 + ... + Tₙ₋₁ + Tₙ.

Subtracting:
0 = 3 + [ 4 + 6 + 8 + 10 + ... (n - 1 terms) ] - Tₙ
Tₙ = 3 + [ 4 + 6 + 8 + ... (n - 1 terms) ].

The terms in brackets form an AP with a = 4, d = 2, and number of terms = n - 1:
Sum = [(n - 1)/2] [ 2(4) + (n - 2)(2) ]
= [(n - 1)/2] [ 8 + 2n - 4 ]
= [(n - 1)/2] [ 2n + 4 ]
= (n - 1)(n + 2)
= n² + n - 2.

Therefore:
Tₙ = 3 + (n² + n - 2) = n² + n + 1.

Now sum Sₙ = Σₖ₌₁ⁿ Tₖ:
Sₙ = Σ k² + Σ k + Σ 1
= [ n(n + 1)(2n + 1) / 6 ] + [ n(n + 1) / 2 ] + n
= [ n(n + 1) / 6 ] [ (2n + 1) + 3 ] + n
= [ n(n + 1)(2n + 4) / 6 ] + n
= [ n(n + 1)(n + 2) / 3 ] + n
= (n / 3) [ (n + 1)(n + 2) + 3 ]
= (n / 3) [ n² + 3n + 5 ]
= n(n² + 3n + 5) / 3.

Jaanch:
- Jaanch: For n = 1: T₁ = 1 + 1 + 1 = 3. S₁ = 1(1 + 3 + 5)/3 = 9/3 = 3 ✅
- Jaanch: For n = 2: T₂ = 4 + 2 + 1 = 7. S₂ = 3 + 7 = 10. Formula: 2(4 + 6 + 5)/3 = 2(15)/3 = 10 ✅
- Jaanch: For n = 3: T₃ = 9 + 3 + 1 = 13. S₃ = 10 + 13 = 23. Formula: 3(9 + 9 + 5)/3 = 23 ✅

---

### Question 10
If S is the sum, P the product, and R the sum of reciprocals of n terms in a GP, prove that P² · Rⁿ = Sⁿ.

**Solution:**
Let the GP be a, ar, ar², ..., arⁿ⁻¹.
1. Sum:
   S = a(rⁿ - 1) / (r - 1).

2. Product:
   P = a · ar · ar² · ... · arⁿ⁻¹
   = aⁿ · r^[0 + 1 + 2 + ... + (n - 1)]
   = aⁿ · r^[n(n - 1)/2].
   So P² = a²ⁿ · r^[n(n - 1)].

3. Sum of reciprocals:
   R = 1/a + 1/(ar) + 1/(ar²) + ... + 1/(arⁿ⁻¹)
   This is a GP with first term 1/a and common ratio 1/r:
   R = (1/a) [ 1 - (1/r)ⁿ ] / [ 1 - 1/r ]
   = (1/a) [ (rⁿ - 1)/rⁿ ] / [ (r - 1)/r ]
   = (1/a) · [ (rⁿ - 1) / (r - 1) ] · [ r / rⁿ ]
   = [ (rⁿ - 1) / (r - 1) ] · [ 1 / (a · rⁿ⁻¹) ].

Notice that a(rⁿ - 1)/(r - 1) = S. So:
R = S / [ a² · rⁿ⁻¹ ].

Now take Rⁿ:
Rⁿ = Sⁿ / [ a²ⁿ · r^[n(n - 1)] ].

Multiply by P²:
P² · Rⁿ = [ a²ⁿ · r^[n(n - 1)] ] · [ Sⁿ / (a²ⁿ · r^[n(n - 1)]) ]
= Sⁿ.

Hence, P² · Rⁿ = Sⁿ is proved.

Jaanch:
- Let n = 2, a = 1, r = 2. Terms are 1, 2.
- S = 1 + 2 = 3.
- P = 1 × 2 = 2. P² = 4.
- R = 1/1 + 1/2 = 3/2. Rⁿ = R² = 9/4.
- P² · Rⁿ = 4 × (9/4) = 9.
- Sⁿ = S² = 3² = 9.
- Jaanch: Both equal 9 ✅

---

### Question 11
If the p-th term of an AP is 1/q and the q-th term is 1/p, find the sum of its first pq terms.

**Solution:**
Let first term be a and common difference be d.
Tₚ = a + (p - 1)d = 1/q   --- (1)
T_q = a + (q - 1)d = 1/p   --- (2)

Subtracting (2) from (1):
(p - q)d = 1/q - 1/p = (p - q)/(pq)
d = 1 / (pq).

Substitute d in (1):
a + (p - 1)/(pq) = 1/q
a + 1/q - 1/(pq) = 1/q
a = 1 / (pq).

Now find sum of first pq terms (S_pq):
S_pq = (pq / 2) [ 2a + (pq - 1)d ]
= (pq / 2) [ 2/(pq) + (pq - 1)/(pq) ]
= (pq / 2) [ (2 + pq - 1) / (pq) ]
= (pq / 2) [ (pq + 1) / (pq) ]
= (pq + 1) / 2.

Jaanch:
- Let p = 1, q = 2:
- T₁ = a = 1/2.
- T₂ = a + d = 1/1 = 1 => d = 1/2.
- pq = 2.
- S₂ = T₁ + T₂ = 1/2 + 1 = 3/2.
- Jaanch: Formula: (pq + 1)/2 = (2 + 1)/2 = 3/2 ✅

---

### Question 12
Between two numbers whose sum is 13/6, an even number of arithmetic means is inserted. The sum of these means exceeds their number by 1. Find the number of means inserted.

**Solution:**
Let the two numbers be a and b.
Given: a + b = 13/6.
Let the number of inserted arithmetic means be 2m (an even number, where n = 2m).

We know from the Arithmetic Mean Sum Theorem:
The sum of n inserted AMs between a and b is:
Sum of means = n · [(a + b) / 2].

Substitute n = 2m and a + b = 13/6:
Sum of means = 2m · [ (13/6) / 2 ]
= 2m · (13/12)
= 13m / 6.

Given condition: The sum of these means exceeds their number (2m) by 1:
(Sum of means) - (Number of means) = 1
13m/6 - 2m = 1
13m/6 - 12m/6 = 1
m / 6 = 1
m = 6.

The number of inserted means is:
n = 2m = 2(6) = 12.

Jaanch:
- For n = 12:
- Sum of means = 12 × [(13/6)/2] = 12 × (13/12) = 13.
- Number of means = 12.
- Jaanch: 13 exceeds 12 by 13 - 12 = 1 ✅

---

## Chapter Wrap-up Table

| Concept | Key Formula / Definition | Golden Rule / Pehchan |
|---|---|---|
| **Sequence vs Series** | Sequence: a₁, a₂, ...<br>Series: a₁ + a₂ + ... = Σ aₖ | List mein comma hota hai, Series mein jod (+) hota hai |
| **Arithmetic Progression (AP)** | aₙ = a + (n - 1)d<br>Sₙ = (n/2)[2a + (n - 1)d] | Har step par constant d add hota hai (aₖ - aₖ₋₁ = d) |
| **Single Arithmetic Mean (AM)** | A = (a + b) / 2 | a, A, b ek AP banate hain |
| **n Inserted AMs** | d = (b - a) / (n + 1)<br>Aₖ = a + k·d | Total terms n + 2 hote hain, isliye denominator n + 1 hai |
| **Sum of n Inserted AMs** | Σₖ₌₁ⁿ Aₖ = n · A = n · (a + b)/2 | n inserted means ka jod = n × unka single AM |
| **Geometric Progression (GP)** | aₙ = a · rⁿ⁻¹<br>Sₙ = a(1 - rⁿ) / (1 - r) | Har step par constant r multiply hota hai (aₖ / aₖ₋₁ = r) |
| **Single Geometric Mean (GM)** | G = √(ab) | Positive real numbers ke liye a, G, b ek GP banate hain |
| **n Inserted GMs** | r = (b / a)^(1 / (n + 1))<br>Gₖ = a · rᵏ | Total terms n + 2 hote hain, isliye root power 1/(n + 1) hai |
| **Product of n Inserted GMs** | Πₖ₌₁ⁿ Gₖ = Gⁿ = [√(ab)]ⁿ | n inserted means ka product = (single GM)ⁿ |
| **Sum of Infinite GP** | S_∞ = a / (1 - r) | Sirf tab valid hai jab -1 < r < 1 < 1 ho (warna series diverge karti hai) |
| **AM-GM Inequality** | A ≥ G  [ (a + b)/2 ≥ √(ab) ] | Positive real numbers ke liye; equality tabhi hoti hai jab a = b ho |
| **Roots from AM and GM** | x² - 2Ax + G² = 0<br>x = A ± √(A² - G²) | Real roots exist karne ke liye discriminant A² - G² ≥ 0 (A ≥ G) |
| **Sum of Natural Numbers (Σ n)** | Σ k = n(n + 1) / 2 | 1 + 2 + ... + n |
| **Sum of Squares (Σ n²)** | Σ k² = n(n + 1)(2n + 1) / 6 | Derived via telescoping: k³ - (k - 1)³ = 3k² - 3k + 1 |
| **Sum of Cubes (Σ n³)** | Σ k³ = [ n(n + 1) / 2 ]² = (Σ k)² | First n cubes ka jod = (first n natural numbers ke jod)² |
| **Arithmetico-Geometric (AGP)** | S = a + (a+d)r + (a+2d)r² + ...<br>S_∞ = a/(1 - r) + dr/(1 - r)² | r se multiply karke ek step right shift karo aur subtract karo |

---

Ab tumne Sequences and Series ke har topic — AP, GP, Means, AM ≥ GM inequality, Special series, aur AGP — ko poori tarah master kar liya hai! 

Agle chapter **Straight Lines** mein hum algebra ko coordinate plane (geometry) par utaarenge — jahan points, slopes, lines ki alag-alag forms, aur do lines ke beech ke angles Cartesian space mein zinda ho uthte hain!
