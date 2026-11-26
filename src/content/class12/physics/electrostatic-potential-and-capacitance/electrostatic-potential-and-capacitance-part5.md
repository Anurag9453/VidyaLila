# Chapter: Electrostatic Potential and Capacitance (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Capacitors and Capacitance](electrostatic-potential-and-capacitance-part4.md)

---

## Science Club ka Capacitor Bank Challenge

School science club ke Saturday workshop mein **Anupam** aur uski team ko 4 tricky electrostatics puzzles diye gaye:
1. Do opposite charges ki line par **kitne** points par potential zero hota hai?
2. Agar charged capacitor mein dielectric slab daalein, to **battery connected** rakhne aur **disconnect** karne mein kya farq padta hai?
3. Do alag-alag voltages wale capacitors ko jodne par **energy gayab kahan ho jaati hai**?
4. Ek mixed series-parallel capacitor network ka equivalent capacitance aur voltage split kaise nikaalein?

Chalo Anupam ke saath saare puzzles solve karte hain — yeh sab exams ke sabse favourite mixed questions hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal ka Type | Sahi Approach | Key Formula |
|---|---|---|
| Line joining two opposite charges par V = 0 points | **Do points** milte hain (ek beech mein, ek bahar chhote charge ke paas!) | q₁/x + q₂/(d − x) = 0 aur q₁/y + q₂/(d + y) = 0 |
| Dielectric inserted: **Battery Disconnected** | **Charge Q constant** rehta hai! | C → KC, V → V/K, E → E/K, U = Q²/(2C) → U/K |
| Dielectric inserted: **Battery Connected** | **Voltage V constant** rehta hai! | C → KC, Q → KQ, E unchanged, U = ½CV² → KU |
| Do charged capacitors ko parallel mein jodne par | Total charge conserve hota hai; energy kuch heat bankar loss hoti hai! | V_common = (C₁V₁ + C₂V₂)/(C₁ + C₂); ΔU = ½ × [C₁C₂/(C₁+C₂)] × (V₁ − V₂)² |
| Mixed capacitor network | Andar se bahar ki taraf series & parallel simplify karo | Parallel: C₁+C₂; Series: C₁C₂/(C₁+C₂) |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Two Zero-Potential Points on a Line
Two point charges **q₁ = +5 μC** and **q₂ = −3 μC** are located **16 cm** apart. At what points on the line joining the two charges is the electric potential **zero**?

**Hal (Solution):**
- Opposite signs hain ⟹ **do points** milenge!
- **Point 1 (Dono ke beech mein, +5 μC se x cm door):**
  V = 0 ⟹ k(5)/x + k(−3)/(16 − x) = 0 ⟹ 5/x = 3/(16 − x)
  ⟹ 5(16 − x) = 3x ⟹ 80 − 5x = 3x ⟹ 8x = 80 ⟹ **x = 10 cm from +5 μC** (6 cm from −3 μC).
- **Point 2 (Bahar, chhote magnitude −3 μC ke paas, +5 μC se y cm door aur −3 μC se (y − 16) cm door):**
  5/y = 3/(y − 16) ⟹ 5(y − 16) = 3y ⟹ 5y − 80 = 3y ⟹ 2y = 80 ⟹ **y = 40 cm from +5 μC** (24 cm beyond −3 μC).
- **Jaanch:** Point 1: 5/10 − 3/6 = 0.5 − 0.5 = 0 ✅. Point 2: 5/40 − 3/24 = 1/8 − 1/8 = 0 ✅.

### Example 2: Battery Disconnected vs Connected (Dielectric Insertion)
A **6 μF** air capacitor is charged by a **100 V** battery. Then a dielectric slab of **K = 3** is inserted to fill the space completely. Find the new capacitance, charge, voltage, and stored energy if:
(a) the battery was **disconnected** before inserting the slab,
(b) the battery **remained connected** while inserting the slab.

**Hal (Solution):**
- Initial values: C₀ = 6 μF, V₀ = 100 V, Q₀ = 600 μC, U₀ = ½ C₀ V₀² = 0.5 × 6 × 10⁻⁶ × 10⁴ = **0.03 J = 30 mJ**.
- **(a) Battery Disconnected (Q constant = 600 μC):**
  - C = K C₀ = 3 × 6 = **18 μF**.
  - Q = **600 μC** (unchanged).
  - V = V₀ / K = 100 / 3 ≈ **33.33 V**.
  - U = U₀ / K = 30 / 3 = **10 mJ** (energy ghat gayi — kyunki dielectric slab andar khinchte waqt field ne kaam kiya!).
- **(b) Battery Connected (V constant = 100 V):**
  - C = K C₀ = **18 μF**.
  - V = **100 V** (unchanged).
  - Q = K Q₀ = 3 × 600 = **1800 μC** (extra 1200 μC battery se aaya!).
  - U = K U₀ = 3 × 30 = **90 mJ** (energy 3 guna badh gayi!).
- **Jaanch:** (a) Q²/(2C) = (600×10⁻⁶)² / (36×10⁻⁶) = 0.01 J = 10 mJ ✅. (b) ½ CV² = 0.5 × 18 × 10⁻⁶ × 10⁴ = 0.09 J = 90 mJ ✅.

### Example 3: Charge Sharing & Energy Loss Between Two Capacitors
A **4 μF** capacitor is charged to **100 V** and then disconnected from the battery. It is then connected in parallel to an **uncharged 6 μF** capacitor. Find:
(a) the common potential **V_common**,
(b) the initial and final total electrostatic energy, and
(c) the energy lost as heat/spark.

**Hal (Solution):**
- Initial charge: Q₁ = C₁ V₁ = 4 μF × 100 V = 400 μC; Q₂ = 0.
- (a) Charge conservation se:
  **V_common = (Q₁ + Q₂) / (C₁ + C₂) = 400 / (4 + 6) = 40 V**.
- (b) Initial energy: U_i = ½ C₁ V₁² = 0.5 × 4 × 10⁻⁶ × 10⁴ = **0.020 J = 20 mJ**.
  Final energy: U_f = ½ (C₁ + C₂) V_common² = 0.5 × 10 × 10⁻⁶ × 1600 = **0.008 J = 8 mJ**.
- (c) Energy lost: **ΔU = U_i − U_f = 20 − 8 = 12 mJ = 0.012 J**!
- **Jaanch:** Direct formula: ΔU = ½ [C₁C₂/(C₁+C₂)] (V₁ − V₂)² = 0.5 × (24/10) × 10⁻⁶ × (100 − 0)² = 1.2 × 10⁻² J = 12 mJ ✅.

### Example 4: Mixed Capacitor Network
In a network, two capacitors of **4 μF** and **4 μF** are in **series**, and this branch is connected in **parallel** with a **3 μF** capacitor. Finally, a **5 μF** capacitor is connected in **series** with the whole group across a **20 V** battery. Find the equivalent capacitance and total charge drawn from the battery.

**Hal (Solution):**
- Step 1 (4 μF aur 4 μF series mein): C₁₂ = (4 × 4) / (4 + 4) = **2 μF**.
- Step 2 (2 μF aur 3 μF parallel mein): C₁₂₃ = 2 + 3 = **5 μF**.
- Step 3 (5 μF aur bahar wala 5 μF series mein): C_eq = (5 × 5) / (5 + 5) = **2.5 μF**.
- Total charge from 20 V battery: **Q = C_eq × V = 2.5 μF × 20 V = 50 μC**.
- **Jaanch:** 4||_s 4 = 2; 2 + 3 = 5; 5 series 5 = 2.5; 2.5 × 20 = 50 μC ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **Battery connected aur disconnected cases ko mix kar dena:**
   - *Galat:* Battery disconnected hone par bhi U = KU₀ laga dena.
   - *Sahi:* Pehle pakka karo **kya constant hai**: Battery **disconnected ⟹ Q constant** (use Q²/2C ⟹ U ghatti hai!); Battery **connected ⟹ V constant** (use ½CV² ⟹ U badhti hai!).
2. **Do capacitors ko jodne par energy conserved maan lena:**
   - *Galat:* U_final = U_initial likh dena.
   - *Sahi:* **Charge** hamesha conserve hota hai, par jab tak V₁ ≠ V₂ ho, current behne ke karan kuch electrostatic energy hamesha **heat/electromagnetic radiation** mein kharch hoti hai!
3. **Opposite charges ke liye sirf EK zero-potential point nikaalna:**
   - *Galat:* Sirf beech wala point nikaal kar ruk jaana.
   - *Sahi:* Do unequal opposite charges ki line par hamesha **DO** zero-potential points hote hain — ek dono ke beech, aur ek chhote magnitude wale charge ke bahar!

---

## Practice Questions (Mixed Chapter Challenge)

1. Two point charges +6 μC and −2 μC are separated by 12 cm. Find both points on the line joining them where the electrostatic potential is zero.
2. A 12 pF capacitor is connected to a 50 V battery. How much electrostatic energy is stored in the capacitor?
3. A 600 pF capacitor is charged by a 200 V supply. It is then disconnected from the supply and connected to another uncharged 600 pF capacitor. How much electrostatic energy is lost in the process?
4. A parallel plate air capacitor of capacitance 8 μF is connected to a 50 V battery. Keeping the battery connected, a dielectric slab of K = 4 is inserted completely between the plates. Find the new (a) capacitance, (b) charge, and (c) stored energy.
5. Repeat Question 4 assuming the battery was **disconnected** before inserting the K = 4 dielectric slab. Find the new (a) voltage, (b) charge, and (c) stored energy.
6. Four identical capacitors of 4 μF each are arranged: two in parallel, and that pair in series with the other two (which are also in parallel). Find the equivalent capacitance of the network.
7. Three point charges +2 μC, −4 μC, and +2 μC are placed at the vertices of an equilateral triangle of side 20 cm. Calculate the total work required to separate all three charges to infinity.
8. A spherical conductor of radius 12 cm has a charge of 1.6 × 10⁻⁷ C distributed uniformly on its surface. Find the electric field and potential at (a) r = 6 cm, and (b) r = 18 cm from the centre.
9. Two capacitors of 2 μF (charged to 50 V) and 3 μF (charged to 100 V) are connected in parallel (positive to positive, negative to negative). Find their common potential.
10. A parallel plate capacitor has plate area A = 50 cm² and plate separation d = 5 mm. If a potential difference of 1000 V is applied across it, calculate (a) the electric field between the plates, and (b) the electrostatic energy density (ε₀ = 8.85 × 10⁻¹² F/m).

### Answers

1. **Inside (+6 μC se x cm door):** 6/x = 2/(12 − x) ⟹ 3(12 − x) = x ⟹ 4x = 36 ⟹ **x = 9 cm from +6 μC**.
   **Outside (+6 μC se y cm door, −2 μC ke paar):** 6/y = 2/(y − 12) ⟹ 3(y − 12) = y ⟹ 2y = 36 ⟹ **y = 18 cm from +6 μC** (6 cm beyond −2 μC).
   Jaanch: 6/9 − 2/3 = 0; 6/18 − 2/6 = 0 ✅.

2. U = ½ C V² = 0.5 × (12 × 10⁻¹²) × (50)² = 6 × 10⁻¹² × 2500 = **1.5 × 10⁻⁸ J**.
   Jaanch: 6 × 2500 = 15000 ⟹ 1.5 × 10⁻⁸ J ✅.

3. C₁ = C₂ = 600 pF, V₁ = 200 V, V₂ = 0:
   ΔU = ½ [C₁C₂/(C₁+C₂)] (V₁ − V₂)² = 0.5 × (300 × 10⁻¹²) × (200)² = 150 × 10⁻¹² × 4 × 10⁴ = **6.0 × 10⁻⁶ J = 6 μJ**.
   Jaanch: U_i = 0.5 × 600 pF × 4×10⁴ = 12 μJ; V_c = 100 V ⟹ U_f = 0.5 × 1200 pF × 10⁴ = 6 μJ ⟹ loss = 6 μJ ✅.

4. Battery connected (V = 50 V constant):
   (a) C = 4 × 8 = **32 μF**.
   (b) Q = C V = 32 μF × 50 V = **1600 μC = 1.6 mC**.
   (c) U = ½ C V² = 0.5 × 32 × 10⁻⁶ × 2500 = **0.04 J = 40 mJ**.
   Jaanch: Initial U₀ = 10 mJ ⟹ K U₀ = 40 mJ ✅.

5. Battery disconnected (Q = Q₀ = 8 × 50 = 400 μC constant):
   (a) V = V₀ / K = 50 / 4 = **12.5 V**.
   (b) Q = **400 μC**.
   (c) U = U₀ / K = 10 mJ / 4 = **2.5 mJ = 0.0025 J**.
   Jaanch: ½ Q V = 0.5 × 400 × 10⁻⁶ × 12.5 = 2.5 × 10⁻³ J ✅.

6. Har parallel pair = 4 + 4 = 8 μF.
   Do 8 μF pairs series mein: C_eq = (8 × 8) / (8 + 8) = **4 μF**.
   Jaanch: 8 / 2 = 4 μF ✅.

7. System ki potential energy:
   U = (9 × 10⁹ / 0.20) × [ (2)(−4) + (−4)(2) + (2)(2) ] × 10⁻¹²
   = (4.5 × 10¹⁰) × (−8 − 8 + 4) × 10⁻¹² = 4.5 × (−12) × 10⁻² = −0.54 J.
   Infinity par U_final = 0 ⟹ Work required **W = 0 − (−0.54) = +0.54 J**.
   Jaanch: 4.5 × 12 = 54 ⟹ 0.54 J ✅.

8. R = 12 cm = 0.12 m, Q = 1.6 × 10⁻⁷ C:
   (a) r = 6 cm (< R, andar): **E = 0 N/C**; V = kQ/R = (9 × 10⁹ × 1.6 × 10⁻⁷) / 0.12 = 1440 / 0.12 = **1.2 × 10⁴ V**.
   (b) r = 18 cm (> R, bahar): E = kQ/r² = 1440 / (0.18)² = 1440 / 0.0324 ≈ **4.44 × 10⁴ N/C**; V = 1440 / 0.18 = **8.0 × 10³ V**.
   Jaanch: 9 × 1.6 × 10² = 1440; 1440 / 0.18 = 8000 V ✅.

9. V_common = (C₁V₁ + C₂V₂) / (C₁ + C₂) = (2 × 50 + 3 × 100) / (2 + 3) = (100 + 300) / 5 = 400 / 5 = **80 V**.
   Jaanch: 400 / 5 = 80 V ✅.

10. (a) E = V / d = 1000 / (5 × 10⁻³) = **2.0 × 10⁵ V/m**.
    (b) u = ½ ε₀ E² = 0.5 × 8.85 × 10⁻¹² × (4 × 10¹⁰) = **0.177 J/m³**.
    Jaanch: 1000 / 0.005 = 2 × 10⁵; 2 × 8.85 × 10⁻² = 0.177 J/m³ ✅.

---

## Chapter Ka Saar: Electrostatic Potential and Capacitance

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Electrostatic Potential | V = W_∞/q₀ = kq/r; Dipole: (kp cos θ)/r² | Scalar (include +/− sign!); equatorial V = 0 |
| Equipotential Surface & E-V | W_along = 0; E = −ΔV / Δr | Always ⊥ to E; E points High V → Low V |
| Potential Energy | 2-charge: kq₁q₂/r; Dipole: U = −pE cos θ | Work to rotate dipole: pE(cos θ₁ − cos θ₂) |
| Conductors & Dielectrics | Conductor: E_in = 0, V = const; Dielectric: E = E₀/K | Electrostatic shielding inside hollow conductor |
| Parallel Plate Capacitor | C₀ = ε₀A/d; Full slab: Kε₀A/d; Partial: ε₀A/(d−t+t/K) | C depends only on geometry & K (never on Q or V) |
| Combinations & Energy | Series: 1/C_s = Σ 1/C_i; Parallel: C_p = Σ C_i; U = ½CV² | Disconnected ⟹ Q const; Connected ⟹ V const; sharing loses energy as heat |

---

Ab tum Electrostatic Potential, Equipotential Surfaces, Conductors, Dielectrics aur Capacitors ke saare concepts aur tricky circuits aasaani se solve kar sakte ho!

**Agle chapter mein:** Ab tak charges ruke hue the (electrostatics) — ab charges ko taar ke andar **daudayenge** aur seekhenge **Current Electricity**!
