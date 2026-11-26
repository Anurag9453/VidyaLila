# Chapter: Electrochemistry (Part 3)

> **Class:** 12 | **Subject:** Chemistry
> **Previous topic:** [Gibbs Energy and Equilibrium Constant](electrochemistry-part2.md)

---

## Namak ka Paani vs Sirka — LED Tester ki Chamak!

Chemistry lab mein teacher ma'am ne ek safe low-voltage LED conductivity tester ko pehle **0.1 M NaCl (namak)** solution mein duboya — LED tez chamak utha! Phir usi concentration ke **0.1 M Acetic Acid (sirka)** mein duboya — LED bahut dhundhla jala! Par jab sirke mein paani milakar use aur patla (dilute) kiya gaya, to per mole conducting power (**Molar Conductivity**) achanak bahut tezi se badh gayi!

**Jaswant** ne poocha: "Ma'am, paani milane par ions door-door hote hain, phir molar conductivity badh kaise jaati hai?"

Aaj hum **Conductance**, **Conductivity (κ)**, **Molar Conductivity (Λ_m)** aur **Kohlrausch's Law** ka poora raaz seekhenge!

---

## Naye Shabd (New Words)

- **Conductance (G = 1 / R):** Resistance ka reciprocal. SI unit **Siemens (S)** = Ω⁻¹ = mho.
- **Cell Constant (G* = l / A):** Conductivity cell ke do electrodes ke beech ki doori (l) aur area (A) ka ratio (unit: **cm⁻¹** ya **m⁻¹**).
- **Conductivity / Specific Conductance (κ = 1 / ρ):** **κ = G × G* = G* / R** (1 cm³ solution ka conductance!). Unit: **S cm⁻¹** (ya S m⁻¹).
- **Molar Conductivity (Λ_m):** 1 mole electrolyte ko contain karne wale solution ki total conducting power: **Λ_m = (κ × 1000) / M** (unit: **S cm² mol⁻¹**, jab κ in S cm⁻¹ aur M in mol/L!).
- **Limiting Molar Conductivity (Λ_m°):** Infinite dilution (concentration c → 0) par molar conductivity.

---

## 1. Dilution ka Asar: Conductivity (κ) vs Molar Conductivity (Λ_m)

1. **Conductivity (κ) HAMESHA GHATTI hai** dilution par (dono strong aur weak electrolytes ke liye!) — kyunki per unit volume (1 cm³) mein ions ki ginti kam ho jaati hai!
2. **Molar Conductivity (Λ_m) HAMESHA BADHTI hai** dilution par (kyunki 1 mole ka total volume V badh jaata hai, aur κ × V mein V ki badhotri κ ki kami se zyada hoti hai!):
   - **Strong Electrolytes (KCl, NaCl, HCl):** Pehle se 100% ionised hote hain! Dilution par inter-ionic attraction kam hota hai ⟹ Λ_m **dheere aur linearly** badhti hai (**Debye-Huckel-Onsager equation**: **Λ_m = Λ_m° − A √c**). Straight line ko √c = 0 par extrapolate karke Λ_m° mil jaata hai!
   - **Weak Electrolytes (CH₃COOH, NH₄OH):** Dilution par **degree of dissociation α tezi se badhta hai** (Ostwald's dilution law!) ⟹ Λ_m **steeply (curve bankar) upar chadh jaati hai**, isliye graph extrapolate karke Λ_m° nahi nikaal sakte — yahan **Kohlrausch's Law** kaam aata hai!

---

## 2. Kohlrausch's Law of Independent Migration of Ions

**Statement:** Infinite dilution par jab dissociation 100% ho chuka hota hai aur ions ek-doosre se bahut door hote hain, tab har ion electrolyte ki limiting molar conductivity mein apna **independent yogdaan** deta hai:

**Λ_m° = ν_+ λ_+° + ν_- λ_-°**

*(Example: Λ_m°(CH₃COOH) = Λ_m°(CH₃COONa) + Λ_m°(HCl) − Λ_m°(NaCl)! Teen strong electrolytes ko jod-ghata kar weak acid CH₃COOH ka Λ_m° mil jaata hai!)*

### Weak Electrolyte ka α aur Dissociation Constant K_a:
- **Degree of dissociation:** **α = Λ_m / Λ_m°**
- **Dissociation constant:** **K_a = (c α²) / (1 − α)**

---

## Solved Examples

### Example 1: Cell Constant, Conductivity & Molar Conductivity
The resistance of a conductivity cell containing **0.001 M KCl** solution at 298 K is **1500 Ω**. What is the cell constant **G*** if the conductivity of 0.001 M KCl is **0.146 × 10⁻³ S cm⁻¹**? Also find **Λ_m**.

**Hal (Solution):**
- **G* = κ × R = (0.146 × 10⁻³) × 1500 = 0.219 cm⁻¹**.
- **Λ_m = (κ × 1000) / M = (0.146 × 10⁻³ × 1000) / 0.001 = 0.146 / 0.001 = 146 S cm² mol⁻¹**.
- **Jaanch:** 0.146 × 1.5 = 0.219 cm⁻¹ ✅; 0.146 / 10⁻³ = 146 S cm² mol⁻¹ ✅.

### Example 2: Kohlrausch's Law for Acetic Acid (CH₃COOH)
Given Λ_m° (in S cm² mol⁻¹): **HCl = 426**, **NaCl = 126**, and **CH₃COONa = 91**. Calculate **Λ_m° for CH₃COOH**. If **Λ_m** of a 0.01 M acetic acid solution is **15.64 S cm² mol⁻¹**, find its **α**!

**Hal (Solution):**
- **Λ_m°(CH₃COOH) = Λ_m°(CH₃COONa) + Λ_m°(HCl) − Λ_m°(NaCl)**
  = 91 + 426 − 126 = 91 + 300 = **391 S cm² mol⁻¹**!
- **α = Λ_m / Λ_m° = 15.64 / 391 = 0.04 = 4.0%**.
- **Jaanch:** 391 × 0.04 = 15.64 ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Dilution par Conductivity (κ) aur Molar Conductivity (Λ_m) dono ko badha dena:**
   - *Sahi:* Dilution par **κ HAMESHA GHATTI hai**, jabki **Λ_m HAMESHA BADHTI hai**!
2. **Kohlrausch's law mein ions ki stoichiometric ginti (ν_+, ν_-) bhool jaana:**
   - *Galat:* Λ_m°(CaCl₂) = λ°(Ca²⁺) + λ°(Cl⁻) likh dena!
   - *Sahi:* CaCl₂ mein **2 Cl⁻** hain ⟹ **Λ_m°(CaCl₂) = λ°(Ca²⁺) + 2 λ°(Cl⁻)**!
3. **Conductivity measurement mein DC current use karna:**
   - *Sahi:* Wheatstone bridge mein electrolytic cell ke liye **AC current** use hota hai (DC use karne par electrolysis hokar solution ka composition badal jaata hai!).

---

## Quick Recap

| Concept | Formula | Key Fact |
|---|---|---|
| Conductivity & Cell Constant | **κ = G* / R** (G* = l / A) | **κ decreases** with dilution |
| Molar Conductivity | **Λ_m = (κ × 1000) / M** (S cm² mol⁻¹) | **Λ_m increases** with dilution |
| Strong Electrolyte Plot | Λ_m = Λ_m° − A √c | Linear vs √c; extrapolate to √c = 0 |
| Kohlrausch's Law | **Λ_m° = ν_+ λ_+° + ν_- λ_-°** | Finds Λ_m° of **weak** electrolytes; α = Λ_m / Λ_m° |

---

## Practice Questions

1. Define conductivity (κ) and molar conductivity (Λ_m). Write their common units.
2. Why does conductivity (κ) decrease while molar conductivity (Λ_m) increases on diluting an electrolytic solution?
3. State Kohlrausch's law of independent migration of ions and give two of its applications.
4. Explain why Λ_m° for a weak electrolyte like CH₃COOH cannot be obtained by extrapolating the Λ_m vs √c graph to zero concentration.
5. The conductivity of a 0.20 M KCl solution at 298 K is 0.0248 S cm⁻¹. Calculate its molar conductivity Λ_m.
6. A conductivity cell has cell constant G* = 0.50 cm⁻¹. When filled with 0.05 M NaOH solution, its resistance is 50 Ω. Calculate (a) κ, and (b) Λ_m of the NaOH solution.
7. Given λ°(Ca²⁺) = 119.0, λ°(Cl⁻) = 76.3, and λ°(Mg²⁺) = 106.0, λ°(SO₄²⁻) = 160.0 S cm² mol⁻¹, calculate Λ_m° for (a) CaCl₂, and (b) MgSO₄.
8. For 0.002 M acetic acid, Λ_m = 48.0 S cm² mol⁻¹ and Λ_m° = 400 S cm² mol⁻¹. Calculate (a) degree of dissociation α, and (b) dissociation constant K_a.
9. State whether True or False: Alternating current (AC) is used instead of direct current (DC) to measure the resistance of an ionic solution.
10. Given Λ_m°(NH₄Cl) = 150, Λ_m°(NaOH) = 248, and Λ_m°(NaCl) = 126 S cm² mol⁻¹, find Λ_m°(NH₄OH).

### Answers

1. **Conductivity (κ):** 1 cm³ solution ka conductance (unit **S cm⁻¹**). **Molar conductivity (Λ_m):** 1 mole electrolyte wale solution ki conducting power (unit **S cm² mol⁻¹**).

2. Dilution par per unit volume ions kam ho jaate hain ⟹ **κ ghatti hai**. Par 1 mole electrolyte ko hold karne wala total volume V badh jaata hai (aur weak electrolyte mein α bhi badhta hai) ⟹ **Λ_m = κ V badhti hai**!

3. **Kohlrausch's Law:** Infinite dilution par har ion electrolyte ki Λ_m° mein apna independent yogdaan deta hai (Λ_m° = ν_+ λ_+° + ν_- λ_-°). Applications: (i) Weak electrolyte ka **Λ_m°** nikaalna; (ii) **α** aur **K_a** calculate karna.

4. Weak electrolyte ke liye Λ_m vs √c graph c → 0 ke paas **bahut tezi se (steeply) upar** jaata hai aur y-axis ke lagbhag parallel ho jaata hai, isliye extrapolate nahi kar sakte!

5. Λ_m = (0.0248 × 1000) / 0.20 = 24.8 / 0.20 = **124 S cm² mol⁻¹**.
   Jaanch: 24.8 × 5 = 124 ✅.

6. (a) κ = G* / R = 0.50 / 50 = **0.010 S cm⁻¹**.
   (b) Λ_m = (0.010 × 1000) / 0.05 = 10 / 0.05 = **200 S cm² mol⁻¹**.
   Jaanch: 10 / 0.05 = 200 ✅.

7. (a) Λ_m°(CaCl₂) = 119.0 + 2(76.3) = 119.0 + 152.6 = **271.6 S cm² mol⁻¹**.
   (b) Λ_m°(MgSO₄) = 106.0 + 160.0 = **266.0 S cm² mol⁻¹**.
   Jaanch: 2 × 76.3 = 152.6; + 119 = 271.6 ✅.

8. (a) α = 48.0 / 400 = **0.12** (12%).
   (b) K_a = (c α²) / (1 − α) = (0.002 × 0.0144) / 0.88 = (2.88 × 10⁻⁵) / 0.88 ≈ **3.27 × 10⁻⁵ mol/L**.
   Jaanch: 48/400 = 12/100 = 0.12; 2.88/0.88 ≈ 3.27 ✅.

9. **True ✅.** DC use karne par electrodes par electrolysis hokar solution ka concentration badal jaata hai; AC ise rokta hai!

10. Λ_m°(NH₄OH) = Λ_m°(NH₄Cl) + Λ_m°(NaOH) − Λ_m°(NaCl) = 150 + 248 − 126 = **272 S cm² mol⁻¹**.
    Jaanch: 248 − 126 = 122; 150 + 122 = 272 ✅.

---

Ab tum Conductivity, Molar Conductivity aur Kohlrausch's Law ke saare numericals master kar chuke ho!

**Agle topic mein:** Electricity bhej kar chemical reactions karwana — **Electrolysis** aur **Faraday's Two Laws of Electrolysis** seekhenge!
