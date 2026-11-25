# Chapter: Structure of Atom (Part 4)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [structure-of-atom-part3.md](structure-of-atom-part3.md) se aage chalti hai** (wahan humne de Broglie matter waves aur Heisenberg Uncertainty Principle dekha, jisne Bohr ke fixed 2D orbits ko khatam kar diya). Chapter ki shuruaat: [structure-of-atom.md](structure-of-atom.md).
> **Topics covered in this file:**
> 4. Quantum Mechanical Model: Orbitals, Chaar Quantum Numbers, Shapes of Orbitals aur Nodes

---

# Topic 4: Quantum Mechanical Model: Orbitals, Chaar Quantum Numbers, Shapes of Orbitals aur Nodes

Topic 3 mein Heisenberg Uncertainty Principle ne humein bataya ki hum ye nahi keh sakte ki electron is waqt "theek is bindu par aur is speed se" chal raha hai. Par hum ye **bilkul pakka** bata sakte hain ki nucleus ke chaaron taraf kis 3D ilaaqe (region) mein electron ke milne ki **sambhavna (probability) sabse zyada (90–95%)** hai! 1926 mein Erwin Schrödinger ne isi ko ganit ka roop diya — **Quantum Mechanical Model of Atom**. Aaj hum **Orbitals**, unka poora pata batane wale **Chaar Quantum Numbers (n, l, mₗ, mₛ)**, **s, p aur d orbitals ke 3D shapes**, aur **Nodes** ginne ka pakka formula seekhenge!

---

## Pradnya aur Didi ke university hostel ka chaar-hisson wala pata

Pradnya apni Didi ko unke university hostel par ek parcel bhej rahi thi. Lifafe par pata chaar hisson mein likha tha:
- **Floor Number (Manzil):** 3
- **Wing ka Aakaar:** Dumbbell-shaped East Wing (p-wing)
- **Room ki Disha:** North-facing Room (−1)
- **Bed / Bunk:** Upper Bunk (+½)

Pradnya ne haskar Didi ko phone par kaha, "Didi, itna lamba pata! Sirf Floor 3 likh deti to kya parcel aap tak nahi pahunchta?" Didi bolin, "Bilkul nahi Pradnya! Floor 3 par to teen alag wings hain, har wing mein alag rooms hain, aur har room mein do roommates rehte hain! Jab tak chaaron hisse — Floor, Wing, Room aur Bunk — na likho, kisi ek student ki pakki pehchaan nahi hoti. Atom ke andar har electron ka bhi bilkul aisa hi **chaar-number wala pata** hota hai — jinhein **Quantum Numbers** kehte hain!" Chalo, is quantum pate ko khol kar samajhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Wave function (ψ)** | Schrödinger equation ka mathematical solution; khud ψ ka seedha physical matlab nahi, par uska square probability deta hai | Har orbital ka apna ψ hota hai |
| **Probability density (ψ²)** | Kisi bindu par electron ke paaye jaane ki sambhavna (hamesha ≥ 0) | Nucleus ke paas 1s ke liye ψ² sabse zyada |
| **Orbital** | Nucleus ke chaaron taraf ka wo 3D ilaaqa jahan electron milne ki sambhavna sabse zyada (90–95%) hoti hai | 1s (golaakar), 2pₓ (dumbbell) |
| **Quantum numbers (n, l, mₗ, mₛ)** | Chaar sankhyayein jo kisi electron ke shell, subshell shape, 3D orientation aur spin ka poora pata deti hain | (3, 2, −1, +½) → 3d orbital ka ek electron |
| **Node (Nodal surface)** | Orbital ke andar wo bindu ya satah jahan electron milne ki sambhavna **bilkul ZERO (ψ² = 0)** hoti hai | 2s mein 1 spherical radial node; 2pₓ mein 1 planar angular node |
| **Degenerate orbitals** | Ek hi subshell ke aise orbitals jinki energy bilkul barabar hoti hai | 2pₓ, 2pᵧ, 2p_z (teeno ki energy same) |

---

## Part A: Orbit banaam Orbital (Class 9 se Class 11 ki Chhalaang!)

| Gun (Feature) | Orbit (Bohr Model) | Orbital (Quantum Mechanical Model) |
|---|---|---|
| **Aakaar aur Dimension** | 2D chapta gol rasta (circular path) | **3D** probability cloud (golaakar, dumbbell, double-dumbbell) |
| **Heisenberg Principle** | Is niyam ke khilaaf jaata hai (exact path maanta hai) | Is niyam ka poori tarah paalan karta hai |
| **Adhiktam Electrons** | 2n² electrons | Ek single orbital mein adhiktam sirf **2 electrons** (ulte spin ke saath) |
| **Disha (Directional)** | Hamesha gol (non-directional) | s ko chhodkar p, d, f sab **directional** hote hain (chemical bonds ke angles isi se bante hain!) |

---

## Part B: Chaar Quantum Numbers (Electron ka 4-Hisson Wala Pata)

1. **Principal Quantum Number (n) — Shell / Manzil:**
   - **Allowed values:** n = 1, 2, 3, 4, ... (K, L, M, N shells).
   - **Kya batata hai:** Orbital ka **size** aur (H atom mein) uski **energy**.
   - Ek shell n mein kul orbitals = **n²**, aur adhiktam electrons = **2n²**.

2. **Azimuthal / Angular Momentum Quantum Number (l) — Subshell / Wing ka Aakaar:**
   - **Allowed values:** **l = 0 se lekar (n − 1) tak** (yaani l kabhi n ke barabar ya bada nahi ho sakta!).
   - **Kya batata hai:** Orbital ka **3D shape** (aur multi-electron atom mein subshell energy):
     - **l = 0 → s** (spherical / golaakar)
     - **l = 1 → p** (dumbbell)
     - **l = 2 → d** (double-dumbbell / cloverleaf)
     - **l = 3 → f** (complex 3D)

3. **Magnetic Quantum Number (mₗ) — 3D Orientation / Room ki Disha:**
   - **Allowed values:** **mₗ = −l, ..., 0, ..., +l** (kul **2l + 1** values = us subshell mein orbitals ki sankhya!).
     - s (l = 0): mₗ = 0 → **1 orbital**
     - p (l = 1): mₗ = −1, 0, +1 → **3 orbitals** (pₓ, pᵧ, p_z)
     - d (l = 2): mₗ = −2, −1, 0, +1, +2 → **5 orbitals**
     - f (l = 3): mₗ = −3, −2, −1, 0, +1, +2, +3 → **7 orbitals**

4. **Spin Quantum Number (mₛ) — Bunk (Upper / Lower):**
   - **Allowed values:** Sirf **+½ (↑)** ya **−½ (↓)**! (Ye Schrödinger equation se nahi aaya, balki baad mein electron ke apni dhuri par magnetic spin ki khoj se joda gaya.)

### Example 1. n = 1, 2, 3 ke Sabhi Subshells aur Orbitals ki Ginti

| Shell (n) | Allowed l (0 se n−1) | Subshell | Orbitals (2l + 1) | Shell mein Kul Orbitals (n²) | Max Electrons (2n²) |
|---|---|---|---|---|---|
| n = 1 | 0 | 1s | 1 | 1² = **1** | 2 |
| n = 2 | 0, 1 | 2s, 2p | 1 + 3 | 2² = **4** | 8 |
| n = 3 | 0, 1, 2 | 3s, 3p, 3d | 1 + 3 + 5 | 3² = **9** | 18 |

**Jaanch:** n = 3 mein 1 + 3 + 5 = 9 orbitals = 3², aur 9 × 2 = 18 electrons = 2(3²) ✅.

### Example 2. Kaun-sa Quantum Number Set Sahi Hai aur Kaun-sa Illegal?

**Sawaal:** In teen sets (n, l, mₗ, mₛ) ki jaanch karo:
(a) (3, 2, −1, +½)   (b) (2, 2, 0, +½)   (c) (3, 1, −2, −½)

**Hal:**
- (a) n = 3, l = 2 (0 se 2 ke beech valid → **3d**), mₗ = −1 (−2 se +2 ke beech valid), mₛ = +½ (valid) → **Valid set (3d orbital)**!
- (b) n = 2, l = 2 → **Invalid!** Kyunki l sirf (n − 1) = 1 tak hi ho sakta hai (2d orbital exist nahi karta!).
- (c) n = 3, l = 1, mₗ = −2 → **Invalid!** Kyunki l = 1 ke liye mₗ sirf −1, 0, +1 ho sakta hai (−2 bahar hai!).

**Jaanch:** Har valid set ke liye teen shartein: n ≥ 1, 0 ≤ l ≤ n − 1, −l ≤ mₗ ≤ +l, aur mₛ = ±½ ✅.

---

## Part C: s, p aur d Orbitals ke 3D Shapes aur Nodes ka Formula

1. **s-orbitals (1s, 2s, 3s):** Har disha mein ek jaise — **golaakar (spherically symmetric)**. 1s ke andar koi node nahi; 2s mein ek golaakar (spherical) node hota hai; 3s mein do!
2. **p-orbitals (2pₓ, 2pᵧ, 2p_z):** **Dumbbell** aakaar (do lobes nucleus ke dono taraf). Teeno ek doosre par 90° (x, y, z axes par) hote hain. Har p-orbital ke beech se ek **nodal plane** guzarta hai (jaise 2p_z ka nodal plane xy-plane hai).
3. **d-orbitals (paanch 3d orbitals):** Chaar orbitals — **d_xy, d_yz, d_xz** (lobes axes ke beech 45° par) aur **d_x²−y²** (lobes x aur y axes ke upar) — **cloverleaf (double-dumbbell)** aakaar ke hote hain. Paanchwa **d_z²** khas hai: z-axis par ek dumbbell aur beech mein xy-plane mein ek **donut (ring)**! Sabhi paanchon 3d orbitals ki energy barabar (**degenerate**) hoti hai.

```
     1s (Golaakar)            2p_z (Dumbbell)          d_xy (Cloverleaf)
                                   z                        y
         . - .                    ( )                     ( )   ( )
       .'  +  '.                  (+)  <-- xy nodal       \  +  /
        ' - '                     ( )      plane          ( )   ( )
                                                            x
```

> **Figure 4.1** – 1s (golaakar), 2p_z (z-axis par dumbbell, xy-nodal plane ke saath) aur d_xy (axes ke beech chaar lobes wala cloverleaf) orbitals ke simple 2D khake.

### Nodes Ginne ke Teen Pakke Formulas (Kabhi Galti Nahi Hogi!)
- **Radial (Spherical) Nodes** = **n − l − 1**
- **Angular (Planar/Conical) Nodes** = **l**
- **Total Nodes** = (n − l − 1) + l = **n − 1**

### Example 3. 3s, 3p aur 3d Orbitals mein Nodes ki Ginti

**Sawaal:** 3s, 3p aur 3d orbitals mein radial, angular aur total nodes nikaalo.

**Hal:**
- **3s (n = 3, l = 0):** Radial = 3 − 0 − 1 = **2**; Angular = **0**; Total = **2**.
- **3p (n = 3, l = 1):** Radial = 3 − 1 − 1 = **1**; Angular = **1**; Total = **2**.
- **3d (n = 3, l = 2):** Radial = 3 − 2 − 1 = **0**; Angular = **2**; Total = **2**.

**Jaanch:** Teeno mein n = 3 hai, isliye teeno ke total nodes = n − 1 = 3 − 1 = 2 (2+0, 1+1, 0+2) ✅.

### Radial Probability Distribution Curves (4πr²ψ² vs r) aur Orbital Angular Momentum

1. **Radial Probability Distribution (4πr²ψ² vs r):** Nucleus par (r = 0) surface area 4πr² zero hota hai, isliye har orbital ka graph 0 se shuru hota hai:
   - **1s:** 1 peak (Bohr radius **a₀ = 52.9 pm** par!), 0 radial nodes.
   - **2s:** **2 peaks** (ek chhota peak andar, ek bada peak bahar) aur unke beech **1 radial node** (jahan graph r-axis ko chhoota hai)!
   - **2p:** Sirf **1 peak**, 0 radial nodes! *(Isi andar wale chhote peak ki wajah se 2s orbital 2p se zyada nucleus ke paas "penetrate" karta hai!)*
2. **Orbital Angular Momentum Formula:** Azimuthal quantum number **l** se electron ka orbital angular momentum milta hai:
   > **L = √(l(l + 1)) × (h / 2π)**

### Example 4. s, p, d aur f Electrons ka Orbital Angular Momentum

**Sawaal:** 3s, 3p, 3d aur 4f orbitals mein baithe electron ka orbital angular momentum **h/(2π)** ke roop mein nikaalo.

**Hal:**
- **3s (l = 0):** L = √(0 × 1) × h/(2π) = **0** *(har s-electron ka orbital angular momentum 0 hota hai!)*
- **3p (l = 1):** L = √(1 × 2) × h/(2π) = **√2 × h/(2π)**.
- **3d (l = 2):** L = √(2 × 3) × h/(2π) = **√6 × h/(2π)**.
- **4f (l = 3):** L = √(3 × 4) × h/(2π) = **√12 × h/(2π) = 2√3 × h/(2π)**.

**Jaanch:** Orbital angular momentum sirf l par nirbhar karta hai (n par nahi — 2p aur 3p dono ka √2 h/2π!) ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: l ko n ke barabar maan lena ("2d" ya "3f" orbital likh dena).**
   *Sahi baat:* l hamesha 0 se **(n − 1)** tak chalta hai. Isliye 1p, 2d aur 3f orbitals prakriti mein **exist hi nahi karte**!

2. **Galti 2: mₗ ko l se bada likh dena.**
   p-orbital (l = 1) mein ek student ne mₗ = +2 ko valid bol diya!
   *Sahi baat:* mₗ sirf **−l se +l** ke beech rehta hai (p ke liye sirf −1, 0, +1).

3. **Galti 3: Total nodes ko n maan lena ya angular nodes bhool jaana.**
   2p mein ek student ne "2 − 1 − 1 = 0" dekh kar bol diya ki 2p mein koi node nahi hota!
   *Sahi baat:* 0 to sirf **radial** nodes the! 2p mein **1 angular nodal plane** (l = 1) hota hai, isliye total nodes = n − 1 = 1!

4. **Galti 4: Orbit aur Orbital ko ek hi samajh lena.**
   Orbit (n = 2) mein 8 electrons aa sakte hain, par ek akela **orbital** (jaise 2pₓ) chahe kisi bhi shell ka ho, usmein adhiktam sirf **2 electrons** aate hain!

---

## Quick Recap

- **|ψ|²** probability density batata hai; **Orbital** 3D probability region hai (max 2 electrons).
- **4 Quantum Numbers:** n (1, 2, 3... shell/size), l (0 se n−1, subshell shape s/p/d/f), mₗ (−l se +l, 2l + 1 orientations), mₛ (+½ ya −½ spin).
- **Nodes:** Radial = **n − l − 1**, Angular = **l**, Total = **n − 1**.
- Paanchon 3d orbitals (d_xy, d_yz, d_xz, d_x²−y², d_z²) degenerate hote hain.

---

## Practice Questions

1. Name the subshell (such as 2s, 3p, 4f) designated by each pair of quantum numbers (n, l): (a) n = 4, l = 0; (b) n = 3, l = 2; (c) n = 4, l = 3; (d) n = 5, l = 1.
2. Examine each set of four quantum numbers (n, l, mₗ, mₛ) and state whether it is **possible** or **not possible** (give a brief reason for every impossible set):
   (a) (4, 1, 0, −½)
   (b) (1, 1, 0, +½)
   (c) (3, 0, +1, +½)
   (d) (4, 3, −3, −½)
   (e) (2, 1, −1, 0)
3. How many orbitals and how many maximum electrons can exist in:
   (a) the n = 4 shell?
   (b) the 3d subshell (n = 3, l = 2)?
   (c) the n = 4 shell with spin quantum number mₛ = +½?
4. Calculate the number of **radial nodes**, **angular nodes**, and **total nodes** for each of the following orbitals: (a) 2s, (b) 2p, (c) 4s, (d) 4p, (e) 4d, (f) 4f.
5. Why do the **1p**, **2d** and **3f** subshells not exist in any atom?
6. List the names of all **five 3d orbitals**. How does the shape of the **d_z²** orbital differ from the other four d-orbitals?
7. State three clear differences between a **Bohr orbit** and a **quantum mechanical orbital**.
8. What is the **nodal plane** of a 2pₓ orbital and of a 2pᵧ orbital? Where does the electron probability density equal zero in a 2s orbital?
9. How many electrons in an atom can simultaneously have the quantum numbers **n = 3, l = 1, mₗ = 0**? Write the complete four-quantum-number sets for all such electrons.
10. State whether each statement is True or False, and correct the false ones:
    (a) For any orbital, the sum of radial nodes and angular nodes always equals n − 1.
    (b) An f-subshell (l = 3) contains 5 degenerate orbitals.
    (c) The wave function ψ itself can be negative, but the probability density |ψ|² is always non-negative.
    (d) All s-orbitals are spherically symmetrical and have zero angular nodes.
11. Calculate the **orbital angular momentum** (in terms of h/2π) of an electron in (a) a **2s** orbital, (b) a **4p** orbital, and (c) a **5d** orbital. Does it depend on the principal quantum number n?
12. How many peaks and how many radial nodes appear in the **radial probability distribution curve (4πr²ψ² vs r)** of (a) **1s**, (b) **2s**, (c) **3s**, and (d) **3p** orbitals?

### Answers

1. (a) **4s**, (b) **3d**, (c) **4f**, (d) **5p**.
   Jaanch: l = 0 (s), 1 (p), 2 (d), 3 (f) ✅.

2. (a) **Possible** (4p orbital ka ek electron).
   (b) **Not possible** — n = 1 ke liye l sirf 0 ho sakta hai (l = n allowed nahi).
   (c) **Not possible** — l = 0 ke liye mₗ sirf 0 ho sakta hai (+1 nahi).
   (d) **Possible** (4f orbital ka ek electron).
   (e) **Not possible** — mₛ sirf +½ ya −½ ho sakta hai, 0 kabhi nahi.

3. (a) n = 4 mein orbitals = n² = **16**, max electrons = 2n² = **32**.
   (b) 3d (l = 2) mein orbitals = 2l + 1 = **5**, max electrons = 5 × 2 = **10**.
   (c) n = 4 ke 32 electrons mein se theek aadhe (+½ spin wale) = **16 electrons**.
   Jaanch: 16 orbitals × 1 (+½) = 16 ✅.

4. Formula: Radial = n − l − 1, Angular = l, Total = n − 1:
   - (a) **2s (2, 0):** Radial 1, Angular 0, Total **1**.
   - (b) **2p (2, 1):** Radial 0, Angular 1, Total **1**.
   - (c) **4s (4, 0):** Radial 3, Angular 0, Total **3**.
   - (d) **4p (4, 1):** Radial 2, Angular 1, Total **3**.
   - (e) **4d (4, 2):** Radial 1, Angular 2, Total **3**.
   - (f) **4f (4, 3):** Radial 0, Angular 3, Total **3**.
   Jaanch: Har 4-shell orbital mein Radial + Angular = 3 = 4 − 1 ✅.

5. Niyam 0 ≤ l ≤ n − 1 ke anusar: n = 1 mein l = 1 (p) nahi ho sakta; n = 2 mein l = 2 (d) nahi ho sakta; n = 3 mein l = 3 (f) nahi ho sakta. Isliye 1p, 2d aur 3f exist nahi karte.

6. Paanchon 3d orbitals: **d_xy, d_yz, d_xz, d_x²−y², d_z²**. Pehle chaar cloverleaf (chaar lobes) aakaar ke hain, jabki **d_z²** mein z-axis par do lobes aur beech mein xy-plane mein ek ring (donut) hoti hai.

7. (1) Orbit 2D gol rasta hai, orbital 3D probability cloud hai; (2) Orbit Heisenberg principle ke khilaaf hai, orbital iska paalan karta hai; (3) Ek orbit mein 2n² electrons aa sakte hain, jabki ek orbital mein max 2 electrons aate hain.

8. 2pₓ ka nodal plane **yz-plane** hai; 2pᵧ ka nodal plane **xz-plane** hai. 2s orbital mein electron probability ek **golaakar (spherical) radial nodal surface** par zero hoti hai.

9. Ek single orbital (n = 3, l = 1, mₗ = 0) mein adhiktam sirf **2 electrons** aa sakte hain:
   **(3, 1, 0, +½)** aur **(3, 1, 0, −½)**.
   Jaanch: Dono ke mₛ alag-alag hain ✅.

10. (a) **True** ✅. (n − l − 1) + l = n − 1.
    (b) **False** ❌. f-subshell (l = 3) mein 2(3) + 1 = **7** degenerate orbitals hote hain (5 d-subshell mein hote hain).
    (c) **True** ✅. Kisi bhi real number ka square hamesha ≥ 0 hota hai.
    (d) **True** ✅. s-orbital ke liye l = 0 → angular nodes = 0.

11. L = √(l(l + 1)) × h/(2π):
    (a) **2s (l = 0):** **0**.
    (b) **4p (l = 1):** **√2 × h/(2π)**.
    (c) **5d (l = 2):** **√6 × h/(2π)**.
    Nahi, orbital angular momentum sirf **l** par nirbhar karta hai, **n** par nahi!

12. Radial nodes = n − l − 1, aur peaks = radial nodes + 1 = **n − l**:
    (a) **1s:** 0 radial nodes, **1 peak**.
    (b) **2s:** 1 radial node, **2 peaks**.
    (c) **3s:** 2 radial nodes, **3 peaks**.
    (d) **3p:** 1 radial node, **2 peaks**.
    Jaanch: Har orbital mein peaks = (n − l − 1) + 1 = n − l ✅.

---

Ab tum atom ke har electron ka chaar-number wala quantum pata padh sakte ho aur kisi bhi orbital ke shapes aur nodes gin sakte ho!

**Aage kya?** Kamre (orbitals) to ban gaye — par jab ek atom mein 7, 24, ya 29 electrons hon, to we in kamron mein kis kram se bharte hain? **4s** kamra **3d** se pehle kyun bharta hai, aur **Chromium (24)** tatha **Copper (29)** apna kram kyun badal dete hain? Agle topic (**Topic 5**) mein hum **Aufbau Principle, Pauli Exclusion Principle, Hund's Rule aur Electronic Configurations** seekhenge!
