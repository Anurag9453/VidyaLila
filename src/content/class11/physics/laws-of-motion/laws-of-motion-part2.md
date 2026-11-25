> **Class:** 11 | **Subject:** Physics | **Chapter 4:** Laws of Motion (Part 2)

# Newton's Third Law, Impulse & Conservation of Linear Momentum

> **Pichle topic se:** [Inertia, Momentum & Newton's First and Second Laws](laws-of-motion.md) mein humne dekha ki F_net = dp/dt hota hai. Ab dekhenge ki forces hamesha **jodon (pairs)** mein kyun aate hain, chhote time mein bada force (**Impulse**) kaise kaam karta hai, aur jab koi bahari force na ho toh total momentum hamesha **conserved** kyun rehta hai!

---

## Kamlakar ka Cricket Catch & Gun Recoil Test

Kamlakar ek sports-safety aur ballistics analyst hai. Usne ek high-speed sensor se dekha:
- **0.15 kg** ki cricket ball **20 m/s** se aa rahi thi (momentum **3.0 kg m/s**).
- Jab fielder ne haath seedha rakha aur ball **0.01 s** mein ruki, toh haath par **300 N** ka jhatka laga!
- Par jab wicketkeeper ne haath peeche kheench kar catching time **0.10 s** (10 guna!) badha diya, toh wahi momentum change **3.0 kg m/s** rokne mein force sirf **30 N** reh gaya!

Yehi hai **Impulse** ka jaadu — aur isi ke saath Newton's Third Law humein **Conservation of Momentum** deta hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Action–Reaction Pair | Do equal aur opposite forces jo **do ALAG bodies** par ek hi samay lagte hain: F_AB = -F_BA |
| Impulse (J) | Force aur chhote time interval ka product: **J = F_avg Δt = Δp** (SI unit: **N s** = kg m s⁻¹) |
| Impulsive Force | Bahut bada force jo bahut chhote time ke liye lagta hai (jaise bat se ball hit hona, collision) |
| Isolated System | Aisa system jis par **net external force F_ext = 0** ho |
| Conservation of Linear Momentum | Isolated system ka total vector momentum hamesha constant rehta hai: **p_initial = p_final** |

---

## 1. Newton's Third Law of Motion

> **Newton's Third Law:** To every action, there is always an equal and opposite reaction:
> **F_AB = - F_BA**

**3 Zaroori Baatein:**
1. Action aur reaction **HAMESHA do alag bodies** par lagte hain — isliye woh ek hi body par cancel nahi hote!
2. Dono **same instant** par paida aur khatam hote hain (koi delay nahi!).
3. Dono **same nature** ke hote hain (normal ke saath normal, gravity ke saath gravity, friction ke saath friction).

---

## 2. Impulse & the Impulse–Momentum Theorem

Newton's Second Law se: F = Δp / Δt  =>  **F Δt = Δp**

```
  Impulse  J = F_avg × Δt = p_final - p_initial = m (v - u)
```

- **Graph se:** **Force–Time (F–t) graph ka area = Impulse (J) = Change in momentum (Δp)!**
- **Wicketkeeper / Car Airbag Trick:** Fixed Δp ke liye, agar stopping time **Δt badha do**, toh impact force **F = Δp / Δt kam** ho jata hai!

---

## 3. Law of Conservation of Linear Momentum

**Kyun?**
Maan lo do bodies A aur B takrate hain (no external force).
Third Law se: F_AB = -F_BA.
Collision time Δt se multiply karne par:
F_AB Δt = -F_BA Δt  =>  Δp_A = -Δp_B  =>  Δ(p_A + p_B) = 0!

```
  If F_ext = 0:    m₁ u₁ + m₂ u₂  =  m₁ v₁ + m₂ v₂
```

**Applications:** Gun recoil, bomb explosion into fragments, rocket propulsion, collisions!

---

## Solved Examples

### Example 1: Kamlakar's Cricket Catch (Impulse & Force)

A cricket ball of mass 0.15 kg moving at 20 m/s is caught and brought to rest in 0.1 s. Find: (a) the impulse imparted to the ball, (b) the average force exerted by the hands.

**Solution:**
- (a) J = Δp = m (v - u) = 0.15 (0 - 20) = **-3.0 N s** (magnitude **3.0 N s**).
- (b) F_avg = |J| / Δt = 3.0 / 0.1 = **30 N**.

Jaanch:
- Jaanch: Agar Δt = 0.01 s hota toh F = 3.0 / 0.01 = 300 N (10× zyada chot!) ✅

---

### Example 2: Elastic Rebound of a Ball (Watch the Sign!)

A batsman hits back a 0.15 kg ball straight in the direction of the bowler without changing its initial speed of 12 m/s. Find the impulse imparted to the ball.

**Solution:**
Let initial direction (toward batsman) be +x: u = +12 m/s, v = -12 m/s.
J = m (v - u) = 0.15 (-12 - 12) = 0.15 (-24) = **-3.6 N s** (magnitude **3.6 N s**, toward the bowler).

Jaanch:
- Jaanch: 2 m v = 2(0.15)(12) = 3.6 N s (NOT zero!) ✅

---

### Example 3: Recoil Velocity of a Rifle

A bullet of mass 0.05 kg is fired with a speed of 400 m/s from a rifle of mass 5 kg. Find the recoil velocity of the rifle.

**Solution:**
Initial total momentum = 0 (both at rest).
By conservation of momentum:
m_b v_b + M_g v_g = 0
(0.05)(400) + 5 v_g = 0  =>  20 + 5 v_g = 0  =>  **v_g = -4 m/s** (4 m/s backward!).

Jaanch:
- Jaanch: Bullet momentum = +20 kg m/s; Rifle momentum = 5 × (-4) = -20 kg m/s; Sum = 0 ✅

---

### Example 4: Impulse from a Triangular Force–Time (F–t) Graph

A 2 kg block initially at rest is hit by a force whose F–t graph is a triangle with base from t = 0 to t = 0.4 s and peak force F_max = 50 N. Find the final velocity of the block.

**Solution:**
- Impulse J = Area of F–t triangle = (1/2) × base × height = (1/2) × 0.4 × 50 = **10 N s**.
- Since J = Δp = m v - 0 => 10 = 2 v => **v = 5 m/s**.

Jaanch:
- Jaanch: Average force = 25 N over 0.4 s => 25 × 0.4 = 10 N s => v = 10/2 = 5 m/s ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Action aur Reaction ko ek hi body par cancel kar dena
- **Galat:** Ghoda gaadi ko aage kheenchta hai aur gaadi ghode ko peeche kheenchti hai — dono equal aur opposite hain, toh gaadi kabhi hil hi nahi sakti!
- **Sahi:** Action **gaadi** par lagta hai aur reaction **ghode** par! Gaadi sirf apne upar lagne wale forces (ghode ka pull vs zameen ka friction) ke karan chalti hai.

### Galti 2: Rebound mein Δp = m(v - v) = 0 likh dena
- **Galat:** Ball 12 m/s se aayi aur 12 m/s se wapas gayi, toh momentum change 0!
- **Sahi:** Velocity vector hai! +12 se -12 jaane par change **(-12) - (+12) = -24 m/s** (2v) hota hai!

### Galti 3: External force hote hue bhi momentum conserve kar dena
- **Galat:** Free fall mein girte hue stone ka momentum constant rehta hai.
- **Sahi:** Gravity ek external force hai — isliye stone ka momentum badhta hai! (Momentum tab conserve hota jab Earth + Stone dono ko ek system maano!)

---

## Quick Recap

- **Third Law:** F_AB = -F_BA (different bodies, simultaneous, same nature).
- **Impulse:** J = F_avg Δt = Δp = Area under F–t graph.
- **Momentum Conservation:** If F_ext = 0, total vector momentum **Σp = constant** (gun recoil, explosions, collisions).

---

## Practice Questions

### Question 1
A 0.2 kg hockey ball moving at 15 m/s is struck by a stick and returns along the same path at 25 m/s. Find the magnitude of impulse imparted to the ball.

**Solution:**
u = +15 m/s, v = -25 m/s.
|J| = 0.2 × |-25 - 15| = 0.2 × 40 = **8 N s**.

Jaanch:
- Jaanch: 0.2 × 40 = 8 N s ✅

---

### Question 2
A shell of mass 0.02 kg is fired by a gun of mass 100 kg with a muzzle speed of 80 m/s. Find the recoil speed of the gun.

**Solution:**
M v_g = m v_s => 100 v_g = 0.02 × 80 = 1.6 => **v_g = 0.016 m/s (1.6 cm/s)**.

Jaanch:
- Jaanch: 100 × 0.016 = 1.6 = 0.02 × 80 ✅

---

### Question 3
A 10 kg bomb at rest explodes into two pieces of masses 4 kg and 6 kg. If the 6 kg piece moves at 12 m/s East, find the velocity of the 4 kg piece.

**Solution:**
4 v₁ + 6(12) = 0 => 4 v₁ = -72 => **v₁ = -18 m/s (18 m/s West)**.

Jaanch:
- Jaanch: 4(-18) + 6(12) = -72 + 72 = 0 ✅

---

### Question 4
A 4 kg trolley moving at 6 m/s collides and sticks to a stationary 2 kg trolley on a smooth track. Find their common velocity after collision.

**Solution:**
m₁ u₁ + 0 = (m₁ + m₂) v => 4(6) = 6 v => **v = 4 m/s**.

Jaanch:
- Jaanch: Initial p = 24 kg m/s; final p = 6 × 4 = 24 kg m/s ✅

---

### Question 5
A hammer of mass 1 kg moving at 10 m/s strikes a nail and stops in 0.005 s. Find the average force exerted on the nail.

**Solution:**
J = 1 × 10 = 10 N s.
F_avg = 10 / 0.005 = **2000 N**.

Jaanch:
- Jaanch: 2000 × 0.005 = 10 N s ✅

---

### Question 6
A 5 kg body starts from rest and is acted upon by a force whose F–t graph is a rectangle of height 20 N from t = 0 to 3 s, followed by a triangle dropping to 0 N at t = 5 s. Find its final speed.

**Solution:**
Area = Rectangle (20 × 3 = 60) + Triangle ((1/2) × 2 × 20 = 20) = **80 N s**.
v = J / m = 80 / 5 = **16 m/s**.

Jaanch:
- Jaanch: 60 + 20 = 80; 80 / 5 = 16 m/s ✅

---

### Question 7
A 60 kg person jumps horizontally from a stationary 120 kg boat onto a dock with a speed of 3 m/s. Ignoring water resistance, find the recoil speed of the boat.

**Solution:**
60(3) + 120 v_b = 0 => 120 v_b = -180 => **v_b = -1.5 m/s** (1.5 m/s away from dock).

Jaanch:
- Jaanch: 120 × 1.5 = 180 = 60 × 3 ✅

---

### Question 8
A 3 kg bomb at rest explodes into three equal 1 kg fragments. Two fragments fly off perpendicular to each other at 12 m/s (East) and 16 m/s (North). Find the speed of the third fragment.

**Solution:**
p₁ = 12 î, p₂ = 16 ĵ.
By 2D momentum conservation: p₁ + p₂ + p₃ = 0 => p₃ = -(12 î + 16 ĵ).
|p₃| = √(12² + 16²) = √400 = 20 kg m/s.
Speed v₃ = 20 / 1 = **20 m/s**.

Jaanch:
- Jaanch: 12-16-20 (3-4-5 × 4) triple ✅

---

### Question 9
A 0.5 kg ball hits a rigid wall at 10 m/s making an angle of 60° with the normal to the wall, and rebounds at the same speed and angle. Find the magnitude of impulse imparted by the wall.

**Solution:**
Component parallel to wall doesn't change; component normal to wall reverses from +u cos 60° to -u cos 60°!
|J| = 2 m u cos 60° = 2 (0.5) (10) (1/2) = **5 N s**.

Jaanch:
- Jaanch: cos 60° = 0.5; 2 × 0.5 × 10 × 0.5 = 5 N s ✅

---

### Question 10
A car of mass 800 kg moving at 10 m/s collides head-on with a truck of mass 1200 kg moving in the opposite direction at 5 m/s, and they lock together. Find their common velocity after collision.

**Solution:**
p_initial = 800(10) + 1200(-5) = 8000 - 6000 = +2000 kg m/s.
Total mass = 2000 kg => v = 2000 / 2000 = **+1 m/s** (in the car's initial direction).

Jaanch:
- Jaanch: Final momentum = 2000 × 1 = +2000 kg m/s ✅

---

### Question 11
State whether the following statements are True or False:
(a) Action and reaction forces always act on the same body.
(b) For a given change in momentum, increasing the time of impact reduces the average impact force.

**Solution:**
- (a) **False** ❌ — Action aur reaction hamesha **do alag bodies** par lagte hain.
- (b) **True** ✅ — F_avg = Δp / Δt, toh bada Δt => chhota F_avg (airbags aur cricket catch!).

Jaanch:
- Jaanch: Core statements of Third Law and Impulse-Momentum Theorem ✅

---

### Question 12
A 2 kg ball moving at +8 m/s receives an impulse of -20 N s along the same line. Find its final velocity.

**Solution:**
J = m (v - u) => -20 = 2 (v - 8) => v - 8 = -10 => **v = -2 m/s** (2 m/s in opposite direction).

Jaanch:
- Jaanch: Δp = 2(-2 - 8) = -20 N s ✅

---

Third Law aur Impulse ab tumhare pocket mein hain!

**Agle topic mein:** Asli mechanics ka sabse important skill — **Free-Body Diagrams (FBD)**, accelerating lifts, aur pulley-block systems — chalo padhte hain [Equilibrium, Free-Body Diagrams & Connected Bodies](laws-of-motion-part3.md)!
