# Chapter: Polynomials

> **Class:** 10 | **Subject:** Mathematics
> **Ye Class 10 Maths ka doosra chapter hai.** Pichhle chapter ki aakhri file ([real-numbers-part6.md](../real-numbers/real-numbers-part6.md): Real Numbers ka saar) se hum yahan aaye hain. Class 9 mein tumne polynomial ka zero, division algorithm aur factor theorem seekha tha ([polynomials-part5.md](../../../class9/maths/polynomials/polynomials-part5.md) aur [polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md)). Ab hum un sab ko tasveer mein dekhenge.
> **Topics covered in this file:**
> 1. Polynomial Ka Graph: Zero Kahan Milta Hai?

---

# Topic 1: Polynomial Ka Graph: Zero Kahan Milta Hai?

Real Numbers ke chapter mein humne numbers ko andar se dekha tha: unka division, unke prime factors, unke decimals. Ab hum wapas polynomials par aate hain, jinse Class 9 mein dosti hui thi. Wahan zero ek **number** tha: wo x jiske liye p(x) = 0 ho jaye. Is topic mein wahi zero ek **jagah** ban jayega: graph par wo point jahan curve x-axis ko milta hai. Jab polynomial ko tasveer mein dekhte hain, to ek naya sawaal bhi sunai deta hai: "kitne zero ho sakte hain, aur kyun itne hi?"

---

## Narayan ka pul aur gend

Narayan Papa ke saath nadi ke kinare wale purane pul par khada hai. Pul ke upar lohe ka ek bada **mehraab** (arch) hai: sadak ke ek kinare se uthta hai, beech mein sabse upar jaata hai aur doosre kinare par utar jaata hai, bilkul ulte "U" jaisa. Narayan ne copy nikali aur sadak ko ek seedhi line banakar mehraab ka naksha kheencha.

"Papa, ye mehraab sadak ko kitni jagah chhoota hai?"

"Do jagah," Papa ne kaha, "ek is kinare par, ek us kinare par."

Neeche ghaat par Didi cricket ki gend upar uchhaal-uchhaal kar catch kar rahi thi. Narayan ne dekha ki gend zameen se uthti hai, ek gol raste par upar jaati hai aur phir zameen par aa jaati hai. Usne gend ka raasta bhi copy mein bana diya. Wo bhi ulte "U" jaisa tha, aur zameen ko do jagah chhoota tha: jahan se gend uthi aur jahan wo gir gayi.

Narayan ko ek sawaal soojha: "Kya har curve zameen ko do hi jagah chhoota hai? Aur agar kisi curve ka raasta zameen se kabhi mile hi nahi, to?"

Papa muskuraye. "Ek seedhi line socho. Ek aisi curve socho jo zameen ko sirf chhoo kar laut jaye. Aur ek aisi jo kabhi zameen tak aaye hi nahi. Ye sab polynomials ke graph hote hain. Chalo, ek ek karke banate hain."

Aur isi sawaal ka jawab hai is topic mein: polynomial ka graph kaisa dikhta hai, aur uske **zero** us graph par kahan chhupe hote hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Graph of p(x)** | x-y plane par un sab points (x, p(x)) se banne wali tasveer | y = x² − x − 2 ka graph, Figure 1.2 |
| **x-intercept** | Wo point jahan graph x-axis ko milta hai. Uska x-coordinate polynomial ka zero hota hai | (−1, 0) aur (2, 0) |
| **y-intercept** | Wo point jahan graph y-axis ko milta hai. Wahan x = 0 hota hai, to y = p(0) | (0, −2) |
| **Parabola** | Quadratic polynomial ka graph: ek mudi hui curve, jo U jaisi ya ulte U jaisi dikhti hai | Figure 1.2 aur 1.3 |
| **Vertex** | Parabola ka wo point jahan wo mud kar laut-ti hai: U mein sabse neecha, ulte U mein sabse upar | x² − x − 2 ka vertex (1/2, −9/4) |
| **Axis of symmetry** | Vertex se guzarti hui khadi line, jiske dono taraf parabola ke hisse ek doosre ke mirror-image hote hain | x = 1/2 |
| **Chhoona (touch)** | Graph x-axis ko ek point par sirf chhoo kar usi taraf wapas mud jaye, paar na kare | x² − 6x + 9, x = 3 par |
| **Cubic curve** | Cubic polynomial ka graph: ek lehraati hui curve jiske do sire ulti taraf jaate hain | Figure 1.6 |

---

## Class 9 se yaad

- **Zero of a polynomial:** wo number a jiske liye p(a) = 0 ([polynomials-part5.md](../../../class9/maths/polynomials/polynomials-part5.md), Part D). Wahin ye bhi tha ki degree n wale polynomial ke zyada se zyada n zero hote hain.
- **Factor theorem:** a zero hai ⟺ (x − a) factor hai ([polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md), Part C).
- **Cartesian plane:** point (x, y) ko "pehle chalo, phir chadho" se plot karte hain, aur x-axis par har point ka y = 0 hota hai ([linear-equations-in-two-variables-part2.md](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md), Part A aur Part E).
- **Seedhi line:** y = (kuch) x + (kuch) ka graph seedhi line banta hai (wahi file, Part B).

Class 9 mein zero hum try karke ya x = −b/a se nikalte the. Ab dekhte hain ki graph unhe khud dikha deta hai.

---

## Part A: Graph banane ka tarika, aur linear polynomial

**Tarika (table of values):**
1. Kuch x chuno (negative, 0, positive).
2. Har x ke liye p(x) nikalo. Ye us point ki **unchai** hai.
3. Har (x, p(x)) ko plane par plot karo.
4. Points ko ek rawani se jodo: wahi **graph of p(x)** hai.

**Zero kahan dikhega?** Zero wo x hai jahan p(x) = 0, yaani unchai 0. Unchai 0 ka matlab point x-axis par hai. Isliye **graph jahan x-axis ko milta hai, us point ka x-coordinate hi zero hai.** (Point (−1, 0) ka zero −1 hai, 0 nahi.)

### Example 1: p(x) = 2x + 5

| x | −4 | −3 | −5/2 | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|---|---|---|
| p(x) | −3 | −1 | 0 | 1 | 3 | 5 | 7 | 9 |

```
                             y
  8                          |                x    p(x)
  7                          |     *           -4    -3
  6                          |                 -3    -1
  5                          *                -5/2     0   (zero)
  4                          |                 -2     1
  3                    *     |                 -1     3
  2                          |                  0     5
  1              *           |                  1     7
  0 -+-----+--O--+-----+-----+-----+-----+> x   2     9
 -1        *                 |
 -2                          |
 -3  *                       |
     -4    -3    -2    -1    0     1     2   <- x ke number
```

> **Figure 1.1** – p(x) = 2x + 5 ka graph. * ek point hai, O wo point jahan graph x-axis ko milta hai. Graph seedhi line hai aur x-axis ko sirf ek jagah, x = −5/2 par, katti hai. Table ka aakhri point (2, 9) is chhote frame se bahar hai.

Graph x-axis ko x = −5/2 par milta hai, to zero **−5/2** hai.

**Jaanch:** p(−5/2) = 2(−5/2) + 5 = −5 + 5 = 0 ✅. Class 9 ke formula x = −b/a se bhi −5/2 ✅.

**Ek hi zero kyun?** Line ax + b (a ≠ 0) mein x ke har ek step par p(x) ek jitna badhta ya ghatta hai (yahan har step par 2 badha). Isliye wo ek hi rawani se chalti hai aur x-axis ko ek baar paar karti hai. Class 9 ka formula bhi yahi kehta hai: ax + b = 0 ka ek hi hal x = −b/a hai. **Linear polynomial ka graph x-axis ko theek ek jagah katta hai: theek 1 zero.**

### Example 2: constant polynomial p(x) = 4

p(−7) = 4, p(0) = 4, p(100) = 4. Har x par unchai 4 hai, to graph y = 4 par ek **aadi (horizontal) line** hai, jo x-axis se hamesha 4 unchai par rehti hai. Wo x-axis ko kabhi nahi milti.

**Jaanch:** koi bhi x rakho, p(x) = 4 aata hai, 0 kabhi nahi ✅. To non-zero constant ka **koi zero nahi.** (Zero polynomial p(x) = 0 ka graph x-axis khud hai, to us par har point x-axis par hai: Class 9 ki wahi baat, har number zero hai.)

---

## Part B: Quadratic polynomial aur parabola

Ab ek quadratic ax² + bx + c (a ≠ 0) ka graph banate hain. Narayan ke mehraab aur gend jaisi curve yahin milti hai.

### Example 3: p(x) = x² − x − 2

| x | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| p(x) | 4 | 0 | −2 | −2 | 0 | 4 |

```
                    y
  4       *         |              *         x    p(x)
  3                 |                         -2     4
  2                 |                         -1     0   (zero)
  1                 |                          0    -2
  0 -+----+----O----+----+----O----+----+> x   1    -2
 -1                 |                          2     0   (zero)
 -2                 *    *                     3     4
 -3                 |
     -3   -2   -1   0    1    2    3    4   <- x ke number
```

> **Figure 1.2** – p(x) = x² − x − 2 ka graph, ek U jaisi parabola. O wale do point (−1, 0) aur (2, 0) hain: graph x-axis ko do jagah katta hai. Vertex x = 0 aur x = 1 ke beech mein hai, jahan p(x) sabse chhota hai (yahan sirf integer x ke points plot kiye gaye hain).

Graph x-axis ko x = −1 aur x = 2 par katta hai, to p(x) ke **do zero: −1 aur 2**.

**Jaanch:** p(−1) = 1 + 1 − 2 = 0 ✅ aur p(2) = 4 − 2 − 2 = 0 ✅. Class 9 ki factorising se bhi x² − x − 2 = (x + 1)(x − 2) = x² − 2x + x − 2 = x² − x − 2 ✅.

**Vertex aur axis of symmetry.** Table mein p(0) = p(1) = −2, to sabse neeche ka point 0 aur 1 ke bilkul beech, x = 1/2 par hona chahiye. Aur ye −1 aur 2 ke beech ka bhi bilkul beech hai: (−1 + 2)/2 = 1/2. Yahi **axis of symmetry** hai: x = 1/2. Kyun? x = 1/2 se t door dono taraf dekho:

- p(1/2 + t) = (1/4 + t + t²) − (1/2 + t) − 2 = t² − 9/4
- p(1/2 − t) = (1/4 − t + t²) − (1/2 − t) − 2 = t² − 9/4

Dono taraf ek hi value aati hai, to parabola x = 1/2 par mirror hai. Aur t² kabhi negative nahi hota, to p(x) ≥ −9/4, aur −9/4 sirf t = 0 par milta hai. **Vertex = (1/2, −9/4).**

**Jaanch:** p(1/2) = 1/4 − 1/2 − 2 = −9/4 ✅. Mirror ke hisaab se zero bhi jodi mein hone chahiye: t = 3/2 lo, to 1/2 − 3/2 = −1 aur 1/2 + 3/2 = 2, aur p(−1) = p(2) = 0 ✅.

### Example 4: p(x) = −x² + x + 2

Ye pichhle polynomial ka **ulta** hai: har value ka sign badla hua (−x² + x + 2 = −(x² − x − 2)).

| x | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| p(x) | −4 | 0 | 2 | 2 | 0 | −4 |

```
                    y
  3                 |                        x    p(x)
  2                 *    *                    -2    -4
  1                 |                         -1     0   (zero)
  0 -+----+----O----+----+----O----+----+> x   0     2
 -1                 |                          1     2
 -2                 |                          2     0   (zero)
 -3                 |                          3    -4
 -4       *         |              *
     -3   -2   -1   0    1    2    3    4   <- x ke number
```

> **Figure 1.3** – p(x) = −x² + x + 2 ka graph: ulte U jaisi parabola. Zero wahi do, −1 aur 2, par ab parabola x-axis ke upar ki taraf ubharti hai aur vertex sabse upar hai. Ye Figure 1.2 ka x-axis mein mirror-image hai.

Zero wahi: **−1 aur 2**. Par parabola ab **neeche ki taraf khulti** hai aur vertex (1/2, 9/4) sabse **upar** hai.

**Jaanch:** p(−1) = −1 − 1 + 2 = 0 ✅, p(2) = −4 + 2 + 2 = 0 ✅, p(1/2) = −1/4 + 1/2 + 2 = 9/4 ✅.

### Parabola upar ya neeche kyun khulti hai?

Dono polynomials mein x bahut door rakh kar dekho:

| x | x² − x − 2 | −x² + x + 2 |
|---|---|---|
| 10 | 88 | −88 |
| −10 | 108 | −108 |

Jab |x| bada hota hai, to x² wala term baaki terms ko peeche chhod deta hai, aur value ka sign x² ke coefficient **a** ke sign jaisa ban jata hai. Isliye:

> **a > 0:** parabola **upar** ki taraf khulti hai (U), vertex sabse neecha point.
> **a < 0:** parabola **neeche** ki taraf khulti hai (ulta U), vertex sabse upar ka point.

---

## Part C: Teen haalat: 2 zero, 1 zero, 0 zero

Narayan ka sawaal tha: "kya curve zameen ko hamesha do hi jagah chhoota hai?" Figure 1.2 aur 1.3 mein do jagah chhooti thi. Ab do aur haalat dekhte hain.

### Example 5: p(x) = x² − 6x + 9 (chhooti hai)

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| p(x) | 9 | 4 | 1 | 0 | 1 | 4 | 9 |

```
          y
  9       *                             *         x    p(x)
  8       |                                         0     9
  7       |                                         1     4
  6       |                                         2     1
  5       |                                         3     0   (zero)
  4       |    *                   *                4     1
  3       |                                         5     4
  2       |                                         6     9
  1       |         *         *
  0 -+----+----+----+----O----+----+----+----+> x
 -1       |
     -1   0    1    2    3    4    5    6    7   <- x ke number
```

> **Figure 1.4** – p(x) = x² − 6x + 9 ka graph. Vertex (3, 0) x-axis par hi hai: parabola x-axis ko x = 3 par sirf chhoo kar wapas upar mud jaati hai.

Zero sirf ek: **x = 3**. Kyun? x² − 6x + 9 = (x − 3)², aur kisi bhi number ka square negative nahi hota. To graph kabhi x-axis ke neeche ja hi nahi sakta. Wo x = 3 par 0 ko chhoota hai aur wapas upar chala jata hai.

**Jaanch:** (x − 3)² = x² − 6x + 9 ✅. p(3) = 9 − 18 + 9 = 0 ✅. Aur dono taraf p(2) = 1 aur p(4) = 1, dono positive ✅.

### Example 6: p(x) = x² + 4 (door rehti hai)

| x | −3 | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|---|
| p(x) | 13 | 8 | 5 | 4 | 5 | 8 | 13 |

```
                     y
 13      *           |           *        x    p(x)
 12                  |                     -3    13
 11                  |                     -2     8
 10                  |                     -1     5
  9                  |                      0     4
  8          *       |       *              1     5
  7                  |                      2     8
  6                  |                      3    13
  5              *   |   *
  4                  *
  3                  |
  2                  |
  1                  |
  0 -+---+---+---+---+---+---+---+---+> x
 -1                  |
     -4  -3  -2  -1  0   1   2   3   4   <- x ke number
```

> **Figure 1.5** – p(x) = x² + 4 ka graph. Vertex (0, 4) x-axis se 4 unchai par hai aur parabola upar hi upar jaati hai. x-axis tak kabhi nahi aati.

x² ≥ 0 hota hai, to x² + 4 ≥ 4, yaani value kabhi 0 tak nahi girti. Graph x-axis ko nahi milta, to x² + 4 ka **koi real zero nahi** hai. (Class 9 mein x² + 1 ke saath bhi yahi baat thi: [polynomials-part5.md](../../../class9/maths/polynomials/polynomials-part5.md), Part D, Example 9.)

**Jaanch:** sabse chhoti value p(0) = 4 hai, aur har x par p(x) ≥ 4 ✅. Koi p(x) = 0 hota to x² = −4, jo possible nahi ✅.

### Teen haalat ek table mein

| Parabola x-axis ke saath | Zero ki ginti | Example |
|---|---|---|
| Do alag points par katti hai | 2 | x² − x − 2 (Figure 1.2), −x² + x + 2 (Figure 1.3) |
| Ek point par sirf chhooti hai | 1 | x² − 6x + 9 (Figure 1.4) |
| Kabhi nahi milti | 0 | x² + 4 (Figure 1.5) |

**Vertex se pehchano:** U jaisi parabola (a > 0) mein vertex x-axis ke **neeche** ho to 2 zero, **par** ho to 1 zero, **upar** ho to 0 zero. Ulte U (a < 0) mein bilkul ulta: vertex x-axis ke upar ho to 2 zero, par ho to 1, neeche ho to 0.

**Do zero ke beech curve kyun neeche jaati hai?** x² − x − 2 = (x + 1)(x − 2). Agar x, −1 aur 2 ke beech ho, to x + 1 positive hai aur x − 2 negative, to guna negative aata hai (graph x-axis ke neeche). Bahar dono factor ek hi sign ke hain, to guna positive hai. Isiliye parabola do zero par x-axis paar karti hai aur beech mein neeche dubki lagati hai.

**Zyada se zyada 2 kyun?** Factor theorem: har alag zero ek alag factor (x − a) deta hai, aur degree 2 mein do se zyada factor aa hi nahi sakte. Aur ek parabola sirf ek hi baar mudti hai, isliye wo x-axis ko teen jagah mil hi nahi sakti.

> **Dhyan:** a < 0 ho tab bhi do zero zaroori nahi: −x² − 3 jaisi parabola ulte U ki hai par uska vertex x-axis ke neeche hai, to wo x-axis ko nahi milti.

---

## Part D: Cubic polynomial aur uska S-jaisa graph

Ab ax³ + bx² + cx + d (a ≠ 0). Iske graph mein ek upar ka mod aur ek neeche ka mod aa sakta hai, aur do sire ulti taraf jaate hain. Teen examples dekhte hain: 3 zero, 2 zero aur 1 zero.

### Example 7: p(x) = x³ − 2x² − 5x + 6 (teen zero)

| x | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| p(x) | 0 | 8 | 6 | 0 | −4 | 0 |

```
                    y
  8            *    |                        x    p(x)
  7                 |                         -2     0   (zero)
  6                 *                         -1     8
  5                 |                          0     6
  4                 |                          1     0   (zero)
  3                 |                          2    -4
  2                 |                          3     0   (zero)
  1                 |
  0 -+----O----+----+----O----+----O----+> x
 -1                 |
 -2                 |
 -3                 |
 -4                 |         *
 -5                 |
 -6                 |
     -3   -2   -1   0    1    2    3    4   <- x ke number
```

> **Figure 1.6** – p(x) = x³ − 2x² − 5x + 6 ka graph. Graph x-axis ko teen jagah katta hai: x = −2, 1 aur 3 par (O). Beech mein upar ka mod x = −1 aur 0 ke paas aur neeche ka mod x = 2 ke paas hai. x = −3 (p = −24) aur x = 4 (p = 18) is frame se bahar hain.

Teen zero: **−2, 1, 3**.

**Jaanch:** p(−2) = −8 − 8 + 10 + 6 = 0 ✅, p(1) = 1 − 2 − 5 + 6 = 0 ✅, p(3) = 27 − 18 − 15 + 6 = 0 ✅.

### Example 8: p(x) = x³ − 3x + 2 (do zero: ek par chhoota hai)

| x | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| p(x) | 0 | 4 | 2 | 0 | 4 |

```
                    y
  4            *    |         *         x    p(x)
  3                 |                    -2     0   (zero)
  2                 *                    -1     4
  1                 |                     0     2
  0 -+----O----+----+----O----+----+> x   1     0   (zero)
 -1                 |                     2     4
     -3   -2   -1   0    1    2    3   <- x ke number
```

> **Figure 1.7** – p(x) = x³ − 3x + 2 ka graph. x = −2 par graph x-axis ko paar karta hai, x = 1 par sirf chhoota hai. x = −3 (p = −16) aur x = 3 (p = 20) is frame se bahar hain.

Do alag zero: **−2 aur 1.** Kyun chhoota hai x = 1 par? x³ − 3x + 2 = (x + 2)(x − 1)². x = 1 ke paas (x − 1)² kabhi negative nahi, aur (x + 2) positive hai, to p(x) 0 se neeche jaata hi nahi.

**Jaanch:** (x + 2)(x² − 2x + 1) = x³ − 2x² + x + 2x² − 4x + 2 = x³ − 3x + 2 ✅. p(−2) = −8 + 6 + 2 = 0 ✅, p(1) = 1 − 3 + 2 = 0 ✅, p(0) = 2 aur p(2) = 4, dono taraf positive ✅.

### Example 9: p(x) = x³ − 2x + 4 (sirf ek zero)

| x | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| p(x) | 0 | 5 | 4 | 3 | 8 |

```
                    y
  8                 |         *         x    p(x)
  7                 |                    -2     0   (zero)
  6                 |                    -1     5
  5            *    |                     0     4
  4                 *                     1     3
  3                 |    *                2     8
  2                 |
  1                 |
  0 -+----O----+----+----+----+----+> x
 -1                 |
     -3   -2   -1   0    1    2    3   <- x ke number
```

> **Figure 1.8** – p(x) = x³ − 2x + 4 ka graph. Graph x-axis ko sirf x = −2 par paar karta hai, phir upar hi rehta hai. x = −3 (p = −17) aur x = 3 (p = 25) is frame se bahar hain.

Ek hi zero: **−2**. Baaki ka hissa: x³ − 2x + 4 = (x + 2)(x² − 2x + 2), aur x² − 2x + 2 = (x − 1)² + 1 ≥ 1 kabhi 0 nahi hota, to doosra koi zero nahi.

**Jaanch:** p(−2) = −8 + 4 + 4 = 0 ✅. (x + 2)(x² − 2x + 2) = x³ − 2x² + 2x + 2x² − 4x + 4 = x³ − 2x + 4 ✅. (x − 1)² + 1 = x² − 2x + 2 ✅.

### Cubic ke kitne zero? Kam se kam 1, zyada se zyada 3

- **Zyada se zyada 3:** Class 9 ka niyam. Har zero ek alag factor (x − a) deta hai, aur degree 3 mein teen se zyada factor nahi aa sakte. Isliye cubic ka graph x-axis ko chaar jagah nahi kaat sakta.
- **Kam se kam 1:** a > 0 ho to x bahut bada positive hone par p(x) bahut bada positive hota hai, aur x bahut bada negative hone par bahut bada negative. Example 7 mein p(10) = 756 aur p(−10) = −1144; Example 9 mein p(10) = 984 aur p(−10) = −976. Graph ek zanjeer ki tarah tootta nahi, to ek sire se doosre sire tak jaate hue use x-axis ek baar to paar karna hi padega. (Iska pakka saboot aage ki class mein aata hai; yahan hum graph ki tasveer par bharosa karte hain.) (Quadratic ke dono sire ek hi taraf jaate hain, isliye wo x-axis tak aaye bina rah sakti hai. Cubic ke do sire ulti taraf jaate hain, isliye cubic ka kam se kam ek zero hota hi hai.)

| Degree | Naam | Graph | Zero ki ginti |
|---|---|---|---|
| 1 | Linear | seedhi line | theek 1 |
| 2 | Quadratic | parabola | 0, 1 ya 2 |
| 3 | Cubic | S jaisi lehraati curve | 1, 2 ya 3 |

"Zyada se zyada" ka matlab "hamesha utne" nahi hai: quadratic ke 2 zero kabhi 0 ya 1 bhi ho sakte hain, aur cubic ke 3 kabhi 1 ya 2.

---

## Part E: Graph se zero padhna aur factor theorem se jodna

**Graph se zero padhne ke 3 kadam:**
1. Dekho graph x-axis ko kahan kaatta ya chhoota hai.
2. Un points ke **x-coordinate** likho: wahi zero hain.
3. Har zero a ke liye (x − a) ek factor hai.

### Example 10: Figure 1.6 se factors

Figure 1.6 mein graph x = −2, 1, 3 par x-axis ko milta hai. Factor theorem (Class 9) se (x + 2), (x − 1) aur (x − 3) factor hone chahiye. Guna karke dekhte hain:

(x + 2)(x − 1) = x² + x − 2

(x² + x − 2)(x − 3) = x³ + x² − 2x − 3x² − 3x + 6 = x³ − 2x² − 5x + 6

**Jaanch:** Ye wahi p(x) hai jiska graph tha ✅. Aur p(0) = 6 aur (0 + 2)(0 − 1)(0 − 3) = 6 ✅. Graph aur factor theorem ek hi baat kehte hain: **graph x = a par x-axis ko milta hai ⟺ (x − a) factor hai.** (Graph se factors ek constant gunak tak hi pakde jaate hain: 2(x + 2)(x − 1)(x − 3) ke zero bhi wahi hain. Ye baat Topic 3 mein aayegi.)

**Chhoone wale zero ka factor:** Figure 1.4 mein zero 3 par graph chhoota hai aur p(x) = (x − 3)² hai: factor (x − 3) **do baar** aaya. Figure 1.7 mein bhi x = 1 par chhoota hai aur (x − 1)² factor hai. Dono mein chhoone wale zero ka factor do baar aa raha hai. Wajah: (x − a)² kabhi negative nahi, to graph zero ke dono taraf ek hi side rehta hai.

### Example 11: jab zero grid ke point par na ho

p(x) = x² − 3x − 1 ka table:

| x | −1 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|
| p(x) | 3 | −1 | −3 | −3 | −1 | 3 |

x = −1 par p = 3 (x-axis ke upar), x = 0 par p = −1 (neeche). Graph beech mein x-axis ko paar karta hoga, to ek zero **−1 aur 0 ke beech** hai. Isi tarah x = 3 par p = −1 aur x = 4 par p = 3, to doosra zero **3 aur 4 ke beech** hai. Do jagah sign badla, to 2 zero.

Aur paas se dekho: p(3.3) = 10.89 − 9.9 − 1 = −0.01 (0 ke bahut paas) aur p(3.4) = 11.56 − 10.2 − 1 = 0.36 (positive), to zero lagbhag **3.3** hai. Isi tarah p(−0.3) = 0.09 + 0.9 − 1 = −0.01, to doosra zero lagbhag **−0.3** hai.

**Jaanch:** p(3.3) = −0.01 aur p(3.4) = 0.36 ke beech sign badla ✅, aur p(−1) = 3, p(−0.3) = −0.01 ke beech bhi ✅. Graph se aise zero lagbhag hi milte hain. Exact zero nikalne ka tareeka Chapter 3 Quadratic Equations mein milega.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Graph jahan y-axis ko katta hai, wahi zero hai"**

p(x) = x² − 3x − 10 lo. Table:

| x | −3 | −2 | −1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|---|---|---|
| p(x) | 8 | 0 | −6 | −10 | −12 | −12 | −10 | −6 | 0 | 8 |

- Graph **y-axis** ko (0, −10) par milta hai. Wo p(0) = −10 hai, yaani **value**, aur ye constant term hai (Class 9 ka shortcut).
- Agar koi kahe "zero −10 hai", to jaanch karo: p(−10) = 100 + 30 − 10 = 120, jo 0 nahi hai. To −10 zero nahi hai.
- Zero wo hain jahan graph **x-axis** ko milta hai: (−2, 0) aur (5, 0). Zero **−2 aur 5** hain.

**Jaanch:** p(−2) = 4 + 6 − 10 = 0 ✅ aur p(5) = 25 − 15 − 10 = 0 ✅.

Yaad rakho: har polynomial ka y-axis par theek ek point hota hai (x = 0 par), par x-axis par 0, 1, 2 ya 3 tak points. Y-axis wala point **p(0)** batata hai, zero nahi. Class 9 ki "value aur zero ko mix karna" wali galti ka yahi graph wala roop hai.

**Galti 2: "Parabola hamesha x-axis ko do jagah katti hai"**

- p(x) = x² + 6x + 10: x = −5, −4, −3, −2, −1 par values 5, 2, 1, 2, 5. Sabse chhoti value 1 hai, kabhi 0 nahi. (x² + 6x + 10 = (x + 3)² + 1 ≥ 1.) **0 zero.**
- p(x) = x² + 4x + 4: x = −4, −3, −2, −1, 0 par values 4, 1, 0, 1, 4. Sirf x = −2 par 0, aur dono taraf positive. **1 zero** (x² + 4x + 4 = (x + 2)²).

**Jaanch:** (x + 3)² + 1 = x² + 6x + 9 + 1 = x² + 6x + 10 ✅ aur (x + 2)² = x² + 4x + 4 ✅. Ek hi shape (parabola) ke teen alag zero count dekh liye: 2 (Figure 1.2), 1 aur 0. Isliye hamesha "zyada se zyada 2" kaho, "hamesha 2" nahi.

---

## Quick Recap

- Polynomial ka **graph** (x, p(x)) points ki tasveer hai: table of values se banta hai.
- **Zero = graph ke x-axis wale point ka x-coordinate.** Y-axis wala point p(0) hai, zero nahi.
- **Linear** (degree 1): seedhi line, theek 1 zero. **Non-zero constant**: aadi line, koi zero nahi.
- **Quadratic** (degree 2): parabola. a > 0 to upar khulti (U), a < 0 to neeche (ulta U). Vertex aur axis of symmetry hote hain. **0, 1 ya 2 zero.**
- Parabola x-axis ko do jagah katti hai, ek jagah chhooti hai ya kabhi nahi milti. x² + 4 jaise polynomial ka koi real zero nahi.
- **Cubic** (degree 3): S jaisi lehraati curve. **1, 2 ya 3 zero**: kam se kam 1 (dono sire ulti taraf), zyada se zyada 3 (teen factor).
- Degree n ke zyada se zyada n zero: "zyada se zyada" ka matlab "hamesha utne" nahi.
- **Graph aur factor theorem:** graph x = a par x-axis ko milta hai ⟺ (x − a) factor hai. Chhoone wale zero ka factor do baar aata hai.
- Table mein p(x) ka sign badle, to un do x ke beech graph x-axis ko paar karta hai: ek zero wahin hai.

---

## Practice Questions

1. Make a table of values of p(x) = 3x − 4 for x = −1, 0, 1, 2, 3 and sketch the graph. Where does it meet the x-axis and where does it meet the y-axis? Are the two x-values the same?

2. For p(x) = x² − 2x − 8, make a table for x = −3, −2, ..., 5. From the table read (a) the zeros, (b) the vertex and the axis of symmetry, (c) whether the parabola opens upwards or downwards, (d) the y-intercept.

3. For p(x) = 3x² − 8x − 3, make a table for x = −1, 0, 1, 2, 3. Show that one zero is 3 and that the other lies between −1 and 0. Then check by factorising that the other zero is −1/3.

4. Without drawing, say whether the parabola y = p(x) opens upwards or downwards.
   (a) 3x² − 7x + 1
   (b) −x² − 2x + 5
   (c) x − 2x²
   (d) 1 + 2x + 3x²

5. For p(x) = 4 − x², make a table for x = −3, ..., 3. How many zeros are there? What are they? State the vertex and say whether it is the highest or the lowest point.

6. The graph of p(x) = x² + 12x + 36 touches the x-axis. Make a table for x = −8, −7, ..., −4 and find the point of touching. Write p(x) as a square and explain why the graph never goes below the x-axis.

7. Make a table of p(x) = x² − 6x + 11 for x = 1, 2, ..., 5. Does the graph meet the x-axis? Explain how many zeros p has and where its vertex is.

8. Here is a table for p(x) = x² − x − 5, for x = −3, −2, −1, 0, 1, 2, 3, 4: the values of p(x) are 7, 1, −3, −5, −5, −3, 1, 7. Between which consecutive integers does the graph cross the x-axis? How many zeros does p have? Why can there be no more? What is the axis of symmetry?

9. For p(x) = x³ + x² − 6x, make a table for x = −3, −2, ..., 3. How many zeros does it have? Write them and the corresponding factors of p(x), and multiply the factors to check.

10. For p(x) = x³ + 4x, make a table for x = −2, −1, 0, 1, 2. How many times does the graph cross the x-axis? Why can there be no other zero? (Hint: take x common.)

11. The graph of a quadratic polynomial meets the x-axis only at (−7, 0) and (3, 0). Which of x + 7, x − 7, x + 3, x − 3 are factors of the polynomial? Check that x² + 4x − 21 fits this description.

12. A ball thrown from the ground has height h = 8t − t² metres after t seconds (for 0 ≤ t ≤ 8, in this model).
    (a) Make a table for t = 0, 1, ..., 8.
    (b) At which times is the ball on the ground?
    (c) What is the greatest height and at what time?
    (d) Why does the graph open downwards?

13. State whether each statement is true or false, with a reason.
    (a) A quadratic polynomial can have a graph that touches the x-axis at exactly one point.
    (b) A cubic polynomial can have no zero at all.
    (c) If the graph of p(x) meets the x-axis at x = 7, then (x − 7) is a factor of p(x).
    (d) The y-coordinate of a point where the graph meets the x-axis is the zero of p(x).
    (e) Every quadratic polynomial with a < 0 has two zeros.

### Answers

1. p(x) = 3x − 4 ke liye values: −7, −4, −1, 2, 5 (x = −1, 0, 1, 2, 3). Graph seedhi line hai. p(1) = −1 (neeche) aur p(2) = 2 (upar), to line x-axis ko 1 aur 2 ke beech milti hai. 3x − 4 = 0 se **x = 4/3**.
   y-axis par x = 0 par p(0) = **−4**, yaani (0, −4).
   **Nahi, same nahi:** x-axis ka x = 4/3 hai, y-axis ka y = −4.
   **Jaanch:** p(4/3) = 3(4/3) − 4 = 0 ✅

2. Values x = −3 se 5 tak: 7, 0, −5, −8, −9, −8, −5, 0, 7.
   (a) Zero **−2 aur 4** (jahan value 0 hai).
   (b) Sabse chhoti value −9 x = 1 par, aur p(0) = p(2) = −8 mirror hain. **Vertex (1, −9), axis x = 1**. (−2 aur 4 ka beech (−2 + 4)/2 = 1 bhi yahi hai.)
   (c) a = 1 > 0, to **upar khulti** hai.
   (d) p(0) = **−8**, to y-intercept (0, −8).
   **Jaanch:** (x + 2)(x − 4) = x² − 4x + 2x − 8 = x² − 2x − 8 ✅

3. Values x = −1, 0, 1, 2, 3: 8, −3, −8, −7, 0. p(3) = 0, to 3 ek zero hai. p(−1) = 8 > 0 aur p(0) = −3 < 0, to doosra zero −1 aur 0 ke beech hai. Factorise: 3x² − 8x − 3 = 3x² − 9x + x − 3 = 3x(x − 3) + 1(x − 3) = (3x + 1)(x − 3), to zero **−1/3 aur 3**.
   **Jaanch:** p(−1/3) = 3/9 + 8/3 − 3 = 1/3 + 8/3 − 3 = 0 ✅ aur −1/3 ka −1 aur 0 ke beech hona ✅

4. x² ka coefficient dekho.
   (a) 3 > 0: **upar**.
   (b) −1 < 0: **neeche**.
   (c) x − 2x² = −2x² + x, coefficient −2: **neeche**.
   (d) 1 + 2x + 3x² = 3x² + 2x + 1, coefficient 3: **upar**.

5. Values x = −3 se 3 tak: −5, 0, 3, 4, 3, 0, −5. Zero **−2 aur 2**, yaani **2 zero**. a = −1 < 0, to ulte U ki parabola, vertex **(0, 4)**, jo sabse **upar** ka point hai (baaki sab values 4 se kam).
   **Jaanch:** 4 − x² = (2 − x)(2 + x): 2 aur −2 par 0 ✅

6. x = −8, −7, −6, −5, −4 par values 4, 1, 0, 1, 4. Graph x-axis ko **(−6, 0)** par chhoota hai, zero −6. p(x) = x² + 12x + 36 = **(x + 6)²**, aur square kabhi negative nahi hota, to p(x) ≥ 0 aur graph x-axis ke neeche nahi jaata.
   **Jaanch:** (x + 6)² = x² + 12x + 36 ✅ aur p(−6) = 36 − 72 + 36 = 0 ✅

7. x = 1, 2, 3, 4, 5 par values 6, 3, 2, 3, 6. Koi value 0 nahi, graph x-axis ko nahi milta, to **0 zero**. p(2) = p(4) = 3 se axis x = 3, aur vertex **(3, 2)**, jo x-axis se upar hai. Pakka karne ke liye: x² − 6x + 11 = (x − 3)² + 2 ≥ 2.
   **Jaanch:** (x − 3)² + 2 = x² − 6x + 9 + 2 = x² − 6x + 11 ✅

8. p(−2) = 1 > 0 aur p(−1) = −3 < 0, to ek crossing **−2 aur −1 ke beech**. p(2) = −3 < 0 aur p(3) = 1 > 0, to doosri **2 aur 3 ke beech**. Do jagah sign badla, to **2 zero**. Aur zyada nahi: quadratic hai, zyada se zyada 2 zero. p(0) = p(1) = −5 mirror hain, to axis **x = 1/2**.
   **Jaanch:** p(−3) = p(4) = 7 aur p(−2) = p(3) = 1: mirror x = 1/2 par ✅ (1/2 se 7/2 door dono)

9. Values x = −3 se 3: 0, 8, 6, 0, −4, 0, 18. Zero **−3, 0, 2** (teen zero). Factors: x + 3, x, x − 2. (Cubic ke zyada se zyada 3 zero: teeno mil gaye.)
    **Jaanch:** x(x + 3)(x − 2) = x(x² + x − 6) = x³ + x² − 6x ✅

10. Values x = −2 se 2: −16, −5, 0, 5, 16. Graph x-axis ko sirf **x = 0** par paar karta hai. x³ + 4x = x(x² + 4), aur x² + 4 ≥ 4 kabhi 0 nahi hota, to doosra zero nahi. **Ek zero.**
    **Jaanch:** x(x² + 4) = x³ + 4x ✅

11. Zero −7 aur 3 hain, to factor theorem se **x + 7** aur **x − 3** factor hain. x − 7 aur x + 3 nahi (7 aur −3 zero nahi hain).
    **Jaanch:** (x + 7)(x − 3) = x² − 3x + 7x − 21 = x² + 4x − 21 ✅. p(−7) = 49 − 28 − 21 = 0 ✅ aur p(3) = 9 + 12 − 21 = 0 ✅

12. (a) h = 8t − t²: t = 0 se 8 tak: 0, 7, 12, 15, 16, 15, 12, 7, 0.
    (b) h = 0 par t = **0 aur 8**: gend 0 s par zameen se uthi aur 8 s par wapas aayi.
    (c) Sabse badi value **16 m**, **t = 4 s** par (beech ka point, 0 aur 8 ka beech).
    (d) t² ka coefficient −1 < 0, to parabola ulte U ki hai, vertex sabse upar.
    **Jaanch:** h(4) = 32 − 16 = 16 ✅ aur t(8 − t) = 8t − t², jo t = 0 aur 8 par 0 hai ✅

13. (a) **True ✅.** Jaise (x + 6)² x = −6 par x-axis ko chhoota hai (Q6).
    (b) **False.** Cubic ke dono sire ulti taraf jaate hain, to graph x-axis ko kam se kam ek baar paar karta hai.
    (c) **True ✅.** Zero a hai to (x − a) factor hai: factor theorem.
    (d) **False.** Us point ka y-coordinate hamesha 0 hota hai; **x-coordinate** zero hai.
    (e) **False.** −x² − 3 ki a < 0 hai par uska graph x-axis ke neeche hi rehta hai: 0 zero.

---

Shabaash! Ab tum kisi bhi polynomial ka table banakar graph kheench sakte ho, aur graph ko dekhkar bata sakte ho ki kitne zero hain aur kahan: x-axis par kaata, chhua ya paas se bhi nahi guzra. Dhyan rakhna: zero hamesha x-axis wale point ka x hai, y-axis wala nahi.

**Aage kya?** Topic 2 (Quadratic Ke Zeros Aur Coefficients) mein hum ek dilchasp sawaal poochenge: quadratic ke do zero ko jodo aur guna karo, to kya wo polynomial ke coefficients se judte hain? Aur kya hum zero dhundhe bina hi ye pata laga sakte hain?
