> **Class:** 11 | **Subject:** Physics | **Chapter 6:** System of Particles and Rotational Motion (Part 2)

# Torque, Angular Momentum & Conservation

> **Pichle topic aur pehle ki padhai se:** [Centre of Mass](system-of-particles-and-rotational-motion.md) mein humne systems ka linear motion dekha, aur turning effect ka basic intro tum [Class 10 Moments and Circular Motion](../../../class10/physics/moments-and-circular-motion/moments-and-circular-motion.md) mein dekh chuke ho. Ab hum **Vector (Cross) Product**, **Torque (τ = r × F)**, aur **Angular Momentum (L = r × p)** ka exact 3D physics seekhenge!

---

## Umapati ka Ice-Skater Spin & Wrench Torque Test

Umapati ek biomechanics coach hai. Usne do kamaal ki cheezein notice ki:
1. Tight nut kholne ke liye **lamba spanner (bada r)** use karne par wahi force **2 guna zyada turning effect (Torque)** deta hai — aur handle ke 90° par force lagana sabse effective hota hai!
2. Ice skater jab ghoomte hue apne faile hue haath **andar kheenchti hai**, toh uski spinning speed achanak **3–4 guna tez** ho jati hai! Koi bahari dhakka nahi laga, phir speed kaise badhi? **Conservation of Angular Momentum (I₁ ω₁ = I₂ ω₂)** se!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Vector (Cross) Product (A × B) | Do vectors ka **VECTOR** result, dono ke perpendicular: **|A × B| = A B sin θ** (Right-Hand Thumb Rule se direction!) |
| Torque (τ) | Force ka rotational analogue (turning effect): **τ = r × F**, magnitude **τ = r F sin θ = F × r_⊥** (SI unit: **N m**) |
| Lever Arm (r_⊥) | Pivot se force ki line-of-action par perpendicular distance |
| Angular Momentum (L) | Linear momentum ka rotational analogue: **L = r × p = m (r × v)**, aur rigid body ke liye **L = I ω** (SI unit: **kg m² s⁻¹**) |
| Conservation of Angular Momentum | Agar net external torque **τ_ext = 0**, toh **L = constant** (yani **I₁ ω₁ = I₂ ω₂**)! |

---

## 1. Vector (Cross) Product (A × B)

- **Magnitude:** |A × B| = A B sin θ (also equals the **Area of the Parallelogram** formed by A and B!).
- **Direction:** Right-Hand Rule (fingers A se B ki taraf curl karo => thumb **A × B** ki direction dikhayega!).
- **Anti-commutative:** **B × A = - (A × B)** (order palatne par sign palat jata hai!).
- **Unit vector cycle:** î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ (reverse mein minus sign; î × î = 0!).
- **Determinant Form:**
```
  A × B = (A_y B_z - A_z B_y) î  +  (A_z B_x - A_x B_z) ĵ  +  (A_x B_y - A_y B_x) k̂
```

---

## 2. Torque (τ = r × F) & Angular Momentum (L = r × p)

1. **Torque:** **τ = r × F**  =>  |τ| = r F sin θ = F · r_⊥.
   *(Agar force pivot se guzre, toh r_⊥ = 0 => **τ = 0**!)*
2. **Angular Momentum of a Particle:** **L = r × p**  =>  |L| = m v r sin θ = m v r_⊥.
3. **Rotational Newton's Second Law (Kyun?):**
   dL / dt = d(r × p)/dt = (dr/dt × p) + (r × dp/dt) = (v × mv) + (r × F_net) = 0 + **τ_ext**!
   ```
     τ_ext = dL / dt
   ```
4. **Conservation of Angular Momentum:**
   Jab **τ_ext = 0** (jaise ice skater, diver, planet orbiting Sun under central gravity!):
   **L = constant  ===>  I₁ ω₁ = I₂ ω₂**!

---

## Solved Examples

### Example 1: Cross Product & Torque About the Origin

A force F = (2 î + 3 ĵ - k̂) N acts at position r = (1 î - 2 ĵ + 3 k̂) m. Find the torque τ = r × F about the origin.

**Solution:**
Using determinant formula for r × F:
- x-component: (-2)(-1) - (3)(3) = 2 - 9 = **-7**
- y-component: (3)(2) - (1)(-1) = 6 + 1 = **+7**
- z-component: (1)(3) - (-2)(2) = 3 + 4 = **+7**
So **τ = (-7 î + 7 ĵ + 7 k̂) N m**.

Jaanch:
- Jaanch: Check perpendicularity τ · r = -7(1) + 7(-2) + 7(3) = -7 - 14 + 21 = 0 ✅; τ · F = -14 + 21 - 7 = 0 ✅

---

### Example 2: Angular Momentum of a Particle Moving Along a Straight Line

A 2 kg particle moves along the straight line y = 4 m parallel to the x-axis with constant velocity v = 5 î m/s. Find its angular momentum about the origin!

**Solution:**
Perpendicular distance from origin to the line y = 4 m is **r_⊥ = 4 m** (constant!).
|L| = m v r_⊥ = 2 × 5 × 4 = **40 kg m²/s**.
By right-hand rule (r in 1st quadrant, v along +x => curl clockwise into page): **L = -40 k̂ kg m²/s**.

Jaanch:
- Jaanch: Even straight-line motion has non-zero constant angular momentum about any point NOT on the line! ✅

---

### Example 3: Umapati's Ice Skater (Conservation of Angular Momentum)

An ice skater spins at ω₁ = 2 rad/s with arms stretched out (moment of inertia I₁ = 4.0 kg m²). She pulls her arms in, reducing her moment of inertia to I₂ = 1.6 kg m². Find: (a) her new angular speed ω₂, (b) the ratio of her final to initial rotational kinetic energy.

**Solution:**
- (a) τ_ext = 0 => I₁ ω₁ = I₂ ω₂ => (4.0)(2) = (1.6) ω₂ => **ω₂ = 8 / 1.6 = 5 rad/s**.
- (b) K_rot = (1/2) I ω² = L² / (2 I) ∝ 1 / I:
  K₂ / K₁ = I₁ / I₂ = 4.0 / 1.6 = **2.5** (KE increased 2.5× because her muscles did positive internal work pulling her arms inward!).

Jaanch:
- Jaanch: K₁ = 0.5(4)(4) = 8 J; K₂ = 0.5(1.6)(25) = 20 J; 20 / 8 = 2.5 ✅

---

### Example 4: Wrench Torque at an Angle

A 40 N force is applied at the end of a 0.25 m long wrench at an angle of 30° to the wrench handle. Find the torque produced on the nut.

**Solution:**
τ = r F sin 30° = 0.25 × 40 × (1/2) = **5 N m**.

Jaanch:
- Jaanch: At 90°, max torque would be 10 N m; at 30° it is half (5 N m) ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Torque mein F × r likh dena (r × F ka order palat dena!)
- **Galat:** τ = F × r.
- **Sahi:** Cross product anti-commutative hai! Hamesha **τ = r × F** (position vector **r** pehle, force **F** baad mein)!

### Galti 2: Straight-line motion ka angular momentum hamesha zero bol dena
- **Galat:** Particle ghoom nahi raha, seedhi line par chal raha hai, toh L = 0!
- **Sahi:** L = m v r_⊥ sirf tab 0 hota hai jab line-of-motion origin se guzre (r_⊥ = 0)! Warna L = constant ≠ 0!

### Galti 3: Ice skater ke haath andar kheenchne par KE ko bhi constant maan lena
- **Galat:** Angular momentum L conserved hai toh rotational KE bhi conserved hogi!
- **Sahi:** L constant hai, par **K = L² / (2 I)**! Jab I ghatta hai, toh **K badhta hai** (muscles ke internal work se)!

---

## Quick Recap

- **Cross Product:** |A × B| = AB sin θ; B × A = -(A × B); right-hand thumb rule.
- **Torque:** τ = r × F (|τ| = r F sin θ = F r_⊥); SI unit N m.
- **Angular Momentum:** L = r × p = I ω; **τ_ext = dL / dt**.
- **Conservation:** If τ_ext = 0 => **I₁ ω₁ = I₂ ω₂** (while K = L²/(2I) changes if I changes!).

---

## Practice Questions

### Question 1
Find A × B if A = 3 î + 2 ĵ and B = 2 î + 5 ĵ.

**Solution:**
A × B = (3×5 - 2×2) k̂ = (15 - 4) k̂ = **11 k̂**.

Jaanch:
- Jaanch: 3(5) - 2(2) = 11 ✅

---

### Question 2
Find the torque about the origin produced by force F = 4 ĵ N acting at position r = 3 î m.

**Solution:**
τ = (3 î) × (4 ĵ) = **12 k̂ N m**.

Jaanch:
- Jaanch: î × ĵ = +k̂; 3 × 4 = 12 ✅

---

### Question 3
A 1.5 kg particle moves at 4 m/s along a circle of radius 2 m. Find the magnitude of its angular momentum about the centre of the circle.

**Solution:**
L = m v r = 1.5 × 4 × 2 = **12 kg m²/s**.

Jaanch:
- Jaanch: r ⊥ v on a circle => sin 90° = 1 ✅

---

### Question 4
A turntable of moment of inertia 2 kg m² rotates at 6 rad/s. A 1 kg clay lump is gently dropped vertically onto it at a distance of 1 m from the centre (adding I_clay = m r² = 1 kg m²). Find the new angular speed.

**Solution:**
τ_ext = 0 => I₁ ω₁ = (I₁ + I_clay) ω₂
2 × 6 = (2 + 1) ω₂ => 12 = 3 ω₂ => **ω₂ = 4 rad/s**.

Jaanch:
- Jaanch: Total L = 12 kg m²/s conserved ✅

---

### Question 5
A force of 30 N acts at the edge of a 0.8 m wide door at 90° to the door. Find the torque about the hinges.

**Solution:**
τ = 0.8 × 30 × sin 90° = **24 N m**.

Jaanch:
- Jaanch: 0.8 × 30 = 24 N m ✅

---

### Question 6
If Earth suddenly shrank to half its current radius without losing any mass (so its moment of inertia I = (2/5) M R² becomes 1/4 of its original value), what would be the new length of a day (currently 24 hours)?

**Solution:**
I₁ ω₁ = I₂ ω₂ and ω = 2π / T => I₁ / T₁ = I₂ / T₂ => **T₂ = (I₂ / I₁) T₁**.
T₂ = (1/4) × 24 hours = **6 hours**!

Jaanch:
- Jaanch: Smaller I means 4× faster spin => 1/4th the time period (6 h) ✅

---

### Question 7
Find the area of the parallelogram whose adjacent sides are A = 2 î + 3 ĵ and B = 4 î - ĵ.

**Solution:**
A × B = [2(-1) - 3(4)] k̂ = -14 k̂.
Area = |A × B| = **14 square units**.

Jaanch:
- Jaanch: |-2 - 12| = 14 ✅

---

### Question 8
A 3 kg particle at r = (2 î + 4 ĵ) m has velocity v = 5 î m/s. Find its angular momentum L about the origin.

**Solution:**
p = 3(5 î) = 15 î kg m/s.
L = r × p = (2 î + 4 ĵ) × (15 î) = 60 (ĵ × î) = **-60 k̂ kg m²/s**.

Jaanch:
- Jaanch: r_⊥ = y = 4 m; m v r_⊥ = 3(5)(4) = 60; clockwise => -k̂ ✅

---

### Question 9
The angular momentum of a flywheel changes from 20 kg m²/s to 50 kg m²/s in 5 s. Find the average external torque acting on it.

**Solution:**
τ_avg = ΔL / Δt = (50 - 20) / 5 = 30 / 5 = **6 N m**.

Jaanch:
- Jaanch: 6 × 5 = 30 = 50 - 20 ✅

---

### Question 10
A projectile of mass m is launched at speed u at angle θ. Find the magnitude of its angular momentum about the point of projection when it is at the highest point H.

**Solution:**
At highest point: horizontal speed v = u cos θ; perpendicular distance from origin to horizontal velocity line = **H = u² sin² θ / (2g)**.
L = m v H = **m u³ sin² θ cos θ / (2 g)**.

Jaanch:
- Jaanch: Dimensions: [M][L³ T⁻³] / [L T⁻²] = [M L² T⁻¹] = [L] ✅

---

### Question 11
State whether the following statements are True or False:
(a) If A × B = 0 for two non-zero vectors, they must be perpendicular.
(b) A central force directed always toward the origin produces zero torque about the origin.

**Solution:**
- (a) **False** ❌ — A × B = 0 means sin θ = 0 => **parallel or anti-parallel (0° or 180°)**! (Dot product = 0 means perpendicular.)
- (b) **True** ✅ — r aur F parallel/anti-parallel hain => r × F = 0 (isliye planets ka L conserved rehta hai!).

Jaanch:
- Jaanch: sin 0° = sin 180° = 0 ✅

---

### Question 12
A diver leaves a diving board with angular velocity 1.5 rad/s and I₁ = 3.0 kg m². In mid-air, the diver tucks into a ball with I₂ = 0.75 kg m². Find the tucked angular velocity.

**Solution:**
ω₂ = (I₁ / I₂) ω₁ = (3.0 / 0.75) × 1.5 = 4 × 1.5 = **6.0 rad/s**.

Jaanch:
- Jaanch: 3.0 × 1.5 = 4.5 = 0.75 × 6.0 ✅

---

Torque aur Angular Momentum ab tumhare liye bilkul clear hain!

**Agle topic mein:** Bridge beams, seesaws, couples aur leaning ladders kyun girte nahi — chalo padhte hain [Equilibrium of a Rigid Body & Couples](system-of-particles-and-rotational-motion-part3.md)!
