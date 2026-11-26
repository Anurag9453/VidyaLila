# Chapter: Nuclei (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Mass-Energy and Nuclear Binding Energy](nuclei-part2.md)

---

## 92 Protons Ek Nanhe Nucleus mein Phate Kyun Nahi?

Chemistry chart par Uranium (**²³⁸₉₂U**) dekh kar **Salim** chaunk gaya: "Iske sirf 7 fm bade nucleus mein **92 positive protons** ek-doosre se chipak kar baithe hain! Coulomb's law ke hisaab se itni kam doori par unke beech hazaaron Newton ka repulsion hona chahiye tha — phir nucleus turant phat kyun nahi jaata?"

Teacher ma'am muskurayi: "Kyunki 1–2 fm ki behad chhoti doori par ek aisa zabardast force aata hai jo electrostatic repulsion se bhi **100 guna zyada takatwar** hota hai — use **Strong Nuclear Force** kehte hain! Aur jab koi bhaari nucleus thoda unstable ho jaata hai, to woh α, β ya γ radiation chhod kar **Radioactive Decay** karta hai!"

Class 10 mein tumne [Radioactivity](../../../class10/physics/radioactivity/radioactivity.md) mein α, β aur γ rays ka basic parichay padha tha. *(Safety Note: Radioactive materials sirf controlled facilities mein trained scientists dwara handle kiye jaate hain — yahan hum poora physics theory aur equations se samjhenge!)*

---

## Naye Shabd (New Words)

- **Strong Nuclear Force:** Nucleus ke andar protons aur neutrons ko baandh kar rakhne wala nature ka **sabse shaktishali** fundamental force.
- **Decay Constant (λ):** Per unit time kisi radioactive nucleus ke decay hone ki probability (unit: **s⁻¹**). Yeh temperature, pressure ya chemical reaction par **bilkul depend nahi** karta!
- **Activity (R = λ N):** Kisi radioactive sample mein per second hone wale decays ki ginti. SI unit **Becquerel (Bq)** = 1 decay/s (Purani unit: **1 Curie (Ci) = 3.7 × 10¹⁰ Bq**).
- **Half-Life (T_½):** Woh samay jismein kisi radioactive sample ke **aadhe (50%)** undecayed nuclei decay ho jaate hain: **T_½ = 0.693 / λ**.
- **Mean Life (τ):** Radioactive nuclei ki average umra: **τ = 1 / λ** (isliye **T_½ = 0.693 τ**, hamesha T_½ < τ!).

---

## 1. Strong Nuclear Force ki 4 Golden Properties

1. **Strongest Force in Nature:** Electrostatic repulsion se ~100 guna aur Gravity se ~10³⁸ guna zyada takatwar!
2. **Very Short Range (~2–3 fm):** 3 fm se zyada doori par yeh lagbhag **ZERO** ho jaata hai! (Yeh inverse-square law 1/r² follow **nahi** karta! Aur 0.8 fm se zyada paas aane par **repulsive** ho jaata hai taaki nucleus pichak na jaaye!)
3. **Charge-Independent:** Proton-proton, neutron-neutron aur proton-neutron ke beech **bilkul barabar** lagta hai!
4. **Saturation Property:** Har nucleon sirf apne bilkul padosi nucleons ke saath hi interact karta hai (isliye E_bn middle nuclei mein constant rehta hai!).

---

## 2. Radioactive Decay Types (Quick Class 12 Equations)

1. **Alpha (α) Decay (⁴₂He nikalta hai):** Z ghatta hai **2**, A ghatta hai **4**:
   ᴬ_Z X → ᴬ⁻⁴_(Z−2) Y + ⁴₂He + Q
2. **Beta-Minus (β⁻) Decay (n → p + e⁻ + ν̄):** Z badhta hai **+1**, A **unchanged** (electron + antineutrino nikalte hain!).
3. **Beta-Plus (β⁺) Decay (p → n + e⁺ + ν):** Z ghatta hai **−1**, A **unchanged** (positron + neutrino nikalte hain!).
4. **Gamma (γ) Decay:** Excited nucleus high-energy photon chhod kar ground state mein aata hai — **Z aur A dono unchanged**!

---

## 3. Law of Radioactive Decay & Half-Life

Kisi bhi pal decay hone ki dar (**−ΔN / Δt**) us samay bache hue undecayed nuclei (**N**) ke directly proportional hoti hai:

**− ΔN / Δt = λ N = R (Activity)**

Iska exponential solution (stated & checked on half-lives!):

**N = N₀ e^(−λ t)**   aur   **R = R₀ e^(−λ t)**

### Half-Life (T_½) aur Mean Life (τ):
- t = T_½ par N = N₀ / 2 ⟹ e^(λ T_½) = 2 ⟹ λ T_½ = ln 2 ≈ 0.693 ⟹

**T_½ = 0.693 / λ**   aur   **τ = 1 / λ**   ⟹   **T_½ = 0.693 τ**

### Super-Fast Half-Life Shortcut (n = t / T_½):
Agar samay **t**, half-life **T_½** ka **n** guna ho (**n = t / T_½**):
- **Bacha hua hissa (Remaining fraction):** **N / N₀ = (1 / 2)^n**
- **Decay hua hissa (Decayed fraction):** **1 − (1 / 2)^n**

---

## Solved Examples

### Example 1: Remaining vs Decayed Fraction After 3 Half-Lives
The half-life of a radioactive isotope is **T_½ = 10 days**. Starting with **N₀ = 8.0 × 10¹²** nuclei, find after **30 days**:
(a) the fraction remaining undecayed,
(b) the number of nuclei remaining, and
(c) the fraction that has decayed.

**Hal (Solution):**
- Number of half-lives: **n = t / T_½ = 30 / 10 = 3**.
- (a) Remaining fraction: **N / N₀ = (1/2)³ = 1/8 = 12.5%**.
- (b) Remaining nuclei: **N = (1/8) × (8.0 × 10¹²) = 1.0 × 10¹²**.
- (c) Decayed fraction: **1 − 1/8 = 7/8 = 87.5%**.
- **Jaanch:** 1/8 + 7/8 = 1; 8 × 10¹² → 4 → 2 → 1 × 10¹² ✅.

### Example 2: Decay Constant, Mean Life & Activity
A radioactive sample has half-life **T_½ = 693 seconds**. Calculate (a) its decay constant **λ**, (b) its mean life **τ**, and (c) its activity **R** when it contains **N = 5.0 × 10¹⁰** undecayed nuclei.

**Hal (Solution):**
- (a) **λ = 0.693 / T_½ = 0.693 / 693 = 1.0 × 10⁻³ s⁻¹**.
- (b) **τ = 1 / λ = 1 / 10⁻³ = 1000 s** (note: τ = 1000 s > T_½ = 693 s!).
- (c) **R = λ N = (1.0 × 10⁻³) × (5.0 × 10¹⁰) = 5.0 × 10⁷ Bq**.
- **Jaanch:** 0.693 × 1000 = 693 s ✅; 10⁻³ × 5×10¹⁰ = 5×10⁷ Bq ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Sochna ki 2 half-lives ke baad 100% sample khatam ho jaata hai:**
   - *Galat:* 1 half-life mein 50% gaya, to 2 half-lives mein 50% + 50% = 100% gaya!
   - *Sahi:* Har half-life mein **bache hue** ka aadha jaata hai! 1 T_½ → 50% bacha; **2 T_½ → 25% (1/4) bacha** (75% decay hua)!
2. **Remaining fraction (N/N₀) aur Decayed fraction (1 − N/N₀) ko ulta kar dena:**
   - *Galat:* Sawaal "fraction decayed" pooche aur 1/8 likh dena!
   - *Sahi:* (1/2)^n **bache hue (undecayed)** nuclei deta hai; decayed = **1 − (1/2)^n**!
3. **Nuclear force ko inverse-square (1/r²) force bol dena:**
   - *Galat:* Gravity aur Coulomb's law ki tarah nuclear force bhi 1/r² hota hai.
   - *Sahi:* Nuclear force **very short-range (~2–3 fm)** hai aur 3 fm ke baad turant zero ho jaata hai!

---

## Quick Recap

| Concept | Formula / Fact | Key Detail |
|---|---|---|
| Strong Nuclear Force | Strongest, short-range (~2–3 fm), charge-independent, saturated | Repulsive below ~0.8 fm |
| Decay Law & Activity | N = N₀ e^(−λt); **R = λ N** (SI unit: Bq) | λ is independent of temperature/pressure |
| Half-Life & Mean Life | **T_½ = 0.693 / λ**; **τ = 1 / λ**; T_½ = 0.693 τ | Always **T_½ < τ** |
| After n Half-Lives | Remaining: **(1/2)^n**; Decayed: **1 − (1/2)^n** | n = t / T_½ |

---

## Practice Questions

1. State four characteristic properties of the strong nuclear force.
2. Why does the strong nuclear force become repulsive at distances less than about 0.8 fm?
3. Write the general nuclear equations for (a) alpha decay, and (b) beta-minus decay.
4. Define half-life (T_½) and mean life (τ) of a radioactive substance, and write the relation between them.
5. The half-life of a radioactive element is 5 years. What fraction of the original sample remains undecayed after 20 years? What fraction has decayed?
6. A radioactive sample has an initial activity of 1600 Bq. After 24 hours, its activity drops to 100 Bq. Calculate its half-life.
7. Find the decay constant λ and mean life τ of a radioactive isotope whose half-life is 1386 seconds.
8. A sample contains 2.0 × 10¹⁴ radioactive nuclei with decay constant λ = 4.0 × 10⁻⁴ s⁻¹. Calculate its initial activity in Becquerels (Bq).
9. State whether True or False: Heating a radioactive substance to a very high temperature increases its rate of radioactive decay.
10. What is the activity of 1 Curie (1 Ci) in Becquerels (Bq)?

### Answers

1. (i) Nature ka **sabse strong** force; (ii) **Very short range** (~2–3 fm); (iii) **Charge-independent** (p-p, n-n, p-n same); (iv) **Saturation property** (sirf padosi nucleons se lagta hai).

2. 0.8 fm se kam doori par strong nuclear force repulsive ho jaata hai taaki nucleons ek-doosre mein dhans kar nucleus ko **collapse (pichka)** na dein — isi wajah se nuclear density constant rehti hai!

3. (a) **α-decay:** ᴬ_Z X → ᴬ⁻⁴_(Z−2) Y + ⁴₂He.
   (b) **β⁻-decay:** ᴬ_Z X → ᴬ_(Z+1) Y + ⁰₋₁e + ν̄ (antineutrino).

4. **T_½:** Aadhe nuclei decay hone ka samay (0.693/λ). **τ:** Nuclei ki average umra (1/λ). Relation: **T_½ = 0.693 τ**.

5. n = 20 / 5 = **4 half-lives**.
   Remaining fraction = (1/2)⁴ = **1 / 16** (6.25%).
   Decayed fraction = 1 − 1/16 = **15 / 16** (93.75%).
   Jaanch: 1/16 + 15/16 = 1 ✅.

6. R / R₀ = 100 / 1600 = 1 / 16 = (1/2)⁴ ⟹ **n = 4 half-lives** in 24 hours!
   **T_½ = 24 / 4 = 6 hours**.
   Jaanch: 1600 → 800 → 400 → 200 → 100 (4 steps × 6 h = 24 h) ✅.

7. λ = 0.693 / 1386 = **5.0 × 10⁻⁴ s⁻¹**.
   τ = 1 / λ = 1 / (5.0 × 10⁻⁴) = **2000 s**.
   Jaanch: 0.693 × 2000 = 1386 s ✅.

8. R = λ N = (4.0 × 10⁻⁴) × (2.0 × 10¹⁴) = **8.0 × 10¹⁰ Bq**.
   Jaanch: 4 × 2 = 8; 10⁻⁴ × 10¹⁴ = 10¹⁰ ✅.

9. **False ❌.** Radioactive decay ek pure **nuclear** phenomenon hai — temperature, pressure ya chemical reactions ka λ ya T_½ par **koi asar nahi** padta!

10. **1 Curie (Ci) = 3.7 × 10¹⁰ Bq** (decays per second).

---

Ab tum Strong Nuclear Force, Radioactive Decay Law aur Half-Life ke saare concepts master kar chuke ho!

**Agle topic mein:** Nucleus ke andar chhupi athaah urja ko bahar nikaalne ke do mahaan tareeke — **Nuclear Fission** (Power Plants) aur **Nuclear Fusion** (Sooraj aur Taaron ki Shakti) seekhenge!
