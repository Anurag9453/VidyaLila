# Chapter: Electromagnetic Waves

> **Class:** 12 | **Subject:** Physics
> **Previous chapter:** [Alternating Current](../alternating-current/alternating-current-part6.md)

---

## Capacitor ke Khali Gap mein Magnetic Field Kahan Se Aaya?

Class mein **Nidhi** ek charging parallel-plate capacitor ka diagram dekh rahi thi. Wire mein conduction current **I** beh raha tha, aur uske paas ek compass deflect ho raha tha. Par jab teacher ma'am ne bataya ki capacitor ki dono plates ke beech ke **khali air gap** mein bhi bilkul wahi magnetic field hota hai, to Nidhi chaunk gayi: "Ma'am, dono plates ke beech to hawa (insulator) hai — koi electron jump karke paar nahi ja raha! Phir wahan current I = 0 hone ke baawajood magnetic field kaise ban gaya?"

Teacher ma'am muskurayi: "1864 mein James Clerk Maxwell ke dimaag mein bhi bilkul yahi sawaal aaya tha — aur iske jawaab ne physics ki duniya badal di! Maxwell ne kaha ki badalta hua **Electric Flux** bhi bilkul current ki tarah magnetic field paida karta hai — isse **Displacement Current** kehte hain!"

---

## Naye Shabd (New Words)

- **Conduction Current (I_c):** Kisi conducting wire mein free charges (electrons) ke actual flow ke karan behne wala aam current.
- **Displacement Current (I_d):** Kisi region mein **badalte hue electric flux (ΔΦ_E / Δt)** ke karan paida hone wala equivalent current: **I_d = ε₀ (ΔΦ_E / Δt)** (SI unit **Ampere, A**).
- **Ampere-Maxwell Law:** Ampere's circuital law ka complete roop jismein conduction aur displacement dono currents shaamil hain: **Σ (B · Δl) = μ₀ (I_c + I_d)**.

---

## 1. Need for Displacement Current (Ampere's Law ki Adhoori Kadi!)

Maan lo ek charging capacitor mein wire mein conduction current **I_c** beh raha hai:
- Wire ke bahar kisi point P par Amperian loop lagao:
  - Flat surface lo (jisse wire guzarta hai) ⟹ **I_enc = I_c** ⟹ **B ≠ 0**.
  - Balloon-jaisi surface lo (jo plates ke khali gap se guzarti hai) ⟹ wahan koi wire nahi, **I_enc = 0** ⟹ **B = 0**!
- Ek hi point P par B zero aur non-zero dono nahi ho sakta! Yahi contradiction Maxwell ne suljhaya!

### Maxwell ka Genius Solution:
Plates ke beech charge **q** badh raha hai ⟹ electric field **E = q / (ε₀ A)** badh raha hai ⟹ electric flux **Φ_E = E A = q / ε₀** badh raha hai!
Rate of change lo: **ΔΦ_E / Δt = (1 / ε₀) (Δq / Δt) = I_c / ε₀** ⟹

**I_d = ε₀ (ΔΦ_E / Δt)**

- **Wire ke andar:** I_c = I, I_d = 0 ⟹ Total = **I**.
- **Plates ke khali gap mein:** I_c = 0, I_d = I ⟹ Total = **I**.
- **Continuity:** Har jagah **(I_c + I_d) = constant = I**! Contradiction khatam!

*(Agar capacitor ka capacitance C hai aur voltage badalne ki dar ΔV/Δt hai, to q = C V ⟹ **I_d = C (ΔV / Δt)**!)*

---

## 2. Maxwell's Four Equations (Qualitative Summary)

Maxwell ne electricity aur magnetism ke poore gyaan ko sirf **4 khoobsurat equations** mein samet diya:

| Equation Name | Idea in Words | Core Formula |
|---|---|---|
| 1. **Gauss's Law for Electricity** | Net electric flux through closed surface = q_enc / ε₀ | Φ_E = q_enc / ε₀ |
| 2. **Gauss's Law for Magnetism** | Net magnetic flux through closed surface = 0 (no monopoles!) | Φ_B = 0 |
| 3. **Faraday's Law of EMI** | Changing magnetic flux produces an electric field / EMF! | ε = − ΔΦ_B / Δt |
| 4. **Ampere-Maxwell Law** | Current **OR changing electric flux** produces a magnetic field! | Σ B·Δl = μ₀ (I_c + ε₀ ΔΦ_E/Δt) |

**Dekho Symmetry!** Equation 3 kehti hai **badalta B → E banata hai**, aur Equation 4 kehti hai **badalta E → B banata hai**! Yahi aapsi rishta space mein **Electromagnetic Waves** ko janm deta hai!

---

## Solved Examples

### Example 1: Displacement Current in a Charging Capacitor
A parallel plate capacitor of capacitance **C = 2.0 μF** is being charged such that the potential difference across its plates increases at a steady rate of **ΔV / Δt = 100 V/s**. Calculate the displacement current **I_d** between the plates.

**Hal (Solution):**
- Formula: **I_d = C (ΔV / Δt)**.
- I_d = (2.0 × 10⁻⁶) × 100 = **2.0 × 10⁻⁴ A = 0.20 mA**.
- **Jaanch:** Wire ka conduction current I_c = Δq/Δt = C ΔV/Δt = 0.20 mA = I_d ✅.

### Example 2: Rate of Change of Electric Flux
What rate of change of electric flux (**ΔΦ_E / Δt**) between the plates of a capacitor is needed to produce a displacement current of **0.8854 A**? (Take ε₀ = 8.854 × 10⁻¹² C²/(N m²).)

**Hal (Solution):**
- I_d = ε₀ (ΔΦ_E / Δt) ⟹ **ΔΦ_E / Δt = I_d / ε₀**.
- ΔΦ_E / Δt = 0.8854 / (8.854 × 10⁻¹²) = **1.0 × 10¹¹ V m/s** (ya N m²/(C s)).
- **Jaanch:** (8.854 × 10⁻¹²) × (1.0 × 10¹¹) = 0.8854 A ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Sochna ki Displacement Current electrons ke udne se banta hai:**
   - *Galat:* Plates ke beech hawa mein electrons kood kar jaate hain isliye I_d banta hai.
   - *Sahi:* Plates ke beech **koi charge flow nahi hota**! I_d sirf **badalte electric flux (ΔΦ_E/Δt)** ki wajah se banta hai!
2. **Total current ko 2I maan lena:**
   - *Galat:* Circuit mein I_c = 1 A aur I_d = 1 A hai to total current 2 A ho gaya!
   - *Sahi:* Wire mein sirf I_c = 1 A (I_d = 0); gap mein sirf I_d = 1 A (I_c = 0) ⟹ har jagah **(I_c + I_d) = 1 A**!
3. **Steady (fully charged) capacitor mein bhi I_d non-zero nikaalna:**
   - *Galat:* Fully charged capacitor ke beech strong constant E hai to I_d bhi bada hoga.
   - *Sahi:* Constant E ⟹ ΔΦ_E/Δt = 0 ⟹ **I_d = 0**!

---

## Quick Recap

| Concept | Formula / Fact | Key Point |
|---|---|---|
| Displacement Current | I_d = ε₀ (ΔΦ_E / Δt) = C (ΔV / Δt) | Exists ONLY when electric flux changes |
| Continuity of Current | I_c + I_d = constant around circuit | Inside charging capacitor gap: I_d = I_c (wire) |
| Ampere-Maxwell Law | Σ B·Δl = μ₀ (I_c + ε₀ ΔΦ_E / Δt) | Completes symmetry with Faraday's law |

---

## Practice Questions

1. What is displacement current? Write its mathematical expression and SI unit.
2. Why did Maxwell need to modify Ampere's circuital law?
3. A parallel plate capacitor is being charged by a steady current of 0.25 A in the connecting wires. What is (a) the conduction current in the gap between the plates, and (b) the displacement current in the gap?
4. When the capacitor in Question 3 becomes **fully charged** by a DC battery, what is the value of the displacement current between its plates? Why?
5. A 5.0 μF capacitor has its voltage changing at the rate of 200 V/s. Calculate the instantaneous displacement current between its plates.
6. Calculate the displacement current when the electric flux between the plates of a capacitor changes at the rate of 2.0 × 10¹¹ N m²/(C s) (take ε₀ = 8.85 × 10⁻¹² C²/(N m²)).
7. State the physical meaning of Maxwell's second equation (Gauss's law for magnetism).
8. Which two of Maxwell's equations together show that changing electric and magnetic fields can sustain each other as a wave?
9. State whether True or False: Displacement current produces a magnetic field just like conduction current does.
10. A parallel plate capacitor has circular plates of area 0.02 m². If the uniform electric field between the plates increases at the rate of 5.0 × 10¹² V/(m s), calculate the displacement current (take ε₀ = 8.85 × 10⁻¹² F/m).

### Answers

1. **Displacement current (I_d)** woh equivalent current hai jo kisi region mein badalte hue electric flux ke karan paida hota hai: **I_d = ε₀ (ΔΦ_E / Δt)**. SI unit: **Ampere (A)**.

2. Charging capacitor ke plates ke beech khali gap mein I_c = 0 hone par bhi magnetic field milta hai — original Ampere's law yahan fail (inconsistent) ho jaata tha! Maxwell ne **I_d** jodkar use consistent banaya.

3. (a) Gap mein conduction current **I_c = 0 A**.
   (b) Gap mein displacement current **I_d = 0.25 A** (= wire ka conduction current!).

4. **Zero (0 A)!** Fully charged hone par plates ke beech electric field constant ho jaata hai ⟹ ΔΦ_E / Δt = 0 ⟹ I_d = 0.

5. I_d = C (ΔV / Δt) = (5.0 × 10⁻⁶) × 200 = **1.0 × 10⁻³ A = 1.0 mA**.
   Jaanch: 5 × 200 = 1000 ⟹ 1000 × 10⁻⁶ = 10⁻³ A ✅.

6. I_d = ε₀ (ΔΦ_E / Δt) = (8.85 × 10⁻¹²) × (2.0 × 10¹¹) = **1.77 A**.
   Jaanch: 8.85 × 2 × 10⁻¹ = 1.77 A ✅.

7. **Φ_B = 0** — iska matlab hai ki isolated **magnetic monopoles exist nahi karte** aur magnetic field lines hamesha closed loops banati hain.

8. **Faraday's Law** (badalta B → E banata hai) aur **Ampere-Maxwell Law** (badalta E → B banata hai)!

9. **True ✅.** Ampere-Maxwell law ke anusaar I_d bilkul I_c ki tarah hi magnetic field paida karta hai!

10. Φ_E = E A ⟹ ΔΦ_E / Δt = A (ΔE / Δt) = 0.02 × (5.0 × 10¹²) = 1.0 × 10¹¹ V m/s.
    I_d = ε₀ (ΔΦ_E / Δt) = (8.85 × 10⁻¹²) × (1.0 × 10¹¹) = **0.885 A**.
    Jaanch: 0.02 × 5 = 0.1; 8.85 × 0.1 = 0.885 A ✅.

---

Ab tum Displacement Current aur Maxwell's Equations ka core idea samajh chuke ho!

**Agle topic mein:** Maxwell ke is chamatkar se janm lene wali **Electromagnetic Waves** — unka source, unki transverse shakl aur unki speed **c = 1/√(μ₀ε₀)** seekhenge!
