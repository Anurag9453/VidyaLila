> **Class:** 11 | **Subject:** Physics | **Chapter 4:** Laws of Motion (Part 4)

# Friction: Static, Kinetic, Rolling & Rough Inclined Planes

> **Pichle topic se:** [Equilibrium, Free-Body Diagrams & Connected Bodies](laws-of-motion-part3.md) mein humne smooth surfaces par Normal aur Tension ke saath FBDs banaye. Ab hum asli duniya ka sabse zaroori contact force add karenge — **Friction** — jo chalne, brake lagane, aur cheezon ko pakadne ko possible banata hai!

---

## Rambabu ka Warehouse-Ramp & Tyre-Grip Test

Rambabu ek warehouse-ramp aur tyre-grip testing technician hai. Usne ek **5 kg** metal crate ko rough floor (μ_s = 0.4, μ_k = 0.3, g = 10 m/s²) par rakha. Limiting (max static) friction **20 N** tha.
- Jab Rambabu ne **12 N** ka dhakka diya, toh crate hila hi nahi — aur friction **20 N nahi**, balki sirf **12 N** laga!
- Jab usne **25 N** ka dhakka diya, toh crate phisalne laga — aur friction gir kar kinetic value **15 N** par aa gaya, jisse crate **2 m/s²** se accelerate hua!

Chalo static, kinetic aur rolling friction ke is clever self-adjusting behavior ko poori tarah samajhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Friction (f) | Do surfaces ke beech **relative slipping (ya slipping ki tendency)** ka virodh karne wala tangential contact force |
| Static Friction (f_s) | Jab surfaces ruki hon (no slipping) — yeh **self-adjusting** hota hai: 0 ≤ f_s ≤ μ_s N |
| Limiting Friction (f_s,max) | Static friction ki maximum possible value, slipping shuru hone ke theek pehle: **f_s,max = μ_s N** |
| Kinetic Friction (f_k) | Slipping shuru hone ke baad lagne wala constant friction: **f_k = μ_k N** (hamesha μ_k < μ_s!) |
| Rolling Friction | Pahiye (wheel/ball) ke ludhakne par lagne wala bahut chhota friction (μ_r << μ_k << μ_s) |
| Angle of Friction (λ) | Net contact force (N aur f_s,max ka resultant) ka Normal N ke saath angle: **tan λ = μ_s** |
| Angle of Repose (α) | Rough inclined plane ka woh minimum angle jis par rakha block khud phisalna shuru kar de: **tan α = μ_s** |

---

## 1. Static vs Kinetic Friction Graph

```
  Friction f
  ^         * Limiting friction f_s,max = μ_s N
  :        / \
  :  f = F/   \_________ Kinetic friction f_k = μ_k N (constant)
  :      /
  :     /  (Static region: block at rest, f_s = F_applied)
  0 ---+---------------------------------------------> Applied Force F
```

**Golden 2-Step Rule for Friction Problems:**
1. Pehle **N** nikalo, aur max static friction **f_max = μ_s N** calculate karo.
2. Driving force **F** ko **f_max** se compare karo:
   - Agar **F ≤ f_max**: block **Nahi hilega (a = 0)** aur **f_static = F** (NOT μ_s N!).
   - Agar **F > f_max**: block **phislega**, friction **f_k = μ_k N** lagega, aur **a = (F - f_k) / m**!

---

## 2. Angle of Repose & Motion on a Rough Inclined Plane

Angle **θ** wale rough inclined plane par mass **m** rakha hai:
- Along the plane (downward): **m g sin θ**
- Perpendicular to the plane: **N = m g cos θ** (NOT mg!)
- Limiting friction: **f_max = μ_s N = μ_s m g cos θ**

Block tab phisalna shuru karega jab m g sin θ = μ_s m g cos θ  =>  **tan θ = μ_s**!
Isi critical angle ko **Angle of Repose (α)** kehte hain (**tan α = μ_s = tan λ**).

### Acceleration on a Rough Incline (when sliding, θ > α):
- **Sliding DOWN:** a = (m g sin θ - μ_k m g cos θ) / m = **g (sin θ - μ_k cos θ)**
- **Sliding UP** (projected upward — friction ALSO acts downward!):
  a = **-g (sin θ + μ_k cos θ)**

---

## Solved Examples

### Example 1: Rambabu's 5 kg Crate (Static vs Kinetic Check!)

A 5 kg block rests on a rough horizontal floor with μ_s = 0.4 and μ_k = 0.3 (g = 10 m/s²). Find the friction force and acceleration when a horizontal force of: (a) 12 N, (b) 25 N is applied.

**Solution:**
Normal reaction N = m g = 5 × 10 = 50 N.
- Limiting friction: f_max = μ_s N = 0.4 × 50 = **20 N**.
- Kinetic friction: f_k = μ_k N = 0.3 × 50 = **15 N**.

**(a) Applied force F = 12 N:**
Since 12 N < 20 N, block remains at rest (**a = 0**) and static friction adjusts to **f = 12 N**!

**(b) Applied force F = 25 N:**
Since 25 N > 20 N, block slides => kinetic friction **f = 15 N**!
a = (25 - 15) / 5 = 10 / 5 = **2 m/s²**.

Jaanch:
- Jaanch: (a) f = 12 N balances F = 12 N (a = 0); (b) 25 - 15 = 10 = 5(2) ✅

---

### Example 2: Block Sliding Down a Rough 37° Incline

A 4 kg block is released on a rough inclined plane of angle 37° (sin 37° = 3/5, cos 37° = 4/5) with μ_s = 0.3 and μ_k = 0.25 (g = 10 m/s²). Does it slide? If yes, find its acceleration.

**Solution:**
- tan 37° = 3/4 = 0.75 > μ_s (0.3) => **Yes, it slides!**
- a = g (sin 37° - μ_k cos 37°) = 10 (3/5 - 0.25 × 4/5) = 10 (0.6 - 0.2) = **4 m/s²**.

Jaanch:
- Jaanch: Driving force = 40(0.6) = 24 N; N = 40(0.8) = 32 N; f_k = 0.25(32) = 8 N; a = (24 - 8)/4 = 4 m/s² ✅

---

### Example 3: Holding a Block Against a Vertical Wall

A 2 kg block is pressed horizontally against a rough vertical wall (μ_s = 0.5, g = 10 m/s²). What minimum horizontal pushing force F is needed to prevent the block from falling?

**Solution:**
Wall ke perpendicular pushing force hi **Normal reaction N = F** banata hai!
To prevent falling: f_max ≥ m g => μ_s F ≥ m g
0.5 F ≥ 2 × 10 = 20 => **F_min = 40 N**.

Jaanch:
- Jaanch: At F = 40 N, N = 40 N => f_max = 0.5 × 40 = 20 N = weight ✅

---

### Example 4: Stopping Distance of a Skidding Car

A car moving at 20 m/s locks its brakes on a level road with μ_k = 0.5 (g = 10 m/s²). Find its stopping distance.

**Solution:**
Deceleration a = f_k / m = μ_k g = 0.5 × 10 = 5 m/s².
d_s = u² / (2 a) = 20² / (2 × 5) = 400 / 10 = **40 m**.

Jaanch:
- Jaanch: Stopping time t = 20/5 = 4 s; avg speed = 10 m/s => 10 × 4 = 40 m ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Static friction ko hamesha μ_s N ke barabar likh dena
- **Galat:** f_max = 20 N hai aur applied force 12 N hai, toh net force = 12 - 20 = -8 N (block peeche chalne lagega!).
- **Sahi:** Friction kabhi khud se motion shuru nahi kar sakta! Jab F < f_max ho, static friction sirf **f = F (12 N)** lagta hai!

### Galti 2: Yeh sochna ki friction hamesha motion ko rokta hai
- **Galat:** Friction always opposes motion.
- **Sahi:** Friction **relative slipping** ka virodh karta hai, motion ka nahi! Jab tum chalte ho ya car accelerate hoti hai, toh zameen ka **forward static friction** hi tumhe aage dhakelta hai!

### Galti 3: Inclined plane par N = m g le lena
- **Galat:** Inclined plane par f = μ m g.
- **Sahi:** Inclined plane par surface ke perpendicular sirf **N = m g cos θ** hota hai => **f = μ m g cos θ**!

---

## Quick Recap

- **Static:** 0 ≤ f_s ≤ μ_s N (self-adjusting!); **Kinetic:** f_k = μ_k N (μ_k < μ_s); **Rolling:** μ_r << μ_k.
- **Angle of friction = Angle of repose:** tan λ = tan α = μ_s.
- **Rough incline:** Sliding down a = g(sin θ - μ_k cos θ); sliding up a = -g(sin θ + μ_k cos θ).

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 10 kg box rests on a rough floor with μ_s = 0.5 and μ_k = 0.4. Find the friction force when pulled horizontally with: (a) 30 N, (b) 60 N.

**Solution:**
N = 100 N => f_max = 50 N, f_k = 40 N.
- (a) 30 N < 50 N => at rest, **f = 30 N**.
- (b) 60 N > 50 N => slides, **f = 40 N** (with a = 2 m/s²).

Jaanch:
- Jaanch: (a) static self-adjusts to 30 N; (b) kinetic constant at 40 N ✅

---

### Question 2
A block just begins to slide down an inclined plane when the angle of inclination reaches 30°. Find the coefficient of static friction μ_s.

**Solution:**
Angle of repose α = 30° => μ_s = tan 30° = **1 / √3 ≈ 0.577**.

Jaanch:
- Jaanch: m g sin 30° = μ_s m g cos 30° => μ_s = tan 30° ✅

---

### Question 3
A 6 kg block slides on a rough floor (μ_k = 0.2) with an initial speed of 10 m/s. How far does it travel before stopping?

**Solution:**
Deceleration a = μ_k g = 0.2 × 10 = 2 m/s².
s = u² / (2a) = 100 / 4 = **25 m**.

Jaanch:
- Jaanch: t = 10/2 = 5 s; avg speed = 5 m/s => 5 × 5 = 25 m ✅

---

### Question 4
A 4 kg block is pushed against a rough vertical wall (μ_s = 0.4) by a horizontal force F. Find the minimum value of F to hold the block in place.

**Solution:**
μ_s F = m g => 0.4 F = 40 => **F = 100 N**.

Jaanch:
- Jaanch: f_max = 0.4 × 100 = 40 N = weight ✅

---

### Question 5
A block is projected **up** a rough 37° incline (sin 37° = 3/5, cos 37° = 4/5) with μ_k = 0.5 and initial speed 10 m/s. Find its deceleration and the distance it climbs up the incline before stopping.

**Solution:**
- Going up, both gravity and friction act downward:
  a = g (sin 37° + μ_k cos 37°) = 10 (0.6 + 0.5 × 0.8) = 10 (0.6 + 0.4) = **10 m/s²** (downward).
- Distance climbed: s = u² / (2a) = 100 / 20 = **5 m**.

Jaanch:
- Jaanch: 0.6 + 0.4 = 1.0 => a = g = 10 m/s²; 10² / 20 = 5 m ✅

---

### Question 6
A 5 kg block on a rough horizontal table (μ_k = 0.2) is connected via a smooth edge pulley to a hanging 3 kg block. Find the acceleration of the system and tension in the string.

**Solution:**
- Friction on 5 kg block: f_k = 0.2 × 50 = 10 N.
- Driving force = 30 N (hanging) - 10 N (friction) = 20 N; Total mass = 8 kg.
- a = 20 / 8 = **2.5 m/s²**.
- Tension (from hanging 3 kg): 30 - T = 3(2.5) = 7.5 => **T = 22.5 N**.

Jaanch:
- Jaanch: Table 5 kg: T - f_k = 22.5 - 10 = 12.5 = 5(2.5) ✅

---

### Question 7
A rear-open truck accelerates at 2 m/s² with a 40 kg crate resting on its floor (μ_s = 0.15). Will the crate slip backward? If yes, find its acceleration relative to the truck.

**Solution:**
Max static friction acceleration on crate = μ_s g = 0.15 × 10 = 1.5 m/s².
Since truck acceleration (2 m/s²) > 1.5 m/s², **yes, the crate slips backward!**
Relative backward acceleration = 2 - 1.5 = **0.5 m/s²** (using μ_k ≈ μ_s = 0.15).

Jaanch:
- Jaanch: Max forward friction on crate = 60 N => a_crate = 1.5 m/s² < 2 m/s² ✅

---

### Question 8
A 2 kg block is pulled on a rough floor (μ_k = 0.5) by a 20 N force directed at 37° above the horizontal (sin 37° = 3/5, cos 37° = 4/5). Find its horizontal acceleration.

**Solution:**
- Vertical: N + 20 sin 37° = 20 => N + 12 = 20 => **N = 8 N**.
- Friction: f_k = 0.5 × 8 = **4 N**.
- Horizontal: F_x = 20 cos 37° = 16 N => a = (16 - 4) / 2 = **6 m/s²**.

Jaanch:
- Jaanch: Upward pull component 12 N reduced Normal from 20 N to 8 N, cutting friction to 4 N ✅

---

### Question 9
Find the angle of friction λ for a surface with μ_s = √3.

**Solution:**
tan λ = μ_s = √3 => **λ = 60°**.

Jaanch:
- Jaanch: tan 60° = √3 ✅

---

### Question 10
A block of mass 3 kg rests on a rough floor (μ_s = 0.4). What is the magnitude of the **total contact force** (resultant of Normal and Friction) exerted by the floor when the block is just about to slide?

**Solution:**
N = 30 N; f_max = 0.4 × 30 = 12 N.
Total contact force R = √(N² + f_max²) = √(900 + 144) = √1044 = **6 √29 ≈ 32.31 N**.

Jaanch:
- Jaanch: N √(1 + μ_s²) = 30 √(1.16) ≈ 32.31 N ✅

---

### Question 11
State whether the following statements are True or False:
(a) Rolling friction is generally much smaller than sliding (kinetic) friction.
(b) Friction depends strongly on the apparent area of contact between two solid surfaces.

**Solution:**
- (a) **True** ✅ — Isliye bhari gaadiyon mein wheels aur ball bearings lagaye jate hain!
- (b) **False** ❌ — Amontons' law ke mutabik friction f = μ N sirf Normal force aur surface nature par depend karta hai, apparent area par nahi.

Jaanch:
- Jaanch: Classic laws of dry friction confirmed ✅

---

### Question 12
A heavy chain of length L lies on a rough horizontal table with coefficient of static friction μ_s. What maximum fraction of its length can hang over the edge without slipping?

**Solution:**
Let hanging length be x (mass m_hang ∝ x) and on-table length be (L - x) (mass m_table ∝ L - x).
At limiting equilibrium: m_hang g = μ_s m_table g
x = μ_s (L - x) => x (1 + μ_s) = μ_s L => **x / L = μ_s / (1 + μ_s)**.

Jaanch:
- Jaanch: If μ_s = 1, max hanging fraction = 1/2 (half the chain!) ✅

---

Friction ka poora rahasya ab tumhare samne khul chuka hai!

**Agle topic mein:** Friction aur Normal force milkar cars ko curved mountain roads par kaise ghumate hain aur roller coaster vertical loop mein kyun nahi girta — chalo padhte hain [Dynamics of Circular Motion, Banking of Roads & Vertical Circle](laws-of-motion-part5.md)!
