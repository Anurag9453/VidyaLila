# Chapter: Linear Inequalities (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [linear-inequalities-part2.md](linear-inequalities-part2.md) se aage chalti hai** (wahan Topic 2 mein ek 2-variable linear inequality ka half-plane aur Origin Test the). Chapter ki shuruaat: [linear-inequalities.md](linear-inequalities.md).
> **Topics covered in this file:**
> 3. Systems of Linear Inequalities in Two Variables

---

# Topic 3: Systems of Linear Inequalities in Two Variables

Topic 2 mein tumne ek akeli 2-variable inequality (jaise 2x + y ≥ 6) ka half-plane shade karna seekha. Par asli zindagi ke faislon mein kabhi ek hi shart nahi hoti — factory, transport, budget ya khane ki planning mein **3, 4 ya 5 shartein ek saath** maanni padti hain! Jab kai linear inequalities ek saath di hon, to unhe **System of Linear Inequalities** kehte hain, aur un sabhi half-planes ka **common (overlap) hissa** hi solution region (**Feasible Region**) hota hai. Is topic mein hum 2D systems ko solve karna, unke **corner points (vertices)** nikaalna, aur bounded, unbounded aur empty regions ko pehchanna seekhenge.

---

## Brijesh aur Papa ke phalon ka tempo

Subah mandi mein Brijesh apne Papa ki madad kar raha tha. Tempo mein **seb ke x crates** aur **santre ke y crates** load karne the. Teen pakki shartein thin:
1. **Wazan ki seema:** 3x + 4y ≤ 60 (maximum 60 units wazan)
2. **Jagah ki seema:** x + 3y ≤ 30 (maximum 30 units space)
3. **Ginti negative nahi ho sakti:** **x ≥ 0** aur **y ≥ 0** (First Quadrant!)

Papa ne kaha, "Sirf wazan dekhoge to jagah kam pad jaayegi; sirf jagah dekhoge to tempo overload ho jaayega. Humein wo **common region** chahiye jahan **chaaron shartein ek saath** poori hon!"
Yahi common overlap region Maths mein **Feasible Region** kehlata hai — aur Class 12 ke Linear Programming chapter ki poori neev yahin rakhi jaati hai!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **System of inequalities** | Do ya zyada inequalities jo ek hi (x, y) ke liye **ek saath** true hon | x + 2y ≤ 8, 2x + y ≤ 8, x ≥ 0, y ≥ 0 |
| **Feasible / Solution region** | Sabhi inequalities ke half-planes ka **common overlap (intersection)** | Figure 3.1 ka # hissa |
| **Corner points (Vertices)** | Feasible region ki boundary lines jahan aapas mein kat'ti hain | (0, 0), (4, 0), (8/3, 8/3), (0, 4) |
| **Bounded region** | Aisa feasible region jo chaaron taraf se band (finite polygon) ho | Example 2, Example 3 |
| **Unbounded region** | Aisa feasible region jo kisi disha mein ∞ tak khula phaila ho | Example 1 |
| **Inconsistent system** | Aisa system jinke half-planes mein kuch bhi common na ho (solution = ∅) | x + y ≤ 2 aur x + y ≥ 5 |

---

## Part A: System Hal Karne Ka 4-Step Method

1. **Step 1:** Har inequality ki **boundary line** (solid ya dashed) ek hi 2D graph par banao.
2. **Step 2:** Har line ke liye **Origin Test** (ya doosra test point) lagakar chhote **teer (arrows)** se us line ki sahi side mark karo (pehle hi poora page kala mat karo!).
3. **Step 3:** Sirf wo **common region** shade karo jahan **sabhi lines ke teer ek saath** ishara kar rahe hon!
4. **Step 4:** Zaroorat ho to boundary lines ko aapas mein solve karke **corner points (vertices)** nikalo aur ek interior test point se **Jaanch** karo!

---

## Part B: Worked Examples

### Example 1: Do Inequalities ka Unbounded System

Graphically hal karo:
**(1) x + y ≥ 5**   aur   **(2) x − y ≤ 3**.

**Hal:**
- **Line 1:** x + y = 5 → intercepts **(0, 5)** aur **(5, 0)**, **Solid**.
  Origin (0, 0): 0 ≥ 5 False → origin se **door (upar-right)** arrows!
- **Line 2:** x − y = 3 → intercepts **(0, −3)** aur **(3, 0)**, **Solid**.
  Origin (0, 0): 0 ≤ 3 True → origin ki **taraf (upar-left)** arrows!
- **Intersection point (Vertex):** x + y = 5 aur x − y = 3 ko jodo: 2x = 8 ⟹ x = 4, y = 1 → **(4, 1)**.
- **Common Region:** Line 1 ke upar-right aur Line 2 ke upar-left ka **unbounded** V-shaped region jiska kona **(4, 1)** par hai!

**Jaanch:** Test point (5, 3) dono mein rakho: 5 + 3 = 8 ≥ 5 ✅ aur 5 − 3 = 2 ≤ 3 ✅!

---

### Example 2: First-Quadrant Bounded Quadrilateral

Graphically hal karo aur sabhi corner points nikalo:
**(1) x + 2y ≤ 8**,   **(2) 2x + y ≤ 8**,   **(3) x ≥ 0**,   **(4) y ≥ 0**.

**Hal:**
- **x ≥ 0, y ≥ 0:** Sirf **First Quadrant** (dono positive axes sahit).
- **Line 1:** x + 2y = 8 → intercepts **(0, 4)** aur **(8, 0)**, Solid; (0, 0): 0 ≤ 8 True → **origin ki taraf**.
- **Line 2:** 2x + y = 8 → intercepts **(0, 8)** aur **(4, 0)**, Solid; (0, 0): 0 ≤ 8 True → **origin ki taraf**.
- **Line 1 aur Line 2 ka intersection:**
  x + 2y = 8 aur 2x + y = 8 ko jodo: 3x + 3y = 16 ⟹ x + y = 16/3.
  x = (2x + y) − (x + y) = 8 − 16/3 = **8/3**, aur y = **8/3** → **(8/3, 8/3)**.

```
               y
             8 : * (0,8)
               :  \
             4 : *-\----- (0,4)
               : # #\* (8/3, 8/3)
               : # # #\
      ---------+-------*-------*---- x
             0 :     (4,0)   (8,0)
        (# = bounded feasible quadrilateral)
```

> **Figure 3.1** – Bounded feasible region (First Quadrant mein) jiske 4 corner points (0, 0), (4, 0), (8/3, 8/3) aur (0, 4) hain.

- **Corner points (4 vertices):** **(0, 0), (4, 0), (8/3, 8/3), (0, 4)**.

**Jaanch:** Interior point (1, 1) rakho: 1 + 2 = 3 ≤ 8, 2 + 1 = 3 ≤ 8, 1 ≥ 0, 1 ≥ 0 ✅; vertex (8/3, 8/3) par 8/3 + 16/3 = 8 ✅.

---

### Example 3: Brijesh ke Tempo ka System

Hal karo aur sabhi corner points nikalo:
**(1) 3x + 4y ≤ 60**,   **(2) x + 3y ≤ 30**,   **(3) x ≥ 0**,   **(4) y ≥ 0**.

**Hal:**
- **Line 1:** 3x + 4y = 60 → **(0, 15)** aur **(20, 0)**, Solid; (0, 0) True → origin ki taraf.
- **Line 2:** x + 3y = 30 → **(0, 10)** aur **(30, 0)**, Solid; (0, 0) True → origin ki taraf.
- **Intersection of Line 1 & Line 2:**
  Line 2 se x = 30 − 3y ko Line 1 mein rakho:
  3(30 − 3y) + 4y = 60 ⟹ 90 − 5y = 60 ⟹ 5y = 30 ⟹ **y = 6**, aur x = 30 − 18 = **12** → **(12, 6)**.
- **Bounded Feasible Region ke 4 Corner Points:** **(0, 0), (20, 0), (12, 6), (0, 10)**.
  *(Note: (30, 0) aur (0, 15) bahar reh gaye kyunki wo doosri line ki limit todte hain!)*

**Jaanch:** (12, 6) par 3(12) + 4(6) = 36 + 24 = 60 ✅ aur 12 + 3(6) = 30 ✅!

---

### Example 4: Inconsistent System (Empty Solution = ∅)

Check karo: **(1) x + y ≤ 2**   aur   **(2) x + y ≥ 5**.

**Hal:**
- Line 1 (x + y = 2) aur Line 2 (x + y = 5) **parallel** lines hain!
- Inequality (1) ka region x + y = 2 ke **neeche-left** (origin ki taraf) hai.
- Inequality (2) ka region x + y = 5 ke **upar-right** (origin se door) hai.
- Dono regions ek-doosre ko kahin nahi chhoote! (Koi bhi number ek saath ≤ 2 aur ≥ 5 nahi ho sakta!)
Isliye **Solution Region = ∅ (No solution — Inconsistent system)**.

**Jaanch:** Agar x + y ≤ 2 aur x + y ≥ 5 hota to 5 ≤ 2 milta, jo namumkin hai ✅.

---

## Aam galtiyan

1. **System ke liye half-planes ka UNION shade kar dena (INTERSECTION ke bajay):**
   - *Galat kyun:* System ka matlab "shart 1 **AUR** shart 2 dono ek saath" hota hai! Sirf wo hissa shade karo jo **sabhi** inequalities ko satisfy kare.
2. **Real-life problems mein x ≥ 0, y ≥ 0 bhool kar negative quadrants mein bhi shade kar dena:**
   - *Sahi soch:* Crates, chairs, litres ya hours negative nahi hote — x ≥ 0, y ≥ 0 lagte hi region First Quadrant mein simat jaata hai!
3. **Har do lines ke intercept ko corner point maan lena:** Example 3 mein (30, 0) Line 2 ka intercept hai, par wo Line 1 (3(30) + 0 = 90 ≤ 60 False!) ko todta hai — isliye wo feasible region ka corner point **nahi** hai!

---

## Quick Recap

- **System of 2D inequalities** = sabhi half-planes ka **common intersection (Feasible Region)**.
- Pehle sabhi lines par **arrows** lagao, phir sirf common overlap shade karo.
- **Corner points** = boundary lines ke wo intersections jo **baaki sabhi inequalities** ko bhi satisfy karein.
- Parallel opposite half-planes → **Empty solution (∅)**.

---

## Practice Questions

1. Graphically describe the feasible region and find the corner point(s) of:
   **x ≥ 3**   and   **y ≥ 2**.

2. Graphically describe the feasible region and find all corner points of:
   **3x + 2y ≤ 12**,   **x ≥ 1**,   **y ≥ 2**.

3. Graphically describe the feasible region and find the intersection vertex of:
   **2x + y ≥ 6**   and   **3x + 4y ≤ 12**.

4. Graphically describe the feasible region and find the corner point(s) of:
   **x + y ≥ 4**   and   **2x − y > 0**.

5. Graphically describe the feasible region and find the corner points of:
   **2x − y > 1**   and   **x − 2y < −1**.

6. Graphically describe the feasible region and find all 4 corner points of:
   **x + y ≤ 6**,   **x + y ≥ 4**,   **x ≥ 0**,   **y ≥ 0**.

7. Graphically describe the feasible region and find all corner points of:
   **2x + y ≥ 8**,   **x + 2y ≥ 10**,   **x ≥ 0**,   **y ≥ 0**. Is this region bounded or unbounded?

8. Graphically describe the feasible region and find all corner points of:
   **5x + 4y ≤ 20**,   **x ≥ 1**,   **y ≥ 2**.

9. Graphically describe the feasible region and find all 4 corner points of:
   **3x + 2y ≤ 150**,   **x + 4y ≤ 80**,   **x ≤ 15**,   **x ≥ 0**,   **y ≥ 0**.

10. Graphically describe the feasible region and find all corner points of:
    **x + 2y ≤ 10**,   **x + y ≥ 1**,   **x − y ≤ 0**,   **x ≥ 0**,   **y ≥ 0**.

11. Show that the following system has **no solution (∅)**:
    **2x + 3y ≤ 6**   and   **4x + 6y ≥ 18**.

12. Check which of the points **(2, 2)**, **(4, 1)**, and **(1, 4)** lie inside the feasible region of:
    **x + y ≤ 5**,   **2x + y ≥ 4**,   **x ≥ 0**,   **y ≥ 0**.

### Answers

1. x = 3 (vertical solid) ke right aur y = 2 (horizontal solid) ke upar → **unbounded** Q I corner region, single corner point **(3, 2)**. Jaanch: (4, 5) par 4 ≥ 3, 5 ≥ 2 ✅.

2. Line 3x + 2y = 12 (solid, origin side), x ≥ 1 (right), y ≥ 2 (upar).
   Vertices:
   - x = 1, y = 2 → **(1, 2)**
   - y = 2 & 3x + 4 = 12 ⟹ x = 8/3 → **(8/3, 2)**
   - x = 1 & 3 + 2y = 12 ⟹ y = 9/2 → **(1, 9/2)**.
   Bounded triangle! Jaanch: (1, 2) par 3 + 4 = 7 ≤ 12 ✅.

3. Line 1: 2x + y = 6 (origin se door); Line 2: 3x + 4y = 12 (origin ki taraf).
   Intersection: y = 6 − 2x ⟹ 3x + 4(6 − 2x) = 12 ⟹ −5x = −12 ⟹ x = **12/5**, y = **6/5** → vertex **(12/5, 6/5)**.
   Unbounded region (right-neeche wedge). Jaanch: 2(12/5) + 6/5 = 30/5 = 6 ✅; 3(12/5) + 4(6/5) = 60/5 = 12 ✅.

4. Line 1: x + y = 4 (solid, origin se door); Line 2: y = 2x (dashed, test (1, 0): 2 > 0 True → right-neeche).
   Intersection: x + 2x = 4 ⟹ x = **4/3**, y = **8/3** → **(4/3, 8/3)** (boundary Line 2 dashed hai, to vertex shamil nahi!). Unbounded region.

5. Line 1: 2x − y = 1 (dashed, origin False → right-neeche); Line 2: x − 2y = −1 (dashed, origin True → right-neeche? Wait: 0 < −1 False → upar-left!).
   Intersection: y = 2x − 1 ⟹ x − 2(2x − 1) = −1 ⟹ −3x = −3 ⟹ **x = 1, y = 1** → **(1, 1)**.
   Jaanch: (2, 2) par 2(2) − 2 = 2 > 1 ✅ aur 2 − 4 = −2 < −1 ✅! Unbounded open wedge above-right of (1, 1).

6. Parallel strip between x + y = 4 aur x + y = 6 in Q I!
   4 Corner points: **(4, 0), (6, 0), (0, 6), (0, 4)** (bounded trapezium). Jaanch: (2, 3) par 4 ≤ 5 ≤ 6 ✅.

7. Line 1: (0, 8), (4, 0) (door); Line 2: (0, 5), (10, 0) (door).
   Intersection: 2x + y = 8, x + 2y = 10 ⟹ x = 2, y = 4 → **(2, 4)**.
   Corner points: **(10, 0), (2, 4), (0, 8)** — region **unbounded** hai (upar-right ∞ tak khula!).
   Jaanch: (2, 4) par 4 + 4 = 8 aur 2 + 8 = 10 ✅.

8. 5x + 4y = 20 (origin side), x ≥ 1, y ≥ 2.
   Vertices: **(1, 2)**, y = 2 ⟹ 5x = 12 ⟹ **(12/5, 2)**, x = 1 ⟹ 4y = 15 ⟹ **(1, 15/4)**.
   Bounded triangle! Jaanch: (1, 2) par 5 + 8 = 13 ≤ 20 ✅.

9. x = 15 aur 3x + 2y = 150 ka intersection: (15, 52.5), par x + 4y ≤ 80 check karo: 15 + 4(52.5) = 225 > 80 (bahar!).
   x = 15 aur x + 4y = 80 ka intersection: 4y = 65 ⟹ **(15, 65/4)** (Jaanch: 3(15) + 2(65/4) = 45 + 32.5 = 77.5 ≤ 150 ✅!).
   x = 0 par y = 20 → **(0, 20)** (Jaanch: 3(0) + 40 = 40 ≤ 150 ✅!).
   Bounded quadrilateral vertices: **(0, 0), (15, 0), (15, 65/4), (0, 20)** (3x + 2y ≤ 150 poori tarah upar hai, redundant!).

10. x − y ≤ 0 (y ≥ x, solid upar-left), x + y ≥ 1 (door), x + 2y ≤ 10 (origin side), Q I:
    Vertices:
    - y = x & x + y = 1 → **(1/2, 1/2)**
    - y = x & x + 2y = 10 → **(10/3, 10/3)**
    - x = 0 & x + 2y = 10 → **(0, 5)**
    - x = 0 & x + y = 1 → **(0, 1)**.
    Bounded quadrilateral! Jaanch: (1, 2) par 5 ≤ 10, 3 ≥ 1, −1 ≤ 0 ✅.

11. Doosri inequality ko 2 se bhaag do: **2x + 3y ≥ 9**.
    Koi bhi (x, y) ek saath 2x + 3y ≤ 6 aur 2x + 3y ≥ 9 nahi de sakta (kyunki 6 < 9). Solution = **∅**.

12. - **(2, 2):** 2 + 2 = 4 ≤ 5, 4 + 2 = 6 ≥ 4 → **Andar hai!**
    - **(4, 1):** 4 + 1 = 5 ≤ 5, 8 + 1 = 9 ≥ 4 → **Andar (boundary par) hai!**
    - **(1, 4):** 1 + 4 = 5 ≤ 5, 2 + 4 = 6 ≥ 4 → **Andar (boundary par) hai!**
    Jaanch: teeno points Q I mein hain aur dono inequalities satisfy karte hain ✅.

---

Ab tum kisi bhi 2D system of linear inequalities ka feasible region aur uske corner points nikaal sakte ho.

**Agle aur aakhri topic mein:** poore chapter ke saare tools ko ek saath jodne wale **Decision Map, acid-dilution aur IQ wale classic word problems, 12 practice sawaal** aur **Chapter Ka Saar**!
