# Chapter 11: Three Dimensional Geometry (Part 2)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Three Dimensional Geometry (Part 1)](three-dimensional-geometry.md)

---

Pratima adventure park mein ek zipline cable ko dekh rahi thi jo pahadi ke tower A se niche wale tower B tak seedhi khinchi hui thi. Zipline par baitha rider har second mein A se B ki taraf aage badhta hai — matlab uski position har pal ek fixed starting point plus cable ki direction ka koi multiple hoti hai! 3D geometry mein kisi bhi straight line ka equation likhne ka bilkul yahi funda hai.

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Vector Equation of a Line** | **r⃗ = a⃗ + λb⃗** — point a⃗ se guzarne wali aur vector b⃗ ke parallel line (λ ∈ R ek parameter hai) |
| **Cartesian (Symmetric) Form** | **(x − x₁)/a = (y − y₁)/b = (z − z₁)/c** — jahan (x₁, y₁, z₁) point aur (a, b, c) direction ratios hain |
| **General Point on a Line** | Parameter λ ke terms mein line par koi bhi point: **(x₁ + aλ, y₁ + bλ, z₁ + cλ)** |
| **Two-Point Form** | Points A(a⃗) aur B(b⃗) se guzarne wali line: **r⃗ = a⃗ + λ(b⃗ − a⃗)** |

---

## 1. Line Through a Given Point & Parallel to a Given Vector

Maan lo line L point A(x₁, y₁, z₁) (position vector a⃗) se guzarti hai aur non-zero vector b⃗ = aî + bĵ + ck̂ ke parallel hai.
Line par kisi bhi general point P(x, y, z) (position vector r⃗) ke liye, vector AP⃗ = r⃗ − a⃗ hamesha b⃗ ke parallel hoga:

```
  r⃗ − a⃗ = λ b⃗   (for some scalar λ ∈ R)

  Vector Form:      r⃗ = a⃗ + λ b⃗

  Put r⃗ = xî + yĵ + zk̂, a⃗ = x₁î + y₁ĵ + z₁k̂, b⃗ = aî + bĵ + ck̂:
    x = x₁ + aλ,   y = y₁ + bλ,   z = z₁ + cλ

  Eliminate λ ⇒ Cartesian (Symmetric) Form:
    (x − x₁) / a  =  (y − y₁) / b  =  (z − z₁) / c
```

> **Note:** Agar koi direction ratio zero ho (maan lo a = 0), toh (x − x₁)/0 ko literal division nahi, balki shorthand maante hain jiska matlab hai **x = x₁** (line yz-plane ke parallel hai).

---

## 2. Line Passing Through Two Given Points

Agar line A(x₁, y₁, z₁) aur B(x₂, y₂, z₂) se guzarti hai, toh direction vector simply **AB⃗ = b⃗ − a⃗** hota hai!

- **Vector Form:** **r⃗ = a⃗ + λ(b⃗ − a⃗)**
- **Cartesian Form:** **(x − x₁)/(x₂ − x₁) = (y − y₁)/(y₂ − y₁) = (z − z₁)/(z₂ − z₁)**

---

## 3. Solved Examples

### Example 1: Line through a point parallel to a vector
**Question:** Find the vector and Cartesian equations of the line passing through (5, 2, −4) and parallel to the vector 3î + 2ĵ − 8k̂.

**Solution:**
- a⃗ = 5î + 2ĵ − 4k̂,   b⃗ = 3î + 2ĵ − 8k̂.
- **Vector Form:** **r⃗ = (5î + 2ĵ − 4k̂) + λ(3î + 2ĵ − 8k̂)**
- **Cartesian Form:** **(x − 5)/3 = (y − 2)/2 = (z + 4)/(−8)**

**Jaanch:** Put (5, 2, −4) in Cartesian form: (5−5)/3 = (2−2)/2 = (−4+4)/(−8) = 0 ✅

---

### Example 2: Line passing through two points
**Question:** Find the vector and Cartesian equations of the line passing through (−1, 0, 2) and (3, 4, 6).

**Solution:**
- a⃗ = −î + 2k̂,   b⃗ = 3î + 4ĵ + 6k̂.
- Direction vector b⃗ − a⃗ = (3 − (−1))î + (4 − 0)ĵ + (6 − 2)k̂ = **4î + 4ĵ + 4k̂** (parallel to **î + ĵ + k̂**!).
- **Vector Form:** **r⃗ = (−î + 2k̂) + λ(î + ĵ + k̂)** (or with 4î + 4ĵ + 4k̂).
- **Cartesian Form:** **(x + 1)/4 = (y − 0)/4 = (z − 2)/4**, simplified: **(x + 1)/1 = y/1 = (z − 2)/1**.

**Jaanch:** Point (3, 4, 6): (3+1)/1 = 4/1 = (6−2)/1 = 4 ✅

---

### Example 3: Converting Cartesian form to Vector form
**Question:** The Cartesian equation of a line is (x + 3)/2 = (y − 5)/4 = (z + 6)/2. Find its vector equation.

**Solution:**
- Rewrite as (x − (−3))/2 = (y − 5)/4 = (z − (−6))/2.
- Point on line: **(−3, 5, −6)** ⇒ a⃗ = −3î + 5ĵ − 6k̂.
- Direction ratios: **(2, 4, 2)** ⇒ b⃗ = 2î + 4ĵ + 2k̂ (or simplified î + 2ĵ + k̂).
- **Vector Form:** **r⃗ = (−3î + 5ĵ − 6k̂) + λ(2î + 4ĵ + 2k̂)**.

**Jaanch:** λ = 1 gives (−1, 9, −4); in Cartesian: (−1+3)/2 = (9−5)/4 = (−4+6)/2 = 1 ✅

---

### Example 4: Non-standard Cartesian form (trap alert!)
**Question:** Find the point and direction ratios of the line (3 − x)/(−3) = (2y − 4)/2 = z/2.

**Solution:**
- Standard form mein x, y, z ke coefficients hamesha **+1** hone chahiye!
- First term: (3 − x)/(−3) = −(x − 3)/(−3) = **(x − 3)/3**.
- Second term: (2y − 4)/2 = 2(y − 2)/2 = **(y − 2)/1**.
- Third term: **(z − 0)/2**.
- Standard form: **(x − 3)/3 = (y − 2)/1 = (z − 0)/2**.
- Point = **(3, 2, 0)**, Direction ratios = **(3, 1, 2)**.

**Jaanch:** Put (3, 2, 0) in original: (3−3)/(−3) = (4−4)/2 = 0/2 = 0 ✅; put λ = 1 ⇒ (6, 3, 2): (3−6)/(−3) = 1, (6−4)/2 = 1, 2/2 = 1 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **x, y, z ka coefficient +1 kiye bina denominator ko DR maan lena:**
   - Galat: (3 − x)/(−3) = (2y − 4)/2 = z/2 ke DRs (−3, 2, 2) likh dena.
   - Sahi: Pehle x, y, z ka coefficient +1 banao ⇒ DRs **(3, 1, 2)**!
2. **Numerator mein sign ulta padh lena:**
   - Galat: (x + 3)/2 se point x₁ = +3 padh lena.
   - Sahi: Standard form (x − x₁) hai, isliye x + 3 = x − (−3) ⇒ **x₁ = −3**!
3. **2D line ax + by + c = 0 ko 3D line samajh lena:**
   - Galat: 3D mein ek single linear equation 2x + 3y − z = 5 ko line samajhna.
   - Sahi: 3D mein ek single linear equation **plane** hoti hai, line nahi! Line ko do equations (symmetric form mein do = signs) chahiye hote hain.

---

## Quick Recap

- **Point + Direction:** r⃗ = a⃗ + λb⃗  ⇔  (x − x₁)/a = (y − y₁)/b = (z − z₁)/c.
- **Two Points:** r⃗ = a⃗ + λ(b⃗ − a⃗)  ⇔  (x − x₁)/(x₂ − x₁) = (y − y₁)/(y₂ − y₁) = (z − z₁)/(z₂ − z₁).
- Always convert numerators to **1·x − x₁, 1·y − y₁, 1·z − z₁** before reading the point or DRs!

---

## Practice Questions

1. Find the vector and Cartesian equations of the line through (1, 2, 3) parallel to 3î + 2ĵ − 2k̂.
2. Find the vector and Cartesian equations of the line through (−2, 4, −5) parallel to the line (x + 3)/3 = (y − 4)/5 = (z + 8)/6.
3. Find the vector and Cartesian equations of the line passing through the origin and (5, −2, 3).
4. Find the vector and Cartesian equations of the line passing through (3, −2, −5) and (3, −2, 6).
5. Convert the line (x − 5)/3 = (y + 4)/7 = (z − 6)/2 into vector form.
6. Find the direction cosines of the line (4 − x)/2 = y/6 = (1 − z)/3.
7. Find the coordinates of the point where the line (x − 2)/3 = (y + 1)/4 = (z − 2)/2 crosses the xy-plane.
8. Check whether the point (7, 10, 4) lies on the line r⃗ = (î + 2ĵ − 2k̂) + λ(2î + 3ĵ + 2k̂).
9. Write the Cartesian equation of the line passing through (1, −1, 2) and perpendicular to both the x-axis and y-axis.
10. State True or False: The lines (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and (x − 3)/4 = (y − 5)/6 = (z − 7)/8 represent the exact same line.

### Answers

1. Vector: **r⃗ = (î + 2ĵ + 3k̂) + λ(3î + 2ĵ − 2k̂)**; Cartesian: **(x − 1)/3 = (y − 2)/2 = (z − 3)/(−2)**.
2. Parallel line has DRs (3, 5, 6) ⇒ Vector: **r⃗ = (−2î + 4ĵ − 5k̂) + λ(3î + 5ĵ + 6k̂)**; Cartesian: **(x + 2)/3 = (y − 4)/5 = (z + 5)/6**.
3. DRs = (5, −2, 3) ⇒ Vector: **r⃗ = λ(5î − 2ĵ + 3k̂)**; Cartesian: **x/5 = y/(−2) = z/3**.
4. DRs = (0, 0, 11) ⇒ parallel to k̂! Vector: **r⃗ = (3î − 2ĵ − 5k̂) + λk̂**; Cartesian: **x = 3, y = −2** (or (x−3)/0 = (y+2)/0 = (z+5)/11).
5. **r⃗ = (5î − 4ĵ + 6k̂) + λ(3î + 7ĵ + 2k̂)**.
6. Rewrite: (x − 4)/(−2) = y/6 = (z − 1)/(−3) ⇒ DRs = (−2, 6, −3); length = √(4+36+9) = 7 ⇒ DCs = **(−2/7, 6/7, −3/7)**.
   Jaanch: 4/49 + 36/49 + 9/49 = 1 ✅
7. On xy-plane, z = 0 ⇒ (0 − 2)/2 = −1 ⇒ (x − 2)/3 = −1 ⇒ x = −1; (y + 1)/4 = −1 ⇒ y = −5. Point: **(−1, −5, 0)**.
   Jaanch: (−1−2)/3 = (−5+1)/4 = (0−2)/2 = −1 ✅
8. From x: 1 + 2λ = 7 ⇒ λ = 3. Check y: 2 + 3(3) = 11 ≠ 10 ⇒ **Does NOT lie on the line**.
9. Perpendicular to both x- and y-axes ⇒ parallel to z-axis (0, 0, 1). Equation: **x = 1, y = −1** (or (x−1)/0 = (y+1)/0 = (z−2)/1).
10. **True** ✅ — DRs (4, 6, 8) = 2 × (2, 3, 4) (parallel), and point (3, 5, 7) satisfies the first line: (3−1)/2 = (5−2)/3 = (7−3)/4 = 1!

---

Ab tum 3D lines ko vector aur Cartesian dono forms mein likh sakte ho! Agle part mein dekhenge ki do 3D lines ke beech ka **Angle** aur **Shortest Distance** kaise nikaalte hain — khaas kar jab wo na parallel hon aur na hi intersect karein: [Three Dimensional Geometry (Part 3)](three-dimensional-geometry-part3.md).
