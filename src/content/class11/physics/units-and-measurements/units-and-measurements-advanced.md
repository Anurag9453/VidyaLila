# Units and Measurements — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](units-and-measurements.md) se [Topic 6](units-and-measurements-part6.md)) mein humne SI units, dimensions, basic error propagation, sig figs aur standard Vernier/Screw Gauge cover kiye. Ab is **Gehrai Mein** section mein hum woh deep techniques dekhenge jo research labs aur toughest physics problems mein kaam aati hain — non-standard base dimensions, transcendental arguments, non-standard Vernier scales, aur differential error propagation!

---

## Upendra ka Astrophysics Lab Challenge

Upendra ek experimental astrophysics research fellow hai. Ek high-energy telescope project mein uski team ne mass, length, time ki jagah **Force (F), Velocity (V), aur Time (T)** ko fundamental units maan kar apna simulation banaya. Saath hi unke custom optical micrometer mein **20 VSD = 18 MSD** tha (standard 19 MSD nahi!), aur sensor circuit mein do resistors **parallel** mein lage the jinka error simple product rule se nahi nikalta.

Chalo Upendra ke saath in chaar high-level techniques ko ekdam crystal clear karte hain!

---

## 1. Non-Standard Fundamental Systems (e.g. F, V, T ya E, v, T)

Zaroori nahi ki hamesha M, L, T hi fundamental hon! Kisi bhi 3 dimensionally independent quantities (jaise Force F, Velocity V, Time T) ko base bana kar baaki sabhi quantities ko unke terms mein likha ja sakta hai.

**Method:**
Target quantity Q ke liye likho:
[Q] = [F]ᵃ [V]ᵇ [T]ᶜ
Phir dono taraf M, L, T mein khol do aur exponents compare karke a, b, c nikal lo!

Ya aur tez **Shortcut:**
- Velocity V = L / T => **[L] = [V T]**
- Force F = M L / T² => M = F T² / L = F T² / (V T) => **[M] = [F V⁻¹ T]**
Ek baar [M], [L], [T] mil gaye, toh kisi bhi quantity mein seedha substitute kar do!

---

## 2. Dimensionless Arguments of Transcendental Functions

Trigonometric (sin θ, cos θ, tan θ), exponential (eˣ), aur logarithmic (ln x, log x) functions ke **andar ka argument** aur **poora output** dono hamesha **dimensionless [M⁰ L⁰ T⁰]** hote hain!

**Kyun?**
Taylor series se socho: eˣ = 1 + x + x²/2! + x³/3! + ...
Principle of Homogeneity kehta hai ki 1, x, x², x³ sabka dimension same hona chahiye! Yeh sirf tabhi possible hai jab **[x] = [M⁰ L⁰ T⁰]** ho! Bilkul yahi logic sin x = x - x³/3! + ... par lagta hai.

---

## 3. Non-Standard Vernier Scales & Backlash

Standard Vernier mein N VSD = (N - 1) MSD hota hai, isliye shortcut LC = 1 MSD / N chal jata hai.
Par agar **N VSD = (N - k) MSD** ho (jahan k = 2, 3, ya kuch aur), toh shortcut **FAIL** ho jata hai!

Hamesha asli definition use karo:
```
  1 VSD = ((N - k) / N) MSD
  LC = 1 MSD - 1 VSD = (k / N) MSD
```

Aur agar kabhi **N VSD > N MSD** (retrograde Vernier, jahan 1 VSD > 1 MSD ho, jaise 10 VSD = 11 MSD):
Tab har Vernier division ek MSD se bada hota hai, aur **LC = 1 VSD - 1 MSD** (ya general case mein m MSD - 1 VSD, jahan m smallest integer hai jiske liye m MSD > 1 VSD).

---

## 4. Differential Error Propagation (Non-Power Formulas)

Jab formula simple product/quotient na ho — jaise **parallel resistors** (1/R = 1/R₁ + 1/R₂) ya **mirror/lens formula** (1/f = 1/v + 1/u) — toh simple %R = %R₁ + %R₂ **GALAT** hota hai!

Yahan hum **differential method** (small changes dR -> ΔR) use karte hain:
1/R = 1/R₁ + 1/R₂ ko differentiate karo:
-dR / R² = -dR₁ / R₁² - dR₂ / R₂²

Maximum possible error ke liye sabhi signs positive lo:
```
  ΔR / R² = ΔR₁ / R₁² + ΔR₂ / R₂²
```

Dono taraf R se multiply karne par relative error milta hai:
**ΔR / R = R (ΔR₁ / R₁² + ΔR₂ / R₂²)**

---

## 6 Deep Solved Problems

### Problem 1: Expressing Mass, Length, Energy & Density in (F, V, T) System

If Force (F), Velocity (V), and Time (T) are chosen as fundamental quantities, find the dimensional formulae of: (a) Mass, (b) Length, (c) Energy, (d) Density.

**Solution:**
- (b) Length: V = L / T => **[L] = [V T]**
- (a) Mass: F = M L T⁻² => M = F T² / L = F T² / (V T) => **[M] = [F V⁻¹ T]**
- (c) Energy: E = Force × Length = F × (V T) => **[E] = [F V T]**
- (d) Density: ρ = M / L³ = [F V⁻¹ T] / [V³ T³] = **[F V⁻⁴ T⁻²]**

Jaanch:
- Jaanch: [F V⁻⁴ T⁻²] = [M L T⁻²] [L⁻⁴ T⁴] [T⁻²] = [M L⁻³ T⁰] = [Density] ✅

---

### Problem 2: Wave Equation & Exponential Decay Arguments

(a) A progressive wave is represented by y = A sin(ω t - k x), where y and x are in metres and t is in seconds. Find the dimensions of ω, k, and ω / k.
(b) In a damped process, P = P₀ e^(-α t² / β), where P is pressure and t is time. Find [α / β] and [P₀].

**Solution:**
**(a) Wave equation:**
sin(...) ka argument dimensionless hai:
- [ω t] = [M⁰ L⁰ T⁰] => **[ω] = [T⁻¹]**
- [k x] = [M⁰ L⁰ T⁰] => **[k] = [L⁻¹]**
- [ω / k] = [T⁻¹] / [L⁻¹] = **[L T⁻¹]** (yeh wave ki speed hai!).

**(b) Exponential decay:**
- e^(...) dimensionless hai => **[P₀] = [P] = [M L⁻¹ T⁻²]**.
- Exponent (-α t² / β) dimensionless hai => [α t² / β] = [1] => **[α / β] = [T⁻²]**.

Jaanch:
- Jaanch: [ω / k] = (rad/s) / (rad/m) = m/s = [L T⁻¹] ✅

---

### Problem 3: Non-Standard Vernier Callipers (20 VSD = 18 MSD)

In a custom Vernier Callipers, 1 MSD = 1 mm and 20 VSD coincide with 18 MSD.
(a) Find its Least Count.
(b) Find the corrected reading if MSR = 1.5 cm, VSR = 7, and zero error = -0.02 cm.

**Solution:**
**(a) Least Count:**
20 VSD = 18 MSD => 1 VSD = (18 / 20) MSD = 0.9 MSD = 0.9 mm.
LC = 1 MSD - 1 VSD = 1 mm - 0.9 mm = **0.1 mm = 0.01 cm**.
(Notice: blind shortcut 1/20 = 0.05 mm galat hota!)

**(b) Corrected Reading:**
Observed = MSR + VSR × LC = 1.5 cm + 7(0.01 cm) = 1.57 cm.
Corrected = 1.57 - (-0.02) = **1.59 cm**.

Jaanch:
- Jaanch: k = 20 - 18 = 2; LC = (k / N) MSD = (2 / 20) × 1 mm = 0.1 mm = 0.01 cm; 1.57 + 0.02 = 1.59 cm ✅

---

### Problem 4: Parallel Resistors Differential Error

Two resistors R₁ = 10 ± 0.2 Ω and R₂ = 10 ± 0.2 Ω are connected in parallel (1/R = 1/R₁ + 1/R₂). Find the equivalent resistance R and its maximum absolute error ΔR.

**Solution:**
1. **Equivalent resistance:**
   1 / R = 1/10 + 1/10 = 2/10 = 1/5 => **R = 5 Ω**.

2. **Differential error propagation:**
   ΔR / R² = ΔR₁ / R₁² + ΔR₂ / R₂²
   ΔR / 25 = 0.2 / 100 + 0.2 / 100 = 0.4 / 100 = 0.004
   ΔR = 25 × 0.004 = **0.1 Ω**.

So **R = 5.0 ± 0.1 Ω** (percentage error = 0.1 / 5 × 100% = **2%**).

Jaanch:
- Jaanch: Max R_eq = (10.2 × 10.2) / (10.2 + 10.2) = 5.1 Ω = 5.0 + 0.1 Ω! (Agar galti se %R₁ + %R₂ = 2% + 2% = 4% karte toh ΔR = 0.2 Ω aata, jo galat hota!) ✅

---

### Problem 5: Young's Modulus Experiment (Multi-Instrument Error)

In Searle's experiment for Young's modulus Y = 4 M g L / (π d² l), a wire of length L = 2.00 m (measured with a metre scale of LC 1 mm) is loaded with mass M = 2.0 kg (exact, negligible error). Its diameter d = 0.40 mm is measured with a screw gauge (LC = 0.01 mm) and extension l = 0.80 mm is measured with a Vernier scale (LC = 0.01 mm). Find the maximum percentage error in Y.

**Solution:**
Constant 4, π, g, aur exact M mein koi error nahi:
ΔY / Y = ΔL / L + 2 (Δd / d) + Δl / l

- ΔL / L = (0.001 m / 2.00 m) = 0.0005 = 0.05%
- 2 (Δd / d) = 2 × (0.01 mm / 0.40 mm) = 2 × 0.025 = 0.05 = 5.00%
- Δl / l = (0.01 mm / 0.80 mm) = 0.0125 = 1.25%

Total % error in Y = 0.05% + 5.00% + 1.25% = **6.30%**.
(Dekho: diameter d sabse chhota hai aur squared hai, isliye 5% error akela d se aa raha hai!)

Jaanch:
- Jaanch: 0.05 + 5.00 + 1.25 = 6.30%; sabhi lengths consistent units mein rakhi gayi hain ✅

---

### Problem 6: Planck Length from Universal Constants h, G, and c

Combine Planck's constant h ([M L² T⁻¹]), Universal Gravitational Constant G ([M⁻¹ L³ T⁻²]), and speed of light c ([L T⁻¹]) to construct a fundamental unit of length called the Planck length l_P.

**Solution:**
Let l_P = hᵃ Gᵇ cᶜ (taking dimensionless constant = 1).
[M⁰ L¹ T⁰] = [M L² T⁻¹]ᵃ [M⁻¹ L³ T⁻²]ᵇ [L T⁻¹]ᶜ
[M⁰ L¹ T⁰] = [M^(a-b) L^(2a+3b+c) T^(-a-2b-c)]

Comparing powers:
1. M: a - b = 0 => a = b
2. T: -a - 2b - c = 0 => -3a - c = 0 => c = -3a
3. L: 2a + 3b + c = 1 => 2a + 3a - 3a = 1 => 2a = 1 => a = 1/2.

Therefore: **a = 1/2, b = 1/2, c = -3/2**.
So **l_P = √(h G / c³)**.

Jaanch:
- Jaanch: [h G / c³] = [M L² T⁻¹][M⁻¹ L³ T⁻²] / [L³ T⁻³] = [L⁵ T⁻³] / [L³ T⁻³] = [L²]; square root = [L] ✅

---

## 3 Advanced Mistakes

### Galti 1: sin(kx - ωt) ya e^(-αt) ke argument ko dimensional maan lena
- **Galat:** y = A sin(kx) mein [k x] = [L] likh dena.
- **Sahi:** Kisi bhi trigonometric, logarithmic, ya exponential function ka argument HAMESHA dimensionless **[M⁰ L⁰ T⁰]** hota hai!

### Galti 2: Har Vernier mein aankh band karke LC = 1 MSD / N laga dena
- **Galat:** 20 VSD = 18 MSD mein LC = 1 / 20 = 0.05 mm likh dena.
- **Sahi:** LC = 1 MSD - 1 VSD = 1 - 18/20 = **0.1 mm**. Shortcut 1 MSD / N sirf tabhi lagta hai jab N VSD = (N - 1) MSD ho!

### Galti 3: Parallel resistors mein %R = %R₁ + %R₂ laga dena
- **Galat:** R₁ aur R₂ dono mein 2% error hai toh parallel combination mein 4% error hoga.
- **Sahi:** 1/R = 1/R₁ + 1/R₂ mein differential formula **ΔR/R² = ΔR₁/R₁² + ΔR₂/R₂²** lagta hai, jisse equal resistors ke liye percentage error 2% hi aata hai (4% nahi!).

---

## Practice Questions (Advanced)

### Question 1
If Energy (E), Velocity (V), and Time (T) are chosen as fundamental quantities, find the dimensional formula of Surface Tension (S = Force / Length).

**Solution:**
[L] = [V T], [F] = [E / L] = [E V⁻¹ T⁻¹].
[S] = [F / L] = [E V⁻¹ T⁻¹] / [V T] = **[E V⁻² T⁻²]**.

Jaanch:
- Jaanch: [E V⁻² T⁻²] = [M L² T⁻²] [L⁻² T²] [T⁻²] = [M T⁻²] = [Surface Tension] ✅

---

### Question 2
If Momentum (P), Area (A), and Time (T) are taken as fundamental quantities, find the dimensional formula of Energy (E).

**Solution:**
[P] = [M L T⁻¹], [A] = [L²] => [L] = [A^(1/2)].
[E] = [M L² T⁻²] = [M L T⁻¹] · [L T⁻¹] = [P] · [A^(1/2) T⁻¹] = **[P A^(1/2) T⁻¹]**.

Jaanch:
- Jaanch: [M L T⁻¹] [L] [T⁻¹] = [M L² T⁻²] = [Energy] ✅

---

### Question 3
In the equation F = (α / β) e^(-α x / (k_B T)), where F is force, x is distance, k_B is Boltzmann constant, and T is temperature ([k_B T] = [Energy] = [M L² T⁻²]), find the dimensions of α and β.

**Solution:**
- Exponent dimensionless: [α x / (k_B T)] = [1] => [α] = [M L² T⁻²] / [L] = **[M L T⁻²]** (Force!).
- Outside exponential: [F] = [α / β] => [M L T⁻²] = [M L T⁻²] / [β] => **[β] = [M⁰ L⁰ T⁰]** (dimensionless!).

Jaanch:
- Jaanch: [α x] = [Force × Distance] = [Energy] = [k_B T], aur [α/β] = [F] ✅

---

### Question 4
A quantity is given by x = (A / B) ln(B t + C), where x is distance and t is time. Find the dimensions of A, B, and C.

**Solution:**
- Inside ln(...), har term dimensionless hona chahiye:
  **[C] = [M⁰ L⁰ T⁰]**
  [B t] = [1] => **[B] = [T⁻¹]**.
- Poora ln(...) dimensionless hai, toh [x] = [A / B] => [A] = [x] [B] = **[L T⁻¹]**.

Jaanch:
- Jaanch: [A / B] = [L T⁻¹] / [T⁻¹] = [L] = [x] ✅

---

### Question 5
In a non-standard Vernier Callipers, 1 MSD = 0.5 mm and 25 VSD coincide with 22 MSD. Find its Least Count.

**Solution:**
1 VSD = (22 / 25) MSD.
LC = 1 MSD - 1 VSD = (3 / 25) MSD = (3 / 25) × 0.5 mm = 1.5 / 25 mm = **0.06 mm**.

Jaanch:
- Jaanch: 25 - 22 = 3; 3 × 0.5 / 25 = 1.5 / 25 = 0.06 mm ✅

---

### Question 6
A retrograde Vernier Callipers has 1 MSD = 1 mm and 10 VSD = 11 MSD. Find its Least Count.

**Solution:**
Yahan 1 VSD = 1.1 mm > 1 MSD.
Do scales ke beech smallest measurable difference:
LC = 1 VSD - 1 MSD = 1.1 mm - 1.0 mm = **0.1 mm**.

Jaanch:
- Jaanch: (11 - 10) / 10 × 1 mm = 0.1 mm ✅

---

### Question 7
In a mirror experiment, object distance u = 20.0 ± 0.2 cm and image distance v = 60.0 ± 0.6 cm. Using 1/f = 1/v + 1/u, find the focal length f and its maximum absolute error Δf.

**Solution:**
1. 1/f = 1/60 + 1/20 = 4/60 = 1/15 => **f = 15.0 cm**.
2. Differential error:
   Δf / f² = Δv / v² + Δu / u²
   Δf / 225 = 0.6 / 3600 + 0.2 / 400 = (0.6 + 1.8) / 3600 = 2.4 / 3600
   Δf = 225 × (2.4 / 3600) = 2.4 / 16 = **0.15 cm**.
So **f = 15.00 ± 0.15 cm** (1% error!).

Jaanch:
- Jaanch: Notice Δu/u = 1% aur Δv/v = 1%, toh f = uv/(u+v) mein bhi exact 1% error (0.15/15 = 1%) aaya! ✅

---

### Question 8
Construct a fundamental unit of **time** (Planck time t_P) using Planck's constant h ([M L² T⁻¹]), Gravitational constant G ([M⁻¹ L³ T⁻²]), and speed of light c ([L T⁻¹]).

**Solution:**
Problem 6 se humein Planck length l_P = √(h G / c³) pata hai.
Time = Length / Speed => t_P = l_P / c = **√(h G / c⁵)**.

Jaanch:
- Jaanch: [h G / c⁵] = [L²] / [L² T⁻²] = [T²]; square root = [T] ✅

---

### Question 9
The density of a solid cylinder is measured by measuring its mass m = 100 ± 1 g, diameter d = 2.00 ± 0.02 cm, and length l = 5.00 ± 0.05 cm. Find the maximum percentage error in its density ρ = 4m / (π d² l).

**Solution:**
%m = (1 / 100) × 100% = 1%.
%d = (0.02 / 2.00) × 100% = 1%.
%l = (0.05 / 5.00) × 100% = 1%.
%ρ = %m + 2(%d) + %l = 1% + 2(1%) + 1% = **4%**.

Jaanch:
- Jaanch: 1 + 2 + 1 = 4% ✅

---

### Question 10
A screw gauge has a pitch of 0.5 mm and 50 circular divisions. When the jaws are closed, the 4th division of the circular scale is ABOVE the reference line (negative zero error). While measuring a wire, PSR = 2.5 mm and CSR = 35. Find the corrected diameter.

**Solution:**
LC = 0.5 / 50 = 0.01 mm.
Negative zero error: 4 divisions above reference line => Zero Error = -4 × 0.01 = -0.04 mm.
Observed reading = 2.5 + 35(0.01) = 2.85 mm.
Corrected diameter = 2.85 - (-0.04) = **2.89 mm**.

Jaanch:
- Jaanch: 2.5 + 0.35 + 0.04 = 2.89 mm ✅

---

### Question 11
Two resistors R₁ = 4.0 ± 0.4 Ω and R₂ = 12.0 ± 0.6 Ω are connected in parallel. Find the maximum percentage error in the equivalent resistance R.

**Solution:**
1/R = 1/4 + 1/12 = 4/12 = 1/3 => R = 3.0 Ω.
ΔR / R² = ΔR₁ / R₁² + ΔR₂ / R₂² = 0.4 / 16 + 0.6 / 144 = 0.025 + 1/240 = 6/240 + 1/240 = 7/240.
ΔR / R = R × (7 / 240) = 3 × (7 / 240) = 7 / 80 = 0.0875.
Percentage error = **8.75%**.

Jaanch:
- Jaanch: ΔR = 3 × 0.0875 = 0.2625 Ω; 7/80 × 100 = 8.75% ✅

---

### Question 12
Check the dimensions of 1 / √(μ₀ ε₀), given that [μ₀] = [M L T⁻² A⁻²] (permeability of free space) and [ε₀] = [M⁻¹ L⁻³ T⁴ A²] (permittivity of free space). What physical quantity does it represent?

**Solution:**
[μ₀ ε₀] = [M L T⁻² A⁻²] [M⁻¹ L⁻³ T⁴ A²] = [M⁰ L⁻² T² A⁰] = [L⁻² T²].
[1 / √(μ₀ ε₀)] = 1 / [L⁻¹ T¹] = **[L T⁻¹]**.
It represents **velocity** (specifically, the speed of light c in vacuum!).

Jaanch:
- Jaanch: M, A cancel; L^(1-3) = L⁻²; T^(-2+4) = T²; inverse square root = L T⁻¹ ✅

---

Shabaash! Tumne Units and Measurements ko sirf basics tak nahi, balki research-level depth tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](units-and-measurements-part6.md) dekho!
