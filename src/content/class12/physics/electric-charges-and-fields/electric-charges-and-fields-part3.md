# Chapter: Electric Charges and Fields (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Electric Field, Field Lines and Electric Dipole](electric-charges-and-fields-part2.md)

---

## Baarish ki Boondein aur Wire Frame

Monsoon ki shaam thi. **Akash** apni balcony mein ek chhota sa rectangular wire frame haath mein liye khada tha. Baarish seedhi neeche gir rahi thi. Jab usne frame ko bilkul horizontal (flat) rakha, to zyada se zyada boondein uske andar se guzri. Jab usne frame ko thoda tirchha (tilt) kiya, to kam boondein andar se nikli. Aur jab usne frame ko bilkul vertical khada kar diya — boondon ke parallel — to ek bhi boond frame ke paar nahi gayi!

Papa ne chai peete hue muskurakar kaha: "Akash, physics mein electric field ke saath bhi bilkul yahi hota hai. Kisi surface ke paar kitni electric field lines guzar rahi hain, use **Electric Flux** kehte hain — aur isse humein Electrostatics ka sabse kamaal ka shortcut milta hai: **Gauss's Law**!"

---

## Naye Shabd (New Words)

- **Area Vector (A→):** Kisi chhote flat surface ka area ek vector ki tarah liya jaata hai, jiska magnitude surface ke area A ke barabar hota hai aur direction surface ke **perpendicular (normal)** bahar ki taraf (outward normal) hoti hai.
- **Electric Flux (Φ):** Kisi surface se guzarne wali electric field lines ki total ginti (measure): Φ = E A cos θ. Scalar quantity hai; SI unit **N m²/C** (ya V m).
- **Closed Surface:** Aisi 3D bandh satah (jaise sphere, cube, cylinder) jiska andar (inside) aur bahar (outside) saaf alag ho. Iske area vector ki direction hamesha **outward normal** hoti hai.
- **Gauss's Law:** Kisi bhi closed surface se guzarne wala total electric flux, uske andar bandh net charge (q_enc) ka 1/ε₀ guna hota hai: Φ = q_enc / ε₀.
- **Gaussian Surface:** Ek kalpanik (imaginary) closed 3D surface jo hum symmetry ke hisaab se chunte hain taaki Gauss's law lagana aasaan ho jaaye.

---

## 1. Area Vector aur Electric Flux

Maan lo ek uniform electric field **E** ek flat surface (area A) se guzar raha hai. Surface ka **normal (area vector n̂)** electric field E ke saath angle **θ** banata hai:

```
         n^ (normal / area vector)
        /
       /  angle theta
      /---------> E (electric field)
   ========   <-- flat surface of area A
```

Tab us surface se guzarne wala **Electric Flux (Φ)** hota hai:

**Φ = E · A = E A cos θ**

### Teen Khaas Cases:
1. **θ = 0°** (Surface field ke perpendicular hai, yaani normal field ke parallel hai):
   cos 0° = 1 ⟹ **Φ = +E A** (Maximum flux!)
2. **θ = 90°** (Surface field ke parallel hai, yaani normal field ke perpendicular hai):
   cos 90° = 0 ⟹ **Φ = 0** (Koi field line paar nahi jaati — jaise Akash ka vertical wire frame!)
3. **θ = 180°** (Normal field ke opposite direction mein hai):
   cos 180° = −1 ⟹ **Φ = −E A** (Flux surface ke **andar** aa raha hai!)

**Sign Convention (Closed Surface ke liye):**
- Field lines surface se **bahar** niklein (outward flux) ⟹ **Positive (+Φ)**.
- Field lines surface ke **andar** aayein (inward flux) ⟹ **Negative (−Φ)**.

Agar surface tedha-medha (curved) ya field non-uniform ho, to surface ko chhote-chhote flat tukdon (ΔA) mein baant kar sabka flux jod dete hain: **Φ = Σ E ΔA cos θ**.

---

## 2. Gauss's Law — Derivation (Sphere ke liye) aur General Statement

Maan lo ek positive point charge **+q** ek imaginary sphere (radius **r**) ke bilkul centre par rakha hai.

```
              ^ E, dA
              :
         . - ~~~ - .
       '             '
      /       +q      \  ---> E, dA
      \       *       /
       .             .
         ' - ___ - '
              :
              v E, dA
```

1. Sphere ki satah ke **har point** par charge se doori same (r) hai, isliye electric field ka magnitude har jagah same hai:
   **E = (1 / 4πε₀) × (q / r²)**
2. Har chhote tukde ΔA par field E radially bahar hai aur outward normal bhi radially bahar hai ⟹ **θ = 0°** har point par, isliye cos 0° = 1!
3. Total flux = Σ E ΔA cos 0° = E × (Σ ΔA) = E × (Sphere ka total surface area 4πr²):
   **Φ = [ (1 / 4πε₀) × (q / r²) ] × (4πr²)**
4. Dekho! **4π** aur **r²** dono upar-neeche kat gaye! Bacha sirf:

**Φ = q / ε₀**

### Kamaal ki Baat (General Statement — Stated, Checked on Symmetry):
Kyunki r² kat gaya, **flux sphere ke radius par depend hi nahi karta!** Balki (stated result) kisi bhi shape ki closed surface (cube, cylinder, ya tedha-medha balloon) agar net charge **q_enc** ko andar bandh karti hai, to total outward flux hamesha hota hai:

**Φ_total = q_enc / ε₀**

jahan **ε₀ = 8.854 × 10⁻¹² C²/(N m²)** (permittivity of free space) aur **q_enc** = surface ke **andar** maujood saare charges ka algebraic sum (sign ke saath!).

### Gauss's Law ke 4 Golden Rules:
1. **Shape aur Size independent:** Chahe radius double kar do ya sphere ko cube bana do — agar andar wahi charge hai to total flux **bilkul nahi badalta**!
2. **Outside charges ka flux = 0:** Surface ke bahar rakha koi bhi charge jitni field lines andar bhejta hai, utni hi doosri taraf se bahar nikal jaati hain — isliye uska net contribution **zero** hota hai. (Par yaad rakho: har point par **E** mein andar aur bahar dono charges ka yogdaan hota hai; sirf **total flux** mein bahar wale cancel hote hain!)
3. **Andar net charge zero ⟹ Total flux zero:** Agar closed surface ke andar ek electric dipole (+q aur −q) rakha hai, to q_enc = +q − q = 0 ⟹ **Φ = 0**.
4. **Symmetry Trick (Cube):** Agar charge **q** ek cube ke bilkul centre par rakha hai, to 6 identical faces mein flux barabar bant jaata hai:
   **Har ek face se flux = q / (6ε₀)**.

---

## Solved Examples

### Example 1: Tilted Square Frame mein Flux
A uniform electric field **E = 3000 N/C** along the x-axis passes through a square of side **10 cm**. Find the electric flux when:
(a) the plane of the square is in the yz-plane (perpendicular to the x-axis),
(b) the normal to the square makes an angle of **60°** with the x-axis.

**Hal (Solution):**
- Side a = 10 cm = 0.10 m ⟹ Area **A = (0.10)² = 0.01 m² = 10⁻² m²**.
- (a) Plane yz-plane mein hai ⟹ iska normal x-axis ke along hai ⟹ **θ = 0°**.
  Φ = E A cos 0° = 3000 × 0.01 × 1 = **30 N m²/C**.
- (b) Normal aur E ke beech angle **θ = 60°**:
  Φ = E A cos 60° = 3000 × 0.01 × (1/2) = **15 N m²/C**.
- **Jaanch:** 3000 × 10⁻² = 30; cos 60° = 0.5 par flux aadha (15 N m²/C) ho gaya ✅.

### Example 2: Sphere ke Andar Charge aur Radius Double Karna
A point charge **q = 8.854 μC** is placed at the centre of a spherical Gaussian surface of radius **15 cm**.
(a) Calculate the total electric flux through the sphere.
(b) What happens to the flux if the radius of the sphere is doubled to 30 cm?

**Hal (Solution):**
- q_enc = 8.854 μC = 8.854 × 10⁻⁶ C, ε₀ = 8.854 × 10⁻¹² C²/(N m²).
- (a) Gauss's law se:
  Φ = q_enc / ε₀ = (8.854 × 10⁻⁶) / (8.854 × 10⁻¹²) = **10⁶ N m²/C**.
- (b) Radius double karne par bhi andar ka charge q_enc wahi rehta hai. Kyunki Φ radius par depend nahi karta, **flux 10⁶ N m²/C hi rahega (no change)!**
- **Jaanch:** 10⁻⁶ / 10⁻¹² = 10⁶; aur 8.854/8.854 = 1 ✅.

### Example 3: Closed Surface mein Multiple Charges aur Dipole
A closed balloon encloses three charges: **+5 μC**, **−3 μC**, and an electric dipole of charges **±2 μC**, while a charge of **+10 μC** sits just outside the balloon. Find the net flux through the balloon (take ε₀ = 8.85 × 10⁻¹² C²/(N m²)).

**Hal (Solution):**
- Bahar wala +10 μC net flux mein hissa nahi leta!
- Dipole ka net charge = +2 μC + (−2 μC) = 0.
- q_enc = (+5 − 3 + 0) μC = **+2 μC = 2 × 10⁻⁶ C**.
- Φ = q_enc / ε₀ = (2 × 10⁻⁶) / (8.85 × 10⁻¹²) ≈ **2.26 × 10⁵ N m²/C**.
- **Jaanch:** 2 / 8.85 ≈ 0.22599 ⟹ 0.226 × 10⁶ = 2.26 × 10⁵ N m²/C ✅.

### Example 4: Cube ke Centre par Charge (Ek Face se Flux)
A point charge **q = +10 μC** is placed **5 cm** directly above the centre of a horizontal square of side **10 cm**. Find the electric flux through the square.

**Hal (Solution):**
- Dhyaan se dekho! Square ki side = 10 cm, aur charge uske centre se 5 cm (yaani aadhi side = 10/2 cm) upar hai!
- Hum is square ko ek **10 cm × 10 cm × 10 cm** imaginary cube ka bottom face maan sakte hain — jiske bilkul **centre** par +10 μC charge rakha hai!
- Poore cube se total flux = q / ε₀.
- Symmetry se 6 faces mein barabar batega ⟹ ek square face se flux:
  **Φ_face = q / (6 ε₀)** = (10 × 10⁻⁶) / (6 × 8.854 × 10⁻¹²) = 10 × 10⁶ / 53.124 ≈ **1.88 × 10⁵ N m²/C**.
- **Jaanch:** 6 × 8.854 = 53.124; 10 / 53.124 ≈ 0.18824 ⟹ 1.88 × 10⁵ N m²/C ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Plane ke saath diya gaya angle seedha cos θ mein daal dena!**
   - *Galat:* Agar sawaal kahe "plane makes 30° with electric field E", to seedha Φ = EA cos 30° likh dena.
   - *Sahi:* Formula mein **θ normal (area vector) aur E ke beech ka angle** hota hai! Agar plane field se 30° banata hai, to normal field se **90° − 30° = 60°** banayega ⟹ Φ = EA cos 60°!
2. **Sochna ki Gaussian surface bada karne se flux badh jaata hai:**
   - *Galat:* Radius double hone par area 4 guna hota hai to flux 4 guna ho jayega.
   - *Sahi:* Radius double hone par area 4 guna hota hai, par E (1/r² ke hisaab se) **1/4 guna** ho jaata hai! 4 × (1/4) = 1 ⟹ **flux bilkul nahi badalta**!
3. **Bahar rakhe charges ko q_enc mein jod dena:**
   - *Galat:* Surface ke bahar wale charge ko bhi q_enc mein add kar dena.
   - *Sahi:* q_enc mein **sirf surface ke andar** maujood charges aate hain. Bahar wala charge jitna inward flux deta hai, utna hi outward flux deta hai — net zero!

---

## Quick Recap

| Concept | Formula / Fact | Key Point |
|---|---|---|
| Electric Flux (uniform E) | Φ = E A cos θ | θ = angle between **normal** and E; unit N m²/C |
| Max / Zero flux | θ = 0° ⟹ +EA; θ = 90° ⟹ 0 | Plane parallel to E means zero flux |
| Gauss's Law | Φ = q_enc / ε₀ | Independent of shape & size of closed surface |
| Dipole inside closed surface | Φ = 0 | Because q_enc = +q − q = 0 |
| Charge at centre of cube | Φ_one face = q / (6ε₀) | By symmetry of 6 identical faces |

---

## Practice Questions

1. Write the SI unit of electric flux. Is it a scalar or a vector quantity?
2. A uniform electric field E = 4000 N/C passes through a rectangular sheet of dimensions 20 cm × 25 cm. Find the flux if the normal to the sheet makes an angle of 0° with E.
3. In Question 2, what is the electric flux if the **plane** of the rectangular sheet makes an angle of 30° with the electric field E?
4. State whether True or False: If the net electric flux through a closed surface is zero, the electric field must be zero at every point on the surface.
5. A spherical Gaussian surface of radius 10 cm encloses a charge of −4.427 μC. Find the net electric flux through the surface (ε₀ = 8.854 × 10⁻¹² C²/(N m²)). What does the negative sign mean?
6. If the radius of the Gaussian surface in Question 5 is tripled to 30 cm without changing the charge inside, what will be the new electric flux?
7. Two concentric spheres S₁ and S₂ enclose charges Q and 3Q respectively (so Q is inside S₁, and 3Q is between S₁ and S₂). Find the ratio of electric flux through S₁ to that through S₂.
8. A point charge of +17.708 μC is placed at the centre of a cube of side 12 cm. Find (a) the total flux through the cube, and (b) the flux through each face of the cube.
9. Three electric dipoles are placed inside a closed cubical box. What is the total electric flux coming out of the box?
10. A cylinder of radius R and length L is placed in a uniform electric field E parallel to its axis. Show that the total electric flux through the closed cylinder is zero.

### Answers

1. SI unit: **N m²/C** (or V m). Electric flux ek **scalar quantity** hai (do vectors E aur A ka dot product hai).

2. Area A = 0.20 m × 0.25 m = 0.05 m².
   Φ = E A cos 0° = 4000 × 0.05 × 1 = **200 N m²/C**.
   Jaanch: 4000 × 5/100 = 200 ✅.

3. Plane E se 30° banata hai ⟹ normal (area vector) E se **θ = 90° − 30° = 60°** banayega!
   Φ = E A cos 60° = 4000 × 0.05 × 0.5 = **100 N m²/C**.
   Jaanch: 200 × 0.5 = 100 ✅.

4. **False ❌.** Net flux zero hone ka matlab sirf itna hai ki q_enc = 0 (jitni field lines andar aayein utni bahar nikal gayin — jaise uniform field mein rakha cube, ya andar rakha dipole). Surface par har point par E non-zero ho sakta hai!

5. Φ = q_enc / ε₀ = (−4.427 × 10⁻⁶) / (8.854 × 10⁻¹²) = **−5.0 × 10⁵ N m²/C**.
   Negative sign ka matlab hai ki net flux **inward** (sphere ke andar ki taraf) hai, kyunki negative charge field lines ko andar kheenchta hai.
   Jaanch: 4.427 / 8.854 = 0.5; −0.5 × 10⁶ = −5.0 × 10⁵ ✅.

6. **−5.0 × 10⁵ N m²/C (bilkul wahi rahega!)** — Gauss's law ke anusaar flux Gaussian surface ke radius ya size par depend nahi karta.

7. S₁ ke andar net charge = Q ⟹ Φ₁ = Q / ε₀.
   S₂ ke andar net charge = Q + 3Q = 4Q ⟹ Φ₂ = 4Q / ε₀.
   Ratio **Φ₁ : Φ₂ = 1 : 4**.
   Jaanch: (Q/ε₀) / (4Q/ε₀) = 1/4 ✅.

8. (a) Total flux Φ = (17.708 × 10⁻⁶) / (8.854 × 10⁻¹²) = **2.0 × 10⁶ N m²/C**.
   (b) Har face se flux = Φ / 6 = (2.0 × 10⁶) / 6 ≈ **3.33 × 10⁵ N m²/C**.
   Jaanch: 17.708 / 8.854 = 2.0; 2/6 = 1/3 ≈ 0.333 ✅.

9. Har dipole ka net charge = +q − q = 0. Teen dipoles ka bhi net charge q_enc = 0 ⟹ **Φ = 0**.

10. Cylinder ke teen hisse hain:
    - Left circular face (area πR²): normal bahar (E ke opposite, θ = 180°) ⟹ Φ_left = −E πR².
    - Right circular face (area πR²): normal bahar (E ke parallel, θ = 0°) ⟹ Φ_right = +E πR².
    - Curved surface: normal har jagah E ke perpendicular (θ = 90°) ⟹ Φ_curved = 0.
    Total flux = −E πR² + E πR² + 0 = **0** (jo Gauss's law se bhi match karta hai kyunki andar koi charge nahi hai!). Jaanch: −EπR² + EπR² = 0 ✅.

---

Ab tum Electric Flux calculate karna aur Gauss's Law ka asli taqatwar matlab samajh chuke ho.

**Agle topic mein:** Gauss's Law ko action mein laate hain — ek **lambi charged taar**, ek **badi charged sheet**, aur ek **hollow charged sphere** ka electric field bina mushkil integration ke chutkiyon mein nikaalenge!
