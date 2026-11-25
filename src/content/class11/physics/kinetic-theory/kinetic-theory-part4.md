> **Class:** 11 | **Subject:** Physics | **Chapter 12:** Kinetic Theory (Part 4)

# Mean Free Path

> **Pichle topic se:** [Equipartition & Degrees of Freedom](kinetic-theory-part3.md) mein humne molecules ki energy dekhi. Par agar kamre mein hawa ke molecules 500 m/s se chal rahe hain, toh perfume ki bottle kholte hi khushboo 1 millisecond mein doosre kone tak kyun nahi pahunchti? Kyunki molecules har second **arbo baar aapas mein takra kar** zig-zag chalte hain! Do lagatar takkaron ke beech ki average seedhi doori ko **Mean Free Path (λ)** kehte hain!

---

## Kalindi ka Semiconductor-Cleanroom Vacuum Chamber

Kalindi ek semiconductor-coating engineer hai. Normal atmospheric pressure par hawa ke ek molecule ka mean free path sirf **~70 nanometres** hota hai — yani woh har second **7 billion baar** doosre molecules se takrata hai!

Isliye jab Kalindi ko silicon wafer par metal atoms ki seedhi coating karni hoti hai, toh woh vacuum pump se chamber ka pressure **10⁻⁶ atm** tak gira deti hai — jisse number density n 10⁶ guna kam ho jati hai aur mean free path badh kar **~70 metres** ho jata hai (atoms bina takraye seedhe wafer tak pahunch jate hain)!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Mean Free Path (λ) | Ek gas molecule dwara do consecutive (lagatar) collisions ke beech chali gayi average free distance |
| Molecular Diameter (d) | Effective collision diameter of a gas molecule (typically ~2–4 Å = 2–4 × 10⁻¹⁰ m) |
| Number Density (n) | Molecules per unit volume: **n = N / V = P / (k_B T)** |
| Collision Frequency (f_coll) | Ek molecule dwara 1 second mein ki gayi takkaron ki sankhya: **f_coll = v_avg / λ** |

---

## 1. Formula for Mean Free Path (λ)

Diameter **d** wala molecule jab speed **v** se chalta hai, toh woh **π d²** cross-sectional area ka cylinder sweep karta hai. Baaki sabhi molecules ke relative motion (Maxwell factor **√2**) ko include karne par:

```
  λ = 1 / ( √2 π n d² )
```

Ideal gas law **n = P / (k_B T)** substitute karne par:
```
  λ = k_B T / ( √2 π d² P )
```

**4 Instant Scaling Rules:**
1. **λ ∝ 1 / n** (zyada bheed => chhota rasta!).
2. **λ ∝ 1 / d²** (bada molecule => chhota rasta!).
3. **At constant T:** **λ ∝ 1 / P** (pressure aadha => λ double!).
4. **At constant P:** **λ ∝ T** (temperature double => gas expand => n halves => λ double!).
   *(At constant Volume V, n = N/V fixed hai => **λ is INDEPENDENT of T**!)*

---

## Solved Examples

### Example 1: Mean Free Path of Nitrogen Molecules at Room Conditions

Estimate the mean free path λ of Nitrogen molecules at 300 K and 1.0 × 10⁵ Pa, given molecular diameter d = 3 × 10⁻¹⁰ m (k_B = 1.38 × 10⁻²³ J/K, √2 π ≈ 4.44).

**Solution:**
λ = k_B T / (√2 π d² P)
= (1.38 × 10⁻²³ × 300) / (4.44 × 9 × 10⁻²⁰ × 1.0 × 10⁵)
= (4.14 × 10⁻²¹) / (39.96 × 10⁻¹⁵) ≈ **1.04 × 10⁻⁷ m = 104 nm** (~350 times the molecular diameter!).

Jaanch:
- Jaanch: 4.14 / 40 ≈ 0.1035 × 10⁻⁶ m ≈ 104 nm ✅

---

### Example 2: Collision Frequency & Time Between Collisions

For Nitrogen in Example 1 (λ = 1.0 × 10⁻⁷ m) with average speed v_avg = 470 m/s, find: (a) collision frequency f_coll, (b) average time τ between two collisions.

**Solution:**
- (a) f_coll = v_avg / λ = 470 / (1.0 × 10⁻⁷) = **4.7 × 10⁹ collisions/second** (4.7 billion/s!).
- (b) τ = 1 / f_coll = **2.1 × 10⁻¹⁰ s**!

Jaanch:
- Jaanch: v_avg × τ = 470 × 2.13 × 10⁻¹⁰ = 1.0 × 10⁻⁷ m = λ ✅

---

### Example 3: Effect of Doubling Diameter and Halving Pressure

Two gases A and B are at the same temperature. Gas B has twice the molecular diameter of Gas A (d_B = 2 d_A) and half the pressure of Gas A (P_B = P_A / 2). Find the ratio λ_B / λ_A.

**Solution:**
λ ∝ T / (d² P) => λ_B / λ_A = (d_A / d_B)² × (P_A / P_B) = (1 / 2)² × (2 / 1) = (1/4) × 2 = **1 / 2**!

Jaanch:
- Jaanch: Double diameter cuts λ by 4, halving pressure doubles λ => net 1/2 ✅

---

### Example 4: Heating a Sealed Rigid Container (Constant Volume!)

A sealed rigid glass bulb contains gas with mean free path λ₀ at 300 K. If the bulb is heated to 600 K, what is the new mean free path?

**Solution:**
In a **rigid sealed bulb**, both N and V are constant => number density **n = N / V is UNCHANGED**!
Since λ = 1 / (√2 π n d²), the mean free path stays **λ₀ (UNCHANGED!)**!
(Notice: even though T doubled, P also doubled at constant V, so T/P stayed constant!)

Jaanch:
- Jaanch: T/P = constant at constant volume => λ unchanged ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Constant-volume heating mein λ ∝ T laga kar λ double kar dena
- **Galat:** T double hua toh λ = k_B T / (√2 π d² P) se λ double ho gaya!
- **Sahi:** Constant volume mein T double hone par **P bhi double** hota hai => T/P constant => **λ UNCHANGED**! (λ ∝ T sirf **constant pressure** par hota hai!)

### Galti 2: Mean free path mein diameter ka square (d²) bhool kar 1/d le lena
- **Galat:** Diameter double hua toh λ aadha hoga!
- **Sahi:** Collision cross-section area **π d²** hai => diameter double hone par λ **1/4** ho jata hai!

### Galti 3: √2 factor bhool jana
- **Galat:** λ = 1 / (π n d²).
- **Sahi:** Jab baaki sabhi molecules bhi chal rahe hon (relative speed √2 v_avg), toh exact formula **λ = 1 / (√2 π n d²)** hota hai!

---

## Quick Recap

- **Mean Free Path:** λ = 1 / (√2 π n d²) = k_B T / (√2 π d² P).
- **Collision Frequency:** f_coll = v_avg / λ; **Mean free time:** τ = λ / v_avg.
- **Scaling:** Constant T => λ ∝ 1/P; Constant P => λ ∝ T; Constant V => λ = constant!

---

## Practice Questions

### Question 1
If the pressure of an ideal gas is tripled at constant temperature, how does its mean free path λ change?

**Solution:**
At constant T, λ ∝ 1 / P => λ becomes **1 / 3 of its original value**.

Jaanch:
- Jaanch: Higher pressure packs 3× more molecules per unit volume => 1/3rd free path ✅

---

### Question 2
If the molecular diameter of a gas is halved while keeping number density n constant, by what factor does its mean free path increase?

**Solution:**
λ ∝ 1 / d² => (1/2)⁻² = **4 times**.

Jaanch:
- Jaanch: Collision area πd² becomes 1/4 => λ becomes 4× ✅

---

### Question 3
A gas at 1 atm has mean free path λ = 80 nm. If the chamber is pumped down to 10⁻⁴ atm at the same temperature, find the new mean free path in mm.

**Solution:**
λ₂ = 80 nm × (1 / 10⁻⁴) = 80 × 10⁴ nm = 8 × 10⁵ × 10⁻⁹ m = 8 × 10⁻⁴ m = **0.8 mm**.

Jaanch:
- Jaanch: 10⁴× lower pressure => 10⁴× longer mean free path ✅

---

### Question 4
If a gas is expanded isothermally to double its volume (V₂ = 2 V₁), what happens to its mean free path λ?

**Solution:**
Volume doubles => number density n = N/V halves => **λ doubles (2 λ)**!

Jaanch:
- Jaanch: λ ∝ 1/n ∝ V ✅

---

### Question 5
A molecule has mean free path λ = 2 × 10⁻⁷ m and average speed 500 m/s. Find its collision frequency f_coll.

**Solution:**
f_coll = v_avg / λ = 500 / (2 × 10⁻⁷) = **2.5 × 10⁹ s⁻¹**.

Jaanch:
- Jaanch: 500 / 2 = 250 × 10⁷ = 2.5 × 10⁹ collisions per second ✅

---

### Question 6
If an ideal gas in a **sealed rigid container** is heated from 300 K to 1200 K, how do: (a) mean free path λ, and (b) collision frequency f_coll change?

**Solution:**
- (a) Rigid container => n = N/V constant => **λ remains UNCHANGED**.
- (b) v_avg ∝ √T => T becomes 4× => v_avg **doubles (2×)** => f_coll = v_avg / λ **DOUBLES (2×)**!

Jaanch:
- Jaanch: Same distance between hits, moving 2× faster => 2× more hits per second ✅

---

### Question 7
Find the mean free path λ of a gas with number density n = 2.5 × 10²⁵ m⁻³ and diameter d = 2 × 10⁻¹⁰ m (take √2 π ≈ 4.44).

**Solution:**
λ = 1 / (4.44 × 2.5 × 10²⁵ × 4 × 10⁻²⁰) = 1 / (44.4 × 10⁵) = 1 / (4.44 × 10⁶) ≈ **2.25 × 10⁻⁷ m (225 nm)**.

Jaanch:
- Jaanch: 2.5 × 4 = 10; 4.44 × 10 × 10⁵ = 4.44 × 10⁶; 1/4.44 ≈ 0.225 μm ✅

---

### Question 8
If a gas expands at **constant pressure** from 300 K to 900 K, by what factor does its mean free path change?

**Solution:**
At constant P, λ ∝ T => 900 / 300 = **3 times**!

Jaanch:
- Jaanch: Volume triples at constant P => density drops to 1/3 => λ triples ✅

---

### Question 9
Why does a fragrance take several seconds to cross a still room even though air molecules travel at ~500 m/s?

**Solution:**
Because the mean free path at 1 atm is tiny (~100 nm), each perfume molecule undergoes billions of random collisions per second and executes a slow zig-zag **random walk (diffusion)** rather than flying straight across!

Jaanch:
- Jaanch: Tiny λ causes slow diffusion despite high molecular speed ✅

---

### Question 10
Two gases X and Y at the same temperature and pressure have molecular diameters in the ratio d_X : d_Y = 2 : 3. Find the ratio of their mean free paths λ_X / λ_Y.

**Solution:**
λ ∝ 1 / d² => λ_X / λ_Y = (d_Y / d_X)² = (3 / 2)² = **9 : 4**.

Jaanch:
- Jaanch: Smaller molecule X has larger mean free path (9 : 4) ✅

---

### Question 11
State whether the following statements are True or False:
(a) Mean free path of an ideal gas is directly proportional to gas density ρ.
(b) In a high-vacuum chamber, the mean free path can exceed the physical size of the chamber itself.

**Solution:**
- (a) **False** ❌ — λ is **inversely** proportional to number density n (and mass density ρ)!
- (b) **True** ✅ — At ultra-high vacuum (< 10⁻⁶ atm), λ reaches metres to kilometres, so molecules hit walls more often than each other!

Jaanch:
- Jaanch: Verified from Kalindi's vacuum-chamber example ✅

---

### Question 12
What is the SI unit and dimensional formula of Mean Free Path λ?

**Solution:**
Mean free path is an average distance => SI unit is **metre (m)**, dimensional formula **[M⁰ L¹ T⁰]**.

Jaanch:
- Jaanch: Check 1 / (n d²): 1 / ([L⁻³][L²]) = [L] ✅

---

Mean Free Path ab tumhare liye bilkul clear hai!

**Agle topic mein:** Poore Kinetic Theory chapter ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](kinetic-theory-part5.md) mein!
