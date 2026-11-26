> **Class:** 12 | **Subject:** Physics | **Chapter 10:** Wave Optics (Gehrai Mein — Advanced Level)

# Wave Optics — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](wave-optics.md) se [Topic 5](wave-optics-part5.md)) mein humne Huygens' principle, YDSE, single-slit diffraction aur polarisation cover kiye. Ab is **Gehrai Mein** section mein hum chaar high-level wave-optics gems dekhenge — **YDSE Fringe Shift with a Thin Glass Slab**, **Thin-Film Interference (Soap Bubbles & Anti-Reflective Coatings)**, **Rayleigh's Criterion of Resolution (Limit of Telescope & Microscope)**, aur **Fresnel Distance (When Ray Optics Ends & Wave Optics Begins!)**!

---

## Surya ka Interferometry & Optical-Coating Lab

**Surya** ek optical-interferometry researcher hai. Uske lab mein nanometre-level measurements in chaar formulas par chalti hain:
1. YDSE ki ek slit ke saamne patli glass patti (thickness **t**, refractive index **n**) rakhne par poora fringe pattern us slit ki taraf **Δy = (n − 1) t D / d** khisak jaata hai — **bina fringe width β badle!**
2. Camera lenses par anti-reflective coating aur sabun ke bulbule **Thin-Film Interference** (2 n t cos r = mλ ya (m+½)λ) se kaam karte hain!
3. Kisi telescope ke resolution ki ultimate quantum/wave limit **Rayleigh's Criterion** (**θ_min = 1.22 λ / D**) hoti hai!

---

## 1. YDSE with a Thin Transparent Slab in Front of One Slit

Agar Slit S₁ ke raaste mein thickness **t** aur refractive index **n** ki patli sheet rakh di jaaye:
- Extra optical path introduced = **Δx_extra = (n − 1) t**!
- Central maximum wahan shift hota hai jahan net path difference zero ho (S₁ ki taraf!):

```
   Fringe Shift:  Δy = [ (n − 1) t D ] / d = (n − 1) t × (β / λ)
   Number of fringes shifted:  N = Δy / β = (n − 1) t / λ
```

*(Note: Fringe width **β = λ D / d BILKUL NAHI badalti** — poora pattern bas shift ho jaata hai!)*

---

## 2. Thin-Film Interference (Normal Incidence, Reflection)

Jab air (n = 1) se light thickness **t** aur refractive index **n** ki patli film (jaise soap film in air) par girti hai:
- Top reflection (rarer → denser) par extra **π phase shift (= λ/2 path shift)** aata hai!
- Bottom reflection (denser → rarer) par **no phase shift**!
- Isliye **Reflected light** ke liye (normal incidence, cos r = 1):
  - **Constructive (Bright):** **2 n t = (m − ½) λ** (m = 1, 2, 3, ...; minimum thickness **t_min = λ / (4 n)**!)
  - **Destructive (Dark):** **2 n t = m λ** (m = 0, 1, 2, ...).
*(Anti-reflective camera coating (n_air < n_coating < n_glass): DONO reflections par π shift cancel ho jaata hai ⟹ destructive interference ke liye **t_min = λ / (4 n_coating)**!)*

---

## 3. Rayleigh's Criterion of Resolution (Resolving Power)

Diffraction ke karan do paas-paas ke point objects ko alag-alag (just resolved) tabhi dekha ja sakta hai jab ek ka central diffraction maximum doosre ke **first diffraction minimum** par pade!
- **Astronomical Telescope** (objective diameter **D**):
  - **Limit of Resolution (min angular separation):** **θ_min = 1.22 λ / D** (radians)
  - **Resolving Power:** **RP = 1 / θ_min = D / (1.22 λ)** *(Bada aperture D ⟹ zyada resolving power!)*
- **Microscope:**
  - **Limit of Resolution:** **d_min = λ / (2 n sin β)** (where **n sin β** = Numerical Aperture)
  - **Resolving Power:** **RP = (2 n sin β) / λ** *(Oil-immersion objective increases n; UV/Electron microscope shrinks λ!)*

---

## 4. Fresnel Distance (Z_F)

Woh doori jahan tak single-slit diffraction ka phailav (λ Z_F / a) slit ki apni width **a** ke barabar na ho jaaye (yaani jahan tak Ray Optics sahi chalta hai!):

```
   Z_F = a² / λ
```

---

## 5 Deep Solved Problems

### Problem 1: YDSE Fringe Shift by a Thin Mica Sheet
In YDSE using **λ = 600 nm**, a thin mica sheet of refractive index **n = 1.6** is placed in front of one slit, causing the central bright fringe to shift to the position originally occupied by the **5th bright fringe**. Find the thickness **t** of the mica sheet!

**Solution:**
- Number of fringes shifted: **N = 5 = (n − 1) t / λ**!
- **t = (N λ) / (n − 1) = (5 × 600 nm) / (1.6 − 1) = 3000 / 0.6 = 5000 nm = 5.0 μm**!
- Jaanch: (1.6 − 1) × 5000 nm = 0.6 × 5000 = 3000 nm = 5 × 600 nm ✅.

### Problem 2: Anti-Reflective Lens Coating Thickness
A camera glass lens (**n_glass = 1.5**) is coated with a thin Magnesium Fluoride film (**n_film = 1.38**) to eliminate reflection of green-yellow light (**λ = 552 nm**). Find the minimum thickness **t_min** of the coating.

**Solution:**
- Since n_air (1) < n_film (1.38) < n_glass (1.5), both reflections undergo π phase shift ⟹ destructive interference at **2 n_film t_min = λ / 2** ⟹ **t_min = λ / (4 n_film)**:
- **t_min = 552 / (4 × 1.38) = 552 / 5.52 = 100 nm**!
- Jaanch: 4 × 1.38 = 5.52; 552 / 5.52 = 100 nm ✅.

### Problem 3: Resolving Limit of a Telescope
Calculate the angular limit of resolution **θ_min** of a telescope whose objective lens has diameter **D = 2.44 m** (like the Hubble Space Telescope!) for visible light of **λ = 600 nm**.

**Solution:**
- **θ_min = 1.22 λ / D = (1.22 × 6.0 × 10⁻⁷) / 2.44 = (1/2) × 6.0 × 10⁻⁷ = 3.0 × 10⁻⁷ rad**!
- Jaanch: 1.22 / 2.44 = 0.5; 0.5 × 6.0 × 10⁻⁷ = 3.0 × 10⁻⁷ rad ✅.

### Problem 4: Fresnel Distance Calculation
Light of wavelength **λ = 500 nm** passes through an aperture of width **a = 2.0 mm**. Calculate the Fresnel distance **Z_F** up to which ray optics is a good approximation.

**Solution:**
- **Z_F = a² / λ = (2.0 × 10⁻³)² / (5.0 × 10⁻⁷) = (4.0 × 10⁻⁶) / (5.0 × 10⁻⁷) = 8.0 m**.
- Jaanch: 4/5 = 0.8; 0.8 × 10 = 8.0 m ✅.

### Problem 5: YDSE with Unequal Slit Widths (I ∝ Slit Width)
In YDSE, the widths of the two slits are in the ratio **4 : 1**. Find the ratio **I_max : I_min** in the interference pattern.

**Solution:**
- Intensity is proportional to slit width: **I₁ / I₂ = 4 / 1** ⟹ amplitude ratio **a₁ / a₂ = √(4/1) = 2 / 1**.
- **I_max / I_min = (2 + 1)² / (2 − 1)² = 9 / 1 = 9 : 1**!
- Jaanch: (2+1)² = 9, (2−1)² = 1 ✅.

---

## 10 Advanced Practice Questions

1. A thin glass plate (n = 1.5, thickness t = 4.0 μm) is placed in front of one slit in YDSE using λ = 500 nm. How many fringes does the pattern shift?
2. Does inserting a thin transparent sheet in front of one slit in YDSE change the fringe width β?
3. Find the minimum thickness of a soap film (n = 4/3) in air that strongly reflects light of wavelength λ = 600 nm at normal incidence.
4. Calculate the limit of resolution of a telescope with objective diameter 1.22 m for light of wavelength 500 nm.
5. How does the resolving power of a microscope change when (a) blue light is used instead of red light, and (b) cedarwood oil (n = 1.5) fills the space between the object and objective?
6. Calculate the Fresnel distance for an aperture of size 3.0 mm illuminated by light of wavelength 600 nm.
7. Two slits in YDSE have widths in the ratio 25 : 9. Find the ratio I_max : I_min.
8. In YDSE with white light (400–700 nm), what colour is the **central fringe** (at Δx = 0), and why?
9. A soap bubble looks completely **black** right before it bursts (when its thickness t << λ). Explain why using thin-film reflection phase shift!
10. What minimum diameter D must a telescope objective have to resolve two stars separated by 1.22 × 10⁻⁶ rad using light of wavelength 500 nm?

### Solutions

1. N = (n − 1) t / λ = (1.5 − 1)(4000 nm) / 500 nm = 2000 / 500 = **4 fringes**.
   Jaanch: 0.5 × 4000 / 500 = 4 ✅.

2. **NO!** Fringe width β = λD/d stays completely **unchanged** — only the entire pattern shifts sideways toward the covered slit!

3. Soap film in air (constructive reflection): t_min = λ / (4 n) = 600 / (4 × 4/3) = (600 × 3) / 16 = 1800 / 16 = **112.5 nm**.
   Jaanch: 2 × (4/3) × 112.5 = 300 nm = λ/2 ✅.

4. θ_min = 1.22 λ / D = (1.22 × 5.0 × 10⁻⁷) / 1.22 = **5.0 × 10⁻⁷ rad**.
   Jaanch: 1.22 kat gaya ✅.

5. RP = (2 n sin β) / λ: (a) Blue has smaller λ ⟹ **RP increases**; (b) Oil increases n from 1 to 1.5 ⟹ **RP increases by 1.5×**!

6. Z_F = a² / λ = (3.0 × 10⁻³)² / (6.0 × 10⁻⁷) = (9.0 × 10⁻⁶) / (6.0 × 10⁻⁷) = **15 m**.
   Jaanch: 9/6 = 1.5; 1.5 × 10 = 15 m ✅.

7. a₁ : a₂ = √25 : √9 = 5 : 3 ⟹ I_max / I_min = (5 + 3)² / (5 − 3)² = 64 / 4 = **16 : 1**.
   Jaanch: 64 / 4 = 16 ✅.

8. **WHITE!** At Δx = 0, **every wavelength** satisfies constructive interference simultaneously — all colours overlap to form a pure **white central fringe** (flanked by a few coloured fringes)!

9. When t → 0, optical path difference 2nt → 0, leaving ONLY the **π (λ/2) phase shift** from the top air-soap reflection ⟹ **destructive interference for ALL wavelengths** ⟹ looks completely **black**!

10. D = 1.22 λ / θ_min = (1.22 × 5.0 × 10⁻⁷) / (1.22 × 10⁻⁶) = **0.50 m = 50 cm**.
    Jaanch: 1.22 kat gaya; 5/10 = 0.50 m ✅.

---

Shabaash! Tumne YDSE Slab Shift, Thin-Film Interference, Rayleigh Resolution aur Fresnel Distance tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](wave-optics-part5.md) dekho!
