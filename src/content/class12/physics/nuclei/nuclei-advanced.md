> **Class:** 12 | **Subject:** Physics | **Chapter 13:** Nuclei (Gehrai Mein — Advanced Level)

# Nuclei — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](nuclei.md) se [Topic 5](nuclei-part5.md)) mein humne nuclear size, binding energy, strong nuclear force, radioactive decay aur fission/fusion cover kiye. Ab is **Gehrai Mein** section mein hum chaar high-level nuclear-physics gems dekhenge — **Parallel Radioactive Decay Channels (λ_eff = λ₁ + λ₂)**, **Kinetic Energy Split in Alpha Decay (K_α = [(A − 4)/A] Q)**, **Secular Radioactive Equilibrium (λ₁ N₁ = λ₂ N₂)**, aur **Radiocarbon Dating (¹⁴C)**!

---

## Vansh ka Nuclear-Chronology Lab

**Vansh** ek nuclear-astrophysics & dating researcher hai. Uske lab notebook mein chaar zabardast shortcuts hain:
1. Agar ek radioactive nucleus **do alag raaston** (e.g., α aur β dono!) se decay kar sake (constants **λ₁, λ₂**), to total effective decay constant **λ_eff = λ₁ + λ₂** aur effective half-life **1 / T_eff = 1 / T₁ + 1 / T₂** hoti hai!
2. Stationary heavy nucleus (mass number **A**) ke α-decay mein release hui Q-energy ka almost poora hissa halke **α-particle** ko milta hai: **K_α = [ (A − 4) / A ] Q**!
3. Purane lakdi ke avsheshon ki umra **Radiocarbon Dating** (**t = (T_½ / 0.693) ln(R₀ / R)**) se hazaaron saal peeche tak naapi jaati hai!

---

## 1. Parallel (Simultaneous) Radioactive Decay

Maan lo koi nucleus do independent channels se decay hota hai (decay constants **λ₁, λ₂**; individual half-lives **T₁, T₂**):
- Total decay rate: −dN/dt = λ₁ N + λ₂ N = **(λ₁ + λ₂) N**!

```
   λ_eff = λ₁ + λ₂     |     1 / T_eff = 1 / T₁ + 1 / T₂     |     T_eff = (T₁ T₂) / (T₁ + T₂)
```

*(Note: Effective half-life **T_eff** hamesha dono T₁ aur T₂ se **CHHOTI** hoti hai!)*

---

## 2. Kinetic Energy Split in Alpha Decay (Momentum Conservation!)

Stationary parent nucleus (mass number **A**) decay hokar daughter nucleus (**A − 4**) aur α-particle (**4**) banata hai, aur total energy **Q** release hoti hai:
- Momentum conservation from rest: **|p_α| = |p_daughter| = p**!
- Kinetic energy **K = p² / (2 m)** ⟹ **K ∝ 1 / m** (halke particle ko zyada KE milti hai!):

```
   K_α = [ (A − 4) / A ] Q      |      K_daughter = (4 / A) Q
```

*(Check: K_α + K_daughter = Q! Heavy nucleus A = 200 ke liye α-particle ko **196/200 = 98%** of Q milta hai!)*

---

## 3. Successive Decay & Secular Equilibrium (A → B → C)

Maan lo Parent **A** (decay constant **λ₁**) decay hokar Daughter **B** (**λ₂**) banata hai, aur **B** aage stable **C** mein decay hota hai.
- B ke nuclei ki sankhya tab **maximum / steady (Secular Equilibrium)** hoti hai jab B ke banne ki dar (λ₁ N₁) uske tootne ki dar (λ₂ N₂) ke barabar ho jaaye:

```
   λ₁ N₁ = λ₂ N₂     ⟺     N₁ / N₂ = T₁ / T₂
```

---

## 4. Radiocarbon Dating (¹⁴C Clock)

Zinda ped-paudhon mein radioactive **¹⁴C** (half-life **T_½ ≈ 5730 years**) aur normal **¹²C** ka ratio constant rehta hai (initial activity **R₀**). Ped katne ke baad naya ¹⁴C aana bandh ho jaata hai aur activity **R = R₀ e^(−λt)** ghat'ti jaati hai:

```
   t = (1 / λ) ln(R₀ / R) = (T_½ / 0.693) ln(R₀ / R)
```

---

## 5 Deep Solved Problems

### Problem 1: Effective Half-Life of Parallel α and β Decay
A radioactive nucleus decays simultaneously by α-emission (half-life **T₁ = 6 hours**) and β-emission (half-life **T₂ = 3 hours**). Find the **effective half-life T_eff** of the nucleus, and the fraction remaining after **4 hours**.

**Solution:**
- **T_eff = (T₁ T₂) / (T₁ + T₂) = (6 × 3) / (6 + 3) = 18 / 9 = 2.0 hours**!
- 4 hours mein half-lives: n = 4 / 2.0 = **2** ⟹ Remaining fraction = (1/2)² = **1 / 4 (25%)**!
- Jaanch: 1/6 + 1/3 = 3/6 = 1/2 ⟹ T_eff = 2.0 hours ✅.

### Problem 2: Kinetic Energy of Alpha Particle in ²²⁰Rn Decay
A stationary **²²⁰₈₆Rn** nucleus undergoes α-decay releasing **Q = 6.60 MeV**. Find (a) the kinetic energy **K_α** of the emitted α-particle, and (b) the recoil kinetic energy **K_d** of the daughter nucleus (²¹⁶Po).

**Solution:**
- A = 220, A − 4 = 216:
- (a) **K_α = (216 / 220) × 6.60 = 216 × 0.03 = 6.48 MeV**.
- (b) **K_d = (4 / 220) × 6.60 = 4 × 0.03 = 0.12 MeV**.
- Jaanch: 6.48 + 0.12 = 6.60 MeV ✅.

### Problem 3: Secular Equilibrium Ratio
In a radioactive ore, Uranium-238 (**T₁ = 4.5 × 10⁹ years**) is in secular equilibrium with Radium-226 (**T₂ = 1500 years**). Find the ratio of the number of Uranium atoms to Radium atoms (**N₁ / N₂**) in the ore!

**Solution:**
- Secular equilibrium: **N₁ / N₂ = T₁ / T₂** = (4.5 × 10⁹) / (1.5 × 10³) = **3.0 × 10⁶** (30 lakh Uranium atoms par sirf 1 Radium atom!).
- Jaanch: 4.5 / 1.5 = 3; 10⁹ / 10³ = 10⁶ ✅.

### Problem 4: Radiocarbon Dating of an Ancient Wooden Boat
An ancient wooden boat sample shows a ¹⁴C activity of **2.0 decays/min per gram**, whereas freshly cut wood gives **16.0 decays/min per gram**. Estimate the age of the wooden boat (given T_½ of ¹⁴C = **5730 years**).

**Solution:**
- R / R₀ = 2.0 / 16.0 = **1 / 8 = (1/2)³** ⟹ **n = 3 half-lives**!
- Age **t = 3 × 5730 = 17,190 years**!
- Jaanch: 16 → 8 → 4 → 2 (3 half-lives × 5730 = 17,190 years) ✅.

### Problem 5: Constant Production Rate + Radioactive Decay
A radioactive isotope (decay constant **λ**) is being produced in a reactor at a constant rate **P** nuclei per second. Find the **maximum (saturation)** number of radioactive nuclei **N_max** that can accumulate!

**Solution:**
- Saturation tab aata hai jab production rate = decay rate: **P = λ N_max** ⟹ **N_max = P / λ = P τ**!
- Jaanch: At N = P/λ, dN/dt = P − λN = 0 ✅.

---

## 10 Advanced Practice Questions

1. A nucleus decays by two parallel modes with half-lives T₁ = 12 min and T₂ = 4 min. Find its effective half-life T_eff.
2. In Question 1, what fraction of the nuclei decays in **9 minutes**?
3. A stationary nucleus of mass number A = 200 undergoes α-decay with Q = 5.0 MeV. Find the kinetic energy of (a) the α-particle, and (b) the recoiling daughter nucleus.
4. If the α-particle emitted from a stationary nucleus of mass number A = 212 has kinetic energy K_α = 5.2 MeV, find the total Q-value of the decay.
5. In secular equilibrium, parent A (T₁ = 1000 years) decays into daughter B (T₂ = 2 years). Find the ratio N_A / N_B.
6. An archaeological bone sample has 1/4th the ¹⁴C activity of a living bone. Find its age (T_½ = 5730 years).
7. A radioactive isotope with λ = 1.0 × 10⁻⁴ s⁻¹ is produced at a steady rate of 5.0 × 10¹⁰ nuclei/s. What is the maximum number of nuclei that can build up?
8. Two radioactive samples X and Y have decay constants 5λ and λ respectively, and start with the same number of nuclei N₀. After what time t will the ratio of undecayed nuclei N_X / N_Y become 1 / e²?
9. What is the ratio of the speeds **v_α / v_daughter** in the α-decay of a stationary nucleus of mass number A = 204?
10. Show that in any radioactive sample, the time taken for the sample to decay from 100% to 50% equals the time taken to decay from 50% to 25%.

### Solutions

1. T_eff = (12 × 4) / (12 + 4) = 48 / 16 = **3.0 minutes**.
   Jaanch: 1/12 + 1/4 = 4/12 = 1/3 ⟹ 3.0 min ✅.

2. 9 min = 3 effective half-lives (n = 9/3 = 3): remaining = (1/2)³ = 1/8 ⟹ **decayed fraction = 1 − 1/8 = 7 / 8 (87.5%)**.
   Jaanch: 1 − 1/8 = 7/8 ✅.

3. (a) K_α = (196 / 200) × 5.0 = **4.90 MeV**.
   (b) K_d = (4 / 200) × 5.0 = **0.10 MeV**.
   Jaanch: 4.90 + 0.10 = 5.00 MeV ✅.

4. K_α = [(212 − 4) / 212] Q ⟹ 5.2 = (208 / 212) Q ⟹ **Q = 5.2 × (212 / 208) = 5.2 × (53 / 52) = 5.30 MeV**!
   Jaanch: 5.2 / 52 = 0.1; 0.1 × 53 = 5.30 MeV ✅.

5. N_A / N_B = T₁ / T₂ = 1000 / 2 = **500 : 1**.
   Jaanch: λ₁ N₁ = λ₂ N₂ ⟹ N₁/N₂ = T₁/T₂ ✅.

6. 1/4 = (1/2)² ⟹ n = 2 half-lives ⟹ **t = 2 × 5730 = 11,460 years**.
   Jaanch: 2 × 5730 = 11,460 ✅.

7. N_max = P / λ = (5.0 × 10¹⁰) / (1.0 × 10⁻⁴) = **5.0 × 10¹⁴ nuclei**.
   Jaanch: λ N_max = 5.0 × 10¹⁰ = P ✅.

8. N_X / N_Y = e^(−5λt) / e^(−λt) = e^(−4λt) = e^(−2) ⟹ 4 λ t = 2 ⟹ **t = 1 / (2 λ)**.
   Jaanch: 4 λ × (1/2λ) = 2 ✅.

9. Momentum conservation: m_α v_α = m_d v_d ⟹ **v_α / v_d = (A − 4) / 4 = 200 / 4 = 50 : 1**.
   Jaanch: Lighter α moves 50× faster ✅.

10. Since N(t) = N₀ e^(−λt), the time to halve from ANY starting value N₁ to N₁/2 is always **t = (1/λ) ln(N₁ / (N₁/2)) = (ln 2) / λ = T_½** — independent of the starting amount! Jaanch: Memoryless exponential property ✅.

---

Shabaash! Tumne Parallel Decay, Alpha-Decay Energy Split, Secular Equilibrium aur Radiocarbon Dating tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](nuclei-part5.md) dekho!
