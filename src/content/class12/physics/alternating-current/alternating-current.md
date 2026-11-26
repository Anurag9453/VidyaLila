# Chapter: Alternating Current

> **Class:** 12 | **Subject:** Physics
> **Previous chapter:** [Electromagnetic Induction](../electromagnetic-induction/electromagnetic-induction-part6.md)

---

## "220 V, 50 Hz" ka Asli Matlab Kya Hai?

**Manish** ne apni Mummy ki electric iron ke peeche chhapi specification plate (plug nikala hua, bilkul safe!) par likha dekha: **"220 V, 50 Hz, 1000 W"**. Usne pichhle chapter mein padha tha ki AC voltage har second 50 baar positive (+v_m) se negative (−v_m) hota rehta hai!

Manish ne Papa se poocha: "Agar AC voltage lagataar badalta rehta hai aur poore cycle mein uska average ZERO hota hai, to is par 220 V kyun likha hai — aur yeh peak voltage hai ya kuch aur?"

Papa muskuraye: "Bahut smart sawaal! 220 V peak voltage nahi hai — yeh **RMS (Root Mean Square)** voltage hai! Asal mein 220 V AC ka peak **+311 V se −311 V** tak jaata hai!"

Class 10 mein tumne [Household Circuits](../../../class10/physics/household-circuits/household-circuits.md) mein domestic AC wiring aur safety rules padhe the. *(Safety yaad rakho: Kabhi bhi ghar ke mains AC socket ya live wires ko khud mat chhoona — saare AC concepts sirf equations aur safe teacher demos se samjhenge!)* Aaj Class 12 mein hum **AC across a Resistor** aur **RMS values** ka poora ganit seekhenge!

---

## Naye Shabd (New Words)

- **Alternating Voltage / Current (AC):** Aisi voltage ya current jiska magnitude lagataar badalta hai aur direction har aadhe cycle ke baad ulat jaati hai: **v = v_m sin(ωt)**, **i = i_m sin(ωt)**.
- **Peak Value / Amplitude (v_m, i_m):** AC voltage ya current ki maximum instantaneous value.
- **RMS Value (I_rms, V_rms):** Woh equivalent steady DC value jo utne hi samay mein kisi resistor mein **utni hi heat** paida kare jitni woh AC karti hai! (**I_rms = i_m / √2 ≈ 0.707 i_m**).
- **In Phase:** Jab voltage aur current ek saath maximum, ek saath zero, aur ek saath minimum hon (phase difference φ = 0°).

---

## 1. AC Applied to a Pure Resistor

Maan lo ek pure resistor **R** ke across sinusoidal AC voltage lagaya gaya hai:

**v = v_m sin(ω t)**

Ohm's law har pal laagu hota hai (i = v / R):

**i = (v_m / R) sin(ω t) = i_m sin(ω t)**

jahan **i_m = v_m / R** peak current hai!

- **Phase Difference:** Voltage aur current dono mein **sin(ωt)** hai ⟹ **φ = 0°** (dono bilkul **in phase** hain!).
- **Average Current over 1 Full Cycle:** Aadha cycle +ve aur aadha cycle −ve ⟹ **I_avg (full cycle) = 0**!
- **Average Current over 1 Half Cycle:** **I_avg (half cycle) = (2 i_m) / π ≈ 0.637 i_m**.

---

## 2. RMS (Root Mean Square) Value — Heat ka Asli Naap!

Chahe current + direction mein behe ya − direction mein, resistor mein **heat (P = i² R)** hamesha **positive** hoti hai (kyunki i² hamesha ≥ 0)!
- Instantaneous power: **p = i² R = i_m² R sin²(ω t)**.
- Poore cycle mein **sin²(ωt)** ki average value theek **1/2** hoti hai (stated & verified: sin²θ + cos²θ = 1, aur symmetry se dono ka average barabar = 1/2!).
- Isliye Average Power: **P_avg = ½ i_m² R = (i_m / √2)² R**.
- Ise DC power **P = I_rms² R** se compare karo ⟹

**I_rms = i_m / √2 ≈ 0.707 i_m**   aur   **V_rms = v_m / √2 ≈ 0.707 v_m**

*(AC ammeters aur voltmeters hamesha **RMS values** hi naapte hain! Aur resistor mein **P_avg = V_rms I_rms = I_rms² R = V_rms² / R**!)*

---

## Solved Examples

### Example 1: Peak Voltage of 220 V Mains AC
The household AC supply is rated at **220 V, 50 Hz**. Calculate (a) its peak voltage **v_m**, and (b) write the equation for its instantaneous voltage **v(t)** (take √2 = 1.414).

**Hal (Solution):**
- (a) V_rms = 220 V ⟹ **v_m = V_rms × √2 = 220 × 1.414 ≈ 311.1 V**.
- (b) ω = 2π f = 2π(50) = **100π rad/s**.
  Equation: **v(t) = 311.1 sin(100π t)** Volts.
- **Jaanch:** 311.1 / 1.414 = 220.0 V ✅.

### Example 2: Pure Resistor in an AC Circuit
A **100 Ω** resistor is connected to a **220 V, 50 Hz** AC supply. Calculate:
(a) the RMS current in the circuit,
(b) the peak current, and
(c) the net average power consumed over a full cycle.

**Hal (Solution):**
- (a) **I_rms = V_rms / R = 220 / 100 = 2.2 A**.
- (b) **i_m = I_rms × √2 = 2.2 × 1.414 ≈ 3.11 A**.
- (c) **P_avg = V_rms × I_rms = 220 × 2.2 = 484 W**.
- **Jaanch:** P_avg = V_rms² / R = (220)² / 100 = 48400 / 100 = 484 W ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Full-cycle average current ko I_rms bol dena:**
   - *Galat:* Ek poore cycle mein AC ka average current i_m / √2 hota hai.
   - *Sahi:* Full cycle mein **average current = 0** hota hai! **i_m / √2** **RMS (heating-equivalent)** value hoti hai!
2. **AC meters ki reading ko peak value maan lena:**
   - *Galat:* AC voltmeter 100 V dikha raha hai to v_m = 100 V hai.
   - *Sahi:* Sabhi AC meters **RMS** values dikhate hain ⟹ v_m = 100√2 ≈ 141.4 V!
3. **220 V AC ko 220 V DC jitna hi khatarnak maan lena:**
   - *Galat:* Dono 220 V hain to dono barabar khatarnak hain.
   - *Sahi:* 220 V AC har cycle mein **±311 V peak** tak pahunchta hai — isliye 220 V AC, 220 V DC se **zyada khatarnak** hota hai!

---

## Quick Recap

| Quantity | Formula | Key Fact |
|---|---|---|
| Pure Resistor AC | v = v_m sin(ωt); i = i_m sin(ωt) | Phase difference **φ = 0°** (in phase!) |
| Average Current | Full cycle: **0**; Half cycle: **2 i_m / π** | Symmetry cancels full cycle |
| RMS Values | I_rms = i_m / √2; V_rms = v_m / √2 | Equivalent DC for equal heating; read by AC meters |
| Average Power in R | P = V_rms I_rms = I_rms² R = ½ v_m i_m | Always positive over full cycle |

---

## Practice Questions

1. Define the RMS (root mean square) value of an alternating current. Why is it also called the virtual or effective value?
2. What is the average value of a sinusoidal alternating current over (a) one complete cycle, and (b) one positive half cycle?
3. An AC voltage is given by v = 282.8 sin(100π t) Volts. Find (a) peak voltage, (b) RMS voltage, and (c) frequency f (take √2 = 1.414).
4. A 50 Ω electric heater is connected to a 200 V (RMS), 50 Hz AC source. Calculate (a) the RMS current, (b) the peak current, and (c) the average power consumed.
5. Why is 220 V AC considered more dangerous than 220 V DC?
6. If the peak current in an AC circuit is 10 A, find (a) its RMS value, and (b) its average value over a positive half cycle (take √2 = 1.414, π = 3.14).
7. What is the phase difference between alternating voltage and alternating current in a purely resistive circuit?
8. A lamp consumes 110 W of average power when connected to a 220 V AC supply. Find the RMS current through the lamp and its resistance.
9. State whether True or False: An ordinary moving-coil DC ammeter can directly measure a 50 Hz alternating current.
10. Find the peak voltage of an AC supply whose RMS value is 110 V (take √2 = 1.414).

### Answers

1. **I_rms** woh steady DC current hai jo kisi resistor mein diye gaye samay mein **utni hi heat** paida kare jitni woh AC karti hai (I_rms = i_m / √2). Kyunki yeh effective heating power batata hai, ise effective/virtual value bhi kehte hain.

2. (a) Full cycle: **Zero (0)**.
   (b) Positive half cycle: **2 i_m / π ≈ 0.637 i_m**.

3. (a) **v_m = 282.8 V**.
   (b) **V_rms = 282.8 / 1.414 = 200 V**.
   (c) 2π f = 100π ⟹ **f = 50 Hz**.
   Jaanch: 200 × 1.414 = 282.8 V ✅.

4. (a) **I_rms = 200 / 50 = 4.0 A**.
   (b) **i_m = 4.0 × 1.414 = 5.656 A ≈ 5.66 A**.
   (c) **P_avg = 200 × 4.0 = 800 W**.
   Jaanch: 200² / 50 = 40000 / 50 = 800 W ✅.

5. 220 V DC hamesha 220 V rehta hai, jabki 220 V AC ka **peak value ±311 V** tak jaata hai — isliye uska jhatka kahin zyada khatarnak hota hai!

6. (a) **I_rms = 10 / 1.414 ≈ 7.07 A**.
   (b) **I_avg (half) = (2 × 10) / 3.14 = 20 / 3.14 ≈ 6.37 A**.
   Jaanch: 7.07 × 1.414 ≈ 10; 6.37 × 3.14 ≈ 20 ✅.

7. **Zero (0°)** — pure resistor mein voltage aur current hamesha **in phase** hote hain!

8. P = V_rms I_rms ⟹ **I_rms = 110 / 220 = 0.50 A**.
   R = V_rms / I_rms = 220 / 0.50 = **440 Ω**.
   Jaanch: 220² / 440 = 48400 / 440 = 110 W ✅.

9. **False ❌.** Moving-coil DC ammeter average current naapta hai — 50 Hz AC ka full-cycle average **zero** hota hai, isliye DC ammeter ki sui **zero** par hi kaampti rahegi!

10. **v_m = 110 × 1.414 = 155.54 V**.
    Jaanch: 155.54 / 1.414 = 110 V ✅.

---

Ab tum AC across a Resistor, Peak vs RMS values aur Average Power ka poora concept samajh chuke ho!

**Agle topic mein:** Jab AC ko **Inductor (L)** ya **Capacitor (C)** par lagaya jaata hai, to current aur voltage ek saath nahi chalte — ek aage nikal jaata hai aur ek peeche! Seekhenge **Phasors** aur **Reactance (X_L, X_C)**!
