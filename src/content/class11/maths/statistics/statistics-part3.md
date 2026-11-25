# Chapter: Statistics (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [statistics-part2.md](statistics-part2.md) tha** (Topic 2: Variance σ² aur Standard Deviation σ).
> **Topics covered in this file:**
> 1. Analysis of Frequency Distributions, Coefficient of Variation (CV), Comparing Two Data Sets, Aur Change of Origin & Scale

---

# Topic 3: Analysis of Frequency Distributions Aur Comparing Two Data Sets

Topic 2 mein tumne Standard Deviation (σ) nikaalna seekha. Lekin ek zabardast sawal aata hai: agar hume **do bilkul alag datasets** ki consistency compare karni ho — jaise ek class ke bachchon ki **height (cm mein)** aur unka **weight (kg mein)**, ya do companies ke stock prices jinke average bilkul alag hain — to kya hum seedhe unke σ ko compare kar sakte hain?

Bilkul nahi! Ek ka unit cm hai aur doosre ka kg! Is problem ko solve karta hai ek unit-free (dimensionless) percentage measure: **Coefficient of Variation (CV)**! Chalo ise aur **Change of Origin & Scale** ke rules ko master karte hain!

---

## Bhupesh ka mutual-fund risk comparison

Bhupesh ek equity & mutual-fund risk analyst hai. Ek investor uske paas do shares lekar aaya:
- **Share X:** Average price x̄ = ₹2,500, Standard Deviation σ = ₹50
- **Share Y:** Average price x̄ = ₹5,000, Standard Deviation σ = ₹80

Investor bola: "Share X ka SD (₹50) Share Y (₹80) se kam hai, isliye Share X zyada stable (consistent) hai!"

Bhupesh muskuraaya: "Sir, Share Y ki keemat Share X se **duguni** hai! ₹2,500 par ₹50 ka utaar-chadhaav **2.0%** hai, jabki ₹5,000 par ₹80 ka utaar-chadhaav sirf **1.6%** hai! Relative stability naapne ke liye hum **Coefficient of Variation CV = (σ / x̄) × 100%** nikaalte hain — aur kam CV hone ki wajah se **Share Y zyada consistent hai**!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Coefficient of Variation (CV)** | SD aur Mean ka percentage ratio: CV = (σ / x̄) × 100% (x̄ ≠ 0) | (50 / 2500) × 100 = 2% |
| **More Consistent** | Jis dataset ka **CV chhota (smaller)** ho — values mean ke zyada kareeb hain | 1.6% < 2.0% => Y more consistent |
| **More Variable** | Jis dataset ka **CV bada (larger)** ho — values zyada bikhri hui hain | Higher CV = higher variability |
| **Change of Origin & Scale** | Har value ko yᵢ = a xᵢ + b se transform karna (b = origin shift, a = scale factor) | ȳ = ax̄ + b, σ_y = abs(a) σ_x |

---

## Part A: Coefficient Of Variation (CV) Aur Comparison Rules

**Formula:**
**CV = (σ / x̄) × 100**   *(jahan x̄ ≠ 0; CV ek pure percentage hai, koi unit nahi!)*

### Do Datasets Compare Karne Ke Do Pakke Rules:
1. **Jab dono datasets ka Mean (x̄) SAME ho (aur units same hon):**
   Seedhe **σ** compare karo! Jiska σ chhota, woh **more consistent** (aur jiska σ bada, woh more variable).
2. **Jab dono datasets ke Means ALAG hon ya Units ALAG hon (jaise cm vs kg):**
   Hamesha **CV = (σ / x̄) × 100%** nikaalo!
   - **Smaller CV => More consistent / more stable / more uniform**
   - **Larger CV => More variable / less consistent**

---

## Part B: Effect Of Change Of Origin And Scale (yᵢ = a xᵢ + b)

Maan lo kisi dataset x₁, x₂, ..., xₙ ka Mean **x̄**, Standard Deviation **σ_x**, aur Variance **σ_x²** hai.
Ab agar har observation ko **yᵢ = a xᵢ + b** (jahan a, b constants hain) mein badal diya jaye:

1. **New Mean:** **ȳ = a x̄ + b**  *(origin shift b aur scale a dono ka asar padta hai!)*
2. **Deviation:** yᵢ - ȳ = (a xᵢ + b) - (a x̄ + b) = **a(xᵢ - x̄)**  *(dekho: b bilkul cancel ho gaya!)*
3. **New Variance:** **σ_y² = a² · σ_x²**
4. **New Standard Deviation:** **σ_y = |a| · σ_x**  *(modulus |a| kyunki SD kabhi negative nahi hota!)*

> **Golden Takeaway:** Har number mein koi constant **b** jodne ya ghatane se Mean badalta hai, par **Variance aur Standard Deviation par ZERO asar padta hai**!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 3.1: Same Mean vs Different Means Comparison
**Sawaal:**
(a) Do factories A aur B ke workers ka average wage exact ₹5,253 hai. Factory A ka SD ₹10 aur Factory B ka SD ₹11 hai. Kaun si factory zyada variable wages deti hai?
(b) Firm X (x̄ = ₹2,500, σ = ₹50) aur Firm Y (x̄ = ₹5,000, σ = ₹80) mein se kaun zyada consistent hai?

**Solution:**
**(a)** Dono ka mean same (₹5,253) hai, isliye seedhe SD compare karo: 11 > 10 => **Factory B** mein greater variability hai (aur Factory A zyada consistent hai).

**(b)** Means alag hain, isliye CV nikaalo:
- CV(X) = (50 / 2500) × 100 = **2.0%**
- CV(Y) = (80 / 5000) × 100 = **1.6%**
Kyunki CV(Y) < CV(X) (1.6% < 2.0%), **Firm Y zyada consistent hai**!

Jaanch:
- Jaanch: 50/2500 = 1/50 = 2% aur 80/5000 = 8/500 = 1.6%; 1.6 < 2.0 ✅

---

### Example 3.2: Better Run-Getter vs More Consistent Batsman
**Sawaal:** Do batsmen ke 5 innings ke scores diye hain:
- Player A: 36, 42, 44, 48, 50
- Player B: 20, 35, 50, 65, 80
Kaun better run-getter hai, aur kaun zyada consistent hai?

**Solution:**
**Player A:**
- Mean x̄_A = (36 + 42 + 44 + 48 + 50)/5 = 220/5 = **44**.
- (xᵢ - 44)²: 64, 4, 0, 16, 36. Sum = 120 => σ_A² = 120/5 = 24 => σ_A = √24 ≈ **4.90**.
- CV(A) = (4.90 / 44) × 100 ≈ **11.13%**.

**Player B:**
- Mean x̄_B = (20 + 35 + 50 + 65 + 80)/5 = 250/5 = **50**.
- (xᵢ - 50)²: 900, 225, 0, 225, 900. Sum = 2250 => σ_B² = 2250/5 = 450 => σ_B = √450 ≈ **21.21**.
- CV(B) = (21.21 / 50) × 100 ≈ **42.43%**.

**Decision:**
- **Better run-getter (higher average):** **Player B** (50 > 44).
- **More consistent (lower CV):** **Player A** (11.13% < 42.43%).

Jaanch:
- Jaanch: 64 + 4 + 0 + 16 + 36 = 120 => 120/5 = 24; 900 + 225 + 0 + 225 + 900 = 2250 => 2250/5 = 450 ✅

---

### Example 3.3: Comparing Two Different Units (Height vs Weight)
**Sawaal:** Ek group ke students ki heights ka mean 162.6 cm aur variance 127.69 cm² hai, jabki unke weights ka mean 52.36 kg aur variance 23.1361 kg² hai. Kis mein zyada variability hai — heights mein ya weights mein?

**Solution:**
Units alag (cm vs kg) hain, isliye CV nikaalna compulsory hai!
- **Heights:** σ_H = √127.69 = **11.3 cm** => CV(Height) = (11.3 / 162.6) × 100 ≈ **6.95%**.
- **Weights:** σ_W = √23.1361 = **4.81 kg** => CV(Weight) = (4.81 / 52.36) × 100 ≈ **9.19%**.

Kyunki **9.19% > 6.95%**, **weights mein heights ke muqable zyada variability hai**!

Jaanch:
- Jaanch: 11.3² = 127.69 aur 4.81² = 23.1361 exact squares hain ✅

---

### Example 3.4: Effect Of Linear Transformation y = ax + b
**Sawaal:** Ek dataset ka mean 20 aur standard deviation 5 hai. Agar har observation xᵢ ko yᵢ = 3xᵢ - 7 mein badal diya jaye, to naya mean, naya SD, aur naya variance gyat karo.

**Solution:**
Yahan a = 3 aur b = -7.
- **New Mean:** ȳ = 3(20) - 7 = 60 - 7 = **53**.
- **New SD:** σ_y = |3| × 5 = **15**  *(shift -7 ka koi asar nahi!)*.
- **New Variance:** σ_y² = 15² = **225** (ya 3² × 25 = 225).

Jaanch:
- Jaanch: Scale factor a = 3 scales SD by 3 and variance by 9; shift -7 affects only mean ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Zyada CV ko "zyada consistent" samajh lena
- **Galat soch:** "Player B ka CV 42.43% hai aur Player A ka 11.13% — 42.43% bada hai to Player B zyada consistent hai!"
- **Sahi samajh:** Bilkul ulta! CV **variability (bikhraav)** naapta hai! **Kam CV = zyada consistent**, aur **zyada CV = zyada bikhra hua (less consistent)**!

### Galti 2: Alag units ya alag means hone par bhi seedhe σ compare karna
- **Galat soch:** "Height ka σ = 11.3 cm aur Weight ka σ = 4.81 kg, isliye heights zyada variable hain."
- **Sahi samajh:** cm aur kg ko seedhe compare karna apples aur oranges compare karne jaisa hai! Hamesha unit-free **CV** compare karo (yahan weights ka CV 9.19% > heights ka 6.95% nikla!).

### Galti 3: y = ax + b mein SD ke saath b bhi jod dena
- **Galat soch:** "yᵢ = 3xᵢ - 7 par σ_y = 3(5) - 7 = 8."
- **Sahi samajh:** Shift b poori number line ko bas aage-peechhe khiskata hai — spread bilkul nahi badalta! Sahi formula **σ_y = |a| · σ_x = 3 × 5 = 15** hai!

---

## Quick Recap

- **Coefficient of Variation:** CV = (σ / x̄) × 100% (dimensionless, x̄ ≠ 0).
- **Consistency Rule:** Lower CV => more consistent; Higher CV => more variable.
- **Same mean:** Compare σ directly. **Different means or units:** Always compare CV!
- **Change of Origin & Scale (yᵢ = axᵢ + b):** ȳ = ax̄ + b, σ_y = |a| σ_x, σ_y² = a² σ_x².

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
The coefficient of variation of two distributions are 60 and 70, and their standard deviations are 21 and 16 respectively. What are their arithmetic means?

**Solution:**
CV = (σ / x̄) × 100 => x̄ = (σ / CV) × 100.
- First mean: x̄₁ = (21 / 60) × 100 = **35**.
- Second mean: x̄₂ = (16 / 70) × 100 = 160 / 7 ≈ **22.86**.

Jaanch:
- Jaanch: (21/35) × 100 = 60% aur (16/(160/7)) × 100 = 70% ✅

---

### Question 2
The mean of a distribution is 50 and its standard deviation is 12. Find its Coefficient of Variation.

**Solution:**
CV = (12 / 50) × 100 = **24%**.

Jaanch:
- Jaanch: 12/50 = 0.24 = 24% ✅

---

### Question 3
Plant A has mean monthly wage ₹5,253 with variance 100, and Plant B has mean monthly wage ₹5,253 with variance 121. Which plant shows greater variability in individual wages?

**Solution:**
Means are equal (₹5,253).
- σ_A = √100 = ₹10
- σ_B = √121 = ₹11
Since σ_B > σ_A (11 > 10), **Plant B** shows greater variability.

Jaanch:
- Jaanch: Same mean => direct SD comparison is valid: 11 > 10 ✅

---

### Question 4
If every observation in a dataset with mean 45 and SD 6 is increased by 10, find the new mean and new SD.

**Solution:**
Here yᵢ = xᵢ + 10 (a = 1, b = 10).
- New Mean = 45 + 10 = **55**.
- New SD = |1| × 6 = **6** (unchanged!).

Jaanch:
- Jaanch: Adding a constant shifts mean by +10 and leaves SD unchanged ✅

---

### Question 5
If every observation in a dataset with mean 12 and variance 9 is multiplied by -4, find the new mean, new variance, and new SD.

**Solution:**
Here yᵢ = -4xᵢ (a = -4, b = 0). Old SD σ_x = √9 = 3.
- New Mean = -4(12) = **-48**.
- New Variance = (-4)² × 9 = 16 × 9 = **144**.
- New SD = |-4| × 3 = **12** (always positive!).

Jaanch:
- Jaanch: √144 = 12 = |-4| × 3 ✅

---

### Question 6
Two machines produce metal bolts. Machine P has mean length 20 mm and SD 0.4 mm; Machine Q has mean length 50 mm and SD 0.8 mm. Which machine is more consistent?

**Solution:**
- CV(P) = (0.4 / 20) × 100 = **2.0%**.
- CV(Q) = (0.8 / 50) × 100 = **1.6%**.
Since CV(Q) < CV(P), **Machine Q** is more consistent.

Jaanch:
- Jaanch: 0.4/20 = 0.02 (2%) and 0.8/50 = 0.016 (1.6%); 1.6% < 2% ✅

---

### Question 7
The CV of a dataset is 15% and its mean is 80. Find its standard deviation and variance.

**Solution:**
CV = (σ / x̄) × 100 => 15 = (σ / 80) × 100 => σ = (15 × 80)/100 = **12**.
Variance = σ² = 12² = **144**.

Jaanch:
- Jaanch: (12 / 80) × 100 = 15% ✅

---

### Question 8
Compare the consistency of two students' test scores:
- Student 1: 70, 75, 80, 85, 90
- Student 2: 40, 60, 80, 100, 120 (out of 120)

**Solution:**
- **Student 1:** x̄₁ = 80, deviations = -10, -5, 0, 5, 10 => σ₁² = 250/5 = 50 => σ₁ = √50 ≈ 7.07.
- **Student 2:** x̄₂ = 80, deviations = -40, -20, 0, 20, 40 => σ₂² = 4000/5 = 800 => σ₂ = √800 ≈ 28.28.
Both have the same mean (80). Since σ₁ < σ₂ (7.07 < 28.28), **Student 1 is much more consistent**!

Jaanch:
- Jaanch: Student 2's deviations are 4 times Student 1's => variance is 16 × 50 = 800 ✅

---

### Question 9
For a dataset, yᵢ = (xᵢ - 50) / 5. If ȳ = 2 and σ_y = 3, find x̄ and σ_x.

**Solution:**
Rewrite as xᵢ = 5yᵢ + 50 (a = 5, b = 50):
- **x̄** = 5(2) + 50 = **60**.
- **σ_x** = |5| × 3 = **15**.

Jaanch:
- Jaanch: (60 - 50)/5 = 2 = ȳ and 15/5 = 3 = σ_y ✅

---

### Question 10
Team X scored goals in 4 matches: 1, 2, 3, 2. Team Y scored: 0, 1, 4, 3. Compare their consistency using CV.

**Solution:**
- **Team X:** x̄_X = 8/4 = 2. Deviations: -1, 0, 1, 0 => σ_X² = 2/4 = 0.5 => σ_X = √0.5 ≈ 0.707. CV(X) = (0.707/2) × 100 ≈ **35.36%**.
- **Team Y:** x̄_Y = 8/4 = 2. Deviations: -2, -1, 2, 1 => σ_Y² = 10/4 = 2.5 => σ_Y = √2.5 ≈ 1.581. CV(Y) = (1.581/2) × 100 ≈ **79.06%**.
Since CV(X) < CV(Y), **Team X** is more consistent.

Jaanch:
- Jaanch: Both have mean 2, and 0.5 < 2.5 => Team X more consistent ✅

---

### Question 11
A dataset of prices in US Dollars has mean 40 USD and SD 5 USD. If converted to Indian Rupees at 1 USD = ₹84, what happens to the CV?

**Solution:**
Every value is multiplied by positive constant a = 84 (b = 0):
- New Mean = 84 × 40 = ₹3,360
- New SD = 84 × 5 = ₹420
- New CV = (420 / 3360) × 100 = (5 / 40) × 100 = **12.5%** — **CV remains completely unchanged!** (That's why CV is unit-independent!)

Jaanch:
- Jaanch: (a σ) / (a x̄) = σ / x̄ for any a > 0 ✅

---

### Question 12
Given two datasets with x̄₁ = 60, σ₁ = 15 and x̄₂ = 45, σ₂ = 9, which dataset has greater variability?

**Solution:**
- CV₁ = (15 / 60) × 100 = **25%**.
- CV₂ = (9 / 45) × 100 = **20%**.
Since CV₁ > CV₂ (25% > 20%), the **first dataset** has greater variability.

Jaanch:
- Jaanch: 15/60 = 1/4 = 25% and 9/45 = 1/5 = 20% ✅

---

Ab tum Coefficient of Variation aur linear transformations ke rules ko poori tarah master kar chuke ho! Agle aur aakhri topic [statistics-part4.md](statistics-part4.md) mein hum sabhi concepts ko mila kar **Missing Observations, Misread Data Corrections, Grouped CV Synthesis**, aur poore chapter ka **Wrap-up Table** dekhenge!
