> **Class:** 12 | **Subject:** Mathematics | **Chapter 10:** Vector Algebra (Part 4)

# Vector (Cross) Product, Area of a Triangle and Parallelogram

> **Pichle topic mein:** Humne [Scalar (Dot) Product](vector-algebra-part3.md) padha jahan do vectors ka product ek **number** deta tha. Ab hum doosra multiplication — **Vector (Cross) Product (a⃗ × b⃗)** — padhenge, jahan do vectors ka product ek **naya 3D vector** deta hai jo dono ke **perpendicular** hota hai, aur jiska magnitude **Parallelogram ka exact Area** hota hai!

---

Pallab apne cycle ka bolt wrench se tight kar raha tha: wrench ki length vector **r⃗** hai aur usne force **F⃗** lagaya. Bolt par lagne wala turning effect (torque **τ⃗ = r⃗ × F⃗**) seedha bolt ke andar ki taraf (dono r⃗ aur F⃗ ke **90° perpendicular**) lagta hai! Yahi hai **Cross Product** ka right-hand screw rule!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Vector (Cross) Product (a⃗ × b⃗)** | **a⃗ × b⃗ = (len a⃗)(len b⃗) sin θ n̂** — jahan n̂ dono a⃗ aur b⃗ ke perpendicular unit vector hai (right-hand rule!) |
| **Anti-Commutative** | Order badalne par sign palat jata hai: **b⃗ × a⃗ = −(a⃗ × b⃗)**! |
| **Parallelism Test** | Do non-zero vectors parallel/collinear hain **⇔ a⃗ × b⃗ = 0⃗**! |

---

## 1. Cross Product Determinant & Cyclic Unit Vectors

### Cyclic Rule (î → ĵ → k̂ → î):
- **î × î = ĵ × ĵ = k̂ × k̂ = 0⃗**
- **î × ĵ = k̂,   ĵ × k̂ = î,   k̂ × î = ĵ** (clockwise = +)
- **ĵ × î = −k̂,   k̂ × ĵ = −î,   î × k̂ = −ĵ** (anticlockwise = −)

### 3 × 3 Determinant Formula:
For **a⃗ = a₁î + a₂ĵ + a₃k̂** and **b⃗ = b₁î + b₂ĵ + b₃k̂**:
**a⃗ × b⃗ = det([ î  ĵ  k̂ ; a₁  a₂  a₃ ; b₁  b₂  b₃ ])**
= **(a₂b₃ − a₃b₂)î − (a₁b₃ − a₃b₁)ĵ + (a₁b₂ − a₂b₁)k̂**

---

## 2. Three Golden Geometric Applications of Cross Product

1. **Unit Vector Perpendicular to BOTH a⃗ and b⃗:**
   **n̂ = ± (a⃗ × b⃗) / |a⃗ × b⃗|**
2. **Area of a Triangle:**
   - With adjacent sides a⃗ and b⃗: **Area = (1/2) |a⃗ × b⃗|**
   - With vertices A, B, C: **Area = (1/2) |AB⃗ × AC⃗|**
3. **Area of a Parallelogram:**
   - With **adjacent sides** a⃗ and b⃗: **Area = |a⃗ × b⃗|**
   - With **diagonals** d₁⃗ and d₂⃗ (EXAM TRAP!): **Area = (1/2) |d₁⃗ × d₂⃗|**!

---

## Solved Examples

### Example 1: Finding a Unit Vector Perpendicular to Both (a⃗ + b⃗) and (a⃗ − b⃗)
Let **a⃗ = î + ĵ + k̂** and **b⃗ = î + 2ĵ + 3k̂**. Find a unit vector perpendicular to BOTH **(a⃗ + b⃗)** and **(a⃗ − b⃗)**.

**Solution:**
- p⃗ = a⃗ + b⃗ = **2î + 3ĵ + 4k̂**
- q⃗ = a⃗ − b⃗ = **0î − ĵ − 2k̂**
Compute **p⃗ × q⃗ = det([ î  ĵ  k̂ ; 2  3  4 ; 0  −1  −2 ])**:
= î(−6 + 4) − ĵ(−4 − 0) + k̂(−2 − 0) = **−2î + 4ĵ − 2k̂**.
Magnitude: |p⃗ × q⃗| = √(4 + 16 + 4) = √24 = **2√6**.
Unit vector = ± (−2î + 4ĵ − 2k̂) / (2√6) = **± [ (−1/√6)î + (2/√6)ĵ − (1/√6)k̂ ]**!

Jaanch: Check perpendicularity: (−1)(2) + (2)(3) + (−1)(4) = −2 + 6 − 4 = 0; (−1)(0) + (2)(−1) + (−1)(−2) = 0 ✅

---

### Example 2: Area of a Triangle Given Its 3D Vertices
Find the area of the triangle with vertices **A(1, 1, 2), B(2, 3, 5), and C(1, 5, 5)**.

**Solution:**
- **AB⃗** = (2−1)î + (3−1)ĵ + (5−2)k̂ = **î + 2ĵ + 3k̂**
- **AC⃗** = (1−1)î + (5−1)ĵ + (5−2)k̂ = **0î + 4ĵ + 3k̂**
Cross product **AB⃗ × AC⃗ = det([ î  ĵ  k̂ ; 1  2  3 ; 0  4  3 ])**:
= î(6 − 12) − ĵ(3 − 0) + k̂(4 − 0) = **−6î − 3ĵ + 4k̂**.
Magnitude: |AB⃗ × AC⃗| = √(36 + 9 + 16) = **√61**.
Area of ΔABC = (1/2) |AB⃗ × AC⃗| = **√61 / 2 sq units**!

Jaanch: Check dot with AB⃗: (−6)(1) + (−3)(2) + 4(3) = −6 − 6 + 12 = 0 ✅

---

### Example 3: Area of a Parallelogram Given Its Diagonals
Find the area of a parallelogram whose diagonals are **d₁⃗ = 3î + ĵ − 2k̂** and **d₂⃗ = î − 3ĵ + 4k̂**.

**Solution:**
d₁⃗ × d₂⃗ = det([ î  ĵ  k̂ ; 3  1  −2 ; 1  −3  4 ])
= î(4 − 6) − ĵ(12 + 2) + k̂(−9 − 1) = **−2î − 14ĵ − 10k̂**.
|d₁⃗ × d₂⃗| = √(4 + 196 + 100) = √300 = **10√3**.
Since **diagonals** are given, use the **(1/2)** factor:
Area = (1/2) |d₁⃗ × d₂⃗| = (1/2)(10√3) = **5√3 sq units**!

Jaanch: 4 + 196 + 100 = 300 = 100 × 3 ⇒ √300 = 10√3; half = 5√3 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Parallelogram ke diagonals diye hone par (1/2) lagana bhool jana:**
   - *Galat:* Diagonals d₁⃗, d₂⃗ ka area = |d₁⃗ × d₂⃗|.
   - *Sahi:* **Adjacent sides** ⇒ **|a⃗ × b⃗|**; **Diagonals** ⇒ **(1/2) |d₁⃗ × d₂⃗|**!

2. **a⃗ × b⃗ = b⃗ × a⃗ likh dena:**
   - *Galat:* Cross product commutative hai.
   - *Sahi:* Cross product **anti-commutative** hai: **b⃗ × a⃗ = −(a⃗ × b⃗)**!

---

## Quick Recap

- **Cross product:** a⃗ × b⃗ = det([ î ĵ k̂ ; a₁ a₂ a₃ ; b₁ b₂ b₃ ]); b⃗ × a⃗ = −(a⃗ × b⃗); parallel ⇔ a⃗ × b⃗ = 0⃗.
- **Unit ⊥ vector:** ±(a⃗ × b⃗)/|a⃗ × b⃗|.
- **Areas:** Triangle = (1/2)|a⃗ × b⃗|; Parallelogram (sides) = |a⃗ × b⃗|; Parallelogram (diagonals) = (1/2)|d₁⃗ × d₂⃗|.

---

## Practice Questions

1. Find **|a⃗ × b⃗|** if **a⃗ = î − 7ĵ + 7k̂** and **b⃗ = 3î − 2ĵ + 2k̂**.
2. Find λ and μ if **(2î + 6ĵ + 27k̂) × (î + λĵ + μk̂) = 0⃗**.
3. Show that **(a⃗ − b⃗) × (a⃗ + b⃗) = 2(a⃗ × b⃗)**.
4. Find the area of a parallelogram whose adjacent sides are **a⃗ = î − ĵ + 3k̂** and **b⃗ = 2î − 7ĵ + k̂**.
5. Find the area of the triangle with vertices **A(1, 1, 1), B(1, 2, 3), and C(2, 3, 1)**.
6. Find a vector of magnitude **9** which is perpendicular to both **a⃗ = 4î − ĵ + 3k̂** and **b⃗ = −2î + ĵ − 2k̂**.
7. Let |a⃗| = 3 and |b⃗| = √2/3. If **a⃗ × b⃗** is a unit vector, find the angle between a⃗ and b⃗.
8. Find the value of **î · (ĵ × k̂) + ĵ · (î × k̂) + k̂ · (î × ĵ)**.
9. If **a⃗ × b⃗ = 0⃗** and **a⃗ · b⃗ = 0**, what can you conclude about the vectors a⃗ and b⃗?
10. Find the sine of the angle between **a⃗ = 3î + ĵ + 2k̂** and **b⃗ = 2î − 2ĵ + 4k̂**.

---

### Answers

1. a⃗ × b⃗ = î(−14 + 14) − ĵ(2 − 21) + k̂(−2 + 21) = 0î + 19ĵ + 19k̂ ⇒ |a⃗ × b⃗| = **19√2**.
   Jaanch: √(19² + 19²) = 19√2 ✅
2. Parallel vectors ⇒ ratios equal: 2/1 = 6/λ = 27/μ ⇒ **λ = 3, μ = 27/2**.
   Jaanch: 2(3) = 6; 2(27/2) = 27 ✅
3. (a⃗ − b⃗) × (a⃗ + b⃗) = a⃗×a⃗ + a⃗×b⃗ − b⃗×a⃗ − b⃗×b⃗ = 0⃗ + a⃗×b⃗ − (−a⃗×b⃗) − 0⃗ = **2(a⃗ × b⃗)**!
4. a⃗ × b⃗ = î(−1 + 21) − ĵ(1 − 6) + k̂(−7 + 2) = 20î + 5ĵ − 5k̂ ⇒ Area = √(400 + 25 + 25) = √450 = **15√2 sq units**.
   Jaanch: 450 = 225 × 2 ⇒ 15√2 ✅
5. AB⃗ = ĵ + 2k̂, AC⃗ = î + 2ĵ ⇒ AB⃗ × AC⃗ = −4î + 2ĵ − k̂ ⇒ |AB⃗ × AC⃗| = √21 ⇒ Area = **√21 / 2 sq units**.
6. a⃗ × b⃗ = î(2 − 3) − ĵ(−8 + 6) + k̂(4 − 2) = −î + 2ĵ + 2k̂; |a⃗ × b⃗| = √(1 + 4 + 4) = 3.
   Required vector = ±9 × (−î + 2ĵ + 2k̂)/3 = **±(−3î + 6ĵ + 6k̂)**.
   Jaanch: √(9 + 36 + 36) = √81 = 9 ✅
7. |a⃗ × b⃗| = 3 × (√2/3) sin θ = √2 sin θ = 1 ⇒ sin θ = 1/√2 ⇒ **θ = π/4 (45°)** (or 3π/4).
8. î·î + ĵ·(−ĵ) + k̂·k̂ = 1 − 1 + 1 = **1**!
   Jaanch: Note î × k̂ = −ĵ (anticlockwise!) ⇒ 1 − 1 + 1 = 1 ✅
9. Since a⃗ and b⃗ cannot be simultaneously parallel AND perpendicular, **either a⃗ = 0⃗ or b⃗ = 0⃗** (or both)!
10. a⃗ × b⃗ = 8î − 8ĵ − 8k̂ ⇒ |a⃗ × b⃗| = 8√3; |a⃗| = √14, |b⃗| = √24 = 2√6.
    sin θ = 8√3 / (√14 × 2√6) = 4 / (√14 × √2) = 4 / √28 = **2 / √7**!
    Jaanch: cos θ = (6 − 2 + 8)/(2√84) = 12/(4√21) = 3/√21 = √(3/7); sin²θ + cos²θ = 4/7 + 3/7 = 1 ✅

---

Ab tum cross product, perpendicular unit vectors aur 3D areas ke har sawal ko confidently solve kar sakte ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Vector Problems & Chapter Wrap-up](vector-algebra-part5.md) mein hum poore Vector Algebra chapter ke mixed exam problems aur final summary table complete karenge!
