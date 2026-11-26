# Chapter: Electromagnetic Induction (Part 4)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Eddy Currents](electromagnetic-induction-part3.md)

---

## Bina Wire ke Phone Charging ka Jaadu!

**Lipika** ne dekha ki Didi ne apna smartphone bina koi charging cable lagaye seedha ek flat circular pad par rakh diya — aur screen par "Charging..." dikhne laga! Lipika ne hairani se poocha: "Didi, pad aur phone ke beech koi metal pin nahi judi, phir bijli phone ke andar kaise pahunch rahi hai?"

Didi ne muskurakar bataya: "Pad ke andar ek copper coil hai aur phone ke peeche doosri coil! Pad ki coil mein badalta hua current magnetic flux banata hai, jo hawa se guzarkar phone ki coil mein EMF induce karta hai — isse **Mutual Induction** kehte hain! Aur jab koi coil khud apne hi current ke badlaav ka virodh kare, to use **Self Induction** kehte hain!"

---

## Naye Shabd (New Words)

- **Mutual Induction:** Do paas-paas rakhi coils mein se ek (primary) ka current badalne par doosri (secondary) coil mein induced EMF paida hona.
- **Mutual Inductance (M):** Secondary coil mein total flux linkage per unit current in primary coil: **N₂ Φ₂ = M I₁**. SI unit **Henry (H)** = Wb/A = V s/A.
- **Self Induction:** Kisi akeli coil mein khud ka current badalne par uske apne flux mein badlaav aana aur usmein opposing **back EMF** paida hona ("electrical inertia"!).
- **Self Inductance (L):** Coil ka total flux linkage per unit current in the same coil: **N Φ = L I**. SI unit **Henry (H)**.

---

## 1. Mutual Inductance (M)

Maan lo do coils paas-paas rakhi hain. Coil 1 (primary) mein current **I₁** badalne par Coil 2 (secondary, turns N₂) se juda total flux **N₂ Φ₂** directly I₁ ke proportional hota hai:

**N₂ Φ₂ = M I₁**

Faraday's law lagao (rate of change of flux):

**ε₂ = − M (ΔI₁ / Δt)**

### Do Coaxial Solenoids ka Mutual Inductance (Derivation!):
Maan lo do lambe coaxial solenoids hain (length **l**, inner solenoid ka cross-sectional area **A**, turns per unit length **n₁** aur **n₂**):
1. Outer solenoid (Coil 1, current I₁) andar uniform field banata hai: **B₁ = μ₀ n₁ I₁**.
2. Inner solenoid (Coil 2, total turns **N₂ = n₂ l**, area A) se total flux linkage:
   **N₂ Φ₂ = (n₂ l) × (B₁ A) = (n₂ l) × (μ₀ n₁ I₁) × A = (μ₀ n₁ n₂ A l) I₁**.
3. N₂ Φ₂ = M I₁ se compare karo:

**M = μ₀ n₁ n₂ A l**  *(agar core ki relative permeability μ_r ho to: **M = μ₀ μ_r n₁ n₂ A l**!)*

*(Reciprocity Theorem: Chahe Coil 1 mein current badlo ya Coil 2 mein, **M₁₂ = M₂₁ = M** hamesha barabar hota hai!)*

---

## 2. Self Inductance (L) — Electrical Inertia!

Jaise mechanics mein **mass (inertia)** speed ke badlaav ka virodh karta hai, waise hi electricity mein **Self Inductance (L)** current ke badlaav (badhne ya ghatne dono!) ka virodh karta hai!

**N Φ_B = L I**   aur   **ε = − L (ΔI / Δt)**

### Ek Lambe Solenoid ka Self Inductance (Derivation!):
Solenoid (length **l**, area **A**, total turns **N**, turns/length **n = N/l**, current **I**):
1. Andar field **B = μ₀ n I**.
2. Total flux linkage **N Φ_B = (n l) × (μ₀ n I) × A = (μ₀ n² A l) I**.
3. N Φ_B = L I se compare karo:

**L = μ₀ n² A l = (μ₀ N² A) / l**  *(core μ_r ke saath: **L = μ₀ μ_r n² A l**!)*

*(Dekho: **L** sirf geometry N, A, l aur core material μ_r par depend karta hai — current I par bilkul nahi!)*

---

## 3. Inductor mein Stored Magnetic Energy (U = ½ L I²)

Jab inductor mein current 0 se steady value **I** tak badhaya jaata hai, to battery ko back EMF **ε = L (ΔI/Δt)** ke khilaaf kaam karna padta hai. Chhote kaam ΔW = ε I Δt = L I ΔI ko 0 se I tak jodkar (average current I/2 ke idea se) jo energy inductor ke magnetic field mein store hoti hai, woh hai:

**U = ½ L I²**

*(Compare karo! Capacitor mein electric energy **U = ½ C V²**; Inductor mein magnetic energy **U = ½ L I²**; Mechanics mein kinetic energy **K = ½ m v²**!)*

---

## Solved Examples

### Example 1: Self-Induced EMF & Stored Energy
A coil of self-inductance **L = 0.50 H** carries a steady current of **I = 4.0 A**.
(a) Calculate the magnetic energy stored in the coil.
(b) If the current is switched off uniformly to zero in **0.05 s**, calculate the magnitude of the induced back EMF.

**Hal (Solution):**
- (a) U = ½ L I² = 0.5 × 0.50 × (4.0)² = 0.25 × 16 = **4.0 J**.
- (b) |ε| = L |ΔI / Δt| = 0.50 × (4.0 / 0.05) = 0.50 × 80 = **40 V**.
- **Jaanch:** 0.5 × 0.5 × 16 = 4.0 J ✅; 4/0.05 = 80; 0.5 × 80 = 40 V ✅.

### Example 2: Mutual Inductance Calculation
A pair of adjacent coils has a mutual inductance of **M = 1.5 H**. If the current in the primary coil changes from **0 to 20 A** in **0.5 s**, find (a) the change in magnetic flux linkage in the secondary coil, and (b) the average EMF induced in the secondary coil.

**Hal (Solution):**
- (a) Δ(N₂ Φ₂) = M ΔI₁ = 1.5 × (20 − 0) = **30 Wb**.
- (b) |ε₂| = M (ΔI₁ / Δt) = 1.5 × (20 / 0.5) = 1.5 × 40 = **60 V**.
- **Jaanch:** ΔΦ_total / Δt = 30 / 0.5 = 60 V ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Sochna ki current I badhane se Self Inductance L badh jaata hai:**
   - *Galat:* L = NΦ/I dekh kar bolna ki I badhane se L ghatta hai.
   - *Sahi:* I double karne par Φ bhi double hota hai — **L constant** rehta hai! L sirf **N, A, l aur μ_r** par depend karta hai!
2. **Stored energy formula mein 1/2 bhool jaana:**
   - *Galat:* U = L I² likh dena.
   - *Sahi:* **U = ½ L I²**!
3. **M₁₂ aur M₂₁ ko alag-alag maan lena:**
   - *Galat:* Badi coil ka chhoti coil par M, chhoti ka badi par M se alag hoga.
   - *Sahi:* **M₁₂ = M₂₁ = M** (hamesha exact barabar!).

---

## Quick Recap

| Concept | Formula | SI Unit / Note |
|---|---|---|
| Mutual Inductance | N₂Φ₂ = M I₁; ε₂ = −M (ΔI₁/Δt) | Henry (H); M₁₂ = M₂₁ = M |
| Coaxial Solenoids M | M = μ₀ μ_r n₁ n₂ A l | A = cross-section of **inner** solenoid |
| Self Inductance | NΦ = L I; ε = −L (ΔI/Δt) | Henry (H); "electrical inertia" |
| Solenoid Self Inductance | L = μ₀ μ_r n² A l = μ₀ μ_r N² A / l | Independent of current I |
| Stored Magnetic Energy | U = ½ L I² | Magnetic analogue of ½ m v² & ½ C V² |

---

## Practice Questions

1. Define 1 Henry of self-inductance.
2. Why is self-inductance often called "electrical inertia"?
3. The current in a coil of self-inductance 2.0 H drops from 5 A to 1 A in 0.2 s. Calculate the magnitude of the induced EMF in the coil.
4. Calculate the magnetic energy stored in a 4.0 H inductor carrying a steady current of 3.0 A.
5. A solenoid of length 0.50 m and cross-sectional area 4.0 × 10⁻⁴ m² has 1000 turns (air core). Calculate its self-inductance L (take π = 3.14).
6. What happens to the self-inductance L of the solenoid in Question 5 if a soft iron core of relative permeability μ_r = 500 is inserted into it?
7. Current in a primary coil changes at the rate of 10 A/s, inducing an EMF of 25 V in a nearby secondary coil. Find the mutual inductance M between the two coils.
8. State two factors on which the mutual inductance of a pair of coils depends.
9. State whether True or False: If two inductors L₁ and L₂ (far apart, no mutual coupling) are connected in series, their equivalent inductance is L_s = L₁ + L₂.
10. When an inductor carrying 2 A stores 10 J of magnetic energy, what is its self-inductance L?

### Answers

1. **1 Henry (1 H):** Kisi coil ka self-inductance 1 Henry hota hai jab usmein current ke **1 A/s** ki dar se badalne par usmein **1 Volt** ka induced EMF paida ho.

2. Jaise mechanical inertia (mass) kisi body ki velocity badalne ka virodh karta hai, waise hi self-inductance (L) back EMF paida karke circuit mein **current ke badhne ya ghatne dono ka virodh** karta hai!

3. |ΔI| = 5 − 1 = 4 A, Δt = 0.2 s:
   |ε| = L |ΔI / Δt| = 2.0 × (4 / 0.2) = 2.0 × 20 = **40 V**.
   Jaanch: 4/0.2 = 20; 2 × 20 = 40 V ✅.

4. U = ½ L I² = 0.5 × 4.0 × (3.0)² = 2.0 × 9 = **18 J**.
   Jaanch: 2 × 9 = 18 J ✅.

5. L = (μ₀ N² A) / l = (4 × 3.14 × 10⁻⁷ × 10⁶ × 4.0 × 10⁻⁴) / 0.50
   = (16 × 3.14 × 10⁻⁵) / 0.50 = 32 × 3.14 × 10⁻⁵ = 100.48 × 10⁻⁵ ≈ **1.005 mH**.
   Jaanch: 4 × 4 / 0.5 = 32; 32 × 3.14 = 100.48 ⟹ 1.005 × 10⁻³ H = 1.005 mH ✅.

6. L **500 guna** badh jaata hai: L' = 500 × 1.005 mH ≈ **0.502 H**!

7. M = |ε₂| / |ΔI₁ / Δt| = 25 / 10 = **2.5 H**.
   Jaanch: 2.5 × 10 = 25 V ✅.

8. (i) **Geometry** (number of turns, area, length) of the coils, (ii) **Relative orientation and separation** between the coils, aur (iii) **Permeability (μ_r)** of the core medium.

9. **True ✅.** Bina mutual coupling ke series inductors seedhe judte hain: **L_s = L₁ + L₂** (aur parallel mein 1/L_p = 1/L₁ + 1/L₂).

10. U = ½ L I² ⟹ 10 = 0.5 × L × (2)² = 2 L ⟹ **L = 10 / 2 = 5.0 H**.
    Jaanch: 0.5 × 5.0 × 4 = 10 J ✅.

---

Ab tum Mutual Inductance, Self Inductance aur Inductor Energy ko pakka seekh chuke ho!

**Agle topic mein:** Duniya ke saare power stations mein bijli paida karne wali sabse mahaan machine — **AC Generator** kaise kaam karti hai, dekhenge!
