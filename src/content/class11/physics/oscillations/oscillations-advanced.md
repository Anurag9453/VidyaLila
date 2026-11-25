> **Class:** 11 | **Subject:** Physics | **Chapter 13:** Oscillations (Gehrai Mein — Advanced Level)

# Oscillations — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](oscillations.md) se [Topic 6](oscillations-part6.md)) mein humne SHM equations, energy, springs, pendulums, aur resonance cover kiye. Ab is **Gehrai Mein** section mein hum woh iconic SHM systems derive karenge jo sabse challenging mechanics problems mein aate hain — **Two-Body Reduced-Mass Spring**, **Physical (Compound) Pendulum**, **U-Tube Liquid & Floating-Cylinder SHM**, **Infinite-Length Pendulum (84.6 min!)**, aur **SHM Superposition (Phasors)**!

---

## Ratnavali ka Nonlinear-Vibrations Research Lab

Ratnavali ek vibrations researcher hai. Uske lab mein har oscillation sirf ek simple block-on-wall nahi hota:
1. Do free blocks (m₁, m₂) ek spring (k) se jude hon (jaise diatomic molecule H–Cl!) — toh time period **Reduced Mass μ = m₁ m₂ / (m₁ + m₂)** se milta hai!
2. Ek poori rigid rod ya disc ko nail par latka kar ghumao (**Physical / Compound Pendulum**) => T = 2π √(I / (m g d))!
3. Agar Earth par **infinite length (L -> ∞)** ka simple pendulum bana dein, toh uska period infinite NAHI balki exact **84.6 minutes (2π √(R/g))** hota hai!

Chalo Ratnavali ke saath in paanch elite oscillation tools ko master karte hain!

---

## 1. Two-Body Spring Oscillator (Reduced Mass μ!)

Do free masses m₁ aur m₂ smooth floor par spring k se jude hain. Dono apne CM ke about opposite phase mein oscillate karte hain:
```
  T = 2 π √( μ / k )      where Reduced Mass:   μ = m₁ m₂ / (m₁ + m₂)
```
*(Check: Agar m₂ -> ∞ (rigid wall!), toh μ -> m₁ aur purana formula 2π √(m₁/k) wapas mil jata hai!)*

---

## 2. Physical (Compound) Pendulum

Kisi bhi rigid body (mass m, pivot se CM ki doori **d**, pivot ke about MI = **I**) ko chhote angle θ par chhodne par restoring torque τ = -m g d sin θ ≈ -(m g d) θ = I α:
```
  T = 2 π √( I / (m g d) ) = 2 π √( (K_cm² + d²) / (g d) )
```
- **Minimum Period Condition:** d = K_cm par T minimum hota hai: **T_min = 2 π √(2 K_cm / g)**!
- **Uniform Rod of Length L Pivoted at One End:** I = (1/3) m L², d = L/2 => **T = 2 π √(2 L / (3 g))**!

---

## 3. Liquid in a U-Tube & Floating Cylinder SHM

1. **Liquid of Total Length L in a Uniform U-Tube:**
   Ek side x neeche dabane par doosri side x upar uthti hai => height difference **2 x** => restoring weight = - (2 x A ρ) g = -(m / L)(2 g) x =>
   ```
     T = 2 π √( L / (2 g) )
   ```
2. **Floating Cylinder (Submerged Depth h in Equilibrium):**
   x aur neeche dabane par extra upward buoyancy = -(A x ρ_liq g) = -(m g / h) x =>
   ```
     T = 2 π √( h / g )
   ```

---

## 4. Very Long Pendulum (Length Comparable to Earth's Radius R!)

Jab pendulum ki length L bahut badi ho, toh gravity har point par parallel nahi balki Earth ke centre ki taraf point karti hai! Exact result:
```
  T = 2 π √( 1 / ( g (1/L + 1/R) ) )
```
- **When L << R:** 1/R ≈ 0 => T = 2π √(L / g).
- **When L -> ∞ (Infinite-length pendulum!):** 1/L -> 0 => **T = 2 π √(R / g) ≈ 84.6 minutes** (exact same as Earth-tunnel SHM and surface satellite period!).

---

## 6 Deep Solved Problems

### Problem 1: Two-Block Spring System (2 kg & 6 kg)

Two blocks of masses 2 kg and 6 kg on a smooth horizontal floor are connected by a light spring of constant k = 150 N/m. They are pulled apart and released. Find the time period of oscillation (in terms of π).

**Solution:**
Reduced mass: μ = (2 × 6) / (2 + 6) = 12 / 8 = **1.5 kg**.
T = 2π √(μ / k) = 2π √(1.5 / 150) = 2π √(1 / 100) = **0.2 π ≈ 0.628 s**.

Jaanch:
- Jaanch: Notice amplitudes are inversely proportional to masses (A₁ / A₂ = 6 / 2 = 3 : 1) while both share exact T = 0.2π s! ✅

---

### Problem 2: Uniform Rod Swinging as a Compound Pendulum

A uniform thin rod of length L = 1.5 m is pivoted at one end and allowed to oscillate in a vertical plane (g = 10 m/s²). Find its time period of small oscillations!

**Solution:**
I = (1/3) m L², d = L / 2 => L_eff = I / (m d) = (2/3) L = (2/3)(1.5) = **1.0 m**.
T = 2π √(L_eff / g) = 2π √(1.0 / 10) = **2π / √10 ≈ 1.99 s** (almost 2.0 s!).

Jaanch:
- Jaanch: Equivalent simple pendulum length of a rod pivoted at end is ALWAYS (2/3) L ✅

---

### Problem 3: Oscillating Mercury Column in a U-Tube

A U-tube contains a 40 cm (0.40 m) long column of mercury (g = 10 m/s²). If the mercury is slightly depressed in one arm and released, find its time period of oscillation.

**Solution:**
T = 2π √(L / (2 g)) = 2π √(0.40 / 20) = 2π √(0.02) = **0.2 √2 π ≈ 0.889 s**.

Jaanch:
- Jaanch: Independent of tube cross-sectional area and density of mercury! ✅

---

### Problem 4: Superposition of Two Perpendicular/Collinear SHMs (Phasors!)

Find the resultant amplitude of two collinear SHMs of the same frequency:
x₁ = 4 sin(ω t) and x₂ = 4 sin(ω t + π / 3).

**Solution:**
Just like vector addition (Parallelogram Law with angle Δφ = π/3 = 60°!):
A_net = √(A₁² + A₂² + 2 A₁ A₂ cos 60°) = √(16 + 16 + 16) = **4 √3 ≈ 6.93**.

Jaanch:
- Jaanch: Equal phasors at 60° always give √3 A = 4√3 ✅

---

### Problem 5: Pendulum of Length L = R (Equal to Earth's Radius!)

Find the time period of a simple pendulum whose length equals Earth's radius L = R (given 2π √(R/g) = 84.6 min).

**Solution:**
1/L + 1/R = 1/R + 1/R = 2/R => T = 2π √(R / (2 g)) = 84.6 / √2 ≈ **59.8 minutes (~1 hour)**!

Jaanch:
- Jaanch: Shorter than infinite-length 84.6 min by a factor of 1/√2 ✅

---

### Problem 6: Floating Wooden Cylinder Bobbing in Water

A cylindrical log of wood floats vertically in water with 0.90 m of its length submerged (g = 10 m/s²). If pushed slightly downward and released, find its time period of vertical oscillation.

**Solution:**
T = 2π √(h / g) = 2π √(0.90 / 10) = 2π √(0.09) = 2π (0.3) = **0.6 π ≈ 1.88 s**.

Jaanch:
- Jaanch: √0.09 = 0.3; 2π × 0.3 = 0.6π s ✅

---

## 3 Advanced Mistakes

### Galti 1: Two-body spring mein total mass (m₁ + m₂) use kar dena!
- **Galat:** T = 2π √((m₁ + m₂) / k)!
- **Sahi:** Dono blocks opposite direction mein chalte hain => **Reduced Mass μ = m₁ m₂ / (m₁ + m₂)** lagta hai (jo chhote mass se bhi chhota hota hai)!

### Galti 2: Infinite-length pendulum ka period T = ∞ bol dena!
- **Galat:** L -> ∞ => 2π √(L/g) -> ∞!
- **Sahi:** Earth gol hai! Infinite length par gravity centre ki taraf lagti hai => **T = 2π √(R/g) ≈ 84.6 minutes**!

### Galti 3: U-tube SHM mein T = 2π √(L / g) likh dena (factor of 2 bhool jana!)
- **Galat:** Length L hai toh 2π √(L/g)!
- **Sahi:** Ek side x neeche jane par doosri side x upar jati hai => height difference **2x** => **T = 2π √(L / (2g))**!

---

## Practice Questions (Advanced)

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
Two equal masses of 4 kg each are connected by a spring of constant k = 200 N/m on a smooth horizontal floor. Find their angular frequency ω of oscillation.

**Solution:**
μ = (4 × 4) / (4 + 4) = 2 kg => ω = √(200 / 2) = √100 = **10 rad/s**.

Jaanch:
- Jaanch: Equal masses => μ = m/2 = 2 kg ✅

---

### Question 2
Find the equivalent simple pendulum length L_eff of a uniform circular **disc** of radius R pivoted at a point on its rim (oscillating in its own plane).

**Solution:**
I_rim = (1/2) m R² + m R² = (3/2) m R²; d = R.
L_eff = I_rim / (m d) = **(3 / 2) R = 1.5 R**!

Jaanch:
- Jaanch: T = 2π √(3R / (2g)) ✅

---

### Question 3
Find the equivalent simple pendulum length L_eff of a thin **ring** of radius R pivoted at a point on its rim (oscillating in its own plane).

**Solution:**
I_rim = m R² + m R² = 2 m R²; d = R => **L_eff = 2 R** (exact diameter of the ring!).

Jaanch:
- Jaanch: T = 2π √(2R / g) ✅

---

### Question 4
Two collinear SHMs x₁ = 3 sin(ωt) and x₂ = 4 sin(ωt + π/2) superpose. Find the resultant amplitude.

**Solution:**
Δφ = π/2 (90°) => A = √(3² + 4²) = **5**.

Jaanch:
- Jaanch: 3-4-5 right triangle ✅

---

### Question 5
A floating cylinder has 0.40 m submerged in equilibrium. Find its time period of vertical SHM (in terms of π).

**Solution:**
T = 2π √(0.40 / 10) = 2π √(0.04) = 2π (0.2) = **0.4 π ≈ 1.26 s**.

Jaanch:
- Jaanch: √0.04 = 0.2 ✅

---

### Question 6
A U-tube contains a 0.80 m liquid column. Find its oscillation time period (in terms of π).

**Solution:**
T = 2π √(0.80 / 20) = 2π √(0.04) = **0.4 π ≈ 1.26 s**.

Jaanch:
- Jaanch: 0.80 / 20 = 0.04 => √0.04 = 0.2 ✅

---

### Question 7
A particle executes two perpendicular SHMs: x = A sin(ωt) and y = A cos(ωt). What is the geometric shape of its 2D path?

**Solution:**
x² + y² = A² (sin² ωt + cos² ωt) = **A²** => a **Circle of radius A**!

Jaanch:
- Jaanch: Two equal-amplitude perpendicular SHMs with 90° phase difference trace a circle ✅

---

### Question 8
If two perpendicular SHMs are x = A sin(ωt) and y = B sin(ωt) (phase difference 0°), what is the shape of the path?

**Solution:**
y / x = B / A => **y = (B / A) x** — a **Straight Line** passing through the origin!

Jaanch:
- Jaanch: Zero phase difference gives a straight-line Lissajous figure ✅

---

### Question 9
For a uniform rod of length L acting as a compound pendulum, at what distance d from its centre of mass is the time period **MINIMUM**?

**Solution:**
K_cm = L / √12 = L / (2 √3). Minimum period occurs at **d = K_cm = L / (2 √3) ≈ 0.289 L**!

Jaanch:
- Jaanch: T_min = 2π √(2 K_cm / g) = 2π √(L / (√3 g)) ✅

---

### Question 10
A block of mass m on a smooth horizontal floor is connected to a spring k via a light string passing over a **heavy solid-disc pulley** of mass M and radius R. What is the effective mass in T = 2π √(m_eff / k)?

**Solution:**
Pulley adds rotational inertia I / R² = M / 2 => **m_eff = m + M / 2**, so **T = 2π √((m + M/2) / k)**!

Jaanch:
- Jaanch: Matches our Chapter 6 heavy-pulley effective mass shortcut! ✅

---

### Question 11
A tunnel is dug along a straight chord of Earth (NOT passing through Earth's centre!). What is the time period of a stone oscillating frictionlessly inside this chord tunnel?

**Solution:**
Component of gravity along any chord at distance x from the chord's midpoint is STILL a = -(g/R) x => exact same period **T = 2π √(R / g) ≈ 84.6 minutes**!

Jaanch:
- Jaanch: Independent of the chord's length or depth! ✅

---

### Question 12
Two identical springs (k each) are connected to a mass m on a smooth floor, one at 0° and one at 180°, and a third identical spring k is attached in parallel with the first. Find the total angular frequency ω.

**Solution:**
All three springs restore in the same direction (parallel!) => k_eq = k + k + k = 3 k => **ω = √(3 k / m)**.

Jaanch:
- Jaanch: Parallel springs simply add: k_eq = 3k ✅

---

Shabaash! Tumne Oscillations ko reduced-mass springs, compound pendulums, U-tubes, aur infinite-length pendulums tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](oscillations-part6.md) dekho!
