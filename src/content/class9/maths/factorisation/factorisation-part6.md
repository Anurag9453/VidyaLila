# Chapter: Factorisation (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [factorisation-part5.md](factorisation-part5.md) se aage chalti hai** (Topic 5: Quadratic Trinomials). Saare formulae ka overview Topic 1 ([factorisation.md](factorisation.md)) mein hai.
> **Topics covered in this file:**
> 6. Cube of a Binomial

---

# Topic 6: Cube of a Binomial

Topic 5 mein humne quadratic trinomials ko factorise kiya, aur dekha ki kuch trinomials asal mein **perfect squares** hote hain, jaise 4x² + 12x + 9 = (2x + 3)². Wahan sab kuch **square** (power 2) ke aas paas tha. Ab hum **ek power upar** chalte hain: square se **cube** (power 3) par, yaani (a + b)³ aur (a - b)³.

Topic 1 ki formula table mein ye dono sirf ek line mein aaye the. Ab hum inhe gehrai se samjhenge: ye formula **aata kahan se hai**, ise **yaad kaise rakhein**, iska use karke bade bade numbers ka cube kaise nikalein, aur sabse zaroori, **perfect cube wale expressions ko kaise factorise karein.**

---

## Ek bade cube ki kahani

Socho aapke paas ek bada sa wooden cube hai, jiski har side **(a + b)** hai. Iska volume hoga **(a + b)³**.

Ab is cube ko aari se kaat do: har side par, a ke baad ek cut lagao. Jab aap teeno disha mein (lambai, chaudai, unchai) kaat loge, to ye cube **8 tukdon** mein toot jayega. Dekhte hain kaun kaun se tukde bane:

| Tukda | Size | Volume | Kitne |
|---|---|---|---|
| Ek bada cube | a × a × a | a³ | **1** |
| Ek chhota cube | b × b × b | b³ | **1** |
| Moti slab | a × a × b | a²b | **3** |
| Patli rod | a × b × b | ab² | **3** |

Gino: 1 + 1 + 3 + 3 = 8 tukde. ✅

Ab saare tukdon ka volume jodo, to wahi poore cube ka volume milega:

**(a + b)³ = a³ + 3a²b + 3ab² + b³**

Bas, yahi poora formula hai. Ek bada cube, ek chhota cube, teen slab, teen rod. Agar kabhi formula bhool jao, to ye 8 tukdon wala cube yaad kar lena.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Binomial** | Do terms wala expression (Polynomials Topic 5 mein dekha tha) | a + b, 2x - 3y |
| **Cube** | Kisi cheez ko teen baar multiply karna | a³ = a × a × a |
| **Cube of a binomial** | Do terms wale expression ka cube | (a + b)³, (x - 2)³ |
| **Perfect cube expression** | Aisa expression jo kisi binomial ka cube ho | x³ + 6x² + 12x + 8 = (x + 2)³ |
| **Expand karna** | Bracket kholkar lamba expression banana | (x + 1)³ → x³ + 3x² + 3x + 1 |

---

## Part A: Formula kahan se aata hai

Kahani wala cube ek picture thi. Ab wahi baat multiply karke pakki karte hain.

(a + b)³ ka matlab hai (a + b) × (a + b) × (a + b).

Topic 5 (aur Topic 1) mein hum perfect square ka result use kar chuke hain: (a + b)² = a² + 2ab + b². Bas usi ko ek baar aur (a + b) se multiply karna hai:

(a + b)³ = (a + b)² × (a + b)
= (a² + 2ab + b²)(a + b)

Ab pehle bracket ke har term ko a se aur phir b se multiply karo:

= a² · a + a² · b + 2ab · a + 2ab · b + b² · a + b² · b
= a³ + a²b + 2a²b + 2ab² + ab² + b³

Like terms jodo (a²b wale aur ab² wale):

= a³ + **3a²b** + **3ab²** + b³ ✅

Wahi aaya jo cube ke tukdon se mila tha.

### (a - b)³ kaise nikle?

Bas b ki jagah **(-b)** rakh do:

(a - b)³ = a³ + 3a²(-b) + 3a(-b)² + (-b)³
= a³ - 3a²b + 3ab² - b³

(Yahan (-b)² = b² positive hai, aur (-b)³ = -b³ negative hai. Exponents chapter wala rule: negative ki even power positive, odd power negative.)

### Dono formulae ek saath

**(a + b)³ = a³ + 3a²b + 3ab² + b³**

**(a - b)³ = a³ - 3a²b + 3ab² - b³**

(a - b)³ mein signs **ek ke baad ek badalte hain**: +, -, +, -.

---

## Part B: Formula ka chhota roop

3a²b + 3ab² mein **3ab** common hai:

3a²b + 3ab² = 3ab(a + b)

Isliye formula ko aise bhi likh sakte hain:

**(a + b)³ = a³ + b³ + 3ab(a + b)**

Isi tarah:

**(a - b)³ = a³ - b³ - 3ab(a - b)**

Ye chhota roop Part G ke sawalon mein bahut kaam aata hai, jahan a + b aur ab diye hote hain.

---

## Part C: 1-3-3-1 ka pattern

Formula ko dhyan se dekho:

(a + b)³ = **1**a³ + **3**a²b + **3**ab² + **1**b³

Teen cheezein yaad rakho:

1. **Coefficients:** 1, 3, 3, 1 (aage peeche se same)
2. **a ki power:** 3, 2, 1, 0 (har term mein ek kam)
3. **b ki power:** 0, 1, 2, 3 (har term mein ek zyada)

Har term mein a aur b ki powers ka sum hamesha **3** hota hai: a³ (3 + 0), a²b (2 + 1), ab² (1 + 2), b³ (0 + 3).

Agar ye pattern yaad hai, to formula ratne ki zaroorat nahi.

---

## Part D: Expand karna (solved examples)

Har baar ek hi tarika: pehchano ki **a kya hai** aur **b kya hai**, phir 1-3-3-1 pattern mein rakho.

**Example 1:** (x + 2)³

a = x, b = 2.
= x³ + 3(x²)(2) + 3(x)(2²) + 2³
= **x³ + 6x² + 12x + 8**

Jaanch (x = 1 rakhkar): (1 + 2)³ = 27. Aur 1 + 6 + 12 + 8 = 27 ✅

**Example 2:** (2x + 3y)³

a = 2x, b = 3y.
- a³ = (2x)³ = 8x³
- 3a²b = 3(4x²)(3y) = 36x²y
- 3ab² = 3(2x)(9y²) = 54xy²
- b³ = (3y)³ = 27y³

= **8x³ + 36x²y + 54xy² + 27y³**

**Example 3:** (3a - 2b)³

a = 3a, b = 2b, aur minus wala formula.
- (3a)³ = 27a³
- 3(3a)²(2b) = 3(9a²)(2b) = 54a²b
- 3(3a)(2b)² = 3(3a)(4b²) = 36ab²
- (2b)³ = 8b³

Signs +, -, +, -:
= **27a³ - 54a²b + 36ab² - 8b³**

**Example 4:** (x + 1/x)³

a = x, b = 1/x.
- a³ = x³
- 3a²b = 3(x²)(1/x) = 3x
- 3ab² = 3(x)(1/x²) = 3/x
- b³ = 1/x³

= **x³ + 3x + 3/x + 1/x³**

Chhote roop mein: (x + 1/x)³ = x³ + 1/x³ + 3(x)(1/x)(x + 1/x) = **x³ + 1/x³ + 3(x + 1/x)**

Dhyan do, x × 1/x = 1, isliye 3ab bas **3** ban jata hai. Ye baat Part G mein bahut kaam aayegi.

**Example 5:** (x - 1/x)³

= x³ - 3(x²)(1/x) + 3(x)(1/x²) - 1/x³
= **x³ - 3x + 3/x - 1/x³**

Chhote roop mein: **x³ - 1/x³ - 3(x - 1/x)**

---

## Part E: Bade numbers ka cube (mental maths)

Kisi number ko 10, 100 ke paas wale number mein tod do, phir formula lagao.

**Example 1:** 101³

101 = 100 + 1. To a = 100, b = 1.
= 100³ + 3(100²)(1) + 3(100)(1²) + 1³
= 1000000 + 30000 + 300 + 1
= **1030301**

**Example 2:** 99³

99 = 100 - 1.
= 100³ - 3(100²)(1) + 3(100)(1) - 1
= 1000000 - 30000 + 300 - 1
= **970299**

**Example 3:** 1.1³

1.1 = 1 + 0.1.
= 1 + 3(1)(0.1) + 3(1)(0.01) + 0.001
= 1 + 0.3 + 0.03 + 0.001
= **1.331**

**Example 4:** 9.9³

9.9 = 10 - 0.1.
= 1000 - 3(100)(0.1) + 3(10)(0.01) - 0.001
= 1000 - 30 + 0.3 - 0.001
= **970.299**

Calculator ke bina, 30 second mein!

---

## Part F: Perfect cube expressions ko factorise karna

Ab ulta kaam: lamba expression diya hai, hume use **(a + b)³ ya (a - b)³** ke roop mein likhna hai.

### Pehchaan kaise karein (4 check)

1. **4 terms** hon.
2. **Pehla aur aakhri term perfect cube** hon (jaise 8x³ = (2x)³, 27 = 3³).
3. Unke cube roots nikalo: yahi **a aur b** hain.
4. Beech ke do terms check karo: kya ye **3a²b aur 3ab²** hain?

Agar charon check pass hue, to expression ek perfect cube hai. Signs dekho:
- Sab plus ho to **(a + b)³**
- Signs +, -, +, - ho to **(a - b)³**

### Solved examples

**Example 1:** 8x³ + 36x²y + 54xy² + 27y³

- Pehla term 8x³ = (2x)³, to **a = 2x**.
- Aakhri term 27y³ = (3y)³, to **b = 3y**.
- Check 3a²b = 3(4x²)(3y) = 36x²y ✅
- Check 3ab² = 3(2x)(9y²) = 54xy² ✅
- Sab plus hain.

= **(2x + 3y)³**

**Example 2:** x³ - 6x² + 12x - 8

- x³ = (x)³, to a = x.
- 8 = 2³, to b = 2.
- 3a²b = 3(x²)(2) = 6x² ✅
- 3ab² = 3(x)(4) = 12x ✅
- Signs +, -, +, -.

= **(x - 2)³**

**Example 3:** 27a³ - 27a²b + 9ab² - b³

- 27a³ = (3a)³, aur b³ = (b)³.
- 3(3a)²(b) = 3(9a²)(b) = 27a²b ✅
- 3(3a)(b²) = 9ab² ✅
- Signs +, -, +, -.

= **(3a - b)³**

**Example 4:** x³ + 3x² + 3x + 1

- a = x, b = 1.
- 3a²b = 3x² ✅, 3ab² = 3x ✅

= **(x + 1)³**

**Example 5 (pehle common factor):** 2x³ + 12x² + 24x + 16

Saare terms mein 2 common hai (Topic 2 wala kaam):
= 2(x³ + 6x² + 12x + 8)

Bracket ke andar wala Part D ke Example 1 jaisa hai:
= **2(x + 2)³**

**Example 6 (chhote roop wala):** x³ + 8 + 6x(x + 2)

Ye a³ + b³ + 3ab(a + b) jaisa dikhta hai, jahan a = x, b = 2:
- 3ab(a + b) = 3(x)(2)(x + 2) = 6x(x + 2) ✅

= **(x + 2)³**

### Jab check fail ho jaye

**Example 7:** x³ + 6x² + 9x + 8

a = x, b = 2. Check: 3ab² = 3(x)(4) = 12x. Par yahan 9x hai.
Check fail. Ye **perfect cube nahi hai.** Ise is formula se factorise nahi kar sakte.

Isliye beech ke terms ko hamesha check karo. Sirf pehla aur aakhri term dekhkar jawab mat do.

---

## Part G: a + b aur ab diye ho to a³ + b³ nikalna

Aise sawaal bahut dilchasp hote hain. Yahan Part B ka chhota roop kaam aata hai.

(a + b)³ = a³ + b³ + 3ab(a + b)

Ise ulta karke:

**a³ + b³ = (a + b)³ - 3ab(a + b)**

Isi tarah:

**a³ - b³ = (a - b)³ + 3ab(a - b)**

**Example 1:** Agar a + b = 5 aur ab = 6, to a³ + b³ nikalo.

a³ + b³ = (a + b)³ - 3ab(a + b)
= 5³ - 3(6)(5)
= 125 - 90
= **35**

Jaanch: a = 2, b = 3 lo (2 + 3 = 5, 2 × 3 = 6). 2³ + 3³ = 8 + 27 = 35 ✅

**Example 2:** Agar a - b = 2 aur ab = 15, to a³ - b³ nikalo.

a³ - b³ = (a - b)³ + 3ab(a - b)
= 2³ + 3(15)(2)
= 8 + 90
= **98**

Jaanch: a = 5, b = 3 lo. 125 - 27 = 98 ✅

**Example 3:** Agar x + 1/x = 3, to x³ + 1/x³ nikalo.

Yahan a = x aur b = 1/x hai. To ab = x × 1/x = **1**.

x³ + 1/x³ = (x + 1/x)³ - 3(1)(x + 1/x)
= 3³ - 3(3)
= 27 - 9
= **18**

**Example 4:** Agar x - 1/x = 4, to x³ - 1/x³ nikalo.

x³ - 1/x³ = (x - 1/x)³ + 3(1)(x - 1/x)
= 4³ + 3(4)
= 64 + 12
= **76**

**Yaad rakho:** x aur 1/x wale sawalon mein **ab = 1** hota hai. Isliye formula aur bhi chhota ho jata hai.

---

## Part H: (a + b)³ aur a³ + b³ alag hain

Ye sabse badi galti hai jo students karte hain. Numbers se dekho:

a = 1, b = 2:
- (a + b)³ = (1 + 2)³ = 3³ = **27**
- a³ + b³ = 1 + 8 = **9**

Dono bilkul alag! Farak hai 27 - 9 = 18, jo exactly 3ab(a + b) = 3(1)(2)(3) = 18 hai. ✅

To:
- **(a + b)³** = "pehle jodo, phir cube karo". Iske 4 terms hain (ek binomial ka cube).
- **a³ + b³** = "pehle cube karo, phir jodo". Ye sum of cubes hai.

a³ + b³ ko factorise kaise karte hain, wo hum agle topic (Topic 7) mein seekhenge.

---

## Aam galtiyan (bachke rehna)

**Galti 1: (a + b)³ = a³ + b³ likh dena**
Beech ke do terms 3a²b + 3ab² bhool gaye. Part H ka number wala example yaad karo: 27 ≠ 9.

**Galti 2: Coefficient ka cube na karna**
(2x)³ = 8x³ hota hai, 2x³ nahi. Bracket ke andar ki har cheez ka cube hota hai.

**Galti 3: (a - b)³ mein signs galat lagana**
Signs ek ke baad ek badalte hain: **+, -, +, -**. Aakhri term -b³ hai, +b³ nahi.

**Galti 4: 3a²b mein a² ki jagah a likhna**
3a²b mein **a ka square** hai. (2x + 3y)³ mein 3a²b = 3(2x)²(3y) = 3(4x²)(3y) = 36x²y. Agar (2x) ka square bhool gaye to 18x²y aata, jo galat hai.

**Galti 5: Sirf pehla aur aakhri term dekhkar factorise kar dena**
Beech ke dono terms bhi check karo. x³ + 6x² + 9x + 8 perfect cube nahi hai, kyunki 9x ki jagah 12x hona chahiye tha.

**Galti 6: x + 1/x wale sawal mein ab = 1 na lena**
x × 1/x = 1. Agar yahan ab = x likh diya to poora sawal galat ho jayega.

**Galti 7: Common factor pehle na nikalna**
2x³ + 12x² + 24x + 16 mein pehla term 2x³ perfect cube nahi lagta. Pehle 2 nikalo, phir andar perfect cube dikh jayega.

---

## Quick Recap

- **(a + b)³ = a³ + 3a²b + 3ab² + b³** (ek bada cube, ek chhota cube, teen slab, teen rod)
- **(a - b)³ = a³ - 3a²b + 3ab² - b³** (signs +, -, +, -)
- **Chhota roop:** (a + b)³ = a³ + b³ + 3ab(a + b), aur (a - b)³ = a³ - b³ - 3ab(a - b)
- **Pattern:** coefficients 1, 3, 3, 1. a ki power 3 se 0 tak ghatti hai, b ki 0 se 3 tak badhti hai.
- **Bade numbers ka cube:** 100 ya 10 ke paas tod do (101 = 100 + 1, 99 = 100 - 1).
- **Factorise karne ke 4 check:** 4 terms, pehla aur aakhri perfect cube, unke roots se a aur b, beech ke terms 3a²b aur 3ab² hon.
- **a³ + b³ = (a + b)³ - 3ab(a + b)** aur **a³ - b³ = (a - b)³ + 3ab(a - b)**
- x aur 1/x wale sawalon mein **ab = 1**.
- **(a + b)³ ≠ a³ + b³.**

---

## Practice Questions

1. Expand:
   (a) (x + 2)³
   (b) (3a - 2b)³
   (c) (x + 1/x)³

2. Use a suitable identity to evaluate:
   (a) 102³
   (b) 98³
   (c) 1.2³

3. Factorise:
   (a) x³ + 3x² + 3x + 1
   (b) 64p³ - 48p² + 12p - 1
   (c) 2x³ + 12x² + 24x + 16
   (d) 8a³ + 12a²b + 6ab² + b³

4. If a + b = 7 and ab = 10, find the value of a³ + b³.

5. If a - b = 3 and ab = 10, find the value of a³ - b³.

6. If x + 1/x = 4, find the value of x³ + 1/x³.

7. If x - 1/x = 2, find the value of x³ - 1/x³.

8. State whether each statement is true or false. Give a reason.
   (a) (a + b)³ = a³ + b³
   (b) (a - b)³ = a³ - b³ - 3ab(a - b)
   (c) x³ + 6x² + 9x + 8 is a perfect cube.

### Answers

1. (a) **x³ + 6x² + 12x + 8**
   (b) 27a³ - 3(9a²)(2b) + 3(3a)(4b²) - 8b³ = **27a³ - 54a²b + 36ab² - 8b³**
   (c) **x³ + 3x + 3/x + 1/x³**
2. (a) (100 + 2)³ = 1000000 + 3(10000)(2) + 3(100)(4) + 8 = 1000000 + 60000 + 1200 + 8 = **1061208**
   (b) (100 - 2)³ = 1000000 - 60000 + 1200 - 8 = **941192**
   (c) (1 + 0.2)³ = 1 + 3(0.2) + 3(0.04) + 0.008 = 1 + 0.6 + 0.12 + 0.008 = **1.728**
3. (a) a = x, b = 1. 3a²b = 3x², 3ab² = 3x ✅. **(x + 1)³**
   (b) 64p³ = (4p)³, 1 = 1³. 3(16p²)(1) = 48p² ✅, 3(4p)(1) = 12p ✅, signs +, -, +, -. **(4p - 1)³**
   (c) Pehle 2 nikalo: 2(x³ + 6x² + 12x + 8) = **2(x + 2)³**
   (d) 8a³ = (2a)³, b³. 3(4a²)(b) = 12a²b ✅, 3(2a)(b²) = 6ab² ✅. **(2a + b)³**
4. a³ + b³ = 7³ - 3(10)(7) = 343 - 210 = **133**
   Jaanch: a = 5, b = 2. 125 + 8 = 133 ✅
5. a³ - b³ = 3³ + 3(10)(3) = 27 + 90 = **117**
   Jaanch: a = 5, b = 2. 125 - 8 = 117 ✅
6. x³ + 1/x³ = 4³ - 3(4) = 64 - 12 = **52**
7. x³ - 1/x³ = 2³ + 3(2) = 8 + 6 = **14**
8. (a) **False.** (a + b)³ = a³ + 3a²b + 3ab² + b³. Jaise a = 1, b = 2 par 27 ≠ 9.
   (b) **True.** Ye (a - b)³ ka chhota roop hai.
   (c) **False.** a = x, b = 2 lene par 3ab² = 12x hona chahiye tha, par yahan 9x hai.

---

Agar formula bhool jao, to wo lakdi ka cube yaad kar lena jo 8 tukdon mein kata tha: **ek bada cube, ek chhota cube, teen slab, teen rod.** Bas, (a + b)³ wapas aa jayega.

**Agle topic mein:** Humne dekha ki (a + b)³ aur a³ + b³ alag hain. Topic 7 mein hum seekhenge ki **a³ + b³ aur a³ - b³** (sum aur difference of cubes) ko kaise factorise karte hain.
