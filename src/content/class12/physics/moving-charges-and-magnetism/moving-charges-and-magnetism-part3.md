# Chapter: Moving Charges and Magnetism (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Biot-Savart Law and Circular Current Loop](moving-charges-and-magnetism-part2.md)

---

## Museum mein Cut-Open Solenoid aur Toroid Model

Science museum ke medical-physics gallery mein **Feroz** ne ek MRI machine ka cut-open model dekha. Uske andar ek lambi khokhli cylinder par copper wire ke hazaaron tight chakkar (turns) lipte hue the — aur bagal mein ek doughnut (vada) ke aakar ki gol ring par bhi wire lipti thi!

Guide ne bataya: "Lambi cylinder wali coil ko **Solenoid** kehte hain, aur doughnut wali ring ko **Toroid**. Inke andar bilkul uniform aur strong magnetic field banta hai — aur inka formula Biot-Savart se nahi, balki magnetism ke sabse bade shortcut **Ampere's Circuital Law** se sirf 3 line mein nikalta hai!"

---

## Naye Shabd (New Words)

- **Ampere's Circuital Law:** Kisi bhi closed loop (Amperian loop) ke chaaron taraf magnetic field ke tangential component ka sum (line integral), us loop ke andar se guzarne wale net current **I_enc** ka **μ₀** guna hota hai: **Σ (B · Δl) = μ₀ I_enc**.
- **Amperian Loop:** Ek kalpanik (imaginary) closed 2D path (circle ya rectangle) jo symmetry ke hisaab se chuna jaata hai.
- **Solenoid:** Insulating cylinder par paas-paas lipte hue helical copper wire ki lambi coil, jismein **n = N / L** turns per unit length hote hain.
- **Toroid:** Ek khokhli circular ring (doughnut shape) par uniformly lipti hui endless solenoid!

---

## 1. Ampere's Circuital Law (Magnetism ka Gauss's Law!)

Electrostatics mein closed **surface** par Gauss's law (Φ = q_enc / ε₀) tha. Magnetism mein closed **loop (boundary)** par **Ampere's Circuital Law** hota hai:

**Σ B_∥ Δl = μ₀ I_enc**

*(Jahan B_∥ loop ki tangent ke along magnetic field hai, Δl loop ka chhota tukda hai, aur I_enc loop ke andar se guzarne wala net current hai.)*

---

## 2. Application 1: Infinitely Long Straight Current-Carrying Wire

Maan lo ek bahut lambi seedhi taar mein current **I** upar ki taraf beh raha hai. Taar se perpendicular doori **r** par magnetic field **B** nikaalna hai:

```
             ^ I
             :
         . - ~ - .
        /    :  r \   (Amperian circle of radius r)
        \    +----/--> B (tangential everywhere!)
         ' - _ - '
             :
```

1. **Amperian Loop:** Taar ko centre maankar radius **r** ka ek circular loop banao (wire ke perpendicular plane mein).
2. **Symmetry:** Circle ke har point par B ka magnitude constant hai aur direction circle ki tangent ke along hai (θ = 0°)!
3. **Apply Ampere's Law:**
   B × (Circle ka circumference 2π r) = μ₀ I ⟹

**B = (μ₀ I) / (2π r)**

*(Shortcut: μ₀/(2π) = **2 × 10⁻⁷ T m/A**, yaani **B = (2 × 10⁻⁷ × I) / r**! Calculation 2 second mein!)*

---

## 3. Application 2: Long Straight Solenoid

Maan lo ek bahut lambe solenoid (length **L >> radius**) mein total **N** turns hain, yaani **turns per unit length n = N / L**, aur current **I** beh raha hai.

```
     (x) (x) (x) (x) (x) (x)   <-- current into page
   ----------------------------
        B ------------->        (Uniform inside!)
   ----[===== l =====]---------  <-- rectangular Amperian loop
     (.) (.) (.) (.) (.) (.)   <-- current out of page
         B = 0 (outside)
```

1. **Amperian Loop:** Length **l** ka ek rectangular loop banao jiski ek side solenoid ke **andar** (axis ke parallel), ek side **bahar** (jahan ideal long solenoid ka B ≈ 0), aur do chhoti sides field ke **perpendicular** (cos 90° = 0) hon!
2. **Line Sum:** Sirf andar wali side (length l) contribute karti hai ⟹ **Σ B Δl = B l**.
3. **Enclosed Current:** Length l mein **n l** turns aate hain, har turn mein current I ⟹ **I_enc = (n l) I**.
4. **Apply Ampere's Law:**
   B l = μ₀ (n l I) ⟹ l kat gaya!

**B = μ₀ n I**  *(inside the solenoid, away from ends!)*

*(Bonus fact: Solenoid ke bilkul **ek end (kinare)** par magnetic field andar ka theek **aadha** hota hai: **B_end = ½ μ₀ n I**!)*

---

## 4. Application 3: Toroid (Endless Solenoid!)

Toroid mein total **N** turns average radius **r** ki gol ring par lipte hote hain. Ring ka average circumference = **2π r**, isliye turns per unit length **n = N / (2π r)**.

1. **Andar ki khali jagah (inner open space):** Amperian circle mein koi wire nahi aata (I_enc = 0) ⟹ **B = 0**!
2. **Toroid ke bahar (outer open space):** Har turn mein jitna current upar jaata hai utna hi neeche wapas aata hai (net I_enc = 0) ⟹ **B = 0**!
3. **Toroid ke core ke andar (radius r):** Circle ke andar sabhi N turns ek hi taraf se guzarte hain (I_enc = N I):
   B (2π r) = μ₀ N I ⟹

**B = (μ₀ N I) / (2π r) = μ₀ n I**

---

## Solved Examples

### Example 1: Long Straight Wire
A long straight horizontal power wire carries a steady current of **I = 20 A**. Calculate the magnitude of the magnetic field at a distance of **r = 4 cm** directly below the wire.

**Hal (Solution):**
- I = 20 A, r = 4 cm = 0.04 m, μ₀/(2π) = 2 × 10⁻⁷ T m/A.
- B = (2 × 10⁻⁷ × I) / r = (2 × 10⁻⁷ × 20) / 0.04 = (40 × 10⁻⁷) / 0.04 = **1.0 × 10⁻⁴ T**.
- **Jaanch:** 40 / 0.04 = 1000; 1000 × 10⁻⁷ = 1.0 × 10⁻⁴ T ✅.

### Example 2: Long Straight Solenoid
A closely wound solenoid of length **L = 50 cm** has **N = 500 turns** and carries a current of **I = 5 A**. Calculate the magnetic field inside the solenoid (take π = 3.14).

**Hal (Solution):**
- Turns per unit length: **n = N / L = 500 / 0.50 = 1000 m⁻¹**.
- B = μ₀ n I = (4 × 3.14 × 10⁻⁷) × 1000 × 5 = 20 × 3.14 × 10⁻⁴ = **6.28 × 10⁻³ T = 6.28 mT**.
- **Jaanch:** 4 × 5 = 20; 20 × 3.14 = 62.8; 62.8 × 10⁻⁴ = 6.28 × 10⁻³ T ✅.

### Example 3: Toroid Core Field
A toroid has a non-ferromagnetic core of average radius **r = 20 cm**, wound with **N = 400 turns** carrying a current of **I = 2.0 A**. Calculate the magnetic field (a) inside the core of the toroid, and (b) outside the toroid.

**Hal (Solution):**
- (a) Inside core: B = (μ₀ N I) / (2π r) = (2 × 10⁻⁷ × N × I) / r
  = (2 × 10⁻⁷ × 400 × 2.0) / 0.20 = (1600 × 10⁻⁷) / 0.20 = **8.0 × 10⁻⁴ T**.
- (b) Outside an ideal toroid: **B = 0 T**!
- **Jaanch:** 2 × 400 × 2 = 1600; 1600 / 0.2 = 8000; 8000 × 10⁻⁷ = 8.0 × 10⁻⁴ T ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Solenoid mein n ki jagah total turns N rakh dena:**
   - *Galat:* L = 50 cm, N = 500 ke liye seedha B = μ₀ × 500 × I likh dena!
   - *Sahi:* **n = N / L** (turns **per metre**) hota hai! 500 / 0.5 = **1000 m⁻¹**!
2. **Long wire aur circular loop ke formulas aapas mein badal dena:**
   - *Galat:* Long wire mein μ₀I/(2r) likhna (π bhool jaana!).
   - *Sahi:* **Straight wire: μ₀I / (2πr)** (π hai!); **Circular loop centre: μ₀I / (2R)** (π nahi hai!).
3. **Toroid ke bahar ya andar ki khali jagah mein non-zero field nikaalna:**
   - *Galat:* Toroid ke centre par r = 0 rakh kar infinite field bol dena!
   - *Sahi:* Ideal toroid mein field **sirf core ke andar** hota hai — andar ki khali jagah aur bahar dono jagah **B = 0**!

---

## Quick Recap

| Geometry | Magnetic Field Formula | Key Detail |
|---|---|---|
| Ampere's Circuital Law | Σ B_∥ Δl = μ₀ I_enc | Magnetic analogue of Gauss's law |
| Infinitely Long Wire | B = μ₀ I / (2π r) = (2 × 10⁻⁷ I) / r | B ∝ 1/r; circular field lines |
| Long Straight Solenoid | B = μ₀ n I (n = N/L) | Uniform inside; at ends B_end = ½ μ₀ n I |
| Ideal Toroid | Inside core: B = μ₀ N I / (2π r) = μ₀ n I | Inside open space & outside: **B = 0** |

---

## Practice Questions

1. State Ampere's circuital law. What physical quantity does I_enc represent?
2. A long straight wire carries a current of 35 A. Find the magnitude of the magnetic field at a point 20 cm from the wire.
3. At what distance from a long straight wire carrying a current of 12 A is the magnetic field equal to 3.0 × 10⁻⁵ T?
4. Two long parallel wires separated by 10 cm carry currents of 4 A and 6 A in the **same direction**. Find the net magnetic field at the midpoint between the two wires.
5. A closely wound solenoid 80 cm long has 400 turns and carries a current of 8.0 A. Calculate the magnetic field inside the solenoid near its centre (take π = 3.14).
6. What is the magnetic field at one **end** of the solenoid in Question 5?
7. A solenoid has 20 turns per centimetre. What current is needed to produce a magnetic field of 2.512 × 10⁻² T inside it? (Take π = 3.14.)
8. A toroid has inner radius 25 cm and outer radius 26 cm, with 3500 turns carrying a current of 11 A. Find the average radius and the magnetic field inside the core of the toroid (take μ₀/(2π) = 2 × 10⁻⁷ T m/A).
9. State whether True or False: The magnetic field inside a very long solenoid depends strongly on its radius.
10. What is the magnetic field in the empty central hole (inner open space) of a current-carrying ideal toroid? Give the reason using Ampere's law.

### Answers

1. **Ampere's Circuital Law:** Kisi bhi closed Amperian loop ke chaaron taraf magnetic field ka line sum (Σ B_∥ Δl), us loop dwara ghere gaye surface se guzarne wale net steady current **I_enc** ka μ₀ guna hota hai.

2. B = (2 × 10⁻⁷ × 35) / 0.20 = (70 × 10⁻⁷) / 0.20 = **3.5 × 10⁻⁵ T**.
   Jaanch: 70 / 0.2 = 350; 350 × 10⁻⁷ = 3.5 × 10⁻⁵ T ✅.

3. r = (2 × 10⁻⁷ × I) / B = (2 × 10⁻⁷ × 12) / (3.0 × 10⁻⁵) = (24 × 10⁻⁷) / (3.0 × 10⁻⁵) = **0.08 m = 8 cm**.
   Jaanch: (2 × 10⁻⁷ × 12) / 0.08 = 3.0 × 10⁻⁵ T ✅.

4. Midpoint har wire se r = 5 cm = 0.05 m par hai. Right-Hand Thumb Rule se same-direction currents ke fields midpoint par **opposite directions** mein hote hain ⟹ subtract!
   B_net = (2 × 10⁻⁷ / 0.05) × (6 − 4) = (4 × 10⁻⁶) × 2 = **8.0 × 10⁻⁶ T**.
   Jaanch: B₁ = 1.6 × 10⁻⁵ T, B₂ = 2.4 × 10⁻⁵ T ⟹ 2.4 − 1.6 = 0.8 × 10⁻⁵ = 8.0 × 10⁻⁶ T ✅.

5. n = 400 / 0.80 = 500 m⁻¹.
   B = (4 × 3.14 × 10⁻⁷) × 500 × 8.0 = 16000 × 3.14 × 10⁻⁷ = 1.6 × 3.14 × 10⁻³ ≈ **5.02 × 10⁻³ T = 5.02 mT**.
   Jaanch: 4 × 500 × 8 = 16000; 16 × 3.14 = 50.24 ⟹ 5.024 × 10⁻³ T ✅.

6. End par field centre ka aadha hota hai:
   B_end = B / 2 = 5.024 / 2 ≈ **2.51 mT**.
   Jaanch: 5.024 / 2 = 2.512 mT ✅.

7. n = 20 turns/cm = **2000 turns/m**!
   I = B / (μ₀ n) = (2.512 × 10⁻²) / (4 × 3.14 × 10⁻⁷ × 2000)
   = (2.512 × 10⁻²) / (2.512 × 10⁻³) = **10.0 A**.
   Jaanch: 4 × 3.14 × 2 = 25.12 ⟹ 25.12 × 10⁻⁴ = 2.512 × 10⁻³; 10 × 2.512 × 10⁻³ = 2.512 × 10⁻² T ✅.

8. Average radius r = (25 + 26) / 2 = 25.5 cm = **0.255 m**.
   B = (2 × 10⁻⁷ × 3500 × 11) / 0.255 = (7.7 × 10⁻³) / 0.255 ≈ **3.02 × 10⁻² T = 30.2 mT**.
   Jaanch: 2 × 3500 × 11 = 77000; 77000 × 10⁻⁷ = 7.7 × 10⁻³; 7.7/0.255 ≈ 30.2 mT ✅.

9. **False ❌.** Ideal long solenoid ka field B = μ₀ n I uske radius par depend **nahi** karta!

10. **Zero (0 T)!** Andar ki khali jagah mein koi bhi circular Amperian loop banayein to uske andar koi current-carrying wire nahi aata (I_enc = 0) ⟹ Ampere's law se B = 0!

---

Ab tum Ampere's Circuital Law se Long Wire, Solenoid aur Toroid teeno ka magnetic field chutkiyon mein nikaal sakte ho!

**Agle topic mein:** Do parallel current wires ek-doosre ko kheenchte hain ya dhakelte hain, magnetic field mein current loop par **torque** kaise lagta hai, aur usi par kaam karne wala **Moving Coil Galvanometer** seekhenge!
