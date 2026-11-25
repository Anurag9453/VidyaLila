> **Class:** 11 | **Subject:** Physics | **Chapter 11:** Thermodynamics (Part 4)

# Second Law of Thermodynamics, Heat Engines & Refrigerators

> **Pichle topic se:** [Thermodynamic Processes](thermodynamics-part3.md) mein humne First Law (energy conservation) dekha. Par First Law yeh nahi rokta ki ek ship samudra ke paani se heat lekar use 100% work mein badal de aur peeche barf chhodti jaye! Phir aisa kyun nahi hota? Kyunki **Second Law of Thermodynamics** heat-to-work conversion par strict natural limit lagata hai!

---

## Hemchandra ka Power-Plant & Cold-Storage Audit

Hemchandra ek power-plant aur cold-storage efficiency engineer hai. Usne dekha:
- Thermal power plant ko har **1000 J** coal heat (Q₁) mein se sirf **350 J** electricity (W) milti hai, aur **650 J** waste heat (Q₂) cooling tower mein bahar phenkni padti hai (**η = 35%**) — koi bhi engine bina waste heat phenke 100% efficient nahi ban sakta!
- Ghar ka **Refrigerator** ulta kaam karta hai: thande freezer (Q₂) se heat nikal kar garam kamre (Q₁) mein phenkta hai — par sirf tab jab compressor bijli ka **Work W** kharch kare!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Heat Engine | Cyclic device jo hot reservoir se heat **Q₁** le kar work **W = Q₁ - Q₂** kare aur bachi **Q₂** cold sink ko de |
| Efficiency of Heat Engine (η) | Useful work divided by heat input: **η = W / Q₁ = 1 - (Q₂ / Q₁)** (hamesha **< 1**, i.e., < 100%!) |
| Refrigerator | Ulta heat engine: cold space se **Q₂** nikalne ke liye work **W** lekar hot room ko **Q₁ = Q₂ + W** deta hai |
| Coefficient of Performance (COP / α) | Refrigerator: **α = Q₂ / W = Q₂ / (Q₁ - Q₂)** (can be > 1, typically 3–6!); Heat Pump: **COP_pump = Q₁ / W = 1 + α** |
| Second Law (Kelvin–Planck) | Aisa koi cyclic engine impossible hai jo sirf ek reservoir se heat lekar use **100% work** mein badal de (**Q₂ ≠ 0, η < 1**) |
| Second Law (Clausius) | Bina bahari work (W) kiye heat khud-ba-khud **thandi body se garam body** ki taraf flow nahi ho sakti! |

---

## 1. Heat Engine vs Refrigerator Energy Flow

```
   HEAT ENGINE:                          REFRIGERATOR / HEAT PUMP:
   Hot Source (T₁)                       Hot Room (T₁)
         : Q₁                                  ^ Q₁ = Q₂ + W
         v                                     |
     [ ENGINE ] ---> W = Q₁ - Q₂           [ FRIDGE ] <--- Work W (electricity)
         : Q₂                                  ^
         v                                     | Q₂ (removed from freezer)
   Cold Sink (T₂)                        Cold Freezer (T₂)
```

**Important Formulas:**
1. **Heat Engine:** W = Q₁ - Q₂; **η = W / Q₁ = 1 - Q₂ / Q₁**
2. **Refrigerator:** Q₁ = Q₂ + W; **COP_ref (α) = Q₂ / W = Q₂ / (Q₁ - Q₂)**
3. **Heat Pump (Room Heater):** **COP_pump = Q₁ / W = 1 + COP_ref**

---

## Solved Examples

### Example 1: Thermal Power Plant Efficiency

A steam engine absorbs 2500 J of heat per cycle from a boiler and rejects 1500 J to a condenser. Find: (a) work done per cycle, (b) thermal efficiency η.

**Solution:**
- (a) W = Q₁ - Q₂ = 2500 - 1500 = **1000 J**.
- (b) η = W / Q₁ = 1000 / 2500 = **0.40 = 40%**.

Jaanch:
- Jaanch: 1 - Q₂/Q₁ = 1 - 1500/2500 = 1 - 0.60 = 0.40 (40%) ✅

---

### Example 2: Refrigerator COP & Heat Rejected to Kitchen

A refrigerator removes 600 J of heat per second from its freezer compartment while its compressor consumes 150 W of electrical power. Find: (a) its Coefficient of Performance α, (b) heat rejected to the kitchen per second.

**Solution:**
- (a) α = Q₂ / W = 600 / 150 = **4.0**.
- (b) Q₁ = Q₂ + W = 600 + 150 = **750 J/s (750 W)**!
*(Fun fact: Leaving your fridge door open in a closed room **HEATS UP** the room, because the fridge rejects Q₁ = Q₂ + W > Q₂!)*

Jaanch:
- Jaanch: Q₁ - Q₂ = 750 - 600 = 150 W = electrical input W ✅

---

### Example 3: Power Output from Efficiency & Fuel Burn Rate

An automobile engine has an efficiency of 25% and develops a useful mechanical power of 50 kW. Find: (a) heat absorbed from burning petrol per second, (b) waste heat rejected per second.

**Solution:**
- (a) η = P_out / (Q₁/t) => Q₁/t = 50 kW / 0.25 = **200 kW**.
- (b) Waste heat rate Q₂/t = 200 - 50 = **150 kW**.

Jaanch:
- Jaanch: 25% of 200 kW = 50 kW useful, 75% = 150 kW wasted ✅

---

### Example 4: Linking Engine Efficiency η and Reverse Refrigerator COP α

If a reversible heat engine has efficiency η = 0.20 (20%), what is its Coefficient of Performance α when run backward as a refrigerator?

**Solution:**
η = W / Q₁ and α = Q₂ / W = (Q₁ - W) / W = Q₁ / W - 1 = **1 / η - 1 = (1 - η) / η**!
For η = 0.20: α = (1 - 0.20) / 0.20 = 0.80 / 0.20 = **4.0**!

Jaanch:
- Jaanch: Q₁ = 100, W = 20, Q₂ = 80 => η = 20/100 = 0.20; α = 80/20 = 4.0 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Refrigerator ke COP ko hamesha < 1 maan lena (efficiency ki tarah!)
- **Galat:** COP 1 se bada nahi ho sakta!
- **Sahi:** Engine efficiency **η < 1** hoti hai, par Refrigerator **COP = Q₂ / W** aksar **3 se 6** (easily > 1!) hota hai!

### Galti 2: Band kamre mein fridge ka darwaza kholne par kamra thanda hota hai sochna
- **Galat:** Fridge khol do toh AC ki tarah kamra thanda ho jayega!
- **Sahi:** Fridge kamre ke andar hi Q₂ kheench kar **Q₁ = Q₂ + W** wapas kamre mein phenk raha hai — net **+W heat har second add** hoti hai, isliye kamra **GARAM** ho jata hai!

### Galti 3: Refrigerator mein Q₁ aur Q₂ ko ulta kar dena
- **Galat:** α = Q₁ / W!
- **Sahi:** Refrigerator ka useful kaam thandi jagah se **Q₂** nikalna hai => **α = Q₂ / W**! (Heat pump ka useful kaam garam kamre mein **Q₁** dena hai => **COP_pump = Q₁ / W = 1 + α**!)

---

## Quick Recap

- **Second Law:** Kelvin–Planck (no 100% engine: η < 1); Clausius (no spontaneous cold -> hot heat flow).
- **Heat Engine:** W = Q₁ - Q₂; **η = W / Q₁ = 1 - Q₂ / Q₁**.
- **Refrigerator:** Q₁ = Q₂ + W; **α = Q₂ / W = (1 - η) / η** (can be > 1!).
- **Heat Pump:** **COP_pump = Q₁ / W = 1 + α**.

---

## Practice Questions

### Question 1
A heat engine absorbs 4000 J of heat and performs 1200 J of work per cycle. Find its efficiency and the heat rejected to the cold sink.

**Solution:**
- η = 1200 / 4000 = **0.30 (30%)**.
- Q₂ = 4000 - 1200 = **2800 J**.

Jaanch:
- Jaanch: 1200 + 2800 = 4000 J ✅

---

### Question 2
A refrigerator has a COP of 5. If it extracts 1000 J of heat from the freezer, find the work input required and the heat rejected to the room.

**Solution:**
- W = Q₂ / α = 1000 / 5 = **200 J**.
- Q₁ = Q₂ + W = 1000 + 200 = **1200 J**.

Jaanch:
- Jaanch: 1000 / 200 = 5 ✅

---

### Question 3
A heat pump used to warm a house in winter has a COP of 4. If it consumes 500 W of electrical power, how much heat does it deliver into the house every second?

**Solution:**
COP_pump = Q₁ / W = 4 => Q₁ = 4 × 500 = **2000 W (2 kW)**!

Jaanch:
- Jaanch: Extracts 1500 W from outside cold air + 500 W electricity = 2000 W inside ✅

---

### Question 4
If a reversible engine has efficiency 25%, find its COP when operated in reverse as: (a) a refrigerator, (b) a heat pump.

**Solution:**
- (a) α = (1 - 0.25) / 0.25 = **3.0**.
- (b) COP_pump = 1 + α = **4.0** (= 1 / η!).

Jaanch:
- Jaanch: 1 / 0.25 = 4.0 ✅

---

### Question 5
A power plant produces 300 MW of electrical power with an efficiency of 30%. How much waste heat is discharged into the river every second?

**Solution:**
Q₁/t = 300 / 0.30 = 1000 MW.
Waste heat Q₂/t = 1000 - 300 = **700 MW**.

Jaanch:
- Jaanch: 300 + 700 = 1000 MW ✅

---

### Question 6
A refrigerator consumes 200 W of power and rejects 900 W of heat into the room. Find its COP.

**Solution:**
Q₂ = Q₁ - W = 900 - 200 = 700 W.
α = Q₂ / W = 700 / 200 = **3.5**.

Jaanch:
- Jaanch: 3.5 × 200 = 700 W; 700 + 200 = 900 W ✅

---

### Question 7
An inventor claims to have built a cyclic heat engine that absorbs 500 J from a single hot lake and converts all 500 J into mechanical work with zero waste heat. Which law of thermodynamics does this violate?

**Solution:**
It satisfies the First Law (energy conserved), but violates the **Second Law of Thermodynamics (Kelvin–Planck statement)**!

Jaanch:
- Jaanch: A 100% efficient cyclic engine is impossible ✅

---

### Question 8
A refrigerator removes 2100 J of heat per minute from a cold box with COP = 3.5. Find the power of the refrigerator motor in Watts.

**Solution:**
Q₂/t = 2100 / 60 = 35 W.
W/t = 35 / 3.5 = **10 W**.

Jaanch:
- Jaanch: 10 W × 3.5 = 35 W = 2100 J/min ✅

---

### Question 9
An engine performs 600 J of work per cycle and rejects 900 J of heat per cycle. Find its efficiency.

**Solution:**
Q₁ = W + Q₂ = 600 + 900 = 1500 J.
η = 600 / 1500 = **0.40 (40%)**.

Jaanch:
- Jaanch: 1 - 900/1500 = 1 - 0.6 = 0.40 ✅

---

### Question 10
Why does leaving a refrigerator door open inside a sealed room warm the room instead of cooling it?

**Solution:**
The refrigerator dumps Q₁ = Q₂ + W into the room while absorbing only Q₂ from it, resulting in a net heat addition of **+W** (the electrical energy consumed by the compressor) into the room!

Jaanch:
- Jaanch: First Law applied to the sealed room: electrical work enters, so room's internal energy rises ✅

---

### Question 11
State whether the following statements are True or False:
(a) The Kelvin–Planck and Clausius statements of the Second Law are completely equivalent.
(b) A refrigerator's COP can never exceed 1.

**Solution:**
- (a) **True** ✅ — Violating either statement automatically violates the other!
- (b) **False** ❌ — COP is typically 3 to 6 (greater than 1).

Jaanch:
- Jaanch: Core facts of Section 1 ✅

---

### Question 12
A heat engine with 40% efficiency runs at 20 cycles per second and absorbs 500 J of heat per cycle. Find its mechanical power output in kW.

**Solution:**
Work per cycle = 0.40 × 500 = 200 J.
Power = 200 J/cycle × 20 cycles/s = **4000 W = 4 kW**.

Jaanch:
- Jaanch: Heat input power = 10 kW; 40% of 10 kW = 4 kW ✅

---

Second Law, Engines aur Refrigerators ab tumhare liye bilkul clear hain!

**Agle topic mein:** Universe ka sabse zyada possible efficient engine kaun sa hai — **Carnot Engine** aur uska legendary formula **η = 1 - T₂ / T₁** — chalo padhte hain [Reversible Processes & Carnot Engine](thermodynamics-part5.md)!
