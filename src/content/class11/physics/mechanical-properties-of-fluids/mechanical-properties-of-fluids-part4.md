> **Class:** 11 | **Subject:** Physics | **Chapter 9:** Mechanical Properties of Fluids (Part 4)

# Surface Tension, Surface Energy, Drops, Bubbles & Capillary Rise

> **Pichle topic se:** [Viscosity](mechanical-properties-of-fluids-part3.md) mein humne liquid ke andar ki layers ke beech friction dekha. Ab hum liquid ki **sabse upari surface** ko dekhenge — jo ek khinchi hui patli elastic rubber sheet ki tarah behave karti hai! Isi ko **Surface Tension** kehte hain!

---

## Pralhad ka Microfluidics & Soap-Film Lab

Pralhad ek microfluidics scientist hai. Usne lab mein teen jaadui phenomena dikhaye:
1. Chhoti baarish ki boondein hamesha **gol (spherical)** hoti hain — kyunki given volume ke liye sphere ka surface area **MINIMUM** hota hai!
2. Patli glass capillary tube ko paani mein dubone par paani **apne aap upar chadh jata hai** (capillary rise), jabki mercury mein dubone par **neeche gir jata hai** (capillary depression)!
3. Chhote soap bubble ke andar ka pressure bade bubble se **ZYADA** hota hai (ΔP = 4S/R) — isliye agar dono ko ek tube se jod do, toh hawa **chhote bubble se bade bubble** mein beh jati hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Surface Tension (S) | Liquid surface par unit length par lagne wala inward tangential force: **S = F / L** (SI unit: **N m⁻¹ = J m⁻²**) |
| Surface Energy | Liquid ka surface area ΔA badhane mein kiya gaya extra work: **ΔW = S ΔA** |
| Excess Pressure (ΔP) | Curved liquid surface ke concave (andar) side ka extra pressure: **Liquid drop / Air bubble in water: 2 S / R**; **Soap bubble in air (2 free surfaces!): 4 S / R** |
| Angle of Contact (θ) | Liquid meniscus ke tangent aur solid wall (liquid ke andar) ke beech ka angle: **Acute (< 90°)** => wets solid (water-glass); **Obtuse (> 90°)** => does NOT wet (mercury-glass) |
| Capillary Rise (h) | Radius r ki patli tube mein liquid ka upar chadhna (Jurin's Law): **h = 2 S cos θ / (r ρ g)** |

---

## 1. Surface Tension & Surface Energy (Watch Out for 2 Free Surfaces!)

Liquid surface ke molecules ko andar ke molecules neeche kheench kar rakhte hain (net inward cohesive pull), isliye surface hamesha apna area **minimize** karna chahti hai.
- **Work to increase area:** **ΔW = S × ΔA_total**
- **SUPER IMPORTANT:**
  - **Liquid Drop** ya **Air bubble inside water:** sirf **1 free surface** => Area = **4 π R²**, Excess Pressure **ΔP = 2 S / R**!
  - **Soap Bubble in air** ya **Soap film on a wire frame:** **2 free surfaces** (andar + bahar) => Total Area = **2 × (4 π R²) = 8 π R²**, Excess Pressure **ΔP = 4 S / R**!

---

## 2. Capillary Rise (Jurin's Law)

Radius **r** ki capillary tube mein liquid height **h** tak upar chadhta hai. Rim (circumference 2πr) par surface tension ka upward vertical component = **(S cos θ) × (2 π r)**, jo liquid column ke weight **(π r² h ρ g)** ko balance karta hai:
(2 π r) S cos θ = π r² h ρ g  =>
```
  h = 2 S cos θ / (r ρ g)      ===>      h r = constant!
```
- **Acute θ (water in glass, θ ≈ 0°, cos θ ≈ 1):** h > 0 (**Rise**, concave meniscus).
- **Obtuse θ (mercury in glass, θ ≈ 135°, cos θ < 0):** h < 0 (**Depression**, convex meniscus).
- **Detergents / Hot water:** Surface tension **S kam** kar dete hain (detergent water ko kapde ke chhote pores mein aasani se ghusne deta hai!).

---

## Solved Examples

### Example 1: Work Done in Blowing a Soap Bubble

Calculate the work done in blowing a soap bubble of radius R = 5 cm (0.05 m) from a soap solution of surface tension S = 0.03 N/m (take π = 3.14).

**Solution:**
Soap bubble has **2 free surfaces** => ΔA = 2 × (4 π R²) = 8 π R²!
W = S × (8 π R²) = 0.03 × 8 × 3.14 × (0.05)² = 0.24 × 3.14 × 0.0025 = **1.884 × 10⁻³ J (1.88 mJ)**.

Jaanch:
- Jaanch: 0.24 × 0.0025 = 0.0006; 0.0006 × 3.14 = 1.884 × 10⁻³ J ✅

---

### Example 2: Excess Pressure in a Liquid Drop vs Soap Bubble

Find the excess pressure inside: (a) a water drop of radius 1 mm (S = 0.072 N/m), (b) a soap bubble of radius 2 mm (S = 0.030 N/m).

**Solution:**
- (a) Water drop (1 surface): ΔP = 2 S / R = 2(0.072) / 10⁻³ = **144 Pa**.
- (b) Soap bubble (2 surfaces): ΔP = 4 S / R = 4(0.030) / (2 × 10⁻³) = **60 Pa**.

Jaanch:
- Jaanch: 0.144 / 0.001 = 144 Pa; 0.120 / 0.002 = 60 Pa ✅

---

### Example 3: Splitting 1 Big Drop into 1000 Tiny Droplets (Spraying!)

A spherical mercury drop of radius R = 1 cm (0.01 m, S = 0.45 N/m) is sprayed into 1000 identical tiny droplets. Find the work done (take π = 3.14).

**Solution:**
Volume conserved: R³ = 1000 r³ => **r = R / 10**.
- Initial surface area: A₁ = 4 π R².
- Final total area: A₂ = 1000 × (4 π r²) = 1000 × 4 π (R² / 100) = **10 × (4 π R²)**!
- Increase in area: ΔA = 9 × (4 π R²) = 36 π R².
- Work W = S ΔA = 0.45 × 36 × 3.14 × (10⁻⁴) ≈ **5.09 × 10⁻³ J (5.09 mJ)**!
*(General shortcut: 1 drop -> N drops: **W = 4 π R² S (N^(1/3) - 1)**!)*

Jaanch:
- Jaanch: N^(1/3) - 1 = 10 - 1 = 9; 9 × 4 × 0.45 = 16.2; 16.2 × 3.14 × 10⁻⁴ ≈ 5.09 mJ ✅

---

### Example 4: Capillary Rise of Water in a Glass Tube

Water (S = 0.075 N/m, ρ = 1000 kg/m³, θ = 0°) rises in a glass capillary tube of radius r = 0.5 mm (5 × 10⁻⁴ m). Taking g = 10 m/s², find the height h of capillary rise.

**Solution:**
h = 2 S cos 0° / (r ρ g) = (2 × 0.075 × 1) / (5 × 10⁻⁴ × 1000 × 10)
= 0.15 / 5 = **0.03 m = 3.0 cm**.

Jaanch:
- Jaanch: 5 × 10⁻⁴ × 10⁴ = 5; 0.15 / 5 = 0.03 m = 3 cm ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Soap bubble mein 2 free surfaces (factor of 2) bhool jana
- **Galat:** Soap bubble ka ΔP = 2 S / R aur area = 4 π R²!
- **Sahi:** Soap bubble ke andar aur bahar dono taraf hawa hai (2 free surfaces) => **ΔP = 4 S / R** aur **A = 8 π R²**! (Jabki paani ke andar air bubble mein sirf **1 surface => 2 S / R**!)

### Galti 2: Do alag size ke soap bubbles ko jodne par hawa bade se chhote mein bhej dena
- **Galat:** Bade bubble mein zyada hawa hai toh hawa bade se chhote mein jayegi!
- **Sahi:** ΔP = 4 S / R ∝ 1 / R! **Chhote bubble mein pressure ZYADA** hota hai, isliye hawa hamesha **chhote se bade bubble** mein behti hai (chhota aur chhota, bada aur bada ho jata hai)!

### Galti 3: Capillary tube ko tilt (angle α par jhukane) par vertical height h ko badalta maan lena
- **Galat:** Tube 60° par jhuka di toh vertical height h kam ho jayegi!
- **Sahi:** **Vertical height h bilkul SAME rehti hai!** Haan, tube ke andar liquid ki **slant length l = h / cos α** badh jati hai!

---

## Quick Recap

- **Surface Tension:** S = F / L (N/m = J/m²); **Work:** ΔW = S ΔA.
- **Excess Pressure:** Liquid drop / Air bubble in liquid = **2 S / R**; Soap bubble in air = **4 S / R**.
- **Splitting 1 drop -> N drops:** W = 4 π R² S (N^(1/3) - 1).
- **Capillary Rise:** h = 2 S cos θ / (r ρ g) => **h r = constant**; tilting keeps vertical h constant (l = h / cos α).

---

## Practice Questions

*(Take g = 10 m/s², ρ_water = 1000 kg/m³, π = 3.14 unless stated otherwise.)*

### Question 1
A thin wire frame of width 5 cm holds a rectangular soap film (S = 0.03 N/m) with a movable slider on one side. Find the minimum force required to hold the slider in equilibrium!

**Solution:**
Soap film has **2 free surfaces** => F = 2 S L = 2(0.03)(0.05) = **3 × 10⁻³ N (3 mN)**.

Jaanch:
- Jaanch: Factor of 2 for front and back faces of soap film ✅

---

### Question 2
Find the excess pressure inside an air bubble of radius 0.5 mm formed inside water (S = 0.075 N/m).

**Solution:**
Air bubble inside water has ONLY **1 free surface**:
ΔP = 2 S / R = 2(0.075) / (5 × 10⁻⁴) = 0.15 / (5 × 10⁻⁴) = **300 Pa**.

Jaanch:
- Jaanch: 1500 / 5 = 300 Pa ✅

---

### Question 3
Water rises to a height of 6 cm in a glass capillary tube of radius r. To what height will water rise in another glass capillary tube of radius 2r?

**Solution:**
h r = constant => radius doubles => height halves: h₂ = 6 / 2 = **3 cm**.

Jaanch:
- Jaanch: Thinner tube pulls liquid higher (h ∝ 1/r) ✅

---

### Question 4
If the capillary tube in Question 3 (vertical rise 6 cm) is tilted at 60° to the vertical, find the vertical height of water and the length of the water column inside the tilted tube.

**Solution:**
- Vertical height h remains **6 cm**.
- Length along tilted tube l = h / cos 60° = 6 / (1/2) = **12 cm**.

Jaanch:
- Jaanch: l cos 60° = 12(0.5) = 6 cm ✅

---

### Question 5
The excess pressure inside Soap Bubble A is 3 times the excess pressure inside Soap Bubble B (same soap solution). Find the ratio of their volumes V_A / V_B!

**Solution:**
ΔP ∝ 1 / R => R_A / R_B = ΔP_B / ΔP_A = 1 / 3.
Volume V ∝ R³ => V_A / V_B = (1 / 3)³ = **1 : 27**.

Jaanch:
- Jaanch: Smaller bubble (R_A = R_B/3) has 3× higher pressure and 1/27th the volume ✅

---

### Question 6
How much work is required to increase the radius of a soap bubble from 2 cm to 4 cm (S = 0.03 N/m)?

**Solution:**
W = S × 8 π (R₂² - R₁²) = 0.03 × 8 × 3.14 × (16 - 4) × 10⁻⁴
= 0.24 × 3.14 × 12 × 10⁻⁴ ≈ **9.04 × 10⁻⁴ J (0.904 mJ)**.

Jaanch:
- Jaanch: 0.24 × 12 = 2.88; 2.88 × 3.14 ≈ 9.04 × 10⁻⁴ J ✅

---

### Question 7
A glass capillary tube of radius 0.2 mm is dipped in water (S = 0.07 N/m, θ = 0°). Find the capillary rise h in cm.

**Solution:**
h = (2 × 0.07) / (2 × 10⁻⁴ × 1000 × 10) = 0.14 / 2 = **0.07 m = 7 cm**.

Jaanch:
- Jaanch: 2 × 10⁻⁴ × 10⁴ = 2; 0.14 / 2 = 0.07 m ✅

---

### Question 8
If a capillary experiment showing 6 cm water rise on Earth is taken to the Moon (where g_Moon = g_Earth / 6), what will be the new capillary rise?

**Solution:**
h = 2 S cos θ / (r ρ g) ∝ 1 / g => h_Moon = 6 × 6 = **36 cm**!

Jaanch:
- Jaanch: Lower gravity allows liquid to climb 6× higher ✅

---

### Question 9
8 identical small drops of mercury (radius r each) merge into one large drop (radius R). Is surface energy absorbed or released? Find the ratio of final surface energy to initial total surface energy.

**Solution:**
R = 8^(1/3) r = 2 r.
- Initial area: A_i = 8 × 4 π r².
- Final area: A_f = 4 π (2 r)² = 4 × 4 π r².
Area **decreases by half** => **Surface energy is RELEASED as heat!**
Ratio E_f / E_i = 4 / 8 = **1 : 2 (50% released as heat!)**.

Jaanch:
- Jaanch: Merging drops always reduces total area and warms the liquid slightly ✅

---

### Question 10
A flat circular ring of radius 5 cm lies flat on a water surface (S = 0.07 N/m). Find the extra upward force needed to pull the ring off the water surface! (Hint: a ring has BOTH inner and outer circumferences!)

**Solution:**
Total contact length = 2 × (2 π R) = 4 π R (inner + outer edges!).
F = S × 4 π R = 0.07 × 4 × 3.14 × 0.05 = 0.014 × 3.14 ≈ **0.044 N**.

Jaanch:
- Jaanch: 0.07 × 4 × 0.05 = 0.014; 0.014 × 3.14 = 0.04396 N ✅

---

### Question 11
State whether the following statements are True or False:
(a) Adding detergent to water increases its surface tension.
(b) A liquid that wets glass has an acute angle of contact (< 90°) with glass.

**Solution:**
- (a) **False** ❌ — Detergent **decreases** surface tension so water spreads into fabric pores easily!
- (b) **True** ✅ — Adhesive force > cohesive force => acute angle (< 90°), concave meniscus, capillary rise.

Jaanch:
- Jaanch: Verified from Section 2 ✅

---

### Question 12
Find the total pressure inside an air bubble of radius 0.1 mm at a depth of 20 cm below a water surface (P_atm = 1.0 × 10⁵ Pa, S = 0.075 N/m).

**Solution:**
P_total = P_atm + ρ g h + 2 S / R
- ρ g h = 1000 × 10 × 0.20 = 2000 Pa.
- 2 S / R = 2(0.075) / 10⁻⁴ = 1500 Pa.
- P_total = 100,000 + 2000 + 1500 = **103,500 Pa (1.035 × 10⁵ Pa)**.

Jaanch:
- Jaanch: Both hydrostatic depth pressure and surface-tension excess pressure add to P_atm ✅

---

Surface tension, drops, bubbles aur capillary rise ab tumhare liye bilkul clear hain!

**Agle topic mein:** Poore Fluids chapter ke sabhi tools ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](mechanical-properties-of-fluids-part5.md) mein!
