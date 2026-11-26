# Chapter: Wave Optics (Part 2)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Huygens' Principle and Wavefronts](wave-optics.md)

---

## Sabun ke Bulbule par Rang aur Light + Light = Darkness!

**Prema** balcony mein sabun ke bulbule (soap bubbles) uda rahi thi — dhoop mein un par chamakdaar neele, hare aur gulaabi rang tair rahe the! Agle din physics lab mein teacher ma'am ne ek safe low-power demonstration mein do bahut paas-paas bani patli slits se light guzaari — aur saamne screen par **ek ke baad ek chamakdaar (bright) aur kaali (dark) pattiyan** ban gayin!

Prema chaunk gayi: "Ma'am, do slits se light aa rahi hai, phir screen par kaali (dark) pattiyan kaise ban gayin? Kya Light + Light = Darkness ho sakta hai?"

Teacher ma'am boli: "Bilkul! Jab do **coherent** light waves ke crest aur trough ek-doosre se takrate hain, to woh ek-doosre ko cancel kar dete hain — isse **Interference of Light** kehte hain!"

---

## Naye Shabd (New Words)

- **Coherent Sources:** Do aise light sources jo **bilkul same frequency** ki waves nikalein aur jinke beech **phase difference (φ) samay ke saath constant** rahe! (Do alag bulbs kabhi coherent nahi ho sakte — coherence ke liye ek hi source ki light ko do slits S₁, S₂ mein baanta jaata hai!)
- **Constructive Interference:** Jab do waves same phase mein milein (crest + crest) aur resultant intensity **maximum** (bright fringe) ho!
- **Destructive Interference:** Jab do waves opposite phase mein milein (crest + trough) aur ek-doosre ko cancel karke **minimum / dark fringe** banayein!
- **Fringe Width (β):** Do lagataar bright fringes (ya do lagataar dark fringes) ke beech ki doori: **β = λ D / d**.

---

## 1. Superposition, Resultant Intensity aur Interference Conditions

Maan lo do coherent waves (amplitudes **a₁, a₂**; intensities **I₁ ∝ a₁², I₂ ∝ a₂²**) kisi point par phase difference **φ** (ya path difference **Δx**, jahan **φ = (2π / λ) Δx**) ke saath milti hain:

**I_net = I₁ + I₂ + 2 √(I₁ I₂) cos φ**

Agar dono sources ki intensity barabar ho (**I₁ = I₂ = I₀**):

**I_net = 2 I₀ (1 + cos φ) = 4 I₀ cos²(φ / 2)**

### Constructive vs Destructive Interference:
1. **Constructive (Bright Fringe — cos φ = +1):**
   - Phase difference: **φ = 0, 2π, 4π, ... = 2 n π**
   - Path difference: **Δx = 0, λ, 2λ, ... = n λ** (n = 0, 1, 2, ...)
   - Max Intensity: **I_max = (√I₁ + √I₂)² ∝ (a₁ + a₂)²** (Equal sources: **I_max = 4 I₀**!)
2. **Destructive (Dark Fringe — cos φ = −1):**
   - Phase difference: **φ = π, 3π, 5π, ... = (2n − 1) π**
   - Path difference: **Δx = λ/2, 3λ/2, ... = (n − ½) λ** (n = 1, 2, 3, ...)
   - Min Intensity: **I_min = (√I₁ − √I₂)² ∝ (a₁ − a₂)²** (Equal sources: **I_min = 0**!)

**Ratio Formula (Exam Favourite!):**
**I_max / I_min = (a₁ + a₂)² / (a₁ − a₂)²**

*(Energy Conservation Check: Dark fringe par energy 0 hai aur bright par 4I₀ — average = (0 + 4I₀)/2 = **2I₀**, jo dono slits ki alag-alag intensities I₀ + I₀ = 2I₀ ke bilkul barabar hai! Energy sirf **redistribute** hoti hai, nasht nahi hoti!)*

---

## 2. Young's Double Slit Experiment (YDSE)

Do patli coherent slits **S₁** aur **S₂** ke beech ki doori **d** (~1 mm) hai, aur unse doori **D** (~1 m, D >> d) par ek screen rakhi hai:
- Centre O se doori **y** par kisi point P par path difference hota hai: **Δx = (y d) / D**.
- **n-th Bright Fringe ki Position:** **y_n = n (λ D / d)** (n = 0, 1, 2, ...)
- **n-th Dark Fringe ki Position:** **y'_n = (n − ½) (λ D / d)** (n = 1, 2, 3, ...)
- **Fringe Width (β = y_(n+1) − y_n):**

**β = (λ D) / d**  *(Sabhi bright aur dark fringes ki width **BILKUL BARABAR** hoti hai!)*

- **Angular Fringe Width:** **θ = β / D = λ / d** (radians mein — screen ki doori D par depend nahi karti!).

---

## Solved Examples

### Example 1: YDSE Fringe Width & Position of 3rd Bright Fringe
In Young's double slit experiment, the slits are separated by **d = 1.0 mm**, the screen is **D = 1.5 m** away, and light of wavelength **λ = 600 nm** is used. Calculate:
(a) the fringe width **β**, and
(b) the distance of the **3rd bright fringe** from the central bright fringe.

**Hal (Solution):**
- λ = 600 × 10⁻⁹ = 6.0 × 10⁻⁷ m, D = 1.5 m, d = 1.0 × 10⁻³ m.
- (a) **β = λ D / d** = (6.0 × 10⁻⁷ × 1.5) / (1.0 × 10⁻³) = **9.0 × 10⁻⁴ m = 0.90 mm**.
- (b) 3rd bright fringe: **y₃ = 3 β = 3 × 0.90 = 2.70 mm**.
- **Jaanch:** 6 × 1.5 = 9; 10⁻⁷/10⁻³ = 10⁻⁴ m = 0.1 mm ⟹ 0.90 mm; 3 × 0.9 = 2.70 mm ✅.

### Example 2: Amplitude Ratio to Intensity Ratio
Two coherent light waves have amplitudes in the ratio **a₁ : a₂ = 3 : 1**. Find the ratio of maximum intensity to minimum intensity (**I_max : I_min**) in their interference pattern.

**Hal (Solution):**
- **I_max / I_min = (a₁ + a₂)² / (a₁ − a₂)²** = (3 + 1)² / (3 − 1)² = 4² / 2² = 16 / 4 = **4 : 1**.
- **Jaanch:** (3+1)² = 16, (3−1)² = 4 ⟹ 16/4 = 4:1 ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **β = λ D / d mein d aur D ko aapas mein badal dena:**
   - *Galat:* Screen distance (1.5 m) ko neeche aur slit gap (1 mm) ko upar rakh dena!
   - *Sahi:* **D (capital)** = badi screen distance (~m) **UPAR**; **d (small)** = chhota slit separation (~mm) **NEECHE**!
2. **Equal intensity I₀ wale do coherent sources ka I_max = 2 I₀ likh dena:**
   - *Galat:* I₁ + I₂ = I₀ + I₀ = 2 I₀ bol dena!
   - *Sahi:* 2 I₀ **incoherent** sources ke liye hota hai! Coherent constructive interference mein **I_max = 4 I₀** hota hai!
3. **Sochna ki interference mein dark fringe par energy gayab ho jaati hai:**
   - *Galat:* Destructive interference energy conservation todta hai.
   - *Sahi:* Energy bilkul conserve rehti hai — dark fringes ki energy bright fringes (4I₀) mein **redistribute** ho jaati hai!

---

## Quick Recap

| Concept | Formula | Key Detail |
|---|---|---|
| Coherent Sources | Same f + constant phase difference φ | Two independent bulbs are NEVER coherent |
| Resultant Intensity | I = I₁ + I₂ + 2√(I₁I₂) cos φ; Equal: 4I₀ cos²(φ/2) | Average intensity = I₁ + I₂ (energy conserved!) |
| Max / Min Intensity Ratio | I_max / I_min = (a₁ + a₂)² / (a₁ − a₂)² | Bright: Δx = nλ; Dark: Δx = (n − ½)λ |
| YDSE Fringe Width | β = λ D / d; Angular width θ = λ / d | All fringes are equally wide and equally bright |

---

## Practice Questions

1. What are coherent sources of light? Why can two independent sodium lamps never produce a sustained interference pattern?
2. State the conditions for (a) constructive interference, and (b) destructive interference in terms of both path difference Δx and phase difference φ.
3. In YDSE, the slit separation is d = 0.50 mm, screen distance is D = 1.0 m, and wavelength is λ = 500 nm. Calculate the fringe width β.
4. In Question 3, what is the distance of the **2nd dark fringe** from the central maximum?
5. Two coherent sources have intensity ratio **I₁ : I₂ = 9 : 1**. Find (a) their amplitude ratio a₁ : a₂, and (b) the ratio I_max : I_min in the interference pattern.
6. In YDSE with two identical slits of intensity I₀ each, the maximum intensity at a bright fringe is K. What will be the intensity at a point where the path difference is (a) λ/3, and (b) λ/2?
7. How does the fringe width β in YDSE change if (a) red light is replaced by blue light, and (b) the distance between the two slits d is halved?
8. What happens to the interference pattern in YDSE if the entire apparatus is immersed in water of refractive index n = 4/3?
9. State whether True or False: Interference of light violates the Law of Conservation of Energy because dark fringes have zero intensity.
10. In YDSE, the angular width of a fringe is found to be 0.2° when light of wavelength 600 nm is used. What will be the angular width if the wavelength is changed to 450 nm?

### Answers

1. **Coherent sources** same frequency aur constant phase difference wali waves nikaalte hain. Do alag sodium lamps ke atoms independently random phases mein light emit karte hain (phase 10⁻⁸ s mein badal jaata hai!), isliye sustained interference pattern nahi banta!

2. (a) **Constructive:** Δx = nλ, φ = 2nπ (n = 0, 1, 2, ...).
   (b) **Destructive:** Δx = (n − ½)λ, φ = (2n − 1)π (n = 1, 2, 3, ...).

3. β = λ D / d = (5.0 × 10⁻⁷ × 1.0) / (5.0 × 10⁻⁴) = **1.0 × 10⁻³ m = 1.0 mm**.
   Jaanch: 5/5 = 1; 10⁻⁷ / 10⁻⁴ = 10⁻³ m = 1.0 mm ✅.

4. 2nd dark fringe (n = 2): y'₂ = (2 − 0.5) β = 1.5 × 1.0 mm = **1.5 mm**.
   Jaanch: 1st dark at 0.5 mm, 2nd dark at 1.5 mm ✅.

5. (a) I ∝ a² ⟹ a₁ : a₂ = √9 : √1 = **3 : 1**.
   (b) I_max / I_min = (3 + 1)² / (3 − 1)² = 16 / 4 = **4 : 1**.
   Jaanch: 16/4 = 4:1 ✅.

6. Yahan K = 4 I₀, aur I = K cos²(φ/2):
   (a) Δx = λ/3 ⟹ φ = (2π/λ)(λ/3) = 2π/3 = 120° ⟹ φ/2 = 60° (cos 60° = 1/2):
       I = K (1/2)² = **K / 4** (= I₀).
   (b) Δx = λ/2 ⟹ φ = π = 180° ⟹ cos 90° = 0 ⟹ **I = 0**.
   Jaanch: cos²(60°) = 1/4 ⟹ K/4 ✅.

7. (a) Blue light ki λ red se chhoti hoti hai ⟹ **β ghat (decreases) jaati hai**.
   (b) d aadha karne par β = λD/d **double** ho jaati hai!

8. Water mein λ_water = λ / n ⟹ **fringe width β ghat kar β / n (= 3/4 β)** ho jaati hai!

9. **False ❌.** Interference energy conserve karta hai — dark fringes ki energy bright fringes mein shift (redistribute) ho jaati hai!

10. Angular width θ = λ / d ⟹ θ ∝ λ:
    θ₂ = 0.2° × (450 / 600) = 0.2° × (3 / 4) = **0.15°**.
    Jaanch: 450/600 = 0.75; 0.2 × 0.75 = 0.15° ✅.

---

Ab tum Coherent Sources, Interference aur Young's Double Slit Experiment (YDSE) ko pakka master kar chuke ho!

**Agle topic mein:** Do slits ki jagah agar sirf **EK patli slit** ho, to light uske kinaron par mudkar kaisa pattern banati hai — seekhenge **Single-Slit Diffraction**!
