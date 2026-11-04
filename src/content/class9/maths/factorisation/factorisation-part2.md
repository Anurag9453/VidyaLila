# Chapter: Factorisation (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [factorisation.md](factorisation.md) se aage chalti hai** (wahan Topic 1 hai: factorisation kya hai, formulae aur saare methods ka overview).
> **Topics covered in this file:**
> 2. Factorisation by Taking Out the Common Factor

---

# Topic 2: Factorisation by Taking Out the Common Factor

Topic 1 (Factorisation of Polynomials) mein humne seekha tha ki factorisation expansion ka ulta hai, kaunse formulae kaam aate hain, aur paanch methods ki ek jhalak dekhi thi. Wahin Part D ke decision guide mein ye bhi dekha tha ki **"sabse pehle common factor dekho"**. Ab hum un methods ko ek ek karke gehrai se seekhenge, aur shuruaat usi pehle kadam se karte hain.

Topic 1 mein common factor wala method ek jhalak mein dekha tha: coefficients ka HCF lo, har letter ki sabse kam power lo, aur bacha hua bracket mein likho. Jaise 6x + 9 = 3(2x + 3) aur x² + x = x(x + 1).

Is topic mein hum isi method ko **poori gehrai** se seekhenge: bade aur lambe terms ka HCF, negative common factor, bracket wale common factors, sign ulatne ki trick, aur fraction wale coefficients. Ye method itna zaroori hai ki **har factorisation ka pehla kadam** yahi hota hai.

---

## Diwali ke gift packs ki kahani

Diwali aa rahi hai. Priya ki mummy ke paas **12 laddoo** aur **18 barfi** hain. Wo inhe rishtedaaron ke liye **ek jaise gift packs** mein baantna chahti hain, aur chahti hain ki packs **zyada se zyada** banein, aur kuch bhi na bache.

Kitne packs banenge?

- 12 aur 18 dono ko barabar baantne wala sabse bada number hai **6** (yahi HCF hai).
- To **6 packs** banenge.
- Har pack mein: 12 ÷ 6 = **2 laddoo** aur 18 ÷ 6 = **3 barfi**.

Ab ise algebra mein likho. Laddoo ko L aur barfi ko B maano:

**12L + 18B = 6(2L + 3B)**

Yaani "6 packs, aur har pack mein 2 laddoo aur 3 barfi." Bahar jo **6** hai wo **common factor** hai, aur bracket ke andar jo hai wo **ek pack ka saaman** hai.

Common factor nikalna bas yahi hai: **dhundo ki sab terms mein kya common hai, use bahar rakho, aur bacha hua andar.**

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **HCF of monomials** | Kai monomials mein jo sabse bada common hissa ho | 12x³y² aur 18x²y⁴ ka HCF 6x²y² |
| **Common monomial factor** | Wo monomial jo har term mein ho | 6ab(2a - 3b) mein **6ab** |
| **Common binomial factor** | Wo bracket (do terms wala) jo har term mein ho | 5x(a + b) - 3y(a + b) mein **(a + b)** |
| **Negative common factor** | Minus sign ke saath nikala gaya common factor | -3x(2x + 3) mein **-3x** |
| **Sign flip** | Bracket ke andar ka kram ulatne par minus aana | (y - x) = -(x - y) |

---

## Part A: HCF of monomials, step by step

Topic 1 mein chhote examples the. Ab lambe terms ke saath ek pakka tarika seekhte hain.

### Tarika (3 kadam)

1. **Numbers:** Saare coefficients ka HCF nikalo (sign ko abhi chhod do).
2. **Har letter alag alag:** Wo letter **sab terms mein** hai ya nahi?
   - Agar haan, to uski **sabse kam power** lo.
   - Agar kisi ek term mein bhi nahi hai, to wo letter HCF mein **nahi aayega.**
3. **Sab ko multiply karo.** Wahi HCF hai.

### Sabse kam power hi kyun?

Socho teen dost hain. Ek ke paas ₹500 hai, doosre ke paas ₹300, teesre ke paas ₹200. Agar sab ko **barabar** paise milakar kuch kharidna hai, to har koi zyada se zyada **₹200** hi de sakta hai, kyunki teesre ke paas isse zyada hai hi nahi.

Isi tarah x³, x² aur x⁵ mein **x² sab ke paas hai**, par x³ sab ke paas nahi. Isliye sabse kam power (x²) common hai.

### Example 1: 12x³y² aur 18x²y⁴ ka HCF

| Hissa | Term 1 | Term 2 | Common (HCF) |
|---|---|---|---|
| Number | 12 | 18 | **6** |
| x | x³ | x² | **x²** (kam power) |
| y | y² | y⁴ | **y²** (kam power) |

**HCF = 6x²y²**

### Example 2: 8a³b²c, 12a²b³c² aur 20a⁴bc³ ka HCF

| Hissa | Term 1 | Term 2 | Term 3 | Common |
|---|---|---|---|---|
| Number | 8 | 12 | 20 | **4** |
| a | a³ | a² | a⁴ | **a²** |
| b | b² | b³ | b | **b** |
| c | c | c² | c³ | **c** |

**HCF = 4a²bc**

### Example 3: 6x²y aur 9xz ka HCF

- Numbers: HCF of 6, 9 = **3**
- x: x² aur x, to **x**
- y: pehle term mein hai, doosre mein nahi. To **y nahi aayega.**
- z: doosre mein hai, pehle mein nahi. To **z nahi aayega.**

**HCF = 3x**

---

## Part B: Lambe expressions ko factorise karna

Tarika:
1. Saare terms ka **HCF** nikalo (Part A wala tarika).
2. Har term ko HCF se **divide** karo.
3. Likho: **HCF × (jo jo bacha, unke signs ke saath)**.
4. **Jaanch:** HCF ko bracket ke har term se multiply karke dekho.

**Example 1:** 12x³y² + 18x²y⁴

HCF = 6x²y² (Part A, Example 1)
- 12x³y² ÷ 6x²y² = 2x
- 18x²y⁴ ÷ 6x²y² = 3y²

= **6x²y²(2x + 3y²)**

Jaanch: 6x²y² × 2x = 12x³y² ✅, 6x²y² × 3y² = 18x²y⁴ ✅

**Example 2:** 8a³b²c - 12a²b³c² + 20a⁴bc³

HCF = 4a²bc (Part A, Example 2)
- 8a³b²c ÷ 4a²bc = 2ab
- 12a²b³c² ÷ 4a²bc = 3b²c
- 20a⁴bc³ ÷ 4a²bc = 5a²c²

= **4a²bc(2ab - 3b²c + 5a²c²)**

Jaanch: 4a²bc × 2ab = 8a³b²c ✅, 4a²bc × 3b²c = 12a²b³c² ✅, 4a²bc × 5a²c² = 20a⁴bc³ ✅

**Example 3 (jab koi term poora ka poora HCF ho):** 14p²q³ - 21p³q² + 7p²q²

HCF = 7p²q²
- 14p²q³ ÷ 7p²q² = 2q
- 21p³q² ÷ 7p²q² = 3p
- 7p²q² ÷ 7p²q² = **1**

= **7p²q²(2q - 3p + 1)**

Dhyan do, teesra term poora HCF tha, to uski jagah **1** bacha. Ise chhodna nahi hai, warna jaanch mein ek term kam aayega.

---

## Part C: Negative common factor nikalna

Kabhi kabhi pehla term negative hota hai. Tab aksar **minus ke saath** common factor nikalna achha lagta hai, taaki bracket ka pehla term positive rahe.

### Rule

> Jab aap **minus** wala common factor nikalte ho, to bracket ke andar **har term ka sign ulat jata hai.**

Kyun? Kyunki (-) × (-) = (+) aur (-) × (+) = (-). Jab hum wapas multiply karenge, to sign phir se ulat ke sahi ho jayega.

**Example 1:** -6x² - 9x

HCF = 3x. Pehla term negative hai, to **-3x** nikalo.
- -6x² ÷ (-3x) = 2x
- -9x ÷ (-3x) = 3

= **-3x(2x + 3)**

Jaanch: -3x × 2x = -6x² ✅, -3x × 3 = -9x ✅

**Example 2:** -4a³ + 8a² - 12a

-4a nikalo.
- -4a³ ÷ (-4a) = a²
- 8a² ÷ (-4a) = -2a
- -12a ÷ (-4a) = 3

= **-4a(a² - 2a + 3)**

Jaanch: -4a × a² = -4a³ ✅, -4a × (-2a) = 8a² ✅, -4a × 3 = -12a ✅

### Dono answer sahi hain

-6x² - 9x ko 3x(-2x - 3) bhi likh sakte ho. Ye bhi sahi hai. Par **-3x(2x + 3)** zyada saaf hai, aur aage ke topics mein kaam aasan karta hai.

---

## Part D: Bracket hi common factor ho

Topic 1 mein humne dekha tha ki poora bracket bhi common factor ho sakta hai. Ab iske thode mushkil roop dekhte hain.

Bracket ko ek **dabba** samjho. Dabbe ke andar kya hai, isse farak nahi padta. Agar dono terms mein same dabba hai, to use bahar nikal lo.

**Example 1:** 5x(a + b) - 3y(a + b)

Dabba (a + b) dono mein hai.
= **(a + b)(5x - 3y)**

Jaanch: (a + b)(5x - 3y) = 5x(a + b) - 3y(a + b) ✅

**Example 2 (chhupa hua 1):** 5a(a - 3) - (a - 3)

Doosra term -(a - 3) asal mein **-1 × (a - 3)** hai.
= **(a - 3)(5a - 1)**

Jaanch: (a - 3)(5a - 1) = 5a(a - 3) - 1(a - 3) ✅

**Example 3 (bracket ki power):** 3(x - y)² + 6(x - y)

(x - y)² = (x - y)(x - y). To dono terms mein kam se kam ek (x - y) hai. Saath mein 3 bhi common hai.
HCF = 3(x - y)
- 3(x - y)² ÷ 3(x - y) = (x - y)
- 6(x - y) ÷ 3(x - y) = 2

= 3(x - y)[(x - y) + 2]
= **3(x - y)(x - y + 2)**

Jaanch: 3(x - y) × (x - y) = 3(x - y)² ✅, 3(x - y) × 2 = 6(x - y) ✅

**Example 4 (cube wala bracket):** 4(a + b)³ - 2(a + b)²

Numbers ka HCF 2. Bracket ki kam power (a + b)².
HCF = 2(a + b)²
- 4(a + b)³ ÷ 2(a + b)² = 2(a + b)
- 2(a + b)² ÷ 2(a + b)² = 1

= 2(a + b)²[2(a + b) - 1]
= **2(a + b)²(2a + 2b - 1)**

**Example 5:** xy(x + y) - 2x(x + y)

Common: x aur (x + y), to HCF = x(x + y)
- xy(x + y) ÷ x(x + y) = y
- 2x(x + y) ÷ x(x + y) = 2

= **x(x + y)(y - 2)**

Jaanch: x(x + y) × y = xy(x + y) ✅, x(x + y) × 2 = 2x(x + y) ✅

**Example 6:** 6(2x - 3)² - 9(2x - 3)

HCF = 3(2x - 3)
- 6(2x - 3)² ÷ 3(2x - 3) = 2(2x - 3)
- 9(2x - 3) ÷ 3(2x - 3) = 3

= 3(2x - 3)[2(2x - 3) - 3]
= 3(2x - 3)(4x - 6 - 3)
= **3(2x - 3)(4x - 9)**

---

## Part E: Sign flip trick (b - a = -(a - b))

### Kahani: ulta raasta

Ghar se school 2 km hai. School se ghar bhi 2 km hai. Doori same hai, bas **disha ulti** hai.

Brackets ke saath bhi aisa hi hota hai:
- (x - y) aur (y - x) mein **same numbers** hain,
- par ek doosre ke **ulte** (negative) hain.

> **(y - x) = -(x - y)**

Check: x = 5, y = 2 rakho. x - y = 3, aur y - x = -3. Dekho, ek doosre ke ulte!

Ye trick tab kaam aati hai jab do brackets **lagbhag same** dikhein, par kram ulta ho.

**Example 1:** a(x - y) - b(y - x)

(y - x) ko -(x - y) likho:
-b(y - x) = -b × [-(x - y)] = **+b(x - y)**

Ab:
= a(x - y) + b(x - y)
= **(x - y)(a + b)**

Jaanch: Original khol ke: ax - ay - by + bx. Answer khol ke: (x - y)(a + b) = ax + bx - ay - by. Dono same ✅

**Example 2:** 3m(p - q) + 5n(q - p)

(q - p) = -(p - q), to +5n(q - p) = -5n(p - q).
= 3m(p - q) - 5n(p - q)
= **(p - q)(3m - 5n)**

Jaanch: Original: 3mp - 3mq + 5nq - 5np. Answer: 3mp - 5np - 3mq + 5nq. Same ✅

**Example 3:** x²(a - b) + y²(b - a)

(b - a) = -(a - b), to +y²(b - a) = -y²(a - b).
= x²(a - b) - y²(a - b)
= **(a - b)(x² - y²)**

(Bracket x² - y² ko aur bhi toda ja sakta hai. Wo Topic 4, difference of squares mein seekhenge.)

### Square aur cube mein sign flip ka rule

Ye bahut zaroori hai:

| Power | Sign flip ka asar | Kyun |
|---|---|---|
| **Even** (2, 4...) | **Koi asar nahi:** (y - x)² = (x - y)² | (-)² = (+) |
| **Odd** (1, 3...) | **Minus aata hai:** (y - x)³ = -(x - y)³ | (-)³ = (-) |

Ye wahi baat hai jo Exponents chapter mein seekhi thi: negative base par even power positive, odd power negative.

**Example 4:** 2(a - b)² + 4(b - a)

- (b - a) = -(a - b), to 4(b - a) = -4(a - b)
- 2(a - b)² ko chhuna nahi hai.

= 2(a - b)² - 4(a - b)
= 2(a - b)[(a - b) - 2]
= **2(a - b)(a - b - 2)**

Jaanch: 2(a - b) × (a - b) = 2(a - b)² ✅, 2(a - b) × (-2) = -4(a - b) = 4(b - a) ✅

---

## Part F: Fraction wale coefficients

Jab coefficients fractions hon, to HCF nikalne ka rule:

> **HCF of fractions = HCF of numerators ÷ LCM of denominators**

**Example 1:** (1/2)x² + (3/2)x

- Numerators 1 aur 3 ka HCF = 1
- Denominators 2 aur 2 ka LCM = 2
- To number wala common factor = 1/2. Letter: x.
- HCF = (1/2)x

= **(1/2)x(x + 3)**

Jaanch: (1/2)x × x = (1/2)x² ✅, (1/2)x × 3 = (3/2)x ✅

**Example 2:** (2/3)a²b - (4/9)ab²

- Numerators 2 aur 4 ka HCF = 2
- Denominators 3 aur 9 ka LCM = 9
- Number wala hissa = 2/9. Letters: ab.
- HCF = (2/9)ab

Ab divide karo:
- (2/3)a²b ÷ (2/9)ab = (2/3 × 9/2)a = 3a
- (4/9)ab² ÷ (2/9)ab = 2b

= **(2/9)ab(3a - 2b)**

Jaanch: (2/9)ab × 3a = (6/9)a²b = (2/3)a²b ✅, (2/9)ab × 2b = (4/9)ab² ✅

---

## Part G: Common factor ke baad aur kya? (Aage ki jhalak)

Common factor nikalne ke baad aksar bracket ke andar ek **jaani pehchani shakal** dikhti hai, jise aur toda ja sakta hai. Iske tarike hum aage ke topics mein seekhenge, abhi bas pehchanna seekho:

| Expression | Common factor ke baad | Aage kaunsa topic |
|---|---|---|
| 3x² - 27 | 3(x² - 9) | Topic 4: difference of squares |
| 2x² + 10x + 12 | 2(x² + 5x + 6) | Topic 5: quadratic trinomial |
| 5a³ - 40 | 5(a³ - 8) | Topic 7: difference of cubes |
| (a - b)x² - (a - b)y² | (a - b)(x² - y²) | Topic 4 |

Isliye yaad rakho: **common factor hamesha pehla kadam hai, aakhri nahi.**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Chhupe hue 1 ko chhod dena**
7p²q²(2q - 3p + 1) mein aakhri 1 bhool kar 7p²q²(2q - 3p) likhna galat hai. Jaanch karo: ek term kam aayega.

**Galti 2: Sabse badi power le lena**
x³ aur x² ka common **x²** hai, x³ nahi. Hamesha **sabse kam power**.

**Galti 3: Aisa letter HCF mein daal dena jo sab terms mein nahi**
6x²y aur 9xz ka HCF 3x hai, 3xyz nahi. y aur z sab terms mein nahi hain.

**Galti 4: Poora HCF na nikalna**
12x³y² + 18x²y⁴ = 2x(6x²y² + 9xy⁴) galat nahi hai, par **adhoora** hai. Bracket ke andar abhi bhi 3xy² common hai. Hamesha **sabse bada** common factor nikalo.

**Galti 5: Negative nikalte waqt sirf pehle term ka sign badalna**
-4a³ + 8a² - 12a = -4a(a² - 2a + 3). Andar **har term** ka sign badla hai. -4a(a² + 2a - 3) likhna galat hai.

**Galti 6: Sign flip galat jagah lagana**
(y - x)² = (x - y)², yahan minus **nahi** aata (even power). Par (y - x) = -(x - y) aur (y - x)³ = -(x - y)³, yahan minus **aata** hai.

**Galti 7: Jaanch na karna**
Sign flip aur negative factor wale sawalon mein galti sabse zyada hoti hai. Hamesha wapas multiply karke dekho.

---

## Quick Recap

- **Common factor nikalna = har factorisation ka pehla kadam.**
- **HCF of monomials:** numbers ka HCF × har common letter ki **sabse kam power**. Jo letter kisi ek term mein bhi nahi, wo HCF mein nahi aata.
- Har term ko HCF se divide karo. Agar koi term poora HCF tha, to uski jagah **1** bachta hai.
- **Negative common factor** nikalo to bracket ke andar **har** term ka sign ulat jata hai.
- **Bracket bhi common factor** ho sakta hai, uski bhi **sabse kam power** lo (jaise (x - y)² aur (x - y) mein (x - y)).
- **Sign flip:** (y - x) = -(x - y). Even power par asar nahi, odd power par minus aata hai.
- **Fractions ka HCF** = numerators ka HCF ÷ denominators ka LCM.
- Common factor ke baad bracket mein aksar koi identity chhupi hoti hai, use aage ke topics mein todenge.
- Hamesha **jaanch** karo.

---

## Practice Questions

1. Find the HCF of:
   (a) 15x²y³ and 25x³y
   (b) 6a²bc, 9ab²c and 12abc²

2. Factorise:
   (a) 9x³y² - 15x²y³
   (b) 10p³q² + 15p²q - 5pq
   (c) 16a⁴b³ - 24a³b⁴ + 8a²b²

3. Factorise by taking out a negative common factor:
   (a) -12x³ - 18x²
   (b) -5y² + 10y - 15

4. Factorise:
   (a) 7a(m + n) - 4b(m + n)
   (b) 4(x + y)² - 8(x + y)

5. Factorise using the sign-flip idea:
   (a) x(a - b) + y(b - a)
   (b) 6p(q - r) - 9(r - q)

6. Factorise: (3/4)x²y - (1/4)xy²

7. Factorise:
   (a) 2(3x - 1)² - 6(3x - 1)
   (b) (a - b)³ + 2(b - a)²

8. Take out the common factor from 4x² - 36. Which type of expression is left inside the bracket?

9. State whether each statement is true or false. Give a reason.
   (a) 6x² + 3x = 3x(2x)
   (b) The HCF of 8x³ and 12x⁵ is 4x³.
   (c) a - b = -(b - a)
   (d) (x - y)² = -(y - x)²

### Answers

1. (a) Numbers: HCF(15, 25) = 5. x: x² (kam power). y: y (kam power). **HCF = 5x²y**
   (b) Numbers: HCF(6, 9, 12) = 3. a, b, c teeno sab terms mein hain, har ek ki kam power 1. **HCF = 3abc**
2. (a) HCF = 3x²y². **3x²y²(3x - 5y)**
   Jaanch: 3x²y² × 3x = 9x³y² ✅, 3x²y² × 5y = 15x²y³ ✅
   (b) HCF = 5pq. Aakhri term poora HCF hai, to 1 bachega. **5pq(2p²q + 3p - 1)**
   (c) HCF = 8a²b². **8a²b²(2a²b - 3ab² + 1)**
3. (a) -6x² nikalo. **-6x²(2x + 3)**
   (b) -5 nikalo, andar har sign ulta. **-5(y² - 2y + 3)**
   Jaanch: -5 × y² = -5y² ✅, -5 × (-2y) = 10y ✅, -5 × 3 = -15 ✅
4. (a) **(m + n)(7a - 4b)**
   (b) HCF = 4(x + y). 4(x + y)[(x + y) - 2] = **4(x + y)(x + y - 2)**
5. (a) y(b - a) = -y(a - b). To x(a - b) - y(a - b) = **(a - b)(x - y)**
   Jaanch: Original: ax - bx + by - ay. Answer: ax - ay - bx + by. Same ✅
   (b) -9(r - q) = +9(q - r). To 6p(q - r) + 9(q - r) = **3(q - r)(2p + 3)**
6. Numerators 3, 1 ka HCF = 1, denominators 4, 4 ka LCM = 4. HCF = (1/4)xy. **(1/4)xy(3x - y)**
   Jaanch: (1/4)xy × 3x = (3/4)x²y ✅, (1/4)xy × y = (1/4)xy² ✅
7. (a) HCF = 2(3x - 1). 2(3x - 1)[(3x - 1) - 3] = **2(3x - 1)(3x - 4)**
   (b) (b - a)² = (a - b)² (even power, koi minus nahi). To (a - b)³ + 2(a - b)². HCF = (a - b)². **(a - b)²(a - b + 2)**
8. **4(x² - 9)**. Bracket ke andar **difference of two squares** (x² - 3²) bacha hai, jise Topic 4 mein aur todenge.
9. (a) **False.** 3x ÷ 3x = 1 bachta hai. Sahi answer 3x(2x + 1) hai.
   (b) **True.** HCF(8, 12) = 4, aur x³ aur x⁵ mein kam power x³.
   (c) **True.** -(b - a) = -b + a = a - b.
   (d) **False.** Even power par sign flip ka asar nahi hota. (x - y)² = (y - x)², minus nahi aata.

---

Agar sab kuch ek saath bhaari lag raha ho, to Diwali ke gift packs yaad karo: **bahar wo jo sab mein common hai (kitne packs), andar wo jo har pack mein hai.** Baaki sab, chahe negative ho, bracket ho ya fraction, isi ek idea ke alag roop hain.

---

**Agle topic mein (Topic 3: Factorisation by Grouping):** Kya ho jab poore expression mein koi common factor na ho? Tab hum terms ko do-do ke **groups** mein baantenge aur **har group se common factor nikalenge**, yaani is topic ka hi tarika, bas chhote hisson par. Part D ka "bracket bhi common factor" wala idea wahan sabse zyada kaam aayega.
