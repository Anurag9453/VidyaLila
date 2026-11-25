# Chapter: Sequences and Series (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [sequences-and-series-part2.md](sequences-and-series-part2.md) tha** (Topic 2: GP Recap, Geometric Mean GM, aur Infinite GP Sum).
> **Topics covered in this file:**
> 1. Relation Between AM And GM (AM ≥ GM Inequality) Aur Iske Applications

---

# Topic 3: Relation Between AM And GM (AM ≥ GM Inequality) Aur Iske Applications

Pichhle do topics mein tumne dekha ki do numbers a aur b ke liye Arithmetic Mean A = (a + b)/2 hota hai aur Geometric Mean G = √(ab) hota hai.

Par kya tumne kabhi socha hai:
- In dono means mein se hamesha kaun bada hota hai?
- Kya koi aisi situation hai jab dono barabar ho jayein?
- Aur sabse exciting: is aam si inequality ka istemal karke calculus ke bina bina functions ki **minimum ya maximum value** kaise nikaali jaati hai?

Is topic mein hum mathematics ka ek sabse prabhavshali aur sundar hathiyar seekhenge: **AM ≥ GM Inequality**!

---

## Eshwar ka solar panel optimization

Eshwar ek solar farm ka planning engineer hai. Uske paas 40 meter perimeter ka ek rectangular plot hai jisme use high-efficiency solar panels lagane hain. Maximum power generate karne ke liye plot ka area (length × width) sabse zyada (maximum) hona chahiye.

Agar rectangle ki lambai x aur chaudai y ho:
Perimeter = 2(x + y) = 40 meter => x + y = 20 meter.
Dono sides ka Arithmetic Mean:
A = (x + y)/2 = 20/2 = 10.

Eshwar ne socha: "Area hota hai xy. Aur xy ka square root √(xy) to unka Geometric Mean G hai! Agar A ≥ G hota hai:
10 ≥ √(xy)
Dono taraf square karne par:
100 ≥ xy
xy ≤ 100!"

Eshwar ne turant dekha: "Plot ka maximum area 100 square meter ho sakta hai, aur yeh tabhi milega jab A = G ho, yaani length aur width dono barabar ho jayein: x = y = 10 meter (ek square)! Agar x = 12 aur y = 8 hote, to area sirf 96 hota. Equal hone par hi area maximize hota hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **AM-GM Inequality** | Kisi bhi positive real numbers ke liye Arithmetic Mean hamesha Geometric Mean se bada ya barabar hota hai | A ≥ G |
| **Arithmetic Mean (A)** | Do positive numbers ka average: (a + b)/2 | (8 + 2)/2 = 5 |
| **Geometric Mean (G)** | Do positive numbers ka geometric mean: √(ab) | √(8 × 2) = 4 |
| **Equality Condition** | A aur G sirf aur sirf tab barabar hote hain jab sabhi numbers ek-saman hon | a = b hone par A = G |
| **Optimization** | Diye gaye constraints ke tehat kisi expression ki minimum ya maximum value pata karna | x + 4/x ka minimum 4 hai |

---

## Part A: AM ≥ GM Inequality Ka Saaf Derivation

Maan lo a aur b do **positive real numbers** (a > 0, b > 0) hain.
Inka Arithmetic Mean:
A = (a + b)/2

Inka Geometric Mean:
G = √(ab)

Chalo in dono ke beech ka difference (A - G) dekhte hain:
A - G = (a + b)/2 - √(ab)
= [a + b - 2√(ab)] / 2

Dhyan se dekho numerator ko:
Kyunki a = (√a)² aur b = (√b)²:
a + b - 2√(ab) = (√a)² - 2√a√b + (√b)² = (√a - √b)²

Isliye:
A - G = (√a - √b)² / 2

### "Kyun" Bada Hai A?
Real numbers ki sabse buniyadi property hoti hai ki kisi bhi real number ka square hamesha **non-negative** (yaani zero ya positive) hota hai:
(√a - √b)² ≥ 0

Isliye:
(√a - √b)² / 2 ≥ 0
A - G ≥ 0
**A ≥ G**

### Equality Kab Hoti Hai?
A = G sirf tabhi hoga jab A - G = 0 ho:
(√a - √b)² = 0
√a - √b = 0
√a = √b
**a = b**

**Nateeja:**
1. Agar dono numbers alag-alag hain (a ≠ b), to hamesha **A > G** hoga.
2. Agar dono numbers barabar hain (a = b), to **A = G = a** hoga.

```
A - G = (√a - √b)² / 2  ≥  0
              :
         Hamesha ≥ 0
              :
           A ≥ G
    (Equality iff a = b)
```

---

## Part B: Quadratic Equations From Given AM And GM

Maan lo hume bataya gaya hai ki do numbers a aur b ke AM aur GM kramashah A aur G hain. Kya hum a aur b ko bina alag se jaane seedhi quadratic equation bana sakte hain? Bilkul!

Hum jante hain:
- A = (a + b)/2 => a + b = 2A  (Sum of roots)
- G = √(ab) => ab = G²         (Product of roots)

Class 10 ke polynomials aur quadratics ke mutabiq, jiske roots a aur b hon, wo quadratic equation hoti hai:
x² - (Sum of roots)x + (Product of roots) = 0
**x² - 2Ax + G² = 0**

### Roots Nikalne Ka Direct Formula:
Quadratic formula lagane par:
x = [2A ± √(4A² - 4G²)] / 2
x = [2A ± 2√(A² - G²)] / 2
**x = A ± √(A² - G²)**

Isliye dono numbers hain:
a = A + √(A² - G²)  aur  b = A - √(A² - G²)

> **Sundar Connection:** Roots ke real hone ke liye discriminant ≥ 0 hona chahiye:
> 4A² - 4G² ≥ 0 => A² ≥ G² => A ≥ G (kyunki A aur G positive hain).
> Quadratic equation ka real hona khud AM ≥ GM ko prove karta hai!

---

## Part C: Extension To n Positive Numbers

AM-GM inequality sirf 2 numbers tak seemit nahi hai! Kisi bhi n positive real numbers x₁, x₂, ..., xₙ ke liye:

**Arithmetic Mean:**
A = (x₁ + x₂ + ... + xₙ) / n

**Geometric Mean:**
G = (x₁ · x₂ · ... · xₙ)^(1 / n)

Hamesha:
**(x₁ + x₂ + ... + xₙ) / n ≥ (x₁ · x₂ · ... · xₙ)^(1 / n)**

Equality sirf tab aati hai jab:
x₁ = x₂ = x₃ = ... = xₙ.

---

## Part D: Optimization — Minimum Aur Maximum Values Nikalna

Jab kisi expression mein variables ka product constant ban raha ho, to AM ≥ GM lagakar hum seedhe minimum value pata kar sakte hain!

### Example Strategy:
Agar hume x + 9/x (for x > 0) ki minimum value chahiye:
Dono positive terms hain: a = x aur b = 9/x.
Inka AM: (x + 9/x)/2
Inka GM: √(x · 9/x) = √9 = 3.

AM ≥ GM se:
(x + 9/x)/2 ≥ 3
x + 9/x ≥ 6!
Minimum value 6 hai, aur yeh tab aayegi jab x = 9/x => x² = 9 => x = 3.

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 3.1: Finding Numbers Given AM and GM
**Sawaal:** Do positive numbers ke Arithmetic Mean aur Geometric Mean kramashah 10 aur 8 hain. Dono numbers gyat karo.

**Solution:**
Yahan A = 10 aur G = 8.
Check: A = 10 > G = 8 (valid!).

Sum of numbers: a + b = 2A = 2(10) = 20.
Product of numbers: ab = G² = 8² = 64.

Quadratic equation:
x² - 2Ax + G² = 0
x² - 20x + 64 = 0

Factorize karte hain:
(x - 16)(x - 4) = 0
x = 16 ya x = 4.

Dono numbers hain 16 aur 4.

Formula se check:
x = A ± √(A² - G²)
= 10 ± √(100 - 64)
= 10 ± √36
= 10 ± 6
x = 16 ya 4.

Jaanch:
- Jaanch: AM = (16 + 4)/2 = 20/2 = 10 ✅
- Jaanch: GM = √(16 × 4) = √64 = 8 ✅

---

### Example 3.2: Minimum Value of an Algebraic Expression
**Sawaal:** Agar x > 0 ho, to x + 4/x ki minimum value gyat karo aur batao yeh minimum value x ke kis maan par aati hai.

**Solution:**
Maan lo do positive numbers a = x aur b = 4/x hain.
AM = (x + 4/x)/2.
GM = √(x · (4/x)) = √4 = 2.

AM ≥ GM inequality lagane par:
AM ≥ GM
(x + 4/x)/2 ≥ 2
x + 4/x ≥ 4.

Equality tab aayegi jab dono terms barabar hon:
a = b
x = 4/x
x² = 4
Kyunki x > 0, x = 2.

Isliye minimum value 4 hai, jo x = 2 par aati hai.

Jaanch:
- Jaanch: At x = 2: 2 + 4/2 = 2 + 2 = 4 ✅
- Jaanch: At x = 1: 1 + 4/1 = 5 > 4 ✅
- Jaanch: At x = 4: 4 + 4/4 = 5 > 4 ✅

---

### Example 3.3: Minimum Value of an Exponential Expression
**Sawaal:** Expression 4ˣ + 4¹⁻ˣ ki minimum value gyat karo, jahan x ek real number hai.

**Solution:**
Dono terms hamesha positive hain: a = 4ˣ > 0 aur b = 4¹⁻ˣ > 0.
AM = (4ˣ + 4¹⁻ˣ)/2.
GM = √(4ˣ · 4¹⁻ˣ) = √(4^(x + 1 - x)) = √4¹ = √4 = 2.

AM ≥ GM se:
(4ˣ + 4¹⁻ˣ)/2 ≥ 2
4ˣ + 4¹⁻ˣ ≥ 4.

Equality condition:
4ˣ = 4¹⁻ˣ
x = 1 - x
2x = 1
x = 1/2.

x = 1/2 par minimum value 4 aati hai.

Jaanch:
- Jaanch: At x = 1/2: 4^(1/2) + 4^(1 - 1/2) = √4 + √4 = 2 + 2 = 4 ✅
- Jaanch: At x = 0: 4⁰ + 4¹ = 1 + 4 = 5 > 4 ✅
- Jaanch: At x = 1: 4¹ + 4⁰ = 4 + 1 = 5 > 4 ✅

---

### Example 3.4: Proving an Inequality for Three Numbers
**Sawaal:** Agar a, b, c teeno positive real numbers hon, to prove karo ki:
(a + b)(b + c)(c + a) ≥ 8abc.

**Solution:**
Har pair ke liye alag-alag AM ≥ GM lagate hain:
1. a aur b ke liye:
   (a + b)/2 ≥ √(ab) => (a + b) ≥ 2√(ab)   --- (1)
2. b aur c ke liye:
   (b + c)/2 ≥ √(bc) => (b + c) ≥ 2√(bc)   --- (2)
3. c aur a ke liye:
   (c + a)/2 ≥ √(ca) => (c + a) ≥ 2√(ca)   --- (3)

Kyunki sabhi terms positive hain, teeno inequalities ko aapas mein multiply karne par:
(a + b)(b + c)(c + a) ≥ [2√(ab)] · [2√(bc)] · [2√(ca)]
(a + b)(b + c)(c + a) ≥ 8 √(ab · bc · ca)
(a + b)(b + c)(c + a) ≥ 8 √(a² b² c²)
(a + b)(b + c)(c + a) ≥ 8abc.

Equality tab aayegi jab a = b = c ho.

Jaanch:
- Jaanch: Let a = 1, b = 1, c = 1: LHS = (2)(2)(2) = 8, RHS = 8(1) = 8 (equality) ✅
- Jaanch: Let a = 1, b = 2, c = 3: LHS = (3)(5)(4) = 60, RHS = 8(1)(2)(3) = 48. 60 > 48 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Negative numbers par AM ≥ GM laga dena
- **Galat soch:** "a = -2 aur b = -8 ke liye AM = (-2 - 8)/2 = -5 aur GM = √((-2)(-8)) = √16 = 4. Yahan to -5 < 4 aa gaya, AM < GM!"
- **Sahi samajh:** AM ≥ GM strictly sirf aur sirf **positive real numbers** (a > 0, b > 0) ke liye valid hai. Derivation mein humne (√a - √b)² likha tha, jo negative numbers ke liye real number hi nahi hota!

### Galti 2: Equality condition check kiye bina minimum value claim kar dena
- **Galat soch:** "Agar kisi expression par inequality lagakar ≥ K mil gaya, to K hamesha minimum value hogi."
- **Sahi samajh:** K sirf tabhi minimum value ban sakti hai jab wo value sach mein kisi real x par attain ho sake! Aur AM-GM mein value tabhi attain hoti hai jab dono terms barabar ho sakein (equality condition a = b satisfy ho).

### Galti 3: Quadratic equation banate waqt x² - Ax + G = 0 likhna
- **Galat soch:** "AM = A aur GM = G hai to equation x² - Ax + G = 0 hogi."
- **Sahi samajh:** Roots ka sum a + b = 2A hota hai (A nahi!), aur roots ka product ab = G² hota hai (G nahi!). Isliye sahi equation hamesha x² - 2Ax + G² = 0 hoti hai.

---

## Quick Recap

- **AM-GM Relation:** Kisi bhi positive numbers a, b > 0 ke liye hamesha **A ≥ G**.
- **Difference Formula:** A - G = (√a - √b)² / 2 ≥ 0.
- **Equality Condition:** A = G tabhi aur sirf tabhi hota hai jab a = b ho.
- **Quadratic Equation from AM and GM:** x² - 2Ax + G² = 0.
- **Roots:** x = A ± √(A² - G²).
- **Optimization Trick:** Agar do terms ka product constant ho, to unka sum minimize karne ke liye unhe barabar rakh do (AM = GM).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the arithmetic mean and geometric mean of 18 and 2, and verify that AM > GM.

**Solution:**
Here a = 18 and b = 2.
AM = A = (18 + 2)/2 = 20/2 = 10.
GM = G = √(18 × 2) = √36 = 6.

A = 10 and G = 6.
Clearly, 10 > 6, so AM > GM is verified.

Jaanch:
- Jaanch: A - G = 10 - 6 = 4 > 0 ✅

---

### Question 2
The AM of two positive numbers is 13 and their GM is 12. Find the numbers.

**Solution:**
Here A = 13 and G = 12.
Sum of roots: a + b = 2A = 26.
Product of roots: ab = G² = 12² = 144.

Quadratic equation:
x² - 26x + 144 = 0.
Factoring:
(x - 18)(x - 8) = 0.
Roots are 18 and 8.

Direct formula check:
x = A ± √(A² - G²) = 13 ± √(169 - 144) = 13 ± √25 = 13 ± 5.
x = 18 or 8.

The two numbers are 18 and 8.

Jaanch:
- Jaanch: AM = (18 + 8)/2 = 26/2 = 13 ✅
- Jaanch: GM = √(18 × 8) = √144 = 12 ✅

---

### Question 3
If x > 0, find the minimum value of 9x + 1/x.

**Solution:**
Let a = 9x and b = 1/x. Since x > 0, both a > 0 and b > 0.
By AM ≥ GM:
(9x + 1/x)/2 ≥ √(9x · 1/x)
(9x + 1/x)/2 ≥ √9
(9x + 1/x)/2 ≥ 3
9x + 1/x ≥ 6.

Equality occurs when 9x = 1/x => 9x² = 1 => x² = 1/9 => x = 1/3 (since x > 0).
The minimum value is 6.

Jaanch:
- Jaanch: At x = 1/3: 9(1/3) + 1/(1/3) = 3 + 3 = 6 ✅
- Jaanch: At x = 1: 9(1) + 1 = 10 > 6 ✅

---

### Question 4
Find the minimum value of 2ˣ + 2⁻ˣ for any real number x.

**Solution:**
Let a = 2ˣ and b = 2⁻ˣ. For any real x, 2ˣ > 0 and 2⁻ˣ > 0.
By AM ≥ GM:
(2ˣ + 2⁻ˣ)/2 ≥ √(2ˣ · 2⁻ˣ)
(2ˣ + 2⁻ˣ)/2 ≥ √1 = 1
2ˣ + 2⁻ˣ ≥ 2.

Equality occurs when 2ˣ = 2⁻ˣ => 2²ˣ = 1 => 2x = 0 => x = 0.
The minimum value is 2.

Jaanch:
- Jaanch: At x = 0: 2⁰ + 2⁰ = 1 + 1 = 2 ✅
- Jaanch: At x = 1: 2¹ + 2⁻¹ = 2 + 0.5 = 2.5 > 2 ✅

---

### Question 5
If a, b > 0 and a + b = 16, find the maximum value of the product ab.

**Solution:**
By AM ≥ GM:
(a + b)/2 ≥ √(ab)
16/2 ≥ √(ab)
8 ≥ √(ab)
Squaring both sides:
64 ≥ ab => ab ≤ 64.

Maximum value of ab is 64, attained when a = b = 8.

Jaanch:
- Jaanch: a = 8, b = 8: a + b = 16 and ab = 64 ✅
- Jaanch: a = 10, b = 6: ab = 60 < 64 ✅

---

### Question 6
Form a quadratic equation whose roots have an arithmetic mean of 17 and a geometric mean of 8.

**Solution:**
Here A = 17 and G = 8.
Sum of roots = 2A = 2(17) = 34.
Product of roots = G² = 8² = 64.

Quadratic equation is:
x² - (Sum)x + Product = 0
x² - 34x + 64 = 0.

Roots are:
x = 17 ± √(17² - 8²) = 17 ± √(289 - 64) = 17 ± √225 = 17 ± 15.
Roots are 32 and 2.

Jaanch:
- Jaanch: AM = (32 + 2)/2 = 17 ✅
- Jaanch: GM = √(32 × 2) = √64 = 8 ✅

---

### Question 7
If a, b, c are distinct positive real numbers, prove that (a + b + c)(1/a + 1/b + 1/c) > 9.

**Solution:**
Using AM ≥ GM on the three numbers a, b, c:
(a + b + c)/3 > (abc)^(1/3)   --- (1)  (strictly > because numbers are distinct)

Using AM ≥ GM on 1/a, 1/b, 1/c:
(1/a + 1/b + 1/c)/3 > (1/abc)^(1/3)   --- (2)

Multiplying (1) and (2):
[(a + b + c)/3] · [(1/a + 1/b + 1/c)/3] > (abc)^(1/3) · (1/abc)^(1/3)
(a + b + c)(1/a + 1/b + 1/c) / 9 > 1
(a + b + c)(1/a + 1/b + 1/c) > 9.

Jaanch:
- Jaanch: Let a = 1, b = 2, c = 4: (1 + 2 + 4)(1 + 1/2 + 1/4) = 7 × (7/4) = 49/4 = 12.25 > 9 ✅

---

### Question 8
If the AM between two positive numbers a and b is twice their GM, find the ratio a : b (with a > b).

**Solution:**
Given: A = 2G.
(a + b)/2 = 2√(ab)
a + b = 4√(ab).

Divide both sides by b:
(a/b) + 1 = 4√(a/b).

Let t = √(a/b) (where t > 1 since a > b):
t² + 1 = 4t
t² - 4t + 1 = 0.

By quadratic formula:
t = [4 ± √(16 - 4)] / 2 = [4 ± √12] / 2 = 2 ± √3.
Since t > 1, t = 2 + √3.

Now a/b = t²:
a/b = (2 + √3)² = 4 + 4√3 + 3 = 7 + 4√3.

So the ratio a : b is (7 + 4√3) : 1 (or (2 + √3)² : 1).

Jaanch:
- If a = 7 + 4√3 and b = 1:
- a + b = 8 + 4√3 => A = 4 + 2√3.
- ab = 7 + 4√3 = (2 + √3)² => G = 2 + √3.
- Jaanch: A / G = (4 + 2√3) / (2 + √3) = 2(2 + √3) / (2 + √3) = 2 ✅

---

### Question 9
Find the minimum value of (x + y)(1/x + 1/y) for any positive real numbers x and y.

**Solution:**
Expand the product:
(x + y)(1/x + 1/y) = x(1/x) + x/y + y/x + y(1/y)
= 1 + x/y + y/x + 1
= 2 + (x/y + y/x).

Since x, y > 0, x/y and y/x are positive.
By AM ≥ GM:
(x/y + y/x)/2 ≥ √((x/y) · (y/x)) = √1 = 1
x/y + y/x ≥ 2.

Therefore:
(x + y)(1/x + 1/y) = 2 + (x/y + y/x) ≥ 2 + 2 = 4.
The minimum value is 4, attained when x = y.

Jaanch:
- Jaanch: For x = 3, y = 3: (6)(1/3 + 1/3) = 6 × (2/3) = 4 ✅
- Jaanch: For x = 1, y = 2: (3)(1 + 1/2) = 3 × 1.5 = 4.5 > 4 ✅

---

### Question 10
The sum of two positive numbers is 20. Can their geometric mean be 12? Explain why or why not.

**Solution:**
Let the numbers be a and b.
Sum = 20 => AM = (a + b)/2 = 20/2 = 10.
Given GM = 12.

By the fundamental AM-GM inequality, for any positive real numbers:
AM ≥ GM.
Here AM = 10 and GM = 12, which gives:
10 ≥ 12, which is FALSE!

Therefore, the geometric mean of two numbers whose sum is 20 cannot be 12.

Jaanch:
- If GM = 12, then ab = 144. Quadratic equation is x² - 20x + 144 = 0.
- Jaanch: Discriminant D = (-20)² - 4(1)(144) = 400 - 576 = -176 < 0 (no real roots!) ✅

---

### Question 11
Find the minimum value of 25ˣ + 25¹⁻ˣ for x in R.

**Solution:**
Both terms 25ˣ and 25¹⁻ˣ are positive for all real x.
By AM ≥ GM:
(25ˣ + 25¹⁻ˣ)/2 ≥ √(25ˣ · 25¹⁻ˣ) = √(25¹) = √25 = 5.
25ˣ + 25¹⁻ˣ ≥ 10.

Equality holds when 25ˣ = 25¹⁻ˣ => x = 1 - x => 2x = 1 => x = 1/2.
The minimum value is 10.

Jaanch:
- Jaanch: At x = 1/2: 25^(1/2) + 25^(1/2) = 5 + 5 = 10 ✅
- Jaanch: At x = 0: 25⁰ + 25¹ = 1 + 25 = 26 > 10 ✅

---

### Question 12
If a, b, c are positive real numbers, prove that a/b + b/c + c/a ≥ 3.

**Solution:**
Consider the three positive numbers: x₁ = a/b, x₂ = b/c, x₃ = c/a.
By AM ≥ GM for 3 numbers:
(x₁ + x₂ + x₃)/3 ≥ (x₁ · x₂ · x₃)^(1/3)
(a/b + b/c + c/a)/3 ≥ ((a/b) · (b/c) · (c/a))^(1/3)

Notice that the product inside the cube root simplifies:
(a/b) · (b/c) · (c/a) = (abc) / (bca) = 1.
So:
(a/b + b/c + c/a)/3 ≥ (1)^(1/3) = 1
a/b + b/c + c/a ≥ 3.

Equality holds when a/b = b/c = c/a, which implies a = b = c.

Jaanch:
- Jaanch: Let a = 2, b = 2, c = 2: 1 + 1 + 1 = 3 ✅
- Jaanch: Let a = 1, b = 2, c = 4: 1/2 + 2/4 + 4/1 = 0.5 + 0.5 + 4 = 5 > 3 ✅

---

Ab tumne dekh liya ki AM ≥ GM inequality kitni shaktishali hai aur iska use equations banane aur minimum values nikalne mein kaise hota hai. Agle topic [sequences-and-series-part4.md](sequences-and-series-part4.md) mein hum dekhenge **Special Series** — natural numbers, unke squares aur cubes ke sums ke solid formulas aur unka telescoping derivation!
