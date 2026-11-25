> **Class:** 11 | **Subject:** Physics | **Chapter 6:** System of Particles and Rotational Motion (Part 4)

# Moment of Inertia, Radius of Gyration & Axes Theorems

> **Pichle topic se:** [Equilibrium of a Rigid Body](system-of-particles-and-rotational-motion-part3.md) mein humne static balance dekha. Ab jab body ghoomne lage, toh use ghumana kitna mushkil hai? Yeh sirf mass par nahi, balki **mass axis se kitni door faila hai** us par depend karta hai — aur isi ko **Moment of Inertia (I)** kehte hain!

---

## Amarnath ka Flywheel Design Test

Amarnath ek flywheel-manufacturing engineer hai. Uske paas exact **same mass (10 kg)** aur **same radius (0.5 m)** ke do pahiye hain:
- Pehla: ek **solid flat disc** (mass centre se rim tak barabar faila hai) -> **I = (1/2) M R² = 1.25 kg m²**.
- Doosra: ek **hollow ring** (saara mass rim par, axis se door!) -> **I = M R² = 2.50 kg m²**!

Same mass hone ke bawajood ring ko ghumana (ya rokna) disc se **2 guna mushkil** hai! Isliye engines mein energy store karne ke liye flywheels ka zyada mass **rim (bahar)** par rakha jata hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Moment of Inertia (I) | Rotational inertia: **I = Σ mᵢ rᵢ²** (SI unit: **kg m²**; mass + mass distribution + axis of rotation par depend karta hai!) |
| Radius of Gyration (K) | Woh effective distance jahan agar poora mass M rakh diya jaye toh same I mile: **I = M K² => K = √(I / M)** |
| Perpendicular Axes Theorem | **SIRF 2D planar lamina** (flat sheet) ke liye: **I_z = I_x + I_y** (x, y sheet ke plane mein, z perpendicular!) |
| Parallel Axes Theorem | **Kisi bhi 2D ya 3D body** ke liye: **I = I_cm + M d²** (parallel axis jo CM se distance d door ho!) |

---

## 1. Master Table of Moment of Inertia (Standard Bodies)

*(Integration se derive kiye gaye standard results — inhe yaad rakhna aur axes theorems se naye axes par shift karna seekho!)*

| Body (Mass M) | Axis Passing Through CM | Moment of Inertia (I_cm) | K² / R² |
|---|---|---|---|
| **Thin Ring / Hollow Cylinder** (radius R) | Central axis ⊥ to plane | **M R²** | 1 |
| **Uniform Disc / Solid Cylinder** (radius R) | Central axis ⊥ to plane | **(1/2) M R²** | 1/2 |
| **Solid Sphere** (radius R) | Any diameter | **(2/5) M R²** | 2/5 |
| **Hollow Spherical Shell** (radius R) | Any diameter | **(2/3) M R²** | 2/3 |
| **Thin Uniform Rod** (length L) | Midpoint ⊥ to rod | **(1/12) M L²** | — |
| **Thin Uniform Rod** (length L) | One end ⊥ to rod | **(1/3) M L²** | — |

---

## 2. Two Superpower Theorems (Zero Integration Needed!)

### A. Perpendicular Axes Theorem (Flat 2D Lamina ONLY!)
Agar flat sheet xy-plane mein hai aur z-axis uske perpendicular (teeno axes ek hi point par milein):
```
  I_z = I_x + I_y
```
- **Example (Ring about a diameter):** By symmetry I_x = I_y = I_diam, aur I_z = M R² => 2 I_diam = M R² => **I_diam(Ring) = (1/2) M R²**!
- **Example (Disc about a diameter):** 2 I_diam = (1/2) M R² => **I_diam(Disc) = (1/4) M R²**!

### B. Parallel Axes Theorem (ANY 2D or 3D Body!)
Agar CM se guzarne wale axis par MI = **I_cm** hai, toh uske parallel **d** door axis par:
```
  I = I_cm + M d²
```
- **Example (Rod about one end, d = L/2):** I = (1/12) M L² + M (L/2)² = (1/12 + 1/4) M L² = **(1/3) M L²**!
- **Example (Solid Sphere about a tangent, d = R):** I = (2/5) M R² + M R² = **(7/5) M R²**!

---

## Solved Examples

### Example 1: Discrete 4-Particle Square System

Four point masses of 2 kg each are fixed at the four corners of a massless square frame of side 2 m. Find the moment of inertia about an axis passing through the centre perpendicular to the square.

**Solution:**
Distance of each corner from centre: r = half-diagonal = (2√2) / 2 = √2 m => r² = 2 m².
I = 4 × (m r²) = 4 × 2 × 2 = **16 kg m²**.

Jaanch:
- Jaanch: Radius of gyration K = √(16 / 8) = √2 m (matches corner distance r!) ✅

---

### Example 2: Disc About a Tangent in Its Own Plane

Find the moment of inertia and radius of gyration of a uniform disc of mass M = 4 kg and radius R = 0.5 m about a tangent **lying in the plane of the disc**.

**Solution:**
1. First, by Perpendicular Axes Theorem, MI about a diameter: I_diam = (1/4) M R².
2. Now shift parallel by d = R to a tangent in the plane (Parallel Axes Theorem):
   I_tangent = I_diam + M R² = (1/4) M R² + M R² = **(5/4) M R²**.
3. Substitute M = 4 kg, R = 0.5 m:
   I = (5/4)(4)(0.25) = **1.25 kg m²**.
4. Radius of gyration: K = √(I / M) = √(5/4) R = (√5 / 2)(0.5) = **√5 / 4 ≈ 0.559 m**.

Jaanch:
- Jaanch: About tangent ⊥ to plane it would be (1/2 + 1) MR² = (3/2) MR²; in-plane tangent is (5/4) MR² ✅

---

### Example 3: Hollow Sphere About a Tangent

Find the moment of inertia of a thin hollow spherical shell of mass 3 kg and radius 2 m about a tangent to its surface.

**Solution:**
I_cm (diameter) = (2/3) M R².
By Parallel Axes Theorem (d = R):
I_tangent = (2/3) M R² + M R² = **(5/3) M R²** = (5/3)(3)(4) = **20 kg m²**.

Jaanch:
- Jaanch: 2/3 + 1 = 5/3; 5 × 4 = 20 kg m² ✅

---

### Example 4: Two Joined Rods (T-Shape or End-to-End)

Two identical thin rods, each of mass 3 kg and length 2 m, are joined end-to-end to form a single 4 m rod. Find the MI about an axis through the joint perpendicular to the rod.

**Solution:**
The joint is at one end of EACH rod!
I = I_rod1(end) + I_rod2(end) = (1/3) M L² + (1/3) M L² = (2/3) M L² = (2/3)(3)(4) = **8 kg m²**.

Jaanch:
- Jaanch: Check as one big rod of mass 2M = 6 kg and length 2L = 4 m about its midpoint: (1/12)(6)(16) = 96/12 = 8 kg m² ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: 3D bodies (jaise Solid Sphere) par Perpendicular Axes Theorem laga dena
- **Galat:** Sphere ke liye I_z = I_x + I_y => (2/5)MR² = (2/5)MR² + (2/5)MR²!
- **Sahi:** Perpendicular Axes Theorem **SIRF 2D flat planar sheets (lamina)** ke liye valid hai — 3D spheres ya cylinders par KABHI nahi!

### Galti 2: Parallel Axes Theorem mein I_cm ke bajaye kisi bhi arbitrary axis se shift kar dena
- **Galat:** Rod ke end se doosre end par jane ke liye I_end2 = I_end1 + M L²!
- **Sahi:** Parallel Axes Theorem mein pehla term **HAMESHA Centre of Mass wala axis (I_cm)** hona chahiye!

### Galti 3: Solid Sphere (2/5) aur Hollow Sphere (2/3) ko ulta yaad kar lena
- **Galat:** Solid sphere = (2/3) MR² aur hollow = (2/5) MR².
- **Sahi:** Hollow sphere mein saara mass **bahar surface (r = R)** par hota hai, isliye uska I **BADA (2/3 = 0.67)** hota hai aur solid sphere ka **CHHOTA (2/5 = 0.40)**!

---

## Quick Recap

- **MI:** I = Σ mᵢ rᵢ² = M K² (kg m²).
- **Standard I_cm:** Ring MR², Disc (1/2)MR², Solid Sphere (2/5)MR², Hollow Sphere (2/3)MR², Rod (1/12)ML².
- **Perpendicular Axes (2D lamina ONLY):** I_z = I_x + I_y.
- **Parallel Axes (ANY body):** I = I_cm + M d² (must start from CM!).

---

## Practice Questions

### Question 1
Three masses 1 kg, 2 kg, and 3 kg lie along the x-axis at x = 0, 1 m, and 2 m respectively. Find the moment of inertia about the y-axis (x = 0).

**Solution:**
I = 1(0²) + 2(1²) + 3(2²) = 0 + 2 + 12 = **14 kg m²**.

Jaanch:
- Jaanch: 2 + 12 = 14 kg m² ✅

---

### Question 2
Find the radius of gyration of a uniform solid sphere of radius 10 cm about a diameter.

**Solution:**
I = (2/5) M R² = M K² => K = √(2/5) R = √0.4 × 10 cm ≈ **6.32 cm**.

Jaanch:
- Jaanch: K < R (6.32 cm < 10 cm) ✅

---

### Question 3
Find the moment of inertia of a uniform ring of mass 2 kg and radius 0.5 m about a tangent perpendicular to its plane.

**Solution:**
I_cm = M R²; by Parallel Axes Theorem: I = M R² + M R² = 2 M R² = 2(2)(0.25) = **1.0 kg m²**.

Jaanch:
- Jaanch: 2 × 2 × 0.25 = 1.0 kg m² ✅

---

### Question 4
Find the moment of inertia of a uniform solid sphere of mass 5 kg and radius 1 m about a tangent to its surface.

**Solution:**
I = (2/5) M R² + M R² = (7/5) M R² = (7/5)(5)(1²) = **7 kg m²**.

Jaanch:
- Jaanch: 2/5 + 1 = 7/5; 7/5 × 5 = 7 kg m² ✅

---

### Question 5
A uniform thin rod has mass 6 kg and length 2 m. Find its moment of inertia about an axis perpendicular to the rod passing through a point 0.5 m from one end.

**Solution:**
Midpoint is at 1.0 m, so distance from CM is d = 1.0 - 0.5 = 0.5 m.
I_cm = (1/12)(6)(2²) = 2 kg m².
I = I_cm + M d² = 2 + 6(0.25) = 2 + 1.5 = **3.5 kg m²**.

Jaanch:
- Jaanch: Between I_cm (2) and I_end (8) => 3.5 kg m² ✅

---

### Question 6
Find the moment of inertia of a uniform ring of mass 4 kg and radius 1 m about a tangent **in the plane** of the ring.

**Solution:**
I_diam = (1/2) M R²; shifting by d = R: I = (1/2) M R² + M R² = (3/2) M R² = (3/2)(4)(1) = **6 kg m²**.

Jaanch:
- Jaanch: 1/2 + 1 = 3/2; 1.5 × 4 = 6 kg m² ✅

---

### Question 7
Two equal point masses m are connected by a light rigid rod of length L. Find the moment of inertia of the dumbbell about an axis perpendicular to the rod passing through its midpoint.

**Solution:**
Each mass is at distance L/2: I = m (L/2)² + m (L/2)² = **(1/2) m L²**.

Jaanch:
- Jaanch: 1/4 + 1/4 = 1/2 ✅

---

### Question 8
A uniform square plate of mass M and side a has I_x = (1/12) M a² about an axis in its plane parallel to a side through the centre. Using the Perpendicular Axes Theorem, find I_z perpendicular to the plate through its centre.

**Solution:**
By symmetry I_y = I_x = (1/12) M a².
I_z = I_x + I_y = (1/12 + 1/12) M a² = **(1/6) M a²**.

Jaanch:
- Jaanch: Planar lamina => Perpendicular Axes Theorem applies cleanly ✅

---

### Question 9
What is the ratio of the radius of gyration of a circular disc to that of a circular ring of the same radius R, both about their central perpendicular axes?

**Solution:**
K_disc = R / √2; K_ring = R.
Ratio K_disc / K_ring = **1 : √2**.

Jaanch:
- Jaanch: √(1/2) / √1 = 1 / √2 ✅

---

### Question 10
A uniform disc of mass 4 kg and radius 1 m has a 2 kg point mass glued to its rim. Find the total moment of inertia about the central axis perpendicular to the disc.

**Solution:**
I_total = I_disc + I_point = (1/2)(4)(1²) + 2(1²) = 2 + 2 = **4 kg m²**.

Jaanch:
- Jaanch: Moments of inertia about the same axis add algebraically: 2 + 2 = 4 kg m² ✅

---

### Question 11
State whether the following statements are True or False:
(a) Moment of inertia of a rigid body is a fixed constant independent of the chosen axis of rotation.
(b) Among all parallel axes, the moment of inertia is minimum about the axis passing through the Centre of Mass.

**Solution:**
- (a) **False** ❌ — Axis badalne par rᵢ badalta hai, isliye I bhi badal jata hai!
- (b) **True** ✅ — I = I_cm + M d² mein M d² ≥ 0 always, toh minimum tab hota hai jab d = 0 (at CM)!

Jaanch:
- Jaanch: Direct consequence of Parallel Axes Theorem ✅

---

### Question 12
Find the moment of inertia of a solid cylinder of mass 8 kg and radius 0.5 m about its own symmetry axis.

**Solution:**
Solid cylinder = stack of discs => I = (1/2) M R² = (1/2)(8)(0.25) = **1.0 kg m²**.

Jaanch:
- Jaanch: 4 × 0.25 = 1.0 kg m² ✅

---

Moment of Inertia aur dono Axes Theorems ab tumhari pocket mein hain!

**Agle topic mein:** Rotational equations of motion aur **τ = I α** lagakar heavy pulleys aur spinning wheels solve karenge — [Kinematics & Dynamics of Rotation About a Fixed Axis](system-of-particles-and-rotational-motion-part5.md)!
