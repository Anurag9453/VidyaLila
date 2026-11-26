# Chapter: Electromagnetic Induction

> **Class:** 12 | **Subject:** Physics
> **Previous chapter:** [Magnetism and Matter](../magnetism-and-matter/magnetism-and-matter-part5.md)

---

## Magnet Hilte hi Galvanometer ki Sui Kyun Koodi?

Physics lab mein teacher ma'am ne ek copper coil ko bina kisi battery ke seedha ek sensitive galvanometer se joda (safe classroom demo). **Kusum** ne dekha ki jab ma'am ne bar magnet ko coil ke andar rakh kar **bilkul shant** chhod diya, to galvanometer ki sui **zero** par hi rahi! Par jaise hi ma'am ne magnet ko tezi se coil ke andar dhakela, sui right taraf kood padi — aur bahar kheencha, to left taraf!

Kusum ne hairani se kaha: "Bina battery ke current ban gaya — sirf magnet hilane se!"

Class 10 mein tumne [Electromagnetism](../../../class10/physics/electromagnetism/electromagnetism.md) mein is khoj ki jhalak dekhi thi. Aaj Class 12 mein hum **Magnetic Flux**, **Faraday's Laws**, aur **Lenz's Law** ka poora mathematical aur physical raaz seekhenge!

---

## Naye Shabd (New Words)

- **Magnetic Flux (Φ_B):** Kisi surface (area A) se guzarne wali magnetic field lines ki ginti: **Φ_B = B A cos θ** (jahan θ normal aur B ke beech ka angle hai). Scalar quantity; SI unit **Weber (Wb)** = T m².
- **Electromagnetic Induction (EMI):** Kisi coil se guzarne wale magnetic flux mein **badlaav (change)** hone par usmein EMF (aur closed circuit mein current) paida hone ki ghatna.
- **Lenz's Law:** Induced current ki direction hamesha aisi hoti hai ki woh **usi kaaran (flux change) ka virodh (oppose)** karti hai jisne use paida kiya hai!

---

## 1. Magnetic Flux aur Faraday's Laws of EMI

Maan lo area **A** ka ek flat loop uniform magnetic field **B** mein rakha hai aur loop ka normal B se angle **θ** banata hai:

**Φ_B = B A cos θ**  *(unit: Weber, Wb)*

### Faraday's Two Laws:
1. **First Law:** Jab bhi kisi circuit se juda **magnetic flux badalta hai** (chahe B badle, A badle, ya angle θ badle), usmein ek **induced EMF** paida hota hai. Jaise hi flux badalna rukta hai, induced EMF turant **zero** ho jaata hai!
2. **Second Law:** Induced EMF ka magnitude magnetic flux ke badalne ki dar (**rate of change of magnetic flux**) ke directly proportional hota hai! Agar coil mein **N** turns hon:

**ε = − N (ΔΦ_B / Δt)**

*(Minus sign **Lenz's Law** ko dikhata hai!)*

### Induced Current aur Induced Charge (Super Shortcut!):
Agar coil ka total resistance **R** hai:
- **Induced Current:** **I = |ε| / R = (N / R) × (ΔΦ_B / Δt)** *(kitni tezi se badla, us par depend karta hai!)*
- **Total Induced Charge (Δq = I × Δt):**
  **Δq = (N × ΔΦ_B) / R**
- **Kamaal ki Baat:** **Δt kat gaya!** Yaani kul kitna charge baha (**Δq**), yeh is baat par **bilkul depend nahi karta** ki magnet ko dheere kheencha ya tezi se — sirf total flux change ΔΦ_B aur resistance R par depend karta hai!

---

## 2. Lenz's Law aur Conservation of Energy

**Statement:** The polarity of induced EMF is such that it tends to produce a current which **opposes the change in magnetic flux** that produced it.

- Agar tum Bar Magnet ka **North pole** coil ki taraf laate ho (flux badh raha hai), to coil ka saamne wala face **North pole** (anticlockwise current) ban jaata hai taaki magnet ko **repel** karke rok sake!
- Agar tum North pole ko **door** le jaate ho (flux ghat raha hai), to coil ka face **South pole** (clockwise current) ban jaata hai taaki magnet ko **attract** karke rok sake!

```
   Moving N-pole IN:                  Moving N-pole OUT:
   Coil makes N-face (repels!)        Coil makes S-face (attracts!)

     ( N )  <--- push [ N  S ]          ( S )  pull ---> [ N  S ]
   anticlockwise                      clockwise
```

**Conservation of Energy ka Saboot:**
Magnet ko repulsion ke khilaaf dhakelne (ya attraction ke khilaaf kheenchne) mein tumhein **mechanical work** karna padta hai — aur wahi mechanical work coil mein **electrical energy (I²Rt)** bankar milta hai! Agar Lenz's law ulta hota (attract karta jab paas laate), to bina kaam kiye muft mein infinite energy ban jaati — jo Law of Conservation of Energy ke khilaaf hai!

---

## Solved Examples

### Example 1: Magnetic Flux Calculation
A flat square coil of area **A = 0.05 m²** is placed in a uniform magnetic field **B = 0.40 T** such that the normal to the coil makes an angle of **60°** with the field. Calculate the magnetic flux through the coil.

**Hal (Solution):**
- Φ_B = B A cos 60° = 0.40 × 0.05 × 0.5 = 0.02 × 0.5 = **0.01 Wb = 10 mWb**.
- **Jaanch:** 0.4 × 0.05 = 0.02; 0.02 × 0.5 = 0.01 Wb ✅.

### Example 2: Faraday's Law — Induced EMF, Current & Charge
A coil of **N = 100 turns** and total resistance **R = 10 Ω** has magnetic flux through each turn decreasing uniformly from **0.05 Wb** to **0.01 Wb** in **0.2 s**. Calculate:
(a) the magnitude of induced EMF **ε**,
(b) the induced current **I**, and
(c) the total charge **Δq** that flows through the coil.

**Hal (Solution):**
- ΔΦ_B = 0.01 − 0.05 = −0.04 Wb, Δt = 0.2 s.
- (a) ε = − N (ΔΦ_B / Δt) = −100 × (−0.04 / 0.2) = 100 × 0.2 = **20 V**.
- (b) I = ε / R = 20 / 10 = **2.0 A**.
- (c) Δq = I × Δt = 2.0 × 0.2 = **0.40 C** (direct formula: N |ΔΦ_B| / R = 100 × 0.04 / 10 = 0.40 C!).
- **Jaanch:** 0.04 / 0.2 = 0.2; 100 × 0.2 = 20 V; 20/10 = 2 A; 2 × 0.2 = 0.4 C ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Bahut bada constant magnetic flux dekh kar bada EMF nikaal dena:**
   - *Galat:* Φ_B = 10 Wb constant hai to ε bhi bada hoga.
   - *Sahi:* Constant flux ka rate of change **zero** hota hai ⟹ **ε = 0**! EMF sirf flux ke **badalne** par aata hai!
2. **Sochna ki induced charge Δq speed (Δt) par depend karta hai:**
   - *Galat:* Magnet double tezi se kheenchne par induced charge bhi double ho jayega.
   - *Sahi:* Tezi se kheenchne par **EMF aur current double** hote hain, par samay Δt aadha ho jaata hai ⟹ **Δq = N ΔΦ_B / R bilkul SAME** rehta hai!
3. **Magnetic flux mein plane aur normal ka angle confuse karna:**
   - *Galat:* Plane field ke parallel ho (θ_normal = 90°) to Φ = BA likh dena!
   - *Sahi:* Plane field ke parallel ho to koi line paar nahi hoti ⟹ **Φ = BA cos 90° = 0**!

---

## Quick Recap

| Concept | Formula | Key Point |
|---|---|---|
| Magnetic Flux | Φ_B = B A cos θ (unit: Weber, Wb) | θ = angle between **normal** and B |
| Faraday's Law | ε = − N (ΔΦ_B / Δt) | Needs **changing** flux; minus sign = Lenz's law |
| Induced Current | I = (N / R) × (ΔΦ_B / Δt) | Depends on how fast flux changes |
| Induced Charge | Δq = N ΔΦ_B / R | **Independent of time Δt!** |
| Lenz's Law | Opposes the cause (flux change) | Direct consequence of **Conservation of Energy** |

---

## Practice Questions

1. Define magnetic flux and write its SI unit in terms of Tesla and metre.
2. State Faraday's two laws of electromagnetic induction.
3. Explain how Lenz's law is a direct consequence of the Law of Conservation of Energy.
4. A circular coil of 50 turns and area 0.02 m² is held perpendicular to a uniform magnetic field of 0.30 T. If the magnetic field is reduced to zero uniformly in 0.1 s, calculate the induced EMF in the coil.
5. If the coil in Question 4 has a resistance of 6 Ω, find (a) the induced current, and (b) the total induced charge flowing through it.
6. What will be the induced charge in Question 5 if the same magnetic field is reduced to zero in **0.5 s** instead of 0.1 s?
7. A bar magnet is dropped vertically with its South pole pointing downward into a horizontal copper ring. Looking from above, what is the direction (clockwise or anticlockwise) of the induced current in the ring as the magnet approaches?
8. A coil of 200 turns encloses an area of 0.04 m². Its plane is perpendicular to a magnetic field of 0.5 T. The coil is rotated by **90°** (so its plane becomes parallel to the field) in 0.2 s. Find the average induced EMF.
9. State whether True or False: If a strong bar magnet sits completely stationary inside a closed copper coil, a large steady current flows in the coil.
10. The magnetic flux through a 10-turn coil changes at a steady rate of 0.25 Wb/s. What is the magnitude of the induced EMF?

### Answers

1. **Magnetic Flux (Φ_B = B A cos θ):** Kisi surface se guzarne wali magnetic field lines ki total ginti. SI unit: **Weber (Wb) = 1 T m²**.

2. **First Law:** Jab bhi circuit se juda magnetic flux badalta hai, ek induced EMF paida hota hai. **Second Law:** Induced EMF ka magnitude magnetic flux ke badalne ki dar (N ΔΦ_B / Δt) ke barabar hota hai.

3. Lenz's law ke anusaar induced current flux-change ka virodh karta hai (jaise aate magnet ko repel karta hai). Is virodh ke khilaaf magnet ko hilane mein hum jo **mechanical work** karte hain, wahi circuit mein **electrical energy** mein badalta hai — is tarah energy conserve hoti hai!

4. Initial Φ₁ = B A cos 0° = 0.30 × 0.02 = 0.006 Wb; Final Φ₂ = 0.
   ε = N |ΔΦ| / Δt = 50 × (0.006 / 0.1) = 50 × 0.06 = **3.0 V**.
   Jaanch: 50 × 0.006 = 0.3; 0.3 / 0.1 = 3.0 V ✅.

5. (a) I = ε / R = 3.0 / 6 = **0.50 A**.
   (b) Δq = I × Δt = 0.50 × 0.1 = **0.05 C** (also N ΔΦ / R = 0.3 / 6 = 0.05 C).
   Jaanch: 3/6 = 0.5 A; 0.5 × 0.1 = 0.05 C ✅.

6. **0.05 C (bilkul same!)** — kyunki induced charge Δq = N ΔΦ / R samay Δt par depend nahi karta!

7. South pole paas aa raha hai ⟹ Lenz's law se ring ka upari face **South pole** banega taaki repel kar sake! Upar se dekhne par South pole ka matlab hai **Clockwise** current!

8. Initial Φ₁ = 0.5 × 0.04 = 0.02 Wb; Final Φ₂ = 0 (cos 90° = 0).
   ε = N |ΔΦ| / Δt = 200 × (0.02 / 0.2) = 200 × 0.1 = **20 V**.
   Jaanch: 200 × 0.02 = 4; 4 / 0.2 = 20 V ✅.

9. **False ❌.** Stationary magnet se flux constant rehta hai (ΔΦ/Δt = 0) ⟹ induced EMF aur current **ZERO** hota hai!

10. ε = N (ΔΦ / Δt) = 10 × 0.25 = **2.5 V**.
    Jaanch: 10 × 0.25 = 2.5 V ✅.

---

Ab tum Magnetic Flux, Faraday's Laws aur Lenz's Law ka poora foundation pakka kar chuke ho!

**Agle topic mein:** Agar magnetic field bilkul constant ho, par ek metal rod usmein **daude** ya **ghoome** — to usmein EMF kaise banta hai? Seekhenge **Motional EMF**!
