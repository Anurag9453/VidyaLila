# Chapter: Alternating Current (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [AC Applied to an Inductor and a Capacitor, Phasors](alternating-current-part2.md)

---

## FM Radio ki Tuning Knob aur Resonance ka Jaadu!

**Mukesh** apne dada ji ke puraane FM radio ki tuning knob ghuma raha tha. Poore dial par halka sa shor (static) tha, par jaise hi pointer **98.3 MHz** par pahuncha, achanak saaf aur tez gaana baj utha! Thoda sa bhi aage ya peeche ghumane par aawaz phir gayab ho jaati thi!

Dada ji muskuraye: "Radio ke andar ek **Series LCR Circuit** laga hai! Jab knob ghumakar tum us circuit ki natural frequency ko 98.3 MHz se **match** kar dete ho, to us khaas frequency ke liye current achanak **maximum** ho jaata hai — aur baaki sab stations dab jaate hain! Isse **Electrical Resonance** kehte hain!"

---

## Naye Shabd (New Words)

- **Impedance (Z):** Series LCR circuit dwara AC current ko di jaane wali total effective rukawat (resistance R aur reactances X_L, X_C ka phasor resultant): **Z = √[ R² + (X_L − X_C)² ]**. SI unit **Ohm (Ω)**.
- **Electrical Resonance:** Series LCR circuit ki woh khaas condition jab **X_L = X_C** ho jaaye — tab impedance minimum (**Z = R**) aur current **maximum** hota hai!
- **Resonant Frequency (ω₀, f₀):** Woh frequency jis par X_L = X_C hota hai: **ω₀ = 1 / √(L C)** ya **f₀ = 1 / (2π √(L C))**.
- **Quality Factor (Q-Factor):** Resonance peak kitni **sharp (teekhi)** hai uska dimensionless naap: **Q = (ω₀ L) / R = (1 / R) √(L / C)**.

---

## 1. Series LCR Circuit — Phasor Diagram aur Impedance (Z)

Maan lo **R, L aur C** teeno ek AC source (voltage **V**) ke saath **series** mein jude hain. Series mein teeno mein **same current I** behta hai, par unke voltages ke phases alag hote hain:
- **V_R = I R** (current **I** ke saath, 0° par).
- **V_L = I X_L** (current **I** se **90° upar / leading**).
- **V_C = I X_C** (current **I** se **90° neeche / lagging**).

```
           ^ V_L = I X_L
           :
    V_L-V_C:    / V (Net source voltage)
           :   /
           :  / phi
           +---------> V_R = I R  (and I)
           :
           v V_C = I X_C
```

- V_L aur V_C ek-doosre ke bilkul **opposite (180°)** hain ⟹ unka net vertical voltage = **(V_L − V_C)**.
- Pythagoras theorem se net source voltage **V**:
  **V = √[ V_R² + (V_L − V_C)² ] = I √[ R² + (X_L − X_C)² ]**
- Isliye circuit ka total **Impedance (Z = V / I)**:

**Z = √[ R² + (X_L − X_C)² ]**

### Phase Angle (φ — V aur I ke Beech ka Angle):
**tan φ = (V_L − V_C) / V_R = (X_L − X_C) / R**

- Agar **X_L > X_C** ⟹ φ positive (Inductive circuit: V leads I).
- Agar **X_C > X_L** ⟹ φ negative (Capacitive circuit: I leads V).
- Agar **X_L = X_C** ⟹ **φ = 0°** (Purely resistive — **RESONANCE!**).

---

## 2. Resonance aur Quality Factor (Q)

Resonance tab hota hai jab **X_L = X_C**:
**ω₀ L = 1 / (ω₀ C)** ⟹ **ω₀² = 1 / (L C)** ⟹

**ω₀ = 1 / √(L C)**   aur   **f₀ = 1 / [ 2π √(L C) ]**

### Resonance par 4 Kamaal ki Baatein:
1. **Z_min = R** (Impedance sabse kam!).
2. **I_max = V / R** (Current sabse zyada!).
3. **Phase angle φ = 0°** (V aur I bilkul in phase!).
4. **V_L = V_C** (Aapas mein cancel ho jaate hain, isliye V_R = V_source; aur haan — resonance par alag-alag **V_L ya V_C ki value source voltage V se bhi kai guna badi** ho sakti hai: **V_L = V_C = Q × V_source**!).

### Sharpness of Resonance — Quality Factor (Q):
Agar **R bahut chhota** ho, to resonance ka current-peak bahut **ooncha aur patla (sharp)** hota hai — jisse radio sirf ek hi station pakadta hai (achhi selectivity!).
**Q = (ω₀ L) / R = 1 / (ω₀ C R) = (1 / R) √(L / C)**
*(Bada Q ⟹ zyada sharp resonance ⟹ behtar radio tuning!)*

---

## Solved Examples

### Example 1: Series LCR — Impedance, Current & Phase Angle
In a series LCR circuit, **R = 30 Ω**, **X_L = 70 Ω**, and **X_C = 30 Ω**, connected to a **200 V (RMS)** AC source. Find (a) impedance **Z**, (b) RMS current **I_rms**, and (c) phase angle **tan φ**.

**Hal (Solution):**
- X_L − X_C = 70 − 30 = **40 Ω**.
- (a) Z = √(R² + (X_L − X_C)²) = √(30² + 40²) = √(900 + 1600) = √2500 = **50 Ω**.
- (b) I_rms = V_rms / Z = 200 / 50 = **4.0 A**.
- (c) tan φ = (X_L − X_C) / R = 40 / 30 = **4/3** (φ ≈ 53°, voltage leads current since X_L > X_C).
- **Jaanch:** 30-40-50 right triangle! 4.0 × 50 = 200 V ✅.

### Example 2: Resonant Frequency & Quality Factor
A series LCR circuit has **L = 2.0 H**, **C = 32 μF**, and **R = 10 Ω**. Calculate (a) its resonant angular frequency **ω₀**, and (b) its quality factor **Q**.

**Hal (Solution):**
- L C = 2.0 × (32 × 10⁻⁶) = **64 × 10⁻⁶ s²** ⟹ √(L C) = **8 × 10⁻³ s**.
- (a) **ω₀ = 1 / √(L C) = 1 / (8 × 10⁻³) = 1000 / 8 = 125 rad/s**.
- (b) **Q = (ω₀ L) / R = (125 × 2.0) / 10 = 250 / 10 = 25**.
- **Jaanch:** Alternative formula: Q = (1/10) √(2 / 32×10⁻⁶) = 0.1 × √(62500) = 0.1 × 250 = 25 ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Impedance Z ke liye R + X_L + X_C seedha jod dena:**
   - *Galat:* R = 30, X_L = 70, X_C = 30 ke liye Z = 130 Ω likhna!
   - *Sahi:* Phasor addition karo: **Z = √[ R² + (X_L − X_C)² ] = 50 Ω**!
2. **Source voltage ke liye V_R + V_L + V_C seedha jod dena:**
   - *Galat:* V = V_R + V_L + V_C likhna.
   - *Sahi:* **V = √[ V_R² + (V_L − V_C)² ]**!
3. **Sochna ki resistance R badalne se resonant frequency f₀ badal jaati hai:**
   - *Galat:* R double karne par f₀ aadhi ho jaati hai.
   - *Sahi:* **f₀ = 1 / (2π √(LC))** sirf **L aur C** par depend karti hai! R badalne se sirf **peak ki height aur sharpness (Q)** badalti hai, f₀ nahi!

---

## Quick Recap

| Concept | Formula | Key Detail |
|---|---|---|
| Impedance (Z) | Z = √[ R² + (X_L − X_C)² ] | Unit Ω; I_rms = V_rms / Z |
| Phase Angle (φ) | tan φ = (X_L − X_C) / R | X_L > X_C: V leads I; X_C > X_L: I leads V |
| Resonance Condition | X_L = X_C ⟹ ω₀ = 1/√(LC) | Z_min = R, I_max = V/R, φ = 0° |
| Quality Factor (Q) | Q = ω₀L / R = (1/R)√(L/C) | Higher Q ⟹ sharper tuning (smaller R) |

---

## Practice Questions

1. Write the expression for the impedance Z and phase angle φ of a series LCR circuit driven by an AC voltage.
2. State three important characteristics of a series LCR circuit at resonance.
3. A series LCR circuit has R = 60 Ω, X_L = 120 Ω, and X_C = 40 Ω, connected to a 200 V AC supply. Calculate (a) impedance Z, (b) RMS current I_rms, and (c) voltage across the resistor V_R.
4. In Question 3, calculate the individual voltages V_L and V_C, and verify that √[V_R² + (V_L − V_C)²] equals the supply voltage 200 V.
5. Find the resonant angular frequency ω₀ and resonant frequency f₀ of a series LCR circuit with L = 0.50 H and C = 50 μF (take π = 3.14).
6. If the circuit in Question 5 has resistance R = 20 Ω, calculate its Quality Factor Q.
7. A series LCR circuit is at resonance with a 100 V AC supply, R = 10 Ω, and X_L = X_C = 100 Ω. Find (a) the current in the circuit, and (b) the voltage across the inductor V_L.
8. How does decreasing the resistance R affect (a) the resonant frequency f₀, and (b) the sharpness (Q-factor) of a series LCR circuit?
9. State whether True or False: In a series LCR circuit, resonance can occur even if the circuit contains only R and L (no capacitor).
10. A radio tuning circuit has L = 200 μH and C = 50 pF. Find its resonant angular frequency ω₀.

### Answers

1. **Z = √[ R² + (X_L − X_C)² ]** aur **tan φ = (X_L − X_C) / R**.

2. Resonance par: (i) X_L = X_C aur **Z = R (minimum)**; (ii) **I = V/R (maximum)**; (iii) **φ = 0°** (V aur I in phase).

3. X_L − X_C = 120 − 40 = 80 Ω:
   (a) Z = √(60² + 80²) = √(3600 + 6400) = √10000 = **100 Ω**.
   (b) I_rms = 200 / 100 = **2.0 A**.
   (c) V_R = I_rms × R = 2.0 × 60 = **120 V**.
   Jaanch: 60-80-100 triangle! 2 × 60 = 120 V ✅.

4. V_L = 2.0 × 120 = **240 V**; V_C = 2.0 × 40 = **80 V**.
   V_L − V_C = 240 − 80 = 160 V.
   Check: √(120² + 160²) = √(14400 + 25600) = √40000 = **200 V** (= supply voltage!). Jaanch: exact match ✅.

5. L C = 0.50 × 50 × 10⁻⁶ = 25 × 10⁻⁶ s² ⟹ √(L C) = 5 × 10⁻³ s.
   **ω₀ = 1 / (5 × 10⁻³) = 200 rad/s**.
   **f₀ = ω₀ / (2π) = 200 / (6.28) ≈ 31.85 Hz**.
   Jaanch: 200 × 5 × 10⁻³ = 1 ✅.

6. Q = (ω₀ L) / R = (200 × 0.50) / 20 = 100 / 20 = **5.0**.
   Jaanch: 200 × 0.5 / 20 = 5.0 ✅.

7. (a) Resonance par Z = R = 10 Ω ⟹ **I = 100 / 10 = 10 A**.
   (b) **V_L = I × X_L = 10 × 100 = 1000 V**! *(Supply 100 V se 10 guna zyada — kyunki V_C bhi 1000 V opposite direction mein cancel kar raha hai!)*
   Jaanch: Q = 100/10 = 10 ⟹ V_L = Q × V = 10 × 100 = 1000 V ✅.

8. (a) **f₀ unchanged** (L aur C par depend karta hai, R par nahi).
   (b) **Q-factor badh jaata hai** (resonance aur zyada sharp ho jaata hai!).

9. **False ❌.** Resonance ke liye X_L aur X_C ka aapas mein cancel hona (X_L = X_C) zaroori hai — isliye **L aur C dono** hone chahiye!

10. L C = (200 × 10⁻⁶) × (50 × 10⁻¹²) = 10⁴ × 10⁻¹⁸ = 10⁻¹⁴ s² ⟹ √(L C) = 10⁻⁷ s.
    **ω₀ = 1 / 10⁻⁷ = 1.0 × 10⁷ rad/s**.
    Jaanch: 200 × 50 = 10⁴; 10⁴ × 10⁻¹⁸ = 10⁻¹⁴; 1/√10⁻¹⁴ = 10⁷ ✅.

---

Ab tum Series LCR Circuit, Impedance, Resonance aur Quality Factor ko pakka master kar chuke ho!

**Agle topic mein:** AC circuit mein asli **Power** kitni kharch hoti hai, **Power Factor (cos φ)** kya hota hai, aur **Wattless Current** ka kya raaz hai — dekhenge!
