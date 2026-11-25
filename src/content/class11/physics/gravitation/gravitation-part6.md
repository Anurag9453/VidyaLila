> **Class:** 11 | **Subject:** Physics | **Chapter 7:** Gravitation (Part 6)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Satellites, Orbital Energy & Weightlessness](gravitation-part5.md) mein humne geostationary orbits aur binding energy seekhi. Ab chalo poore Gravitation chapter ke sabhi tools — Kepler's laws, altitude/depth g, gravitational potential energy, escape/orbital speeds, aur satellite energy — ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Gokuldas ka Space-Mission Operations Desk

Gokuldas ek Space-Mission Operations Coordinator hai. Ek lunar-mission plan mein ek saath chaar cheezein judti hain: launch site par g check karna, Earth se height h tak pahunchane ki speed nikalna, parking orbit ki energy calculate karna, aur Kepler's Third Law se orbital period verify karna! Gokuldas ka **Decision Map** har gravitation sawaal ka exact formula turant saamne la deta hai.

---

## Decision Map: Kaun Sa Gravitation Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Two planets/satellites comparing T and r | **Kepler's Third Law: (T₁/T₂)² = (r₁/r₂)³** ([Topic 1](gravitation.md)) |
| Perihelion vs Aphelion speed | **Kepler's Second Law: v_p r_p = v_a r_a** ([Topic 1](gravitation.md)) |
| g at altitude h or depth d or latitude λ | Altitude: **g/(1+h/R)²** (small h: **g(1-2h/R)**); Depth: **g(1-d/R)**; Latitude: **g - ω²R cos²λ** ([Topic 2](gravitation-part2.md)) |
| Work to lift to large height h, or speed when dropped from h | **ΔU = m g h / (1 + h/R)** ([Topic 3](gravitation-part3.md)) |
| Escape speed or orbital speed | **v_e = √(2GM/R) = √(2gR)**; **v_o = √(GM/r)**; **v_e = √2 v_o** ([Topic 4](gravitation-part4.md)) |
| Satellite K, U, E, Binding Energy, Orbit transfer | **K = -E = -U/2 = +GMm/(2r)**; **ΔE = (GMm/2)(1/r₁ - 1/r₂)** ([Topic 5](gravitation-part5.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Maximum Height Reached When Launched at v = v_e / 2

A rocket is fired vertically upward from Earth's surface with speed v = v_e / 2 (half the escape speed). Ignoring air resistance, find the maximum height h it reaches above Earth's surface in terms of Earth's radius R!

**Solution:**
Since v_e² = 2 g R => v² = (v_e / 2)² = (1/4)(2 g R) = **(1/2) g R**.
By conservation of mechanical energy:
(1/2) m v² = m g h / (1 + h/R)
(1/2) m [(1/2) g R] = m g h / (1 + h/R)
1 / 4 = (h/R) / (1 + h/R) => 1 + h/R = 4 (h/R) => 3 (h/R) = 1 => **h = R / 3**!

Jaanch:
- Jaanch: General shortcut for v = k v_e (k < 1): h = R k² / (1 - k²) = R (1/4)/(3/4) = R/3 ✅

---

### Problem 2: Planet with Different Density & Radius (g and v_e Together!)

Planet X has density 2 times Earth's density and radius 1/2 of Earth's radius. Find the ratios: (a) g_X / g_E, (b) v_e(X) / v_e(E).

**Solution:**
- (a) g = (4/3) π G ρ R ∝ ρ R => g_X / g_E = (2)(1/2) = **1 : 1** (same surface gravity!).
- (b) v_e = √(2 g R) ∝ √(g R) => v_e(X) / v_e(E) = √((1)(1/2)) = **1 / √2**!

Jaanch:
- Jaanch: Check via M_X = ρ_X R_X³ = 2(1/8) M_E = M_E/4 => v_e ∝ √((1/4)/(1/2)) = 1/√2 ✅

---

### Problem 3: Launch Energy from Surface to Orbit at Height h = 2R

Find the ratio of the energy needed to lift a satellite from Earth's surface to height h = 2R (stationary there), to the additional kinetic energy needed to put it into a circular orbit at that height!

**Solution:**
- Lifting PE: ΔU = m g (2R) / (1 + 2) = **(2/3) m g R**.
- Orbital KE at r = R + 2R = 3R: K_orb = G M m / (2 × 3R) = **(1/6) m g R**.
- Ratio ΔU / K_orb = (2/3) / (1/6) = **4 : 1**!

Jaanch:
- Jaanch: Total launch energy = (2/3 + 1/6) mgR = (5/6) mgR = -GMm/(6R) - (-GMm/R) ✅

---

### Problem 4: Weight at Height h = 2R and Depth d = R/3

A space probe weighs 900 N on Earth's surface. Find its weight: (a) at height h = 2R above the surface, (b) at depth d = R/3 below the surface.

**Solution:**
- (a) W_h = W / (1 + 2)² = 900 / 9 = **100 N**.
- (b) W_d = W (1 - 1/3) = 900 × (2/3) = **600 N**.

Jaanch:
- Jaanch: At r = 3R gravity drops 9× (100 N); at d = R/3 it keeps 2/3 (600 N) ✅

---

### Problem 5: Kepler's Laws + Orbital Speed Ratio

Satellite A has orbital period T_A = 8 hours and Satellite B has orbital period T_B = 27 hours around the same planet. Find the ratio of their orbital radii r_A / r_B and orbital speeds v_A / v_B.

**Solution:**
- r_A / r_B = (T_A / T_B)^(2/3) = (8 / 27)^(2/3) = (2 / 3)² = **4 : 9**.
- v_A / v_B = √(r_B / r_A) = √(9 / 4) = **3 : 2**.

Jaanch:
- Jaanch: Closer satellite A (r = 4) moves faster (v = 3) than B (r = 9, v = 2) ✅

---

### Problem 6: Potential Energy & Escape from a Two-Star Midpoint

Two identical stars of mass M each are separated by distance 2d. Find the minimum speed required for a small spacecraft placed at their exact midpoint to escape to infinity!

**Solution:**
At the midpoint (distance d from each star):
U_i = (-G M m / d) + (-G M m / d) = **- 2 G M m / d**.
To escape (E_f = 0): (1/2) m v_e² - 2 G M m / d = 0 => v_e² = 4 G M / d => **v_e = 2 √(G M / d)**.

Jaanch:
- Jaanch: Notice E = 0 at midpoint, yet U = -2GMm/d ≠ 0, so a huge escape speed 2√(GM/d) is still needed! ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Launch to height h mein h = v²/(2g) (constant g) laga dena jab v ~ v_e ho
- **Galat:** v = v_e / 2 par h = (v_e/2)² / (2g) = R / 4!
- **Sahi:** Constant g fail ho jata hai! Exact energy conservation deta hai **h = R / 3** (33% zyada ooncha jata hai kyunki upar g kam hota jata hai)!

### Galti 2: Null point (E = 0) par escape speed ko 0 bol dena
- **Galat:** Do stars ke midpoint par net force 0 hai toh wahan se bina speed diye escape ho jayega!
- **Sahi:** Midpoint par force 0 hai, par **Potential Energy U = -2GMm/d** bahut negative hai — wahan se nikalne ke liye **v_e = 2√(GM/d)** chahiye!

### Galti 3: Total energy to launch a satellite into orbit ko sirf K_orb ya sirf ΔU bol dena
- **Galat:** Orbit mein bhejne ki energy sirf (1/2) m v_o² hai!
- **Sahi:** Surface par U_i = -GMm/R hai aur orbit par E_f = -GMm/(2r) => **Total Launch Energy = ΔU + K_orb = GMm(1/R - 1/(2r))**!

---

## Mixed Practice Questions

*(Take R = 6400 km, g = 10 m/s², v_e = 11.2 km/s unless stated otherwise.)*

### Question 1
A projectile is fired vertically upward from Earth's surface with speed v = v_e / √2. Find the maximum height h it reaches above the surface (in terms of R).

**Solution:**
k = 1/√2 => k² = 1/2.
h = R k² / (1 - k²) = R (1/2) / (1/2) = **R**!

Jaanch:
- Jaanch: v = v_e/√2 = √(gR) => matches Topic 3 Q10 (h = R) ✅

---

### Question 2
Find the ratio of g at height h = R to g at depth d = R/2.

**Solution:**
g_h = g / (1 + 1)² = g / 4; g_d = g (1 - 1/2) = g / 2.
Ratio = (g/4) / (g/2) = **1 : 2**.

Jaanch:
- Jaanch: 0.25 / 0.50 = 1/2 ✅

---

### Question 3
Two satellites orbit a planet with orbital radii in the ratio 1 : 4. Find the ratio of their orbital periods T₁ / T₂ and speeds v₁ / v₂.

**Solution:**
- T₁ / T₂ = (1/4)^(3/2) = **1 : 8**.
- v₁ / v₂ = √(4/1) = **2 : 1**.

Jaanch:
- Jaanch: T = 2πr / v => ratio (1/4) / (2/1) = 1/8 ✅

---

### Question 4
A body weighs 64 N on Earth's surface. Find its weight at a height h = 3R above the surface.

**Solution:**
W' = 64 / (1 + 3)² = 64 / 16 = **4 N**.

Jaanch:
- Jaanch: r = 4R => 1/16th of surface weight ✅

---

### Question 5
A satellite has potential energy U = -6 × 10⁹ J in a circular orbit. Find its kinetic energy K and binding energy BE.

**Solution:**
- K = -U / 2 = **+3 × 10⁹ J**.
- BE = K = **+3 × 10⁹ J**.

Jaanch:
- Jaanch: E = K + U = -3 × 10⁹ J => BE = -E = +3 × 10⁹ J ✅

---

### Question 6
If Earth's mass were 4 times larger and its radius 2 times larger, what would be the new escape speed?

**Solution:**
v_e' / v_e = √(4 / 2) = **√2** => v_e' = 11.2 √2 ≈ **15.84 km/s**.

Jaanch:
- Jaanch: √(4/2) = √2 ✅

---

### Question 7
Find the work done in shifting a 100 kg satellite from orbit r₁ = 2R to r₂ = 3R (in terms of m, g, R, and in Joules).

**Solution:**
ΔE = (1/2) m g R (1/2 - 1/3) = (1/12) m g R.
= (1/12)(100)(10)(6.4 × 10⁶) ≈ **5.33 × 10⁸ J**.

Jaanch:
- Jaanch: 1/2 - 1/3 = 1/6; half of 1/6 = 1/12 ✅

---

### Question 8
A planet moves around the Sun in an elliptical orbit with closest distance 2 AU and farthest distance 6 AU. Find the ratio of its kinetic energy at perihelion to that at aphelion (K_p / K_a).

**Solution:**
v_p / v_a = r_a / r_p = 6 / 2 = 3.
K_p / K_a = (v_p / v_a)² = 3² = **9 : 1**.

Jaanch:
- Jaanch: Speed is 3× larger => KE is 9× larger ✅

---

### Question 9
At what height above Earth's surface is the gravitational potential equal to half of its value on the surface?

**Solution:**
V(r) = -GM / r = (1/2)(-GM / R) => r = 2 R => **h = R = 6400 km**.

Jaanch:
- Jaanch: V ∝ 1/r => halves when r doubles (R -> 2R) ✅

---

### Question 10
A body of mass m is released from rest at a huge distance (infinity) and falls toward Earth. With what speed does it strike Earth's surface (ignoring air resistance)?

**Solution:**
Reverse of escape! Energy conservation: 0 = (1/2) m v² - G M m / R => **v = √(2 G M / R) = v_e ≈ 11.2 km/s**!

Jaanch:
- Jaanch: Falling from infinity gives exact escape speed 11.2 km/s ✅

---

### Question 11
State whether the following statements are True or False:
(a) Inside a uniform hollow spherical shell, both gravitational field and gravitational potential are zero.
(b) A satellite moving in a circular orbit around Earth has constant angular momentum about Earth's centre.

**Solution:**
- (a) **False** ❌ — Inside a hollow shell, field E = 0, par **potential V = -GM/R ≠ 0** (constant)!
- (b) **True** ✅ — Gravity is a central force => τ = 0 => L = constant!

Jaanch:
- Jaanch: Verified from Topics 1 and 3 ✅

---

### Question 12
How much total energy is needed to launch a 10 kg satellite from Earth's surface into a very low circular orbit (r ≈ R)?

**Solution:**
- Surface PE = -m g R; Low-orbit total energy E = -(1/2) m g R.
- Energy required = E_f - E_i = +(1/2) m g R = 0.5(10)(10)(6.4 × 10⁶) = **3.2 × 10⁸ J**.

Jaanch:
- Jaanch: Equal to orbital KE = (1/2) m v_o² = (1/2) m (gR) = 3.2 × 10⁸ J ✅

---

## Chapter Wrap-up: Gravitation at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Kepler & Newton](gravitation.md) | F = Gm₁m₂/r²; dA/dt = L/(2m); T² ∝ a³ | Medium-independent; Shell: E = 0 inside, GM/r² outside |
| [Topic 2: Variation of g](gravitation-part2.md) | g_h = g/(1+h/R)²; g_d = g(1-d/R); g' = g - ω²R cos²λ | Peak at surface; small h drops g twice as fast as depth d |
| [Topic 3: Potential & PE](gravitation-part3.md) | V = -GM/r; U = -GMm/r; ΔU = mgh/(1+h/R) | V, U are scalars (add directly); E = 0 does NOT mean V = 0 |
| [Topic 4: Escape & Orbital](gravitation-part4.md) | v_e = √(2gR) ≈ 11.2 km/s; v_o = √(GM/r); v_e = √2 v_o | Mass & angle independent; higher orbit = slower satellite |
| [Topic 5: Satellites](gravitation-part5.md) | K = -E = -U/2 = GMm/(2r); T_surface ≈ 84.6 min | Geostationary = 36,000 km, 24 h; weightlessness = free fall |
| [Topic 6: Mixed & Wrap-up](gravitation-part6.md) | h = R k²/(1-k²), orbit transfers, two-star escape | Decision Map se exact (non-constant g) formulas chuno |

Tumne Gravitation ko Kepler ke laws se lekar satellites aur deep space tak poori tarah master kar liya hai! Agar binary stars, uniform gravity inside a spherical cavity, speed at infinity when v > v_e, aur elliptical orbit energy dekhna chahte ho, toh [Gehrai Mein — Advanced Level](gravitation-advanced.md) zaroor padho!

**Agle chapter mein:** Space se wapas solids ki asli duniya mein aate hain — **Mechanical Properties of Solids** mein hum Stress, Strain, Hooke's Law, Young's Modulus, aur Elastic Potential Energy ka safar shuru karenge!
