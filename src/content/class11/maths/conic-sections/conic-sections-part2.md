# Chapter: Conic Sections (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [conic-sections.md](conic-sections.md) tha** (Topic 1: Sections of a Cone aur Circle).
> **Topics covered in this file:**
> 1. Parabola: Geometric Definition, Derivation of y² = 4ax, Four Standard Forms, Aur Latus Rectum

---

# Topic 2: Parabola

Topic 1 mein tumne dekha ki jab cutting plane double cone ke generator ke bilkul parallel hota hai (β = α), to ek khula hua U-shape curve banta hai jise **Parabola** kehte hain.

Lekin parabola sirf ek cone ka tukda nahi hai — iski ek jaadui geometric property hoti hai: is par sthit har point ek fixed point (**Focus**) aur ek fixed straight line (**Directrix**) se bilkul **barabar doori** par hota hai! Isi property ki wajah se car headlights, solar cookers, aur satellite dishes sab parabolic shape ki hoti hain! Chalo iska math derive karte hain!

---

## Dipen ka DTH satellite dish alignment

Dipen ek satellite DTH technician hai. Chhat par ek parabolic dish lagate waqt customer ne poochha: "Bhaiya, yeh chhota sa LNB receiver dish ki satah par chipka kar kyun nahi lagate? Beech hawa mein ek dande par kyun tanga hota hai?"

Dipen ne muskuraakar samjhaya: "Sir, dish ka cross-section ek exact **Parabola (y² = 4ax)** hai! Aasman se aane wali sabhi parallel satellite radio waves dish ki curved satah se takrakar ek hi khaas point par ikattha hoti hain — jise parabola ka **Focus F(a, 0)** kehte hain! Agar LNB ko focus se 1 cm bhi aage-peechhe kar diya, to signal gayab! Isliye hume dish ki equation se exact **a** nikaalna padta hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Parabola** | Un sabhi points P ka set jinki fixed Focus F se doori = fixed Directrix L se perpendicular doori (PF = PM) | y² = 4ax |
| **Focus (F)** | Woh fixed point jahan sabhi parallel rays reflect hokar milti hain | F(a, 0) for y² = 4ax |
| **Directrix (L)** | Woh fixed straight line jo vertex ke opposite side par focus ke barabar doori par hoti hai | x = -a for y² = 4ax |
| **Axis of Symmetry** | Focus se guzarne wali aur directrix par perpendicular line jo parabola ko do barabar hisson mein baantti hai | x-axis for y² = 4ax |
| **Vertex (V)** | Woh point jahan parabola apne axis ko kaatta hai (Focus aur Directrix ka exact midpoint!) | Origin (0, 0) |
| **Latus Rectum** | Focus se guzarne wali aur axis par perpendicular chord | Length = 4a |

---

## Part A: Standard Equation y² = 4ax Ka Full Derivation ("Kyun"!)

Maan lo Focus **F(a, 0)** (jahan a > 0) hai aur Directrix vertical line **x = -a** (yaani x + a = 0) hai. Vertex O(0, 0) dono ke theek beech mein hai!

```
               y
      x = -a   ^         . P(x, y)
         :     :      . '
       M *-----*----* (x, y)
         :     :   .
         :     :  .
   ------+-----*-----+---------> x
       (-a,0)  O    F(a, 0)
         :     :  .
         :     :   .
         :     :      .
```

Parabola ki definition ke mutabiq, kisi bhi point P(x, y) ke liye:
**PF = PM**

1. Distance PF (Distance Formula se):
   PF = √[(x - a)² + (y - 0)²] = √[(x - a)² + y²]
2. Perpendicular distance PM of P(x, y) from directrix x + a = 0:
   PM = |x + a|

Dono ko barabar rakho aur dono taraf square karo:
(x - a)² + y² = (x + a)²
x² - 2ax + a² + y² = x² + 2ax + a²

x² aur a² dono taraf se cancel ho jaate hain! Bachta hai:
y² - 2ax = 2ax
**y² = 4ax**   (a > 0)

---

## Part B: Latus Rectum Ki Lambai = 4a ("Kyun"!)

Latus rectum focus F(a, 0) se guzarne wali vertical chord AB hai.
Is chord ke dono endpoints ka x-coordinate **x = a** hoga!
y² = 4ax mein x = a rakho:
y² = 4a(a) = 4a²
y = ±2a

Isliye Latus Rectum ke endpoints hain: **A(a, 2a)** aur **B(a, -2a)**.
Length of Latus Rectum = 2a - (-2a) = **4a**!

---

## Part C: Parabola Ke Chaaron Standard Forms (Complete Table)

Har form mein **a > 0** hota hai:

| Standard Equation | Khulne Ki Disha (Opens) | Axis of Symmetry | Focus | Directrix | Length of Latus Rectum |
|---|---|---|---|---|---|
| **y² = 4ax** | Right (+x) | x-axis (y = 0) | (a, 0) | x = -a | 4a |
| **y² = -4ax** | Left (-x) | x-axis (y = 0) | (-a, 0) | x = a | 4a |
| **x² = 4ay** | Upward (+y) | y-axis (x = 0) | (0, a) | y = -a | 4a |
| **x² = -4ay** | Downward (-y) | y-axis (x = 0) | (0, -a) | y = a | 4a |

> **Yaad Rakhne Ki Super-Trick:** Jo variable **linear (power 1)** hai, wahi **axis of symmetry** hota hai! Aur uske aage ka **+ ya - sign** batata hai ki parabola kis taraf khulega!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 2.1: Analyzing Standard Parabolas
**Sawaal:** Neeche di gayi dono parabolas ke focus, axis, directrix, aur latus rectum ki lambai gyat karo:
(a) y² = 12x     (b) x² = -16y

**Solution:**
**(a) y² = 12x:**
Compare with y² = 4ax (opens right, axis = x-axis):
4a = 12 => **a = 3**.
- Focus = (a, 0) = **(3, 0)**
- Axis = **x-axis** (y = 0)
- Directrix = **x = -3** (ya x + 3 = 0)
- Length of Latus Rectum = 4a = **12 units**.

**(b) x² = -16y:**
Compare with x² = -4ay (opens downward, axis = y-axis):
4a = 16 => **a = 4**.
- Focus = (0, -a) = **(0, -4)**
- Axis = **y-axis** (x = 0)
- Directrix = **y = 4** (ya y - 4 = 0)
- Length of Latus Rectum = 4a = **16 units**.

Jaanch:
- Jaanch (a): Latus rectum endpoint (3, 6) equation y² = 12x ko satisfy karta hai: 6² = 36 = 12(3) ✅
- Jaanch (b): Latus rectum endpoint (8, -4) equation x² = -16y ko satisfy karta hai: 8² = 64 = -16(-4) ✅

---

### Example 2.2: Equation Given Focus And Directrix
**Sawaal:** Us parabola ki equation gyat karo jiska focus (0, -3) aur directrix y = 3 hai.

**Solution:**
Focus (0, -3) negative y-axis par hai aur directrix y = +3 positive y-axis par hai.
Isliye parabola y-axis ke along **neeche (downward)** khulega:
Standard form: x² = -4ay, jahan a = 3.
x² = -4(3)y
**x² = -12y**.

Jaanch:
- Jaanch: Vertex (0, 0) focus (0, -3) aur directrix y = 3 ke exact midpoint par hai, aur 4a = 12 ✅

---

### Example 2.3: Parabola Through A Given Point With Symmetry
**Sawaal:** Us parabola ki equation gyat karo jiska vertex (0, 0) hai, jo point (5, 2) se guzarta hai, aur y-axis ke symmetric hai.

**Solution:**
Kyunki parabola y-axis ke symmetric hai aur vertex (0, 0) par hai, iski equation x² = 4ay ya x² = -4ay hogi.
Point (5, 2) mein y = 2 > 0 (first quadrant), isliye yeh upward parabola **x² = 4ay** hai!

Point (5, 2) ko x² = 4ay mein rakho:
5² = 4a(2)
25 = 8a
a = 25/8.

Ab a = 25/8 ko x² = 4ay mein rakho:
x² = 4(25/8)y = (25/2)y
**2x² = 25y**.

Jaanch:
- Jaanch: (5, 2) rakho: LHS = 2(25) = 50, RHS = 25(2) = 50 ✅

---

### Example 2.4: Focus, Directrix, And Latus Rectum Endpoints
**Sawaal:** Focus (6, 0) aur directrix x = -6 wale parabola ki equation aur latus rectum ke endpoints gyat karo.

**Solution:**
Focus (6, 0) positive x-axis par hai => standard right-opening form y² = 4ax with a = 6.
Equation: y² = 4(6)x => **y² = 24x**.

Latus rectum ke endpoints (a, ±2a) hote hain:
**(6, 12)** aur **(6, -12)**.
Length of latus rectum = 4a = 24 units.

Jaanch:
- Jaanch: Endpoints (6, ±12) par (±12)² = 144 = 24(6), aur dono ke beech ki doori 12 - (-12) = 24 = 4a ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Axis of symmetry galat pehchanna
- **Galat soch:** "y² = 12x mein y² hai, isliye axis y-axis hoga."
- **Sahi samajh:** Bilkul ulta! Jo variable **power 1 (linear)** mein hota hai, wahi axis hota hai! y² = 12x mein x linear hai, isliye axis **x-axis** hai (aur y = ±√(12x) x-axis ke upar-neeche symmetric hai!).

### Galti 2: 4a ki jagah seedhe a padh lena
- **Galat soch:** "y² = 12x mein a = 12, isliye focus (12, 0)."
- **Sahi samajh:** Standard form y² = **4a**x hota hai! Isliye 4a = 12 => **a = 12/4 = 3**, aur focus **(3, 0)** hota hai (12 to latus rectum ki lambai hai!).

### Galti 3: Directrix ka sign focus jaisa hi likh dena
- **Galat soch:** "Focus (3, 0) hai to directrix x = 3 hogi."
- **Sahi samajh:** Directrix hamesha vertex ke **opposite side** par hoti hai! Focus (3, 0) hai to directrix **x = -3** hogi.

---

## Quick Recap

- **Parabola definition:** PF = PM (focus se doori = directrix se doori).
- **4 Standard Forms (a > 0):** y² = 4ax (right), y² = -4ax (left), x² = 4ay (up), x² = -4ay (down).
- **Linear variable = Axis of symmetry**; sign = opening direction.
- **Latus Rectum:** Sabhi 4 standard forms mein length = **4a** (always positive!).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the coordinates of the focus, axis of the parabola, equation of the directrix, and length of the latus rectum for y² = 8x.

**Solution:**
Compare with y² = 4ax: 4a = 8 => a = 2.
- Focus: (2, 0)
- Axis: x-axis (y = 0)
- Directrix: x = -2
- Latus rectum: 4a = 8 units.

Jaanch:
- Jaanch: Latus rectum endpoint (2, 4) par 4² = 16 = 8(2) ✅

---

### Question 2
Find the focus, axis, directrix, and latus rectum of the parabola x² = 6y.

**Solution:**
Compare with x² = 4ay: 4a = 6 => a = 3/2.
- Focus: (0, 3/2)
- Axis: y-axis (x = 0)
- Directrix: y = -3/2
- Latus rectum: 4a = 6 units.

Jaanch:
- Jaanch: Endpoint (3, 3/2) par 3² = 9 = 6(3/2) ✅

---

### Question 3
Find the focus, axis, directrix, and latus rectum of y² = -10x.

**Solution:**
Compare with y² = -4ax: 4a = 10 => a = 5/2.
- Focus: (-5/2, 0)
- Axis: x-axis
- Directrix: x = 5/2
- Latus rectum: 4a = 10 units.

Jaanch:
- Jaanch: Endpoint (-5/2, 5) par 5² = 25 = -10(-5/2) ✅

---

### Question 4
Find the equation of the parabola with vertex at (0, 0) and focus at (-2, 0).

**Solution:**
Focus (-2, 0) negative x-axis par hai => left-opening parabola y² = -4ax with a = 2.
Equation: y² = -4(2)x => y² = -8x.

Jaanch:
- Jaanch: Compare y² = -8x with y² = -4ax => a = 2 => focus (-2, 0) ✅

---

### Question 5
Find the equation of the parabola with focus (0, 5) and directrix y = -5.

**Solution:**
Focus (0, 5) positive y-axis par hai => upward parabola x² = 4ay with a = 5.
Equation: x² = 4(5)y => x² = 20y.

Jaanch:
- Jaanch: 4a = 20 => a = 5, focus (0, 5), directrix y = -5 ✅

---

### Question 6
Find the equation of the parabola with vertex (0, 0), passing through (2, 3), and axis along the x-axis.

**Solution:**
Axis along x-axis aur point (2, 3) first quadrant mein (x > 0) => y² = 4ax.
Substitute (2, 3): 3² = 4a(2) => 9 = 8a => a = 9/8.
Equation: y² = 4(9/8)x => y² = (9/2)x => 2y² = 9x.

Jaanch:
- Jaanch: (2, 3) par LHS = 2(9) = 18, RHS = 9(2) = 18 ✅

---

### Question 7
Find the equation of the parabola with vertex (0, 0) and directrix x - 7 = 0.

**Solution:**
Directrix is x = +7 (positive x-axis side).
Therefore focus is on negative x-axis at (-7, 0), so parabola opens left: y² = -4ax with a = 7.
Equation: y² = -28x.

Jaanch:
- Jaanch: y² = -28x => 4a = 28 => a = 7 => directrix x = +7 ✅

---

### Question 8
Find the equation of the parabola with vertex at (0, 0), symmetric about the y-axis, and passing through (-4, -2).

**Solution:**
Symmetric about y-axis and y = -2 < 0 => downward parabola x² = -4ay.
Substitute (-4, -2): (-4)² = -4a(-2) => 16 = 8a => a = 2.
Equation: x² = -8y.

Jaanch:
- Jaanch: (-4, -2) par LHS = 16, RHS = -8(-2) = 16 ✅

---

### Question 9
Find the area of the triangle formed by the lines joining the vertex of the parabola x² = 12y to the ends of its latus rectum.

**Solution:**
Compare x² = 12y with x² = 4ay => 4a = 12 => a = 3.
Vertex O = (0, 0).
Latus rectum endpoints are A(-2a, a) = (-6, 3) and B(2a, a) = (6, 3).
Base AB = 6 - (-6) = 12 (latus rectum length!).
Height from O(0, 0) to line y = 3 is 3 units.
Area = (1/2) × 12 × 3 = 18 sq units.

Jaanch:
- Jaanch: General area of vertex-LR triangle is (1/2)(4a)(a) = 2a² = 2(9) = 18 sq units ✅

---

### Question 10
For the parabola y² = 16x, find the point(s) on the parabola whose focal distance (distance from the focus) is 9 units.

**Solution:**
Here 4a = 16 => a = 4. Focus is (4, 0) and directrix is x = -4.
By definition of parabola, focal distance PF = PM = x + a = x + 4.
Given x + 4 = 9 => x = 5.
Substitute x = 5 in y² = 16x: y² = 80 => y = ±√80 = ±4√5.
Points are (5, 4√5) and (5, -4√5).

Jaanch:
- Jaanch: Distance from (5, 4√5) to (4, 0) = √((5 - 4)² + 80) = √81 = 9 ✅

---

### Question 11
Find the equation of the parabola with focus at (2, 1) and directrix x + y = 0 using the basic definition PF = PM.

**Solution:**
For any point P(x, y): PF² = PM²:
(x - 2)² + (y - 1)² = (x + y)² / (1² + 1²)
2[(x² - 4x + 4) + (y² - 2y + 1)] = x² + 2xy + y²
2x² + 2y² - 8x - 4y + 10 = x² + 2xy + y²
x² - 2xy + y² - 8x - 4y + 10 = 0.

Jaanch:
- Jaanch: Vertex (5/4, 1/4) (midpoint of focus (2, 1) and foot (1/2, -1/2)) satisfies (x - y)² = 8x + 4y - 10: (1)² = 10 + 1 - 10 = 1 ✅

---

### Question 12
If a parabola y² = 4ax passes through the point (3, 6), find its focus and the length of its latus rectum.

**Solution:**
Substitute (3, 6) into y² = 4ax:
6² = 4a(3) => 36 = 12a => a = 3.
Focus = (a, 0) = (3, 0).
Length of latus rectum = 4a = 12 units.

Jaanch:
- Jaanch: Equation is y² = 12x; at (3, 6), 36 = 36 ✅

---

Ab tumne Parabola ke chaaron orientations, focus, directrix, aur latus rectum ko poori tarah master kar liya hai! Agle topic [conic-sections-part3.md](conic-sections-part3.md) mein hum teesre conic section — **Ellipse (x²/a² + y²/b² = 1)** — ko derive karenge, jahan do foci ka sum constant hota hai!
