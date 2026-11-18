# Chapter: Electromagnetism: Force, Induction and Transformers (Part 6)

> **Class:** 10 | **Subject:** Physics
> **Ye file [electromagnetism-part5.md](electromagnetism-part5.md) se aage chalti hai** (wahan transformer: do coils, turns ka ratio, power aur efficiency, aur RCCB ka sensing). Chapter ki shuruaat: [electromagnetism.md](electromagnetism.md). Recall ke liye Class 9: [magnetism-part4.md](../../../class9/physics/magnetism/magnetism-part4.md) (Oersted, thumb rule, solenoid), [magnetism-part5.md](../../../class9/physics/magnetism/magnetism-part5.md) (electromagnet), [magnetism-part6.md](../../../class9/physics/magnetism/magnetism-part6.md) (induction, generator, motor); Class 10: efficiency [current-electricity-ii-part5.md](../current-electricity-ii/current-electricity-ii-part5.md), bijli ka safar aur current ka asar sharir par [household-circuits-part5.md](../household-circuits/household-circuits-part5.md) aur [household-circuits-part2.md](../household-circuits/household-circuits-part2.md).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice Aur Electromagnetism Ka Nakshaa

---

# Topic 6: Sab Kuch Mila Kar: Practice Aur Electromagnetism Ka Nakshaa

Topic 1 se 5 tak hum ek-ek tukda jodte aaye: taar par force (Topic 1), motor ke andar ki coil aur commutator (Topic 2), induction aur Lenz ka niyam (Topic 3), AC generator aur 50 Hz (Topic 4), aur transformer jo AC ka voltage badalta hai (Topic 5). Ab sabse zaroori kaam baaki hai: **sab tukdon ko ek naksha bana kar dekhna**, taaki kisi bhi sawaal ko dekhte hi pata chale ki kaun sa haath lagana hai aur kaun sa niyam chalega. Aaj ka topic naya concept kam, **jodna aur practice** zyada hai.

---

## Magnet Week ka quiz board

Kartik ke school mein "Magnet Week" chal raha tha. Hall ke beech ek bada quiz board laga tha: har team ko ek-ek card uthana tha, aur card par likhe sawaal ke liye **sahi haath** (left ya right) aur sahi jawab chunna tha. Kartik ke Chacha, Mr. Wankhede, usse milne school aaye the aur board ke paas khade ho kar dekh rahe the.

Kartik ki team ne pehle teen card uthaye aur teeno mein **ulta jawab** diya: ek mein force ke liye right hand laga diya, ek mein induced current ke liye left hand, aur ek mein field ki disha hi ulti padh li. Board par laal ghanti baji. Kartik ne maayoosi se Chacha ko dekha: "Chacha, jab bhi sawaal aata hai to mujhe bas yaad aata hai ki 'ek haath force ka hai aur ek current ka'. Par kaun sa kab, ye hamesha ulajh jaata hai. Aur ye bhi samajh nahi aata ki ye saare rules ek-doosre se kaise jude hain."

Chacha muskuraye. "Ulajhna theek hai, kyunki tum ek-ek rule ratte ho. Aaj hum **naksha** banayenge: sirf teen parivaar, aur har parivaar ka ek hi haath. Phir ek chhota sa sawaal hoga: 'kya diya hai, kya poochha hai?' Bas itna dekh lo, haath apne aap chun jaata hai. Chalo, pehle board ke card dobara dekhte hain, par is baar naksha banakar."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Family map (parivaar ka naksha)** | Electromagnetism ke saare rules aur machines ko teen parivaar mein baantne wala naksha: current se field, current + field se force, halchal ya badalte field se current | Figure 6.1 |
| **Decision chart** | Sawaal mein "kya diya hai aur kya poochha hai" dekh kar sahi haath ya niyam chunne ka tareeka | Figure 6.2 |
| **Overall efficiency** | Machines ki chain ki kul efficiency: har machine ki efficiency ko decimal mein likh kar guna karne par milti hai | 0.75 × 0.60 = 0.45, yaani 45 percent |
| **Reversible machine** | Wo machine jo bijli le kar ghoom sakti hai, aur ghumaye jaane par bijli bhi de sakti hai | Chhoti hobby motor |
| **Ulta jaanch** | Direction ka jawab nikaalne ke baad usse "ho jaane do" aur dekho ki naya asar shuruaati kaaran ko **rokta** hai ya nahi (Lenz) | Neeche ka Example 2 |

---

> **Suraksha:** Is topic ki saari activity **kam voltage** par hai (1.5 V ki cell, LED, chhota meter) aur **adult ya teacher ke saath**. Ghar ke socket ya mains se kuch bhi jodna, kisi charger ya adapter ko kholna, ya kisi appliance se motor nikaalna **kabhi nahi**. Strong neodymium magnet sirf teacher ke paas: wo nigalne, ungli dabane aur phone, card ya pacemaker ko nuksaan ka khatra hai. Is topic ke bijli ke numerical **kaagaz par** hain, mains par koi prayog nahi.

---

## Class 9 ka recall

Class 9 mein teen alag baatein dekhi thi. Pehli: current ke aas-paas field banta hai (Oersted, 1820), right-hand thumb rule se uski disha, aur solenoid aur electromagnet ([magnetism-part4.md](../../../class9/physics/magnetism/magnetism-part4.md), [magnetism-part5.md](../../../class9/physics/magnetism/magnetism-part5.md)). Doosri: field mein current wale taar par force lagta hai, left-hand rule se, aur isi se motor ghoomti hai. Teesri: badalte field se current banta hai (Faraday, 1831), aur isi se generator aur dynamo chalte hain ([magnetism-part6.md](../../../class9/physics/magnetism/magnetism-part6.md)). Class 9 ne ye teeno alag-alag sikhaye the; is chapter ne unmein rules, numbers aur Lenz ka niyam joda. Ab hum teeno ko ek naksha mein rakhte hain.

---

## Part A: Teen parivaar ka naksha

Electromagnetism ki har cheez ko teen parivaaron mein baanta ja sakta hai:

1. **Current se field:** jahan current hai, wahan magnetic field hai.
2. **Current aur field milkar force:** field mein current wale taar par dhakka.
3. **Halchal ya badalta field milkar current:** field ko kaat-ta ya badalta hua cheez current banati hai.

```
    +--------------------------+ right-hand thumb rule  +---------------+
(1) : CURRENT (I)              : ---------------------> : FIELD (B)     :  Oersted, solenoid,
    +--------------------------+                        +---------------+  electromagnet

    +--------------------------+     left-hand rule     +---------------+
(2) : CURRENT + FIELD          : ---------------------> : FORCE (F)     :  motor, loudspeaker,
    +--------------------------+                        +---------------+  moving-coil meter

    +--------------------------+ right-hand rule + Lenz +---------------+
(3) : HALCHAL + FIELD ya       : ---------------------> : CURRENT (I)   :  generator, dynamo,
    : badalta FIELD            :                        +---------------+  transformer
    +--------------------------+
```

> **Figure 6.1** – Teen parivaar. Har baar ek cheez diya jaata hai (baayen), ek cheez milti hai (daayen), aur beech mein us parivaar ka rule hai. (1) mein current diya aur field mila; (2) mein current aur field diye aur force mila; (3) mein halchal (ya badalta field) aur field diye aur current mila.

| Parivaar | Rule | Kaun-kaun si machine | Kahan seekha |
|---|---|---|---|
| 1. Current se field | Right-hand thumb rule (taar), grip rule (coil) | Electromagnet, electric bell, solenoid, crane | Class 9, aur coil ka field Topic 3 mein |
| 2. Current + field se force | Left-hand rule | DC motor, loudspeaker, moving-coil meter | Topic 1 aur 2 |
| 3. Halchal ya badlav se current | Right-hand rule, Lenz ka niyam | Generator, dynamo, transformer, induction cooktop, regenerative braking | Topic 3, 4 aur 5 |

Ek baat dhyan se dekho: **ek hi machine kai parivaaron mein aati hai.** Transformer ko lo: primary coil mein current field banata hai (parivaar 1), aur wo badalta field secondary coil mein voltage banata hai (parivaar 3). Motor ko lo: current se force (parivaar 2), par ghoomti coil khud field ko kaat-ti hai, to usme bhi current banti hai (parivaar 3). Topic 2 ki "jam motor jalti kyun hai" wali baat isi ka natija hai: chalti motor mein ye banti hui current supply ke current ka virodh karti hai, aur jam motor mein ye virodh nahi hota, to current bahut zyada.

**Ek honest baat (Topic 3 ki baat ka dohrana):** left-hand aur right-hand rule do alag physics nahi hain. Ye **ek hi niyam ko do taraf se dekhna** hai: ek mein hum current aur field jaante hain aur force poochhte hain, doosre mein halchal aur field jaante hain aur current poochhte hain.

---

## Part B: Kaun sa haath kab?

Decision chart ka pehla kadam hamesha ek hi hai: **likho ki kya diya hai aur kya poochha hai.**

```
  Sawaal padho. Pehle likho: DIYA kya hai? POOCHA kya hai?
     :
     +--> current diya, FIELD poochha  ---------> right-hand thumb rule (taar) ya grip rule (coil)
     :
     +--> current + field diye, FORCE poochha --> LEFT hand   (motor wali baat)
     :
     +--> halchal + field diye, CURRENT poochha -> RIGHT hand  (generator wali baat)
     :
     +--> field badal raha hai, coil mein current -> Lenz: virodh sochkar, phir grip rule
     :
     +--> do jawab aaye? Ek ko doosre se ulta check karo (Jaanch): induced current
          hamesha us halchal ya badlav ko rokne wala force banati hai
```

> **Figure 6.2** – Decision chart. Diya aur poochha dekh kar haath chuno. Aakhri line dono rules ko jodti hai: jo bhi induced current bane, wo apni halchal ko roke.

Yaad rakhne ki chhoti trick (Topic 3 wali): **left-hand = motor** (bijli de kar force/halchal lo), **right-hand = generator** (halchal de kar bijli lo). Dono haathon mein thumb, forefinger aur middle finger ek-doosre se 90° par rakhte hain. Fark sirf ye ki left hand mein thumb = force, middle finger = current; right hand mein thumb = halchal, middle finger = induced current. Forefinger dono mein field.

### Example 1: Quiz board ke chhah card

Har card mein diya, poochha, rule aur jawab likha hai; uske baad har direction wale card ka ulta jaanch hai.

| Card | Diya aur poochha | Rule | Jawab |
|---|---|---|---|
| 1 | Seedha khada taar, current Up. Upar se dekho to field ke gole kis taraf ghoomte hain? | Right-hand thumb rule | Anticlockwise (upar se dekhne par) |
| 2 | Ek gol coil mein current saamne se dekhne par clockwise hai. Saamne wala face N hai ya S? | Grip rule (clock rule) | S |
| 3 | Taar mein current East, field North (dono horizontal). Force kis taraf? | Left hand | Up |
| 4 | Taar Down ki taraf chal raha hai, field South ki taraf. Induced current kis taraf? | Right hand | West |
| 5 | Loudspeaker ki voice coil mein current ulta kar diya. Cone ka kya hoga? | Left hand (Topic 1) | Force ulta, to cone ulti taraf |
| 6 | Transformer ki secondary coil mein voltage kyun banta hai? | Koi haath nahi: induction | Primary ka badalta field secondary ko kaat-ta hai |

**Card 1 ka Jaanch:** Right hand ka thumb Up, ungliyan taar ko lapetti hain. Dusre tareeke se, screw ka rule: seedha (right-handed) screw upar ki taraf badhe to use upar se dekhne par anticlockwise ghumana padta hai: current Up hai to field bhi anticlockwise ghoomti hai ✅.

**Card 2 ka Jaanch:** Clockwise ghoomti ungliyan lo, right-hand grip: thumb dekhne wale se door (page ke andar) ki taraf jaata hai, yaani N pole peeche aur saamne wala face **S** ✅. Screw se bhi: clockwise ghumane par right-handed screw door jaata hai ✅. Topic 3 ka clock rule bhi yahi kehta hai: clockwise dikhne wala face S, anticlockwise wala N.

**Card 3 ka Jaanch:** Left hand: forefinger North (field), middle finger East (current), thumb **Up**. Dusre tareeke se (ulta jaanch): agar taar Up chal pade, right hand: thumb Up, forefinger North, to middle finger **West** par aati hai. Ye induced current original East current se ulti hai, yaani halchal ko rokne wali ✅.

**Card 4 ka Jaanch:** Right hand: thumb Down, forefinger South, to middle finger **West**. Ab left hand se ulta jaanch: forefinger South, middle finger West (jo abhi nikla current), to thumb **Up** aata hai: force Up, aur taar Down chal raha tha, to force halchal ko rokta hai ✅.

**Card 5:** Current ulta to force ulta (left hand mein middle finger ulta, to thumb ulta). Cone pehle bahar ki taraf jaata tha to ab andar ki taraf (aur ulta). Aise hi music ke current ke saath cone aage-peeche hota hai ✅ (Topic 1, Figure 1.5).

**Card 6:** Is mein koi haath nahi lagta, kyunki secondary mein koi taar field mein chal nahi raha: **field khud badal raha hai** (parivaar 3, badlav wala hissa). Lenz ke niyam se secondary ka current us badlav ka virodh karta hai ✅.

Kartik ki team ke teeno ulte jawab ab samajh aaye: har baar "kya diya, kya poochha" dekha hi nahi tha, seedhe haath utha liya tha.

---

## Part C: Ek taar, teeno niyam

Ek hi chhote setup mein dekhte hain ki rules aapas mein kaise jude hain. Do seedhi patriyaan (rails) ek chhote baar se baayen taraf jude hain, aur ek taar ka rod unpar sidhe dauda ja raha hai. Poora setup ek field mein hai jo page ke **andar** (⊗) hai. Rod daayen taraf chalta hai, to rod aur baar ke beech ka loop badi hoti jaati hai.

```
                                         rod
    +===================================#===============
    :               ←     ←     ←       #
    ↓     ⊗     ⊗     ⊗     ⊗     ⊗     ↑     ⊗     ⊗
    :                                   #
    ↓     ⊗     ⊗     ⊗     ⊗     ⊗     ↑ → v (chaal)
    :                                   # ← F (rukne
    ↓     ⊗     ⊗     ⊗     ⊗     ⊗     ↑     wala force)
    :               →     →     →       #
    +===================================#===============
        field ⊗ (page ke andar) sab jagah
```

> **Figure 6.3** – Rails par rod. Field ⊗ (page ke andar) sab jagah. Rod daayen (→) chal raha hai. Right-hand rule se rod mein current ↑; loop mein ghoomta hua current anticlockwise hai (rod mein ↑, upar ki rail mein ←, baar mein ↓, neeche ki rail mein →). Is current par field ka force ← hai, jo chaal ke ulta hai.

### Example 2: Rod par current aur force: ulta jaanch ke saath

**Given:** Figure 6.3 jaisa setup. Field page ke andar (⊗). Rod daayen (→) chal raha hai.
**Find:** (a) Rod mein induced current ki disha. (b) Us current par force ki disha. (c) Dikhao ki force chaal ka virodh karta hai.
**Formula:** Right-hand rule: thumb = halchal, forefinger = field, middle finger = induced current. Left-hand rule: forefinger = field, middle finger = current, thumb = force.
**Substitution:** (a) Right hand: thumb → (halchal), forefinger page ke andar (⊗, field). Middle finger **upar (↑)** ki taraf aati hai. (b) Left hand: forefinger ⊗, middle finger ↑ (abhi nikla current): thumb **baayen (←)** taraf aata hai.
**Answer:** (a) Rod mein current **↑**. (b) Force **←**. (c) Chaal → hai aur force ← hai: dono ulte, to force chaal ka **virodh** karta hai.
**Jaanch:** Doosre tareeke se, Lenz ke shabdon mein: rod daayen jaata hai to loop ki area badhti hai, yaani page ke andar ki field-lakeerein loop ke andar badhti hain. Induced current is badhne ka virodh karega, to loop ke andar **bahar (⊙)** field banayega. Grip rule: anticlockwise current loop ke andar ⊙ field banata hai. Anticlockwise loop mein daayen taraf ki rod mein current ↑ hota hai ✅. Dono tareeke ek hi jawab dete hain, aur force ← ka matlab hai ki rod ko daayen chalane ke liye **dhakka dena** padega: wahi extra mehnat jo bijli ban rahi hai (Topic 3).

Ek baat aur: rod ko **double chaal** se chalao to emf double hoga (Topic 3, e ∝ rate of change), loop ki resistance wahi hone par current double hoga, aur force bhi double (Topic 1, force ∝ current). Dhakke ka force doguna aur chaal doguni, to mehnat ki power (force × chaal) **chauguni**: bijli ki power (I² R, I double) bhi chauguni. Yaani jitni bijli, utni hi mehnat.

---

## Part D: Motor aur generator ki jodi

Ab ek chain dekhte hain jahan ek machine doosri ko ghumati hai: ek motor generator se jodi gayi hai, aur generator ek lamp jalata hai. Mazaa ye hai ki dono ki efficiency 100 percent se kam hai, to chain ki kul efficiency aur bhi kam hogi. (Efficiency: [current-electricity-ii-part5.md](../current-electricity-ii/current-electricity-ii-part5.md).)

```
  10 W      +--------------+   7.5 W     +--------------+    4.5 W   +--------+
  bijli --->: MOTOR        : ----------> : GENERATOR    : ---------> : LAMP   :
  andar     : 75 percent   : mechanical  : 60 percent   :    bijli   :        :
            +--------------+             +--------------+            +--------+
                   :                            :
                   v                            v
            garmi, awaaz 2.5 W           garmi, ragad 3.0 W
```

> **Figure 6.4** – Motor, generator, lamp ki chain (Example 3 ka data). Motor 10 W leti hai aur 7.5 W mechanical power deti hai. Generator 7.5 W lekar 4.5 W bijli deta hai, jo lamp tak jaati hai. Motor 2.5 W aur generator 3.0 W garmi, awaaz aur ragad mein khote hain.

**Overall efficiency** = pehli efficiency × doosri efficiency (decimal mein): **0.75 × 0.60 = 0.45**, yaani 45 percent. Yahan dono machine ke beech kisi aur nuksaan ko nahi gina gaya (coupling perfect maana hai).

### Example 3: Motor aur generator ki jodi

**Given:** Motor 8.0 V par 1.25 A leti hai, efficiency 75 percent. Wo generator ko ghumati hai (efficiency 60 percent). Generator ki bijli ek lamp ko jaati hai. Samay 5 minute (300 s).
**Find:** Motor ki input power, mechanical power, generator ki output power, overall efficiency, har machine mein nuksaan ki power, aur 5 minute ki energy.
**Formula:** P = V × I; output = efficiency × input; overall efficiency = pehli × doosri; E = P × t.
**Substitution:** P_in = 8.0 V × 1.25 A = 10 W. Mechanical = 0.75 × 10 W = 7.5 W. Generator output = 0.60 × 7.5 W = 4.5 W. Overall = 4.5 W ÷ 10 W = 0.45. Nuksaan: motor mein 10 W − 7.5 W = 2.5 W; generator mein 7.5 W − 4.5 W = 3.0 W. 300 s mein: energy in = 10 W × 300 s = 3000 J; lamp ko = 4.5 W × 300 s = 1350 J; kul nuksaan = (2.5 W + 3.0 W) × 300 s = 1650 J.
**Answer:** Input 10 W, mechanical 7.5 W, lamp ki bijli 4.5 W, overall efficiency **45 percent**, motor mein 2.5 W aur generator mein 3.0 W nuksaan; 5 minute mein 3000 J andar, 1350 J lamp ko, 1650 J garmi aur ragad mein.
**Jaanch:** 0.75 × 0.60 = 0.45 aur 10 × 0.45 = 4.5 ✅; 4.5 W + 2.5 W + 3.0 W = 10 W ✅; 1350 J + 1650 J = 3000 J ✅.

**Free energy ka sapna:** Lamp ki jagah generator ki bijli wapas motor mein de do to? Generator sirf 4.5 W deta hai, motor ko 10 W chahiye: 4.5 W < 10 W, to ye jodi **apne aap kabhi nahi chalegi**. Har chakkar mein energy kam hoti jaati hai. Yahi hai "energy na banti hai, na khatam hoti hai": sirf roop badalta hai aur kuch garmi mein chali jaati hai.

---

## Part E: Generator, transformer, lamp: poori chain ek saath

Ab Topic 4 aur Topic 5 ko ek chain mein jodte hain: generator AC banata hai (frequency Topic 4 se), transformer voltage badalta hai (Topic 5), aur lamp use khapata hai. Bijli-ghar mein ye hi chain bahut bade pamane par hai ([household-circuits-part5.md](../household-circuits/household-circuits-part5.md), jahan ooncha voltage lambi line ke liye kyun chahiye, wo dekha tha: wo numbers yahan dohraye nahi).

```
                 closed laminated iron core
         +==================================+
         #                                  #
  ~ ---> @@                                @@ ---> lamp
  34 V   @@  PRIMARY          SECONDARY    @@      8.5 V, 17 W
  50 Hz  @@  N_p = 360        N_s = 90     @@
         #                                  #
         +==================================+
   (coils alag-alag: beech mein taar ka koi jod nahi)
```

> **Figure 6.5** – Ek chhoti lab-chain: alternator ka AC primary coil mein, transformer ke closed laminated iron core ke zariye secondary coil tak, aur wahan se lamp tak. Primary (N_p = 360 turns) aur secondary (N_s = 90 turns) alag-alag coil hain, taar ka koi jod nahi: sirf core ka badalta field dono ko jodta hai.

Ek chhoti table jo Topic 5 ki baatein ek nazar mein dikhati hai, aur ek aam galti ki jad bhi hai:

| Cheez | Transformer ke baad (step-down) | Kyun |
|---|---|---|
| Voltage | Kam hota hai | N_s < N_p |
| Current | Zyada hota hai | Power lagbhag wahi rehti hai, to V kam, I zyada |
| Power | Lagbhag wahi (thodi kam: nuksaan) | Energy ban nahi sakti |
| **Frequency** | **Bilkul wahi** | Primary ka field jitni baar badalta hai, secondary utni hi baar badalta hai |

### Example 4: Alternator, transformer, lamp

**Given:** 12-pole alternator 500 rpm par ghoomta hai aur 34 V AC deta hai. Transformer: N_p = 360 turns, N_s = 90 turns, efficiency lagbhag 80 percent (lab-model ki maani hui value). Secondary par 8.5 V, 17 W ka lamp.
**Find:** Alternator ki frequency aur time period; V_s; lamp ka current I_s; transformer ki input power aur primary ka current I_p; secondary ki frequency; transformer mein nuksaan.
**Formula:** f = (rpm ÷ 60) × pole pairs; T = 1 ÷ f; V_s ÷ V_p = N_s ÷ N_p; I = P ÷ V; efficiency = (output ÷ input) × 100 percent.
**Substitution:** Pole pairs = 12 ÷ 2 = 6. f = (500 ÷ 60) × 6 = 8.33 × 6 = 50 Hz. T = 1 ÷ 50 Hz = 0.02 s. V_s = 34 V × 90 ÷ 360 = 8.5 V. I_s = 17 W ÷ 8.5 V = 2 A. Input power = 17 W ÷ 0.80 = 21.25 W. I_p = 21.25 W ÷ 34 V = 0.625 A. Secondary frequency = 50 Hz. Nuksaan = 21.25 W − 17 W = 4.25 W.
**Answer:** f = **50 Hz**, T = **0.02 s**; V_s = **8.5 V**; I_s = **2 A**; transformer ki input **21.25 W** aur I_p = **0.625 A**; secondary ki frequency **50 Hz**; nuksaan **4.25 W** (garmi).
**Jaanch:** V_s = 8.5 V lamp ke 8.5 V se match ✅. 34 V × 0.625 A = 21.25 W ✅. Primary ka current (0.625 A) secondary ke current (2 A) se chhota hai: step-down mein jis taraf voltage zyada, current kam ✅ (ideal transformer mein I_p = 2 A × 90 ÷ 360 = 0.5 A; 0.625 A isse zyada hai kyunki 4.25 W ka nuksaan bhi primary se aata hai). 50 Hz × 0.02 s = 1 ✅.

---

## Ghar par adult ke saath aur school mein teacher ke saath

**Ghar par adult ke saath: hobby motor se bijli.** Ek chhoti hobby motor (dukaan ya kit se, kisi appliance se nikaali hui nahi) aur ek LED lo. Motor ke dono taar LED se jodo. Motor ke shaft par dhaaga lapeto aur use jhatke se kheencho taaki shaft tez ghoome. LED halki si chamak sakti hai: LED ko sahi taraf jodna padta hai (ek taraf se hi chalti hai), aur ghumane ki disha badalne par ulti taraf wali jod chamakti hai. Agar na chamke to ghabrao mat: kam rpm par voltage kam hota hai, aur LED ko kuch volt chahiye. Kisi bhi taar ko mains se mat jodo.

**School mein teacher ke saath, sirf dekhne ke liye (teacher demo):** do ek jaisi hobby motor ek chhoti rubber ki nali se aamne-saamne jod do. Ek motor ko 1.5 V ki cell se chalao; doosri motor ke taar ek sensitive meter se jodo. Pehli motor doosri ko ghumati hai, aur meter hilta hai: ek hi machine **dono kaam** karti hai. Cell ko seedhe taar se kabhi short mat karna.

**Kaagaz par (ghar par):** Figure 6.1 ko apne haath se bina dekhe banao: teen parivaar, har ek ka rule aur do-do machine.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Motor aur generator bilkul alag machine hain."**
Demonstration: Kartik ne kaha ki Class 9 mein dono ki table alag thi, to dono ka dhancha bhi alag hoga. Chacha ne ek hobby motor ke taar ek meter se jode aur shaft ko haath se ghumaya. 330 rpm par meter lagbhag 0.55 V dikhata tha, aur 660 rpm par lagbhag 1.1 V: dugni chaal, dugna voltage (Topic 3, e ∝ rate). Wahi motor, bina kuch badle, **generator** ban gayi. Electric gaadi ki motor brake lagane par yahi karti hai (regenerative braking, Topic 3). Honest baat: bade bijli-ghar ke generator aur ghar ke pankhe ki motor alag tarah se **design** hoti hain (kaam ke hisaab se), par **principle** ek hi hai: dono mein coil aur field ke beech halchal hai.

**Galti 2: "Right-hand aur left-hand rule alag physics dete hain, ek ko galat hona chahiye."**
Demonstration: Ek rod mein current → hai aur field page se bahar (⊙). Left hand: forefinger ⊙, middle finger →, to thumb **↓**: force neeche. Kartik ne right hand se wahi ungliyan rakhi aur thumb **↑** aaya: "dekha, dono alag hain!" Par right hand ka thumb **halchal** hota hai, force nahi. Ab sahi tarah se: rod force ke kaaran **↓** chalne lagi, to ab right hand: thumb ↓ (halchal), forefinger ⊙ (field), middle finger **←** (induced current). Ye induced current original current (→) ka **virodh** karti hai. Dono rules ek hi kahani ke do kadam hain: pehle force se halchal, phir halchal se current jo force ko ghatati hai. Yahi wajah hai ki chalti motor mein current stalled motor se kam hota hai (Topic 2).

**Galti 3: "Transformer frequency badal deta hai."**
Demonstration: Ek lab transformer ke primary (252 turns) ko 18 V par 45 Hz ka AC diya. Secondary 84 turns ki hai. V_s = 18 V × 84 ÷ 252 = 6 V. Frequency? Primary ka field 1 second mein 45 baar poora chakkar lagata hai, to secondary ka voltage bhi 45 baar poora chakkar lagata hai: 45 Hz, time period 1 ÷ 45 Hz = 0.022 s (lagbhag). Turns ka ratio **voltage** badalta hai, **time ki chaal nahi**: jaise see-saw ke dono sire ek second mein utni hi baar upar-neeche jaate hain, bas ek sire ki chaal badi aur doosre ki chhoti hoti hai. Phone charger mein jo "50 Hz se DC" hota hai, wo transformer ka nahi, andar ke **rectifier** (Topic 4) ka kaam hai.

**Galti 4: "DC (battery) khatarnaak nahi, AC (socket) khatarnaak hai."**
Demonstration: Maan lo sharir ke raaste ka resistance lagbhag 4 kΩ hai (geele haath mein kam, sukhe mein zyada). I = V ÷ R: 1.5 V ki cell par 1.5 V ÷ 4000 Ω = 0.375 mA (kuch mehsoos nahi). 230 V AC par 230 V ÷ 4000 Ω = 57.5 mA, jo Chapter 8 ke 30 mA khatarnaak level se upar hai ([household-circuits-part2.md](../household-circuits/household-circuits-part2.md)). Par 600 V DC par 600 V ÷ 4000 Ω = 150 mA: **DC bhi jaan le sakta hai**. Aur 24 V DC par 6 mA, jo Chapter 8 ki table mein 1 mA aur 10 mA ke beech "jhanjhanahat" ki range hai, par ye "bilkul safe" nahi hai, kyunki zakhm ya geele haath mein R kam hokar current badh jaata hai. Khatre ka sabse bada kaaran **voltage (aur us se bahta current)** hai, AC ya DC ka label nahi. (AC aur DC ka sharir par asar thoda alag tarah ka bhi hota hai, ye detail aage ki class mein.) Isliye hamesha: socket, charger ke andar ki wiring, batteries ke bade pack: sab door se dekho, chhuo nahi.

---

## Quick Recap

- Electromagnetism ke **teen parivaar**: (1) current se field, (2) current + field se force, (3) halchal ya badalte field se current.
- Rules: (1) right-hand thumb rule ya grip rule, (2) left hand, (3) right hand aur Lenz ka niyam.
- Decision chart: pehle likho **kya diya, kya poochha**; phir haath chuno; phir **ulta jaanch**: induced current hamesha halchal ko rokti hai.
- Left aur right hand ek hi niyam ke do roop hain, do physics nahi.
- Motor aur generator ek hi machine ke do kaam hain (reversible machine); real machines kaam ke hisaab se design hoti hain.
- Chain ki overall efficiency = alag-alag efficiency ka guna; kul output hamesha input se kam.
- Transformer voltage aur current badalta hai (ulte tareeke se), power lagbhag wahi, **frequency bilkul nahi**.
- Khatra voltage aur sharir ke resistance par depend karta hai, sirf AC ya DC par nahi.

---

## Practice Questions

(In the lab, East, North and Up are three directions at right angles to each other. On a page, ⊙ is out of the page and ⊗ is into the page.)

1. Place each device in the main family: (1) current makes a field, (2) current in a field makes a force, (3) motion or a changing field makes a current: electric bell, ceiling fan, bicycle dynamo, crane electromagnet, moving-coil meter, hydro alternator, induction cooktop, pole transformer. Then name one device from the list that uses two families, and say which two.

2. Name the rule or hand you would use for each task: (a) direction of the field around a long straight wire carrying current; (b) direction of the force on a wire carrying current in a magnet's field; (c) direction of the current in a rod that is moved across a field; (d) the pole that the near face of a coil becomes when the N pole of a magnet is pulled away from it; (e) the pole at the end of a solenoid when the current direction is known.

3. A vertical wire moves North through a horizontal field that points West. Find the direction of the induced current (Up or Down), and check it by finding the direction of the force on that current in the same field.

4. A straight wire in a page carries current down the page (↓). The field is to the left (←). Using the left-hand rule, find the direction of the force (⊙ or ⊗). Then check by supposing the wire moves in that direction and using the right-hand rule: what is the direction of the induced current, and how does it compare with the original current?

5. A rod slides up the page (↑) over rails, in a field pointing into the page (⊗). Find the direction of the induced current in the rod by the right-hand rule, and the direction of the force on that current by the left-hand rule. Does the force help or oppose the motion?

6. A flat circular loop lies in the page. Say whether the induced current is clockwise or anticlockwise (as seen by you) in each case, with the rule you used: (a) a field into the page (⊗) is growing stronger; (b) a field out of the page (⊙) is growing weaker; (c) a field into the page (⊗) is growing weaker.

7. A motor takes 46 W, has an efficiency of 82 percent, and drives a generator of efficiency 68 percent. Find the mechanical power from the motor, the electrical power from the generator, the overall efficiency, and the power lost in each machine. Could the generator's output run the motor? Explain.

8. A 6-pole alternator turns at 800 rpm and gives 135 V. Its output goes to a step-down transformer with 540 turns in the primary and 180 turns in the secondary, which feeds a load drawing 2.7 A. Treat the transformer as ideal. Find the alternator's frequency, the secondary voltage, the primary current and the frequency and time period of the secondary voltage.

9. A lab transformer has 660 turns in the primary and 110 turns in the secondary. The primary is connected to a 21 V supply of frequency 35 Hz. Find the secondary voltage, its frequency and its time period. Does the transformer step up or step down?

10. Wind carries 1800 kW of power onto the blades of a wind turbine. The blades and gearbox pass on 45 percent of it as turning power, the generator is 94 percent efficient and the transformer is 99 percent efficient (assume these values; real efficiencies are lagbhag). Find the overall efficiency and the electrical power after the transformer. How much power is lost in all?

11. Taking a body-path resistance of 5 kΩ (assume), find the current for (a) a 12 V DC supply and (b) a 230 V AC supply. Compare each with the 30 mA level of Chapter 8. Then say whether this comparison shows that AC is more dangerous than DC.

12. Say whether each statement is true or false, giving a reason. (a) The same hobby motor can be used as a generator. (b) A transformer can change 50 Hz AC into 25 Hz AC. (c) The left-hand rule and the right-hand rule contradict each other. (d) A DC supply cannot be dangerous. (e) If a generator's output is fed back to the motor that drives it, the pair can run forever and light a bulb as well.

13. (a) A fan motor running freely draws less current than when its shaft is held still. Use the idea of a spinning coil cutting a field to explain this in two or three lines. (b) In the hobby-motor and LED activity, why does the LED become brighter when you spin the shaft faster?

### Answers

1. (1) **Electric bell** (electromagnet), **crane electromagnet**. (2) **Ceiling fan** (motor), **moving-coil meter**. (3) **Bicycle dynamo**, **hydro alternator**, **induction cooktop** (changing field induces eddy currents in the pan), **pole transformer**. Do parivaar wali cheez: **transformer** (primary current makes a field: family 1; changing field makes current in the secondary: family 3). Fan motor bhi do mein aati hai: current se force (2) aur ghoomti coil mein induced current (3). **Jaanch:** har device ko "kya diya, kya mila" se dekha: bell ka input current aur output magnet (1), fan ka input current aur output force (2), dynamo ka input halchal aur output current (3) ✅.

2. (a) **Right-hand thumb rule.** (b) **Left-hand rule.** (c) **Right-hand rule.** (d) **Lenz ka niyam** (virodh karo): N pole door ja raha hai, to coil ka near face use rokne ke liye kheenchne wala pole, yaani **S**, banega. (e) **Grip rule** (clock rule: anticlockwise face N, clockwise face S). **Jaanch:** (b) mein diya current aur field aur poochha force: left hand; (c) mein diya halchal aur field, poochha current: right hand ✅.

3. **Given:** wire North chal raha hai, field West. **Find:** induced current. **Formula:** right hand: thumb = halchal, forefinger = field, middle finger = current. **Substitution:** thumb North, forefinger West: middle finger **Up** aati hai. **Answer:** current **Up**. **Jaanch (left hand):** forefinger West (field), middle finger Up (abhi nikla current): thumb **South**. Force South hai aur wire North chal raha tha: force halchal ke ulta ✅ (Lenz).

4. **Given:** current ↓, field ←. **Formula:** left hand: forefinger = field, middle finger = current, thumb = force. **Substitution:** forefinger ←, middle finger ↓: thumb page ke andar jaata hai. **Answer:** force **⊗**. **Jaanch (right hand):** wire ⊗ ki taraf chale, to thumb ⊗, forefinger ←: middle finger **↑** aati hai. Induced current ↑, jabki original current ↓: ulta, yaani halchal ke saath aane wala induced current original current ko ghatata hai ✅.

5. **Given:** rod ↑, field ⊗. **Formula:** right hand: thumb = halchal, forefinger = field, middle finger = induced current. **Substitution:** thumb ↑, forefinger ⊗: middle finger **←** aati hai. **Answer:** induced current **←**. **Force par:** left hand: forefinger ⊗, middle finger ← (induced current): thumb **↓**. **Jaanch:** force ↓ aur halchal ↑: force halchal ka **virodh** karta hai, jaisa Lenz ke niyam ko chahiye ✅.

6. (a) Andar (⊗) ki field badh rahi hai, to current ka field **⊙** hona chahiye (virodh): grip rule se anticlockwise current page ke saamne wale face par ⊙ field banati hai, to **anticlockwise**. (b) Bahar (⊙) ki field ghat rahi hai, to induced field ⊙ hona chahiye (ghatne ka virodh): **anticlockwise**. (c) Andar (⊗) ki field ghat rahi hai, to induced field ⊗: **clockwise**. **Jaanch:** Class 9 ka clock rule: anticlockwise dikhne wala face N hota hai, aur N face se field bahar (⊙) nikalti hai ✅. (c) mein clockwise face S, jahan field andar jaati hai ✅.

7. **Given:** P_in = 46 W, motor efficiency 82 percent, generator efficiency 68 percent. **Formula:** output = efficiency × input. **Substitution:** Mechanical = 0.82 × 46 W = 37.72 W. Generator output = 0.68 × 37.72 W = 25.65 W. Overall = 0.82 × 0.68 = 0.5576, yaani **55.8 percent** (lagbhag). Motor mein nuksaan = 46 W − 37.72 W = **8.28 W**; generator mein = 37.72 W − 25.65 W = **12.07 W**. **Answer:** 37.7 W, lagbhag 25.6 W, 55.8 percent, 8.28 W aur lagbhag 12.1 W. Generator ki lagbhag 25.6 W motor ko chalane ke liye kam hai (motor ko 46 W chahiye): **nahi chal sakta**. **Jaanch:** 25.65 ÷ 46 = 0.5576 ✅; 8.28 + 12.07 + 25.65 = 46 W ✅.

8. **Given:** 6 poles, 800 rpm, V_p = 135 V, N_p = 540, N_s = 180, I_s = 2.7 A, ideal. **Formula:** f = (rpm ÷ 60) × pole pairs; V_s ÷ V_p = N_s ÷ N_p; V_p I_p = V_s I_s. **Substitution:** Pole pairs = 3, f = (800 ÷ 60) × 3 = 13.33 × 3 = **40 Hz**. V_s = 135 V × 180 ÷ 540 = **45 V**. I_p = (45 V × 2.7 A) ÷ 135 V = 121.5 W ÷ 135 V = **0.9 A**. Secondary ki frequency = **40 Hz** (transformer frequency nahi badalta), T = 1 ÷ 40 Hz = **0.025 s**. **Jaanch:** 135 V × 0.9 A = 121.5 W = 45 V × 2.7 A ✅; 40 Hz × 0.025 s = 1 ✅.

9. **Given:** N_p = 660, N_s = 110, V_p = 21 V, f = 35 Hz. **Formula:** V_s = V_p × N_s ÷ N_p. **Substitution:** V_s = 21 V × 110 ÷ 660 = **3.5 V**. Frequency **35 Hz** (nahi badli), T = 1 ÷ 35 Hz = **0.0286 s** (lagbhag). N_s < N_p, to **step-down**. **Jaanch:** 3.5 V ÷ 21 V = 1 ÷ 6 = 110 ÷ 660 ✅; 35 Hz × 0.0286 s = 1.0 ✅.

10. **Given:** 1800 kW; 0.45; 0.94; 0.99 (maane hue). **Formula:** overall = product. **Substitution:** Overall = 0.45 × 0.94 × 0.99 = 0.41877, yaani lagbhag **41.9 percent**. Output = 0.41877 × 1800 kW = **753.8 kW** (lagbhag 754 kW). Kul nuksaan = 1800 kW − 753.8 kW = **1046.2 kW** (lagbhag 1046 kW). **Jaanch:** 1800 × 0.45 = 810; 810 × 0.94 = 761.4; 761.4 × 0.99 = 753.79 ✅.

11. **Given:** R = 5 kΩ = 5000 Ω. **Formula:** I = V ÷ R. **Substitution:** (a) 12 V ÷ 5000 Ω = 0.0024 A = **2.4 mA**. (b) 230 V ÷ 5000 Ω = 0.046 A = **46 mA**. **Answer:** 2.4 mA 30 mA se bahut kam (halki jhanjhanahat range); 46 mA 30 mA se upar: khatarnaak. Par **ye comparison AC vs DC ka nahi, 12 V vs 230 V ka hai**: agar 230 V DC hota to wahi 46 mA hota. **Jaanch:** 46 ÷ 30 = 1.53 guna ✅; 5000 Ω × 0.0024 A = 12 V ✅.

12. (a) **True** ✅: motor aur generator dono mein coil aur field ke beech halchal hai (reversible machine). (b) **False** ❌: transformer voltage aur current badalta hai, frequency nahi; secondary mein bhi 50 Hz. (c) **False** ❌: dono ek hi niyam ke do roop hain (Part A). (d) **False** ❌: kharab voltage aur sharir ke raaste ka resistance par depend karta hai: 600 V DC par 100 mA tak ho sakta hai. (e) **False** ❌: Example 3 mein generator ki output motor ki input se kam hai, to chalti hui chain ruk jaayegi; energy banti nahi.

13. (a) Ghoomti coil field ko kaat-ti hai, to usme current banti hai jo Lenz ke niyam se **supply ke current ka virodh** karti hai. Isliye chalti motor mein net current kam. Hold karne par coil ghoomti nahi, ye virodh nahi banta, to current bahut zyada aur motor jal sakti hai (Topic 2). (b) Tez ghumane par field jaldi badalta hai, to emf zyada (e ∝ rate), aur LED ko kuch volt chahiye, isliye zyada voltage par zyada current aur zyada roshni. **Jaanch:** e ∝ rate (Topic 3): rpm double to voltage double ✅.

---

Kartik ki team ne agle round mein sabhi card sahi kiye: har baar pehle "kya diya, kya poochha", phir haath, aur aakhir mein ulta jaanch. Chacha ne kaha, "Ab tumhare paas naksha hai, ratta nahi." Tum bhi ab ek chhote hobby motor ya bicycle dynamo ko dekh kar bata sakte ho ki wo kaun se parivaar mein aata hai. Tum ye kar sakte ho!

---

# Chapter Wrap-up: Electromagnetism

| Topic | Kya seekha | Ek line |
|---|---|---|
| 1. Current Par Force: Field Mein Taar Ka Dhakka | Field mein current wale taar par force | F ∝ B I L sin θ (shabdon mein); left-hand rule; same direction ke parallel taar attract, ulte repel; moving-coil meter aur loudspeaker |
| 2. Motor Andar Se: Coil, Commutator Aur Spin | Motor ke andar coil, commutator aur brushes | Coil ki do bhujaon par ulte force; commutator har aadhe chakkar par current ulta karta hai; jam motor mein current zyada; efficiency hamesha 100 percent se kam |
| 3. Induction Aur Lenz Ka Niyam | Induced current ki disha aur uska virodh | Fleming ka right-hand rule; induced current badlav ka virodh karti hai (energy conservation); e ∝ N × rate; eddy currents |
| 4. AC Generator Aur AC Vs DC | Ghoomti coil se AC | Ek chakkar = ek cycle; f = rpm ÷ 60 (do-pole), pole pairs ke saath badhta; 230 V effective, peak lagbhag 325 V; AC vs DC |
| 5. Transformer: Voltage Ka Badalna | Do coils aur ek closed laminated core | V_s ÷ V_p = N_s ÷ N_p; V_p I_p = V_s I_s (ideal); step-up aur step-down; efficiency aur nuksaan; RCCB ka sensing; sirf AC par kaam |
| 6. Sab Kuch Mila Kar | Teen parivaar ka naksha aur practice | Kya diya, kya poochha: right-hand thumb/grip rule (field), left hand (force), right hand (induced current), Lenz (virodh); motor aur generator ek hi machine ke do kaam; transformer frequency nahi badalta; khatra voltage se, AC ya DC ke label se nahi |

Tum ne Class 9 ke phenomena se shuru karke rules, numbers aur transformer tak ka poora safar tay kiya: ab electromagnetism tumhare liye ratta nahi, ek naksha hai. Tum ye kar sakte ho!

**Aage kya?** Class 10 Physics Chapter 10 Heat II: Phase Changes, Humidity and Dew Point: ubalti hui kettle ka paani ubalta rehta hai par aur garam kyun nahi hota, aur thande glass par paani ki boondein kyun aa jaati hain?
