> **Class:** 11 | **Subject:** Physics | **Chapter 4:** Laws of Motion (Part 5)

# Dynamics of Circular Motion, Banking of Roads & Vertical Circle

> **Pichle topic se:** [Friction](laws-of-motion-part4.md) mein humne static aur kinetic friction ko samjha, aur Chapter 3 mein humne centripetal acceleration a_c = v²/r dekha tha. Ab Newton's Second Law lagao: **F_c = m v² / r** — koi bhi cheez circle mein tabhi ghoom sakti hai jab koi real force (Tension, Friction, Gravity, ya Normal) use centre ki taraf kheenche!

---

## Vijendra ka Mountain-Highway Curve & Vertical-Loop Check

Vijendra ek highway-safety aur amusement-park engineer hai.
- Ek **level (flat) curve** (radius **40 m**, μ_s = 0.4) par car ko modne ka saara kaam sirf **tyre friction** karta hai, toh max safe speed sirf **12.65 m/s** (~45 km/h) rehti hai!
- Par jab Vijendra ne ek **90 m** radius highway curve ko bahar se thoda upar utha diya (**Banking of Road**, tan θ = 4/9), toh bina kisi tyre friction ke bhi car **20 m/s (72 km/h)** par aaram se mud gayi!
- Aur roller-coaster ke **2 m** radius vertical loop mein loop poora karne ke liye bottom par kam se kam **10 m/s (√(5gR))** speed zaroori hoti hai!

Chalo circular dynamics ke yeh teeno iconic cases derive karte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Centripetal Force (F_c) | Koi naya force NAHI — yeh woh **net inward radial force** (m v² / r) hai jo Tension, Friction, Normal ya Gravity milkar provide karte hain |
| Level Circular Road | Flat (bina jhukav wala) mod jahan sirf static friction centripetal force deta hai |
| Banking of Roads | Curved road ke outer edge ko inner edge se thoda upar uthana taaki **Normal force ka component (N sin θ)** car ko modne mein madad kare |
| Optimum Banking Speed | Woh speed jahan bina friction (zero tyre wear!) ke car safe mud jati hai: **v = √(r g tan θ)** |
| Vertical Circular Motion | Gravity ke under vertical plane mein circle (jaise rassi se stone ya roller coaster loop) |

---

## 1. Car on a Level Circular Road

Flat curved road par vertical equilibrium: **N = m g**.
Inward static friction centripetal force deta hai: f_s = m v² / r.
Kyunki f_s ≤ μ_s N = μ_s m g:
m v² / r ≤ μ_s m g  =>  **v_max = √( μ_s r g )**

*(Notice: Safe speed car ke mass m par depend nahi karti — cycle ho ya truck, same tyre μ_s par same v_max!)*

---

## 2. Banking of Roads (Without & With Friction)

Road ko angle **θ** par bank karne par Normal reaction **N** vertical se angle **θ** par jhuk jata hai:

### Case A: Smooth Banked Road (Zero Friction — Optimum Speed)
- Vertical: **N cos θ = m g**
- Radial (inward): **N sin θ = m v² / r**
Dividing the two equations:
**tan θ = v² / (r g)**  =>  **v_optimum = √( r g tan θ )**

*(Bending of a Cyclist par bhi bilkul yahi formula lagta hai: **tan θ = v² / (r g)**!)*

### Case B: Rough Banked Road (With Friction μ_s)
Agar car v_optimum se zyada tez chale toh bahar phisalne ki koshish karti hai, isliye friction **neeche (inward)** lagta hai!
- Radial: N sin θ + μ_s N cos θ = m v_max² / r
- Vertical: N cos θ - μ_s N sin θ = m g
Dividing numerator & denominator by N cos θ:

```
  v_max = √( r g (μ_s + tan θ) / (1 - μ_s tan θ) )
```

*(Aur agar car bahut dheemi chale toh minimum speed mein signs flip ho jate hain: (tan θ - μ_s)/(1 + μ_s tan θ)!)*

---

## 3. Motion in a Vertical Circle (String / Loop)

Radius **R** ke vertical circle mein mass **m** rassi se ghoom raha hai:
- **Bottom point:** T_bottom - m g = m v_B² / R  =>  **T_bottom = m g + m v_B² / R** (Tension MAXIMUM!)
- **Top point:** T_top + m g = m v_T² / R  =>  **T_top = m v_T² / R - m g** (Tension MINIMUM!)

**Minimum speed to just complete the vertical circle (string stays taut at top => T_top = 0):**
1. At the **top**: m v_T² / R = m g  =>  **v_top(min) = √( g R )**
2. At the **bottom** (using energy/kinematics v_B² = v_T² + 2g(2R) = gR + 4gR = 5gR):
   **v_bottom(min) = √( 5 g R )**
3. At the **mid-level (horizontal)**: **v_mid(min) = √( 3 g R )**
4. Tension difference between bottom and top: **T_bottom - T_top = 6 m g** (always, for any full vertical loop!).

---

## Solved Examples

### Example 1: Vijendra's Level Curve vs Banked Curve

(a) A level circular road has radius r = 40 m and μ_s = 0.4 (g = 10 m/s²). Find the maximum safe speed.
(b) A smooth banked road of radius r = 90 m is banked at an angle θ with tan θ = 4/9. Find the optimum speed (no friction needed).

**Solution:**
- (a) v_max = √(μ_s r g) = √(0.4 × 40 × 10) = √160 = **4 √10 ≈ 12.65 m/s**.
- (b) v_opt = √(r g tan θ) = √(90 × 10 × 4/9) = √400 = **20 m/s (72 km/h)**.

Jaanch:
- Jaanch: (a) 0.4 × 400 = 160; (b) 900 × (4/9) = 400 => √400 = 20 m/s ✅

---

### Example 2: Vertical Loop Minimum Speeds (Roller Coaster)

A small cart travels inside a smooth vertical circular loop of radius R = 2 m (g = 10 m/s²). Find the minimum speed required at: (a) the top of the loop, (b) the bottom of the loop.

**Solution:**
- (a) v_top(min) = √(g R) = √(10 × 2) = **√20 = 2 √5 ≈ 4.47 m/s**.
- (b) v_bottom(min) = √(5 g R) = √(5 × 10 × 2) = √100 = **10 m/s**.

Jaanch:
- Jaanch: v_B² - v_T² = 100 - 20 = 80 = 4 g R = 4(10)(2) ✅

---

### Example 3: Conical Pendulum (String at Angle θ)

A 0.5 kg bob tied to a string revolves in a horizontal circle of radius r = 0.4 m such that the string makes an angle of 45° with the vertical (g = 10 m/s²). Find the tension in the string and the speed of the bob.

**Solution:**
- Vertical equilibrium: T cos 45° = m g = 5 N => **T = 5 √2 ≈ 7.07 N**.
- Radial force: T sin 45° = m v² / r. Dividing the two: tan 45° = v² / (r g) => 1 = v² / (0.4 × 10) => v² = 4 => **v = 2 m/s**.

Jaanch:
- Jaanch: T sin 45° = 5 N; m v² / r = 0.5 × 4 / 0.4 = 5 N ✅

---

### Example 4: Banked Road With Friction

A circular racetrack of radius r = 300 m is banked at an angle θ where tan θ = 0.25. If μ_s = 0.2 and g = 10 m/s², find the maximum permissible speed to avoid slipping upward.

**Solution:**
v_max = √( r g (μ_s + tan θ) / (1 - μ_s tan θ) )
= √( 300 × 10 × (0.2 + 0.25) / (1 - 0.2 × 0.25) )
= √( 3000 × 0.45 / 0.95 ) = √(1350 / 0.95) ≈ √1421.05 ≈ **37.7 m/s**.

Jaanch:
- Jaanch: Optimum speed without friction = √(3000 × 0.25) = √750 ≈ 27.4 m/s; friction raises v_max to 37.7 m/s ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Centripetal force ko FBD mein ek alag extra force ke roop mein bana dena
- **Galat:** Stone ke FBD mein Tension T bhi bana diya aur saath mein ek aur inward arrow F_c = mv²/r bana diya!
- **Sahi:** Centripetal force koi alag force nahi hai — **Tension T HI centripetal force ka kaam kar rahi hai** (T = mv²/r)!

### Galti 2: Vertical loop ke top par v = 0 hone par bhi loop poora maan lena
- **Galat:** Ball bas top tak pahunch jaye (v = 0) toh loop complete ho jayega!
- **Sahi:** Agar top par v < √(gR) hua, toh gravity zyada hone se rassi dheeli pad jayegi (T < 0) aur ball circle chhod kar andar gir jayegi! Minimum top speed **√(gR)** zaroori hai!

### Galti 3: Non-skidding turning car ke liye μ_k (kinetic friction) use karna
- **Galat:** Car chal rahi hai, toh turning mein kinetic friction μ_k lagega!
- **Sahi:** Car aage roll kar rahi hai, par **radially (sideways) slip nahi kar rahi** — isliye sideways turning force **static friction μ_s** deta hai!

---

## Quick Recap

- **Centripetal role:** ΣF_inward = m v² / r = m ω² r.
- **Level curve:** v_max = √(μ_s r g).
- **Banked curve (no friction) / Cyclist:** v = √(r g tan θ).
- **Banked curve (with friction):** v_max = √(r g (μ_s + tan θ) / (1 - μ_s tan θ)).
- **Vertical circle (min to loop):** Top √(gR), Mid √(3gR), Bottom √(5gR); T_bottom - T_top = 6 m g.

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 1000 kg car takes a flat circular turn of radius 50 m at 10 m/s. Find the minimum friction force required to prevent skidding.

**Solution:**
f = m v² / r = 1000 × 100 / 50 = **2000 N**.

Jaanch:
- Jaanch: Required μ_s = 2000 / 10,000 = 0.2 ✅

---

### Question 2
Find the maximum safe speed of a bike on a flat circular road of radius 90 m if μ_s = 0.4.

**Solution:**
v_max = √(0.4 × 90 × 10) = √360 = **6 √10 ≈ 18.97 m/s**.

Jaanch:
- Jaanch: 0.4 × 900 = 360 ✅

---

### Question 3
A cyclist rides around a circular track of radius 40 m at 20 m/s. At what angle with the vertical must the cyclist lean inward?

**Solution:**
tan θ = v² / (r g) = 400 / (40 × 10) = 400 / 400 = 1 => **θ = 45°**.

Jaanch:
- Jaanch: tan 45° = 1 => v = √(rg) = √400 = 20 m/s ✅

---

### Question 4
A smooth curve of radius 160 m is designed for an optimum speed of 20 m/s without friction. Find tan θ of the banking angle.

**Solution:**
tan θ = v² / (r g) = 400 / (160 × 10) = 400 / 1600 = **0.25** (θ ≈ 14°).

Jaanch:
- Jaanch: √(160 × 10 × 0.25) = √400 = 20 m/s ✅

---

### Question 5
A 2 kg stone tied to a 1 m string is whirled in a horizontal circle on a smooth table. If the string breaks when tension exceeds 200 N, find the maximum speed of the stone.

**Solution:**
T_max = m v_max² / r => 200 = 2 v_max² / 1 => v_max² = 100 => **v_max = 10 m/s**.

Jaanch:
- Jaanch: 2 × 100 / 1 = 200 N ✅

---

### Question 6
A bucket of water is whirled in a vertical circle of radius 1.6 m. What is the minimum speed at the highest point so that water does not spill out?

**Solution:**
v_top(min) = √(g R) = √(10 × 1.6) = √16 = **4 m/s**.

Jaanch:
- Jaanch: At v = 4 m/s, a_c = 16 / 1.6 = 10 m/s² = g => N = 0 ✅

---

### Question 7
A 1 kg stone tied to a 1 m string is whirled in a vertical circle with a speed of 10 m/s at the bottom. Find the tension in the string at the bottom.

**Solution:**
T_bottom = m g + m v² / R = 1(10) + 1(100) / 1 = 10 + 100 = **110 N**.

Jaanch:
- Jaanch: Weight 10 N + centripetal 100 N = 110 N ✅

---

### Question 8
A car goes over the top of a convex bridge of radius of curvature 40 m at 10 m/s. If the car's mass is 800 kg, find the Normal force exerted by the bridge on the car at the highest point.

**Solution:**
At the top of a convex bridge: m g - N = m v² / R
N = m (g - v² / R) = 800 (10 - 100 / 40) = 800 (10 - 2.5) = 800 × 7.5 = **6000 N**.

Jaanch:
- Jaanch: Convex bridge top par car halki lagti hai (6000 N < 8000 N); agar v = 20 m/s hoti toh car hawa mein ud jati (N = 0)! ✅

---

### Question 9
A 0.2 kg coin lies on a rotating horizontal turntable at a distance of 0.1 m from the centre. If μ_s = 0.4, find the maximum angular speed ω before the coin slips.

**Solution:**
m ω² r ≤ μ_s m g => ω_max = √(μ_s g / r) = √(0.4 × 10 / 0.1) = √40 = **2 √10 ≈ 6.32 rad/s**.

Jaanch:
- Jaanch: ω² r = 40 × 0.1 = 4 m/s² = μ_s g ✅

---

### Question 10
A stone of mass 0.5 kg completes a vertical circle of radius 2 m. What is the difference between the tension at the lowest point and the tension at the highest point?

**Solution:**
T_bottom - T_top = 6 m g = 6 × 0.5 × 10 = **30 N** (independent of radius and speed!).

Jaanch:
- Jaanch: Check at min speed: T_top = 0, T_bottom = mg + m(5gR)/R = 6mg = 30 N ✅

---

### Question 11
State whether the following statements are True or False:
(a) Banking of roads reduces wear and tear of tyres on curved highways.
(b) The maximum safe speed on a flat circular road depends on the mass of the vehicle.

**Solution:**
- (a) **True** ✅ — Optimum speed par Normal ka component (N sin θ) poora centripetal force de deta hai, toh friction ki zaroorat 0 ho jati hai!
- (b) **False** ❌ — v_max = √(μ_s r g) mein mass m cancel ho jata hai!

Jaanch:
- Jaanch: Both facts follow directly from our circular dynamics equations ✅

---

### Question 12
A roller-coaster car just loops a vertical circle of radius 5 m. Find the minimum speed it must have at the bottom of the loop.

**Solution:**
v_bottom(min) = √(5 g R) = √(5 × 10 × 5) = √250 = **5 √10 ≈ 15.81 m/s**.

Jaanch:
- Jaanch: 5 × 10 × 5 = 250 = 25 × 10 => 5√10 m/s ✅

---

Circular motion ke dynamics ab tumhare liye bilkul clear hain!

**Agle topic mein:** Chapter ke sabhi laws, FBDs, pulleys, friction, impulse aur banking ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](laws-of-motion-part6.md) mein!
