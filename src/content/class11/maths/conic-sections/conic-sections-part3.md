# Chapter: Conic Sections (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [conic-sections-part2.md](conic-sections-part2.md) tha** (Topic 2: Parabola — definition, four standard forms, focus, directrix, aur latus rectum).
> **Topics covered in this file:**
> 1. Ellipse: Geometric Definition, Derivation of x²/a² + y²/b² = 1, Eccentricity, Horizontal vs Vertical Forms, Aur Latus Rectum

---

# Topic 3: Ellipse

Parabola ka sirf ek focus hota hai. Ab socho agar **do foci (F₁ aur F₂)** hon, aur hum un sabhi points P ko jodein jinki in dono foci se dooriyon ka **jod (sum)** hamesha constant rahe:
**PF₁ + PF₂ = constant = 2a**!

Yehi band aur khoobsurat oval curve **Ellipse** kehlata hai — jis par hamari Prithvi aur sabhi grah Surya ke chaaron taraf ghoomte hain! Chalo iski standard equation, eccentricity, aur latus rectum derive karte hain!

---

## Juhi ki "Whispering Gallery"

Juhi ek science museum ke liye ek "Whispering Gallery" dome hall design kar rahi hai. Is hall ka floor ek exact **Ellipse** hai (lambai 2a = 20 meter, chaudai 2b = 12 meter), jiske dono foci F₁(-8, 0) aur F₂(8, 0) par do brass standing plaques lage hain!

Jab koi visitor F₁ par khada hokar dheere se fusfusata hai (whispers), to sound wave deewar ke kisi bhi point P se takrakar seedhi F₂ par pahunchti hai! Aur kyunki har path ke liye **PF₁ + PF₂ = 2a = 20 meter** bilkul barabar hai, sabhi sound waves ek hi waqt par F₂ par pahunch kar ek doosre ko amplify kar deti hain — aur 16 meter door khade insaan ko whisper bilkul saaf sunai deti hai!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Ellipse** | Un sabhi points P ka set jinke liye do fixed foci F₁, F₂ se dooriyon ka sum constant ho: PF₁ + PF₂ = 2a | x²/a² + y²/b² = 1 |
| **Foci (F₁, F₂)** | Do fixed interior points jo major axis par centre se c doori par hote hain | (±c, 0) |
| **Major Axis (2a)** | Foci se guzarne wala lamba axis (length = 2a; semi-major axis = a) | Vertices (±a, 0) |
| **Minor Axis (2b)** | Major axis par perpendicular chhota axis (length = 2b; semi-minor axis = b, a > b) | Co-vertices (0, ±b) |
| **Eccentricity (e)** | Ellipse kitna pichka (elongated) hai: e = c / a (hamesha 0 < e < 1) | e -> 0 matlab circle! |
| **Latus Rectum** | Kisi bhi focus se guzarne wali aur major axis par perpendicular chord | Length = 2b² / a |

---

## Part A: Relation Between a, b, c Aur Eccentricity

Maan lo ellipse ka centre origin O(0, 0) par hai, foci F₁(-c, 0) aur F₂(c, 0) hain, aur constant sum **PF₁ + PF₂ = 2a** (jahan a > c > 0) hai:
1. Jab P x-axis par right vertex (a, 0) par hota hai: PF₁ + PF₂ = (a + c) + (a - c) = 2a.
2. Jab P y-axis par top co-vertex (0, b) par hota hai: dono foci se doori barabar hoti hai, √(b² + c²) + √(b² + c²) = 2a => √(b² + c²) = a => **b² + c² = a²**!

Isliye Ellipse ka sabse ahem rishta:
**c² = a² - b²**   (yaani **c = √(a² - b²)**, jahan hamesha **a > b** aur **a > c**!)

**Eccentricity:**
**e = c / a = √(1 - b²/a²)**   (kyunki 0 < c < a, isliye **0 < e < 1**!)

---

## Part B: Standard Equation x²/a² + y²/b² = 1 Ka Derivation ("Kyun"!)

```
                  y
                  ^  (0, b)
              . - * - .
           .'     :     '.
     (-a,0)*--*---+---*--*(a,0)---> x
           '. F1  O  F2 .'
              ' - * - '
                (0, -b)
```

Kisi bhi point P(x, y) ke liye:
PF₁ + PF₂ = 2a
√[(x + c)² + y²] + √[(x - c)² + y²] = 2a

Doosre root ko RHS par bhejo aur square karo:
(x + c)² + y² = 4a² - 4a√[(x - c)² + y²] + (x - c)² + y²
x² + 2cx + c² + y² = 4a² - 4a√[(x - c)² + y²] + x² - 2cx + c² + y²
4cx = 4a² - 4a√[(x - c)² + y²]

4 se divide karke root ko akela karo:
a√[(x - c)² + y²] = a² - cx

Dobara square karo:
a²(x² - 2cx + c² + y²) = a⁴ - 2a²cx + c²x²
a²x² - 2a²cx + a²c² + a²y² = a⁴ - 2a²cx + c²x²
(a² - c²)x² + a²y² = a²(a² - c²)

Kyunki a² - c² = b²:
b²x² + a²y² = a²b²

Dono taraf a²b² se divide karo:
**x²/a² + y²/b² = 1**   (a > b)

---

## Part C: Latus Rectum Ki Lambai = 2b²/a ("Kyun"!)

Focus F₂(c, 0) se guzarne wali vertical chord ke endpoints (c, ±l) honge.
Equation x²/a² + y²/b² = 1 mein x = c rakho:
c²/a² + l²/b² = 1
l²/b² = 1 - c²/a² = (a² - c²)/a² = b²/a²
l² = b⁴/a² => l = b²/a.

Isliye endpoints hain (c, b²/a) aur (c, -b²/a), aur **Latus Rectum = 2l = 2b²/a**!

---

## Part D: Horizontal vs Vertical Ellipse (Complete Comparison)

Ellipse mein **BADA denominator hamesha a²** hota hai!

| Feature | Horizontal Ellipse (Major axis = x-axis) | Vertical Ellipse (Major axis = y-axis) |
|---|---|---|
| **Standard Equation** | **x²/a² + y²/b² = 1** (a > b) | **x²/b² + y²/a² = 1** (a > b) |
| **Vertices** | (±a, 0) | (0, ±a) |
| **Foci** | (±c, 0) | (0, ±c) |
| **Length of Major Axis** | 2a | 2a |
| **Length of Minor Axis** | 2b | 2b |
| **Relation of c** | c = √(a² - b²) | c = √(a² - b²) |
| **Eccentricity** | e = c / a (0 < e < 1) | e = c / a (0 < e < 1) |
| **Length of Latus Rectum** | 2b² / a | 2b² / a |

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 3.1: Analyzing A Horizontal Ellipse
**Sawaal:** Ellipse x²/25 + y²/9 = 1 ke foci, vertices, major aur minor axes ki lambai, eccentricity, aur latus rectum gyat karo.

**Solution:**
Yahan x² ke neeche bada denominator (25 > 9) hai => Horizontal Ellipse:
a² = 25 => **a = 5**
b² = 9 => **b = 3**
c = √(a² - b²) = √(25 - 9) = √16 = **4**.

- Foci: (±c, 0) = **(±4, 0)**
- Vertices: (±a, 0) = **(±5, 0)**
- Length of major axis: 2a = **10 units**
- Length of minor axis: 2b = **6 units**
- Eccentricity: e = c/a = **4/5**
- Length of latus rectum: 2b²/a = 2(9)/5 = **18/5 units**.

Jaanch:
- Jaanch: c² + b² = 16 + 9 = 25 = a² aur e = 4/5 < 1 ✅

---

### Example 3.2: Analyzing A Vertical Ellipse
**Sawaal:** Ellipse 9x² + 4y² = 36 ke sabhi parts (foci, vertices, axes, eccentricity, latus rectum) gyat karo.

**Solution:**
Pehle 36 se divide karke standard form banao:
x²/4 + y²/9 = 1.

Yahan y² ke neeche bada denominator (9 > 4) hai => **Vertical Ellipse** (major axis along y-axis)!
a² = 9 => **a = 3**
b² = 4 => **b = 2**
c = √(a² - b²) = √(9 - 4) = **√5**.

- Foci: (0, ±c) = **(0, ±√5)**
- Vertices: (0, ±a) = **(0, ±3)**
- Length of major axis: 2a = **6 units**
- Length of minor axis: 2b = **4 units**
- Eccentricity: e = c/a = **√5 / 3**
- Length of latus rectum: 2b²/a = 2(4)/3 = **8/3 units**.

Jaanch:
- Jaanch: (√5)² + 2² = 5 + 4 = 9 = 3² aur √5/3 ≈ 0.745 < 1 ✅

---

### Example 3.3: Equation Given Vertices And Foci
**Sawaal:** Us ellipse ki equation gyat karo jiske vertices (±13, 0) aur foci (±5, 0) hain.

**Solution:**
Vertices aur foci dono x-axis par hain => Horizontal Ellipse x²/a² + y²/b² = 1.
a = 13 => a² = 169
c = 5 => c² = 25
b² = a² - c² = 169 - 25 = 144.

Equation: **x²/169 + y²/144 = 1**.

Jaanch:
- Jaanch: 5² + 12² = 13² (Pythagorean triplet) aur a = 13 > b = 12 ✅

---

### Example 3.4: Ellipse Passing Through Two Given Points
**Sawaal:** Major axis x-axis par aur centre origin par wale us ellipse ki equation gyat karo jo points (4, 3) aur (6, 2) se guzarta hai.

**Solution:**
Standard equation: x²/a² + y²/b² = 1.
Points (4, 3) aur (6, 2) substitute karo:
16/a² + 9/b² = 1   --- (1)
36/a² + 4/b² = 1   --- (2)

Let u = 1/a² aur v = 1/b²:
16u + 9v = 1   --- (1')
36u + 4v = 1   --- (2')

(1') × 4 - (2') × 9 karo (v eliminate karne ke liye):
(64u + 36v) - (324u + 36v) = 4 - 9
-260u = -5 => u = 5/260 = 1/52 => **a² = 52**.

From (1'): 16(1/52) + 9v = 1 => 4/13 + 9v = 1 => 9v = 9/13 => v = 1/13 => **b² = 13**.

Equation: **x²/52 + y²/13 = 1** (ya x² + 4y² = 52).

Jaanch:
- Jaanch: (4, 3) par 16/52 + 9/13 = 4/13 + 9/13 = 1 ✅
- Jaanch: (6, 2) par 36/52 + 4/13 = 9/13 + 4/13 = 1 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: x² ke neeche wale denominator ko hamesha a² maan lena
- **Galat soch:** "x²/4 + y²/9 = 1 mein a² = 4 aur b² = 9."
- **Sahi samajh:** Ellipse mein **bada denominator hamesha a²** hota hai! Yahan 9 > 4 hai, isliye a² = 9, b² = 4 aur major axis **y-axis** hai!

### Galti 2: c² = a² + b² laga dena
- **Galat soch:** "Ellipse mein c = √(a² + b²)."
- **Sahi samajh:** Nahi! c² = a² + b² Hyperbola ka formula hai! Ellipse mein foci vertices ke **andar** hote hain (c < a), isliye hamesha **c² = a² - b²** hota hai!

### Galti 3: Major axis ki lambai a bata dena
- **Galat soch:** "a = 5 hai, isliye major axis ki lambai 5 units hai."
- **Sahi samajh:** a **semi-major axis** (aadha hissa) hai! Poori major axis ki lambai **2a = 10 units** aur minor axis ki lambai **2b** hoti hai.

---

## Quick Recap

- **Definition:** PF₁ + PF₂ = 2a (constant > 2c).
- **Relation:** c² = a² - b² (a > b > 0, c < a).
- **Eccentricity:** e = c / a (0 < e < 1).
- **Orientation rule:** Bada denominator jiske neeche (x² ya y²), wahi major axis!
- **Latus Rectum:** 2b² / a (dono horizontal aur vertical ellipses ke liye).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the foci, vertices, lengths of major and minor axes, eccentricity, and latus rectum of x²/36 + y²/16 = 1.

**Solution:**
Horizontal ellipse (36 > 16): a = 6, b = 4.
c = √(36 - 16) = √20 = 2√5.
- Foci: (±2√5, 0), Vertices: (±6, 0)
- Major axis: 12, Minor axis: 8
- Eccentricity: e = 2√5/6 = √5/3
- Latus rectum: 2b²/a = 2(16)/6 = 16/3.

Jaanch:
- Jaanch: (2√5)² + 4² = 20 + 16 = 36 = 6² ✅

---

### Question 2
Find the foci, vertices, eccentricity, and latus rectum of x²/16 + y²/25 = 1.

**Solution:**
Vertical ellipse (25 > 16): a = 5, b = 4.
c = √(25 - 16) = 3.
- Foci: (0, ±3), Vertices: (0, ±5)
- Eccentricity: e = 3/5
- Latus rectum: 2(16)/5 = 32/5.

Jaanch:
- Jaanch: 3² + 4² = 5² aur e = 3/5 < 1 ✅

---

### Question 3
Find the foci, vertices, and latus rectum of 4x² + 9y² = 36.

**Solution:**
Divide by 36: x²/9 + y²/4 = 1 (Horizontal, 9 > 4).
a = 3, b = 2, c = √(9 - 4) = √5.
- Foci: (±√5, 0), Vertices: (±3, 0)
- Latus rectum: 2(4)/3 = 8/3.

Jaanch:
- Jaanch: (√5)² + 2² = 9 = 3² ✅

---

### Question 4
Find the equation of the ellipse with vertices (±5, 0) and foci (±4, 0).

**Solution:**
Horizontal ellipse: a = 5, c = 4 => b² = 25 - 16 = 9.
Equation: x²/25 + y²/9 = 1.

Jaanch:
- Jaanch: a² - b² = 25 - 9 = 16 = 4² ✅

---

### Question 5
Find the equation of the ellipse with vertices (0, ±10) and foci (0, ±6).

**Solution:**
Vertical ellipse: a = 10, c = 6 => b² = 100 - 36 = 64.
Equation: x²/64 + y²/100 = 1.

Jaanch:
- Jaanch: 6² + 8² = 10² ✅

---

### Question 6
Find the equation of the ellipse whose ends of major axis are (±3, 0) and ends of minor axis are (0, ±2).

**Solution:**
Horizontal ellipse with a = 3, b = 2:
x²/9 + y²/4 = 1.

Jaanch:
- Jaanch: (±3, 0) aur (0, ±2) equation ko satisfy karte hain ✅

---

### Question 7
Find the equation of the ellipse whose length of major axis is 26 and foci are (±5, 0).

**Solution:**
Foci on x-axis => horizontal ellipse.
2a = 26 => a = 13; c = 5.
b² = 13² - 5² = 169 - 25 = 144.
Equation: x²/169 + y²/144 = 1.

Jaanch:
- Jaanch: 2a = 26 aur √(169 - 144) = 5 ✅

---

### Question 8
Find the equation of the ellipse with centre at origin, major axis along the y-axis, length of minor axis 16, and foci (0, ±6).

**Solution:**
Vertical ellipse: 2b = 16 => b = 8; c = 6.
a² = b² + c² = 64 + 36 = 100 => a = 10.
Equation: x²/64 + y²/100 = 1.

Jaanch:
- Jaanch: a = 10 > b = 8 aur c = √(100 - 64) = 6 ✅

---

### Question 9
Find the equation of the ellipse with foci (±3, 0) and a = 4.

**Solution:**
Horizontal ellipse: a = 4, c = 3 => b² = 16 - 9 = 7.
Equation: x²/16 + y²/7 = 1.

Jaanch:
- Jaanch: √(16 - 7) = √9 = 3 ✅

---

### Question 10
Find the equation of the ellipse with centre at (0, 0), major axis on the y-axis, and passing through the points (3, 2) and (1, 6).

**Solution:**
Vertical ellipse: x²/b² + y²/a² = 1.
Let u = 1/b² and v = 1/a²:
9u + 4v = 1    --- (1)
u + 36v = 1    --- (2)

Multiply (2) by 9 and subtract (1):
(9u + 324v) - (9u + 4v) = 9 - 1
320v = 8 => v = 1/40 => a² = 40.

From (2): u + 36/40 = 1 => u = 1 - 9/10 = 1/10 => b² = 10.
Equation: x²/10 + y²/40 = 1.

Jaanch:
- Jaanch: (3, 2) par 9/10 + 4/40 = 9/10 + 1/10 = 1; (1, 6) par 1/10 + 36/40 = 1/10 + 9/10 = 1 ✅

---

### Question 11
Find the eccentricity of an ellipse if its latus rectum is equal to half of its minor axis.

**Solution:**
Given: 2b²/a = (1/2)(2b) = b.
Divide by b (b > 0): 2b/a = 1 => b/a = 1/2 => b²/a² = 1/4.
Eccentricity e = √(1 - b²/a²) = √(1 - 1/4) = √(3/4) = √3 / 2.

Jaanch:
- Jaanch: Let a = 2, b = 1 => LR = 2(1)/2 = 1 = (1/2)(2b), aur c = √3 => e = √3/2 ✅

---

### Question 12
Find the equation of the ellipse with b = 3, c = 4, centre at the origin, and foci on the x-axis.

**Solution:**
Horizontal ellipse: b = 3, c = 4 => a² = b² + c² = 9 + 16 = 25 => a = 5.
Equation: x²/25 + y²/9 = 1.

Jaanch:
- Jaanch: √(25 - 9) = 4 = c ✅

---

Ab tumne Ellipse ka har formula aur horizontal vs vertical fark master kar liya hai! Agle topic [conic-sections-part4.md](conic-sections-part4.md) mein hum aakhri conic section — **Hyperbola (x²/a² - y²/b² = 1)** — dekhenge, jahan foci se dooriyon ka **sum** nahi balki **difference** constant hota hai!
