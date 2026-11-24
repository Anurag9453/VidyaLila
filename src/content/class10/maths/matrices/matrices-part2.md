# Chapter: Matrices (Part 2)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [matrices.md](matrices.md) se aage chalti hai** (wahan Topic 1 mein matrix ko numbers ka dabba, yaani rows aur columns mein saja hua table, uska order m × n, element ki position aur matrix ke alag-alag type dekhe). Chapter ki shuruaat: [matrices.md](matrices.md).
> **Topics covered in this file:**
> 2. Matrix Ke Saath Jod-Ghata Aur Barabari

---

# Topic 2: Matrix Ke Saath Jod-Ghata Aur Barabari

Topic 1 mein humne matrix ko **dekhna** seekha: rows aur columns, order m × n (pehle rows, phir columns), aur element ki jagah, jaise a₁₂ yaani pehli row aur doosra column. Par dabba sirf dekhne ke liye nahi hota. Is topic mein hum matrices ke saath **kaam** karna seekhenge: kab do matrices ko ek jaisa kaha jaye, unhe kaise jodein aur ghatayein, kisi number se kaise badha-ghatayein, aur ek chhupa hua matrix kaise dhundein.

---

## Jigar ki Mummy ke toy shop ke do outlet

Jigar ki Mummy ka ek toy shop hai, aur uske **do outlet** hain: ek purane bazaar mein aur ek naye mall mein. Har outlet ki register mein hafte ke teen din (Friday, Saturday, Sunday) ki bikri likhi jaati hai: ek row **toy car** ki aur ek row **puzzle** ki. Yaani har register ek 2 × 3 matrix hai (2 rows, 3 columns).

Sunday raat Jigar bazaar wale outlet ki register apni copy mein utaar raha tha. Papa ne dono pages dekhe aur poocha: "Kya dono bilkul ek jaise hain?" Jigar ne ek jagah 18 aur 15 aapas mein badal kar likh diye the. **Sawaal 1: do matrices ko 'barabar' kab kahenge?**

Phir Mummy ne kaha: "Dono outlet milakar Friday, Saturday, Sunday ko car aur puzzle kitne bike?" **Sawaal 2: do matrices ko jodein kaise?** Aur ye bhi: "Warehouse se kitna aur maal mangwaya, ya shop mein kitna bacha?" **Sawaal 3: ghatayein kaise?**

Agle hafte Diwali hai. Mummy ko lagta hai ki bikri normal hafte se **3 guna** hogi. **Sawaal 4: poori table ko 3 se kaise badhayein?** Aur aakhir mein Mummy ne ek paheli di: "Stock pehle itna tha, ab itna hai: warehouse se kya aaya?" **Sawaal 5: chhupa hua matrix kaise dhundein?**

Bazaar wale outlet ki register ye thi (P), aur mall wale ki ye (Q):

```
    [ 12  18  15 ]            [ 9  14  20 ]
P = [  7  11   9 ]        Q = [ 5   8   6 ]
```

> **Figure 2.1** – Dono outlet ki registers. Pehli row toy car, doosri row puzzle; teen columns Friday, Saturday, Sunday. P bazaar ka matrix hai, Q mall ka. Dono ka order 2 × 3 hai: pehle rows (2), phir columns (3).

Chalo, ek-ek sawaal ka jawab dhundte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Corresponding elements (jaise-jagah wale elements)** | Do matrices mein ek hi row aur ek hi column par baithe elements | P ki Saturday-puzzle wali 11 aur Q ki Saturday-puzzle wali 8 |
| **Barabar matrices** | Do matrices jinka order ek ho aur jinke har jaise-jagah wale elements barabar hon | [3 8; 5 1] aur [3 8; 5 1] |
| **Jod (sum) A + B** | Ek hi order ke do matrices ke jaise-jagah wale elements ko jodkar bana naya matrix | P + Q mein Friday ki car: 12 + 9 = 21 |
| **Antar (difference) A − B** | Ek hi order ke do matrices ke jaise-jagah wale elements ko ghatakar (A mein se B) bana naya matrix | Stock 19 mein se bika 6: 19 − 6 = 13 |
| **Scalar** | Ek aam number (jaise 3 ya ½), jisse poore matrix ko badhaya ya ghataya jata hai. Ye khud matrix nahi hota | 3 ek scalar hai |
| **Scalar se guna (3A jaisa)** | Matrix ke har element ko scalar se guna karke bana naya matrix | 3 × [6 9; 5 7] ka matlab har element ka teen guna |
| **Negative matrix −A (jod ka ulta)** | A ke har element ka sign badal dene se bana matrix. A mein −A jodne par zero matrix aata hai | A ka 7 hai to −A ka −7 |

---

## Topic 1 se yaad

- **Topic 1** ([matrices.md](matrices.md)): matrix ka order m × n hai, **pehle rows, phir columns**. Element ki jagah a₁₂ jaise likhi jaati hai: pehle row number, phir column number.
- **Zero matrix:** wo matrix jiska har element 0 hota hai. Hum use O likhte hain.
- Is topic mein A, B jaise letters har example mein **naye matrices** ke naam hain (jahan ek Part mein do matrices bane hain, wahan wo wahin batate hain).
- **Class 9 se:** do ordered pair (a, b) aur (c, d) tabhi barabar hote hain jab a = c aur b = d ([coordinate-geometry.md](../../../class9/maths/coordinate-geometry/coordinate-geometry.md)). Matrix mein bhi isi tarah kram aur jagah maayne rakhti hai.

---

## Part A: Do matrices kab barabar?

**Kyun:** Class 9 mein (3, 2) aur (2, 3) alag points the, kyunki pehla number x ka aur doosra y ka hota hai. Do ordered pair tabhi barabar jab **ek hi jagah wale** numbers barabar. Matrix mein jagah do cheezon se tay hoti hai: row aur column. Isliye do matrices tab barabar hongi jab:

1. unka **order ek ho** (warna kuch jagahen sirf ek matrix mein hongi, aur doosre matrix mein unki jodidar, yaani wahi row-column wali jagah, hogi hi nahi), **aur**
2. **har jagah** ka element dono mein barabar ho: a₁₁ = b₁₁, a₁₂ = b₁₂, aur isi tarah sab.

Dhyan do: sirf ek jaise **numbers** hona kaafi nahi, **jagah** bhi ek honi chahiye.

```
    [ 3  8 ]         [ 3  8 ]         [ 3  5 ]
A = [ 5  1 ]     B = [ 5  1 ]     C = [ 8  1 ]

    [ 1  2  3 ]         [ 1  2 ]
D = [ 4  5  6 ]     E = [ 3  4 ]
                        [ 5  6 ]
```

> **Figure 2.2** – Upar: A aur B barabar hain (order ek, har jagah ke element ek). A aur C mein wahi chaar numbers 3, 8, 5, 1 hain, par C ka c₁₂ = 5 hai jabki A ka a₁₂ = 8, isliye A aur C barabar nahi. Neeche: D aur E mein wahi chhe numbers 1 se 6 hain, par D ka order 2 × 3 aur E ka 3 × 2 hai, isliye barabar nahi.

Jab do matrices barabar likhi hon aur unme kuch unknown numbers hon, to **har jaise-jagah wale pair se ek equation** banti hai. Dono taraf ki equations hal karne se unknown mil jaate hain.

### Example 1: 2 × 2 matrices (unknown x aur y)

[2x + 1, 6; y − 4, 9] = [11, 6; 3, 9], yaani

```
[ 2x + 1  6 ]     [ 11  6 ]
[  y − 4  9 ]  =  [  3  9 ]
```

Dono ka order 2 × 2 hai, to barabar ho sakte hain. Jaise-jagah wale elements barabar karo:

- Pehli row, pehla column: 2x + 1 = 11, to 2x = 10 aur **x = 5**.
- Pehli row, doosra column: 6 = 6 (kuch nahi nikalta, bas sach hai).
- Doosri row, pehla column: y − 4 = 3, to **y = 7**.
- Doosri row, doosra column: 9 = 9.

**Jaanch:** x = 5 aur y = 7 daalo: 2 × 5 + 1 = 11 aur 7 − 4 = 3, to baayein taraf ka matrix [11 6; 3 9] aa gaya, jo dayein taraf ke barabar hai ✅.

### Example 2: 2 × 3 matrices (do unknown, do jodidar equations)

[x + y, 4, 10; 7, x − y, 2] = [12, 4, 10; 7, 6, 2]. Dono 2 × 3 hain. Jaise-jagah wale pair se: x + y = 12 (pehli row, pehla column) aur x − y = 6 (doosri row, doosra column). Baaki chaar jagah par 4, 10, 7, 2 dono taraf wahi hain.

Dono equation jodo: 2x = 18, to **x = 9**. Phir y = 12 − 9 = **3**.

**Jaanch:** 9 + 3 = 12 ✅ aur 9 − 3 = 6 ✅. Baaki chaar jagah pehle se barabar thi.

---

## Part B: Do matrices ko jodna aur ghatana

**Kyun:** Mummy ko Friday ki kul car bikri chahiye. Bazaar ki Friday car 12 aur mall ki Friday car 9, to kul 12 + 9 = 21. Mummy ne kabhi bazaar ki Friday car ko mall ki Sunday puzzle se nahi joda, kyunki wo alag cheez hai. **Ek hi cheez, ek hi din** ke numbers jode jaate hain, yaani ek hi row aur ek hi column wale (corresponding) elements. Yahi matrix ka jod hai:

> **A + B:** har jagah ke element ko uski jodidar jagah ke element se jodo. Sirf tab jab A aur B ka **order ek ho**; jod ka order bhi wahi rahega.

Order ek kyun chahiye? Agar ek matrix mein teen column ho aur doosre mein do, to teesre column ke numbers ka koi jodidar nahi hoga: jodein kiske saath? Isliye **alag order ke matrices ko jod ya ghata nahi sakte**.

### Example 3: dono outlet milakar kul bikri (story)

Jigar ke registers P aur Q (Figure 2.1) jodo. Dono 2 × 3 hain, to jod ban sakta hai aur wo bhi 2 × 3 hoga.

```
[ 12  18  15 ]     [ 9  14  20 ]     [ 21  32  35 ]
[  7  11   9 ]  +  [ 5   8   6 ]  =  [ 12  19  15 ]
```

> **Figure 2.3** – C = P + Q. Har element apni jodidar jagah ke element se juda: pehli row ka pehla 12 + 9 = 21, doosra 18 + 14 = 32, teesra 15 + 20 = 35; doosri row ka 7 + 5 = 12, 11 + 8 = 19, 9 + 6 = 15.

**Jaanch:** Saturday ki puzzle wali jagah dobara: 11 + 8 = 19 ✅.

**Story check:** C ki pehli row car ki hai: Friday 21, Saturday 32, Sunday 35 car dono outlet milakar bike. P ke saare numbers ka jod 72 hai, Q ke 62, aur C ke saare numbers ka jod 134 = 72 + 62. Matlab koi bikri na chhooti, na do baar gini gayi.

### Example 4: ghatana (shop mein kitna bacha?)

Subah ka stock matrix A hai: row 1 toy car, row 2 puzzle; column 1 bazaar outlet, column 2 mall outlet. Din bhar ki bikri matrix B hai. Shaam ko bacha hua stock C = A − B. Ghatane ka tareeka bhi jod jaisa hai: har jagah ka element, uski jodidar jagah ke element se ghata do (A mein se B).

```
    [ 19  15 ]       [  6  9 ]               [ 13  6 ]
A = [ 17  13 ]   B = [ 11  5 ]   C = A − B = [  6  8 ]
```

> **Figure 2.4** – Stock A mein se bikri B ghatao: 19 − 6 = 13, 15 − 9 = 6, 17 − 11 = 6, 13 − 5 = 8. Dono ka order 2 × 2 hai, antar bhi 2 × 2.

**Jaanch:** bikri aur bacha hua jodo, to subah ka stock wapas aana chahiye: B + C = A. Pehla element: 6 + 13 = 19 ✅, aur chautha: 5 + 8 = 13 ✅.

**Story check:** bacha hua koi bhi number negative nahi hai, jo asli stock ke liye theek hai (bikri stock se zyada nahi thi).

---

## Part C: Zero matrix, negative matrix aur sign wale elements

**Kyun:** numbers mein 0 wo cheez hai jise jodne se kuch nahi badalta (8 + 0 = 8), aur −8 wo hai jo 8 mein jodne par 0 de deta hai. Matrices mein bhi ye dono hote hain.

- **Zero matrix O** (Topic 1 se): A ke order ka wo matrix jiska har element 0 ho. Har jagah kuch nahi jodne par kuch nahi badalta: **A + O = A.**
- **Negative matrix −A:** A ke **har** element ka sign badal do (yaani A ko −1 se guna; scalar se guna Part D mein aayega). Har jagah a + (−a) = 0 aata hai, isliye **A + (−A) = O.** Ise A ka "jod ka ulta" bhi kahte hain.
- **Ghatana = negative jodna:** A − B aur A + (−B) ek hi cheez hai, kyunki 9 − 4 = 9 + (−4).

Is Part mein A = [7 −3; 4 −6] aur B = [2 5; −1 3] lo. Elements mein negative numbers aaye to bhi tareeka wahi hai: bas sign ka dhyan rakho.

```
    [ 7  −3 ]           [ −7  3 ]
A = [ 4  −6 ]      −A = [ −4  6 ]

[ 7  −3 ]     [ −7  3 ]     [ 0  0 ]
[ 4  −6 ]  +  [ −4  6 ]  =  [ 0  0 ]

    [  2  5 ]              [ 5  −8 ]
B = [ −1  3 ]      A − B = [ 5  −9 ]

           [ 7  −3 ]     [ −2  −5 ]     [ 5  −8 ]
A + (−B) = [ 4  −6 ]  +  [  1  −3 ]  =  [ 5  −9 ]
```

> **Figure 2.5** – Upar: A ke har element ka sign badla, to −A bana. Beech: A + (−A) har jagah 0 deta hai, yaani zero matrix O. Neeche: A − B ko A + (−B) ki tarah likhne par wahi jawab: 7 − 2 = 5, −3 − 5 = −8, 4 − (−1) = 5, −6 − 3 = −9.

**Jaanch:** A − B ka pehla element 7 − 2 = 5 aur A + (−B) ka pehla 7 + (−2) = 5 ✅. Aur B + (A − B) ka chautha element: 3 + (−9) = −6, jo A ka chautha hai ✅.

### Example 5: sign wale badlav (delivery aur wapsi)

Warehouse se kuch maal aaya aur kuch bik gaya ya wapas gaya. Badlav matrix B mein **positive** matlab maal aaya, **negative** matlab maal gaya. Purana stock A = [14 9; 12 6]. Naya stock = A + B.

```
[ 14  9 ]     [ 10  −4 ]     [ 24   5 ]
[ 12  6 ]  +  [ −3   7 ]  =  [  9  13 ]
```

**Jaanch:** doosri row, pehla column dobara: 12 + (−3) = 9 ✅.

**Story check:** naye stock ka koi element negative nahi, to ye asli situation ho sakti hai. Agar kabhi negative aata, to iska matlab hota ki hum stock se zyada maal bhej rahe the.

### Example 6: jod mein unknown (x aur y)

[x + 1, 5; 2, 3y] + [4, 2x; −1, y] = [8, 11; 1, 8]. Pehle baayein taraf ka jod likho, phir dayein se jaise-jagah barabar karo:

- Pehla element: x + 1 + 4 = 8, to **x = 3**.
- Doosra element: 5 + 2x = 11, to 2x = 6 aur x = 3 (wahi x, achchhi baat).
- Teesra element: 2 + (−1) = 1 (kuch nahi nikalta, sach hai).
- Chautha element: 3y + y = 8, to 4y = 8 aur **y = 2**.

**Jaanch:** x = 3 aur y = 2 daalo: pehla matrix [4 5; 2 6], doosra [4 6; −1 2], jod [8 11; 1 8] ✅.

Dhyan do: x do alag jagah se mila aur dono baar ek hi aaya, yahi ek achchhi jaanch bhi hai.

---

## Part D: Matrix ko scalar se badhana

**Kyun:** Diwali hafte ki bikri normal hafte se 3 guna maanni hai. Normal hafte ka matrix W (row 1 car, row 2 puzzle; column 1 Saturday, column 2 Sunday) lo. Teen guna hafta matlab W + W + W. Ye har jagah teen baar wahi number jodna hai: 6 + 6 + 6 = 3 × 6. Isliye W + W + W = 3W, jahan **har element ko 3 se guna** kiya gaya.

> **Scalar se guna:** 3A likhne par A ke **har ek** element ko 3 se guna karo. Order nahi badalta.

Yahan 3 ek aam **scalar** number hai, matrix nahi. (Do matrices ko aapas mein guna karna alag baat hai; wo Topic 3 mein.)

```
    [ 6  9 ]     [ 18  27 ]
3 × [ 5  7 ]  =  [ 15  21 ]
```

> **Figure 2.6** – W = [6 9; 5 7] ka 3W. Har element teen guna: 6 → 18, 9 → 27, 5 → 15, 7 → 21. Order 2 × 2 hi raha.

**Jaanch:** W + W + W ka pehla element: 6 + 6 + 6 = 18 ✅, aur chautha: 7 + 7 + 7 = 21 ✅.

**Story check:** Diwali ki Saturday ko 18 car, 15 puzzle ka andaaza, normal hafte ka teen guna, jaisa Mummy ne socha tha.

### Example 7: scalar fraction wala (do hafton ka average)

Do hafte ki bikri A = [13 15; 17 10] aur B = [7 7; 7 8] hai (row 1 car, row 2 puzzle; column 1 bazaar, column 2 mall). Average chahiye: ½(A + B).

```
        [ 20  22 ]                   [ 10  11 ]
A + B = [ 24  18 ]        ½(A + B) = [ 12   9 ]
```

Pehle A + B kiya (har jagah ke element jode), phir har element ka aadha liya. Har jod ek even number nikla, isliye aadhe poore number aaye.

**Jaanch:** pehla element dobara: (13 + 7) ÷ 2 = 10 ✅. Aur 2 × [10 11; 12 9] wapas karne par [20 22; 24 18] aata hai, jo A + B hai ✅.

### Example 8: scalar bahar nikalna

[12 18; 6 15] ko ek scalar ke guna ki tarah likho. Dekho, 12, 18, 6, 15 sab 3 ke multiple hain, to har element ko 3 se bhaag karke 3 bahar nikaal sakte hain:

```
[ 12  18 ]         [ 4  6 ]
[  6  15 ]  =  3 × [ 2  5 ]
```

**Jaanch:** 3 ko wapas andar guna karo: 3 × 4 = 12, 3 × 6 = 18, 3 × 2 = 6, 3 × 5 = 15 ✅. (Ye tabhi hota hai jab **har** element us number ka multiple ho.)

Ek khaas scalar: −1. (−1)A = −A, jo Part C mein dekha tha.

---

## Part E: Milakar combine karna (2A + 3B, 3A − 2B)

**Kyun:** Mummy ko kabhi ek outlet ka 2 guna aur doosre ka 3 guna ek saath chahiye. Naye matrices ban jaate hain: pehle har scalar se apna matrix guna karo, **phir** jod ya antar karo. Do hi kadam: (1) scalar se guna, (2) jod ya antar.

### Example 9: 2A + 3B aur 3A − 2B

A = [5 −1; 3 4] aur B = [1 2; −4 2].

```
     [ 10  −2 ]         [   3  6 ]              [ 13   4 ]
2A = [  6   8 ]    3B = [ −12  6 ]    2A + 3B = [ −6  14 ]

     [ 15  −3 ]         [  2  4 ]              [ 13  −7 ]
3A = [  9  12 ]    2B = [ −8  4 ]    3A − 2B = [ 17   8 ]
```

**Jaanch:** 2A + 3B ka pehla element: 2 × 5 + 3 × 1 = 13 ✅. 3A − 2B ka doosra element: 3 × (−1) − 2 × 2 = −3 − 4 = −7 ✅.

### Example 10: 2 × 3 matrices ke saath 3A − 2B

A = [4 0 −1; 6 2 5] aur B = [1 −2 3; 0 4 −1].

```
     [ 12  0  −3 ]         [ 2  −4   6 ]
3A = [ 18  6  15 ]    2B = [ 0   8  −2 ]

          [ 10   4  −9 ]
3A − 2B = [ 18  −2  17 ]
```

**Jaanch:** teesre column ka pehla element: 3 × (−1) − 2 × 3 = −3 − 6 = −9 ✅. Doosri row, doosra column: 3 × 2 − 2 × 4 = −2 ✅.

---

## Part F: Chhupa hua matrix dhundna (A + X = B aur 2X = C)

**Kyun:** Mummy ki paheli: "Pehle stock A tha, delivery X aayi, ab stock B hai." Hum X dhundna chahte hain. Numbers mein: 6 + (kuch) = 20 ho to kuch = 20 − 6. Yahan bhi har jagah wahi hota hai. Is Part mein chhupe matrix ka naam X hai, aur uske elements x₁₁, x₁₂, x₂₁, x₂₂ likhenge (pehle row, phir column).

> **A + X = B ⇒ X = B − A** (dono taraf se A ghata do: yaani jagah-jagah par B ka element minus A ka element).
> **2X = C ⇒ X = ½C** (har element 2x = c ban jaata hai, to x = c ÷ 2).

### Example 11: delivery kitni aayi?

Purana stock A = [6 12; 9 4], naya stock B = [20 15; 14 10]. Delivery X dhundo.

```
[ 6  12 ]     [ 14  3 ]     [ 20  15 ]
[ 9   4 ]  +  [  5  6 ]  =  [ 14  10 ]
```

> **Figure 2.7** – A + X = B. Har jagah ki equation: 6 + x₁₁ = 20, 12 + x₁₂ = 15, 9 + x₂₁ = 14, 4 + x₂₂ = 10. Isse X = B − A = [14 3; 5 6].

**Jaanch:** A + X wapas jodo: 6 + 14 = 20, 12 + 3 = 15, 9 + 5 = 14, 4 + 6 = 10, yaani B ✅.

**Story check:** delivery ke saare numbers positive hain, matlab maal aaya hi hai, gaya nahi; ye Mummy ki baat se milta hai.

### Example 12: 2X = C

C = [14 −6; 10 8]. Har jagah 2 × (x ka element) = (c ka element), to x = c ÷ 2:

```
        [ 14  −6 ]     [ 7  −3 ]
X = ½ × [ 10   8 ]  =  [ 5   4 ]
```

**Jaanch:** 2X = 2 × [7 −3; 5 4] = [14 −6; 10 8] = C ✅.

### Example 13: 2X − A = B

A = [3 −4; 6 1] aur B = [5 8; −2 9]. Pehle 2X akela karo: dono taraf A jodo, 2X = B + A. Phir aadha lo.

```
             [  5  8 ]     [ 3  −4 ]     [ 8   4 ]
2X = B + A = [ −2  9 ]  +  [ 6   1 ]  =  [ 4  10 ]

        [ 8   4 ]     [ 4  2 ]
X = ½ × [ 4  10 ]  =  [ 2  5 ]
```

**Jaanch:** 2X − A mein X daalo: 2 × [4 2; 2 5] = [8 4; 4 10], usmein se A ghatao: [8 − 3, 4 − (−4); 4 − 6, 10 − 1] = [5 8; −2 9] = B ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: alag order ke matrices jodna (ya sirf pehli row jodna)**

*Pehli galti:* ek bacche ne 2 × 2 matrix [3 5; 2 6] aur 2 × 3 matrix [4 1 8; 7 2 9] ko jodne ki koshish ki. Pehle do column to jud gaye, par teesra column (8 aur 9) ka koi jodidar hai hi nahi. Isliye ye jod **bana hi nahi sakta**. Hamesha pehle dono ka order dekho: 2 × 2 aur 2 × 3 alag hain. Jaanch: pehle matrix mein 2 column, doosre mein 3 column, yaani order alag, to jod nahi ✅.

*Doosri galti:* ek aur bacche ne [3 5; 2 6] + [4 1; 7 2] kiya, par sirf pehli row jodi aur doosri row wahi utaar di:

```
[ 3  5 ]     [ 4  1 ]     [ 7  6 ]
[ 2  6 ]  +  [ 7  2 ]  =  [ 2  6 ]   (galat)
```

Doosri row mein 2 + 7 aur 6 + 2 bhi jodne the. Sahi jawab:

```
[ 3  5 ]     [ 4  1 ]     [ 7  6 ]
[ 2  6 ]  +  [ 7  2 ]  =  [ 9  8 ]
```

**Jaanch:** doosri row dobara: 2 + 7 = 9 aur 6 + 2 = 8 ✅. Pehli row ka jod (3 + 4 = 7, 5 + 1 = 6) pehle se sahi tha.

**Galti 2: scalar se sirf ek element ko guna karna**

A = [2 5; 4 1] lo. 3A likhte waqt ek bacche ne sirf pehle element ko guna kiya aur baaki jaisa chhod diya:

```
    [ 2  5 ]     [ 6  5 ]
3 × [ 4  1 ]  =  [ 4  1 ]   (galat)
```

Check karo: 3A ka matlab A + A + A hai (ek bacche ne ye likhne ke baad dekha). Doosra element 5 + 5 + 5 = 15 aana chahiye, 5 nahi. Scalar **har element** ko guna karta hai. Sahi:

```
    [ 2  5 ]     [  6  15 ]
3 × [ 4  1 ]  =  [ 12   3 ]
```

**Jaanch:** A + A + A ka doosra element 5 + 5 + 5 = 15, teesra 4 + 4 + 4 = 12, chautha 1 + 1 + 1 = 3, aur pehla 2 + 2 + 2 = 6 ✅.

---

## Quick Recap

- Do matrices **barabar** hain agar **order ek ho** aur **har jaise-jagah wala element barabar** ho. Barabari se har jagah ki ek equation banti hai, jisse unknown milte hain.
- **A + B** aur **A − B** sirf tab, jab A aur B ka order ek ho; har jagah ka element apni jodidar jagah se jodo ya ghatao. Jawab ka order wahi.
- **Zero matrix O:** A + O = A. **Negative matrix −A:** har element ka sign badla; A + (−A) = O; A − B = A + (−B).
- **Scalar se guna:** 3A mein har element ko 3 se guna karo (A + A + A). Scalar khud matrix nahi, ek number hai. Common scalar bahar bhi nikala ja sakta hai.
- Combine (2A + 3B, 3A − 2B): pehle scalar se guna, phir jod ya antar.
- A + X = B se X = B − A; 2X = C se X = ½C; hamesha A + X ya 2X wapas jodkar jaanch lo.
- Aam galtiyan: alag order ya sirf pehli row jodna; scalar se sirf ek element ko guna karna.
- Ye saare niyam har jagah ke numbers ke jod, ghata aur guna se aate hain. Humne unhe examples se dekha aur samjha; ye ek example hai, pakka saboot nahi.

---

## Practice Questions

Check every answer by substituting back.

1. Say whether each pair is equal or not equal, with one reason.
   (a) [6 −1 8; 0 5 3] and [6 −1 8; 0 5 3].
   (b) [6 −1 8; 0 5 3] and [6 −1; 8 0; 5 3].
   (c) [4 9; 7 2] and [4 9; 2 7].
2. Find x and y if [x + 6, 3y; −2, 5] = [10, 15; −2, 5].
3. Find x and y if [2x, y + 1, 6; 4, x + y, 3x] = [8, 7, 6; 4, 10, 12].
4. For P = [15 −4 9; 2 11 −7] and Q = [6 8 −3; 10 −5 4], find P + Q and P − Q.
5. Matrix A has order 2 × 3, B has order 3 × 2, C has order 2 × 3 and D has order 2 × 2. Which pairs of these matrices can be added? Give the order of each sum.
6. Two branches of a stationery shop record sales of pens (row 1) and notebooks (row 2) on Monday, Tuesday and Wednesday. Branch 1: [16 9 13; 11 20 8]. Branch 2: [14 12 7; 6 15 10]. Find the combined sales, and also branch 1 minus branch 2. What do the negative entries in the second matrix tell you?
7. A shop's stock (row 1 caps, row 2 bags; column 1 old store, column 2 new store) is [16 11; 13 18]. A change matrix [−5 6; 8 −9] is added, where positive means received and negative means sent away. Find the new stock and say what the entry −5 means in words. Is the new stock realistic?
8. If A = [−4 7; 9 −2], find 3A and (−2)A.
9. Write [18 −12; 30 24] as 6 times a matrix.
10. For A = [2 −1 5; 4 0 −2] and B = [−1 3 3; 5 2 −2], find 2A + B and 3A − 2B.
11. Find X if A + X = B, where A = [9 −6; 2 14] and B = [3 8; −5 11].
12. Find X if 3X = C, where C = [15 −6 9; 0 21 −12].
13. Find X if 3X − A = B, where A = [1 −4 7; 5 2 −3] and B = [−4 16 5; 13 −2 −3].
14. Find x and y if [x + y, 6; 3, 2x] + [2, y; 5, x − y] = [12, 9; 8, 18].
15. A toy shop sold [13 9; 18 12] items in the first week and a total of [30 22; 25 31] items in the first two weeks (row 1 toy cars, row 2 puzzles; column 1 bazaar outlet, column 2 mall outlet). Find the second week's sales.
16. True or false, with a reason: (a) If A and B are both 2 × 3, then A − B is also 2 × 3. (b) 3A has more elements than A. (c) A + O = A when O has the same order as A. (d) [7 2; 9 4] + [5 0 2; 1 6 7] can be found by adding the first two columns.
17. A student wrote 4 × [4 −3; 6 1] = [16 −3; 6 1]. Find the mistake and write the correct matrix.

### Answers

**1.** (a) **Barabar**: order dono ka 2 × 3 aur har jagah ke element ek. (b) **Barabar nahi**: pehla 2 × 3 hai, doosra 3 × 2; order alag. (c) **Barabar nahi**: order dono 2 × 2 hai, par doosri row mein 7, 2 aur 2, 7 ulte kram mein hain: pehle ka a₂₁ = 7 aur doosre ka b₂₁ = 2.

**2.** Pehli row pehla: x + 6 = 10, to **x = 4**. Pehli row doosra: 3y = 15, to **y = 5**. Baaki jagah −2 aur 5 dono taraf wahi.
**Jaanch:** [4 + 6, 3 × 5; −2, 5] = [10 15; −2 5] ✅.

**3.** 2x = 8, to **x = 4**. y + 1 = 7, to **y = 6**. Baaki jagah: x + y = 10 aur 3x = 12 dono sach nikle.
**Jaanch:** x + y = 4 + 6 = 10 ✅ aur 3x = 12 ✅.

**4.** Dono 2 × 3 hain.
P + Q = [21 4 6; 12 6 −3]
P − Q = [9 −12 12; −8 16 −11]
**Jaanch:** (P − Q) + Q ka pehla element: 9 + 6 = 15, jo P ka pehla hai ✅.

**5.** Jod ke liye order ek chahiye. A (2 × 3) aur C (2 × 3) ka order ek hai, to **A + C** ban sakta hai aur uska order **2 × 3** hoga. B (3 × 2) kisi ke saath nahi jud sakta, kyunki uska order baaki sab se alag hai. D (2 × 2) ka order bhi A aur C (2 × 3) se alag hai, isliye A + D aur C + D nahi bante.
**Jaanch:** har pair ka order ek-ek karke compare karo: (A, B) 2 × 3 aur 3 × 2 alag; (A, D) 2 × 3 aur 2 × 2 alag; (B, D) alag; (C, B), (C, D) alag; sirf (A, C) ek hi ✅.

**6.** Branch 1 + Branch 2 = [30 21 20; 17 35 18] yaani Monday, Tuesday, Wednesday ki pens aur notebooks ki kul bikri.
Branch 1 − Branch 2 = [2 −3 6; 5 5 −2]
Doosre matrix mein −3 aur −2 hain: **−3** matlab Tuesday ko branch 1 ne branch 2 se 3 pens kam beche (9 − 12), aur **−2** matlab Wednesday ko 2 notebooks kam. Negative ka matlab yahan "kam bika", koi galti nahi.
**Story check:** branch 1 ke saare numbers ka jod 77, branch 2 ke 64; combined matrix ke saare numbers ka jod 141, jo in dono ka jod hai.

**7.** Naya stock = [16 + (−5), 11 + 6; 13 + 8, 18 + (−9)] = [11 17; 21 9]. Entry −5: old store se 5 caps bhej di gayi ya bik gayi. Naya stock ke saare numbers positive hain, to **realistic** hai.
**Jaanch:** 16 − 5 = 11 ✅ aur 18 − 9 = 9 ✅.

**8.** 3A = [−12 21; 27 −6]. (−2)A = [8 −14; −18 4].
**Jaanch:** 3A ka teesra element 3 × 9 = 27 ✅, (−2)A ka doosra (−2) × 7 = −14 ✅.

**9.** 18, 12, 30, 24 sab 6 ke multiple hain. 6 × [3 −2; 5 4].
**Jaanch:** 6 × 3 = 18, 6 × (−2) = −12, 6 × 5 = 30, 6 × 4 = 24 ✅.

**10.** 2A = [4 −2 10; 8 0 −4], to 2A + B = [3 1 13; 13 2 −6]. 3A = [6 −3 15; 12 0 −6], 2B = [−2 6 6; 10 4 −4], to 3A − 2B = [8 −9 9; 2 −4 −2].
**Jaanch:** 2A + B ka teesra element: 2 × 5 + 3 = 13 ✅. 3A − 2B ka doosra: 3 × (−1) − 2 × 3 = −3 − 6 = −9 ✅.

**11.** X = B − A = [−6 14; −7 −3].
**Jaanch:** A + X: 9 + (−6) = 3, −6 + 14 = 8, 2 + (−7) = −5, 14 + (−3) = 11, yaani B ✅.

**12.** X = ⅓C ka matlab har element ko 3 se bhaag karo: X = [5 −2 3; 0 7 −4].
**Jaanch:** 3X = [15 −6 9; 0 21 −12] = C ✅.

**13.** 3X = B + A = [−3 12 12; 18 0 −6], to X = ⅓ × (3X) = [−1 4 4; 6 0 −2].
**Jaanch:** 3X = [−3 12 12; 18 0 −6], aur 3X − A = [−4 16 5; 13 −2 −3] = B ✅.

**14.** Pehle pair: x + y + 2 = 12, to x + y = 10. Doosra: 6 + y = 9, to **y = 3**. To **x = 7**. Chautha: 2x + (x − y) = 14 + 4 = 18, ye bhi sach nikla. Teesra: 3 + 5 = 8 (sach).
**Jaanch:** x = 7, y = 3 daalo: pehla matrix [10 6; 3 14], doosra [2 3; 5 4], jod [12 9; 8 18] ✅.

**15.** Doosre hafte ka matrix X: pehla hafta + X = total, to X = total − pehla hafta = [17 13; 7 19].
**Jaanch:** pehla hafta + X = [13 + 17, 9 + 13; 18 + 7, 12 + 19] = [30 22; 25 31] ✅.

**16.** (a) **Sach** ✅: antar ka order wahi rehta hai. (b) **Galat** ❌: 3A mein elements ki ginti A jitni hi hai, bas har ek teen guna. (c) **Sach** ✅: zero matrix mein har jagah 0 hai. (d) **Galat** ❌: orders 2 × 2 aur 2 × 3 alag hain, isliye jod bana hi nahi.

**17.** Galti: sirf pehle element (4) ko 4 se guna kiya (16), baaki ko nahi. Scalar **har** element ko guna karta hai. Sahi: [16 −12; 24 4].
**Jaanch:** [4 −3; 6 1] + [4 −3; 6 1] + [4 −3; 6 1] + [4 −3; 6 1] ka teesra element: 6 + 6 + 6 + 6 = 24 ✅.

---

Jod aur ghata se tum ek-ek jagah ka kaam kar chuke ho: har element sirf apni jodidar jagah se milta tha. Ab tumhare haath mein matrices ko jodne, ghatane, badhane aur unknown matrix dhundne ke tools hain.

**Agla topic (Topic 3):** abhi har element ne **sirf apni jodidar jagah** se kaam kiya. Agli baar matrices ko aapas mein **guna** karenge, aur tab ek row aur ek column milkar ek number banayenge: bilkul price list ko quantity se milane jaisa.
