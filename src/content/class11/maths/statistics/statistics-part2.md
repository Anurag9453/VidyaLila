# Chapter: Statistics (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [statistics.md](statistics.md) tha** (Topic 1: Measures of Dispersion — Range aur Mean Deviation). First n natural numbers ke sums (Σ k aur Σ k²) Chapter 8 ke [sequences-and-series-part4.md](../sequences-and-series/sequences-and-series-part4.md) mein padhe the.
> **Topics covered in this file:**
> 1. Variance (σ²) Aur Standard Deviation (σ): Direct Method, Shortcut Formula, Aur Step-Deviation Method

---

# Topic 2: Variance Aur Standard Deviation

Topic 1 mein humne dekha ki signs (+ aur -) ka cancellation rokne ke liye Mean Deviation mein modulus |xᵢ - x̄| lagaya gaya. Lekin modulus functions ke saath algebra aur calculus karna mushkil hota hai!

Isliye statisticians ne ek aur zyada clean aur powerful rasta nikala: deviations (xᵢ - x̄) ka **square** kar do! Square karte hi har negative number positive ban jata hai! In squared deviations ke average ko **Variance (σ²)** kehte hain, aur uske positive square root ko **Standard Deviation (σ)** kehte hain!

---

## Swati ka pharmaceutical tablet quality-control lab

Swati ek pharmaceutical factory ke quality-control lab mein chemist hai. 500 mg vitamin tablets ke batch ka weight check karte waqt use har tablet ke weight ka average se deviation (xᵢ - x̄) milta hai.

Jab usne deviations ko square karke average nikala (Variance σ²), to unit **mg²** ho gayi — jo tablet ke asli weight (mg) se seedhe compare nahi ho sakti thi! Isliye Swati ne Variance ka **positive square root** liya:
**Standard Deviation σ = √(Variance)** -> unit wapas **mg** mein aa gayi!

Swati ne lab intern ko samjhaya: "Variance hume smooth algebra aur shortcut formulas deta hai, aur uska square root Standard Deviation hume asli unit (mg) mein exact spread batata hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Variance (σ²)** | Mean se squared deviations (xᵢ - x̄)² ka average | σ² = (1/n) Σ (xᵢ - x̄)² |
| **Standard Deviation (σ)** | Variance ka positive square root (asli data ki unit mein!) | σ = √(σ²) |
| **Shortcut Formula** | Bina har deviation (xᵢ - x̄) nikaale seedhe Σ xᵢ² se variance nikaalna | σ² = (1/n) Σ xᵢ² - (x̄)² |
| **Step-Deviation (yᵢ)** | Bade grouped numbers ko chhota banane ke liye yᵢ = (xᵢ - A)/h | σ² = h² · σ_y² |

---

## Part A: Variance Aur Shortcut Formula Ka Derivation ("Kyun"!)

### 1. Ungrouped Data (n observations x₁, x₂, ..., xₙ):
**Definition:**
**σ² = (1/n) Σ (xᵢ - x̄)²**   aur   **σ = √(σ²)**

**Shortcut Formula Derivation:**
σ² = (1/n) Σ (xᵢ² - 2 xᵢ x̄ + x̄²)
= (1/n) Σ xᵢ² - 2 x̄ [ (1/n) Σ xᵢ ] + (1/n) (n x̄²)
Kyunki (1/n) Σ xᵢ = x̄:
= (1/n) Σ xᵢ² - 2(x̄)² + (x̄)²
**σ² = (1/n) Σ xᵢ² - (x̄)²**

*(Yaad rakhne ki golden line: **"Variance = Mean of Squares MINUS Square of Mean!"**)*

### 2. Discrete & Continuous Grouped Data (N = Σ fᵢ):
- **Direct Form:** **σ² = (1/N) Σ fᵢ (xᵢ - x̄)²**
- **Shortcut Form:** **σ² = (1/N) Σ fᵢ xᵢ² - (x̄)² = (1/N²) [ N Σ fᵢ xᵢ² - (Σ fᵢ xᵢ)² ]**

---

## Part B: Step-Deviation Shortcut Method (Bade Numbers Ke Liye Lifesaver!)

Jab class midpoints xᵢ bade hon (jaise 35, 45, 55, ..., 95) aur class width **h** uniform ho:
1. Ek assumed mean **A** chuno (beech wala midpoint!) aur likho: **yᵢ = (xᵢ - A) / h**.
2. Tab xᵢ = A + h yᵢ aur x̄ = A + h ȳ => **xᵢ - x̄ = h(yᵢ - ȳ)**!
3. Square karke average lene par:
   (xᵢ - x̄)² = h² (yᵢ - ȳ)²  =>  **σ_x² = h² · σ_y²**!

Isliye:
- **Mean:** **x̄ = A + h · (Σ fᵢ yᵢ / N)**
- **Variance:** **σ² = (h² / N²) [ N Σ fᵢ yᵢ² - (Σ fᵢ yᵢ)² ]**
- **Standard Deviation:** **σ = (h / N) √[ N Σ fᵢ yᵢ² - (Σ fᵢ yᵢ)² ]**

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 2.1: Variance And SD Of Ungrouped Data
**Sawaal:** Data 6, 8, 10, 12, 14, 16, 18, 20, 22, 24 ka Variance aur Standard Deviation gyat karo.

**Solution:**
Yahan n = 10.
Mean x̄ = (6 + 8 + ... + 24) / 10 = 150 / 10 = **15**.
Deviations (xᵢ - 15): -9, -7, -5, -3, -1, 1, 3, 5, 7, 9.
Squared deviations (xᵢ - 15)²: 81, 49, 25, 9, 1, 1, 9, 25, 49, 81.
Sum = 2(81 + 49 + 25 + 9 + 1) = 2(165) = **330**.

- **Variance σ²** = 330 / 10 = **33**.
- **Standard Deviation σ** = √33 ≈ **5.74**.

Jaanch:
- Jaanch: Shortcut check: Σ xᵢ² = 36 + 64 + 100 + 144 + 196 + 256 + 324 + 400 + 484 + 576 = 2580 => 2580/10 - 15² = 258 - 225 = 33 ✅

---

### Example 2.2: Variance Of First n Natural Numbers (Using Chapter 8!)
**Sawaal:** Prove karo ki pehle n natural numbers 1, 2, 3, ..., n ka Variance **(n² - 1) / 12** hota hai, aur n = 7 par check karo.

**Solution:**
Chapter 8 ([sequences-and-series-part4.md](../sequences-and-series/sequences-and-series-part4.md)) se:
- Mean x̄ = (1/n) Σ k = (1/n) [n(n + 1)/2] = **(n + 1)/2**.
- Mean of squares (1/n) Σ k² = (1/n) [n(n + 1)(2n + 1)/6] = **(n + 1)(2n + 1)/6**.

Shortcut formula σ² = (1/n) Σ k² - (x̄)² lagao:
σ² = (n + 1)(2n + 1)/6 - (n + 1)²/4
= [(n + 1) / 12] [ 2(2n + 1) - 3(n + 1) ]
= [(n + 1) / 12] [ 4n + 2 - 3n - 3 ]
= [(n + 1)(n - 1)] / 12
= **(n² - 1) / 12**!

For n = 7: σ² = (49 - 1)/12 = 48/12 = **4**, aur σ = √4 = **2**.

Jaanch:
- Jaanch: Direct for {1, 2, 3, 4, 5, 6, 7}: x̄ = 4, (xᵢ - 4)² = {9, 4, 1, 0, 1, 4, 9}, sum = 28 => 28/7 = 4 ✅

---

### Example 2.3: Variance And SD Of Discrete Frequency Distribution
**Sawaal:** Neeche diye gaye discrete data ka Mean, Variance, aur SD gyat karo:
xᵢ: 4, 8, 11, 17, 20, 24, 32
fᵢ: 3, 5, 9, 5, 4, 3, 1

**Solution:**
| xᵢ | fᵢ | fᵢ xᵢ | xᵢ - 14 | (xᵢ - 14)² | fᵢ (xᵢ - 14)² |
|---|---|---|---|---|---|
| 4 | 3 | 12 | -10 | 100 | 300 |
| 8 | 5 | 40 | -6 | 36 | 180 |
| 11 | 9 | 99 | -3 | 9 | 81 |
| 17 | 5 | 85 | 3 | 9 | 45 |
| 20 | 4 | 80 | 6 | 36 | 144 |
| 24 | 3 | 72 | 10 | 100 | 300 |
| 32 | 1 | 32 | 18 | 324 | 324 |
| **Total** | **N = 30** | **420** | — | — | **1374** |

- **Mean x̄** = 420 / 30 = **14**.
- **Variance σ²** = 1374 / 30 = **45.8**.
- **SD σ** = √45.8 ≈ **6.77**.

Jaanch:
- Jaanch: 300 + 180 + 81 + 45 + 144 + 300 + 324 = 1374 => 1374/30 = 229/5 = 45.8 ✅

---

### Example 2.4: Continuous Grouped Data Using Step-Deviation Method
**Sawaal:** Step-deviation method se neeche diye gaye grouped data ka Mean, Variance, aur SD gyat karo:
Classes: 30-40, 40-50, 50-60, 60-70, 70-80, 80-90, 90-100
fᵢ: 3, 7, 12, 15, 8, 3, 2

**Solution:**
Assumed Mean **A = 65**, class width **h = 10**, **yᵢ = (xᵢ - 65)/10**:

| Class | Midpoint xᵢ | fᵢ | yᵢ = (xᵢ - 65)/10 | fᵢ yᵢ | yᵢ² | fᵢ yᵢ² |
|---|---|---|---|---|---|---|
| 30-40 | 35 | 3 | -3 | -9 | 9 | 27 |
| 40-50 | 45 | 7 | -2 | -14 | 4 | 28 |
| 50-60 | 55 | 12 | -1 | -12 | 1 | 12 |
| 60-70 | 65 | 15 | 0 | 0 | 0 | 0 |
| 70-80 | 75 | 8 | 1 | 8 | 1 | 8 |
| 80-90 | 85 | 3 | 2 | 6 | 4 | 12 |
| 90-100 | 95 | 2 | 3 | 6 | 9 | 18 |
| **Total** | — | **N = 50** | — | **-15** | — | **105** |

1. **Mean:** x̄ = A + h(Σ fᵢ yᵢ / N) = 65 + 10(-15 / 50) = 65 - 3 = **62**.
2. **Variance:** σ² = (h² / N²) [ N Σ fᵢ yᵢ² - (Σ fᵢ yᵢ)² ]
   = (100 / 2500) [ 50(105) - (-15)² ]
   = (1 / 25) [ 5250 - 225 ]
   = 5025 / 25 = **201**.
3. **Standard Deviation:** σ = √201 ≈ **14.18**.

Jaanch:
- Jaanch: σ_y² = 105/50 - (-15/50)² = 2.1 - 0.09 = 2.01 => σ_x² = 10² × 2.01 = 201 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Variance (σ²) ko hi Standard Deviation (σ) bata dena
- **Galat soch:** "σ² = 33 nikal liya — yahi Standard Deviation hai."
- **Sahi samajh:** 33 **Variance** hai! Standard Deviation nikaalne ke liye **positive square root** lena zaroori hai: σ = √33 ≈ 5.74!

### Galti 2: Shortcut formula mein x̄ ka square bhool jaana
- **Galat soch:** "σ² = (1/n) Σ xᵢ² - x̄."
- **Sahi samajh:** Formula **"Mean of Squares MINUS Square of Mean"** hota hai: **(1/n) Σ xᵢ² - (x̄)²**!

### Galti 3: Step-deviation mein h² se multiply karna bhool jaana
- **Galat soch:** "σ_y² = 2.01 aaya, to asli variance bhi 2.01 hai."
- **Sahi samajh:** Tumne data ko h = 10 se divide kiya tha, isliye asli variance nikaalne ke liye **h² = 100** se multiply karna padega: 2.01 × 100 = **201**!

---

## Quick Recap

- **Variance:** σ² = (1/n) Σ (xᵢ - x̄)² = (1/n) Σ xᵢ² - (x̄)².
- **Standard Deviation:** σ = √(σ²) ≥ 0.
- **Step-Deviation (yᵢ = (xᵢ - A)/h):** x̄ = A + h(Σ fᵢ yᵢ / N), σ² = (h²/N²)[N Σ fᵢ yᵢ² - (Σ fᵢ yᵢ)²].
- **First n natural numbers:** x̄ = (n + 1)/2, σ² = (n² - 1)/12.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the mean and variance of the data: 6, 7, 10, 12, 13, 4, 8, 12.

**Solution:**
n = 8, x̄ = 72/8 = **9**.
(xᵢ - 9)²: 9, 4, 1, 9, 16, 25, 1, 9. Sum = 74.
σ² = 74 / 8 = **9.25** (σ = √9.25 ≈ 3.04).

Jaanch:
- Jaanch: 9 + 4 + 1 + 9 + 16 + 25 + 1 + 9 = 74 => 74/8 = 37/4 = 9.25 ✅

---

### Question 2
Find the variance and standard deviation of the first 10 multiples of 3: 3, 6, 9, ..., 30.

**Solution:**
These are 3 times the first 10 natural numbers!
For first 10 natural numbers: x̄₁ = 11/2 = 5.5, σ₁² = (10² - 1)/12 = 99/12 = 33/4 = 8.25.
Multiplying every observation by 3 scales variance by 3² = 9:
- Mean = 3 × 5.5 = **16.5**
- Variance σ² = 9 × (33/4) = **297/4 = 74.25**
- SD σ = √74.25 ≈ **8.62**.

Jaanch:
- Jaanch: Direct: (1/10) Σ (3k)² - (16.5)² = (9/10)(385) - 272.25 = 346.5 - 272.25 = 74.25 ✅

---

### Question 3
Find the mean and variance for the discrete data: xᵢ = 6, 10, 14, 18, 24, 28, 30 with fᵢ = 2, 4, 7, 12, 8, 4, 3.

**Solution:**
N = 2 + 4 + 7 + 12 + 8 + 4 + 3 = 40.
Σ fᵢ xᵢ = 12 + 40 + 98 + 216 + 192 + 112 + 90 = 760 => **x̄ = 760/40 = 19**.
fᵢ (xᵢ - 19)²:
2(169) = 338, 4(81) = 324, 7(25) = 175, 12(1) = 12, 8(25) = 200, 4(81) = 324, 3(121) = 363.
Sum = 338 + 324 + 175 + 12 + 200 + 324 + 363 = 1736.
**σ² = 1736 / 40 = 43.4**.

Jaanch:
- Jaanch: 760/40 = 19 aur 1736/40 = 217/5 = 43.4 ✅

---

### Question 4
Find the mean and variance for: xᵢ = 92, 93, 97, 98, 102, 104, 109 with fᵢ = 3, 2, 3, 2, 6, 3, 3.

**Solution:**
Take A = 100, h = 1 (yᵢ = xᵢ - 100): yᵢ = -8, -7, -3, -2, 2, 4, 9.
N = 3 + 2 + 3 + 2 + 6 + 3 + 3 = 22.
Σ fᵢ yᵢ = -24 - 14 - 9 - 4 + 12 + 12 + 27 = **0** => **x̄ = 100 + 0 = 100**!
Σ fᵢ yᵢ² = 3(64) + 2(49) + 3(9) + 2(4) + 6(4) + 3(16) + 3(81) = 192 + 98 + 27 + 8 + 24 + 48 + 243 = 640.
**σ² = 640 / 22 = 320/11 ≈ 29.09**.

Jaanch:
- Jaanch: Σ fᵢ yᵢ = 0 makes x̄ = 100 exact, and 640/22 = 320/11 ✅

---

### Question 5
Find the mean and standard deviation using the shortcut method for: xᵢ = 60, 61, 62, 63, 64, 65, 66, 67, 68 with fᵢ = 2, 1, 12, 29, 25, 12, 10, 4, 5.

**Solution:**
Take A = 64, h = 1 (yᵢ = xᵢ - 64): yᵢ = -4, -3, -2, -1, 0, 1, 2, 3, 4.
N = 2 + 1 + 12 + 29 + 25 + 12 + 10 + 4 + 5 = 100.
Σ fᵢ yᵢ = -8 - 3 - 24 - 29 + 0 + 12 + 20 + 12 + 20 = **0** => **x̄ = 64**.
Σ fᵢ yᵢ² = 2(16) + 1(9) + 12(4) + 29(1) + 0 + 12(1) + 10(4) + 4(9) + 5(16)
= 32 + 9 + 48 + 29 + 12 + 40 + 36 + 80 = 286.
σ² = 286 / 100 = **2.86** => **σ = √2.86 ≈ 1.69**.

Jaanch:
- Jaanch: Σ fᵢ yᵢ = -64 + 64 = 0, Σ fᵢ yᵢ² = 286 => σ² = 2.86 ✅

---

### Question 6
Find the mean and variance of the continuous grouped data: 0-30, 30-60, 60-90, 90-120, 120-150, 150-180, 180-210 with fᵢ = 2, 3, 5, 10, 3, 5, 2.

**Solution:**
Midpoints: 15, 45, 75, 105, 135, 165, 195. Take A = 105, h = 30 => yᵢ = -3, -2, -1, 0, 1, 2, 3.
N = 2 + 3 + 5 + 10 + 3 + 5 + 2 = 30.
Σ fᵢ yᵢ = -6 - 6 - 5 + 0 + 3 + 10 + 6 = **2**.
Σ fᵢ yᵢ² = 2(9) + 3(4) + 5(1) + 0 + 3(1) + 5(4) + 2(9) = 18 + 12 + 5 + 3 + 20 + 18 = **76**.

- **Mean x̄** = 105 + 30(2/30) = 105 + 2 = **107**.
- **Variance σ²** = (900/900) [30(76) - 2²] = 2280 - 4 = **2276** (σ = √2276 ≈ 47.71).

Jaanch:
- Jaanch: h²/N² = 900/900 = 1, so σ² = 30(76) - 4 = 2276 ✅

---

### Question 7
Find the variance of the five observations: 10, 12, 14, 16, 18.

**Solution:**
Mean x̄ = 14. Deviations: -4, -2, 0, 2, 4.
Squared deviations: 16, 4, 0, 4, 16. Sum = 40.
σ² = 40 / 5 = **8** (σ = 2√2 ≈ 2.83).

Jaanch:
- Jaanch: 2 times {5, 6, 7, 8, 9} => 2² × (5² - 1)/12 = 4 × 2 = 8 ✅

---

### Question 8
If the variance of a dataset is 64, what is its standard deviation?

**Solution:**
Standard deviation is the positive square root of variance: σ = √64 = **8**.

Jaanch:
- Jaanch: 8² = 64 and σ ≥ 0 ✅

---

### Question 9
For a set of 10 observations, Σ xᵢ = 50 and Σ xᵢ² = 340. Find the mean, variance, and standard deviation.

**Solution:**
Mean x̄ = 50 / 10 = **5**.
Variance σ² = (1/10)(340) - 5² = 34 - 25 = **9**.
SD σ = √9 = **3**.

Jaanch:
- Jaanch: 34 - 25 = 9 = 3² ✅

---

### Question 10
Find the variance of the first 13 natural numbers using the formula σ² = (n² - 1)/12.

**Solution:**
σ² = (13² - 1) / 12 = (169 - 1) / 12 = 168 / 12 = **14**.

Jaanch:
- Jaanch: 168 / 12 = 14 exact integer ✅

---

### Question 11
Can the variance of a real dataset ever be negative? When is the variance equal to zero?

**Solution:**
No! Kyunki variance non-negative squares (xᵢ - x̄)² ka average hai, isliye **σ² ≥ 0 hamesha**!
σ² = 0 tabhi aur sirf tabhi hota hai jab har observation mean ke barabar ho — yaani **sabhi observations bilkul identical hon**!

Jaanch:
- Jaanch: (xᵢ - x̄)² ≥ 0 for every real xᵢ; sum is 0 iff every xᵢ = x̄ ✅

---

### Question 12
Find the variance and SD of the continuous data: 0-10, 10-20, 20-30, 30-40, 40-50 with fᵢ = 4, 6, 10, 12, 8.

**Solution:**
Midpoints: 5, 15, 25, 35, 45. Take A = 25, h = 10 => yᵢ = -2, -1, 0, 1, 2.
N = 4 + 6 + 10 + 12 + 8 = 40.
Σ fᵢ yᵢ = -8 - 6 + 0 + 12 + 16 = **14** => x̄ = 25 + 10(14/40) = **28.5**.
Σ fᵢ yᵢ² = 4(4) + 6(1) + 0 + 12(1) + 8(4) = 16 + 6 + 12 + 32 = **66**.
σ² = (100/1600)[40(66) - 14²] = (1/16)[2640 - 196] = 2444 / 16 = **611/4 = 152.75**.
SD σ = √152.75 ≈ **12.36**.

Jaanch:
- Jaanch: σ_y² = 66/40 - (14/40)² = 1.65 - 0.1225 = 1.5275 => σ_x² = 100 × 1.5275 = 152.75 ✅

---

Ab tum kisi bhi dataset ka Variance aur Standard Deviation seconds mein nikaal sakte ho! Agle topic [statistics-part3.md](statistics-part3.md) mein hum dekhenge ki **do alag-alag datasets** (alag means ya alag units wale!) ki consistency kaise compare karte hain — **Coefficient of Variation (CV)** aur **Change of Origin & Scale** ke zariye!
