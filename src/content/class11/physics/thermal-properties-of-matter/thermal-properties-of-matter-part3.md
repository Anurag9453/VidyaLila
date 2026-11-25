> **Class:** 11 | **Subject:** Physics | **Chapter 10:** Thermal Properties of Matter (Part 3)

# Specific Heat Capacity, Calorimetry & Latent Heat

> **Pichle topic se:** [Thermal Expansion](thermal-properties-of-matter-part2.md) mein humne dekha ki heat dene par size badhta hai. Ab hum calculate karenge ki heat dene par **temperature kitna badhta hai (Q = m c ΔT)** aur jab phase badalta hai (ice -> water -> steam), toh temperature ruke rehne ke bawajood itni zyada **Latent Heat (Q = m L)** kahan chali jati hai!

---

## Jagmohan ka Ice-Plant & Steam-Calorimetry Check

Jagmohan ek food-processing aur ice-plant engineer hai. Usne workers ko ek zaroori safety baat samjhayi: "100 °C ki **steam** se jalna, 100 °C ke **ubalte paani** se jalne se kahin zyada khatarnak hota hai! Kyun? Kyunki har 1 gram steam mein ubalte paani se **540 calories (2260 J) EXTRA Latent Heat of Vaporisation** chhupi hoti hai jo skin par condense hote hi release ho jati hai!"

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Specific Heat Capacity (c) | 1 kg mass ka temperature 1 K badhane ke liye zaroori heat: **Q = m c ΔT** (Water: **4186 J kg⁻¹ K⁻¹ ≈ 4200 J kg⁻¹ K⁻¹ = 1 cal g⁻¹ °C⁻¹**) |
| Heat Capacity (S) | Poori body ka temperature 1 K badhane ki heat: **S = m c** (J/K) |
| Molar Specific Heat (C) | 1 mole substance ka temperature 1 K badhane ki heat: **Q = n C ΔT** (J mol⁻¹ K⁻¹) |
| Principle of Calorimetry | Isolated mixture mein: **Heat Lost by Hot Body = Heat Gained by Cold Body** |
| Latent Heat (L) | Constant temperature par 1 kg substance ka phase badalne ki heat: **Q = m L** (Ice fusion: **L_f = 80 cal/g = 336 kJ/kg**; Steam vaporisation: **L_v = 540 cal/g = 2260 kJ/kg**) |
| Regelation | Pressure badhane par ice ka 0 °C se kam par pighalna aur pressure hatane par wapas jam jana (skating & wire-through-ice!) |

---

## 1. Heating Curve of Water (Ice at -10 °C -> Steam at 110 °C)

```
  Temp (°C)
  110 |                                      / Steam heating (c_steam)
  100 |                       +-------------/  Boiling plateau: Q = m L_v (540 cal/g)
      :                      /
      :                     / Water heating (c_w = 1 cal/g°C)
    0 |        +-----------/  Melting plateau: Q = m L_f (80 cal/g)
  -10 |       / Ice heating (c_ice = 0.5 cal/g°C)
      +------------------------------------------> Heat Q added
```

**Notice:** Phase change (horizontal plateaus) ke dauran **temperature BILKUL nahi badhta** — saari heat intermolecular bonds todne (internal PE badhane) mein kharch hoti hai!

---

## 2. Calorimetry Mixture Strategy (Ice + Water Trap!)

Jab ice (0 °C) aur garam paani ko milaya jaye, toh **pehle check karo ki kya saari ice pighal payegi?**
1. Calculate **Q_available** (garam paani ko 0 °C tak thanda karne se kitni heat milegi).
2. Calculate **Q_melt_all** (saari ice ko 0 °C paani banane mein kitni heat chahiye = m_ice L_f).
3. Compare karo:
   - Agar **Q_available < Q_melt_all**: sirf kuch hissa (**m_melted = Q_available / L_f**) pighlega, aur final temperature **EXACT 0 °C** rahega!
   - Agar **Q_available > Q_melt_all**: saari ice pighal jayegi, aur bachi hui heat (**Q_available - Q_melt_all**) poore (m_ice + m_water) paani ko 0 °C se upar garam karegi!

---

## Solved Examples

### Example 1: Hot Copper Block Dropped Into Cold Water

A 200 g copper block (c_Cu = 0.1 cal/g°C) at 100 °C is dropped into 100 g of water (c_w = 1 cal/g°C) at 20 °C inside an insulated calorimeter (negligible heat capacity). Find the final equilibrium temperature T.

**Solution:**
Heat lost by copper = Heat gained by water:
200 (0.1) (100 - T) = 100 (1) (T - 20)
20 (100 - T) = 100 (T - 20)
Divide by 20: 100 - T = 5 T - 100 => 6 T = 200 => **T = 200 / 6 ≈ 33.33 °C**.

Jaanch:
- Jaanch: Copper lost 20(66.67) = 1333 cal; Water gained 100(13.33) = 1333 cal ✅

---

### Example 2: Ice + Warm Water (Partial Melting Trap!)

100 g of ice at 0 °C is mixed with 100 g of water at 40 °C (L_f = 80 cal/g, c_w = 1 cal/g°C). Find the final temperature and composition of the mixture!

**Solution:**
- Q_available from cooling 100 g water from 40 °C to 0 °C = 100 × 1 × 40 = **4000 cal**.
- Q_melt_all to melt all 100 g ice = 100 × 80 = **8000 cal**.
Since 4000 < 8000, NOT all ice melts!
- Mass of ice melted = 4000 / 80 = **50 g**.
- Final state: **Temperature = 0 °C**, consisting of **50 g ice + 150 g water**!

Jaanch:
- Jaanch: Agar bina check kiye formula lagate toh negative temperature (-20 °C) aa jata — jo impossible hai! ✅

---

### Example 3: Total Heat to Convert 10 g Ice (-10 °C) to Steam (100 °C)

Find the total heat (in calories) needed to convert 10 g of ice at -10 °C into steam at 100 °C (c_ice = 0.5 cal/g°C, c_w = 1 cal/g°C, L_f = 80 cal/g, L_v = 540 cal/g).

**Solution:**
- Step 1 (Ice -10 °C -> 0 °C): Q₁ = 10(0.5)(10) = **50 cal**.
- Step 2 (Melt ice at 0 °C): Q₂ = 10(80) = **800 cal**.
- Step 3 (Water 0 °C -> 100 °C): Q₃ = 10(1)(100) = **1000 cal**.
- Step 4 (Boil water at 100 °C): Q₄ = 10(540) = **5400 cal**.
Total Q = 50 + 800 + 1000 + 5400 = **7250 cal (≈ 30.45 kJ)**.

Jaanch:
- Jaanch: Notice boiling alone (5400 cal) takes ~75% of the entire heat! ✅

---

### Example 4: Mechanical Energy Converted to Heat (Waterfall Temperature Rise)

Water falls from a height of 420 m (g = 10 m/s², c_w = 4200 J kg⁻¹ K⁻¹). Assuming all potential energy converts into heat at the bottom, find the rise in temperature of the water.

**Solution:**
m g h = m c ΔT => ΔT = g h / c = (10 × 420) / 4200 = **1.0 °C**!

Jaanch:
- Jaanch: Independent of mass m; 4200 / 4200 = 1.0 °C ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Ice + water mixture mein bina check kiye seedha m_ice L_f + m_ice c T = m_w c (T_w - T) laga dena
- **Galat:** Example 2 mein 8000 + 100 T = 100(40 - T) => T = -20 °C!
- **Sahi:** Pehle hamesha check karo: **Q_available vs Q_melt_all**! Agar Q_available kam hai toh final T = **0 °C** aur sirf partial ice pighlegi!

### Galti 2: Ice aur Water ke liye same specific heat c = 1 cal/g°C use kar dena
- **Galat:** Ice ko -10 °C se 0 °C garam karne mein c = 1 laga diya!
- **Sahi:** Liquid water ka c = **1 cal/g°C (4200 J/kg K)** hai, jabki **ice aur steam ka c ≈ 0.5 cal/g°C (2100 J/kg K)** hota hai!

### Galti 3: Phase change ke waqt temperature badhta hua maan lena
- **Galat:** Ubalte paani ko aur tez aanch dene par uska temperature 100 °C se badh kar 120 °C ho jayega!
- **Sahi:** Normal pressure par jab tak saara paani steam na ban jaye, temperature **100 °C par fixed** rehta hai (tez aanch sirf boiling rate badhati hai)!

---

## Quick Recap

- **Sensible Heat:** Q = m c ΔT (water: 4200 J/kg K = 1 cal/g°C; ice: 0.5 cal/g°C).
- **Latent Heat:** Q = m L (ice L_f = 80 cal/g = 336 kJ/kg; steam L_v = 540 cal/g = 2260 kJ/kg).
- **Calorimetry:** Heat Lost = Heat Gained (always check partial melting/condensation first!).

---

## Practice Questions

*(Take c_water = 1 cal/g°C = 4200 J/kg K, c_ice = 0.5 cal/g°C, L_f = 80 cal/g, L_v = 540 cal/g, g = 10 m/s² unless stated otherwise.)*

### Question 1
How much heat (in Joules) is required to raise the temperature of 2 kg of water from 20 °C to 70 °C?

**Solution:**
Q = m c ΔT = 2 × 4200 × 50 = **420,000 J (420 kJ)**.

Jaanch:
- Jaanch: 100 × 4200 = 420 kJ ✅

---

### Question 2
200 g of water at 80 °C is mixed with 300 g of water at 30 °C. Find the final equilibrium temperature.

**Solution:**
200(80 - T) = 300(T - 30) => 2(80 - T) = 3(T - 30) => 160 - 2T = 3T - 90 => 5T = 250 => **T = 50 °C**.

Jaanch:
- Jaanch: Weighted average (2×80 + 3×30)/5 = 250/5 = 50 °C ✅

---

### Question 3
50 g of ice at 0 °C is mixed with 100 g of water at 60 °C. Find the final temperature of the mixture.

**Solution:**
- Q_melt_all = 50 × 80 = 4000 cal; Q_available = 100 × 60 = 6000 cal > 4000 cal => ALL ice melts!
- Leftover heat = 6000 - 4000 = 2000 cal warms total (50 + 100 = 150 g) water from 0 °C:
  T = 2000 / 150 = **40 / 3 ≈ 13.33 °C**.

Jaanch:
- Jaanch: Water lost 100(60 - 13.33) = 4667 cal; Ice gained 4000 + 50(13.33) = 4667 cal ✅

---

### Question 4
100 g of ice at 0 °C is mixed with 100 g of water at 20 °C. Find the final temperature and the mass of ice remaining unmelted.

**Solution:**
- Q_available = 100 × 20 = 2000 cal < Q_melt_all (8000 cal).
- Ice melted = 2000 / 80 = 25 g.
- Final temperature = **0 °C**, remaining unmelted ice = 100 - 25 = **75 g**.

Jaanch:
- Jaanch: 25 × 80 = 2000 cal ✅

---

### Question 5
10 g of steam at 100 °C is passed into 100 g of water at 20 °C. Find the final temperature of the mixture (check if all steam condenses!).

**Solution:**
- Heat needed to warm 100 g water to 100 °C = 100 × 80 = 8000 cal.
- Heat available from condensing 10 g steam = 10 × 540 = 5400 cal (< 8000 cal => ALL steam condenses!).
- 5400 + 10(100 - T) = 100(T - 20) => 6400 - 10 T = 100 T - 2000 => 110 T = 8400 => **T = 840 / 11 ≈ 76.36 °C**.

Jaanch:
- Jaanch: 5400 + 10(23.64) = 5636 cal = 100(56.36) cal ✅

---

### Question 6
A 100 g lead bullet (c_Pb = 125 J kg⁻¹ K⁻¹) moving at 250 m/s stops inside a wooden target. Assuming 50% of its kinetic energy heats the bullet, find the rise in temperature of the bullet.

**Solution:**
(1/2) × [(1/2) m v²] = m c ΔT => ΔT = v² / (4 c) = 62,500 / (4 × 125) = 62,500 / 500 = **125 °C**.

Jaanch:
- Jaanch: 62500 / 500 = 125 °C ✅

---

### Question 7
Why is water used as a coolant in car radiators and hot-water bottles?

**Solution:**
Paani ki **Specific Heat Capacity (4200 J kg⁻¹ K⁻¹)** aam liquids mein sabse zyada hoti hai — isliye woh apna temperature zyada badhaye bina bahut zyada heat absorb (aur store) kar sakta hai!

Jaanch:
- Jaanch: High c => small ΔT for large Q ✅

---

### Question 8
A copper calorimeter of mass 50 g (c = 0.1 cal/g°C) has a "water equivalent" W. Find W in grams.

**Solution:**
Water equivalent W = m c / c_water = 50 × 0.1 / 1 = **5 g** (absorbs the same heat as 5 g of water!).

Jaanch:
- Jaanch: 50(0.1) = 5(1) = 5 cal/°C ✅

---

### Question 9
An electric heater rated at 2100 W heats 1 kg of water from 20 °C to 100 °C. Find the minimum time required in seconds.

**Solution:**
Q = 1 × 4200 × 80 = 336,000 J.
t = Q / P = 336,000 / 2100 = **160 s** (2 min 40 s).

Jaanch:
- Jaanch: 3360 / 21 = 160 s ✅

---

### Question 10
How much ice at 0 °C can be melted by 10 g of steam at 100 °C if the final mixture is water at 0 °C?

**Solution:**
Heat released by 10 g steam condensing & cooling to 0 °C = 10(540) + 10(1)(100) = 5400 + 1000 = 6400 cal.
Mass of ice melted = 6400 / 80 = **80 g**.

Jaanch:
- Jaanch: 80 × 80 = 6400 cal ✅

---

### Question 11
State whether the following statements are True or False:
(a) During melting of ice at 0 °C, the average kinetic energy of the molecules increases.
(b) Increasing pressure lowers the melting point of ice.

**Solution:**
- (a) **False** ❌ — Temperature constant rehta hai => average KE constant! Latent heat sirf **Potential Energy** (breaking bonds) badhati hai!
- (b) **True** ✅ — Ice contracts upon melting, so pressure favors melting (Regelation!).

Jaanch:
- Jaanch: Core thermodynamic facts of phase change ✅

---

### Question 12
A 500 g metal block at 80 °C is placed on a large block of ice at 0 °C. If 50 g of ice melts by the time the metal cools to 0 °C, find the specific heat capacity of the metal in cal/g°C.

**Solution:**
500 × c × 80 = 50 × 80 => 500 c = 50 => **c = 0.1 cal/g°C** (420 J kg⁻¹ K⁻¹).

Jaanch:
- Jaanch: 500(0.1)(80) = 4000 cal = 50(80) ✅

---

Calorimetry aur Latent Heat ab tumhari pocket mein hain!

**Agle topic mein:** Heat ek jagah se doosri jagah kaise travel karti hai — **Conduction, Convection, aur Radiation** — chalo padhte hain [Heat Transfer: Conduction, Convection & Radiation](thermal-properties-of-matter-part4.md)!
