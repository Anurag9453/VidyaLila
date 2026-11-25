> **Class:** 11 | **Subject:** Physics | **Chapter 10:** Thermal Properties of Matter (Part 5)

# Newton's Law of Cooling, Stefan–Boltzmann Law & Wien's Law

> **Pichle topic se:** [Heat Transfer](thermal-properties-of-matter-part4.md) mein humne dekha ki har garam body EM waves ke roop mein **Radiation** emit karti hai. Ab hum radiation ke do sabse powerful quantitative laws (**Wien's Law** aur **Stefan–Boltzmann Law**) aur unse nikalne wale **Newton's Law of Cooling** ko seekhenge!

---

## Purushottam ka Infrared-Pyrometer & Star-Color Test

Purushottam ek astrophysics aur infrared-pyrometer scientist hai. Aasman mein **Betelgeuse** laal (red, badi wavelength) dikhta hai aur **Rigel** neela (blue, chhoti wavelength) — bina wahan gaye Purushottam ne **Wien's Law (λ_m T = b)** se bata diya ki neela taara Rigel (~12,000 K) laal taare Betelgeuse (~3,500 K) se **3 guna zyada garam** hai!

Aur jab temperature double hota hai, toh **Stefan–Boltzmann Law (P ∝ T⁴)** ke mutabik radiated power **2⁴ = 16 guna** badh jati hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Perfect Blackbody | Aisi ideal body jo apne upar padne wali **100% radiation absorb** kar le (emissivity **e = 1**; yaad rakho: garam hone par sabse tez emit bhi yahi karti hai!) |
| Wien's Displacement Law | Peak emission wavelength aur Kelvin temperature ka product constant: **λ_m T = b = 2.9 × 10⁻³ m K** |
| Stefan–Boltzmann Law | Total radiated power per unit area ∝ T⁴: **P = e σ A T⁴** (σ = **5.67 × 10⁻⁸ W m⁻² K⁻⁴**; T MUST be in Kelvin!) |
| Net Radiation Loss | Surrounding temperature T₀ par: **P_net = e σ A (T⁴ - T₀⁴)** |
| Newton's Law of Cooling | Chhote temperature difference (T - T₀) par cooling rate ∝ excess temperature: **-dT / dt = K (T - T₀)** |

---

## 1. Wien's Displacement Law (λ_m T = b)

```
  λ_m T = b = 2.9 × 10⁻³ m K   ===>   λ_m ∝ 1 / T
```
- **Garam body** => chhoti peak wavelength (blue/violet!).
- **Thandi body** => badi peak wavelength (red -> infrared!).
  (Human body at ~310 K peaks at ~9.4 μm in the infrared — thermal night-vision cameras wahi dekhte hain!)

---

## 2. Stefan–Boltzmann Law (P = e σ A T⁴)

- Emitted power: **P = e σ A T⁴** (0 ≤ e ≤ 1; blackbody ke liye e = 1).
- Net power lost to surroundings at T₀:
  ```
    P_net = e σ A (T⁴ - T₀⁴)
  ```
- **Rate of cooling by radiation:** Since P_net = m c (-dT/dt):
  **-dT / dt = e σ A (T⁴ - T₀⁴) / (m c)**!

---

## 3. Newton's Law of Cooling (Average-Temperature Shortcut!)

Jab (T - T₀) chhota ho (typically ≤ 30–40 °C), toh T⁴ - T₀⁴ ≈ 4 T₀³ (T - T₀), jisse Newton's Law milta hai:
```
  - dT / dt = K (T - T₀)
```
**Practical Average-Temperature Form (Most Useful for Numericals!):**
Agar body time **t** mein T₁ se T₂ tak thandi ho (surroundings T₀):
```
  (T₁ - T₂) / t  =  K [ (T₁ + T₂) / 2  -  T₀ ]
```
*(Note: Is formula mein T₁, T₂, T₀ sabhi **°C** mein seedha rakh sakte ho kyunki sirf differences aate hain!)*

---

## Solved Examples

### Example 1: Wien's Law — Surface Temperature of the Sun vs a Blue Star

The Sun's radiation peaks at λ_m = 500 nm (5 × 10⁻⁷ m). Taking b = 2.9 × 10⁻³ m K, find: (a) Sun's surface temperature, (b) peak wavelength of a star at 11,600 K.

**Solution:**
- (a) T_Sun = b / λ_m = (2.9 × 10⁻³) / (5 × 10⁻⁷) = **5800 K**.
- (b) λ_star = (2.9 × 10⁻³) / 11,600 = **2.5 × 10⁻⁷ m = 250 nm** (ultraviolet/blue!).

Jaanch:
- Jaanch: Star is 2× hotter than Sun => peak wavelength is 1/2 (500 nm -> 250 nm) ✅

---

### Example 2: Stefan–Boltzmann Law — Doubling Kelvin vs Doubling Celsius!

A blackbody at 27 °C (300 K) radiates power P₁ = 100 W. Find the radiated power when its temperature is raised to: (a) 327 °C (600 K), (b) 54 °C (327 K).

**Solution:**
- (a) T₂ / T₁ = 600 / 300 = 2 => P₂ = 100 × 2⁴ = 100 × 16 = **1600 W**!
- (b) T₂ / T₁ = 327 / 300 = 1.09 => P₂ = 100 × (1.09)⁴ ≈ **141.2 W** (NOT 1600 W!).

Jaanch:
- Jaanch: Always convert to Kelvin before taking the 4th power! ✅

---

### Example 3: Newton's Law of Cooling (Classic Tea Cup Problem!)

A cup of hot tea cools from 80 °C to 60 °C in 5 minutes in a room at 20 °C. How long will it take to cool from 60 °C to 40 °C in the same room?

**Solution:**
- **Stage 1 (80 °C -> 60 °C, avg = 70 °C, time = 5 min):**
  (80 - 60) / 5 = K (70 - 20)  =>  4 = 50 K  =>  **K = 4 / 50 = 0.08 min⁻¹**.
- **Stage 2 (60 °C -> 40 °C, avg = 50 °C, time = t):**
  (60 - 40) / t = K (50 - 20)  =>  20 / t = (4 / 50) × 30 = 12 / 5
  => **t = 100 / 12 = 25 / 3 ≈ 8.33 minutes**!
  *(Notice: Cooling slows down as tea approaches room temperature: 8.33 min > 5 min!)*

Jaanch:
- Jaanch: Excess temp dropped from 50 °C to 30 °C (factor 5/3), so time rose by 5/3: 5 × (5/3) = 8.33 min ✅

---

### Example 4: Comparing Cooling Rates of Two Identical-Material Spheres

Two solid copper spheres of radii r₁ = R and r₂ = 2R are heated to the same temperature T and placed in the same cooler room. Find the ratio of their initial rates of cooling (-dT/dt)₁ / (-dT/dt)₂!

**Solution:**
Rate of cooling (-dT/dt) = e σ A (T⁴ - T₀⁴) / (m c) ∝ **A / m**!
Since A ∝ R² and m ∝ R³ => **(-dT/dt) ∝ R² / R³ = 1 / R**!
So (-dT/dt)₁ / (-dT/dt)₂ = r₂ / r₁ = **2 : 1** (the **smaller** sphere cools **TWICE as fast**!).

Jaanch:
- Jaanch: Larger surface-area-to-volume ratio (3/R) makes smaller objects cool faster ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Stefan's Law (T⁴) ya Wien's Law (λ_m T = b) mein Celsius rakh dena
- **Galat:** 27 °C se 54 °C hua toh T⁴ 16× ho gaya!
- **Sahi:** Radiation laws mein **HAMESHA Kelvin (T = t + 273)** use karo!

### Galti 2: Newton's Law of Cooling mein T₁ + T₂ / 2 ki jagah sirf T₁ le lena
- **Galat:** (80 - 60)/5 = K (80 - 20)!
- **Sahi:** Cooling ke dauran temperature T₁ se T₂ ghatta hai, isliye excess temperature ke liye **average (T₁ + T₂)/2 - T₀** lo!

### Galti 3: Rate of Heat Loss (dQ/dt) aur Rate of Cooling (-dT/dt) ko ek hi samajh lena
- **Galat:** Bada sphere zyada heat lose karta hai toh woh jaldi thanda hoga!
- **Sahi:** Bada sphere zyada **heat (dQ/dt ∝ R²)** lose karta hai, par uska mass (∝ R³) aur zyada bada hai, isliye **rate of cooling (-dT/dt ∝ 1/R)** chhote sphere ka zyada hota hai!

---

## Quick Recap

- **Wien's Law:** λ_m T = 2.9 × 10⁻³ m K (hotter = bluer / shorter λ).
- **Stefan–Boltzmann:** P = e σ A T⁴; P_net = e σ A (T⁴ - T₀⁴) (σ = 5.67 × 10⁻⁸ SI, T in Kelvin!).
- **Newton's Cooling:** (T₁ - T₂) / t = K [ (T₁ + T₂)/2 - T₀ ].
- **Solid spheres:** dQ/dt ∝ R², while rate of cooling (-dT/dt) ∝ 1 / R!

---

## Practice Questions

### Question 1
A blackbody emits peak radiation at wavelength 600 nm when its temperature is 5000 K. Find its peak wavelength if heated to 7500 K.

**Solution:**
λ₁ T₁ = λ₂ T₂ => 600 × 5000 = λ₂ × 7500 => **λ₂ = 400 nm**.

Jaanch:
- Jaanch: T increased by 3/2 => λ decreased by 2/3 (600 × 2/3 = 400 nm) ✅

---

### Question 2
If the absolute temperature (in Kelvin) of a blackbody is tripled (3T), by what factor does its total radiated power increase?

**Solution:**
P ∝ T⁴ => 3⁴ = **81 times**.

Jaanch:
- Jaanch: 3 × 3 × 3 × 3 = 81 ✅

---

### Question 3
A pan of hot water cools from 90 °C to 80 °C in 2 minutes in a room at 25 °C. How long will it take to cool from 70 °C to 60 °C in the same room?

**Solution:**
- Stage 1 (avg 85 °C): 10 / 2 = K (85 - 25) = 60 K => K = 5 / 60 = 1 / 12 min⁻¹.
- Stage 2 (avg 65 °C): 10 / t = (1 / 12)(65 - 25) = 40 / 12 = 10 / 3 => **t = 3.0 minutes**.

Jaanch:
- Jaanch: Excess temp dropped from 60 to 40 (ratio 3/2) => time rose by 3/2 (2 × 1.5 = 3 min) ✅

---

### Question 4
Two stars A and B have the same surface temperature T, but Star A has twice the radius of Star B. Find the ratio of their total radiated powers (luminosities) P_A / P_B.

**Solution:**
P = σ (4 π R²) T⁴ ∝ R² => P_A / P_B = (2 R / R)² = **4 : 1**.

Jaanch:
- Jaanch: Surface area is 4× larger => luminosity is 4× larger ✅

---

### Question 5
A blackbody of surface area 0.01 m² is kept at 1000 K. Find the power it radiates (σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴).

**Solution:**
P = 1 × (5.67 × 10⁻⁸) × 0.01 × (10³)⁴ = 5.67 × 10⁻¹⁰ × 10¹² = **567 W**.

Jaanch:
- Jaanch: 10⁻⁸ × 10⁻² × 10¹² = 10² => 567 W ✅

---

### Question 6
Two spheres of the same material have radii 2 cm and 6 cm and are heated to the same temperature. Find the ratio of: (a) their rates of heat loss (dQ/dt), (b) their rates of cooling (-dT/dt).

**Solution:**
- (a) dQ/dt ∝ R² => (2 / 6)² = **1 : 9**.
- (b) (-dT/dt) ∝ 1 / R => 6 / 2 = **3 : 1**.

Jaanch:
- Jaanch: Smaller sphere loses less heat per second (1:9), yet cools 3× faster! ✅

---

### Question 7
A blackbody at 227 °C radiates 10 W. What power will it radiate at 727 °C?

**Solution:**
T₁ = 227 + 273 = 500 K; T₂ = 727 + 273 = 1000 K (Kelvin T doubled!).
P₂ = 10 × 2⁴ = **160 W**.

Jaanch:
- Jaanch: 1000 / 500 = 2 => 2⁴ = 16 => 160 W ✅

---

### Question 8
A hot body cools from 60 °C to 50 °C in 10 minutes, and from 50 °C to 42 °C in the next 10 minutes. Find the surrounding room temperature T₀!

**Solution:**
- Stage 1 (avg 55 °C): (60 - 50) / 10 = 1 = K (55 - T₀).
- Stage 2 (avg 46 °C): (50 - 42) / 10 = 0.8 = K (46 - T₀).
Divide the two: 1 / 0.8 = (55 - T₀) / (46 - T₀) => 5 / 4 = (55 - T₀) / (46 - T₀)
230 - 5 T₀ = 220 - 4 T₀ => **T₀ = 10 °C**!

Jaanch:
- Jaanch: (55 - 10) = 45, (46 - 10) = 36; 36 / 45 = 4/5 = 0.8 ✅

---

### Question 9
A solid sphere and a hollow sphere of the **same material** and **same outer radius R** are heated to the same temperature in the same room. Which one cools faster?

**Solution:**
Both have the **same surface area A** (same heat loss rate dQ/dt), but the **hollow sphere has a smaller mass m**, so (-dT/dt) = (dQ/dt) / (m c) is **LARGER for the hollow sphere** — the **hollow sphere cools faster**!

Jaanch:
- Jaanch: Same heat loss from smaller thermal mass => faster temperature drop ✅

---

### Question 10
A star radiates peak intensity at 290 nm (2.9 × 10⁻⁷ m). Taking b = 2.9 × 10⁻³ m K, find its surface temperature in Kelvin.

**Solution:**
T = (2.9 × 10⁻³) / (2.9 × 10⁻⁷) = **10,000 K**.

Jaanch:
- Jaanch: 2.9 / 2.9 = 1; 10⁻³ / 10⁻⁷ = 10⁴ K ✅

---

### Question 11
State whether the following statements are True or False:
(a) A blackbody always looks black at all temperatures.
(b) Newton's Law of Cooling is a small-temperature-difference approximation of Stefan–Boltzmann's Law.

**Solution:**
- (a) **False** ❌ — Room temperature par blackbody kala dikhta hai, par 6000 K par woh **bright white (jaise Sun!)** chamakta hai!
- (b) **True** ✅ — For small ΔT = T - T₀, T⁴ - T₀⁴ ≈ 4 T₀³ ΔT!

Jaanch:
- Jaanch: Sun is an excellent approximate blackbody yet glows blinding white ✅

---

### Question 12
Two blackbodies at temperatures 400 K and 800 K have surface areas in the ratio 4 : 1. Find the ratio of their total radiated powers P₁ / P₂.

**Solution:**
P ∝ A T⁴ => P₁ / P₂ = (4 / 1) × (400 / 800)⁴ = 4 × (1 / 16) = **1 : 4**.

Jaanch:
- Jaanch: 4 × (1/2)⁴ = 4 / 16 = 1/4 ✅

---

Radiation laws aur Newton's cooling ab tumhare liye bilkul clear hain!

**Agle topic mein:** Poore Thermal Properties chapter ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](thermal-properties-of-matter-part6.md) mein!
