# Chapter: Sequences and Series (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [sequences-and-series-part3.md](sequences-and-series-part3.md) tha** (Topic 3: Relation between AM and GM, AM ≥ GM Inequality).
> **Topics covered in this file:**
> 1. Special Series: Sum of First n Natural Numbers, Their Squares, Aur Cubes

---

# Topic 4: Special Series: Sum of First n Natural Numbers, Their Squares, Aur Cubes

Pichhle topics mein humne dekha ki jab terms AP ya GP mein hote hain, to hum standard formulas se unka sum nikaal lete hain. Lekin tab kya hota hai jab series na to seedhi AP ho aur na hi GP?

Jaise:
- 1² + 2² + 3² + ... + n²  (Squares ka jod)
- 1³ + 2³ + 3³ + ... + n³  (Cubes ka jod)
- 1·2 + 2·3 + 3·4 + ... + n(n + 1)  (Consecutive numbers ke products ka jod)

Aisi series ko hum **Special Series** kehte hain! Is topic mein hum in teeno standard formulas ko algebraically derive karenge (telescoping method se) aur seekhenge ki kisi bhi aisi series ka sum kaise nikaala jata hai jiska n-th term n ka koi polynomial ho!

---

## Niharika ka temple diya pyramid

Niharika ek traditional brass lamp artisan hai. Diwali ke avsar par use mandir ke courtyard mein brass oil diya trays ka ek shandaar square pyramid structure taiyar karna tha:
- Sabse upar (Level 1): 1 diya (1 × 1 = 1² = 1)
- Doosre level par: 2 × 2 = 2² = 4 diye
- Teesri level par: 3 × 3 = 3² = 9 diye
- Chauthe level par: 4 × 4 = 4² = 16 diye
- ...
- Aakhri level n = 10 par: 10 × 10 = 10² = 100 diye!

Niharika ke chacha ji ne poochha: "Niharika, 10 levels ke is poore pyramid mein kul kitne diye lagenge? Kya tum 1 + 4 + 9 + 16 + ... + 100 ek-ek karke jodogi?"

Niharika ne kaagaz par formula likha:
"Chacha ji, squares ke sum ka formula hota hai: S = n(n + 1)(2n + 1) / 6!
n = 10 rakhne par:
S = 10 × 11 × (2 × 10 + 1) / 6
S = 10 × 11 × 21 / 6
S = 2310 / 6 = 385 diye!
Bina ek-ek jode, theek 5 second mein exact ginti!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Special Series** | Aisi series jisme terms natural numbers ki powers (k, k², k³) ya unke polynomials hote hain | Σ k², Σ k³, Σ n(n + 1) |
| **Sum of Natural Numbers (Σ n)** | Pehle n natural numbers ka jod | n(n + 1)/2 |
| **Sum of Squares (Σ n²)** | Pehle n natural numbers ke squares ka jod | n(n + 1)(2n + 1)/6 |
| **Sum of Cubes (Σ n³)** | Pehle n natural numbers ke cubes ka jod | [n(n + 1)/2]² |
| **Telescoping Identity** | Ek aisi identity jisme lagatar terms ek-doosre ko cancel kar dete hain | k³ - (k - 1)³ = 3k² - 3k + 1 |

---

## Part A: Sum of First n Natural Numbers (Σ n)

Series:
S = 1 + 2 + 3 + ... + n = Σₖ₌₁ⁿ k

Yeh ek simple AP hai jiska pehla term a = 1, common difference d = 1, aur aakhri term l = n hai.
AP sum formula Sₙ = (n/2)[a + l] se:
**Σₖ₌₁ⁿ k = n(n + 1) / 2**

Example: Pehle 20 natural numbers ka jod:
Σₖ₌₁²⁰ k = 20(21) / 2 = 10 × 21 = 210.

---

## Part B: Sum of First n Squares (Σ n²) — Telescoping Derivation

Series:
Sₙ = 1² + 2² + 3² + ... + n² = Σₖ₌₁ⁿ k²

### "Kyun" Aata Hai Yeh Formula?
Is derivation ke liye hum standard algebraic cubic identity use karte hain:
k³ - (k - 1)³

LHS ko expand karte hain:
(k - 1)³ = k³ - 3k² + 3k - 1
Isliye:
k³ - (k - 1)³ = k³ - (k³ - 3k² + 3k - 1)
**k³ - (k - 1)³ = 3k² - 3k + 1**

Ab is identity mein k = 1, 2, 3, ..., n lagatar rakhte hain:
- k = 1:  1³ - 0³ = 3(1²) - 3(1) + 1
- k = 2:  2³ - 1³ = 3(2²) - 3(2) + 1
- k = 3:  3³ - 2³ = 3(3²) - 3(3) + 1
- ...
- k = n:  n³ - (n - 1)³ = 3(n²) - 3(n) + 1

In sabhi n equations ko vertically jod dete hain!

### LHS Ka Jaadoo (Telescoping Cancellation):
(1³ - 0³) + (2³ - 1³) + (3³ - 2³) + ... + (n³ - (n - 1)³)
Dekho:
1³ se -1³ cancel, 2³ se -2³ cancel, 3³ se -3³ cancel...
Sirf sabse bada term n³ aur sabse chhota term 0³ bachta hai!
LHS = n³ - 0³ = n³.

### RHS:
3 [1² + 2² + ... + n²] - 3 [1 + 2 + ... + n] + [1 + 1 + ... + 1 (n times)]
RHS = 3 Σ k² - 3 [n(n + 1)/2] + n

Ab LHS aur RHS ko barabar rakhte hain:
n³ = 3 Σ k² - [3n(n + 1)/2] + n
3 Σ k² = n³ + [3n(n + 1)/2] - n
3 Σ k² = (n³ - n) + [3n(n + 1)/2]
3 Σ k² = n(n² - 1) + [3n(n + 1)/2]
3 Σ k² = n(n - 1)(n + 1) + [3n(n + 1)/2]

Common factor n(n + 1) bahar nikalte hain:
3 Σ k² = n(n + 1) [ (n - 1) + 3/2 ]
3 Σ k² = n(n + 1) [ (2n - 2 + 3)/2 ]
3 Σ k² = n(n + 1)(2n + 1) / 2

Dono taraf 3 se divide karne par:
**Σₖ₌₁ⁿ k² = n(n + 1)(2n + 1) / 6**

```
Telescoping Column Addition:
  1³ - 0³ = 3(1²) - 3(1) + 1
  2³ - 1³ = 3(2²) - 3(2) + 1
  3³ - 2³ = 3(3²) - 3(3) + 1
       ...
  n³ - (n-1)³ = 3(n²) - 3(n) + 1
---------------------------------------------
  n³ - 0³ = 3 Σ k² - 3 Σ k + n
```

---

## Part C: Sum of First n Cubes (Σ n³)

Series:
Sₙ = 1³ + 2³ + 3³ + ... + n³ = Σₖ₌₁ⁿ k³

Isi tarah identity k⁴ - (k - 1)⁴ = 4k³ - 6k² + 4k - 1 ko telescope karne par hairatangez nateeja milta hai:

**Σₖ₌₁ⁿ k³ = [ n(n + 1) / 2 ]² = (Σₖ₌₁ⁿ k)²**

### Ek Khoobsurat Nateeja:
Pehle n cubes ka jod, pehle n natural numbers ke jod ka theek **square** hota hai!
1³ + 2³ + 3³ + ... + n³ = (1 + 2 + 3 + ... + n)²

Small check:
- n = 1: 1³ = 1, aur 1² = 1.
- n = 2: 1³ + 2³ = 1 + 8 = 9, aur (1 + 2)² = 3² = 9.
- n = 3: 1³ + 2³ + 3³ = 9 + 27 = 36, aur (1 + 2 + 3)² = 6² = 36.
- n = 4: 1³ + 2³ + 3³ + 4³ = 36 + 64 = 100, aur (1 + 2 + 3 + 4)² = 10² = 100.

---

## Part D: Finding Sum to n Terms When Tₙ is Given

Agar kisi series ka n-th term Tₙ ek algebraic expression ho, to pehle use simplify karke powers of n mein likho, aur fir har power par standard formula laga do:
Sₙ = Σₖ₌₁ⁿ Tₖ

### Common Standard Patterns:
1. Agar Tₙ = n(n + 1):
   Tₙ = n² + n
   Sₙ = Σ n² + Σ n
   = [n(n + 1)(2n + 1)/6] + [n(n + 1)/2]
   = n(n + 1)/2 [ (2n + 1)/3 + 1 ]
   = n(n + 1)/2 [ (2n + 4)/3 ]
   = n(n + 1)(n + 2) / 3.

2. Agar series 1 se shuru na ho (Partial Sum):
   Jaise 11² + 12² + ... + 20²:
   Ise seedhe n = 10 nahi rakh sakte!
   Ise todte hain:
   (1² + 2² + ... + 20²) - (1² + 2² + ... + 10²)
   = S₂₀ - S₁₀.

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 4.1: Sum of First 12 Squares
**Sawaal:** 1² + 2² + 3² + ... + 12² ka maan gyat karo.

**Solution:**
Yahan n = 12.
Squares ka sum formula:
Σₖ₌₁ⁿ k² = n(n + 1)(2n + 1) / 6

Substitute n = 12:
S₁₂ = 12(12 + 1)(2 × 12 + 1) / 6
= 12(13)(25) / 6
= 2 × 13 × 25
= 26 × 25
= 650.

Jaanch:
- 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 + 121 + 144
- Jaanch: = 30 + 55 + 91 + 140 + 204 + 285 + 385 + 506 + 650 = 650 ✅

---

### Example 4.2: Sum of First 10 Cubes
**Sawaal:** 1³ + 2³ + 3³ + ... + 10³ ka maan gyat karo.

**Solution:**
Yahan n = 10.
Cubes ka sum formula:
Σₖ₌₁ⁿ k³ = [ n(n + 1) / 2 ]²

Substitute n = 10:
S₁₀ = [ 10(11) / 2 ]²
= [ 55 ]²
= 3025.

Jaanch:
- Jaanch: 55² = (50 + 5)² = 2500 + 500 + 25 = 3025 ✅
- Jaanch: 1 + 8 + 27 + 64 + 125 + 216 + 343 + 512 + 729 + 1000 = 3025 ✅

---

### Example 4.3: Sum of Series With Tₙ = n(n + 3)
**Sawaal:** Us series ke n terms ka sum gyat karo jiska n-th term Tₙ = n(n + 3) hai.

**Solution:**
Tₙ = n² + 3n.
Sₙ = Σₖ₌₁ⁿ Tₖ = Σₖ₌₁ⁿ k² + 3 Σₖ₌₁ⁿ k
= [ n(n + 1)(2n + 1) / 6 ] + 3 [ n(n + 1) / 2 ]

Dono terms mein se n(n + 1)/6 common nikaalte hain:
Sₙ = [ n(n + 1) / 6 ] [ (2n + 1) + 3 × 3 ]
= [ n(n + 1) / 6 ] [ 2n + 1 + 9 ]
= [ n(n + 1) / 6 ] [ 2n + 10 ]
= [ n(n + 1) / 6 ] · 2(n + 5)
= n(n + 1)(n + 5) / 3.

Jaanch:
- Jaanch: For n = 1: T₁ = 1(4) = 4. S₁ = 1(2)(6)/3 = 12/3 = 4 ✅
- Jaanch: For n = 2: T₂ = 2(5) = 10. S₂ = 4 + 10 = 14. Formula se: S₂ = 2(3)(7)/3 = 42/3 = 14 ✅
- Jaanch: For n = 3: T₃ = 3(6) = 18. S₃ = 14 + 18 = 32. Formula se: S₃ = 3(4)(8)/3 = 32 ✅

---

### Example 4.4: Partial Sum of Squares
**Sawaal:** 11² + 12² + 13² + ... + 20² ka maan gyat karo.

**Solution:**
Yeh series 11 se shuru hoti hai.
Hum ise pehle 20 squares ke sum mein se pehle 10 squares ka sum ghata kar nikalte hain:
Sum = (1² + 2² + ... + 20²) - (1² + 2² + ... + 10²)
= S₂₀ - S₁₀

S₂₀:
S₂₀ = 20(21)(41) / 6 = 10(7)(41) = 70 × 41 = 2870.

S₁₀:
S₁₀ = 10(11)(21) / 6 = 5(11)(7) = 385.

Sum = 2870 - 385 = 2485.

Jaanch:
- Jaanch: S₂₀ = 2870 ✅
- Jaanch: S₁₀ = 385 ✅
- Jaanch: 2870 - 385 = 2485 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Σ n² ko (Σ n)² likh dena
- **Galat soch:** "Squares ka jod = (natural numbers ke jod) ka square, yaani Σ n² = [n(n + 1)/2]²."
- **Sahi samajh:** [n(n + 1)/2]² formula **cubes ke jod (Σ n³)** ka hota hai! Squares ka formula n(n + 1)(2n + 1)/6 hota hai. Dono mein zameen-aasman ka fark hai.
- **Demonstration:**
  n = 2 ke liye:
  Squares ka jod: 1² + 2² = 1 + 4 = 5.
  Galat formula se: [2(3)/2]² = 3² = 9. 5 ≠ 9!

### Galti 2: Sigma ko product par distribute kar dena: Σ (aₙ · bₙ) = (Σ aₙ)(Σ bₙ)
- **Galat soch:** "Σ n(n + 1) = (Σ n) · (Σ (n + 1))."
- **Sahi samajh:** Sigma jod (+) aur ghatav (-) par alag hota hai, multiplication (×) par nahi! Multiplication ke liye pehle bracket ko kholkar expand karna padta hai: n(n + 1) = n² + n, fir Σ n² + Σ n likhte hain.

### Galti 3: Non-1 starting series mein seedhe formula laga dena
- **Galat soch:** "11² + 12² + ... + 20² mein 10 terms hain, to n = 10 formula mein rakh dete hain."
- **Sahi samajh:** Standard formulas Σ k² hamesha k = 1 se start hone chahiye! Agar series 11 se shuru ho rahi hai, to pehle 1 se 20 tak ka sum nikaalo, aur usme se 1 se 10 tak ka sum ghatao (S₂₀ - S₁₀).

---

## Quick Recap

- **Sum of first n natural numbers:** Σ k = n(n + 1) / 2.
- **Sum of first n squares:** Σ k² = n(n + 1)(2n + 1) / 6.
- **Sum of first n cubes:** Σ k³ = [ n(n + 1) / 2 ]² = (Σ k)².
- **Telescoping identity for squares:** k³ - (k - 1)³ = 3k² - 3k + 1.
- **Polynomial general term:** Tₙ = an² + bn + c => Sₙ = a Σ n² + b Σ n + cn.
- **Consecutive products:** Σ n(n + 1) = n(n + 1)(n + 2) / 3.
- **Partial sum from m to n:** Σₖ₌ₘⁿ Tₖ = Sₙ - Sₘ₋₁.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the sum of the first 30 natural numbers.

**Solution:**
Formula: Σₖ₌₁ⁿ k = n(n + 1) / 2.
Here n = 30.
S₃₀ = 30(31) / 2 = 15 × 31 = 465.

Jaanch:
- Jaanch: 15 × 31 = 465 ✅

---

### Question 2
Find the sum of the squares of the first 15 natural numbers: 1² + 2² + 3² + ... + 15².

**Solution:**
Formula: Σₖ₌₁ⁿ k² = n(n + 1)(2n + 1) / 6.
Here n = 15.
2n + 1 = 2(15) + 1 = 31.
S₁₅ = 15(16)(31) / 6
= 5(8)(31) = 40 × 31 = 1240.

Jaanch:
- Jaanch: 15 × 16 × 31 / 6 = 7440 / 6 = 1240 ✅

---

### Question 3
Find the sum of the cubes of the first 8 natural numbers: 1³ + 2³ + ... + 8³.

**Solution:**
Formula: Σₖ₌₁ⁿ k³ = [ n(n + 1) / 2 ]².
Here n = 8.
S₈ = [ 8(9) / 2 ]² = [ 36 ]² = 1296.

Jaanch:
- Jaanch: 36² = 1296 ✅
- Jaanch: 1 + 8 + 27 + 64 + 125 + 216 + 343 + 512 = 1296 ✅

---

### Question 4
Find the sum to n terms of the series whose n-th term is Tₙ = n(n - 1).

**Solution:**
Tₙ = n² - n.
Sₙ = Σₖ₌₁ⁿ k² - Σₖ₌₁ⁿ k
= [ n(n + 1)(2n + 1) / 6 ] - [ n(n + 1) / 2 ]
= [ n(n + 1) / 6 ] [ (2n + 1) - 3 ]
= [ n(n + 1) / 6 ] [ 2n - 2 ]
= [ n(n + 1) / 6 ] · 2(n - 1)
= n(n - 1)(n + 1) / 3
= (n³ - n) / 3.

Jaanch:
- Jaanch: For n = 1: T₁ = 0. S₁ = 1(0)(2)/3 = 0 ✅
- Jaanch: For n = 2: T₂ = 2(1) = 2. S₂ = 0 + 2 = 2. Formula: 2(1)(3)/3 = 2 ✅
- Jaanch: For n = 3: T₃ = 3(2) = 6. S₃ = 2 + 6 = 8. Formula: 3(2)(4)/3 = 8 ✅

---

### Question 5
Find the sum to n terms of the series: 1·3 + 2·4 + 3·5 + ... + n(n + 2).

**Solution:**
Here n-th term Tₙ = n(n + 2) = n² + 2n.
Sₙ = Σₖ₌₁ⁿ k² + 2 Σₖ₌₁ⁿ k
= [ n(n + 1)(2n + 1) / 6 ] + 2 [ n(n + 1) / 2 ]
= [ n(n + 1) / 6 ] [ (2n + 1) + 6 ]
= [ n(n + 1) / 6 ] [ 2n + 7 ]
= n(n + 1)(2n + 7) / 6.

Jaanch:
- Jaanch: For n = 1: T₁ = 1(3) = 3. S₁ = 1(2)(9)/6 = 18/6 = 3 ✅
- Jaanch: For n = 2: T₂ = 2(4) = 8. S₂ = 3 + 8 = 11. Formula: 2(3)(11)/6 = 11 ✅

---

### Question 6
Find the sum of the series: 5² + 6² + 7² + ... + 20².

**Solution:**
Sum = (1² + 2² + ... + 20²) - (1² + 2² + 3² + 4²)
= S₂₀ - S₄

S₂₀ = 20(21)(41) / 6 = 2870.
S₄ = 4(5)(9) / 6 = 180 / 6 = 30.

Sum = 2870 - 30 = 2840.

Jaanch:
- Jaanch: S₂₀ = 2870 ✅
- Jaanch: 1 + 4 + 9 + 16 = 30 ✅
- Jaanch: 2870 - 30 = 2840 ✅

---

### Question 7
Find the sum of the series of odd squares to n terms: 1² + 3² + 5² + ... + (2n - 1)².

**Solution:**
Here n-th term is Tₙ = (2n - 1)².
Expand Tₙ:
Tₙ = 4n² - 4n + 1.

Sum Sₙ = 4 Σ n² - 4 Σ n + Σ 1
= 4 [ n(n + 1)(2n + 1) / 6 ] - 4 [ n(n + 1) / 2 ] + n
= [ 2n(n + 1)(2n + 1) / 3 ] - 2n(n + 1) + n
= (n / 3) [ 2(n + 1)(2n + 1) - 6(n + 1) + 3 ]
= (n / 3) [ 2(2n² + 3n + 1) - 6n - 6 + 3 ]
= (n / 3) [ 4n² + 6n + 2 - 6n - 6 + 3 ]
= (n / 3) [ 4n² - 1 ]
= n(2n - 1)(2n + 1) / 3.

Jaanch:
- Jaanch: For n = 1: 1² = 1. Formula: 1(1)(3)/3 = 1 ✅
- Jaanch: For n = 2: 1 + 9 = 10. Formula: 2(3)(5)/3 = 10 ✅
- Jaanch: For n = 3: 1 + 9 + 25 = 35. Formula: 3(5)(7)/3 = 35 ✅

---

### Question 8
Evaluate 1³ + 2³ + 3³ + ... + 15³.

**Solution:**
Formula: Σ k³ = [ n(n + 1) / 2 ]².
Here n = 15.
Sum = [ 15(16) / 2 ]² = [ 15 × 8 ]² = [ 120 ]² = 14400.

Jaanch:
- Jaanch: 120² = 14400 ✅

---

### Question 9
Find the sum to n terms of the series whose n-th term is Tₙ = 2n² - 3n + 5.

**Solution:**
Sₙ = Σ Tₖ = 2 Σ k² - 3 Σ k + 5 Σ 1
= 2 [ n(n + 1)(2n + 1) / 6 ] - 3 [ n(n + 1) / 2 ] + 5n
= [ n(n + 1)(2n + 1) / 3 ] - [ 3n(n + 1) / 2 ] + 5n
Take LCM = 6:
Sₙ = (n / 6) [ 2(n + 1)(2n + 1) - 9(n + 1) + 30 ]
= (n / 6) [ 2(2n² + 3n + 1) - 9n - 9 + 30 ]
= (n / 6) [ 4n² + 6n + 2 - 9n + 21 ]
= (n / 6) [ 4n² - 3n + 23 ]
= n(4n² - 3n + 23) / 6.

Jaanch:
- Jaanch: For n = 1: T₁ = 2(1) - 3(1) + 5 = 4. Formula: 1(4 - 3 + 23)/6 = 24/6 = 4 ✅
- Jaanch: For n = 2: T₂ = 2(4) - 3(2) + 5 = 8 - 6 + 5 = 7. S₂ = 4 + 7 = 11. Formula: 2(16 - 6 + 23)/6 = 2(33)/6 = 11 ✅

---

### Question 10
Find the sum of the cubes from 6 to 10: 6³ + 7³ + 8³ + 9³ + 10³.

**Solution:**
Sum = (1³ + 2³ + ... + 10³) - (1³ + 2³ + ... + 5³)
= S₁₀ - S₅

S₁₀ = [ 10(11) / 2 ]² = 55² = 3025.
S₅ = [ 5(6) / 2 ]² = 15² = 225.

Sum = 3025 - 225 = 2800.

Jaanch:
- Direct: 6³ = 216, 7³ = 343, 8³ = 512, 9³ = 729, 10³ = 1000.
- Jaanch: 216 + 343 + 512 + 729 + 1000 = 2800 ✅

---

### Question 11
Find the sum to n terms of the series: 1·2·3 + 2·3·4 + 3·4·5 + ... + n(n + 1)(n + 2).

**Solution:**
Tₙ = n(n + 1)(n + 2) = n(n² + 3n + 2) = n³ + 3n² + 2n.
Sₙ = Σ n³ + 3 Σ n² + 2 Σ n
= [ n(n + 1) / 2 ]² + 3 [ n(n + 1)(2n + 1) / 6 ] + 2 [ n(n + 1) / 2 ]
= [ n²(n + 1)² / 4 ] + [ n(n + 1)(2n + 1) / 2 ] + n(n + 1)

Take common factor [ n(n + 1) / 4 ]:
Sₙ = [ n(n + 1) / 4 ] [ n(n + 1) + 2(2n + 1) + 4 ]
= [ n(n + 1) / 4 ] [ n² + n + 4n + 2 + 4 ]
= [ n(n + 1) / 4 ] [ n² + 5n + 6 ]
= [ n(n + 1) / 4 ] (n + 2)(n + 3)
= n(n + 1)(n + 2)(n + 3) / 4.

Jaanch:
- Jaanch: For n = 1: T₁ = 1·2·3 = 6. S₁ = 1(2)(3)(4)/4 = 6 ✅
- Jaanch: For n = 2: T₂ = 2·3·4 = 24. S₂ = 6 + 24 = 30. Formula: 2(3)(4)(5)/4 = 30 ✅

---

### Question 12
Show that the ratio of the sum of cubes of first n natural numbers to the sum of first n natural numbers is n(n + 1) / 2.

**Solution:**
Sum of first n cubes:
S_cubes = Σₖ₌₁ⁿ k³ = [ n(n + 1) / 2 ]².

Sum of first n natural numbers:
S_numbers = Σₖ₌₁ⁿ k = n(n + 1) / 2.

Ratio:
Ratio = S_cubes / S_numbers
= [ n(n + 1) / 2 ]² / [ n(n + 1) / 2 ]
= n(n + 1) / 2.

Jaanch:
- Jaanch: For n = 3: S_cubes = 1 + 8 + 27 = 36. S_numbers = 1 + 2 + 3 = 6. Ratio = 36 / 6 = 6. Formula: 3(4)/2 = 6 ✅

---

Ab tumne dekh liya ki special series ke sums kaise nikaale jaate hain aur polynomial n-th term ka sum kaise systematically calculate kiya jata hai. Agle aur aakhri topic [sequences-and-series-part5.md](sequences-and-series-part5.md) mein hum sabhi concepts ko ek saath jodenge — **Sab Kuch Mila Kar: Mixed Problems, AGP, Chapter Wrap-up Table**, aur agle chapter ka teaser!
