> **Class:** 11 | **Subject:** Physics | **Chapter 3:** Motion in a Plane

# Scalars, Vectors, Addition, Resolution & Unit Vectors

> **Pichle chapter se:** [Motion in a Straight Line](../motion-in-a-straight-line/motion-in-a-straight-line-part6.md) mein har cheez ek seedhi line par chal rahi thi, toh sirf + aur - sign se direction ka kaam chal jata tha. Par jab koi boat nadi paar kare ya football hawa mein ude, toh motion ek **2D plane** mein hota hai — aur uske liye humein **Vectors** ki zaroorat padti hai! (Trigonometry identities ke liye [Class 11 Maths: Trigonometric Functions](../../maths/trigonometric-functions/trigonometric-functions.md) dekho.)

---

## Babulal ka Tugboat Harbour Pull

Babulal ek harbour pilot hai. Ek bhari cargo barge ko do tugboats aage kheench rahi hain — ek **6 N** (scaled model force) se East mein aur doosri **8 N** se North mein (90° angle par).

Babulal ke assistant ne kaha, "Sir, total pull 6 + 8 = 14 N hua na?" Babulal muskura kar bole, "Nahi beta! Dono alag directions mein kheench rahi hain — net force **10 N** hai, 14 N nahi! Direction ke saath jodne ka apna alag algebra hota hai — **Vector Algebra**!"

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Scalar Quantity | Sirf magnitude (size) wali quantity — koi direction nahi (jaise mass, time, temperature, speed, distance) |
| Vector Quantity | Magnitude + Direction dono wali quantity, jo **Triangle / Parallelogram Law** of addition follow kare (jaise displacement, velocity, acceleration, force) |
| Resultant Vector (R) | Do ya zyada vectors ko jodne par milne wala single net vector |
| Resolution of a Vector | Ek vector ko do perpendicular (x aur y) components mein todna |
| Unit Vector (î, ĵ, k̂) | Magnitude = **1** wala vector jo sirf direction batata hai (î along +x, ĵ along +y, k̂ along +z) |
| Null (Zero) Vector | Zero magnitude wala vector (jaise A - A = 0) |

---

## 1. Parallelogram Law of Vector Addition

Maan lo do vectors **A** aur **B** ek hi point (tail-to-tail) se angle **θ** par lage hain. Inka resultant **R = A + B** parallelogram ka diagonal hota hai:

```
         B_top
       /-------/
     B/  R   /
     /  /   /
    /α/ θ  /
   *-------> A
```

- **Magnitude of Resultant R:**
  **R = √( A² + B² + 2 A B cos θ )**
- **Direction (angle α that R makes with A):**
  **tan α = (B sin θ) / (A + B cos θ)**

**Kyun?**
Parallelogram ke diagonal ko right triangle bana kar (base = A + B cos θ, height = B sin θ), Pythagoras theorem lagane par:
R² = (A + B cos θ)² + (B sin θ)² = A² + B² (cos² θ + sin² θ) + 2 A B cos θ = A² + B² + 2 A B cos θ!

### 3 Special Cases Yaad Rakho:
1. **θ = 0° (same direction):** R_max = **A + B**
2. **θ = 90° (perpendicular):** R = **√(A² + B²)**, tan α = B / A
3. **θ = 180° (opposite direction):** R_min = **|A - B|**

---

## 2. Vector Subtraction & Scalar Multiplication

- **Scalar multiplication (k A):** Vector A ko positive number k se multiply karne par length k times ho jati hai (direction same); negative number -k se multiply karne par direction **reverse (180°)** ho jati hai!
- **Vector Subtraction (A - B):** Iska matlab hai **A + (-B)**!
  Kyunki A aur -B ke beech angle **(180° - θ)** hota hai aur cos(180° - θ) = -cos θ:
  **|A - B| = √( A² + B² - 2 A B cos θ )**

---

## 3. Resolution into Orthogonal Components & Unit Vectors

Kisi vector **A** ko (jo +x axis se angle **θ** banata hai) do perpendicular hisson mein todna:
- **Horizontal component:** A_x = A cos θ
- **Vertical component:** A_y = A sin θ

Unit vectors **î** (+x direction) aur **ĵ** (+y direction) ki bhasha mein:
**A = A_x î + A_y ĵ**

- **Magnitude:** |A| = √(A_x² + A_y²)
- **Angle with +x axis:** tan θ = A_y / A_x
- **Unit vector along A:** **Â = A / |A| = (A_x î + A_y ĵ) / √(A_x² + A_y²)**

**Component Addition ka Superpower:**
Agar A = A_x î + A_y ĵ aur B = B_x î + B_y ĵ, toh:
**A + B = (A_x + B_x) î + (A_y + B_y) ĵ**
(Bas x ko x se jodo, y ko y se jodo — chahe 10 vectors hon, secondon mein add ho jate hain!)

---

## Solved Examples

### Example 1: Two Forces at 90° and 60° (Babulal's Tugboats)

Two forces of magnitudes 6 N and 8 N act on a barge. Find the magnitude of their resultant when the angle between them is: (a) 90°, (b) 60°.

**Solution:**
- (a) At θ = 90° (cos 90° = 0):
  R = √(6² + 8²) = √(36 + 64) = √100 = **10 N**.
  Direction with 6 N force: tan α = 8 / 6 = 4 / 3 => **α ≈ 53°**.
- (b) At θ = 60° (cos 60° = 1/2):
  R = √(6² + 8² + 2(6)(8)(1/2)) = √(36 + 64 + 48) = **√148 ≈ 12.17 N**.

Jaanch:
- Jaanch: Dono answers R_min (2 N) aur R_max (14 N) ke beech hain; 60° < 90° so 12.17 N > 10 N ✅

---

### Example 2: Magnitude, Direction & Unit Vector

Given vector A = 3 î + 4 ĵ, find: (a) its magnitude |A|, (b) the angle it makes with the +x axis, (c) the unit vector Â along A.

**Solution:**
- (a) |A| = √(3² + 4²) = √25 = **5**.
- (b) tan θ = A_y / A_x = 4 / 3 => **θ ≈ 53°**.
- (c) Â = A / |A| = (3 î + 4 ĵ) / 5 = **0.6 î + 0.8 ĵ**.

Jaanch:
- Jaanch: |Â| = √(0.6² + 0.8²) = √(0.36 + 0.64) = √1 = 1 ✅

---

### Example 3: Subtraction of Two Equal Vectors at 60°

Two vectors A and B have equal magnitude a and act at an angle of 60° to each other. Find |A + B| and |A - B|.

**Solution:**
- |A + B| = √(a² + a² + 2 a² cos 60°) = √(2a² + a²) = **√3 a**.
- |A - B| = √(a² + a² - 2 a² cos 60°) = √(2a² - a²) = **a**.

Jaanch:
- Jaanch: Equilateral triangle property: dono sides a aur angle 60° hone par teesri side (difference A - B) bhi exact a hoti hai ✅

---

### Example 4: Adding Three Vectors Using Components

A hiker walks 10 m East, then 10√2 m North-East (45° North of East), and finally 10 m North. Find the net displacement magnitude and direction.

**Solution:**
Resolve each vector into î (East) and ĵ (North):
- d₁ = 10 î
- d₂ = (10√2 cos 45°) î + (10√2 sin 45°) ĵ = 10 î + 10 ĵ
- d₃ = 10 ĵ
Total displacement: R = (10 + 10 + 0) î + (0 + 10 + 10) ĵ = **20 î + 20 ĵ**.
- Magnitude |R| = √(20² + 20²) = **20 √2 ≈ 28.28 m**.
- Angle: tan θ = 20 / 20 = 1 => **45° North of East**.

Jaanch:
- Jaanch: d₁ + d₃ = 10î + 10ĵ = d₂, toh total = 2 d₂ = 20√2 m at 45° ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Vectors ke magnitudes ko seedha scalar ki tarah jod dena
- **Galat:** 6 N aur 8 N ka resultant hamesha 14 N hota hai.
- **Sahi:** Resultant 2 N (at 180°) se 14 N (at 0°) ke beech kuch bhi ho sakta hai — angle θ ke bina resultant nahi nikal sakta!

### Galti 2: Angle y-axis se diya ho tab bhi A_x = A cos θ laga dena
- **Galat:** Vector 10 m hai aur **y-axis se 30°** par hai => A_x = 10 cos 30°.
- **Sahi:** Yaad rakho: **Jis axis se angle θ chipka ho, uspe cos θ aur doosre par sin θ!** Yahan y-axis se 30° hai, toh A_y = 10 cos 30° aur **A_x = 10 sin 30° = 5 m**!

### Galti 3: Angle θ ko head-to-tail naap lena
- **Galat:** Equilateral triangle ke andar head-to-tail 60° angle ko hi vectors ke beech ka angle θ maan lena.
- **Sahi:** Do vectors ke beech ka angle hamesha **tail-to-tail** (ya head-to-head) naapa jata hai! Head-to-tail angle 60° ka matlab tail-to-tail angle **180° - 60° = 120°** hota hai.

---

## Quick Recap

- **Parallelogram Law:** R = √(A² + B² + 2AB cos θ); tan α = (B sin θ)/(A + B cos θ).
- **Subtraction:** |A - B| = √(A² + B² - 2AB cos θ).
- **Range of Resultant:** |A - B| ≤ R ≤ A + B.
- **Components:** A = A_x î + A_y ĵ; |A| = √(A_x² + A_y²); Unit vector Â = A / |A|.

---

## Practice Questions

### Question 1
Two forces of 5 N and 12 N act perpendicular to each other on a body. Find the magnitude of their resultant force.

**Solution:**
R = √(5² + 12²) = √(25 + 144) = √169 = **13 N**.

Jaanch:
- Jaanch: 5-12-13 classic Pythagorean triple ✅

---

### Question 2
Can two vectors of magnitudes 4 units and 7 units give a resultant of: (a) 10 units, (b) 2 units, (c) 12 units?

**Solution:**
Range of resultant: |7 - 4| ≤ R ≤ 7 + 4 => **3 ≤ R ≤ 11**.
- (a) 10 -> **Yes** (between 3 and 11).
- (b) 2 -> **No** (less than 3).
- (c) 12 -> **No** (greater than 11).

Jaanch:
- Jaanch: Min possible = 3, max possible = 11 ✅

---

### Question 3
Find the magnitude and unit vector along P = 6 î - 8 ĵ.

**Solution:**
|P| = √(6² + (-8)²) = √(36 + 64) = **10**.
Unit vector = (6 î - 8 ĵ) / 10 = **0.6 î - 0.8 ĵ**.

Jaanch:
- Jaanch: √(0.6² + (-0.8)²) = √1 = 1 ✅

---

### Question 4
If A = 2 î + 5 ĵ and B = 4 î - 2 ĵ, find: (a) A + B, (b) A - B, (c) |A + B|.

**Solution:**
- (a) A + B = (2 + 4) î + (5 - 2) ĵ = **6 î + 3 ĵ**.
- (b) A - B = (2 - 4) î + (5 - (-2)) ĵ = **-2 î + 7 ĵ**.
- (c) |A + B| = √(6² + 3²) = √45 = **3 √5**.

Jaanch:
- Jaanch: 36 + 9 = 45 = 9 × 5 => 3√5 ✅

---

### Question 5
Two equal forces of magnitude F act at an angle of 120° to each other. Find the magnitude of their resultant.

**Solution:**
cos 120° = -1/2.
R = √(F² + F² + 2 F² (-1/2)) = √(2F² - F²) = **F**.

Jaanch:
- Jaanch: Famous identity: equal vectors at 120° give resultant equal to either vector (F)! ✅

---

### Question 6
A vector of magnitude 20 units makes an angle of 30° with the +y axis (in the first quadrant). Find its x and y components.

**Solution:**
Angle y-axis se 30° hai:
- A_y = 20 cos 30° = **10 √3**
- A_x = 20 sin 30° = **10**.

Jaanch:
- Jaanch: √(10² + (10√3)²) = √(100 + 300) = √400 = 20 ✅

---

### Question 7
Find the value of c so that the vector 0.6 î + c ĵ is a unit vector.

**Solution:**
0.6² + c² = 1² => 0.36 + c² = 1 => c² = 0.64 => **c = ±0.8**.

Jaanch:
- Jaanch: 0.36 + 0.64 = 1.00 ✅

---

### Question 8
If |A + B| = |A - B| for two non-zero vectors A and B, find the angle θ between them.

**Solution:**
Squaring both sides:
A² + B² + 2 A B cos θ = A² + B² - 2 A B cos θ
=> 4 A B cos θ = 0 => cos θ = 0 => **θ = 90°**.

Jaanch:
- Jaanch: Rectangle ke dono diagonals (A + B aur A - B) tabhi equal hote hain jab angle 90° ho ✅

---

### Question 9
A 3D vector is given by V = 2 î + 3 ĵ + 6 k̂. Find its magnitude and unit vector.

**Solution:**
|V| = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = **7**.
Unit vector = **(2/7) î + (3/7) ĵ + (6/7) k̂**.

Jaanch:
- Jaanch: (4 + 9 + 36) / 49 = 49 / 49 = 1 ✅

---

### Question 10
Two forces P and Q have maximum resultant 16 N and minimum resultant 4 N. Find P and Q.

**Solution:**
P + Q = 16 and P - Q = 4.
Adding: 2P = 20 => **P = 10 N**; then **Q = 6 N**.

Jaanch:
- Jaanch: 10 + 6 = 16 N; 10 - 6 = 4 N ✅

---

### Question 11
State whether the following statements are True or False:
(a) Electric current has both magnitude and direction, so it is a vector quantity.
(b) The magnitude of a vector is always a non-negative scalar.

**Solution:**
- (a) **False** ❌ — Current direction rakhta hai par woh **Triangle Law of vector addition follow nahi karta** (scalar ki tarah add hota hai), isliye woh scalar hai!
- (b) **True** ✅ — Magnitude |A| = √(A_x² + A_y²) hamesha ≥ 0 hota hai.

Jaanch:
- Jaanch: Vector hone ke liye magnitude + direction + vector-addition law teeno zaroori hain ✅

---

### Question 12
Find the resultant of two vectors of magnitudes 10 units and 10 units inclined at 60° to each other.

**Solution:**
R = √(10² + 10² + 2(10)(10)(1/2)) = √(100 + 100 + 100) = **10 √3 ≈ 17.32 units** (at 30° to each vector).

Jaanch:
- Jaanch: 2 A cos(θ/2) = 2(10) cos 30° = 20 (√3 / 2) = 10√3 ✅

---

Vectors ka poora toolkit ab tumhare paas hai!

**Agle topic mein:** Inhi vectors ko use karke hum 2D motion, rain-man umbrella angle, aur river-boat crossing solve karenge — [2D Motion with Constant Acceleration & 2D Relative Velocity](motion-in-a-plane-part2.md).
