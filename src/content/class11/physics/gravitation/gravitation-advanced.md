> **Class:** 11 | **Subject:** Physics | **Chapter 7:** Gravitation (Gehrai Mein — Advanced Level)

# Gravitation — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](gravitation.md) se [Topic 6](gravitation-part6.md)) mein humne Kepler's laws, variation of g, potential energy, escape/orbital speeds, aur satellites cover kiye. Ab is **Gehrai Mein** section mein hum woh deep astrophysics & orbital-mechanics gems dekhenge jo sabse challenging problems ko clean bana dete hain — **Binary Star Orbits**, **Uniform Gravity Inside a Spherical Cavity**, **Hyperbolic Escape Speed at Infinity (v > v_e)**, **Elliptical Orbit Energy & Speeds**, aur **Tunnel Through Earth**!

---

## Hiralal ka Orbital-Mechanics Research Lab

Hiralal ek orbital-mechanics researcher hai. Uske whiteboard par chaar jaw-dropping gravitational results likhe hain:
1. Do tare (Binary Stars m₁, m₂, doori d) apne common Centre of Mass ke chaaron taraf exact same angular speed **ω = √(G (m₁ + m₂) / d³)** se ghoomte hain!
2. Agar ek uniform solid planet ke andar ek off-centre **spherical cavity** kaat di jaye, toh cavity ke andar har ek point par gravitational field **bilkul UNIFORM (constant magnitude aur constant direction!)** hoti hai!
3. Agar rocket ko v > v_e se launch karein, toh infinity par uski bachi hui speed v - v_e NAHI balki **√(v² - v_e²)** hoti hai!

Chalo Hiralal ke saath in paanch elite gravitation tools ko prove aur solve karte hain!

---

## 1. Binary Star System (Two Masses Orbiting Their Common CM)

Masses m₁ aur m₂ (doori d) apne CM ke chaaron taraf radii **r₁ = m₂ d / (m₁ + m₂)** aur **r₂ = m₁ d / (m₁ + m₂)** ke circles mein same **ω** se ghoomte hain:
G m₁ m₂ / d² = m₁ ω² r₁ = m₁ ω² [m₂ d / (m₁ + m₂)]
m₁ m₂ dono taraf se cancel!
```
  ω = √( G (m₁ + m₂) / d³ )      |      T = 2π √( d³ / (G (m₁ + m₂)) )
```

---

## 2. Uniform Gravity Inside a Spherical Cavity (Superposition Miracle!)

Uniform solid sphere (density ρ, centre O) ke andar point r par gravitational field:
**E_solid(r) = - (4/3) π G ρ r** (vector from O to point!).
Agar centre **C** (position vector **a = OC**) par spherical cavity kaat di jaye, toh negative-mass superposition se cavity ke andar kisi bhi point P (position r from O, position r' = r - a from C) par:
**E_cavity = E_solid(r) - E_removed(r') = -(4/3) π G ρ r + (4/3) π G ρ (r - a) = - (4/3) π G ρ a**!

**Miracle:** Point P ka vector **r** bilkul cancel ho gaya! Cavity ke andar **HAR POINT par gravitational field CONSTANT magnitude (4/3) π G ρ a aur CONSTANT direction (C se O ki taraf)** hoti hai — cavity ke radius par bhi depend nahi karti!

---

## 3. Speed at Infinity When Launched With v > v_e

Energy conservation between surface (r = R) and infinity (r = ∞):
(1/2) m v² - (1/2) m v_e² = (1/2) m v_∞² + 0  =>
```
  v_∞ = √( v² - v_e² )
```

---

## 4. Elliptical Orbit Energy & Semi-Major Axis (a)

Semi-major axis **a = (r_p + r_a) / 2** wale elliptical orbit ke liye:
- **Total Energy:** **E = - G M m / (2 a)** (sirf semi-major axis **a** par depend karta hai, eccentricity par nahi!)
- **Vis-Viva Equation (Speed at any distance r):** **v² = G M ( 2 / r - 1 / a )**
- **Perihelion & Aphelion:** **v_p r_p = v_a r_a** (Kepler 2nd Law).

---

## 6 Deep Solved Problems

### Problem 1: Binary Star Period & Orbital Radii

Two stars of masses M and 3M separated by distance d revolve around their common centre of mass. Find: (a) the radius of each star's orbit, (b) their common angular velocity ω, (c) the ratio of their kinetic energies K₁ / K₂.

**Solution:**
- (a) r₁ (for M) = 3M d / (4M) = **(3/4) d**; r₂ (for 3M) = M d / (4M) = **(1/4) d**.
- (b) ω = √(G (M + 3M) / d³) = **2 √(G M / d³)**.
- (c) K = (1/2) m ω² r² => K₁ / K₂ = (M r₁²) / (3M r₂²) = (1/3) × (3/1)² = **3 : 1** (lighter star carries 3× more KE!).

Jaanch:
- Jaanch: Check m₁ r₁ = M(3d/4) = 3M(d/4) = m₂ r₂ ✅

---

### Problem 2: Gravitational Field Inside an Off-Centre Spherical Cavity

A uniform solid sphere of mass M and radius R has surface gravity g. A spherical cavity of radius R/2 is scooped out with its centre at distance a = R/2 from the sphere's centre. Find the gravitational field intensity inside the cavity in terms of g.

**Solution:**
Since g = (4/3) π G ρ R:
E_cavity = (4/3) π G ρ a = g (a / R) = g (R/2 / R) = **g / 2** (uniform everywhere inside the cavity, pointing toward the centre of the large sphere!).

Jaanch:
- Jaanch: Check at the centre of the big sphere O (which lies on the cavity boundary): big sphere gives 0, removed sphere (mass M/8 at distance R/2) gives G(M/8)/(R/2)² = GM/(2R²) = g/2 ✅

---

### Problem 3: Interstellar Speed When Launched at 2 v_e

A deep-space probe is launched from Earth's surface with speed v = 2 v_e (22.4 km/s). Find its residual speed v_∞ very far from Earth!

**Solution:**
v_∞ = √(v² - v_e²) = √((2 v_e)² - v_e²) = **√3 v_e ≈ 1.732 × 11.2 ≈ 19.4 km/s**!
(Notice: naive v - v_e = 11.2 km/s would be massively wrong!)

Jaanch:
- Jaanch: (√3)² + 1² = 4 = 2² ✅

---

### Problem 4: Elliptical Orbit Speeds at Perihelion and Aphelion

A satellite orbits Earth in an elliptical orbit with minimum distance r_p = 2R and maximum distance r_a = 6R. Find: (a) semi-major axis a, (b) the ratio v_p / v_a, (c) the speed v_p in terms of √(g R).

**Solution:**
- (a) a = (2R + 6R) / 2 = **4 R**.
- (b) v_p / v_a = r_a / r_p = 6R / 2R = **3 : 1**.
- (c) Vis-Viva at r_p = 2R (using GM = g R²):
  v_p² = g R² (2 / (2R) - 1 / (4R)) = g R (1 - 1/4) = (3/4) g R => **v_p = (√3 / 2) √(g R)**.

Jaanch:
- Jaanch: Check v_a = v_p / 3 = (√3 / 6) √(gR); Vis-Viva at 6R: gR(2/6 - 1/4) = gR(1/12) => √(1/12) = √3 / 6 ✅

---

### Problem 5: Falling Through a Tunnel Dug Straight Through Earth's Centre

A smooth straight tunnel is dug right through Earth's centre from Pole to Pole, and a stone is dropped from rest at one end (R = 6400 km, g = 10 m/s²). Find its speed when it passes through Earth's exact centre!

**Solution:**
Inside Earth (r < R), potential is V(r) = -(G M / (2 R³)) (3 R² - r²):
- At surface (r = R): V_surface = -G M / R = -g R.
- At centre (r = 0): V_centre = **-(3/2) G M / R = -1.5 g R** (1.5× deeper than surface!).
Loss in PE = Gain in KE:
(1/2) m v² = m (1.5 g R - 1.0 g R) = **(1/2) m g R** => **v = √(g R) = 8 km/s** (exact same as surface orbital speed!).

Jaanch:
- Jaanch: Inside Earth g(r) = (g/R) r is linear (like a spring F = -kx with k = mg/R!); spring energy (1/2) k R² = (1/2) m g R = (1/2) m v² => v = √(gR) ✅

---

### Problem 6: Three Equal Stars Orbiting on a Common Circle

Three identical stars of mass M each lie at the vertices of an equilateral triangle of side L and revolve in a common circular orbit under their mutual gravitational attraction. Find their common orbital speed v!

**Solution:**
- Distance of each vertex from centroid (orbit radius): r = **L / √3**.
- Net inward gravitational force on one star (from Topic 1 Ex 2): F_net = **√3 G M² / L²**.
- Set F_net = M v² / r:
  √3 G M² / L² = M v² / (L / √3) = √3 M v² / L
  Cancel √3 M / L from both sides: **v = √(G M / L)**!

Jaanch:
- Jaanch: Clean, exact cancellation of √3 gives v = √(GM/L) ✅

---

## 3 Advanced Mistakes

### Galti 1: v > v_e launch mein infinity par speed v_∞ = v - v_e likh dena
- **Galat:** 2 v_e se launch kiya toh infinity par 2 v_e - v_e = v_e bachegi!
- **Sahi:** Energy (v²) subtract hoti hai, velocity (v) nahi! **v_∞ = √(v² - v_e²) = √3 v_e**!

### Galti 2: Solid sphere ke centre par potential V = 0 bol dena
- **Galat:** Centre par field g = 0 hai toh potential bhi 0 hoga!
- **Sahi:** Centre par gravity well sabse **gahra** hota hai: **V_centre = -(3/2) G M / R = 1.5 V_surface**!

### Galti 3: Binary star mein har star ka orbital radius d / 2 maan lena jab m₁ ≠ m₂
- **Galat:** Dono stars ke beech doori d hai toh dono radius d/2 par ghoomte hain!
- **Sahi:** Dono apne **Centre of Mass** ke chaaron taraf ghoomte hain: **r₁ = m₂ d / (m₁ + m₂)** aur **r₂ = m₁ d / (m₁ + m₂)**!

---

## Practice Questions (Advanced)

*(Take R = 6400 km, g = 10 m/s², v_e = 11.2 km/s unless stated otherwise.)*

### Question 1
A spacecraft is launched from Earth's surface with speed v = √5 v_e. Find its speed at infinity in terms of v_e.

**Solution:**
v_∞ = √(5 v_e² - v_e²) = √(4 v_e²) = **2 v_e = 22.4 km/s**.

Jaanch:
- Jaanch: 5 - 1 = 4 => √4 = 2 ✅

---

### Question 2
Two identical stars of mass M each separated by distance d revolve around their midpoint. Find their orbital speed v in terms of G, M, and d.

**Solution:**
G M² / d² = M v² / (d / 2) => v² = G M / (2 d) => **v = √(G M / (2 d))**.

Jaanch:
- Jaanch: ω = √(2GM/d³); v = ω (d/2) = √(GM/(2d)) ✅

---

### Question 3
A uniform solid sphere of radius R has surface gravity g. A spherical cavity of radius R/4 is cut out with its centre at distance R/3 from the centre of the big sphere. Find the magnitude of the gravitational field anywhere inside the cavity.

**Solution:**
E_cavity = g (a / R) = **g / 3** (independent of cavity radius R/4!).

Jaanch:
- Jaanch: Cavity field depends ONLY on centre-to-centre separation a = R/3 ✅

---

### Question 4
Find the ratio of the gravitational potential at the centre of a uniform solid sphere to the gravitational potential at its surface (V_centre / V_surface).

**Solution:**
V_centre = -(3/2) GM/R; V_surface = -GM/R => **V_centre / V_surface = 3 / 2 = 1.5**.

Jaanch:
- Jaanch: Centre is 1.5× deeper in the potential well than the surface ✅

---

### Question 5
A comet orbits the Sun in an elliptical orbit with semi-major axis a = 4 AU and perihelion distance r_p = 1 AU. Find its aphelion distance r_a and the ratio of speeds v_p / v_a.

**Solution:**
- r_p + r_a = 2 a = 8 AU => **r_a = 7 AU**.
- v_p / v_a = r_a / r_p = **7 : 1**.

Jaanch:
- Jaanch: (1 + 7)/2 = 4 AU ✅

---

### Question 6
How much minimum work is required to move a mass m from the **centre** of a uniform solid sphere (mass M, radius R) to infinity?

**Solution:**
U_centre = -(3/2) G M m / R; U_∞ = 0.
W = 0 - U_centre = **(3/2) G M m / R = 1.5 m g R**.

Jaanch:
- Jaanch: Escape speed from Earth's centre would be √(3 g R) = √1.5 v_e! ✅

---

### Question 7
A particle is projected from Earth's surface with speed 3 v_e. Find its speed at infinity.

**Solution:**
v_∞ = √(9 v_e² - v_e²) = √8 v_e = **2 √2 v_e ≈ 31.68 km/s**.

Jaanch:
- Jaanch: 9 - 1 = 8 => 2√2 ✅

---

### Question 8
A satellite is in a circular orbit of radius R. If its speed is suddenly increased instantaneously to v = √(1.5 G M / R) (tangentially), find the semi-major axis a of its new elliptical orbit!

**Solution:**
Total energy E = (1/2) m (1.5 GM/R) - GMm/R = (0.75 - 1) GMm/R = **- 0.25 G M m / R = - G M m / (4 R)**.
Compare with E = -G M m / (2 a) => 2 a = 4 R => **a = 2 R** (so aphelion r_a = 2a - R = 3R!).

Jaanch:
- Jaanch: E = -GMm/(2a) gives semi-major axis directly from total energy ✅

---

### Question 9
Two stars of masses M and 2M are separated by distance d. Find the time period T of their binary orbit.

**Solution:**
T = 2π √(d³ / (G (M + 2M))) = **2π √(d³ / (3 G M))**.

Jaanch:
- Jaanch: Sum of masses = 3M ✅

---

### Question 10
A straight tunnel is dug through Earth's centre. If a stone is dropped into it, show that its restoring acceleration at distance r from the centre is proportional to r, and find the time to reach the other side of Earth (half a full oscillation, given T_full = 2π √(R/g) ≈ 84.6 min).

**Solution:**
Inside Earth, a = -g(r) = -(g / R) r (exact SHM with ω = √(g/R)!).
Full oscillation period = 2π / ω = 2π √(R/g) ≈ 84.6 min.
Time to reach the opposite side = T / 2 ≈ **42.3 minutes**!

Jaanch:
- Jaanch: Same 42.3 minutes even for a straight chord tunnel not passing through the centre! ✅

---

### Question 11
A particle of mass m is placed at the centre of a thin uniform circular ring of mass M and radius R, and then moved along the axis to distance x = √3 R. Find the change in gravitational potential energy ΔU.

**Solution:**
Potential on the axis of a ring: V(x) = -G M / √(R² + x²).
- At x = 0: U_i = -G M m / R.
- At x = √3 R: √(R² + 3R²) = 2 R => U_f = -G M m / (2 R).
- ΔU = U_f - U_i = **+ G M m / (2 R)**.

Jaanch:
- Jaanch: At x = √3 R, distance to every point of the ring is 2R (double of R) ✅

---

### Question 12
Two identical solid spheres of mass M and radius R are initially very far apart (at rest) and move toward each other solely under mutual gravity. Find the speed of EACH sphere just before they collide (centre-to-centre distance = 2R)!

**Solution:**
By symmetry both have equal speed v.
Initial E = 0. At collision (r = 2R):
2 × [(1/2) M v²] - G M² / (2 R) = 0 => M v² = G M² / (2 R) => **v = √(G M / (2 R))**.

Jaanch:
- Jaanch: Total KE = M v² = G M² / (2R) = |ΔU| ✅

---

Shabaash! Tumne Gravitation ko binary stars, spherical cavities, elliptical orbits, aur Earth-tunnel physics tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](gravitation-part6.md) dekho!
