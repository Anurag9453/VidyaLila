# Chapter: Polynomials (Part 3)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [polynomials-part2.md](polynomials-part2.md) se aage chalti hai** (wahan Topic 2 mein quadratic ke zeros aur coefficients ka rishta aaya: α + β = −b/a aur αβ = c/a). Chapter ki shuruaat: [polynomials.md](polynomials.md).
> **Topics covered in this file:**
> 3. Zeros Se Polynomial Banao: Ulti Ganga

---

# Topic 3: Zeros Se Polynomial Banao: Ulti Ganga

Topic 2 mein humne ek anokha rishta dekha: quadratic ax² + bx + c ke zeros α aur β ko dhundhe bina hi unka **sum** α + β = −b/a aur **product** αβ = c/a coefficients se mil jaata hai. Raasta tha: **polynomial se zeros ki taraf**.

Is topic mein Ganga ulti behti hai. Ab hamare paas **zeros** hain (ya sirf unka sum aur product), aur humein **polynomial banana** hai. Aur jab polynomial mein koi anjaan coefficient ho (jaise k), to zeros ke baare mein ek chhoti si **shart** (condition) se wo k bhi pakad mein aa jaata hai.

---

## Ujjwal ka adhoora naksha

School ke Annual Day ke liye hall mein stage ban raha hai. Ujjwal stage-committee mein hai. Mistri uncle ne kaam shuru kar diya, par committee ki diary mein naksha adhoora reh gaya. Uski sirf do line bachi hain:

- Stage ke chaaron kinaron par jhaalar ki patti lagegi: kul **28 m**.
- Stage par bichne wale carpet ka area: **48 m²**.

Stage ki lambai aur chaudai kisi ko yaad nahi. Mistri uncle poochh rahe hain, "Ab kinare kahan se kaatun?"

```
   +------------------------+
   :                        :
   :         STAGE          :  chaudai b
   :                        :
   +------------------------+
          lambai l
```

> **Figure 3.1** – Stage ka naksha. Jhaalar ki patti kinaron par hai, to 2(l + b) = 28. Carpet andar bichega, to l × b = 48.

Ujjwal ne diary mein likha: 2(l + b) = 28, yaani **l + b = 14**, aur **l × b = 48**. "Do number, jinka sum 14 aur product 48 hai... Ye sum aur product to wahi hain jo quadratic ke zeros ke hote hain!"

Teacher ma'am boli, "Bilkul. Class 9 mein tumne polynomial se zero nikaale the. Aaj ulta karo: pehle **polynomial banao jiske zeros l aur b hon**, phir uske zero se l aur b mil jayenge." Aakhir mein hum isi stage ko naap lenge. Pehle dekhte hain ki zeros se polynomial banta kaise hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Monic polynomial** | Aisa polynomial jisme sabse bade power wala coefficient 1 ho | x² − 5x + 4 monic hai, 2x² − 10x + 8 monic nahi |
| **Scale factor k** | Wo non-zero number jisse poore polynomial ko guna karte hain | x² − 5x + 4 ko k = 3 se guna karo to 3x² − 15x + 12 |
| **Polynomial ka parivaar** | Un saare polynomials ka group jinke zero bilkul ek jaise hon aur jo ek-dusre ke k guna hon | x² − 2x − 3 aur 2x² − 4x − 6 ek hi parivaar mein hain |
| **Reciprocal zeros** | Do zero jinka product 1 ho | 5 aur 1/5 |
| **Ek-dusre ke negative zeros** | Do zero jinka sum 0 ho, yaani α aur −α | 4 aur −4 |
| **Shart (condition)** | Sawaal mein diya gaya ek aur fact jo zeros ke baare mein kuch kehta hai | "ek zero doosre ka double hai" |

---

## Class 9 se yaad

Class 9 mein tumne seekha tha ki **zero** wo number a hai jiske liye p(a) = 0 ([polynomials-part5.md](../../../class9/maths/polynomials/polynomials-part5.md)). Aur **Factor Theorem** ne kaha tha ki a zero hai tabhi jab (x − a) polynomial ka factor ho ([polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md)). Wahan hum hamesha polynomial dekhkar factor aur zero nikalte the, aur trinomial ko todne ka kaam [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md) mein hua tha. Ab wahi Factor Theorem **ulta** padhenge: zero maloom hain, to factor maloom hain, to polynomial **jodkar** bana lo.

---

## Part A: Do zeros se quadratic banana

### Kyun: x² − Sx + P kahan se aaya?

Maan lo quadratic p(x) ke do zero α aur β hain, aur α ≠ β.

1. p(α) = 0 hai, to Factor Theorem se (x − α), p(x) ka factor hai. Yaani p(x) = (x − α) × q(x), aur q(x) linear polynomial hai (degree 2 mein se 1 hatane par 1 bachti hai).
2. Ab p(β) = 0 hai. Likho: 0 = (β − α) × q(β). Par β − α ≠ 0 hai, to q(β) = 0 hona hi padega.
3. Linear polynomial q ka zero β hai, to q(x) = k(x − β) ek non-zero number k ke liye.

To **p(x) = k(x − α)(x − β)**. (Agar dono zero ek hi number hon, α = β, to p(x) = k(x − α)²: Topic 2 ka honesty note.)

Ab bracket kholte hain:

(x − α)(x − β) = x² − βx − αx + αβ = x² − (α + β)x + αβ

Sum α + β ko S aur product αβ ko P kehte hain, to

> **p(x) = k × (x² − Sx + P)**, jahan k koi bhi non-zero number hai.

Dhyan do: Topic 2 ka rishta α + β = −b/a, αβ = c/a isi ko ulta padhne se milta hai. Yahan x ka coefficient −S hai (minus ke saath), constant term P hai.

### Example 1: zeros 1/2 aur 5

S = 1/2 + 5 = 11/2 aur P = (1/2) × 5 = 5/2.

x² − (11/2)x + 5/2 ek polynomial hai jiske zeros 1/2 aur 5 hain. Fraction hatane ke liye k = 2 se guna karo:

**2x² − 11x + 5**

**Jaanch:** (2x − 1)(x − 5) = 2x² − 10x − x + 5 = 2x² − 11x + 5 ✅. Aur p(1/2) = 2 × (1/4) − 11/2 + 5 = 1/2 − 11/2 + 5 = 0 ✅, p(5) = 50 − 55 + 5 = 0 ✅.

### Example 2: zeros −7 aur 2/3 (ek negative)

S = −7 + 2/3 = −19/3 aur P = −7 × 2/3 = −14/3.

x² + (19/3)x − 14/3. Sign dekho: S negative tha, to x ke saath −S = +19/3 aaya. k = 3 se guna karo:

**3x² + 19x − 14**

**Jaanch:** (3x − 2)(x + 7) = 3x² + 21x − 2x − 14 = 3x² + 19x − 14 ✅. Aur relations: −b/a = −19/3 = S ✅, c/a = −14/3 = P ✅.

### Example 3: irrational zeros −2 + √3 aur −2 − √3

Yahan zero ek-ek karke fraction nahi, par sum aur product bahut saaf nikalte hain:

- S = (−2 + √3) + (−2 − √3) = −4 (√3 kat gaya)
- P = (−2 + √3)(−2 − √3) = (−2)² − (√3)² = 4 − 3 = 1

p(x) = x² + 4x + 1.

**Jaanch:** x = −2 + √3 daalo: (−2 + √3)² + 4(−2 + √3) + 1 = (4 − 4√3 + 3) + (−8 + 4√3) + 1 = 0 ✅. (Doosre zero ke liye √3 ka sign ulta karne par wahi hisaab chalta hai.)

Dekho, irrational zeros ke saath bhi coefficients rational mile. Jab zero aise **jodi** mein hon (a + √m aur a − √m), to √m hamesha kat jaata hai.

### Example 4: dono zero ek hi: −5/2 aur −5/2

Topic 1 ka "touching" case. S = −5/2 + (−5/2) = −5 aur P = (−5/2)(−5/2) = 25/4.

x² + 5x + 25/4, k = 4 se guna karo: **4x² + 20x + 25**.

**Jaanch:** (2x + 5)² = 4x² + 20x + 25 ✅. Aur p(−5/2) = 4 × (25/4) − 50 + 25 = 25 − 50 + 25 = 0 ✅.

### Example 5: sirf sum aur product diye hain

Sum 7/2 aur product −4 hain. Zero kya hain ye to pata nahi, par polynomial ban jaata hai:

x² − (7/2)x − 4, aur k = 2 se: **2x² − 7x − 8**.

**Jaanch:** −b/a = 7/2 ✅ aur c/a = −8/2 = −4 ✅. Ye bhi dekho ki p(0) = −8 negative hai aur x bahut bada lene par p(x) positive ho jaata hai, to graph x-axis ko zaroor kaatega: asli zero maujood hain (Topic 1).

### Example 6: sum 4, product 9: kya aise numbers hain?

Dhyan se: sum aur product dene se **polynomial** to hamesha ban jaata hai, par kya uske **asli (real) zero** bhi hote hain? x² − 4x + 9 ki values dekho:

| x | −1 | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|
| x² − 4x + 9 | 14 | 9 | 6 | 5 | 6 | 9 | 14 |

Value kahin 0 nahi aati, sabse chhoti value 5 hai (x = 2 par). Is polynomial ka graph x-axis ko chhuta hi nahi (Topic 1 ka "miss" wala case). Matlab **do asli numbers jinka sum 4 aur product 9 ho, hote hi nahi.** (Iska pakka kaaran Chapter 3, Quadratic Equations, mein milega. Abhi graph ka test kaafi hai.)

---

## Part B: "Koi bhi k": ek zero-jodi, anginat polynomial

Example 1 mein humne k = 2 liya tha. Agar k = 1 lete, to x² − (11/2)x + 5/2 bhi sahi tha. **Zeros wahi rahe, polynomial badal gaya.** Is baat ko saaf dekhte hain zeros −1 aur 3 par.

S = −1 + 3 = 2, P = −1 × 3 = −3. To p(x) = k(x² − 2x − 3).

| k | polynomial | p(−1) | p(3) |
|---|---|---|---|
| 1 | x² − 2x − 3 | 0 | 0 |
| 2 | 2x² − 4x − 6 | 0 | 0 |
| 3 | 3x² − 6x − 9 | 0 | 0 |
| −1 | −x² + 2x + 3 | 0 | 0 |

Har k par −1 aur 3 zero hi rahe. Ye saare **ek hi parivaar** ke polynomial hain. Zeros ne polynomial ko "tay" nahi kiya, sirf uska parivaar tay kiya.

```
  y
  5       *           :                       *         x     k=1   k=-1
  4                   :     o                           -2      5     -5
  3                   o           o                     -1      0      0
  2                   :                                  0     -3      3
  1                   :                                  1     -4      4
  0     --+-----Z-----+-----+-----+-----Z-----+-         2     -3      3
 -1                   :                                  3      0      0
 -2                   :                                  4      5     -5
 -3                   *           *
 -4                   :     *
 -5       o           :                       o
         -2    -1     0     1     2     3     4  x
```

> **Figure 3.2** – Zeros −1 aur 3 wale parivaar ke do graph: * wala x² − 2x − 3 (k = 1, upar ki taraf khulta) aur o wala −x² + 2x + 3 (k = −1, neeche ki taraf khulta). Z wo do point hain jahan dono x-axis ko kaatte hain. Dono ek hi do point (−1, 0) aur (3, 0) se guzarte hain. Dono ka y-axis ko kaatne ka point alag hai (−3 aur 3).

Graph ne ek aur baat dikhayi: **k ka sign** curve ki disha tay karta hai (k > 0 par upar, k < 0 par neeche), aur **k ka size** curve ko patla ya chauda banata hai. Par x-axis ke do point nahi badalte.

### Kab k tay ho jaata hai?

Jab sawal mein **ek aur jaankari** de di jaaye. Example: "zeros −1 aur 3 hain aur p(0) = 12."

p(0) = k × (0 − 0 − 3) = −3k = 12, to **k = −4**. Polynomial: −4(x² − 2x − 3) = **−4x² + 8x + 12**.

**Jaanch:** p(−1) = −4 − 8 + 12 = 0 ✅, p(3) = −36 + 24 + 12 = 0 ✅, p(0) = 12 ✅.

Isliye sawal mein "**ek** quadratic polynomial jiske zeros ... hain" likha ho, to koi bhi k chalega. Aur "**monic**" likha ho, to k = 1 hi hoga.

---

## Part C: Shart wale sawaal: anjaan coefficient pakadna

Ab polynomial mein ek anjaan (k) hai, aur zeros ke baare mein ek shart di gayi hai. Tareeka teen kadam ka hai:

1. Shart ko α aur β ke roop mein likho (ek hi anjaan lekar).
2. Topic 2 ke S = −b/a aur P = c/a mein daalo.
3. Jo equation bane use solve karo, aur **Jaanch** zero daalkar karo.

### Example 7: ek zero doosre ka double

2x² − kx + 100 ke ek zero doosre ke double hain. k nikalo.

Zero α aur **2α** likho (ek hi anjaan α). Yahan a = 2, b = −k, c = 100.

- Product: α × 2α = 2α² = c/a = 100/2 = 50, to α² = 25, yaani **α = 5 ya α = −5**.
- Sum: α + 2α = 3α = −b/a = k/2.

Agar α = 5: 3α = 15 = k/2, to **k = 30**. Agar α = −5: 3α = −15, to **k = −30**.

Dono jawab sahi hain, kyunki alag α ke liye alag polynomial milta hai.

**Jaanch:** k = 30 par 2x² − 30x + 100: p(5) = 50 − 150 + 100 = 0 ✅, p(10) = 200 − 300 + 100 = 0 ✅ (10 = 2 × 5). k = −30 par 2x² + 30x + 100: p(−5) = 50 − 150 + 100 = 0 ✅, p(−10) = 200 − 300 + 100 = 0 ✅.

### Example 8: zeros reciprocal hon

5x² − 26x + (k + 7) ke zero ek-dusre ke reciprocal hain. k nikalo.

Zero α aur 1/α hain, to product α × (1/α) = 1. Par product = c/a = (k + 7)/5. To (k + 7)/5 = 1, **k + 7 = 5**, **k = −2**.

(Dekha? Reciprocal zeros ka matlab hai **c = a**: constant term aur x² ka coefficient barabar.)

**Jaanch:** k = −2 par polynomial 5x² − 26x + 5 = (5x − 1)(x − 5) ✅ (5x² − 25x − x + 5). Zero 5 aur 1/5: product 1 ✅ aur sum 5 + 1/5 = 26/5 = −b/a ✅.

### Example 9: ek zero doosre ka negative

2x² + (3k − 12)x − 9 ke zero ek-dusre ke negative hain. k nikalo.

Zero α aur −α, to sum 0. Sum = −b/a = −(3k − 12)/2. To (3k − 12) = 0, **k = 4**. (Matlab x ke term ka coefficient **b = 0**.)

Polynomial 2x² − 9 ban gaya. Zero: 2x² = 9, x² = 9/2, **x = 3/√2 aur −3/√2** (yaani ±(3√2)/2).

**Jaanch:** p(3/√2) = 2 × (9/2) − 9 = 0 ✅ aur p(−3/√2) = 2 × (9/2) − 9 = 0 ✅. Sum = 0 ✅. (Ye jodi isliye asli hai ki c/a = −9/2 negative hai.)

### Example 10: zeros ka sum = unka product

2x² − (k + 3)x + (3k − 11) ke zeros ka sum unke product ke barabar hai. k nikalo.

Sum = −b/a = (k + 3)/2 aur product = c/a = (3k − 11)/2. Barabar: k + 3 = 3k − 11, to 14 = 2k, **k = 7**.

Polynomial: 2x² − 10x + 10. Yahan sum 5 aur product 5, dono barabar.

**Jaanch:** Pehle dekho ki zero asli hain ya nahi: p(1) = 2 − 10 + 10 = 2, p(2) = 8 − 20 + 10 = −2, p(3) = 18 − 30 + 10 = −2, p(4) = 32 − 40 + 10 = 2. Value 1 aur 2 ke beech aur 3 aur 4 ke beech sign badli, to graph x-axis ko do jagah kaatega ✅. Ye zero (5 + √5)/2 aur (5 − √5)/2 hain (aise zero seedhe nikalna Chapter 3 mein aayega). Pehle zero ko daalkar dekho: 2 × (30 + 10√5)/4 − 5 × (5 + √5) + 10 = 15 + 5√5 − 25 − 5√5 + 10 = 0 ✅.

### Example 11: dono zeros ka farak diya hai

x² − 23x + k ke zeros ka farak 9 hai. k nikalo.

**Pehla tareeka (S aur P se).** (α − β)² = α² − 2αβ + β² = (α + β)² − 4αβ = S² − 4P. Farak 9 hai, to (α − β)² = 81. S = 23 aur P = k:

81 = 23² − 4k = 529 − 4k, to 4k = 448, **k = 112**.

**Doosra tareeka (zero seedhe).** α − β = 9 aur α + β = 23. Jodne par 2α = 32, α = 16, aur β = 7. Product k = 16 × 7 = 112. Wahi jawab.

**Jaanch:** x² − 23x + 112 mein p(7) = 49 − 161 + 112 = 0 ✅ aur p(16) = 256 − 368 + 112 = 0 ✅. Farak 16 − 7 = 9 ✅.

(Agar farak −9 lete, yaani α − β = −9, to (α − β)² phir bhi 81 hai, isliye k wahi 112. Square lene se ye sign ki fikr khud hat jaati hai.)

---

## Part D: Naye zeros wala polynomial (ek ke zeros se doosre ke zeros)

Kabhi sawal aisa hota hai: "p(x) ke zeros α aur β hain. Wo polynomial banao jiske zeros α aur β ke reciprocal (ya square) hon." Zero nikalne ki zaroorat nahi: **naye zeros ka sum aur product S aur P se banao, phir x² − (naya sum)x + (naya product).**

Maan lo p(x) = 3x² − 11x + 6. Yahan S = 11/3 aur P = 6/3 = 2. (Asli zero 3 aur 2/3 hain, tum check kar lo: (3x − 2)(x − 3) = 3x² − 9x − 2x + 6.)

### Example 12: zeros ke reciprocal

Naye zeros 1/α aur 1/β.

- Naya sum = 1/α + 1/β = (β + α)/(αβ) = S/P = (11/3)/2 = **11/6**
- Naya product = (1/α)(1/β) = 1/P = **1/2**

Naya polynomial: x² − (11/6)x + 1/2. k = 6 se: **6x² − 11x + 3**.

**Jaanch:** Asli zero 3 aur 2/3 ke reciprocal 1/3 aur 3/2 hain. p(1/3) = 6 × (1/9) − 11/3 + 3 = 2/3 − 11/3 + 9/3 = 0 ✅ aur p(3/2) = 6 × (9/4) − 33/2 + 3 = 27/2 − 33/2 + 6/2 = 0 ✅.

Ek mazedaar baat: 3x² − 11x + 6 aur 6x² − 11x + 3 mein **pehla aur aakhri coefficient aapas mein badal gaye**. Kyun? Kyunki S/P = (−b/a)/(c/a) = −b/c aur 1/P = a/c, to naya polynomial x² + (b/c)x + a/c, yaani **c x² + b x + a** (jab c ≠ 0, kyunki 0 ka reciprocal hota nahi).

### Example 13: zeros ke square

Naye zeros α² aur β².

- Naya sum = α² + β² = (α + β)² − 2αβ = S² − 2P = (11/3)² − 2 × 2 = 121/9 − 4 = 85/9. (Kyunki (α + β)² = α² + 2αβ + β².)
- Naya product = α²β² = (αβ)² = P² = **4**

Naya polynomial: x² − (85/9)x + 4. k = 9 se: **9x² − 85x + 36**.

**Jaanch:** Asli zero 3 aur 2/3 ke square 9 aur 4/9 hain. p(9) = 9 × 81 − 85 × 9 + 36 = 729 − 765 + 36 = 0 ✅ aur p(4/9) = 9 × (16/81) − 85 × (4/9) + 36 = 16/9 − 340/9 + 324/9 = 0 ✅.

### Ek nanha sa case: negative zeros

Naye zeros −α aur −β ka sum −S aur product P hai. Yaani x² + Sx + P: bas x ke term ka sign badalta hai. 3x² − 11x + 6 se naya polynomial **3x² + 11x + 6** (zero −3 aur −2/3).

### Ek mazedaar jodi: x² − 4x + 1

Example 3 jaisa dekho: x² − 4x + 1 ke zero 2 + √3 aur 2 − √3 hain. Inka product (2 + √3)(2 − √3) = 4 − 3 = 1, to **ye ek-dusre ke reciprocal hain**. Isiliye iska reciprocal wala polynomial bhi wahi hai (pehla aur aakhri coefficient dono 1 hain, c = a).

---

## Part E: Stage ka naap, sum aur product se

Ab Ujjwal ke stage par wapas. l + b = 14 aur l × b = 48.

### Example 14: l aur b ko zero banao

Agar l aur b asli numbers hain, to (x − l)(x − b) = x² − (l + b)x + lb = **x² − 14x + 48**. Matlab l aur b is polynomial ke **zero** hain. Aur ulta bhi: is polynomial ke zero ka sum 14 aur product 48 hoga, to wahi stage ke naap honge.

Zero dhundho: do numbers jinka product 48 aur sum 14: **6 aur 8**. (x² − 14x + 48 = (x − 6)(x − 8).)

Stage: **lambai 8 m, chaudai 6 m.**

**Jaanch:** p(6) = 36 − 84 + 48 = 0 ✅, p(8) = 64 − 112 + 48 = 0 ✅. Patti: 2(8 + 6) = 28 m ✅. Carpet: 8 × 6 = 48 m² ✅.

### Example 15: kya har perimeter aur area mil sakte hain?

Mistri uncle ne ek aur stage ka sawal pucha: perimeter 20 m aur area 30 m². Sum = 10 aur product = 30, to polynomial **x² − 10x + 30**. Values dekho:

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| x² − 10x + 30 | 30 | 21 | 14 | 9 | 6 | 5 | 6 | 9 | 14 | 21 | 30 |

Kahin 0 nahi: graph x-axis ke upar hi rehta hai, **koi asli zero nahi**, to **aisa stage ban hi nahi sakta.** Ab area 25 m² lo (perimeter wahi 20 m): polynomial x² − 10x + 25 = (x − 5)², x = 5 par x-axis ko **chhuta** hai, yaani stage 5 m × 5 m ka **square** hai.

Samajh aaya? 20 m ki patti se jo bhi rectangle stage banega, uska area 25 m² se zyada nahi ho sakta. (Ye baat pakki tarah Chapter 3 mein dekhenge.) 30 m² maangna to "graph ka x-axis ko miss karna" tha.

---

## Ek nazar mein: kaunsa sawal, kaunsa raasta

| Diya hai | Karna kya hai | Raasta |
|---|---|---|
| Do zero | Quadratic banao | k(x² − Sx + P) |
| Sum aur product | Quadratic banao | k(x² − Sx + P), phir dekho ki asli zero bante hain ya nahi |
| Ek zero doosre ka m guna | Anjaan coefficient | zero α aur mα, S aur P mein daalo |
| Zeros reciprocal | Anjaan coefficient | product 1, yaani c = a |
| Zeros ek-dusre ke negative | Anjaan coefficient | sum 0, yaani b = 0 |
| Sum = product | Anjaan coefficient | −b/a = c/a |
| Zeros ka farak d | Anjaan coefficient | (α − β)² = S² − 4P = d² |
| Purane zeros ke squares ya reciprocals | Naya polynomial | naya S aur naya P, phir x² − (naya S)x + (naya P) |

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Polynomial bilkul x² − Sx + P hi hai" (k bhool jaana)**

Sawal: "Wo quadratic polynomial likho jiske zero 10 aur −1/5 hain."

Ek dost ne S = 10 − 1/5 = 49/5 aur P = 10 × (−1/5) = −2 nikala, aur likha x² − (49/5)x − 2. Doosre ne 5x² − 49x − 10 likha. Dono ne ek-doosre ko galat bol diya. Dekhte hain:

- **Jaanch:** x² − (49/5)x − 2 mein p(10) = 100 − 98 − 2 = 0 ✅, p(−1/5) = 1/25 + 49/25 − 2 = 0 ✅.
- **Jaanch:** 5x² − 49x − 10 mein p(10) = 500 − 490 − 10 = 0 ✅, p(−1/5) = 5/25 + 49/5 − 10 = 1/5 + 49/5 − 50/5 = 0 ✅.

**Dono sahi hain**, kyunki 5x² − 49x − 10 = 5 × (x² − (49/5)x − 2), yaani k = 5. Jab sawal sirf "ek quadratic polynomial" maange, to koi bhi k chalega. Sirf tab ek hi jawab hoga jab sawal kuch aur bataye (monic ho, ya p(0) diya ho, ya x² ka coefficient diya ho).

**Galti 2: "Ek zero doosre ka double hai", to α = 2 aur β = 1 rakh diya**

Sawal: x² − 18x + k ke ek zero doosre ke double hain. k nikalo.

Galat tareeka: "double yaani α = 2, β = 1." Phir k = product = 2 × 1 = 2, polynomial x² − 18x + 2. Par sum check karo: α + β = 3, jabki −b/a = 18. Ye to match hi nahi karta! Galat. Wajah: "double" ek **rishte** ki baat hai, koi do khaas numbers nahi. 2 aur 1 likhne se humne rishta bhi diya aur values bhi tay kar di, jabki values hamein sum se nikalni thi.

Sahi tareeka: zero **α aur 2α** likho (ek hi anjaan).
- Sum: α + 2α = 3α = 18, to α = 6, zero 6 aur 12.
- Product: k = 6 × 12 = 72.

**Jaanch:** x² − 18x + 72 mein p(6) = 36 − 108 + 72 = 0 ✅ aur p(12) = 144 − 216 + 72 = 0 ✅. 12 = 2 × 6 ✅.

---

## Quick Recap

- Zeros α, β se quadratic: **p(x) = k(x − α)(x − β) = k(x² − Sx + P)**, S = α + β, P = αβ, k koi non-zero number. (Kyun: Factor Theorem se dono factor aaye, aur k bacha.)
- Polynomial ka x ka coefficient **−S** hai (minus ke saath), constant term **P**.
- Zeros tay karte hain polynomial ka **parivaar**, sirf ek polynomial nahi. k ka sign curve ki disha tay karta hai, par x-axis ke point wahi rehte hain.
- k tab tay hota hai jab ek aur jaankari mile (jaise p(0) = kuch, ya monic).
- Sum aur product dene par polynomial hamesha ban jaata hai, par **asli zero ho ya na ho** ye alag baat hai. Graph x-axis ko kaate to hi hote hain.
- Shart wale sawaal: ek zero doosre ka double hai: zero **α aur 2α**; reciprocal: **c = a**; ek-dusre ke negative: **b = 0**; sum = product: **−b/a = c/a**; farak d: **(α − β)² = S² − 4P = d²**.
- Naye zeros wala polynomial: naya sum aur naya product S, P se nikalo. Reciprocal: S/P aur 1/P. Square: S² − 2P aur P².
- Galtiyan: k bhool jaana; "double" par 2 aur 1 rakh dena.

---

## Practice Questions

1. Form a quadratic polynomial with integer coefficients whose zeros are:
   (a) −9 and 1/4
   (b) −5/6 and −3/2
   (c) 3 + √10 and 3 − √10

2. (a) Form a quadratic polynomial whose zeros have sum 9/5 and product −2.
   (b) Try to form one whose zeros have sum 2 and product 7. Make a table of values for x = −2, −1, 0, 1, 2, 3, 4 and say whether such real zeros exist.

3. A quadratic polynomial has zeros 7 and −3/4, and its value at x = 0 is 42. Find the polynomial.

4. The polynomial x² + 20x + k has one zero four times the other. Find k.

5. The polynomial 2x² − kx + 9 has one zero twice the other. Find all possible values of k.

6. If the zeros of 4x² − 17x + (k + 1) are reciprocals of each other, find k and then the zeros.

7. If the zeros of 5x² + (6k − 9)x − 20 are negatives of each other, find k and then the zeros.

8. Find k if the sum of the zeros of 3x² − (k + 4)x + (2k − 5) equals their product. Also check that the polynomial really has real zeros.

9. The zeros of x² − 15x + k differ by 11. Find k and the zeros.

10. Let α and β be the zeros of 5x² − 13x + 6. Without finding α and β, form the quadratic polynomial (integer coefficients) whose zeros are:
    (a) 1/α and 1/β
    (b) −α and −β
    (c) α² and β²

11. A rectangular garden has perimeter 54 m and area 180 m².
    (a) Form a quadratic polynomial whose zeros are its length and breadth, and find the length and breadth.
    (b) Show with a table of values for x = 11, 12, 13, 14, 15, 16 that a garden with the same perimeter and area 200 m² cannot exist.

12. State True or False and give a reason:
    (a) The only quadratic polynomial with zeros 1/4 and −5 is x² + (19/4)x − 5/4.
    (b) If the zeros of a quadratic are negatives of each other, the coefficient of x is 0.
    (c) If the zeros of ax² + bx + c are reciprocals of each other, then a = c.
    (d) If c ≠ 0, the quadratic with zeros 1/α and 1/β is obtained by writing the coefficients of ax² + bx + c in the opposite order.

### Answers

1. (a) S = −9 + 1/4 = −35/4 aur P = −9 × 1/4 = −9/4. Polynomial x² + (35/4)x − 9/4, k = 4 se: **4x² + 35x − 9**.
   Jaanch: (4x − 1)(x + 9) = 4x² + 36x − x − 9 = 4x² + 35x − 9 ✅
   (b) S = −5/6 − 9/6 = −14/6 = −7/3 aur P = (−5/6)(−3/2) = 15/12 = 5/4. Polynomial x² + (7/3)x + 5/4, k = 12 se: **12x² + 28x + 15**.
   Jaanch: (6x + 5)(2x + 3) = 12x² + 18x + 10x + 15 = 12x² + 28x + 15 ✅
   (c) S = (3 + √10) + (3 − √10) = 6 aur P = 9 − 10 = −1. **x² − 6x − 1**.
   Jaanch: p(3 + √10) = (9 + 6√10 + 10) − 18 − 6√10 − 1 = 0 ✅

2. (a) x² − (9/5)x − 2, k = 5 se: **5x² − 9x − 10**.
   Jaanch: −b/a = 9/5 ✅ aur c/a = −2 ✅. Asli zero bhi hain: p(0) = −10 negative, p(3) = 45 − 27 − 10 = 8 positive, aur p(−1) = 5 + 9 − 10 = 4 positive. Sign 0 aur 3 ke beech badli aur −1 aur 0 ke beech bhi, to graph x-axis ko do jagah kaatega ✅.
   (b) Polynomial x² − 2x + 7. Values:
   | x | −2 | −1 | 0 | 1 | 2 | 3 | 4 |
   |---|---|---|---|---|---|---|---|
   | x² − 2x + 7 | 15 | 10 | 7 | 6 | 7 | 10 | 15 |

   Value kabhi 0 nahi aati, sabse chhoti 6 hai. Graph x-axis ko miss karta hai, to **aise asli zero nahi hain**: do asli numbers jinka sum 2 aur product 7 ho, mil hi nahi sakte.

3. Zero 7 aur −3/4: S = 25/4, P = −21/4. p(x) = k(x² − (25/4)x − 21/4). p(0) = k × (−21/4) = 42, to k = 42 × (−4/21) = **−8**.
   Polynomial: −8x² + 50x + 42.
   Jaanch: p(7) = −392 + 350 + 42 = 0 ✅, p(−3/4) = −8 × 9/16 − 150/4 + 42 = −9/2 − 75/2 + 42 = 0 ✅, p(0) = 42 ✅

4. Zero α aur 4α. Sum: 5α = −20 (kyunki −b/a = −20), to α = −4, zero −4 aur −16. Product: k = (−4)(−16) = **64**.
   Jaanch: x² + 20x + 64 mein p(−4) = 16 − 80 + 64 = 0 ✅ aur p(−16) = 256 − 320 + 64 = 0 ✅

5. Zero α aur 2α. Product: 2α² = c/a = 9/2, to α² = 9/4, **α = 3/2 ya α = −3/2**. Sum: 3α = −b/a = k/2.
   α = 3/2: 3α = 9/2, to k/2 = 9/2 aur **k = 9**. α = −3/2: 3α = −9/2, to **k = −9**.
   Jaanch: k = 9 par 2x² − 9x + 9 = (2x − 3)(x − 3) ✅ (2x² − 6x − 3x + 9), zero 3/2 aur 3 (3 = 2 × 3/2). k = −9 par 2x² + 9x + 9 = (2x + 3)(x + 3) ✅ (2x² + 6x + 3x + 9), zero −3/2 aur −3.
   **k = 9 ya k = −9.**

6. Reciprocal zeros ka product 1, to c/a = (k + 1)/4 = 1, k + 1 = 4, **k = 3**. Polynomial 4x² − 17x + 4 = (4x − 1)(x − 4), zero **1/4 aur 4**.
   Jaanch: (4x − 1)(x − 4) = 4x² − 16x − x + 4 ✅. Product (1/4) × 4 = 1 ✅ aur sum 1/4 + 4 = 17/4 = −b/a ✅

7. Ek-dusre ke negative zeros ka sum 0, to b = 0: 6k − 9 = 0, **k = 3/2**. Polynomial 5x² − 20, 5x² = 20, x² = 4, zero **2 aur −2**.
   Jaanch: p(2) = 20 − 20 = 0 ✅ aur p(−2) = 20 − 20 = 0 ✅

8. Sum = (k + 4)/3 aur product = (2k − 5)/3. Barabar: k + 4 = 2k − 5, **k = 9**. Polynomial 3x² − 13x + 13, sum = product = 13/3.
   **Jaanch (asli zero):** p(1) = 3 − 13 + 13 = 3, p(2) = 12 − 26 + 13 = −1, p(3) = 27 − 39 + 13 = 1. Sign 1 aur 2 ke beech badli, aur phir 2 aur 3 ke beech badli, to do asli zero hain ✅.
   Jaanch: −b/a = 13/3 ✅ aur c/a = 13/3 ✅

9. (α − β)² = S² − 4P = 15² − 4k = 225 − 4k, aur ye 11² = 121 ke barabar hai. 4k = 104, **k = 26**.
   Zero seedhe: α − β = 11, α + β = 15, to α = 13, β = 2. Product 13 × 2 = 26. Zero **13 aur 2**.
   Jaanch: x² − 15x + 26 mein p(2) = 4 − 30 + 26 = 0 ✅ aur p(13) = 169 − 195 + 26 = 0 ✅. Farak 13 − 2 = 11 ✅

10. S = 13/5 aur P = 6/5.
    (a) Naya sum S/P = (13/5)/(6/5) = 13/6, naya product 1/P = 5/6. x² − (13/6)x + 5/6, k = 6 se: **6x² − 13x + 5**.
    Jaanch: asli zero 2 aur 3/5 hain ((5x − 3)(x − 2) = 5x² − 13x + 6 ✅). Reciprocal 1/2 aur 5/3. p(1/2) = 6/4 − 13/2 + 5 = 3/2 − 13/2 + 10/2 = 0 ✅, p(5/3) = 6 × 25/9 − 65/3 + 5 = 50/3 − 65/3 + 15/3 = 0 ✅
    (b) Naya sum −13/5 aur product 6/5: x² + (13/5)x + 6/5, k = 5 se: **5x² + 13x + 6**.
    Jaanch: zero −2 aur −3/5. p(−2) = 20 − 26 + 6 = 0 ✅, p(−3/5) = 9/5 − 39/5 + 30/5 = 0 ✅
    (c) Naya sum S² − 2P = 169/25 − 12/5 = 169/25 − 60/25 = 109/25, naya product P² = 36/25. x² − (109/25)x + 36/25, k = 25 se: **25x² − 109x + 36**.
    Jaanch: zero 4 aur 9/25. p(4) = 400 − 436 + 36 = 0 ✅, p(9/25) = 25 × 81/625 − 109 × 9/25 + 36 = 81/25 − 981/25 + 900/25 = 0 ✅

11. (a) 2(l + b) = 54, to l + b = 27, aur l × b = 180. Polynomial **x² − 27x + 180**. Do number jinka product 180 aur sum 27: 12 aur 15. **Lambai 15 m, chaudai 12 m.**
    Jaanch: p(12) = 144 − 324 + 180 = 0 ✅, p(15) = 225 − 405 + 180 = 0 ✅. 2(15 + 12) = 54 ✅ aur 15 × 12 = 180 ✅
    (b) Area 200 par polynomial x² − 27x + 200:
    | x | 11 | 12 | 13 | 14 | 15 | 16 |
    |---|---|---|---|---|---|---|
    | x² − 27x + 200 | 24 | 20 | 18 | 18 | 20 | 24 |

    Value 0 nahi aati, graph x-axis ke upar rehta hai, to **aisa garden nahi ban sakta.**

12. (a) **False.** 4x² + 19x − 5 bhi 1/4 aur −5 par zero deta hai (= 4 × (x² + (19/4)x − 5/4), k = 4). Jaanch: (4x − 1)(x + 5) = 4x² + 20x − x − 5 ✅. Sirf "monic" ho to hi x² + (19/4)x − 5/4 akela hai.
    (b) **True.** Zero α aur −α, to sum 0 = −b/a, to b = 0.
    (c) **True.** Product α × (1/α) = 1 = c/a, to c = a. (Ye tab sahi hai jab zero asli hon.)
    (d) **True.** Reciprocal zeros ka sum S/P = −b/c aur product 1/P = a/c hai, to polynomial x² + (b/c)x + a/c, yaani cx² + bx + a. c = 0 par ek zero 0 hota hai aur 0 ka reciprocal nahi hota, isliye c ≠ 0 shart hai.

---

Shabaash! Ab tum zeros se polynomial bhi bana sakte ho, aur jab koi k anjaan ho to zeros ki ek shart se use pakad bhi sakte ho. Zeros ne polynomial ka sirf **parivaar** tay kiya tha, aur ek aur jaankari ne k tay kiya.

**Aage kya?** Ab tak hum sirf **do** zero (quadratic) ke saath khel rahe the. Topic 4 mein cubic polynomial aayega: **teen zero** α, β, γ, aur unke coefficients se **teen rishte**: sum, do-do ka product ka sum, aur teeno ka product.
