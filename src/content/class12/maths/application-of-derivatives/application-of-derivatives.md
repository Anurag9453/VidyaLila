> **Class:** 12 | **Subject:** Mathematics | **Chapter 6:** Application of Derivatives

# Rate of Change of Quantities

> **Pichle chapter mein:** Humne [Continuity and Differentiability — Mixed Problems & Wrap-up](../continuity-and-differentiability/continuity-and-differentiability-part5.md) mein derivatives nikalna seekha. Ab hum derivatives ko asli duniya mein apply karenge — **Application of Derivatives**! Pehle topic mein dekhenge ki **dy/dx** kisi bhi badalti hui quantity (area, volume, distance, cost) ke **instantaneous rate of change** ko kaise napta hai!

---

Devendra ne shaant talab mein ek chhota patthar phenka — gol lehrein (circular ripples) 5 cm/s ki speed se bahar failne lagin! Devendra ne socha: "Radius toh constant 5 cm/s se badh raha hai, par kya **Area** bhi constant rate se badh raha hai?" Bilkul nahi! Jab radius 8 cm hota hai, tab dA/dt = 2πr(dr/dt) = 80π cm²/s — radius jitna bada, area utni hi tezi se badhta hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Rate of Change (dy/dx)** | x ke respect mein y ke badalne ki instantaneous raftaar (positive = badh raha hai, negative = ghat raha hai!) |
| **Related Rates** | Chain rule se do time-varying quantities ke rates ko jodna: **dA/dt = (dA/dr) · (dr/dt)** |
| **Marginal Cost (MC)** | Total cost C(x) ka derivative: **MC = dC/dx** (ek extra unit banane ki instantaneous cost) |
| **Marginal Revenue (MR)** | Total revenue R(x) ka derivative: **MR = dR/dx** (ek extra unit bechne se aayi instantaneous income) |

---

## 1. Essential Mensuration Formulas for Related Rates

| Shape | Volume (V) | Surface Area / Area (S / A) |
|---|---|---|
| **Circle** (radius r) | — | A = πr²,   Perimeter C = 2πr |
| **Cube** (edge x) | V = x³ | S = 6x² |
| **Sphere** (radius r) | V = (4/3)πr³ | S = 4πr² |
| **Cylinder** (r, h) | V = πr²h | CSA = 2πrh,   TSA = 2πr(r + h) |
| **Cone** (r, h, l) | V = (1/3)πr²h | CSA = πrl (l = √(r² + h²)) |

### Sign Convention (CRITICAL!):
- Quantity **increasing** ⇒ rate is **POSITIVE (+)** (e.g., dr/dt = +5 cm/s).
- Quantity **decreasing** ⇒ rate is **NEGATIVE (−)** (e.g., dx/dt = −2 cm/s).
- **Never substitute the numerical value of r or x BEFORE differentiating!** First differentiate symbolically, THEN plug in the instant values!

---

## Solved Examples

### Example 1: Volume & Surface Area of an Expanding Cube
The volume of a cube is increasing at a rate of **8 cm³/s**. How fast is the surface area increasing when the length of an edge is **12 cm**?

**Solution:**
Let edge = x cm. Given dV/dt = +8 cm³/s.
1. V = x³ ⇒ dV/dt = 3x² (dx/dt).
   Substitute dV/dt = 8: 8 = 3x² (dx/dt) ⇒ **dx/dt = 8 / (3x²)**.
2. Surface area S = 6x² ⇒ dS/dt = 12x (dx/dt).
   Substitute dx/dt = 8 / (3x²):
   dS/dt = 12x × [8 / (3x²)] = **32 / x**.
3. At x = 12 cm:
   **dS/dt = 32 / 12 = 8/3 cm²/s** (≈ 2.67 cm²/s).

Jaanch: Units: (cm³/s) / cm = cm²/s; 32/12 simplifies by 4 to 8/3 cm²/s ✅

---

### Example 2: Ladder Sliding Down a Wall (Negative Rate!)
A ladder **5 m** long is leaning against a wall. The bottom of the ladder is pulled away from the wall at **2 cm/s**. How fast is its height on the wall decreasing when the foot of the ladder is **4 m** away from the wall?

**Solution:**
Let x = distance of foot from wall, y = height on wall.
By Pythagoras: **x² + y² = 5² = 25**.
At x = 4 m: y = √(25 − 16) = **3 m**.
Differentiate x² + y² = 25 w.r.t. time t:
2x (dx/dt) + 2y (dy/dt) = 0 ⇒ **dy/dt = −(x / y) (dx/dt)**.
Substitute x = 4 m, y = 3 m, dx/dt = +2 cm/s (ratio x/y is dimensionless, so dy/dt comes directly in cm/s!):
dy/dt = −(4/3)(2) = **−8/3 cm/s**.
So the height is **decreasing at 8/3 cm/s**!

Jaanch: Negative sign confirms height decreases as foot moves out; 4(2) + 3(−8/3) = 8 − 8 = 0 ✅

---

### Example 3: Sand Pouring Into a Conical Pile
Sand is pouring from a pipe at the rate of **12 cm³/s**. The falling sand forms a cone on the ground such that the height of the cone is always **one-sixth of the radius** of the base (h = r/6). How fast is the height increasing when the height is **4 cm**?

**Solution:**
Given dV/dt = 12 cm³/s and h = r/6 ⇒ **r = 6h**.
Express volume V purely in terms of h:
V = (1/3)πr²h = (1/3)π(6h)²h = (1/3)π(36h³) = **12πh³**.
Differentiate w.r.t. t:
dV/dt = 36πh² (dh/dt).
Substitute dV/dt = 12 and h = 4 cm:
12 = 36π(4²)(dh/dt) = 36π(16)(dh/dt) = 576π (dh/dt)
**dh/dt = 12 / (576π) = 1 / (48π) cm/s**!

Jaanch: 12 × 48 = 576 → 12/(576π) = 1/(48π) cm/s ✅

---

### Example 4: Marginal Cost and Marginal Revenue
The total cost C(x) in rupees associated with producing x units of an item is **C(x) = 0.007x³ − 0.003x² + 15x + 4000**. Find the marginal cost when **17 units** are produced.

**Solution:**
Marginal cost MC = dC/dx = **0.021x² − 0.006x + 15**.
At x = 17:
MC = 0.021(289) − 0.006(17) + 15
= 6.069 − 0.102 + 15 = **₹20.967** (≈ ₹20.97).

Jaanch: 21 × 289 = 6069; 6 × 17 = 102; 6.069 − 0.102 + 15 = 20.967 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Differentiate karne se PEHLE r = 12 ya x = 4 substitute kar dena:**
   - *Galat:* V = 12³ = 1728 ⇒ dV/dt = 0!
   - *Sahi:* Pehle **variables mein differentiate** karo, phir instant value put karo!

2. **Decreasing quantity ka rate positive rakh dena:**
   - *Galat:* Length decreasing at 5 cm/min ko dx/dt = +5 le lena.
   - *Sahi:* Decreasing rate hamesha **negative (−5 cm/min)** hota hai!

---

## Quick Recap

- **Chain Rule for Rates:** dy/dt = (dy/dx) · (dx/dt).
- **Positive rate** = increasing; **Negative rate** = decreasing.
- **Cone/Cylinder trick:** Eliminate one variable (using given ratio like r = 6h) BEFORE differentiating!
- **Economics:** Marginal Cost = dC/dx; Marginal Revenue = dR/dx.

---

## Practice Questions

1. Find the rate of change of the area of a circle with respect to its radius r when r = 6 cm.
2. A stone dropped into a quiet lake creates circular ripples moving outward at 4 cm/s. At the instant when the radius is 10 cm, how fast is the enclosed area increasing?
3. The length x of a rectangle is decreasing at 5 cm/min and the width y is increasing at 4 cm/min. When x = 8 cm and y = 6 cm, find the rates of change of: (a) the perimeter, (b) the area.
4. A spherical balloon is being inflated by pumping in **900 cm³/s** of gas. Find the rate at which the radius of the balloon increases when the radius is **15 cm**.
5. A spherical soap bubble has variable radius. Find the rate at which its volume is increasing with respect to its radius when the radius is 10 cm.
6. The radius of an air bubble is increasing at 1/2 cm/s. At what rate is the volume of the bubble increasing when the radius is 1 cm?
7. A balloon, which always remains spherical, has a variable diameter **(3/2)(2x + 1)**. Find the rate of change of its volume with respect to x.
8. A particle moves along the curve **6y = x³ + 2**. Find the points on the curve at which the y-coordinate is changing **8 times as fast** as the x-coordinate.
9. The total revenue R(x) from selling x units is **R(x) = 13x² + 26x + 15**. Find the marginal revenue when x = 7.
10. A 10 m ladder leans against a wall. If the foot is pulled away at 3 m/s, how fast is the top sliding down when the foot is 6 m from the wall?

---

### Answers

1. A = πr² ⇒ dA/dr = 2πr. At r = 6: dA/dr = **12π cm²/cm**.
2. dr/dt = 4 cm/s; dA/dt = 2πr(dr/dt) = 2π(10)(4) = **80π cm²/s**.
   Jaanch: 2 × 10 × 4 = 80 ✅
3. Given dx/dt = −5 cm/min, dy/dt = +4 cm/min, x = 8, y = 6:
   (a) P = 2(x + y) ⇒ dP/dt = 2(−5 + 4) = **−2 cm/min** (decreasing at 2 cm/min).
   (b) A = xy ⇒ dA/dt = x(dy/dt) + y(dx/dt) = 8(4) + 6(−5) = 32 − 30 = **+2 cm²/min** (increasing at 2 cm²/min!).
   Jaanch: 32 − 30 = +2 ✅
4. V = (4/3)πr³ ⇒ dV/dt = 4πr² (dr/dt).
   900 = 4π(15²)(dr/dt) = 900π (dr/dt) ⇒ **dr/dt = 1/π cm/s**.
   Jaanch: 4 × 225 = 900 ✅
5. dV/dr = 4πr². At r = 10: **400π cm³/cm**.
6. dV/dt = 4πr²(dr/dt) = 4π(1²)(1/2) = **2π cm³/s**.
7. Radius r = diameter/2 = (3/4)(2x + 1).
   V = (4/3)πr³ = (4/3)π × (27/64)(2x + 1)³ = (9π/16)(2x + 1)³.
   dV/dx = (9π/16) × 3(2x + 1)² × 2 = **(27π/8)(2x + 1)²**.
   Jaanch: (9/16) × 6 = 54/16 = 27/8 ✅
8. Differentiate 6y = x³ + 2 w.r.t. t: 6(dy/dt) = 3x²(dx/dt).
   Given dy/dt = 8(dx/dt): 6(8) = 3x² ⇒ 48 = 3x² ⇒ x² = 16 ⇒ **x = ±4**.
   - At x = 4: 6y = 66 ⇒ y = 11 → **(4, 11)**.
   - At x = −4: 6y = −62 ⇒ y = −31/3 → **(−4, −31/3)**.
   Jaanch: 6(11) = 66 = 4³+2; 6(−31/3) = −62 = (−4)³+2 ✅
9. MR = dR/dx = 26x + 26. At x = 7: 26(7) + 26 = 26 × 8 = **₹208**.
   Jaanch: 182 + 26 = 208 ✅
10. x² + y² = 100. At x = 6, y = √(100 − 36) = 8 m.
    dy/dt = −(x/y)(dx/dt) = −(6/8)(3) = **−9/4 = −2.25 m/s** (sliding down at 2.25 m/s).
    Jaanch: 6(3) + 8(−2.25) = 18 − 18 = 0 ✅

---

Ab tum related rates aur marginal cost/revenue ke sabhi problems bina kisi unit ya sign mistake ke solve kar sakte ho!

**Agle topic mein:** Hum [Increasing and Decreasing Functions](application-of-derivatives-part2.md) padhenge — aur dekhenge ki sirf f'(x) ka sign dekh kar kisi bhi function ka up-and-down graph kaise map kiya jata hai!
