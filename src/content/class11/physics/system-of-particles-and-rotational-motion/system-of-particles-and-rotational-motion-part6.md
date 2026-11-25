> **Class:** 11 | **Subject:** Physics | **Chapter 6:** System of Particles and Rotational Motion (Part 6)

# Rolling Motion & Rolling Down an Inclined Plane

> **Pichle topic se:** [Kinematics & Dynamics of Rotation](system-of-particles-and-rotational-motion-part5.md) mein humne fixed-axis rotation padha. Par jab cycle ka pahiya sadak par ludhakta hai, toh woh **ghoomta (rotate)** bhi hai aur **aage badhta (translate)** bhi hai — isi combination ko **Rolling Motion** kehte hain!

---

## Girdhari ki Downhill Rolling Race (Sphere vs Disc vs Ring!)

Girdhari ek physics lab mein ek smooth-looking (slightly rough) 30° ramp par same mass aur same radius ke teen objects ek saath rest se chhodta hai:
1. **Solid Sphere** (K²/R² = 2/5 = 0.40)
2. **Solid Disc** (K²/R² = 1/2 = 0.50)
3. **Hollow Ring** (K²/R² = 1 = 1.00)

Kaun sabse pehle neeche pahunchega? **Solid Sphere HAMESHA jeet-ta hai, phir Disc, aur Ring sabse aakhir mein!** Mass aur radius chahe kuch bhi hon, result kabhi nahi badalta! Kyun? Chalo **Pure Rolling** ka physics dekhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Pure Rolling (No Slipping) | Contact point (bottom) ka ground ke respect mein velocity = **0** => **v_cm = ω R** aur **a_cm = α R** |
| Total Rolling KE | Translational KE + Rotational KE: **K = (1/2) M v² + (1/2) I ω² = (1/2) M v² (1 + K² / R²)** |
| Shape Factor (β = K²/R²) | Body ke shape par depend karne wala ratio: Sphere 2/5, Disc 1/2, Hollow Sphere 2/3, Ring 1 |

---

## 1. Velocity of Different Points on a Rolling Wheel

Pure rolling = Pure Translation (har point aage **v_cm**) + Pure Rotation (top aage **+ωR**, bottom peeche **-ωR**).
Kyunki pure rolling mein **v_cm = ω R**:
- **Topmost point:** v_top = v_cm + ω R = **2 v_cm** (centre se DOUBLE speed!)
- **Centre of Mass:** **v_cm**
- **Bottom contact point:** v_bottom = v_cm - ω R = **0** (instantaneous rest — isliye **static friction** lagta hai aur **work done by friction = 0**!)

---

## 2. Total Kinetic Energy & Rolling Down an Incline

### A. Total Rolling Kinetic Energy
K_total = (1/2) M v² + (1/2) (M K²) (v / R)² = **(1/2) M v² ( 1 + K² / R² )**

Notice:
- Fraction in Translation = 1 / (1 + K²/R²)
- Fraction in Rotation = (K²/R²) / (1 + K²/R²)

### B. Speed & Acceleration Rolling Down an Incline (Height h, Angle θ)
Kyunki pure rolling mein static friction **ZERO work** karta hai, mechanical energy conserved rehti hai!
M g h = (1/2) M v² (1 + K² / R²)  =>

```
  Speed at bottom:          v = √( 2 g h / (1 + K² / R²) )
  Acceleration down ramp:   a = g sin θ / (1 + K² / R²)
```

**Why Solid Sphere Always Wins the Race!**
Jiska **K²/R² sabse chhota**, uski kam energy rotation mein kharch hoti hai aur zyada energy forward speed mein jati hai:
- **Solid Sphere** (K²/R² = 2/5): a = **(5/7) g sin θ ≈ 0.714 g sin θ** (1st!)
- **Solid Disc / Cylinder** (K²/R² = 1/2): a = **(2/3) g sin θ ≈ 0.667 g sin θ** (2nd!)
- **Hollow Sphere** (K²/R² = 2/3): a = **(3/5) g sin θ = 0.600 g sin θ** (3rd!)
- **Ring / Hollow Cylinder** (K²/R² = 1): a = **(1/2) g sin θ = 0.500 g sin θ** (Last!)

---

## Solved Examples

### Example 1: Solid Cylinder Rolling on a Flat Floor (KE Split)

A solid cylinder of mass 4 kg rolls without slipping on a flat road with centre-of-mass speed v = 6 m/s. Find: (a) translational KE, (b) rotational KE, (c) total KE.

**Solution:**
For a solid cylinder, K² / R² = 1/2:
- (a) K_trans = (1/2)(4)(36) = **72 J**.
- (b) K_rot = (1/2) K_trans = **36 J**.
- (c) K_total = 72 + 36 = **108 J**.

Jaanch:
- Jaanch: (1/2)(4)(36)(1 + 1/2) = 72 × 1.5 = 108 J ✅

---

### Example 2: Solid Sphere Rolling Down a 30° Incline

A solid sphere rolls without slipping from rest down an inclined plane of angle 30° and vertical height h = 7 m (g = 10 m/s²). Find: (a) its linear acceleration, (b) its speed at the bottom.

**Solution:**
For solid sphere, K² / R² = 2/5 => 1 + K²/R² = 7/5:
- (a) a = g sin 30° / (7/5) = (5 × 5) / 7 = **25 / 7 ≈ 3.57 m/s²**.
- (b) v = √(2 g h / (7/5)) = √(2 × 10 × 7 × 5 / 7) = √100 = **10 m/s**.

Jaanch:
- Jaanch: Ramp length L = 7 / sin 30° = 14 m; v² = 2 a L = 2(25/7)(14) = 100 => v = 10 m/s ✅

---

### Example 3: Rolling Up an Incline (How High Does a Hoop Go?)

A thin hoop (ring) rolling at 10 m/s approaches a 30° inclined plane and rolls up without slipping (g = 10 m/s²). Find the maximum vertical height h it reaches!

**Solution:**
For a ring, K² / R² = 1 => Total KE = (1/2) M v² (1 + 1) = **M v²**!
By energy conservation: M g h = M v² => **h = v² / g** = 100 / 10 = **10 m**!
(Notice: a sliding block at 10 m/s only reaches v²/(2g) = 5 m, whereas a rolling ring has extra rotational KE that lifts it to **10 m**!)

Jaanch:
- Jaanch: K_trans (50 M) + K_rot (50 M) = 100 M = M (10) h => h = 10 m ✅

---

### Example 4: Friction Force During Pure Rolling Down an Incline

Find the static friction force f acting on a 3 kg solid disc rolling without slipping down a 30° incline (g = 10 m/s²).

**Solution:**
For a disc, a = (2/3) g sin 30° = (2/3)(5) = 10/3 m/s².
Along incline: M g sin 30° - f = M a
f = M g sin 30° - M (2/3) g sin 30° = **(1/3) M g sin 30°** = (1/3)(30)(1/2) = **5 N** (up the incline!).

Jaanch:
- Jaanch: Torque check: f R = I α = (1/2) M R² (a / R) => f = (1/2) M a = 0.5(3)(10/3) = 5 N ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Rolling down an incline mein v = √(2 g h) laga dena
- **Galat:** Height h se roll karke neeche aaya toh v = √(2gh)!
- **Sahi:** √(2gh) sirf **sliding (no rotation)** ke liye hai! Rolling mein energy ka kuch hissa rotation mein jata hai, isliye **v = √(2 g h / (1 + K²/R²)) < √(2gh)**!

### Galti 2: Pure rolling mein static friction ka work negative (-f d) maan lena
- **Galat:** Incline par friction upar lag raha hai aur disc neeche ja rahi hai, toh W_f = -f d!
- **Sahi:** Pure rolling mein contact point har instant **rest (v = 0)** par hota hai! Zero velocity of application => **W_friction = 0** (mechanical energy is 100% conserved)!

### Galti 3: Rolling wheel ke sabhi points ki speed v_cm maan lena
- **Galat:** Wheel 10 m/s se chal raha hai toh top aur bottom dono 10 m/s par hain!
- **Sahi:** Centre = 10 m/s, **Top = 20 m/s (2v)**, aur **Bottom = 0 m/s**!

---

## Quick Recap

- **Pure rolling:** v_cm = ω R, a_cm = α R; v_top = 2v, v_bottom = 0; W_friction = 0.
- **Total KE:** K = (1/2) M v² (1 + K²/R²).
- **Incline rolling:** a = g sin θ / (1 + K²/R²); v = √(2gh / (1 + K²/R²)).
- **Downhill race order:** Solid Sphere (5/7) > Solid Disc (2/3) > Hollow Sphere (3/5) > Ring (1/2).

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A bicycle wheel rolls without slipping on a flat road at 8 m/s. Find the instantaneous speeds of: (a) its topmost point, (b) its bottommost point, (c) its centre.

**Solution:**
- (a) Top = 2 v = **16 m/s**.
- (b) Bottom = **0 m/s**.
- (c) Centre = **8 m/s**.

Jaanch:
- Jaanch: v_top = 2v, v_bottom = 0 ✅

---

### Question 2
A solid sphere of mass 5 kg rolls without slipping at 4 m/s. Find its total kinetic energy.

**Solution:**
K²/R² = 2/5 => 1 + K²/R² = 7/5.
K = (1/2)(5)(16)(7/5) = 40 × (7/5) = **56 J**.

Jaanch:
- Jaanch: K_trans = 40 J, K_rot = 16 J; 40 + 16 = 56 J ✅

---

### Question 3
A thin ring rolls without slipping on a level floor. What percentage of its total kinetic energy is rotational?

**Solution:**
K²/R² = 1 => Fraction = 1 / (1 + 1) = 1/2 = **50%**.

Jaanch:
- Jaanch: K_trans = (1/2)Mv² = K_rot ✅

---

### Question 4
A solid disc rolls without slipping from rest down an incline of vertical height 3 m. Find its speed at the bottom.

**Solution:**
1 + K²/R² = 3/2.
v = √(2 × 10 × 3 / (3/2)) = √(60 × 2/3) = √40 = **2 √10 ≈ 6.32 m/s**.

Jaanch:
- Jaanch: (1/2)(3/2)(40) = 30 = g h ✅

---

### Question 5
A hoop (ring) of mass 2 kg rolls without slipping on a flat floor at 3 m/s. How much work is required to stop it?

**Solution:**
K_total = M v² = 2 × 9 = **18 J**.
Work required = **-18 J** (magnitude **18 J**).

Jaanch:
- Jaanch: K_trans (9 J) + K_rot (9 J) = 18 J ✅

---

### Question 6
Find the acceleration of a hollow spherical shell rolling without slipping down a 30° inclined plane.

**Solution:**
K²/R² = 2/3 => 1 + K²/R² = 5/3.
a = g sin 30° / (5/3) = 5 × (3/5) = **3 m/s²**.

Jaanch:
- Jaanch: (3/5) g sin 30° = 0.6 × 5 = 3 m/s² ✅

---

### Question 7
A solid sphere and a thin ring are released from rest at the top of the same incline. Find the ratio of their speeds at the bottom (v_sphere / v_ring).

**Solution:**
v ∝ 1 / √(1 + K²/R²).
v_sphere / v_ring = √(2 / (7/5)) = **√(10 / 7) ≈ 1.195**.

Jaanch:
- Jaanch: Sphere is ~20% faster than the ring at the bottom ✅

---

### Question 8
A solid cylinder rolls up a smooth-grip 30° incline with an initial speed of 6 m/s. Find the maximum vertical height it reaches.

**Solution:**
(1/2) M v² (3/2) = M g h => h = (3/4) v² / g = (3/4)(36) / 10 = 27 / 10 = **2.7 m**.

Jaanch:
- Jaanch: Sliding block would reach 36/20 = 1.8 m; cylinder reaches 1.5 × 1.8 = 2.7 m ✅

---

### Question 9
Find the static friction force acting on a 2 kg ring rolling without slipping down a 30° incline.

**Solution:**
a = (1/2) g sin 30° = 2.5 m/s².
f = M g sin 30° - M a = 10 - 5 = **5 N** (up the incline).

Jaanch:
- Jaanch: For a ring, f = (1/2) M g sin θ = 5 N ✅

---

### Question 10
A car wheel of radius 0.4 m rolls without slipping at 20 m/s. Find its angular velocity ω and the speed of a point on the rim at the same horizontal level as the axle (mid-height).

**Solution:**
- ω = v / R = 20 / 0.4 = **50 rad/s**.
- At mid-height, v_trans = 20 î and v_rot = ±20 ĵ (perpendicular!):
  Speed = √(20² + 20²) = **20 √2 ≈ 28.28 m/s**.

Jaanch:
- Jaanch: Mid-height speed = √2 v_cm (between 0 at bottom and 2v at top) ✅

---

### Question 11
State whether the following statements are True or False:
(a) On an incline, a heavier solid sphere rolls down faster than a lighter solid sphere.
(b) During pure rolling down an incline, friction is static and does zero work.

**Solution:**
- (a) **False** ❌ — a = (5/7) g sin θ mein **mass M aur radius R dono cancel** ho jate hain!
- (b) **True** ✅ — Contact point instantaneously at rest => static friction, zero work!

Jaanch:
- Jaanch: Shape factor K²/R² alone decides the rolling race ✅

---

### Question 12
A solid cylinder of mass 2 kg and radius 0.2 m rolls without slipping at ω = 15 rad/s. Find its total kinetic energy.

**Solution:**
v = ω R = 15 × 0.2 = 3 m/s.
K = (1/2)(2)(9)(3/2) = 9 × 1.5 = **13.5 J**.

Jaanch:
- Jaanch: K_trans = 9 J, K_rot = 4.5 J; sum = 13.5 J ✅

---

Pure rolling aur downhill races ab tumhare liye bilkul crystal clear hain!

**Agle topic mein:** Chapter ke sabhi rotational tools — CM, torque, angular momentum, equilibrium, MI, fixed-axis rotation, aur rolling — ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](system-of-particles-and-rotational-motion-part7.md) mein!
