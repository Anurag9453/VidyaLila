# Chapter: Factorisation

> **Class:** 9 | **Subject:** Mathematics
> **Ye chapter [Polynomials](../polynomials/polynomials.md) chapter ka extended version hai.** Polynomials ke saare topics ([part 2](../polynomials/polynomials-part2.md), [part 3](../polynomials/polynomials-part3.md), [part 4](../polynomials/polynomials-part4.md), [part 5](../polynomials/polynomials-part5.md), [part 6](../polynomials/polynomials-part6.md)) yahan kaam aayenge, khaas kar Factor Theorem.
> **Topics covered in this file:**
> 1. Factorisation of Polynomials, Formulae of Factorisation, Methods of Factorisation

---

# Topic 1: Factorisation of Polynomials

## Ramesh ke plot ki wapsi

Topic 3 (Polynomials) mein humne Ramesh ka ek plot dekha tha, jiska kul area tha:

**x² + 5x + 6**

Tab humne bas ye likha tha ki ye ek polynomial hai. Ab ek naya sawal poochte hain:

> Is plot ki **lambai aur chaudai** kitni hai?

Area = lambai × chaudai hota hai. To hume ye expression **do cheezon ke multiplication** ke roop mein likhni hai. Dhyan se dekho:

(x + 3) × (x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6 ✅

To plot ki **lambai x + 3** aur **chaudai x + 2** thi.

Aapne abhi abhi ek polynomial ko **tod kar uske factors mein likha:**

**x² + 5x + 6 = (x + 2)(x + 3)**

Isi kaam ka naam hai **Factorisation**. Is chapter mein hum yahi seekhenge: kaise tode, kab kaunsa tarika lagayein, aur kaunse formulae kaam aate hain.

---

## Number ki factorisation se shuruaat

Ek purani baat yaad karo. Number **12** ko hum aise tod sakte hain:

12 = 3 × 4
12 = 2 × 6
12 = 2 × 2 × 3 (ye sabse chhote tukde hain, prime factors)

Yahi baat polynomials ke saath hoti hai. Bas yahan tukde numbers nahi, chhote polynomials hote hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Factor** | Wo cheez jo kisi expression ko bina remainder ke divide kare | x + 2 aur x + 3, x² + 5x + 6 ke factors hain |
| **Factorisation** | Expression ko factors ke **multiplication** ke roop mein likhna | x² + 5x + 6 = (x + 2)(x + 3) |
| **Common factor** | Wo factor jo kai terms mein mauzood ho | 6x + 9 mein **3** |
| **HCF** | Common factors mein sabse bada | 12x aur 18x² ka HCF 6x |
| **Irreducible factor** | Aisa factor jise aur tod nahi sakte | x + 2 (ise aur nahi tod sakte) |
| **Factorise completely** | Tab tak todna jab tak har factor irreducible na ho jaye | x⁴ - 81 = (x² + 9)(x + 3)(x - 3) |

---

## Part A: Factorisation kya hai

### Factorisation expansion ka ulta hai

Dono ko saath dekho:

| | Kya hota hai | Example |
|---|---|---|
| **Expansion** (multiply karna) | Factors ko multiply karke ek lamba expression banana | (x + 2)(x + 3) → x² + 5x + 6 |
| **Factorisation** (todna) | Lambe expression ko factors mein todna | x² + 5x + 6 → (x + 2)(x + 3) |

Jaise ek ghar banana (bricks jodna) aur ghar ko wapas bricks mein todna. Dono ulte kaam hain.

### Ek bahut kaam ki trick: jaanch

Factorise karne ke baad aap hamesha **jaanch** kar sakte ho: **factors ko wapas multiply karo.** Jo original expression milna chahiye. Agar mil gaya, to aapka answer sahi hai.

### "Completely factorise karo" ka matlab

Jab tak factors aur tode ja sakte hain, todte jao.

**Example:** 2x² - 18
- Pehle tod diya: 2(x² - 9). Par x² - 9 ko aur todna baaki hai.
- Poora: 2(x + 3)(x - 3). Ab har factor irreducible hai.

---

## Part B: Factorisation ke Formulae (Identities)

Factorisation ke kaafi kaam **kuch pakke formulae** se ho jate hain. Ye formulae asal mein expansion ke formulae hain, bas ulte padhne hain.

### Formula table

| # | Expansion (multiply) | Factorisation (todna) |
|---|---|---|
| 1 | (a + b)² = a² + 2ab + b² | **a² + 2ab + b² = (a + b)²** |
| 2 | (a - b)² = a² - 2ab + b² | **a² - 2ab + b² = (a - b)²** |
| 3 | (a + b)(a - b) = a² - b² | **a² - b² = (a + b)(a - b)** |
| 4 | (x + a)(x + b) = x² + (a + b)x + ab | **x² + (a + b)x + ab = (x + a)(x + b)** |
| 5 | (a + b)(a² - ab + b²) = a³ + b³ | **a³ + b³ = (a + b)(a² - ab + b²)** |
| 6 | (a - b)(a² + ab + b²) = a³ - b³ | **a³ - b³ = (a - b)(a² + ab + b²)** |
| 7 | (a + b)³ = a³ + 3a²b + 3ab² + b³ | **a³ + 3a²b + 3ab² + b³ = (a + b)³** |
| 8 | (a - b)³ = a³ - 3a²b + 3ab² - b³ | **a³ - 3a²b + 3ab² - b³ = (a - b)³** |
| 9 | (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca | **a² + b² + c² + 2ab + 2bc + 2ca = (a + b + c)²** |

Chinta mat karo, ye sab ek saath ratne nahi hain. Ek ek karke samjhenge.

### Formula 1 aur 2: Perfect square trinomial

**a² + 2ab + b² = (a + b)²**
**a² - 2ab + b² = (a - b)²**

Ye isliye kaam karta hai kyunki (a + b)² = (a + b)(a + b) ko khol ke dekho:
a × a + a × b + b × a + b × b = a² + ab + ab + b² = a² + 2ab + b² ✅

**Pehchaan kaise karein:** Teen terms ho, pehla aur teesra **perfect square** hon (kisi cheez ka square), aur beech wala term **dono ki roots ka 2 guna** ho.

Ek chhoti si picture se samjho. Ek bada square lo jiski side (a + b) hai.
- Ek kona a × a ka square (a²)
- Doosra kona b × b ka square (b²)
- Beech mein do rectangle, har ek a × b ke (ab + ab = 2ab)

Total area (a + b)² = a² + 2ab + b² ✅

### Formula 3: Difference of two squares

**a² - b² = (a + b)(a - b)**

Ye sabse zyada use hone wala formula hai. Dhyan do:
- **Do terms** hote hain.
- **Dono perfect square** hote hain.
- Beech mein **minus** hota hai.

Ek aur mazedaar upyog: mental maths.
- **101 × 99** = (100 + 1)(100 - 1) = 100² - 1² = 10000 - 1 = **9999**
- **103 × 97** = (100 + 3)(100 - 3) = 10000 - 9 = **9991**

### Formula 4: x² + (a + b)x + ab

**x² + (a + b)x + ab = (x + a)(x + b)**

Isse hum "**middle term splitting**" ke naam se Part C mein use karenge. Seedhi bhasha mein: agar aapko do numbers mil jayein jinka **sum beech wale coefficient ke barabar** ho aur **product aakhri constant ke barabar** ho, to factors turant mil jate hain.

### Formula 5 aur 6: Sum aur Difference of Cubes

**a³ + b³ = (a + b)(a² - ab + b²)**
**a³ - b³ = (a - b)(a² + ab + b²)**

Signs yaad rakhne ka ek tarika:
- **Pehle bracket** mein wahi sign jo question mein hai (a + b ya a - b).
- **Doosre bracket** mein pehla term a² hamesha plus, **beech wala sign ulta**, aur aakhri term b² hamesha plus.

| | Pehla bracket | Doosre bracket |
|---|---|---|
| a³ **+** b³ | (a **+** b) | (a² **−** ab + b²) |
| a³ **−** b³ | (a **−** b) | (a² **+** ab + b²) |

Isko "**SOAP**" jaisa yaad kar sakte ho: **S**ame, **O**pposite, **A**lways **P**ositive. Pehla sign same, doosra opposite, teesra hamesha positive.

### Formula 7 aur 8: Cube of a binomial

**(a + b)³ = a³ + 3a²b + 3ab² + b³**
**(a - b)³ = a³ - 3a²b + 3ab² - b³**

Yahan 4 terms hote hain, aur pehla aur aakhri term **perfect cubes** hote hain.

### Formula 9: Teen terms ka square

**(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca**

Ye dikhne mein lamba hai, par pattern simple hai: teeno ke squares, aur teeno ke jodon ke product ka 2 guna.

---

## Part C: Factorisation ke Methods

Ab asli kaam. Kisi bhi expression ko dekh kar kaunsa tarika lagana hai? Paanch tarike hain.

### Method 1: Common factor nikalna

**Kab use karein:** Jab saare terms mein koi cheez (number ya letter) common ho.

**Tarika:**
1. Saare coefficients ka **HCF** nikalo.
2. Har letter ki **sabse kam power** jo sab terms mein ho, wo common hai.
3. Common factor ko bahar nikalo, aur bacha hua bracket mein likho.

**Example 1:** 6x + 9
HCF of 6 aur 9 = 3
= **3(2x + 3)**
Jaanch: 3(2x + 3) = 6x + 9 ✅

**Example 2:** 4x² - 8x
HCF of 4, 8 = 4, aur x common hai (x² aur x mein se kam power x¹).
= **4x(x - 2)**
Jaanch: 4x · x - 4x · 2 = 4x² - 8x ✅

**Example 3:** 12a²b - 18ab²
- HCF of 12, 18 = 6
- a: a² aur a mein se kam power = a
- b: b aur b² mein se kam power = b
- Common factor = 6ab
= **6ab(2a - 3b)**
Jaanch: 6ab · 2a - 6ab · 3b = 12a²b - 18ab² ✅

**Example 4:** 5x² + 5x
Common factor = 5x. Dhyan do ki doosre term 5x ko 5x se divide karne par **1** bachta hai (0 nahi).
= **5x(x + 1)**

**Example 5 (common factor ek bracket ho):** 3x(a - b) + 5y(a - b)
Dono terms mein **(a - b)** common hai.
= **(a - b)(3x + 5y)**

### Method 2: Grouping (terms ko jodon mein baantna)

**Kab use karein:** Jab **4 terms** hon aur sab mein ek common factor na ho.

**Tarika:**
1. Terms ko **do-do ke groups** mein baanto.
2. Har group se common factor nikalo.
3. Agar sahi grouping hui, to dono groups ke andar ek **same bracket** nikalega. Use common factor ki tarah nikal lo.

**Example 1:** ax + ay + bx + by
Group 1: ax + ay = a(x + y)
Group 2: bx + by = b(x + y)
Dono mein (x + y) common hai:
= a(x + y) + b(x + y)
= **(x + y)(a + b)**
Jaanch: (x + y)(a + b) = ax + bx + ay + by ✅

**Example 2:** x³ + x² + x + 1
Group 1: x³ + x² = x²(x + 1)
Group 2: x + 1 = 1(x + 1)
= x²(x + 1) + 1(x + 1)
= **(x + 1)(x² + 1)**

**Example 3 (sign wala):** 6xy - 4y + 6 - 9x
Pehle terms ko is tarah rakho ki grouping mein aasani ho: 6xy - 4y - 9x + 6.
Group 1: 6xy - 4y = 2y(3x - 2)
Group 2: -9x + 6 = -3(3x - 2) (minus 3 nikala, to andar ke signs badal gaye)
= 2y(3x - 2) - 3(3x - 2)
= **(3x - 2)(2y - 3)**
Jaanch: (3x - 2)(2y - 3) = 6xy - 9x - 4y + 6 ✅

**Tip:** Agar pehli grouping mein dono groups ke bracket same na aayein, to terms ka kram badal kar doosri grouping try karo.

### Method 3: Formulae (identities) ka upyog

**Kab use karein:** Jab expression kisi formula jaisa dikhe.

**Pehchaan table:**

| Expression ki shakal | Kaunsa formula |
|---|---|
| 2 terms, dono perfect square, beech mein minus | a² - b² |
| 3 terms, pehla aur teesra perfect square, beech wala 2ab | (a ± b)² |
| 2 terms, dono perfect cube | a³ ± b³ |
| 4 terms, pehla aur aakhri perfect cube | (a ± b)³ |

**Example 1:** x² - 49
x² aur 49 = 7², dono squares, beech mein minus.
= x² - 7² = **(x + 7)(x - 7)**

**Example 2:** 9a² - 16b²
= (3a)² - (4b)² = **(3a + 4b)(3a - 4b)**

**Example 3:** 4x² + 12x + 9
- 4x² = (2x)², 9 = 3²
- Beech ka term: 2 × 2x × 3 = 12x ✅ (sahi hai)
= **(2x + 3)²**

**Example 4:** 25y² - 30y + 9
- (5y)² aur 3². Beech: 2 × 5y × 3 = 30y, aur minus hai.
= **(5y - 3)²**

**Example 5:** 2x² - 18 (pehle common factor!)
= 2(x² - 9)
= 2(x² - 3²)
= **2(x + 3)(x - 3)**

**Example 6:** x⁴ - 81 (poora todna hai)
x⁴ = (x²)², 81 = 9².
= (x²)² - 9²
= (x² + 9)(x² - 9)
Ab x² - 9 ko aur tod sakte hain: (x + 3)(x - 3).
= **(x² + 9)(x + 3)(x - 3)**
(x² + 9 ko aur nahi tod sakte.)

**Example 7:** x³ + 27
= x³ + 3³ = (x + 3)(x² - 3x + 3²)
= **(x + 3)(x² - 3x + 9)**

**Example 8:** 8a³ - 125
= (2a)³ - 5³ = (2a - 5)((2a)² + (2a)(5) + 5²)
= **(2a - 5)(4a² + 10a + 25)**

**Example 9 (bracket wala):** (x + y)² - z²
Ye a² - b² hai, jahan a = (x + y) aur b = z.
= **(x + y + z)(x + y - z)**

**Example 10 (4 terms jo asal mein formula hai):** a² - 2ab + b² - c²
Pehle 3 terms (a - b)² banate hain.
= (a - b)² - c²
= **(a - b + c)(a - b - c)**

### Method 4: Middle term splitting (x² + bx + c ke liye)

**Kab use karein:** Jab teen terms ka quadratic ho (ax² + bx + c).

#### Case 1: x² ka coefficient 1 ho (x² + bx + c)

**Tarika:**
1. Aisi **do numbers** dhundho jinka **product = c** aur **sum = b** ho.
2. Un do numbers ko x ke saath likho.

**Example 1:** x² + 5x + 6
Product 6, sum 5. Numbers: **2 aur 3** (2 × 3 = 6, 2 + 3 = 5).
= **(x + 2)(x + 3)**

(Ye wahi hai jisse humne Ramesh ka plot toda tha!)

**Example 2:** x² - 7x + 12
Product +12, sum -7. Numbers: **-3 aur -4** (-3 × -4 = 12, -3 + -4 = -7).
= **(x - 3)(x - 4)**

**Example 3:** x² + 2x - 15
Product -15, sum +2. Numbers: **5 aur -3** (5 × -3 = -15, 5 + -3 = 2).
= **(x + 5)(x - 3)**

**Example 4:** x² - x - 6
Product -6, sum -1. Numbers: **-3 aur 2** (-3 × 2 = -6, -3 + 2 = -1).
= **(x - 3)(x + 2)**

**Sign ka rule (bahut kaam ka):**

| c (aakhri term) | b (beech wala) | Numbers ke signs |
|---|---|---|
| **Positive** | Positive | Dono **positive** |
| **Positive** | Negative | Dono **negative** |
| **Negative** | Koi bhi | Ek positive, ek negative (**bada number** wahi sign leta hai jo b ka hai) |

#### Case 2: x² ka coefficient 1 nahi ho (ax² + bx + c)

**Tarika:**
1. a × c nikalo.
2. Aisi do numbers dhundho jinka **product = a × c** aur **sum = b**.
3. Beech wale term bx ko in do numbers ke hisaab se **do hisson mein baanto.**
4. **Grouping** karo (Method 2).

**Example 5:** 2x² + 7x + 3
a × c = 2 × 3 = 6. Sum 7. Numbers: **1 aur 6**.
Beech wala term 7x ko x + 6x likho:
= 2x² + x + 6x + 3
= x(2x + 1) + 3(2x + 1)
= **(2x + 1)(x + 3)**
Jaanch: (2x + 1)(x + 3) = 2x² + 6x + x + 3 = 2x² + 7x + 3 ✅

**Example 6:** 6x² - x - 2
a × c = 6 × (-2) = -12. Sum -1. Numbers: **-4 aur 3** (-4 × 3 = -12, -4 + 3 = -1).
= 6x² - 4x + 3x - 2
= 2x(3x - 2) + 1(3x - 2)
= **(3x - 2)(2x + 1)**
Jaanch: (3x - 2)(2x + 1) = 6x² + 3x - 4x - 2 = 6x² - x - 2 ✅

### Method 5: Factor Theorem (cubic aur bade polynomials ke liye)

**Kab use karein:** Jab polynomial cubic (ya usse bada) ho aur upar ke tarike kaam na karein.

Ye method pichle chapter ke **Topic 7 (Factor Theorem)** par tika hai. Wahan seekha tha: **agar p(a) = 0 ho, to (x - a) ek factor hai.**

**Tarika:**
1. Constant term ke factors (±) try karo, jab tak p(a) = 0 na mile.
2. Mil gaya to (x - a) ek factor hai.
3. p(x) ko (x - a) se divide karo.
4. Jo quotient mile, use factorise karo (aksar quadratic hota hai).

**Example:** x³ - 7x + 6 ko factorise karo.

Constant term 6, to ±1, ±2, ±3, ±6 try karo.
p(1) = 1 - 7 + 6 = **0** ✅ To (x - 1) factor hai.

Divide karo (x³ + 0x² - 7x + 6) ÷ (x - 1):
- x³ ÷ x = **x²**. x²(x - 1) = x³ - x². Subtract: x² - 7x (0x² - (-x²) = x², aur -7x neeche).
- x² ÷ x = **x**. x(x - 1) = x² - x. Subtract: -6x + 6.
- -6x ÷ x = **-6**. -6(x - 1) = -6x + 6. Subtract: 0.

Quotient = x² + x - 6 = (x + 3)(x - 2) (product -6, sum 1: 3 aur -2).

**x³ - 7x + 6 = (x - 1)(x - 2)(x + 3)**

Jaanch: zeros 1, 2, -3 hain. p(2) = 8 - 14 + 6 = 0 ✅, p(-3) = -27 + 21 + 6 = 0 ✅

---

## Part D: Kaunsa tarika kab? (Decision guide)

Koi bhi expression dekho, ye kadam order mein follow karo:

**Kadam 1: Sabse pehle common factor dekho.**
Ye hamesha pehle. Aksar expression chhota ho jata hai aur baaki kaam aasan.

**Kadam 2: Terms gino aur uske hisaab se tarika chuno.**

| Terms | Pehle kya try karo |
|---|---|
| **2 terms** | a² - b² ya a³ ± b³ |
| **3 terms** | Perfect square (a ± b)² ya middle term splitting |
| **4 terms** | Grouping, ya (a ± b)³, ya 3 terms ka perfect square + ek term ka square |
| **Cubic jo kuch na bane** | Factor theorem |

**Kadam 3: Dekho ki kya koi factor aur toda ja sakta hai.**
Jab tak ho sake todte raho. (Completely factorise karo.)

**Kadam 4: Factors ko multiply karke jaanch karo.**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Pehle common factor nahi nikalna**
2x² - 18 ko seedhe (2x + ...) sochne ki bajaye pehle 2 nikalo: 2(x² - 9). Isse kaam aasan ho jata hai.

**Galti 2: Beech mein ruk jana (completely factorise nahi karna)**
x⁴ - 81 = (x² + 9)(x² - 9) par ruk jana galat hai, kyunki x² - 9 ko aur tod sakte hain. Poora: (x² + 9)(x + 3)(x - 3).

**Galti 3: a² + b² ko (a + b)² samajhna**
(a + b)² = a² + 2ab + b². Beech ka 2ab bhoolna mat. Aur **a² + b² (plus ke saath) ko real numbers mein aur tod nahi sakte.** Isliye x² + 9 jaisa expression aage nahi tootta.

**Galti 4: a³ ± b³ ke doosre bracket mein sign galat**
a³ + b³ = (a + b)(a² **−** ab + b²). Beech wala sign ulta hai. Isko "SOAP" (Same, Opposite, Always Positive) se yaad rakho.

**Galti 5: Common factor nikalne par 0 likh dena**
x² + x = x(x + 1). Doosre term x mein se x nikalne par **1** bachta hai, 0 nahi.

**Galti 6: Minus common factor nikalte waqt signs na badalna**
-9x + 6 = -3(3x - 2). Dhyan do, 6 ko -3 se divide karne par -2 aata hai, isliye bracket ke andar -2 hai. Jaanch karo: -3(3x - 2) = -9x + 6 ✅

**Galti 7: Middle term splitting mein sum aur product galat lena**
x² + 2x - 15 mein numbers ka **product -15** aur **sum +2** hona chahiye. 5 aur 3 ka product 15 hai (galat), 5 aur -3 ka -15 hai (sahi).

**Galti 8: Jaanch na karna**
Har baar factors ko wapas multiply karke dekho. 10 second lagte hain aur galti pakad mein aa jati hai.

---

## Quick Recap

- **Factorisation** = expression ko factors ke **multiplication** ke roop mein likhna. Ye expansion ka ulta hai.
- Hamesha **jaanch** karo: factors multiply karke original expression milna chahiye.
- **Completely factorise** karo, yaani tab tak todo jab tak har factor irreducible na ho.
- **Mukhya formulae:**
  - a² - b² = (a + b)(a - b)
  - a² ± 2ab + b² = (a ± b)²
  - a³ + b³ = (a + b)(a² - ab + b²)
  - a³ - b³ = (a - b)(a² + ab + b²)
  - x² + (a + b)x + ab = (x + a)(x + b)
- **5 methods:** Common factor, Grouping, Formulae, Middle term splitting, Factor theorem.
- **Kadam:** Pehle common factor, phir terms ginkar tarika chuno, phir aur toda ja sakta hai ya nahi dekho, aur aakhir mein jaanch.
- Middle term splitting mein: **product = a × c** aur **sum = b**.
- a² + b² (plus ke saath) ko real numbers mein tod nahi sakte.

---

## Practice Questions

1. Factorise using the common factor method:
   (a) 8x² - 12x
   (b) 15a²b + 25ab²
   (c) 3x(a - b) + 5y(a - b)

2. Factorise by grouping:
   (a) x³ + 3x² + 2x + 6
   (b) xy - 3x + 4y - 12

3. Factorise using identities:
   (a) 49x² - 25
   (b) 9y² + 30y + 25
   (c) 16a² - 24ab + 9b²
   (d) 2x³ - 32x
   (e) 27p³ + 8

4. Factorise by splitting the middle term:
   (a) x² + 9x + 20
   (b) x² - 11x + 30
   (c) x² + x - 12
   (d) 3x² + 10x + 8

5. Use identities to evaluate:
   (a) 103 × 97
   (b) 52²
   (c) 98²

6. Using the Factor Theorem, factorise x³ + 2x² - 5x - 6.

7. Factorise completely: x⁴ - 16.

8. Factorise: a² - 2ab + b² - 9.

9. State whether each statement is true or false. Give a reason.
   (a) a² + b² = (a + b)²
   (b) x² - 1 = (x - 1)(x + 1)
   (c) 2x² - 8 is completely factorised as 2(x² - 4).
   (d) x² + 4 cannot be factorised into real linear factors.

### Answers

1. (a) HCF = 4x. **4x(2x - 3)**
   (b) HCF = 5ab. **5ab(3a + 5b)**
   (c) (a - b) common hai. **(a - b)(3x + 5y)**
2. (a) x²(x + 3) + 2(x + 3) = **(x + 3)(x² + 2)**
   (b) x(y - 3) + 4(y - 3) = **(y - 3)(x + 4)**
3. (a) (7x)² - 5² = **(7x + 5)(7x - 5)**
   (b) (3y)² + 2(3y)(5) + 5² = **(3y + 5)²**
   (c) (4a)² - 2(4a)(3b) + (3b)² = **(4a - 3b)²**
   (d) Pehle 2x nikalo: 2x(x² - 16) = **2x(x + 4)(x - 4)**
   (e) (3p)³ + 2³ = **(3p + 2)(9p² - 6p + 4)**
4. (a) Product 20, sum 9: 4 aur 5. **(x + 4)(x + 5)**
   (b) Product 30, sum -11: -5 aur -6. **(x - 5)(x - 6)**
   (c) Product -12, sum 1: 4 aur -3. **(x + 4)(x - 3)**
   (d) a × c = 24, sum 10: 4 aur 6. 3x² + 4x + 6x + 8 = x(3x + 4) + 2(3x + 4) = **(3x + 4)(x + 2)**
5. (a) (100 + 3)(100 - 3) = 100² - 3² = 10000 - 9 = **9991**
   (b) (50 + 2)² = 2500 + 200 + 4 = **2704**
   (c) (100 - 2)² = 10000 - 400 + 4 = **9604**
6. p(-1) = -1 + 2 + 5 - 6 = 0, to (x + 1) factor hai. Divide karne par quotient x² + x - 6 = (x + 3)(x - 2).
   **(x + 1)(x + 3)(x - 2)**
   Jaanch: p(2) = 8 + 8 - 10 - 6 = 0 ✅, p(-3) = -27 + 18 + 15 - 6 = 0 ✅
7. (x²)² - 4² = (x² + 4)(x² - 4) = **(x² + 4)(x + 2)(x - 2)**
8. (a - b)² - 3² = **(a - b + 3)(a - b - 3)**
9. (a) **False.** (a + b)² = a² + 2ab + b². Beech ka 2ab bhool gaye.
   (b) **True.** Ye difference of squares hai.
   (c) **False.** x² - 4 ko aur tod sakte hain. Poora: 2(x + 2)(x - 2).
   (d) **True.** x² + 4 ek sum of squares hai, jise real numbers mein aur nahi tod sakte.

---

Agar ek saath itne tarike dekhkar ghabra gaye ho, to bas ye yaad rakho: **pehle common factor, phir terms gino.** 2 terms ho to a² - b², 3 terms ho to perfect square ya middle term splitting, 4 terms ho to grouping. Baaki sab practice se aa jata hai.

---

**Agle topic mein (Topic 2: Factorisation by Taking Out the Common Factor):** Is topic mein paanch methods ki bas jhalak dekhi. Ab inhe ek ek karke gehrai se seekhenge, aur shuruaat Method 1 se karenge: **common factor**. Lambe terms ka HCF, negative common factor, bracket wale common factors aur sign flip (b - a = -(a - b)) wali trick, sab wahan aayega.
