> **Class:** 11 | **Subject:** Physics | **Chapter 13:** Oscillations (Part 4)

# Systems Executing SHM: Spring–Mass & Simple Pendulum

> **Pichle topic se:** [Velocity, Acceleration & Energy in SHM](oscillations-part3.md) mein humne dekha ki jab bhi restoring force F = -k x (ya a = -ω² x) ho, motion SHM hota hai with T = 2π / ω! Ab hum is rule ko do sabse famous physical systems par lagayenge — **Spring–Mass Systems** aur **Simple Pendulums**!

---

## Bhuvaneshwari ka Watchmaking & Suspension-Spring Lab

Bhuvaneshwari ek mechanical-watch aur car-suspension engineer hai. Usne do aise facts dikhaye jo aksar logon ko chaunka dete hain:
1. Agar ek spring-mass oscillator ko Earth se **Moon** (jahan gravity 1/6th hai) ya **Space Station** (g = 0) par le jao, toh uska time period T = 2π √(m/k) **BILKUL NAHI BADALTA** — kyunki gravity sirf spring ki equilibrium position shift karti hai, time period nahi!
2. Par agar ek **Simple Pendulum** ko Moon par le jao, toh uska time period T = 2π √(L/g) **√6 guna badh jata hai** (ghadi bahut slow ho jati hai!), aur space station (g = 0) mein pendulum bilkul oscillate hi nahi karta (T = ∞)!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Spring–Mass Period | **T = 2 π √(m / k)** (gravity g aur amplitude A dono se independent!) |
| Springs in Series | End-to-end: **1 / k_eq = 1 / k₁ + 1 / k₂** (k_eq chhota => T badhta hai!) |
| Springs in Parallel | Side-by-side (ya mass dono springs ke beech!): **k_eq = k₁ + k₂** (k_eq bada => T ghatta hai!) |
| Cutting a Spring | Spring constant length ke inversely proportional hota hai: **k L = constant** (aadha kaatne par **k_new = 2 k**!) |
| Simple Pendulum | Small angles (θ < 10°, sin θ ≈ θ) ke liye SHM: **T = 2 π √(L / g)** (mass m se independent!) |
| Seconds Pendulum | Aisa simple pendulum jiska time period exact **T = 2 seconds** ho (Earth par length **L ≈ 0.993 m ≈ 1 m**!) |

---

## 1. Spring–Mass Combinations & Spring Cutting

- **Single Spring (Horizontal OR Vertical):** **T = 2 π √(m / k)**.
  *(Vertical spring mein weight mg sirf static extension x₀ = mg/k banata hai; naye mean ke about restoring force abhi bhi -k x hi rehta hai!)*
- **Series:** k_eq = k₁ k₂ / (k₁ + k₂)
- **Parallel** (note: agar block do diwaron ke beech do springs k₁ aur k₂ se juda ho, toh ek dabti hai aur doosri khinchti hai — dono same direction mein push/pull karti hain => **yeh bhi PARALLEL hai: k_eq = k₁ + k₂!**)
- **Cutting a Spring into n Equal Parts:** Har tukde ka length L/n => har tukde ka constant **k' = n k**!

---

## 2. Simple Pendulum (Small-Angle SHM Derivation)

Length **L** ke pendulum bob (mass m) ko chhote angle **θ** par chhodne par tangential restoring force:
F_t = - m g sin θ ≈ - m g θ = - (m g / L) x  (since x = L θ for small θ!).
Compare with F = -k_eff x => k_eff = m g / L => **ω = √(g / L)**:
```
  T = 2 π √( L / g )      (Independent of bob mass m & small amplitude!)
```
*(In an accelerating lift: replace **g** with **g_eff = g + a** upward, **g - a** downward!)*

---

## Solved Examples

### Example 1: Cutting a Spring in Half & Putting Halves in Parallel!

A mass m hanging from a spring of constant k oscillates with time period T = 2.0 s. The spring is cut into 2 equal halves, and the SAME mass m is hung from both halves connected in **parallel**. Find the new time period T'!

**Solution:**
- Cutting into 2 equal halves doubles each half's constant: **k_half = 2 k**.
- Connecting both halves in parallel adds them: **k_eq = 2 k + 2 k = 4 k**!
- Since T ∝ 1 / √k => T' = T / √4 = 2.0 / 2 = **1.0 s**!

Jaanch:
- Jaanch: 4× stiffer spring => 2× faster oscillation (T halves from 2 s to 1 s) ✅

---

### Example 2: Mass Between Two Opposite Springs (Parallel Trap!)

A 2 kg block lies on a smooth floor connected on its left to a spring k₁ = 120 N/m and on its right to a spring k₂ = 80 N/m (both fixed to rigid walls). Find the angular frequency ω and time period T of the block.

**Solution:**
When displaced right by x, left spring pulls left (-k₁ x) AND right spring pushes left (-k₂ x) => **Parallel combination!**
- k_eq = 120 + 80 = **200 N/m**.
- ω = √(k_eq / m) = √(200 / 2) = √100 = **10 rad/s**.
- T = 2π / 10 = **π / 5 ≈ 0.628 s**.

Jaanch:
- Jaanch: Both springs restore in the same direction => k_eq = k₁ + k₂ = 200 N/m ✅

---

### Example 3: Simple Pendulum Inside an Accelerating Lift

A simple pendulum has a time period T = 2.0 s inside a stationary lift (g = 10 m/s²). Find its new time period if the lift accelerates: (a) upward at 6 m/s², (b) downward at 3.6 m/s².

**Solution:**
T ∝ 1 / √g_eff:
- (a) Upward: g_eff = 10 + 6 = 16 m/s² => T' = 2.0 × √(10 / 16) = (2√10) / 4 = **√10 / 2 ≈ 1.58 s** (faster!).
- (b) Downward: g_eff = 10 - 3.6 = 6.4 m/s² => T' = 2.0 × √(10 / 6.4) = 2.0 × √(100 / 64) = 2.0 × (10 / 8) = **2.5 s** (slower!).

Jaanch:
- Jaanch: Stronger g_eff (upward lift) swings faster (1.58 s < 2 s); weaker g_eff swings slower (2.5 s > 2 s) ✅

---

### Example 4: Percentage Change in Pendulum Period for Small Length Change

If the length of a simple pendulum is increased by 4%, find the approximate percentage change in its time period T.

**Solution:**
T = 2π √(L / g) ∝ L^(1/2) => %T = (1/2)(%L) = (1/2)(4%) = **+2% increase**!

Jaanch:
- Jaanch: Exact √1.04 - 1 = 1.0198 - 1 ≈ +2.0% ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Do walls ke beech mass se jude do springs ko SERIES samajh lena!
- **Galat:** Ek left aur ek right hai toh 1/k_eq = 1/k₁ + 1/k₂!
- **Sahi:** Dono springs same mass ko ek hi direction mein restore karti hain => yeh **PARALLEL (k_eq = k₁ + k₂)** hai!

### Galti 2: Vertical spring ka time period gravity g par depend maanna
- **Galat:** Moon par spring ka time period badh jayega!
- **Sahi:** T = 2π √(m / k) mein **g aata hi nahi** — spring-mass period Moon aur Earth dono par bilkul **SAME** rehta hai!

### Galti 3: Spring ko aadha kaatne par k ko aadha (k/2) maan lena
- **Galat:** Aadhi spring toh k/2!
- **Sahi:** Chhoti spring ko utna hi khinchna **2 guna mushkil** hota hai => **k L = constant => aadhi spring ka k = 2 k**!

---

## Quick Recap

- **Spring–Mass:** T = 2π √(m/k) (independent of g!). Series: 1/k₁ + 1/k₂; Parallel (incl. opposite walls): k₁ + k₂; Cut into n equal pieces: **k' = n k**.
- **Simple Pendulum:** T = 2π √(L/g_eff) (small θ, independent of mass m; Seconds pendulum T = 2 s, L ≈ 1 m).

---

## Practice Questions

*(Take g = 10 m/s², π² ≈ 10 unless stated otherwise.)*

### Question 1
A 0.5 kg block attached to a spring of constant k = 50 N/m oscillates on a smooth floor. Find its angular frequency ω and time period T.

**Solution:**
ω = √(50 / 0.5) = √100 = **10 rad/s**; T = 2π / 10 = **π / 5 ≈ 0.628 s**.

Jaanch:
- Jaanch: 50 / 0.5 = 100 => √100 = 10 rad/s ✅

---

### Question 2
Two springs of constants 200 N/m and 600 N/m are connected in series to a 1.5 kg mass. Find the equivalent spring constant and time period (in terms of π).

**Solution:**
k_eq = (200 × 600) / (200 + 600) = 120,000 / 800 = **150 N/m**.
T = 2π √(1.5 / 150) = 2π √(1/100) = **2π / 10 = π / 5 s**.

Jaanch:
- Jaanch: 1.5 / 150 = 0.01 => √0.01 = 0.1 => 0.2π s ✅

---

### Question 3
A spring of constant k is cut into 3 equal parts. What is the spring constant of each part?

**Solution:**
k' = 3 k.

Jaanch:
- Jaanch: k L = constant => L/3 gives 3 k ✅

---

### Question 4
Find the length of a seconds pendulum (T = 2 s) on Earth (taking g = π² m/s² ≈ 9.87 m/s²).

**Solution:**
2 = 2π √(L / π²) = 2 √L => √L = 1 => **L = 1.0 m**.

Jaanch:
- Jaanch: With g = 9.8 m/s², L = 9.8 / π² ≈ 0.993 m ≈ 1 m ✅

---

### Question 5
A simple pendulum of length L has period 3 s on Earth. What would be its period on a planet where gravity is 1/9th of Earth's gravity?

**Solution:**
T ∝ 1 / √g => T' = 3 × √9 = 3 × 3 = **9 s**.

Jaanch:
- Jaanch: 9× weaker gravity => 3× longer period ✅

---

### Question 6
A girl sitting on a swing stands up while swinging. Does the time period of the swing increase, decrease, or stay the same?

**Solution:**
Khade hone par girl ka **Centre of Mass upar** uth jata hai, jisse pivot se effective length **L DECREASES**! Since T ∝ √L, the time period **DECREASES** (swing oscillates faster!).

Jaanch:
- Jaanch: Shorter effective length L => smaller T ✅

---

### Question 7
A hollow metal sphere filled with water hangs as a simple pendulum. A tiny hole is punched in the bottom so water slowly leaks out. How does the time period T change until the sphere is completely empty?

**Solution:**
Jaise-jaise paani neeche se bahar nikalta hai, CM pehle **neeche** khisakta hai (L badhta hai => **T INCREASES**). Jab poora paani nikal jata hai, khali sphere ka CM wapas **centre** par aa jata hai (L wapas original => **T DECREASES back to original**)!

Jaanch:
- Jaanch: First increases, then decreases back to original T ✅

---

### Question 8
A mass m stretches a vertical spring by 10 cm (0.10 m) when hanging at equilibrium (g = 10 m/s²). Find the time period of vertical oscillations of this mass!

**Solution:**
At equilibrium: m g = k x₀ => **m / k = x₀ / g**!
So **T = 2π √(x₀ / g)** = 2π √(0.10 / 10) = 2π √(0.01) = **0.2 π ≈ 0.628 s**!

Jaanch:
- Jaanch: Super useful shortcut: vertical spring period depends only on static stretch x₀! ✅

---

### Question 9
A simple pendulum is suspended from the ceiling of a car accelerating horizontally at a = 7.5 m/s² (g = 10 m/s²). Find the effective gravity g_eff for small oscillations!

**Solution:**
Gravity (10 downward) and pseudo force (7.5 backward) are perpendicular!
g_eff = √(g² + a²) = √(10² + 7.5²) = √(100 + 56.25) = √156.25 = **12.5 m/s²** (so T decreases!).

Jaanch:
- Jaanch: 7.5-10-12.5 is a 3-4-5 triangle scaled by 2.5 ✅

---

### Question 10
A mass of 4 kg hanging from a spring oscillates with period T = 2 s. If an extra 12 kg mass is added (total 16 kg), what is the new period?

**Solution:**
T ∝ √m => T' = 2 × √(16 / 4) = 2 × 2 = **4 s**.

Jaanch:
- Jaanch: 4× mass => 2× time period ✅

---

### Question 11
State whether the following statements are True or False:
(a) A spring–mass oscillator taken inside a freely falling lift stops oscillating.
(b) A simple pendulum taken inside a freely falling lift stops oscillating.

**Solution:**
- (a) **False** ❌ — Spring period 2π√(m/k) is independent of g, so it keeps oscillating normally!
- (b) **True** ✅ — In free fall g_eff = 0, so there is no restoring torque (T -> ∞)!

Jaanch:
- Jaanch: Classic contrast between spring (g-independent) and pendulum (g-dependent) ✅

---

### Question 12
A spring of constant k = 100 N/m is cut into two pieces of lengths in the ratio 2 : 3. Find the spring constant of the shorter piece!

**Solution:**
Shorter piece has length (2/5) L => since k L = constant:
k_short = k × (5 / 2) = 100 × 2.5 = **250 N/m** (and longer piece has (5/3)(100) = 166.7 N/m).

Jaanch:
- Jaanch: Check series back together: 1/250 + 3/500 = 5/500 = 1/100 => k_eq = 100 N/m ✅

---

Spring–Mass aur Pendulum ab tumhare liye bilkul clear hain!

**Agle topic mein:** Real oscillations hamesha hawa ke friction se ruk kyun jati hain (**Damping**) aur jab bahar se sahi rhythm par dhakka lage toh **Resonance** bridge ko bhi kaise tod sakta hai — chalo padhte hain [Damped Oscillations, Forced Oscillations & Resonance](oscillations-part5.md)!
