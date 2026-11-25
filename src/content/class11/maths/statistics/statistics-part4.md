# Chapter: Statistics (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [statistics-part3.md](statistics-part3.md) tha** (Topic 3: Coefficient of Variation CV, Comparing Two Data Sets, aur Change of Origin & Scale).
> **Topics covered in this file:**
> 1. Sab Kuch Mila Kar: Missing Observations, Correcting Misread Data, Grouped CV Synthesis, Mixed Practice, Aur Chapter Wrap-up Table

---

# Topic 4: Sab Kuch Mila Kar — Mixed Statistics Problems Aur Chapter Wrap-up

Pichhle teen topics mein tumne Measures of Dispersion ke sabhi core tools seekhe: Range, Mean Deviation (about Mean & Median), Variance (σ²), Standard Deviation (σ), Coefficient of Variation (CV), aur Change of Origin & Scale.

Ab in sabhi tools ko mila kar real-world data-cleaning aur inverse problems solve karte hain — jaise agar do observations kho gayi hon aur sirf Mean & Variance pata ho, ya koi data entry galti se galat type ho gayi ho aur poora table dobara calculate kiye bina exact corrected Mean & SD nikaalna ho!

---

## Nagesh ka Data Science & Analytics Club Challenge

School ke Data Science & Analytics Club mein Nagesh "Consistency & Outliers Challenge" host kar raha hai. Final round mein teen real data-science puzzles the:
- **Puzzle 1 (Missing Entries):** 5 test scores ka Mean 4.4 aur Variance 8.24 hai, par 2 scores mit gaye hain — baaki 3 scores (1, 2, 6) se khoye hue dono scores dhoondho!
- **Puzzle 2 (Data Cleaning):** 20 lab readings ka Mean 10 aur SD 2 aaya, par baad mein pata chala ki ek reading 12 ki jagah galti se 8 likhi gayi thi — ab poora sheet dobara jode bina exact corrected Mean aur SD nikaalo!
- **Puzzle 3 (Reverse Count):** Mean 12, SD 3, aur Σ xᵢ² = 1530 diya hai — batao kul kitni observations (n) thin!

Nagesh ne dikhaya ki shortcut formula **σ² = (1/n) Σ xᵢ² - (x̄)²** in teeno puzzles ki master key hai!

---

## Decision Map: Kaun Sa Dispersion Measure Kab?

| Sawaal mein kya chahiye? | Sabse best tool / formula | Golden Rule |
|---|---|---|
| Sirf quick rough spread | Range = Max - Min | Outliers se bahut affect hota hai |
| Average absolute distance from Mean / Median | MD(x̄) = (1/N) Σ fᵢ abs(xᵢ - x̄) | Modulus kabhi mat bhoolo; Median ke liye pehle sort karo |
| Standard spread (algebraically clean) | σ² = (1/N) Σ fᵢ xᵢ² - (x̄)², σ = √(σ²) | "Mean of Squares MINUS Square of Mean" |
| Bade grouped numbers ka Variance & SD | Step-Deviation yᵢ = (xᵢ - A)/h | End mein h² (variance) ya h (SD) se multiply zaroor karo |
| Do alag means ya alag units wale datasets compare karna | CV = (σ / x̄) × 100% | **Chhota CV = zyada consistent**! |
| Wrong observation fix karna / missing values | Pehle Σ xᵢ = n x̄ aur Σ xᵢ² = n(σ² + x̄²) nikaalo | Wrong² ghatao, Right² jodo; omit karne par n -> n - 1 karo! |

---

## 6 Rich Mixed Synthesis Problems (Step-by-Step With Jaanch)

### Problem 4.1: Finding Two Missing Observations From Mean And Variance
**Sawaal:** 5 observations ka Mean 4.4 aur Variance 8.24 hai. Agar unme se teen observations 1, 2, aur 6 hon, to baaki do observations gyat karo.

**Solution:**
Maan lo baaki do observations x aur y hain.
1. **Mean se x + y nikaalo:**
   (1 + 2 + 6 + x + y) / 5 = 4.4
   9 + x + y = 22 => **x + y = 13**   --- (1)

2. **Variance shortcut se x² + y² nikaalo:**
   σ² = (1/5) Σ xᵢ² - (x̄)²
   8.24 = (1/5)(1² + 2² + 6² + x² + y²) - (4.4)²
   8.24 + 19.36 = (1/5)(41 + x² + y²)
   27.60 × 5 = 41 + x² + y²
   138 = 41 + x² + y² => **x² + y² = 97**   --- (2)

3. **Identity (x + y)² = x² + y² + 2xy lagao:**
   13² = 97 + 2xy => 169 - 97 = 2xy => 2xy = 72 => **xy = 36**.

4. Ab (x - y)² = (x + y)² - 4xy = 169 - 144 = 25 => **x - y = ±5**.
   x + y = 13 aur x - y = 5 solve karne par: **x = 9, y = 4** (ya 4, 9).

Isliye baaki do observations **4 aur 9** hain!

Jaanch:
- Jaanch: Data {1, 2, 4, 6, 9}: Mean = 22/5 = 4.4; Σ xᵢ² = 1 + 4 + 16 + 36 + 81 = 138 => σ² = 138/5 - 19.36 = 27.6 - 19.36 = 8.24 ✅

---

### Problem 4.2: Correcting A Misread Observation (Omit vs Replace)
**Sawaal:** 20 observations ka Mean 10 aur SD 2 paya gaya. Baad mein pata chala ki ek observation 8 galti se likhi gayi thi. Corrected Mean aur SD gyat karo agar:
(a) Galat observation 8 ko hata (omit) diya jaye.
(b) Galat observation 8 ko sahi value 12 se replace kar diya jaye.

**Solution:**
Pehle galat (incorrect) sums nikaalo (n = 20, x̄ = 10, σ = 2 => σ² = 4):
- Incorrect Σ xᵢ = 20 × 10 = **200**.
- Incorrect Σ xᵢ² = n(σ² + x̄²) = 20(4 + 100) = 20 × 104 = **2080**.

**(a) Agar 8 ko omit kar diya jaye (naya n = 19!):**
- Corrected Σ xᵢ = 200 - 8 = 192 => **New Mean** = 192 / 19 ≈ **10.11**.
- Corrected Σ xᵢ² = 2080 - 8² = 2080 - 64 = 2016.
- New Variance = 2016/19 - (192/19)² = (2016 × 19 - 36864) / 361 = (38304 - 36864) / 361 = 1440 / 361 ≈ 3.99.
- **New SD** = √(1440/361) = (12√10)/19 ≈ **2.00**.

**(b) Agar 8 ko 12 se replace kar diya jaye (n = 20 hi rahega!):**
- Corrected Σ xᵢ = 200 - 8 + 12 = 204 => **New Mean** = 204 / 20 = **10.2**.
- Corrected Σ xᵢ² = 2080 - 8² + 12² = 2080 - 64 + 144 = 2160.
- New Variance = 2160/20 - (10.2)² = 108 - 104.04 = **3.96**.
- **New SD** = √3.96 ≈ **1.99**.

Jaanch:
- Jaanch (b): 2160/20 = 108, 10.2² = 104.04, 108 - 104.04 = 3.96 > 0 ✅

---

### Problem 4.3: Mean And Variance Of First n Even Natural Numbers
**Sawaal:** Pehle n even natural numbers 2, 4, 6, ..., 2n ka Mean aur Variance gyat karo.

**Solution:**
Har even natural number pehle n natural numbers (1, 2, 3, ..., n) ka **2 guna** hai: yᵢ = 2xᵢ!
Topic 2 (Example 2.2) se pehle n natural numbers ke liye:
x̄ = (n + 1)/2   aur   σ_x² = (n² - 1)/12.

Topic 3 ke scale rule (a = 2, b = 0) se:
- **Mean ȳ** = 2 · x̄ = 2 · [(n + 1)/2] = **n + 1**.
- **Variance σ_y²** = 2² · σ_x² = 4 · [(n² - 1)/12] = **(n² - 1) / 3**.

Jaanch:
- Jaanch: For n = 4 ({2, 4, 6, 8}): Mean = 5 = 4 + 1, deviations {-3, -1, 1, 3} => σ² = 20/4 = 5 = (16 - 1)/3 ✅

---

### Problem 4.4: Algebraic Proof Of Shift And Scale Property
**Sawaal:** Prove karo ki agar har observation xᵢ ko yᵢ = a xᵢ + b (a ≠ 0) se badla jaye, to σ_y² = a² σ_x² hota hai.

**Solution:**
1. New Mean:
   ȳ = (1/n) Σ yᵢ = (1/n) Σ (a xᵢ + b) = a [(1/n) Σ xᵢ] + (1/n)(nb) = **a x̄ + b**.
2. Deviation:
   yᵢ - ȳ = (a xᵢ + b) - (a x̄ + b) = a(xᵢ - x̄).
3. New Variance:
   σ_y² = (1/n) Σ (yᵢ - ȳ)²
   = (1/n) Σ [a(xᵢ - x̄)]²
   = a² · [ (1/n) Σ (xᵢ - x̄)² ]
   = **a² · σ_x²**.
   Aur square root lene par: **σ_y = |a| · σ_x**.

Jaanch:
- Jaanch: When a = 1 (pure shift yᵢ = xᵢ + b), σ_y² = 1² · σ_x² = σ_x² (unchanged!) ✅

---

### Problem 4.5: Comparing Two Grouped Distributions Via CV
**Sawaal:** Do plants P aur Q ke daily defect counts ke grouped distributions neeche diye hain (N = 10 days each). Kaun sa plant zyada consistent hai?
Classes: 0-10, 10-20, 20-30
- Plant P frequencies: 2, 6, 2
- Plant Q frequencies: 1, 8, 1

**Solution:**
Midpoints xᵢ: 5, 15, 25. Take A = 15, h = 10 => yᵢ = -1, 0, 1.

**Plant P:**
- Σ fᵢ yᵢ = 2(-1) + 6(0) + 2(1) = 0 => **x̄_P = 15**.
- Σ fᵢ yᵢ² = 2(1) + 0 + 2(1) = 4 => σ_P² = 100(4/10) = **40** => σ_P = √40 ≈ **6.32**.
- CV(P) = (6.32 / 15) × 100 ≈ **42.16%**.

**Plant Q:**
- Σ fᵢ yᵢ = 1(-1) + 8(0) + 1(1) = 0 => **x̄_Q = 15**.
- Σ fᵢ yᵢ² = 1(1) + 0 + 1(1) = 2 => σ_Q² = 100(2/10) = **20** => σ_Q = √20 ≈ **4.47**.
- CV(Q) = (4.47 / 15) × 100 ≈ **29.81%**.

Kyunki CV(Q) < CV(P) (29.81% < 42.16%), **Plant Q zyada consistent hai**!

Jaanch:
- Jaanch: Both have same mean 15, and Plant Q concentrates 8 of 10 days in the middle class (σ² = 20 < 40) ✅

---

### Problem 4.6: Finding Number Of Observations n From Mean, SD, And Σ xᵢ²
**Sawaal:** Ek dataset ka Mean 12, Standard Deviation 3, aur sabhi observations ke squares ka sum Σ xᵢ² = 1530 hai. Observations ki sankhya n gyat karo.

**Solution:**
Shortcut formula: σ² = (1/n) Σ xᵢ² - (x̄)²
3² = 1530/n - 12²
9 = 1530/n - 144
1530/n = 144 + 9 = 153
n = 1530 / 153 = **10**.

Jaanch:
- Jaanch: n = 10 par 1530/10 - 144 = 153 - 144 = 9 = 3² ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Misread value fix karte waqt Σ xᵢ² update karna bhool jaana
- **Galat soch:** "Mean change karke 10.2 kar diya, par Σ xᵢ² purana 2080 hi rakh diya!"
- **Sahi samajh:** Jab 8 ki jagah 12 aata hai, to Σ xᵢ² bhi badalta hai: **2080 - 8² + 12² = 2160**!

### Galti 2: Observation omit karne par bhi n se hi divide karna
- **Galat soch:** "20 mein se 1 observation hata di, phir bhi new mean = 192 / 20."
- **Sahi samajh:** Ek observation hataane ke baad total count **n - 1 = 19** bachta hai!

### Galti 3: Σ xᵢ² aur (Σ xᵢ)² ko ek hi samajh lena
- **Galat soch:** "Σ xᵢ = 200 hai, isliye Σ xᵢ² = 200² = 40000."
- **Sahi samajh:** (Σ xᵢ)² pehle jodkar square karna hai (40000), jabki Σ xᵢ² har term ka alag square karke jodna hai (yahan 2080)! Dono bilkul alag hain!

---

## Quick Recap

- **Inverse / Correction toolkit:** Always extract **Σ xᵢ = n x̄** and **Σ xᵢ² = n(σ² + x̄²)** first!
- **Replace wrong with right:** New Σ xᵢ = Old - wrong + right; New Σ xᵢ² = Old - wrong² + right² (n unchanged).
- **Omit wrong:** New Σ xᵢ = Old - wrong; New Σ xᵢ² = Old - wrong² (n becomes n - 1).
- **First n even natural numbers:** Mean = n + 1, Variance = (n² - 1)/3.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
The mean and variance of 8 observations are 9 and 9.25 respectively. If six of the observations are 6, 7, 10, 12, 12, and 13, find the remaining two observations.

**Solution:**
Let missing observations be x and y.
- Σ xᵢ = 8 × 9 = 72. Known sum = 6 + 7 + 10 + 12 + 12 + 13 = 60 => **x + y = 12**.
- Σ xᵢ² = 8(9.25 + 81) = 8(90.25) = 722.
  Known squares sum = 36 + 49 + 100 + 144 + 144 + 169 = 642 => **x² + y² = 80**.
- 2xy = (x + y)² - (x² + y²) = 144 - 80 = 64 => xy = 32.
- (x - y)² = 144 - 128 = 16 => x - y = ±4 => **x = 8, y = 4** (or 4, 8).

Jaanch:
- Jaanch: 4 + 8 = 12 and 4² + 8² = 16 + 64 = 80 ✅

---

### Question 2
The mean and variance of 7 observations are 8 and 16 respectively. If five of the observations are 2, 4, 10, 12, and 14, find the remaining two observations.

**Solution:**
- Σ xᵢ = 7 × 8 = 56. Known sum = 42 => **x + y = 14**.
- Σ xᵢ² = 7(16 + 64) = 560. Known squares sum = 4 + 16 + 100 + 144 + 196 = 460 => **x² + y² = 100**.
- 2xy = 196 - 100 = 96 => xy = 48.
- (x - y)² = 196 - 192 = 4 => x - y = ±2 => **x = 8, y = 6**.

Jaanch:
- Jaanch: 6 + 8 = 14 and 36 + 64 = 100 ✅

---

### Question 3
The mean and SD of 100 observations were calculated as 40 and 5.1 respectively, by a student who took by mistake 50 instead of 40 for one observation. Find the correct mean and SD.

**Solution:**
Incorrect Σ xᵢ = 100 × 40 = 4000.
Incorrect Σ xᵢ² = 100(5.1² + 40²) = 100(26.01 + 1600) = 162601.
Replace wrong 50 with right 40:
- Correct Σ xᵢ = 4000 - 50 + 40 = 3990 => **Correct Mean** = 3990/100 = **39.9**.
- Correct Σ xᵢ² = 162601 - 2500 + 1600 = 161701.
- Correct Variance = 161701/100 - (39.9)² = 1617.01 - 1592.01 = **25**.
- **Correct SD** = √25 = **5**!

Jaanch:
- Jaanch: 1617.01 - 1592.01 = 25.00 exact => SD = 5 ✅

---

### Question 4
The mean and SD of 6 observations are 8 and 4 respectively. If each observation is multiplied by 3, find the new mean and new SD.

**Solution:**
yᵢ = 3xᵢ => **New Mean** = 3(8) = **24**, **New SD** = 3(4) = **12**.

Jaanch:
- Jaanch: New variance = 9 × 16 = 144 => √144 = 12 ✅

---

### Question 5
Find the mean and variance of the first n odd natural numbers: 1, 3, 5, ..., (2n - 1).

**Solution:**
Every odd number is yᵢ = 2xᵢ - 1 where xᵢ = 1, 2, ..., n!
Using x̄ = (n + 1)/2 and σ_x² = (n² - 1)/12:
- **Mean ȳ** = 2[(n + 1)/2] - 1 = **n**.
- **Variance σ_y²** = 2² · [(n² - 1)/12] = **(n² - 1) / 3**.

Jaanch:
- Jaanch: For n = 3 ({1, 3, 5}): Mean = 3 = n, σ² = (4 + 0 + 4)/3 = 8/3 = (9 - 1)/3 ✅

---

### Question 6
Given x̄ = 15, σ = 4, and Σ xᵢ² = 2410, find the number of observations n.

**Solution:**
σ² = Σ xᵢ² / n - x̄² => 16 = 2410/n - 225 => 2410/n = 241 => **n = 10**.

Jaanch:
- Jaanch: 2410/10 - 225 = 241 - 225 = 16 = 4² ✅

---

### Question 7
The mean of 5 observations is 15 and their variance is 18. If one observation equal to 15 is omitted, find the new mean and new variance.

**Solution:**
Old Σ xᵢ = 75, Old Σ xᵢ² = 5(18 + 225) = 1215.
Omit 15 (new n = 4):
- New Σ xᵢ = 75 - 15 = 60 => **New Mean** = 60/4 = **15**.
- New Σ xᵢ² = 1215 - 225 = 990 => **New Variance** = 990/4 - 225 = 247.5 - 225 = **22.5**.

Jaanch:
- Jaanch: Omitting a value equal to the mean keeps Σ(xᵢ - 15)² = 5 × 18 = 90 unchanged, divided by 4 gives 90/4 = 22.5 ✅

---

### Question 8
For a group of 50 items, Σ(xᵢ - 5) = 10 and Σ(xᵢ - 5)² = 162. Find the mean and standard deviation.

**Solution:**
Let dᵢ = xᵢ - 5. Then:
- d̄ = 10 / 50 = 0.2 => **x̄** = 5 + 0.2 = **5.2**.
- σ_x² = σ_d² = 162/50 - (0.2)² = 3.24 - 0.04 = **3.20**.
- **σ_x** = √3.20 ≈ **1.79**.

Jaanch:
- Jaanch: Shift of -5 does not affect variance: 3.24 - 0.04 = 3.20 ✅

---

### Question 9
The mean and SD of 20 observations are 10 and 2 respectively. On rechecking, it was found that two observations 8 and 10 were wrongly copied instead of 10 and 12 respectively. Find the correct mean and variance.

**Solution:**
Old Σ xᵢ = 200, Old Σ xᵢ² = 20(4 + 100) = 2080.
- Correct Σ xᵢ = 200 - (8 + 10) + (10 + 12) = 204 => **Correct Mean** = 204/20 = **10.2**.
- Correct Σ xᵢ² = 2080 - (64 + 100) + (100 + 144) = 2160.
- **Correct Variance** = 2160/20 - 10.2² = 108 - 104.04 = **3.96**.

Jaanch:
- Jaanch: Replacing 8 with 10 and 10 with 12 has the exact same net effect as replacing 8 with 12! ✅

---

### Question 10
If the CV of a dataset is 20% and its variance is 36, find its mean (assuming mean > 0).

**Solution:**
σ = √36 = 6.
CV = (σ / x̄) × 100 => 20 = (6 / x̄) × 100 => x̄ = 600 / 20 = **30**.

Jaanch:
- Jaanch: (6 / 30) × 100 = 20% ✅

---

### Question 11
Find the Mean Deviation about the Mean and the Standard Deviation of the three numbers 2, 5, 8. Which one is larger?

**Solution:**
Mean x̄ = 5. Deviations: -3, 0, +3.
- **MD(x̄)** = (3 + 0 + 3) / 3 = **2**.
- **σ** = √[(9 + 0 + 9)/3] = √6 ≈ **2.45**.
Standard Deviation (2.45) is larger than Mean Deviation (2) — in fact, for ANY dataset, **σ ≥ MD(x̄)**!

Jaanch:
- Jaanch: √6 ≈ 2.449 > 2 ✅

---

### Question 12
Two distributions have the same standard deviation σ = 8. Distribution A has mean 40 and Distribution B has mean 80. Which distribution is more consistent?

**Solution:**
- CV(A) = (8 / 40) × 100 = **20%**.
- CV(B) = (8 / 80) × 100 = **10%**.
Since CV(B) < CV(A), **Distribution B** is more consistent.

Jaanch:
- Jaanch: Same SD with double the mean cuts CV in half (10% < 20%) ✅

---

## Chapter Wrap-up Table

| Measure / Concept | Formula | Key Properties & When to Use |
|---|---|---|
| **Range** | Max - Min | Quickest spread; ignores middle values, sensitive to outliers |
| **Mean Deviation (Ungrouped)** | MD(A) = (1/n) Σ abs(xᵢ - A) | A = Mean x̄ ya Median M; MD(M) ≤ MD(x̄) |
| **Mean Deviation (Grouped)** | MD(A) = (1/N) Σ fᵢ abs(xᵢ - A) | Use class midpoints xᵢ; always divide by N = Σ fᵢ |
| **Variance (Direct & Shortcut)** | σ² = (1/N) Σ fᵢ (xᵢ - x̄)²<br>= (1/N) Σ fᵢ xᵢ² - (x̄)² | Always ≥ 0; "Mean of Squares MINUS Square of Mean" |
| **Standard Deviation (σ)** | σ = √(σ²) | Same unit as original data; σ = 0 iff all values identical |
| **Step-Deviation Method** | yᵢ = (xᵢ - A)/h<br>σ² = (h²/N²)[N Σ fᵢ yᵢ² - (Σ fᵢ yᵢ)²] | Best for large grouped data with uniform width h |
| **Coefficient of Variation (CV)** | CV = (σ / x̄) × 100% (x̄ ≠ 0) | Unit-free; **smaller CV = more consistent**, larger CV = more variable |
| **Change of Origin & Scale** | yᵢ = a xᵢ + b => ȳ = ax̄ + b<br>σ_y = abs(a) σ_x, σ_y² = a² σ_x² | Shift b changes mean only, NOT variance or SD! |
| **First n Natural / Even / Odd** | Natural: σ² = (n² - 1)/12<br>Even / Odd: σ² = (n² - 1)/3 | Derived from Σ k and Σ k² + scale factor 2² = 4 |

---

Ab tumne poore **Statistics** chapter — Range, Mean Deviation, Variance, Standard Deviation, aur Coefficient of Variation — ko poori tarah master kar liya hai!

Agle aur Class 11 Mathematics ke aakhri chapter **Probability** mein hum uncertainty ko numbers mein badalna seekhenge — **Random Experiments, Sample Spaces, Events, aur Axiomatic Probability** ke zariye!
