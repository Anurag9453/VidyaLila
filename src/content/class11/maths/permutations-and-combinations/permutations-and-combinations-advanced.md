# Chapter: Permutations and Combinations (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [permutations-and-combinations-part4.md](permutations-and-combinations-part4.md) (Topic 4: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Circular Permutations, Stars & Bars (Integral Solutions), Derangements (Dₙ), aur Legendre's Prime Exponent Formula ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Circular Permutations ((n - 1)! & Necklace Rule), Stars & Bars (Identical Objects Distribution), Derangements (Dₙ), Legendre's Formula (Trailing Zeros in n!), Aur Geometric Counting

---

# Gehrai Mein: Advanced Combinatorics Techniques

Core chapter mein tumne linear arrangements (ⁿPᵣ) aur selections (ⁿCᵣ) seekhe. Lekin jab log **gol mez (round table)** par baithte hain, ya **10 identical laddoos** ko 4 bachchon mein baantna ho, ya **100!** ke aakhir mein kitne zeros aayenge yeh ginnana ho — to yeh chaar advanced combinatorics weapons game-changer ban jaate hain!

---

## Omprakash ka round-table conference banquet

Omprakash ek international science conference ka banquet coordinator hai. Uske saamne teen unique counting challenges aaye:
1. 6 keynote speakers ko ek **gol mez (round table)** par kitne tareekon se bithaya jaye? (Line mein 6! = 720, par gol mez par rotation same hoti hai => (6 - 1)! = **5! = 120**!)
2. 10 **identical** gift vouchers ko 4 volunteer teams mein kitne tareekon se baantein? (**Stars & Bars** se ¹³C₃ = **286**!)
3. 4 speakers ke name-badges galti se mix ho gaye — kitne tareekon se **kisi ko bhi apna sahi badge na mile**? (**Derangement D₄ = 9**!)

---

## Part A: Circular Permutations ("Kyun" (n - 1)!?)

Ek gol mez par koi "pehli" ya "aakhri" kursi nahi hoti — poori circle ko rotate karne par wahi relative order milta hai!
- **Rule 1 (Standard Circular — Clockwise ≠ Anticlockwise, e.g. people around a table):**
  1 insaan ko fix kar do (reference point!), baaki (n - 1) logon ko **(n - 1)!** tareekon se arrange karo!
- **Rule 2 (Necklace / Garland — Clockwise = Anticlockwise, can be flipped upside down):**
  Number of distinct arrangements = **(n - 1)! / 2**   *(for n ≥ 3)*.

---

## Part B: Stars & Bars (Distributing n Identical Objects Into r Distinct Boxes)

Sawaal: Equation **x₁ + x₂ + ... + xᵣ = n** ke kitne integral solutions hain?

### 1. Non-Negative Integral Solutions (xᵢ ≥ 0 — koi box khali bhi reh sakta hai!):
Socho tumhare paas **n identical stars (*)** aur **(r - 1) identical dividers (/)** hain.
Kul (n + r - 1) jagahon mein se (r - 1) dividers rakhne ke tareeke = **ⁿ⁺ʳ⁻¹Cᵣ₋₁**!

### 2. Positive Integral Solutions (xᵢ ≥ 1 — har box mein kam se kam 1 object!):
Pehle har ek box ko 1-1 object de do! Ab bache **(n - r)** identical objects ko r boxes mein non-negative tareeke se baanto:
**(n - r) + r - 1 choose (r - 1) = ⁿ⁻¹Cᵣ₋₁**!

---

## Part C: Derangements (Dₙ — Sab Galat Jagah!)

Agar n letters ko unke n addressed envelopes mein is tarah daala jaye ki **ek bhi letter apne sahi envelope mein na jaye**, to aise arrangements ko **Derangements (Dₙ)** kehte hain!

Inclusion-Exclusion Principle se (stated, checked on small n):
**Dₙ = n! [ 1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ / n! ]**

Yaad rakhne layak golden values:
- **D₁ = 0** (1 letter galat nahi ja sakta)
- **D₂ = 1**
- **D₃ = 2**
- **D₄ = 9**
- **D₅ = 44**

---

## Part D: Legendre's Formula (Prime Exponent In n!) & Geometric Counting

1. **Highest power of a prime p dividing n!:**
   **E_p(n!) = [n / p] + [n / p²] + [n / p³] + ...**   *(jahan [·] Greatest Integer hai, jab tak quotient 0 na ho jaye!)*
   - **Trailing zeros in n!:** Har 10 = 2 × 5 se ek zero banta hai. Kyunki 2 ki power hamesha 5 se zyada hoti hai, trailing zeros = **E₅(n!)**!
2. **Geometric Counting:**
   - Number of diagonals in a convex n-gon = **ⁿC₂ - n = n(n - 3)/2**.
   - Number of triangles from n points where m points are collinear = **ⁿC₃ - ᵐC₃**.
   - Number of straight lines from n points where m points are collinear = **ⁿC₂ - ᵐC₂ + 1** *(+1 kyunki woh m points khud 1 line banate hain!)*.

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Circular Seating With A Restriction
**Sawaal:** 5 boys aur 5 girls ko ek round table par is tarah bithana hai ki **koi bhi do girls ek saath na baithein**. Kul kitne tareeke honge?

**Solution:**
1. Pehle 5 boys ko round table par bithao: (5 - 1)! = **4! = 24** ways.
2. 5 boys ke beech exact **5 gaps** banenge!
3. Ab in 5 gaps mein 5 girls ko arrange karo (linearly, kyunki boys ne positions fix kar di hain!): **5! = 120** ways.

Total ways = 4! × 5! = 24 × 120 = **2,880**.

Jaanch:
- Jaanch: Circular symmetry pehle hi boys ke (5 - 1)! mein account ho gayi, isliye girls ke liye full 5! lagega: 24 × 120 = 2880 ✅

---

### Problem 2: Integral Solutions With Lower Bounds (Stars & Bars)
**Sawaal:** Equation **x₁ + x₂ + x₃ + x₄ = 20** ke kitne integral solutions hain jahan x₁ ≥ 1, x₂ ≥ 2, x₃ ≥ 3, x₄ ≥ 0?

**Solution:**
Pehle sabhi lower bounds de do (shift variables):
Let y₁ = x₁ - 1 ≥ 0, y₂ = x₂ - 2 ≥ 0, y₃ = x₃ - 3 ≥ 0, y₄ = x₄ ≥ 0.
Equation ban jaati hai:
y₁ + y₂ + y₃ + y₄ = 20 - (1 + 2 + 3 + 0) = **14** (sabhi yᵢ ≥ 0!).

Stars & Bars with n = 14, r = 4:
¹⁴⁺⁴⁻¹C₄₋₁ = **¹⁷C₃** = (17 × 16 × 15) / 6 = 17 × 8 × 5 = **680**.

Jaanch:
- Jaanch: 1 + 2 + 3 + 0 = 6 subtracted from 20 leaves 14; ¹⁷C₃ = 680 ✅

---

### Problem 3: Derangements With Exactly One Fixed Element
**Sawaal:** 5 letters aur 5 addressed envelopes hain. Kitne tareekon se **exactly 1 letter** apne sahi envelope mein jaye aur baaki 4 sab galat envelopes mein jayein?

**Solution:**
1. 5 mein se woh **1 letter** chuno jo sahi envelope mein jayega: **⁵C₁ = 5** ways.
2. Baaki 4 letters ko unke 4 envelopes mein **completely derange** karo: **D₄ = 9** ways!

Total ways = 5 × 9 = **45**.

Jaanch:
- Jaanch: Check D₄ = 24(1 - 1 + 1/2 - 1/6 + 1/24) = 12 - 4 + 1 = 9; 5 × 9 = 45 ✅

---

### Problem 4: Number Of Trailing Zeros In 100!
**Sawaal:** 100! ke aakhir mein kitne consecutive zeros (trailing zeros) aate hain?

**Solution:**
Trailing zeros = E₅(100!) (exponent of prime 5 in 100!):
E₅(100!) = [100 / 5] + [100 / 25] + [100 / 125]
= 20 + 4 + 0 = **24 trailing zeros**!

Jaanch:
- Jaanch: 20 multiples of 5 (5, 10, ..., 100) + 4 extra factors of 5 from multiples of 25 (25, 50, 75, 100) = 24 ✅

---

### Problem 5: Geometric Counting With Collinear Points
**Sawaal:** Ek plane mein 12 points hain jinme se 5 points ek hi straight line par (collinear) hain (baaki koi 3 collinear nahi). Inse kitni (a) distinct straight lines aur (b) triangles ban sakte hain?

**Solution:**
- **(a) Straight lines:** ¹²C₂ - ⁵C₂ + 1 = 66 - 10 + 1 = **57 lines**.
- **(b) Triangles:** ¹²C₃ - ⁵C₃ = 220 - 10 = **210 triangles**.

Jaanch:
- Jaanch: ¹²C₂ = 66, ⁵C₂ = 10 => 66 - 10 + 1 = 57; ¹²C₃ = 220, ⁵C₃ = 10 => 220 - 10 = 210 ✅

---

### Problem 6: Inequality x₁ + x₂ + x₃ ≤ 10 (Slack Variable Trick!)
**Sawaal:** Inequality **x₁ + x₂ + x₃ ≤ 10** ke kitne non-negative integral solutions (xᵢ ≥ 0) hain?

**Solution:**
Ek extra non-negative "slack variable" **x₄ ≥ 0** add karke inequality ko equation bana do!
**x₁ + x₂ + x₃ + x₄ = 10**   *(x₁, x₂, x₃, x₄ ≥ 0!)*

Ab Stars & Bars lagao (n = 10, r = 4):
¹⁰⁺⁴⁻¹C₄₋₁ = **¹³C₃** = (13 × 12 × 11) / 6 = 13 × 2 × 11 = **286**.

Jaanch:
- Jaanch: Sum of ᵏ⁺²C₂ for k = 0..10 by Hockey-Stick Identity = ¹³C₃ = 286 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Circular seating mein dono groups par (n - 1)! laga dena
- **Galat soch:** "5 boys aur 5 girls round table par: 4! × 4!."
- **Sahi samajh:** Pehle group (boys) ke baithne ke baad circle ki rotational symmetry khatam ho jaati hai! Doosre group (girls) ke liye **5!** lagta hai (4! × 5!)!

### Galti 2: Collinear points se lines ginte waqt "+1" bhool jaana
- **Galat soch:** "¹²C₂ - ⁵C₂ = 56 lines."
- **Sahi samajh:** ⁵C₂ ghatane se tumne un 5 collinear points se banne wali woh **1 asli line** bhi ghata di! Isliye **+1** wapas jodna zaroori hai (57 lines)!

### Galti 3: Legendre's formula ko composite number (jaise 6 ya 10) par seedhe laga dena
- **Galat soch:** "100! mein 10 ki power = [100/10] + [100/100] = 11."
- **Sahi samajh:** Legendre's formula **sirf PRIME numbers** ke liye kaam karta hai! 10 = 2 × 5 ke liye E₅(100!) = 24 nikaalte hain (11 bilkul galat hai)!

---

## Quick Recap

- **Circular Permutations:** (n - 1)! (table), (n - 1)!/2 (necklace/garland).
- **Stars & Bars:** x₁ + ... + xᵣ = n => ⁿ⁺ʳ⁻¹Cᵣ₋₁ (xᵢ ≥ 0) aur ⁿ⁻¹Cᵣ₋₁ (xᵢ ≥ 1).
- **Slack variable:** x₁ + ... + xᵣ ≤ n => add xᵣ₊₁ => ⁿ⁺ʳCᵣ.
- **Derangements:** D₂ = 1, D₃ = 2, D₄ = 9, D₅ = 44.
- **Legendre's Formula (prime p):** E_p(n!) = [n/p] + [n/p²] + ...; Trailing zeros = E₅(n!).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
In how many ways can 7 distinct beads be strung into a necklace?

**Solution:**
Necklace can be flipped => (7 - 1)! / 2 = 6! / 2 = 720 / 2 = **360 ways**.

Jaanch:
- Jaanch: 6! = 720, 720/2 = 360 ✅

---

### Question 2
In how many ways can 8 people be seated around a circular table if 2 particular people insist on sitting together?

**Solution:**
Tie the 2 people as 1 block => 7 entities around a circle: (7 - 1)! = 6! = 720.
The 2 tied people can swap in 2! = 2 ways.
Total = 720 × 2 = **1,440 ways**.

Jaanch:
- Jaanch: 6! × 2! = 720 × 2 = 1440 ✅

---

### Question 3
Find the number of non-negative integral solutions of x + y + z = 12.

**Solution:**
Stars & Bars (n = 12, r = 3): ¹²⁺³⁻¹C₃₋₁ = ¹⁴C₂ = (14 × 13)/2 = **91**.

Jaanch:
- Jaanch: 14 × 13 / 2 = 91 ✅

---

### Question 4
Find the number of positive integral solutions of x + y + z + w = 10.

**Solution:**
Positive solutions (xᵢ ≥ 1): ⁿ⁻¹Cᵣ₋₁ = ⁹C₃ = (9 × 8 × 7)/6 = **84**.

Jaanch:
- Jaanch: 3 × 4 × 7 = 84 ✅

---

### Question 5
Find the number of trailing zeros in 50!.

**Solution:**
E₅(50!) = [50/5] + [50/25] = 10 + 2 = **12 trailing zeros**.

Jaanch:
- Jaanch: 10 multiples of 5 + 2 multiples of 25 (25, 50) = 12 ✅

---

### Question 6
Find the highest power of 3 that divides 30!.

**Solution:**
E₃(30!) = [30/3] + [30/9] + [30/27] = 10 + 3 + 1 = **14**.

Jaanch:
- Jaanch: 10 + 3 + 1 = 14 ✅

---

### Question 7
Find the number of diagonals in a convex decagon (10-sided polygon).

**Solution:**
n(n - 3) / 2 = 10(7) / 2 = **35 diagonals**.

Jaanch:
- Jaanch: ¹⁰C₂ - 10 = 45 - 10 = 35 ✅

---

### Question 8
A polygon has 44 diagonals. Find the number of its sides.

**Solution:**
n(n - 3) / 2 = 44 => n² - 3n - 88 = 0 => (n - 11)(n + 8) = 0 => **n = 11 sides**.

Jaanch:
- Jaanch: 11(8)/2 = 44 ✅

---

### Question 9
In how many ways can 5 distinct letters be placed in 5 addressed envelopes so that NO letter goes into its right envelope?

**Solution:**
D₅ = 5! [1 - 1 + 1/2 - 1/6 + 1/24 - 1/120] = 60 - 20 + 5 - 1 = **44 ways**.

Jaanch:
- Jaanch: Recurrence check D₅ = 4(D₄ + D₃) = 4(9 + 2) = 44 ✅

---

### Question 10
Find the number of non-negative integral solutions of x + y + z ≤ 7.

**Solution:**
Add slack variable w ≥ 0: x + y + z + w = 7 => ⁷⁺⁴⁻¹C₃ = ¹⁰C₃ = (10 × 9 × 8)/6 = **120**.

Jaanch:
- Jaanch: 10 × 3 × 4 = 120 ✅

---

### Question 11
Find the number of rectangles (including squares) on a standard 8 × 8 chessboard.

**Solution:**
An 8 × 8 chessboard has 9 horizontal lines and 9 vertical lines. Choosing any 2 horizontal and 2 vertical lines forms a unique rectangle:
⁹C₂ × ⁹C₂ = 36 × 36 = **1,296 rectangles**.

Jaanch:
- Jaanch: 1³ + 2³ + ... + 8³ = (8 × 9 / 2)² = 36² = 1296 ✅

---

### Question 12
Find the number of triangles formed by joining the vertices of a 10-point set in which 4 points are collinear.

**Solution:**
¹⁰C₃ - ⁴C₃ = 120 - 4 = **116 triangles**.

Jaanch:
- Jaanch: ¹⁰C₃ = (10 × 9 × 8)/6 = 120, ⁴C₃ = 4 => 120 - 4 = 116 ✅

---

Ab tumne **Permutations and Combinations** ke sabse powerful advanced weapons — Circular Permutations, Stars & Bars, Derangements, aur Legendre's Formula — ko master kar liya hai!
