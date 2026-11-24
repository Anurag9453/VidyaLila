# Chapter: Similar Triangles (Part 4)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [similar-triangles-part3.md](similar-triangles-part3.md) se aage chalti hai** (wahan Topic 3 mein AA, SSS aur SAS: do triangle similar kab hote hain, ye jaanchne ke teen tareeke). Chapter ki shuruaat: [similar-triangles.md](similar-triangles.md). Class 9 ka Pythagoras theorem aur uske Proof 2 ka adhura wada: [pythagoras-theorem.md](../../../class9/maths/pythagoras-theorem/pythagoras-theorem.md).
> **Topics covered in this file:**
> 4. Similar Triangles Se Kaam: Height, Doori Aur Pythagoras Ka Naya Saboot

---

# Topic 4: Similar Triangles Se Kaam: Height, Doori Aur Pythagoras Ka Naya Saboot

Topic 1 mein humne dekha ki similar triangles ke corresponding angles barabar aur corresponding sides ek hi ratio mein hoti hain. Topic 2 mein parallel line ne triangle ki sides ko ek hi ratio mein baanta. Topic 3 mein AA, SSS aur SAS jaise tests mile, jinse pata chalta hai ki do triangle similar hain ya nahi. Ab tak hum triangles ko "pehchaan" rahe the. Aaj unse **kaam** lenge: aisi cheezein naapenge jinhe tape se naapna mushkil ya namumkin hai, aur ek purana wada nibhayenge jo Class 9 ke Pythagoras chapter mein reh gaya tha.

---

## Qasim aur paani ki tanki

Qasim ke mohalle ke khule maidan mein lohe ke khambhon par ek bahut oonchi paani ki tanki khadi hai. Roz subah Qasim use dekhta hai aur sochta hai: "Ye kitni oonchi hogi? Dus meter? Bees meter?" Mummy ne kaha, "Tanki par chadhkar tape se naapne ki zarurat nahi, aur chadhna theek bhi nahi. Bas dhoop ka intezaar karo."

Papa ne Qasim ko ek 1.2 m ki seedhi lakdi (stick) di aur kaha: "Isse zameen par seedha khada karo, aur tanki ki parchhai (shadow) bhi dekho." Qasim ne dopahar mein level zameen par stick khadi ki. Usne naapa:

- stick ki parchhai: **0.9 m**
- tanki ki parchhai (tanki ke neeche se parchhai ke sire tak): **7.5 m**

Qasim hairaan: "Par ye to tanki ki unchai nahi, sirf parchhai ki lambai hai!" Papa muskuraye. "Stick aur tanki dono zameen par seedhe khade hain. Dhoop ek hi waqt par dono par ek hi kone se aa rahi hai. Zara us triangle ko dekho jo har cheez, uski parchhai aur dhoop ki kiran milkar banati hai."

Qasim ne figure banayi.

```
        A
:       |\
:       | \
  h m   |  \  dhoop ki kiran       P
:       |   \                      |\
:       |    \             1.2 m  | \
        B-----C                    Q--R
        parchhai 7.5 m             0.9 m
```

> **Figure 4.1** – Baayein: tanki AB (unchai h m, anjaan), uski parchhai BC = 7.5 m aur dhoop ki kiran AC. Daayein: stick PQ = 1.2 m, uski parchhai QR = 0.9 m aur dhoop ki kiran PR. Dono triangle ek hi waqt ke hain. Baayein ki ':' wali line tanki ki unchai h dikhati hai. Figure naap ke hisaab se nahi hai.

Sawaal ye hai: **kya in do triangles se tanki ki unchai nikal sakti hai?** Haan, aur isme na seedhi, na chadhai: bas similar triangles.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Indirect naap** | Kisi lambai ko seedha tape se naapne ke bajay, similar triangles se nikalna | Tanki par chadhe bina uski unchai |
| **Parchhai wala triangle** | Seedhi khadi cheez, zameen par uski parchhai, aur cheez ke upar ke sire se parchhai ke sire tak dhoop ki kiran: in teeno se bana triangle | Figure 4.1 mein ΔABC |
| **Foot of the altitude** | Right angle wale kone se hypotenuse par girayi perpendicular jahan hypotenuse ko chhooti hai | ΔABC mein ∠A = 90° ho to AD hypotenuse BC par girayi perpendicular, aur D uska foot |
| **Hypotenuse ke tukde** | Altitude ka foot D hypotenuse BC ko jo do hisson mein baanta hai | BD aur DC |
| **Leg relation** | AB² = BD × BC jaise result: ek leg ka square = hypotenuse ka wo tukda jo us leg ke chhor B se juda hai, guna poori hypotenuse | AB² = BD × BC |
| **Altitude relation** | AD² = BD × DC: altitude ka square = hypotenuse ke do tukdon ka guna | AD² = BD × DC |

---

## Pehle se kya yaad hai

- **Altitude** Class 9 ke [Triangles, Topic 2](../../../class9/maths/triangles/triangles-part2.md) mein aaya tha: kisi vertex se saamne wali side par girayi perpendicular line.
- **AA test** (Topic 3): agar do triangles mein do-do angle barabar hon, to teesra angle angle-sum se apne aap barabar ho jaata hai aur triangle similar hote hain.
- **Similar ka matlab** (Topic 1): ΔABC ~ ΔPQR ka matlab A↔P, B↔Q, C↔R, aur AB/PQ = BC/QR = CA/RP = k.
- **Mean proportional**: Ratio chapter ke [Topic 3](../ratio-and-proportion/ratio-and-proportion-part3.md) mein a : b = b : c wale beech ke number b ko mean proportional kaha tha, b² = ac. Aaj ek triangle mein wahi dikhega.
- **Class 9 ka wada**: [Pythagoras theorem](../../../class9/maths/pythagoras-theorem/pythagoras-theorem.md) ke Proof 2 mein likha tha: "Right angle wale kone se hypotenuse par ek perpendicular girao. Isse bada triangle do chhote right triangles mein toot jata hai, aur teeno triangles **similar** (ek hi shape ke, alag size ke) nikalte hain." Aur: "Iska poora detail hum **aage ki class mein** dekhenge, jab similarity padhenge." Wo "aage ki class" ab aa gayi hai: Part C mein.

---

## Part A: Parchhai se unchai

### Kyun kaam karta hai?

Do cheezein pakki hain.

1. Tanki aur stick **dono zameen par seedhe khade hain**, yaani dono ka zameen ke saath angle 90° hai. Is chapter mein hum zameen ko level aur khadi cheezein ko bilkul seedha maan rahe hain.
2. Suraj bahut door hai, isliye ek hi waqt mein uski kirnein dono jagah (tanki par aur stick par) **parallel** maani ja sakti hain. (Ye ek achhi lagbhag-maanyata hai: suraj itna door hai ki kirnon ke beech ka farak itna chhota hai ki use nazarandaaz kar sakte hain. Isiliye naap **ek hi waqt** par lena zaroori hai: kuch ghante baad suraj ka kona badal jaata hai.)

Parallel kirnein zameen se ek hi angle banati hain: Class 9 ke corresponding angles wali baat. To Figure 4.1 mein ∠C = ∠R. Aur ∠B = ∠Q = 90°. Do angle barabar hain to **AA** se:

**ΔABC ~ ΔPQR** (A↔P, B↔Q, C↔R).

Similar triangles ki corresponding sides ek hi ratio mein hoti hain:

AB/PQ = BC/QR

Yani **tanki ki unchai / stick ki unchai = tanki ki parchhai / stick ki parchhai.** Ek anjaan (AB), baaki teen pata. Ye ek proportion hai, aur ratio chapter ka ad = bc yahan kaam aata hai.

### Example 1: Qasim ki tanki

Stick PQ = 1.2 m, uski parchhai QR = 0.9 m, tanki ki parchhai BC = 7.5 m. Tanki ki unchai AB = h?

**Step 1 (similar triangles):** ΔABC ~ ΔPQR (AA: ∠B = ∠Q = 90°, ∠C = ∠R, ek hi waqt ki dhoop).

**Step 2 (proportion):** AB/PQ = BC/QR, yaani h/1.2 = 7.5/0.9.

**Step 3 (solve):** h × 0.9 = 1.2 × 7.5 = 9, to h = 9/0.9 = **10 m.**

**Jaanch:** stick ka ratio unchai : parchhai = 1.2 : 0.9 = 4 : 3. Tanki ka 10 : 7.5 = 4 : 3. Dono ratio barabar hain ✅

**Story check:** tanki ki parchhai (7.5 m) uski unchai (10 m) se chhoti hai, jaise stick ki parchhai (0.9 m) uski unchai (1.2 m) se chhoti hai. Dhoop kaafi upar se aa rahi hai, to dono jagah ek hi baat hai. Dus meter tanki ke liye realistic bhi hai.

### Example 2: Imaarat aur lamppost

Ek imaarat ki parchhai 19.2 m hai. Usi waqt, usi level zameen par, ek 5 m oonche lamppost ki parchhai 3.2 m hai. Imaarat kitni oonchi hai?

**Step 1:** lamppost aur imaarat dono seedhe khade hain, kirnein parallel: AA se **ΔABC ~ ΔPQR**, jahan AB imaarat, BC uski parchhai; PQ lamppost, QR uski parchhai.

**Step 2:** AB/PQ = BC/QR, yaani h/5 = 19.2/3.2.

**Step 3:** 19.2/3.2 = 6, to h = 5 × 6 = **30 m.**

**Jaanch:** lamppost ka ratio 5 : 3.2 = 25 : 16. Imaarat ka 30 : 19.2 = 25 : 16 (dono ko 1.2 se bhaag karo: 30/1.2 = 25, 19.2/1.2 = 16) ✅

**Story check:** imaarat ki parchhai (19.2 m) uski unchai (30 m) se kam hai, aur lamppost ke case mein bhi parchhai (3.2) unchai (5) se kam hai. Do cheezein ek jaisi dikhti hain, hisaab mein koi ulti baat nahi.

### Ek aur tareeka: zameen par rakha sheesha (optional)

Agar dhoop na ho to? Ek chhota sheesha zameen par rakho, aur itna peeche hato ki sheeshe mein tanki ka upar wala sira dikh jaaye. Class 9 ke [Light Reflection](../../../class9/physics/light-reflection/light-reflection-part2.md) ka Law 1 kehta hai: angle of incidence = angle of reflection (ye angle normal se naapte hain, aur zameen par rakhe sheeshe ke liye iska matlab hai ki aati aur jaati kirnein zameen ke saath bhi barabar angle banati hain). Isse do right triangles mein ek-ek angle barabar mil jaata hai, aur AA kaam kar jaata hai.

```
                           H
                        /  |
                     /     |
    E             /        |
:   |\          /          |
:   |  \      /            |
:   |    \  /              |
    F-----M----------------T
```

> **Figure 4.2** – Qasim ki aankh E, uske paer F; sheesha zameen par M par; tanki ki chhat H, uska neeche wala point T. Kiran E se M tak jaakar M se H tak jaati hai. Baayein ki ':' wali line Qasim ki aankh ki unchai EF dikhati hai. Figure naap ke hisaab se nahi hai: asli doori FM aur MT ka ratio kaafi bada hota hai.

**Example 3:** Qasim ki aankh zameen se EF = 1.6 m oonchi hai. Sheesha M uske paer F se 2.5 m door hai, aur tanki ke neeche T se 15 m door (F, M, T ek seedhi line mein). Usne sheeshe mein tanki ka upar wala sira H dekha. Tanki ki unchai HT?

**Step 1:** ΔEFM aur ΔHTM mein ∠F = ∠T = 90°, aur ∠EMF = ∠HMT (sheeshe ke niyam se). AA se **ΔEFM ~ ΔHTM** (E↔H, F↔T, M↔M).

**Step 2:** EF/HT = FM/TM, yaani 1.6/HT = 2.5/15.

**Step 3:** HT = 1.6 × 15 / 2.5 = 24/2.5 = **9.6 m.**

**Jaanch:** EF : FM = 1.6 : 2.5 = 16 : 25. HT : TM = 9.6 : 15 = 16 : 25 (dono ko 0.6 se bhaag karo) ✅

**Story check:** sheesha tanki se bahut door hai (15 m) aur Qasim ke paas (2.5 m), isliye tanki Qasim se kai guna oonchi nikli (9.6 m vs 1.6 m): ye zaruri bhi tha. Sheesha zameen par rakhne mein dhyan: tanki ki chhat ya kisi kinare par kabhi mat jao. Sab kuch zameen par hi hota hai.

---

## Part B: Right triangle aur uski altitude: teen similar triangle

### Kyun? Ek set-square ki kahani

Qasim ke ghar mein ek set-square (90° wala triangle ruler) hai. Papa ne kaha, "Iske 90° wale kone se bade side par seedhi perpendicular line kheencho. Triangle ke teen triangle ban gaye." Qasim ne dekha ki chhote dono triangles bhi right triangles hain. "Papa, kya ye teeno **ek hi shape** ke hain?" "Chalo, dekhte hain," Papa bole.

Figure 4.3 mein ΔABC ka ∠A = 90° hai. Hypotenuse BC hai. A se BC par perpendicular AD kheenchi, D BC par hai.

```
        A  <- yahan 90° hai
       /|\
      / | \
     /  |  \
    /   |    \
   /    |      \
  /     |        \
  B-----D-----------C
  <-BD-><---- DC --->
```

> **Figure 4.3** – ∠A = 90°, AD ⊥ BC. D hypotenuse BC ko BD aur DC mein baantta hai. Figure naap ke hisaab se nahi hai.

Teen triangle hain: bada **ΔABC**, baayein ka **ΔDBA**, aur daayein ka **ΔDAC**.

### Pehla jodi: ΔABC aur ΔDBA

- ∠B dono mein common hai (B bada triangle ka bhi kona hai, aur ΔDBA ka bhi).
- ∠BAC = 90° aur ∠BDA = 90° (AD ⊥ BC).

Do angle barabar: **AA se ΔABC ~ ΔDBA**, correspondence A↔D, B↔B, C↔A. Teesra angle bhi mil gaya: ∠C = ∠BAD (dono 90° − ∠B).

### Doosri jodi: ΔABC aur ΔDAC

- ∠C dono mein common.
- ∠BAC = 90° aur ∠ADC = 90°.

AA se **ΔABC ~ ΔDAC**, correspondence A↔D, B↔A, C↔C.

### Teesri jodi: ΔDBA aur ΔDAC

Dono ΔABC ke similar hain. To dono aapas mein bhi similar hain. Order dekho: ΔDBA mein D, B, A aur ΔABC mein A, B, C ke saath D↔A, B↔B, A↔C; ΔABC aur ΔDAC mein A↔D, B↔A, C↔C. Dono ko jodne par D↔D, B↔A, A↔C: **ΔDBA ~ ΔDAC.**

### Teen similar triangles ki correspondence ki table

| ΔABC | ΔDBA | ΔDAC |
|---|---|---|
| A (90°) | D (90°) | D (90°) |
| B | B | A |
| C | A | C |

Aur sides ke jode:

| Jodi | Corresponding sides |
|---|---|
| ΔABC ~ ΔDBA | AB↔DB, BC↔BA, CA↔AD |
| ΔABC ~ ΔDAC | AB↔DA, BC↔AC, CA↔DC |
| ΔDBA ~ ΔDAC | DB↔DA, BA↔AC, AD↔DC |

### Teen results

Har jodi ki do ratios barabar likho aur cross-multiply karo.

**Leg relation 1** (ΔABC ~ ΔDBA): AB/DB = BC/BA, to **AB² = BD × BC.**

**Leg relation 2** (ΔABC ~ ΔDAC): AC/DC = BC/AC, to **AC² = DC × BC.**

**Altitude relation** (ΔDBA ~ ΔDAC): DB/DA = DA/DC, to **AD² = BD × DC.**

Altitude relation mein AD, BD aur DC ka mean proportional hai (BD : AD = AD : DC), wahi jo Ratio chapter mein dekha tha.

> **Ye theorem ka sar:** right triangle mein right-angle wale kone se hypotenuse par altitude girane se teen similar triangles banti hain. Isse tino results nikalte hain: AB² = BD × BC, AC² = DC × BC, AD² = BD × DC.

(**Honest note:** AA similarity yahan drawing aur angle-matching ke sath **maani** gayi hai (Topic 3 jaisa). Uske baad teen results ka saboot sachcha hai: similar triangles ki sides ke ratios barabar likhna aur cross-multiply karna.)

---

## Part C: Pythagoras ka naya saboot (wada poora)

Class 9 mein Pythagoras ka Proof 1 (a + b)² wale bade square se tha. Proof 2 ka wada ab nibhate hain. Dono leg relations ko jodo:

AB² = BD × BC
AC² = DC × BC

Jodne par: AB² + AC² = BD × BC + DC × BC = (BD + DC) × BC.

D hypotenuse BC ke beech mein girta hai (kyunki ∠B aur ∠C dono acute hain), isliye BD + DC = BC. To:

AB² + AC² = BC × BC = **BC².**

Yahi **Pythagoras theorem** hai: ∠A = 90° ho to AB² + AC² = BC². Is saboot mein na koi squares ki tasveer thi, na (a + b)². Sirf similar triangles aur ratio. Ye Class 9 ka adhura wada tha, jo ab poora hua.

(Sunne mein ajeeb lagega par ye sach hai: right triangle mein sides ka ratio sirf angles par tikta hai. Isi baat se aage Trigonometry bani: Class 9 ke [Trigonometry](../../../class9/maths/trigonometry/trigonometry.md) ki shuruaat aur Class 10 ke Chapter 17 "Trigonometry II" mein ye aur aage jaayegi. Abhi bas naam.)

### Example 4: ek altitude aur uske tukde

ΔABC mein ∠A = 90°, AB = 15 cm, AC = 20 cm. Hypotenuse BC, altitude AD, aur tukde BD, DC nikalo.

**Step 1 (BC):** Pythagoras se BC² = 15² + 20² = 225 + 400 = 625, to BC = **25 cm.**

**Step 2 (BD, leg relation 1):** AB² = BD × BC, to 225 = BD × 25, BD = **9 cm.**

**Step 3 (DC, leg relation 2):** AC² = DC × BC, to 400 = DC × 25, DC = **16 cm.**

**Step 4 (AD, altitude relation):** AD² = BD × DC = 9 × 16 = 144, to AD = **12 cm.**

**Jaanch:** BD + DC = 9 + 16 = 25 = BC ✅. Aur AD² + BD² = 144 + 81 = 225 = AB² ✅ (ΔDBA right angle wala triangle hai, usme bhi Pythagoras chalega).

### Example 5: tukde se baaki sab

ΔABC mein ∠A = 90°, AD ⊥ BC, BD = 4 cm aur DC = 25 cm. AD, AB, AC nikalo.

**Step 1 (AD):** AD² = BD × DC = 4 × 25 = 100, to AD = **10 cm.** (Yani 4 : 10 = 10 : 25: AD mean proportional hai.)

**Step 2 (BC):** BC = BD + DC = 4 + 25 = 29 cm.

**Step 3 (AB):** AB² = BD × BC = 4 × 29 = 116, to AB = √116 = **2√29 cm.**

**Step 4 (AC):** AC² = DC × BC = 25 × 29 = 725, to AC = √725 = **5√29 cm.**

**Jaanch:** AB² + AC² = 116 + 725 = 841 = 29² = BC² ✅

(√29 ≈ 5.385 lagbhag, to AB ≈ 10.77 cm aur AC ≈ 26.93 cm: dono BC = 29 se chhoti hain, aur hypotenuse sabse lambi hai.)

### Example 6: ek leg aur hypotenuse se altitude

ΔABC mein ∠A = 90°, AB = 8 cm aur BC = 17 cm. AC, BD, DC aur AD nikalo.

**Step 1 (AC):** AC² = BC² − AB² = 289 − 64 = 225, to AC = **15 cm.**

**Step 2 (BD):** AB² = BD × BC, to 64 = BD × 17, BD = **64/17 cm** (lagbhag 3.76 cm).

**Step 3 (DC):** DC = BC − BD = 17 − 64/17 = 225/17 cm (lagbhag 13.24 cm). Ya seedha AC² = DC × BC se: 225 = DC × 17, DC = 225/17 (dono rasta ek jawab dete hain).

**Step 4 (AD):** AD² = BD × DC = (64/17) × (225/17) = 14400/289, to AD = 120/17 cm = **lagbhag 7.06 cm.**

**Jaanch:** AD ko area se bhi nikal sakte hain: ΔABC ka area = ½ × AB × AC = ½ × 8 × 15 = 60 cm². Aur wahi area = ½ × BC × AD = ½ × 17 × AD, to AD = 120/17 ✅ (dono tareeke ek hi jawab dete hain).

### Example 7: Pythagoras saboot ko ek baar numbers se dekho

ΔABC mein ∠A = 90°, AB = 7 cm, AC = 24 cm, BC = 25 cm. Dono leg relations ko seedhe jaanch lo.

BD = AB²/BC = 49/25 = 1.96 cm, DC = AC²/BC = 576/25 = 23.04 cm.

**Jaanch:** BD + DC = 1.96 + 23.04 = 25 = BC ✅. AB² = BD × BC = 1.96 × 25 = 49 = 7² ✅. AC² = DC × BC = 23.04 × 25 = 576 = 24² ✅. Aur AD² = BD × DC = 1.96 × 23.04 = 45.1584, to AD = 6.72 (kyunki 6.72² = 45.1584) ✅, jo area wale rasta 7 × 24/25 = 6.72 se bhi milta hai ✅.

---

## Part D: Kaun sa tool kab?

| Sawaal ka roop | Kya karna hai |
|---|---|
| Seedhi khadi cheez aur uski parchhai, dusri cheez ki parchhai di hai | Parchhai wala triangle: AA se similar, phir unchai : unchai = parchhai : parchhai |
| Sheesha zameen par, aankh aur tanki | Sheeshe ka niyam + AA, phir ratio |
| Right triangle, hypotenuse ke tukde diye, altitude ya leg chahiye | Altitude relation AD² = BD × DC; leg relation AB² = BD × BC |
| Right triangle, do sides di hain, altitude chahiye | Pehle teesri side (Pythagoras), phir leg relation ya area |

---

## Aam galtiyan (bachke rehna)

**Galti 1: parchhai wale ratio ko ek taraf se ulta likhna**

Ek bachhe ne ek ped ki unchai nikaali. Ek 1 m ki stick ki parchhai 0.8 m hai, aur usi waqt ped ki parchhai 24 m hai. Usne likha:

stick ki unchai / stick ki parchhai = ped ki parchhai / ped ki unchai

yaani 1/0.8 = 24/H. Cross-multiply: H = 24 × 0.8 = **19.2 m.**

Check karo. Ped 19.2 m ooncha hai, par uski parchhai 24 m hai, yaani parchhai unchai se **lambi**. Par stick ki parchhai (0.8 m) uski unchai (1 m) se **chhoti** hai. Dhoop ek hi hai, to ped ki parchhai bhi uski unchai se chhoti honi chahiye. Galat.

Galti ye thi ki ek taraf "unchai / parchhai" aur doosri taraf "parchhai / unchai" likh diya. Dono taraf **ek hi order** hona chahiye: unchai upar, parchhai neeche (ya dono taraf ulta).

Sahi: 1/0.8 = H/24, to H = 24/0.8 = **30 m.**

**Jaanch:** stick ka ratio 1 : 0.8 = 1.25. Ped ka 30 : 24 = 1.25 ✅ (aur ped ki parchhai 24 m, unchai 30 m se chhoti ✅ jaisa hona chahiye).

**Galti 2: leg relation ki jagah altitude relation likh dena**

ΔABC mein ∠A = 90°, AD ⊥ BC (Figure 4.3 jaisa), BD = 6 cm aur DC = 8 cm. AB nikalna hai. Ek bachhe ne socha: "BD aur DC diye hain, to bas inhe guna kar do," aur likha AB² = BD × DC = 6 × 8 = 48, to AB = √48 = **lagbhag 6.93 cm.**

Check karo. Altitude relation AD² = BD × DC hai, to 48 asal mein AD² hai, AB² nahi. Ab ΔDBA dekho: ∠D = 90°, to uski hypotenuse AB hai, jo AD se **lambi** honi chahiye. Par bachhe ke jawab mein AB = √48 = AD hai. Ye ho nahi sakta: AB² = AD² + BD² = 48 + 36 = 84, 48 nahi.

Galti ye thi ki do alag relations mil gayi. **Altitude** (AD) ka square tukdon ka guna hota hai (BD × DC). **Leg** (AB) ka square us tukde ka guna hota hai jo AB ke chhor B se juda hai, **poori hypotenuse** ke saath (BD × BC).

Sahi: BC = BD + DC = 6 + 8 = 14 cm. AB² = BD × BC = 6 × 14 = 84, to AB = **2√21 cm** (lagbhag 9.17 cm). Aur AC² = DC × BC = 8 × 14 = 112, AC = **4√7 cm.**

**Jaanch:** AB² + AC² = 84 + 112 = 196 = 14² = BC² ✅. Aur AD² + BD² = 48 + 36 = 84 = AB² ✅.

---

## Quick Recap

- Ek hi waqt par suraj ki kirnein parallel maani jaati hain. Seedhi khadi cheez, uski parchhai aur kiran ka triangle AA se similar hota hai: **unchai : unchai = parchhai : parchhai** (dono taraf ek hi order).
- Naap ek hi waqt par, level zameen par lo. Parchhai cheez se lambi bhi ho sakti hai aur chhoti bhi (suraj ke kone par), par dono cheezon mein unchai : parchhai ka ratio ek hi hona chahiye.
- Zameen par rakhe sheeshe se bhi do right triangles ban jaate hain (sheeshe ka niyam + AA).
- Right triangle ABC (∠A = 90°) mein altitude AD girane par teen similar triangles milti hain: **ΔABC ~ ΔDBA ~ ΔDAC** (is order mein sahi correspondence).
- Results: **AB² = BD × BC, AC² = DC × BC, AD² = BD × DC.**
- Pythagoras ka naya saboot: dono leg relations jodo, to AB² + AC² = (BD + DC) × BC = BC².
- Do leg aur hypotenuse mein se do pata ho to teesra Pythagoras se, phir BD, DC, AD relations se (ya AD ko area se bhi).
- Galtiyan: ratio ko ek taraf ulta likhna; leg relation (AB² = BD × BC) ki jagah altitude relation (AD² = BD × DC) likh dena.

---

## Practice Questions

1. A 1.8 m stick casts a shadow of 2.7 m. At the same time a school flagpole casts a shadow of 13.5 m on level ground. Find the height of the flagpole.
2. A neem tree is 15 m tall and casts a shadow of 21 m. At the same time a vertical stick of length 1.25 m is held on the same ground. How long is the stick's shadow?
3. A 1.6 m stick has a shadow of 1.0 m. A tower casts a shadow of 17.5 m at the same time. Find the height of the tower. Is it plausible that its shadow is shorter than its height?
4. A 4 m pole casts a shadow of 6.4 m. A tree standing nearby casts a shadow of 28 m at the same time. Find the height of the tree.
5. Qasim's friend places a small mirror flat on the ground between herself and a tower and steps back until she sees the top of the tower in it. Her eye is 1.5 m above the ground and 3 m from the mirror. The mirror is 24 m from the foot of the tower. Find the height of the tower.
6. A student wants the height of a tree whose shadow is 20 m. A 1.5 m stick has a shadow of 2.5 m at the same time. The student writes 1.5/2.5 = 20/H and gets H = 33.33 m. What mistake was made? Find the correct height and show why 33.33 m cannot be right.
7. A stick and a tree are measured, but the stick's shadow is measured in the morning and the tree's shadow in the afternoon. Can we still use ΔABC ~ ΔPQR with the stick and the tree? Explain in two sentences.
8. In ΔABC, ∠A = 90° and AD ⊥ BC. If BD = 9 cm and DC = 49 cm, find AD, AB and AC (leave AB and AC in surd form) and check that AB² + AC² = BC².
9. In ΔABC, ∠B = 90° and BD ⊥ AC with AD = 36 cm and DC = 49 cm. Which triangles are similar to ΔABC? Find BD, AB and BC (surd form for AB and BC).
10. In ΔPQR, ∠Q = 90°, PQ = 9 cm and PR = 41 cm, and QS ⊥ PR. Find QR, PS, SR and QS as exact fractions.
11. In ΔABC, ∠A = 90°, AB = 10 cm, BC = 20 cm and AD ⊥ BC. Find BD, DC, AC and AD (surd form where needed).
12. In ΔABC with ∠A = 90° and AD ⊥ BC, prove that AB² / AC² = BD / DC. Hence, if BD : DC = 1 : 4, find AB : AC.
13. A triangular garden plot ABC has its right angle at A. AB = 20 m, AC = 99 m and BC = 101 m. A straight path runs from A and meets the long side BC at right angles. Find the length of the path.
14. State True or False.
   (a) In a right triangle ABC with ∠A = 90° and AD ⊥ BC, ΔABC ~ ΔDBA.
   (b) In the same figure, AD² = BD × DC.
   (c) In the same figure, AB² = BD × DC.
   (d) If BD = DC then AD = BD.
   (e) In the same figure, ΔDBA ~ ΔDCA.

### Answers

1. Stick aur flagpole dono seedhe khade hain, dhoop ek hi: AA se similar. Flagpole ki unchai / 1.8 = 13.5 / 2.7. 13.5/2.7 = 5, to unchai = 1.8 × 5 = **9 m.**
   Jaanch: stick ka ratio 1.8 : 2.7 = 2 : 3. Flagpole ka 9 : 13.5 = 2 : 3 ✅

2. Ped ka ratio unchai : parchhai = 15 : 21 = 5 : 7. Stick ki parchhai = 1.25 × 7/5 = **1.75 m.**
   Jaanch: 1.25 : 1.75 = 5 : 7 ✅ (1.25 × 7 = 8.75, 1.75 × 5 = 8.75).

3. Unchai / 1.6 = 17.5 / 1.0, to unchai = 1.6 × 17.5 = **28 m.**
   Jaanch: 1.6 : 1.0 = 8 : 5. 28 : 17.5 = 8 : 5 ✅ (28/3.5 = 8, 17.5/3.5 = 5).
   Story check: haan, tower ki parchhai (17.5 m) uski unchai (28 m) se chhoti hai, jaise stick ki (1.0 m) uski (1.6 m) se chhoti hai. Dhoop upar se aa rahi hai, to ye ulti baat nahi.

4. Ped ki unchai / 4 = 28 / 6.4. 28/6.4 = 4.375, to unchai = 4 × 4.375 = **17.5 m.**
   Jaanch: 4 : 6.4 = 5 : 8. 17.5 : 28 = 5 : 8 ✅ (17.5 × 8 = 140 = 28 × 5).

5. Sheeshe ka niyam: aati aur jaati kiran barabar angle banati hain. Aankh, uska paer aur sheesha ek right triangle; tower ka sira, uska neeche ka point aur sheesha doosra right triangle. AA se similar. Tower ki unchai / 1.5 = 24 / 3, to unchai = 1.5 × 8 = **12 m.**
   Jaanch: 1.5 : 3 = 1 : 2, aur 12 : 24 = 1 : 2 ✅
   Story check: sheesha aankh ke paas hai (3 m) aur tower se door (24 m), to tower aankh ki unchai (1.5 m) se kai guna ooncha nikla (12 m): theek.

6. Galti: ek taraf stick ki unchai/parchhai (1.5/2.5) aur doosri taraf ped ki parchhai/unchai (20/H) likha: order ulta hai. Sahi: 1.5/2.5 = H/20, to H = 20 × 1.5/2.5 = **12 m.**
   Jaanch: 1.5 : 2.5 = 3 : 5 aur 12 : 20 = 3 : 5 ✅
   Story check: stick ki parchhai (2.5 m) uski unchai (1.5 m) se lambi hai, to ped ki parchhai (20 m) bhi uski unchai se lambi honi chahiye. 33.33 m ki unchai wale ped ki parchhai 20 m hoti, jo unchai se chhoti hai: ye stick wali baat ke ulti hai. 12 m ka ped is par fit hota hai.

7. Nahi, theek nahi. Alag waqt par suraj ka angle alag hota hai, to ped aur stick ke triangles mein ∠C ≠ ∠R ho sakta hai: AA ki shart toot gayi, aur similar nahi rahe. Dono parchhai ek hi waqt par naapni chahiye.

8. AD² = BD × DC = 9 × 49 = 441, to AD = **21 cm.** BC = 9 + 49 = 58 cm. AB² = BD × BC = 9 × 58 = 522, to AB = √522 = **3√58 cm.** AC² = DC × BC = 49 × 58 = 2842, to AC = **7√58 cm.**
   Jaanch: AB² + AC² = 522 + 2842 = 3364 = 58² ✅ (58 × 58 = 3364).

9. Right angle B par hai, to altitude B se hypotenuse AC par. Similar triangles: ΔABC ~ ΔBDC? Common angle C, ∠ABC = ∠BDC = 90°: A↔B, B↔D, C↔C, aur ΔABC ~ ΔADB (common angle A, ∠ABC = ∠ADB = 90°: A↔A, B↔D, C↔B). Haan, ΔABC ~ ΔBDC ~ ΔADB. BD² = AD × DC = 36 × 49 = 1764, to BD = **42 cm.** AC = 36 + 49 = 85 cm. AB² = AD × AC = 36 × 85 = 3060, AB = √3060 = **6√85 cm.** BC² = DC × AC = 49 × 85 = 4165, BC = **7√85 cm.**
   Jaanch: AB² + BC² = 3060 + 4165 = 7225 = 85² ✅

10. QR² = PR² − PQ² = 1681 − 81 = 1600, to QR = **40 cm.** PQ² = PS × PR, to 81 = PS × 41, PS = **81/41 cm.** SR = PR − PS = 41 − 81/41 = 1600/41 cm (ya QR² = SR × PR: 1600 = SR × 41, wahi jawab). QS² = PS × SR = (81/41)(1600/41) = 129600/1681, to QS = 360/41 cm.
   Jaanch: area se: ½ × 9 × 40 = 180 = ½ × 41 × QS, to QS = 360/41 ✅

11. AB² = BD × BC, to 100 = BD × 20, BD = **5 cm.** DC = 20 − 5 = **15 cm.** AC² = DC × BC = 15 × 20 = 300, AC = **10√3 cm.** AD² = BD × DC = 5 × 15 = 75, AD = **5√3 cm.**
   Jaanch: AB² + AC² = 100 + 300 = 400 = 20² = BC² ✅

12. ΔABC ~ ΔDBA se AB² = BD × BC, aur ΔABC ~ ΔDAC se AC² = DC × BC. Bhaag do: AB²/AC² = (BD × BC)/(DC × BC) = **BD/DC** (BC cancel). Agar BD : DC = 1 : 4 to AB²/AC² = 1/4, to AB/AC = 1/2 (dono sides positive), yaani **AB : AC = 1 : 2.**
   Jaanch: BD = 1, DC = 4 lo to BC = 5, AB² = 5, AC² = 20, AB² + AC² = 25 = BC² ✅ aur AB/AC = √5/√20 = 1/2 ✅

13. Path AD, A se BC par perpendicular. Area: ½ × AB × AC = ½ × 20 × 99 = 990 m². Wahi area ½ × BC × AD = ½ × 101 × AD, to AD = 1980/101 = **lagbhag 19.6 m.**
   Jaanch: leg relation se: BD = 400/101, DC = 9801/101, AD² = BD × DC = 3920400/10201, AD = 1980/101 ✅ (1980² = 3920400 aur 101² = 10201).
   Story check: path A se hypotenuse tak jaati hai, aur wo kisi bhi leg se chhoti honi chahiye (AD = AB × AC/BC aur AC < BC, to AD < AB). 19.6 m < 20 m = AB, aur 19.6 < 99 bhi, jaisa hona chahiye.

14. (a) **True** ✅. Common angle B aur 90° = 90°, correspondence A↔D, B↔B, C↔A.
    (b) **True** ✅. Altitude relation.
    (c) **False** ❌. AB² = BD × BC hota hai, BD × DC nahi.
    (d) **True** ✅. BD = DC ho to AD² = BD × DC = BD², to AD = BD.
    (e) **False** ❌. Ye har triangle mein nahi chalta (B aur C barabar nahi hote). Sahi hai ΔDBA ~ ΔDAC (D↔D, B↔A, A↔C): ΔDCA mein vertices ka order ulta hai.

---

Aaj tumne dekha ki ek stick aur ek parchhai se ek poori tanki ki unchai nikal aati hai, aur ek altitude girane se ek purana wada poora ho jaata hai. Agli baar kisi unchi cheez ko dekho (khambha, ped, flagpole), to ek stick lo aur tape ke bina unchai nikaal ke dekho: zameen par hi, tab bhi jab suraj theek se nikla ho. Tum ye kar sakte ho.

**Aage kya?** Qasim ne tanki ke paas ek chhota model bhi banaya: asli tanki ka ek-dasvaan hissa. Model ki sides asli ki ek-dasvaan hain, to kya uski **jagah** (area) bhi ek-dasvaan hogi? Topic 5 mein dekhenge ki similar triangles ke areas ka ratio sides ke ratio se kaisa rishta rakhta hai.
