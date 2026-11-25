# Chapter: Redox Reactions (Part 4)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [redox-reactions-part3.md](redox-reactions-part3.md) se aage chalti hai** (wahan humne Oxidation Number aur Half-Reaction methods se acidic/basic redox equations balance karna seekha tha). Chapter ki shuruaat: [redox-reactions.md](redox-reactions.md). Recall ke liye: Class 10 mein electrolysis cell basics [electrolysis-part2.md](../../../class10/chemistry/electrolysis/electrolysis-part2.md) aur metals ki reactivity series [metals-and-non-metals-part4.md](../../../class10/chemistry/metals-and-non-metals/metals-and-non-metals-part4.md) mein padh chuke ho.
> **Topics covered in this file:**
> 4. Redox Reactions aur Electrode Processes: Daniell Cell, Standard Electrode Potential (E°), Electrochemical Series aur Redox Titrations

---

# Topic 4: Redox Reactions aur Electrode Processes: Daniell Cell, E° aur Electrochemical Series

Agar tum Zinc ki patti ko seedhe CuSO₄ ke neele ghol mein daal do (**Direct Redox**), to Zn electrons seedhe Cu²⁺ ko de deta hai aur poori energy **heat** bankar bekaar ho jaati hai! Par agar hum Oxidation (Zn → Zn²⁺ + 2e⁻) aur Reduction (Cu²⁺ + 2e⁻ → Cu) ko **do alag beakers** mein rakh kar bahar se ek **taar (wire)** aur beech mein ek **Salt Bridge** se jod dein (**Indirect Redox**), to wahi electrons taar se daudkar **electric current (Galvanic Cell / Battery)** bana dete hain! Aaj hum Daniell Cell, **LOAN trick**, **Standard Electrode Potential (E°)**, **Electrochemical Series** aur **Redox Titrations** seekhenge.

---

## Hemlata aur teacher ma'am ke desk par Daniell cell se jalta chhota LED

Hemlata ne teacher ma'am ke desk par ek simple **Daniell Cell demo** dekha *(sirf teacher demo)*: baayein beaker mein **Zinc rod** (ZnSO₄ ghol mein) aur daayein beaker mein **Copper rod** (CuSO₄ ghol mein) thi. Dono rods ko upar ek chhote LED aur wire se joda gaya, aur dono gholon ke beech ek ulta U-shaped kaanch ka tube (**Salt Bridge**, KCl agar-agar gel se bhara) rakha tha!

Jaise hi Salt Bridge rakha gaya, **chhota LED jal utha**! Hemlata ne poochha, "Ma'am, wire to pehle se juda tha — phir Salt Bridge hatate hi LED turant band kyun ho gaya?" Ma'am muskurayin: "Kyunki Salt Bridge ke bina andar ka **circuit adhoora** reh jaata hai aur dono beakers mein positive/negative ions jama hokar **electrical neutrality** bigaad dete hain!" Chalo, Galvanic Cell aur Electrochemical Series ka poora vigyan samajhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Galvanic (Voltaic) cell** | Wo device jo spontaneous **redox reaction ki chemical energy ko electrical energy** mein badalta hai | Daniell cell (Zn–Cu, 1.10 V) |
| **LOAN Trick** | Galvanic cell mein hamesha yaad rakho: **L**eft, **O**xidation, **A**node, **N**egative! | Daniell cell mein Zn rod = Left, Oxidation, Anode (−ve) |
| **Salt Bridge** | Inert electrolyte (KCl, KNO₃) gel se bhara U-tube jo (1) **internal circuit poora** karta hai aur (2) dono half-cells ki **electrical neutrality** banata hai | K⁺ cathode ki taraf aur Cl⁻ anode ki taraf jaata hai |
| **Standard Electrode Potential (E°)** | 298 K, 1 M ion conc, 1 bar par kisi electrode ki **electron lene (REDUCTION) ki pravritti** (SHE = 0.00 V ke muqable naapa jaata hai!) | E°(Cu²⁺/Cu) = +0.34 V; E°(Zn²⁺/Zn) = −0.76 V |
| **Standard Hydrogen Electrode (SHE)** | Reference electrode (**Pt / H₂(1 bar) / H⁺(1 M)**) jiska E° **bilkul 0.00 V** mana gaya hai | Baaki sabhi E° isi ke saath jodkar naape jaate hain |

---

## Part A: Daniell Cell, Cell Notation aur E°_cell Formula

```
                     e⁻ flow (Anode ---> Cathode)
                  +------------( LED / V )------------+
                  :                                   :
                  :        +--- Salt Bridge ---+      :
                  v        :    (KCl / KNO₃)   :      v
             [ Zn (−) ]    :                   :    [ Cu (+) ]
             +--------+    v                   v    +--------+
             : ZnSO₄  :                             : CuSO₄  :
             : (1 M)  :                             : (1 M)  :
             +--------+                             +--------+
        ANODE (Left, Oxidation)                 CATHODE (Right, Reduction)
        Zn(s) -> Zn²⁺ + 2e⁻                     Cu²⁺ + 2e⁻ -> Cu(s)
```

> **Figure 4.1** – Daniell Cell ka poora naksha: Electrons bahari wire mein Anode (Zn, −ve) se Cathode (Cu, +ve) ki taraf behte hain (conventional current ulta: Cu se Zn!), aur Salt Bridge andar electrical neutrality banaye rakhta hai.

- **IUPAC Cell Notation (Salt bridge = ||, phase boundary = |):**
  > **Zn(s) | Zn²⁺(1 M) || Cu²⁺(1 M) | Cu(s)** *(Hamesha Anode LEFT, Cathode RIGHT!)*
- **Standard Cell EMF (Voltage) Formula:**
  > **E°_cell = E°_cathode (Right) − E°_anode (Left)** *(Dono **Standard REDUCTION Potentials**!)*
- **Spontaneity Rule:** Agar **E°_cell > 0 (Positive)** → reaction **Spontaneous** hai (cell chalega!); agar **E°_cell < 0** → non-spontaneous! *(Yaad rakho: E° ek **intensive property** hai — equation ko 2 ya 3 se guna karne par E° ko kabhi guna nahi karte!)*

---

## Part B: Electrochemical Series (Standard Reduction Potentials) aur Uske 4 Upyog

| Half-Reaction (Reduction) | **E° (Volts)** | Pravriti (Meaning) |
|---|---|---|
| **F₂(g) + 2e⁻ → 2F⁻** | **+2.87 V** | **Sabse STRONG Oxidising Agent (F₂)!** |
| **Cl₂(g) + 2e⁻ → 2Cl⁻** | +1.36 V | Strong oxidising agent |
| **Ag⁺ + e⁻ → Ag(s)** | +0.80 V | Noble metal (easily reduced) |
| **Cu²⁺ + 2e⁻ → Cu(s)** | +0.34 V | H⁺ se acid mein H₂ nahi nikaalta! |
| **2H⁺ + 2e⁻ → H₂(g)** *(SHE)* | **0.00 V** | **Reference (Zero Point!)** |
| **Ni²⁺ + 2e⁻ → Ni(s)** | −0.25 V | Acid se H₂ nikaalta hai |
| **Fe²⁺ + 2e⁻ → Fe(s)** | −0.44 V | Good reducing agent |
| **Zn²⁺ + 2e⁻ → Zn(s)** | −0.76 V | Stronger reducing agent |
| **Al³⁺ + 3e⁻ → Al(s)** | −1.66 V | Very strong reducing agent |
| **Mg²⁺ + 2e⁻ → Mg(s)** | −2.36 V | Very strong reducing agent |
| **Li⁺ + e⁻ → Li(s)** | **−3.05 V** | **Sabse STRONG Reducing Agent (Li)!** |

**Electrochemical Series ke 4 Golden Upyog:**
1. **Oxidising vs Reducing Strength:** Jitna **zyada positive E°** → utna strong **Oxidising agent** (F₂ best!); jitna **zyada negative E°** → utna strong **Reducing agent** (Li best!).
2. **Spontaneity / Storage Check:** **E°_cell = E°_cathode − E°_anode > 0** ho to reaction hoga (aur us metal ke bartan mein doosre ka salt **store NAHI** kar sakte!).
3. **Acid se H₂ Gas Nikaalna:** Sirf wahi metals jinka **E° < 0 (negative, SHE se neeche)** hai (Zn, Fe, Mg) dilute HCl/H₂SO₄ se H₂ nikaal sakte hain; **Cu (+0.34 V), Ag (+0.80 V)** nahi nikaalte!
4. **Redox Titrations:** Lab mein unknown reductant (jaise Fe²⁺ ya C₂O₄²⁻) ki concentration naapne ke liye strong oxidants use hote hain *(teacher demo/paper)*: **KMnO₄** khud **self-indicator** hai (pink colour gayab hota rehta hai, end-point par halka pink tik jaata hai!); **I₂ titrations** mein **starch** indicator (gehra neela rang!) use hota hai.

---

## Solved Examples

### Example 1. Daniell Cell ka E°_cell aur Spontaneity Check

**Sawaal:** Diya hai E°(Zn²⁺/Zn) = **−0.76 V** aur E°(Cu²⁺/Cu) = **+0.34 V**. Daniell cell mein Anode, Cathode, cell notation aur **E°_cell** nikalo.

**Hal:**
- Chhota (zyada negative) E° = **Zn (−0.76 V)** → **Anode (Oxidation)**; Bada E° = **Cu (+0.34 V)** → **Cathode (Reduction)**.
- Cell notation: **Zn(s) | Zn²⁺(1 M) || Cu²⁺(1 M) | Cu(s)**.
- **E°_cell = E°_cathode − E°_anode = (+0.34) − (−0.76) = +1.10 V** (> 0 → Spontaneous!).

**Jaanch:** +0.34 + 0.76 = +1.10 V > 0 ✅.

---

### Example 2. Kya CuSO₄ ko Zinc ya Silver ke Bartan mein Store Kar Sakte Hain?

**Sawaal:** E°(Zn²⁺/Zn) = −0.76 V, E°(Cu²⁺/Cu) = +0.34 V, E°(Ag⁺/Ag) = +0.80 V. Kya hum **CuSO₄** solution ko (a) **Zinc pot**, aur (b) **Silver pot** mein rakh sakte hain?

**Hal:**
- (a) **Zinc pot:** Agar reaction hua (Zn + Cu²⁺ → Zn²⁺ + Cu), to E°_cell = (+0.34) − (−0.76) = **+1.10 V > 0** (spontaneous! Zinc bartan gal jaayega!) → **NAHI store kar sakte!**
- (b) **Silver pot:** Agar reaction hua (2Ag + Cu²⁺ → 2Ag⁺ + Cu), to E°_cell = (+0.34) − (+0.80) = **−0.46 V < 0** (non-spontaneous! Koi reaction nahi!) → **HAAN, Silver pot mein aaraam se store kar sakte hain!**

**Jaanch:** E°_cell < 0 ka matlab koi reaction nahi → safe storage ✅.

---

### Example 3. Oxidising aur Reducing Strength ka Ranking

**Sawaal:** Diye gaye E° values se sabse strong **oxidising agent** aur sabse strong **reducing agent** chuno: F₂/F⁻ (+2.87 V), Ag⁺/Ag (+0.80 V), Cu²⁺/Cu (+0.34 V), Fe²⁺/Fe (−0.44 V), Mg²⁺/Mg (−2.36 V).

**Hal:**
- Sabse zyada positive E° (+2.87 V) → **F₂** sabse strong **oxidising agent** (khud sabse aasani se F⁻ mein reduce hota hai!).
- Sabse zyada negative E° (−2.36 V) → **Mg** sabse strong **reducing agent** (khud sabse aasani se Mg²⁺ mein oxidise hota hai!).

**Jaanch:** Left side of half-reaction = oxidising agent (F₂); Right side = reducing agent (Mg) ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: E°_cell = E°_anode − E°_cathode laga dena!**
   *Sahi baat:* Hamesha **E°_cell = E°_cathode − E°_anode** (Right − Left) lagao! (Tabhi Daniell cell +1.10 V aata hai, −1.10 V nahi!)

2. **Galti 2: Electrons balance karte waqt E° ko 2 ya 3 se guna kar dena!**
   Jaise 2Ag⁺ + 2e⁻ → 2Ag ke liye E° ko 2 × 0.80 = 1.60 V likh dena — **BILKUL GALAT!** E° ek **intensive property** hai — ye hamesha **+0.80 V** hi rahega!

3. **Galti 3: Galvanic cell mein Anode ko positive (+) bol dena.**
   Electrolytic cell mein anode +ve hota hai, par **Galvanic (battery) cell** mein **LOAN** yaad rakho: **L**eft, **O**xidation, **A**node, **N**egative (−)!

---

## Quick Recap

- **LOAN:** Galvanic cell mein Left par Oxidation hota hai, wahi Anode hai aur wahi Negative (−) hai.
- **Salt Bridge:** Circuit complete + Electrical neutrality.
- **E°_cell = E°_cathode − E°_anode** (intensive property — kabhi multiply mat karo!); **E°_cell > 0 → Spontaneous!**
- **Series:** Zyada +ve E° = strong **oxidising agent** (F₂); zyada −ve E° = strong **reducing agent** (Li); E° < 0 wale metals dilute acid se H₂ nikaalte hain.
- **KMnO₄** = self-indicator in acidic redox titrations.

---

## Practice Questions

1. Write the anode half-reaction, cathode half-reaction, overall balanced equation, IUPAC cell notation, and calculate **E°_cell** for a galvanic cell built from **Mg(s)/Mg²⁺(1 M)** (E° = **−2.36 V**) and **Cu(s)/Cu²⁺(1 M)** (E° = **+0.34 V**).
2. Calculate **E°_cell** for the galvanic cell **Fe(s) | Fe²⁺(1 M) || Ag⁺(1 M) | Ag(s)** given E°(Fe²⁺/Fe) = **−0.44 V** and E°(Ag⁺/Ag) = **+0.80 V**. Notice that you must balance the overall equation with 2 Ag⁺ — should you multiply +0.80 V by 2? Explain!
3. Can we safely store an aqueous **NiSO₄** solution in an **Aluminium (Al)** container? Justify mathematically using E°(Ni²⁺/Ni) = **−0.25 V** and E°(Al³⁺/Al) = **−1.66 V**.
4. State the **two essential functions of a Salt Bridge** in a galvanic cell. What happens to the electric current if the salt bridge is removed?
5. Using E° values (**Fe²⁺/Fe = −0.44 V**, **Cu²⁺/Cu = +0.34 V**, **2H⁺/H₂ = 0.00 V**), explain why **Iron** liberates H₂ gas from dilute HCl, whereas **Copper** does NOT.
6. Given the standard reduction potentials: **A²⁺/A = +0.80 V**, **B²⁺/B = −0.40 V**, **C²⁺/C = −1.66 V**, **D₂/D⁻ = +1.36 V**:
   (a) Identify the **strongest oxidising agent**.
   (b) Identify the **strongest reducing agent**.
   (c) Arrange metals **A, B, C** in **increasing order of reducing power**.
7. What is a **Standard Hydrogen Electrode (SHE)**? State its standard conditions (T, pressure, [H⁺]) and its assigned electrode potential.
8. In a **Zn–Ag galvanic cell** (E°(Zn²⁺/Zn) = −0.76 V, E°(Ag⁺/Ag) = +0.80 V):
   (a) Which electrode is negatively charged?
   (b) In which direction do **electrons** flow in the external wire?
   (c) Calculate **E°_cell**.
9. Why does **KMnO₄** require **no external indicator** during an acidic redox titration with FeSO₄ (or oxalic acid), whereas **I₂** titrations commonly use **starch**? *(Teacher demo / paper question.)*
10. Predict whether the reaction **2Fe³⁺(aq) + 2I⁻(aq) → 2Fe²⁺(aq) + I₂(s)** is spontaneous under standard conditions, given E°(Fe³⁺/Fe²⁺) = **+0.77 V** and E°(I₂/I⁻) = **+0.54 V**.
11. What is the difference between **direct redox** (Zn strip dipped directly in CuSO₄) and **indirect redox** (Daniell cell)?
12. State whether each statement is True or False, and correct the false ones:
    (a) In a galvanic cell, oxidation always occurs at the anode and reduction at the cathode.
    (b) Standard electrode potential E° is an extensive property and must be doubled when the half-reaction is doubled.
    (c) A reaction with E°_cell = −0.46 V is spontaneous in the forward direction.
    (d) Lithium metal (E° = −3.05 V) is the strongest reducing agent in aqueous solution.

### Answers

1. **Anode (Oxidation):** Mg(s) → Mg²⁺ + 2e⁻; **Cathode (Reduction):** Cu²⁺ + 2e⁻ → Cu(s).
   **Overall:** Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s).
   **Notation:** Mg(s) | Mg²⁺(1 M) || Cu²⁺(1 M) | Cu(s).
   **E°_cell** = (+0.34) − (−2.36) = **+2.70 V**!
   Jaanch: 0.34 + 2.36 = +2.70 V > 0 ✅.

2. **Overall:** Fe(s) + 2Ag⁺(aq) → Fe²⁺(aq) + 2Ag(s).
   **E°_cell** = (+0.80) − (−0.44) = **+1.24 V**!
   **NAHI!** +0.80 V ko 2 se guna nahi karte kyunki E° ek **intensive property** hai (voltage per Coulomb of charge, moles par nirbhar nahi!).
   Jaanch: 0.80 + 0.44 = +1.24 V ✅.

3. Agar reaction hua (2Al + 3Ni²⁺ → 2Al³⁺ + 3Ni):
   E°_cell = E°(Ni²⁺/Ni) − E°(Al³⁺/Al) = (−0.25) − (−1.66) = **+1.41 V > 0** (Spontaneous! Al bartan gal jaayega!).
   Isliye **NAHI**, NiSO₄ ko Al ke bartan mein store **nahi** kar sakte!
   Jaanch: −0.25 + 1.66 = +1.41 V > 0 ✅.

4. Do kaam: (1) Dono half-cells ko jodkar **internal circuit complete** karta hai; (2) Ions bhejkar dono beakers ki **electrical neutrality** banaye rakhta hai. Salt bridge hatate hi current **turant zero (band)** ho jaata hai!

5. **Fe + 2H⁺ → Fe²⁺ + H₂:** E°_cell = 0.00 − (−0.44) = **+0.44 V > 0** → spontaneous → **H₂ nikalti hai!**
   **Cu + 2H⁺ → Cu²⁺ + H₂:** E°_cell = 0.00 − (+0.34) = **−0.34 V < 0** → non-spontaneous → **koi H₂ nahi nikalti!**

6. (a) Strongest oxidising agent (highest +ve E°): **D₂** (+1.36 V).
   (b) Strongest reducing agent (most −ve E°): **C** (−1.66 V).
   (c) Increasing reducing power: **A (+0.80) < B (−0.40) < C (−1.66)**.

7. **SHE** ek reference electrode hai jismein Platinum foil ko **1 M H⁺** solution mein dubokar **1 bar pressure** aur **298 K** par shuddh **H₂ gas** guzaari jaati hai. Iska E° **0.00 V** mana jaata hai.

8. (a) **Zinc electrode** (−ve, Anode — LOAN!).
   (b) External wire mein electrons **Zinc (Anode) se Silver (Cathode)** ki taraf behte hain.
   (c) **E°_cell** = (+0.80) − (−0.76) = **+1.56 V**.
   Jaanch: 0.80 + 0.76 = +1.56 V ✅.

9. **KMnO₄** khud gehra baingani/gulabi (purple) hota hai aur Mn²⁺ colourless hota hai — end-point par pehli extra boond solution ko halka gulabi kar deti hai (**self-indicator!**). **I₂** starch ke saath gehra neela complex banata hai jo end-point par aasani se dikhta hai.

10. Cathode (reduction): Fe³⁺/Fe²⁺ (+0.77 V); Anode (oxidation): I₂/I⁻ (+0.54 V).
    E°_cell = (+0.77) − (+0.54) = **+0.23 V > 0** → **HAAN, spontaneous hai!**
    Jaanch: 0.77 − 0.54 = +0.23 V > 0 ✅.

11. **Direct redox** mein oxidant aur reductant ek hi bartan mein seedhe takraate hain aur energy **heat** mein badal jaati hai; **Indirect redox** (Galvanic cell) mein dono alag beakers mein hote hain aur electrons wire se guzarkar **electrical energy** dete hain!

12. (a) **True** ✅.
    (b) **False** ❌. E° ek **intensive** property hai — kabhi multiply nahi kiya jaata!
    (c) **False** ❌. Negative E°_cell ka matlab reaction **non-spontaneous** hai (ulta reaction spontaneous hoga!).
    (d) **True** ✅.

---

Ab tum Galvanic cells, Salt Bridge, E°_cell aur Electrochemical Series ke har sawaal ko chutkiyon mein hal kar sakte ho!

**Aage kya?** Ab waqt hai poore Redox Reactions chapter ke chaaron hisson — **Oxidation Numbers/Structural ON, Redox Types, Acidic/Basic Balancing aur Electrochemical Series/Redox Titrations** — ko ek saath mila kar asli multi-step challenges hal karne ka! Chalo, aakhiri topic (**Topic 5: Sab Kuch Mila Kar**) mein chalte hain!
