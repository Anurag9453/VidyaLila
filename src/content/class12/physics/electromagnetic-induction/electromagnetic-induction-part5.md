# Chapter: Electromagnetic Induction (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Mutual and Self Inductance](electromagnetic-induction-part4.md)

---

## Hydroelectric Dam ka Ghoomta Turbine aur AC Generator

Science city ke energy pavilion mein **Malini** ne ek hydroelectric power plant ka working model dekha. Upar se girta hua paani ek pankhe (turbine) ko ghuma raha tha, aur us turbine ke shaft se judi ek copper coil do bade magnets ke beech lagataar ghoom rahi thi — jisse board par lage chhote LED bulbs chamak rahe the!

Guide ne bataya: "Hamare gharon, schools aur factories mein jo bijli aati hai, uska 99% se zyada hissa isi machine — **AC Generator (Alternator)** — se banta hai, jo mechanical rotation ko seedha **Alternating Current (AC)** mein badal deta hai!"

---

## Naye Shabd (New Words)

- **AC Generator (Dynamo / Alternator):** Aisi machine jo **Electromagnetic Induction** ke principle par mechanical energy ko alternating electrical energy (AC) mein badalti hai.
- **Armature Coil:** Soft iron core par lipti hui insulated copper wire ke **N turns** wali rectangular coil jo magnetic field mein ghoomti hai.
- **Slip Rings:** Do alag-alag gol metal rings jo armature ke dono sirhon se judi hoti hain aur coil ke saath ghoomti hain — yeh bina wire uljhe AC ko bahar ke circuit tak pahunchati hain!
- **Peak EMF (ε₀):** AC generator dwara paida hone wala maximum instantaneous EMF: **ε₀ = N B A ω**.

---

## 1. Construction aur Working Principle of an AC Generator

**Principle:** Jab koi closed coil uniform magnetic field **B** mein lagataar ghoomti hai, to usse guzarne wala magnetic flux **Φ_B = B A cos θ** lagataar badalta hai — jisse Faraday's law ke anusaar usmein ek **alternating (sinusoidal) EMF** induce hota hai!

### 4 Main Parts:
1. **Field Magnet:** Strong permanent magnet ya electromagnet jo uniform magnetic field **B** deta hai.
2. **Armature Coil (ABCD):** N turns, area A wali coil jo axis par angular speed **ω** se ghoomti hai.
3. **Slip Rings (R₁, R₂):** Coil ke dono sirhon se judi do full rings (yaad rakho: AC generator mein **slip rings** hoti hain, split-ring commutator nahi!).
4. **Carbon Brushes (B₁, B₂):** Stationary carbon blocks jo ghoomti slip rings ko halka touch karke current bahar ke external load tak le jaate hain.

---

## 2. Derivation of Instantaneous Induced EMF (ε = ε₀ sin ωt)

Maan lo **t = 0** par coil ka plane magnetic field B ke perpendicular hai (normal B ke parallel, **θ = 0°**). Time **t** mein coil constant angular speed **ω = 2π f** se angle **θ = ω t** ghoom jaati hai:

1. Kisi bhi pal **t** par ek turn se magnetic flux:
   **Φ_B = B A cos(ω t)**
2. Faraday's law se **N** turns mein induced EMF (rate of change of cos(ωt) = **−ω sin(ωt)** — calculus rate-of-change result):
   ε = − N × [ rate of change of B A cos(ω t) ]
   = − N B A × (−ω sin ω t) ⟹

**ε = N B A ω sin(ω t) = ε₀ sin(ω t)**

jahan **ε₀ = N B A ω = 2π f N B A** ko **Peak (Maximum) EMF** kehte hain!

### Waveform ke 4 Khaas Moments (Ek Poori Rotation = Time Period T):

| Time / Angle (θ = ωt) | Flux Φ_B = BA cos θ | Induced EMF ε = ε₀ sin θ | Physical Position |
|---|---|---|---|
| t = 0 (θ = 0°) | **+BA (Maximum)** | **0 (Zero!)** | Plane ⊥ to B |
| t = T/4 (θ = 90°) | **0 (Zero!)** | **+ε₀ (Max +ve!)** | Plane ∥ to B |
| t = T/2 (θ = 180°) | **−BA (Min)** | **0 (Zero!)** | Plane ⊥ to B |
| t = 3T/4 (θ = 270°) | **0 (Zero!)** | **−ε₀ (Max −ve!)** | Plane ∥ to B |

*(Har aadhe chakkar (T/2) ke baad induced EMF aur current ki **direction ulat jaati hai** — isliye ise **Alternating Current (AC)** kehte hain! Bharat mein mains AC ki frequency **f = 50 Hz** hai — yaani current har second mein **100 baar** apni direction badalta hai!)*

---

## Solved Examples

### Example 1: Peak EMF of an AC Generator
An AC generator coil has **N = 100 turns**, area **A = 0.10 m²**, and rotates at **f = 50 Hz** in a uniform magnetic field **B = 0.20 T**. Calculate:
(a) the angular velocity **ω**, and
(b) the peak EMF **ε₀** induced in the coil (take π = 3.14).

**Hal (Solution):**
- (a) **ω = 2π f** = 2 × 3.14 × 50 = **314 rad/s** (= 100π rad/s).
- (b) **ε₀ = N B A ω** = 100 × 0.20 × 0.10 × 314 = 2.0 × 314 = **628 V**.
- **Jaanch:** 100 × 0.2 × 0.1 = 2.0; 2.0 × 314 = 628 V ✅.

### Example 2: Instantaneous EMF and Maximum Current
The armature coil of a generator produces an EMF given by **ε = 200 sin(100π t)** Volts, connected to a total resistance of **R = 40 Ω**. Find (a) peak EMF, (b) frequency f, and (c) peak current I₀.

**Hal (Solution):**
- Compare with ε = ε₀ sin(ω t):
  - (a) Peak EMF **ε₀ = 200 V**.
  - (b) ω = 100π = 2π f ⟹ **f = 100π / (2π) = 50 Hz**.
  - (c) Peak current **I₀ = ε₀ / R = 200 / 40 = 5.0 A**.
- **Jaanch:** 2π(50) = 100π; 200 / 40 = 5.0 A ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **ε₀ = N B A ω mein ω ki jagah seedha frequency f (Hz) rakh dena:**
   - *Galat:* f = 50 Hz ko seedha ω = 50 maan lena (2π bhool jaana!).
   - *Sahi:* **ω = 2π f** (rad/s)! 50 Hz ke liye ω = 2π × 50 = **100π ≈ 314 rad/s**!
2. **AC generator mein split rings (commutator) bol dena:**
   - *Galat:* AC generator mein split-ring commutator hota hai.
   - *Sahi:* **AC Generator = Full Slip Rings**; **DC Generator = Split-Ring Commutator**!
3. **Sochna ki jab flux maximum hota hai tab EMF bhi maximum hota hai:**
   - *Galat:* θ = 0° par Φ_B = BA max hai to EMF bhi max hoga!
   - *Sahi:* Bilkul ulta! Jab Φ_B maximum (cos 0° = 1) hota hai, tab uska badlaav (sin 0° = 0) **ZERO** hota hai ⟹ **EMF = 0**! Peak EMF tab aata hai jab **Φ_B = 0 (θ = 90°)**!

---

## Quick Recap

| Concept | Formula / Fact | Key Detail |
|---|---|---|
| Instantaneous Flux | Φ_B = B A cos(ωt) | Max at θ = 0°, 180° |
| Instantaneous EMF | ε = ε₀ sin(ωt) | Zero when flux is max; Max when flux is zero! |
| Peak EMF | ε₀ = N B A ω = 2π f N B A | Increases with N, B, A, and rotation speed f |
| AC vs DC Rings | AC uses **Slip Rings** | DC uses Split-Ring Commutator |

---

## Practice Questions

1. State the working principle of an AC generator. What is the role of slip rings and carbon brushes?
2. At what orientation of the armature coil relative to the magnetic field is the induced EMF (a) maximum, and (b) zero?
3. A rectangular coil of 50 turns and area 0.05 m² rotates at 60 rad/s in a uniform magnetic field of 0.40 T. Calculate the maximum EMF induced in the coil.
4. A circular coil of 200 turns and area 0.02 m² rotates at 25 revolutions per second in a magnetic field of 0.50 T. Find the peak EMF induced (take π = 3.14).
5. If the coil in Question 4 has a total circuit resistance of 15.7 Ω, calculate the peak current drawn from the generator.
6. An AC generator produces voltage ε = 311 sin(100π t) V. Find (a) the peak voltage, (b) the frequency f, and (c) the time period T of the AC.
7. What happens to the peak EMF ε₀ of an AC generator if its speed of rotation (frequency f) is doubled?
8. In India, domestic AC supply has a frequency of 50 Hz. How many times does the alternating current reverse its direction in 1 second?
9. State whether True or False: When the magnetic flux linked with an AC generator coil is zero, the magnitude of induced EMF is maximum.
10. Calculate the instantaneous EMF of a generator with ε₀ = 120 V at the moment when the coil has rotated by θ = 30° from the position of maximum flux.

### Answers

1. **Principle:** Electromagnetic Induction (uniform magnetic field mein coil ghoomne se flux badalta hai aur alternating EMF induce hota hai). **Slip rings** aur **carbon brushes** ghoomti coil se bina taar uljhe AC current ko stationary bahari circuit tak pahunchate hain.

2. (a) **Maximum EMF:** Jab coil ka plane B ke **parallel** ho (θ = 90°, flux = 0).
   (b) **Zero EMF:** Jab coil ka plane B ke **perpendicular** ho (θ = 0° ya 180°, flux maximum).

3. ε₀ = N B A ω = 50 × 0.40 × 0.05 × 60 = 1.0 × 60 = **60 V**.
   Jaanch: 50 × 0.4 = 20; 20 × 0.05 = 1.0; 1.0 × 60 = 60 V ✅.

4. ω = 2π f = 2 × 3.14 × 25 = 157 rad/s.
   ε₀ = N B A ω = 200 × 0.50 × 0.02 × 157 = 2.0 × 157 = **314 V**.
   Jaanch: 200 × 0.5 = 100; 100 × 0.02 = 2; 2 × 157 = 314 V ✅.

5. I₀ = ε₀ / R = 314 / 15.7 = **20 A**.
   Jaanch: 15.7 × 20 = 314 V ✅.

6. (a) **ε₀ = 311 V**.
   (b) 2π f = 100π ⟹ **f = 50 Hz**.
   (c) **T = 1 / f = 1 / 50 = 0.02 s = 20 ms**.
   Jaanch: 1 / 0.02 = 50 Hz ✅.

7. ε₀ = 2π f N B A ⟹ f double karne par peak EMF **double (2 ε₀)** ho jaata hai!

8. Har ek cycle mein current **2 baar** apni direction badalta hai ⟹ 50 Hz (50 cycles/s) mein **2 × 50 = 100 baar per second**!

9. **True ✅.** Jab Φ_B = BA cos 90° = 0 hota hai, tab sin 90° = 1 ⟹ **ε = ε₀ (maximum)** hota hai!

10. ε = ε₀ sin 30° = 120 × 0.5 = **60 V**.
    Jaanch: 120 × 0.5 = 60 V ✅.

---

Ab tum AC Generator ki construction, derivation aur waveforms poori tarah samajh chuke ho!

**Agle topic mein:** Sab Kuch Mila Kar — is poore chapter ke saare EMI concepts (Faraday, Motional EMF, Eddy Currents, Inductance aur AC Generator) ko ek saath jodkar mixed problems solve karenge aur poora chapter wrap-up karenge!
