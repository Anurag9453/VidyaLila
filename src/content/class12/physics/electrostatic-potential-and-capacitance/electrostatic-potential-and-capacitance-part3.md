# Chapter: Electrostatic Potential and Capacitance (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Equipotential Surfaces and Potential Energy](electrostatic-potential-and-capacitance-part2.md)

---

## Metal Box aur Paani ki Dhaar ka Kamaal

Physics lab mein teacher ma'am ne do mazedaar demonstrations dikhaye (safe low-static classroom demo). **Ankur** aage ki bench par baitha dekh raha tha. Pehle teacher ma'am ne ek charged plastic rod ko ek metal jaali ke box ke paas laaya — box ke andar rakhe gold-leaf electroscope ki pattiyan bilkul nahi hili! Phir usi charged rod ko nal se girne wali patli paani ki dhaar ke paas laaya — paani ki dhaar seedha rod ki taraf mud gayi!

Ankur ne poocha: "Ma'am, metal (conductor) ne andar field ko zero kar diya, par paani (insulator/dielectric) rod ki taraf kyun khinch gaya?"

Teacher ma'am boli: "Bahut badhiya sawaal! Conductors mein **free electrons** bhaagkar andar ka field poori tarah cancel kar dete hain, jabki **Dielectrics** mein free electrons nahi hote — bas unke molecules thoda sa shift (**polarise**) ho jaate hain!"

---

## Naye Shabd (New Words)

- **Electrostatic Equilibrium (Conductor):** Woh stithi jab conductor ke andar aur satah par charges ka flow ruk chuka ho (static condition).
- **Dielectric:** Aisa insulator (non-conducting material jaise glass, mica, paper, water) jo electric current to nahi chalata, par external electric field mein rakhne par **polarise** ho jaata hai.
- **Polar Molecule:** Aisa molecule jismein positive aur negative charge ke centres pehle se alag-alag hon — yaani iska **permanent dipole moment** hota hai (udahaaran: H₂O, HCl).
- **Non-Polar Molecule:** Aisa molecule jismein positive aur negative charge ke centres ek hi jagah (coincide) hote hain — normal state mein dipole moment **zero** (udahaaran: O₂, N₂, CO₂, H₂).
- **Polarisation (P):** External electric field mein rakhne par dielectric ke **unit volume** mein develop hua net dipole moment: P = p_net / Volume (SI unit C/m²).
- **Dielectric Constant (K):** External field E₀ aur dielectric ke andar bache net field E ka anupaat: K = E₀ / E (dimensionless, hamesha K > 1; vacuum ke liye K = 1, metal ke liye K = ∞).

---

## 1. Electric Field mein Conductor ka Vyavahaar (5 Golden Properties)

Jab kisi conductor ko electrostatic condition mein rakha jaata hai (ya us par charge diya jaata hai), to uske andar ke free electrons turant tab tak arrange hote hain jab tak har electron par net force zero na ho jaaye. Isse 5 pakke niyam nikalte hain:

1. **Conductor ke Andar Electric Field ZERO (E_inside = 0):**
   Agar external field E₀ lagayein, to free electrons opposite side par ikattha hokar ek barabar aur opposite internal induced field (E_induced = −E₀) bana lete hain ⟹ **E_net = E₀ − E₀ = 0**!
2. **Conductor ke Andar Excess Charge ZERO:**
   Gauss's law se, kyunki andar har jagah E = 0 hai, isliye kisi bhi andaruni Gaussian surface ke andar **q_enc = 0**! Saara extra charge hamesha conductor ki **bahari satah (outer surface)** par rehta hai.
3. **Satah par Electric Field Hamesha Perpendicular (Normal):**
   Agar E ka koi tangential component satah ke along hota, to surface ke free electrons hilne lagte (current behne lagta!) — par yeh electrostatics hai! Isliye satah par **E = σ / ε₀ (normal to surface)**.
4. **Poore Conductor ke Andar aur Satah par Potential CONSTANT:**
   Kyunki andar E = 0 hai, aur E = −ΔV/Δr ⟹ **ΔV = 0**! Iska matlab conductor ke centre par, andar kisi bhi point par, aur uski satah par **V bilkul barabar** hota hai (poora conductor ek **equipotential volume** hai!).
   *(Yaad rakho: E = 0 hone ka matlab V = 0 nahi hai! Ek charged conducting sphere of radius R, charge Q ke liye centre par bhi **V = kQ/R** hota hai!)*
5. **Electrostatic Shielding:**
   Agar conductor ke andar koi khokhli cavity ho (aur cavity ke andar koi charge na rakha ho), to bahar kitna bhi tez electric field ya charge kyun na ho, **cavity ke andar E hamesha ZERO** rehta hai!

---

## 2. Dielectrics aur Polarisation

Conductor mein free electrons poori tarah field ko zero kar dete hain. **Dielectric** mein koi free electron nahi hota — saare electrons apne atoms se bandhe (bound) rehte hain. Phir kya hota hai?

```
   External field E0  ------------------->

   +   |  -  +   -  +   -  +  |   -
   +   |  -  +   -  +   -  +  |   -
   +   |  -  +   -  +   -  +  |   -
       <------ E_p (opposing)
       (left face: -sigma_p,  right face: +sigma_p)
```

1. **Non-polar dielectric (e.g., O₂, CO₂):** External field E₀ mein har molecule ka + centre field ki taraf aur − centre opposite taraf thoda khinch jaata hai ⟹ **induced dipole** ban jaata hai.
2. **Polar dielectric (e.g., H₂O, HCl):** Normally thermal motion se permanent dipoles random directions mein bikhre rehte hain (net dipole = 0). External field E₀ lagane par woh field ki direction mein **align** hone lagte hain!
3. **Result:** Dono cases mein dielectric ki ek satah par negative **bound surface charge (−σ_p)** aur doosri satah par positive **bound surface charge (+σ_p)** ubhar aata hai!
4. Yeh bound charges andar ek opposing electric field **E_p** banate hain (E_p < E₀, poori tarah cancel nahi kar paate!).
5. Isliye dielectric ke andar **net electric field ghat jaata hai**:

**E_net = E₀ − E_p = E₀ / K**

jahan **K** ko us material ka **Dielectric Constant** (ya relative permittivity ε_r) kehte hain!

### Dielectric Strength (Safety Limit!):
Har dielectric ek maximum electric field hi jhel sakta hai. Agar field usse zyada kar dein to bound electrons atoms se ukhad jaate hain aur insulator conductor ban jaata hai (sparking / **dielectric breakdown**)! Is maximum safe electric field ko **Dielectric Strength** kehte hain (hawa ke liye lagbhag **3 × 10⁶ V/m**).

---

## Solved Examples

### Example 1: Charged Conducting Sphere ke Andar E aur V
A hollow conducting sphere of radius **R = 15 cm** is given a charge **Q = +5 μC**. Find the electric field **E** and electrostatic potential **V** at:
(a) the centre of the sphere (r = 0),
(b) a point 10 cm from the centre,
(c) the surface of the sphere (r = 15 cm).

**Hal (Solution):**
- Sphere ki satah par potential:
  V_surface = k Q / R = (9 × 10⁹ × 5 × 10⁻⁶) / 0.15 = (45 × 10³) / 0.15 = **3.0 × 10⁵ V**.
- Conductor ke andar har jagah **E = 0** hota hai aur **V constant (= V_surface)** rehta hai!
- (a) Centre (r = 0): **E = 0**, **V = 3.0 × 10⁵ V**.
- (b) r = 10 cm (< 15 cm, andar): **E = 0**, **V = 3.0 × 10⁵ V**.
- (c) Surface (r = 15 cm): E = kQ/R² = (3.0 × 10⁵) / 0.15 = **2.0 × 10⁶ V/m**, **V = 3.0 × 10⁵ V**.
- **Jaanch:** 45 / 0.15 = 300 ⟹ 3.0 × 10⁵ V; 3.0 × 10⁵ / 0.15 = 2.0 × 10⁶ V/m ✅.

### Example 2: Dielectric Slab ke Andar Reduced Electric Field
A uniform electric field **E₀ = 8 × 10⁴ N/C** is applied across a glass dielectric slab of dielectric constant **K = 4**. Calculate:
(a) the net electric field **E** inside the glass slab, and
(b) the opposing polarising field **E_p** created by the bound surface charges.

**Hal (Solution):**
- (a) E = E₀ / K = (8 × 10⁴) / 4 = **2.0 × 10⁴ N/C**.
- (b) E = E₀ − E_p ⟹ E_p = E₀ − E = 8 × 10⁴ − 2 × 10⁴ = **6.0 × 10⁴ N/C** (E₀ ke opposite direction mein).
- **Jaanch:** E + E_p = 2 × 10⁴ + 6 × 10⁴ = 8 × 10⁴ = E₀ ✅.

### Example 3: Maximum Safe Charge Before Air Breakdown
What is the maximum charge a conducting sphere of radius **10 cm** can hold in air without causing dielectric breakdown? (Dielectric strength of air = **3 × 10⁶ V/m**.)

**Hal (Solution):**
- Sphere ki satah par max field E_max = k Q_max / R² ≤ 3 × 10⁶ V/m.
- Q_max = (E_max × R²) / k = (3 × 10⁶ × (0.10)²) / (9 × 10⁹)
  = (3 × 10⁴) / (9 × 10⁹) = (1/3) × 10⁻⁵ C ≈ **3.33 μC**.
- **Jaanch:** (9 × 10⁹ × 3.333 × 10⁻⁶) / 0.01 ≈ 3.0 × 10⁶ V/m ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Conductor ke andar E = 0 dekh kar V = 0 bol dena:**
   - *Galat:* Conducting sphere ke centre par E = 0 hai isliye V bhi 0 hoga.
   - *Sahi:* E = 0 ka matlab hai **V badal nahi raha (V = constant = V_surface)**, zero nahi! Centre par bhi V = kQ/R hota hai!
2. **Polar aur Non-polar molecules ko ulta bol dena:**
   - *Galat:* CO₂ ko polar aur H₂O ko non-polar likh dena.
   - *Sahi:* CO₂ linear aur symmetric (O=C=O) hai ⟹ **non-polar** (net dipole 0). H₂O bent shape ka hai ⟹ **polar** (permanent dipole)!
3. **Dielectric ke andar bhi E = 0 maan lena:**
   - *Galat:* Dielectric slab ke andar net field zero ho jaata hai.
   - *Sahi:* Sirf **conductor** ke andar E = 0 hota hai (K = ∞). Dielectric ke andar field zero nahi hota, balki ghat kar **E₀ / K** reh jaata hai!

---

## Quick Recap

| Property | Conductor (in Electrostatics) | Dielectric (Insulator) |
|---|---|---|
| Free electrons | Bahut saare (freely movable) | Koi nahi (bound to atoms) |
| Net field inside (E) | **Zero (0)** | **E₀ / K** (reduced, non-zero) |
| Potential inside (V) | **Constant** (= V_surface) | Varies with position |
| Dielectric constant K | Infinite (∞) | Finite (K > 1; e.g., Glass ~ 4–7, Water ~ 80) |
| Examples | Copper, Aluminium, Iron | Glass, Mica, Paper, Water, Air |

---

## Practice Questions

1. Why is the electrostatic potential constant throughout the volume of a conductor?
2. Give two examples each of (a) polar molecules, and (b) non-polar molecules.
3. A solid conducting sphere of radius 20 cm carries a charge of +8 μC. Find the electric field and electrostatic potential at a point 12 cm from its centre.
4. Distinguish between free charges and bound charges in one or two clear sentences.
5. An external electric field of 1.5 × 10⁵ V/m is applied across a mica slab (K = 6). Calculate (a) the net electric field inside mica, and (b) the opposing field E_p due to polarisation.
6. What is dielectric strength? Write its SI unit and approximate value for dry air.
7. State whether True or False: When a non-polar dielectric is placed in an external electric field, no induced dipole moment is produced in its molecules.
8. A conducting sphere of radius 5 cm is charged to a potential of 1800 V. What is the electrostatic potential at its centre? What is the charge on the sphere?
9. Why are sensitive electronic devices often enclosed inside grounded metal boxes?
10. If a dielectric of dielectric constant K = 5 reduces an external electric field to 4 × 10⁴ V/m inside it, what was the original external field E₀?

### Answers

1. Electrostatic equilibrium mein conductor ke andar **E = 0** hota hai. Kyunki E = −ΔV/Δr = 0, isliye conductor ke andar kisi bhi do points ke beech **ΔV = 0** ⟹ poora conductor same constant potential par hota hai.

2. (a) Polar molecules: **H₂O (water), HCl** (ya NH₃).
   (b) Non-polar molecules: **O₂, CO₂** (ya N₂, H₂).

3. r = 12 cm < R (20 cm) ⟹ point conductor ke **andar** hai!
   - Electric field **E = 0 N/C**.
   - Potential V = V_surface = kQ / R = (9 × 10⁹ × 8 × 10⁻⁶) / 0.20 = (72 × 10³) / 0.20 = **3.6 × 10⁵ V**.
   Jaanch: 72 / 0.2 = 360 ⟹ 3.6 × 10⁵ V ✅.

4. **Free charges** (jaise metals mein free electrons) poore material mein azaadi se chal sakte hain; **bound charges** (dielectrics mein) apne atoms se bandhe rehte hain aur external field mein sirf apni jagah se thoda sa shift (polarise) hote hain.

5. (a) E = E₀ / K = (1.5 × 10⁵) / 6 = **2.5 × 10⁴ V/m**.
   (b) E_p = E₀ − E = 1.5 × 10⁵ − 0.25 × 10⁵ = **1.25 × 10⁵ V/m**.
   Jaanch: 2.5 × 10⁴ + 1.25 × 10⁵ = 1.5 × 10⁵ V/m ✅.

6. **Dielectric strength** woh maximum electric field hai jise koi dielectric bina electrical breakdown (sparking/insulation toote) jhel sakta hai. SI unit: **V/m** (ya kV/mm). Dry air ke liye lagbhag **3 × 10⁶ V/m**.

7. **False ❌.** External electric field mein non-polar molecules ke + aur − charge centres thoda khinch kar alag ho jaate hain, jisse unmein **induced dipole moment** ban jaata hai!

8. Centre par potential = surface potential = **1800 V**!
   Charge Q = V R / k = (1800 × 0.05) / (9 × 10⁹) = 90 / (9 × 10⁹) = **1.0 × 10⁻⁸ C = 10 nC**.
   Jaanch: (9 × 10⁹ × 10⁻⁸) / 0.05 = 90 / 0.05 = 1800 V ✅.

9. **Electrostatic Shielding** ke liye! Metal box bahari unwanted electric fields ko andar aane se rokta hai (cavity ke andar E = 0), jisse nazuk circuits bina interference ke kaam karte hain.

10. E = E₀ / K ⟹ E₀ = K × E = 5 × (4 × 10⁴) = **2.0 × 10⁵ V/m**.
    Jaanch: 2.0 × 10⁵ / 5 = 4 × 10⁴ V/m ✅.

---

Ab tum Conductors aur Dielectrics ka poora physical vyavahaar samajh chuke ho.

**Agle topic mein:** Do metal plates aur unke beech dielectric daalkar banayenge electronics ka sabse zaroori energy-storage device — **Capacitor**!
