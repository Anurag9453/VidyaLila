# Chapter: Alternating Current (Part 2)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [AC Voltage Applied to a Resistor and RMS Values](alternating-current.md)

---

## Ghadi ki Do Suiyan aur 90° ka Faasla!

**Milind** ek digital art animation dekh raha tha jismein do arrows ek hi centre ke chaaron taraf **bilkul same angular speed ω** se anticlockwise ghoom rahe the — par hamesha unke beech exact **90°** ka angle bana rehta tha! Ek arrow hamesha 90° **aage (leading)** tha aur doosra 90° **peeche (lagging)**!

Teacher ma'am ne dekha to kaha: "Milind, AC circuits mein jab tum **Inductor (L)** ya **Capacitor (C)** lagate ho, to Voltage aur Current bilkul aise hi ghoomte hue arrows (**Phasors**) ki tarah 90° aage-peeche chalte hain!"

---

## Naye Shabd (New Words)

- **Phasor:** Ek rotating vector (arrow) jiski lambai AC ki peak value (v_m ya i_m) dikhati hai, aur jo anticlockwise angular speed **ω** se ghoomta hai — iska vertical projection kisi bhi pal ki instantaneous value deta hai!
- **Inductive Reactance (X_L):** Pure inductor dwara AC current ke raaste mein lagayi jaane wali rukawat: **X_L = ω L = 2π f L** (SI unit **Ohm, Ω**).
- **Capacitive Reactance (X_C):** Pure capacitor dwara AC current ke raaste mein lagayi jaane wali rukawat: **X_C = 1 / (ω C) = 1 / (2π f C)** (SI unit **Ohm, Ω**).

---

## 1. Pure Inductor in an AC Circuit (Current LAGS Voltage by 90°)

Maan lo AC voltage **v = v_m sin(ωt)** ek pure inductor **L** par lagaya gaya hai.
- Back EMF **L (Δi/Δt) = v_m sin(ωt)**.
- Rate-of-change ka ulta (integration idea: −cos(ωt) = sin(ωt − π/2)) karne par current milta hai:

**i = i_m sin(ωt − π/2)**   jahan   **i_m = v_m / X_L**   aur   **X_L = ω L = 2π f L**

- **Phase Relation:** Pure inductor mein **Current, Voltage se 90° (π/2) PEECHE (LAGS)** rehta hai! (Kyunki inductor current ke badlaav ka virodh karta hai!)
- **DC vs AC Behaviour:**
  - **DC ke liye (f = 0):** X_L = 2π(0)L = **0** ⟹ Inductor **DC ko bina kisi rukawat ke pass kar deta hai**!
  - **High-frequency AC ke liye (f bada):** X_L = 2πfL **bahut bada** ⟹ Inductor high-frequency AC ko **rokta (blocks)** hai!

---

## 2. Pure Capacitor in an AC Circuit (Current LEADS Voltage by 90°)

Maan lo AC voltage **v = v_m sin(ωt)** ek pure capacitor **C** par lagaya gaya hai.
- Charge **q = C v = C v_m sin(ωt)**.
- Current **i = Δq / Δt** = rate of change of **C v_m sin(ωt)** = **ω C v_m cos(ωt)** = **ω C v_m sin(ωt + π/2)**!

**i = i_m sin(ωt + π/2)**   jahan   **i_m = v_m / X_C**   aur   **X_C = 1 / (ω C) = 1 / (2π f C)**

- **Phase Relation:** Pure capacitor mein **Current, Voltage se 90° (π/2) AAGE (LEADS)** chalta hai!
- **DC vs AC Behaviour:**
  - **DC ke liye (f = 0):** X_C = 1 / 0 = **∞ (Infinite!)** ⟹ Capacitor **DC ko poori tarah BLOCK kar deta hai**!
  - **High-frequency AC ke liye (f bada):** X_C **bahut chhota** ⟹ Capacitor high-frequency AC ko **aasaani se PASS** kar deta hai!

### Super-Easy Memory Trick: **C I V I L**!
- **C — I — V:** **C**apacitor mein **I** (current) **V** (voltage) se **aage (leads)** hai!
- **V — I — L:** **L** (inductor) mein **V** (voltage) **I** (current) se **aage** hai (yaani **I lags V**)!

```
   Pure Inductor (L):          Pure Capacitor (C):
      ^ V                         ^ I
      :                           :
      :  90 deg                   :  90 deg
      +---------> I               +---------> V
    (I lags V by 90 deg)        (I leads V by 90 deg)
```

---

## Solved Examples

### Example 1: Inductive Reactance & RMS Current
A **50 mH** pure inductor is connected to a **220 V, 50 Hz** AC source. Calculate (a) its inductive reactance **X_L**, and (b) the RMS current in the circuit (take π = 3.14).

**Hal (Solution):**
- L = 50 mH = 0.050 H, f = 50 Hz, V_rms = 220 V.
- (a) **X_L = 2π f L** = 2 × 3.14 × 50 × 0.050 = 314 × 0.050 = **15.7 Ω**.
- (b) **I_rms = V_rms / X_L** = 220 / 15.7 ≈ **14.0 A**.
- **Jaanch:** 2 × 50 × 0.05 = 5; 5 × 3.14 = 15.7 Ω; 15.7 × 14.0 ≈ 219.8 ≈ 220 V ✅.

### Example 2: Capacitive Reactance & RMS Current
A **100 μF** capacitor is connected to a **220 V, 50 Hz** AC source. Calculate (a) its capacitive reactance **X_C**, and (b) the RMS current (take π = 3.14).

**Hal (Solution):**
- C = 100 μF = 10⁻⁴ F, ω = 2π(50) = 314 rad/s.
- (a) **X_C = 1 / (ω C)** = 1 / (314 × 10⁻⁴) = 10,000 / 314 ≈ **31.85 Ω**.
- (b) **I_rms = V_rms / X_C** = 220 / 31.85 ≈ **6.91 A** (ya direct: I_rms = V_rms ω C = 220 × 314 × 10⁻⁴ = **6.908 A ≈ 6.91 A**!).
- **Jaanch:** 220 × 0.0314 = 6.908 A ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Inductor aur Capacitor mein Lead/Lag ulta bol dena:**
   - *Galat:* Inductor mein current leads aur capacitor mein current lags bolna.
   - *Sahi:* **CIVIL** yaad rakho! **C** mein **I leads V** by 90°; **L** mein **I lags V** by 90°!
2. **X_C = ω C likh dena (1/ bhool jaana!):**
   - *Galat:* Frequency badhne par X_C badhta hai bolna.
   - *Sahi:* **X_L = ω L** (f ke directly proportional), par **X_C = 1 / (ω C)** (f ke **inversely** proportional)!
3. **Sochna ki capacitor DC ko pass karta hai:**
   - *Galat:* Steady DC capacitor ke aar-paar behta hai.
   - *Sahi:* DC ke liye f = 0 ⟹ X_C = ∞ ⟹ **Capacitor DC ko BLOCK karta hai** (aur **Inductor DC ko PASS** karta hai)!

---

## Quick Recap

| Component | Opposition (Ω) | Phase of I w.r.t. V | DC (f = 0) Behaviour | High Frequency AC |
|---|---|---|---|---|
| Resistor (R) | R (constant) | **0° (In phase)** | Passes (I = V/R) | Passes (I = V/R) |
| Inductor (L) | X_L = ωL = 2πfL | **Lags by 90°** | **Passes easily** (X_L = 0) | **Blocks** (X_L large) |
| Capacitor (C) | X_C = 1/(ωC) = 1/(2πfC) | **Leads by 90°** | **Blocks** (X_C = ∞) | **Passes easily** (X_C small) |

---

## Practice Questions

1. What is a phasor? Draw (or describe) the phasor relationship between voltage and current for (a) a pure inductor, and (b) a pure capacitor.
2. Why does a capacitor block DC while allowing AC to pass through it?
3. Calculate the inductive reactance of a 0.20 H inductor at a frequency of (a) 50 Hz, and (b) 100 Hz (take π = 3.14).
4. A 20 μF capacitor is connected to an AC source of angular frequency ω = 500 rad/s and RMS voltage 100 V. Find (a) X_C, and (b) the RMS current in the circuit.
5. At what frequency f will a 0.10 H inductor have an inductive reactance of 31.4 Ω? (Take π = 3.14.)
6. If the frequency of the AC source connected across a pure capacitor is doubled, what happens to (a) its capacitive reactance X_C, and (b) the RMS current (keeping V_rms constant)?
7. An AC source v = 200 sin(100 t) V is applied across a pure 0.50 H inductor. Write the equation for the instantaneous current i(t) in the circuit.
8. State how X_L and X_C depend on frequency f (sketch or describe the graphs of X_L vs f and X_C vs f).
9. State whether True or False: In a pure capacitive AC circuit, the voltage leads the current by 90°.
10. A 25 mH inductor is connected to a 157 V, 50 Hz AC supply. Calculate the RMS current in the inductor (take π = 3.14).

### Answers

1. **Phasor** ek rotating vector hai jiski length peak value dikhati hai aur jo ω speed se anticlockwise ghoomta hai. (a) **Pure inductor:** V, I se 90° aage (I lags V by 90°). (b) **Pure capacitor:** I, V se 90° aage (I leads V by 90°).

2. DC ki frequency **f = 0** hoti hai ⟹ X_C = 1 / (2π f C) = **∞ (infinite opposition)**, isliye capacitor DC ko block karta hai; jabki AC (f > 0) ke liye X_C finite hota hai!

3. (a) f = 50 Hz: X_L = 2 × 3.14 × 50 × 0.20 = 314 × 0.20 = **62.8 Ω**.
   (b) f = 100 Hz (frequency double ⟹ X_L double): X_L = **125.6 Ω**.
   Jaanch: 2 × 50 × 0.2 = 20; 20 × 3.14 = 62.8 Ω ✅.

4. C = 20 × 10⁻⁶ F, ω = 500 rad/s:
   (a) X_C = 1 / (500 × 20 × 10⁻⁶) = 1 / (10⁻²) = **100 Ω**.
   (b) I_rms = V_rms / X_C = 100 / 100 = **1.0 A**.
   Jaanch: 500 × 20 = 10⁴; 10⁴ × 10⁻⁶ = 10⁻²; 1/10⁻² = 100 Ω ✅.

5. X_L = 2π f L ⟹ f = 31.4 / (2 × 3.14 × 0.10) = 31.4 / 0.628 = **50 Hz**.
   Jaanch: 2 × 3.14 × 50 × 0.1 = 31.4 Ω ✅.

6. f double hone par:
   (a) X_C = 1/(2πfC) **aadha (halved)** ho jaata hai!
   (b) I_rms = V_rms / X_C **double** ho jaata hai!

7. ω = 100 rad/s, v_m = 200 V, L = 0.50 H ⟹ X_L = 100 × 0.50 = 50 Ω.
   i_m = 200 / 50 = 4.0 A. Pure inductor mein I lags V by π/2:
   **i(t) = 4.0 sin(100 t − π/2)** A.
   Jaanch: X_L = 50 Ω; 200/50 = 4.0 A ✅.

8. **X_L vs f:** Origin se guzarti **straight line** (X_L ∝ f).
   **X_C vs f:** **Rectangular hyperbola** (X_C ∝ 1/f — f → 0 par ∞ aur f → ∞ par 0).

9. **False ❌.** Pure capacitive circuit mein **Current (I), Voltage (V) se 90° lead** karta hai (voltage lags current by 90°)!

10. L = 0.025 H, ω = 314 rad/s ⟹ X_L = 314 × 0.025 = **7.85 Ω**.
    I_rms = 157 / 7.85 = **20.0 A**.
    Jaanch: 7.85 × 20 = 157 V ✅.

---

Ab tum Phasors, Inductive Reactance (X_L) aur Capacitive Reactance (X_C) ko pakka samajh chuke ho!

**Agle topic mein:** Jab **R, L aur C teeno ko ek saath series** mein lagaya jaaye, to unka phasor joda kaise jaata hai — aur FM radio mein **Resonance** ka chamatkar kaise hota hai, dekhenge!
