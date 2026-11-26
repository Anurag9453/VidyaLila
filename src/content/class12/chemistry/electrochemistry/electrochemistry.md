# Chapter: Electrochemistry

> **Class:** 12 | **Subject:** Chemistry
> **Previous chapter:** [Solutions](../solutions/solutions-part6.md)

---

## Daniell Cell ka 1.10 Volt aur Nernst Equation!

Chemistry lab mein teacher ma'am ne ek beaker mein Zinc strip ko ZnSO₄ solution mein aur doosre beaker mein Copper strip ko CuSO₄ solution mein rakha, aur dono ko U-shaped **Salt Bridge** se joda (safe low-voltage teacher demo). **Girja** ne dekha ki voltmeter ne exact **1.10 V** dikhaya — par jaise hi ma'am ne ZnSO₄ mein thoda paani milakar uska concentration kam kiya, voltage 1.10 V se **badh** gaya!

Class 11 mein tumne [Redox Reactions](../../../class11/chemistry/redox-reactions/redox-reactions.md) mein galvanic cell aur electrode potential ki shuruat padhi thi. Aaj Class 12 mein hum **Standard Hydrogen Electrode (SHE)** aur **Nernst Equation** se kisi bhi concentration par exact cell voltage calculate karna seekhenge!

---

## Naye Shabd (New Words)

- **Galvanic (Voltaic) Cell:** Woh device jo spontaneous redox reaction ki chemical energy ko electrical energy mein badalta hai (e.g., Daniell cell: Zn|Zn²⁺||Cu²⁺|Cu).
- **LOAN Rule (Never Forget!):** **L**eft = **O**xidation = **A**node = **N**egative terminal! (Right = Reduction = Cathode = Positive terminal!)
- **Standard Hydrogen Electrode (SHE):** Reference electrode (Pt | H₂(1 bar) | H⁺(1 M)) jiska standard electrode potential **E° = 0.00 V** maana jaata hai!
- **Nernst Equation:** Non-standard concentrations (≠ 1 M) par electrode ya cell ka exact EMF nikaalne ka formula: **E_cell = E°_cell − (0.059 / n) log Q** (at 298 K).

---

## 1. Standard Cell Potential (E°_cell) & Cell Representation

Cell representation mein **Anode** (oxidation) left mein, **Salt bridge (||)** beech mein, aur **Cathode** (reduction) right mein likhte hain:
**Zn(s) | Zn²⁺(aq, C₁) || Cu²⁺(aq, C₂) | Cu(s)**

- Standard Cell EMF (hamesha standard **reduction** potentials use karo!):

**E°_cell = E°_cathode − E°_anode = E°_right − E°_left**

*(Daniell cell: E°(Cu²⁺/Cu) = +0.34 V, E°(Zn²⁺/Zn) = −0.76 V ⟹ **E°_cell = +0.34 − (−0.76) = +1.10 V**!)*

---

## 2. The Nernst Equation (At 298 K)

General balanced cell reaction **a A + b B → c C + d D** (transferring **n** moles of electrons):

**E_cell = E°_cell − (2.303 R T / n F) log Q**

At **T = 298 K** (R = 8.314, F = 96500 C/mol ⟹ **2.303 R T / F ≈ 0.059 V**):

**E_cell = E°_cell − (0.059 / n) log ( [C]^c [D]^d / [A]^a [B]^b )**

*(Pure solids aur liquids ki concentration **1** li jaati hai!)*
- Daniell cell ke liye (Zn + Cu²⁺ → Zn²⁺ + Cu, **n = 2**):
  **E_cell = 1.10 − (0.059 / 2) log ( [Zn²⁺] / [Cu²⁺] )**
  *(Dekha? [Zn²⁺] kam karne par log term negative hota hai ⟹ **E_cell > 1.10 V** — bilkul Girja ke lab demo jaisa!)*

---

## Solved Examples

### Example 1: Nernst Equation for Mg–Cu Cell
Represent the cell and calculate **E_cell** at 298 K for:
**Mg(s) + Cu²⁺(0.001 M) → Mg²⁺(0.1 M) + Cu(s)**
Given: E°(Mg²⁺/Mg) = **−2.36 V**, E°(Cu²⁺/Cu) = **+0.34 V**.

**Hal (Solution):**
- Cell representation: **Mg(s) | Mg²⁺(0.1 M) || Cu²⁺(0.001 M) | Cu(s)** (**n = 2**).
- **E°_cell = E°_cathode − E°_anode = +0.34 − (−2.36) = +2.70 V**.
- Reaction quotient: **Q = [Mg²⁺] / [Cu²⁺] = 0.1 / 0.001 = 100 = 10²** ⟹ **log Q = 2**.
- **E_cell = 2.70 − (0.059 / 2) × 2 = 2.70 − 0.059 = 2.641 V**.
- **Jaanch:** 2 upar-neeche kat gaya; 2.70 − 0.059 = 2.641 V ✅.

### Example 2: Single Electrode Potential of Cu²⁺/Cu
Calculate the reduction potential of a Copper electrode dipped in **0.01 M CuSO₄** solution at 298 K (**E°(Cu²⁺/Cu) = +0.34 V**).

**Hal (Solution):**
- Reduction half-reaction: **Cu²⁺ + 2e⁻ → Cu(s)** (**n = 2**, Q = 1 / [Cu²⁺] = 1 / 0.01 = **100**).
- **E = E° − (0.059 / 2) log(100) = 0.34 − (0.059 / 2) × 2 = 0.34 − 0.059 = +0.281 V**.
- **Jaanch:** Lower [Cu²⁺] lowers reduction tendency ⟹ E < +0.34 V ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **E°_cell = E°_anode − E°_cathode ulta kar dena:**
   - *Sahi:* Hamesha **E°_cell = E°_cathode − E°_anode** (Right − Left) aur dono **Reduction Potentials** hone chahiye!
2. **Nernst equation mein pure solid [Zn(s)] ko concentration mein daalna:**
   - *Sahi:* Pure solids aur liquids ki activity **1** hoti hai — Q mein sirf **aqueous ions (M)** aur **gases (bar)** aate hain!
3. **E° ko stoichiometric coefficient se multiply kar dena:**
   - *Galat:* 2 Ag⁺ + 2e⁻ → 2 Ag ke liye E° ko 2 se multiply kar dena!
   - *Sahi:* **E° intensive property hai** — reaction ko 2 ya 3 se multiply karne par **E° kabhi nahi badalta** (sirf **n** badalta hai)!

---

## Quick Recap

| Concept | Formula / Fact |
|---|---|
| Galvanic Cell Rule | **LOAN:** Left = Oxidation = Anode = Negative |
| Standard Cell EMF | **E°_cell = E°_cathode − E°_anode** (both reduction potentials!) |
| Nernst Equation (298 K) | **E_cell = E°_cell − (0.059 / n) log Q** |
| Intensive Property | Multiplying half-reaction does NOT change E° |

---

## Practice Questions

1. What are the two main functions of a **salt bridge** in a galvanic cell?
2. Write the cell representation and overall balanced reaction for a galvanic cell made from **Zn/Zn²⁺** (E° = −0.76 V) and **Ag⁺/Ag** (E° = +0.80 V). Calculate E°_cell.
3. Why is the standard electrode potential of the Standard Hydrogen Electrode (SHE) taken as 0.00 V?
4. Calculate E_cell at 298 K for **Zn(s) | Zn²⁺(0.1 M) || Cu²⁺(0.01 M) | Cu(s)** given E°_cell = 1.10 V.
5. Calculate the potential of a Hydrogen electrode in contact with a solution of **pH = 10** at 298 K (H₂ at 1 bar, E° = 0.00 V).
6. Can a copper sulphate (CuSO₄) solution be safely stored in a **zinc** pot? Explain using E° values (E°(Zn²⁺/Zn) = −0.76 V, E°(Cu²⁺/Cu) = +0.34 V).
7. Calculate E_cell at 298 K for **Ni(s) + 2 Ag⁺(0.01 M) → Ni²⁺(0.1 M) + 2 Ag(s)** given E°_cell = 1.05 V.
8. How does E_cell of a Daniell cell change if the concentration of **Cu²⁺** is increased?
9. State whether True or False: If a half-cell reaction is multiplied by 2, its standard electrode potential E° also doubles.
10. What happens to a Daniell cell (E_cell = 1.10 V) when an external opposing potential **E_ext > 1.10 V** is applied?

### Answers

1. (i) Inner circuit ko complete karta hai (ions flow karke); (ii) Dono half-cells mein **electrical neutrality** banaye rakhta hai (liquid junction potential ko rokta hai).

2. Anode (lower E°): Zn → Zn²⁺ + 2e⁻; Cathode (higher E°): 2 Ag⁺ + 2e⁻ → 2 Ag.
   Cell: **Zn(s) | Zn²⁺(aq) || Ag⁺(aq) | Ag(s)**; Reaction: **Zn + 2 Ag⁺ → Zn²⁺ + 2 Ag**.
   **E°_cell = +0.80 − (−0.76) = +1.56 V**.
   Jaanch: E°(Ag⁺/Ag) ko 2 se multiply NAHI kiya ✅.

3. Single electrode ka absolute potential akele nahi naapa ja sakta — isliye SHE ko universal reference (**0.00 V** at all temperatures) maankar baaki sab electrodes ke relative potentials naape jaate hain!

4. n = 2, Q = [Zn²⁺]/[Cu²⁺] = 0.1 / 0.01 = **10** (log 10 = 1):
   **E_cell = 1.10 − (0.059 / 2) × 1 = 1.10 − 0.0295 = 1.0705 V**.
   Jaanch: 0.059 / 2 = 0.0295; 1.10 − 0.0295 = 1.0705 V ✅.

5. H⁺ + e⁻ → ½ H₂ (n = 1), pH = 10 ⟹ [H⁺] = 10⁻¹⁰ M ⟹ Q = 1 / [H⁺] = 10¹⁰ (log Q = 10):
   **E = 0 − (0.059 / 1) × 10 = −0.59 V** (shortcut: **E = −0.059 × pH**!).
   Jaanch: −0.059 × 10 = −0.59 V ✅.

6. **Nahi!** Zn ka E° (−0.76 V) Cu (+0.34 V) se kam hai ⟹ Zn zyada reactive hai aur CuSO₄ se Cu ko displace kar dega (**Zn + Cu²⁺ → Zn²⁺ + Cu**, E° = +1.10 V spontaneous!), jisse zinc pot mein chhed ho jayega!

7. n = 2, Q = [Ni²⁺] / [Ag⁺]² = 0.1 / (0.01)² = 0.1 / 10⁻⁴ = **10³** (log Q = 3):
   **E_cell = 1.05 − (0.059 / 2) × 3 = 1.05 − 0.0885 = 0.9615 V**.
   Jaanch: 0.0295 × 3 = 0.0885; 1.05 − 0.0885 = 0.9615 V ✅.

8. [Cu²⁺] badhane par Q = [Zn²⁺]/[Cu²⁺] ghatta hai ⟹ **E_cell BADH (increases) jaata hai**!

9. **False ❌.** Electrode potential E° ek **intensive property** hai — stoichiometry multiply karne se E° nahi badalta!

10. **E_ext > 1.10 V** par cell **Electrolytic Cell** ban jaata hai aur poori reaction **ulti (reverse)** chalne lagti hai (Cu dissolve hota hai aur Zn deposit hota hai)!

---

Ab tum Galvanic Cells, SHE aur Nernst Equation ko pakka samajh chuke ho!

**Agle topic mein:** Cell EMF ko Thermodynamics se jodenge — **Gibbs Free Energy (ΔG° = −n F E°)** aur **Equilibrium Constant (K_c)** seekhenge!
