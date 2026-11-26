# Chapter: Current Electricity

> **Class:** 12 | **Subject:** Physics
> **Previous chapter:** [Electrostatic Potential and Capacitance](../electrostatic-potential-and-capacitance/electrostatic-potential-and-capacitance-part5.md)

---

## Railway Ticket Counter ki Lambi Line aur Drift Velocity

**Arpita** subah station par lambi ticket line mein khadi thi. Jaise hi 8:00 baje counter khulne ki ghanti baji, khabar ek second ke andar sabse peeche khade Arpita tak pahunch gayi! Par line khud kachhue ki chaal se sirf thoda-thoda aage badh rahi thi.

Papa ne muskurakar kaha: "Arpita, taar (wire) ke andar bijli ke saath bhi bilkul yahi hota hai! Switch dabate hi electric field (signal) lagbhag light ki speed se poore wire mein pahunch jaata hai aur bulb turant jal uthta hai — lekin taar ke andar **free electrons** khud sirf ek millimetre per second se bhi dheeme khisakte hain! Is dheemi average speed ko **Drift Velocity** kehte hain."

Class 10 mein tumne [Current Electricity II](../../../class10/physics/current-electricity-ii/current-electricity-ii.md) mein Ohm's law aur basic circuits padhe the. Aaj Class 12 mein hum taar ke **andar** jhaank kar dekhenge ki current microscopic level par kaise banta hai!

---

## Naye Shabd (New Words)

- **Electric Current (I):** Kisi cross-section se per second guzarne wala net charge: I = Q / t (ya instantaneous rate ΔQ / Δt). **Scalar** quantity; SI unit **Ampere (A) = C/s**.
- **Current Density (J→):** Per unit cross-sectional area behne wala current: J = I / A. **Vector** quantity (conventional current ki direction mein); SI unit **A/m²**.
- **Drift Velocity (v_d):** External electric field lagane par free electrons ki woh chhoti average velocity jisse woh positive terminal ki taraf khisakte hain.
- **Relaxation Time (τ):** Kisi free electron ki do lagataar collisions (metal ions ke saath takkaron) ke beech ka average samay (lagbhag 10⁻¹⁴ s).
- **Mobility (μ):** Per unit electric field par milne wali drift velocity: μ = v_d / E. SI unit **m²/(V s)**.

---

## 1. Electric Current aur Current Density

Jab kisi conductor ke do sirhon par battery lagayi jaati hai, to andar ek electric field **E** ban jaata hai.
- **Electric Current:** **I = Q / t**. Yaad rakho: current ki direction dikhate zaroor hain (+ se − ki taraf), par yeh **scalar** hai kyunki do taaron se aane wale currents vector addition nahi, seedha algebraic sum (3 A + 4 A = 7 A) follow karte hain!
- **Current Density:** **J = I / A** (agar area A current ke perpendicular ho). Yeh **vector** quantity hai!

---

## 2. Drift Velocity (v_d) aur Relaxation Time (τ)

Jab koi battery nahi lagi hoti, to metal ke andar free electrons thermal energy ke karan bahut tez (~10⁵ m/s) **random directions** mein bhaagte rehte hain — unki average velocity **ZERO** hoti hai (isliye koi current nahi behta!).

Battery lagane par electric field **E** har electron (charge −e, mass m) par force **F = −e E** lagata hai:
- Har electron ka acceleration: **a = −(e E) / m** (E ke opposite direction mein).
- Do collisions ke beech average time **τ (relaxation time)** hai. Har takkar ke baad electron phir random ho jaata hai, isliye uski average drift speed milti hai:

**v_d = (e E τ) / m**  *(magnitude)*

### Current aur Drift Velocity ka Rishta (I = n e A v_d):
Maan lo taar ka cross-sectional area **A** hai aur uske har 1 m³ volume mein **n** free electrons hain (free electron number density).

```
      <---- v_d (electrons drift left)
      ============================
      :  e-  e-  e-  :           :  Area = A
      ============================
      :<--- v_d t -->:
      --------> I (conventional current right)
```

- Time **t** mein electrons length **l = v_d t** chalte hain.
- Is length ka volume = **A × (v_d t)**.
- Is volume mein total free electrons = **n A v_d t**.
- Total charge guzra **Q = (n A v_d t) × e**.
- Current I = Q / t ⟹

**I = n e A v_d**   aur   **J = I / A = n e v_d**

---

## 3. Mobility (μ) aur Microscopic Ohm's Law (J = σ E)

- **Mobility:** **μ = v_d / E = (e τ) / m**. Jitni zyada mobility, utni aasaani se charge carriers chal sakte hain!
- Ab J = n e v_d mein v_d = (e E τ)/m rakho:
  **J = (n e² τ / m) × E**
- Bracket ke andar ki quantity sirf material aur temperature par depend karti hai — ise **Conductivity (σ)** kehte hain!
  **σ = n e² τ / m**  (aur Resistivity **ρ = 1/σ = m / (n e² τ)**).
- Isse milta hai **Ohm's Law ka Vector Form**:

**J = σ E**  *(ya E = ρ J)*

### Limitations of Ohm's Law (Kahan V ∝ I Fail Hota Hai?):
1. **Non-linear V-I graph:** Jaise metal filament bahut garam ho jaaye to R badh jaata hai aur graph seedhi line nahi rehta.
2. **Direction-dependent (Diode):** Semiconductor diode mein forward aur reverse voltage ke liye current bilkul alag hota hai.
3. **Non-unique V for same I:** Kuch materials (jaise Gallium Arsenide, GaAs) mein ek hi current value ke liye ek se zyada voltage values ho sakti hain!

---

## Solved Examples

### Example 1: Copper Wire mein Drift Velocity
A copper wire of cross-sectional area **A = 2.0 × 10⁻⁶ m²** carries a current of **I = 3.2 A**. If the free electron density in copper is **n = 8.0 × 10²⁸ m⁻³**, calculate the drift velocity **v_d** of electrons. (Take e = 1.6 × 10⁻¹⁹ C.)

**Hal (Solution):**
- Formula: I = n e A v_d ⟹ **v_d = I / (n e A)**.
- Denominator: n e A = (8.0 × 10²⁸) × (1.6 × 10⁻¹⁹) × (2.0 × 10⁻⁶)
  = (8 × 1.6 × 2) × 10³ = 25.6 × 10³ = 2.56 × 10⁴ C/m.
- v_d = 3.2 / (2.56 × 10⁴) = (3.2 / 2.56) × 10⁻⁴ = **1.25 × 10⁻⁴ m/s** (= 0.125 mm/s — dekha kitna dheema hai!).
- **Jaanch:** 2.56 × 1.25 = 3.2; 10⁴ × 10⁻⁴ = 1 ⟹ I = 3.2 A ✅.

### Example 2: Mobility aur Current Density
In a semiconductor bar, electrons have mobility **μ = 4.0 × 10⁻³ m²/(V s)**. If an electric field of **E = 5 V/m** is applied across it, find the drift velocity of the electrons.

**Hal (Solution):**
- μ = v_d / E ⟹ **v_d = μ E** = (4.0 × 10⁻³) × 5 = **2.0 × 10⁻² m/s = 2 cm/s**.
- **Jaanch:** (2.0 × 10⁻²) / 5 = 4.0 × 10⁻³ m²/(V s) ✅.

### Example 3: Number of Electrons Flowing per Second
A steady current of **0.8 A** flows through a torch bulb for **1 minute**. How many electrons pass through any cross-section of the filament?

**Hal (Solution):**
- t = 1 min = 60 s ⟹ Total charge Q = I t = 0.8 × 60 = **48 C**.
- Number of electrons N = Q / e = 48 / (1.6 × 10⁻¹⁹) = **3.0 × 10²⁰ electrons**.
- **Jaanch:** 3.0 × 10²⁰ × 1.6 × 10⁻¹⁹ = 48 C ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Sochna ki electrons taar mein light ki speed se daudte hain:**
   - *Galat:* Switch dabate hi bulb jal jaata hai, isliye v_d ≈ 3 × 10⁸ m/s hota hai.
   - *Sahi:* **Electric field (signal)** light ki speed ke aas-paas failta hai, jisse poore wire ke saare electrons ek saath khisakna shuru kar dete hain — par har electron ki **drift velocity sirf ~10⁻⁴ m/s** hoti hai!
2. **Electric current I ko vector bol dena:**
   - *Galat:* Current ki direction hoti hai isliye I vector hai.
   - *Sahi:* **I scalar hai** (wire modne par current addition nahi badalta). **Current density J = I/A vector hai!**
3. **Har circuit element par Ohm's law (V ∝ I) lagana:**
   - *Galat:* Diode ya LED ka resistance constant maan lena.
   - *Sahi:* Ohm's law universal law nahi hai — diodes, transistors aur garam filaments **non-ohmic** hote hain!

---

## Quick Recap

| Quantity | Formula | SI Unit & Type |
|---|---|---|
| Electric Current | I = Q / t = n e A v_d | Ampere (A); **Scalar** |
| Current Density | J = I / A = n e v_d = σ E | A/m²; **Vector** |
| Drift Velocity | v_d = e E τ / m = μ E | m/s (~10⁻⁴ m/s in metals) |
| Mobility | μ = v_d / E = e τ / m | m²/(V s) |
| Conductivity & Resistivity | σ = n e² τ / m; ρ = m / (n e² τ) | S/m (or Ω⁻¹m⁻¹); Ω m |

---

## Practice Questions

1. Distinguish between electric current I and current density J. State which one is a scalar and which one is a vector.
2. Why does an electric bulb glow almost instantly when the switch is turned on, even though the drift velocity of electrons in the wire is very small (~0.1 mm/s)?
3. A current of 4.8 A flows through a copper wire of cross-sectional area 3.0 × 10⁻⁶ m². Calculate (a) the current density J, and (b) the drift velocity of electrons (take n = 8.0 × 10²⁸ m⁻³, e = 1.6 × 10⁻¹⁹ C).
4. How many electrons flow through a conductor in 10 seconds if the steady current is 1.6 A?
5. If the radius of a current-carrying wire is doubled while keeping the same current I, what happens to (a) the current density J, and (b) the drift velocity v_d?
6. Define mobility of charge carriers and write its SI unit.
7. An electric field of 12 V/m produces a drift velocity of 6.0 × 10⁻² m/s in a conductor. Calculate the mobility of the charge carriers.
8. State two limitations of Ohm's law with one example each.
9. State whether True or False: In the absence of an external electric field, free electrons inside a metal are completely at rest.
10. A wire of uniform cross-section carries a current I = 2 A. If the conductivity of the wire is σ = 5.0 × 10⁷ S/m and its cross-sectional area is 1.0 × 10⁻⁶ m², find the electric field E inside the wire using J = σ E.

### Answers

1. **Current (I = Q/t)** total charge flow rate hai — yeh **scalar** hai (unit A). **Current density (J = I/A)** per unit area current hai — yeh **vector** hai (unit A/m²).

2. Switch on karte hi **electric field** lagbhag light ki speed (~3 × 10⁸ m/s) se poore wire mein set up ho jaata hai. Wire aur filament ke andar pehle se maujood sabhi free electrons ek hi moment par drift karna shuru kar dete hain, isliye bulb turant jal uthta hai!

3. (a) J = I / A = 4.8 / (3.0 × 10⁻⁶) = **1.6 × 10⁶ A/m²**.
   (b) v_d = J / (n e) = (1.6 × 10⁶) / (8.0 × 10²⁸ × 1.6 × 10⁻¹⁹) = 10⁶ / (8.0 × 10⁹) = **1.25 × 10⁻⁴ m/s**.
   Jaanch: 1.6 kat gaya; 1 / 8000 = 1.25 × 10⁻⁴ m/s ✅.

4. Q = I t = 1.6 × 10 = 16 C.
   N = Q / e = 16 / (1.6 × 10⁻¹⁹) = **1.0 × 10²⁰ electrons**.
   Jaanch: 10²⁰ × 1.6 × 10⁻¹⁹ = 16 C ✅.

5. Radius double ⟹ Area A = πr² **4 guna** ho jaata hai (4A):
   (a) J = I / A ⟹ J **1/4 guna (one-fourth)** ho jayegi.
   (b) v_d = I / (n e A) ⟹ v_d bhi **1/4 guna (one-fourth)** ho jayegi!

6. **Mobility (μ):** Per unit electric field par charge carriers ki drift velocity (μ = v_d / E). SI unit: **m²/(V s)**.

7. μ = v_d / E = (6.0 × 10⁻²) / 12 = **5.0 × 10⁻³ m²/(V s)**.
   Jaanch: 5 × 10⁻³ × 12 = 60 × 10⁻³ = 6.0 × 10⁻² m/s ✅.

8. (i) V-I graph non-linear ho jaata hai (example: heated metallic filament).
   (ii) V aur I ka relation voltage ki polarity par depend karta hai (example: semiconductor p-n junction diode).

9. **False ❌.** Bina electric field ke bhi free electrons thermal motion ke karan ~10⁵ m/s ki speed se random directions mein bhaagte rehte hain — bas unki **average velocity zero** hoti hai!

10. J = I / A = 2 / (1.0 × 10⁻⁶) = 2.0 × 10⁶ A/m².
    J = σ E ⟹ E = J / σ = (2.0 × 10⁶) / (5.0 × 10⁷) = **0.04 V/m = 4.0 × 10⁻² V/m**.
    Jaanch: 5 × 10⁷ × 0.04 = 2.0 × 10⁶ A/m² ✅.

---

Ab tum Current, Drift Velocity, Mobility aur Microscopic Ohm's Law ka poora scene samajh chuke ho!

**Agle topic mein:** Taapmaan badhne par metals aur semiconductors ka resistance ulta kyun behave karta hai, aur chhote-chhote resistors par bani **rangeen pattiyon (Colour Code)** ko padhna seekhenge!
