# Chapter: Polynomials (Part 2)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [polynomials.md](polynomials.md) se aage chalti hai** (wahan Topic 1 mein polynomial ka graph aaya aur dekha gaya ki zero wahi x hai jahan graph x-axis ko milta hai). Class 9 ka zero wala topic: [polynomials-part5.md](../../../class9/maths/polynomials/polynomials-part5.md).
> **Topics covered in this file:**
> 2. Quadratic Ke Zeros Aur Coefficients: Ek Anokha Rishta

---

# Topic 2: Quadratic Ke Zeros Aur Coefficients: Ek Anokha Rishta

Topic 1 mein tumne graph se dekha ki quadratic polynomial ka parabola x-axis ko 2 jagah kaat sakta hai, 1 jagah chhoo sakta hai, ya bilkul nahi mil sakta. Yani quadratic ke 2, 1 ya 0 zero hote hain. Ab ek naya sawaal: **jab quadratic ke do zero hon, to kya un do zeros ka us polynomial ke coefficients (a, b, c) se koi rishta hai?** Aaj hum dekhenge ki rishta hai, bahut sundar hai, aur hum use **saabit** bhi karenge.

---

## Ibrahim ki Annual Day wali kursiyan

Ibrahim ke school mein Annual Day hai. Hall mein kursiyan lagani hain, aur teacher ma'am ne Ibrahim ko ek parchi pakdai: "Kursiyan rows mein lagengi. Rows ki ginti aur har row ki kursiyon ki ginti ka jod 17 hona chahiye, aur kul kursiyan 60."

Ibrahim ne rows ki ginti x maani. To har row mein 17 − x kursiyan, aur kul kursiyan x(17 − x) = 60. Isse banta hai polynomial **x² − 17x + 60**, aur hume iska zero dhundhna hai. Class 9 ki tarah usne factorise kiya:

x² − 17x + 60 = (x − 5)(x − 12)

To zero hain 5 aur 12: 5 rows, har row mein 12 kursiyan (ya 12 rows aur 5 kursiyan).

Phir Ibrahim ruk gaya. "Arre, 5 + 12 = 17 aur 5 × 12 = 60. Ye wahi do number hain jo parchi mein the, aur polynomial mein bhi baithe hain: 17 aur 60!" Ma'am muskuraayin aur unhone doosri parchi di: **2x² − 9x + 10**. Ibrahim ne factorise kiya to zero mile 2 aur 5/2. Jod 2 + 5/2 = 9/2, guna 2 × 5/2 = 5. "Is baar 9 aur 10 seedhe nahi dikhte, par 9/2 aur 5 ... 10/2 = 5. Kuch to hai!"

Kya ye har quadratic ke saath hota hai? Aur agar haan, to kya hum **zero nikaale bina** hi unka jod aur guna bata sakte hain? Aaj yahi raaz khulega.

Do zeros ko hum **α** (alpha) aur **β** (beta) naam dete hain, taaki baar baar "pehla zero, doosra zero" na likhna pade.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Zeros ka jod (S)** | Quadratic ke do zeros α aur β ko jodne par jo number aaye: S = α + β | x² − 17x + 60 ke zeros 5 aur 12, to S = 17 |
| **Zeros ka guna (P)** | Do zeros ko aapas mein multiply karne par jo number aaye: P = αβ | Wahi zeros 5 aur 12, to P = 60 |
| **Coefficient milana** | Agar do polynomials x ki har value par barabar hon, to x² ka coefficient dono mein barabar, x ka coefficient dono mein barabar, aur constant term dono mein barabar | Agar px² + qx + r = 2x² − 9x + 10 har x par, to p = 2, q = −9, r = 10 |
| **Symmetric expression** | α aur β ka aisa expression jo α aur β ki jagah badal dene par bhi wahi value deta hai | α + β aur αβ symmetric hain; α − β nahi (badalne par β − α ban jaata hai) |

---

## Class 9 se yaad

Class 9 mein tum teen kaam seekh chuke ho. Pehla, **zero** wo number a hai jiske liye p(a) = 0 (aur degree n ke polynomial ke zyada se zyada n zero hote hain): [polynomials-part5.md](../../../class9/maths/polynomials/polynomials-part5.md). Doosra, **factor theorem**: p(a) = 0 tabhi jab (x − a) p(x) ka factor ho: [polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md). Teesra, quadratic ko **middle term todkar factorise** karna: [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md). Tab hum hamesha pehle factorise karte the, tab zero milte the. Aaj ka sawaal ulta hai: **zero nikaale bina kya pata chal sakta hai?**

---

## Part A: Pattern dhundho (4 quadratics)

Chaar quadratics lete hain, har ek ko Class 9 ki tarah factorise karte hain, zero nikalte hain, aur S, P dekhte hain.

**Example 1:** x² − 17x + 60 (Ibrahim wala).

Do number jinka guna 60 aur jod −17: −5 aur −12. To (x − 5)(x − 12). Zero: **5 aur 12**.

**Jaanch:** (x − 5)(x − 12) = x² − 12x − 5x + 60 = x² − 17x + 60 ✅

**Example 2:** 2x² − 9x + 10.

a × c = 20. −9 ko −4 aur −5 mein todo (−4 × −5 = 20): 2x² − 4x − 5x + 10 = 2x(x − 2) − 5(x − 2) = (x − 2)(2x − 5). Zero: x − 2 = 0 se **2**, aur 2x − 5 = 0 se **5/2**.

**Jaanch:** (x − 2)(2x − 5) = 2x² − 5x − 4x + 10 = 2x² − 9x + 10 ✅

**Example 3:** 3x² + 4x − 4.

a × c = −12. 4 ko 6 aur −2 mein todo (6 × −2 = −12): 3x² + 6x − 2x − 4 = 3x(x + 2) − 2(x + 2) = (x + 2)(3x − 2). Zero: **−2 aur 2/3**.

**Jaanch:** (x + 2)(3x − 2) = 3x² − 2x + 6x − 4 = 3x² + 4x − 4 ✅

**Example 4:** 2x² − 3x − 2. (Isi ka graph bhi banayenge.)

a × c = −4. −3 ko −4 aur 1 mein todo: 2x² − 4x + x − 2 = 2x(x − 2) + 1(x − 2) = (x − 2)(2x + 1). Zero: **2 aur −1/2**.

**Jaanch:** (x − 2)(2x + 1) = 2x² + x − 4x − 2 = 2x² − 3x − 2 ✅

Ab graph. x ki kuch values daalkar p(x) = 2x² − 3x − 2 ke points nikale (neeche figure ke saath table hai) aur plot kiya. Jahan curve x-axis ko kaat-ta hai wahan O likha hai.

```
                        y
  12    *               :                                 x      p(x)
  11                    :                                 -2     12
  10                    :                                 -1.5   7
   9                    :                                 -1     3
   8                    :                                 -0.5   0    <- zero
   7        *           :                       *         0      -2
   6                    :                                 0.5    -3
   5                    :                                 1      -3
   4                    :                                 1.5    -2
   3            *       :                   *             2      0    <- zero
   2                    :                                 2.5    3
   1                    :                                 3      7
   0  --------------O-------------------O-----------> x
  -1                    :
  -2                    *           *
  -3                    :   *   *
        -2      -1      0       1       2       3
```

> **Figure 2.1** – y = 2x² − 3x − 2 ka graph. Curve x-axis ko x = −0.5 aur x = 2 par kaat-ta hai (O wale points), yani wahi do zero jo factorise karke mile the. Table beside mein har plotted point ki (x, p(x)) jodi hai.

Ab chaaron ka hisaab ek table mein:

| Polynomial | Zeros | S = α + β | P = αβ | −b/a | c/a |
|---|---|---|---|---|---|
| x² − 17x + 60 | 5, 12 | 17 | 60 | 17 | 60 |
| 2x² − 9x + 10 | 2, 5/2 | 9/2 | 5 | 9/2 | 5 |
| 3x² + 4x − 4 | −2, 2/3 | −4/3 | −4/3 | −4/3 | −4/3 |
| 2x² − 3x − 2 | 2, −1/2 | 3/2 | −1 | 3/2 | −1 |

(Teesri row mein S aur P ek hi number nikle, ye sirf sanyog hai.)

Dekho, har row mein **S = −b/a** aur **P = c/a**! Jahan polynomial ax² + bx + c hai. Chaar examples se pattern dikha, par chaar examples **saabit nahi** karte. Saabit karne ke liye "kyun" chahiye.

---

## Part B: Ye rishta kyun sach hai? (proof)

Maan lo ax² + bx + c (a ≠ 0) ke do alag zero α aur β hain.

**Kadam 1: factor nikalo.** α zero hai, to factor theorem (Class 9) se (x − α) factor hai: p(x) = (x − α) × q(x). p ki degree 2 hai, to q(x) ki degree 1 hai, aur uska leading coefficient a hi hoga (taaki x² ka coefficient a bane). Likho q(x) = ax + r.

**Kadam 2: doosra zero.** β bhi zero hai: p(β) = (β − α) × q(β) = 0. Par β ≠ α, to β − α ≠ 0, isliye **q(β) = 0**. Yani aβ + r = 0, r = −aβ, aur q(x) = a(x − β). To

**p(x) = a(x − α)(x − β)**

**Kadam 3: expand karo.**

a(x − α)(x − β) = a[x² − αx − βx + αβ] = ax² − a(α + β)x + aαβ

**Kadam 4: dono roop milao.** Humne p(x) ko do tarah likha: ax² + bx + c aur ax² − a(α + β)x + aαβ. Dono har x par barabar hain.

```
  a(x − α)(x − β)  =  a x²  −  a(α + β) x  +  a αβ
  ax² + bx + c     =  a x²  +  b x         +  c
                               ^              ^
                               b = −a(α + β)
                                              c = a αβ
```

> **Figure 2.2** – Ek hi polynomial ke do roop upar neeche likhe hain. Neeche wali pankti ke b aur c, upar wali ke −a(α + β) aur aαβ ke saamne hain.

Ab **coefficient milana** ka niyam. Kyun chalta hai? Dono ka antar: ax² + bx + c − [ax² − a(α + β)x + aαβ] = [b + a(α + β)]x + [c − aαβ]. Ye antar **har x par 0** hai. Par ek non-zero polynomial jiski degree 1 se zyada nahi, uske zyada se zyada 1 zero ho sakta hai (Class 9 ka "degree n ke zyada se zyada n zero"). Yahan to har x zero hai, yani anginat zero. To ye antar non-zero ho hi nahi sakta: dono coefficients 0 honge. Yaani

b + a(α + β) = 0 aur c − aαβ = 0

Isse (a ≠ 0 se divide karke):

> **Quadratic ke zeros aur coefficients ka rishta:** ax² + bx + c ke zeros α aur β ho to
> **S = α + β = −b/a** aur **P = αβ = c/a**

**Jaanch (ek number se):** 2x² − 9x + 10 = 2(x − 2)(x − 5/2). Pehle (x − 2)(x − 5/2) = x² − (5/2)x − 2x + 5 = x² − (9/2)x + 5. Ab 2 se guna: 2x² − 9x + 10 ✅. Yani Part A ke Example 2 mein ye roop bilkul sahi baitha.

**Ek zaroori honesty note.** Ye rishta tab kaam karta hai jab quadratic ke zero ho (graph x-axis ko mile). Jis quadratic ka graph x-axis ko milta hi nahi (jaise 3x² + 2, jo hamesha 2 ya usse bada rehta hai), uska koi zero hai hi nahi, to "zeros ka jod" kis ka? Aur agar graph x-axis ko sirf ek jagah **chhoota** hai, to ek hi zero α hai. Tab Kadam 2 mein q(x) ka zero bhi α hi hoga (nahi to p ka ek aur zero mil jata, jabki graph ek jagah hi chhoota hai), aur p(x) = a(x − α)². Rishta tab bhi sahi hai, bas α ko **do baar** ginte hain: S = α + α, P = α × α. Iska example Part D mein aayega.

---

## Part C: Zero nikaale bina S aur P

Ab rishte ka asli maza: polynomial dekhkar seedha S = −b/a aur P = c/a likh do.

**Example 5:** 7x² − 11x + 3 ke zeros ka jod aur guna.

a = 7, b = −11, c = 3.
S = −b/a = −(−11)/7 = **11/7**
P = c/a = **3/7**

**Jaanch:** Zero hain bhi ya nahi? p(0) = 3 (positive), p(1) = 7 − 11 + 3 = −1 (negative), p(2) = 28 − 22 + 3 = 9 (positive). Graph 0 aur 1 ke beech x-axis ko kaatta hai, phir 1 aur 2 ke beech dobara. To ek zero 0 aur 1 ke beech, doosra 1 aur 2 ke beech: jod 1 aur 3 ke beech, guna 0 aur 2 ke beech. 11/7 lagbhag 1.57 aur 3/7 lagbhag 0.43 dono is range mein hain ✅

**Example 6:** −3x² + 2x + 7 ke zeros ka jod aur guna. (Yahan a negative hai: dhyan se.)

a = −3, b = 2, c = 7.
S = −b/a = −2/(−3) = **2/3**
P = c/a = 7/(−3) = **−7/3**

**Jaanch:** Polynomial ko −1 se guna karne par zero nahi badalte (kyunki −p(x) = 0 tabhi jab p(x) = 0). 3x² − 2x − 7 mein a = 3, b = −2, c = −7: S = 2/3, P = −7/3. Wahi answer ✅

**Example 7:** 5x² + 8x ke zeros ka jod aur guna. (Yahan c = 0 hai.)

a = 5, b = 8, c = 0.
S = −8/5, P = 0/5 = **0**.

**Jaanch:** 5x² + 8x = x(5x + 8), zero **0 aur −8/5**. Jod −8/5 ✅, guna 0 × (−8/5) = 0 ✅. (P = 0 ka matlab hi ye hai ki ek zero 0 hai.)

---

## Part D: Jab zero irrational ya ek hi ho

Rishta tab bhi sahi hai jab zero fraction ya √ wale hon. Neeche ke do examples mein zero **diye hue** hain: ye kaise milte hain, wo Chapter 3 (Quadratic Equations) ka kaam hai. Abhi hum bas check karte hain.

**Example 8:** x² − 8x + 5 ke zero 4 + √11 aur 4 − √11 hain. Rishta check karo.

Pehle ye zero hain bhi? x = 4 + √11 daalo: (4 + √11)² = 16 + 8√11 + 11 = 27 + 8√11.
p(4 + √11) = 27 + 8√11 − 8(4 + √11) + 5 = 27 + 8√11 − 32 − 8√11 + 5 = 0
(4 − √11 ke liye bhi bilkul aise, bas √11 ke sign ulte, wahi 0 aata hai.)

Ab S aur P:
S = (4 + √11) + (4 − √11) = **8** (√11 aapas mein kat gaya), aur −b/a = −(−8)/1 = 8
P = (4 + √11)(4 − √11) = 16 − 11 = **5**, aur c/a = 5/1 = 5

**Jaanch:** dono zero p(x) mein daalne par 0 aaya, aur S = 8, P = 5 coefficients se mile ✅

**Example 9:** 2x² − 6x + 3 ke zero (3 + √3)/2 aur (3 − √3)/2 hain. Rishta check karo.

x = (3 + √3)/2 daalo: 2 × [(3 + √3)/2]² = (3 + √3)²/2 = (12 + 6√3)/2 = 6 + 3√3. Phir −6 × (3 + √3)/2 = −9 − 3√3. Jodo: 6 + 3√3 − 9 − 3√3 + 3 = 0 (doosre zero ke liye bhi aise hi).

S = [(3 + √3) + (3 − √3)]/2 = 6/2 = **3**, aur −b/a = 6/2 = 3
P = [(3 + √3)(3 − √3)]/4 = (9 − 3)/4 = **3/2**, aur c/a = 3/2

**Jaanch:** zero daalne par 0 aaya, aur S = 3, P = 3/2 coefficients se mile ✅

**Example 10:** 4x² − 4x + 1 ka graph x-axis ko ek hi jagah chhoota hai. Rishta check karo.

4x² − 4x + 1 = (2x − 1)². Ek hi zero hai: 1/2. Part B ke honesty note ke hisaab se isse do baar ginte hain: α = β = 1/2.
S = 1/2 + 1/2 = **1**, aur −b/a = 4/4 = 1
P = (1/2)(1/2) = **1/4**, aur c/a = 1/4

**Jaanch:** (2x − 1)² = 4x² − 4x + 1 ✅

---

## Part E: Symmetric expressions: S aur P se bahut kuch

Maan lo tumhe α² + β² chahiye, par zero irrational hain ya gande fraction hain. Kya zero nikaalna zaroori hai? Nahi! Kuch expressions S aur P se seedhe mil jaate hain. Par sab nahi: sirf **symmetric** wale, yaani jinki value α aur β ki jagah badalne par nahi badalti. Kyun? Kyunki S aur P khud symmetric hain (α + β = β + α aur αβ = βα), to unse jo bhi bane wo bhi symmetric hi hoga. α − β jaisa expression order par depend karta hai (badalne par β − α, jo ulta sign hai), isliye wo S aur P se nahi milta. Haan, (α − β)² symmetric hai.

**Paanch formula (P ≠ 0 jahan zaroori ho):**

| Expression | S aur P mein |
|---|---|
| α² + β² | S² − 2P |
| 1/α + 1/β | S/P |
| (α − β)² | S² − 4P |
| α³ + β³ | S³ − 3PS |
| α²β + αβ² | PS |

**Proof:**
- (α + β)² = α² + 2αβ + β². To α² + β² = (α + β)² − 2αβ = S² − 2P.
- 1/α + 1/β = (β + α)/(αβ) = S/P. (Common denominator αβ; isliye P ≠ 0.)
- (α − β)² = α² − 2αβ + β² = (α² + β²) − 2αβ = (S² − 2P) − 2P = S² − 4P.
- (α + β)³ = α³ + 3α²β + 3αβ² + β³ = α³ + β³ + 3αβ(α + β). To α³ + β³ = S³ − 3PS.
- α²β + αβ² = αβ(α + β) = PS.

**Example 11:** 5x² − 8x − 4 ke liye paanchon expression, pehle S aur P se, phir zero se milao.

S = 8/5, P = −4/5.
- α² + β² = (8/5)² − 2(−4/5) = 64/25 + 8/5 = 64/25 + 40/25 = **104/25**
- 1/α + 1/β = (8/5)/(−4/5) = **−2**
- (α − β)² = 64/25 − 4(−4/5) = 64/25 + 80/25 = **144/25**
- α³ + β³ = (8/5)³ − 3(−4/5)(8/5) = 512/125 + 96/25 = 512/125 + 480/125 = **992/125**
- α²β + αβ² = (−4/5)(8/5) = **−32/25**

**Jaanch:** 5x² − 8x − 4 = (5x + 2)(x − 2), zero 2 aur −2/5 (α = 2, β = −2/5).
α² + β² = 4 + 4/25 = 104/25 ✅. 1/α + 1/β = 1/2 − 5/2 = −2 ✅. (α − β)² = (12/5)² = 144/25 ✅. α³ + β³ = 8 − 8/125 = 992/125 ✅. α²β + αβ² = 4(−2/5) + 2(4/25) = −8/5 + 8/25 = −32/25 ✅

**Example 12 (irrational zeros):** Example 8 ke x² − 8x + 5 ke liye α² + β², (α − β)² aur α³ + β³ nikalo. (S = 8, P = 5.)

- α² + β² = 8² − 2(5) = 64 − 10 = **54**
- (α − β)² = 64 − 4(5) = 64 − 20 = **44**
- α³ + β³ = 8³ − 3(5)(8) = 512 − 120 = **392**

**Jaanch (seedhe zero se):** α = 4 + √11, β = 4 − √11.
α² + β² = (27 + 8√11) + (27 − 8√11) = 54 ✅. α − β = 2√11, to (α − β)² = 4 × 11 = 44 ✅. α³ + β³: (4 + √11)³ = 64 + 3(16)(√11) + 3(4)(11) + 11√11 = 196 + 59√11, aur (4 − √11)³ = 196 − 59√11, jod = 392 ✅

**Example 13 (irrational zeros):** Example 9 ke 2x² − 6x + 3 ke liye 1/α + 1/β aur α² + β² nikalo. (S = 3, P = 3/2.)

- 1/α + 1/β = S/P = 3/(3/2) = **2**
- α² + β² = 9 − 2(3/2) = 9 − 3 = **6**

**Jaanch (seedhe zero se):** α = (3 + √3)/2, β = (3 − √3)/2.
1/α + 1/β = 2/(3 + √3) + 2/(3 − √3) = 2[(3 − √3) + (3 + √3)]/[(3 + √3)(3 − √3)] = 2 × 6/6 = 2 ✅
α² + β² = [(3 + √3)² + (3 − √3)²]/4 = [(12 + 6√3) + (12 − 6√3)]/4 = 24/4 = 6 ✅

---

## Part F: S aur P se Class 9 ki factorising ki jaanch

Class 9 mein factorise karne ke baad hum multiply karke jaanch karte the. Ab ek doosri jaanch bhi hai: factorising se mile zeros ka S aur P rishte se milna chahiye. Sign ki galti turant pakad mein aati hai.

**Example 14:** 6x² − 7x − 20 ke zero.

Ek student ne factorise kiya (2x + 5)(3x − 4) aur likha zero hain **−5/2 aur 4/3**. Jaanch karo.

a = 6, b = −7, c = −20, to rishte se S = 7/6, P = −20/6 = −10/3.
Student ke zeros: S = −5/2 + 4/3 = −15/6 + 8/6 = **−7/6**. Ye 7/6 nahi hai: galti pakdi gayi. (P = (−5/2)(4/3) = −10/3 to sahi nikla, par S ka sign ulta hai.)

Sahi factorising: a × c = −120, −7 = −15 + 8 (−15 × 8 = −120): 6x² − 15x + 8x − 20 = 3x(2x − 5) + 4(2x − 5) = (2x − 5)(3x + 4). Zero **5/2 aur −4/3**.

**Jaanch:** S = 5/2 − 4/3 = 15/6 − 8/6 = 7/6 ✅, P = (5/2)(−4/3) = −10/3 ✅. Student ne jo kiya tha, (2x + 5)(3x − 4) = 6x² − 8x + 15x − 20 = 6x² + 7x − 20, yani wo to doosre polynomial ki factorising thi.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "α + β = b/a" (sign bhool gaye)**

Sahi: **α + β = −b/a**. Demonstration: 5x² − 11x + 2 lo. Student likhta hai S = b/a = −11/5. Ab zero se dekho: 5x² − 11x + 2 = (5x − 1)(x − 2), zero **1/5 aur 2**. Jod = 1/5 + 2 = **11/5**, minus wala nahi. Isliye S = −b/a = −(−11)/5 = 11/5. Dhyan do ki P mein koi sign nahi badalta: P = c/a = 2/5, aur (1/5) × 2 = 2/5

**Jaanch:** (5x − 1)(x − 2) = 5x² − 10x − x + 2 = 5x² − 11x + 2 ✅

**Galti 2: S aur P ke formula aapas mein badal dena (α + β = −c/a, αβ = −b/a)**

Sahi: **S = −b/a** (beech wala coefficient) aur **P = c/a** (aakhri constant). Demonstration: 2x² + 7x − 4 lo. Student likhta hai S = −c/a = 4/2 = 2 aur P = −b/a = −7/2. Zero se dekho: 2x² + 7x − 4 = (2x − 1)(x + 4), zero **1/2 aur −4**. Jod = 1/2 − 4 = **−7/2**, guna = (1/2)(−4) = **−2**. Student ke dono answer galat the (2 aur −7/2). Sahi: S = −7/2 = −b/a aur P = −4/2 = −2 = c/a

Ek chhota test jo hamesha kaam aata hai: agar c = 0 ho (jaise 10x² − 3x), to ek zero 0 hai, isliye P = 0 hona chahiye. Sahi formula P = c/a = 0 deta hai; ulta formula −b/a = 3/10 deta, jo galat hai (zero 0 aur 3/10 ka guna 0 hai).

**Jaanch:** (2x − 1)(x + 4) = 2x² + 8x − x − 4 = 2x² + 7x − 4 ✅

---

## Quick Recap

- Quadratic ax² + bx + c (a ≠ 0) ke do zero α aur β ho to **p(x) = a(x − α)(x − β)**: factor theorem se, dono zero ke liye.
- Expand karke coefficient milane par: **α + β = −b/a** aur **αβ = c/a**.
- Coefficient milana isliye chalta hai kyunki jo polynomial har x par 0 ho aur degree 1 se zyada na ho, wo zero polynomial hi hota hai.
- S aur P **zero nikaale bina** polynomial ke coefficients se mil jaate hain, a negative ho to bhi (sign dhyan se).
- Rishta fraction, irrational aur ek hi (do baar ginne wale) zero ke liye bhi sahi hai. Jis quadratic ka koi zero hi nahi, uske liye "zeros ka jod" ka matlab nahi.
- **Symmetric expressions** S aur P se milte hain: α² + β² = S² − 2P, 1/α + 1/β = S/P, (α − β)² = S² − 4P, α³ + β³ = S³ − 3PS, α²β + αβ² = PS.
- α − β symmetric nahi hai, par (α − β)² hai.
- S aur P ka rishta Class 9 ki factorising ki ek doosri jaanch bhi hai.

---

## Practice Questions

1. Without finding the zeros, write the sum and the product of the zeros of each polynomial:
   (a) 4x² + 9x + 2
   (b) 6x² − 11x + 4
   (c) 9x² + 6x
   (d) −5x² + 3x + 11

2. Factorise 6x² + x − 15, find its zeros, and verify that the sum and product agree with −b/a and c/a.

3. Show by substitution that 5 + √7 is a zero of x² − 10x + 18. Then, taking the other zero as 5 − √7, verify the sum and product relations.

4. Factorise 12x² − 5x − 2, find the zeros, and verify both relations.

5. The polynomial 3x² − 12x + 5 has zeros α and β. Without finding them, calculate α² + β², 1/α + 1/β and α³ + β³.

6. The zeros of 2x² + 5x − 9 are α and β. Find (α − β)², and hence |α − β|.

7. The polynomial 8x² − 6x − 5 has zeros −1/2 and 5/4. Find α²β + αβ² and α² + β² using the sum and product, and check both by putting in the zeros.

8. For the school hall, the number of rows and the number of seats per row are the two zeros of x² − 19x + 78. Without finding the zeros, say how many seats there are in all and how many rows plus seats-per-row there are. Then factorise and check.

9. State whether each statement is true or false, with a reason:
   (a) For ax² + bx + c, the sum of the zeros is b/a.
   (b) If c = 0 in ax² + bx + c, then 0 is a zero.
   (c) If the product of the zeros is positive, both zeros must be positive.
   (d) If a, b and c are all positive and the quadratic has two zeros, both zeros are negative.

10. The zeros of x² − 6x + 7 are 3 + √2 and 3 − √2. Find α³ + β³ using the formula, and then by cubing the zeros directly.

11. A student says the zeros of 4x² + 5x − 6 are 3/4 and 2. Use the sum of the zeros to show that this cannot be right, then find the correct zeros.

12. Which of these are symmetric expressions of α and β: α − β, α² + β², 1/α, (α − β)², α²β + αβ²? Give a reason for each.

### Answers

1. (a) a = 4, b = 9, c = 2. S = −9/4, P = 2/4 = **1/2**.
   **Jaanch:** 4x² + 9x + 2 = (x + 2)(4x + 1), zero −2 aur −1/4. Jod −9/4 ✅, guna 1/2 ✅
   (b) a = 6, b = −11, c = 4. S = 11/6, P = 4/6 = **2/3**.
   **Jaanch:** 6x² − 11x + 4 = (2x − 1)(3x − 4), zero 1/2 aur 4/3. Jod 3/6 + 8/6 = 11/6 ✅, guna 2/3 ✅
   (c) a = 9, b = 6, c = 0. S = −6/9 = **−2/3**, P = **0**.
   **Jaanch:** 9x² + 6x = 3x(3x + 2), zero 0 aur −2/3 ✅
   (d) a = −5, b = 3, c = 11. S = −3/(−5) = **3/5**, P = 11/(−5) = **−11/5**.
   **Jaanch:** −1 se guna karke 5x² − 3x − 11: S = 3/5, P = −11/5 ✅

2. a × c = −90. 1 = 10 − 9 (10 × −9 = −90): 6x² + 10x − 9x − 15 = 2x(3x + 5) − 3(3x + 5) = (3x + 5)(2x − 3). Zero **−5/3 aur 3/2**.
   **Jaanch (rishta):** Jod = −10/6 + 9/6 = −1/6, aur −b/a = −1/6 ✅. Guna = (−5/3)(3/2) = −5/2, aur c/a = −15/6 = −5/2 ✅
   **Jaanch:** (3x + 5)(2x − 3) = 6x² − 9x + 10x − 15 = 6x² + x − 15 ✅

3. x = 5 + √7: (5 + √7)² = 25 + 10√7 + 7 = 32 + 10√7. p = 32 + 10√7 − 10(5 + √7) + 18 = 32 + 10√7 − 50 − 10√7 + 18 = **0**, to 5 + √7 zero hai.
   **Jaanch (rishta):** Jod = (5 + √7) + (5 − √7) = **10**, aur −b/a = 10 ✅. Guna = 25 − 7 = **18**, aur c/a = 18 ✅

4. a × c = −24. −5 = −8 + 3 (−8 × 3 = −24): 12x² − 8x + 3x − 2 = 4x(3x − 2) + 1(3x − 2) = (3x − 2)(4x + 1). Zero **2/3 aur −1/4**.
   **Jaanch (rishta):** Jod = 8/12 − 3/12 = 5/12, aur −b/a = 5/12 ✅. Guna = (2/3)(−1/4) = −1/6, aur c/a = −2/12 = −1/6 ✅
   **Jaanch:** (3x − 2)(4x + 1) = 12x² + 3x − 8x − 2 = 12x² − 5x − 2 ✅

5. S = 12/3 = 4, P = 5/3.
   α² + β² = 16 − 2(5/3) = 16 − 10/3 = **38/3**
   1/α + 1/β = S/P = 4/(5/3) = **12/5**
   α³ + β³ = 64 − 3(5/3)(4) = 64 − 20 = **44**
   **Jaanch:** Zero hain bhi? p(0) = 5 (positive), p(1) = 3 − 12 + 5 = −4 (negative): graph x-axis ko kaatta hai, to zero hain. Aur (α + β)³ = 64 = α³ + β³ + 3αβ(α + β) = 44 + 3(5/3)(4) = 44 + 20 = 64 ✅

6. S = −5/2, P = −9/2. (α − β)² = S² − 4P = 25/4 + 18 = 25/4 + 72/4 = **97/4**. To |α − β| = **√97/2**.
   **Jaanch:** α² + β² = S² − 2P = 25/4 + 9 = 61/4, aur (α − β)² = (α² + β²) − 2P = 61/4 + 9 = 97/4 ✅

7. S = 6/8 = 3/4, P = −5/8.
   α²β + αβ² = PS = (−5/8)(3/4) = **−15/32**
   α² + β² = S² − 2P = 9/16 + 5/4 = 9/16 + 20/16 = **29/16**
   **Jaanch (zero daalkar):** α = −1/2, β = 5/4. α²β + αβ² = (1/4)(5/4) + (−1/2)(25/16) = 5/16 − 25/32 = 10/32 − 25/32 = −15/32 ✅. α² + β² = 1/4 + 25/16 = 4/16 + 25/16 = 29/16 ✅

8. a = 1, b = −19, c = 78. Rows + seats per row = S = **19**. Kul seats = rows × seats per row = P = **78**.
   **Jaanch:** x² − 19x + 78 = (x − 6)(x − 13): zero 6 aur 13. 6 + 13 = 19 ✅, 6 × 13 = 78 ✅

9. (a) **False.** S = −b/a, minus ke saath. Jaise x² − 9x + 20 = (x − 4)(x − 5): zero 4 aur 5, jod +9, jabki b = −9.
   (b) **True.** P = c/a = 0, to ek zero 0 hai. (Seedha: p(0) = c = 0.)
   (c) **False.** P > 0 ka matlab dono zero ek hi sign ke hain, par dono negative bhi ho sakte hain. Jaise 2x² + 9x + 7 = (x + 1)(2x + 7), zero −1 aur −7/2: guna 7/2 positive, par dono zero negative.
   (d) **True.** P = c/a > 0, to dono zero ek hi sign ke hain. S = −b/a < 0, to jod negative hai. Do ek hi sign ke number jinka jod negative ho, dono negative honge.

10. S = 6, P = 7. Formula se: α³ + β³ = S³ − 3PS = 216 − 3(7)(6) = 216 − 126 = **90**.
    **Jaanch (seedhe):** (3 + √2)³ = 27 + 3(9)(√2) + 3(3)(2) + 2√2 = 27 + 27√2 + 18 + 2√2 = 45 + 29√2. Aur (3 − √2)³ = 45 − 29√2. Jod = **90** ✅

11. Student ke zeros ka jod = 3/4 + 2 = 11/4. Par a = 4, b = 5 se S = −b/a = **−5/4**. Dono alag hain, to answer galat hai.
    Sahi: a × c = −24, 5 = 8 − 3 (8 × −3 = −24): 4x² + 8x − 3x − 6 = 4x(x + 2) − 3(x + 2) = (x + 2)(4x − 3). Zero **−2 aur 3/4**. (Student ne −2 ki jagah 2 likh diya tha.)
    **Jaanch:** S = −2 + 3/4 = −5/4 ✅, P = (−2)(3/4) = −3/2, aur c/a = −6/4 = −3/2 ✅

12. α − β: **symmetric nahi**, kyunki α aur β badalne par β − α milta hai, jo ulta sign hai (α ≠ β ho to alag).
    α² + β²: **symmetric**, badalne par β² + α², wahi.
    1/α: **symmetric nahi**, badalne par 1/β ban jaata hai.
    (α − β)²: **symmetric**, kyunki (β − α)² = (α − β)².
    α²β + αβ²: **symmetric**, badalne par β²α + βα² ban jaata hai, jo wahi hai.
    **Jaanch (ek number se):** α = 2, β = 3 lo. α − β = −1, par badalne par +1: alag ✅. (α − β)² = 1 aur (β − α)² = 1: same ✅

---

Tum ab kisi bhi quadratic ko dekhkar, bina ek bhi zero nikaale, bata sakte ho ki uske zeros ka jod aur guna kya hai, aur uske baad α² + β² jaisi cheezein bhi. Ibrahim ki parchi ka raaz ab tumhare paas hai: parchi mein likhe jod aur guna hi polynomial ke coefficients mein chhupe the.

Agle topic mein hum is rishte ko **ulta** chalayenge: zero (ya unka jod aur guna) pehle se diye hon, to un zeros wala polynomial khud kaise banaya jaaye.
