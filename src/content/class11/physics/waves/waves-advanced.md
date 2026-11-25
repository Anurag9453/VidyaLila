# Chapter 14: Waves — Gehrai Mein (Advanced Level)

> **Class:** 11 | **Subject:** Physics (Advanced)
> **Core Chapter:** [Waves (Part 6)](waves-part6.md)

---

## Story Time: Sulekha aur Heavy Hanging Cable ka Puzzle

**Sulekha** ek theoretical-acoustics aur wave-propagation researcher hai. Ek construction tower se ek 40 m lambi uniform heavy steel cable neeche latak rahi thi. Sulekha ne neeche se cable ko ek chhota sa transverse jhatka diya aur stopwatch start kar di!

Uske intern ne socha: *"Tension toh neeche zero hai aur upar jaate-jaate badh raha hai — wave ki speed constant hi nahi hai! Upar pahunchne mein kitna time lagega?"*

Sulekha muskurayi: *"Aaj hum **Gehrai Mein** utrenge — 1D Wave PDE, particle velocity vs slope, wave power aur decibel (dB) scale, hanging rope ka exact travel time **t = 2 √(L/g)**, composite strings, aur hawa (wind) + angled Doppler effect ko derive aur solve karenge!"*

---

## 1. The 1D Differential Wave Equation & Slope–Velocity Relation

Koi bhi function **y(x, t) = f(x ∓ vt)** jo shape bina badle constant speed **v** se travel karta hai, is universal **1D Wave Partial Differential Equation (PDE)** ko satisfy karta hai:

> **1D Wave Equation:**
> **∂²y / ∂t² = v² (∂²y / ∂x²)**

### Particle Velocity vs Wave Slope (Goldmine Shortcut!)
Harmonic ya kisi bhi +x travelling wave y = f(x - vt) ke liye:
- Particle velocity: v_p = ∂y / ∂t = -v f'(x - vt)
- Local slope of string: ∂y / ∂x = f'(x - vt)

Dono ko jodo:

> **Particle Velocity–Slope Relation:**
> **v_p = - v × (∂y / ∂x)**   (for +x travelling wave)
> **v_p = + v × (∂y / ∂x)**   (for -x travelling wave)

**Visual Trick:** +x jaati hui wave par jahan rassi ka **slope negative (neeche dhalan)** hai, wahan particle **UPAR** ja raha hai (v_p > 0)! Jahan **slope positive (upar chadhai)** hai, wahan particle **NEECHE** ja raha hai (v_p < 0)!

---

## 2. Power, Intensity & Sound Level (Decibel Scale)

Ek sinusoidal wave y = A sin(kx - ωt) string ya 3D medium mein energy carry karti hai:

- **Average Power transmitted along a stretched string:**
  > **P_avg = (1/2) μ ω² A² v**   (Watts)
  *(Note: P ∝ A² aur P ∝ f²!)*

- **Intensity of a 3D Wave (Power per unit area, W/m²):**
  > **I = P / Area = (1/2) ρ ω² A² v**
  Point isotropic source ke liye (distance r par area = 4π r²): **I ∝ 1 / r²** aur **A ∝ 1 / r**!

- **Sound Level in Decibels (dB):**
  Insaan ka kaan intensity ko logarithmic scale par mehsoos karta hai. Threshold of hearing **I₀ = 10⁻¹² W/m²** (0 dB) ke respect mein:

  > **Sound Level (β):** **β = 10 log₁₀(I / I₀)**   (dB)

### Decibel Golden Shortcuts (Mental Math!)
- Intensity **10×** badhao ⇒ **+10 dB** (jaise 100× ⇒ +20 dB, 1000× ⇒ +30 dB)
- Intensity **2×** badhao ⇒ **+3 dB** (kyunki 10 log₁₀ 2 ≈ 3.01 dB!)
- Distance **r ko double** karo (point source) ⇒ I becomes 1/4 ⇒ **-6 dB**!

---

## 3. Wave on a Hanging Heavy Rope (Variable Tension!)

Maan lo mass **M** aur length **L** ki uniform rope ceiling se vertically latak rahi hai (μ = M / L).
Neeche wale free end se height **y** upar tension neeche latak rahe part ke weight ke barabar hoga:
T(y) = (μ y) g

Toh height y par wave ki local speed:
> **v(y) = √(T(y) / μ) = √(g y)**

**Shocking Result:** Speed **v = √(g y)** rope ke mass M se **independent** hai!
Acceleration of the wave pulse: a = v (dv/dy) = **g / 2 = constant**!
Motion of pulse from bottom (y = 0, u = 0) to top (y = L) with constant acceleration a = g/2:
L = (1/2) a t² = (1/2)(g/2) t² = (1/4) g t²

> **Time for Pulse to Reach Top of Hanging Rope:**
> **t = 2 √(L / g)**

*(Agar neeche ek extra mass m latka ho, toh T(y) = (m + μy)g hota hai aur t = 2√((m/μ + L)/g) - 2√(m/(μg)).)*

---

## 4. Reflection & Transmission at a Composite String Junction

Jab do alag linear density (μ₁ aur μ₂, wave speeds v₁ aur v₂) ki strings ko jod kar wave bheji jaati hai (incident amplitude A_i):
- **Frequency f kabhi nahi badalti** (v₁/λ₁ = v₂/λ₂)!
- **Reflected amplitude:** **A_r = [ (v₂ - v₁) / (v₂ + v₁) ] A_i**
- **Transmitted amplitude:** **A_t = [ 2 v₂ / (v₂ + v₁) ] A_i**

Check:
- **Rarer → Denser** (v₂ < v₁): A_r is **negative** ⇒ reflected wave flips phase by **π**! (Transmitted wave NEVER flips!)
- **Denser → Rarer** (v₂ > v₁): A_r is **positive** ⇒ NO phase flip!

---

## 5. Doppler Effect with Wind & Oblique (Angled) Motion

### (a) Effect of Wind (Speed v_w)
Sound hawa ke respect mein speed **v** se chalta hai. Agar hawa source se observer ki direction mein speed **v_w** se chal rahi ho, toh effective sound speed **(v + v_w)** ho jaati hai (opposite wind ke liye **v - v_w**):

> **Doppler with Wind:** **f' = f × [ (v ± v_w ± v_o) / (v ± v_w ∓ v_s) ]**

*(Note: Agar source aur observer dono stationary hon, toh wind se frequency bilkul nahi badalti — v_w numerator aur denominator dono mein same add hota hai aur cancel ho jaata hai!)*

### (b) Oblique / Angled Doppler Effect
Agar source observer ko join karne wali line se angle **θ** par speed v_s se chal raha hai, toh sirf **line-of-sight component (v_s cos θ)** hi Doppler shift deta hai!

> **Oblique Doppler:** **f' = f × [ v / (v - v_s cos θ) ]**
*(Jab source exact closest approach par hota hai, θ = 90° ⇒ cos 90° = 0 ⇒ **f' = f** — koi Doppler shift nahi!)*

---

## Advanced Solved Examples

### Example 1: Hanging Heavy Rope Travel Time
Sulekha ek 40 m lambe uniform steel cable (mass 20 kg) ke bottom end par ek transverse pulse create karti hai. Pulse ko top end tak pahunchne mein kitna time lagega? (g = 10 m/s².)

**Solution:**
Direct formula (independent of mass 20 kg!):
t = 2 √(L / g) = 2 √(40 / 10) = 2 √4 = **4.0 s**!

**Jaanch:** Constant acceleration a = g/2 = 5 m/s²; s = (1/2)(5)(4²) = 40 m. Exact! ✅

---

### Example 2: Decibel Scale & Multiple Sound Sources
Ek factory machine 60 dB ka sound level produce karti hai.
(a) 10 identical machines ek saath chalu karne par sound level kya hoga?
(b) 2 identical machines ek saath chalu karne par sound level kya hoga?

**Solution:**
- (a) Intensity becomes 10 I ⇒ β' = β + 10 log₁₀(10) = 60 + 10 = **70 dB**!
- (b) Intensity becomes 2 I ⇒ β' = β + 10 log₁₀(2) = 60 + 3.01 ≈ **63 dB**!

**Jaanch:** 10 machines ≠ 600 dB! Logarithmic scale adds +10 dB per factor of 10. ✅

---

### Example 3: Wave Power on a Stretched String
Ek string (μ = 0.01 kg/m) par 50 m/s ki speed se ek harmonic wave (A = 0.02 m, ω = 100 rad/s) travel kar rahi hai. Wave dwara transmitted average power nikalo.

**Solution:**
P_avg = (1/2) μ ω² A² v
= 0.5 × 0.01 × (100)² × (0.02)² × 50
= 0.5 × 0.01 × 10000 × 0.0004 × 50
= 0.5 × 100 × 0.02 = **1.0 W**!

**Jaanch:** (1/2)(10⁻²)(10⁴)(4×10⁻⁴)(50) = 0.5 × 200 × 10⁻² = 1.0 W. ✅

---

### Example 4: Composite String Reflection & Transmission
Ek wave (A_i = 6 cm) ek patli string (v₁ = 40 m/s) se moti string (v₂ = 20 m/s) ke junction par pahunchti hai. Reflected amplitude A_r aur transmitted amplitude A_t nikalo.

**Solution:**
- A_r = [ (v₂ - v₁) / (v₂ + v₁) ] A_i = [ (20 - 40) / (20 + 40) ] × 6 = (-20 / 60) × 6 = **-2 cm** (inverted!).
- A_t = [ 2 v₂ / (v₂ + v₁) ] A_i = [ 40 / 60 ] × 6 = **+4 cm** (upright!).

**Jaanch:** Continuity at junction: A_i + A_r = 6 + (-2) = 4 cm = A_t! Exact! ✅

---

### Example 5: Doppler Effect with Wind & Angle
Ek stationary source (f = 640 Hz) se observer 20 m/s ki speed se door ja raha hai, jabki hawa (wind) source se observer ki taraf 10 m/s ki speed se chal rahi hai (v = 330 m/s). Observer ko sunai dene wali frequency nikalo.

**Solution:**
Wind is along source → observer ⇒ effective sound speed = v + v_w = 330 + 10 = **340 m/s**.
Observer receding (- v_o in numerator), source stationary (v_s = 0):
f' = 640 × [ (340 - 20) / 340 ] = 640 × (320 / 340) = 640 × (16 / 17) ≈ **602.4 Hz**.

**Jaanch:** 320 / 340 < 1 ⇒ frequency drops from 640 Hz to 602.4 Hz. ✅

---

## Advanced Practice Questions

### Question 1
Verify whether y(x, t) = A sin(kx - ωt) satisfies the 1D wave PDE ∂²y/∂t² = v² ∂²y/∂x², and identify v in terms of ω and k.

### Question 2
A progressive wave travels in the +x direction at 20 m/s. At a certain point and instant, the slope of the string ∂y/∂x is -0.05. Find the instantaneous particle velocity v_p (magnitude and direction).

### Question 3
Calculate the average power transmitted along a string of linear mass density 0.02 kg/m carrying a wave of amplitude 0.01 m, angular frequency 200 rad/s, and speed 40 m/s.

### Question 4
If the amplitude of a wave is doubled and its frequency is tripled on the same string, by what factor does the average power transmitted increase?

### Question 5
The intensity of a sound wave is 10⁻⁶ W/m². Find its sound level in decibels (take I₀ = 10⁻¹² W/m²).

### Question 6
How many identical 50 dB speakers must be switched on simultaneously to produce a sound level of 70 dB?

### Question 7
A uniform rope of length 10 m and mass 2.5 kg hangs freely from a ceiling. Calculate the time taken by a transverse pulse to travel from the bottom to the top (g = 10 m/s²).

### Question 8
In Question 7, what is the speed of the pulse when it is at the exact midpoint (y = 5.0 m from bottom) of the rope?

### Question 9
A wave pulse of amplitude 10 cm travels from a heavier string (v₁ = 30 m/s) into a lighter string (v₂ = 50 m/s). Find the reflected and transmitted amplitudes.

### Question 10
A train moves at 40 m/s along a straight track sounding a 620 Hz whistle. A stationary observer stands off the track such that at a certain moment the line joining the train to the observer makes an angle of 60° with the track (train approaching). Find the apparent frequency heard (v = 330 m/s).

### Question 11
A stationary horn blows at 500 Hz while wind blows at 20 m/s from the horn towards a stationary listener. What frequency does the listener hear?

### Question 12
True or False: When a transverse wave passes from a lighter string into a heavier string, the transmitted wave undergoes a phase reversal of π.

---

## Worked Answers

### Answer 1
- ∂²y/∂t² = -ω² A sin(kx - ωt) = -ω² y.
- ∂²y/∂x² = -k² A sin(kx - ωt) = -k² y.
Ratio: (∂²y/∂t²) / (∂²y/∂x²) = ω² / k² = v² ⇒ **v = ω / k**. Satisfies PDE!
**Jaanch:** Dimensions of ω/k = (s⁻¹)/(m⁻¹) = m/s. ✅

### Answer 2
v_p = -v (∂y/∂x) = -(20)(-0.05) = **+1.0 m/s** (upwards, +y direction!).
**Jaanch:** Negative slope on +x wave ⇒ particle moves UP. ✅

### Answer 3
P_avg = (1/2) μ ω² A² v = 0.5 × 0.02 × (200)² × (0.01)² × 40
= 0.01 × 40000 × 0.0001 × 40 = 0.04 × 40 = **1.6 W**.
**Jaanch:** 0.5 × 0.02 × 4 × 40 = 1.6 W. ✅

### Answer 4
P_avg ∝ f² A².
New power factor = (3)² × (2)² = 9 × 4 = **36 times**!
**Jaanch:** 3² × 2² = 36. ✅

### Answer 5
β = 10 log₁₀(10⁻⁶ / 10⁻¹²) = 10 log₁₀(10⁶) = 10 × 6 = **60 dB**.
**Jaanch:** 10⁶ = 60 dB above 0 dB. ✅

### Answer 6
Increase = 70 - 50 = 20 dB = 10 log₁₀(N) ⇒ log₁₀(N) = 2 ⇒ **N = 100 speakers**!
**Jaanch:** 100× intensity = +20 dB (50 + 20 = 70 dB). ✅

### Answer 7
t = 2 √(L / g) = 2 √(10 / 10) = 2 × 1 = **2.0 s** (independent of mass 2.5 kg!).
**Jaanch:** a = g/2 = 5 m/s² ⇒ (1/2)(5)(2²) = 10 m. ✅

### Answer 8
v(y) = √(g y) = √(10 × 5.0) = √50 = 5 √2 ≈ **7.07 m/s**.
**Jaanch:** Average speed from 0 to 10 m is L/t = 10/2 = 5 m/s; at midpoint speed is √(gL/2) = 7.07 m/s. ✅

### Answer 9
- A_r = [ (50 - 30) / (50 + 30) ] × 10 = (20 / 80) × 10 = **+2.5 cm** (no phase flip!).
- A_t = [ 2(50) / (50 + 30) ] × 10 = (100 / 80) × 10 = **+12.5 cm**!
**Jaanch:** Continuity check: A_i + A_r = 10 + 2.5 = 12.5 cm = A_t! ✅

### Answer 10
Line-of-sight component: v_s cos 60° = 40 × (1/2) = **20 m/s**.
f' = 620 × [ 330 / (330 - 20) ] = 620 × (330 / 310) = 2 × 330 = **660 Hz**.
**Jaanch:** 620 / 310 = 2 ⇒ 2 × 330 = 660 Hz. ✅

### Answer 11
**500 Hz (no change)!** Both source and listener are stationary, so wind speed v_w adds equally to numerator and denominator: f' = 500 × (v + v_w)/(v + v_w) = 500 Hz.
**Jaanch:** Relative velocity between source and listener is zero. ✅

### Answer 12
❌ **False.** Transmitted wave **kabhi phase flip nahi karti** (A_t = 2v₂/(v₁+v₂) A_i is always positive!). Sirf **reflected wave** (light → heavy, v₂ < v₁) mein π ka phase flip hota hai!
**Jaanch:** 2 v₂ / (v₁ + v₂) > 0 always. ✅

---

Shabash! Ab **tumne** Class 11 Physics ke aakhiri chapter ke Advanced level ko bhi poori gehrai ke saath master kar liya hai!
