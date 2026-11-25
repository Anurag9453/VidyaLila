> **Class:** 11 | **Subject:** Physics | **Chapter 7:** Gravitation (Part 2)

# Acceleration Due to Gravity (g) & Its Variations

> **Pichle topic se:** [Kepler's Laws & Universal Gravitation](gravitation.md) mein humne dekha ki Earth kisi mass m ko F = G M m / R² se kheenchti hai. Isse surface par **g = G M / R²** milta hai — par kya g har jagah constant hai? Bilkul nahi! Height, depth, aur Earth ki rotation teeno g ko badalte hain!

---

## Vishwanath ka Himalayan Peak & Deep-Mine Survey

Vishwanath ek geophysical gravity-survey engineer hai. Uske ultra-precise gravimeter ne teen jagah alag-alag readings dikhayi:
1. Mount Everest (height h ≈ 8.8 km) par g surface se thoda **kam** tha.
2. Kolar ki gehri khadaan (depth d) mein utarne par bhi g **kam** hua (aur Earth ke exact centre par g = **0**!).
3. Poles par g **maximum** tha aur Equator par **minimum** (Earth ki rotation aur equatorial bulge ki wajah se)!

Chalo g ke in teeno variations ke exact formulas derive karte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Surface Gravity (g) | **g = G M / R² = (4/3) π G ρ R** (Earth ke liye ≈ 9.8 m/s²; mass m par depend nahi karta!) |
| Altitude Variation | Height h par: **g_h = g / (1 + h / R)²**; chhote h (h << R) ke liye **g_h ≈ g (1 - 2 h / R)** |
| Depth Variation | Depth d par (uniform Earth): **g_d = g (1 - d / R)** (linearly 0 tak ghatta hai centre par!) |
| Latitude Variation | Rotation (ω) ke karan latitude λ par: **g' = g - ω² R cos² λ** |

---

## 1. Surface Gravity g in Terms of Mass & Density

F = m g = G M m / R²  =>  **g = G M / R²**
Density ρ ke terms mein (M = (4/3) π R³ ρ):
```
  g = (4/3) π G ρ R   (For same density ρ, g ∝ R!)
```

---

## 2. Variation of g with Altitude (Height h)

Height h par centre se doori r = R + h:
```
  Exact formula (ALWAYS valid):    g_h = g · [ R / (R + h) ]² = g / (1 + h / R)²
  Approximation (ONLY if h << R):  g_h ≈ g ( 1 - 2 h / R )
```

## 3. Variation of g with Depth (d Below Surface)

Depth d par andar ke sirf radius **(R - d)** wala inner sphere mass pull karta hai (bahari hollow shell ka force Shell Theorem se **0** hota hai!):
M_inner = (4/3) π (R - d)³ ρ  =>  g_d = G M_inner / (R - d)² = (4/3) π G ρ (R - d)
Surface ke g = (4/3) π G ρ R se divide karne par:
```
  g_d = g ( 1 - d / R )   (Exact for ALL depths 0 ≤ d ≤ R!)
```
- **At Earth's centre (d = R):** **g = 0** (weight = 0, mass unchanged!).
- **Comparison (for small h, d << R):** Height h par drop = 2h/R aur depth d par drop = d/R => **Same g drop ke liye depth d = 2 h** (height par g **double rate** se ghatta hai!).

## 4. Variation of g with Latitude (λ) Due to Earth's Rotation

Latitude λ par particle radius **r = R cos λ** ke circle mein ghoomta hai, jiske liye centrifugal component **ω² R cos² λ** gravity ko thoda kam kar deta hai:
```
  g' = g - ω² R cos² λ
```
- **At Poles (λ = 90°, cos 90° = 0):** g_pole = **g** (rotation ka koi asar nahi — MAXIMUM!).
- **At Equator (λ = 0°, cos 0° = 1):** g_eq = **g - ω² R** (MINIMUM!).

---

## Solved Examples

### Example 1: Exact vs Approximate Altitude Formula (h = R vs h = 32 km)

Taking Earth's radius R = 6400 km and surface gravity g = 9.8 m/s², find g at:
(a) height h = R (6400 km),
(b) height h = 32 km.

**Solution:**
- (a) Here h = R is NOT small => **MUST use exact formula**:
  g_h = g / (1 + R/R)² = g / 2² = **g / 4 = 2.45 m/s²**.
- (b) Here h = 32 km << 6400 km (h/R = 1/200 = 0.005):
  g_h ≈ g (1 - 2 × 0.005) = 0.99 g = 0.99 × 9.8 = **9.702 m/s²** (1% decrease!).

Jaanch:
- Jaanch: Agar (a) mein galti se approximation 1 - 2(1) = -1 lagate toh negative g aa jata! ✅

---

### Example 2: Depth Where g Becomes Half (g/2)

At what depth d below the Earth's surface (R = 6400 km) does g become half of its surface value?

**Solution:**
g_d = g (1 - d / R) = g / 2 => 1 - d / R = 1/2 => d = R / 2 = **3200 km**.

Jaanch:
- Jaanch: Linear decrease from g (at d = 0) to 0 (at d = R): half at midpoint R/2 ✅

---

### Example 3: Same Reduction in g at Height h and Depth d

At what depth d below Earth's surface is the value of g the same as at a small height h = 40 km above the surface?

**Solution:**
For small h << R: g(1 - 2h/R) = g(1 - d/R) => **d = 2 h** = 2 × 40 = **80 km**.

Jaanch:
- Jaanch: Height par drop 2× faster hota hai, isliye same drop ke liye depth 2× (80 km) chahiye ✅

---

### Example 4: Gravity on Another Planet

A planet has twice the mass of Earth and twice the radius of Earth. If g on Earth is 10 m/s², find g on this planet.

**Solution:**
g' = G (2 M) / (2 R)² = (2 / 4) (G M / R²) = (1/2) g = **5 m/s²**.

Jaanch:
- Jaanch: Mass ×2, R² ×4 => ratio 2/4 = 1/2 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Badi height (jaise h = R ya h = R/2) par binomial approximation g(1 - 2h/R) laga dena
- **Galat:** h = R par g_h = g(1 - 2) = -g!
- **Sahi:** Approximation **SIRF h << R** (say h < 0.05 R) ke liye hai! Badi height par hamesha **g / (1 + h/R)²** use karo!

### Galti 2: Earth ke centre par mass ko zero bol dena
- **Galat:** Centre par g = 0 hai toh body ka mass bhi 0 ho gaya!
- **Sahi:** Centre par **WEIGHT (mg) = 0** hota hai, par **MASS m bilkul unchanged** rehta hai!

### Galti 3: Rotation ki wajah se Poles par g kam hota hua maan lena
- **Galat:** Earth ghoom rahi hai toh poles par bhi g ghatega!
- **Sahi:** Poles rotation axis par hi hote hain (r = 0, cos 90° = 0) => poles par rotation ka **zero effect** hota hai!

---

## Quick Recap

- **Surface:** g = G M / R² = (4/3) π G ρ R.
- **Altitude:** Exact g_h = g / (1 + h/R)²; small h (h << R): g_h ≈ g(1 - 2h/R).
- **Depth:** g_d = g(1 - d/R) (0 at centre; small h = d/2 for equal g!).
- **Latitude:** g' = g - ω² R cos² λ (max at Poles, min at Equator).

---

## Practice Questions

*(Take R = 6400 km, g = 10 m/s² unless stated otherwise.)*

### Question 1
Find the height above Earth's surface where the acceleration due to gravity becomes 1/9 of its surface value.

**Solution:**
g / (1 + h/R)² = g / 9 => 1 + h/R = 3 => h = **2 R = 12,800 km**.

Jaanch:
- Jaanch: r = R + 2R = 3R => g' = g / 3² = g / 9 ✅

---

### Question 2
A body weighs 90 N on the surface of Earth. What will be its weight at a height equal to R/2 above the surface?

**Solution:**
g' = g / (1 + 1/2)² = g / (9/4) = (4/9) g.
W' = (4/9) × 90 = **40 N**.

Jaanch:
- Jaanch: (2/3)² × 90 = (4/9) × 90 = 40 N ✅

---

### Question 3
A body weighs 100 N on the surface of Earth. Find its weight halfway down to the centre of Earth (d = R/2).

**Solution:**
g_d = g(1 - 1/2) = g/2 => W' = 100 / 2 = **50 N**.

Jaanch:
- Jaanch: Depth R/2 halves g and weight ✅

---

### Question 4
Find the percentage decrease in g at a height of 64 km above Earth's surface.

**Solution:**
h / R = 64 / 6400 = 0.01 (small!).
% decrease = (2 h / R) × 100% = 2 × 1% = **2%**.

Jaanch:
- Jaanch: 2 × (64/6400) × 100 = 2% ✅

---

### Question 5
Find the percentage decrease in g at a depth of 64 km below Earth's surface.

**Solution:**
% decrease = (d / R) × 100% = (64 / 6400) × 100% = **1%**.

Jaanch:
- Jaanch: Half the percentage drop compared to same altitude (1% vs 2%) ✅

---

### Question 6
If Earth shrinks in radius by 1% while its mass remains constant, what is the approximate percentage change in surface gravity g?

**Solution:**
g = G M / R² ∝ R⁻².
Since R decreases by 1%, g **increases by 2%**!

Jaanch:
- Jaanch: Power of R is -2 => (-2)(-1%) = +2% ✅

---

### Question 7
Two planets have the same mean density ρ, but Planet B has 3 times the radius of Planet A. Find the ratio g_B / g_A.

**Solution:**
Since g = (4/3) π G ρ R ∝ R for same density: g_B / g_A = **3 : 1**.

Jaanch:
- Jaanch: Mass scales as R³, divided by R² gives R¹ => 3 : 1 ✅

---

### Question 8
What would Earth's angular velocity ω have to be so that objects at the Equator feel weightless (g_eq = 0)? (Take R = 6.4 × 10⁶ m, g = 10 m/s².)

**Solution:**
g - ω² R = 0 => ω = √(g / R) = √(10 / (6.4 × 10⁶)) = √(1 / (6.4 × 10⁵)) = **1 / 800 = 1.25 × 10⁻³ rad/s** (~17 times faster than today!).

Jaanch:
- Jaanch: (1/800)² × 6.4 × 10⁶ = 6.4 × 10⁶ / 6.4 × 10⁵ = 10 m/s² = g ✅

---

### Question 9
At what height h (not small!) is g equal to its value at depth d = R/2?

**Solution:**
g / (1 + h/R)² = g (1 - 1/2) = g / 2 => (1 + h/R)² = 2 => 1 + h/R = √2 => **h = (√2 - 1) R ≈ 0.414 R ≈ 2650 km**.

Jaanch:
- Jaanch: 1 / (√2)² = 1/2 ✅

---

### Question 10
A planet has mass 1/10 of Earth and radius 1/2 of Earth. If a person weighs 500 N on Earth, what is their weight on this planet?

**Solution:**
g' / g = (1/10) / (1/2)² = (1/10) / (1/4) = 4 / 10 = 0.4.
W' = 0.4 × 500 = **200 N**.

Jaanch:
- Jaanch: 0.4 × 500 = 200 N ✅

---

### Question 11
State whether the following statements are True or False:
(a) The value of g is maximum at the surface of Earth and decreases both above and below the surface.
(b) If Earth suddenly stopped rotating, the value of g at the Poles would increase.

**Solution:**
- (a) **True** ✅ — Above surface g ∝ 1/r²; below surface g ∝ r; peak is right at r = R!
- (b) **False** ❌ — At Poles cos 90° = 0, so rotation has zero effect on g_pole! (Only Equator g would increase.)

Jaanch:
- Jaanch: Peak at r = R; Poles lie on rotation axis ✅

---

### Question 12
At what depth below the surface of Earth does the value of g decrease by 25% of its surface value?

**Solution:**
g_d = 0.75 g => 1 - d / R = 0.75 => d / R = 0.25 => **d = R / 4 = 1600 km**.

Jaanch:
- Jaanch: 6400 / 4 = 1600 km ✅

---

Ab tum jaante ho ki g har jagah constant nahi — surface par peak hai aur upar-neeche dono taraf ghatta hai!

**Agle topic mein:** Space mein door jane par mgh kyun fail ho jata hai aur asli **Gravitational Potential Energy U = -GMm/r** kaise kaam karti hai — chalo padhte hain [Gravitational Potential Energy & Potential](gravitation-part3.md)!
