> **Class:** 11 | **Subject:** Physics | **Chapter 6:** System of Particles and Rotational Motion (Part 5)

# Kinematics & Dynamics of Rotation About a Fixed Axis

> **Pichle topic se:** [Moment of Inertia](system-of-particles-and-rotational-motion-part4.md) mein humne rotational inertia I calculate karna seekha. Ab hum ek zabardast **Translation-to-Rotation Dictionary** dekhenge — jisse linear kinematics aur Newton's Second Law ke sabhi formulas seedha rotation mein translate ho jate hain!

---

## Fatehchand ka Industrial Lathe & Heavy-Pulley Test

Fatehchand ek machine designer hai. Chapter 4 mein humne pulleys ko "massless" maana tha, toh rassi ke dono taraf tension same thi. Par Fatehchand ke factory mein **2 kg** ki ek bhari **solid-disc pulley** (I = (1/2) M R²) par rassi lipti hai aur neeche **2 kg** block latka hai!

Jab block neeche girta hai, toh pulley ko ghumane ke liye torque (τ = T R = I α) chahiye — isliye block g = 10 m/s² se nahi balki exact **(2/3) g = 6.67 m/s²** se girta hai! Chalo rotational kinematics aur dynamics ki poori dictionary dekhte hain.

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Angular Acceleration (α) | Angular velocity badalne ka rate: **α = dω / dt** (SI unit: **rad s⁻²**) |
| Rotational Dynamics Equation | Newton's Second Law ka rotational roop: **τ_net = I α** |
| Rotational Kinetic Energy (K_rot) | Ghoomti hui rigid body ki KE: **K_rot = (1/2) I ω² = L² / (2 I)** |
| Rotational Work & Power | **W = τ θ** (constant τ) aur **P = τ ω** |

---

## 1. The Complete Linear ↔ Rotational Dictionary

| Linear Motion (1D) | Rotational Motion (Fixed Axis) |
|---|---|
| Displacement **s** | Angular displacement **θ** (rad) |
| Velocity **v = ds/dt** | Angular velocity **ω = dθ/dt** (rad/s) |
| Acceleration **a = dv/dt** | Angular acceleration **α = dω/dt** (rad/s²) |
| Mass **m** | Moment of Inertia **I** (kg m²) |
| Force **F = m a** | Torque **τ = I α** |
| Momentum **p = m v** | Angular momentum **L = I ω** |
| Kinetic Energy **(1/2) m v²** | Rotational KE **(1/2) I ω²** |
| Work **F s**, Power **F v** | Work **τ θ**, Power **τ ω** |

### Rotational Kinematics (Constant Angular Acceleration α):
1. **ω = ω₀ + α t**
2. **θ = ω₀ t + (1/2) α t²**
3. **ω² = ω₀² + 2 α θ**

*(Yaad rakho: 1 revolution = **2π radians**! Agar number of revolutions N poocha ho, toh **N = θ / (2π)**!)*

---

## 2. Heavy Pulley / Unwinding Cylinder Problem

Mass **M**, radius **R** ki solid-disc pulley (I = (1/2) M R²) par rassi lipti hai aur mass **m** neeche latka hai:
- Block FBD: **m g - T = m a**
- Pulley rotation: **T R = I α**
- No-slipping string condition: **a = α R** => **T = (I / R²) a**!
Add dono equations: m g = (m + I / R²) a  =>
```
  a = m g / (m + I / R²)
```
*(Super shortcut: Pulley apne effective mass **I / R²** ko total inertia mein add kar deti hai! Solid disc ke liye I/R² = M/2!)*

---

## Solved Examples

### Example 1: Spinning Motor Wheel (Rotational Kinematics)

A motor wheel accelerates uniformly from 1200 rpm to 3120 rpm in 16 s. Find: (a) its angular acceleration α (in rad/s²), (b) how many revolutions it makes during this 16 s.

**Solution:**
- ω₀ = 2π (1200 / 60) = **40π rad/s**; ω = 2π (3120 / 60) = **104π rad/s**.
- (a) α = (ω - ω₀) / t = (104π - 40π) / 16 = 64π / 16 = **4π rad/s²**.
- (b) θ = [(ω₀ + ω) / 2] t = (72π) × 16 = 1152π rad.
  Number of revolutions N = θ / (2π) = 1152π / (2π) = **576 revolutions**.

Jaanch:
- Jaanch: Avg speed = (1200 + 3120)/2 = 2160 rpm = 36 rev/s; in 16 s => 36 × 16 = 576 rev ✅

---

### Example 2: Fatehchand's Heavy Pulley with Hanging Mass

A cord is wound around a uniform solid-disc pulley of mass M = 2 kg and radius R = 0.2 m (I = (1/2) M R²), and a 2 kg block hangs from the free end (g = 10 m/s²). Find the downward acceleration a of the block and tension T in the cord.

**Solution:**
- Effective rotational mass of disc pulley: I / R² = M / 2 = 2 / 2 = **1 kg**.
- Acceleration: a = m g / (m + M/2) = 20 / (2 + 1) = **20 / 3 ≈ 6.67 m/s²**.
- Tension: T = (I / R²) a = 1 × (20/3) = **20 / 3 ≈ 6.67 N**.

Jaanch:
- Jaanch: Check block: m g - T = 20 - 20/3 = 40/3 = 2 × (20/3) = m a ✅

---

### Example 3: Braking Torque & Work on a Flywheel

A flywheel of moment of inertia I = 4 kg m² rotates at 10 rad/s. A constant braking torque brings it to rest in 5 s. Find: (a) the braking torque, (b) the rotational kinetic energy lost, (c) the angle turned before stopping.

**Solution:**
- (a) α = (0 - 10) / 5 = -2 rad/s² => |τ| = I |α| = 4 × 2 = **8 N m**.
- (b) K_rot = (1/2) I ω₀² = (1/2)(4)(100) = **200 J**.
- (c) θ = (10 + 0)/2 × 5 = **25 rad**.

Jaanch:
- Jaanch: Work–Energy check: W = τ θ = -8 × 25 = -200 J = ΔK_rot ✅

---

### Example 4: Power of a Rotating Shaft

A turbine shaft rotates at 600 rpm while delivering a constant torque of 50 N m. Find the power delivered by the shaft in kW (take π = 3.14).

**Solution:**
ω = 2π (600 / 60) = 20π ≈ 62.8 rad/s.
P = τ ω = 50 × 62.8 = **3140 W = 3.14 kW**.

Jaanch:
- Jaanch: 50 × 20π = 1000π ≈ 3140 W ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Rotational kinematics mein rpm ko rad/s mein convert kiye bina plug kar dena
- **Galat:** ω₀ = 1200 rpm => α = (3120 - 1200)/16 = 120 rad/s²!
- **Sahi:** Hamesha **ω (rad/s) = 2π × rpm / 60** convert karo!

### Galti 2: Heavy pulley ke dono sides par tension equal (T₁ = T₂) maan lena
- **Galat:** Pulley bhari hai, phir bhi T₁ = T₂!
- **Sahi:** Bhari pulley (I ≠ 0) ko ghumane ke liye net torque **(T₂ - T₁) R = I α** chahiye, isliye **T₂ ≠ T₁**!

### Galti 3: Revolutions N aur radians θ ko mix kar dena
- **Galat:** θ = 25 rad aaya toh 25 revolutions ghooma!
- **Sahi:** 1 revolution = **2π rad**, isliye **N = θ / (2π)**!

---

## Quick Recap

- **Kinematics (constant α):** ω = ω₀ + αt; θ = ω₀t + (1/2)αt²; ω² = ω₀² + 2αθ.
- **Dynamics:** τ = I α; K_rot = (1/2) I ω²; W = τ θ; P = τ ω.
- **Heavy pulley + hanging mass:** a = m g / (m + I/R²); T = (I/R²) a.

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A wheel starts from rest and accelerates uniformly at 4 rad/s² for 5 s. Find its final angular velocity and total angle turned in radians.

**Solution:**
- ω = 0 + 4(5) = **20 rad/s**.
- θ = (1/2)(4)(25) = **50 rad**.

Jaanch:
- Jaanch: ω² = 400 = 2(4)(50) ✅

---

### Question 2
A constant torque of 20 N m acts on a wheel of moment of inertia 5 kg m² initially at rest. Find its angular speed and rotational KE after 4 s.

**Solution:**
- α = τ / I = 20 / 5 = 4 rad/s² => ω = 4 × 4 = **16 rad/s**.
- K_rot = (1/2)(5)(256) = **640 J**.

Jaanch:
- Jaanch: θ = 32 rad; W = τ θ = 20 × 32 = 640 J = K_rot ✅

---

### Question 3
A rope is wrapped around a hollow cylinder (I = M R²) of mass 3 kg and radius 0.4 m. If the rope is pulled with a constant force of 30 N, find the angular acceleration of the cylinder.

**Solution:**
I = 3(0.16) = 0.48 kg m²; τ = 30 × 0.4 = 12 N m.
α = τ / I = 12 / 0.48 = **25 rad/s²**.

Jaanch:
- Jaanch: Shortcut α = F / (M R) = 30 / (3 × 0.4) = 30 / 1.2 = 25 rad/s² ✅

---

### Question 4
A fan running at 120 rpm is switched off and comes to rest after making 10 revolutions with uniform angular deceleration. Find the time taken to stop.

**Solution:**
ω₀ = 2π(120/60) = 4π rad/s; θ = 10(2π) = 20π rad.
Avg angular velocity = (4π + 0)/2 = 2π rad/s => t = θ / ω_avg = 20π / (2π) = **10 s**.

Jaanch:
- Jaanch: 120 rpm = 2 rev/s -> avg 1 rev/s => 10 rev takes 10 s ✅

---

### Question 5
A uniform disc of mass 4 kg and radius 0.5 m rotates at 10 rad/s. Find its rotational kinetic energy.

**Solution:**
I = (1/2)(4)(0.25) = 0.5 kg m².
K_rot = (1/2)(0.5)(100) = **25 J**.

Jaanch:
- Jaanch: 0.25 × 100 = 25 J ✅

---

### Question 6
A motor delivers 1000 W of power to a shaft rotating at 25 rad/s. Find the torque exerted on the shaft.

**Solution:**
τ = P / ω = 1000 / 25 = **40 N m**.

Jaanch:
- Jaanch: 40 × 25 = 1000 W ✅

---

### Question 7
A uniform rod of mass 3 kg and length 2 m is hinged at one end and released from rest in a horizontal position. Find its initial angular acceleration α just after release!

**Solution:**
- Torque about hinge (weight mg at L/2): τ = m g (L/2) = 3(10)(1) = 30 N m.
- MI about end: I = (1/3) M L² = (1/3)(3)(4) = 4 kg m².
- α = τ / I = 30 / 4 = **7.5 rad/s²**.

Jaanch:
- Jaanch: Standard result α = 3g / (2L) = 30 / 4 = 7.5 rad/s² (notice tip acceleration α L = 15 m/s² > g!) ✅

---

### Question 8
A 4 kg solid-disc pulley (radius 0.5 m) has a 2 kg block hanging from a cord wound around it. Find the acceleration of the descending block.

**Solution:**
I / R² = M / 2 = 2 kg.
a = m g / (m + M/2) = 20 / (2 + 2) = **5 m/s²**.

Jaanch:
- Jaanch: T = 20 - 2(5) = 10 N; τ = 10(0.5) = 5 N m; I = 0.5 kg m² => α = 10 rad/s² => a = α R = 5 m/s² ✅

---

### Question 9
Two bodies have moments of inertia I₁ = 2 kg m² and I₂ = 8 kg m² and equal angular momenta L. Find the ratio of their rotational kinetic energies K₁ / K₂.

**Solution:**
K = L² / (2 I) ∝ 1 / I => K₁ / K₂ = I₂ / I₁ = 8 / 2 = **4 : 1**.

Jaanch:
- Jaanch: Smaller I has 4× larger rotational KE for same L ✅

---

### Question 10
A flywheel of moment of inertia 2 kg m² is accelerated from rest by a torque of 10 N m through an angle of 10 rad. Find its final angular velocity using the Rotational Work–Energy Theorem.

**Solution:**
W = τ θ = 10 × 10 = 100 J = (1/2)(2) ω² => ω² = 100 => **ω = 10 rad/s**.

Jaanch:
- Jaanch: α = 5 rad/s²; ω² = 2(5)(10) = 100 => ω = 10 rad/s ✅

---

### Question 11
State whether the following statements are True or False:
(a) When a heavy pulley rotates with angular acceleration, the tensions in the two vertical segments of the string on either side are equal.
(b) Rotational kinetic energy is always proportional to ω².

**Solution:**
- (a) **False** ❌ — Net torque (T₂ - T₁)R = I α ≠ 0 requires T₂ ≠ T₁!
- (b) **True** ✅ — K_rot = (1/2) I ω² ∝ ω².

Jaanch:
- Jaanch: Heavy pulley needs non-zero torque difference to spin up ✅

---

### Question 12
A uniform rod of mass M and length L = 1.5 m is hinged at one end and released from rest in the horizontal position. Using conservation of mechanical energy, find its angular speed ω when it becomes vertical!

**Solution:**
CM drops by vertical height h = L / 2:
M g (L / 2) = (1/2) I ω² = (1/2) [(1/3) M L²] ω² => g / 2 = (1/6) L ω² => **ω = √(3 g / L)**.
For L = 1.5 m: ω = √(30 / 1.5) = √20 = **2 √5 ≈ 4.47 rad/s**.

Jaanch:
- Jaanch: Tip speed v = ω L = √(3 g L) > √(2 g L) (faster than a free pendulum bob!) ✅

---

Fixed-axis rotation ab tumhare liye ekdam clear ho gaya hai!

**Agle topic mein:** Translation aur Rotation dono ek saath — **Pure Rolling Motion** aur downhill race mein Solid Sphere hamesha Disc aur Ring ko kyun hara deta hai — chalo padhte hain [Rolling Motion](system-of-particles-and-rotational-motion-part6.md)!
