> **Class:** 11 | **Subject:** Physics | **Chapter 6:** System of Particles and Rotational Motion (Part 7)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Rolling Motion](system-of-particles-and-rotational-motion-part6.md) mein humne pure rolling aur inclined races solve kiye. Ab chalo poore Rotational Motion chapter ke sabhi tools — CM, cross product, torque, angular momentum, equilibrium, moment of inertia, heavy pulleys, aur rolling — ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Jawahar ka Precision-Gyroscope & Robotics Lab

Jawahar ek Robotics & Precision-Gyroscope Director hai. Uske test bench par har problem mein linear aur rotational mechanics haath mila kar kaam karte hain — kabhi heavy pulley + hanging block, kabhi spinning disc par naya mass drop hona, toh kabhi rod-hinge ka swing! Jawahar ka **Decision Map** har rotational problem ka fastest approach dikha deta hai.

---

## Decision Map: Kaun Sa Rotational Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Discrete masses, boat-walk, exploding shell | **r_cm = Σ mᵢ rᵢ / M**; if F_ext = 0 => **Δx_cm = 0** ([Topic 1](system-of-particles-and-rotational-motion.md)) |
| τ = r × F, L = r × p, spinning skater / clay drop on turntable | **τ_ext = 0 => I₁ ω₁ = I₂ ω₂** ([Topic 2](system-of-particles-and-rotational-motion-part2.md)) |
| Plank on pillars, leaning ladder, overhanging beam | **ΣF = 0** AND **Στ = 0** (choose pivot at unknown force!) ([Topic 3](system-of-particles-and-rotational-motion-part3.md)) |
| Finding I about a shifted or in-plane axis | **Perpendicular (2D only): I_z = I_x + I_y**; **Parallel: I = I_cm + Md²** ([Topic 4](system-of-particles-and-rotational-motion-part4.md)) |
| Spinning wheel acceleration, heavy pulley, hinged rod swing | **τ = I α**; **a = m g / (m + I/R²)**; **K_rot = (1/2) I ω²** ([Topic 5](system-of-particles-and-rotational-motion-part5.md)) |
| Rolling sphere/disc/ring on flat or inclined plane | **K = (1/2) M v² (1 + K²/R²)**; **a = g sin θ / (1 + K²/R²)** ([Topic 6](system-of-particles-and-rotational-motion-part6.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Disc + Turntable Angular Momentum & Energy Loss

A uniform disc A of moment of inertia I₁ = 2 kg m² rotates at ω₁ = 12 rad/s. A second stationary disc B of moment of inertia I₂ = 4 kg m² is dropped coaxially onto disc A so they spin together. Find: (a) their common angular speed ω, (b) the rotational kinetic energy lost as heat.

**Solution:**
- (a) τ_ext = 0 => I₁ ω₁ = (I₁ + I₂) ω => 2(12) = (2 + 4) ω => 24 = 6 ω => **ω = 4 rad/s**.
- (b) K_i = (1/2)(2)(144) = 144 J; K_f = (1/2)(6)(16) = 48 J.
  Energy lost as heat = 144 - 48 = **96 J**!

Jaanch:
- Jaanch: Rotational analogue of completely inelastic collision: ΔK = (1/2)[I₁I₂/(I₁+I₂)] ω₁² = (1/2)(8/6)(144) = 96 J ✅

---

### Problem 2: Heavy Pulley Atwood Machine (Different Tensions!)

Two masses m₁ = 2 kg and m₂ = 5 kg hang from a light string passing over a heavy solid-disc pulley of mass M = 2 kg and radius R = 0.2 m (g = 10 m/s²). Find the acceleration a and the two tensions T₁ and T₂.

**Solution:**
Effective rotational mass of disc pulley: I / R² = M / 2 = **1 kg**.
- Acceleration: a = (m₂ - m₁) g / (m₁ + m₂ + M/2) = (5 - 2)(10) / (2 + 5 + 1) = 30 / 8 = **3.75 m/s²**.
- T₁ (on rising 2 kg): T₁ = 2(10 + 3.75) = **27.5 N**.
- T₂ (on falling 5 kg): T₂ = 5(10 - 3.75) = **31.25 N**.

Jaanch:
- Jaanch: Torque check: (T₂ - T₁) = 31.25 - 27.5 = 3.75 N = (I/R²) a = 1 × 3.75 ✅

---

### Problem 3: Rolling Disc Reaching a Spring at the Bottom

A 2 kg solid disc rolls without slipping from rest down an incline of height h = 1.5 m and hits a horizontal spring of constant k = 300 N/m on a smooth-grip floor (g = 10 m/s²). Find the maximum compression x of the spring.

**Solution:**
Pure rolling => zero friction work => ALL initial gravitational PE becomes spring PE at max compression!
M g h = (1/2) k x²
2(10)(1.5) = 150 x² => 30 = 150 x² => x² = 0.20 => **x = √0.20 ≈ 0.447 m**.

Jaanch:
- Jaanch: Total KE at bottom = M g h = 30 J, which compresses spring by √(60/300) = √0.20 m ✅

---

### Problem 4: Parallel Axes + Rotational KE of a Rod

A uniform rod of mass 3 kg and length 2 m rotates about one of its ends at ω = 4 rad/s. Find its angular momentum L and rotational kinetic energy K_rot.

**Solution:**
- I_end = (1/3) M L² = (1/3)(3)(4) = **4 kg m²**.
- L = I ω = 4 × 4 = **16 kg m²/s**.
- K_rot = (1/2) I ω² = (1/2)(4)(16) = **32 J**.

Jaanch:
- Jaanch: Check K = L² / (2I) = 256 / 8 = 32 J ✅

---

### Problem 5: Vector Torque & Equilibrium Check

A force F = (3 î + 4 ĵ) N acts at r = (2 î + 1 ĵ) m. Find the torque about the origin and state whether the rotation is clockwise or anticlockwise in the xy-plane.

**Solution:**
τ = r × F = [2(4) - 1(3)] k̂ = (8 - 3) k̂ = **+5 k̂ N m**.
Positive +k̂ (out of page) means **anticlockwise** rotation!

Jaanch:
- Jaanch: 8 - 3 = +5 k̂ ✅

---

### Problem 6: Solid Sphere vs Hollow Sphere Race Time Ratio

A solid sphere and a hollow sphere start from rest at the top of the same inclined plane of length L. Find the ratio of times taken by them to reach the bottom (t_solid / t_hollow).

**Solution:**
Since L = (1/2) a t², t ∝ 1 / √a ∝ √(1 + K² / R²)!
- Solid sphere: 1 + 2/5 = 7/5.
- Hollow sphere: 1 + 2/3 = 5/3.
t_solid / t_hollow = √((7/5) / (5/3)) = **√(21 / 25) = √21 / 5 ≈ 0.917** (solid sphere arrives faster!).

Jaanch:
- Jaanch: a_solid = (5/7)g sin θ > a_hollow = (3/5)g sin θ => t_solid < t_hollow ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Coaxial discs chipakne par rotational KE conserve kar dena
- **Galat:** (1/2) I₁ ω₁² = (1/2) (I₁ + I₂) ω²!
- **Sahi:** Discs ke beech friction heat banata hai (inelastic rotational collision!) — sirf **Angular Momentum I₁ ω₁ = (I₁ + I₂) ω** conserved rehta hai!

### Galti 2: Heavy pulley Atwood machine mein M/2 ko numerator mein bhi daal dena
- **Galat:** a = (m₂ - m₁ + M/2) g / (m₁ + m₂ + M/2).
- **Sahi:** Pulley ka weight centre par hinge balance karta hai — woh sirf **inertia (denominator)** mein **I / R² = M / 2** add karti hai, driving force (numerator) mein nahi!

### Galti 3: Rolling energy mein (1/2) I ω² bhool kar sirf (1/2) M v² lena
- **Galat:** Disc ka total KE = (1/2) M v².
- **Sahi:** Pure rolling mein hamesha **K = (1/2) M v² (1 + K²/R²)** — disc ke liye 50% extra rotational KE judti hai!

---

## Mixed Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
Find the x-coordinate of the CM of 2 kg at x = 0, 3 kg at x = 2 m, and 5 kg at x = 4 m.

**Solution:**
x_cm = (0 + 6 + 20) / 10 = 26 / 10 = **2.6 m**.

Jaanch:
- Jaanch: 26 / 10 = 2.6 m ✅

---

### Question 2
Find the magnitude of torque produced by F = 10 ĵ N acting at r = (3 î + 4 ĵ) m about the origin.

**Solution:**
τ = (3 î + 4 ĵ) × (10 ĵ) = **30 k̂ N m** (magnitude **30 N m**).

Jaanch:
- Jaanch: ĵ × ĵ = 0; 3(10) = 30 N m ✅

---

### Question 3
A uniform disc of mass 6 kg and radius 1 m rotates about a diameter. Find its moment of inertia.

**Solution:**
I_diam = (1/4) M R² = (1/4)(6)(1) = **1.5 kg m²**.

Jaanch:
- Jaanch: Half of I_z = (1/2)(6)(1) = 3 kg m² ✅

---

### Question 4
A flywheel of MI = 5 kg m² spins at 8 rad/s. A second stationary wheel of MI = 3 kg m² is coupled coaxially to it. Find the common angular speed.

**Solution:**
5 × 8 = (5 + 3) ω => 40 = 8 ω => **ω = 5 rad/s**.

Jaanch:
- Jaanch: L = 40 kg m²/s conserved ✅

---

### Question 5
A solid sphere of mass 10 kg rolls without slipping at 2 m/s. Find its total kinetic energy.

**Solution:**
K = (1/2)(10)(4)(7/5) = 20 × (7/5) = **28 J**.

Jaanch:
- Jaanch: K_trans = 20 J, K_rot = 8 J; sum = 28 J ✅

---

### Question 6
A 4 m uniform plank (mass 10 kg) rests on two supports at its ends. A 30 kg box is placed 1 m from the right end. Find the reaction at the right support.

**Solution:**
Moments about left end: N_R (4) = 100(2) + 300(3) = 200 + 900 = 1100 => **N_R = 275 N**.

Jaanch:
- Jaanch: N_L = 400 - 275 = 125 N ✅

---

### Question 7
A wheel accelerates from rest at 2 rad/s² for 10 s. Find the total number of revolutions completed (in terms of π).

**Solution:**
θ = (1/2)(2)(100) = 100 rad => N = 100 / (2π) = **50 / π ≈ 15.9 revolutions**.

Jaanch:
- Jaanch: 50/π × 2π = 100 rad ✅

---

### Question 8
A solid cylinder rolls without slipping down a 30° incline. Find its linear acceleration.

**Solution:**
a = (2/3) g sin 30° = (2/3)(5) = **10 / 3 ≈ 3.33 m/s²**.

Jaanch:
- Jaanch: 1 + K²/R² = 3/2 => 5 / 1.5 = 10/3 m/s² ✅

---

### Question 9
Find the moment of inertia of a uniform solid sphere of mass 10 kg and radius 2 m about a tangent.

**Solution:**
I = (7/5) M R² = (7/5)(10)(4) = **56 kg m²**.

Jaanch:
- Jaanch: I_cm = 16, M R² = 40; 16 + 40 = 56 kg m² ✅

---

### Question 10
A heavy solid-disc pulley of mass 4 kg has masses 3 kg and 5 kg hanging from a cord over it. Find the acceleration of the masses.

**Solution:**
I / R² = M / 2 = 2 kg.
a = (5 - 3)(10) / (3 + 5 + 2) = 20 / 10 = **2 m/s²**.

Jaanch:
- Jaanch: T₁ = 36 N, T₂ = 40 N; T₂ - T₁ = 4 N = 2(2) ✅

---

### Question 11
State whether the following statements are True or False:
(a) In pure rolling, the point of contact with the ground has zero instantaneous velocity.
(b) A ring rolls down an inclined plane faster than a solid sphere of the same mass and radius.

**Solution:**
- (a) **True** ✅ — v_cm - ω R = 0 at the bottom contact point.
- (b) **False** ❌ — Solid sphere (5/7) has smaller K²/R² than ring (1/2), so the **solid sphere** is always faster!

Jaanch:
- Jaanch: Core pure-rolling results confirmed ✅

---

### Question 12
A 2 kg particle moves at 3 m/s along a line whose perpendicular distance from the origin is 4 m. Find the magnitude of its angular momentum about the origin.

**Solution:**
L = m v r_⊥ = 2 × 3 × 4 = **24 kg m²/s**.

Jaanch:
- Jaanch: 2 × 3 × 4 = 24 kg m²/s ✅

---

## Chapter Wrap-up: System of Particles & Rotational Motion at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Centre of Mass](system-of-particles-and-rotational-motion.md) | r_cm = Σ mᵢ rᵢ / M; M a_cm = F_ext | Internal forces cannot move CM; boat shift = mL/(m+M) |
| [Topic 2: Torque & Angular Momentum](system-of-particles-and-rotational-motion-part2.md) | τ = r × F; L = r × p = I ω; τ_ext = dL/dt | τ_ext = 0 => I₁ ω₁ = I₂ ω₂ (KE can change!) |
| [Topic 3: Rigid Equilibrium](system-of-particles-and-rotational-motion-part3.md) | ΣF = 0 AND Στ = 0; Couple τ = F d | Pivot unknown force par rakho; uniform weight midpoint par |
| [Topic 4: Moment of Inertia](system-of-particles-and-rotational-motion-part4.md) | Ring MR², Disc MR²/2, Sphere 2MR²/5; I = I_cm + Md² | Perpendicular axes SIRF 2D lamina par; Parallel axes CM se! |
| [Topic 5: Fixed-Axis Rotation](system-of-particles-and-rotational-motion-part5.md) | τ = I α; K_rot = (1/2)Iω²; P = τ ω; a = mg/(m + I/R²) | Linear-Rotational Dictionary se har formula instant yaad! |
| [Topic 6: Rolling Motion](system-of-particles-and-rotational-motion-part6.md) | v = ωR; K = (1/2)Mv²(1+K²/R²); a = g sin θ/(1+K²/R²) | Solid Sphere > Disc > Hollow Sphere > Ring (mass-independent!) |
| [Topic 7: Mixed & Wrap-up](system-of-particles-and-rotational-motion-part7.md) | Coaxial discs, heavy Atwood, rolling + spring | Decision Map se linear + rotational equations jodo |

Tumne Class 11 Physics ka sabse bada aur richest mechanics chapter poori tarah master kar liya hai! Agar negative-mass cavity CM/MI, minimum friction for pure rolling on an incline, toppling vs slipping of cubes, aur hinged-rod bullet collisions dekhna chahte ho, toh [Gehrai Mein — Advanced Level](system-of-particles-and-rotational-motion-advanced.md) zaroor padho!

**Agle chapter mein:** Ab hum zameen ki chhoti experiments se bahar nikalkar pure brahmand (universe) mein chalte hain — **Gravitation** mein hum Newton's Law of Gravitation, Kepler's Laws, escape velocity, aur satellites ka safar shuru karenge!
