> **Class:** 11 | **Subject:** Physics | **Chapter 13:** Oscillations (Part 5)

# Damped Oscillations, Forced Oscillations & Resonance

> **Pichle topic se:** [Spring–Mass & Simple Pendulum](oscillations-part4.md) mein humne ideal frictionless SHM dekha jo anant samay tak chalta rehta hai. Par asli duniya mein har jhoola thodi der baad ruk jata hai (**Damped Oscillations**) — aur agar use sahi rhythm par baar-baar dhakka do, toh chhote dhakke se bhi bahut bada amplitude milta hai (**Resonance**)!

---

## Iravati ka Shock-Absorber & Suspension-Bridge Lab

Iravati ek automotive shock-absorber aur bridge-vibration engineer hai.
- Car ke springs ke saath **hydraulic oil dampers** lagaye jate hain taaki gaddhe se guzarne ke baad car bar-bar uchhalti na rahe — amplitude exponentially **e^(-bt/(2m))** ki tarah tezi se 0 par aa jaye!
- Doosri taraf, 1940 mein USA ka **Tacoma Narrows Bridge** sirf 65 km/h ki hawa se toot gaya, kyunki hawa ke gusts ki frequency bridge ki **natural frequency** se match kar gayi (**Resonance**) — aur chhote-chhote dhakke milkar vishaal vibrations ban gaye!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Free (Natural) Oscillations | Bina kisi bahari force ke apni **natural frequency ω₀** par hone wale oscillations |
| Damping Force (F_d) | Speed ke opposite lagne wala resistive drag: **F_d = - b v** (b = damping constant, SI unit: **kg s⁻¹ = N s m⁻¹**) |
| Damped Oscillations | Damping ke karan amplitude exponentially ghatna: **A(t) = A₀ e^(-b t / (2m))** |
| Forced Oscillations | Bahari periodic force F₀ cos(ω_d t) ke under **driving frequency ω_d** par hone wale steady oscillations |
| Resonance | Jab driving frequency **ω_d = natural frequency ω₀** ho jaye => **MAXIMUM amplitude**! |

---

## 1. Damped Oscillations (Exponential Decay!)

Restoring force (-k x) + Damping force (-b v) => m a + b v + k x = 0.
Weak damping ke liye solution:
```
  x(t) = A₀ e^(-b t / (2 m)) cos(ω' t + φ)
```
- **Amplitude decays exponentially:** **A(t) = A₀ e^(-b t / (2 m))**
- **Mechanical Energy decays TWICE as fast** (kyunki E ∝ A²!):
  **E(t) = (1/2) k A(t)² = E₀ e^(-b t / m)**!
- **Damped angular frequency:** **ω' = √( k/m - b²/(4 m²) )** (slightly smaller than natural ω₀ = √(k/m)!).

---

## 2. Forced Oscillations & Resonance

Bahari periodic force F(t) = F₀ cos(ω_d t) lagane par shuruati natural vibrations mar jati hain aur system **driving frequency ω_d** par steady amplitude A se oscillate karta hai:
```
  A = (F₀ / m) / √( (ω₀² - ω_d²)² + (b ω_d / m)² )
```
- **Resonance Condition:** **ω_d = ω₀** => denominator minimum => **A_max = F₀ / (b ω₀)**!
- **Sharpness of Resonance:** Jitna **KAM damping (chhota b)**, utna **TEEKHA aur OONCHA** resonance peak!
- **Real-world examples:** Radio/TV station tuning (LC resonance), soldiers breaking step on suspension bridges, glass shattering from a matching musical note, MRI scanners!

---

## Solved Examples

### Example 1: Amplitude & Energy Decay in Damped Oscillation

A damped oscillator of mass m = 0.5 kg has damping constant b = 0.1 kg/s. Find the time taken for:
(a) its amplitude to fall to 1/e of its initial value,
(b) its mechanical energy to fall to 1/e of its initial value!

**Solution:**
- (a) A(t) = A₀ e^(-b t / (2m)) = A₀ e⁻¹ => b t / (2m) = 1 => **t_A = 2 m / b** = 2(0.5) / 0.1 = **10 s**.
- (b) E(t) = E₀ e^(-b t / m) = E₀ e⁻¹ => b t / m = 1 => **t_E = m / b** = 0.5 / 0.1 = **5 s** (half of t_A!).

Jaanch:
- Jaanch: Energy decays TWICE as fast as amplitude (5 s vs 10 s)! ✅

---

### Example 2: Half-Life Style Amplitude Decay (Geometric Progression!)

The amplitude of a damped pendulum drops to **half** of its initial value (A₀ / 2) in 20 seconds. What will its amplitude be after 60 seconds?

**Solution:**
Exponential decay means equal time intervals multiply amplitude by the **exact same factor**!
- 0 -> 20 s: A₀ / 2
- 20 -> 40 s: A₀ / 4
- 40 -> 60 s: **A₀ / 8** (12.5% of initial amplitude)!

Jaanch:
- Jaanch: (1/2)³ = 1/8; energy drops to (1/8)² = 1/64! ✅

---

### Example 3: Resonance Amplitude with Two Different Dampings

A 1 kg block on a spring (k = 100 N/m) is driven by a periodic force F₀ = 2 N at resonance (ω_d = ω₀). Find its steady resonance amplitude if the damping constant is: (a) b = 0.5 kg/s, (b) b = 0.1 kg/s.

**Solution:**
Natural frequency ω₀ = √(k / m) = √(100 / 1) = **10 rad/s**.
At resonance, A_max = F₀ / (b ω₀):
- (a) b = 0.5: A_max = 2 / (0.5 × 10) = 2 / 5 = **0.4 m (40 cm)**.
- (b) b = 0.1: A_max = 2 / (0.1 × 10) = 2 / 1 = **2.0 m** (5× taller peak!).

Jaanch:
- Jaanch: Lower damping gives a sharper, much taller resonance peak ✅

---

### Example 4: Damped Angular Frequency Shift

A 1 kg mass on a spring of k = 25 N/m oscillates with damping constant b = 6 kg/s. Find its natural angular frequency ω₀ and its damped angular frequency ω'.

**Solution:**
- ω₀ = √(25 / 1) = **5 rad/s**.
- ω' = √(k/m - b²/(4m²)) = √(25 - 36 / 4) = √(25 - 9) = √16 = **4 rad/s**.

Jaanch:
- Jaanch: 3-4-5 right triangle! Damping slightly slows down the oscillation (4 < 5 rad/s) ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Damped oscillation mein Energy ka decay time aur Amplitude ka decay time equal maan lena
- **Galat:** Amplitude 10 s mein 1/e hua toh Energy bhi 10 s mein 1/e hogi!
- **Sahi:** E ∝ A² => Energy **DOUBLE rate** se decay hoti hai (e^(-bt/m) vs e^(-bt/(2m))) => **t_E = t_A / 2 = 5 s**!

### Galti 2: Forced oscillation mein steady frequency ko natural frequency ω₀ bol dena
- **Galat:** Bahari force lagne par bhi system apni natural frequency ω₀ par hi vibrate karega!
- **Sahi:** Steady state mein forced oscillator hamesha **driving frequency ω_d** par vibrate karta hai!

### Galti 3: Damping ko resonance peak ko badhata hua maan lena
- **Galat:** Zyada damping => bada resonance peak!
- **Sahi:** A_max = F₀ / (b ω₀) => **kam damping (chhota b)** => **BADA aur SHARPER** resonance peak!

---

## Quick Recap

- **Damped:** F_d = -b v; **A(t) = A₀ e^(-bt/(2m))**; **E(t) = E₀ e^(-bt/m)** (decays 2× faster!); **ω' = √(ω₀² - b²/(4m²))**.
- **Forced:** Steady frequency = **ω_d**.
- **Resonance:** **ω_d = ω₀** => **A_max = F₀ / (b ω₀)** (smaller b = sharper peak!).

---

## Practice Questions

### Question 1
What is the SI unit and dimensional formula of the damping constant b in F_d = -b v?

**Solution:**
b = F / v => SI unit **N s m⁻¹ = kg s⁻¹**; dimensions **[M L⁰ T⁻¹]**.

Jaanch:
- Jaanch: [M L T⁻²] / [L T⁻¹] = [M T⁻¹] ✅

---

### Question 2
The amplitude of a damped oscillator drops to 1/3 of its initial value in 10 s. What fraction of its initial amplitude remains after 30 s?

**Solution:**
30 s = 3 intervals of 10 s => (1/3)³ = **1 / 27**!

Jaanch:
- Jaanch: 1/3 -> 1/9 -> 1/27 ✅

---

### Question 3
In Question 2, if the amplitude drops to 1/3 in 10 s, to what fraction does its mechanical **energy** drop in 10 s?

**Solution:**
E ∝ A² => (1/3)² = **1 / 9**!

Jaanch:
- Jaanch: Energy scales as amplitude squared ✅

---

### Question 4
A 2 kg mass on a spring of k = 200 N/m is driven by a periodic force. At what driving frequency (in rad/s) will resonance occur?

**Solution:**
ω_d = ω₀ = √(k / m) = √(200 / 2) = √100 = **10 rad/s**.

Jaanch:
- Jaanch: Resonance occurs when driving frequency equals natural frequency ✅

---

### Question 5
A damped oscillator (m = 0.2 kg, b = 0.04 kg/s) loses mechanical energy exponentially. Find the time for its energy to drop to 1/e of its initial value.

**Solution:**
t_E = m / b = 0.2 / 0.04 = **5 s**.

Jaanch:
- Jaanch: b t / m = 0.04(5)/0.2 = 1 => e⁻¹ ✅

---

### Question 6
Why are marching soldiers ordered to "break step" (not march in unison) when crossing a suspension bridge?

**Solution:**
Agar sabhi soldiers ki rhythmic marching frequency bridge ki **natural frequency** se match kar jaye, toh **Resonance** ke karan bridge ke oscillations itne bade ho sakte hain ki bridge toot jaye!

Jaanch:
- Jaanch: Breaking step prevents a coherent periodic driving force ✅

---

### Question 7
A 1 kg block on a spring (k = 100 N/m) has damping constant b = 12 kg/s. Find its damped angular frequency ω'.

**Solution:**
ω' = √(100/1 - 144/4) = √(100 - 36) = √64 = **8 rad/s** (down from ω₀ = 10 rad/s!).

Jaanch:
- Jaanch: 6-8-10 right triangle ✅

---

### Question 8
If a driven oscillator with zero damping (b = 0) is driven at its exact natural frequency (ω_d = ω₀), what does the formula predict for its steady-state amplitude?

**Solution:**
A_max = F₀ / (0 × ω₀) -> **Infinity (∞)**! (In reality, amplitude grows until the system breaks or non-linear damping stops it.)

Jaanch:
- Jaanch: Zero damping at exact resonance has zero energy loss per cycle ✅

---

### Question 9
How does a car's shock absorber prevent the car from bouncing up and down repeatedly after hitting a speed bump?

**Solution:**
Shock absorber oil-filled hydraulic damping (F_d = -b v) apply karta hai, jo vertical oscillation energy ko heat mein badal kar amplitude ko 1 hi cycle mein zero par le aata hai (near-critical damping!).

Jaanch:
- Jaanch: Damping rapidly dissipates unwanted vibrational energy ✅

---

### Question 10
A damped oscillator has initial amplitude 16 cm and drops to 8 cm after 4 seconds. After how many more seconds will its amplitude drop to 2 cm?

**Solution:**
Halving time = 4 s:
- 0 s: 16 cm -> 4 s: 8 cm -> 8 s: 4 cm -> 12 s: **2 cm**.
Additional time after 4 s = 12 - 4 = **8 seconds**!

Jaanch:
- Jaanch: 8 cm -> 4 cm (4 s) -> 2 cm (4 s) => 8 s more ✅

---

### Question 11
State whether the following statements are True or False:
(a) In steady-state forced oscillation, the system vibrates with its own natural frequency ω₀ regardless of the driving frequency.
(b) Lower damping produces a sharper resonance curve.

**Solution:**
- (a) **False** ❌ — Steady-state forced oscillations ALWAYS occur at the **driving frequency ω_d**!
- (b) **True** ✅ — Smaller b gives a much taller, narrower peak at ω_d = ω₀.

Jaanch:
- Jaanch: Verified from Section 2 ✅

---

### Question 12
A 0.5 kg mass on a spring (k = 50 N/m) is driven by F₀ = 5 N at resonance with b = 0.25 kg/s. Find the resonance amplitude A_max.

**Solution:**
ω₀ = √(50 / 0.5) = 10 rad/s.
A_max = F₀ / (b ω₀) = 5 / (0.25 × 10) = 5 / 2.5 = **2.0 m**.

Jaanch:
- Jaanch: 0.25 × 10 = 2.5; 5 / 2.5 = 2.0 m ✅

---

Damping aur Resonance ab tumhare liye bilkul clear hain!

**Agle topic mein:** Poore Oscillations chapter ke sabhi tools ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](oscillations-part6.md) mein!
