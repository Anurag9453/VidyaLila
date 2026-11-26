# Chapter: Electric Charges and Fields (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Applications of Gauss's Law](electric-charges-and-fields-part4.md)

---

## Electrostatics Arena ke Chaar Stations

School ke annual Physics Fest mein **Amita** ko "Electrostatics Arena" challenge mila. Wahan 4 alag-alag stations the:
1. **Null-Point Finder:** Do charges ke beech kahan net field zero hoga?
2. **Triangle Vector Desk:** Teen charges ek triangle ke konon par — vector superposition!
3. **Gauss Cube Puzzle:** Charge cube ke centre par nahi, balki ek **corner** par ho to kya hoga?
4. **Suspended Pith-Ball Balance:** Uniform horizontal field mein latki charged ball kitne angle par rukegi?

Amita ne muskura kar kaha: "Alag-alag topics mein sab padh liya hai — ab sab kuch mila kar solve karne ka asli mazaa aayega!"

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula |
|---|---|---|
| Do ya zyada point charges ke beech force | Coulomb's Law + Vector Superposition | F = k q₁q₂ / r² (medium mein F/K) |
| Kisi point par net electric field = 0 (null point) | Dono fields ke magnitudes equal karo (opposite directions) | q₁/x² = q₂/(d − x)² (same sign) |
| Do barabar-opposite charges (±q) chhoti doori 2a par | Electric Dipole formulas | p = 2qa; E_axial = 2kp/r³; τ = pE sin θ |
| Kisi closed surface (sphere/cube) se flux | Gauss's Law + Symmetry | Φ = q_enc / ε₀ |
| Lambi wire / badi sheet / hollow shell ka E | Gauss's Law Applications | 2kλ/r; σ/(2ε₀); 0 (inside) ya kQ/r² (outside) |
| Uniform E mein latki hui charged ball equilibrium mein | Free Body Diagram (T, mg, qE) | tan θ = qE / (mg) |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Null Point Between Two Positive Charges
Two point charges **q₁ = +4 μC** and **q₂ = +9 μC** are separated by **10 cm** in air. Find the position of the point on the line joining them where the net electric field is **zero**.

**Hal (Solution):**
- Dono charges positive (same sign) hain ⟹ null point dono ke **beech mein** aur chhote charge (+4 μC) ke paas hoga!
- Maan lo null point +4 μC se doori **x cm** par hai ⟹ +9 μC se doori **(10 − x) cm** hogi.
- Net E = 0 ⟹ E₁ = E₂:
  k(4 μC) / x² = k(9 μC) / (10 − x)²
- k aur μC kat gaye ⟹ **4 / x² = 9 / (10 − x)²**.
- Dono taraf square root lo (positive lengths):
  2 / x = 3 / (10 − x) ⟹ 2(10 − x) = 3x ⟹ 20 − 2x = 3x ⟹ 5x = 20 ⟹ **x = 4 cm from +4 μC** (aur 6 cm from +9 μC).
- **Jaanch:** 4 / 4² = 4/16 = 1/4; 9 / 6² = 9/36 = 1/4 — dono bilkul barabar ✅.

### Example 2: Equilateral Triangle par Vector Superposition
Three charges **+2 μC**, **+2 μC**, and **−2 μC** are placed at the vertices A, B, and C of an equilateral triangle of side **a = 10 cm**. Find the magnitude of the net force on the charge at **C (−2 μC)**.

**Hal (Solution):**
- A aur B dono (+2 μC) C (−2 μC) ko apni taraf **attract** karenge!
- Har force ka magnitude barabar hoga:
  F = k q₁q₂ / a² = (9 × 10⁹ × 2 × 10⁻⁶ × 2 × 10⁻⁶) / (0.10)² = (36 × 10⁻³) / 0.01 = **3.6 N**.
- Equilateral triangle mein C par dono forces (C→A aur C→B) ke beech angle **θ = 60°** hai!
- Parallelogram law se resultant:
  F_net = √(F² + F² + 2F² cos 60°) = √(F² + F² + F²) = **F √3**
  F_net = 3.6 × 1.732 ≈ **6.24 N** (bisector ke along, AB ke midpoint ki taraf).
- **Jaanch:** cos 60° = 0.5 ⟹ √(1 + 1 + 1) = √3; 3.6 × 1.732 = 6.2352 ≈ 6.24 N ✅.

### Example 3: Charge at the Corner of a Cube (Gauss's Law Symmetry!)
A point charge **+q** is placed right at one **corner** of a cube of side a. Find:
(a) the total electric flux passing through the cube, and
(b) the flux passing through each of the 3 faces that do NOT touch that corner.

**Hal (Solution):**
- Ek corner par rakhe charge ko poori tarah bandh karne ke liye humein us corner ke chaaron taraf **8 identical cubes** (2 × 2 × 2 ka bada cube) rakhne honge!
- (a) Poore 8-cube assembly se flux = q / ε₀ ⟹ hamare **1 cube** se total flux:
  **Φ_cube = q / (8 ε₀)**.
- (b) Jo 3 faces us corner ko **touch** karte hain, un par field lines surface ke parallel (θ = 90°) jaati hain ⟹ un 3 faces se **flux = 0**!
- Bache hue 3 opposite faces (jo corner ko touch nahi karte) symmetry se barabar flux baant lete hain:
  **Φ_each opposite face = (1/3) × (q / 8ε₀) = q / (24 ε₀)**.
- **Jaanch:** 3 × 0 + 3 × q/(24ε₀) = 3q/(24ε₀) = q/(8ε₀) ✅.

### Example 4: Non-Uniform Electric Field mein Cube se Flux
A cube of side **a = 10 cm** is placed with one corner at the origin and edges along the +x, +y, +z axes. A non-uniform electric field **E = 500 x î N/C** (sirf x-direction mein, jahan x metres mein hai) exists in the region. Find the net flux through the cube and the charge enclosed inside it.

**Hal (Solution):**
- Field sirf x-axis ke along hai ⟹ top, bottom, front, back (4 faces) par θ = 90° ⟹ flux = 0!
- **Left face (x = 0):** E = 500(0) = 0 ⟹ **Φ_left = 0**.
- **Right face (x = a = 0.10 m):** E = 500 × 0.10 = 50 N/C; Area A = (0.10)² = 0.01 m²; outward normal +x ke along (θ = 0°):
  **Φ_right = +E A = 50 × 0.01 = +0.50 N m²/C**.
- Net flux **Φ_net = 0 + 0.50 = 0.50 N m²/C**.
- Enclosed charge: **q_enc = ε₀ Φ_net** = 8.854 × 10⁻¹² × 0.50 = **4.427 × 10⁻¹² C = 4.427 pC**.
- **Jaanch:** 50 × 0.01 = 0.5; 8.854 × 0.5 = 4.427 ✅.

### Example 5: Suspended Charged Pith-Ball Equilibrium
A small charged pith ball of mass **m = 10⁻³ kg (1 g)** hangs from a light silk thread in a uniform horizontal electric field **E = 10⁴ N/C**. In equilibrium, the thread makes an angle of **45°** with the vertical. Find the charge **q** on the ball (take g = 10 m/s²).

**Hal (Solution):**
- Ball par teen forces lag rahe hain: Tension T (thread ke along), weight **mg** (neeche), aur electric force **qE** (horizontally side mein).
- Equilibrium mein:
  - Vertical: **T cos θ = mg**
  - Horizontal: **T sin θ = qE**
- Doosri equation ko pehli se divide karo:
  **tan θ = qE / (mg)**
- θ = 45° ⟹ tan 45° = 1 ⟹ **qE = mg**
- **q = mg / E** = (10⁻³ × 10) / 10⁴ = 10⁻² / 10⁴ = **10⁻⁶ C = 1 μC**.
- **Jaanch:** qE = 10⁻⁶ × 10⁴ = 10⁻² N; mg = 10⁻³ × 10 = 10⁻² N ⟹ tan θ = 1 ⟹ θ = 45° ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **Opposite sign wale do charges ke BEECH mein null point dhoondhna:**
   - *Galat:* +4 μC aur −9 μC ke beech mein E₁ = E₂ lagana.
   - *Sahi:* Opposite charges ke beech mein dono fields **same direction** mein hote hain (jud jaate hain, zero kabhi nahi hote!). Null point hamesha **bahar ki taraf**, chhote magnitude wale charge ke paas hota hai!
2. **2D (triangle/square) problems mein forces ya fields ko seedha scalar ki tarah jod dena:**
   - *Galat:* Example 2 mein F_net = 3.6 + 3.6 = 7.2 N likhna.
   - *Sahi:* Force aur electric field vectors hain — angle θ dekh kar **√(F₁² + F₂² + 2F₁F₂ cos θ)** ya x-y components use karo!
3. **Corner par rakhe charge ke liye cube ka flux q/(6ε₀) likh dena:**
   - *Galat:* Har cube problem mein ratta maarkar q/(6ε₀) laga dena.
   - *Sahi:* q/(6ε₀) tab hota hai jab charge cube ke **centre** par ho (1 cube mein bandh). Corner par ho to **8 cubes** lagte hain ⟹ poore cube se **q/(8ε₀)** aur har opposite face se **q/(24ε₀)**!

---

## Practice Questions (Mixed Chapter Challenge)

1. Two point charges +1 μC and −4 μC are placed 12 cm apart in air. Find the position of the null point (where net electric field is zero) from the +1 μC charge.
2. Three identical charges +3 μC each are placed at the three corners of an equilateral triangle of side 30 cm. Find the magnitude of net force on any one charge.
3. A point charge +q is placed at the **centre of one face** of a cube. What is the total electric flux passing through that cube? (Hint: how many identical cubes completely enclose it?)
4. An electric dipole of charges ±5 μC separated by 4 mm is placed in a uniform electric field E = 2 × 10⁵ N/C at an angle of 30°. Calculate (a) dipole moment p, and (b) torque τ on the dipole.
5. A conducting sphere of radius 10 cm has an unknown charge. If the electric field at 20 cm from the centre of the sphere is 1.8 × 10⁵ N/C and points radially inward, what is the net charge on the sphere?
6. A uniform electric field E = 200 î N/C exists for x > 0 and E = −200 î N/C for x < 0. A right circular cylinder of length 20 cm (extending from x = −10 cm to x = +10 cm) and radius 5 cm has its centre at the origin and axis along the x-axis. Find (a) the net outward flux through the cylinder, and (b) the net charge inside it. (Take π = 3.14.)
7. Two large parallel non-conducting sheets have surface charge densities +6 μC/m² and +2 μC/m². Find the electric field (in terms of ε₀) (a) in the region between the two sheets, and (b) outside the sheets.
8. A small oil drop of mass 2 × 10⁻¹⁴ kg carries 5 excess electrons. What vertical electric field E is needed to hold the drop stationary in mid-air? (Take g = 10 m/s², e = 1.6 × 10⁻¹⁹ C.)
9. Four point charges +2 μC, −5 μC, +2 μC, and −5 μC are located at the four corners A, B, C, D of a square of side 10 cm (in cyclic order). What is the net force on a +1 μC charge placed at the centre of the square?
10. A cube of side 20 cm has its faces parallel to the coordinate planes, with x running from x = 0 to x = 0.20 m. If the electric field is E = 400 x î N/C, calculate the net flux through the cube.

### Answers

1. Opposite signs ⟹ null point bahar, chhote magnitude (+1 μC) ke paas (x cm door, −4 μC se (12 + x) cm door):
   1 / x² = 4 / (12 + x)² ⟹ 1 / x = 2 / (12 + x) ⟹ 12 + x = 2x ⟹ **x = 12 cm from +1 μC** (on the side away from −4 μC).
   Jaanch: 1/12² = 1/144; 4/24² = 4/576 = 1/144 ✅.

2. Ek pair ka force: F = (9 × 10⁹ × 3 × 10⁻⁶ × 3 × 10⁻⁶) / (0.30)² = (81 × 10⁻³) / 0.09 = 0.9 N.
   Angle θ = 60° ⟹ F_net = F √3 = 0.9 × 1.732 ≈ **1.56 N**.
   Jaanch: 81 / 90 = 0.9; 0.9 × 1.732 = 1.5588 ≈ 1.56 N ✅.

3. Face-centre par rakhe charge ko bandh karne ke liye **2 identical cubes** (ek us face se chipka hua doosra cube) chahiye!
   Isliye ek cube se total flux = **q / (2 ε₀)**.
   Jaanch: 2 cubes milkar q/ε₀ dete hain ⟹ 1 cube = q/(2ε₀) ✅.

4. (a) p = q × 2a = (5 × 10⁻⁶) × (4 × 10⁻³) = **2.0 × 10⁻⁸ C m**.
   (b) τ = p E sin 30° = (2.0 × 10⁻⁸) × (2 × 10⁵) × 0.5 = **2.0 × 10⁻³ N m**.
   Jaanch: 2 × 2 × 0.5 × 10⁻³ = 2.0 × 10⁻³ N m ✅.

5. Radially inward ⟹ charge **negative** hai!
   E = k Q / r² ⟹ Q = E r² / k = (1.8 × 10⁵ × 0.04) / (9 × 10⁹) = 7200 / (9 × 10⁹) = 8 × 10⁻⁷ C = 0.8 μC.
   With sign: **Q = −0.8 μC**.
   Jaanch: (9 × 10⁹ × 0.8 × 10⁻⁶) / 0.04 = 7200 / 0.04 = 1.8 × 10⁵ N/C ✅.

6. Cap area A = π r² = 3.14 × (0.05)² = 3.14 × 0.0025 = 7.85 × 10⁻³ m².
   - Right cap (x = +10 cm): E = +200 î, outward normal +î ⟹ Φ_R = +200 × 7.85 × 10⁻³ = +1.57 N m²/C.
   - Left cap (x = −10 cm): E = −200 î, outward normal −î ⟹ dono same direction mein! Φ_L = +200 × 7.85 × 10⁻³ = +1.57 N m²/C.
   - Curved wall: Φ = 0.
   (a) Net flux **Φ_net = 1.57 + 1.57 = 3.14 N m²/C**.
   (b) **q_enc = ε₀ Φ_net** = 8.854 × 10⁻¹² × 3.14 ≈ **2.78 × 10⁻¹¹ C**.
   Jaanch: 400 × 3.14 × 0.0025 = 3.14 ✅.

7. Dono positive sheets hain!
   (a) Beech mein dono fields opposite hain: E_between = (σ₁ − σ₂) / (2ε₀) = (6 − 2) / (2ε₀) = **2 / ε₀ μC/m²** (= 2 × 10⁻⁶ / ε₀ N/C, +6 sheet se +2 sheet ki taraf).
   (b) Bahar dono fields same direction mein jud jaate hain: E_outside = (σ₁ + σ₂) / (2ε₀) = (6 + 2) / (2ε₀) = **4 / ε₀ μC/m²** (= 4 × 10⁻⁶ / ε₀ N/C, sheets se door).
   Jaanch: (6−2)/2 = 2; (6+2)/2 = 4 ✅.

8. Charge q = 5 e = 5 × 1.6 × 10⁻¹⁹ = 8.0 × 10⁻¹⁹ C (negative).
   Stationary rehne ke liye upward electric force = downward weight:
   q E = m g ⟹ E = (2 × 10⁻¹⁴ × 10) / (8.0 × 10⁻¹⁹) = (2 × 10⁻¹³) / (8 × 10⁻¹⁹) = **2.5 × 10⁵ N/C** (vertically downward, taaki negative charge par force upar lage!).
   Jaanch: 8 × 10⁻¹⁹ × 2.5 × 10⁵ = 20 × 10⁻¹⁴ = 2 × 10⁻¹³ N = mg ✅.

9. **Zero (0 N)!** Symmetry dekho: A (+2 μC) aur C (+2 μC) opposite corners par hain — dono centre ke +1 μC ko equal and opposite push karte hain (cancel!). B (−5 μC) aur D (−5 μC) opposite corners par hain — dono equal and opposite pull karte hain (cancel!). Net force = **0 N**.

10. Area of one face A = (0.20)² = 0.04 m².
    Left face (x = 0): E = 0 ⟹ Φ_L = 0.
    Right face (x = 0.20 m): E = 400 × 0.20 = 80 N/C ⟹ Φ_R = 80 × 0.04 = **3.2 N m²/C**.
    Net flux **Φ_net = 3.2 N m²/C**.
    Jaanch: 80 × 0.04 = 3.2 ✅.

---

## Chapter Ka Saar: Electric Charges and Fields

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Quantisation & Conservation | q = ±n e (e = 1.6 × 10⁻¹⁹ C) | Total charge of an isolated system is always conserved |
| Coulomb's Law | F = k q₁q₂ / r² (k = 9 × 10⁹ N m²/C²) | Medium mein F_med = F_air / K; central force along joining line |
| Electric Field | E = F / q₀ = k q / r² | Away from +q, towards −q; vector superposition applies |
| Electric Field Lines | Tangent gives direction of E | Never intersect; never form closed loops in electrostatics |
| Electric Dipole | p = q(2a); E_axial = 2kp/r³; E_eq = kp/r³ | Direction −q to +q; torque τ = pE sin θ (net force = 0 in uniform E) |
| Electric Flux & Gauss's Law | Φ = E A cos θ; Φ_closed = q_enc / ε₀ | θ is angle with **normal**; flux is independent of shape/size of Gaussian surface |
| Gauss Applications | Wire: 2kλ/r; Sheet: σ/(2ε₀); Shell: 0 (r < R), kQ/r² (r ≥ R) | Infinite sheet field is uniform; hollow shell shields interior (E = 0) |

---

Ab tum Electric Charges, Coulomb's Law, Electric Field, Dipole aur Gauss's Law — sab kuch mila kar bade se bade electrostatics problems solve kar sakte ho!

**Agle chapter mein:** Charge ko electric field mein hilane mein kitna **work** karna padta hai, **Electrostatic Potential** kya hota hai, aur **Capacitors** energy kaise store karte hain — **Electrostatic Potential and Capacitance**!
