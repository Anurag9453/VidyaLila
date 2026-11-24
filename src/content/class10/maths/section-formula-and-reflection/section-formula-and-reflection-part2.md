# Chapter: Section Formula and Reflection (Part 2)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [section-formula-and-reflection.md](section-formula-and-reflection.md) se aage chalti hai** (Topic 1: ratio m : n dekar beech ka point nikalna). Chapter ki shuruaat: [section-formula-and-reflection.md](section-formula-and-reflection.md). Purani baatein: [distance-formula-part4.md](../../../class9/maths/distance-formula/distance-formula-part4.md) (Class 9 ka Mid-point Formula), [quadrilaterals.md](../../../class9/maths/quadrilaterals/quadrilaterals.md) (parallelogram ke diagonals), [ratio-and-proportion.md](../ratio-and-proportion/ratio-and-proportion.md) (ratio).
> **Topics covered in this file:**
> 2. Section Formula Se Kaam: Ratio, Unknown Aur Parallelogram

---

# Topic 2: Section Formula Se Kaam: Ratio, Unknown Aur Parallelogram

Topic 1 mein tumne section formula seekha: agar P segment AB ko ratio m : n mein baante (yaani AP : PB = m : n), to P ke coordinates mil jaate hain. Wahan sawaal tha "ratio maloom hai, point batao". Is topic mein hum **ulta** bhi karenge: point maloom hai, ratio batao. Kabhi ek coordinate gayab hoga, kabhi ye pata karna hoga ki koi point line par hai bhi ya nahi, aur kabhi parallelogram ka chautha corner dhoondhna hoga. Formula wahi rahega, bas hum use alag alag taraf se ghumayenge.

---

## Idhant ka trek map

Idhant aur uski Didi school ke saath ek hiking trail par jaane wale hain. Papa ne trail ka map ek grid par banaya hai (map par 1 khana = 1 km). Trail Base Camp A(−6, −2) se shuru hoti hai aur Top Camp B(8, 5) par khatam. Map par beech mein ek rest hut P bhi bana hai, aur wo grid par (0, 1) par hai.

Idhant ne map dekhkar poocha, "Didi, hut raste ka kitna hissa door hai? Kya wo A se B tak ke raste ko kisi ratio mein baantti hai?"

Didi ne kaha, "Ab tak hum ratio se point nikaalte aaye hain. Aaj ulta karte hain: point P saamne hai, **ratio nikaalo**. Bas ratio ko ek anjaane number r se likh do."

```
  6 .   .   .   .   .   .   .   :   .   .   .   .   .   .   .   .   .
  5 .   .   .   .   .   .   .   :   .   .   .   .   .   .   .   B   .
  4 .   .   .   .   .   .   .   :   .   .   .   .   .   .   .   .   .
  3 .   .   .   .   .   .   .   :   .   .   .   .   .   .   .   .   .
  2 .   .   .   .   .   .   .   :   .   .   .   .   .   .   .   .   .
  1 .   .   .   .   .   .   .   P   .   .   .   .   .   .   .   .   .
  0 ----------------------------+------------------------------------
 -1 .   .   .   .   .   .   .   :   .   .   .   .   .   .   .   .   .
 -2 .   A   .   .   .   .   .   :   .   .   .   .   .   .   .   .   .
 -3 .   .   .   .   .   .   .   :   .   .   .   .   .   .   .   .   .
   -7  -6  -5  -4  -3  -2  -1   0   1   2   3   4   5   6   7   8   9
```

> **Figure 2.1** – Idhant ka trek map. Y-axis ':' se, x-axis '-' se aur origin '+' se dikhaya gaya hai. Base Camp A(−6, −2), Top Camp B(8, 5) aur rest hut P(0, 1) (P y-axis par baitha hai, isliye wahan ':' ki jagah P hai). Figure naap ke hisaab se nahi hai, aur AB ki seedhi trail sketch mein nahi kheenchi gayi.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **r : 1 (anjaana ratio)** | Jab ratio maloom na ho, to AP : PB ko r : 1 likhte hain. Yaani AP, PB ka r guna hai. r ko equation se nikaalte hain, phir saaf ratio bana lete hain | r = 3/4 ka matlab 3/4 : 1, jo 3 : 4 ke barabar hai |
| **Axis ki shart** | Agar point x-axis par hai to uska y = 0; agar y-axis par hai to uska x = 0 | x-axis par point (7, 0); y-axis par point (0, −2) |
| **r ka chinh** | r positive ho to P segment AB ke beech mein hai. r negative aaye to P segment ke bahar, seedhi line ke aage ya peeche | Part B ka Example 5 |
| **Barabar hisson mein baantna** | Segment ko aise points se kaatna ki saare tukde ek jaise lambe hon. 7 barabar hisson ke liye 6 points chahiye | Part E mein trail ke 6 huts |
| **Saamne ke vertex** | Parallelogram ABCD mein A aur C, B aur D. Inhe jodne waali lines diagonals hain | ABCD mein AC aur BD diagonals hain |

---

## Yaad kar lo

- **Topic 1 ka section formula:** P(x, y) agar AB ko ratio m : n mein baante (AP : PB = m : n), to x = (m x₂ + n x₁)/(m + n) aur y = (m y₂ + n y₁)/(m + n). Yahan A(x₁, y₁) pehla point hai aur B(x₂, y₂) doosra.
- **Class 9 ka Mid-point Formula** ([distance-formula-part4.md](../../../class9/maths/distance-formula/distance-formula-part4.md)): "M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)". Ye section formula ka ratio 1 : 1 wala case hai.
- **Parallelogram:** Class 9 mein dekha tha ki parallelogram ke diagonals ek doosre ko bisect karte hain ([quadrilaterals.md](../../../class9/maths/quadrilaterals/quadrilaterals.md)), aur Class 9 ke Topic 4 ne iska use chautha vertex nikaalne mein bhi kiya tha.

Is topic mein letters har example mein naye hain: A, B, P wahi rehte hain, par unke coordinates har example mein badal jaate hain. Unknown ratio ke liye r, aur gayab coordinates ke liye h aur t use honge.

---

## Part A: Point maloom hai, ratio nikaalo

### Kyun: formula ko ulta karna

Topic 1 ka formula r : 1 ke liye likho (m = r aur n = 1):

x = (r x₂ + x₁)/(r + 1)

Isse r nikaalna ek chhoti si algebra hai:

- x (r + 1) = r x₂ + x₁
- r x − r x₂ = x₁ − x
- r (x − x₂) = x₁ − x
- r = (x₁ − x)/(x − x₂), yaani upar aur neeche ka sign badalkar

> **r = (x − x₁)/(x₂ − x)**   aur isi tarah   **r = (y − y₁)/(y₂ − y)**

Ye formula seedhi baat bhi kehta hai: A se P tak x-direction mein (x − x₁) chale, aur P se B tak (x₂ − x). Similar triangles (Topic 1 ki derivation ka dil) se ye x ke farak AP : PB ke ratio mein hi hote hain. Dhyan do: r mein **upar A se P tak ka farak** aur **neeche P se B tak ka farak** aata hai. Agar x₂ = x (segment seedha khada hai), to x se r nahi niklega, tab y wala formula lo.

Ek coordinate se r mil jaata hai. Doosre coordinate se bhi wahi r aana chahiye, warna P line AB par hai hi nahi. Isliye doosra coordinate hamari Jaanch ban jaata hai.

**Steps:**
1. AP : PB = r : 1 maano.
2. Ek coordinate lekar r = (x − x₁)/(x₂ − x) nikaalo.
3. Doosre coordinate se bhi r nikaalkar match karo.
4. r ko saaf ratio mein likho (r = 3/4 ka matlab 3 : 4).

### Example 1: Idhant ka hut

A(−6, −2), B(8, 5) aur P(0, 1). Hut P, AB ko kis ratio mein baantti hai?

x se: r = (0 − (−6))/(8 − 0) = 6/8 = 3/4
y se: r = (1 − (−2))/(5 − 1) = 3/4

Dono se r = 3/4 aaya, to P sach mein AB par hai. r = 3/4 ka matlab AP : PB = 3/4 : 1 = **3 : 4**.

Story check: hut A se raste ka 3/7 hissa door hai, B se 4/7 hissa. Map par hut dikhti bhi A ki taraf thodi zyada paas hai.

Jaanch: AP = √(6² + 3²) = √45 = 3√5 aur PB = √(8² + 4²) = √80 = 4√5. AP : PB = 3√5 : 4√5 = 3 : 4 ✅

### Example 2: Negative coordinates, ek aur ratio

A(−3, 6), B(4, −8) aur P(−1, 2) hai. P kis ratio mein AB ko baantta hai?

x se: r = (−1 − (−3))/(4 − (−1)) = 2/5
y se: r = (2 − 6)/(−8 − 2) = (−4)/(−10) = 2/5

r = 2/5 ka matlab **AP : PB = 2 : 5**.

Jaanch: AP = √(2² + 4²) = √20 = 2√5 aur PB = √(5² + 10²) = √125 = 5√5. AP : PB = 2 : 5 ✅

Dhyan do: y mein (2 − 6) negative aaya aur (−8 − 2) bhi negative. Dono negative the, isliye r positive nikla. Sign hamesha sambhaal ke likho.

---

## Part B: Axis kisi segment ko kis ratio mein baantti hai?

### Kyun: ek coordinate pehle se pata hai

Maan lo trail ek nehar ko cross karti hai, aur nehar map ki x-axis par hai. Jahan trail x-axis ko chhoo rahi hai, wahan point P ka **y = 0** hai. Ratio pata nahi, par ye ek baat pata hai. Section formula ke y wale hisse mein y = 0 rakho:

(r y₂ + y₁)/(r + 1) = 0, to r y₂ + y₁ = 0

> **x-axis ke liye:** r = −y₁/y₂    **y-axis ke liye:** r = −x₁/x₂

Ye r = (y − y₁)/(y₂ − y) mein y = 0 rakhne se bhi aata hai: r = (0 − y₁)/(y₂ − 0). Mil gaya ratio, phir x = (r x₂ + x₁)/(r + 1) se point.

**r ka chinh:** agar A aur B x-axis ke **dono taraf** hon (ek ka y positive, doosre ka negative), to −y₁/y₂ positive aata hai, aur trail axis ko A aur B ke beech mein hi cross karti hai. Agar dono ek hi taraf hon, to r negative aata hai (Example 5).

### Example 3: Nehar par pul (x-axis)

Trail A(−8, 4) se B(1, −5) tak jaati hai. Nehar x-axis par hai. Pul kahan banega aur wo trail ko kis ratio mein baantta hai?

```
  5 .   .   .   .   .   .   .   .   .   :   .   .
  4 .   A   .   .   .   .   .   .   .   :   .   .
  3 .   .   .   .   .   .   .   .   .   :   .   .
  2 .   .   .   .   .   .   .   .   .   :   .   .
  1 .   .   .   .   .   .   .   .   .   :   .   .
  0 --------------------P---------------+--------
 -1 .   .   .   .   .   .   .   .   .   :   .   .
 -2 .   .   .   .   .   .   .   .   .   :   .   .
 -3 .   .   .   .   .   .   .   .   .   :   .   .
 -4 .   .   .   .   .   .   .   .   .   :   .   .
 -5 .   .   .   .   .   .   .   .   .   :   B   .
 -6 .   .   .   .   .   .   .   .   .   :   .   .
   -9  -8  -7  -6  -5  -4  -3  -2  -1   0   1   2
```

> **Figure 2.2** – A(−8, 4) x-axis ke upar hai aur B(1, −5) neeche, isliye AB x-axis ko beech mein kaategi, point P par. Figure naap ke hisaab se nahi hai.

Kyunki P x-axis par hai, y = 0.
r = −y₁/y₂ = −4/(−5) = 4/5, to **AP : PB = 4 : 5**.
x = (r x₂ + x₁)/(r + 1) = ((4/5)(1) + (−8))/(9/5) = (4/5 − 40/5)/(9/5) = (−36/5)/(9/5) = −4

**P = (−4, 0)**. Figure mein P x-axis par baitha hai, A aur B ke beech.

Jaanch: AP = √(4² + 4²) = √32 = 4√2 aur PB = √(5² + 5²) = √50 = 5√2. AP : PB = 4 : 5 ✅ Aur P ka y sach mein 0 hai ✅

### Example 4: Seedhi sadak (y-axis)

Ek pagdandi A(−5, −1) se B(2, 6) tak jaati hai aur ek seedhi sadak y-axis ke saath saath chalti hai. Pagdandi sadak ko kahan aur kis ratio mein kaatti hai?

Point y-axis par hai, to x = 0.
r = −x₁/x₂ = −(−5)/2 = 5/2, to **AP : PB = 5 : 2**.
y = (r y₂ + y₁)/(r + 1) = ((5/2)(6) + (−1))/(7/2) = (15 − 1)/(7/2) = 14 × 2/7 = 4

**P = (0, 4)**.

Jaanch: AP = √(5² + 5²) = √50 = 5√2 aur PB = √(2² + 2²) = √8 = 2√2. AP : PB = 5 : 2 ✅

### Example 5: r negative aaye to?

A(−3, 2) aur B(5, 6). x-axis ye segment ko kis ratio mein baantti hai?

r = −y₁/y₂ = −2/6 = **−1/3**.

r negative hai. Matlab A aur B dono x-axis ke upar (ek hi taraf) hain, to AB segment x-axis tak pahunchta hi nahi. Formula se x = (r x₂ + x₁)/(r + 1) = ((−1/3)(5) − 3)/(2/3) = (−14/3)/(2/3) = −7, yaani point (−7, 0) milta hai. Wo AB ki **seedhi line ko aage badhane par** milta hai, A ke peeche (A, P aur B ke beech mein nahi). Aise "bahar se baantna" ki baat aage ki class mein hogi. Abhi yaad rakho: **r negative ho to P segment AB ke andar nahi hai.**

Jaanch: P(−7, 0) se A(−3, 2) tak ka farak (4, 2) hai aur P se B(5, 6) tak (12, 6). A raste mein P aur B ke beech aa gaya, yaani P bahar hai ✅

---

## Part C: Gayab coordinate

### Kyun: ek hi equation ek anjaana nikaal deti hai

Section formula do equations deta hai: x wali aur y wali. Agar ek anjaana ek hi coordinate mein hai, to us coordinate ki equation use hi nikaal degi. Doosri equation Jaanch ban jaati hai.

### Example 6: Gayab y-coordinate

P(−1, −1) segment AB ko 3 : 4 mein baantta hai (AP : PB = 3 : 4). A(−4, 2) aur B(3, h) hain. h nikaalo.

x se pehle confirm karo ki ratio theek hai: (3 × 3 + 4 × (−4))/7 = (9 − 16)/7 = −1. Ye P ka x hai, to ratio ka match ho gaya.
y se: (3h + 4 × 2)/7 = −1, to 3h + 8 = −7, 3h = −15, **h = −5**.

Jaanch: y = (3 × (−5) + 4 × 2)/7 = (−15 + 8)/7 = −1 ✅ To B = (3, −5).

### Example 7: Point axis par ho, to gayab coordinate

Pagdandi A(−1, −6) se B(h, 8) tak hai. Ek hut P, AB ko 1 : 6 mein baantti hai (AP : PB = 1 : 6) aur wo y-axis par hai. h aur P nikaalo.

y-axis par hone se P ka x = 0:
(1 × h + 6 × (−1))/7 = 0, to h − 6 = 0, **h = 6**.
Ab y: (1 × 8 + 6 × (−6))/7 = (8 − 36)/7 = −4

**h = 6 aur P = (0, −4)**.

Jaanch: B = (6, 8) lo. AP = √(1² + 2²) = √5 aur PB = √(6² + 12²) = √180 = 6√5. AP : PB = 1 : 6 ✅

### Example 8: Gayab number aur mid-point

Trail ke ek hisse ke sire (t, −3) aur (5, h) hain. Beech mein ek hut (1, 2) par hai, jo mid-point hai (ratio 1 : 1). t aur h nikaalo.

x: (t + 5)/2 = 1, to t + 5 = 2, **t = −3**.
y: (−3 + h)/2 = 2, to −3 + h = 4, **h = 7**.

Jaanch: sire (−3, −3) aur (5, 7) hain. ((−3 + 5)/2, (−3 + 7)/2) = (1, 2) ✅

---

## Part D: Kya P line AB par hai? (Section formula se collinearity)

### Kyun: Class 9 ki jaanch ka naya tareeka

Class 9 mein teen points ke collinear hone ki jaanch doori jodkar ki thi. Ab ek aur tareeka hai: **x se r nikaalo, y se r nikaalo.** Agar dono r barabar aaye, to P line AB par hai. Agar alag aaye, to nahi. Agar dono barabar hon par negative hon, to P line AB par hai par segment ke bahar.

### Example 9: Do points, ek line

A(−5, 7), B(3, −1). Kya P(−4, 6) AB par hai? Kya Q(−2, 5) AB par hai?

```
  8 .   .   .   .   .   .   :   .   .   .   .
  7 .   A   .   .   .   .   :   .   .   .   .
  6 .   .   P   .   .   .   :   .   .   .   .
  5 .   .   .   .   Q   .   :   .   .   .   .
  4 .   .   .   .   .   .   :   .   .   .   .
  3 .   .   .   .   .   .   :   .   .   .   .
  2 .   .   .   .   .   .   :   .   .   .   .
  1 .   .   .   .   .   .   :   .   .   .   .
  0 ------------------------+----------------
 -1 .   .   .   .   .   .   :   .   .   B   .
 -2 .   .   .   .   .   .   :   .   .   .   .
   -6  -5  -4  -3  -2  -1   0   1   2   3   4
```

> **Figure 2.3** – A(−5, 7), P(−4, 6), Q(−2, 5) aur B(3, −1). P aur Q dono A ke paas dikhte hain, par sirf ek line AB par baitha hai. Figure naap ke hisaab se nahi hai.

**P(−4, 6):**
x se: r = (−4 − (−5))/(3 − (−4)) = 1/7
y se: r = (6 − 7)/(−1 − 6) = (−1)/(−7) = 1/7
Dono barabar aur positive, to **P, AB par hai** aur AP : PB = 1 : 7.

**Q(−2, 5):**
x se: r = (−2 − (−5))/(3 − (−2)) = 3/5
y se: r = (5 − 7)/(−1 − 5) = (−2)/(−6) = 1/3
3/5 ≠ 1/3, to **Q, AB par nahi hai**.

Jaanch (P): 1 : 7 ke liye section formula se ((1 × 3 + 7 × (−5))/8, (1 × (−1) + 7 × 7)/8) = (−32/8, 48/8) = (−4, 6) ✅
Jaanch (Q): agar Q segment par hota to r = 3/5 se y = ((3/5)(−1) + 7)/(8/5) = (−3 + 35)/8 = 4 aata, par Q ka y 5 hai. Q line par nahi ✅

---

## Part E: Segment ko barabar hisson mein baantna

### Kyun: rest huts ek jaise faasle par

Idhant ke trek ke doosre din Papa ne ek trail banayi: Camp A(−7, 5) se Camp B(7, −2) tak, aur raste mein **6 rest huts** barabar faasle par. 6 huts raste ko 7 barabar hisson mein baant dete hain. Pehli hut A se 1 hissa door, doosri 2 hisse door, aur aise hi chhathi 6 hisse door. Yaani hut number j ke liye **AP : PB = j : (7 − j)**.

### Example 10: 6 huts ke coordinates

Hut 1 (1 : 6): x = (1 × 7 + 6 × (−7))/7 = (7 − 42)/7 = −5, y = (1 × (−2) + 6 × 5)/7 = 28/7 = 4. To **(−5, 4)**.
Hut 2 (2 : 5): x = (2 × 7 + 5 × (−7))/7 = −21/7 = −3, y = (2 × (−2) + 5 × 5)/7 = 21/7 = 3. To **(−3, 3)**.

Ek pattern dikha: hut 1 se hut 2 tak x mein +2 aur y mein −1. Raste ke 7 barabar hisse hain aur A se B tak x mein 7 − (−7) = 14 ka farak hai, y mein −2 − 5 = −7 ka. Ek hisse ka kadam (14/7, −7/7) = (2, −1) hai. Isliye har agli hut pichli hut se (2, −1) aage:

| Hut | AP : PB | Coordinates |
|---|---|---|
| 1 | 1 : 6 | (−5, 4) |
| 2 | 2 : 5 | (−3, 3) |
| 3 | 3 : 4 | (−1, 2) |
| 4 | 4 : 3 | (1, 1) |
| 5 | 5 : 2 | (3, 0) |
| 6 | 6 : 1 | (5, −1) |

Story check: hut 5 ka y = 0 hai, yaani wo x-axis par hai. Map par bhi wo x-axis par baithi dikhti hai, aur baaki huts A se B tak seedhi qataar mein hain.

Jaanch: x-axis wali shart se r = −y₁/y₂ = −5/(−2) = 5/2, yaani 5 : 2, aur ye hut 5 ka ratio hi hai ✅ Aur har kadam (2, −1) ki lambai √5 hai; AB = √(14² + 7²) = √245 = 7√5, to 7 kadam × √5 = 7√5 ✅

---

## Part F: Parallelogram ka chautha corner

### Kyun: do diagonals, ek hi beech ka point

Parallelogram ABCD mein A aur C saamne ke vertex hain, B aur D bhi. Diagonals AC aur BD ek doosre ko bisect karte hain (Class 9). To dono ka mid-point ek hi point O hai. Mid-point ratio 1 : 1 wala section hai, to O ek hi point hai jo AC ko bhi aur BD ko bhi 1 : 1 mein baantta hai. Teen vertex maloom hon to **AC ka mid-point** nikaalo aur use **BD ke mid-point** ke barabar rakho. D apne aap mil jaata hai.

Shortcut: D = A + C − B, yaani D ka x = x_A + x_C − x_B aur y bhi isi tarah. (Ye mid-points ke barabar hone se hi nikla hai.)

Dhyan do: vertex ABCD **is order** mein hain, to AC aur BD diagonals hain. Agar kisi sawaal mein order nahi diya, to teen alag parallelogram ban sakte hain. Is topic mein order hamesha diya hoga.

### Example 11: Teen vertex diye hain

ABCD parallelogram hai, A(−5, 1), B(−1, −4), C(6, −1). D nikaalo.

```
  5 .   .   .   .   .   .   :   .   .   .   .   .   .   .
  4 .   .   .   .   .   .   :   .   D   .   .   .   .   .
  3 .   .   .   .   .   .   :   .   .   .   .   .   .   .
  2 .   .   .   .   .   .   :   .   .   .   .   .   .   .
  1 .   A   .   .   .   .   :   .   .   .   .   .   .   .
  0 ------------------------+----------------------------
 -1 .   .   .   .   .   .   :   .   .   .   .   .   C   .
 -2 .   .   .   .   .   .   :   .   .   .   .   .   .   .
 -3 .   .   .   .   .   .   :   .   .   .   .   .   .   .
 -4 .   .   .   .   .   B   :   .   .   .   .   .   .   .
 -5 .   .   .   .   .   .   :   .   .   .   .   .   .   .
   -6  -5  -4  -3  -2  -1   0   1   2   3   4   5   6   7
```

> **Figure 2.4** – A(−5, 1), B(−1, −4), C(6, −1) aur D(2, 4): ABCD ghoomte hue kram mein. Figure naap ke hisaab se nahi hai.

AC ka mid-point = ((−5 + 6)/2, (1 + (−1))/2) = (1/2, 0)
Maan lo D = (x, y). BD ka mid-point = ((−1 + x)/2, (−4 + y)/2) = (1/2, 0)
−1 + x = 1, to **x = 2**. −4 + y = 0, to **y = 4**.

**D = (2, 4)**.

Jaanch: saamne ki sides barabar honi chahiye. AB: (−5, 1) se (−1, −4) tak farak (4, −5), to AB = √41. DC: (2, 4) se (6, −1) tak farak (4, −5), to DC = √41 ✅ BC: farak (7, 3), AD: farak (7, 3), dono √58 ✅ Shortcut se bhi D = (−5 + 6 − (−1), 1 + (−1) − (−4)) = (2, 4) ✅

### Example 12: Do anjaane ek saath

ABCD parallelogram hai. A(−2, −3), B(3, 1), C(t, 6), D(−4, h) hain. t aur h nikaalo.

AC ka mid-point = ((−2 + t)/2, (−3 + 6)/2) = ((t − 2)/2, 3/2)
BD ka mid-point = ((3 + (−4))/2, (1 + h)/2) = (−1/2, (1 + h)/2)
x ko barabar karo: (t − 2)/2 = −1/2, to t − 2 = −1, **t = 1**.
y ko barabar karo: 3/2 = (1 + h)/2, to 1 + h = 3, **h = 2**.

Jaanch: C = (1, 6) aur D = (−4, 2) lo. AB ka farak (5, 4) aur DC ka farak (1 − (−4), 6 − 2) = (5, 4) ✅ AD ka farak (−2, 5) aur BC ka farak (1 − 3, 6 − 1) = (−2, 5) ✅

---

## Aam galtiyan (bachke rehna)

### Galti 1: x-axis par hone ka matlab x = 0 samajhna

**x-axis par** point ka **y = 0** hota hai (x kuch bhi ho sakta hai). x = 0 to y-axis par hota hai.

Demo: trail A(4, −5) se B(−2, 1) tak hai, aur x-axis kitne ratio mein kaatti hai? Ek student ne x = 0 rakha:
(r × (−2) + 4)/(r + 1) = 0, to −2r + 4 = 0, r = 2.
Phir y = (2 × 1 + (−5))/3 = −1, to point (0, −1) mila. Par (0, −1) x-axis par nahi hai: uska y 0 nahi, −1 hai.

Sahi: y = 0 rakho. r = −y₁/y₂ = −(−5)/1 = 5, to AP : PB = 5 : 1, aur x = (5 × (−2) + 4)/6 = −1. **P = (−1, 0)**.

Jaanch: P(−1, 0) se AP = √(5² + 5²) = √50 = 5√2 aur PB = √(1² + 1²) = √2. AP : PB = 5 : 1 ✅ Aur P ka y = 0 hai, to x-axis par hai ✅

### Galti 2: r : 1 ko 1 : r padh lena (ratio ulta)

r = (x − x₁)/(x₂ − x) mein **upar A se P tak** aur **neeche P se B tak**. Agar upar neeche ulat gaye, to ratio ulta aa jaata hai.

Demo: A(−7, −3), B(8, 2) aur P(5, 1) hai. Ek student ne r = (x₂ − x)/(x − x₁) = (8 − 5)/(5 − (−7)) = 3/12 = 1/4 likha aur kaha "AP : PB = 1 : 4".

Sahi: r = (x − x₁)/(x₂ − x) = (5 − (−7))/(8 − 5) = 12/3 = 4, to **AP : PB = 4 : 1**. P, B ke bahut paas hai, aur ye figure se bhi dikhta hai: A se B tak 15 ka farak hai aur A se P tak 12, yaani raste ka 4/5 hissa.

Jaanch: AP = √(12² + 4²) = √160 = 4√10 aur PB = √(3² + 1²) = √10. AP : PB = 4√10 : √10 = 4 : 1 ✅ (1 : 4 galat tha.)

---

## Quick Recap

- Ratio nikaalne ke liye AP : PB = r : 1 maano. **r = (x − x₁)/(x₂ − x)** (ya y se). Doosre coordinate se Jaanch karo: dono r barabar honge to P line AB par hai.
- **x-axis par y = 0**, to r = −y₁/y₂. **y-axis par x = 0**, to r = −x₁/x₂. r positive ho to P segment ke andar, negative ho to bahar.
- Gayab coordinate: ek equation se anjaana nikalta hai, doosri equation Jaanch banti hai.
- Collinearity: x se r, y se r. Barabar hain to P line AB par hai.
- Segment ko n barabar hisson mein baantne ke liye n − 1 points chahiye. Hut j ke liye AP : PB = j : (n − j).
- Parallelogram ABCD: **AC ka mid-point = BD ka mid-point**. Shortcut: D = A + C − B.
- Do galtiyan: axis par hone ka matlab (x-axis par y = 0), aur ratio ka order (upar A se P, neeche P se B).
- Aage: Topic 3 mein triangle ke teen vertex ke beech ek khaas point, centroid.

---

## Practice Questions

1. Find the ratio in which P(−4, −1) divides the segment joining A(−7, −4) and B(3, 6), that is, find AP : PB.

2. Find the ratio in which the x-axis divides the segment joining A(2, 6) and B(−4, −3). Also find the point where it meets the segment.

3. Find the ratio in which the y-axis divides the segment joining A(−5, −2) and B(3, 6). Also find the point of division.

4. A point P on the segment joining A(−5, 5) and B(7, −1) has x-coordinate 3. Find its y-coordinate.

5. P(4, −2) divides AB in the ratio 4 : 1 (AP : PB = 4 : 1). If A = (−4, −6), find B.

6. The point (1, −2) is the mid-point of the segment joining (t + 1, 4) and (−5, 2h). Find t and h.

7. Check whether the point R(2, 3) lies on the segment joining A(−6, −1) and B(6, 5), and whether S(−2, 0) lies on it. If a point lies on it, give the ratio.

8. A rope bridge joins two towers A(−7, −5) and B(5, 3). Three supports divide the bridge into 4 equal parts. Find the coordinates of the three supports.

9. In the parallelogram PQRS, P = (−4, 3), Q = (1, −2) and R = (6, 1). Find S.

10. Are A(−7, 1), B(−2, −4), C(5, −2), D(0, 3) the vertices of a parallelogram (in this order)? Decide using the mid-points of the diagonals.

11. A rope bridge joins tower T₁(−3, −8) and tower T₂(3, 4). It has 5 pillars that divide the bridge into 6 equal parts. Find the coordinates of the 2nd and the 4th pillar from T₁, and say which of them lies on an axis.

12. A student wanted the ratio in which the x-axis divides A(−4, 6) and B(8, −3). She wrote 8r + (−4) = 0 and got r = 1/2. Find her mistake and the correct ratio and point.

13. True or false? Give a reason.
   (a) The x-axis divides the segment joining (3, 4) and (7, 9) internally.
   (b) If P divides AB in r : 1 with r = 5, then AP is five times PB.
   (c) In a parallelogram ABCD, the mid-point of AC is the same point as the mid-point of BD.

### Answers

1. x se r = (−4 − (−7))/(3 − (−4)) = 3/7. y se r = (−1 − (−4))/(6 − (−1)) = 3/7. Dono barabar. **AP : PB = 3 : 7**.
   Jaanch: 3 : 7 ke liye ((3 × 3 + 7 × (−7))/10, (3 × 6 + 7 × (−4))/10) = (−40/10, −10/10) = (−4, −1) ✅

2. x-axis par y = 0, to r = −y₁/y₂ = −6/(−3) = 2. **AP : PB = 2 : 1**. x = (2 × (−4) + 2)/3 = −2. **Point (−2, 0)**.
   Jaanch: AP = √(4² + 6²) = √52 = 2√13 aur PB = √(2² + 3²) = √13. AP : PB = 2 : 1 ✅

3. y-axis par x = 0, to r = −x₁/x₂ = −(−5)/3 = 5/3. **AP : PB = 5 : 3**. y = (5 × 6 + 3 × (−2))/8 = 24/8 = 3. **Point (0, 3)**.
   Jaanch: AP = √(5² + 5²) = 5√2 aur PB = √(3² + 3²) = 3√2. AP : PB = 5 : 3 ✅

4. x se r = (3 − (−5))/(7 − 3) = 8/4 = 2. y = (2 × (−1) + 5)/3 = 3/3 = **1**. P = (3, 1).
   Jaanch: AP = √(8² + 4²) = √80 = 4√5 aur PB = √(4² + 2²) = √20 = 2√5. AP : PB = 2 : 1 ✅

5. B = (x, y) maano. Ratio 4 : 1 ke liye P ka x = (4x + 1 × (−4))/5 = 4, to 4x − 4 = 20, **x = 6**. P ka y = (4y + 1 × (−6))/5 = −2, to 4y − 6 = −10, **y = −1**. **B = (6, −1)**.
   Jaanch: ((4 × 6 + (−4))/5, (4 × (−1) + (−6))/5) = (20/5, −10/5) = (4, −2) ✅

6. Mid-point ke liye x: ((t + 1) + (−5))/2 = 1, to t − 4 = 2, **t = 6**. y: (4 + 2h)/2 = −2, to 4 + 2h = −4, **h = −4**.
   Jaanch: sire (7, 4) aur (−5, −8) hain. ((7 − 5)/2, (4 − 8)/2) = (1, −2) ✅

7. **R(2, 3):** x se r = (2 − (−6))/(6 − 2) = 8/4 = 2. y se r = (3 − (−1))/(5 − 3) = 4/2 = 2. Dono barabar aur positive, to **R, AB par hai**, ratio **AR : RB = 2 : 1**.
   **S(−2, 0):** x se r = (−2 − (−6))/(6 − (−2)) = 4/8 = 1/2. y se r = (0 − (−1))/(5 − 0) = 1/5. 1/2 ≠ 1/5, to **S, AB par nahi hai**.
   Jaanch (R): 2 : 1 ke liye ((2 × 6 + (−6))/3, (2 × 5 + (−1))/3) = (2, 3) ✅ Jaanch (S): r = 1/2 lene par y = ((1/2)(5) + (−1))/(3/2) = (3/2)/(3/2) = 1, par S ka y 0 hai ✅

8. Chaar barabar hisse ke liye pehle AB ka mid-point M, phir AM ka aur MB ka mid-point. M = ((−7 + 5)/2, (−5 + 3)/2) = (−1, −1). AM ka mid-point = ((−7 − 1)/2, (−5 − 1)/2) = (−4, −3). MB ka mid-point = ((−1 + 5)/2, (−1 + 3)/2) = (2, 1). **Supports (−4, −3), (−1, −1), (2, 1)**.
   Jaanch: ratio 1 : 3 se ((1 × 5 + 3 × (−7))/4, (1 × 3 + 3 × (−5))/4) = (−16/4, −12/4) = (−4, −3) ✅ Ratio 3 : 1 se ((3 × 5 + (−7))/4, (3 × 3 + (−5))/4) = (8/4, 4/4) = (2, 1) ✅

9. PR ka mid-point = ((−4 + 6)/2, (3 + 1)/2) = (1, 2). S = (x, y) ke liye QS ka mid-point ((1 + x)/2, (−2 + y)/2) = (1, 2), to x = 1, y = 6. **S = (1, 6)**.
   Jaanch: P se Q ka farak (5, −5) aur S se R ka farak (6 − 1, 1 − 6) = (5, −5) ✅ Aur P se S ka farak (5, 3), Q se R ka (5, 3) ✅

10. AC ka mid-point = ((−7 + 5)/2, (1 + (−2))/2) = (−1, −1/2). BD ka mid-point = ((−2 + 0)/2, (−4 + 3)/2) = (−1, −1/2). Dono barabar, to **haan, ABCD parallelogram hai**.
    Jaanch: AB ka farak (5, −5) aur DC ka farak (5 − 0, −2 − 3) = (5, −5) ✅ BC ka farak (7, 2) aur AD ka farak (0 − (−7), 3 − 1) = (7, 2) ✅

11. Chhe barabar hisse hain, to kadam = ((3 − (−3))/6, (4 − (−8))/6) = (1, 2). Pillars: (−2, −6), (−1, −4), (0, −2), (1, 0), (2, 2). **2nd pillar (−1, −4), 4th pillar (1, 0)**. 4th pillar x-axis par hai (y = 0). Teesra (0, −2) y-axis par hai, par wo poocha nahi gaya.
    Jaanch: 2nd pillar ratio 2 : 4 se ((2 × 3 + 4 × (−3))/6, (2 × 4 + 4 × (−8))/6) = (−6/6, −24/6) = (−1, −4) ✅ 4th pillar ratio 4 : 2 se ((4 × 3 + 2 × (−3))/6, (4 × 4 + 2 × (−8))/6) = (6/6, 0) = (1, 0) ✅

12. Galti: usne x = 0 rakha (8r − 4 = 0). Par x-axis par **y = 0** hota hai. Sahi: r = −y₁/y₂ = −6/(−3) = 2, to **AP : PB = 2 : 1**, aur x = (2 × 8 + (−4))/3 = 4. **P = (4, 0)**. Uske r = 1/2 se y = ((1/2)(−3) + 6)/(3/2) = 3 aata, yaani point (0, 3), jo x-axis par nahi hai.
    Jaanch: AP = √(8² + 6²) = 10 aur PB = √(4² + 3²) = 5. AP : PB = 2 : 1 ✅

13. (a) **False** ❌. y-coordinates 4 aur 9 dono positive hain, to r = −4/9 negative aata hai: x-axis segment ke andar nahi, bahar milti hai.
    (b) **True** ✅. AP : PB = r : 1 = 5 : 1, to AP = 5 × PB.
    (c) **True** ✅. Parallelogram ke diagonals ek doosre ko bisect karte hain, to dono ka mid-point ek hi hai.

---

Ab tum ratio se point aur point se ratio, dono taraf ka safar kar sakte ho, aur parallelogram ka gayab corner bhi pakad sakte ho. Agli baar kisi trail map ya grid par hut ya pul ka point dikhe, to bas ek anjaana r maano aur kaam shuru kar do.

Agla topic (Topic 3) triangle ka hai: teen vertex wale triangle ke andar ek aisa khaas point hota hai jahan wo cardboard ek pencil ki nok par santulit rehta hai. Us point, centroid, ko section formula se hi pakadte hain.
