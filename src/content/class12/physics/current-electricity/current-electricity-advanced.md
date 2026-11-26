> **Class:** 12 | **Subject:** Physics | **Chapter 3:** Current Electricity (Gehrai Mein — Advanced Level)

# Current Electricity — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](current-electricity.md) se [Topic 6](current-electricity-part6.md)) mein humne drift velocity, cells, Kirchhoff's rules, Wheatstone bridge aur potentiometer cover kiye. Ab is **Gehrai Mein** section mein hum chaar legendary circuit-solving superpowers dekhenge — **Cube of 12 Identical Resistors (Body, Face & Edge Diagonals)**, **Infinite Resistor Ladder**, **Symmetry / Equipotential Folding Method**, aur **RC Charging & Discharging Transients**!

---

## Shweta ka Circuit-Theory Research Desk

**Shweta** ek electrical network researcher hai. Uske whiteboard par teen famous puzzles 10 second mein solve hone ke liye tayaar hain:
1. Ek **Cube** ki sabhi 12 edges par **R** resistors lage hain — bina 12 Kirchhoff equations likhe, sirf **Symmetry** se body diagonal (**5R/6**), face diagonal (**3R/4**), aur adjacent edge (**7R/12**) ka resistance kaise nikaalein?
2. Anant (infinite) resistor ladder ka equivalent resistance kaise nikaalein?
3. Jab ek capacitor **C** ko resistor **R** ke through battery **V₀** se charge kiya jaaye, to **Time Constant τ = R C** par charge aur current kaise exponentially badalte hain?

---

## 1. Cube of 12 Identical Resistors (Symmetry Masterpiece!)

Maan lo ek cube ki sabhi 12 edges par identical resistor **R** laga hai:
- **Across Body Diagonal (A to G — sabse door corners):**
  - Corner A se current **I** teen symmetric edges mein barabar **I/3** bant'ta hai.
  - Har ek aage do edges mein **I/6** bant'ta hai.
  - Phir opposite corner G par teen edges se **I/3** milkar bahar **I** nikalta hai!
  - KVL along any 3-edge path A → G: ΔV = (I/3)R + (I/6)R + (I/3)R = **(5/6) I R**!
  - Isliye: **R_body = (5 / 6) R**!
- **Across Adjacent Corners (Edge — A to B):** **R_edge = (7 / 12) R** (by superposition of injecting I at A and extracting I at B!).
- **Across Face Diagonal (A to C):** **R_face = (3 / 4) R** (equipotential symmetry cuts out 2 zero-current resistors!).

```
   Cube of 12 Resistors (each R):
   Body diagonal  =  5R / 6  (0.833 R)
   Face diagonal  =  3R / 4  (0.750 R)
   Adjacent edge  =  7R / 12 (0.583 R)
```

---

## 2. Infinite Resistor Ladder Network

Repeating ladder mein har section mein series **R₁** aur shunt **R₂** ho to:
**R_eq = R₁ + [ R₂ R_eq / (R₂ + R_eq) ]**
- Special case **R₁ = R₂ = R**: R_eq² − R R_eq − R² = 0 ⟹

```
   R_eq = [ (1 + √5) / 2 ] R ≈ 1.618 R
```

---

## 3. RC Charging & Discharging Transients (Time Constant τ = R C)

Jab uncharged capacitor **C** ko resistor **R** ke through DC battery **V₀** se joda jaata hai (switch closed at t = 0):
- **Time Constant:** **τ = R C** (unit: **seconds**! Check: Ω × F = (V/A)(C/V) = C/A = s!).
- **Charging (at time t):**
  - Charge: **q(t) = Q₀ (1 − e^(−t/τ))**  (jahan Q₀ = C V₀).
  - Current: **I(t) = I₀ e^(−t/τ)**  (jahan I₀ = V₀ / R).
  - **t = 0 (Just switched ON):** Uncharged capacitor acts like a **SHORT CIRCUIT (0 Ω)** ⟹ I = V₀/R!
  - **t → ∞ (Steady State):** Fully charged capacitor acts like an **OPEN CIRCUIT (∞ Ω)** ⟹ I = 0!
  - **At t = τ = RC:** Charge reaches **1 − 1/e ≈ 63.2%** of Q₀, aur current drops to **1/e ≈ 36.8%** of I₀!
- **Discharging (initial charge Q₀ through R):**
  - **q(t) = Q₀ e^(−t/τ)**  aur  **I(t) = I₀ e^(−t/τ)**.

---

## 5 Deep Solved Problems

### Problem 1: Cube of 12 Resistors (R = 12 Ω)
Twelve identical resistors of **12 Ω** each form the edges of a cube. Find the equivalent resistance across (a) a body diagonal, (b) a face diagonal, and (c) a single edge.

**Solution:**
- (a) Body diagonal: R_body = (5/6) × 12 = **10 Ω**.
- (b) Face diagonal: R_face = (3/4) × 12 = **9 Ω**.
- (c) Adjacent edge: R_edge = (7/12) × 12 = **7 Ω**.
- Jaanch: 7 Ω < 9 Ω < 10 Ω (as distance increases, R_eq increases!) ✅.

### Problem 2: Infinite Ladder with R₁ = 1 Ω, R₂ = 2 Ω
In an infinite resistor ladder, each upper horizontal branch has **R₁ = 1 Ω** and each vertical rung has **R₂ = 2 Ω**. Find the equivalent resistance **R_eq** across the input terminals.

**Solution:**
- R_eq = 1 + (2 R_eq) / (2 + R_eq) ⟹ (R_eq − 1)(2 + R_eq) = 2 R_eq
- R_eq² + R_eq − 2 = 2 R_eq ⟹ R_eq² − R_eq − 2 = 0 ⟹ (R_eq − 2)(R_eq + 1) = 0 ⟹ **R_eq = 2.0 Ω**!
- Jaanch: 2 || 2 = 1 Ω; 1 + 1 = 2.0 Ω = R_eq ✅.

### Problem 3: RC Circuit at t = 0 vs Steady State (t → ∞)
A **10 V** battery is connected to a **4 Ω** resistor in series with a parallel branch containing a **6 Ω** resistor and an uncharged **5 μF** capacitor. Find the battery current (a) at **t = 0** (just after closing the switch), and (b) in **steady state (t → ∞)**, plus the steady-state charge on the capacitor!

**Solution:**
- (a) **t = 0:** Uncharged capacitor = **short circuit (0 Ω)** ⟹ 6 Ω resistor bypass ho gaya!
  **I(0) = 10 / 4 = 2.5 A**.
- (b) **Steady state (t → ∞):** Capacitor = **open circuit** ⟹ current 4 Ω aur 6 Ω dono se jayega!
  **I(∞) = 10 / (4 + 6) = 1.0 A**.
  Capacitor voltage = voltage across 6 Ω = 1.0 × 6 = **6.0 V** ⟹ **Q = C V = 5 μF × 6 V = 30 μC**.
- Jaanch: t = 0: 10/4 = 2.5 A ✅; t → ∞: 10/10 = 1 A, Q = 30 μC ✅.

### Problem 4: Time Constant & 63.2% Charging Time
A **20 μF** capacitor is charged through a **50 kΩ** resistor by a **12 V** battery. Calculate (a) the time constant **τ**, (b) the initial charging current **I₀**, and (c) the charge on the capacitor after **t = 1.0 s**.

**Solution:**
- (a) **τ = R C** = (50 × 10³) × (20 × 10⁻⁶) = **1.0 s**.
- (b) **I₀ = 12 / (50 × 10³) = 0.24 mA**.
- (c) At t = 1.0 s = 1 τ: Q₀ = 20 μF × 12 V = 240 μC ⟹ **q(1 s) = 0.632 × 240 ≈ 151.7 μC**.
- Jaanch: 50 × 20 × 10⁻³ = 1.0 s ✅.

### Problem 5: Symmetry Folding of a 6-Resistor Regular Tetrahedron
Six identical resistors of **R = 6 Ω** each form the 6 edges of a regular tetrahedron (4 vertices A, B, C, D). Find the equivalent resistance between any two vertices A and B.

**Solution:**
- Symmetry se C aur D dono A aur B se bilkul barabar doori par hain ⟹ **V_C = V_D** ⟹ edge CD mein **ZERO current**! CD ko hata do!
- Ab A aur B ke beech teen parallel paths bache: direct AB (**R**), path ACB (**2R**), aur path ADB (**2R**)!
- 1/R_AB = 1/R + 1/(2R) + 1/(2R) = 2/R ⟹ **R_AB = R / 2 = 6 / 2 = 3.0 Ω**!
- Jaanch: 6 || 12 || 12 = 6 || 6 = 3.0 Ω ✅.

---

## 10 Advanced Practice Questions

1. Twelve resistors of 6 Ω each form a cube. Find the equivalent resistance across (a) a body diagonal, and (b) a face diagonal.
2. Find the equivalent resistance of an infinite ladder made of identical 10 Ω resistors (both series and shunt; take √5 = 2.236).
3. A 100 μF capacitor is charged through a 20 kΩ resistor. Calculate the time constant τ of the circuit.
4. A 12 V battery is connected to a 2 Ω resistor in series with a parallel combination of a 4 Ω resistor and an uncharged 10 μF capacitor. Find the current from the battery at (a) t = 0, and (b) steady state (t → ∞).
5. In Question 4, calculate the steady-state electrostatic energy stored in the 10 μF capacitor.
6. A capacitor charged to Q₀ = 100 μC is discharged through a resistor R. If its time constant is τ = 2.0 s, find the charge remaining after t = 2.0 s (use 1/e ≈ 0.368).
7. A wire of uniform resistance 12 Ω is bent into a circle. Two points separated by 1/3 of the circumference are connected to a battery. Find the equivalent resistance between those two points.
8. Six identical 10 Ω resistors form a regular tetrahedron. Find the equivalent resistance between any two vertices.
9. In an RC charging circuit, how many time constants τ does it take for the capacitor to reach 50% of its maximum charge Q₀? (Use ln 2 ≈ 0.693.)
10. A 20 Ω resistor and an uncharged 5 μF capacitor are connected in series to a 10 V battery. What is the voltage across the resistor and across the capacitor at (a) t = 0, and (b) t → ∞?

### Solutions

1. (a) R_body = (5/6) × 6 = **5.0 Ω**.
   (b) R_face = (3/4) × 6 = **4.5 Ω**.
   Jaanch: 5/6 × 6 = 5; 3/4 × 6 = 4.5 ✅.

2. R_eq = [(1 + √5)/2] R = (3.236 / 2) × 10 = **16.18 Ω**.
   Jaanch: 16.18 || 10 = 6.18; 10 + 6.18 = 16.18 Ω ✅.

3. τ = R C = (20 × 10³) × (100 × 10⁻⁶) = **2.0 s**.
   Jaanch: 2 × 10⁴ × 10⁻⁴ = 2.0 s ✅.

4. (a) t = 0 (capacitor short): **I(0) = 12 / 2 = 6.0 A**.
   (b) t → ∞ (capacitor open): **I(∞) = 12 / (2 + 4) = 2.0 A**.
   Jaanch: 12/2 = 6 A; 12/6 = 2 A ✅.

5. Steady-state voltage across 4 Ω (and capacitor): V_C = 2.0 × 4 = 8.0 V.
   U = ½ C V_C² = 0.5 × (10 × 10⁻⁶) × 64 = **3.2 × 10⁻⁴ J = 0.32 mJ**.
   Jaanch: 5 × 64 × 10⁻⁶ = 3.2 × 10⁻⁴ J ✅.

6. t = τ ⟹ q = Q₀ / e = 100 × 0.368 = **36.8 μC**.
   Jaanch: 100 × 0.368 = 36.8 μC ✅.

7. Two parallel arcs: 1/3 of 12 Ω = **4 Ω** and 2/3 of 12 Ω = **8 Ω**.
   R_eq = (4 × 8) / (4 + 8) = 32 / 12 = **8/3 Ω ≈ 2.67 Ω**.
   Jaanch: 4 || 8 = 8/3 Ω ✅.

8. R_AB = R / 2 = 10 / 2 = **5.0 Ω**.
   Jaanch: 10 || 20 || 20 = 5.0 Ω ✅.

9. 1 − e^(−t/τ) = 0.5 ⟹ e^(−t/τ) = 0.5 ⟹ t/τ = ln 2 ≈ **0.693** (i.e., **t = 0.693 τ**!).
   Jaanch: Exact analogue of radioactive half-life! ✅.

10. (a) t = 0: **V_C = 0 V**, **V_R = 10 V**.
    (b) t → ∞: **V_C = 10 V**, **V_R = 0 V**.
    Jaanch: V_R + V_C = 10 V at all times ✅.

---

Shabaash! Tumne 3D Resistor Cubes, Infinite Ladders, Symmetry Folding aur RC Transients tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](current-electricity-part6.md) dekho!
