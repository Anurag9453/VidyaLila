> **Class:** 11 | **Subject:** Physics | **Chapter 11:** Thermodynamics (Part 5)

# Reversible Processes & the Carnot Engine

> **Pichle topic se:** [Second Law & Heat Engines](thermodynamics-part4.md) mein humne dekha ki koi bhi engine 100% efficient nahi ho sakta. Par do fixed temperatures **T₁ (hot)** aur **T₂ (cold)** ke beech **MAXIMUM POSSIBLE** efficiency kitni ho sakti hai? 1824 mein Sadi Carnot ne iska exact jawab diya — **Carnot Engine (η = 1 - T₂ / T₁)**!

---

## Krupakar ka Carnot-Cycle Efficiency Audit

Krupakar ek theoretical-thermodynamics designer hai. Ek inventor ne daawa kiya: "Mera engine 327 °C (600 K) aur 27 °C (300 K) ke beech **60% efficiency** deta hai!"

Krupakar ne 3 second mein Carnot limit check ki: **η_max = 1 - (300 / 600) = 0.50 = 50%!** "Bhai, 60% efficiency in do temperatures ke beech **physically IMPOSSIBLE** hai — chahe tum kisi bhi working gas ya frictionless material ka engine bana lo!"

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Reversible Process | Aisa idealized process jise exact reverse order mein chalakar system aur surroundings dono ko bina koi nishaan chhode original state mein laaya ja sake (quasi-static + zero friction/dissipation!) |
| Irreversible Process | Sabhi real-world spontaneous processes (friction, free expansion, heat conduction across finite ΔT) |
| Carnot Cycle | 4 reversible steps wala ideal cycle: (1) Isothermal expansion at T₁, (2) Adiabatic expansion T₁ -> T₂, (3) Isothermal compression at T₂, (4) Adiabatic compression T₂ -> T₁ |
| Carnot Efficiency (η_C) | **η_C = 1 - T₂ / T₁** (T₁, T₂ MUST be in Kelvin! Independent of the working gas!) |
| Carnot's Theorem | Do temperatures T₁ aur T₂ ke beech koi bhi real engine Carnot engine se zyada efficient nahi ho sakta (**η_real ≤ η_Carnot**) |

---

## 1. The Carnot Cycle & Efficiency Formula

Carnot cycle mein do isotherms (T₁, T₂) aur do adiabats aapas mein jud kar ek loop banate hain. Isme Q₂ / Q₁ = T₂ / T₁ exact prove hota hai (from V₂/V₁ = V₃/V₄), jisse milta hai:

```
  Carnot Engine Efficiency:        η_Carnot = 1 - (T₂ / T₁)
  Carnot Refrigerator COP:         α_Carnot = T₂ / (T₁ - T₂)
  Carnot Heat Pump COP:            COP_pump = T₁ / (T₁ - T₂)
```

**3 Golden Carnot Insights:**
1. **T₁ aur T₂ HAMESHA Kelvin mein!**
2. **100% efficiency impossible:** η = 1 tabhi hoga jab T₂ = 0 K (Absolute Zero, jo unreachable hai!) ya T₁ = ∞.
3. **Lowering T₂ helps MORE than raising T₁ by the same ΔT!**
   (Kyunki ΔT ko chhote T₂ se ghatane par T₂/T₁ zyada tezi se ghatta hai!)

---

## Solved Examples

### Example 1: Carnot Engine Between 227 °C and 27 °C

A Carnot engine operates between a hot reservoir at 227 °C and a cold sink at 27 °C. If it absorbs 1000 J of heat per cycle from the source, find: (a) its efficiency, (b) work done per cycle, (c) heat rejected to the sink.

**Solution:**
Convert to Kelvin: T₁ = 227 + 273 = **500 K**; T₂ = 27 + 273 = **300 K**.
- (a) η = 1 - 300 / 500 = 1 - 0.60 = **0.40 (40%)**.
- (b) W = η Q₁ = 0.40 × 1000 = **400 J**.
- (c) Q₂ = Q₁ - W = 1000 - 400 = **600 J**.

Jaanch:
- Jaanch: Check Q₂/Q₁ = 600/1000 = 0.60 = 300/500 = T₂/T₁ ✅

---

### Example 2: Carnot Refrigerator Freezing Water at 0 °C in a 27 °C Room

A Carnot refrigerator keeps its freezer at 0 °C (273 K) in a room at 27 °C (300 K). Find its maximum possible COP and the minimum work needed to extract 2730 J of heat from the freezer.

**Solution:**
- COP α = T₂ / (T₁ - T₂) = 273 / (300 - 273) = 273 / 27 = **91 / 9 ≈ 10.11**.
- Minimum work W = Q₂ / α = 2730 / (273 / 27) = 10 × 27 = **270 J**!

Jaanch:
- Jaanch: Q₁ = 2730 + 270 = 3000 J; check Q₁/Q₂ = 3000/2730 = 300/273 = T₁/T₂ ✅

---

### Example 3: Raising Source Temp vs Lowering Sink Temp by 50 K

A Carnot engine operates between T₁ = 500 K and T₂ = 300 K (η = 40%). Which gives a HIGHER new efficiency:
(a) Raising T₁ by 50 K (to 550 K), or
(b) Lowering T₂ by 50 K (to 250 K)?

**Solution:**
- (a) Raising T₁: η_a = 1 - 300 / 550 = 250 / 550 = **45.5%**.
- (b) Lowering T₂: η_b = 1 - 250 / 500 = 250 / 500 = **50.0%**.
**Lowering the sink temperature T₂ by 50 K is ALWAYS more effective!**

Jaanch:
- Jaanch: Same numerator (250 K) over smaller denominator (500 vs 550) => 50% > 45.5% ✅

---

### Example 4: Two Carnot Engines in Series (Equal Efficiency Condition!)

Carnot Engine 1 operates between T₁ = 900 K and an intermediate temperature T, while Carnot Engine 2 operates between T and T₂ = 400 K. Find T if both engines have: (a) equal efficiencies, (b) equal work outputs (when Q₂ of Engine 1 feeds directly into Engine 2).

**Solution:**
- (a) Equal efficiencies: 1 - T / T₁ = 1 - T₂ / T => T² = T₁ T₂ => **T = √(T₁ T₂)** = √(900 × 400) = **600 K** (Geometric Mean!).
- (b) Equal work outputs (Q₁ - Q = Q - Q₂ => T₁ - T = T - T₂): **T = (T₁ + T₂) / 2** = (900 + 400) / 2 = **650 K** (Arithmetic Mean!).

Jaanch:
- Jaanch: At T = 600 K: η₁ = 1 - 600/900 = 1/3; η₂ = 1 - 400/600 = 1/3 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Carnot efficiency η = 1 - T₂ / T₁ mein Celsius temperatures rakh dena
- **Galat:** 227 °C aur 27 °C par η = 1 - 27/227 = 88%!
- **Sahi:** **HAMESHA Kelvin** rakhna zaroori hai: 1 - 300/500 = **40%**!

### Galti 2: Carnot efficiency ko working gas (monatomic vs diatomic) par depend maanna
- **Galat:** Monatomic gas (γ = 5/3) use karne se Carnot engine zyada efficient ho jayega!
- **Sahi:** Carnot efficiency **SIRF T₁ aur T₂** par depend karti hai — working substance (ideal gas, steam, etc.) par bilkul NAHI!

### Galti 3: Carnot Refrigerator COP mein T₁ / (T₁ - T₂) likh dena
- **Galat:** Refrigerator COP = T₁ / (T₁ - T₂)!
- **Sahi:** Refrigerator ke liye **T₂ / (T₁ - T₂)** (thanda temperature upar!); Heat Pump ke liye **T₁ / (T₁ - T₂)**!

---

## Quick Recap

- **Reversible:** Quasi-static + zero dissipation; **Carnot Cycle:** 2 isotherms + 2 adiabats.
- **Carnot Engine:** **η = 1 - T₂ / T₁** (Kelvin! Independent of working substance; max possible efficiency!).
- **Carnot Fridge:** **α = T₂ / (T₁ - T₂)**; **Carnot Heat Pump:** **T₁ / (T₁ - T₂)**.
- **Two Carnot engines in series:** Equal η => **T = √(T₁ T₂)**; Equal W => **T = (T₁ + T₂)/2**.

---

## Practice Questions

### Question 1
A Carnot engine operates between 327 °C and 27 °C. Find its efficiency.

**Solution:**
T₁ = 600 K, T₂ = 300 K => η = 1 - 300 / 600 = **0.50 (50%)**.

Jaanch:
- Jaanch: 1 - 1/2 = 50% ✅

---

### Question 2
A Carnot engine has an efficiency of 40% when its sink is at 27 °C (300 K). By how many Kelvin must the source temperature be increased to raise its efficiency to 50%?

**Solution:**
- Initially: 1 - 300 / T₁ = 0.40 => 300 / T₁ = 0.60 => T₁ = **500 K**.
- Target (50%): 1 - 300 / T₁' = 0.50 => T₁' = **600 K**.
- Increase needed = 600 - 500 = **100 K**.

Jaanch:
- Jaanch: 1 - 300/600 = 50% ✅

---

### Question 3
A Carnot engine absorbs 6000 J from a source at 500 K and rejects 3600 J to a sink. Find the temperature of the sink in Kelvin.

**Solution:**
T₂ / T₁ = Q₂ / Q₁ => T₂ / 500 = 3600 / 6000 = 0.60 => **T₂ = 300 K (27 °C)**.

Jaanch:
- Jaanch: η = 1 - 0.60 = 40% ✅

---

### Question 4
Find the maximum possible COP of a refrigerator operating between -13 °C (260 K) and 27 °C (300 K).

**Solution:**
α = T₂ / (T₁ - T₂) = 260 / (300 - 260) = 260 / 40 = **6.5**.

Jaanch:
- Jaanch: 260 / 40 = 6.5 ✅

---

### Question 5
An engineer claims to have built an engine operating between 127 °C (400 K) and 27 °C (300 K) with an efficiency of 30%. Is this claim possible?

**Solution:**
Maximum possible (Carnot) efficiency = 1 - 300 / 400 = **25%**.
Since 30% > 25%, the claim is **IMPOSSIBLE** (violates Carnot's Theorem / Second Law)!

Jaanch:
- Jaanch: No engine can beat Carnot's 25% between 400 K and 300 K ✅

---

### Question 6
Two Carnot engines work in series between 1600 K and 400 K with equal efficiencies. Find the intermediate temperature T.

**Solution:**
T = √(1600 × 400) = √(640,000) = **800 K**.

Jaanch:
- Jaanch: η₁ = 1 - 800/1600 = 50%; η₂ = 1 - 400/800 = 50% ✅

---

### Question 7
In Question 6 (1600 K and 400 K), what intermediate temperature T gives equal work outputs from both engines?

**Solution:**
T = (1600 + 400) / 2 = **1000 K**.

Jaanch:
- Jaanch: 1600 - 1000 = 600 = 1000 - 400 ✅

---

### Question 8
A Carnot engine has efficiency 1/6. When the sink temperature is reduced by 62 K, its efficiency doubles to 1/3. Find the original source and sink temperatures T₁ and T₂!

**Solution:**
- Initially: 1 - T₂ / T₁ = 1/6 => T₂ / T₁ = 5/6.
- After cooling sink by 62 K: 1 - (T₂ - 62) / T₁ = 1/3 => (T₂ - 62) / T₁ = 2/3 = 4/6.
Subtract the two: 62 / T₁ = 5/6 - 4/6 = 1/6 => **T₁ = 62 × 6 = 372 K (99 °C)**!
Then **T₂ = (5/6) × 372 = 310 K (37 °C)**!

Jaanch:
- Jaanch: 1 - 310/372 = 62/372 = 1/6; 1 - 248/372 = 124/372 = 1/3 ✅

---

### Question 9
A Carnot freezer freezes 1 kg of water at 0 °C (L_f = 3.36 × 10⁵ J/kg) in a room at 27 °C (300 K). Find the minimum electrical work required (in kJ).

**Solution:**
α = 273 / (300 - 273) = 273 / 27 ≈ 10.11.
W = Q₂ / α = (3.36 × 10⁵) × (27 / 273) ≈ **33,230 J ≈ 33.2 kJ**.

Jaanch:
- Jaanch: ~10× less work than heat removed! ✅

---

### Question 10
During which of the four steps of a Carnot cycle does the working gas absorb heat from the hot reservoir?

**Solution:**
During **Step 1: Reversible Isothermal Expansion at temperature T₁**! (And it rejects heat during Step 3: Isothermal Compression at T₂; Steps 2 and 4 are adiabatic with ΔQ = 0!)

Jaanch:
- Jaanch: All heat exchange in a Carnot cycle occurs strictly at constant temperatures T₁ and T₂ ✅

---

### Question 11
State whether the following statements are True or False:
(a) Every reversible heat engine operating between the same two temperatures T₁ and T₂ has the exact same efficiency.
(b) A real process with friction can be made reversible simply by running it slowly.

**Solution:**
- (a) **True** ✅ — Carnot's Theorem!
- (b) **False** ❌ — Friction always dissipates mechanical work into heat irreversibly, regardless of how slowly it moves!

Jaanch:
- Jaanch: Reversible requires BOTH quasi-static AND zero dissipative forces ✅

---

### Question 12
A Carnot heat pump operates between outside cold air at 0 °C (273 K) and inside room air at 27 °C (300 K). Find its maximum COP as a room heater.

**Solution:**
COP_pump = T₁ / (T₁ - T₂) = 300 / (300 - 273) = 300 / 27 = **100 / 9 ≈ 11.11**.

Jaanch:
- Jaanch: COP_pump = 1 + α = 1 + 10.11 = 11.11 ✅

---

Carnot Engine aur Reversible Cycles ab tumhare liye bilkul clear hain!

**Agle topic mein:** Poore Thermodynamics chapter ke sabhi laws aur cycles ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](thermodynamics-part6.md) mein!
