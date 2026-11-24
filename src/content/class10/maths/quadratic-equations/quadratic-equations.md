# Chapter: Quadratic Equations

> **Class:** 10 | **Subject:** Mathematics
> **Ye Class 10 Maths ka teesra chapter hai.** Pichhle chapter ki aakhri file ([polynomials-part6.md](../polynomials/polynomials-part6.md): Polynomials ka saar) se hum yahan aaye hain. Wahan tumne quadratic ke zeros graph se padhe aur unka jod aur guna coefficients se joda. Class 9 ka quadratic trinomial todna (middle term splitting): [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md).
> **Topics covered in this file:**
> 1. Quadratic Equation Kya Hoti Hai? Factorisation Se Hal

---

# Topic 1: Quadratic Equation Kya Hoti Hai? Factorisation Se Hal

Chapter 2 mein tumne quadratic polynomial ka parabola dekha, jo x-axis ko 2, 1 ya 0 jagah milta hai, aur zeros ke jod aur guna ka sundar rishta bhi saabit kiya. Par ek sawaal har baar adhoora reh gaya: graph se to zero lagbhag hi milta hai, **exact zero** kaise nikaalein? Class 9 ne quadratic trinomial todna sikhaya tha, par kisi sawaal ko "equation" banakar hal karne ka seedha tareeka nahi diya tha. Is chapter ka yahi kaam hai. Pehle topic mein hum dekhenge ki **quadratic equation** kya hoti hai, kahani se kaise banti hai, aur Class 9 ki factorising se kaise hal hoti hai.

---

## Kumud ke Papa ka sabzi wala plot

Kumud ke Papa ke paas ek rectangle jaisa sabzi ka plot hai. Gram sabha ke form mein unhe plot ki lambai aur chaudai likhni hai, par naapne wala fita kho gaya. Papa ko bas do baatein yaad hain: plot ke chaaron taraf **48 m ki taar ki fencing (baad)** lagi hai, aur plot ka **area 95 m²** hai.

Kumud ne socha, "Chaudai x m maan leti hoon." Fencing 48 m hai, yaani chaaron sides ka jod 48. Rectangle mein aamne-saamne ki sides barabar hoti hain, to chaudai aur lambai ka jod aadha, yaani 24 m. To lambai **24 − x** m.

```
           x  (chaudai)
    +----------------------+
    :                      :
    :     area = 95 m²     :   24 − x  (lambai)
    :                      :
    +----------------------+
    fencing: x + (24 − x) + x + (24 − x) = 48 m
```

> **Figure 1.1** – Kumud ka plot. Upar aur neeche ki side x m, baayein aur daayein ki side 24 − x m. Chaaron sides ka jod x + (24 − x) + x + (24 − x) = 48 m, jo fencing hai.

Area = lambai × chaudai, yaani **x(24 − x) = 95**. Kumud ne andaze lagaye: x = 8 par 8 × 16 = 128 (bahut zyada), x = 6 par 6 × 18 = 108 (phir bhi zyada). Phir usne socha, "Agar area aur bhi ajeeb hota to andaze lagate-lagate raat ho jaati. Koi pakka tareeka hona chahiye." Ye jo x(24 − x) = 95 likha gaya, ye ek **quadratic equation** hai, kyunki isme x² chhupa hai. Is topic mein hum ise todna seekhenge, aur plot ki lambai aur chaudai bhi nikaalenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Quadratic equation** | Aisi equation (jisme "=" ho) jisme anjaane x ki sabse badi power 2 ho | x² − 24x + 95 = 0 |
| **Standard form** | Quadratic equation ko ax² + bx + c = 0 ke roop mein likhna: sab terms ek taraf, doosri taraf 0, aur a ≠ 0 | x(24 − x) = 95 ka standard form x² − 24x + 95 = 0 |
| **Root (jad)** | Wo number jise x ki jagah rakhne par equation ki dono taraf barabar ho jaayein | 3x² + 11x − 4 = 0 ka ek root x = −4 hai |
| **Zero-product property** | Agar do numbers ka guna 0 hai, to unmein se kam se kam ek number 0 hai | (x − 5)(x − 19) = 0 se x − 5 = 0 ya x − 19 = 0 |
| **Repeated root** | Aisa root jo do baar aaye: equation ke dono factor ek jaise hon | 4x² − 12x + 9 = 0 ka root 3/2 do baar |
| **Pure quadratic** | Standard form mein b = 0 wali equation, yaani ax² + c = 0 | x² − 10 = 0 |
| **Incomplete quadratic (c = 0)** | Standard form mein c = 0 wali equation, yaani ax² + bx = 0 | 7x² − 28x = 0 |

---

## Class 9 aur Chapter 2 se yaad

- **Class 9 ki factorising:** quadratic trinomial ax² + bx + c ko todne ke liye pehle common factor, phir a × c ka guna aur b ka jod dekhkar middle term todna, phir grouping: [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md). Do squares ka farak a² − b² = (a + b)(a − b): [factorisation-part4.md](../../../class9/maths/factorisation/factorisation-part4.md).
- **Perfect square identities:** (a + b)² = a² + 2ab + b² aur (a − b)² = a² − 2ab + b²: [expansions.md](../../../class9/maths/expansions/expansions.md) (Part B aur Part C).
- **Chapter 2 se:** quadratic polynomial ka **zero** wo x hai jahan parabola x-axis ko milta hai ([polynomials.md](../polynomials/polynomials.md), Part B aur C), aur zeros α, β ke liye α + β = −b/a aur αβ = c/a ([polynomials-part2.md](../polynomials/polynomials-part2.md)). Wahan Ibrahim ki kursiyon ne x(17 − x) = 60 se polynomial banaya aur factorise kiya tha: yaani quadratic equation ka beej pehle se tha, ab hum use naam aur seedha tareeka dete hain.

---

## Part A: Quadratic equation kya hai?

Ab tak tumne polynomial (expression) dekha, jaise x² − 24x + 95. Isme "=" nahi hota. Jab hum kehte hain **p(x) = 0**, to ye **equation** ban jaati hai: sawal ye hai ki x ki kaun si values dono taraf ko barabar karti hain.

**Quadratic equation ka standard form:**

**ax² + bx + c = 0, jahan a, b, c real numbers hain aur a ≠ 0.**

**a ≠ 0 kyun?** Agar a = 0 ho, to ax² gayab ho jaata hai aur bacha bx + c = 0, jo seedhi **linear** equation hai. x² ka term hi quadratic ki pehchaan hai. Par b = 0 ya c = 0 ho sakte hain: x² − 10 = 0 mein b = 0, aur 7x² − 28x = 0 mein c = 0, phir bhi dono quadratic hain.

**Root aur zero ek hi cheez hain:** polynomial p(x) = ax² + bx + c ka **zero** wo number hai jahan p(x) = 0; equation ax² + bx + c = 0 ka **root** bhi wahi number hai. Bas naam badla: polynomial ke zero, equation ke root. Isliye root wahi jagah hai jahan parabola x-axis ko milta hai.

### Example 1: kaun quadratic hai, kaun nahi?

Har ek ko dekhne se pehle ek hi tareeka lagao: **bracket kholo, sab ek taraf lao, aur dekho x² bacha ya nahi.**

(a) 2x² − 7 = 0. Pehle se standard form mein hai: a = 2, b = 0, c = −7. **Quadratic.**

(b) x(x + 6) = 11. Bracket kholo: x² + 6x = 11, to **x² + 6x − 11 = 0**: a = 1, b = 6, c = −11. **Quadratic.**

(c) (x + 5)² = x² + 20. Left side: x² + 10x + 25 = x² + 20. Dono taraf se x² hata do: 10x + 5 = 0. x² **kat gaya**, bacha **linear**. **Quadratic nahi.** (Isse x = −1/2 milta hai.)

(d) x² + 1/x = 3. x ≠ 0 maan kar x se guna karo: x³ + 1 = 3x, yaani x³ − 3x + 1 = 0. Ab sabse badi power **3** hai. **Quadratic nahi** (cubic hai).

(e) 5 − x² = 0. Isko −x² + 5 = 0 bhi likh sakte hain: a = −1, b = 0, c = 5. **Quadratic.** (Dono taraf −1 se guna karo to x² − 5 = 0.)

**Jaanch:** x = 2 rakhkar (left − right) dekhte hain. (b) mein 2 × 8 − 11 = 5, aur x² + 6x − 11 = 4 + 12 − 11 = 5 ✅. (c) mein x = 1 par (1 + 5)² − (1 + 20) = 36 − 21 = 15, aur 10x + 5 = 15 ✅. (d) mein x = 2 par 4 + 1/2 − 3 = 3/2, aur (x³ − 3x + 1) ÷ x = (8 − 6 + 1) ÷ 2 = 3/2 ✅. (e) mein 5 − 4 = 1 aur −4 + 5 = 1 ✅.

**Seekh:** equation "dikhne mein" quadratic ho ya na ho, **saaf karne ke baad** jo sabse badi power bache, wahi uski degree hai. Hidden wale x² ko katwa dete hain: unhe pehle saaf karo.

---

## Part B: Kahani se equation banana

Kumud ki kahani mein hum x(24 − x) = 95 pehle hi bana chuke hain. Use standard form mein likhte hain.

### Example 2: Kumud ke plot ki equation

x(24 − x) = 95 ⇒ 24x − x² = 95. Sab kuch right side mein lao, taaki x² ka coefficient positive rahe: 0 = x² − 24x + 95.

**x² − 24x + 95 = 0** (a = 1, b = −24, c = 95).

**Jaanch:** x = 6 rakho. Plot ka area 6 × 18 = 108, jo 95 se 13 zyada hai: 108 − 95 = 13. Standard form mein 36 − 144 + 95 = −13. Dono 13 aur −13 hain, sirf sign ulta, kyunki humne dono taraf badli thi ✅.

### Example 3: ek aur plot

Kumud ke padosi ka plot bhi rectangle hai. Uski lambai chaudai ke **doguni se 3 m zyada** hai aur area **65 m²**. Equation banao.

Chaudai x m lo. Lambai 2x + 3 m. Area: x(2x + 3) = 65 ⇒ 2x² + 3x = 65 ⇒

**2x² + 3x − 65 = 0** (a = 2, b = 3, c = −65).

**Jaanch:** x = 5 rakho: lambai 2(5) + 3 = 13, area 5 × 13 = 65 ✅, aur 2(25) + 15 − 65 = 0 ✅. To x = 5 is equation ka ek root hai.

---

## Part C: Root ko jaanchna (bina hal kiye)

Kisi number ko x ki jagah rakhkar dekho ki equation sach banti hai ya nahi. Wahi **root ki pehchaan** hai.

### Example 4: kaun sa number root hai?

3x² + 11x − 4 = 0 ke liye jaancho: x = −4, x = 1/3, x = 1.

- x = −4: 3(16) + 11(−4) − 4 = 48 − 44 − 4 = **0**. Root hai.
- x = 1/3: 3(1/9) + 11/3 − 4 = 1/3 + 11/3 − 4 = 12/3 − 4 = **0**. Root hai.
- x = 1: 3 + 11 − 4 = **10**, jo 0 nahi. Root nahi hai.

**Jaanch:** −4 aur 1/3 ka jod −4 + 1/3 = −11/3 = −b/a ✅, aur guna (−4)(1/3) = −4/3 = c/a ✅. Chapter 2 ke ye rishte yahan bhi sahi baithte hain, aur do root mil gaye, jo quadratic ke liye kaafi hain (parabola x-axis ko zyada se zyada 2 jagah milta hai).

### Example 5: root diya hai, k dhundo

x = 2/3, equation 6x² + kx − 4 = 0 ka root hai. k aur doosra root dhundo.

Root hai, to x = 2/3 rakhne par equation sach banegi:

6(4/9) + k(2/3) − 4 = 0 ⇒ 8/3 + 2k/3 − 4 = 0.

3 se guna karo: 8 + 2k − 12 = 0 ⇒ 2k = 4 ⇒ **k = 2**. Equation: 6x² + 2x − 4 = 0.

Doosra root β: guna c/a = −4/6 = −2/3. (2/3)β = −2/3 ⇒ **β = −1**.

**Jaanch:** x = −1: 6 − 2 − 4 = 0 ✅. Jod: 2/3 + (−1) = −1/3, aur −b/a = −2/6 = −1/3 ✅.

---

## Part D: Factorisation se hal (zero-product ke saath)

### Zero-product property: ye kyun chalti hai?

Maan lo do numbers p aur q ka guna 0 hai: **p × q = 0.** Agar p ≠ 0 hai, to hum dono taraf p se divide kar sakte hain (p ≠ 0 hai, isliye ye allowed hai): q = 0. Yaani **ya to p = 0, ya q = 0** (ya dono). Koi teesra raasta nahi: do non-zero numbers ka guna kabhi 0 nahi ho sakta.

Isiliye equation ko pehle **standard form (ek taraf 0)** mein laate hain, phir factorise karte hain. Tab dono brackets ka guna 0 hota hai, aur zero-product property kahti hai ki **har bracket ko alag 0 ke barabar rakho.** Har bracket ek root deta hai, to do bracket se **do root**.

### Class 9 ki factorising 5 line mein

1. Pehle common factor nikalo. 2. a × c nikalo. 3. Aise do numbers dhundo jinka guna a × c aur jod b ho. 4. Middle term un do numbers se todo. 5. Grouping karke (px + q)(rx + s) banao. Detail: [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md).

```
+------------------------------------------------------+
: Equation ko ax² + bx + c = 0 mein likho (ek taraf 0) :
+------------------------------------------------------+
                            :
                            v
+------------------------------------------------------+
: Middle term todo: ac ka guna, b ka jod               :
+------------------------------------------------------+
                            :
                            v
+------------------------------------------------------+
: Grouping se (px + q)(rx + s) = 0 banao               :
+------------------------------------------------------+
                            :
                            v
+------------------------------------------------------+
: Har bracket ko 0 ke barabar rakho: do root           :
+------------------------------------------------------+
                            :
                            v
+------------------------------------------------------+
: Har root ko wapas daalkar Jaanch karo                :
+------------------------------------------------------+
```

> **Figure 1.2** – Factorisation se quadratic equation hal karne ke paanch kadam.

### Example 6: Kumud ka plot hal

x² − 24x + 95 = 0.

a × c = 95 (positive) aur b = −24 (negative), to dono numbers negative. 95 = 5 × 19 aur 5 + 19 = 24. To −5 aur −19:

x² − 5x − 19x + 95 = x(x − 5) − 19(x − 5) = (x − 5)(x − 19) = 0.

Zero-product se: x − 5 = 0 ya x − 19 = 0, yaani **x = 5 ya x = 19**.

**Kahani se milao:** chaudai 5 m ho to lambai 24 − 5 = 19 m. Chaudai 19 m ho to lambai 5 m: wahi plot, bas ghuma hua. Dono root ek hi plot ki do sides hain: **chaudai 5 m, lambai 19 m.** Area 5 × 19 = 95 m², jo diya hua tha.

```
  30  *                                                     *

  20
         *                                               *
  10

   0  -  -  O  -  -  -  -  -  -  -  -  -  -  -  -  -  O  -  -

 -10
               *                                   *
 -20
                  *                             *
 -30
                     *                       *
 -40                    *                 *
                           *           *
 -50                          *  *  *
      3     5     7     9     11    13    15    17    19    21
```

> **Figure 1.3** – p(x) = x² − 24x + 95 ka graph x = 3 se 21 tak (har * ek integer x par ek point, tick-numbers har doosre x ke neeche). O wo do jagah hain jahan graph x-axis ko milta hai: x = 5 aur x = 19. Yahi equation ke do root hain. Sabse neeche ka point x = 12 par −49 hai. Ye Chapter 2 ke "do zero wala parabola" ki tarah hai.

**Jaanch:** x = 5: 25 − 120 + 95 = 0 ✅. x = 19: 361 − 456 + 95 = 0 ✅. Jod 5 + 19 = 24 = −b/a ✅, guna 5 × 19 = 95 = c/a ✅. Fencing: 2(5 + 19) = 48 ✅.

### Example 7: a ≠ 1 wali equation

3x² + 11x − 4 = 0.

a × c = 3 × (−4) = −12 (negative), b = 11. Ek positive, ek negative number chahiye jinka guna −12 aur jod 11: **12 aur −1**.

3x² + 12x − x − 4 = 3x(x + 4) − 1(x + 4) = (x + 4)(3x − 1) = 0.

x + 4 = 0 ⇒ x = −4. 3x − 1 = 0 ⇒ x = 1/3.

**Roots: x = −4 aur x = 1/3** (Example 4 mein inhi do ko pakda tha; ab bina andaze ke nikala).

**Jaanch:** Jod −4 + 1/3 = −11/3 = −b/a ✅. Guna (−4)(1/3) = −4/3 = c/a ✅. Aur (3x − 1)(x + 4) = 3x² + 12x − x − 4 = 3x² + 11x − 4 ✅.

### Example 8: pehle standard form mein laao

(a) 5x² + 2x = 3. (b) x(2x − 7) = 15.

**(a)** 3 ko left mein lao: 5x² + 2x − 3 = 0. a × c = −15, b = 2: **5 aur −3**.
5x² + 5x − 3x − 3 = 5x(x + 1) − 3(x + 1) = (x + 1)(5x − 3) = 0.
**x = −1 ya x = 3/5.**

**(b)** Bracket kholo: 2x² − 7x = 15, to 2x² − 7x − 15 = 0. a × c = −30, b = −7: **−10 aur 3**.
2x² − 10x + 3x − 15 = 2x(x − 5) + 3(x − 5) = (x − 5)(2x + 3) = 0.
**x = 5 ya x = −3/2.**

**Jaanch:** (a) x = −1: 5 − 2 = 3 ✅. x = 3/5: 5(9/25) + 6/5 = 9/5 + 6/5 = 3 ✅. Jod −1 + 3/5 = −2/5 = −b/a ✅, guna −3/5 = c/a ✅. (b) x = 5: 5(10 − 7) = 15 ✅. x = −3/2: (−3/2)(−3 − 7) = (−3/2)(−10) = 15 ✅. Jod 5 − 3/2 = 7/2 = −b/a ✅, guna −15/2 = c/a ✅.

### Example 9: padosi ka plot hal (story check ke saath)

Example 3 ki equation: 2x² + 3x − 65 = 0.

a × c = −130, b = 3: **13 aur −10** (13 × (−10) = −130, 13 − 10 = 3).
2x² + 13x − 10x − 65 = x(2x + 13) − 5(2x + 13) = (2x + 13)(x − 5) = 0.
2x + 13 = 0 ⇒ x = −13/2. x − 5 = 0 ⇒ x = 5.

**Story check** (har root ko kahani se milana, ye aadat Topic 6 mein poori banegi): chaudai x m hai, to negative nahi ho sakti. x = −13/2 **reject**. **Chaudai 5 m, lambai 2(5) + 3 = 13 m.** Area 5 × 13 = 65 m², jo diya hua tha.

**Jaanch:** Equation ke dono root: jod 5 − 13/2 = −3/2 = −b/a ✅, guna 5 × (−13/2) = −65/2 = c/a ✅. Kahani ka sirf positive root rakha: 5 × 13 = 65 ✅.

---

## Part E: Khaas roop: aasaan raaste

Kuch equations ke roop aise hote hain ki hal ek hi line mein ho jaata hai.

| Roop | Kya karo | Roots |
|---|---|---|
| ax² + bx = 0 (c = 0) | x common nikalo: x(ax + b) = 0 | x = 0 aur x = −b/a |
| x² = k, k > 0 (ya ax² + c = 0) | Dono taraf square root | x = √k aur x = −√k |
| x² = 0 | Seedha | x = 0 (ek root, do baar) |
| Perfect square (ax + b)² = 0 | Ek bracket = 0 | x = −b/a (ek root, do baar) |

### Example 10: c = 0 wali equation

7x² − 28x = 0. 7x common: 7x(x − 4) = 0. Zero-product: 7x = 0 ya x − 4 = 0.

**x = 0 ya x = 4.**

Dhyan do: **0 bhi ek root ho sakta hai.** Jab c = 0 ho to x = 0 hamesha root hota hai (x = 0 rakhne par bas c bachta hai).

**Jaanch:** x = 0: 0 − 0 = 0 ✅. x = 4: 7(16) − 112 = 0 ✅. Jod 0 + 4 = 4 = 28/7 = −b/a ✅, guna 0 × 4 = 0 = c/a ✅.

### Example 11: b = 0 wali equation (x² = k)

**(a)** x² − 169 = 0 ⇒ x² = 169. Kaun se number ka square 169 hai? 13 ka, aur −13 ka bhi, kyunki (−13)(−13) = 169. **x = 13 ya x = −13.** Class 9 ke difference of squares se bhi: (x − 13)(x + 13) = 0, aur ye [factorisation-part4.md](../../../class9/maths/factorisation/factorisation-part4.md) wala hi tareeka hai.

**(b)** x² − 10 = 0 ⇒ x² = 10 ⇒ x = √10 ya x = −√10. 10 perfect square nahi hai, to √10 irrational hai ([real-numbers-part4.md](../real-numbers/real-numbers-part4.md)). Calculator se √10 ≈ 3.162, to **x ≈ 3.162 ya x ≈ −3.162**.

**Jaanch:** (a) 13² − 169 = 0 aur (−13)² − 169 = 0 ✅. Jod 0 = −b/a (b = 0), guna −169 = c/a ✅. (b) (√10)² = 10 ✅. Jod √10 + (−√10) = 0 = −b/a ✅, guna (√10)(−√10) = −10 = c/a ✅. Decimal check: 3.162 × 3.162 ≈ 10 (9.998, lagbhag 10) ✅.

**Aur agar x² = negative ho?** Jaise x² = −25. Kisi bhi real number ka square 0 ya positive hota hai, negative kabhi nahi, to **koi real root nahi.** (Aage ki class mein complex numbers aate hain; abhi hum yahin rukte hain.) Aur x² = 0 ka sirf ek root x = 0 hai.

### Example 12: perfect square

4x² − 12x + 9 = 0.

Pehchaan: 4x² = (2x)², 9 = 3², aur 2 × 2x × 3 = 12x. Beech ka term minus hai, to (a − b)² roop: **(2x − 3)² = 0** (identity (a − b)² = a² − 2ab + b²: [expansions.md](../../../class9/maths/expansions/expansions.md), Part C).

(2x − 3)(2x − 3) = 0 ⇒ 2x − 3 = 0 (dono brackets se ek hi baat).

**x = 3/2**, aur ye root **do baar** aaya hai: **repeated root.**

**Jaanch:** 4(9/4) − 12(3/2) + 9 = 9 − 18 + 9 = 0 ✅. Jod 3/2 + 3/2 = 3 = 12/4 = −b/a ✅, guna (3/2)(3/2) = 9/4 = c/a ✅. Chapter 2 ke Example 5 jaisa: parabola x-axis ko sirf ek jagah **chhoota** hai ([polynomials.md](../polynomials/polynomials.md), Part C), to ek hi root, do baar.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Dono taraf x se divide karke root 0 kho dena**

Equation 14x² = 6x. Ek bachcha dono taraf x se divide karta hai: 14x = 6 ⇒ x = 3/7. Use lagta hai ki ek hi root hai.

Sahi tareeka: 14x² − 6x = 0 ⇒ 2x(7x − 3) = 0 ⇒ **x = 0 ya x = 3/7.**

Check karo: x = 0 par 14(0) = 0 aur 6(0) = 0, dono taraf barabar. Yaani 0 sach mein root hai. Divide karne se kya hua? x se divide karna tab hi allowed hai jab x ≠ 0 ho. Par x = 0 bhi ek root ho sakta hai, aur divide karte hi usne **chupke se 0 ko hata diya**. Isliye **kabhi x se divide mat karo, x ko common factor ki tarah bahar nikalo.**

**Galti 2: x² = 64 se sirf x = 8 likhna**

x² = 64 par kai bacche x = 8 likh dete hain. Par (−8) × (−8) = 64 bhi hai, to **−8 bhi root hai**. Number line par 8 aur −8 zero se barabar doori par hain, aur dono ka square 64 hai. Sahi jawab: **x = 8 ya x = −8** (x = ±8).

Kahani mein jab x lambai ho, tab −8 ko story check se hata sakte ho. Par **equation ke root** do hi hote hain, aur pehle dono likho; phir kahani ke hisaab se chhaanto. Ye order ulta karne se root khone ka khatra hai.

---

## Quick Recap

- **Quadratic equation:** ax² + bx + c = 0, **a ≠ 0.** a = 0 ho to linear ban jaati hai. b = 0 ya c = 0 chalta hai.
- Hidden equations ko pehle **saaf karo** (bracket kholo, sab ek taraf lao). Agar x² kat jaaye to equation quadratic nahi hai.
- **Root = zero:** polynomial ka zero, equation ka root. Graph par wahi jagah jahan parabola x-axis ko milta hai. Root ko jaanchne ke liye x ki jagah rakhkar dekho ki equation sach banti hai.
- **Zero-product property:** p × q = 0 ⇒ p = 0 ya q = 0. Isliye equation ko pehle **ek taraf 0** karo.
- **Factorisation se hal:** standard form → todo → grouping → har bracket 0 → do root → Jaanch.
- **c = 0:** x(ax + b) = 0, roots 0 aur −b/a. **b = 0:** x² = k, roots ±√k (k > 0). **Perfect square:** ek root do baar.
- Jaanch ka dusra tareeka: **jod = −b/a** aur **guna = c/a** (Chapter 2).
- Kahani wale sawaal mein root rakhne ya hatane ka faisla **story check** se hota hai (negative lambai nahi ho sakti).
- Galtiyan: dono taraf x se divide karke root 0 kho dena, aur x² = k se sirf ek root likhna.

---

## Practice Questions

1. Decide whether each is a quadratic equation. If yes, write it in standard form and give a, b, c. If no, say what it reduces to.
   (a) 11 − x² = 2x
   (b) (x − 6)(x + 6) = 2x − 13
   (c) (2x + 1)² = 4x² + 7x
   (d) x(x² + 2) = x³ + 5x²

2. Which of x = −3, x = 5/2, x = 3/2 are roots of 2x² + x − 15 = 0? Show the substitution for each.

3. Solve by factorisation: 8x² + 14x − 15 = 0. Verify with the sum and product of the roots.

4. Solve 9x² + 9x = 10 after writing it in standard form.

5. Solve x(3x + 11) = 4x² − 26.

6. Solve 36x² + 12x + 1 = 0 and say how many different roots it has.

7. Solve 8x² + 36x = 0.

8. Solve: (a) 81x² − 16 = 0 (b) 5x² = 35. For (b) give the exact roots and decimals to 3 places (use √7 ≈ 2.646).

9. The length of a rectangular plot is 2 m less than three times its breadth, and its area is 40 m². Form the equation, solve it, and give the dimensions after a story check.

10. A rectangular field has fencing of 52 m and area 168 m². If one side is x m, write the equation for x, solve it and find both sides.

11. x = 3 is a root of 4x² − kx − 15 = 0. Find k and the other root.

12. A student solves 15x² = 21x by dividing both sides by x and writes x = 7/5. What is wrong? Give the correct roots.

13. True or False, with a reason:
    (a) The equation x² = 0 has exactly one root.
    (b) x = 0 is a root of 7x² − 5x = 0.
    (c) x² + 16 = 0 has two real roots.
    (d) kx² + 3x − 5 = 0 is a quadratic equation for every real number k.
    (e) If 0 is a root of ax² + bx + c = 0, then c = 0.

14. Solve 10x² − 3x − 4 = 0, and check the roots by the sum and product relations.

### Answers

1. (a) Sab ek taraf lao: 11 − x² − 2x = 0, ya x² + 2x − 11 = 0. **Quadratic**, a = 1, b = 2, c = −11.
   (b) (x − 6)(x + 6) = x² − 36, to x² − 36 = 2x − 13 ⇒ x² − 2x − 23 = 0. **Quadratic**, a = 1, b = −2, c = −23.
   (c) (2x + 1)² = 4x² + 4x + 1. Dono taraf 4x² kat jaata hai: 4x + 1 = 7x ⇒ 3x − 1 = 0. **Quadratic nahi, linear** hai (x = 1/3).
   (d) x(x² + 2) = x³ + 2x. Dono taraf x³ kat jaata hai: 2x = 5x² ⇒ 5x² − 2x = 0. **Quadratic**, a = 5, b = −2, c = 0.
   Jaanch: (a) x = 2: 11 − 4 − 4 = 3 aur x² + 2x − 11 = −3, ulta sign (sides badli) ✅. (b) x = 1: (−5)(7) − (2 − 13) = −35 + 11 = −24 aur 1 − 2 − 23 = −24 ✅. (c) x = 1/3: (5/3)² = 25/9 aur 4/9 + 7/3 = 25/9 ✅. (d) x = 1: right − left = 6 − 3 = 3 aur 5 − 2 = 3 ✅.

2. p(x) = 2x² + x − 15.
   x = −3: 2(9) − 3 − 15 = 18 − 18 = 0. **Root.**
   x = 5/2: 2(25/4) + 5/2 − 15 = 25/2 + 5/2 − 15 = 15 − 15 = 0. **Root.**
   x = 3/2: 2(9/4) + 3/2 − 15 = 9/2 + 3/2 − 15 = 6 − 15 = −9. **Root nahi.**
   Jaanch: roots −3 aur 5/2 ka jod −1/2 = −b/a ✅, guna −15/2 = c/a ✅.

3. a × c = −120, b = 14: **20 aur −6**.
   8x² + 20x − 6x − 15 = 4x(2x + 5) − 3(2x + 5) = (2x + 5)(4x − 3) = 0.
   **x = −5/2 ya x = 3/4.**
   Jaanch: jod −5/2 + 3/4 = −10/4 + 3/4 = −7/4 = −14/8 = −b/a ✅. Guna (−5/2)(3/4) = −15/8 = c/a ✅.

4. 9x² + 9x − 10 = 0. a × c = −90, b = 9: **15 aur −6**.
   9x² + 15x − 6x − 10 = 3x(3x + 5) − 2(3x + 5) = (3x + 5)(3x − 2) = 0.
   **x = −5/3 ya x = 2/3.**
   Jaanch: jod −5/3 + 2/3 = −1 = −9/9 ✅. Guna (−5/3)(2/3) = −10/9 ✅.

5. Bracket kholo: 3x² + 11x = 4x² − 26. Sab right mein lao: 0 = x² − 11x − 26, yaani x² − 11x − 26 = 0. a × c = −26, b = −11: **−13 aur 2**.
   x² − 13x + 2x − 26 = x(x − 13) + 2(x − 13) = (x − 13)(x + 2) = 0.
   **x = 13 ya x = −2.**
   Jaanch (original equation mein): x = 13: 13(39 + 11) = 650 aur 4(169) − 26 = 650 ✅. x = −2: (−2)(−6 + 11) = −10 aur 4(4) − 26 = −10 ✅.

6. 36x² = (6x)², 1 = 1², 2 × 6x × 1 = 12x. To (6x + 1)² = 0 ⇒ 6x + 1 = 0.
   **x = −1/6**, ek hi root (do baar). **Sirf 1 alag root.**
   Jaanch: 36(1/36) − 2 + 1 = 0 ✅. Jod −1/6 − 1/6 = −1/3 = −12/36 ✅, guna 1/36 = c/a ✅.

7. 4x(2x + 9) = 0 ⇒ 4x = 0 ya 2x + 9 = 0. **x = 0 ya x = −9/2.**
   Jaanch: x = −9/2: 8(81/4) + 36(−9/2) = 162 − 162 = 0 ✅. Jod −9/2 = −36/8 ✅, guna 0 = c/a ✅.

8. (a) 81x² = 16 ⇒ x² = 16/81 ⇒ **x = 4/9 ya x = −4/9**. (Ya (9x − 4)(9x + 4) = 0.)
   Jaanch: 81(16/81) = 16 ✅.
   (b) 5x² = 35 ⇒ x² = 7 ⇒ **x = √7 ya x = −√7**. Calculator se √7 ≈ 2.646, to **x ≈ 2.646 ya x ≈ −2.646**.
   Jaanch: (√7)² = 7, 5 × 7 = 35 ✅. Decimal: 2.646² ≈ 7.001, lagbhag 7 ✅.

9. Chaudai x m, lambai (3x − 2) m. Area: x(3x − 2) = 40 ⇒ 3x² − 2x − 40 = 0. a × c = −120, b = −2: **−12 aur 10**.
   3x² − 12x + 10x − 40 = 3x(x − 4) + 10(x − 4) = (x − 4)(3x + 10) = 0 ⇒ x = 4 ya x = −10/3.
   **Story check:** chaudai negative nahi ho sakti, to −10/3 reject. **Chaudai 4 m, lambai 3(4) − 2 = 10 m.**
   Jaanch: area 4 × 10 = 40 ✅, aur lambai 10 = 3 × 4 − 2 ✅.

10. Fencing 52 m, to ek chaudai aur ek lambai ka jod 26 m. Ek side x, doosri 26 − x. Area: x(26 − x) = 168 ⇒ 26x − x² = 168 ⇒ **x² − 26x + 168 = 0**.
    a × c = 168, b = −26, dono negative: 12 × 14 = 168 aur 12 + 14 = 26, to −12 aur −14.
    x² − 12x − 14x + 168 = x(x − 12) − 14(x − 12) = (x − 12)(x − 14) = 0 ⇒ x = 12 ya x = 14.
    **Story check:** dono positive hain aur ek-doosre ke saath jodi banate hain: sides **12 m aur 14 m.**
    Jaanch: area 12 × 14 = 168 ✅, fencing 2(12 + 14) = 52 ✅.

11. x = 3 rakho: 4(9) − 3k − 15 = 0 ⇒ 36 − 3k − 15 = 0 ⇒ 3k = 21 ⇒ **k = 7**. Equation 4x² − 7x − 15 = 0.
    Doosra root β: guna c/a = −15/4. 3β = −15/4 ⇒ **β = −5/4**.
    Jaanch: jod 3 − 5/4 = 7/4 = −b/a ✅. Factor: (x − 3)(4x + 5) = 4x² + 5x − 12x − 15 = 4x² − 7x − 15 ✅.

12. Galti: x se divide karne se x = 0 wala root kho gaya (x = 0 par 15(0) = 0 aur 21(0) = 0, to 0 sach mein root hai). Sahi: 15x² − 21x = 0 ⇒ 3x(5x − 7) = 0 ⇒ **x = 0 ya x = 7/5.**
    Jaanch: x = 7/5: 15(49/25) = 147/5 aur 21(7/5) = 147/5 ✅. x = 0: 0 = 0 ✅.

13. (a) **True** ✅. x² = 0 se x = 0, sirf ek number (repeated root: (x)(x) = 0 mein dono brackets wahi baat kehte hain).
    (b) **True** ✅. x = 0 rakho: 7(0) − 5(0) = 0. (Ya: 7x² − 5x = x(7x − 5), to roots 0 aur 5/7.)
    (c) **False** ❌. Kisi bhi real x ke liye x² ≥ 0, to x² + 16 ≥ 16, kabhi 0 nahi. Koi real root nahi.
    (d) **False** ❌. k = 0 par ye 3x − 5 = 0 ban jaati hai, jo linear hai. Quadratic tabhi hai jab k ≠ 0.
    (e) **True** ✅. x = 0 rakhne par a(0) + b(0) + c = c, aur wo 0 hona chahiye. To c = 0.

14. a × c = −40, b = −3: **−8 aur 5**.
    10x² − 8x + 5x − 4 = 2x(5x − 4) + 1(5x − 4) = (5x − 4)(2x + 1) = 0.
    **x = 4/5 ya x = −1/2.**
    Jaanch: jod 4/5 − 1/2 = 8/10 − 5/10 = 3/10 = −b/a ✅. Guna (4/5)(−1/2) = −4/10 = −2/5 = c/a ✅.

---

Shabaash! Tumne ab quadratic equation ko pehchaanna, kahani se banana, root jaanchna aur factorisation se hal karna sab seekh liya. Aur Kumud ke Papa ko ab fita nahi chahiye: unka plot **5 m chaudai aur 19 m lambai** ka hai, aur ye tumne sirf ek equation se nikaala.

**Aage kya?** Topic 2 mein hum aisi equations dekhenge jo shuru mein quadratic **nahi dikhti**, jaise jinme x neeche (denominator) mein ho ya brackets ke andar bracket ho, par thodi safai ke baad quadratic ban jaati hain. Wahan ek naya khatra bhi milega: kuch root aise bhi hote hain jinhe rakhna hi nahi hai.
