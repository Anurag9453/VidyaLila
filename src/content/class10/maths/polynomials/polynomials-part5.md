# Chapter: Polynomials (Part 5)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [polynomials-part4.md](polynomials-part4.md) se aage chalti hai** (wahan Topic 4 mein cubic ke teen zeros aur teen relations seekhe: α + β + γ = −b/a, αβ + βγ + γα = c/a, αβγ = −d/a). Chapter ki shuruaat: [polynomials.md](polynomials.md). Class 9 ka division algorithm, remainder theorem aur factor theorem: [polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md).
> **Topics covered in this file:**
> 5. Division Algorithm Ke Gehre Sawaal: Dividend, Divisor, Quotient, Remainder

---

# Topic 5: Division Algorithm Ke Gehre Sawaal: Dividend, Divisor, Quotient, Remainder

Topic 2 se Topic 4 tak hum zeros aur coefficients ke rishte mein ghoomte rahe. Ab ek purane dost ke paas wapas chalte hain: **division algorithm**, jo Class 9 mein long division ke saath aaya tha. Wahan humne dekha tha ki ek polynomial ko doosre se divide kaise karte hain. Is topic mein sawaal **ulte-seedhe** honge: kabhi dividend gaayab hoga, kabhi divisor, kabhi quotient. Kabhi divisor khud quadratic hoga, aur kabhi do anjaane coefficients k aur m ko is tarah chunna hoga ki division poori-poori ho jaaye. Aur ek baar divisor aur quotient mil jaayein, to cubic ya biquadratic ke saare zero dhundna bhi aasaan ho jaata hai.

---

## Kinjal ki cooking class

Kinjal ki Saturday ki cooking class chal rahi hai. Teacher ma'am ne aaj cookies banwayi hain, aur sab bacchon ko dabbe bharne ka kaam diya hai. Ma'am ne board par likha:

**113 cookies, har dabbe mein 12.**

Kinjal ne hisaab lagaya: 9 dabbe poore bhare (9 × 12 = 108) aur 5 cookies bach gayi. Usne copy mein likha:

113 = 12 × 9 + 5

```
113 cookies:  [12] [12] [12] [12] [12] [12] [12] [12] [12]  o o o o o
               1    2    3    4    5    6    7    8    9    5 bache
```

> **Figure 5.1** – 113 cookies ko 12-12 ke dabbon mein bharna: 9 poore dabbe aur 5 cookies bach gayi. Bachi hui 5 cookies ek dabbe (12) se kam hain, isliye ek aur dabba nahi bhar sakta.

"Shabaash," ma'am ne kaha. "Ab meri paheliyan suno. Pehli: 9 dabbe poore bhare, 12-12 cookies, aur 5 bachi. Total kitni thi? Doosri: total 113, 9 poore dabbe, 5 bachi. Har dabbe mein kitni thi? Teesri: total 113, har dabbe mein 12. Kitne dabbe aur kitni bachi?"

Kinjal ne teeno aaram se kar liye. Pehli mein **guna aur jod** (12 × 9 + 5), doosri mein **ghatao aur bhaag** ((113 − 5) ÷ 9), teesri mein seedhi division.

Phir ma'am ne board par ek aur paheli likhi, jisme cookies ki jagah algebra tha:

"Ek polynomial ko x² + 2x − 1 se divide kiya. Quotient 3x − 4 aaya aur remainder 2x + 5 bacha. Mool polynomial kya tha?"

Kinjal ghabra gayi. Par ma'am muskuraayi, "Dabbe wali pehli paheli yaad karo. Wahan tumne kya kiya tha?" Kinjal ne socha: guna aur jod! Kya wahi polynomials ke saath bhi chalega? Aur agar divisor quadratic ho (jaise yahan x² + 2x − 1), to remainder kitna bada ho sakta hai? Chalo dekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Poora-poora bhaag (exactly divisible)** | p(x) ko g(x) se divide karne par remainder 0 aaye. Tab g(x), p(x) ka factor hota hai | x⁴ − x³ − 7x² + 23x − 20 ko x² − 3x + 4 se divide karne par remainder 0 (Part B) |
| **Linear remainder (px + q wala remainder)** | Jab divisor quadratic ho, to remainder ki degree 1 se kam honi chahiye, yaani remainder px + q ke roop ka hota hai (p aur q number hain, koi bhi 0 ho sakta hai) | Part C mein 2x + 3 aur x − 4 |
| **Degree table** | Ek chhoti table jo batati hai ki dividend aur divisor ki degree se quotient aur remainder ki degree kya ho sakti hai | Part A |
| **Anjaana hissa (missing polynomial)** | Identity p = g × q + r ke chaar hisson mein se jo diya nahi gaya aur hume dhundna hai | Part B mein kabhi p, kabhi q, kabhi g |

---

## Class 9 se yaad

[polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md) mein Class 9 ne seekha tha: **dividend = divisor × quotient + remainder**, yaani p(x) = g(x) × q(x) + r(x), jahan r(x) = 0 ho ya r(x) ki degree g(x) ki degree se kam ho. Long division ke chaar kaam the (divide, multiply, subtract, bring down), gayab power ko 0 coefficient ke saath likhna tha, aur linear divisor (x − a) ke liye remainder theorem ne remainder p(a) bataya tha. Ye sab hum yahan seedha use karenge. Chapter 1 ke [real-numbers.md](../real-numbers/real-numbers.md) (Topic 1) mein numbers ke liye Euclid ka Division Lemma a = bq + r (0 ≤ r < b) mila tha: wo is identity ka chhota bhai hai, aur is topic mein wahi kahani gehri hoti hai.

---

## Part A: Identity ke chaar hisse aur degree ka niyam

p(x) = g(x) × q(x) + r(x)

```
     p(x)     =     g(x)    ×     q(x)    +      r(x)
   dividend       divisor       quotient      remainder
   degree 4       degree 2      degree 2    degree 0 ya 1
                                               ya r = 0
```

> **Figure 5.2** – Division algorithm ke chaar hisse. Figure mein degree wale numbers ek misaal ke hain: dividend degree 4, divisor degree 2. Tab quotient degree 2 ka aur remainder 0 ya degree 1 tak ka hota hai.

**Niyam:** r(x) = 0 ho, **ya** r(x) ki degree g(x) ki degree se **kam** ho.

**Ye niyam kyun zaroori hai?** Cookies mein dekho: 113 = 12 × 8 + 17 bhi sahi hai (12 × 8 = 96, 96 + 17 = 113). Par ye jawab adhoora hai, kyunki bache hue 17 mein se ek aur poora dabba (12) bhar sakta hai. "Bacha hua hissa divisor se chhota ho" ka niyam hi ye tay karta hai ki division kab rukti hai, aur isi se q aur r **ek hi tarah se** nikalte hain. Polynomial mein "chhota" ka matlab "kam degree" hai. Jab tak bache hue polynomial ki degree divisor ki degree ke barabar ya zyada hai, ek term aur divide ho sakta hai.

Isse ek seedhi baat nikalti hai. Jab p ki degree g ki degree se kam na ho, to **q ki degree = (p ki degree) − (g ki degree)**, kyunki quotient ka sabse bada term p ke sabse bade term ko g ke sabse bade term se divide karne par aata hai. Aur r ki degree g ki degree se kam rehti hai.

### Degree table

| p ki degree | g ki degree | q ki degree | r kaisa ho sakta hai |
|---|---|---|---|
| 3 | 1 | 2 | constant (ya 0) |
| 3 | 2 | 1 | px + q ke roop ka (ya 0) |
| 4 | 1 | 3 | constant (ya 0) |
| 4 | 2 | 2 | px + q ke roop ka (ya 0) |
| 4 | 3 | 1 | degree 2 tak (ya 0) |
| 5 | 3 | 2 | degree 2 tak (ya 0) |
| 2 | 3 | q = 0 | r = p khud |

Aakhri row dekho: jab dividend ki degree divisor se pehle hi kam hai, to divide karne ko kuch bacha hi nahi. Tab q = 0 aur p = g × 0 + p, yaani remainder dividend khud hai. Jaise 3 ko 5 se divide karo: 3 = 5 × 0 + 3.

**Seekh:** divisor ki degree n ho to remainder ke zyada se zyada n coefficients ho sakte hain (degree n − 1 tak). Isliye quadratic divisor ka remainder px + q (do coefficients), aur linear divisor ka remainder sirf ek number.

---

## Part B: Teen anjaane hisse: p, q ya g

### Example 1: dividend dhundo (guna aur jod)

Kinjal ki paheli: g(x) = x² + 2x − 1, q(x) = 3x − 4, r(x) = 2x + 5. Mool polynomial p(x) kya hai?

Dabbe wali paheli ki tarah: **p = g × q + r**. Pehle guna:

(x² + 2x − 1)(3x − 4) = x²(3x − 4) + 2x(3x − 4) − 1(3x − 4)
= 3x³ − 4x² + 6x² − 8x − 3x + 4
= 3x³ + 2x² − 11x + 4

Ab remainder jodo: (3x³ + 2x² − 11x + 4) + (2x + 5) = **3x³ + 2x² − 9x + 9**.

**Jaanch:** r ki degree 1, g ki degree 2 se kam hai, to ye sahi division hai. Ek number se check: x = 1 rakho. g(1) = 2, q(1) = −1, r(1) = 7, to g × q + r = −2 + 7 = 5. Aur p(1) = 3 + 2 − 9 + 9 = 5 ✅

### Example 2: quotient dhundo

Ek polynomial p(x) = 6x³ − 5x² − 3x + 7 ko g(x) = 3x + 2 se divide karne par remainder 5 aata hai. Quotient dhundo.

p = g × q + r se **g × q = p − r**. Pehle remainder ghatao: 6x³ − 5x² − 3x + 7 − 5 = 6x³ − 5x² − 3x + 2. Ab ise 3x + 2 se divide karo:

- 6x³ ÷ 3x = 2x². 2x²(3x + 2) = 6x³ + 4x². Subtract: −9x² − 3x + 2.
- −9x² ÷ 3x = −3x. −3x(3x + 2) = −9x² − 6x. Subtract: 3x + 2.
- 3x ÷ 3x = 1. 1(3x + 2) = 3x + 2. Subtract: 0.

Quotient **q(x) = 2x² − 3x + 1**. Bacha 0, yaani (p − r) poora g ka multiple tha.

**Jaanch:** (3x + 2)(2x² − 3x + 1) + 5 = 6x³ − 9x² + 3x + 4x² − 6x + 2 + 5 = 6x³ − 5x² − 3x + 7 ✅. Remainder theorem se bhi: 3x + 2 = 0 se x = −2/3, aur p(−2/3) = 6(−8/27) − 5(4/9) − 3(−2/3) + 7 = −16/9 − 20/9 + 2 + 7 = −4 + 9 = 5 ✅

### Example 3: divisor dhundo

Ek polynomial p(x) = x⁴ + 5x³ + 6x² − 6x − 17 ko g(x) se divide karne par quotient x² + x − 3 aur remainder x − 2 aata hai. g(x) dhundo.

p = g × q + r se **g = (p − r) ÷ q**. Pehle p − r = x⁴ + 5x³ + 6x² − 6x − 17 − (x − 2) = x⁴ + 5x³ + 6x² − 7x − 15. Ab ise x² + x − 3 se divide karo:

- x⁴ ÷ x² = x². x²(x² + x − 3) = x⁴ + x³ − 3x². Subtract: 4x³ + 9x² − 7x − 15.
- 4x³ ÷ x² = 4x. 4x(x² + x − 3) = 4x³ + 4x² − 12x. Subtract: 5x² + 5x − 15.
- 5x² ÷ x² = 5. 5(x² + x − 3) = 5x² + 5x − 15. Subtract: 0.

**g(x) = x² + 4x + 5.**

**Jaanch:** (x² + 4x + 5)(x² + x − 3) = x⁴ + x³ − 3x² + 4x³ + 4x² − 12x + 5x² + 5x − 15 = x⁴ + 5x³ + 6x² − 7x − 15. Isme remainder x − 2 jodo: x⁴ + 5x³ + 6x² − 6x − 17 ✅. Aur r ki degree 1 < g ki degree 2, to ye shart bhi poori hui ✅

### Example 4: kya ek polynomial doosre ka factor hai?

Class 9 ka factor theorem sirf (x − a) jaise linear divisor ke liye tha. Quadratic divisor ke liye seedha raasta hai: **divide karo, aur dekho remainder 0 hai ya nahi.** Dekhte hain ki g(x) = x² − 3x + 4, in dono ka factor hai ya nahi:
(a) x⁴ − x³ − 7x² + 23x − 20 (b) x⁴ − x³ − 7x² + 25x − 19

**(a)** x²(x² − 3x + 4) = x⁴ − 3x³ + 4x². Subtract: 2x³ − 11x² + 23x − 20. Phir 2x(x² − 3x + 4) = 2x³ − 6x² + 8x. Subtract: −5x² + 15x − 20. Phir −5(x² − 3x + 4) = −5x² + 15x − 20. Subtract: **0**. Remainder 0 hai, to g(x) factor **hai**, aur quotient x² + 2x − 5.

**(b)** x²(x² − 3x + 4) = x⁴ − 3x³ + 4x² subtract karne par 2x³ − 11x² + 25x − 19 bachta hai. Phir 2x(x² − 3x + 4) = 2x³ − 6x² + 8x, subtract: −5x² + 17x − 19. Phir −5(x² − 3x + 4) = −5x² + 15x − 20, subtract: **2x + 1**. Remainder 2x + 1 non-zero hai (aur uski degree 1 < 2, to division yahin rukti hai), to g(x) factor **nahi** hai.

**Jaanch:** (a) (x² − 3x + 4)(x² + 2x − 5) = x⁴ + 2x³ − 5x² − 3x³ − 6x² + 15x + 4x² + 8x − 20 = x⁴ − x³ − 7x² + 23x − 20 ✅. (b) ka polynomial (a) se sirf x ke coefficient (25 aur 23) aur constant (−19 aur −20) mein alag hai, aur 2x + 1 wahi farak hai: (25 − 23)x + (−19 + 20) ✅

---

## Part C: Jab divisor quadratic ho

Quadratic divisor ke saath do baatein naya hain: dividend ke **do-do term** utarte hain, aur remainder **px + q** ke roop ka niklega. Sabse zaroori: **gayab power ko 0 ke saath likho**, nahi to terms galat column mein pad jaate hain.

### Example 5: biquadratic ÷ quadratic (gayab term ke saath)

(2x⁴ − 3x³ + 5x − 7) ÷ (x² − x + 2).

Dividend mein x² ka term nahi hai, to ise 2x⁴ − 3x³ + **0x²** + 5x − 7 likho.

```
                   2x²     - x     - 5
              ________________________________________
x² - x + 2 )       2x⁴   - 3x³   + 0x²    + 5x     - 7
                   2x⁴   - 2x³   + 4x²
                   -------------------
                          - x³   - 4x²    + 5x     - 7
                          - x³    + x²    - 2x
                          --------------------
                                 - 5x²    + 7x     - 7
                                 - 5x²    + 5x    - 10
                                 ---------------------
                                            2x     + 3
```

> **Figure 5.3** – Long division jisme divisor quadratic hai. Har step mein divisor ko ek term se guna karke neeche likha, subtract kiya, aur agla term neeche utara. Dividend mein 0x² ek placeholder hai.

- 2x⁴ ÷ x² = 2x². 2x²(x² − x + 2) = 2x⁴ − 2x³ + 4x². Subtract: −x³ − 4x² + 5x − 7.
- −x³ ÷ x² = −x. −x(x² − x + 2) = −x³ + x² − 2x. Subtract: −5x² + 7x − 7.
- −5x² ÷ x² = −5. −5(x² − x + 2) = −5x² + 5x − 10. Subtract: 2x + 3.
- 2x + 3 ki degree 1 hai, jo divisor ki degree 2 se kam hai. Ruk jao.

**Quotient 2x² − x − 5, remainder 2x + 3.**

**Jaanch:** (x² − x + 2)(2x² − x − 5) = 2x⁴ − x³ − 5x² − 2x³ + x² + 5x + 4x² − 2x − 10 = 2x⁴ − 3x³ + 0x² + 3x − 10. Remainder jodo: 2x⁴ − 3x³ + 5x − 7 ✅

### Example 6: pehla coefficient 1 nahi

(4x³ + 4x² + 4x + 5) ÷ (2x² − x + 3).

- 4x³ ÷ 2x² = 2x. 2x(2x² − x + 3) = 4x³ − 2x² + 6x. Subtract: 6x² − 2x + 5.
- 6x² ÷ 2x² = 3. 3(2x² − x + 3) = 6x² − 3x + 9. Subtract: x − 4.
- x − 4 ki degree 1 < 2. Ruk jao.

**Quotient 2x + 3, remainder x − 4.**

**Jaanch:** (2x² − x + 3)(2x + 3) = 4x³ + 6x² − 2x² − 3x + 6x + 9 = 4x³ + 4x² + 3x + 9. Remainder x − 4 jodo: 4x³ + 4x² + 4x + 5 ✅

### Example 7: remainder ki ek alag raaste se jaanch

(2x³ + x² − 7x + 4) ÷ (x² − x − 20). Long division:

- 2x³ ÷ x² = 2x. 2x(x² − x − 20) = 2x³ − 2x² − 40x. Subtract: 3x² + 33x + 4.
- 3x² ÷ x² = 3. 3(x² − x − 20) = 3x² − 3x − 60. Subtract: 36x + 64.

**Quotient 2x + 3, remainder 36x + 64.**

**Jaanch (alag raaste se):** divisor x² − x − 20 = (x − 5)(x + 4), to x = 5 aur x = −4 par divisor 0 ho jaata hai. Identity p(x) = g(x) q(x) + r(x) mein x = 5 rakho: p(5) = 0 × q(5) + r(5) = r(5). Yaani **jahan divisor 0 hota hai, wahan p aur r ki value barabar hoti hai.**
Jaanch x = 5: p(5) = 250 + 25 − 35 + 4 = 244, aur r(5) = 36 × 5 + 64 = 244 ✅
Jaanch x = −4: p(−4) = −128 + 16 + 28 + 4 = −80, aur r(−4) = −144 + 64 = −80 ✅
(Ye jaanch tabhi chalti hai jab divisor ke zero seedhe dikhein. Example 5 aur 6 ke divisor ke zero seedhe nahi dikhte, isliye wahan multiply-back jaanch use ki.)

---

## Part D: k aur m aise chuno ki division poori-poori ho

### Example 8: do anjaane coefficient

k aur m ki wo values dhundo jinke liye x⁴ + 3x³ + kx² + 14x + m, x² − 2x + 4 se poora-poora divide ho jaaye.

**Idea:** quadratic divisor ka remainder px + q hota hai, jisme do coefficients hain. Poora-poora bhaag tabhi hoga jab **dono coefficient 0 ho jaayein**. Isliye do anjaane (k aur m) aur do equations: bilkul theek jodi.

k aur m ko letters ki tarah hi rakh kar divide karo:

- x⁴ ÷ x² = x². x²(x² − 2x + 4) = x⁴ − 2x³ + 4x². Subtract: 5x³ + (k − 4)x² + 14x + m.
- 5x³ ÷ x² = 5x. 5x(x² − 2x + 4) = 5x³ − 10x² + 20x. Subtract: (k + 6)x² − 6x + m.
- (k + 6)x² ÷ x² = k + 6. (k + 6)(x² − 2x + 4) = (k + 6)x² − 2(k + 6)x + 4(k + 6). Subtract: [−6 + 2(k + 6)]x + [m − 4(k + 6)] = (2k + 6)x + (m − 4k − 24).

Remainder (2k + 6)x + (m − 4k − 24). Dono coefficient 0 karo:
- 2k + 6 = 0 ⇒ **k = −3**
- m − 4k − 24 = 0 ⇒ m = 4(−3) + 24 = **12**

**Jaanch:** k = −3, m = 12 se polynomial x⁴ + 3x³ − 3x² + 14x + 12. Quotient x² + 5x + (k + 6) = x² + 5x + 3. (x² − 2x + 4)(x² + 5x + 3) = x⁴ + 5x³ + 3x² − 2x³ − 10x² − 6x + 4x² + 20x + 12 = x⁴ + 3x³ − 3x² + 14x + 12 ✅

**Dhyan do:** agar sirf ek anjaana hota (sirf k), to do equations ek hi unknown ke liye hoti, aur aam taur par dono ek saath poori nahi hoti. Isliye sawaal mein anjaane utne hi rakhe jaate hain jitne remainder ke coefficients.

---

## Part E: Do zero diye hain, to baaki zero?

Idea Topic 4 ke Example 8 jaisa hai, par ab division se: agar α aur β (alag-alag) zero hain, to (x − α)(x − β) polynomial ka factor hai (Class 9 ka factor theorem do baar). Is quadratic se divide karo, to bacha quotient chhota polynomial hai, aur uske zero hi baaki zero hain.

### Example 9: biquadratic ke do zero diye hain

2x⁴ − 5x³ − 16x² + 45x − 18 ke do zero 2 aur −3 hain. Baaki zero dhundo.

**Kadam 1:** (x − 2)(x + 3) = x² + x − 6.

**Kadam 2:** divide karo (2x⁴ − 5x³ − 16x² + 45x − 18) ÷ (x² + x − 6):
- 2x⁴ ÷ x² = 2x². 2x²(x² + x − 6) = 2x⁴ + 2x³ − 12x². Subtract: −7x³ − 4x² + 45x − 18.
- −7x³ ÷ x² = −7x. −7x(x² + x − 6) = −7x³ − 7x² + 42x. Subtract: 3x² + 3x − 18.
- 3x² ÷ x² = 3. 3(x² + x − 6) = 3x² + 3x − 18. Subtract: 0.

Quotient 2x² − 7x + 3.

**Kadam 3:** 2x² − 7x + 3 = (2x − 1)(x − 3), to zero **1/2 aur 3**.

Poore zero: **2, −3, 3, 1/2** (biquadratic ke zyada se zyada 4 zero ho sakte hain, aur yahan chaaron mil gaye).

**Jaanch:** p(3) = 162 − 135 − 144 + 135 − 18 = 0 ✅. p(1/2) = 2/16 − 5/8 − 16/4 + 45/2 − 18 = 1/8 − 5/8 − 4 + 45/2 − 18 = −1/2 + 18.5 − 18 = 0 ✅

### Example 10: zero irrational hon

2x³ − x² − 8x − 3 ke do zero 1 + √2 aur 1 − √2 hain. Teesra zero dhundo.

Jod (1 + √2) + (1 − √2) = 2 aur guna (1 + √2)(1 − √2) = 1 − 2 = −1. Topic 3 ke tareeke se divisor x² − (jod)x + guna = **x² − 2x − 1**. Divisor ke coefficients saaf integers hain (irrational zero ka √2 jod-guna mein gayab ho gaya), to division saaf chalti hai:

- 2x³ ÷ x² = 2x. 2x(x² − 2x − 1) = 2x³ − 4x² − 2x. Subtract: 3x² − 6x − 3.
- 3x² ÷ x² = 3. 3(x² − 2x − 1) = 3x² − 6x − 3. Subtract: 0.

Quotient 2x + 3, to teesra zero **−3/2**.

**Jaanch:** p(−3/2) = 2(−27/8) − 9/4 + 12 − 3 = −27/4 − 9/4 + 9 = −9 + 9 = 0 ✅. Aur (x² − 2x − 1)(2x + 3) = 2x³ + 3x² − 4x² − 6x − 2x − 3 = 2x³ − x² − 8x − 3 ✅

---

## Part F: Quotient aur remainder ke sawaal, aur do cousins

### Example 11: dabbon wali paheli, polynomial ke roop mein

Kinjal ki class ki ek doosri ticket: ek mithai ke dabbe mein (x + 4) pieces hain. (2x² − 3x + 5) dabbe poore bhare gaye aur 3 pieces bache. Total pieces ka polynomial likho. Phir x = 6 par pieces gino aur number-division se check karo.

Division algorithm seedha: total = dabbe mein pieces × dabbe + bache = (x + 4)(2x² − 3x + 5) + 3.
(x + 4)(2x² − 3x + 5) = 2x³ − 3x² + 5x + 8x² − 12x + 20 = 2x³ + 5x² − 7x + 20. Remainder 3 jodo: **p(x) = 2x³ + 5x² − 7x + 23**.

x = 6 par: dabbe mein 6 + 4 = 10 pieces, dabbe 2 × 36 − 18 + 5 = 59, bache 3. Total 10 × 59 + 3 = 593.

**Jaanch:** p(6) = 432 + 180 − 42 + 23 = 593 ✅. Number-division bhi wahi kahti hai: 593 = 10 × 59 + 3, aur 3 < 10 ✅

**Shortcut yaad rakho:** word problem mein jo bhi "har dabbe mein", "kitne dabbe poore", "kitne bache" likha ho, wo divisor, quotient aur remainder hain. Total hamesha divisor × quotient + remainder.

### Do cousins: numbers aur polynomials

| | Numbers (Chapter 1, Topic 1) | Polynomials (is topic mein) |
|---|---|---|
| Identity | a = bq + r | p(x) = g(x) q(x) + r(x) |
| Remainder ka niyam | 0 ≤ r < b | r = 0 ya degree r < degree g |
| "Chhota" ka matlab | value mein chhota | degree mein chhota |
| Kaam | HCF dhundne ka algorithm | zero aur factor dhundna |

Dono ka ek hi sandesh hai: **bacha hua hissa divisor se chhota hona chahiye, tabhi q aur r ek hi tarah se tay hote hain.**

---

## Aam galtiyan (bachke rehna)

**Galti 1: dividend likhte waqt remainder jodna bhool jaana**

Cookies mein dekho: 113 = 12 × 9 + 5. Agar koi sirf 12 × 9 = 108 likh de, to 5 cookies gayab ho jaati hain. Polynomial mein bhi yahi hota hai. g(x) = x² + 3, q(x) = 2x − 1 aur r(x) = 4x + 7 diye hain. Ek bacche ne p = g × q likha:

(x² + 3)(2x − 1) = 2x³ − x² + 6x − 3.

Ek number se check karo, x = 1 rakho. g(1) = 4, q(1) = 1, r(1) = 11, to asli p(1) = 4 × 1 + 11 = 15. Par bacche ke polynomial mein 2 − 1 + 6 − 3 = 4 aata hai. Dono alag hain, to jawab galat hai.

Sahi: **p = g × q + r** = 2x³ − x² + 6x − 3 + 4x + 7 = **2x³ − x² + 10x + 4**.

**Jaanch:** p(1) = 2 − 1 + 10 + 4 = 15 ✅. Wapas divide karke bhi: 2x(x² + 3) = 2x³ + 6x, subtract: −x² + 4x + 4. Phir −1(x² + 3) = −x² − 3, subtract: 4x + 7. Quotient 2x − 1, remainder 4x + 7 ✅

**Galti 2: k aur m wale sawaal mein sirf ek coefficient ko 0 karna**

Sawaal: x⁴ + 2x³ + kx² + 13x + m ko x² − 3x + 5 se poora-poora divide hona hai. k aur m dhundo.

Divide karo (k aur m letters ki tarah):
- x⁴ ÷ x² = x². x²(x² − 3x + 5) = x⁴ − 3x³ + 5x². Subtract: 5x³ + (k − 5)x² + 13x + m.
- 5x³ ÷ x² = 5x. 5x(x² − 3x + 5) = 5x³ − 15x² + 25x. Subtract: (k + 10)x² − 12x + m.
- (k + 10)x² ÷ x² = k + 10. (k + 10)(x² − 3x + 5) = (k + 10)x² − 3(k + 10)x + 5(k + 10). Subtract: (3k + 18)x + (m − 5k − 50).

Ek bacche ne sirf x wale coefficient ko 0 kiya: 3k + 18 = 0, **k = −6**. Phir m ke liye socha "koi bhi chalega" aur m = 0 rakh diya. Check karo: remainder ka constant hissa m − 5k − 50 = 0 + 30 − 50 = **−20**, jo 0 nahi hai. Division poori-poori hui hi nahi.

Remainder px + q ke **dono** coefficient 0 hone chahiye: 3k + 18 = 0 aur m − 5k − 50 = 0. Pehli se k = −6, doosri se m = 5(−6) + 50 = **20**.

**Jaanch:** k = −6, m = 20 se polynomial x⁴ + 2x³ − 6x² + 13x + 20. Quotient x² + 5x + (k + 10) = x² + 5x + 4. (x² − 3x + 5)(x² + 5x + 4) = x⁴ + 5x³ + 4x² − 3x³ − 15x² − 12x + 5x² + 25x + 20 = x⁴ + 2x³ − 6x² + 13x + 20 ✅

---

## Quick Recap

- **p(x) = g(x) × q(x) + r(x)**, jahan r = 0 ya **degree r < degree g**. Isi niyam se q aur r ek hi tarah se tay hote hain.
- Jab p ki degree g ki degree se kam na ho: **degree q = degree p − degree g**. Jab p ki degree g se kam ho: q = 0 aur r = p.
- Dividend dhundna ho to **guna aur jod** (g × q + r). Quotient dhundna ho to **pehle r ghatao, phir g se divide karo**. Divisor dhundna ho to **(p − r) ko q se divide karo**.
- Factor check: g se divide karo. **Remainder 0 ho to g factor hai** (aur quotient bhi factor hai).
- Quadratic divisor ka remainder **px + q** ke roop ka hota hai. Gayab power ko **0 ke saath** likho.
- Jahan divisor 0 hota hai wahan **p aur r ki values barabar** hoti hain: ye remainder ki ek alag jaanch hai.
- **k aur m** wale sawaal: remainder ke dono coefficients ko 0 ke barabar rakho, do equations milti hain.
- Do zero α, β diye hon to **(x − α)(x − β)** se divide karo; bacha quotient baaki zero deta hai (quotient ka koi real zero na ho, to bas utne hi real zero hain).
- Numbers mein a = bq + r aur polynomials mein p = gq + r cousins hain: dono mein bacha hua hissa divisor se chhota.
- Galtiyan: dividend mein remainder jodna bhool jaana (p = g × q + r), aur k, m wale sawaal mein remainder ke sirf ek coefficient ko 0 karna.

---

## Practice Questions

1. Find the dividend p(x) when the divisor is g(x) = 2x² − 3, the quotient is q(x) = x² + 4x − 1 and the remainder is r(x) = 5x + 2. Check your answer at x = 2.

2. Divide x⁴ + 6x³ − 3x² + 8x + 5 by x² − 2x + 3 and write the quotient and the remainder.

3. Divide 3x³ − 8x + 7 by x² − 4x + 6. Write the quotient and the remainder. (Be careful with the missing power.)

4. When 10x³ + 11x² − 11x − 1 is divided by 5x − 2, the remainder is −3. Find the quotient, and confirm the remainder using the remainder theorem.

5. When 3x³ − 8x² + 23x − 7 is divided by a polynomial g(x), the quotient is 3x − 2 and the remainder is x + 5. Find g(x).

6. (a) Is x² + 2x + 5 a factor of 2x⁴ + x³ + 10x² − 3x + 30? (b) Is x² + 2x + 5 a factor of 2x⁴ + x³ + 10x² + 3x + 23? Give the quotient and remainder in each case.

7. Find k and m so that 2x⁴ − x³ + kx² + 13x + m is exactly divisible by x² − x + 3. Also write the quotient.

8. Two zeros of 3x⁴ − 7x³ + 29x² − 63x + 18 are 2 and 1/3. Find all its real zeros, and say why no more can be found.

9. Fill in the degrees. (a) A polynomial of degree 6 is divided by one of degree 2. What is the degree of the quotient, and what is the largest possible degree of the remainder? (b) A polynomial of degree 3 is divided by one of degree 3. What is the degree of the quotient, and what can the remainder look like? (c) A polynomial of degree 2 is divided by one of degree 4. What are q and r? (d) After dividing a polynomial of degree 5 by g(x), the quotient has degree 3. What is the degree of g(x)?

10. In Kinjal's cooking class, each tray holds x² + 3 cookies. (2x + 5) trays are filled completely and 4x − 1 cookies are left over. Write the total number of cookies as a polynomial in x. For x = 5, find the total by substituting, and then confirm it with the number division (trays × cookies per tray + left over).

11. A student writes: "When p(x) = x³ + 5x² + 11x + 12 is divided by x² + 6, the quotient is x + 2 and the remainder is 3x² + 5x." Check that her identity is true, explain why it is still not the correct division, and find the correct quotient and remainder.

12. Divide x⁴ − 2x³ + 5x − 1 by x² − 9. Then check the remainder by putting x = 3 and x = −3 in the polynomial and in the remainder.

13. State True or False, with a reason:
    (a) When a cubic is divided by a quadratic, the remainder can be a non-zero constant.
    (b) A polynomial of degree 5 is divided by one of degree 3. The remainder can have degree 3.
    (c) If a quadratic g(x) divides p(x) exactly and g(x) has a real zero a, then p(a) = 0.
    (d) When a cubic is divided by another cubic, the quotient is a constant.
    (e) If p(x) = g(x) q(x) + r(x) and a is a zero of g(x), then p(a) = r(a).

### Answers

1. p = g × q + r. (2x² − 3)(x² + 4x − 1) = 2x⁴ + 8x³ − 2x² − 3x² − 12x + 3 = 2x⁴ + 8x³ − 5x² − 12x + 3. Remainder 5x + 2 jodo: **p(x) = 2x⁴ + 8x³ − 5x² − 7x + 5**.
   Jaanch (x = 2): g(2) = 5, q(2) = 4 + 8 − 1 = 11, r(2) = 12, to 5 × 11 + 12 = 67. p(2) = 32 + 64 − 20 − 14 + 5 = 67 ✅

2. Divisor x² − 2x + 3.
   - x⁴ ÷ x² = x². x²(x² − 2x + 3) = x⁴ − 2x³ + 3x². Subtract: 8x³ − 6x² + 8x + 5.
   - 8x³ ÷ x² = 8x. 8x(x² − 2x + 3) = 8x³ − 16x² + 24x. Subtract: 10x² − 16x + 5.
   - 10x² ÷ x² = 10. 10(x² − 2x + 3) = 10x² − 20x + 30. Subtract: 4x − 25.

   **Quotient x² + 8x + 10, remainder 4x − 25.**
   Jaanch: (x² − 2x + 3)(x² + 8x + 10) = x⁴ + 8x³ + 10x² − 2x³ − 16x² − 20x + 3x² + 24x + 30 = x⁴ + 6x³ − 3x² + 4x + 30. Remainder jodo: x⁴ + 6x³ − 3x² + 8x + 5 ✅

3. Dividend ko 3x³ + 0x² − 8x + 7 likho.
   - 3x³ ÷ x² = 3x. 3x(x² − 4x + 6) = 3x³ − 12x² + 18x. Subtract: 12x² − 26x + 7.
   - 12x² ÷ x² = 12. 12(x² − 4x + 6) = 12x² − 48x + 72. Subtract: 22x − 65.

   **Quotient 3x + 12, remainder 22x − 65.**
   Jaanch: (x² − 4x + 6)(3x + 12) = 3x³ + 12x² − 12x² − 48x + 18x + 72 = 3x³ − 30x + 72. Remainder jodo: 3x³ − 8x + 7 ✅

4. g × q = p − r = 10x³ + 11x² − 11x − 1 + 3 = 10x³ + 11x² − 11x + 2. Ise 5x − 2 se divide karo:
   - 10x³ ÷ 5x = 2x². 2x²(5x − 2) = 10x³ − 4x². Subtract: 15x² − 11x + 2.
   - 15x² ÷ 5x = 3x. 3x(5x − 2) = 15x² − 6x. Subtract: −5x + 2.
   - −5x ÷ 5x = −1. −1(5x − 2) = −5x + 2. Subtract: 0.

   **Quotient 2x² + 3x − 1.**
   Jaanch: 5x − 2 = 0 se x = 2/5. p(2/5) = 10(8/125) + 11(4/25) − 11(2/5) − 1 = 16/25 + 44/25 − 110/25 − 25/25 = −75/25 = −3 ✅ (yahi remainder tha).

5. g = (p − r) ÷ q. p − r = 3x³ − 8x² + 23x − 7 − (x + 5) = 3x³ − 8x² + 22x − 12. Ise 3x − 2 se divide karo:
   - 3x³ ÷ 3x = x². x²(3x − 2) = 3x³ − 2x². Subtract: −6x² + 22x − 12.
   - −6x² ÷ 3x = −2x. −2x(3x − 2) = −6x² + 4x. Subtract: 18x − 12.
   - 18x ÷ 3x = 6. 6(3x − 2) = 18x − 12. Subtract: 0.

   **g(x) = x² − 2x + 6.**
   Jaanch: (x² − 2x + 6)(3x − 2) = 3x³ − 2x² − 6x² + 4x + 18x − 12 = 3x³ − 8x² + 22x − 12. Remainder jodo: 3x³ − 8x² + 23x − 7 ✅. r ki degree 1 < g ki degree 2 ✅

6. g(x) = x² + 2x + 5.
   (a) 2x⁴ ÷ x² = 2x². 2x²g = 2x⁴ + 4x³ + 10x². Subtract: −3x³ + 0x² − 3x + 30. Phir −3x g = −3x³ − 6x² − 15x. Subtract: 6x² + 12x + 30. Phir 6g = 6x² + 12x + 30. Subtract: **0**. Remainder 0, to **haan, factor hai**; quotient 2x² − 3x + 6.
   (b) 2x⁴ + x³ + 10x² + 3x + 23 − 2x²g = −3x³ + 0x² + 3x + 23. Phir −3x g = −3x³ − 6x² − 15x, subtract: 6x² + 18x + 23. Phir 6g = 6x² + 12x + 30, subtract: **6x − 7**. Remainder 6x − 7 non-zero, to **nahi, factor nahi hai**; quotient 2x² − 3x + 6, remainder 6x − 7.
   Jaanch: (x² + 2x + 5)(2x² − 3x + 6) = 2x⁴ − 3x³ + 6x² + 4x³ − 6x² + 12x + 10x² − 15x + 30 = 2x⁴ + x³ + 10x² − 3x + 30 ✅ (a). (b) ke liye isme 6x − 7 jodo: 2x⁴ + x³ + 10x² + 3x + 23 ✅

7. Divisor x² − x + 3.
   - 2x⁴ ÷ x² = 2x². 2x²(x² − x + 3) = 2x⁴ − 2x³ + 6x². Subtract: x³ + (k − 6)x² + 13x + m.
   - x³ ÷ x² = x. x(x² − x + 3) = x³ − x² + 3x. Subtract: (k − 5)x² + 10x + m.
   - (k − 5)x² ÷ x² = k − 5. (k − 5)(x² − x + 3) = (k − 5)x² − (k − 5)x + 3(k − 5). Subtract: [10 + (k − 5)]x + [m − 3(k − 5)] = (k + 5)x + (m − 3k + 15).

   Dono 0: k + 5 = 0 ⇒ **k = −5**; m − 3(−5) + 15 = 0 ⇒ m + 30 = 0 ⇒ **m = −30**. Quotient 2x² + x + (k − 5) = **2x² + x − 10**.
   Jaanch: (x² − x + 3)(2x² + x − 10) = 2x⁴ + x³ − 10x² − 2x³ − x² + 10x + 6x² + 3x − 30 = 2x⁴ − x³ − 5x² + 13x − 30, jo k = −5 aur m = −30 wala polynomial hai ✅

8. Do zero 2 aur 1/3 hain, to (x − 2)(3x − 1) = 3x² − 7x + 2 factor hai. Divide karo (3x⁴ − 7x³ + 29x² − 63x + 18) ÷ (3x² − 7x + 2):
   - 3x⁴ ÷ 3x² = x². x²(3x² − 7x + 2) = 3x⁴ − 7x³ + 2x². Subtract: 27x² − 63x + 18.
   - 27x² ÷ 3x² = 9. 9(3x² − 7x + 2) = 27x² − 63x + 18. Subtract: 0.

   Quotient **x² + 9**. Kisi bhi real x ke liye x² ≥ 0, to x² + 9 ≥ 9, kabhi 0 nahi hota. Isliye is quotient ka koi real zero nahi: sirf **2 aur 1/3** real zero hain (graph x-axis ko sirf do jagah kaatega).
   Jaanch: p(2) = 48 − 56 + 116 − 126 + 18 = 0. p(1/3) = 3/81 − 7/27 + 29/9 − 21 + 18 = 1/27 − 7/27 + 87/27 − 3 = 81/27 − 3 = 0 ✅

9. (a) q ki degree = 6 − 2 = **4**. Divisor ki degree 2 hai, to r ki degree 2 se kam, yaani sabse badi possible degree **1** (r = px + q ya 0).
   (b) q ki degree = 3 − 3 = **0**, yaani q ek non-zero constant hai. Divisor ki degree 3 hai, to r ki degree 3 se kam honi chahiye: r **ax² + bx + c ke roop ka** (degree 2 tak) ya 0 ho sakta hai.
   (c) p ki degree 2 < 4, to **q = 0 aur r = p** (p = g × 0 + p).
   (d) degree q = degree p − degree g ⇒ 3 = 5 − degree g ⇒ degree g = **2**.
   Jaanch: (a) 2 + 4 = 6 ✅ (b) 3 + 0 = 3 ✅ (d) 2 + 3 = 5 ✅

10. Total = (cookies per tray) × (trays) + left over = (x² + 3)(2x + 5) + (4x − 1).
    (x² + 3)(2x + 5) = 2x³ + 5x² + 6x + 15. Jodo 4x − 1: **p(x) = 2x³ + 5x² + 10x + 14**.
    x = 5: p(5) = 250 + 125 + 50 + 14 = **439**.
    Number-division: tray mein 25 + 3 = 28 cookies, trays 2(5) + 5 = 15, bache 4(5) − 1 = 19. 28 × 15 + 19 = 420 + 19 = 439.
    Jaanch: dono tareeke 439 dete hain ✅. Aur 19 < 28, to bache hue cookies se ek aur tray nahi bharegi ✅

11. Pehle identity: (x² + 6)(x + 2) + (3x² + 5x) = x³ + 2x² + 6x + 12 + 3x² + 5x = x³ + 5x² + 11x + 12. Haan, identity sach hai.
    Par r = 3x² + 5x ki degree 2 hai, jo divisor x² + 6 ki degree 2 ke **barabar** hai. Division abhi adhoori hai: r ke 3x² mein se divisor 3 baar aur nikal sakta hai. 3(x² + 6) = 3x² + 18, to r − 3g = 3x² + 5x − 3x² − 18 = 5x − 18. Is tarah q = (x + 2) + 3 = **x + 5** aur r = **5x − 18**.
    Jaanch: (x² + 6)(x + 5) + (5x − 18) = x³ + 5x² + 6x + 30 + 5x − 18 = x³ + 5x² + 11x + 12 ✅. Ab r ki degree 1 < 2 ✅

12. Dividend ko x⁴ − 2x³ + 0x² + 5x − 1 likho, divisor x² + 0x − 9.
    - x⁴ ÷ x² = x². x²(x² − 9) = x⁴ − 9x². Subtract: −2x³ + 9x² + 5x − 1.
    - −2x³ ÷ x² = −2x. −2x(x² − 9) = −2x³ + 18x. Subtract: 9x² − 13x − 1.
    - 9x² ÷ x² = 9. 9(x² − 9) = 9x² − 81. Subtract: −13x + 80.

    **Quotient x² − 2x + 9, remainder −13x + 80.**
    Jaanch (alag raaste se): x² − 9 = (x − 3)(x + 3) hai, to x = 3 aur x = −3 par p aur r ki value barabar honi chahiye. p(3) = 81 − 54 + 15 − 1 = 41, r(3) = −39 + 80 = 41 ✅. p(−3) = 81 + 54 − 15 − 1 = 119, r(−3) = 39 + 80 = 119 ✅

13. (a) **True** ✅. Misaal: (x² + 5)(x − 2) + 7 = x³ − 2x² + 5x − 3. Ise x² + 5 se divide karo to q = x − 2 aur r = 7, ek non-zero constant (degree 0 < 2).
    (b) **False** ❌. Divisor ki degree 3 hai, to remainder ki degree 3 se kam, yaani zyada se zyada 2.
    (c) **True** ✅. p = g × q exactly (remainder 0), to p(a) = g(a) × q(a) = 0 × q(a) = 0.
    (d) **True** ✅. Degree q = 3 − 3 = 0, yaani q constant hai (aur non-zero, kyunki p ki degree 3 hai).
    (e) **True** ✅. p(a) = g(a) q(a) + r(a) = 0 × q(a) + r(a) = r(a).

---

Shabaash! Ab tum division algorithm ko kisi bhi taraf se ghuma sakte ho: dividend, quotient ya divisor, jo anjaana ho, uska raasta tumhare paas hai. Kinjal ki paheli ka jawab bhi tumne nikaal liya: mool polynomial 3x³ + 2x² − 9x + 9 tha, aur cookies ki tarah wahi guna aur jod kaam aaya.

**Aage kya?** Topic 6 mein hum poore chapter ko ek saath jodenge: kaun sa sawaal aaye to kaun sa tool (graph, sum-product, teen relations, ya division) lagana hai, kuch mile-jule sawaal, bachi hui galtiyan, aur chapter ka saar. Wahan [Topic 6](polynomials-part6.md) mein milte hain.
