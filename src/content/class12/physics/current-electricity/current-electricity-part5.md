# Chapter: Current Electricity (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Kirchhoff's Rules and the Wheatstone Bridge](current-electricity-part4.md)

---

## 1-Metre Wire par Jockey ka Null Point

School physics lab mein teacher ma'am ek lakdi ke lambe board par lage apparatus ko dikha rahi thin (low-voltage 2 V lab cell ke saath, bilkul safe demonstration). Us par ek 100 cm lambi patli manganin wire aur saath mein ek metre scale laga tha. **Ashok** ne dekha ki jaise hi ma'am ne brass **jockey** ko wire par dheere se touch kiya, galvanometer ki sui kabhi left to kabhi right ghoomi — aur theek **40 cm** par aakar sui **bilkul ZERO** par ruk gayi!

Teacher ma'am muskurayi: "Ashok, jab sui exact zero par rukti hai (null deflection), to galvanometer se koi current nahi behta — aur tab hum **Meter Bridge** se unknown resistance aur **Potentiometer** se kisi cell ka asli **EMF** bina usse ek bhi electron khiche naap sakte hain!"

---

## Naye Shabd (New Words)

- **Meter Bridge (Slide Wire Bridge):** Wheatstone bridge ke principle par kaam karne wala 100 cm wire wala lab instrument, jo kisi unknown resistance **R** ko accurate tareeke se naapta hai.
- **Null Point (Balance Point):** Wire par woh point jahan jockey touch karne par galvanometer mein **zero deflection (I_g = 0)** dikhe.
- **Potentiometer:** Ek lambi uniform wire (aksar 4 m ya 10 m, manganin/constantan ki) jismein steady current behta hai, aur jo **null method** se kisi cell ka true EMF aur internal resistance naapta hai.
- **Potential Gradient (k):** Potentiometer wire ki **per unit length** par voltage drop: k = V / L (SI unit **V/m** ya **V/cm**).

---

## 1. Meter Bridge (Wheatstone Bridge in Action!)

Ek 100 cm (1 m) uniform cross-section wali wire AC par:
- Left gap mein unknown resistance **R**, aur right gap mein known standard resistance **S** laga hota hai.
- Jockey ko point B par touch karne par left length **l** (in cm) aur right length **(100 − l)** (in cm) banti hai.

```
         [  R  ]        B        [  S  ]
      +----===----+----(G)----+----===----+
      :                :                  :
      :                v (jockey at l cm) :
   A ======================================= C
      <------ l cm ----> <----(100-l) cm--->
```

- Wire ka resistance length ke proportional hota hai: **R_AB = r_0 l** aur **R_BC = r_0 (100 − l)**.
- Null point par Wheatstone bridge balance condition:
  R / S = R_AB / R_BC = l / (100 − l) ⟹

**R = S × [ l / (100 − l) ]**

### Lab Tips (Kyun?):
- **Manganin / Constantan wire kyun?** High resistivity aur bahut kam α (garam hone par resistance nahi badalta!).
- **Moti copper strips kyun?** Connections ka extra resistance lagbhag zero rakhne ke liye!
- **Null point beech (40–60 cm) ke paas kyun rakhte hain?** Percentage error sabse kam hota hai!

---

## 2. Potentiometer — Asli EMF Naapne ka Champion!

**Sawaal:** Jab simple **Voltmeter** maujood hai, to **Potentiometer** kyun use karein?
**Jawaab:** Ek ordinary voltmeter cell se thoda sa current I kheenchta hai, isliye woh asli EMF **ε** nahi balki kam **terminal voltage (V = ε − Ir)** dikhata hai! Jabki **Potentiometer** null point par test cell se **ZERO current** kheenchta hai — isliye yeh ek **ideal voltmeter (infinite resistance)** ki tarah **100% true EMF** naapta hai!

### Principle of Potentiometer:
Agar uniform cross-section aur uniform material ki wire mein steady (constant) current **I** beh raha ho, to wire ke kisi bhi length **l** par potential drop **V** us length ke **directly proportional** hota hai:

**V = I R = I (ρ l / A) = k l**

jahan **k = V_total / L = I ρ / A** ko **Potential Gradient (V/m ya V/cm)** kehte hain!

**Zaroori Shart:** Driver cell (main battery) ka voltage hamesha test cell ke EMF se **zyada** hona chahiye, aur dono ke **positive terminals** ek hi starting point A par jude hone chahiye — warna wire par kahin bhi null point nahi milega!

### Application 1: Do Cells ke EMFs Compare Karna
- Cell 1 (EMF ε₁) ke liye null length **l₁** ⟹ ε₁ = k l₁.
- Cell 2 (EMF ε₂) ke liye null length **l₂** ⟹ ε₂ = k l₂.
- Divide karo (k kat gaya!):

**ε₁ / ε₂ = l₁ / l₂**

### Application 2: Cell ka Internal Resistance (r) Nikaalna
1. Pehle external resistance box **R** ko **open (disconnected)** rakh kar cell ka true EMF balance karo ⟹ null length **l₁** ⟹ **ε = k l₁**.
2. Ab resistance box **R** ko cell ke parallel mein **connect** kar do! Ab cell terminal voltage **V** dega ⟹ chhoti null length **l₂** (< l₁) milegi ⟹ **V = k l₂**.
3. Hum jaante hain **r = R × (ε / V − 1)** ⟹ ε/V = l₁/l₂ rakho:

**r = R × [ (l₁ − l₂) / l₂ ]**

### Sensitivity of Potentiometer:
**Chhota potential gradient k = V/L ⟹ Zyada sensitivity** (chhota voltage bhi badi length par balance hoga, reading accurate aayegi!). Sensitivity badhane ke liye wire ki **length L badhate hain** ya driver circuit mein series resistance badha kar **current I kam karte hain**!

---

## Solved Examples

### Example 1: Meter Bridge Calculation
In a meter bridge, the null point is found at a distance of **l = 40 cm** from the left end A when a known resistor **S = 6 Ω** is in the right gap. Find the unknown resistance **R** in the left gap.

**Hal (Solution):**
- Formula: R = S × [ l / (100 − l) ]
- R = 6 × [ 40 / (100 − 40) ] = 6 × (40 / 60) = 6 × (2 / 3) = **4.0 Ω**.
- **Jaanch:** R / S = 4 / 6 = 2/3; l / (100 − l) = 40 / 60 = 2/3 ✅.

### Example 2: Comparing EMFs with a Potentiometer
In a potentiometer experiment, a cell of EMF **ε₁ = 1.5 V** gives a balance point at **l₁ = 60 cm**. When replaced by another cell of unknown EMF **ε₂**, the balance point shifts to **l₂ = 45 cm**. Find **ε₂**.

**Hal (Solution):**
- ε₁ / ε₂ = l₁ / l₂ ⟹ 1.5 / ε₂ = 60 / 45 = 4 / 3.
- ε₂ = 1.5 × (3 / 4) = 4.5 / 4 = **1.125 V**.
- **Jaanch:** k = 1.5 / 60 = 0.025 V/cm; ε₂ = 0.025 × 45 = 1.125 V ✅.

### Example 3: Internal Resistance using a Potentiometer
A cell gives a null point at **l₁ = 80 cm** on a potentiometer wire when in open circuit. When shunted (connected in parallel) by a resistor **R = 9 Ω**, the null point shifts to **l₂ = 60 cm**. Find the internal resistance **r** of the cell.

**Hal (Solution):**
- Formula: r = R × [ (l₁ − l₂) / l₂ ]
- r = 9 × [ (80 − 60) / 60 ] = 9 × (20 / 60) = 9 × (1 / 3) = **3.0 Ω**.
- **Jaanch:** ε/V = l₁/l₂ = 80/60 = 4/3 ⟹ (R + r)/R = 4/3 ⟹ 1 + r/9 = 4/3 ⟹ r/9 = 1/3 ⟹ r = 3.0 Ω ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Meter bridge mein l aur (100 − l) ko ulta rakh dena:**
   - *Galat:* R / S = (100 − l) / l likhna jab l left end (R wali side) se naapa gaya ho!
   - *Sahi:* Hamesha yaad rakho: **Left resistance / Right resistance = Left length / Right length** ⟹ **R / S = l / (100 − l)**!
2. **Sochna ki digital/analog voltmeter potentiometer se zyada accurate EMF naapta hai:**
   - *Galat:* Voltmeter seedha reading deta hai isliye zyada accurate hai.
   - *Sahi:* Voltmeter thoda current kheench kar V = ε − Ir deta hai; **Potentiometer null point par ZERO current** kheenchta hai, isliye true EMF deta hai!
3. **Driver cell ka EMF test cell se chhota le lena:**
   - *Galat:* 2 V driver cell se 3 V test cell ka null point dhoondhna.
   - *Sahi:* Poore wire par max drop sirf 2 V hoga — 3 V kabhi balance nahi hoga (galvanometer hamesha ek hi taraf deflect karega)! **Driver EMF > Test EMF** zaroori hai!

---

## Quick Recap

| Instrument / Formula | Equation | Key Principle / Advantage |
|---|---|---|
| Meter Bridge | R / S = l / (100 − l) | Based on balanced Wheatstone bridge (100 cm wire) |
| Potentiometer Principle | V = k l (k = V_wire / L) | Steady current in uniform wire; draws **zero current** at null |
| EMF Comparison | ε₁ / ε₂ = l₁ / l₂ | Independent of k as long as driver current is steady |
| Internal Resistance | r = R (l₁ − l₂) / l₂ | l₁ = open circuit (ε); l₂ = shunted with R (V) |
| Sensitivity | Higher sensitivity ⟺ smaller k = V/L | Achieved by longer wire L or lower current I |

---

## Practice Questions

1. On what physical principle does a meter bridge work? Why are thick copper strips used for its connections?
2. In a meter bridge, the balance point is obtained at 25 cm from the left end when a 12 Ω resistor is in the right gap. Find the unknown resistance in the left gap.
3. What happens to the balance point in Question 2 if the resistances in the left and right gaps are interchanged?
4. Why is a potentiometer preferred over a voltmeter for measuring the EMF of a cell?
5. A potentiometer wire of length 4 m has a potential difference of 2 V maintained across its ends. Calculate its potential gradient k in (a) V/m, and (b) mV/cm.
6. A cell of EMF 1.25 V gives a balance point at 35 cm on a potentiometer wire. If this cell is replaced by another cell and the balance point shifts to 63 cm, find the EMF of the second cell.
7. A cell balances against 120 cm of a potentiometer wire in open circuit. When a 10 Ω resistor is connected across the cell, the balance length drops to 100 cm. Find the internal resistance of the cell.
8. State two reasons why a student might get deflection only on **one side** of the galvanometer in a potentiometer experiment (no null point found).
9. State whether True or False: Increasing the length of a potentiometer wire (keeping the same voltage across it) increases its sensitivity.
10. A 10 m long potentiometer wire has a resistance of 20 Ω. It is connected in series with a 3 V battery (negligible internal resistance) and a 10 Ω series resistor. Calculate the potential gradient along the wire.

### Answers

1. Meter bridge **balanced Wheatstone bridge** ke principle par kaam karta hai. Moti copper strips ka area bahut zyada hota hai (R = ρL/A bahut kam), isliye connecting strips ka extra resistance negligible rehta hai aur error nahi aata.

2. R = S × [ l / (100 − l) ] = 12 × (25 / 75) = 12 × (1 / 3) = **4.0 Ω**.
   Jaanch: 4/12 = 1/3; 25/75 = 1/3 ✅.

3. Gaps interchange karne par l aur (100 − l) bhi interchange ho jaate hain ⟹ naya balance point **100 − 25 = 75 cm** from the left end par milega!

4. Voltmeter circuit se thoda current kheenchta hai aur sirf terminal voltage (ε − Ir) naapta hai, jabki **potentiometer null point par cell se ZERO current** kheenchta hai aur 100% true EMF **ε** naapta hai.

5. (a) k = V / L = 2 / 4 = **0.5 V/m**.
   (b) 2 V = 2000 mV, 4 m = 400 cm ⟹ k = 2000 / 400 = **5 mV/cm**.
   Jaanch: 0.5 V/m = 500 mV / 100 cm = 5 mV/cm ✅.

6. ε₂ = ε₁ × (l₂ / l₁) = 1.25 × (63 / 35) = 1.25 × (9 / 5) = 0.25 × 9 = **2.25 V**.
   Jaanch: 63/35 = 9/5 = 1.8; 1.25 × 1.8 = 2.25 V ✅.

7. r = R × [ (l₁ − l₂) / l₂ ] = 10 × [ (120 − 100) / 100 ] = 10 × (20 / 100) = **2.0 Ω**.
   Jaanch: 10 × 0.2 = 2.0 Ω ✅.

8. (i) Driver cell ka EMF test cell ke EMF se **kam** ho (voltage drop poore wire par enough nahi!).
   (ii) Dono cells ke **opposite terminals** (+ ko − se) point A par galat jud gaye hon.

9. **True ✅.** Length L badhane par potential gradient k = V/L **chhota** hota hai, jisse per volt zyada length milti hai aur **sensitivity badh jaati hai**!

10. Total resistance = 20 + 10 = 30 Ω.
    Current in wire: I = 3 / 30 = 0.1 A.
    Voltage across the 10 m wire: V_wire = I × R_wire = 0.1 × 20 = 2.0 V.
    Potential gradient: **k = V_wire / L = 2.0 / 10 = 0.2 V/m** (= 2 mV/cm).
    Jaanch: I = 0.1 A ⟹ V_wire = 2 V ⟹ 2/10 = 0.2 V/m ✅.

---

Ab tum Meter Bridge aur Potentiometer ke lab principles aur saare numericals master kar chuke ho!

**Agle topic mein:** Sab Kuch Mila Kar — is poore chapter ke saare topics (drift velocity, stretched wire, cells, Kirchhoff, bridge, potentiometer) ko ek saath jodkar tricky mixed problems solve karenge aur poora chapter wrap-up karenge!
