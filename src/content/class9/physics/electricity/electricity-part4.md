# Chapter: Electricity (Part 4)

> **Class:** 9 | **Subject:** Physics
> **Ye file [electricity-part3.md](electricity-part3.md) se aage chalti hai** (wahan potential difference, voltage aur voltmeter tha). Chapter ki shuruaat [electricity.md](electricity.md) mein hai. Circuit ke symbols aur ammeter [electricity-part2.md](electricity-part2.md) mein dekhe the. Graph aur slope [motion-part5.md](../motion/motion-part5.md) mein dekhe the.
> **Topics covered in this file:**
> 4. Ohm ka Law aur Resistance

---

# Topic 4: Ohm ka Law aur Resistance

Pichhle topic mein humne dekha ki **potential difference (voltage) wo "dabav" ya "push" hai jo charge ko dhakelta hai** (oonchi aur neechi tanki wali misaal, aur V = W ÷ Q), aur **current wo charge ka behna hai jo us push se hota hai**. Ye bhi dekha ki voltmeter bulb ke dono siron par (parallel mein) lagta hai aur ammeter circuit mein (series mein). Ab ek bahut natural sawal uthta hai: **agar push badha dein, to current kitna badhega?** Kya double push se double current milega? Ya kuch aur hoga? Aur kya har taar ek jaisa current hone deta hai, ya kuch taaron mein current ko "rokne" wali koi cheez hoti hai? Is topic mein voltage aur current ke beech ka wo seedha rishta seekhenge jise **Ohm ka law** kehte hain, aur us "rokne wali cheez" ko naapna seekhenge: **resistance**.

---

## Lab mein nichrome ka taar

School ki physics lab mein Ms. Venkat ne ek table par kuch saaman rakha tha: battery (1.5 V ke cells ka set), ek key (switch), ek rheostat, ammeter, voltmeter aur ek patla sa **nichrome ka taar**. Samarth, jo class mein hamesha sawal poochta tha, kursi kheench kar aa baitha.

Ms. Venkat boli, "Samarth, aaj hum ek sawal ka jawab experiment se nikalenge: **taar ke siron par voltage badhane se usme current kitna badhta hai?**"

Unhone circuit banaya (Figure 4.1): battery, key, rheostat aur ammeter taar ke saath ek line mein (series mein), aur voltmeter taar ke dono siron par (parallel mein).

```
      ┌──── key ──── rheostat ──── (A) ─────┬───────────┐
      │                                     │           │
   battery                                 (V)      nichrome
   ─┤├─                                     │         taar
      │                                     │           │
      └─────────────────────────────────────┴───────────┘
```

> **Figure 4.1** – Experiment ka circuit: ammeter (A) taar ke saath series mein, voltmeter (V) taar ke siron par parallel mein. Taar ke dono siron se judi alag shaakha mein voltmeter hai.

Ms. Venkat ne voltage ko **1.5 V, 3 V, 4.5 V aur 6 V** par set kiya, aur har baar ammeter ki reading ek copy mein likhwayi. Samarth ne likha. Phir Ms. Venkat ne in readings ka graph banaya aur ek **seedhi line** bani jo **origin (0, 0) se hokar jaati thi**.

Samarth ne graph dekha aur socha. "Ma'am, line seedhi hai, ye to samajh aaya. Par is line ki **dhalaan (slope)** ka kya matlab hai? Motion mein slope se speed nikli thi. Yahan kya nikalegi?"

Ms. Venkat muskuraayin, "Bahut achha sawal. Chalo, pehle Ohm ka law samajhte hain, phir is slope ka raaz kholte hain." Is kahani ka poora hisaab hum Part D mein karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Ohm ka law** | Constant temperature par conductor mein current, uske siron ke potential difference ke seedhe proportional hota hai | V dugna, to I bhi dugna |
| **Resistance (R)** | Conductor ka current ko rokne wala gun. R = V ÷ I | Nichrome ke taar ka R = 5 Ω |
| **Ohm (Ω)** | Resistance ka SI unit. 1 Ω = 1 V ÷ 1 A | 2 V par 1 A chale, to R = 2 Ω |
| **kΩ aur MΩ** | 1 kΩ = 1000 Ω, 1 MΩ = 1 000 000 Ω | 2.2 kΩ = 2200 Ω |
| **Rheostat** | Variable resistor: uska resistance badal sakte hain | Experiment mein voltage ya current badalne ke liye |
| **Ohmic conductor** | Jo Ohm ke law ko maanta hai: V-I graph seedhi line | Nichrome ka taar (constant temperature par) |
| **Non-ohmic conductor** | Jiska V-I graph seedhi line nahi hota | Bulb ka filament, diode |
| **Resistivity (ρ)** | Material ka apna gun: 1 m lambe aur 1 m² cross-section wale taar ka resistance. Unit: Ω m (thoda extra, Class 10 overlap) | Copper ka ρ = 1.7 × 10⁻⁸ Ω m |
| **Conductance (G)** | G = 1 ÷ R. Unit: siemens (S). Bas naam jaano | R = 5 Ω to G = 0.2 S |

---

## Part A: Ohm ka law

### Experiment kya dikhata hai

Lab mein Samarth ne jo readings likhin, wo ye thin:

| Voltage V (V) | 1.5 | 3.0 | 4.5 | 6.0 |
|---|---|---|---|---|
| Current I (A) | 0.3 | 0.6 | 0.9 | 1.2 |

Dhyan se dekho: voltage 1.5 V se 3.0 V hua (**double**), to current 0.3 A se 0.6 A hua (**double**). Voltage 3 guna (4.5 V) to current bhi 3 guna (0.9 A). Voltage 4 guna (6.0 V) to current bhi 4 guna (1.2 A).

Yaani voltage aur current **barabar anupaat mein** badhte hain. Isse **Ohm ka law** nikalta hai.

> **Ohm ka law:** **constant temperature** par kisi conductor mein behne wala current, uske dono siron ke potential difference ke **seedhe proportional** hota hai.
> Yaani **V ∝ I**, ya **V = I R**, jahan R ek constant hai.

Is constant R ko hum conductor ka **resistance** kehte hain.

### Resistance kya hai

Conductor current ko behne to deta hai, par ek tarah ka **virodh (opposition)** bhi karta hai. Ye virodh jitna zyada, utna kam current, **same voltage** par. Is virodh ki matra ko **resistance (R)** kehte hain.

> **R = V ÷ I**
> Resistance (Ω) = potential difference (V) ÷ current (A)

Ye wahi V = I R hai, bas doosre tareeke se likha hua. Teen roop yaad rakho:

| Kya chahiye? | Formula | Unit |
|---|---|---|
| Voltage V | V = I × R | V |
| Current I | I = V ÷ R | A |
| Resistance R | R = V ÷ I | Ω |

### Ohm (Ω): resistance ka unit

> **1 ohm (1 Ω)** = wo resistance jisme **1 V** ke potential difference par **1 A** current chale.
> **1 Ω = 1 V ÷ 1 A = 1 V/A**

Chhote-bade resistances ke liye:

- **1 kΩ (kilo-ohm) = 1000 Ω**
- **1 MΩ (mega-ohm) = 1 000 000 Ω**

Ghar ke heater ya iron ka resistance das-bees ohm se kuch sau ohm tak hota hai, jabki electronic circuits mein kΩ aur MΩ ke resistors aam hain.

### Paani ke pipe wali tulna

Pichhle topic ki paani wali tulna yaad karo. Paani ka pressure = voltage, paani ka behna = current. Ab agar pipe **patla aur khurdura** ho, to wo paani ke behne ka zyada virodh karta hai, yaani uska "resistance" zyada hai: same pressure par paani kam behta hai. Moti, chikni pipe mein virodh kam, paani zyada. Taar ke saath bhi aisa hi hai.

---

## Part B: Verification experiment aur V-I graph

### Experiment kaise karte hain

Saaman: battery ya cells, key, rheostat, ammeter, voltmeter, nichrome ka taar, connecting wires.

Steps:
1. Circuit Figure 4.1 jaisa banao: ammeter **series** mein, voltmeter taar ke **parallel** mein. Ammeter aur voltmeter ke + / − siron ko sahi taraf jodo (+ battery ke + taraf).
2. Key band karo, aur voltage ko ek value par set karo (1 cell, phir 2 cells, phir 3 aur 4 cells jodkar, ya rheostat se). Voltmeter aur ammeter ki reading likho.
3. Reading lene ke baad **key khol do** taki taar zyada der tak current na le. Taar garm hone lagta hai (iska poora kissa aage ke topic mein hai), aur garm hone par resistance badal sakta hai. Ohm ka law **constant temperature** par hi sahi hota hai, isliye temperature ko lagbhag same rakhna zaroori hai.
4. Har baar V aur I ko table mein likho, aur R = V ÷ I nikalo.

### Readings se R

| V (V) | I (A) | R = V ÷ I (Ω) |
|---|---|---|
| 1.5 | 0.3 | 1.5 V ÷ 0.3 A = **5 Ω** |
| 3.0 | 0.6 | 3.0 V ÷ 0.6 A = **5 Ω** |
| 4.5 | 0.9 | 4.5 V ÷ 0.9 A = **5 Ω** |
| 6.0 | 1.2 | 6.0 V ÷ 1.2 A = **5 Ω** |

**Jaanch:** 1.5 ÷ 0.3 = 5 ✅, 3.0 ÷ 0.6 = 5 ✅, 4.5 ÷ 0.9 = 5 ✅, 6.0 ÷ 1.2 = 5 ✅. Har baar R = 5 Ω aaya, yaani **V ÷ I constant hai**. Yahi Ohm ka law hai.

### V-I graph

Ab in readings ka graph banate hain. x-axis par current I (A), y-axis par voltage V (V). Points: (0.3, 1.5), (0.6, 3.0), (0.9, 4.5), (1.2, 6.0). Origin (0, 0) bhi ek point hai (0 V par 0 A).

```
V (V)
6.0 :                                        O
    :                                     *
    :                                 *
4.5 :                              O
    :                           *
    :                       *
3.0 :                    O
    :                 *
    :             *
1.5 :          O
    :       *
    :   *
0.0 +---------------------------------------->  I (A)
    0         0.3       0.6       0.9       1.2
```

> **Figure 4.2** – Nichrome ke taar ka V-I graph: points O (0.3 A, 1.5 V), (0.6 A, 3.0 V), (0.9 A, 4.5 V) aur (1.2 A, 6.0 V). Line seedhi hai aur origin se guzarti hai.

(Neeche ke numbers I ki values hain: har 10 dashes ka gap 0.3 A hai.)

Graph se teen baatein:
- **Seedhi line** matlab V aur I proportional hain.
- Line **origin se guzarti hai**: 0 V par 0 A. Voltage nahi to current nahi.
- Jab bhi aisa V-I graph mile (seedhi line, origin se), conductor **ohmic** hai.

---

## Part C: Graph ka slope kya batata hai

Motion wale topic mein dekha tha ki **slope = rise ÷ run**. Yahan y-axis par V hai aur x-axis par I.

> **V-I graph ka slope = rise ÷ run = ΔV ÷ ΔI = V ÷ I = R**

Yaani agar V y-axis par ho aur I x-axis par, to **slope resistance hota hai**.

Dhyan do (galti yahin hoti hai): agar graph **ulta** banao, I ko y-axis par aur V ko x-axis par, to slope = ΔI ÷ ΔV = I ÷ V = **1 ÷ R** ho jaata hai. Tab R nikalne ke liye slope ka ulta (1 ÷ slope) lena padta hai. Isliye graph dekhte hi pehle dekho ki **kaunsi quantity kis axis par hai**.

---

## Part D: Samarth ke sawal ka jawab

Samarth ne poocha tha ki slope ka matlab kya hai. Figure 4.2 ke do alag points lekar slope nikalte hain.

**Pehle tareeke se: (0, 0) aur (1.2 A, 6.0 V) lekar**
- Rise = 6.0 V − 0 V = 6.0 V, run = 1.2 A − 0 A = 1.2 A
- Slope = 6.0 V ÷ 1.2 A = **5 V/A = 5 Ω**

**Doosre tareeke se: (0.6 A, 3.0 V) aur (1.2 A, 6.0 V) lekar**
- Rise = 6.0 V − 3.0 V = 3.0 V, run = 1.2 A − 0.6 A = 0.6 A
- Slope = 3.0 V ÷ 0.6 A = **5 Ω**

**Jaanch:** Dono tareeke se 5 Ω aaya aur table ke R (5 Ω) se bhi mel khaya ✅. Unit bhi theek hai: V ÷ A = Ω ✅.

> Ms. Venkat boli, "Dekha Samarth? Is seedhi line ki dhalaan hi us taar ka **resistance** hai. Line jitni **zyada khadi**, utna **zyada resistance**: kyunki same current ke liye zyada voltage chahiye."
>
> Samarth ne kaha, "Ohh. Matlab agar maine koi doosra taar lagaya aur uski line zyada khadi aayi, to wo taar current ko zyada rokta hai." Ms. Venkat ne sar hilaya, "Bilkul sahi."

---

## Part E: Ohmic aur non-ohmic conductor

Ohm ka law sab conductors ke liye har haalat mein sahi **nahi** hai. Wo tabhi sahi hai jab V-I graph seedhi line ho. Aise conductors ko **ohmic** kehte hain: jaise constant temperature par rakha hua nichrome ya copper ka taar.

Kai cheezon ke liye V-I graph **seedhi line nahi** hota. Aise conductors **non-ohmic** kehlate hain. Do udaharan:

**1. Bulb ka filament.** Jaise-jaise voltage badhta hai, filament bahut garm hota hai (chamakta hai) aur uska resistance badhta hai. Isliye voltage dugna karne par current dugna nahi hota, usse kam badhta hai. Graph mudta hai.

```
V (V)
    :                                        *
    :                                      *
    :                                   *
    :                                *
    :                             *
    :                          *
    :                       *
    :                   *
    :               *
    :          *
    +-------------------------------------->  I (A)
```

> **Figure 4.3** – Bulb ke filament ka V-I graph (sketch): line seedhi nahi hai, upar ki taraf mud jaati hai, kyunki garm hone par filament ka resistance badhta hai.

**2. Diode.** Ye ek chhota sa electronic device hai jo current ko **sirf ek disha mein** aasani se jaane deta hai. Iska graph bhi seedhi line nahi hota: thode voltage tak current lagbhag zero, phir achanak tezi se badhta hai. (Is sketch mein hum y-axis par current aur x-axis par voltage rakh rahe hain, sirf aakar dikhane ke liye.)

```
               I
               :                   *
               :                  *
               :                *
               :            *
               :       ***
   ************+-----------------------> V
   ulta V      0       0.7 V
```

> **Figure 4.4** – Diode ka graph (sketch, y-axis par I, x-axis par V): ulti taraf (aur shuru ke thode voltage tak) current lagbhag zero, phir seedhi taraf current tezi se badhta hai.

Is chapter mein hum zyadatar **ohmic** conductors (jaise taar) lenge, aur jahan zaroori ho wahan likhenge ki conductor ohmic hai.

---

## Part F: Resistance kyun hota hai?

Metal ke taar mein **free electrons** hote hain (Topic 1 se). Jab taar ke dono siron par voltage lagta hai, to ye electrons ek disha mein bahne lagte hain. Par raaste mein taar ke **atoms** bhi hain jo apni jagah par (halke-halke kaampte hue) tike rehte hain. Electron bahta hua in atoms se **takrata** hai, apni raftaar aur disha kuch had tak kho deta hai, phir voltage ki wajah se dobara aage badhta hai.

```
   O       O       O       O       O       O
      e⁻ ───►  ╲       ╱╲       ╱───►
   O       O       O       O       O       O
   O = atom (apni jagah par),  e⁻ = free electron,  mudne wale mod = takrav
```

> **Figure 4.5** – Taar ke andar free electron atoms se baar-baar takrata hai aur apna raasta badalta hai. Ye takrav hi current ka virodh, yaani resistance, hain. (Sirf ek tasveer hai.)

Jitne zyada takrav, utna zyada resistance. Ab ye samajhna aasan hai ki taar ka resistance kin cheezon par depend karta hai.

---

## Part G: Taar ka resistance kin baaton par depend karta hai

Ek taar ka resistance (constant temperature par) in chaar cheezon par depend karta hai.

### 1. Length (l): R ∝ l

Taar jitna lamba, electron ko utna lamba raasta tay karna padta hai aur utne zyada atoms se takrana padta hai. Isliye **lambe taar ka resistance zyada**.

> **R ∝ l**: length double to R double, length aadhi to R aadha.

(Paani ki pipe: jitni lambi pipe, utna zyada virodh.)

### 2. Cross-section ka area (A): R ∝ 1/A

Taar jitna **mota** (zyada area), electrons ko behne ke liye utne zyada "raaste" mil jaate hain, jaise moti pipe mein zyada paani nikal jaata hai. Isliye **mote taar ka resistance kam**.

> **R ∝ 1/A**: area double to R **aadha**; area teen guna to R ek-tihai.

Ek dhyan dene wali baat: cross-section **gol** hota hai, to **A = π r²**. Agar taar ki **radius double** ho jaaye, to A = π (2r)² = 4 π r², yaani **area 4 guna** hota hai (double nahi). To resistance **ek-chauthai (R ÷ 4)** ho jaata hai.

### 3. Material

Same length aur same area ke copper aur nichrome ke taar ka resistance alag-alag hota hai. **Copper ka resistance bahut kam**, **nichrome ka bahut zyada**. Material ka ye gun neeche "resistivity" mein naapte hain.

### 4. Temperature

- **Metals (conductors)** mein temperature badhne par resistance **badhta hai**: atoms zyada hilte hain, to takrav zyada. Isliye bulb ke garm filament ka resistance thande filament se bahut zyada hota hai (Part E).
- **Semiconductors** (jaise silicon, germanium) mein temperature badhne par resistance **ghat-ta hai**.

(Ye kitna badhta ya ghat-ta hai, iska formula aage ki class mein aata hai. Kuch padarth bahut thande karne par resistance bilkul zero kar dete hain: unhe **superconductor** kehte hain. Abhi bas naam jaan lo.)

---

## Part H: Thoda extra: R = ρ l / A (Class 10 overlap)

> **Thoda extra (Class 10 overlap):** Ye part Class 10 ka hai. Abhi isse jaan lo, aage ki class mein detail milega.

Upar ke teen niyam (R ∝ l, R ∝ 1/A, material) ek formula mein judte hain:

> **R = ρ × l ÷ A**

- R = resistance (Ω)
- l = length (m)
- A = cross-section ka area (m²)
- **ρ (rho)** = **resistivity**, material ka apna gun, unit **Ω m**

ρ ka matlab: ek taar jo **1 m lamba** ho aur jiska **area 1 m²** ho, uska resistance ρ ohm hota hai. Ye sirf material (aur temperature) par depend karta hai, taar ki length ya mote-patle hone par nahi.

**Unit ki jaanch:** ρ = R × A ÷ l = Ω × m² ÷ m = **Ω m** ✅

### Resistivity ki table (lagbhag, 20 °C par)

| Padarth | Resistivity ρ (Ω m) | Kis tarah ka? |
|---|---|---|
| Silver | 1.6 × 10⁻⁸ | Conductor |
| Copper | 1.7 × 10⁻⁸ | Conductor |
| Aluminium | 2.8 × 10⁻⁸ | Conductor |
| Tungsten | 5.6 × 10⁻⁸ | Conductor |
| Iron | 1.0 × 10⁻⁷ | Conductor |
| Nichrome | 1.1 × 10⁻⁶ | Conductor (alloy) |
| Graphite (carbon) | lagbhag 3.5 × 10⁻⁵ | Conductor, par metals se kamzor |
| Glass | lagbhag 10¹⁰ se 10¹⁴ | Insulator |
| Rubber | lagbhag 10¹³ se 10¹⁶ | Insulator |

Table se baatein:
- **Conductors** (metals) ka ρ bahut chhota hai: 10⁻⁸ Ω m ke aaspaas. **Insulators** ka ρ bahut bada: 10¹⁰ Ω m se bhi zyada. Dono ke beech ka farak bahut hi bada hai.
- **Semiconductors** (silicon, germanium) ka ρ in dono ke **beech** ka hota hai.
- Silver sabse achha conductor hai, par mehenga hai. Isliye taaron ke liye copper aur aluminium chalte hain.
- **Nichrome** (nickel, chromium aur iron ka alloy) ka ρ copper se lagbhag **65 guna** zyada hai (Example 12).

### Nichrome, copper aur aluminium kahan, aur kyun

- **Nichrome** heater, toaster, electric iron ke **heating element** mein: iska ρ bahut zyada hai, **melting point bahut ooncha** hai, aur ye garm hone par hawa mein **jaldi oxidise nahi hota** (jaldi zang ya jalta nahi). (Heating element kaise garmi deta hai, ye aage ke topic mein.)
- **Copper aur aluminium** ghar aur bijli ke **cables** mein: inka ρ bahut kam hai, to current bina zyada rukawat aur bina zyada garm hue chalta hai. Aluminium halka aur sasta bhi hai, isliye bade overhead cables mein bhi kaam aata hai.

---

## Part I: Resistors, variable resistors aur conductance

**Resistor:** wo component jo circuit mein ek tay resistance dene ke liye banaya jaata hai. Chhote resistors par **rangeen patliyan (colour code)** bani hoti hain jinse unka resistance padha jaata hai. (Ye code bas naam jaano, yaad karna zaroori nahi.)

**Variable resistor:** jiska resistance badla ja sakta hai. **Rheostat** (jo humne experiment mein lagaya) aur **potentiometer** isi tarah ke hain. Kai purane **pankhe ke regulators** aur radio ya music system ke **volume control** ke knob mein isi tarah ka resistor hota hai: knob ghumane se resistance badalta hai, to current badalta hai, aur pankha ya awaaz dheemi-tez hoti hai.

**Conductance (G):** resistance ka ulta. **G = 1 ÷ R**, unit **siemens (S)**. Jisme resistance kam, usme conductance zyada. Jaise R = 5 Ω to G = 1 ÷ 5 = 0.2 S. (Sirf naam jaano; Part C wala "ulta graph ka slope 1 ÷ R" asal mein conductance hi hai.)

---

## Part J: Solved examples

**Example 1 (R = V ÷ I):** Ek conductor ke siron par 12 V lagane par usme 3 A current behta hai. Resistance?

- R = V ÷ I = 12 V ÷ 3 A = **4 Ω**

**Jaanch:** 3 A × 4 Ω = 12 V ✅

---

**Example 2 (I = V ÷ R):** 5 Ω ke resistor par 10 V lagaya. Current?

- I = V ÷ R = 10 V ÷ 5 Ω = **2 A**

**Jaanch:** 2 A × 5 Ω = 10 V ✅

---

**Example 3 (V = I R):** 20 Ω ke resistor mein 0.5 A current behta hai. Uske siron ke beech voltage?

- V = I × R = 0.5 A × 20 Ω = **10 V**

**Jaanch:** 10 V ÷ 20 Ω = 0.5 A ✅

---

**Example 4 (story: readings aur slope):** Lab ki readings (V = 1.5, 3.0, 4.5, 6.0 V; I = 0.3, 0.6, 0.9, 1.2 A) se R aur graph ka slope.

- Har reading ke liye R = V ÷ I = 5 Ω (Part B ki table)
- Graph ka slope = 6.0 V ÷ 1.2 A = **5 Ω** (Part D)

**Jaanch:** R aur slope dono 5 Ω ✅. Agar Samarth ne I ko y-axis par aur V ko x-axis par rakha hota, to slope = 1.2 A ÷ 6.0 V = **0.2 A/V** hota, aur R = 1 ÷ 0.2 = 5 Ω ✅.

---

**Example 5 (heater):** Ek heater ka resistance 46 Ω hai. 230 V ki supply par usme kitna current behta hai?

- I = V ÷ R = 230 V ÷ 46 Ω = **5 A**

**Jaanch:** 5 A × 46 Ω = 230 V ✅

---

**Example 6 (length double):** Ek taar ka resistance 10 Ω hai. Usi material aur usi mote taar ki length double kar di jaaye (area same), to naya R?

- R ∝ l, to length 2 guna, R bhi 2 guna.
- Naya R = 2 × 10 Ω = **20 Ω**

**Jaanch:** Resistance aur length ka ratio same hai: 10 Ω ÷ l = 20 Ω ÷ 2 l ✅

---

**Example 7 (radius double):** Ek taar ka resistance 8 Ω hai. Usi material aur usi length ka doosra taar liya jiski **radius double** hai. Naya R?

- A = π r², to radius 2 guna hone par A = π (2r)² = 4 π r² yaani **4 guna**.
- R ∝ 1/A, to R ek-chauthai (÷ 4) ho jaata hai.
- Naya R = 8 Ω ÷ 4 = **2 Ω**

**Jaanch:** Agar kisi ne "radius double to R aadha" socha hota, to 4 Ω aata: wo galat hai. Sahi 2 Ω hai ✅

---

**Example 8 (thoda extra: taar kheenchna):** Ek taar ka resistance 3 Ω hai. Use khinch kar (volume wahi rakhte hue) uski length double kar di gayi. Naya resistance?

- Taar ka volume = l × A, jo wahi rehta hai. Length double, to area **aadha** ho jaayega.
- Length 2 guna aur area aadha: R ∝ l ÷ A = 2 ÷ (1/2) = **4 guna**.
- Naya R = 4 × 3 Ω = **12 Ω**

**Jaanch:** Sirf length double karne se R 6 Ω hota, aur area aadha hone se aur double: 6 Ω × 2 = 12 Ω ✅

---

**Example 9 (thoda extra: copper taar ka R):** 100 m lambe copper ke taar ka cross-section area 1 mm² hai. Resistance? (ρ copper = 1.7 × 10⁻⁸ Ω m)

- Pehle mm² ko m² mein: 1 mm = 10⁻³ m, to 1 mm² = (10⁻³ m)² = **10⁻⁶ m²**
- R = ρ l ÷ A = 1.7 × 10⁻⁸ Ω m × 100 m ÷ 10⁻⁶ m²
- = (1.7 × 10⁻⁶ Ω m²) ÷ (10⁻⁶ m²) = **1.7 Ω**

**Jaanch:** Unit: Ω m × m ÷ m² = Ω ✅. 1.7 × 10⁻⁸ × 100 = 1.7 × 10⁻⁶, aur 10⁻⁶ se bhaag dene par 1.7 ✅. (100 m ka taar sirf 1.7 Ω hai: isliye copper cables mein itna kam rukawat hoti hai.)

---

**Example 10 (thoda extra: data se resistivity):** Ek taar ka resistance 4 Ω, length 2 m aur cross-section area 0.5 mm² hai. Resistivity?

- A = 0.5 mm² = 0.5 × 10⁻⁶ m² = 5 × 10⁻⁷ m²
- ρ = R A ÷ l = 4 Ω × 5 × 10⁻⁷ m² ÷ 2 m = (2 × 10⁻⁶ Ω m²) ÷ 2 m = **10⁻⁶ Ω m**

**Jaanch:** R = ρ l ÷ A = 10⁻⁶ × 2 ÷ (5 × 10⁻⁷) = 2 × 10⁻⁶ ÷ 5 × 10⁻⁷ = 4 Ω ✅. Ye value nichrome (1.1 × 10⁻⁶ Ω m) ke bahut paas hai.

---

**Example 11 (thoda extra: heating element ki length):** Ek heater ke liye nichrome ka 55 Ω ka element banana hai. Taar ka area 0.2 mm² hai. Kitni length chahiye? (ρ nichrome = 1.1 × 10⁻⁶ Ω m)

- A = 0.2 mm² = 0.2 × 10⁻⁶ m² = 2 × 10⁻⁷ m²
- R = ρ l ÷ A, to l = R A ÷ ρ
- l = 55 Ω × 2 × 10⁻⁷ m² ÷ 1.1 × 10⁻⁶ Ω m = (1.1 × 10⁻⁵) ÷ (1.1 × 10⁻⁶) m = **10 m**

**Jaanch:** R = 1.1 × 10⁻⁶ × 10 ÷ (2 × 10⁻⁷) = 1.1 × 10⁻⁵ ÷ 2 × 10⁻⁷ = 55 Ω ✅. (10 m lamba taar kundali (coil) bana kar chhoti jagah mein fit kar dete hain.)

---

**Example 12 (thoda extra: nichrome aur copper ka ratio):** Nichrome ki resistivity copper ki resistivity se kitni guna hai?

- Ratio = 1.1 × 10⁻⁶ ÷ 1.7 × 10⁻⁸ = 110 ÷ 1.7 = **lagbhag 65**

**Jaanch:** 1.7 × 65 = 110.5 ≈ 110 ✅. Matlab same length aur same mote nichrome aur copper ke taaron mein nichrome ka resistance lagbhag 65 guna hota hai.

---

**Example 13 (units badlo):** (a) 2.2 kΩ ko Ω mein. (b) 470 000 Ω ko MΩ mein.

- (a) 2.2 kΩ = 2.2 × 1000 Ω = **2200 Ω**
- (b) 470 000 Ω = 470 000 ÷ 1 000 000 MΩ = **0.47 MΩ**

**Jaanch:** (a) 2200 ÷ 1000 = 2.2 kΩ ✅. (b) 0.47 × 1 000 000 = 470 000 Ω ✅

---

**Example 14 (voltage double, to current?):** 5 Ω ke ek taar par 2 V lagane par current nikalo. Phir voltage double (4 V) kar do. Current?

- 2 V par: I = 2 V ÷ 5 Ω = **0.4 A**
- 4 V par: I = 4 V ÷ 5 Ω = **0.8 A**

**Jaanch:** 0.8 A ÷ 0.4 A = 2: current double hua ✅ (taar ohmic hai aur resistance wahi 5 Ω hai, isliye).

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Ohm ka law har conductor par har haalat mein lagta hai"**

Nahi. Ye sirf **ohmic** conductors par aur **constant temperature** par sahi hai. Bulb ke filament aur diode ka V-I graph seedhi line nahi hota (Part E). Bulb jaise taar ka resistance garm hone se badal jaata hai, to V ÷ I constant nahi rehta.

**Galti 2: "R voltage aur current par depend karta hai, kyunki R = V ÷ I"**

R = V ÷ I ek **anupaat** hai, jo ohmic conductor ke liye constant rehta hai. Voltage double karo to current bhi double hota hai, aur R wahi 5 Ω rehta hai (Example 14). Taar ka resistance taar par depend karta hai: uski **length, area, material aur temperature** par.

**Galti 3: Slope ulta le lena**

V ko y-axis par rakhne par slope = R. Agar I y-axis par hai to slope = 1 ÷ R (Example 4: 0.2 A/V), aur R = 1 ÷ slope = 5 Ω. Axes dekh kar hi slope padho.

**Galti 4: mm² ko m² mein badalna bhoolna (ya cm ko m mein)**

1 mm² = 10⁻⁶ m², **10⁻³ nahi**. Example 9 mein agar A = 1 (mm² ko bina badle) lete to R = 1.7 × 10⁻⁸ × 100 ÷ 1 = 1.7 × 10⁻⁶ Ω aata, jo bahut galat hai. Aur length 50 cm hai to pehle 0.5 m likho.

**Galti 5: Diameter ko radius samajhna**

A = π r² mein **r radius** hai. Agar taar ka **diameter 2 mm** diya hai, to radius = 1 mm = 10⁻³ m, aur A = 3.14 × (10⁻³ m)² = 3.14 × 10⁻⁶ m². Agar galti se 2 mm ko radius maan loge, to area 4 guna aa jaayega aur R ek-chauthai.

**Galti 6: "Mota taar zyada resistance deta hai"**

Ulta hai. R ∝ 1/A, to **mota taar kam** resistance deta hai (zyada raaste). Isliye ghar ke bhaari appliances ke taar mote hote hain.

**Galti 7: Resistance aur resistivity ko ek samajhna**

**Resistance (R)** is bane hue taar ka hai (Ω) aur taar ki length aur area par depend karta hai. **Resistivity (ρ)** sirf **material** ka gun hai (Ω m). Ek hi copper se 1 m aur 100 m ke taar ka R alag hoga, ρ wahi rahega.

---

## Quick Recap

- **Ohm ka law:** constant temperature par conductor mein current, uske siron ke potential difference ke seedhe proportional hota hai: **V ∝ I, V = I R**.
- **Resistance R = V ÷ I**: conductor ka current ko rokne wala gun. SI unit **ohm (Ω)**, 1 Ω = 1 V/A. 1 kΩ = 1000 Ω, 1 MΩ = 1 000 000 Ω.
- Lab ki readings: V = 1.5, 3.0, 4.5, 6.0 V par I = 0.3, 0.6, 0.9, 1.2 A, har baar **R = 5 Ω**.
- **V-I graph** (V y-axis par): origin se guzarti seedhi line. **Slope = R**. Agar I y-axis par ho to slope = 1 ÷ R. Kahani ka jawab: slope = **5 Ω**.
- **Ohmic** conductor: seedhi-line graph. **Non-ohmic:** bulb ka filament, diode (graph mudta hai).
- Resistance ka karan: free electrons ka atoms se takrana.
- Taar ke resistance ke factors: **R ∝ l**, **R ∝ 1 ÷ A** (radius double to area 4 guna, R ÷ 4), **material** (copper kam, nichrome zyada), **temperature** (metals mein badhta hai, semiconductors mein ghat-ta hai).
- Thoda extra (Class 10 overlap): **R = ρ l ÷ A**, ρ resistivity (Ω m). Copper 1.7 × 10⁻⁸, nichrome 1.1 × 10⁻⁶, glass aur rubber bahut zyada. Nichrome heating element mein, copper aur aluminium cables mein.
- Variable resistors (rheostat, potentiometer), resistor ka colour code aur conductance G = 1 ÷ R (siemens): bas naam.

---

## Practice Questions

1. A resistor of 8 Ω carries a current of 1.5 A. Find the potential difference across it.

2. A potential difference of 6 V drives a current of 0.03 A through a conductor. Find its resistance.

3. What current flows through a 24 Ω resistor connected to a 12 V battery?

4. In an experiment the readings were: V = 2, 4, 6, 8 V and I = 0.5, 1.0, 1.5, 2.0 A. (a) Find R for each reading. (b) Is the conductor ohmic? (c) What is the slope of the V-I graph (V on the y-axis)? (d) If the graph were drawn with I on the y-axis, what would the slope be?

5. A wire has a resistance of 6 Ω. Find the new resistance if (a) its length is made three times (area same), (b) it is cut into two equal halves (find each half), (c) a wire of the same material and length but double the area is used.

6. A wire of resistance 18 Ω is replaced by a wire of the same material and length but with three times the radius. Find the new resistance.

7. Find the resistance of a copper wire 50 m long and of area 0.5 mm². (ρ = 1.7 × 10⁻⁸ Ω m)

8. Find the resistance of a 100 m long aluminium wire of cross-section area 1 mm². (ρ = 2.8 × 10⁻⁸ Ω m)

9. A copper wire is 100 m long and has a diameter of 2 mm. Find its resistance. (ρ = 1.7 × 10⁻⁸ Ω m, take π = 3.14)

10. How long a nichrome wire of area 0.1 mm² is needed to make a 33 Ω heating element? (ρ = 1.1 × 10⁻⁶ Ω m)

11. Convert: (a) 3.3 kΩ into Ω, (b) 47 000 Ω into kΩ, (c) 1.5 MΩ into Ω.

12. A heater of resistance 100 Ω is connected to a 230 V supply. Find the current.

13. In the lab story, Samarth replaced the nichrome wire by another wire of resistance 10 Ω. (a) What current will flow at 6 V? (b) What will be the slope of its V-I graph (V on y-axis), and will its line be steeper or flatter than the 5 Ω wire's line?

14. State True or False, and correct the false ones:
    (a) Ohm's law holds for every conductor in all conditions.
    (b) The resistance of a wire doubles if the voltage across it is doubled.
    (c) A thicker wire of the same length and material has a smaller resistance.
    (d) The slope of a V-I graph (V on the y-axis) of an ohmic conductor is its resistance.
    (e) Resistance and resistivity are the same thing.
    (f) The V-I graph of a bulb filament is a perfect straight line.

15. Why does the V-I graph of a bulb filament bend instead of being a straight line? Answer in two or three lines.

### Answers

1. V = I × R = 1.5 A × 8 Ω = **12 V**.
   Jaanch: 12 V ÷ 8 Ω = 1.5 A ✅

2. R = V ÷ I = 6 V ÷ 0.03 A = **200 Ω**.
   Jaanch: 0.03 A × 200 Ω = 6 V ✅

3. I = V ÷ R = 12 V ÷ 24 Ω = **0.5 A**.
   Jaanch: 0.5 A × 24 Ω = 12 V ✅

4. (a) 2 ÷ 0.5 = 4 Ω; 4 ÷ 1.0 = 4 Ω; 6 ÷ 1.5 = 4 Ω; 8 ÷ 2.0 = 4 Ω. Har baar **4 Ω**. (b) Haan, **ohmic**, kyunki V ÷ I constant hai. (c) Slope = 8 V ÷ 2.0 A = **4 Ω**. (d) I y-axis par ho to slope = 2.0 A ÷ 8 V = **0.25 A/V** (= 1 ÷ 4).
   Jaanch: 4 Ω × 0.25 A/V = 1 ✅

5. (a) R ∝ l, to 3 × 6 Ω = **18 Ω**. (b) Har aadha taar: R ∝ l, to 6 Ω ÷ 2 = **3 Ω**. (c) Area double, R ∝ 1/A, to 6 Ω ÷ 2 = **3 Ω**.
   Jaanch: dono half ko series mein jodo to 3 + 3 = 6 Ω wapas ✅

6. Radius 3 guna, to area 3² = 9 guna. R ∝ 1/A, to R = 18 Ω ÷ 9 = **2 Ω**.
   Jaanch: 2 Ω × 9 = 18 Ω ✅

7. A = 0.5 mm² = 0.5 × 10⁻⁶ m² = 5 × 10⁻⁷ m². R = ρ l ÷ A = 1.7 × 10⁻⁸ Ω m × 50 m ÷ 5 × 10⁻⁷ m² = (8.5 × 10⁻⁷ Ω m²) ÷ (5 × 10⁻⁷ m²) = **1.7 Ω**.
   Jaanch: Example 9 mein 100 m aur 1 mm² par 1.7 Ω tha. Yahan length aadhi (R aadha) aur area aadha (R double), to R wahi 1.7 Ω ✅

8. A = 1 mm² = 10⁻⁶ m². R = 2.8 × 10⁻⁸ Ω m × 100 m ÷ 10⁻⁶ m² = 2.8 × 10⁻⁶ ÷ 10⁻⁶ = **2.8 Ω**.
   Jaanch: Example 9 ke copper (1.7 Ω) se zyada hai, kyunki aluminium ka ρ zyada hai ✅

9. Diameter 2 mm, to radius = 1 mm = 10⁻³ m. A = π r² = 3.14 × (10⁻³ m)² = 3.14 × 10⁻⁶ m². R = 1.7 × 10⁻⁸ Ω m × 100 m ÷ 3.14 × 10⁻⁶ m² = 1.7 × 10⁻⁶ ÷ 3.14 × 10⁻⁶ = **lagbhag 0.54 Ω**.
   Jaanch: Area 3.14 guna hai (Example 9 ke 1 mm² se), to R = 1.7 ÷ 3.14 ≈ 0.54 Ω ✅

10. A = 0.1 mm² = 0.1 × 10⁻⁶ m² = 10⁻⁷ m². l = R A ÷ ρ = 33 Ω × 10⁻⁷ m² ÷ 1.1 × 10⁻⁶ Ω m = (3.3 × 10⁻⁶) ÷ (1.1 × 10⁻⁶) m = **3 m**.
    Jaanch: R = 1.1 × 10⁻⁶ × 3 ÷ 10⁻⁷ = 3.3 × 10⁻⁶ ÷ 10⁻⁷ = 33 Ω ✅

11. (a) 3.3 × 1000 = **3300 Ω**. (b) 47 000 ÷ 1000 = **47 kΩ**. (c) 1.5 × 1 000 000 = **1 500 000 Ω**.
    Jaanch: 3300 ÷ 1000 = 3.3 ✅, 47 × 1000 = 47 000 ✅, 1 500 000 ÷ 1 000 000 = 1.5 ✅

12. I = V ÷ R = 230 V ÷ 100 Ω = **2.3 A**.
    Jaanch: 2.3 A × 100 Ω = 230 V ✅

13. (a) I = 6 V ÷ 10 Ω = **0.6 A**. (b) Slope = R = **10 Ω**. Ye 5 Ω wali line se **zyada khadi (steeper)** hogi, kyunki same current ke liye zyada voltage chahiye.
    Jaanch: 0.6 A × 10 Ω = 6 V ✅. (Pehle 5 Ω par 6 V se 1.2 A tha, ab aadha 0.6 A ✅)

14. (a) **False** ❌. Sirf ohmic conductors par aur constant temperature par.
    (b) **False** ❌. Voltage double hone par current double hota hai, resistance wahi rehta hai.
    (c) **True** ✅. R ∝ 1/A.
    (d) **True** ✅. Slope = ΔV ÷ ΔI = R.
    (e) **False** ❌. Resistance taar ka hota hai (Ω), resistivity material ka gun hai (Ω m).
    (f) **False** ❌. Filament garm hone par uska resistance badhta hai, to graph mud jaata hai.

15. Voltage badhne par current badhta hai aur filament bahut garm ho jaata hai. Metal ka resistance temperature badhne par badhta hai (atoms zyada hilte hain, takrav zyada). To R constant nahi rehta, V ÷ I badhta jaata hai, aur graph seedhi line ki jagah mud jaata hai.

---

Ab aap Samarth ko bata sakte ho ki V-I graph ki line ki dhalaan kya hai: wahi taar ka resistance. Aur ye bhi ki agar line zyada khadi aaye to taar current ko zyada rokta hai. Agli baar kisi bulb ya taar ko dekho to sochna ki uske resistance ko kaun si cheezein badal sakti hain: length, mota-patla hona, material aur temperature.

**Aage kya?** Ab tak humne circuit mein ek hi resistor dekha. Par agar ek se zyada resistor jodne ho, to kya hoga? Total resistance badhega ya ghatega, aur current ka kya hoga? Ye dekhenge Topic 5 mein: **ek se zyada resistor jodne par kya hota hai: series aur parallel**.
