# Chapter: Moving Charges and Magnetism

> **Class:** 12 | **Subject:** Physics
> **Previous chapter:** [Current Electricity](../current-electricity/current-electricity-part6.md)

---

## Aasman mein Chamakta Aurora aur Magnetic Force

**Bhoomi** library mein ek science magazine padh rahi thi, jismein North Pole ke aasman mein hare aur baingani rang ki chamakti hui roshni — **Aurora Borealis** — ki zabardast photo chhapi thi. Caption mein likha tha: "Sooraj se aane wale tez charged particles Earth ke magnetic field se takrakar seedhe zameen par nahi girte, balki **spiral (helical) raaste** par ghoomte hue poles ki taraf mud jaate hain!"

Bhoomi ne hairani se socha: "Electric field to charge ko seedha dhakka deta hai, phir magnetic field charge ko gol-gol ya spiral kyun ghumata hai?"

Class 9 mein tumne [Magnetism](../../../class9/physics/magnetism/magnetism.md) aur Class 10 mein [Electromagnetism](../../../class10/physics/electromagnetism/electromagnetism.md) mein chumbak aur Fleming's Left-Hand Rule ka basic parichay padha tha. Aaj Class 12 mein hum **Magnetic Force** aur uske andar charged particles ke circular aur helical motion ka poora ganit seekhenge!

---

## Naye Shabd (New Words)

- **Magnetic Field (B→):** Kisi chumbak ya current-carrying wire ke chaaron taraf ka woh kshetra jismein chalta hua charge magnetic force mehsoos karta hai. SI unit **Tesla (T)** = N/(A m) (Chhoti unit: **1 Gauss (G) = 10⁻⁴ T**).
- **Lorentz Force:** Jab koi charge **q** velocity **v→** se aise kshetra mein chale jahan electric field **E→** aur magnetic field **B→** dono hon, to us par lagne wala total force: **F→ = q E→ + q (v→ × B→)**.
- **Cyclotron Frequency (f):** Uniform magnetic field mein gol ghoomte charged particle ke per second chakkar: f = q B / (2π m) — jo particle ki speed ya radius par depend nahi karti!
- **Velocity Selector:** Crossed (mutually perpendicular) E aur B ka aisa setup jismein sirf ek khaas speed **v = E / B** wale particles bina mude seedhe nikal jaate hain!

---

## 1. Magnetic Force on a Moving Charge (F = q v B sin θ)

Agar koi charge **q** velocity **v** se uniform magnetic field **B** mein angle **θ** (v aur B ke beech) par chal raha ho, to us par lagne wala magnetic force hota hai:

**F_m = q v B sin θ**   *(vector form: **F→ = q (v→ × B→)**)*

### 4 Golden Properties of Magnetic Force:
1. **Ruka hua charge (v = 0) ⟹ F_m = 0:** Magnetic field sirf **chalte hue** charges par force lagata hai!
2. **Parallel ya Antiparallel (θ = 0° ya 180°) ⟹ F_m = 0:** Field lines ke along chalne wale charge par koi magnetic force nahi lagta!
3. **Maximum Force (θ = 90°):** **F_max = q v B**.
4. **Magnetic Force Hamesha Velocity ke Perpendicular (F→ ⊥ v→):**
   Kyunki force har pal motion ke 90° par lagta hai, **magnetic force dwara kiya gaya kaam hamesha ZERO (W = 0)** hota hai! Isliye magnetic field kisi charge ki **speed (aur kinetic energy) kabhi nahi badalta** — sirf uski **direction** modta hai!

*(Direction Rule: Positive charge ke liye **v→** se **B→** ki taraf right hand ki ungliyan curl karo ⟹ angutha **F→** ki direction dega; negative charge ke liye bilkul ulta!)*

---

## 2. Uniform Magnetic Field mein Charge ka Motion

### Case A: Perpendicular Entry (θ = 90°) — Uniform Circular Motion!
Jab charge **q** (mass **m**) speed **v** se magnetic field **B** ke **perpendicular** enter karta hai, to constant force **qvB** har pal velocity ke 90° par lagkar **centripetal force** ban jaata hai:

**m v² / r = q v B**  ⟹  **r = (m v) / (q B)**  *(Radius of circular path!)*

```
     x   x   x   x   x    (B into the page: x)
     x   . - ~ - .   x
     x  /    F    \  x
     x :   <---    : x    Circular path: r = mv / (qB)
     x  \   +q    /  x
     x   ' - _ - '   x
     x   x   x   x   x
```

- **Time Period (ek poora chakkar ka samay):**
  T = (2π r) / v = (2π / v) × (mv / qB) = **2π m / (q B)**
- **Cyclotron Frequency (f = 1/T):**
  **f = (q B) / (2π m)**
- **Kamaal ki Baat:** **T** aur **f** dono **v** aur **r** se bilkul **independent** hain! Chahe particle dheema chale (chhota circle) ya tez chale (bada circle), ek chakkar poora karne mein **bilkul same time** lagta hai!

### Case B: Oblique Entry (0° < θ < 90°) — Helical (Spring-jaisa) Path!
Velocity ke do components tod lo:
- **v_∥ = v cos θ** (B ke along ⟹ koi force nahi ⟹ seedha aage badhta rehta hai!).
- **v_⊥ = v sin θ** (B ke perpendicular ⟹ gol ghoomata hai, radius **r = m v sin θ / (q B)**!).
- Dono milkar **Helix (spring)** banate hain! Ek chakkar mein aage badhi doori ko **Pitch (p)** kehte hain:
  **Pitch = v_∥ × T = (v cos θ) × (2π m / qB)**.

---

## 3. Velocity Selector (Crossed E aur B)

Maan lo **E→** (upar), **B→** (page ke andar), aur **v→** (right) teeno ek doosre ke **perpendicular** hain.
- Electric force = **q E** (upar).
- Magnetic force = **q v B** (neeche).
- Jo particles bina mude seedhe nikal jaayein, un par dono forces cancel hone chahiye:
  q E = q v B ⟹

**v = E / B**

*(Dekho! Charge q aur mass m kat gaye — sirf speed **E/B** wale particles hi seedhe bahar nikalte hain! Mass spectrometers mein iska zabardast use hota hai.)*

---

## 4. Current-Carrying Conductor par Magnetic Force

Ek wire (length **L**, current **I**) mein free electrons drift kar rahe hain. Sabhi electrons par lagne wale magnetic forces ko jodkar milta hai:

**F = I L B sin θ**

jahan **θ** wire (current ki direction) aur magnetic field **B** ke beech ka angle hai. Direction **Fleming's Left-Hand Rule** se milti hai!

---

## Solved Examples

### Example 1: Proton in a Uniform Magnetic Field
A proton (charge **q = 1.6 × 10⁻¹⁹ C**, mass **m = 1.67 × 10⁻²⁷ kg**) enters a uniform magnetic field **B = 0.5 T** perpendicularly with speed **v = 2.0 × 10⁶ m/s**. Calculate (a) the magnetic force on it, and (b) the radius of its circular path.

**Hal (Solution):**
- (a) θ = 90° ⟹ F = q v B = (1.6 × 10⁻¹⁹) × (2.0 × 10⁶) × 0.5 = **1.6 × 10⁻¹³ N**.
- (b) r = m v / (q B) = (1.67 × 10⁻²⁷ × 2.0 × 10⁶) / (1.6 × 10⁻¹⁹ × 0.5)
  = (3.34 × 10⁻²¹) / (0.8 × 10⁻¹⁹) = 4.175 × 10⁻² m ≈ **4.18 cm**.
- **Jaanch:** 2.0 × 0.5 = 1.0 ⟹ F = 1.6 × 10⁻¹³ N ✅; 3.34 / 0.8 = 4.175 cm ✅.

### Example 2: Velocity Selector
In a velocity selector, a uniform electric field **E = 4.0 × 10⁴ V/m** and a perpendicular magnetic field **B = 0.2 T** are applied. What speed must a charged ion have to pass straight through without deflection?

**Hal (Solution):**
- Undeviated condition: **v = E / B** = (4.0 × 10⁴) / 0.2 = **2.0 × 10⁵ m/s**.
- **Jaanch:** v B = (2.0 × 10⁵)(0.2) = 4.0 × 10⁴ = E ✅.

### Example 3: Force on a Current-Carrying Wire
A straight wire of length **L = 0.5 m** carries a current **I = 4 A** in a uniform magnetic field **B = 0.3 T** making an angle of **30°** with the field. Calculate the magnetic force on the wire.

**Hal (Solution):**
- F = I L B sin 30° = 4 × 0.5 × 0.3 × 0.5 = **0.30 N**.
- **Jaanch:** 4 × 0.5 = 2; 2 × 0.3 = 0.6; 0.6 × 0.5 = 0.30 N ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Sochna ki magnetic force charge ki speed ya kinetic energy badha sakta hai:**
   - *Galat:* Magnetic field mein proton accelerate hokar tez ho jaata hai.
   - *Sahi:* Magnetic force hamesha velocity ke **perpendicular** hota hai ⟹ **Work done = 0** ⟹ **Speed aur KE hamesha constant** rehte hain!
2. **Cyclotron time period T ko speed v par depend karwana:**
   - *Galat:* Agar speed double kar dein to circle ka chakkar aadhe samay mein poora hoga.
   - *Sahi:* Speed double hone par radius bhi double (r ∝ v) ho jaata hai — isliye **T = 2πm/(qB) bilkul nahi badalta**!
3. **θ = 0° par bhi F = qvB laga dena:**
   - *Galat:* Field ke parallel chal rahe electron par force qvB nikaalna.
   - *Sahi:* **sin 0° = 0** ⟹ field ke parallel chalne par **F = 0** (electron bina mude seedha chalta rehta hai!).

---

## Quick Recap

| Concept | Formula | Key Fact |
|---|---|---|
| Lorentz Force | F→ = qE→ + q(v→ × B→) | Magnetic part: F = qvB sin θ (does ZERO work!) |
| Circular Motion (θ = 90°) | r = mv/(qB); T = 2πm/(qB); f = qB/(2πm) | T and f are independent of v and r |
| Helical Motion (0° < θ < 90°) | r = mv sin θ/(qB); Pitch = (v cos θ) T | Combines circular + uniform linear motion |
| Velocity Selector | v = E / B | Independent of charge q and mass m |
| Force on Current Wire | F = I L B sin θ | Max at 90°, zero when wire is parallel to B |

---

## Practice Questions

1. Write the expression for Lorentz force on a charge q moving with velocity v→ in combined electric (E→) and magnetic (B→) fields. Under what condition is the magnetic force zero?
2. Why does a uniform magnetic field never change the kinetic energy of a charged particle moving through it?
3. An electron (q = −1.6 × 10⁻¹⁹ C, m = 9.1 × 10⁻³¹ kg) moves perpendicular to a uniform magnetic field B = 1.0 × 10⁻³ T with speed v = 1.6 × 10⁷ m/s. Calculate the radius of its circular path.
4. A proton and a deuteron (same charge +e, mass 2m_p) enter the same uniform magnetic field perpendicularly with the **same speed v**. Find the ratio of their circular radii r_p : r_d.
5. In Question 4, what is the ratio of their time periods T_p : T_d?
6. A charged particle enters a uniform magnetic field at an angle of 60° to the field lines. Name the shape of its trajectory.
7. In a velocity selector, B = 0.4 T. What electric field E is required so that electrons of speed 5.0 × 10⁵ m/s pass straight through undeflected?
8. A horizontal wire of length 0.8 m carries a current of 5 A from West to East in a uniform magnetic field of 0.25 T pointing vertically downward. Find the magnitude of the magnetic force on the wire.
9. State whether True or False: Doubling the speed of a proton moving perpendicular to a uniform magnetic field doubles its cyclotron frequency.
10. A 20 cm long straight wire carrying a current of 10 A experiences a force of 0.6 N when placed perpendicular to a uniform magnetic field. Calculate the magnitude of the magnetic field B.

### Answers

1. **F→ = q E→ + q (v→ × B→)**. Magnetic force zero hota hai jab: (i) charge ruka ho (v = 0), ya (ii) charge B ke **parallel ya antiparallel** chale (θ = 0° ya 180°).

2. Kyunki magnetic force **F→ = q(v→ × B→)** har pal velocity **v→** ke **perpendicular (90°)** lagta hai ⟹ work done W = F d cos 90° = **0** ⟹ Work-Energy theorem se **ΔKE = 0** (speed aur KE constant rehte hain!).

3. r = m v / (q B) = (9.1 × 10⁻³¹ × 1.6 × 10⁷) / (1.6 × 10⁻¹⁹ × 1.0 × 10⁻³)
   = (9.1 × 10⁻²⁴) / (1.0 × 10⁻²²) = **9.1 × 10⁻² m = 9.1 cm**.
   Jaanch: 1.6 upar-neeche kat gaya; 10⁻³¹⁺⁷ / 10⁻²² = 10⁻² ⟹ 9.1 cm ✅.

4. r = mv / (qB). Same v, q, B ⟹ **r ∝ m**.
   r_p : r_d = m_p : (2 m_p) = **1 : 2**.
   Jaanch: Deuteron ka mass double ⟹ radius double ✅.

5. T = 2πm / (qB) ⟹ **T ∝ m**.
   T_p : T_d = m_p : (2 m_p) = **1 : 2**.

6. **Helical path (Helix)** — kyunki 0° < 60° < 90° hai!

7. v = E / B ⟹ E = v B = (5.0 × 10⁵) × 0.4 = **2.0 × 10⁵ V/m**.
   Jaanch: 2.0 × 10⁵ / 0.4 = 5.0 × 10⁵ m/s ✅.

8. Wire (East) aur B (downward) ke beech angle θ = 90°:
   F = I L B sin 90° = 5 × 0.8 × 0.25 × 1 = **1.0 N**.
   Jaanch: 5 × 0.8 = 4; 4 × 0.25 = 1.0 N ✅.

9. **False ❌.** Cyclotron frequency f = qB / (2πm) speed v par depend nahi karti — woh **unchanged** rehti hai!

10. L = 20 cm = 0.20 m, I = 10 A, F = 0.6 N, θ = 90°:
    B = F / (I L) = 0.6 / (10 × 0.20) = 0.6 / 2.0 = **0.3 T**.
    Jaanch: 10 × 0.20 × 0.3 = 0.6 N ✅.

---

Ab tum Lorentz Force, Circular & Helical Motion aur Velocity Selector ko achhi tarah samajh chuke ho!

**Agle topic mein:** Ab ulta sawaal — ek current-carrying wire ya circular loop khud kitna **Magnetic Field** paida karta hai? Chaliye seekhte hain **Biot-Savart Law**!
