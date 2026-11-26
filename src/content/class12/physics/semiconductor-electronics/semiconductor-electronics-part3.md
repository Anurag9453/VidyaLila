# Chapter: Semiconductor Electronics: Materials, Devices and Simple Circuits (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [p-n Junction Diode, Forward and Reverse Bias](semiconductor-electronics-part2.md)

---

## Phone Charger, LED Lamp aur Chhat par Solar Panel!

**Shefali** ne apne room mein chaaron taraf dekha: uska mobile charger deewar ki 220 V **AC** ko 5 V **DC** mein badal raha tha, study table par chamakdaar **LED** lamp jal raha tha, TV ka remote receiver light detect kar raha tha (**Photodiode**), aur ghar ki chhat par **Solar Panels** dhoop se bijli bana rahe the!

Teacher ma'am muskurayi: "Shefali, yeh chaaron modern gadgets — Rectifier, Zener Regulator, LED, Photodiode aur Solar Cell — sab alag-alag tareeke se istemaal kiye gaye **p-n Junction Diodes** hi hain!"

---

## Naye Shabd (New Words)

- **Rectifier:** Aisa circuit jo diodes ke one-way gun ka upyog karke **AC (Alternating Current) ko pulsating DC (Direct Current)** mein badalta hai!
- **Zener Diode:** Ek heavily doped special diode jo **Reverse Breakdown Region** mein bina kharaab hue lagataar kaam karta hai aur constant voltage deta hai (**Voltage Regulator**!).
- **Photodiode:** Ek **Reverse-Biased** optical diode jis par light padne par electron-hole pairs bante hain aur reverse current light ki intensity ke proportional badh jaata hai!
- **LED (Light Emitting Diode):** Ek **Forward-Biased** heavily doped diode jo electron-hole recombination par **light** emit karta hai!
- **Solar Cell:** Ek **Unbiased** large-area p-n junction jo dhoop (light energy) ko seedha electrical EMF (DC) mein badalta hai (**Photovoltaic Effect**)!

---

## 1. Diode as a Rectifier (AC → DC)

### (a) Half-Wave Rectifier (1 Diode):
- Positive half-cycle mein diode **forward biased** (conducts) ⟹ load R_L par output milta hai!
- Negative half-cycle mein diode **reverse biased** (blocks) ⟹ output **ZERO**!
- **Output ripple frequency = f** (50 Hz AC input → **50 Hz** pulsating DC!).

### (b) Full-Wave Rectifier (2 Diodes + Centre-Tap Transformer):
- Positive half-cycle mein Diode D₁ conduct karta hai (D₂ off); Negative half-cycle mein Diode D₂ conduct karta hai (D₁ off) — dono baar load R_L mein current **ek hi direction** mein behta hai!
- **Output ripple frequency = 2 f** (50 Hz AC input → **100 Hz** pulsating DC — kahin zyada smooth aur efficient!).
- *(Pulsating DC ko bilkul flat steady DC banane ke liye load R_L ke parallel mein ek **Capacitor Filter** lagaya jaata hai!)*

---

## 2. Chaar Special-Purpose Diodes (Master Table!)

| Device | Biasing Condition | Key Principle & Material | Main Use |
|---|---|---|---|
| **Zener Diode** | **Reverse Biased** (in breakdown region!) | Constant breakdown voltage **V_Z** even when current changes | **DC Voltage Regulator** (stabiliser) |
| **Photodiode** | **Reverse Biased** | Fractional change in minority current is huge & proportional to light intensity | Light sensors, barcode readers, optical fibre receivers |
| **LED** | **Forward Biased** | Recombination emits photons (E = hν ≈ E_g); uses **GaAsP / GaN** (NOT Si/Ge!) | Bulbs, TV screens, traffic lights, remotes |
| **Solar Cell** | **NO External Bias (Unbiased!)** | Light generates EMF; operates in **4th quadrant** of V-I graph (Silicon / GaAs) | Satellites, calculators, rooftop solar panels |

*(Zener Voltage Regulator Equation: Series resistor R_S se aane wala total current **I_S = (V_in − V_Z) / R_S** do hisson mein bant'ta hai: Load current **I_L = V_Z / R_L** aur Zener current **I_Z = I_S − I_L**!)*

---

## Solved Examples

### Example 1: Zener Diode Voltage Regulator
A Zener diode of breakdown voltage **V_Z = 6.0 V** is used as a voltage regulator across a load resistor **R_L = 600 Ω**, connected to a **10 V** unregulated DC supply through a series resistor **R_S = 200 Ω**. Calculate:
(a) the total current **I_S** through R_S,
(b) the load current **I_L**, and
(c) the Zener current **I_Z**.

**Hal (Solution):**
- (a) R_S par voltage drop = V_in − V_Z = 10 − 6.0 = 4.0 V:
  **I_S = 4.0 / 200 = 0.020 A = 20 mA**.
- (b) Load R_L par constant voltage V_Z = 6.0 V hai:
  **I_L = 6.0 / 600 = 0.010 A = 10 mA**.
- (c) Junction rule se: **I_Z = I_S − I_L = 20 − 10 = 10 mA**.
- **Jaanch:** I_L + I_Z = 10 + 10 = 20 mA = I_S ✅.

### Example 2: Half-Wave vs Full-Wave Output Frequency
A 50 Hz AC mains supply is stepped down by a transformer and fed to (a) a half-wave rectifier, and (b) a full-wave rectifier. What is the fundamental frequency of the pulsating DC output in each case?

**Hal (Solution):**
- (a) Half-wave rectifier: **f_out = f = 50 Hz**.
- (b) Full-wave rectifier: **f_out = 2 f = 2 × 50 = 100 Hz**.
- **Jaanch:** Full-wave mein har cycle mein 2 positive pulses aate hain ⟹ 2 × 50 = 100 Hz ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Special diodes ki biasing aapas mein ulta kar dena:**
   - *Sahi:* **LED = Forward Bias**; **Zener & Photodiode = Reverse Bias**; **Solar Cell = NO Bias (Unbiased)**!
2. **Full-wave rectifier ki output frequency 50 Hz bol dena:**
   - *Galat:* Input 50 Hz hai to full-wave output bhi 50 Hz hoga!
   - *Sahi:* Full-wave mein negative half-cycle bhi upar palat kar positive pulse ban jaata hai ⟹ **f_out = 2 f = 100 Hz**!
3. **Visible LED banane ke liye Silicon/Germanium chun lena:**
   - *Galat:* Silicon ka band gap 1.1 eV hai to usse red LED bana sakte hain!
   - *Sahi:* Visible light ke liye E_g **1.8 eV se 3.0 eV** chahiye (aur direct bandgap) — isliye **GaAsP / GaN** use hote hain, Silicon/Germanium nahi!

---

## Quick Recap

| Device | Bias | Key Formula / Fact |
|---|---|---|
| Half-Wave Rectifier | 1 diode | Passes 1 half-cycle; f_out = f |
| Full-Wave Rectifier | 2 diodes + centre-tap | Passes BOTH half-cycles in same dir; **f_out = 2f** |
| Zener Regulator | **Reverse** breakdown | V_L = V_Z (const); I_S = (V_in − V_Z)/R_S = I_L + I_Z |
| Photodiode / LED / Solar Cell | Reverse / Forward / Unbiased | Light→Current / Current→Light / Light→Voltage (4th quad) |

---

## Practice Questions

1. What is rectification? How does a full-wave rectifier differ from a half-wave rectifier in efficiency and output ripple frequency?
2. What is the function of a capacitor filter connected across the output of a rectifier?
3. Why is a **photodiode** always operated in **reverse bias** rather than forward bias?
4. Why can Silicon and Germanium not be used to make visible-light LEDs? What minimum band gap range is needed for visible LEDs?
5. In which quadrant of the V-I characteristic curve does a **solar cell** operate? Why does it not need any external battery?
6. A 60 Hz AC signal is applied to (a) a half-wave rectifier, and (b) a full-wave rectifier. Find the output ripple frequency in each case.
7. A Zener diode of V_Z = 5.0 V is used to regulate a 12 V supply using a series resistor R_S = 140 Ω across a load R_L = 250 Ω. Calculate (a) I_S, (b) I_L, and (c) I_Z.
8. State two advantages of LEDs over conventional incandescent filament lamps.
9. State whether True or False: A Zener diode is lightly doped and always operated in forward bias as a voltage regulator.
10. What happens to the Zener current I_Z in Question 7 if the load resistor R_L is disconnected (open circuit, I_L = 0)?

### Answers

1. **Rectification:** AC ko DC mein badalna. Half-wave sirf 1 half-cycle use karta hai (kam efficient, f_out = f); Full-wave **dono half-cycles** use karta hai (zyada efficient, **f_out = 2f**).

2. Capacitor filter voltage peaks par charge hota hai aur troughs (gaps) mein dheere discharge hokar pulsating DC ke ripples ko smooth (lagbhag flat steady DC) bana deta hai!

3. Reverse bias mein dark (minority) current bahut chhota (μA) hota hai; isliye light padne par banne wale extra carriers se current mein **fractional change (ΔI / I)** bahut bada aur aasaani se measurable hota hai!

4. Visible light photons ki energy **1.8 eV se 3.0 eV** hoti hai (Si = 1.1 eV, Ge = 0.7 eV bahut kam hain — yeh sirf IR/heat nikaalte hain!). Visible LEDs ke liye **GaAsP / GaN** jaise compound semiconductors use hote hain.

5. Solar cell **4th quadrant** mein kaam karta hai (jahan voltage positive aur current negative/supplied hota hai!). Yeh khud dhoop ki energy ko electricity mein badal kar **power supply** banta hai, isliye external battery nahi chahiye!

6. (a) Half-wave: **60 Hz**. (b) Full-wave: **2 × 60 = 120 Hz**.
   Jaanch: 2 × 60 = 120 Hz ✅.

7. (a) I_S = (12 − 5.0) / 140 = 7.0 / 140 = **0.050 A = 50 mA**.
   (b) I_L = 5.0 / 250 = **0.020 A = 20 mA**.
   (c) I_Z = I_S − I_L = 50 − 20 = **30 mA**.
   Jaanch: 20 + 30 = 50 mA ✅.

8. (i) **Bahut kam power consumption** aur zyada lifespan; (ii) **Fast switching** (turant on/off) aur lagbhag monochromatic (pure colour) light!

9. **False ❌.** Zener diode **heavily doped** hota hai aur voltage regulator ke roop mein hamesha **Reverse Bias (breakdown region)** mein kaam karta hai!

10. Load hatane par I_L = 0 ⟹ saara series current Zener se guzarega: **I_Z = I_S = 50 mA**!

---

Ab tum Rectifiers aur chaaron Special-Purpose Diodes (Zener, Photodiode, LED, Solar Cell) ko poori tarah master kar chuke ho!

**Agle topic mein:** Computers aur smartphones ke dimaag ki bhasha — **0 aur 1** par kaam karne wale **Digital Electronics aur Logic Gates** seekhenge!
