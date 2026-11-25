# Chapter: Conic Sections (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [conic-sections-part5.md](conic-sections-part5.md) (Topic 5: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Tangents (Slope Form), Parametric Forms & Focal Chord Property (t₁t₂ = -1), Director Circles, Hyperbola Asymptotes, aur Shifted Conics ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Tangents to All 4 Conics (Slope Form via D = 0), Parametric Coordinates & Focal Chord t₁t₂ = -1, Director Circle (Perpendicular Tangents), Hyperbola Asymptotes, Aur Shifted Conics

---

# Gehrai Mein: Tangents, Parametric Forms, Director Circle, Aur Asymptotes

Core chapter mein tumne chaaron conics ke standard equations, foci, aur latus rectum seekhe. Lekin advanced coordinate geometry ke 70% sawal **Tangents (spersh rekhaon)**, **Parametric Points (at², 2at)**, **Focal Chords**, aur **Asymptotes** par hote hain! Chalo in sabhi ko ek clean framework mein derive aur master karte hain!

---

## Aakriti ka observatory mirror & laser alignment

Aakriti ek astronomical observatory mein mirror-optics engineer hai. Ek parabolic primary mirror y² = 4ax par woh kisi bhi point P ko ek single parameter t se address karti hai: **P(t) = (at², 2at)**!
Jab ek laser chord focus F(a, 0) se guzarti hai aur mirror ko do points P(t₁) aur Q(t₂) par kaatti hai, to Aakriti bina lamba algebra kiye turant relation **t₁ · t₂ = -1** lagati hai — aur 2 second mein opposite endpoint Q(-1/t₁) mil jata hai!

---

## Part A: Slope Form Of Tangents To All 4 Conics ("Kyun" D = 0!)

Line **y = mx + c** kisi conic ko **tangent** (sirf 1 point par touch) tabhi karti hai jab y = mx + c ko conic mein rakhne par banne wali quadratic equation ka **Discriminant D = 0** ho!

### Derivation For Parabola y² = 4ax:
(mx + c)² = 4ax => m²x² + (2mc - 4a)x + c² = 0.
Set D = 0: (2mc - 4a)² - 4m²c² = 0 => 4m²c² - 16amc + 16a² - 4m²c² = 0 => 16a(a - mc) = 0 => **c = a / m**!

Isi tarah D = 0 se chaaron conics ki **Slope-Form Tangents** milti hain:

| Conic | Standard Equation | Tangent of Slope m | Condition of Tangency (c) |
|---|---|---|---|
| **Circle** | x² + y² = r² | **y = mx ± r√(1 + m²)** | c² = r²(1 + m²) |
| **Parabola** | y² = 4ax | **y = mx + a/m** (m ≠ 0) | c = a / m |
| **Ellipse** | x²/a² + y²/b² = 1 | **y = mx ± √(a²m² + b²)** | c² = a²m² + b² |
| **Hyperbola** | x²/a² - y²/b² = 1 | **y = mx ± √(a²m² - b²)** | c² = a²m² - b² (a²m² ≥ b²) |

---

## Part B: Parametric Coordinates & Focal Chord Property (t₁ t₂ = -1)

| Conic | Parametric Point | Parameter Range |
|---|---|---|
| **Circle** (x² + y² = r²) | **(r cos θ, r sin θ)** | 0 ≤ θ < 2π |
| **Parabola** (y² = 4ax) | **(at², 2at)** | t ∈ R |
| **Ellipse** (x²/a² + y²/b² = 1) | **(a cos θ, b sin θ)** | 0 ≤ θ < 2π |
| **Hyperbola** (x²/a² - y²/b² = 1) | **(a sec θ, b tan θ)** | θ ≠ π/2, 3π/2 |

### Focal Chord Theorem For Parabola y² = 4ax ("Kyun"!):
Points P(at₁², 2at₁) aur Q(at₂², 2at₂) ko jodne wali chord ka slope:
m_PQ = (2at₂ - 2at₁) / (at₂² - at₁²) = **2 / (t₁ + t₂)**.
Agar yeh chord focus F(a, 0) se guzarti hai (collinear with F):
m_PF = m_PQ => (2at₁ - 0)/(at₁² - a) = 2/(t₁ + t₂)
=> 2t₁ / (t₁² - 1) = 2 / (t₁ + t₂)
=> t₁² + t₁t₂ = t₁² - 1 => **t₁ · t₂ = -1**!

- **Length of Focal Chord:** **PQ = a(t₁ - t₂)² = a(t + 1/t)²**!
- Kyunki AM ≥ GM se |t + 1/t| ≥ 2 => **PQ ≥ 4a** (Latus rectum = 4a sabse **chhoti focal chord** hoti hai!)!

---

## Part C: Director Circle & Hyperbola Asymptotes

1. **Director Circle** (woh locus jahan se conic par kheenchhi gayi dono tangents **90° par perpendicular** hoti hain!):
   - Circle x² + y² = r² => **x² + y² = 2r²**
   - Parabola y² = 4ax => **x = -a** (Directrix hi Director Circle hai!)
   - Ellipse x²/a² + y²/b² = 1 => **x² + y² = a² + b²**
   - Hyperbola x²/a² - y²/b² = 1 => **x² + y² = a² - b²** (exists iff a > b)
2. **Asymptotes of Hyperbola x²/a² - y²/b² = 1:**
   RHS ko 0 rakh do: x²/a² - y²/b² = 0 => **y = ±(b/a) x**!
   Yeh do straight lines hain jinke hyperbola ki branches infinity par behad kareeb pahunch jaati hain par kabhi kaatti nahi!

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Common Tangent To A Circle And A Parabola
**Sawaal:** Circle **x² + y² = 2** aur Parabola **y² = 8x** ki common tangent(s) ki equations gyat karo.

**Solution:**
Parabola y² = 8x (a = 2) ki slope-m tangent:
**y = mx + 2/m**  =>  mx - y + 2/m = 0.

Yeh line circle x² + y² = 2 (r = √2) ko bhi tangent karegi iff c² = r²(1 + m²):
(2/m)² = 2(1 + m²)
4/m² = 2 + 2m²
2 = m² + m⁴ => **m⁴ + m² - 2 = 0**
(m² + 2)(m² - 1) = 0 => m² = 1 (since m² ≥ 0) => **m = ±1**!

Common tangents:
- m = +1: **y = x + 2**
- m = -1: **y = -x - 2**.

Jaanch:
- Jaanch: Distance of (0, 0) from x - y + 2 = 0 is 2/√2 = √2 = r; and in y² = 8x, (x + 2)² = 8x => (x - 2)² = 0 (exact double root!) ✅

---

### Problem 2: Finding The Other End Of A Focal Chord
**Sawaal:** Parabola **y² = 12x** ki ek focal chord ka ek endpoint **(3, 6)** hai. Doosre endpoint ke coordinates aur focal chord ki lambai gyat karo.

**Solution:**
Here 4a = 12 => **a = 3**.
Point (3, 6) ko (at₁², 2at₁) = (3t₁², 6t₁) se compare karo => 6t₁ = 6 => **t₁ = 1**.
Focal chord property t₁ t₂ = -1 => **t₂ = -1**.
Doosra endpoint: (3(-1)², 6(-1)) = **(3, -6)**!
Length = a(t₁ - t₂)² = 3(1 - (-1))² = 3(4) = **12 units** (yeh khud latus rectum hai!).

Jaanch:
- Jaanch: (3, 6) aur (3, -6) dono focus (3, 0) se guzarte hain aur doori = 12 ✅

---

### Problem 3: Tangent To An Ellipse Parallel To A Given Line
**Sawaal:** Ellipse **x²/16 + y²/9 = 1** par un tangents ki equations gyat karo jo line **3x - 4y + 5 = 0** ke parallel hain.

**Solution:**
Given line ka slope **m = 3/4**.
Ellipse mein a² = 16, b² = 9.
Slope-form tangent: y = mx ± √(a²m² + b²)
= (3/4)x ± √[16(9/16) + 9]
= (3/4)x ± √(9 + 9)
= (3/4)x ± 3√2
=> **3x - 4y ± 12√2 = 0**.

Jaanch:
- Jaanch: a²m² + b² = 16(9/16) + 9 = 18 => √18 = 3√2 ✅

---

### Problem 4: Shifted Parabola Analysis
**Sawaal:** Shifted parabola **y² - 4y - 8x + 20 = 0** ka vertex, focus, aur directrix gyat karo.

**Solution:**
y mein square complete karo:
(y² - 4y + 4) = 8x - 20 + 4 = 8x - 16
**(y - 2)² = 8(x - 2)**.

Compare with (y - k)² = 4a(x - h): **h = 2, k = 2, 4a = 8 => a = 2**!
- **Vertex:** (h, k) = **(2, 2)**
- **Focus:** (h + a, k) = (2 + 2, 2) = **(4, 2)**
- **Directrix:** x = h - a = 2 - 2 => **x = 0 (y-axis!)**.

Jaanch:
- Jaanch: Focus (4, 2) aur directrix x = 0 ka midpoint (2, 2) = vertex ✅

---

### Problem 5: Angle Between Asymptotes Of A Hyperbola
**Sawaal:** Hyperbola **x²/9 - y²/3 = 1** ke dono asymptotes ki equations aur unke beech ka acute angle gyat karo.

**Solution:**
Here a = 3, b = √3.
Asymptotes: y = ±(b/a)x = ±(√3/3)x = **±(1/√3)x**.
Slopes hain m₁ = 1/√3 (inclination 30°) aur m₂ = -1/√3 (inclination 150°).
Acute angle between them = 30° + 30° = **60°**!
*(General formula: angle = 2 tan⁻¹(b/a)!)*

Jaanch:
- Jaanch: tan θ = |(1/√3 - (-1/√3))/(1 - 1/3)| = (2/√3)/(2/3) = √3 => θ = 60° ✅

---

### Problem 6: Locus Of Perpendicular Tangents (Director Circle Check)
**Sawaal:** Point P se ellipse **x²/25 + y²/11 = 1** par do mutually perpendicular tangents kheenchhi jaati hain. Point P ka locus aur uska radius gyat karo.

**Solution:**
Ellipse ke Director Circle ki equation hoti hai: **x² + y² = a² + b²**.
Yahan a² = 25, b² = 11 => **x² + y² = 25 + 11 = 36**.
Yeh origin par centred **radius 6** ka circle hai!

Jaanch:
- Jaanch: Point (6, 0) par? Check slope-form: (y - mx)² = 25m² + 11 => (x² - 25)m² - 2xym + (y² - 11) = 0; product of slopes m₁m₂ = (y² - 11)/(x² - 25) = -1 => x² + y² = 36 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Parabola y² = 4ax ki tangent y = mx + a/m mein m = 0 rakh dena
- **Galat soch:** "Horizontal tangent ke liye m = 0 rakho."
- **Sahi samajh:** Parabola y² = 4ax ki koi horizontal tangent nahi hoti (sirf vertex par vertical tangent x = 0 hoti hai)! m ≠ 0 zaroori hai!

### Galti 2: Hyperbola tangent mein √(a²m² + b²) likh dena
- **Galat soch:** "Ellipse jaisa hi plus (+) lagta hai."
- **Sahi samajh:** Ellipse mein + b², jabki Hyperbola mein **- b²** (y = mx ± √(a²m² - b²)) lagta hai — aur real tangent sirf tab exist karti hai jab |m| ≥ b/a ho!

### Galti 3: Shifted parabola (y - 2)² = 8(x - 2) ka focus (2, 0) likh dena
- **Galat soch:** "a = 2 hai to focus (2, 0) hoga."
- **Sahi samajh:** Vertex (2, 2) par shift ho gaya hai, isliye focus bhi shift hoga: **(h + a, k) = (4, 2)**!

---

## Quick Recap

- **Slope Tangents:** Circle ±r√(1 + m²); Parabola +a/m; Ellipse ±√(a²m² + b²); Hyperbola ±√(a²m² - b²).
- **Focal Chord of y² = 4ax:** t₁ · t₂ = -1; length = a(t + 1/t)² ≥ 4a.
- **Director Circle:** Circle 2r²; Parabola x = -a; Ellipse a² + b²; Hyperbola a² - b².
- **Hyperbola Asymptotes:** y = ±(b/a)x; angle = 2 tan⁻¹(b/a).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the value of k for which the line y = 2x + k is tangent to the parabola y² = 16x.

**Solution:**
Here 4a = 16 => a = 4, and m = 2.
Tangency condition c = a/m => **k = 4/2 = 2**.

Jaanch:
- Jaanch: (2x + 2)² = 16x => 4x² - 8x + 4 = 0 => 4(x - 1)² = 0 (single touch point (1, 4)!) ✅

---

### Question 2
Find the value of c so that the line y = x + c touches the ellipse x²/9 + y²/16 = 1.

**Solution:**
Here m = 1, a² = 9 (under x²), b² = 16 (under y²).
Tangency condition c² = (coeff under x²)m² + (coeff under y²) = 9(1)² + 16 = 25 => **c = ±5**.

Jaanch:
- Jaanch: 9 + 16 = 25 => c = ±5 ✅

---

### Question 3
One end of a focal chord of the parabola y² = 8x is (8, 8). Find the coordinates of the other end.

**Solution:**
Here 4a = 8 => a = 2. (2t₁², 4t₁) = (8, 8) => t₁ = 2.
Since t₁ t₂ = -1, t₂ = -1/2.
Other end = (2(-1/2)², 4(-1/2)) = **(1/2, -2)**.

Jaanch:
- Jaanch: (1/2, -2) lies on y² = 8x (4 = 4), and slope to focus (2, 0) is 2/(3/2) = 4/3 = slope from (2, 0) to (8, 8) ✅

---

### Question 4
Find the equation of the director circle of the circle x² + y² - 4x + 6y - 12 = 0.

**Solution:**
Original circle: (x - 2)² + (y + 3)² = 25 (centre (2, -3), r² = 25).
Director circle has the same centre and radius² = 2r² = 50:
**(x - 2)² + (y + 3)² = 50** (ya x² + y² - 4x + 6y - 37 = 0).

Jaanch:
- Jaanch: 2r² = 2(25) = 50 ✅

---

### Question 5
Find the vertex, focus, and directrix of the shifted parabola x² - 6x - 12y - 3 = 0.

**Solution:**
Complete the square in x: (x - 3)² = 12y + 3 + 9 = 12(y + 1).
Compare with (x - h)² = 4a(y - k): h = 3, k = -1, a = 3.
- **Vertex:** (3, -1)
- **Focus:** (3, -1 + 3) = **(3, 2)**
- **Directrix:** y = -1 - 3 => **y = -4**.

Jaanch:
- Jaanch: Midpoint of focus (3, 2) and directrix y = -4 is (3, -1) = vertex ✅

---

### Question 6
Find the equations of the asymptotes of the hyperbola 4x² - 9y² = 36.

**Solution:**
Standard form: x²/9 - y²/4 = 1 (a = 3, b = 2).
Asymptotes: **y = ±(2/3)x** (ya 2x - 3y = 0 aur 2x + 3y = 0).

Jaanch:
- Jaanch: Set RHS = 0: 4x² - 9y² = 0 => (2x - 3y)(2x + 3y) = 0 ✅

---

### Question 7
Find the equations of the tangents to the hyperbola x²/4 - y²/3 = 1 with slope m = 2.

**Solution:**
Here a² = 4, b² = 3, m = 2. Check a²m² - b² = 4(4) - 3 = 13 > 0 (valid!).
Tangents: **y = 2x ± √13**.

Jaanch:
- Jaanch: c² = 4(4) - 3 = 13 > 0 ✅

---

### Question 8
Find the minimum possible length of a focal chord of the parabola y² = 20x.

**Solution:**
Minimum focal chord = Latus Rectum = 4a = **20 units**.

Jaanch:
- Jaanch: a(t + 1/t)² ≥ 4a = 20 (equality at t = ±1) ✅

---

### Question 9
Find the common tangent(s) to the parabola y² = 4x and the circle x² + y² = 1/2.

**Solution:**
Parabola (a = 1) tangent: y = mx + 1/m.
Circle (r² = 1/2) tangency: (1/m)² = (1/2)(1 + m²) => 2 = m² + m⁴ => m⁴ + m² - 2 = 0 => m² = 1 => m = ±1.
Common tangents: **y = x + 1** and **y = -x - 1**.

Jaanch:
- Jaanch: Distance from (0, 0) to x - y + 1 = 0 is 1/√2 = r ✅

---

### Question 10
For a rectangular hyperbola x² - y² = a², find the angle between its asymptotes.

**Solution:**
Asymptotes: x² - y² = 0 => y = x (m = 1) and y = -x (m = -1).
Product of slopes = (1)(-1) = -1 => **90°** (that's why it is called a **rectangular** hyperbola!).

Jaanch:
- Jaanch: 2 tan⁻¹(a/a) = 2(45°) = 90° ✅

---

### Question 11
If a tangent to the parabola y² = 4ax makes an angle of 45° with the x-axis, find its point of contact.

**Solution:**
m = tan 45° = 1 => tangent is y = x + a.
Substitute in y² = 4ax: (x + a)² = 4ax => (x - a)² = 0 => x = a, y = 2a.
Point of contact = **(a, 2a)** (top end of latus rectum!).

Jaanch:
- Jaanch: General point of contact for y = mx + a/m is (a/m², 2a/m); at m = 1 it is (a, 2a) ✅

---

### Question 12
Does the hyperbola x²/9 - y²/16 = 1 have a real director circle? Explain why.

**Solution:**
Director circle equation is x² + y² = a² - b² = 9 - 16 = **-7 < 0**!
Since x² + y² cannot be negative for real (x, y), **no real director circle exists** (no two tangents to this hyperbola are ever perpendicular!).

Jaanch:
- Jaanch: Real director circle of a hyperbola exists iff a > b (here a = 3 < b = 4) ✅

---

Ab tumne **Conic Sections** ke sabse gehre weapons — Slope Tangents, Parametric Focal Chords, Director Circles, Asymptotes, aur Shifted Conics — ko master kar liya hai!
