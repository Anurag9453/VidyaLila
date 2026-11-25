# Chapter: Units and Measurements

> **Class:** 11 | **Subject:** Physics
> **Yeh Class 11 Physics ka pehla chapter hai!** Measurement aur basic units ki shuruat Class 9 ke [measurement-and-units.md](../../../class9/physics/measurement-and-units/measurement-and-units.md) mein padhi thi. Ab Class 11 mein hum poori SI system, supplementary units (radian, steradian), scientific prefixes, aur astronomical distances ko precision ke saath samjhenge!
> **Topics covered in this file:**
> 1. Physical Quantities, SI Units (Base, Derived, Supplementary), Prefixes, Aur Large/Small Distance Units

---

# Topic 1: Physical Quantities, SI Units, Base & Derived Units, Aur Prefixes

Physics ek experimental science hai — jab tak aap kisi cheez ko **naap (measure)** nahi sakte aur use numbers mein express nahi kar sakte, tab tak aap use poori tarah samajh nahi sakte! Class 9 ke [measurement-and-units.md](../../../class9/physics/measurement-and-units/measurement-and-units.md) mein tumne basic length, mass, aur time units dekhe the.

Is pehle topic mein hum poori duniya dwara maane jaane wale **International System of Units (SI)** ke 7 base units, 2 supplementary angle units (radian aur steradian), derived units, SI prefixes (femto se tera tak), aur parallax method se chaand-taaron ki doori naapna seekhenge!

---

## Inder ka Mars-orbiter unit-mismatch case study

Inder ek space-propulsion internship mein ek purani aerospace failure report padh raha tha: 1999 mein ek billion-dollar Mars Climate Orbiter space mein jal kar nasht ho gaya tha! Kyun?
Kyunki ek engineering team ne thruster force **pound-seconds** (imperial unit) mein bheja tha, aur spacecraft ka navigation computer use **newton-seconds (SI unit)** samajh kar padh raha tha — 4.45 guna ka antar!

Project lead ne Inder se kaha: "Physics aur engineering mein **ek universal unit language (SI)** use karna zindagi-aur-maut ka sawaal hota hai! Ek chhoti si unit galti poora mission khatam kar sakti hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Physical Quantity** | Koi bhi aisa gun (property) jise naapa ja sake aur Q = n · u ke roop mein likha ja sake | Length = 5 m (n = 5, u = m) |
| **Base (Fundamental) Quantities** | 7 independent quantities jo kisi aur par depend nahi kartin | Mass, Length, Time, Current, Temp, Amount, Luminous Intensity |
| **Derived Quantities** | Base quantities ko multiply/divide karke banne wali quantities | Speed (m/s), Force (kg m s⁻² = N) |
| **Plane Angle (dθ)** | Arc length aur radius ka ratio: dθ = ds / r (SI unit: radian, rad) | Full circle = 2π rad |
| **Solid Angle (dΩ)** | 3D surface area aur radius² ka ratio: dΩ = dA / r² (SI unit: steradian, sr) | Full sphere = 4π sr |

---

## Part A: The 7 SI Base Units & 2 Supplementary Units

### 1. Seven Fundamental (Base) SI Units:
| Base Quantity | SI Unit Name | Symbol |
|---|---|---|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric Current | ampere | A |
| Thermodynamic Temperature | kelvin | K |
| Amount of Substance | mole | mol |
| Luminous Intensity | candela | cd |

### 2. Two Supplementary (Geometric) Units:
- **Plane Angle:** **radian (rad)** — dθ = ds / r. Poora circle = 2π rad = 360° => **1 rad ≈ 57.3°**.
- **Solid Angle:** **steradian (sr)** — dΩ = dA / r². Poore sphere ka surface area 4πr² hota hai => **Total solid angle of a sphere = 4πr² / r² = 4π sr**!

---

## Part B: Derived Units & Key SI Prefixes

### 1. Common Derived Units:
- Speed / Velocity: m s⁻¹
- Acceleration: m s⁻²
- Force: **newton (N)** = kg m s⁻²
- Work / Energy: **joule (J)** = N m = kg m² s⁻²
- Power: **watt (W)** = J s⁻¹ = kg m² s⁻³
- Pressure / Stress: **pascal (Pa)** = N m⁻² = kg m⁻¹ s⁻²
- Frequency: **hertz (Hz)** = s⁻¹

### 2. Essential SI Prefixes (10⁻¹⁵ se 10¹² tak):
| Prefix | Symbol | Factor | Prefix | Symbol | Factor |
|---|---|---|---|---|---|
| femto | f | 10⁻¹⁵ | kilo | k | 10³ |
| pico | p | 10⁻¹² | mega | M | 10⁶ |
| nano | n | 10⁻⁹ | giga | G | 10⁹ |
| micro | μ | 10⁻⁶ | tera | T | 10¹² |
| milli | m | 10⁻³ | centi | c | 10⁻² |

---

## Part C: Large & Small Distance Units + Parallax Intuition

1. **Very small distances:**
   - **1 fermi (fm)** = 10⁻¹⁵ m (nuclear radius scale!)
   - **1 angstrom (Å)** = 10⁻¹⁰ m (atomic bond scale!)
2. **Astronomical distances (All are units of LENGTH, NOT time!):**
   - **1 Astronomical Unit (AU)** = Earth–Sun average distance ≈ **1.496 × 10¹¹ m**
   - **1 Light Year (ly)** = distance light travels in 1 year (3 × 10⁸ m/s × 3.156 × 10⁷ s) ≈ **9.46 × 10¹⁵ m**
   - **1 Parsec** = distance at which 1 AU subtends an angle of 1 arcsecond (1") ≈ **3.08 × 10¹⁶ m ≈ 3.26 ly**!
3. **Parallax Method:** Door sthit planet ya taare ko Earth par do door points (baseline **b**) se dekhne par uski apparent position mein chhota angle **θ (in radians!)** shift dikhta hai:
   **D = b / θ**   *(kyunki θ = b / D for very small θ!)*

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 1.1: Prefix Conversions To SI Units
**Sawaal:** Convert karo: (a) 5.4 nm to metres, (b) 2.5 GHz to Hz, (c) 72 km/h to m/s.

**Solution:**
- (a) 1 nm = 10⁻⁹ m => 5.4 nm = **5.4 × 10⁻⁹ m**.
- (b) 1 GHz = 10⁹ Hz => 2.5 GHz = **2.5 × 10⁹ Hz**.
- (c) 72 km/h = 72 × (1000 m / 3600 s) = 72 × (5/18) m/s = **20 m/s**.

Jaanch:
- Jaanch (c): 20 m/s × 3600 s = 72,000 m = 72 km in 1 hour ✅

---

### Example 1.2: Plane Angle And Solid Angle Calculation
**Sawaal:** (a) 1° (degree), 1' (arcminute), aur 1" (arcsecond) ko radians mein badlo. (b) 2 m radius ke sphere par 0.8 m² area dwara centre par banaya gaya solid angle gyat karo.

**Solution:**
**(a)** 180° = π rad ≈ 3.1416 rad:
- 1° = π / 180 ≈ **1.745 × 10⁻² rad**
- 1' = (1/60)° ≈ **2.91 × 10⁻⁴ rad**
- 1" = (1/60)' ≈ **4.85 × 10⁻⁶ rad**

**(b)** dΩ = dA / r² = 0.8 / (2)² = 0.8 / 4 = **0.2 sr**.

Jaanch:
- Jaanch (b): 0.2 sr is strictly less than full sphere 4π ≈ 12.57 sr ✅

---

### Example 1.3: Parallax Distance To The Moon
**Sawaal:** Earth ke do diametrically opposite points (baseline b = 1.276 × 10⁷ m) se Moon ko dekhne par parallax angle θ = 1° 54' milta hai. Moon ki Earth se doori D gyat karo.

**Solution:**
Pehle θ ko radians mein badlo!
θ = 1° 54' = 60' + 54' = 114'.
Using 1' = 2.91 × 10⁻⁴ rad:
θ = 114 × 2.91 × 10⁻⁴ ≈ **3.32 × 10⁻² rad**.

Ab D = b / θ:
D = (1.276 × 10⁷) / (3.32 × 10⁻²) ≈ **3.84 × 10⁸ m**!

Jaanch:
- Jaanch: Actual Earth–Moon average distance is ~3.84 × 10⁸ m (384,000 km) ✅

---

### Example 1.4: Expressing Derived Units In Base SI Units
**Sawaal:** Pressure (Pa), Energy (J), aur Gravitational Constant (G = Fr²/(m₁m₂)) ko 7 SI base units mein express karo.

**Solution:**
- **Pressure (Pa):** F / A = (kg m s⁻²) / m² = **kg m⁻¹ s⁻²**.
- **Energy (J):** F · d = (kg m s⁻²) · m = **kg m² s⁻²**.
- **G:** (kg m s⁻²) · m² / kg² = **kg⁻¹ m³ s⁻²**.

Jaanch:
- Jaanch: G m₁ m₂ / r² = (kg⁻¹ m³ s⁻²)(kg²)/m² = kg m s⁻² = N ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: "Light Year" ko time ka unit samajh lena
- **Galat soch:** "Light year mein 'year' likha hai, isliye yeh time ka unit hai."
- **Sahi samajh:** Light year **DISTANCE (length)** ka unit hai — 1 saal mein light dwara tay ki gayi doori (9.46 × 10¹⁵ m)!

### Galti 2: Prefix kilo (k) ko capital K likh dena
- **Galat soch:** "5 Kg ya 10 Km likh diya."
- **Sahi samajh:** Capital **K** ka matlab **Kelvin (temperature)** hota hai! Prefix kilo hamesha small **k** hota hai: **5 kg, 10 km**!

### Galti 3: Parallax formula D = b / θ mein θ ko degrees mein rakh dena
- **Galat soch:** "b = 1.276 × 10⁷ m, θ = 1.9° => D = 1.276 × 10⁷ / 1.9."
- **Sahi samajh:** Arc formula s = rθ (aur D = b/θ) **sirf radians** mein valid hota hai! Degrees ko hamesha π/180 se multiply karke radians mein badlo!

---

## Quick Recap

- **7 SI Base Units:** m, kg, s, A, K, mol, cd.
- **2 Supplementary Units:** radian (plane angle = s/r), steradian (solid angle = A/r²).
- **Small & Large Lengths:** 1 fm = 10⁻¹⁵ m, 1 Å = 10⁻¹⁰ m, 1 AU = 1.496 × 10¹¹ m, 1 ly = 9.46 × 10¹⁵ m, 1 parsec = 3.08 × 10¹⁶ m.
- **Parallax:** D = b / θ (θ in radians!).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Convert 108 km/h into m/s.

**Solution:**
108 × (5/18) = 6 × 5 = **30 m/s**.

Jaanch:
- Jaanch: 30 × 3.6 = 108 km/h ✅

---

### Question 2
Express 1 g/cm³ in SI units (kg/m³).

**Solution:**
1 g = 10⁻³ kg; 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³.
1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = **10³ kg/m³ = 1000 kg/m³**.

Jaanch:
- Jaanch: Density of water is 1 g/cm³ = 1000 kg/m³ ✅

---

### Question 3
How many angstroms make 1 nanometre?

**Solution:**
1 nm = 10⁻⁹ m and 1 Å = 10⁻¹⁰ m.
1 nm / 1 Å = 10⁻⁹ / 10⁻¹⁰ = **10 Å**.

Jaanch:
- Jaanch: 10 × 10⁻¹⁰ m = 10⁻⁹ m = 1 nm ✅

---

### Question 4
How many astronomical units (AU) are there in 1 light year (approximately)?

**Solution:**
1 ly / 1 AU = (9.46 × 10¹⁵) / (1.496 × 10¹¹) ≈ **6.32 × 10⁴ AU** (~63,200 AU).

Jaanch:
- Jaanch: 6.32 × 10⁴ × 1.496 × 10¹¹ ≈ 9.46 × 10¹⁵ m ✅

---

### Question 5
A surface patch of area 1.5 cm² is on a sphere of radius 5 cm. Find the solid angle subtended by the patch at the centre of the sphere.

**Solution:**
dΩ = dA / r² = 1.5 / 5² = 1.5 / 25 = **0.06 sr**.

Jaanch:
- Jaanch: Both area and r² are in cm², so ratio is cleanly in steradians: 1.5/25 = 0.06 sr ✅

---

### Question 6
Express 1 kWh (kilowatt-hour, commercial unit of electrical energy) in joules.

**Solution:**
1 kW = 1000 W = 1000 J/s; 1 hour = 3600 s.
1 kWh = 1000 × 3600 J = **3.6 × 10⁶ J** (3.6 MJ).

Jaanch:
- Jaanch: 10³ × 3.6 × 10³ = 3.6 × 10⁶ J ✅

---

### Question 7
The Sun's angular diameter is measured to be θ = 1920". The distance of the Sun from the Earth is D = 1.496 × 10¹¹ m. Find the diameter of the Sun.

**Solution:**
θ = 1920 × 4.85 × 10⁻⁶ rad ≈ 9.31 × 10⁻³ rad.
Diameter d = D · θ = (1.496 × 10¹¹) × (9.31 × 10⁻³) ≈ **1.39 × 10⁹ m**.

Jaanch:
- Jaanch: Actual solar diameter is ~1.39 × 10⁹ m (1.39 million km) ✅

---

### Question 8
Express the SI unit of Power (watt) and Electric Potential (volt = joule / coulomb, where 1 C = 1 A s) in terms of SI base units.

**Solution:**
- **Watt (W):** J / s = **kg m² s⁻³**.
- **Volt (V):** J / (A s) = (kg m² s⁻²) / (A s) = **kg m² s⁻³ A⁻¹**.

Jaanch:
- Jaanch: Power P = V · I => (kg m² s⁻³ A⁻¹)(A) = kg m² s⁻³ = W ✅

---

### Question 9
A vehicle moves at 18 km/h. How many metres does it cover in 1 second?

**Solution:**
18 × (5/18) = **5 m** in 1 second.

Jaanch:
- Jaanch: 5 m/s × 3600 s = 18,000 m = 18 km ✅

---

### Question 10
Fill in the blank: 1 m² = ___ mm², and 1 m³ = ___ cm³.

**Solution:**
- 1 m = 10³ mm => 1 m² = (10³)² mm² = **10⁶ mm²**.
- 1 m = 10² cm => 1 m³ = (10²)³ cm³ = **10⁶ cm³**.

Jaanch:
- Jaanch: Square multiplies exponent by 2, cube multiplies exponent by 3 ✅

---

### Question 11
Which of the following is NOT an SI base unit: kelvin, newton, candela, mole?

**Solution:**
**newton (N)** is a **derived unit** (kg m s⁻²), NOT a base unit! Kelvin, candela, and mole are all SI base units.

Jaanch:
- Jaanch: 7 base units are m, kg, s, A, K, mol, cd (N is derived) ✅

---

### Question 12
How many picometres are in 3.5 micrometres?

**Solution:**
3.5 μm = 3.5 × 10⁻⁶ m; 1 pm = 10⁻¹² m.
Ratio = (3.5 × 10⁻⁶) / 10⁻¹² = **3.5 × 10⁶ pm**.

Jaanch:
- Jaanch: 10⁻⁶ / 10⁻¹² = 10⁶ ✅

---

Ab tum SI system, prefixes, aur astronomical units mein expert ban chuke ho! Agle topic [units-and-measurements-part2.md](units-and-measurements-part2.md) mein hum har physical quantity ka DNA — **Dimensions aur Dimensional Formulae ([M L T])** — decode karenge!
