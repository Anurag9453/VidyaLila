# Chapter: Polynomials (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [polynomials-part4.md](polynomials-part4.md) se aage chalti hai.** (Topic 1 aur 2 [polynomials.md](polynomials.md) mein, Topic 3 [polynomials-part2.md](polynomials-part2.md) mein, Topic 4 [polynomials-part3.md](polynomials-part3.md) mein hain.)
> **Topics covered in this file:**
> 6. Constant Polynomial, Zero Polynomial, Value of a Polynomial, Zero of a Polynomial

---

# Topic 6: Constant Polynomial, Zero Polynomial, Value aur Zero of a Polynomial

Ab tak hum ne polynomial ko pehchanna, uske terms ginna aur use degree ke hisaab se naam dena seekha. Is topic mein hum polynomial ke saath **kaam karna** seekhenge: usme number daalkar **value** nikalna, aur dhundhna ki **kis number par uski value 0 ho jati hai** (isse polynomial ka **zero** kehte hain). Saath mein do khaas polynomials, constant aur zero polynomial, ko poori tarah samjhenge.

Constant aur zero polynomial ka naam hum Topic 3 aur 4 mein dekh chuke hain. Yahan unke baare mein aage ki baatein hongi.

---

## Chai-samose ki dukaan ki kahani

Raju ki ek chhoti si dukaan hai jahan wo samose bechta hai.

- Har samose par usse **₹10 ka munafa** (profit) hota hai.
- Par har din dukaan ka **kiraya ₹500** dena padta hai, chahe samose bike ya na bike.

Agar wo ek din mein **x samose** bechta hai, to uska kul munafa hoga:

**P(x) = 10x - 500**

Ye ek polynomial hai (linear binomial). Ab dekho kya hota hai:

| Samose bike (x) | Munafa P(x) = 10x - 500 | Matlab |
|---|---|---|
| 30 | 10(30) - 500 = **-200** | ₹200 ka **nuksan** |
| 50 | 10(50) - 500 = **0** | Na nafa, na nuksan |
| 80 | 10(80) - 500 = **300** | ₹300 ka **nafa** |

Dhyan do:
- Jab hum x ki jagah koi number rakhte hain aur answer nikalte hain, to ye answer polynomial ki **value** hai. (Jaise x = 30 par value -200.)
- **x = 50** wo khaas number hai jahan value **0** ho gayi. Isi ko polynomial ka **zero** kehte hain. Dukaan ki bhasha mein ise "**break-even point**" bolte hain, yaani jahan se nafa shuru hota hai.

Aur ek aur baat. Kiraya **₹500** har din same rehta hai, chahe samose kitne bhi bike. Ye ek **constant polynomial** ki tarah hai. Aur agar dukaan band ho aur koi hisaab hi na ho, to wo **zero polynomial** jaisa hai.

Is poore topic mein hum yahi chaaron cheezein ek ek karke samjhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Constant polynomial** | Aisa polynomial jo sirf ek (non-zero) number ho | 7, -3, 1/2 |
| **Zero polynomial** | Aisa polynomial jo sirf **0** ho | 0 |
| **Value of a polynomial** | x ki jagah ek number rakhne par jo answer aaye | p(2) |
| **Zero of a polynomial** | Wo number jise x ki jagah rakhne par polynomial ki value **0** aaye | p(x) = x - 5 ka zero **5** hai |

---

## Part A: Constant Polynomial

**Constant polynomial** wo hota hai jisme **sirf ek number** ho, koi variable na ho (aur wo number 0 na ho).

Examples: **7**, **-3**, **1/2**, **√5**

Topic 3 mein hum ne dekha tha ki 7 = 7x⁰, to ye ek polynomial hai. Ab iski aage ki baatein dekhte hain.

### Constant polynomial ki khaas baatein

**1. Degree 0 hoti hai.** (Kyunki 7 = 7x⁰.)

**2. Uski value hamesha ek hi rehti hai, chahe x kuch bhi ho.**
Maan lo p(x) = 7. Phir:
- p(1) = 7
- p(100) = 7
- p(-5) = 7
- p(0) = 7

Iska matlab hai ki machine mein kuch bhi daalo, bahar wahi 7 nikalega. Dukaan ke example mein kiraya ₹500 hi raha, chahe 1 samosa bika ya 1000.

**3. Iska koi zero nahi hota** (agar number 0 nahi hai). Kyunki value hamesha 7 hai, wo kabhi 0 nahi hogi. Hum ise aage zero wale part mein phir dekhenge.

---

## Part B: Zero Polynomial

**Zero polynomial** wo polynomial hai jo **sirf 0 ho.**

**p(x) = 0**

### Zero polynomial ki khaas baatein

**1. Iski degree define nahi hoti.** (Topic 4 mein humne ye ek baar dekha tha.) Kyun? Dekho:
- 0 = 0x⁰ = 0x¹ = 0x² = 0x⁵ = ...
- Kisi bhi power ke saath 0 likho, value wahi 0 rahegi.
- Is wajah se tay nahi ho sakta ki iski "sabse badi power" kitni hai.

Isliye hum kehte hain: **zero polynomial ki degree define nahi hoti.**

**2. Iski value hamesha 0 hoti hai.** p(5) = 0, p(-100) = 0, p(anything) = 0.

**3. Iska zero koi bhi number ho sakta hai** (ise hum Part E mein samjhenge).

### Dhyan rakho: zero polynomial aur constant polynomial alag hain

| | Constant polynomial | Zero polynomial |
|---|---|---|
| Example | 7, -3, 1/2 | 0 |
| Degree | **0** | **Define nahi hoti** |
| Value | Hamesha wohi number (non-zero) | Hamesha 0 |

Aksar students 0 ko bhi constant polynomial maan lete hain aur degree 0 bol dete hain. Wo galat hai. Ye ek **special case** hai.

### Zero polynomial kab banta hai?

Jab sab terms mil kar katt jayein.

- x - x = **0**
- 3x² - 3x² + 5 - 5 = **0**
- 2(x + 1) - 2x - 2 = 2x + 2 - 2x - 2 = **0**

---

## Part C: Value of a Polynomial

Polynomial ko ek **machine** samjho.

- Aap machine mein ek number (**input**) daalte ho.
- Machine ek rule follow karti hai.
- Bahar ek number (**output**) nikalta hai.

Wo output hi polynomial ki **value** hai.

### Notation

Agar polynomial ka naam **p(x)** hai, to:
- **p(2)** ko padhte hain "**p of 2**". Iska matlab: x ki jagah **2** rakho aur answer nikalo.
- **p(-3)** matlab x ki jagah **-3** rakho.
- **p(a)** matlab x ki jagah **a** rakho.

Dhyan rakho, **p(2) ka matlab "p ko 2 se multiply karo" nahi hai.** Ye sirf ek notation hai jo kehta hai "x = 2 par value".

### Value nikalne ke steps

1. x ki jagah **bracket** laga do: p(2) = ( )² ...
2. Bracket ke andar number likho.
3. Pehle powers, phir multiplication, phir addition aur subtraction karo.

(Negative number ho to bracket zaroor lagao, ye Topic 1 mein bhi dekha tha.)

### Solved examples

**Example 1:** p(x) = 3x² - 2x + 5 ke liye p(0), p(1), p(-1), p(2) nikalo.

- **p(0)** = 3(0)² - 2(0) + 5 = 0 - 0 + 5 = **5**
- **p(1)** = 3(1)² - 2(1) + 5 = 3 - 2 + 5 = **6**
- **p(-1)** = 3(-1)² - 2(-1) + 5 = 3 + 2 + 5 = **10**
- **p(2)** = 3(2)² - 2(2) + 5 = 12 - 4 + 5 = **13**

**Example 2:** p(x) = 3x² - 2x + 5 ke liye **p(1/2)** nikalo.

p(1/2) = 3(1/2)² - 2(1/2) + 5
= 3(1/4) - 1 + 5
= 3/4 + 4
= **19/4**

**Example 3:** p(x) = x³ - 4x² + x + 6 ke liye p(2) nikalo.

p(2) = (2)³ - 4(2)² + 2 + 6
= 8 - 16 + 2 + 6
= **0**

(Ye ek khaas answer hai. Isse hum aage zero wale part mein phir dekhenge.)

### Do shortcuts jo bahut kaam aate hain

**Shortcut 1: p(0) = constant term**
Jab x = 0 rakhte ho, to x wale sab terms 0 ho jate hain, aur sirf constant term bachta hai.

p(x) = 2x³ - 5x² + x - 9 mein p(0) = **-9** (bina kuch calculate kiye).

**Shortcut 2: p(1) = saare coefficients ka sum**
Jab x = 1 rakhte ho, to 1 ki koi bhi power 1 hi hoti hai, to sirf coefficients jud jate hain.

p(x) = 2x³ - 5x² + x - 9 mein p(1) = 2 - 5 + 1 - 9 = **-11**.

---

## Part D: Zero of a Polynomial

### Ek mazedaar sawal

Dukaan wale example mein hum ne dekha ki **P(50) = 0**. Yaani 50 samose bechne par munafa **0** hota hai. To **50** ko hum P(x) ka **zero** kehte hain.

> **Zero of a polynomial:** Wo number a jiske liye **p(a) = 0** ho.

Seedhi bhasha mein: **wo number jise x ki jagah rakhne par polynomial ki value 0 aa jaye.**

Isse **root** (jad) bhi kehte hain. Dono naam ek hi cheez ke hain.

### Zaroori fark

Ye dono shabd sunne mein milte hain, par alag cheezein hain:

| | Matlab | Example |
|---|---|---|
| **Zero polynomial** | Poora polynomial hi 0 hai | p(x) = 0 |
| **Zero of a polynomial** | Wo **x ka number** jisse polynomial 0 ho jata hai | p(x) = x - 5 ka zero 5 hai |

Yaad rakhne ka tarika: **zero polynomial ek polynomial hai** (ek cheez), aur **zero of polynomial ek number hai** (x ki value).

### Zero kaise dhundhein? (Linear polynomial)

Linear polynomial ax + b ke liye, **p(x) = 0 rakho aur x ke liye solve karo.**

**Example 1:** p(x) = x - 5 ka zero nikalo.

p(x) = 0
x - 5 = 0
x = **5**

Jaanch (check): p(5) = 5 - 5 = 0 ✅

**Example 2:** p(x) = 2x + 6 ka zero nikalo.

2x + 6 = 0
2x = -6
x = **-3**

Jaanch: p(-3) = 2(-3) + 6 = -6 + 6 = 0 ✅

Dhyan do, zero **-3** hai, 3 nahi. Sign ka dhyan rakho!

**Example 3:** p(x) = 3x - 1 ka zero nikalo.

3x - 1 = 0
3x = 1
x = **1/3**

Jaanch: p(1/3) = 3(1/3) - 1 = 1 - 1 = 0 ✅

Dekho, zero ek **fraction** bhi ho sakta hai.

**Example 4:** p(x) = x/3 - 2 ka zero nikalo.

x/3 - 2 = 0
x/3 = 2
x = **6**

Jaanch: p(6) = 6/3 - 2 = 2 - 2 = 0 ✅

### Linear polynomial ka general formula

Linear polynomial **ax + b** ka zero:

**ax + b = 0 → x = -b/a**

Jaise 2x + 6 mein a = 2, b = 6, to zero = -6/2 = -3. Wahi jo upar mila.

**Linear polynomial ka ek hi zero hota hai.**

### Zero kaise dhundhein? (Quadratic aur cubic: trial method)

Is chapter mein hum quadratic aur cubic polynomials ke zero **try karke** dekhte hain. Hum alag alag numbers rakhke dekhte hain ki kis par value 0 aati hai.

**Example 5:** p(x) = x² - 3x + 2. Check karo ki -1, 0, 1, 2 mein se kaun kaun zero hain.

- p(-1) = 1 + 3 + 2 = 6 → zero **nahi** hai
- p(0) = 0 - 0 + 2 = 2 → zero **nahi** hai
- p(1) = 1 - 3 + 2 = 0 → **zero hai** ✅
- p(2) = 4 - 6 + 2 = 0 → **zero hai** ✅

To x² - 3x + 2 ke **do zero** hain: **1 aur 2**.

**Example 6:** p(x) = x³ - 4x² + x + 6. Check karo ki -1, 1, 2, 3 mein se kaun kaun zero hain.

- p(-1) = -1 - 4 - 1 + 6 = 0 → **zero hai** ✅
- p(1) = 1 - 4 + 1 + 6 = 4 → zero **nahi** hai
- p(2) = 8 - 16 + 2 + 6 = 0 → **zero hai** ✅
- p(3) = 27 - 36 + 3 + 6 = 0 → **zero hai** ✅

To is cubic polynomial ke **teen zero** hain: **-1, 2, 3**.

**Example 7:** p(x) = x² - 9

x² - 9 = 0
x² = 9
x = 3 ya x = -3

Jaanch: p(3) = 9 - 9 = 0 ✅ aur p(-3) = 9 - 9 = 0 ✅

Zero hain: **3 aur -3**.

**Example 8:** p(x) = x²

x² = 0 hone ke liye x = **0** hi hona chahiye.

To is polynomial ka zero **0** hai. Ye dilchasp hai: zero of polynomial khud **0** (number) ho sakta hai!

**Example 9:** p(x) = x² + 1

x² hamesha 0 ya usse bada hota hai (koi bhi real number ka square negative nahi hota). To x² + 1 hamesha **1 ya usse bada** hoga, kabhi 0 nahi.

Isliye **x² + 1 ka koi (real) zero nahi hai.**

### Constant aur zero polynomial ke zero

- **Non-zero constant polynomial (jaise 7):** iska **koi zero nahi** hota. Kyunki p(x) = 7 hamesha 7 hi hai, kabhi 0 nahi.
- **Zero polynomial (p(x) = 0):** iska **har number zero hai**. Kyunki p(x) = 0 hamesha 0 hi hai, to x kuch bhi rakho, value 0 hi aati hai.

### Kitne zero ho sakte hain?

> Degree n wale polynomial ke **zyada se zyada n zero** ho sakte hain.

| Polynomial | Degree | Zero ki ginti |
|---|---|---|
| Non-zero constant (7) | 0 | **0 zero** |
| Linear (ax + b) | 1 | **Theek 1 zero** |
| Quadratic | 2 | **0, 1 ya 2 zero** (zyada se zyada 2) |
| Cubic | 3 | **Zyada se zyada 3 zero** |
| Biquadratic | 4 | **Zyada se zyada 4 zero** |

Dekho Example 5 mein quadratic ke 2 zero the, Example 6 mein cubic ke 3, aur Example 9 mein quadratic x² + 1 ke 0 zero the.

### Zero ke saath value ka rishta

| | Value | Zero |
|---|---|---|
| Kya hai? | x = a par p(a) ka **answer** | Wo **x ka number** jahan answer **0** ho |
| Kitni baar? | Har x ke liye ek value hoti hai | Kuch hi khaas x par value 0 hoti hai |
| Example | p(x) = x - 5 mein p(8) = **3** | p(x) = x - 5 mein zero = **5** |

---

## Part E: Zero polynomial ke zero (aur sawaal ka jawab)

Dukaan wale example mein dukaan band thi, aur har din ka hisaab **0** tha. Chahe kitne bhi samose bikein, hisaab 0 hi aata hai. Isi tarah zero polynomial ki value har x par 0 hoti hai, isliye **har number iska zero hai.**

Is wajah se zero polynomial ek khaas cheez hai, aur isiliye iski degree bhi define nahi karte.

---

## Part F: Aur solved examples

**Example 10:** Agar **x = 2** polynomial **p(x) = x² - kx + 6** ka zero ho, to k ki value nikalo.

x = 2 zero hai, matlab p(2) = 0.
p(2) = (2)² - k(2) + 6 = 0
4 - 2k + 6 = 0
10 - 2k = 0
2k = 10
**k = 5**

Jaanch: k = 5 rakho to p(x) = x² - 5x + 6. p(2) = 4 - 10 + 6 = 0 ✅

**Example 11:** Dukaan ka munafa P(x) = 10x - 500.
(a) 70 samose bechne par munafa kitna hoga?
(b) Kitne samose bechne par na nafa na nuksan hoga?

(a) P(70) = 10(70) - 500 = 700 - 500 = **₹200 munafa**
(b) P(x) = 0 → 10x - 500 = 0 → 10x = 500 → **x = 50**

To 50 samose par break-even hai. (Yani P(x) ka zero 50 hai.)

**Example 12:** Zero dhundho: **5x + 2**

5x + 2 = 0
5x = -2
x = **-2/5**

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Zero polynomial" aur "zero of a polynomial" ko ek samajhna**
- Zero polynomial = poora polynomial hi 0 hai (jaise p(x) = 0).
- Zero of a polynomial = x ka wo number jisse polynomial 0 ho (jaise x - 5 ka zero 5).

**Galti 2: Value aur zero ko mix karna**
p(x) = x - 5 mein p(8) = 3 ek **value** hai. x = 5 **zero** hai kyunki p(5) = 0.

**Galti 3: Sign galat ho jana**
2x + 6 ka zero **-3** hai, 3 nahi. Check karne ke liye hamesha p(zero) nikalo: p(-3) = 2(-3) + 6 = 0 ✅. Agar 3 rakhte to 2(3) + 6 = 12 aata, jo 0 nahi hai.

**Galti 4: Negative value rakhte waqt bracket bhool jana**
p(-2) mein x² ko (-2)² likho, -2² nahi. Pehla 4 hai, doosra -4.

**Galti 5: Zero polynomial ki degree 0 bolna**
Constant polynomial (jaise 7) ki degree 0 hoti hai. Zero polynomial (sirf 0) ki degree **define nahi** hoti.

**Galti 6: Har polynomial ka zero hona maan lena**
Har polynomial ka zero nahi hota. 7 aur x² + 1 ka koi zero nahi hai.

**Galti 7: Zero hamesha 0 hi hoga yeh sochna**
Zero of polynomial koi bhi number ho sakta hai: 5, -3, 1/3. Kabhi kabhi 0 bhi hota hai (jaise x² ka zero 0).

**Galti 8: p(0) ko hamesha 0 samajhna**
p(0) polynomial ka **constant term** hota hai. Agar constant term 0 na ho to p(0) bhi 0 nahi hoga. (p(x) = x² + 5 mein p(0) = 5.)

**Galti 9: Jaanch (check) na karna**
Zero nikalne ke baad hamesha **x ki jagah wo number rakhkar dekho ki value 0 aa rahi hai ya nahi.** Isme 10 second lagte hain aur galti pakad mein aa jati hai.

---

## Quick Recap

- **Constant polynomial** = sirf ek non-zero number (jaise 7). Degree 0. Value hamesha wahi. **Koi zero nahi.**
- **Zero polynomial** = sirf 0. **Degree define nahi.** Value hamesha 0. **Har number iska zero hai.**
- **Value of a polynomial:** p(a) = x ki jagah a rakhne par answer. (Negative ho to bracket lagao.)
- **Shortcuts:** p(0) = constant term, p(1) = coefficients ka sum.
- **Zero of a polynomial:** wo number a jiske liye **p(a) = 0**. (Ise root bhi kehte hain.)
- **Linear polynomial ax + b** ka zero: ax + b = 0 → **x = -b/a**. Hamesha **theek 1 zero**.
- **Degree n** wale polynomial ke **zyada se zyada n zeros** hote hain.
- **Zero polynomial** (ek polynomial) aur **zero of a polynomial** (ek number) alag cheezein hain.
- Zero nikalne ke baad **hamesha check karo:** p(zero) = 0 aana chahiye.

---

## Practice Questions

1. Which of the following is a constant polynomial and which is the zero polynomial? Write the degree wherever it is defined.
   (a) 9
   (b) 0
   (c) -3/4
   (d) x - x

2. If p(x) = 2x² - 3x + 4, find p(0), p(1), p(-2) and p(1/2).

3. For p(x) = 5x³ - 2x² + x - 7, find p(0) and p(1) using the shortcuts (check by direct substitution too).

4. Find the zero of each polynomial:
   (a) x - 8
   (b) 3x + 9
   (c) 2x - 5
   (d) x/4 + 1

5. For p(x) = x² - 5x + 6, check whether 1, 2 and 3 are zeros of the polynomial.

6. If x = -1 is a zero of p(x) = x² + kx - 6, find the value of k.

7. A shop's profit (in rupees) on selling x items is P(x) = 8x - 400.
   (a) Find the profit (or loss) when 30 items are sold.
   (b) Find the number of items to be sold for no profit and no loss.

8. State whether each statement is true or false. Give a reason.
   (a) Every polynomial has at least one zero.
   (b) A zero of a polynomial can be the number 0.
   (c) The degree of the zero polynomial is 0.
   (d) The polynomial x² + 1 has no real zero.
   (e) A quadratic polynomial can have at most 2 zeros.

### Answers

1. (a) **Constant polynomial**, degree **0**
   (b) **Zero polynomial**, degree **not defined**
   (c) **Constant polynomial**, degree **0**
   (d) x - x = 0, to **zero polynomial**, degree **not defined**
2. p(0) = **4**
   p(1) = 2 - 3 + 4 = **3**
   p(-2) = 2(4) - 3(-2) + 4 = 8 + 6 + 4 = **18**
   p(1/2) = 2(1/4) - 3(1/2) + 4 = 1/2 - 3/2 + 4 = **3**
3. Shortcut se: p(0) = constant term = **-7**. p(1) = 5 - 2 + 1 - 7 = **-3**.
   Direct: p(0) = -7 ✅. p(1) = 5 - 2 + 1 - 7 = -3 ✅
4. (a) x - 8 = 0 → **x = 8**
   (b) 3x + 9 = 0 → 3x = -9 → **x = -3**
   (c) 2x - 5 = 0 → 2x = 5 → **x = 5/2**
   (d) x/4 + 1 = 0 → x/4 = -1 → **x = -4**
5. p(1) = 1 - 5 + 6 = **2** (zero nahi)
   p(2) = 4 - 10 + 6 = **0** (zero hai)
   p(3) = 9 - 15 + 6 = **0** (zero hai)
6. p(-1) = (-1)² + k(-1) - 6 = 1 - k - 6 = -5 - k. Zero hai to -5 - k = 0, **k = -5**.
   Jaanch: p(x) = x² - 5x - 6, p(-1) = 1 + 5 - 6 = 0 ✅
7. (a) P(30) = 8(30) - 400 = 240 - 400 = **-160**, yaani **₹160 ka nuksan**.
   (b) 8x - 400 = 0 → 8x = 400 → **x = 50** items.
8. (a) **False.** Non-zero constant (jaise 5) aur x² + 1 ka koi zero nahi hai.
   (b) **True.** Jaise p(x) = x ka zero 0 hai (kyunki p(0) = 0).
   (c) **False.** Zero polynomial ki degree **define nahi** hoti. Degree 0 non-zero constant ki hoti hai.
   (d) **True.** x² hamesha 0 se bada ya barabar hota hai, to x² + 1 hamesha 1 ya usse bada hota hai, kabhi 0 nahi.
   (e) **True.** Degree n wale polynomial ke zyada se zyada n zero hote hain, to degree 2 ke 2.

---

Agar abhi bhi zero aur value mein confusion ho, to dukaan wala example yaad rakho: **value** matlab "itne samose bike to munafa kitna hua", aur **zero** matlab "kitne samose bike to munafa theek 0 hua". Dono ek hi polynomial se aate hain, bas sawaal alag hota hai.
