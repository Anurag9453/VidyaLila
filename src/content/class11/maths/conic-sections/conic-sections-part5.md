# Chapter: Conic Sections (Part 5)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [conic-sections-part4.md](conic-sections-part4.md) tha** (Topic 4: Hyperbola — difference of focal distances = 2a, c² = a² + b², e > 1). Tangent-circle distance ke liye Chapter 9 ka perpendicular distance formula kaam aayega: [straight-lines-part3.md](../straight-lines/straight-lines-part3.md).
> **Topics covered in this file:**
> 1. Sab Kuch Mila Kar: Real-World Applications (Reflectors, Bridges, Arches, Orbits), Mixed Synthesis Problems, Practice, Aur Chapter Wrap-up Table

---

# Topic 5: Sab Kuch Mila Kar — Applications, Mixed Problems, Aur Chapter Wrap-up

Pichhle chaar topics mein tumne poore Conic Sections parivar ko alag-alag seekha: Circle, Parabola, Ellipse, aur Hyperbola.

Ab in chaaron curves ko real-world engineering aur mixed coordinate-geometry problems mein utaarte hain! Chahe parabolic suspension bridge ki cable ki height nikaalni ho, semi-elliptical tunnel arch ki clearance check karni ho, ya ek circle ko kisi straight line se touch karana ho — yeh aakhri topic poore chapter ko ek saath jod deta hai!

---

## Urvi ka Planetarium & Space Mission Simulator

Urvi ek city planetarium ke Space Mission Simulator ki coordinator hai. Uske projection dome par ek saath chaar curves display ho rahe the:
- Ek geostationary communication satellite ka **Circle** orbit (e = 0)
- Ek deep-space dish antenna ka **Parabola** reflector (e = 1)
- Mars aur Earth ka **Ellipse** orbit Surya ke chaaron taraf (0 < e < 1)
- Aur ek interstellar comet ka **Hyperbola** flyby path jo Surya ke paas se guzarkar hamesha ke liye bahar nikal jata hai (e > 1)!

Urvi ne visitors ko dikhaya: "Sirf ek number — **Eccentricity (e)** — aur equation ke **x², y² signs** dekhkar aap 2 second mein bata sakte ho ki yeh kaun sa conic hai aur iska exact geometry kya hoga!"

---

## Decision Map: Kaun Sa Conic Kaise Pehchanein?

| Equation Signature (Ax² + By² + ... = 0) | Conic Type | Eccentricity (e) | Focal Relation |
|---|---|---|---|
| **A = B** (same sign, equal coefficients, no xy) | **Circle** | e = 0 | r = √(g² + f² - c) |
| **Sirf ek square term** (x² ya y², dono nahi!) | **Parabola** | e = 1 | PF = PM (focus at a) |
| **A ≠ B, dono ka SIGN SAME** (dono + ya dono -) | **Ellipse** | 0 < e < 1 | c² = a² - b² (a > b) |
| **A aur B ke SIGNS OPPOSITE** (ek +, ek -) | **Hyperbola** | e > 1 | c² = a² + b² (c > a) |

---

## 6 Rich Real-World & Mixed Synthesis Problems (Step-by-Step With Jaanch)

### Problem 5.1: Parabolic Reflector Dish Focus Location
**Sawaal:** Ek parabolic reflector 20 cm chauda (wide) aur 5 cm gehra (deep) hai. Iske focus ki exact position gyat karo.

**Solution:**
Vertex ko origin O(0, 0) par aur axis of symmetry ko positive x-axis par rakho => equation: **y² = 4ax**.
Dish ki depth = 5 cm => rim ka x-coordinate = 5.
Poori width = 20 cm => rim ke upar aur neeche half-width = 20/2 = 10 cm!
Isliye rim ke endpoints hain: **(5, 10)** aur **(5, -10)**.

Point (5, 10) ko y² = 4ax mein rakho:
10² = 4a(5)
100 = 20a => **a = 5 cm**.

Isliye focus **(a, 0) = (5, 0)** par hai — yaani theek reflector ke rim ke midpoint par!

Jaanch:
- Jaanch: Equation y² = 20x mein (5, 10) rakho: 10² = 100 = 20(5) ✅

---

### Problem 5.2: Parabolic Suspension Bridge Cable
**Sawaal:** Ek suspension bridge ka roadway 30 meter lamba hai. Cable ke dono ends 12 meter unche towers par bandhe hain, aur cable ka sabse nichla point (vertex) bridge ke beech mein roadway se 6 meter upar hai. Beech se 5 meter door ek vertical supporting wire ki lambai gyat karo.

**Solution:**
Sabse zaroori step: **Origin O(0, 0) ko cable ke lowest point (vertex) par rakho** (roadway par nahi!).
Tab upward parabola ki equation hai: **x² = 4ay**.

- Total span = 30 m => half-span = 15 m.
- Tower ki height roadway se 12 m hai, aur vertex roadway se 6 m upar hai => vertex se tower top ki height = 12 - 6 = **6 m**!
- Isliye right tower ka top point **(15, 6)** parabola x² = 4ay par sthit hai:
  15² = 4a(6)
  225 = 24a => **4a = 225/6 = 75/2**.

Ab beech se 5 meter door (x = 5) par cable ki vertex se height y nikaalo:
5² = (75/2)y
25 = (75/2)y => y = 50/75 = **2/3 meter**.

Roadway se kul supporting wire ki lambai = 6 + y = 6 + 2/3 = **20/3 meter** (approx 6.67 m).

Jaanch:
- Jaanch: x² = (75/2)y mein x = 15 par y = 225/(75/2) = 6 (total 6 + 6 = 12 m tower), aur x = 5 par y = 2/3 (total 20/3 m) ✅

---

### Problem 5.3: Semi-Elliptical Arch Clearance
**Sawaal:** Ek semi-elliptical arch 8 meter chauda (wide) aur beech mein 2 meter uncha (high) hai. Arch ke ek kinare (end) se 1.5 meter andar ki taraf arch ki height gyat karo.

**Solution:**
Arch ke centre ko origin O(0, 0) par rakho:
- Total width = 2a = 8 m => **a = 4 m**.
- Centre par height = b = **2 m**.
Equation of ellipse: **x²/16 + y²/4 = 1**.

Ek end (x = 4) se 1.5 meter andar ki taraf x-coordinate hoga:
x = 4 - 1.5 = **2.5 = 5/2 meter**.

x = 5/2 ko ellipse mein rakho:
(5/2)² / 16 + y²/4 = 1
(25/4) / 16 + y²/4 = 1
25/64 + y²/4 = 1
y²/4 = 1 - 25/64 = 39/64
y² = 39/16 => **y = √39 / 4 meter** (approx 1.56 m).

Jaanch:
- Jaanch: (25/4)/16 + (39/16)/4 = 25/64 + 39/64 = 64/64 = 1 ✅

---

### Problem 5.4: Equilateral Triangle Inscribed In A Parabola
**Sawaal:** Parabola y² = 4ax ke andar ek equilateral triangle OAB bana hai jiska ek vertex O(0, 0) parabola ke vertex par hai. Is equilateral triangle ki side length gyat karo.

**Solution:**
Symmetry ki wajah se x-axis triangle ke angle ∠AOB = 60° ko bisect karega, isliye OA positive x-axis se 30° ka angle banayega!
Maan lo side length OA = L hai.
Right triangle mein vertex A ke coordinates honge:
A = (L cos 30°, L sin 30°) = **(L√3 / 2, L / 2)**.

Kyunki point A parabola y² = 4ax par sthit hai:
(L / 2)² = 4a(L√3 / 2)
L² / 4 = 2aL√3

L > 0 se divide karo:
L / 4 = 2a√3
**L = 8a√3 units**.

Jaanch:
- Jaanch: A(12a, 4a√3) par y² = (4a√3)² = 48a² aur 4ax = 4a(12a) = 48a²; side AB = 8a√3 = OA ✅

---

### Problem 5.5: Concentric Circle Tangent To A Straight Line
**Sawaal:** Us circle ki equation gyat karo jo circle x² + y² - 6x + 12y + 15 = 0 ke concentric hai aur line 3x - 4y + 2 = 0 ko touch (tangent) karta hai.

**Solution:**
1. **Concentric circle = same centre!**
   Diye gaye circle x² + y² - 6x + 12y + 15 = 0 mein 2g = -6 => g = -3, 2f = 12 => f = 6.
   Centre C = (-g, -f) = **(3, -6)**.

2. **Radius = Centre C(3, -6) se tangent line 3x - 4y + 2 = 0 ki perpendicular doori** (Chapter 9 [straight-lines-part3.md](../straight-lines/straight-lines-part3.md)):
   r = |3(3) - 4(-6) + 2| / √(3² + (-4)²)
   = |9 + 24 + 2| / 5
   = 35 / 5 = **7 units**.

3. **Required circle ki equation:**
   **(x - 3)² + (y + 6)² = 49** (ya x² + y² - 6x + 12y - 4 = 0).

Jaanch:
- Jaanch: Centre (3, -6) same hai, aur distance to 3x - 4y + 2 = 0 is 35/5 = 7 = r ✅

---

### Problem 5.6: Confocal Ellipse And Hyperbola
**Sawaal:** Us hyperbola ki equation gyat karo jiske foci ellipse x²/100 + y²/36 = 1 ke foci ke barabar (confocal) hain aur jiski eccentricity e = 2 hai.

**Solution:**
1. **Ellipse x²/100 + y²/36 = 1 ke foci:**
   Yahan a₁² = 100, b₁² = 36 => c² = a₁² - b₁² = 100 - 36 = 64 => **c = 8**.
   Foci = **(±8, 0)** (x-axis par!).

2. **Hyperbola ke liye (same foci (±8, 0), horizontal):**
   c = 8 aur e = c / a = 2 => 8 / a = 2 => **a = 4** => a² = 16.
   Hyperbola mein b² = c² - a² = 64 - 16 = **48**.

3. **Required hyperbola equation:**
   **x²/16 - y²/48 = 1**.

Jaanch:
- Jaanch: Hyperbola c = √(16 + 48) = √64 = 8 (matches ellipse foci!) aur e = 8/4 = 2 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Suspension bridge / arch problem mein origin ko ground par rakh kar x² = 4ay laga dena
- **Galat soch:** "Origin roadway par hai aur vertex (0, 6) par hai, phir bhi x² = 4ay laga diya."
- **Sahi samajh:** Equation x² = 4ay sirf tab valid hoti hai jab **vertex theek (0, 0) par ho**! Isliye hamesha vertex ko (0, 0) maano, heights ko vertex se naapo, aur aakhri answer mein ground clearance (6 m) wapas jodo!

### Galti 2: Total width ko x-coordinate maan lena
- **Galat soch:** "Reflector 20 cm wide aur 5 cm deep hai, isliye rim point (5, 20) hai."
- **Sahi samajh:** Axis of symmetry dish ke beech se guzarta hai! 20 cm poori width hai, isliye upar +10 cm aur neeche -10 cm hota hai — rim point **(5, 10)** hai!

### Galti 3: Tangent circle mein radius ki jagah normal formula bhool jaana
- **Galat soch:** "Circle line ko touch karta hai to centre ko line mein rakh kar zero kar diya."
- **Sahi samajh:** Centre line par nahi hota — centre se line ki **perpendicular doori = radius r** hoti hai!

---

## Quick Recap

- **Conic identification:** Equal same-sign squares (Circle), single square (Parabola), unequal same-sign squares (Ellipse), opposite-sign squares (Hyperbola).
- **Word problems golden rule:** Place origin at vertex (parabola) or centre (ellipse/hyperbola), use **half-width** for x or y!
- **Tangent to circle:** Perpendicular distance from centre to line = radius r.
- **Confocal conics:** Share the exact same c (computed via a² - b² for ellipse, a² + b² for hyperbola).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
A parabolic reflector is 16 cm wide and 4 cm deep. Find the distance of its focus from the vertex.

**Solution:**
Take vertex at (0, 0) and equation y² = 4ax.
Half-width = 16/2 = 8 cm, depth = 4 cm => rim point (4, 8).
8² = 4a(4) => 64 = 16a => a = 4 cm.
Focus is at (4, 0), at a distance of 4 cm from the vertex.

Jaanch:
- Jaanch: y² = 16x mein (4, 8) rakho: 64 = 16(4) ✅

---

### Question 2
An arch is in the form of a parabola with its axis vertical. The arch is 10 m high and 5 m wide at the base. How wide is it 2 m from the vertex of the parabola?

**Solution:**
Take vertex at (0, 0) opening downward: x² = -4ay.
Base is 10 m below vertex (y = -10) and half-width = 5/2 m => point (5/2, -10).
(5/2)² = -4a(-10) => 25/4 = 40a => 4a = 25/40 = 5/8.

At 2 m below vertex (y = -2):
x² = -(5/8)(-2) = 5/4 => x = √5 / 2.
Total width = 2x = √5 m (approx 2.24 m).

Jaanch:
- Jaanch: Width grows as √(depth): 5 × √(2/10) = 5/√5 = √5 m ✅

---

### Question 3
A rod AB of length 15 cm rests in between two coordinate axes such that end A lies on the x-axis and end B lies on the y-axis. A point P(x, y) is taken on the rod such that AP = 6 cm. Show that the locus of P is an ellipse and find its equation.

**Solution:**
Let rod AB make angle θ with the x-axis. Then PB = 15 - 6 = 9 cm.
From the right triangles formed by dropping perpendiculars from P(x, y) to the axes:
- cos θ = x / PB = x / 9
- sin θ = y / AP = y / 6

Since cos² θ + sin² θ = 1:
x²/81 + y²/36 = 1.
This is an ellipse with a = 9 and b = 6!

Jaanch:
- Jaanch: When rod is horizontal (θ = 0°), P is at (9, 0): 81/81 + 0 = 1; when vertical (θ = 90°), P is at (0, 6): 0 + 36/36 = 1 ✅

---

### Question 4
Find the equation of the circle concentric with x² + y² - 4x - 6y - 3 = 0 and touching the y-axis.

**Solution:**
Centre of given circle: g = -2, f = -3 => Centre = (2, 3).
Since the required circle touches the y-axis (x = 0), its radius = perpendicular distance from (2, 3) to x = 0, which is |2| = 2.
Equation: (x - 2)² + (y - 3)² = 4 => x² + y² - 4x - 6y + 9 = 0.

Jaanch:
- Jaanch: Touches y-axis at (0, 3): 0 + 9 - 0 - 18 + 9 = 0 ✅

---

### Question 5
Find the equation of the hyperbola whose foci coincide with the foci of the ellipse x²/25 + y²/9 = 1 and whose eccentricity is 2.

**Solution:**
Ellipse: a₁² = 25, b₁² = 9 => c = √(25 - 9) = 4 => foci (±4, 0).
Hyperbola: c = 4, e = c/a = 2 => a = 2 => a² = 4.
b² = c² - a² = 16 - 4 = 12.
Equation: x²/4 - y²/12 = 1.

Jaanch:
- Jaanch: Hyperbola c = √(4 + 12) = 4 aur e = 4/2 = 2 ✅

---

### Question 6
A man running a racecourse notes that the sum of the distances from two flag posts from him is always 10 m and the distance between the flag posts is 8 m. Find the equation of the path traced by the man.

**Solution:**
Sum of distances from two fixed foci is constant => Ellipse!
2a = 10 => a = 5 => a² = 25.
Distance between foci = 2c = 8 => c = 4 => c² = 16.
b² = a² - c² = 25 - 16 = 9.
Taking the line through flag posts as x-axis and midpoint as origin:
x²/25 + y²/9 = 1.

Jaanch:
- Jaanch: 2a = 10, 2c = 2√(25 - 9) = 8 ✅

---

### Question 7
Find the coordinates of the focus and vertex of the circle-parabola intersection: find the points of intersection of the circle x² + y² = 12 and the parabola y² = 4x.

**Solution:**
Substitute y² = 4x into x² + y² = 12:
x² + 4x - 12 = 0
(x + 6)(x - 2) = 0 => x = 2 or x = -6.
Since y² = 4x ≥ 0, x cannot be -6! Thus x = 2.
Then y² = 4(2) = 8 => y = ±2√2.
Points of intersection: (2, 2√2) and (2, -2√2).

Jaanch:
- Jaanch: (2, ±2√2) satisfy x² + y² = 4 + 8 = 12 and y² = 8 = 4(2) ✅

---

### Question 8
Identify the type of conic section represented by each equation: (a) 4x² + 4y² - 8x + 12y - 3 = 0 (b) 3x² + 5y² = 15 (c) 5x² - 3y² = 15 (d) x² = -9y.

**Solution:**
(a) Coefficient of x² = Coefficient of y² = 4 (and g² + f² - c = 1 + 9/4 + 3/4 = 4 > 0) => **Circle**.
(b) Both x² and y² positive with unequal coefficients (3 ≠ 5) => **Ellipse**.
(c) x² and y² have opposite signs (+5 and -3) => **Hyperbola**.
(d) Only one squared variable (x²) and one linear variable (y) => **Parabola**.

Jaanch:
- Jaanch: Matches every signature in the Decision Map ✅

---

### Question 9
Find the equation of the circle passing through the vertex and the endpoints of the latus rectum of the parabola y² = 8x.

**Solution:**
For y² = 8x, 4a = 8 => a = 2.
Vertex O = (0, 0), Latus rectum endpoints A = (2, 4) and B = (2, -4).
By symmetry, centre lies on x-axis at C(h, 0) and passes through (0, 0), so radius r = h.
CA² = h²:
(h - 2)² + (0 - 4)² = h²
h² - 4h + 4 + 16 = h² => 4h = 20 => h = 5.
Equation: (x - 5)² + y² = 25 => x² + y² - 10x = 0.

Jaanch:
- Jaanch: (0, 0) gives 0; (2, ±4) gives 4 + 16 - 20 = 0 ✅

---

### Question 10
A beam is supported at its ends by supports which are 12 m apart. Since the load is concentrated at its centre, there is a deflection of 3 cm at the centre and the deflected beam is in the shape of a parabola. How far from the centre is the deflection 1 cm?

**Solution:**
Take vertex (lowest point at centre) as origin (0, 0), upward parabola x² = 4ay.
Half-span = 6 m = 600 cm; deflection at ends relative to centre = 3 cm => endpoint (600, 3) (or in meters: (6, 0.03)).
In meters: 6² = 4a(0.03) => 4a = 36 / 0.03 = 1200.

Deflection of 1 cm from horizontal means height above lowest point is 3 - 1 = 2 cm = 0.02 m!
Substitute y = 0.02 into x² = 1200y:
x² = 1200(0.02) = 24 => x = √24 = 2√6 m (approx 4.90 m from centre).

Jaanch:
- Jaanch: At x = 0, y = 0 (deflection 3 cm); at x = 6, y = 36/1200 = 0.03 m = 3 cm (deflection 0 cm); at x = 2√6, y = 24/1200 = 0.02 m (deflection 1 cm) ✅

---

### Question 11
If the eccentricity of an ellipse is 3/5 and the distance between its foci is 6 units, find the length of its latus rectum.

**Solution:**
2c = 6 => c = 3.
e = c / a = 3/5 => 3 / a = 3/5 => a = 5.
b² = a² - c² = 25 - 9 = 16.
Length of latus rectum = 2b² / a = 2(16) / 5 = 32/5 = 6.4 units.

Jaanch:
- Jaanch: e = 3/5, 2c = 6, b = 4, LR = 32/5 ✅

---

### Question 12
Find the equation of the set of all points P(x, y) such that the difference of its distances from (4, 0) and (-4, 0) is always 2.

**Solution:**
Constant difference of distances from two fixed foci (±4, 0) => Horizontal Hyperbola!
c = 4 => c² = 16.
2a = 2 => a = 1 => a² = 1.
b² = c² - a² = 16 - 1 = 15.
Equation: x²/1 - y²/15 = 1 (ya 15x² - y² = 15).

Jaanch:
- Jaanch: Vertex (1, 0) par distances to (4, 0) and (-4, 0) are 3 and 5; difference = 5 - 3 = 2 ✅

---

## Chapter Wrap-up Table

| Conic Section | Standard Equation | Centre / Vertex | Foci | Key Relation & Eccentricity | Latus Rectum |
|---|---|---|---|---|---|
| **Circle** | (x - h)² + (y - k)² = r²<br>x² + y² + 2gx + 2fy + c = 0 | Centre (h, k) ya (-g, -f) | Same as centre | r = √(g² + f² - c) > 0<br>e = 0 | — (Diameter = 2r) |
| **Parabola (Right / Left)** | y² = ±4ax (a > 0) | Vertex (0, 0) | (±a, 0) | Directrix x = ∓a<br>e = 1 | 4a |
| **Parabola (Up / Down)** | x² = ±4ay (a > 0) | Vertex (0, 0) | (0, ±a) | Directrix y = ∓a<br>e = 1 | 4a |
| **Ellipse (Horizontal)** | x²/a² + y²/b² = 1 (a > b) | Centre (0, 0)<br>Vertices (±a, 0) | (±c, 0) | c² = a² - b²<br>e = c/a (0 < e < 1) | 2b² / a |
| **Ellipse (Vertical)** | x²/b² + y²/a² = 1 (a > b) | Centre (0, 0)<br>Vertices (0, ±a) | (0, ±c) | c² = a² - b²<br>e = c/a (0 < e < 1) | 2b² / a |
| **Hyperbola (Horizontal)** | x²/a² - y²/b² = 1 | Centre (0, 0)<br>Vertices (±a, 0) | (±c, 0) | c² = a² + b²<br>e = c/a (e > 1) | 2b² / a |
| **Hyperbola (Vertical)** | y²/a² - x²/b² = 1 | Centre (0, 0)<br>Vertices (0, ±a) | (0, ±c) | c² = a² + b²<br>e = c/a (e > 1) | 2b² / a |

---

Ab tumne poore Conic Sections parivar — Circle, Parabola, Ellipse, aur Hyperbola — ko derivation se lekar real-world engineering applications tak master kar liya hai!

Agle chapter **Introduction to Three Dimensional Geometry** mein hum 2D flat sheet (x, y) se bahar nikal kar asli 3D space (x, y, z) mein kadam rakhenge — jahan 8 octants, 3D distance formula, aur 3D section formula hamara intezaar kar rahe hain!
