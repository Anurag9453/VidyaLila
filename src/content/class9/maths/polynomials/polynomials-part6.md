# Chapter: Polynomials (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [polynomials-part5.md](polynomials-part5.md) se aage chalti hai.** (Topic 1 aur 2 [polynomials.md](polynomials.md) mein, Topic 3 [polynomials-part2.md](polynomials-part2.md) mein, Topic 4 [polynomials-part3.md](polynomials-part3.md) mein, Topic 5 [polynomials-part4.md](polynomials-part4.md) mein hain.)
> **Topics covered in this file:**
> 7. Division Algorithm for Polynomials, Remainder Theorem, Factor Theorem

---

# Topic 7: Polynomials ka Division, Remainder Theorem aur Factor Theorem

Is topic mein teen cheezein ek ke baad ek aayengi, aur teeno ek doosre se judi hain:

1. **Division algorithm:** ek polynomial ko doosre polynomial se divide kaise karte hain.
2. **Remainder theorem:** division kiye bina remainder nikalne ka jaadui shortcut.
3. **Factor theorem:** shortcut se pata lagana ki koi cheez factor hai ya nahi.

Topic 6 mein humne polynomial ka **zero** seekha tha. Wo yahan bahut kaam aayega, kyunki zero aur factor ek hi sikke ke do pahlu hain.

---

## Laddoo baantne ki kahani

Socho aapke paas **17 laddoo** hain aur **5 bachche** hain. Aap sabko barabar baantte ho.

- Har bachche ko **3** laddoo milte hain (5 × 3 = 15).
- **2** laddoo bach jate hain jo baant nahi sakte.

Ise hum aise likhte hain:

**17 = 5 × 3 + 2**

Yahan:
- 17 = jise baanta (**dividend**)
- 5 = jisse baanta (**divisor**)
- 3 = har bachche ko kitne mile (**quotient**)
- 2 = jo bach gaya (**remainder**)

Dhyan do ek zaroori baat: **remainder (2) hamesha divisor (5) se chhota hota hai.** Agar 5 ya usse zyada bachte, to aap ek round aur baant sakte the.

Polynomials ke saath bhi bilkul yahi hota hai. Bas laddoo ki jagah x wale expressions hain. Aur "chhota" ka matlab yahan "**kam degree**" hoga.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Laddoo example | Polynomial example |
|---|---|---|---|
| **Dividend** | Jise divide karna hai | 17 | x² + 5x + 6 |
| **Divisor** | Jisse divide karna hai | 5 | x + 2 |
| **Quotient** | Divide karne par jo bhaag aaya | 3 | x + 3 |
| **Remainder** | Jo bach gaya | 2 | 0 |
| **Division algorithm** | Dividend = Divisor × Quotient + Remainder | 17 = 5 × 3 + 2 | x² + 5x + 6 = (x + 2)(x + 3) + 0 |

---

## Part A: Polynomials ka Division Algorithm

### Rule

Agar p(x) aur g(x) do polynomials hain (g(x) zero polynomial na ho), to:

> **p(x) = g(x) × q(x) + r(x)**
>
> jahan **r(x) = 0** ho, ya **r(x) ki degree, g(x) ki degree se kam** ho.

Yaani:
**Dividend = Divisor × Quotient + Remainder**

Aur remainder ke liye ek zaroori shart: **remainder ki degree divisor ki degree se kam honi chahiye.** (Laddoo mein "2 laddoo, 5 se kam hain" wali baat yaad karo.)

Isse ek aur baat nikalti hai: jab **divisor linear** (degree 1) ho, to remainder ki degree 1 se kam honi chahiye, yaani remainder ek **constant (number)** hoga (ya 0).

### Long division ke steps

Wahi tarika jo number ke saath bachpan mein seekha tha. Chaar kaam baar baar karte hain: **Divide, Multiply, Subtract, Bring down.**

1. Dividend aur divisor dono ko **standard form** mein likho (power ghatte kram mein, Topic 3 wala).
2. Agar koi power gayab ho, to use **0 coefficient** ke saath likho (Topic 3 mein seekha tha, jaise x³ + 8 = x³ + 0x² + 0x + 8).
3. **Divide:** Dividend ke **pehle term** ko divisor ke **pehle term** se divide karo. Jo aaye wo quotient ka agla term hai.
4. **Multiply:** Us quotient term ko **poore divisor** se multiply karo.
5. **Subtract:** Jo mila use dividend mein se **ghatao** (har term ka sign badal ke jodo).
6. **Bring down:** Agla term neeche utaar lo.
7. Steps 3 se 6 tab tak dohrao jab tak **bacha hua expression ki degree divisor ki degree se kam** na ho jaye. Wo remainder hai.

### Solved examples

**Example 1:** (x² + 5x + 6) ÷ (x + 2)

```
                x  +  3
            ______________
x + 2  )   x² + 5x + 6
           x² + 2x
           -------
                3x + 6
                3x + 6
                ------
                     0
```

Steps:
- x² ÷ x = **x** (quotient ka pehla term). x × (x + 2) = x² + 2x. Subtract: (x² + 5x) - (x² + 2x) = 3x. 6 neeche utaaro: 3x + 6.
- 3x ÷ x = **3**. 3 × (x + 2) = 3x + 6. Subtract: 0.

**Quotient = x + 3, Remainder = 0**

Jaanch: (x + 2)(x + 3) + 0 = x² + 5x + 6 ✅

**Example 2:** (x² + 3x + 5) ÷ (x + 1)

```
                x  +  2
            ______________
x + 1  )   x² + 3x + 5
           x² +  x
           -------
                2x + 5
                2x + 2
                ------
                     3
```

- x² ÷ x = **x**. x(x + 1) = x² + x. Subtract: 2x. Neeche 5 utaaro: 2x + 5.
- 2x ÷ x = **2**. 2(x + 1) = 2x + 2. Subtract: 5 - 2 = **3**.
- Ab bacha 3 (degree 0), jo divisor x + 1 ki degree 1 se kam hai. Rukna hai.

**Quotient = x + 2, Remainder = 3**

Jaanch: (x + 1)(x + 2) + 3 = x² + 3x + 2 + 3 = x² + 3x + 5 ✅

**Example 3:** (x³ - 6x² + 11x - 6) ÷ (x - 1)

- x³ ÷ x = **x²**. x²(x - 1) = x³ - x². Subtract: -5x². Neeche 11x: -5x² + 11x.
- -5x² ÷ x = **-5x**. -5x(x - 1) = -5x² + 5x. Subtract: 6x. Neeche -6: 6x - 6.
- 6x ÷ x = **6**. 6(x - 1) = 6x - 6. Subtract: 0.

**Quotient = x² - 5x + 6, Remainder = 0**

**Example 4 (gayab term wala):** (x³ + 8) ÷ (x + 2)

Pehle gayab terms ko 0 ke saath likho: **x³ + 0x² + 0x + 8**.

- x³ ÷ x = **x²**. x²(x + 2) = x³ + 2x². Subtract: -2x². Neeche 0x: -2x² + 0x.
- -2x² ÷ x = **-2x**. -2x(x + 2) = -2x² - 4x. Subtract: 4x. Neeche 8: 4x + 8.
- 4x ÷ x = **4**. 4(x + 2) = 4x + 8. Subtract: 0.

**Quotient = x² - 2x + 4, Remainder = 0**

Agar hum 0x² aur 0x nahi likhte, to terms galat jagah par aate. Isiliye gayab terms zaroor likho.

**Example 5 (divisor ki degree 2):** (x³ + 2x² - x + 3) ÷ (x² + 1)

Divisor mein x ka term nahi hai, to ise x² + 0x + 1 samjho.

- x³ ÷ x² = **x**. x(x² + 1) = x³ + x. Subtract: (x³ + 2x² - x) - (x³ + x) = 2x² - 2x. Neeche 3: 2x² - 2x + 3.
- 2x² ÷ x² = **2**. 2(x² + 1) = 2x² + 2. Subtract: (2x² - 2x + 3) - (2x² + 2) = **-2x + 1**.
- Ab bacha -2x + 1 (degree 1), jo divisor ki degree 2 se kam hai. Rukna hai.

**Quotient = x + 2, Remainder = -2x + 1**

Jaanch: (x² + 1)(x + 2) + (-2x + 1) = x³ + 2x² + x + 2 - 2x + 1 = x³ + 2x² - x + 3 ✅

**Example 6 (divisor ke pehle term ka coefficient 1 nahi):** (6x² + 7x + 2) ÷ (2x + 1)

- 6x² ÷ 2x = **3x**. 3x(2x + 1) = 6x² + 3x. Subtract: 4x. Neeche 2: 4x + 2.
- 4x ÷ 2x = **2**. 2(2x + 1) = 4x + 2. Subtract: 0.

**Quotient = 3x + 2, Remainder = 0**

### Jab dividend, divisor aur quotient pata ho

**Example 7:** Kisi polynomial ko g(x) se divide karne par quotient x + 2 aur remainder 2 aaya. Dividend x² + 5x + 8 hai. g(x) kya hai?

Division algorithm: Dividend = g(x) × Quotient + Remainder
x² + 5x + 8 = g(x)(x + 2) + 2
g(x)(x + 2) = x² + 5x + 6
g(x) = (x² + 5x + 6) ÷ (x + 2) = **x + 3** (Example 1 se)

Jaanch: (x + 3)(x + 2) + 2 = x² + 5x + 6 + 2 = x² + 5x + 8 ✅

---

## Part B: Remainder Theorem

### Ek chhota sa sawal

Example 2 mein humne x² + 3x + 5 ko x + 1 se divide kiya aur remainder **3** aaya. Par bahut mehnat lagi (poori long division karni padi).

Agar sirf **remainder** chahiye ho, to kya poori division karni zaroori hai? **Nahi!** Remainder theorem ek shortcut deta hai.

### Theorem

> **Agar polynomial p(x) ko (x - a) se divide kiya jaye, to remainder p(a) hota hai.**

Yaani remainder nikalne ke liye:
1. Divisor ko 0 ke barabar rakho (x - a = 0) aur x = a nikalo.
2. p(x) mein x ki jagah a rakho.
3. Jo answer aaye wahi remainder hai.

### Ye kaam kyun karta hai? (Poori baat samjho)

Division algorithm kehta hai:
**p(x) = (x - a) × q(x) + r**

(Yahan divisor linear hai, to remainder r ek number hai.)

Ab dono taraf **x = a** rakho:
p(a) = (a - a) × q(a) + r
p(a) = **0** × q(a) + r
p(a) = r

Dekho, jo hissa (x - a) ke saath multiply ho raha tha wo **0 ban gaya** aur gayab ho gaya. Sirf r bacha. Isliye **r = p(a)**.

### Example 2 ko shortcut se check karo

p(x) = x² + 3x + 5, divisor x + 1.
x + 1 = 0 → x = **-1**
p(-1) = (-1)² + 3(-1) + 5 = 1 - 3 + 5 = **3**

Long division se bhi 3 hi aaya tha. Dono ek jaise! ✅

### Solved examples

**Example 1:** p(x) = x³ - 2x² + 3x - 4 ko (x - 2) se divide karne par remainder nikalo.

x - 2 = 0 → x = 2
p(2) = (2)³ - 2(2)² + 3(2) - 4 = 8 - 8 + 6 - 4 = **2**

**Example 2:** Wahi polynomial ko (x + 1) se divide karne par remainder nikalo.

x + 1 = 0 → x = -1
p(-1) = (-1)³ - 2(-1)² + 3(-1) - 4 = -1 - 2 - 3 - 4 = **-10**

**Example 3 (divisor (ax + b) type):** Wahi polynomial ko (2x - 1) se divide karne par remainder nikalo.

2x - 1 = 0 → 2x = 1 → x = **1/2**
p(1/2) = (1/2)³ - 2(1/2)² + 3(1/2) - 4
= 1/8 - 2(1/4) + 3/2 - 4
= 1/8 - 1/2 + 3/2 - 4
= 1/8 + 1 - 4
= 1/8 - 3
= **-23/8**

**Rule:** Divisor **(ax + b)** ho to remainder **p(-b/a)** hota hai.

**Example 4:** x³ + kx² + 2x + 1 ko (x - 1) se divide karne par remainder 5 aata hai. k nikalo.

x - 1 = 0 → x = 1
p(1) = 1 + k + 2 + 1 = k + 4
Remainder 5 hai, to k + 4 = 5, **k = 1**.

Jaanch: k = 1 rakho to p(x) = x³ + x² + 2x + 1. p(1) = 1 + 1 + 2 + 1 = 5 ✅

---

## Part C: Factor Theorem

### Factor kya hota hai (yaad dilana)

Number mein:
- 12 ÷ 3 = 4, **remainder 0**. To **3, 12 ka factor hai.**
- 12 ÷ 5 = 2, remainder 2. To 5, 12 ka factor nahi hai.

Polynomial mein bhi: jab ek polynomial ko doosre se divide karne par **remainder 0** aaye, to wo divisor **factor** kehlata hai.

### Theorem

> **(x - a), p(x) ka factor hai tabhi aur sirf tabhi jab p(a) = 0.**

"Tabhi aur sirf tabhi" ka matlab ye dono taraf se sach hai:
- Agar p(a) = 0, to (x - a) factor hai.
- Agar (x - a) factor hai, to p(a) = 0.

### Ye Remainder Theorem se kaise nikalta hai?

Remainder theorem: (x - a) se divide karne par remainder = p(a).

- Agar **p(a) = 0**, to remainder 0 hai, yaani **(x - a) factor hai.**
- Agar **p(a) ≠ 0**, to remainder 0 nahi hai, yaani **(x - a) factor nahi hai.**

Factor theorem, remainder theorem ka hi ek **khaas case** hai (jab remainder 0 ho).

### Topic 6 ke zero se jodiye

Topic 6 mein humne seekha tha: **a polynomial ka zero hai jab p(a) = 0.**

Aur ab factor theorem kehta hai: **p(a) = 0 ho to (x - a) factor hai.**

To:
> **a ek zero hai ⟺ (x - a) ek factor hai.**

Dono baatein ek hi cheez ke do naam hain. Isse ek bahut kaam ki baat nikalti hai: **Topic 6 mein jo zero dhundhe the, unse seedhe factors bana sakte ho.**

Topic 6 mein x² - 3x + 2 ke zero 1 aur 2 the. To factors hain (x - 1) aur (x - 2). Check: (x - 1)(x - 2) = x² - 3x + 2 ✅

### Solved examples

**Example 1:** Kya (x - 2), p(x) = x² - 5x + 6 ka factor hai?

x - 2 = 0 → x = 2
p(2) = 4 - 10 + 6 = 0
p(2) = 0, to **haan, (x - 2) factor hai** ✅

**Example 2:** Kya (x + 1), p(x) = x³ + 1 ka factor hai?

x + 1 = 0 → x = -1
p(-1) = (-1)³ + 1 = -1 + 1 = 0
**Haan, (x + 1) factor hai** ✅

**Example 3:** Kya (x + 1), p(x) = x³ + 3x² + 3x + 2 ka factor hai?

x = -1
p(-1) = -1 + 3 - 3 + 2 = 1
p(-1) ≠ 0, to **nahi, (x + 1) factor nahi hai** ❌ (Remainder 1 aata hai.)

**Example 4 (divisor (ax + b) type):** Kya (2x - 1), p(x) = 2x² + x - 1 ka factor hai?

2x - 1 = 0 → x = 1/2
p(1/2) = 2(1/4) + 1/2 - 1 = 1/2 + 1/2 - 1 = 0
**Haan, (2x - 1) factor hai** ✅

Doosra factor bhi nikalte hain: 2x² + x - 1 = (2x - 1)(x + 1). Check karo: (2x - 1)(x + 1) = 2x² + 2x - x - 1 = 2x² + x - 1 ✅

**Example 5 (k nikalna):** k ki value nikalo jisse (x - 2), p(x) = x³ + kx² - 5x + 6 ka factor ho.

(x - 2) factor hai, to p(2) = 0.
p(2) = 8 + 4k - 10 + 6 = 4k + 4
4k + 4 = 0 → 4k = -4 → **k = -1**

Jaanch: k = -1 rakho to p(x) = x³ - x² - 5x + 6. p(2) = 8 - 4 - 10 + 6 = 0 ✅

### Factor theorem se polynomial ko poori tarah factorise karna

Ye factor theorem ka sabse kaam ka upyog hai. Teen kadam hain:

1. **Ek zero dhundo** (try karke). Tip: **constant term ke factors** (positive aur negative) try karo.
2. Factor theorem se ek factor (x - a) mil gaya.
3. Polynomial ko us factor se **divide karo.** Jo quotient mile uska aage factorise karo.

**Example 6:** x³ - 4x² + x + 6 ko poori tarah factorise karo.

**Kadam 1:** Constant term 6 hai. Uske factors: ±1, ±2, ±3, ±6. Inhe try karo.

p(1) = 1 - 4 + 1 + 6 = 4 (zero nahi)
p(-1) = -1 - 4 - 1 + 6 = **0** ✅

**Kadam 2:** p(-1) = 0, to **(x + 1) ek factor hai.**

**Kadam 3:** (x³ - 4x² + x + 6) ÷ (x + 1)

- x³ ÷ x = **x²**. x²(x + 1) = x³ + x². Subtract: -5x². Neeche x: -5x² + x.
- -5x² ÷ x = **-5x**. -5x(x + 1) = -5x² - 5x. Subtract: 6x. Neeche 6: 6x + 6.
- 6x ÷ x = **6**. 6(x + 1) = 6x + 6. Subtract: 0.

Quotient = x² - 5x + 6.

Aage factorise karo: x² - 5x + 6 = (x - 2)(x - 3).
(Kyunki 2 × 3 = 6 aur 2 + 3 = 5.)

**Poora factorisation:**
**x³ - 4x² + x + 6 = (x + 1)(x - 2)(x - 3)**

Ye wahi teen zero hain jo Topic 6 mein mile the: -1, 2, 3.

**Example 7:** x³ - 6x² + 11x - 6 ko factorise karo.

Constant term -6. Try: ±1, ±2, ±3, ±6.
p(1) = 1 - 6 + 11 - 6 = **0** ✅, to (x - 1) factor hai.

Divide karne par (Part A ke Example 3 se) quotient = x² - 5x + 6 = (x - 2)(x - 3).

**x³ - 6x² + 11x - 6 = (x - 1)(x - 2)(x - 3)**

---

## Teeno ka rishta ek nazar mein

```
Division Algorithm:   p(x) = g(x) × q(x) + r(x)
        |
        |   jab divisor linear (x - a) ho
        v
Remainder Theorem:    remainder = p(a)
        |
        |   jab remainder = 0 ho
        v
Factor Theorem:       p(a) = 0  ⟺  (x - a) factor hai
        |
        |   (Topic 6 se)
        v
                      a polynomial ka ZERO hai
```

Yaani teeno ek hi kahani ke teen kadam hain.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Gayab term ko chhod dena**
(x³ + 8) ko long division mein x³ + 8 hi likhna galat hai. Likho x³ + **0x² + 0x** + 8.

**Galti 2: Subtract karte waqt sign badalna bhool jana**
Subtract karte waqt **neeche wale poore expression ke sab signs ulte** karo.
(x² + 5x) - (x² + 2x) = x² + 5x - x² - 2x = 3x. Agar sirf pehla sign badalte aur doosra bhool jate to galat aata.

**Galti 3: Remainder ki degree divisor se kam wali shart bhool jana**
Jab tak bacha hua expression ki degree divisor ki degree ke barabar ya zyada hai, division **aage badhao.** Rukne ki shart: remainder ki degree divisor se kam ho.

**Galti 4: (x + 1) ke liye a = 1 le lena**
(x + 1) = (x - (-1)), isliye a = **-1** hai. Remainder p(**-1**) hoga, p(1) nahi. Hamesha divisor ko 0 ke barabar rakhkar x nikalo.

**Galti 5: (2x - 1) ke liye x = 1 ya 2 le lena**
2x - 1 = 0 se x = **1/2** aata hai. Remainder p(1/2) hoga.

**Galti 6: Factor theorem ko ulta samajhna**
(x - a) factor hai ⟺ p(**a**) = 0. Ye sahi hai. Par ye galat hai: (x - a) factor hai ⟺ p(**-a**) = 0. Dhyan rakho.

**Galti 7: Jaanch na karna**
Division ke baad **hamesha check karo:** Divisor × Quotient + Remainder = Dividend. 30 second lagte hain aur galti pakad mein aa jati hai.

**Galti 8: Dividend aur divisor ko alag kram mein likhna**
Dono ko standard form (descending power) mein hi likho, nahi to terms galat jagah aa jate hain.

**Galti 9: Remainder theorem ko sirf (x - a) tak samajhna**
(ax + b) wale divisors par bhi chalta hai. Bas x = -b/a rakhna hota hai.

---

## Quick Recap

- **Division algorithm:** **Dividend = Divisor × Quotient + Remainder**, jahan remainder = 0 ho ya **uski degree divisor se kam** ho.
- **Long division ke steps:** Divide, Multiply, Subtract, Bring down. Gayab terms ko 0 ke saath likho.
- **Remainder theorem:** p(x) ko (x - a) se divide karne par remainder **p(a)**. (Divisor (ax + b) ho to remainder p(-b/a).)
- **Factor theorem:** **(x - a), p(x) ka factor hai ⟺ p(a) = 0.**
- Factor theorem, remainder theorem ka khaas case hai (jab remainder 0).
- **a zero hai ⟺ (x - a) factor hai.** (Topic 6 ka zero aur factor ek hi baat hain.)
- **Factorise karne ke liye:** constant term ke factors try karke ek zero dhundo, us factor se divide karo, aur quotient ko aage factorise karo.
- Hamesha **jaanch** karo: Divisor × Quotient + Remainder = Dividend.

---

## Practice Questions

1. Divide and write the quotient and remainder:
   (a) (x² + 7x + 10) ÷ (x + 2)
   (b) (x² - 2x + 5) ÷ (x - 3)
   (c) (x³ - 1) ÷ (x - 1)
   (d) (2x³ + x² - 5x + 2) ÷ (2x - 1)

2. Find the remainder (without long division) when p(x) = x³ - 3x² + 4x + 7 is divided by:
   (a) x - 1
   (b) x + 2
   (c) 2x - 3

3. The polynomial x³ + kx² + 2x + 1 leaves remainder 5 when divided by (x - 1). Find k.

4. Use the Factor Theorem to decide whether the first expression is a factor of the second:
   (a) (x - 1), x³ + x² - x - 1
   (b) (x + 1), x³ + 3x² + 3x + 2
   (c) (2x + 1), 2x² + 3x + 1

5. Find the value of k so that (x - 2) is a factor of x³ + kx² - 5x + 6.

6. Factorise completely: x³ - 6x² + 11x - 6.

7. When a polynomial is divided by g(x), the quotient is x + 2 and the remainder is 2. If the polynomial is x² + 5x + 8, find g(x).

8. State whether each statement is true or false. Give a reason.
   (a) If the remainder is zero, the divisor is a factor of the dividend.
   (b) The remainder when p(x) is divided by (x + 3) is p(3).
   (c) A polynomial of degree 3 is divided by a polynomial of degree 2. The remainder can have degree 2.
   (d) If p(a) = 0, then (x - a) is a factor of p(x).

### Answers

1. (a) Quotient ka pehla term x, to x(x + 2) = x² + 2x, subtract: 5x + 10. Phir 5(x + 2) = 5x + 10, subtract: 0.
   **Quotient = x + 5, Remainder = 0**
   (b) x(x - 3) = x² - 3x, subtract: x + 5, 1(x - 3) = x - 3, subtract: 8.
   **Quotient = x + 1, Remainder = 8**
   Jaanch: (x - 3)(x + 1) + 8 = x² - 2x - 3 + 8 = x² - 2x + 5 ✅
   (c) Pehle x³ + 0x² + 0x - 1 likho. x²(x - 1) = x³ - x², subtract: x² + 0x. x(x - 1) = x² - x, subtract: x - 1. 1(x - 1) = x - 1, subtract: 0.
   **Quotient = x² + x + 1, Remainder = 0**
   (d) x²(2x - 1) = 2x³ - x², subtract: 2x² - 5x. x(2x - 1) = 2x² - x, subtract: -4x + 2. -2(2x - 1) = -4x + 2, subtract: 0.
   **Quotient = x² + x - 2, Remainder = 0**
2. (a) x = 1: p(1) = 1 - 3 + 4 + 7 = **9**
   (b) x = -2: p(-2) = -8 - 12 - 8 + 7 = **-21**
   (c) 2x - 3 = 0 → x = 3/2. p(3/2) = 27/8 - 27/4 + 6 + 7 = 27/8 - 54/8 + 104/8 = **77/8**
3. p(1) = 1 + k + 2 + 1 = k + 4 = 5, to **k = 1**.
4. (a) x = 1: p(1) = 1 + 1 - 1 - 1 = 0. **Haan**, factor hai.
   (b) x = -1: p(-1) = -1 + 3 - 3 + 2 = 1 ≠ 0. **Nahi**, factor nahi hai.
   (c) 2x + 1 = 0 → x = -1/2. p(-1/2) = 2(1/4) + 3(-1/2) + 1 = 1/2 - 3/2 + 1 = 0. **Haan**, factor hai.
5. p(2) = 8 + 4k - 10 + 6 = 4k + 4 = 0, to **k = -1**.
6. p(1) = 1 - 6 + 11 - 6 = 0, to (x - 1) factor hai. Divide karne par quotient x² - 5x + 6 = (x - 2)(x - 3).
   **x³ - 6x² + 11x - 6 = (x - 1)(x - 2)(x - 3)**
7. g(x)(x + 2) + 2 = x² + 5x + 8, to g(x)(x + 2) = x² + 5x + 6 = (x + 2)(x + 3).
   **g(x) = x + 3**
8. (a) **True.** Remainder 0 ka matlab divide hone par kuch nahi bacha, yaani divisor factor hai.
   (b) **False.** x + 3 = 0 se x = **-3** aata hai, to remainder p(**-3**) hota hai.
   (c) **False.** Remainder ki degree divisor ki degree (2) se **kam** honi chahiye, yaani zyada se zyada 1.
   (d) **True.** Ye factor theorem hai.

---

Agar teeno ek saath yaad rakhna mushkil lage, to bas ye yaad rakho: **remainder jaanna hai to x = a rakho. Remainder 0 aaye to wo factor hai.** Baaki sab isi ek baat se nikalta hai.
