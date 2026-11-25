# Chapter: Equilibrium (Part 3)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [equilibrium-part2.md](equilibrium-part2.md) se aage chalti hai** (wahan humne Q_c, ICE table aur Le Chatelier's principle seekha tha). Chapter ki shuruaat: [equilibrium.md](equilibrium.md). Recall ke liye: Class 10 mein H⁺/OH⁻, dilution aur pH scale ka basic parichay [acids-bases-and-salts-part2.md](../../../class10/chemistry/acids-bases-and-salts/acids-bases-and-salts-part2.md) aur [acids-bases-and-salts-part4.md](../../../class10/chemistry/acids-bases-and-salts/acids-bases-and-salts-part4.md) mein padh chuke ho.
> **Topics covered in this file:**
> 3. Ionic Equilibrium: Strong/Weak Electrolytes, Acid–Base Theories (Arrhenius, Brønsted–Lowry, Lewis), K_w, pH aur Ostwald's Dilution Law

---

# Topic 3: Ionic Equilibrium: Strong/Weak Electrolytes, Acid–Base Theories, K_w, pH aur Ostwald's Dilution Law

Class 10 mein tumne dekha tha ki acids paani mein H⁺ dete hain, bases OH⁻ dete hain, aur pH 0–14 scale par naapa jaata hai. Class 11 mein hum is poori kahani ko **quantitative equilibrium** ke star par le jaate hain: **BF₃** mein ek bhi H⁺ nahi hai phir bhi wo acid kyun hai (**Lewis Theory**)? **10⁻⁸ M HCl** ka pH **8** kyun **NAHI** hota? Aur weak acids/bases ke liye **K_a, K_b, Ostwald's Dilution Law** aur **K_a × K_b = K_w** kaise kaam karte hain? Chalo sab kuch gehraai se seekhte hain!

---

## Navneet, kanchon ka khel aur relay race ka baton

Navneet apne doston ke saath school ground mein khel raha tha. Usne do alag-alag doston ka swabhav dekha:
- Ek dost ke paas 100 kanche (marbles) the aur maangte hi usne **saare 100 ke 100 kanche** baant diye (**Strong Electrolyte: 100% ionisation, α = 1!**).
- Doosre dost ke paas bhi 100 kanche the, par usne sirf **1 kancha** diya aur 99 jeb mein hi rakhe (**Weak Electrolyte: bahut kam ionisation, α << 1, equilibrium banta hai!**).

Usi shaam relay race ki practice mein jab ek runner doosre runner ko **baton** pakda raha tha, to Navneet ko chemistry yaad aa gayi: **"Baton dene wala = Brønsted Acid (H⁺ donor), baton lene wala = Brønsted Base (H⁺ acceptor)!"** Chalo, teeno acid–base theories, K_w, pH aur Ostwald's Dilution Law seekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Strong vs Weak Electrolyte** | **Strong:** paani mein ~100% ions mein toote (α = 1); **Weak:** sirf thoda sa toote (α << 1) aur ions-molecules ke beech **ionic equilibrium** banaye | Strong: HCl, NaOH, NaCl; Weak: CH₃COOH, NH₃, HF |
| **Degree of ionisation (α)** | Kul moles mein se jitna hissa ions mein toota: **α = (Ionised moles) ÷ (Total initial moles)** | 0.1 M CH₃COOH mein α ≈ 0.0134 (1.34%) |
| **Conjugate acid–base pair** | Do aisi species jo sirf **ek proton (H⁺)** ke antar se alag hon | HCl / Cl⁻; NH₄⁺ / NH₃; H₂O / OH⁻ |
| **Ionic product of water (K_w)** | Shuddh paani ke self-ionisation ka product: **K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴** (298 K par) | T badhne par K_w badhta hai! |
| **pH aur pOH** | **pH = −log₁₀[H₃O⁺]**, **pOH = −log₁₀[OH⁻]**; 298 K par **pH + pOH = 14.0** | [H⁺] = 10⁻³ M → pH = 3.0 |

---

## Part A: Acid aur Base ki Teeno Theories (Arrhenius → Brønsted–Lowry → Lewis)

| Theory | Acid ki Paribhasha | Base ki Paribhasha | Examples & Seema |
|---|---|---|---|
| **1. Arrhenius (1884)** | Paani mein **H⁺ (H₃O⁺)** de | Paani mein **OH⁻** de | HCl, HNO₃ (acids); NaOH, KOH (bases). *Seema: sirf paani (aqueous) mein chalta hai; NH₃ aur CO₂ ko nahi samjha sakta!* |
| **2. Brønsted–Lowry (1923)** | **Proton (H⁺) DONOR** | **Proton (H⁺) ACCEPTOR** | NH₃ (base) + H₂O (acid) ⇌ NH₄⁺ (conj. acid) + OH⁻ (conj. base). *Seema: bina H wale acids (BF₃, AlCl₃) ko nahi samjha sakta!* |
| **3. Lewis (1923)** | **Electron-pair ACCEPTOR** (electrophile / khaali orbital!) | **Electron-pair DONOR** (nucleophile / lone pair!) | **Lewis Acids:** BF₃, AlCl₃, FeCl₃, H⁺, Mg²⁺; **Lewis Bases:** :NH₃, H₂O, OH⁻, Cl⁻, CN⁻. *(Sabse vyapak theory!)* |

**Brønsted–Lowry ke Do Golden Rules:**
1. **Conjugate Acid** banao = **+ H⁺ jodo** (e.g. NH₃ → NH₄⁺, H₂O → H₃O⁺, HCO₃⁻ → H₂CO₃).
2. **Conjugate Base** banao = **− H⁺ hatao** (e.g. HCl → Cl⁻, H₂O → OH⁻, HCO₃⁻ → CO₃²⁻). *(Jo species H⁺ de bhi sake aur le bhi sake — jaise **H₂O, HCO₃⁻, HSO₄⁻, H₂PO₄⁻** — use **Amphoteric / Amphiprotic** kehte hain!)*
3. **Strong Acid ka Conjugate Base WEAK** hota hai (HCl strong → Cl⁻ behad weak base!), aur **Weak Acid ka Conjugate Base STRONG** hota hai (CH₃COOH weak → CH₃COO⁻ strong base!).

### Example 1. Conjugate Pairs aur Lewis Acids/Bases ki Pehchaan

**Sawaal:**
(a) **H₂O** aur **HSO₄⁻** dono ka conjugate acid aur conjugate base likho.
(b) Reaction **BF₃ + :NH₃ → F₃B←NH₃** mein kaun Lewis acid aur kaun Lewis base hai?

**Hal:**
- (a) **H₂O:** Conjugate acid (+H⁺) = **H₃O⁺**; Conjugate base (−H⁺) = **OH⁻**.
  - **HSO₄⁻:** Conjugate acid (+H⁺) = **H₂SO₄**; Conjugate base (−H⁺) = **SO₄²⁻**.
- (b) **BF₃** (incomplete octet, 6 e⁻ → lone pair accept karta hai) = **Lewis Acid**; **:NH₃** (N par 1 lone pair donate karta hai) = **Lewis Base**!

**Jaanch:** Har conjugate pair mein theek 1 H⁺ ka antar hai ✅.

---

## Part B: Ionic Product of Water (K_w), pH Scale aur 10⁻⁸ M HCl ka Jaal!

Paani khud bahut halka ionise hota hai: **2H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)** (endothermic!).
- **298 K (25 °C) par:** **K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴**, aur pure water mein [H₃O⁺] = [OH⁻] = **1.0 × 10⁻⁷ M** → **pH = 7.0** (Neutral).
- **Temperature badhane par (jaise 60 °C ya 90 °C):** Kyunki self-ionisation endothermic hai, Le Chatelier se **K_w badhta hai** (e.g. 10⁻¹³ → neutral pH = 6.5)! Par **pure water phir bhi NEUTRAL hi rehta hai** kyunki [H₃O⁺] = [OH⁻] barabar hain!
- **Golden Relation (298 K):** **pH + pOH = 14.0**.

### Example 2. Strong Acid/Base ka pH aur Mashhoor 10⁻⁸ M HCl Trap! *(HCl, H₂SO₄, NaOH: sirf paper calculation)*

**Sawaal:** 298 K par pH nikaalo: (a) **0.001 M HCl**, (b) **0.005 M H₂SO₄** (poora ionised maano), (c) **0.01 M NaOH**, aur (d) **10⁻⁸ M HCl**.

**Hal:**
- (a) [H⁺] = 10⁻³ M → **pH = −log(10⁻³) = 3.0**.
- (b) 1 H₂SO₄ → 2 H⁺ → [H⁺] = 2 × 0.005 = 0.010 = 10⁻² M → **pH = 2.0**.
- (c) [OH⁻] = 10⁻² M → pOH = 2.0 → **pH = 14.0 − 2.0 = 12.0**.
- (d) **10⁻⁸ M HCl (TRAP!):** Agar seedha −log(10⁻⁸) = 8 likhoge to acid **basic** ban jaayega — jo asambhav hai! Yahan HCl itna dilute hai ki **paani ka apna 10⁻⁷ M H⁺** bhi jodna padega:
  - Total [H⁺] ≈ 10⁻⁸ + 10⁻⁷ = **1.1 × 10⁻⁷ M**!
  - **pH = −log(1.1 × 10⁻⁷) = 7 − log(1.1) = 7 − 0.04 = 6.96** *(exact quadratic se **6.98** — 7 se thoda neeche, halka acidic!)*

**Jaanch:** 10⁻⁸ M HCl ka pH 7 se thoda kam (6.96–6.98) aaya, basic nahi hua ✅.

---

## Part C: Weak Acids/Bases — Ostwald's Dilution Law, Polyprotic Acids, K_a × K_b = K_w aur Acid Strength

Weak monoprotic acid **HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)** (initial conc = c, degree of ionisation = α):
- Equilibrium par: [HA] = c(1 − α), [H₃O⁺] = cα, [A⁻] = cα.
- **Ostwald's Dilution Law:** **K_a = cα² ÷ (1 − α)**.
- Jab weak acid ke liye **α < 0.05 (5% se kam)** ho, to (1 − α) ≈ 1 maan sakte hain:
  > **K_a ≈ c α²**  →  **α = √(K_a / c)**  aur  **[H₃O⁺] = cα = √(K_a × c)**!
  *(Dhyan do: paani milakar dilution karne par c ghat-ta hai → **α badhta hai** — yahi Ostwald's Dilution Law hai!)*
- Bilkul aise hi weak base BOH ke liye: **K_b ≈ cα²**, **[OH⁻] = √(K_b × c)**!
- **pK_a = −log K_a** *(Jitna **bada K_a** ya **chhota pK_a**, utna **MAZBOOT acid!**)*
- **Conjugate Pair ka Golden Relation:** **K_a × K_b = K_w = 1.0 × 10⁻¹⁴** aur **pK_a + pK_b = 14.0**!
- **Polyprotic Acids (jaise H₂SO₄, H₂CO₃, H₃PO₄):** Hamesha **K_a1 >> K_a2 >> K_a3**, kyunki negative ion (jaise HCO₃⁻) se doosra H⁺ nikaalna neutral acid (H₂CO₃) se kahin zyada mushkil hota hai!
- **Acid Strength ke Do Factors (H−A bond):**
  1. **Group mein neeche jaane par (Bond Strength mukhya hai!):** Size badhne se H−X bond kamzor hota jaata hai → **HF < HCl < HBr < HI** (HI sabse strong!).
  2. **Period mein baayein se daayein (Electronegativity/Polarity mukhya hai!):** **CH₄ < NH₃ < H₂O < HF** (HF sabse strong!).

### Example 3. Ostwald Dilution Law se Weak Acid ka α, [H⁺] aur pH

**Sawaal:** **0.10 M CH₃COOH** (K_a = **1.8 × 10⁻⁵**) ke liye α, [H₃O⁺] aur pH nikaalo. *(log 1.34 = 0.127.)*

**Hal:**
- α = √(K_a / c) = √(1.8 × 10⁻⁵ ÷ 0.10) = √(1.8 × 10⁻⁴) = **1.34 × 10⁻² (1.34%)** *(5% se kam → approximation bilkul valid!)*.
- [H₃O⁺] = cα = 0.10 × 1.34 × 10⁻² = **1.34 × 10⁻³ M**.
- pH = −log(1.34 × 10⁻³) = 3 − 0.127 = **2.87**!

**Jaanch:** (1.34 × 10⁻³)² ÷ 0.10 = 1.80 × 10⁻⁵ = K_a ✅.

---

### Example 4. Conjugate Base (CH₃COO⁻) ka K_b Nikaalna

**Sawaal:** Agar CH₃COOH ka **K_a = 1.8 × 10⁻⁵** hai, to uske conjugate base **CH₃COO⁻** ka **K_b** (298 K par) nikaalo.

**Hal:**
- K_a × K_b = K_w = 1.0 × 10⁻¹⁴
- **K_b = (1.0 × 10⁻¹⁴) ÷ (1.8 × 10⁻⁵) = 5.56 × 10⁻¹⁰**!

**Jaanch:** 1.8 × 10⁻⁵ × 5.56 × 10⁻¹⁰ = 1.0 × 10⁻¹⁴ = K_w ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: 10⁻⁸ M HCl ka pH seedha "8" likh dena.**
   *Sahi baat:* Acid ka solution kabhi basic (pH > 7) nahi ho sakta! Jab [H⁺]_acid ≤ 10⁻⁶ M ho, to paani ka 10⁻⁷ M H⁺ zaroor jodo → **pH = 6.98**!

2. **Galti 2: 60 °C par shuddh paani ka pH 6.5 dekh kar use "acidic" bol dena.**
   *Sahi baat:* Neutral hone ki asli paribhasha **pH = 7 nahi**, balki **[H₃O⁺] = [OH⁻]** hai! 60 °C par K_w ≈ 10⁻¹³ hone se [H₃O⁺] = [OH⁻] = 10⁻⁶.⁵ M → pH = 6.5 par paani **100% neutral** hai!

3. **Galti 3: Strong/Weak acid aur Concentrated/Dilute acid ko ek hi samajh lena.**
   0.0001 M HCl bahut **dilute** hai, par phir bhi **strong acid** hai (α = 100%); 5.0 M CH₃COOH bahut **concentrated** hai, par phir bhi **weak acid** hai (α << 1)!

---

## Quick Recap

- **3 Theories:** Arrhenius (H⁺/OH⁻ in water), Brønsted–Lowry (H⁺ donor/acceptor, conjugate pairs), Lewis (e⁻-pair acceptor/donor).
- **298 K:** K_w = [H₃O⁺][OH⁻] = 10⁻¹⁴; **pH + pOH = 14**; **K_a × K_b = K_w**; **pK_a + pK_b = 14**.
- **Ostwald Law:** α = √(K_a/c), [H⁺] = √(K_a·c) (jab α < 5%).
- **Acid strength:** Group mein **HF < HCl < HBr < HI** (bond strength); Period mein **CH₄ < NH₃ < H₂O < HF** (polarity).

---

## Practice Questions

1. Write the **conjugate acid** and **conjugate base** for each of the following amphiprotic species: (a) **H₂O**, (b) **HCO₃⁻**, (c) **NH₃**, (d) **H₂PO₄⁻**.
2. Classify each of the following as a **Lewis acid** or a **Lewis base**, giving a one-line reason: **BF₃, OH⁻, AlCl₃, CN⁻, H⁺, H₂O**.
3. Calculate the **pH** at 298 K of: (a) **0.010 M HNO₃**, (b) **0.0050 M Ca(OH)₂** (completely ionised), and (c) **1.0 × 10⁻⁷ M HCl**. *(Strong acids/bases: paper problem only. Hint for (c): include H⁺ from water, log 2 = 0.3010; exact [H⁺] = 1.62 × 10⁻⁷ M, log 1.62 = 0.21!)*
4. A **0.040 M** solution of a weak monoprotic acid HA has **K_a = 1.0 × 10⁻⁶**. Calculate (a) its degree of ionisation **α**, (b) **[H₃O⁺]**, and (c) its **pH**. *(log 2 = 0.3010.)*
5. Calculate the **pOH** and **pH** of a **0.10 M NH₃(aq)** solution at 298 K, given **K_b(NH₃) = 1.8 × 10⁻⁵**. *(log 1.34 = 0.127.)*
6. The ionisation constant of **HF** at 298 K is **K_a = 6.8 × 10⁻⁴**. Calculate **K_b** of its conjugate base **F⁻**. Which one is stronger: F⁻ or Cl⁻ as a base?
7. At 90 °C, pure water has **K_w = 1.0 × 10⁻¹²**. Calculate **[H₃O⁺]**, **[OH⁻]** and **pH** of pure water at 90 °C. Is pure water at 90 °C acidic, basic, or neutral?
8. Why is **K_a1 >> K_a2** for a diprotic acid like **H₂CO₃** or **H₂SO₃**?
9. Arrange the following in **increasing order of acidic strength** and state the controlling factor in each set:
   (a) **HF, HCl, HBr, HI**
   (b) **CH₄, NH₃, H₂O, HF**
10. What happens to the **degree of ionisation (α)** and the **[H₃O⁺] concentration** of a weak acid HA when its aqueous solution is diluted with water? Explain using Ostwald's Dilution Law.
11. If two weak acids HA₁ (**pK_a = 3.2**) and HA₂ (**pK_a = 5.4**) have the same concentration, which one is the **stronger acid**, and which one has the **stronger conjugate base**?
12. State whether each statement is True or False, and correct the false ones:
    (a) Every Brønsted–Lowry base is also a Lewis base.
    (b) The pH of a 10⁻⁸ M HCl solution at 298 K is 8.0.
    (c) For a conjugate acid–base pair at 298 K, pK_a + pK_b = 14.0.
    (d) A weak acid has a larger K_a value than a strong acid.

### Answers

1. (a) **H₂O:** Conj. acid = **H₃O⁺**, Conj. base = **OH⁻**.
   (b) **HCO₃⁻:** Conj. acid = **H₂CO₃**, Conj. base = **CO₃²⁻**.
   (c) **NH₃:** Conj. acid = **NH₄⁺**, Conj. base = **NH₂⁻**.
   (d) **H₂PO₄⁻:** Conj. acid = **H₃PO₄**, Conj. base = **HPO₄²⁻**.

2. **Lewis acids (e⁻-pair acceptors):** **BF₃, AlCl₃** (incomplete octet / empty orbital), **H⁺** (empty 1s orbital).
   **Lewis bases (e⁻-pair donors):** **OH⁻, CN⁻, H₂O** (lone pair maujood!).

3. (a) **0.010 M HNO₃:** [H⁺] = 10⁻² M → **pH = 2.0**.
   (b) **0.0050 M Ca(OH)₂:** 1 Ca(OH)₂ → 2 OH⁻ → [OH⁻] = 0.010 = 10⁻² M → pOH = 2.0 → **pH = 12.0**.
   (c) **10⁻⁷ M HCl:** Paani se aane wale H⁺ ko x maano: (10⁻⁷ + x)(x) = 10⁻¹⁴ → x = 0.62 × 10⁻⁷ M → Total [H⁺] = 1.62 × 10⁻⁷ M → **pH = 7 − 0.21 = 6.79**!
   Jaanch: 10⁻⁷ M HCl ka pH < 7 (acidic!) ✅.

4. (a) α = √(K_a / c) = √(1.0 × 10⁻⁶ ÷ 0.040) = √(2.5 × 10⁻⁵) = **5.0 × 10⁻³ (0.50%)** (< 5%, valid!).
   (b) [H₃O⁺] = cα = 0.040 × 5.0 × 10⁻³ = **2.0 × 10⁻⁴ M**.
   (c) **pH = −log(2.0 × 10⁻⁴) = 4 − 0.301 = 3.70**.
   Jaanch: (2.0 × 10⁻⁴)² ÷ 0.040 = 1.0 × 10⁻⁶ = K_a ✅.

5. [OH⁻] = √(K_b × c) = √(1.8 × 10⁻⁵ × 0.10) = **1.34 × 10⁻³ M**.
   pOH = 3 − 0.127 = **2.87** → **pH = 14.00 − 2.87 = 11.13** (basic!).
   Jaanch: 2.87 + 11.13 = 14.00 ✅.

6. K_b(F⁻) = K_w ÷ K_a(HF) = (1.0 × 10⁻¹⁴) ÷ (6.8 × 10⁻⁴) = **1.47 × 10⁻¹¹**.
   Kyunki HF weak acid hai aur HCl strong acid hai, isliye **F⁻, Cl⁻ se kahin zyada mazboot base** hai!
   Jaanch: 6.8 × 10⁻⁴ × 1.47 × 10⁻¹¹ = 1.0 × 10⁻¹⁴ ✅.

7. [H₃O⁺] = [OH⁻] = √K_w = √(10⁻¹²) = **1.0 × 10⁻⁶ M** → **pH = 6.0**.
   Kyunki **[H₃O⁺] = [OH⁻]**, 90 °C par pure water **bilkul NEUTRAL** hai (acidic nahi!).

8. Pehla H⁺ neutral molecule (H₂CO₃) se nikalta hai, par doosra H⁺ negatively charged ion (**HCO₃⁻**) se nikaalna padta hai — negative ion positive H⁺ ko zyada zor se pakde rakhta hai, isliye K_a1 >> K_a2!

9. (a) **HF < HCl < HBr < HI** (controlling factor: down the group **H−X bond strength ghat-ti hai**).
   (b) **CH₄ < NH₃ < H₂O < HF** (controlling factor: across the period **electronegativity / bond polarity badhti hai**).

10. Ostwald's Dilution Law (α = √(K_a / c)) ke mutabik dilution karne par c ghat-ta hai, isliye **α BADHTA hai** (zyada % molecules ionise hote hain); par overall **[H₃O⁺] = √(K_a · c) GHAT-TA hai** (isliye pH thoda badhta hai)!

11. Chhota pK_a = bada K_a = strong acid → **HA₁ (pK_a 3.2)** zyada strong acid hai. Weak acid ka conjugate base strong hota hai → **A₂⁻** zyada strong conjugate base hai!

12. (a) **True** ✅. H⁺ accept karne ke liye lone pair donate karna hi padta hai.
    (b) **False** ❌. Paani ka 10⁻⁷ M H⁺ jodkar pH **6.98** hota hai (acid kabhi basic nahi hota!).
    (c) **True** ✅.
    (d) **False** ❌. Strong acid ka K_a weak acid se **bahut bada** hota hai.

---

Ab tum Strong/Weak electrolytes, teeno Acid–Base theories, K_w, pH aur Ostwald's Dilution Law ke har pehlu ko pakad chuke ho!

**Aage kya?** Agar hum kisi weak acid (CH₃COOH) mein uska hi salt (**CH₃COONa**) daal dein, to kya hoga? **Washing soda (Na₂CO₃)** ka paani basic aur **NH₄Cl** ka paani acidic kyun hota hai? Aur hamare khoon ka pH **7.4** par hamesha kyun tika rehta hai? Ye sab hum agle topic (**Topic 4: Common Ion Effect, Salt Hydrolysis aur Buffer Solutions**) mein seekhenge!
