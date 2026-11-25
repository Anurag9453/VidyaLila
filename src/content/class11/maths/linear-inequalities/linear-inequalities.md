# Chapter: Linear Inequalities

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [complex-numbers-and-quadratic-equations-part5.md](../complex-numbers-and-quadratic-equations/complex-numbers-and-quadratic-equations-part5.md) tha** (Complex Numbers ka aakhri topic, jahan humne dekha ki C mein < ya > nahi hota — isliye ab hum wapas **Real Numbers R** par laut kar "<, >, ≤, ≥" ki duniya dekhenge!). Inequalities ka pehla parichay Class 10 mein dekha tha: [linear-inequations.md](../../../class10/maths/linear-inequations/linear-inequations.md). Real intervals ki bhasha: [sets-part2.md](../sets/sets-part2.md).
> **Topics covered in this file:**
> 1. Inequalities Aur Unka Hal Ek Variable Mein (Double, System Aur Modulus Inequalities)

---

# Topic 1: Inequalities Aur Unka Hal Ek Variable Mein (Double, System Aur Modulus Inequalities)

Class 10 ke [linear-inequations.md](../../../class10/maths/linear-inequations/linear-inequations.md) mein tumne simple inequalities (<, >, ≤, ≥) aur replacement sets se pehchaan ki thi. Class 11 mein hum isse ek level upar le jaate hain: **fractional inequalities**, **double (compound) inequalities** (a ≤ mx + c < b), **systems of 1-variable inequalities**, **modulus inequalities** (|x − a| < r), aur real-life optimization-type word problems — aur sabhi real answers ko Chapter 1 ke **Interval Notation** mein likhenge!

---

## Smita ka pocket-money budget aur test average

Mahine ki shuruat mein Smita ko Mummy se **₹500** pocket money mili. Usne ₹150 ki ek geometry box le li, aur ab bache paison se wo **₹35** wali notebooks kharidna chahti thi. Agar wo x notebooks kharide, to kul kharch **150 + 35x ≤ 500** hona chahiye!
- 35x ≤ 350 ⟹ **x ≤ 10**. (Wo 0 se 10 tak koi bhi poori ginti ki notebooks le sakti hai!)

Doosri taraf, Physics ke do tests mein uske 70 aur 75 marks aaye the. Teesri test mein use kam se kam kitne marks chahiye taaki uska average **kam se kam 60** rahe?
- (70 + 75 + x) / 3 ≥ 60 ⟹ 145 + x ≥ 180 ⟹ **x ≥ 35**.

Smita ne dekha ki roz ki zindagi mein "equal to (=)" se kahin zyada **"at most (≤)"** aur **"at least (≥)"** ke sawaal aate hain!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Strict inequality** | Sirf < ya > (boundary shamil NAHI) | 2x − 1 < 5 |
| **Slack inequality** | ≤ ya ≥ (boundary SHAMIL hai) | 3x + 2 ≥ 8 |
| **Double / Compound inequality** | Ek saath do inequalities jahan variable beech mein ho | −5 ≤ (2 − 3x)/4 ≤ 9 |
| **System of 1-variable inequalities** | Do ya zyada inequalities jo ek hi x ke liye EK SAATH true hon (intersection!) | 3x − 7 < 5 + x aur 11 − 5x ≤ 1 |
| **Modulus inequality** | Absolute value ke saath inequality: abs(x − a) < r ya abs(x − a) ≥ r | abs(x − 3) < 4 ⟺ −1 < x < 7 |

---

## Part A: Inequality Hal Karne Ke Teen Pakke Niyam

1. **Jodna / Ghatana:** Dono taraf koi bhi real number jodne ya ghatane par inequality ka sign **NAHI badalta**.
2. **Positive number se Guna / Bhaag:** Dono taraf positive number (k > 0) se guna ya bhaag karne par sign **NAHI badalta**.
3. **Negative number se Guna / Bhaag (SABSE ZAROORI!):** Dono taraf **negative number (k < 0)** se guna ya bhaag karne par inequality ka sign **PALAT JAATA HAI** (< ↔ >, ≤ ↔ ≥)!
   *Kyun?* 2 < 5 sach hai; dono taraf −1 se guna karo to −2 aur −5 milte hain — number line par −2 right mein hai, isliye **−2 > −5**!

---

## Part B: Algebraic, Double, System Aur Modulus Inequalities

### Example 1: Replacement Set ka Asar (N, Z, R)

**30x < 200** hal karo jab: (i) x ∈ N, (ii) x ∈ Z, (iii) x ∈ R.

**Hal:**
Dono taraf positive 30 se bhaag do:
x < 200/30 ⟹ **x < 20/3 = 6.66...**
- (i) x ∈ N (natural numbers): **{1, 2, 3, 4, 5, 6}**.
- (ii) x ∈ Z (integers): **{..., −2, −1, 0, 1, 2, 3, 4, 5, 6}**.
- (iii) x ∈ R (real numbers): interval **(−∞, 20/3)**.

**Jaanch:** x = 6 par 30(6) = 180 < 200 ✅; x = 7 par 30(7) = 210 > 200 ✅.

### Example 2: Fractional Linear Inequality

Real x ke liye hal karo: **(5 − 2x) / 3 ≤ x/6 − 5**.

**Hal:**
1. Denominators 3 aur 6 ka LCM = **6** (positive!) se poori inequality ko guna karo:
   2(5 − 2x) ≤ x − 30
   10 − 4x ≤ x − 30
2. x wale terms ek taraf, numbers doosri taraf:
   −4x − x ≤ −30 − 10
   **−5x ≤ −40**
3. Dono taraf **−5** (negative!) se bhaag do — **sign paltega!**
   **x ≥ 8**, yaani interval **[8, ∞)**.

**Jaanch:** x = 8 par LHS = (5 − 16)/3 = −11/3, RHS = 8/6 − 5 = 4/3 − 15/3 = −11/3 (equal!) ✅; x = 14 par LHS = −23/3 ≈ −7.67, RHS = 14/6 − 5 = −8/3 ≈ −2.67 (LHS < RHS!) ✅.

### Example 3: Double Inequality (Negative Coefficient ke Saath!)

Real x ke liye hal karo: **−5 ≤ (2 − 3x) / 4 ≤ 9**.

**Hal:**
1. Teeno hisson ko positive 4 se guna karo:
   −20 ≤ 2 − 3x ≤ 36
2. Teeno hisson se 2 ghatao:
   −22 ≤ −3x ≤ 34
3. Teeno hisson ko **−3** (negative!) se bhaag do — **dono signs palat jaayenge!**
   22/3 ≥ x ≥ −34/3
4. Chhote se bade ke kram mein likho:
   **−34/3 ≤ x ≤ 22/3**, yaani interval **[−34/3, 22/3]**.

**Jaanch:** x = 0 ∈ [−34/3, 22/3] par (2 − 0)/4 = 0.5 ∈ [−5, 9] ✅; x = 22/3 par (2 − 22)/4 = −5 ✅; x = −34/3 par (2 + 34)/4 = 9 ✅.

### Example 4: System of Two 1-Variable Inequalities

Real x ke liye dono inequalities ko **ek saath** hal karo:
**(1) 3x − 7 < 5 + x**   aur   **(2) 11 − 5x ≤ 1**.

**Hal:**
- Inequality (1): 3x − x < 5 + 7 ⟹ 2x < 12 ⟹ **x < 6**, yaani **(−∞, 6)**.
- Inequality (2): −5x ≤ 1 − 11 = −10 ⟹ (−5 se bhaag, sign palto!) **x ≥ 2**, yaani **[2, ∞)**.
- **Common solution (Intersection):** (−∞, 6) ∩ [2, ∞) = **[2, 6)**.

**Jaanch:** x = 2 par (1) −1 < 7 aur (2) 1 ≤ 1 ✅; x = 6 par (1) 11 < 11 false (isliye 6 open bracket!) ✅.

### Example 5: Modulus Inequality — |x − 3| < 4

Do golden modulus rules (jab **r > 0**):
- **|u| < r  ⟺  −r < u < r**   *(beech ka tukda!)*
- **|u| > r  ⟺  u < −r  YA  u > r**   *(dono bahari kinare!)*

Ab hal karo: **|x − 3| < 4**.

**Hal:**
−4 < x − 3 < 4
Teeno hisson mein 3 jodo:
**−1 < x < 7**, yaani interval **(−1, 7)**.

**Jaanch:** x = 3 (centre) par |0| = 0 < 4 ✅; x = 7 par |4| = 4 (strict < fail, isliye open!) ✅.

### Example 6: Consecutive Odd Integers Word Problem

Aise sabhi lagatar **odd positive integers** ke jode nikalo jinme **dono 10 se bade** hon aur unka **jod 40 se kam** ho.

**Hal:**
Maan lo chhota odd integer **x** hai, to agla lagatar odd integer **x + 2** hoga.
1. Shart 1: **x > 10** (to x + 2 apne aap > 12 > 10 hoga).
2. Shart 2: x + (x + 2) < 40 ⟹ 2x < 38 ⟹ **x < 19**.
3. Dono sharton ko milao: **10 < x < 19**.
4. 10 aur 19 ke beech ke odd integers: **11, 13, 15, 17**.
Isliye required pairs: **(11, 13), (13, 15), (15, 17), (17, 19)**.

**Jaanch:** Sabse bada pair (17, 19): dono > 10 aur 17 + 19 = 36 < 40 ✅; agla (19, 21) ka jod 40 (not < 40!) ✅.

---

## Aam galtiyan

1. **Negative number se guna/bhaag karte waqt sign palatna bhool jaana:** Student −5x ≤ −40 se x ≤ 8 likh deta hai!
   - *Galat kyun:* x = 0 rakh kar check karo: −5(0) = 0 ≤ −40 FALSE hai! Sahi answer **x ≥ 8** hai.
2. **Anjaan sign wale x-expression se cross-multiply kar dena:** Jaise (x + 1)/(x − 2) < 3 mein seedha (x − 2) se guna kar dena!
   - *Galat kyun:* Humein nahi pata (x − 2) positive hai ya negative — sign paltega ya nahi, tay nahi! (Isliye sirf **pakke positive/negative constants** se hi guna karo.)
3. **|x − 3| < 4 ko sirf x − 3 < 4 (x < 7) likh dena:**
   - *Galat kyun:* x = −5 < 7 rakh kar dekho: |−5 − 3| = 8 < 4 FALSE! Lower bound **−4 < x − 3** zaroor lagao.

---

## Quick Recap

- Negative number se × ya ÷ karo → **sign palto (< ↔ >, ≤ ↔ ≥)**.
- Real solution ko **interval notation** mein likho: (a, b), [a, b], (−∞, b).
- **System of inequalities** = har inequality ke solution ka **intersection (∩)**.
- **Modulus (r > 0):** |u| < r ⟺ −r < u < r; |u| > r ⟺ u < −r ya u > r.

---

## Practice Questions

1. Solve **24x < 100** when: (a) x ∈ N, (b) x ∈ Z, (c) x ∈ R.

2. Solve **−12x > 30** when: (a) x ∈ N, (b) x ∈ Z, (c) x ∈ R.

3. Solve the following for real x and write the answer in interval form:
   (a) 4x + 3 < 5x + 7
   (b) 3(x − 1) ≤ 2(x − 3)
   (c) x + x/2 + x/3 < 11

4. Solve for real x: **(3(x − 2)) / 5 ≤ (5(2 − x)) / 3**.

5. Solve the double inequality for real x: **2 ≤ 3x − 4 ≤ 5**.

6. Solve the double inequality for real x: **−3 ≤ 4 − 7x/2 ≤ 18**.

7. Solve the system of inequalities for real x:
   **5x + 1 > −24**   and   **5x − 1 < 24**.

8. Solve the system of inequalities for real x:
   **2(x − 1) < x + 5**   and   **3(x + 2) > 2 − x**.

9. Solve the modulus inequalities for real x:
   (a) |x − 2| ≤ 5
   (b) |2x + 1| > 7

10. A student obtained 70 and 75 marks in the first two unit tests. Find the minimum marks he should get in the third test to have an average of at least 65 marks.

11. Find all pairs of consecutive **even positive integers**, both of which are larger than 5, such that their sum is less than 23.

12. The longest side of a triangle is 3 times the shortest side, and the third side is 2 cm shorter than the longest side. If the perimeter of the triangle is at least 61 cm, find the minimum length of the shortest side.

### Answers

1. x < 100/24 = 25/6 ≈ 4.16:
   (a) **{1, 2, 3, 4}**; (b) **{..., −1, 0, 1, 2, 3, 4}**; (c) **(−∞, 25/6)**.

2. −12 se bhaag (sign palto!): x < −30/12 = −5/2 = −2.5:
   (a) **∅** (koi natural number −2.5 se chhota nahi!); (b) **{..., −5, −4, −3}**; (c) **(−∞, −5/2)**.

3. (a) −x < 4 ⟹ x > −4 ⟹ **(−4, ∞)**.
   (b) 3x − 3 ≤ 2x − 6 ⟹ x ≤ −3 ⟹ **(−∞, −3]**.
   (c) 6 se guna: 6x + 3x + 2x < 66 ⟹ 11x < 66 ⟹ x < 6 ⟹ **(−∞, 6)**.

4. 15 se guna: 9(x − 2) ≤ 25(2 − x) ⟹ 9x − 18 ≤ 50 − 25x ⟹ 34x ≤ 68 ⟹ x ≤ 2 ⟹ **(−∞, 2]**.
   Jaanch: x = 2 par LHS = 0, RHS = 0 ✅.

5. 4 jodo: 6 ≤ 3x ≤ 9 ⟹ 3 se bhaag: **2 ≤ x ≤ 3**, yaani **[2, 3]**.

6. 4 ghatao: −7 ≤ −7x/2 ≤ 14.
   −2/7 (negative!) se guna (signs palto!): 2 ≥ x ≥ −4 ⟹ **[−4, 2]**.
   Jaanch: x = −4 par 4 + 14 = 18 ✅; x = 2 par 4 − 7 = −3 ✅.

7. (1) 5x > −25 ⟹ x > −5; (2) 5x < 25 ⟹ x < 5.
   Intersection: **(−5, 5)**.

8. (1) 2x − 2 < x + 5 ⟹ x < 7; (2) 3x + 6 > 2 − x ⟹ 4x > −4 ⟹ x > −1.
   Intersection: **(−1, 7)**. Jaanch: x = 0 par −2 < 5 aur 6 > 2 ✅.

9. (a) −5 ≤ x − 2 ≤ 5 ⟹ **−3 ≤ x ≤ 7**, yaani **[−3, 7]**.
   (b) 2x + 1 < −7 ya 2x + 1 > 7 ⟹ x < −4 ya x > 3 ⟹ **(−∞, −4) ∪ (3, ∞)**.
   Jaanch: x = 4 par |9| = 9 > 7 ✅; x = −5 par |−9| = 9 > 7 ✅.

10. (70 + 75 + x)/3 ≥ 65 ⟹ 145 + x ≥ 195 ⟹ **x ≥ 50** (minimum **50 marks**). Jaanch: (70+75+50)/3 = 195/3 = 65 ✅.

11. Even integers x aur x + 2: x > 5 aur 2x + 2 < 23 ⟹ x < 10.5.
    5 aur 10.5 ke beech even integers: 6, 8, 10.
    Pairs: **(6, 8), (8, 10), (10, 12)**. Jaanch: 10 + 12 = 22 < 23 ✅.

12. Shortest side = x cm, longest = 3x cm, third = (3x − 2) cm.
    Perimeter: x + 3x + (3x − 2) ≥ 61 ⟹ 7x − 2 ≥ 61 ⟹ 7x ≥ 63 ⟹ **x ≥ 9 cm** (minimum **9 cm**).
    Jaanch: 9 + 27 + 25 = 61 cm (triangle inequality 9 + 25 = 34 > 27 bhi satisfy!) ✅.

---

Ab tum har tarah ki 1-variable linear, double, system aur modulus inequality ko aasaani se hal kar sakte ho.

**Agle topic mein:** 1D number line se bahar nikal kar **2D Cartesian plane** par aayenge — **Graphical Solution of Linear Inequalities in Two Variables (Half-Planes aur Origin Test)**!
