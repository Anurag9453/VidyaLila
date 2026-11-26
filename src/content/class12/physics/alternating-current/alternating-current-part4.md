# Chapter: Alternating Current (Part 4)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Series LCR Circuit, Resonance and Quality Factor](alternating-current-part3.md)

---

## Factory ke Bijli Bill par "Power Factor = 0.8" Kyun Likha Tha?

Electrical engineering exhibition mein **Murali** ne ek poster dekha: *"Keep Your Factory Power Factor Close to 1 — Low Power Factor Wastes Grid Capacity!"* Poster mein likha tha ki ek AC motor 220 V par 10 A current le rahi thi, par uski actual average power 220 × 10 = 2200 W nahi, balki sirf **1760 W** thi!

Murali ne exhibitor se poocha: "Jab V = 220 V aur I = 10 A hai, to 2200 W ki jagah sirf 1760 W power kaise kharch hui — baaki 440 W kahan gayi?"

Exhibitor muskuraye: "AC circuits mein voltage aur current ke beech **phase angle φ** hota hai! Asli power **V_rms × I_rms** nahi, balki **V_rms × I_rms × cos φ** hoti hai — aur **cos φ** ko hi **Power Factor** kehte hain!"

---

## Naye Shabd (New Words)

- **Average Power in AC (P):** Ek poore cycle mein AC circuit dwara kharch ki gayi average electrical power: **P = V_rms I_rms cos φ**. SI unit **Watt (W)**.
- **Power Factor (cos φ):** Voltage aur current ke beech phase angle φ ka cosine: **cos φ = R / Z**. (0 se 1 ke beech dimensionless number!)
- **Apparent Power (V_rms I_rms):** Sirf voltmeter aur ammeter ki readings ka product (VA mein), jo actual power se zyada ho sakta hai jab φ ≠ 0.
- **Wattless Current (I_rms sin φ):** AC current ka woh component jo voltage ke 90° perpendicular hota hai aur poore cycle mein **ZERO average power** kharch karta hai!

---

## 1. Average Power in a Series LCR Circuit

Maan lo AC circuit mein **v = v_m sin(ωt)** aur **i = i_m sin(ωt − φ)** hai.
- Instantaneous power: **p = v i = v_m i_m sin(ωt) sin(ωt − φ)**.
- Trigonometry identity 2 sin A sin B = cos(A − B) − cos(A + B) lagane par:
  p = ½ v_m i_m [ cos φ − cos(2ωt − φ) ].
- Poore cycle mein double-frequency term **cos(2ωt − φ)** ka average **ZERO** hota hai! Bacha sirf constant term:
  P = ½ v_m i_m cos φ = (v_m / √2) × (i_m / √2) × cos φ ⟹

**P = V_rms I_rms cos φ**

Phasor triangle se **cos φ = R / Z**! Isliye:

**P = V_rms I_rms (R / Z) = I_rms² R**

*(Dekho kamaal! Poore LCR circuit mein asli power **SIRF Resistor R** mein hi kharch hoti hai — Inductor L aur Capacitor C poore cycle mein **ZERO** average power kharch karte hain!)*

---

## 2. Chaar Khaas Cases of Power Factor (cos φ)

| Circuit Type | Phase Angle (φ) | Power Factor (cos φ) | Average Power (P) |
|---|---|---|---|
| **Pure Resistor (R)** | 0° | **1 (Maximum)** | P = V_rms I_rms = I_rms² R |
| **Pure Inductor (L)** | +90° | **0 (Zero!)** | **P = 0** (Wattless current!) |
| **Pure Capacitor (C)** | −90° | **0 (Zero!)** | **P = 0** (Wattless current!) |
| **Series LCR at Resonance** | 0° (X_L = X_C) | **1 (Maximum)** | P = V_rms I_rms = V_rms² / R |

### Wattless Current (I_rms sin φ) Kya Hai?
Pure inductor ya capacitor mein pehle quarter-cycle mein source energy deta hai (magnetic ya electric field mein store hoti hai), aur agle quarter-cycle mein wahi saari energy wapas source ko laut jaati hai — isliye net power consumption **ZERO**!
- General LCR circuit mein current I_rms ke do hisse hote hain:
  1. **Active (wattful) component:** **I_rms cos φ** (V ke saath — yahi asli power deta hai).
  2. **Wattless (idle) component:** **I_rms sin φ** (V ke 90° par — zero power kharch karta hai!).

*(Yahi karan hai ki purane tubelights mein current control karne ke liye resistor ki jagah **choke coil (inductor)** lagate the — taaki heat (I²R) waste na ho!)*

---

## Solved Examples

### Example 1: Average Power & Wattless Current
An AC circuit draws an RMS current of **4.0 A** from a **200 V** AC source, with the current lagging the voltage by **φ = 60°**. Calculate:
(a) the power factor,
(b) the average power consumed, and
(c) the wattless component of current (take √3 = 1.732).

**Hal (Solution):**
- (a) Power factor = **cos 60° = 0.5**.
- (b) Average power **P = V_rms I_rms cos φ** = 200 × 4.0 × 0.5 = **400 W**.
- (c) Wattless current = **I_rms sin 60°** = 4.0 × (1.732 / 2) = 2.0 × 1.732 = **3.464 A ≈ 3.46 A**.
- **Jaanch:** Active current = 4 × 0.5 = 2 A ⟹ 200 × 2 = 400 W ✅; √(2² + 3.464²) = √(4 + 12) = 4.0 A ✅.

### Example 2: Power Factor of an LCR Circuit
In a series LCR circuit, **R = 40 Ω**, **X_L = 50 Ω**, and **X_C = 20 Ω**, connected to a **100 V** AC source. Find the power factor and average power dissipated.

**Hal (Solution):**
- Z = √(40² + (50 − 20)²) = √(1600 + 900) = √2500 = **50 Ω**.
- Power factor: **cos φ = R / Z = 40 / 50 = 0.8**.
- I_rms = V_rms / Z = 100 / 50 = **2.0 A**.
- Average power: **P = V_rms I_rms cos φ** = 100 × 2.0 × 0.8 = **160 W**.
- **Jaanch:** P = I_rms² R = (2.0)² × 40 = 4 × 40 = 160 W ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **AC power ke liye seedha P = V_rms I_rms laga kar cos φ bhool jaana:**
   - *Galat:* 200 V × 4 A = 800 W likhna jab φ = 60° diya ho!
   - *Sahi:* Hamesha **P = V_rms I_rms cos φ** use karo (cos φ = 1 sirf pure R ya resonance par hota hai)!
2. **Sochna ki pure inductor ya pure capacitor power consume karte hain:**
   - *Galat:* P = I² X_L likh dena!
   - *Sahi:* Pure L aur pure C ka power factor cos 90° = 0 hota hai ⟹ **P_avg = 0**! Power sirf **I_rms² R** mein kharch hoti hai!
3. **Peak values v_m, i_m ke saath 1/2 bhool jaana:**
   - *Galat:* P = v_m i_m cos φ likhna!
   - *Sahi:* **P = ½ v_m i_m cos φ = V_rms I_rms cos φ**!

---

## Quick Recap

| Concept | Formula | Key Fact |
|---|---|---|
| Average AC Power | P = V_rms I_rms cos φ = ½ v_m i_m cos φ = I_rms² R | Only resistor R dissipates real power |
| Power Factor | cos φ = R / Z | Max = 1 (pure R or resonance); Min = 0 (pure L or C) |
| Wattless Current | I_wattless = I_rms sin φ | Consumes zero average power over a full cycle |

---

## Practice Questions

1. Define power factor of an AC circuit. What are its maximum and minimum possible values?
2. Why is the average power consumed in a pure inductive or pure capacitive AC circuit equal to zero?
3. An AC voltage v = 100 sin(100 t) V and current i = 4 sin(100 t − π/3) A exist in a circuit. Calculate the average power dissipated in the circuit.
4. A series RL circuit has R = 12 Ω and X_L = 16 Ω connected across a 100 V (RMS) AC supply. Find (a) impedance Z, (b) power factor cos φ, and (c) average power consumed.
5. What is wattless current? Why is a choke coil preferred over a resistor to reduce current in an AC circuit?
6. An AC circuit draws 5 A (RMS) from a 220 V supply and consumes 660 W of average power. Calculate the power factor of the circuit.
7. At resonance in a series LCR circuit, what is the value of the power factor? If V_rms = 200 V and R = 50 Ω, find the power consumed at resonance.
8. A pure 0.2 H inductor is connected to a 220 V, 50 Hz AC supply. How much average power does it consume over a full cycle?
9. State whether True or False: In any series LCR circuit, the average power dissipated can always be calculated using P = I_rms² R.
10. An AC circuit has V_rms = 240 V, I_rms = 5 A, and power factor 0.6. Find (a) the average power, and (b) the wattless current component.

### Answers

1. **Power Factor = cos φ = R / Z** (voltage aur current ke phase difference φ ka cosine). Maximum value = **1** (pure R ya resonance par); Minimum value = **0** (pure L ya pure C par).

2. Pure L aur pure C mein phase angle **φ = 90°** hota hai ⟹ **cos 90° = 0** ⟹ **P = V_rms I_rms cos 90° = 0**! Jitni energy ek quarter-cycle mein store hoti hai, utni hi agle quarter-cycle mein source ko wapas mil jaati hai.

3. Peak values: v_m = 100 V, i_m = 4 A, φ = π/3 = 60° (cos 60° = 0.5):
   P = ½ v_m i_m cos φ = 0.5 × 100 × 4 × 0.5 = **100 W**.
   Jaanch: 0.5 × 400 × 0.5 = 100 W ✅.

4. (a) Z = √(12² + 16²) = √(144 + 256) = √400 = **20 Ω**.
   (b) **cos φ = R / Z = 12 / 20 = 0.6**.
   (c) I_rms = 100 / 20 = 5.0 A ⟹ P = 100 × 5.0 × 0.6 = **300 W**.
   Jaanch: I_rms² R = 25 × 12 = 300 W ✅.

5. **Wattless current (I_rms sin φ)** woh current hai jo zero average power kharch karta hai. Choke coil (high L, bahut kam R) ka power factor lagbhag zero hota hai, isliye woh bina zyada heat waste kiye AC current ko kam kar deti hai (jabki resistor I²R heat mein bijli barbaad karta hai!).

6. P = V_rms I_rms cos φ ⟹ cos φ = 660 / (220 × 5) = 660 / 1100 = **0.6**.
   Jaanch: 220 × 5 × 0.6 = 660 W ✅.

7. Resonance par **cos φ = 1**!
   P = V_rms² / R = (200)² / 50 = 40000 / 50 = **800 W**.
   Jaanch: I = 200/50 = 4 A ⟹ 200 × 4 × 1 = 800 W ✅.

8. **Zero (0 W)!** Pure inductor ke liye φ = 90° ⟹ cos 90° = 0 ⟹ P = 0!

9. **True ✅.** Kyunki L aur C zero average power consume karte hain, poori real power sirf R mein **I_rms² R** ke roop mein kharch hoti hai!

10. (a) P = 240 × 5 × 0.6 = **720 W**.
    (b) cos φ = 0.6 ⟹ sin φ = √(1 − 0.36) = **0.8**.
        Wattless current = I_rms sin φ = 5 × 0.8 = **4.0 A**.
    Jaanch: 240 × 3 = 720 W ✅; 0.6² + 0.8² = 1 ✅.

---

Ab tum AC Power, Power Factor aur Wattless Current ke saare concepts master kar chuke ho!

**Agle topic mein:** Capacitor aur Inductor ke beech energy ka aana-jaana (**LC Oscillations**) aur bijli ko 11,000 V se 220 V karne wala sabse zaroori device — **Transformer** seekhenge!
