# Chapter: Electromagnetic Induction (Part 6)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [AC Generator](electromagnetic-induction-part5.md)

---

## EMI Engineering Sprint ke Chaar Stations

School science club mein **Mamta** ki team ko "EMI Engineering Sprint" ke chaar mixed-concept problems solve karne the:
1. Ek coil ko magnetic field mein 180° palat (flip) dene par kitna EMF aur charge niklega?
2. Sliding rail par rod chalane mein energy conservation aur force kaise balance hoga?
3. Ek solenoid ka self-inductance aur usmein stored magnetic energy kaise nikaalein?
4. Ek AC generator ka peak EMF aur maximum power kaise calculate karein?

Chalo Mamta ke saath poora chapter mila kar solve karte hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula |
|---|---|---|
| Flux changing in a coil (B, A, or θ changes) | Faraday's & Lenz's Laws | ε = −N ΔΦ_B/Δt; Δq = N ΔΦ_B / R (independent of Δt!) |
| Coil flipped by 180° | Watch the sign flip! | Φ: +BA → −BA ⟹ **|ΔΦ_B| = 2 B A**! |
| Straight rod moving ⊥ to B | Motional EMF | ε = B l v; F = B²l²v/R; P = B²l²v²/R |
| Rotating rod / wheel spokes in B | Rotating rod formula | ε = ½ B ω l² = π B f l² (same for N parallel spokes!) |
| Current changing in 1 coil or 2 nearby coils | Self / Mutual Inductance | ε = −L ΔI/Δt; ε₂ = −M ΔI₁/Δt; U = ½ L I² |
| Rotating coil producing sinusoidal AC | AC Generator | ε = ε₀ sin(ωt), where ε₀ = N B A ω = 2π f N B A |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Flipping a Coil by 180° (Watch the Factor of 2!)
A circular coil of **N = 200 turns**, area **A = 0.05 m²**, and resistance **R = 20 Ω** is held perpendicular to a uniform magnetic field **B = 0.30 T**. It is quickly flipped by **180°** in **0.1 s**. Calculate (a) the average induced EMF, and (b) the total charge flown through the coil.

**Hal (Solution):**
- Initial flux (θ = 0°): Φ₁ = +B A = +0.30 × 0.05 = **+0.015 Wb**.
- Final flux (θ = 180°): Φ₂ = −B A = **−0.015 Wb**.
- Total flux change: **|ΔΦ_B| = |Φ₂ − Φ₁| = |−0.015 − 0.015| = 0.030 Wb** (= 2 B A!).
- (a) Average EMF: ε = N |ΔΦ_B| / Δt = 200 × (0.030 / 0.1) = 200 × 0.30 = **60 V**.
- (b) Total charge: Δq = N |ΔΦ_B| / R = (200 × 0.030) / 20 = 6.0 / 20 = **0.30 C**.
- **Jaanch:** I_avg = 60/20 = 3 A ⟹ Δq = 3 × 0.1 = 0.30 C ✅.

### Example 2: Wheel with 10 Spokes Rotating in Earth's Field
A metal wheel with **10 spokes**, each of length **l = 0.60 m**, rotates at **f = 10 revolutions per second** in a plane normal to Earth's horizontal magnetic field **B_H = 0.50 G** (= 5.0 × 10⁻⁵ T). Find the EMF induced between the axle and the rim (take π = 3.14).

**Hal (Solution):**
- Sabhi 10 spokes axle aur rim ke beech **parallel** mein jude hain ⟹ net EMF ek spoke ke EMF ke hi barabar hoga!
- ε = π B_H f l² = 3.14 × (5.0 × 10⁻⁵) × 10 × (0.60)²
  = 3.14 × (5.0 × 10⁻⁴) × 0.36 = 3.14 × 1.8 × 10⁻⁴ ≈ **5.65 × 10⁻⁴ V = 0.565 mV**.
- **Jaanch:** 5 × 0.36 = 1.8; 3.14 × 1.8 = 5.652 ⟹ 5.65 × 10⁻⁴ V ✅.

### Example 3: Self-Inductance of a Solenoid + Stored Magnetic Energy
A 1.0 m long air-core solenoid has **N = 1000 turns** and cross-sectional area **A = 5.0 × 10⁻⁴ m²**. If it carries a steady current of **I = 4.0 A**, find (a) its self-inductance **L**, and (b) the magnetic energy **U** stored inside it (take π = 3.14).

**Hal (Solution):**
- (a) L = (μ₀ N² A) / l = (4 × 3.14 × 10⁻⁷ × 10⁶ × 5.0 × 10⁻⁴) / 1.0
  = 20 × 3.14 × 10⁻⁵ = 62.8 × 10⁻⁵ H = **0.628 mH**.
- (b) U = ½ L I² = 0.5 × (6.28 × 10⁻⁴) × (4.0)² = 3.14 × 10⁻⁴ × 16 ≈ **5.02 × 10⁻³ J = 5.02 mJ**.
- **Jaanch:** 4 × 5 = 20; 20 × 3.14 = 62.8 ⟹ 0.628 mH; 0.5 × 0.628 × 16 = 5.024 mJ ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **180° flip mein ΔΦ_B = 0 likh dena:**
   - *Galat:* Dono baar plane perpendicular hai to flux change zero hai!
   - *Sahi:* Flux **+BA se −BA** badalta hai ⟹ **ΔΦ_B = 2 B A** (double change!)!
2. **Wheel ke 10 spokes ke liye EMF ko 10 se multiply kar dena:**
   - *Galat:* 10 spokes hain to ε_net = 10 × (½ Bωl²)!
   - *Sahi:* Sabhi spokes hub aur rim ke beech **parallel** mein hain ⟹ **net EMF wahi ½ Bωl²** rehta hai!
3. **Solenoid ke B = μ₀ n I aur L = μ₀ n² A l ko mix kar dena:**
   - *Galat:* L mein n ki power 1 laga dena!
   - *Sahi:* **B ∝ n**, par flux linkage NΦ mein ek aur N multiply hota hai ⟹ **L ∝ n² (ya N²)**!

---

## Practice Questions (Mixed Chapter Challenge)

1. A coil of 50 turns, area 0.04 m², and resistance 10 Ω is held perpendicular to a uniform magnetic field of 0.25 T. If it is flipped by 180° in 0.05 s, find (a) the average induced EMF, and (b) the total charge flown.
2. A straight metal rod of length 0.80 m moves perpendicular to a magnetic field of 0.50 T at 5.0 m/s on rails of total resistance 4.0 Ω. Find the induced current and the rate of heat production (power).
3. A bicycle wheel of radius 0.40 m with 20 metal spokes rotates at 5 rev/s perpendicular to a magnetic field of 1.0 × 10⁻⁴ T. Find the EMF induced between the hub and the rim (take π = 3.14).
4. Explain in two sentences why eddy current braking is preferred in modern high-speed trains and why transformer cores are laminated.
5. The current in a 0.40 H inductor drops from 10 A to 2 A in 0.04 s. Calculate (a) the induced EMF, and (b) the decrease in magnetic energy stored in the inductor.
6. Two coaxial solenoids of length 0.50 m have 500 turns and 200 turns respectively, with inner solenoid cross-section area 2.0 × 10⁻⁴ m². Calculate their mutual inductance M (take π = 3.14).
7. An AC generator with 100 turns and area 0.04 m² rotates at 50 Hz in a magnetic field of 0.10 T. Find its peak EMF (take π = 3.14).
8. If the current in an inductor is doubled, by what factor does the magnetic energy stored in it increase?
9. State whether True or False: When a coil is flipped by 180° in a uniform magnetic field, the total induced charge depends on how fast the coil is flipped.
10. A 20 m wingspan drone flies horizontally at 50 m/s where B_V = 4.0 × 10⁻⁵ T. Calculate the motional EMF between its wingtips.

### Answers

1. |ΔΦ_B| = 2 B A = 2 × 0.25 × 0.04 = 0.02 Wb:
   (a) ε = N |ΔΦ_B| / Δt = 50 × (0.02 / 0.05) = 50 × 0.4 = **20 V**.
   (b) Δq = N |ΔΦ_B| / R = (50 × 0.02) / 10 = 1.0 / 10 = **0.10 C**.
   Jaanch: I = 20/10 = 2 A ⟹ Δq = 2 × 0.05 = 0.10 C ✅.

2. ε = B l v = 0.50 × 0.80 × 5.0 = 2.0 V.
   I = ε / R = 2.0 / 4.0 = **0.50 A**.
   Power P = I² R = (0.50)² × 4.0 = **1.0 W**.
   Jaanch: ε²/R = 4/4 = 1.0 W ✅.

3. 20 spokes parallel mein ⟹ 1 spoke ke barabar:
   ε = π B f l² = 3.14 × (1.0 × 10⁻⁴) × 5 × (0.40)² = 3.14 × 5 × 0.16 × 10⁻⁴ = 3.14 × 0.80 × 10⁻⁴ ≈ **2.51 × 10⁻⁴ V**.
   Jaanch: 5 × 0.16 = 0.8; 3.14 × 0.8 = 2.512 ✅.

4. Eddy current brakes mein koi mechanical contact ya friction nahi hota (smooth aur wear-free braking!). Transformer cores ko laminate isliye kiya jaata hai taaki eddy loops toot jaayein aur unwanted heat energy loss kam ho.

5. (a) |ε| = L |ΔI / Δt| = 0.40 × (8 / 0.04) = 0.40 × 200 = **80 V**.
   (b) ΔU = ½ L (I₁² − I₂²) = 0.5 × 0.40 × (100 − 4) = 0.20 × 96 = **19.2 J**.
   Jaanch: U₁ = 20 J, U₂ = 0.8 J ⟹ 20 − 0.8 = 19.2 J ✅.

6. M = (μ₀ N₁ N₂ A) / l = (4 × 3.14 × 10⁻⁷ × 500 × 200 × 2.0 × 10⁻⁴) / 0.50
   = (4 × 3.14 × 10⁻⁷ × 20) / 0.50 = 160 × 3.14 × 10⁻⁷ ≈ **5.02 × 10⁻⁵ H = 50.2 μH**.
   Jaanch: 500 × 200 = 10⁵; 10⁵ × 2×10⁻⁴ = 20; 4×20/0.5 = 160; 160×3.14 = 502.4 ⟹ 50.2 μH ✅.

7. ω = 2π(50) = 314 rad/s.
   ε₀ = N B A ω = 100 × 0.10 × 0.04 × 314 = 0.40 × 314 = **125.6 V**.
   Jaanch: 100 × 0.1 × 0.04 = 0.4; 0.4 × 314 = 125.6 V ✅.

8. U = ½ L I² ⟹ I double (2I) karne par U **4 guna (4 times)** badh jaati hai!

9. **False ❌.** Total induced charge **Δq = N ΔΦ_B / R** samay Δt (speed of flipping) par depend **nahi** karta!

10. ε = B_V l v = (4.0 × 10⁻⁵) × 20 × 50 = 4.0 × 10⁻⁵ × 1000 = **0.04 V = 40 mV**.
    Jaanch: 20 × 50 = 1000; 4 × 10⁻⁵ × 10³ = 0.04 V ✅.

---

## Chapter Ka Saar: Electromagnetic Induction

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Faraday's & Lenz's Laws | Φ_B = BA cos θ; ε = −N ΔΦ_B/Δt; Δq = N ΔΦ_B/R | Lenz's law = Conservation of Energy; Δq independent of Δt |
| Motional EMF | Straight rod: ε = B l v; Rotating rod: ε = ½ B ω l² | P_mech = Fv = I²R = P_elec; Fleming's Right-Hand Rule |
| Eddy Currents | Swirling currents in bulk conductors | Minimized by laminated cores/slots; used in brakes, furnaces, damping |
| Self & Mutual Inductance | L = μ₀μ_r N²A/l; M = μ₀μ_r N₁N₂A/l; U = ½ L I² | SI unit Henry (H); M₁₂ = M₂₁ = M |
| AC Generator | ε = ε₀ sin(ωt); ε₀ = N B A ω = 2π f N B A | Uses slip rings; peak EMF occurs when flux is ZERO! |

---

Ab tum Electromagnetic Induction ke saare laws, inductance, eddy currents aur AC generator ko master kar chuke ho!

**Agle chapter mein:** AC Generator ne jo **Alternating Current (AC)** banaya hai, woh Resistor, Inductor aur Capacitor ke saath kaise behave karta hai — aur **Resonance** aur **Transformers** ka jaadu kya hai — padhenge **Alternating Current**!
