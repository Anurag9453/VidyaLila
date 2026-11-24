# Chapter: Similar Triangles (Part 2)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [similar-triangles.md](similar-triangles.md) se aage chalti hai** (wahan Topic 1 mein similar figures dekhe: same shape, alag size, corresponding angles barabar aur corresponding sides ek hi ratio mein). Chapter ki shuruaat: [similar-triangles.md](similar-triangles.md). Class 9 ka Mid-point Theorem aur Intercept Theorem: [quadrilaterals-part2.md](../../../class9/maths/quadrilaterals/quadrilaterals-part2.md). Class 9 ka area wala theorem: [quadrilaterals-part3.md](../../../class9/maths/quadrilaterals/quadrilaterals-part3.md). Ratio ke jod-ghata wale rules: [ratio-and-proportion-part2.md](../ratio-and-proportion/ratio-and-proportion-part2.md).
> **Topics covered in this file:**
> 2. Parallel Line Ka Kamaal: Basic Proportionality Theorem

---

# Topic 2: Parallel Line Ka Kamaal: Basic Proportionality Theorem

Topic 1 mein humne dekha ki do figures similar tab hote hain jab unke corresponding angles barabar hon **aur** corresponding sides ek hi ratio (scale factor k) mein hon. Ab sawaal ye hai: triangle ke andar ek chhoti si **parallel line** kheench dein, to kya hota hai? Is topic ka seedha jawab ek khoobsurat theorem hai, jo Class 9 ke Mid-point Theorem ka **bada bhai** hai: wahan line sirf beech se jaati thi, yahan line kahin se bhi jaa sakti hai, aur phir bhi sides ek hi ratio mein katti hain. Aage ke Topic 3 mein jo similarity ke tests aayenge, unki neev yahi theorem hai.

---

## Irfan ka ruled notebook

Irfan ne maths ke notebook ke ruled page par ek triangle ABC banaya. Usne A ko sabse upar wali rule par rakha, aur BC ko usse theek **5 rules neeche** wali rule par. Notebook ki rules ek doosre ke **barabar doori par aur parallel** hoti hain, to BC bhi in rules ke parallel aa gayi.

Phir Irfan ne A se **ek rule neeche** wali rule ko dekha. Wo rule AB ko D par aur AC ko E par kaat rahi thi. Irfan ne ruler se naapa:

- AD = 2.1 cm aur DB = 8.4 cm
- AE = 2.6 cm aur EC = 10.4 cm

Papa ne dekha aur muskuraaye: "Dono taraf ka ratio dekho." Irfan ne hisaab lagaya: AD : DB = 2.1 : 8.4 = **1 : 4**, aur AE : EC = 2.6 : 10.4 = **1 : 4**. Dono ek hi!

```
                  A
                 / \
              D o---o E
               /     \
              o.......o
             /         \
            o...........o
           /             \
          o...............o
         /                 \
      B o-------------------o C
```

> **Figure 2.1** – Irfan ka triangle ruled page par. Upar se neeche 5 barabar jagah hain. Sabse upar wali rule ke theek neeche wali rule (D se E) AB aur AC ko A ke paas 1 jagah aur baaki 4 jagah mein baantti hai. Beech ki teen rules dotted dikhayi gayi hain. Figure naap ke hisaab se nahi hai.

Irfan ne socha: "Ye to rules barabar doori par thi, isliye hua. Par agar main BC ke parallel koi bhi line kheencha, jo kisi rule par na ho, to kya tab bhi AB aur AC **ek hi ratio mein** katenge?" Jawab hai: haan! Wahi is topic ka theorem hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Basic Proportionality Theorem (BPT)** | Triangle ki ek side ke parallel line, jo baaki do sides ko kaatti hai, un dono sides ko **ek hi ratio mein** baant deti hai | ΔABC mein DE ∥ BC ho to AD : DB = AE : EC |
| **Ek hi ratio mein baantna** | Do sides ko aise kaatna ki dono mein "upar wala tukda : neeche wala tukda" ka ratio barabar nikle | Irfan ke triangle mein dono taraf 1 : 4 |
| **Tukda : tukda ratio** | Ek hi side ke do tukdon ka ratio | AD : DB (AB ke do tukde) |
| **Tukda : poori side ratio** | Ek tukde aur us poori side ka ratio jisme wo tukda aata hai | AD : AB (AB poori side hai) |
| **Ek hi kram (same order)** | Dono ratio mein A wali taraf ka tukda pehle, door wala tukda baad mein likhna | AD : DB aur AE : EC, dono mein A wala tukda pehle |

Kuch jagah is theorem ko **Thales ka theorem** bhi kehte hain. Hum is chapter mein isse BPT hi kahenge.

---

## Class 9 se yaad

- **Mid-point Theorem** ([quadrilaterals-part2.md](../../../class9/maths/quadrilaterals/quadrilaterals-part2.md), Part A): "Kisi triangle ki do sides ke midpoints ko jodne wala line segment teesri side ke parallel hota hai, aur teesri side ka aadha hota hai." Aur uska converse (Part C): ek side ke midpoint se doosri side ke parallel line teesri side ko bisect karti hai. BPT ko hum aage isi ka **bada roop** dekhenge.
- **Intercept Theorem** (usi file ka Part F): "Agar teen ya zyada parallel lines kisi ek transversal par barabar intercepts banati hain, to wo kisi bhi doosre transversal par bhi barabar intercepts banayengi." Irfan ki notebook yahi hai.
- **Triangles ka area** ([quadrilaterals-part3.md](../../../class9/maths/quadrilaterals/quadrilaterals-part3.md)): same base aur same parallels ke beech ke triangles ka area barabar hota hai ("Same base, same parallels: triangles ka area barabar" theorem). Part B ka poora proof isi par tikka hai.
- **Ratio ke rules** ([ratio-and-proportion-part2.md](../ratio-and-proportion/ratio-and-proportion-part2.md)): invertendo (ulta), alternendo (beech wale badlo) aur componendo (numerator mein denominator jodo). Part C mein ye teeno kaam aayenge.

---

## Part A: Basic Proportionality Theorem kya kehta hai

> **BPT:** Agar kisi triangle ki ek side ke **parallel** line kheenchi jaaye, jo baaki do sides ko alag-alag points par kaatti ho, to wo line **dono sides ko ek hi ratio mein** baantti hai.

ΔABC mein D, AB par aur E, AC par hain, aur DE ∥ BC. Tab:

**AD : DB = AE : EC**

```
                  A
                 / \
                /   \
               /     \
            D o-------o E
             /         \
            /           \
           /             \
          /               \
         /                 \
      B o-------------------o C
```

> **Figure 2.2** – ΔABC mein DE ∥ BC. A ki taraf ke tukde AD aur AE hain, door ke tukde DB aur EC. Theorem kehta hai AD : DB = AE : EC. (Is topic ke baaki figures bhi naap ke hisaab se nahi hain.)

### Kyun sach lagta hai?

Irfan ki notebook mein A se B tak 5 barabar jagah thi. Rules barabar doori par thi, isliye Class 9 ke Intercept Theorem se AB par bhi 5 barabar tukde bane aur AC par bhi 5 barabar tukde bane. Pehli rule ne dono taraf **1 tukda aur 4 tukde** baante: ratio 1 : 4, dono taraf. Dusri rule 2 tukde aur 3 tukde baantti: 2 : 3, dono taraf. Rules jitni bhi ho, "kitne tukde upar, kitne neeche" dono sides par wahi ginti hai.

Par ye sirf tab tha jab rules **barabar** doori par thi. BPT isse aage ki baat hai: line BC ke parallel hai bas, chahe jahan bhi ho (aur chahe ratio 1 : 4 ho ya 2.7 : 5.3). Iska poora proof Part B mein hai, aur wo notebook par nahi, **area** par tika hai.

---

## Part B: BPT ka proof (area se)

**Given:** ΔABC mein D, AB par aur E, AC par, aur DE ∥ BC.

**To prove:** AD / DB = AE / EC

**Construction:** B se E aur C se D jodo (BE aur CD). E se AB par perpendicular EM, aur D se AC par perpendicular DN kheencho.

**Idea pehle samajh lo:** Hum triangle ADE ka area **do tarah** se tolenge. Ek baar ΔBDE ke saath (jahan AD : DB nikalega), ek baar ΔCDE ke saath (jahan AE : EC nikalega). Phir dikhayenge ki ΔBDE aur ΔCDE ke area barabar hain, to dono ratio barabar ho jayenge.

**Step 1:** ΔADE aur ΔBDE ki bases AD aur DB, AB par hain. Dono ki **height ek hi** hai: E se AB par perpendicular, yaani EM. Area = ½ × base × height se:

ar(ΔADE) / ar(ΔBDE) = (½ × AD × EM) / (½ × DB × EM) = **AD / DB**

**Step 2:** Isi tarah ΔADE aur ΔCDE ki bases AE aur EC, AC par hain, aur dono ki height D se AC par perpendicular DN hai:

ar(ΔADE) / ar(ΔCDE) = (½ × AE × DN) / (½ × EC × DN) = **AE / EC**

**Step 3:** ΔBDE aur ΔCDE dono ki **base DE** hai (same base). Dono ke saamne wale vertices B aur C line BC par hain, jo DE ke parallel hai. Yaani dono **same base aur same parallels ke beech** hain. Class 9 ke "Same base, same parallels: triangles ka area barabar" theorem se:

ar(ΔBDE) = ar(ΔCDE)

**Step 4:** Step 1 aur Step 2 ke ratio mein ar(ΔADE) wahi hai, aur Step 3 se denominator barabar hain. To dono ratio barabar:

AD / DB = AE / EC

**Hence proved.** Ye poora proof hai: ismein sirf Class 9 ke area ke facts aur ratio ka simple hisaab laga hai.

---

## Part C: BPT se lambai nikalna

BPT ko hum ek ratio ke roop mein yaad rakhte hain, par kaam ke waqt kai roop chahiye. Ratio ke rules ([ratio-and-proportion-part2.md](../ratio-and-proportion/ratio-and-proportion-part2.md)) se AD / DB = AE / EC ke ye saare roop sach hain:

| Roop | Kaise mila | Kab kaam aata hai |
|---|---|---|
| AD / DB = AE / EC | BPT seedha | Jab dono tukde-tukde diye hon |
| DB / AD = EC / AE | Invertendo (ulta) | Jab unknown DB ya EC ho aur AD, AE diye hon |
| AD / AE = DB / EC | Alternendo (beech wale badlo) | Jab ek side ke tukde ka doosri side ke tukde se ratio chahiye |
| AB / DB = AC / EC | Componendo: (AD + DB) / DB = (AE + EC) / EC | Jab poori side AB, AC aur ek door ka tukda diya ho |
| AB / AD = AC / AE | Invertendo, phir componendo | Jab poori side aur A wala tukda diya ho |
| AD / AB = AE / AC | Upar wale ka ulta | Sabse aam: A wala tukda : poori side |
| DB / AB = EC / AC | Upar jaisa hi, door ke tukde ke liye | Door wala tukda : poori side |

**Ek hi niyam yaad rakho:** ratio ke dono taraf **same kism ki cheez** honi chahiye: tukda : tukda ke saath tukda : tukda, ya tukda : poori ke saath tukda : poori. Aur dono mein **ek hi kram**: A wali taraf pehle.

### Example 1: seedha BPT (Irfan ka naya triangle)

Irfan ne ek aur triangle ABC banaya aur BC ke parallel DE kheencha (D, AB par aur E, AC par). Naapne par AD = 5 cm, DB = 7.5 cm aur AE = 6.4 cm mila. EC nikalo.

BPT: AD / DB = AE / EC
5 / 7.5 = 6.4 / EC
EC = (7.5 × 6.4) / 5 = 48 / 5 = **9.6 cm**

**Jaanch:** AD : DB = 5 : 7.5 = 2 : 3 aur AE : EC = 6.4 : 9.6 = 2 : 3 ✅

### Example 2: poori side di hai (kagaz ka model patang)

Irfan ne kagaz ka ek chhota patang banaya. Uske upar ke kone A se do dhaage AB aur AC gaye hain, AB = 10.8 cm aur AC = 13.5 cm. Irfan ne AB par D aur AC par E aise points liye ki dhaaga DE patang ki cross-stick BC ke parallel ho. AD = 7.2 cm hai. AE, DB aur EC nikalo.

Yahan poori sides di hain, to A wala tukda : poori side wala roop lagao:

AD / AB = AE / AC
7.2 / 10.8 = AE / 13.5
AE = (7.2 × 13.5) / 10.8 = 97.2 / 10.8 = **9 cm**

DB = AB − AD = 10.8 − 7.2 = **3.6 cm**
EC = AC − AE = 13.5 − 9 = **4.5 cm**

**Jaanch:** AD : DB = 7.2 : 3.6 = 2 : 1 aur AE : EC = 9 : 4.5 = 2 : 1 ✅

### Example 3: algebra wala

ΔABC mein DE ∥ BC, jahan D, AB par aur E, AC par hai. AD = (x − 1) cm, DB = (2x − 8) cm, AE = 5 cm aur EC = 7 cm. x aur AB nikalo.

BPT: AD / DB = AE / EC
(x − 1) / (2x − 8) = 5 / 7
Cross multiply (ad = bc, Ratio chapter ka product rule): 7(x − 1) = 5(2x − 8)
7x − 7 = 10x − 40
33 = 3x, to **x = 11**

AD = 11 − 1 = 10 cm, DB = 2(11) − 8 = 14 cm, to AB = 10 + 14 = **24 cm**.

**Jaanch:** AD : DB = 10 : 14 = 5 : 7 aur AE : EC = 5 : 7 ✅

### Example 4: shelf bracket (kahani wala sawaal)

Irfan ke Papa ne ek triangular shelf bracket ke lakdi ke frame ABC mein ek patli crossbar DE lagayi hai (D, AB par aur E, AC par). Wo chahte hain ki DE, base BC ke parallel ho, tabhi bracket par shelf seedhi baithegi. Papa ne D ko A se 7.5 cm par lagaya (AD = 7.5 cm, AB = 16.5 cm, AC = 13.2 cm). Ab sawaal hai ki E ko A se kitni doori par lagayein ki crossbar theek parallel aaye.

BPT se AD / AB = AE / AC:
7.5 / 16.5 = AE / 13.2
AE = (7.5 × 13.2) / 16.5 = 99 / 16.5 = **6 cm**

Matlab E ko A se 6 cm par lagana hai. Phir EC = 13.2 − 6 = **7.2 cm**, aur DB = 16.5 − 7.5 = **9 cm**.

**Story check:** AE = 6 cm, AC = 13.2 cm se chhota hai, to E sach mein AC ke andar hai. A wale tukde 7.5 aur 6 hain, door wale 9 aur 7.2: 7.5 : 9 = 5 : 6 aur 6 : 7.2 = 5 : 6, dono taraf ek hi ratio.

**Jaanch:** 7.5 / 9 = 6 / 7.2 ✅ (dono 5/6 hain).

---

## Part D: BPT ka ulta (converse)

Ab ulta sawaal. Irfan ki cousin Didi ne ek bracket mein DE crossbar lagayi, par kuch bataya nahi ki wo base ke parallel hai ya nahi. Irfan ke paas set-square nahi tha. Kya sirf **lambaiyan naap kar** pata lag sakta hai ki DE ∥ BC? Haan, converse yahi kehta hai.

> **BPT ka converse:** Agar ek line triangle ki do sides ko **ek hi ratio mein** baante (AD : DB = AE : EC), to wo line teesri side ke **parallel** hoti hai.

### Kyun sach hai (proof, contradiction se)

**Given:** ΔABC mein D, AB par aur E, AC par, aur AD : DB = AE : EC.

**To prove:** DE ∥ BC.

Maan lo DE, BC ke parallel **nahi** hai. Tab D se BC ke parallel ek **alag** line kheencho, jo AC ko kisi doosre point E' par kaate (E' aur E alag points hain).

```
                  A
                 / \
                /   \
               /     \
            D o-------o E'
             /         \
            /           o E
           /             \
          /               \
         /                 \
      B o-------------------o C
```

> **Figure 2.3** – Contradiction wala proof. DE' ∥ BC kheenchi gayi hai, aur E (jo maanta hai ki parallel nahi) E' se alag point hai. DE sketch mein nahi dikhayi gayi: wo D se E tak jaati.

- DE' ∥ BC hai, to **BPT** se AD / DB = AE' / E'C.
- Given hai AD / DB = AE / EC.
- To AE' / E'C = AE / EC. Dono mein 1 jodo (componendo): (AE' + E'C) / E'C = (AE + EC) / EC, yaani AC / E'C = AC / EC.
- To E'C = EC. Lekin E' aur E dono AC par hain aur C se barabar doori par hain, to **E' aur E ek hi point hain**.

Ye hamari maan-lene wali baat (E' alag hai) ke khilaaf gaya. To DE hi BC ke parallel hai. **Hence proved.** (Ye poora proof hai, sirf BPT aur componendo se bana.)

### Theorem aur converse ek saath

| | Kya diya hai | Kya milta hai |
|---|---|---|
| **BPT** | DE ∥ BC | AD : DB = AE : EC |
| **Converse** | AD : DB = AE : EC | DE ∥ BC |

### Example 5: parallel hai ya nahi? (bracket ki crossbar)

Irfan ne do brackets check kiye. Dono mein D, AB par aur E, AC par hai.

**Bracket 1:** AD = 3.2 cm, DB = 4.8 cm, AE = 5.2 cm, EC = 7.8 cm.
AD : DB = 3.2 : 4.8 = 2 : 3 aur AE : EC = 5.2 : 7.8 = 2 : 3. Dono barabar, to converse se **DE ∥ BC**. Shelf seedhi baithegi.

**Bracket 2:** AD = 7.5 cm, DB = 6 cm, AE = 8.4 cm, EC = 7 cm.
AD : DB = 7.5 : 6 = 5 : 4 = 1.25, aur AE : EC = 8.4 : 7 = 6 : 5 = 1.2. Barabar nahi, to **DE, BC ke parallel nahi hai**. Shelf thodi tirchhi baithegi.

**Jaanch:** Bracket 1 mein 3.2 / 4.8 = 0.666... aur 5.2 / 7.8 = 0.666...: dono 2/3 ✅. Bracket 2 mein 7.5 / 6 = 1.25 aur 8.4 / 7 = 1.2: alag, isliye "parallel nahi" ✅.

---

## Part E: Khaas cases aur ek aur result

### Mid-point Theorem, BPT ka khaas case

Agar D, AB ka midpoint ho, to AD = DB, yaani AD : DB = 1 : 1. Ab dekho:

- **Converse ke roop mein:** E bhi AC ka midpoint ho (AE : EC = 1 : 1), to BPT ka converse bolta hai **DE ∥ BC**. Yahi Class 9 Mid-point Theorem ka "parallel" wala hissa hai.
- **BPT ke roop mein:** D midpoint ho aur DE ∥ BC ho, to AE : EC = 1 : 1, yaani E bhi midpoint. Yahi Class 9 ka converse hai.

Ek sachchi baat bhi: Mid-point Theorem ka **"aadha"** wala hissa (DE = ½ BC) BPT se **nahi** milta. BPT sirf AB aur AC ke tukdon ke baare mein hai, DE aur BC ki lambai ka rishta nahi batata. Wo rishta similar triangles se aayega (Topic 3 mein SAS ke baad).

**Example 6:** ΔABC mein D, AB ka midpoint hai aur DE ∥ BC (E, AC par). AE = 6.9 cm. AC nikalo.

D midpoint hai, to BPT se AE = EC. Isliye EC = 6.9 cm aur AC = 6.9 + 6.9 = **13.8 cm**.

**Jaanch:** AD : DB = 1 : 1 aur AE : EC = 6.9 : 6.9 = 1 : 1 ✅

### Teen parallel lines ka result (chhota remark)

Irfan ki notebook mein rules barabar doori par thi. Ab maan lo teen parallel lines l, m, n **alag-alag doori** par hain, aur do tedhi lines (transversals) unhe kaatti hain.

```
----P-----------------------------------A--- l
     \                                 /
      \                               /
-------Q-----------------------------B------ m
        \                           /
         \                         /
          \                       /
           \                     /
------------R-------------------C----------- n
```

> **Figure 2.4** – Teen parallel lines l, m, n aur do transversals. Ek transversal unhe P, Q, R par kaatta hai, doosra A, B, C par. l aur m ke beech ki doori m aur n ke beech se kam hai, yaani rules barabar nahi hain.

> **Result:** PQ / QR = AB / BC.

**Kyun?** P ko C se jodo. Ye jodne wali line m ko ek point S par kaategi. ΔPRC mein QS ∥ RC (rules parallel hain), to BPT se PQ / QR = PS / SC. Phir ΔCAP mein SB ∥ PA, to BPT se PS / SC = AB / BC. Dono ko milao: PQ / QR = AB / BC. (Ye proof BPT ko do baar lagakar bana hai.)

**Example 7:** Teen parallel rules l, m, n do transversals ko kaatti hain. Pehle transversal par PQ = 3.6 cm aur QR = 6 cm. Doosre transversal par AB = 5.1 cm hai. BC nikalo.

PQ / QR = AB / BC
3.6 / 6 = 5.1 / BC
BC = (6 × 5.1) / 3.6 = 30.6 / 3.6 = **8.5 cm**

**Jaanch:** PQ : QR = 3.6 : 6 = 3 : 5 aur AB : BC = 5.1 : 8.5 = 3 : 5 ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: tukda : tukda ko tukda : poori side ke saath mila dena**

DE ∥ BC hai. AD = 6 cm, DB = 9 cm, AC = 20 cm. AE nikalna hai. Ek bacche ne likha: AD : DB = AE : AC, yaani 6 / 9 = AE / 20, to AE = 13.33 cm.

Check karo: AE = 13.33 ho to EC = 20 − 13.33 = 6.67 cm. Tab AE : EC = 13.33 : 6.67 = 2 : 1, jabki AD : DB = 6 : 9 = 2 : 3. BPT kehta hai dono barabar hone chahiye, to ye galat hai.

Galti kahan: bacche ne **tukda : tukda** (AD : DB) ko **tukda : poori side** (AE : AC) ke saath barabar rakh diya. Ek taraf door ka tukda DB tha, doosri taraf poori AC.

Sahi: ya to AD : DB = AE : EC (dono tukda : tukda), ya AD : AB = AE : AC (dono tukda : poori). AB = 6 + 9 = 15 cm, to 6 / 15 = AE / 20, AE = **8 cm** aur EC = **12 cm**.

**Jaanch:** AD : DB = 6 : 9 = 2 : 3 aur AE : EC = 8 : 12 = 2 : 3 ✅

**Galti 2: converse mein ratio ka kram ulta rakhna**

Ek bracket mein D, AB par aur E, AC par hai. AD = 4 cm, DB = 6 cm, AE = 9 cm, EC = 6 cm. Ek bacche ne dekha: "4 aur 6, aur 6 aur 9: dono 2 : 3 hain. To DE ∥ BC." Usne AB wali taraf ka ratio AD : DB = 4 : 6 liya, par AC wali taraf ka ratio ulta kram mein EC : AE = 6 : 9 liya.

Check karo: **ek hi kram** mein likho, A wala tukda pehle. AD : DB = 4 : 6 = 2 : 3. AE : EC = 9 : 6 = 3 : 2. Ye barabar nahi (2 : 3 aur 3 : 2 ulte hain). To converse nahi lagta, aur DE, BC ke parallel **nahi** hai. Is bracket mein E, C ke paas hai, D, A ke paas, isliye DE tirchhi hai.

Sahi tarika: dono ratio mein pehle A ki taraf ka tukda (AD aur AE), phir door wala (DB aur EC). Parallel hone ke liye AE = 6 cm aur EC = 9 cm chahiye the.

**Jaanch:** Ulta kram: AD / DB = 4 / 6 = 2 / 3 aur AE / EC = 9 / 6 = 3 / 2: barabar nahi ✅ (isliye "parallel nahi" sahi hai).

---

## Quick Recap

- **BPT:** DE ∥ BC ho to AD : DB = AE : EC. Line parallel ho to dono sides ek hi ratio mein katti hain.
- **Proof ka raasta:** ar(ΔADE) ko ΔBDE aur ΔCDE ke saath tolo, aur ΔBDE aur ΔCDE ke area barabar (same base DE, same parallels). Ratio khud barabar ho jaate hain.
- **Roop:** AD / DB = AE / EC se invertendo, alternendo aur componendo lagakar AD / AB = AE / AC, DB / AB = EC / AC jaise roop milte hain. Dono ratio mein **same kism ki cheez** aur **same kram**.
- **Converse:** AD : DB = AE : EC ho to DE ∥ BC. Proof contradiction se: parallel line kheencho, wo E par hi girti hai.
- **Mid-point Theorem:** BPT ka khaas case (ratio 1 : 1). Wahan ka "aadha" wala hissa similar triangles se aayega.
- **Teen parallel lines:** PQ / QR = AB / BC, rules barabar ho ya na ho.
- **Galtiyan:** tukda : tukda ko tukda : poori side se mat milao, aur converse mein dono ratio ek hi kram mein likho.

---

## Practice Questions

Check every answer by substituting back.

1. In ΔABC, DE ∥ BC with D on AB and E on AC. If AD = 11 cm, DB = 6.6 cm and AE = 9.5 cm, find EC.

2. In ΔABC, D is on AB and E is on AC, and DE ∥ BC. If AB = 14 cm, AD = 8 cm and AC = 9.8 cm, find AE and EC.

3. In ΔABC, DE ∥ BC with D on AB and E on AC. If AD = (3x − 4) cm, DB = (x + 2) cm, AE = 10.5 cm and EC = 6 cm, find x and the lengths AD and DB.

4. In ΔABC, DE ∥ BC with D on AB and E on AC. If DB = 4.4 cm, AB = 11 cm and EC = 6.4 cm, find AC and AE.

5. In each case, D lies on AB and E lies on AC of ΔABC. Decide whether DE ∥ BC, giving a reason.
   (a) AD = 2.4 cm, DB = 5.6 cm, AE = 3.3 cm, EC = 7.7 cm.
   (b) AD = 11.2 cm, DB = 8 cm, AE = 9.1 cm, EC = 6.8 cm.

6. In ΔABC, D is the mid-point of AB and DE ∥ BC, with E on AC. If AC = 15.4 cm, find AE. Name the Class 9 result this is a special case of.

7. A triangular shelf bracket has a thin crossbar DE fixed with D on AB and E on AC, so that DE ∥ BC. If AD = 3.5 cm, DB = 8.4 cm and AE = 4.5 cm, find EC and the length of AC.

8. Three parallel lines l, m and n are cut by two transversals. The first transversal meets them at P, Q and R, with PQ = 6.4 cm and QR = 4 cm. The second meets them at A, B and C, with AB = 9.6 cm. Find BC.

9. In ΔABC, DE ∥ BC with D on AB and E on AC. Using the BPT and componendo, show that AD / AB = AE / AC.

10. In ΔABC, DE ∥ BC with D on AB and E on AC. AD = 5 cm, DB = 8 cm and AE = 7 cm. A student writes AE / AC = AD / DB, so AC = (7 × 8) / 5 = 11.2 cm. Find the mistake and give the correct values of EC and AC.

11. In ΔABC, D is on AB and E is on AC. AB = 14 cm, AD = 4.2 cm, AC = 10 cm and AE = 3 cm. Show that DE ∥ BC.

12. In ΔABC, DE ∥ BC with D on AB and E on AC, and AD : DB = 3 : 5. If EC = 13 cm, find AE and AC.

13. A kite has two strings from its nose A: AB = 16.8 cm and AC = 13.2 cm. A cross-thread DE joins D on AB and E on AC, parallel to the cross-stick BC. If DB = 4.2 cm, find AE and EC.

14. State whether each statement is true or false. Give a reason.
    (a) If DE ∥ BC, then AD : DB = AE : EC.
    (b) If DE ∥ BC, then AD : DB = AE : AC.
    (c) If DE ∥ BC, then AB : AD = AC : AE.
    (d) If AD : DB = EC : AE, then DE ∥ BC always.

### Answers

1. BPT: AD / DB = AE / EC, to 11 / 6.6 = 9.5 / EC. EC = (6.6 × 9.5) / 11 = 62.7 / 11 = **5.7 cm**.
   Jaanch: AD : DB = 11 : 6.6 = 5 : 3 aur AE : EC = 9.5 : 5.7 = 5 : 3 ✅

2. A wale tukde aur poori side: AD / AB = AE / AC, to 8 / 14 = AE / 9.8. AE = (8 × 9.8) / 14 = 78.4 / 14 = **5.6 cm**. EC = 9.8 − 5.6 = **4.2 cm**. (DB = 14 − 8 = 6 cm.)
   Jaanch: AD : DB = 8 : 6 = 4 : 3 aur AE : EC = 5.6 : 4.2 = 4 : 3 ✅

3. BPT: (3x − 4) / (x + 2) = 10.5 / 6.
   Cross multiply: 6(3x − 4) = 10.5(x + 2), yaani 18x − 24 = 10.5x + 21.
   7.5x = 45, to **x = 6**.
   AD = 3(6) − 4 = **14 cm**, DB = 6 + 2 = **8 cm**.
   Jaanch: AD : DB = 14 : 8 = 7 : 4 aur AE : EC = 10.5 : 6 = 7 : 4 ✅

4. DB / AB = EC / AC, to 4.4 / 11 = 6.4 / AC. 4.4 / 11 = 0.4, to AC = 6.4 / 0.4 = **16 cm**. AE = 16 − 6.4 = **9.6 cm**.
   Jaanch: AD = 11 − 4.4 = 6.6 cm, AD : DB = 6.6 : 4.4 = 3 : 2 aur AE : EC = 9.6 : 6.4 = 3 : 2 ✅

5. Converse ke liye A wala tukda pehle likhkar dono ratio dekho.
   (a) AD : DB = 2.4 : 5.6 = 3 : 7 aur AE : EC = 3.3 : 7.7 = 3 : 7. Barabar, to **DE ∥ BC**.
   (b) AD : DB = 11.2 : 8 = 1.4 aur AE : EC = 9.1 : 6.8 ≈ 1.34. Barabar nahi, to **DE, BC ke parallel nahi hai**.
   Jaanch: (a) 2.4 / 5.6 = 3/7 aur 3.3 / 7.7 = 3/7 ✅. (b) 11.2 / 8 = 1.4 aur 9.1 / 6.8 ≈ 1.338, alag ✅.

6. D midpoint hai, to AD : DB = 1 : 1, aur BPT se AE : EC = 1 : 1. AE = ½ × 15.4 = **7.7 cm**. Ye Class 9 ke **Mid-point Theorem ke converse** ka case hai.
   Jaanch: AE = EC = 7.7 cm, to AE + EC = 15.4 ✅

7. AD / DB = AE / EC, to 3.5 / 8.4 = 4.5 / EC. EC = (8.4 × 4.5) / 3.5 = 37.8 / 3.5 = **10.8 cm**. AC = 4.5 + 10.8 = **15.3 cm**.
   Story check: EC = 10.8 cm, AC = 15.3 cm se chhota hai, aur AE = 4.5 cm chhota tukda hai kyunki AD (3.5) bhi DB (8.4) se chhota hai: dono taraf upar ka tukda chhota.
   Jaanch: AD : DB = 3.5 : 8.4 = 5 : 12 aur AE : EC = 4.5 : 10.8 = 5 : 12 ✅

8. Teen parallel lines ka result: PQ / QR = AB / BC, to 6.4 / 4 = 9.6 / BC. BC = (4 × 9.6) / 6.4 = 38.4 / 6.4 = **6 cm**.
   Jaanch: PQ : QR = 6.4 : 4 = 1.6 aur AB : BC = 9.6 : 6 = 1.6 ✅

9. BPT: AD / DB = AE / EC. Dono taraf 1 jodo: (AD + DB) / DB = (AE + EC) / EC, yaani AB / DB = AC / EC. Invertendo: DB / AB = EC / AC. Ab dono taraf se 1 ghatao: 1 − DB / AB = 1 − EC / AC, yaani (AB − DB) / AB = (AC − EC) / AC, jo **AD / AB = AE / AC** hai.
   Jaanch (alag numbers se): AD = 4, DB = 10, AE = 2.8, EC = 7 (dono ratio 2 : 5). AD / AB = 4 / 14 = 2/7 aur AE / AC = 2.8 / 9.8 = 2/7 ✅

10. Galti: bacche ne **tukda : tukda** (AD : DB) ko **tukda : poori side** (AE : AC) ke saath barabar rakha. Sahi: AD / DB = AE / EC, to 5 / 8 = 7 / EC. EC = (8 × 7) / 5 = **11.2 cm**. Phir AC = AE + EC = 7 + 11.2 = **18.2 cm**. (Bacche ne jo 11.2 nikala wo asal mein EC tha, AC nahi.)
    Jaanch: AD : DB = 5 : 8 aur AE : EC = 7 : 11.2 = 5 : 8 ✅

11. DB = 14 − 4.2 = 9.8 cm aur EC = 10 − 3 = 7 cm. AD : DB = 4.2 : 9.8 = 3 : 7 aur AE : EC = 3 : 7. Dono ek hi kram mein barabar hain, to converse se **DE ∥ BC**.
    Jaanch: AD / AB = 4.2 / 14 = 0.3 aur AE / AC = 3 / 10 = 0.3 ✅

12. AD : DB = AE : EC, to 3 : 5 = AE : 13. AE = (3 × 13) / 5 = 39 / 5 = **7.8 cm**. AC = 7.8 + 13 = **20.8 cm**.
    Jaanch: AE : EC = 7.8 : 13 = 3 : 5 ✅

13. AD = AB − DB = 16.8 − 4.2 = 12.6 cm. AD / AB = AE / AC, to 12.6 / 16.8 = AE / 13.2. 12.6 / 16.8 = 3/4, to AE = (3/4) × 13.2 = **9.9 cm**. EC = 13.2 − 9.9 = **3.3 cm**.
    Story check: AE = 9.9 cm aur EC = 3.3 cm, dono mil kar 13.2 cm hain. DB (4.2 cm) chhota tukda hai, to cross-thread nose A se door, cross-stick BC ke paas bandha hai, aur dono taraf ka tukda chhota hi aaya.
    Jaanch: AD : DB = 12.6 : 4.2 = 3 : 1 aur AE : EC = 9.9 : 3.3 = 3 : 1 ✅

14. (a) **True** ✅. Ye BPT hai.
    (b) **False** ❌. AD : DB tukda : tukda hai aur AE : AC tukda : poori side. AD : DB = AE : EC hota hai.
    (c) **True** ✅. AD / AB = AE / AC (Part C) ka invertendo roop.
    (d) **False** ❌. Converse ke liye dono ratio **ek hi kram** mein barabar hone chahiye. EC : AE ulta kram hai. Misaal: AD = 2, DB = 3, AE = 3, EC = 2 mein AD : DB = 2 : 3 aur EC : AE = 2 : 3 barabar hain, par AD : DB = 2 : 3 aur AE : EC = 3 : 2 barabar nahi, to DE parallel nahi. Ulta kram tabhi kaam karta hai jab ratio 1 : 1 ho.

---

Ek parallel line, ek triangle, aur dono sides ka ek hi ratio mein kat jana: yahi BPT ka kamaal hai. Jab bhi koi parallel line dikhe, tum sochna: "yahan ratio barabar hona chahiye!" Aur jab do ratio barabar nikle, to parallel ka shak kar sakte ho.

**Agle topic mein (Topic 3):** BPT ke baad ek aur sawaal uthta hai: do triangles ko poora naap-naap kar dekhe bina, kam se kam data se kaise pata chale ki wo **similar** hain? Topic 3 mein tum teen tests seekhoge: AA, SSS aur SAS, aur dekhoge ki parallel line wale triangles ko in tests se kaise jodte hain.
