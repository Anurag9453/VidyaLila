# Mixed Problems & Chapter Wrap-up — Units and Measurements

> **Pichle topic se:** [Significant Figures, Vernier Callipers & Screw Gauge](units-and-measurements-part5.md) mein humne significant figures aur precision instruments ke rules seekhe. Ab chalo poore chapter ke sabhi tools ko ek saath mila kar asli mixed physics problems solve karte hain!

---

## Sulabha ka National Metrology Lab Calibration Station

Sulabha National Metrology Lab ke Calibration Station par kaam karti hai. Wahan har din aise sawaal aate hain jinmein ek hi problem ke andar 2-3 concepts ek saath lagte hain — kabhi real-gas equation ke constants ke dimensions nikalne hote hain, kabhi Vernier se naape gaye sphere ka volume percentage error nikalna hota hai, toh kabhi SI se ek bilkul naye unit system mein energy convert karni hoti hai.

Isliye Sulabha ne apne desk ke saamne ek **Decision Map** chipka rakha hai — dekhte hi pata chal jata hai kaun sa tool lagana hai!

---

## Decision Map: Kaun Sa Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Equation mein unknown constants a, b hain (jaise P + a/V²) | **Principle of Homogeneity** ([Topic 3](units-and-measurements-part3.md)): add/subtract hone wale terms ke dimensions equal karo |
| Ek unit system se doosre (CGS ya custom system) mein convert karna ho | **n₂ = n₁ (M₁/M₂)ᵃ (L₁/L₂)ᵇ (T₁/T₂)ᶜ** ([Topic 3](units-and-measurements-part3.md)) |
| Naya formula banana ho jab 3 variables diye hon | **Q = k Xᵃ Yᵇ Zᶜ** likh kar M, L, T ki powers equate karo ([Topic 3](units-and-measurements-part3.md)) |
| Formula mein powers/products/quotients ke % errors diye hon | **%Z = p(%A) + q(%B) + r(%C)** — sabhi terms ADD karo ([Topic 4](units-and-measurements-part4.md)) |
| Sum/Difference (A ± B) ka error poocha ho | **ΔZ = ΔA + ΔB** (absolute errors add, relative nahi!) ([Topic 4](units-and-measurements-part4.md)) |
| Measurement digits round karne hon | Add/Sub -> **least decimal places**; Mul/Div -> **least sig figs** ([Topic 5](units-and-measurements-part5.md)) |
| Vernier Callipers / Screw Gauge reading with zero error | **Corrected = MSR + (VSR × LC) - Zero Error** (sign ke saath) ([Topic 5](units-and-measurements-part5.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Van der Waals Real-Gas Equation Constants

In the Van der Waals equation for a real gas:
(P + a / V²) (V - b) = R T
where P is pressure, V is volume, R is universal gas constant, and T is absolute temperature. Find the dimensional formulae and SI units of constants a and b.

**Solution:**
Principle of Homogeneity se:
1. **(V - b)** mein b ko V se subtract kiya gaya hai, isliye:
   **[b] = [V] = [L³]** (SI unit: **m³**).

2. **(P + a / V²)** mein a / V² ko P mein add kiya gaya hai, isliye:
   [a / V²] = [P]
   => [a] = [P] [V²] = [M L⁻¹ T⁻²] [L³]² = [M L⁻¹ T⁻²] [L⁶] = **[M L⁵ T⁻²]** (SI unit: **N m⁴** ya **kg m⁵ s⁻²**).

Jaanch:
- Jaanch: [a / V²] = [M L⁵ T⁻²] / [L⁶] = [M L⁻¹ T⁻²] = [P] ✅

---

### Problem 2: Multi-Power Percentage Error

A physical quantity P is related to four observables a, b, c, and d as:
P = a³ b² / (√c d)
The percentage errors in a, b, c, and d are 1%, 3%, 4%, and 2% respectively. What is the maximum percentage error in P? If the calculated value of P is 3.763, to what value should you round off the result?

**Solution:**
1. **Percentage error in P:**
   %P = 3(%a) + 2(%b) + (1/2)(%c) + 1(%d)
   %P = 3(1%) + 2(3%) + (1/2)(4%) + 1(2%)
   %P = 3% + 6% + 2% + 2% = **13%**.

2. **Rounding off P = 3.763:**
   Absolute error ΔP = 13% of 3.763 ≈ 0.49 (first decimal place mein hi uncertainty aa rahi hai!).
   Isliye 3.763 ko 1 decimal place (2 sig figs) tak round karna honest hai: **3.8**.

Jaanch:
- Jaanch: 3 + 6 + 2 + 2 = 13%; 0.13 × 3.763 = 0.489 ≈ 0.5, toh 3.763 ± 0.5 ko 3.8 likhna sahi hai ✅

---

### Problem 3: Converting Universal Gravitational Constant G from SI to CGS

In SI units, G = 6.67 × 10⁻¹¹ N m² kg⁻². Convert G into CGS units (dyne cm² g⁻²) using dimensional analysis.

**Solution:**
[G] = [M⁻¹ L³ T⁻²] => a = -1, b = 3, c = -2.
SI -> CGS: M₁/M₂ = 1000 g / 1 g = 10³, L₁/L₂ = 100 cm / 1 cm = 10², T₁/T₂ = 1.
n₂ = 6.67 × 10⁻¹¹ × (10³)⁻¹ × (10²)³ × (1)⁻²
n₂ = 6.67 × 10⁻¹¹ × 10⁻³ × 10⁶ = **6.67 × 10⁻⁸ dyne cm² g⁻²** (cm³ g⁻¹ s⁻²).

Jaanch:
- Jaanch: Power of 10: -11 - 3 + 6 = -8 ✅

---

### Problem 4: Sphere Radius Measurement -> Volume Percentage Error

The radius of a solid sphere is measured using a Vernier callipers as r = 2.50 ± 0.05 cm. Find the percentage error in its volume V = (4/3) π r³.

**Solution:**
- Percentage error in radius: %r = (0.05 / 2.50) × 100% = **2%**.
- Since V = (4/3) π r³, constants (4/3) π contribute zero error:
  %V = 3 × (%r) = 3 × 2% = **6%**.

Jaanch:
- Jaanch: 0.05 / 2.50 = 1 / 50 = 0.02 (2%); 3 × 2% = 6% ✅

---

### Problem 5: Deriving Stokes' Law for Viscous Drag

A small steel sphere of radius r moves with terminal velocity v through a fluid of coefficient of viscosity η ([M L⁻¹ T⁻¹]). Assuming the viscous drag force F depends on η, r, and v, derive the formula for F.

**Solution:**
Let F = k ηᵃ rᵇ vᶜ.
Dimensions on both sides:
[M¹ L¹ T⁻²] = [M L⁻¹ T⁻¹]ᵃ [L]ᵇ [L T⁻¹]ᶜ = [Mᵃ L^(-a+b+c) T^(-a-c)].

Comparing powers:
1. M: a = 1
2. T: -a - c = -2 => -1 - c = -2 => c = 1
3. L: -a + b + c = 1 => -1 + b + 1 = 1 => b = 1.

Substituting a = 1, b = 1, c = 1:
F = **k η r v** (Exact fluid theory gives k = 6π, i.e., Stokes' Law: F = 6π η r v).

Jaanch:
- Jaanch: [η r v] = [M L⁻¹ T⁻¹][L][L T⁻¹] = [M L T⁻²] = [F] ✅

---

### Problem 6: Converting 10 Joules into a Custom Unit System

In a custom unit system, the unit of mass is 100 g, the unit of length is 20 cm, and the unit of time is 1 minute. Find the numerical value of 10 J in this new system.

**Solution:**
[Energy] = [M¹ L² T⁻²] => a = 1, b = 2, c = -2.
System 1 (SI): M₁ = 1000 g, L₁ = 100 cm, T₁ = 1 s, n₁ = 10.
System 2 (New): M₂ = 100 g, L₂ = 20 cm, T₂ = 60 s.

n₂ = 10 × (1000 / 100)¹ × (100 / 20)² × (1 / 60)⁻²
n₂ = 10 × (10)¹ × (5)² × (60)²
n₂ = 10 × 10 × 25 × 3600 = 2500 × 3600 = **9,000,000 = 9 × 10⁶ new units**.

Jaanch:
- Jaanch: 10 × 10 = 100; 100 × 25 = 2500; 2500 × 3600 = 9,000,000 = 9 × 10⁶ ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Ek hi formula mein SI aur CGS units mix kar dena
- **Galat:** F = m a mein m = 500 g aur a = 2 m/s² rakh kar F = 1000 N bol dena.
- **Sahi:** Calculation se pehle sabhi quantities ko ek hi consistent system (SI) mein lao: m = 0.5 kg => F = 0.5 × 2 = **1.0 N**.

### Galti 2: Negative zero error ka minus sign bhool jana
- **Galat:** Observed = 3.42 mm aur zero error = -0.03 mm par 3.42 - 0.03 = 3.39 mm nikal dena.
- **Sahi:** Formula hai Observed - (Zero Error) = 3.42 - (-0.03) = **3.45 mm**. Minus of minus plus hota hai!

### Galti 3: Sum (a + b) ka relative error Δa/a + Δb/b likh dena
- **Galat:** Z = a + b mein ΔZ / Z = Δa / a + Δb / b laga dena.
- **Sahi:** Relative errors sirf product/quotient mein add hote hain! Sum Z = a + b mein pehle absolute error ΔZ = Δa + Δb nikalo, phir divide karo: **ΔZ / Z = (Δa + Δb) / (a + b)**.

---

## Mixed Practice Questions

### Question 1
In the equation F = a √x + b t², where F is force, x is distance, and t is time, find the dimensions of a / b.

**Solution:**
- [a √x] = [F] => [a] = [M L T⁻²] / [L^(1/2)] = [M L^(1/2) T⁻²].
- [b t²] = [F] => [b] = [M L T⁻²] / [T²] = [M L T⁻⁴].
- [a / b] = [M L^(1/2) T⁻²] / [M L T⁻⁴] = **[M⁰ L^(-1/2) T²]**.

Jaanch:
- Jaanch: M cancels; L^(1/2 - 1) = L^(-1/2); T^(-2 - (-4)) = T² ✅

---

### Question 2
A student measures the diameter of a cylinder using a Vernier callipers (LC = 0.01 cm, zero error = +0.02 cm) and gets MSR = 2.0 cm, VSR = 4. Find the corrected radius of the cylinder.

**Solution:**
Observed diameter = 2.0 + 4(0.01) = 2.04 cm.
Corrected diameter D = 2.04 - (+0.02) = 2.02 cm.
Radius r = D / 2 = **1.01 cm**.

Jaanch:
- Jaanch: 2 × 1.01 = 2.02 cm; 2.02 + 0.02 = 2.04 cm ✅

---

### Question 3
If the percentage error in measuring the radius of a sphere is 1.5%, find the percentage error in its: (a) surface area, (b) volume.

**Solution:**
(a) A = 4π r² => %A = 2 × 1.5% = **3.0%**.
(b) V = (4/3)π r³ => %V = 3 × 1.5% = **4.5%**.

Jaanch:
- Jaanch: Powers 2 aur 3 seedha 1.5% se multiply hui ✅

---

### Question 4
Check whether the formula for kinetic energy K = (3/16) m v² is dimensionally correct. Is it physically correct?

**Solution:**
[LHS] = [K] = [M L² T⁻²].
[RHS] = [m v²] = [M] [L T⁻¹]² = [M L² T⁻²].
So it is **dimensionally correct**, but **physically incorrect** (true constant is 1/2, not 3/16).

Jaanch:
- Jaanch: Dimensional analysis constant 3/16 ko detect nahi kar sakta ✅

---

### Question 5
Convert a speed of 72 km h⁻¹ into m s⁻¹ using dimensional analysis.

**Solution:**
[v] = [L¹ T⁻¹].
n₂ = 72 × (1000 m / 1 m)¹ × (3600 s / 1 s)⁻¹ = 72 × 1000 / 3600 = **20 m s⁻¹**.

Jaanch:
- Jaanch: Shortcut 72 × (5/18) = 4 × 5 = 20 m s⁻¹ ✅

---

### Question 6
Two lengths are measured as a = 10.0 ± 0.2 cm and b = 30.0 ± 0.6 cm. Find the percentage error in their sum Z = a + b.

**Solution:**
Z = 10.0 + 30.0 = 40.0 cm.
ΔZ = Δa + Δb = 0.2 + 0.6 = 0.8 cm.
% error = (0.8 / 40.0) × 100% = **2.0%**.

Jaanch:
- Jaanch: 0.8 / 40 = 0.02 = 2% (Note: agar galti se %a + %b = 2% + 2% = 4% karte toh galat hota!) ✅

---

### Question 7
The mass of a cube is measured with an error of 2% and the length of its edge with an error of 1%. Find the maximum percentage error in its density.

**Solution:**
Density ρ = m / l³.
%ρ = %m + 3(%l) = 2% + 3(1%) = **5%**.

Jaanch:
- Jaanch: Volume error = 3 × 1% = 3%; density error = 2% + 3% = 5% ✅

---

### Question 8
A screw gauge has a pitch of 1 mm and 50 divisions on the circular scale. When measuring a thin sheet, PSR = 1 mm and CSR = 15, with zero error -0.04 mm. Find the corrected thickness.

**Solution:**
LC = 1 mm / 50 = 0.02 mm.
Observed = 1 + 15(0.02) = 1.30 mm.
Corrected = 1.30 - (-0.04) = **1.34 mm**.

Jaanch:
- Jaanch: 15 × 0.02 = 0.30 mm; 1.30 + 0.04 = 1.34 mm ✅

---

### Question 9
Express the result of (2.54 × 1.2) / 0.312 to the proper number of significant figures.

**Solution:**
Exact value = 3.048 / 0.312 = 9.76923...
Sig figs in inputs: 2.54 (3), 1.2 (2 — sabse kam!), 0.312 (3).
Round to 2 significant figures: **9.8**.

Jaanch:
- Jaanch: 9.769 ko 2 sig figs par round karne par 6 > 5 => 9.8 ✅

---

### Question 10
The velocity v of sound waves in a gas depends on its pressure P ([M L⁻¹ T⁻²]) and density ρ ([M L⁻³]). Derive the formula for v using dimensional analysis.

**Solution:**
Let v = k Pᵃ ρᵇ.
[M⁰ L¹ T⁻¹] = [M L⁻¹ T⁻²]ᵃ [M L⁻³]ᵇ = [M^(a+b) L^(-a-3b) T^(-2a)].
- T: -2a = -1 => a = 1/2
- M: a + b = 0 => b = -1/2
- Check L: -a - 3b = -1/2 + 3/2 = +1 (matches!).
So v = **k √(P / ρ)**.

Jaanch:
- Jaanch: [P/ρ] = [M L⁻¹ T⁻²]/[M L⁻³] = [L² T⁻²]; √(P/ρ) = [L T⁻¹] ✅

---

### Question 11
State whether the following statements are True or False:
(a) Two physical quantities having the same dimensional formula must always represent the same physical quantity.
(b) In Van der Waals equation (P + a/V²)(V - b) = RT, the ratio a/b has the dimensions of energy.

**Solution:**
- (a) **False** ❌ — Work aur Torque dono ka dimension [M L² T⁻²] hai, par woh alag physical quantities hain.
- (b) **True** ✅ — [a/b] = [M L⁵ T⁻²] / [L³] = [M L² T⁻²] = [Energy].

Jaanch:
- Jaanch: [a/b] = [P V² / V] = [P V] = [Work/Energy] ✅

---

### Question 12
In a new unit system, the unit of mass is 2 kg, unit of length is 5 m, and unit of time is 10 s. Find the value of 10 N in this new unit system.

**Solution:**
[F] = [M¹ L¹ T⁻²].
n₂ = 10 × (1 kg / 2 kg)¹ × (1 m / 5 m)¹ × (1 s / 10 s)⁻²
n₂ = 10 × (1/2) × (1/5) × 100 = 10 × (1/10) × 100 = **100 new units**.

Jaanch:
- Jaanch: 1 new force unit = (2 kg)(5 m)/(10 s)² = 10 / 100 = 0.1 N; toh 10 N = 10 / 0.1 = 100 new units ✅

---

## Chapter Wrap-up: Units and Measurements at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: SI Units & Parallax](units-and-measurements.md) | 7 base units + rad, sr; D = b / θ; 1 ly = 9.46 × 10¹⁵ m | Har measurement = number × standard unit; k small hai kilo ke liye |
| [Topic 2: Dimensions](units-and-measurements-part2.md) | [F] = [M L T⁻²], [E] = [M L² T⁻²], [P] = [M L² T⁻³] | Square brackets [ ] zaroori; dimensionless ≠ unitless (radian!) |
| [Topic 3: Dimensional Analysis](units-and-measurements-part3.md) | n₂ = n₁(M₁/M₂)ᵃ(L₁/L₂)ᵇ(T₁/T₂)ᶜ; Q = k Xᵃ Yᵇ Zᶜ | Homogeneity se check karo; constants (2π, 1/2) nahi milte |
| [Topic 4: Errors & Propagation](units-and-measurements-part4.md) | Z = A ± B => ΔZ = ΔA + ΔB; Z = AᵖB^q/Cʳ => %Z = p%A + q%B + r%C | Errors hamesha ADD hote hain, subtraction aur division mein bhi! |
| [Topic 5: Sig Figs & Instruments](units-and-measurements-part5.md) | LC(Vernier) = 1 MSD - 1 VSD; LC(Screw) = Pitch / N; Corrected = Obs - ZE | Add/Sub -> least decimals; Mul/Div -> least sig figs |
| [Topic 6: Mixed & Wrap-up](units-and-measurements-part6.md) | Van der Waals, Stokes' law, custom unit systems | Pehle Decision Map se tool chuno, phir step-by-step solve karo |

Tumne Class 11 Physics ka pehla foundation chapter poori tarah master kar liya hai! Agar aur deep, challenging problems (jaise non-standard base dimensions F-V-T, transcendental arguments, non-standard Vernier scales, aur parallel-resistor differential error) dekhna chahte ho, toh [Gehrai Mein — Advanced Level](units-and-measurements-advanced.md) zaroor padho.

**Agle chapter mein:** Ab jab humne naapna seekh liya, toh chalo cheezon ko chalte hue dekhte hain — **Motion in a Straight Line** mein hum position, velocity, acceleration aur kinematic graphs ka safar shuru karenge!
