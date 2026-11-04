# Chapter: Factorisation (Part 7)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [factorisation-part6.md](factorisation-part6.md) se aage chalti hai** (wahan Topic 6: Cube of a Binomial hai). Saare formulae ka pehla parichay Topic 1 [factorisation.md](factorisation.md) mein hai.
> **Topics covered in this file:**
> 7. Factorisation of Sum and Difference of Cubes

---

# Topic 7: Factorisation of Sum and Difference of Cubes

Topic 6 mein humne binomial ka cube khol ke dekha tha, aur ek khaas roop bhi likha tha:

**(a + b)³ = a³ + b³ + 3ab(a + b)**

Ab zara is line ko ulta padho. Isme **a³ + b³** chhupa baitha hai:

**a³ + b³ = (a + b)³ - 3ab(a + b)**

Dhyan do, right side ke dono hisson mein **(a + b)** common hai. Yaani a³ + b³ ko (a + b) ke saath tod sakte hain! Isi ek chhoti si baat se is poore topic ki shuruaat hoti hai.

Topic 1 mein humne iska final formula dekh liya tha:

- **a³ + b³ = (a + b)(a² - ab + b²)**
- **a³ - b³ = (a - b)(a² + ab + b²)**

Saath mein signs ki **SOAP** trick (Same, Opposite, Always Positive) aur x³ + 27, 8a³ - 125 jaise examples bhi kiye the. Unhe dobara nahi karenge.

Is topic mein hum in formulae ko **ek level aage** le jayenge:

- Ye formulae **aate kahan se hain** (taaki ratna na pade).
- **Perfect cube** kaise pehchanein, chahe wo number ho, power ho ya fraction.
- Mushkil cases: common factor, bracket, x⁶ - y⁶ jaise expressions, aur grouping ke saath cubes.

---

## Dadi ke paneer ki kahani

Dadi ne ghar par paneer banaya aur use ek **bade cube** ki shakal mein kaata. Uski har side **a cm** thi. To paneer ka kul volume tha **a³**.

Thodi der mein bachche aaye aur ek kone se ek **chhota cube** kaat kar kha gaye, jiski har side **b cm** thi. Wo hissa tha **b³**.

Ab bacha hua paneer: **a³ - b³**.

Dadi ne bache hue paneer ko seedhe **teen cuboid (dabbe jaise) tukdon** mein kaat diya:

| Tukda | Lambai × Chaudai × Unchai | Volume |
|---|---|---|
| Upar ki poori parat | a × a × (a - b) | a²(a - b) |
| Neeche ka ek tukda | a × b × (a - b) | ab(a - b) |
| Neeche ka doosra tukda | b × b × (a - b) | b²(a - b) |

Teeno ko jodo:
a²(a - b) + ab(a - b) + b²(a - b)

Teeno mein **(a - b)** common hai:
= **(a - b)(a² + ab + b²)**

Aur ye bacha hua paneer hi to hai, a³ - b³! Yaani:

**a³ - b³ = (a - b)(a² + ab + b²)**

Dadi ne bina kisi formula ke, sirf paneer kaat kar, formula prove kar diya. Ab samajh aaya ki doosre bracket mein **teen terms** kyun hote hain: kyunki paneer ke **teen tukde** bane the.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Perfect cube** | Aisa number ya term jo kisi cheez ka cube ho | 27 = 3³, 8x³ = (2x)³ |
| **Cube root** | Wo cheez jiska cube karne par original mile | 27 ka cube root 3, 8x³ ka 2x |
| **Sum of cubes** | Do cubes ka jod | a³ + b³ |
| **Difference of cubes** | Do cubes ka antar | a³ - b³ |
| **Quadratic factor** | Doosra bracket, jisme degree 2 hoti hai | a² - ab + b² |

---

## Part A: Formulae kahan se aaye? (Do tarike)

### Tarika 1: Seedhe multiply karke

**(a + b)(a² - ab + b²)** ko kholte hain:

- a × a² = a³
- a × (-ab) = -a²b
- a × b² = ab²
- b × a² = a²b
- b × (-ab) = -ab²
- b × b² = b³

Ab jodo: a³ - a²b + ab² + a²b - ab² + b³

Dekho, **-a²b aur +a²b katt gaye**, **+ab² aur -ab² bhi katt gaye**. Bacha:
**a³ + b³** ✅

Isi tarah **(a - b)(a² + ab + b²)** kholo:
a³ + a²b + ab² - a²b - ab² - b³ = **a³ - b³** ✅

Isse pata chalta hai ki doosre bracket ka beech wala sign **ulta kyun hota hai**: taaki beech ke saare terms aapas mein katt jayein.

### Tarika 2: Topic 6 ke cube formula se

Topic 6 mein humne dekha tha:
**(a + b)³ = a³ + b³ + 3ab(a + b)**

Isse a³ + b³ ko akela karo:
a³ + b³ = (a + b)³ - 3ab(a + b)

Dono terms mein **(a + b)** common hai:
= (a + b)[(a + b)² - 3ab]
= (a + b)[a² + 2ab + b² - 3ab]
= **(a + b)(a² - ab + b²)** ✅

Aur **(a - b)³ = a³ - b³ - 3ab(a - b)** se:
a³ - b³ = (a - b)³ + 3ab(a - b)
= (a - b)[(a - b)² + 3ab]
= (a - b)[a² - 2ab + b² + 3ab]
= **(a - b)(a² + ab + b²)** ✅

To exam mein formula bhool bhi jao, to Topic 6 ka cube formula yaad ho to ye 30 second mein wapas ban jata hai.

---

## Part B: Perfect cube pehchanna

Formula lagane ka sabse pehla kaam hai: **dono terms ko kisi cheez ke cube ki tarah likhna.** Agar ye pehchanna aa gaya, to aadha kaam ho gaya.

### Numbers (1 se 10 tak ke cubes yaad kar lo)

| Number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| **Cube** | 1 | 8 | 27 | 64 | 125 | 216 | 343 | 512 | 729 | 1000 |

Ye table ek baar dil se yaad kar lo. Is topic ke 80% sawaal isi par tike hain.

### Letters aur powers

Power ko **3 se divide** karo. Agar poora divide ho jaye, to wo perfect cube hai.

| Term | Cube ki tarah | Cube root |
|---|---|---|
| x³ | (x)³ | x |
| x⁶ | (x²)³ | x² |
| x⁹ | (x³)³ | x³ |
| 8x³ | (2x)³ | 2x |
| 125a⁶ | (5a²)³ | 5a² |
| 27x³y⁶ | (3xy²)³ | 3xy² |

Dhyan do: x⁶ ka cube root **x²** hai, x³ nahi. Kyunki (x²)³ = x⁶, jabki (x³)³ = x⁹.

### Fractions aur decimals

Upar aur neeche dono ka alag alag cube root lo.

| Term | Cube ki tarah |
|---|---|
| 1/27 | (1/3)³ |
| 8/125 | (2/5)³ |
| x³/8 | (x/2)³ |
| 0.001 | (0.1)³ |

---

## Part C: Seedhe formula wale examples

Ab hum Topic 1 se thode mushkil examples karenge.

**Example 1:** 64x³ + 125

64x³ = (4x)³ aur 125 = 5³. Yahan a = 4x, b = 5.
= (4x + 5)((4x)² - (4x)(5) + 5²)
= **(4x + 5)(16x² - 20x + 25)**

Jaanch: (4x + 5)(16x² - 20x + 25)
= 64x³ - 80x² + 100x + 80x² - 100x + 125
= 64x³ + 125 ✅

**Example 2:** 27a³ - 343b³

27a³ = (3a)³ aur 343b³ = (7b)³. Yahan a → 3a, b → 7b.
= (3a - 7b)((3a)² + (3a)(7b) + (7b)²)
= **(3a - 7b)(9a² + 21ab + 49b²)**

Jaanch: 27a³ + 63a²b + 147ab² - 63a²b - 147ab² - 343b³ = 27a³ - 343b³ ✅

**Example 3 (fraction wala):** x³/8 + 1/27

x³/8 = (x/2)³ aur 1/27 = (1/3)³.
= (x/2 + 1/3)((x/2)² - (x/2)(1/3) + (1/3)²)
= **(x/2 + 1/3)(x²/4 - x/6 + 1/9)**

**Example 4 (power wala):** 8 - y⁶

8 = 2³ aur y⁶ = (y²)³.
= (2 - y²)(2² + 2·y² + (y²)²)
= **(2 - y²)(4 + 2y² + y⁴)**

Jaanch: 8 + 4y² + 2y⁴ - 4y² - 2y⁴ - y⁶ = 8 - y⁶ ✅

### Ek tip: square karte waqt poora term square karo

(4x)² = **16x²**, sirf 4x² nahi. Number aur letter dono ka square hota hai. Yahi galti sabse zyada hoti hai.

---

## Part D: Pehle common factor nikalo

Kabhi kabhi expression dekh kar lagta hai ki ye cube nahi hai. Par common factor nikalte hi andar se cube nikal aata hai.

**Example 5:** 2x³ + 54

54 perfect cube nahi hai. Par 2 dono mein common hai:
= 2(x³ + 27)
= 2(x³ + 3³)
= **2(x + 3)(x² - 3x + 9)**

**Example 6:** 3a³ - 81b³

81 perfect cube nahi hai. 3 common nikalo:
= 3(a³ - 27b³)
= 3(a³ - (3b)³)
= **3(a - 3b)(a² + 3ab + 9b²)**

Jaanch: (a - 3b)(a² + 3ab + 9b²) = a³ + 3a²b + 9ab² - 3a²b - 9ab² - 27b³ = a³ - 27b³ ✅. Phir 3 se multiply: 3a³ - 81b³ ✅

**Example 7:** 5x⁴ - 40x

Common factor 5x:
= 5x(x³ - 8)
= **5x(x - 2)(x² + 2x + 4)**

---

## Part E: Bracket wale cubes

Kabhi a ya b khud ek bracket hota hai. Ghabrao mat, bracket ko ek dabba samjho, jaise ek letter.

**Example 8:** (x + 1)³ + 8

Yahan a = (x + 1) aur b = 2 (kyunki 8 = 2³).
= [(x + 1) + 2][(x + 1)² - 2(x + 1) + 2²]

Ab dono brackets ko simplify karo:
- Pehla: x + 1 + 2 = **x + 3**
- Doosra: x² + 2x + 1 - 2x - 2 + 4 = **x² + 3**

= **(x + 3)(x² + 3)**

Jaanch: (x + 3)(x² + 3) = x³ + 3x² + 3x + 9.
Aur (x + 1)³ + 8 = x³ + 3x² + 3x + 1 + 8 = x³ + 3x² + 3x + 9 ✅

**Example 9:** (a + b)³ - (a - b)³

Yahan A = (a + b) aur B = (a - b). Formula: A³ - B³ = (A - B)(A² + AB + B²).

- A - B = (a + b) - (a - b) = **2b**
- A² = a² + 2ab + b²
- AB = (a + b)(a - b) = a² - b²
- B² = a² - 2ab + b²
- A² + AB + B² = a² + 2ab + b² + a² - b² + a² - 2ab + b² = **3a² + b²**

= **2b(3a² + b²)**

Jaanch: (a + b)³ - (a - b)³ = (a³ + 3a²b + 3ab² + b³) - (a³ - 3a²b + 3ab² - b³) = 6a²b + 2b³ = 2b(3a² + b²) ✅

---

## Part F: Cubes aur difference of squares ek saath

Kuch expressions mein **dono formula** lag sakte hain. Inme sabse khaas hai **x⁶ - y⁶**.

### Example 10: x⁶ - y⁶ (do tarike)

x⁶ ek square bhi hai, (x³)², aur ek cube bhi hai, (x²)³. To do raste hain.

**Raasta 1: Pehle squares ka formula (a² - b², jo Topic 4 mein seekha tha)**

x⁶ - y⁶ = (x³)² - (y³)²
= (x³ + y³)(x³ - y³)
= **(x + y)(x² - xy + y²)(x - y)(x² + xy + y²)**

Chaar factors mil gaye, aur har factor ab aur nahi toot sakta. Kaam khatam.

**Raasta 2: Pehle cubes ka formula (a³ - b³)**

x⁶ - y⁶ = (x²)³ - (y²)³
= (x² - y²)(x⁴ + x²y² + y⁴)
= (x + y)(x - y)(x⁴ + x²y² + y⁴)

Yahan ek mushkil aati hai: **x⁴ + x²y² + y⁴** dekhne mein lagta hai ki ye aur nahi tootega. Par ye tootta hai, ek chhupi hui trick se:

x⁴ + x²y² + y⁴ = (x⁴ + 2x²y² + y⁴) - x²y²
= (x² + y²)² - (xy)²
= (x² + y² + xy)(x² + y² - xy)

To aakhir mein wahi answer aata hai jo Raasta 1 se aaya tha.

**Seekh:** Jab expression **square aur cube dono** ho (jaise power 6), to **pehle squares ka formula (a² - b²) lagao.** Isse seedhe poora factorisation milta hai, chhupi trick ki zaroorat nahi padti.

### Example 11: a⁶ - 64

64 = 8² bhi hai aur 4³ bhi. Upar wali seekh ke hisaab se pehle squares lagao:

a⁶ - 64 = (a³)² - 8²
= (a³ + 8)(a³ - 8)
= (a³ + 2³)(a³ - 2³)
= **(a + 2)(a² - 2a + 4)(a - 2)(a² + 2a + 4)**

### Example 12 (thoda aage): a⁹ - b⁹

a⁹ = (a³)³, b⁹ = (b³)³.
= (a³ - b³)(a⁶ + a³b³ + b⁶)
= **(a - b)(a² + ab + b²)(a⁶ + a³b³ + b⁶)**

(Aakhri factor a⁶ + a³b³ + b⁶ ko is level par aage nahi todte.)

---

## Part G: Grouping ke saath cubes

Topic 3 mein humne 4 terms wale expressions ko do-do ke groups mein baant kar factorise kiya tha. Wahi tarika yahan bhi chalega, bas ek group mein cube ka formula lagega. Do terms cubes bana lete hain, aur baaki do terms se ek common factor nikalta hai.

**Example 13:** a³ - b³ + a - b

Pehle do terms ka cube formula lagao, baaki do ko waise hi rakho:
= (a - b)(a² + ab + b²) + (a - b)

Ab dono hisson mein **(a - b)** common hai:
= (a - b)(a² + ab + b²) + (a - b) × 1
= **(a - b)(a² + ab + b² + 1)**

**Example 14:** a³ + b³ + a + b

= (a + b)(a² - ab + b²) + (a + b)
= **(a + b)(a² - ab + b² + 1)**

**Example 15:** a³ - 8 + 3a² - 6a

Pehle do terms: a³ - 8 = (a - 2)(a² + 2a + 4)
Baaki do: 3a² - 6a = 3a(a - 2)

= (a - 2)(a² + 2a + 4) + 3a(a - 2)
= (a - 2)(a² + 2a + 4 + 3a)
= (a - 2)(a² + 5a + 4)

Aur a² + 5a + 4 ko middle term splitting se todo (Topic 5 wala tarika; product 4, sum 5: 1 aur 4):
= **(a - 2)(a + 1)(a + 4)**

Jaanch: (a + 1)(a + 4) = a² + 5a + 4. Phir (a - 2)(a² + 5a + 4) = a³ + 5a² + 4a - 2a² - 10a - 8 = a³ + 3a² - 6a - 8 ✅

---

## Part H: x³ + 1/x³ wale sawaal

Ye type bahut kaam ka hai. Bas a = x aur b = 1/x lo.

Ek mazedaar baat: yahan **ab = x × (1/x) = 1** ho jata hai. Isse beech wala term bahut simple ban jata hai.

**Example 16:** x³ + 1/x³

= (x + 1/x)(x² - x · (1/x) + 1/x²)
= **(x + 1/x)(x² - 1 + 1/x²)**

Jaanch: (x + 1/x)(x² - 1 + 1/x²) = x³ - x + 1/x + x - 1/x + 1/x³ = x³ + 1/x³ ✅

**Example 17:** x³ - 1/x³

= **(x - 1/x)(x² + 1 + 1/x²)**

---

## Part I: Numbers par upyog

Ye formulae bade calculations ko chhota kar dete hain.

**Example 18:** 1001 ko factors mein todo.

1001 = 1000 + 1 = 10³ + 1³
= (10 + 1)(10² - 10 + 1)
= 11 × 91
Aur 91 = 7 × 13, to **1001 = 7 × 11 × 13**.

**Example 19:** Value nikalo: (38³ + 12³) ÷ (38² - 38 × 12 + 12²)

Dekho, neeche wala hissa bilkul **a² - ab + b²** hai, jahan a = 38, b = 12.
Aur a³ + b³ = (a + b)(a² - ab + b²).

To (a³ + b³) ÷ (a² - ab + b²) = a + b = 38 + 12 = **50**

Bina ek bhi bada cube nikale, answer mil gaya!

---

## Part J: Doosra bracket (a² ± ab + b²) aage kyun nahi tootta?

Students aksar a² - ab + b² ko aur todne ki koshish karte hain. Ye usually **nahi tootta**. Kyun?

**Ek number wala example:** x³ + 27 = (x + 3)(x² - 3x + 9). Kya x² - 3x + 9 toot sakta hai?

Middle term splitting ke liye aisi do numbers chahiye jinka **product 9** aur **sum -3** ho:
- -1 aur -9: sum -10 (nahi)
- -3 aur -3: sum -6 (nahi)

Koi jodi kaam nahi karti. Isliye **x² - 3x + 9 aage nahi tootta.**

**Asli wajah:** a² - ab + b² ko aise likh sakte hain:
a² - ab + b² = (a - b/2)² + 3b²/4

Ye **do squares ka jod** hai (plus ke saath). Topic 1 mein dekha tha ki a² + b² jaisa expression real numbers mein nahi tootta. Isliye ye bhi nahi tootta.

**Par dhyan rakho:** "usually" isliye kaha, kyunki Example 10 (Raasta 2) mein x⁴ + x²y² + y⁴ toot gaya tha. Wo isliye hua kyunki wahan a = x² aur b = y² the, aur ek chhupa hua square tha. Agar a aur b simple letters ya numbers hon (jaise x aur 3), to doosra bracket nahi tootta.

### Polynomials ke Factor Theorem se rishta

Polynomials chapter ke Topic 7 mein humne seekha tha: agar p(a) = 0 ho to (x - a) factor hai.

p(x) = x³ - 27 lo. p(3) = 27 - 27 = 0. To **(x - 3) factor hai**. Aur formula bhi yahi kehta hai: x³ - 27 = (x - 3)(x² + 3x + 9). Dono tarike ek hi answer dete hain.

---

## Aam galtiyan (bachke rehna)

**Galti 1: a³ + b³ ko (a + b)³ samajhna**
(a + b)³ = a³ + 3a²b + 3ab² + b³ hai (Topic 6). a³ + b³ isse alag hai. Check karo: a = 1, b = 1 par a³ + b³ = 2, par (a + b)³ = 8.

**Galti 2: Doosre bracket mein 2ab likh dena**
a³ + b³ = (a + b)(a² - **ab** + b²). Beech mein **ab** hai, **2ab** nahi. Log ise (a - b)² = a² - 2ab + b² ke saath mix kar dete hain.

**Galti 3: Doosre bracket ka sign galat**
a³ + b³ mein beech wala sign **minus**, aur a³ - b³ mein **plus**. SOAP yaad rakho.

**Galti 4: Cube root galat lena**
- 8x³ ka cube root **2x** hai, 8x ya 4x nahi.
- x⁶ ka cube root **x²** hai, x³ nahi.
- 27a³ ka cube root **3a** hai, 9a nahi.

**Galti 5: Square karte waqt number bhool jana**
(4x)² = **16x²**, 4x² nahi. (3a)² = **9a²**, 3a² nahi.

**Galti 6: Common factor pehle nahi nikalna**
2x³ + 54 mein 54 cube nahi hai, to formula seedhe nahi lagega. Pehle 2 nikalo: 2(x³ + 27).

**Galti 7: Doosre bracket ko aur todne ki koshish**
x² - 3x + 9 jaisa factor aage nahi tootta. Isme waqt barbaad mat karo.

**Galti 8: x⁶ - y⁶ mein pehle cube lagana aur beech mein ruk jana**
Pehle cube formula lagaya to x⁴ + x²y² + y⁴ par atak jaoge. Pehle squares (a² - b²) lagao, poora answer seedhe milega.

**Galti 9: Bracket wale case mein simplify na karna**
(x + 1)³ + 8 mein (x + 1 + 2) ko (x + 3) aur doosre bracket ko x² + 3 tak simplify karo. Adhura chhodna galat hai.

---

## Quick Recap

- **a³ + b³ = (a + b)(a² - ab + b²)** aur **a³ - b³ = (a - b)(a² + ab + b²)**.
- Ye formulae seedhe multiply karke, ya Topic 6 ke **(a ± b)³ = a³ ± b³ ± 3ab(a ± b)** se nikal sakte hain.
- Paneer ki kahani: a³ - b³ = teen tukde, isliye doosre bracket mein **teen terms**.
- **1 se 10 tak ke cubes** yaad rakho: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.
- Power ko 3 se divide karke cube root nikalo (x⁶ → x²). Fraction mein upar aur neeche alag cube root lo.
- **Pehle common factor nikalo** (2x³ + 54 = 2(x³ + 27)).
- Bracket ko ek letter ki tarah treat karo, phir simplify karo.
- **Power 6 ho to pehle a² - b² lagao**, phir cubes.
- Grouping mein: do terms se cube formula, baaki do se common factor, phir common bracket nikalo.
- **x³ ± 1/x³** mein ab = 1 ho jata hai.
- Doosra bracket **a² ± ab + b²** aam taur par aage nahi tootta.

---

## Practice Questions

1. Write each as a perfect cube:
   (a) 343
   (b) 8x³
   (c) 125a⁶
   (d) x³/64
   (e) 27/1000

2. Factorise:
   (a) 125x³ + 1
   (b) 64a³ - 27b³
   (c) 1 - 216y³
   (d) a³/27 + 8

3. Take out the common factor first, then factorise:
   (a) 16x³ + 54
   (b) 24a³ - 3
   (c) x⁴y - xy⁴

4. Factorise:
   (a) (x - 2)³ + 27
   (b) (2a + b)³ - (a - b)³

5. Factorise completely:
   (a) x⁶ - 1
   (b) 64a⁶ - b⁶

6. Factorise:
   (a) x³ + y³ - x - y
   (b) a³ - 8 + 3a² - 6a

7. Factorise:
   (a) x³ - 1/x³
   (b) 8x³ + 1/x³

8. Using a suitable identity, find the value of:
   (a) (38³ + 12³) ÷ (38² - 38 × 12 + 12²)
   (b) Show that 1001 = 11 × 91.

9. State whether each statement is true or false. Give a reason.
   (a) a³ + b³ = (a + b)³
   (b) a² - ab + b² can be written as (a - b)².
   (c) (x - 3) is a factor of x³ - 27.
   (d) To factorise x⁶ - y⁶ completely, it is easier to use the difference of squares first.

### Answers

1. (a) **7³**  (b) **(2x)³**  (c) **(5a²)³**  (d) **(x/4)³**  (e) **(3/10)³**

2. (a) (5x)³ + 1³ = **(5x + 1)(25x² - 5x + 1)**
   (b) (4a)³ - (3b)³ = **(4a - 3b)(16a² + 12ab + 9b²)**
   Jaanch: 64a³ + 48a²b + 36ab² - 48a²b - 36ab² - 27b³ = 64a³ - 27b³ ✅
   (c) 1³ - (6y)³ = **(1 - 6y)(1 + 6y + 36y²)**
   (d) (a/3)³ + 2³ = **(a/3 + 2)(a²/9 - 2a/3 + 4)**

3. (a) 2(8x³ + 27) = 2((2x)³ + 3³) = **2(2x + 3)(4x² - 6x + 9)**
   (b) 3(8a³ - 1) = 3((2a)³ - 1³) = **3(2a - 1)(4a² + 2a + 1)**
   (c) xy(x³ - y³) = **xy(x - y)(x² + xy + y²)**

4. (a) A = x - 2, B = 3.
   (A + B) = x + 1
   A² - AB + B² = (x² - 4x + 4) - 3(x - 2) + 9 = x² - 4x + 4 - 3x + 6 + 9 = x² - 7x + 19
   **(x + 1)(x² - 7x + 19)**
   Jaanch: (x + 1)(x² - 7x + 19) = x³ - 6x² + 12x + 19, aur (x - 2)³ + 27 = x³ - 6x² + 12x - 8 + 27 = x³ - 6x² + 12x + 19 ✅
   (b) A = 2a + b, B = a - b.
   A - B = a + 2b
   A² = 4a² + 4ab + b², AB = 2a² - ab - b², B² = a² - 2ab + b²
   A² + AB + B² = 7a² + ab + b²
   **(a + 2b)(7a² + ab + b²)**
   Jaanch: dono taraf 7a³ + 15a²b + 3ab² + 2b³ aata hai ✅

5. (a) (x³)² - 1² = (x³ + 1)(x³ - 1) = **(x + 1)(x² - x + 1)(x - 1)(x² + x + 1)**
   (b) (8a³)² - (b³)² = (8a³ + b³)(8a³ - b³) = **(2a + b)(4a² - 2ab + b²)(2a - b)(4a² + 2ab + b²)**

6. (a) (x + y)(x² - xy + y²) - (x + y) = **(x + y)(x² - xy + y² - 1)**
   (b) (a - 2)(a² + 2a + 4) + 3a(a - 2) = (a - 2)(a² + 5a + 4) = **(a - 2)(a + 1)(a + 4)**

7. (a) **(x - 1/x)(x² + 1 + 1/x²)**
   (b) (2x)³ + (1/x)³. Yahan a = 2x, b = 1/x, to ab = 2x × 1/x = 2.
   **(2x + 1/x)(4x² - 2 + 1/x²)**
   Jaanch: (2x + 1/x)(4x² - 2 + 1/x²) = 8x³ - 4x + 2/x + 4x - 2/x + 1/x³ = 8x³ + 1/x³ ✅

8. (a) Neeche wala hissa a² - ab + b² hai (a = 38, b = 12). To answer = a + b = **50**.
   (b) 1001 = 10³ + 1³ = (10 + 1)(100 - 10 + 1) = **11 × 91** ✅

9. (a) **False.** (a + b)³ = a³ + 3a²b + 3ab² + b³. Beech ke terms gayab nahi hote. (a = b = 1 par 2 ≠ 8.)
   (b) **False.** (a - b)² = a² - 2ab + b². Beech mein 2ab hai, ab nahi.
   (c) **True.** x³ - 27 = (x - 3)(x² + 3x + 9). Factor theorem se bhi: p(3) = 27 - 27 = 0.
   (d) **True.** Pehle a² - b² lagane se (x³ + y³)(x³ - y³) milta hai, jo seedhe poore factors mein toot jata hai. Pehle cube lagane par x⁴ + x²y² + y⁴ par atak jaate hain.

---

Agar ye topic bhaari lag raha ho, to bas Dadi ka paneer yaad rakho: **bada cube minus chhota cube = teen tukde**, isliye (a - b) ke saath teen terms wala bracket. Aur SOAP se signs. Baaki sab isi ka khel hai.

**Aage kya:** Abhi tak humne do cubes (a³ + b³) ko toda. Agle topic mein ek teesra cube bhi aa jayega: **x³ + y³ + z³ - 3xyz**. Dekhenge ki ye bhi ek sundar factor mein kaise tootta hai, aur ismein bhi a³ + b³ wala yahi formula kaam aayega.
