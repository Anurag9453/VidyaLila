> **Class:** 11 | **Subject:** Physics | **Chapter 12:** Kinetic Theory (Gehrai Mein — Advanced Level)

# Kinetic Theory — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](kinetic-theory.md) se [Topic 5](kinetic-theory-part5.md)) mein humne Ideal Gas Law, v_rms, equipartition, aur mean free path cover kiye. Ab is **Gehrai Mein** section mein hum woh deep statistical-mechanics tools seekhenge jo sabse challenging gas-physics problems ko solve karte hain — **Maxwell–Boltzmann Speed Trio (v_mp, v_avg, v_rms)**, **Graham's Law of Effusion**, **Adiabatic Mixing of Two Different Gases at Different Temperatures (T_f)**, aur **Translational + Vibrational Energy Accounting**!

---

## Tilottama ka Statistical-Mechanics Research Desk

Tilottama ek statistical-mechanics researcher hai. Usne bataya ki ek gas mein sabhi molecules same speed se nahi chalte — unki speeds ek bell-like **Maxwell–Boltzmann curve** par faili hoti hain, jisme teen khaas speeds hoti hain:
1. **Most Probable Speed (v_mp = √(2RT/M)):** Curve ka sabse ooncha peak!
2. **Average (Mean) Speed (v_avg = √(8RT/(πM))):** Sabhi speeds ka seedha average!
3. **RMS Speed (v_rms = √(3RT/M)):** Pressure aur KE ke liye!

Hamesha: **v_mp < v_avg < v_rms** (ratio **1 : 1.128 : 1.224**)!

---

## 1. Maxwell–Boltzmann Speed Trio

```
  v_mp  = √( 2 R T / M )      ≈ 1.414 √(RT/M)
  v_avg = √( 8 R T / (π M) )  ≈ 1.596 √(RT/M)
  v_rms = √( 3 R T / M )      ≈ 1.732 √(RT/M)
```
**Order:** **v_mp < v_avg < v_rms** (Always!).
**Ratio:** **v_mp : v_avg : v_rms = √2 : √(8/π) : √3 ≈ 1 : 1.128 : 1.224**!
*(Note: Temperature badhne par Maxwell curve **right ko shift** hota hai aur **chhota + chauda (flatter)** ho jata hai kyunki total area under curve = 1 constant rehta hai!)*

---

## 2. Graham's Law of Effusion (Through a Tiny Pinhole)

Tiny pinhole se gas ke bahar nikalne ka rate (effusion rate r) average molecular speed v_avg ke proportional hota hai:
```
  r ∝ P / √(M T)     (At same P and T:   r₁ / r₂ = √(M₂ / M₁) = √(ρ₂ / ρ₁) !)
```

---

## 3. Equilibrium Temperature When Mixing Two Gases in an Insulated Container

Container 1 (n₁ moles, f₁ DOF, T₁) aur Container 2 (n₂ moles, f₂ DOF, T₂) ko insulated chamber mein valve khol kar milane par (ΔQ = 0, ΔW = 0 => **U_initial = U_final**):
n₁ (f₁/2) R T₁ + n₂ (f₂/2) R T₂ = (n₁ f₁/2 + n₂ f₂/2) R T_f  =>
```
  T_f = ( n₁ f₁ T₁ + n₂ f₂ T₂ ) / ( n₁ f₁ + n₂ f₂ )
```
*(Same type of gas ho toh f₁ = f₂ cancel => **T_f = (n₁ T₁ + n₂ T₂) / (n₁ + n₂)**!)*

---

## 6 Deep Solved Problems

### Problem 1: Finding v_mp, v_avg, and v_rms for a Gas Sample

For a gas at temperature T, its RMS speed is v_rms = 600 m/s. Find its: (a) Most Probable speed v_mp, (b) Average speed v_avg (take √2 = 1.414, √3 = 1.732, π = 3.14).

**Solution:**
- (a) v_mp = v_rms × √(2 / 3) = 600 × (1.414 / 1.732) ≈ **490 m/s**.
- (b) v_avg = v_rms × √(8 / (3 π)) = 600 × √(8 / 9.42) ≈ 600 × 0.921 ≈ **553 m/s**.

Jaanch:
- Jaanch: 490 (v_mp) < 553 (v_avg) < 600 (v_rms) ✅

---

### Problem 2: Mixing Helium (Monatomic) and Oxygen (Diatomic) at Different Temperatures

2 moles of Helium (f₁ = 3) at 300 K are mixed with 1 mole of Oxygen (f₂ = 5) at 520 K inside a rigid insulated vessel. Find the final equilibrium temperature T_f!

**Solution:**
T_f = (n₁ f₁ T₁ + n₂ f₂ T₂) / (n₁ f₁ + n₂ f₂)
= [ 2(3)(300) + 1(5)(520) ] / [ 2(3) + 1(5) ]
= (1800 + 2600) / (6 + 5) = 4400 / 11 = **400 K**!

Jaanch:
- Jaanch: He gained 6(100) = 600 (R/2); O₂ lost 5(120) = 600 (R/2) => exact energy balance! ✅

---

### Problem 3: Graham's Law of Effusion (H₂ vs O₂ Leak Rate)

A tiny pinhole in a tank leaks 20 mL of Oxygen (M = 32 g/mol) in 10 seconds. How much Hydrogen (M = 2 g/mol) will leak through the exact same pinhole in 10 seconds under identical temperature and pressure?

**Solution:**
r_H₂ / r_O₂ = √(M_O₂ / M_H₂) = √(32 / 2) = √16 = **4**.
Volume of H₂ leaked in 10 s = 4 × 20 mL = **80 mL**!

Jaanch:
- Jaanch: H₂ moves 4× faster than O₂ => effuses 4× faster ✅

---

### Problem 4: Discrete Sample — Comparing Mean Speed & RMS Speed

Four molecules have speeds 1, 2, 3, and 4 m/s. Find: (a) mean speed v_avg, (b) RMS speed v_rms, and verify v_rms > v_avg.

**Solution:**
- (a) v_avg = (1 + 2 + 3 + 4) / 4 = 10 / 4 = **2.50 m/s**.
- (b) v_rms = √((1 + 4 + 9 + 16) / 4) = √(30 / 4) = √7.5 ≈ **2.74 m/s**.
Indeed, **2.74 m/s > 2.50 m/s**!

Jaanch:
- Jaanch: Cauchy-Schwarz inequality guarantees v_rms ≥ v_avg always ✅

---

### Problem 5: Final Pressure After Mixing Two Vessels at Different P, V, T

Vessel 1 (P₁, V₁, T₁) and Vessel 2 (P₂, V₂, T₂) contain the SAME ideal gas (same f) and are connected by a narrow valve (rigid insulated walls). Find the final pressure P_f!

**Solution:**
Total internal energy U = (f/2) P V is conserved!
(f/2) P₁ V₁ + (f/2) P₂ V₂ = (f/2) P_f (V₁ + V₂)
Cancel (f/2):
```
  P_f = ( P₁ V₁ + P₂ V₂ ) / ( V₁ + V₂ )
```
*(Amazingly, P_f doesn't even depend on T₁ and T₂ separately — only on P₁V₁ and P₂V₂!)*

Jaanch:
- Jaanch: Check if V₁ = V₂ = V => P_f = (P₁ + P₂)/2 ✅

---

### Problem 6: Temperature Where v_mp of One Gas Equals v_rms of Another

At what temperature is the Most Probable speed (v_mp) of Helium (M = 4) equal to the RMS speed (v_rms) of Oxygen (M = 32) at 400 K?

**Solution:**
√(2 R T_He / 4) = √(3 R (400) / 32)
T_He / 2 = 1200 / 32 = 37.5 => **T_He = 75 K**!

Jaanch:
- Jaanch: 2(75)/4 = 37.5 = 3(400)/32 ✅

---

## 3 Advanced Mistakes

### Galti 1: Mixing different gases (He + O₂) mein T_f = (n₁ T₁ + n₂ T₂)/(n₁ + n₂) laga dena
- **Galat:** DOF f₁, f₂ ignore kar dena!
- **Sahi:** **C_v = (f/2) R** alag hai! Hamesha **T_f = (n₁ f₁ T₁ + n₂ f₂ T₂) / (n₁ f₁ + n₂ f₂)** lagao!

### Galti 2: v_mp > v_avg > v_rms ulta order yaad kar lena
- **Galat:** RMS sabse chhota hota hai!
- **Sahi:** Square karne se badi speeds ka weight zyada hota hai, isliye **v_rms (√3) > v_avg (√(8/π)) > v_mp (√2)**!

### Galti 3: Maxwell curve mein temperature badhane par peak ki height upar le jana
- **Galat:** Garam karne par peak aur uncha ho jata hai!
- **Sahi:** Total area under curve = 1 (100% molecules) fixed hai — jab curve right ko failta hai (bada v_mp), toh uski **peak height NEECHE (flatter)** ho jati hai!

---

## Practice Questions (Advanced)

### Question 1
Find the ratio v_rms / v_mp for any ideal gas at any temperature T.

**Solution:**
v_rms / v_mp = √(3 RT/M) / √(2 RT/M) = **√(3 / 2) ≈ 1.225**.

Jaanch:
- Jaanch: Independent of both T and M ✅

---

### Question 2
3 moles of Argon (f = 3) at 400 K are mixed with 1 mole of Nitrogen (f = 5) at 680 K in an insulated vessel. Find the final equilibrium temperature T_f.

**Solution:**
T_f = [3(3)(400) + 1(5)(680)] / [9 + 5] = (3600 + 3400) / 14 = 7000 / 14 = **500 K**.

Jaanch:
- Jaanch: Ar gained 9(100) = 900; N₂ lost 5(180) = 900 ✅

---

### Question 3
Gas A effuses through a pinhole twice as fast as Gas B at the same T and P. If the molar mass of Gas A is 16 g/mol, find the molar mass of Gas B.

**Solution:**
r_A / r_B = √(M_B / M_A) => 2 = √(M_B / 16) => 4 = M_B / 16 => **M_B = 64 g/mol** (e.g., SO₂!).

Jaanch:
- Jaanch: √(64 / 16) = √4 = 2 ✅

---

### Question 4
Three molecules have speeds 2, 4, and 6 m/s. Find the difference (v_rms - v_avg).

**Solution:**
- v_avg = (2 + 4 + 6) / 3 = **4.00 m/s**.
- v_rms = √((4 + 16 + 36) / 3) = √(56 / 3) ≈ √18.67 ≈ **4.32 m/s**.
Difference ≈ **0.32 m/s**.

Jaanch:
- Jaanch: v_rms (4.32) > v_avg (4.00) ✅

---

### Question 5
A 2 L vessel of Helium at 3 atm and 300 K is connected to a 3 L vessel of Helium at 8 atm and 600 K (rigid insulated walls). Find the final pressure P_f!

**Solution:**
Same gas => P_f = (P₁ V₁ + P₂ V₂) / (V₁ + V₂) = (3×2 + 8×3) / (2 + 3) = (6 + 24) / 5 = 30 / 5 = **6 atm**!

Jaanch:
- Jaanch: U_i ∝ 6 + 24 = 30 = 6 × 5 = U_f ✅

---

### Question 6
Find the kinetic energy of a molecule moving at the Most Probable speed v_mp in terms of k_B and T.

**Solution:**
v_mp² = 2 k_B T / m => K = (1/2) m v_mp² = **k_B T**! (Compare with K at v_rms = (3/2) k_B T!)

Jaanch:
- Jaanch: (1/2) m (2 k_B T / m) = k_B T ✅

---

### Question 7
At what temperature will the average speed v_avg of Nitrogen (M = 28) equal the RMS speed of Nitrogen at 300 K? (Take π = 3.14.)

**Solution:**
√(8 R T / (π M)) = √(3 R (300) / M) => 8 T / π = 900 => T = 900 π / 8 = 112.5 × 3.14 ≈ **353.3 K**.

Jaanch:
- Jaanch: Since v_avg < v_rms at same T, a higher T (353.3 K > 300 K) is needed for v_avg to match v_rms ✅

---

### Question 8
A gas mixture has 2 moles of CO₂ (linear, f = 5) at 300 K and 2 moles of CH₄ (non-linear, f = 6) at 520 K in an insulated chamber. Find T_f.

**Solution:**
T_f = [2(5)(300) + 2(6)(520)] / [10 + 12] = (3000 + 6240) / 22 = 9240 / 22 = **420 K**.

Jaanch:
- Jaanch: CO₂ gained 10(120) = 1200; CH₄ lost 12(100) = 1200 ✅

---

### Question 9
How does the peak height of the Maxwell–Boltzmann speed distribution curve change when the gas temperature is increased?

**Solution:**
The peak shifts to the **right** (higher v_mp ∝ √T) and its **height DECREASES** (flatter and broader) so that the total area under the probability curve stays equal to 1!

Jaanch:
- Jaanch: Conservation of total number of molecules keeps area = 1 ✅

---

### Question 10
A gas of molar mass M₁ takes 20 s to effuse through a pinhole, while an unknown gas of molar mass M₂ takes 40 s for the same volume under the same conditions. Find M₂ / M₁.

**Solution:**
Time t ∝ 1 / rate ∝ √M => t₂ / t₁ = √(M₂ / M₁) => 40 / 20 = 2 => **M₂ / M₁ = 4**.

Jaanch:
- Jaanch: 4× heavier gas moves half as fast and takes twice as long ✅

---

### Question 11
For an ideal gas, express the speed of sound v_sound = √(γ R T / M) as a multiple of v_rms = √(3 R T / M). Which is always faster — sound or gas molecules (v_rms)?

**Solution:**
v_sound / v_rms = **√(γ / 3)**!
Since even for monatomic gas γ = 5/3 < 3 (√(5/9) ≈ 0.745), **v_rms is ALWAYS faster than the speed of sound** (sound can never outrun the molecules carrying it)!

Jaanch:
- Jaanch: For air (γ = 1.4): v_sound ≈ 340 m/s < v_rms ≈ 500 m/s (√(1.4/3) ≈ 0.68) ✅

---

### Question 12
2 moles of a monatomic gas at T₀ are mixed adiabatically with 2 moles of a monatomic gas at 3 T₀. Find the final temperature T_f and check whether the total entropy increases.

**Solution:**
Equal moles, same gas => T_f = (T₀ + 3 T₀) / 2 = **2 T₀**.
Yes, spontaneous irreversible mixing of hot and cold gases **always increases total entropy**!

Jaanch:
- Jaanch: Average of T₀ and 3 T₀ is 2 T₀ ✅

---

Shabaash! Tumne Kinetic Theory ko Maxwell–Boltzmann speed curves, Graham's effusion, aur multi-gas thermal mixing tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](kinetic-theory-part5.md) dekho!
