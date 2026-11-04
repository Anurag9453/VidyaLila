# Chapter: Factorisation (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [factorisation-part3.md](factorisation-part3.md) (Topic 3: Grouping) se aage chalti hai.** Topic 1 (formulae aur methods ka overview) [factorisation.md](factorisation.md) mein hai.
> **Topics covered in this file:**
> 4. Factorisation of Difference of Two Squares

---

# Topic 4: Difference of Two Squares

Ab tak ka safar ek baar yaad kar lo. **Topic 2** mein seekha tha ki sabse pehle **common factor** bahar nikalte hain. **Topic 3** mein seekha tha ki jab sab terms mein ek common factor na ho, to terms ko **jodon (groups) mein baanto**, har group se common factor nikalo, aur agar same bracket na bane to terms ka **kram badal ke** dobara try karo. Ye dono tarike is topic mein bhi baar baar kaam aayenge.

Topic 1 mein humne formula **a² - b² = (a + b)(a - b)** dekha tha, aur kuch seedhe examples bhi kiye the, jaise x² - 49, 9a² - 16b², 2x² - 18, x⁴ - 81, (x + y)² - z², aur 101 × 99 jaisi mental maths. Is topic mein hum isi formula ko **gehrai se** samjhenge: ye kyun sahi hai, perfect squares ko kaise pehchanein (fraction aur decimal mein bhi), aur mushkil dikhne wale sawaalon mein ise kaise lagayein.

---

## Carpenter ki kahani

Raju ek carpenter hai. Uske paas ek **square plywood** ka tukda hai jiski har side **10 cm** hai.

Ek customer ko kone se ek **chhota square** chahiye tha, jiski side **4 cm** thi. Raju ne wo kaat ke de diya.

Ab Raju ke paas jo bacha wo L shape ka tukda hai. Uska area:
**10² - 4² = 100 - 16 = 84 cm²**

Raju ko ek **rectangle** chahiye tha, L shape kisi kaam ka nahi. To usne L ko do tukdon mein kaata aur ek tukda utha kar doosre ke bagal mein jod diya. Ab ek seedha rectangle ban gaya, jiski:
- lambai = 10 + 4 = **14 cm**
- chaudai = 10 - 4 = **6 cm**

Area = 14 × 6 = **84 cm²**. Bilkul wahi!

To:
**10² - 4² = (10 + 4)(10 - 4)**

Raju ne bina jaane **difference of two squares** ka formula sabit kar diya. Yahi baat hum ab letters ke saath dekhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Perfect square** | Wo cheez jo kisi cheez ka square ho | 49 = 7², x⁴ = (x²)², 4/9 = (2/3)² |
| **Difference** | Ghatana (minus) | a² - b² mein a² aur b² ka difference |
| **Difference of two squares** | Do perfect squares ke beech minus | x² - 25, 4a² - 9b² |
| **Sum of two squares** | Do perfect squares ke beech plus | x² + 25 (ye nahi tootta, aage dekhenge) |
| **Completely factorise** | Tab tak todo jab tak koi factor aur na toot sake | x⁴ - 1 = (x² + 1)(x + 1)(x - 1) |

---

## Part A: Formula kyun sahi hai

### Picture se (geometric proof)

Raju wali kahani ko letters mein dekhte hain.

1. Ek bada square lo jiski side **a** hai. Area = **a²**.
2. Kone se ek chhota square kaato jiski side **b** hai. Area = **b²**.
3. Bacha hua L shape ka area = **a² - b²**.
4. L ko do rectangles mein kaato:
   - Ek rectangle: lambai a, chaudai (a - b)
   - Doosra rectangle: lambai b, chaudai (a - b)
5. Doosre ko utha kar pehle ke bagal mein rakho. Dono ki chaudai (a - b) same hai, to ek bada rectangle banta hai:
   - lambai = a + b
   - chaudai = a - b
6. Area = **(a + b)(a - b)**

Area kaatne ya jodne se badalta nahi, to:
**a² - b² = (a + b)(a - b)** ✅

### Multiply karke (algebraic proof)

(a + b)(a - b)
= a × a - a × b + b × a - b × b
= a² - ab + ab - b²
= **a² - b²** ✅

Beech ke dono terms (-ab aur +ab) **katt jate hain**. Isiliye answer mein sirf do terms bachte hain.

---

## Part B: Perfect squares ko pehchanna

Formula lagane ke liye sabse pehle ye pehchanna zaroori hai ki dono terms perfect square hain ya nahi. Kuch pehchaan:

### Numbers

1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225...

Ye list ek baar yaad kar lo, bahut kaam aayegi.

### Letters ki powers

**Even power** (2, 4, 6, 8...) wale letters perfect square hote hain.

| Term | Square kiska hai |
|---|---|
| x² | x |
| x⁴ | x² |
| x⁶ | x³ |
| a²b⁴ | ab² |
| 25x⁴ | 5x² |
| 36y⁶ | 6y³ |

Tarika: **number ka square root lo, aur letter ki power ko 2 se divide karo.**

### Fractions

Numerator aur denominator dono perfect square hon to fraction bhi perfect square hai.
- 4/9 = (2/3)²
- x²/4 = (x/2)²
- 1/16 = (1/4)²

### Decimals

- 0.49 = (0.7)²
- 0.16 = (0.4)²
- 0.01 = (0.1)²
- 0.25 = (0.5)²

Trick: decimal hata ke number ka square root lo, phir decimal places ko **aadha** karo. Jaise 0.49 mein do decimal places hain, 49 = 7², to answer mein ek decimal place: 0.7.

### Examples

**Example 1:** x²/4 - 1/9
= (x/2)² - (1/3)²
= **(x/2 + 1/3)(x/2 - 1/3)**

Jaanch: (x/2)² - (1/3)² = x²/4 - 1/9 ✅

**Example 2:** 0.49a² - 0.16
= (0.7a)² - (0.4)²
= **(0.7a + 0.4)(0.7a - 0.4)**

**Example 3:** 25x⁴ - 36y⁶
= (5x²)² - (6y³)²
= **(5x² + 6y³)(5x² - 6y³)**

Jaanch: (5x²)² = 25x⁴ aur (6y³)² = 36y⁶ ✅

---

## Part C: Pehle common factor, phir formula

Topic 1 aur Topic 2 mein dekha tha ki **common factor hamesha pehle** nikalte hain. Aksar terms perfect square nahi dikhte, par common factor nikalte hi ban jate hain.

**Example 1:** 3x² - 75
3x² aur 75 perfect square nahi hain. Par dono mein 3 common hai:
= 3(x² - 25)
= 3(x² - 5²)
= **3(x + 5)(x - 5)**

**Example 2:** 50a³ - 2a
Common factor 2a:
= 2a(25a² - 1)
= 2a((5a)² - 1²)
= **2a(5a + 1)(5a - 1)**

Jaanch: 2a(25a² - 1) = 50a³ - 2a ✅

**Example 3:** 12x²y - 27y³
Common factor 3y:
= 3y(4x² - 9y²)
= 3y((2x)² - (3y)²)
= **3y(2x + 3y)(2x - 3y)**

---

## Part D: Baar baar formula lagana

Kabhi kabhi formula lagane ke baad ek factor **phir se** difference of squares ban jata hai. Tab formula dobara lagao. Topic 1 mein x⁴ - 81 aise hi kiya tha. Ab thode lambe wale dekhte hain.

**Example 1:** a⁴ - b⁴
= (a²)² - (b²)²
= (a² + b²)(a² - b²)
= **(a² + b²)(a + b)(a - b)**

(a² + b² ko aur nahi tod sakte. Ye Part G mein samjhenge.)

**Example 2:** x⁸ - 1
= (x⁴)² - 1²
= (x⁴ + 1)(x⁴ - 1)
x⁴ - 1 ko phir todo:
= (x⁴ + 1)(x² + 1)(x² - 1)
x² - 1 ko phir todo:
= **(x⁴ + 1)(x² + 1)(x + 1)(x - 1)**

Teen baar formula laga! Har baar sirf **minus wala** factor toota, plus wale nahi.

**Example 3:** 16x⁴ - 81
= (4x²)² - 9²
= (4x² + 9)(4x² - 9)
= **(4x² + 9)(2x + 3)(2x - 3)**

> Yaad rakho: jab tak koi factor **"kuch² - kuch²"** jaisa dikhe, todte raho.

---

## Part E: Jab dono terms bracket hon

Formula mein **a aur b koi bhi cheez** ho sakte hain, bracket bhi. Topic 1 mein (x + y)² - z² dekha tha, jahan sirf ek term bracket tha. Ab dono bracket wale dekhte hain.

**Tarika:**
- Pehla factor: **(pehla bracket) + (doosra bracket)**
- Doosra factor: **(pehla bracket) - (doosra bracket)**
- Doosre factor mein minus ke baad **poore bracket ke signs badlo.**

**Example 1:** (a + b)² - (a - b)²
= [(a + b) + (a - b)] [(a + b) - (a - b)]
= [a + b + a - b] [a + b - a + b]
= (2a)(2b)
= **4ab**

Jaanch: (a + b)² - (a - b)² = (a² + 2ab + b²) - (a² - 2ab + b²) = 4ab ✅

**Example 2:** (2x + 3)² - (x - 1)²
= [(2x + 3) + (x - 1)] [(2x + 3) - (x - 1)]
= [2x + 3 + x - 1] [2x + 3 - x + 1]
= **(3x + 2)(x + 4)**

Jaanch:
- Left side: (4x² + 12x + 9) - (x² - 2x + 1) = 3x² + 14x + 8
- Right side: (3x + 2)(x + 4) = 3x² + 12x + 2x + 8 = 3x² + 14x + 8 ✅

**Example 3:** 9(x + y)² - 4(x - y)²
Pehle dono ko square ki shakal mein likho:
= [3(x + y)]² - [2(x - y)]²
= [3x + 3y + 2x - 2y] [3x + 3y - 2x + 2y]
= **(5x + y)(x + 5y)**

Jaanch: Left side = 9x² + 18xy + 9y² - 4x² + 8xy - 4y² = 5x² + 26xy + 5y². Right side = 5x² + 25xy + xy + 5y² = 5x² + 26xy + 5y² ✅

---

## Part F: Grouping ke saath formula

Yahan hum **Topic 3 wala grouping** use karenge: terms ko groups mein baanto, har group se kuch common nikalo. Farak bas itna hai ki ab ek group se common factor nahi, balki **difference of squares** nikalta hai.

### Type 1: Do terms squares ke, do terms common factor wale

**Example 1:** a² - b² + a - b
a² - b² = (a + b)(a - b), aur a - b = 1 × (a - b).
= (a + b)(a - b) + 1(a - b)
(a - b) common hai:
= **(a - b)(a + b + 1)**

Jaanch: (a - b)(a + b + 1) = a² + ab + a - ab - b² - b = a² - b² + a - b ✅

**Example 2:** x² - 4 + 3x - 6
x² - 4 = (x + 2)(x - 2), aur 3x - 6 = 3(x - 2).
= (x + 2)(x - 2) + 3(x - 2)
= (x - 2)(x + 2 + 3)
= **(x - 2)(x + 5)**

Jaanch: (x - 2)(x + 5) = x² + 3x - 10, aur x² - 4 + 3x - 6 = x² + 3x - 10 ✅

### Type 2: Teen terms milkar ek square bante hain

Topic 1 mein a² - 2ab + b² - c² dekha tha. Ab ek aisa dekhte hain jahan **minus pehle lagta hai.**

**Example 3:** x² - y² - 2y - 1
Yahan bhi Topic 3 wala grouping hai, bas group teen terms ka hai. Aakhri teen terms ko dekho: -y² - 2y - 1 = -(y² + 2y + 1) = -(y + 1)².
= x² - (y + 1)²
= [x + (y + 1)] [x - (y + 1)]
= **(x + y + 1)(x - y - 1)**

Jaanch: (x + y + 1)(x - y - 1) = x² - (y + 1)² = x² - y² - 2y - 1 ✅

Dhyan do: minus bahar nikalte waqt **bracket ke andar ke sab signs badal jate hain.**

---

## Part G: Add aur subtract wali trick

Kabhi kabhi expression difference of squares jaisa bilkul nahi dikhta. Par ek chhoti si chaalaaki se ban jata hai: **ek hi cheez jodo aur ghatao.** Isse value nahi badalti (kyunki +k - k = 0), par shakal badal jati hai.

**Example 1:** x⁴ + 4

Dekho, x⁴ = (x²)² aur 4 = 2². Agar beech mein **4x²** hota to (x² + 2)² ban jata. To 4x² jodo aur ghatao:
x⁴ + 4
= x⁴ + 4x² + 4 - 4x²
= (x² + 2)² - (2x)²
= **(x² + 2x + 2)(x² - 2x + 2)**

Jaanch: (x² + 2 + 2x)(x² + 2 - 2x) = (x² + 2)² - (2x)² = x⁴ + 4x² + 4 - 4x² = x⁴ + 4 ✅

**Example 2:** x⁴ + x² + 1

Agar beech mein x² ki jagah **2x²** hota to (x² + 1)² ban jata. To ek x² aur jodo aur ghatao:
x⁴ + x² + 1
= x⁴ + 2x² + 1 - x²
= (x² + 1)² - x²
= **(x² + x + 1)(x² - x + 1)**

Jaanch: (x² + 1 + x)(x² + 1 - x) = (x² + 1)² - x² = x⁴ + 2x² + 1 - x² = x⁴ + x² + 1 ✅

Ye trick thode mushkil sawaalon mein kaam aati hai. Pehchaan: **x⁴ wala term aur constant dono perfect square hon**, par beech ka term "sahi" na ho.

---

## Part H: a² + b² kyun nahi tootta

Ye sabse common sawaal hai: "**a² - b² toot jata hai, to a² + b² kyun nahi?**"

**Kaaran 1 (multiply karke dekho):** Koi bhi do simple brackets try karo:
- (a + b)(a + b) = a² + **2ab** + b² (beech ka term aa gaya)
- (a - b)(a - b) = a² - **2ab** + b² (beech ka term aa gaya)
- (a + b)(a - b) = a² - b² (minus aa gaya, plus nahi)

Koi bhi tarike se **sirf a² + b²** nahi aata.

**Kaaran 2 (pichle chapter ke Factor Theorem se):** Agar x² + 9 ka koi factor (x - k) hota, to x = k par value 0 aati. Par x² hamesha 0 ya positive hota hai, to x² + 9 hamesha **9 ya usse bada** rahega, kabhi 0 nahi. Isliye iska koi real linear factor nahi hai.

To yaad rakho:
> **Sum of two squares (a² + b²) ko real numbers mein factorise nahi kar sakte.**

(Haan, Part G ki tarah kabhi kabhi x⁴ + 4 jaise expressions toot jate hain, kyunki wahan hum jodkar aur ghatakar difference banate hain. Par seedha a² + b² nahi tootta.)

---

## Part I: Numbers ke saath (mental maths)

Topic 1 mein 101 × 99 dekha tha. Ab ulta dekhte hain: **do squares ka difference** jaldi nikalna.

**Example 1:** 57² - 43²
= (57 + 43)(57 - 43)
= 100 × 14
= **1400**

(Seedha karte to 3249 - 1849 = 1400. Same answer, par zyada mehnat.)

**Example 2:** (0.75)² - (0.25)²
= (0.75 + 0.25)(0.75 - 0.25)
= 1 × 0.5
= **0.5**

**Example 3:** 999² - 1
= (999 + 1)(999 - 1)
= 1000 × 998
= **9,98,000**

**Example 4:** 89² - 11²
= (89 + 11)(89 - 11)
= 100 × 78
= **7800**

Trick: jab dono numbers ka **sum 100, 1000 jaisa gol number** ho, to ye tarika bahut tez hai.

### Ek aur kaam ka sawaal

**Example 5:** Agar x² - y² = 45 aur x + y = 9 ho, to x aur y nikalo.

x² - y² = (x + y)(x - y)
45 = 9 × (x - y)
x - y = **5**

Ab x + y = 9 aur x - y = 5 jodo: 2x = 14, to **x = 7**. Phir y = 9 - 7 = **2**.

Jaanch: 7² - 2² = 49 - 4 = 45 ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: a² + b² ko (a + b)(a - b) likh dena**
Formula sirf **minus** ke liye hai. x² + 16 ≠ (x + 4)(x - 4). Check: (x + 4)(x - 4) = x² - 16.

**Galti 2: Perfect square galat pehchanna**
- 8x² perfect square nahi hai (8 square nahi hai). Pehle common factor dekho.
- x³ perfect square nahi hai (power odd hai).
- 0.4 perfect square nahi hai, par 0.04 hai (0.2²).

**Galti 3: Beech mein ruk jana**
a⁴ - b⁴ = (a² + b²)(a² - b²) par mat ruko. a² - b² aur toot jata hai.

**Galti 4: Bracket wale mein sign galat**
(2x + 3)² - (x - 1)² ke doosre factor mein (2x + 3) - (x - 1) = 2x + 3 - x **+ 1**. Minus ke baad bracket ke andar ka -1, +1 ban jata hai.

**Galti 5: Minus bahar nikalte waqt signs na badalna**
-y² - 2y - 1 = -(y² + 2y + 1). Andar sab plus ho gaye.

**Galti 6: Common factor bhool jana**
3x² - 75 ko dekh ke "ye perfect square nahi hai" bol ke chhod mat do. 3 nikalo, phir x² - 25 ban jata hai.

**Galti 7: Square root lete waqt power ko 2 se divide na karna**
x⁶ ka square root x³ hai, x⁴ nahi. (Power 6 ÷ 2 = 3.)

---

## Quick Recap

- **a² - b² = (a + b)(a - b)**. Picture se: square se chhota square kaato, bacha hissa rectangle (a + b) × (a - b) ban jata hai.
- **Perfect squares pehchano:** numbers (1, 4, 9...), even power wale letters (x², x⁴...), fractions (4/9), decimals (0.49).
- **Pehle common factor nikalo**, phir formula lagao.
- Jab tak koi factor **"kuch² - kuch²"** dikhe, formula baar baar lagao.
- a aur b **brackets** bhi ho sakte hain. Doosre factor mein minus ke baad signs badlo.
- **Grouping** ke saath: ek group difference of squares, doosra common factor.
- **Add-subtract trick:** x⁴ + 4 aur x⁴ + x² + 1 jaise expressions mein ek term jodo aur ghatao.
- **a² + b² real numbers mein nahi tootta.**
- **Mental maths:** 57² - 43² = 100 × 14 = 1400.

---

## Practice Questions

1. Factorise:
   (a) x²/9 - 1/16
   (b) 0.36p² - 0.01
   (c) 49a⁶ - 64b⁴

2. Take out the common factor first and then factorise:
   (a) 5x² - 80
   (b) 18a³ - 8ab²

3. Factorise completely:
   (a) 81x⁴ - 1
   (b) a⁸ - b⁸

4. Factorise:
   (a) (x + 5)² - 16
   (b) (3a + 2b)² - (a - b)²

5. Factorise:
   (a) x² - y² + x + y
   (b) 4a² - b² + 2a - b
   (c) a² - 2a + 1 - b²

6. Factorise 4x⁴ + 1 by adding and subtracting a suitable term.

7. Evaluate using the difference of two squares:
   (a) 68² - 32²
   (b) (6.5)² - (3.5)²
   (c) 1001² - 999²

8. If x² - y² = 45 and x - y = 5, find x + y, x and y.

9. State whether each statement is true or false. Give a reason.
   (a) x² + 16 = (x + 4)(x - 4)
   (b) a⁴ - b⁴ = (a² + b²)(a² - b²) is the complete factorisation.
   (c) 0.04 is a perfect square.

### Answers

1. (a) (x/3)² - (1/4)² = **(x/3 + 1/4)(x/3 - 1/4)**
   (b) (0.6p)² - (0.1)² = **(0.6p + 0.1)(0.6p - 0.1)**
   (c) (7a³)² - (8b²)² = **(7a³ + 8b²)(7a³ - 8b²)**
2. (a) 5(x² - 16) = **5(x + 4)(x - 4)**
   (b) 2a(9a² - 4b²) = **2a(3a + 2b)(3a - 2b)**
3. (a) (9x²)² - 1² = (9x² + 1)(9x² - 1) = **(9x² + 1)(3x + 1)(3x - 1)**
   (b) (a⁴ + b⁴)(a⁴ - b⁴) = (a⁴ + b⁴)(a² + b²)(a² - b²) = **(a⁴ + b⁴)(a² + b²)(a + b)(a - b)**
4. (a) (x + 5)² - 4² = (x + 5 + 4)(x + 5 - 4) = **(x + 9)(x + 1)**
   Jaanch: x² + 10x + 25 - 16 = x² + 10x + 9, aur (x + 9)(x + 1) = x² + 10x + 9 ✅
   (b) [3a + 2b + a - b] [3a + 2b - a + b] = **(4a + b)(2a + 3b)**
   Jaanch: dono taraf 8a² + 14ab + 3b² aata hai ✅
5. (a) (x + y)(x - y) + (x + y) = **(x + y)(x - y + 1)**
   (b) (2a + b)(2a - b) + (2a - b) = **(2a - b)(2a + b + 1)**
   (c) (a - 1)² - b² = **(a - 1 + b)(a - 1 - b)**
6. 4x⁴ + 1 = 4x⁴ + 4x² + 1 - 4x² = (2x² + 1)² - (2x)² = **(2x² + 2x + 1)(2x² - 2x + 1)**
   Jaanch: (2x² + 1)² - 4x² = 4x⁴ + 4x² + 1 - 4x² = 4x⁴ + 1 ✅
7. (a) (68 + 32)(68 - 32) = 100 × 36 = **3600**
   (b) (6.5 + 3.5)(6.5 - 3.5) = 10 × 3 = **30**
   (c) (1001 + 999)(1001 - 999) = 2000 × 2 = **4000**
8. 45 = (x + y)(x - y) = (x + y) × 5, to **x + y = 9**. Jodne par 2x = 14, **x = 7**, aur **y = 2**.
9. (a) **False.** (x + 4)(x - 4) = x² - 16. x² + 16 sum of squares hai, real numbers mein nahi tootta.
   (b) **False.** a² - b² aur toot sakta hai: (a² + b²)(a + b)(a - b).
   (c) **True.** 0.04 = (0.2)².

---

Agar ye sab ek saath zyada lage, to bas ek baat pakdo: **jahan bhi "kuch ka square minus kuch ka square" dikhe, wahan (jod)(ghata) likh do.** Baaki sab, chahe fraction ho, bracket ho ya grouping, isi ek baat ko pehchanne ka khel hai.

**Aage kya:** Ab tak humne zyadatar do terms wale expressions tode. Topic 5 mein hum **teen terms wale quadratic trinomials** (jaise x² + 4x + 3 aur 6x² + 5x - 6) ko todna seekhenge, jahan middle term ko do hisson mein baant kar Topic 3 wala grouping phir se kaam aayega.
