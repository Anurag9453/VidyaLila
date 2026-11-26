> **Class:** 12 | **Subject:** Mathematics | **Chapter 6:** Application of Derivatives (Part 5)

# Maxima, Minima and Optimisation Word Problems

> **Pichle topic mein:** Humne [Approximations](application-of-derivatives-part4.md) padha. Ab hum derivatives ka sabse bada superpower — kisi bhi function ya real-world design (profit, area, volume, packaging cost) ka **Maximum** ya **Minimum** value nikalna (**First & Second Derivative Tests + Optimisation Word Problems**) — seekhenge!

---

Gunjan ek packaging company mein intern thi jahan 1-litre (1000 cm³) ka cylindrical tin-can banana tha. Manager ne kaha: "Volume 1000 cm³ fixed rakho, par **metal sheet (Total Surface Area) SABSE KAM** lagni chahiye taki company ka kharcha bache!" Gunjan ne calculus se dS/dr = 0 solve kiya aur dekha ki sabse sasta cylinder hamesha tab banta hai jab **Height = Diameter (h = 2r)** ho!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Critical Point (c)** | Domain ka woh point jahan **f'(c) = 0** ya f'(c) undefined ho |
| **Local Maximum / Minimum** | Apne aas-paas (neighbourhood) mein sabse badi ya sabse chhoti value |
| **Point of Inflection** | Critical point jahan f'(x) ka sign **NAHI badalta** (na max, na min — jaise f(x) = x³ at x = 0!) |
| **Absolute (Global) Max / Min** | Closed interval **[a, b]** par poore function ki sabse badi ya sabse chhoti value (critical points + endpoints a, b dono check karo!) |

---

## 1. First Derivative Test vs Second Derivative Test

### (a) First Derivative Test (Always Works!)
Critical point x = c ke left se right jaane par f'(x) ka sign dekho:
- **+ se −** badle ⇒ **Local Maximum** at x = c!
- **− se +** badle ⇒ **Local Minimum** at x = c!
- **Sign NA badle** (+ se +, ya − se −) ⇒ **Point of Inflection** (neither max nor min!).

### (b) Second Derivative Test (Fastest for Smooth Functions!)
Find critical points from **f'(c) = 0**, then evaluate **f''(c)**:
- **f''(c) < 0** (negative — concave down ∩) ⇒ **Local Maximum** at x = c!
- **f''(c) > 0** (positive — concave up ∪) ⇒ **Local Minimum** at x = c!
- **f''(c) = 0** ⇒ **Test FAILS!** Go back to the First Derivative Test!

### (c) Absolute Max & Min on Closed Interval [a, b]
1. Find all critical points c₁, c₂, ... inside (a, b).
2. Evaluate f(x) at **ALL critical points AND BOTH endpoints a, b**: {f(a), f(c₁), f(c₂), ..., f(b)}.
3. **Largest value = Absolute Maximum**, **Smallest value = Absolute Minimum**!

---

## 2. Four Golden Steps for Optimisation Word Problems

1. Identify the quantity **Q** to be maximised/minimised (e.g., Volume V, Surface Area S, Area A) and the **given constraint** (fixed V, fixed S, fixed radius R).
2. Use the constraint to express **Q in terms of ONE single variable** (e.g., r, x, or θ).
   *(Pro Tip: Maximising V² or S² gives the EXACT same critical point as maximising V or S, and eliminates messy square roots!)*
3. Solve **dQ/dx = 0** to find the critical value.
4. Confirm max/min using **d²Q/dx² < 0** (for max) or **> 0** (for min)!

---

## Solved Examples

### Example 1: Finding Local Extrema Using Second Derivative Test
Find all points of local maxima and local minima (and their values) for **f(x) = x³ − 6x² + 9x + 15**.

**Solution:**
1. f'(x) = 3x² − 12x + 9 = 3(x² − 4x + 3) = **3(x − 1)(x − 3)**.
2. Critical points: f'(x) = 0 ⇒ **x = 1** and **x = 3**.
3. Second derivative: **f''(x) = 6x − 12**.
   - At **x = 1:** f''(1) = 6 − 12 = **−6 < 0** ⇒ **Local Maximum** at x = 1; value = 1 − 6 + 9 + 15 = **19**.
   - At **x = 3:** f''(3) = 18 − 12 = **+6 > 0** ⇒ **Local Minimum** at x = 3; value = 27 − 54 + 27 + 15 = **15**.

Jaanch: Check values near x = 1 (f(0)=15, f(1)=19, f(2)=17 → peak at 1!) and near x = 3 (f(2)=17, f(3)=15, f(4)=19 → valley at 3!) ✅

---

### Example 2: Open-Top Box of Maximum Volume from a Square Sheet
A square piece of tin of side **18 cm** is to be made into an open-top box by cutting a square of side **x** from each corner and folding up the flaps. What should **x** be so that the volume of the box is maximum?

**Solution:**
After cutting x × x from all 4 corners:
- Base length = Base width = **18 − 2x**, Height = **x** (valid for 0 < x < 9).
- Volume **V(x) = x(18 − 2x)²**.
Differentiate (product rule):
V'(x) = (18 − 2x)² + x · 2(18 − 2x)(−2) = (18 − 2x)[ (18 − 2x) − 4x ] = **(18 − 2x)(18 − 6x)**.
Set V'(x) = 0 ⇒ x = 9 (reject, gives V = 0!) or **x = 3 cm**.
Second derivative: V''(x) = −2(18 − 6x) + (18 − 2x)(−6).
At x = 3: V''(3) = 0 + (12)(−6) = **−72 < 0** ⇒ **Maximum at x = 3 cm**!
Maximum volume = 3 × (18 − 6)² = 3 × 144 = **432 cm³**.

Jaanch: At x = 2: V = 2(14)² = 392; at x = 3: V = 432; at x = 4: V = 4(10)² = 400 → peak at x = 3 ✅

---

### Example 3: Closed Cylinder of Fixed Volume & Minimum Surface Area (Gunjan's Problem!)
Show that of all closed right circular cylinders of a given volume V, the one with **minimum total surface area** has **height equal to the diameter of its base (h = 2r)**.

**Solution:**
Given fixed V = πr²h ⇒ **h = V / (πr²)**.
Total Surface Area S(r) = 2πr² + 2πrh = 2πr² + 2πr(V / πr²) = **2πr² + 2V / r**.
Differentiate w.r.t. r:
- S'(r) = 4πr − 2V / r² = 0 ⇒ 4πr³ = 2V ⇒ **V = 2πr³**.
- Substitute V = πr²h into V = 2πr³: πr²h = 2πr³ ⇒ **h = 2r (height = diameter)**!
Confirm minimum:
- S''(r) = **4π + 4V / r³ > 0** (always positive for r > 0!) ⇒ **Minimum surface area**!

Jaanch: Both terms in S''(r) are positive, confirming a unique global minimum at h = 2r ✅

---

### Example 4: Right Circular Cylinder of Maximum Volume Inscribed in a Sphere of Radius R
Show that the height of the cylinder of maximum volume that can be inscribed in a sphere of radius **R** is **2R / √3**.

**Solution:**
Let cylinder have radius r and height h. By Pythagoras in the sphere:
r² + (h/2)² = R² ⇒ **r² = R² − h²/4**.
Volume V(h) = πr²h = π(R² − h²/4)h = **π(R²h − h³/4)** (0 < h < 2R).
Differentiate w.r.t. h:
- V'(h) = π(R² − 3h²/4) = 0 ⇒ 3h²/4 = R² ⇒ h² = 4R²/3 ⇒ **h = 2R / √3**!
- V''(h) = −(3π/2)h < 0 (for h > 0) ⇒ **Maximum volume**!
- Maximum volume = π(R² − R²/3)(2R/√3) = **(4πR³) / (3√3)**.

Jaanch: Ratio V_max / V_sphere = (4πR³/(3√3)) / (4πR³/3) = 1/√3 ≈ 57.7% (< 100%, physically exact!) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **f''(c) < 0 ko Minimum aur f''(c) > 0 ko Maximum samajh lena:**
   - *Galat:* Negative = chhota = minimum.
   - *Sahi:* Ulta hota hai! **f'' < 0** (curved downward ∩) = **Maximum**; **f'' > 0** (curved upward ∪) = **Minimum**!

2. **Absolute max/min on [a, b] mein endpoints a aur b check karna bhool jana:**
   - *Galat:* Sirf f'(c) = 0 wale points par value nikal kar answer bol dena.
   - *Sahi:* Closed interval [a, b] par **f(a) aur f(b) dono** compare karna mandatory hai!

3. **Word problem mein d²Q/dx² check karke max/min prove na karna:**
   - *Galat:* Sirf dQ/dx = 0 solve karke "hence maximum!" likh dena.
   - *Sahi:* Hamesha **d²Q/dx² < 0** (max) ya **> 0** (min) verify karke dikhao!

---

## Quick Recap

- **2nd Derivative Test:** f'(c) = 0 and f''(c) < 0 ⇒ **Max**; f''(c) > 0 ⇒ **Min**; f''(c) = 0 ⇒ use 1st derivative test!
- **Absolute Extrema on [a, b]:** Compare f at all critical points in (a, b) AND endpoints a, b.
- **Classic Optimisation Results:**
  - Closed cylinder (fixed V, min TSA): **h = 2r**.
  - Cylinder in sphere of radius R (max V): **h = 2R / √3**.
  - Cone in sphere of radius R (max V): **h = 4R / 3** (V_max = (8/27) V_sphere!).
  - Rectangle in circle (max area): **Square**!

---

## Practice Questions

1. Find the local maximum and local minimum values of **f(x) = x³ − 3x + 5**.
2. Find the absolute maximum and absolute minimum values of **f(x) = 2x³ − 15x² + 36x + 1** on **[1, 5]**.
3. Find two positive numbers whose sum is **16** and the sum of whose cubes is **minimum**.
4. Find two positive numbers x and y such that **x + y = 60** and **xy³** is **maximum**.
5. Show that of all rectangles with a given perimeter **P**, the **square** has the maximum area.
6. Prove that the volume of the largest **cone** that can be inscribed in a sphere of radius **R** is **(8/27)** of the volume of the sphere.
7. Show that the semi-vertical angle of a right circular cone of given surface area and maximum volume is **sin⁻¹(1/3)**.
8. Show that the right circular cylinder of given total surface area and maximum volume is such that its height equals the diameter of its base (**h = 2r**).
9. Find the point on the curve **x² = 2y** which is nearest to the point **(0, 5)**.
10. Show that **f(x) = x³ − 6x² + 12x − 5** has neither a local maximum nor a local minimum.

---

### Answers

1. f'(x) = 3x² − 3 = 3(x − 1)(x + 1) = 0 ⇒ x = ±1; f''(x) = 6x.
   - At x = −1: f''(−1) = −6 < 0 ⇒ **Local max = (−1)³ − 3(−1) + 5 = 7**.
   - At x = 1: f''(1) = +6 > 0 ⇒ **Local min = 1 − 3 + 5 = 3**.
   Jaanch: f(−1) = 7 > f(1) = 3 ✅
2. f'(x) = 6x² − 30x + 36 = 6(x − 2)(x − 3) = 0 ⇒ critical points x = 2, 3 ∈ [1, 5].
   Evaluate at {1, 2, 3, 5}:
   - f(1) = 2 − 15 + 36 + 1 = **24**
   - f(2) = 16 − 60 + 72 + 1 = **29**
   - f(3) = 54 − 135 + 108 + 1 = **28**
   - f(5) = 250 − 375 + 180 + 1 = **56**
   **Absolute max = 56** (at x = 5); **Absolute min = 24** (at x = 1)!
   Jaanch: Both global extrema occurred at endpoints! ✅
3. S(x) = x³ + (16 − x)³ ⇒ S'(x) = 3x² − 3(16 − x)² = 0 ⇒ x = 16 − x ⇒ **x = 8**, so numbers are **8 and 8**.
   S''(8) = 6(8) + 6(8) = 96 > 0 ⇒ Minimum!
4. P(y) = (60 − y)y³ = 60y³ − y⁴ ⇒ P'(y) = 180y² − 4y³ = 4y²(45 − y) = 0 ⇒ **y = 45, x = 15**.
   P''(45) = 360(45) − 12(45²) = 45(360 − 540) < 0 ⇒ Maximum!
   Jaanch: 15 + 45 = 60 ✅
5. P = 2(x + y) ⇒ y = P/2 − x. Area A(x) = x(P/2 − x) = (P/2)x − x².
   A'(x) = P/2 − 2x = 0 ⇒ **x = P/4**, y = P/4 (x = y ⇒ **square**!). A''(x) = −2 < 0 ⇒ Maximum!
6. Let cone height h = R + x (0 < x < R); base radius r² = R² − x².
   V(x) = (1/3)π(R² − x²)(R + x) ⇒ V'(x) = (1/3)π[ −2x(R + x) + (R² − x²) ] = (1/3)π(R − 3x)(R + x) = 0 ⇒ **x = R/3** (so h = **4R/3**!).
   V''(R/3) < 0 ⇒ Max! V_max = (1/3)π(8R²/9)(4R/3) = (32/81)πR³ = **(8/27) × (4/3)πR³** = (8/27) V_sphere!
   Jaanch: (8/27) × (4/3) = 32/81 ✅
7. S = πr² + πrl ⇒ l = (S − πr²)/(πr). Maximise V² = (1/9)π²r⁴(l² − r²) = (1/9)(S²r² − 2πSr⁴).
   d(V²)/dr = (1/9)(2S²r − 8πSr³) = 0 ⇒ **S = 4πr²**. Substitute into S = πr² + πrl ⇒ 4πr² = πr² + πrl ⇒ **l = 3r**.
   Semi-vertical angle α: **sin α = r / l = 1/3 ⇒ α = sin⁻¹(1/3)**!
8. S = 2πr² + 2πrh ⇒ h = (S − 2πr²)/(2πr). V = πr²h = (1/2)(Sr − 2πr³).
   V'(r) = (1/2)(S − 6πr²) = 0 ⇒ **S = 6πr²** ⇒ 2πr² + 2πrh = 6πr² ⇒ **h = 2r**! V''(r) = −6πr < 0 ⇒ Max!
9. Minimise squared distance D(y) = (x − 0)² + (y − 5)² = 2y + (y − 5)² = y² − 8y + 25 (y ≥ 0).
   D'(y) = 2y − 8 = 0 ⇒ **y = 4**, then x² = 8 ⇒ **x = ±2√2**. D''(y) = 2 > 0 ⇒ Min!
   Nearest points: **(2√2, 4)** and **(−2√2, 4)**!
   Jaanch: Distance² = 8 + 1 = 9 ⇒ shortest distance = 3 ✅
10. f'(x) = 3x² − 12x + 12 = **3(x − 2)² ≥ 0** for all x! Since f'(x) never changes sign across x = 2 (+ to +), x = 2 is a **point of inflection** (neither max nor min!).

---

Ab tum maxima, minima aur sabhi classic 3D mensuration optimisation problems ko confidently solve kar sakte ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up](application-of-derivatives-part6.md) mein hum poore Application of Derivatives chapter ke mixed high-scoring problems aur wrap-up table complete karenge!
