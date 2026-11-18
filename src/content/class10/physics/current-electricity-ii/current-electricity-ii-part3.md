# Chapter: Current Electricity II: Cells, Networks and Real Components (Part 3)

> **Class:** 10 | **Subject:** Physics
> **Ye file [current-electricity-ii-part2.md](current-electricity-ii-part2.md) se aage chalti hai** (wahan cells ke group ko ek bade cell ki tarah dekha tha: kitna E, kitna r). Chapter ki shuruaat: [current-electricity-ii.md](current-electricity-ii.md). Recall ke liye: series, parallel aur reduction [electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md), ammeter aur voltmeter ki jagah [electricity-part3.md](../../../class9/physics/electricity/electricity-part3.md).
> **Topics covered in this file:**
> 3. Mushkil Circuits Aasaani Se: Symmetry, Bridge Aur Divider

---

# Topic 3: Mushkil Circuits Aasaani Se: Symmetry, Bridge Aur Divider

Topic 1 aur Topic 2 mein humne cell ke andar jhaanka (E aur r) aur cells ko jodna seekha. Ab hum cell ko ek bharosemand source maan kar **baahar ke network** ko dekhte hain. Class 9 mein series aur parallel ko ek-ek karke "reduce" karna aa gaya, par kuch circuits aise hote hain jinmein na koi resistor saaf series mein dikhta hai, na parallel mein. Aaj teen nayi aankhein milengi: **symmetry** (circuit ka mirror), **equal potential points** (jahan current ka kaam hi nahi) aur **divider** (voltage ka hissa nikaalna), saath mein ye bhi ki asli meters circuit ko kitna hilati hain.

---

## School-fair ka lighting board

Rohini ke school mein "Roshni Mela" lag raha tha. Uske Chacha, Mr. Jathar, ko circuits ka shauk tha, to unhone Rohini ke stall ke liye ek chhota lighting board banaya: paanch ek jaisi chhoti bulbs ek **heera (diamond)** ki shakl mein, aur beech mein ek bulb khadi lagi hui. Sab kuch cells ke ek box se chalta tha: mains ka koi taar nahi, sirf battery. (Aise board hamesha bade ke saath banao aur sirf battery se chalao.)

Figure 3.1 mein board ka circuit hai. Bulbs ko R₁ se R₅ naam diya hai, aur chaar jodon ke naam A, B, C, D hain.

```
           R1          B      R2
      +---/\/\/--------+-----/\/\/------+
      :                :                :
    A :              [R5]               : C
      :                :                :
      +---/\/\/--------+-----/\/\/------+
      :    R3          D      R4        :
      :                                 :
      +---------(+) ─┤├─ (-)------------+
                     18 V
```

> **Figure 3.1** – Lighting board: bulbs R₁ (A se B), R₂ (B se C), R₃ (A se D), R₄ (D se C) heera banate hain, aur R₅ beech mein B aur D ko jodti hai. Battery A aur C ke beech hai, uska + sira A ki taraf. Do taar jahan milte hain wahan +, aur baaki taar - ya : se dikhaye hain.

Board jalaya to Rohini ko ek ajeeb baat dikhi: **chaaron kinaare wali bulbs barabar chamak rahi thi, par beech wali R₅ bilkul bujhi hui thi.** "Chacha, ye bulb kharab hai kya?" Chacha ne use nikal kar, board ke bahar, usi battery se akele jodkar jalaya: wo bilkul theek thi, poori chamki. Wapas board mein lagayi, phir bujhi rahi!

Mela ke teesre din ek kinaare wali bulb (R₁) fuse ho gayi. Ab Rohini ne dekha ki R₅, jo kal tak bujhi thi, halka sa chamakne lagi, aur baaki bulbs ki roshni bhi pehle jaisi nahi rahi. "Chacha, ek bulb gayi to kaun-kaun si bulbs bujhengi? Aur jo bujhi thi wo kaise jalne lagi?" Chacha bole, "Sawal sahi hai. Iska jawab ginti se nahi, **circuit ko samajh kar** milega. Aaj ye teeno raaz kholte hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Node** | Circuit ka wo point (ya taar ka poora tukda) jahan do ya zyada resistors ke sire milte hain. Ek hi taar se jude saare points ek hi node hain | Figure 3.1 mein A, B, C, D |
| **Symmetry (circuit ki)** | Circuit ka aisa hona ki ek taraf ka hissa doosri taraf ka mirror image ho: usi jagah wahi resistors, usi tarah jude | Figure 3.1: A aur C ko jodne wali line ke upar aur neeche ka hissa ek jaisa |
| **Equal potential points** | Do points jinka potential barabar ho, yaani unke beech potential difference zero ho | Figure 3.1 mein B aur D |
| **Bridge circuit** | Chaar resistors ka heera, jiske beech ke do points ek paanchvein resistor se jude hon | Figure 3.1 ka poora board |
| **Balanced bridge** | Aisa bridge jismein beech wale resistor mein current zero ho, kyunki uske dono sire equal potential par hain | Figure 3.5 |
| **Ladder network** | Series aur parallel resistors ka baar-baar dohraya hua pattern, jaise seedhi ka dandaa aur rungs | Figure 3.6 |
| **Potential divider** | Supply ke dono sire par series mein jude do resistors, jisme se ek resistor ke dono sire se supply ke voltage ka ek hissa nikaala jaata hai | Figure 3.7 |
| **Output voltage V_out** | Divider ke neeche wale resistor R₂ par aane wala voltage | 5 V se 1.63 V nikalna |
| **Loaded divider** | Divider ke output ke saath jab koi resistor (jise load kehte hain) jod dete hain aur wo current kheenchta hai | Figure 3.8 |
| **Meter ki apni resistance** | Asli ammeter aur voltmeter bhi resistance rakhte hain. Ideal meter wo hota hai jiski resistance ammeter ke liye zero aur voltmeter ke liye bahut bahut zyada maani jaye | Voltmeter lagbhag 10 MΩ ka, ammeter lagbhag 0.5 Ω ka (Example 7 aur 8 ke maane hue maan) |

---

## Class 9 ka recall

Class 9 ([electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md)) se char cheezein: **series** mein R = R₁ + R₂ + ... aur current same; **parallel** mein 1/R = 1/R₁ + 1/R₂ + ... aur voltage same; **mixed** circuit ko parallel jodi ko ek resistor bana kar, phir series jod kar hal karte hain (Example 8); aur **voltage division**: series mein jis resistor ki resistance zyada, voltage utna zyada (Example 13). Ammeter hamesha series mein, voltmeter hamesha parallel mein ([electricity-part3.md](../../../class9/physics/electricity/electricity-part3.md)). Aaj ye sab kaam aayega, par ab aise circuits aayenge jinmein "kaun series, kaun parallel" ek nazar mein dikhta hi nahi. Pehle uska tareeka.

---

## Part A: Reduction ka chart aur circuit ko "redraw" karna

Ek mushkil circuit mein sabse badi galti ye hoti hai ki hum **taar ke raste ki shakl** dekhte hain, jabki asli cheez hai **kaun kisse jaa kar judta hai**. Bas ye yaad rakho: ek taar ke saath jude saare points ek hi node hain, chahe taar kitna bhi mudta ho. Isliye pehle **nodes ko naam do**, phir har resistor ko do naam wali ek line bana do.

| Kadam | Kya dekho | Kya karo |
|---|---|---|
| 1 | Taar ke har alag tukde | Use ek letter do (A, B, C ...). Supply ke dono sire ka alag letter |
| 2 | Har resistor ke dono sire kin letters par hain | Us resistor ko "A se B" jaisa likh lo |
| 3 | Do resistors jinke dono sire same letters par hain | Ye **parallel** hain: ek resistor mein badlo |
| 4 | Do resistors jinke beech ka letter kisi aur resistor se nahi judta | Ye **series** hain: jodkar ek karo |
| 5 | Aisa point jo symmetry ya barabar ratio se equal potential par ho | Wahan ka resistor hata do ya uske dono sire ek kar do (Part B, C) |
| 6 | Dobara draw karo | Jab tak ek akeli R na bache, kadam 3 se 5 dohrao |

**Example 1 (redraw: square mein battery do paas-paas ke kone par):** Chaar ek jaise 12 Ω ke resistors ek square ABCD mein jude hain. 27 V ki battery A aur B ke beech hai (Figure 3.2). Kul resistance, kul current aur har resistor ka current?

```
                  27 V
      +------(+) ─┤├─ (-)---------+
      :          12 Ω             :
    A +----------/\/\/------------+ B
      :                           :
   [12 Ω]                      [12 Ω]
      :                           :
    D +----------/\/\/------------+ C
                 12 Ω
```

> **Figure 3.2** – Vargakar ABCD mein 12 Ω ke chaar resistors, battery paas ke kone A aur B par. Vertical resistors [ ] se aur horizontal /\/\/ se dikhaye hain. Battery ka + sira A ki taraf.

Is shakl mein parallel ya series dikhna mushkil hai. Nodes do hi hain jahan supply judi hai: A aur B. Resistor "A se B" seedha hai. Baaki teen, A se D, D se C, C se B, ek ke baad ek aate hain aur aakhir mein B par pahunchte hain. Redraw karte hain (Figure 3.3):

```

                            12 Ω
    +-----------------------/\/\/-----------------------+
    :                                                   :
  A :                                                   : B
    :     12 Ω       D      12 Ω       C      12 Ω      :
    +-----/\/\/-------------/\/\/-------------/\/\/-----+
    :                                                   :
    :                                                   :
    +-----------------(+) ─┤├─ (-)----------------------+
                          27 V
```

> **Figure 3.3** – Wahi circuit dobara draw kiya: A aur B ke beech do raaste hain. Upar wala sirf ek 12 Ω hai, neeche wala teen 12 Ω ka series chain hai (A se D, D se C, C se B).

- **Given:** R = 12 Ω (chaaron), V = 27 V (A aur B ke beech)
- **Find:** R_eq, kul I, har resistor ka I
- **Formula:** series R = R₁ + R₂ + R₃, parallel R = R_a R_b ÷ (R_a + R_b), I = V ÷ R
- **Substitution:** Neeche wala raasta = 12 Ω + 12 Ω + 12 Ω = 36 Ω. Upar wala = 12 Ω. R_eq = (12 Ω × 36 Ω) ÷ (12 Ω + 36 Ω) = 432 Ω² ÷ 48 Ω = 9 Ω. Kul I = 27 V ÷ 9 Ω = 3 A. Upar ke 12 Ω mein I = 27 V ÷ 12 Ω = 2.25 A. Neeche chain mein (teeno resistors mein same) I = 27 V ÷ 36 Ω = 0.75 A.
- **Answer:** R_eq = **9 Ω**, kul I = **3 A**, seedhe 12 Ω mein **2.25 A**, baaki teeno mein **0.75 A** har ek mein.

**Jaanch:** 2.25 A + 0.75 A = 3 A ✅. R_eq = 9 Ω sabse chhote raaste (12 Ω) se chhoti hai ✅ (parallel mein hamesha). Units: V ÷ Ω = A ✅.

---

## Part B: Symmetry: mirror ka jaadu

Ab Figure 3.1 par wapas. Supply A aur C par hai. Ek seedhi line socho jo A se C tak jaati hai. Is line ke **upar** B hai aur **neeche** D hai. Agar R₁ = R₃ (A se B aur A se D) aur R₂ = R₄ (B se C aur D se C) hon, to circuit upar-neeche **bilkul mirror** hai.

**Ab mirror ka argument.** Maan lo R₅ mein current B se D ki taraf jaata. Circuit ko line AC ke saath palat do (upar wala neeche, neeche wala upar): circuit wahi ka wahi dikhta hai, par ab current D se B ki taraf jaata dikhega. Ek hi circuit mein current B se D bhi aur D se B bhi: ye ho nahi sakta. Isliye R₅ mein **current zero** hai, aur B aur D **equal potential** par hain. Hamne ek bhi hisaab nahi kiya!

**Example 2 (symmetric bulbs, R₅ ki jagah par kya?):** Figure 3.1 ke board mein har bulb ek simple resistor model se 9 Ω ki maani gayi hai aur supply 18 V hai. Kul resistance, kul current, har bulb ka current aur B ka potential (A ko 18 V aur C ko 0 V maan kar)?

- **Given:** R₁ = R₂ = R₃ = R₄ = R₅ = 9 Ω, V = 18 V
- **Find:** R_eq, I, har bulb ka I, V_B
- **Formula:** series R₁ + R₂, parallel jodi, I = V ÷ R, V_B = V_A − I R₁
- **Substitution:** Symmetry se I₅ = 0, to R₅ hata sakte hain. Do raaste bache: A-B-C (9 Ω + 9 Ω = 18 Ω) aur A-D-C (18 Ω), jo parallel hain: R_eq = (18 Ω × 18 Ω) ÷ (18 Ω + 18 Ω) = 9 Ω. I = 18 V ÷ 9 Ω = 2 A. Dono raaste barabar hain, to har raaste mein 2 A ÷ 2 = 1 A. V_B = 18 V − (1 A × 9 Ω) = 9 V.
- **Answer:** R_eq = **9 Ω**, I = **2 A**, R₁ se R₄ mein **1 A** har ek, R₅ mein **0 A** (bujhi hui, Rohini ki baat sahi), V_B = V_D = **9 V**.

**Jaanch:** Power in = 18 V × 2 A = 36 W. Power out = 4 bulbs × (1 A)² × 9 Ω = 36 W ✅. V_D bhi A se 1 A × 9 Ω neeche = 9 V = V_B ✅ (isiliye R₅ ke dono sire par 0 V ka antar). **Dhyan:** mirror ka argument tab bhi chalta hai jab R₁ = R₃ aur R₂ = R₄ ho par R₁ ≠ R₂. Aur R₅ ki value kuch bhi ho (9 Ω, 40 Ω, ya zero resistance ka taar), uski current zero hi rehti hai.

**Example 3 (R₁ fuse ho gayi: sawal ka dusra hissa):** Wahi board (9 Ω ki bulbs, 18 V) par ab R₁ (A se B) toot gayi (Figure 3.4). Kul resistance, kul current, har bachi hui bulb ka current aur power? Kaun si bulb bujhi, kaun jalne lagi?

```
          R1 (toota)   B      R2
      +--            --+-----/\/\/------+
      :                :                :
    A :              [R5]               : C
      :                :                :
      +---/\/\/--------+-----/\/\/------+
      :    R3          D      R4        :
      :                                 :
      +---------(+) ─┤├─ (-)------------+
                     18 V
```

> **Figure 3.4** – R₁ jal chuki hai, to A se B wala raasta khula (open) hai: wahan taar toota hai. Baaki chaar bulbs ab bhi jude hain. R₅ ab bhi B aur D ke beech hai.

- **Given:** R₂ = R₃ = R₄ = R₅ = 9 Ω, R₁ khuli, V = 18 V
- **Find:** R_eq, I, har bulb ka I aur P
- **Formula:** series aur parallel reduction, I = V ÷ R, P = I² R
- **Substitution:** A se sirf R₃ (9 Ω) ke raaste D tak ja sakte hain. D se C tak do raaste hain: seedhe R₄ (9 Ω), ya R₅ aur R₂ ke saath (9 Ω + 9 Ω = 18 Ω). Parallel: (9 Ω × 18 Ω) ÷ (9 Ω + 18 Ω) = 162 Ω² ÷ 27 Ω = 6 Ω. R_eq = 9 Ω + 6 Ω = 15 Ω. I = 18 V ÷ 15 Ω = 1.2 A. R₃ mein poora 1.2 A, to V_AD = 1.2 A × 9 Ω = 10.8 V. Bacha V_DC = 18 V − 10.8 V = 7.2 V. R₄ mein I = 7.2 V ÷ 9 Ω = 0.8 A. R₅ aur R₂ mein I = 7.2 V ÷ 18 Ω = 0.4 A. Power: R₃: (1.2 A)² × 9 Ω = 12.96 W. R₄: (0.8 A)² × 9 Ω = 5.76 W. R₅ aur R₂: (0.4 A)² × 9 Ω = 1.44 W har ek.
- **Answer:** R_eq = **15 Ω**, I = **1.2 A**. R₁ bujhi (0 A). R₅ ab **0.4 A** se halka jalne lagi (V_D = 7.2 V, V_B = 3.6 V: ab ye equal potential nahi). R₃ pehle (9 W) se zyada tez (**12.96 W**), R₄ pehle se dheemi (**5.76 W**), R₂ bhi dheemi (**1.44 W**).

**Jaanch:** 0.8 A + 0.4 A = 1.2 A ✅. Power in = 18 V × 1.2 A = 21.6 W; power out = 12.96 + 5.76 + 1.44 + 1.44 = 21.6 W ✅. Aur dekho: ek raasta hata to R_eq 9 Ω se **badhkar 15 Ω** hui ✅ (raaste kam, rukawat zyada).

Rohini ke sawal ka jawab: **sirf R₁ hi bujhi**, baaki saari jalti rahi, par pehle se alag roshni ke saath. Aur R₅ isliye jalne lagi kyunki ab B aur D equal potential par nahi rahe: A-B wala raasta band hua, to B ka potential girkar 3.6 V reh gaya, jabki D par 7.2 V hai, aur is antar se R₅ mein current chalne laga. (Honest note: asli bulb ka filament garm hone par apna resistance badalta hai, wo Topic 4 mein dekhenge. Yahan "bulb = fixed resistor" ek simple model hai.)

---

## Part C: Equal potential points aur balanced bridge

Mirror ke bina bhi B aur D equal potential par ho sakte hain. R₅ ko abhi hata kar socho. Upar wala raasta A-B-C ek **potential divider** jaisa hai (Part E mein poora dekhenge): C ko 0 V maan lo to B ka potential V × R₂ ÷ (R₁ + R₂) hota hai. Neeche wala raasta A-D-C bhi aisa hi divider hai: D ka potential V × R₄ ÷ (R₃ + R₄). Agar dono dividers ek hi **hissa** chhodte hain, to B aur D ka potential barabar hoga, aur tab R₅ jodne se kuch nahi badalta (uske dono sire barabar potential par hain):

R₂ ÷ (R₁ + R₂) = R₄ ÷ (R₃ + R₄), jisse seedha R₁ ÷ R₂ = R₃ ÷ R₄ nikalta hai.

Jab ye ratio barabar ho to B aur D equal potential par hain, aur beech ke resistor R₅ mein **I = ΔV ÷ R = 0 V ÷ R₅ = 0 A**. Ye **balanced bridge** hai. (Agar ratio barabar nahi, to R₅ mein current aata hai aur uska hal aage ki class ke tools se hota hai: hum yahan nahi karenge.)

**Example 4 (balanced bridge, alag-alag values):** Figure 3.5 mein R₁ = 12 Ω, R₂ = 18 Ω, R₃ = 10 Ω, R₄ = 15 Ω aur beech mein R₅ = 40 Ω. Supply 30 V (A par 30 V, C par 0 V). Kya bridge balanced hai? Kul resistance, kul current, V_B, V_D aur R₅ ka current?

```
          12 Ω         B     18 Ω
      +---/\/\/--------+-----/\/\/------+
      :                :                :
    A :             [40 Ω]              : C
      :                :                :
      +---/\/\/--------+-----/\/\/------+
      :   10 Ω         D     15 Ω       :
      :                                 :
      +---------(+) ─┤├─ (-)------------+
                     30 V
```

> **Figure 3.5** – Bridge circuit: R₁ = 12 Ω, R₂ = 18 Ω, R₃ = 10 Ω, R₄ = 15 Ω, beech mein R₅ = 40 Ω, battery 30 V (A par +).

- **Given:** R₁ = 12 Ω, R₂ = 18 Ω, R₃ = 10 Ω, R₄ = 15 Ω, R₅ = 40 Ω, V = 30 V
- **Find:** balance ki jaanch, R_eq, kul I, V_B, V_D, I₅
- **Formula:** R₁ ÷ R₂ aur R₃ ÷ R₄, series, parallel, I = V ÷ R, V = I R
- **Substitution:** R₁ ÷ R₂ = 12 Ω ÷ 18 Ω = 2/3 aur R₃ ÷ R₄ = 10 Ω ÷ 15 Ω = 2/3: barabar, to balanced hai, I₅ = 0. R₅ hata kar do raaste: A-B-C = 12 Ω + 18 Ω = 30 Ω, A-D-C = 10 Ω + 15 Ω = 25 Ω. R_eq = (30 Ω × 25 Ω) ÷ (30 Ω + 25 Ω) = 750 Ω² ÷ 55 Ω ≈ 13.6 Ω. Upar raaste mein I₁ = 30 V ÷ 30 Ω = 1 A, neeche I₂ = 30 V ÷ 25 Ω = 1.2 A, kul I = 2.2 A. V_B (C ko 0 V maan kar) = I₁ × R₂ = 1 A × 18 Ω = 18 V. V_D = I₂ × R₄ = 1.2 A × 15 Ω = 18 V.
- **Answer:** balanced; R_eq ≈ **13.6 Ω**, kul I = **2.2 A**, V_B = V_D = **18 V**, R₅ mein **0 A**.

**Jaanch:** 30 V ÷ 13.64 Ω = 2.2 A ✅. V_B = V_D = 18 V, to 40 Ω ke dono sire par ΔV = 0 ✅. Agar R₅ ko 40 Ω ki jagah 4000 Ω kar do ya taar se hi jod do, to bhi R_eq wahi 13.6 Ω rahegi ✅.

---

## Part D: Ladder: door ke sire se shuru karo

**Ladder network** mein ek hi pattern baar-baar aata hai: ek resistor upar ke rail par series mein ("arm"), phir ek resistor neeche ke rail tak parallel mein ("rung"), phir wahi. Isse hal karne ka ek hi niyam hai: **supply se door wale sire se shuru karo** aur supply ki taraf aao. Tab har kadam par sirf ek series ya ek parallel milta hai.

**Example 5 (teen section ki ladder, 26 V):** Figure 3.6 mein teen series arms 8 Ω ke aur teen rungs (shunts) 8 Ω ke hain. Supply 26 V. Kul R, kul I, N₁, N₂, N₃ ke potential (0 V bottom rail par) aur har rung ka current?

```
              26 V            8 Ω           8 Ω           8 Ω
      +--(-) ─┤├─ (+)--------/\/\/----+----/\/\/----+----/\/\/----+
      :                               :             :             :
      :                               :             :             :
      :                             [8 Ω]         [8 Ω]         [8 Ω]
      :                               :             :             :
      :                               :             :             :
      +-------------------------------+-------------+-------------+
      0                               N1            N2            N3

```

> **Figure 3.6** – Teen section ki ladder: upar rail par teen 8 Ω ke arms, neeche rail tak teen 8 Ω ke rungs. N₁, N₂, N₃ upar ke nodes hain, bottom rail 0 V par. Battery ka + sira ladder ki taraf.

- **Given:** arms 8 Ω ×3, rungs 8 Ω ×3, V = 26 V
- **Find:** R_eq, I, V(N₁), V(N₂), V(N₃), rung currents
- **Formula:** series, parallel, I = V ÷ R, V = I R
- **Substitution (door se):** Aakhri arm aur rung series: 8 Ω + 8 Ω = 16 Ω. Ye rung 2 (8 Ω) ke parallel: (8 Ω × 16 Ω) ÷ (8 Ω + 16 Ω) = 128 Ω² ÷ 24 Ω = 16/3 Ω. Arm 2 ke saath series: 8 Ω + 16/3 Ω = 40/3 Ω. Ye rung 1 (8 Ω) ke parallel: (8 Ω × 40/3 Ω) ÷ (8 Ω + 40/3 Ω) = (320/3) ÷ (64/3) = 5 Ω. Arm 1 ke saath series: R_eq = 8 Ω + 5 Ω = 13 Ω. I = 26 V ÷ 13 Ω = 2 A. **Ab wapas supply se door:** arm 1 par drop = 2 A × 8 Ω = 16 V, to V(N₁) = 26 V − 16 V = 10 V. Rung 1: 10 V ÷ 8 Ω = 1.25 A, to arm 2 mein 2 A − 1.25 A = 0.75 A. Arm 2 par drop = 0.75 A × 8 Ω = 6 V, to V(N₂) = 4 V. Rung 2: 4 V ÷ 8 Ω = 0.5 A, arm 3 mein 0.75 A − 0.5 A = 0.25 A. Arm 3 par drop 0.25 A × 8 Ω = 2 V, to V(N₃) = 4 V − 2 V = 2 V. Rung 3: 2 V ÷ 8 Ω = 0.25 A.
- **Answer:** R_eq = **13 Ω**, I = **2 A**, V(N₁) = **10 V**, V(N₂) = **4 V**, V(N₃) = **2 V**; rungs: **1.25 A, 0.5 A, 0.25 A**.

**Jaanch:** Aakhri rung ka current (0.25 A) wahi hai jo arm 3 mein aaya ✅. Rungs ka total = 1.25 + 0.5 + 0.25 = 2 A = kul I ✅. Power in = 26 V × 2 A = 52 W; power out = arms: (2² + 0.75² + 0.25²) × 8 = (4 + 0.5625 + 0.0625) × 8 = 37 W, rungs: (1.25² + 0.5² + 0.25²) × 8 = (1.5625 + 0.25 + 0.0625) × 8 = 15 W; 37 W + 15 W = 52 W ✅. (Dhyan do: voltage 26 V, 10 V, 4 V, 2 V: supply se door jaate-jaate sirf ek chhota hissa bachta hai.)

---

## Part E: Potential divider: voltage ka hissa

Class 9 ka voltage division yaad karo (Example 13): series mein har resistor par voltage uski resistance ke hisaab se batta hai. Jab hum **neeche wale resistor ke dono sire** se voltage nikaalte hain, to use **potential divider** kehte hain (Figure 3.7). Supply V, resistors R₁ (upar) aur R₂ (neeche): series current I = V ÷ (R₁ + R₂), aur R₂ par voltage

V_out = V × R₂ ÷ (R₁ + R₂)

```
              5 V
      +--(-) ─┤├─ (+)---------+
      :                       :
      :                   [6.8 kΩ]
      :                       : Vout
      :                       +-------------+
      :                       :             :
      :                   [3.3 kΩ]         (V)
      :                       :             :
      +-------------------------------------+
```

> **Figure 3.7** – Potential divider (bina load ke): battery V, R₁ upar, R₂ neeche, voltmeter (V) sirf R₂ ke parallel. Output V_out R₂ ke dono sire par hai. Voltmeter ka + sira upar wali taraf (battery ke + ki taraf).

**Loading ki baat.** Agar output ke saath koi component (load R_L) jod do, to current R₂ ke saath R_L mein bhi jaata hai. Ab neeche **R₂ aur R_L parallel** hain: uski resistance R₂ se **kam**. Neeche ki resistance kam, to uska hissa kam, **V_out gir jaata hai**.

```
              5 V
      +--(-) ─┤├─ (+)---------+
      :                       :
      :                   [6.8 kΩ]
      :                       : Vout
      :                       +-----------+-------------+
      :                       :           :             :
      :                   [3.3 kΩ]    [3.3 kΩ]         (V)
      :                       :           :             :
      +-----------------------------------+-------------+
```

> **Figure 3.8** – Loaded divider: R₂ ke parallel load R_L jud gaya. Voltmeter ab R_L aur R₂ ki jodi ka voltage naapta hai.

**Example 6 (divider, bina load aur load ke saath):** 5 V ki supply, R₁ = 6.8 kΩ, R₂ = 3.3 kΩ. V_out nikalo: (a) bina load ke, (b) R_L = 3.3 kΩ ke saath, (c) R_L = 100 kΩ ke saath. Dono mein supply se kitna current liya?

- **Given:** V = 5 V, R₁ = 6.8 kΩ, R₂ = 3.3 kΩ, R_L = 3.3 kΩ ya 100 kΩ
- **Find:** V_out aur I (har case)
- **Formula:** V_out = V × R_neeche ÷ (R₁ + R_neeche), R_neeche = R₂ ya R₂ ∥ R_L (parallel), I = V ÷ (R₁ + R_neeche)
- **Substitution (a):** V_out = 5 V × 3.3 kΩ ÷ (6.8 kΩ + 3.3 kΩ) = 16.5 V·kΩ ÷ 10.1 kΩ ≈ 1.63 V. I = 5 V ÷ 10.1 kΩ ≈ 0.495 mA.
- **(b):** R₂ ∥ R_L = (3.3 × 3.3) ÷ (3.3 + 3.3) kΩ = 1.65 kΩ. V_out = 5 V × 1.65 kΩ ÷ (6.8 kΩ + 1.65 kΩ) = 8.25 ÷ 8.45 V ≈ 0.98 V. I = 5 V ÷ 8.45 kΩ ≈ 0.59 mA.
- **(c):** R₂ ∥ R_L = (3.3 × 100) ÷ (3.3 + 100) kΩ ≈ 3.19 kΩ. V_out = 5 V × 3.19 kΩ ÷ (6.8 kΩ + 3.19 kΩ) ≈ 1.60 V. I = 5 V ÷ 9.99 kΩ ≈ 0.50 mA.
- **Answer:** (a) **≈ 1.63 V**, (b) **≈ 0.98 V**, (c) **≈ 1.60 V**.

**Jaanch:** R₁ par voltage + V_out = supply: (a) 0.495 mA × 6.8 kΩ = 3.37 V, aur 3.37 V + 1.63 V = 5.0 V ✅. (b) 0.592 mA × 6.8 kΩ = 4.02 V, aur 4.02 V + 0.98 V = 5.0 V ✅. Dekho: load R₂ ke barabar ho (3.3 kΩ) to output 1.63 V se **gir kar 0.98 V** ho gaya; load R₂ se bahut bada (100 kΩ, lagbhag 30 guna) ho to output lagbhag nahi gira. **Niyam:** load, R₂ se kam se kam lagbhag 10 guna bada rakho.

---

## Part F: Asli meters circuit ko hilate hain

Class 9 mein hamne ammeter ko "resistance zero" aur voltmeter ko "current nahi lena" maan liya tha. Asli meters mein thodi resistance hoti hai (ya bahut badi), aur ye circuit ko **thoda** badal deti hai. **Voltmeter** parallel mein lagta hai, to wo jis resistor ke saath lagta hai uske saath parallel ho jaata hai: isliye **uski resistance bahut badi** honi chahiye taaki wo current na churaye. **Ammeter** series mein lagta hai, to wo circuit ki resistance mein apni R_A jodta hai: isliye **uski resistance bahut chhoti** honi chahiye. (Is example mein cell ko ideal maana hai: uska r Topic 1 se alag, yahan nahi.)

```

                          +-----(V)-------+
                          :               :
             100 kΩ      P:   100 kΩ     Q:
      +-------/\/\/-------+----/\/\/------+-------+
      :                                           :
      :                                           :
      :                                           :
      +------(+) ─┤├─ (-)-----------(A)-----------+
                  10 V

```

> **Figure 3.9** – Voltmeter (V) resistor R₂ ke parallel (P aur Q ke beech), ammeter (A) poore circuit ke series mein. Meter ka + sira us taraf jahan se current andar aata hai.

**Example 7 (voltmeter ki resistance):** Do resistors R₁ = R₂ = 100 kΩ series mein 10 V ki supply par hain (Figure 3.9). R₂ ka asli voltage (voltmeter ke bina) 5 V hai. Voltmeter ki resistance R_V = (a) 100 kΩ, (b) 10 MΩ ho to kya reading aayegi?

- **Given:** R₁ = R₂ = 100 kΩ, V = 10 V, R_V = 100 kΩ ya 10 MΩ (= 10000 kΩ)
- **Find:** voltmeter ki reading, error
- **Formula:** R₂ ∥ R_V, divider V_out = V × R_neeche ÷ (R₁ + R_neeche)
- **Substitution (a):** R₂ ∥ R_V = (100 × 100) ÷ 200 kΩ = 50 kΩ. Reading = 10 V × 50 kΩ ÷ (100 kΩ + 50 kΩ) = **3.33 V**. Error = (5 − 3.33) ÷ 5 = 33 percent.
- **(b):** R₂ ∥ R_V = (100 × 10000) ÷ 10100 kΩ ≈ 99.0 kΩ. Reading = 10 V × 99.0 kΩ ÷ (100 kΩ + 99.0 kΩ) ≈ **4.975 V**. Error = (5 − 4.975) ÷ 5 ≈ 0.5 percent.
- **Answer:** (a) **lagbhag 3.33 V** (bahut galat), (b) **lagbhag 4.98 V** (lagbhag sahi).

**Jaanch:** Limiting case: R_V → bahut bada: R₂ ∥ R_V → R₂ = 100 kΩ, reading → 5 V ✅. R_V jitni badi, utni sahi reading ✅. Units: V × kΩ ÷ kΩ = V ✅.

**Example 8 (ammeter ki resistance):** 6 V ki ideal battery, ek 11.5 Ω ka resistor aur ek ammeter (R_A = 0.5 Ω) series mein hain. Ammeter kya padhega? Asli (ideal ammeter wala) current kitna hota? Agar R_A = 0.05 Ω ho to?

- **Given:** V = 6 V, R = 11.5 Ω, R_A = 0.5 Ω ya 0.05 Ω
- **Find:** reading, asli current, error
- **Formula:** I = V ÷ (R + R_A), asli I = V ÷ R
- **Substitution:** asli I = 6 V ÷ 11.5 Ω ≈ 0.522 A. Reading (R_A = 0.5 Ω) = 6 V ÷ (11.5 Ω + 0.5 Ω) = 6 V ÷ 12 Ω = **0.500 A**; error = (0.522 − 0.500) ÷ 0.522 ≈ 4.2 percent. R_A = 0.05 Ω: 6 V ÷ 11.55 Ω ≈ **0.519 A**; error ≈ 0.4 percent.
- **Answer:** **0.500 A** (asli 0.522 A), aur chhoti R_A ke saath **0.519 A**.

**Jaanch:** R_A → 0 par reading → asli 0.522 A ✅. Ammeter ki R_A jitni chhoti, utna accurate ✅.

---

## Do activities (safe)

**Activity 1 (sirf kaagaz par, ghar par):** Figure 3.2 jaisa square copy par banao. Har node ko alag rang ki pencil se rang do: jo taar ek hi rang se bhar sakte ho wo ek hi node hai. Ab har resistor ko "rang 1 se rang 2" likho aur khud redraw karke Figure 3.3 wala chain nikalo. Phir har resistor 5 Ω maan kar R_eq nikalo: tumhe 3.75 Ω milna chahiye (5 Ω ∥ 15 Ω).

**Activity 2 (school mein teacher ke saath):** Lab mein teacher ek balanced bridge banayen: chaar resistors ek board par, ek 3 V ka battery pack, aur beech wale resistor ke series mein ek multimeter (milliammeter range par, teacher dwara set kiya hua). Dekho ki ratio barabar hone par reading lagbhag zero aati hai, aur ek resistor badalne par reading aati hai. Kabhi bhi ammeter ko seedha battery ke dono sire par mat lagao: ye hamesha kisi resistor ke series mein hota hai. Mains par koi prayog nahi.

---

## Aam galtiyan (bachke rehna)

**1. "Do junctions ke beech laga resistor mein current zaroor jaata hai."** Current tab jaata hai jab resistor ke dono sire par **potential difference** ho: I = ΔV ÷ R. Resistor ki jagah (picture) se kuch nahi hota. Demonstration: Figure 3.5 mein R₅ = 40 Ω ke dono sire B aur D 18 V par hain, to I₅ = 0 V ÷ 40 Ω = **0 A**. Example 3 mein wahi R₅ (9 Ω) B aur D ke beech usi jagah hai, par ab V_D = 7.2 V aur V_B = 3.6 V, to I₅ = (7.2 V − 3.6 V) ÷ 9 Ω = **0.4 A**. Bulb ek hi, jagah ek hi: ek baar current zero, ek baar 0.4 A. Farq sirf potentials ka tha.

**2. "Parallel mein ek aur branch jodne se total resistance badhti hai."** Naya raasta **kam** rukawat dega, kabhi zyada nahi. Demonstration: 20 Ω akela hai. Usi ke parallel ek aur 20 Ω jodo: R = (20 × 20) ÷ 40 = 10 Ω. Teesra 20 Ω bhi jodo: 1/R = 3/20, R = 20 ÷ 3 ≈ 6.67 Ω. Jitne zyada branch, utni kam R. Ulta bhi sach hai: Example 3 mein R₁ ka raasta hata, to R 9 Ω se badhkar **15 Ω** hui. Aur ek balanced bridge mein beech ka resistor jodne se R **na ghatti, na badhti** (Example 4): wahan sirf "kabhi nahi badhti" wala niyam bachta hai. Isliye yaad rakho: **raaste jodo to R ghate (ya wahi rahe), raaste hatao to R badhe (ya wahi rahe).**

---

## Quick Recap

- Mushkil circuit mein pehle **nodes ko letter do** aur har resistor ko "X se Y" likho: taar ki shakl nahi, jodna dekho. Phir redraw karo.
- Do sire jo same letters par hon: **parallel**. Jo beech mein kisi aur se na jude: **series**.
- **Symmetry:** agar circuit line ke dono taraf mirror ho, to mirror par ke points (B aur D) equal potential par aate hain, aur unke beech ke resistor mein current zero.
- **Balanced bridge:** R₁ ÷ R₂ = R₃ ÷ R₄ ho to beech ke resistor mein I = 0, aur use hata kar ya kuch bhi value ka maan kar R_eq wahi rahegi.
- Equal potential points ke beech current tabhi zero hoti hai jab ΔV = 0. Ek raasta hataane par potentials badal sakte hain aur wo current wapas aa sakta hai (Example 3).
- **Ladder:** door ke sire se supply ki taraf reduce karo, phir wapas jaakar voltages aur currents nikalo.
- **Potential divider:** V_out = V × R₂ ÷ (R₁ + R₂). Load jodne par R₂ ki jagah R₂ ∥ R_L aati hai, to **V_out gir jaata hai**; load R₂ se kam se kam lagbhag 10 guna bada rakho.
- **Meters:** voltmeter ki R bahut badi (parallel mein), ammeter ki R bahut chhoti (series mein). Asli meter ki R reading mein chhoti galti laati hai.

---

## Practice Questions

1. In a square ABCD each side carries a 5 Ω resistor. A 7 Ω resistor is joined between B and D, and a 15 V supply is connected across A and C. Find the total current, the current in the 7 Ω resistor and the potential difference across the resistor AB.

2. Four 16 Ω resistors are joined in a square ABCD. A 42 V battery is connected across the neighbouring corners A and B. Find the total current and the current in each of the four resistors.

3. In a bridge, R₁ = 14 Ω (A to B), R₂ = 21 Ω (B to C), R₃ = 22 Ω (A to D), R₄ (D to C) is unknown and R₅ = 19 Ω joins B and D. (a) Find R₄ for which R₅ carries no current. (b) With 35 V across A and C (C at 0 V), find the total current and the potentials of B and D.

4. A three-section ladder has series arms of 4 Ω each. The shunts (rungs), counted from the supply end, are 6 Ω, 3 Ω and 2 Ω. The supply is 28 V. Find the total resistance, the total current and the current in the last 2 Ω shunt.

5. A 9 V supply feeds a divider of R₁ = 5.6 kΩ (upper) and R₂ = 2.7 kΩ (lower). Find the output voltage without a load. Then a 39 kΩ load is connected across R₂: find the new output voltage and the percentage fall.

6. A 20 V supply and an upper resistor R₁ = 27 kΩ are available. What lower resistor R₂ gives an unloaded output of exactly 8 V?

7. Two 50 kΩ resistors are in series across a 36 V supply. A voltmeter of resistance 200 kΩ is connected across one of them. What does it read, and what is the percentage error compared with the voltage before the voltmeter was connected?

8. A 3.5 V ideal battery drives a 17 Ω resistor. An ammeter of resistance 0.5 Ω is connected in series. Find its reading and the percentage error compared with an ideal ammeter.

9. A 32 Ω resistor is connected across a 48 V battery. Another resistor of 96 Ω is then connected in parallel with it. Find the battery current before and after, and the new equivalent resistance. Did the total resistance rise or fall, and why?

10. The five-bulb board of Figure 3.1 is made with identical 30 Ω bulbs and a 25 V supply. The bulb R₂ (B to C) burns out and becomes an open gap. Find the total current, the current in the middle bulb R₅, and say which bulb is brightest.

11. State True or False and give a one-line reason:
    (a) In a balanced bridge, removing the middle resistor changes the total resistance.
    (b) Connecting a load across the output of a divider lowers the output voltage.
    (c) A good voltmeter should have a very small resistance.
    (d) Joining one more resistor between two points of a circuit can never increase the equivalent resistance between the supply terminals.
    (e) A ladder network is reduced starting from the supply end.

12. Four 11 Ω resistors form a square ABCD, and a 33 V supply is across A and C. A thick copper wire of negligible resistance is joined between B and D. (a) Find the equivalent resistance. (b) What is the current in the wire? (c) Does the equivalent resistance change if the wire is removed?

### Answers

1. **Given:** four 5 Ω, middle 7 Ω (B-D), V = 15 V. **Formula:** symmetry, series, parallel. A se C ke do raaste: 5 Ω + 5 Ω = 10 Ω har ek, mirror hain, to B aur D equal potential par: 7 Ω mein **0 A**. R_eq = (10 Ω × 10 Ω) ÷ (10 Ω + 10 Ω) = **5 Ω**. Kul I = 15 V ÷ 5 Ω = **3 A**, har raaste mein 1.5 A, to V_AB = 1.5 A × 5 Ω = **7.5 V**.
   Jaanch: 7.5 V + 7.5 V = 15 V ✅. Power in = 15 V × 3 A = 45 W = 4 × (1.5 A)² × 5 Ω = 45 W ✅.

2. **Formula:** Part A ka redraw. Seedhe A-B: 16 Ω. Baaki teen series: 3 × 16 Ω = 48 Ω. R_eq = (16 Ω × 48 Ω) ÷ (16 Ω + 48 Ω) = 768 Ω² ÷ 64 Ω = 12 Ω. Kul I = 42 V ÷ 12 Ω = **3.5 A**. Seedhe 16 Ω mein 42 V ÷ 16 Ω = **2.625 A**; baaki teeno mein 42 V ÷ 48 Ω = **0.875 A** har ek.
   Jaanch: 2.625 A + 0.875 A = 3.5 A ✅.

3. (a) Balance ke liye R₁ ÷ R₂ = R₃ ÷ R₄, to R₄ = R₃ R₂ ÷ R₁ = 22 Ω × 21 Ω ÷ 14 Ω = **33 Ω**. (b) Upar raasta 14 Ω + 21 Ω = 35 Ω: I₁ = 35 V ÷ 35 Ω = 1 A, V_B = 1 A × 21 Ω = **21 V**. Neeche 22 Ω + 33 Ω = 55 Ω: I₂ = 35 V ÷ 55 Ω ≈ 0.636 A, V_D = 0.636 A × 33 Ω = **21 V**. Kul I = 1 A + 0.636 A ≈ **1.64 A**.
   Jaanch: V_B = V_D = 21 V, to R₅ (19 Ω) mein 0 A ✅. R₁ ÷ R₂ = 14 ÷ 21 = 2/3 aur R₃ ÷ R₄ = 22 ÷ 33 = 2/3 ✅.

4. Door se: 4 Ω + 2 Ω = 6 Ω; 3 Ω ∥ 6 Ω = (3 × 6) ÷ 9 = 2 Ω; 4 Ω + 2 Ω = 6 Ω; 6 Ω ∥ 6 Ω = 3 Ω; 4 Ω + 3 Ω = **7 Ω**. Kul I = 28 V ÷ 7 Ω = **4 A**. Arm 1 par 4 A × 4 Ω = 16 V, to V(N₁) = 12 V; shunt 6 Ω mein 2 A, arm 2 mein 2 A, V(N₂) = 12 V − 8 V = 4 V; shunt 3 Ω mein 4/3 A, arm 3 mein 2 A − 4/3 A = 2/3 A, V(N₃) = 4 V − (2/3 A × 4 Ω) = 4/3 V; aakhri 2 Ω mein (4/3 V) ÷ 2 Ω = **2/3 A ≈ 0.667 A**.
   Jaanch: Shunts ka sum = 2 + 4/3 + 2/3 = 4 A = kul I ✅. Aakhri shunt ka current arm 3 ke current 2/3 A ke barabar hai ✅.

5. **Formula:** V_out = V R_neeche ÷ (R₁ + R_neeche). Bina load: 9 V × 2.7 kΩ ÷ (5.6 kΩ + 2.7 kΩ) = 24.3 ÷ 8.3 V ≈ **2.93 V**. Load ke saath: R₂ ∥ R_L = (2.7 × 39) ÷ (2.7 + 39) kΩ = 105.3 ÷ 41.7 ≈ 2.53 kΩ. V_out = 9 V × 2.53 kΩ ÷ (5.6 kΩ + 2.53 kΩ) ≈ **2.80 V**. Fall = (2.93 − 2.80) ÷ 2.93 ≈ **4.5 percent**.
   Jaanch: Load R₂ se lagbhag 14 guna bada hai, to fall chhota hai (lagbhag 4.5 percent) ✅. R₁ par voltage: 9 V − 2.80 V = 6.20 V; I = 9 V ÷ 8.13 kΩ ≈ 1.11 mA, aur 1.11 mA × 5.6 kΩ ≈ 6.20 V ✅.

6. 8 V = 20 V × R₂ ÷ (27 kΩ + R₂), to 8 (27 + R₂) = 20 R₂, 216 + 8 R₂ = 20 R₂, 12 R₂ = 216, **R₂ = 18 kΩ**.
   Jaanch: 20 V × 18 ÷ (27 + 18) = 360 ÷ 45 = 8 V ✅.

7. Voltmeter ke bina R₂ par 36 V ÷ 2 = **18 V**. Voltmeter ke saath: 50 kΩ ∥ 200 kΩ = (50 × 200) ÷ 250 = 40 kΩ. Reading = 36 V × 40 kΩ ÷ (50 kΩ + 40 kΩ) = **16 V**. Error = (18 − 16) ÷ 18 ≈ **11 percent**.
   Jaanch: Voltmeter ki R jitni badi, reading 18 V ke utni nazdeek ✅ (R_V = 200 kΩ sirf 4 guna hai, isliye error bada).

8. Ideal ammeter: I = 3.5 V ÷ 17 Ω ≈ 0.206 A. Reading = 3.5 V ÷ (17 Ω + 0.5 Ω) = 3.5 V ÷ 17.5 Ω = **0.200 A**. Error = (0.206 − 0.200) ÷ 0.206 ≈ **2.9 percent**.
   Jaanch: R_A → 0 par reading 0.206 A tak jaati hai ✅.

9. Pehle: I = 48 V ÷ 32 Ω = **1.5 A**. Baad mein: R_eq = (32 × 96) ÷ (32 + 96) Ω = 3072 ÷ 128 = **24 Ω**; I = 48 V ÷ 24 Ω = **2 A**. Resistance **ghati** (32 Ω se 24 Ω), kyunki naya raasta mila.
   Jaanch: naye branch ka current 48 V ÷ 96 Ω = 0.5 A, aur 1.5 A + 0.5 A = 2 A ✅. 24 Ω sabse chhoti branch (32 Ω) se chhoti hai ✅.

10. R₂ khuli hai, to A se D tak: R₃ ke raaste seedhe (30 Ω) ya R₁ aur R₅ ke raaste (60 Ω): 30 Ω ∥ 60 Ω = 20 Ω. Phir D se C seedha R₄ (30 Ω). R_eq = 20 Ω + 30 Ω = 50 Ω. Kul I = 25 V ÷ 50 Ω = **0.5 A**. V_AD = 0.5 A × 20 Ω = 10 V. R₃ mein 10 V ÷ 30 Ω = 1/3 A, R₁ aur R₅ mein 10 V ÷ 60 Ω = 1/6 A ≈ **0.167 A** (middle bulb). R₄ mein poora **0.5 A**: P = (0.5 A)² × 30 Ω = 7.5 W, jo sabse zyada hai (R₃ ka 3.33 W, R₁ aur R₅ ka 0.83 W). Sabse tez **R₄ (D se C)**.
   Jaanch: 1/3 A + 1/6 A = 0.5 A ✅. Power in = 25 V × 0.5 A = 12.5 W; out = 7.5 + 3.33 + 2 × 0.83 = 12.5 W ✅.

11. (a) **False** ❌: dono sire equal potential par hain, to current zero, aur R_eq wahi rehti hai. (b) **True** ✅: R₂ ∥ R_L, R₂ se chhoti, to uska hissa kam. (c) **False** ❌: voltmeter ki R bahut badi honi chahiye, taaki wo current na churaye. (d) **True** ✅: naya raasta ya R ghata dega, ya (balanced bridge mein) wahi rakhega; purane raaste jaise the waise rehte hain. (e) **False** ❌: door ke sire se shuru karte hain, tab har kadam par sirf series ya parallel milta hai.

12. (a) Wire se B aur D ek hi node hain. A se B/D ke beech do 11 Ω parallel: 11 ÷ 2 = 5.5 Ω; B/D se C ke beech bhi 5.5 Ω. R_eq = 5.5 Ω + 5.5 Ω = **11 Ω**; kul I = 33 V ÷ 11 Ω = 3 A. (b) Symmetry se B aur D equal potential par hain, to wire mein **0 A**: koi potential difference hi nahi jo current chalaye. (c) **Nahi badalti**: wire hatao to bhi R_eq = (22 Ω ∥ 22 Ω) = 11 Ω.
   Jaanch: kul I = 3 A, har resistor mein 1.5 A, A se B/D tak drop = 1.5 A × 11 Ω = 16.5 V = 33 V ÷ 2 ✅.

---

Ab Rohini aur Chacha ka board dekhne wale kisi ko bhi bata sakte ho ki beech wali bulb kharab nahi thi: wo bas "mirror" ki wajah se bujhi thi, aur jab ek bulb gayi to bridge ka balance toota aur wo jal uthi. Agli baar koi mushkil circuit dikhe to dar mat: nodes ko naam do, symmetry dhundo, door se reduce karo.

**Aage kya?** Aaj sab resistors "diye hue" the: 9 Ω, 40 Ω, 3.3 kΩ. Par ek asli taar ya resistor ki resistance kahan se aati hai? Agar taar ko kheench kar double lamba kar dein, to uski resistance kitni badhegi? Aur chhote resistor par jo rang ki patti hoti hai, wo kya bolti hai? Topic 4 mein: taar, resistor aur colour code.
