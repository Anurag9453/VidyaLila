# Chapter 14: Waves (Part 6) — Sab Kuch Mila Kar & Chapter Wrap-up

> **Class:** 11 | **Subject:** Physics
> **Previous Topic:** [Waves (Part 5)](waves-part5.md)

---

## Story Time: Ahilya ka National Acoustics Lab Finale

**Ahilya** National Acoustics & Wave-Metrology Lab ki Director hai. Aaj uski lab mein ek grand calibration test chal raha hai: ek stretched wire ko ek closed organ pipe ke saath resonate karwana hai, garmi badhne par pipe ke beats ginn-ne hain, aur ek moving drone par lage speaker ka Doppler-beat shift check karna hai!

Ahilya ne apni team ko smile karke kaha: *"Ab tak tumne progressive waves, Laplace speed, standing waves, organ pipes, beats, aur Doppler effect alag-alag padhe. Aaj **sab kuch mila kar** solve karenge — aur isi ke saath poora Class 11 Physics complete hoga!"*

---

## Decision Map: Kaunsa Formula Kab Lagayein?

```
1. Progressive Wave Equation y = A sin(kx ± ωt + φ)
   ├── k = 2π/λ, ω = 2πf, v = ω/k = fλ
   ├── Opposite signs (kx - ωt) => +x; Same signs (kx + ωt) => -x
   └── Phase difference: Δφ = (2π/λ) Δx = (2π/T) Δt

2. Wave Speed in Medium
   ├── Stretched string: v = √(T / μ)
   ├── Solid rod: v = √(Y / ρ); Liquid: v = √(B / ρ)
   └── Gas (Laplace): v = √(γP / ρ) = √(γRT / M)   [v ∝ √T, independent of P]

3. Superposition & Standing Waves
   ├── Interference: A_res = √(A₁² + A₂² + 2A₁A₂ cos φ), I_max/I_min = (√I₁+√I₂)²/(√I₁-√I₂)²
   ├── Standing wave: y = 2A sin(kx) cos(ωt)   [N-N = λ/2, N-A = λ/4]
   ├── String & Open Pipe: f_n = n v / (2L)    [ALL harmonics 1:2:3]
   ├── Closed Pipe: f = (2m-1) v / (4L)        [ODD harmonics 1:3:5 ONLY]
   └── Resonance Tube: v = 2 f (L₂ - L₁),  e = (L₂ - 3L₁)/2

4. Beats & Doppler Effect
   ├── Beats: f_beat = |f₁ - f₂|  [Wax => f↓, File => f↑]
   └── Doppler: f' = f (v ± v_o) / (v ∓ v_s)  [Echo from wall: f (v + v_c)/(v - v_c)]
```

---

## Mixed Synthesis Solved Examples

### Example 1: Stretched String + Closed Organ Pipe Resonance
Ek 0.50 m lambi string (mass 5.0 g) apne fundamental mode mein vibrate karte hue ek 0.25 m lambe closed organ pipe ke fundamental mode ke saath exact resonance mein hai. Agar air mein sound ki speed 340 m/s hai, toh string ka tension T nikalo.

**Solution:**
- Closed pipe fundamental:
  f_pipe = v_air / (4 L_pipe) = 340 / (4 × 0.25) = 340 / 1.0 = **340 Hz**.
- String resonance mein hai ⇒ f_string = 340 Hz:
  f_string = (1 / 2 L_s) √(T / μ)
  Yahan L_s = 0.50 m, μ = 0.005 kg / 0.50 m = **0.010 kg/m**.
- Wave speed on string: v_s = 2 L_s f = 2 × 0.50 × 340 = **340 m/s**.
- Tension: T = μ v_s² = 0.010 × 340² = 0.010 × 115600 = **1156 N**!

**Jaanch:** f = (1/1.0) √(1156 / 0.010) = √115600 = 340 Hz. Exact! ✅

---

### Example 2: Doppler Effect + Beats (Moving Source near a Wall!)
Ek tuning fork (frequency 320 Hz) ko 10 m/s ki speed se ek vertical wall ki taraf le jaaya jaata hai. Wall ke peechhe (ya fork aur wall ke beech nahi — wall se door) nahi, balki **fork aur wall ke beech** khada ek stationary observer direct sound aur wall se reflect sound dono sunta hai. Kya use beats sunai denge? Kitne? (v = 330 m/s.)

**Solution:**
- **Direct wave (fork approaching observer):**
  f_direct = 320 × [ 330 / (330 - 10) ] = 320 × (330 / 320) = **330 Hz**.
- **Reflected wave from wall:** Fork wall ki taraf 10 m/s se ja raha hai, toh wall ko bhi 330 Hz milta hai aur stationary wall wahi **330 Hz** reflect karti hai!
  ⇒ f_reflected = **330 Hz**!
- **Beats:** f_beat = |330 - 330| = **0 beats/s**! (Observer ko koi beats nahi sunai denge!)

*(Note: Agar observer fork ke **peechhe** hota, toh direct wave receding hoti f_d = 320 × 330/340 ≈ 310.6 Hz, jabki reflected wave 330 Hz hoti — tab ~19.4 beats/s bante!)*

**Jaanch:** Between source and wall, source approaches both observer and wall at same speed ⇒ same frequency! ✅

---

### Example 3: Temperature Change + Organ Pipe Beats
Do identical open organ pipes 27 °C par 300 Hz ka exact same fundamental note bajate hain. Agar ek pipe ki hawa ko garam karke 39 °C kar diya jaaye (doosra 27 °C par hi rahe), toh dono ko saath bajane par kitne beats/s sunai denge?

**Solution:**
- T₁ = 27 + 273 = 300 K; T₂ = 39 + 273 = 312 K.
- Pipe mein f ∝ v ∝ √T:
  f₂ = f₁ √(T₂ / T₁) = 300 × √(312 / 300) = 300 × √(1.04).
- Binomial approximation √(1 + x) ≈ 1 + x/2 (x = 0.04 chhota hai):
  √1.04 ≈ 1 + 0.02 = 1.02.
  f₂ ≈ 300 × 1.02 = **306 Hz**.
- Beat frequency: f_beat = 306 - 300 = **6 beats/s**!

**Jaanch:** Exact √1.04 = 1.0198 ⇒ 300 × 1.0198 = 305.94 Hz ⇒ 5.94 ≈ 6 beats/s. ✅

---

### Example 4: Standing Wave + String Tension
Ek 1.5 m lambe wire (μ = 0.02 kg/m) par standing wave ki equation hai:
y(x, t) = 0.04 sin(2π x) cos(200π t)  (SI units mein).
Nikalo: (a) Wire mein kitne loops ban rahe hain, (b) Wire ka tension T kya hai?

**Solution:**
- k = 2π rad/m ⇒ λ = 2π / (2π) = **1.0 m**.
- Ek loop ki length = λ / 2 = **0.5 m**.
- Total loops in L = 1.5 m: n = 1.5 / 0.5 = **3 loops** (3rd harmonic!).
- Wave speed: v = ω / k = 200π / (2π) = **100 m/s**.
- Tension: T = μ v² = 0.02 × 100² = 0.02 × 10000 = **200 N**!

**Jaanch:** f₃ = 3 × 100 / (2 × 1.5) = 100 Hz; ω = 2π(100) = 200π. Exact! ✅

---

### Example 5: String Tension Percentage Change + Beats
Ek sonometer wire 400 Hz ke tuning fork ke saath exact unison (0 beats) mein hai. Agar wire ka tension 2% badha diya jaaye, toh ab kitne beats/s sunai denge?

**Solution:**
Kyunki f ∝ √T = T^(1/2), small percentage change ke liye:
Δf / f ≈ (1/2) (ΔT / T) = (1/2) × 2% = **+1%**.
Δf = 1% of 400 Hz = **4 Hz**!
Toh ab **4 beats/s** sunai denge!

**Jaanch:** Exact: 400 × √1.02 = 400 × 1.00995 = 403.98 Hz ⇒ ~4 beats/s. ✅

---

### Example 6: Laplace Speed + Open Pipe Length
0 °C par ek open organ pipe ki fundamental frequency 332 Hz hai (v₀ = 332 m/s).
(a) Pipe ki length L kya hai?
(b) Agar pipe ko air ki jagah Helium (γ = 5/3, M = 4 g/mol; air ke liye γ = 7/5, M = 29 g/mol) se bhar dein (same 0 °C), toh fundamental frequency kitne guna ho jayegi?

**Solution:**
- (a) L = v₀ / (2 f₁) = 332 / (2 × 332) = **0.50 m**.
- (b) f ∝ v = √(γ R T / M):
  f_He / f_air = √[ (γ_He / γ_air) × (M_air / M_He) ]
  = √[ ((5/3) / (7/5)) × (29 / 4) ]
  = √[ (25 / 21) × 7.25 ] = √(8.631) ≈ **2.94 times**!
  Nayi frequency ≈ 332 × 2.94 ≈ **975 Hz**!

**Jaanch:** Helium is much lighter and has higher γ ⇒ almost 3× higher pitch! ✅

---

## 3 Classic Synthesis Mistakes

### Mistake 1: Beats + Doppler mein Observer ki Position Ignore Karna
**Galat Soch:** *"Moving source aur wall ke beech observer ko hamesha beats sunai dete hain."*
**Sahi Baat:** Example 2 mein dekha — agar observer **source aur wall ke beech** hai, toh direct aur reflected dono waves ki frequency SAME (330 Hz) hoti hai ⇒ **0 beats**! Beats tabhi sunai dete hain jab observer source ke **peechhe** ho (ek receding, ek approaching).

### Mistake 2: Small % Change mein √ ka 1/2 Factor Bhoolna
**Galat Soch:** *"Tension 2% badha toh frequency bhi 2% badh kar 8 beats/s degi!"*
**Sahi Baat:** f ∝ √T = T^(1/2) hai! Power 1/2 aage aata hai: **Δf / f = (1/2) ΔT / T = 1% = 4 beats/s**! (Yehi rule temperature ke liye bhi lagta hai: Δf / f = (1/2) ΔT_K / T_K!)

### Mistake 3: Open aur Closed Pipe ko Equal Length par Same Fundamental Maan Lena
**Galat Soch:** *"Same length L ke open aur closed pipe ka fundamental same hota hai."*
**Sahi Baat:** Open pipe ka fundamental **v/(2L)** aur closed pipe ka **v/(4L)** hota hai — open pipe ka fundamental **double** hota hai! Same fundamental tab hota hai jab **L_open = 2 L_closed**.

---

## Practice Questions (Mixed Chapter Synthesis)

### Question 1
A progressive wave is given by y(x, t) = 0.02 sin(5π x - 100π t) (SI units). Find its wavelength, frequency, wave speed, and maximum particle velocity.

### Question 2
A steel wire of length 1.0 m and linear mass density 0.004 kg/m is stretched with tension 160 N. Find its fundamental frequency and 3rd harmonic.

### Question 3
Two coherent sound waves of intensities 16 I₀ and 9 I₀ interfere. Calculate the ratio I_max / I_min.

### Question 4
A standing wave on a 2.0 m string is given by y(x, t) = 0.06 sin(2π x) cos(80π t) (SI units). How many loops are formed on the string, and what is the speed of the component waves?

### Question 5
An open organ pipe of length 0.85 m resonates in its fundamental mode in air (v = 340 m/s). What length of a closed organ pipe will have the same fundamental frequency?

### Question 6
In a resonance tube experiment with a 510 Hz tuning fork, the first two resonances occur at L₁ = 16.0 cm and L₂ = 49.5 cm. Find the speed of sound and the end correction.

### Question 7
A guitar string produces 4 beats/s with a 250 Hz tuning fork. When the string is tightened slightly, the beats drop to 1 beat/s. What was the original frequency of the string?

### Question 8
A string in unison with a 500 Hz fork has its tension decreased by 4%. How many beats per second will now be heard?

### Question 9
An ambulance travels towards a stationary listener at 30 m/s with a 700 Hz siren (v = 330 m/s). Find the apparent frequency heard.

### Question 10
A car approaches a stationary wall at 15 m/s sounding a 630 Hz horn (v = 330 m/s). Find the frequency of the reflected echo heard by the driver.

### Question 11
At 27 °C, an open pipe has fundamental frequency 200 Hz. If the temperature rises to 127 °C (neglecting pipe expansion), find the new fundamental frequency.

### Question 12
True or False: If a closed organ pipe is suddenly opened at its closed end, its fundamental frequency doubles.

---

## Worked Answers

### Answer 1
- k = 5π ⇒ λ = 2π / 5π = **0.40 m**.
- ω = 100π ⇒ f = 100π / 2π = **50 Hz**.
- Wave speed: v = ω / k = 100π / 5π = **20 m/s**.
- Max particle velocity: v_max = ω A = 100π × 0.02 = **2π m/s** ≈ **6.28 m/s**.
**Jaanch:** v = f λ = 50 × 0.40 = 20 m/s. ✅

### Answer 2
v = √(160 / 0.004) = √40000 = 200 m/s.
- Fundamental: f₁ = v / (2L) = 200 / 2.0 = **100 Hz**.
- 3rd harmonic: f₃ = 3 × 100 = **300 Hz**.
**Jaanch:** v² μ = 40000 × 0.004 = 160 N. ✅

### Answer 3
√I₁ = 4√I₀, √I₂ = 3√I₀.
I_max / I_min = (4 + 3)² / (4 - 3)² = 7² / 1² = **49 : 1**.
**Jaanch:** (7/1)² = 49. ✅

### Answer 4
- k = 2π ⇒ λ = 2π / 2π = 1.0 m ⇒ loop length λ/2 = 0.5 m.
- Number of loops in 2.0 m = 2.0 / 0.5 = **4 loops**.
- Component wave speed: v = ω / k = 80π / 2π = **40 m/s**.
**Jaanch:** f₄ = 4 × 40 / (2 × 2) = 40 Hz ⇒ ω = 80π. ✅

### Answer 5
Open pipe f₁ = v / (2 L_o) = 340 / (2 × 0.85) = 200 Hz.
Closed pipe same f₁: v / (4 L_c) = v / (2 L_o) ⇒ L_c = L_o / 2 = 0.85 / 2 = **0.425 m** (42.5 cm).
**Jaanch:** 340 / (4 × 0.425) = 340 / 1.70 = 200 Hz. ✅

### Answer 6
- v = 2 f (L₂ - L₁) = 2 × 510 × (0.495 - 0.160) = 1020 × 0.335 = **341.7 m/s**.
- e = (L₂ - 3 L₁) / 2 = (49.5 - 48.0) / 2 = **0.75 cm**.
**Jaanch:** L₁ + e = 16.75 cm = λ/4 ⇒ λ = 67.0 cm ⇒ 510 × 0.67 = 341.7 m/s. ✅

### Answer 7
Tightening string increases tension ⇒ frequency **increases**.
Original possibilities: 254 Hz or 246 Hz.
Since increasing f reduced beats from 4 to 1, original frequency was below 250 Hz ⇒ **246 Hz**.
**Jaanch:** 246 → 249 Hz gives |250 - 249| = 1 beat/s. ✅

### Answer 8
Δf / f ≈ (1/2) (ΔT / T) = (1/2) × (-4%) = -2%.
|Δf| = 2% of 500 Hz = **10 beats/s**.
**Jaanch:** Exact: 500 × √0.96 ≈ 489.9 Hz ⇒ ~10.1 ≈ 10 beats/s. ✅

### Answer 9
f' = 700 × [ 330 / (330 - 30) ] = 700 × (330 / 300) = 700 × 1.1 = **770 Hz**.
**Jaanch:** 770 > 700 Hz (approaching raises pitch). ✅

### Answer 10
f_echo = 630 × [ (330 + 15) / (330 - 15) ] = 630 × (345 / 315) = 2 × 345 = **690 Hz**.
**Jaanch:** 630 / 315 = 2 ⇒ 2 × 345 = 690 Hz. ✅

### Answer 11
T₁ = 300 K, T₂ = 400 K.
f₂ = f₁ √(T₂ / T₁) = 200 × √(400 / 300) = 200 × (2 / √3) ≈ **230.9 Hz**.
**Jaanch:** 200 × 1.1547 = 230.9 Hz. ✅

### Answer 12
✅ **True.** Closed pipe fundamental f_c = v/(4L); open pipe fundamental f_o = v/(2L) = 2 f_c!
**Jaanch:** Ratio f_o / f_c = 2. ✅

---

## Chapter 14 Wrap-up Table

| Topic | Key Concepts & Equations |
|---|---|
| **Part 1: Progressive Waves** | Transverse vs Longitudinal; y(x,t) = A sin(kx ∓ ωt + φ); k = 2π/λ, ω = 2πf, v = fλ = ω/k; Δφ = (2π/λ)Δx |
| **Part 2: Wave Speed** | String: v = √(T/μ); Rod: √(Y/ρ); Fluid: √(B/ρ); Gas (Laplace): v = √(γP/ρ) = √(γRT/M); P-independent at const T; v ∝ √T; humid air ⇒ faster |
| **Part 3: Superposition & Standing Waves** | A_res = √(A₁²+A₂²+2A₁A₂ cos φ); Rigid reflection ⇒ π flip, Free ⇒ 0; Standing wave: y = 2A sin(kx) cos(ωt); N–N = λ/2, N–A = λ/4 |
| **Part 4: Strings & Organ Pipes** | String & Open pipe: f_n = nv/(2L) (all harmonics); Closed pipe: f = (2m-1)v/(4L) (odd only); Resonance tube: v = 2f(L₂-L₁), e = (L₂-3L₁)/2 |
| **Part 5: Beats & Doppler** | f_beat = difference between f₁ and f₂ (wax ⇒ f↓, file ⇒ f↑); Doppler: f' = f (v ± v_o)/(v ∓ v_s); Wall echo: f (v + v_c)/(v - v_c) |
| **Part 6: Synthesis** | String–pipe resonance, Δf/f = (1/2)ΔT/T, temperature–pipe beats, Doppler–beats geometry |

---

### Gehrai Mein Jaana Hai? (Advanced Challenge!)
Agar tum 1D Wave Partial Differential Equation, wave power & decibel scale (dB), hanging heavy rope mein wave travel time (t = 2√(L/g)), composite string transmission/reflection, aur wind/angled Doppler effect jaise gehre concepts seekhna chahte ho, toh aage badho:
**Advanced Level:** [Chapter 14: Waves — Gehrai Mein (Advanced Level)](waves-advanced.md)

---

**Badhai ho! Tumne aaj Class 11 Physics ka aakhiri chapter (Chapter 14: Waves) poora kar liya hai!** Units aur Motion se lekar Gravitation, Thermodynamics, Oscillations, aur Waves tak — ab tumhare paas poori Classical Mechanics aur Thermal Physics ki solid neev hai. Is confidence ke saath aage badho!
