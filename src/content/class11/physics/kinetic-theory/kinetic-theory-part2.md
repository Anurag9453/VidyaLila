> **Class:** 11 | **Subject:** Physics | **Chapter 12:** Kinetic Theory (Part 2)

# Kinetic Theory Pressure, Temperature & RMS Speed

> **Pichle topic se:** [Molecular Picture & Ideal Gases](kinetic-theory.md) mein humne P V = N k_B T dekha. Par ek khali dikhne wale bartan ke andar gas deewaron par pressure kyun lagati hai? Kyunki har second **arbo-kharbo molecules** deewar se ~500 m/s ki speed se takra kar rebound karte hain! Chalo Newton's laws se **P = (1/3) ρ v_rms²** derive karte hain!

---

## Damayanti ka Molecular-Beam & Vacuum Chamber

Damayanti ek vacuum-chamber physicist hai. Usne bataya ki jis kamre mein tum abhi baithe ho, wahan Nitrogen (N₂) ke molecules lagbhag **517 m/s** (~1860 km/h — ek fighter jet se bhi tez!) ki RMS speed se idhar-udhar bhaag rahe hain, aur halka Hydrogen (H₂) lagbhag **1930 m/s** se!

Sabse chaukane wali baat: room temperature (300 K) par chahe **heavy Oxygen** ho ya **light Hydrogen**, dono ke ek molecule ki **average translational kinetic energy bilkul EXACT SAME ((3/2) k_B T)** hoti hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Root Mean Square Speed (v_rms) | Sabhi molecules ki speeds ke squares ke average ka square root: **v_rms = √( (v₁² + v₂² + ... + v_N²) / N )** |
| Kinetic Pressure Formula | **P = (1/3) ρ v_rms² = (1/3) (N m / V) v_rms² = (2/3) (E_trans / V)** |
| Kinetic Interpretation of Temperature | **Average translational KE per molecule = (1/2) m v_rms² = (3/2) k_B T** (sirf T par depend, gas ke mass par NAHI!) |
| RMS Speed Formula | **v_rms = √( 3 R T / M ) = √( 3 k_B T / m ) = √( 3 P / ρ )** |

---

## 1. Derivation of Gas Pressure (P = (1/3) ρ v_rms²)

Side **L** (volume V = L³) ke cube mein **N** molecules (mass **m** each) randomly chal rahe hain:
1. Ek molecule (+v_x se right wall par elastic takkar) ka momentum change = **2 m v_x**.
2. Wapas same wall par lautne ka round-trip time Δt = **2 L / v_x**.
3. Ek molecule dwara wall par average force: F₁ = Δp / Δt = (2 m v_x) / (2 L / v_x) = **m v_x² / L**.
4. N molecules ka total force = (m / L) Σ v_xᵢ² = (N m / L) <v_x²>.
5. Isotropic random motion mein <v_x²> = <v_y²> = <v_z²> = **(1/3) v_rms²**!
6. Area A = L² se divide karne par Pressure:
```
  P = F / L² = (1/3) (N m / L³) v_rms² = (1/3) ρ v_rms²
```

---

## 2. Kinetic Interpretation of Temperature & RMS Speed

P V = (1/3) N m v_rms² = (2/3) N [ (1/2) m v_rms² ] ko Ideal Gas Law **P V = N k_B T** se equate karo:
```
  Average translational KE per molecule:   K_avg = (1/2) m v_rms² = (3/2) k_B T
  Translational KE of 1 mole:              E_mole = (3/2) R T
  Translational KE of n moles:             E = (3/2) n R T
```
Isse **RMS Speed**:
```
  v_rms = √( 3 k_B T / m ) = √( 3 R T / M ) = √( 3 P / ρ )
```
*(Note: Temperature **0 K** par v_rms = 0 — absolute zero par saara classical molecular motion ruk jata hai!)*

---

## Solved Examples

### Example 1: RMS Speed of Hydrogen vs Oxygen at 300 K

Find the ratio of the RMS speeds of Hydrogen (M = 2 g/mol) and Oxygen (M = 32 g/mol) at the same temperature 300 K. Also compare their average translational kinetic energies per molecule!

**Solution:**
- v_rms = √(3 R T / M) ∝ 1 / √M => v_rms(H₂) / v_rms(O₂) = √(32 / 2) = √16 = **4 : 1** (Hydrogen moves 4× faster!).
- Average translational KE per molecule = (3/2) k_B T depends ONLY on T => **Ratio = 1 : 1**!

Jaanch:
- Jaanch: Lighter mass moves 4× faster so (1/2) m v² stays identical: (1/16) × 4² = 1 ✅

---

### Example 2: Calculating Exact RMS Speed of Nitrogen at 300 K

Calculate the RMS speed of Nitrogen molecules (M = 28 g/mol = 0.028 kg/mol) at 27 °C (300 K, R = 8.31 J mol⁻¹ K⁻¹).

**Solution:**
v_rms = √(3 × 8.31 × 300 / 0.028) = √(7479 / 0.028) = √(267,107) ≈ **517 m/s**.

Jaanch:
- Jaanch: 517² ≈ 267,289; matches ~500 m/s for air molecules at room temperature ✅

---

### Example 3: Temperature at Which RMS Speed Doubles

At what Celsius temperature will the RMS speed of a gas be **double** its value at 27 °C (300 K)?

**Solution:**
v_rms ∝ √T => to double v_rms, Kelvin temperature T must become **2² = 4 times**!
T₂ = 4 × 300 = 1200 K => t₂ = 1200 - 273 = **927 °C**!

Jaanch:
- Jaanch: √(1200 / 300) = √4 = 2 ✅

---

### Example 4: Pressure & Translational KE Per Unit Volume

A container holds an ideal gas at pressure P = 3 × 10⁵ Pa. Find its translational kinetic energy per unit volume (in J/m³).

**Solution:**
Since P = (2/3) (E_trans / V) => **E_trans / V = (3/2) P**!
E_trans / V = (3/2)(3 × 10⁵) = **4.5 × 10⁵ J/m³**.

Jaanch:
- Jaanch: (2/3)(4.5 × 10⁵) = 3.0 × 10⁵ Pa = P ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Same temperature par bhari gas (O₂) ki average molecular KE zyada maan lena
- **Galat:** O₂ ka mass H₂ se 16 guna zyada hai toh uski KE bhi zyada hogi!
- **Sahi:** Average translational KE per molecule **= (3/2) k_B T** sirf temperature par depend karti hai — **dono ki EXACT EQUAL** hoti hai!

### Galti 2: v_rms double karne ke liye Kelvin temperature double (2T) kar dena
- **Galat:** 300 K se 600 K karne par v_rms double ho jayegi!
- **Sahi:** v_rms ∝ √T => double speed ke liye **4 T = 1200 K** chahiye!

### Galti 3: v_rms = √(3RT/M) mein M ko grams/mol mein rakh dena
- **Galat:** N₂ ke liye M = 28 rakh kar v_rms = 16 m/s nikal dena!
- **Sahi:** SI units mein **M = 0.028 kg/mol** rakho => **517 m/s**!

---

## Quick Recap

- **Pressure:** P = (1/3) ρ v_rms² = (2/3) (E_trans / V).
- **Kinetic Temperature:** K_avg per molecule = (3/2) k_B T (independent of mass!).
- **RMS Speed:** v_rms = √(3RT/M) = √(3P/ρ) (∝ √(T / M)).

---

## Practice Questions

*(Take R = 8.31 J mol⁻¹ K⁻¹, k_B = 1.38 × 10⁻²³ J/K unless stated otherwise.)*

### Question 1
Find the RMS speed of a gas of density 1.2 kg/m³ at pressure 1.0 × 10⁵ Pa.

**Solution:**
v_rms = √(3 P / ρ) = √(3 × 10⁵ / 1.2) = √(2.5 × 10⁵) = **500 m/s**.

Jaanch:
- Jaanch: (1/3)(1.2)(500²) = 0.4 × 250,000 = 1.0 × 10⁵ Pa ✅

---

### Question 2
Find the average translational kinetic energy of a single gas molecule at 27 °C (300 K).

**Solution:**
K_avg = (3/2)(1.38 × 10⁻²³)(300) = 1.5 × 414 × 10⁻²³ = **6.21 × 10⁻²¹ J**.

Jaanch:
- Jaanch: 1.5 × 1.38 = 2.07; 2.07 × 3 = 6.21 × 10⁻²¹ J ✅

---

### Question 3
Find the ratio of RMS speeds of Helium (M = 4 g/mol) and Methane (M = 16 g/mol) at the same temperature.

**Solution:**
v_He / v_CH₄ = √(16 / 4) = √4 = **2 : 1**.

Jaanch:
- Jaanch: Lighter He moves twice as fast as CH₄ ✅

---

### Question 4
At what temperature will the RMS speed of Oxygen molecules (M = 32 g/mol) be equal to the RMS speed of Hydrogen molecules (M = 2 g/mol) at 27 °C (300 K)?

**Solution:**
T_O₂ / M_O₂ = T_H₂ / M_H₂ => T_O₂ / 32 = 300 / 2 = 150 => **T_O₂ = 4800 K (4527 °C)**.

Jaanch:
- Jaanch: 16× heavier mass needs 16× higher Kelvin temperature (16 × 300 = 4800 K) ✅

---

### Question 5
Find the total translational kinetic energy of 2 moles of an ideal gas at 400 K (take R = 8.3 J/mol K).

**Solution:**
E = (3/2) n R T = (3/2)(2)(8.3)(400) = 3 × 3320 = **9960 J (9.96 kJ)**.

Jaanch:
- Jaanch: 3 × 8.3 × 400 = 9960 J ✅

---

### Question 6
If the temperature of an ideal gas in a rigid container increases from 27 °C to 327 °C, by what factor does its RMS speed increase?

**Solution:**
T₁ = 300 K, T₂ = 600 K => v₂ / v₁ = √(600 / 300) = **√2 ≈ 1.414**.

Jaanch:
- Jaanch: Kelvin T doubled => v_rms scales by √2 ✅

---

### Question 7
Find the RMS speed of 5 gas molecules moving at speeds 2, 3, 4, 5, and 6 m/s.

**Solution:**
v_rms = √((4 + 9 + 16 + 25 + 36) / 5) = √(90 / 5) = **√18 = 3 √2 ≈ 4.24 m/s**.

Jaanch:
- Jaanch: Mean speed = 4 m/s; RMS speed (4.24) is always ≥ mean speed ✅

---

### Question 8
A gas has pressure 2 × 10⁵ Pa in a 3 m³ container. Find the total translational kinetic energy of all gas molecules inside.

**Solution:**
E_trans = (3/2) P V = (3/2)(2 × 10⁵)(3) = **9 × 10⁵ J (900 kJ)**.

Jaanch:
- Jaanch: P = (2/3) E / V => E = 1.5 P V = 900 kJ ✅

---

### Question 9
Why does the Moon have no atmosphere while Earth retains Nitrogen and Oxygen?

**Solution:**
Moon ki escape velocity sirf **2.38 km/s** hai, jabki room temperature par H₂ (~1.9 km/s) aur fast tail of N₂/O₂ molecules ki thermal speeds escape velocity ke paas ya upar pahunch jati hain — isliye gases space mein ud gayin! Earth ki v_e = 11.2 km/s bahut badi hai.

Jaanch:
- Jaanch: Earth retains N₂ (0.5 km/s << 11.2 km/s), though even Earth slowly loses tiny H₂/He! ✅

---

### Question 10
If the pressure of an ideal gas is doubled at **constant temperature**, what happens to the RMS speed of its molecules?

**Solution:**
v_rms = √(3 R T / M) depends ONLY on temperature T! At constant T, **v_rms remains UNCHANGED**! (Because ρ also doubles when P doubles, so P/ρ stays constant!)

Jaanch:
- Jaanch: Boyle's law: P/ρ = RT/M = constant at fixed T ✅

---

### Question 11
State whether the following statements are True or False:
(a) At 0 °C, all molecular motion of an ideal gas completely stops.
(b) At the same temperature, a Helium atom and a Nitrogen molecule have the same average translational kinetic energy.

**Solution:**
- (a) **False** ❌ — Molecular motion stops at **0 K (-273.15 °C)**, NOT at 0 °C (273 K)!
- (b) **True** ✅ — Both have average translational KE = (3/2) k_B T!

Jaanch:
- Jaanch: Verified from Section 2 ✅

---

### Question 12
At what temperature will the average translational kinetic energy of a gas molecule be equal to 1 eV (1.6 × 10⁻¹⁹ J)?

**Solution:**
(3/2) k_B T = 1.6 × 10⁻¹⁹ => T = (2 × 1.6 × 10⁻¹⁹) / (3 × 1.38 × 10⁻²³) = (3.2 / 4.14) × 10⁴ ≈ **7730 K**.

Jaanch:
- Jaanch: 1 eV corresponds to ~7700 K (hotter than the Sun's surface!) ✅

---

Pressure aur RMS speed ab tumhare liye bilkul clear hain!

**Agle topic mein:** Chapter 11 mein humne jo C_v = (3/2) R (monatomic) aur (5/2) R (diatomic) use kiya tha, woh aaya kahan se? Chalo dekhte hain [Law of Equipartition of Energy & Degrees of Freedom](kinetic-theory-part3.md)!
