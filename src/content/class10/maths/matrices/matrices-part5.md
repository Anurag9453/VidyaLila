# Chapter: Matrices (Part 5)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [matrices-part4.md](matrices-part4.md) se aage chalti hai** (wahan Topic 4 mein AB aur BA ka alag hona, I aur O ke saath guna, A², distributive aur associative kanoon ka example se check, aur AX = B ko equations mein todkar hal karna seekha). Chapter ki shuruaat: [matrices.md](matrices.md). Jod-ghata aur scalar: [matrices-part2.md](matrices-part2.md). Row-by-column guna: [matrices-part3.md](matrices-part3.md). Chaar-kadam wali aadat: [ratio-and-proportion-part5.md](../ratio-and-proportion/ratio-and-proportion-part5.md).
> **Topics covered in this file:**
> 5. Sab Kuch Mila Kar: Word Problems, Practice Aur Chapter Ka Saar

---

# Topic 5: Sab Kuch Mila Kar: Word Problems, Practice Aur Chapter Ka Saar

Topic 4 mein tumne dekha ki matrix ke guna mein **order** bahut maayne rakhta hai (AB aur BA alag ho sakte hain), ki I "kuch na karna" aur O "sab mita dena" hai, aur ki AX = B ko element-by-element likhkar do equations bana lete hain. Ab chapter ka aakhri padaav: ye saare auzaar (table padhna, jodna-ghatana, scalar, row-by-column guna) asli kahaniyon mein kaise kaam aate hain? Is topic mein stock tables jodenge, bhaav aur matra se bill banayenge, kamayi mein se kharch ghatayenge, table ko scalar se badhayenge, kahani se anjaan nikalenge, ek "kaun sa kadam kab" table banayenge, purane topics ko jodne wale sawaal karenge, aakhri teen galtiyon se milenge, aur chapter ka saar ek table mein dekhenge.

---

## Dipika ka school fair

Dipika ki class ne school ke do din ke fair mein teen stall lagaye: **friendship band**, **bookmark** aur **sapling** (chhote paudhe ek gamle mein). Shanivaar aur Ravivaar, do din. Fair ke baad teacher ma'am ne register Dipika ko pakda diya: "Tum hisaab lagao: kul kitna maal tha, kitna bika, kamayi kitni hui, kharch kitna aaya, aur class ke paas kitna munafa bacha?"

Dipika ke saamne kai tables thin: ghar se banaya maal, school mein banaya maal, bikri, bhaav, banane ka kharch. Pehle to use laga ki har sawaal ke liye alag tareeka chahiye. Phir usne har table ka **order** likha (rows kya hain, columns kya) aur dekha ki order hi batata hai ki kaun si do tables ko jod sakte hain aur kin do ko guna kar sakte hain. Bilkul Topic 4 ke moze-joote ki tarah: kahani ka kram hi raasta dikha deta hai. Bikri ki register ye thi:

```
              Band    Bookmark  Sapling
Shanivaar [    48        35        22     ]
Ravivaar  [    62        41        30     ]
```

> **Figure 5.1** – Bikri ka matrix Q. Har row ek din hai (Shanivaar, Ravivaar), har column ek cheez (band, bookmark, sapling). Order 2 × 3: pehle rows, phir columns.

| Cheez | Bikri ka bhaav (₹ per piece) | Banane ka kharch (₹ per piece) |
|---|---|---|
| Band | 30 | 12 |
| Bookmark | 15 | 5 |
| Sapling | 40 | 22 |

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Kamayi (revenue)** | Bika hua maal ginti se bhaav guna karke, sab cheezon ka jod. Kharch nikalne se pehle ka paisa | Shanivaar ki kamayi ₹ 2,845 |
| **Kharch (cost)** | Maal banane mein lagi raashi | Shanivaar ka kharch ₹ 1,235 |
| **Munafa (profit)** | Kamayi minus kharch. Negative aaye to nuksaan | Shanivaar ka munafa ₹ 1,610 |
| **Bhaav ka column** | Cheezon ke bhaav ek ke neeche ek likha hua column, usi kram mein jis kram mein quantity table ke columns hain | P = [30; 15; 40] |
| **Ikai (unit)** | Jawab ke number ke saath likhi jaane wali cheez: ₹, pieces, dozen | Bhaav ₹ per piece, matra pieces, to jawab ₹ |
| **Chaar-kadam tareeka (matrix ke liye)** | Word problem ke chaar kadam: table aur order, kadam chuno, hisaab, story check (Ratio chapter wali aadat) | Part A |
| **Method chooser** | Ek table jo sawaal ka suraagh dekhkar batati hai ki kaun sa matrix kadam lagana hai | Part F |

---

## Pichhle topics se yaad

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [Topic 1](matrices.md) | Order m × n (pehle rows, phir columns), position a₁₂, row, column, square, zero, diagonal aur identity matrix | Har word problem ka pehla kadam, Example 10 (diagonal matrix) |
| [Topic 2](matrices-part2.md) | Jod aur antar sirf ek order ke matrices ka, scalar har element ko guna karta hai, A + X = B | Part A, Part C, Part D, Example 7 |
| [Topic 3](matrices-part3.md) | Row-by-column guna, shart: pehle ke columns = doosre ke rows, jawab ka order m × p, ones ka column aur ones ki row | Part B, Example 9, Galti 1 |
| [Topic 4](matrices-part4.md) | AB aur BA alag, A(B + C) = AB + AC, (AB)C = A(BC), AX = B ko equations mein todna | Example 4, Example 8, Example 9, Galti 1 |
| [Class 9, Elimination](../../../class9/maths/simultaneous-linear-equations/simultaneous-linear-equations-part2.md) | Do equations se ek variable hataana | Example 8 |

Is topic mein A, B, C, P, Q jaise letters har example mein **naye matrices** ke naam hain, jaise Topic 4 mein the.

---

## Part A: Chaar kadam aur stock tables ko jodna

Chaar kadam wahi hain jo tumne Quadratic Equations, Linear Inequations aur Ratio mein lagaye hain, bas yahan pehle kadam mein table aur uska order aata hai:

```
1. TABLE AUR ORDER : kaun si tables hain? har ek ka order (rows kya, columns kya)
        :
        v
2. KADAM CHUNO     : jod, ghata, scalar ya guna? uski shart dekho
        :
        v
3. HISAB           : jod aur ghata element-by-element, guna row-by-column
        :
        v
4. STORY CHECK     : jawab ka order, ikai, aur ek element haath se dobara
```

> **Figure 5.2** – Matrix wale word problem ke chaar kadam. Pehla aur aakhri kadam wahi hain jo har baar bachata hai: order aur story check.

**Kyun?** Jod aur ghata sirf **ek hi order** ke matrices ka banta hai (Topic 2), aur guna tab banta hai jab pehle ke columns doosre ke rows ke barabar hon (Topic 3). Isliye kadam chunne se pehle order likhna zaroori hai: wahi batata hai ki jo tum karna chahte ho wo ban bhi sakta hai ya nahi.

### Example 1: do stock tables joda (jod)

Shanivaar aur Ravivaar ke liye ghar se banaya maal S₁ aur school mein bacchon ka banaya maal S₂ hai (rows: Shanivaar, Ravivaar; columns: band, bookmark, sapling). Kul stock T = S₁ + S₂ nikalo.

1. **Table aur order:** dono 2 × 3.
2. **Kadam:** dono ka order ek hai, to jod ban sakta hai, aur T bhi 2 × 3 hoga.
3. **Hisaab:** har jagah ka element apne jodidar se jodo.

```
[ 70  55  30 ]   [ 20  15  10 ]   [  90   70   40 ]
[ 75  60  35 ] + [ 25  15  15 ] = [ 100   75   50 ]
```

> **Figure 5.3** – T = S₁ + S₂. Pehla matrix ghar ka maal, doosra school ka. Jaise Shanivaar ke band: 70 + 20 = 90.

**Story check:** order 2 × 3 wahi, ginti theek: S₁ ke saare numbers ka jod 325, S₂ ke 100, aur T ke 425 = 325 + 100.
**Jaanch:** Ravivaar ke sapling: 35 + 15 = 50, aur T ka a₂₃ = 50 ✅.

### Example 2: bikri ke baad kitna bacha (antar)

Bikri Q (Figure 5.1) ko stock T mein se ghatao: bacha hua maal L = T − Q.

```
[  90   70   40 ]   [ 48  35  22 ]   [ 42  35  18 ]
[ 100   75   50 ] − [ 62  41  30 ] = [ 38  34  20 ]
```

> **Figure 5.4** – L = T − Q. Dono 2 × 3 hain, to antar bhi 2 × 3. Jaise Shanivaar ke band: 90 − 48 = 42.

**Story check:** koi bhi element negative nahi, to bikri kisi bhi cheez ke stock se zyada nahi thi. Bacha hua maal 187 piece, aur 187 + 238 (bika) = 425 kul stock.
**Jaanch:** bika hua aur bacha hua jodo, T aana chahiye: Ravivaar ke bookmark 41 + 34 = 75 ✅.

---

## Part B: Bill nikalna, bhaav ka column aur quantity ki table

**Kyun?** Topic 3 mein tumne rate ki row ko ginti ke column se milaya tha. Yahan Q ki **har row ek din** hai: uske teen numbers band, bookmark, sapling ki ginti hain, bhaav ke column P mein bhi usi kram mein teen bhaav hain. Row ke har number ko apne bhaav se guna karo aur jodo: wahi us din ka bill. Q ke columns 3 aur P ke rows 3 barabar hain, to QP ban sakta hai, aur uska order 2 × 1 hoga: do din, har din ek kamayi.

### Example 3: kul kamayi (kamayi = Q × P)

P = [30; 15; 40] (₹ per piece). QP nikalo.

```
[ 48  35  22 ]   [ 30 ]   [ 2845 ]
[ 62  41  30 ] × [ 15 ] = [ 3675 ]
                 [ 40 ]
```

> **Figure 5.5** – QP. Pehli row ka hisaab: 48 × 30 + 35 × 15 + 22 × 40 = 1440 + 525 + 880 = 2845. Doosri row: 62 × 30 + 41 × 15 + 30 × 40 = 1860 + 615 + 1200 = 3675.

**Story check:** order 2 × 1 (do din). Ikai: pieces × (₹ per piece) = ₹, to Shanivaar ki kamayi ₹ 2,845 aur Ravivaar ki ₹ 3,675. Ravivaar ko har cheez zyada bikti thi (62 > 48, 41 > 35, 30 > 22), to kamayi bhi zyada: theek.
**Jaanch:** Shanivaar alag-alag: band 1440, bookmark 525, sapling 880, jod 2845 ✅.

Agar do bhaav-list ek saath chahiye (jaise purane aur festival-bhaav), to bhaav ke **do columns** wala 3 × 2 matrix lo: QP 2 × 2 banega, har column ek list ka bill (practice mein dekhoge).

### Example 4: kharch aur munafa

Banane ka kharch (₹ per piece) K = [12; 5; 22]. Ye kharch **bike hue maal** ka lo. Kharch QK, aur munafa = kamayi − kharch = QP − QK.

```
[ 48  35  22 ]   [ 12 ]   [ 1235 ]
[ 62  41  30 ] × [  5 ] = [ 1609 ]
                 [ 22 ]

[ 2845 ]   [ 1235 ]   [ 1610 ]
[ 3675 ] − [ 1609 ] = [ 2066 ]
```

> **Figure 5.6** – Upar kharch QK = [1235; 1609]. Neeche munafa QP − QK = [1610; 2066]. Dono column matrix hain (2 × 1), to antar ban sakta hai.

**Story check:** ikai ₹, order 2 × 1. Munafa kamayi se kam aur positive: Shanivaar 2845 − 1235 = 1610, Ravivaar 3675 − 1609 = 2066.
**Jaanch:** doosra tareeka. Pehle bhaav aur kharch ka antar P − K = [18; 10; 18] (har piece par munafa), phir Q(P − K): Shanivaar 48 × 18 + 35 × 10 + 22 × 18 = 864 + 350 + 396 = 1610 ✅. Ye Topic 4 ka A(B + C) = AB + AC wala kanoon hai, ek example se (pakka saboot nahi).

---

## Part C: Kamayi minus kharch, stall ke hisaab se

**Kyun?** Kabhi register stall ke hisaab se paisa likhta hai: rows stall, columns din. Aisi do tables (kamayi aur kharch) ka antar munafa deta hai. Dono ka order ek hona zaroori hai (Topic 2).

### Example 5: stall-wise munafa

Rupaye mein kamayi R aur kharch C (rows: band, bookmark, sapling; columns: Shanivaar, Ravivaar). Munafa-table R − C nikalo.

```
[ 1440  1860 ]   [ 576  744 ]   [  864  1116 ]
[  525   615 ] − [ 175  205 ] = [  350   410 ]
[  880  1200 ]   [ 484  660 ]   [  396   540 ]
```

> **Figure 5.7** – R − C, order 3 × 2. Jaise sapling ka Ravivaar: 1200 − 660 = 540.

**Story check:** har munafa positive, to har stall faydemand raha. Bookmark ka munafa sabse kam (350 aur 410), kyunki uska bhaav hi sabse kam hai. Munafa ke har column ka jod pehle wale answer se milna chahiye: 864 + 350 + 396 = 1610 aur 1116 + 410 + 540 = 2066, jo Example 4 ka munafa hai.
**Jaanch:** bookmark Shanivaar: 525 − 175 = 350 ✅.

---

## Part D: Table ko scalar se badhana

**Kyun?** Scalar poori table ko ek saath chhota ya bada karta hai (Topic 2): har element par wahi number.

### Example 6: munafa ka aadha school fund mein

Class ne tay kiya ki har stall ke munafe ka aadha school fund mein jayega. Fund ki table ½ × (R − C).

```
    [  864  1116 ]   [ 432  558 ]
½ × [  350   410 ] = [ 175  205 ]
    [  396   540 ]   [ 198  270 ]
```

> **Figure 5.8** – ½ × munafa-table. Har element aadha, order 3 × 2 wahi.

**Story check:** har element ke aadhe poore rupaye aaye, to koi paisa tutta nahi. Fund mein kul 432 + 558 + 175 + 205 + 198 + 270 = ₹ 1,838, aur poore munafe ka jod 3,676 ka aadha yahi hai.
**Jaanch:** 864 ÷ 2 = 432, aur 350 ÷ 2 = 175 ✅.

---

## Part E: Kahani se anjaan nikalna

**Kyun?** Kabhi register ka ek kona phat jaata hai ya bhaav pata nahi hota. Tab anjaan ko letter dete hain aur Topic 2 aur Topic 4 wali tarah har jagah ki ek equation banate hain.

### Example 7: phati hui register (anjaan elements)

Do almari ke stock ek-ek matrix hain (rows: almari 1, almari 2; columns: band, sapling). Subah ka stock aur aaya hua maal jodne par [x 30; 25 40] + [20 y; 15 x] = [60 55; 40 80]. x aur y nikalo.

```
[  x  30 ]   [ 20   y ]   [ 60  55 ]
[ 25  40 ] + [ 15   x ] = [ 40  80 ]
```

> **Figure 5.9** – Jodidar jagah ki equation: x + 20 = 60, 30 + y = 55, 25 + 15 = 40, 40 + x = 80.

Pehle element se **x = 40**, doosre se **y = 25**. Teesra sach (40 = 40), aur chautha 40 + 40 = 80 bhi sach: x dono jagah wahi aaya.
**Story check:** x aur y ginti hain, to positive poore number hone chahiye: 40 aur 25 theek.
**Jaanch:** x = 40, y = 25 daalo: [40 30; 25 40] + [20 25; 15 40] = [60 55; 40 80] ✅.

### Example 8: anjaan bhaav (AX = B)

Ek aur class ke stall par do cheezein thi: mehendi cone aur sticker. Bhaav x aur y (₹ per piece) pata nahi, par register mein bikri aur din ki kamayi hai. Bikri Q′ = [14 20; 9 30] (rows: Shanivaar, Ravivaar; columns: cone, sticker) aur kamayi B = [550; 525]. X = [x; y] nikalo.

```
[ 14  20 ]   [ x ]   [ 550 ]
[  9  30 ] × [ y ] = [ 525 ]

14x + 20y = 550
 9x + 30y = 525
```

> **Figure 5.10** – Q′X = B. Q′ 2 × 2 aur X 2 × 1 ka guna 2 × 1 hai, jo B ke order se milta hai. Row-by-column se do equations: 14x + 20y = 550 aur 9x + 30y = 525.

Elimination (Class 9): pehli equation ko 3 se aur doosri ko 2 se guna: 42x + 60y = 1650 aur 18x + 60y = 1050. Ghatao: 24x = 600, to **x = 25**. Phir 20y = 550 − 350 = 200, **y = 10**. X = [25; 10].
**Story check:** bhaav positive aur kahani jaise: cone ₹ 25, sticker ₹ 10.
**Jaanch:** doosri row: 9 × 25 + 30 × 10 = 225 + 300 = 525 ✅.

---

## Part F: Kaun sa kadam, kab? (method chooser)

| Sawaal ka suraagh | Kadam | Shart | Jawab ka order |
|---|---|---|---|
| Do tables, ek hi cheez, "milakar", "kul" | A + B | Dono ka order ek | Wahi order |
| Ek table mein se doosri, "bacha", "munafa" | A − B (jaise T − Q, R − C) | Dono ka order ek | Wahi order |
| "Doguna", "aadha", "ek chauthai" | kA | Koi shart nahi | Wahi order |
| Matra aur bhaav se bill | Quantity table pehle, bhaav ka column baad mein: QP | Q ke columns = P ke rows | Q ke rows × P ke columns |
| Do bhaav-list ya do kharch-list ek saath | Bhaav ke do columns wala matrix | Wahi shart | Din × list |
| Har row ya har column ka total | Ones ka column ya ones ki row se guna | Ones ka order sahi | Row ke liye m × 1, column ke liye 1 × n |
| Kuch bhaav ya kuch ginti anjaan, totals diye | AX = B likho, row-by-column se equations | A ke columns = X ke rows | X ka order |

Ek chhoti si salah: **pehle order likho, phir kadam chuno.** Agar order nahi milta, to ya kadam galat hai ya matrix galat taraf rakha hai (Galti 1 dekho).

---

## Part G: Purane topics ko jodne wale sawaal

### Example 9: kul munafa do tareeke se (Topic 1, 3 aur 4)

Munafa-table G = R − C (Example 5, 3 × 2). Fair ka kul munafa chahiye. (i) Pehle ones ki row U = [1 1 1] se har din ka total, phir ones ke column V = [1; 1] se dono din. (ii) Pehle V se har stall ka total, phir U se.

```
Pehle din ka total, phir dono din:
              [  864  1116 ]
[ 1  1  1 ] × [  350   410 ] = [ 1610  2066 ]
              [  396   540 ]
                 [ 1 ]
[ 1610  2066 ] × [ 1 ] = [ 3676 ]

Pehle stall ka total, phir dono stall:
[  864  1116 ]   [ 1 ]   [ 1980 ]
[  350   410 ] × [ 1 ] = [  760 ]
[  396   540 ]           [  936 ]
              [ 1980 ]
[ 1  1  1 ] × [  760 ] = [ 3676 ]
              [  936 ]
```

> **Figure 5.11** – Pehle do line (UG)V: UG = [1610 2066] din ke total, phir 3676. Baaki do line U(GV): GV = [1980; 760; 936] stall ke total, phir 3676.

**Story check:** ikai ₹, aur 1610 + 2066 = 1980 + 760 + 936 = 3676. Koi munafa na chhoota, na do baar gina gaya. Bracket kahin bhi lagao, jawab wahi: Topic 4 ka (AB)C = A(BC), ek example se.
**Jaanch:** 1980 = 864 + 1116 (band ke dono din) ✅.

### Example 10: agar bookmark stall na lagta (diagonal matrix, Topic 1 aur 3)

Dipika ne poochha: "Agar class ne sirf band aur sapling stall lagaye hote, aur bookmark stall nahi, to kamayi?" Diagonal matrix D = [1 0 0; 0 0 0; 0 0 1] bookmark ke column ko 0 kar deta hai. Q ko D se (QD), phir P se guna.

```
[ 48  35  22 ]   [ 1  0  0 ]   [ 48   0  22 ]
[ 62  41  30 ] × [ 0  0  0 ] = [ 62   0  30 ]
                 [ 0  0  1 ]

[ 48   0  22 ]   [ 30 ]   [ 2320 ]
[ 62   0  30 ] × [ 15 ] = [ 3060 ]
                 [ 40 ]
```

> **Figure 5.12** – QD, order 2 × 3 (Q ka bookmark column 0 ho gaya, baaki wahi), phir (QD)P, order 2 × 1.

**Story check:** do stall ki kamayi bachi, to teen stall wali [2845; 3675] se kam honi chahiye: 2320 < 2845 aur 3060 < 3675.
**Jaanch:** bookmark ki kamayi alag se: Shanivaar 35 × 15 = 525, 2845 − 525 = 2320 ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: bhaav ka column pehle, quantity ki row baad mein likhna (PQ jab QP chahiye)**

Ek hair-clip aur ribbon ke stall par bhaav column P = [18; 25] hai aur ek din ki bikri row q = [30 14] (30 clip, 14 ribbon). Ek bachche ne "bhaav × bikri" soch kar P ko pehle rakha:

```
Galat, Pq:
[ 18 ]                [ 540  252 ]
[ 25 ] × [ 30  14 ] = [ 750  350 ]

Sahi, qP:
             [ 18 ]
[ 30  14 ] × [ 25 ] = [ 890 ]
```

> **Figure 5.13** – Upar galat Pq: 2 × 1 ko 1 × 2 se guna to 2 × 2 matrix, chaar numbers. Neeche sahi qP: 1 × 2 ko 2 × 1 se guna to ek number.

**Ulta udaharan:** Pq mein 252 = 18 × 14, yaani clip ka bhaav ribbon ki ginti se guna. Aisa koi hisaab dukaan mein hota hi nahi, aur ek bill ke bajaay chaar numbers mile.
Kyun galat? Row-by-column mein pehle matrix ki row ginti wali honi chahiye aur doosre matrix ka column bhaav wala: **jo cheez ginti ke saath ek-ek karke milani ho, wo doosre matrix mein ek column hona chahiye.** Quantity matrix pehle, bhaav ka column baad mein. (Topic 4 ka seekh: AB aur BA alag cheezein hain, aur yahan sirf ek hi kahani ka sahi roop hai.)
**Jaanch:** sahi qP = [30 × 18 + 14 × 25] = [540 + 350] = [890] ✅ (Pq ke diagonal ke do numbers 540 aur 350 wahi hain, baaki 252 aur 750 bekaar).

**Galti 2: jawab ki ikai bhool jaana (dozen ko piece maan lena)**

Ek stall par hair-clip ₹ 8 per piece aur ribbon ₹ 14 per piece. Kal 4 dozen clip aur 3 dozen ribbon bike. Ek bachche ne quantity row [4 3] ko bhaav column [8; 14] se guna:

```
Galat (dozen ki ginti):
           [  8 ]
[ 4  3 ] × [ 14 ] = [ 74 ]

Sahi (pieces mein, 1 dozen = 12 pieces):
             [  8 ]
[ 48  36 ] × [ 14 ] = [ 888 ]
```

> **Figure 5.14** – Upar galat: dozen ki ginti ko ₹ per piece se guna, 74. Neeche sahi: pehle dozen ko piece mein badla (1 dozen = 12 pieces): 48 clip, 36 ribbon, phir guna: 888.

**Ulta udaharan:** 4 × 8 + 3 × 14 = 74 ka matlab na ₹ 74 hai na kuch aur: dozen × (₹ per piece) ek aisi ikai hai jo hoti hi nahi. Asli kamayi ₹ 888 hai, ₹ 74 ka 12 guna.
Kyun galat? Guna tabhi sahi hai jab ginti aur bhaav **ek hi ikai** par ho (piece par bhaav, to ginti pieces mein). Hamesha jawab ke saath ikai likho: pieces × (₹ per piece) = ₹.
**Jaanch:** 12 × 74 = 888 ✅.

**Galti 3: jawab ke matrix ka order badal dena**

Teen stall aur do din ki kamayi R aur kharch C (₹) ka antar nikalna tha. Dono 3 × 2 hain. Bachche ne antar ke chhe number nikaale, par jawab 2 × 3 ke roop mein likh diya (din rows, stall columns), numbers wahi padhne ke kram mein bharkar:

```
Sahi, 3 × 2 (rows stall, columns din):
[ 410  520 ]   [ 250  290 ]   [ 160  230 ]
[ 260  300 ] − [ 165  180 ] = [  95  120 ]
[ 380  450 ]   [ 170  175 ]   [ 210  275 ]

Bachche ka jawab, 2 × 3:
[ 160  230   95 ]
[ 120  210  275 ]
```

> **Figure 5.15** – Sahi jawab 3 × 2: rows stall, columns din. Galat jawab 2 × 3: wahi chhe numbers, par stall aur din ki jagah gadbad ho gayi.

**Ulta udaharan:** galat table ke hisaab se din 1 ke teesre stall ka munafa 95 aaya (a₁₃ = 95), jabki teesra stall Shanivaar ko 380 − 170 = 210 kamata hai. 95 to doosre stall ka Shanivaar ka munafa hai.
Kyun galat? Antar ka order wahi rehta hai jo dono matrices ka hai (Topic 2): 3 × 2. Aur har row aur column ka matlab kahani tay karti hai, numbers ka kram nahi: yahan row = stall, column = din. (Guna ho to jawab ki rows pehle matrix ki rows jaisi hoti hain aur columns doosre matrix ke columns jaise: Topic 3.)
**Jaanch:** sahi table mein stall 3 ka Shanivaar wala element a₃₁ = 380 − 170 = 210 ✅, aur 95 to a₂₁ hai (260 − 165, stall 2 ka Shanivaar). Galat table ne 95 ko stall 3 ke naam kar diya.

---

## Quick Recap

- **Chaar kadam:** table aur order, kadam chuno, hisaab, story check. Pehle order likho, phir kadam.
- **Jod aur antar** (stock joda, bacha stock, munafa = kamayi − kharch): sirf ek order ke matrices, jawab ka order wahi.
- **Bill:** quantity table pehle, bhaav ka column baad mein (QP). Shart: Q ke columns = P ke rows. Jawab: Q ki rows × P ke columns. Do bhaav-list ho to P ke do columns.
- **Scalar** (aadha, doguna): har element par wahi number, order wahi.
- **Anjaan:** jodidar jagah ya row-by-column se equations banao, Class 9 ki tarah hal karo, aur wapas daalkar jaancho.
- **Ones ka column ya row** total deta hai; (UG)V = U(GV).
- **Jawab ki ikai** likho: pieces × (₹ per piece) = ₹.
- Galtiyan: bhaav ka column pehle rakhna, ikai bhoolna (dozen ko piece maanna), jawab ka order badal dena.

---

## Practice Questions

A fair at another school is used in these questions. Check every answer by substituting back.

1. On Friday and Saturday a greeting-card, key-chain and paper-lamp stall start with M = [56 40 18; 60 45 20] (rows: Friday, Saturday; columns: cards, key chains, lamps) and receive more stock U = [14 10 12; 15 5 10]. Find the total stock. Then find what is left after the sales Q = [34 26 15; 41 30 18].
2. Using Q from Question 1, find the daily earnings if the prices are ₹ 25, ₹ 35 and ₹ 60 per piece for cards, key chains and lamps. Write the three matrices with their orders.
3. The making costs are ₹ 9, ₹ 14 and ₹ 28 per piece for cards, key chains and lamps. Find the daily cost of the pieces sold in Question 1 and the daily profit.
4. Revenue (₹) of three stalls on two days: R = [3200 2750; 1480 1925; 2100 2640]. Cost: C = [1450 1190; 760 905; 1280 1330]. Find the profit table. Which stall and which day has the least profit?
5. At a science exhibition a child ticket costs c and an adult ticket costs a (₹). Tickets sold on two days: [30 12; 18 25] (rows: days; columns: child, adult). Collections were ₹ 930 and ₹ 1,270. Find c and a.
6. A stall sells three things. Sales on two days: X = [20 15 10; 25 12 16]. Normal prices are ₹ 20, 45 and 30 and festival prices are ₹ 18, 40 and 32. Write the price matrix and find XP. What does the entry in row 2, column 2 mean?
7. Find x and y if [x + 2, 7; 4, 3y] + [1, y; x, 9] = [7, 13; 8, 27].
8. A student has the price column P = [22; 16; 35] and one day's sales row q = [18 25 9]. She wrote Pq as the day's earnings. What is the order of Pq? Write the correct product and its order.
9. A stall sells candles in packs of 10: 6 packs of one kind and 4 packs of another, at ₹ 7 and ₹ 12 per candle. A student found 6 × 7 + 4 × 12 = 90. What is wrong, and what is the correct earning?
10. Let X = [10 20 5; 8 15 12] (rows: days; columns: items) and Y = [12 10; 25 22; 40 35] (rows: items; columns: cost lists A and B). Find XY. What do its rows and columns stand for? A student called the columns of XY "items": explain the error.
11. For Q = [16 9; 12 20], P = [45; 30] and K = [28; 17] find the profit as QP − QK and as Q(P − K). Which law of Topic 4 is this?
12. True or false, with a reason: (a) For a 3 × 1 price column P and a 2 × 3 quantity matrix Q, the product PQ is defined. (b) A 3 × 2 table can be subtracted from a 2 × 3 table. (c) Multiplying a 2 × 3 matrix by a 3 × 1 column of ones gives a 2 × 1 matrix of row totals. (d) The product of a quantity in pieces and a price in ₹ per piece is in ₹. (e) If Q is 2 × 3 and P is 3 × 2, then QP is 2 × 2.

### Answers

**1.** Dono 2 × 3: jod ban sakta hai. M + U = [70 50 30; 75 50 30]. Bacha: [70 50 30; 75 50 30] − [34 26 15; 41 30 18] = [36 24 15; 34 20 12].
**Jaanch:** Friday ke cards: bacha 36 + bika 34 = 70 ✅.

**2.** Q 2 × 3, P = [25; 35; 60] 3 × 1, QP 2 × 1. Friday 34 × 25 + 26 × 35 + 15 × 60 = 850 + 910 + 900 = 2660. Saturday 41 × 25 + 30 × 35 + 18 × 60 = 1025 + 1050 + 1080 = 3155. **QP = [2660; 3155]** (₹).
**Jaanch:** Friday ke cards 850, key chains 910, lamps 900, jod 2660 ✅.

**3.** K = [9; 14; 28]. QK: Friday 34 × 9 + 26 × 14 + 15 × 28 = 306 + 364 + 420 = 1090, Saturday 41 × 9 + 30 × 14 + 18 × 28 = 369 + 420 + 504 = 1293. Munafa QP − QK = [2660 − 1090; 3155 − 1293] = **[1570; 1862]**.
**Jaanch:** Q(P − K) ke saath: P − K = [16; 21; 32], Friday 34 × 16 + 26 × 21 + 15 × 32 = 544 + 546 + 480 = 1570 ✅.

**4.** Dono 3 × 2, R − C = **[1750 1560; 720 1020; 820 1310]**. Sabse kam munafa **720**: stall 2, din 1.
**Jaanch:** 1480 − 760 = 720 ✅.

**5.** [30 12; 18 25] × [c; a] = [930; 1270]: 30c + 12a = 930 aur 18c + 25a = 1270. Pehli ko 25 se, doosri ko 12 se guna: 750c + 300a = 23250 aur 216c + 300a = 15240. Ghatao: 534c = 8010, **c = 15**. Phir 12a = 930 − 450 = 480, **a = 40**.
**Jaanch:** 18 × 15 + 25 × 40 = 270 + 1000 = 1270 ✅.

**6.** P = [20 18; 45 40; 30 32] (3 × 2: column 1 normal, column 2 festival). X 2 × 3, XP 2 × 2. Row 1: 20 × 20 + 15 × 45 + 10 × 30 = 1375, 20 × 18 + 15 × 40 + 10 × 32 = 1280. Row 2: 25 × 20 + 12 × 45 + 16 × 30 = 1520, 25 × 18 + 12 × 40 + 16 × 32 = 1442. **XP = [1375 1280; 1520 1442]**. Row 2, column 2 = 1442: doosre din festival-bhaav par kamayi ₹ 1,442.
**Jaanch:** 450 + 480 + 512 = 1442 ✅.

**7.** x + 2 + 1 = 7, **x = 4**. 7 + y = 13, **y = 6**. 4 + x = 8 sach (x = 4). 3y + 9 = 27, y = 6 sach.
**Jaanch:** [6 7; 4 18] + [1 6; 4 9] = [7 13; 8 27] ✅.

**8.** P 3 × 1 aur q 1 × 3: Pq ban jaata hai par order **3 × 3** hai (9 numbers), din ki kamayi nahi. Sahi: qP, 1 × 3 ko 3 × 1 se, order 1 × 1: 18 × 22 + 25 × 16 + 9 × 35 = 396 + 400 + 315 = **[1111]**, yaani ₹ 1,111.
**Jaanch:** 396 + 400 = 796, 796 + 315 = 1111 ✅.

**9.** 6 aur 4 packs hain, pieces nahi. Pieces: 60 aur 40. Kamayi 60 × 7 + 40 × 12 = 420 + 480 = **₹ 900**. 90 ginti mein 10 guna kam hai (packs ko piece maana).
**Jaanch:** 10 × 90 = 900 ✅.

**10.** X 2 × 3, Y 3 × 2, XY 2 × 2. Row 1: 10 × 12 + 20 × 25 + 5 × 40 = 820, 10 × 10 + 20 × 22 + 5 × 35 = 715. Row 2: 8 × 12 + 15 × 25 + 12 × 40 = 951, 8 × 10 + 15 × 22 + 12 × 35 = 830. **XY = [820 715; 951 830]**. Rows din hain (X ki rows), columns cost-lists A aur B (Y ke columns). Items to guna mein jod ho gaye, isliye columns items nahi.
**Jaanch:** 8 × 10 + 15 × 22 + 12 × 35 = 80 + 330 + 420 = 830 ✅.

**11.** QP = [16 × 45 + 9 × 30; 12 × 45 + 20 × 30] = [990; 1140]. QK = [16 × 28 + 9 × 17; 12 × 28 + 20 × 17] = [601; 676]. QP − QK = **[389; 464]**. P − K = [17; 13], Q(P − K) = [16 × 17 + 9 × 13; 12 × 17 + 20 × 13] = [389; 464]. Barabar: ye **distributive law** hai (Topic 4 mein A(B + C) = AB + AC dekha tha, aur P − K = P + (−K), to wahi kanoon), ek example se, saboot nahi.
**Jaanch:** 272 + 117 = 389 ✅.

**12.** (a) **False ❌.** P ke columns 1, Q ke rows 2: alag, PQ defined nahi. (b) **False ❌.** Orders 3 × 2 aur 2 × 3 alag, antar nahi banta. (c) **True ✅.** (2 × 3)(3 × 1) = 2 × 1, har row ka total (Topic 3). (d) **True ✅.** pieces × (₹ per piece) = ₹. (e) **True ✅.** (2 × 3)(3 × 2) = 2 × 2.

---

Shabaash! Tumne sirf auzaar nahi, unka sahi istemal bhi seekha: kahani se tables nikalna, order dekhkar kadam chunna, row-by-column se bill banana, aur story check se jawab ko kasna. Neeche poore chapter ka saar ek table mein hai.

---

# Chapter Wrap-up: Matrices

| Topic | Kya seekha | Ek line |
|---|---|---|
| 1. Numbers Ka Dabba: Matrix Kya Hota Hai? | Matrix numbers ka dabba, element ki position a₁₂ (pehle row, phir column), order m × n, row, column, square, zero, diagonal aur identity matrix; galtiyan: order ko columns × rows padhna, matrix ko ek number samajhna | Matrix mein jagah aur order dono maayne rakhte hain, aur wo ek number nahi, poora dabba hai |
| 2. Matrix Ke Saath Jod-Ghata Aur Barabari | Barabar matrices, A + B aur A − B (ek hi order), −A, scalar se guna, 2A + 3B, A + X = B; galtiyan: alag order jodna, sirf ek element ko scalar se guna | Jod aur ghata jodidar jagah ke elements ke hote hain, aur scalar har element ko guna karta hai |
| 3. Matrix Ka Guna: Row Ko Column Se Milana | Row-by-column rule, shart (pehle ke columns = doosre ke rows), jawab ka order m × p, ones ka column; galtiyan: element-by-element guna, order na milna | Guna row ko column se milakar hota hai, aur pehle shart dekhni hoti hai |
| 4. Order Ka Khel: AB Aur BA, Identity Aur Zero | AB ≠ BA, AI = IA = A, AO = O, A², distributive aur associative kanoon (example se), AX = B; galtiyan: AB = BA maanna, AB = O se A = O ya B = O nikalna | Order badalne se nateeja badal sakta hai, aur I "kuch na karna" jabki AB = O mein koi factor zero nahi bhi ho sakta |
| 5. Sab Kuch Mila Kar: Word Problems, Practice Aur Chapter Ka Saar | Chaar-kadam tareeka, stock jodna, bill (quantity table × bhaav ka column), munafa = kamayi − kharch, scalar, kahani se anjaan, method chooser; galtiyan: bhaav ka column pehle rakhna, ikai bhoolna, jawab ka order badalna | Pehle order likho, phir kadam chuno, aur jawab ko kahani aur ikai ke saath jaancho |

---

Matrices ka ye safar joote ke dabbe wale stock register se shuru hua, khilone ki dukaan aur school-uniform ki rate list se guzra, moze-joote aur robot ke gate se seekha, aur aaj school fair ke munafe par poora hua. Ab tum kisi bhi table wali kahani ko pakad kar sahi kadam chun sakte ho.

**Aage kya?** Class 10 Maths Chapter 9 Similar Triangles mein do shaklein dekhenge jo dikhne mein ek jaisi hain, bas chhoti-badi.
