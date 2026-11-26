> **Class:** 12 | **Subject:** Physics | **Chapter 9:** Ray Optics and Optical Instruments (Gehrai Mein — Advanced Level)

# Ray Optics and Optical Instruments — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](ray-optics-and-optical-instruments.md) se [Topic 6](ray-optics-and-optical-instruments-part6.md)) mein humne mirrors, TIR, Lens Maker's formula, prisms aur optical instruments cover kiye. Ab is **Gehrai Mein** section mein hum chaar high-level geometrical-optics gems dekhenge — **Silvered Lens as an Equivalent Mirror**, **Bessel's Displacement Method for Focal Length**, **Two Separated Thin Lenses (Gullstrand's Formula)**, aur **Maximum Prism Angle for Light Emergence (A_max = 2 i_c)**!

---

## Surabhi ka Precision Optical Bench

**Surabhi** ek optical-instrument designer hai. Uske lab notebook mein chaar zabardast ray-optics shortcuts hain:
1. Agar ek thin lens ke peeche wali satah par **silver polish (mirror)** kar di jaaye, to ray lens se do baar guzarti hai aur ek baar reflect hoti hai ⟹ poora system ek **single equivalent mirror** ban jaata hai: **1 / F_eq = 1 / f_m − 2 / f_l**!
2. Object aur screen ke beech doori **D > 4f** rakh kar convex lens ko do positions par slide karne (displacement **d**) par sharp image milti hai ⟹ **f = (D² − d²) / (4 D)**!
3. Kisi prism se koi bhi ray tabhi bahar nikal sakti hai (chahe kisi bhi angle par gire!) jab **A ≤ 2 i_c** ho!

---

## 1. Silvered Lens as an Equivalent Spherical Mirror

Jab ek thin lens (focal length **f_l**) ki back surface (radius **R_m**, mirror focal length **f_m = R_m / 2**) ko silver kar diya jaaye:
- Power adds: **P_eq = 2 P_lens + P_mirror** (kyunki light lens se aate aur jaate **2 baar** refract hoti hai!).
- Sign convention (mirror ki focal length negative for converging!):

```
   1 / F_eq = 1 / f_m − 2 / f_l    (Use signed f_m and f_l!)
```

*(Example: Plano-convex lens (f_l = +20 cm) silvered on flat side (f_m = ∞) ⟹ 1/F_eq = 0 − 2/20 = −1/10 ⟹ **Concave mirror of F_eq = −10 cm**!)*

---

## 2. Displacement Method (Bessel's Method) for a Convex Lens

Fixed object aur fixed screen ke beech doori **D** hai (**D > 4 f** zaroori hai, kyunki real object-real image ke beech minimum doori **4f** hoti hai!).
- Convex lens ki **do positions** (unke beech gap **d**) par screen par sharp image banti hai:
  - Position 1 par image size **h₁**; Position 2 par image size **h₂**!

```
   f = (D² − d²) / (4 D)      |      Object height: h = √(h₁ h₂)
```

---

## 3. Two Thin Lenses Separated by Distance d

Agar do thin lenses (focal lengths **f₁, f₂**) ko contact mein nahi, balki doori **d** par rakha jaaye:

```
   1 / F_eq = 1 / f₁ + 1 / f₂ − d / (f₁ f₂)
```

*(Check: d = 0 rakho to standard contact formula 1/f₁ + 1/f₂ mil jaata hai!)*

---

## 4. Maximum Prism Angle for Emergence & Grazing Incidence

Prism ke andar **r₁ + r₂ = A**. Second face se ray bahar nikalne ke liye TIR nahi hona chahiye ⟹ **r₂ ≤ i_c**!
- First face par max possible r₁ tab hota hai jab **i = 90° (grazing incidence)** ⟹ **r₁_max = i_c**!
- Isliye **r₁ + r₂ ≤ i_c + i_c = 2 i_c**!

```
   No ray can emerge from a prism if:   A > 2 i_c
```

*(Glass n = 1.5 ke liye i_c ≈ 41.8° ⟹ 2 i_c ≈ 83.6° ⟹ 90° prism ke saamne se koi bhi ray bahar nahi nikal sakti!)*

---

## 5 Deep Solved Problems

### Problem 1: Silvered Plano-Convex Lens (Flat vs Curved Side Silvered!)
A plano-convex glass lens (**n = 1.5**) has curved surface radius **R = 20 cm**. Find the focal length of the equivalent mirror when (a) its **flat** face is silvered, and (b) its **curved** face is silvered!

**Solution:**
- Pehle lens ki focal length: 1/f_l = (1.5 − 1)(1/20 − 0) = 1/40 ⟹ **f_l = +40 cm**.
- **(a) Flat face silvered:** f_m = ∞ ⟹ 1/F_eq = 0 − 2/40 = −1/20 ⟹ **F_eq = −20 cm** (Concave mirror!).
- **(b) Curved face silvered:** Concave mirror of R = −20 cm ⟹ **f_m = −10 cm**:
  1/F_eq = 1/(−10) − 2/40 = −1/10 − 1/20 = −3/20 ⟹ **F_eq = −20/3 ≈ −6.67 cm** (Stronger concave mirror!).
- Jaanch: Curved side silvering adds concave mirror power to 2× lens power ✅.

### Problem 2: Bessel's Displacement Method
An object and a screen are fixed **D = 100 cm** apart. A convex lens forms sharp images on the screen for two positions separated by **d = 60 cm**. If the image heights are **h₁ = 9 cm** and **h₂ = 4 cm**, find (a) the focal length **f** of the lens, and (b) the actual height **h** of the object.

**Solution:**
- (a) **f = (D² − d²) / (4 D) = (100² − 60²) / (4 × 100) = (10000 − 3600) / 400 = 6400 / 400 = +16 cm**.
- (b) **h = √(h₁ h₂) = √(9 × 4) = √36 = 6.0 cm**!
- Jaanch: u₁ = (100 − 60)/2 = 20 cm, v₁ = 80 cm ⟹ 1/80 + 1/20 = 5/80 = 1/16 ✅; √(9 × 4) = 6.0 cm ✅.

### Problem 3: Two Separated Lenses
Two convex lenses of focal lengths **f₁ = +20 cm** and **f₂ = +20 cm** are placed **d = 10 cm** apart. Calculate the equivalent focal length **F_eq**.

**Solution:**
- 1/F_eq = 1/20 + 1/20 − 10 / (20 × 20) = 1/10 − 1/40 = (4 − 1)/40 = 3/40 ⟹ **F_eq = +40/3 ≈ +13.33 cm**.
- Jaanch: Contact (d = 0) gives 10 cm; separating them increases F_eq to 13.33 cm ✅.

### Problem 4: Maximum Prism Angle for Emergence
For a glass prism of refractive index **n = √2**, find the maximum prism angle **A_max** for which a ray can still emerge from the second face.

**Solution:**
- sin i_c = 1 / √2 ⟹ **i_c = 45°**.
- **A_max = 2 i_c = 2 × 45° = 90°**!
- Jaanch: At A = 90°, only grazing incidence i = 90° (r₁ = 45°) gives r₂ = 45° = i_c (grazing emergence!) ✅.

### Problem 5: Minimum Distance Between Real Object & Real Image
Show that the minimum distance between a real object and its real image formed by a convex lens of focal length **f** is **4 f**.

**Solution:**
- Distance D = |u| + v. Put u = −x and v = D − x into 1/v − 1/u = 1/f:
  1/(D − x) + 1/x = 1/f ⟹ D / [x(D − x)] = 1/f ⟹ **x² − D x + D f = 0**.
- For real roots x, discriminant **Δ = D² − 4 D f ≥ 0** ⟹ **D ≥ 4 f**! (Minimum D = 4f at x = 2f!)
- Jaanch: Object at 2f forms real image at 2f ⟹ separation = 2f + 2f = 4f ✅.

---

## 10 Advanced Practice Questions

1. A double convex lens (n = 1.5, R₁ = +20 cm, R₂ = −20 cm) has one of its faces silvered. Find the focal length of the equivalent mirror.
2. In the displacement method, the distance between object and screen is D = 90 cm and the two lens positions are separated by d = 30 cm. Calculate the focal length of the convex lens.
3. In Question 2, if the two sharp images have lengths 16 cm and 4 cm, find the actual length of the object.
4. Two thin lenses of focal lengths +30 cm and −15 cm are separated by d = 15 cm. Find the equivalent focal length of the system.
5. What is the minimum distance between a real object and its real image formed by a convex lens of focal length 18 cm?
6. A prism has refracting angle A = 70° and critical angle i_c = 30°. Can any ray incident on its first face emerge from the second face? Why?
7. A convex lens of focal length 20 cm is cut horizontally into two halves along the principal axis, and one half is removed. What happens to (a) the focal length, and (b) the brightness of the image?
8. A point object moves toward a concave mirror (f = −20 cm) along the principal axis at speed v_o = 4 cm/s when it is at u = −60 cm. Find the speed of the image **v_i = −m² v_o** at that instant!
9. A prism of angle A = 60° has refractive index n = 1.5. For a ray falling **normally** (i = 0°) on the first face, find the angle of incidence r₂ on the second face and state whether it undergoes TIR (i_c ≈ 41.8°).
10. Two convex lenses of focal lengths f₁ = 10 cm and f₂ = 20 cm are placed at distance d = 30 cm (= f₁ + f₂) apart. What happens to a parallel beam of light entering this system? (Compute 1/F_eq!)

### Solutions

1. f_l = +20 cm; silvered concave face has R = −20 cm ⟹ f_m = −10 cm.
   1/F_eq = 1/(−10) − 2/20 = −1/10 − 1/10 = −2/10 = −1/5 ⟹ **F_eq = −5.0 cm** (Concave mirror!).
   Jaanch: −0.1 − 0.1 = −0.2 ⟹ −5.0 cm ✅.

2. f = (90² − 30²) / (4 × 90) = (8100 − 900) / 360 = 7200 / 360 = **+20 cm**.
   Jaanch: 7200 / 360 = 20 cm ✅.

3. h = √(16 × 4) = √64 = **8.0 cm**.
   Jaanch: √64 = 8 ✅.

4. 1/F_eq = 1/30 + 1/(−15) − 15 / (30 × (−15)) = 1/30 − 2/30 + 1/30 = **0** ⟹ **F_eq = ∞** (afocal / parallel beam exits parallel!).
   Jaanch: 1/30 − 2/30 + 1/30 = 0 ✅.

5. Minimum distance = **4 f = 4 × 18 = 72 cm**.
   Jaanch: 4 × 18 = 72 cm ✅.

6. **NO!** Here 2 i_c = 60° < A (70°), so every ray entering the first face hits the second face with r₂ > i_c and undergoes **Total Internal Reflection**!

7. (a) **Focal length UNCHANGED** (radii R₁, R₂ didn't change!).
   (b) **Brightness HALVES** (half the aperture area lets half the light through; complete image still forms!).

8. At u = −60 cm, f = −20 cm: m = f / (f − u) = (−20) / (−20 − (−60)) = −20 / 40 = **−1/2**.
   Image speed: **v_i = −m² v_o = −(1/4) × 4 = −1.0 cm/s** (moves away from mirror at 1.0 cm/s!).
   Jaanch: m² = 1/4 ⟹ 1 cm/s ✅.

9. i = 0° ⟹ r₁ = 0° ⟹ r₂ = A − r₁ = **60°**. Since r₂ (60°) > i_c (41.8°), the ray **undergoes 100% Total Internal Reflection** at the second face!

10. 1/F_eq = 1/10 + 1/20 − 30/(200) = 3/20 − 3/20 = **0** ⟹ **F_eq = ∞** (emerges as a parallel beam — this is an astronomical telescope in normal adjustment!).
    Jaanch: 3/20 − 3/20 = 0 ✅.

---

Shabaash! Tumne Silvered Lenses, Bessel's Displacement Method, Separated Lenses aur Prism Emergence Limits tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](ray-optics-and-optical-instruments-part6.md) dekho!
