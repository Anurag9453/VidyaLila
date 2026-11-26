# Chapter: Current Electricity (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Resistivity, Temperature Dependence and Colour Code](current-electricity-part2.md)

---

## Bicycle ka Horn Dabaate hi Lamp Dim Kyun Hua?

Shaam ko tuition se laut'te waqt **Asha** ne apni cycle ki battery-wali LED headlight jalayi hui thi. Mod par usne jaise hi electric horn ka button dabaya, usne notice kiya ki headlight ki roshni pal bhar ke liye halki si **dim** ho gayi — aur horn chhodte hi phir tez ho gayi!

Ghar aakar usne Didi se poocha: "Battery to wahi 6 V ki hai, phir horn bajane par lamp ka voltage kam kyun ho gaya?"

Didi ne muskurakar kaha: "Kyunki har real battery ke **andar** bhi thoda sa resistance hota hai — use **Internal Resistance (r)** kehte hain! Jab horn zyada current kheenchta hai, to battery ke andar hi thoda voltage (I r) kharch ho jaata hai, aur bahar ke lamp ko kam **Terminal Voltage** milta hai!"

---

## Naye Shabd (New Words)

- **EMF (Electromotive Force, ε):** Jab cell se **koi current nahi liya ja raha (open circuit)**, tab uske dono terminals ke beech ka maximum potential difference. Naam mein "force" hai, par yeh force nahi — **work done per unit charge** hai! SI unit **Volt (V)**.
- **Internal Resistance (r):** Cell ke andar maujood electrolyte aur electrodes dwara current ke raaste mein lagayi jaane wali rukawat (unit **Ω**).
- **Terminal Potential Difference (V):** Jab cell circuit mein current de raha ho (ya charge ho raha ho), tab uske dono terminals ke beech actual voltage.

---

## 1. Series aur Parallel Resistors (Quick Class 12 Check)

Class 10 mein tum padh chuke ho:
- **Series:** Current I same; **R_s = R₁ + R₂ + R₃ + ...**
- **Parallel:** Voltage V same; **1/R_p = 1/R₁ + 1/R₂ + 1/R₃ + ...** (Do resistors ke liye: **R_p = R₁R₂ / (R₁ + R₂)**).

Ab asli Class 12 concept par aate hain: **Real Cell (ε aur r)**!

---

## 2. EMF (ε), Internal Resistance (r) aur Terminal Voltage (V)

Ek real cell ko hum ek ideal EMF **ε** aur uske series mein lage chhote internal resistance **r** ki tarah dikhate hain:

```
         .-----------[  R  ]-----------.
         :                             :
         :         I ------>           :
         '-----[ r ]---||---( + )------'
                 <--- Cell (eps, r) --->
```

### Case 1: Open Circuit (Switch OFF, I = 0)
- **V = ε** (Terminal voltage poori EMF ke barabar!).

### Case 2: Discharging (Cell circuit ko current I de raha hai)
- Total resistance of circuit = **R + r**.
- Current: **I = ε / (R + r)**.
- External resistor R par voltage drop (yahi terminal voltage V hai!): **V = I R**.
- Par ε = I(R + r) = IR + Ir = V + Ir ⟹

**V = ε − I r**  *(Discharging mein **V < ε** hota hai!)*

- Isse internal resistance ka formula bhi milta hai: **r = (ε − V) / I = R × (ε/V − 1)**.

### Case 3: Charging (Bahar ka charger cell ke andar ulta current I bhej raha hai!)
- Jab phone ya car battery charge hoti hai, to charger ko cell ki EMF **ε** aur internal drop **I r** dono ko paar karna padta hai ⟹

**V = ε + I r**  *(Charging mein **V > ε** hota hai!)*

### Maximum Power Transfer Theorem (Stated & Checked):
External resistor R mein kharch hone wali power **P = I² R = ε² R / (R + r)²** tab **maximum** hoti hai jab external resistance internal resistance ke barabar ho:

**R = r**  ⟹  **P_max = ε² / (4 r)**

---

## 3. Cells in Series aur Parallel

### (a) Cells in Series (n identical cells, ya do alag cells ε₁, r₁ aur ε₂, r₂):
- **Do alag cells (same polarity):**
  **ε_eq = ε₁ + ε₂**   aur   **r_eq = r₁ + r₂**
  *(Agar doosra cell ulta laga ho: ε_eq = ε₁ − ε₂, par **r_eq hamesha judta hai: r₁ + r₂**!)*
- **n identical cells (ε, r) in series:** **ε_eq = n ε**, **r_eq = n r** ⟹ **I = (n ε) / (R + n r)**.
  *(Yeh tab best hai jab **R >> r** ho!)*

### (b) Cells in Parallel:
- **Do alag cells (ε₁, r₁) aur (ε₂, r₂) parallel mein:**
  **1 / r_eq = 1 / r₁ + 1 / r₂**  ⟹  **r_eq = (r₁ r₂) / (r₁ + r₂)**
  **ε_eq / r_eq = ε₁ / r₁ + ε₂ / r₂**  ⟹  **ε_eq = (ε₁ r₂ + ε₂ r₁) / (r₁ + r₂)**
- **m identical cells (ε, r) in parallel:** **ε_eq = ε**, **r_eq = r / m** ⟹ **I = ε / (R + r/m)**.
  *(Yeh tab best hai jab **r >> R** ho!)*

---

## Solved Examples

### Example 1: Discharging aur Charging Terminal Voltage
A battery of EMF **ε = 12 V** and internal resistance **r = 0.5 Ω** is connected to an external resistor **R = 5.5 Ω**.
(a) Find the current I and terminal voltage V while discharging.
(b) What will be the terminal voltage if the same battery is being **charged** by a steady current of **2 A**?

**Hal (Solution):**
- (a) **Discharging:**
  I = ε / (R + r) = 12 / (5.5 + 0.5) = 12 / 6.0 = **2.0 A**.
  V = ε − I r = 12 − (2.0 × 0.5) = 12 − 1.0 = **11.0 V**.
  *(Check: V = I R = 2.0 × 5.5 = 11.0 V!)*
- (b) **Charging (I = 2.0 A):**
  V = ε + I r = 12 + (2.0 × 0.5) = 12 + 1.0 = **13.0 V**!
- **Jaanch:** Discharging mein V = 11 V < 12 V; Charging mein V = 13 V > 12 V ✅.

### Example 2: Two Identical Cells — Series vs Parallel
Two identical cells, each of EMF **2 V** and internal resistance **1 Ω**, are connected across an external resistor **R = 2 Ω**. Compare the current in R when the cells are connected in (a) series, and (b) parallel.

**Hal (Solution):**
- (a) **Series:** ε_eq = 2 + 2 = 4 V, r_eq = 1 + 1 = 2 Ω.
  I_series = 4 / (2 + 2) = 4 / 4 = **1.0 A**.
- (b) **Parallel:** ε_eq = 2 V, r_eq = 1 / 2 = 0.5 Ω.
  I_parallel = 2 / (2 + 0.5) = 2 / 2.5 = **0.8 A**.
- **Jaanch:** Series: 4/4 = 1.0 A; Parallel: 2/2.5 = 0.8 A (R > r hai, isliye series ne zyada current diya!) ✅.

### Example 3: Maximum Power Transfer
A cell of EMF **10 V** and internal resistance **2 Ω** is connected to a variable resistor R. For what value of R is the power dissipated in R maximum, and what is that maximum power?

**Hal (Solution):**
- Maximum power ke liye **R = r = 2 Ω**.
- P_max = ε² / (4 r) = (10)² / (4 × 2) = 100 / 8 = **12.5 W**.
- **Jaanch:** R = 2 Ω par I = 10/(2+2) = 2.5 A ⟹ P = I² R = (2.5)² × 2 = 6.25 × 2 = 12.5 W ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Hamesha V < ε maan lena:**
   - *Galat:* Har sawaal mein V = ε − Ir lagana, bhale hi battery charge ho rahi ho!
   - *Sahi:* Discharging mein **V = ε − Ir (< ε)**, open circuit mein **V = ε**, aur **charging mein V = ε + Ir (> ε)**!
2. **Total circuit current nikaalte waqt internal resistance r ko bhool jaana:**
   - *Galat:* I = ε / R likh dena.
   - *Sahi:* Internal resistance r external resistor R ke series mein hota hai ⟹ **I = ε / (R + r)**!
3. **Sochna ki R = 0 par external resistor mein maximum power milegi:**
   - *Galat:* Current max (short circuit) hone par power bhi max hogi.
   - *Sahi:* R = 0 par P = I² × 0 = **0**! Maximum power external load mein tab milti hai jab **R = r**!

---

## Quick Recap

| Concept | Formula | Condition / Note |
|---|---|---|
| Discharging cell | I = ε / (R + r); V = ε − I r | V < ε (internal drop = I r) |
| Charging cell | V = ε + I r | V > ε (charger opposes EMF) |
| Maximum power in R | R = r ⟹ P_max = ε² / (4r) | Half power in R, half in r |
| Cells in Series | ε_eq = ε₁ + ε₂; r_eq = r₁ + r₂ | Best when R >> r |
| Cells in Parallel | ε_eq = (ε₁r₂ + ε₂r₁)/(r₁ + r₂); 1/r_eq = 1/r₁ + 1/r₂ | Best when r >> R |

---

## Practice Questions

1. Distinguish between EMF (ε) and terminal potential difference (V) of a cell in two clear points.
2. Under what condition is the terminal potential difference of a cell (a) equal to its EMF, and (b) greater than its EMF?
3. A storage battery of EMF 8.0 V and internal resistance 0.5 Ω is being charged by a 120 V DC supply using a series resistor of 15.5 Ω (teacher-described circuit). What is the charging current and the terminal voltage of the battery during charging?
4. A cell of EMF 1.5 V and internal resistance 0.2 Ω is connected to a 2.8 Ω resistor. Calculate (a) the current in the circuit, and (b) the terminal voltage of the cell.
5. When a cell is connected across a 4 Ω resistor, its terminal voltage is 1.6 V. When the circuit is open, its voltage is 2.0 V. Find the internal resistance of the cell.
6. Two cells of EMFs 3 V and 6 V with internal resistances 1 Ω and 2 Ω respectively are connected in series with the same polarity. Find their equivalent EMF and equivalent internal resistance.
7. What happens to the equivalent EMF and equivalent internal resistance in Question 6 if the 3 V cell is connected with **reversed polarity**?
8. Two cells of EMFs 2 V (r₁ = 1 Ω) and 4 V (r₂ = 2 Ω) are connected in parallel (positive to positive). Calculate their equivalent EMF and equivalent internal resistance.
9. State whether True or False: Short-circuiting a battery (connecting R = 0) delivers maximum power to the external load.
10. Four identical cells, each of EMF 1.5 V and internal resistance 0.5 Ω, are connected in series across a 4 Ω resistor. Find the current through the 4 Ω resistor.

### Answers

1. (i) **EMF (ε)** open circuit (I = 0) mein terminals ka max potential difference hai aur external resistance R par depend nahi karta.
   (ii) **Terminal voltage (V)** closed circuit mein terminals ka voltage hai (V = ε − Ir) jo current I aur R par depend karta hai.

2. (a) **V = ε** jab cell **open circuit** mein ho (I = 0) ya internal resistance r = 0 (ideal cell) ho.
   (b) **V > ε** jab cell ko bahar se **charge** kiya ja raha ho (V = ε + Ir).

3. Net driving voltage = 120 − 8.0 = 112 V. Total resistance = 15.5 + 0.5 = 16.0 Ω.
   Charging current: I = 112 / 16.0 = **7.0 A**.
   Terminal voltage during charging: V = ε + I r = 8.0 + (7.0 × 0.5) = **11.5 V**.
   Jaanch: 112 / 16 = 7; 8 + 3.5 = 11.5 V ✅.

4. (a) I = 1.5 / (2.8 + 0.2) = 1.5 / 3.0 = **0.5 A**.
   (b) V = ε − I r = 1.5 − (0.5 × 0.2) = 1.5 − 0.1 = **1.4 V**.
   Jaanch: V = I R = 0.5 × 2.8 = 1.4 V ✅.

5. ε = 2.0 V, V = 1.6 V, R = 4 Ω:
   r = R × (ε / V − 1) = 4 × (2.0 / 1.6 − 1) = 4 × (1.25 − 1) = 4 × 0.25 = **1.0 Ω**.
   Jaanch: I = 2.0 / (4 + 1) = 0.4 A ⟹ V = 0.4 × 4 = 1.6 V ✅.

6. ε_eq = 3 + 6 = **9 V**; r_eq = 1 + 2 = **3 Ω**.
   Jaanch: 3 + 6 = 9; 1 + 2 = 3 ✅.

7. Reversed polarity mein EMF ghat'ti hai: ε_eq = 6 − 3 = **3 V**, par internal resistance **hamesha judta hai**: r_eq = 1 + 2 = **3 Ω**!

8. r_eq = (1 × 2) / (1 + 2) = **2/3 Ω ≈ 0.67 Ω**.
   ε_eq = (ε₁ r₂ + ε₂ r₁) / (r₁ + r₂) = (2 × 2 + 4 × 1) / (1 + 2) = (4 + 4) / 3 = **8/3 V ≈ 2.67 V**.
   Jaanch: (2/1 + 4/2) × (2/3) = (2 + 2) × 2/3 = 8/3 V ✅.

9. **False ❌.** R = 0 par external load power = I² × 0 = 0 (saari heat cell ke andar hi nikal kar cell ko kharaab kar sakti hai!). Maximum load power **R = r** par milti hai.

10. ε_eq = 4 × 1.5 = 6.0 V; r_eq = 4 × 0.5 = 2.0 Ω.
    I = ε_eq / (R + r_eq) = 6.0 / (4.0 + 2.0) = 6.0 / 6.0 = **1.0 A**.
    Jaanch: 6 / 6 = 1.0 A ✅.

---

Ab tum Real Cells, EMF, Internal Resistance aur Cells ke Series-Parallel combinations ko poori tarah samajh chuke ho!

**Agle topic mein:** Jab circuit mein kai batteries aur kai loops aapas mein ulajh jaayein aur simple series-parallel kaam na kare — tab aayenge circuit-solving ke do brahmastra: **Kirchhoff's Rules** aur **Wheatstone Bridge**!
