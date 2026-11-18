# Chapter: Current Electricity II: Cells, Networks and Real Components (Part 4)

> **Class:** 10 | **Subject:** Physics
> **Ye file [current-electricity-ii-part3.md](current-electricity-ii-part3.md) se aage chalti hai** (wahan resistors ke jaal: symmetry, balanced bridge aur divider). Chapter ki shuruaat: [current-electricity-ii.md](current-electricity-ii.md). Recall ke liye: R = ρ l ÷ A, resistivity ki table, taar kheenchna aur bulb ka V-I graph [electricity-part4.md](../../../class9/physics/electricity/electricity-part4.md); series aur parallel [electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md).
> **Topics covered in this file:**
> 4. Taar Aur Resistor: Resistivity, Temperature Aur Colour Code

---

# Topic 4: Taar Aur Resistor: Resistivity, Temperature Aur Colour Code

Topic 3 mein humne resistors ke ulajhe jaal ko symmetry, equal potential points aur divider se saaf karna seekha. Wahan har resistor ek **diya hua number** tha: 9 Ω, 12 Ω, 40 Ω, 3.3 kΩ. Par ye number aata kahan se hai? Ek taar ka R kis cheez se banta hai, garm hone par kya hota hai, aur ek chhote resistor par rangeen patliyan kyun bani hoti hain? Aaj resistor ke andar jhaankenge.

---

## Londhe Mama ki dukaan

Mr. Londhe ki bijli ki dukaan mein chhutti ke din unka bhanja Siddharth baitha tha. Dukaan mein teen cheezein Siddharth ka dhyan kheench rahi thi. Pehli: taaron ke bade spool, jinmein moti copper ki taar aur ek patli, chamakdaar nichrome ki taar thi. Doosri: ek thaili, jisme saikdon chhote **rangeen patliyon wale** daane (resistors) bhare the. Teesri: glass ke case mein ek digital fever thermometer, jiski nok par ek chhota sa kaala **bead** laga tha.

"Mama," Siddharth ne ek daana uthaya, "isme chaar rang ki patliyan hain, aur ek thaili mein sab daane alag-alag lagte hain. Ye batata kaise hai ki isme kitna Ω hai? Aur thermometer ki nok par ye daana kya naapta hai?" Tabhi ek customer aaya, "Bhaiya, taar thoda chhota pad raha hai, kheench ke lamba kar loon to bas double resistance hoga na?" Mama muskuraye, "Teeno sawal ek hi jagah ke hain: taar, uska resistance, aur garmi. Aao, ek-ek karke kholte hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Cold resistance, hot resistance** | Filament ka resistance bina chalaye (thanda) aur poori chamak par (bahut garm). Bulb mein hot lagbhag 10 se 15 guna cold | Ek lamp: 4 Ω thanda, 48 Ω garm |
| **Thermistor (NTC)** | Ek chhota semiconductor component jiska resistance temperature badhne par tezi se ghatta hai | Fever thermometer ka bead |
| **LDR** | Light Dependent Resistor: roshni padne par uska resistance ghat jaata hai | Street light ka sensor |
| **Critical temperature (T_c)** | Wo temperature jiske neeche superconductor ka resistance bilkul zero ho jaata hai | Common metals ke liye kuch kelvin |
| **Carbon resistor** | Carbon se bana chhota cylinder jisme tay resistance hota hai | Dukaan ki thaili ke daane |
| **Colour band** | Resistor par bani rangeen patli; rang ek number batata hai | Orange = 3 |
| **Multiplier band** | Teesri patli: pehle do digits ke baad kitne zero lagane hain (rang ke number jitne zero) | Brown = 1 zero lagao, yaani × 10 |
| **Tolerance** | Resistor ki likhi value aur asli value ke beech ka sambhav farak, percent mein | Gold: ± 5 percent |
| **Slider** | Rheostat ka sarakne wala sampark, jo coil par kisi bhi jagah ko chhoo sakta hai | Rheostat ka teesra terminal |

---

## Class 9 ka recall

Class 9 mein taar ka resistance R = ρ l ÷ A mila tha, aur ρ (resistivity) padarth ka apna gun hai ([electricity-part4.md](../../../class9/physics/electricity/electricity-part4.md)). Wahan Example 8 mein taar ko double lamba kheencha to R 3 Ω se 12 Ω, yaani **4 guna** hua tha. Aaj hum use sirf double nahi, kisi bhi n guna ke liye ek niyam mein badlenge. Is chapter mein hum ye resistivities hi use karenge (lagbhag, 20 °C par): copper 1.7 × 10⁻⁸ Ω m, aluminium 2.8 × 10⁻⁸ Ω m, nichrome 1.1 × 10⁻⁶ Ω m, graphite (carbon) lagbhag 3.5 × 10⁻⁵ Ω m. Ye bhi yaad rahe: Class 9 mein bulb ka filament non-ohmic tha, aur temperature ke saath metals ka R badhna aur semiconductors ka R ghatna shabdon mein aaya tha. Aaj usi ko graphs aur numbers dengi.

---

## Part A: Taar kheenchna aur kaatna

### Kheencho to R n² guna kyun

Taar ko kheench kar lamba karte hain to **maal (volume) wahi rehta hai**: kuch naya nahi judta. Figure 4.1 mein 16 khane ke taar ko double lamba kheencha to area aadha ho gaya.

```
Pehle:  length 8 khane, area 2 khane       (kul maal = 16 khane)
        ########
        ########

Baad:   length 16 khane, area 1 khana      (kul maal = 16 khane)
        ################
```

> **Figure 4.1** – Volume = length × area wahi rehta hai. Length 2 guna hui to area aadha. (Resistivity ρ wahi maan rahe hain.)

Agar length n guna ho jaaye, to volume wahi rakhne ke liye area ek-n-th (A ÷ n) ho jaata hai. Tab R' = ρ (n l) ÷ (A ÷ n) = n² ρ l ÷ A, yaani:

> **Taar ko n guna lamba kheencho (volume wahi): R' = n² R.**

Length n guna karne se R n guna, aur area ek-n-th hone se R aur n guna: dono saath chalte hain.

### Example 1: Taar 4 guna kheencha

**Given:** R = 2.5 Ω, length 4 guna (volume wahi).
**Find:** Naya R'.
**Formula:** R' = n² R.
**Substitution:** R' = 4² × 2.5 Ω = 16 × 2.5 Ω = 40 Ω.
**Answer:** R' = 40 Ω.
**Jaanch:** Length 4 guna: 4 × 2.5 = 10 Ω. Area ek-chauthai: 4 guna aur: 10 × 4 = 40 Ω ✅. Unit: Ω ✅

### Example 2: Thoda sa kheencha

Customer ka taar kheench ke 10 percent lamba hua. R kitne percent badha?

**Given:** n = 1.1. **Find:** R' ÷ R. **Formula:** R' = n² R. **Substitution:** n² = 1.1 × 1.1 = 1.21. **Answer:** R' = 1.21 R, yaani **21 percent** badha.
**Jaanch:** Length 10 percent aur area lagbhag 9 percent kam (1 ÷ 1.1 = 0.909). 1.1 ÷ 0.909 = 1.21 ✅

### Taar kaato aur jodo

Ek taar ko n barabar tukdon mein kaato. Har tukde ka R = R ÷ n (length ek-n-th).

- **Sabko series mein jodo:** R_series = n × (R ÷ n) = R. Taar wahi ban gaya, to R wahi.
- **Sabko parallel mein jodo:** R_parallel = (R ÷ n) ÷ n = **R ÷ n²**.

Parallel wale ka reason: n tukde side by side rakhne se jaise **n guna mota** taar ban gaya, jiski length ek-n-th hai. Length ek-n-th ne R ko n guna ghataya, area n guna ne R ko n guna aur ghataya: R ÷ n².

```
         A                       B
  +-----------+-------/\/\/ r --------+-------------+
  :           :                       :             :
  :           +-------/\/\/ r --------+             :
  :           :                       :             :
  :           +-------/\/\/ r --------+             :
  :                                                 :
  +----------------- (-) ─┤├─ (+) ------------------+
```

> **Figure 4.2** – Ek taar ke teen barabar tukde (har ek ka R = r = R ÷ 3) A aur B ke beech parallel mein, cell ke saath poora closed loop. Kul R = r ÷ 3 = R ÷ 9. Cell ka + sira daayein, current + se nikal kar B par teen raaston mein batta aur A par phir milta hai.

### Example 3: 45 Ω ka taar, 5 tukde

**Given:** R = 45 Ω, n = 5 barabar tukde.
**Find:** Har tukde ka R, series mein kul R, parallel mein kul R.
**Formula:** Har tukda = R ÷ n; series = n × tukda; parallel = tukda ÷ n.
**Substitution:** Tukda = 45 Ω ÷ 5 = 9 Ω. Series = 5 × 9 Ω = 45 Ω. Parallel = 9 Ω ÷ 5 = 1.8 Ω.
**Answer:** 9 Ω, 45 Ω, 1.8 Ω.
**Jaanch:** R ÷ n² = 45 ÷ 25 = 1.8 Ω ✅. Parallel ka R sabse chhote tukde (9 Ω) se bhi chhota hai ✅

---

## Part B: Kaun sa taar kahan

Ek hi R ke liye alag padarth ya alag mote taar alag kaam ke hote hain. Ratio method: jo cheezein same hain unhe kaat do, bacha hua ratio dekho.

### Example 4: Copper ki jagah aluminium

Copper ke ek lead ka area 1.5 mm² hai. Usi length aur usi R ka aluminium lead banana hai. Area kitna chahiye?

**Given:** ρ_Cu = 1.7 × 10⁻⁸ Ω m, ρ_Al = 2.8 × 10⁻⁸ Ω m, A_Cu = 1.5 mm², l aur R same.
**Find:** A_Al.
**Formula:** R = ρ l ÷ A, l aur R same, to ρ ÷ A same: A_Al = A_Cu × (ρ_Al ÷ ρ_Cu).
**Substitution:** A_Al = 1.5 mm² × (2.8 ÷ 1.7) = 1.5 × 1.647 mm² = 2.47 mm².
**Answer:** Lagbhag 2.47 mm², yaani aluminium ka lead lagbhag 1.65 guna mota.
**Jaanch:** ρ ÷ A: copper 1.7 ÷ 1.5 = 1.133, aluminium 2.8 ÷ 2.47 = 1.134 ✅

### Example 5: Heater ka element aur uska lead

Ek hi length 1.2 m aur area 0.25 mm² ke do taar hain: nichrome aur copper. Dono mein 4 A current jaye to kitna R aur kitni garmi (power) har ek mein banegi?

**Given:** l = 1.2 m, A = 0.25 mm² = 2.5 × 10⁻⁷ m², I = 4 A.
**Find:** R aur P = I² R dono taaron ke liye.
**Formula:** R = ρ l ÷ A, P = I² R (Class 9).
**Substitution:** R_nichrome = 1.1 × 10⁻⁶ Ω m × 1.2 m ÷ 2.5 × 10⁻⁷ m² = 5.28 Ω. R_copper = 1.7 × 10⁻⁸ × 1.2 ÷ 2.5 × 10⁻⁷ = 0.0816 Ω. P_nichrome = 4² × 5.28 = 84.5 W. P_copper = 16 × 0.0816 = 1.31 W.
**Answer:** Nichrome: 5.28 Ω aur lagbhag 84.5 W. Copper: 0.0816 Ω aur lagbhag 1.31 W.
**Jaanch:** R ka ratio 5.28 ÷ 0.0816 = 64.7, aur P ka ratio 84.5 ÷ 1.31 = 64.5, barabar (R ke saath P seedha badhta hai, kyunki I same hai) ✅

Isliye heater ke element mein **nichrome** (ρ bahut zyada, aur garm hone par bhi jaldi nahi jalta: Class 9), aur element tak current laane wali **lead mein copper ya aluminium** (R bahut kam, to lead mein garmi lagbhag nahi banti).

---

## Part C: Bulb ka filament: hot aur cold resistance

Class 9 mein bulb ka V-I graph mudta hua tha. Ab ek kalpanik 12 V, 3 W lamp ki readings (lagbhag) dekhte hain: kam voltage se shuru karke poore 12 V tak.

| V (V) | 0.4 | 2 | 6 | 12 |
|---|---|---|---|---|
| I (A) | 0.10 | 0.15 | 0.20 | 0.25 |

```
V (V)
12 :                                                  O
   :                                                **
   :                                              **
 9 :                                             *
   :                                           **
   :                                         **
 6 :                                       *O
   :                                     **
   :                                  ***
 3 :                                **
   :                           ***O*
   :                     ******
 0 :********************O
   +---------------------------------------------------->  I (A)
                       0.10      0.15      0.20      0.25
```

> **Figure 4.3** – Lamp ka V-I graph (V upar, I side mein; O chaaron readings hain). Line kam V par lagbhag seedhi hai (thanda filament), phir upar mudti hai: current V ke saath utna nahi badhta, kyunki filament garm ho kar R badha leta hai.

### Example 6: Har reading par R

**Given:** Upar ki table.
**Find:** R = V ÷ I har reading par, aur hot ÷ cold.
**Formula:** R = V ÷ I.
**Substitution:** 0.4 V ÷ 0.10 A = 4 Ω. 2 V ÷ 0.15 A = 13.3 Ω. 6 V ÷ 0.20 A = 30 Ω. 12 V ÷ 0.25 A = 48 Ω.
**Answer:** R = 4, 13.3, 30, 48 Ω. Hot ÷ cold = 48 ÷ 4 = **12**.
**Jaanch:** Rated power P = V I = 12 V × 0.25 A = 3 W ✅ (lamp 3 W ka hai). Ratio 12, jo bulbon ke "lagbhag 10 se 15 guna" ke daayre mein hai ✅

Isse ek baat nikalti hai: **cold resistance se hot resistance ka andaza nahi lagana**. Multimeter se thande bulb ka R naapo to chhota aayega. Aur isi wajah se bulb ki rated power nikalne ke liye R = V² ÷ P ya V ÷ I **poori chamak par** use hota hai (Topic 5). Ek aur sachchai: switch dabate waqt filament abhi thanda hota hai, to bahut kam der ke liye current rated se kai guna zyada hota hai (Practice Question 12 mein dekhna).

---

## Part D: Temperature, thermistor, LDR aur superconductor

Temperature ke saath R kaise badalta hai, ye teen tarah ke padarthon mein alag hai. Figure 4.4 mein teeno ke graphs hain (R upar, T neeche).

```
  (a) Dhaatu                 (b) Thermistor             (c) Superconductor
  R                          R                          R
  :                 **       : *                        :
  :              ***         :  **                      :                  *
  :           ***            :    **                    :                **
  :         **               :      ***                 :              **
  :      ***                 :         **               :            **
  :   ***                    :           ****           :           *
  : **                       :               ****       : **********
  +--------------------> T   +--------------------> T   +--------------------> T
                                                                   Tc
```

> **Figure 4.4** – (a) Dhaatu: T badhne par R badhta hai. (b) Thermistor: T badhne par R tezi se ghatta hai. (c) Superconductor: T_c ke neeche R bilkul zero, uske upar saamaanya dhaatu jaisa.

- **Dhaatu (copper, tungsten):** atoms garm hone par zyada hilte hain, to electrons ka raasta zyada ruk-ruk kar hota hai: R badhta hai.
- **Semiconductor aur thermistor:** garmi se zyada charge carriers (current ko le jaane wale kan) chhoot jaate hain, to R ghatta hai. **Thermistor (NTC)** isi gun ka chhota component hai jisme ye ghatna bahut tez hota hai.
- **Superconductor:** T_c ke neeche R **bilkul zero**. Common metals ke liye T_c kuch kelvin hota hai; kuch "high-temperature" superconductors ka T_c lagbhag 100 K hai (kelvin mein, lagbhag −173 °C). MRI machine ke bade magnets mein ye kaam aate hain.

### Fever thermometer ka bead

Thermometer ki nok par thermistor hai. Chhoti cell (jo thermometer ke andar hai) ke saath ek current-meter jaisa circuit uske R se judta hai. Bachche ko bukhar hai to bead garm hota hai, R girta hai, current badhta hai, aur circuit current se temperature ka number banata hai.

```
  +----------(A)---/\/\/ thermistor --------------+
  :                                               :
  :                                               :
  +---------------- (-) ─┤├─ (+) -----------------+
```

> **Figure 4.5** – Thermistor ka simple circuit: cell, ammeter (A) aur thermistor series mein, poora closed loop. Garm hone par thermistor ka R girta hai aur ammeter ki reading badhti hai.

### Example 7: Thermistor ka current

Ek thermistor (kalpanik) ka R kamre ke temperature par 10 kΩ aur sharir ke temperature par 6.5 kΩ hai. 3 V ki cell se kitna current?

**Given:** V = 3 V (cell ka r chhoda), R₁ = 10 kΩ = 10 000 Ω, R₂ = 6.5 kΩ = 6500 Ω.
**Find:** I₁ aur I₂.
**Formula:** I = V ÷ R.
**Substitution:** I₁ = 3 V ÷ 10 000 Ω = 3 × 10⁻⁴ A = 0.30 mA. I₂ = 3 V ÷ 6500 Ω = 4.6 × 10⁻⁴ A = 0.46 mA.
**Answer:** 0.30 mA kamre ke temperature par, 0.46 mA sharir ke temperature par.
**Jaanch:** R 35 percent kam hua (6.5 ÷ 10 = 0.65), to current 1 ÷ 0.65 = 1.54 guna: 0.30 × 1.54 = 0.46 ✅

### LDR aur street light

**LDR** ka R andhere mein kuch MΩ aur tez roshni mein kuch sau Ω tak (lagbhag) hota hai, kyunki roshni se charge carriers chhoot jaate hain. Street light ke switch mein aksar LDR ya aisa light sensor hota hai: shaam ko R bada, current kam, light ON.

### Example 8: LDR ka current

Ek LDR (kalpanik) ka R andhere mein lagbhag 2 MΩ aur tez roshni mein lagbhag 300 Ω hai. 6 V ki cell ke saath current?

**Given:** V = 6 V, R_dark = 2 × 10⁶ Ω, R_light = 300 Ω.
**Formula:** I = V ÷ R.
**Substitution:** I_dark = 6 ÷ (2 × 10⁶) = 3 × 10⁻⁶ A = 3 μA. I_light = 6 ÷ 300 = 0.02 A = 20 mA.
**Answer:** 3 μA andhere mein, 20 mA roshni mein. Ratio 20 × 10⁻³ ÷ 3 × 10⁻⁶ = lagbhag 6700.
**Jaanch:** R ka ratio 2 × 10⁶ ÷ 300 = 6667, wahi ratio current ka (ulta) ✅

**School mein teacher ke saath:** multimeter ko resistance range par thermistor se jodo (koi cell nahi, sirf meter). Pehle kamre ka reading likho, phir thermistor ko thode gunguna paani (haath ko achha lage utna garm, kabhi ubalta nahi) ke cup mein rakho: reading girti dikhegi.

---

## Part E: Carbon resistor aur colour code

Carbon ki resistivity (lagbhag 3.5 × 10⁻⁵ Ω m) copper se lagbhag 2000 guna hai, aur carbon sasta bhi hai. Isliye carbon se (aksar ek patli film ke roop mein) chhote cylinder ke andar kΩ aur MΩ tak ke resistors aasaani se bante hain. Itne chhote daane par number likhna mushkil hai, to **rang** likhte hain.

```
          1     2     3              4
  ------( #     #     #              #     )--------
          :     :     :              :
          :     :     :              +-- tolerance (gold ya silver)
          :     :     +-- multiplier (kitne zero)
          :     +-- doosra digit
          +-- pehla digit
```

> **Figure 4.6** – Chaar band wala carbon resistor. Pehle teen band paas-paas, chautha thoda alag. Padhna us side se shuru karo jo chautha band se door hai.

| Rang | Digit | Rang | Digit |
|---|---|---|---|
| Black | 0 | Green | 5 |
| Brown | 1 | Blue | 6 |
| Red | 2 | Violet | 7 |
| Orange | 3 | Grey | 8 |
| Yellow | 4 | White | 9 |

Teesre band ke liye wahi rang batate hain ki pehle do digits ke baad **kitne zero** lagane hain (black 0 zero, brown 1 zero, red 2 zero...). Chautha band tolerance: **gold ± 5 percent, silver ± 10 percent**.

### Example 9: Resistor padho

Bands: red, violet, orange, gold.

**Given:** Red = 2, violet = 7, orange = 3, gold = ± 5 percent.
**Find:** R aur uski range.
**Formula:** R = (do digit) × 10 ki power (teesra band), range = R ± tolerance.
**Substitution:** Do digit 27, teesra band 3 yaani × 10³. R = 27 × 10³ Ω = 27 kΩ. 5 percent of 27 kΩ = 1.35 kΩ.
**Answer:** 27 kΩ ± 5 percent, yaani asli value 25.65 kΩ se 28.35 kΩ ke beech.
**Jaanch:** 27 000 × 0.95 = 25 650 Ω aur 27 000 × 1.05 = 28 350 Ω ✅

### Example 10: Number se rang

3.9 kΩ ka resistor, ± 10 percent. Bands batao.

**Given:** R = 3.9 kΩ = 3900 Ω, tolerance 10 percent.
**Formula:** R = (do digit) × 10 ki power.
**Substitution:** 3900 = 39 × 10². Pehla digit 3 = orange, doosra digit 9 = white, teesra band: 2 zero = red, tolerance 10 percent = silver.
**Answer:** Orange, white, red, silver.
**Jaanch:** Wapas padho: 39 × 10² = 3900 Ω ✅

**Ghar par adult ke saath:** ek alag, khula resistor lo (school lab ya electrician ki dukaan se; kisi radio, adapter ya appliance ko kholna mana hai; koi battery ya mains nahi). Pehle rang padh kar R nikalo, phir multimeter se naapo, aur dekho ki reading tolerance ke andar hai.

---

## Part F: Rheostat

Rheostat ek lamba coil hota hai jis par ek **slider** sarakta hai. Slider jahan rakho, wahan tak ke coil ki length mein hi current jaata hai, aur coil uniform hai, to **R usi length ke seedhe proportional** hai (R = ρ l ÷ A).

**1. Variable resistor ki tarah:** ek sira aur slider load ke series mein. Slider sarkane se circuit ka R badalta hai, current badalta hai.

### Example 11: Lamp dim karna

9 V ki supply, 18 Ω ka load (constant maanein) aur 0 se 30 Ω ka rheostat series mein. Current ki range?

**Given:** V = 9 V, R_load = 18 Ω, R_rh = 0 se 30 Ω.
**Find:** I_max, I_min aur load par minimum V.
**Formula:** I = V ÷ R_kul.
**Substitution:** I_max = 9 V ÷ (18 + 0) Ω = 0.50 A. I_min = 9 V ÷ (18 + 30) Ω = 0.1875 A. V_load,min = 0.1875 A × 18 Ω = 3.375 V.
**Answer:** 0.19 A se 0.50 A tak; load par kam se kam lagbhag 3.4 V.
**Jaanch:** Rheostat par 0.1875 × 30 = 5.625 V, aur 3.375 + 5.625 = 9 V ✅

**2. Divider ki tarah:** cell poore coil (A aur B) par, aur output slider C aur A ke beech. Topic 3 wala divider yahi hai, bas ab R_AC aur R_CB ratio slider ki **position** se tay hota hai.

```
              +-----------(V)-----------+
              :                         :
  +-----------+----/\/\//\/\/ R_AC -----+-/\/\//\/\//\/\/ R_CB -+
  :           A                         C                       :
  :                                                             :
  :                                                             :
  +----------------------- (-) ─┤├─ (+) ------------------------+
```

> **Figure 4.7** – Rheostat divider ki tarah: cell A aur B ke beech poore coil par. Voltmeter (V) A aur slider C ke beech parallel mein (uska + sira C ki taraf, kyunki B wala sira cell ka +). Bina load ke, voltmeter A se C tak ka hissa naapta hai.

### Example 12: Slider ko 40 percent par rakha

Poore coil ka R = 30 Ω, cell ka E = 9 V (r chhoda). Slider coil ki length ke 40 percent par A se.

**Given:** R_total = 30 Ω, V = 9 V, R_AC = 40 percent of 30 Ω.
**Find:** Voltmeter reading (voltmeter ko ideal maan kar).
**Formula:** V_out = I × R_AC, I = V ÷ R_total.
**Substitution:** R_AC = 0.4 × 30 = 12 Ω, R_CB = 18 Ω, I = 9 ÷ 30 = 0.30 A, V_out = 0.30 A × 12 Ω = 3.6 V.
**Answer:** 3.6 V.
**Jaanch:** V × (R_AC ÷ R_total) = 9 × 0.4 = 3.6 V ✅. Dono hisson ka V: 3.6 + 0.30 × 18 = 3.6 + 5.4 = 9 V ✅

(Is divider par load lagane se kya badalta hai, uska hisaab Topic 3 ka hai.)

---

## Wapas dukaan mein

Siddharth ke sawalon ke jawab ab ban gaye. Daane ke chaar rang: do digit, ek multiplier, ek tolerance. Thermometer ki nok ka bead: **thermistor**, jiska R garmi se tezi se girta hai. Aur customer ka taar: kheencha to R double nahi, 4 guna. Mama ne customer ko samjhaya ki kheenchne se taar patla bhi ho jaata hai, isliye sahi length ka naya taar lo.

---

## Aam galtiyan (bachke rehna)

1. **"Taar double lamba kheencha, to R double."** R **4 guna** hota hai (n² R). Demonstration: 1 m copper taar, area 1 mm² (= 10⁻⁶ m²): R = 1.7 × 10⁻⁸ × 1 ÷ 10⁻⁶ = 0.017 Ω. Kheench kar 2 m kiya, to area 0.5 mm² (5 × 10⁻⁷ m²): R = 1.7 × 10⁻⁸ × 2 ÷ 5 × 10⁻⁷ = 0.068 Ω. 0.068 ÷ 0.017 = 4 ✅, double (0.034 Ω) nahi.
2. **"Mota taar zyada resistance deta hai."** Mota taar mein current ko zyada raaste milte hain, to R **kam** hota hai (R ∝ 1 ÷ A). Demonstration: 2 m ke nichrome taar, ek ka area 0.2 mm² aur doosre ka 0.8 mm². R₁ = 1.1 × 10⁻⁶ × 2 ÷ 2 × 10⁻⁷ = 11 Ω. R₂ = 1.1 × 10⁻⁶ × 2 ÷ 8 × 10⁻⁷ = 2.75 Ω. Area 4 guna, R ek-chauthai: patla wala 11 Ω, mota wala 2.75 Ω.

---

## Quick Recap

- Taar n guna kheencho (volume wahi): length n guna, area ek-n-th, **R' = n² R**.
- Taar ko n barabar tukdon mein kaato: series mein R wahi, parallel mein **R ÷ n²**.
- Ratio method: R = ρ l ÷ A mein jo cheezein same hon unhe kaato. Copper ki jagah aluminium: area ρ_Al ÷ ρ_Cu guna.
- Heater ke liye **nichrome** (ρ bahut zyada), lead ke liye **copper ya aluminium** (ρ kam).
- Bulb ka hot R lagbhag cold R ka 10 se 15 guna; V-I graph mudta hai.
- Dhaatu: T badhe to R badhe. Thermistor (NTC): T badhe to R tezi se ghate. LDR: roshni mein R ghate. Superconductor: T_c ke neeche R = 0.
- Colour code: do digits, teesra multiplier (zero ki sankhya), chautha tolerance (gold 5 percent, silver 10 percent).
- Rheostat: R coil ki length ke proportional; variable resistor ya divider ki tarah.

---

## Practice Questions

(Use: copper 1.7 × 10⁻⁸ Ω m, aluminium 2.8 × 10⁻⁸ Ω m, nichrome 1.1 × 10⁻⁶ Ω m. Colour digits: black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9. Ignore a cell's internal resistance everywhere.)

1. Find the resistance of a copper wire 3.5 m long and of area 0.35 mm².
2. Find the resistance of an aluminium wire 2 m long and of area 0.14 mm².
3. A nichrome wire is 4.4 m long and has an area of 0.11 mm². Find its resistance, and the current when it is connected to a 22 V supply.
4. A wire of resistance 7 Ω is drawn into a longer wire three times its original length (volume unchanged). Find its new resistance.
5. A wire of resistance 15 Ω is stretched so that its length increases by 20 percent (volume unchanged). Find the new resistance and the percentage increase.
6. A wire of resistance 72 Ω is cut into 6 equal pieces. Find the resistance of each piece, and the resistance when all pieces are joined (a) in series, (b) in parallel.
7. A copper wire has an area of 2.4 mm². Find the area of an aluminium wire of the same length and same resistance.
8. A copper wire 1.8 m long and an aluminium wire 4.2 m long both have an area of 0.5 mm². Find the resistance of each and the ratio R_Al ÷ R_Cu.
9. Read each resistor and give its value and the range of its actual value: (a) orange, orange, brown, gold. (b) yellow, violet, red, silver. (c) green, blue, orange, gold. (d) brown, black, green, gold.
10. Give the first three colour bands and the tolerance band: (a) 680 Ω, ± 5 percent. (b) 82 kΩ, ± 10 percent. (c) 150 Ω, ± 5 percent.
11. A resistor with bands red, red, orange, gold is measured by a multimeter as 23.4 kΩ. Is it within its tolerance?
12. A 24 V filament lamp measures 4.8 Ω when cold and draws 0.45 A at its rated 24 V. Find its hot resistance, the hot ÷ cold ratio, and the current at the instant of switching on, when the filament is still cold.
13. A thermistor is in series with a 6 V cell and a milliammeter. The reading is 0.40 mA in a room, and 1.2 mA when the bead is in a cup of warm water. Find the resistance each time. Is it an NTC thermistor? Why?
14. An LDR is connected to a 5 V cell and an ammeter. Its resistance is 2.5 MΩ in the dark and 400 Ω in bright light. Find the current in each case.
15. A 7.5 V supply drives a 15 Ω lamp (assume constant) in series with a rheostat of 0 to 35 Ω. Find the maximum current, the minimum current and the lowest voltage across the lamp.
16. A uniform resistance wire 80 cm long is connected across a 7.2 V cell and used as a divider. The slider is 28 cm from end A. Find the voltmeter reading between A and the slider. At what distance from A will the reading be 4.5 V?
17. True or false, with one line of reason: (a) A thicker wire of the same length and material has less resistance. (b) Stretching a wire to double length doubles its resistance. (c) A thermistor in warm water has more resistance than in cold water. (d) A superconductor just below T_c has a very small but non-zero resistance. (e) A gold tolerance band means ± 5 percent.
18. Two wires of the same length and area, one nichrome and one aluminium, carry the same current. How many times more heat per second does the nichrome wire produce? Why is nichrome chosen for a heater coil and not for the lead?

### Answers

1. **Given:** l = 3.5 m, A = 0.35 mm² = 3.5 × 10⁻⁷ m², ρ = 1.7 × 10⁻⁸ Ω m. **Formula:** R = ρ l ÷ A. **Substitution:** R = 1.7 × 10⁻⁸ × 3.5 ÷ 3.5 × 10⁻⁷ = 0.17 Ω. **Answer:** 0.17 Ω.
   Jaanch: Unit Ω m × m ÷ m² = Ω ✅

2. A = 0.14 × 10⁻⁶ = 1.4 × 10⁻⁷ m². R = 2.8 × 10⁻⁸ × 2 ÷ 1.4 × 10⁻⁷ = 5.6 × 10⁻⁸ ÷ 1.4 × 10⁻⁷ = **0.40 Ω**.
   Jaanch: 0.40 × 1.4 × 10⁻⁷ ÷ 2 = 2.8 × 10⁻⁸ ✅

3. A = 1.1 × 10⁻⁷ m². R = 1.1 × 10⁻⁶ × 4.4 ÷ 1.1 × 10⁻⁷ = 10 × 4.4 = **44 Ω**. I = V ÷ R = 22 V ÷ 44 Ω = **0.50 A**.
   Jaanch: 0.50 A × 44 Ω = 22 V ✅

4. n = 3, R' = n² R = 9 × 7 Ω = **63 Ω**.
   Jaanch: length 3 guna = 21 Ω, area ek-tihai, 3 guna aur = 63 Ω ✅

5. n = 1.2. n² = 1.44. R' = 1.44 × 15 Ω = **21.6 Ω**. Badhat = 6.6 ÷ 15 = 0.44, yaani **44 percent**.
   Jaanch: 21.6 ÷ 15 = 1.44 ✅ (length ka 20 percent badhna R ko 44 percent badhata hai)

6. Har tukda = 72 ÷ 6 = **12 Ω**. (a) Series: 6 × 12 = **72 Ω**. (b) Parallel: 12 ÷ 6 = **2 Ω**.
   Jaanch: 72 ÷ 6² = 72 ÷ 36 = 2 Ω ✅

7. ρ ÷ A same: A_Al = 2.4 mm² × (2.8 ÷ 1.7) = 2.4 × 1.647 = **3.95 mm²**.
   Jaanch: ρ ÷ A: 1.7 ÷ 2.4 = 0.708 aur 2.8 ÷ 3.95 = 0.709 ✅

8. A = 5 × 10⁻⁷ m². R_Cu = 1.7 × 10⁻⁸ × 1.8 ÷ 5 × 10⁻⁷ = **0.0612 Ω**. R_Al = 2.8 × 10⁻⁸ × 4.2 ÷ 5 × 10⁻⁷ = **0.2352 Ω**. Ratio = 0.2352 ÷ 0.0612 = **3.84**.
   Jaanch: (2.8 ÷ 1.7) × (4.2 ÷ 1.8) = 1.647 × 2.333 = 3.84 ✅

9. (a) 33 × 10 = **330 Ω**, 5 percent = 16.5 Ω, range **313.5 Ω se 346.5 Ω**. (b) 47 × 10² = **4700 Ω = 4.7 kΩ**, 10 percent = 470 Ω, range **4230 Ω se 5170 Ω**. (c) 56 × 10³ = **56 kΩ**, 5 percent = 2.8 kΩ, range **53.2 kΩ se 58.8 kΩ**. (d) 10 × 10⁵ = 1 000 000 Ω = **1 MΩ**, 5 percent = 50 kΩ, range **0.95 MΩ se 1.05 MΩ**.
   Jaanch: (c) 56 000 × 0.95 = 53 200 aur × 1.05 = 58 800 ✅

10. (a) 680 = 68 × 10¹: blue, grey, brown, gold. (b) 82 000 = 82 × 10³: grey, red, orange, silver. (c) 150 = 15 × 10¹: brown, green, brown, gold.
    Jaanch: (b) grey 8, red 2, orange 3 zero: 82 000 Ω ✅

11. Red, red, orange = 22 × 10³ = 22 kΩ. 5 percent = 1.1 kΩ, range 20.9 kΩ se 23.1 kΩ. 23.4 kΩ is range se **bahar** hai, to tolerance ke andar **nahi**.
    Jaanch: 22 000 × 1.05 = 23 100 < 23 400 ✅

12. R_hot = 24 V ÷ 0.45 A = **53.3 Ω**. Ratio = 53.3 ÷ 4.8 = **11.1**. Switch-on par R = 4.8 Ω: I = 24 ÷ 4.8 = **5.0 A** (lagbhag 11 guna), jo filament garm hote hi ghat kar 0.45 A par aa jaata hai.
    Jaanch: 5.0 ÷ 0.45 = 11.1, R ke ratio ke barabar ✅

13. R_room = 6 V ÷ 0.40 × 10⁻³ A = **15 kΩ**. R_warm = 6 V ÷ 1.2 × 10⁻³ A = **5 kΩ**. Garm paani mein R girta hai, to **NTC** hai (temperature badhne par R ghata).
    Jaanch: 6 ÷ 15 000 = 0.40 mA aur 6 ÷ 5000 = 1.2 mA ✅

14. I_dark = 5 V ÷ 2.5 × 10⁶ Ω = 2 × 10⁻⁶ A = **2 μA**. I_bright = 5 V ÷ 400 Ω = **0.0125 A = 12.5 mA**.
    Jaanch: R ka ratio 2.5 × 10⁶ ÷ 400 = 6250, 12.5 mA ÷ 2 μA = 6250 ✅

15. I_max = 7.5 ÷ 15 = **0.50 A** (rheostat 0 Ω). I_min = 7.5 ÷ (15 + 35) = 7.5 ÷ 50 = **0.15 A**. V_lamp,min = 0.15 × 15 = **2.25 V**.
    Jaanch: Rheostat par 0.15 × 35 = 5.25 V, 2.25 + 5.25 = 7.5 V ✅

16. Coil ka length ke proportional R: V_out = 7.2 × (28 ÷ 80) = 7.2 × 0.35 = **2.52 V**. 4.5 V ke liye: x ÷ 80 = 4.5 ÷ 7.2 = 0.625, to x = **50 cm**.
    Jaanch: 7.2 × 50 ÷ 80 = 4.5 V ✅

17. (a) **True** ✅, area zyada, R ∝ 1 ÷ A, to R kam. (b) **False** ❌, R 4 guna hota hai. (c) **False** ❌, NTC hai, to warm mein R kam. (d) **False** ❌, T_c ke neeche R bilkul zero hai. (e) **True** ✅, gold ± 5 percent.

18. Heat I² R t, I aur t same, to heat ∝ R, aur ρ ke ratio se: 1.1 × 10⁻⁶ ÷ 2.8 × 10⁻⁸ = **39.3 guna**. Heater mein garmi chahiye, to nichrome (R bada, garmi bahut). Lead mein garmi nahi chahiye, to copper ya aluminium (R kam).
    Jaanch: 39.3 × 2.8 = 110, jo 1.1 × 10⁻⁶ ÷ 10⁻⁸ ✅

---

Ab tum jaante ho ki taar kheenchne par R 4 guna kyun hota hai, thermistor aur LDR kaise kaam karte hain, aur resistor ke rang kaise padhte hain. Dukaan ke bulbon aur iron par "230 V, 60 W" jaisi plate likhi thi, aur ek sawal abhi baaki tha: ye likha hua asal mein kya batata hai?

**Aage kya?** Topic 5 mein dekhenge ki bulb aur iron par likhi rating ka matlab kya hai, kam voltage par wahi bulb kitni power leta hai, aur bijli ka bill kaise banta hai.
