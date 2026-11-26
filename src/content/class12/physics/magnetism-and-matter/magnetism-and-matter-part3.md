# Chapter: Magnetism and Matter (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Earth's Magnetism](magnetism-and-matter-part2.md)

---

## Solenoid mein Soft Iron Rod Daalte hi Jaadu!

Physics lab mein teacher ma'am ne ek khali (air-core) solenoid mein 2 A current chalaya — paas rakhe compass ki sui thoda sa hili. Phir ma'am ne usi solenoid ke andar ek **soft iron ki rod** khiska di (current wahi 2 A rakha!) — aur achanak compass ki sui jhatke se poora ghoom gayi, aur paas rakhe paper clips khinch kar iron rod se chipak gaye!

**Kanchan** ne poocha: "Ma'am, humne current bilkul nahi badhaya, phir magnetic field itna zabardast kaise badh gaya?"

Teacher ma'am muskurayi: "Solenoid ke current ne jo **Magnetic Intensity (H)** banayi, usne iron rod ke andar ke chhote-chhote atomic magnets ko ek line mein khada (**Magnetise**) kar diya! Aaj hum **H**, **M**, aur **B** ka aapsi rishta seekhenge!"

---

## Naye Shabd (New Words)

- **Magnetisation (M→):** Kisi material ke **per unit volume** mein develop hua net magnetic dipole moment: **M = m_net / Volume**. SI unit **A/m**!
- **Magnetic Intensity / Magnetising Field (H→):** External free currents (jaise solenoid ke turns aur current) dwara banayi gayi magnetising taqat: **H = n I** (for solenoid). SI unit **A/m**! (Yeh sirf free current par depend karta hai, core material par nahi!)
- **Magnetic Susceptibility (χ):** Kisi material ki magnetise hone ki aasaani (kitna M banta hai per unit H): **χ = M / H**. Dimensionless number!
- **Relative Permeability (μ_r):** Material ki magnetic permeability (μ) aur vacuum permeability (μ₀) ka ratio: **μ_r = μ / μ₀ = 1 + χ**.

---

## 1. B, H aur M ka Rishta

Jab solenoid (turns per unit length **n**, current **I**) ke andar koi material rakha jaata hai, to total magnetic field **B** do hisson se milkar banta hai:
1. Solenoid ke free current se bana field: **B₀ = μ₀ n I = μ₀ H**
2. Material ke andar atomic dipoles ke align hone (magnetisation **M**) se bana extra field: **B_m = μ₀ M**

Dono ko jod do!

**B = B₀ + B_m = μ₀ (H + M)**

### Susceptibility (χ) aur Permeability (μ) ke Relations:
Linear magnetic materials ke liye magnetisation **M**, magnetising field **H** ke proportional hota hai:

**M = χ H**

Isse B ke formula mein rakho:
B = μ₀ (H + χ H) = **μ₀ (1 + χ) H**

Hum **μ = μ₀ (1 + χ)** ko material ki **Magnetic Permeability** aur **μ_r = 1 + χ** ko **Relative Permeability** kehte hain! Isliye:

**B = μ H = μ₀ μ_r H**   aur   **μ_r = 1 + χ**

### Farq Saaf Rakho (B vs H vs M):
- **H = n I** (unit **A/m**): Sirf bahar ke free current par depend karta hai — core badalne se H **nahi badalta**!
- **M = χ H** (unit **A/m**): Sirf material ke andar ke atomic dipoles ki wajah se hota hai!
- **B = μ₀(H + M)** (unit **Tesla, T**): Total resultant magnetic field — yahi compass ya wire par force lagata hai!

---

## Solved Examples

### Example 1: Solenoid with a Ferromagnetic Core
A solenoid has **n = 1000 turns per metre** and carries a current of **I = 2.0 A**. Its core is made of iron with relative permeability **μ_r = 400**. Calculate:
(a) the magnetic intensity **H**,
(b) the magnetic susceptibility **χ**,
(c) the magnetisation **M**, and
(d) the total magnetic field **B** inside the core (take π = 3.14).

**Hal (Solution):**
- (a) **H = n I** = 1000 × 2.0 = **2000 A/m**.
- (b) μ_r = 1 + χ ⟹ **χ = μ_r − 1 = 400 − 1 = 399**.
- (c) **M = χ H** = 399 × 2000 = **7.98 × 10⁵ A/m**.
- (d) **B = μ₀ μ_r H** = (4 × 3.14 × 10⁻⁷) × 400 × 2000
  = 12.56 × 10⁻⁷ × 8 × 10⁵ = 100.48 × 10⁻² ≈ **1.005 T**.
- **Jaanch:** B = μ₀(H + M) = 12.56 × 10⁻⁷ × (2000 + 798000) = 12.56 × 10⁻⁷ × 800000 = 1.0048 T ≈ 1.005 T ✅.

### Example 2: Magnetisation of an Iron Bar
An iron bar of dimensions **10 cm × 2 cm × 1 cm** has a net magnetic dipole moment of **m = 1.6 A m²**. Calculate its magnetisation **M**.

**Hal (Solution):**
- Volume V = 0.10 × 0.02 × 0.01 = **2.0 × 10⁻⁵ m³**.
- M = m / V = 1.6 / (2.0 × 10⁻⁵) = **8.0 × 10⁴ A/m**.
- **Jaanch:** 8.0 × 10⁴ × 2.0 × 10⁻⁵ = 1.6 A m² ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Core badalne par Magnetic Intensity H ko bhi badal dena:**
   - *Galat:* Iron core daalne par H bhi 400 guna badh gaya.
   - *Sahi:* **H = n I** sirf solenoid ke current aur turns par depend karta hai — iron core daalne par **H bilkul nahi badalta**, sirf **M** aur **B** badhte hain!
2. **μ_r = χ likh dena (1 jodna bhool jaana!):**
   - *Galat:* Agar χ = 399 hai to μ_r = 399 likhna.
   - *Sahi:* **μ_r = 1 + χ**! (Vacuum mein χ = 0 hota hai, isliye μ_r = 1 + 0 = 1!)
3. **M aur H ki unit Tesla likh dena:**
   - *Galat:* H = 2000 T likhna.
   - *Sahi:* Sirf **B** ki unit **Tesla (T)** hai; **H** aur **M** dono ki SI unit **A/m** hai!

---

## Quick Recap

| Quantity | Symbol & Formula | SI Unit |
|---|---|---|
| Magnetic Intensity | H = n I (solenoid) | A/m |
| Magnetisation | M = m_net / V = χ H | A/m |
| Magnetic Field | B = μ₀(H + M) = μ₀ μ_r H | Tesla (T) |
| Susceptibility & Relative Permeability | χ = M / H; μ_r = 1 + χ = μ / μ₀ | Both dimensionless |

---

## Practice Questions

1. Define magnetisation (M) and magnetic intensity (H). Write their SI units.
2. Write the mathematical relation connecting B, H, and M, and deduce μ_r = 1 + χ from it.
3. A solenoid has 500 turns/m and carries a current of 4 A. Find the magnetic intensity H inside the solenoid. Does H change if a soft iron core is inserted?
4. A material has a magnetic susceptibility χ = 99. Find its relative permeability μ_r and absolute permeability μ (take π = 3.14).
5. In Question 3, if the soft iron core has μ_r = 500, calculate (a) the magnetisation M, and (b) the total magnetic field B inside the core (take π = 3.14).
6. A cylindrical iron rod of length 20 cm and cross-sectional area 5 cm² has a magnetic dipole moment of 4.0 A m². Calculate its magnetisation M.
7. What are the values of χ and μ_r for vacuum (free space)?
8. A diamagnetic material has χ = −1.0 × 10⁻⁵. Calculate its relative permeability μ_r. Is μ_r greater than 1 or less than 1?
9. State whether True or False: Magnetic susceptibility χ has the SI unit A/m.
10. Inside a Rowland ring (toroid) with a core, H = 1500 A/m and B = 0.942 T. Calculate the relative permeability μ_r of the core (take π = 3.14).

### Answers

1. **Magnetisation (M):** Per unit volume net magnetic dipole moment (M = m_net/V). **Magnetic Intensity (H):** External free currents dwara banaya magnetising field (H = nI). Dono ki SI unit **A/m** hai.

2. **B = μ₀ (H + M)**. Since M = χ H, B = μ₀ (1 + χ) H. Comparing with B = μ H = μ₀ μ_r H gives **μ_r = 1 + χ**.

3. H = n I = 500 × 4 = **2000 A/m**. **Nahi**, iron core daalne par H bilkul nahi badalta (sirf B aur M badhte hain!).
   Jaanch: 500 × 4 = 2000 A/m ✅.

4. μ_r = 1 + χ = 1 + 99 = **100**.
   μ = μ₀ μ_r = (4 × 3.14 × 10⁻⁷) × 100 = **1.256 × 10⁻⁴ T m/A**.
   Jaanch: 1 + 99 = 100; 12.56 × 10⁻⁵ = 1.256 × 10⁻⁴ ✅.

5. χ = μ_r − 1 = 500 − 1 = 499; H = 2000 A/m:
   (a) M = χ H = 499 × 2000 = **9.98 × 10⁵ A/m**.
   (b) B = μ₀ μ_r H = (4 × 3.14 × 10⁻⁷) × 500 × 2000 = 12.56 × 10⁻⁷ × 10⁶ = **1.256 T**.
   Jaanch: 500 × 2000 = 10⁶; 12.56 × 10⁻¹ = 1.256 T ✅.

6. Volume V = A L = (5 × 10⁻⁴ m²) × (0.20 m) = 1.0 × 10⁻⁴ m³.
   M = m / V = 4.0 / (1.0 × 10⁻⁴) = **4.0 × 10⁴ A/m**.
   Jaanch: 4.0 × 10⁴ × 10⁻⁴ = 4.0 A m² ✅.

7. Vacuum mein koi atoms nahi ⟹ **χ = 0** aur **μ_r = 1 + 0 = 1**.

8. μ_r = 1 + (−1.0 × 10⁻⁵) = **0.99999** (slightly **less than 1**!).

9. **False ❌.** χ = M / H do same-unit quantities (A/m) ka ratio hai — isliye χ **dimensionless (unitless)** hai!

10. B = μ₀ μ_r H ⟹ μ_r = B / (μ₀ H) = 0.942 / (4 × 3.14 × 10⁻⁷ × 1500)
    = 0.942 / (18.84 × 10⁻⁴) = 9420 / 18.84 = **500**.
    Jaanch: 4 × 3.14 × 1.5 = 18.84; 18.84 × 500 = 9420 ⟹ 0.942 T ✅.

---

Ab tum B, H, M, χ aur μ_r ke sabhi rishton ko achhi tarah samajh chuke ho!

**Agle topic mein:** Duniya ke saare materials ko magnetic vyavahaar ke hisaab se teen groups mein baantenge — **Diamagnetic, Paramagnetic aur Ferromagnetic** — aur **Electromagnets vs Permanent Magnets** ka raaz kholenge!
