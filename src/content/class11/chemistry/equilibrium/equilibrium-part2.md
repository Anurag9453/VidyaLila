# Chapter: Equilibrium (Part 2)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [equilibrium.md](equilibrium.md) se aage chalti hai** (wahan humne physical/chemical equilibrium, dynamic nature, K_c, K_p aur K_p = K_c (RT)^(Δn_g) seekha tha). Chapter ki shuruaat: [equilibrium.md](equilibrium.md). Recall ke liye: ΔG = Δ_rG° + RT ln Q aur Δ_rG° = −2.303 RT log K tum Chapter 5 ([thermodynamics-part5.md](../thermodynamics/thermodynamics-part5.md)) mein padh chuke ho.
> **Topics covered in this file:**
> 2. Reaction Quotient (Q_c, Q_p), ICE Table Method aur Le Chatelier's Principle (Sabhi 5 Factors)

---

# Topic 2: Reaction Quotient (Q_c, Q_p), ICE Table Method aur Le Chatelier's Principle

Topic 1 mein humne dekha ki equilibrium par K_c aur K_p ki value fixed hoti hai. Par do bade sawaal abhi baaki hain:
1. Agar kisi flask mein reactants aur products ki koi bhi matra daal di jaaye, to **reaction kis disha mein chalega** aur equilibrium par exact kitni matra banegi? (Jawab: **Reaction Quotient Q** aur **ICE Table**!)
2. Agar ek santeelit (equilibrium) system ko hum bahar se chhed dein — pressure badhayein, garam karein, catalyst daalein ya inert gas bharein — to system apna santulan wapas kaise laayega? (Jawab: **Le Chatelier's Principle**!)

---

## Namrata aur jhoolte hue rassi ke pul par santulan

Namrata pahadon ki trip par ek **jhoolte hue rassi ke pul (hanging rope bridge)** par chal rahi thi. Jaise hi tez hawa ne pul ko **baayin taraf (left)** dhakela, Namrata ne turant apna vazan thoda **daayin taraf (right)** jhuka kar santulan bana liya! Phir jab pul aage jhuka, to wo thoda peeche jhuki — har baar usne bahari dhakke ka **ulta asar** karke apna balance wapas paaya!

Teacher ma'am ne muskurate hue kaha, "Namrata, 1884 mein Henry Le Chatelier ne dekha ki chemical equilibrium bhi bilkul aisa hi karta hai! Jab bhi tum kisi equilibrium system par koi **stress** (concentration, pressure ya temperature ka badlaav) daalte ho, to system us disha mein khisak (shift) jaata hai jisse us stress ka asar **kam ya khatam** ho jaaye!" Chalo, Q_c, ICE Table aur Le Chatelier ke paanchon factors ko poori gehraai se seekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Reaction Quotient (Q_c / Q_p)** | K_c / K_p jaisa hi formula, par **kisi bhi pal** (chahe equilibrium ho ya na ho!) ki concentrations se nikala gaya | Q_c = [C]^c [D]^d ÷ ([A]^a [B]^b) at any time t |
| **ICE Table** | **I**nitial, **C**hange, **E**quilibrium — initial concentrations se unknown 'x' maankar equilibrium concentrations nikaalne ka table | H₂ + I₂ ⇌ 2HI mein 1−x, 1−x, 2x |
| **Le Chatelier's Principle** | Agar equilibrium par koi badlaav (T, P, conc) kiya jaaye, to system us disha mein shift hota hai jo us badlaav ka **virodh (undo)** kare | Pressure badhane par gas kam moles wali taraf shift hoti hai |
| **Inert gas** | Aisi non-reacting gas (jaise He, Ne, Ar) jo equilibrium mixture mein milayi jaaye | Constant V par no shift; constant P par zyada gas moles ki taraf shift! |

---

## Part A: Reaction Quotient (Q) aur ICE Table Method

### 1. Q aur K ki Tulna se Reaction ki Disha (3 Pakke Cases)

```
       Q_c < K_c                  Q_c = K_c                  Q_c > K_c
   (Products kam hain!)       (EQUILIBRIUM!)            (Products ZYADA hain!)
    Shifts FORWARD --->        Koi shift nahi            <--- Shifts REVERSE
      (ΔG < 0)                    (ΔG = 0)                    (ΔG > 0)
```

> **Figure 2.1** – Q_c aur K_c ki tulna: Q < K ho to reaction aage (products ki taraf) badhta hai; Q > K ho to peeche (reactants ki taraf) aata hai; Q = K par equilibrium mil jaata hai.

*(Thermodynamics se pul: **ΔG = Δ_rG° + RT ln Q = RT ln(Q / K)**! Jab Q < K → ln(Q/K) < 0 → ΔG < 0 → forward spontaneous!)*

### Example 1. Q_c banaam K_c se Disha Pehchanna

**Sawaal:** Reaction **A(g) + B(g) ⇌ 2C(g)** ke liye K_c = **4.0** hai. Kisi pal flask mein **[A] = 0.50 M**, **[B] = 0.50 M** aur **[C] = 2.0 M** hain. Kya system equilibrium par hai? Agar nahi, to kis disha mein chalega?

**Hal:**
- Q_c = [C]² ÷ ([A][B]) = (2.0)² ÷ (0.50 × 0.50) = 4.0 ÷ 0.25 = **16.0**.
- Yahan **Q_c (16.0) > K_c (4.0)**! Products zaroorat se zyada hain → reaction **REVERSE (peeche, A aur B ki taraf)** chalega jab tak Q_c ghatkar 4.0 na ho jaaye!

**Jaanch:** 4.0 ÷ 0.25 = 16.0 > 4.0 → reverse shift ✅.

---

### Example 2. ICE Table se Equilibrium Concentrations Nikaalna

**Sawaal:** **H₂(g) + I₂(g) ⇌ 2HI(g)** ke liye **K_c = 64** hai. Agar shuruaat mein **1.00 M H₂** aur **1.00 M I₂** liya jaaye (HI = 0), to equilibrium par teeno ki concentrations nikaalo.

**Hal:**
| Stage | [H₂] (M) | [I₂] (M) | [HI] (M) |
|---|---|---|---|
| **I**nitial | 1.00 | 1.00 | 0 |
| **C**hange | −x | −x | +2x |
| **E**quilibrium | **1.00 − x** | **1.00 − x** | **2x** |

- K_c = [HI]² ÷ ([H₂][I₂]) → 64 = (2x)² ÷ (1.00 − x)²
- Dono taraf **square root** lo (aasaan shortcut!): **8 = 2x ÷ (1.00 − x)**
- 8 − 8x = 2x → 10x = 8 → **x = 0.80 M**!
- Equilibrium concentrations: **[H₂] = 0.20 M**, **[I₂] = 0.20 M**, **[HI] = 2(0.80) = 1.60 M**!

**Jaanch:** K_c = (1.60)² ÷ (0.20 × 0.20) = 2.56 ÷ 0.04 = 64 ✅!

---

## Part B: Le Chatelier's Principle — Sabhi 5 Factors (Ek Master Table Mein!)

| Factor | Badlaav (Stress) | Equilibrium Kis Taraf Shift Hoga? | Kya **K** ki Value Badlegi? |
|---|---|---|---|
| **1. Concentration** | Reactant jodna / Product nikaalna | **Forward** (Products ki taraf) | **NAHI!** |
| **1. Concentration** | Product jodna / Reactant nikaalna | **Reverse** (Reactants ki taraf) | **NAHI!** |
| **2. Pressure / Volume** | Pressure BADHANA (Volume GHATANA) | **Kam gaseous moles** wali taraf! *(Δn_g = 0 ho to koi shift nahi!)* | **NAHI!** |
| **2. Pressure / Volume** | Pressure GHATANA (Volume BADHANA) | **Zyada gaseous moles** wali taraf! | **NAHI!** |
| **3. Temperature (T)** | **T BADHANA (garam karna)** | **Endothermic (ΔH > 0)** disha mein! *(Exo mein reverse, Endo mein forward)* | **HAAN!** *(K sirf T se badalta hai!)* |
| **3. Temperature (T)** | **T GHATANA (thanda karna)** | **Exothermic (ΔH < 0)** disha mein! | **HAAN!** |
| **4. Catalyst** | Positive catalyst milana | **KOI SHIFT NAHI!** *(Sirf equilibrium jaldi milta hai — r_f aur r_b dono barabar tez!)* | **NAHI!** |
| **5. Inert Gas (Ar, He)** | **Constant Volume (V)** par milana | **KOI SHIFT NAHI!** *(Partial pressures nahi badalte!)* | **NAHI!** |
| **5. Inert Gas (Ar, He)** | **Constant Pressure (P)** par milana | Volume badhta hai → **Zyada gaseous moles** wali taraf shift! | **NAHI!** |

### Example 3. Haber Process (Ammonia Banana) par Le Chatelier's Principle

*(Chetavani: Industrial high-pressure process — sirf padhne ke liye!)*
**Reaction:** **N₂(g) + 3H₂(g) ⇌ 2NH₃(g)**; **ΔH = −92.4 kJ mol⁻¹** *(Exothermic; 4 mol gas → 2 mol gas!)*

- **High Pressure (200 atm):** Gas moles 4 se 2 ho rahe hain → high pressure **Forward** (zyada NH₃!) ko favour karta hai!
- **Low Temperature (Optimum ~700 K):** Exothermic reaction hai → low T **Forward** ko favour karta hai (par bahut kam T par reaction bahut dheema ho jaata hai, isliye optimum ~700 K + **Fe catalyst** rakhte hain!).
- **NH₃ ko lagatar thanda karke nikaalna:** Product ghatne par reaction lagatar **Forward** chalta rehta hai!
- **Fe Catalyst:** Equilibrium shift NAHI karta aur K NAHI badalta — bas equilibrium jaldi pahuncha deta hai!
- **Argon (inert gas) milana:** Constant V par **no shift**; constant P par volume badhega → **Reverse (4 mol gas)** ki taraf shift!

**Jaanch:** High P (kam gas moles = 2) + Optimum low T (exothermic) + NH₃ removal = maximum NH₃ yield ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: "Catalyst milane se zyada product banta hai ya K badh jaata hai" likh dena.**
   *Sahi baat:* Catalyst activation energy ko aage aur peeche **dono dishaon mein barabar kam** karta hai — isliye na equilibrium position badalti hai, na K! Bas equilibrium **kam samay mein** mil jaata hai.

2. **Galti 2: Pressure ya Concentration badalne par K ki value badal jaana maan lena.**
   *Sahi baat:* Pure chapter ka Golden Rule: **K ki sankhya SIRF TEMPERATURE (T) badalne par badalti hai**! Concentration ya pressure badalne par Q badalta hai aur system shift hokar wapas wahi purana K le aata hai!

3. **Galti 3: Inert gas milane ke dono cases (Constant V vs Constant P) ko ek hi maan lena.**
   Constant **V** par reactants/products ke partial pressures nahi badalte → **no shift**! Constant **P** par cylinder ka volume phailta hai (effective pressure ghatta hai) → **zyada gas moles** wali taraf shift!

---

## Quick Recap

- **Q vs K:** Q < K → Forward; Q = K → Equilibrium; Q > K → Reverse.
- **ICE Table:** Initial, Change (−ax, +cx), Equilibrium → K_c mein rakhkar x nikalo.
- **Le Chatelier:** High P → kam gas moles; High T → endothermic disha; Catalyst → no shift, faster equilibrium; Inert gas at const V → no shift, at const P → zyada gas moles.
- **ONLY Temperature changes K!**

---

## Practice Questions

1. For **2SO₂(g) + O₂(g) ⇌ 2SO₃(g)** at 1000 K, **K_c = 280**. In a 1.0 L vessel at a certain instant, **[SO₂] = 0.20 M**, **[O₂] = 0.10 M**, and **[SO₃] = 1.00 M**. Calculate **Q_c** and predict the direction in which the reaction will proceed. *(Toxic/corrosive gases: paper problem only.)*
2. For **CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g)** at 800 K, **K_c = 9.0**. If **1.00 mol of CO** and **1.00 mol of H₂O** are placed in a **1.00 L** flask, use an ICE table to find the equilibrium concentrations of all four gases.
3. For **PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)** at 500 K, **K_c = 0.040**. Starting with **0.20 M PCl₅** (and zero products), set up the ICE table and verify that **x = 0.072 M** satisfies the equilibrium expression (to 2 sig figs).
4. Consider the endothermic equilibrium: **N₂O₄(g, colourless) ⇌ 2NO₂(g, reddish-brown)**, **ΔH = +57.2 kJ**. Predict the colour change (darker brown or paler) when:
   (a) the temperature is increased,
   (b) the pressure is increased by compressing the syringe,
   (c) a small amount of inert Helium is added at constant volume. *(Toxic gases: paper problem only.)*
5. In the **Contact Process** for making sulphuric acid: **2SO₂(g) + O₂(g) ⇌ 2SO₃(g)**, **ΔH = −196 kJ**. Using Le Chatelier's Principle, state the favourable conditions of (a) pressure, (b) temperature, and (c) concentration to maximise SO₃ yield, and explain the role of the **V₂O₅ catalyst**.
6. Explain clearly why adding an **inert gas (Argon)** to **PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)** causes **no shift** at constant volume, but shifts the equilibrium **forward** at constant pressure.
7. For the heterogeneous equilibrium **CaCO₃(s) ⇌ CaO(s) + CO₂(g)** (ΔH = +178 kJ), what happens to the equilibrium pressure of CO₂ if:
   (a) more solid CaCO₃ is added at constant T,
   (b) temperature is raised,
   (c) CO₂ gas is continuously swept out of the kiln?
8. Why does a **catalyst** never alter the equilibrium constant K or the final yield of a reversible reaction?
9. For an **exothermic** reaction (ΔH < 0), does the equilibrium constant **K increase or decrease** when temperature is raised? Explain using Le Chatelier's Principle.
10. Using **ΔG = RT ln(Q / K)**, prove mathematically why a reaction proceeds spontaneously in the **forward direction** whenever **Q < K**.
11. For **H₂(g) + I₂(g) ⇌ 2HI(g)**, what is the effect of (a) doubling the total pressure, and (b) adding inert Neon at constant pressure? Give a one-line reason using Δn_g.
12. State whether each statement is True or False, and correct the false ones:
    (a) If Q_c > K_c, the reaction shifts in the forward direction to form more products.
    (b) Increasing the concentration of a reactant increases the numerical value of K_c.
    (c) Raising the temperature always shifts any equilibrium in the endothermic direction.
    (d) Adding a solid reactant to a heterogeneous equilibrium shifts the equilibrium strongly forward.

### Answers

1. Q_c = [SO₃]² ÷ ([SO₂]²[O₂]) = (1.00)² ÷ ((0.20)² × 0.10) = 1.00 ÷ 0.004 = **250**.
   Kyunki **Q_c (250) < K_c (280)**, reaction **FORWARD (SO₃ ki taraf)** chalega!
   Jaanch: 0.04 × 0.10 = 0.004; 1 ÷ 0.004 = 250 < 280 ✅.

2. ICE Table: [CO] = 1 − x, [H₂O] = 1 − x, [CO₂] = x, [H₂] = x.
   9.0 = x² ÷ (1 − x)² → square root lo: **3 = x ÷ (1 − x)** → 3 − 3x = x → 4x = 3 → **x = 0.75 M**.
   Equilibrium par: **[CO] = [H₂O] = 0.25 M**, **[CO₂] = [H₂] = 0.75 M**.
   Jaanch: (0.75)² ÷ (0.25)² = 3² = 9.0 = K_c ✅.

3. ICE Table: [PCl₅] = 0.20 − x, [PCl₃] = x, [Cl₂] = x → K_c = x² ÷ (0.20 − x) = 0.040.
   Check x = 0.072: (0.072)² ÷ (0.20 − 0.072) = 0.005184 ÷ 0.128 = **0.0405 ≈ 0.040**!
   Jaanch: Exact quadratic x² + 0.04x − 0.008 = 0 → x = (−0.04 + √0.0336)/2 = 0.0717 ≈ 0.072 M ✅.

4. (a) **Darker brown** (T badhane par endothermic forward shift → zyada NO₂!).
   (b) **Paler / lighter** (Pressure badhane par kam gas moles = 1 mol N₂O₄ ki taraf reverse shift!).
   (c) **No colour change** (Constant V par inert gas se koi shift nahi!).

5. (a) **High pressure** (3 mol gas → 2 mol gas, kam moles forward!).
   (b) **Optimum low temperature** (~720 K, kyunki exothermic hai).
   (c) **Excess O₂** ya SO₃ ka removal (forward shift).
   **V₂O₅ catalyst** equilibrium jaldi laata hai, K ya yield nahi badalta.

6. Constant **V** par PCl₅, PCl₃ aur Cl₂ ke partial pressures aur concentrations bilkul nahi badalte → Q = K → **no shift**! Constant **P** par Argon daalne se volume phailta hai (teeno ke partial pressures ghatte hain) → system **zyada gas moles (1 → 2 mol, forward)** ki taraf shift hota hai!

7. (a) **Koi badlaav nahi** (solid CaCO₃ ka active mass 1 hai, K_p = p_CO₂ nahi badalta!).
   (b) **p_CO₂ badhega** (endothermic reaction → high T forward shift!).
   (c) **Forward shift** (CO₂ nikalte hi reaction poora CaO banane ke liye aage badhta rehta hai!).

8. Catalyst forward aur reverse dono reactions ki activation energy ko **ek hi matra mein kam** karta hai, isliye r_f aur r_b dono barabar guna badhte hain aur unka anupaat K = k_f / k_b bilkul nahi badalta.

9. **K ghat-ta (decreases) hai!** Exothermic reaction mein T badhane par equilibrium reverse (endothermic) disha mein shift hota hai → products ghatte aur reactants badhte hain → **K kam** ho jaata hai!

10. Jab **Q < K**, to ratio **Q / K < 1** hota hai. 1 se chhote number ka natural log **ln(Q / K) < 0 (negative)** hota hai → isliye **ΔG = RT ln(Q / K) < 0**, jo forward spontaneous reaction ki pakki shart hai!

11. Dono cases mein **KOI SHIFT NAHI!** Kyunki Δn_g = 2 − (1 + 1) = **0** (dono taraf barabar 2 mol gas hain)!

12. (a) **False** ❌. Q_c > K_c hone par reaction **REVERSE** disha mein chalta hai.
    (b) **False** ❌. K_c sirf **temperature** badalne par badalta hai, concentration se nahi!
    (c) **True** ✅.
    (d) **False** ❌. Pure solid ka active mass 1 hota hai, isliye solid jodne se koi shift nahi hota!

---

Ab tum Q_c, ICE Tables aur Le Chatelier ke paanchon factors par poori pakad bana chuke ho!

**Aage kya?** Ab chalte hain paani ke andar **ions** ki duniya mein — **Ionic Equilibrium**! Strong aur weak acids/bases kya hain, **Arrhenius, Brønsted–Lowry aur Lewis** teeno theories kya kehti hain, **Ostwald Dilution Law** aur **10⁻⁸ M HCl ka pH 8 kyun NAHI hota**? Ye sab hum agle topic (**Topic 3**) mein seekhenge!
