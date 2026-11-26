> **Class:** 12 | **Subject:** Physics | **Chapter 2:** Electrostatic Potential and Capacitance (Gehrai Mein — Advanced Level)

# Electrostatic Potential and Capacitance — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](electrostatic-potential-and-capacitance.md) se [Topic 5](electrostatic-potential-and-capacitance-part5.md)) mein humne electrostatic potential, equipotential surfaces, dielectrics aur capacitors cover kiye. Ab is **Gehrai Mein** section mein hum chaar elite electrostatics techniques dekhenge — **Concentric Conducting Shells & Earthing**, **Method of Images (Charge Near a Grounded Plane)**, **Infinite Capacitor Ladder Network**, aur **Force Between Capacitor Plates & Dielectric Pull**!

---

## Shubham ka High-Precision Capacitor Lab

**Shubham** ek high-voltage systems engineer hai. Uske design notebook mein chaar powerful tricks hain:
1. Concentric conducting shells par charge baantna aur kisi shell ko **Earth (V = 0)** karne par induced charge 2 line mein nikaalna!
2. Grounded infinite metal plate ke saamne rakhe point charge **+q** par lagne wala attraction force **Method of Images** se bina kisi calculus ke nikaalna!
3. Anant (infinite) capacitor ladder network ka equivalent capacitance **self-similarity** se quadratic banakar solve karna!
4. Parallel plate capacitor ki dono plates ek-doosre ko **F = Q² / (2 ε₀ A)** force se kheenchi rakhti hain (notice the **factor of 2** — not Q²/ε₀A!)!

---

## 1. Concentric Conducting Shells & Earthing Rule

Maan lo do concentric thin conducting shells (radii **a < b**) par charges **q₁** (inner) aur **q₂** (outer) hain:
- **Inner shell ka potential:** **V_a = k q₁ / a + k q₂ / b**
- **Outer shell ka potential:** **V_b = k (q₁ + q₂) / b**
- **Potential Difference (ONLY depends on inner charge q₁!):**
  **V_a − V_b = k q₁ (1/a − 1/b)** *(outer charge q₂ kat gaya!)*
- **Earthing Rule:** Jis shell ko earth (ground) kiya jaaye, uska potential **V = 0** rakh do aur us par naya charge **q'** solve kar lo!
  - Agar **outer shell** earthed ho (V_b = 0): **q₁ + q'₂ = 0 ⟹ q'₂ = −q₁**!
  - Agar **inner shell** earthed ho (V_a = 0): **q'₁ / a + q₂ / b = 0 ⟹ q'₁ = −(a / b) q₂**!

---

## 2. Method of Images (Charge +q Near an Infinite Grounded Metal Plane)

Ek infinite grounded conducting sheet (V = 0) se doori **d** par ek point charge **+q** rakha hai:
- Boundary condition (sheet par har jagah V = 0) ko exact satisfy karne ke liye sheet ko hata kar uske peeche doori **d** par ek kalpanik **Image Charge (−q)** rakh do!
- +q aur −q ke beech doori = **2 d**!
- Isliye metal sheet par induced negative charges dwara +q par lagne wala attractive force:

```
   F = (k q²) / (2 d)² = (k q²) / (4 d²)
```

- Aur interaction potential energy: **U = − k q² / (4 d)** *(notice **4d**, not 2d — kyunki field sirf aadhe space mein hai!)*

---

## 3. Infinite Capacitor Ladder Network

Ek infinite repeating ladder mein har section mein ek series capacitor **C₁** aur ek parallel (shunt) capacitor **C₂** laga hai.
- Maan lo poore infinite ladder ka equivalent capacitance **C_eq** hai.
- Ek section aage se kaatne par bhi bacha hua infinite ladder wahi **C_eq** rehta hai!
- Isliye C₂ aur C_eq parallel mein (**C₂ + C_eq**), aur woh C₁ ke saath series mein:

```
   C_eq = [ C₁ (C₂ + C_eq) ] / (C₁ + C₂ + C_eq)
```

*(Special case C₁ = C₂ = C: C_eq² + C C_eq − C² = 0 ⟹ **C_eq = [(√5 − 1) / 2] C ≈ 0.618 C** — the Golden Ratio!)*

---

## 4. Force Between Parallel Capacitor Plates (Factor of 1/2!)

Plates par +Q aur −Q charge hai, aur beech mein total field E = σ / ε₀ = Q / (ε₀ A) hai.
- **Trap:** Agar koi Q × E = Q² / (ε₀ A) likh de to **GALAT** hai!
- **Kyun?** Plate 2 par force sirf **Plate 1 ke field** (**E₁ = σ / (2 ε₀)** — aadha!) ki wajah se lagta hai (plate khud par force nahi lagati!):

```
   F = Q × (σ / 2ε₀) = Q² / (2 ε₀ A) = ½ ε₀ A E² = U / d
```

---

## 5 Deep Solved Problems

### Problem 1: Earthing the Inner Concentric Shell
Two concentric conducting shells have radii **a = 10 cm** and **b = 30 cm**. The outer shell carries charge **q₂ = +6.0 μC**, and the inner shell is **earthed (grounded)**. Find the charge **q'₁** induced on the inner shell.

**Solution:**
- Inner shell earthed ⟹ V_a = 0 ⟹ k q'₁ / a + k q₂ / b = 0
- **q'₁ = −(a / b) q₂ = −(10 / 30) × (+6.0 μC) = −2.0 μC**.
- Jaanch: V_a = k(−2/10 + 6/30) = k(−0.2 + 0.2) = 0 ✅.

### Problem 2: Method of Images Attraction Force
A point charge **q = +4.0 μC** is held **10 cm** in front of a very large grounded conducting metal wall. Calculate the electrostatic force pulling the charge toward the wall.

**Solution:**
- Image charge = −4.0 μC at distance 2d = 20 cm = **0.20 m**.
- F = k q² / (2d)² = (9 × 10⁹ × 16 × 10⁻¹²) / (0.20)² = 0.144 / 0.04 = **3.6 N** (towards the wall!).
- Jaanch: 9 × 16 × 10⁻³ = 0.144; 0.144 / 0.04 = 3.6 N ✅.

### Problem 3: Infinite Capacitor Ladder (C₁ = 2 μF, C₂ = 1 μF)
An infinite ladder has series capacitors **C₁ = 2 μF** and parallel (shunt) capacitors **C₂ = 1 μF**. Find its equivalent capacitance **C_eq**.

**Solution:**
- C_eq = [2 (1 + C_eq)] / (2 + 1 + C_eq) ⟹ C_eq(3 + C_eq) = 2 + 2 C_eq
- C_eq² + C_eq − 2 = 0 ⟹ (C_eq + 2)(C_eq − 1) = 0 ⟹ **C_eq = 1.0 μF** (positive root!).
- Jaanch: Parallel(1, 1) = 2 μF; Series(2, 2) = 1.0 μF = C_eq ✅.

### Problem 4: Force Between Plates of a Charged Capacitor
A parallel plate air capacitor of capacitance **C = 20 μF** and plate separation **d = 2.0 mm** is charged to **V = 100 V**. Find the attractive force between the two plates.

**Solution:**
- Stored energy U = ½ C V² = 0.5 × (20 × 10⁻⁶) × 10⁴ = **0.10 J**.
- Force **F = U / d = 0.10 / (2.0 × 10⁻³) = 50 N**!
- Jaanch: Q = CV = 2 mC; E = V/d = 5×10⁴ V/m ⟹ F = ½ Q E = 0.5 × 2×10⁻³ × 5×10⁴ = 50 N ✅.

### Problem 5: Spherical Capacitor Capacitance
Derive the capacitance of two concentric conducting spheres of radii **a** and **b** (**b > a**) with outer sphere earthed.

**Solution:**
- V_a − V_b = k Q (1/a − 1/b) = Q (b − a) / (4π ε₀ a b).
- **C = Q / ΔV = (4π ε₀ a b) / (b − a)**.
- Jaanch: When b → ∞, C → 4π ε₀ a (isolated sphere capacitance!) ✅.

---

## 10 Advanced Practice Questions

1. Two concentric shells of radii 5 cm and 15 cm carry charges +3 μC (inner) and +9 μC (outer). If the **outer** shell is earthed, what charge flows to the earth?
2. A point charge +2 μC is placed 5 cm in front of an infinite grounded metal plane. Find the attractive force on the charge.
3. Find the equivalent capacitance of an infinite ladder where every capacitor (both series and parallel) has capacitance C = 10 μF (take √5 = 2.236).
4. A parallel plate capacitor (area A, separation d, charge Q) is isolated (battery disconnected). How much work is required to slowly pull the plates apart from separation d to 2d?
5. In Question 4, verify that the work done equals the increase in stored electrostatic energy ΔU = U_final − U_initial.
6. Calculate the capacitance of a spherical capacitor with inner radius a = 10 cm and outer radius b = 12 cm in air (use 1/(4πε₀) = 9 × 10⁹ N m²/C²).
7. A parallel plate capacitor has plate area A and separation d. Half the area (A/2) is filled with dielectric K₁ = 2 and the other half (A/2) with K₂ = 4 (side by side, both of thickness d). Find the equivalent capacitance in terms of C₀ = ε₀A/d.
8. Repeat Question 7 when K₁ = 2 (thickness d/2) and K₂ = 4 (thickness d/2) are stacked **one on top of the other** (in series!).
9. Two identical capacitors C each are charged to V₁ and V₂ and connected with **opposite polarities** (+ to − and − to +). Find the common potential V_common (assume V₁ > V₂).
10. A charged isolated capacitor (Q constant) has a dielectric slab (K) slowly inserted partway between its plates. Is the slab pulled **inward** or pushed **outward** by the electric field? Why (energy argument)?

### Solutions

1. Outer shell earthed ⟹ final outer charge q'₂ = −q₁ = −3 μC.
   Original outer charge was +9 μC ⟹ charge flown to earth = (+9) − (−3) = **+12 μC**!
   Jaanch: Final total charge = +3 − 3 = 0 ⟹ V_outer = 0 ✅.

2. 2d = 10 cm = 0.10 m:
   F = (9 × 10⁹ × 4 × 10⁻¹²) / (0.10)² = 0.036 / 0.01 = **3.6 N**.
   Jaanch: 36 × 10⁻³ / 10⁻² = 3.6 N ✅.

3. C_eq = [(√5 − 1) / 2] C = (1.236 / 2) × 10 = **6.18 μF**.
   Jaanch: (0.618)² + 0.618 − 1 ≈ 0.382 + 0.618 − 1 = 0 ✅.

4. Q constant ⟹ attractive force F = Q² / (2 ε₀ A) is **constant**!
   Work done W = F × Δd = **[ Q² / (2 ε₀ A) ] × d = Q² d / (2 ε₀ A) = Q² / (2 C₀)**.
   Jaanch: Units: C² / F = J ✅.

5. Initial U_i = Q² / (2 C₀). When d → 2d, C → C₀/2 ⟹ U_f = Q² / (2 × C₀/2) = Q² / C₀.
   ΔU = Q² / C₀ − Q² / (2 C₀) = **Q² / (2 C₀) = W**! Jaanch: exact match ✅.

6. C = (a b) / [ k (b − a) ] = (0.10 × 0.12) / (9 × 10⁹ × 0.02) = 0.012 / (1.8 × 10⁸) = **66.7 pF**.
   Jaanch: 12 / 180 = 1/15 = 0.0667 nF = 66.7 pF ✅.

7. Side-by-side = **Parallel**: C = C₁ + C₂ = K₁(C₀/2) + K₂(C₀/2) = [(2 + 4)/2] C₀ = **3 C₀**.
   Jaanch: Average of K₁ and K₂ = (2+4)/2 = 3 ✅.

8. Stacked = **Series**: C₁ = 2 K₁ C₀ = 4 C₀, C₂ = 2 K₂ C₀ = 8 C₀.
   C_eq = (4 × 8) / (4 + 8) C₀ = 32 / 12 C₀ = **(8 / 3) C₀ ≈ 2.67 C₀**.
   Jaanch: 2 K₁ K₂ / (K₁ + K₂) = 16/6 = 8/3 ✅.

9. Net charge Q_net = C V₁ − C V₂ = C(V₁ − V₂). Total capacitance = 2 C.
   **V_common = (V₁ − V₂) / 2**.
   Jaanch: If V₁ = V₂, opposite charges completely cancel giving V_common = 0 ✅.

10. **Pulled INWARD!** Kyunki isolated capacitor mein Q constant hai, slab andar jaane par C badhta hai aur stored energy **U = Q² / (2C) GHATTI hai**! Nature hamesha potential energy kam karne ki direction mein force lagati hai ⟹ inward pull!

---

Shabaash! Tumne Concentric Shells, Method of Images, Infinite Capacitor Ladders aur Plate Forces tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](electrostatic-potential-and-capacitance-part5.md) dekho!
