# Chapter: Linear Inequalities (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [linear-inequalities.md](linear-inequalities.md) se aage chalti hai** (wahan Topic 1 mein 1-variable, double, system aur modulus inequalities the). Chapter ki shuruaat: [linear-inequalities.md](linear-inequalities.md).
> **Topics covered in this file:**
> 2. Graphical Solution of Linear Inequalities in One and Two Variables

---

# Topic 2: Graphical Solution of Linear Inequalities in One and Two Variables

Topic 1 mein humne 1-variable inequalities ke answers intervals ke roop mein nikaale (jaise x < 3). Number line par ye ek ray ya segment banate hain. Par agar sawaal mein **do variables (x aur y)** aa jaayein — jaise **2x + 3y ≤ 12** — to uska solution set 1D line par nahi, **2D Cartesian plane** par baithta hai! Is topic mein hum dekhenge ki ek seedhi line poore 2D plane ko do **Half-Planes** mein kaise baantti hai, aur **Origin Test** se 5 second mein sahi region kaise shade karte hain.

---

## Nadeem ki basketball court par chalk line

PT period mein Nadeem ne basketball court ke beech ek seedhi chalk line kheenchi, jiska equation tha **2x + 3y = 12**. Teacher ma'am ne poori class ko court par khada karke poocha:
- Jo students theek **chalk line** par khade hain, unke liye 2x + 3y **= 12**.
- Jo students line ke **is paar** (origin ki taraf) khade hain, un sabke liye 2x + 3y **< 12**!
- Jo students line ke **us paar** khade hain, un sabke liye 2x + 3y **> 12**!

Nadeem chaunka: "Ma'am, iska matlab ek bhi student ko check kar lo — jaise corner (0, 0) par 2(0) + 3(0) = 0 < 12 — to poori us side ka pata ek baar mein chal jaata hai!"
"Bilkul!" Ma'am muskuraayi. "Yahi **Half-Plane** aur **Origin Test** ka jaadoo hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Boundary line** | Inequality ke sign ko "=" banakar milne wali seedhi line: ax + by = c | 3x + 2y = 6 |
| **Half-plane** | Kisi line ke ek taraf ka poora 2D kshetra (region) | 3x + 2y > 6 |
| **Open half-plane** | Strict inequality (< ya >): boundary line SHAMIL NAHI (**dashed line** - - -) | 3x + 2y > 6 |
| **Closed half-plane** | Slack inequality (≤ ya ≥): boundary line SHAMIL HAI (**solid line** -----) | 2x + y ≥ 6 |
| **Origin test** | (0, 0) ko inequality mein rakh kar check karna ki origin wala side true hai ya false | 0 + 0 > 6 (False → door shade!) |

---

## Part A: 1-Variable Inequality Ka Number-Line Graph

Real number line par x ke solution ko dikhane ke do pakke symbols (Chapter 1 se yaad!):
- **Strict (< ya >):** endpoint par **khali gola (o)** — endpoint bahar hai.
- **Slack (≤ ya ≥):** endpoint par **bhara dot (●)** — endpoint andar hai.

### Example 1: 1-Variable Inequality ka Number-Line Graph

Hal karo aur number line par dikhao: **7x + 3 < 5x + 9**.

**Hal:**
7x − 5x < 9 − 3 ⟹ 2x < 6 ⟹ **x < 3**, yaani **(−∞, 3)**.

```
   <======================o----------->
   -2    -1     0    1    2    3    4
                             (khali gola: 3 shamil nahi!)
```

> **Figure 2.1** – x < 3 ka 1D number-line graph: 3 par khali gola o aur 3 ke left taraf poori ray shaded.

**Jaanch:** x = 2 par 14 + 3 = 17 < 19 ✅; x = 3 par 24 < 24 false (khali gola!) ✅.

---

## Part B: 2-Variable Linear Inequality Ka 3-Step Graphical Recipe

Kisi bhi 2-variable linear inequality (**ax + by < c**, **≤**, **>**, ya **≥**) ko 2D plane par graph karne ke sirf **3 pakke kadam** hain:

1. **Step 1 (Boundary line banao):** Inequality ko **ax + by = c** banao. Do aasaan points nikalo (x = 0 par y = c/b, aur y = 0 par x = c/a).
   - Agar **< ya >** ho → **Dashed line (- - -)** kheencho (line ke points solution mein nahi hain!).
   - Agar **≤ ya ≥** ho → **Solid line (-----)** kheencho (line ke points solution mein shamil hain!).
2. **Step 2 (Test point rakho — Origin Test!):**
   - Agar line (0, 0) se **NAHI guzarti** (c ≠ 0), to seedha **(0, 0)** ko original inequality mein rakho!
   - Agar line (0, 0) se **guzarti hai** (c = 0), to (0, 0) test nahi kar sakta — koi aur aasaan point jaise **(1, 0)** ya **(0, 1)** rakho!
3. **Step 3 (Shade karo):**
   - Test point **TRUE** de → us **test point wali side** ka poora half-plane shade karo!
   - Test point **FALSE** de → **ulti (opposite) side** ka poora half-plane shade karo!

---

## Part C: Worked Examples (2D Half-Planes)

### Example 2: Strict Inequality (Dashed Line) — 3x + 2y > 6

**3x + 2y > 6** ko 2D plane par graphically hal karo.

**Hal:**
1. **Boundary line:** 3x + 2y = 6.
   - x = 0 ⟹ y = 3 → **(0, 3)**
   - y = 0 ⟹ x = 2 → **(2, 0)**
   Kyunki sign **>** (strict) hai, **(0, 3)** aur **(2, 0)** ko jodti hui **DASHED line** kheencho.
2. **Origin test (0, 0):** 3(0) + 2(0) > 6 ⟹ **0 > 6**, jo **FALSE** hai!
3. **Shading:** Origin se **door (upar-right)** wala open half-plane shade karo!

```
               y
             4 :        # # # #
             3 : o    # # # # #
               :  \ # # # # # #   (3x + 2y > 6: dashed line,
             2 :   \ # # # # #     origin se door shade!)
             1 :    \ # # # #
      ---------+-----o--------- x
             0 : 1   2   3   4
```

> **Figure 2.2** – 3x + 2y > 6 ka open half-plane: (0, 3) aur (2, 0) par dashed boundary, aur origin (0, 0) false hone ke kaaran upar-right hissa shaded.

**Jaanch:** Test point (3, 1) shaded hisse mein: 3(3) + 2(1) = 11 > 6 ✅; (0, 0) bahar: 0 > 6 false ✅.

### Example 3: Slack Inequality (Solid Line) — 2x + y ≥ 6

**2x + y ≥ 6** ko graphically hal karo.

**Hal:**
1. **Boundary line:** 2x + y = 6 → intercepts **(0, 6)** aur **(3, 0)**. Sign **≥** hai, isliye **SOLID line** kheencho.
2. **Origin test (0, 0):** 2(0) + 0 ≥ 6 ⟹ **0 ≥ 6 (FALSE)**.
3. **Shading:** Origin se door (upar-right) wala **closed half-plane** (solid boundary sahit) shade karo!

**Jaanch:** Boundary point (3, 0) par 2(3) + 0 = 6 ≥ 6 ✅; interior point (4, 1) par 9 ≥ 6 ✅.

### Example 4: Vertical aur Horizontal Half-Planes

Graph karo: (i) **3x − 6 ≥ 0** (2D plane mein!), (ii) **y < −2** (2D plane mein!).

**Hal:**
- **(i) 3x − 6 ≥ 0 ⟹ x ≥ 2:**
  Boundary line **x = 2** ek **vertical (khadi) SOLID line** hai (y-axis ke parallel, x = 2 par).
  Origin test (0, 0): 0 ≥ 2 (FALSE) → line x = 2 ke **right side** (x = 2 sahit) shade karo!
- **(ii) y < −2:**
  Boundary line **y = −2** ek **horizontal (leti) DASHED line** hai (x-axis ke parallel, y = −2 par).
  Origin test (0, 0): 0 < −2 (FALSE) → line y = −2 ke **neeche** (boundary chhod kar) shade karo!

**Jaanch:** (i) (5, −10) par x = 5 ≥ 2 ✅; (ii) (10, −3) par y = −3 < −2 ✅.

### Example 5: Jab Line Origin (0, 0) Se Guzre — x − y ≤ 0

**x − y ≤ 0** (yaani y ≥ x) ko graphically hal karo.

**Hal:**
1. **Boundary line:** x − y = 0 ⟹ **y = x** (origin (0, 0) aur (2, 2) se guzarne wali **SOLID** 45° line!).
2. **Test point:** Kyunki line (0, 0) se guzarti hai, Origin Test nahi chalega! Test point **(1, 0)** (line ke right-neeche) rakho:
   1 − 0 ≤ 0 ⟹ **1 ≤ 0 (FALSE)**!
3. **Shading:** (1, 0) ke **ulti taraf** — yaani line y = x ke **upar-left** wala closed half-plane shade karo!

**Jaanch:** Upar-left point (0, 2) rakho: 0 − 2 = −2 ≤ 0 ✅; (2, 2) boundary par 0 ≤ 0 ✅.

---

## Aam galtiyan

1. **Strict (<, >) ke liye solid line aur slack (≤, ≥) ke liye dashed line bana dena:**
   - *Yaad rakhne ki trick:* = ka nishaan neeche laga hai (≤, ≥) to line **solid** (band); = nahi hai (<, >) to line **dashed** (khuli)!
2. **Origin se guzarne wali line (jaise y = 2x) par (0, 0) test point rakh dena:**
   - *Galat kyun:* (0, 0) to khud line par baitha hai, wo 0 = 0 dega aur ye nahi batayega ki kaun si side shade karni hai! Hamesha line ke **bahar** ka point jaise (1, 0) ya (0, 1) chuno.
3. **Bina test point rakhe "< matlab neeche" ya "> matlab upar" rat lena:**
   - *Galat kyun:* **2x − 3y > 6** mein sign > hai par y ka coefficient negative hai — isme solution line ke **neeche** hota hai (test (0, 0): 0 > 6 false → right-neeche)! Hamesha test point se check karo.

---

## Quick Recap

- **1D graph:** <, > par khali gola o; ≤, ≥ par bhara dot ●.
- **2D graph ke 3 kadam:** (1) Boundary line (dashed for <, >, solid for ≤, ≥), (2) Test point (0, 0) (ya (1, 0) agar line origin se guzre), (3) True side shade karo!

---

## Practice Questions

1. Solve and describe the 1D number-line graph (endpoint circle + direction) for:
   (a) 3x − 2 < 2x + 1
   (b) 5x − 3 ≥ 3x − 5

2. For each 2D inequality, state (i) the boundary line intercepts, (ii) Solid or Dashed, and (iii) whether the shaded half-plane contains the origin (0, 0):
   (a) x + y < 5
   (b) 2x + y ≥ 6
   (c) 3x + 4y ≤ 12

3. Graphically describe the solution region of **2x − 3y > 6** (intercepts, line type, and which side of the line is shaded). Test with the point (4, 0).

4. Graphically describe the solution region of **y + 8 ≥ 2x**. Does (0, 0) lie in the solution region?

5. Graphically describe the solution region of **x − y ≤ 2**. Check whether (3, 1), (0, 0), and (5, 1) belong to the solution region.

6. Graphically describe the solution region of **−3x + 2y ≥ −6**.

7. Graphically describe the solution region of **3y − 5x < 30**.

8. Graphically describe the solution region of the vertical/horizontal inequalities in the 2D plane:
   (a) x > −3    (b) y ≤ 4

9. Graphically describe the solution region of **2x − y ≥ 0** (passing through the origin!). Which test point should you use?

10. Write the linear inequality whose boundary is the dashed line passing through (0, 4) and (2, 0), with the region NOT containing the origin shaded.

11. Check whether the point (−2, 3) lies in the solution region of **4x + 5y < 10**.

12. True or False? Give a one-line reason:
    (a) The boundary line of 2x + 3y < 6 is drawn as a solid line.
    (b) Every point on the line x + y = 4 is a solution of x + y ≥ 4.
    (c) The origin (0, 0) can be used as a test point for 3x − 4y > 0.
    (d) In the 2D plane, x ≥ 0 represents the right half-plane including the y-axis.

### Answers

1. (a) x < 3 → 3 par khali gola, left taraf ray.
   (b) 2x ≥ −2 ⟹ x ≥ −1 → −1 par bhara dot, right taraf ray.

2. (a) Intercepts (0, 5), (5, 0); **Dashed**; 0 < 5 True → **contains origin**.
   (b) Intercepts (0, 6), (3, 0); **Solid**; 0 ≥ 6 False → **does NOT contain origin**.
   (c) Intercepts (0, 3), (4, 0); **Solid**; 0 ≤ 12 True → **contains origin**.

3. Boundary 2x − 3y = 6 → intercepts **(0, −2)** aur **(3, 0)**; **Dashed line**.
   Origin (0, 0): 0 > 6 False → origin se door (**right-neeche**) wala open half-plane shade karo!
   Jaanch: (4, 0) par 2(4) − 0 = 8 > 6 ✅.

4. Boundary 2x − y = 8 → intercepts **(0, −8)** aur **(4, 0)**; **Solid line**.
   Origin (0, 0): 0 + 8 ≥ 0 (8 ≥ 0 True!) → **Haan, (0, 0) solution region mein hai** (upar-left closed half-plane).

5. Boundary x − y = 2 → intercepts **(0, −2)** aur **(2, 0)**; **Solid line**.
   Origin (0, 0): 0 ≤ 2 True → origin ki taraf (upar-left).
   Points check: (3, 1) → 2 ≤ 2 (Andar, boundary par); (0, 0) → 0 ≤ 2 (Andar); (5, 1) → 4 ≤ 2 False (Bahar!).

6. Boundary −3x + 2y = −6 (ya 3x − 2y = 6) → intercepts **(0, −3)** aur **(2, 0)**; **Solid line**.
   Origin (0, 0): 0 ≥ −6 True → origin ki taraf (upar-left closed half-plane).

7. Boundary 3y − 5x = 30 → intercepts **(0, 10)** aur **(−6, 0)**; **Dashed line**.
   Origin (0, 0): 0 < 30 True → origin ki taraf (neeche-right open half-plane).

8. (a) x = −3 par **vertical dashed line**, uske **right side** shaded.
   (b) y = 4 par **horizontal solid line**, uske **neeche** (line sahit) shaded.

9. Boundary y = 2x (origin (0, 0) aur (1, 2) se guzarne wali **Solid line**).
   Test point **(1, 0)** lo: 2(1) − 0 = 2 ≥ 0 True → **(1, 0) wali side** (right-neeche closed half-plane) shade karo!
   Jaanch: (2, 1) par 4 − 1 = 3 ≥ 0 ✅.

10. (0, 4) aur (2, 0) se guzarne wali line: x/2 + y/4 = 1 ⟹ **2x + y = 4**.
    Dashed line aur origin (0, 0) bahar (0 > 4 False!) ⟹ **2x + y > 4**.
    Jaanch: (0, 4) aur (2, 0) par 2x + y = 4 ✅; (0, 0) par 0 > 4 false ✅.

11. 4(−2) + 5(3) = −8 + 15 = **7 < 10** → **Haan**, (−2, 3) solution region mein hai! Jaanch: 7 < 10 ✅.

12. (a) ❌ False: strict < hai, isliye **dashed line**.
    (b) ✅ True: boundary par x + y = 4 hota hai jo x + y ≥ 4 ko satisfy karta hai.
    (c) ❌ False: line 3x − 4y = 0 khud (0, 0) se guzarti hai!
    (d) ✅ True: x ≥ 0 mein y-axis (x = 0) aur uske right ke sabhi points (Q I aur Q IV) aate hain.

---

Ab tum ek single 2-variable linear inequality ka exact half-plane 3 kadam mein bana sakte ho.

**Agle topic mein:** jab 2, 3 ya 4 inequalities **ek saath** laagu hon — **Systems of Linear Inequalities in Two Variables aur Feasible Region**!
