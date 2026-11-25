> **Class:** 11 | **Subject:** Physics | **Chapter 2:** Motion in a Straight Line (Part 4)

# Free Fall & Vertical Motion Under Gravity

> **Pichle topic se:** [Kinematic Equations for Uniform Acceleration](motion-in-a-straight-line-part3.md) mein humne constant acceleration ke equations derive kiye. Earth ki surface ke paas hawa ka resistance ignore karne par **gravity** ek near-perfect uniform acceleration (g ≈ 9.8 m/s² ya 10 m/s² neeche ki taraf) deti hai!

---

## Sarita ka Cliff-Edge Probe & Signal Flare

Sarita ek hydrological survey technician hai jo **80 m** oonche cliff par khadi hai.
- Pehle usne ek waterproof depth sensor ko rest se neeche chhoda — bina push kiye (free fall).
- Phir usne ek signal flare ko seedha upar **30 m/s** ki speed se fire kiya.

Sarita ne dekha ki chhoda gaya sensor pehle second mein sirf **5 m** gira, doosre mein **15 m**, teesre mein **25 m**, aur chauthe mein **35 m** (total **80 m** in 4 s — exact **1 : 3 : 5 : 7** ratio!). Aur upar gaya flare **3 s** mein highest point (**45 m**) par pahuncha aur theek **3 s** mein wapas haath mein aa gaya!

Chalo free fall aur vertical motion ke sabhi niyam ek simple, foolproof **Sign Convention** ke saath seekhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Free Fall | Sirf gravity ke under motion (air resistance ignored) — chahe object neeche gire ya upar phenka gaya ho! |
| Acceleration due to Gravity (g) | Earth ki gravity se milne wala downward acceleration (≈ 9.8 m/s²; calculations mein aksar 10 m/s² diya hota hai) |
| Maximum Height (H_max) | Upar phenke gaye object ka woh sabse ooncha point jahan velocity ek pal ke liye 0 hoti hai |
| Time of Ascent (t_up) | Launch point se highest point tak pahunchne ka time (= u / g) |
| Time of Flight (T) | Launch se wapas usi level par aane ka total time (= 2u / g) |
| Galileo's Law of Odd Numbers | Rest se girne par equal time intervals mein distance ka ratio hamesha **1 : 3 : 5 : 7 : ...** hota hai |

---

## 1. One Golden Sign Convention (Zero Confusion!)

Vertical motion mein galtiyan tab hoti hain jab student beech mein sign badal deta hai. Ek hi clean rule hamesha follow karo:

```
   +y (UPWARD)   ^
                 :   u > 0 (thrown up)
                 :   s > 0 (above start)
  ---------------+------------------ Start point (y = 0)
                 :   a = -g ALWAYS (gravity pulls DOWN!)
                 :   s < 0 (below start, e.g. cliff/tower!)
   -y (DOWNWARD) v
```

Is convention mein **a = -g** HAMESHA (upar jate waqt bhi, highest point par bhi, neeche aate waqt bhi!):
1. **v = u - g t**
2. **s = u t - (1/2) g t²**
3. **v² = u² - 2 g s**

*(Note: Agar sirf downward drop ho, toh chaho toh downward ko +y le sakte ho — bas poore problem mein ek hi convention par tike raho!)*

---

## 2. Vertical Upward Projection — Symmetry of Ascent & Descent

Maan lo ek ball ground se seedha upar initial velocity **+u** se phenki gayi:

1. **Highest point par v = 0:**
   0 = u - g t_up => **t_up = u / g**

2. **Maximum Height H_max:**
   0 = u² - 2 g H_max => **H_max = u² / (2g)**

3. **Total Time of Flight (wapas ground par s = 0):**
   0 = u T - (1/2) g T² = T (u - (1/2) g T) => **T = 2u / g** (so t_down = t_up = u / g!)

4. **Speed at any height h:**
   Upar jate waqt velocity **+v** aur wapas usi height par aate waqt velocity **-v** — speed exact **SAME** hoti hai!

---

## 3. Galileo's Law of Odd Numbers

Agar koi object rest (u = 0) se gire, toh n-vein second mein gira gaya distance:
s_n = 0 + (g/2)(2n - 1)
- 1st second: 1 × (g/2) = 5 m (for g = 10)
- 2nd second: 3 × (g/2) = 15 m
- 3rd second: 5 × (g/2) = 25 m
- 4th second: 7 × (g/2) = 35 m

Ratio = **1 : 3 : 5 : 7 : ...** — yehi Galileo's Law of Odd Numbers hai!

---

## Solved Examples

### Example 1: Sarita's 80 m Cliff Drop (Free Fall + Galileo Check)

A sensor is dropped from rest from an 80 m high cliff. Taking g = 10 m/s², find: (a) time taken to hit the water, (b) velocity just before hitting the water, (c) distance fallen in each of the 4 seconds.

**Solution:**
Taking downward as positive (u = 0, a = +10 m/s², s = +80 m):
- (a) 80 = 0 + (1/2)(10) t² => 5 t² = 80 => t² = 16 => **t = 4 s**.
- (b) v = 0 + 10(4) = **40 m/s** (downward).
- (c) Distances in 1st, 2nd, 3rd, 4th seconds:
  5 m, 15 m, 25 m, 35 m (ratio 1 : 3 : 5 : 7!).

Jaanch:
- Jaanch: 5 + 15 + 25 + 35 = 80 m; v² = 2(10)(80) = 1600 => v = 40 m/s ✅

---

### Example 2: Sarita's Signal Flare (Vertical Upward Projection)

A signal flare is fired vertically upward at 30 m/s (g = 10 m/s²). Find: (a) maximum height reached, (b) time to reach the top, (c) total time to return to launch height, (d) velocity at t = 4 s.

**Solution:**
Upward positive: u = +30 m/s, a = -10 m/s².
- (a) H_max = u² / (2g) = 30² / (2 × 10) = 900 / 20 = **45 m**.
- (b) t_up = u / g = 30 / 10 = **3 s**.
- (c) T = 2u / g = **6 s**.
- (d) v(4) = 30 - 10(4) = **-10 m/s** (10 m/s downward, kyunki 3 s ke baad flare neeche aa raha hai!).

Jaanch:
- Jaanch: Symmetry check: t = 2 s par v = +10 m/s (1 s before top), t = 4 s par v = -10 m/s (1 s after top) ✅

---

### Example 3: Ball Thrown Upward from a 25 m Tower (Single-Step Signed Displacement!)

A ball is thrown vertically upward with speed 20 m/s from the top of a 25 m high tower. Taking g = 10 m/s², find the total time taken by the ball to hit the ground below.

**Solution:**
Upward positive, origin at tower top:
u = +20 m/s, a = -10 m/s², ground is **25 m below** start => **s = -25 m**!

Using s = u t + (1/2) a t² in ONE clean step:
-25 = 20 t - 5 t²
5 t² - 20 t - 25 = 0
Divide by 5: t² - 4 t - 5 = 0
(t - 5)(t + 1) = 0 => **t = 5 s** (rejecting negative time t = -1 s).

Jaanch:
- Jaanch: 2-step check: upar jane mein 2 s (height +20 m, total 45 m above ground); 45 m girne mein √(2×45/10) = 3 s; total = 2 + 3 = 5 s ✅

---

### Example 4: Finding Launch Speed from Maximum Height

A stone thrown vertically upward reaches a maximum height of 19.6 m. Taking g = 9.8 m/s², find the initial velocity of projection and the total time of flight.

**Solution:**
- v² = u² - 2 g H => 0 = u² - 2(9.8)(19.6) = u² - (19.6)² => **u = 19.6 m/s**.
- T = 2u / g = 2(19.6) / 9.8 = **4 s**.

Jaanch:
- Jaanch: t_up = 2 s; H = 19.6(2) - 4.9(4) = 39.2 - 19.6 = 19.6 m ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Highest point par acceleration ko zero (a = 0) bol dena
- **Galat:** Ball upar ruk gayi (v = 0), toh wahan acceleration bhi 0 ho gaya!
- **Sahi:** Agar highest point par a = 0 hota, toh ball hawa mein hamesha ke liye latki reh jati! Highest point par **v = 0** hai, par gravity abhi bhi neeche kheench rahi hai — **a = -g**!

### Galti 2: Ek hi equation mein upward-positive aur downward-positive mix kar dena
- **Galat:** Tower problem mein u = +20, g = -10, par ground ke liye s = +25 rakh dena.
- **Sahi:** Agar upar + hai, toh tower se 25 m neeche ground ka displacement **s = -25 m** hoga!

### Galti 3: Vacuum mein bhari object ko halka object se tez girta hua maan lena
- **Galat:** 10 kg ka patthar 1 kg ke patthar se jaldi zameen par girega.
- **Sahi:** Free fall equations mein **mass m kahin aata hi nahi**! Hawa na ho toh pankh aur patthar dono exact same acceleration g se ek saath girte hain.

---

## Quick Recap

- **Upward positive convention:** a = -g ALWAYS; v = u - gt; s = ut - (1/2)gt²; v² = u² - 2gs.
- **Upward projection:** t_up = u/g; H_max = u²/(2g); T = 2u/g; ascent & descent perfectly symmetric.
- **Tower / Cliff throw:** Set origin at release point; ground below has **s = -h** (one-step quadratic!).
- **Galileo's Law:** Equal time drops from rest follow **1 : 3 : 5 : 7**.

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A pebble is dropped from rest from a bridge 45 m above a river. Find the time taken to hit the water and its speed on impact.

**Solution:**
45 = (1/2)(10) t² => t² = 9 => **t = 3 s**.
v = g t = 10 × 3 = **30 m/s**.

Jaanch:
- Jaanch: v² = 2(10)(45) = 900 => v = 30 m/s ✅

---

### Question 2
A cricket ball is thrown vertically upward with speed 25 m/s. Find the maximum height reached and total time of flight.

**Solution:**
- H_max = 25² / (2 × 10) = 625 / 20 = **31.25 m**.
- T = 2(25) / 10 = **5 s**.

Jaanch:
- Jaanch: t_up = 2.5 s; H = 25(2.5) - 5(6.25) = 62.5 - 31.25 = 31.25 m ✅

---

### Question 3
A ball is thrown vertically upward and returns to the thrower's hand after 8 s. Find: (a) initial velocity, (b) maximum height reached, (c) position after 6 s.

**Solution:**
- (a) T = 2u / 10 = 8 => **u = 40 m/s**.
- (b) H_max = 40² / 20 = **80 m**.
- (c) s(6) = 40(6) - 5(36) = 240 - 180 = **60 m above ground** (coming down).

Jaanch:
- Jaanch: Symmetry: t = 6 s is 2 s after top (t = 4 s), same height as t = 2 s: s(2) = 80 - 20 = 60 m ✅

---

### Question 4
A stone dropped from a tall building covers 35 m in the last second of its fall. Find the total time of fall and the height of the building.

**Solution:**
s_n = (g/2)(2n - 1) => 35 = 5(2n - 1) => 2n - 1 = 7 => **n = 4 s**.
Total height H = (1/2)(10)(4²) = **80 m**.

Jaanch:
- Jaanch: Galileo: 5 + 15 + 25 + 35 = 80 m; 4th second = 35 m ✅

---

### Question 5
A ball is thrown vertically downward from a 60 m tower with an initial speed of 10 m/s. Find the time taken to reach the ground.

**Solution:**
Downward positive: u = +10 m/s, a = +10 m/s², s = +60 m.
60 = 10 t + 5 t² => t² + 2 t - 12 = 0 => Wait: check discriminant = 4 + 48 = 52. Let's compute exact root:
t = (-2 + √52) / 2 = -1 + √13 ≈ -1 + 3.61 = **2.61 s**.

Jaanch:
- Jaanch: At t = 2.61 s: 10(2.61) + 5(6.81) = 26.1 + 34.05 ≈ 60.15 m ✅

---

### Question 6
A stone is thrown vertically upward at 15 m/s from the top of a 50 m cliff. Find the time taken to hit the ground below.

**Solution:**
Upward positive: u = +15, a = -10, s = -50.
-50 = 15 t - 5 t² => 5 t² - 15 t - 50 = 0 => t² - 3 t - 10 = 0.
(t - 5)(t + 2) = 0 => **t = 5 s**.

Jaanch:
- Jaanch: s(5) = 15(5) - 5(25) = 75 - 125 = -50 m ✅

---

### Question 7
Two balls A and B are dropped from heights 20 m and 80 m respectively. Find the ratio of their times to reach the ground.

**Solution:**
Since H = (1/2) g t², t = √(2H / g) => t ∝ √H.
t_A / t_B = √(20 / 80) = √(1 / 4) = **1 : 2**.

Jaanch:
- Jaanch: t_A = 2 s, t_B = 4 s => 2 : 4 = 1 : 2 ✅

---

### Question 8
A ball thrown upward passes a window 15 m above the ground with speed 10 m/s going upward. Find the maximum height it reaches above the ground.

**Solution:**
From window to top: extra height Δh = v² / (2g) = 10² / 20 = 5 m.
Total height above ground = 15 + 5 = **20 m**.

Jaanch:
- Jaanch: Launch speed from ground: u² = 2(10)(20) = 400 => u = 20 m/s; at 15 m: v² = 400 - 300 = 100 => v = 10 m/s ✅

---

### Question 9
A parachutist drops freely from rest for 3 s before opening the parachute. How far does the parachutist fall during these 3 s, and what is the speed just before opening? (Use g = 9.8 m/s².)

**Solution:**
- s = (1/2)(9.8)(3²) = 4.9 × 9 = **44.1 m**.
- v = 9.8 × 3 = **29.4 m/s**.

Jaanch:
- Jaanch: Avg speed = 14.7 m/s; 14.7 × 3 = 44.1 m ✅

---

### Question 10
A body is projected vertically upward with speed u. Show that the distance covered in the last 1 second of its ascent is independent of u, and find its numerical value (g = 9.8 m/s²).

**Solution:**
Ascent ka aakhiri 1 second symmetry se descent ke pehle 1 second (rest se 1 s fall) ke bilkul barabar hota hai!
Distance = (1/2) g (1²) = (1/2)(9.8)(1) = **4.9 m** (completely independent of u!).

Jaanch:
- Jaanch: Test with u = 29.4 m/s (t_up = 3 s): H(3) - H(2) = 44.1 - 39.2 = 4.9 m ✅

---

### Question 11
State whether the following statements are True or False:
(a) At the highest point of a vertical throw, both velocity and acceleration are zero.
(b) In the absence of air resistance, a ball thrown upward returns to the launch level with the same speed with which it was thrown.

**Solution:**
- (a) **False** ❌ — Highest point par v = 0 hai, par a = -g (non-zero) rehta hai!
- (b) **True** ✅ — v² = u² - 2g(0) => v = -u (same speed, opposite direction).

Jaanch:
- Jaanch: Symmetry property of uniform downward gravity confirms both ✅

---

### Question 12
A ball is thrown vertically upward with speed 20 m/s. Find the total **distance** (not displacement!) covered by the ball in 3 seconds.

**Solution:**
t_up = 20 / 10 = 2 s => Ball 2 s mein top (H = 20 m) pahunch kar wapas neeche aane lagti hai!
- 0 to 2 s (upward): 20 m.
- 2 to 3 s (1 s downward from rest): (1/2)(10)(1²) = 5 m.
- Total **distance** = 20 + 5 = **25 m**. (Note: Displacement s(3) = 60 - 45 = +15 m!)

Jaanch:
- Jaanch: 20 m up + 5 m down = 25 m distance, +15 m displacement ✅

---

Gravity ke saath vertical motion ab tumhare liye ekdam aasaan ho gaya hai — bas ek sign convention pakdo aur kabhi confuse mat ho!

**Agle topic mein:** Jab do cheezein ek saath chal rahi hon — jaise do trains ya car aur truck — toh unki speed ek doosre ke respect mein kya dikhti hai? Chalo padhte hain [Relative Velocity in One Dimension](motion-in-a-straight-line-part5.md).
