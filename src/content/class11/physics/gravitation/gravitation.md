> **Class:** 11 | **Subject:** Physics | **Chapter 7:** Gravitation

# Kepler's Laws & Newton's Universal Law of Gravitation

> **Pichle chapter aur pehle ki padhai se:** [System of Particles and Rotational Motion](../system-of-particles-and-rotational-motion/system-of-particles-and-rotational-motion-part7.md) mein humne angular momentum conservation dekha — wahi law planets ke orbits ko govern karta hai! Gravitation ka basic intro tum [Class 9 Gravitation](../../../class9/physics/gravitation/gravitation.md) aur [Class 10 Gravitation and Space Missions](../../../class10/physics/gravitation-and-space-missions/gravitation-and-space-missions.md) mein dekh chuke ho — yahan hum Kepler ke teeno laws, vector superposition, aur Shell Theorem ka exact physics padhenge!

---

## Umashankar ka Planetarium & Cavendish Balance

Umashankar ek planetarium astronomer hai. Ek raat usne bachchon ko dikhaya ki Mars ka orbital radius Earth se lagbhag **1.52 guna** bada hai, isliye uska saal (time period) Kepler ke third law (T² ∝ a³) ke mutabik lagbhag **1.88 Earth years** hota hai!

Saath hi usne bataya ki Newton ne gravitation ka formula 1687 mein diya, par universal constant **G = 6.67 × 10⁻¹¹ N m² kg⁻²** ko pehli baar **Henry Cavendish** ne 1798 mein ek ultra-sensitive torsion balance se naapa — jisse poore Earth ka mass ("weighing the Earth") pata chal gaya!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Kepler's First Law (Law of Orbits) | Har planet Sun ke chaaron taraf **elliptical orbit** mein ghoomta hai, aur Sun us ellipse ke ek **focus** par hota hai |
| Kepler's Second Law (Law of Areas) | Planet ko Sun se jodne wali line equal time mein **equal area** sweep karti hai (**dA / dt = L / (2m) = constant**) |
| Kepler's Third Law (Law of Periods) | Orbital time period ka square semi-major axis ke cube ke proportional hota hai: **T² ∝ a³** |
| Universal Gravitational Constant (G) | 6.67 × 10⁻¹¹ N m² kg⁻² (pure universe mein same, medium par depend nahi karta!) |
| Shell Theorem | Uniform spherical shell bahar ke point ke liye saara mass **centre par** maana jata hai, aur **andar har point par force = 0**! |

---

## 1. Kepler's Three Laws of Planetary Motion

1. **Law of Orbits:** Elliptical orbit with Sun at one focus (closest point = **Perihelion**, farthest point = **Aphelion**).
2. **Law of Areas (Kyun?):**
   Gravity ek **central force** hai (Sun ki taraf), isliye Sun ke about torque **τ = 0** => Angular momentum **L = m v r_⊥ = constant**!
   Chhote time dt mein swept triangle area dA = (1/2) r (v_⊥ dt) = (L / (2m)) dt:
   ```
     Areal Velocity:   dA / dt = L / (2 m) = constant!
   ```
   *(Iska matlab: Planet Sun ke **paas (perihelion)** par **TEZ** aur Sun se **door (aphelion)** par **DHEEMA** chalta hai!)*
3. **Law of Periods:**
   Circular orbit ke liye G M m / r² = m ω² r = m (4π² / T²) r  =>
   ```
     T² = (4 π² / (G M)) r³   ===>   T² ∝ a³
   ```

---

## 2. Newton's Universal Law of Gravitation & Superposition

Do point masses m₁ aur m₂ (doori r) ek doosre ko hamesha **attract** karte hain:
```
  F = G m₁ m₂ / r²
```
- **Always attractive**, acts along the line joining the centres (central force).
- **Medium-independent:** Paani, hawa, ya vacuum mein dono masses ke beech gravitational force bilkul SAME rehta hai!
- **Principle of Superposition:** Multi-mass system mein kisi mass par net gravitational force sabhi individual forces ka **vector sum** hota hai: **F_net = F₁ + F₂ + F₃ + ...**

---

## Solved Examples

### Example 1: Kepler's Third Law (New Planet Orbital Period)

A newly discovered planet orbits the Sun at an average distance 4 times that of Earth (a = 4 AU). Find its orbital time period in Earth years.

**Solution:**
T² ∝ a³ => (T / T_Earth)² = (4 / 1)³ = 64 => T / 1 = √64 = **8 Earth years**.

Jaanch:
- Jaanch: 8² = 64 = 4³ ✅

---

### Example 2: Vector Superposition at an Equilateral Triangle

Three equal masses m = 2 kg are placed at the three vertices of an equilateral triangle of side a = 1 m. Find the magnitude of the net gravitational force on any one mass (in terms of G).

**Solution:**
Each of the other two masses pulls with equal force F = G m² / a² = G (4) / 1 = **4 G**, at an angle of **60°** to each other!
Resultant of two equal vectors F at 60°:
F_net = √(F² + F² + 2 F² cos 60°) = √3 F = **4 √3 G** (directed toward the midpoint of the opposite side).

Jaanch:
- Jaanch: 2 F cos 30° = 2(4G)(√3/2) = 4√3 G ✅

---

### Example 3: Null Point (Zero Net Gravity) Between Two Masses

Two masses M₁ = 4 kg and M₂ = 9 kg are separated by a distance of 10 m. At what distance x from the 4 kg mass along the line joining them is the net gravitational force on a small test mass m equal to zero?

**Solution:**
At the null point, pulls from M₁ and M₂ balance:
G (4) m / x² = G (9) m / (10 - x)²
Take positive square root of both sides (x is between 0 and 10):
2 / x = 3 / (10 - x) => 20 - 2 x = 3 x => 5 x = 20 => **x = 4 m** (closer to the lighter 4 kg mass!).

Jaanch:
- Jaanch: 4 / 4² = 4/16 = 1/4; 9 / 6² = 9/36 = 1/4 ✅

---

### Example 4: Force Inside vs Outside a Hollow Spherical Shell (Shell Theorem)

A uniform hollow spherical shell has mass M = 100 kg and radius R = 2 m. Find the gravitational force on a 1 kg particle placed at distance: (a) r = 1 m from the centre (inside), (b) r = 4 m from the centre (outside), in terms of G.

**Solution:**
- (a) Inside a uniform spherical shell (r < R), all opposite patches cancel => **F = 0**!
- (b) Outside (r > R), the shell acts as a point mass M at the centre:
  F = G (100)(1) / 4² = 100 G / 16 = **6.25 G**.

Jaanch:
- Jaanch: Shell Theorem: zero inside, GMm/r² outside ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Gravitational force ko medium (paani/oil) par depend maanna
- **Galat:** Do masses ko paani mein rakhne par unke beech ka gravitational force kam ho jata hai!
- **Sahi:** Electrostatic force medium par depend karta hai, par **Gravitational constant G aur force F medium par bilkul depend NAHI karte**!

### Galti 2: Kepler's Third Law mein T ∝ r³ likh dena (square bhool jana!)
- **Galat:** Distance 4× hua toh time period 4³ = 64× hoga!
- **Sahi:** **T² ∝ a³** => **T ∝ a^(3/2)**! Distance 4× hone par T = 4^(3/2) = **8×** hota hai!

### Galti 3: Uniform solid/hollow sphere ke beech doori surface-to-surface le lena
- **Galat:** Do touching spheres (radius R each) ke beech doori r = 0!
- **Sahi:** Shell Theorem ke mutabik doori hamesha **centre-to-centre** li jati hai => touching spheres ke liye **r = 2 R**!

---

## Quick Recap

- **Kepler's Laws:** (1) Elliptical orbits; (2) dA/dt = L/(2m) = constant; (3) T² ∝ a³.
- **Newton's Law:** F = G m₁ m₂ / r² (G = 6.67 × 10⁻¹¹ SI, medium-independent, always attractive).
- **Shell Theorem:** F = 0 inside a uniform hollow shell; F = GMm/r² outside.

---

## Practice Questions

### Question 1
If the distance between two masses is doubled and both masses are also doubled, how does the gravitational force between them change?

**Solution:**
F' = G (2m₁)(2m₂) / (2r)² = 4 / 4 × F = **F (remains unchanged!)**.

Jaanch:
- Jaanch: Numerator ×4, denominator ×4 => ratio = 1 ✅

---

### Question 2
A satellite orbits a planet at radius r with time period T. What will be the time period of another satellite orbiting the same planet at radius 9 r?

**Solution:**
T' / T = (9 r / r)^(3/2) = 9^(3/2) = 3³ = **27 T**.

Jaanch:
- Jaanch: (27)² = 729 = 9³ ✅

---

### Question 3
Two identical solid spheres of mass M and radius R are placed touching each other. Express the gravitational attraction between them in terms of G, M, and R.

**Solution:**
Centre-to-centre distance r = 2 R.
F = G M² / (2 R)² = **G M² / (4 R²)**.

Jaanch:
- Jaanch: r = R + R = 2R => r² = 4R² ✅

---

### Question 4
Two masses 1 kg and 16 kg are 15 m apart. Find the distance from the 1 kg mass where the net gravitational force on a test mass is zero.

**Solution:**
1 / x = 4 / (15 - x) => 15 - x = 4 x => 5 x = 15 => **x = 3 m**.

Jaanch:
- Jaanch: 1/3² = 1/9; 16/12² = 16/144 = 1/9 ✅

---

### Question 5
Four equal masses m are placed at the four corners of a square of side a. Find the net gravitational force on a mass m₀ placed at the exact centre of the square.

**Solution:**
Opposite corner pulls are equal and opposite, cancelling completely => **F_net = 0**!

Jaanch:
- Jaanch: Complete symmetry about the centre gives zero net force ✅

---

### Question 6
If the distance between Earth and Sun were halved (a' = a / 2), how many days would there be in a year (currently 365 days)?

**Solution:**
T' = T (1/2)^(3/2) = 365 / (2 √2) ≈ 365 / 2.828 ≈ **129 days**.

Jaanch:
- Jaanch: Closer orbit => faster and shorter year (129 < 365) ✅

---

### Question 7
A planet of mass m orbits the Sun with angular momentum L = 4 × 10⁴⁰ kg m²/s and mass m = 2 × 10²⁴ kg. Find its areal velocity dA / dt.

**Solution:**
dA / dt = L / (2 m) = (4 × 10⁴⁰) / (4 × 10²⁴) = **10¹⁶ m²/s**.

Jaanch:
- Jaanch: 4 / 4 = 1; 10^(40-24) = 10¹⁶ m²/s ✅

---

### Question 8
Three masses 2 kg each are at the vertices of an equilateral triangle of side 2 m, and a 5 kg mass is placed at the centroid of the triangle. Find the net gravitational force on the 5 kg mass.

**Solution:**
By 120° symmetry, the three equal pulls on the centroid add to **0 N**!

Jaanch:
- Jaanch: Three equal vectors at 120° always sum to zero ✅

---

### Question 9
Two identical lead spheres of radius R and density ρ touch each other. Show that the gravitational force between them is proportional to R⁴.

**Solution:**
Mass of each sphere M = (4/3) π R³ ρ => M² ∝ R⁶.
Centre-to-centre distance r = 2 R => r² ∝ R².
F = G M² / (4 R²) ∝ R⁶ / R² = **R⁴**!

Jaanch:
- Jaanch: R³ × R³ / R² = R⁴ ✅

---

### Question 10
A comet's closest distance to the Sun (perihelion) is 1 AU where its speed is 45 km/s. If its farthest distance (aphelion) is 9 AU, find its speed at aphelion using Kepler's Second Law.

**Solution:**
Conservation of angular momentum: v_p r_p = v_a r_a
45 × 1 = v_a × 9 => **v_a = 5 km/s**.

Jaanch:
- Jaanch: 9× farther from Sun => 9× slower (45 / 9 = 5 km/s) ✅

---

### Question 11
State whether the following statements are True or False:
(a) Kepler's Second Law is a direct consequence of the conservation of angular momentum.
(b) Gravitational force between two masses decreases if they are immersed in water.

**Solution:**
- (a) **True** ✅ — Central force => τ = 0 => L = constant => dA/dt = constant.
- (b) **False** ❌ — Gravitation is completely independent of the intervening medium.

Jaanch:
- Jaanch: Both statements directly verified from Sections 1 and 2 ✅

---

### Question 12
Find the gravitational force between two 100 kg spheres whose centres are 2 m apart (G = 6.67 × 10⁻¹¹ N m²/kg²).

**Solution:**
F = (6.67 × 10⁻¹¹)(100)(100) / 4 = 6.67 × 10⁻⁷ / 4 ≈ **1.67 × 10⁻⁷ N**.

Jaanch:
- Jaanch: 10⁴ / 4 = 2500; 6.67 × 2.5 × 10⁻⁸ = 1.6675 × 10⁻⁷ N ✅

---

Kepler aur Newton ke universal laws ab tumhare liye bilkul clear hain!

**Agle topic mein:** Kya gravity har jagah 9.8 m/s² rehti hai, ya pahad par chadhne, khadaan mein utarne, aur Earth ke ghoomne se badalti hai? Chalo padhte hain [Acceleration Due to Gravity & Its Variations](gravitation-part2.md)!
