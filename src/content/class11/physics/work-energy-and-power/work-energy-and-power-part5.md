> **Class:** 11 | **Subject:** Physics | **Chapter 5:** Work, Energy and Power (Part 5)

# Power

> **Pichle topic se:** [Conservation of Mechanical Energy](work-energy-and-power-part4.md) mein humne total work aur energy transfer dekha. Par do motors agar same 10,000 J kaam karein — ek 2 second mein aur doosri 20 second mein — toh pehli motor **10 guna zyada powerful** hai! Work karne ke isi **rate** ko **Power** kehte hain!

---

## Kanhaiya ka Electric-Vehicle & Water-Pump Test

Kanhaiya ek EV powertrain aur agricultural pump efficiency tester hai. Usne dekha:
- Ek **1800 kg** elevator **2 m/s** constant speed se upar ja rahi hai (friction = **4000 N**, g = 10 m/s²). Motor ko total force **18,000 + 4,000 = 22,000 N** lagana padta hai, isliye motor ki instantaneous power **P = F v = 22,000 × 2 = 44,000 W (44 kW ≈ 59 hp)** hoti hai!
- Aur ghar ke bijli bill par likha **1 kWh (1 unit)** power ki nahi balki **Energy (3.6 × 10⁶ J)** ki unit hoti hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Average Power (P_avg) | Total work done divided by total time: **P_avg = W / t** (SI unit: **Watt**, 1 W = 1 J s⁻¹) |
| Instantaneous Power (P) | Kisi exact pal par work karne ka rate: **P = dW / dt = F · v = F v cos θ** |
| Horsepower (hp) | Motors/engines ki traditional unit: **1 hp = 746 W** |
| Kilowatt-hour (kWh) | Commercial unit of **ENERGY** (NOT power!): **1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J** |
| Efficiency (η) | Useful output power divided by total input power: **η = (P_out / P_in) × 100%** |

---

## 1. Derivation of Instantaneous Power (P = F · v)

Chhote time interval dt mein agar force **F** chhota displacement **dr** kare, toh work dW = F · dr.
Dono taraf dt se divide karne par:
```
  P = dW / dt = F · (dr / dt) = F · v = F v cos θ
```
*(Note: Power ek **scalar** quantity hai — dot product of Force and Velocity!)*

---

## 2. Two Classic Power Applications

1. **Water Pump Lifting Mass m to Height h (and ejecting at speed v):**
   - Sirf lift karne ki power: **P = (m / t) g h**
   - Lift + kinetic energy of jet: **P = (m / t) (g h + (1/2) v²)**
   - Agar efficiency η ho: **P_input = P_useful / η**

2. **Vehicle / Elevator at Constant Speed v:**
   - Constant speed => F_motor = Gravity component + Friction/Drag.
   - **P = F_motor × v**

---

## Solved Examples

### Example 1: Kanhaiya's Elevator Motor Power

An elevator of total mass 1800 kg moves upward at a constant speed of 2 m/s against a constant frictional force of 4000 N (g = 10 m/s²). Find the minimum power delivered by the motor in kW and in horsepower (1 hp = 746 W).

**Solution:**
- Total downward load to overcome: F = m g + f = 1800(10) + 4000 = 18,000 + 4000 = **22,000 N**.
- Power P = F v = 22,000 × 2 = **44,000 W = 44 kW**.
- In horsepower: 44,000 / 746 ≈ **59.0 hp**.

Jaanch:
- Jaanch: 18,000 + 4,000 = 22,000 N; 22 kN × 2 m/s = 44 kW ✅

---

### Example 2: Water Pump Lifting & Ejecting Water

A water pump lifts 300 kg of water per minute from a 20 m deep well and ejects it with a speed of 10 m/s (g = 10 m/s²). Find the useful power output of the pump.

**Solution:**
- Mass flow rate: m / t = 300 kg / 60 s = **5 kg/s**.
- Power = (m / t) [ g h + (1/2) v² ] = 5 [ (10)(20) + (1/2)(100) ] = 5 [ 200 + 50 ] = 5 × 250 = **1250 W (1.25 kW)**.

Jaanch:
- Jaanch: Lifting power = 5 × 200 = 1000 W; Jet KE power = 5 × 50 = 250 W; Total = 1250 W ✅

---

### Example 3: Instantaneous Power from Vectors F and v

A force F = (4 î + 3 ĵ - 2 k̂) N acts on a particle moving with velocity v = (2 î - 4 ĵ + 5 k̂) m/s. Find the instantaneous power delivered by the force.

**Solution:**
P = F · v = (4)(2) + (3)(-4) + (-2)(5) = 8 - 12 - 10 = **-14 W** (force is removing energy!).

Jaanch:
- Jaanch: 8 - 12 = -4; -4 - 10 = -14 W ✅

---

### Example 4: Pump Efficiency Check

An electric pump of input power 2 kW and efficiency 75% fills an overhead tank at a height of 15 m (g = 10 m/s²). How much water (in kg) can it pump in 1 minute?

**Solution:**
- Useful power: P_out = 0.75 × 2000 W = **1500 W**.
- Useful work in 60 s: W = 1500 × 60 = 90,000 J.
- m g h = 90,000 => m (10)(15) = 90,000 => 150 m = 90,000 => **m = 600 kg (600 litres)**.

Jaanch:
- Jaanch: 600 kg / 60 s = 10 kg/s => P_out = 10 × 10 × 15 = 1500 W = 75% of 2000 W ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: kWh (kilowatt-hour) ko Power ki unit samajh lena
- **Galat:** Hamare ghar mein 200 kWh power kharch hui!
- **Sahi:** kW power hai, par **kW × hour = Power × Time = ENERGY** (3.6 × 10⁶ J)!

### Galti 2: Water pump problem mein ejection speed ki KE ((1/2)mv²) bhool jana
- **Galat:** Sirf P = mgh/t nikal kar chhod dena jab paani speed v se bahar nikal raha ho!
- **Sahi:** Agar paani v speed se bahar nikle, toh pump ko mgh ke saath **(1/2)mv²** bhi dena padta hai!

### Galti 3: Average power aur Instantaneous power ko hamesha barabar maan lena
- **Galat:** Rest se constant acceleration par t second baad P_avg = F v_final!
- **Sahi:** Constant acceleration par speed 0 se v tak linearly badhti hai, isliye **P_avg = F v_avg = (1/2) F v_final** (instantaneous power ka exact AADHA)!

---

## Quick Recap

- **Average Power:** P_avg = W / t (SI unit: Watt = J/s; 1 hp = 746 W).
- **Instantaneous Power:** P = F · v = F v cos θ.
- **Energy unit:** 1 kWh = 3.6 × 10⁶ J.
- **Pump Power:** P_out = (m/t)(gh + (1/2)v²); **Efficiency:** η = P_out / P_in.

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A crane lifts a 500 kg steel beam vertically by 12 m in 10 s at constant speed. Find the average power developed by the crane.

**Solution:**
W = m g h = 500 × 10 × 12 = 60,000 J.
P = 60,000 / 10 = **6000 W (6 kW)**.

Jaanch:
- Jaanch: v = 1.2 m/s; F = 5000 N => P = 5000 × 1.2 = 6000 W ✅

---

### Question 2
A car engine delivers 30 kW of power while moving at a steady speed of 25 m/s on a level road. Find the total resistive force (friction + air drag) acting on the car.

**Solution:**
P = F v => F = P / v = 30,000 / 25 = **1200 N**.

Jaanch:
- Jaanch: 1200 × 25 = 30,000 W = 30 kW ✅

---

### Question 3
A 1000 kg car accelerates uniformly from rest to 20 m/s in 10 s on a smooth horizontal road. Find: (a) average power delivered, (b) instantaneous power at t = 10 s.

**Solution:**
- (a) W = ΔK = (1/2)(1000)(400) = 200,000 J => P_avg = 200,000 / 10 = **20 kW**.
- (b) a = 2 m/s² => F = 2000 N => P(10) = F v(10) = 2000 × 20 = **40 kW** (double of P_avg!).

Jaanch:
- Jaanch: P_avg = (1/2) P_final = 20 kW ✅

---

### Question 4
A 60 kg athlete runs up a flight of 40 steps, each 15 cm high, in 12 s. Find the athlete's average power output.

**Solution:**
Total height h = 40 × 0.15 = 6 m.
W = 60 × 10 × 6 = 3600 J => P = 3600 / 12 = **300 W**.

Jaanch:
- Jaanch: 300 × 12 = 3600 J ✅

---

### Question 5
Convert 5 kWh into Joules.

**Solution:**
5 × 3.6 × 10⁶ J = **1.8 × 10⁷ J (18 MJ)**.

Jaanch:
- Jaanch: 5 × 3.6 = 18 ✅

---

### Question 6
A force F = (2 î + 5 ĵ) N moves a body with velocity v = (3 î + 4 ĵ) m/s. Find the instantaneous power.

**Solution:**
P = F · v = (2)(3) + (5)(4) = 6 + 20 = **26 W**.

Jaanch:
- Jaanch: 6 + 20 = 26 W ✅

---

### Question 7
A water pump with 80% efficiency lifts 400 kg of water per minute to a height of 12 m (negligible exit speed). Find the electrical input power required.

**Solution:**
- Useful power: P_out = (400 / 60) × 10 × 12 = 400 × 2 = 800 W.
- Input power: P_in = 800 / 0.80 = **1000 W (1 kW)**.

Jaanch:
- Jaanch: 80% of 1000 W = 800 W ✅

---

### Question 8
A wind turbine's blades sweep an area A = 20 m². Wind of density ρ = 1.2 kg/m³ blows perpendicularly at speed v = 10 m/s. If the turbine converts 25% of the wind's kinetic energy into electricity, find the electrical power output.

**Solution:**
- Mass of air hitting per second: dm/dt = ρ A v = 1.2 × 20 × 10 = 240 kg/s.
- Wind KE power: P_wind = (1/2) (dm/dt) v² = (1/2)(240)(100) = 12,000 W (12 kW).
- Electrical output (25%): P_elec = 0.25 × 12,000 = **3000 W (3 kW)**.

Jaanch:
- Jaanch: Formula P_wind = (1/2) ρ A v³ = 0.5(1.2)(20)(1000) = 12 kW; 25% = 3 kW ✅

---

### Question 9
A 500 kg car climbs a smooth hill inclined at 30° at a steady speed of 10 m/s. Find the power delivered by the engine.

**Solution:**
F_engine = m g sin 30° = 500 × 10 × (1/2) = 2500 N.
P = F v = 2500 × 10 = **25,000 W (25 kW)**.

Jaanch:
- Jaanch: Vertical climb speed = 10 sin 30° = 5 m/s => P = mg v_y = 5000 × 5 = 25 kW ✅

---

### Question 10
A hosepipe ejects water horizontally at 10 m/s at a rate of 4 kg/s. Find the power of the pump supplying this kinetic energy.

**Solution:**
P = (1/2) (m/t) v² = (1/2)(4)(100) = **200 W**.

Jaanch:
- Jaanch: 2 × 100 = 200 W ✅

---

### Question 11
State whether the following statements are True or False:
(a) Power is a vector quantity because it involves force and velocity.
(b) 1 horsepower is greater than 500 Watts.

**Solution:**
- (a) **False** ❌ — Power = F · v (dot product), jo hamesha **scalar** hota hai!
- (b) **True** ✅ — 1 hp = 746 W > 500 W.

Jaanch:
- Jaanch: Dot product gives scalar; 746 > 500 ✅

---

### Question 12
A machine delivers constant power of 500 W to lift a 25 kg load vertically upward. What is the maximum steady upward speed at which the load can be lifted?

**Solution:**
F = m g = 250 N.
v = P / F = 500 / 250 = **2 m/s**.

Jaanch:
- Jaanch: 250 N × 2 m/s = 500 W ✅

---

Power aur efficiency ab tumhare liye bilkul clear hain!

**Agle topic mein:** Jab do bodies aapas mein takrati hain toh momentum aur energy dono ka khel kya hota hai — chalo padhte hain [Collisions (Elastic & Inelastic in 1D and 2D)](work-energy-and-power-part6.md)!
