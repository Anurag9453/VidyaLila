# Chapter: Current Electricity II: Cells, Networks and Real Components (Part 2)

> **Class:** 10 | **Subject:** Physics
> **Ye file [current-electricity-ii.md](current-electricity-ii.md) se aage chalti hai** (wahan EMF E, internal resistance r, terminal voltage V = E − I r aur I = E ÷ (R + r): ek akeli cell ka poora hisaab). Chapter ki shuruaat: [current-electricity-ii.md](current-electricity-ii.md). Recall ke liye: cells series/parallel [electricity-part3.md](../../../class9/physics/electricity/electricity-part3.md) aur [electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md).
> **Topics covered in this file:**
> 2. Cells Ka Combination: Series, Parallel Aur Battery Pack

---

# Topic 2: Cells Ka Combination: Series, Parallel Aur Battery Pack

Topic 1 mein ek akeli cell ka poora hisaab seekha: har cell ke andar ek EMF E hai aur ek internal resistance r, aur bahar ke resistor R ke saath current I = E ÷ (R + r) banta hai. Par asli duniya mein shayad hi kabhi ek akeli cell lagti hai: torch mein kai cells, mobile mein cells ka pack, car mein badi battery. Aaj sawal ye hai: **kai cells ko jodne par E aur r ka kya hota hai, aur kaun sa jodna kab sahi hai?**

---

## Zarapkar Chacha ki remote-control car

Mr. Zarapkar ne apne bhatije Jayesh ko ek remote-control car dilayi thi. Car ke neeche ek battery box tha jisme 4 AA cells lagte the. Fresh cells ke saath car tez bhaagti thi. Ek din Jayesh ke bade cousin ne cells badle, aur jaldi mein ek cell **ulta** laga diya. Car chali to zaroor, par bahut dheere, jaise thaki hui ho.

Cousin ne bola, "Chalo, cells ko aise jodo ki voltage aur badh jaye: sabko seedha-seedha **parallel** kar do, 4 cells ka 4 guna voltage milega!" Jayesh ne Chacha ki taraf dekha. Chacha muskuraye, "Ek minute: pehle ye batao ki 4 cells ka voltage **kab** 4 guna hota hai, aur kab sirf 1.5 V hi rehta hai? Aur ulta cell car ko dheema kyun kar deta hai, band kyun nahi karta?" (Chacha ne ye bhi yaad dilaya: batteries ko kabhi short nahi karte, kholte nahi, aur ye sab kaam bade ke saath karte hain.)

Aaj hum is sawal ka poora jawab nikalenge, numbers ke saath.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Series group** | Cells ko ek chain mein jodna: ek ka + doosre ke − se, aur poori chain mein se ek hi current guzarta hai | Torch ke 3 cells |
| **Parallel group** | Cells ke saare + sire ek taar se aur saare − sire doosre taar se jodna, to current cells mein baat jaata hai | Teen AA cells ek saath, ek-ek rail par |
| **Ulta (opposing) cell** | Series chain mein ek cell ko ulti polarity se lagana, to uska dhakka baaki cells ke dhakke ke khilaaf lagta hai | Car ke battery box mein ek ulta cell |
| **Mixed grouping** | Pehle kuch cells ki series strings banana, phir un strings ko parallel mein jodna | 8 cells: 4 ki 2 strings parallel mein |
| **Battery pack** | Kai cells ka ek jura hua set, jo ek chahi hui voltage aur kaam karne ka samay dene ke liye bana ho | Mobile ya power bank ka pack |
| **Capacity (mAh)** | Cell kitna current kitne ghante tak de sakti hai: 2000 mAh ka matlab 2 A lagbhag 1 ghanta ya 0.5 A lagbhag 4 ghante | AA cell ka label |
| **Cell ki efficiency** | Cell ki kul energy ka wo hissa jo bahar ke circuit tak pahunchta hai: V ÷ E | 6.0 V ki battery se 4.8 V bahar: 80 percent |

---

## Class 9 ka recall

Class 9 mein hum pehle hi jaante hain ki cells ko **series** mein jodo to unke voltages **jud jaate hain** (1.5 V + 1.5 V = 3 V) aur ulta cell lagne par dhakke kat jaate hain ([electricity-part3.md](../../../class9/physics/electricity/electricity-part3.md)). Aur **parallel** mein voltage wahi rehta hai, par cells zyada der tak chalte hain: wahan "detail aage ki class mein" likha tha ([electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md)). Wo "aage ki class" ab aa gayi hai. Ab tak internal resistance ka koi zikr nahi tha. Topic 1 ke baad humare paas r hai, aur usse poori kahani saaf ho jaati hai: voltage ke saath-saath **resistance** aur **current ka baatna** bhi dekhna padega.

Is topic ke numbers mein hum Topic 1 ke shared values hi lenge: ek fresh AA cell ka E lagbhag 1.5 V aur r lagbhag 0.3 Ω, aur mobile ki Li-ion cell ka E lagbhag 3.7 V aur r lagbhag 0.1 Ω.

---

## Part A: Series mein cells: E bhi jud jaata hai, r bhi

Cells ko series mein jodne par **wahi ek current** har cell se guzarta hai. Har cell apna dhakka E deta hai, to dhakke **jud jaate hain**. Aur har cell mein current ko apna internal resistance r jhelna padta hai, to resistances bhi **jud jaate hain**.

> **n identical cells series mein: E_total = n E, r_total = n r**

Figure 2.1 mein Jayesh ki car ka battery box dikhaya hai: 4 AA cells series mein, aur car ki motor ko hum ek simple resistor R = 4.8 Ω maan rahe hain (asli motor kuch alag tarah behave karti hai, par hisaab ke liye ye model theek hai). Ammeter series mein hai.

```
   (+) end                                  (−) end
         + −      + −      + −      + −
   +----┤├-------┤├-------┤├-------┤├---------+
   : 1.5 V    1.5 V    1.5 V    1.5 V         :
   : 0.3 Ω    0.3 Ω    0.3 Ω    0.3 Ω         :
   :                                          :
   +--(A)-----------/\/\/\/ R = 4.8 Ω---------+
```

> **Figure 2.1** – Chaar AA cells series mein, motor R = 4.8 Ω ke saath. Har cell ke andar usi ek current ko apna 0.3 Ω jhelna padta hai: chaaron ke r jud kar 1.2 Ω.

**Example 1 (car ki chaal).** Figure 2.1 ke battery box ki E_total, r_total, current I, motor par voltage V aur battery ki efficiency nikalo.

- **Given:** n = 4, E = 1.5 V, r = 0.3 Ω har cell, R = 4.8 Ω
- **Find:** E_total, r_total, I, V, efficiency
- **Formula:** E_total = n E, r_total = n r, I = E_total ÷ (R + r_total), V = I R, efficiency = V ÷ E_total
- **Substitution:**
  - E_total = 4 × 1.5 V = **6.0 V**
  - r_total = 4 × 0.3 Ω = **1.2 Ω**
  - I = 6.0 V ÷ (4.8 Ω + 1.2 Ω) = 6.0 V ÷ 6.0 Ω = **1.0 A**
  - V = 1.0 A × 4.8 Ω = **4.8 V**
  - Efficiency = 4.8 V ÷ 6.0 V = **0.80**, yaani 80 percent
- **Jaanch:** V = E_total − I r_total = 6.0 V − 1.0 A × 1.2 Ω = 4.8 V ✅. Energy balance: battery ki kul power E I = 6.0 V × 1.0 A = 6.0 W; motor mein I² R = 1.0² × 4.8 = 4.8 W; cells ke andar I² r_total = 1.0² × 1.2 = 1.2 W; 4.8 W + 1.2 W = 6.0 W ✅

Dhyaan do: 4 cells ka E sach mein 4 guna hua (1.5 V se 6.0 V), par bahar motor ko poore 6.0 V nahi mile, sirf 4.8 V, kyunki 1.2 V cells ke andar kho gaya (Topic 1 ke lost volts I r).

### Ulta cell: dhakka ghatta hai, resistance nahi

Ab Figure 2.2: cousin ne chauthe cell ko ulta laga diya. Us cell ka + ab battery box ke (−) end ki taraf hai.

```
   (+) end                                  (−) end
         + −      + −      + −      − +
   +----┤├-------┤├-------┤├-------├┤---------+
   : 1.5 V    1.5 V    1.5 V    1.5 V         :
   : 0.3 Ω    0.3 Ω    0.3 Ω    0.3 Ω         :
   :                                          :
   +--(A)-----------/\/\/\/ R = 4.8 Ω---------+
```

> **Figure 2.2** – Chauthe cell ki polarity ulti hai. Pehle teen cells 3 × 1.5 V = 4.5 V ka dhakka dete hain, chautha cell 1.5 V ka dhakka ulta lagata hai.

**Example 2 (ulta cell).** Figure 2.2 mein net EMF, current aur motor ki power Example 1 se compare karo.

- **Given:** teen cells seedhe, ek ulta; har cell E = 1.5 V, r = 0.3 Ω; R = 4.8 Ω
- **Find:** E_net, I, motor ki power
- **Formula:** E_net = (seedhe cells ka E) − (ulte cells ka E); r_total phir bhi saare cells ka jod; I = E_net ÷ (R + r_total); P = I² R
- **Substitution:**
  - E_net = 3 × 1.5 V − 1.5 V = **3.0 V**
  - r_total = 4 × 0.3 Ω = **1.2 Ω** (ulte cell ka resistance bhi current ko rokta hai)
  - I = 3.0 V ÷ (4.8 Ω + 1.2 Ω) = 3.0 V ÷ 6.0 Ω = **0.5 A**
  - P = 0.5² A² × 4.8 Ω = **1.2 W**, jabki Example 1 mein 1.0² × 4.8 = 4.8 W
- **Jaanch:** current aadha hua (1.0 A se 0.5 A) ✅, aur power chauthai (1.2 W ÷ 4.8 W = 1 ÷ 4), kyunki P = I² R aur R wahi hai ✅. Units: V ÷ Ω = A, A² × Ω = W ✅

Isliye car band nahi hui, bas dheeri: E 6.0 V se girkar 3.0 V ho gaya, **par resistance 1.2 Ω ka 1.2 Ω hi raha**. Ulta cell E ghatata hai, par apna r phir bhi chain mein jodta hai: r kam nahi hota.

**Ghar par adult ke saath:** kisi torch mein 2 cells hon to ek cell ko **bas kuch second** ke liye ulta lagakar switch dabao: bulb nahi jalega (1.5 V − 1.5 V = 0 V). Phir turant cell seedha kar do. Is activity mein cells ko kabhi taar se seedha mat jodo, aur garm ho to rok do.

---

## Part B: Parallel mein cells: voltage wahi, par r ghat jaata hai

Ab maan lo hum n **identical** cells ke saare + ek taar (+ rail) se aur saare − doosre taar (− rail) se jodte hain. Bahar ka resistor R in dono rails ke beech hai.

```
   (+) rail                             (−) rail
   +---------------┤├-------------------+
   :        1.5 V, 0.3 Ω                :
   +---------------┤├-------------------+
   :        1.5 V, 0.3 Ω                :
   +---------------┤├-------------------+
   :        1.5 V, 0.3 Ω                :
   :                                    :
   +--(A)------/\/\/ R = 2.4 Ω----------+
```

> **Figure 2.3** – Teen AA cells parallel mein: teeno ke + sire ek rail par, teeno ke − sire doosre rail par. Rails ke beech bahar ka R = 2.4 Ω hai aur ammeter series mein.

**Voltage kyun wahi rehta hai?** Rails ke beech ka potential difference **ek hi** hota hai, aur har cell use E = 1.5 V par rakhna chahta hai. Bina bahar ke load ke rails ke beech 1.5 V hi milta hai. Teeno cells charge ko **ek hi jagah par, ek jaisa dhakka** de rahe hain, ek-ek karke jodte nahi, isliye dhakka teen guna nahi hota.

**r kyun ghatta hai?** Cells ke andar current ke liye ab **teen raaste** hain: ek 0.3 Ω wala raasta, doosra, teesra. Jaise ek chaudi sadak ke teen identical lanes: current teeno mein baat jaata hai, to cells ka milkar rukawat teen guna kam. Isse **n roads** wala reasoning kehte hain.

> **n identical cells parallel mein: E_total = E, r_total = r ÷ n, har cell current I ÷ n deta hai**

**Example 3 (teen cells parallel).** Figure 2.3 mein teen AA cells parallel mein hain aur bahar R = 2.4 Ω. Current, R par voltage, har cell ka current, aur ek akeli AA cell se compare karo.

- **Given:** n = 3, E = 1.5 V, r = 0.3 Ω, R = 2.4 Ω
- **Find:** I, V, har cell ka current; single cell ka I
- **Formula:** r_total = r ÷ n, I = E ÷ (R + r_total), V = I R, har cell: I ÷ n
- **Substitution:**
  - r_total = 0.3 Ω ÷ 3 = **0.1 Ω**
  - I = 1.5 V ÷ (2.4 Ω + 0.1 Ω) = 1.5 V ÷ 2.5 Ω = **0.6 A**
  - V = 0.6 A × 2.4 Ω = **1.44 V** (1.5 V se kam, par bahut paas)
  - Har cell: 0.6 A ÷ 3 = **0.2 A**
  - Akeli cell ke saath: I = 1.5 V ÷ (2.4 Ω + 0.3 Ω) = 1.5 V ÷ 2.7 Ω = **0.556 A** (lagbhag), V = 0.556 A × 2.4 Ω = 1.33 V (lagbhag)
- **Jaanch:** V = E − I r_total = 1.5 V − 0.6 A × 0.1 Ω = 1.44 V ✅. Teeno cells ke currents ka jod: 3 × 0.2 A = 0.6 A ✅ (junction par current in = current out)

**Zyada der kyun chalta hai?** Akeli cell ko lagbhag 0.556 A dena padta tha, parallel group mein har cell sirf 0.2 A deta hai. Capacity ke hisaab se cell ka chalne ka samay lagbhag 1 ÷ current ke barabar hota hai: 0.556 A ÷ 0.2 A = lagbhag **2.8 guna** zyada der (teen guna nahi, kyunki parallel mein kul current thoda badh gaya: 0.6 A, 0.556 A se zyada). Agar kul current wahi rakha jaye, to ye theek n guna hota hai.

> **Series mein capacity ek cell jitni rehti hai, voltage n guna. Parallel mein voltage ek cell jitna rehta hai, capacity n guna.**

---

## Part C: Same cells, do tarah se: kaun si jodi kab behtar?

Jayesh ke cousin ne kaha tha ki "parallel karo to zyada aayega". Chalo apne 4 AA cells ko **dono tarah** jodkar do alag-alag load par test karte hain: ek 3.0 Ω ka (jaise ek chhota bulb) aur ek bahut chhota 0.1 Ω ka load (jaise mota taar ki coil).

**Example 4 (series ya parallel?).** Chaar AA cells (E = 1.5 V, r = 0.3 Ω) ko pehle sab series mein, phir sab parallel mein jodo. Load 3.0 Ω aur 0.1 Ω par current nikalo.

- **Given:** n = 4, E = 1.5 V, r = 0.3 Ω, R = 3.0 Ω ya 0.1 Ω
- **Find:** dono jodne mein I
- **Formula:** series: I = n E ÷ (R + n r). Parallel: I = E ÷ (R + r ÷ n) = n E ÷ (n R + r)
- **Substitution** (n E = 6.0 V dono mein upar):
  - R = 3.0 Ω, series: 6.0 V ÷ (3.0 Ω + 1.2 Ω) = 6.0 V ÷ 4.2 Ω = **1.43 A** (lagbhag). Parallel: 1.5 V ÷ (3.0 Ω + 0.075 Ω) = 1.5 V ÷ 3.075 Ω = **0.488 A** (lagbhag)
  - R = 0.1 Ω, series: 6.0 V ÷ (0.1 Ω + 1.2 Ω) = 6.0 V ÷ 1.3 Ω = **4.62 A** (lagbhag). Parallel: 1.5 V ÷ (0.1 Ω + 0.075 Ω) = 1.5 V ÷ 0.175 Ω = **8.57 A** (lagbhag)
- **Jaanch:** terminal voltage V = E − I r: series, R = 3.0 Ω: 6.0 − 1.43 × 1.2 = 4.29 V, aur I R = 1.43 × 3.0 = 4.29 V ✅. Parallel, R = 0.1 Ω: 1.5 − 8.57 × 0.075 = 0.857 V, aur 8.57 × 0.1 = 0.857 V ✅

Pehle load par **series** jeeta (1.43 A, parallel ke 0.488 A se zyada), doosre par **parallel**. Rule kahan se aaya? Dono formulas ke denominator dekho:

- series: R + n r
- parallel (numerator n E ke saath): n R + r

Series tab bada current deta hai jab R + n r, n R + r se **chhota** ho, yaani jab (n − 1) r < (n − 1) R. Dono taraf (n − 1) hata do: **r < R**.

> **Rule:** agar bahar ka R, ek cell ke r se bada hai, to saare cells ko series mein jodo (zyada current). Agar R, r se chhota hai, to parallel zyada current deta hai. Barabar ho to dono barabar.

Jaanch: R = 3.0 Ω ≫ r = 0.3 Ω to series; R = 0.1 Ω < 0.3 Ω to parallel ✅. Asli zindagi mein zyadatar bulb, motor aur chip ka R, cell ke r (0.1 se 0.3 Ω) se bahut bada hota hai. Isliye **voltage ke liye series**, aur sirf "zyada der chalana" ho to parallel strings alag se. Ek aur baat: jis bulb ko 6 V chahiye, use 1.5 V ke 4 cells parallel karke nahi chala sakte: rule tabhi kaam karta hai jab dono tarah se device chal sakta ho.

---

## Part D: Mixed grouping aur battery pack

Aksar hamein **dono** chahiye: zyada voltage aur zyada der. Tab pehle series strings banate hain (voltage ke liye), phir unhe parallel jodte hain (capacity aur kam r ke liye). Isse **mixed grouping** kehte hain. Agar m strings parallel mein hain aur har string mein n cells series mein, to total cells m × n:

> **E_total = n E, r_total = (n r) ÷ m**, aur har string kul current ka I ÷ m deti hai.

```
   (+) rail                                 (−) rail
   +----┤├-------┤├-------┤├-------┤├-------+
   :  string 1: 4 cells series               :
   +----┤├-------┤├-------┤├-------┤├-------+
   :  string 2: 4 cells series               :
   :                                         :
   +--(A)------/\/\/ R = 3.4 Ω---------------+
```

> **Figure 2.4** – Mixed grouping: 4 cells ki do series strings, dono strings parallel mein, 8 AA cells ka pack. Har cell E = 1.5 V, r = 0.3 Ω.

**Example 5 (8 cells, 2 × 4).** Figure 2.4 ke pack ki E_total, r_total, current, har string ka current aur terminal voltage nikalo. (Bahar R = 3.4 Ω.)

- **Given:** n = 4 (series mein), m = 2 (strings), E = 1.5 V, r = 0.3 Ω, R = 3.4 Ω
- **Find:** E_total, r_total, I, string current, V
- **Formula:** E_total = n E; r_total = n r ÷ m; I = E_total ÷ (R + r_total); string current = I ÷ m
- **Substitution:**
  - E_total = 4 × 1.5 V = **6.0 V**
  - r_total = 4 × 0.3 Ω ÷ 2 = 1.2 Ω ÷ 2 = **0.6 Ω**
  - I = 6.0 V ÷ (3.4 Ω + 0.6 Ω) = 6.0 V ÷ 4.0 Ω = **1.5 A**
  - Har string: 1.5 A ÷ 2 = **0.75 A**
  - V = 1.5 A × 3.4 Ω = **5.1 V**
- **Jaanch:** V = E_total − I r_total = 6.0 V − 1.5 A × 0.6 Ω = 5.1 V ✅. Strings ka jod: 0.75 A + 0.75 A = 1.5 A ✅

### Phone ka pack, power bank, EV

Mobile ya laptop ke pack mein Li-ion cells (E lagbhag 3.7 V, r lagbhag 0.1 Ω) isi tarah jude hote hain. Power bank mein aur electric vehicle mein jo cells lagte hain, unka ek aam naam **"18650"** hai: ye naam unke size se aata hai (lagbhag 18 mm chaudai aur 65 mm lambai). Electric vehicle ke pack mein **bahut saare cells series mein** (voltage badhane ke liye) aur **bahut saari aisi strings parallel mein** (capacity aur kam r ke liye) hote hain. Isliye ek EV pack ek bahut bada mixed grouping hai.

**Example 6 (laptop pack).** 12 Li-ion cells (E = 3.7 V, r = 0.1 Ω, capacity 3000 mAh har cell: maan lo) ko 4 ki series strings mein jodkar 3 strings parallel mein lagaya gaya. Pack ki E, r, capacity, aur agar pack 7.4 A kheenche to terminal voltage, har string ka current aur chalne ka samay nikalo.

- **Given:** n = 4, m = 3, E = 3.7 V, r = 0.1 Ω, capacity 3000 mAh, I = 7.4 A
- **Find:** E_total, r_total, capacity_total, V, string current, samay
- **Formula:** E_total = n E; r_total = n r ÷ m; capacity_total = m × capacity (parallel mein badhti hai); V = E_total − I r_total; samay = capacity ÷ I
- **Substitution:**
  - E_total = 4 × 3.7 V = **14.8 V**
  - r_total = 4 × 0.1 Ω ÷ 3 = **0.133 Ω** (lagbhag)
  - Capacity = 3 × 3000 mAh = 9000 mAh = **9.0 Ah**
  - V = 14.8 V − 7.4 A × 0.133 Ω = 14.8 V − 0.987 V = **13.81 V** (lagbhag)
  - Har string: 7.4 A ÷ 3 = **2.47 A** (lagbhag)
  - Samay = 9.0 Ah ÷ 7.4 A = **1.2 h** (lagbhag, aadarsh maanke)
- **Jaanch:** 9.0 Ah ÷ 7.4 A: Ah ÷ A = h ✅. 3 strings × 2.47 A = 7.4 A ✅. Cells ka count 4 × 3 = 12 ✅

---

## Part E: Naye aur purane cells ko mat milao

Fresh AA cell ka r lagbhag 0.3 Ω hota hai, aur jab cell lagbhag khatam hota hai to uska r kuch ohm tak chala jaata hai (isi se Topic 1 ki torch dim thi). Purane cell ka E bhi kuch ghat jaata hai. Maan lo ek naya cell (E = 1.5 V, r = 0.3 Ω) aur ek purana cell (E = 1.2 V, r = 3.0 Ω) parallel mein jode gaye hain, **bina bahar ke load ke**. Dono ke + sire ek rail par, − sire doosre par:

```
   (+) rail                                 (−) rail
   +--------<-------┤├--------<-------------+
   :   naya cell: 1.5 V, 0.3 Ω               :
   :                                         :
   +--------->------┤├-------->-------------+
       purana cell: 1.2 V, 3.0 Ω
```

> **Figure 2.5** – Naya aur purana cell parallel mein, koi load nahi. Naya cell bada dhakka deta hai, to current rails se ghoomkar loop mein chalta hai: naye cell ke andar − se + ki taraf (upar wali row, tir bayein), aur purane cell ke andar uske apne dhakke ke **khilaaf**, + se − ki taraf (neeche wali row, tir dayein).

**Example 7 (naye aur purane cell ka loop).** Figure 2.5 ke loop ka current, rails ke beech voltage aur loop mein bekaar jaati power nikalo.

- **Given:** E₁ = 1.5 V, r₁ = 0.3 Ω; E₂ = 1.2 V, r₂ = 3.0 Ω; koi bahar ka load nahi
- **Find:** loop current I, rails ke beech V, power I² (r₁ + r₂)
- **Formula:** I = (E₁ − E₂) ÷ (r₁ + r₂), V = E₁ − I r₁, P = I² (r₁ + r₂)
- **Substitution:**
  - I = (1.5 V − 1.2 V) ÷ (0.3 Ω + 3.0 Ω) = 0.3 V ÷ 3.3 Ω = **0.0909 A** (lagbhag 91 mA)
  - V = 1.5 V − 0.0909 A × 0.3 Ω = 1.5 V − 0.0273 V = **1.473 V** (lagbhag)
  - P = 0.0909² A² × 3.3 Ω = **0.0273 W** (lagbhag)
- **Jaanch:** doosre cell se bhi: V = E₂ + I r₂ = 1.2 V + 0.0909 A × 3.0 Ω = 1.473 V ✅ (purane cell mein current uske apne dhakke ke khilaaf hai, isliye E₂ mein I r₂ **jodta** hai)

Matlab: bina koi kaam kiye bhi **naya cell dheere-dheere khali hota rehta hai** aur purana cell ko "charge" karne ki koshish ki jaati hai, jabki aisi cells charge hone ke liye bani hi nahi hain (aise cells se garmi aur chemical leak ho sakta hai). Ye energy sirf garmi ban kar bekaar jaati hai. Series mein bhi nuksaan hai: naya + purana cell, bahar R = 4.8 Ω ke saath, E = 1.5 V + 1.2 V = 2.7 V, r = 0.3 Ω + 3.0 Ω = 3.3 Ω, I = 2.7 ÷ (4.8 + 3.3) = 0.333 A, jabki do naye cells (E = 3.0 V, r = 0.6 Ω) se I = 3.0 ÷ 5.4 = 0.556 A. Isliye hamesha **saare cells ek saath, ek hi type ke** badlo.

---

## Part F: Cell ke andar kitna bekaar jaata hai

Cell ki kul power E I hai. Isme se bahar ko V I milta hai, aur andar I² r_total **garmi** ban kar jaata hai. Isliye:

> **efficiency = V ÷ E = R ÷ (R + r)** (series ya parallel group ke liye bhi, E aur r ki jagah total values)

Example 4 ke numbers se dekho: R = 3.0 Ω par series jodne se E = 6.0 V, r = 1.2 Ω, V = 4.29 V: efficiency = 4.29 ÷ 6.0 = **0.714** (lagbhag 71 percent). Parallel jodne se E = 1.5 V, r = 0.075 Ω, V = 1.463 V: efficiency = 1.463 ÷ 1.5 = **0.976** (lagbhag 98 percent). Dono mein bahar ki power: series 1.43² × 3.0 = 6.1 W (lagbhag), parallel 0.488² × 3.0 = 0.71 W (lagbhag). **Series mein zyada power milti hai par zyada garmi bhi cells ke andar; parallel mein bahut kam power par kam bekaar.** Isi wajah se bade current wale kaam (jaise car ki starter motor, 12 V battery, r lagbhag 0.02 Ω) ke liye cells ka r bahut kam rakha jaata hai.

Jaanch: R = 3.0 Ω, series: R ÷ (R + r) = 3.0 ÷ 4.2 = 0.714 ✅

---

## Aam galtiyan (bachke rehna)

**1. "Cells parallel karne se voltage badh jaata hai."** Parallel mein voltage ek cell jitna hi rehta hai. Demonstration: 2 AA cells (1.5 V, 0.3 Ω) ek bulb (2.7 Ω) ke saath. Parallel: E = 1.5 V, r = 0.15 Ω, I = 1.5 ÷ 2.85 = 0.526 A, bulb par V = 1.42 V, bulb ki power = 0.526² × 2.7 = 0.75 W (lagbhag). Series: E = 3.0 V, r = 0.6 Ω, I = 3.0 ÷ 3.3 = 0.909 A, bulb par V = 2.45 V, bulb ki power = 0.909² × 2.7 = 2.23 W (lagbhag). Series mein bulb lagbhag 3 guna zyada roshan hai: voltage ke liye series chahiye. Parallel ka fayda sirf r ghatna aur zyada der chalna hai.

**2. "Koi bhi cells milakar lagaye ja sakte hain: naye, purane, alag type ke."** Demonstration: Example 7 mein hi dekha: naya aur purana cell parallel mein bina load ke 91 mA ka loop current banate hain aur naya cell khali hota hai. Series mein bhi (Part E) naya + purana cell 0.333 A dete hain, do naye cells ke 0.556 A ki jagah: purane cell ka bada r (3.0 Ω) poori chain ki chaal ghata deta hai, aur usme garmi bhi banti hai. Alag type (alag E) ke cells mein bhi loop current banta hai. Isliye saare cells ek saath badlo, aur ek hi type ke lagao.

---

## Quick Recap

- **Series (n identical cells):** E_total = n E, r_total = n r, capacity ek cell jitni. Ulta cell E ghatata hai (E_net = seedhe − ulte), r phir bhi jud jaata hai.
- **Parallel (n identical cells):** E_total = E, r_total = r ÷ n, har cell I ÷ n deta hai, capacity n guna. Voltage badhta nahi.
- **Mixed (m strings, har string mein n cells):** E_total = n E, r_total = n r ÷ m.
- **Series ya parallel?** n cells ko dono tarah jodne par series zyada current deta hai agar R > r (ek cell ka); parallel zyada deta hai agar R < r.
- **Cell ki efficiency** = V ÷ E = R ÷ (R + r); andar ki garmi = I² r_total.
- **Naye aur purane, ya alag type ke cells kabhi mat milao.** Ghar par sirf bade ke saath polarity theek se lagao; kabhi cell ko taar se short mat karo, na kholo, na garam karo.

---

## Practice Questions

1. Five cells, each of E = 1.2 V and r = 0.25 Ω, are connected in series to a load of R = 2.75 Ω. Find the current, the terminal voltage, the lost volts inside the cells and the efficiency.
2. Two cells, each of E = 2 V and r = 0.5 Ω, are connected to a load of R = 6 Ω, first in series and then in parallel. Find the current in each case. Which is larger, and does it agree with the rule you learnt?
3. Three Li-ion cells (E = 3.7 V, r = 0.1 Ω each) are connected in series to a load of R = 7.2 Ω. Find E_total, r_total, the current, the terminal voltage and the power in the load.
4. The same three Li-ion cells (E = 3.7 V, r = 0.1 Ω) are now connected in parallel to a load of R = 1.2 Ω. Find the current, the current from each cell and the terminal voltage.
5. Six cells, each of E = 1.8 V and r = 0.6 Ω, are connected as 2 strings in parallel, each string having 3 cells in series. A load of R = 3.6 Ω is connected. Find E_total, r_total, the current, the current in each string and the terminal voltage.
6. A torch has 3 cells, each of E = 1.6 V and r = 0.4 Ω, and a bulb of R = 3.8 Ω. Find the current (a) with all cells correct and (b) when one cell is put in backwards. By what factor does the bulb's power change?
7. A battery of E = 7.5 V and total internal resistance 2.5 Ω is connected to a load of R = 12.5 Ω. Find the current, the terminal voltage, the efficiency, and the power wasted inside the battery.
8. A cell A (E = 1.7 V, r = 0.2 Ω) and a weak cell B (E = 1.1 V, r = 2.8 Ω) are joined in parallel with no external load. Find the current in the loop, the voltage between the rails, the heat power produced in the loop, and say which cell is being "charged".
9. A pack is made of 4 cells (E = 3.6 V, r = 0.15 Ω, capacity 2600 mAh each) as 2 cells in series per string and 2 strings in parallel. Find E_total, r_total and the capacity of the pack. If the pack feeds a load of R = 3.45 Ω, find the current, the current in each string, the terminal voltage and the running time.
10. Six identical cells, each of E = 1.4 V and r = 0.6 Ω, are available. A thick coil of R = 0.3 Ω is to be driven. Compare the current with all six in series and with all six in parallel. Which is better and why? How much current does each cell give in the parallel case?
11. State True or False, and correct if false: (a) Two 1.5 V cells in parallel give 3 V. (b) In a parallel group of n identical cells each cell supplies 1 ÷ n of the current. (c) A cell connected backwards in a series chain adds its internal resistance but subtracts its EMF. (d) The internal resistance of n identical cells in parallel is n r.
12. A toy needs 9 V and draws 0.8 A. You have AA cells (E = 1.5 V, r = 0.3 Ω, capacity 2000 mAh each). (a) How many cells in one series string? (b) You want it to run 4 times as long: how many strings in parallel and how many cells in all? (c) Find the pack's r_total and the voltage at the toy, and the running time with one string and with the full pack.

### Answers

1. Given: n = 5, E = 1.2 V, r = 0.25 Ω, R = 2.75 Ω. E_total = 5 × 1.2 V = 6.0 V, r_total = 5 × 0.25 Ω = 1.25 Ω. I = 6.0 V ÷ (2.75 Ω + 1.25 Ω) = 6.0 V ÷ 4.0 Ω = **1.5 A**. V = 1.5 A × 2.75 Ω = **4.125 V**. Lost volts = 1.5 A × 1.25 Ω = **1.875 V**. Efficiency = 4.125 ÷ 6.0 = **0.6875** (lagbhag 69 percent). Jaanch: 4.125 V + 1.875 V = 6.0 V ✅

2. Series: E = 4 V, r = 1.0 Ω, I = 4 ÷ (6 + 1) = **0.571 A** (lagbhag). Parallel: E = 2 V, r = 0.25 Ω, I = 2 ÷ (6 + 0.25) = **0.32 A**. Series bada, kyunki R = 6 Ω, r = 0.5 Ω se bada hai (R > r): rule se agreement ✅. Jaanch: dono denominators: R + n r = 6 + 1 = 7, aur n R + r = 12 + 0.5 = 12.5, numerator dono mein n E = 4: 4 ÷ 7 > 4 ÷ 12.5 ✅

3. E_total = 3 × 3.7 V = **11.1 V**, r_total = 3 × 0.1 Ω = **0.3 Ω**. I = 11.1 ÷ (7.2 + 0.3) = 11.1 ÷ 7.5 = **1.48 A**. V = 1.48 × 7.2 = **10.66 V** (lagbhag). P = I² R = 1.48² × 7.2 = **15.8 W** (lagbhag). Jaanch: V I = 10.656 × 1.48 = 15.77 W ✅

4. r_total = 0.1 Ω ÷ 3 = 0.0333 Ω. I = 3.7 V ÷ (1.2 Ω + 0.0333 Ω) = 3.7 ÷ 1.2333 = **3.0 A**. Har cell: 3.0 ÷ 3 = **1.0 A**. V = 3.0 A × 1.2 Ω = **3.6 V**. Jaanch: V = E − I r_total = 3.7 − 3.0 × 0.0333 = 3.6 V ✅ (voltage 3.7 V se zyada kabhi nahi: parallel voltage nahi badhata)

5. n = 3, m = 2. E_total = 3 × 1.8 V = **5.4 V**. r_total = 3 × 0.6 Ω ÷ 2 = **0.9 Ω**. I = 5.4 ÷ (3.6 + 0.9) = 5.4 ÷ 4.5 = **1.2 A**. Har string: 1.2 ÷ 2 = **0.6 A**. V = 1.2 × 3.6 = **4.32 V**. Jaanch: 5.4 − 1.2 × 0.9 = 4.32 V ✅; 0.6 A + 0.6 A = 1.2 A ✅

6. Sahi: E = 3 × 1.6 = 4.8 V, r_total = 3 × 0.4 = 1.2 Ω, I = 4.8 ÷ (3.8 + 1.2) = 4.8 ÷ 5.0 = **0.96 A**. Ulta: E_net = 2 × 1.6 − 1.6 = 1.6 V, r_total phir 1.2 Ω, I = 1.6 ÷ 5.0 = **0.32 A**. Bulb ki power I² R: (0.32 ÷ 0.96)² = (1 ÷ 3)² = 1 ÷ 9, yaani power **9 guna kam**. Jaanch: 0.96² × 3.8 = 3.50 W, 0.32² × 3.8 = 0.389 W, 3.50 ÷ 0.389 = 9.0 ✅

7. I = 7.5 ÷ (12.5 + 2.5) = 7.5 ÷ 15 = **0.5 A**. V = 0.5 × 12.5 = **6.25 V**. Efficiency = 6.25 ÷ 7.5 = **0.833** (lagbhag 83 percent). Andar ki garmi = I² r = 0.25 × 2.5 = **0.625 W**. Jaanch: kul 7.5 × 0.5 = 3.75 W = bahar 0.25 × 12.5 = 3.125 W + andar 0.625 W ✅

8. I = (1.7 − 1.1) ÷ (0.2 + 2.8) = 0.6 V ÷ 3.0 Ω = **0.2 A**. Rails ke beech V = 1.7 − 0.2 × 0.2 = **1.66 V**. Garmi = I² (r_A + r_B) = 0.04 × 3.0 = **0.12 W**. **Cell B** "charge" ho raha hai: uske andar current uske apne dhakke ke khilaaf. Jaanch: V = E_B + I r_B = 1.1 + 0.2 × 2.8 = 1.66 V ✅

9. n = 2, m = 2. E_total = 2 × 3.6 V = **7.2 V**. r_total = 2 × 0.15 Ω ÷ 2 = **0.15 Ω**. Capacity = 2 × 2600 mAh = **5200 mAh** (5.2 Ah). I = 7.2 ÷ (3.45 + 0.15) = 7.2 ÷ 3.6 = **2.0 A**. Har string: 2.0 ÷ 2 = **1.0 A**. V = 2.0 × 3.45 = **6.9 V**. Samay = 5.2 Ah ÷ 2.0 A = **2.6 h** (lagbhag). Jaanch: V = 7.2 − 2.0 × 0.15 = 6.9 V ✅

10. Series: E = 6 × 1.4 = 8.4 V, r = 6 × 0.6 = 3.6 Ω, I = 8.4 ÷ (0.3 + 3.6) = 8.4 ÷ 3.9 = **2.15 A** (lagbhag). Parallel: E = 1.4 V, r = 0.6 ÷ 6 = 0.1 Ω, I = 1.4 ÷ (0.3 + 0.1) = 1.4 ÷ 0.4 = **3.5 A**. **Parallel behtar**, kyunki R = 0.3 Ω, ek cell ke r = 0.6 Ω se chhota hai (R < r). Har cell: 3.5 ÷ 6 = **0.583 A** (lagbhag). Jaanch: 6 × 0.583 = 3.5 A ✅

11. (a) **False** ❌, parallel mein voltage 1.5 V hi rehta hai, 3 V series mein milta. (b) **True** ✅, identical cells mein current barabar baat jaata hai. (c) **True** ✅, dhakka ulta lagta hai par r jud jaata hai. (d) **False** ❌, r ÷ n hota hai (n raaste hone se rukawat ghat-ti hai).

12. (a) 9 V ÷ 1.5 V = **6 cells** series mein. (b) 4 guna samay ke liye capacity 4 guna: **4 strings** parallel mein, kul 4 × 6 = **24 cells**. (c) r_total = 6 × 0.3 Ω ÷ 4 = 1.8 Ω ÷ 4 = **0.45 Ω**. Toy par voltage = 9 − 0.8 × 0.45 = **8.64 V**. Ek string ka samay = 2.0 Ah ÷ 0.8 A = **2.5 h**; poora pack: 8.0 Ah ÷ 0.8 A = **10 h**. (Lagbhag, aadarsh maanke.) Jaanch: 10 ÷ 2.5 = 4 guna ✅

---

Ab tum jaante ho ki cells ka combination sirf "voltage badhao" nahi hai: series mein E aur r dono jud jaate hain, parallel mein E wahi rehta hai par r aur kaam ka bojh baat jaata hai, aur R > r wala rule batata hai ki kaun si jodi bada current degi. Jayesh ne cousin se kaha, "Ab bata: series ya parallel?" Cousin muskuraya, "Ab to pehle R aur r tolna padega!"

**Aage kya?** Topic 3 mein dekhenge ki jab ek hi bulb kharab ho jaye, to kaun si bulbs bujhengi aur kaun si jalti rahengi: kuch mushkil circuits ko bina chakkar ke symmetry, "barabar potential wale points" aur divider ki madad se aasani se kaise suljhate hain.
