> **Class:** 11 | **Subject:** Physics | **Chapter 7:** Gravitation (Part 4)

# Escape Speed & Orbital Speed

> **Pichle topic se:** [Gravitational Potential Energy](gravitation-part3.md) mein humne dekha ki Earth ki surface par kisi mass m ki PE **-G M m / R** hoti hai. Agar hum use itni kinetic energy de dein ki total energy **0** ho jaye, toh woh Earth ki gravity se hamesha ke liye azaad ho jayega! Isi ko **Escape Speed** kehte hain!

---

## Champak ka Spaceport Launch-Control Calculation

Champak ek spaceport launch-control engineer hai. Rocket launch karte waqt do magic speeds hamesha screen par rehti hain:
1. **Low-Earth Orbital Speed (v_o ≈ 7.92 km/s):** Is speed par horizontal chhodne par satellite zameen par girne ke bajaye Earth ke chaaron taraf circular orbit mein ghoomne lagta hai!
2. **Escape Speed (v_e ≈ 11.2 km/s):** Is speed par launch karne par spacecraft (jaise Mangalyaan ya Chandrayaan deep-space probe) Earth ki gravity chhod kar bahar nikal jata hai!

Dhyan se dekho: **11.2 / 7.92 = 1.414 = √2**! Yani **v_e = √2 v_o** — aur dono speeds rocket ke **mass** ya **launch angle** par bilkul depend nahi karti!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Escape Speed (v_e) | Woh minimum speed jisse kisi body ko planet ki surface se phenkne par woh gravity se hamesha ke liye bahar (r -> ∞, v -> 0) nikal jaye |
| Orbital Speed (v_o) | Planet ke chaaron taraf radius r ke circular orbit mein ghoomne ke liye zaroori speed |
| Golden Relation | Near surface: **v_e = √2 v_o** (escape speed orbital speed ka √2 guna, yani ~41.4% zyada!) |

---

## 1. Derivation of Escape Speed (v_e)

Earth ki surface (r = R) par total energy = (1/2) m v_e² - G M m / R.
Infinity (r = ∞) par just pahunchne ke liye minimum final energy = **0** (K = 0, U = 0).
By Conservation of Mechanical Energy:
(1/2) m v_e² - G M m / R = 0  =>  (1/2) v_e² = G M / R

```
  v_e = √( 2 G M / R ) = √( 2 g R ) = R √( (8/3) π G ρ )
```

**3 Amazing Facts About Escape Speed:**
1. **Mass-independent:** Ek chhote patthar aur ek 500-tonne rocket dono ke liye Earth par **v_e = 11.2 km/s**!
2. **Angle-independent:** Chahe seedha 90° upar phenko ya 30° tirchha, **v_e wahi 11.2 km/s** rehta hai (kyunki energy scalar hai!).
3. **Why Moon Has No Atmosphere:** Moon par v_e sirf **2.38 km/s** hai — jo gas molecules ki thermal speed se kam hai, isliye saari gases ud gayin!

---

## 2. Derivation of Orbital Speed (v_o)

Radius **r = R + h** ke circular orbit mein gravity centripetal force deti hai:
G M m / r² = m v_o² / r  =>
```
  v_o = √( G M / (R + h) ) = R √( g / (R + h) )
```
- **Near Earth's surface (h << R):**
  **v_o = √( G M / R ) = √( g R ) ≈ 7.92 km/s**
- **Compare with v_e:**
  **v_e = √2 v_o** (agar orbiting satellite ki speed **41.4%** badha di jaye, toh woh orbit chhod kar space mein escape kar jayega!).

---

## Solved Examples

### Example 1: Verifying Earth's Escape & Orbital Speeds

Taking R = 6.4 × 10⁶ m and g = 9.8 m/s², verify Earth's escape speed v_e and near-surface orbital speed v_o.

**Solution:**
- v_o = √(g R) = √(9.8 × 6.4 × 10⁶) = √(62.72 × 10⁶) ≈ **7.92 × 10³ m/s = 7.92 km/s**.
- v_e = √2 v_o = 1.414 × 7.92 ≈ **11.2 km/s**.

Jaanch:
- Jaanch: v_e² = 2 g R = 125.44 × 10⁶ => √125.44 = 11.2 km/s ✅

---

### Example 2: Escape Speed on a Super-Earth Planet

A planet has 8 times the mass of Earth and 2 times the radius of Earth. If Earth's escape speed is 11.2 km/s, find the escape speed on this planet.

**Solution:**
v_e ∝ √(M / R) => v_e' / v_e = √(8 / 2) = √4 = **2**.
So v_e' = 2 × 11.2 = **22.4 km/s**.

Jaanch:
- Jaanch: 8 / 2 = 4 => √4 = 2 => 22.4 km/s ✅

---

### Example 3: Orbital Speed at Height h = 3 R

A satellite orbits Earth at a height h = 3 R above the surface. If the near-surface orbital speed is 8 km/s, find the orbital speed of this satellite.

**Solution:**
Orbital radius r = R + 3 R = 4 R.
Since v_o ∝ 1 / √r: v_o' = 8 / √4 = 8 / 2 = **4 km/s**.

Jaanch:
- Jaanch: Higher orbit => slower orbital speed (4 km/s < 8 km/s) ✅

---

### Example 4: Escape Speed from a Height h = R Above Surface

Find the minimum speed needed to escape Earth's gravity from a height h = R above Earth's surface (given surface v_e = 11.2 km/s).

**Solution:**
At r = R + R = 2 R: v_e(h) = √(2 G M / (2 R)) = v_e(surface) / √2 = 11.2 / 1.414 ≈ **7.92 km/s**.

Jaanch:
- Jaanch: Notice v_e at r = 2R equals near-surface v_o (7.92 km/s)! ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Escape speed ko launch angle θ par depend maanna
- **Galat:** 60° par launch karne par v_e = 11.2 / sin 60° chahiye!
- **Sahi:** Energy scalar hai! Chahe kisi bhi angle par launch karo (bas Earth se takrana nahi chahiye), **v_e = 11.2 km/s** exact same rehta hai!

### Galti 2: Orbit mein height h ko hi orbital radius r maan lena
- **Galat:** Height h = 3 R par r = 3 R rakh kar v_o = 8/√3 nikal dena!
- **Sahi:** Orbital radius hamesha **Earth ke centre se** hota hai: **r = R + h = R + 3R = 4R**!

### Galti 3: Higher orbit mein satellite ko zyada tez ghoomta hua maan lena
- **Galat:** Bada orbit hai toh satellite zyada tez chalega!
- **Sahi:** **v_o = √(GM/r) ∝ 1/√r** — jitna ooncha orbit, utna **DHEEMA** satellite!

---

## Quick Recap

- **Escape Speed:** v_e = √(2GM/R) = √(2gR) ≈ 11.2 km/s (mass & angle independent!).
- **Orbital Speed:** v_o = √(GM/(R+h)); near surface v_o = √(gR) ≈ 7.92 km/s.
- **Golden Link:** **v_e = √2 v_o** (~41.4% boost escapes!).

---

## Practice Questions

*(Take Earth's v_e = 11.2 km/s, v_o(surface) = 7.92 km/s, R = 6400 km, g = 10 m/s² unless stated otherwise.)*

### Question 1
A planet has the same density as Earth but twice the radius of Earth. Find its escape speed in terms of Earth's v_e.

**Solution:**
Since v_e = R √((8/3) π G ρ) ∝ R for same density: **v_e' = 2 v_e = 22.4 km/s**.

Jaanch:
- Jaanch: Mass is 8×, radius is 2× => √(8/2) = 2 ✅

---

### Question 2
By what percentage must the orbital speed of a near-Earth satellite be increased so that it escapes into outer space?

**Solution:**
v_e = √2 v_o ≈ 1.414 v_o => % increase = (1.414 - 1) × 100% = **41.4%**.

Jaanch:
- Jaanch: √2 - 1 ≈ 0.4142 => 41.4% ✅

---

### Question 3
By what percentage must the **kinetic energy** of a circularly orbiting satellite be increased so that it escapes to infinity?

**Solution:**
K_e / K_o = (v_e / v_o)² = (√2)² = 2 => **100% increase** (double the KE!).

Jaanch:
- Jaanch: Total energy E = -K_o; adding +K_o makes E = 0 (escape!) ✅

---

### Question 4
Two satellites A and B orbit Earth at radii R and 4 R respectively (from Earth's centre). Find the ratio of their orbital speeds v_A / v_B.

**Solution:**
v_o ∝ 1 / √r => v_A / v_B = √(4 R / R) = **2 : 1**.

Jaanch:
- Jaanch: Closer satellite A moves twice as fast as B ✅

---

### Question 5
A planet has mass 1/81 of Earth and radius 1/4 of Earth (roughly the Moon). Find its escape speed in terms of Earth's v_e.

**Solution:**
v_e' / v_e = √((1/81) / (1/4)) = √(4 / 81) = **2 / 9** (≈ 2.49 km/s).

Jaanch:
- Jaanch: √4 = 2, √81 = 9 => 2/9 ✅

---

### Question 6
A satellite orbits Earth at a height h = 1600 km above the surface (R = 6400 km, g = 10 m/s²). Find its orbital speed.

**Solution:**
r = R + h = 6400 + 1600 = 8000 km = 8 × 10⁶ m.
v_o = R √(g / r) = 6.4 × 10⁶ √(10 / (8 × 10⁶)) = 6.4 × 10³ √1.25 ≈ **7.16 km/s**.

Jaanch:
- Jaanch: Slightly slower than surface orbital speed (~8 km/s) ✅

---

### Question 7
Find the ratio of escape velocity from Earth's surface for a 10 kg satellite to that of a 1000 kg satellite.

**Solution:**
Escape velocity is independent of the object's mass => **1 : 1**.

Jaanch:
- Jaanch: m cancels in (1/2) m v_e² = G M m / R ✅

---

### Question 8
If a planet's radius were compressed to its Schwarzschild radius (black hole limit where v_e = c = 3 × 10⁸ m/s), write the formula for that critical radius R_s in terms of G, M, and c.

**Solution:**
c = √(2 G M / R_s) => c² = 2 G M / R_s => **R_s = 2 G M / c²**.

Jaanch:
- Jaanch: For Earth's mass, R_s ≈ 9 mm! ✅

---

### Question 9
An object is launched from Earth's surface at 60° to the horizontal. What is its escape speed?

**Solution:**
Escape speed is independent of launch direction => **11.2 km/s**.

Jaanch:
- Jaanch: Energy conservation is scalar and angle-independent ✅

---

### Question 10
A planet has g' = 2 g and R' = R / 2 compared to Earth. Find the ratio of its escape velocity to Earth's escape velocity.

**Solution:**
v_e = √(2 g R) => v_e' / v_e = √((2 g)(R / 2) / (g R)) = √1 = **1 : 1** (same escape speed!).

Jaanch:
- Jaanch: 2 × (1/2) = 1 ✅

---

### Question 11
State whether the following statements are True or False:
(a) A rocket can escape Earth's gravity only if launched straight vertically at 90°.
(b) A satellite in a higher circular orbit moves with a smaller linear speed than one in a lower orbit.

**Solution:**
- (a) **False** ❌ — Launch angle does not affect v_e = √(2gR).
- (b) **True** ✅ — v_o = √(GM/r) decreases as r increases.

Jaanch:
- Jaanch: Core facts of Sections 1 and 2 ✅

---

### Question 12
If the orbital speed of a satellite at height h = 0 is 8 km/s, find its orbital speed at height h = 8 R above Earth's surface.

**Solution:**
r = R + 8 R = 9 R => v_o' = 8 / √9 = **8 / 3 ≈ 2.67 km/s**.

Jaanch:
- Jaanch: √9 = 3 => 8/3 km/s ✅

---

Escape aur Orbital speeds ab tumhare liye bilkul clear hain!

**Agle topic mein:** Satellites ka time period, unki total energy (**K, U, E** ka jaadui ratio), geostationary vs polar satellites, aur astronauts ko **weightlessness** kyun lagti hai — chalo padhte hain [Satellites, Orbital Energy & Weightlessness](gravitation-part5.md)!
