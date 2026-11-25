> **Class:** 11 | **Subject:** Physics | **Chapter 13:** Oscillations

# Periodic & Oscillatory Motion, Period, Frequency & Displacement

> **Pichle chapter aur pehle ki padhai se:** [Kinetic Theory](../kinetic-theory/kinetic-theory-part5.md) ke saath humne thermal physics poori ki. Vibrations aur resonance ka basic intro tum [Class 10 Vibrations and Resonance](../../../class10/physics/vibrations-and-resonance/vibrations-and-resonance.md) mein dekh chuke ho — ab hum **Oscillations** ko poori mathematical clarity ke saath padhenge!

---

## Ujjayini ka Observatory-Clock & Heartbeat Monitor

Ujjayini ek observatory-clock aur biomedical-sensor engineer hai. Usne screen par do tarah ke repeating motions dikhaye:
1. Earth ka Sun ke chaaron taraf ghoomna: har **365.25 din** mein exact repeat hota hai (**Periodic**), par aage-peeche nahi dolta (**Not Oscillatory**!).
2. Pendulum ya guitar ki taar: ek **mean (equilibrium) position** ke idhar-udhar baar-baar dolti hai (**Periodic AND Oscillatory**!).

Isliye yaad rakho: **Har oscillatory motion periodic hota hai (ideal case mein), par har periodic motion oscillatory nahi hota!**

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Periodic Motion | Koi bhi motion jo fixed time interval (T) ke baad khud ko exact repeat kare |
| Oscillatory (Vibratory) Motion | Ek fixed equilibrium (mean) position ke aage-peeche (to-and-fro) hone wala periodic motion |
| Time Period (T) | Ek poora cycle / oscillation complete karne ka time (SI unit: **second**, s) |
| Frequency (f ya ν) | 1 second mein complete hone wale cycles ki sankhya: **f = 1 / T** (SI unit: **Hertz, Hz = s⁻¹**) |
| Angular Frequency (ω) | **ω = 2 π f = 2 π / T** (SI unit: **rad s⁻¹**) |
| Harmonic Function | Single sine ya cosine function (A sin ωt, A cos ωt), ya unka linear combination (a sin ωt + b cos ωt) |

---

## 1. Periodic vs Oscillatory vs Simple Harmonic Motion (SHM)

```
  [ Periodic Motion (e.g. Earth's orbit, uniform circle) ]
     └── [ Oscillatory Motion (e.g. bouncing ball, pendulum) ]
            └── [ Simple Harmonic Motion (e.g. ideal spring, small-angle pendulum) ]
```

- **Periodic Function Condition:** f(t + T) = f(t) for all t (smallest positive T is the period!).
- **Fourier's Amazing Idea:** Koi bhi complex periodic function (jaise heartbeat ECG ya square wave) ko alag-alag frequencies ke simple sin aur cos harmonic functions ke sum ke roop mein likha ja sakta hai!
- **Combining sin & cos of the SAME ω:**
  **x(t) = a sin ωt + b cos ωt = R sin(ωt + φ)**, jahan **R = √(a² + b²)** aur **tan φ = b / a** — yeh bilkul pure **SHM** hai!

---

## Solved Examples

### Example 1: Heartbeat Frequency & Period

A human heart beats 75 times in 1 minute on average. Find its frequency (in Hz), time period (in s), and angular frequency ω (in rad/s).

**Solution:**
- f = 75 / 60 = **1.25 Hz**.
- T = 1 / f = 1 / 1.25 = **0.80 s**.
- ω = 2 π f = 2 π (1.25) = **2.5 π ≈ 7.85 rad/s**.

Jaanch:
- Jaanch: 60 s / 0.80 s = 75 beats ✅

---

### Example 2: Checking Whether Functions Are Periodic, SHM, or Non-Periodic

Classify each displacement function as SHM, periodic but non-SHM, or non-periodic:
(a) x(t) = 3 sin(2t) + 4 cos(2t)
(b) x(t) = sin³(ωt)
(c) x(t) = e^(-ωt)

**Solution:**
- (a) Same frequency ω = 2 => combines to **5 sin(2t + φ)** => **SHM** with amplitude **5** and T = 2π/2 = **π s**!
- (b) Using sin³(ωt) = (3/4) sin(ωt) - (1/4) sin(3ωt) (two different frequencies ω and 3ω!) => **Periodic (with period 2π/ω), but NOT SHM**!
- (c) Exponentially decays to 0 and never repeats => **Non-periodic**!

Jaanch:
- Jaanch: (a) √(3² + 4²) = 5; (b) repeats every 2π/ω; (c) monotonically decreases ✅

---

### Example 3: Period of a Sum of Two Harmonics

Find the period of the combined periodic motion x(t) = sin(ωt) + cos(2ωt) + sin(4ωt).

**Solution:**
Individual periods:
- sin(ωt): T₁ = 2π / ω
- cos(2ωt): T₂ = π / ω = T₁ / 2
- sin(4ωt): T₃ = π / (2ω) = T₁ / 4
After time **T = 2π / ω**, the first term completes 1 cycle, the second completes 2 cycles, and the third completes 4 cycles — all repeat together! So **T = 2π / ω** (LCM of individual periods!).

Jaanch:
- Jaanch: x(t + 2π/ω) = sin(ωt + 2π) + cos(2ωt + 4π) + sin(4ωt + 8π) = x(t) ✅

---

### Example 4: Period of sin²(ωt)

Show that x(t) = sin²(ωt) is periodic AND represents SHM! Find its time period and amplitude.

**Solution:**
Using trig identity sin²(ωt) = (1 - cos 2ωt) / 2 = **1/2 - (1/2) cos(2ωt)**!
- It is a single cosine function shifted to a new mean position x = 1/2!
- So it **IS SHM** with **Amplitude = 1/2** and angular frequency **2ω**, giving **Period T = 2π / (2ω) = π / ω**!

Jaanch:
- Jaanch: sin²(ωt) repeats twice as fast as sin(ωt) => period halves to π/ω ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Har periodic motion ko oscillatory ya SHM bol dena
- **Galat:** Uniform circular motion (clock ki sui) oscillatory motion hai!
- **Sahi:** Clock ki sui **periodic** hai, par to-and-fro (aage-peeche) nahi dolti — isliye woh **oscillatory NAHI** hai!

### Galti 2: sin²(ωt) ka period 2π / ω likh dena
- **Galat:** Andar ωt likha hai toh period 2π/ω hoga!
- **Sahi:** sin²(ωt) = (1 - cos 2ωt)/2 => frequency **double (2ω)** hoti hai, isliye period **π / ω** hota hai!

### Galti 3: a sin ωt + b cos ωt ka amplitude a + b likh dena
- **Galat:** 3 sin(2t) + 4 cos(2t) ka amplitude 3 + 4 = 7!
- **Sahi:** sin aur cos 90° out of phase hote hain, isliye amplitude **√(3² + 4²) = 5** hota hai!

---

## Quick Recap

- **Hierarchy:** SHM ⊂ Oscillatory ⊂ Periodic.
- **Relations:** f = 1/T; ω = 2πf = 2π/T.
- **a sin ωt + b cos ωt:** Pure SHM with amplitude **√(a² + b²)** and period **2π/ω**.
- **sin²(ωt) or cos²(ωt):** Pure SHM about shifted mean 1/2 with amplitude **1/2** and period **π/ω**!

---

## Practice Questions

### Question 1
A tuning fork vibrates 512 times in 2 seconds. Find its frequency f and time period T.

**Solution:**
f = 512 / 2 = **256 Hz**; T = 1 / 256 ≈ **3.91 × 10⁻³ s (3.91 ms)**.

Jaanch:
- Jaanch: 256 × 2 = 512 vibrations ✅

---

### Question 2
Find the amplitude and time period of the SHM given by x(t) = 6 sin(10 t) + 8 cos(10 t) (x in cm, t in s).

**Solution:**
- Amplitude A = √(6² + 8²) = **10 cm**.
- ω = 10 rad/s => T = 2π / 10 = **π / 5 ≈ 0.628 s**.

Jaanch:
- Jaanch: 6-8-10 Pythagorean triple ✅

---

### Question 3
State whether the motion of a ball bouncing elastically on a hard floor is: (a) periodic, (b) oscillatory, (c) SHM.

**Solution:**
- (a) **Periodic:** Yes (repeats every T = 2√(2H/g)).
- (b) **Oscillatory:** Yes (moves up and down repeatedly).
- (c) **SHM:** **No!** Because restoring force is constant gravity (-mg), NOT proportional to displacement (-kx)!

Jaanch:
- Jaanch: SHM requires a = -ω² x; bouncing ball has constant a = -g ✅

---

### Question 4
Find the time period of the function y(t) = 4 cos²(5 t).

**Solution:**
4 cos²(5t) = 2 (1 + cos 10t) = 2 + 2 cos(10t).
Angular frequency = 10 rad/s => **T = 2π / 10 = π / 5 s** (and amplitude = 2!).

Jaanch:
- Jaanch: cos²(ωt) has half the period of cos(ωt) => π / 5 s ✅

---

### Question 5
Find the time period of x(t) = 2 sin(π t) + 3 cos(2 π t).

**Solution:**
- T₁ = 2π / π = 2 s; T₂ = 2π / (2π) = 1 s.
- LCM of 2 s and 1 s = **2 s**! (Periodic, but NOT SHM.)

Jaanch:
- Jaanch: At t = 2 s, term 1 completes 1 cycle and term 2 completes 2 cycles ✅

---

### Question 6
Is the function x(t) = log(ω t) periodic? Explain briefly.

**Solution:**
**No, it is non-periodic**, because log(ω t) increases monotonically without ever repeating its values!

Jaanch:
- Jaanch: Monotonic functions can never satisfy f(t + T) = f(t) ✅

---

### Question 7
Convert an angular frequency of 20 π rad/s into frequency in Hz and time period in seconds.

**Solution:**
- f = ω / (2π) = 20π / (2π) = **10 Hz**.
- T = 1 / 10 = **0.1 s**.

Jaanch:
- Jaanch: 2π(10) = 20π rad/s ✅

---

### Question 8
A particle executes SHM given by x(t) = 5 sin(4 t) - 12 cos(4 t) (in cm). Find its amplitude.

**Solution:**
A = √(5² + (-12)²) = √(25 + 144) = √169 = **13 cm**.

Jaanch:
- Jaanch: 5-12-13 Pythagorean triple ✅

---

### Question 9
What is the time period of the Earth's rotation about its own axis (in seconds), and is it oscillatory?

**Solution:**
T = 24 × 3600 = **86,400 s**. It is **periodic**, but **NOT oscillatory** (rotates continuously in one sense).

Jaanch:
- Jaanch: 24 × 3600 = 86,400 s ✅

---

### Question 10
A function is given by y(t) = sin(ωt) + cos(ωt). Write it in the form A sin(ωt + φ) by finding A and φ.

**Solution:**
A = √(1² + 1²) = **√2**; tan φ = 1/1 = 1 => **φ = π / 4 (45°)**.
So **y(t) = √2 sin(ωt + π/4)**.

Jaanch:
- Jaanch: √2 [sin ωt cos(π/4) + cos ωt sin(π/4)] = sin ωt + cos ωt ✅

---

### Question 11
State whether the following statements are True or False:
(a) Every periodic motion is simple harmonic.
(b) Every simple harmonic motion is periodic and oscillatory.

**Solution:**
- (a) **False** ❌ — Earth's orbit and bouncing ball are periodic but NOT SHM.
- (b) **True** ✅ — SHM is the purest subset of oscillatory and periodic motion.

Jaanch:
- Jaanch: Verified from Section 1 hierarchy ✅

---

### Question 12
Find the time period of a vibrating mosquito wing beating at 600 Hz (in milliseconds).

**Solution:**
T = 1 / 600 s ≈ 1.67 × 10⁻³ s = **1.67 ms**.

Jaanch:
- Jaanch: 600 × 0.00167 ≈ 1 s ✅

---

Periodic vs Oscillatory vs SHM ab tumhare liye bilkul clear hai!

**Agle topic mein:** SHM ka exact equation aur **Uniform Circular Motion (Reference Circle)** ke saath uska zabardast geometric connection — chalo padhte hain [Simple Harmonic Motion & Reference Circle](oscillations-part2.md)!
