> **Class:** 12 | **Subject:** Chemistry | **Chapter 3:** Chemical Kinetics (Part 4)

# Temperature Dependence, Arrhenius Equation and Collision Theory

> **Pichle topic mein:** Humne [Integrated Rate Equations and Half-Life](chemical-kinetics-part3.md) mein zero-order aur first-order reactions ke time-concentration equations aur half-life seekhe. Ab dekhenge ki temperature badhane par rate constant **k** itni tezi se kyun badhta hai — **Arrhenius Equation** aur **Collision Theory** ke through.

---

Rajiv ne garmiyon mein dekha ki agar doodh kitchen counter par 35°C par chhod diya jaye toh 4 ghante mein phat jata hai, jabki fridge mein 5°C par wahi doodh 3 din tak taaza rehta hai. Rajiv ne socha, "Temperature toh sirf 30°C badha, Kelvin mein 278 K se 308 K — matlab sirf 10% change! Phir reaction ki speed 10 guna se bhi zyada kaise badh gayi?"

Iska jawab molecules ki average energy mein nahi, balki un **high-energy molecules** ke fraction mein chhupa hai jo ek energy barrier (Activation Energy) paar kar paate hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Activation Energy (Eₐ)** | Reactants ko minimum kitni extra energy chahiye taki woh activated complex banakar products mein badal sakein |
| **Threshold Energy (E_T)** | Woh minimum total energy jo colliding molecules ke paas honi chahiye effective collision ke liye (E_T = E_reactants + Eₐ) |
| **Activated Complex (Transition State)** | Reactants aur products ke beech ki high-energy, unstable intermediate state |
| **Arrhenius Equation** | Rate constant aur temperature ke beech ka exponential relation: k = A e⁻ᴱᵃ/ᴿᵀ |
| **Pre-exponential Factor (A)** | Frequency factor (Arrhenius factor), jo collisions ki frequency aur proper orientation ko darshata hai (units same as k) |
| **Effective Collision** | Woh collision jismein molecules ke paas energy ≥ Eₐ ho AUR proper spatial orientation ho |
| **Steric Factor (P)** | Probability factor jo batata hai ki kitne fraction of collisions sahi orientation mein ho rahe hain |

---

## 1. Temperature Effect & Maxwell–Boltzmann Distribution

Thumb rule: Bahut saare reactions mein har **10°C (ya 10 K)** temperature badhane par rate constant **k** lagbhag **double (2 se 3 times)** ho jata hai.
Temperature coefficient = k_(T+10) / k_T ≈ 2 to 3.

Kyun? Ludwig Boltzmann aur James Clerk Maxwell ke kinetic energy distribution curve ke mutabik:
- Kisi bhi temperature T par saare molecules ki energy same nahi hoti; peak par **most probable kinetic energy** hoti hai.
- Temperature T se T + 10 karne par curve thoda right shift hota hai aur peak neeche aa jata hai, lekin **Eₐ ke aage ka shaded area (molecules with E ≥ Eₐ) lagbhag DOUBLE ho jata hai!**

```
Fraction of Molecules vs Kinetic Energy

Fraction ^
         │    /\  T (lower temp)
         │   /  \___   T + 10 K (higher temp)
         │  /    \  \___
         │ /      \     \___   <-- Area beyond Ea nearly doubles!
         │/        \     │  \____
         +---------------+----------> Kinetic Energy
                         Ea
```

---

## 2. Arrhenius Equation

Svante Arrhenius ne rate constant k ka temperature T (Kelvin mein) ke saath exact relation diya:

**k = A e⁻ᴱᵃ/ᴿᵀ**

Yahan:
- **A** = Frequency factor / Pre-exponential factor (units = same as k)
- **Eₐ** = Activation energy (in J mol⁻¹; R = 8.314 J K⁻¹ mol⁻¹)
- **e⁻ᴱᵃ/ᴿᵀ** = Boltzmann factor = fraction of molecules having kinetic energy ≥ Eₐ

### Logarithmic Form (Graph):
Natural log: **ln k = ln A − Eₐ / (RT)**
Base-10 log: **log k = log A − Eₐ / (2.303 R T)**

- **Plot of ln k vs 1/T:** Straight line with **slope = −Eₐ / R** and y-intercept = ln A.
- **Plot of log k vs 1/T:** Straight line with **slope = −Eₐ / (2.303 R)** and y-intercept = log A.

### Two-Temperature Form (Most Used for Numericals):
Temperature T₁ par k₁ aur T₂ par k₂ hone par:
**log (k₂ / k₁) = [ Eₐ / (2.303 R) ] × [ (T₂ − T₁) / (T₁ T₂) ]**

---

## 3. Effect of a Catalyst

Catalyst ek **alternate reaction pathway** deta hai jiski **Activation Energy (Eₐ) kam** hoti hai.

```
Potential Energy Diagram

Energy ^
       │        ___  Uncatalysed path (higher Ea)
       │       /   \
       │      /  _  \  Catalysed path (lower Ea')
       │     /  / \  \
       │ ___/  /   \  \___
       │ Reactants         Products (ΔH unchanged!)
       +------------------------------> Reaction Coordinate
```

Important points about a catalyst:
1. Catalyst Eₐ kam karta hai, isliye **forward aur backward dono rates barabar factor se badhte hain**.
2. Catalyst **ΔG (Gibbs energy)** aur **ΔH (enthalpy)** ko **nahi badalta**.
3. Catalyst **equilibrium constant (K)** ko nahi badalta — sirf equilibrium jaldi achieve karwata hai.
4. Catalyst sirf spontaneous reactions ko fast karta hai, non-spontaneous reaction ko start nahi kar sakta.

---

## 4. Collision Theory of Chemical Reactions

Max Trautz aur William Lewis ki Collision Theory ke mutabik, reaction hone ke liye reactant molecules ka collide karna zaroori hai, par har collision product nahi banata!

Sirf **Effective Collisions** product banate hain, jinke liye **2 barriers** paar karne hote hain:
1. **Energy Barrier:** Colliding molecules ki kinetic energy ≥ Eₐ (threshold energy) honi chahiye.
2. **Orientation Barrier:** Molecules ko sahi spatial angle par takrana chahiye (jaise CH₃Br + OH⁻ → CH₃OH + Br⁻ mein OH⁻ ko carbon par Br⁻ ke opposite side se attack karna hota hai).

Modified Arrhenius / Collision Theory equation:
**Rate = P × Z_AB × e⁻ᴱᵃ/ᴿᵀ**
Yahan:
- **Z_AB** = Collision frequency (number of collisions per second per unit volume)
- **P** = Steric / probability factor (accounts for proper orientation)
- **e⁻ᴱᵃ/ᴿᵀ** = Fraction of collisions with energy ≥ Eₐ

Limitation of simple Collision Theory: Yeh molecules ko hard spheres maanta hai aur unke structural aspects ko ignore karta hai.

---

## Solved Examples

### Example 1: Calculating Eₐ from Two Temperatures
The rate constant of a reaction doubles when temperature is raised from 300 K to 310 K. Calculate the activation energy Eₐ in kJ mol⁻¹. (R = 8.314 J K⁻¹ mol⁻¹, log 2 = 0.3010)

**Solution:**
Given: T₁ = 300 K, T₂ = 310 K, k₂ / k₁ = 2.
log(k₂ / k₁) = [ Eₐ / (2.303 R) ] × [ (T₂ − T₁) / (T₁ T₂) ]
0.3010 = [ Eₐ / (2.303 × 8.314) ] × [ 10 / (300 × 310) ]
2.303 × 8.314 = 19.147 J K⁻¹ mol⁻¹
300 × 310 = 93000 K²

Eₐ = (0.3010 × 19.147 × 93000) / 10
= 0.3010 × 19.147 × 9300
= 5.7632 × 9300 = 53598 J mol⁻¹ = **53.6 kJ mol⁻¹**.

Jaanch: Typical organic/inorganic reactions whose rate doubles per 10 K near 300 K have Eₐ ≈ 50–55 kJ mol⁻¹. Check: 53598 / (19.147 × 9300) = 53598 / 178067 = 0.3010 = log 2 ✅

---

### Example 2: Finding k₂ at Higher Temperature
For a first-order reaction, Eₐ = 76.59 kJ mol⁻¹ and k₁ = 2.0 × 10⁻⁴ s⁻¹ at 300 K. Find k₂ at 320 K. (R = 8.314 J K⁻¹ mol⁻¹)

**Solution:**
Eₐ = 76590 J mol⁻¹, 2.303 R = 19.147 J K⁻¹ mol⁻¹.
Eₐ / (2.303 R) = 76590 / 19.147 = 4000 K.
(T₂ − T₁) / (T₁ T₂) = (320 − 300) / (300 × 320) = 20 / 96000 = 1 / 4800 K⁻¹.

log(k₂ / k₁) = 4000 / 4800 = 5 / 6 = 0.8333.
k₂ / k₁ = antilog(0.8333) = 10⁰·⁸³³³ = 6.813.
k₂ = 6.813 × 2.0 × 10⁻⁴ = **1.36 × 10⁻³ s⁻¹**.

Jaanch: Temperature increased by 20 K → rate constant increased by ~6.8 times (about 2.6× per 10 K, matching higher Eₐ = 76.6 kJ mol⁻¹) ✅

---

### Example 3: Activation Energy from Slope of log k vs 1/T
The plot of log k vs 1/T for a reaction is a straight line with slope = −4000 K. Calculate Eₐ in kJ mol⁻¹.

**Solution:**
Slope of log k vs 1/T = −Eₐ / (2.303 R) = −4000 K.
Eₐ = 4000 × 2.303 × 8.314 = 4000 × 19.147 = 76588 J mol⁻¹ = **76.59 kJ mol⁻¹**.

Jaanch: −76588 / (2.303 × 8.314) = −4000 K ✅

---

### Example 4: Comparing Arrhenius Equation Directly
For a reaction, k = (5.0 × 10¹⁴ s⁻¹) e^(−25000 K / T). Find: (a) frequency factor A, (b) activation energy Eₐ in kJ mol⁻¹.

**Solution:**
Compare with k = A e⁻ᴱᵃ/ᴿᵀ:
(a) **A = 5.0 × 10¹⁴ s⁻¹**.
(b) Eₐ / R = 25000 K → Eₐ = 25000 × 8.314 = 207850 J mol⁻¹ = **207.85 kJ mol⁻¹**.

Jaanch: 207850 / 8.314 = 25000 K ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Temperature ko Celsius mein rakh dena:**
   - *Galat:* T₁ = 27 aur T₂ = 37 rakh kar (37 − 27) / (27 × 37) nikalna.
   - *Sahi:* T₁ − T₂ same hota hai, par denominator **T₁ × T₂** Kelvin mein hona chahiye! 27°C = 300 K aur 37°C = 310 K!

2. **Eₐ ko kJ mein aur R ko J mein mix kar dena:**
   - *Galat:* Eₐ = 50 (kJ) aur R = 8.314 (J) ek saath divide kar dena.
   - *Sahi:* Dono ko **Joules** mein rakho (Eₐ = 50000 J mol⁻¹, R = 8.314 J K⁻¹ mol⁻¹) ya dono ko kJ mein!

3. **Catalyst se ΔH ya equilibrium constant badalna maan lena:**
   - *Galat:* Catalyst dalne se zyada product banta hai.
   - *Sahi:* Catalyst sirf Eₐ kam karke equilibrium jaldi laata hai; ΔH, ΔG aur K bilkul nahi badalte.

---

## Quick Recap

- **Arrhenius Equation:** k = A e⁻ᴱᵃ/ᴿᵀ ; log k = log A − Eₐ / (2.303 R T).
- **Two-temp formula:** log(k₂/k₁) = [Eₐ / (2.303 R)] × [(T₂ − T₁) / (T₁ T₂)] (T in Kelvin!).
- **Graphs:** ln k vs 1/T has slope −Eₐ/R; log k vs 1/T has slope −Eₐ/(2.303 R).
- **Catalyst:** Lowers Eₐ via alternate pathway; does NOT change ΔH, ΔG, or K.
- **Collision Theory:** Rate = P × Z_AB × e⁻ᴱᵃ/ᴿᵀ (requires both sufficient energy ≥ Eₐ and proper orientation).

---

## Practice Questions

1. Define activation energy and threshold energy. How are they related?
2. Write the Arrhenius equation and explain the meaning of every symbol in it.
3. Why does a small rise in temperature (say 10 K) cause a large increase in reaction rate?
4. The slope of a plot of ln k vs 1/T is −6000 K. Calculate Eₐ in kJ mol⁻¹. (R = 8.314 J K⁻¹ mol⁻¹)
5. The rate constant of a reaction increases by 4 times when temperature rises from 300 K to 320 K. Calculate Eₐ in kJ mol⁻¹. (log 4 = 0.6020)
6. State two properties of a reaction that remain unchanged in the presence of a catalyst.
7. What are the two essential criteria for a collision to be effective according to collision theory?
8. For a reaction, log k = 12.5 − (3000 K) / T. Find the frequency factor A and activation energy Eₐ.
9. If Eₐ = 0 for a reaction, what is the relation between rate constant k and temperature T?
10. A catalyst lowers the activation energy of a reaction from 75 kJ mol⁻¹ to 55 kJ mol⁻¹ at 300 K. By what factor does the rate constant increase? (Assume A is unchanged; R = 8.314 J K⁻¹ mol⁻¹)

---

### Answers

1. **Activation energy (Eₐ)** is the minimum extra energy required by reactant molecules to form the activated complex. **Threshold energy (E_T)** is the minimum total energy needed for an effective collision. Relation: **E_T = E_reactants + Eₐ**.
2. **k = A e⁻ᴱᵃ/ᴿᵀ**, where k = rate constant, A = frequency factor (pre-exponential factor), Eₐ = activation energy (J mol⁻¹), R = universal gas constant (8.314 J K⁻¹ mol⁻¹), T = absolute temperature (K).
3. Because raising temperature by 10 K shifts the Maxwell–Boltzmann energy distribution such that the **fraction of molecules with kinetic energy ≥ Eₐ (e⁻ᴱᵃ/ᴿᵀ) nearly doubles**, dramatically increasing effective collisions.
4. Slope of ln k vs 1/T = −Eₐ / R = −6000 K.
   Eₐ = 6000 × 8.314 = 49884 J mol⁻¹ = **49.88 kJ mol⁻¹**.
   Jaanch: 49884 / 8.314 = 6000 K ✅
5. log(4) = [Eₐ / 19.147] × [(320 − 300) / (300 × 320)]
   0.6020 = [Eₐ / 19.147] × (20 / 96000) = Eₐ / (19.147 × 4800)
   Eₐ = 0.6020 × 19.147 × 4800 = 55327 J mol⁻¹ = **55.33 kJ mol⁻¹**.
   Jaanch: 4× in 20 K = 2× per 10 K → Eₐ ≈ 55 kJ mol⁻¹ ✅
6. **Gibbs energy change (ΔG)**, **enthalpy change (ΔH)**, and **equilibrium constant (K)** remain unchanged (any two).
7. (i) **Energy barrier:** colliding molecules must possess kinetic energy ≥ activation energy (Eₐ). (ii) **Orientation barrier:** molecules must collide in proper spatial orientation.
8. Compare with log k = log A − Eₐ / (2.303 R T):
   log A = 12.5 → **A = 10¹²·⁵ = 3.16 × 10¹²** (units of k).
   Eₐ / (2.303 R) = 3000 → Eₐ = 3000 × 19.147 = 57441 J mol⁻¹ = **57.44 kJ mol⁻¹**.
   Jaanch: 57441 / 19.147 = 3000 K ✅
9. If Eₐ = 0, then e⁰ = 1, so **k = A** — the rate constant becomes **independent of temperature** (every properly oriented collision leads to reaction).
10. log(k_cat / k_uncat) = (Eₐ − Eₐ') / (2.303 R T) = (75000 − 55000) / (19.147 × 300) = 20000 / 5744.1 = 3.482.
    k_cat / k_uncat = 10³·⁴⁸² = **3.03 × 10³ times** (over 3000 times faster!).
    Jaanch: 20 kJ mol⁻¹ drop at 300 K → exp(20000 / 2494.2) = exp(8.019) = 3038 ≈ 3.04 × 10³ ✅

---

Ab tum Arrhenius equation, energy diagrams, catalyst effects aur collision theory ke sabhi numericals aur concepts clear kar chuke ho.

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up](chemical-kinetics-part5.md) mein hum poore Chemical Kinetics chapter ke mixed problems solve karenge aur final summary table banayenge!
