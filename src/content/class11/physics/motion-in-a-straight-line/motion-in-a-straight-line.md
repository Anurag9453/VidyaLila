> **Class:** 11 | **Subject:** Physics | **Chapter 2:** Motion in a Straight Line

# Position, Path Length, Displacement & Velocity

> **Pichle chapter aur pehle ki padhai se:** [Units and Measurements](../units-and-measurements/units-and-measurements-part6.md) mein humne length (m) aur time (s) ko sahi units aur precision ke saath naapna seekha. Distance, displacement aur speed ka basic introduction tum [Class 9 Motion](../../../class9/physics/motion/motion.md) mein dekh chuke ho — yahan hum use strict 1D coordinate system aur instantaneous rate-of-change ke level par le ja rahe hain!

---

## Kanak ka Metro Test-Track Run

Kanak ek metro-rail test-track engineer hai. Usne seedhe 1D track par origin **O** (x = 0 m) mark kiya. Ek test shuttle **O (0 m)** se chal kar **18 s** mein station **P (+360 m)** pahunchi, aur phir reverse hokar **6 s** mein station **Q (+240 m)** par ruk gayi.

Track monitor par do numbers chamke:
- Total chala gaya rasta (path length): **480 m**
- Origin se net position change (displacement): **+240 m**

Isse average speed aayi **20 m/s**, par average velocity sirf **+10 m/s**! Dono mein itna bada farq kyun aaya? Chalo seedhi line mein motion (1D kinematics) ki poori bhasha samajhte hain.

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Frame of Reference | Ek chosen origin O aur coordinate axis (jaise x-axis) jiske respect mein position aur motion naape jate hain |
| Position Coordinate (x) | Origin se object ki signed location (+x right/east, -x left/west) |
| Path Length (Distance) | Object dwara chala gaya total actual rasta — scalar hai, hamesha ≥ 0 |
| Displacement (Δx) | Final position minus initial position: Δx = x₂ - x₁ — vector (1D mein + ya - sign ke saath) |
| Average Velocity (v_avg) | Total displacement divided by total time: Δx / Δt |
| Average Speed | Total path length divided by total time |
| Instantaneous Velocity (v) | Kisi ek exact pal (t) par velocity — shrinking time interval Δt -> 0 par Δx / Δt ka limit (dx / dt) |

---

## 1. Position, Path Length vs Displacement

Seedhi line (x-axis) par agar object time t₁ par position x₁ par hai aur time t₂ par position x₂ par:

```
  Origin O (0 m)                Q (+240 m)          P (+360 m)
  ----*-----------------------------*------------------*----> +x
      :<--------- +360 m (O to P) -------------------->|
                                    :<--- -120 m (P to Q)
      :<--- Net Displacement +240 m --->|
```

- **Path Length (Distance):** |+360| + |-120| = **480 m** (direction palatne par bhi distance hamesha judta hai).
- **Displacement:** Δx = x_final - x_initial = +240 - 0 = **+240 m**.

**Zaroori Relation:**
Hamesha **Distance ≥ |Displacement|**.
Equality (Distance = |Displacement|) sirf tab hoti hai jab object **bina direction badle** seedhi line mein chalta rahe!

---

## 2. Average Velocity vs Average Speed

- **Average Velocity:** v_avg = (x₂ - x₁) / (t₂ - t₁) = Δx / Δt
- **Average Speed:** Total Distance / Total Time

Kyunki Distance ≥ |Displacement|, isliye hamesha:
**Average Speed ≥ |Average Velocity|**

### Do Super-Useful Special Cases of Average Speed

1. **Equal Distances (d each) at speeds v₁ and v₂:**
   Total distance = 2d; Total time = d/v₁ + d/v₂ = d(v₁ + v₂) / (v₁ v₂).
   Therefore:
   **v_avg = 2 v₁ v₂ / (v₁ + v₂)** (Harmonic Mean!)

2. **Equal Time Intervals (t each) at speeds v₁ and v₂:**
   Total distance = v₁ t + v₂ t = (v₁ + v₂) t; Total time = 2t.
   Therefore:
   **v_avg = (v₁ + v₂) / 2** (Arithmetic Mean!)

**Kyun?**
Equal distance mein slow speed wale hisse mein **zyada waqt** lagta hai, isliye average speed slow wali speed ke zyada kareeb khinch jati hai (harmonic mean < arithmetic mean)!

---

## 3. Instantaneous Velocity & Instantaneous Speed

Car ka speedometer tumhe 1 ghante ki average speed nahi batata — woh **usi exact second** ki speed batata hai!

Jab hum time interval Δt ko chhota karte-karte zero ke bilkul paas le jate hain (Δt -> 0), toh average velocity Δx / Δt ban jati hai **Instantaneous Velocity**:

```
  v = lim (Δt -> 0) [ Δx / Δt ] = dx / dt
```

(Derivative dx/dt ka poora maths derivation tum [Class 11 Maths: Limits and Derivatives](../../maths/limits-and-derivatives/limits-and-derivatives.md) mein padh chuke ho!)

- Polynomial rule yaad rakho: agar **x(t) = c tⁿ**, toh rate of change **v(t) = dx/dt = c · n · t^(n-1)**, aur constant ka derivative **0** hota hai.
- **Instantaneous Speed** = |Instantaneous Velocity| (ek hi pal mein object direction nahi badal sakta, isliye instant par speed aur |velocity| HAMESHA equal hote hain!).

---

## Solved Examples

### Example 1: Kanak's Metro Shuttle (O -> P -> Q)

A metro shuttle starts from O (0 m), reaches P (+360 m) in 18 s, and then reverses to Q (+240 m) in 6 s. Find its average speed and average velocity for: (a) O to P, (b) O to P and back to Q.

**Solution:**
**(a) From O to P (time = 18 s):**
- Distance = 360 m, Displacement = +360 m.
- Average speed = 360 / 18 = **20 m/s**.
- Average velocity = +360 / 18 = **+20 m/s**. (Direction nahi badli, isliye dono equal!)

**(b) From O to P to Q (total time = 18 + 6 = 24 s):**
- Total Distance = 360 + 120 = 480 m.
- Displacement = +240 - 0 = +240 m.
- Average speed = 480 / 24 = **20 m/s**.
- Average velocity = +240 / 24 = **+10 m/s**.

Jaanch:
- Jaanch: Average speed (20 m/s) ≥ |Average velocity| (10 m/s) ✅

---

### Example 2: Equal-Distance Half-Journey Average Speed

A car covers the first half of a straight highway distance at 40 km/h and the second half at 60 km/h. Find its average speed for the entire trip.

**Solution:**
Equal distances => Harmonic Mean formula:
v_avg = 2 v₁ v₂ / (v₁ + v₂) = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = **48 km/h**.

Jaanch:
- Jaanch: Maan lo total distance = 240 km (120 km + 120 km). Time = 120/40 + 120/60 = 3 + 2 = 5 h. Average speed = 240 / 5 = 48 km/h (NOT 50 km/h!) ✅

---

### Example 3: Instantaneous vs Average Velocity from x(t)

The position of an object moving along the x-axis is given by x(t) = 8.5 + 2.5 t², where x is in metres and t is in seconds. Find:
(a) Its instantaneous velocity at t = 0 s and t = 2.0 s.
(b) Its average velocity between t = 2.0 s and t = 4.0 s.

**Solution:**
**(a) Instantaneous velocity:**
v(t) = dx/dt = 0 + 2.5 × (2 t) = 5.0 t m/s.
- At t = 0 s: v(0) = 5.0 × 0 = **0 m/s**.
- At t = 2.0 s: v(2) = 5.0 × 2.0 = **10.0 m/s**.

**(b) Average velocity between t = 2.0 s and t = 4.0 s:**
- x(2) = 8.5 + 2.5(4) = 18.5 m.
- x(4) = 8.5 + 2.5(16) = 48.5 m.
- v_avg = (48.5 - 18.5) / (4.0 - 2.0) = 30.0 / 2.0 = **15.0 m/s**.

Jaanch:
- Jaanch: v(2) = 10 m/s, v(4) = 20 m/s; uniform rate of change par average velocity = (10 + 20)/2 = 15 m/s ✅

---

### Example 4: Return Trip with Zero Average Velocity

A cyclist rides 12 km east from home to a park at 12 km/h and immediately returns home along the same road at 6 km/h. Find the average speed and average velocity for the round trip.

**Solution:**
- Going time t₁ = 12 / 12 = 1 h; Return time t₂ = 12 / 6 = 2 h; Total time = 3 h.
- Total distance = 12 + 12 = 24 km => Average speed = 24 / 3 = **8 km/h**.
- Net displacement = 0 km (back to home!) => Average velocity = 0 / 3 = **0 km/h**.

Jaanch:
- Jaanch: Harmonic mean check: 2(12)(6)/(12+6) = 144/18 = 8 km/h; net displacement 0 so v_avg = 0 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Equal distance mein average speed = (v₁ + v₂) / 2 le lena
- **Galat:** Aadha rasta 40 km/h aur aadha 60 km/h par average speed = (40 + 60)/2 = 50 km/h.
- **Sahi:** (v₁ + v₂)/2 sirf **equal time** ke liye sahi hai! Equal distance mein **2 v₁ v₂ / (v₁ + v₂) = 48 km/h** lagta hai.

### Galti 2: Direction palatne par bhi Average Speed = |Average Velocity| maan lena
- **Galat:** Shuttle O -> P -> Q mein average velocity 10 m/s aayi toh average speed bhi 10 m/s hogi.
- **Sahi:** Jab bhi object U-turn leta hai, Distance > |Displacement|, isliye **Average Speed > |Average Velocity|** (yahan 20 m/s vs 10 m/s).

### Galti 3: Zero displacement ka matlab zero distance samajh lena
- **Galat:** Cyclist ghar wapas aa gaya toh displacement 0 hai, matlab usne koi distance nahi chala.
- **Sahi:** Displacement 0 hai, par distance **24 km** hai! Distance sirf tab 0 hota hai jab object bilkul hila hi na ho.

---

## Quick Recap

- **Displacement** Δx = x₂ - x₁ (signed); **Distance** ≥ |Displacement|.
- **Average Velocity** = Δx / Δt; **Average Speed** = Total Distance / Total Time ≥ |v_avg|.
- **Equal distances:** v_avg = 2v₁v₂ / (v₁ + v₂); **Equal times:** v_avg = (v₁ + v₂) / 2.
- **Instantaneous Velocity:** v = dx/dt; **Instantaneous Speed** = |v|.

---

## Practice Questions

### Question 1
A particle moves from x = -4 m to x = +10 m and then to x = +2 m along a straight line. Find the total distance travelled and net displacement.

**Solution:**
- First leg: |-4 to +10| = 14 m. Second leg: |+10 to +2| = 8 m. Total distance = 14 + 8 = **22 m**.
- Net displacement = x_final - x_initial = +2 - (-4) = **+6 m**.

Jaanch:
- Jaanch: Distance (22 m) > |Displacement| (6 m) ✅

---

### Question 2
A runner completes one full lap of a circular track of radius 70 m in 44 s. Find the runner's average speed and average velocity. (Take π = 22/7.)

**Solution:**
- Distance = 2πr = 2 × (22/7) × 70 = 440 m.
- Average speed = 440 / 44 = **10 m/s**.
- After one full lap, start = end => Displacement = 0 => Average velocity = **0 m/s**.

Jaanch:
- Jaanch: 2 × 22 × 10 = 440 m; 440 / 44 = 10 m/s ✅

---

### Question 3
A bus travels for 2 hours at 50 km/h and then for 2 hours at 70 km/h along a straight road. Find its average speed.

**Solution:**
Equal time intervals (2 h each) => Arithmetic Mean:
v_avg = (50 + 70) / 2 = **60 km/h**.

Jaanch:
- Jaanch: Total distance = 100 + 140 = 240 km; total time = 4 h; 240 / 4 = 60 km/h ✅

---

### Question 4
A train travels from City A to City B at 30 km/h and returns from B to A at 60 km/h. Find the average speed and average velocity for the entire trip.

**Solution:**
- Equal distances => v_avg = 2(30)(60) / (30 + 60) = 3600 / 90 = **40 km/h**.
- Net displacement = 0 => Average velocity = **0 km/h**.

Jaanch:
- Jaanch: For d = 60 km, times are 2 h + 1 h = 3 h; 120 / 3 = 40 km/h ✅

---

### Question 5
A particle's position is given by x(t) = 4 t² - 6 t + 5 (x in metres, t in seconds). Find its instantaneous velocity at t = 3 s.

**Solution:**
v(t) = dx/dt = 8 t - 6.
At t = 3 s: v(3) = 8(3) - 6 = 24 - 6 = **18 m/s**.

Jaanch:
- Jaanch: Constant 5 ka derivative 0; d(4t²)/dt = 8t; d(-6t)/dt = -6 => 8(3) - 6 = 18 ✅

---

### Question 6
For the particle in Question 5 (x(t) = 4 t² - 6 t + 5), at what time t is its instantaneous velocity zero?

**Solution:**
v(t) = 8 t - 6 = 0 => 8 t = 6 => **t = 3/4 s = 0.75 s**.

Jaanch:
- Jaanch: v(0.75) = 8(0.75) - 6 = 6 - 6 = 0 ✅

---

### Question 7
A car covers one-third of a distance at 20 km/h, the next one-third at 30 km/h, and the last one-third at 60 km/h. Find its average speed.

**Solution:**
Let total distance = 3d (each part = d).
Total time = d/20 + d/30 + d/60 = d (3 + 2 + 1) / 60 = 6d / 60 = d / 10.
Average speed = 3d / (d / 10) = **30 km/h**.

Jaanch:
- Jaanch: For 3d = 180 km (60 km each), times = 3 + 2 + 1 = 6 h; 180 / 6 = 30 km/h ✅

---

### Question 8
A person walks 100 m north in 50 s and then turns back and walks 40 m south in 30 s. Find the average speed and average velocity.

**Solution:**
- Total distance = 100 + 40 = 140 m; total time = 50 + 30 = 80 s.
- Average speed = 140 / 80 = **1.75 m/s**.
- Net displacement = +100 - 40 = +60 m (north) => Average velocity = +60 / 80 = **+0.75 m/s (north)**.

Jaanch:
- Jaanch: 140/80 = 7/4 = 1.75; 60/80 = 3/4 = 0.75 ✅

---

### Question 9
The position of a particle is x(t) = 2 t³ - 9 t (x in m, t in s). Find the average velocity between t = 1 s and t = 3 s.

**Solution:**
x(1) = 2(1) - 9(1) = -7 m.
x(3) = 2(27) - 9(3) = 54 - 27 = +27 m.
v_avg = (27 - (-7)) / (3 - 1) = 34 / 2 = **+17 m/s**.

Jaanch:
- Jaanch: 27 - (-7) = 34; 34 / 2 = 17 m/s ✅

---

### Question 10
A vehicle covers half of the total distance with speed v₁, and the other half in two equal time intervals with speeds v₂ and v₃. Find the average speed for the whole journey.

**Solution:**
- Second half (equal times) has average speed v_23 = (v₂ + v₃) / 2.
- Now both halves have equal distance (with speeds v₁ and v_23):
  v_avg = 2 v₁ v_23 / (v₁ + v_23) = 2 v₁ [(v₂ + v₃)/2] / [v₁ + (v₂ + v₃)/2] = **2 v₁ (v₂ + v₃) / (2 v₁ + v₂ + v₃)**.

Jaanch:
- Jaanch: Agar v₁ = v₂ = v₃ = v, toh 2v(2v)/(4v) = v milta hai ✅

---

### Question 11
State whether the following statements are True or False:
(a) A particle can have zero average velocity over a time interval even though its instantaneous speed was never zero.
(b) Instantaneous speed can be greater than the magnitude of instantaneous velocity.

**Solution:**
- (a) **True** ✅ — Round trip (ya circular track) mein particle hamesha chalta rehta hai, par wapas start par aane se average velocity 0 ho jati hai.
- (b) **False** ❌ — Kisi ek exact pal par instantaneous speed HAMESHA |instantaneous velocity| ke barabar hoti hai.

Jaanch:
- Jaanch: Circular track (Q2) part (a) ko aur v = dx/dt definition part (b) ko confirm karta hai ✅

---

### Question 12
A car moves along a straight road with position x(t) = 10 + 4 t + 3 t² (x in m, t in s). Find its instantaneous velocity at t = 2 s and check whether it is moving in the +x or -x direction.

**Solution:**
v(t) = dx/dt = 4 + 6 t.
At t = 2 s: v(2) = 4 + 6(2) = **+16 m/s**.
Since v(2) > 0, it is moving in the **+x direction**.

Jaanch:
- Jaanch: x(2) = 30 m, x(2.01) ≈ 30.1603 m; Δx/Δt ≈ 16.03 m/s -> 16 m/s ✅

---

Ab jab tum kisi bhi 1D motion ko dekhoge, toh distance aur displacement ko kabhi confuse nahi karoge!

**Agle topic mein:** Velocity badalne ki speed kya hoti hai aur x-t, v-t, a-t graphs kaise poori kahani bol dete hain — chalo padhte hain [Acceleration & Kinematic Graphs (x-t, v-t, a-t)](motion-in-a-straight-line-part2.md).
