# Chapter: Expansions (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [expansions-part2.md](expansions-part2.md) se aage chalti hai.** (Topic 1 [expansions.md](expansions.md) mein hai.)
> **Topics covered in this file:**
> 3. Teen Terms ka Square: (a + b + c)²

---

# Topic 3: Teen Terms ka Square: (a + b + c)²

Topic 2 mein humne dekha tha ki (a + b)² wali identity ko ulta-seedha karke kitne kaam ke results nikalte hain: a² + b² = (a + b)² − 2ab, 4ab wale results, aur jab sirf a + b ya ab diya ho tab doosri value nikalna (jaise Mishti ne nani ki paheli mein jod 10 aur guna 21 se a² + b² = 58 nikala tha). Wahan ek baat pakki ho gayi thi: **do terms ka square = dono ke squares + do guna unka product.**

Ab sawaal ye hai: agar bracket ke andar **teen** terms hon, jaise (a + b + c)², tab kya hoga? Kya bas teeno ke squares jod dein? Nahi. Aaj dekhenge kyun nahi, aur sahi answer kya hai.

---

## Pooja ki rangoli ki kahani

Diwali se pehle Pooja ko aangan mein ek **square rangoli** banani thi. Usne side ko teen hisson mein baanta:

- pehla hissa **4 dm** (laal rang),
- doosra **2 dm** (peela rang),
- teesra **1 dm** (hara rang).

To poori side = 4 + 2 + 1 = **7 dm**, aur poori rangoli ka area = 7 × 7 = **49 dm²**.

Ab jab usne side ke teeno hisson se lines kheenchi, to rangoli **9 tukdon** mein bant gayi:

```
          4         2        1
      +---------+-------+-----+
    4 |  4 × 4  | 4 × 2 |4 × 1|
      |   = 16  |  = 8  | = 4 |
      +---------+-------+-----+
    2 |  2 × 4  | 2 × 2 |2 × 1|
      |   = 8   |  = 4  | = 2 |
      +---------+-------+-----+
    1 |  1 × 4  | 1 × 2 |1 × 1|
      |   = 4   |  = 2  | = 1 |
      +---------+-------+-----+
```

Pooja ne har rang ka hisaab lagaya:
- Teen **chhote squares** (kone se kone tak, tirchhi line par): 16 + 4 + 1 = **21**
- Baaki **6 rectangles**, jo jodon mein aate hain: (8 + 8) + (2 + 2) + (4 + 4) = **28**

Kul: 21 + 28 = **49** ✅

Agar Pooja sirf 16 + 4 + 1 = 21 ginti, to 28 dm² rangoli gayab ho jaati! Yahi is topic ka asli sabak hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Trinomial** | Teen terms wala expression | a + b + c, 2x − y + 3 |
| **Square terms** | Har term ka apna square | a², b², c² |
| **Pair terms (cross terms)** | Do alag terms ka product, do guna | 2ab, 2bc, 2ca |
| **Expansion** | Bracket kholkar poora likhna | (a + b + c)² ko 6 terms mein likhna |

---

## Part A: Formula aur uska "kyun"

> **(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca**

### Tarika 1: Do terms ko ek block maan lo

Topic 1 mein humne (A + B)² = A² + 2AB + B² seekha tha. Ab (a + b) ko ek hi block **A** maan lo, aur c ko **B**.

| Step | Kya kiya |
|---|---|
| (a + b + c)² = (A + c)², jahan A = a + b | Block bana liya |
| = A² + 2Ac + c² | Topic 1 wali identity |
| = (a + b)² + 2(a + b)c + c² | A wapas rakha |
| = a² + 2ab + b² + 2ac + 2bc + c² | Dono hisse khole |
| = a² + b² + c² + 2ab + 2bc + 2ca | Saja ke likha (ac = ca) |

### Tarika 2: Rangoli wali tasveer

Pooja ki rangoli ki side a, b, c mein bati thi. Grid ko letters mein dekho:

```
          a         b         c
      +---------+---------+---------+
    a |   a²    |   ab    |   ac    |
      +---------+---------+---------+
    b |   ba    |   b²    |   bc    |
      +---------+---------+---------+
    c |   ca    |   cb    |   c²    |
      +---------+---------+---------+
```

- Tirchhi line par: **a², b², c²** (har ek ek baar)
- Baaki 6 khaane jodon mein: ab do baar, bc do baar, ca do baar

Isliye: a² + b² + c² + **2ab + 2bc + 2ca**.

### Yaad rakhne ka pattern

> **Har term ka square + har jode ka do guna.**

Teen terms se kitne jode bante hain? (a, b), (b, c), (c, a), yaani **3 jode**. Isliye expansion mein **3 squares + 3 pair terms = 6 terms** hote hain.

**Jaanch (numbers se):** a = 4, b = 2, c = 1
- LHS: (4 + 2 + 1)² = 49
- RHS: 16 + 4 + 1 + 2(8) + 2(2) + 2(4) = 21 + 16 + 4 + 8 = 49 ✅

---

## Part B: Minus sign wale terms

Jab koi term minus ho, tab **squares hamesha plus** rehte hain (kyunki (−b)² = b²). Sirf **pair terms** ka sign badalta hai.

> **Rule:** Har pair term ka sign = us jode ke **dono signs ka product**.
> plus × plus = plus, minus × minus = plus, plus × minus = minus.

### (a − b + c)²

Ise (a + (−b) + c)² samjho.

- Squares: a², b², c²
- 2 × a × (−b) = **−2ab**
- 2 × (−b) × c = **−2bc**
- 2 × c × a = **+2ca**

> (a − b + c)² = a² + b² + c² − 2ab − 2bc + 2ca

### (a − b − c)²

- 2 × a × (−b) = **−2ab**
- 2 × (−b) × (−c) = **+2bc** (minus × minus = plus)
- 2 × (−c) × a = **−2ca**

> (a − b − c)² = a² + b² + c² − 2ab + 2bc − 2ca

**Jaanch:** a = 5, b = 2, c = 1
- (5 − 2 − 1)² = 2² = 4
- 25 + 4 + 1 − 20 + 4 − 10 = 4 ✅

### Sign table ek nazar mein

| Expression | 2ab | 2bc | 2ca |
|---|---|---|---|
| (a + b + c)² | + | + | + |
| (a − b + c)² | − | − | + |
| (a + b − c)² | + | − | − |
| (a − b − c)² | − | + | − |
| (−a + b + c)² | − | + | − |

---

## Part C: Solved expansions

### Example 1: (2x + 3y + 4z)²

Yahan a = 2x, b = 3y, c = 4z.

- Squares: (2x)² = 4x², (3y)² = 9y², (4z)² = 16z²
- 2(2x)(3y) = 12xy
- 2(3y)(4z) = 24yz
- 2(4z)(2x) = 16zx

> **= 4x² + 9y² + 16z² + 12xy + 24yz + 16zx**

**Jaanch:** x = y = z = 1. LHS = (2 + 3 + 4)² = 81. RHS = 4 + 9 + 16 + 12 + 24 + 16 = 81 ✅

### Example 2: (x − 2y + 3z)²

a = x, b = −2y, c = 3z.

- Squares: x², 4y², 9z²
- 2(x)(−2y) = −4xy
- 2(−2y)(3z) = −12yz
- 2(3z)(x) = 6zx

> **= x² + 4y² + 9z² − 4xy − 12yz + 6zx**

**Jaanch:** x = y = z = 1. LHS = (1 − 2 + 3)² = 4. RHS = 1 + 4 + 9 − 4 − 12 + 6 = 4 ✅

### Example 3: (a/2 − b/3 + 1)²

- Squares: a²/4, b²/9, 1
- 2(a/2)(−b/3) = −ab/3
- 2(−b/3)(1) = −2b/3
- 2(1)(a/2) = a

> **= a²/4 + b²/9 + 1 − ab/3 − 2b/3 + a**

**Jaanch:** a = 2, b = 3. LHS = (1 − 1 + 1)² = 1. RHS = 1 + 1 + 1 − 2 − 2 + 2 = 1 ✅

### Example 4: (x + 1/x + 1)²

- Squares: x², 1/x², 1
- 2(x)(1/x) = 2
- 2(1/x)(1) = 2/x
- 2(1)(x) = 2x

1 aur 2 ko jod do:

> **= x² + 1/x² + 2x + 2/x + 3**

**Jaanch:** x = 1. LHS = (1 + 1 + 1)² = 9. RHS = 1 + 1 + 2 + 2 + 3 = 9 ✅

### Example 5: Mental maths: 111²

111 = 100 + 10 + 1.

- Squares: 10000 + 100 + 1 = 10101
- Pair terms: 2(100)(10) + 2(10)(1) + 2(1)(100) = 2000 + 20 + 200 = 2220

> 111² = 10101 + 2220 = **12321**

---

## Part D: Value nikalne wale sawaal

Formula ko aise padho:

> (a + b + c)² = (a² + b² + c²) + 2(ab + bc + ca)

Isme teen "dabbe" hain: **sum**, **squares ka sum**, aur **pairs ka sum**. Koi do pata hon to teesra nikal sakte ho. Ye bilkul Topic 2 jaisa khel hai, bas ek term zyada.

### Example 6: a² + b² + c² nikalo

Diya hai: a + b + c = 9, ab + bc + ca = 26.

- 9² = (a² + b² + c²) + 2(26)
- 81 = (a² + b² + c²) + 52
- **a² + b² + c² = 29**

**Jaanch:** a, b, c = 2, 3, 4 lo. Sum = 9, pairs = 6 + 12 + 8 = 26, squares = 4 + 9 + 16 = 29 ✅

### Example 7: a + b + c nikalo

Diya hai: a² + b² + c² = 50, ab + bc + ca = 47.

- (a + b + c)² = 50 + 2(47) = 144
- **a + b + c = ±12**

Dhyan do: square root lene par **plus aur minus dono** aate hain (Topic 2 mein bhi yahi dekha tha).

**Jaanch:** 3, 4, 5 lo. Squares = 9 + 16 + 25 = 50, pairs = 12 + 20 + 15 = 47, sum = 12 ✅. Aur −3, −4, −5 se sum −12 aata hai, squares aur pairs wahi rehte hain.

### Example 8: ab + bc + ca nikalo

Diya hai: a + b + c = 12, a² + b² + c² = 64.

- 144 = 64 + 2(ab + bc + ca)
- 2(ab + bc + ca) = 80
- **ab + bc + ca = 40**

### Example 9: Jab a + b + c = 0

Tab 0 = (a² + b² + c²) + 2(ab + bc + ca), yaani

> **a² + b² + c² = −2(ab + bc + ca)**

**Jaanch:** 1, 2, −3 lo. Squares = 1 + 4 + 9 = 14. Pairs = 2 − 6 − 3 = −7. −2 × (−7) = 14 ✅

---

## Part E: Simplification

### Example 10: (a + b + c)² − (a − b − c)²

Part B ki table se:
- (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca
- (a − b − c)² = a² + b² + c² − 2ab + 2bc − 2ca

Ghatao: squares kat jaate hain, 2bc bhi kat jata hai.

> = 2ab − (−2ab) + 2ca − (−2ca) = **4ab + 4ca**

**Jaanch:** a = 3, b = 2, c = 1. LHS = 36 − 0 = 36. RHS = 24 + 12 = 36 ✅

### Example 11: (x + y + z)² + (x − y + z)²

- Pehla: x² + y² + z² + 2xy + 2yz + 2zx
- Doosra: x² + y² + z² − 2xy − 2yz + 2zx

Jodo: 2xy aur 2yz kat jaate hain.

> = **2x² + 2y² + 2z² + 4zx**

**Jaanch:** x = y = z = 1. LHS = 9 + 1 = 10. RHS = 2 + 2 + 2 + 4 = 10 ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: Sirf squares jod dena**
(a + b + c)² ≠ a² + b² + c². Pooja ki rangoli mein ye galti karte to 28 dm² gayab ho jaata. Pair terms zaroori hain.

**Galti 2: 2 bhool jaana**
(a + b + c)² = a² + b² + c² + **2**ab + **2**bc + **2**ca. Grid mein har pair **do baar** aata hai.

**Galti 3: Ek pair term chhoot jaana**
Teen jode hote hain: ab, bc, ca. Sabse zyada ca chhootta hai. Expansion ke baad gin lo: **6 terms** hone chahiye.

**Galti 4: Pair term ka sign galat**
(a − b − c)² mein 2bc **plus** hai, kyunki (−b)(−c) = +bc. Rule: dono signs ka product.

**Galti 5: Coefficient ka square bhool jaana**
(2x + 3y + 4z)² mein pehla term 4x² hai, 2x² nahi. Poore term ka square karo: (2x)² = 4x².

**Galti 6: Square root mein ± bhool jaana**
(a + b + c)² = 144 ho to a + b + c = **±12**, sirf 12 nahi.

---

## Quick Recap

- **(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca**
- Pattern: **har term ka square + har jode ka do guna**. Kul 6 terms.
- Formula do tarah se samjha: (a + b) ko ek block maankar, aur 3 × 3 grid (rangoli) se.
- **Squares hamesha plus.** Pair term ka sign = dono signs ka product.
- Teen dabbe: sum, squares ka sum, pairs ka sum. Koi do pata hon to teesra nikalo.
- Root lene par **±** mat bhoolo.
- a + b + c = 0 ho to a² + b² + c² = −2(ab + bc + ca).
- Har expansion ke baad x = y = z = 1 jaisi values rakhkar **jaanch** karo.

---

## Practice Questions

1. Expand:
   (a) (x + y + 2)²
   (b) (3a − b + 2c)²
   (c) (p/2 + q/3 − 1)²
   (d) (−x + 2y − 3z)²

2. If a + b + c = 10 and ab + bc + ca = 31, find a² + b² + c².

3. If a + b + c = 11 and a² + b² + c² = 45, find ab + bc + ca.

4. If a² + b² + c² = 29 and ab + bc + ca = 26, find a + b + c.

5. Simplify: (x + y + z)² − (x − y + z)².

6. Using the identity, find the value of 1011².

7. If a + b + c = 0 and a² + b² + c² = 40, find ab + bc + ca.

8. Expand (x + 1/x − 1)².

9. How many terms are there in the expansion of (a + b + c)² after simplification? Name the square terms and the pair terms.

### Answers

1. (a) Squares: x², y², 4. Pairs: 2xy, 2(y)(2) = 4y, 2(2)(x) = 4x.
   **x² + y² + 4 + 2xy + 4y + 4x**
   (b) Squares: 9a², b², 4c². Pairs: 2(3a)(−b) = −6ab, 2(−b)(2c) = −4bc, 2(2c)(3a) = 12ca.
   **9a² + b² + 4c² − 6ab − 4bc + 12ca**
   Jaanch: a = b = c = 1. LHS = (3 − 1 + 2)² = 16. RHS = 9 + 1 + 4 − 6 − 4 + 12 = 16 ✅
   (c) Squares: p²/4, q²/9, 1. Pairs: 2(p/2)(q/3) = pq/3, 2(q/3)(−1) = −2q/3, 2(−1)(p/2) = −p.
   **p²/4 + q²/9 + 1 + pq/3 − 2q/3 − p**
   (d) Squares: x², 4y², 9z². Pairs: 2(−x)(2y) = −4xy, 2(2y)(−3z) = −12yz, 2(−3z)(−x) = 6zx.
   **x² + 4y² + 9z² − 4xy − 12yz + 6zx**
2. 10² = (a² + b² + c²) + 2(31), to 100 = (a² + b² + c²) + 62. **a² + b² + c² = 38**
3. 121 = 45 + 2(ab + bc + ca), to 2(ab + bc + ca) = 76. **ab + bc + ca = 38**
   Jaanch: 2, 4, 5 lo. Sum = 11, squares = 4 + 16 + 25 = 45, pairs = 8 + 20 + 10 = 38 ✅
4. (a + b + c)² = 29 + 52 = 81, to **a + b + c = ±9**
5. Pehla: x² + y² + z² + 2xy + 2yz + 2zx. Doosra: x² + y² + z² − 2xy − 2yz + 2zx.
   Ghatane par: **4xy + 4yz**
   Jaanch: x = y = z = 1. LHS = 9 − 1 = 8. RHS = 4 + 4 = 8 ✅
6. 1011 = 1000 + 10 + 1.
   Squares: 1000000 + 100 + 1 = 1000101. Pairs: 2(1000)(10) + 2(10)(1) + 2(1)(1000) = 20000 + 20 + 2000 = 22020.
   **1011² = 1022121**
7. 0 = 40 + 2(ab + bc + ca), to **ab + bc + ca = −20**
8. Squares: x², 1/x², 1. Pairs: 2(x)(1/x) = 2, 2(1/x)(−1) = −2/x, 2(−1)(x) = −2x.
   **x² + 1/x² − 2x − 2/x + 3**
   Jaanch: x = 1. LHS = (1 + 1 − 1)² = 1. RHS = 1 + 1 − 2 − 2 + 3 = 1 ✅
9. **6 terms.** Square terms: a², b², c². Pair terms: 2ab, 2bc, 2ca.

---

Agli baar jab koi teen terms wala bracket square karne ko de, Pooja ki rangoli yaad kar lena: tirchhi line par teen squares, aur baaki chhe khaane jodon mein. Aap kar loge!

**Aage kya?** Ab tak humne square kiya. Topic 4 mein ek kadam aage chalenge: **cube**, yaani (a + b)³ aur (a − b)³, jahan ek square nahi, poora dabba (3D) banta hai.
