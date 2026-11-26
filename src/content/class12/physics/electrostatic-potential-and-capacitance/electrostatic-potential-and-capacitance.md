# Chapter: Electrostatic Potential and Capacitance

> **Class:** 12 | **Subject:** Physics
> **Previous chapter:** [Electric Charges and Fields](../electric-charges-and-fields/electric-charges-and-fields-part5.md)

---

## Seedhiyan ya Ramp — Oonchai Wahi Rahegi!

**Amol** ko bhaari cricket kit bag lekar apne ghar ki teesri manzil (3rd floor) ki chhat par jaana tha. Neeche se upar jaane ke do raaste the: seedhiyan (seedha aur chhota raasta) ya bagal ka lamba ghumavdaar ramp. Jab woh upar pahuncha, to Didi ne poocha: "Amol, agar tu ramp se aata to kya tujhe gravity ke khilaaf alag potential energy milti?"

Amol ne sochkar kaha: "Nahi! Oonchai (height) wahi 10 metre hai, isliye gravitational potential energy ka change **raaste par depend nahi karta** — sirf starting aur ending point par depend karta hai!"

Bilkul yahi baat electrostatic force par bhi laagu hoti hai! Class 9 mein tumne [Electricity](../../../class9/physics/electricity/electricity.md) mein potential difference aur Volt ka basic parichay padha tha. Aaj Class 12 mein hum **Electrostatic Potential** ko point charge, dipole aur charges ke system ke liye exact formulas ke saath seekhenge!

---

## Naye Shabd (New Words)

- **Electrostatic Potential (V):** Infinity se ek unit positive test charge (+1 C) ko bina accelerate kiye (dheere-dheere) kisi point tak laane mein external agent dwara kiya gaya kaam: V = W_∞ / q₀. Scalar quantity hai; SI unit **Volt (V) = J/C**.
- **Potential Difference (ΔV = V_B − V_A):** Ek unit positive charge ko point A se point B tak le jaane mein kiya gaya external work: V_B − V_A = W_AB / q₀.
- **Conservative Force:** Aisa force (jaise electrostatic force aur gravity) jismein kiya gaya kaam raaste (path) par depend nahi karta, sirf initial aur final position par depend karta hai.
- **Superposition of Potentials:** Kai charges ke karan kisi point par net potential sabhi individual potentials ka **seedha algebraic (scalar) sum** hota hai — sign (+ ya −) ke saath!

---

## 1. Electrostatic Potential aur Potential Difference

Electrostatic force ek **conservative force** hai. Iska matlab hai ki kisi test charge q₀ ko point A se point B tak chahe seedhe raaste se le jao ya ghumavdaar raaste se, electric field ke khilaaf kiya gaya external work **W_AB** hamesha same rehta hai!

Isliye hum **Potential Difference** define karte hain:

**V_B − V_A = W_AB / q₀**   ya   **W_AB = q₀ (V_B − V_A)**

Agar starting point A ko **infinity (∞)** par maan lein (jahan electric field zero hai aur hum reference **V_∞ = 0** maante hain), to kisi point P par **Electrostatic Potential (V)** hota hai:

**V = W_∞→P / q₀**

- **SI Unit:** Joule/Coulomb = **Volt (V)**.
- **Scalar Quantity:** Iski koi direction nahi hoti! Sirf magnitude aur sign (+ ya −) hota hai. Yahi iski sabse badi taqat hai — vectors ki jhanjhat khatam!

---

## 2. Point Charge ke Karan Electrostatic Potential

Maan lo ek point charge **+q** origin par rakha hai. Humein usse doori **r** par electrostatic potential **V** nikaalna hai.

- Infinity se doori r tak +1 C charge ko laane mein har chhote kadam par lagne wala electrostatic repulsion **F = kq / x²** badhta jaata hai (kyunki x ghat raha hai).
- Sabhi chhote-chhote kaamon (F Δx) ko infinity se r tak jodkar (integration ka idea — chhote hisson ka total sum) jo exact result milta hai, woh hai:

**V = (1 / 4πε₀) × (q / r) = k q / r**

jahan **k = 1 / (4πε₀) = 9 × 10⁹ N m²/C²**.

### Kamaal ki Baatein:
1. **Sign zaroor rakho!** Positive charge (+q) ka potential **positive (+V)** hota hai, aur negative charge (−q) ka potential **negative (−V)** hota hai.
2. **Distance dependence:** Electric field **E ∝ 1/r²** se ghatta hai, par potential **V ∝ 1/r** se dheere ghatta hai!

```
   V, E
   ^
   :  :
   :  :   V proportional to 1/r (falls slowly)
   :   : . . .
   :    :      . . .
   :     : .         . . .
   :       :  . E proportional to 1/r^2 (falls faster)
   +---------+---------------> r
   0
```

---

## 3. Electric Dipole ke Karan Potential

Maan lo ek chhota electric dipole (charges **−q** aur **+q**, separation **2a**, dipole moment **p = q × 2a**) origin par rakha hai. Humein centre O se doori **r (>> a)** par aur dipole axis se angle **θ** par kisi point P par potential nikaalna hai.

- +q se P ki doori lagbhag **r₁ ≈ r − a cos θ** hoti hai.
- −q se P ki doori lagbhag **r₂ ≈ r + a cos θ** hoti hai.
- Superposition se net potential:
  V = kq / r₁ + k(−q) / r₂ = kq [ 1/(r − a cos θ) − 1/(r + a cos θ) ]
  = kq [ (2a cos θ) / (r² − a² cos² θ) ]
- Kyunki **r >> a**, a² cos² θ ko r² ke muqable chhoda ja sakta hai, aur q(2a) = p:

**V = (k p cos θ) / r²**

### Do Khaas Positions:
1. **Axial Line (θ = 0° ya 180°):** cos 0° = +1, cos 180° = −1 ⟹ **V_axial = ± k p / r²**.
2. **Equatorial Line (θ = 90°):** cos 90° = 0 ⟹ **V_equatorial = 0**!
   *(Dhyaan do! Equatorial line par **V = 0** hai, par Pichhle chapter mein dekha tha ki wahan electric field **E_eq = kp/r³ ≠ 0** hota hai! Yaani V = 0 hone ka matlab E = 0 nahi hota!)*

---

## 4. System of Charges ke Karan Potential (Superposition Principle)

Agar kai point charges q₁, q₂, q₃, ..., q_n kisi point P se dooriyon r₁, r₂, r₃, ..., r_n par rakhe hon, to P par net potential un sabke individual potentials ka **seedha algebraic sum** hota hai:

**V_net = V₁ + V₂ + V₃ + ... = k ( q₁/r₁ + q₂/r₂ + q₃/r₃ + ... )**

---

## Solved Examples

### Example 1: Point Charge ka Potential aur Work Done
(a) Calculate the electrostatic potential at a distance of **20 cm** from a point charge **q = +4 μC**.
(b) How much work is done in moving a charge of **2 μC** from a point at 30 V to a point at 80 V?

**Hal (Solution):**
- (a) q = 4 × 10⁻⁶ C, r = 20 cm = 0.20 m:
  V = k q / r = (9 × 10⁹ × 4 × 10⁻⁶) / 0.20 = (36 × 10³) / 0.20 = **1.8 × 10⁵ V**.
  **Jaanch:** 36 / 0.2 = 180 ⟹ 180 × 10³ = 1.8 × 10⁵ V ✅.
- (b) ΔV = V_B − V_A = 80 − 30 = 50 V, q₀ = 2 × 10⁻⁶ C:
  W = q₀ ΔV = (2 × 10⁻⁶) × 50 = **1.0 × 10⁻⁴ J**.
  **Jaanch:** 2 × 50 = 100 ⟹ 100 × 10⁻⁶ = 10⁻⁴ J ✅.

### Example 2: Electric Dipole ka Potential
An electric dipole has dipole moment **p = 3 × 10⁻⁹ C m**. Find the electrostatic potential at a distance of **r = 30 cm** from its centre on:
(a) the axial line (θ = 0°),
(b) the equatorial line (θ = 90°),
(c) a line making **60°** with the dipole axis.

**Hal (Solution):**
- r = 30 cm = 0.30 m ⟹ r² = 0.09 m².
- (a) Axial (θ = 0°): V = kp / r² = (9 × 10⁹ × 3 × 10⁻⁹) / 0.09 = 27 / 0.09 = **300 V**.
- (b) Equatorial (θ = 90°): cos 90° = 0 ⟹ **V = 0 V**.
- (c) θ = 60°: cos 60° = 0.5 ⟹ V = 300 × 0.5 = **150 V**.
- **Jaanch:** 9 × 3 = 27; 27 / 0.09 = 300; 300 × 0.5 = 150 ✅.

### Example 3: Square ke Centre par Net Potential
Four charges **+2 μC, −2 μC, +3 μC, and −3 μC** are placed at the four corners of a square of side **10 cm**. Find the net electric potential at the centre of the square.

**Hal (Solution):**
- Har corner se centre ki doori barabar (r = diagonal/2 = 5√2 cm) hogi.
- Potential scalar hai ⟹ seedha algebraic sum:
  V_net = (k / r) × (q₁ + q₂ + q₃ + q₄)
  = (k / r) × (+2 − 2 + 3 − 3) μC = (k / r) × 0 = **0 V**!
- **Jaanch:** +2 − 2 + 3 − 3 = 0 ⟹ V_net = 0 ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Potentials ko vectors ki tarah jodna ya negative charge ka sign chhod dena:**
   - *Galat:* −3 μC ka potential +kq/r likhna ya x-y components nikaalna.
   - *Sahi:* Potential **scalar** hai! Components ki bilkul zaroorat nahi, bas har charge ka **+ ya − sign** formula mein zaroor rakho!
2. **Point charge ke potential mein r ki jagah r² laga dena:**
   - *Galat:* V = kq / r² likh dena (electric field ke formula se confuse hokar).
   - *Sahi:* Point charge: **E = kq/r²**, par **V = kq/r**! (Aur dipole mein: E ∝ 1/r³, par **V ∝ 1/r²**!)
3. **Yeh maan lena ki jahan V = 0 hai wahan E bhi 0 hoga:**
   - *Galat:* Dipole ki equatorial line par V = 0 hai to E bhi 0 hoga.
   - *Sahi:* Equatorial line par **V = 0** hota hai, lekin **E = kp/r³ ≠ 0** hota hai! (Isi tarah hollow charged shell ke andar E = 0 hai, par V ≠ 0!)

---

## Quick Recap

| Concept | Formula | Key Property |
|---|---|---|
| Potential & Potential Difference | V = W_∞/q₀; W_AB = q₀(V_B − V_A) | Scalar; unit Volt (J/C); path-independent |
| Point Charge Potential | V = k q / r | Sign of q included; V ∝ 1/r |
| Short Electric Dipole Potential | V = (k p cos θ) / r² | Axial: ±kp/r²; Equatorial: 0; V ∝ 1/r² |
| System of Charges | V = Σ (k q_i / r_i) | Direct algebraic sum (no vectors!) |

---

## Practice Questions

1. Define 1 Volt of electrostatic potential. Is electrostatic potential a scalar or a vector?
2. Calculate the electrostatic potential at a point 15 cm away from a point charge of −6 μC.
3. How much work is done by an external agent in moving a charge of +5 μC from a point at −20 V to a point at +40 V?
4. Does the work done in moving a test charge from point A to point B in an electrostatic field depend on the path followed? Give the reason.
5. An electric dipole of dipole moment p = 6 × 10⁻⁹ C m is placed at the origin. Find the potential at a distance of 60 cm from its centre on (a) the axial line, and (b) the equatorial line.
6. Two point charges +3 μC and +5 μC are placed at the two ends of a line segment of length 20 cm. Find the net electric potential at the midpoint of the line segment.
7. Six identical charges of +2 μC each are placed at the vertices of a regular hexagon of side 10 cm. Find the electric potential at the centre of the hexagon.
8. State whether True or False: At any point on the equatorial plane of an electric dipole, both the electric potential and the electric field are zero.
9. A charge of +8 μC is located at the origin. Calculate the work done in taking a small charge of −2 × 10⁻⁹ C from a point P (r = 3 cm) to a point Q (r = 6 cm).
10. Find the distance from a +5 μC point charge where the electrostatic potential is 9 × 10⁴ V.

### Answers

1. **1 Volt:** Jab +1 C charge ko infinity se kisi point tak bina accelerate kiye laane mein **1 Joule** kaam karna pade, to us point ka potential 1 Volt hota hai (1 V = 1 J/C). Yeh ek **scalar** quantity hai.

2. q = −6 × 10⁻⁶ C, r = 0.15 m:
   V = (9 × 10⁹ × (−6 × 10⁻⁶)) / 0.15 = (−54 × 10³) / 0.15 = **−3.6 × 10⁵ V**.
   Jaanch: 54 / 0.15 = 5400 / 15 = 360 ⟹ −3.6 × 10⁵ V ✅.

3. ΔV = +40 − (−20) = +60 V.
   W = q₀ ΔV = (5 × 10⁻⁶) × 60 = **3.0 × 10⁻⁴ J**.
   Jaanch: 5 × 60 = 300 ⟹ 300 × 10⁻⁶ = 3.0 × 10⁻⁴ J ✅.

4. **Nahi (path-independent)!** Kyunki electrostatic force ek **conservative force** hai — kiya gaya kaam sirf initial aur final points ke potential difference par depend karta hai.

5. r = 0.60 m ⟹ r² = 0.36 m²:
   (a) Axial: V = (9 × 10⁹ × 6 × 10⁻⁹) / 0.36 = 54 / 0.36 = **150 V**.
   (b) Equatorial: **V = 0 V**.
   Jaanch: 54 / 0.36 = 5400 / 36 = 150 ✅.

6. Midpoint dono charges se r = 10 cm = 0.10 m par hai:
   V = k(q₁ + q₂) / r = (9 × 10⁹ × 8 × 10⁻⁶) / 0.10 = (72 × 10³) / 0.10 = **7.2 × 10⁵ V**.
   Jaanch: 3 + 5 = 8; 9 × 8 / 0.1 = 720 ⟹ 7.2 × 10⁵ V ✅.

7. Regular hexagon ke centre se har vertex ki doori side ke barabar hoti hai ⟹ r = 10 cm = 0.10 m!
   6 identical charges ⟹ V = 6 × (k q / r) = 6 × (9 × 10⁹ × 2 × 10⁻⁶) / 0.10 = (108 × 10³) / 0.10 = **1.08 × 10⁶ V**.
   Jaanch: 6 × 9 × 2 = 108; 108 / 0.1 = 1080 ⟹ 1.08 × 10⁶ V ✅.

8. **False ❌.** Equatorial plane par **V = 0** hota hai, par electric field **E_eq = kp/r³** non-zero hota hai!

9. P par potential: V_P = (9 × 10⁹ × 8 × 10⁻⁶) / 0.03 = 2.4 × 10⁶ V.
   Q par potential: V_Q = (9 × 10⁹ × 8 × 10⁻⁶) / 0.06 = 1.2 × 10⁶ V.
   W_P→Q = q₀ (V_Q − V_P) = (−2 × 10⁻⁹) × (1.2 × 10⁶ − 2.4 × 10⁶) = (−2 × 10⁻⁹) × (−1.2 × 10⁶) = **+2.4 × 10⁻³ J = 2.4 mJ**.
   Jaanch: (−2)(−1.2) = +2.4; 10⁻⁹ × 10⁶ = 10⁻³ ✅.

10. V = k q / r ⟹ r = k q / V = (9 × 10⁹ × 5 × 10⁻⁶) / (9 × 10⁴) = (45 × 10³) / (90 × 10³) = **0.5 m = 50 cm**.
    Jaanch: (9 × 10⁹ × 5 × 10⁻⁶) / 0.5 = 9 × 10⁴ V ✅.

---

Ab tum Electrostatic Potential (point charge, dipole aur system of charges) aur work done ka scalar magic samajh chuke ho.

**Agle topic mein:** Pahadon ke contour map jaisi **Equipotential Surfaces**, Electric Field aur Potential ka rishta (**E = −ΔV/Δr**), aur charges ke system ki **Potential Energy** seekhenge!
