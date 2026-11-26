# Chapter: Moving Charges and Magnetism (Part 2)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Magnetic Force and Motion of a Charge](moving-charges-and-magnetism.md)

---

## Circular Coil ke Centre par Compass ki Sui

Physics lab mein teacher ma'am ne ek vertical wooden frame par copper wire ke 50 chakkaron (turns) wali circular coil banayi aur use ek low-voltage 2 V battery se joda (safe teacher demonstration). **Dipti** ne dekha ki jaise hi switch on hua, coil ke bilkul centre par rakhe chhote magnetic compass ki sui turant ghoom kar coil ke axis ki taraf point karne lagi! Jab ma'am ne battery ka current double kiya, to deflection aur badh gaya!

Dipti ne poocha: "Ma'am, hum kaise calculate karein ki kisi chhote se current-carrying wire ya poori circular coil se exact kitne Tesla ka magnetic field banta hai?"

Teacher ma'am muskurayi: "Jaise electrostatics mein point charge ke liye Coulomb's law tha, waise hi magnetism mein chhote current element ke liye hota hai — **Biot-Savart Law**!"

---

## Naye Shabd (New Words)

- **Current Element (I dl→):** Current-carrying wire ka ek bahut chhota tukda (length dl), jiski direction current ke bahav ki direction mein li jaati hai.
- **Permeability of Free Space (μ₀):** Vacuum ki magnetic property constant: **μ₀ = 4π × 10⁻⁷ T m/A** (isliye **μ₀ / (4π) = 10⁻⁷ T m/A**!).
- **Biot-Savart Law:** Ek chhote current element I dl ke karan doori r par banne wale chhote magnetic field dB ka fundamental formula: dB = (μ₀ / 4π) × (I dl sin θ) / r².

---

## 1. Biot-Savart Law (Magnetism ka Coulomb's Law!)

Maan lo kisi tedhe-medhe wire mein steady current **I** beh raha hai. Wire ka ek nanha tukda **dl** lo, jisse doori **r** par aur angle **θ** (dl→ aur r→ ke beech) par point P hai:

```
         P
        /
       / r
      / theta
   --*---------> I (element dl)
```

Experiments se Biot aur Savart ne paaya ki chhota magnetic field **dB**:
- Current **I** aur element length **dl** ke directly proportional hai;
- **sin θ** ke directly proportional hai;
- Doori ke square **r²** ke inversely proportional hai!

Sabko milakar milta hai **Biot-Savart Law**:

**dB = (μ₀ / 4π) × (I dl sin θ) / r²**

jahan **μ₀ / (4π) = 10⁻⁷ T m/A**!

### Coulomb's Law vs Biot-Savart Law (Quick Comparison):
- Dono **inverse-square laws (∝ 1/r²)** aur superposition principle follow karte hain.
- **Farq:** Electric field **E** source charge (scalar) se banta hai aur line joining r→ ke **along** hota hai; jabki magnetic field **dB** current element **I dl→** (vector) se banta hai aur **dl→ aur r→ dono ke perpendicular** (Right-Hand Thumb Rule se!) hota hai!

---

## 2. Magnetic Field at the Centre of a Circular Current Loop

Maan lo radius **R** ke ek circular loop mein steady current **I** beh raha hai. Humein uske bilkul **centre O** par magnetic field **B** nikaalna hai:

1. Circle ke har chhote tukde **dl** par, radius **R** tangent (dl) ke hamesha **perpendicular** hota hai ⟹ **θ = 90°** (sin 90° = 1) har tukde ke liye!
2. Har tukde se centre ki doori same (**r = R**) hai, aur Right-Hand Rule se har tukde ka dB **ek hi direction** (loop ke plane ke perpendicular) mein point karta hai!
3. Sabhi tukdon ka seedha sum karo (Σ dl = circle ka circumference **2π R**):
   B = Σ dB = (μ₀ / 4π) × (I / R²) × (2π R) = (μ₀ I) / (2 R)!
4. Agar coil mein **N** tight turns hon, to field N guna ho jaata hai:

**B_centre = (μ₀ N I) / (2 R)**

*(Circular arc of angle φ radians ke liye: **B_arc = (μ₀ I φ) / (4π R)**! Semi-circle φ = π rakho to B = μ₀I / (4R) — aadha!)*

### Direction (Right-Hand Curl Rule):
Apne right hand ki ungliyon ko circular loop mein **current ki direction** mein ghumaao ⟹ **angutha (thumb)** centre par **B ki direction** (North pole ki taraf!) dikhayega!
- Anticlockwise current ⟹ North face (B bahar ki taraf).
- Clockwise current ⟹ South face (B andar ki taraf).

---

## 3. Magnetic Field on the Axis of a Circular Current Loop

Agar hum centre O se loop ke axis ke along doori **x** par kisi point P par jaayein (jahan har element dl se P ki doori **r = √(R² + x²)** hai):
- Symmetry se perpendicular components (dB cos α) aapas mein cancel ho jaate hain, aur sirf axis ke along components (dB sin α, jahan sin α = R / √(R² + x²)) judte hain!
- Sabhi elements ko jodkar (Σ dl = 2πR) exact result milta hai (stated & verified):

**B_axis = (μ₀ N I R²) / [ 2 (R² + x²)^(3/2) ]**

### Do Quick Checks:
1. **Centre par (x = 0):** (R² + 0)^(3/2) = R³ ⟹ R²/R³ = 1/R ⟹ **B_centre = μ₀ N I / (2R)** — bilkul match!
2. **Bahut door (x >> R):** R² ko x² ke saamne chhod do ⟹ **B_axis ≈ (μ₀ / 4π) × (2 m / x³)**, jahan **m = N I (π R²) = N I A** loop ka **magnetic dipole moment** hai! (Bilkul electric dipole ke axial field **2kp/x³** jaisa!)

---

## Solved Examples

### Example 1: Circular Coil ke Centre par Magnetic Field
A tightly wound circular coil of **N = 50 turns** and radius **R = 10 cm** carries a steady current of **I = 2.0 A**. Calculate the magnetic field at the centre of the coil (take π = 3.14).

**Hal (Solution):**
- N = 50, R = 10 cm = 0.10 m, I = 2.0 A, μ₀ = 4π × 10⁻⁷ T m/A.
- B = (μ₀ N I) / (2 R) = (4π × 10⁻⁷ × 50 × 2.0) / (2 × 0.10)
  = (400π × 10⁻⁷) / 0.20 = 2000π × 10⁻⁷ = 2π × 10⁻⁴ T ≈ **6.28 × 10⁻⁴ T**.
- **Jaanch:** 50 × 2 = 100; 4π × 100 / 0.2 = 2000π; 2000 × 3.14 × 10⁻⁷ = 6.28 × 10⁻⁴ T ✅.

### Example 2: Axial Field at x = R (Ratio with Centre)
For a circular current loop of radius R, find the ratio of the magnetic field at an axial point **x = R** to the magnetic field at the centre of the loop.

**Hal (Solution):**
- B_centre = μ₀ I / (2R).
- x = R par: (R² + R²)^(3/2) = (2 R²)^(3/2) = **2√2 R³**.
- B_axis = μ₀ I R² / (2 × 2√2 R³) = [ μ₀ I / (2R) ] × (1 / 2√2).
- Ratio **B_axis / B_centre = 1 / (2√2) ≈ 0.354**.
- **Jaanch:** (1 + 1)^(3/2) = 2^(3/2) = 2√2 ≈ 2.828; 1/2.828 ≈ 0.3536 ✅.

### Example 3: Semi-Circular Arc ka Magnetic Field
A wire bent into a semi-circular arc of radius **R = 5 cm** carries a current of **I = 4 A**. Find the magnetic field at the centre of the semi-circle.

**Hal (Solution):**
- Semi-circle = poore circle ka aadha (φ = π):
  B = (μ₀ I) / (4 R) = (4π × 10⁻⁷ × 4) / (4 × 0.05) = (4π × 10⁻⁷) / 0.05
  = 80π × 10⁻⁷ T ≈ 80 × 3.14 × 10⁻⁷ = **2.51 × 10⁻⁵ T**.
- **Jaanch:** 4 kat gaya; 4π/0.05 = 80π; 80 × 3.14 = 251.2 ⟹ 2.51 × 10⁻⁵ T ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Multi-turn coil mein N (number of turns) multiply karna bhool jaana:**
   - *Galat:* 50 turns wali coil ke liye sirf μ₀I/(2R) laga dena.
   - *Sahi:* Har turn barabar field deta hai ⟹ **B = μ₀ N I / (2R)**!
2. **Circular loop ke centre formula mein neeche 2πR likh dena:**
   - *Galat:* B = μ₀ I / (2π R) likhna (straight wire ke formula se confuse hokar!).
   - *Sahi:* Circular loop ke centre par π kat jaata hai ⟹ **B = μ₀ I / (2 R)** (bina π ke!). Straight wire mein 2πr aata hai!
3. **Biot-Savart law mein sin θ = 1 har jagah maan lena:**
   - *Galat:* Current element ke bilkul axis par (θ = 0°) bhi dB non-zero nikaalna.
   - *Sahi:* Current element ke along (θ = 0° ya 180°) **sin θ = 0 ⟹ dB = 0**! (Isliye kisi straight wire ke axis par aage badhane par uska magnetic field zero hota hai!)

---

## Quick Recap

| Concept | Formula | Key Point |
|---|---|---|
| Biot-Savart Law | dB = (μ₀ / 4π) × (I dl sin θ) / r² | μ₀/(4π) = 10⁻⁷ T m/A; dB ⊥ dl and r |
| Centre of Circular Coil (N turns) | B = μ₀ N I / (2 R) | No π in denominator! |
| Circular Arc (angle φ rad) | B = (μ₀ I φ) / (4π R) | Semi-circle (φ = π): μ₀I / (4R) |
| Axis of Circular Coil (distance x) | B = μ₀ N I R² / [2(R² + x²)^(3/2)] | For x >> R: acts like magnetic dipole m = NIA |

---

## Practice Questions

1. State Biot-Savart law in scalar form and write the value and SI unit of μ₀ / (4π).
2. What is the magnetic field due to a small current element at a point lying directly on the line of the current element? Why?
3. A circular coil of 100 turns and radius 8 cm carries a current of 0.4 A. Calculate the magnetic field at the centre of the coil (take π = 3.14).
4. A single circular loop of radius 5 cm produces a magnetic field of 6.28 × 10⁻⁵ T at its centre. Find the current flowing in the loop (take π = 3.14).
5. Find the magnetic field at the centre of a quarter-circle (90° arc) of wire of radius 10 cm carrying a current of 8 A (take π = 3.14).
6. Two concentric circular coils X and Y of radii 10 cm and 20 cm lie in the same plane and carry currents 2 A (anticlockwise) and 4 A (clockwise) respectively, each with 1 turn. Find the net magnetic field at their common centre.
7. For a circular loop of radius 3 cm carrying current 5 A (1 turn), calculate the magnetic field on its axis at a distance x = 4 cm from the centre (take π = 3.14).
8. Define the magnetic dipole moment m of a current-carrying circular loop of N turns, radius R, and current I. Write its SI unit.
9. State whether True or False: Looking at a circular current loop, if the current flows anticlockwise, that face behaves like a Magnetic North Pole.
10. A wire of length L is bent into a single circular loop of radius R carrying current I. If the same wire is instead wound into a 2-turn circular coil of radius R/2 carrying the same current I, by what factor does the magnetic field at the centre increase?

### Answers

1. **dB = (μ₀ / 4π) × (I dl sin θ) / r²**. Value: **μ₀ / (4π) = 10⁻⁷ T m/A** (or N/A²).

2. **Zero (0 T)!** Kyunki line par angle θ = 0° (ya 180°) hota hai aur sin 0° = 0 ⟹ dB = 0.

3. N = 100, R = 0.08 m, I = 0.4 A:
   B = (4π × 10⁻⁷ × 100 × 0.4) / (2 × 0.08) = (160π × 10⁻⁷) / 0.16 = 1000π × 10⁻⁷ = π × 10⁻⁴ T ≈ **3.14 × 10⁻⁴ T**.
   Jaanch: 160 / 0.16 = 1000 ⟹ 1000 × 3.14 × 10⁻⁷ = 3.14 × 10⁻⁴ T ✅.

4. B = μ₀ I / (2R) ⟹ I = (2 R B) / μ₀ = (2 × 0.05 × 6.28 × 10⁻⁵) / (4 × 3.14 × 10⁻⁷)
   = (0.10 × 6.28 × 10⁻⁵) / (12.56 × 10⁻⁷) = (0.10 × 0.5) × 10² = **5.0 A**.
   Jaanch: (4 × 3.14 × 10⁻⁷ × 5) / 0.10 = 6.28 × 10⁻⁵ T ✅.

5. Quarter-circle = 1/4 of full circle (φ = π/2):
   B = (μ₀ I) / (8 R) = (4 × 3.14 × 10⁻⁷ × 8) / (8 × 0.10) = (4 × 3.14 × 10⁻⁷) / 0.10 = **1.256 × 10⁻⁵ T**.
   Jaanch: 8 kat gaya; 12.56 / 0.1 = 125.6 ⟹ 1.256 × 10⁻⁵ T ✅.

6. B_X = μ₀(2) / (2 × 0.10) = 10 μ₀ (bahar ki taraf, anticlockwise).
   B_Y = μ₀(4) / (2 × 0.20) = 10 μ₀ (andar ki taraf, clockwise).
   Dono barabar aur opposite directions mein hain ⟹ **B_net = 10 μ₀ − 10 μ₀ = 0 T**!
   Jaanch: I_X/R_X = 2/0.1 = 20; I_Y/R_Y = 4/0.2 = 20 ⟹ exact cancel ✅.

7. R = 0.03 m, x = 0.04 m ⟹ √(R² + x²) = 0.05 m ⟹ (R² + x²)^(3/2) = (0.05)³ = 1.25 × 10⁻⁴ m³.
   B = (4 × 3.14 × 10⁻⁷ × 5 × (0.03)²) / (2 × 1.25 × 10⁻⁴)
   = (20 × 3.14 × 10⁻⁷ × 9 × 10⁻⁴) / (2.5 × 10⁻⁴)
   = (180 × 3.14 × 10⁻⁷) / 2.5 = 72 × 3.14 × 10⁻⁷ ≈ **2.26 × 10⁻⁵ T**.
   Jaanch: 180 / 2.5 = 72; 72 × 3.14 = 226.08 ⟹ 2.26 × 10⁻⁵ T ✅.

8. **m = N I A = N I (π R²)**. SI unit: **A m²** (or J/T).

9. **True ✅.** Right-hand curl rule se anticlockwise current par angutha tumhari taraf (bahar) point karta hai — yaani **North Pole**!

10. Naya N' = 2, naya radius R' = R/2:
    B' = μ₀ (2) I / (2 × R/2) = **4 × [ μ₀ I / (2R) ] = 4 B**!
    Magnetic field **4 guna (4 times)** badh jaata hai!
    Jaanch: N double (×2) aur R aadha (×2) ⟹ 2 × 2 = 4× ✅.

---

Ab tum Biot-Savart Law aur Circular Current Loops ka magnetic field master kar chuke ho!

**Agle topic mein:** Jaise Electrostatics mein Gauss's Law ne symmetric problems ko 3 line mein solve kiya tha, waise hi Magnetism ka super-shortcut seekhenge — **Ampere's Circuital Law** (Long Wire, Solenoid aur Toroid)!
