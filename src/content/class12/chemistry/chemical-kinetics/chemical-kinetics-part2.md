> **Class:** 12 | **Subject:** Chemistry | **Chapter 3:** Chemical Kinetics (Part 2)

# Rate Law, Order and Molecularity

> **Pichle topic mein:** Humne [Rate of a Reaction and Factors Affecting It](chemical-kinetics.md) mein average rate, instantaneous rate, stoichiometric rate relations, aur concentration, temperature, catalyst jaise factors dekhe. Ab dekhenge ki concentration aur rate ke beech ka exact mathematical relation — **Rate Law** — kaise likha jata hai, aur **Order** aur **Molecularity** mein kya antar hai.

---

Prahlad apne bhaiya ke saath dawai banane wale ek small laboratory visit par gaya tha. Wahan chemist ne bataya ki ek reaction mein do reactants A aur B milte hain: 2A + B → C. Prahlad ne socha, "2A hai, toh A double karne par rate 4 times ho jayega!" Chemist muskura kar bole, "Sirf equation dekh kar mat batao, experiment ka data dekho!" Data mein A double karne par rate sirf double hua, aur B double karne par rate bilkul nahi badla! Prahlad hairan reh gaya — equation mein 2A aur B likhe hain, par rate sirf A ki power 1 par depend kar raha hai!

Yahi hai Chemical Kinetics ka sabse bada rule: **Rate Law sirf experiment se pata chalta hai, balanced chemical equation se nahi!**

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Rate Law (Rate Expression)** | Woh experimental equation jo reaction rate ko reactants ki molar concentrations ki powers ke product ke roop mein dikhati hai: Rate = k [A]ˣ [B]ʸ |
| **Rate Constant (k)** | Proportionality constant jo sirf temperature aur catalyst par depend karta hai, concentration par nahi (also called specific reaction rate) |
| **Order of a Reaction (n)** | Rate law mein sabhi concentration terms ke exponents ka sum (n = x + y); yeh 0, 1, 2, 3, ya fractional bhi ho sakta hai |
| **Elementary Reaction** | Woh reaction jo sirf ek hi single step mein complete ho jati hai |
| **Complex Reaction** | Woh reaction jo do ya zyada elementary steps (mechanism) mein complete hoti hai |
| **Rate-Determining Step (RDS)** | Complex reaction ka sabse slow step, jo poore reaction ki overall speed tay karta hai |
| **Molecularity** | Ek elementary reaction step mein ek saath takrane (collide karne) wale reacting species (atoms, ions, ya molecules) ki sankhya |

---

## 1. Rate Law aur Rate Constant (k)

Maan lo ek general reaction hai:
aA + bB → cC + dD

Experimentally, rate ko is tarah likha jata hai:
Rate = − d[R]/dt = k [A]ˣ [B]ʸ

Yahan:
- **k** = rate constant (specific reaction rate — jab [A] = [B] = 1 mol L⁻¹, tab Rate = k hota hai).
- **x** = order with respect to A.
- **y** = order with respect to B.
- **x** aur **y** stoichiometric coefficients **a** aur **b** ke barabar ho bhi sakte hain aur nahi bhi!

### Units of Rate Constant (k) for nth Order Reaction

Kyunki Rate = k [Concentration]ⁿ:
Unit of k = (Unit of Rate) / (Unit of Concentration)ⁿ
= (mol L⁻¹ s⁻¹) / (mol L⁻¹)ⁿ
= **(mol L⁻¹)¹⁻ⁿ s⁻¹** = **mol¹⁻ⁿ Lⁿ⁻¹ s⁻¹**

Gaseous reactions mein pressure (atm ya bar) use hone par: **atm¹⁻ⁿ s⁻¹**

| Order (n) | Rate Law | Units of k (concentration) | Units of k (gas, atm) |
|---|---|---|---|
| 0 (Zero order) | Rate = k [A]⁰ = k | mol L⁻¹ s⁻¹ | atm s⁻¹ |
| 1 (First order) | Rate = k [A]¹ | s⁻¹ | s⁻¹ |
| 2 (Second order) | Rate = k [A]² | L mol⁻¹ s⁻¹ (mol⁻¹ L s⁻¹) | atm⁻¹ s⁻¹ |
| 3 (Third order) | Rate = k [A]³ | L² mol⁻² s⁻¹ | atm⁻² s⁻¹ |
| 1.5 (Fractional) | Rate = k [A]¹·⁵ | L⁰·⁵ mol⁻⁰·⁵ s⁻¹ | atm⁻⁰·⁵ s⁻¹ |

Tip: Exam mein agar k ki unit di ho, toh bina kisi formula ke turant order pehchan lo! Jaise k = 3.2 × 10⁻⁴ L mol⁻¹ s⁻¹ → turant pata chal gaya ki **second order** hai!

---

## 2. Order vs Molecularity

Yeh Chemistry ka sabse favourite conceptual difference hai:

| Feature | Order of Reaction | Molecularity of Reaction |
|---|---|---|
| Definition | Sum of powers of concentration terms in the experimental rate law | Number of reacting species colliding simultaneously in an elementary step |
| How determined | Purely experimental (cannot be predicted from overall balanced equation) | Theoretical (from the balanced equation of an elementary step) |
| Possible values | 0, 1, 2, 3, or even fractional (e.g., 1.5, 0.5) | Always a positive whole number: 1 (unimolecular), 2 (bimolecular), or 3 (termolecular); NEVER zero or fractional |
| Applicability | Applies to both elementary and complex reactions | Applies ONLY to elementary reactions (meaningless for overall complex reactions) |
| Why rarely > 3? | Overall order rarely > 3 | Probability of > 3 molecules colliding simultaneously with right orientation is almost zero |

### Elementary vs Complex Reactions

1. **Elementary reaction (1 step):**
   NH₄NO₂ → N₂ + 2H₂O (Unimolecular, molecularity = 1, order = 1)
   2HI → H₂ + I₂ (Bimolecular, molecularity = 2, order = 2)
   2NO + O₂ → 2NO₂ (Termolecular, molecularity = 3, order = 3)
   Elementary step ke liye order = molecularity hota hai.

2. **Complex reaction (multi-step):**
   Maan lo H₂O₂ ka decomposition I⁻ catalyst ki presence mein:
   2H₂O₂ → 2H₂O + O₂
   Mechanism:
   Step 1 (Slow, RDS): H₂O₂ + I⁻ → H₂O + IO⁻
   Step 2 (Fast): H₂O₂ + IO⁻ → H₂O + I⁻ + O₂
   Slow step mein 1 molecule H₂O₂ aur 1 ion I⁻ hain → Rate = k [H₂O₂][I⁻].
   Overall order = 1 + 1 = 2 (first order in H₂O₂, first order in I⁻).
   (Note: H₂O₂ concentrated ho toh skin aur eyes ke liye corrosive hota hai; yeh decomposition sirf teacher demo ya theory mein dekha jata hai.)

---

## Solved Examples

### Example 1: Order from Initial Rates Method
For the reaction P + 2Q → R, the following initial rate data were measured at 300 K:

| Experiment | [P] (mol L⁻¹) | [Q] (mol L⁻¹) | Initial Rate (mol L⁻¹ s⁻¹) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 4.0 × 10⁻⁴ |
| 3 | 0.20 | 0.20 | 1.6 × 10⁻³ |

Find: (a) order with respect to P and Q, (b) overall order, (c) rate law, (d) rate constant k with units.

**Solution:**
Let Rate = k [P]ˣ [Q]ʸ.

(a) Compare Exp 1 and Exp 2 ([Q] is constant at 0.10 mol L⁻¹):
Rate₂ / Rate₁ = (4.0 × 10⁻⁴) / (2.0 × 10⁻⁴) = 2
([P]₂ / [P]₁)ˣ = (0.20 / 0.10)ˣ = 2ˣ
So 2ˣ = 2 → **x = 1** (first order in P).

Compare Exp 2 and Exp 3 ([P] is constant at 0.20 mol L⁻¹):
Rate₃ / Rate₂ = (1.6 × 10⁻³) / (4.0 × 10⁻⁴) = 16 / 4 = 4
([Q]₃ / [Q]₂)ʸ = (0.20 / 0.10)ʸ = 2ʸ
So 2ʸ = 4 = 2² → **y = 2** (second order in Q).

(b) Overall order = x + y = 1 + 2 = **3**.

(c) Rate law: **Rate = k [P]¹ [Q]²**

(d) Substitute Exp 1 values:
2.0 × 10⁻⁴ = k × (0.10) × (0.10)² = k × 10⁻³
k = (2.0 × 10⁻⁴) / 10⁻³ = **0.20 L² mol⁻² s⁻¹**

Jaanch: Exp 3 check: Rate = 0.20 × (0.20) × (0.20)² = 0.20 × 0.20 × 0.04 = 0.0016 = 1.6 × 10⁻³ mol L⁻¹ s⁻¹ (exact match with table!). Units: (L² mol⁻² s⁻¹)(mol L⁻¹)³ = mol L⁻¹ s⁻¹ ✅

---

### Example 2: Identifying Order from Units of k
Identify the order of reaction from each rate constant:
(a) k = 4.7 × 10⁻⁵ L mol⁻¹ s⁻¹
(b) k = 1.9 × 10⁻³ s⁻¹
(c) k = 6.2 × 10⁻⁴ mol L⁻¹ s⁻¹

**Solution:**
Using general unit mol¹⁻ⁿ Lⁿ⁻¹ s⁻¹:
(a) L mol⁻¹ s⁻¹ = mol⁻¹ L¹ s⁻¹ → 1 − n = −1 → **n = 2 (Second order)**
(b) s⁻¹ = mol⁰ L⁰ s⁻¹ → 1 − n = 0 → **n = 1 (First order)**
(c) mol L⁻¹ s⁻¹ = mol¹ L⁻¹ s⁻¹ → 1 − n = 1 → **n = 0 (Zero order)**

Jaanch: For n = 2, (mol L⁻¹)¹⁻² s⁻¹ = mol⁻¹ L s⁻¹; for n = 1, (mol L⁻¹)⁰ s⁻¹ = s⁻¹; for n = 0, (mol L⁻¹)¹ s⁻¹ = mol L⁻¹ s⁻¹ ✅

---

### Example 3: Effect of Changing Volume on Rate
A reaction X + 2Y → Z has rate law Rate = k [X][Y]². If the volume of the reaction vessel is reduced to one-half of its original volume at constant temperature, by what factor does the reaction rate change?

**Solution:**
When volume V becomes V/2, molar concentration (n/V) of every reactant becomes **2 times** (doubles):
[X]' = 2[X], [Y]' = 2[Y]
New rate = k [X]' [Y]'² = k (2[X]) (2[Y])² = 2 × 4 × k [X][Y]² = **8 × original rate**.

Jaanch: Overall order = 1 + 2 = 3. Doubling all concentrations multiplies rate by 2³ = 8 times ✅

---

### Example 4: Fractional Order and Rate Calculation
The decomposition of acetaldehyde CH₃CHO → CH₄ + CO follows the rate law Rate = k [CH₃CHO]¹·⁵.
If k = 2.0 × 10⁻³ L⁰·⁵ mol⁻⁰·⁵ s⁻¹ and [CH₃CHO] = 0.04 mol L⁻¹, calculate the rate of reaction.

**Solution:**
[CH₃CHO]¹·⁵ = (0.04)¹·⁵ = (0.04)¹ × (0.04)⁰·⁵ = 0.04 × 0.2 = 0.008 = 8.0 × 10⁻³ (mol L⁻¹)¹·⁵
Rate = (2.0 × 10⁻³) × (8.0 × 10⁻³) = **1.6 × 10⁻⁵ mol L⁻¹ s⁻¹**.

Jaanch: (0.04)³ = 6.4 × 10⁻⁵; √(6.4 × 10⁻⁵) = √(64 × 10⁻⁶) = 8 × 10⁻³; 2 × 10⁻³ × 8 × 10⁻³ = 1.6 × 10⁻⁵ mol L⁻¹ s⁻¹ ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Balanced equation ke coefficients ko hi order maan lena:**
   - *Galat:* 2N₂O₅ → 4NO₂ + O₂ mein 2 likha hai toh order = 2 hoga.
   - *Sahi:* Experimentally yeh first-order reaction hai: Rate = k [N₂O₅]¹. Coefficients sirf elementary step mein order dete hain, overall reaction mein nahi.

2. **Molecularity ko zero ya fractional bol dena:**
   - *Galat:* Zero-order reaction ki molecularity bhi 0 hoti hai.
   - *Sahi:* Molecularity kabhi 0 ya fraction nahi ho sakti; bina kam se kam 1 molecule ke koi elementary step ho hi nahi sakta!

3. **Rate constant k ko concentration change hone par badal dena:**
   - *Galat:* Reactant double karne par k bhi double ho jayega.
   - *Sahi:* Rate double/quadruple ho sakta hai, par k constant rehta hai (jab tak temperature ya catalyst na badle).

---

## Quick Recap

- **Rate Law:** Rate = k [A]ˣ [B]ʸ (determined ONLY by experiment).
- **Order (n = x + y):** Can be 0, 1, 2, 3, or fractional; valid for elementary and complex reactions.
- **Units of k:** (mol L⁻¹)¹⁻ⁿ s⁻¹ (0th: mol L⁻¹ s⁻¹; 1st: s⁻¹; 2nd: L mol⁻¹ s⁻¹).
- **Molecularity:** Number of colliding species in an elementary step; always positive integer (1, 2, or 3); meaningless for overall complex reactions.
- **RDS:** Slowest step of a complex reaction controls the overall rate law.

---

## Practice Questions

1. Define rate constant and state the two factors on which its value depends.
2. For a reaction Rate = k [A]¹/² [B]², find the order with respect to A, order with respect to B, and overall order.
3. Write the units of rate constant k for a reaction of overall order: (a) 0, (b) 2, (c) 2.5.
4. Distinguish between order and molecularity of a reaction (any three points).
5. For the reaction 2A + B → C, the rate law is Rate = k [A]²[B]. How will the rate change if: (a) [A] is tripled and [B] is kept constant? (b) [A] is halved and [B] is quadrupled?
6. A reaction has rate constant k = 5.4 × 10⁻⁴ s⁻¹. What is the order of the reaction?
7. In the reaction M + N → Products, doubling [M] doubles the rate, while doubling both [M] and [N] increases the rate by 8 times. Find the rate law and overall order.
8. A gaseous reaction 2X(g) → Y(g) is second order in X. If the volume of the container is tripled at constant temperature, what happens to the rate of reaction?
9. Why is molecularity greater than 3 extremely rare in chemical reactions?
10. The mechanism of a reaction 2NO₂ + F₂ → 2NO₂F is:
    Step 1 (Slow): NO₂ + F₂ → NO₂F + F
    Step 2 (Fast): NO₂ + F → NO₂F
    Write the rate law, overall order, and molecularity of the rate-determining step.
11. For the reaction A + B → Products, initial rate data at 298 K are:
    Exp 1: [A] = 0.05 M, [B] = 0.05 M, Rate = 1.5 × 10⁻⁴ M s⁻¹
    Exp 2: [A] = 0.15 M, [B] = 0.05 M, Rate = 4.5 × 10⁻⁴ M s⁻¹
    Exp 3: [A] = 0.05 M, [B] = 0.10 M, Rate = 6.0 × 10⁻⁴ M s⁻¹
    Determine the rate law and calculate k with units.

---

### Answers

1. **Rate constant (k)** is the rate of reaction when the molar concentration of every reactant is unity (1 mol L⁻¹). It depends only on **temperature** and the **presence of a catalyst** (not on reactant concentration).
2. Order w.r.t. A = **1/2 (0.5)**; order w.r.t. B = **2**; overall order = 0.5 + 2 = **2.5 (5/2)**.
3. Using (mol L⁻¹)¹⁻ⁿ s⁻¹:
   (a) n = 0 → **mol L⁻¹ s⁻¹**
   (b) n = 2 → **L mol⁻¹ s⁻¹**
   (c) n = 2.5 → (mol L⁻¹)⁻¹·⁵ s⁻¹ = **L¹·⁵ mol⁻¹·⁵ s⁻¹**
4. (i) Order is experimental, molecularity is theoretical. (ii) Order can be 0 or fractional; molecularity is always a positive integer (1, 2, or 3). (iii) Order applies to both elementary and complex reactions; molecularity applies only to elementary steps.
5. (a) New rate = k (3[A])²[B] = **9 times** original rate.
   (b) New rate = k ([A]/2)²(4[B]) = (1/4) × 4 × k[A]²[B] = **1 × original rate (unchanged)**.
   Jaanch: (1/2)² × 4 = (1/4) × 4 = 1 ✅
6. Unit of k is s⁻¹ → (mol L⁻¹)¹⁻ⁿ s⁻¹ = s⁻¹ → 1 − n = 0 → **First order (n = 1)**.
7. Doubling [M] alone doubles rate → 2ˣ = 2 → x = 1.
   Doubling both gives 8 times rate → 2ˣ × 2ʸ = 8 → 2¹ × 2ʸ = 8 → 2ʸ = 4 → y = 2.
   Rate law: **Rate = k [M][N]²**, overall order = 1 + 2 = **3**.
   Jaanch: 2¹ × 2² = 2 × 4 = 8 ✅
8. Tripling volume reduces concentration [X] to [X]/3.
   New rate = k ([X]/3)² = (1/9) k [X]² → rate becomes **1/9 of the original rate**.
9. Because the probability of more than three molecules colliding simultaneously at the exact same instant with proper orientation and sufficient energy is negligibly small.
10. Slow step (RDS) is Step 1: NO₂ + F₂ → NO₂F + F.
    Rate law: **Rate = k [NO₂][F₂]**.
    Overall order = 1 + 1 = **2**.
    Molecularity of RDS = **2 (bimolecular)**.
11. Compare Exp 1 & 2 ([B] constant): Rate₂/Rate₁ = 4.5/1.5 = 3; [A]₂/[A]₁ = 0.15/0.05 = 3 → 3ˣ = 3 → x = 1.
    Compare Exp 1 & 3 ([A] constant): Rate₃/Rate₁ = 6.0/1.5 = 4; [B]₃/[B]₁ = 0.10/0.05 = 2 → 2ʸ = 4 → y = 2.
    Rate law: **Rate = k [A][B]²**.
    From Exp 1: k = (1.5 × 10⁻⁴) / (0.05 × 0.05²) = (1.5 × 10⁻⁴) / (1.25 × 10⁻⁴) = **1.2 L² mol⁻² s⁻¹**.
    Jaanch: Exp 3 check: 1.2 × 0.05 × (0.10)² = 1.2 × 0.0005 = 6.0 × 10⁻⁴ M s⁻¹ ✅

---

Ab tum kisi bhi experimental data table ko dekh kar rate law, order aur rate constant k bilkul accurate nikal sakte ho.

**Agle topic mein:** Rate equation ko integrate karke hum [Integrated Rate Equations and Half-Life](chemical-kinetics-part3.md) padhenge — jisse hum exact time nikal payenge ki koi reaction 50% ya 99% kab complete hogi!
