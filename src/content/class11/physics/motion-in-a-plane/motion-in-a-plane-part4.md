> **Class:** 11 | **Subject:** Physics | **Chapter 3:** Motion in a Plane (Part 4)

# Uniform Circular Motion & Centripetal Acceleration

> **Pichle topic aur pehle ki padhai se:** [Projectile Motion](motion-in-a-plane-part3.md) mein acceleration constant direction (downward) mein tha. Ab hum ek aisa 2D motion dekhenge jisme **speed constant** rehti hai, par velocity ki **direction har pal badalti hai**! (Circular motion ka basic intro tum [Class 10 Moments and Circular Motion](../../../class10/physics/moments-and-circular-motion/moments-and-circular-motion.md) mein dekh chuke ho — yahan hum angular velocity ω aur centripetal acceleration a_c ka exact vector derivation karenge!)

---

## Rajendra ka Velodrome & Centrifuge Test

Rajendra ek velodrome cycling aur lab-centrifuge engineer hai. Ek test rig mein usne ek chhote sensor ko **0.8 m** lambi rassi se baandh kar horizontal circle mein ghumaya — sensor ne **22 seconds** mein exact **14 revolutions** poore kiye!

Rajendra ke junior ne poocha, "Sir, sensor ki speed toh constant **3.2 m/s** hai, toh iska acceleration 0 hua na?" Rajendra ne screen par **12.8 m/s²** dikha kar kaha, "Speed constant hai, **velocity nahi**! Har millisecond rassi use centre ki taraf mod rahi hai — aur yahi hai **Centripetal Acceleration**!"

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Uniform Circular Motion (UCM) | Constant speed v ke saath circular path par motion (speed constant, velocity continuously changing!) |
| Angular Displacement (Δθ) | Radius vector dwara sweep kiya gaya angle (SI unit: **radian**, rad) |
| Angular Velocity (ω) | Angle ghumne ka rate: ω = Δθ / Δt (SI unit: **rad s⁻¹**) |
| Time Period (T) & Frequency (f) | 1 poora chakkar (2π rad) ka time T; 1 second mein chakkaron ki sankhya f = 1/T (Hz) |
| Centripetal Acceleration (a_c) | Direction badalne ke liye hamesha **centre ki taraf** lagne wala acceleration: v² / r = ω² r |
| Tangential Acceleration (a_t) | Non-uniform circular motion mein **speed badalne** wala acceleration (circle ke tangent ke along: dv/dt) |

---

## 1. Angular Quantities & Their Relation to Linear Speed

Radius **r** ke circle par agar particle angle **Δθ** (radians mein) ghoom kar arc length **Δs** chalta hai:
Δs = r Δθ (Topic 1, Units & Measurements se!)

Dono taraf Δt se divide karne par (Δt -> 0):
```
  v = ω r
```

Aur 1 poora revolution = **2π radians** in time **T** (frequency **f = 1 / T**):
```
  ω = 2π / T = 2π f
  v = 2π r / T = 2π r f
```

---

## 2. Derivation of Centripetal Acceleration (a_c = v² / r)

```
            v₂
          <---* P₂
             / \
            /Δθ \ r
           /     \
          O-------* P₁  ^ v₁
              r
```

**Kyun a_c = v² / r aur direction centre ki taraf?**
- Point P₁ se P₂ (chhota angle Δθ) jane par radius vector **r** aur velocity vector **v** dono exact same angle **Δθ** ghoomte hain (kyunki v hamesha r ke perpendicular hai!).
- Isliye position triangle (sides r, r, Δr) aur velocity triangle (sides v, v, Δv) **similar isosceles triangles** bante hain!
- Similar triangles ka ratio:
  |Δv| / v = |Δr| / r  =>  |Δv| = (v / r) |Δr|
- Dono taraf Δt se divide karo aur Δt -> 0 lo (jahan |Δr|/Δt = v):
  **a_c = |Δv| / Δt = (v / r) · v = v² / r**
- Aur v = ω r rakhne par:
  **a_c = ω² r = ω v**
- **Direction:** Chhote Δθ ke liye Δv = v₂ - v₁ seedha **centre O ki taraf** point karta hai! Isliye ise **Centripetal (centre-seeking)** acceleration kehte hain!

---

## 3. Non-Uniform Circular Motion (When Speed Also Changes!)

Agar circle par chalte hue car ki **speed bhi badh ya ghat rahi ho** (jaise circular track par accelerator dabana), toh do perpendicular accelerations ek saath lagte hain:
1. **Centripetal (Radial) acceleration:** a_c = v² / r (centre ki taraf — direction badalta hai)
2. **Tangential acceleration:** a_t = dv / dt (tangent ke along — speed badalta hai)

Kyunki a_c aur a_t ke beech exact **90°** angle hota hai:
```
  Net Acceleration Magnitude:   a_net = √( a_c² + a_t² )
  Angle with radius:            tan φ = a_t / a_c
```

---

## Solved Examples

### Example 1: Rajendra's Whirling Sensor (14 Revolutions in 22 s)

A sensor tied to a 0.8 m string makes 14 revolutions in 22 s in a horizontal circle at constant speed. Taking π = 22/7, find: (a) frequency f, (b) angular velocity ω, (c) linear speed v, (d) centripetal acceleration a_c.

**Solution:**
- (a) f = 14 / 22 = **7/11 Hz**.
- (b) ω = 2π f = 2 × (22/7) × (7/11) = **4 rad/s**.
- (c) v = ω r = 4 × 0.8 = **3.2 m/s**.
- (d) a_c = ω² r = 4² × 0.8 = 16 × 0.8 = **12.8 m/s²** (directed toward the centre).

Jaanch:
- Jaanch: Check via v² / r = (3.2)² / 0.8 = 10.24 / 0.8 = 12.8 m/s² ✅

---

### Example 2: Non-Uniform Circular Motion (Velodrome Speed-Up)

A car moves on a circular track of radius 50 m. At a certain instant, its speed is 10 m/s and its speed is increasing at the rate of 1.5 m/s². Find the magnitude of its net acceleration at that instant.

**Solution:**
- Centripetal acceleration: a_c = v² / r = 10² / 50 = 100 / 50 = **2.0 m/s²**.
- Tangential acceleration: a_t = **1.5 m/s²**.
- Net acceleration: a_net = √(2.0² + 1.5²) = √(4.00 + 2.25) = √6.25 = **2.5 m/s²**.

Jaanch:
- Jaanch: 1.5-2.0-2.5 is a 3-4-5 triangle scaled by 0.5 ✅

---

### Example 3: Angular Speed of a Clock's Second Hand

Find the angular velocity ω and linear speed v of the tip of a 7 cm long second hand of a wall clock. (Take π = 22/7.)

**Solution:**
- Time period of second hand: T = 60 s.
- ω = 2π / T = 2π / 60 = **π / 30 ≈ 0.1047 rad/s**.
- Linear speed v = ω r = (22/7 / 30) × 7 cm = 22 / 30 = **11/15 ≈ 0.733 cm/s**.

Jaanch:
- Jaanch: Circumference = 2πr = 44 cm in 60 s => 44 / 60 = 11/15 cm/s ✅

---

### Example 4: Change in Velocity in Half a Revolution

A cyclist rides on a circular track at a constant speed of 10 m/s. Find the magnitude of the change in velocity |Δv| after completing: (a) half a revolution (180°), (b) one-quarter revolution (90°).

**Solution:**
- (a) Half revolution: v₁ = +10 î, v₂ = -10 î => |Δv| = |-10 - 10| = **20 m/s** (NOT zero!).
- (b) Quarter revolution: v₁ = 10 î, v₂ = 10 ĵ => |Δv| = √(10² + 10²) = **10 √2 ≈ 14.14 m/s**.

Jaanch:
- Jaanch: General formula |Δv| = 2 v sin(θ/2): for 180° => 2(10) sin 90° = 20; for 90° => 2(10) sin 45° = 10√2 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Constant speed dekh kar UCM ka acceleration zero bol dena
- **Galat:** Speed 10 m/s constant hai, toh a = 0!
- **Sahi:** Velocity vector hai — direction badal rahi hai, isliye **a_c = v² / r ≠ 0**! UCM ek **accelerated motion** hai!

### Galti 2: Centripetal acceleration ki direction bahar (outward) dikha dena
- **Galat:** Circle mein ghoomte waqt bahar ki taraf dhakka lagta hai, toh a_c outward hoga.
- **Sahi:** Centripetal acceleration HAMESHA **radially inward (centre ki taraf)** lagta hai — wahi velocity ko andar ki taraf mod kar circle mein rakhta hai!

### Galti 3: Frequency f (rev/s ya rpm) ko seedha ω maan lena
- **Galat:** 5 rev/s hai toh ω = 5 rad/s!
- **Sahi:** 1 revolution = **2π radians**! Hamesha **ω = 2π f** (aur agar rpm mein diya ho toh pehle 60 se divide karke rev/s banao: ω = 2π × rpm / 60)!

---

## Quick Recap

- **Angular velocity:** ω = Δθ / Δt = 2π / T = 2π f (rad/s).
- **Linear–angular link:** v = ω r.
- **Centripetal acceleration:** a_c = v² / r = ω² r = ω v (always toward the centre!).
- **Non-uniform circular motion:** a_net = √(a_c² + a_t²), where a_t = dv / dt.

---

## Practice Questions

### Question 1
A fan blade rotates at 300 rpm (revolutions per minute). Find its angular velocity ω in rad/s.

**Solution:**
f = 300 / 60 = 5 rev/s.
ω = 2π f = 2π (5) = **10π ≈ 31.4 rad/s**.

Jaanch:
- Jaanch: 5 revolutions per second × 2π rad/rev = 10π rad/s ✅

---

### Question 2
A car travels around a circular curve of radius 100 m at a constant speed of 20 m/s. Find its centripetal acceleration.

**Solution:**
a_c = v² / r = 20² / 100 = 400 / 100 = **4 m/s²** (toward the centre).

Jaanch:
- Jaanch: ω = v/r = 0.2 rad/s; ω²r = 0.04 × 100 = 4 m/s² ✅

---

### Question 3
An insect trapped in a circular groove of radius 12 cm moves along the groove steadily and completes 7 revolutions in 100 s. Find its angular speed and linear speed. (Take π = 22/7.)

**Solution:**
- ω = 2π (7 / 100) = 2 × (22/7) × (7/100) = **0.44 rad/s**.
- v = ω r = 0.44 × 12 cm = **5.28 cm/s** (0.0528 m/s).

Jaanch:
- Jaanch: 7 × 2π(12) / 100 = 7 × (44/7) × 12 / 100 = 528 / 100 = 5.28 cm/s ✅

---

### Question 4
Find the ratio of the angular speeds of the minute hand and the hour hand of a standard clock.

**Solution:**
- T_min = 1 hour; T_hour = 12 hours.
- ω_min / ω_hour = (2π / T_min) / (2π / T_hour) = T_hour / T_min = **12 : 1**.

Jaanch:
- Jaanch: Minute hand 12 ghante mein 12 chakkar lagati hai jabki hour hand sirf 1 chakkar => 12 : 1 ✅

---

### Question 5
A stone tied to a 1 m string is whirled in a circle with constant angular speed 5 rad/s. Find its linear speed and centripetal acceleration.

**Solution:**
- v = ω r = 5 × 1 = **5 m/s**.
- a_c = ω² r = 25 × 1 = **25 m/s²**.

Jaanch:
- Jaanch: v² / r = 25 / 1 = 25 m/s² ✅

---

### Question 6
A cyclist moves on a circular track of radius 40 m with speed 20 m/s and decelerates tangentially at 7.5 m/s². Find the magnitude of the cyclist's net acceleration.

**Solution:**
- a_c = 20² / 40 = 400 / 40 = 10 m/s².
- a_t = -7.5 m/s² (magnitude 7.5 m/s²).
- a_net = √(10² + 7.5²) = √(100 + 56.25) = √156.25 = **12.5 m/s²**.

Jaanch:
- Jaanch: 7.5-10-12.5 is a 3-4-5 triangle scaled by 2.5 ✅

---

### Question 7
An aircraft executes a horizontal loop of radius 1 km (1000 m) with a steady speed of 900 km/h. Compare its centripetal acceleration with g (10 m/s²).

**Solution:**
v = 900 × (5/18) = 250 m/s.
a_c = 250² / 1000 = 62,500 / 1000 = **62.5 m/s²**.
Ratio a_c / g = 62.5 / 10 = **6.25 g**.

Jaanch:
- Jaanch: 250 × 250 = 62,500; divide by 1000 => 62.5 m/s² ✅

---

### Question 8
Two racing cars of masses m₁ and m₂ move in circles of radii r₁ and r₂ respectively. Their speeds are such that each completes one full circle in the same time T. Find the ratio of their angular speeds ω₁ / ω₂ and linear speeds v₁ / v₂.

**Solution:**
- Since T₁ = T₂ = T: ω₁ = 2π/T = ω₂ => **ω₁ / ω₂ = 1 : 1**.
- Linear speed v = ω r => **v₁ / v₂ = r₁ / r₂**.

Jaanch:
- Jaanch: Same time mein bada circle (bada r) cover karne ke liye speed r ke proportional honi chahiye ✅

---

### Question 9
A particle moves in a circle of radius 2 m at constant speed 4 m/s. What is the magnitude of the change in velocity as it moves through an angle of 60°?

**Solution:**
Using |Δv| = 2 v sin(θ / 2):
|Δv| = 2 × 4 × sin 30° = 8 × (1/2) = **4 m/s**.

Jaanch:
- Jaanch: Equal vectors (4 m/s each) at 60° have difference magnitude equal to 4 m/s (Topic 1 Ex 3!) ✅

---

### Question 10
A centrifuge rotor of radius 0.10 m spins at 6000 rpm. Find its centripetal acceleration in terms of π² (in m/s²).

**Solution:**
f = 6000 / 60 = 100 rev/s => ω = 2π(100) = 200π rad/s.
a_c = ω² r = (200π)² × 0.10 = 40,000 π² × 0.10 = **4000 π² m/s²** (≈ 3.95 × 10⁴ m/s²!).

Jaanch:
- Jaanch: (200)² = 40,000; × 0.1 = 4,000 ✅

---

### Question 11
State whether the following statements are True or False:
(a) In uniform circular motion, the velocity vector is constant.
(b) In uniform circular motion, the acceleration vector is always perpendicular to the velocity vector.

**Solution:**
- (a) **False** ❌ — Speed constant hai, par velocity ki direction har instant badalti hai!
- (b) **True** ✅ — Velocity tangent ke along hoti hai aur a_c radius ke along centre ki taraf => angle hamesha 90°!

Jaanch:
- Jaanch: Radius aur tangent circle par hamesha perpendicular hote hain ✅

---

### Question 12
A wheel of radius 0.5 m starts from rest and accelerates tangentially at 2 m/s². Find its net acceleration at t = 1 s.

**Solution:**
- At t = 1 s: speed v = 0 + a_t t = 2(1) = 2 m/s.
- Centripetal acceleration: a_c = v² / r = 4 / 0.5 = 8 m/s².
- Net acceleration: a_net = √(8² + 2²) = √(64 + 4) = √68 = **2 √17 ≈ 8.25 m/s²**.

Jaanch:
- Jaanch: a_c = 8, a_t = 2 => √(64 + 4) = √68 ✅

---

Circular motion ki har gear aur formula ab tumhare haath mein hai!

**Agle topic mein:** Chapter ke sabhi 2D tools — vectors, river-boat, rain-man, projectiles, aur circular motion — ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](motion-in-a-plane-part5.md) mein!
