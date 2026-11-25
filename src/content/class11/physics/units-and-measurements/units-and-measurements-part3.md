# Applications of Dimensional Analysis — Dimensional Checking, Unit Conversion & Formula Derivation

> **Pichle topic se:** [Dimensions and Dimensional Formulae](units-and-measurements-part2.md) mein humne 20+ physical quantities ke dimensional formulae [Mᵃ Lᵇ Tᶜ] nikalna seekha tha. Ab hum in dimensions ko ek superpower tool ki tarah use karenge — equations check karne, unit systems badalne, aur naye formulas derive karne ke liye!

---

## Laxman ka Fluid-Mechanics Lab Test

Laxman ek fluid-mechanics lab mein assistant hai. Ek din uske senior ne whiteboard par ek equation likhi:

```
  F = m v² / r  +  m g h
```

Laxman ne 5 second mein bina calculator uthaye bol diya, "Sir, yeh equation pakka galat hai!" Senior muskura kar bole, "Bina numbers dale kaise pakda?" Laxman ne kaha, "Sir, pehla term force hai aur doosra term energy hai — force aur energy ko kabhi joda nahi ja sakta!"

Yehi hai **Principle of Homogeneity of Dimensions** — physics ka sabse tez built-in error detector.

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Principle of Homogeneity | Kisi bhi sahi physical equation ke har term (LHS aur RHS par har plus/minus se alag term) ka dimensional formula bilkul SAME hona chahiye |
| Dimensional Consistency | Equation ka dimensionally match hona (LHS = RHS) |
| Conversion Factor | Ek unit system (jaise SI) se doosre system (jaise CGS) mein numerical value badalne ka multiplier |
| Dimensionless Constant | Formula mein aane wala pure number (jaise 1/2, 2π, k) jise dimensional analysis nahi nikal sakta |

---

## 1. Principle of Homogeneity of Dimensions

> **Niyam (Principle of Homogeneity):**
> A physical equation is dimensionally correct ONLY IF the dimensions of every term on both sides of the equation are identical.
>
> Agar equation hai: A = B + C - D
> toh zaroori hai ki: [A] = [B] = [C] = [D]

**Kyun?**
Socho: kya tum 5 kg aalu mein 3 metre rassi jod sakte ho? Bilkul nahi! Sirf same physical nature (same dimensions) wali cheezein hi add, subtract, ya equate ho sakti hain.

---

## 2. Three Main Applications of Dimensional Analysis

### Application 1: Checking Dimensional Consistency of an Equation

Har term ka dimensional formula nikalo aur compare karo.
- Agar [LHS] ≠ [RHS], toh equation **100% physically GALAT** hai.
- Agar [LHS] = [RHS], toh equation **dimensionally sahi** hai (par dimensionless constants ki wajah se physically pakki guarantee nahi — dekho Limitations).

### Application 2: Converting a Physical Quantity from One System of Units to Another

Kisi physical quantity Q ki actual size unit system badalne se nahi badalti:

```
  Q = n₁ u₁ = n₂ u₂
```

Jahan n₁, n₂ numerical values hain aur u₁, u₂ units hain. Agar quantity ka dimensional formula [Mᵃ Lᵇ Tᶜ] hai, toh:

```
  n₂ = n₁ × (M₁ / M₂)ᵃ × (L₁ / L₂)ᵇ × (T₁ / T₂)ᶜ
```

**Kyun?**
Kyunki u₁ = M₁ᵃ L₁ᵇ T₁ᶜ aur u₂ = M₂ᵃ L₂ᵇ T₂ᶜ. Dono ko n₁ u₁ = n₂ u₂ mein rakh kar n₂ ke liye solve karne par seedha yahi formula milta hai.

### Application 3: Deducing (Deriving) Relations Among Physical Quantities

Agar humein pata ho ki koi quantity Q किन physical quantities (maan lo X, Y, Z) par depend karti hai, toh hum maan lete hain:

```
  Q = k Xᵃ Yᵇ Zᶜ
```

Jahan k ek dimensionless constant hai. Dono taraf dimensions likh kar M, L, T ki powers compare karte hain, a, b, c ke liye linear equations solve karte hain, aur formula mil jata hai!

---

## 3. Four Limitations of Dimensional Analysis

Dimensional analysis powerful hai, par jaadu nahi. Iske 4 clear limits hain:

1. **Dimensionless constants nahi milte:** Formula T = k √(l/g) mein k = 2π hai ya k = 5, yeh dimensional analysis nahi bata sakta. Yeh sirf experiment ya full theory se aata hai.
2. **Plus/Minus wale multi-term formulas derive nahi ho sakte:** Jaise s = ut + (1/2)at² ko sirf dimensions se derive nahi kar sakte (check zaroor kar sakte hain!).
3. **Trigonometric, logarithmic, ya exponential functions derive nahi ho sakte:** Jaise y = A sin(ωt) ya N = N₀ e^(-λt) ko dimensions se nahi banaya ja sakta.
4. **3 se zyada independent mechanical variables par fail:** Mechanics mein sirf 3 base dimensions (M, L, T) hoti hain, toh sirf 3 equations banti hain. Agar koi quantity 4 independent quantities par depend kare, toh 4 unknowns (a, b, c, d) solve nahi ho sakte.

---

## Solved Examples

### Example 1: Checking Two Classic Equations

Check the dimensional consistency of:
(a) T = 2π √(l / g)
(b) E = (1/2) m v² + m g h

**Solution:**
**(a) T = 2π √(l / g):**
- LHS: [T] = [M⁰ L⁰ T¹]
- RHS: 2π dimensionless hai. [l] = [L], [g] = [L T⁻²].
  So [√(l / g)] = ([L] / [L T⁻²])^(1/2) = [T²]^(1/2) = [T¹] = [M⁰ L⁰ T¹].
- Since [LHS] = [RHS], the equation is **dimensionally consistent**.

**(b) E = (1/2) m v² + m g h:**
- LHS: [E] = [M L² T⁻²]
- Term 1 on RHS: [(1/2) m v²] = [M] [L T⁻¹]² = [M L² T⁻²]
- Term 2 on RHS: [m g h] = [M] [L T⁻²] [L] = [M L² T⁻²]
- Har term ka dimension [M L² T⁻²] hai, so equation is **dimensionally consistent**.

Jaanch:
- Jaanch: (a) dono taraf seconds (T¹); (b) teeno terms Joules (kg m² s⁻²) ✅

---

### Example 2: Converting 1 Newton (SI) to Dyne (CGS) and 1 Joule (SI) to Erg (CGS)

Use dimensional analysis to find:
(a) How many dynes make 1 N?
(b) How many ergs make 1 J?

**Solution:**
**(a) Force: [F] = [M¹ L¹ T⁻²] => a = 1, b = 1, c = -2.**
- SI (System 1): M₁ = 1 kg = 1000 g, L₁ = 1 m = 100 cm, T₁ = 1 s, n₁ = 1.
- CGS (System 2): M₂ = 1 g, L₂ = 1 cm, T₂ = 1 s.
- n₂ = n₁ (M₁/M₂)¹ (L₁/L₂)¹ (T₁/T₂)⁻²
  n₂ = 1 × (1000 / 1)¹ × (100 / 1)¹ × (1 / 1)⁻² = 10³ × 10² × 1 = **10⁵**.
- So **1 N = 10⁵ dyne**.

**(b) Energy/Work: [E] = [M¹ L² T⁻²] => a = 1, b = 2, c = -2.**
- n₂ = 1 × (1000 / 1)¹ × (100 / 1)² × (1 / 1)⁻²
  n₂ = 10³ × (10²)² × 1 = 10³ × 10⁴ = **10⁷**.
- So **1 J = 10⁷ erg**.

Jaanch:
- Jaanch: 1 J = 1 N × 1 m = (10⁵ dyne) × (10² cm) = 10⁷ dyne cm = 10⁷ erg ✅

---

### Example 3: Deriving the Time Period of a Simple Pendulum

Suppose the time period T of a simple pendulum depends on the mass m of the bob, length l of the string, and acceleration due to gravity g. Derive the expression for T using dimensional analysis.

**Solution:**
Let T = k mᵃ lᵇ gᶜ, where k is a dimensionless constant.

Writing dimensions on both sides:
[M⁰ L⁰ T¹] = [M]ᵃ [L]ᵇ [L T⁻²]ᶜ = [Mᵃ L^(b+c) T^(-2c)]

Comparing exponents of M, L, and T:
1. For M: a = 0
2. For T: -2c = 1 => c = -1/2
3. For L: b + c = 0 => b = -c = +1/2

Substituting a = 0, b = 1/2, c = -1/2:
T = k m⁰ l^(1/2) g^(-1/2) = **k √(l / g)**

Notice: m ki power 0 aayi — matlab pendulum ka time period bob ke mass par depend hi nahi karta! (Experiment se k = 2π milta hai.)

Jaanch:
- Jaanch: [√(l/g)] = ([L] / [L T⁻²])^(1/2) = [T], aur mass m cancel ho gaya ✅

---

### Example 4: Deriving Centripetal Force

The centripetal force F acting on a particle moving in a circle depends on its mass m, speed v, and radius r of the circular path. Derive the formula for F.

**Solution:**
Let F = k mᵃ vᵇ rᶜ.

Dimensions on both sides:
[M¹ L¹ T⁻²] = [M]ᵃ [L T⁻¹]ᵇ [L]ᶜ = [Mᵃ L^(b+c) T^(-b)]

Equating powers:
1. For M: a = 1
2. For T: -b = -2 => b = 2
3. For L: b + c = 1 => 2 + c = 1 => c = -1

Substituting a = 1, b = 2, c = -1:
F = k m¹ v² r⁻¹ = **k m v² / r**

(Full circular-motion theory se k = 1 milta hai, so F = m v² / r.)

Jaanch:
- Jaanch: [m v² / r] = [M] [L² T⁻²] / [L] = [M L T⁻²] = [F] ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Dimensionally correct equation ko 100% physically correct maan lena
- **Galat soch:** s = ut + 5at² mein har term ka dimension [L] hai, toh yeh equation bilkul sahi hogi!
- **Sahi baat:** Dimensionally sahi hona sirf zaroori shart (necessary condition) hai, kaafi shart (sufficient condition) nahi. Asli formula s = ut + (1/2)at² hai; 5 galat constant hai jo dimensional check nahi pakad sakta.

### Galti 2: Alag dimensions wali quantities ko add ya subtract kar dena
- **Galat soch:** Laxman ke board par F = m v² / r + m g h mein dono taraf M, L, T hain, toh shayad chal jaye.
- **Sahi baat:** [m v² / r] = [M L T⁻²] aur [m g h] = [M L² T⁻²]. Dono ke dimensions alag hain — unhe add karna physics mein strictly illegal hai.

### Galti 3: 4 independent mechanical variables ke saath formula derive karne ki koshish
- **Galat soch:** Agar force F depend kare mass m, speed v, radius r, aur time t (4 variables) par, toh F = k mᵃ vᵇ rᶜ tᵈ solve kar loonga.
- **Sahi baat:** Mechanics mein sirf 3 base dimensions (M, L, T) hoti hain, isliye sirf 3 equations milengi. 3 equations se 4 unknowns (a, b, c, d) uniquely solve nahi ho sakte.

---

## Quick Recap

- **Principle of Homogeneity:** Equation ke har additive term ka dimensional formula identical hona chahiye.
- **Checking equations:** [LHS] ≠ [RHS] => pakka galat; [LHS] = [RHS] => dimensionally consistent.
- **Unit conversion:** n₂ = n₁ (M₁/M₂)ᵃ (L₁/L₂)ᵇ (T₁/T₂)ᶜ. (1 N = 10⁵ dyne; 1 J = 10⁷ erg.)
- **Deriving formulas:** Q = k Xᵃ Yᵇ Zᶜ likh kar M, L, T ke exponents equate karo.
- **4 Limitations:** Dimensionless constants nahi milte, multi-term (+/-) formulas nahi bante, trig/log/exp functions nahi bante, >3 mechanical variables par fail.

---

## Practice Questions

### Question 1
Check whether the equation v = u + a t is dimensionally consistent.

**Solution:**
[v] = [L T⁻¹].
[u] = [L T⁻¹].
[a t] = [L T⁻²] [T] = [L T⁻¹].
Sabhi terms ka dimension [L T⁻¹] hai, so equation is **dimensionally consistent**.

Jaanch:
- Jaanch: LHS = [L T⁻¹], dono RHS terms = [L T⁻¹] ✅

---

### Question 2
Check whether the equation v² = u² + 2 a s² is dimensionally correct.

**Solution:**
[v²] = [L² T⁻²], [u²] = [L² T⁻²].
[2 a s²] = [L T⁻²] [L²] = [L³ T⁻²].
Since [L³ T⁻²] ≠ [L² T⁻²], the equation is **dimensionally incorrect**.

Jaanch:
- Jaanch: Asli formula mein s¹ hota hai (not s²), isliye L³ mismatch pakda gaya ✅

---

### Question 3
In the equation x = a + b t + c t², where x is in metres and t is in seconds, find the dimensions and SI units of a, b, and c.

**Solution:**
Principle of Homogeneity se har term ka dimension [L] hoga:
- [a] = [L] => SI unit: **m**
- [b t] = [L] => [b] = [L T⁻¹] => SI unit: **m s⁻¹**
- [c t²] = [L] => [c] = [L T⁻²] => SI unit: **m s⁻²**

Jaanch:
- Jaanch: [a] + [b][T] + [c][T²] = [L] + [L] + [L] ✅

---

### Question 4
Convert a power of 1 Watt (SI) into CGS units (erg s⁻¹) using dimensional analysis.

**Solution:**
[P] = [M¹ L² T⁻³] => a = 1, b = 2, c = -3.
n₂ = 1 × (1000 g / 1 g)¹ × (100 cm / 1 cm)² × (1 s / 1 s)⁻³ = 10³ × 10⁴ × 1 = **10⁷ erg s⁻¹**.

Jaanch:
- Jaanch: 1 W = 1 J/s = 10⁷ erg/s ✅

---

### Question 5
Convert a density of 13.6 g cm⁻³ (mercury in CGS) into SI units (kg m⁻³) using dimensional analysis.

**Solution:**
[ρ] = [M¹ L⁻³ T⁰] => a = 1, b = -3, c = 0.
n₂ = 13.6 × (1 g / 1000 g)¹ × (1 cm / 100 cm)⁻³
n₂ = 13.6 × 10⁻³ × (10⁻²)⁻³ = 13.6 × 10⁻³ × 10⁶ = **13,600 kg m⁻³** (1.36 × 10⁴ kg m⁻³).

Jaanch:
- Jaanch: 1 g/cm³ = 1000 kg/m³, toh 13.6 × 1000 = 13,600 kg/m³ ✅

---

### Question 6
Find the dimensions of α and β in the equation v = α t + β / (t + γ), where v is velocity and t is time. Also find [γ].

**Solution:**
- (t + γ) mein homogeneity se: **[γ] = [T]**.
- [α t] = [v] = [L T⁻¹] => **[α] = [L T⁻²]**.
- [β / (t + γ)] = [L T⁻¹] => [β] / [T] = [L T⁻¹] => **[β] = [L]**.

Jaanch:
- Jaanch: [α t] = [L T⁻²][T] = [L T⁻¹] aur [β/T] = [L]/[T] = [L T⁻¹] ✅

---

### Question 7
The frequency f of a stretched string depends on its length l, tension F (force), and mass per unit length μ ([M L⁻¹]). Derive the formula for f.

**Solution:**
Let f = k lᵃ Fᵇ μᶜ.
[M⁰ L⁰ T⁻¹] = [L]ᵃ [M L T⁻²]ᵇ [M L⁻¹]ᶜ = [M^(b+c) L^(a+b-c) T^(-2b)].
Comparing powers:
- T: -2b = -1 => b = 1/2
- M: b + c = 0 => c = -1/2
- L: a + b - c = 0 => a + 1/2 - (-1/2) = 0 => a + 1 = 0 => a = -1.
So f = k l⁻¹ F^(1/2) μ^(-1/2) = **(k / l) √(F / μ)**.

Jaanch:
- Jaanch: [F/μ] = [M L T⁻²]/[M L⁻¹] = [L² T⁻²]; √(F/μ) = [L T⁻¹]; divide by l => [T⁻¹] = [f] ✅

---

### Question 8
The escape velocity v_e from a planet depends on the gravitational constant G ([M⁻¹ L³ T⁻²]), mass of the planet M, and radius R. Derive the formula for v_e.

**Solution:**
Let v_e = k Gᵃ Mᵇ Rᶜ.
[M⁰ L¹ T⁻¹] = [M⁻¹ L³ T⁻²]ᵃ [M]ᵇ [L]ᶜ = [M^(-a+b) L^(3a+c) T^(-2a)].
Comparing powers:
- T: -2a = -1 => a = 1/2
- M: -a + b = 0 => b = 1/2
- L: 3a + c = 1 => 3/2 + c = 1 => c = -1/2.
So v_e = **k √(G M / R)**. (Actual theory gives k = √2.)

Jaanch:
- Jaanch: [GM/R] = [M⁻¹ L³ T⁻²][M]/[L] = [L² T⁻²]; square root = [L T⁻¹] ✅

---

### Question 9
Convert acceleration due to gravity g = 9.8 m s⁻² into km min⁻² using dimensional analysis.

**Solution:**
[g] = [M⁰ L¹ T⁻²] => a = 0, b = 1, c = -2.
L₁ = 1 m, L₂ = 1 km = 1000 m; T₁ = 1 s, T₂ = 1 min = 60 s.
n₂ = 9.8 × (1 / 1000)¹ × (1 / 60)⁻² = 9.8 × 10⁻³ × 3600 = 9.8 × 3.6 = **35.28 km min⁻²**.

Jaanch:
- Jaanch: 9.8 m = 0.0098 km; 1 s⁻² = 3600 min⁻²; 0.0098 × 3600 = 35.28 ✅

---

### Question 10
A calorie is a unit of heat energy equal to 4.2 J. Suppose a new unit system has unit of mass α kg, unit of length β m, and unit of time γ s. Express 1 calorie in terms of the new units.

**Solution:**
[Energy] = [M¹ L² T⁻²].
n₂ = 4.2 × (1 kg / α kg)¹ × (1 m / β m)² × (1 s / γ s)⁻² = **4.2 α⁻¹ β⁻² γ²** new units.

Jaanch:
- Jaanch: Agar α = β = γ = 1 (SI), toh n₂ = 4.2 J milta hai ✅

---

### Question 11
State whether the following statements are True or False:
(a) A dimensionally incorrect equation can still be physically correct.
(b) Dimensional analysis can determine the numerical value of π in T = 2π √(l/g).

**Solution:**
- (a) **False** ❌ — Agar dimensions match nahi karti toh equation pakka galat hai.
- (b) **False** ❌ — Dimensional analysis dimensionless constants (jaise 2π) ki value nahi nikal sakta.

Jaanch:
- Jaanch: Dono statements dimensional analysis ke rules aur limitations se match karte hain ✅

---

### Question 12
Check the dimensional consistency of the capillary rise formula h = (2 S cos θ) / (r ρ g), where h is height, S is surface tension ([M T⁻²]), r is radius, ρ is density ([M L⁻³]), and g is acceleration due to gravity.

**Solution:**
LHS: [h] = [L].
RHS: 2 aur cos θ dimensionless hain.
Numerator: [S] = [M T⁻²].
Denominator: [r ρ g] = [L] [M L⁻³] [L T⁻²] = [M L⁻¹ T⁻²].
[RHS] = [M T⁻²] / [M L⁻¹ T⁻²] = [L].
Since [LHS] = [RHS], the formula is **dimensionally consistent**.

Jaanch:
- Jaanch: M aur T⁻² cancel ho gaye, sirf 1 / L⁻¹ = L bacha ✅

---

Ab jab tum kisi bhi physics equation ko dekho, toh pehle 5 second mein uski dimensional honesty check karna tumhari aadat ban jayegi!

**Agle topic mein:** Measurement kabhi 100% perfect nahi hota — [Errors in Measurement & Propagation of Errors](units-and-measurements-part4.md) mein hum accuracy, precision aur percentage error calculate karna seekhenge.
