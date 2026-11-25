> **Class:** 11 | **Subject:** Physics | **Chapter 2:** Motion in a Straight Line (Part 5)

# Relative Velocity in One Dimension

> **Pichle topic se:** [Free Fall & Vertical Motion Under Gravity](motion-in-a-straight-line-part4.md) mein humne single objects ka vertical motion padha (ground ke respect mein). Par jab tum chalti hui train ki khidki se bagal wali train ko dekhte ho, toh kabhi woh rocket ki tarah tez aur kabhi ruki hui lagti hai! Yehi hai **Relative Velocity**!

---

## Prabhakar ka Dual-Track Railway Control Room

Prabhakar ek dual-track railway signalling controller hai. Ek din do express trains parallel tracks par ek doosre ki taraf (opposite directions mein) aa rahi thin:
- **Train A:** length 150 m, speed **+72 km/h (+20 m/s)** East.
- **Train B:** length 200 m, speed **-54 km/h (-15 m/s)** West.

Prabhakar ne 2 second mein calculate kar liya: "Dono trains ki relative speed **35 m/s** hai, aur poora cross hone ke liye **150 + 200 = 350 m** cover karna hai — matlab exact **10 seconds** mein dono trains ek doosre ko cross kar lengi!"

Chalo relative velocity aur relative acceleration ka yeh zabardast shortcut seekhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Relative Velocity (v_AB) | Object A ki velocity, **object B ke nazariye se** (jab B ko rest par maan liya jaye): v_AB = v_A - v_B |
| Observer Frame | Jis moving object par baith kar hum motion dekh rahe hain (use mentally rest par kar dete hain!) |
| Overtaking (Same Direction) | Do objects ek hi disha mein chal rahe hon => relative speed = |v_A - v_B| (kam hoti hai) |
| Crossing (Opposite Direction) | Do objects ek doosre ki taraf aa rahe hon => relative speed = |v_A| + |v_B| (badh jati hai!) |
| Relative Acceleration (a_AB) | A ka acceleration, B ke respect mein: a_AB = a_A - a_B |

---

## 1. The Master Formula: v_AB = v_A - v_B

Agar ground ke respect mein object A ki velocity **v_A** hai aur object B ki velocity **v_B** hai (dono signed, + right / - left), toh:

```
  Velocity of A relative to B:   v_AB = v_A - v_B
  Velocity of B relative to A:   v_BA = v_B - v_A = - v_AB
```

**Kyun?**
Time t par A ki position x_A(t) = x_A0 + v_A t aur B ki position x_B(t) = x_B0 + v_B t.
B se A ki doori (relative position):
x_AB(t) = x_A(t) - x_B(t) = (x_A0 - x_B0) + (v_A - v_B) t.
Isse rate of change (dx_AB / dt) seedha **(v_A - v_B)** aata hai!

### Do Instant Cases (Signs ke saath!)
1. **Same direction** (v_A = +25 m/s, v_B = +15 m/s):
   v_AB = 25 - 15 = **+10 m/s** (speeds subtract!).
2. **Opposite direction** (v_A = +20 m/s, v_B = -15 m/s):
   v_AB = 20 - (-15) = **+35 m/s** (speeds ADD!).

---

## 2. Relative Position–Time (x-t) Graphs

x-t graph par do objects A aur B ki straight lines dekhte hi sab samajh aa jata hai:

- **Case 1: v_A = v_B** -> Dono lines **parallel** hoti hain (beech ki doori kabhi nahi badalti, kabhi nahi milengi).
- **Case 2: v_A > v_B (A peeche se aa raha hai)** -> A ki line zyada steep (teekhi) hoti hai aur B ki line ko ek point par **intersect** (overtake) karti hai!
- **Case 3: Opposite directions (v_A > 0, v_B < 0)** -> Ek line upar jati hai, doosri neeche — dono jaldi **cross** karti hain!

---

## 3. Relative Kinematic Equations (With Acceleration!)

Agar dono objects accelerate kar rahe hon (a_A aur a_B constant), toh B ko rest par maan kar relative kinematic equations bilkul wahi rehti hain:

```
  v_rel = u_rel + a_rel t
  s_rel = u_rel t + (1/2) a_rel t²
  v_rel² = u_rel² + 2 a_rel s_rel
```

*(Khaas baat: Free fall mein do objects ke liye a_A = -g aur a_B = -g, toh **a_rel = (-g) - (-g) = 0**! Yani ek girte hue stone ko doosra girta hua stone **constant velocity** se chalta dikhta hai!)*

---

## Solved Examples

### Example 1: Prabhakar's Express Trains Crossing (Opposite Directions)

Train A (length 150 m) moves East at 72 km/h and Train B (length 200 m) moves West at 54 km/h on parallel tracks. How long do they take to completely cross each other?

**Solution:**
Convert to m/s (multiply by 5/18):
- v_A = +72 × (5/18) = +20 m/s
- v_B = -54 × (5/18) = -15 m/s
- Relative velocity: v_AB = 20 - (-15) = **35 m/s**.
- Total relative distance to completely cross = L_A + L_B = 150 + 200 = **350 m**.
- Time = 350 / 35 = **10 s**.

Jaanch:
- Jaanch: 10 s mein Train A 200 m aage aur Train B 150 m peeche gayi => total 350 m = 150 + 200 m ✅

---

### Example 2: Car Overtaking a Truck (Same Direction)

Car A moving at 90 km/h is 100 m behind Truck B moving in the same direction at 54 km/h. How much time will Car A take to catch up with Truck B? (Ignore vehicle lengths.)

**Solution:**
- v_A = 90 × (5/18) = 25 m/s; v_B = 54 × (5/18) = 15 m/s.
- Relative velocity: v_AB = 25 - 15 = **10 m/s**.
- Time to cover 100 m gap: t = 100 / 10 = **10 s**.

Jaanch:
- Jaanch: 10 s mein Car chali 250 m, Truck chala 150 m; 250 - 150 = 100 m gap closed ✅

---

### Example 3: Police Jeep Chasing a Speeding Van (Relative Acceleration)

A thief's van passes a police post at a constant speed of 20 m/s. At that exact instant, a police jeep starts from rest (u_P = 0) with uniform acceleration 4 m/s² to chase the van. Using relative kinematics, find when the jeep catches the van.

**Solution:**
Relative to the van (van at rest):
- u_rel = u_P - u_V = 0 - 20 = -20 m/s.
- a_rel = a_P - a_V = 4 - 0 = +4 m/s².
- To catch the van from the same starting point, s_rel = 0:
  0 = -20 t + (1/2)(4) t² = t (2 t - 20)
  Since t > 0, 2 t = 20 => **t = 10 s**.

Jaanch:
- Jaanch: At t = 10 s: Van distance = 20 × 10 = 200 m; Jeep distance = (1/2)(4)(10²) = 200 m ✅

---

### Example 4: Two Trains Passing in the Same Direction (Including Lengths)

A 120 m long express train moving at 25 m/s overtakes a 180 m long goods train moving on a parallel track in the same direction at 10 m/s. Find the time taken for complete overtaking.

**Solution:**
- v_rel = 25 - 10 = **15 m/s**.
- Total relative distance = 120 + 180 = **300 m**.
- Time = 300 / 15 = **20 s**.

Jaanch:
- Jaanch: 20 s mein express chali 500 m, goods chali 200 m; extra distance = 300 m = 120 + 180 m ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Opposite direction mein speeds ko subtract kar dena
- **Galat:** Train A = 20 m/s East, Train B = 15 m/s West => v_rel = 20 - 15 = 5 m/s.
- **Sahi:** Direction ke saath sign lagao: v_A = +20, v_B = -15 => v_AB = 20 - (-15) = **35 m/s**!

### Galti 2: Overtaking/Crossing mein sirf ek train ki length lena
- **Galat:** 150 m train ne 200 m train ko cross kiya toh distance = 200 m.
- **Sahi:** Jab engine nose-to-nose mile aur phir aakhiri dibba tail-to-tail chhoote, toh total relative distance **L₁ + L₂ = 350 m** hota hai!

### Galti 3: v_AB aur v_BA ka sign ulta kar dena
- **Galat:** Velocity of A with respect to B ko v_B - v_A likh dena.
- **Sahi:** Yaad rakho **"Jisko dekh rahe ho pehle, jahan se dekh rahe ho (observer) baad mein!"** => v_AB = **v_A - v_B**.

---

## Quick Recap

- **v_AB = v_A - v_B** (and v_BA = -v_AB).
- **Same direction:** relative speed = |v_A - v_B|; **Opposite direction:** relative speed = |v_A| + |v_B|.
- **Trains crossing/overtaking:** Total relative distance = **L₁ + L₂**.
- **Relative kinematics:** s_rel = u_rel t + (1/2) a_rel t²; for two freely falling bodies, **a_rel = 0**!

---

## Practice Questions

### Question 1
Car A moves North at 60 km/h and Car B moves North at 45 km/h. Find the velocity of A relative to B and the velocity of B relative to A.

**Solution:**
- v_AB = 60 - 45 = **+15 km/h (North)**.
- v_BA = 45 - 60 = **-15 km/h (15 km/h South)**.

Jaanch:
- Jaanch: v_BA = -v_AB ✅

---

### Question 2
Two cyclists approach each other on a straight road at 8 m/s and 12 m/s. If they are initially 200 m apart, after how many seconds will they meet?

**Solution:**
v_rel = 8 - (-12) = 20 m/s.
t = 200 / 20 = **10 s**.

Jaanch:
- Jaanch: 10 s mein pehla 80 m aur doosra 120 m chala; 80 + 120 = 200 m ✅

---

### Question 3
A 100 m long train travelling at 54 km/h crosses a 140 m long bridge. Find the time taken to completely cross the bridge.

**Solution:**
v = 54 × (5/18) = 15 m/s.
Total distance = 100 + 140 = 240 m.
Time = 240 / 15 = **16 s**.

Jaanch:
- Jaanch: 15 × 16 = 240 m ✅

---

### Question 4
A jet airplane travelling at 500 km/h ejects its exhaust gases at a speed of 1500 km/h relative to the jet plane (in the backward direction). Find the speed of the exhaust gases with respect to an observer on the ground.

**Solution:**
Let jet direction be positive: v_J = +500 km/h, v_GJ = -1500 km/h.
Since v_GJ = v_G - v_J => v_G = v_GJ + v_J = -1500 + 500 = **-1000 km/h** (1000 km/h opposite to the jet).

Jaanch:
- Jaanch: v_GJ = -1000 - 500 = -1500 km/h ✅

---

### Question 5
A boat can row at 6 km/h in still water. If a river flows at 2 km/h, find the time taken to row 16 km downstream and return 16 km upstream.

**Solution:**
- Downstream speed = 6 + 2 = 8 km/h => t₁ = 16 / 8 = 2 h.
- Upstream speed = 6 - 2 = 4 km/h => t₂ = 16 / 4 = 4 h.
- Total time = 2 + 4 = **6 hours**.

Jaanch:
- Jaanch: Still water mein 32/6 = 5.33 h lagta; river current hamesha round-trip time badha deta hai (6 h > 5.33 h) ✅

---

### Question 6
Two trains of lengths 110 m and 90 m run on parallel tracks in opposite directions at 36 km/h and 54 km/h respectively. Find the time taken to cross each other.

**Solution:**
v_1 = 36 × (5/18) = 10 m/s; v_2 = 54 × (5/18) = 15 m/s.
v_rel = 10 + 15 = 25 m/s; Total length = 110 + 90 = 200 m.
t = 200 / 25 = **8 s**.

Jaanch:
- Jaanch: 25 × 8 = 200 m ✅

---

### Question 7
A person walks up a stationary escalator in 60 s. If the person stands still on the moving escalator, it takes 30 s to reach the top. How long will it take if the person walks up the moving escalator?

**Solution:**
Let escalator length be L.
v_person = L / 60; v_esc = L / 30.
Combined speed = L/60 + L/30 = 3L / 60 = L / 20.
Time = L / (L / 20) = **20 s**.

Jaanch:
- Jaanch: Shortcut t = (t₁ t₂) / (t₁ + t₂) = (60 × 30) / 90 = 1800 / 90 = 20 s ✅

---

### Question 8
A scooterist moving at 15 m/s wants to overtake a bus 100 m ahead moving at 10 m/s in the same direction. If the scooterist wants to catch the bus in 10 s, what uniform acceleration must the scooterist apply?

**Solution:**
Relative to bus: u_rel = 15 - 10 = 5 m/s, s_rel = 100 m, t = 10 s, a_rel = a.
100 = 5(10) + (1/2) a (10²) => 100 = 50 + 50 a => 50 a = 50 => **a = 1 m/s²**.

Jaanch:
- Jaanch: Bus in 10 s = 100 m (reaches 200 m mark); Scooter = 15(10) + 0.5(1)(100) = 200 m ✅

---

### Question 9
Two balls are released from the same point vertically: Ball A is dropped from rest, and at the same instant Ball B is thrown downward at 10 m/s. What is the distance between them after 4 seconds? (g = 10 m/s².)

**Solution:**
Dono free fall mein hain => a_rel = g - g = **0**!
u_rel = 10 - 0 = 10 m/s (constant!).
Separation after 4 s = u_rel × t = 10 × 4 = **40 m**.

Jaanch:
- Jaanch: s_A = 5(16) = 80 m; s_B = 10(4) + 5(16) = 120 m; 120 - 80 = 40 m ✅

---

### Question 10
A police van moving on a highway at 30 km/h fires a bullet at a thief's car speeding away in the same direction at 192 km/h. If the muzzle speed of the bullet (relative to the van) is 150 m/s, with what speed does the bullet hit the thief's car?

**Solution:**
- v_van = 30 × (5/18) = 25/3 m/s.
- v_thief = 192 × (5/18) = 160/3 m/s.
- Bullet speed wrt ground: v_bullet = 150 + 25/3 = 475/3 m/s.
- Speed hitting thief (v_bullet - v_thief) = 475/3 - 160/3 = 315/3 = **105 m/s**.

Jaanch:
- Jaanch: 150 m/s - (192 - 30) km/h = 150 - 162(5/18) = 150 - 45 = 105 m/s ✅

---

### Question 11
State whether the following statements are True or False:
(a) If two objects move with equal velocities in the same direction, their x-t graphs are parallel straight lines.
(b) Two bodies dropped in vacuum from different heights at the same time have a non-zero relative acceleration.

**Solution:**
- (a) **True** ✅ — Equal velocity ka matlab equal slope, yani parallel lines!
- (b) **False** ❌ — Dono ka acceleration -g hai, isliye a_rel = (-g) - (-g) = **0**!

Jaanch:
- Jaanch: Equal slopes => parallel lines; identical gravity => zero relative acceleration ✅

---

### Question 12
Car X is at x = 0 moving at +18 m/s, and Car Y is at x = 120 m moving at +12 m/s. Find the position x where Car X overtakes Car Y.

**Solution:**
v_rel = 18 - 12 = 6 m/s; gap = 120 m => t = 120 / 6 = 20 s.
Position of overtaking: x = 18 × 20 = **360 m**.

Jaanch:
- Jaanch: Car Y position at 20 s = 120 + 12(20) = 120 + 240 = 360 m ✅

---

Relative frame mein sochna seekh liya toh 2-body problems aadhe time mein solve ho jati hain!

**Agle topic mein:** Chapter ke sabhi tools — average/instantaneous velocity, graphs, kinematic equations, free fall, aur relative velocity — ko ek saath jod kar solve karenge [Mixed Problems & Chapter Wrap-up](motion-in-a-straight-line-part6.md) mein!
