# Chapter: Moving Charges and Magnetism (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Parallel Currents, Torque and Galvanometer](moving-charges-and-magnetism-part4.md)

---

## Magnetism Lab Relay ke Chaar Stations

School science week mein **Gita** ko "Magnetism Lab Relay" ke chaar mixed-concept stations paar karne the:
1. Proton aur Alpha particle same kinetic energy se magnetic field mein enter karein to kiska circle bada hoga?
2. Do perpendicular concentric coils ke centre par net magnetic field kaise jodenge?
3. Hawa mein ek current-carrying wire ko magnetic field se kaise balance (levitate) karein?
4. Ek hi galvanometer ko pehle ammeter aur phir voltmeter mein kaise badlein?

Chalo Gita ke saath sab kuch mila kar solve karte hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula |
|---|---|---|
| Charged particle moving in B (ya crossed E, B) | Lorentz force & circular motion | r = mv/(qB) = √(2mK)/(qB); T = 2πm/(qB); v = E/B |
| Current wire balanced against gravity | Equilibrium of forces | I L B = m g |
| Magnetic field of circular coil / arc | Biot-Savart results | B_centre = μ₀NI/(2R); B_arc = μ₀Iφ/(4πR) |
| Magnetic field of long wire / solenoid / toroid | Ampere's Circuital Law | Wire: μ₀I/(2πr); Solenoid/Toroid: μ₀ n I |
| Two perpendicular fields B₁ and B₂ at a point | Vector superposition! | B_net = √(B₁² + B₂²) |
| Parallel wires force / loop torque / MCG conversion | Force, torque & shunt/series rules | F/L = μ₀I₁I₂/(2πd); τ = NIAB sin θ; S = I_gR_g/(I−I_g); R = V/I_g − R_g |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Proton vs Alpha Particle (Same Kinetic Energy!)
A proton (mass m, charge +e) and an alpha particle (mass **4m**, charge **+2e**) enter the same uniform magnetic field **B** perpendicularly with the **same kinetic energy K**. Find the ratio of the radii of their circular paths (**r_p : r_α**).

**Hal (Solution):**
- Momentum p = √(2 m K) ⟹ Radius **r = p / (q B) = √(2 m K) / (q B)**.
- Kyunki K aur B dono ke liye same hain: **r ∝ √m / q**!
- Proton ke liye: √m / e.
- Alpha particle ke liye: √(4m) / (2e) = (2 √m) / (2e) = **√m / e**!
- Ratio **r_p : r_α = 1 : 1**! (Hairaan kar dene wala result — dono **bilkul barabar radius** ke circle mein ghoomte hain!)
- **Jaanch:** √4 / 2 = 2/2 = 1 ⟹ r_α = r_p ✅.

### Example 2: Two Perpendicular Concentric Circular Coils
Two identical circular coils, each of radius **R = 10 cm** and **N = 10 turns**, carry currents **I₁ = 3 A** and **I₂ = 4 A** respectively. They are placed concentrically with their planes **perpendicular** to each other. Find the net magnetic field at their common centre (take π = 3.14).

**Hal (Solution):**
- Coil 1 ka field: B₁ = (μ₀ N I₁) / (2 R) = (4 × 3.14 × 10⁻⁷ × 10 × 3) / (2 × 0.10) = 60 × 3.14 × 10⁻⁶ = **1.884 × 10⁻⁴ T**.
- Coil 2 ka field: B₂ = (μ₀ N I₂) / (2 R) = (4 × 3.14 × 10⁻⁷ × 10 × 4) / (2 × 0.10) = 80 × 3.14 × 10⁻⁶ = **2.512 × 10⁻⁴ T**.
- Planes perpendicular hain ⟹ B₁ aur B₂ bhi **90°** par hain!
- Vector resultant: **B_net = √(B₁² + B₂²)** = √(3² + 4²) × (20 × 3.14 × 10⁻⁶)
  = 5 × 62.8 × 10⁻⁶ = **3.14 × 10⁻⁴ T**.
- **Jaanch:** 3-4-5 right triangle! 5 × 62.8 × 10⁻⁶ = 314 × 10⁻⁶ = 3.14 × 10⁻⁴ T ✅.

### Example 3: Levitating a Current-Carrying Wire in Air
A straight horizontal copper wire of mass **m = 60 g** and length **L = 1.5 m** carries a current of **I = 2.0 A**. What minimum horizontal uniform magnetic field **B** (perpendicular to the wire) is needed to hold the wire suspended in mid-air against gravity? (Take g = 10 m/s².)

**Hal (Solution):**
- Suspended rehne ke liye upward magnetic force = downward weight:
  **I L B = m g**
- m = 60 g = 0.060 kg, L = 1.5 m, I = 2.0 A, g = 10 m/s²:
  B = (m g) / (I L) = (0.060 × 10) / (2.0 × 1.5) = 0.60 / 3.0 = **0.20 T**.
- **Jaanch:** I L B = 2.0 × 1.5 × 0.20 = 0.60 N; m g = 0.06 × 10 = 0.60 N ✅.

### Example 4: Square Current Loop Near a Long Straight Wire
A long straight wire carries current **I₁ = 10 A**. A square loop of side **a = 10 cm** carrying current **I₂ = 5 A** lies in the same plane with its near side parallel to the wire at a distance **d = 5 cm** (current in near side is in the **same direction** as I₁). Find the net magnetic force on the square loop.

**Hal (Solution):**
- Top aur bottom sides (jo wire ke perpendicular hain) par equal aur opposite forces lagte hain ⟹ **cancel!**
- **Near side** (doori d₁ = 5 cm = 0.05 m, same direction ⟹ **attractive**):
  F₁ = (2 × 10⁻⁷ × 10 × 5 × 0.10) / 0.05 = (10⁻⁵) / 0.05 = **2.0 × 10⁻⁴ N** (wire ki taraf).
- **Far side** (doori d₂ = 5 + 10 = 15 cm = 0.15 m, opposite direction ⟹ **repulsive**):
  F₂ = (2 × 10⁻⁷ × 10 × 5 × 0.10) / 0.15 = (10⁻⁵) / 0.15 ≈ **0.67 × 10⁻⁴ N** (wire se door).
- **Net Force:** F_net = F₁ − F₂ = (2.0 − 0.67) × 10⁻⁴ = **1.33 × 10⁻⁴ N** (**towards the long wire**!).
- **Jaanch:** 10⁻⁵ × (1/0.05 − 1/0.15) = 10⁻⁵ × (20 − 6.67) = 1.333 × 10⁻⁴ N ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **Perpendicular coils ke magnetic fields ko seedha B₁ + B₂ jod dena:**
   - *Galat:* Example 2 mein B_net = 1.884 + 2.512 = 4.396 × 10⁻⁴ T likhna!
   - *Sahi:* Magnetic field **vector** hai! Jab do coils perpendicular hon, to unke fields 90° par hote hain ⟹ **B_net = √(B₁² + B₂²)**!
2. **Same Kinetic Energy aur Same Speed ko ek maan lena:**
   - *Galat:* Proton aur alpha particle ke liye r = mv/(qB) mein v constant maan kar r_p : r_α = 1 : 2 bol dena jab sawaal ne **same KE** diya ho!
   - *Sahi:* Same speed ⟹ r ∝ m/q (1:2); **Same KE ⟹ r ∝ √m/q (1:1)**; Same accelerating voltage V ⟹ K = qV ⟹ r ∝ √(m/q) (1:√2)!
3. **Current sensitivity badhane par voltage sensitivity ko bhi badha hua maan lena:**
   - *Galat:* Turns N double karne se current sensitivity aur voltage sensitivity dono double ho jaati hain.
   - *Sahi:* Turns N double karne par coil resistance R_g bhi double ho jaata hai ⟹ **I_s doubles, par V_s = I_s/R_g remains UNCHANGED**!

---

## Practice Questions (Mixed Chapter Challenge)

1. A proton and an alpha particle enter a uniform magnetic field perpendicularly with the **same speed v**. Find the ratio of (a) their circular radii r_p : r_α, and (b) their time periods T_p : T_α.
2. A straight wire of mass 40 g and length 2 m carries a current of 4 A. Find the minimum horizontal magnetic field B needed to balance its weight in air (g = 10 m/s²).
3. Two long parallel wires carry currents of 6 A and 6 A in **opposite directions**, separated by 12 cm. Find the net magnetic field at the midpoint between them.
4. A solenoid of length 40 cm has 200 turns and carries a current of 5 A. A small wire of length 2 cm carrying a current of 4 A is placed inside the solenoid perpendicular to its axis. Find the magnetic force on the small wire (take π = 3.14).
5. Two concentric circular coils of the same radius R = 5 cm (1 turn each) lie in perpendicular planes and carry currents 6 A and 8 A. Find the net magnetic field at their common centre (take π = 3.14).
6. An electron is accelerated through a potential difference V and then enters a uniform magnetic field B perpendicularly. Write the formula for the radius r of its circular path in terms of m, e, V, and B.
7. A galvanometer of resistance 25 Ω gives full-scale deflection for 10 mA. How will you convert it into (a) an ammeter of range 0 to 10 A, and (b) a voltmeter of range 0 to 50 V?
8. A particle of charge q and velocity 2 × 10⁶ m/s passes undeflected through crossed fields E and B where B = 0.25 T. Find the magnitude of E.
9. State whether True or False: Two parallel beams of electrons moving in the same direction attract each other magnetically, while repelling each other electrostatically.
10. A rectangular coil of 50 turns, area 40 cm², carries 2 A in a uniform magnetic field of 0.5 T. Calculate the maximum possible torque on the coil.

### Answers

1. (a) Same v: r = mv/(qB) ⟹ r ∝ m/q. Proton: m/e; Alpha: 4m/(2e) = 2m/e ⟹ **r_p : r_α = 1 : 2**.
   (b) T = 2πm/(qB) ⟹ T ∝ m/q ⟹ **T_p : T_α = 1 : 2**.
   Jaanch: 4/2 = 2 ⟹ dono ratios 1:2 ✅.

2. m = 0.04 kg, L = 2 m, I = 4 A:
   B = m g / (I L) = (0.04 × 10) / (4 × 2) = 0.4 / 8 = **0.05 T**.
   Jaanch: 4 × 2 × 0.05 = 0.4 N = mg ✅.

3. Midpoint r = 6 cm = 0.06 m from each wire. Opposite-direction currents ke fields midpoint par **same direction** mein jud jaate hain!
   B_1 = (2 × 10⁻⁷ × 6) / 0.06 = 2.0 × 10⁻⁵ T.
   B_net = 2 × B_1 = **4.0 × 10⁻⁵ T**.
   Jaanch: 2 × (12 × 10⁻⁷ / 0.06) = 4.0 × 10⁻⁵ T ✅.

4. Solenoid ke andar B: n = 200 / 0.40 = 500 m⁻¹.
   B = μ₀ n I = (4 × 3.14 × 10⁻⁷) × 500 × 5 = 3.14 × 10⁻³ T.
   Chhote wire (L = 0.02 m, I' = 4 A, θ = 90°) par force:
   F = I' L B = 4 × 0.02 × (3.14 × 10⁻³) = 0.08 × 3.14 × 10⁻³ ≈ **2.51 × 10⁻⁴ N**.
   Jaanch: 4 × 500 × 5 = 10⁴ ⟹ 3.14 mT; 0.08 × 3.14 = 0.2512 mN ✅.

5. R = 0.05 m:
   B₁ = (4 × 3.14 × 10⁻⁷ × 6) / (2 × 0.05) = 24 × 3.14 × 10⁻⁶ T.
   B₂ = (4 × 3.14 × 10⁻⁷ × 8) / (2 × 0.05) = 32 × 3.14 × 10⁻⁶ T.
   6-8-10 triangle! B_net = √(B₁² + B₂²) = 40 × 3.14 × 10⁻⁶ = **1.256 × 10⁻⁴ T**.
   Jaanch: √(24² + 32²) = 40; 40 × 3.14 = 125.6 ⟹ 1.256 × 10⁻⁴ T ✅.

6. KE = ½ m v² = e V ⟹ v = √(2 e V / m).
   r = m v / (e B) = **(1 / B) × √(2 m V / e)**.

7. I_g = 0.01 A, R_g = 25 Ω:
   (a) Ammeter (0–10 A): S = (0.01 × 25) / (10 − 0.01) = 0.25 / 9.99 ≈ **0.025 Ω** (in **parallel**).
   (b) Voltmeter (0–50 V): R = (50 / 0.01) − 25 = 5000 − 25 = **4975 Ω** (in **series**).
   Jaanch: 0.01 × (4975 + 25) = 50 V ✅.

8. E = v B = (2 × 10⁶) × 0.25 = **5.0 × 10⁵ V/m**.
   Jaanch: 5 × 10⁵ / 0.25 = 2 × 10⁶ m/s ✅.

9. **True ✅.** Same direction mein chalte electrons parallel currents banate hain (magnetic attraction!), par same negative charge hone ke karan electrostatic repulsion bhi lagta hai (aur normal speeds par electrostatic repulsion jeet jaata hai!).

10. A = 40 × 10⁻⁴ = 4.0 × 10⁻³ m². Max torque (sin 90° = 1):
    τ_max = N I A B = 50 × 2 × (4.0 × 10⁻³) × 0.5 = 100 × 2.0 × 10⁻³ = **0.20 N m**.
    Jaanch: 50 × 2 × 0.5 = 50; 50 × 0.004 = 0.20 N m ✅.

---

## Chapter Ka Saar: Moving Charges and Magnetism

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Lorentz Force & Motion in B | F→ = q(E→ + v→×B→); r = mv/(qB); T = 2πm/(qB) | Magnetic force does ZERO work; T is independent of v |
| Velocity Selector & Wire Force | v = E/B; F = I L B sin θ | Straight path when qE = qvB |
| Biot-Savart Law & Loop | dB = (μ₀/4π)(I dl sin θ)/r²; B_centre = μ₀NI/(2R) | B_axis = μ₀NIR²/[2(R²+x²)^(3/2)]; μ₀ = 4π × 10⁻⁷ T m/A |
| Ampere's Law Applications | Wire: μ₀I/(2πr); Solenoid/Toroid: μ₀ n I | Toroid B = 0 outside & in central hole |
| Parallel Wires & Loop Torque | F/L = μ₀I₁I₂/(2πd); τ = NIAB sin θ = mB sin θ | Same-dir currents ATTRACT; θ is with normal! |
| Moving Coil Galvanometer | φ = (NAB/k)I; Ammeter: shunt S ∥; Voltmeter: high R series | Ideal ammeter R = 0; ideal voltmeter R = ∞ |

---

Ab tum Moving Charges, Biot-Savart Law, Ampere's Law aur Galvanometer ke har tarah ke numericals aur concepts master kar chuke ho!

**Agle chapter mein:** Bina kisi current wire ke bhi natural magnets (bar magnet aur khud hamari **Prithvi**) magnetic field kaise banate hain — padhenge **Magnetism and Matter**!
