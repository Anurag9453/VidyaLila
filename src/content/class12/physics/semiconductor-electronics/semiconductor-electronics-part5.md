# Chapter: Semiconductor Electronics: Materials, Devices and Simple Circuits (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Digital Electronics and Logic Gates](semiconductor-electronics-part4.md)

---

## Grand Electronics Finale ke Chaar Stations!

School ke saal-ke-aakhiri "Grand Electronics Finale" mein **Shishir** ko chaar mixed-concept benches paar karni thin:
1. Doped semiconductor mein mass-action law se minority carriers nikaalna;
2. Do diodes (ek forward, ek reverse) wale parallel circuit mein battery current calculate karna;
3. Zener diode regulator mein input voltage badalne par Zener current ka badlaav check karna;
4. Multi-gate digital logic circuit ka complete truth table aur equivalent single gate pehchanna!

Chalo Shishir ke saath Class 12 Physics ka yeh aakhiri topic full josh ke saath solve karte hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula / Rule |
|---|---|---|
| Doped n-type / p-type carrier densities | Mass-Action Law | n_e × n_h = n_i² (both types electrically neutral!) |
| Diode in DC circuit | Check bias FIRST! | Forward ideal = closed (0 Ω; Si = 0.7 V drop); Reverse = **OPEN (I = 0)**! |
| Rectifier output frequency | Half vs Full wave | Half-wave: f_out = f; **Full-wave: f_out = 2 f** |
| Zener voltage regulator (V_in > V_Z) | KCL at load node | I_S = (V_in − V_Z)/R_S; I_L = V_Z/R_L; **I_Z = I_S − I_L** |
| Special diodes biasing | Bias table | LED: Forward; Photodiode & Zener: Reverse; Solar Cell: Unbiased |
| Combined logic gates | Evaluate stage-by-stage truth table | NAND = 0 only at (1,1); NOR = 1 only at (0,0) |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Two Ideal Diodes in Parallel Branches
A **6 V** battery is connected across two parallel branches:
- Branch 1 has an **ideal diode D₁** (forward biased) in series with a **10 Ω** resistor.
- Branch 2 has an **ideal diode D₂** (reverse biased) in series with a **20 Ω** resistor.
A **5 Ω** resistor is in series with the battery in the main line. Find the total current drawn from the battery!

**Hal (Solution):**
- **Step 1 (Check Bias):** D₁ forward biased hai ⟹ **closed switch (0 Ω)**! D₂ reverse biased hai ⟹ **OPEN switch (∞ Ω — Branch 2 mein 0 current!)**!
- **Step 2 (Simplified Circuit):** Branch 2 ko circuit se hata do! Ab sirf main **5 Ω** aur Branch 1 ka **10 Ω** series mein bache:
  **R_total = 5 + 10 = 15 Ω**.
- **Step 3 (Current):** **I = V / R_total = 6 / 15 = 0.40 A**.
- **Jaanch:** 0.40 × (5 + 10) = 6.0 V; Branch 2 current = 0 A ✅.

### Example 2: Zener Regulator Under Input Voltage Fluctuation
In a Zener voltage regulator (**V_Z = 8.0 V**), series resistor **R_S = 100 Ω** and load resistor **R_L = 400 Ω**. Find the Zener current **I_Z** when the input voltage fluctuates from (a) **12 V** to (b) **15 V**.

**Hal (Solution):**
- Dono cases mein V_in > 8.0 V hai ⟹ load par voltage constant **8.0 V** rahega ⟹ **I_L = 8.0 / 400 = 0.020 A = 20 mA** (constant!).
- (a) At **V_in = 12 V:** I_S = (12 − 8.0) / 100 = **40 mA** ⟹ **I_Z = 40 − 20 = 20 mA**.
- (b) At **V_in = 15 V:** I_S = (15 − 8.0) / 100 = **70 mA** ⟹ **I_Z = 70 − 20 = 50 mA**!
  *(Dekho kamaal: Input 3 V badhne par extra 30 mA poora Zener ne absorb kar liya, aur load ko hamesha fixed 8.0 V / 20 mA milta raha!)*
- **Jaanch:** (a) 20 + 20 = 40 mA ✅; (b) 20 + 50 = 70 mA ✅.

### Example 3: Three-NAND Gate Equivalent Circuit (Universal Gate Proof!)
Inputs A and B are fed separately into two tied-input **NAND** gates (acting as NOT gates), and their outputs are fed into a third **NAND** gate. Construct the truth table and identify the equivalent single gate!

**Hal (Solution):**
- Stage 1 gives **Ā** and **B̄**; Stage 2 computes **Y = NAND(Ā, B̄) = NOT(Ā · B̄)**:
  - (0,0) → (1,1) → NAND(1,1) = **0**
  - (0,1) → (1,0) → NAND(1,0) = **1**
  - (1,0) → (0,1) → NAND(0,1) = **1**
  - (1,1) → (0,0) → NAND(0,0) = **1**
- Yeh exact **OR Gate** ka truth table hai! (3 NAND gates = 1 OR gate!)
- **Jaanch:** Output 0 ONLY at (0,0) ⟹ OR Gate ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **Reverse-biased ideal diode ko short-circuit (0 Ω) maan kar parallel resistance nikaal dena:**
   - *Galat:* Example 1 mein 10 Ω aur 20 Ω ko parallel mein jod dena!
   - *Sahi:* Reverse-biased diode **OPEN SWITCH** hota hai — us branch ko poori tarah hata kar baaki circuit solve karo!
2. **Silicon diode ke sawaal mein 0.7 V drop ghataana bhool jaana:**
   - *Galat:* "Ideal diode" aur "Silicon diode" dono mein 0 V drop maan lena!
   - *Sahi:* Agar **"ideal diode"** likha ho to 0 V drop; agar **"Silicon diode"** likha ho to **0.7 V** (aur Germanium ke liye **0.3 V**) battery voltage se ghatao!
3. **V_in < V_Z hone par bhi Zener ko breakdown mein maan lena:**
   - *Galat:* V_in = 4 V aur V_Z = 6 V hone par load voltage 6 V likh dena!
   - *Sahi:* Zener regulation **SIRF tab** hota hai jab **V_in > V_Z** (aur open-circuit voltage across Zener > V_Z)!

---

## Practice Questions (Mixed Chapter Challenge)

1. Pure Silicon has n_i = 1.0 × 10¹⁶ m⁻³. It is doped with Phosphorus to give n_e = 5.0 × 10²¹ m⁻³. State the type of semiconductor and find n_h.
2. A Silicon diode (V_B = 0.7 V) is connected in forward bias in series with a 330 Ω resistor and a 4.0 V battery. Calculate the current in the circuit.
3. Two ideal diodes D₁ (forward biased) and D₂ (reverse biased) are connected in parallel branches containing 15 Ω and 30 Ω respectively, across a 9 V ideal battery. Calculate the total current drawn from the battery.
4. A 50 Hz AC supply feeds a full-wave rectifier. What is the fundamental ripple frequency of the output pulsating DC?
5. A Zener diode of V_Z = 9.0 V regulates a 15 V supply with R_S = 150 Ω and load R_L = 450 Ω. Calculate (a) I_S, (b) I_L, and (c) I_Z.
6. Match each special diode with its normal operating bias: (a) LED, (b) Photodiode, (c) Zener regulator, (d) Solar cell.
7. Two inputs A and B are fed to an **OR** gate, and its output is fed to a **NOT** gate. Name the equivalent single gate and write its output for A = 0, B = 0.
8. Write the truth table for a 2-input **NAND** gate followed by a **NOT** gate, and identify the equivalent basic gate.
9. State whether True or False: Doping pure Silicon with Boron (Group 13) makes the crystal positively charged overall.
10. Input A = 1 and B = 1 are applied to (a) a NOR gate, and (b) a NAND gate. What are their outputs?

### Answers

1. Phosphorus pentavalent (Group 15) hai ⟹ **n-type semiconductor**.
   n_h = n_i² / n_e = (1.0 × 10³²) / (5.0 × 10²¹) = **2.0 × 10¹⁰ m⁻³**.
   Jaanch: 5 × 2 = 10; 10²¹ × 10¹⁰ × 10 = 10³² ✅.

2. I = (4.0 − 0.7) / 330 = 3.3 / 330 = **0.010 A = 10 mA**.
   Jaanch: 330 × 0.01 = 3.3 V; 3.3 + 0.7 = 4.0 V ✅.

3. D₂ reverse biased hai (open switch → 0 current in 30 Ω branch!). Saara current sirf D₁ (15 Ω) branch se jayega:
   **I = 9 / 15 = 0.60 A**.
   Jaanch: 0.60 × 15 = 9 V ✅.

4. Full-wave rectifier: **f_out = 2 f = 2 × 50 = 100 Hz**.

5. (a) I_S = (15 − 9.0) / 150 = 6.0 / 150 = **0.040 A = 40 mA**.
   (b) I_L = 9.0 / 450 = **0.020 A = 20 mA**.
   (c) I_Z = I_S − I_L = 40 − 20 = **20 mA**.
   Jaanch: 20 + 20 = 40 mA ✅.

6. (a) **LED:** Forward biased; (b) **Photodiode:** Reverse biased; (c) **Zener regulator:** Reverse biased (breakdown); (d) **Solar cell:** Unbiased (no external battery).

7. OR + NOT = **NOR Gate**! For A = 0, B = 0: OR(0,0) = 0 ⟹ NOT(0) = **1**.

8. NAND: (0,0)→1, (0,1)→1, (1,0)→1, (1,1)→0. NOT lagane par: (0,0)→**0**, (0,1)→**0**, (1,0)→**0**, (1,1)→**1** ⟹ **AND Gate**!
   Jaanch: NOT(NAND) = AND ✅.

9. **False ❌.** Boron (trivalent) se **p-type** semiconductor banta hai (holes majority carriers hote hain), par poora crystal **overall electrically NEUTRAL** rehta hai!

10. For A = 1, B = 1: (a) NOR(1, 1) = **0**; (b) NAND(1, 1) = **0**.

---

## Chapter Ka Saar: Semiconductor Electronics: Materials, Devices and Simple Circuits

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Energy Bands & Doping | Si: E_g = 1.1 eV, Ge: 0.7 eV; **n_e n_h = n_i²** | n-type (Group 15) & p-type (Group 13) are BOTH electrically neutral |
| p-n Junction Diode | Barrier V_B: Si ~0.7 V, Ge ~0.3 V; r_d = ΔV/ΔI | Forward (p→+): depletion shrinks, mA; Reverse (p→−): widens, μA |
| Rectifiers & Special Diodes | Half-wave: f; Full-wave: **2f**; Zener: I_Z = I_S − I_L | LED (Forward), Photodiode & Zener (Reverse), Solar Cell (Unbiased) |
| Digital Logic Gates | Basic: NOT, OR, AND; Universal: **NAND, NOR** | NAND = 0 only at (1,1); NOR = 1 only at (0,0) |

---

Badhaai ho! Tumne Class 12 Physics ka poora safar — Electric Charges aur Fields se lekar Magnetism, Optics, Quantum Physics, Nuclei aur Semiconductor Electronics tak — poore vishwas aur gehraai ke saath poora kar liya hai! Ab har naye physical sawal ko formula ratne ke bajay asli samajh ke saath suljhaane ki taqat tumhare paas hai!
