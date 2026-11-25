# Errors in Measurement & Propagation of Errors

> **Pichle topic se:** [Applications of Dimensional Analysis](units-and-measurements-part3.md) mein humne equations ko dimensionally check aur derive karna seekha. Ab hum real-world lab ki taraf chalte hain — jahan har measurement mein thoda uncertainty (error) hota hai!

---

## Mridul ka Stopwatch aur Thermometer Test

Mridul school physics lab ka monitor hai. Ek metal rod ki true length **10.00 cm** hai. Do students ne ise 3-3 baar naapa:
- Student A: 9.81 cm, 9.82 cm, 9.80 cm
- Student B: 9.95 cm, 10.06 cm, 9.99 cm

Mridul ne dekha: Student A ki readings aapas mein bahut close hain, par true value 10.00 cm se door hain (**precise, par accurate nahi**). Student B ki readings thodi faili hui hain, par unka average 10.00 cm ke bilkul paas hai (**accurate, par kam precise**).

Chalo samajhte hain errors kya hote hain aur jab hum readings ko formulas mein dalte hain toh errors kaise badhte (propagate) hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Accuracy | Measured value true (asli) value ke kitni close hai |
| Precision | Instrument kitne fine resolution tak naap sakta hai, aur repeated readings aapas mein kitni close hain |
| Systematic Error | Ek hi direction (+ ya -) mein lagatar aane wala error (jaise faulty calibration ya zero error) |
| Random Error | Unpredictable fluctuations (jaise hawa, temperature, reaction time) se aane wala error — ise baar-baar reading le kar average nikalne se kam kiya jata hai |
| Least Count Error | Instrument ke sabse chhote division (least count) ki limit ki wajah se aane wala error |
| Absolute Error (Δa) | True value aur measured value ka magnitude difference |
| Relative Error | Mean absolute error divided by mean value (Δa_mean / a_mean) |
| Percentage Error | Relative error × 100% |

---

## 1. Accuracy vs Precision

```
  True value = 10.00 cm

  High Precision, Low Accuracy:   9.81, 9.82, 9.80  (tight cluster, wrong spot)
  Low Precision, High Accuracy:   9.95, 10.06, 9.99 (spread out, average = 10.00)
  High Precision, High Accuracy:  9.99, 10.00, 10.01 (tight cluster at true spot)
```

Lab mein hum dono chahte hain — accurate bhi aur precise bhi!

---

## 2. Quantifying Errors (Absolute, Mean Absolute, Relative, Percentage)

Maan lo humne ek quantity ko n baar measure kiya: a₁, a₂, ..., aₙ.

1. **Mean Value (Best estimate of true value):**
   a_mean = (a₁ + a₂ + ... + aₙ) / n

2. **Individual Absolute Errors:**
   Δaᵢ = a_mean - aᵢ  (ya magnitude |a_mean - aᵢ|)

3. **Mean Absolute Error:**
   Δa_mean = (|Δa₁| + |Δa₂| + ... + |Δaₙ|) / n

   Final reading likhi jati hai: **a = a_mean ± Δa_mean**

4. **Relative Error:**
   δa = Δa_mean / a_mean

5. **Percentage Error:**
   Percentage error = (Δa_mean / a_mean) × 100%

---

## 3. Propagation (Combination) of Errors

Jab hum measured quantities A ± ΔA aur B ± ΔB ko kisi formula mein use karte hain, toh final result Z ± ΔZ mein **maximum possible error** kitna hoga?

### Case A: Sum and Difference (Z = A + B  ya  Z = A - B)

```
  Maximum absolute error:   ΔZ = ΔA + ΔB
```

**Kyun?**
Difference Z = A - B mein worst case tab aata hai jab A apne maximum (A + ΔA) par ho aur B apne minimum (B - ΔB) par ho:
Z_max = (A + ΔA) - (B - ΔB) = (A - B) + (ΔA + ΔB).
Isliye chahe quantities **add hon ya subtract**, unke **absolute errors HAMESHA ADD hote hain**!

### Case B: Product and Quotient (Z = A × B  ya  Z = A / B)

```
  Maximum relative error:   ΔZ / Z = ΔA / A + ΔB / B
  Percentage error:         %Z = %A + %B
```

**Kyun?**
Z = A B mein:
Z ± ΔZ = (A ± ΔA)(B ± ΔB) = A B ± A ΔB ± B ΔA ± ΔA ΔB.
Chhota product (ΔA ΔB) ignore karke dono taraf Z = A B se divide karne par:
ΔZ / Z = ΔA / A + ΔB / B.
Bilkul yahi worst-case result division Z = A / B mein bhi milta hai (jab numerator max aur denominator min ho).

### Case C: Powers (Z = Aᵖ B^q / Cʳ)

```
  Maximum relative error:   ΔZ / Z = p (ΔA / A) + q (ΔB / B) + r (ΔC / C)
  Percentage error:         %Z = p (%A) + q (%B) + r (%C)
```

**Kyun?**
Aᵖ ka matlab hai A × A × ... (p baar). Case B lagane par (ΔA/A) p baar add hota hai, yani p (ΔA/A)! Aur denominator ke Cʳ ka error bhi **add** hi hota hai (subtract nahi!).

---

## Solved Examples

### Example 1: Five Pendulum Readings (Absolute, Mean Absolute & Percentage Error)

In an experiment, the time period of a simple pendulum was measured 5 times as: 2.63 s, 2.56 s, 2.42 s, 2.71 s, and 2.80 s. Calculate the mean value, mean absolute error, relative error, and percentage error.

**Solution:**
1. **Mean time period:**
   T_mean = (2.63 + 2.56 + 2.42 + 2.71 + 2.80) / 5 = 13.12 / 5 = 2.624 s ≈ **2.62 s** (rounded to 2 decimal places like the readings).

2. **Absolute errors |T_mean - Tᵢ|:**
   - |2.62 - 2.63| = 0.01 s
   - |2.62 - 2.56| = 0.06 s
   - |2.62 - 2.42| = 0.20 s
   - |2.62 - 2.71| = 0.09 s
   - |2.62 - 2.80| = 0.18 s

3. **Mean absolute error:**
   ΔT_mean = (0.01 + 0.06 + 0.20 + 0.09 + 0.18) / 5 = 0.54 / 5 = 0.108 s ≈ **0.11 s**.
   So T = **2.62 ± 0.11 s**.

4. **Relative error:**
   δT = 0.11 / 2.62 ≈ **0.042**

5. **Percentage error:**
   (0.11 / 2.62) × 100% ≈ **4.2%**

Jaanch:
- Jaanch: Sum of readings = 13.12; sum of |ΔT| = 0.54; 0.54 / 5 = 0.108 ≈ 0.11; (0.11/2.62)×100 ≈ 4.20% ✅

---

### Example 2: Error in Difference (Temperature Rise)

The initial and final temperatures of a water bath are measured as T₁ = 20.5 ± 0.3 °C and T₂ = 48.2 ± 0.4 °C. Find the rise in temperature with error limits.

**Solution:**
Rise in temperature: T = T₂ - T₁ = 48.2 - 20.5 = 27.7 °C.
Maximum absolute error (errors ADD even in subtraction!):
ΔT = ΔT₁ + ΔT₂ = 0.3 + 0.4 = 0.7 °C.
So rise in temperature = **27.7 ± 0.7 °C**.

Jaanch:
- Jaanch: Max possible rise = 48.6 - 20.2 = 28.4 = 27.7 + 0.7; Min possible rise = 47.8 - 20.8 = 27.0 = 27.7 - 0.7 ✅

---

### Example 3: Resistance R = V / I (Quotient Percentage Error)

The voltage across a resistor is V = 100 ± 5 V and the current through it is I = 10 ± 0.2 A. Find the percentage error in resistance R = V / I, and express R as R ± ΔR.

**Solution:**
- Nominal resistance: R = V / I = 100 / 10 = 10 Ω.
- Percentage error in V = (5 / 100) × 100% = 5%.
- Percentage error in I = (0.2 / 10) × 100% = 2%.
- Since R = V / I, percentage errors ADD:
  % error in R = 5% + 2% = **7%**.
- Absolute error ΔR = 7% of 10 Ω = 0.7 Ω.
- Final value: **R = 10 ± 0.7 Ω**.

Jaanch:
- Jaanch: ΔR/R = ΔV/V + ΔI/I = 0.05 + 0.02 = 0.07 => 7% of 10 Ω = 0.7 Ω ✅

---

### Example 4: Multi-Power Formula Z = A⁴ B^(1/3) / (C D^(3/2))

A physical quantity Z is given by Z = A⁴ B^(1/3) / (C D^(3/2)). If the percentage errors in A, B, C, and D are 1%, 3%, 2%, and 4% respectively, find the maximum percentage error in Z.

**Solution:**
Using the power rule (all terms ADD with positive exponents):
% error in Z = 4 (%A) + (1/3) (%B) + 1 (%C) + (3/2) (%D)
% error in Z = 4(1%) + (1/3)(3%) + 1(2%) + (3/2)(4%)
% error in Z = 4% + 1% + 2% + 6% = **13%**.

Jaanch:
- Jaanch: 4 + 1 + 2 + 6 = 13%; denominator powers (1 aur 3/2) bhi add kiye gaye hain ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Subtraction mein errors ko subtract kar dena
- **Galat:** T = T₂ - T₁ mein ΔT = ΔT₂ - ΔT₁ = 0.4 - 0.3 = 0.1 °C.
- **Sahi:** Error uncertainty dikhata hai — do uncertain cheezon ka difference unse zyada uncertain hota hai, kam nahi! Hamesha **ΔZ = ΔA + ΔB**.

### Galti 2: Division Z = A / B mein percentage errors ko minus kar dena
- **Galat:** R = V / I mein %R = %V - %I = 5% - 2% = 3%.
- **Sahi:** Worst case tab hota hai jab V zyada ho aur I kam ho — dono errors milkar R ko aur bada galat banate hain! Hamesha **%R = %V + %I = 7%**.

### Galti 3: Power rule mein exponent se multiply karna bhool jana
- **Galat:** Z = A⁴ mein agar %A = 1%, toh %Z = 1%.
- **Sahi:** Exponent seedha percentage error ko multiply karta hai: **%Z = 4 × 1% = 4%**.

---

## Quick Recap

- **Accuracy** = closeness to true value; **Precision** = resolution / closeness among repeated readings.
- **Mean absolute error:** Δa_mean = (sum of |a_mean - aᵢ|) / n; **% error** = (Δa_mean / a_mean) × 100%.
- **Sum / Difference:** Z = A ± B => **ΔZ = ΔA + ΔB** (absolute errors add).
- **Product / Quotient:** Z = A B or A / B => **ΔZ / Z = ΔA / A + ΔB / B** (relative/% errors add).
- **Power:** Z = Aᵖ B^q / Cʳ => **%Z = p(%A) + q(%B) + r(%C)** (all exponents taken positive and added).

---

## Practice Questions

### Question 1
Two resistors R₁ = 150 ± 3 Ω and R₂ = 250 ± 5 Ω are connected in series. Find their equivalent resistance R_s = R₁ + R₂ with error limits.

**Solution:**
R_s = 150 + 250 = 400 Ω.
ΔR_s = ΔR₁ + ΔR₂ = 3 + 5 = 8 Ω.
So **R_s = 400 ± 8 Ω**.

Jaanch:
- Jaanch: 150 + 250 = 400 aur 3 + 5 = 8 ✅

---

### Question 2
The length and breadth of a rectangular sheet are L = 5.0 ± 0.1 cm and B = 4.0 ± 0.2 cm. Find the percentage error in its area A = L × B.

**Solution:**
%L = (0.1 / 5.0) × 100% = 2%.
%B = (0.2 / 4.0) × 100% = 5%.
%A = %L + %B = 2% + 5% = **7%**.

Jaanch:
- Jaanch: Area = 20 cm²; ΔA = 7% of 20 = 1.4 cm² ✅

---

### Question 3
If the percentage error in measuring the side of a cube is 2%, find the maximum percentage error in its: (a) surface area, (b) volume.

**Solution:**
(a) Surface area S = 6 a² => %S = 2 × (%a) = 2 × 2% = **4%**.
(b) Volume V = a³ => %V = 3 × (%a) = 3 × 2% = **6%**.

Jaanch:
- Jaanch: Constant 6 mein koi error nahi hota; powers 2 aur 3 multiply ho gayi ✅

---

### Question 4
In an experiment to measure the refractive index of glass, 4 readings were obtained: 1.54, 1.52, 1.56, and 1.50. Calculate the mean value and mean absolute error.

**Solution:**
Mean μ_mean = (1.54 + 1.52 + 1.56 + 1.50) / 4 = 6.12 / 4 = **1.53**.
Absolute errors: |1.53 - 1.54| = 0.01, |1.53 - 1.52| = 0.01, |1.53 - 1.56| = 0.03, |1.53 - 1.50| = 0.03.
Δμ_mean = (0.01 + 0.01 + 0.03 + 0.03) / 4 = 0.08 / 4 = **0.02**.
Result: **1.53 ± 0.02**.

Jaanch:
- Jaanch: 6.12 / 4 = 1.53; 0.08 / 4 = 0.02 ✅

---

### Question 5
The mass of a block is 20.0 ± 0.4 g and its volume is 10.0 ± 0.5 cm³. Find the density ρ = m / V with its maximum absolute error.

**Solution:**
ρ = 20.0 / 10.0 = 2.0 g cm⁻³.
Δρ / ρ = Δm / m + ΔV / V = (0.4 / 20.0) + (0.5 / 10.0) = 0.02 + 0.05 = 0.07 (7%).
Δρ = 0.07 × 2.0 = 0.14 g cm⁻³.
So **ρ = 2.00 ± 0.14 g cm⁻³**.

Jaanch:
- Jaanch: %m = 2%, %V = 5% => %ρ = 7%; 7% of 2.0 = 0.14 ✅

---

### Question 6
The period of oscillation of a simple pendulum is T = 2π √(L / g). If the measured length L has a 1% error and time period T has a 2% error, find the maximum percentage error in g.

**Solution:**
Squaring both sides: T² = 4π² L / g => g = 4π² L / T².
So %g = %L + 2 (%T) = 1% + 2(2%) = **5%**.

Jaanch:
- Jaanch: T denominator mein square hai, par error propagation mein +2(%T) add hota hai ✅

---

### Question 7
The kinetic energy of a moving body is K = (1/2) m v². If the percentage errors in mass m and velocity v are 1.5% and 2.5% respectively, find the maximum percentage error in K.

**Solution:**
%K = %m + 2 (%v) = 1.5% + 2(2.5%) = 1.5% + 5.0% = **6.5%**.

Jaanch:
- Jaanch: Constant 1/2 ka error 0% hai; 1.5 + 5.0 = 6.5% ✅

---

### Question 8
Two lengths are measured as L₁ = 12.4 ± 0.2 cm and L₂ = 7.2 ± 0.1 cm. Find (L₁ - L₂) with error limits and its percentage error.

**Solution:**
L = L₁ - L₂ = 12.4 - 7.2 = 5.2 cm.
ΔL = ΔL₁ + ΔL₂ = 0.2 + 0.1 = 0.3 cm.
So **L = 5.2 ± 0.3 cm**.
Percentage error = (0.3 / 5.2) × 100% ≈ **5.77%**.

Jaanch:
- Jaanch: Notice karo L chhota hua par ΔL add hua, isliye % error badh gaya (0.3/5.2 = 0.05769) ✅

---

### Question 9
A physical quantity X is calculated from X = a² b³ / (c √d). If the percentage errors in a, b, c, and d are 1%, 2%, 3%, and 4% respectively, find the percentage error in X.

**Solution:**
%X = 2(%a) + 3(%b) + 1(%c) + (1/2)(%d)
%X = 2(1%) + 3(2%) + 1(3%) + (1/2)(4%) = 2% + 6% + 3% + 2% = **13%**.

Jaanch:
- Jaanch: 2 + 6 + 3 + 2 = 13% ✅

---

### Question 10
A stopwatch has a least count of 0.2 s. The time for 20 oscillations of a pendulum is measured to be 25.0 s. Find the percentage error in the measurement of time.

**Solution:**
Least count error Δt = 0.2 s, total time t = 25.0 s.
Percentage error = (Δt / t) × 100% = (0.2 / 25.0) × 100% = **0.8%**.

Jaanch:
- Jaanch: 20 oscillations measure karne se same 0.2 s error bade time (25 s) par distribute ho kar sirf 0.8% reh gaya ✅

---

### Question 11
State whether the following statements are True or False:
(a) Increasing the number of repeated readings reduces random error.
(b) A more precise instrument always gives a more accurate reading.

**Solution:**
- (a) **True** ✅ — N readings ka average lene se random fluctuations cancel hone lagte hain.
- (b) **False** ❌ — Agar instrument mein zero error ya wrong calibration hai, toh woh bahut precise hote hue bhi galat (inaccurate) reading dega.

Jaanch:
- Jaanch: Mridul ke Student A example (9.81, 9.82, 9.80) se (b) seedha verify hota hai ✅

---

### Question 12
The radius of a wire is measured as r = 0.50 ± 0.01 mm. Find the percentage error in its cross-sectional area A = π r².

**Solution:**
%r = (0.01 / 0.50) × 100% = 2%.
Since A = π r², %A = 2 × (%r) = 2 × 2% = **4%**.

Jaanch:
- Jaanch: 0.01 / 0.50 = 1/50 = 2%; multiply by power 2 => 4% ✅

---

Ab jab bhi tum lab mein koi reading lo, tumhe sirf ek number nahi balki uske saath uska honest uncertainty range (± error) bhi pata hoga!

**Agle topic mein:** Kitne digits likhna honest hai aur Vernier Callipers / Screw Gauge se 0.01 mm tak kaise naapte hain — chalo padhte hain [Significant Figures, Vernier Callipers & Screw Gauge](units-and-measurements-part5.md).
