# Chapter: Current Electricity (Part 6)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Meter Bridge and Potentiometer](current-electricity-part5.md)

---

## Physics Lab ka "Circuit Clinic" Challenge

School ke lab fest mein **Babita** ko "Circuit Clinic" challenge mila, jahan 4 alag-alag benches par alag chapters ke nahi balki Current Electricity ke **mixed** problems the:
- Bench 1 par ek wire ko 3 guna lamba kheencha gaya tha aur uski temperature resistivity bhi check karni thi;
- Bench 2 par do batteries wala complex loop tha;
- Bench 3 par Meter Bridge mein ek parallel resistor jodne par null point khisak gaya tha;
- Bench 4 par Potentiometer wire mein series resistor lagakar sensitivity badhayi gayi thi!

Chalo Babita ke saath sab kuch mila kar solve karte hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula |
|---|---|---|
| Microscopic electron motion / current density | Drift velocity & mobility | I = n e A v_d; v_d = eEτ/m = μE; J = σE |
| Wire stretched to n× length (volume constant) | Geometry + Resistivity | R' = n² R (ρ unchanged!) |
| Resistance change with temperature | Linear temperature formula | R_T = R₀[1 + α(T − T₀)] (metals +α, semicond −α) |
| Real cell discharging / charging | Terminal voltage | Discharging: V = ε − Ir; Charging: V = ε + Ir |
| Multi-battery / multi-loop network | Kirchhoff's Rules (KCL & KVL) | Σ I_in = Σ I_out; Σ ΔV = 0 |
| Diamond network of 5 resistors | Check Wheatstone balance first! | If P/Q = R/S, remove middle branch! |
| Meter bridge / Potentiometer null point | Ratio formulas (zero current at null) | R/S = l/(100−l); ε₁/ε₂ = l₁/l₂; r = R(l₁−l₂)/l₂ |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Stretched Wire + Power Dissipated
A uniform copper wire of resistance **4 Ω** is stretched uniformly until its length becomes **3 times** its original length. It is then connected across a **12 V** ideal battery. Find (a) the new resistance, (b) the current drawn, and (c) the power dissipated.

**Hal (Solution):**
- (a) Stretching factor n = 3 (volume constant) ⟹ **R' = n² R = (3)² × 4 = 36 Ω**.
- (b) Current I = V / R' = 12 / 36 = **1/3 A ≈ 0.33 A**.
- (c) Power P = V² / R' = (12)² / 36 = 144 / 36 = **4.0 W**.
- **Jaanch:** P = V I = 12 × (1/3) = 4.0 W ✅.

### Example 2: Meter Bridge with Parallel Shunt Shift
In a meter bridge, the null point is at **l₁ = 50 cm** with resistances **R** and **S** in the two gaps. When a **12 Ω** resistor is connected in **parallel** with S, the null point shifts to **l₂ = 60 cm**. Find the values of **R** and **S**.

**Hal (Solution):**
- Pehle case (l₁ = 50 cm): R / S = 50 / (100 − 50) = 1 ⟹ **R = S**!
- Doosre case mein S ke parallel mein 12 Ω joda ⟹ naya right resistance **S' = (12 S) / (12 + S)**.
- Ab l₂ = 60 cm: R / S' = 60 / (100 − 60) = 60 / 40 = 3 / 2.
- Kyunki R = S, S / S' = 3 / 2 ⟹ (12 + S) / 12 = 3 / 2
  ⟹ 12 + S = 18 ⟹ **S = 6 Ω**, aur isliye **R = 6 Ω**!
- **Jaanch:** S' = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω; R / S' = 6 / 4 = 3/2 = 60/40 ✅.

### Example 3: Mixed Grouping of Cells (Series + Parallel)
Six identical cells, each of EMF **2 V** and internal resistance **1 Ω**, are arranged in **2 parallel rows** of **3 cells in series** each. This battery pack is connected across an external resistor **R = 4.5 Ω**. Find the current through R.

**Hal (Solution):**
- Har row mein 3 cells series mein: ε_row = 3 × 2 = **6 V**, r_row = 3 × 1 = **3 Ω**.
- Aisi 2 identical rows parallel mein:
  - **ε_eq = 6 V** (parallel mein identical rows ka EMF same rehta hai!)
  - **r_eq = 3 / 2 = 1.5 Ω**.
- External resistor R = 4.5 Ω mein current:
  **I = ε_eq / (R + r_eq) = 6 / (4.5 + 1.5) = 6 / 6.0 = 1.0 A**.
- **Jaanch:** 3 cells series = 6 V, 3 Ω; 2 parallel = 6 V, 1.5 Ω; 6 / (4.5 + 1.5) = 1.0 A ✅.

### Example 4: Potentiometer Driver Circuit + Unknown EMF
A 5 m long potentiometer wire has resistance **10 Ω**. It is connected in series with a **4 V** driver battery (internal resistance **2 Ω**) and an external series resistor of **8 Ω**.
(a) Calculate the potential gradient **k** along the wire.
(b) At what length will a test cell of EMF **1.2 V** balance?

**Hal (Solution):**
- (a) Total resistance of driver loop = 10 + 2 + 8 = **20 Ω**.
  Current in wire: I = 4 / 20 = **0.2 A**.
  Voltage across the 5 m wire: V_wire = I × R_wire = 0.2 × 10 = **2.0 V**.
  Potential gradient: **k = V_wire / L = 2.0 / 5 = 0.4 V/m**.
- (b) Balance length for ε = 1.2 V:
  ε = k l ⟹ **l = ε / k = 1.2 / 0.4 = 3.0 m = 300 cm**.
- **Jaanch:** 3.0 m × 0.4 V/m = 1.2 V ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **Wire ko n guna kheenchne par R' = n R likh dena:**
   - *Galat:* Length 3 guna hui to resistance 3 guna (12 Ω) hoga.
   - *Sahi:* Kheenchne par wire patla bhi hota hai (A' = A/n, kyunki volume constant hai!) ⟹ **R' = n² R** (3² = 9 guna = 36 Ω)!
2. **Potentiometer mein driver cell ka poora EMF seedha wire par maan lena:**
   - *Galat:* Example 4 mein k = 4 V / 5 m = 0.8 V/m nikaal dena!
   - *Sahi:* Driver circuit mein series resistor aur internal resistance par bhi voltage drop hota hai! Pehle **I** nikaalo, phir **V_wire = I × R_wire** nikaalo, tab **k = V_wire / L** karo!
3. **Parallel mein lage unequal EMF wale cells ka simple average le lena:**
   - *Galat:* 2 V aur 4 V cells parallel mein hain to ε_eq = (2 + 4)/2 = 3 V likh dena (bina r₁, r₂ dekhe!).
   - *Sahi:* Simple average sirf tab sahi hai jab r₁ = r₂ ho! General formula hamesha **ε_eq = (ε₁r₂ + ε₂r₁)/(r₁ + r₂)** use karo!

---

## Practice Questions (Mixed Chapter Challenge)

1. A copper wire of resistance 2 Ω is stretched to increase its length by 100% (double its length). Find its new resistance and state whether its resistivity changes.
2. In a copper wire of cross-section 1.0 × 10⁻⁶ m², a current of 1.6 A flows. If n = 8.0 × 10²⁸ m⁻³, find the drift velocity v_d.
3. A carbon resistor has bands **Red, Green, Yellow, Gold**. Write its resistance and tolerance.
4. Two resistors of 6 Ω and 3 Ω are connected in parallel, and this combination is connected in series with an 8 Ω resistor across a 20 V battery of negligible internal resistance. Find the current through the 3 Ω resistor.
5. A battery of EMF 10 V and internal resistance 3 Ω is connected to a resistor R. If the current in the circuit is 0.5 A, find (a) the resistance R, and (b) the terminal voltage of the battery.
6. In a balanced Wheatstone bridge, P = 8 Ω, Q = 12 Ω, R = 6 Ω, and S = 9 Ω. A 10 V ideal battery is connected across AC. Calculate the total current drawn from the battery.
7. Two batteries of 8 V (internal resistance 1 Ω) and 4 V (internal resistance 1 Ω) are connected in parallel (positive to positive) across an external resistor of 2.5 Ω. Using Kirchhoff's rules, find the current in the 2.5 Ω resistor.
8. In a meter bridge, the null point is found at 30 cm from the left end. If a 14 Ω resistor is in the right gap, find the unknown resistor in the left gap.
9. A 2 m long potentiometer wire of resistance 8 Ω is connected in series with a 5 V battery (r = 0) and a 12 Ω series resistor. Find the potential gradient along the wire in V/m.
10. A cell gives a balance length of 75 cm on a potentiometer wire in open circuit. When shunted by a 5 Ω resistor, the balance length drops to 50 cm. Find the internal resistance of the cell.

### Answers

1. Length doubled (n = 2) ⟹ **R' = n² R = 4 × 2 = 8 Ω**. Resistivity ρ **bilkul nahi badalti** (remains unchanged)!
   Jaanch: 2² × 2 = 8 Ω ✅.

2. v_d = I / (n e A) = 1.6 / (8.0 × 10²⁸ × 1.6 × 10⁻¹⁹ × 1.0 × 10⁻⁶) = 1 / (8.0 × 10³) = **1.25 × 10⁻⁴ m/s**.
   Jaanch: 1.6 kat gaya; 1/8000 = 1.25 × 10⁻⁴ m/s ✅.

3. Red (2), Green (5), Yellow (10⁴), Gold (±5%) ⟹ **25 × 10⁴ Ω ± 5% = 250 kΩ ± 5%**.

4. 6 Ω || 3 Ω = (6 × 3)/(6 + 3) = 2 Ω.
   Total R = 2 + 8 = 10 Ω ⟹ Main current I = 20 / 10 = 2.0 A.
   Parallel combination par voltage V_p = 2.0 × 2 = 4.0 V.
   3 Ω resistor mein current: **I_3Ω = 4.0 / 3 ≈ 1.33 A**.
   Jaanch: I_6Ω = 4/6 = 2/3 A; 2/3 + 4/3 = 2.0 A ✅.

5. (a) I = ε / (R + r) ⟹ 0.5 = 10 / (R + 3) ⟹ R + 3 = 20 ⟹ **R = 17 Ω**.
   (b) Terminal voltage V = ε − I r = 10 − (0.5 × 3) = **8.5 V** (also V = IR = 0.5 × 17 = 8.5 V).
   Jaanch: 10 / (17 + 3) = 0.5 A ✅.

6. Check balance: 8/12 = 2/3, 6/9 = 2/3 ⟹ balanced!
   Top branch = 8 + 12 = 20 Ω; Bottom branch = 6 + 9 = 15 Ω.
   R_eq = (20 × 15) / (20 + 15) = 300 / 35 = 60 / 7 Ω.
   Current I = V / R_eq = 10 / (60/7) = 70 / 60 = **7/6 A ≈ 1.17 A**.
   Jaanch: I_top = 10/20 = 0.5 A, I_bot = 10/15 = 2/3 A ⟹ 1/2 + 2/3 = 7/6 A ✅.

7. Parallel cells shortcut (same r = 1 Ω): ε_eq = (8 + 4)/2 = 6 V, r_eq = 1/2 = 0.5 Ω.
   Current in 2.5 Ω resistor: **I = 6 / (2.5 + 0.5) = 6 / 3.0 = 2.0 A**.
   Jaanch: KVL check — V_load = 2.0 × 2.5 = 5 V; I₁ = (8−5)/1 = 3 A, I₂ = (4−5)/1 = −1 A ⟹ I₁ + I₂ = 2.0 A ✅.

8. R = S × [ l / (100 − l) ] = 14 × (30 / 70) = 14 × (3 / 7) = **6.0 Ω**.
   Jaanch: 6/14 = 3/7 = 30/70 ✅.

9. Total R = 8 + 12 = 20 Ω ⟹ I = 5 / 20 = 0.25 A.
   V_wire = I × R_wire = 0.25 × 8 = 2.0 V.
   Potential gradient **k = V_wire / L = 2.0 / 2 = 1.0 V/m**.
   Jaanch: 0.25 × 8 / 2 = 1.0 V/m ✅.

10. r = R × [ (l₁ − l₂) / l₂ ] = 5 × [ (75 − 50) / 50 ] = 5 × (25 / 50) = **2.5 Ω**.
    Jaanch: 5 × 0.5 = 2.5 Ω ✅.

---

## Chapter Ka Saar: Current Electricity

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Drift Velocity & Mobility | I = n e A v_d; v_d = eEτ/m = μE; J = σ E | I is scalar, J is vector; v_d ~ 10⁻⁴ m/s |
| Resistivity & Temp Dependence | R = ρ L/A; R_T = R₀[1 + α ΔT]; Stretched: R' = n²R | Metals (+α), Alloys (tiny +α), Semiconductors (−α) |
| Cells & Internal Resistance | Discharging: V = ε − Ir; Charging: V = ε + Ir | Max load power at R = r (P_max = ε²/4r) |
| Kirchhoff's Rules | KCL: Σ I_in = Σ I_out; KVL: Σ ΔV = 0 | KCL = Charge conservation; KVL = Energy conservation |
| Wheatstone & Meter Bridge | Balanced: P/Q = R/S; Meter bridge: R/S = l/(100−l) | Remove middle branch ONLY when balanced |
| Potentiometer | V = k l; ε₁/ε₂ = l₁/l₂; r = R(l₁ − l₂)/l₂ | Draws ZERO current at null point; smaller k = higher sensitivity |

---

Ab tum Current Electricity ke microscopic principles se lekar complex Kirchhoff circuits aur lab instruments tak sab kuch solve kar sakte ho!

**Agle chapter mein:** Jab charges kisi taar mein chalte hain, to apne chaaron taraf ek naya jaadu paida karte hain — **Magnetic Field**! Chaliye padhte hain **Moving Charges and Magnetism**!
