# Chapter: Electrochemistry (Part 2)

> **Class:** 12 | **Subject:** Chemistry
> **Previous topic:** [Galvanic Cells and the Nernst Equation](electrochemistry.md)

---

## Battery ka Voltage, Gibbs Energy aur Equilibrium!

Chemistry revision ke dauran **Jaishree** ne ek brilliant connection dekha: Class 11 Thermodynamics mein koi reaction spontaneous tab hoti thi jab **ΔG < 0**, aur ab Electrochemistry mein galvanic cell tab kaam karta hai jab **E_cell > 0**! Aur jab battery poori tarah **dead (E_cell = 0)** ho jaati hai, to andar ka chemical reaction **Equilibrium (Q = K_c)** par pahunch chuka hota hai!

Aaj hum Electrochemistry aur Thermodynamics ko jodne wale teen sabse zaroori equations master karenge!

---

## Naye Shabd (New Words)

- **Faraday Constant (F):** 1 mole electrons par kul electric charge: **F = N_A × e ≈ 96,487 C/mol ≈ 96,500 C/mol**.
- **Electrical Work Done by Cell:** **W_elec = n F E_cell** (jahan n = reaction mein transfer hue moles of electrons).

---

## 1. Gibbs Energy and Cell Potential (ΔG = −n F E_cell)

Reversible galvanic cell mein max useful electrical work (n F E_cell) Gibbs free energy ki kami (−ΔG) ke barabar hota hai:

**ΔG = − n F E_cell**   aur standard state mein:   **ΔG° = − n F E°_cell**

- **Spontaneous reaction:** **E_cell > 0** ⟺ **ΔG < 0**!
- **Non-spontaneous reaction:** **E_cell < 0** ⟺ **ΔG > 0**!
- **At Equilibrium (Dead battery!):** **E_cell = 0** ⟺ **ΔG = 0**!
- *(Yaad rakho: **E° intensive** hai, par **ΔG° extensive** hai — agar reaction ko 2 se multiply karo to n double hota hai ⟹ **ΔG° double** ho jaata hai!)*

---

## 2. Equilibrium Constant (K_c) from Standard Cell Potential (E°_cell)

Equilibrium par **E_cell = 0** aur **Q = K_c**! Nernst equation mein rakho:
0 = E°_cell − (0.059 / n) log K_c  ⟹

**E°_cell = (0.059 / n) log K_c**   ⟹   **log K_c = (n × E°_cell) / 0.059**  *(at 298 K)*

Aur Thermodynamics se: **ΔG° = − 2.303 R T log K_c**!

---

## Solved Examples

### Example 1: ΔG° and log K_c for Daniell Cell
For the Daniell cell **Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)**, **E°_cell = 1.10 V** at 298 K. Calculate (a) **ΔG°** in kJ/mol, and (b) **log K_c** (take F = 96,500 C/mol).

**Hal (Solution):**
- Here **n = 2**.
- (a) **ΔG° = −n F E°_cell = −2 × 96500 × 1.10 = −212,300 J/mol = −212.3 kJ/mol**.
- (b) **log K_c = (n E°_cell) / 0.059 = (2 × 1.10) / 0.059 = 2.20 / 0.059 ≈ 37.29** ⟹ **K_c ≈ 2 × 10³⁷** (reaction goes virtually to 100% completion!).
- **Jaanch:** 2 × 96.5 × 1.1 = 212.3 kJ/mol ✅.

### Example 2: Finding E°_cell from K_c
For a 2-electron redox reaction at 298 K, the equilibrium constant is **K_c = 10¹⁰**. Calculate **E°_cell**.

**Hal (Solution):**
- log K_c = log(10¹⁰) = **10**, n = 2.
- **E°_cell = (0.059 / 2) × 10 = 0.059 × 5 = +0.295 V**.
- **Jaanch:** (2 × 0.295) / 0.059 = 0.59 / 0.059 = 10 ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **ΔG° = −n F E° mein minus sign bhool jaana:**
   - *Sahi:* Positive E°_cell hamesha **negative ΔG°** deta hai (spontaneous)!
2. **ΔG° ko J/mol ke bajay seedha kJ/mol likh dena (1000 se divide kiye bina!):**
   - *Sahi:* n × 96500 × E° hamesha **Joules/mol** mein aata hai — kJ/mol ke liye **1000 se divide** karo!
3. **E°_cell aur K_c ke beech ln vs log₁₀ confuse karna:**
   - *Sahi:* **0.059** wale formula mein hamesha **log₁₀ K_c** hota hai (ln K_c nahi)!

---

## Quick Recap

| Relation | Formula (at 298 K) | Key Fact |
|---|---|---|
| Gibbs Energy & EMF | **ΔG° = − n F E°_cell** (F = 96500 C/mol) | ΔG° is extensive; E° is intensive |
| EMF & Equilibrium Constant | **E°_cell = (0.059 / n) log K_c** | At equilibrium: E_cell = 0, ΔG = 0, Q = K_c |
| Spontaneity Check | E°_cell > 0 ⟺ ΔG° < 0 ⟺ K_c > 1 | Reaction is thermodynamically feasible |

---

## Practice Questions

1. Write the mathematical relation between standard Gibbs free energy change ΔG° and standard cell potential E°_cell.
2. What are the values of E_cell and ΔG when a galvanic cell reaches chemical equilibrium?
3. Calculate ΔG° (in kJ/mol) for the reaction: **2 Fe³⁺(aq) + 2 I⁻(aq) → 2 Fe²⁺(aq) + I₂(s)** given E°_cell = +0.236 V at 298 K (F = 96500 C/mol).
4. Calculate **log K_c** and **K_c** for the reaction in Question 3 at 298 K.
5. For the reaction **Cu(s) + 2 Ag⁺(aq) → Cu²⁺(aq) + 2 Ag(s)**, E°_cell = +0.46 V at 298 K. Calculate ΔG° (in kJ/mol) and log K_c.
6. If E°_cell = +0.59 V for a 1-electron redox reaction at 298 K, find the exact value of its equilibrium constant K_c.
7. Why is ΔG° an **extensive** property while E°_cell is an **intensive** property?
8. A cell reaction has ΔG° = −193 kJ/mol with n = 2. Calculate its standard cell potential E°_cell (take F = 96500 C/mol).
9. State whether True or False: If E°_cell is negative, the equilibrium constant K_c of the reaction is less than 1.
10. Find E°_cell for a 2-electron reaction at 298 K whose equilibrium constant is K_c = 10⁶.

### Answers

1. **ΔG° = − n F E°_cell**, jahan n = moles of electrons transferred, F = 96500 C/mol.

2. Equilibrium par **E_cell = 0** aur **ΔG = 0** (battery completely discharged!).

3. Here n = 2:
   **ΔG° = −2 × 96500 × 0.236 = −45,548 J/mol ≈ −45.55 kJ/mol**.
   Jaanch: 193000 × 0.236 = 45548 J/mol ✅.

4. **log K_c = (2 × 0.236) / 0.059 = 0.472 / 0.059 = 8.0** ⟹ **K_c = 10⁸**!
   Jaanch: 0.059 × 8 = 0.472 ✅.

5. n = 2:
   ΔG° = −2 × 96500 × 0.46 = −88,780 J/mol = **−88.78 kJ/mol**.
   log K_c = (2 × 0.46) / 0.059 = 0.92 / 0.059 ≈ **15.59** (K_c ≈ 3.9 × 10¹⁵).
   Jaanch: 193 × 0.46 = 88.78 kJ/mol ✅.

6. n = 1: log K_c = (1 × 0.59) / 0.059 = **10** ⟹ **K_c = 10¹⁰**!
   Jaanch: 0.59 / 0.059 = 10 ✅.

7. Reaction ko 2 se multiply karne par **n** double hota hai ⟹ **ΔG° = −nFE°** double ho jaata hai (depends on amount = **extensive**), jabki **E°** same rehta hai (independent of amount = **intensive**)!

8. −193,000 = −2 × 96500 × E°_cell = −193,000 × E°_cell ⟹ **E°_cell = +1.00 V**!
   Jaanch: 2 × 96.5 = 193 kJ/mol ✅.

9. **True ✅.** E°_cell < 0 ⟹ log K_c < 0 ⟹ **K_c < 1**!

10. log K_c = 6, n = 2: **E°_cell = (0.059 / 2) × 6 = 0.059 × 3 = +0.177 V**.
    Jaanch: 0.059 × 3 = 0.177 V ✅.

---

Ab tum Gibbs Energy, Cell EMF aur Equilibrium Constant ke saare rishton ko pakka master kar chuke ho!

**Agle topic mein:** Electrolytic solutions mein ions electricity kaise chalate hain — **Conductivity (κ)**, **Molar Conductivity (Λ_m)** aur **Kohlrausch's Law** seekhenge!
