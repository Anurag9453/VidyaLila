> **Class:** 11 | **Subject:** Physics | **Chapter 13:** Oscillations (Part 2)

# Simple Harmonic Motion & Its Link to Uniform Circular Motion

> **Pichle topic se:** [Periodic & Oscillatory Motion](oscillations.md) mein humne SHM ko identify karna seekha. Ab hum dekhenge ki **SHM asal mein Uniform Circular Motion ki seedhi shadow (projection)** hai — aur yahi Reference Circle trick phase, initial epoch, aur SHM equations ko super intuitive bana deti hai!

---

## Vaijayanti ka Ferris-Wheel Shadow Demo

Vaijayanti ek physics demonstrator hai. Usne ek rotating turntable ke kinare (radius **A**) par ek chhoti peg lagayi jo constant angular speed **ω** se ghoom rahi thi, aur saamne se parallel torchlight maari!

Peeche ki deewar par peg ki **parchhayi (shadow)** seedhi line par -A se +A ke beech aage-peeche dolne lagi — exact **x(t) = A cos(ωt + φ)**! Yani **SHM is simply the projection of Uniform Circular Motion onto any diameter of the circle!**

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Simple Harmonic Motion (SHM) | Aisa oscillatory motion jahan displacement time ka single sine/cosine function ho: **x(t) = A cos(ωt + φ)** ya **A sin(ωt + φ)** |
| Amplitude (A) | Mean position (x = 0) se maximum displacement (+A ya -A) |
| Phase (ωt + φ) | Time t par oscillation ki exact state (position + direction of motion dono batata hai!) |
| Initial Phase / Epoch (φ) | Time t = 0 par particle ka starting angle (radians mein) |
| Phase Difference (Δφ) | Do SHMs ke phases ka antar: **Δφ = 0** (in phase), **Δφ = π** (exact opposite phase), **Δφ = π/2** (quarter cycle ahead/behind) |

---

## 1. The Reference Circle (UCM Projection = SHM!)

Radius **A** ke circle par agar particle constant angular velocity **ω** se ghoome (starting at angle φ at t = 0):
- **x-projection (horizontal diameter):** **x(t) = A cos(ωt + φ)**
- **y-projection (vertical diameter):** **y(t) = A sin(ωt + φ)**

### Quick Initial Phase (φ) Lookup for x(t) = A sin(ωt + φ):
- Starts at **mean position (x = 0)** going toward **+A**: **φ = 0** => x = A sin(ωt)
- Starts at **positive extreme (+A)**: **φ = π/2** => x = A cos(ωt)
- Starts at **mean position (x = 0)** going toward **-A**: **φ = π** => x = -A sin(ωt)
- Starts at **negative extreme (-A)**: **φ = 3π/2 (or -π/2)** => x = -A cos(ωt)

---

## Solved Examples

### Example 1: Decoding an SHM Equation

A particle executes SHM described by x(t) = 5 cos(2 π t + π / 4), where x is in cm and t is in seconds. Find: (a) Amplitude, (b) Angular frequency ω, (c) Time period T and frequency f, (d) Initial phase φ, (e) Displacement at t = 1.5 s.

**Solution:**
Comparing with x(t) = A cos(ω t + φ):
- (a) Amplitude **A = 5 cm**.
- (b) **ω = 2 π rad/s**.
- (c) T = 2π / (2π) = **1.0 s**; f = 1 / 1.0 = **1.0 Hz**.
- (d) Initial phase **φ = π / 4 rad (45°)**.
- (e) At t = 1.5 s: x(1.5) = 5 cos(3π + π/4) = 5 (-cos π/4) = **-5 / √2 ≈ -3.54 cm**.

Jaanch:
- Jaanch: 3π + π/4 lies in 3rd quadrant where cos is negative (-1/√2) ✅

---

### Example 2: Writing the SHM Equation from Initial Conditions

A particle executes SHM of amplitude 4 cm and time period 2 s. At t = 0, it is at x = +2 cm moving toward the positive extreme (+4 cm). Write its displacement equation in the form x(t) = A sin(ωt + φ).

**Solution:**
- A = 4 cm; ω = 2π / 2 = **π rad/s**.
- At t = 0: x(0) = 4 sin φ = +2 => sin φ = 1/2.
- Since it is moving toward +A (cos φ > 0, 1st quadrant): **φ = π / 6 rad (30°)**.
- Equation: **x(t) = 4 sin(π t + π / 6) cm**.

Jaanch:
- Jaanch: At t = 0: 4 sin(π/6) = +2 cm, and v(0) = 4π cos(π/6) > 0 (moving toward +A!) ✅

---

### Example 3: Phase Difference Between Two SHMs

Two particles execute SHM with equations x₁ = 5 sin(10 t + π / 3) and x₂ = 5 cos(10 t). Find the phase difference between them and state which one leads!

**Solution:**
Convert both to **sin**:
x₂ = 5 cos(10 t) = 5 sin(10 t + π / 2).
- Phase of 1: 10 t + π/3 (60°).
- Phase of 2: 10 t + π/2 (90°).
- Phase difference Δφ = π/2 - π/3 = **π / 6 rad (30°)**, with **Particle 2 leading Particle 1 by π/6**!

Jaanch:
- Jaanch: Always convert both to the SAME trig function (both sin or both cos) before subtracting phases! ✅

---

### Example 4: Time to Go from Mean Position (0) to Half Amplitude (A/2)

Using the Reference Circle, find the shortest time taken by an SHM particle (period T) to move from the mean position (x = 0) to half its amplitude (x = A/2).

**Solution:**
x = A sin(ω t) = A / 2 => sin(ω t) = 1 / 2 => ω t = **π / 6**!
Since ω = 2π / T: (2π / T) t = π / 6 => **t = T / 12**!
*(Notice: NOT T/8! Because the particle moves fastest near the mean position, so the first half of A takes only **T/12**, while the second half from A/2 to A takes **T/6** — TWICE as long!)*

Jaanch:
- Jaanch: T/12 + T/6 = T/4 (exact quarter period from 0 to A!) ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: 0 se A/2 jane ka time T / 8 bol dena!
- **Galat:** 0 se A jane mein T/4 lagta hai, toh aadhe raste (A/2) mein T/8 lagega!
- **Sahi:** SHM mein speed constant nahi hoti! Mean ke paas tez chalta hai => 0 -> A/2 takes **T / 12**, aur A/2 -> A takes **T / 6**!

### Galti 2: sin aur cos ka phase difference bina convert kiye seedha subtract kar dena
- **Galat:** sin(ωt + π/3) aur cos(ωt) ka phase difference π/3!
- **Sahi:** Pehle cos(ωt) = sin(ωt + π/2) banao, phir subtract karo: π/2 - π/3 = **π / 6**!

### Galti 3: Ek poora oscillation (T) mein total distance 2 A bol dena
- **Galat:** +A se -A tak doori 2A hai toh 1 cycle mein 2A chala!
- **Sahi:** 0 -> +A -> 0 -> -A -> 0 = **4 A**! Ek poora oscillation mein distance **4 A** (aur displacement 0) hota hai!

---

## Quick Recap

- **SHM Equation:** x(t) = A cos(ωt + φ) or A sin(ωt + φ) (projection of UCM on a diameter).
- **1 Full Cycle (T):** Total distance = **4 A**, net displacement = **0**.
- **Golden Time Splits:** 0 -> A/2 = **T / 12**; A/2 -> A = **T / 6**; 0 -> A/√2 = **T / 8**; 0 -> A = **T / 4**.

---

## Practice Questions

### Question 1
An SHM is given by x(t) = 10 sin(4 π t + π / 6) cm. Find its amplitude, frequency, time period, and initial phase.

**Solution:**
- A = **10 cm**, ω = 4π rad/s => f = **2 Hz**, T = **0.5 s**, φ = **π / 6 rad (30°)**.

Jaanch:
- Jaanch: 2π f = 4π => f = 2 Hz, T = 0.5 s ✅

---

### Question 2
In Question 1, find the total distance travelled by the particle in 2.0 seconds.

**Solution:**
Number of full cycles = 2.0 / 0.5 = 4 cycles.
Distance = 4 × (4 A) = 16 × 10 = **160 cm (1.6 m)**.

Jaanch:
- Jaanch: 40 cm per cycle × 4 cycles = 160 cm ✅

---

### Question 3
Find the phase difference between x₁ = A sin(ωt + π/6) and x₂ = A cos(ωt + π/6).

**Solution:**
cos(ωt + π/6) = sin(ωt + π/6 + π/2) => Phase difference = **π / 2 rad (90°)**.

Jaanch:
- Jaanch: sin and cos of the same angle always differ by π/2 ✅

---

### Question 4
Find the shortest time taken by an SHM particle (period T = 12 s) to move from x = A/2 to x = A.

**Solution:**
t = T / 6 = 12 / 6 = **2 s**.

Jaanch:
- Jaanch: From π/6 to π/2 is angle π/3 = (1/6) of 2π => 12/6 = 2 s ✅

---

### Question 5
Find the shortest time taken by an SHM particle (period T = 8 s) to move from x = 0 to x = A / √2.

**Solution:**
sin(ωt) = 1/√2 => ωt = π/4 => t = (π/4) / (2π/T) = T / 8 = 8 / 8 = **1 s**.

Jaanch:
- Jaanch: 45° is 1/8th of a full 360° reference circle => 1 s ✅

---

### Question 6
Write the equation of SHM of amplitude 6 cm and period 4 s if the particle starts from the positive extreme (+6 cm) at t = 0.

**Solution:**
ω = 2π / 4 = π/2 rad/s. Starting at +A uses cos:
**x(t) = 6 cos(π t / 2) cm**.

Jaanch:
- Jaanch: At t = 0: x(0) = 6 cos 0 = +6 cm ✅

---

### Question 7
Find the displacement at t = 0.25 s for x(t) = 8 sin(2 π t) cm.

**Solution:**
x(0.25) = 8 sin(π / 2) = 8 × 1 = **+8 cm** (positive extreme!).

Jaanch:
- Jaanch: T = 1 s => 0.25 s = T/4 => reaches +A ✅

---

### Question 8
Two identical pendulums oscillate with the same period T, but Pendulum 1 passes the mean position going right at the exact instant Pendulum 2 passes the mean position going left. What is the phase difference between them?

**Solution:**
Opposite directions at the same position => **Δφ = π rad (180°)**!

Jaanch:
- Jaanch: sin(ωt + π) = -sin(ωt) ✅

---

### Question 9
What is the shortest time taken by an SHM particle (period T) to go from x = -A/2 to x = +A/2?

**Solution:**
From -A/2 to 0 takes T/12, and from 0 to +A/2 takes T/12 => total = T/12 + T/12 = **T / 6**!

Jaanch:
- Jaanch: Reference circle angle from -30° to +30° is 60° = (1/6) of 360° => T/6 ✅

---

### Question 10
A particle moves on a circle of radius 10 cm with constant angular speed 5 rad/s. What is the amplitude and time period of its projection along the x-axis?

**Solution:**
- Amplitude A = radius = **10 cm**.
- Period T = 2π / 5 ≈ **1.26 s**.

Jaanch:
- Jaanch: Projection of UCM is exact SHM with A = R and same ω ✅

---

### Question 11
State whether the following statements are True or False:
(a) In SHM, the time taken to go from 0 to A/2 is equal to the time taken to go from A/2 to A.
(b) A phase difference of 2π corresponds to a time difference of one full time period T.

**Solution:**
- (a) **False** ❌ — 0 to A/2 takes T/12; A/2 to A takes T/6 (twice as long!).
- (b) **True** ✅ — Δt = (Δφ / 2π) T => for Δφ = 2π, Δt = T.

Jaanch:
- Jaanch: Verified from Reference Circle ✅

---

### Question 12
Two SHMs have the same frequency 2 Hz and a constant time lag of 0.125 s between them. Find their phase difference in radians.

**Solution:**
T = 1/2 = 0.5 s.
Δφ = (2π / T) Δt = (2π / 0.5) × 0.125 = 4π × (1/8) = **π / 2 rad (90°)**.

Jaanch:
- Jaanch: 0.125 s is 1/4th of T = 0.5 s => 1/4th of 2π = π/2 ✅

---

Reference Circle aur SHM equation ab tumhare liye ekdam aasaan ho gaye hain!

**Agle topic mein:** SHM mein velocity, acceleration, force law F = -kx, aur **Kinetic + Potential Energy** ka poora dance dekhenge — [Velocity, Acceleration, Force Law & Energy in SHM](oscillations-part3.md)!
