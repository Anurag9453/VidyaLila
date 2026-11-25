> **Class:** 11 | **Subject:** Physics | **Chapter 13:** Oscillations (Part 3)

# Velocity, Acceleration, Force Law & Energy in SHM

> **Pichle topic se:** [SHM & Reference Circle](oscillations-part2.md) mein humne displacement x(t) = A sin(ωt + φ) dekha. Ab hum iska rate of change lekar **Velocity**, **Acceleration (a = -ω² x)**, **Force Law (F = -k x)**, aur **Energy (K + U = E)** nikalenge!

---

## Arundhati ka Seismograph & Accelerometer Lab

Arundhati ek seismograph analyst hai. Usne ek vibrating block par speed sensor aur accelerometer lagaya aur ek kamaal ka pattern dekha:
- **Mean position (x = 0)** par speed **MAXIMUM (v_max = ω A)** aur acceleration **ZERO** tha (100% Kinetic Energy)!
- **Extreme positions (x = ±A)** par speed **ZERO** aur acceleration **MAXIMUM (a_max = ω² A)** tha (100% Potential Energy)!
- Aur sabse interesting baat: jab block frequency **f** se dolta hai, toh uski Kinetic Energy aur Potential Energy **DOUBLE frequency (2f)** se oscillate karti hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Velocity in SHM | **v(t) = ω A cos(ωt + φ)**; position form: **v = ± ω √(A² - x²)** (**v_max = ω A** at x = 0; v = 0 at x = ±A) |
| Acceleration in SHM | **a(t) = - ω² A sin(ωt + φ) = - ω² x** (**a_max = ω² A** at x = ±A; a = 0 at x = 0; always directed toward mean!) |
| SHM Force Law | **F = m a = - m ω² x = - k x**, jahan **k = m ω² => ω = √(k / m)** |
| Energy in SHM | **U = (1/2) k x²**; **K = (1/2) k (A² - x²)**; **E_total = K + U = (1/2) k A² = (1/2) m ω² A²** (constant!) |

---

## 1. Phase Relationships Among x, v, and a

Let x(t) = A sin(ωt):
- **Velocity:** v(t) = dx/dt = ω A cos(ωt) = ω A sin(ωt + **π/2**) -> **v leads x by π/2 (90°)**!
- **Acceleration:** a(t) = dv/dt = -ω² A sin(ωt) = ω² A sin(ωt + **π**) -> **a leads x by π (180° — exact opposite!)**!
- **v vs x Graph:** Since v² / (ωA)² + x² / A² = 1, the v–x graph is an **Ellipse**!
- **a vs x Graph:** Since a = -ω² x, the a–x graph is a **Straight Line through the origin with negative slope (-ω²)**!

---

## 2. Energy in SHM (Why K & U Oscillate at 2f!)

- **Potential Energy:** U = (1/2) k x² = (1/2) k A² sin²(ωt)
- **Kinetic Energy:** K = (1/2) m v² = (1/2) k A² cos²(ωt) = (1/2) k (A² - x²)
- **Total Energy:** **E = K + U = (1/2) k A² (sin² + cos²) = (1/2) k A² = constant!**
- **Where is K = U?**
  (1/2) k x² = (1/2) E = (1/4) k A²  =>  x² = A² / 2  =>  **x = ± A / √2 ≈ ±0.707 A**!
- **Frequency of K and U:** Kyunki sin²(ωt) = (1 - cos 2ωt)/2 (Topic 1 Ex 4!), **K aur U dono frequency 2 f (period T / 2)** se oscillate karte hain!

---

## Solved Examples

### Example 1: Finding v_max, a_max, and Speed at Half Amplitude

A particle executes SHM with amplitude A = 10 cm (0.10 m) and angular frequency ω = 4 rad/s. Find: (a) maximum velocity, (b) maximum acceleration, (c) speed and acceleration magnitude at x = 6 cm.

**Solution:**
- (a) v_max = ω A = 4 × 10 = **40 cm/s (0.40 m/s)**.
- (b) a_max = ω² A = 16 × 10 = **160 cm/s² (1.60 m/s²)**.
- (c) At x = 6 cm:
  - v = ω √(A² - x²) = 4 √(10² - 6²) = 4 √64 = 4 × 8 = **32 cm/s**.
  - |a| = ω² |x| = 16 × 6 = **96 cm/s²**.

Jaanch:
- Jaanch: 6-8-10 Pythagorean triple gives √(100 - 36) = 8 ✅

---

### Example 2: Finding ω and A from Two Velocities (v₁ at x₁, v₂ at x₂)

An SHM particle has speed v₁ = 8 cm/s at x₁ = 3 cm and speed v₂ = 6 cm/s at x₂ = 4 cm. Find its angular frequency ω and amplitude A!

**Solution:**
v₁² = ω² (A² - x₁²) => 64 = ω² (A² - 9)
v₂² = ω² (A² - x₂²) => 36 = ω² (A² - 16)
Subtracting the two equations:
64 - 36 = ω² (16 - 9) => 28 = 7 ω² => ω² = 4 => **ω = 2 rad/s**!
Substitute ω² = 4 into first equation: 64 = 4 (A² - 9) => 16 = A² - 9 => A² = 25 => **A = 5 cm**!

Jaanch:
- Jaanch: At x = 3: 2√(25-9) = 8 cm/s; at x = 4: 2√(25-16) = 6 cm/s ✅

---

### Example 3: Kinetic & Potential Energy Split at x = A / 2

A 0.5 kg block executes SHM with amplitude A = 0.2 m and force constant k = 200 N/m. Find: (a) total mechanical energy E, (b) K and U at x = A / 2 (0.1 m).

**Solution:**
- (a) E = (1/2) k A² = (1/2)(200)(0.04) = **4.0 J**.
- (b) At x = A / 2:
  - U = (1/2) k (A/2)² = E / 4 = **1.0 J (25%)**.
  - K = E - U = (3/4) E = **3.0 J (75%)**.

Jaanch:
- Jaanch: At x = A/2, U = 25% and K = 75% (sum = 4.0 J = E) ✅

---

### Example 4: Finding Time Period from v_max and a_max

For a particle in SHM, v_max = 20 cm/s and a_max = 100 cm/s². Find its angular frequency ω, amplitude A, and time period T.

**Solution:**
- a_max / v_max = (ω² A) / (ω A) = **ω** = 100 / 20 = **5 rad/s**!
- A = v_max / ω = 20 / 5 = **4 cm**.
- T = 2π / 5 ≈ **1.26 s**.

Jaanch:
- Jaanch: ω A = 5(4) = 20; ω² A = 25(4) = 100 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: K = U ki position ko x = A / 2 bol dena!
- **Galat:** Aadhe amplitude (A/2) par K aur U equal honge!
- **Sahi:** Energy x² ke proportional hai => x = A/2 par U = E/4 aur K = 3E/4! **K = U** hota hai **x = ± A / √2 ≈ ±0.707 A** par!

### Galti 2: K aur U ki oscillation frequency ko f (SHM frequency) bol dena!
- **Galat:** Block 5 Hz se dol raha hai toh KE bhi 5 Hz se badlegi!
- **Sahi:** 1 full cycle mein block **2 baar** mean par (max K) aur **2 baar** extremes par (0 K) jata hai => K aur U ki frequency **2 f = 10 Hz** hoti hai!

### Galti 3: Mean position par acceleration maximum maan lena
- **Galat:** Mean par sabse tez chal raha hai toh acceleration bhi maximum hoga!
- **Sahi:** Mean par **v = v_max**, par **a = -ω²(0) = 0**! Extreme par **v = 0** aur **a = a_max**!

---

## Quick Recap

- **Velocity:** v = ω √(A² - x²), v_max = ω A (at mean); leads x by π/2.
- **Acceleration:** a = -ω² x, a_max = ω² A (at extremes); opposite to x (leads by π).
- **Energy:** U = (1/2)kx², K = (1/2)k(A² - x²), **E = (1/2)kA²**; K = U at **x = ±A/√2**; frequency of K & U = **2f**!

---

## Practice Questions

### Question 1
A particle in SHM has amplitude 5 cm and angular frequency 6 rad/s. Find its maximum velocity and maximum acceleration.

**Solution:**
- v_max = 6 × 5 = **30 cm/s (0.30 m/s)**.
- a_max = 36 × 5 = **180 cm/s² (1.80 m/s²)**.

Jaanch:
- Jaanch: a_max / v_max = 180 / 30 = 6 = ω ✅

---

### Question 2
In SHM, at what displacement x (in terms of A) is the speed equal to half of its maximum speed (v = v_max / 2)?

**Solution:**
ω √(A² - x²) = (1/2) ω A => A² - x² = A² / 4 => x² = (3/4) A² => **x = ± (√3 / 2) A ≈ ±0.866 A**.

Jaanch:
- Jaanch: At x = (√3/2)A: √(1 - 3/4) = √(1/4) = 1/2 ✅

---

### Question 3
If a particle executes SHM with frequency 4 Hz, what is the frequency with which its kinetic energy oscillates?

**Solution:**
f_KE = 2 f = 2 × 4 = **8 Hz**.

Jaanch:
- Jaanch: K hits max twice per cycle => 2f = 8 Hz ✅

---

### Question 4
A 2 kg mass executes SHM with A = 0.1 m and ω = 10 rad/s. Find its total mechanical energy E.

**Solution:**
E = (1/2) m ω² A² = (1/2)(2)(100)(0.01) = **1.0 J**.

Jaanch:
- Jaanch: v_max = 1 m/s => K_max = (1/2)(2)(1²) = 1.0 J ✅

---

### Question 5
At what displacement x (in terms of A) is the potential energy of an SHM oscillator equal to 1/9th of its total energy?

**Solution:**
U / E = x² / A² = 1 / 9 => **x = ± A / 3**.

Jaanch:
- Jaanch: (1/3)² = 1/9 ✅

---

### Question 6
If the amplitude of an SHM is doubled while keeping frequency constant, by what factor does its total mechanical energy increase?

**Solution:**
E = (1/2) m ω² A² ∝ A² => 2² = **4 times**.

Jaanch:
- Jaanch: Doubling A quadruples E ✅

---

### Question 7
The acceleration of an SHM particle is a = -16 x (in SI units). Find its time period T.

**Solution:**
Compare with a = -ω² x => ω² = 16 => ω = 4 rad/s.
T = 2π / 4 = **π / 2 ≈ 1.57 s**.

Jaanch:
- Jaanch: (2π / (π/2))² = 4² = 16 ✅

---

### Question 8
What is the **average kinetic energy** and **average potential energy** of an SHM oscillator over one complete cycle (in terms of total energy E)?

**Solution:**
Average of sin²(ωt) over one full cycle = 1/2, and average of cos²(ωt) = 1/2!
So **K_avg = E / 2** and **U_avg = E / 2** (exact 50–50 split over a cycle!).

Jaanch:
- Jaanch: K_avg + U_avg = E/2 + E/2 = E ✅

---

### Question 9
An SHM particle has v_max = 12 m/s and a_max = 24 m/s². Find its amplitude A and period T.

**Solution:**
ω = a_max / v_max = 24 / 12 = 2 rad/s.
A = v_max / ω = 12 / 2 = **6 m**; T = 2π / 2 = **π ≈ 3.14 s**.

Jaanch:
- Jaanch: 2 × 6 = 12; 4 × 6 = 24 ✅

---

### Question 10
A particle in SHM has speed 12 cm/s at x = 0 and speed 0 at x = 3 cm. Find its acceleration at x = 2 cm.

**Solution:**
v = 0 at extreme => A = 3 cm; v_max = 12 cm/s => ω = 12 / 3 = 4 rad/s.
At x = 2 cm: a = -ω² x = -16 × 2 = **-32 cm/s²** (magnitude 32 cm/s² toward mean).

Jaanch:
- Jaanch: |a| = (16)(2) = 32 cm/s² < a_max (48 cm/s²) ✅

---

### Question 11
State whether the following statements are True or False:
(a) In SHM, velocity and acceleration are always in the same direction.
(b) The graph of velocity v versus displacement x in SHM is an ellipse.

**Solution:**
- (a) **False** ❌ — Going away from mean, v is outward and a is inward (opposite); coming toward mean, both are inward (same)!
- (b) **True** ✅ — v²/(ωA)² + x²/A² = 1 is the exact equation of an ellipse.

Jaanch:
- Jaanch: Verified from Section 1 ✅

---

### Question 12
A 0.2 kg mass in SHM has force constant k = 80 N/m and total energy E = 0.4 J. Find its amplitude A and maximum speed v_max.

**Solution:**
- E = (1/2)(80) A² = 0.4 => 40 A² = 0.4 => A² = 0.01 => **A = 0.1 m (10 cm)**.
- ω = √(80 / 0.2) = √400 = 20 rad/s => **v_max = 20 × 0.1 = 2.0 m/s**.

Jaanch:
- Jaanch: (1/2)(0.2)(2²) = 0.4 J = E ✅

---

Velocity, acceleration aur SHM energy ab tumhari pocket mein hain!

**Agle topic mein:** Do sabse famous real SHM systems — **Spring–Mass System** (series/parallel/cutting) aur **Simple Pendulum** — chalo padhte hain [Spring–Mass System & Simple Pendulum](oscillations-part4.md)!
