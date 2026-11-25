# Chapter: Relations and Functions (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [relations-and-functions-part2.md](relations-and-functions-part2.md) se aage chalti hai** (wahan Topic 2 mein Relations, Arrow Diagrams, Domain, Codomain aur Range the). Chapter ki shuruaat: [relations-and-functions.md](relations-and-functions.md).
> **Topics covered in this file:**
> 3. Functions: Paribhasha, 7 Standard Real Functions Aur Unke Graphs

---

# Topic 3: Functions: Paribhasha, 7 Standard Real Functions Aur Unke Graphs

Topic 2 mein tumne dekha ki kisi Relation mein ek hi input se do-do arrows nikal sakte hain (jaise 4 → −2 aur 4 → +2), aur koi input bina arrow ke bhi chhoot sakta hai. Par science, programming aur Maths ko ek **bharosemand machine** chahiye — jahan har input dene par **pakka aur sirf ek** output mile! Aise khaas relation ko hi **Function** kehte hain. Is topic mein hum Function ko pehchanna seekhenge aur 7 sabse mashhoor real functions aur unke graphs se milenge.

---

## Alok ki railway-station vending machine

Train ka intezaar karte waqt Alok ek smart snack vending machine ke saamne khada tha. Machine par 4 buttons the: **B1, B2, B3, B4**.
Papa ne samjhaya ki ek achhi vending machine ke do pakke niyam hote hain:
1. **Har button kaam kare (no dead button):** Koi bhi button dabao, kuch na kuch zaroor nikle.
2. **Ek button se theek EK hi item nikle (no confusion):** B2 dabane par kabhi chips aur kabhi biscuit ek saath nahi girne chahiye!

Alok ne poochha, "Papa, agar B1 aur B2 dono buttons se wahi chocolate nikle, to kya machine kharab hai?"
Papa muskuraaye: "Bilkul nahi! Do alag buttons ek hi item de sakte hain (ise **many-to-one** kehte hain). Machine sirf tab kharab hai jab koi button **kuch na de** ya ek hi button **do alag cheezein** de de!"

Yahi vending machine ka niyam **Function** ki exact paribhasha hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Function (f : A → B)** | Aisa relation jisme A ke **har** element ki B mein **one and only one** image ho | f(x) = 2x + 1 |
| **Vertical-line test** | Graph par koi bhi khadi line agar curve ko 1 se zyada baar kaate, to wo function NAHI | Circle function nahi hai |
| **Real-valued function** | Jiska Range, R (real numbers) ka subset ho | f : N → R |
| **Real function** | Jiska Domain aur Range dono R ke subsets hon | f(x) = x² (R → R) |
| **Modulus function** | Number ka sirf non-negative size (origin se doori): abs(x) | abs(−7) = 7, abs(3.5) = 3.5 |
| **Signum function sgn(x)** | Number ka chinh (sign) batane wala function: +1, 0, ya −1 | sgn(−4) = −1, sgn(0) = 0 |
| **Greatest Integer [x]** | x ke barabar ya x se chhota **sabse bada integer** (floor / step function) | [3.7] = 3, [−2.3] = −3 |

---

## Part A: Relation Kab Function Banta Hai?

Set A se Set B par ek relation **f** tab **Function** (likhte hain **f : A → B**) kehlata hai jab do shartein poori hon:
1. **A ka koi element khali na rahe** (Domain(f) = poora A).
2. **A ke har element ki B mein sirf EK hi image ho** (kisi bhi x ke liye do alag pairs (x, y₁) aur (x, y₂) nahi ho sakte!).

Agar (x, y) ∈ f, to hum likhte hain **y = f(x)** ("f of x").
- **Many-to-one (allowed):** Do alag inputs x₁ ≠ x₂ ka output same ho sakta hai (jaise f(−2) = 4 aur f(2) = 4).
- **One-to-many (NOT allowed):** Ek hi input x ke do outputs nahi ho sakte (jaise (1, 4) aur (1, 5) ek saath!).

### Vertical-Line Test (Graph dekh kar 2-second test)

Kisi graph par kahin bhi ek **khadi (vertical) line** x = k kheencho:
- Agar har vertical line graph ko **zyada se zyada 1 point** par kaate → **Function hai!**
- Agar koi bhi vertical line graph ko **2 ya zyada points** par kaate → **Function NAHI hai** (kyunki ek hi x ke liye 2 alag y mil gaye!).

### Example 1: Pehchano — kaun sa relation Function hai?

Set A = {1, 2, 3} se B = {4, 5, 6} par in teen relations ko check karo:
(i) R₁ = {(1, 4), (2, 4), (3, 5)}
(ii) R₂ = {(1, 4), (1, 5), (2, 6), (3, 6)}
(iii) R₃ = {(1, 4), (2, 5)}

**Hal:**
- **(i) R₁ Function hai!** A ke teeno elements (1, 2, 3) use hue hain, aur har ek ka theek ek output hai. (1 aur 2 dono ka output 4 hona — many-to-one — bilkul valid hai!)
- **(ii) R₂ Function NAHI hai!** Input 1 ke do alag outputs hain: 4 aur 5 (one-to-many!).
- **(iii) R₃ Function NAHI hai!** A ka element 3 bina kisi image ke khali chhoot gaya (Domain = {1, 2} ≠ A).

**Jaanch:** R₁ mein first elements {1, 2, 3} = A aur koi first element repeat nahi hua ✅; R₂ mein 1 repeat hua ✅; R₃ mein 3 gayab hai ✅.

---

## Part B: 7 Standard Real Functions Aur Unke Graphs

Neeche diye 7 functions Class 11 aur Class 12 ke sabse zaroori building blocks hain. Har ek ka **Formula, Domain, Range** aur **Graph ka shape** dhyan se dekho!

### 1. Identity Function: f(x) = x
- **Niyam:** Jo input daalo, wahi output bahar aata hai (f(x) = x).
- **Domain = R**, **Range = R**.
- **Graph:** Origin (0, 0) se 45° par guzarne wali seedhi line (Quadrant I aur III mein).

### 2. Constant Function: f(x) = c (jahan c koi fixed real number hai)
- **Niyam:** Chahe jo x daalo, output hamesha wahi number c rehta hai (jaise f(x) = 3).
- **Domain = R**, **Range = {c}** (ek singleton set!).
- **Graph:** x-axis ke parallel, height y = c par ek leti hui (horizontal) line.

```
     (1) Identity: f(x) = x           (2) Constant: f(x) = 3
            y                                y
            :     /                          :
            :   /                            :------- y = 3 -------
            : /                              :
     -------+------- x                -------+------- x
          / :                                :
        /   :                                :
```

> **Figure 3.1** – Identity function (45° seedhi line) aur Constant function (horizontal line y = 3).

### 3. Polynomial Functions: f(x) = a₀ + a₁x + ... + aₙxⁿ
- **Domain = R** (hamesha!). Range polynomial ki degree par nirbhar karta hai.
- Do sabse mashhoor cases:
  - **Square function f(x) = x²:** Domain = R, **Range = [0, ∞)** (kyunki x² ≥ 0 hamesha). Graph = upar khulne wala **U-shaped parabola** (vertex origin par).
  - **Cube function f(x) = x³:** Domain = R, **Range = R** (negative ka cube negative!). Graph = origin par mudne wala S-shaped curve.

```
     (3a) f(x) = x² (Parabola)        (3b) f(x) = x³ (Cubic)
            y                                y
         \  :  /                             :    /
          \ : /                              :   /
           \:/                               :  /
     -------+------- x                -------+------- x
            :                             /  :
            :                            /   :
```

> **Figure 3.2** – f(x) = x² kabhi x-axis ke neeche nahi jaata (Range [0, ∞)); f(x) = x³ dono taraf −∞ se +∞ tak phailta hai (Range R).

### 4. Rational Function: f(x) = p(x)/q(x) — Khaas case: Reciprocal f(x) = 1/x
- **Niyam:** Do polynomials ka bhaag, jahan **q(x) ≠ 0**.
- **f(x) = 1/x** ke liye: **Domain = R − {0}**, **Range = R − {0}** (kyunki 1/x kabhi 0 nahi ho sakta!).
- **Graph:** Do branches (Quadrant I aur III mein rectangular hyperbola), jo axes ke bahut paas jaate hain par unhe kabhi chhoote nahi!

### 5. Modulus (Absolute Value) Function: f(x) = |x|
- **Paribhasha (Piecewise):**
  - f(x) = **x**, agar **x ≥ 0**
  - f(x) = **−x**, agar **x < 0** (dhyan do: jab x negative ho, to −x positive ban jaata hai! Jaise |−7| = −(−7) = +7.)
- **Domain = R**, **Range = [0, ∞)**.
- **Graph:** Origin (0, 0) par nokila **V-shape** (y = x aur y = −x ki dono kiranein upar ki taraf).

```
     (4) Reciprocal: f(x) = 1/x       (5) Modulus: f(x) = |x|
            y                                y
            : /                              \  :  /
            :/__                              \ : /
     -------+------- x                         \:/
         __/:                           -------+------- x
          / :                                   :
```

> **Figure 3.3** – Reciprocal 1/x mein x = 0 aur y = 0 par gap hai; Modulus |x| origin par nokila V-shape banata hai (Range [0, ∞)).

### 6. Signum Function: f(x) = sgn(x)
- **Paribhasha:**
  - f(x) = **+1**, agar **x > 0** (isse |x|/x bhi likhte hain jab x ≠ 0)
  - f(x) = **0**, agar **x = 0**
  - f(x) = **−1**, agar **x < 0**
- **Domain = R**, **Range = {−1, 0, 1}** (sirf 3 hi possible outputs!).
- **Graph:** x > 0 par height +1 ki ray (0 par khali gola o), origin par akela dot (0, 0), aur x < 0 par height −1 ki ray (0 par khali gola o).

### 7. Greatest Integer Function (Step / Floor Function): f(x) = [x]
- **Paribhasha:** **[x]** ka matlab hai **x se chhota ya x ke barabar sabse bada integer**.
- **Asaan Number-Line Trick:** Agar x khud integer hai, to [x] = x. Agar x decimal hai, to number line par uske **theek left (baayein)** mein jo integer baitha hai wahi [x] hai!
  - [3.7] = **3** (3.7 ke left mein 3)
  - [5] = **5**
  - [0.99] = **0**
  - **[−0.4] = −1** (−0.4 ke left mein −1 hai, 0 nahi!)
  - **[−2.3] = −3** (−2.3 ke left mein −3 hai, −2 nahi!)
  - [−4] = **−4**
- **Domain = R**, **Range = Z** (sabhi integers!).
- **Graph:** Seedhiyon (staircase) jaisa — har integer k se k + 1 tak horizontal step [k, k+1) par height k (left end bhara dot ●, right end khali gola o).

```
     (6) Signum: sgn(x)               (7) Greatest Integer: [x]
            y                                y
            o------- +1                      :      ●---o (y=2)
            :                                :   ●---o    (y=1)
     -------●------- x                -------●---o------- x
            :                                :
     -------o -1                        ●---o:            (y=-1)
```

> **Figure 3.4** – Signum ke sirf 3 levels (−1, 0, +1) hain; Greatest Integer [x] seedhiyon ki tarah har integer par 1 kadam upar chadh jaata hai.

### Ek Nazar Mein: 7 Standard Functions Summary

| Function | Formula | Domain | Range |
|---|---|---|---|
| **Identity** | f(x) = x | R | R |
| **Constant** | f(x) = c | R | {c} |
| **Square** | f(x) = x² | R | [0, ∞) |
| **Cube** | f(x) = x³ | R | R |
| **Reciprocal** | f(x) = 1/x | R − {0} | R − {0} |
| **Modulus** | f(x) = abs(x) | R | [0, ∞) |
| **Signum** | f(x) = sgn(x) | R | {−1, 0, 1} |
| **Greatest Integer** | f(x) = [x] | R | Z |

---

## Part C: Worked Examples on Standard Functions

### Example 2: Modulus, Signum aur Greatest Integer ke maan nikaalna

Inke exact maan nikalo:
(i) |−7| + |3.5| − |−2.5|
(ii) sgn(−4) + sgn(0) + sgn(9)
(iii) [3.7] + [−2.3] + [−0.4] + [5]

**Hal:**
- (i) |−7| = 7, |3.5| = 3.5, |−2.5| = 2.5 ⟹ 7 + 3.5 − 2.5 = **8**.
- (ii) sgn(−4) = −1, sgn(0) = 0, sgn(9) = +1 ⟹ −1 + 0 + 1 = **0**.
- (iii) [3.7] = 3, [−2.3] = −3, [−0.4] = −1, [5] = 5 ⟹ 3 + (−3) + (−1) + 5 = **4**.

**Jaanch:** 7 + 1 = 8 ✅; −1 + 0 + 1 = 0 ✅; −3 ≤ −2.3 < −2 aur −1 ≤ −0.4 < 0, sum = 3 − 3 − 1 + 5 = 4 ✅.

### Example 3: Function ka maan aur pre-image nikaalna

Maan lo **f : R → R** define hai **f(x) = x² − 4x + 5** se.
(i) f(0), f(2), f(−1) nikalo.
(ii) Kis x ke liye f(x) = 10 hoga? (yaani 10 ki pre-images nikalo!)

**Hal:**
- (i)
  - f(0) = 0 − 0 + 5 = **5**
  - f(2) = 4 − 8 + 5 = **1**
  - f(−1) = (−1)² − 4(−1) + 5 = 1 + 4 + 5 = **10**
- (ii) f(x) = 10 ⟹ x² − 4x + 5 = 10 ⟹ x² − 4x − 5 = 0 ⟹ (x − 5)(x + 1) = 0 ⟹ **x = 5** ya **x = −1**.
  Isliye 10 ki do pre-images hain: **−1 aur 5**.

**Jaanch:** f(5) = 25 − 20 + 5 = 10 ✅ aur f(−1) = 1 + 4 + 5 = 10 ✅.

---

## Aam galtiyan

1. **"Many-to-one" ko function nahi maan lena:** Student dekhta hai f(−2) = 4 aur f(2) = 4, aur bol deta hai "do cheezon ka ek hi output aa gaya, to ye function nahi!"
   - *Galat kyun:* Do alag inputs ka ek hi output hona (many-to-one) bilkul allowed hai! Sirf **ek hi input ke do alag outputs** (one-to-many) mana hai.
2. **Negative numbers par Greatest Integer [x] galat nikaalna:** Student [−2.3] = −2 likh deta hai (sirf decimal kaat kar!).
   - *Galat kyun:* −2, −2.3 se **bada** hai, chhota nahi! Greatest Integer hamesha number line par **left** ki taraf jaata hai: −3 < −2.3 < −2, isliye **[−2.3] = −3**.
3. **1/x ke domain mein 0 rakh dena ya sgn(0) = 1 likhna:**
   - *Sahi soch:* 1/0 undefined hai, isliye 0 hamesha domain se bahar hota hai (R − {0}); aur paribhasha se **sgn(0) = 0** hota hai (na +1, na −1).

---

## Quick Recap

- **Function f : A → B:** A ka har element B ke **theek ek** element se jude (Domain = A; one-to-many mana; many-to-one allowed).
- **Vertical-line test:** har vertical line graph ko max 1 baar kaate.
- **7 Standard Functions:** Identity (x), Constant (c), Polynomial (x², x³), Rational (1/x), Modulus (|x|, V-shape, Range [0, ∞)), Signum (sgn(x), Range {−1, 0, 1}), Greatest Integer ([x], left integer, Range Z).

---

## Practice Questions

1. Which of the following relations are functions? Give a reason, and if it is a function, state its Domain and Range:
   (a) {(2, 1), (5, 1), (8, 1), (11, 1), (14, 1)}
   (b) {(2, 1), (4, 2), (6, 3), (8, 4), (10, 5)}
   (c) {(1, 3), (1, 5), (2, 5)}

2. Let f = {(1, 1), (2, 3), (0, −1), (−1, −3)} be a linear function from Z into Z defined by f(x) = ax + b. Find a and b.

3. A function f is defined by f(x) = 3x − 7. Find:
   (a) f(0)    (b) f(4)    (c) f(−2)    (d) x such that f(x) = 14.

4. The function t maps temperature in Celsius C to Fahrenheit: t(C) = (9C/5) + 32. Find:
   (a) t(0)    (b) t(25)    (c) t(−10)    (d) the value of C when t(C) = 212.

5. Evaluate the following expressions:
   (a) |−12| − |5| + |−3|
   (b) sgn(15) + sgn(−100) + sgn(0) + sgn(0.01)
   (c) [4.9] + [−4.9] + [−0.01] + [2]

6. Let f : R → R be defined by f(x) = x² + 2.
   (a) Find f(−3) and f(3).
   (b) Find the pre-images of 18 under f.
   (c) Does −2 have any real pre-image under f? Why?

7. State the Domain and Range of each of the following functions:
   (a) f(x) = −|x|
   (b) g(x) = |x| + 4
   (c) h(x) = 5 (a constant function on R)

8. If f(x) = [x] (greatest integer function), solve the equation [x] = 3. Write the solution set as a real interval.

9. For f(x) = x², find the value of [f(1.2) − f(1)] ÷ (1.2 − 1).

10. Check whether the relation R = {(x, y) ∈ R × R : y² = x} is a function from [0, ∞) to R. Justify using both an example and the vertical-line test.

11. Find the Range of each of the following real functions:
    (a) f(x) = 2 − 3x, x ∈ R, x > 0
    (b) g(x) = x² + 5, x ∈ R
    (c) h(x) = x, x ∈ [−4, 6]

12. True or False? Give a one-line reason:
    (a) Every function is a relation, but every relation is not a function.
    (b) For all real x, [x] ≤ x < [x] + 1.
    (c) The range of the signum function is [−1, 1].
    (d) For every real x, [−x] = −[x].

### Answers

1. (a) **Function hai** (sabhi first elements 2, 5, 8, 11, 14 alag hain; many-to-one allowed). Domain = {2, 5, 8, 11, 14}, Range = {1}.
   (b) **Function hai** (sabhi first elements alag). Domain = {2, 4, 6, 8, 10}, Range = {1, 2, 3, 4, 5}.
   (c) **Function NAHI hai** (1 ki do alag images 3 aur 5 hain).

2. f(0) = −1 ⟹ a(0) + b = −1 ⟹ **b = −1**.
   f(1) = 1 ⟹ a(1) − 1 = 1 ⟹ **a = 2**.
   Isliye f(x) = 2x − 1. Jaanch: f(2) = 3, f(−1) = −3 ✅.

3. (a) f(0) = **−7**; (b) f(4) = 12 − 7 = **5**; (c) f(−2) = −6 − 7 = **−13**; (d) 3x − 7 = 14 ⟹ 3x = 21 ⟹ **x = 7**. Jaanch: 3(7) − 7 = 14 ✅.

4. (a) t(0) = **32**; (b) t(25) = 9(5) + 32 = **77**; (c) t(−10) = 9(−2) + 32 = **14**; (d) 9C/5 + 32 = 212 ⟹ 9C/5 = 180 ⟹ C = 180 × 5 ÷ 9 = **100**. Jaanch: 9(100)/5 + 32 = 212 ✅.

5. (a) 12 − 5 + 3 = **10**.
   (b) 1 + (−1) + 0 + 1 = **1**.
   (c) [4.9] = 4, [−4.9] = −5, [−0.01] = −1, [2] = 2 ⟹ 4 − 5 − 1 + 2 = **0**. Jaanch: −5 ≤ −4.9 < −4 ✅.

6. (a) f(−3) = 9 + 2 = **11**, f(3) = 9 + 2 = **11**.
   (b) x² + 2 = 18 ⟹ x² = 16 ⟹ **x = −4 aur x = 4**.
   (c) x² + 2 = −2 ⟹ x² = −4, jiska koi real hal nahi (kyunki x² ≥ 0). Isliye **koi real pre-image nahi**.

7. (a) |x| ≥ 0 ⟹ −|x| ≤ 0: Domain = **R**, Range = **(−∞, 0]**.
   (b) |x| ≥ 0 ⟹ |x| + 4 ≥ 4: Domain = **R**, Range = **[4, ∞)**.
   (c) Constant function: Domain = **R**, Range = **{5}**.

8. [x] = 3 ka matlab 3 ≤ x < 4, yaani interval **[3, 4)**. Jaanch: [3] = 3, [3.99] = 3, [4] = 4 ∉ [3, 4) ✅.

9. f(1.2) = 1.44, f(1) = 1. Numerator = 1.44 − 1 = 0.44; Denominator = 1.2 − 1 = 0.2.
   0.44 ÷ 0.2 = **2.2**. Jaanch: (1.2 + 1)(1.2 − 1) ÷ (1.2 − 1) = 1.2 + 1 = 2.2 ✅.

10. **Function NAHI hai.** x = 4 ke liye y² = 4 ⟹ y = +2 aur y = −2 (ek hi input x = 4 ki do images!). Vertical line x = 4 graph (parabola y² = x) ko do points (4, 2) aur (4, −2) par kaatti hai.

11. (a) x > 0 ⟹ 3x > 0 ⟹ −3x < 0 ⟹ 2 − 3x < 2 ⟹ Range = **(−∞, 2)**.
    (b) x² ≥ 0 ⟹ x² + 5 ≥ 5 ⟹ Range = **[5, ∞)**.
    (c) Identity function on [−4, 6] ⟹ Range = **[−4, 6]**.

12. (a) ✅ True: function ek khaas shart wala relation hai.
    (b) ✅ True: ye Greatest Integer [x] ki exact paribhasha hai.
    (c) ❌ False: signum ka range sirf teen numbers **{−1, 0, 1}** hai, poora interval [−1, 1] nahi!
    (d) ❌ False: x = 2.5 lo: [−2.5] = −3, jabki −[2.5] = −2 (−3 ≠ −2!).

---

Ab tum Functions ko pehchanna aur 7 standard real functions ke graphs, domain aur range ko pakki tarah samajh chuke ho.

**Agle topic mein:** do real functions ko **jodna, ghatana, guna aur bhaag karna** (Algebra of Real Functions), aur square-root, rational aur modulus functions ke **Domain aur Range** nikaalne ke pakke tareeke!
