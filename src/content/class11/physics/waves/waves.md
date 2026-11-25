# Chapter 14: Waves

> **Class:** 11 | **Subject:** Physics
> **Previous Chapter:** [Oscillations (Part 6)](../oscillations/oscillations-part6.md)
> **Earlier Link:** [Class 9 Sound](../../../class9/physics/sound/sound.md)

---

## Story Time: Menaka aur Samundar ki Lahrein

**Menaka** ek coastal-oceanography engineer hai jo samundar ke kinaare floating buoy-sensors lagati hai. Subah-subah usne dekha ki ek bada ocean swell tez speed se kinaare ki taraf aa raha hai — lagta tha jaise saara paani hi beh kar beach par aa jayega!

Par jab Menaka ne apne floating yellow buoy ka GPS log dekha, toh wo chauk gayi: buoy kinaare ki taraf bilkul nahi gaya! Wo bas apni hi jagah par **upar-neeche (up and down)** SHM kar raha tha, jabki lahar ka **shape aur energy** aage badh rahi thi!

Menaka muskurayi: *"Oscillations mein ek single particle apni jagah par jhool raha tha. Jab hazaaron connected particles ek-doosre ko apna jhoolna pass on karte hain, toh **Wave** banti hai — energy travel karti hai, matter apni jagah par hi rehta hai!"*

---

## Naye Shabd (New Vocabulary)

| Term | Hinglish Meaning |
|---|---|
| **Wave (Tarang)** | Ek disturbance jo medium ke through energy aur momentum transfer karta hai, bina matter ko aage le jaaye. |
| **Mechanical Wave** | Aisi wave jise travel karne ke liye material medium (solid, liquid, gas) chahiye (jaise sound, string wave). |
| **Transverse Wave** | Jisme medium ke particles wave ke chalne ki direction ke **perpendicular** vibrate karte hain (crests aur troughs). |
| **Longitudinal Wave** | Jisme medium ke particles wave ke chalne ki direction ke **parallel** vibrate karte hain (compressions aur rarefactions). |
| **Progressive (Travelling) Wave** | Ek wave jo medium mein lagataar ek direction mein aage badhti rehti hai. |
| **Angular Wave Number (k)** | Per metre kitne radians phase badalta hai: k = 2π / λ (SI unit: rad/m). |
| **Phase (φ)** | Wave mein kisi particle ki exact oscillation state (position aur direction of motion). |

---

## 1. Transverse vs Longitudinal Waves

Class 9 ke [Sound](../../../class9/physics/sound/sound.md) chapter mein humne waves ka basic intro padha tha. Ab hum inki exact mathematics aur mechanics samjhenge.

```
TRANSVERSE WAVE (e.g., string wave)       LONGITUDINAL WAVE (e.g., sound)
  Particles: up/down (perpendicular)        Particles: left/right (parallel)

     Crest                                  |||  |  |  |||  |  |  |||
      / \         / \                       |||  |  |  |||  |  |  |||
  ---/---\-------/---\---> Wave (v)          C    R     C    R     C  ---> Wave (v)
          \     /
           \ _ /   Trough
```

| Property | Transverse Wave | Longitudinal Wave |
|---|---|---|
| Vibration direction | Perpendicular to wave velocity | Parallel to wave velocity |
| Pattern | Crests and Troughs | Compressions and Rarefactions |
| Medium required | Needs **shear elasticity** (solids & liquid surfaces only) | Needs **bulk elasticity** (solids, liquids, AND gases) |
| Example | Vibrating guitar string, ripples on water | Sound waves in air, seismic P-waves |

> **Note:** Electromagnetic waves (light, radio, X-rays) ko koi medium nahi chahiye — wo vacuum mein bhi c = 3 × 10⁸ m/s se travel karti hain aur transverse hoti hain.

---

## 2. Displacement Relation of a Progressive Harmonic Wave

Maan lo ek sinusoidal wave **+x direction** mein constant speed **v** se chal rahi hai.
Origin (x = 0) par particle SHM kar raha hai:
y(0, t) = A sin(-ωt + φ) ya y(0, t) = A sin(ωt)

Ab ek particle jo distance **x** aage hai, us tak yehi disturbance pahunchne mein **t_delay = x / v** time lagega! Isliye time t par uski displacement wahi hogi jo origin par time **(t - x/v)** par thi:

> **Progressive Wave travelling in +x direction:**
> y(x, t) = A sin(k x - ω t + φ)   ya   y(x, t) = A sin(ω t - k x + φ)

> **Progressive Wave travelling in -x direction:**
> y(x, t) = A sin(k x + ω t + φ)

### Direction Trick (Super Important!)
- Agar **x-term** aur **t-term** ke signs **OPPOSITE** hain (jaise kx - ωt ya ωt - kx), toh wave **+x direction** mein ja rahi hai!
- Agar **x-term** aur **t-term** ke signs **SAME** hain (jaise kx + ωt ya -kx - ωt), toh wave **-x direction** mein ja rahi hai!

### Key Parameters of a Harmonic Wave
1. **Amplitude (A):** Maximum displacement from mean position (m).
2. **Angular Wave Number (k):** k = 2π / λ (rad/m).
3. **Angular Frequency (ω):** ω = 2π / T = 2π f (rad/s).
4. **Wave Speed (v):**
   Ek time period T mein wave ek wavelength λ aage badhti hai:
   > **v = λ / T = f λ = ω / k**

---

## 3. Phase Difference aur Path Difference ka Rishta

Ek hi instant par do points x₁ aur x₂ ke beech distance Δx = x₂ - x₁ ko **Path Difference** kehte hain.
Unke phases ka antar:
Δφ = (k x₂ - ω t) - (k x₁ - ω t) = k (x₂ - x₁) = (2π / λ) Δx

> **Phase–Path Relation:** Δφ = (2π / λ) Δx
> **Phase–Time Relation (same point par):** Δφ = (2π / T) Δt

---

## Solved Examples

### Example 1: Ocean Swell ki Speed aur Parameters
Menaka ka buoy har 4.0 s mein ek poora up-down cycle complete karta hai, aur do adjacent crests ke beech distance 40 m hai. Wave ki frequency, angular frequency, wave number, aur wave speed nikalo.

**Solution:**
- Given: T = 4.0 s, λ = 40 m.
- Frequency: f = 1 / T = 1 / 4.0 = **0.25 Hz**
- Angular frequency: ω = 2π / T = 2π / 4.0 = **0.5π rad/s** (≈ 1.57 rad/s)
- Wave number: k = 2π / λ = 2π / 40 = **0.05π rad/m** (≈ 0.157 rad/m)
- Wave speed: v = f λ = 0.25 × 40 = **10 m/s**

**Jaanch:** v = ω / k = (0.5π) / (0.05π) = 10 m/s. Bilkul exact! ✅

---

### Example 2: Wave Equation ko Decode Karna
Ek progressive wave ki equation hai:
y(x, t) = 0.05 sin(4π x - 20π t + π/6)
jahan x aur y metres mein hain aur t seconds mein. Amplitude, wavelength, frequency, wave speed, aur direction of propagation nikalo.

**Solution:**
Standard form y = A sin(kx - ωt + φ) se compare karo:
- **Amplitude:** A = **0.05 m** (5 cm)
- **Wave number:** k = 4π rad/m ⇒ λ = 2π / k = 2π / (4π) = **0.5 m**
- **Angular frequency:** ω = 20π rad/s ⇒ f = ω / (2π) = 20π / (2π) = **10 Hz**
- **Wave speed:** v = ω / k = (20π) / (4π) = **5 m/s**
- **Direction:** x aur t ke signs opposite hain (+4πx aur -20πt), isliye wave **+x direction** mein ja rahi hai.

**Jaanch:** v = f λ = 10 × 0.5 = 5 m/s. Exact match! ✅

---

### Example 3: Phase Difference se Path Difference
Ek sound wave ki frequency 500 Hz aur speed 350 m/s hai.
(a) Do points ke beech minimum distance kya hoga jinke beech phase difference 60° (π/3 rad) hai?
(b) Ek hi point par 10⁻³ s ke time gap mein phase difference kitna hoga?

**Solution:**
Pehle wavelength nikalo:
λ = v / f = 350 / 500 = **0.70 m**

(a) Δφ = (2π / λ) Δx
⇒ π/3 = (2π / 0.70) Δx
⇒ Δx = 0.70 / 6 ≈ **0.117 m** (11.7 cm)

(b) T = 1 / f = 1 / 500 = 0.002 s = 2 × 10⁻³ s
Δφ = (2π / T) Δt = (2π / 2 × 10⁻³) × 10⁻³ = **π rad** (180°)

**Jaanch:** Δt = T/2 par particle exact opposite phase (π rad) mein hota hai. ✅

---

### Example 4: Wave Equation Khud Likho
Ek transverse wave **-x direction** mein 20 m/s ki speed se chal rahi hai. Uska amplitude 2 cm aur wavelength 4 m hai. Agar t = 0, x = 0 par y = 0 hai (aur φ = 0), toh wave equation likho.

**Solution:**
- A = 2 cm = 0.02 m
- λ = 4 m ⇒ k = 2π / 4 = 0.5π rad/m
- v = 20 m/s ⇒ f = v / λ = 20 / 4 = 5 Hz
- ω = 2π f = 10π rad/s
- Kyunki wave **-x direction** mein ja rahi hai, signs SAME honge:
  **y(x, t) = 0.02 sin(0.5π x + 10π t)** (metres mein)

**Jaanch:** v = ω / k = 10π / 0.5π = 20 m/s aur + sign confirms -x direction. ✅

---

## Aam Galtiyan (Common Mistakes)

### Mistake 1: Particle Velocity aur Wave Speed ko Ek Samajhna
**Galat Soch:** *"Wave speed v = 10 m/s hai, toh rassi ka har particle bhi 10 m/s se chal raha hai."*
**Sahi Baat:** Wave speed **v = ω / k** constant hoti hai (medium par depend karti hai). Particle velocity **v_p = ω √(A² - y²)** lagataar badalti rehti hai — maximum speed **v_max = ω A** hoti hai!
**Demo:** Example 2 mein wave speed v = 5 m/s thi, par maximum particle speed v_max = ω A = 20π × 0.05 = π ≈ 3.14 m/s hai! Dono bilkul alag hain.

### Mistake 2: (kx + ωt) ko +x Direction Samajhna
**Galat Soch:** *"Beech mein plus sign hai, matlab positive x direction!"*
**Sahi Baat:** Constant phase ke liye kx + ωt = constant ⇒ x = -(ω/k)t + const. Jaise-jaise time t badhta hai, x **kam (negative)** hota hai! Isliye **+ sign means -x direction**, aur **- sign means +x direction**.

---

## Quick Recap

- Wave transfers **energy and momentum**, not matter.
- Transverse waves need shear elasticity (solids/liquid surfaces); longitudinal waves travel in solids, liquids, and gases.
- Progressive wave: y(x, t) = A sin(kx ∓ ωt + φ), where **-** is for **+x** and **+** is for **-x**.
- k = 2π / λ, ω = 2π f = 2π / T, wave speed v = f λ = ω / k.
- Phase difference: Δφ = (2π / λ) Δx = (2π / T) Δt.

---

## Practice Questions

### Question 1
A wave travels with a speed of 340 m/s and has a frequency of 170 Hz. Find its wavelength.

### Question 2
Which type of mechanical wave (transverse or longitudinal) can propagate through the bulk of a gas, and why?

### Question 3
A progressive wave is given by y(x, t) = 0.04 sin(2π x - 50π t) where x, y are in metres and t in seconds. Find its amplitude, wavelength, and frequency.

### Question 4
For the wave in Question 3, find the wave speed and the direction of propagation.

### Question 5
A wave is described by y(x, t) = 3 sin(0.2 x + 8 t) where x, y are in cm and t in seconds. Find the wave speed in cm/s and direction of travel.

### Question 6
Two points on a progressive wave are separated by a distance of λ/4. What is the phase difference between them?

### Question 7
A sound wave has wavelength 0.80 m. Find the phase difference between two points 0.20 m apart along the direction of propagation.

### Question 8
A wave has frequency 200 Hz. What is the phase change at a fixed point in a time interval of 0.00125 s?

### Question 9
Write the equation of a progressive wave travelling along the +x axis with amplitude 0.1 m, wavelength 2 m, and speed 10 m/s (take φ = 0).

### Question 10
For y(x, t) = 0.02 sin(10 x - 200 t) (SI units), compare the wave speed with the maximum particle velocity.

### Question 11
A stone dropped into a pond creates circular ripples whose crests are 15 cm apart. If 4 crests pass a floating leaf every second, calculate the speed of the ripples.

### Question 12
True or False: Increasing the amplitude of a mechanical wave doubles its speed in the same medium.

---

## Worked Answers

### Answer 1
λ = v / f = 340 / 170 = **2.0 m**.
**Jaanch:** f λ = 170 × 2.0 = 340 m/s. ✅

### Answer 2
Sirf **longitudinal waves** gas ke bulk se travel kar sakti hain, kyunki gases mein **shear modulus (rigidity)** zero hota hai — unme sirf bulk elasticity (compression/expansion) hoti hai.
**Jaanch:** Sound in air is longitudinal. ✅

### Answer 3
Compare y = 0.04 sin(2πx - 50πt) with A sin(kx - ωt):
- Amplitude A = **0.04 m**
- k = 2π ⇒ λ = 2π / (2π) = **1.0 m**
- ω = 50π ⇒ f = 50π / (2π) = **25 Hz**
**Jaanch:** k = 2π/1 = 2π, ω = 2π(25) = 50π. ✅

### Answer 4
v = ω / k = 50π / 2π = **25 m/s**.
x aur t ke signs opposite hain (+2πx, -50πt), isliye direction **+x axis** hai.
**Jaanch:** v = f λ = 25 × 1.0 = 25 m/s. ✅

### Answer 5
k = 0.2 rad/cm, ω = 8 rad/s.
v = ω / k = 8 / 0.2 = **40 cm/s** (0.4 m/s).
Signs same hain (+0.2x, +8t), isliye direction **-x axis** hai.
**Jaanch:** 0.2 × 40 = 8. ✅

### Answer 6
Δφ = (2π / λ) × (λ / 4) = **π / 2 rad** (90°).
**Jaanch:** Quarter cycle = 90°. ✅

### Answer 7
Δφ = (2π / 0.80) × 0.20 = 2π × (1/4) = **π / 2 rad** (90°).
**Jaanch:** 0.20 m is 1/4 of 0.80 m. ✅

### Answer 8
T = 1 / 200 = 0.005 s.
Δφ = (2π / 0.005) × 0.00125 = 2π × (1/4) = **π / 2 rad** (90°).
**Jaanch:** 0.00125 = T/4 ⇒ π/2 rad. ✅

### Answer 9
A = 0.1 m, λ = 2 m ⇒ k = 2π / 2 = π rad/m.
f = v / λ = 10 / 2 = 5 Hz ⇒ ω = 2π(5) = 10π rad/s.
+x direction ke liye: **y(x, t) = 0.1 sin(π x - 10π t)**.
**Jaanch:** v = 10π / π = 10 m/s. ✅

### Answer 10
- Wave speed: v = ω / k = 200 / 10 = **20 m/s**.
- Max particle velocity: v_max = ω A = 200 × 0.02 = **4 m/s**.
Wave speed particle ki max speed se **5 times** zyada hai.
**Jaanch:** 20 / 4 = 5. ✅

### Answer 11
λ = 15 cm = 0.15 m, f = 4 Hz.
v = f λ = 4 × 0.15 = **0.60 m/s** (60 cm/s).
**Jaanch:** 4 × 15 = 60 cm/s. ✅

### Answer 12
❌ **False.** Mechanical wave ki speed sirf **medium ki properties** (elasticity aur inertia) par depend karti hai, amplitude par nahi!
**Jaanch:** Amplitude badhane se energy badhti hai, wave speed nahi. ✅

---

Ab **tum** kisi bhi wave equation ko dekh kar turant uski speed, wavelength, aur direction bata sakte ho!

**Agle Topic mein:** Wave ki speed aakhir medium ki kis property par depend karti hai? String ka tension, steel ka Young's modulus, aur Newton ki famous galti jise Laplace ne theek kiya — padhenge Part 2 mein!

**Next:** [Chapter 14: Waves (Part 2) — Speed of Waves and Newton–Laplace Formula](waves-part2.md)
