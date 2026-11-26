# Chapter: Ray Optics and Optical Instruments (Part 4)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Refraction at Spherical Surfaces and Lenses](ray-optics-and-optical-instruments-part3.md)

---

## Lab ki Deewar par Indradhanush aur Shaam ka Laal Aasman!

Physics lab mein **Prakash** ne khidki se aati dhoop ke raaste mein ek triangular glass **prism** rakha — aur saamne wali safed deewar par saaf 7 rangon (VIBGYOR) ki chamakdaar patti ban gayi! Jab usne prism ko dheere-dheere ghumaya, to poori patti pehle ek taraf khisaki, phir ek khaas angle par ruk kar wapas lautne lagi!

Teacher ma'am muskurayi: "Prakash, jis angle par light sabse kam mudti hai, use **Angle of Minimum Deviation (D_m)** kehte hain — aur usi se hum kisi bhi glass ka exact refractive index **n** nikaal sakte hain!"

---

## Naye Shabd (New Words)

- **Angle of Prism (A):** Prism ki dono refracting faces ke beech ka angle (equilateral prism ke liye A = 60°).
- **Angle of Deviation (δ):** Incident ray aur prism se bahar nikalne wali emergent ray ke beech ka kul mudav (total bend): **δ = i + e − A**.
- **Angle of Minimum Deviation (D_m):** Kisi prism se guzarne par light ka sabse kam possible deviation — yeh tab hota hai jab **i = e** aur ray prism ke andar base ke **parallel** chale!
- **Dispersion:** White light ka prism se guzarne par apne alag-alag rangon (wavelengths) mein toot kar alag ho jaana (kyunki glass ka **n** alag wavelengths ke liye alag hota hai!).
- **Rayleigh Scattering:** Chhote atmospheric particles dwara light ka bikharna, jahan scattered intensity **I ∝ 1 / λ⁴** hoti hai (isliye neela aasman aur laal sooryast!).

---

## 1. Refraction Through a Prism aur Prism Formula

Maan lo ek triangular prism (angle **A**, refractive index **n**) ke pehle face par light angle **i** par girti hai (refract hokar **r₁** banati hai), aur doosre face par angle **r₂** par girkar angle **e** (emergence) par bahar nikalti hai:

```
              /\  A (prism angle)
             /  \
      i   / / r1 r2 \ e
     --->/ /---------\--->  (total bend = delta)
        / /           \
       /_______________\
```

Geometry of quadrilateral & triangle se do exact relations milte hain:
1. **r₁ + r₂ = A**
2. **δ = i + e − A**  *(ya i + e = A + δ)*

### Minimum Deviation (δ = D_m) — Symmetric Path!
Jab incidence angle **i** badhate hain, to deviation **δ** pehle ghatta hai, ek minimum value **D_m** tak pahunchta hai, aur phir badhne lagta hai! Minimum deviation par path bilkul symmetric hota hai:
- **i = e**  aur  **r₁ = r₂ = r**
- Relation 1 se: 2r = A ⟹ **r = A / 2**
- Relation 2 se: 2i = A + D_m ⟹ **i = (A + D_m) / 2**
- Snell's law (**n = sin i / sin r**) mein rakho ⟹ **Prism Formula**:

**n = sin[ (A + D_m) / 2 ] / sin( A / 2 )**

### Thin Prism Formula (Small A < 10°):
Chhote angles ke liye sin θ ≈ θ (radians mein):
n ≈ [ (A + D_m) / 2 ] / (A / 2) = (A + D_m) / A ⟹

**δ = (n − 1) A**  *(independent of angle of incidence i!)*

---

## 2. Dispersion aur Scattering (Class 12 Key Points)

- **Dispersion ka Kaaran:** Glass mein alag wavelengths ki speed alag hoti hai — **Violet** (chhoti λ ≈ 400 nm) ka refractive index **n_V sabse zyada** aur **Red** (badi λ ≈ 700 nm) ka **n_R sabse kam** hota hai ⟹ **Violet sabse zyada mudta hai (δ_V > δ_R)**!
- **Angular Dispersion (Thin Prism):** **θ = δ_V − δ_R = (n_V − n_R) A**.
- **Rayleigh Scattering:** (Class 10 [Scattering and Spectrum](../../../class10/physics/scattering-and-spectrum/scattering-and-spectrum.md) mein details padhi thin): **I_scattered ∝ 1 / λ⁴**! Kyunki λ_red ≈ 1.75 λ_blue, blue light red ke muqable lagbhag **(1.75)⁴ ≈ 9.4 guna zyada** scatter hoti hai!

---

## Solved Examples

### Example 1: Prism Formula (Equilateral Prism)
An equilateral glass prism (**A = 60°**) produces a minimum deviation of **D_m = 30°** for a ray of monochromatic light. Calculate the refractive index **n** of the glass (take √2 = 1.414).

**Hal (Solution):**
- A = 60°, D_m = 30°:
  - (A + D_m) / 2 = (60° + 30°) / 2 = **45°**
  - A / 2 = 60° / 2 = **30°**
- Prism Formula: **n = sin 45° / sin 30° = (1 / √2) / (1 / 2) = 2 / √2 = √2 ≈ 1.414**.
- **Jaanch:** sin 45° ≈ 0.707, sin 30° = 0.5 ⟹ 0.707 / 0.5 = 1.414 ✅.

### Example 2: Thin Prism Deviation
A thin glass prism has refracting angle **A = 6°** and refractive index **n = 1.5**. Calculate the angle of deviation produced by it.

**Hal (Solution):**
- Thin prism formula: **δ = (n − 1) A** = (1.5 − 1) × 6° = 0.5 × 6° = **3.0°**.
- **Jaanch:** 0.5 × 6 = 3.0° ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **60° wale thick prism par thin prism formula δ = (n − 1)A laga dena:**
   - *Galat:* A = 60°, n = 1.5 ke liye D_m = (1.5 − 1) × 60° = 30° bol dena!
   - *Sahi:* Thin prism formula **SIRF chhote angle (A ≤ 10°)** wale prisms ke liye valid hai! 60° prism ke liye hamesha exact **sin[(A + D_m)/2] / sin(A/2)** use karo! (n = 1.5, A = 60° ke liye exact D_m ≈ 37.2° aata hai, 30° nahi!)
2. **Minimum deviation par i = e aur r₁ = r₂ = A/2 bhool jaana:**
   - *Galat:* Minimum deviation par i = 90° maan lena.
   - *Sahi:* Minimum deviation par path bilkul symmetric hota hai: **i = e = (A + D_m)/2** aur **r₁ = r₂ = A/2**!
3. **Red light ko Violet se zyada bend karwa dena:**
   - *Galat:* Red ki wavelength badi hai isliye red zyada mudti hai.
   - *Sahi:* Badi wavelength ⟹ kam refractive index ⟹ **Red sabse KAM mudti hai** aur **Violet sabse ZYADA mudti hai**!

---

## Quick Recap

| Concept | Formula | Condition / Fact |
|---|---|---|
| General Prism Relations | r₁ + r₂ = A; δ = i + e − A | Always valid for any ray through prism |
| Minimum Deviation (D_m) | i = e = (A+D_m)/2; r₁ = r₂ = A/2 | Ray inside prism is parallel to base |
| Prism Formula | n = sin[(A + D_m)/2] / sin(A/2) | Exact for any prism angle A |
| Thin Prism & Dispersion | δ = (n − 1)A; θ = (n_V − n_R)A | Valid only for small A (< 10°); δ_V > δ_R |
| Rayleigh Scattering | I ∝ 1 / λ⁴ | Short wavelengths (blue/violet) scatter most |

---

## Practice Questions

1. Write the two basic angle relations for a ray of light passing through a prism of angle A.
2. What special symmetry conditions hold when a ray passes through a prism at the position of **minimum deviation**?
3. An equilateral prism (A = 60°) is made of glass of refractive index √3. Calculate its angle of minimum deviation D_m.
4. For the prism in Question 3, find the angle of incidence i at minimum deviation.
5. A thin prism of refracting angle 5° is made of glass with n_V = 1.54 for violet and n_R = 1.50 for red. Calculate the angular dispersion (δ_V − δ_R) produced by the prism.
6. A ray of light is incident at i = 45° on an equilateral prism (A = 60°) and emerges at e = 55°. Calculate the angle of deviation δ.
7. Why does violet light deviate more than red light when passing through a glass prism?
8. What happens to the angle of minimum deviation D_m of a glass prism if it is completely immersed in water (n_w = 4/3)? Explain briefly.
9. State whether True or False: According to Rayleigh's law, red light scatters more strongly than blue light in Earth's atmosphere.
10. A thin prism of refractive index 1.6 produces a deviation of 4.8°. Find the refracting angle A of the prism.

### Answers

1. **r₁ + r₂ = A** aur **δ = i + e − A**.

2. Minimum deviation par: (i) **i = e**, (ii) **r₁ = r₂ = A / 2**, aur (iii) prism ke andar refracted ray uske **base ke parallel** chalti hai.

3. n = sin[(60° + D_m)/2] / sin(30°) ⟹ √3 = sin[(60° + D_m)/2] / (1/2)
   ⟹ sin[(60° + D_m)/2] = √3 / 2 = sin 60°
   ⟹ (60° + D_m)/2 = 60° ⟹ 60° + D_m = 120° ⟹ **D_m = 60°**.
   Jaanch: sin 60° / sin 30° = (√3/2)/(1/2) = √3 ✅.

4. i = (A + D_m) / 2 = (60° + 60°) / 2 = **60°**.
   Jaanch: r = A/2 = 30°; sin 60°/sin 30° = √3 ✅.

5. Angular dispersion θ = (n_V − n_R) A = (1.54 − 1.50) × 5° = 0.04 × 5° = **0.20°**.
   Jaanch: 0.04 × 5 = 0.20° ✅.

6. δ = i + e − A = 45° + 55° − 60° = 100° − 60° = **40°**.
   Jaanch: 45 + 55 − 60 = 40° ✅.

7. Glass mein violet light ki wavelength sabse chhoti hone ke karan uski speed sabse kam aur refractive index **n_V sabse zyada** hota hai — isliye violet light sabse zyada deviate hoti hai!

8. **D_m ghat (decrease) jaata hai!** Kyunki water mein relative refractive index **n_rel = n_glass / n_water** air ke muqable kam ho jaata hai (1.5 se ghat kar 1.125), isliye rays kam mudti hain!

9. **False ❌.** Rayleigh's law (I ∝ 1/λ⁴) ke anusaar chhoti wavelength wali **blue light** red light ke muqable lagbhag 9–10 guna zyada scatter hoti hai!

10. δ = (n − 1) A ⟹ 4.8° = (1.6 − 1) A = 0.6 A ⟹ **A = 4.8° / 0.6 = 8.0°**.
    Jaanch: 0.6 × 8.0 = 4.8° ✅.

---

Ab tum Prism Formula, Minimum Deviation, Dispersion aur Scattering ko pakka master kar chuke ho!

**Agle topic mein:** Lenses aur Mirrors ko jodkar banate hain science ke sabse taqatwar aankhein — **Microscope** (nanhi cells dekhne ke liye) aur **Telescope** (door ke grah aur taare dekhne ke liye)!
