> **Class:** 11 | **Subject:** Physics | **Chapter 7:** Gravitation (Part 5)

# Earth Satellites, Orbital Energy, Geostationary Orbits & Weightlessness

> **Pichle topic se:** [Escape Speed & Orbital Speed](gravitation-part4.md) mein humne dekha ki circular orbit mein speed v_o = √(GM/r) hoti hai. Ab hum satellites ka time period, unki total energy (K, U, E), geostationary vs polar satellites, aur space station mein **weightlessness** ka asli kaaran samjhenge!

---

## Dwarka ka Satellite Mission Control Room

Dwarka ek satellite-communications mission director hai. Uske control room mein do tarah ke satellites track ho rahe hain:
1. **Geostationary Satellite (INSAT / DTH):** Equator ke theek upar **~36,000 km** height par, **24 ghante** mein 1 chakkar (West-to-East) — isliye zameen se dekhne par aasman mein ek hi jagah **ruka hua** dikhta hai!
2. **Polar Satellite (Weather / Remote Sensing):** Sirf **500–800 km** height par, North-South poles ke upar se **~100 minutes** mein 1 chakkar — poori Earth ko har din scan kar leta hai!

Aur jab astronauts International Space Station (ISS, height ~400 km) mein hawa mein tairte dikhte hain, toh wahan gravity zero **NAHI** hoti (~88% of surface g hoti hai!) — balki astronaut aur ISS dono ek saath **perpetual free fall** mein hote hain (**Normal N = 0 => Weightlessness**)!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Satellite Time Period (T) | 1 poora circular orbit lagane ka time: **T = 2π √(r³ / (G M))** (near Earth surface: **84.6 minutes**) |
| Total Orbital Energy (E) | K + U = **- G M m / (2 r)** (negative => bound orbit!) |
| Binding Energy (BE) | Satellite ko orbit se infinity (E = 0) par bhejne ke liye zaroori minimum energy: **BE = -E = +G M m / (2 r)** |
| Geostationary Satellite | Equatorial plane mein West-to-East ghoomne wala satellite jiska T = **24 hours**, height **≈ 35,800 km (~36,000 km)** |
| Polar Satellite | Low-altitude (500–800 km) North-South orbit wala satellite (mapping, weather, spy/remote sensing) |
| Weightlessness | Apparent weight N = 0 hona (satellite aur astronaut dono same acceleration g_orbit se free fall mein!) |

---

## 1. Energy of an Orbiting Satellite (The Magic 1 : -2 : -1 Ratio!)

Radius **r** ke circular orbit mein v_o² = G M / r:
- **Kinetic Energy:** **K = (1/2) m v_o² = + G M m / (2 r)**
- **Potential Energy:** **U = - G M m / r**
- **Total Energy:** **E = K + U = - G M m / (2 r)**

**Golden Energy Relations (Sabse Zaroori!):**
```
  K = - E        |        U = 2 E        |        K = - U / 2
  Binding Energy = + G M m / (2 r) = - E = K
```

**Orbit-Transfer Paradox (Jab Satellite Oonche Orbit mein Jata Hai):**
Agar satellite r₁ se bade orbit r₂ (r₂ > r₁) par jaye:
- **Total Energy E:** kam negative => **BADHTI** hai (rocket fuel dena padta hai: **ΔE = (GMm/2)(1/r₁ - 1/r₂)**)!
- **Potential Energy U:** **BADHTI** hai (by +2 ΔE)!
- **Kinetic Energy K (aur speed v_o):** **GHAT-TI** hai (by -ΔE)!

---

## 2. Geostationary vs Polar Satellites

| Feature | Geostationary Satellite | Polar Satellite |
|---|---|---|
| Altitude h | **~35,800 km (~36,000 km)** | **500 – 800 km** |
| Time Period T | **24 hours** (same as Earth's spin) | **~100 minutes** |
| Orbit Plane | Equatorial plane (West -> East) | Passes over North & South Poles |
| Main Uses | TV/DTH broadcast, telecommunications | Weather forecasting, remote sensing, spy/mapping |

---

## Solved Examples

### Example 1: Finding K, U, and Binding Energy from Total Energy

An orbiting satellite has a total mechanical energy E = -4 × 10⁹ J. Find its: (a) kinetic energy K, (b) potential energy U, (c) binding energy.

**Solution:**
Using K = -E, U = 2E, BE = -E:
- (a) K = -(-4 × 10⁹) = **+4 × 10⁹ J**.
- (b) U = 2(-4 × 10⁹) = **-8 × 10⁹ J**.
- (c) Binding Energy = **+4 × 10⁹ J**.

Jaanch:
- Jaanch: K + U = +4×10⁹ + (-8×10⁹) = -4×10⁹ J = E ✅

---

### Example 2: Energy Required to Shift Orbit from 2R to 4R

A 400 kg satellite orbits Earth in a circular orbit of radius 2R. How much minimum energy is required to transfer it to a circular orbit of radius 4R? (Take R = 6.4 × 10⁶ m, g = 10 m/s².)

**Solution:**
ΔE = E_final - E_initial = [-G M m / (2 × 4R)] - [-G M m / (2 × 2R)]
= (G M m / (2 R)) [ 1/2 - 1/4 ] = (1/8) (G M m / R) = **(1/8) m g R**!
Substitute m = 400 kg, g = 10 m/s², R = 6.4 × 10⁶ m:
ΔE = (1/8)(400)(10)(6.4 × 10⁶) = 500 × 6.4 × 10⁶ = **3.2 × 10⁹ J**.

Jaanch:
- Jaanch: ΔK = -3.2 × 10⁹ J (slows down!), ΔU = +6.4 × 10⁹ J (gains PE); sum = +3.2 × 10⁹ J ✅

---

### Example 3: Time Period of a Near-Earth Satellite

Calculate the approximate time period of a satellite orbiting very close to Earth's surface (R = 6.4 × 10⁶ m, g = 9.8 m/s²).

**Solution:**
T = 2π √(R / g) = 2(3.1416) √(6.4 × 10⁶ / 9.8) ≈ 6.283 × 808.1 ≈ **5077 s ≈ 84.6 minutes**.

Jaanch:
- Jaanch: Circumference 2πR ≈ 40,212 km; speed 7.92 km/s => 40,212 / 7.92 ≈ 5077 s ≈ 84.6 min ✅

---

### Example 4: Weightlessness Inside an Orbiting Space Station

An astronaut of mass 70 kg is inside a space station orbiting at height h = 400 km where g_orbit ≈ 8.7 m/s². What is: (a) the gravitational pull of Earth on the astronaut, (b) the Normal force N exerted by the station floor on the astronaut?

**Solution:**
- (a) Gravity pull = m g_orbit = 70 × 8.7 = **609 N** (NOT zero!).
- (b) Both astronaut and station accelerate toward Earth at exact a = g_orbit:
  m g_orbit - N = m a = m g_orbit => **N = 0 N** (complete weightlessness!).

Jaanch:
- Jaanch: Gravity is 609 N, yet apparent weight N = 0 because both are in free fall together ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Space station mein astronauts ko "zero gravity" ki wajah se tairta maan lena
- **Galat:** ISS par g = 0 hota hai, isliye astronauts tairte hain!
- **Sahi:** 400 km upar g ≈ **8.7 m/s² (~88% of surface g)** hoti hai! Weightlessness ka kaaran **free fall (N = 0)** hai, zero gravity nahi!

### Galti 2: Orbit transfer (r₁ -> r₂) mein sirf ΔU = U₂ - U₁ ko required energy maan lena
- **Galat:** Energy needed = (-GMm/r₂) - (-GMm/r₁)!
- **Sahi:** Higher orbit mein satellite slow bhi hota hai (K ghatti hai!), isliye required energy **ΔE = E₂ - E₁ = (1/2) ΔU** hoti hai (factor of **1/2** zaroori hai)!

### Galti 3: Geostationary satellite ko kisi bhi latitude (jaise Delhi ke theek upar) rakhna
- **Galat:** Delhi ke theek upar ek geostationary satellite park kar do!
- **Sahi:** Orbit ka centre Earth ke centre par hona zaroori hai — isliye geostationary satellite **SIRF Equatorial plane (0° latitude)** mein hi ho sakta hai!

---

## Quick Recap

- **Satellite Period:** T = 2π √(r³ / (GM)) (near surface ≈ **84.6 min**).
- **Orbital Energy:** K = +GMm/(2r), U = -GMm/r, **E = -GMm/(2r)** => **K = -E = -U/2**; **BE = +GMm/(2r)**.
- **Orbit transfer r₁ -> r₂:** ΔE = (GMm/2)(1/r₁ - 1/r₂).
- **Geostationary:** h ≈ 36,000 km, T = 24 h, equatorial West-to-East; **Weightlessness:** N = 0 due to free fall!

---

## Practice Questions

*(Take R = 6400 km, g = 10 m/s² unless stated otherwise.)*

### Question 1
A satellite has kinetic energy K = 5 × 10⁹ J in a circular orbit. Find its potential energy U and total mechanical energy E.

**Solution:**
- E = -K = **-5 × 10⁹ J**.
- U = -2 K = **-10 × 10⁹ J** (-1.0 × 10¹⁰ J).

Jaanch:
- Jaanch: K + U = 5 - 10 = -5 × 10⁹ J = E ✅

---

### Question 2
Find the ratio of the binding energy of a satellite in an orbit of radius 2R to that in an orbit of radius 4R.

**Solution:**
BE = G M m / (2 r) ∝ 1 / r => BE₁ / BE₂ = 4R / 2R = **2 : 1**.

Jaanch:
- Jaanch: Closer orbit is more tightly bound (2× binding energy) ✅

---

### Question 3
How much minimum energy is required to launch a 100 kg satellite from Earth's surface (at rest) into a circular orbit at height h = R (radius r = 2R)?

**Solution:**
- Initial energy on surface (rest): E_i = -G M m / R = -m g R.
- Final energy in orbit (r = 2R): E_f = -G M m / (4 R) = -(1/4) m g R.
- Energy required = E_f - E_i = (-1/4 - (-1)) m g R = **(3/4) m g R** = 0.75(100)(10)(6.4 × 10⁶) = **4.8 × 10⁹ J**.

Jaanch:
- Jaanch: Lift PE = (1/2) mgR + orbital KE = (1/4) mgR => sum = (3/4) mgR ✅

---

### Question 4
If a satellite's orbital radius is increased to 4 times its original radius, by what factor does its time period T change?

**Solution:**
T ∝ r^(3/2) => 4^(3/2) = **8 times**.

Jaanch:
- Jaanch: 8² = 64 = 4³ ✅

---

### Question 5
A satellite orbits close to a planet of mean density ρ. Show that its time period T depends ONLY on ρ (independent of the planet's radius R!).

**Solution:**
T = 2π √(R³ / (G M)) = 2π √(R³ / (G · (4/3)π R³ ρ)) = **√(3 π / (G ρ))** (R³ cancels completely!).

Jaanch:
- Jaanch: Radius R cancels out — any planet with Earth's density has T_surface ≈ 84.6 min! ✅

---

### Question 6
If an orbiting satellite loses a small amount of mechanical energy due to thin atmospheric drag, what happens to its orbital radius r and its orbital speed v?

**Solution:**
- Total energy E = -GMm/(2r) becomes **more negative** => **r DECREASES** (satellite spirals inward!).
- Since v = √(GM/r), as r decreases, **speed v INCREASES**! (Famous "Satellite Drag Paradox"!)

Jaanch:
- Jaanch: Drag slows it momentarily -> drops to lower orbit -> gravity speeds it up more than drag slowed it! ✅

---

### Question 7
Find the total mechanical energy of a 500 kg satellite orbiting very close to Earth's surface (r ≈ R = 6.4 × 10⁶ m, g = 10 m/s²).

**Solution:**
E = -G M m / (2 R) = -(1/2) m g R = -0.5(500)(10)(6.4 × 10⁶) = **-1.6 × 10¹⁰ J**.

Jaanch:
- Jaanch: -2500 × 6.4 × 10⁶ = -1.6 × 10¹⁰ J ✅

---

### Question 8
A geostationary satellite orbits at radius r₁ ≈ 6.6 R with T₁ = 24 hours. What is the time period of a spy satellite orbiting at radius r₂ ≈ 3.3 R (half the geostationary radius)?

**Solution:**
T₂ = T₁ (r₂ / r₁)^(3/2) = 24 × (1/2)^(3/2) = 24 / (2 √2) = **6 √2 ≈ 8.49 hours**.

Jaanch:
- Jaanch: 24 / 2.828 ≈ 8.49 h ✅

---

### Question 9
An astronaut drops a pen inside an orbiting space station. What happens to the pen relative to the astronaut?

**Solution:**
Both the pen and the astronaut have the exact same orbital velocity and centripetal acceleration g_orbit, so the pen **floats stationary right in front of the astronaut**!

Jaanch:
- Jaanch: Relative acceleration a_rel = g_orbit - g_orbit = 0 ✅

---

### Question 10
A satellite orbits Earth at height h = R. What is the ratio of its kinetic energy to its potential energy (K / U)?

**Solution:**
For ANY circular orbit (regardless of height!), K = +GMm/(2r) and U = -GMm/r => **K / U = -1 / 2 (-0.5)**.

Jaanch:
- Jaanch: Universal Virial Theorem ratio for circular 1/r² orbits: K / U = -1/2 ✅

---

### Question 11
State whether the following statements are True or False:
(a) A geostationary satellite can be placed directly stationary above the North Pole.
(b) A polar satellite has a much shorter time period than a geostationary satellite.

**Solution:**
- (a) **False** ❌ — Geostationary orbit MUST lie in the equatorial plane!
- (b) **True** ✅ — Polar (~100 min) << Geostationary (24 hours = 1440 min).

Jaanch:
- Jaanch: Verified from Geostationary vs Polar comparison table ✅

---

### Question 12
How much energy is needed to shift a 200 kg satellite from an orbit of radius 2R to infinity (escape from that orbit)?

**Solution:**
Binding energy at r = 2R: BE = G M m / (2 × 2R) = (1/4) m g R = 0.25(200)(10)(6.4 × 10⁶) = **3.2 × 10⁹ J**.

Jaanch:
- Jaanch: 500 × 6.4 × 10⁶ = 3.2 × 10⁹ J ✅

---

Satellites, orbital energy aur weightlessness ab tumhare liye ekdam crystal clear hain!

**Agle topic mein:** Poore Gravitation chapter ke sabhi formulas ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](gravitation-part6.md) mein!
