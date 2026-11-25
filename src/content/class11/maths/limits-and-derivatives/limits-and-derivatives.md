# Chapter: Limits and Derivatives

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [introduction-to-three-dimensional-geometry-part4.md](../introduction-to-three-dimensional-geometry/introduction-to-three-dimensional-geometry-part4.md) tha** (Introduction to Three Dimensional Geometry ka aakhri topic, jiske teaser ne vaada kiya tha ki ab hum static geometry se nikal kar badlaav aur gati ke ganit — **Calculus** — ki duniya mein pehla kadam rakhenge!). Uniform rate of change Class 10 ke [arithmetic-progressions.md](../../../class10/maths/arithmetic-progressions/arithmetic-progressions.md) mein dekha tha; ab hum har pal badalne wale rate of change ko samjhenge!
> **Topics covered in this file:**
> 1. Intuitive Idea of Derivatives, Limits (LHL & RHL), Aur Algebra of Limits

---

# Topic 1: Intuitive Idea of Derivatives, Limits, Aur Algebra of Limits

Ab tak maths mein tumne un cheezon ke saath kaam kiya jo rukhi hui (static) hoti hain — jaise kisi triangle ka area ya kisi circle ki equation. Lekin asli duniya lagatar badal rahi hai: ek girte hue patthar ki speed har millisecond badh rahi hai, rocket ka fuel kam ho raha hai, aur share market upar-neeche ja raha hai!

In badlaavon (rates of change) ko naapne ke liye Newton aur Leibniz ne **Calculus** banaya — aur Calculus ki sabse pehli eent hai **Limit**, aur doosri eent hai **Derivative**! Chalo ek real telemetry example se dono ka asli matlab samajhte hain!

---

## Sagar ka electric racing car telemetry log

Sagar apne college ki formula-student electric car ka telemetry analyst hai. Test track par car ke distance-time sensor ne formula record kiya:
**s(t) = 4.9 t²** (jahan t seconds mein aur s meters mein hai).

Team captain ne poochha: "Sagar, theek **t = 2 second** par car ka speedometer exact kitni speed dikha raha tha?"

Sagar ne socha: "Average speed = (change in distance) / (change in time) = [s(2 + h) - s(2)] / h. Par agar main theek t = 2 par h = 0 rakh doon, to 0/0 aa jayega! Isliye main time interval h ko chhota karte-karte 0 ke behad kareeb le jaata hoon!"

Usne telemetry computer par table nikala:

| Time interval [2, 2 + h] | h (seconds) | Distance change s(2 + h) - s(2) | Average Speed (m/s) |
|---|---|---|---|
| [2, 2.1] | 0.1 | 4.9(4.41 - 4) = 2.009 | 20.09 |
| [2, 2.01] | 0.01 | 4.9(4.0401 - 4) = 0.19649 | 19.649 |
| [2, 2.001] | 0.001 | 4.9(4.004001 - 4) = 0.0196049 | 19.6049 |
| [2, 2.0001] | 0.0001 | 4.9(4.00040001 - 4) = 0.001960049 | 19.60049 |

Sagar chilla utha: "Dekho! Jaise-jaise h -> 0, average speed **19.6 m/s** ki taraf jhuk rahi hai! Yehi **Limit** hai — aur yahi exact t = 2 second par car ki **instantaneous speed (Derivative)** hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Limit (lim_{x->a} f(x) = L)** | Woh value L jiske behad kareeb f(x) pahunch jata hai jab x, a ke behad kareeb (par a ke barabar nahi!) jata hai | lim_{x->2} (x² - 4)/(x - 2) = 4 |
| **Left-Hand Limit (LHL)** | Jab x, a ke **left side (x < a)** se a ke kareeb aaye: lim_{x->a⁻} f(x) | x = 1.9, 1.99, 1.999 -> 2⁻ |
| **Right-Hand Limit (RHL)** | Jab x, a ke **right side (x > a)** se a ke kareeb aaye: lim_{x->a⁺} f(x) | x = 2.1, 2.01, 2.001 -> 2⁺ |
| **Limit Exists** | Limit sirf tab exist karti hai jab LHL aur RHL dono finite hon aur **LHL = RHL** ho | LHL = RHL = L |
| **Instantaneous Rate (Derivative)** | Average rate [f(a + h) - f(a)] / h ki limit jab h -> 0 | Speedometer reading at t = 2 s |

---

## Part A: Limit Ka Asli Matlab (LHL = RHL)

Jab hum likhte hain **lim_{x->a} f(x) = L**, to hum **kabhi nahi poochhte** ki x = a par f(a) kya hai! Hum sirf yeh poochhte hain ki **x = a ke aas-paas** (left se x -> a⁻ aur right se x -> a⁺) function kis number L ki taraf ja raha hai!

```
   Left side (x -> a-)              x = a               Right side (x -> a+)
   ---- 1.9 --- 1.99 --- 1.999 --->  (a)  <--- 2.001 --- 2.01 --- 2.1 ----
              LHL                                         RHL
```

- **Existence Rule:**
  lim_{x->a} f(x) = L  **<=>**  **lim_{x->a⁻} f(x) = lim_{x->a⁺} f(x) = L** (finite number).
- Agar **LHL ≠ RHL**, to hum kehte hain: **Limit Does Not Exist (DNE)**!
- **Zaroori Baat:** f(a) undefined ho sakta hai ya L se alag ho sakta hai — usse limit ke existence par koi farq nahi padta!

---

## Part B: Algebra Of Limits

Maan lo lim_{x->a} f(x) = L aur lim_{x->a} g(x) = M (dono finite limits exist karti hain). Tab:
1. **Sum Rule:** lim_{x->a} [f(x) + g(x)] = L + M
2. **Difference Rule:** lim_{x->a} [f(x) - g(x)] = L - M
3. **Constant Multiple Rule:** lim_{x->a} [k · f(x)] = k · L  (k koi bhi constant)
4. **Product Rule:** lim_{x->a} [f(x) · g(x)] = L · M
5. **Quotient Rule:** lim_{x->a} [f(x) / g(x)] = L / M  (**provided M ≠ 0!**)

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 1.1: Limit Exists Even When f(a) Is Undefined
**Sawaal:** Evaluate lim_{x->2} (x² - 4) / (x - 2).

**Solution:**
Dhyan do: x = 2 par f(2) = (4 - 4)/(2 - 2) = 0/0 (undefined!).
Lekin limit mein **x ≠ 2** hota hai (x sirf 2 ke kareeb jaata hai), isliye (x - 2) ≠ 0 hai aur hum numerator-denominator se (x - 2) cancel kar sakte hain!

(x² - 4) / (x - 2) = [(x - 2)(x + 2)] / (x - 2) = x + 2  (for x ≠ 2).

Ab limit lagao:
lim_{x->2} (x + 2) = 2 + 2 = **4**.

Jaanch:
- Jaanch: LHL at x = 1.999 gives 3.999 -> 4; RHL at x = 2.001 gives 4.001 -> 4 => LHL = RHL = 4 ✅

---

### Example 1.2: Checking LHL And RHL On A Piecewise Function
**Sawaal:** Diye gaye piecewise function ke liye lim_{x->0} f(x) aur lim_{x->1} f(x) gyat karo:
f(x) = 2x + 3   (if x ≤ 0)
f(x) = 3(x + 1) (if x > 0)

**Solution:**
**At x = 0 (yahan formula badalta hai, isliye LHL aur RHL alag-alag check karo!):**
- LHL = lim_{x->0⁻} f(x) = lim_{x->0⁻} (2x + 3) = 2(0) + 3 = **3**.
- RHL = lim_{x->0⁺} f(x) = lim_{x->0⁺} 3(x + 1) = 3(0 + 1) = **3**.
Kyunki LHL = RHL = 3, isliye **lim_{x->0} f(x) = 3**.

**At x = 1 (x = 1 ke dono taraf x > 0 hi hai, isliye ek hi formula 3(x + 1) chalega!):**
- lim_{x->1} f(x) = lim_{x->1} 3(x + 1) = 3(1 + 1) = **6**.

Jaanch:
- Jaanch: x = -0.001 par 2(-0.001) + 3 = 2.998 -> 3; x = +0.001 par 3(1.001) = 3.003 -> 3 ✅

---

### Example 1.3: A Limit That Does Not Exist (Modulus Jump)
**Sawaal:** Check karo ki kya lim_{x->0} |x| / x exist karta hai.

**Solution:**
Modulus ki definition yaad karo:
- Jab x < 0: |x| = -x => f(x) = (-x) / x = **-1**.
- Jab x > 0: |x| = +x => f(x) = (+x) / x = **+1**.

Isliye:
- LHL = lim_{x->0⁻} (|x| / x) = **-1**
- RHL = lim_{x->0⁺} (|x| / x) = **+1**

Kyunki **LHL (-1) ≠ RHL (+1)**, isliye **lim_{x->0} (|x| / x) does NOT exist!**

Jaanch:
- Jaanch: x = -0.01 par |-0.01|/(-0.01) = -1, jabki x = +0.01 par |0.01|/0.01 = +1 (gap of 2!) ✅

---

### Example 1.4: Using Algebra Of Limits
**Sawaal:** Evaluate lim_{x->3} [(x² + 1)(x - 1)] / (x + 2).

**Solution:**
Pehle denominator ki limit check karo: lim_{x->3} (x + 2) = 3 + 2 = 5 ≠ 0.
Product aur Quotient Rules se:
= [ lim_{x->3} (x² + 1) · lim_{x->3} (x - 1) ] / lim_{x->3} (x + 2)
= [ (3² + 1)(3 - 1) ] / (3 + 2)
= [ 10 × 2 ] / 5 = 20 / 5 = **4**.

Jaanch:
- Jaanch: Denominator 5 ≠ 0 hai, isliye direct substitution valid hai: 20/5 = 4 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Maan lena ki lim_{x->a} f(x) hamesha f(a) ke barabar hota hai
- **Galat soch:** "f(2) defined nahi hai, isliye lim_{x->2} f(x) exist hi nahi kar sakta."
- **Sahi samajh:** Limit x = a ke **aas-paas** ka behaviour dekhti hai, theek x = a ka nahi! Example 1.1 mein f(2) undefined tha, phir bhi lim_{x->2} f(x) = 4 bilkul exist karta hai!

### Galti 2: Piecewise ya modulus function mein sirf ek side check karna
- **Galat soch:** "|x|/x mein x = 0.001 rakha to 1 aaya, isliye limit 1 hai."
- **Sahi samajh:** Right side (+1) ke saath left side (-1) bhi check karna zaroori hai! Jab tak LHL = RHL na ho, limit exist nahi karti!

### Galti 3: Denominator ki limit 0 hone par bhi Quotient Rule laga dena
- **Galat soch:** "lim_{x->2} (x² - 4)/(x - 2) = (lim (x² - 4)) / (lim (x - 2)) = 0 / 0 = 0."
- **Sahi samajh:** Quotient Rule sirf tab chalta hai jab denominator ki limit **non-zero (M ≠ 0)** ho! Agar 0/0 aaye, to pehle algebra se simplify (cancel) karna padta hai!

---

## Quick Recap

- **Intuitive derivative:** Instantaneous rate of change = limit of average rate [f(a + h) - f(a)] / h as h -> 0.
- **Existence of Limit:** lim_{x->a} f(x) = L iff **LHL = RHL = L** (finite).
- **Algebra of Limits:** Sum, Difference, Constant Multiple, Product, and Quotient (when denominator limit ≠ 0) all split cleanly across limits.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Evaluate lim_{x->3} (x + 3).

**Solution:**
Direct substitution (polynomial): 3 + 3 = **6**.

Jaanch:
- Jaanch: LHL (x = 2.999 -> 5.999) = RHL (x = 3.001 -> 6.001) = 6 ✅

---

### Question 2
Evaluate lim_{x->π} (x - 22/7).

**Solution:**
Direct substitution: **π - 22/7** (note: π ≠ 22/7 exactly, so do NOT write 0!).

Jaanch:
- Jaanch: π ≈ 3.14159 aur 22/7 ≈ 3.14286, dono exact barabar nahi hain ✅

---

### Question 3
Evaluate lim_{r->1} (π r²).

**Solution:**
Constant multiple rule: π · lim_{r->1} r² = π(1²) = **π**.

Jaanch:
- Jaanch: r = 1 par π(1)² = π ✅

---

### Question 4
Evaluate lim_{x->4} (4x + 3) / (x - 2).

**Solution:**
Denominator limit at x = 4 is 4 - 2 = 2 ≠ 0.
By Quotient Rule: (4(4) + 3) / (4 - 2) = **19 / 2**.

Jaanch:
- Jaanch: Numerator 19, denominator 2 ≠ 0 => 19/2 ✅

---

### Question 5
Evaluate lim_{x->-1} (x¹⁰ + x⁵ + 1) / (x - 1).

**Solution:**
Denominator limit at x = -1 is -1 - 1 = -2 ≠ 0.
Numerator: (-1)¹⁰ + (-1)⁵ + 1 = 1 - 1 + 1 = 1.
Limit = **-1/2**.

Jaanch:
- Jaanch: Even power (-1)¹⁰ = +1, odd power (-1)⁵ = -1 => 1 / (-2) = -1/2 ✅

---

### Question 6
Find lim_{x->0} f(x) where f(x) = x - 1 (for x < 0), 0 (for x = 0), and x + 1 (for x > 0).

**Solution:**
- LHL = lim_{x->0⁻} (x - 1) = 0 - 1 = **-1**.
- RHL = lim_{x->0⁺} (x + 1) = 0 + 1 = **+1**.
Since LHL (-1) ≠ RHL (+1), **lim_{x->0} f(x) does not exist**.

Jaanch:
- Jaanch: Jump of 2 at x = 0 (-1 vs +1) ✅

---

### Question 7
Find lim_{x->1} f(x) where f(x) = x² - 1 (for x ≤ 1) and -x² - 1 (for x > 1).

**Solution:**
- LHL = lim_{x->1⁻} (x² - 1) = 1² - 1 = **0**.
- RHL = lim_{x->1⁺} (-x² - 1) = -(1²) - 1 = **-2**.
Since LHL (0) ≠ RHL (-2), **lim_{x->1} f(x) does not exist**.

Jaanch:
- Jaanch: 0 ≠ -2 => DNE ✅

---

### Question 8
Evaluate lim_{x->5} (|x| - 5).

**Solution:**
Near x = 5, x > 0, so |x| = x.
lim_{x->5} (x - 5) = 5 - 5 = **0**.

Jaanch:
- Jaanch: LHL (4.999 - 5 = -0.001 -> 0) = RHL (5.001 - 5 = +0.001 -> 0) = 0 ✅

---

### Question 9
Evaluate lim_{x->0} (x / |x|).

**Solution:**
- LHL (x < 0 => |x| = -x): lim_{x->0⁻} x/(-x) = **-1**.
- RHL (x > 0 => |x| = x): lim_{x->0⁺} x/x = **+1**.
Since LHL ≠ RHL, **limit does not exist**.

Jaanch:
- Jaanch: -1 ≠ +1 => DNE ✅

---

### Question 10
A particle moves along a line with distance s(t) = 3t² meters at time t seconds. Compute the average speed over [1, 1 + h] and take the limit as h -> 0 to find the instantaneous speed at t = 1 s.

**Solution:**
Average speed = [s(1 + h) - s(1)] / h = [3(1 + h)² - 3(1)²] / h
= [3(1 + 2h + h²) - 3] / h = [6h + 3h²] / h = 6 + 3h (for h ≠ 0).
Taking limit as h -> 0: lim_{h->0} (6 + 3h) = **6 m/s**.

Jaanch:
- Jaanch: For h = 0.001, average speed = 6.003 -> 6 m/s ✅

---

### Question 11
Evaluate lim_{x->3} (x² - 9) / (x - 3).

**Solution:**
For x ≠ 3: (x² - 9)/(x - 3) = [(x - 3)(x + 3)]/(x - 3) = x + 3.
lim_{x->3} (x + 3) = 3 + 3 = **6**.

Jaanch:
- Jaanch: x = 2.999 gives 5.999 -> 6, x = 3.001 gives 6.001 -> 6 ✅

---

### Question 12
Given lim_{x->a} f(x) = 5 and lim_{x->a} g(x) = -2, find lim_{x->a} [3f(x) - 2g(x)] / [f(x) + g(x)].

**Solution:**
Denominator limit = 5 + (-2) = 3 ≠ 0.
By Algebra of Limits:
[3(5) - 2(-2)] / [5 + (-2)] = (15 + 4) / 3 = **19 / 3**.

Jaanch:
- Jaanch: 15 - (-4) = 19, 5 - 2 = 3 => 19/3 ✅

---

Ab tumne Limit ka asli intuition (LHL = RHL) aur Algebra of Limits samajh liya hai! Agle topic [limits-and-derivatives-part2.md](limits-and-derivatives-part2.md) mein hum **0/0 indeterminate forms** ko todne ke sabhi smart weapons seekhenge — factorization, rationalization, **Power Limit Theorem (xⁿ - aⁿ)/(x - a)**, aur **Trigonometric Limits (sin x / x -> 1)**!
