# Chapter: Coordinate Geometry (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [coordinate-geometry-part2.md](coordinate-geometry-part2.md) se aage chalti hai.** (Topic 1 [coordinate-geometry.md](coordinate-geometry.md) mein hai.)
> **Topics covered in this file:**
> 3. Points on the Coordinate Axes

---

# Topic 3: Points on the Coordinate Axes

Topic 2 mein humne seekha tha ki kisi bhi point ke do coordinates hote hain: pehla **abscissa** (x, yaani kitna left ya right) aur doosra **ordinate** (y, yaani kitna upar ya neeche). Diwali mele mein fountain ko origin maan kar Rohan ko (3, 2) aur Priya ko (−2, −1) par dhundha tha. Humne points plot kiye aur dekha ki dono axes milkar plane ko **chaar quadrants** mein baant dete hain, aur har quadrant ka apna sign pattern hota hai.

Par ek sawaal bacha tha: **jo point theek axis ke upar baitha ho, wo kis quadrant mein hai?** Is topic mein hum isi ka jawab dhundhenge. Ye chhota topic hai, par exam mein iske sawaal bahut aate hain.

---

## Shehar ki do badi sadkon ki kahani

Socho ek chhota sa shehar hai jisme do badi sadkein hain:

- **Station Road**, jo seedhi **east se west** jaati hai (left-right).
- **Mandir Road**, jo seedhi **north se south** jaati hai (upar-neeche).

Dono sadkein shehar ke beech **Ghantaghar Chowk** par ek doosre ko kaatti hain.

Ab shehar ka naksha (map) graph paper par banao:
- Station Road = **x-axis**
- Mandir Road = **y-axis**
- Ghantaghar Chowk = **origin (0, 0)**

Dono sadkon ne shehar ko chaar **mohallon** mein baant diya. Yahi chaar quadrants hain.

Ab socho Raju ki chai ki dukaan **Station Road par hi**, chowk se 4 km east mein hai. Raju ki dukaan tak jaane ke liye aap chowk se **sirf east mein 4 km chalte ho**. Na north mudte ho, na south. Yaani:
- Left-right mein chale: **4**
- Upar-neeche chale: **0**

To dukaan ka address hai **(4, 0)**.

Aur ek mazedaar baat. Raju ki dukaan **kisi mohalle mein nahi** hai, kyunki wo to sadak par hai. Sadak do mohallon ki **seema (border)** hai, kisi ek mohalle ka hissa nahi.

Bas, yahi poora topic hai:
- Axis par baitha point **ek coordinate 0** rakhta hai.
- Axis par baitha point **kisi quadrant mein nahi** hota.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Point on the x-axis** | Aisa point jo left-right wali line par hi ho, upar-neeche bilkul nahi gaya | (4, 0), (-3, 0) |
| **Point on the y-axis** | Aisa point jo upar-neeche wali line par hi ho, left-right bilkul nahi gaya | (0, 5), (0, -2) |
| **Origin** | Jahan dono axes kaatte hain, starting point | (0, 0) |
| **Positive x-axis** | Origin ke right wala x-axis ka hissa | (6, 0) |
| **Negative x-axis** | Origin ke left wala x-axis ka hissa | (-6, 0) |
| **Positive y-axis** | Origin ke upar wala y-axis ka hissa | (0, 6) |
| **Negative y-axis** | Origin ke neeche wala y-axis ka hissa | (0, -6) |
| **Distance from an axis** | Point us axis se kitna door hai (hamesha positive ya 0) | (3, -4) x-axis se 4 door hai |

---

## Part A: x-axis par point

Ek point **x-axis par** tab hota hai jab wo **upar ya neeche bilkul na gaya ho.** Yaani uska **y-coordinate (ordinate) = 0** hota hai.

> **x-axis par har point ka roop: (a, 0)**

Yahan a koi bhi number ho sakta hai: positive, negative, fraction, decimal.

**Examples:**

| Point | Kahan hai | Kyun |
|---|---|---|
| (5, 0) | x-axis par, origin se 5 right | y = 0 |
| (-3, 0) | x-axis par, origin se 3 left | y = 0 |
| (2.5, 0) | x-axis par, origin se 2.5 right | y = 0 |
| (-1/2, 0) | x-axis par, origin se aadha unit left | y = 0 |

### Yaad rakhne ki trick

**x-axis par baitha point sirf x bata raha hai.** Uske paas "upar-neeche" batane ko kuch nahi hai, isliye y ki jagah 0.

---

## Part B: y-axis par point

Ek point **y-axis par** tab hota hai jab wo **left ya right bilkul na gaya ho.** Yaani uska **x-coordinate (abscissa) = 0** hota hai.

> **y-axis par har point ka roop: (0, b)**

**Examples:**

| Point | Kahan hai | Kyun |
|---|---|---|
| (0, 4) | y-axis par, origin se 4 upar | x = 0 |
| (0, -6) | y-axis par, origin se 6 neeche | x = 0 |
| (0, 1/2) | y-axis par, origin se aadha unit upar | x = 0 |

Kahani mein, Mandir Road par chowk se 3 km north mein mandir hai. Wahan jaane ke liye aap sirf north chale, east-west bilkul nahi. To mandir ka address **(0, 3)** hai.

### Ek line ki trick (dono axes ke liye)

> **Jis axis par point baitha hai, sirf usi ka coordinate bachta hai. Doosra coordinate 0 hota hai.**

- x-axis par → x bachta hai, y = 0 → **(a, 0)**
- y-axis par → y bachta hai, x = 0 → **(0, b)**

---

## Part C: Origin, jo dono axes par hai

Ghantaghar Chowk dono sadkon par ek saath hai. Isi tarah **origin (0, 0)**:
- x-axis par bhi hai (kyunki y = 0)
- y-axis par bhi hai (kyunki x = 0)

> **Origin ek hi aisa point hai jo dono axes par hota hai.**

---

## Part D: Axes ke positive aur negative hisse

Origin har axis ko do hisson mein kaat deta hai.

```
                    positive y-axis
                        (0, +)
                          ↑
                          |
negative x-axis  ←--------O--------→  positive x-axis
    (-, 0)                |               (+, 0)
                          ↓
                    negative y-axis
                        (0, -)
```

| Hissa | Point ka roop | Example |
|---|---|---|
| Positive x-axis | (a, 0), a positive | (7, 0) |
| Negative x-axis | (a, 0), a negative | (-4, 0) |
| Positive y-axis | (0, b), b positive | (0, 2) |
| Negative y-axis | (0, b), b negative | (0, -9) |

**Dhyan do:** "(-4, 0) negative x-axis par hai." Iska matlab hai ki point x-axis ke **left wale hisse** par hai. Ye nahi ki axis koi alag line hai. x-axis ek hi line hai, bas uske do taraf ke hisse hain.

### Points plot karke dekho

Ye points plot karo: A(-3, 0), B(4, 0), D(0, 2), E(0, -2), aur O(0, 0).

```
                    ↑ y
                  3 +
                  2 •  D(0, 2)
                  1 +
     ←--+--•--+--+--O--+--+--+--•--→ x
       -4 -3 -2 -1  0  1  2  3  4
                 -1 +
                 -2 •  E(0, -2)
                 -3 +
```

- A(-3, 0): x-axis par, origin se 3 left
- B(4, 0): x-axis par, origin se 4 right
- D(0, 2): y-axis par, origin se 2 upar
- E(0, -2): y-axis par, origin se 2 neeche
- O(0, 0): origin

Dekho, saare points **seedhe kisi axis ki line par** baithe hain, kisi khaali jagah (quadrant) mein nahi.

**Plot karne ka tarika:** x-axis wale point ke liye bas x-axis par utna chalo aur wahi ruk jao (upar-neeche nahi jaana). y-axis wale point ke liye bas y-axis par utna upar ya neeche jao.

---

## Part E: Axes par baithe points kisi quadrant mein nahi hote

Topic 2 mein humne dekha tha ki quadrants **axes se ghire hue khaali hisse** hain. Axes un hisson ki **seema** hain.

Jaise do colonies ke beech ki boundary wall kisi ek colony ki nahi hoti, waise hi **axis par baitha point kisi bhi quadrant ka nahi hota.**

| Point | Quadrant? |
|---|---|
| (3, 2) | Quadrant I |
| (3, 0) | **Kisi quadrant mein nahi**, positive x-axis par |
| (0, -5) | **Kisi quadrant mein nahi**, negative y-axis par |
| (0, 0) | **Kisi quadrant mein nahi**, origin |

Isliye exam mein "Which quadrant does (5, 0) lie in?" pucha jaye, to sahi jawab hai: **"It does not lie in any quadrant; it lies on the positive x-axis."**

---

## Part F: Point kahan hai? (Pehchanne ke steps)

Koi bhi point (x, y) do, to ye kram follow karo:

1. **Dono 0 hain?** → **Origin**
2. **Sirf y = 0?** → **x-axis** par (x positive ho to positive x-axis, negative ho to negative x-axis)
3. **Sirf x = 0?** → **y-axis** par (y positive ho to positive y-axis, negative ho to negative y-axis)
4. **Dono 0 nahi?** → kisi **quadrant** mein. Signs dekho (Topic 2 wala sign pattern):

| Signs | Quadrant |
|---|---|
| (+, +) | I |
| (-, +) | II |
| (-, -) | III |
| (+, -) | IV |

### Solved examples

| Point | Kaun sa step lagta hai | Jawab |
|---|---|---|
| (3, 0) | y = 0, x positive | Positive x-axis |
| (0, -7) | x = 0, y negative | Negative y-axis |
| (-2, 5) | Dono non-zero, (-, +) | Quadrant II |
| (0, 0) | Dono 0 | Origin |
| (4, -1) | (+, -) | Quadrant IV |
| (-6, 0) | y = 0, x negative | Negative x-axis |
| (-3, -3) | (-, -) | Quadrant III |
| (0, 9) | x = 0, y positive | Positive y-axis |
| (1/2, 0) | y = 0, x positive | Positive x-axis |
| (7, 7) | (+, +) | Quadrant I |

---

## Part G: Axes ki equations

Ye hissa ek chhota sa bonus hai.

x-axis par **har** point ka y = 0 hai: (1, 0), (-5, 0), (100, 0)... Koi bhi point jiska y = 0 ho, wo x-axis par hi hoga. Isliye:

> **x-axis ki equation: y = 0**
> **y-axis ki equation: x = 0**

Ye ulta lagta hai, par logic seedha hai: **x-axis par jo cheez hamesha fix rehti hai wo y hai (y = 0)**, isliye x-axis ki equation y = 0 hai.

(Agar aapne [Linear Equations in Two Variables](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md) chapter ka Topic 2 padha hai, to wahan x = a aur y = b jaisi lines dekhi hongi. x = 0 aur y = 0 unhi ka khaas case hain. Ye padhna is topic ke liye zaroori nahi hai.)

---

## Part H: Point ki axes se doori (distance)

Topic 2 mein dekha tha ki abscissa (x) point ki y-axis se doori batata hai aur ordinate (y) x-axis se doori, sign ke saath. Yahan bas sign hata kar asli doori lenge.

Socho aap kisi point par khade ho. Aap **x-axis se kitna door** ho? Bas ye dekho ki **aap kitna upar ya neeche ho.**

> **x-axis se doori = y kitna hai (sign hata kar)**
> **y-axis se doori = x kitna hai (sign hata kar)**

Doori kabhi negative nahi hoti. -4 neeche ho ya 4 upar, doori dono mein **4** hi hai. (Isko maths mein |y| likhte hain, matlab "y ka sign hata do".)

### Kahani se

Shehar mein ek ghar hai jiska address (3, 4) hai. Yaani wo chowk se 3 km east aur 4 km north hai.
- **Station Road (x-axis) se doori:** wo sadak se kitna north hai? **4 km**
- **Mandir Road (y-axis) se doori:** wo sadak se kitna east hai? **3 km**

Dhyan do ki **x-axis se doori ke liye y dekhte hain**, x nahi. Kyunki x-axis se door jaane ka matlab hai upar ya neeche jaana, aur upar-neeche y batata hai.

### Examples

| Point | x-axis se doori | y-axis se doori |
|---|---|---|
| (3, 4) | 4 | 3 |
| (-5, -2) | 2 | 5 |
| (6, -8) | 8 | 6 |
| (-3, 0) | **0** (x-axis par hi hai) | 3 |
| (0, 7) | 7 | **0** (y-axis par hi hai) |
| (0, 0) | 0 | 0 |

Axis par baithe point ki **usi axis se doori 0** hoti hai. Ye bilkul samajh mein aata hai: aap sadak par khade ho to sadak se doori 0 hai.

---

## Part I: Anjaan number (unknown) dhundhna

Ye ek bahut common sawaal hai. Rule bas ek hai:
- Point **x-axis par** hai → **y-coordinate = 0** rakho.
- Point **y-axis par** hai → **x-coordinate = 0** rakho.

Phir chhota sa equation solve karo.

**Example 1:** Point (k - 2, 5) y-axis par hai. k nikalo.

y-axis par hai, to x-coordinate = 0.
k - 2 = 0
**k = 2**

Jaanch: point banta hai (0, 5), jo y-axis par hai ✅

**Example 2:** Point (3, 2m + 4) x-axis par hai. m nikalo.

x-axis par hai, to y-coordinate = 0.
2m + 4 = 0
2m = -4
**m = -2**

Jaanch: 2(-2) + 4 = 0, to point (3, 0) hai, jo x-axis par hai ✅

**Example 3:** Point (a + 3, a - 1) x-axis par hai. a nikalo, aur point bhi likho.

y-coordinate = 0: a - 1 = 0, to **a = 1**.
Point: (1 + 3, 0) = **(4, 0)**, jo positive x-axis par hai.

**Example 4:** Point (2p - 6, p + 1) y-axis par hai. p aur point nikalo.

x-coordinate = 0: 2p - 6 = 0, to 2p = 6, **p = 3**.
Point: (0, 3 + 1) = **(0, 4)**, jo positive y-axis par hai.

**Example 5:** Point (k - 4, 2k - 8) dono axes par hai. k nikalo.

Dono axes par sirf origin hota hai, to dono coordinates 0 hone chahiye.
k - 4 = 0 → k = 4
2k - 8 = 0 → k = 4
Dono se ek hi value aayi: **k = 4**, aur point origin (0, 0) hai.

**Example 6:** x-axis par aisa point likho jo y-axis se 5 unit door ho.

x-axis par → (a, 0). y-axis se doori = 5, to a = 5 ya a = -5.
Jawab: **(5, 0) ya (-5, 0)**. Dono sahi hain.

**Example 7:** y-axis par aisa point likho jo origin se 3 unit neeche ho.

**(0, -3)**

---

## Aam galtiyan (bachke rehna)

**Galti 1: (a, 0) aur (0, a) mein ulta likh dena**
x-axis par point ka **y** zero hota hai: (5, 0). Kai students (0, 5) likh dete hain, jo y-axis par hai. Trick yaad rakho: **jis axis par baitha hai, usi ka coordinate bachta hai.**

**Galti 2: Axis wale point ko quadrant mein daal dena**
(5, 0) Quadrant I mein **nahi** hai. Wo positive x-axis par hai. Axis kisi quadrant ka hissa nahi.

**Galti 3: x-axis se doori ke liye x dekh lena**
(3, 4) ki x-axis se doori **4** hai (y), 3 nahi. x-axis se door jaana = upar-neeche jaana = y.

**Galti 4: Doori negative likh dena**
(6, -8) ki x-axis se doori **8** hai, -8 nahi. Doori hamesha positive (ya 0) hoti hai.

**Galti 5: x-axis ki equation x = 0 likh dena**
x-axis ki equation **y = 0** hai. x = 0 to y-axis hai. Socho: x-axis par kya fix hai? y (hamesha 0).

**Galti 6: Origin ko sirf ek axis par maanna**
Origin (0, 0) **dono** axes par hai.

**Galti 7: "Negative x-axis" ko alag line samajhna**
x-axis ek hi line hai. "Negative x-axis" bas uska **origin se left wala hissa** hai.

**Galti 8: Unknown wale sawal mein galat coordinate ko 0 rakhna**
"(k - 2, 5) y-axis par hai" mein **x** ko 0 rakho (k - 2 = 0). Agar galti se y ko 0 rakhoge, to 5 = 0 aayega, jo bematlab hai. Aisa ho to samajh jao ki galat coordinate pakda hai.

---

## Quick Recap

- **x-axis par point:** (a, 0). y = 0, kyunki upar-neeche bilkul nahi gaya.
- **y-axis par point:** (0, b). x = 0, kyunki left-right bilkul nahi gaya.
- **Trick:** jis axis par point hai, usi ka coordinate bachta hai, doosra 0.
- **Origin (0, 0)** dono axes par hai.
- Axes par baithe points **kisi quadrant mein nahi** hote.
- **Positive/negative x-axis:** origin ke right/left. **Positive/negative y-axis:** origin ke upar/neeche.
- **Point kahan hai:** dono 0 → origin; y = 0 → x-axis; x = 0 → y-axis; warna signs se quadrant.
- **Axes ki equations:** x-axis → **y = 0**, y-axis → **x = 0**.
- **Doori:** x-axis se = y (sign hata kar), y-axis se = x (sign hata kar). Hamesha positive ya 0.
- **Unknown:** x-axis par → y = 0 rakho; y-axis par → x = 0 rakho.

---

## Practice Questions

1. Write the coordinates of:
   (a) a point on the x-axis, 6 units to the right of the origin
   (b) a point on the y-axis, 4 units below the origin
   (c) the origin
   (d) a point on the negative x-axis at a distance of 2.5 units from the origin

2. State where each point lies (origin, positive/negative x-axis, positive/negative y-axis, or the quadrant):
   (-7, 0), (0, 3), (0, 0), (5, -5), (0, -1), (-2, -8), (9, 0), (-4, 6)

3. Find the distance of each point from the x-axis and from the y-axis:
   (a) (6, -8)
   (b) (-3, 0)
   (c) (0, -5)

4. If the point (k + 5, 7) lies on the y-axis, find k.

5. If the point (4, 3m - 9) lies on the x-axis, find m.

6. The point (2a - 4, a + 2) lies on the y-axis. Find a and the coordinates of the point.

7. Write the equations of the x-axis and the y-axis.

8. State whether each statement is true or false. Give a reason.
   (a) The point (0, 5) lies on the x-axis.
   (b) The point (-3, 0) lies in the second quadrant.
   (c) The origin lies on both the axes.
   (d) The abscissa of every point on the y-axis is 0.
   (e) The distance of the point (-4, 7) from the y-axis is -4.

9. Plot the points A(-3, 0), B(3, 0) and C(0, 4) on a graph. Join them. What figure do you get? Find the length of AB by counting units on the x-axis.

### Answers

1. (a) **(6, 0)**
   (b) **(0, -4)**
   (c) **(0, 0)**
   (d) **(-2.5, 0)**

2. (-7, 0): **negative x-axis**
   (0, 3): **positive y-axis**
   (0, 0): **origin**
   (5, -5): **Quadrant IV**
   (0, -1): **negative y-axis**
   (-2, -8): **Quadrant III**
   (9, 0): **positive x-axis**
   (-4, 6): **Quadrant II**

3. (a) x-axis se **8**, y-axis se **6**
   (b) x-axis se **0** (x-axis par hi hai), y-axis se **3**
   (c) x-axis se **5**, y-axis se **0** (y-axis par hi hai)

4. y-axis par hai, to x = 0: k + 5 = 0, **k = -5**. Point (0, 7) banta hai.

5. x-axis par hai, to y = 0: 3m - 9 = 0, 3m = 9, **m = 3**. Point (4, 0) banta hai.

6. y-axis par hai, to x = 0: 2a - 4 = 0, **a = 2**. Point: (0, 2 + 2) = **(0, 4)**.

7. x-axis: **y = 0**. y-axis: **x = 0**.

8. (a) **False.** x = 0 hai, to ye y-axis par hai, x-axis par nahi.
   (b) **False.** y = 0 hai, to ye negative x-axis par hai. Axis wala point kisi quadrant mein nahi hota.
   (c) **True.** (0, 0) mein x = 0 aur y = 0 dono hain.
   (d) **True.** y-axis par har point (0, b) jaisa hota hai, to abscissa (x) = 0.
   (e) **False.** Doori kabhi negative nahi hoti. y-axis se doori = x ka sign hata kar = **4**.

9. A aur B x-axis par hain (origin ke dono taraf 3 unit), aur C y-axis par 4 unit upar hai. Teeno ko jodne par ek **triangle** banta hai.
   AB: x-axis par -3 se 3 tak gino: -3 se 0 tak 3 unit, aur 0 se 3 tak 3 unit. **AB = 6 units.**

---

## Chapter wrap-up: Coordinate Geometry

| Topic | Kya seekha |
|---|---|
| **Topic 1: Introduction** | Coordinate geometry kya hai, Cartesian coordinates, ordered pair (order kyun zaroori hai, (a, b) = (c, d) se unknown nikalna), coordinate system, x-axis, y-axis aur origin, aur signs ka convention (right/upar positive, left/neeche negative) |
| **Topic 2: Coordinates of a point and quadrants** | Point ke coordinates: abscissa (x) aur ordinate (y), point padhna aur plot karna, aur chaar quadrants ke sign patterns: I (+, +), II (-, +), III (-, -), IV (+, -); letters (a, b) wale quadrant sawaal, rectangle ka chautha kona, mirror points |
| **Topic 3: Points on the axes** | x-axis par (a, 0), y-axis par (0, b), origin (0, 0) dono par; axis wale points kisi quadrant mein nahi; axes ki equations y = 0 aur x = 0; axes se doori; unknown dhundhna |

Bahut badhiya, aapne Coordinate Geometry ki neev pakki kar li hai. Ab graph paper par koi bhi point mile, aap turant bata sakte ho ki wo kahan baitha hai.

*(Aage ki classes mein: do points ke beech ki doori nikalne ka formula (distance formula) aur do points ke beech wala point nikalna (section formula) aate hain. Wo sab isi neev par bante hain.)*
