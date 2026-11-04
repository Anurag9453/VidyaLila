# Chapter: Polynomials (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [polynomials.md](polynomials.md) se aage chalti hai** (wahan Topic 1 aur Topic 2 hain).
> **Topics covered in this file:**
> 3. Polynomial in One Variable, aur Standard Form of a Polynomial

---

# Topic 3: Polynomial in One Variable aur Standard Form

Pichle do topics mein hum ne constants, variables, terms aur coefficients seekhe. Ab hum algebraic expressions ki ek khaas family se milenge, jise **polynomial** kehte hain. Pehle dekhenge ki polynomial kya hota hai, aur phir seekhenge ki use ek saaf, sahi kram (standard form) mein kaise likhte hain.

---

## Ek khet ki kahani

Ramesh ke paas ek **vargakar (square) plot** hai, jiski har side **x metre** hai.

Wo apne plot mein ye banwana chahta hai:

1. Poora square plot, jiska area **x × x = x²** vargmetre hai.
2. Plot ke ek taraf **5 metre chauda** aur **x metre lamba** ek patla rasta, jiska area **5 × x = 5x** vargmetre hai.
3. Ek chhota store room, jiska area fix **6** vargmetre hai.

Kul area = **x² + 5x + 6**

Is expression mein dhyan do:
- x² wale term mein x ki power **2** hai.
- 5x wale term mein x ki power **1** hai.
- 6 mein x hai hi nahi (isko hum aage dekhenge ki power 0 kyun maani jati hai).

Powers 2, 1, 0 hain, yaani **poore numbers (whole numbers)**. Aur sirf ek hi variable **x** hai. Aisi expression ko **polynomial in one variable** kehte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Polynomial** | Aisi expression jisme variable ki powers sirf whole numbers (0, 1, 2, 3...) hon | 3x² - 5x + 7 |
| **Polynomial in one variable** | Aisa polynomial jisme sirf ek hi variable ho | 4y³ - y + 2 |
| **Whole number** | 0, 1, 2, 3, 4... (na negative, na fraction) | 0, 5, 12 |
| **Constant polynomial** | Aisa polynomial jisme sirf number ho, koi variable nahi | 7, -3 |
| **Standard form** | Polynomial ke terms ko power ke kram mein likhna | 2x³ + x² - 5x + 1 |

"Poly" ka matlab hota hai **bahut**, aur "nomial" ka matlab hota hai **terms**. Yaani polynomial = bahut saare terms wali expression. Par ek term ya do term wali expression bhi polynomial ho sakti hai, jaise 5x ya x + 3.

---

## Part A: Polynomial in One Variable

### Polynomial banne ke do niyam

Koi expression polynomial tab hoti hai jab:

1. Variable ki **har power ek whole number** (0, 1, 2, 3...) ho.
2. Variable **denominator (neeche) mein na ho**, aur **square root ke andar na ho.**

Aur ek variable wale polynomial mein, jaisa naam se hi pata chalta hai, **sirf ek letter** hota hai (jaise sirf x, ya sirf y).

### Whole number wali power hi kyun?

Ise LEGO blocks se samjho. Maan lo x ek LEGO block hai.

- x² ka matlab: **2 blocks** jode hain (x × x)
- x³ ka matlab: **3 blocks** jode hain
- x ka matlab: **1 block**
- x⁰ ka matlab: **koi block nahi**, yaani sirf 1 (aur isi liye constant term mein x⁰ chhupa hota hai)

Ab sochkar dekho:
- "**Aadha** block jodna" ka kya matlab? Samajh nahi aata. Yaani x^(1/2) allowed nahi.
- "**-2** block jodna" ka kya matlab? Ye bhi nahi ho sakta. Yaani x⁻² allowed nahi.

Block sirf **0, 1, 2, 3...** ginti mein hi jud sakte hain. Isi liye polynomial mein power whole number hi hoti hai.

### Polynomial hain (haan wale examples)

| Expression | Kyun polynomial hai |
|---|---|
| 3x² - 5x + 7 | Powers 2, 1, 0 (sab whole number), variable sirf x |
| y³ + 1 | Powers 3 aur 0 |
| 5x | Power 1 |
| x/2 + 3 | Ye (1/2)x + 3 hai, power 1 hai. Fraction **coefficient** mein hai, power mein nahi |
| 7 | Constant polynomial (7 = 7x⁰) |
| √3 x² + 2x | √3 sirf ek number hai (coefficient), power 2 aur 1 hai |

### Polynomial nahi hain (na wale examples)

| Expression | Kyun polynomial nahi hai |
|---|---|
| x + 1/x | 1/x = x⁻¹, power **negative** hai |
| √x + 3 | √x = x^(1/2), power **fraction** hai |
| 3x⁻² + 1 | Power **-2** negative hai |
| 5/y² | y² neeche (denominator) mein hai, yaani y⁻² |
| x² + xy + y² | Isme **do variables** hain. Ye polynomial to hai, par one variable wala nahi |
| 2ˣ | Yahan variable **power mein** hai, x² jaisa nahi hai |

### Ek zaroori fark: coefficient vs power

Isme log aksar confuse hote hain:

- **x/2** polynomial hai, kyunki ye (1/2) × x hai. Fraction **coefficient** hai, power 1 hai.
- **2/x** polynomial nahi hai, kyunki x neeche hai. Ye 2x⁻¹ hai, power -1 hai.

Dono dekhne mein milte julte lagte hain, par farak ye hai ki **variable kahan hai.**

### Polynomial ka notation: p(x)

Polynomial ko ek naam dene ke liye hum aksar **p(x)**, **q(x)**, ya **f(x)** likhte hain. "p(x)" ko padhte hain "**p of x**". Isse pata chalta hai ki ye polynomial **x variable mein** hai.

**Example:** p(x) = 4x² - 3x + 5

Is polynomial mein:
- Variable: **x**
- Terms: 4x², -3x, 5
- Coefficients: **4, -3** (x² aur x ke)
- Constant term: **5**

Agar polynomial y mein ho to q(y) = y³ - 2y + 1 jaise likhenge.

**Thodi si value nikalna (Topic 1 jaisa):** p(x) = 4x² - 3x + 5 mein
- p(1) matlab x ki jagah 1 rakho: 4(1)² - 3(1) + 5 = 4 - 3 + 5 = **6**
- p(0) = 4(0)² - 3(0) + 5 = **5**
- p(-1) = 4(-1)² - 3(-1) + 5 = 4 + 3 + 5 = **12**

(Value nikalne ka tarika wahi hai jo Topic 1 mein dekha tha. Variable ki jagah number rakho, aur negative ho to bracket lagao.)

### Constant polynomial aur zero polynomial

- **Constant polynomial:** Sirf ek number, jaise **7**, **-4**, **1/2**. Ye 7x⁰ ki tarah hota hai.
- **Zero polynomial:** Sirf **0**. Isme koi term nahi hota (ya yun kahein ki saare coefficients 0 hain).

### Ek hi term ya kam terms wale bhi polynomial hain

Topic 1 mein hum ne monomial, binomial aur trinomial dekhe the. Wo sab polynomial hi hote hain, bas unme terms ki ginti alag hoti hai.

- 6x³ (monomial) polynomial hai.
- x + 4 (binomial) polynomial hai.
- x² - 3x + 2 (trinomial) polynomial hai.

---

## Part B: Standard Form of a Polynomial

### Kahani: kitaabon ki shelf

Socho aapke paas ek bookshelf hai, par kitaabein idhar udhar bikhri hui hain. Kabhi bada size pehle, kabhi chhota. Aapko koi kitaab dhundhni ho to bahut waqt lagega.

Ab aap sab kitaabon ko **size ke kram mein** laga dete ho: sabse badi se sabse chhoti. Ab har kitaab dhundhna aasan ho gaya.

Polynomial ke saath bhi aisa hi hota hai. Jab terms idhar udhar bikhre hote hain, to padhna aur aage ka kaam (jaise jodna, ghatana, divide karna) mushkil hota hai. Isliye hum terms ko ek tay kram mein likhte hain. Isi ko **standard form** kehte hain.

### Standard form kya hai?

> Polynomial ko **variable ki power ke kram mein** likhna standard form hai.

Do tarike hote hain:

- **Descending order (utarte kram mein):** x ki sabse badi power pehle, phir ghatti hui, aur aakhir mein constant. **Ye zyada use hota hai** aur ise hi aam taur par standard form maana jata hai.
- **Ascending order (chadhte kram mein):** x ki sabse chhoti power (constant) pehle, phir badhti hui.

**Example:** Polynomial **5 + 2x³ - x + 4x²**

Descending (standard form):
**2x³ + 4x² - x + 5**
(powers: 3, 2, 1, 0)

Ascending:
**5 - x + 4x² + 2x³**
(powers: 0, 1, 2, 3)

Dhyan do, dono mein terms wahi hain, sirf unka **kram** badla hai. Aur har term ke saath uska sign bhi gaya hai (Topic 2 mein humne dekha tha ki sign term ke saath chipka hota hai).

### Standard form likhne ke steps

1. **Pehle like terms ko jod lo** (Topic 1 mein seekha tha). Isse expression chhoti ho jati hai.
2. Har term ki **power dekho.**
3. Terms ko **sabse badi power se sabse chhoti power** ki taraf likho (descending).
4. **Sign term ke saath hi rakho.**

### Solved examples

**Example 1:** Standard form mein likho: **3x - 7 + x² - 2x + 4x³**

Step 1: Like terms jodo.
- x wale terms: 3x aur -2x → 3x - 2x = **x**
- Baaki terms: -7, x², 4x³ jaise hain.
- Jodne ke baad expression ban gayi: x + x² - 7 + 4x³ (abhi kram bikhra hua hai)

Step 2: Powers dekho.
- 4x³ (power 3), x² (power 2), x (power 1), -7 (power 0)

Step 3: Descending order mein likho.
**4x³ + x² + x - 7** ✅

**Example 2:** Standard form mein likho: **5 - 3y² + y - 2y² + y³**

Step 1: Like terms jodo.
- y² wale: -3y² aur -2y² → -3y² - 2y² = **-5y²**

Step 2: Ab terms hain y³, -5y², y, 5.

Step 3: Descending mein:
**y³ - 5y² + y + 5** ✅

**Example 3:** Standard form mein likho: **x/2 + 3x² - 1**

Terms hain 3x², x/2, -1 (powers 2, 1, 0).
**3x² + x/2 - 1** ✅
(Yahan x/2 ka matlab (1/2)x hai, ye polynomial ka valid term hai.)

**Example 4:** Standard form (descending) mein likho: **8 - 6t + 2t⁴ - t²**

Powers: 8 (0), -6t (1), 2t⁴ (4), -t² (2)
**2t⁴ - t² - 6t + 8** ✅

### Jab koi power gayab ho

Agar kisi polynomial mein koi power nahi likhi ho, to uska coefficient **0** maana ja sakta hai. Ye cheez aage ke topics mein (jaise polynomials ko divide karna) bahut kaam aati hai.

**Example:** x³ + 5

Isme x² aur x wale terms nahi hain. Hum unhe **0 coefficient** ke saath likh sakte hain:
x³ + **0x²** + **0x** + 5

Isse value nahi badalti, kyunki 0 × kuch bhi = 0. Par kram saaf dikhta hai (power 3, 2, 1, 0).

**Example:** 2y⁴ - 7y + 1
= 2y⁴ + **0y³** + **0y²** - 7y + 1

### Coefficients ki list

Standard form mein likhne ke baad, har power ka coefficient padhna bahut aasan ho jata hai.

**p(x) = 2x³ - 5x² + x - 9**

| Power | x³ | x² | x | x⁰ (constant) |
|---|---|---|---|---|
| Coefficient | 2 | -5 | 1 | -9 |

Dhyan do ki x ka coefficient **1** hai (kyunki x = 1 × x), aur constant term -9 hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: √x ya 1/x ko polynomial samajhna**
Ye dono polynomial nahi hain, kyunki powers fraction (1/2) aur negative (-1) hain. Sirf **0, 1, 2, 3...** powers allowed hain.

**Galti 2: x/2 aur 2/x mein confuse hona**
x/2 polynomial hai (fraction coefficient mein hai). 2/x polynomial nahi hai (x denominator mein hai).

**Galti 3: Like terms jodna bhool jana**
Standard form likhne se pehle **like terms jodna** na bhoolo. 3x + 5x ko alag alag likhne ke bajaye 8x likho.

**Galti 4: Sign chhod dena**
x² - 5x + 6 ko arrange karte waqt -5x ko 5x mat likhna. Term uske sign ke saath hi aage peeche hota hai.

**Galti 5: Constant term ko pehle likhna (descending mein)**
Descending mein constant term **sabse aakhir mein** aata hai. Ascending mein sabse pehle.

**Galti 6: Aise expression ko polynomial maan lena jisme variable power mein ho**
2ˣ polynomial nahi hai. x² polynomial hai. Fark ye hai ki x² mein variable aadhar (base) hai, 2ˣ mein variable **power** hai.

**Galti 7: Do variable wale ko one variable wala kehna**
x² + xy + y² mein x aur y dono hain, isliye ye one variable wala polynomial nahi hai.

---

## Quick Recap

- **Polynomial** wo expression hai jisme variable ki powers **sirf whole numbers (0, 1, 2, 3...)** hon.
- Variable **denominator mein na ho**, aur **square root ke andar na ho.**
- **Polynomial in one variable** mein sirf ek hi letter (jaise x) hota hai.
- Polynomial ko p(x), q(y) jaise naam dete hain. p(x) ko "p of x" padhte hain.
- Constant ek **constant polynomial** hai, aur 0 **zero polynomial** hai.
- x/2 polynomial hai, par 2/x aur √x nahi hain.
- **Standard form** = terms ko power ke kram mein likhna. Aam taur par **descending order** (badi power se chhoti power).
- Pehle **like terms jodo**, phir **kram mein likho**, aur **sign term ke saath** rakho.
- Gayab power ko **0 coefficient** ke saath likha ja sakta hai (x³ + 5 = x³ + 0x² + 0x + 5).

---

## Practice Questions

1. Which of the following are polynomials in one variable? Give a reason for each.
   (a) 4x³ - 2x + 1
   (b) x + 1/x
   (c) √x + 3
   (d) y² - 5y
   (e) 7
   (f) x² + xy + y²
   (g) 3x⁻² + 1
   (h) x/2 + 5

2. For the polynomial p(x) = 2x³ - 5x² + x - 9, write:
   (a) the coefficient of x³
   (b) the coefficient of x²
   (c) the coefficient of x
   (d) the constant term

3. Write each polynomial in standard form (descending order):
   (a) 5 - 2x + 3x²
   (b) 7y + y³ - 2 + 4y²
   (c) 3x² + 5x - x² + 2 - 4x

4. Write x³ - 3x² + 2x - 5 in ascending order.

5. Rewrite each polynomial showing the missing terms with zero coefficients:
   (a) x⁴ + 3x - 7
   (b) 2y³ - 5

6. If p(x) = 4x² - 3x + 5, find p(2), p(0) and p(-2).

7. Explain in your own words why 3/x² + 1 is not a polynomial.

### Answers

1. (a) **Yes.** Powers 3, 1, 0 whole numbers hain.
   (b) **No.** 1/x = x⁻¹, negative power.
   (c) **No.** √x = x^(1/2), fraction power.
   (d) **Yes.** Powers 2 aur 1.
   (e) **Yes.** Constant polynomial (7 = 7x⁰).
   (f) **No.** Isme do variables (x aur y) hain, ek nahi.
   (g) **No.** Power -2 negative hai.
   (h) **Yes.** (1/2)x + 5, power 1 hai.
2. (a) **2**  (b) **-5**  (c) **1**  (d) **-9**
3. (a) **3x² - 2x + 5**
   (b) **y³ + 4y² + 7y - 2**
   (c) Like terms: 3x² - x² = 2x², aur 5x - 4x = x. Answer: **2x² + x + 2**
4. **-5 + 2x - 3x² + x³**
5. (a) **x⁴ + 0x³ + 0x² + 3x - 7**
   (b) **2y³ + 0y² + 0y - 5**
6. p(2) = 4(4) - 3(2) + 5 = 16 - 6 + 5 = **15**
   p(0) = **5**
   p(-2) = 4(4) - 3(-2) + 5 = 16 + 6 + 5 = **27**
7. 3/x² + 1 = 3x⁻² + 1 hai. Isme x ki power **-2** hai, jo negative hai. Polynomial mein variable ki power whole number (0, 1, 2, 3...) honi chahiye, isliye ye polynomial nahi hai.

---

Agar abhi bhi "power whole number hi kyun" wali baat dimaag mein atak rahi hai, to LEGO wali baat yaad kar lo. Blocks sirf 0, 1, 2, 3 ginti mein jud sakte hain, aadhe ya ulte nahi. Baaki sab kuch Topic 1 aur 2 jaisa hi hai, bas ab hum us expression ko ek naam (polynomial) de rahe hain aur use sahi kram mein likhna seekh rahe hain.
