# Chapter: Electrostatic Potential and Capacitance (Part 4)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Conductors and Dielectrics in Electric Fields](electrostatic-potential-and-capacitance-part3.md)

---

## Camera Flash ki Ek Second ki Chamak

Family function mein **Anshul** apne Papa ke DSLR camera se photos kheench raha tha. Usne notice kiya ki flash chalne se pehle camera 1–2 second tak halka sa charge hota hai, aur button dabate hi ek millisecond mein zabardast roshni chhod deta hai! Papa ne bataya: "Camera ki chhoti battery itna tez power ek saath nahi de sakti. Isliye camera ke andar ek **Capacitor** hota hai — woh battery se dheere-dheere electric energy store kar leta hai, aur flash ke waqt ek jhatke mein saari energy de deta hai!"

Aaj hum seekhenge ki **Capacitor** kya hota hai, iski **Capacitance** kin cheezon par depend karti hai, aur ismein kitni **Energy** store hoti hai!

---

## Naye Shabd (New Words)

- **Capacitor:** Do conductors (plates) ka aisa system jo ek insulator (ya vacuum) se alag hote hain aur barabar-opposite charges (+Q aur −Q) lekar **electrical energy store** karte hain.
- **Capacitance (C):** Kisi capacitor ki charge store karne ki shamta: C = Q / V (per unit potential difference kitna charge store hota hai). SI unit **Farad (F) = C/V**. (Practical units: **1 μF = 10⁻⁶ F**, **1 nF = 10⁻⁹ F**, **1 pF = 10⁻¹² F**.)
- **Parallel Plate Capacitor:** Do badi flat parallel conducting plates (har ek ka area A, unke beech doori d).
- **Energy Density (u):** Electric field ke per unit volume mein store hui electrostatic energy: u = ½ ε₀ E² (SI unit J/m³).

---

## 1. Capacitance aur Parallel Plate Capacitor

Kisi capacitor ki plates par charge **+Q** aur **−Q** dene par unke beech potential difference **V** banta hai. Charge V ke directly proportional hota hai (Q ∝ V) ⟹

**C = Q / V**

**Zaroori Baat:** Capacitance **C** na to Q par depend karti hai, na V par! (Jaise ek balti ki capacity 10 litre hai — chahe usmein 2 litre paani bharo ya 5 litre, balti ka size nahi badalta!) **C sirf geometry (size, shape, separation) aur beech ke medium (dielectric K)** par depend karti hai!

### Parallel Plate Capacitor (Derivation — 3 Steps!):
Maan lo do parallel plates (area **A**, beech ki doori **d**) par **+Q** aur **−Q** charge hai (surface charge density **σ = Q / A**).

```
      +Q (+sigma)            -Q (-sigma)
         :                      :
         :  E = sigma / eps0    :
         :  ----------------->  :
         :                      :
         :<-------- d --------->:
```

1. Pichhle chapter (Gauss's law) se dono plates ke beech uniform electric field:
   **E = σ / ε₀ = Q / (ε₀ A)**.
2. Uniform field mein plates ke beech potential difference:
   **V = E × d = (Q d) / (ε₀ A)**.
3. Capacitance C = Q / V mein V rakho (Q kat gaya!):

**C₀ = (ε₀ A) / d**  *(vacuum / air mein)*

### Dielectric Slab Daalne ka Asar:
- **Poori jagah dielectric (K) bhar dein:** Field ghat kar E₀/K ho jaata hai ⟹ V ghat kar V₀/K ho jaata hai ⟹ Capacitance **K guna badh jaati hai**:
  **C = K C₀ = (K ε₀ A) / d**
- **Sirf thickness t (< d) ka dielectric slab daalein** (baaki d − t jagah hawa hai):
  V = E₀(d − t) + (E₀/K) t = E₀ [ d − t + t/K ] ⟹
  **C = (ε₀ A) / [ d − t + t/K ]**
  *(Check: t = d rakho to C = K ε₀ A / d; t = 0 rakho to C = ε₀ A / d!)*

---

## 2. Capacitors ke Combinations (Series aur Parallel)

Dhyaan se dekhna — capacitors ke formulas resistors ke **bilkul ulte** hote hain!

### (a) Series Combination (Ek ke Peeche Ek):
- Har capacitor par **charge Q SAME** hota hai!
- Total voltage bant jaata hai: **V = V₁ + V₂ + V₃** ⟹ Q/C_s = Q/C₁ + Q/C₂ + Q/C₃ ⟹

**1 / C_s = 1 / C₁ + 1 / C₂ + 1 / C₃**

*(Do capacitors ke liye shortcut: **C_s = (C₁ C₂) / (C₁ + C₂)** — equivalent capacitance sabse chhote capacitor se bhi chhoti aati hai!)*

### (b) Parallel Combination (Aamne-Saamne):
- Har capacitor ke across **voltage V SAME** hota hai!
- Total charge bant jaata hai: **Q = Q₁ + Q₂ + Q₃** ⟹ C_p V = C₁ V + C₂ V + C₃ V ⟹

**C_p = C₁ + C₂ + C₃**

*(Equivalent capacitance sabse bade capacitor se bhi badi aati hai!)*

---

## 3. Capacitor mein Stored Energy aur Energy Density

Jab hum uncharged capacitor ko 0 se Q charge tak charge karte hain, to voltage 0 se V tak linearly badhta hai ⟹ **average voltage = (0 + V) / 2 = V / 2**!
Isliye battery/external agent dwara kiya gaya total kaam (jo plates ke beech electric field mein potential energy **U** ke roop mein store hota hai):

**U = Q × V_avg = ½ Q V**

Q = CV aur V = Q/C rakhne par teen super-useful forms milte hain:

**U = ½ Q V = ½ C V² = Q² / (2 C)**

### Energy Density (Per Unit Volume Energy):
Parallel plate capacitor ka volume = **A × d**, C = ε₀A/d aur V = E d rakhne par:
U = ½ (ε₀ A / d) (E d)² = **(½ ε₀ E²) × (A d)**
Volume (A d) se divide karo to milta hai **Energy Density (u)**:

**u = U / Volume = ½ ε₀ E²**  *(dielectric mein: ½ K ε₀ E²)*

---

## Solved Examples

### Example 1: Parallel Plate Capacitor (Air aur Dielectric)
A parallel plate capacitor has plates of area **A = 200 cm²** separated by **d = 2 mm**. Calculate its capacitance (a) with air between the plates, and (b) when a mica sheet of dielectric constant **K = 5** completely fills the space. (Take ε₀ = 8.854 × 10⁻¹² F/m.)

**Hal (Solution):**
- A = 200 cm² = 200 × 10⁻⁴ m² = 2.0 × 10⁻² m², d = 2 mm = 2.0 × 10⁻³ m.
- (a) Air mein: C₀ = (ε₀ A) / d = (8.854 × 10⁻¹² × 2.0 × 10⁻²) / (2.0 × 10⁻³)
  = 8.854 × 10⁻¹¹ F = **88.54 pF**.
- (b) Mica (K = 5) ke saath: C = K C₀ = 5 × 88.54 pF = **442.7 pF**.
- **Jaanch:** 2.0 × 10⁻² / 2.0 × 10⁻³ = 10; 8.854 × 10⁻¹¹ = 88.54 × 10⁻¹² F = 88.54 pF; 5 × 88.54 = 442.7 pF ✅.

### Example 2: Series aur Parallel Combination
Two capacitors **C₁ = 6 μF** and **C₂ = 3 μF** are connected to a **12 V** battery (a) in series, and (b) in parallel. Find the equivalent capacitance and charge on C₁ in each case.

**Hal (Solution):**
- (a) **Series:**
  C_s = (C₁ C₂) / (C₁ + C₂) = (6 × 3) / (6 + 3) = 18 / 9 = **2 μF**.
  Series mein har capacitor par same total charge hota hai:
  Q = C_s × V = 2 μF × 12 V = **24 μC** (C₁ par bhi 24 μC aur C₂ par bhi 24 μC!).
- (b) **Parallel:**
  C_p = C₁ + C₂ = 6 + 3 = **9 μF**.
  Parallel mein C₁ par poora 12 V hai:
  Q₁ = C₁ × V = 6 μF × 12 V = **72 μC**.
- **Jaanch:** Series mein V₁ = 24/6 = 4 V, V₂ = 24/3 = 8 V ⟹ V₁ + V₂ = 12 V ✅.

### Example 3: Energy Stored in a Capacitor
A **10 μF** capacitor is charged to **100 V**. Calculate (a) the charge stored, and (b) the electrostatic energy stored in the capacitor.

**Hal (Solution):**
- (a) Q = C V = (10 × 10⁻⁶) × 100 = **1.0 × 10⁻³ C = 1 mC**.
- (b) U = ½ C V² = 0.5 × (10 × 10⁻⁶) × (100)² = 0.5 × 10⁻⁵ × 10⁴ = **0.05 J** (= 50 mJ).
- **Jaanch:** ½ Q V = 0.5 × 10⁻³ × 100 = 0.05 J ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Capacitors ke Series aur Parallel formulas ko Resistors se ulta kar dena:**
   - *Galat:* Series mein C_s = C₁ + C₂ jod dena!
   - *Sahi:* Capacitors mein **Parallel seedha judta hai (C_p = C₁ + C₂)** aur **Series reciprocal hota hai (1/C_s = 1/C₁ + 1/C₂)**!
2. **Sochna ki voltage V double karne se capacitance C aadhi ho jaati hai:**
   - *Galat:* C = Q/V dekh kar bolna ki V badhane se C ghatti hai.
   - *Sahi:* V double karne par Q bhi double ho jaata hai — ratio **C = Q/V constant** rehta hai! C sirf A, d aur K se badalti hai!
3. **Energy ke formula mein 1/2 bhool jaana:**
   - *Galat:* U = Q V likh dena.
   - *Sahi:* Battery poora work **W_battery = Q V** karti hai, par uska **aadha (½ QV)** capacitor mein store hota hai aur **aadha (½ QV)** connecting wires mein heat bankar nikal jaata hai!

---

## Quick Recap

| Concept | Formula | Key Fact |
|---|---|---|
| Capacitance | C = Q / V (SI unit: Farad, F) | Depends only on geometry (A, d) & dielectric K |
| Parallel Plate Capacitor | C₀ = ε₀A/d; full dielectric: Kε₀A/d | Partial slab (thickness t): ε₀A / (d − t + t/K) |
| Series Capacitors | 1/C_s = 1/C₁ + 1/C₂ + ... | Same Q on each; V divides |
| Parallel Capacitors | C_p = C₁ + C₂ + ... | Same V across each; Q divides |
| Stored Energy & Density | U = ½CV² = ½QV = Q²/(2C); u = ½ε₀E² | Half of battery work (½QV) is lost as heat |

---

## Practice Questions

1. On what three physical factors does the capacitance of a parallel plate capacitor depend?
2. A parallel plate air capacitor has plates of area 100 cm² and separation 1 mm. Calculate its capacitance in pF (ε₀ = 8.854 × 10⁻¹² F/m).
3. If the distance between the plates of the capacitor in Question 2 is halved and a dielectric of K = 4 is inserted completely between them, what is the new capacitance?
4. Three capacitors of 2 μF, 3 μF, and 6 μF are connected in (a) series, and (b) parallel. Calculate the equivalent capacitance in each case.
5. Two capacitors of 4 μF and 12 μF are connected in series across a 16 V battery. Find the charge and potential difference across each capacitor.
6. Calculate the energy stored in a 20 μF capacitor charged to a potential difference of 50 V.
7. A 5 μF capacitor holds a charge of 200 μC. Calculate the energy stored in it using U = Q²/(2C).
8. A parallel plate capacitor has plate separation d = 4 mm. A dielectric slab of thickness t = 2 mm and dielectric constant K = 2 is inserted between the plates. By what factor does the capacitance increase?
9. State whether True or False: When a battery of voltage V charges an initially uncharged capacitor to charge Q, 100% of the work done by the battery is stored as electrostatic energy in the capacitor.
10. Find the electrostatic energy density in a region where a uniform electric field E = 2 × 10⁵ V/m exists in vacuum (ε₀ = 8.85 × 10⁻¹² F/m).

### Answers

1. (i) **Area of plates (A)** (C ∝ A), (ii) **Distance between plates (d)** (C ∝ 1/d), aur (iii) **Dielectric constant (K)** of the medium between the plates (C ∝ K).

2. A = 100 × 10⁻⁴ = 10⁻² m², d = 10⁻³ m:
   C₀ = (8.854 × 10⁻¹² × 10⁻²) / 10⁻³ = 8.854 × 10⁻¹¹ F = **88.54 pF**.
   Jaanch: 10⁻²/10⁻³ = 10 ⟹ 88.54 pF ✅.

3. d aadha (d/2) ⟹ C double (×2); K = 4 ⟹ C × 4. Total factor = 2 × 4 = **8 guna**!
   C_new = 8 × 88.54 pF = **708.32 pF**.
   Jaanch: 8 × 88.54 = 708.32 pF ✅.

4. (a) Series: 1/C_s = 1/2 + 1/3 + 1/6 = (3 + 2 + 1)/6 = 6/6 = 1 ⟹ **C_s = 1 μF**.
   (b) Parallel: C_p = 2 + 3 + 6 = **11 μF**.
   Jaanch: 1/2 + 1/3 + 1/6 = 1 ✅.

5. C_s = (4 × 12) / (4 + 12) = 48 / 16 = 3 μF.
   Charge on each capacitor: **Q = 3 μF × 16 V = 48 μC**.
   Potential differences: V₁ = 48 / 4 = **12 V**; V₂ = 48 / 12 = **4 V**.
   Jaanch: V₁ + V₂ = 12 + 4 = 16 V ✅.

6. U = ½ C V² = 0.5 × (20 × 10⁻⁶) × (50)² = 10⁻⁵ × 2500 = **0.025 J = 25 mJ**.
   Jaanch: 10 × 2500 × 10⁻⁶ = 0.025 J ✅.

7. Q = 200 × 10⁻⁶ = 2 × 10⁻⁴ C, C = 5 × 10⁻⁶ F:
   U = Q² / (2C) = (4 × 10⁻⁸) / (10 × 10⁻⁶) = **4.0 × 10⁻³ J = 4 mJ**.
   Jaanch: V = 200/5 = 40 V ⟹ ½ QV = 0.5 × 200 × 10⁻⁶ × 40 = 4.0 × 10⁻³ J ✅.

8. Original C₀ = ε₀ A / d = ε₀ A / 4 (in mm).
   New C = ε₀ A / (d − t + t/K) = ε₀ A / (4 − 2 + 2/2) = ε₀ A / 3.
   Ratio **C / C₀ = 4 / 3 ≈ 1.33** (capacitance increases by a factor of **4/3**!).
   Jaanch: 4 − 2 + 1 = 3 ⟹ C/C₀ = 4/3 ✅.

9. **False ❌.** Battery QV kaam karti hai, par sirf **50% (½ QV)** capacitor mein store hota hai — baaki **50% (½ QV)** heat ke roop mein wires mein kharch ho jaata hai!

10. u = ½ ε₀ E² = 0.5 × (8.85 × 10⁻¹²) × (2 × 10⁵)² = 0.5 × 8.85 × 10⁻¹² × 4 × 10¹⁰ = 2 × 8.85 × 10⁻² = **0.177 J/m³**.
    Jaanch: 0.5 × 4 = 2; 2 × 8.85 = 17.7; 17.7 × 10⁻² = 0.177 J/m³ ✅.

---

Ab tum Parallel Plate Capacitor, Series-Parallel Combinations aur Stored Energy ke sabhi core concepts seekh chuke ho!

**Agle topic mein:** Sab Kuch Mila Kar — zero-potential points, battery connected vs disconnected dielectric puzzles, aur do capacitors ke beech charge-sharing ke energy-loss problems solve karke chapter wrap-up karenge!
