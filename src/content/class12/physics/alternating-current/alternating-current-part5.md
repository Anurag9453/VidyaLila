# Chapter: Alternating Current (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Power in an AC Circuit and Power Factor](alternating-current-part4.md)

---

## Colony ke Bahar Laga Transformer — 11,000 V se 220 V!

School se ghar aate waqt **Neeraj** ne door footpath se apni colony ke corner par khambhon ke upar lage bade grey metal box ko dekha (hamesha safe doori par — high voltage khatarnak hota hai!). Papa ne bataya: "Power station se bijli hazaaron volts (11 kV ya 132 kV) par aati hai taaki taaron mein heat loss kam ho. Phir yeh **Transformer** bina koi part hilaye us 11,000 V AC ko gharon ke liye 220 V AC mein badal deta hai!"

Aaj hum **LC Oscillations** (energy ka electric ↔ magnetic jhoola) aur **Transformer** ka poora working principle, formulas aur energy losses seekhenge!

---

## Naye Shabd (New Words)

- **LC Oscillations:** Ek charged capacitor (C) aur ek inductor (L) ko jodne par energy ka baar-baar **electric field (½CV²)** aur **magnetic field (½LI²)** ke beech aage-peeche ghoomna — natural frequency **f₀ = 1 / [2π √(LC)]** par!
- **Transformer:** Ek static electrical device jo **Mutual Induction** ke principle par AC voltage ko badhata (**Step-Up**) ya ghatata (**Step-Down**) hai (frequency bina badle!).
- **Turns Ratio (k = N_s / N_p):** Secondary coil ke turns (N_s) aur Primary coil ke turns (N_p) ka anupaat.
- **Efficiency of Transformer (η):** Output power aur Input power ka ratio: **η = (P_out / P_in) × 100% = (V_s I_s) / (V_p I_p) × 100%**.

---

## 1. LC Oscillations (Qualitative Energy Exchange)

Maan lo ek fully charged capacitor **C** (initial energy **U_E = Q₀² / 2C**) ko ek pure inductor **L** (zero resistance) ke saath joda jaata hai:
1. **t = 0:** Saari energy capacitor ke **electric field** mein hai (I = 0).
2. **t = T/4:** Capacitor discharge ho chuka (q = 0), aur current maximum hai — ab saari energy inductor ke **magnetic field (½ L I₀²)** mein aa gayi!
3. **t = T/2:** Inductor ka back EMF current ko chalata rehta hai jab tak capacitor **ulti polarity** se phir full charge na ho jaaye (saari energy phir electric field mein!).
4. **t = 3T/4 → T:** Process ulta chalta hai aur ek poora oscillation **T = 2π √(L C)** samay mein poora hota hai!

- **Frequency of LC Oscillations:** **ω₀ = 1 / √(L C)**, **f₀ = 1 / [ 2π √(L C) ]**.
- *(Compare with spring-block SHM: Capacitor C ↔ Spring (1/k), Inductor L ↔ Mass (m), Charge q ↔ Displacement (x), Current I ↔ Velocity (v)!)*

---

## 2. Transformer — Principle, Types aur Equations

**Principle:** **Mutual Induction!** Ek laminated soft iron core par do insulated copper coils — **Primary (N_p turns)** aur **Secondary (N_s turns)** — lipti hoti hain. Jab primary par AC voltage V_p lagate hain, to core mein badalta magnetic flux Φ_B banta hai jo secondary mein EMF V_s induce karta hai!

*(Yaad rakho: **Transformer DC par bilkul kaam nahi karta**, kyunki DC constant flux banata hai ⟹ ΔΦ/Δt = 0 ⟹ V_s = 0!)*

### Ideal Transformer Equations (100% Efficiency: P_out = P_in):
Faraday's law se dono coils mein flux per turn (ΔΦ/Δt) same hai ⟹ **V_p / N_p = V_s / N_s**, aur Energy Conservation se **V_p I_p = V_s I_s**:

**V_s / V_p = N_s / N_p = I_p / I_s**

### Do Types of Transformers:
1. **Step-Up Transformer:** **N_s > N_p** ⟹ **V_s > V_p** (voltage badhta hai) aur **I_s < I_p** (current ghatta hai!). Power station par long-distance transmission ke liye use hota hai!
2. **Step-Down Transformer:** **N_s < N_p** ⟹ **V_s < V_p** (voltage ghatta hai) aur **I_s > I_p** (current badhta hai!). Colony substation aur mobile charger mein use hota hai!

### Long-Distance Power Transmission High Voltage par Kyun Hota Hai?
Power **P = V I** transmit karni hai. Agar voltage **V** ko step-up transformer se **100 guna badha** dein, to current **I** **100 guna kam** ho jaata hai! Taaron mein heat loss **P_loss = I² R_line** hota hai ⟹ current 100 guna kam hone par heat loss **(100)² = 10,000 guna kam** ho jaata hai!

### Transformer ke 4 Main Energy Losses (aur Unka Ilaaj):
1. **Flux Leakage:** Primary ka poora flux secondary se nahi judta ⟹ *Ilaaj:* Coils ko ek ke upar ek (concentric) soft iron core par lapeto.
2. **Copper Loss (I²R heating in windings):** Wires ke resistance se heat ⟹ *Ilaaj:* Moti (thick) copper wire use karo.
3. **Eddy Current Loss:** Iron core mein swirling currents ⟹ *Ilaaj:* **Laminated** insulated soft iron core use karo.
4. **Hysteresis Loss:** Core ke baar-baar magnetise-demagnetise hone se heat ⟹ *Ilaaj:* Narrow hysteresis loop wala **soft iron** core use karo.

---

## Solved Examples

### Example 1: Ideal Step-Down Transformer
A step-down transformer has **N_p = 2000 turns** in the primary and **N_s = 100 turns** in the secondary. If the primary is connected to a **2200 V** AC supply and the secondary delivers **I_s = 10 A** to a load (assuming 100% efficiency), calculate (a) secondary voltage **V_s**, and (b) primary current **I_p**.

**Hal (Solution):**
- (a) V_s / V_p = N_s / N_p ⟹ V_s = 2200 × (100 / 2000) = 2200 / 20 = **110 V**.
- (b) Ideal transformer: V_p I_p = V_s I_s ⟹ I_p = (110 × 10) / 2200 = 1100 / 2200 = **0.50 A**.
- **Jaanch:** Power in = 2200 × 0.5 = 1100 W; Power out = 110 × 10 = 1100 W ✅.

### Example 2: LC Oscillation Frequency
An LC circuit has **L = 10 mH** and **C = 1.0 μF**. Find its natural angular frequency **ω₀**.

**Hal (Solution):**
- L = 10 mH = 10⁻² H, C = 1.0 μF = 10⁻⁶ F ⟹ L C = 10⁻⁸ s² ⟹ √(L C) = **10⁻⁴ s**.
- **ω₀ = 1 / 10⁻⁴ = 1.0 × 10⁴ rad/s**.
- **Jaanch:** (10⁻²)(10⁻⁶) = 10⁻⁸ ⟹ √(10⁻⁸) = 10⁻⁴ ⟹ ω₀ = 10⁴ rad/s ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Sochna ki transformer DC voltage ko bhi step-up ya step-down kar sakta hai:**
   - *Galat:* 12 V DC battery ko step-up transformer se 240 V DC bana dena!
   - *Sahi:* DC constant flux banata hai (ΔΦ/Δt = 0) ⟹ **V_s = 0**! (Balki primary coil jal sakti hai kyunki DC mein X_L = 0!)
2. **Sochna ki Step-Up transformer power badha deta hai:**
   - *Galat:* Voltage 10 guna badha to power bhi 10 guna badh gayi!
   - *Sahi:* Transformer **Energy Conservation** maanta hai — voltage 10 guna badhta hai to **current 10 guna ghat jaata hai** (P_out ≤ P_in)!
3. **Current ratio ko voltage ratio ke seedhe barabar rakh dena:**
   - *Galat:* I_s / I_p = N_s / N_p likh dena!
   - *Sahi:* Voltage aur current **inversely** related hain: **V_s / V_p = N_s / N_p = I_p / I_s**!

---

## Quick Recap

| Concept | Formula / Fact | Key Detail |
|---|---|---|
| LC Oscillations | ω₀ = 1/√(LC); f₀ = 1/(2π√LC) | Continuous exchange: ½CV² ↔ ½LI² |
| Transformer Principle | Mutual Induction (AC only!) | Does NOT work on DC; frequency f unchanged |
| Ideal Transformer Ratio | V_s / V_p = N_s / N_p = I_p / I_s | Step-up: N_s > N_p; Step-down: N_s < N_p |
| Efficiency & Losses | η = (V_s I_s)/(V_p I_p) × 100% | 4 losses: Flux leakage, Copper, Eddy, Hysteresis |

---

## Practice Questions

1. On what physical principle does a transformer work? Why can it not be used to step up a DC voltage?
2. Distinguish between a step-up transformer and a step-down transformer in terms of turns ratio, voltage, and current.
3. Why is electrical power transmitted over long distances at very high AC voltages?
4. Name the four main energy losses in a real transformer and state one way to minimize each.
5. An ideal transformer has 500 primary turns and 2500 secondary turns. If the primary is connected to a 220 V, 50 Hz AC supply, find (a) the secondary voltage, and (b) the frequency of the secondary output.
6. In Question 5, if the secondary supplies a current of 2 A to a load, what is the current drawn by the primary coil?
7. A step-down transformer operates on a 2000 V line and delivers 40 A at 200 V. If its efficiency is 80%, calculate the input current drawn from the 2000 V line.
8. An LC circuit has L = 40 mH and C = 10 μF. Calculate its natural angular frequency ω₀ of oscillations.
9. State whether True or False: A step-up transformer increases both voltage and power simultaneously.
10. A charged 10 μF capacitor (initially at 50 V) is connected across a pure 25 mH inductor. What is the maximum magnetic energy stored in the inductor during the resulting LC oscillations?

### Answers

1. Transformer **Mutual Induction** ke principle par kaam karta hai. DC constant current deta hai ⟹ core mein magnetic flux constant rehta hai (ΔΦ/Δt = 0) ⟹ secondary mein koi EMF induce nahi hota!

2. **Step-Up:** N_s > N_p, V_s > V_p, I_s < I_p. **Step-Down:** N_s < N_p, V_s < V_p, I_s > I_p.

3. Same power P = V I ke liye voltage V bahut zyada rakhne se current **I = P / V bahut kam** ho jaata hai, jisse transmission lines mein **heat loss (I² R_line)** hazaaron guna kam ho jaata hai!

4. (i) **Flux leakage** → concentric winding on soft iron core; (ii) **Copper loss (I²R)** → thick copper wires; (iii) **Eddy current loss** → laminated core; (iv) **Hysteresis loss** → soft iron core (narrow hysteresis loop).

5. (a) V_s = V_p × (N_s / N_p) = 220 × (2500 / 500) = 220 × 5 = **1100 V**.
   (b) Transformer frequency nahi badalta ⟹ **f = 50 Hz**.
   Jaanch: 2500/500 = 5; 220 × 5 = 1100 V ✅.

6. Ideal: V_p I_p = V_s I_s ⟹ I_p = (1100 × 2) / 220 = **10 A**.
   Jaanch: I_p / I_s = N_s / N_p = 5 ⟹ I_p = 5 × 2 = 10 A ✅.

7. P_out = V_s I_s = 200 × 40 = 8000 W.
   Efficiency η = 0.80 = P_out / P_in ⟹ P_in = 8000 / 0.80 = **10,000 W**.
   I_p = P_in / V_p = 10,000 / 2000 = **5.0 A**.
   Jaanch: 0.80 × (2000 × 5) = 8000 W ✅.

8. L C = (40 × 10⁻³) × (10 × 10⁻⁶) = 4.0 × 10⁻⁷ s².
   √(4.0 × 10⁻⁷) ≈ 6.325 × 10⁻⁴ s ⟹ **ω₀ = 1 / (6.325 × 10⁻⁴) ≈ 1581 rad/s**.
   Jaanch: (1581)² × 4 × 10⁻⁷ ≈ 2.5 × 10⁶ × 4 × 10⁻⁷ = 1.0 ✅.

9. **False ❌.** Step-up transformer sirf **voltage** badhata hai (aur current ghata deta hai); energy conservation ke karan **output power kabhi input power se zyada nahi ho sakti**!

10. Energy conserve hoti hai ⟹ max magnetic energy in L = initial electric energy in C:
    U_max = ½ C V₀² = 0.5 × (10 × 10⁻⁶) × (50)² = 5 × 10⁻⁶ × 2500 = **0.0125 J = 12.5 mJ**.
    Jaanch: 5 × 2500 × 10⁻⁶ = 12500 × 10⁻⁶ = 0.0125 J ✅.

---

Ab tum LC Oscillations aur Transformers ke saare principles, equations aur losses master kar chuke ho!

**Agle topic mein:** Sab Kuch Mila Kar — is poore AC chapter ke saare topics (RMS, Phasors, LCR Resonance, Power Factor aur Transformers) ko ek saath jodkar tricky mixed problems solve karenge aur poora chapter wrap-up karenge!
