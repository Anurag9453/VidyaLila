# Chapter 14: Waves (Part 2) — Speed of Waves & Newton–Laplace Formula

> **Class:** 11 | **Subject:** Physics
> **Previous Topic:** [Waves (Part 1)](waves.md)

---

## Story Time: Subhadra aur Piano Wire ka Tension

**Subhadra** ek acoustic-materials engineer hai jo steel piano wires, railway tracks, aur concert halls mein sound speed test karti hai. Ek din usne ek steel wire ko tighten kiya (tension 4 guna badha diya) aur pulse bheja — pulse ki speed **double** ho gayi!

Phir usne socha: *"Steel mein sound 5000 m/s se bhaagta hai, paani mein 1500 m/s, aur hawa mein sirf 332 m/s! Aisa kyun? Aur jab 17th century mein Isaac Newton ne hawa mein sound ki speed calculate ki, toh unka answer 280 m/s kyun aaya jabki real speed 332 m/s hoti hai?"*

Aaj hum har medium mein wave speed ka exact formula aur Newton–Laplace ki famous kahani seekhenge!

---

## Naye Shabd (New Vocabulary)

| Term | Hinglish Meaning |
|---|---|
| **Linear Mass Density (μ)** | Ek string ka mass per unit length: μ = m / L (SI unit: kg/m). |
| **Bulk Modulus (B)** | Kisi fluid ya solid ko compress karne ke khilaaf uski resistance (elasticity). |
| **Isothermal Bulk Modulus (B_iso)** | Constant temperature par gas ka bulk modulus: B_iso = P. |
| **Adiabatic Bulk Modulus (B_adi)** | Bina heat exchange (fast compression) ke gas ka bulk modulus: B_adi = γ P. |
| **Laplace Correction** | Sound propagation ko isothermal nahi balki **adiabatic** maankar speed ko √γ guna theek karna. |

---

## 1. Speed of a Transverse Wave on a Stretched String

Kisi bhi mechanical wave ki speed do cheezon par depend karti hai:
- **Elastic (Restoring) Property** (numerator mein — jitni zyada stiffness/tension, utni tez speed)
- **Inertial Property** (denominator mein — jitna zyada mass/density, utni dheemi speed)

Ek stretched string mein restoring force **Tension (T)** deta hai aur inertia **linear mass density (μ = m/L)** deta hai. Dimensional analysis se:

> **Transverse Wave on a String:**
> v = √(T / μ)
> jahan μ = mass / length = ρ × A (density × cross-section area).

**Kyun?** Agar tension T ko 4 guna karo, toh speed √4 = 2 guna ho jaati hai. Agar wire ko mota karo (μ badhega), toh inertia badhta hai aur wave dheemi ho jaati hai!

---

## 2. Speed of Longitudinal Waves in Solids, Liquids & Gases

Longitudinal wave compressions aur rarefactions se chalti hai, isliye restoring property elastic modulus hoti hai aur inertia volume density **ρ** hoti hai:

| Medium | Formula | Typical Speed |
|---|---|---|
| **Solid bar (rod)** | v = √(Y / ρ)  (Y = Young's modulus) | Steel: ~5100 m/s |
| **Liquid / Fluid** | v = √(B / ρ)  (B = Bulk modulus) | Water: ~1480 m/s |
| **Gas** | v = √(B / ρ) | Air (0 °C): ~331 m/s |

---

## 3. Newton's Formula vs Laplace's Correction (Sound in Gases)

### Newton's Assumption (Isothermal — Galat!)
Newton ne maana ki jab sound wave air mein compressions aur rarefactions banati hai, toh heat aaspaas exchange ho jaati hai aur temperature **constant (isothermal)** rehta hai.
Isothermal process mein PV = constant ⇒ B_iso = P.
Toh Newton ka formula bana:
v_Newton = √(P / ρ)

STP par air ke liye P = 1.013 × 10⁵ Pa aur ρ = 1.293 kg/m³ rakhne par:
v_Newton = √(1.013 × 10⁵ / 1.293) ≈ **280 m/s**
Par experiment se real speed **331 m/s** aati thi! ~16% ka bada error!

### Laplace's Correction (Adiabatic — Sahi!)
Pierre-Simon Laplace ne 100 saal baad galti pakdi: sound ke compressions aur rarefactions **bahut fast** hote hain (ek second mein hazaaron baar) aur air heat ka poor conductor hai! Isliye heat ko bahar jaane ka time hi nahi milta — process **Adiabatic** hota hai!

Adiabatic process mein P V^γ = constant ⇒ **B_adi = γ P**, jahan γ = C_p / C_v (air ke liye γ = 1.4).

> **Newton–Laplace Formula:**
> v = √(γ P / ρ) = √(γ R T / M)

STP par check karo (γ = 1.4):
v = √(1.4 × 1.013 × 10⁵ / 1.293) = 280 × √1.4 = 280 × 1.183 ≈ **331.3 m/s**!
Experimental value (331 m/s) se **exact match**!

---

## 4. Factors Affecting Speed of Sound in a Gas

Formula **v = √(γ R T / M)** ko dhyan se dekho (jahan T **Kelvin** mein aur M molar mass kg/mol mein hai):

1. **Effect of Pressure (P):**
   Constant temperature par, ideal gas mein P/ρ = RT/M = **constant**! Agar pressure badhoge, toh density ρ bhi utne hi ratio mein badh jaati hai.
   **Result:** Constant temperature par sound ki speed **pressure se independent** hoti hai!

2. **Effect of Temperature (T):**
   **v ∝ √T** (Kelvin mein!).
   Room temperature ke paas (0 °C se t °C tak):
   v_t ≈ v₀ + 0.61 t  (har 1 °C badhne par speed ~0.61 m/s badhti hai!)

3. **Effect of Humidity (Moisture):**
   Water vapour (H₂O, M = 18 g/mol) dry air (N₂ = 28, O₂ = 32, average M ≈ 29 g/mol) se **halka** hota hai!
   Isliye jab air mein humidity badhti hai, toh air ki overall density **ρ ghat jaati hai** — aur kyunki v ∝ 1/√ρ, **humid (nam) hawa mein sound TEZ chalta hai**!

---

## Solved Examples

### Example 1: Stretched Piano Wire
Subhadra ek 2.0 m lambe steel wire (mass 20 g) par 160 N ka tension lagati hai. Is wire par transverse wave ki speed nikalo.

**Solution:**
- Linear mass density: μ = m / L = 0.020 kg / 2.0 m = **0.010 kg/m**
- Speed: v = √(T / μ) = √(160 / 0.010) = √16000 = 40 √10 ≈ **126.5 m/s**

**Jaanch:** v² μ = 16000 × 0.01 = 160 N = T. Exact! ✅

---

### Example 2: Steel Rod mein Longitudinal Wave
Steel ka Young's modulus Y = 2.0 × 10¹¹ Pa aur density ρ = 8000 kg/m³ hai. Steel rod mein longitudinal wave ki speed nikalo.

**Solution:**
v = √(Y / ρ) = √(2.0 × 10¹¹ / 8000) = √(2.5 × 10⁷) = 5000 m/s!

**Jaanch:** 5000² × 8000 = 2.5 × 10⁷ × 8 × 10³ = 2.0 × 10¹¹ Pa. ✅

---

### Example 3: Temperature aur Speed of Sound
27 °C par air mein sound ki speed 348 m/s hai. Kis temperature (°C mein) par speed double (696 m/s) ho jayegi?

**Solution:**
Pehle Kelvin mein badlo: T₁ = 27 + 273 = **300 K**.
Kyunki v ∝ √T:
v₂ / v₁ = √(T₂ / T₁)
⇒ 2 = √(T₂ / 300)
⇒ 4 = T₂ / 300 ⇒ T₂ = **1200 K**
Celsius mein: t₂ = 1200 - 273 = **927 °C**!

**Jaanch:** √(1200 / 300) = √4 = 2 (exact double!). ✅

---

### Example 4: Helium vs Oxygen mein Speed Ratio
Same temperature par Helium (monoatomic, γ = 5/3, M = 4 g/mol) aur Oxygen (diatomic, γ = 7/5, M = 32 g/mol) mein sound ki speed ka ratio nikalo.

**Solution:**
v = √(γ R T / M)
⇒ v_He / v_O₂ = √[ (γ_He / γ_O₂) × (M_O₂ / M_He) ]
= √[ ((5/3) / (7/5)) × (32 / 4) ]
= √[ (25 / 21) × 8 ] = √(200 / 21) ≈ √9.524 ≈ **3.09**

Helium mein sound lagbhag **3.1 guna tez** chalta hai! (Isliye helium inhale karne par aawaz patli/high-pitched lagti hai!)

**Jaanch:** He is both lighter (8×) and has higher γ (5/3 > 7/5), so ratio > √8 ≈ 2.83. ✅

---

## Aam Galtiyan (Common Mistakes)

### Mistake 1: Pressure Badhne se Gas mein Sound Tez Hota Hai
**Galat Soch:** *"Formula v = √(γP/ρ) mein P numerator mein hai, toh pressure double karne par speed √2 guna ho jayegi!"*
**Sahi Baat:** Constant temperature par pressure double karne se density ρ bhi double ho jaati hai, toh P/ρ ratio **bilkul nahi badalta**! Speed sirf temperature T badalne se badalti hai.

### Mistake 2: Moist Air ko "Bhaari" Samajhna
**Galat Soch:** *"Baarish ke din hawa mein paani hota hai, toh hawa bhaari ho jaati hai aur sound dheema chalega."*
**Sahi Baat:** H₂O vapour (M = 18) dry air (M ≈ 29) se **halka** hota hai! Water vapour molecules heavy N₂/O₂ molecules ko displace karte hain, isliye moist air ki density **kam** hoti hai aur sound **tez** chalta hai!

---

## Quick Recap

- Stretched string: **v = √(T / μ)**, jahan μ = m / L.
- Solid rod: **v = √(Y / ρ)**; Fluid: **v = √(B / ρ)**.
- Gas (Newton–Laplace): **v = √(γ P / ρ) = √(γ R T / M)** (adiabatic process!).
- Ideal gas at constant T: v is **independent of pressure P**.
- Temperature: **v ∝ √T** (Kelvin); Humidity badhne se ρ ghatta hai ⇒ **v badhta hai**.

---

## Practice Questions

### Question 1
A string of length 4.0 m has a mass of 0.040 kg and is stretched with a tension of 100 N. Calculate the speed of a transverse wave on it.

### Question 2
By what factor must the tension in a wire be increased to triple the speed of transverse waves on it?

### Question 3
Water has a bulk modulus B = 2.25 × 10⁹ Pa and density ρ = 1000 kg/m³. Calculate the speed of sound in water.

### Question 4
Why did Newton's formula underestimate the speed of sound in air by about 16%?

### Question 5
If the pressure of air in a closed vessel is doubled while keeping its temperature constant, what happens to the speed of sound in it?

### Question 6
At 0 °C, the speed of sound in air is 332 m/s. Find its speed at 20 °C using the linear approximation v_t ≈ v₀ + 0.61 t.

### Question 7
At what temperature (in °C) will the speed of sound in air be 1.5 times its value at 27 °C?

### Question 8
Compare the speed of sound in hydrogen (H₂, M = 2 g/mol, γ = 1.4) and oxygen (O₂, M = 32 g/mol, γ = 1.4) at the same temperature.

### Question 9
Two strings A and B are made of the same material and stretched under the same tension. If the radius of B is twice the radius of A, find the ratio v_A / v_B.

### Question 10
A copper wire of linear mass density 5.0 × 10⁻³ kg/m carries a transverse wave of speed 80 m/s. Find the tension in the wire.

### Question 11
Why does sound travel faster on a humid rainy day than on a dry day at the same temperature?

### Question 12
True or False: For a diatomic gas at a fixed temperature, doubling the molar mass halves the speed of sound.

---

## Worked Answers

### Answer 1
μ = 0.040 / 4.0 = 0.010 kg/m.
v = √(100 / 0.010) = √10000 = **100 m/s**.
**Jaanch:** 100² × 0.01 = 100 N. ✅

### Answer 2
v ∝ √T ⇒ T ∝ v². Speed ko 3 guna karne ke liye tension **3² = 9 times** badhana padega.
**Jaanch:** √9 = 3. ✅

### Answer 3
v = √(B / ρ) = √(2.25 × 10⁹ / 1000) = √(2.25 × 10⁶) = **1500 m/s**.
**Jaanch:** 1500² × 1000 = 2.25 × 10⁹ Pa. ✅

### Answer 4
Newton ne sound propagation ko **isothermal** (B = P) maana tha, jabki compressions aur rarefactions itne fast hote hain ki process **adiabatic** (B = γP) hota hai. √1.4 ≈ 1.183 ka factor miss ho gaya tha!
**Jaanch:** 280 × 1.183 ≈ 331 m/s. ✅

### Answer 5
Speed **unchanged** rehti hai, kyunki constant T par P/ρ = RT/M constant rehta hai.
**Jaanch:** Ideal gas v = √(γRT/M) mein P nahi aata. ✅

### Answer 6
v₂₀ ≈ 332 + 0.61 × 20 = 332 + 12.2 = **344.2 m/s**.
**Jaanch:** Exact: 332 × √(293/273) = 343.95 m/s (very close!). ✅

### Answer 7
T₁ = 27 + 273 = 300 K.
v₂ / v₁ = 1.5 ⇒ T₂ / 300 = (1.5)² = 2.25 ⇒ T₂ = 675 K.
t₂ = 675 - 273 = **402 °C**.
**Jaanch:** √(675 / 300) = √2.25 = 1.5. ✅

### Answer 8
Same T aur same γ = 1.4 ⇒ v ∝ 1/√M.
v_H₂ / v_O₂ = √(32 / 2) = √16 = **4 : 1**.
**Jaanch:** Hydrogen 16 guna halka hai, isliye 4 guna tez. ✅

### Answer 9
μ = ρ × π r² ⇒ μ ∝ r².
v = √(T / μ) ∝ 1 / r.
Kyunki r_B = 2 r_A, isliye v_A / v_B = r_B / r_A = **2 : 1**.
**Jaanch:** Patle wire (A) mein speed double hogi. ✅

### Answer 10
T = μ v² = (5.0 × 10⁻³) × 80² = 0.005 × 6400 = **32 N**.
**Jaanch:** √(32 / 0.005) = √6400 = 80 m/s. ✅

### Answer 11
Humid air mein water vapour (M = 18 g/mol) hota hai jo dry air (M ≈ 29 g/mol) se halka hai. Isse overall density ρ **kam** ho jaati hai, aur v = √(γP/ρ) **badh** jaata hai.
**Jaanch:** Lower ρ ⇒ higher v. ✅

### Answer 12
❌ **False.** v ∝ 1/√M. Molar mass double karne se speed **1/√2** times hoti hai, aadhi (1/2) nahi! (Aadhi karne ke liye M ko 4 guna karna padega.)
**Jaanch:** √(1/2) ≈ 0.707 ≠ 0.5. ✅

---

Ab **tum** kisi bhi medium mein wave ki speed predict kar sakte ho aur Newton–Laplace ka raaz bhi jaante ho!

**Agle Topic mein:** Jab do waves aapas mein takraati hain ya kisi deewar se bounce hoti hain, toh kya hota hai? Superposition, Interference, aur Standing Waves — padhenge Part 3 mein!

**Next:** [Chapter 14: Waves (Part 3) — Superposition, Reflection & Standing Waves](waves-part3.md)
