# Chapter: Wave Optics (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Polarisation and Brewster's Law](wave-optics-part4.md)

---

## Wave Optics Olympiad ke Chaar Stations

School science club ke "Wave Optics Olympiad" mein **Puneet** ko chaar mixed-concept problems solve karne the:
1. YDSE setup ko paani mein dubone par fringe width kitni sikudegi?
2. Single-slit central maximum ke andar YDSE ki kitni fringes fit hongi?
3. Teen polaroids (0°, 30°, 90°) ke stack se kitni intensity bahar niklegi?
4. Ek hi glass slab ka critical angle aur Brewster's angle kaise aapas mein jude hain?

Chalo Puneet ke saath poora Wave Optics mila kar solve karte hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula |
|---|---|---|
| Light enters medium of index n | Frequency constant! | v = c/n; λ_med = λ_air / n; f unchanged |
| YDSE fringe width / intensity ratio | Double-slit Interference | β = λD/d; I = 4I₀ cos²(φ/2); I_max/I_min = (a₁+a₂)²/(a₁−a₂)² |
| YDSE immersed in liquid (index n) | Wavelength shrinks by n | β_liquid = β_air / n |
| Single-slit diffraction dark / central max | Single-slit formulas | Minima: a sin θ = nλ; Central max width: W = 2λD/a |
| Polaroids stack | First = half; next = Malus! | Unpolarised → I_in/2; Polarised → I₀ cos² θ |
| Polarisation by reflection | Brewster's Law | tan i_B = n; i_B + r = 90° |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: YDSE Dipped in Water + Fringe Count
In a Young's double slit experiment in air, the fringe width is **β = 1.2 mm**.
(a) What will be the new fringe width if the entire apparatus is dipped in water (**n = 4/3**)?
(b) In air, if the slit separation is doubled and screen distance is halved, what is the new fringe width?

**Hal (Solution):**
- (a) Water mein λ_w = λ / n ⟹ **β_w = β / n = 1.2 / (4/3) = 1.2 × 3 / 4 = 0.90 mm**.
- (b) β' = λ (D/2) / (2d) = (1/4) (λD/d) = 1.2 / 4 = **0.30 mm**.
- **Jaanch:** 1.2 × 0.75 = 0.90 mm ✅; 1.2 / 4 = 0.30 mm ✅.

### Example 2: How Many YDSE Fringes Fit Inside a Single-Slit Central Maximum?
In a double-slit arrangement, the slit separation is **d = 1.0 mm** and each individual slit has width **a = 0.20 mm**. How many interference bright fringes (of YDSE) lie inside the **central maximum** of the single-slit diffraction pattern?

**Hal (Solution):**
- Single-slit central maximum ki angular width = **2 λ / a**.
- Ek YDSE fringe ki angular width = **λ / d**.
- Number of YDSE fringes fitting inside central max:
  **N = (2 λ / a) / (λ / d) = 2 d / a** = (2 × 1.0) / 0.20 = **10 fringes**!
- **Jaanch:** λ aur D kat gaye; 2 × (1.0 / 0.20) = 2 × 5 = 10 ✅.

### Example 3: Three-Polaroid Stack (0°, 30°, 90°)
Unpolarised light of intensity **I_in = 64 W/m²** passes sequentially through three polaroids P₁, P₂, and P₃. The pass-axes of P₁ and P₃ are crossed (**90°**), while P₂ makes **30°** with P₁. Find the final intensity emerging from P₃.

**Hal (Solution):**
- P₁ ke baad (unpolarised → half): **I₁ = 64 / 2 = 32 W/m²**.
- P₂ (angle 30° with P₁; cos 30° = √3/2 ⟹ cos² 30° = 3/4):
  **I₂ = 32 × (3/4) = 24 W/m²**.
- P₃ (angle with P₂ = 90° − 30° = **60°**; cos 60° = 1/2 ⟹ cos² 60° = 1/4):
  **I₃ = 24 × (1/4) = 6.0 W/m²**.
- **Jaanch:** 64 × (1/2) × (3/4) × (1/4) = 64 × 3/32 = 6.0 W/m² ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **Crossed polaroids ke beech 3rd polaroid daalne par bhi final intensity 0 bol dena:**
   - *Galat:* P₁ aur P₃ 90° par hain to beech mein kuch bhi daalo, light 0 hi niklegi!
   - *Sahi:* Beech wala P₂ light ki polarisation direction ko ghumakar P₃ ke saath non-90° angle bana deta hai ⟹ light **bahar nikalne lagti hai**!
2. **Path difference Δx ko seedha cos²(Δx/2) mein rakh dena:**
   - *Galat:* I = 4I₀ cos²(Δx/2) likhna!
   - *Sahi:* Pehle path difference ko phase difference mein badlo: **φ = (2π / λ) Δx**, phir **I = 4I₀ cos²(φ/2)** lagao!
3. **YDSE aur Single-Slit mein d aur a ko ek hi maan lena:**
   - *Galat:* Central max width 2λD/d likh dena!
   - *Sahi:* **d** = do slits ke beech ki doori (YDSE: β = λD/d); **a** = ek single slit ki chaudai (Diffraction: W_central = 2λD/a)!

---

## Practice Questions (Mixed Chapter Challenge)

1. Light of wavelength 600 nm in air enters a medium of refractive index 1.5. Find its frequency and wavelength in the medium.
2. In YDSE, λ = 500 nm, d = 0.5 mm, and D = 1.5 m. Find (a) the fringe width β in air, and (b) the new fringe width if immersed in a liquid of n = 1.5.
3. Two coherent sources have intensities in the ratio 16 : 9. Find the ratio of maximum intensity to minimum intensity in their interference pattern.
4. In YDSE with equal-intensity slits (max intensity I_max = 4I₀), find the intensity at a point where the path difference is λ / 4.
5. Light of wavelength 600 nm falls on a single slit of width 0.60 mm. Find the linear width of the central maximum on a screen placed 1.2 m away.
6. In a double-slit setup, slit separation d = 0.80 mm and each slit width a = 0.16 mm. How many YDSE fringes fit inside the central diffraction maximum?
7. Unpolarised light of intensity 128 W/m² passes through three polaroids at 0°, 45°, and 90°. Find the final emerging intensity.
8. For a certain glass, Brewster's angle is 60° (tan 60° = √3). Find its refractive index n and the speed of light inside this glass (take √3 = 1.732).
9. State whether True or False: In YDSE, if one of the two slits is completely covered with black paper, the interference fringes vanish and a single-slit diffraction pattern appears.
10. A beam of light of wavelength 540 nm falls on two slits separated by 0.90 mm. Find the angular fringe width θ in radians.

### Answers

1. f = c / λ = (3.0 × 10⁸) / (6.0 × 10⁻⁷) = **5.0 × 10¹⁴ Hz** (unchanged!).
   λ_med = 600 / 1.5 = **400 nm**.
   Jaanch: 400 × 1.5 = 600 nm ✅.

2. (a) β_air = (5.0 × 10⁻⁷ × 1.5) / (5.0 × 10⁻⁴) = **1.5 × 10⁻³ m = 1.5 mm**.
   (b) β_liq = β_air / n = 1.5 / 1.5 = **1.0 mm**.
   Jaanch: 1.5 / 1.5 = 1.0 mm ✅.

3. a₁ : a₂ = √16 : √9 = 4 : 3.
   I_max / I_min = (4 + 3)² / (4 − 3)² = 7² / 1² = **49 : 1**.
   Jaanch: (4+3)² = 49, (4−3)² = 1 ✅.

4. Δx = λ/4 ⟹ φ = (2π/λ)(λ/4) = π/2 = 90° ⟹ φ/2 = 45° (cos² 45° = 1/2):
   I = 4 I₀ × (1/2) = **2 I₀** (= I_max / 2).
   Jaanch: cos²(45°) = 0.5 ⟹ 4I₀ × 0.5 = 2I₀ ✅.

5. W_central = (2 λ D) / a = (2 × 6.0 × 10⁻⁷ × 1.2) / (6.0 × 10⁻⁴) = **2.4 × 10⁻³ m = 2.4 mm**.
   Jaanch: 6/6 = 1; 2 × 1.2 = 2.4 mm ✅.

6. N = 2 d / a = (2 × 0.80) / 0.16 = 1.60 / 0.16 = **10 fringes**.
   Jaanch: 0.80 / 0.16 = 5; 2 × 5 = 10 ✅.

7. I_final = I_in × (1/2) × cos² 45° × cos² 45° = 128 × (1/2) × (1/2) × (1/2) = 128 / 8 = **16 W/m²**.
   Jaanch: 128 / 8 = 16 W/m² ✅.

8. n = tan 60° = **√3 ≈ 1.732**.
   v = c / n = (3.0 × 10⁸) / 1.732 = **√3 × 10⁸ ≈ 1.732 × 10⁸ m/s**.
   Jaanch: 3 / √3 = √3 ≈ 1.732 ✅.

9. **True ✅.** Ek slit bandh karne par do-slit interference khatam ho jaata hai aur bachi hui ek slit ka **single-slit diffraction** pattern dikhta hai!

10. θ = λ / d = (5.4 × 10⁻⁷) / (9.0 × 10⁻⁴) = **6.0 × 10⁻⁴ rad**.
    Jaanch: 5.4 / 9.0 = 0.6; 0.6 × 10⁻³ = 6.0 × 10⁻⁴ rad ✅.

---

## Chapter Ka Saar: Wave Optics

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Huygens' Principle | Rays ⊥ Wavefronts; sin i/sin r = v₁/v₂ = n₂/n₁ | Frequency f constant across boundary; λ' = λ/n |
| Interference & YDSE | β = λD/d; I = 4I₀ cos²(φ/2); I_max/I_min = (a₁+a₂)²/(a₁−a₂)² | Coherent sources needed; energy conserved (redistributed!) |
| Single-Slit Diffraction | Minima: a sin θ = nλ; Central max width: W = 2λD/a | Central max is twice as wide; secondary maxima fade fast |
| Polarisation | Unpolarised → I_in/2; Malus: I = I₀ cos² θ; Brewster: tan i_B = n | Proves light is **transverse**; at i_B, reflected ⊥ refracted |

---

Ab tum Wavefronts, Interference, Diffraction aur Polarisation — poora Wave Optics master kar chuke ho!

**Agle chapter mein:** Ab tak humne sabit kiya ki Light ek **Wave** hai — par achanak ek naya experiment aata hai jise wave theory samjha hi nahi paati! Light chhote energy packets (**Photons**) ki tarah behave karti hai, aur electrons **Waves** ki tarah — chaliye padhte hain **Dual Nature of Radiation and Matter**!
