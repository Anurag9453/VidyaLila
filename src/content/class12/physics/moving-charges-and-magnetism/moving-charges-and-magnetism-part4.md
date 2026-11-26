# Chapter: Moving Charges and Magnetism (Part 4)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Ampere's Circuital Law](moving-charges-and-magnetism-part3.md)

---

## Galvanometer ki Sui ka Smooth Swing

Physics lab mein **Gagan** ek transparent glass-front wale **Moving Coil Galvanometer** ko dhyaan se dekh raha tha. Andar curved horseshoe magnet ke beech ek patli copper coil ek soft iron cylinder par lipti thi aur usse ek halki spring judi thi. Jaise hi teacher ma'am ne chhota sa microampere current bheja, coil halka sa ghoomi aur sui mirror scale par theek 15 divisions par aakar ruk gayi!

Gagan ne poocha: "Ma'am, is coil ko ghumane wala **torque** kahan se aaya? Aur isi ek chhote galvanometer ko hum bade **Ammeter** ya **Voltmeter** mein kaise badal dete hain?"

Aaj hum teeno kamaal ke topics seekhenge: **Do parallel currents ke beech force**, **Current loop par torque**, aur **Moving Coil Galvanometer**!

---

## Naye Shabd (New Words)

- **1 Ampere (Formal Definition):** Woh steady current jo vacuum mein 1 m door rakhe do bahut lambe parallel wires mein behne par har wire ke per metre length par **2 × 10⁻⁷ N** ka force lagaye!
- **Magnetic Dipole Moment (m→):** Current loop ki magnetic taqat: **m = N I A** (direction right-hand curl rule se loop ke plane ke perpendicular; SI unit **A m²**).
- **Radial Magnetic Field:** Curved concave magnet poles aur soft iron core se banaya gaya aisa field jismein coil ka plane har angle par field lines ke parallel (normal 90° par) rehta hai!
- **Shunt (S):** Galvanometer ke **parallel** mein lagaya gaya bahut **chhota resistance**, jisse woh **Ammeter** ban jaata hai.

---

## 1. Force Between Two Parallel Current-Carrying Wires

Maan lo do lambe parallel wires doori **d** par rakhe hain aur unmein currents **I₁** aur **I₂** beh rahe hain:
1. Wire 1 apne se doori d par Wire 2 ki jagah magnetic field banata hai: **B₁ = (μ₀ I₁) / (2π d)**.
2. Is field B₁ ke karan Wire 2 ke length **L** par magnetic force lagta hai: **F = I₂ L B₁ sin 90°**.
3. B₁ ki value rakho ⟹ **Force per unit length (f = F / L)**:

**F / L = (μ₀ I₁ I₂) / (2π d) = (2 × 10⁻⁷ I₁ I₂) / d**

### Golden Direction Rule (Charges ka Bilkul Ulta!):
- **Parallel currents (SAME direction)** ek-doosre ko **ATTRACT** karte hain!
- **Antiparallel currents (OPPOSITE directions)** ek-doosre ko **REPEL** karte hain!

*(Check: I₁ = I₂ = 1 A aur d = 1 m rakho ⟹ F/L = **2 × 10⁻⁷ N/m** — yahi **1 Ampere** ki classic SI definition hai!)*

---

## 2. Torque on a Current Loop in a Uniform Magnetic Field

Maan lo **N** turns aur area **A** ki ek rectangular coil (current **I**) uniform magnetic field **B** mein rakhi hai. Coil ka **normal (area vector n̂)** field B ke saath angle **θ** banata hai:
- Coil ki do opposite arms par equal and opposite forces lagte hain ⟹ **Net Force = 0** (coil aage-peeche nahi khisakti), par yeh dono forces ek **couple (Torque)** banate hain jo coil ko ghumata hai!

**τ = N I A B sin θ = m B sin θ**

jahan **m = N I A** coil ka **Magnetic Dipole Moment** hai!
*(Compare karo electric dipole ke torque **τ = p E sin θ** se — bilkul identical structure!)*

---

## 3. Moving Coil Galvanometer (MCG)

**Principle:** Uniform radial magnetic field mein current-carrying coil par torque **τ = N I A B** lagta hai (kyunki radial field mein har position par θ = 90° ⟹ sin 90° = 1!).
- Coil ke ghoomne par spring (torsional constant **k**) ulta restoring torque **τ_restoring = k φ** lagati hai (jahan φ deflection angle hai).
- Equilibrium mein: **N I A B = k φ** ⟹

**φ = (N A B / k) × I**   ⟹   **φ ∝ I**  *(Linear scale!)*

### Two Sensitivities:
1. **Current Sensitivity (I_s):** Per unit current deflection:
   **I_s = φ / I = (N A B) / k**  (unit: rad/A or div/A)
2. **Voltage Sensitivity (V_s):** Per unit voltage deflection (V = I R_g):
   **V_s = φ / V = (N A B) / (k R_g) = I_s / R_g**  (unit: rad/V or div/V)
   *(Dhyaan do: Agar turns N double karo to wire ki length bhi double hoti hai ⟹ R_g bhi double ho jaata hai! Isliye **I_s double** hota hai, par **V_s = I_s/R_g UNCHANGED** rehta hai!)*

---

## 4. Galvanometer ko Ammeter aur Voltmeter mein Badalna

Maan lo galvanometer ka apna resistance **R_g** hai aur full-scale deflection current **I_g** hai.

### (a) Galvanometer → Ammeter (Range 0 to I):
- Ammeter ko circuit mein **series** mein lagate hain, isliye iska resistance **bahut kam** hona chahiye!
- Galvanometer ke **PARALLEL** mein ek bahut chhota resistance **Shunt (S)** lagao, taaki baaki current **(I − I_g)** shunt se bypass ho jaaye:
  Parallel mein voltage barabar ⟹ I_g R_g = (I − I_g) S ⟹

**S = (I_g R_g) / (I − I_g)**

*(Ideal Ammeter ka resistance **ZERO** hota hai!)*

### (b) Galvanometer → Voltmeter (Range 0 to V):
- Voltmeter ko circuit ke **parallel** mein lagate hain, isliye iska resistance **bahut zyada** hona chahiye!
- Galvanometer ke **SERIES** mein ek bahut bada resistance **R** lagao:
  V = I_g (R_g + R) ⟹

**R = (V / I_g) − R_g**

*(Ideal Voltmeter ka resistance **INFINITE** hota hai!)*

---

## Solved Examples

### Example 1: Force Between Two Parallel Wires
Two long parallel wires carry currents **I₁ = 5 A** and **I₂ = 10 A** in the **same direction**, separated by **d = 5 cm**. Find the magnitude and nature of the force on a **2 m** section of either wire.

**Hal (Solution):**
- F / L = (2 × 10⁻⁷ × I₁ × I₂) / d = (2 × 10⁻⁷ × 5 × 10) / 0.05 = (100 × 10⁻⁷) / 0.05 = **2.0 × 10⁻⁴ N/m**.
- L = 2 m par total force: **F = (2.0 × 10⁻⁴) × 2 = 4.0 × 10⁻⁴ N** (**Attractive**, kyunki currents same direction mein hain!).
- **Jaanch:** 100 / 0.05 = 2000 ⟹ 2 × 10⁻⁴ N/m; × 2 m = 4.0 × 10⁻⁴ N ✅.

### Example 2: Torque on a Rectangular Coil
A rectangular coil of **N = 20 turns** and area **A = 50 cm²** carries a current of **I = 3 A**. It is placed in a uniform magnetic field **B = 0.4 T** such that the **plane of the coil is parallel** to the magnetic field. Find the torque on the coil.

**Hal (Solution):**
- Plane B ke parallel hai ⟹ coil ka **normal** B ke perpendicular (**θ = 90°**)!
- A = 50 cm² = 50 × 10⁻⁴ m² = 5.0 × 10⁻³ m².
- τ = N I A B sin 90° = 20 × 3 × (5.0 × 10⁻³) × 0.4 × 1 = 60 × 2.0 × 10⁻³ = **0.12 N m**.
- **Jaanch:** 20 × 3 = 60; 60 × 0.005 = 0.3; 0.3 × 0.4 = 0.12 N m ✅.

### Example 3: Galvanometer → Ammeter & Voltmeter Conversion
A galvanometer has resistance **R_g = 15 Ω** and shows full-scale deflection for current **I_g = 4 mA**. How will you convert it into:
(a) an **ammeter** of range **0 to 6 A**,
(b) a **voltmeter** of range **0 to 18 V**?

**Hal (Solution):**
- R_g = 15 Ω, I_g = 4 mA = 4 × 10⁻³ A = 0.004 A.
- **(a) Ammeter (0 to 6 A):**
  I − I_g = 6 − 0.004 = 5.996 A ≈ 6 A.
  S = (I_g R_g) / (I − I_g) = (0.004 × 15) / 5.996 = 0.06 / 5.996 ≈ **0.010 Ω** (connected in **parallel**!).
- **(b) Voltmeter (0 to 18 V):**
  R = (V / I_g) − R_g = (18 / 0.004) − 15 = 4500 − 15 = **4485 Ω** (connected in **series**!).
- **Jaanch:** (a) 0.004 × 15 = 0.06 V; 0.06 / 0.01 = 6 A ✅. (b) 0.004 × (4485 + 15) = 0.004 × 4500 = 18 V ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Same-direction currents ko repel karwa dena:**
   - *Galat:* Like charges repel karte hain isliye same-direction currents bhi repel karenge!
   - *Sahi:* Bilkul ulta! **Same-direction currents ATTRACT** karte hain, aur **opposite-direction currents REPEL** karte hain!
2. **Ammeter aur Voltmeter ka connection ulta kar dena:**
   - *Galat:* Ammeter ke liye series mein shunt lagana ya voltmeter ke liye parallel mein high resistance lagana.
   - *Sahi:* **Ammeter = Low shunt S in PARALLEL**; **Voltmeter = High resistor R in SERIES**!
3. **τ = NIAB sin θ mein plane ka angle seedha θ rakh dena:**
   - *Galat:* "Plane is parallel to B" dekh kar θ = 0° ⟹ τ = 0 likh dena!
   - *Sahi:* **θ normal aur B ke beech ka angle** hai! Plane B ke parallel ho to normal 90° par hota hai ⟹ **τ = NIAB (MAXIMUM!)**!

---

## Quick Recap

| Concept | Formula | Key Detail |
|---|---|---|
| Force between parallel wires | F/L = (μ₀ I₁ I₂)/(2π d) | Same dir: **Attract**; Opposite dir: **Repel** |
| Torque on current loop | τ = N I A B sin θ = m B sin θ | θ = angle between **normal** and B; m = NIA |
| Moving Coil Galvanometer | φ = (NAB/k) I; I_s = NAB/k; V_s = I_s/R_g | Radial field keeps θ = 90° ⟹ linear scale |
| Convert to Ammeter (0–I) | Shunt S = I_g R_g / (I − I_g) in **parallel** | Ideal ammeter R = 0 |
| Convert to Voltmeter (0–V) | High R = (V / I_g) − R_g in **series** | Ideal voltmeter R = ∞ |

---

## Practice Questions

1. State the SI definition of 1 Ampere based on the magnetic force between two parallel current-carrying wires.
2. Two long parallel wires 4 cm apart carry currents of 8 A and 5 A in **opposite directions**. Find the force on a 10 cm length of either wire and state whether it is attractive or repulsive.
3. A circular coil of 30 turns and radius 10 cm carries a current of 6 A. It is suspended vertically in a uniform horizontal magnetic field of 1.0 T. If the field lines make an angle of 60° with the **normal** to the coil, find the torque on the coil (take π = 3.14, √3 = 1.732).
4. Why is a **radial magnetic field** used in a moving coil galvanometer, and how is it produced?
5. If the number of turns N of a galvanometer coil is doubled (using the same wire thickness), what happens to its (a) current sensitivity, and (b) voltage sensitivity?
6. A galvanometer of resistance 20 Ω gives full-scale deflection for a current of 5 mA. Calculate the shunt resistance required to convert it into an ammeter of range 0 to 5 A.
7. How will you convert the galvanometer of Question 6 into a voltmeter of range 0 to 10 V?
8. What is the resistance of (a) an ideal ammeter, and (b) an ideal voltmeter?
9. State whether True or False: The net magnetic force on a closed current-carrying loop placed in a uniform magnetic field is always zero, even though the torque may be non-zero.
10. A galvanometer of resistance 50 Ω shows full-scale deflection for 2 mA. What is the effective resistance of the ammeter formed when it is shunted with a 0.05 Ω resistor?

### Answers

1. **1 Ampere** woh steady current hai jo vacuum mein 1 m ki doori par rakhe do bahut lambe parallel conductors mein behne par har conductor ke per metre length par **2 × 10⁻⁷ N** ka magnetic force lagata hai.

2. d = 0.04 m, L = 0.10 m:
   F = [ (2 × 10⁻⁷ × 8 × 5) / 0.04 ] × 0.10 = (80 × 10⁻⁷ / 0.04) × 0.10 = (2.0 × 10⁻⁴) × 0.10 = **2.0 × 10⁻⁵ N** (**Repulsive**, kyunki currents opposite directions mein hain!).
   Jaanch: 80 / 0.04 = 2000 ⟹ 2 × 10⁻⁴ N/m; × 0.1 m = 2.0 × 10⁻⁵ N ✅.

3. Area A = π R² = 3.14 × (0.10)² = 0.0314 m².
   τ = N I A B sin 60° = 30 × 6 × 0.0314 × 1.0 × (1.732 / 2)
   = 180 × 0.0314 × 0.866 = 5.652 × 0.866 ≈ **4.89 N m**.
   Jaanch: 180 × 0.0314 = 5.652; 5.652 × 0.866 ≈ 4.895 N m ✅.

4. **Radial field** isliye use hota hai taaki coil ke ghoomne par bhi uska plane hamesha field ke parallel (θ = 90°, sin θ = 1) rahe ⟹ torque τ = NIAB constant aur scale **linear (φ ∝ I)** bane! Isse **concave cylindrical magnet poles** aur beech mein **soft iron core** rakh kar banaya jaata hai.

5. (a) **Current sensitivity (I_s = NAB/k)** **double** ho jaati hai.
   (b) Turns double hone par wire length (aur resistance R_g) bhi double ho jaata hai ⟹ **Voltage sensitivity (V_s = I_s/R_g)** **unchanged (same)** rehti hai!

6. I_g = 5 × 10⁻³ A, R_g = 20 Ω, I = 5 A:
   S = (0.005 × 20) / (5 − 0.005) = 0.10 / 4.995 ≈ **0.020 Ω** (in **parallel**).
   Jaanch: 0.005 × 20 = 0.10 V; 0.10 / 0.02 = 5 A ✅.

7. R = (V / I_g) − R_g = (10 / 0.005) − 20 = 2000 − 20 = **1980 Ω** (in **series**).
   Jaanch: 0.005 × (1980 + 20) = 0.005 × 2000 = 10 V ✅.

8. (a) Ideal ammeter: **Zero (0 Ω)**.
   (b) Ideal voltmeter: **Infinite (∞ Ω)**.

9. **True ✅.** Uniform magnetic field mein closed loop par net translational force hamesha **zero** hota hai, par opposite arms par forces ek **torque (τ = mB sin θ)** bana sakte hain!

10. Parallel combination of R_g = 50 Ω and S = 0.05 Ω:
    R_eff = (50 × 0.05) / (50 + 0.05) = 2.5 / 50.05 ≈ **0.04995 Ω ≈ 0.05 Ω**!
    Jaanch: Parallel mein effective resistance chhote resistor (0.05 Ω) se bhi thoda kam hota hai ✅.

---

Ab tum Parallel Currents, Torque on Loops aur Moving Coil Galvanometer (Ammeter & Voltmeter conversion) ko pakka seekh chuke ho!

**Agle topic mein:** Sab Kuch Mila Kar — is poore chapter ke saare formulas ek saath jodkar tricky mixed problems solve karenge aur poora chapter wrap-up karenge!
