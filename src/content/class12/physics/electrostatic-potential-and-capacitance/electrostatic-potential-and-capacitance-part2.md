# Chapter: Electrostatic Potential and Capacitance (Part 2)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Electrostatic Potential](electrostatic-potential-and-capacitance.md)

---

## Pahadon ka Contour Map aur Equipotential Surfaces

Chhuttiyon mein **Anil** apne school ke geography atlas mein Nainital ka **contour map** dekh raha tha. Usne dekha ki har gol contour line par ek height likhi thi — 1800 m, 1900 m, 2000 m. Agar koi aadmi ek hi 1900 m wali line par chalta rahe, to woh na upar jaata hai na neeche — gravity ke khilaaf **zero kaam**! Aur jahan contour lines bahut paas-paas thi, wahan pahad ki dhalan (slope) bahut tez thi!

Teacher ma'am ne dekha to boli: "Anil, electrostatics mein aisi hi surfaces ko **Equipotential Surfaces** kehte hain — jahan har point par potential V barabar hota hai, aur jahan yeh paas-paas hon wahan electric field **E** bahut tez hota hai!"

---

## Naye Shabd (New Words)

- **Equipotential Surface:** Aisi 3D surface jiske **har ek point par electrostatic potential V bilkul barabar** hota hai.
- **Potential Gradient (ΔV / Δr):** Doori ke saath potential badalne ki dar (rate of change of potential with distance).
- **Electrostatic Potential Energy (U):** Charges ke kisi system ko infinity se laakar unki present positions par rakhne mein kiya gaya total external work. SI unit **Joule (J)** (ya atomic scale par **electron-volt, eV**, jahan 1 eV = 1.6 × 10⁻¹⁹ J).

---

## 1. Equipotential Surfaces aur Unke 4 Golden Properties

1. **Zero Work Done:** Equipotential surface par kisi bhi charge q₀ ko point A se point B tak le jaane mein kiya gaya kaam hamesha **ZERO** hota hai!
   *Kyun?* W_AB = q₀ (V_B − V_A). Kyunki V_B = V_A ⟹ **W_AB = 0**!
2. **Hamesha Electric Field ke Perpendicular:** Electric field lines hamesha equipotential surface ko **90°** par kaatti hain.
   *Kyun?* Agar E ka koi component surface ke along hota, to charge ko hilane mein work karna padta (par W = 0 hai!). Isliye E hamesha surface ke perpendicular (normal) hota hai.
3. **Do Equipotential Surfaces Kabhi Intersect Nahi Karti:** Agar do alag potential (jaise 10 V aur 20 V) wali surfaces kaat jaayein, to intersection point par potential ki **do alag values** ho jaayengi — jo namumkin hai!
4. **Paas-Paas Lines = Strong Field:** Jahan equipotential surfaces (barabar ΔV ke antar par) paas-paas hoti hain, wahan **E zyada** hota hai; jahan door-door hoti hain, wahan **E kam** hota hai.

### Shapes of Equipotential Surfaces:
- **Single Point Charge:** Concentric **spheres** (charge centre par; bahar jaane par spheres ke beech ka gap badhta jaata hai kyunki E ghatta hai).
- **Uniform Electric Field (e.g., along +x):** Equal spacing wale **parallel planes** (yz-planes, field ke perpendicular).

```
   Uniform Electric Field E --->       Point Charge (+q)

      :     :     :     :                 . - ~ ~ - .
      :     :     :     :               '   . - - .   '
   ---:-----:-----:-----:---> E        (   (  +q   )   )
      :     :     :     :               .   ' - - '   .
      :     :     :     :                 ' - _ _ - '
     30V   20V   10V    0V            (concentric spheres)
```

---

## 2. Electric Field aur Potential ka Rishta (E = −ΔV / Δr)

Maan lo do bahut paas-paas equipotential surfaces hain: ek par potential **V** hai aur doori **Δr** par doosri par potential **V + ΔV**.
- +1 C charge ko pehli se doosri surface tak le jaane mein external work = **ΔV**.
- Electric field E ke khilaaf kaam = **−E Δr**.
- Dono ko barabar karo: **ΔV = −E Δr** ⟹

**E = − ΔV / Δr**

*(Calculus rate-of-change language mein: electric field, distance ke saath potential ghatne ki dar hai!)*

### Do Zaroori Baatein:
1. **Minus Sign ka Matlab:** Electric field hamesha **High Potential se Low Potential** ki direction mein point karta hai! (Jaise paani oonchai se neechai ki taraf behta hai!)
2. **Uniform Field ke liye:** **ΔV = E × d** (magnitude), aur E ki ek aur SI unit milti hai: **V/m** (jo N/C ke bilkul barabar hai!).

---

## 3. Electrostatic Potential Energy of a System of Charges

### (a) Do Charges (q₁ aur q₂) Doori r par:
- Pehle q₁ ko infinity se laao: koi field nahi hai ⟹ **W₁ = 0**.
- Ab q₂ ko infinity se q₁ se doori r par laao (jahan q₁ ka potential V₁ = kq₁/r hai):
  **W₂ = q₂ V₁ = k q₁ q₂ / r**.
- Total potential energy:

**U = k q₁ q₂ / r**

- **Same sign (+,+ ya −,−):** U **positive** (repulsion ke khilaaf kaam karna pada!).
- **Opposite sign (+,−):** U **negative** (attractive system — bound system!).

### (b) Teen Charges (q₁, q₂, q₃) — Har Pair Jod Do!
Har unique pair ka k q_i q_j / r_ij jod do (3 charges ke 3 pairs bante hain):

**U = k ( q₁q₂/r₁₂ + q₂q₃/r₂₃ + q₁q₃/r₁₃ )**

---

## 4. Uniform Electric Field mein Electric Dipole ki Potential Energy

Jab ek electric dipole (moment **p**) ko uniform electric field **E** mein angle **θ₁** se **θ₂** tak ghumaya jaata hai, to torque τ = pE sin θ ke khilaaf kiya gaya external work hota hai (stated & verified):

**W = p E (cos θ₁ − cos θ₂)**

Reference **θ₁ = 90°** (jahan U = 0 maana jaata hai) lekar kisi bhi angle **θ** par dipole ki potential energy milti hai:

**U = − p E cos θ**

### Teen Khaas Angles:
1. **θ = 0° (Parallel):** U = **−pE** (Minimum energy ⟹ **Stable Equilibrium**!)
2. **θ = 90° (Perpendicular):** U = **0**.
3. **θ = 180° (Antiparallel):** U = **+pE** (Maximum energy ⟹ **Unstable Equilibrium**!).

---

## Solved Examples

### Example 1: Uniform Field aur Potential Difference
A uniform electric field of **E = 200 V/m** points along the +x direction. Find the potential difference **V_B − V_A** between point A (x = 0) and point B (x = 5 cm).

**Hal (Solution):**
- E = 200 V/m, Δx = 5 cm = 0.05 m (field ki direction mein ja rahe hain ⟹ potential ghatega!).
- ΔV = V_B − V_A = − E Δx = −200 × 0.05 = **−10 V**.
- (Yaani point A ka potential point B se 10 V zyada hai!)
- **Jaanch:** 200 × 5/100 = 10; field ki direction mein V ghatta hai ⟹ −10 V ✅.

### Example 2: Two-Charge System ki Potential Energy
Calculate the electrostatic potential energy of a system of two point charges **q₁ = +3 μC** and **q₂ = −2 μC** separated by **30 cm** in air.

**Hal (Solution):**
- q₁ = +3 × 10⁻⁶ C, q₂ = −2 × 10⁻⁶ C, r = 0.30 m:
- U = k q₁ q₂ / r = (9 × 10⁹ × 3 × 10⁻⁶ × (−2 × 10⁻⁶)) / 0.30
  = (−54 × 10⁻³) / 0.30 = **−0.18 J**.
- **Jaanch:** 54 / 0.3 = 180; −180 × 10⁻³ = −0.18 J ✅.

### Example 3: Dipole ko Rotate Karne mein Work Done
An electric dipole of moment **p = 4 × 10⁻⁹ C m** is aligned with a uniform electric field **E = 5 × 10⁴ N/C** (stable equilibrium, θ₁ = 0°). How much work is required to rotate it to unstable equilibrium (**θ₂ = 180°**)?

**Hal (Solution):**
- θ₁ = 0° (cos 0° = +1), θ₂ = 180° (cos 180° = −1).
- W = p E (cos 0° − cos 180°) = p E (1 − (−1)) = **2 p E**.
- W = 2 × (4 × 10⁻⁹) × (5 × 10⁴) = **4.0 × 10⁻⁴ J**.
- **Jaanch:** U_i = −pE = −2 × 10⁻⁴ J, U_f = +pE = +2 × 10⁻⁴ J ⟹ W = U_f − U_i = +4.0 × 10⁻⁴ J ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Equipotential surface par charge move karne ka work non-zero nikaalna:**
   - *Galat:* W = F × d laga kar answer nikaalne ki koshish karna jab charge equipotential circle par ghoom raha ho.
   - *Sahi:* Equipotential surface par har jagah V same hai ⟹ ΔV = 0 ⟹ **W = 0** (bina calculation ke seedha zero!).
2. **Dipole energy U = −pE cos θ mein minus sign bhool jaana:**
   - *Galat:* U = +pE cos θ likh dena, jisse θ = 0° par maximum energy aa jaati hai!
   - *Sahi:* **U = −pE cos θ**! Isliye θ = 0° par U = −pE (minimum = stable equilibrium) aur θ = 180° par U = +pE (maximum = unstable equilibrium)!
3. **E = −ΔV/Δr mein direction ulta kar dena:**
   - *Galat:* Sochna ki electric field Low V se High V ki taraf point karta hai.
   - *Sahi:* Minus sign yaad rakho — electric field hamesha **High Potential se Low Potential** ki taraf point karta hai!

---

## Quick Recap

| Concept | Formula / Fact | Key Point |
|---|---|---|
| Equipotential Surface | V = constant; W_along = 0 | Always perpendicular to E; never intersect |
| Field-Potential Relation | E = −ΔV / Δr (unit V/m) | E points from High V to Low V |
| 2-Charge Potential Energy | U = k q₁ q₂ / r | Put signs of q₁, q₂! (+ve repulsion, −ve attraction) |
| Dipole PE & Work | U = −pE cos θ; W = pE(cos θ₁ − cos θ₂) | θ = 0° stable (−pE); θ = 180° unstable (+pE) |

---

## Practice Questions

1. How much work is done in moving a +5 μC charge over a distance of 10 cm along an equipotential surface of 50 V?
2. Why can two equipotential surfaces never intersect each other?
3. Two parallel equipotential planes at 40 V and 10 V are separated by 6 cm. Find the magnitude and direction of the uniform electric field between them.
4. Calculate the electrostatic potential energy of two protons (each of charge +1.6 × 10⁻¹⁹ C) separated by 1.6 × 10⁻¹⁵ m inside a nucleus (express in Joules).
5. Three charges +1 μC, +2 μC, and −3 μC are placed at the vertices of an equilateral triangle of side 10 cm. Calculate the total electrostatic potential energy of the system.
6. An electric dipole of moment p = 2 × 10⁻⁸ C m is placed in a uniform field E = 3 × 10⁴ N/C. Find its potential energy at (a) θ = 0°, (b) θ = 60°, and (c) θ = 180°.
7. How much work is required to turn the dipole in Question 6 from θ = 60° to θ = 180°?
8. State whether True or False: Electric field always points in the direction of increasing electrostatic potential.
9. What is the shape of equipotential surfaces for (a) a single isolated point charge, and (b) a uniform electric field?
10. An electron (charge −1.6 × 10⁻¹⁹ C) is accelerated from rest through a potential difference of 500 V. Find the kinetic energy gained by the electron in (a) eV, and (b) Joules.

### Answers

1. **Zero (0 J)!** Equipotential surface par V_B = V_A = 50 V ⟹ W = q₀(50 − 50) = 0.

2. Agar do equipotential surfaces kaatein, to intersection point par potential ki **do alag values** hongi (aur electric field ki do alag normal directions), jo physical roop se namumkin hai.

3. ΔV = 40 − 10 = 30 V, d = 6 cm = 0.06 m:
   E = ΔV / d = 30 / 0.06 = **500 V/m**, directed from the **40 V plane toward the 10 V plane** (High V to Low V).
   Jaanch: 500 × 0.06 = 30 V ✅.

4. U = (9 × 10⁹ × 1.6 × 10⁻¹⁹ × 1.6 × 10⁻¹⁹) / (1.6 × 10⁻¹⁵) = 9 × 1.6 × 10⁻¹⁴ = **1.44 × 10⁻¹³ J**.
   Jaanch: ek 1.6 kat gaya; 9 × 1.6 = 14.4 ⟹ 14.4 × 10⁻¹⁴ = 1.44 × 10⁻¹³ J ✅.

5. Sabhi sides r = 0.10 m hain:
   q₁q₂ + q₂q₃ + q₁q₃ = (1)(2) + (2)(−3) + (1)(−3) = 2 − 6 − 3 = −7 (in μC² = 10⁻¹² C²).
   U = (9 × 10⁹ / 0.10) × (−7 × 10⁻¹²) = (9 × 10¹⁰) × (−7 × 10⁻¹²) = **−0.63 J**.
   Jaanch: 9 × (−7) × 10⁻² = −0.63 J ✅.

6. p E = (2 × 10⁻⁸) × (3 × 10⁴) = 6 × 10⁻⁴ J:
   (a) θ = 0°: U = −pE cos 0° = **−6.0 × 10⁻⁴ J**.
   (b) θ = 60°: U = −pE cos 60° = −(6 × 10⁻⁴)(0.5) = **−3.0 × 10⁻⁴ J**.
   (c) θ = 180°: U = −pE cos 180° = **+6.0 × 10⁻⁴ J**.
   Jaanch: cos 60° = 0.5 ⟹ −3.0 × 10⁻⁴ J ✅.

7. W = U_final − U_initial = (+6.0 × 10⁻⁴) − (−3.0 × 10⁻⁴) = **+9.0 × 10⁻⁴ J**.
   Jaanch: pE(cos 60° − cos 180°) = (6 × 10⁻⁴)(0.5 − (−1)) = 6 × 1.5 × 10⁻⁴ = 9.0 × 10⁻⁴ J ✅.

8. **False ❌.** Electric field hamesha **decreasing** electrostatic potential (High V se Low V) ki direction mein point karta hai!

9. (a) **Concentric spheres** (with the point charge at the centre).
   (b) **Parallel planes** perpendicular to the uniform electric field.

10. (a) Charge = 1 e, ΔV = 500 V ⟹ KE = **500 eV**.
    (b) In Joules: KE = 500 × 1.6 × 10⁻¹⁹ = **8.0 × 10⁻¹⁷ J**.
    Jaanch: 500 × 1.6 = 800 ⟹ 800 × 10⁻¹⁹ = 8.0 × 10⁻¹⁷ J ✅.

---

Ab tum Equipotential Surfaces, E = −ΔV/Δr aur charges/dipoles ki Potential Energy ko poori tarah samajh chuke ho!

**Agle topic mein:** Jab kisi **Conductor** ya **Dielectric (Insulator)** ko electric field mein rakha jaata hai, to unke andar charges ke saath kya ajeeb khel hota hai — dekhenge!
