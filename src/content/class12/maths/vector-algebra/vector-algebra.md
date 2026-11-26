> **Class:** 12 | **Subject:** Mathematics | **Chapter 10:** Vector Algebra

# Basic Concepts, Types of Vectors, Addition and Scalar Multiplication

> **Pichle chapter mein:** Humne [Differential Equations — Mixed Problems & Wrap-up](../differential-equations/differential-equations-part4.md) ke saath poora Calculus complete kiya! **Class 11 bridges:** Basic 2D vectors hum [Motion in a Plane](../../../class11/physics/motion-in-a-plane/motion-in-a-plane.md) mein aur 3D coordinates hum [Introduction to Three Dimensional Geometry](../../../class11/maths/introduction-to-three-dimensional-geometry/introduction-to-three-dimensional-geometry.md) mein dekh chuke hain — ab hum **3D Vector Algebra** ko pure mathematical precision ke saath padhenge!

---

Neelima apne college robotics club ke delivery drone ka flight path set kar rahi thi: drone north-east ki taraf 12 m/s se ud raha tha, aur hawa west ki taraf 5 m/s se chal rahi thi! Drone ki asli speed sirf 12 + 5 = 17 nahi hogi — kyunki **magnitude ke saath-saath direction** bhi matter karti hai! Aisi hi quantities jinke paas magnitude aur direction dono hon, **Vectors** kehlati hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Scalar vs Vector** | Scalar = sirf magnitude (mass, time, speed); Vector = **magnitude + direction** (displacement, velocity, force) |
| **Magnitude (len a⃗)** | Directed line segment AB ki length (hamesha ≥ 0) |
| **Zero (Null) Vector (0⃗)** | Woh vector jiska initial aur terminal point same ho (magnitude = 0, arbitrary direction) |
| **Unit Vector (â)** | Woh vector jiska magnitude exact **1** ho: **â = a⃗ / (magnitude of a⃗)** |
| **Coinitial Vectors** | Do ya zyada vectors jinka **starting (initial) point same** ho |
| **Collinear (Parallel) Vectors** | Do ya zyada vectors jo **ek hi line ke parallel** hon (chahe magnitude aur sense same ho ya opposite: **b⃗ = λ a⃗**) |
| **Equal Vectors** | Do vectors jinka **magnitude AUR direction dono same** hon (position alag ho sakti hai — free vectors!) |

---

## 1. Addition of Vectors & Properties

1. **Triangle Law:** Agar a⃗ = AB⃗ aur b⃗ = BC⃗ (head-to-tail), toh **a⃗ + b⃗ = AC⃗**!
   - Closed loop rule: **AB⃗ + BC⃗ + CA⃗ = 0⃗**!
2. **Parallelogram Law:** Agar a⃗ aur b⃗ ek hi initial point (coinitial) se ek parallelogram ke 2 adjacent sides banate hain, toh unka sum **a⃗ + b⃗** us common point se guzarne wala **diagonal** hota hai!
3. **Algebraic Properties of Vector Addition:**
   - **Commutative:** a⃗ + b⃗ = b⃗ + a⃗
   - **Associative:** (a⃗ + b⃗) + c⃗ = a⃗ + (b⃗ + c⃗)
   - **Additive Identity:** a⃗ + 0⃗ = a⃗; **Additive Inverse:** a⃗ + (−a⃗) = 0⃗.

---

## 2. Multiplication of a Vector by a Scalar (λ a⃗)

- Magnitude becomes **|λ| · |a⃗|**.
- If **λ > 0:** same direction as a⃗; if **λ < 0:** **opposite direction** to a⃗!
- **Making a vector of desired magnitude k in the direction of a⃗:**
  1. First find the unit vector: **â = a⃗ / |a⃗|**.
  2. Multiply by k: **k â = k (a⃗ / |a⃗|)**!

---

## Solved Examples

### Example 1: Classifying Quantities as Scalars or Vectors
Classify each as a scalar or a vector: (a) 10 kg, (b) 2 metres north-west, (c) 40°, (d) 40 watts, (e) 20 m/s² downwards.

**Solution:**
- **Scalars (magnitude only):** (a) 10 kg (mass), (c) 40° (angle), (d) 40 watts (power).
- **Vectors (magnitude + direction):** (b) 2 m north-west (displacement), (e) 20 m/s² downwards (acceleration).

Jaanch: Every vector specifies both size and direction ✅

---

### Example 2: Using the Closed-Triangle Vector Rule
In ΔABC, if **AB⃗ = a⃗** and **BC⃗ = b⃗**, express **CA⃗** and **AC⃗** in terms of a⃗ and b⃗.

**Solution:**
By Triangle Law: **AC⃗ = AB⃗ + BC⃗ = a⃗ + b⃗**.
Since CA⃗ is the exact negative of AC⃗: **CA⃗ = −(a⃗ + b⃗) = −a⃗ − b⃗**.
Check closed loop: AB⃗ + BC⃗ + CA⃗ = a⃗ + b⃗ + (−a⃗ − b⃗) = **0⃗**!

Jaanch: Sum around any closed polygon is always 0⃗ ✅

---

### Example 3: Collinearity & Equal Vectors Trap
Answer True or False with reasons:
(a) **a⃗** and **−a⃗** are collinear.
(b) Two collinear vectors are always equal in magnitude.
(c) Two vectors having the same magnitude are collinear.

**Solution:**
- (a) **True** ✅ — −a⃗ = (−1)a⃗ is parallel to the same line as a⃗!
- (b) **False** ❌ — e.g., a⃗ and 5a⃗ are collinear, yet |5a⃗| = 5|a⃗| ≠ |a⃗|.
- (c) **False** ❌ — e.g., 10 m North and 10 m East have the same magnitude (10 m) but are perpendicular (not collinear!).

---

## Aam Galtiyan (Common Mistakes)

1. **Collinear vectors ka matlab "ek hi line par hona aur same direction hona" samajh lena:**
   - *Galat:* Opposite direction wale vectors (a⃗ aur −2a⃗) collinear nahi hote.
   - *Sahi:* Collinear = **parallel to the same line** (same ya opposite direction dono allowed: **b⃗ = λa⃗** for any real λ ≠ 0)!

2. **a⃗ + (−a⃗) = 0 (scalar zero) likh dena:**
   - *Galat:* Do vectors ka sum scalar 0 likhna.
   - *Sahi:* Do vectors ka sum hamesha ek **vector** hota hai → **Zero Vector (0⃗)**!

---

## Quick Recap

- **Unit vector:** â = a⃗ / |a⃗| (magnitude = 1).
- **Collinear:** b⃗ = λ a⃗ (parallel, same or opposite sense).
- **Triangle Law:** AB⃗ + BC⃗ = AC⃗ (closed loop sum = 0⃗).
- **Vector of length k along a⃗:** k â = k(a⃗ / |a⃗|).

---

## Practice Questions

1. Represent graphically a displacement of 40 km, 30° east of north.
2. Classify as scalar or vector: (a) time period, (b) distance, (c) force, (d) velocity, (e) work done.
3. Define: (a) coinitial vectors, (b) collinear vectors, (c) equal vectors.
4. In a regular hexagon ABCDEF with AB⃗ = a⃗ and BC⃗ = b⃗, express **AC⃗, AD⃗, AE⃗, and AF⃗** in terms of a⃗ and b⃗.
5. State whether the following are True or False: (a) Two collinear vectors having the same magnitude are always equal. (b) Every unit vector has magnitude 1.
6. If a⃗ and b⃗ are two non-zero vectors with |a⃗| = 3 and |b⃗| = 4, what are the maximum and minimum possible values of |a⃗ + b⃗|?
7. In parallelogram ABCD, if AB⃗ = a⃗ and AD⃗ = b⃗, express the two diagonals **AC⃗** and **BD⃗** in terms of a⃗ and b⃗.
8. If **λ a⃗** is a unit vector where |a⃗| = 5 (λ > 0), find the value of **λ**.
9. Prove using vectors that the sum of the vectors represented by the sides of any closed quadrilateral ABCD taken in order is **0⃗**.
10. If a⃗ = 3b⃗, what is the ratio |a⃗| : |b⃗| and what is the angle between a⃗ and b⃗? What if a⃗ = −3b⃗?

---

### Answers

1. Draw North–South and East–West axes; draw a ray in the first quadrant at **30° clockwise from North** (i.e., 60° above East) of scaled length 40 km with arrowhead at tip.
2. Scalars: **(a) time period, (b) distance, (e) work done**. Vectors: **(c) force, (d) velocity**.
3. (a) Same initial point; (b) Parallel to the same line (b⃗ = λa⃗); (c) Same magnitude AND same direction.
4. In a regular hexagon, AD⃗ = 2 BC⃗ = **2b⃗**, and CD⃗ = b⃗ − a⃗:
   - **AC⃗ = a⃗ + b⃗**
   - **AD⃗ = 2b⃗**
   - **AE⃗ = AD⃗ + DE⃗ = 2b⃗ − a⃗** (since DE⃗ = −AB⃗ = −a⃗)
   - **AF⃗ = AE⃗ + EF⃗ = (2b⃗ − a⃗) − b⃗ = b⃗ − a⃗** (since EF⃗ = −BC⃗ = −b⃗).
   Jaanch: AF⃗ + FE⃗ + ED⃗ + DC⃗ + CB⃗ + BA⃗ = 0⃗ ✅
5. (a) **False** ❌ (could have opposite directions: a⃗ and −a⃗!). (b) **True** ✅.
6. Maximum (same direction, 0°): 3 + 4 = **7**; Minimum (opposite direction, 180°): |4 − 3| = **1**.
   Jaanch: Triangle inequality | |a⃗| − |b⃗| | ≤ |a⃗ + b⃗| ≤ |a⃗| + |b⃗| ✅
7. **AC⃗ = a⃗ + b⃗**; **BD⃗ = AD⃗ − AB⃗ = b⃗ − a⃗**.
8. |λ a⃗| = λ |a⃗| = 5λ = 1 ⇒ **λ = 1/5**.
   Jaanch: (1/5) × 5 = 1 ✅
9. AB⃗ + BC⃗ + CD⃗ + DA⃗ = AC⃗ + CD⃗ + DA⃗ = AD⃗ + DA⃗ = **0⃗**.
10. For a⃗ = 3b⃗: ratio = **3 : 1**, angle = **0°**. For a⃗ = −3b⃗: ratio = **3 : 1**, angle = **180° (π)**!

---

Ab tum vector basics, types aur triangle/parallelogram laws par poori clarity paa chuke ho!

**Agle topic mein:** Hum [Components, Position Vector, Direction Cosines and Section Formula](vector-algebra-part2.md) padhenge — jahan har 3D vector ko **xî + yĵ + zk̂** mein likh kar saare calculations pure algebra bana denge!
