# Chapter: Statistics (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [statistics-part4.md](statistics-part4.md) (Topic 4: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Combined Mean & Combined Variance of Two Groups, Parallel-Axis Property of Variance (Σ (xᵢ - a)² = nσ² + n(x̄ - a)²), Variance of Any AP (d²(n² - 1)/12), aur σ ≥ MD(x̄) ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Combined Mean & Combined Variance of Two Groups (Full Derivation), Parallel-Axis Minimization Property, Instant Variance of Any AP, Aur RMS-Variance Identities

---

# Gehrai Mein: Combined Variance, Parallel-Axis Theorem, Aur AP Variance

Core chapter mein tumne ek single dataset ka Variance, SD, aur CV nikaalna seekha. Lekin jab do alag-alag groups (jaise Section A aur Section B) ko milakar ek **combined dataset** banaya jaye aur raw data available na ho — sirf unke sizes (n₁, n₂), means (x̄₁, x̄₂), aur variances (σ₁², σ₂²) diye hon — to combined variance kaise nikaalein? Chalo derive karte hain!

---

## Dheeraj ka multi-branch store merger report

Dheeraj ek retail chain ka operations analyst hai. Do branches merge ho rahi thin:
- **North Branch:** 100 employees, mean salary ₹20,000, SD ₹2,000 (σ₁² = 4 × 10⁶)
- **South Branch:** 100 employees, mean salary ₹30,000, SD ₹2,000 (σ₂² = 4 × 10⁶)

Ek colleague bola: "Dono branches ka SD ₹2,000 hai, to merged company ka SD bhi ₹2,000 hi hoga!"
Dheeraj ne roka: "Nahi! Dono ke **means alag** hain (₹20,000 vs ₹30,000), isliye merge karne par spread bahut badh jayega! Combined mean = ₹25,000, aur deviations d₁ = -5,000, d₂ = +5,000 => **Combined Variance = 4 × 10⁶ + 25 × 10⁶ = 29 × 10⁶** => **Combined SD ≈ ₹5,385** (₹2,000 se dhai guna zyada!)!"

---

## Part A: Parallel-Axis Property Of Variance ("Kyun"!)

Kisi bhi arbitrary constant **a** ke about mean squared deviation:
(1/n) Σ (xᵢ - a)² = (1/n) Σ [(xᵢ - x̄) + (x̄ - a)]²
= (1/n) Σ (xᵢ - x̄)² + 2(x̄ - a) [(1/n) Σ (xᵢ - x̄)] + (x̄ - a)²

Kyunki Σ (xᵢ - x̄) = 0:
**(1/n) Σ (xᵢ - a)² = σ² + (x̄ - a)²**   (yaani **Σ (xᵢ - a)² = n σ² + n(x̄ - a)²**)!

- **Minimum Property:** Kyunki (x̄ - a)² ≥ 0, Σ (xᵢ - a)² **minimum** tabhi aur sirf tabhi hota hai jab **a = x̄** ho!

---

## Part B: Combined Mean & Combined Variance Of Two Groups (Derived!)

Group 1 (n₁, x̄₁, σ₁²) aur Group 2 (n₂, x̄₂, σ₂²) ko merge karne par:
1. **Combined Mean:** **x̄ = (n₁ x̄₁ + n₂ x̄₂) / (n₁ + n₂)**.
2. Group 1 ke liye Parallel-Axis property (with a = x̄, d₁ = x̄₁ - x̄):
   Σ_{Group 1} (xᵢ - x̄)² = n₁(σ₁² + d₁²).
3. Group 2 ke liye (with d₂ = x̄₂ - x̄):
   Σ_{Group 2} (yⱼ - x̄)² = n₂(σ₂² + d₂²).

Dono sums ko jodkar (n₁ + n₂) se divide karo:
**σ² = [ n₁(σ₁² + d₁²) + n₂(σ₂² + d₂²) ] / (n₁ + n₂)**

### Super-Clean Direct Form (Bina d₁, d₂ Nikaale!):
Algebra se d₁ = n₂(x̄₁ - x̄₂)/(n₁ + n₂) aur d₂ = -n₁(x̄₁ - x̄₂)/(n₁ + n₂) rakhne par:
**σ² = (n₁ σ₁² + n₂ σ₂²) / (n₁ + n₂)  +  [ n₁ n₂ / (n₁ + n₂)² ] · (x̄₁ - x̄₂)²**!

---

## Part C: Instant Variance Of Any Arithmetic Progression (AP)

Koi bhi n-term AP **a, a + d, a + 2d, ..., a + (n - 1)d** likhi ja sakti hai:
xₖ = (a - d) + d · k   (for k = 1, 2, ..., n)!
Shift (a - d) variance ko nahi badalta, aur scale factor d variance ko d² se multiply karta hai!
Kyunki 1, 2, ..., n ka variance (n² - 1)/12 hota hai:
**Variance of any n-term AP with common difference d:  σ² = d² (n² - 1) / 12**!

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Combined Mean And Variance Of Two Sections
**Sawaal:** Section A mein 100 students hain (mean = 50, SD = 4) aur Section B mein 150 students hain (mean = 60, SD = 5). Combined 250 students ka Mean aur Variance gyat karo.

**Solution:**
Yahan n₁ = 100, x̄₁ = 50, σ₁² = 16; n₂ = 150, x̄₂ = 60, σ₂² = 25.
1. **Combined Mean:**
   x̄ = [100(50) + 150(60)] / 250 = (5000 + 9000) / 250 = 14000 / 250 = **56**.
2. d₁ = 50 - 56 = -6 (d₁² = 36); d₂ = 60 - 56 = +4 (d₂² = 16).
3. **Combined Variance:**
   σ² = [100(16 + 36) + 150(25 + 16)] / 250
   = [100(52) + 150(41)] / 250
   = (5200 + 6150) / 250 = 11350 / 250 = **227/5 = 45.4**!

Jaanch:
- Jaanch: Direct form check: (1600 + 3750)/250 + [15000/62500] · (100) = 21.4 + 24 = 45.4 ✅

---

### Problem 2: Finding The Variance Of A Second Subgroup From Combined Stats
**Sawaal:** 200 items ke combined group ka Mean 25 aur Variance 45 hai. Agar pehle 100 items ka Mean 20 aur Variance 16 ho, to baaki 100 items ka Mean aur Variance gyat karo.

**Solution:**
n₁ = 100, n₂ = 100, n = 200, x̄ = 25, σ² = 45.
1. **x̄₂:** (100(20) + 100 x̄₂)/200 = 25 => 20 + x̄₂ = 50 => **x̄₂ = 30**.
2. d₁ = 20 - 25 = -5 (d₁² = 25); d₂ = 30 - 25 = +5 (d₂² = 25).
3. **σ₂²:**
   45 = [100(16 + 25) + 100(σ₂² + 25)] / 200
   90 = 41 + σ₂² + 25 = 66 + σ₂² => **σ₂² = 24**!

Jaanch:
- Jaanch: Combined check: (16 + 24)/2 + (1/4)(30 - 20)² = 20 + 25 = 45 ✅

---

### Problem 3: Using Parallel-Axis Property Directly
**Sawaal:** 10 observations ke liye **Σ (xᵢ - 5) = 30** aur **Σ (xᵢ - 5)² = 190** diya hai. Exact Mean x̄ aur Variance σ² gyat karo.

**Solution:**
1. Σ (xᵢ - 5) = 30 => (1/10) Σ (xᵢ - 5) = x̄ - 5 = 3 => **x̄ = 8**.
2. Parallel-Axis Property (with a = 5):
   (1/10) Σ (xᵢ - 5)² = σ² + (x̄ - 5)²
   190 / 10 = σ² + 3²
   19 = σ² + 9 => **σ² = 10**!

Jaanch:
- Jaanch: nσ² + n(x̄ - 5)² = 10(10) + 10(9) = 190 ✅

---

### Problem 4: Instant Variance Of A 15-Term AP
**Sawaal:** AP **7, 11, 15, 19, ..., 63** (15 terms) ka Mean aur Variance bina table banaye gyat karo.

**Solution:**
Here n = 15, a = 7, d = 4, last term = 7 + 14(4) = 63.
- **Mean:** (7 + 63)/2 = **35**.
- **Variance:** d² (n² - 1) / 12 = 4² (15² - 1) / 12 = 16(224) / 12 = 4(224)/3 = **896 / 3 ≈ 298.67**.

Jaanch:
- Jaanch: 16/12 = 4/3, 4 × 224 = 896 => 896/3 ✅

---

### Problem 5: Minimizing Σ (xᵢ - a)² Over All Real a
**Sawaal:** 5 observations 2, 5, 7, 10, 16 ke liye f(a) = Σ_{i=1}^{5} (xᵢ - a)² ki minimum value aur jis a par yeh minimum aati hai, dono gyat karo.

**Solution:**
Parallel-Axis Property se f(a) = 5 σ² + 5(x̄ - a)² minimum hota hai jab **a = x̄**!
- x̄ = (2 + 5 + 7 + 10 + 16)/5 = 40/5 = **8**.
- Minimum value = Σ (xᵢ - 8)² = (-6)² + (-3)² + (-1)² + 2² + 8² = 36 + 9 + 1 + 4 + 64 = **114**.

Jaanch:
- Jaanch: At a = 8, f(8) = 114; at a = 7, f(7) = 114 + 5(1)² = 119 > 114 ✅

---

### Problem 6: Proving σ ≥ MD(x̄)
**Sawaal:** Prove karo ki kisi bhi finite dataset ke liye **Standard Deviation σ ≥ Mean Deviation about Mean MD(x̄)**.

**Solution:**
Let uᵢ = |xᵢ - x̄| ≥ 0.
Notice:
- Mean of uᵢ is **ū = (1/n) Σ |xᵢ - x̄| = MD(x̄)**.
- Mean of uᵢ² is **(1/n) Σ (xᵢ - x̄)² = σ²**.

Kisi bhi dataset u₁, ..., uₙ ka variance non-negative (≥ 0) hota hai:
Var(u) = (1/n) Σ uᵢ² - (ū)² ≥ 0
=> **σ² - [MD(x̄)]² ≥ 0**
=> **σ² ≥ [MD(x̄)]²**
=> **σ ≥ MD(x̄)**! (Equality tabhi jab sabhi |xᵢ - x̄| barabar hon!)

Jaanch:
- Jaanch: Test {0, 2}: x̄ = 1, |xᵢ - 1| = {1, 1} => MD = 1, σ = 1 (equality!); test {0, 1, 5}: x̄ = 2, MD = 6/3 = 2, σ = √(14/3) ≈ 2.16 > 2 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Combined variance ko sirf weighted average (n₁σ₁² + n₂σ₂²)/(n₁ + n₂) likh dena
- **Galat soch:** "Combined mean weighted average hai to combined variance bhi sirf weighted average hoga."
- **Sahi samajh:** Agar x̄₁ ≠ x̄₂ hai, to dono means ke beech ka gap **+ [n₁n₂/(n₁ + n₂)²] · (x̄₁ - x̄₂)²** bhi variance mein judta hai!

### Galti 2: AP variance mein (n² - 1)/12 ko d se multiply karna (d² ki jagah!)
- **Galat soch:** "Variance = d(n² - 1)/12."
- **Sahi samajh:** Scale factor d **square (d²)** hokar bahar aata hai: **d²(n² - 1)/12**! (SD mein |d| aata hai!)

### Galti 3: Combined data mein σ₁² + d₁² ki jagah σ₁ + d₁ likh dena
- **Galat soch:** "Combined SD formula mein σ₁ aur d₁ seedhe jodo."
- **Sahi samajh:** Parallel-axis formula hamesha **Variance (squares: σ₁² + d₁²)** par lagta hai, SD par nahi!

---

## Quick Recap

- **Parallel-Axis Theorem:** (1/n) Σ (xᵢ - a)² = σ² + (x̄ - a)² (minimized at a = x̄).
- **Combined Variance:** σ² = [n₁(σ₁² + d₁²) + n₂(σ₂² + d₂²)] / (n₁ + n₂), where dᵢ = x̄ᵢ - x̄.
- **Any n-term AP (common diff d):** σ² = d²(n² - 1)/12.
- **Universal Inequality:** σ ≥ MD(x̄) ≥ MD(M) ≥ 0.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Two groups of 50 and 50 items have means 10 and 20, and variances 4 and 4 respectively. Find the combined mean and combined variance.

**Solution:**
x̄ = (10 + 20)/2 = **15**.
d₁ = -5 (d₁² = 25), d₂ = +5 (d₂² = 25).
σ² = [(4 + 25) + (4 + 25)] / 2 = **29**.

Jaanch:
- Jaanch: (4 + 4)/2 + (1/4)(10)² = 4 + 25 = 29 ✅

---

### Question 2
Find the variance of the 11-term AP: 5, 8, 11, 14, ..., 35.

**Solution:**
n = 11, d = 3 => σ² = 3²(11² - 1)/12 = 9(120)/12 = **90**.

Jaanch:
- Jaanch: 120/12 = 10, 9 × 10 = 90 ✅

---

### Question 3
For 20 observations, Σ(xᵢ - 10) = 40 and Σ(xᵢ - 10)² = 260. Find the mean and variance.

**Solution:**
x̄ - 10 = 40/20 = 2 => **x̄ = 12**.
Parallel-axis: 260/20 = σ² + 2² => 13 = σ² + 4 => **σ² = 9** (σ = 3).

Jaanch:
- Jaanch: 20(9) + 20(4) = 180 + 80 = 260 ✅

---

### Question 4
If n₁ = 40, x̄₁ = 30, σ₁ = 5 and n₂ = 60, x̄₂ = 40, σ₂ = 10, find the combined mean and combined variance.

**Solution:**
x̄ = [40(30) + 60(40)] / 100 = (1200 + 2400)/100 = **36**.
d₁ = -6 (36), d₂ = +4 (16).
σ² = [40(25 + 36) + 60(100 + 16)] / 100 = [40(61) + 60(116)] / 100 = (2440 + 6960)/100 = **94**.

Jaanch:
- Jaanch: (1000 + 6000)/100 + (2400/10000)(100) = 70 + 24 = 94 ✅

---

### Question 5
Find the value of k that minimizes Σ_{i=1}^{4} (xᵢ - k)² for the data 4, 8, 12, 20, and find the minimum sum.

**Solution:**
Minimized at k = x̄ = (4 + 8 + 12 + 20)/4 = **11**.
Minimum sum = (-7)² + (-3)² + 1² + 9² = 49 + 9 + 1 + 81 = **140**.

Jaanch:
- Jaanch: 49 + 9 + 1 + 81 = 140 ✅

---

### Question 6
Two groups of sizes n₁ and n₂ have the SAME mean x̄ = 50, with variances σ₁² = 12 and σ₂² = 18. If n₁ = 20 and n₂ = 40, find the combined variance.

**Solution:**
Since x̄₁ = x̄₂ = 50, d₁ = d₂ = 0!
σ² = [20(12) + 40(18)] / 60 = (240 + 720) / 60 = 960 / 60 = **16**.

Jaanch:
- Jaanch: When means are equal, combined variance is simply the weighted average: (1/3)(12) + (2/3)(18) = 4 + 12 = 16 ✅

---

### Question 7
If the variance of the 9-term AP a, a + d, ..., a + 8d is 60, find |d|.

**Solution:**
d²(9² - 1)/12 = 60 => d²(80/12) = 60 => d²(20/3) = 60 => d² = 9 => **|d| = 3**.

Jaanch:
- Jaanch: 9(80)/12 = 720/12 = 60 ✅

---

### Question 8
For 10 observations, the sum of squares of deviations from 4 is 170 and from 7 is 140. Find the mean x̄.

**Solution:**
By Parallel-Axis:
170 = 10σ² + 10(x̄ - 4)²   --- (1)
140 = 10σ² + 10(x̄ - 7)²   --- (2)
Subtract (2) from (1):
30 = 10[(x̄ - 4)² - (x̄ - 7)²]
3 = (2x̄ - 11)(3) => 2x̄ - 11 = 1 => 2x̄ = 12 => **x̄ = 6**.

Jaanch:
- Jaanch: From (1): 10σ² = 170 - 40 = 130; from (2): 10σ² = 140 - 10 = 130 (exact match!) ✅

---

### Question 9
Using Question 8, find the exact variance σ² of those 10 observations.

**Solution:**
From 10σ² = 130 => **σ² = 13**.

Jaanch:
- Jaanch: 13 + (6 - 4)² = 17 => 10 × 17 = 170 ✅

---

### Question 10
If all observations of a dataset are equal to either 0 or 10 (half are 0, half are 10), compare σ and MD(x̄).

**Solution:**
Mean x̄ = 5. Every observation has |xᵢ - 5| = 5!
MD(x̄) = 5, and σ = √(25) = 5 => **σ = MD(x̄) = 5** (exact equality case!).

Jaanch:
- Jaanch: All |xᵢ - x̄| are identical (5), achieving equality in σ ≥ MD(x̄) ✅

---

### Question 11
A dataset of 10 numbers has mean 6 and variance 4. Another single number 17 is added to the dataset. Find the new mean and new variance.

**Solution:**
Old Σ xᵢ = 60, Old Σ xᵢ² = 10(4 + 36) = 400.
New n = 11:
- New Σ xᵢ = 60 + 17 = 77 => **New Mean** = 77/11 = **7**.
- New Σ xᵢ² = 400 + 289 = 689 => **New Variance** = 689/11 - 49 = (689 - 539)/11 = **150/11 ≈ 13.64**.

Jaanch:
- Jaanch: Combined formula with Group 2 = {17} (n₂ = 1, σ₂² = 0): [10(4 + 1) + 1(0 + 100)]/11 = 150/11 ✅

---

### Question 12
Can two datasets with means 10 and 20 (same size n) have a combined variance of 20? Explain why or why not.

**Solution:**
Combined variance = (σ₁² + σ₂²)/2 + (1/4)(20 - 10)² = (σ₁² + σ₂²)/2 + **25** ≥ 25!
Since combined variance MUST be at least **25**, a combined variance of 20 is **IMPOSSIBLE**!

Jaanch:
- Jaanch: Even if σ₁² = σ₂² = 0, the gap between means alone contributes (1/4)(100) = 25 ✅

---

Ab tumne **Statistics** ke sabse gehre tools — Combined Variance, Parallel-Axis Minimization, AP Variance, aur σ ≥ MD(x̄) — ko master kar liya hai!
