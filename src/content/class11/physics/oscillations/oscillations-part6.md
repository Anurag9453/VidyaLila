> **Class:** 11 | **Subject:** Physics | **Chapter 13:** Oscillations (Part 6)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Damped & Forced Oscillations](oscillations-part5.md) mein humne damping aur resonance padha. Ab chalo poore Oscillations chapter ke sabhi tools — periodic functions, Reference Circle, v/a/energy in SHM, spring cutting & combinations, simple pendulums, aur damping — ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Jwala ka Precision-Vibration Lab Desk

Jwala ek Precision-Vibration Lab Director hai. Uske lab mein har din ek saath kayi concepts judte hain — jaise ek spring ko kaat kar parallel mein lagana aur phir uski K/U energy split nikalna, ya Reference Circle se exact meeting time nikalna! Jwala ka **Decision Map** har SHM problem ko turant unlock kar deta hai.

---

## Decision Map: Kaun Sa Oscillation Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| a sin ωt + b cos ωt or sin²(ωt) | R = √(a²+b²); sin²(ωt) has period **π/ω** ([Topic 1](oscillations.md)) |
| Phase difference or time between positions | **Reference Circle:** 0->A/2 = **T/12**, A/2->A = **T/6**, 0->A/√2 = **T/8** ([Topic 2](oscillations-part2.md)) |
| Speed, acceleration, or K/U energy at position x | **v = ω√(A²-x²)**; **a = -ω²x**; **K = U at ±A/√2**; Energy freq = **2f** ([Topic 3](oscillations-part3.md)) |
| Springs (series/parallel/cut) or Pendulum (lift/planet) | **T = 2π√(m/k)** (k L = const); **T = 2π√(L/g_eff)** ([Topic 4](oscillations-part4.md)) |
| Exponential decay or resonance peak | **A(t) = A₀ e^(-bt/(2m))**; **E(t) = E₀ e^(-bt/m)**; **ω_d = ω₀** ([Topic 5](oscillations-part5.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Vertical Spring Drop + SHM Energy & Period

A 1 kg block is attached to a vertical spring of constant k = 100 N/m at its natural length and released from rest (g = 10 m/s²). Find: (a) the new equilibrium stretch x₀, (b) the amplitude A of the resulting SHM, (c) the time period T, (d) the maximum speed of the block!

**Solution:**
- (a) Equilibrium stretch: x₀ = m g / k = 10 / 100 = **0.10 m (10 cm)**.
- (b) Released from rest at natural length (10 cm above mean!) => Amplitude **A = x₀ = 0.10 m**! (So it oscillates between 0 cm and 20 cm stretch!)
- (c) ω = √(k / m) = √(100 / 1) = 10 rad/s => T = 2π / 10 = **π / 5 ≈ 0.628 s**.
- (d) v_max = ω A = 10 × 0.10 = **1.0 m/s** (at the mean position, 10 cm stretch!).

Jaanch:
- Jaanch: Energy check at x = 0.10 m: m g (0.1) - (1/2)(100)(0.01) = 1.0 - 0.5 = 0.5 J = (1/2)(1)(1²) ✅

---

### Problem 2: Spring Cut into 4 Pieces -> 2 Parallel + 2 Parallel in Series

A spring of constant k = 40 N/m is cut into 4 equal pieces. Each piece now has constant 4k = 160 N/m. Two pieces are connected in parallel, the other two in parallel, and those two pairs are joined in series! Find the final equivalent spring constant k_eq.

**Solution:**
- Each quarter-piece: k' = 4 × 40 = **160 N/m**.
- Each parallel pair: k_pair = 160 + 160 = **320 N/m**.
- Two 320 N/m pairs in series: k_eq = 320 / 2 = **160 N/m**!

Jaanch:
- Jaanch: 1/320 + 1/320 = 2/320 = 1/160 => 160 N/m ✅

---

### Problem 3: Block + Bullet Inelastic Collision Onto a Spring (SHM Amplitude!)

A 0.1 kg bullet moving horizontally at 100 m/s embeds into a stationary 0.9 kg wooden block attached to a horizontal spring (k = 100 N/m) on a smooth floor. Find the amplitude A and time period T of the resulting SHM!

**Solution:**
- **Stage 1 (Collision — Momentum ONLY):**
  0.1(100) = (0.1 + 0.9) v_max => **v_max = 10 m/s** (right at mean position!).
- **Stage 2 (SHM — Total Mass M = 1.0 kg):**
  - ω = √(k / M) = √(100 / 1) = **10 rad/s** => **T = 2π / 10 = π / 5 ≈ 0.628 s**.
  - v_max = ω A => A = 10 / 10 = **1.0 m**!

Jaanch:
- Jaanch: Post-hit KE = (1/2)(1)(100) = 50 J; Spring PE at A = 1 m = (1/2)(100)(1²) = 50 J ✅

---

### Problem 4: Two SHMs Starting Together — When Do They Meet Again?

Two particles start from x = 0 moving right with the same amplitude A, but periods T₁ = 3 s and T₂ = 6 s. After how many seconds will they next be in the **exact same phase** (passing x = 0 moving right together)?

**Solution:**
They return to x = 0 moving right together at the **LCM of T₁ and T₂** = LCM(3 s, 6 s) = **6 s**! (Particle 1 completes 2 full cycles while Particle 2 completes 1 full cycle.)

Jaanch:
- Jaanch: At t = 6 s: φ₁ = 4π ≡ 0, φ₂ = 2π ≡ 0 ✅

---

### Problem 5: Damped Pendulum Energy Drop After 3 Halving Intervals

A damped oscillator has initial mechanical energy E₀ = 64 J. If its amplitude drops to half every 5 seconds, what is its mechanical energy after 10 seconds?

**Solution:**
- After 10 s (2 halving intervals), amplitude drops to (1/2)² = **1 / 4** of A₀.
- Energy E ∝ A² => E drops to (1/4)² = **1 / 16** of E₀!
- E(10 s) = 64 / 16 = **4 J**!

Jaanch:
- Jaanch: At 5 s: A = A₀/2, E = 16 J; at 10 s: A = A₀/4, E = 4 J ✅

---

### Problem 6: Pendulum in an Accelerating Train Car

A simple pendulum of length 1 m hangs from the ceiling of a train accelerating horizontally at a = 10 m/s² (g = 10 m/s²). Find its time period of small oscillations (in terms of π).

**Solution:**
g_eff = √(g² + a²) = √(100 + 100) = **10 √2 m/s²**.
T = 2π √(L / g_eff) = **2π / (10 √2)^(1/2) ≈ 1.67 s** (faster than stationary 2π/√10 ≈ 1.99 s!).

Jaanch:
- Jaanch: Higher g_eff (14.14 > 10) gives shorter period (1.67 < 1.99 s) ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Bullet + spring block mein total mass M = m + M_block lena bhool jana
- **Galat:** ω = √(k / M_block) le liya, bullet ka mass bhool gaye!
- **Sahi:** Bullet block ke andar dhans chuki hai => oscillating mass **M_total = m_bullet + M_block**!

### Galti 2: Vertical spring drop mein natural length ko mean position maan lena
- **Galat:** Natural length par x = 0 hai toh wahi mean position hogi!
- **Sahi:** Gravity ke under naya mean position **x₀ = mg/k neeche** hota hai, isliye natural length se chhodne par amplitude **A = mg/k** aur max stretch **2 mg/k** hota hai!

### Galti 3: Horizontal accelerating car mein g_eff = g + a likh dena
- **Galat:** Lift ki tarah g_eff = g + a!
- **Sahi:** Lift mein a aur g **parallel** hote hain (g ± a); car mein horizontal a aur vertical g **90°** par hote hain => **g_eff = √(g² + a²)**!

---

## Mixed Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
Find the amplitude and time period of x(t) = 3 sin(4 t) + 4 cos(4 t) cm.

**Solution:**
A = √(9 + 16) = **5 cm**; T = 2π / 4 = **π / 2 ≈ 1.57 s**.

Jaanch:
- Jaanch: 3-4-5 triple ✅

---

### Question 2
An SHM particle has period 6 s. Find the shortest time taken to move from x = 0 to x = A / 2.

**Solution:**
t = T / 12 = 6 / 12 = **0.5 s**.

Jaanch:
- Jaanch: 0 to A/2 is always T/12 ✅

---

### Question 3
At what displacement x (in terms of A) is the kinetic energy of an SHM oscillator equal to 3 times its potential energy (K = 3 U)?

**Solution:**
K + U = 4 U = E => U = E / 4 => x² / A² = 1 / 4 => **x = ± A / 2**.

Jaanch:
- Jaanch: At x = A/2: U = 25%, K = 75% = 3 U ✅

---

### Question 4
A 4 kg block is attached to two parallel springs of constants 60 N/m and 40 N/m. Find its angular frequency ω.

**Solution:**
k_eq = 60 + 40 = 100 N/m; ω = √(100 / 4) = √25 = **5 rad/s**.

Jaanch:
- Jaanch: 100 / 4 = 25 => 5 rad/s ✅

---

### Question 5
A simple pendulum has period 2 s. If its length is increased by 21%, find its new time period!

**Solution:**
L' = 1.21 L => T' = T √(1.21) = 2 × 1.1 = **2.2 s** (10% increase!).

Jaanch:
- Jaanch: (1.1)² = 1.21 ✅

---

### Question 6
If an SHM has v_max = 15 m/s and a_max = 45 m/s², find its amplitude A.

**Solution:**
ω = 45 / 15 = 3 rad/s => A = 15 / 3 = **5 m**.

Jaanch:
- Jaanch: ω A = 15; ω² A = 45 ✅

---

### Question 7
A damped oscillator's amplitude falls to half in 8 s. How long does it take for its mechanical energy to fall to 1/4 of its initial value?

**Solution:**
When A = A₀ / 2, E = E₀ (1/2)² = E₀ / 4 => exact same **8 seconds**!

Jaanch:
- Jaanch: E ∝ A² => half amplitude = one-fourth energy ✅

---

### Question 8
A mass m oscillates on a spring with period T = 4 s. If the spring is cut into 4 equal pieces and the same mass is hung from ONE piece, find the new period.

**Solution:**
k' = 4 k => T' = T / √4 = 4 / 2 = **2 s**.

Jaanch:
- Jaanch: 4× stiffer => period halves ✅

---

### Question 9
Find the frequency of potential energy oscillation for a seconds pendulum (T = 2 s).

**Solution:**
Pendulum f = 1 / 2 = 0.5 Hz => PE frequency = 2 f = **1.0 Hz**.

Jaanch:
- Jaanch: PE reaches max twice in every 2-second cycle (every 1 second) ✅

---

### Question 10
A simple pendulum has period T inside a stationary lift. Find its period if the lift moves upward with **constant velocity** 5 m/s.

**Solution:**
Constant velocity => a = 0 => g_eff = g => **T remains UNCHANGED**!

Jaanch:
- Jaanch: Only acceleration changes g_eff, not constant velocity ✅

---

### Question 11
State whether the following statements are True or False:
(a) In SHM, total mechanical energy is proportional to the square of the amplitude.
(b) A spring–mass system's time period changes if taken to the Moon.

**Solution:**
- (a) **True** ✅ — E = (1/2) k A² ∝ A².
- (b) **False** ❌ — T = 2π √(m/k) is independent of g!

Jaanch:
- Jaanch: Verified from Topics 3 and 4 ✅

---

### Question 12
A 0.5 kg block in SHM has total energy 2 J and amplitude 0.2 m. Find the spring constant k and maximum speed v_max.

**Solution:**
- E = (1/2) k (0.04) = 2 => 0.02 k = 2 => **k = 100 N/m**.
- (1/2)(0.5) v_max² = 2 => v_max² = 8 => **v_max = 2 √2 ≈ 2.83 m/s**.

Jaanch:
- Jaanch: ω = √(100/0.5) = √200 = 10√2; ω A = 10√2(0.2) = 2√2 m/s ✅

---

## Chapter Wrap-up: Oscillations at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Periodic & Oscillatory](oscillations.md) | f = 1/T; ω = 2πf; a sin ωt + b cos ωt => R = √(a²+b²) | SHM ⊂ Oscillatory ⊂ Periodic; sin²(ωt) has period π/ω |
| [Topic 2: SHM & Reference Circle](oscillations-part2.md) | x = A sin(ωt + φ); 1 cycle dist = 4A | 0->A/2 = T/12; A/2->A = T/6; convert to same sin/cos for Δφ |
| [Topic 3: v, a & Energy in SHM](oscillations-part3.md) | v = ω√(A²-x²); a = -ω²x; E = (1/2)kA² | K = U at ±A/√2; K and U oscillate at frequency 2f! |
| [Topic 4: Springs & Pendulums](oscillations-part4.md) | T = 2π√(m/k); T = 2π√(L/g_eff); k L = const | Spring independent of g; opposite-wall springs = PARALLEL |
| [Topic 5: Damped & Resonance](oscillations-part5.md) | A = A₀ e^(-bt/(2m)); E = E₀ e^(-bt/m); ω_d = ω₀ | Energy decays 2× faster; lower b = sharper resonance peak |
| [Topic 6: Mixed & Wrap-up](oscillations-part6.md) | Vertical drop A = mg/k, bullet+spring, train g_eff | Decision Map se SHM equation + energy combine karo |

Tumne Oscillations ko SHM se lekar springs, pendulums aur resonance tak poori tarah master kar liya hai! Agar Reference-Circle phasor shortcuts, two-body reduced-mass springs (μ = m₁m₂/(m₁+m₂)), Compound Pendulums (I/(mgd)), U-tube liquid SHM, aur infinite-length pendulums (84.6 min) dekhna chahte ho, toh [Gehrai Mein — Advanced Level](oscillations-advanced.md) zaroor padho!

**Agle chapter mein:** Jab ek oscillation apne padosi particles tak energy pahunchata hua aage badhta hai, toh woh ban jata hai ek **Wave**! Class 11 Physics ke aakhiri chapter **Waves** mein hum progressive waves, sound speed, standing waves, organ pipes, beats, aur Doppler effect ka safar shuru karenge!
