> **Class:** 11 | **Subject:** Physics | **Chapter 7:** Gravitation (Part 3)

# Gravitational Potential Energy & Gravitational Potential

> **Pichle topic se:** [Variation of g](gravitation-part2.md) mein humne dekha ki zyada height par g constant nahi rehta. Isliye Chapter 5 wala U = m g h sirf Earth ki surface ke paas chhoti heights (h << R) par chalta hai! Space missions ke liye humein universal **Gravitational Potential Energy U = -G M m / r** chahiye!

---

## Yamunabai ka Deep-Space Potential Well Map

Yamunabai ek deep-space trajectory planner hai. Usne intern ko samjhaya: "Har planet space mein ek **Gravity Well (gahra kuan)** banata hai! Bahut door (infinity, r = ∞) par gravitational attraction 0 hoti hai, isliye hum wahin **U = 0** maante hain. Planet ke paas aane par gravity khud object ko neeche kheenchti hai, isliye planet ke aas-paas har point par Potential Energy **NEGATIVE (-G M m / r)** hoti hai!"

Chalo Gravitational Field, Potential, aur Potential Energy ke exact formulas samajhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Gravitational Field Intensity (E) | Unit mass par lagne wala gravitational force: **E = F / m = G M / r²** (vector, unit: **N/kg = m/s²**) |
| Gravitational Potential (V) | Unit mass ko infinity se point r tak bina acceleration laane mein external agent ka work: **V = - G M / r** (scalar, unit: **J/kg**) |
| Gravitational Potential Energy (U) | Mass m ko infinity se r tak laane ka work: **U = m V = - G M m / r** (scalar, unit: **Joule**) |
| Reference Zero (r = ∞) | Universal convention: infinity par **V = 0** aur **U = 0** |

---

## 1. Universal Gravitational Potential Energy (U = -GMm/r)

Kyunki force F(r) = G M m / r² distance ke saath badalta hai, infinity se r tak integrate karne par milta hai (stated, checked on ΔU below!):
```
  U(r) = - G M m / r      and      V(r) = U / m = - G M / r
```
- **Negative sign kyun?** Kyunki gravity **attractive** hai — object planet ke saath **bound** hai! Use infinity par azaad karne ke liye humein **positive (+GMm/r)** energy deni padti hai!

---

## 2. Lifting Mass m from Surface (R) to Height h (Exact vs mgh!)

Surface (r = R) se height h (r = R + h) par le jane mein increase in PE:
ΔU = U_f - U_i = (-G M m / (R + h)) - (-G M m / R)
ΔU = G M m [ 1/R - 1/(R + h) ] = G M m [ h / (R (R + h)) ]

Surface gravity **G M = g R²** substitute karne par ek super-clean exact formula milta hai:
```
  ΔU = m g h / ( 1 + h / R )
```
- **Check when h << R:** h / R ≈ 0 => **ΔU ≈ m g h** (our old Chapter 5 formula recovered!)
- **Check when h = R:** ΔU = m g R / (1 + 1) = **(1/2) m g R**! (Half of what naive m g R would wrongly guess!)

---

## 3. Potential Energy of a Multi-Particle System

Agar 3 masses m₁, m₂, m₃ distances r₁₂, r₂₃, r₃₁ par rakhe hon, toh **har unique pair** ko ek baar count karo (for N masses, N(N-1)/2 pairs!):
```
  U_total = - G ( m₁ m₂ / r₁₂ + m₂ m₃ / r₂₃ + m₃ m₁ / r₃₁ )
```

---

## Solved Examples

### Example 1: Lifting a Satellite to Height h = R and h = 2R

How much minimum work is required to lift a 100 kg payload from Earth's surface (R = 6400 km, g = 10 m/s²) to a height: (a) h = R, (b) h = 2R?

**Solution:**
Using ΔU = m g h / (1 + h / R):
- (a) h = R: ΔU = m g R / 2 = (1/2)(100)(10)(6.4 × 10⁶) = **3.2 × 10⁹ J**.
- (b) h = 2R: ΔU = m g (2R) / (1 + 2) = (2/3) m g R = (2/3)(6.4 × 10⁹) ≈ **4.27 × 10⁹ J**.

Jaanch:
- Jaanch: To lift all the way to infinity (h -> ∞): ΔU = m g R = 6.4 × 10⁹ J; h = R takes half (3.2 × 10⁹ J) and h = 2R takes 2/3 ✅

---

### Example 2: Potential Energy of Three Masses at an Equilateral Triangle

Three equal masses m = 2 kg are placed at the vertices of an equilateral triangle of side a = 1 m. Find the total gravitational potential energy of the system (in terms of G).

**Solution:**
There are 3 unique pairs, each with U_pair = -G m² / a = -G (4) / 1 = -4 G:
U_total = 3 × (-4 G) = **-12 G J**.

Jaanch:
- Jaanch: N(N-1)/2 = 3(2)/2 = 3 pairs; 3 × (-4G) = -12 G ✅

---

### Example 3: Gravitational Potential at the Centre of a Square

Four masses of 2 kg each are placed at the four corners of a square of side 2 m. Find the gravitational potential V and gravitational field E at the centre of the square (in terms of G).

**Solution:**
Distance from each corner to centre: r = half-diagonal = (2√2) / 2 = √2 m.
- **Potential (SCALAR — adds directly!):**
  V = 4 × (-G m / r) = 4 × (-2 G / √2) = **-4 √2 G J/kg** (NOT zero!).
- **Field (VECTOR — cancels by symmetry!):**
  **E = 0 N/kg**!

Jaanch:
- Jaanch: Important contrast: Field E = 0 at centre, yet Potential V = -4√2 G ≠ 0! ✅

---

### Example 4: Speed of an Object Dropped from Height h = R

A meteorite is released from rest at a height h = R above Earth's surface (R = 6400 km, g = 10 m/s²). Find its speed just before hitting Earth's surface (ignoring air resistance).

**Solution:**
Loss in PE = Gain in KE:
m g R / (1 + R/R) = (1/2) m v²
(1/2) m g R = (1/2) m v² => **v = √(g R)** = √(10 × 6.4 × 10⁶) = √(6.4 × 10⁷) = **8000 m/s = 8 km/s**!

Jaanch:
- Jaanch: Naive √(2gR) = 11.3 km/s would be wrong because g decreases with height! Exact answer is √(gR) = 8 km/s ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Badi height par bhi ΔU = m g h laga dena
- **Galat:** h = R par ΔU = m g R!
- **Sahi:** Exact formula **ΔU = m g h / (1 + h/R)** lagao — h = R par answer **(1/2) m g R** hota hai!

### Galti 2: Gravitational Potential V ko vector ki tarah cancel kar dena
- **Galat:** Square ke centre par 4 masses ka V = 0!
- **Sahi:** Field E vector hai (cancels to 0), par Potential V **SCALAR** hai — saare negative potentials seedha **add** hote hain!

### Galti 3: Multi-particle PE mein pairs ko double-count kar dena
- **Galat:** 3 masses ke liye 6 terms likh dena!
- **Sahi:** Har pair sirf **EK baar** count hota hai: N masses ke liye **N(N - 1)/2** pairs (3 ke liye 3 pairs, 4 ke liye 6 pairs)!

---

## Quick Recap

- **Field:** E = G M / r² (vector); **Potential:** V = -G M / r (scalar); **PE:** U = -G M m / r (scalar).
- **Exact lift from R to R + h:** **ΔU = m g h / (1 + h/R)** (reduces to mgh when h << R).
- **Multi-particle PE:** Sum over all N(N-1)/2 unique pairs.

---

## Practice Questions

*(Take R = 6400 km, g = 10 m/s² unless stated otherwise.)*

### Question 1
Find the work done in lifting a body of mass m from Earth's surface to a height h = 3 R in terms of m, g, and R.

**Solution:**
ΔU = m g (3R) / (1 + 3) = **(3/4) m g R**.

Jaanch:
- Jaanch: U_i = -GMm/R, U_f = -GMm/(4R) => ΔU = (3/4) GMm/R = (3/4) mgR ✅

---

### Question 2
Find the total gravitational potential energy of a system of 4 equal masses m placed at the corners of a square of side a (in terms of G, m, a).

**Solution:**
4 sides (distance a) + 2 diagonals (distance √2 a) = 6 pairs!
U = -G m² [ 4/a + 2/(√2 a) ] = **- (G m² / a) (4 + √2)**.

Jaanch:
- Jaanch: 4(3)/2 = 6 pairs (4 edges + 2 diagonals) ✅

---

### Question 3
If the gravitational potential at a point is -40 J/kg, find the gravitational potential energy of a 5 kg mass placed at that point.

**Solution:**
U = m V = 5 × (-40) = **-200 J**.

Jaanch:
- Jaanch: 5 × (-40) = -200 J ✅

---

### Question 4
Two masses 4 kg and 9 kg are 10 m apart. Find the gravitational potential V at the point where the gravitational field is zero (in terms of G).

**Solution:**
From Topic 1 Ex 3, null point is at x = 4 m from 4 kg and 6 m from 9 kg.
V = -G (4/4 + 9/6) = -G (1 + 1.5) = **-2.5 G J/kg**.

Jaanch:
- Jaanch: E = 0 at x = 4 m, yet V = -2.5 G ≠ 0 ✅

---

### Question 5
A body is dropped from rest at height h = 2 R above Earth's surface. Find its speed on reaching the surface in terms of g and R.

**Solution:**
(1/2) m v² = m g (2R) / (1 + 2) = (2/3) m g R => v² = (4/3) g R => **v = 2 √(g R / 3)**.

Jaanch:
- Jaanch: Larger drop than h = R (v = √(gR)), so √(4/3 gR) > √(gR) ✅

---

### Question 6
How much work is required to move a 2 kg mass from a point where V = -20 J/kg to a point where V = -5 J/kg?

**Solution:**
W_ext = m (V_f - V_i) = 2 (-5 - (-20)) = 2 × 15 = **+30 J**.

Jaanch:
- Jaanch: Moving to higher (less negative) potential requires positive external work ✅

---

### Question 7
A particle of mass m is placed at the centre of a uniform spherical shell of mass M and radius R. What is the gravitational potential V and field E at the centre?

**Solution:**
- Inside a uniform hollow shell, **E = 0**, so potential is **CONSTANT** everywhere inside and equals the surface potential:
  **V = - G M / R**!

Jaanch:
- Jaanch: E = -dV/dr = 0 inside => V stays constant at -GM/R ✅

---

### Question 8
If the gravitational potential energy of a satellite of mass 500 kg at a certain orbit is -2 × 10¹⁰ J, find the gravitational potential at that orbit.

**Solution:**
V = U / m = (-2 × 10¹⁰) / 500 = **-4 × 10⁷ J/kg**.

Jaanch:
- Jaanch: 500 × (-4×10⁷) = -2 × 10¹⁰ J ✅

---

### Question 9
Three masses 1 kg, 2 kg, and 3 kg are placed along a line at x = 0, 1 m, and 2 m. Find the total gravitational potential energy of the system (in terms of G).

**Solution:**
3 pairs: (1,2 at 1 m), (2,3 at 1 m), (1,3 at 2 m):
U = -G [ (1×2)/1 + (2×3)/1 + (1×3)/2 ] = -G [ 2 + 6 + 1.5 ] = **-9.5 G J**.

Jaanch:
- Jaanch: 2 + 6 + 1.5 = 9.5 ✅

---

### Question 10
A body of mass m is projected vertically upward from Earth's surface with speed v = √(g R). Find the maximum height h it reaches above the surface!

**Solution:**
(1/2) m v² = m g h / (1 + h/R) => (1/2) m g R = m g h / (1 + h/R)
=> (1/2) (1 + h/R) = h/R => 1/2 = h / (2 R) => **h = R**!

Jaanch:
- Jaanch: Exact reverse of Example 4 (dropped from h = R hits with √(gR)) ✅

---

### Question 11
State whether the following statements are True or False:
(a) Gravitational potential energy is always zero at the surface of Earth.
(b) At a point where the gravitational field is zero, the gravitational potential must also be zero.

**Solution:**
- (a) **False** ❌ — Universal reference U = 0 is at **infinity**; at Earth's surface U = -GMm/R < 0!
- (b) **False** ❌ — Question 4 aur Example 3 mein E = 0 par bhi V negative (non-zero) tha!

Jaanch:
- Jaanch: E = 0 only means dV/dr = 0 (V is locally flat, not necessarily 0) ✅

---

### Question 12
Find the ratio of work done to lift a mass m from surface to height R, to the work done to lift it from height R to infinity.

**Solution:**
- Surface to R: ΔU₁ = (1/2) m g R.
- R to infinity: ΔU₂ = 0 - (-GMm / (2R)) = (1/2) m g R.
Ratio ΔU₁ / ΔU₂ = **1 : 1**!

Jaanch:
- Jaanch: Surface to infinity takes mgR; first R takes half (0.5 mgR) and R to ∞ takes the other half (0.5 mgR) ✅

---

Gravitational potential wells ab tumhare liye bilkul clear hain!

**Agle topic mein:** Is gravity well se hamesha ke liye bahar nikalne ke liye kitni speed chahiye (**Escape Speed**) aur circle mein ghoomne ke liye kitni (**Orbital Speed**)? Chalo padhte hain [Escape Speed & Orbital Speed](gravitation-part4.md)!
