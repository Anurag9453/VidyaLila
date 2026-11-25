# Chapter: Conic Sections (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [conic-sections-part3.md](conic-sections-part3.md) tha** (Topic 3: Ellipse — sum of focal distances = 2a, c² = a² - b², e < 1).
> **Topics covered in this file:**
> 1. Hyperbola: Geometric Definition, Derivation of x²/a² - y²/b² = 1, Relation c² = a² + b², Horizontal vs Vertical Forms, Aur Latus Rectum

---

# Topic 4: Hyperbola

Ellipse mein kisi bhi point P se do foci F₁ aur F₂ ki dooriyon ka **sum (PF₁ + PF₂)** constant tha. Ab bas ek sign badal do — **plus (+) ki jagah minus (-)**!

Agar kisi point P se do fixed foci F₁ aur F₂ ki dooriyon ka **difference (|PF₁ - PF₂| = 2a)** hamesha constant rahe, to band oval ki jagah do aamne-saamne khuli hui symmetric branches banti hain — jise **Hyperbola** kehte hain! Chalo iska math derive karte hain aur dekhte hain ki yeh Ellipse se kahan milta hai aur kahan bilkul alag ho jata hai!

---

## Latika ka LORAN maritime navigation system

Latika ek coastal maritime navigation officer hai. Samundar mein GPS aane se pehle (aur aaj bhi backup ke roop mein) ships LORAN radio navigation se apni location pata karti thin!

Kinare par do radio towers F₁(-c, 0) aur F₂(c, 0) ek hi second par synchronized radio pulse bhejte hain. Ship P par laga receiver dono signals ke pahunchne ke time ka **difference Δt** naapta hai!
- Kyunki radio wave ki speed constant hai, time difference Δt ka seedha matlab hai: **|PF₁ - PF₂| = speed × Δt = constant = 2a**!
- Iska matlab ship ek exact **Hyperbola** par sthit hai!

Latika muskuraayi: "Ellipse mein sum constant hota tha, Hyperbola mein difference constant hota hai — aur yahi chhota sa minus sign poori equation mein ek minus aur c² = a² + b² laa deta hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Hyperbola** | Un sabhi points P ka set jinke liye do foci F₁, F₂ se dooriyon ka difference constant ho: abs(PF₁ - PF₂) = 2a | x²/a² - y²/b² = 1 |
| **Transverse Axis (2a)** | Woh axis jo dono foci aur dono vertices se guzarta hai (length = 2a) | x-axis for x²/a² - y²/b² = 1 |
| **Conjugate Axis (2b)** | Transverse axis par centre se guzarne wala perpendicular axis (length = 2b) | y-axis for x²/a² - y²/b² = 1 |
| **Focal Distance (c)** | Centre se kisi bhi focus ki doori: c = √(a² + b²) (hamesha c > a!) | Foci (±c, 0) |
| **Eccentricity (e)** | Ratio e = c / a (kyunki c > a, isliye hamesha **e > 1**!) | e = 5/3 > 1 |
| **Latus Rectum** | Focus se guzarne wali aur transverse axis par perpendicular chord | Length = 2b² / a |

---

## Part A: Relation Between a, b, c Aur Eccentricity

Triangle inequality ke mutabiq, kisi bhi triangle PF₁F₂ mein do sides ka difference teesri side se chhota hota hai:
|PF₁ - PF₂| < F₁F₂  =>  2a < 2c  =>  **c > a**!

Kyunki c > a hai, c² - a² ek positive number hai — jise hum **b²** naam dete hain:
**b² = c² - a²**  =>  **c² = a² + b²**   (yaani **c = √(a² + b²)**!)

**Eccentricity:**
**e = c / a = √(1 + b²/a²)**   (kyunki c > a, isliye Hyperbola ki eccentricity hamesha **e > 1** hoti hai!)

---

## Part B: Standard Equation x²/a² - y²/b² = 1 Ka Derivation ("Kyun"!)

```
                y
         \      ^      /
          \     :     /
           \    :    /
     F1     *   :   *     F2
   ---*-----*---+---*-----*---> x
   (-c,0) (-a,0)O (a,0) (c,0)
           /    :    \
          /     :     \
         /      :      \
```

Kisi bhi point P(x, y) ke liye:
|PF₁ - PF₂| = 2a
√[(x + c)² + y²] - √[(x - c)² + y²] = ±2a

Doosre root ko RHS par bhej kar dono taraf square karne par (bilkul Ellipse ke derivation ki tarah):
(c² - a²)x² - a²y² = a²(c² - a²)

Kyunki c² - a² = b²:
b²x² - a²y² = a²b²

Dono taraf a²b² se divide karo:
**x²/a² - y²/b² = 1**

---

## Part C: Latus Rectum Ki Lambai = 2b²/a ("Kyun"!)

Focus F₂(c, 0) se guzarne wali vertical chord ke endpoints (c, ±l) honge.
x²/a² - y²/b² = 1 mein x = c rakho:
c²/a² - l²/b² = 1
l²/b² = c²/a² - 1 = (c² - a²)/a² = b²/a²
l² = b⁴/a² => l = b²/a.

Isliye **Length of Latus Rectum = 2l = 2b²/a** (bilkul Ellipse jaisa formula!).

---

## Part D: Horizontal vs Vertical Hyperbola (Complete Comparison)

> **Super-Important Rule:** Hyperbola mein **BADA denominator a² nahi hota** — balki **POSITIVE term ke neeche wala denominator hamesha a²** hota hai!

| Feature | Horizontal Hyperbola (Transverse axis = x-axis) | Vertical Hyperbola (Transverse axis = y-axis) |
|---|---|---|
| **Standard Equation** | **x²/a² - y²/b² = 1** (x² positive!) | **y²/a² - x²/b² = 1** (y² positive!) |
| **Vertices** | (±a, 0) | (0, ±a) |
| **Foci** | (±c, 0) | (0, ±c) |
| **Transverse Axis** | 2a | 2a |
| **Conjugate Axis** | 2b | 2b |
| **Relation of c** | c = √(a² + b²) | c = √(a² + b²) |
| **Eccentricity** | e = c / a (e > 1) | e = c / a (e > 1) |
| **Latus Rectum** | 2b² / a | 2b² / a |

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 4.1: Analyzing A Horizontal Hyperbola
**Sawaal:** Hyperbola x²/9 - y²/16 = 1 ke foci, vertices, eccentricity, aur latus rectum ki lambai gyat karo.

**Solution:**
Yahan x² wala term **positive** hai => Horizontal Hyperbola (chahe 16 > 9 ho, phir bhi a² = 9 hi hoga!):
a² = 9 => **a = 3**
b² = 16 => **b = 4**
c = √(a² + b²) = √(9 + 16) = √25 = **5**.

- Foci: (±c, 0) = **(±5, 0)**
- Vertices: (±a, 0) = **(±3, 0)**
- Eccentricity: e = c/a = **5/3** (> 1)
- Length of latus rectum: 2b²/a = 2(16)/3 = **32/3 units**.

Jaanch:
- Jaanch: 3² + 4² = 5² aur e = 5/3 > 1 ✅

---

### Example 4.2: Analyzing A Vertical Hyperbola
**Sawaal:** Hyperbola y²/9 - x²/27 = 1 ke foci, vertices, eccentricity, aur latus rectum gyat karo.

**Solution:**
Yahan y² wala term **positive** hai => Vertical Hyperbola (transverse axis = y-axis):
a² = 9 => **a = 3**
b² = 27 => **b = 3√3**
c = √(a² + b²) = √(9 + 27) = √36 = **6**.

- Foci: (0, ±c) = **(0, ±6)**
- Vertices: (0, ±a) = **(0, ±3)**
- Eccentricity: e = c/a = 6/3 = **2**
- Length of latus rectum: 2b²/a = 2(27)/3 = **18 units**.

Jaanch:
- Jaanch: a² + b² = 9 + 27 = 36 = 6² aur e = 2 > 1 ✅

---

### Example 4.3: Equation Given Foci And Transverse Axis
**Sawaal:** Us hyperbola ki equation gyat karo jiske foci (±5, 0) aur transverse axis ki lambai 8 hai.

**Solution:**
Foci x-axis par hain => Horizontal Hyperbola x²/a² - y²/b² = 1.
c = 5
2a = 8 => a = 4 => a² = 16.
b² = c² - a² = 25 - 16 = 9.

Equation: **x²/16 - y²/9 = 1**.

Jaanch:
- Jaanch: √(16 + 9) = 5 = c aur 2a = 8 ✅

---

### Example 4.4: Equation Given Vertical Vertices And Foci
**Sawaal:** Vertices (0, ±3) aur foci (0, ±5) wale hyperbola ki equation gyat karo.

**Solution:**
Vertices aur foci y-axis par hain => Vertical Hyperbola y²/a² - x²/b² = 1.
a = 3 => a² = 9
c = 5 => c² = 25
b² = c² - a² = 25 - 9 = 16.

Equation: **y²/9 - x²/16 = 1**.

Jaanch:
- Jaanch: y² positive hai, a = 3, c = √(9 + 16) = 5 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Hyperbola mein bade denominator ko a² maan lena (Ellipse ki aadat!)
- **Galat soch:** "x²/9 - y²/16 = 1 mein 16 > 9 hai, isliye a² = 16 aur vertical hyperbola hai."
- **Sahi samajh:** Bilkul galat! Hyperbola mein size (bada/chhota) nahi, **SIGN (+ ya -)** decide karta hai! x² positive hai, isliye a² = 9 aur horizontal hyperbola hai!

### Galti 2: Hyperbola mein c² = a² - b² laga dena
- **Galat soch:** "c = √(a² - b²)."
- **Sahi samajh:** Hyperbola mein foci vertices ke **bahar** hote hain (c > a), isliye hamesha **c² = a² + b²** hota hai! (Yaad rakhne ki trick: equation mein minus (-) ho to c² mein plus (+), aur equation mein plus (+) yaani ellipse ho to c² mein minus (-)!)

### Galti 3: Latus rectum ko 2a²/b likh dena
- **Galat soch:** "Latus rectum = 2a² / b."
- **Sahi samajh:** Ellipse aur Hyperbola dono mein latus rectum **2b² / a** hota hai (numerator mein conjugate/minor semi-axis ka square b², aur denominator mein transverse/major semi-axis a)!

---

## Quick Recap

- **Definition:** |PF₁ - PF₂| = 2a (constant < 2c).
- **Relation:** c² = a² + b² (c > a > 0, b > 0).
- **Eccentricity:** e = c / a (**e > 1**).
- **Orientation rule:** Positive term (x² ya y²) determines transverse axis and a²!
- **Latus Rectum:** 2b² / a.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the foci, vertices, eccentricity, and length of the latus rectum of x²/16 - y²/9 = 1.

**Solution:**
Horizontal hyperbola (x² positive): a = 4, b = 3.
c = √(16 + 9) = 5.
- Foci: (±5, 0), Vertices: (±4, 0)
- Eccentricity: e = 5/4
- Latus rectum: 2b²/a = 2(9)/4 = 9/2.

Jaanch:
- Jaanch: 4² + 3² = 5² aur e = 5/4 > 1 ✅

---

### Question 2
Find the foci, vertices, eccentricity, and latus rectum of 9y² - 4x² = 36.

**Solution:**
Divide by 36: y²/4 - x²/9 = 1 (Vertical, y² positive!).
a = 2, b = 3, c = √(4 + 9) = √13.
- Foci: (0, ±√13), Vertices: (0, ±2)
- Eccentricity: e = √13 / 2
- Latus rectum: 2(9)/2 = 9.

Jaanch:
- Jaanch: 2² + 3² = 13 = (√13)² ✅

---

### Question 3
Find the foci, vertices, eccentricity, and latus rectum of 16x² - 9y² = 576.

**Solution:**
Divide by 576: x²/36 - y²/64 = 1 (Horizontal, x² positive!).
a = 6, b = 8, c = √(36 + 64) = √100 = 10.
- Foci: (±10, 0), Vertices: (±6, 0)
- Eccentricity: e = 10/6 = 5/3
- Latus rectum: 2(64)/6 = 64/3.

Jaanch:
- Jaanch: 6² + 8² = 10² ✅

---

### Question 4
Find the equation of the hyperbola with vertices (±2, 0) and foci (±3, 0).

**Solution:**
Horizontal hyperbola: a = 2, c = 3 => b² = c² - a² = 9 - 4 = 5.
Equation: x²/4 - y²/5 = 1.

Jaanch:
- Jaanch: a² + b² = 4 + 5 = 9 = 3² ✅

---

### Question 5
Find the equation of the hyperbola with vertices (0, ±5) and foci (0, ±8).

**Solution:**
Vertical hyperbola: a = 5, c = 8 => b² = 64 - 25 = 39.
Equation: y²/25 - x²/39 = 1.

Jaanch:
- Jaanch: 25 + 39 = 64 = 8² ✅

---

### Question 6
Find the equation of the hyperbola with foci (0, ±13) and conjugate axis of length 24.

**Solution:**
Foci on y-axis => Vertical hyperbola y²/a² - x²/b² = 1.
c = 13; 2b = 24 => b = 12 => b² = 144.
a² = c² - b² = 169 - 144 = 25.
Equation: y²/25 - x²/144 = 1.

Jaanch:
- Jaanch: 5² + 12² = 13² ✅

---

### Question 7
Find the equation of the hyperbola with foci (±3√5, 0) and latus rectum of length 8.

**Solution:**
Horizontal hyperbola: c = 3√5 => c² = 45.
2b²/a = 8 => b² = 4a.
Since c² = a² + b²:
45 = a² + 4a
a² + 4a - 45 = 0
(a + 9)(a - 5) = 0 => a = 5 (since a > 0).
b² = 4(5) = 20.
Equation: x²/25 - y²/20 = 1.

Jaanch:
- Jaanch: c² = 25 + 20 = 45 => c = 3√5, LR = 2(20)/5 = 8 ✅

---

### Question 8
Find the equation of the hyperbola with foci (0, ±√10) passing through (2, 3).

**Solution:**
Vertical hyperbola: y²/a² - x²/b² = 1, with c² = 10 => b² = 10 - a².
Substitute (2, 3):
9/a² - 4/(10 - a²) = 1
9(10 - a²) - 4a² = a²(10 - a²)
90 - 13a² = 10a² - a⁴
a⁴ - 23a² + 90 = 0
(a² - 5)(a² - 18) = 0 => a² = 5 or a² = 18.
Since a² < c² = 10, discard a² = 18! Thus a² = 5 and b² = 10 - 5 = 5.
Equation: y²/5 - x²/5 = 1 (ya y² - x² = 5).

Jaanch:
- Jaanch: (2, 3) par 9/5 - 4/5 = 5/5 = 1 aur c² = 5 + 5 = 10 ✅

---

### Question 9
Find the equation of the hyperbola with vertices (±7, 0) and eccentricity e = 4/3.

**Solution:**
Horizontal hyperbola: a = 7, e = c/a = 4/3 => c = 28/3.
b² = c² - a² = 784/9 - 49 = (784 - 441)/9 = 343/9.
Equation: x²/49 - 9y²/343 = 1.

Jaanch:
- Jaanch: c² = 49 + 343/9 = 784/9 => c = 28/3 => e = (28/3)/7 = 4/3 ✅

---

### Question 10
Find the equation of the hyperbola with foci (±4, 0) and latus rectum of length 12.

**Solution:**
Horizontal hyperbola: c = 4 => c² = 16.
2b²/a = 12 => b² = 6a.
a² + 6a = 16 => a² + 6a - 16 = 0 => (a + 8)(a - 2) = 0 => a = 2.
b² = 6(2) = 12.
Equation: x²/4 - y²/12 = 1.

Jaanch:
- Jaanch: c = √(4 + 12) = 4 aur LR = 2(12)/2 = 12 ✅

---

### Question 11
Find the eccentricity of a rectangular (equilateral) hyperbola where a = b (x² - y² = a²).

**Solution:**
Here b = a.
c = √(a² + b²) = √(a² + a²) = a√2.
Eccentricity e = c / a = (a√2) / a = √2.

Jaanch:
- Jaanch: √2 ≈ 1.414 > 1 ✅

---

### Question 12
Find the coordinates of the foci and vertices of 5y² - 9x² = 36.

**Solution:**
Divide by 36: y²/(36/5) - x²/4 = 1 (Vertical hyperbola!).
a² = 36/5 => a = 6/√5; b² = 4 => b = 2.
c = √(36/5 + 4) = √(56/5) = 2√14 / √5.
- Vertices: (0, ±6/√5)
- Foci: (0, ±2√14 / √5).

Jaanch:
- Jaanch: (6/√5)² + 2² = 36/5 + 20/5 = 56/5 = c² ✅

---

Ab tumne chaaron Conic Sections — Circle, Parabola, Ellipse, aur Hyperbola — alag-alag master kar liye hain! Agle aur aakhri topic [conic-sections-part5.md](conic-sections-part5.md) mein hum sabhi ko mila kar **real-world bridge, arch, reflector, aur space-orbit synthesis problems** solve karenge, aur poore chapter ka **Wrap-up Table** dekhenge!
