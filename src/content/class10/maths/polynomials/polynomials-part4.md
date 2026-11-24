# Chapter: Polynomials (Part 4)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [polynomials-part3.md](polynomials-part3.md) se aage chalti hai** (wahan Topic 3 mein zeros se quadratic polynomial banana seekha: x² − Sx + P, aur uska koi bhi non-zero multiple). Chapter ki shuruaat: [polynomials.md](polynomials.md). Class 9 ka factor theorem aur cubic ko todne wala chapter: [polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md).
> **Topics covered in this file:**
> 4. Cubic Ke Zeros Aur Coefficients: Teen Zero, Teen Relation

---

# Topic 4: Cubic Ke Zeros Aur Coefficients: Teen Zero, Teen Relation

Topic 1 mein humne dekha ki cubic polynomial ka graph S jaisa lehrata hai aur x-axis ko **zyada se zyada teen** jagah kaat sakta hai, yaani uske zyada se zyada teen zero hote hain. Topic 2 mein quadratic ke do zeros ka ek anokha rishta mila (α + β = −b/a aur αβ = c/a), aur Topic 3 mein humne ulta safar kiya: zeros se polynomial banaya. Ab wahi kahani ek seedhi upar chadhti hai. Cubic ke **teen** zeros hain, to rishta bhi **teen** hoga. Dekhte hain wo teen rishte kaun se hain, kyun sach hain, aur unse kya-kya kaam nikalte hain.

---

## Niyati ka aquarium

Niyati Papa ke saath pet shop gayi hai. Uske kamre ke liye ek shaandaar glass aquarium lena hai. Dukaan wale uncle ne ek tank pasand karwaya aur bill-book par kuch likh diya. Niyati ne jhuk kar dekha. Naap ki jagah ek ajeeb sa polynomial likha tha:

2x³ − 15x² + 33x − 20

"Uncle, ye kya code hai?" Niyati hans padi.

Uncle muskuraye, "Beta, ye hamari dukaan ka tareeka hai. Is polynomial ke **teeno zero** hi tank ki **lambai, chaudai aur unchai** hain (feet mein). Gin ke dekh lo, teen hi zero hain na, aur tank mein bhi teen hi naap hain."

Niyati ne Class 9 ka tareeka lagaya: constant term ke factors try kiye. Pata chala ki p(1) = 0, p(4) = 0 aur p(5/2) = 0. To tank **1 ft chaudai, 4 ft lambai aur 5/2 ft unchai** ka hai.

```
           +------------------+
          /                  /:
         /                  / :
        +------------------+  :
  H     :                  :  +
        :                  : /
        :                  :/   B
        +------------------+
                L
```

> **Figure 4.1** – Aquarium ka dibba: L lambai, B chaudai aur H unchai. Parchi ke polynomial ke teeno zero yehi teen naap hain.

Ab Papa ne ek sawaal ghuma diya: "Chalo, ye batao: tank mein **kitna paani** aayega, uske **steel frame** ke liye kitna lamba pipe chahiye, aur **kaanch** kitna lagega? Par shart ye hai ki zero nikalne ka mehnat wala kaam **nahi** karna. Sirf parchi ke numbers 2, −15, 33, −20 dekhkar batao."

Niyati ne parchi ko ghoorna shuru kiya. Kya sirf coefficients mein zeros ka jod, guna sab chhupa hai? Haan. Aur wahi **teen relation** is topic ka dil hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Teen relation** | Cubic ke teen zeros α, β, γ ke teen jod-guna, jo seedhe coefficients se mil jaate hain: teeno ka jod, do-do ke guna ka jod aur teeno ka guna | Part A mein x³ − 10x² + 31x − 30 ke liye 10, 31, 30 |
| **Do-do ke guna ka jod** | Teen zeros mein se har do ka guna alag-alag likho aur teeno guna jod do: αβ + βγ + γα | Zeros 2, 3, 5 ho to 2×3 + 3×5 + 5×2 = 6 + 15 + 10 = 31 |
| **Dohra zero** | Aisa zero a jiske liye (x − a) polynomial ke factor mein **do baar** aata hai. Relations mein use do baar gina jaata hai | (x − 1)²(x + 4) mein zero 1 dohra hai |
| **AP (barabar gap wali list)** | Teen numbers jinme beech wala number, pehle aur teesre se ek hi gap par ho | 1, 4, 7 (har baar 3 ka gap) |
| **GP (barabar guna wali list)** | Teen numbers jinme har agla number, pichhle ko ek hi fixed number se guna karke milta hai | 1, 3, 9 (har baar ×3) |

(AP aur GP ka poora chapter aage aayega: Class 10 ke Chapter 4 Arithmetic Progressions aur Chapter 5 Geometric Progressions. Yahan sirf wo itna hi chahiye jitna upar likha hai.)

---

## Class 9 se yaad

Class 9 mein tumne [polynomials-part5.md](../../../class9/maths/polynomials/polynomials-part5.md) mein zero ka matlab seekha tha: wo number a jiske liye p(a) = 0. Phir [polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md) mein factor theorem mila: **a zero hai ⟺ (x − a) factor hai**. Cubic ko todne ka tareeka bhi wahin tha: constant term ke factors try karke ek zero dhundo, us factor se divide karo, aur bacha hua quadratic [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md) ke tareeke se tod do. Wo tareeka ab bhi kaam karta hai. Fark ye hai ki ab hum zeros **dhundhe bina** unke baare mein bahut kuch bata sakte hain.

---

## Part A: Teen relation aur unka "kyun"

Maan lo cubic ax³ + bx² + cx + d (a ≠ 0) ke teen zero α, β, γ hain. Class 9 ke factor theorem se (x − α), (x − β) aur (x − γ) teeno iske factor hain. Ye teen alag zeros ke liye is tarah chalta hai: (x − α) factor hai, to p(x) = (x − α) × (ek quadratic) aur us quadratic ka x² wala coefficient a hi hoga. Ab β ≠ α zero hai, to (β − α) × quadratic(β) = 0 aur β − α ≠ 0, to quadratic(β) = 0, yaani quadratic mein bhi (x − β) factor hai, aur bacha hua linear factor a(x − r) hoga (x ka coefficient a hi rehta hai). Teesra zero γ bhi α aur β se alag hai aur p ka zero hai, to (γ − α)(γ − β) × a(γ − r) = 0, aur pehle do bracket 0 nahi hain, to r = γ. To

p(x) = a(x − α)(x − β)(x − γ)

(Dono taraf ka x³ wala coefficient a hai aur teeno zero wahi hain.) Ab isse bracket kholte hain, ek ek karke.

**Kadam 1:** (x − α)(x − β) = x² − (α + β)x + αβ.

**Kadam 2:** ise (x − γ) se guna karo:

x² × (x − γ) = x³ − γx²
−(α + β)x × (x − γ) = −(α + β)x² + γ(α + β)x
αβ × (x − γ) = αβx − αβγ

**Kadam 3:** jod karke x ki power ke hisaab se rakho:

(x − α)(x − β)(x − γ) = x³ − (α + β + γ)x² + (αβ + βγ + γα)x − αβγ

Yahan x wale hisse mein αβ + γα + γβ aaya, jo wahi αβ + βγ + γα hai. To

ax³ + bx² + cx + d = a x³ − a(α + β + γ) x² + a(αβ + βγ + γα) x − a αβγ

Ye do polynomial **ek hi** hain, to x³, x², x aur constant ke coefficients barabar honge:

- b = −a(α + β + γ), to **α + β + γ = −b/a**
- c = a(αβ + βγ + γα), to **αβ + βγ + γα = c/a**
- d = −aαβγ, to **αβγ = −d/a**

> **Teen relation (cubic ax³ + bx² + cx + d ke liye):**
> α + β + γ = −b/a, αβ + βγ + γα = c/a, αβγ = −d/a

Dhyan do: signs ka pattern **−, +, −** hai (b, c, d ke saamne), aur har baar a se bhaag. Topic 2 ke quadratic mein sirf pehle do the, α + β = −b/a aur αβ = c/a, aur yahan ek aur judta hai.

**Jaanch (identity ek chhote cubic par):** α = 2, β = 3, γ = 5 lo. (x − 2)(x − 3)(x − 5) = (x² − 5x + 6)(x − 5) = x³ − 5x² − 5x² + 25x + 6x − 30 = x³ − 10x² + 31x − 30. Zeros ka jod 2 + 3 + 5 = 10, do-do ke guna ka jod 6 + 15 + 10 = 31, aur teeno ka guna 30. Coefficients −10, 31, −30 hain: 10 = −(−10), 31 = 31, 30 = −(−30) ✅

### Example 1: teen integer zeros

x³ − 2x² − x + 2 ke zeros −1, 1 aur 2 hain. Teen relation verify karo.

Pehle zeros ki jaanch: p(−1) = −1 − 2 + 1 + 2 = 0, p(1) = 1 − 2 − 1 + 2 = 0, p(2) = 8 − 8 − 2 + 2 = 0. Teeno zero hain. Yahan a = 1, b = −2, c = −1, d = 2.

- Zeros ka jod: −1 + 1 + 2 = 2, aur −b/a = 2. ✓
- Do-do ke guna ka jod: (−1)(1) + (1)(2) + (2)(−1) = −1 + 2 − 2 = −1, aur c/a = −1. ✓
- Teeno ka guna: (−1)(1)(2) = −2, aur −d/a = −2. ✓

**Jaanch:** teeno barabar nikle, aur (x + 1)(x − 1)(x − 2) = (x² − 1)(x − 2) = x³ − 2x² − x + 2 ✅

Is polynomial ka graph dekhte hain.

```
               y
   8           |              *              x    p(x)
   6           |                            -2    -12
   4           |                            -1      0  <- zero
   2           *                             0      2
   0 -----O----+----O----O----- x            1      0  <- zero
  -2           |                             2      0  <- zero
  -4           |                             3      8
  -6           |
  -8           |
 -10           |
 -12 *         |
     -2   -1   0    1    2    3            
```

> **Figure 4.2** – y = x³ − 2x² − x + 2 ke points. Table ke points ko kram se jodo to S jaisi curve banti hai. O wale teen point x-axis par hain: x = −1, 1, 2, yehi teen zero hain. Neeche wala axis x ka hai, upar-neeche wala axis p(x) ka, aur y-axis par har line 2 units ki hai.

Graph aur factor theorem ek hi baat kehte hain: jahan curve x-axis ko kaatti hai, wahan (x − zero) factor hai.

### Example 2: fraction wala zero

3x³ − 4x² − 17x + 6 ke zeros 3, −2 aur 1/3 hain. Teen relation verify karo.

Zeros ki jaanch: p(3) = 81 − 36 − 51 + 6 = 0. p(−2) = −24 − 16 + 34 + 6 = 0. p(1/3) = 3/27 − 4/9 − 17/3 + 6 = 1/9 − 4/9 − 51/9 + 54/9 = 0. Yahan a = 3, b = −4, c = −17, d = 6.

- Jod: 3 + (−2) + 1/3 = 1 + 1/3 = **4/3**. −b/a = 4/3. ✓
- Do-do ka guna-jod: 3×(−2) + (−2)×(1/3) + (1/3)×3 = −6 − 2/3 + 1 = −5 − 2/3 = **−17/3**. c/a = −17/3. ✓
- Teeno ka guna: 3 × (−2) × (1/3) = **−2**. −d/a = −6/3 = −2. ✓

**Jaanch:** teeno relation mil gaye ✅. (Fraction zero 1/3 ka matlab hai ki (3x − 1) factor hai, aur isi liye a = 3 aaya.)

### Example 3: negative fraction zero

4x³ − 12x² − 19x + 12 ke zeros −3/2, 1/2 aur 4 hain. Teen relation verify karo.

Zeros ki jaanch: p(4) = 256 − 192 − 76 + 12 = 0. p(1/2) = 4/8 − 12/4 − 19/2 + 12 = 1/2 − 3 − 19/2 + 12 = 0. p(−3/2) = 4(−27/8) − 12(9/4) + 57/2 + 12 = −27/2 − 27 + 57/2 + 12 = 15 − 27 + 12 = 0. Yahan a = 4, b = −12, c = −19, d = 12.

- Jod: −3/2 + 1/2 + 4 = −1 + 4 = **3**. −b/a = 12/4 = 3. ✓
- Do-do ka guna-jod: (−3/2)(1/2) + (1/2)(4) + (4)(−3/2) = −3/4 + 2 − 6 = **−19/4**. c/a = −19/4. ✓
- Teeno ka guna: (−3/2)(1/2)(4) = **−3**. −d/a = −12/4 = −3. ✓

**Jaanch:** teeno barabar ✅.

---

## Part B: Relations ka kamaal: aquarium ka jawab, aur zero se cubic banana

### Example 4: Niyati ki parchi (zero nikaale bina)

Parchi: 2x³ − 15x² + 33x − 20. Yahan a = 2, b = −15, c = 33, d = −20. Teen relation se:

- L + B + H = −b/a = 15/2
- LB + BH + HL = c/a = 33/2
- LBH = −d/a = 20/2 = 10

**Paani:** tank ka volume = L × B × H = **10 ghan feet**. Ek ghan foot mein lagbhag 28 litre aata hai, to tank mein lagbhag 280 litre paani aayega.

**Steel frame:** ek box ke 12 kinaare hote hain, aur 4 kinaare L ke barabar, 4 B ke aur 4 H ke. Kul lambai = 4(L + B + H) = 4 × 15/2 = **30 ft**.

**Kaanch:** chhe faces ka kul area = 2(LB + BH + HL) = 2 × 33/2 = **33 vargfeet**.

**Jaanch (asli naap se):** L = 4, B = 1, H = 5/2. Volume = 4 × 1 × 5/2 = 10 ✅. Frame = 4(4 + 1 + 5/2) = 4 × 15/2 = 30 ✅. Kaanch: LB = 4, BH = 5/2, HL = 10, jod 33/2, dugna 33 ✅

Niyati ne tali bajayi: "Uncle, matlab parchi ka har number ek raaz rakhta hai!"

### Example 5: teen zeros se cubic banana

Aisa cubic banao jiske zero 1/2, 3 aur −5 hon.

- Jod: 1/2 + 3 + (−5) = −3/2
- Do-do ka guna-jod: (1/2)(3) + (3)(−5) + (−5)(1/2) = 3/2 − 15 − 5/2 = −16
- Teeno ka guna: (1/2)(3)(−5) = −15/2

Teen relation ko ulta padho: x³ − (jod)x² + (do-do ka guna-jod)x − (teeno ka guna). To ek cubic:

x³ + (3/2)x² − 16x + 15/2

Fractions hatane ke liye 2 se guna karo: **2x³ + 3x² − 32x + 15**. (Koi bhi non-zero k se guna karo, zeros wahi rahenge. Topic 3 ke quadratic ki tarah.)

**Jaanch:** p(1/2) = 2/8 + 3/4 − 16 + 15 = 1/4 + 3/4 − 1 = 0. p(3) = 54 + 27 − 96 + 15 = 0. p(−5) = −250 + 75 + 160 + 15 = 0 ✅

### Example 6: jab sirf teen sums diye hon

Kisi cubic ke zeros ka jod 3, do-do ke guna ka jod −16 aur teeno ka guna 12 hai. Cubic banao (x³ ka coefficient 1) aur uske saare zeros dhundo.

x³ − (3)x² + (−16)x − (12) = **x³ − 3x² − 16x − 12**.

Zeros dhundne ke liye Class 9 ka tareeka: constant −12 ke factors try karo. p(1) = 1 − 3 − 16 − 12 = −30 (zero nahi). p(−1) = −1 − 3 + 16 − 12 = 0. Zero mil gaya, to (x + 1) factor hai.

(x³ − 3x² − 16x − 12) ÷ (x + 1): x² × (x + 1) = x³ + x², bacha −4x² − 16x. Phir −4x × (x + 1) = −4x² − 4x, bacha −12x − 12. Phir −12 × (x + 1) = −12x − 12, bacha 0. Quotient x² − 4x − 12 = (x − 6)(x + 2).

Zeros: **−1, 6 aur −2**.

**Jaanch:** jod −1 + 6 − 2 = 3 ✅. Do-do ka guna-jod: (−1)(6) + (6)(−2) + (−2)(−1) = −6 − 12 + 2 = −16 ✅. Guna: (−1)(6)(−2) = 12 ✅

---

## Part C: Ek ya do zero diye hon, to baaki?

### Example 7: ek zero diya hai, relations se baaki

3x³ − 20x² + 23x + 10 ka ek zero 5 hai (p(5) = 375 − 500 + 115 + 10 = 0). Baaki do zero dhundo.

Maan lo α = 5 aur baaki do β, γ hain. Relations: a = 3, b = −20, c = 23, d = 10.

- α + β + γ = 20/3, to β + γ = 20/3 − 5 = **5/3**.
- αβγ = −10/3, to 5βγ = −10/3, aur βγ = **−2/3**.

Ab β aur γ ka jod 5/3 hai aur guna −2/3, to wo is quadratic ke zero hain (Topic 3 ka x² − Sx + P): x² − (5/3)x − 2/3, yaani 3 se guna karke **3x² − 5x − 2** = (3x + 1)(x − 2). Zeros **2 aur −1/3**.

Poore zero: **5, 2, −1/3**.

**Jaanch (alag raaste se):** (3x³ − 20x² + 23x + 10) ÷ (x − 5): 3x² × (x − 5) = 3x³ − 15x², bacha −5x² + 23x. Phir −5x × (x − 5) = −5x² + 25x, bacha −2x + 10. Phir −2 × (x − 5) = −2x + 10, bacha 0. Quotient 3x² − 5x − 2, wahi quadratic ✅. Teesra relation: 5 × 2 + 2 × (−1/3) + (−1/3) × 5 = 10 − 2/3 − 5/3 = 23/3 = c/a ✅

### Example 8: do zero diye hain, to teesra

2x³ − x² − 25x − 12 ke do zero 4 aur −3 hain. Teesra zero dhundo.

Yahan a = 2, b = −1. Zeros ka jod = −b/a = 1/2. 4 + (−3) = 1, to teesra zero γ = 1/2 − 1 = **−1/2**.

**Jaanch:** teeno ka guna: 4 × (−3) × (−1/2) = 6, aur −d/a = 12/2 = 6 ✅. Do-do ka guna-jod: (4)(−3) + (−3)(−1/2) + (−1/2)(4) = −12 + 3/2 − 2 = −25/2 = c/a ✅

---

## Part D: Jab zeros AP ya GP mein hon

Polynomial ke coefficients ke liye a aur d ke naam pehle se use ho rahe hain, to AP ke liye beech wale zero ko **m** aur gap ko **h** kehte hain.

**AP wale zeros:** zero m − h, m, m + h (h gap hai). Inka jod = (m − h) + m + (m + h) = **3m**. Gap h jod mein kat jaata hai, aur beech wala zero seedha mil jaata hai.

### Example 9: AP mein teen zero

x³ − 12x² + 39x − 28 ke teeno zero AP mein hain. Zero dhundo.

- Jod: 3m = −b/a = 12, to **m = 4**.
- Guna: (m − h)(m)(m + h) = m(m² − h²), aur ye −d/a = 28 ke barabar hai (yahan d cubic ka constant term hai, gap nahi). To 4(16 − h²) = 28, 16 − h² = 7, **h² = 9**, h = 3.

Zeros: 4 − 3, 4, 4 + 3 = **1, 4, 7**.

```
+----O----+----+----O----+----+----O----+
0    1    2    3    4    5    6    7    8
```

> **Figure 4.3** – Example 9 ke zero 1, 4, 7 number line par. O zero hain. Har kadam 3 ke gap par hai, beech wala zero 4 hai.

**Jaanch:** p(4) = 64 − 192 + 156 − 28 = 0 ✅. Do-do ka guna-jod: 1 × 4 + 4 × 7 + 7 × 1 = 4 + 28 + 7 = 39 = c/a ✅. Guna: 1 × 4 × 7 = 28 ✅

**Ek extra: GP wale zeros.** Zero m/r, m, mr ho to teeno ka guna = (m/r) × m × (mr) = **m³**. Yaani guna se seedha beech wala zero mil jaata hai.

### Example 10 (extra): GP mein teen zero

x³ − 13x² + 39x − 27 ke zero GP mein hain. Zero dhundo.

Guna = −d/a = 27, to m³ = 27, aur **m = 3** (beech wala zero). Jod 13, to baaki do ka jod 13 − 3 = 10. Do-do ke guna-jod 39 mein se m × (baaki do ka jod) = 3 × 10 = 30 hat jaata hai, aur baaki do ka guna 39 − 30 = 9 rehta hai. Jod 10 aur guna 9 wala quadratic: x² − 10x + 9 = (x − 1)(x − 9).

Zeros: **1, 3, 9**.

**Jaanch:** p(3) = 27 − 117 + 117 − 27 = 0 ✅. Har baar ×3: 1 → 3 → 9 ✅. Jod 1 + 3 + 9 = 13 ✅

---

## Part E: Anjaana coefficient dhundna

### Example 11: ek zero diya hai

2x³ − 11x² + kx + 15 ka ek zero 5 hai. k aur baaki zero dhundo.

p(5) = 0: 2 × 125 − 11 × 25 + 5k + 15 = 250 − 275 + 5k + 15 = 5k − 10 = 0, to **k = 2**.

Ab polynomial 2x³ − 11x² + 2x + 15. Baaki do zeros: jod 11/2 − 5 = 1/2, guna (−15/2) ÷ 5 = −3/2. Quadratic: x² − (1/2)x − 3/2, yaani 2x² − x − 3 = (2x − 3)(x + 1). Zeros **3/2 aur −1**.

**Jaanch:** do-do ka guna-jod: 5 × (3/2) + 5 × (−1) + (3/2)(−1) = 15/2 − 5 − 3/2 = 1 = c/a = 2/2 ✅

### Example 12: AP wala zero-sets mein k

x³ − 6x² + kx + 10 ke teeno zero AP mein hain. k aur zero dhundo.

Jod 6 = 3m, to **m = 2**. Guna = −10 (kyunki −d/a = −10), to 2(4 − h²) = −10, 4 − h² = −5, **h² = 9**, h = 3. Zeros 2 − 3, 2, 2 + 3 = **−1, 2, 5**.

Do-do ka guna-jod: (−1)(2) + (2)(5) + (5)(−1) = −2 + 10 − 5 = 3, aur ye k ke barabar hai. To **k = 3**.

**Jaanch:** p(x) = x³ − 6x² + 3x + 10. p(−1) = −1 − 6 − 3 + 10 = 0, p(2) = 8 − 24 + 6 + 10 = 0, p(5) = 125 − 150 + 15 + 10 = 0 ✅

### Example 13: do zero ek doosre ke ulte hon

x³ − 3x² + kx + 12 ke do zero ek doosre ke **ulte** (α aur −α) hain. k aur teeno zero dhundo.

Do zeros ka jod 0 hai, to teesra zero γ = −b/a − 0 = **3**. Teeno ka guna −12 hai: α × (−α) × 3 = −3α² = −12, to **α² = 4**, α = 2. Zero **2, −2, 3**.

k = do-do ka guna-jod = (2)(−2) + (−2)(3) + (3)(2) = −4 − 6 + 6 = **−4**.

**Jaanch:** p(x) = x³ − 3x² − 4x + 12. p(2) = 8 − 12 − 8 + 12 = 0, p(−2) = −8 − 12 + 8 + 12 = 0, p(3) = 27 − 27 − 12 + 12 = 0 ✅

---

## Part F: Dohra zero aur ek zaroori imaandari

### Dohra zero

Cubic ke "teen zero" kabhi kabhi do hi alag number hote hain. (x − 1)²(x + 4) lo. Bracket kholo:

(x − 1)²(x + 4) = (x² − 2x + 1)(x + 4) = x³ + 4x² − 2x² − 8x + x + 4 = **x³ + 2x² − 7x + 4**

Zero sirf **−4** aur **1** hain, par 1 ke liye (x − 1) **do baar** factor hai. To 1 **dohra zero** hai, aur relations mein use do baar gino: zeros −4, 1, 1. (Dohre zero mein α = β = 1 maan lo, to Part A ka expansion bilkul waisa hi chalta hai.)

- Jod: −4 + 1 + 1 = −2, aur −b/a = −2. ✓
- Do-do ka guna-jod: (−4)(1) + (1)(1) + (1)(−4) = −4 + 1 − 4 = −7, aur c/a = −7. ✓
- Guna: (−4)(1)(1) = −4, aur −d/a = −4. ✓

**Jaanch:** teeno relation mile ✅. Zero ek hi baar gino to jod −3 aata, jo −b/a = −2 se alag hai: dohra zero do baar gina zaroori hai.

Graph mein kya dikhta hai?

```
                         y
  18           *         |                        x    p(x)
  16      *              |                       -4      0  <- zero
  14                     |                       -3     16
  12                *    |                       -2     18
  10                     |                       -1     12
   8                     |                        0      4
   6                     |         *              1      0  <- zero
   4                     *                        2      6
   2                     |
   0 O-------------------+----O----- x
     -4   -3   -2   -1   0    1    2            
```

> **Figure 4.4** – y = x³ + 2x² − 7x + 4 ke points. x = −4 par curve x-axis ko kaat ke guzarti hai (p(−5) = −36 hai, yaani curve neeche se aati hai, jo is chhote hisse mein nahi dikha). x = 1 par 0 ke dono taraf p(0) = 4 aur p(2) = 6 hain, dono upar, yaani curve x-axis ko sirf chhoo kar wapas upar mudti hai. y-axis par har line 2 units ki hai.

Kyun chhoo kar mudti hai? p(x) = (x − 1)²(x + 4). (x − 1)² kabhi negative nahi hota, aur x = 1 ke aas-paas (x + 4) positive hai, to p(x) 1 ke dono taraf positive hai. Isliye curve x = 1 par x-axis ko paar nahi karti, sirf chhooti hai. **Dohra zero = graph chhoota hai.**

### Imaandari ka note: kab ye relations nahi lagte

Teen relation tab sach hain jab cubic ke **teeno zero real number hon** (dohre zero ko do baar gino). Har cubic aisa nahi hota. Cubic x³ + 3x − 4 lo. p(1) = 1 + 3 − 4 = 0, to (x − 1) factor hai aur

x³ + 3x − 4 = (x − 1)(x² + x + 4).

Ab x² + x + 4 = x(x + 1) + 4. Agar x ≥ 0 hai to dono x aur (x + 1) ≥ 0, to x(x + 1) ≥ 0. Agar x ≤ −1 hai to dono ≤ 0, to x(x + 1) ≥ 0. Agar −1 < x < 0 hai to x, −1 aur 0 ke beech hai aur x + 1, 0 aur 1 ke beech, to guna x(x + 1) > −1 × 1 = −1. Har haal mein x² + x + 4 > 3, kabhi 0 nahi. To is cubic ka **sirf ek** real zero hai, **1**.

Graph bhi yehi kehta hai: p(−2) = −18, p(−1) = −8, p(0) = −4, p(1) = 0, p(2) = 10. Curve x-axis ko sirf ek baar kaatti hai. Yahan −b/a = 0 hai, par zero ka jod sirf 1 hai. Relations yahan lagane ki koi baat hi nahi, kyunki teen real zero hain hi nahi. **Pehle dekho ki teen zero hain, tabhi relations lagao.** (Topic 1 ka "zyada se zyada teen zero" yahan kaam aata hai: cubic ke 1, 2 ya 3 zero ho sakte hain.)

---

## Aam galtiyan (bachke rehna)

**Galti 1: "αβγ = d/a" (sign bhool gaye)**

Cubic 2x³ + 3x² − 29x + 30 ke zero −5, 2 aur 3/2 hain (check: p(2) = 16 + 12 − 58 + 30 = 0). Ek bacche ne likha: αβγ = d/a = 30/2 = 15. Asli guna: (−5) × 2 × (3/2) = −15. Dono ka sign ulta hai!

Sahi relation αβγ = **−d/a** = −30/2 = −15. Aur zero ka jod bhi dekho: −5 + 2 + 3/2 = −3/2 = −b/a = −3/2. Pehle aur teesre dono relation mein **minus** hai, beech wale mein plus.

**Galti 2: "αβ + βγ + γα = b/a" (b aur c ko adal-badal kar diya)**

Cubic x³ + 3x² − 25x + 21 ke zero −7, 1 aur 3 hain (check: p(1) = 1 + 3 − 25 + 21 = 0). Bacche ne likha: αβ + βγ + γα = b/a = 3. Par asli jod: (−7)(1) + (1)(3) + (3)(−7) = −7 + 3 − 21 = −25. Sahi relation: c/a = **−25**.

b/a = 3 ka asli matlab? Wo to zeros ke jod ka ulta hai: −7 + 1 + 3 = −3, aur −b/a = −3. Yaad rakhne ka tareeka: **jod ke saath b, do-do ke guna ke saath c, teeno ke guna ke saath d**, aur signs −, +, −.

---

## Quick Recap

- Cubic ax³ + bx² + cx + d ke teen zero α, β, γ ho to **p(x) = a(x − α)(x − β)(x − γ)**. Isse bracket khol kar coefficients milaane se teen relation milte hain.
- **α + β + γ = −b/a**, **αβ + βγ + γα = c/a**, **αβγ = −d/a**. Signs −, +, −.
- Teen relation se zero nikaale bina bahut kuch pata chalta hai (jod, do-do ka guna-jod, guna), jaise box ka volume, frame aur kaanch.
- Teen zeros se cubic: x³ − (jod)x² + (do-do ka guna-jod)x − (guna), aur uska koi bhi non-zero multiple.
- Ek ya do zero diye hon to baaki relations se ya division se nikalte hain: ek zero ke baad baaki do ka jod aur guna nikaalo, to quadratic ban jaata hai.
- AP wale zeros m − h, m, m + h: jod 3m. GP wale zeros m/r, m, mr: guna m³.
- Anjaana coefficient: diye zero ko p(zero) = 0 mein rakho, ya relations mein condition (jaise do zero ulte) daalo.
- Dohra zero ko relations mein do baar gino, aur graph us par x-axis ko chhoota hai.
- Relations tab lagao jab teeno zero real hon. Cubic ka sirf ek real zero bhi ho sakta hai.
- Galtiyan: αβγ ko d/a likhna, aur do-do ke guna-jod ko b/a likhna.

---

## Practice Questions

1. Show that 2/3, −1 and 4 are zeros of 3x³ − 11x² − 6x + 8. Then verify all three relations between the zeros and the coefficients.

2. Without finding the zeros, write the sum of the zeros, the sum of the products of the zeros taken two at a time and the product of the zeros of 4x³ − 7x² − 21x + 18. Then check your answers using its zeros −2, 3/4 and 3.

3. Find a cubic polynomial whose zeros are −3, 1/4 and 2.

4. For a cubic polynomial, the sum of the zeros is 1, the sum of the products taken two at a time is −32 and the product of the zeros is −60. Form the cubic with leading coefficient 1 and find all its zeros.

5. Given that 2 is a zero of 2x³ + 5x² − 14x − 8, find the other two zeros using the relations between zeros and coefficients.

6. Two zeros of 2x³ − 13x² + 3x + 18 are 6 and −1. Find the third zero and check it with the product of the zeros.

7. The zeros of x³ + 12x² + 23x − 36 are in AP. Find them.

8. If −3 is a zero of 3x³ + kx² − 13x + 6, find k and the other two zeros.

9. The polynomial 2x³ − 5x² + kx + 80 has two zeros whose sum is 0. Find k and all three zeros.

10. Verify the three relations for x³ + x² − 16x + 20, whose zeros are 2, 2 and −5 (the zero 2 is counted twice). What does its graph do at x = 2, and why?

11. The length, breadth and height of a water tank in metres are the three zeros of 4x³ − 32x² + 81x − 63. Using the relations only, find its volume, the total length of its 12 edges and the total area of its six faces. Then confirm with the zeros 3/2, 3 and 7/2.

12. A student works with 2x³ − x² − 13x − 6, whose zeros are 3, −2 and −1/2. She writes αβγ = d/a = −3 and αβ + βγ + γα = b/a = −1/2. Find the two mistakes and write the correct values.

13. State True or False, with a reason:
    (a) If a cubic ax³ + bx² + cx + d with a = 1 has three positive zeros, then d is negative.
    (b) If the sum of the three zeros of a cubic is 0, then b = 0.
    (c) If one zero of a cubic is 0, then d = 0.
    (d) A cubic can have exactly two different zeros.
    (e) For every cubic ax³ + bx² + cx + d, the sum of its zeros is exactly −b/a.

### Answers

1. 3x³ − 11x² − 6x + 8: a = 3, b = −11, c = −6, d = 8.
   p(2/3) = 3 × 8/27 − 11 × 4/9 − 4 + 8 = 8/9 − 44/9 + 4 = −36/9 + 4 = 0. p(−1) = −3 − 11 + 6 + 8 = 0. p(4) = 192 − 176 − 24 + 8 = 0. Teeno zero hain.
   Jod: 2/3 − 1 + 4 = 11/3 = −b/a ✓.
   Do-do ka guna-jod: (2/3)(−1) + (−1)(4) + (4)(2/3) = −2/3 − 4 + 8/3 = −2 = c/a = −6/3 ✓.
   Guna: (2/3)(−1)(4) = −8/3 = −d/a ✓.
   Jaanch: teeno relation barabar ✅

2. a = 4, b = −7, c = −21, d = 18. Jod = −b/a = **7/4**. Do-do ka guna-jod = c/a = **−21/4**. Guna = −d/a = **−18/4 = −9/2**.
   Zeros se check: −2 + 3/4 + 3 = 7/4. (−2)(3/4) + (3/4)(3) + (3)(−2) = −3/2 + 9/4 − 6 = −6/4 + 9/4 − 24/4 = −21/4. (−2)(3/4)(3) = −9/2.
   Jaanch: teeno milte hain ✅

3. Jod: −3 + 1/4 + 2 = −3/4. Do-do ka guna-jod: (−3)(1/4) + (1/4)(2) + (2)(−3) = −3/4 + 1/2 − 6 = −25/4. Guna: (−3)(1/4)(2) = −3/2.
   Cubic: x³ + (3/4)x² − (25/4)x + 3/2. 4 se guna karke **4x³ + 3x² − 25x + 6** (ya iska koi bhi non-zero multiple).
   Jaanch: p(2) = 32 + 12 − 50 + 6 = 0. p(−3) = −108 + 27 + 75 + 6 = 0. p(1/4) = 4/64 + 3/16 − 25/4 + 6 = 1/16 + 3/16 − 100/16 + 96/16 = 0 ✅

4. Cubic: x³ − (1)x² + (−32)x − (−60) = **x³ − x² − 32x + 60**.
   p(2) = 8 − 4 − 64 + 60 = 0, to (x − 2) factor. (x³ − x² − 32x + 60) ÷ (x − 2) = x² + x − 30 (x² × (x − 2) = x³ − 2x², bacha x² − 32x. x × (x − 2) = x² − 2x, bacha −30x + 60. −30 × (x − 2) = −30x + 60, bacha 0). x² + x − 30 = (x + 6)(x − 5). Zeros **2, −6, 5**.
   Jaanch: jod 2 − 6 + 5 = 1 ✅. Do-do ka guna-jod: (2)(−6) + (−6)(5) + (5)(2) = −12 − 30 + 10 = −32 ✅. Guna: 2 × (−6) × 5 = −60 ✅

5. a = 2, b = 5, c = −14, d = −8. Zero 2 ke saath: baaki do ka jod = −5/2 − 2 = −9/2. Teeno ka guna = −d/a = 4, to 2 × βγ = 4, βγ = 2. Quadratic: x² + (9/2)x + 2, yaani 2x² + 9x + 4 = (2x + 1)(x + 4). Zeros **−1/2 aur −4**.
   Jaanch: do-do ka guna-jod: 2 × (−1/2) + 2 × (−4) + (−1/2)(−4) = −1 − 8 + 2 = −7 = c/a = −14/2 ✅. Division se: (2x³ + 5x² − 14x − 8) ÷ (x − 2) = 2x² + 9x + 4 ✅

6. a = 2, b = −13. Jod = 13/2. 6 + (−1) = 5, to teesra zero = 13/2 − 5 = **3/2**.
   Jaanch: guna: 6 × (−1) × 3/2 = −9 = −d/a = −18/2 ✅. Do-do ka guna-jod: (6)(−1) + (−1)(3/2) + (3/2)(6) = −6 − 3/2 + 9 = 3/2 = c/a = 3/2 ✅

7. Jod = −12 = 3m, to m = −4. Guna = −d/a = 36, to (−4)(16 − h²) = 36, 16 − h² = −9, h² = 25, h = 5. Zeros −4 − 5, −4, −4 + 5 = **−9, −4, 1**.
   Jaanch: do-do ka guna-jod: (−9)(−4) + (−4)(1) + (1)(−9) = 36 − 4 − 9 = 23 = c/a ✅. p(1) = 1 + 12 + 23 − 36 = 0 ✅

8. p(−3) = 0: 3(−27) + 9k + 39 + 6 = −81 + 9k + 45 = 9k − 36 = 0, to **k = 4**. Polynomial 3x³ + 4x² − 13x + 6. (3x³ + 4x² − 13x + 6) ÷ (x + 3): 3x² × (x + 3) = 3x³ + 9x², bacha −5x² − 13x. −5x × (x + 3) = −5x² − 15x, bacha 2x + 6. 2 × (x + 3) = 2x + 6, bacha 0. Quotient 3x² − 5x + 2 = (3x − 2)(x − 1). Zeros **2/3 aur 1**.
   Jaanch: jod −3 + 2/3 + 1 = −4/3 = −b/a ✅. Guna: (−3)(2/3)(1) = −2 = −6/3 = −d/a ✅

9. Do zeros ka jod 0 hai, to teesra zero = −b/a − 0 = 5/2. Guna = −d/a = −40: α × (−α) × 5/2 = −40, to (5/2)α² = 40, α² = 16, α = 4. Zeros **4, −4, 5/2**. k = a × (do-do ka guna-jod) = 2 × [(4)(−4) + (−4)(5/2) + (5/2)(4)] = 2 × (−16 − 10 + 10) = 2 × (−16) = **−32**.
   Jaanch: p(x) = 2x³ − 5x² − 32x + 80. p(4) = 128 − 80 − 128 + 80 = 0. p(−4) = −128 − 80 + 128 + 80 = 0. p(5/2) = 250/8 − 125/4 − 80 + 80 = 125/4 − 125/4 = 0 ✅

10. a = 1, b = 1, c = −16, d = 20. p(2) = 8 + 4 − 32 + 20 = 0 aur p(−5) = −125 + 25 + 80 + 20 = 0.
    Jod: 2 + 2 − 5 = −1 = −b/a ✓. Do-do ka guna-jod: (2)(2) + (2)(−5) + (−5)(2) = 4 − 10 − 10 = −16 = c/a ✓. Guna: 2 × 2 × (−5) = −20 = −d/a ✓.
    Graph x = 2 par x-axis ko **chhoota** hai (kaatta nahi). Kyunki p(x) = (x − 2)²(x + 5) aur (x − 2)² ≥ 0, aur 2 ke paas (x + 5) positive hai, to p(x) 2 ke dono taraf positive hai.
    Jaanch: (x − 2)²(x + 5) = (x² − 4x + 4)(x + 5) = x³ + 5x² − 4x² − 20x + 4x + 20 = x³ + x² − 16x + 20 ✅

11. a = 4, b = −32, c = 81, d = −63. L + B + H = 32/4 = 8. LB + BH + HL = 81/4. LBH = 63/4.
    **Volume** = 63/4 = **15.75 ghan metre**. **12 edges ki kul lambai** = 4 × 8 = **32 m**. **Chhe faces ka area** = 2 × 81/4 = 81/2 = **40.5 vargmetre**.
    Zeros se check: (3/2)(3)(7/2) = 63/4 ✓. 4(3/2 + 3 + 7/2) = 4 × 8 = 32 ✓. LB = 9/2, BH = 21/2, HL = 21/4, jod = 18/4 + 42/4 + 21/4 = 81/4, dugna 81/2 ✓.
    Jaanch: teeno jawab asli naap se mil gaye ✅

12. 2x³ − x² − 13x − 6: a = 2, b = −1, c = −13, d = −6.
    **Galti 1:** αβγ = −d/a, d/a nahi. Sahi: −(−6)/2 = **3**. Asli guna: 3 × (−2) × (−1/2) = 3 ✓.
    **Galti 2:** αβ + βγ + γα = c/a, b/a nahi. Sahi: **−13/2**. Asli jod: (3)(−2) + (−2)(−1/2) + (−1/2)(3) = −6 + 1 − 3/2 = −13/2 ✓.
    Jaanch: p(3) = 54 − 9 − 39 − 6 = 0 aur zeros ka jod 3 − 2 − 1/2 = 1/2 = −b/a ✅

13. (a) **True** ✅. Guna = −d/a = −d (a = 1). Teen positive zeros ka guna positive hai, to −d > 0, yaani d < 0.
    (b) **True** ✅. Jod = −b/a = 0 ka matlab b = 0.
    (c) **True** ✅. Guna = −d/a = 0, ya seedha p(0) = d, aur 0 zero hai to p(0) = 0.
    (d) **True** ✅. Jaise (x − 1)²(x + 4) (Part F) ke sirf do alag zero hain, −4 aur 1.
    (e) **False** ❌. Ye relation tab hai jab teeno zero real hon. Part F ka cubic x³ + 3x − 4 ka sirf ek zero 1 hai, par −b/a = 0.

---

Shabaash! Ab tum cubic ke coefficients ko dekhkar uske zeros ka jod, do-do ka guna-jod aur guna bata sakte ho, aur ulta, zeros se cubic bana sakte ho. Niyati ki parchi ka har number ek raaz rakhta tha, aur aaj tumne wo raaz kholna seekh liya.

**Aage kya?** Ab tak hum polynomial ko zeros se jod kar dekh rahe the. Topic 5 mein hum division algorithm par wapas jayenge, par is baar gehre sawaalon ke saath: dividend, divisor, quotient aur remainder mein se koi do diye hon to teesra kaise nikalte hain, aur jab divisor khud quadratic ho to kya hota hai. Wahan [Topic 5](polynomials-part5.md) mein milte hain.
