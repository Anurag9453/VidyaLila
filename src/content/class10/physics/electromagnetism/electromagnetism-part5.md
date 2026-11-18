# Chapter: Electromagnetism: Force, Induction and Transformers (Part 5)

> **Class:** 10 | **Subject:** Physics
> **Ye file [electromagnetism-part4.md](electromagnetism-part4.md) se aage chalti hai** (wahan AC generator ki coil, ek cycle ka graph, frequency aur AC vs DC: AC ka sabse bada fayda ki uska voltage aasaani se badla ja sakta hai). Chapter ki shuruaat: [electromagnetism.md](electromagnetism.md). Recall ke liye Class 9: transformer ka naam [magnetism-part6.md](../../../class9/physics/magnetism/magnetism-part6.md) aur charger ka label [electricity-part3.md](../../../class9/physics/electricity/electricity-part3.md); Class 10: grid aur pole transformer [household-circuits-part5.md](../household-circuits/household-circuits-part5.md), RCCB [household-circuits-part2.md](../household-circuits/household-circuits-part2.md), efficiency aur I² R [current-electricity-ii-part5.md](../current-electricity-ii/current-electricity-ii-part5.md).
> **Topics covered in this file:**
> 5. Transformer: Voltage Ka Badalna

---

# Topic 5: Transformer: Voltage Ka Badalna

Topic 4 ke ant mein ek sawaal chhoda tha: AC ka voltage aasaani se badla ja sakta hai, par kaise? Topic 3 mein dekha tha ki **badalta hua** field coil mein voltage banata hai, aur Topic 4 mein dekha ki AC ka current har pal badalta rehta hai. In dono ko jodo to transformer ka raaz khul jaata hai: ek coil mein **badalta current** badalta field banata hai, aur wo field paas ki doosri coil mein voltage **induce** kar deta hai. Aaj hum is machine ko andar se kholkar samjhenge (sirf kaagaz par!), uski ginti seekhenge, aur Chapter 8 ka ek vaada bhi poora karenge: RCCB ko current ka farak "mehsoos" kaise hota hai.

---

## Charger ke label ka sawaal

Mr. Karlekar ki bhanji Unnati chhutti mein unke ghar aayi thi. Mez par Mama ka purana phone charger plug mein laga tha aur phone chadh raha tha. Unnati ne charger ko palta aur chhote akshar padhe: **INPUT: 230 V ~ 50 Hz, OUTPUT: 5 V DC 2 A** (lagbhag aisa hi label aksar hota hai). Usne socha, "Mama, socket mein 230 V hai aur phone ko sirf 5 V chahiye. Itna bada fark kahan jaata hai? Kya charger 225 V ko garmi banakar bahut saari bijli barbaad kar deta hoga? Par charger itna garm to nahi hota. Aur andar to kuch dikhta bhi nahi."

Mama muskuraye. "Bahut achha sawal, Unnati. Pehli baat: charger ko **kholna nahi**, uske andar mains ka voltage hota hai. Hum ise kaagaz par kholenge. Andar ek aisi cheez hai jisme do coil hain, aur un dono ke beech **taar ka koi jod nahi**. Phir bhi ek se doosri tak bijli pahunch jaati hai. Aaj tum wahi samjhogi."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Primary coil** | Transformer ki wo coil jo supply se judti hai aur jisme badalta current aata hai | Charger ki wo coil jo socket se bijli leti hai |
| **Secondary coil** | Wo coil jisme voltage induce hota hai aur jo load ko bijli deti hai | Charger ki wo coil jo phone ko bijli deti hai |
| **Core** | Dono coils ke beech ka closed soft-iron ka raasta, jo field ko ek coil se doosri tak le jaata hai | Chhote transformer mein do "E" aur do "I" ke shape ki patti ka dhancha |
| **Lamination** | Core ko solid ki jagah patli, aapas mein insulated parton (sheets) ki gaddi se banana, taaki eddy current kam ho | Core ko dhyaan se dekho to parton ki line dikhti hai |
| **Mutual induction** | Ek coil ke badalte current se paas ki doosri coil mein voltage banna | Primary ka AC secondary mein voltage banata hai |
| **Turns ratio** | Secondary ke pher ÷ primary ke pher (N_s ÷ N_p) | 1500 pher aur 60 pher ka ratio 60 ÷ 1500 |
| **Ideal transformer** | Kalpana ka aisa transformer jisme koi loss nahi, to power in = power out | Hisaab ka pehla kadam |
| **Copper loss** | Coil ke taar ke resistance mein I² R se garmi ban kar jaane wali energy | Bahut current wali coil ka garm hona |
| **Hysteresis loss** | Core ki lohe ki magnetism ko har half cycle mein ulta karne mein lagi thodi energy, jo garmi ban jaati hai (sirf naam) | Isiliye core ke liye soft iron chunte hain |
| **Hum** | Transformer ki halki gungunahat (lagbhag 100 Hz), jo core ke halke-halke hilne se aati hai | Gali ke pole transformer ke paas ki bhanbhanahat |
| **Net field** | Do ulte current ke field jod kar jo bacha hua field | Barabar aur ulte current: net field 0 |
| **Isolation transformer** | Aisa transformer jiska ratio lagbhag 1 : 1 hota hai aur jo supply aur load ke beech taar ka jod toot-kar rakhta hai (sirf naam) | Kuch lab aur medical upkaran |
| **Autotransformer** | Aisa transformer jisme ek hi coil se primary aur secondary dono kaam lete hain (sirf naam) | Kuch voltage regulator |

---

> **Suraksha:** Is topic ki saari activity **kaagaz, label padhna aur kam voltage** ki hai. Charger, adapter ya kisi transformer ko **kabhi mat kholo**: andar mains ka voltage hota hai. Ghar ke socket se taar, coil ya iron core jodna **kabhi nahi**. Do coil aur core wala koi bhi demo **sirf school mein teacher** ke saath, chhote AC supply (jaise 6 V) par, aur **sirf dekhne ke liye**. Transformer wale pole ya substation se door raho. Strong magnet nigalne aur ungli dabane ka khatra hain aur phone, card aur pacemaker ko kharab kar sakte hain.

---

## Class 9 aur pichhle chapters ka recall

Class 9 mein transformer ka **naam** aaya tha: AC ka voltage badhane wala (step-up) aur ghatane wala (step-down) device, jo charger mein 230 V ko lagbhag 5 V banata hai ([magnetism-part6.md](../../../class9/physics/magnetism/magnetism-part6.md), [electricity-part3.md](../../../class9/physics/electricity/electricity-part3.md)). Chapter 8 mein dekha tha ki bijli-ghar ke paas step-up transformer voltage bahut badhata hai taaki lambi line mein current aur I² R loss kam ho, aur gali ke pole transformer lagbhag 11 kV ko ghar ke liye 415 V (teen-phase) ya 230 V banata hai ([household-circuits-part5.md](../household-circuits/household-circuits-part5.md)). Wahan ye bhi likha tha ki andar se kaise chalta hai, wo Chapter 9 mein: aaj wahi **kyun aur kitna** hai.

---

## Part A: Transformer andar se: do coil, ek core

Transformer mein sirf teen cheezein hain: **primary coil**, **secondary coil** aur dono ke beech ek **closed soft-iron core**. Dono coils ke taar **insulated** hote hain aur ek doosre se kahin chhoote nahi: bijli ka koi seedha raasta nahi. Raasta hai to bas **magnetic field ka**, jo iron core ke andar chalta hai.

```
                    closed laminated soft-iron core
                     ################################
                     ################################
        :-----------(##)                          (##)-----------:
        :           (##)                          (##)           :
        :           (##)                          (##)           :
        :           (##)                          (##)           :
 AC supply          (##)    koi taar ka jod nahi  (##)           : Load
 (230 V ~)          (##)    sirf core ka raasta   (##)           : (lamp)
        :           (##)                          (##)           :
        :           (##)                          (##)           :
        :           (##)                          (##)           :
        :           (##)                          (##)           :
        :-----------(##)                          (##)-----------:
                     ################################
                     ################################

            PRIMARY coil (N_p pher)        SECONDARY coil (N_s pher)
                 (supply yahan)                  (load yahan)
```

> **Figure 5.1** – Transformer ka simple chitra: ek band (closed), patli parton wale soft-iron core ki do taangon par do coil. Baayen taraf primary (supply se judi, N_p pher), daayen taraf secondary (load se judi, N_s pher). Dono coils ke beech taar ka koi jod nahi; ye sirf core ke raaste jude hain.

Core **soft iron** ka kyun? Class 9 mein dekha tha ki soft iron thode current se hi tagda magnet ban jaata hai aur current hatate hi lagbhag magnetism chhod deta hai (electromagnet ka core). Aur core **band loop** kyun? Taaki primary ka banaya hua field lagbhag poora ka poora secondary se hokar guzre, bahar bikhre nahi. Agar core na ho ya khula ho, to secondary tak bahut kam field pahunchta hai aur voltage bahut kam banta hai.

---

## Part B: Kaam kaise karta hai: mutual induction

Kadam ek-ek karke (Figure 5.2 dekho):

1. Primary par **AC** lagao. Primary mein current lagatar badalta hai (Topic 4).
2. Badalta current core mein **badalta hua magnetic field** banata hai (Class 9: current ke paas field, solenoid).
3. Core wo field secondary ki coil se guzaarta hai. Secondary ke liye ye **badalta field** hai, to Topic 3 ke hisaab se uske sire par voltage **induce** hota hai. Isey **mutual induction** kehte hain.
4. Secondary ko load se jodo, to is voltage se current chalta hai aur bulb ya charger ko bijli milti hai.

```
        Samne se dekha: primary ka current BADH raha hai

                      ############>>>>>>##############
                      ################################
                     (##)                         (##)
 PRIMARY coil        (##)                         (##)   SECONDARY coil
 core field UP       (#↑)                         (#↓)   core field DOWN
 (badh raha)         (##)                         (##)   (badh raha)
                     (#↑)                         (#↓)
                     (##)                         (##)   Lenz: induced current
                     (#↑)                         (#↓)   ka apna field UP
                     (##)                         (##)
                     (##)                         (##)
                      ################################
                      ############<<<<<<##############

              core ke andar field ghadi ki disha (clockwise) mein ghoomta hai
```

> **Figure 5.2** – Samne se dekha. Dono coil ek hi tarah lapete hain (upar se dekhne par dono mein ghoomne ki disha ek jaisi). Primary ka current badh raha hai aur uske field ko left taang mein UP banata hai. Core mein field ghadi ki disha (clockwise) mein chalta hai: left taang mein UP, upar wali patti mein left se right, right taang mein DOWN, neeche wali patti mein right se left. Secondary wali taang mein isliye core ka field DOWN aur badh raha hai.

### Example 1: Secondary mein current ki disha

**Given:** Figure 5.2 jaisa transformer. Dono coil ek hi tarah lapete hain. Upar se dekhne par primary mein current **anticlockwise** hai aur **badh raha** hai. Secondary load se jura hai (closed circuit).
**Find:** Upar se dekhne par secondary mein induced current ki disha, aur secondary ka upar wala sira N hai ya S.
**Formula:** Class 9 ka right-hand grip rule (ungliyan current ki disha mein mudo, anguutha coil ke andar field ki disha); Lenz ka niyam: induced current badlav ka virodh karta hai.
**Substitution:** Primary mein ungliyan anticlockwise mudti hain, to anguutha UP: left taang mein field UP. Core mein ye field clockwise ghoomta hai, to right taang mein field **DOWN** aur **badh raha** hai. Lenz ke niyam se secondary ka current aisa hoga ki wo badhne ka virodh kare, yaani uska apna field **UP** ho. Grip rule: anguutha UP ke liye ungliyan upar se dekhne par **anticlockwise** mudti hain.
**Answer:** Secondary mein current upar se dekhne par **anticlockwise**; upar wala sira **N** (coil ke andar field UP hai).
**Jaanch:** Doosra tareeka (Topic 3 ka near face): right taang mein field DOWN aur badh raha hai, jaise upar se ek N pole coil ki taraf aa raha ho. Lenz ke hisaab se aate N pole ka virodh karne ke liye near face (upar wala sira) bhi **N** banega, jo coil ke andar field UP se milta hai ✅. Aur agar current ulta hota to field badhne mein madad karta aur badhta hi jaata: energy ban jaati bina mehnat ke, jo mumkin nahi ✅.

Ek honest baat: primary coil bhi to badalte field ke beech ek coil hai, to Lenz ke niyam se uska bhi **apna** induced voltage banta hai jo supply ka virodh karta hai. Isiliye jab secondary par load nahi hota, to bahut pher wali primary supply se bahut kam current kheenchti hai. Load lagate hi secondary ka current core ke field ko kam karna chahta hai (Lenz), to primary ko supply se **zyada current** kheenchna padta hai. Yani load jitna zyada power maangta hai, primary utni zyada power leti hai. (Iska poora hisaab aage ki class mein.)

### Sirf AC par kyun? Battery par kyun nahi?

Primary ko battery se jodo to current **tay** hota hai, field tay hota hai, aur field mein koi badlav nahi: secondary mein voltage **zero**. Topic 3 mein yahi dekha tha: sthir magnet coil mein current nahi banata. Haan, switch dabate waqt current zero se badhta hai aur kuch pal ke liye field badalta hai, to secondary mein **ek chhota sa jhatka** (pulse) aata hai; switch chhodte waqt ulta jhatka. Beech ka lamba samay bilkul shant. Ek aur khatra: primary ko tay DC par lagane se uske badalte field ka "virodh wala voltage" nahi banta, to current sirf taar ke chhote resistance se tay hota hai: bahut bada current, aur primary garm hoke jal sakti hai. Isliye AC wali transformer ko DC par kabhi nahi lagate.

### Sirf dekhne ke liye (teacher demo): do coil, ek core, 6 V AC

School mein teacher ek iron core par do alag coil lagakar ek ko lab ke chhote 6 V AC supply se jodti hain aur doosri ko ek chhote bulb se. Bulb jalta hai, jabki dono coil ke beech koi taar nahi. Phir core ka upar wala patti hataya jaata hai: bulb bujh jaata ya bahut madham ho jaata hai, kyunki ab closed raasta nahi. Ye **sirf teacher** karti hain, mains par kabhi nahi.

---

## Part C: Turns ka niyam: V_s ÷ V_p = N_s ÷ N_p

Core ka field primary ke har pher se aur secondary ke har pher se guzarta hai. Isliye **har pher mein lagbhag utna hi voltage** induce hota hai, jo sirf us pal ke badlav par nirbhar hai. To secondary ka voltage = (har pher ka voltage) × (secondary ke pher), aur isi tarah ideal transformer mein primary ka voltage = (har pher ka voltage) × (primary ke pher). Dono ko bhaag do:

> **V_s ÷ V_p = N_s ÷ N_p**

```
  STEP-DOWN (N_s kam)                       STEP-UP (N_s zyada)
      ##                  ##                  ##                 (##)
     (##)                 ##                 (##)                (##)
     (##)                 ##                 (##)                (##)
     (##)                 ##                 (##)                (##)
     (##)                (##)                (##)                (##)
     (##)                (##)                (##)                (##)
     (##)                (##)                (##)                (##)
     (##)                 ##                 (##)                (##)
     (##)                 ##                 (##)                (##)
     (##)                 ##                 (##)                (##)
      ##                  ##                  ##                 (##)
  N_p = 9 pher        N_s = 3 pher        N_p = 9 pher        N_s = 11 pher
  V_s / V_p = 3 / 9                       V_s / V_p = 11 / 9
```

> **Figure 5.3** – Core ki sirf ek-ek taang dikhayi hai. Step-down: N_s < N_p, to V_s < V_p (3 pher ÷ 9 pher). Step-up: N_s > N_p, to V_s > V_p (11 pher ÷ 9 pher).

- **N_s > N_p** to V_s > V_p: **step-up** transformer (voltage badhta hai).
- **N_s < N_p** to V_s < V_p: **step-down** transformer (voltage ghatta hai).
- **N_s = N_p** to V_s = V_p: isolation transformer (sirf naam): voltage wahi, par supply aur load ke beech taar ka jod nahi.

### Example 2: Doorbell ka transformer

**Given:** Ek doorbell transformer ki primary 230 V AC supply par hai (electrician ki lagayi hui, kholni nahi). Primary mein 1150 pher, secondary mein 75 pher.
**Find:** Secondary voltage, aur ye step-up hai ya step-down.
**Formula:** V_s ÷ V_p = N_s ÷ N_p.
**Substitution:** V_s = 230 V × 75 ÷ 1150 = 230 V × 0.0652 = 15 V. Har pher par 230 V ÷ 1150 = 0.2 V, to 75 pher par 75 × 0.2 V = 15 V.
**Answer:** V_s = 15 V; N_s < N_p, to **step-down**.
**Jaanch:** Dono tareeke 15 V dete hain ✅. 230 V ÷ 15 V = 15.3 aur 1150 ÷ 75 = 15.3: voltage ratio aur pher ka ratio barabar ✅.

---

## Part D: Power ka niyam: voltage badhe to current ghatta hai

Transformer **energy paida nahi karta**. Ideal transformer mein primary jitni power leti hai, secondary utni hi deti hai:

> **V_p × I_p = V_s × I_s**, yaani **I_s ÷ I_p = V_p ÷ V_s = N_p ÷ N_s**

Isse seedha nikalta hai: jis taraf voltage **zyada**, us taraf current **kam**. Step-up transformer mein secondary ka voltage zyada, to secondary ka current primary se kam. Step-down mein secondary ka voltage kam, to current zyada: isi liye kam voltage wale low-voltage coil ka taar moti hota hai. Chapter 8 mein bijli-ghar ke step-up transformer ka isi wajah se fayda tha: voltage badhao, current ghatao, I² R loss ghatao (wahan ke numbers dobara nahi: [household-circuits-part5.md](../household-circuits/household-circuits-part5.md)).

### Example 3: Doorbell transformer ka primary current

**Given:** Example 2 ka transformer (V_p = 230 V, V_s = 15 V, ideal). Secondary par ghanti 0.9 A leti hai.
**Find:** Secondary ki power aur primary ka current.
**Formula:** P = V I; ideal mein V_p × I_p = V_s × I_s.
**Substitution:** P_out = 15 V × 0.9 A = 13.5 W. I_p = 13.5 W ÷ 230 V = 0.0587 A ≈ 58.7 mA.
**Answer:** Secondary ki power 13.5 W; primary current lagbhag 58.7 mA, jo 0.9 A se bahut kam hai.
**Jaanch:** I_s ÷ I_p = 0.9 A ÷ 0.0587 A = 15.3, aur wahi V_p ÷ V_s = 15.3 ✅. Power in = 230 V × 0.0587 A = 13.5 W = power out ✅.

### Example 4: Step-up, par power nahi badhti

**Given:** School ka ek step-up transformer (ideal): V_p = 6 V, N_p = 250, N_s = 1000. Secondary 0.35 A ka load chalata hai.
**Find:** V_s, secondary ki power, primary current.
**Formula:** V_s = V_p × N_s ÷ N_p; P = V I; V_p I_p = V_s I_s.
**Substitution:** V_s = 6 V × 1000 ÷ 250 = 24 V. P_out = 24 V × 0.35 A = 8.4 W. I_p = 8.4 W ÷ 6 V = 1.4 A.
**Answer:** V_s = 24 V, P_out = 8.4 W, I_p = 1.4 A. Voltage 4 guna ho gaya, par primary ko current 4 guna dena pada (1.4 A ÷ 0.35 A = 4).
**Jaanch:** P_in = 6 V × 1.4 A = 8.4 W = P_out ✅. Voltage ke 4 guna hone par current 4 guna **kam** hua (secondary ka 0.35 A primary ke 1.4 A ka chauthai) ✅.

---

## Part E: Asli transformer: loss aur efficiency

Ideal transformer sirf hisaab ke liye hai. Asli transformer mein thodi energy garmi ban kar nikal jaati hai, to **power out < power in**. Chapter 7 wali efficiency yahin lagti hai ([current-electricity-ii-part5.md](../current-electricity-ii/current-electricity-ii-part5.md)):

> **efficiency = (output power ÷ input power) × 100 percent**

Loss ke teen bade hisse:

| Loss | Kyun hota hai | Kaise kam karte hain |
|---|---|---|
| **Copper loss** | Coil ke taar ke resistance mein I² R garmi | Moti taar (kam resistance), kam I |
| **Eddy-current loss** | Core ke moti dhaatu mein badalte field se gol eddy current (Topic 3), jo core ko garm karte hain | **Laminated** core: patli, insulated parton ki gaddi, jisse eddy current ke loop chhote ho jaate hain |
| **Hysteresis loss** | Har half cycle mein lohe ki magnetism ulti karne mein lagi energy | Soft iron ka core (jo aasaani se ulta magnet hota hai) |

Bade transformer mein itni garmi hoti hai ki use **tel (transformer oil)** mein dubo kar thanda rakhte hain; tel garmi ko bahar ki taraf le jaata hai. Ye wahi cheez hai jo gali ke pole transformer ke bade dabbe mein hoti hai. Aur **hum** (gungunahat) ka kaaran: field badalne par core ki patliyan halke-halke hilti hain, aur ye hilna field ke har half cycle mein hota hai, to 50 Hz mains par awaaz lagbhag **100 Hz** ki hoti hai. Ye wahi 100 jo Topic 4 mein lamp ke jhapkane mein aaya tha.

Efficiency ke lagbhag mote-mote mol: ek bada **power transformer** lagbhag 98 se 99 percent efficient ho sakta hai (aksar bataya jaata hai), jabki chhote **chargers** ka transformer-wala hissa aaj ke aksar lagbhag 80 se 90 percent tak hota hai. Isi liye bade transformer bhi chalte waqt halke garm rehte hain: 1 percent bhi bahut badi power par bahut hota hai.

### Example 5: Copper loss

**Given:** Ek transformer ki primary coil ka resistance 0.6 Ω hai aur usme 3.0 A current chal raha hai.
**Find:** Coil mein copper loss (power).
**Formula:** P = I² R.
**Substitution:** P = (3.0 A)² × 0.6 Ω = 9.0 A² × 0.6 Ω = 5.4 W.
**Answer:** Copper loss 5.4 W (sirf is coil ka).
**Jaanch:** V = I R = 3.0 A × 0.6 Ω = 1.8 V, aur P = V I = 1.8 V × 3.0 A = 5.4 W ✅. Dekho: current double karo to loss 4 guna ho jaata hai (I²), isliye bade current wali coil mein moti taar zaroori hai.

### Example 6: Efficiency

**Given:** Ek transformer ki input power 640 W aur output power 560 W hai.
**Find:** Efficiency aur garmi mein gayi power.
**Formula:** efficiency = (P_out ÷ P_in) × 100 percent; loss = P_in − P_out.
**Substitution:** efficiency = (560 W ÷ 640 W) × 100 = 0.875 × 100 = 87.5 percent. Loss = 640 W − 560 W = 80 W.
**Answer:** efficiency 87.5 percent; 80 W garmi (copper, eddy-current aur hysteresis loss milakar).
**Jaanch:** 87.5 percent of 640 W = 0.875 × 640 W = 560 W ✅. 560 W + 80 W = 640 W: energy bachti hai ✅.

```
Input  640 W  ################################
Output 560 W  ############################
Garmi   80 W  ....

1 chinh = 20 W   (# kaam ki power, . garmi mein gayi power)
```

> **Figure 5.4** – Example 6 ki power-ledger: 640 W andar (32 chinh), 560 W bahar kaam ki power (28 chinh) aur 80 W garmi (4 chinh). Input = output + garmi.

---

## Part F: Charger ka jawab, pole transformer aur dusre upyog

**Unnati ka sawaal wapas.** Agar 230 V se 5 V banane ke liye bas ek resistor lagate, to 2 A par us resistor par 225 V girta aur 225 V × 2 A = **450 W** garmi ban jaati, jabki phone ko sirf 5 V × 2 A = 10 W milta: lagbhag sab barbaad. Transformer voltage badalta hai bina isi tarah garmi banaye: power ka bahut bada hissa dusri taraf pahunch jaata hai. 230 V ÷ 5 V = 46, to ek simple transformer mein primary ke pher secondary se lagbhag 46 guna hote. **Honest note:** aaj ke chhote chargers mein ek tez-switching circuit aur chhota transformer hota hai, jo 50 Hz wale bhaari iron-core transformer jaisa nahi dikhta; par voltage badalne ka principle wahi hai (badalta current, badalta field, induced voltage). Aur charger ke andar rectifier AC ko DC mein badalta hai (Topic 4). Phir bhi: charger **kholna nahi**.

**Upyog ki list:**

- **Pole transformer:** gali ke khambe par lagbhag 11 kV ko ghar ke liye 415 V (teen-phase) ya 230 V mein badalta hai (Chapter 8). Ye ek bada, tel mein dooba step-down transformer hai.
- **Bijli-ghar ke step-up transformer:** voltage badhakar current ghataate hain; Chapter 8 mein inka poora hisaab hai.
- **Welding transformer:** bahut kam voltage par bahut zyada current deta hai (isiliye uski secondary mein pher kam aur taar bahut moti). Sirf trained log chalate hain.
- **Doorbell, chhote adapter, laptop charger:** ghar ke andar ke chhote step-down.
- **Isolation transformer, autotransformer** aur **teen-phase transformer:** sirf naam; zyada detail aage ki class mein.

---

## Part G: RCCB ka raaz: net field

Chapter 8 mein RCCB ke kaam ko sirf bataya tha: wo live aur neutral ke current ka farak dekhta hai aur lagbhag 30 mA ya zyada par supply kaat deta hai ([household-circuits-part2.md](../household-circuits/household-circuits-part2.md)). Ab wahi "kaise dekhta hai" transformer ke idea se samjhte hain.

RCCB ke andar live aur neutral dono taar ek ring (core) ke beech se guzarte hain. Is ring par ek **sense coil** lapeti hoti hai. Normal halat mein live mein jitna current aage jaata hai, neutral mein utna hi peechhe aata hai, aur dono ulti disha mein hain. Ulti dishaon ke barabar current ke field **ek doosre ko kaat dete hain**: **net field = 0**. Sense coil ko koi badalta field nahi milta, to uske sire par voltage zero.

```
A: koi leak nahi

LIVE    4.00 A  ---->-----(##)---->---[ appliance ]
                          (##)
NEUTRAL 4.00 A  ----<-----(##)----<---[ appliance ]
                      ring + sense coil

ring ke andar dono current barabar aur ulte: net field = 0, koi voltage nahi

B: leak hai

LIVE    4.00 A  ---->-----(##)---->---[ appliance ]
                          (##)              ↓  50 mA: body se zameen ki taraf
NEUTRAL 3.95 A  ----<-----(##)----<---[ appliance ]
                      ring + sense coil

ring ke andar 4.00 A aage, 3.95 A peeche: 50 mA ka net current bacha
AC hai: net field badalta hai, sense coil mein voltage, switch trip
```

> **Figure 5.5** – RCCB ka sense-ring. A: live mein 4.00 A aage aur neutral mein 4.00 A peeche: ring ke andar net current zero, net field zero. B: kuch current body se zameen ko chala jaata hai, to neutral mein 3.95 A hi lautta hai: ring ke andar 4.00 A − 3.95 A = 50 mA ka net current bacha, jo AC hone se badalta net field banata hai aur sense coil mein voltage induce karta hai.

Leak hone par kuch current body ya zameen ke raaste wapas jaata hai, to neutral ka current kam hota hai. Ab ring ke andar ulte current barabar nahi, **net field** bacha, aur AC hone se wo net field badalta hai. Transformer jaisa hi: badalta field sense coil mein voltage induce karta hai, aur ye voltage ek chhote relay (electromagnet switch, Class 9) ko chalaata hai jo supply kaat deta hai.

### Example 7: Kya RCCB trip hoga?

**Given:** Ek RCCB lagbhag 30 mA par trip karta hai (Chapter 8). Ek appliance ke live mein 2.65 A aage jaata hai aur neutral mein 2.58 A wapas aata hai.
**Find:** Net current aur kya RCCB trip hoga?
**Formula:** Net current = live current − neutral current; trip tab jab net ≥ 30 mA.
**Substitution:** Net = 2.65 A − 2.58 A = 0.07 A = 70 mA.
**Answer:** 70 mA > 30 mA, to RCCB **trip karega**.
**Jaanch:** 70 mA ÷ 30 mA = 2.3 guna zyada ✅. Aur agar neutral 2.64 A hota to net 10 mA hota, aur RCCB trip na karta ✅.

---

## Safe activities

- **Ghar par adult ke saath:** apne phone ya laptop charger ka label padho (kholna nahi): INPUT ka voltage aur OUTPUT ka voltage likho, aur dekho ki kaun sa bada hai. Phir ek ratio likho: input voltage ÷ output voltage.
- **Kaagaz par:** ek chart banao jisme teen transformer ke naam (doorbell, charger, pole transformer) aur unke input aur output voltage hon, aur har ke liye step-up ya step-down likho.
- **School mein teacher ke saath, sirf dekhne ke liye:** do coil wala demo (Part B ka teacher demo). Mains par kabhi nahi.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Step-up transformer zyada power deta hai."**
Demonstration: Ek ideal transformer ki primary 8 V par 2.5 A leti hai: P_in = 8 V × 2.5 A = 20 W. N_p = 100, N_s = 500, to V_s = 8 V × 500 ÷ 100 = 40 V. Power in = power out, to I_s = 20 W ÷ 40 V = 0.5 A. Voltage 5 guna ho gaya, par current 5 guna **kam**: 40 V × 0.5 A = 20 W, wahi power. Asli transformer mein to garmi mein thodi power jaati hai, to output **kam** hoti hai, kabhi zyada nahi. Voltage ka badhna power ka badhna nahi hai: jaise lever mein ek sire par force kam lagta hai par us sire ko door tak chalna padta hai, kaam (energy) wahi rehta hai.

**Galti 2: "Transformer battery par bhi chal jaata hai."**
Demonstration: Unnati ne socha ki 7.5 V ki battery ko primary se jodkar secondary se 75 V mil jaayega (agar N_s = 10 N_p). Par battery ka current tay hai, to field tay hai, aur badlav ke bina koi voltage induce nahi hota. Sirf switch dabate waqt ek chhota pulse aata hai, phir secondary shant. Aur lagatar DC par primary garm bhi ho sakti hai. Isliye transformer ko **badalta current**, yaani AC chahiye: yahi AC ka bada fayda hai (Topic 4).

---

## Quick Recap

- Transformer: closed laminated soft-iron core par do coil (primary supply se, secondary load se), dono ke beech taar ka koi jod nahi.
- Kaam: primary ka AC badalta field banata hai, jo secondary mein voltage induce karta hai (mutual induction, Topic 3 ka Lenz bhi saath).
- Sirf AC par: tay DC mein field nahi badalta, secondary mein voltage nahi; sirf switch ke waqt ek pulse.
- V_s ÷ V_p = N_s ÷ N_p. N_s > N_p: step-up; N_s < N_p: step-down.
- Ideal transformer: V_p I_p = V_s I_s. Voltage jis taraf zyada, current us taraf kam. Transformer power paida nahi karta.
- Asli transformer mein copper loss (I² R), eddy-current loss (laminated core se kam), hysteresis loss (soft iron). efficiency = (P_out ÷ P_in) × 100 percent. Bade transformer lagbhag 98 se 99 percent, chhote charger aksar lagbhag 80 se 90 percent.
- Bada transformer tel se thanda; core ki gungunahat lagbhag 100 Hz.
- RCCB: live aur neutral ke ulte, barabar current ka net field zero; leak par net field badalta hai, sense coil mein voltage banta hai, switch trip.
- Charger, adapter ya transformer kabhi mat kholo; mains se do coil wala koi bhi demo nahi.

---

## Practice Questions

1. A transformer has 400 turns on its primary and 2200 turns on its secondary. The primary is connected to a 22 V AC supply and the secondary supplies a current of 0.62 A. Assume it is ideal. Find the secondary voltage, the primary current and the power delivered. Is it step-up or step-down?

2. A transformer has 1500 turns on the primary and 60 turns on the secondary. The primary is connected to 230 V AC. Find the secondary voltage and state whether it is step-up or step-down.

3. A doll-house lamp needs 12 V AC. It is to be run from a 230 V AC supply through a transformer whose primary has 3450 turns. How many turns must the secondary have?

4. A small radio needs 9 V from a 230 V supply. If the primary has 2760 turns, how many turns must the secondary have? What is the ratio N_s ÷ N_p, written as a decimal?

5. A charger-type transformer must give 3 V from a 230 V supply and its secondary has 18 turns. How many turns must the primary have?

6. A phone charger gives 5 V at 1.2 A and has an efficiency of 85 percent. It is plugged into a 230 V supply. Find its output power, its input power, the current drawn from the supply, and the power lost as heat.

7. A transformer takes 3200 W from the supply and delivers 3136 W to its load. Find its efficiency and the power lost as heat. Name three kinds of loss that together make up this heat.

8. A pole transformer lowers the voltage from 11 kV to 415 V. Find the ratio N_p ÷ N_s. If its secondary has 166 turns, how many turns does the primary have? Is it step-up or step-down? (Use 11 kV = 11 000 V.)

9. A step-up transformer raises 25 V AC to 350 V AC. The secondary current is 0.18 A. Assuming it is ideal, find the ratio N_s ÷ N_p, the power delivered and the primary current.

10. A step-down transformer changes 230 V to 16 V to run a 56 W lamp. Assuming it is ideal, find the current in the secondary and in the primary. In which coil should the thicker wire be used, and why?

11. Two coils are wound in the same way on the two legs of a closed iron core, as in Figure 5.2. Seen from above, the current in the primary flows clockwise and is decreasing. Find the direction of the induced current in the secondary, seen from above, and state which end (top or bottom) of the secondary acts as a north pole. Check by a second method.

12. Say whether each statement is true or false, giving a reason. (a) A 4.5 V battery connected to the primary keeps a steady voltage on the secondary all the time. (b) A step-up transformer gives a larger current in its secondary than in its primary. (c) Making the core from thin, insulated sheets reduces the heating of the core. (d) An ideal transformer delivers as much power as it takes in.

13. Match each loss with a way of reducing it: copper loss, eddy-current loss, hysteresis loss, overall heating of a large transformer. (Ways: soft-iron core, oil cooling, thicker wire, laminated core.)

14. An RCCB trips when the live and neutral currents differ by 30 mA or more. For appliance A the live current is 1.84 A and the neutral current is 1.825 A. For appliance B the live current is 6.30 A and the neutral current is 6.21 A. Will the RCCB trip for each? In a third case a person touches live and neutral wires at the same time. Why may the RCCB not trip, even though it is dangerous?

### Answers

1. **Given:** N_p = 400, N_s = 2200, V_p = 22 V, I_s = 0.62 A. **Find:** V_s, I_p, P. **Formula:** V_s = V_p × N_s ÷ N_p; V_p I_p = V_s I_s. **Substitution:** V_s = 22 V × 2200 ÷ 400 = 121 V. P = 121 V × 0.62 A = 75.02 W. I_p = 75.02 W ÷ 22 V = 3.41 A. **Answer:** V_s = 121 V, P ≈ 75.0 W, I_p = 3.41 A; N_s > N_p, to **step-up**. **Jaanch:** I_p ÷ I_s = 3.41 ÷ 0.62 = 5.5 = N_s ÷ N_p = 2200 ÷ 400 ✅.

2. V_s = 230 V × 60 ÷ 1500 = **9.2 V**. N_s < N_p, to **step-down**. **Jaanch:** 1500 ÷ 60 = 25, aur 230 V ÷ 9.2 V = 25 ✅.

3. **Formula:** N_s = N_p × V_s ÷ V_p. N_s = 3450 × 12 V ÷ 230 V = 3450 × 0.05217 = **180 turns**. **Jaanch:** 230 V × 180 ÷ 3450 = 12 V ✅ (3450 ÷ 180 = 19.17 aur 230 ÷ 12 = 19.17 ✅).

4. N_s = 2760 × 9 V ÷ 230 V = **108 turns**. Ratio N_s ÷ N_p = 108 ÷ 2760 = **0.0391**. **Jaanch:** 9 V ÷ 230 V = 0.0391 ✅; 230 V × 108 ÷ 2760 = 9 V ✅.

5. N_p = N_s × V_p ÷ V_s = 18 × 230 V ÷ 3 V = **1380 turns**. **Jaanch:** 230 V × 18 ÷ 1380 = 3 V ✅.

6. **Given:** V_out = 5 V, I_out = 1.2 A, efficiency 85 percent, V_in = 230 V. **Find:** P_out, P_in, I_in, loss. **Formula:** P = V I; P_in = P_out ÷ efficiency; I_in = P_in ÷ V_in. **Substitution:** P_out = 5 V × 1.2 A = 6.0 W. P_in = 6.0 W ÷ 0.85 = 7.06 W. I_in = 7.06 W ÷ 230 V = 0.0307 A ≈ 30.7 mA. Loss = 7.06 W − 6.0 W = 1.06 W. **Answer:** P_out = 6.0 W, P_in ≈ 7.06 W, I_in ≈ 30.7 mA, heat ≈ 1.06 W. **Jaanch:** 0.85 × 7.06 W = 6.0 W ✅; 230 V × 0.0307 A = 7.06 W ✅. (Ye input current output current 1.2 A se bahut kam hai, jaisa Part D ne bataya tha.)

7. efficiency = 3136 W ÷ 3200 W × 100 = **98 percent**. Loss = 3200 W − 3136 W = **64 W**. Teen loss: copper loss (coil ke taar mein I² R), eddy-current loss (core mein), hysteresis loss (core ki magnetism ulti karne mein). **Jaanch:** 0.98 × 3200 W = 3136 W ✅; ye bade transformer ke lagbhag 98 se 99 percent ke daayre mein hai ✅.

8. N_p ÷ N_s = V_p ÷ V_s = 11 000 V ÷ 415 V = **26.5**. N_p = 166 × 26.506 = **4400 turns** (4400 ÷ 166 = 26.506). N_p > N_s, to **step-down**. **Jaanch:** 11 000 V × 166 ÷ 4400 = 415 V ✅.

9. **Given:** V_p = 25 V, V_s = 350 V, I_s = 0.18 A. N_s ÷ N_p = V_s ÷ V_p = 350 V ÷ 25 V = **14**. P = 350 V × 0.18 A = **63 W**. I_p = 63 W ÷ 25 V = **2.52 A**. **Jaanch:** I_p ÷ I_s = 2.52 ÷ 0.18 = 14 ✅; 25 V × 2.52 A = 63 W ✅.

10. I_s = 56 W ÷ 16 V = **3.5 A**. I_p = 56 W ÷ 230 V = **0.243 A** (lagbhag 0.24 A). Moti taar **secondary** (kam voltage, zyada current) mein chahiye, kyunki bade current par copper loss I² R bada hota hai aur moti taar ka resistance kam hota hai. **Jaanch:** 16 V × 3.5 A = 56 W ✅; 230 V × 0.243 A = 55.9 W ≈ 56 W ✅; current ka ratio 3.5 ÷ 0.243 = 14.4 = 230 ÷ 16 ✅.

11. Primary mein current upar se dekhne par clockwise: grip rule se anguutha **DOWN**, to left taang mein field DOWN aur **ghat raha** hai. Core mein field is liye anticlockwise (samne se) ghoomta hai: left taang mein DOWN, neeche wali patti mein left se right, right taang mein UP, upar wali patti mein right se left. Right taang (secondary) mein core ka field **UP** aur ghat raha hai. Lenz ke hisaab se induced current ghatne ka virodh karega, yaani field UP ko **banaye rakhega**: induced field UP. Grip rule se anguutha UP, to ungliyan upar se dekhne par **anticlockwise**. **Answer:** secondary mein current **anticlockwise** (upar se dekhne par); **upar wala sira N**. **Jaanch (doosra tareeka):** Right taang mein UP field wala jaise neeche ek N pole ho jo door ja raha ho. Lenz ke hisaab se jaate pole ko rokne ke liye near (neeche wala) sira **S** banega, to uske saamne wala upar wala sira **N** ✅, jo coil ke andar field UP se milta hai ✅.

12. (a) **False** ❌. Battery ka current tay hai, field tay hai, to secondary mein koi voltage nahi (sirf switch dabate waqt ek chhota pulse). (b) **False** ❌. Step-up mein secondary ka voltage zyada, to current kam (V_p I_p = V_s I_s). (c) **True** ✅. Patli, insulated sheets eddy current ke loop chhote kar deti hain, to core ka heating kam. (d) **True** ✅ (ideal transformer mein koi loss nahi, power in = power out).

13. Copper loss: **thicker wire**. Eddy-current loss: **laminated core**. Hysteresis loss: **soft-iron core**. Bade transformer ki overall garmi: **oil cooling**. **Jaanch:** Part E ki table se milaya ✅.

14. Appliance A: net = 1.84 A − 1.825 A = 0.015 A = **15 mA** < 30 mA: **trip nahi karega**. Appliance B: net = 6.30 A − 6.21 A = 0.09 A = **90 mA** > 30 mA: **trip karega**. Teesra case: agar insaan ek haath se live aur doosre se neutral chhoota hai, to current live se insaan mein jaakar neutral se lautta hai: ring ke andar se guzarne wala live aur neutral ka current **barabar** rehta hai, net field zero, to RCCB ko farak nahi dikhta aur wo trip nahi karta, jabki insaan ke liye ye khatarnaak hai. **Jaanch:** 15 mA < 30 mA aur 90 mA > 30 mA ✅; RCCB sirf farak dekhta hai (Chapter 8 ka honest note) ✅.

---

Unnati ne label wapas padha: INPUT 230 V, OUTPUT 5 V. "Ab ye do number mere liye ek kahani hain, Mama: do coil, ek core, badalta field, aur ek ratio. Aur power? Wo to bas bachti hai, banti nahi." Mama ne sar hilaya. "Aur jis din koi kahe ki transformer se zyada bijli nikalti hai, to usse poochna ki current kahan gaya." Tum bhi ab kisi bhi transformer ko dekh kar pooch sakte ho: step-up ya step-down, kitne pher, aur current kis taraf zyada.

**Aage ka sawaal (Topic 6):** Ab tak ek-ek idea alag-alag seekha: field, force, induction, AC, transformer. Par kaun sa rule kab lagta hai: grip rule, left hand, right hand ya Lenz? Topic 6 mein sab kuch ek nakshe mein jodenge, mile-jule sawaal hal karenge aur poore chapter ka saar banayenge.
