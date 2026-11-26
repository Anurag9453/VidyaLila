# Chapter: Current Electricity (Part 2)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Electric Current, Drift Velocity and Ohm's Law](current-electricity.md)

---

## Old Radio Kit ki Rangeen Pattiyan

Sunday dopahar ko **Arvind** apne Papa ke saath ek puraani kharaab transistor radio kit (battery nikali hui, bilkul safe!) kholkar dekh raha tha. Circuit board par chawal ke daane jitne chhote-chhote cylinders lage the, jin par lal, peeli, neeli aur sunehri (gold) rang ki pattiyan bani thin.

Arvind ne poocha: "Papa, in chhote resistors par number likhne ki jagah yeh rangeen rings kyun banayi gayi hain?"

Papa hase: "Kyunki resistor itna chhota hota hai ki us par 47,000 Ω likhna mushkil hota hai! Isliye duniya bhar mein ek standard **Colour Code** use hota hai — rang dekho aur resistance bata do! Saath hi yeh bhi samajhna zaroori hai ki garmi badhne par metals aur semiconductors ki **Resistivity** alag-alag kyun badalti hai!"

---

## Naye Shabd (New Words)

- **Resistivity (ρ):** Kisi material ka apna gun jo current ko rokne ki shamta batata hai: R = ρ L / A. SI unit **Ω m**. Yeh wire ki lambai ya motai par depend nahi karta — sirf **material aur temperature** par depend karta hai!
- **Temperature Coefficient of Resistivity (α):** Har 1 °C (ya 1 K) temperature badhne par resistivity mein hone wala fractional change: α = (ρ − ρ₀) / [ ρ₀ (T − T₀) ]. SI unit **°C⁻¹** (ya K⁻¹).
- **Alloy (Manganin / Constantan / Nichrome):** Do ya zyada metals ka mishran jinki resistivity zyada hoti hai par **α bahut chhota** hota hai (temperature badalne par resistance lagbhag constant rehta hai!).
- **Tolerance:** Carbon resistor ki actual resistance value uski likhi hui value se kitne percent upar-neeche (±5%, ±10%, ±20%) ho sakti hai.

---

## 1. Resistivity aur Temperature Dependence

Pichhle topic mein humne dekha tha:

**ρ = m / (n e² τ)**

Garmi (Temperature T) badhane par do cheezein hoti hain:
1. Atoms zyada tezi se vibrate karte hain ⟹ electrons zyada jaldi takrate hain ⟹ relaxation time **τ ghatta hai**.
2. Kuch materials mein free charge carriers **n badh sakte hain**.

Ab dekho teen tarah ke materials mein kaun jeet'ta hai:

| Material Type | T badhane par n aur τ | ρ par asar | Sign of α | Examples |
|---|---|---|---|---|
| **Pure Metals** | n lagbhag constant; τ tezi se ghatta hai | **ρ badhti hai** (nearly linear) | **Positive (+α)** | Copper, Silver, Aluminium |
| **Alloys** | ρ pehle se zyada; τ par asar kam | **Bahut kam badhti hai** (almost flat!) | **Very small +α** | Manganin, Constantan, Nichrome |
| **Semiconductors** | n exponentially **tezi se badhta hai** (τ ki kami se zyada!) | **ρ tezi se GHATTI hai!** | **Negative (−α)** | Silicon, Germanium, Carbon |

### Linear Formula (Metals ke liye moderate temperature range mein):
**ρ_T = ρ₀ [ 1 + α (T − T₀) ]**   aur   **R_T = R₀ [ 1 + α (T − T₀) ]**

*(Isliye standard resistance coils **Manganin** ya **Constantan** ki banayi jaati hain — kyunki garmi mein bhi unka resistance nahi badalta!)*

---

## 2. Wire ko Kheenchne (Stretching) ka Kamaal Rule

Agar kisi wire (length L, area A, resistance R = ρL/A) ko kheench kar uski length **n guna** (L' = n L) kar dein, to metal ka **volume (V = A × L) constant** rehta hai!
- Isliye naya area **A' = A / n** ho jaata hai!
- Naya resistance: **R' = ρ (n L) / (A / n) = n² (ρ L / A) = n² R**!
- *Yaad rakho:* Length double (n = 2) kheencho ⟹ **R' = 4 R**! (Lekin **ρ bilkul nahi badalti**!)

---

## 3. Carbon Resistor ka 4-Band Colour Code

Resistor par 4 rang ki pattiyan hoti hain:
- **Band 1:** Pehla digit (A)
- **Band 2:** Doosra digit (B)
- **Band 3:** Multiplier (10^C)
- **Band 4:** Tolerance (±%)

**Formula:** **R = (AB) × 10^C Ω ± Tolerance**

### Yaad Rakhne ka Famous Mnemonic:
**B B R O Y** of **G**reat **B**ritain had a **V**ery **G**ood **W**ife!

| Colour | Digit (Band 1 & 2) | Multiplier (Band 3) | Tolerance (Band 4) |
|---|---|---|---|
| **B**lack | 0 | 10⁰ (= 1) | — |
| **B**rown | 1 | 10¹ | — |
| **R**ed | 2 | 10² | — |
| **O**range | 3 | 10³ | — |
| **Y**ellow | 4 | 10⁴ | — |
| **G**reen | 5 | 10⁵ | — |
| **B**lue | 6 | 10⁶ | — |
| **V**iolet | 7 | 10⁷ | — |
| **G**rey | 8 | 10⁸ | — |
| **W**hite | 9 | 10⁹ | — |
| **Gold** | — | 10⁻¹ | **±5%** |
| **Silver** | — | 10⁻² | **±10%** |
| **No colour** | — | — | **±20%** |

---

## Solved Examples

### Example 1: Temperature Coefficient of Resistance (α)
A silver wire has a resistance of **R₀ = 2.0 Ω** at **20 °C**, and a resistance of **R = 2.4 Ω** at **120 °C**. Determine the temperature coefficient of resistivity **α** of silver.

**Hal (Solution):**
- T₀ = 20 °C, T = 120 °C ⟹ ΔT = 120 − 20 = **100 °C**.
- R = R₀ [ 1 + α ΔT ] ⟹ **α = (R − R₀) / (R₀ ΔT)**
- α = (2.4 − 2.0) / (2.0 × 100) = 0.4 / 200 = **2.0 × 10⁻³ °C⁻¹**.
- **Jaanch:** R = 2.0 [ 1 + (2 × 10⁻³)(100) ] = 2.0 × 1.2 = 2.4 Ω ✅.

### Example 2: Reading a 4-Band Carbon Resistor
A carbon resistor has colour bands in order: **Yellow, Violet, Orange, Gold**. Find its resistance value and tolerance range.

**Hal (Solution):**
- Band 1 (Yellow) = **4**
- Band 2 (Violet) = **7**
- Band 3 (Orange) = **10³**
- Band 4 (Gold) = **±5%**
- Resistance: **R = 47 × 10³ Ω ± 5% = 47 kΩ ± 5%**.
- **Jaanch:** B(0) B(1) R(2) O(3) Y(4) G(5) B(6) V(7) ⟹ Yellow=4, Violet=7, Orange=10³, Gold=±5% ✅.

### Example 3: Stretching a Wire
A wire of resistance **5 Ω** is stretched uniformly until its length becomes **double** its original length. Find its new resistance.

**Hal (Solution):**
- Stretching factor n = 2. Volume constant ⟹ R' = n² R.
- R' = (2)² × 5 = 4 × 5 = **20 Ω**.
- **Jaanch:** Length 2×, area 1/2× ⟹ (2)/(1/2) = 4× ⟹ 4 × 5 = 20 Ω ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Wire kaatne ya kheenchne par Resistivity (ρ) badal dena:**
   - *Galat:* Wire ki length double hone par resistivity bhi double ho jaati hai.
   - *Sahi:* Sirf **Resistance (R)** badalta hai! **Resistivity (ρ)** material ki apni property hai — wire kaatne ya kheenchne se ρ bilkul nahi badalti!
2. **Semiconductors ke liye bhi temperature badhne par resistance badha dena:**
   - *Galat:* Sabhi cheezon ka resistance garmi mein badhta hai.
   - *Sahi:* Pure metals ka resistance badhta hai (+α), par **semiconductors (Si, Ge) ka resistance garmi mein GHATTA hai (−α)**!
3. **3rd colour band ko seedha teesra digit padh lena:**
   - *Galat:* Red-Red-Orange ko 223 Ω padhna!
   - *Sahi:* Teesra band **10 ki power (multiplier)** hota hai! Red(2)-Red(2)-Orange(10³) = **22 × 10³ Ω = 22 kΩ**!

---

## Quick Recap

| Concept | Formula / Fact | Key Point |
|---|---|---|
| Resistance & Resistivity | R = ρ L / A; ρ = m / (n e² τ) | ρ depends ONLY on material & temperature |
| Temperature Dependence | R_T = R₀ [1 + α(T − T₀)] | Metals: +α; Alloys: tiny +α; Semiconductors: −α |
| Wire Stretching (n× length) | R' = n² R | Volume A L = constant ⟹ A' = A/n |
| Colour Code | (Band 1 Band 2) × 10^(Band 3) ± Band 4 | Gold ±5%, Silver ±10%, No band ±20% |

---

## Practice Questions

1. Why are alloys like Manganin and Constantan preferred for making standard resistance coils in laboratories?
2. How does the resistivity of (a) a pure metal like copper, and (b) a semiconductor like silicon change when temperature increases? Give the microscopic reason.
3. A copper coil has a resistance of 10 Ω at 0 °C. If its temperature coefficient of resistance is α = 4.0 × 10⁻³ °C⁻¹, find its resistance at 50 °C.
4. At room temperature (27 °C), the resistance of a heating element is 100 Ω. What is the temperature of the element if its resistance rises to 117 Ω? (Given α = 1.7 × 10⁻⁴ °C⁻¹.)
5. Write the resistance and tolerance of a carbon resistor having colour bands: **Brown, Black, Red, Silver**.
6. What will be the sequence of colour bands on a carbon resistor of value **560 kΩ ± 5%**?
7. A wire of resistance 8 Ω is melted and recast into a wire of half its original length (keeping volume constant). Find its new resistance.
8. State whether True or False: Cutting a copper wire into two equal halves halves its resistivity.
9. Two wires of equal length — one of copper and the other of manganin — have the same resistance. Which wire is thicker? (Given ρ_manganin > ρ_copper.)
10. A carbon resistor has bands **Orange, White, Brown, No fourth band**. Find the minimum and maximum possible resistance values within its tolerance.

### Answers

1. Manganin aur Constantan ki **resistivity zyada** hoti hai (chhote wire mein hi achha resistance mil jaata hai) aur unka **temperature coefficient α bahut chhota** hota hai — isliye temperature badalne par bhi unka resistance lagbhag constant rehta hai!

2. (a) **Copper (metal):** Temperature badhne par collisions tez hote hain ⟹ relaxation time **τ ghatta hai** (n lagbhag constant) ⟹ **ρ badhti hai**.
   (b) **Silicon (semiconductor):** Temperature badhne par covalent bonds tootne se free charge carriers **n exponentially tezi se badhte hain** (τ ki kami se kahin zyada) ⟹ **ρ ghatti hai**.

3. R = R₀ [1 + α ΔT] = 10 [1 + (4.0 × 10⁻³)(50)] = 10 [1 + 0.2] = **12 Ω**.
   Jaanch: 4 × 10⁻³ × 50 = 0.2; 10 × 1.2 = 12 Ω ✅.

4. ΔR = 117 − 100 = 17 Ω.
   ΔT = ΔR / (R₀ α) = 17 / (100 × 1.7 × 10⁻⁴) = 17 / (1.7 × 10⁻²) = 1000 °C.
   Final temperature T = 27 + 1000 = **1027 °C**.
   Jaanch: 100 [1 + 1.7 × 10⁻⁴ × 1000] = 100(1.17) = 117 Ω ✅.

5. Brown (1), Black (0), Red (10²), Silver (±10%) ⟹ **10 × 10² Ω ± 10% = 1.0 kΩ ± 10%**.
   Jaanch: 10 × 100 = 1000 Ω = 1 kΩ ✅.

6. 560 kΩ = **56 × 10⁴ Ω ± 5%**:
   5 = **Green**, 6 = **Blue**, 10⁴ = **Yellow**, ±5% = **Gold**.
   Sequence: **Green, Blue, Yellow, Gold**.

7. Length aadhi ho gayi (n = 1/2) ⟹ volume constant hone se area double ho jayega!
   R' = n² R = (1/2)² × 8 = (1/4) × 8 = **2 Ω**.
   Jaanch: L/2 aur 2A ⟹ R' = R/4 = 2 Ω ✅.

8. **False ❌.** Kaatne se **resistance** aadha hota hai, **resistivity ρ** bilkul nahi badalti!

9. R = ρ L / A ⟹ A = ρ L / R. Kyunki L aur R dono wires ke liye same hain, **A ∝ ρ**. Kyunki ρ_manganin > ρ_copper, isliye **manganin wire zyada mota (thicker)** hoga!

10. Orange (3), White (9), Brown (10¹), No band (±20%) ⟹ **390 Ω ± 20%**.
    20% of 390 = 78 Ω.
    Minimum = 390 − 78 = **312 Ω**; Maximum = 390 + 78 = **468 Ω**.
    Jaanch: 390 × 0.2 = 78; 390 − 78 = 312, 390 + 78 = 468 ✅.

---

Ab tum Resistivity, Temperature Dependence aur Resistor Colour Code ko bilkul pakka samajh chuke ho!

**Agle topic mein:** Battery ke andar chhupa hua dushman — **Internal Resistance**, **EMF vs Terminal Voltage**, aur kai cells ko **Series ya Parallel** mein jodne ka poora hisaab seekhenge!
