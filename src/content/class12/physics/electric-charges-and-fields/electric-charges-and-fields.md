# Chapter: Electric Charges and Fields

> **Class:** 12 | **Subject:** Physics
> **Yeh Class 12 Physics ka pehla chapter hai!** Static charge aur bijli ka pehla parichay Class 9 mein padha tha: [electricity.md](../../../class9/physics/electricity/electricity.md). Ab Class 12 mein hum ruke hue charges (**Electrostatics**) ke beech lagne wale bal (**Coulomb's Law**), unke charon taraf ke **Electric Field**, aur **Gauss's Law** ko gehrai aur vector precision ke saath samjhenge!
> **Topics covered in this file:**
> 1. Electric Charge, Conductors & Insulators, Charging Methods Aur Coulomb's Law

---

# Topic 1: Electric Charge, Conductors & Insulators, Charging Methods Aur Coulomb's Law

Class 11 mein tumne Gravitation padha — jahan do masses hamesha ek-doosre ko kheenchti hain (attractive force). Par nature mein ek aur buniyadi force hai jo gravity se **10³⁶ guna se bhi zyada taakatwar** hai aur jo kheench bhi sakti hai aur dhakel bhi sakti hai: **Electrostatic Force**! Is pehle topic mein hum **Electric Charge** ke teen pakke niyam (Additivity, Conservation, Quantisation), charging ke tareeke (Friction, Conduction, Induction), aur **Coulomb's Law + Superposition Principle** seekhenge.

---

## Adarsh ka sardi wala sweater aur kagaz ke tukde

Sardi ki shaam thi. Adarsh ne apna ooni sweater utara to halki si "chat-chat" ki aawaz aayi aur andhere mein nanhi si chingari chamki! Phir usne sukhe baalon mein plastic ki kanghi (comb) pheri aur mez par pade chhote kagaz ke tukdon ke paas le gaya — tukde uchhal kar kanghi se chipak gaye!

Adarsh ne Papa se poocha, "Kagaz par to Earth ki itni badi gravity neeche lag rahi thi, phir ek chhoti si kanghi ne unhe upar kaise utha liya?"
Papa muskuraaye: "Kyunki baalon se ragadne par kanghi par **electric charge** aa gaya! Aur chhote se charge ka electrostatic bal poori Dharti ki gravity ko bhi hara deta hai! Chalo, is charge ke niyam aur **Coulomb's Law** ko naap kar dekhte hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Electric charge (q)** | Padarth ka wo buniyadi gun jisse wo electrical force lagata ya mehsoos karta hai; SI unit: **coulomb (C)** | Proton +e, Electron −e |
| **Quantisation of charge** | Koi bhi free charge hamesha elementary charge e = 1.6 × 10⁻¹⁹ C ka integer multiple hota hai: **q = ±ne** | 1 C mein 6.25 × 10¹⁸ electrons |
| **Charging by induction** | Bina chhue, paas ek charged body laakar doosre conductor par opposite charge paida karna | Teacher demo: metal sphere + glass rod |
| **Coulomb's law** | Do point charges ke beech electrostatic force: **F = k · abs(q₁q₂) / r²** | k = 9 × 10⁹ N m² C⁻² |
| **Permittivity of free space (ε₀)** | Vacuum ka electrical constant: **ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²** | k = 1 / (4πε₀) |
| **Dielectric constant (K ya εᵣ)** | Medium mein force vacuum ke muqable K guna ghat jaata hai: **F_med = F_vac / K** | Paani ke liye K ≈ 80 |

---

## Part A: Electric Charge, Conductors, Insulators Aur Charging Methods

### 1. Do Tarah ke Charges
- **Positive (+)** aur **Negative (−)** (Benjamin Franklin ka naamkaran).
- **Like charges repel** (+, + ya −, −); **Unlike charges attract** (+, −).
- **Conductors:** Jinme free electrons aasaani se ghoom sakte hain (copper, aluminium, silver, human body, Earth).
- **Insulators (Dielectrics):** Jinme electrons kas kar bandhe hote hain (plastic, glass, dry wood, rubber).

### 2. Charging ke Teen Tareeke
1. **Friction (Ragad kar):** Do insulators ko ragadne par ek se electrons doosre par chale jaate hain (jaise sukhe baal + plastic comb → comb negative, baal positive; glass rod + silk → glass positive, silk negative).
2. **Conduction (Chhookar):** Ek charged conductor ko neutral conductor se touch karne par charge dono mein bant jaata hai (dono par **same sign** ka charge aata hai).
3. **Induction (Bina chhue — Teacher Demo):** Ek positively charged rod ko insulated neutral metal sphere ke paas lao (touch mat karo!): sphere ke paas wale hisse par negative electrons khinch aate hain aur door wale hisse par positive charge reh jaata hai. Door wale hisse ko earthing (ground) karke hatane par sphere par **opposite (negative)** charge pakka reh jaata hai — aur inducing rod ka apna charge bilkul kam nahi hota!

*(Safety note: Lab mein sirf low-charge electrostatic rods aur insulated stands teacher ke saath dekhein; mains electricity ya high-voltage supply ko kabhi na chhuein.)*

### 3. Charge ke Teen Pakke Niyam
1. **Additivity:** Charge ek scalar hai — kul charge seedha algebraic jod hota hai: q_total = q₁ + q₂ + ... (jaise +5 μC − 2 μC = +3 μC).
2. **Conservation of Charge:** Isolated system mein kul charge na banaya ja sakta hai na nasht kiya ja sakta hai — sirf ek body se doosri par transfer hota hai.
3. **Quantisation:** Har observable free charge **q = ±ne** hota hai (n ∈ Z, **e = 1.6 × 10⁻¹⁹ C**). *(Quarks par ±e/3, ±2e/3 charge hota hai par wo akele free nahi milte!)*

### Example 1: 1 Coulomb Mein Kitne Electrons?

**1 C** negative charge banane ke liye kisi neutral body ko kitne electrons dene padenge?

**Hal:**
q = ne ⟹ n = q / e = 1 / (1.6 × 10⁻¹⁹) = (10 / 16) × 10¹⁹ = **6.25 × 10¹⁸ electrons**!

**Jaanch:** 6.25 × 10¹⁸ × 1.6 × 10⁻¹⁹ = 10 × 10⁻¹ = 1.0 C ✅!

---

## Part B: Coulomb's Law Aur Superposition Principle

1785 mein Charles-Augustin de Coulomb ne torsion balance se naapa ki vacuum mein r doori par rakhe do stationary **point charges q₁ aur q₂** ke beech electrostatic force F:
- |q₁ q₂| ke **directly proportional** hai, aur
- r² ke **inversely proportional** hai (Inverse-Square Law, bilkul Newton ke Gravitation jaisa!).

> **F = [1 / (4πε₀)] · (|q₁ q₂| / r²) = k · (|q₁ q₂| / r²)**

Jahan:
- **k = 1 / (4πε₀) = 9 × 10⁹ N m² C⁻²** (vacuum/air mein)
- **ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²**
- **Medium mein:** Agar charges ko dielectric constant **K** wale medium mein rakh dein, to force **K guna kam** ho jaata hai:
  **F_med = F_vac / K = [1 / (4πε₀K)] · (|q₁ q₂| / r²)**.

```
   +q₁  o---------------------------o  +q₂     (Like: Repulsion!)
   <--- F₁₂           r           F₂₁ --->

   +q₁  o---------------------------o  −q₂     (Unlike: Attraction!)
        ---> F₁₂      r      F₂₁ <---

   Vector form: F₂₁ = −F₁₂  (Newton's 3rd Law! Equal & opposite along the line joining them)
```

> **Figure 1.1** – Coulomb force hamesha dono charges ko jodne wali seedhi line ke along lagta hai (central force) aur F₂₁ = −F₁₂ (action–reaction pair).

### Principle of Superposition

Jab 3 ya zyada charges hon, to kisi ek charge par lagne wala **net force** baaki sabhi charges dwara alag-alag lagaye gaye forces ka **vector sum** hota hai:
> **F₁ = F₁₂ + F₁₃ + F₁₄ + ...**
*(Khaas baat: do charges ke beech ka apna force kisi teesre charge ke aane se nahi badalta!)*

### Example 2: Coulomb's Law aur Dielectric Medium

Do point charges **q₁ = +2 μC** aur **q₂ = +3 μC** hawa mein **30 cm** door rakhe hain.
(i) Unke beech force nikalo.
(ii) Agar inhe paani (dielectric constant **K = 80**) mein utni hi doori par rakh dein, to naya force kya hoga?

**Hal:**
- Units SI mein badlo: q₁ = 2 × 10⁻⁶ C, q₂ = 3 × 10⁻⁶ C, r = 30 cm = **0.3 m** (r² = 0.09 m²).
- (i) F_air = (9 × 10⁹ × 2 × 10⁻⁶ × 3 × 10⁻⁶) / 0.09
  = (54 × 10⁻³) / (9 × 10⁻²) = **6 × 10⁻¹ = 0.6 N** (repulsive!).
- (ii) F_water = F_air / K = 0.6 / 80 = **0.0075 N = 7.5 × 10⁻³ N**.

**Jaanch:** 54/9 = 6, 10⁻³ / 10⁻² = 10⁻¹, so 0.6 N ✅; 0.6 ÷ 80 = 0.0075 N ✅.

### Example 3: Superposition on a Straight Line

Teen charges ek seedhi line par rakhe hain: **q₁ = +4 μC** (x = 0), **q₂ = −2 μC** (x = 0.2 m), aur **q₃ = +4 μC** (x = 0.4 m).
Beech wale charge **q₂** par net force nikalo!

**Hal:**
- q₁ (+4 μC) aur q₂ (−2 μC) ke beech attraction (left taraf):
  F₂₁ = (9 × 10⁹ × 4 × 10⁻⁶ × 2 × 10⁻⁶) / (0.2)² = (72 × 10⁻³) / 0.04 = **1.8 N** (left).
- q₃ (+4 μC) aur q₂ (−2 μC) ke beech attraction (right taraf):
  F₂₃ = (9 × 10⁹ × 4 × 10⁻⁶ × 2 × 10⁻⁶) / (0.2)² = **1.8 N** (right).
- Dono forces barabar aur ulte hain: **F_net = 1.8 − 1.8 = 0 N**!

**Jaanch:** Symmetry se q₁ = q₃ aur barabar doori 0.2 m par hain, isliye net force = 0 ✅!

---

## Aam galtiyan

1. **Force formula mein q₁, q₂ ke minus signs daal kar ulajhna:**
   - *Sahi soch:* Pehle magnitude **F = k |q₁ q₂| / r²** hamesha positive nikalo; phir like/unlike dekh kar **direction arrow** banao!
2. **cm ko m aur μC ko 10⁻⁶ C mein badalna bhool jaana:**
   - *Check:* 1 μC = 10⁻⁶ C, 1 nC = 10⁻⁹ C, 1 cm = 10⁻² m (r² mein 10⁻⁴!).
3. **Induction mein inducing rod ka charge khatam ho jaana maan lena:**
   - *Sahi soch:* Induction mein rod conductor ko chhooti hi nahi, isliye rod ka apna charge **unchanged** rehta hai!

---

## Quick Recap

- Charge: scalar, additive, conserved, quantised (**q = ±ne**, e = 1.6 × 10⁻¹⁹ C).
- Charging: Friction, Conduction (same sign), Induction (opposite sign, bina chhue).
- **Coulomb's Law:** **F = k |q₁q₂| / r²** (k = 9 × 10⁹ N m² C⁻²); medium mein **F_med = F_vac / K**.
- **Superposition:** Net force = individual forces ka **vector sum**.

---

## Practice Questions

1. Can a body have a net electric charge of **3.2 × 10⁻¹⁸ C**? What about **4.0 × 10⁻¹⁹ C**? Justify using quantisation of charge.

2. If 10⁹ electrons move out of a body to another body every second, how much time (in seconds and approximately in years) is required to get a total charge of **1 C** on the other body?

3. Two small charged spheres having charges **2 × 10⁻⁷ C** and **3 × 10⁻⁷ C** are placed **30 cm** apart in air. Find the electrostatic force between them.

4. The electrostatic force on a small sphere of charge **0.4 μC** due to another small sphere of charge **−0.8 μC** in air is **0.2 N**.
   (a) What is the distance between the two spheres?
   (b) What is the force on the second sphere due to the first?

5. Two identical metal spheres A and B carry charges **+6 μC** and **−2 μC** respectively and are separated by a distance r. They are brought into contact and then placed back at the same distance r. Find the ratio of the new electrostatic force to the original electrostatic force (magnitude).

6. Compare the electrostatic force and gravitational force between two protons separated by any distance r. (Given: m_p = 1.67 × 10⁻²⁷ kg, e = 1.6 × 10⁻¹⁹ C, G = 6.67 × 10⁻¹¹ N m² kg⁻², k = 9 × 10⁹ N m² C⁻².)

7. Two point charges **+4 μC** and **+1 μC** are separated by **30 cm** in air. Where on the line joining them should a third charge q be placed so that it experiences **zero net force**?

8. Four point charges **q_A = 2 μC, q_B = −5 μC, q_C = 2 μC, q_D = −5 μC** are located at the four corners of a square ABCD of side **10 cm**. What is the net force on a charge of **1 μC** placed at the centre of the square?

9. Two point charges exert a force of **40 N** on each other in air. When immersed in an oil of dielectric constant **K = 5** at **double** the original distance, what is the new force between them?

10. Three equal positive charges of **+2 μC** each are placed at the three corners of an equilateral triangle of side **10 cm**. Find the magnitude of the net force on any one charge.

### Answers

1. (a) n = (3.2 × 10⁻¹⁸)/(1.6 × 10⁻¹⁹) = **20** (exact integer!) → **Haan, sambhav hai**.
   (b) n = (4.0 × 10⁻¹⁹)/(1.6 × 10⁻¹⁹) = **2.5** (integer nahi!) → **Nahi, sambhav nahi**.

2. 1 second mein charge = 10⁹ × 1.6 × 10⁻¹⁹ = 1.6 × 10⁻¹⁰ C.
   1 C ke liye time = 1 / (1.6 × 10⁻¹⁰) = **6.25 × 10⁹ seconds** ≈ 6.25 × 10⁹ ÷ (3.15 × 10⁷) ≈ **198 years**!
   Jaanch: 198 × 3.15 × 10⁷ ≈ 6.24 × 10⁹ s ✅.

3. F = (9 × 10⁹ × 2 × 10⁻⁷ × 3 × 10⁻⁷) / (0.3)² = (54 × 10⁻⁵) / 0.09 = **6 × 10⁻³ N** (repulsive). Jaanch: 54/9 = 6 ✅.

4. (a) r² = k|q₁q₂|/F = (9 × 10⁹ × 0.4 × 10⁻⁶ × 0.8 × 10⁻⁶) / 0.2 = 14.4 × 10⁻³ = 144 × 10⁻⁴ ⟹ **r = 0.12 m = 12 cm**.
   (b) Newton's 3rd Law se **0.2 N** (attractive, towards the first sphere). Jaanch: (0.12)² = 0.0144 ✅.

5. Original: |q₁ q₂| = 6 × 2 = 12 (μC)².
   Contact ke baad charge barabar bant'ta hai: q′ = (6 − 2)/2 = **+2 μC** dono par!
   New: |q′ q′| = 2 × 2 = 4 (μC)².
   Ratio F_new / F_old = 4 / 12 = **1 / 3**. Jaanch: 4/12 = 1/3 ✅.

6. F_e / F_g = (k e²) / (G m_p²) = [9 × 10⁹ × (1.6 × 10⁻¹⁹)²] / [6.67 × 10⁻¹¹ × (1.67 × 10⁻²⁷)²]
   = (2.304 × 10⁻²⁸) / (1.86 × 10⁻⁶⁴) ≈ **1.24 × 10³⁶**! (Electrostatic force ~10³⁶ guna bada!)

7. Maan lo +1 μC se x cm door (dono ke beech): k(4)q / (30 − x)² = k(1)q / x².
   Square root lo: 2 / (30 − x) = 1 / x ⟹ 2x = 30 − x ⟹ 3x = 30 ⟹ **x = 10 cm from +1 μC** (20 cm from +4 μC).
   Jaanch: 4/20² = 4/400 = 1/100 aur 1/10² = 1/100 ✅!

8. Opposite corners A & C (+2 μC) centre par barabar aur ulte repulsive forces lagate hain → cancel!
   Opposite corners B & D (−5 μC) centre par barabar aur ulte attractive forces lagate hain → cancel!
   Net force = **0 N**.

9. Distance double (r → 2r) se force 1/4 hota hai, aur oil K = 5 se 1/5:
   F_new = 40 / (4 × 5) = 40 / 20 = **2 N**. Jaanch: 4 × 5 = 20, 40 ÷ 20 = 2 N ✅.

10. Ek side ke karan force: F = (9 × 10⁹ × 2 × 10⁻⁶ × 2 × 10⁻⁶) / (0.1)² = (36 × 10⁻³) / 0.01 = **3.6 N**.
    Do forces 3.6 N aur 3.6 N ke beech angle 60°:
    F_net = √(F² + F² + 2F² cos 60°) = √3 F = **3.6√3 N ≈ 6.24 N**. Jaanch: √3 × 3.6 ≈ 6.235 N ✅.

---

Ab tum charge ki quantisation, induction aur Coulomb's Law (with superposition) ko poori pakad ke saath laga sakte ho.

**Agle topic mein:** ek charge apne charon taraf space ko kaise badal deta hai — **Electric Field, Field Lines aur Electric Dipole**!
