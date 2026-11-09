# Chapter: Electricity (Part 5)

> **Class:** 9 | **Subject:** Physics
> **Ye file [electricity-part4.md](electricity-part4.md) se aage chalti hai** (wahan Ohm ka law aur resistance tha). Chapter ki shuruaat (charge, static electricity) [electricity.md](electricity.md) mein hai. Ammeter, voltmeter aur circuit ke symbols [electricity-part2.md](electricity-part2.md) aur [electricity-part3.md](electricity-part3.md) mein hain.
> **Topics covered in this file:**
> 5. Resistors ka Combination: Series aur Parallel

---

# Topic 5: Resistors ka Combination: Series aur Parallel

> **Thoda extra (Class 10 overlap):** Series aur parallel combination ka poora hisaab Class 10 mein bhi aata hai. Yahan hum use simple, step-by-step tareeke se seekhenge: sirf series, parallel aur ek simple mixed combination. Isse zyada ulajhe networks aage ki badi classes ke liye hain, unki zaroorat nahi.

Pichhle topic mein humne **ek** resistor dekha: us par V = I R lagaya, aur jaana ki resistance kis cheez par depend karti hai (length, area, material). Par asli circuits mein shayad hi kabhi ek akela resistor hota hai. Ek hi circuit mein kai bulb, kai heater, kai wires jude hote hain, aur har ek ki apni resistance hoti hai. To sawal ye hai: **jab kai resistors saath mein jude hon, to poori circuit ke liye "kul resistance" kitni hogi, aur current aur voltage har ek mein kaise batenge?** Is topic mein hum jodne ke do bunyadi tareeke seekhenge: **series** aur **parallel**.

Ek baat yaad rakhna: ammeter circuit mein **series** mein lagta hai aur voltmeter jis hisse ka voltage napna ho, uske **parallel** mein (Topic 2 aur 3). Wahi shabd ab resistors ke liye bhi kaam aayenge.

---

## Balcony ki lighting: ek tooti hui jhalar

Diwali aane wali thi. Mr. Sethi aur unki beti Vritika ne balcony ki railing par rangeen chhote bulbon ki ek lambi jhalar (string of lights) lagayi. Jhalar ek chhote low-voltage adapter se chalti thi. Switch on kiya to saari bulbs jagmaga uthin.

Thodi der baad Vritika ne ek bulb ko ghumakar zara dhila (loose) kar diya, aur **poori ki poori jhalar ek saath bujh gayi!** Ek bulb dhila, aur dus ki dus andhere mein.

Vritika ne hairaan hokar kaha, "Papa, ye kya? Ek bulb ne kaam karna band kiya to sabne kar diya!"

Mr. Sethi hanse, "Ab andar chalo." Andar kamre mein ek tube light band ki gayi to baaki tube light aur pankha waise hi chalte rahe.

Vritika ne sir khujaya, "Papa, jhalar mein ek bulb ka kharaab hona sabko bujha deta hai, par ghar mein ek tube light band hone par baaki chalti rehti hain. Dono jagah bijli hi hai, phir ye farak kyun?"

Mr. Sethi muskuraye, "Isi ka jawab hai resistors ko jodne ke do alag tareeke. Chalo, dono ko samajhte hain, aur phir tumhara sawal solve karte hain." Is kahani ko hum Part G mein solve karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Series (shrenee)** | Resistors ek ke baad ek, **ek hi raaste** mein jude hon, current ke paas ek hi path ho | Jhalar ki bulbs ek ke baad ek |
| **Parallel (samaantar)** | Resistors ke dono sire **same do points** par jude hon, current ke paas kai raaste (branches) hon | Ghar ke appliances |
| **Junction (jod-bindu)** | Wo point jahan current ka raasta do ya zyada raaston mein batata ya milta hai | Parallel mein A aur B point |
| **Branch (shakha)** | Parallel mein ek alag raasta | Ek bulb wali line |
| **Equivalent resistance (R)** | Wo ek akeli resistance jo poore combination ki jagah rakh dene par circuit mein wahi current aaye | 2 Ω aur 3 Ω series mein: 5 Ω |
| **Mixed combination** | Ek hi circuit mein series aur parallel dono | R₁ ke saath series mein parallel jodi R₂, R₃ |
| **Voltage ka batwara** | Series mein kul voltage resistances ke hisaab se alag-alag resistors par batna | 12 V: 4.8 V aur 7.2 V |

---

## Part A: Series combination (ek raasta)

Series mein resistors **ek ke baad ek** jude hote hain, jaise ek line mein lage station. Current ke paas **sirf ek raasta** hota hai: wo pehle R₁ se, phir R₂ se, phir R₃ se guzarta hai.

```
     +-----/\/\/-----/\/\/-----/\/\/-----+
     :      R₁         R₂         R₃      :
     :                                    :
     +-----(A)-----------─┤├─────────────+
```

> **Figure 5.1** – Teen resistors series mein: ek hi loop, ek hi raasta. Ammeter bhi series mein hai, to wahi current napta hai jo har resistor se guzar raha hai.

### Series ke teen niyam

**Niyam 1: Har resistor mein same current.** Raasta ek hi hai, aur Topic 2 mein dekha tha ki charge kahin jama nahi hota aur kahin kam nahi hota. Jitna current R₁ mein jaata hai, utna hi R₂ aur R₃ mein. Current "pehle resistor mein khatam" nahi hota, wo pura ka pura aage jaata hai.

> I = I₁ = I₂ = I₃

**Niyam 2: Kul potential difference, alag-alag ka jod.** Cell ya battery jo kul voltage deti hai, wo teeno resistors par batti hai:

> V = V₁ + V₂ + V₃

**Niyam 3: Equivalent resistance = sabka jod.** Ise banate hain, sirf do line mein. Har resistor par Ohm ka law (V = I R) lagao, aur current sab mein same I hai:

- V₁ = I R₁, V₂ = I R₂, V₃ = I R₃
- V = V₁ + V₂ + V₃ = I R₁ + I R₂ + I R₃ = I (R₁ + R₂ + R₃)

Poore combination par bhi V = I R lagta hai (R = equivalent resistance). Dono ko barabar rakhne par:

> **R = R₁ + R₂ + R₃** (series)

Do baatein dhyan se:
- R **sabse bade resistor se bhi bada** hota hai, kyunki jodne par kuch na kuch resistance aur judti hi hai. (Socho: raaste mein ek ke baad ek aur rukawat lagti gayi.)
- Wire ko lamba karna bhi ek tarah se series hi hai: Topic 4 mein R ∝ l isi wajah se tha.

### Voltage ka batwara (voltage division)

Series mein current same hai, to V₁ = I R₁ aur V₂ = I R₂. Dono ko bhaag do:

> V₁ : V₂ = R₁ : R₂

Yaani **jis resistor ki resistance zyada, us par voltage zyada**. Voltage resistance ke **proportion** mein batta hai.

**Solved example (4 Ω aur 6 Ω, 10 V):** 10 V ki battery ke saath 4 Ω aur 6 Ω series mein hain. R = 4 + 6 = 10 Ω, I = 10 ÷ 10 = 1 A. V₁ = 1 A × 4 Ω = 4 V, V₂ = 1 A × 6 Ω = 6 V. Ratio V₁ : V₂ = 4 : 6 = R₁ : R₂ ✅, aur 4 V + 6 V = 10 V ✅.

### Series mein ek jagah tootna

Kyunki sirf ek raasta hai, agar **kahin bhi** ek jagah wire toot jaye, ya koi bulb ka filament toot jaye, ya koi connection dhila ho, to poore loop mein current **ruk jaata hai**. Ek ka tootna sabko band kar deta hai. Yahi hamari balcony ki jhalar ke saath hua.

---

## Part B: Parallel combination (kai raaste)

Parallel mein sabhi resistors ke **ek-ek sire ek hi point (A) par**, aur **doosre sire doosre ek hi point (B) par** jude hote hain. Current ke paas **kai raaste (branches)** hote hain: A par pahunchkar wo batt jaata hai, aur B par phir mil jaata hai.

```
            A                      B
     +------+----/\/\/ R₁ ---------+------+
     :      :                      :      :
     :      +----/\/\/ R₂ ---------+      :
     :      :                      :      :
     :      +----/\/\/ R₃ ---------+      :
     :                                    :
     +------------------─┤├─--------------+
```

> **Figure 5.2** – Teen resistors parallel mein: teeno ke sire A aur B par jude hain. Current A par batta hai aur B par phir mil jaata hai.

### Parallel ke teen niyam

**Niyam 1: Har resistor par same potential difference.** Teeno ke dono sire wahi do points A aur B hain. To A aur B ke beech jo V hai, wahi har resistor par hai:

> V = V₁ = V₂ = V₃

**Niyam 2: Kul current, alag-alag branches ke currents ka jod.** Charge kahin gum nahi hota: jo current A par aaya, wo teeno branches mein batkar nikla, aur B par phir mila:

> I = I₁ + I₂ + I₃

**Niyam 3: Equivalent resistance ka ulta (1/R) = ulton ka jod.** Ise bhi do line mein banate hain. Har resistor par I = V ÷ R lagao, aur V sabke liye same hai:

- I₁ = V ÷ R₁, I₂ = V ÷ R₂, I₃ = V ÷ R₃
- I = I₁ + I₂ + I₃ = V ÷ R₁ + V ÷ R₂ + V ÷ R₃ = V (1/R₁ + 1/R₂ + 1/R₃)

Poore combination ke liye I = V ÷ R. Dono ko barabar rakhne par V kat jaata hai:

> **1/R = 1/R₁ + 1/R₂ + 1/R₃** (parallel)

### Parallel mein R chhoti kyun ho jaati hai?

Parallel mein har naye resistor ke saath current ko **ek aur raasta** mil jaata hai. Socho ek toll gate par ek hi counter ho aur phir teen counter khul jayein: gaadiyan ab zyada aasani se nikalengi. Isi tarah parallel combination ki equivalent resistance **sabse chhote resistor se bhi chhoti** hoti hai. Jitne zyada branches, utni kam R.

### Do resistors ke liye seedha formula

Do resistors R₁ aur R₂ ke liye 1/R = 1/R₁ + 1/R₂ = (R₂ + R₁) ÷ (R₁ R₂). Ulta karne par:

> **R = (R₁ × R₂) ÷ (R₁ + R₂)** (sirf do resistors ke liye: "guna by jod")

Ye shortcut sirf **do** resistors ke liye hai. Teen ya zyada ho to 1/R wala formula (ya do-do karke) lagao.

### n barabar resistors (R₀ each)

- **Series mein:** R = R₀ + R₀ + ... (n baar) = **n R₀**
- **Parallel mein:** 1/R = 1/R₀ + 1/R₀ + ... (n baar) = n/R₀, yaani **R = R₀ ÷ n**

### Current ka batwara (current division)

Parallel mein V same hai, to I₁ = V ÷ R₁ aur I₂ = V ÷ R₂. Dono ko bhaag do:

> I₁ : I₂ = (1 ÷ R₁) : (1 ÷ R₂) = R₂ : R₁

Yaani **current resistance ke ulte ratio mein batta hai**: jis branch ki resistance kam, usme current zyada. (Series mein voltage seedhe ratio mein, parallel mein current ulte ratio mein.)

### Parallel mein ek branch tootna

Agar ek branch toot jaye (ek bulb ka filament toot jaye), to baaki branches ke dono sire ab bhi A aur B se jude hain. Un par abhi bhi poora V hai, aur unmein current waise hi chalta rehta hai. **Ek branch band, baaki chalu.** Isiliye ghar ke saare appliances parallel mein lagaye jaate hain: har ek ko poora 230 V milta hai, aur har ek apna kaam doosre se alag chalata hai (ghar ki wiring ka poora hisaab Topic 7 mein).

---

## Part C: Series aur parallel ek nazar mein

| | Series | Parallel |
|---|---|---|
| Raasta | Ek hi raasta | Kai raaste (branches) |
| Current | Har resistor mein **same** (I = I₁ = I₂) | **Batta** hai: I = I₁ + I₂ + I₃ |
| Potential difference | **Batti** hai: V = V₁ + V₂ + V₃ | Har resistor par **same** (V = V₁ = V₂) |
| Equivalent resistance | R = R₁ + R₂ + R₃ (sabse badi se bhi bada) | 1/R = 1/R₁ + 1/R₂ + 1/R₃ (sabse chhoti se bhi chhota) |
| Ek jagah toot jaye | Poora circuit band | Sirf wo branch band, baaki chalu |
| Batwara | V ∝ R (zyada R par zyada V) | I ∝ 1/R (kam R mein zyada I) |
| Example | Diwali ki purani jhalar | Ghar ke bulb, pankhe, TV |

---

## Part D: Mixed combination aur reduction method

> **Thoda extra (Class 10 overlap):** Ek hi circuit mein series aur parallel dono ho sakte hain.

Maan lo R₁ ke saath series mein ek parallel jodi (R₂ aur R₃) lagi hai:

```
              R₁         A      R₂       B
     +-----/\/\/-----+----+---/\/\/---+---+
     :                    :           :   :
     :                    +---/\/\/---+   :
     :                        R₃          :
     :                                    :
     +-------------─┤├─--------------------+
```

> **Figure 5.3** – Mixed combination: R₁ series mein, aur R₂ aur R₃ ki jodi A aur B ke beech parallel mein.

### Reduction method: kadam dar kadam

Mixed circuit ko seedha ek baar mein hal karna mushkil hai. Isliye use **chhote-chhote hisson mein badal kar ek akeli resistance** tak le aate hain:

**Kadam 1:** Pehle **parallel wali jodi** ko dhundo aur uski equivalent resistance nikalo (R₂₃ = R₂ R₃ ÷ (R₂ + R₃)).

**Kadam 2:** Ab R₁ aur R₂₃ ko dekho. Ab ye ek ke baad ek **series** mein hain: R = R₁ + R₂₃.

**Kadam 3:** Total current I = V ÷ R nikalo.

**Kadam 4:** Ab wapas jao. R₁ mein poora I jaata hai, to V₁ = I R₁. Bacha hua voltage (V − V₁) **parallel jodi par** hai, aur har branch ka current = (jodi ka voltage) ÷ (uski resistance).

```
   Asli circuit            Kadam 1: parallel jodi ko ek karo      Kadam 2: series mein jodo

   R₁ ── [ R₂ ]                 R₁ ── [ R₂₃ ]                      [ R = R₁ + R₂₃ ]
         [ R₃ ]
```

> **Figure 5.4** – Reduction: pehle parallel jodi ko ek resistor R₂₃ banao, phir R₁ ke saath series mein jodkar ek akeli R pao.

Iska pura numerical Example 8 mein dekhenge.

---

## Part E: Meters aur cells combination mein

### Ammeter aur voltmeter kahan lagayein

- **Ammeter hamesha us jagah series mein**, jahan ka current napna ho. Ammeter ki resistance bahut kam hoti hai, isliye wo circuit ko zyada nahi badalta. (Agar use kisi resistor ke **parallel** laga diya, to uski kam resistance ki wajah se bahut zyada current usme se guzar jayega: ye ammeter ko kharaab kar sakta hai.)
- **Voltmeter us hisse ke parallel**, jiska potential difference napna ho.

```
                                 +-------(V)---------+
                                 :                   :
     +-----(A)-----/\/\/ R₁ -----+-----/\/\/ R₂ -----+
     :                                               :
     +--------------------─┤├─-----------------------+
```

> **Figure 5.5** – Ammeter series mein (poora circuit ka current napta hai), voltmeter sirf R₂ ke dono sire par parallel mein (R₂ ka voltage napta hai). Voltmeter ke raaste se current (lagbhag) nahi guzarta.

### Cells ka combination

Cells bhi do tarah se jode ja sakte hain:

- **Series mein** (ek ka + doosre ke − se): voltages **jud jaate hain**. Do 1.5 V ke cell series mein = 1.5 V + 1.5 V = **3 V**. Torch mein cells isi tarah lagte hain.
- **Parallel mein** (+ ko + se, − ko − se): voltage **wahi rehta hai** (do 1.5 V cell parallel mein: 1.5 V), par cells **zyada der tak** chalte hain. (Detail aage ki class mein.)

---

## Part F: Solved examples

**Example 1 (series, 2 Ω + 3 Ω + 5 Ω, 20 V):** Teen resistors 2 Ω, 3 Ω, 5 Ω series mein hain aur 20 V ki supply se jude hain. Equivalent resistance, current aur har resistor ka voltage?

- R = 2 Ω + 3 Ω + 5 Ω = **10 Ω**
- I = V ÷ R = 20 V ÷ 10 Ω = **2 A** (teeno mein same)
- V₁ = I R₁ = 2 A × 2 Ω = **4 V**
- V₂ = 2 A × 3 Ω = **6 V**
- V₃ = 2 A × 5 Ω = **10 V**

**Jaanch:** 4 V + 6 V + 10 V = 20 V ✅. Ratio V₁ : V₂ : V₃ = 4 : 6 : 10 = 2 : 3 : 5 = R₁ : R₂ : R₃ ✅

**Example 2 (parallel, wahi teeno resistors, 6 V):** 2 Ω, 3 Ω, 5 Ω ab parallel mein hain aur 6 V se jude hain. Equivalent resistance aur currents?

- 1/R = 1/2 + 1/3 + 1/5 = 15/30 + 10/30 + 6/30 = 31/30 (Ω⁻¹)
- R = 30/31 = **0.968 Ω** (lagbhag)
- I₁ = V ÷ R₁ = 6 V ÷ 2 Ω = **3 A**
- I₂ = 6 V ÷ 3 Ω = **2 A**
- I₃ = 6 V ÷ 5 Ω = **1.2 A**
- Kul current I = 3 A + 2 A + 1.2 A = **6.2 A**

**Jaanch:** V ÷ R = 6 V ÷ (30/31) Ω = 6 × 31/30 = 6.2 A ✅. Aur R = 0.968 Ω sabse chhote resistor 2 Ω se chhoti hai ✅ (series mein wahi teeno 10 Ω the, parallel mein 0.968 Ω: kitna farak!).

**Example 3 (do resistors parallel, 6 Ω aur 3 Ω):** Equivalent resistance?

- R = (R₁ × R₂) ÷ (R₁ + R₂) = (6 Ω × 3 Ω) ÷ (6 Ω + 3 Ω) = 18 Ω² ÷ 9 Ω = **2 Ω**

**Jaanch:** 1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, to R = 2 Ω ✅. Aur 2 Ω < 3 Ω (chhote resistor se bhi chhota) ✅

**Example 4 (do 4 Ω ke resistors):** Dono ko (a) parallel mein, (b) series mein jodo.

- (a) Parallel: R = (4 Ω × 4 Ω) ÷ (4 Ω + 4 Ω) = 16 Ω² ÷ 8 Ω = **2 Ω**
- (b) Series: R = 4 Ω + 4 Ω = **8 Ω**

**Jaanch:** Parallel mein barabar resistors: R₀ ÷ n = 4 Ω ÷ 2 = 2 Ω ✅. Series mein n R₀ = 2 × 4 Ω = 8 Ω ✅. Parallel wala series wale ka 1/4 hai (2 Ω aur 8 Ω).

**Example 5 (n barabar resistors):** Paanch resistors, har ek 10 Ω ka. Parallel aur series mein equivalent resistance?

- Parallel: R = R₀ ÷ n = 10 Ω ÷ 5 = **2 Ω**
- Series: R = n R₀ = 5 × 10 Ω = **50 Ω**

**Jaanch:** Parallel: 1/R = 5 × (1/10) = 5/10 = 1/2, to R = 2 Ω ✅. Series: 10 + 10 + 10 + 10 + 10 = 50 Ω ✅

**Example 6 (12 V battery, 4 Ω aur 6 Ω series mein):** Current aur dono ka voltage?

- R = 4 Ω + 6 Ω = 10 Ω
- I = 12 V ÷ 10 Ω = **1.2 A**
- V₁ = 1.2 A × 4 Ω = **4.8 V**
- V₂ = 1.2 A × 6 Ω = **7.2 V**

**Jaanch:** 4.8 V + 7.2 V = 12 V ✅. Ratio 4.8 : 7.2 = 2 : 3 = 4 : 6 ✅

**Example 7 (wahi 4 Ω aur 6 Ω, ab parallel mein, 12 V):** Har branch ka current, kul current aur equivalent resistance?

- I₁ = 12 V ÷ 4 Ω = **3 A**
- I₂ = 12 V ÷ 6 Ω = **2 A**
- Kul current I = 3 A + 2 A = **5 A**
- R = V ÷ I = 12 V ÷ 5 A = **2.4 Ω**

**Jaanch:** Formula se R = (4 × 6) ÷ (4 + 6) = 24 ÷ 10 = 2.4 Ω ✅. Ratio I₁ : I₂ = 3 : 2 = R₂ : R₁ = 6 : 4 = 3 : 2 ✅. Dhyan do: series mein kul current sirf 1.2 A tha, parallel mein 5 A.

**Example 8 (mixed, thoda extra: Class 10 overlap):** 2 Ω ka resistor R₁, uske saath series mein 6 Ω aur 3 Ω ki parallel jodi. Supply 12 V. Kul resistance, kul current, jodi par voltage aur har branch ka current?

- **Kadam 1 (parallel jodi):** R₂₃ = (6 Ω × 3 Ω) ÷ (6 Ω + 3 Ω) = 18 Ω² ÷ 9 Ω = 2 Ω
- **Kadam 2 (series):** R = R₁ + R₂₃ = 2 Ω + 2 Ω = **4 Ω**
- **Kadam 3 (kul current):** I = 12 V ÷ 4 Ω = **3 A** (ye R₁ se bhi guzarta hai)
- **Kadam 4 (wapas jao):** V₁ = 3 A × 2 Ω = 6 V. Jodi par voltage = 12 V − 6 V = **6 V**
- 6 Ω wale branch mein: I₂ = 6 V ÷ 6 Ω = **1 A**
- 3 Ω wale branch mein: I₃ = 6 V ÷ 3 Ω = **2 A**

**Jaanch:** I₂ + I₃ = 1 A + 2 A = 3 A = kul current ✅. V₁ + V(jodi) = 6 V + 6 V = 12 V ✅

**Example 9 (series mein resistance jodkar current ghatana):** Ek bulb ki resistance 12 Ω hai aur wo 0.2 A par theek chalta hai. Hamare paas 6 V ki supply hai. Bulb ko bachane ke liye kitni resistance series mein jodni hogi?

- Chahiye I = 0.2 A, to kul resistance R_total = V ÷ I = 6 V ÷ 0.2 A = **30 Ω**
- Bulb ki resistance 12 Ω hai, to jodni hai: 30 Ω − 12 Ω = **18 Ω**
- Bulb par voltage V_bulb = I × R = 0.2 A × 12 Ω = **2.4 V**
- Resistor par voltage = 0.2 A × 18 Ω = 3.6 V

**Jaanch:** 2.4 V + 3.6 V = 6 V ✅. Ab total R = 12 + 18 = 30 Ω, I = 6 ÷ 30 = 0.2 A ✅. (Resistor ne 6 V mein se 3.6 V "apne upar le liya", bulb par sirf 2.4 V bacha.)

**Example 10 (parallel mein resistance jodkar R ghatana):** 10 Ω ke resistor ko 5 Ω banana hai. Kaunsa resistor, kaise jodein?

- Resistance **kam** karni hai, to **parallel** mein jodna padega (series mein to badhegi).
- 1/R = 1/5 Ω⁻¹, aur 1/R₁ = 1/10 Ω⁻¹. Naya resistor R_x: 1/R_x = 1/R − 1/R₁ = 1/5 − 1/10 = 2/10 − 1/10 = 1/10 Ω⁻¹
- R_x = **10 Ω**, parallel mein

**Jaanch:** Do barabar 10 Ω parallel mein: 10 ÷ 2 = 5 Ω ✅

**Example 11 (ghar ke teen appliances, 230 V):** Ek line par parallel mein teen appliances lage hain, jo 230 V par 5 A, 2 A aur 0.5 A khichte hain. Kul current aur kul equivalent resistance?

- Parallel mein kul current I = 5 A + 2 A + 0.5 A = **7.5 A**
- Equivalent resistance R = V ÷ I = 230 V ÷ 7.5 A = **30.7 Ω** (lagbhag; 92/3 Ω)

**Jaanch:** Teeno ki alag-alag resistance: 230 ÷ 5 = 46 Ω, 230 ÷ 2 = 115 Ω, 230 ÷ 0.5 = 460 Ω. 1/R = 1/46 + 1/115 + 1/460 = 10/460 + 4/460 + 1/460 = 15/460, to R = 460/15 = 30.67 Ω ✅. Ye sabse chhoti 46 Ω se bhi chhoti hai ✅.

Dhyan do: jaise-jaise **zyada appliances parallel mein jodte jaate hain, kul current badhta jaata hai** (kul R ghatta hai). Aur wire mein se ye saara current guzarta hai. Isiliye line mein kul current ko seemit rakhne ke liye **fuse** lagta hai: uska detail Topic 6 mein.

**Example 12 (current ka batwara):** 6 Ω aur 3 Ω ke resistors parallel mein hain. Kul current 9 A hai. Har branch ka current?

- Pehle voltage: parallel R = 2 Ω (Example 3), V = I R = 9 A × 2 Ω = **18 V**
- I₁ = 18 V ÷ 6 Ω = **3 A**, I₂ = 18 V ÷ 3 Ω = **6 A**

**Jaanch:** 3 A + 6 A = 9 A ✅. Ratio I₁ : I₂ = 3 : 6 = 1 : 2 = R₂ : R₁ = 3 : 6 ✅. Kam resistance (3 Ω) wali branch mein zyada current ✅.

**Example 13 (brightness ka sawal: voltage ka batwara):** Do bulbs, 2 Ω aur 4 Ω, series mein 6 V ki supply se jude hain. Kis par kitna voltage hai? Kiski roshni zyada hogi?

- R = 2 Ω + 4 Ω = 6 Ω, I = 6 V ÷ 6 Ω = **1 A** (dono mein same)
- V₁ = 1 A × 2 Ω = **2 V**, V₂ = 1 A × 4 Ω = **4 V**

**Jaanch:** 2 V + 4 V = 6 V ✅. Ratio V₁ : V₂ = 1 : 2 = R₁ : R₂ ✅.

Dono mein current same hai, par 4 Ω wale par voltage zyada hai (V ∝ R), isliye wo zyada energy leta hai aur zyada chamakega. (Kitni energy, kitni power: ye hisaab Topic 6 mein.)

---

## Part G: Vritika ka sawal solve karte hain

Mr. Sethi ne kaha, "Pehle chhote numbers se dekhte hain. Maan lo hamare paas 2 Ω aur 3 Ω ke do resistors hain."

- **Series mein:** R = 2 Ω + 3 Ω = **5 Ω**
- **Parallel mein:** R = (2 × 3) ÷ (2 + 3) = 6/5 = **1.2 Ω**

**Jaanch:** Parallel: 1/R = 1/2 + 1/3 = 3/6 + 2/6 = 5/6, to R = 6/5 = 1.2 Ω ✅ (ye 2 Ω se chhoti hai). Series wali 5 Ω sabse badi (3 Ω) se badi hai ✅.

**Example 14 (balcony ki jhalar, numbers ke saath):** Maan lo jhalar mein 10 ek jaisi chhoti bulbs hain, har ek ki resistance 3 Ω (ek simple model), aur adapter 12 V ka hai. Series mein jodne par:

- R = 10 × 3 Ω = 30 Ω
- I = 12 V ÷ 30 Ω = **0.4 A** (har bulb mein same)
- Har bulb par V = 0.4 A × 3 Ω = **1.2 V** (10 bulbs mein 12 V barabar batta hai: 10 × 1.2 V = 12 V ✅)

Ab ek bulb dhila ho gaya, to us jagah circuit khul gaya. Raasta toot gaya, aur poore loop mein **I = 0 A**: koi bhi bulb nahi chamakta.

```
     Jhalar (series): ek bulb dhila ho jaye

     +--⊗--⊗--⊗--⊗--  X  --⊗--⊗--⊗--+
     :                  ^            :
     :        (yahan raasta toota)   :
     +-------------─┤├─--------------+

     Ghar (parallel): ek tube light band

     +--------+--------+--------+
     :        :        :        :
     :        ⊗        ⊗        o
   ──┬──      :        :         o  ← switch off
   ──┴─       :        :        :
     :        :        :        ⊗
     :        :        :        :
     +--------+--------+--------+
           (chalu)  (chalu)   (band)
```

> **Figure 5.6** – Jhalar series mein hai: ek jagah toote to poora raasta band. Ghar ke bulb parallel mein hain (sabse baayein supply): ek branch ka switch off hone par baaki branches ko abhi bhi poora voltage milta hai.

Mr. Sethi bole, "Dekha Vritika? **Jhalar series mein jodi gayi hai**, isliye ek bulb ke dhila hone par sab bujh gaye. Ghar ki wiring **parallel** mein hoti hai: har appliance ke dono sire seedhe line se jude hain, to har ko poora 230 V milta hai, aur ek ke band hone par baaki chalte rehte hain."

Vritika ne sir hilaya, "Matlab series mein sabka bhaag ek-doosre par tika hota hai, aur parallel mein har ek aazaad hai!"

"Bilkul," Mr. Sethi hanse. "Aur isiliye ghar ke saare appliances ko kabhi series mein nahi jodte: ek tube light kharaab hoti to poore ghar ki bijli chali jaati, aur har appliance ko poora voltage bhi nahi milta."

---

## Aam galtiyan (bachke rehna)

**Galti 1: Parallel mein resistors ko seedha jod dena**

Parallel mein 6 Ω aur 3 Ω ka R = 6 + 3 = 9 Ω likhna galat hai. Sahi: R = (6 × 3) ÷ (6 + 3) = **2 Ω**.

**Galti 2: 1/R nikalkar use ulta (invert) karna bhool jaana**

1/R = 1/6 + 1/3 = 1/2 par ruk jaana aur "R = 1/2 Ω" ya "R = 0.5 Ω" likhna galat hai. 1/R = 1/2 ka matlab **R = 2 Ω**. Hamesha ant mein ulta karo.

**Galti 3: "Parallel mein R sabse chhote resistor se bhi bada ho sakta hai"**

Nahi. Parallel mein R hamesha **sabse chhote resistor se chhota** hota hai (6 Ω aur 3 Ω ka 2 Ω, 3 Ω se chhota). Agar tumhara jawab sabse chhote se bada aaye, to kahin galti hui hai. Series mein ulta: R sabse bade se bada.

**Galti 4: "Series mein pehle resistor mein current kharch ho jaata hai, aage kam bachta hai"**

Galat. Series mein **har resistor mein current same** hai (Example 1: sab mein 2 A). Kharch hota hai **voltage (potential difference)**: wo resistors par batta jaata hai (4 V + 6 V + 10 V = 20 V).

**Galti 5: Series aur parallel ke voltage ke niyam mila dena**

Series mein **current same**, voltage batta hai. Parallel mein **voltage same**, current batta hai. Example 6 (series): 4.8 V aur 7.2 V, par current 1.2 A same. Example 7 (parallel): dono par 12 V, par current 3 A aur 2 A.

**Galti 6: Ammeter ko resistor ke parallel jodna**

Ammeter ki resistance bahut kam hai. Use parallel mein jodne par usse bahut zyada current guzarega. Ammeter hamesha **series** mein, voltmeter hamesha **parallel** mein.

**Galti 7: "Ghar ke saare appliances series mein hote hain"**

Nahi. Agar series mein hote, to ek tube light band hone par sab band ho jaate (jaise jhalar). Ghar ke appliances **parallel** mein hote hain: har ek ko poora 230 V milta hai aur sab alag-alag chalte hain.

---

## Quick Recap

- **Series:** ek hi raasta; **I same**; V = V₁ + V₂ + V₃; **R = R₁ + R₂ + R₃** (sabse badi se bhi bada); voltage resistance ke proportion mein batta hai (V₁ : V₂ = R₁ : R₂); ek jagah toot jaye to sab band.
- **Parallel:** kai raaste; **V same**; I = I₁ + I₂ + I₃; **1/R = 1/R₁ + 1/R₂ + 1/R₃** (sabse chhoti se bhi chhoti); do resistors ke liye R = R₁R₂ ÷ (R₁ + R₂); current ulte ratio mein batta hai (I₁ : I₂ = R₂ : R₁); ek branch toote to baaki chalu.
- n barabar resistors R₀: **series mein n R₀, parallel mein R₀ ÷ n**.
- Dono formula do-do line mein bane: series mein V = I R₁ + I R₂ + ..., parallel mein I = V ÷ R₁ + V ÷ R₂ + ...
- **Mixed combination (thoda extra, Class 10 overlap):** pehle parallel jodi ko ek resistor banao, phir series mein jodo, phir wapas jakar har hisse ka V aur I nikalo.
- **Ammeter series mein**, **voltmeter us hisse ke parallel**.
- **Cells:** series mein voltage jud jaate hain (1.5 V + 1.5 V = 3 V); parallel mein voltage wahi, par cells zyada der chalte hain (detail aage ki class mein).
- Jhalar series mein hai (ek bulb dhila to sab band); ghar ki wiring parallel mein hoti hai (har appliance ko poora 230 V, ek band hone par baaki chalu).
- Ghar mein jaise-jaise appliances parallel mein jodte jaate hain, kul current badhta jaata hai (Example 11: 5 + 2 + 0.5 = 7.5 A).

---

## Practice Questions

1. Three resistors of 3 Ω, 6 Ω and 9 Ω are connected in series to a 36 V supply. Find the equivalent resistance, the current and the potential difference across each resistor.

2. Find the equivalent resistance of a 12 Ω and a 4 Ω resistor connected in parallel.

3. Resistors of 3 Ω, 6 Ω and 2 Ω are connected in parallel across a 6 V supply. Find the equivalent resistance, the current in each resistor and the total current.

4. Six resistors, each of 12 Ω, are available. Find the equivalent resistance when all six are connected (a) in parallel, (b) in series.

5. A 9 V battery is connected to a 10 Ω and a 20 Ω resistor. Find the current in each resistor and the total current when they are connected (a) in series, (b) in parallel.

6. A 4 Ω resistor is connected in series with a parallel combination of 6 Ω and 12 Ω. The supply is 16 V. Find the equivalent resistance, the total current, the voltage across the parallel pair and the current in each of the 6 Ω and 12 Ω resistors.

7. A bulb of resistance 20 Ω works properly at a current of 0.25 A. It has to be run from a 9 V supply. What resistance must be connected in series with it? Find the voltage across the bulb and across the extra resistor.

8. A 12 Ω resistor has to be changed into a 4 Ω resistance. What resistor should be connected, and how (series or parallel)?

9. A 12 V supply drives a current of 0.5 A through two resistors in series. One resistor is 10 Ω. Find the other resistor and the voltage across each.

10. A total current of 12 A divides between a 2 Ω and a 4 Ω resistor connected in parallel. Find the current in each and the potential difference across the combination.

11. In a circuit, a 5 Ω and a 10 Ω resistor are connected in series across a 6 V battery. An ammeter is connected in series and a voltmeter is connected across the 10 Ω resistor. What do the two meters read?

12. State True or False:
    (a) In a series circuit, the current is the largest in the first resistor.
    (b) The equivalent resistance of resistors in parallel is smaller than the smallest of them.
    (c) In a parallel combination, the potential difference across every resistor is the same.
    (d) When one bulb of a series string is removed, the other bulbs stay lit.

13. Three cells of 1.5 V each are connected in series to a 9 Ω resistor. Find the voltage of the battery and the current in the resistor. What would the voltage be if the three cells were in parallel?

14. Why can you not use the formula R = R₁R₂ ÷ (R₁ + R₂) for three resistors directly? Show how you would find the parallel resistance of 2 Ω, 3 Ω and 6 Ω.

15. Why are the appliances in a house connected in parallel and not in series? Answer in two or three lines.

### Answers

1. R = 3 Ω + 6 Ω + 9 Ω = **18 Ω**. I = 36 V ÷ 18 Ω = **2 A**. V₁ = 2 A × 3 Ω = **6 V**, V₂ = 2 A × 6 Ω = **12 V**, V₃ = 2 A × 9 Ω = **18 V**.
   Jaanch: 6 V + 12 V + 18 V = 36 V ✅

2. R = (12 Ω × 4 Ω) ÷ (12 Ω + 4 Ω) = 48 Ω² ÷ 16 Ω = **3 Ω**.
   Jaanch: 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3, to R = 3 Ω ✅ (4 Ω se chhoti)

3. 1/R = 1/3 + 1/6 + 1/2 = 2/6 + 1/6 + 3/6 = 6/6 = 1 Ω⁻¹, to **R = 1 Ω**. I₁ = 6 V ÷ 3 Ω = **2 A**, I₂ = 6 V ÷ 6 Ω = **1 A**, I₃ = 6 V ÷ 2 Ω = **3 A**. Kul I = 2 + 1 + 3 = **6 A**.
   Jaanch: V ÷ R = 6 V ÷ 1 Ω = 6 A ✅

4. (a) Parallel: R₀ ÷ n = 12 Ω ÷ 6 = **2 Ω**. (b) Series: n R₀ = 6 × 12 Ω = **72 Ω**.
   Jaanch: (a) 6 × (1/12) = 1/2, R = 2 Ω ✅ (b) 12 × 6 = 72 ✅

5. (a) Series: R = 10 Ω + 20 Ω = 30 Ω, I = 9 V ÷ 30 Ω = **0.3 A** (dono mein same). V₁ = 0.3 A × 10 Ω = 3 V, V₂ = 0.3 A × 20 Ω = 6 V.
   (b) Parallel: I₁ = 9 V ÷ 10 Ω = **0.9 A**, I₂ = 9 V ÷ 20 Ω = **0.45 A**, total I = 0.9 + 0.45 = **1.35 A**.
   Jaanch: (a) 3 V + 6 V = 9 V ✅. (b) R = (10 × 20) ÷ 30 = 200/30 = 6.67 Ω, aur 9 V ÷ 6.67 Ω = 1.35 A ✅

6. Parallel jodi: R₂₃ = (6 Ω × 12 Ω) ÷ (6 Ω + 12 Ω) = 72 Ω² ÷ 18 Ω = 4 Ω. Kul R = 4 Ω + 4 Ω = **8 Ω**. I = 16 V ÷ 8 Ω = **2 A**. 4 Ω par V = 2 A × 4 Ω = 8 V, to jodi par V = 16 V − 8 V = **8 V**. I(6 Ω) = 8 V ÷ 6 Ω = **4/3 A (1.33 A)**, I(12 Ω) = 8 V ÷ 12 Ω = **2/3 A (0.67 A)**.
   Jaanch: 4/3 + 2/3 = 6/3 = 2 A = kul current ✅

7. R_total = V ÷ I = 9 V ÷ 0.25 A = 36 Ω. Extra resistor = 36 Ω − 20 Ω = **16 Ω** (series mein). V_bulb = 0.25 A × 20 Ω = **5 V**, V_resistor = 0.25 A × 16 Ω = **4 V**.
   Jaanch: 5 V + 4 V = 9 V ✅

8. Resistance kam karni hai, to **parallel** mein. 1/R_x = 1/4 − 1/12 = 3/12 − 1/12 = 2/12 = 1/6, to **R_x = 6 Ω**, parallel mein.
   Jaanch: (12 × 6) ÷ (12 + 6) = 72 ÷ 18 = 4 Ω ✅

9. R_total = 12 V ÷ 0.5 A = 24 Ω. Doosra resistor = 24 Ω − 10 Ω = **14 Ω**. V₁ = 0.5 A × 10 Ω = **5 V**, V₂ = 0.5 A × 14 Ω = **7 V**.
   Jaanch: 5 V + 7 V = 12 V ✅

10. Ratio I₁ : I₂ = R₂ : R₁ = 4 : 2 = 2 : 1. To 2 Ω mein **8 A**, 4 Ω mein **4 A**. Combination ka R = (2 × 4) ÷ (2 + 4) = 8/6 = 4/3 Ω, V = 12 A × 4/3 Ω = **16 V**.
    Jaanch: 16 V ÷ 2 Ω = 8 A ✅, 16 V ÷ 4 Ω = 4 A ✅, 8 + 4 = 12 A ✅

11. Series: R = 5 + 10 = 15 Ω. Ammeter: I = 6 V ÷ 15 Ω = **0.4 A**. Voltmeter (10 Ω par): V = 0.4 A × 10 Ω = **4 V**.
    Jaanch: 5 Ω par 0.4 × 5 = 2 V, aur 2 V + 4 V = 6 V ✅

12. (a) **False** ❌. Series mein har resistor mein current same hota hai.
    (b) **True** ✅. Parallel mein naye raaste milne se R sabse chhote resistor se bhi chhoti hoti hai.
    (c) **True** ✅. Sabke dono sire wahi do points A aur B hain.
    (d) **False** ❌. Series mein ek bulb nikalne par raasta toot jaata hai, to saari bulbs bujh jaati hain.

13. Series mein voltage jud jaata hai: 1.5 + 1.5 + 1.5 = **4.5 V**. I = 4.5 V ÷ 9 Ω = **0.5 A**. Agar teeno cells parallel mein hote, to voltage **1.5 V** hi rehta (par cells zyada der chalte).
    Jaanch: 0.5 A × 9 Ω = 4.5 V ✅

14. Ye shortcut sirf **do** resistors ke liye bana hai (1/R₁ + 1/R₂ ko jodkar). Teen ke liye 1/R = 1/R₁ + 1/R₂ + 1/R₃ lagao: 1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1, to **R = 1 Ω**. (Do-do karke bhi ho sakta hai: 2 Ω aur 3 Ω ka 6/5 = 1.2 Ω, phir 1.2 Ω aur 6 Ω ka (1.2 × 6) ÷ 7.2 = 7.2 ÷ 7.2 = 1 Ω.)
    Jaanch: dono tareeke se 1 Ω ✅, aur ye sabse chhote 2 Ω se chhoti hai ✅

15. Parallel mein har appliance ko poora 230 V milta hai aur wo doosron se alag chalta hai. Ek appliance band ya kharaab ho to baaki chalte rehte hain. Series mein ek band hone par sab band ho jaate, aur voltage bhi alag-alag appliances par batkar kam rah jaata.

---

Ab aap Vritika ko bata sakte ho ki jhalar series mein hoti hai aur ghar ki wiring parallel mein, isliye ek bulb dhila hone par jhalar bujh jaati hai par ghar ke baaki bulb chalte rehte hain. Agli baar koi jhalar ya extension board dekho to sochna: ye series mein hai ya parallel mein?

**Aage kya?** Humne dekha ki current resistor se guzarta hai aur resistors jodne par kul current aur voltage kaise badalte hain. Par ek aur dilchasp baat hai: **jab current resistor se guzarta hai to wo garam hota hai**: heater, geyser aur bulb ke filament isi se garm hote hain. Is **heating effect of current** aur **electric power** ko dekhenge Topic 6 mein.
