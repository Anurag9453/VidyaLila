# Chapter: Equilibrium (Part 4)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [equilibrium-part3.md](equilibrium-part3.md) se aage chalti hai** (wahan humne strong/weak electrolytes, Arrhenius/Brønsted–Lowry/Lewis theories, K_w, pH aur Ostwald's Dilution Law seekha tha). Chapter ki shuruaat: [equilibrium.md](equilibrium.md). Recall ke liye: Class 10 mein salts ke parivaar aur types tum [acids-bases-and-salts-part5.md](../../../class10/chemistry/acids-bases-and-salts/acids-bases-and-salts-part5.md) mein padh chuke ho.
> **Topics covered in this file:**
> 4. Common Ion Effect, Hydrolysis of Salts (Sabhi 4 Prakar) aur Buffer Solutions (Henderson–Hasselbalch Equation)

---

# Topic 4: Common Ion Effect, Hydrolysis of Salts aur Buffer Solutions

Class 10 mein humne dekha tha ki har salt ka paani neutral nahi hota — Na₂CO₃ basic hota hai aur NH₄Cl acidic! Par **exact pH kitna hoga**? Aur hamare sharir ke khoon mein nimbu ka ras peene ya kasrat (lactic acid) ke baad bhi **blood pH 7.4** par kaise chipka rehta hai? In sab ke peeche teen aapas mein jude concepts kaam karte hain: **Common Ion Effect**, **Salt Hydrolysis** aur **Buffer Solutions**!

---

## Bhumika, bheed wala bus stop aur gaadi ka shock-absorber

Bhumika subah school bus ka intezaar kar rahi thi. Bus stop par pehle se bahut bheed thi — jaise hi ek doosri bhari hui bus aakar ruki, bheed dekhkar aur logon ka chadhna ruk gaya (**Common Ion Effect**: pehle se maujood common ion weak electrolyte ke tootne ko rok deta hai!).

Raaste mein sadak par gaddhe aur speed-breaker aaye, par gaadi ke **spring shock-absorber** ne jhatke sokh liye aur andar baithi Bhumika ko bilkul hilaav mehsoos nahi hua! Teacher ma'am ne muskurate hue kaha, "Bhumika, chemistry mein **Buffer Solution** bilkul isi shock-absorber ki tarah kaam karta hai — thoda sa acid ya base daalne par bhi wo apne **pH ko hilne nahi deta!**" Chalo, Common Ion Effect, chaaron prakar ke Salt Hydrolysis aur Henderson–Hasselbalch Equations seekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Common Ion Effect** | Kisi weak electrolyte ke solution mein ek aisa strong electrolyte milana jismein **ek ion common** ho → Le Chatelier se weak electrolyte ka ionisation **bahut kam (suppress)** ho jaata hai! | CH₃COOH mein CH₃COONa milane par [H⁺] ghat jaata hai |
| **Hydrolysis of a salt** | Salt ke cation ya anion (jo weak acid/base se aaya ho) ka **paani se react karke** H₃O⁺ ya OH⁻ banana (pH 7 se hat jaana!) | CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ (basic!) |
| **Buffer solution** | Aisa ghol jo thoda sa strong acid, strong base ya paani (dilution) milane par bhi apne **pH mein badlaav ka virodh** kare | Acidic buffer: CH₃COOH + CH₃COONa; Blood: H₂CO₃ + HCO₃⁻ |
| **Henderson–Hasselbalch Equation** | Acidic ya basic buffer ka exact pH/pOH nikaalne ka seedha formula | pH = pK_a + log([Salt] / [Acid]) |

---

## Part A: Common Ion Effect (Le Chatelier on Weak Electrolytes)

Weak acetic acid paani mein halka tootta hai:
> **CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq)**
Ab agar tum ismein **strong electrolyte CH₃COONa** daal do (jo 100% tootkar **CH₃COO⁻** deta hai — yahi **common ion** hai!):
- Right side par **[CH₃COO⁻] achanak bahut badh jaata hai!**
- Le Chatelier's Principle ke mutabik equilibrium **REVERSE (left)** ki taraf shift ho jaata hai → CH₃COOH ka dissociation aur **dab (suppress)** jaata hai aur **[H⁺] tezi se ghat jaata hai (pH badh jaata hai!)**.

### Example 1. Common Ion Effect ka Asar — 0.10 M CH₃COOH + 0.10 M CH₃COONa

**Sawaal:** Topic 3 mein humne dekha tha ki akele 0.10 M CH₃COOH (K_a = 1.8 × 10⁻⁵) mein [H⁺] = 1.34 × 10⁻³ M (pH = 2.87) hota hai. Agar isi mein **0.10 M CH₃COONa** bhi ghula ho, to naya **[H⁺]** aur **pH** nikalo! *(log 1.8 = 0.255.)*

**Hal:**
- Common ion CH₃COO⁻ lagbhag poora CH₃COONa se aata hai → **[CH₃COO⁻] ≈ 0.10 M**; aur suppression ke kaaran **[CH₃COOH] ≈ 0.10 M**.
- K_a = ([H⁺][CH₃COO⁻]) ÷ [CH₃COOH] → 1.8 × 10⁻⁵ = ([H⁺] × 0.10) ÷ 0.10
- **[H⁺] = 1.8 × 10⁻⁵ M** *(dekh rahe ho? [H⁺] lagbhag **74 guna ghat** gaya!)*
- **pH = −log(1.8 × 10⁻⁵) = 5 − 0.255 = 4.745 ≈ 4.74**!

**Jaanch:** [H⁺] 1.34 × 10⁻³ se ghatkar 1.8 × 10⁻⁵ M hua (pH 2.87 → 4.74) ✅.

---

## Part B: Hydrolysis of Salts — Sabhi 4 Prakar (Master Table!)

Yaad rakhne ka golden mantra: **Jo ion STRONG acid/base se aaya hai (Na⁺, K⁺, Cl⁻, NO₃⁻), wo paani se react (hydrolyse) NAHI karta!** Sirf **WEAK acid ya WEAK base** se aaya ion hi hydrolyse hokar pH badalta hai!

| Salt ka Prakar | Kaun Hydrolyse Hoga? | Solution ki Prakriti | Hydrolysis Constant (K_h) | **Exact pH Formula (298 K par)** | Examples |
|---|---|---|---|---|---|
| **1. Strong Acid + Strong Base (SA + SB)** | Koi nahi! | **Neutral (pH = 7)** | — | **pH = 7.0** | NaCl, KNO₃, Na₂SO₄ |
| **2. Weak Acid + Strong Base (WA + SB)** | Anion (A⁻) | **Basic (pH > 7)** | **K_h = K_w / K_a** | **pH = 7 + ½pK_a + ½log c** | CH₃COONa, Na₂CO₃, NaCN |
| **3. Strong Acid + Weak Base (SA + WB)** | Cation (B⁺) | **Acidic (pH < 7)** | **K_h = K_w / K_b** | **pH = 7 − ½pK_b − ½log c** | NH₄Cl, NH₄NO₃, FeCl₃ |
| **4. Weak Acid + Weak Base (WA + WB)** | Dono (B⁺ aur A⁻) | **pK_a aur pK_b par nirbhar!** | **K_h = K_w / (K_a · K_b)** | **pH = 7 + ½pK_a − ½pK_b** *(c se AAZAAD!)* | CH₃COONH₄, NH₄CN |

### Example 2. CH₃COONa (Basic) aur NH₄Cl (Acidic) ke 0.10 M Solutions ka pH

**Sawaal:** 298 K par pH nikaalo:
(a) **0.10 M CH₃COONa** (pK_a of CH₃COOH = **4.76**)
(b) **0.10 M NH₄Cl** (pK_b of NH₃ = **4.74**)

**Hal:**
- (a) **CH₃COONa (WA + SB → Basic):** c = 0.10 = 10⁻¹ → log c = **−1**.
  - pH = 7 + ½(4.76) + ½(−1) = 7 + 2.38 − 0.50 = **8.88** (> 7, basic!).
- (b) **NH₄Cl (SA + WB → Acidic):** c = 0.10 → log c = **−1**.
  - pH = 7 − ½(4.74) − ½(−1) = 7 − 2.37 + 0.50 = **5.13** (< 7, acidic!).

**Jaanch:** WA + SB ka pH > 7 (8.88) aur SA + WB ka pH < 7 (5.13) ✅.

---

## Part C: Buffer Solutions aur Henderson–Hasselbalch Equations

### Buffer Kaise Kaam Karta Hai? (Acidic Buffer: CH₃COOH + CH₃COONa)
- Agar bahar se thoda **Strong Acid (H⁺)** daala → Buffer mein maujood **CH₃COO⁻** use pakad kar weak CH₃COOH bana deta hai (**H⁺ + CH₃COO⁻ → CH₃COOH**) → pH nahi girta!
- Agar bahar se thoda **Strong Base (OH⁻)** daala → Buffer mein maujood **CH₃COOH** use neutralise kar deta hai (**OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O**) → pH nahi badhta!
- **Jeevan ka Rakshak (Blood Buffer):** Hamare khoon mein **H₂CO₃ / HCO₃⁻** ka buffer pH ko **7.35–7.45 (~7.4)** par pakad kar rakhta hai!

### Henderson–Hasselbalch Equations (Sabse Zaroori Formulas!)
1. **Acidic Buffer (Weak Acid + uska Salt with Strong Base):**
   > **pH = pK_a + log₁₀ ( [Salt] ÷ [Acid] )**
2. **Basic Buffer (Weak Base + uska Salt with Strong Acid):**
   > **pOH = pK_b + log₁₀ ( [Salt] ÷ [Base] )**   aur   **pH = 14 − pOH**
*(Khaas baat: Jab **[Salt] = [Acid]**, to log(1) = 0 → **pH = pK_a** — yahi buffer ki **maximum buffer capacity** ka bindu hai!)*

### Example 3. Acidic Buffer (CH₃COOH + CH₃COONa) ka pH

**Sawaal:** Ek buffer solution mein **0.20 M CH₃COOH** aur **0.40 M CH₃COONa** hai (pK_a = **4.76**). Uska pH nikaalo. *(log 2 = 0.3010.)*

**Hal:**
- pH = pK_a + log([Salt] / [Acid]) = 4.76 + log(0.40 / 0.20) = 4.76 + log(2) = 4.76 + 0.301 = **5.06**!

**Jaanch:** Salt > Acid hai, isliye pH (5.06) > pK_a (4.76) ✅.

---

### Example 4. Basic Buffer (NH₃ + NH₄Cl) ka pOH aur pH

**Sawaal:** Ek basic buffer mein **0.10 M NH₃** aur **0.20 M NH₄Cl** hai (pK_b = **4.74**). Uska pOH aur pH nikaalo. *(log 2 = 0.3010.)*

**Hal:**
- pOH = pK_b + log([Salt] / [Base]) = 4.74 + log(0.20 / 0.10) = 4.74 + 0.301 = **5.04**.
- **pH = 14.00 − 5.04 = 8.96**!

**Jaanch:** 5.04 + 8.96 = 14.00, aur pH > 7 (basic buffer!) ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: Har salt (Na₂CO₃, NH₄Cl, NaCN) ko neutral (pH = 7) maan lena.**
   *Sahi baat:* Sirf **SA + SB** salts (NaCl, KNO₃) hi neutral hote hain! WA + SB (Na₂CO₃, CH₃COONa) **basic** aur SA + WB (NH₄Cl, FeCl₃) **acidic** hote hain!

2. **Galti 2: Henderson–Hasselbalch mein [Salt] aur [Acid] ko ulta rakh dena.**
   Hamesha yaad rakho: **+ sign** ke saath **[Salt] UPAR** aur **[Acid] NEECHE** hota hai: **pH = pK_a + log([Salt]/[Acid])**!

3. **Galti 3: Basic buffer mein pOH ko hi final pH samajh kar chhod dena.**
   Example 4 mein pOH = 5.04 aaya — agar wahi answer likh doge to basic buffer acidic dikhne lagega! Hamesha **pH = 14 − pOH** (= 8.96) nikalo!

---

## Quick Recap

- **Common Ion Effect:** Common ion milane par weak electrolyte ka dissociation dab (suppress) jaata hai.
- **Salt Hydrolysis (298 K):** SA+SB = 7; WA+SB = 7 + ½pK_a + ½log c; SA+WB = 7 − ½pK_b − ½log c; WA+WB = 7 + ½pK_a − ½pK_b (c se aazaad!).
- **Buffers:** Acidic → **pH = pK_a + log([Salt]/[Acid])**; Basic → **pOH = pK_b + log([Salt]/[Base])**, **pH = 14 − pOH**.
- **Max buffer capacity** jab [Salt] = [Acid] (pH = pK_a).

---

## Practice Questions

1. Predict whether an aqueous solution of each of the following salts is **acidic, basic, or neutral**, giving a one-line reason based on the parent acid and base: (a) **NaCl**, (b) **Na₂CO₃**, (c) **NH₄NO₃**, (d) **KCN**, (e) **FeCl₃**, (f) **K₂SO₄**.
2. Calculate the **pH** of a **0.010 M NaCN** solution at 298 K, given **pK_a(HCN) = 9.30**. *(Toxic cyanide salt: paper problem only.)*
3. Calculate the **pH** of an aqueous solution of **ammonium acetate (CH₃COONH₄)** at 298 K, given **pK_a(CH₃COOH) = 4.76** and **pK_b(NH₃) = 4.74**. Does this pH depend on the concentration of CH₃COONH₄?
4. What ratio **[Salt] / [Acid]** is needed to prepare an acetate buffer of **pH = 5.76** using acetic acid (**pK_a = 4.76**) and sodium acetate?
5. Calculate the **pH** of a basic buffer containing **0.30 M NH₃** and **0.15 M NH₄Cl** at 298 K (**pK_b = 4.74**, log 2 = 0.3010).
6. Explain using **Le Chatelier's Principle** what happens to the **[OH⁻] concentration** and **pH** of an aqueous **NH₃** solution when solid **NH₄Cl** is dissolved in it.
7. Explain step by step (with two short ionic equations) how an acidic buffer of **CH₃COOH + CH₃COONa** resists a change in pH when (a) a few drops of HCl, and (b) a few drops of NaOH are added.
8. Name the main **buffer pair present in human blood**, state its normal pH, and explain why maintaining this pH is essential for life.
9. Calculate the **hydrolysis constant (K_h)** of **sodium benzoate (C₆H₅COONa)** at 298 K, given **K_a(C₆H₅COOH) = 6.4 × 10⁻⁵**.
10. Between **0.10 M NH₄Cl** and **0.10 M CH₃COONa**, which solution turns blue litmus red and which turns red litmus blue? Justify with ionic hydrolysis equations.
11. At what concentration ratio **[Salt] / [Acid]** does an acidic buffer show its **maximum buffer capacity**, and what is its pH at that point?
12. State whether each statement is True or False, and correct the false ones:
    (a) A mixture of 0.1 M HCl and 0.1 M NaCl forms a good acidic buffer solution.
    (b) The pH of a salt of a weak acid and a weak base is independent of its concentration (in the standard approximation).
    (c) Adding CH₃COONa to an aqueous solution of CH₃COOH increases the pH of the solution.
    (d) In NaCl(aq), neither Na⁺ nor Cl⁻ undergoes hydrolysis.

### Answers

1. (a) **NaCl (SA+SB):** Neutral.
   (b) **Na₂CO₃ (WA+SB):** Basic (CO₃²⁻ hydrolyses).
   (c) **NH₄NO₃ (SA+WB):** Acidic (NH₄⁺ hydrolyses).
   (d) **KCN (WA+SB):** Basic (CN⁻ hydrolyses).
   (e) **FeCl₃ (SA+WB):** Acidic (Fe³⁺ hydrolyses).
   (f) **K₂SO₄ (SA+SB):** Neutral.

2. NaCN (WA + SB): c = 0.010 = 10⁻² → log c = −2.
   pH = 7 + ½(9.30) + ½(−2) = 7 + 4.65 − 1.00 = **10.65** (strongly basic!).
   Jaanch: 7 + 4.65 − 1 = 10.65 > 7 ✅.

3. CH₃COONH₄ (WA + WB):
   pH = 7 + ½pK_a − ½pK_b = 7 + ½(4.76) − ½(4.74) = 7 + 2.38 − 2.37 = **7.01** (lagbhag neutral!).
   Nahi, standard formula mein iska pH **concentration c par nirbhar NAHI karta**!
   Jaanch: 2.38 − 2.37 = +0.01 → pH = 7.01 ✅.

4. pH = pK_a + log([Salt]/[Acid]) → 5.76 = 4.76 + log([Salt]/[Acid])
   → log([Salt]/[Acid]) = **1.00** → **[Salt] / [Acid] = 10 : 1**!
   Jaanch: 4.76 + log(10) = 4.76 + 1 = 5.76 ✅.

5. pOH = 4.74 + log(0.15 / 0.30) = 4.74 + log(0.5) = 4.74 − 0.301 = **4.44**.
   **pH = 14.00 − 4.44 = 9.56**!
   Jaanch: Base > Salt hai, isliye pH (9.56) zyada basic hai (14 − 4.74 = 9.26 se upar!) ✅.

6. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. NH₄Cl daalne par common ion **NH₄⁺** badh jaata hai → Le Chatelier se equilibrium **reverse** shift hota hai → **[OH⁻] ghat-ta hai** aur **pH ghat-ta hai**!

7. (a) HCl se aaya **H⁺** → **H⁺ + CH₃COO⁻ → CH₃COOH** (extra H⁺ sokh liya gaya!).
   (b) NaOH se aaya **OH⁻** → **OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O** (extra OH⁻ sokh liya gaya!).

8. Blood buffer: **Carbonic acid / Bicarbonate ion (H₂CO₃ / HCO₃⁻)**; normal blood pH = **7.4** (7.35–7.45). Iske bina sharir ke enzymes kaam karna band kar dete hain!

9. K_h = K_w ÷ K_a = (1.0 × 10⁻¹⁴) ÷ (6.4 × 10⁻⁵) = **1.56 × 10⁻¹⁰**.
   Jaanch: 6.4 × 10⁻⁵ × 1.5625 × 10⁻¹⁰ = 1.0 × 10⁻¹⁴ ✅.

10. **0.10 M NH₄Cl** (NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ → acidic) **blue litmus ko red** karega!
    **0.10 M CH₃COONa** (CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ → basic) **red litmus ko blue** karega!

11. Jab **[Salt] / [Acid] = 1 : 1** ho, tab maximum buffer capacity milti hai, aur us waqt **pH = pK_a** hota hai!

12. (a) **False** ❌. Buffer banane ke liye **weak** acid aur uska conjugate salt chahiye (HCl strong acid hai, buffer nahi banata!).
    (b) **True** ✅. pH = 7 + ½pK_a − ½pK_b mein c nahi aata.
    (c) **True** ✅. Common ion CH₃COO⁻ [H⁺] ko kam karta hai → pH badhta hai.
    (d) **True** ✅. Dono strong acid/base se aaye hain.

---

Ab tum Common Ion Effect, chaaron prakar ke Salt Hydrolysis aur Buffer Solutions ke pH calculations bina atke solve kar sakte ho!

**Aage kya?** Jab do saaf-suthre ghol (jaise BaCl₂ aur Na₂SO₄) milane par achanak **safed precipitate** neeche baith jaata hai, to uske peeche kaunsa equilibrium kaam karta hai? Agle topic (**Topic 5**) mein hum **Solubility Product (K_sp), Common Ion Effect on Solubility aur Precipitation Rules** seekhenge!
