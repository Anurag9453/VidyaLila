> **Class:** 11 | **Subject:** Physics | **Chapter 3:** Motion in a Plane (Part 3)

# Projectile Motion

> **Pichle topic se:** [2D Motion with Constant Acceleration & 2D Relative Velocity](motion-in-a-plane-part2.md) mein humne seekha ki 2D motion ke x aur y components bilkul independent hote hain. **Projectile Motion** iska sabse classic example hai: x-axis par **zero acceleration (a_x = 0)** aur y-axis par **sirf gravity (a_y = -g)**!

---

## Janki ka Stadium Javelin & Football Launch Grid

Janki ek sports-biomechanics analyst hai. Usne ek football launch machine se ball ko **20 m/s** ki speed se horizontal se **30°** par kick kiya (g = 10 m/s²). High-speed camera ne dikhaya:
- Horizontal speed **u_x = 20 cos 30° = 10√3 m/s** poore flight mein bilkul change nahi hui!
- Vertical speed **u_y = 20 sin 30° = 10 m/s** gravity ke under pehle 0 hui (highest point **5 m** par, t = 1 s) aur phir ground par -10 m/s ho gayi (t = 2 s).
- Ball total **20√3 ≈ 34.64 m** door giri. Jab Janki ne angle badha kar **45°** kiya, toh ball **40 m** (maximum possible range!) tak gayi!

Chalo projectile motion ke sabhi formulas ekdam crystal-clear derive karte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Projectile | Koi bhi object jise hawa mein launch karke sirf gravity ke bharose chhod diya jaye (air resistance ignored) |
| Angle of Projection (θ) | Initial velocity u ka horizontal (+x) ke saath banaya gaya angle |
| Trajectory | Projectile dwara hawa mein banaya gaya rasta (ek **Parabola**!) |
| Time of Flight (T) | Launch se wapas ground par girne tak ka total hawa mein bitaya gaya time |
| Maximum Height (H) | Trajectory ka sabse ooncha point (jahan v_y = 0, par v_x = u cos θ zinda rehta hai!) |
| Horizontal Range (R) | Launch point se landing point tak ki total horizontal doori |

---

## 1. Ground-to-Ground Projectile: Breaking Into x and y

Initial velocity **u** at angle **θ** with horizontal:
- **Horizontal (x-axis):** u_x = u cos θ, **a_x = 0**  =>  v_x = u cos θ (constant!), **x = (u cos θ) t**
- **Vertical (y-axis):** u_y = u sin θ, **a_y = -g**  =>  v_y = u sin θ - g t, **y = (u sin θ) t - (1/2) g t²**

```
  y (height)
  ^              * Highest point: v_y = 0, v_x = u cos θ
  :          *       *
  :       *             *
  :     *        H        *
  :   *                     *
  0 *-------------------------*---> x (Range R)
   u, θ
```

### Equation of Trajectory (Proof that Path is a Parabola!)
x = (u cos θ) t se **t = x / (u cos θ)** nikal kar y ke equation mein rakho:
y = (u sin θ) [x / (u cos θ)] - (1/2) g [x / (u cos θ)]²
=> **y = x tan θ - (g x²) / (2 u² cos² θ)**

Yeh **y = a x - b x²** (quadratic in x) ka roop hai — isliye projectile ka rasta hamesha ek **Parabola** hota hai!

---

## 2. The Big Three Formulas (T, H, R)

1. **Time of Flight (T):** Landing par y = 0 => 0 = (u sin θ) T - (1/2) g T²:
   **T = (2 u sin θ) / g**  (Time to top = T/2 = u sin θ / g)

2. **Maximum Height (H):** Highest point par v_y = 0 => 0 = (u sin θ)² - 2 g H:
   **H = (u² sin² θ) / (2 g)**

3. **Horizontal Range (R):** R = u_x × T = (u cos θ) × (2 u sin θ / g) = u² (2 sin θ cos θ) / g:
   **R = (u² sin 2θ) / g**

### Two Golden Range Facts:
- **Maximum Range (R_max):** sin 2θ max = 1 jab 2θ = 90° => **θ = 45°**!
  **R_max = u² / g** (aur us waqt H = R_max / 4!).
- **Complementary Angles (θ aur 90° - θ):** Since sin 2(90° - θ) = sin(180° - 2θ) = sin 2θ, **same speed u se 30° aur 60° (ya 37° aur 53°) par phenkne par SAME horizontal range R milti hai!**

---

## 3. Horizontal Projection from a Height h

Agar kisi height **h** (cliff ya tower) se ball ko **seedha horizontally** speed **u** se phenka jaye (θ = 0°):
- u_x = u, a_x = 0  =>  **x = u t**
- u_y = 0, a_y = +g (downward positive)  =>  h = (1/2) g t²  =>  **t = √(2h / g)**
- Horizontal range from foot of tower: **R = u √(2h / g)**
- Impact velocity: v_x = u, v_y = g t = √(2gh)  =>  **v = √(u² + 2gh)**

*(Dekho: Girne ka time t = √(2h/g) sirf height h par depend karta hai — horizontal speed u chahe 0 ho ya 500 m/s, dono balls exact SAME time par zameen chhooti hain!)*

---

## Solved Examples

### Example 1: Janki's 30° and 45° Football Launches

A football is kicked from the ground at u = 20 m/s (g = 10 m/s²).
(a) For θ = 30°, find T, H, and R.
(b) Find the maximum possible range at the same speed.

**Solution:**
**(a) θ = 30° (sin 30° = 1/2, sin 60° = √3 / 2):**
- T = 2(20)(1/2) / 10 = **2 s**.
- H = 20² (1/2)² / (2 × 10) = 400(1/4) / 20 = **5 m**.
- R = 20² sin 60° / 10 = 40 (√3 / 2) = **20 √3 ≈ 34.64 m**.

**(b) Maximum range (at θ = 45°):**
- R_max = u² / g = 400 / 10 = **40 m**.

Jaanch:
- Jaanch: Check R = u_x × T = (20 × √3/2) × 2 = 20√3 m; R_max = 40 m > 34.64 m ✅

---

### Example 2: Horizontal Throw from a 45 m Cliff

A stone is thrown horizontally at 15 m/s from the top of a 45 m high cliff (g = 10 m/s²). Find: (a) time to hit the ground, (b) horizontal distance from the cliff base, (c) speed on impact.

**Solution:**
- (a) t = √(2h / g) = √(90 / 10) = √9 = **3 s**.
- (b) R = u × t = 15 × 3 = **45 m**.
- (c) v_x = 15 m/s; v_y = g t = 10 × 3 = 30 m/s.
  Speed = √(15² + 30²) = √(225 + 900) = √1125 = **15 √5 ≈ 33.54 m/s**.

Jaanch:
- Jaanch: v = √(u² + 2gh) = √(225 + 900) = 15√5 m/s ✅

---

### Example 3: Velocity & Speed at the Highest Point

A cricket ball is hit at 40 m/s at an angle of 60° to the horizontal. Find its speed and acceleration at the highest point of its trajectory.

**Solution:**
At the highest point, v_y = 0, so the velocity is purely horizontal:
- Speed = v_x = u cos 60° = 40 × (1/2) = **20 m/s**.
- Acceleration = **g = 10 m/s² vertically downward** (never zero!).

Jaanch:
- Jaanch: Highest point par v_x aur a (downward) ke beech exact 90° angle hota hai ✅

---

### Example 4: Angle Where Range Equals Maximum Height

At what angle of projection θ is the horizontal range R equal to the maximum height H?

**Solution:**
Set R = H:
(u² sin 2θ) / g = (u² sin² θ) / (2 g)
2 sin θ cos θ = sin² θ / 2
Divide by sin θ cos θ (since θ ≠ 0, 90°):
2 = (1/2) tan θ  =>  **tan θ = 4** (θ ≈ **76°**).

Jaanch:
- Jaanch: Useful general identity: R tan θ = 4 H! Jab R = H ho, toh tan θ = 4 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Highest point par projectile ki velocity ko zero (0) bol dena
- **Galat:** Ball sabse upar pahunch gayi toh uski speed 0 ho gayi!
- **Sahi:** Sirf vertical velocity **v_y = 0** hoti hai! Horizontal velocity **v_x = u cos θ** abhi bhi chal rahi hai (warna ball wahin se seedhi neeche gir jati, aage nahi!).

### Galti 2: Horizontal motion mein bhi gravity g laga dena
- **Galat:** x = (u cos θ) t - (1/2) g t².
- **Sahi:** Gravity sirf vertically neeche lagti hai! Horizontal mein **a_x = 0**, isliye hamesha **x = (u cos θ) t**.

### Galti 3: Cliff ya tower se phenke gaye projectile mein R = u² sin 2θ / g laga dena
- **Galat:** 45 m cliff se phenke gaye stone ki range ke liye R = u² sin 2θ / g laga dena.
- **Sahi:** R = u² sin 2θ / g **SIRF** tab lagta hai jab launch aur landing **same level (ground-to-ground)** par hon! Cliff/tower ke liye hamesha pehle y-equation se time t nikalo, phir R = u_x × t!

---

## Quick Recap

- **x-motion:** u_x = u cos θ, a_x = 0, x = (u cos θ) t.
- **y-motion:** u_y = u sin θ, a_y = -g, y = (u sin θ) t - (1/2) g t².
- **Ground-to-ground:** T = 2u sin θ / g; H = u² sin² θ / (2g); R = u² sin 2θ / g.
- **Key relations:** R_max = u² / g at 45°; R tan θ = 4 H; same R for θ and (90° - θ).
- **Horizontal from height h:** t = √(2h/g); R = u √(2h/g).

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A projectile is fired at 40 m/s at an angle of 30° with the horizontal. Find its time of flight, maximum height, and horizontal range.

**Solution:**
- T = 2(40)(1/2) / 10 = **4 s**.
- H = 1600 (1/4) / 20 = **20 m**.
- R = 1600 (√3 / 2) / 10 = **80 √3 ≈ 138.6 m**.

Jaanch:
- Jaanch: u_x × T = (20√3)(4) = 80√3 m ✅

---

### Question 2
A cricketer can throw a ball to a maximum horizontal distance of 100 m. How high above the ground can the cricketer throw the same ball vertically upward?

**Solution:**
R_max = u² / g = 100 m.
Vertically upward (θ = 90°): H_vertical = u² / (2g) = R_max / 2 = **50 m**.

Jaanch:
- Jaanch: u² = 1000 => H = 1000 / 20 = 50 m ✅

---

### Question 3
A marble rolls off the edge of a table 1.25 m high with a horizontal speed of 4 m/s. How far from the base of the table does it hit the floor?

**Solution:**
t = √(2 × 1.25 / 10) = √(0.25) = **0.5 s**.
R = u × t = 4 × 0.5 = **2.0 m**.

Jaanch:
- Jaanch: (1/2)(10)(0.5²) = 1.25 m; 4 × 0.5 = 2.0 m ✅

---

### Question 4
A ball is projected at 50 m/s at an angle of 53° with the horizontal (sin 53° = 4/5, cos 53° = 3/5). Find its velocity vector at t = 2 s.

**Solution:**
- u_x = 50(3/5) = 30 m/s (constant => v_x = 30 m/s).
- u_y = 50(4/5) = 40 m/s => v_y(2) = 40 - 10(2) = 20 m/s.
So **v(2) = (30 î + 20 ĵ) m/s**.

Jaanch:
- Jaanch: t_top = 40/10 = 4 s, toh t = 2 s par ball abhi upar ja rahi hai (v_y = +20 > 0) ✅

---

### Question 5
Two projectiles are launched with the same speed u at angles 30° and 60° respectively. Find the ratio of their: (a) horizontal ranges, (b) maximum heights.

**Solution:**
- (a) 30° + 60° = 90° (complementary) => R₁ / R₂ = **1 : 1**.
- (b) H ∝ sin² θ => H₁ / H₂ = sin² 30° / sin² 60° = (1/4) / (3/4) = **1 : 3**.

Jaanch:
- Jaanch: H₁ / H₂ = tan² 30° = 1/3 ✅

---

### Question 6
Find the angle of projection θ for which the horizontal range R is equal to 4 times the maximum height H.

**Solution:**
Using R tan θ = 4 H and substituting R = 4 H:
(4 H) tan θ = 4 H => tan θ = 1 => **θ = 45°**.

Jaanch:
- Jaanch: At 45°, R = u²/g aur H = u²/(4g) => R = 4H ✅

---

### Question 7
The trajectory of a projectile is given by y = √3 x - 5 x² (x, y in metres, g = 10 m/s²). Find the angle of projection θ and initial speed u.

**Solution:**
Compare with y = x tan θ - (g / (2 u² cos² θ)) x²:
- tan θ = √3 => **θ = 60°** (cos 60° = 1/2, cos² 60° = 1/4).
- g / (2 u² cos² 60°) = 5 => 10 / (2 u² (1/4)) = 5 => 20 / u² = 5 => u² = 4 => **u = 2 m/s**.

Jaanch:
- Jaanch: 10 / (2 × 4 × 0.25) = 10 / 2 = 5 ✅

---

### Question 8
A shell is fired horizontally from a cannon on an 80 m tall hill at 60 m/s. Find the time of flight and the horizontal distance covered before hitting the plain below.

**Solution:**
- t = √(2 × 80 / 10) = √16 = **4 s**.
- R = 60 × 4 = **240 m**.

Jaanch:
- Jaanch: (1/2)(10)(16) = 80 m; 60 × 4 = 240 m ✅

---

### Question 9
A ball is thrown at 20 m/s at 45° to the horizontal. What is its speed at the highest point of its flight?

**Solution:**
Speed at highest point = v_x = u cos 45° = 20 / √2 = **10 √2 ≈ 14.14 m/s**.

Jaanch:
- Jaanch: (10√2)² = 200 = (20)² / 2 ✅

---

### Question 10
A projectile has a time of flight of 6 s and a horizontal range of 120 m. Find its initial velocity components u_x and u_y.

**Solution:**
- T = 2 u_y / g = 6 => u_y = 6 × 10 / 2 = **30 m/s**.
- R = u_x × T = 120 => u_x = 120 / 6 = **20 m/s**.

Jaanch:
- Jaanch: T = 2(30)/10 = 6 s; R = 20 × 6 = 120 m ✅

---

### Question 11
State whether the following statements are True or False:
(a) The speed of a projectile is minimum at the highest point of its trajectory.
(b) A bullet fired horizontally and another dropped from rest from the same height hit the level ground at the same time (ignoring air resistance).

**Solution:**
- (a) **True** ✅ — Speed = √(v_x² + v_y²), jo tab minimum hoti hai jab v_y = 0 (highest point)!
- (b) **True** ✅ — Dono ka initial vertical velocity u_y = 0 aur a_y = g same hai, isliye t = √(2h/g) bilkul same!

Jaanch:
- Jaanch: Independence of horizontal and vertical motion confirms (b) ✅

---

### Question 12
A football is kicked with speed 30 m/s at 30° above the horizontal. Find the horizontal and vertical coordinates (x, y) of the ball at t = 1 s.

**Solution:**
- u_x = 30 cos 30° = 15 √3 m/s => x(1) = **15 √3 ≈ 25.98 m**.
- u_y = 30 sin 30° = 15 m/s => y(1) = 15(1) - 5(1²) = **10 m**.

Jaanch:
- Jaanch: t_top = 1.5 s (H = 11.25 m), toh t = 1 s par ball 10 m height par hai (< 11.25 m) ✅

---

Ab hawa mein udte hue har projectile ka poora parabola tumhare control mein hai!

**Agle topic mein:** Parabola se gol ghoomne ki duniya mein chalte hain — [Uniform Circular Motion & Centripetal Acceleration](motion-in-a-plane-part4.md)!
