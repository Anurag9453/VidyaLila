> **Class:** 11 | **Subject:** Physics | **Chapter 10:** Thermal Properties of Matter

# Temperature, Heat, Thermometry & Ideal Gas Equation

> **Pichle chapter aur pehle ki padhai se:** [Mechanical Properties of Fluids](../mechanical-properties-of-fluids/mechanical-properties-of-fluids-part5.md) ke saath humne mechanics poori ki. Ab hum **Thermal Physics** shuru kar rahe hain! Heat aur temperature ka basic intro tum [Class 9 Heat and Temperature](../../../class9/physics/heat-and-temperature/heat-and-temperature.md) aur [Class 10 Heat-II](../../../class10/physics/heat-ii/heat-ii.md) mein dekh chuke ho — yahan hum absolute Kelvin scale, constant-volume gas thermometers, aur ideal gas law ka exact physics padhenge!

---

## Vrajesh ka Cryogenics Calibration Lab

Vrajesh ek cryogenics aur thermometer calibration engineer hai. Usne lab mein do alag gases (helium aur nitrogen) ko constant-volume bulbs mein bharkar unka Pressure vs Temperature graph banaya. Jaise-jaise temperature ghataya, dono gases ki pressure lines alag slopes ke saath neeche aayin — par jab unhe peeche extrapolate kiya gaya, toh sabhi gases ki lines exact ek hi point **-273.15 °C** par zero pressure ko cut karti thin!

Yehi hai **Absolute Zero (0 K)** — universe ka sabse thanda possible limit!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Heat (Q) | Temperature difference ki wajah se ek body se doosri body mein **transfer hone wali energy** (SI unit: **Joule**; 1 cal = 4.186 J ≈ 4.2 J) |
| Temperature (T) | Degree of hotness ya average molecular kinetic energy ka maap — yeh batata hai heat kis disha mein flow hogi |
| Absolute Zero | **0 K = -273.15 °C** — lowest theoretical temperature jahan ideal gas ka pressure zero ki taraf jata hai |
| Triple Point of Water | Woh unique temperature (**273.16 K = 0.01 °C**) aur pressure (611.6 Pa) jahan ice, liquid water, aur steam teeno ek saath equilibrium mein rehte hain |
| Ideal Gas Equation | **P V = n R T** (R = 8.314 J mol⁻¹ K⁻¹) |

---

## 1. Temperature Scale Conversions

Kisi bhi linear thermometer scale (ice point LFP, steam point UFP) ke liye:
```
  (C - 0) / 100  =  (F - 32) / 180  =  (K - 273.15) / 100  =  (X - LFP) / (UFP - LFP)
```
Simplified:
- **C / 5 = (F - 32) / 9**
- **T (K) = t (°C) + 273.15** (problems mein aksar +273)
- **Temperature Difference (ΔT):** **1 °C change = 1 K change = (9/5) °F = 1.8 °F change!**

---

## 2. Constant-Volume Gas Thermometer & Ideal Gas Law

Low-density gases **P V = n R T** follow karti hain (Boyle's Law P ∝ 1/V + Charles' Law V ∝ T + Avogadro's Law).
Constant volume par **P ∝ T (in Kelvin!)**:
```
  T = 273.16 × (P / P_tr)
```
(jahan P_tr water ke triple point par pressure hai!).

---

## Solved Examples

### Example 1: Finding Where Celsius and Fahrenheit Scales Read the Same

At what temperature do the Celsius and Fahrenheit scales show the exact same numerical reading?

**Solution:**
Let C = F = x:
x / 5 = (x - 32) / 9 => 9 x = 5 x - 160 => 4 x = -160 => **x = -40°** (-40 °C = -40 °F)!

Jaanch:
- Jaanch: (-40)/5 = -8; (-40 - 32)/9 = -72/9 = -8 ✅

---

### Example 2: Faulty Thermometer Calibration

A faulty Celsius thermometer reads 2 °C in melting ice and 98 °C in boiling water at standard pressure. What is the true Celsius temperature when this faulty thermometer reads 50 °C?

**Solution:**
(C - 0) / 100 = (50 - 2) / (98 - 2) = 48 / 96 = 1 / 2 => **C = 50 °C**!

Jaanch:
- Jaanch: 50 is the exact midpoint between 2 and 98, so true temperature is midpoint 50 °C ✅

---

### Example 3: Constant-Volume Gas Thermometer Reading

A constant-volume gas thermometer records a pressure of 1.25 × 10⁵ Pa at the triple point of water (273.16 K) and 1.75 × 10⁵ Pa at the melting point of a metal. Find the melting point of the metal in Kelvin.

**Solution:**
T = 273.16 × (1.75 / 1.25) = 273.16 × (7 / 5) = 273.16 × 1.4 ≈ **382.4 K**.

Jaanch:
- Jaanch: Higher pressure (1.75 > 1.25) => higher temperature (382.4 K > 273.16 K) ✅

---

### Example 4: Ideal Gas Pressure Rise in a Sealed Tyre

A car tyre is filled with air at 27 °C (300 K) to an absolute pressure of 3.0 atm. After highway driving, the air temperature rises to 57 °C (330 K) at constant volume. Find the new absolute pressure.

**Solution:**
P₁ / T₁ = P₂ / T₂ (MUST use Kelvin!)
3.0 / 300 = P₂ / 330 => **P₂ = 3.3 atm**.

Jaanch:
- Jaanch: Kelvin temperature rose by 10% (300 -> 330 K), so pressure rose by 10% (3.0 -> 3.3 atm) ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Ideal gas law P₁/T₁ = P₂/T₂ mein Celsius temperature rakh dena
- **Galat:** 27 °C se 54 °C hua toh pressure double ho gaya!
- **Sahi:** Ideal gas law mein **HAMESHA Kelvin (T = t + 273)** rakhna zaroori hai! 300 K se 327 K par pressure sirf 9% badhta hai, double nahi!

### Galti 2: Temperature difference ΔT ko convert karte waqt +32 ya +273 jod dena
- **Galat:** ΔT = 20 °C => ΔT_K = 20 + 273 = 293 K!
- **Sahi:** **Change ΔT** mein Celsius aur Kelvin **exact EQUAL** hote hain (**ΔT = 20 °C = 20 K = 36 °F**)!

### Galti 3: Heat ko body ke andar store hone wali cheez samajh lena
- **Galat:** Is cup mein 500 J heat bhari hai!
- **Sahi:** Body ke andar **Internal Energy** hoti hai; **Heat (Q)** sirf **transit (transfer)** mein hoti hai jab do bodies alag temperatures par hon!

---

## Quick Recap

- **Conversions:** C / 5 = (F - 32) / 9; K = C + 273.15; **ΔC = ΔK = (5/9) ΔF**.
- **Absolute Zero:** 0 K = -273.15 °C; **Triple point of water:** 273.16 K.
- **Ideal Gas:** P V = n R T (R = 8.314 J mol⁻¹ K⁻¹, T MUST be in Kelvin!).

---

## Practice Questions

### Question 1
Convert normal human body temperature 98.6 °F into Celsius and Kelvin.

**Solution:**
C = (5/9)(98.6 - 32) = (5/9)(66.6) = **37.0 °C**.
K = 37.0 + 273.15 = **310.15 K**.

Jaanch:
- Jaanch: (9/5)(37) + 32 = 66.6 + 32 = 98.6 °F ✅

---

### Question 2
Convert 25 °C into Fahrenheit and Kelvin.

**Solution:**
F = (9/5)(25) + 32 = 45 + 32 = **77 °F**.
K = 25 + 273.15 = **298.15 K**.

Jaanch:
- Jaanch: (77 - 32) × 5/9 = 45 × 5/9 = 25 °C ✅

---

### Question 3
If the temperature of a metal rod increases by 40 °C, find the corresponding increase in temperature on the Fahrenheit and Kelvin scales.

**Solution:**
- ΔK = **40 K**.
- ΔF = (9/5) × 40 = **72 °F**.

Jaanch:
- Jaanch: No +32 or +273 for temperature differences! ✅

---

### Question 4
At what temperature is the Fahrenheit reading exactly double the Celsius reading (F = 2 C)?

**Solution:**
C / 5 = (2 C - 32) / 9 => 9 C = 10 C - 160 => **C = 160 °C** (and **F = 320 °F**).

Jaanch:
- Jaanch: (9/5)(160) + 32 = 288 + 32 = 320 °F = 2 × 160 ✅

---

### Question 5
A faulty thermometer shows the ice point as -5° and the steam point as 105°. What is the true Celsius temperature when it reads 50°?

**Solution:**
C / 100 = (50 - (-5)) / (105 - (-5)) = 55 / 110 = 1/2 => **C = 50 °C**.

Jaanch:
- Jaanch: 50 is midpoint of -5 and 105 => 50 °C ✅

---

### Question 6
Two moles of an ideal gas occupy 0.05 m³ at 300 K (R = 8.31 J mol⁻¹ K⁻¹). Find the gas pressure in kPa.

**Solution:**
P = n R T / V = (2 × 8.31 × 300) / 0.05 = 4986 / 0.05 = **99,720 Pa ≈ 99.7 kPa**.

Jaanch:
- Jaanch: 2 × 300 = 600; 600 × 8.31 = 4986; ÷ 0.05 = 99,720 Pa ✅

---

### Question 7
A sealed rigid gas cylinder at 27 °C has pressure 2 atm. To what Celsius temperature must it be heated so the pressure rises to 4 atm?

**Solution:**
T₁ = 300 K; P doubles => T₂ = 2 × 300 = 600 K => t₂ = 600 - 273 = **327 °C**.

Jaanch:
- Jaanch: 600 K / 300 K = 2 = 4 atm / 2 atm ✅

---

### Question 8
A constant-volume gas thermometer reads 80 cm Hg at 0 °C (273 K) and 100 cm Hg at an unknown temperature. Find the unknown temperature in °C.

**Solution:**
T = 273 × (100 / 80) = 273 × 1.25 = 341.25 K => t = 341.25 - 273 = **68.25 °C**.

Jaanch:
- Jaanch: Pressure rose by 25%, so Kelvin T rose by 25% (+68.25 K = +68.25 °C) ✅

---

### Question 9
Convert 200 calories of heat into Joules (1 cal = 4.2 J).

**Solution:**
200 × 4.2 = **840 J**.

Jaanch:
- Jaanch: 200 × 4.2 = 840 J ✅

---

### Question 10
Why is the Kelvin scale called an "absolute" temperature scale?

**Solution:**
Kyunki 0 K (-273.15 °C) universe ka natural lower limit hai (sabhi ideal gases ka extrapolated zero-pressure point) aur Kelvin scale par koi **negative temperature** nahi hota!

Jaanch:
- Jaanch: Independent of the thermometric substance used ✅

---

### Question 11
State whether the following statements are True or False:
(a) A temperature change of 10 °C is smaller than a temperature change of 10 K.
(b) At absolute zero (0 K), the Celsius temperature is -273.15 °C.

**Solution:**
- (a) **False** ❌ — 1 °C interval = 1 K interval => 10 °C change = **exact 10 K change**!
- (b) **True** ✅ — K = C + 273.15 => 0 K = -273.15 °C.

Jaanch:
- Jaanch: Verified from Section 1 ✅

---

### Question 12
An ideal gas at 27 °C and 1 atm is compressed to half its volume while heated to 127 °C. Find its new pressure in atm.

**Solution:**
T₁ = 300 K, T₂ = 400 K, V₂ = V₁ / 2.
P₂ = P₁ (V₁ / V₂) (T₂ / T₁) = 1 × 2 × (400 / 300) = **8 / 3 ≈ 2.67 atm**.

Jaanch:
- Jaanch: Halving volume doubles P (×2), heating by 4/3 multiplies by 4/3 => 8/3 atm ✅

---

Temperature scales aur ideal gas thermometry ab tumhare liye bilkul clear hain!

**Agle topic mein:** Garam karne par solids aur liquids kyun failte hain, metal plate ka chhed garam karne par bada hota hai ya chhota, aur paani 4 °C par sabse bhari kyun hota hai — chalo padhte hain [Thermal Expansion & Anomalous Behaviour of Water](thermal-properties-of-matter-part2.md)!
