# Chapter: Motion (Gati) (Part 5)

> **Class:** 9 | **Subject:** Physics
> **Ye file [motion-part4.md](motion-part4.md) se aage chalti hai** (wahan acceleration, retardation aur uniform acceleration the). Chapter ki shuruaat [motion.md](motion.md) mein hai. Axes aur points plot karna [coordinate-geometry.md](../../maths/coordinate-geometry/coordinate-geometry.md) mein dekha tha.
> **Topics covered in this file:**
> 5. Motion ke Graphs: Distance-Time aur Velocity-Time

---

# Topic 5: Motion ke Graphs: Distance-Time aur Velocity-Time

Ab tak humne motion ko **shabdon aur formulas** se samjha: distance, displacement, speed, velocity aur acceleration. Har cheez ke liye ek formula tha aur ek number nikalta tha. Lekin ek lambe safar mein speed kabhi badhti hai, kabhi ghat-ti hai, kabhi gaadi ruk jaati hai. Itni saari baatein ek saath yaad rakhna mushkil hai. Is topic mein hum motion ki **tasveer** banana seekhenge: ek **graph**, jise ek nazar mein dekh kar poori kahani padh sakte hain.

---

## Taxi ka trip history graph

Ms. Rao aur unki beti Veda airport se ghar taxi mein ja rahi thin. Ghar pahunch kar Ms. Rao ne phone par taxi app ka **trip history** screen khola. GPS ne poore safar ko record kiya tha, aur screen par ek graph bana tha. App ne safar ke ek chhote hisse (40 seconds) ko zoom karke dikhaya tha.

```
s (m)
300 :                                        O
    :                                       *
    :                                      *
    :                                     *
    :                                    *
200 :                                   *
    :                                  *
    :                                 *
    :                                *
    :                               *
100 :                   *O*********O
    :              ***** .         .
    :           ***      .         .
    :      *****         .         .
    :   ***              .         .
  0 +***-----------------.---------.------------>  t (s)
     0         10        20        30        40
```

> **Figure 5.1** – Taxi ka distance-time graph (zoom kiya hua 40 seconds ka hissa). Taxi 20 s tak halki slanting line par chali, 20 s se 30 s tak line seedhi rahi, phir 30 s se 40 s tak line bahut khadi (steep) ho gayi.

Veda ne screen dekh kar poocha, "Mummy, ye line kahin seedhi hai, kahin tirchi, kahin khadi. Iska matlab kya hai?"

Ms. Rao muskuraayin. "Dhyan se dekho. Beech mein line bilkul **flat** hai. Wahan taxi **signal par ruki** thi. Shuruaat mein line thodi **slanting** thi: taxi bheed mein **dheere** chal rahi thi. Aakhir mein line **steep** ho gayi: taxi khuli sadak par **tez** daudi."

Veda boli, "Matlab line ki dhalaan se pata chal jaata hai ki taxi kitni tez thi?"

"Bilkul. Aur number bhi nikal sakte hain. Chalo, pehle graph padhna seekhte hain, phir is screen ke ek-ek number nikalenge." Is kahani ka poora hisaab hum is topic ke end mein karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Graph** | Do quantities ke beech ke rishte ki tasveer | Time ke saath distance kaise badla |
| **Axis** | Graph ki do referencing lines: x-axis (aadi) aur y-axis (khadi) | x-axis par time, y-axis par distance |
| **Scale** | Graph paper ke 1 cm ya 1 khane ko kitni value maana | 1 cm = 10 m |
| **Distance-time graph (s-t graph)** | Time ke saath distance dikhane wala graph | Taxi ka trip history graph |
| **Velocity-time graph (v-t graph)** | Time ke saath velocity dikhane wala graph | Train ka speed graph |
| **Slope** | Line kitni khadi hai: rise ÷ run | 20 m ÷ 5 s = 4 m/s |
| **Rise aur run** | Rise = y mein badlav (upar), run = x mein badlav (side mein) | Rise 20 m, run 5 s |
| **Uniform speed** | Barabar time mein barabar distance | Har second 4 m |
| **Area under graph** | Graph aur time-axis ke beech ghira hua hissa | v-t graph ke neeche ka triangle |

---

## Part A: Graph kyun, aur graph kaise banate hain

### Graph kyun?

Agar taxi ke 40 seconds ka hisaab table mein likhein to kai number ho jayenge. Graph mein wahi saare number **ek hi line** mein dikh jaate hain: kahan taxi ruki, kahan tez chali, kahan dheeme chali. Ek tasveer hazaar numbers ke barabar hoti hai.

### Axes kaise chunte hain

Graph mein do axes hote hain, jaise coordinate geometry mein x-axis aur y-axis the (wahan points plot karna aaya tha, yahan wahi kaam aayega).

- **x-axis (aadi line): hamesha time (t).** Time apni marzi se nahi badalta, wo sirf aage badhta hai.
- **y-axis (khadi line):** doosri quantity, yaani **distance (s)** ya **velocity (v)**.

### Scale aur units

- Har axis par **barabar doori** par barabar value likhte hain. Ye hamari **scale** hai. Maan lo graph paper par 1 cm = 10 m aur 1 cm = 5 s hai. Ab agar koi point y-axis par 4.5 cm ooncha hai, to uski value 4.5 × 10 m = **45 m**.
- Scale aisi chunte hain ki poora graph paper bhar jaye, na bahut chhota, na kaagaz se bahar.
- **Har axis par naam aur unit** zaroor likhte hain: s (m), t (s), v (m/s). Bina unit ka graph adhoora hai, kyunki "20" ka matlab 20 m ho sakta hai ya 20 km.

---

## Part B: Distance-time graph (s-t graph)

### 1. Object rest mein: horizontal (flat) line

Agar object ruka hua hai, to time badhta jaata hai (x-axis par aage), lekin distance **nahi badalta**. To line seedhi **horizontal** ho jaati hai. Taxi ke signal wale hisse (Figure 5.1 mein 20 s se 30 s) mein yahi hua.

### 2. Uniform speed: seedhi slanting line

Agar taxi **barabar time mein barabar distance** chale, to s-t graph ek **seedhi slanting line** hota hai. Ek aisi line dekhte hain jo origin se shuru hoti hai.

```
s (m)
20 :...................*P
   :                  * .
16 :               ***  .
   :              *     .
12 :           ***      .
   :          *         .
 8 :       ***          .
   :      *             .
 4 :   ***              .
   :  *                 .
 0 +**------------------.-->  t (s)
    0   1   2   3   4   5
```

> **Figure 5.2** – Ek object ka s-t graph: 5 s mein 20 m. Line ke upar point P (5 s, 20 m). Dotted lines se run (5 s) aur rise (20 m) dikhte hain.

**Slope = rise ÷ run.** Rise ka matlab distance mein kitna badlav hua (y-axis par), run ka matlab time mein kitna badlav hua (x-axis par). Isliye:

> **s-t graph ka slope = distance ÷ time = speed**

Figure 5.2 mein rise = 20 m, run = 5 s, to slope = 20 m ÷ 5 s = 4 m/s. Yaani is object ki speed 4 m/s hai. Line ke kisi bhi do points lekar slope nikalo, jawab wahi aayega, kyunki speed uniform hai.

### 3. Steep line matlab zyada speed

Do lines ek hi graph par banao: jo line **zyada steep** (khadi) hai, uski speed **zyada** hai. Kyunki same time mein wo zyada distance cover kar leti hai.

```
s (m)
30 :                    B
   :                  bb.
   :                 b  .
   :                b   .
   :               b    .
20 :             bb    aA
   :            b     a .
   :          bb   aaa  .
   :         b    a     .
   :        b  aaa      .
10 :       b  a         .
   :     bbaaa          .
   :    b a             .
   :  bbaa              .
   : ba                 .
 0 +ba------------------.-->  t (s)
    0   1   2   3   4   5
```

> **Figure 5.3** – Do objects A aur B ka s-t graph ek hi scale par. 5 s mein A 20 m aur B 30 m chala. B ki line zyada steep hai.

### 4. Speed badalti rahe: curve

Agar speed barabar nahi hai (badhti ya ghat-ti hai), to s-t graph seedhi line nahi, ek **curve** banta hai. Curve jahan **zyada steep** hota hai, wahan speed **zyada** hoti hai; jahan zyada flat hota hai, wahan speed kam.

```
s (m)
16 :                    O
   :                    *
   :                   *
   :                  *
12 :                 *
   :                 *
   :                *
   :               O
 8 :              *
   :             *
   :            *
   :           *
 4 :          O
   :        **
   :       *
   :    *O*
 0 +****------------------->  t (s)
    0    1    2    3    4
```

> **Figure 5.4** – Ek taxi jo rukne ke baad dheere-dheere tez ho rahi hai: 1 s mein 1 m, 2 s mein 4 m, 3 s mein 9 m, 4 s mein 16 m. Curve shuru mein flat aur baad mein steep hota jaata hai.

### 5. Distance-time graph kabhi neeche nahi aata

Distance matlab **kul tay ki gayi doori** (Topic 2). Taxi aage chale ya peeche mude, distance sirf **badhta** hai ya (ruke to) wahi rehta hai, kabhi ghat-ta nahi. Isliye real motion ka s-t graph **kabhi neeche nahi jaata**: ya upar, ya flat.

> **Chhoti si baat:** agar hum distance ki jagah **kisi reference point se displacement** (position) ka graph banayein, to wo neeche aa sakta hai. Jaise object wapas laut raha ho to wo reference point ke paas aata jaata hai. Ye "displacement-time graph" kehlata hai. Abhi hum sirf distance-time graph padh rahe hain.

---

## Part C: Worked examples (distance-time graph)

**Example 1: Straight line se speed padhna (Figure 5.2)**

Figure 5.2 ke hisaab se object 5 s mein 20 m chala.

- Rise = 20 m, run = 5 s
- Speed = slope = rise ÷ run = 20 m ÷ 5 s = **4 m/s**

**Jaanch:** 4 m/s × 5 s = 20 m ✅

---

**Example 2: Ek graph par do lines ki tulna (Figure 5.3)**

Figure 5.3 mein A aur B ki speed nikaalo, aur batao 5 s ke baad dono mein kitna fasla hai.

- A: speed = 20 m ÷ 5 s = **4 m/s**
- B: speed = 30 m ÷ 5 s = **6 m/s**
- B ki line zyada steep hai aur 6 m/s > 4 m/s, yaani B tez hai.
- 5 s ke baad fasla = 30 m − 20 m = **10 m**

**Jaanch:** B ka extra distance = (6 m/s − 4 m/s) × 5 s = 2 m/s × 5 s = 10 m ✅

---

**Example 3: Kai stages wala graph, beech mein rukna (Figure 5.5)**

Ek cyclist ka s-t graph hai: 0 se 10 s mein 40 m, 10 s se 15 s tak ruka, phir 15 s se 25 s tak 20 m aur chala. Har stage ki speed aur poori yatra ki average speed nikaalo.

```
s (m)
60 :                         O
   :                      ***.
   :                     *   .
   :                  ***    .
   :                 *       .
40 :          O****O*        .
   :         *.    .         .
   :        * .    .         .
   :       *  .    .         .
   :      *   .    .         .
20 :     *    .    .         .
   :    *     .    .         .
   :   *      .    .         .
   :  *       .    .         .
   : *        .    .         .
 0 +*---------.----.---------.-->  t (s)
    0    5    10   15   20   25
```

> **Figure 5.5** – Cyclist ka s-t graph: 0 se 10 s mein 0 se 40 m; 10 s se 15 s flat (ruka); 15 s se 25 s mein 40 m se 60 m.

- Stage 1 (0 s se 10 s): distance = 40 m − 0 m = 40 m, time = 10 s. Speed = 40 m ÷ 10 s = **4 m/s**
- Stage 2 (10 s se 15 s): distance = 40 m − 40 m = 0 m, time = 5 s. Speed = 0 m ÷ 5 s = **0 m/s** (flat line, rest)
- Stage 3 (15 s se 25 s): distance = 60 m − 40 m = 20 m, time = 10 s. Speed = 20 m ÷ 10 s = **2 m/s**
- Kul distance = 60 m, kul time = 25 s
- Average speed = kul distance ÷ kul time = 60 m ÷ 25 s = **2.4 m/s**

**Jaanch:** Teeno stages ka distance 40 m + 0 m + 20 m = 60 m ✅. Kul time 10 s + 5 s + 10 s = 25 s ✅. Dhyan do: speeds ka seedha average (4 + 0 + 2) ÷ 3 = 2 m/s galat hota, kyunki stages ka time barabar nahi hai. Sahi average 2.4 m/s hi hai (2.4 m/s × 25 s = 60 m ✅).

---

**Example 4: Curve se average speed (Figure 5.4)**

Figure 5.4 mein taxi ka distance har second par 0 m, 1 m, 4 m, 9 m, 16 m hai. Pehle 2 s, aakhri 2 s aur poore 4 s ki average speed nikaalo.

- Pehle 2 s (0 s se 2 s): distance = 4 m − 0 m = 4 m, to speed = 4 m ÷ 2 s = **2 m/s**
- Aakhri 2 s (2 s se 4 s): distance = 16 m − 4 m = 12 m, to speed = 12 m ÷ 2 s = **6 m/s**
- Poore 4 s: 16 m ÷ 4 s = **4 m/s**

Aakhri hissa zyada steep hai, aur uski speed (6 m/s) bhi zyada nikli, jaisa curve ne bataya tha.

**Jaanch:** 2 m/s × 2 s + 6 m/s × 2 s = 4 m + 12 m = 16 m ✅

---

## Part D: Velocity-time graph (v-t graph)

Ab y-axis par **velocity (v)** rakhte hain aur x-axis par time (t). Dhyan do: ab line ka matlab bilkul alag hai (Part B se mat milana).

### 1. Uniform velocity: horizontal line

Agar velocity barabar rahe (jaise train 30 m/s par seedhi chal rahi hai), to v-t graph ek **horizontal line** hoti hai (Figure 5.8 mein A se B tak). Velocity badal nahi rahi, yaani **acceleration = 0**.

### 2. Uniform acceleration: seedhi slanting line

Agar velocity **har second barabar badhe**, to v-t graph ek seedhi slanting line hota hai.

```
v (m/s)
20 :                   *P
   :                  *..
16 :               ***...
   :              *......
12 :           ***.......
   :          *..........
 8 :       ***...........
   :      *..............
 4 :   ***...............
   :  *..................
 0 +**------------------.-->  t (s)
    0   1   2   3   4   5
```

> **Figure 5.6** – Rest se shuru hokar velocity 5 s mein 0 se 20 m/s ho gayi. Line ke neeche ka triangle (dotted bhaag) displacement dikhata hai.

**v-t graph ka slope = velocity ka badlav ÷ time = acceleration.**

Figure 5.6 mein rise = 20 m/s − 0 m/s = 20 m/s, run = 5 s, to acceleration = 20 m/s ÷ 5 s = 4 m/s². (Topic 4 ka formula a = (v − u) ÷ t yahi hai: line ka slope.)

### 3. Retardation: neeche jaati line

Agar velocity ghat rahi hai (brake lag raha hai), to v-t line **neeche** aati hai. Slope negative nikalta hai, aur aise ghat-te hue acceleration ko hum **retardation** kehte hain (Topic 4). Figure 5.8 mein B se C tak line neeche aa rahi hai.

### 4. Acceleration barabar na ho: curve

Agar velocity kabhi tezi se, kabhi dheere badhe, to v-t graph ek **curve** banta hai. Jahan curve zyada steep, wahan us waqt acceleration zyada. (Hum yahan sirf seedhi lines ke number nikalenge.)

### 5. Area under v-t graph = displacement

Ye v-t graph ka sabse kaam ka raaz hai. Line aur time-axis ke beech jo hissa ghira hota hai, uska **area** us time mein hua **displacement** (seedhi sadak par distance bhi wahi) hota hai.

Kyun? Seedhi si baat: agar velocity barabar v ho aur time t ho, to distance = v × t. Graph par wahi to ek **rectangle** hai: chaudai t, unchai v, area = t × v. Is liye "area = displacement" apne aap samajh aata hai. Hum area **shapes** se nikalenge:

| Shape | Area |
|---|---|
| Rectangle | chaudai × unchai = v × t |
| Triangle | ½ × base × height |
| Trapezium | (dono parallel sides ka average) × width |

Units ka dhyan: area = (m/s) × s = m. Matlab area ka unit apne aap **metre** nikalta hai, jo displacement ka unit hai. Ye ek achhi jaanch bhi hai.

> **Aage ki class mein:** jab v-t graph ek curve ho, tab area nikalne ka tareeka alag hota hai. Abhi hum sirf seedhi lines wale shapes lete hain. Aur agar velocity negative ho (object ulta chale), to area axis ke neeche aata hai: ye bhi aage ki class mein.

---

## Part E: Worked examples (velocity-time graph)

**Example 5: Acceleration aur displacement (triangle) (Figure 5.6)**

Figure 5.6 mein rest se shuru hokar 5 s mein velocity 20 m/s ho gayi. Acceleration aur displacement nikaalo.

- Acceleration = slope = (20 m/s − 0 m/s) ÷ 5 s = **4 m/s²**
- Displacement = triangle ka area = ½ × base × height = ½ × 5 s × 20 m/s = **50 m**

**Jaanch:** Average velocity = (0 + 20) ÷ 2 = 10 m/s, aur 10 m/s × 5 s = 50 m ✅

---

**Example 6: Trapezium se displacement (Figure 5.7)**

Ek car ki velocity 8 s mein 10 m/s se 30 m/s ho gayi (uniform acceleration). Acceleration aur displacement nikaalo.

```
v (m/s)
30 :                       *Q
   :                    ***..
   :                 ***.....
   :              ***........
20 :           ***...........
   :        ***..............
   :     ***.................
   :  ***....................
10 :P*.......................
   :.........................
   :.........................
   :.........................
 0 +------------------------.-->  t (s)
    0  1  2  3  4  5  6  7  8
```

> **Figure 5.7** – Velocity 8 s mein 10 m/s se 30 m/s (point P se Q). Neeche ka dotted hissa ek trapezium hai: parallel sides 10 m/s aur 30 m/s, width 8 s.

- Acceleration = (30 m/s − 10 m/s) ÷ 8 s = 20 m/s ÷ 8 s = **2.5 m/s²**
- Trapezium ka area = (10 m/s + 30 m/s) ÷ 2 × 8 s = 20 m/s × 8 s = **160 m**

**Jaanch:** Trapezium ko do hisson mein todo. Rectangle: 10 m/s × 8 s = 80 m. Upar ka triangle: ½ × 8 s × (30 − 10) m/s = ½ × 8 s × 20 m/s = 80 m. Total = 80 m + 80 m = 160 m ✅

---

**Example 7: Train ka poora safar: tezi, barabar chaal, brake (Figure 5.8)**

Ek train station se chalti hai. Pehle 20 s mein 0 se 30 m/s tak tez hoti hai, phir 40 s tak 30 m/s par chalti hai, phir 20 s mein brake laga kar ruk jaati hai. Har hisse ka distance, kul distance aur average speed nikaalo.

```
v (m/s)
30 :          A*******************B
   :         *.....................*
   :        *.......................*
   :        *........................*
20 :       *.........................*
   :      *...........................*
   :     *.............................*
   :    *...............................*
10 :   *.................................*
   :   *..................................*
   :  *...................................*
   : *.....................................*
 0 +*---------.-------------------.---------C-->  t (s)
    0         20        40        60        80
```

> **Figure 5.8** – Train ka v-t graph: 0 se 20 s (point A tak) tezi, 20 s se 60 s (A se B) barabar 30 m/s, 60 s se 80 s (B se C) brake lagakar ruk gayi.

- Hissa 1 (0 s se 20 s): triangle. Distance = ½ × 20 s × 30 m/s = **300 m**. Acceleration = 30 m/s ÷ 20 s = 1.5 m/s².
- Hissa 2 (20 s se 60 s): rectangle. Time = 60 s − 20 s = 40 s. Distance = 30 m/s × 40 s = **1200 m**. Acceleration = 0 (horizontal line).
- Hissa 3 (60 s se 80 s): triangle. Time = 20 s. Distance = ½ × 20 s × 30 m/s = **300 m**. Slope = (0 − 30) m/s ÷ 20 s = −1.5 m/s², yaani retardation 1.5 m/s².
- Kul distance = 300 m + 1200 m + 300 m = **1800 m**
- Kul time = 80 s
- Average speed = 1800 m ÷ 80 s = **22.5 m/s**

**Jaanch:** Poore graph ko ek trapezium maan lo: parallel sides 80 s (neeche) aur 40 s (upar), height 30 m/s. Area = (80 + 40) ÷ 2 × 30 = 60 × 30 = 1800 m ✅. Aur 22.5 m/s × 80 s = 1800 m ✅. Dhyan do: average speed (22.5 m/s) max speed 30 m/s se kam hai, kyunki shuru aur end mein train dheemi thi.

---

## Part F: Taxi ki kahani ka hisaab

Wapas Ms. Rao aur Veda ke trip history screen par (Figure 5.1). Veda ne screen se kuch readings ek table mein likhin:

| Time t (s) | 0 | 10 | 20 | 30 | 40 |
|---|---|---|---|---|---|
| Distance s (m) | 0 | 50 | 100 | 100 | 300 |

**Example 8:** Har stage ki speed aur poore 40 s ki average speed nikaalo.

- 0 s se 20 s: distance = 100 m − 0 m = 100 m, time = 20 s. Speed = 100 m ÷ 20 s = **5 m/s**. (Slanting line: taxi bheed mein dheere.) Beech ki reading bhi mel khati hai: 10 s par 5 m/s × 10 s = 50 m.
- 20 s se 30 s: distance = 100 m − 100 m = 0 m, time = 10 s. Speed = **0 m/s**. (Flat line: taxi signal par ruki.)
- 30 s se 40 s: distance = 300 m − 100 m = 200 m, time = 10 s. Speed = 200 m ÷ 10 s = **20 m/s**. (Steep line: taxi khuli sadak par tez.)
- Poore safar mein: 300 m ÷ 40 s = **7.5 m/s**

Veda ne kaha, "Mummy, 20 m/s to bahut tez lagta hai!" Ms. Rao ne kaha, "1 m/s = 3.6 km/h hota hai. To 5 m/s = 18 km/h (dheeme), 20 m/s = 72 km/h (tez), aur average 7.5 m/s = 27 km/h."

**Jaanch:** 5 m/s × 20 s + 0 m/s × 10 s + 20 m/s × 10 s = 100 m + 0 m + 200 m = 300 m ✅

Aur ek mazedaar baat: agar Veda isi taxi ka **v-t graph** banati, to wo teen horizontal pieces ka hota: 5 m/s, phir 0 m/s, phir 20 m/s. (Asli taxi ki speed turant nahi badalti, isliye real graph ke kone thode gol hote hain.)

---

## Part G: Ek nazar mein sab kuch

| Motion ka type | s-t graph ka shape | v-t graph ka shape |
|---|---|---|
| Rest (ruka hua) | Horizontal line | Velocity 0, yaani time-axis par hi line |
| Uniform velocity (barabar chaal) | Seedhi slanting line (slope = speed) | Horizontal line (acceleration = 0) |
| Uniform acceleration | Curve jo steep hota jaata hai | Seedhi slanting line upar (slope = acceleration) |
| Retardation (uniform) | Curve jo flat hota jaata hai | Seedhi slanting line neeche |
| Non-uniform acceleration | Aisa curve jo kabhi tezi se, kabhi dheere steep hota hai | Curve |

Do alag-alag slope yaad rakho:

- **s-t graph ka slope = speed (velocity)**
- **v-t graph ka slope = acceleration**
- **v-t graph ka area = displacement**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Horizontal s-t line ko "constant speed" samajhna**

s-t graph mein horizontal line ka matlab hai distance badal hi nahi raha, yaani object **ruka hua** hai (speed 0). Constant speed ki line seedhi **slanting** hoti hai. (Lekin v-t graph mein horizontal line ka matlab hai constant velocity. Isliye pehle dekho kaun sa graph hai.)

**Galti 2: s-t slope aur v-t slope ko mila dena**

s-t ka slope speed deta hai (unit m/s), v-t ka slope acceleration (unit m/s²). Example: Figure 5.2 mein slope 4 m/s hai (speed); Figure 5.6 mein slope 4 m/s² hai (acceleration). Dono mein "4" hai, par matlab alag. Unit se pehchano.

**Galti 3: Axes par unit na likhna**

"20" akela matlab nahi rakhta. Hamesha s (m), t (s), v (m/s) likho.

**Galti 4: s-t graph ke neeche ka area nikalna**

Area under v-t graph = displacement. Lekin s-t graph ke neeche ke area ka koi matlab nahi hota: unit m × s banta hai, jo kisi useful quantity ka nahi hai. Area sirf v-t graph mein dekhte hain.

**Galti 5: Neeche aur upar ke areas ko galat jodna**

Humne abhi sirf wo graphs liye jahan velocity positive rahi (line time-axis ke upar). Agar velocity negative ho, to area axis ke **neeche** aata hai; use kaise jodna hai ye **aage ki class mein** seekhenge. Abhi ke sawalon mein har area ko seedha jodo.

**Galti 6: Galat scale padhna**

Agar graph paper par 1 khana = 5 m hai aur aap use 1 m maan loge, to har jawab galat. Pehle dekho ki har axis ka ek khana kitna hai. Example: Figure 5.5 mein y-axis par 1 row = 4 m, aur x-axis par 1 column = 1 s.

---

## Quick Recap

- Graph motion ki tasveer hai. **x-axis par time**, y-axis par distance ya velocity. Har axis par naam, unit aur barabar scale likho.
- **s-t graph:** horizontal line = rest; seedhi slanting line = uniform speed; curve = badalti speed. **Slope = rise ÷ run = speed.** Steeper line = zyada speed.
- Real motion ka distance-time graph kabhi neeche nahi jaata. (Displacement-time graph neeche aa sakta hai.)
- **v-t graph:** horizontal line = uniform velocity (a = 0); seedhi slanting line = uniform acceleration; neeche jaati line = retardation; curve = badalta acceleration. **Slope = acceleration.**
- **v-t graph ka area = displacement.** Rectangle = v × t; triangle = ½ × base × height; trapezium = (dono parallel sides ka average) × width.
- **Kahani ka jawab:** taxi 0 s se 20 s mein 5 m/s, 20 s se 30 s mein ruki (0 m/s), 30 s se 40 s mein 20 m/s; average speed = 300 m ÷ 40 s = 7.5 m/s.

---

## Practice Questions

1. On a graph paper the scale on the y-axis is 1 cm = 10 m. (a) A point is 3.5 cm above the time axis. What distance does it show? (b) On the same graph, a straight line passes through the origin and the point (8 s, 24 m). Find the speed of the object.

2. Two objects P and Q start together. In 6 s, P moves 30 m and Q moves 48 m, both with uniform speed. Find the speed of each. On a distance-time graph, whose line is steeper? How far apart are they after 6 s?

3. A distance-time graph has these readings: at t = 0 s, s = 0 m; at t = 6 s, s = 18 m; at t = 10 s, s = 18 m; at t = 16 s, s = 36 m. Find the speed in each stage and the average speed for the whole 16 s. Describe the middle stage in words.

4. In a velocity-time graph, a scooter starts from rest and its velocity becomes 12 m/s in 4 s (straight line). Find its acceleration and the distance covered in 4 s.

5. A velocity-time graph is a straight line going from 8 m/s at t = 0 s to 20 m/s at t = 6 s. Find the acceleration and the displacement in 6 s (use the area of a trapezium).

6. A cyclist moves at a steady 6 m/s for 10 s. Draw (in words) the shape of her v-t graph. Find the area under it and say what it means. What is her acceleration?

7. A car moving at 24 m/s applies brakes and stops in 8 s (straight line on v-t graph). Find its retardation and the distance it travels while stopping.

8. A metro train speeds up from rest to 16 m/s in 8 s, runs at 16 m/s for 20 s, then slows down to rest in 4 s. Find the distance of each part, the total distance, and the average speed.

9. State True or False and correct the false ones: (a) A horizontal line on a distance-time graph means constant speed. (b) The slope of a velocity-time graph gives acceleration. (c) A steeper line on a distance-time graph means a larger speed. (d) The area under a distance-time graph gives displacement. (e) The distance-time graph of a moving object can go downward.

10. Veda says, "On a distance-time graph the taxi's line can never go down, but on a velocity-time graph it can." Is she right? Explain with one example each.

### Answers

1. (a) Distance = 3.5 cm × 10 m/cm = **35 m**.
   (b) Speed = rise ÷ run = 24 m ÷ 8 s = **3 m/s**.
   Jaanch: 3 m/s × 8 s = 24 m ✅

2. Speed of P = 30 m ÷ 6 s = **5 m/s**. Speed of Q = 48 m ÷ 6 s = **8 m/s**. **Q** ki line zyada steep hai (8 m/s > 5 m/s). Fasla = 48 m − 30 m = **18 m**.
   Jaanch: (8 m/s − 5 m/s) × 6 s = 3 m/s × 6 s = 18 m ✅

3. 0 s se 6 s: 18 m ÷ 6 s = **3 m/s**. 6 s se 10 s: (18 − 18) m ÷ 4 s = **0 m/s**. 10 s se 16 s: (36 − 18) m ÷ 6 s = 18 m ÷ 6 s = **3 m/s**. Average speed = 36 m ÷ 16 s = **2.25 m/s**. Beech wale stage mein line horizontal hai: object **ruka hua** hai.
   Jaanch: 2.25 m/s × 16 s = 36 m ✅

4. Acceleration = (12 m/s − 0 m/s) ÷ 4 s = **3 m/s²**. Distance = ½ × 4 s × 12 m/s = **24 m**.
   Jaanch: average velocity 6 m/s × 4 s = 24 m ✅

5. Acceleration = (20 − 8) m/s ÷ 6 s = 12 m/s ÷ 6 s = **2 m/s²**. Displacement = (8 + 20) ÷ 2 m/s × 6 s = 14 m/s × 6 s = **84 m**.
   Jaanch: rectangle 8 m/s × 6 s = 48 m, triangle ½ × 6 s × 12 m/s = 36 m, total 84 m ✅

6. Graph ek **horizontal line** hai, 6 m/s ki unchai par, 0 se 10 s tak. Area (rectangle) = 6 m/s × 10 s = **60 m**: ye uska displacement (distance) hai. Acceleration = **0** (horizontal line ka slope zero).
   Jaanch: 6 m/s × 10 s = 60 m ✅

7. Slope = (0 − 24) m/s ÷ 8 s = −3 m/s², yaani retardation = **3 m/s²**. Distance = ½ × 8 s × 24 m/s = **96 m**.
   Jaanch: average velocity 12 m/s × 8 s = 96 m ✅

8. Part 1: ½ × 8 s × 16 m/s = **64 m**. Part 2: 16 m/s × 20 s = **320 m**. Part 3: ½ × 4 s × 16 m/s = **32 m**. Total = 64 + 320 + 32 = **416 m**. Total time = 8 + 20 + 4 = 32 s. Average speed = 416 m ÷ 32 s = **13 m/s**.
   Jaanch: 13 m/s × 32 s = 416 m ✅

9. (a) **False** ❌. Horizontal s-t line means the object is at rest (distance not changing). Constant speed is a straight slanting line.
   (b) **True** ✅.
   (c) **True** ✅.
   (d) **False** ❌. The area under a **velocity-time** graph gives displacement; the area under an s-t graph has no such meaning.
   (e) **False** ❌. Distance never decreases, so the s-t graph does not go down.

10. Haan, Veda sahi hai. Distance kabhi ghat-ta nahi, isliye s-t line sirf upar jaati hai ya flat rehti hai: jaise taxi signal par ruki to flat, chali to upar. Lekin velocity ghat sakti hai: jab taxi brake lagati hai, to v-t line neeche aati hai (jaise 20 m/s se 0 m/s). Isse retardation dikhta hai, aur taxi tab bhi aage hi badh rahi hoti hai, isliye uska s-t graph tab bhi upar jaata hai.

---

Ab aap kisi bhi s-t ya v-t graph ko dekh kar bata sakte ho ki gaadi ruki thi, tez thi ya dheemi, aur number bhi nikal sakte ho. Agli baar kisi app ya screen par motion ka graph dikhe to pehle axes ke naam aur units padho, phir line ka shape.

**Aage kya?** Veda ne ek aur sawal poochha: "Mummy, graph se jab har cheez nikal rahi hai, to kya hum bina graph banaye, sirf formula se bhi kisi bhi time par speed aur distance nikaal sakte hain?" Ms. Rao ne hanskar kaha, "Haan, **graph se hi teen khaas formulas bhi nikal sakte hain**." Wo teen formulas kya hain aur kaise banenge: ye hum Topic 6 mein dekhenge.
