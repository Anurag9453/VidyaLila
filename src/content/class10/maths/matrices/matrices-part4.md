# Chapter: Matrices (Part 4)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [matrices-part3.md](matrices-part3.md) se aage chalti hai** (wahan Topic 3 mein matrix ka guna seekha: row ko column se milana, aur kab guna ho sakta hai). Chapter ki shuruaat: [matrices.md](matrices.md). Identity aur zero matrix ke naam Topic 1 ([matrices.md](matrices.md)) se, aur A + O = A wali baat Topic 2 ([matrices-part2.md](matrices-part2.md)) se yaad rakhna.
> **Topics covered in this file:**
> 4. Order Ka Khel: AB Aur BA, Identity Aur Zero

---

# Topic 4: Order Ka Khel: AB Aur BA, Identity Aur Zero

Topic 3 mein humne matrix ka guna banana seekha: pehle matrix ki **row** ko doosre matrix ki **column** se milate hain, aur ye tabhi ho sakta hai jab pehle ke columns ki ginti doosre ke rows ke barabar ho. Ab ek naya sawaal: numbers mein 3 × 5 aur 5 × 3 ek jaise hote hain. Kya matrices mein bhi **AB aur BA** ek jaise hote hain? Aur woh do khaas matrices, **I** (ek ka matrix) aur **O** (zero matrix), guna karne par kya karte hain? Is topic mein hum yahi dekhenge, aur aakhir mein ek chhota sa matrix equation hal karenge.

---

## Piyush, moze aur robot ka gate

Subah school bus aane mein bas 5 minute the. Piyush ne jaldi mein pehle joote pehen liye, phir moze pehenne baitha. Moze joote ke upar atak gaye, aur Dadi ki hansi nikal gayi. "Beta, **pehle moze, phir joote.** Kaam wahi do hain, bas order ulta ho gaya, aur nateeja kitna alag aaya!"

Piyush ko ye baat phone ke robot-arm game ki yaad dila gayi. Us game mein robot ke paas ek tokri hai jisme **coins** aur **gems** hain, aur level mein do gate aate hain:
- **Gate A:** har gem ke badle tokri mein 2 coins aur jud jaate hain (gems jaise ke taise).
- **Gate B:** har coin ke badle tokri mein 3 gems aur jud jaate hain (coins jaise ke taise).

Tokri mein shuru mein 2 coins aur 1 gem hain. Piyush ne dono order try kiye:
- **Pehle A, phir B:** A ke baad 2 + 2 × 1 = 4 coins, 1 gem. Phir B ke baad gems 1 + 3 × 4 = 13. Tokri: **4 coins, 13 gems.**
- **Pehle B, phir A:** B ke baad 2 coins, gems 1 + 3 × 2 = 7. Phir A ke baad coins 2 + 2 × 7 = 16. Tokri: **16 coins, 7 gems.**

Wahi do gate, bas order badla, aur tokri alag nikli: moze aur joote ki tarah. Piyush ne socha: "Agar gate matrices se likh sakte hain, to kya matrix ka guna bhi order se badal jaata hai?" Chalo, dekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Commutative (order badalne par bhi wahi)** | Aisa kaam jisme do cheezon ka order badalne par bhi nateeja wahi rehta hai | Numbers ka guna: 3 × 5 = 5 × 3 |
| **Non-commutative (order badalne par nateeja badal sakta hai)** | Aisa kaam jisme order badalne se nateeja badal sakta hai | Moze aur joote; matrices ka guna: AB aur BA alag ho sakte hain |
| **A² (A ka square)** | Square matrix A ko khud se guna karna: A × A. Teen baar ho to A³ = A × A × A | A = [1 1; −1 0] to A² = A × A |
| **Distributive law (baantne ka niyam)** | Ek matrix se jod ka guna, har ek ke guna ke jod ke barabar: A(B + C) = AB + AC | Numbers mein: 2 × (3 + 4) = 2 × 3 + 2 × 4 |
| **Associative law (bracket badalne ka niyam)** | Teen matrices ke guna mein bracket pehle do par lagao ya aakhri do par, nateeja wahi: (AB)C = A(BC), bas matrices ka order wahi rahe | Numbers mein: (2 × 3) × 4 = 2 × (3 × 4) |

---

## Pehle ki baatein yaad

- **Topic 3** ([matrices-part3.md](matrices-part3.md)): row ko column se milakar AB ka har element banta hai, aur AB tabhi ban sakta hai jab A ke columns ki ginti B ke rows ke barabar ho. A ka order m × n aur B ka n × p ho to AB ka order m × p aata hai (pehle rows, phir columns).
- **Topic 1** ([matrices.md](matrices.md)): **I** ka matlab ek ka matrix, jisme main diagonal par 1 aur baaki jagah 0 hota hai. **O** ka matlab zero matrix, jisme har element 0 hota hai.
- **Topic 2** ([matrices-part2.md](matrices-part2.md)): A + O = A.
- Is topic mein har example ke shuru mein likha hota hai ki A, B, C ya P, Q kaun se matrix hain. Alag example mein ye letters naye matrices ke naam hain.

---

## Part A: AB aur BA: order ka khel

### Gate wali kahani, matrices ki zubaan mein

Tokri ko ek column [coins; gems] maanein. Gate A ke matrix mein pehli row batati hai ki naye coins kaise bane (1 × coins + 2 × gems), aur doosri row batati hai ki naye gems kaise bane (0 × coins + 1 × gems). Gate B ke liye ulta: naye coins 1 × coins + 0 × gems, naye gems 3 × coins + 1 × gems. Shuruaati tokri bhi ek column hai: 2 coins, 1 gem.

Pehle Gate A tokri [2; 1] par lagao, phir Gate B us nayi tokri par:

```
[ 1 2 ]     [ 2 ]     [ 4 ]          [ 1 0 ]     [ 4 ]     [  4 ]
[ 0 1 ]  ×  [ 1 ]  =  [ 1 ]          [ 3 1 ]  ×  [ 1 ]  =  [ 13 ]
    A ke baad tokri                      B ke baad tokri
```

> **Figure 4.1** – Pehle A: tokri [2; 1] se [4; 1] bani (4 coins, 1 gem). Phir B: [4; 1] se [4; 13] bani. Dhyan do: jo gate column ke **sabse paas** likha hai wo pehle kaam karta hai. Isliye "pehle A phir B" ka ek matrix B ko A ke **baayein** likhkar BA bana.

Ulta order, pehle B phir A, ka matrix hoga AB.

```
[ 1 2 ]     [ 1 0 ]     [ 7 2 ]         [ 1 0 ]     [ 1 2 ]     [ 1 2 ]
[ 0 1 ]  ×  [ 3 1 ]  =  [ 3 1 ]    ,    [ 3 1 ]  ×  [ 0 1 ]  =  [ 3 7 ]
```

> **Figure 4.2** – Dono gate matrices ke dono guna. AB = [7 2; 3 1] aur BA = [1 2; 3 7] ek jaise nahi hain. Dono ko tokri [2; 1] par lagao: BA wala 1 × 2 + 2 × 1 = 4 coins, 3 × 2 + 7 × 1 = 13 gems deta hai ([4; 13]), aur AB wala 7 × 2 + 2 × 1 = 16 coins, 3 × 2 + 1 × 1 = 7 gems ([16; 7]): bilkul wahi jo Piyush ne haath se nikaala tha.

**Story check:** matrices ne wahi do tokriyan di jo seedhe hisaab se aayi thin: [4; 13] aur [16; 7], to matrix ka order gate ke order se milta hai.

### Ab seedhe numbers: AB ≠ BA

Gate ek kahani thi. Ab sirf numbers dekho, taaki koi shak na rahe.

**Example 1.** A = [2 1; −1 3] aur B = [0 −2; 4 1] ke liye AB aur BA nikalo.

**Hal.** Dono 2 × 2 hain, to AB aur BA dono ban sakte hain (aur dono 2 × 2 honge). Row ko column se milao.

AB ka pehla element: A ki row 1 [2, 1] aur B ki column 1 [0; 4]: 2 × 0 + 1 × 4 = 4. Baaki teen isi tarah.

```
[  2  1 ]     [  0 -2 ]     [  4 -3 ]
[ -1  3 ]  ×  [  4  1 ]  =  [ 12  5 ]

[  0 -2 ]     [  2  1 ]     [  2 -6 ]
[  4  1 ]  ×  [ -1  3 ]  =  [  7  7 ]
```

> **Figure 4.3** – Wahi do matrices, bas order badla. AB = [4 −3; 12 5] aur BA = [2 −6; 7 7]. Chaaron element alag hain.

**Jaanch:** AB ka (2, 1) element: A ki row 2 [−1, 3] aur B ki column 1 [0; 4]: (−1) × 0 + 3 × 4 = 12 ✅. BA ka (1, 1) element: B ki row 1 [0, −2] aur A ki column 1 [2; −1]: 0 × 2 + (−2) × (−1) = 2 ✅. AB ≠ BA.

### Kyun? Alag row aur column milte hain

Dhyan se dekho ki pehla element kaise bana. Dono mein **alag row aur alag column** jodi gayi:

```
AB ka pehla element: A ki row 1 aur B ki column 1

[ 2  1 ]  ×  [ 0 ]      2 × 0 + 1 × 4  =  4
             [ 4 ]

BA ka pehla element: B ki row 1 aur A ki column 1

[ 0 -2 ]  ×  [  2 ]     0 × 2 + (-2) × (-1)  =  2
             [ -1 ]
```

> **Figure 4.4** – AB ke pehle element ke liye A ki row 1 aur B ki column 1 mili, BA ke pehle element ke liye B ki row 1 aur A ki column 1. Jodi hi alag hai, to guna-jod bhi alag: 4 aur 2.

Yahi matrix ke guna ka swabhav hai: **baayein wale matrix ki rows aur daayein wale ki columns** milti hain. Order badalte hi baayein-daayein badal jaate hain, to milne wali rows aur columns bhi badal jaati hain. Isliye matrix ka guna **non-commutative** hai.

**Ek zaroori imandari:** ek example ye dikhata hai ki "AB = BA har baar hota hai" wali baat galat hai. Ye nahi kehta ki AB = BA **kabhi** nahi hota. Kabhi-kabhi hota bhi hai (Part C aur Part D mein dekhoge: A aur I, A aur A²). Aur ye sirf ek example hai, pakka saboot nahi: isse bas itna pata chalta hai ki hum order ko kabhi nazar-andaaz nahi kar sakte.

---

## Part B: AB ban jaye, BA na bane (ya alag order ka bane)

Kyun? Topic 3 ka niyam: m × n ko n × p se guna karo to m × p aata hai. Order badalte hi **beech ke do number** badal jaate hain, aur ho sakta hai wo ab milte hi na hon.

**Example 2.** P = [1 −2 0; 3 1 −1] (2 × 3) aur Q = [2 1; 0 −3; 4 2] (3 × 2). PQ aur QP ke order batao aur dono nikalo.

**Hal.** PQ: (2 × 3) ko (3 × 2) se: beech ke 3 aur 3 milte hain, to PQ ka order 2 × 2. QP: (3 × 2) ko (2 × 3) se: beech ke 2 aur 2 milte hain, to QP ka order 3 × 3. Dono ban rahe hain, par **alag order** ke.

```
[  1 -2  0 ]     [  2  1 ]     [  2  7 ]
[  3  1 -1 ]  ×  [  0 -3 ]  =  [  2 -2 ]
                 [  4  2 ]

[  2  1 ]     [  1 -2  0 ]     [  5 -3 -1 ]
[  0 -3 ]  ×  [  3  1 -1 ]  =  [ -9 -3  3 ]
[  4  2 ]                      [ 10 -6 -2 ]
```

> **Figure 4.5** – PQ ek 2 × 2 matrix aur QP ek 3 × 3 matrix. Dono alag order ke hain, to PQ = QP ka sawaal hi nahi uthta: unke elements ki ginti bhi alag hai (4 aur 9).

**Jaanch:** PQ ka (2, 2) element: P ki row 2 [3, 1, −1] aur Q ki column 2 [1; −3; 2]: 3 − 3 − 2 = −2 ✅. QP ka (3, 3) element: Q ki row 3 [4, 2] aur P ki column 3 [0; −1]: 0 − 2 = −2 ✅.

**Example 3.** P (2 × 3) upar wala hi, aur C = [2; −1; 3] (3 × 1). PC aur CP ka kya haal hai?

**Hal.** PC: (2 × 3) ko (3 × 1) se: beech ke 3 aur 3 milte hain, to PC ban jaata hai, order 2 × 1. CP: (3 × 1) ko (2 × 3) se: beech ke 1 aur 2 **nahi milte**, to **CP ban hi nahi sakta**.

Guna karne par PC = [4; 2] (ek column). CP likhne ka koi matlab nahi: C ki ek hi column hai, par P mein 2 rows hain, aur ek column ko do rows se nahi milaya ja sakta.

**Jaanch:** PC ka pehla element: 1 × 2 + (−2) × (−1) + 0 × 3 = 2 + 2 + 0 = 4 ✅.

Moze-joote ki tarah: kabhi order ulta karne se nateeja badal jaata hai (Example 1), kabhi dono order ban jaate hain par alag size ke (Example 2), aur kabhi ek order ban hi nahi paata (Example 3).

---

## Part C: I aur O: "kuch na karna" aur "sab kuch mita dena"

**Kyun?** Numbers mein 1 aisa number hai jisse guna karne par kuch nahi badalta (7 × 1 = 7), aur 0 aisa jisse guna karne par sab mit jaata hai (7 × 0 = 0). Matrices mein bhi wahi kirdaar hain: **I** "kuch na karna" aur **O** "sab mita dena". Moze-joote ki bhasha mein: I wo "kadam" hai jisme Piyush kuch nahi pehenta, to kuch nahi badalta.

**Rule (I ke liye).** Kisi bhi matrix A ko I se guna karo, usse pehle ya baad mein, A hi mil jaata hai: **AI = IA = A**, jab order sahi ho. Dhyan do: I ka order A ke hisaab se badalta hai (I₂ aur I₃ likhte hain).

**Example 4.** A = [3 −2; 5 1] ke liye AI₂ aur I₂A nikalo. Phir P = [1 −2 0; 3 1 −1] (2 × 3) ke liye sahi I chuno.

**Hal.** A 2 × 2 hai, to I₂ = [1 0; 0 1].

```
[  3 -2 ]     [ 1 0 ]     [  3 -2 ]
[  5  1 ]  ×  [ 0 1 ]  =  [  5  1 ]

[ 1 0 ]     [  3 -2 ]     [  3 -2 ]
[ 0 1 ]  ×  [  5  1 ]  =  [  5  1 ]
```

> **Figure 4.6** – A ko I₂ se guna karo, to A hi laut aata hai, chaahe I daayein ho ya baayein. Yahan AI = IA, ye wo khaas jagah hai jahan order se farak nahi padta.

P ke liye: P 2 × 3 hai. **Daayein** taraf I₃ lagao (beech ke 3 aur 3 mile, order 2 × 3 hi bana). **Baayein** taraf I₂ lagao (2 aur 2 mile, order phir 2 × 3).

```
[  1 -2  0 ]     [ 1 0 0 ]     [  1 -2  0 ]
[  3  1 -1 ]  ×  [ 0 1 0 ]  =  [  3  1 -1 ]
                 [ 0 0 1 ]

[ 1 0 ]     [  1 -2  0 ]     [  1 -2  0 ]
[ 0 1 ]  ×  [  3  1 -1 ]  =  [  3  1 -1 ]
```

> **Figure 4.7** – P ke liye daayein I₃ aur baayein I₂ chahiye. Dono taraf P hi wapas aaya, to P I₃ = I₂ P = P.

**Jaanch:** AI₂ ka (2, 1) element: A ki row 2 [5, 1] aur I₂ ki column 1 [1; 0]: 5 × 1 + 1 × 0 = 5 ✅ (A ka (2, 1) element 5 hi hai). PI₃ ka (1, 2) element: P ki row 1 [1, −2, 0] aur I₃ ki column 2 [0; 1; 0]: 0 − 2 + 0 = −2 ✅.

**Rule (O ke liye).** Kisi bhi matrix ko O se guna karo, to O hi milta hai: AO = O aur OA = O (O ka order aisa lo ki guna ban sake).

**Example 5.** A = [−2 7; 4 1] aur O = [0 0; 0 0]. AO aur OA nikalo.

**Hal.** Har element mein O ke zero se guna hoga, aur zero se guna karne par har guna-jod 0 ho jaata hai.

Har element ka guna-jod 0 aata hai: AO = [0 0; 0 0] = O aur OA = [0 0; 0 0] = O. Yahan bhi order ka farak nahi padta.

**Jaanch:** AO ka (1, 1) element: (−2) × 0 + 7 × 0 = 0 ✅. Aur Topic 2 se: A + O = A, yaani O jodne par A nahi badalta, guna karne par A mit jaata hai.

Numbers mein ek aur baat hoti hai: ab = 0 ho to a = 0 ya b = 0. Kya matrices mein bhi AB = O ka matlab A = O ya B = O hota hai? Is ka jawab Aam galtiyan mein milega: ek chaunkane wala example ke saath.

---

## Part D: A² aur A ki powers

**Kyun?** Numbers mein 4² = 4 × 4. Matrix mein bhi A² = A × A, par ye tabhi ban sakta hai jab A ke columns aur rows ki ginti barabar ho, yaani A **square matrix** ho (2 × 2, 3 × 3). Hum yahan 2 × 2 hi lenge.

**Example 6.** A = [1 1; −1 0] ke liye A², A³ nikalo.

**Hal.** A² = A × A:

```
[  1  1 ]     [  1  1 ]     [  0  1 ]
[ -1  0 ]  ×  [ -1  0 ]  =  [ -1 -1 ]
```

A³ = A² × A (pehle A², phir A se guna):

```
[  0  1 ]     [  1  1 ]     [ -1  0 ]
[ -1 -1 ]  ×  [ -1  0 ]  =  [  0 -1 ]
```

> **Figure 4.8** – A² = [0 1; −1 −1] aur A³ = [−1 0; 0 −1]. Ye A³ wahi hai jo I ke har element ka sign ulta karne se bane (A³ = −I). Aur A³ × A³ = [1 0; 0 1] = I deta hai, yaani A⁶ = I: A ko chhah baar lagane par matrix wapas I ban jaata hai.

**Jaanch:** A² ka (2, 1) element: A ki row 2 [−1, 0] aur A ki column 1 [1; −1]: −1 + 0 = −1 ✅. A³ ka (1, 1): A² ki row 1 [0, 1] aur A ki column 1 [1; −1]: 0 − 1 = −1 ✅. Aur A × A² bhi vahi A³ deta hai ([1 1; −1 0] ko [0 1; −1 −1] se guna karne par [−1 0; 0 −1]), ye ek mauka hai jahan order se farak nahi padta, kyunki dono taraf A hi A hain.

**Ek imandari ki baat:** AB = BA kabhi-kabhi hota hai: jab dono matrices ek hi A ki powers hon (A aur A², A aur I). Bas, bina soche ise har jodi par mat lagao.

---

## Part E: Do kanoon, jinhe hum example se parakhte hain

Matrix ke guna ke do kanoon jinse hisaab asaan ho jaata hai. **Ye saboot nahi, bas ek example hai:** har kanoon ko ek-ek example se check karenge, aur ye kanoon aage ki class mein poore saboot ke saath aate hain.

### Distributive law: A(B + C) = AB + AC

**Kyun?** Numbers mein 2 × (3 + 4) = 2 × 3 + 2 × 4. Matrix ka guna bhi jod par isi tarah baant jaata hai, bas A ko **hamesha wahi taraf** rakhna hai (A(B + C), A ko baayein).

**Example 7.** A = [3 −2; 1 4], B = [1 5; −3 0], C = [−2 1; 6 −1]. A(B + C) aur AB + AC alag-alag nikalo aur milao.

**Hal.** Pehle B + C (Topic 2 ki tarah element-by-element), phir A ko is se guna:

```
[  1  5 ]     [ -2  1 ]     [ -1  6 ]         [  3 -2 ]     [ -1  6 ]     [ -9 20 ]
[ -3  0 ]  +  [  6 -1 ]  =  [  3 -1 ]    ,    [  1  4 ]  ×  [  3 -1 ]  =  [ 11  2 ]
```

Ab AB aur AC alag-alag, phir jodo:

```
[  3 -2 ]     [  1  5 ]     [   9  15 ]         [  3 -2 ]     [ -2  1 ]     [ -18   5 ]
[  1  4 ]  ×  [ -3  0 ]  =  [ -11   5 ]    ,    [  1  4 ]  ×  [  6 -1 ]  =  [  22  -3 ]

[   9  15 ]     [ -18   5 ]     [ -9 20 ]
[ -11   5 ]  +  [  22  -3 ]  =  [ 11  2 ]
```

> **Figure 4.9** – A(B + C) = [−9 20; 11 2] aur AB + AC = [−9 20; 11 2]. Dono taraf ka matrix ek jaisa nikla.

**Jaanch:** (1, 1) element, A(B + C) mein: A ki row 1 [3, −2] aur (B + C) ki column 1 [−1; 3]: −3 − 6 = −9. AB + AC mein: 9 + (−18) = −9 ✅. Doosri taraf se bhi chalega: (B + C)A = BA + CA, jaise B + C = [−1 6; 3 −1] ko A se guna karne par [3 26; 8 −10], aur BA + CA = [8 18; −9 6] + [−5 8; 17 −16] = [3 26; 8 −10] ✅.

### Associative law: (AB)C = A(BC)

**Kyun?** Gate ki kahani yaad karo. Tokri v ke liye "pehle A, phir B" do tarah se soch sakte hain: ek-ek gate se guzaro, B(Av); ya dono gate ek bada gate bana do, BA, aur ek hi baar guzaro, (BA)v. Tokri dono baar [4; 13] aayi: B(Av) = (BA)v. Teen matrices ke guna mein bhi, bracket kahin bhi lagao, nateeja wahi rahta hai, bas **order wahi rakho**.

**Example 8.** A = [2 −1; 0 3], B = [1 4; −2 1], C = [3 0; 1 −2]. (AB)C aur A(BC) nikalo.

**Hal.** Pehle (AB)C, phir A(BC):

```
[  2 -1 ]     [  1  4 ]     [  4  7 ]         [  4  7 ]     [  3  0 ]     [  19 -14 ]
[  0  3 ]  ×  [ -2  1 ]  =  [ -6  3 ]    ,    [ -6  3 ]  ×  [  1 -2 ]  =  [ -15  -6 ]

[  1  4 ]     [  3  0 ]     [  7 -8 ]         [  2 -1 ]     [  7 -8 ]     [  19 -14 ]
[ -2  1 ]  ×  [  1 -2 ]  =  [ -5 -2 ]    ,    [  0  3 ]  ×  [ -5 -2 ]  =  [ -15  -6 ]
```

> **Figure 4.10** – (AB)C aur A(BC) dono [19 −14; −15 −6] nikle. Bracket kahin bhi lagao, jawab ek hi.

**Jaanch:** (AB)C ka (1, 2) element: (AB) ki row 1 [4, 7] aur C ki column 2 [0; −2]: 0 − 14 = −14. A(BC) ka (1, 2): A ki row 1 [2, −1] aur (BC) ki column 2 [−8; −2]: −16 + 2 = −14 ✅.

**Is kanoon ka ek seedha phal:** (A + B)² = (A + B)(A + B). Distributive se: (A + B)A + (A + B)B, aur phir doosri taraf se baantne par (jo Example 7 ke Jaanch mein ek example se dekha) A² + BA + AB + B². Dhyan do ki **AB aur BA alag rakhe gaye hain**, kyunki order badal sakta hai. Isse Aam galtiyan mein kaam lenge.

---

## Part F: Matrix equation AX = B aur anjaan element

**Kyun?** Numbers mein ax = b ho to a se bhaag karke x nikaalte hain. Matrices mein bhaag ka seedha tareeka hamare paas abhi nahi (wo aage ki class ka vishay hai), isliye hum AX = B ko **element-by-element likhkar** do ya zyada equations bana lete hain, aur Class 9 ki do-variable equations se hal karte hain.

**Example 9.** A = [2 3; −1 4] aur B = [5; 14]. AX = B ho, X = [x; y]. X nikalo.

**Hal.** A (2 × 2) aur X (2 × 1) ka guna 2 × 1 hoga, B bhi 2 × 1: order milta hai. Guna likho:

```
[  2  3 ]  ×  [ x ]   =   [  2x + 3y ]   =   [  5 ]
[ -1  4 ]     [ y ]       [  -x + 4y ]       [ 14 ]
```

> **Figure 4.11** – AX ke do elements ko B ke do elements ke barabar rakhne se do equations nikalti hain: 2x + 3y = 5 aur −x + 4y = 14.

Doosri se x = 4y − 14. Pehli mein daalo: 2(4y − 14) + 3y = 5, to 8y − 28 + 3y = 5, 11y = 33, **y = 3**, phir x = 4(3) − 14 = **−2**. To X = [−2; 3].

**Jaanch:** A × X ka pehla element: 2 × (−2) + 3 × 3 = −4 + 9 = 5 ✅, doosra: (−1) × (−2) + 4 × 3 = 2 + 12 = 14 ✅.

**Example 10 (kya galat hua?).** A = [1 −3; 2 5] aur B = [7; 3]. Ek bacche ne AX = B ko "X = BA" likhkar hal karna chaha. Galti kahan hai? Sahi X nikalo.

**Hal.** B (2 × 1) aur A (2 × 2): B ke columns 1, A ke rows 2. 1 ≠ 2, to **BA ban hi nahi sakta.** Matrix equation mein bhaag ya "ulta guna" aise nahi hota: AX = B ko element-by-element likhna chahiye: x − 3y = 7 aur 2x + 5y = 3. Pehli se x = 7 + 3y. Doosri mein: 14 + 6y + 5y = 3, 11y = −11, **y = −1**, x = 7 − 3 = **4**. To X = [4; −1].

**Jaanch:** AX ka pehla element: 1 × 4 + (−3) × (−1) = 4 + 3 = 7 ✅, doosra: 2 × 4 + 5 × (−1) = 8 − 5 = 3 ✅.

**Example 11 (anjaan element).** A = [2 1; 0 −1] aur B = [p 3; q 1]. AB = [4 7; 2 −1] ho to p aur q nikalo.

**Hal.** AB likho, row ko column se milakar: pehla element 2p + q, doosra 2 × 3 + 1 × 1 = 7, teesra 0 × p + (−1) × q = −q, chautha 0 × 3 + (−1) × 1 = −1.

```
[ 2  1 ]  ×  [ p  3 ]   =   [ 2p + q    7 ]   =   [ 4   7 ]
[ 0 -1 ]     [ q  1 ]       [     -q   -1 ]       [ 2  -1 ]
```

> **Figure 4.12** – Anjaan elements wale pehle column se do equations milti hain: 2p + q = 4 aur −q = 2. Doosre column mein koi anjaan nahi: wo bas check hai (7 aur −1 dono mil rahe hain).

−q = 2 se **q = −2**. 2p − 2 = 4 se 2p = 6, **p = 3.**

**Jaanch:** p = 3, q = −2 se B = [3 3; −2 1]. AB ka pehla element: 2 × 3 + 1 × (−2) = 4 ✅, teesra: 0 × 3 + (−1) × (−2) = 2 ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: AB = BA maanna (aur (A + B)² ko A² + 2AB + B² likhna)**

Numbers mein (a + b)² = a² + 2ab + b² isliye hota hai ki ab = ba. Ek bacche ne wahi A, B pe lagaya: A = [1 1; 0 2] aur B = [2 0; 1 −1] ke liye likha **(A + B)² = A² + 2AB + B².**

Check karte hain. A + B = [3 1; 1 1]. Seedha guna: (A + B)(A + B) = [10 4; 4 2]. Bacche ke formula ke liye A² = [1 3; 0 4], AB = [3 −1; 2 −2], B² = [4 0; 1 1], aur BA = [2 2; 1 −1] alag se nikalo. Bacche ka roop aur sahi roop dono dekho:

```
Bacche ka roop: A² + 2AB + B²
[ 1 3 ]     [  6 -2 ]     [ 4 0 ]     [ 11  1 ]
[ 0 4 ]  +  [  4 -4 ]  +  [ 1 1 ]  =  [  5  1 ]

Sahi roop: A² + AB + BA + B²
[ 1 3 ]     [  3 -1 ]     [  2  2 ]     [ 4 0 ]     [ 10  4 ]
[ 0 4 ]  +  [  2 -2 ]  +  [  1 -1 ]  +  [ 1 1 ]  =  [  4  2 ]
```

> **Figure 4.13** – Bacche ka roop [11 1; 5 1] deta hai, jo seedhe guna [10 4; 4 2] se alag hai. Sahi roop (AB aur BA alag-alag) seedhe guna jaisa [10 4; 4 2] deta hai. Bacche ne AB aur BA ko ek maan liya tha, jabki AB = [3 −1; 2 −2] aur BA = [2 2; 1 −1] alag hain.

**Jaanch:** (1, 1) element: seedha (A + B)² mein row 1 [3, 1] aur column 1 [3; 1]: 9 + 1 = 10. Sahi roop mein: 1 + 3 + 2 + 4 = 10 ✅. Bacche ke roop mein: 1 + 6 + 4 = 11, jo 10 nahi hai. Dono roopon ka farak AB − BA = [1 −3; 1 −1] hai, jo zero nahi hai.

**Galti 2: AB = O ka matlab A = O ya B = O**

Numbers mein ab = 0 ho to a = 0 ya b = 0. Ek bacche ne wahi soch matrices par lagayi: A = [1 −2; −3 6] aur B = [6 2; 3 1] ka guna dekhkar likha, "agar AB = O hua, to B = O hi hoga, kyunki A to zero nahi hai." Chalo AB nikalte hain.

```
[  1 -2 ]     [ 6 2 ]     [ 0 0 ]
[ -3  6 ]  ×  [ 3 1 ]  =  [ 0 0 ]
```

> **Figure 4.14** – A aur B dono zero matrix nahi hain, par AB = O. Bacche ka "B = O hona chahiye" galat nikla.

Kyun? Matrix ke guna ka har element **kai guna-jod ka jod** hota hai, aur is jod mein positive aur negative cancel ho sakte hain: 1 × 2 + (−2) × 1 = 2 − 2 = 0. Numbers ke ab mein sirf ek hi guna hota hai, jo tabhi 0 hota hai jab koi ek 0 ho. Matrix mein jod ki wajah se cancelling ho jaati hai.

**Jaanch:** AB ke chaaron element: (1, 1): 1 × 6 + (−2) × 3 = 0 ✅. (1, 2): 1 × 2 + (−2) × 1 = 0 ✅. (2, 1): (−3) × 6 + 6 × 3 = 0 ✅. (2, 2): (−3) × 2 + 6 × 1 = 0 ✅.

---

## Quick Recap

- **AB ≠ BA** (zyada tar): matrix ka guna **non-commutative** hai. Moze pehle joote baad mein aur ulta alag nateeja dete hain. Ek example kanoon nahi, bas dikhata hai.
- AB ban jaaye to BA ban-na zaroori nahi. (2 × 3) ko (3 × 2) se: AB 2 × 2, BA 3 × 3. (2 × 3) ko (3 × 1) se: sirf pehla ban sakta hai.
- **AI = IA = A** (I ka order sahi lo), **AO = OA = O**. A + O = A (Topic 2).
- **A² = A × A**, sirf square matrix ke liye. A × A² = A² × A = A³.
- **A(B + C) = AB + AC** aur **(AB)C = A(BC)**: ek example se jaanche, saboot nahi.
- **(A + B)² = A² + AB + BA + B²**, A² + 2AB + B² nahi, jab tak AB = BA na ho.
- **AX = B** ko element-by-element likhkar do equations banao. Anjaan elements ke liye bhi wahi.
- **AB = O** ka matlab A = O ya B = O **nahi** hota.
- Jab tokri column ke saath likhi ho, column ke paas wala matrix pehle kaam karta hai.

---

## Practice Questions

1. Let A = [−3 2; 4 1] and B = [5 −1; 0 2]. Find AB and BA. Are they equal?

2. Let A be 2 × 3, B be 3 × 2, C be 2 × 2 and D be 3 × 3. For each product AB, BA, AC, CA, AD, DA, say whether it can be formed and, if so, give its order.

3. (a) For A = [−4 6; 1 −5], compute AI and IA. (b) For P = [2 −1; 0 5; −3 4] (3 × 2), which identity matrix must stand on the left, and which on the right, so that the product is P again? Verify.

4. Let A = [−4 2; x −1] and X = [1; 2]. Find x so that AX = O (the 2 × 1 zero matrix). Is X = O? Is A = O?

5. Let A = [0 −1; 2 3]. Find A² and A³. Check that A × A² gives the same A³.

6. Let A = [2 −3; 1 0], B = [−1 4; 2 1], C = [3 −2; 0 5]. Verify A(B + C) = AB + AC by finding both sides.

7. Let A = [1 2; −1 4], B = [3 −2; 0 2] and X = [2; −3]. Find (AB)X and A(BX), and compare.

8. Solve AX = B for X = [x; y], where A = [4 1; −2 −3] and B = [8; 6]. Verify.

9. Find a and b if [a 3; 1 b] × [−1; 2] = [5; 3].

10. Let A = [0 1; −2 3] and B = [2 −1; 1 1]. Find (A + B)² directly. Then find A² + 2AB + B² and A² + AB + BA + B², and say which one equals (A + B)².

11. A student wrote (A − B)(A + B) = A² − B². Test this for A = [4 1; −2 0] and B = [1 −1; 4 2]. What is the correct expansion of (A − B)(A + B), and why is it not A² − B²?

12. In a game, a gate P changes a basket [coins; gems] by new coins = 2 × coins and new gems = coins + 3 × gems. A gate Q changes it by new coins = 3 × coins + gems and new gems = gems. Write the matrices of P and Q. A basket has 3 coins and 2 gems. Find the basket after P then Q, and after Q then P. Do the two orders give the same basket?

13. Find x so that [3 3; x −3] × [3 3; x −3] = O (the 2 × 2 zero matrix), and say what this shows about the statement "if A² = O then A = O".

14. State True or False, with a reason:
    (a) For any two 2 × 2 matrices A and B, AB = BA.
    (b) If AB can be formed, then BA can also be formed.
    (c) For a 2 × 2 matrix A, AI = IA = A.
    (d) If AB = O, then A = O or B = O.
    (e) A(B + C) = AB + AC whenever the products can be formed.
    (f) (A + B)² = A² + 2AB + B² for every pair of 2 × 2 matrices.

15. Let C = [4 −1 2; 0 3 −2] and D = [1; 5; 2]. Find CD. Why can DC not be formed?

### Answers

1. Dono 2 × 2 hain, to AB aur BA dono ban sakte hain. Row ko column se milao:
   [−3 2; 4 1] × [5 −1; 0 2] = [−15 7; 20 −2] [5 −1; 0 2] × [−3 2; 4 1] = [−19 9; 8 2]
   AB = [−15 7; 20 −2], BA = [−19 9; 8 2]. **Barabar nahi hain.**
   Jaanch: AB ka (1, 1): (−3) × 5 + 2 × 0 = −15 ✅. BA ka (1, 1): 5 × (−3) + (−1) × 4 = −19 ✅.

2. Beech ke do order milte hon tabhi guna banta hai.
   - AB: (2 × 3)(3 × 2): 3 = 3, banta hai, order **2 × 2**.
   - BA: (3 × 2)(2 × 3): 2 = 2, banta hai, order **3 × 3**.
   - AC: (2 × 3)(2 × 2): 3 ≠ 2, **nahi banta**.
   - CA: (2 × 2)(2 × 3): 2 = 2, banta hai, order **2 × 3**.
   - AD: (2 × 3)(3 × 3): 3 = 3, banta hai, order **2 × 3**.
   - DA: (3 × 3)(2 × 3): 3 ≠ 2, **nahi banta**.
   Jaanch: banne wale har guna mein pehla order m × n aur doosra n × p liya, to jawab m × p hai ✅.

3. (a) AI = A aur IA = A:
   [−4 6; 1 −5] × [1 0; 0 1] = [−4 6; 1 −5], [1 0; 0 1] × [−4 6; 1 −5] = [−4 6; 1 −5]
   (b) P 3 × 2 hai. **Baayein** taraf I₃ (3 × 3): (3 × 3)(3 × 2) = 3 × 2, aur **daayein** taraf I₂ (2 × 2): (3 × 2)(2 × 2) = 3 × 2.
   [1 0 0; 0 1 0; 0 0 1] × [2 −1; 0 5; −3 4] = [2 −1; 0 5; −3 4] [2 −1; 0 5; −3 4] × [1 0; 0 1] = [2 −1; 0 5; −3 4]
   Jaanch: I₃P ka (2, 2) element: row 2 of I₃ [0, 1, 0] aur P ki column 2 [−1; 5; 4]: 5 ✅ (P ka (2, 2) = 5).

4. AX = [−4 × 1 + 2 × 2; x × 1 + (−1) × 2] = [0; x − 2]. AX = O ke liye x − 2 = 0, to **x = 2**. X = [1; 2] zero nahi hai, aur A = [−4 2; 2 −1] bhi zero nahi hai, phir bhi AX = O.
   Jaanch: x = 2 par A × X ka doosra element: 2 × 1 + (−1) × 2 = 0 ✅, pehla: −4 + 4 = 0 ✅.

5. A² = A × A:
   [0 −1; 2 3] × [0 −1; 2 3] = [−2 −3; 6 7]
   A³ = A² × A aur A × A²:
   [−2 −3; 6 7] × [0 −1; 2 3] = [−6 −7; 14 15] [0 −1; 2 3] × [−2 −3; 6 7] = [−6 −7; 14 15]
   Dono [−6 −7; 14 15] mile.
   Jaanch: A² ka (2, 2): row 2 [2, 3] aur column 2 [−1; 3]: −2 + 9 = 7 ✅. A³ ka (1, 2): row 1 of A² [−2, −3] aur A ki column 2 [−1; 3]: 2 − 9 = −7 ✅.

6. B + C = [2 2; 2 6]. A(B + C):
   [2 −3; 1 0] × [2 2; 2 6] = [−2 −14; 2 2]
   AB aur AC aur unka jod:
   [2 −3; 1 0] × [−1 4; 2 1] = [−8 5; −1 4], [2 −3; 1 0] × [3 −2; 0 5] = [6 −19; 3 −2] [−8 5; −1 4] + [6 −19; 3 −2] = [−2 −14; 2 2]
   Dono taraf [−2 −14; 2 2] mila. (Ek example hai, saboot nahi.)
   Jaanch: (2, 2) element: A(B + C) mein row 2 [1, 0] aur column 2 [2; 6]: 2. AB + AC mein: 4 + (−2) = 2 ✅.

7. AB aur phir (AB)X:
   [1 2; −1 4] × [3 −2; 0 2] = [3 2; −3 10], [3 2; −3 10] × [2; −3] = [0; −36]
   BX aur phir A(BX):
   [3 −2; 0 2] × [2; −3] = [12; −6], [1 2; −1 4] × [12; −6] = [0; −36]
   Dono [0; −36] mile, to (AB)X = A(BX).
   Jaanch: (AB)X ka doosra element: (−3) × 2 + 10 × (−3) = −6 − 30 = −36 ✅.

8. AX = [4x + y; −2x − 3y] = [8; 6]. To 4x + y = 8 aur −2x − 3y = 6. Pehli se y = 8 − 4x. Doosri mein: −2x − 3(8 − 4x) = 6, −2x − 24 + 12x = 6, 10x = 30, **x = 3**, y = 8 − 12 = **−4**. X = [3; −4].
   Jaanch: 4 × 3 + (−4) = 8 ✅ aur (−2) × 3 − 3 × (−4) = −6 + 12 = 6 ✅.

9. Row ko column se milao: a × (−1) + 3 × 2 = 5, to −a + 6 = 5, **a = 1**. Aur 1 × (−1) + b × 2 = 3, to 2b = 4, **b = 2**.
   Jaanch: [1 3; 1 2] × [−1; 2] = [−1 + 6; −1 + 4] = [5; 3] ✅.

10. A + B = [2 0; −1 4]. Seedha:
   [2 0; −1 4] × [2 0; −1 4] = [4 0; −6 16]
   A² = [−2 3; −6 7], AB = [1 1; −1 5], BA = [2 −1; −2 4], B² = [3 −3; 3 0].
   A² + 2AB + B² = [−2 + 2 + 3, 3 + 2 − 3; −6 − 2 + 3, 7 + 10 + 0] = [3 2; −5 17]. A² + AB + BA + B² = [−2 + 1 + 2 + 3, 3 + 1 − 1 − 3; −6 − 1 − 2 + 3, 7 + 5 + 4 + 0] = [4 0; −6 16].
   **A² + AB + BA + B²** hi (A + B)² ke barabar hai; 2AB wala roop alag hai kyunki AB ≠ BA.
   Jaanch: AB − BA = [−1 2; 1 1], aur A² + 2AB + B² − (A + B)² = [−1 2; 1 1], yaani AB − BA ✅.

11. A − B = [3 2; −6 −2], A + B = [5 0; 2 2].
   [3 2; −6 −2] × [5 0; 2 2] = [19 4; −34 −4]
   A² = [14 4; −8 −2], B² = [−3 −3; 12 0], A² − B² = [17 7; −20 −2]. **[19 4; −34 −4] ≠ [17 7; −20 −2]**, to bacche ki baat galat.
   Sahi roop: (A − B)(A + B) = A² + AB − BA − B². Ye A² − B² tabhi banta hai jab AB − BA = O ho (AB aur BA kat jaayein). Yahan AB = [8 −2; −2 2] aur BA = [6 1; 12 4], to AB − BA = [2 −3; −14 −2] zero nahi hai.
   Jaanch: A² + AB − BA − B² = [19 4; −34 −4], jo seedhe guna se mila matrix hai ✅.

12. P ke liye: naye coins = 2 × coins + 0 × gems, naye gems = 1 × coins + 3 × gems, to **P = [2 0; 1 3]**. Q ke liye: naye coins = 3 × coins + 1 × gems, naye gems = 0 × coins + 1 × gems, to **Q = [3 1; 0 1]**. Tokri v = [3; 2].
   **P phir Q:**
   [2 0; 1 3] × [3; 2] = [6; 9], [3 1; 0 1] × [6; 9] = [27; 9]
   **Q phir P:**
   [3 1; 0 1] × [3; 2] = [11; 2], [2 0; 1 3] × [11; 2] = [22; 17]
   Pehle order mein [27; 9] (27 coins, 9 gems), doosre mein [22; 17] (22 coins, 17 gems). **Alag basket aayi**: order ka farak padta hai.
   Story check: P phir Q wale hisaab mein P ke baad 6 coins aur 9 gems the, aur Q ne coins 3 × 6 + 9 = 27 kar diye.
   **Jaanch:** P phir Q ka ek matrix QP = [7 3; 1 3], aur (QP)v ka pehla element 7 × 3 + 3 × 2 = 27 ✅, doosra 1 × 3 + 3 × 2 = 9 ✅.

13. [3 3; x −3] ka square: (1, 1) element 3 × 3 + 3 × x = 9 + 3x, (1, 2) element 3 × 3 + 3 × (−3) = 0, (2, 1) element x × 3 + (−3) × x = 0, (2, 2) element x × 3 + (−3) × (−3) = 3x + 9. Sab 0 chahiye: 9 + 3x = 0, to **x = −3**. Tab matrix A = [3 3; −3 −3] hai, aur
   [3 3; −3 −3] × [3 3; −3 −3] = [0 0; 0 0]
   Ye dikhata hai ki "A² = O to A = O" **galat** hai: A zero nahi hai, phir bhi A² = O.
   Jaanch: (1, 1) element: 3 × 3 + 3 × (−3) = 0 ✅, (2, 2): (−3) × 3 + (−3) × (−3) = −9 + 9 = 0 ✅.

14. (a) **False** ❌. Part A ke example mein AB ≠ BA nikla; ek aise example se "hamesha barabar" wali baat toot jaati hai.
    (b) **False** ❌. Order 2 × 3 aur 3 × 1 wale pair mein sirf ek hi order ban sakta hai (Question 15 dekho).
    (c) **True** ✅. I ka kaam hi "kuch na karna" hai, daayein ho ya baayein.
    (d) **False** ❌. Question 4 mein A aur X dono zero nahi the, phir bhi AX = O.
    (e) **True** ✅, jab B + C aur AB, AC ban sakte hon. Ye distributive law hai, A hamesha baayein rakho.
    (f) **False** ❌. Sahi roop A² + AB + BA + B² hai, aur 2AB tabhi aata hai jab AB = BA (Question 10 mein dono alag nikle).

15. C 2 × 3 aur D 3 × 1: beech ke 3 aur 3 milte hain, to CD ka order 2 × 1.
   [4 −1 2; 0 3 −2] × [1; 5; 2] = [3; 11]
   DC mein D ke columns 1, C ke rows 2: 1 ≠ 2, isliye **DC nahi ban sakta.**
   Jaanch: CD ka pehla element: 4 × 1 + (−1) × 5 + 2 × 2 = 4 − 5 + 4 = 3 ✅, doosra: 0 + 15 − 4 = 11 ✅.

---

Shabaash! Ab tum jaante ho ki matrix ke guna mein **order bahut mayne rakhta hai**: moze aur joote ki tarah. Tumne dekha ki I "kuch na karna" aur O "sab mita dena" hai, ki A², A³ kaise bante hain, aur ki AX = B ko equations mein todkar tum anjaan nikaal sakte ho. Piyush ki tokri ke dono order ka farak ab tumhare liye matrix ki baat hai.

**Aage kya?** Ab tak hum alag-alag cheezein seekh chuke hain: jodna, ghatana, scalar se guna, aur matrix se guna. Topic 5 ([matrices-part5.md](matrices-part5.md)) mein ye sab ek saath dukaan aur mele ke sawaalon mein kaam aayega, practice ke saath, aur poore chapter ka saar.
