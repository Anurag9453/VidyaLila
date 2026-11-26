# Chapter: Semiconductor Electronics: Materials, Devices and Simple Circuits (Part 2)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Energy Bands, Intrinsic and Extrinsic Semiconductors](semiconductor-electronics.md)

---

## Metro Station ka One-Way Gate aur p-n Junction Diode!

Metro station par **Sejal** ne dekha ki entry turnstile gate ek taraf dhakka dene par aasaani se khul jaata hai, par ulte direction se aane par bilkul **lock** ho jaata hai! Electronics ki duniya mein bhi ek aisa hi "one-way current gate" hota hai — jise **p-n Junction Diode** kehte hain!

Jab ek hi Silicon crystal ke ek hisse ko **p-type** aur doosre hisse ko **n-type** dope kiya jaata hai, to unki boundary (junction) par ek ajeeb sa jaadu hota hai! Chalo dekhte hain kaise!

---

## Naye Shabd (New Words)

- **p-n Junction:** Ek hi semiconductor crystal mein p-type aur n-type regions ke milne ki boundary.
- **Depletion Region (Depletion Layer):** Junction ke dono taraf ka woh bahut patla (~10⁻⁶ m) hissa jahan se mobile free electrons aur holes aapas mein recombine hokar gayab ho chuke hote hain — aur sirf **fixed (immobile) charged ions** (+ on n-side, − on p-side) bache rehte hain!
- **Barrier Potential (V_B):** Depletion layer ke fixed ions dwara bana internal potential difference jo aage ke electrons/holes ko rokta hai (**Si: ~0.7 V**, **Ge: ~0.3 V**).
- **Forward Bias:** Battery ka **+ terminal p-side** se aur **− terminal n-side** se jodna (one-way gate OPEN — bada current behta hai!).
- **Reverse Bias:** Battery ka **− terminal p-side** se aur **+ terminal n-side** se jodna (one-way gate LOCKED — lagbhag zero current!).

---

## 1. p-n Junction Kaise Banta Hai? (Diffusion & Drift)

1. **Diffusion:** p-side mein holes zyada aur n-side mein electrons zyada hain ⟹ concentration difference se holes p→n aur electrons n→p **diffuse** karte hain aur junction par milkar recombine ho jaate hain!
2. **Depletion Layer & Barrier Potential:** Junction ke paas n-side par **+ve donor ions** aur p-side par **−ve acceptor ions** khule reh jaate hain! Isse ek internal electric field (n → p) aur **Barrier Potential (V_B)** ban jaata hai.
3. **Equilibrium:** Internal field minority carriers ko ulta dhakelta hai (**Drift current**). Jab **Diffusion current = Drift current**, to net current **ZERO** ho jaata hai!

### Diode ka Circuit Symbol:
```
    p (Anode)        n (Cathode)
      -------|>|-------
             triangle points p -> n (direction of forward current!)
```

---

## 2. Forward Bias vs Reverse Bias (Complete Comparison)

| Feature | Forward Bias (p → +, n → −) | Reverse Bias (p → −, n → +) |
|---|---|---|
| External voltage vs Barrier | Barrier ko **oppose** karta hai (V_eff = V_B − V) | Barrier ko **support** karta hai (V_eff = V_B + V) |
| Depletion Layer Width | **Patli (SHRINKS / decreases)** | **Chaudi (WIDENS / increases)** |
| Effective Resistance | **Bahut KAM** (ideal diode: **0 Ω**, closed switch!) | **Bahut ZYADA** (ideal diode: **∞ Ω**, open switch!) |
| Current Flow | **Bada current (mA)** — majority carriers se (after knee voltage V_k: ~0.7 V Si, ~0.3 V Ge!) | **Bahut chhota leakage current (μA)** — minority carriers se (until Breakdown Voltage V_br!) |

- **Dynamic Resistance (r_d):** Forward bias mein diode non-ohmic hota hai; uska dynamic resistance hota hai: **r_d = ΔV / ΔI**.

---

## Solved Examples

### Example 1: Silicon Diode in Forward Bias with a Series Resistor
A Silicon p-n junction diode (knee / barrier voltage **V_B = 0.7 V**) is connected in **forward bias** in series with a **215 Ω** resistor and a **5.0 V** DC battery. Calculate the current **I** flowing in the circuit.

**Hal (Solution):**
- Diode forward biased hai ⟹ 0.7 V diode par drop hoga; baaki voltage resistor par aayega!
- V_resistor = V_battery − V_B = 5.0 − 0.7 = **4.3 V**.
- Current: **I = V_resistor / R = 4.3 / 215 = 0.020 A = 20 mA**.
- **Jaanch:** 215 × 0.02 = 4.3 V; 4.3 + 0.7 = 5.0 V ✅.

### Example 2: Dynamic Resistance of a Diode
In the forward bias V-I curve of a diode, when the voltage increases from **0.70 V to 0.80 V**, the current rises from **10 mA to 15 mA**. Calculate the dynamic resistance **r_d** of the diode.

**Hal (Solution):**
- ΔV = 0.80 − 0.70 = **0.10 V**; ΔI = 15 − 10 = **5 mA = 5 × 10⁻³ A**.
- **r_d = ΔV / ΔI = 0.10 / (5 × 10⁻³) = 20 Ω**.
- **Jaanch:** 20 × 0.005 = 0.10 V ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Forward bias mein p-side ko negative se jod dena:**
   - *Sahi:* Yaad rakhne ka aasaan trick: **P to Positive (+) = Forward Bias**! **P to Negative (−) = Reverse Bias**!
2. **Forward bias mein depletion layer ko chauda (widen) kar dena:**
   - *Galat:* Forward bias mein depletion layer badhti hai!
   - *Sahi:* Forward bias mein external battery charges ko junction ki taraf dhakelti hai ⟹ depletion layer **PATLI (shrinks)** hoti hai! Reverse bias mein charges door khinchte hain ⟹ depletion layer **CHAUDI (widens)** hoti hai!
3. **Barrier potential V_B ko aam battery samajh lena:**
   - *Galat:* Diode ke dono sirhon par voltmeter lagane se 0.7 V reading aayegi!
   - *Sahi:* Barrier potential sirf junction ke andar ka internal potential hill hai — bahar wire jodne par koi free current nahi behta!

---

## Quick Recap

| Concept | Key Fact / Value |
|---|---|
| Depletion Region | Free of mobile carriers; contains immobile ions (+ on n, − on p) |
| Barrier / Knee Voltage | Silicon: **~0.7 V**; Germanium: **~0.3 V** |
| Forward Bias (p→+, n→−) | Depletion **shrinks**, low R, **mA** current (majority carriers) |
| Reverse Bias (p→−, n→+) | Depletion **widens**, huge R, tiny **μA** current (minority carriers) |
| Dynamic Resistance | r_d = ΔV / ΔI (diode is **non-ohmic**!) |

---

## Practice Questions

1. Explain briefly the two processes (diffusion and drift) involved in the formation of a p-n junction.
2. What is the depletion region in a p-n junction? Why is it called "depletion" region?
3. How does the width of the depletion layer change when a p-n junction diode is (a) forward biased, and (b) reverse biased?
4. Write the approximate barrier (knee) voltage for a Silicon diode and a Germanium diode.
5. An **ideal** diode (zero barrier voltage, zero forward resistance, infinite reverse resistance) is connected in series with a 100 Ω resistor and a 6 V battery. Find the current when the diode is (a) forward biased, and (b) reverse biased.
6. A Silicon diode (V_B = 0.7 V) is connected in forward bias with a 430 Ω resistor across a 5.0 V battery. Calculate the current in the circuit.
7. Why is the reverse saturation current in a p-n junction diode very small (in microamperes) compared to forward current (in milliamperes)?
8. In a forward-biased diode, the current changes from 20 mA to 40 mA when the applied voltage increases from 0.72 V to 0.82 V. Calculate its dynamic resistance r_d.
9. State whether True or False: A p-n junction diode obeys Ohm's law across all forward and reverse voltages.
10. Two ends of a diode are at potentials +2 V (p-side) and +5 V (n-side). Is this diode forward biased or reverse biased?

### Answers

1. **Diffusion:** Concentration difference ke karan holes p→n aur electrons n→p chalte hain. **Drift:** Junction par bane internal electric field se minority carriers ulte direction mein khinchte hain. Equilibrium mein dono currents barabar aur opposite ho jaate hain!

2. Junction ke paas ka woh patla hissa jahan mobile electrons aur holes recombine hokar gayab (**depleted**) ho chuke hote hain aur sirf fixed charged ions bachte hain, use depletion region kehte hain.

3. (a) Forward bias: Depletion layer **shrinks (patli hoti hai)**.
   (b) Reverse bias: Depletion layer **widens (chaudi hoti hai)**.

4. **Silicon:** ~**0.7 V**; **Germanium:** ~**0.3 V**.

5. (a) Forward biased ideal diode = closed switch (0 Ω) ⟹ **I = 6 / 100 = 0.06 A = 60 mA**.
   (b) Reverse biased ideal diode = open switch (∞ Ω) ⟹ **I = 0 A**.
   Jaanch: 6 / 100 = 0.06 A ✅.

6. V_resistor = 5.0 − 0.7 = 4.3 V.
   **I = 4.3 / 430 = 0.010 A = 10 mA**.
   Jaanch: 430 × 0.01 = 4.3 V; 4.3 + 0.7 = 5.0 V ✅.

7. Reverse bias mein majority carriers ruk jaate hain; sirf bahut kam ginti mein maujood **minority carriers** junction paar kar paate hain — isliye reverse current sirf microamperes (μA) mein hota hai!

8. ΔV = 0.82 − 0.72 = 0.10 V; ΔI = 40 − 20 = 20 mA = 0.020 A.
   **r_d = 0.10 / 0.020 = 5.0 Ω**.
   Jaanch: 5.0 × 0.020 = 0.10 V ✅.

9. **False ❌.** Diode ka V-I graph non-linear aur asymmetric hota hai — yeh ek **non-ohmic** device hai!

10. p-side (+2 V) ka potential n-side (+5 V) se **KAM** hai (V_p − V_n = 2 − 5 = −3 V < 0) ⟹ diode **Reverse Biased** hai!

---

Ab tum p-n Junction Diode, Depletion Layer aur Forward vs Reverse Bias ko pakka samajh chuke ho!

**Agle topic mein:** Is one-way diode ka asli real-world kamaal — **AC ko DC banane wala Rectifier**, **Zener Voltage Regulator**, **LED**, **Photodiode** aur **Solar Cell** seekhenge!
