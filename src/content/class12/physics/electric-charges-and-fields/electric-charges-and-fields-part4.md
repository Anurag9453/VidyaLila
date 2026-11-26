# Chapter: Electric Charges and Fields (Part 4)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Electric Flux and Gauss's Law](electric-charges-and-fields-part3.md)

---

## Metal Cage ke Andar Surakshit Circuit

**Ambika** apne Papa ke saath ek electronics repair shop gayi thi. Wahan technician ne ek nazuk radio receiver circuit ko ek patli metal (jaali jaisi) dibbi ke andar bandh kar rakha tha. Ambika ne hairani se poocha: "Uncle, bahar itni electric fields aur static charge hone ke baawajood is metal dibbi ke andar circuit bilkul safe kaise rehta hai?"

Technician ne muskurakar kaha: "Beti, jab kisi khokhle (hollow) metal shell par charge hota hai, to uske **andar electric field bilkul ZERO** hota hai! Isse **Electrostatic Shielding** kehte hain — aur iska saboot seedha **Gauss's Law** se milta hai!"

Aaj hum Gauss's Law ke teen sabse important applications seekhenge — jahan Coulomb's law lagana bahut lamba hota, par Gauss's law se 4 line mein answer aa jaata hai!

---

## Naye Shabd (New Words)

- **Linear Charge Density (λ):** Kisi lambi patli taar (wire) ke **har 1 metre** par maujood charge: λ = q / L. SI unit **C/m**.
- **Surface Charge Density (σ):** Kisi flat sheet ya sphere ke **har 1 m²** area par maujood charge: σ = q / A. SI unit **C/m²**.
- **Gaussian Cylinder:** Cylindrical symmetry (jaise lambi taar ya flat sheet) ke liye chuna gaya imaginary cylinder.
- **Electrostatic Shielding:** Kisi hollow conducting cavity ke andar electric field ka zero rehna — jisse sensitive instruments aur bijli ke waqt car ke andar baithe log surakshit rehte hain.

---

## Application 1: Infinitely Long Straight Uniformly Charged Wire

Maan lo ek bahut lambi seedhi patli taar par uniform positive linear charge density **λ** (C/m) hai. Humein taar se perpendicular doori **r** par electric field **E** nikaalna hai.

```
             +  (infinite wire, +lambda)
             +
       .-----+-----.
      (      +      )   <-- top cap (theta = 90 deg, flux = 0)
      :      +   r  :
      :      +----->:---> E (curved wall, theta = 0 deg)
      :      +   L  :
       '-----+-----'    <-- bottom cap (theta = 90 deg, flux = 0)
             +
```

**Derivation (4 Aasaan Steps):**
1. **Gaussian Surface:** Taar ko axis maankar radius **r** aur length **L** ka ek coaxial **Gaussian cylinder** banao.
2. **Flux Calculation:**
   - Symmetry se taar ka electric field **E** har jagah taar se **radially bahar** hoga.
   - Top aur bottom circular caps par normal upar/neeche hai, jabki E side mein hai ⟹ θ = 90° ⟹ **caps se flux = 0**.
   - Curved wall par har point taar se doori r par hai (E constant) aur normal E ke parallel hai (θ = 0°). Curved surface area = **2πrL**.
   - Total flux **Φ = E × (2πrL)**.
3. **Enclosed Charge:** Cylinder ke andar taar ki length L aati hai ⟹ **q_enc = λ L**.
4. **Apply Gauss's Law:**
   E (2πrL) = λ L / ε₀
   L dono taraf kat gaya!

**E = λ / (2π ε₀ r)**

(Numeric shortcut: upar-neeche 2 se multiply karo to **E = (2 k λ) / r**, jahan k = 1/(4πε₀) = 9 × 10⁹ N m²/C²! Calculation super fast ho jaata hai!)

- **Direction:** λ > 0 ho to radially outward; λ < 0 ho to radially inward.
- **Dependence:** **E ∝ 1/r** (point charge mein 1/r² tha, dipole mein 1/r³, aur lambi taar mein 1/r!).

---

## Application 2: Uniformly Charged Infinite Plane Sheet

Maan lo ek bahut badi patli non-conducting sheet par uniform positive surface charge density **σ** (C/m²) hai.

```
          E <---  .---+---.  ---> E
                  :   +   :
          <-------|   +   |------->   (Gaussian pillbox, cap area A)
                  :   +   :
                  '---+---'
                      + (infinite sheet, +sigma)
```

**Derivation:**
1. **Gaussian Surface:** Sheet ke aar-paar jaata hua ek chhota cylinder (pillbox) banao, jiske dono circular caps ka area **A** ho.
2. **Flux Calculation:**
   - Symmetry se electric field **E** sheet ke perpendicular dono taraf bahar nikalta hai.
   - Curved surface par normal E ke perpendicular hai (θ = 90°) ⟹ **curved wall se flux = 0**.
   - Left cap (area A, θ = 0°) se flux = +EA, aur right cap (area A, θ = 0°) se flux = +EA!
   - Total flux **Φ = EA + EA = 2EA**.
3. **Enclosed Charge:** Pillbox sheet ke area A ko andar bandh karta hai ⟹ **q_enc = σ A**.
4. **Apply Gauss's Law:**
   2EA = σ A / ε₀
   A dono taraf kat gaya!

**E = σ / (2 ε₀)**

**Hairaan Karne Wala Nateeja:** Is formula mein doori **r** aati hi nahi! Yaani ek badi uniformly charged plane sheet ke paas electric field **bilkul uniform (constant)** hota hai — chahe tum 2 cm door raho ya 10 cm door (jab tak doori sheet ke size se bahut chhoti ho)!

### Bonus: Do Parallel Charged Sheets (+σ aur −σ)!
Agar do badi parallel sheets paas-paas rakhi hon — ek par **+σ** aur doosri par **−σ** — to superposition se:
- **Dono sheets ke bahar (left aur right):** Dono sheets ke fields opposite directions mein aur barabar (σ/2ε₀) hote hain ⟹ **E_outside = σ/(2ε₀) − σ/(2ε₀) = 0**!
- **Dono sheets ke beech mein:** Dono fields same direction mein (+ sheet se − sheet ki taraf) jud jaate hain:
  **E_between = σ/(2ε₀) + σ/(2ε₀) = σ / ε₀**!
*(Agle chapter mein Parallel-Plate Capacitor ka poora foundation yahi formula hai!)*

---

## Application 3: Uniformly Charged Thin Spherical Shell

Maan lo radius **R** ka ek khokhla (hollow) thin spherical shell hai, jis par total charge **+Q** uski bahari satah par uniformly faila hua hai (σ = Q / 4πR²). Humein centre se doori **r** par electric field chahiye:

### Case A: Shell ke Bahar (r > R)
- Radius **r (> R)** ka concentric Gaussian sphere banao.
- Total flux Φ = E (4πr²). Andar poora shell aa gaya ⟹ **q_enc = Q**.
- E (4πr²) = Q / ε₀ ⟹ **E_out = (1 / 4πε₀) × (Q / r²) = kQ / r²**.
- **Matlab:** Bahar ke points ke liye charged shell bilkul aise behave karta hai jaise **poora charge Q uske centre par ek point charge ke roop mein rakha ho**!

### Case B: Shell ki Satah par (r = R)
- **E_surface = kQ / R² = σ / ε₀**.

### Case C: Shell ke Andar (r < R)
- Radius **r (< R)** ka chhota concentric Gaussian sphere shell ke andar banao.
- Saara charge bahar wali satah (r = R) par hai! Is chhote sphere ke andar **koi charge nahi hai ⟹ q_enc = 0**!
- Gauss's law se: E (4πr²) = 0 / ε₀ = 0 ⟹ **E_in = 0**!
- Yahi hai **Ambika** ke electronics shop wala **Electrostatic Shielding**!

### Graph: E versus r (Spherical Shell)

```
   E
   ^
   :         *  E_max = kQ / R^2
   :         : .
   :         :   .   E proportional to 1/r^2
   :         :     .
   :   E = 0 :       . .
   +=========+-------------> r
   0         R
    (inside)   (outside)
```

---

## Solved Examples

### Example 1: Infinitely Long Charged Wire
An infinitely long straight wire has a uniform linear charge density **λ = 2 × 10⁻⁶ C/m**. Calculate the electric field at a perpendicular distance of **r = 4 cm** from the wire.

**Hal (Solution):**
- λ = 2 × 10⁻⁶ C/m, r = 4 cm = 0.04 m, k = 9 × 10⁹ N m²/C².
- Shortcut formula: **E = (2 k λ) / r**
- E = (2 × 9 × 10⁹ × 2 × 10⁻⁶) / 0.04 = (36 × 10³) / 0.04 = (36 × 10³ × 100) / 4 = **9 × 10⁵ N/C** (radially outward).
- **Jaanch:** 36/4 = 9; 10³ × 10² = 10⁵ ⟹ 9 × 10⁵ N/C ✅.

### Example 2: Uniformly Charged Infinite Plane Sheet
A large thin non-conducting plane sheet has a uniform surface charge density **σ = 17.708 × 10⁻⁶ C/m²**. Find the electric field at a point (a) 5 cm away from the sheet, and (b) 20 cm away from the sheet.

**Hal (Solution):**
- σ = 17.708 × 10⁻⁶ C/m², ε₀ = 8.854 × 10⁻¹² C²/(N m²).
- (a) E = σ / (2 ε₀) = (17.708 × 10⁻⁶) / (2 × 8.854 × 10⁻¹²) = (17.708 × 10⁻⁶) / (17.708 × 10⁻¹²) = **1.0 × 10⁶ N/C**.
- (b) Sheet ka field doori r par depend nahi karta ⟹ 20 cm par bhi **E = 1.0 × 10⁶ N/C** hi rahega!
- **Jaanch:** 2 × 8.854 = 17.708; 10⁻⁶ / 10⁻¹² = 10⁶ ✅.

### Example 3: Thin Spherical Shell (Inside & Outside)
A uniformly charged thin spherical shell of radius **R = 10 cm** carries a total charge **Q = 1.6 μC**. Calculate the electric field at a distance of:
(a) **r = 5 cm** from the centre,
(b) **r = 20 cm** from the centre.

**Hal (Solution):**
- (a) r = 5 cm < R (10 cm) ⟹ point shell ke **andar** hai!
  Isliye **E = 0 N/C**.
- (b) r = 20 cm = 0.20 m > R ⟹ point shell ke **bahar** hai!
  E = kQ / r² = (9 × 10⁹ × 1.6 × 10⁻⁶) / (0.20)² = (14.4 × 10³) / 0.04 = **3.6 × 10⁵ N/C** (radially outward).
- **Jaanch:** 14.4 / 0.04 = 1440 / 4 = 360 ⟹ 360 × 10³ = 3.6 × 10⁵ N/C ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Infinite plane sheet ke field ko 1/r² ke hisaab se ghatana:**
   - *Galat:* 5 cm par E = 10⁶ N/C hai to 10 cm par 2.5 × 10⁵ N/C ho jayega.
   - *Sahi:* Infinite plane sheet ka field **E = σ / (2ε₀)** distance r se bilkul **independent** hota hai!
2. **Single non-conducting sheet ke liye σ / ε₀ laga dena:**
   - *Galat:* Single sheet ke liye E = σ / ε₀ likhna.
   - *Sahi:* Single non-conducting sheet ke dono taraf flux nikalta hai (2EA = σA/ε₀), isliye **E = σ / (2ε₀)**! Sirf conducting surface ke theek bahar ya do opposite sheets (+σ, −σ) ke beech mein **σ / ε₀** aata hai!
3. **Hollow charged shell ke andar bhi kQ/r² laga dena:**
   - *Galat:* r = 5 cm (jab R = 10 cm) par E = kQ/(0.05)² nikaalna.
   - *Sahi:* Pehle hamesha check karo **r < R** hai ya **r > R**! Agar r < R (hollow shell ke andar), to q_enc = 0 ⟹ **E = 0**!

---

## Quick Recap

| Charge Distribution | Electric Field Magnitude | Dependence on r |
|---|---|---|
| Infinite straight wire (λ) | E = λ / (2πε₀r) = 2kλ / r | E ∝ 1/r |
| Infinite plane sheet (σ) | E = σ / (2ε₀) | Independent of r (uniform!) |
| Between two sheets (+σ, −σ) | E = σ / ε₀ (outside: 0) | Uniform between sheets |
| Thin spherical shell (R, Q) | Inside (r < R): **0**; Outside (r ≥ R): **kQ / r²** | 0 inside; 1/r² outside |

---

## Practice Questions

1. Write the SI units of linear charge density λ and surface charge density σ.
2. An infinite line charge produces an electric field of 9 × 10⁴ N/C at a distance of 2 cm. Calculate the linear charge density λ.
3. What is the electric field at a distance of 6 cm from an infinitely long wire having linear charge density λ = 3 × 10⁻⁶ C/m?
4. A large thin plane sheet has a surface charge density σ = 8.854 × 10⁻⁶ C/m². Calculate the electric field near the sheet.
5. Two large parallel thin sheets carry uniform surface charge densities +σ and −σ where σ = 8.854 × 10⁻⁶ C/m². Find the electric field (a) between the sheets, and (b) outside the sheets.
6. What happens to the electric field of an infinite plane sheet if you move twice as far away from it (still close compared to the sheet's dimensions)?
7. A hollow conducting sphere of radius 15 cm has a charge of +2.5 μC on its surface. Find the electric field at (a) r = 8 cm, (b) r = 15 cm (just outside), and (c) r = 30 cm from the centre.
8. Why is it safer to sit inside a closed metal car than under a tree during a lightning storm? (State the physics principle clearly.)
9. An infinite line charge of λ = +5 × 10⁻⁷ C/m lies along the z-axis. Find the magnitude of force on a −2 μC charge placed at a perpendicular distance of 10 cm from the wire.
10. Two concentric thin spherical shells of radii R₁ = 5 cm and R₂ = 15 cm carry charges Q₁ = +2 μC and Q₂ = −5 μC respectively. Find the electric field at (a) r = 10 cm, and (b) r = 30 cm from their common centre.

### Answers

1. Linear charge density λ: **C/m**. Surface charge density σ: **C/m²**.

2. E = 2kλ / r ⟹ λ = (E r) / (2k) = (9 × 10⁴ × 0.02) / (2 × 9 × 10⁹) = 1800 / (18 × 10⁹) = **1.0 × 10⁻⁷ C/m = 0.1 μC/m**.
   Jaanch: 2 × 9 × 10⁹ × 10⁻⁷ / 0.02 = 1800 / 0.02 = 9 × 10⁴ N/C ✅.

3. E = (2 × 9 × 10⁹ × 3 × 10⁻⁶) / 0.06 = (54 × 10³) / 0.06 = **9.0 × 10⁵ N/C**.
   Jaanch: 54 / 0.06 = 5400 / 6 = 900 ⟹ 900 × 10³ = 9 × 10⁵ N/C ✅.

4. E = σ / (2ε₀) = (8.854 × 10⁻⁶) / (2 × 8.854 × 10⁻¹²) = **5.0 × 10⁵ N/C**.
   Jaanch: 1/2 × 10⁶ = 5 × 10⁵ ✅.

5. (a) Between sheets: E = σ / ε₀ = (8.854 × 10⁻⁶) / (8.854 × 10⁻¹²) = **1.0 × 10⁶ N/C** (from +σ sheet to −σ sheet).
   (b) Outside sheets: **E = 0 N/C**.
   Jaanch: 5 × 10⁵ + 5 × 10⁵ = 10⁶ ✅.

6. **Koi badlaav nahi hoga (remains unchanged!)**, kyunki E = σ / (2ε₀) doori r par depend nahi karta.

7. (a) r = 8 cm < 15 cm (andar) ⟹ **E = 0 N/C**.
   (b) r = 15 cm = 0.15 m: E = (9 × 10⁹ × 2.5 × 10⁻⁶) / (0.15)² = (22.5 × 10³) / 0.0225 = **1.0 × 10⁶ N/C**.
   (c) r = 30 cm = 0.30 m (radius double ⟹ field 1/4): E = (1.0 × 10⁶) / 4 = **2.5 × 10⁵ N/C**.
   Jaanch: 22.5 / 0.0225 = 1000 ⟹ 10⁶; 10⁶ / 4 = 2.5 × 10⁵ ✅.

8. **Electrostatic Shielding!** Metal car body ek hollow conductor ki tarah kaam karti hai — bijli girne par bhi saara charge uski bahari satah par rehkar zameen mein chala jaata hai aur andar electric field **zero** rehta hai. (Hamesha windows bandh rakhni chahiye aur metal body ko nahi chhoona chahiye.)

9. Pehle wire ka field r = 0.10 m par: E = (2 × 9 × 10⁹ × 5 × 10⁻⁷) / 0.10 = 9000 / 0.10 = 9 × 10⁴ N/C.
   Force magnitude F = q E = (2 × 10⁻⁶) × (9 × 10⁴) = **0.18 N** (wire ki taraf attractive, kyunki charge negative hai).
   Jaanch: 2 × 9 × 10⁻² = 0.18 N ✅.

10. (a) r = 10 cm (R₁ < r < R₂): Gaussian sphere ke andar sirf Q₁ = +2 μC hai!
    E = (9 × 10⁹ × 2 × 10⁻⁶) / (0.10)² = (18 × 10³) / 0.01 = **1.8 × 10⁶ N/C** (outward).
    (b) r = 30 cm (r > R₂): Andar net charge q_enc = Q₁ + Q₂ = +2 − 5 = −3 μC!
    E = (9 × 10⁹ × 3 × 10⁻⁶) / (0.30)² = (27 × 10³) / 0.09 = **3.0 × 10⁵ N/C** (radially inward, kyunki net charge negative hai).
    Jaanch: 18/0.01 = 1800 ⟹ 1.8 × 10⁶; 27/0.09 = 300 ⟹ 3.0 × 10⁵ ✅.

---

Ab tum Gauss's Law se wire, plane sheet aur spherical shell — teeno ka electric field derive aur calculate kar sakte ho!

**Agle topic mein:** Sab Kuch Mila Kar — is poore chapter ke saare concepts ek saath jodkar tricky mixed problems solve karenge aur poora chapter wrap-up karenge!
