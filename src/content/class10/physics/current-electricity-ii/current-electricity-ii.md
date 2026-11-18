# Chapter: Current Electricity II: Cells, Networks and Real Components

> **Class:** 10 | **Subject:** Physics
> **Pichhle chapter ki aakhri file:** [vibrations-and-resonance-part6.md](../vibrations-and-resonance/vibrations-and-resonance-part6.md) (jhoole, sound aur resonance ke baad ab hum bijli par wapas aate hain). Recall ke liye Class 9: cell aur EMF ki ek line [electricity-part3.md](../../../class9/physics/electricity/electricity-part3.md), Ohm ka law [electricity-part4.md](../../../class9/physics/electricity/electricity-part4.md), series aur parallel [electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md).
> **Topics covered in this file:**
> 1. EMF Aur Internal Resistance: Cell Ke Andar Ka Raaz

---

# Topic 1: EMF Aur Internal Resistance: Cell Ke Andar Ka Raaz

Class 9 mein tumne bijli ke circuits ke andar bahut kuch seekha: Ohm ka law, series aur parallel, aur bulb par power. Wahan ek chhoti si cheez jaan-boojhkar chhod di gayi thi: cell ko hamesha ek "perfect" source maana gaya tha, jiska voltage jo likha hai, wahi har haal mein milta hai. Class 9 ne khud kaha tha ki EMF ki detail aage ki class mein hai. Is chapter ka pehla kadam wahi detail hai: **asli cell ke andar kya hota hai?** Aage ke topics mein hum cells ko jodna, mushkil circuits, taar aur resistor, aur power-bill ke numericals dekhenge.

---

## Prerna ki torch aur Mama ka multimeter

Itwaar ki shaam light chali gayi. Mr. Parulekar apni bhanji Prerna ke saath baithe the. Prerna ne apni chhoti torch uthayi, jismein sirf ek AA cell lagta tha. Pehle hafte mein torch itni tez chamakti thi ki poori chhat roshan ho jaati thi. Aaj uski roshni peeli aur dheemi thi.

"Mama, cell kharab ho gaya!" Prerna boli. "Par ye kaise ho sakta hai? Pichhli baar aapne multimeter se napa tha to **1.4 volt** dikha tha, aur naye cell par bhi lagbhag 1.5 volt hi hota hai. Itna thoda sa farak aur torch itni dim?"

Mama muskuraye. "Bahut achha sawal. Chalo, aaj ek sawal ka jawab dhoondhte hain: **jo cell 1.4 V dikhata hai, wo bulb ko 1.4 V kyun nahi deta?** Multimeter wapas lao." Phir unhone khud (bacchon ko multimeter akele nahi dete) cell ke do sirey multimeter se joda: 1.4 V. Phir torch ka bulb cell se jodkar, jalte hue, voltmeter bulb ke dono sirey par lagaya: reading sirf **lagbhag 0.8 V**!

"Dekha? Cell wahi hai, par reading badal gayi. Cell ke andar kuch chhupa hai." Prerna ne sir khujlaya. "Kya chhupa hai, Mama?" "Wahi aaj ke topic ka raaz hai."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **EMF (E)** | Cell jitni energy har 1 C charge ko deta hai (J per C). Ye cell ka "asli dhakka" hai | AA cell ka E lagbhag 1.5 V: har coulomb ko lagbhag 1.5 J |
| **Open circuit** | Aisa circuit jismein koi current nahi behta (switch khula hai, ya sirf ek voltmeter judi hai) | Cell ke do sirey par sirf voltmeter laga ho |
| **Internal resistance (r)** | Cell ke andar ke chemicals aur electrodes ki apni rukawat: cell ke andar se guzarte current ko ye rokti hai | Fresh AA cell ka r lagbhag 0.3 Ω |
| **External resistance ya load (R)** | Cell ke bahar jude saare resistors ka kul resistance (bulb, motor, taar) | Torch ke bulb ka 4.7 Ω |
| **Terminal voltage (V)** | Current behte samay cell ke do terminals ke beech ka potential difference | Jalti torch mein cell ke sirey par 1.41 V |
| **Lost volts (I r)** | Wo voltage jo cell ke andar hi kharch ho jaata hai, bahar tak nahi pahunchta | 0.3 A par 0.3 Ω se 0.09 V |
| **Short-circuit current** | Jab bahar ka resistance lagbhag zero ho jaaye, tab cell se behne wala bahut bada current, E ÷ r | AA cell ke liye lagbhag 5 A |

---

## Class 9 se ek chhota recall

- Class 9 [electricity-part3.md](../../../class9/physics/electricity/electricity-part3.md) mein EMF ki ek line thi: current na behne par cell ke terminals ke beech ka potential difference. Wahan likha tha "naam bhar, aage ki class mein detail". **Aaj wo detail hai.**
- [electricity-part4.md](../../../class9/physics/electricity/electricity-part4.md): Ohm ka law, V = I R.
- [electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md): series mein resistances add hote hain, aur har jagah wahi current behta hai.

Bas itna kaafi hai. Ab ek naya vichaar: **cell khud bhi ek resistor jaisa hai**, jo hamare bulb ke series mein jud jaata hai.

---

## Part A: Cell = E aur r series mein

Cell ke andar chemical reaction se E milta hai, jaisa Class 9 mein dekha. Par current ko us cell ke andar se bhi guzarna padta hai: chemicals, electrodes, sab se hokar. Wahan bhi thodi rukawat hai. Is rukawat ko hum **internal resistance r** kehte hain. Ye koi alag resistor nahi hai jo cell ke bahar laga ho: ye cell ke andar hi, cell ke saath bani hui hai. Phir bhi bijli ke hisaab ke liye hum use aise dikhate hain jaise **ek perfect cell E ke saath r series mein juda ho** (Figure 1.1).

```
      P (+)                I  ──►
          ┌────────────(A)──────────┬───────────┐
    ┌ ─ ─ ● ─ ─ ─ ┐                 │           │
    :     │       :                (V)          │
    :    ─┴─ + E  :                 │       ┌───┴───┐
    :    ─┬─ −    :                 │       │   R   │
    :     │       :                 │       │ bulb  │
    :   ┌─┴─┐     :                 │       └───┬───┘
    :   │ r │     :                 │           │
    :   └─┬─┘     :                 │           │
    :     │       :                 │           │
    └ ─ ─ ● ─ ─ ─ ┘                 │           │
          └─────────────────────────┴───────────┘
      N (−)

```

> **Figure 1.1** – Asli cell ka model: dashed dabba ek cell hai, jiske andar E (perfect cell) aur r series mein hain. Bahar ka circuit: ammeter (A) series mein, voltmeter (V) bulb R ke parallel. P positive terminal hai, N negative. Conventional current P se nikalkar bahar ke circuit mein ghoomti hai aur N se wapas cell mein jaati hai.

Ab Class 9 ka series wala niyam seedha lagao: ek hi loop mein r aur R series mein hain, to **loop ka kul resistance R + r** hai, aur E ka dhakka isi par kaam karta hai. Ohm ka law poore loop par:

> **I = E ÷ (R + r)**

Cell ke andar r par voltage girta hai I r (lost volts). Bahar ke bulb R par jo bacha, wahi terminal voltage hai:

> **V = E − I r = I R**

Ek aur tareeqe se bhi dekho. E ka matlab hai har coulomb ko E joule milti hain. Jab ek coulomb cell ke andar se guzarta hai, to I r jitni energy (per coulomb) andar hi garmi ban jaati hai. Jo bachi, E − I r, wahi bahar ke circuit ko milti hai. Isliye **V hamesha E se chhota hota hai** (jab tak I zero na ho).

**Example 1 (fresh AA cell aur torch ka bulb).** Fresh AA cell: E ≈ 1.5 V, r ≈ 0.3 Ω (lagbhag). Torch ke bulb ka resistance 4.7 Ω hai. Current, terminal voltage aur lost volts nikalo.

- Given: E = 1.5 V, r = 0.3 Ω, R = 4.7 Ω
- Find: I, V, I r
- Formula: I = E ÷ (R + r); V = I R; lost volts = I r
- Substitution: R + r = 4.7 Ω + 0.3 Ω = 5.0 Ω. I = 1.5 V ÷ 5.0 Ω = **0.3 A**
- V = I R = 0.3 A × 4.7 Ω = **1.41 V**
- Lost volts = I r = 0.3 A × 0.3 Ω = **0.09 V**

**Jaanch:** V + I r = 1.41 V + 0.09 V = 1.50 V = E ✅. Energy balance: cell ki power E I = 1.5 V × 0.3 A = 0.45 W. Bulb mein I² R = 0.09 A² × 4.7 Ω = 0.423 W, cell ke andar I² r = 0.09 A² × 0.3 Ω = 0.027 W, aur 0.423 W + 0.027 W = 0.45 W ✅

**Example 2 (purana AA cell, wahi bulb).** Prerna ke cell ka multimeter (bina load) 1.4 V de raha tha. Maan lo ab uska r badhkar lagbhag 3.3 Ω ho gaya hai. Wahi 4.7 Ω ka bulb lagao. Current, V, lost volts aur bulb ki power nikalo.

- Given: E = 1.4 V, r = 3.3 Ω, R = 4.7 Ω
- Find: I, V, I r, bulb ki power
- Formula: I = E ÷ (R + r); V = I R; P = I² R
- Substitution: R + r = 4.7 Ω + 3.3 Ω = 8.0 Ω. I = 1.4 V ÷ 8.0 Ω = **0.175 A**
- V = 0.175 A × 4.7 Ω = 0.8225 V ≈ **0.82 V**
- Lost volts = 0.175 A × 3.3 Ω = 0.5775 V ≈ **0.58 V**
- Bulb ki power = (0.175 A)² × 4.7 Ω = 0.0306 A² × 4.7 Ω ≈ **0.14 W**

**Jaanch:** V + I r = 0.8225 V + 0.5775 V = 1.40 V = E ✅. Cell ki kul power E I = 1.4 V × 0.175 A = 0.245 W; cell ke andar I² r = 0.0306 A² × 3.3 Ω ≈ 0.101 W; bulb mein 0.144 W; 0.144 W + 0.101 W = 0.245 W ✅

| Cell | E | r | Current I | Bulb par V | Bulb ki power |
|---|---|---|---|---|---|
| Fresh | 1.5 V | 0.3 Ω | 0.3 A | 1.41 V | lagbhag 0.42 W |
| Purana | 1.4 V | 3.3 Ω | 0.175 A | 0.82 V | lagbhag 0.14 W |

**Raaz khul gaya.** E sirf 1.5 V se 1.4 V hua (bahut thoda), par r lagbhag 0.3 Ω se 3.3 Ω ho gaya (das guna se zyada). Bulb ki power lagbhag 0.42 W se ghatkar lagbhag 0.14 W, yaani lagbhag ek-tihai rah gayi. Aur purane cell mein 0.245 W mein se lagbhag 0.10 W, yaani lagbhag 41 percent, cell ke andar hi garmi ban gaya. Torch isiliye dim hui, aur Prerna ka multimeter ka 1.4 V is gadbad ko chhupa gaya, kyunki us reading mein koi current tha hi nahi.

(Sach ye hai ki cell ke purane hone par r kyun badhta hai, iski chemistry lambi hai. Yahan itna jaanna kaafi hai ki nearly dead cell ka r lagbhag kuch ohm tak pahunch jaata hai.)

---

## Part B: Voltmeter kab E padhta hai aur kab V

Voltmeter ka resistance bahut bada hota hai (Class 9). Agar cell ke do sirey par sirf voltmeter jod do (aur bahar kuch nahi), to circuit open circuit hai, current lagbhag zero hai, aur lost volts I r lagbhag zero. Tab V = E − 0 = **E**. Yehi Class 9 wali EMF ki ek line thi.

```
      P (+)
          ┌───────────────────┐
    ┌ ─ ─ ● ─ ─ ─ ┐           │
    :    ─┴─ + E  :           │
    :    ─┬─ −    :          (V)
    :     │       :           │
    :   ┌─┴─┐     :           │
    :   │ r │     :           │
    :   └─┬─┘     :           │
    └ ─ ─ ● ─ ─ ─ ┘           │
          └───────────────────┘
      N (−)
```

> **Figure 1.2** – Open circuit: cell ke sirey P aur N par sirf voltmeter (V). Bahar koi bulb nahi, to current lagbhag zero aur voltmeter lagbhag E padhta hai. (Voltmeter ka bahut bada resistance ek bahut chhota current kheenchta hai, isliye reading E se ek zarra kam hoti hai.)

Jaise hi bulb jodte ho, current behne lagta hai, I r kharch hota hai, aur wahi voltmeter ab **V = E − I r** padhta hai, jo E se chhota hai. Prerna ke 1.4 V (open circuit) aur 0.8 V (bulb ke saath) mein ab koi virodh nahi hai: dono sahi hain, bas dono alag cheezein hain.

| Halat | Current | Voltmeter kya batata hai |
|---|---|---|
| Switch khula, sirf voltmeter | lagbhag 0 | E (EMF) |
| Switch band, bulb jala | I = E ÷ (R + r) | V = E − I r (E se chhota) |

**Nateeja:** R jitna bada, I utna chhota, I r utna chhota, aur V utna hi E ke paas. Chhote R (bhaari load) par I bada, I r bada, V bahut gir jaata hai.

**School mein teacher ke saath (sirf ek AA cell):** teacher ek AA cell, ek torch bulb ka holder aur ek voltmeter lekar pehle sirf cell par reading lete hain, phir bulb jalakar bulb par reading. Dono readings ka farak lost volts hai. (Cell ko kabhi seedha taar se mat jodna, aur cell ko kholna ya garm karna mana hai. Ghar par ye multimeter wala kaam akele mat karo.)

**Ghar par adult ke saath (sirf dekhna):** torch mein ek hi tarah ke naye cells, phir ek hi tarah ke purane cells lagakar chamak dekho (naye aur purane ek saath nahi milana: wajah Topic 2 mein). Cell ko kholna, garm karna ya taar se jodna mana hai.

---

## Part C: Gaadi ki battery, headlight aur starter

Car ki battery ek lead-acid battery hai: E ≈ 12 V, r ≈ 0.02 Ω (lagbhag). r itna chhota isiliye rakha jaata hai ki **starter motor lagbhag 150 A ya usse zyada current kheench sake**. Dekhte hain jab driver chaabi ghumata hai to kya hota hai.

**Example 3.** Car ki battery E ≈ 12 V, r ≈ 0.02 Ω. Starter chalte samay lagbhag 150 A kheenchta hai. Battery ke terminals par V kitna? Aur ek headlight, jiska resistance nahi badla, uski power pehle ki kitni rahi?

- Given: E = 12 V, r = 0.02 Ω, I = 150 A
- Find: V, aur headlight ki power ka ratio
- Formula: V = E − I r; headlight (R wahi) mein P ∝ V²
- Substitution: lost volts = 150 A × 0.02 Ω = **3.0 V**. V = 12 V − 3.0 V = **9.0 V**
- Power ratio = (9.0 V ÷ 12 V)² = (0.75)² = 0.5625, yaani headlight ki power lagbhag **56 percent**

**Jaanch:** Units: A × Ω = V ✅. Ratio 0.5625 × 100 = 56.25 percent ✅. (Honest note: ek garm filament thoda thanda hokar chhote R wala ho jaata hai aur asli starter ka current bhi alag ho sakta hai, isliye 56 percent ek mota anuman hai. Par dim hona asli baat hai.)

Yehi wajah hai ki starter ke chalte hi headlights dim ho jaati hain: lost volts ka 3 V battery ke andar hi kharch hua. Starter chhootte hi I phir chhota ho jaata hai aur lights wapas tez ho jaati hain.

Ek sawal aur: torch ka AA cell car kyun nahi chala sakta? Us cell ka r ≈ 0.3 Ω hai. 150 A ke liye lost volts hote 150 A × 0.3 Ω = 45 V, jabki E sirf 1.5 V hai. Cell se kabhi 1.5 V ÷ 0.3 Ω = 5 A se zyada current nikal hi nahi sakta. **Bada r matlab chhota maximum current.**

---

## Part D: Short circuit: ek sirf padhne wali baat

Agar bahar ka R lagbhag zero ho jaaye (cell ke do terminals ko seedha taar se jod do), to I = E ÷ (R + r) mein R ≈ 0 rakhne par:

> **I (short circuit) = E ÷ r**

Ye us cell ka sabse bada sambhav current hai. (Asli taar mein thoda resistance hota hai to current thoda kam hoga, par baat wahi rahegi.)

**Example 4 (sirf kaagaz par).** Teen cells ka short-circuit current aur cell ke andar garmi:

| Cell | E | r | E ÷ r | Cell ke andar garmi I² r |
|---|---|---|---|---|
| AA (fresh) | 1.5 V | 0.3 Ω | lagbhag 5 A | 25 A² × 0.3 Ω = 7.5 W |
| Phone ka Li-ion | 3.7 V | 0.1 Ω | lagbhag 37 A | 1369 A² × 0.1 Ω = 136.9 W |
| Car ki battery | 12 V | 0.02 Ω | lagbhag 600 A | 360000 A² × 0.02 Ω = 7200 W |

**Jaanch:** Units: V ÷ Ω = A ✅; A² × Ω = W ✅. Phone cell ke liye 3.7 V ÷ 0.1 Ω = 37 A ✅.

Socho: ek chhote AA cell ke andar 7.5 W garmi, aur phone cell ke andar lagbhag 137 W! Itni garmi cell ko garm karke phula sakti hai, leak karwa sakti hai, aur taar pighla sakti hai. Isliye **cell ko kabhi seedha taar se mat jodo. Ye sirf kaagaz par samajhne ki baat hai, kisi ko karne ki nahi.** Ghar mein jab taar ya wiring ke beech aisa hota hai to bhayanak aag lag sakti hai: aisi halat se ghar ko bachane wale fuse ka kaam Chapter 8 (Household Circuits and Safety) mein.

---

## Part E: E aur r napna (lab ki vidhi)

Cell ke andar r kisi taar jaisa dikhta nahi, to use napte kaise hain? Har cell mein do unknowns hain: E aur r. Dono nikalne ke liye hamein **do alag (V, I) readings** chahiye, kyunki V = E − I r ek hi equation hai aur usmein E aur r dono chhupe hain.

**School lab mein teacher ke saath (sirf padhne ke liye ya lab mein):** ek cell, ek rheostat (variable resistor), ek ammeter series mein, ek voltmeter cell ke sirey par, aur ek key. Rheostat ko ghumakar R badlo, har baar I aur V note karo. Key sirf reading lene ke liye dabaao, baaki samay khuli rakho, taaki cell zyada garm na ho.

**Example 5 (do readings se E aur r).** Ek cell ke liye lab mein ye readings aayi: I = 0.4 A par V = 4.52 V, aur I = 1.2 A par V = 3.96 V. E aur r nikalo.

- Given: (I₁, V₁) = (0.4 A, 4.52 V); (I₂, V₂) = (1.2 A, 3.96 V)
- Find: E, r
- Formula: V = E − I r, dono readings par
- Substitution: 4.52 V = E − 0.4 A × r ... (1) aur 3.96 V = E − 1.2 A × r ... (2)
- (1) − (2): 0.56 V = 0.8 A × r, to r = 0.56 V ÷ 0.8 A = **0.7 Ω**
- (1) mein: E = 4.52 V + 0.4 A × 0.7 Ω = 4.52 V + 0.28 V = **4.8 V**

**Jaanch:** (2) mein: E − 1.2 A × 0.7 Ω = 4.8 V − 0.84 V = 3.96 V ✅. Rheostat ke R: 4.52 V ÷ 0.4 A = 11.3 Ω aur 3.96 V ÷ 1.2 A = 3.3 Ω; I = E ÷ (R + r) = 4.8 V ÷ (11.3 Ω + 0.7 Ω) = 0.4 A ✅ aur 4.8 V ÷ (3.3 Ω + 0.7 Ω) = 1.2 A ✅

Asli lab mein 5 ya 6 readings lete hain aur unka **V-I graph** banate hain. Wo ek seedhi, neeche ki taraf jaati line hoti hai kyunki V = E − r I ek seedhi line ka equation hai (Figure 1.3, Example 5 ke hi numbers ke saath).

```
     V (volt)
     5 ┤
       │**O***
     4 ┤      ***O**
       │            *****
     3 ┤                 ******
       │                       ******
     2 ┤                             *****
       │                                  ******
     1 ┤                                        ******
       │                                              *****
       └───────┴───────┴───────┴───────┴───────┴───────┴───***─┴───────
       0       1       2       3       4       5       6       7
                             I (ampere)
```

> **Figure 1.3** – Cell ka V-I graph (sketch). Line y-axis ko E = 4.8 V par kaatti hai (I = 0 par V = E). Jo do readings Example 5 mein thi, wo O se dikhai gayi hain. Line neeche jaati hai aur x-axis par lagbhag 6.9 A par lagti hai: wahi short-circuit current E ÷ r (yahan 4.8 V ÷ 0.7 Ω), jo kaagaz par line ko aage badhakar padha jaata hai, cell se nikala nahi jaata.

- **Y-axis ka intercept** (jahan I = 0) = **E** = 4.8 V.
- **Slope** = (3.96 V − 4.52 V) ÷ (1.2 A − 0.4 A) = −0.56 V ÷ 0.8 A = **−0.7 V/A**. Slope ka sankhya wala hissa hi **r** hai: **r = 0.7 Ω**. Minus ka matlab: I badhne par V girta hai.
- **X-axis ka intercept** (jahan V = 0) = E ÷ r lagbhag 6.9 A.

**Jaanch:** Unit: V ÷ A = Ω ✅. Dono tareeke (equations aur graph) ne r = 0.7 Ω aur E = 4.8 V diya ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Circuit mein cell ke terminals par voltmeter ki reading uska EMF hai."**
Sahi: wo reading **terminal voltage V** hai, aur wo E se chhoti hoti hai. E tab hi dikhta hai jab current lagbhag zero ho.

Demo: Prerna fresh AA cell (E ≈ 1.5 V, r ≈ 0.3 Ω) ko 2.2 Ω ke bulb se jodti hai aur sirey par voltmeter lagakar padhti hai 1.32 V. Wo kehti hai "mera cell to 1.32 V ka hai!". Jaanch: I = 1.5 V ÷ (2.2 Ω + 0.3 Ω) = 0.6 A, V = 0.6 A × 2.2 Ω = 1.32 V. Asli E = V + I r = 1.32 V + 0.6 A × 0.3 Ω = 1.32 V + 0.18 V = 1.50 V ✅. 1.32 V sirf V hai, E nahi.

**Galti 2: "Internal resistance ek alag resistor hai jo cell ke bahar dikh jaata hai ya hata sakte hain."**
Sahi: r cell ke andar hi hai, cell ke saath bana hai. Hum use cell se alag nikalkar dekh ya hata nahi sakte. Figure 1.1 mein dabba sirf **model** hai, kisi dukaan ka resistor nahi.

Demo: Mama ne Prerna se poocha: "Ek hi cell pehle chhote bulb mein lagao, phir bade bulb mein. Kya cell ka r badlega?" Nahi. r wahi rahega, sirf I aur I r badlenge. r tab badalta hai jab cell **purana** hota hai. Aur agar tum cell ke saath bahar se 0.3 Ω ka alag taar series mein jodo, to wo taar R mein judta hai: use tum dekh sakte ho aur hata sakte ho. Cell ka apna r wahi rehta hai jo andar hai: dikhta nahi, hat-ta nahi.

---

## Quick Recap

- **E** (EMF) = cell ka asli dhakka, J per C. **r** = cell ki apni internal resistance. Cell = E ke saath r series mein.
- **I = E ÷ (R + r)** (loop ka kul resistance R + r).
- **V = E − I r = I R**. I r = lost volts: cell ke andar hi kharch hota hai.
- Open circuit (I lagbhag 0): V = E. Jalte circuit mein V < E.
- Nearly dead cell: E lagbhag wahi, par r kuch ohm: I girta hai, V girta hai, bulb dim, aur cell ke andar zyada garmi.
- Car ki battery: r bahut chhota (lagbhag 0.02 Ω), isliye 150 A tak current kheench sakti hai; starter chalte hi V girta hai, headlights dim hoti hain.
- Short-circuit current = E ÷ r (bahut bada): kabhi nahi karna, sirf kaagaz par.
- E aur r ke liye do (V, I) readings, ya graph: y-intercept E, slope r (minus ke saath).

---

## Practice Questions

1. A cell of EMF 3.0 V and internal resistance 0.8 Ω is connected to a 5.2 Ω resistor. Find the current, the terminal voltage and the lost volts.
2. A 9 V battery with internal resistance 1.5 Ω is connected to a 13.5 Ω load. Find the current, the terminal voltage, the power delivered to the load and the power wasted inside the battery. Check that they add up to the battery's total power.
3. A mobile-phone Li-ion cell (E ≈ 3.7 V, r ≈ 0.1 Ω) supplies a current of 1.6 A. Find the terminal voltage and the heat produced inside the cell per second. If, after years of use, r rises to 0.3 Ω and the phone still draws 1.6 A, what is the new terminal voltage?
4. A nearly dead AA cell has E = 1.5 V and r = 4 Ω. It is connected to a torch bulb of resistance 6 Ω. Find the current, the voltage across the bulb and the bulb's power. Compare the power with that of a fresh cell (r ≈ 0.3 Ω) connected to the same bulb.
5. Using the cells of Question 1 and Question 2, find the short-circuit current E ÷ r of each, and the heat produced inside each cell per second in that situation. Which is the more dangerous to short, and why? (Paper work only.)
6. In a lab, a student gets V = 2.65 V at I = 0.25 A and V = 2.26 V at I = 0.90 A for a cell. Find E and r.
7. A battery pack reads 5.4 V when the switch is open. When a 24.3 Ω resistor is connected, the voltmeter across the pack reads 4.86 V. Find the current and the internal resistance of the pack.
8. A car battery shows E = 12 V when unloaded. After many years its internal resistance has risen to 0.045 Ω. The starter motor tries to draw 220 A. Find the terminal voltage. Would you expect the car to start and the lights to stay bright?
9. The V-I graph of a cell is a straight line that meets the V-axis at 6.3 V and the I-axis at 4.5 A. Find E, r, and the terminal voltage when the current is 2.0 A.
10. For a cell with E = 3.0 V and r = 0.8 Ω, what load resistance makes the terminal voltage 95 percent of E? What does this tell you about how large R must be, compared with r, for V to stay close to E?
11. True or false, with a reason: (a) A voltmeter placed across a working cell in a circuit reads its EMF. (b) A multimeter reading of 1.4 V across a torch cell, with nothing else connected, proves the cell will make the torch bulb glow brightly. (c) If the load resistance is made very large, the terminal voltage approaches E. (d) The internal resistance of a cell is a resistor that can be unscrewed and removed.

---

### Answers

**1.** Given: E = 3.0 V, r = 0.8 Ω, R = 5.2 Ω. Find: I, V, I r. Formula: I = E ÷ (R + r); V = I R; I r. Substitution: I = 3.0 V ÷ (5.2 Ω + 0.8 Ω) = 3.0 V ÷ 6.0 Ω = **0.5 A**. V = 0.5 A × 5.2 Ω = **2.6 V**. Lost volts = 0.5 A × 0.8 Ω = **0.4 V**. Jaanch: 2.6 V + 0.4 V = 3.0 V = E ✅

**2.** Given: E = 9 V, r = 1.5 Ω, R = 13.5 Ω. Substitution: I = 9 V ÷ (13.5 Ω + 1.5 Ω) = 9 V ÷ 15 Ω = **0.6 A**. V = 0.6 A × 13.5 Ω = **8.1 V**. Power to load = I² R = 0.36 A² × 13.5 Ω = **4.86 W**. Power wasted inside = I² r = 0.36 A² × 1.5 Ω = **0.54 W**. Jaanch: total power E I = 9 V × 0.6 A = 5.4 W = 4.86 W + 0.54 W ✅

**3.** Given: E = 3.7 V, r = 0.1 Ω, I = 1.6 A. Formula: V = E − I r; heat = I² r. Lost volts = 1.6 A × 0.1 Ω = 0.16 V. V = 3.7 V − 0.16 V = **3.54 V**. Heat = (1.6 A)² × 0.1 Ω = 2.56 A² × 0.1 Ω = **0.256 W** (lagbhag 0.26 J har second). Naya r = 0.3 Ω: lost volts = 1.6 A × 0.3 Ω = 0.48 V, V = 3.7 V − 0.48 V = **3.22 V**. Jaanch: units V ✅; V kam hua kyunki r badha ✅. (Aur heat bhi 2.56 A² × 0.3 Ω = 0.768 W ho gayi: purana cell zyada garm hota hai.)

**4.** Given: E = 1.5 V, r = 4 Ω, R = 6 Ω. I = 1.5 V ÷ (6 Ω + 4 Ω) = **0.15 A**. V = 0.15 A × 6 Ω = **0.90 V**. Bulb ki power = (0.15 A)² × 6 Ω = 0.0225 A² × 6 Ω = **0.135 W**. Fresh cell (r = 0.3 Ω): I = 1.5 V ÷ 6.3 Ω ≈ 0.238 A, P = (0.238 A)² × 6 Ω ≈ **0.34 W**. Purane cell mein power lagbhag 0.135 ÷ 0.34 ≈ 0.4 guna, yaani fresh ki lagbhag 40 percent. Jaanch: purane cell ka V + I r = 0.90 V + 0.15 A × 4 Ω = 0.90 V + 0.60 V = 1.50 V ✅

**5.** Question 1 ka cell: I = 3.0 V ÷ 0.8 Ω = **3.75 A**, heat = (3.75 A)² × 0.8 Ω = 14.0625 A² × 0.8 Ω = **11.25 W**. Question 2 ka battery: I = 9 V ÷ 1.5 Ω = **6 A**, heat = 36 A² × 1.5 Ω = **54 W**. 9 V wala battery zyada khatarnak hai: uska short-circuit current bhi bada hai aur andar ki garmi bhi lagbhag paanch guna. Jaanch: units A² × Ω = W ✅. (Dono ko kabhi taar se mat jodna.)

**6.** Given: (0.25 A, 2.65 V) aur (0.90 A, 2.26 V). Formula: V = E − I r. 2.65 V = E − 0.25 A × r aur 2.26 V = E − 0.90 A × r. Ghatane par: 0.39 V = 0.65 A × r, r = 0.39 V ÷ 0.65 A = **0.6 Ω**. E = 2.65 V + 0.25 A × 0.6 Ω = 2.65 V + 0.15 V = **2.8 V**. Jaanch: 2.8 V − 0.90 A × 0.6 Ω = 2.8 V − 0.54 V = 2.26 V ✅

**7.** Given: E = 5.4 V (open circuit), V = 4.86 V, R = 24.3 Ω. Current I = V ÷ R = 4.86 V ÷ 24.3 Ω = **0.2 A**. Lost volts = E − V = 5.4 V − 4.86 V = 0.54 V. r = lost volts ÷ I = 0.54 V ÷ 0.2 A = **2.7 Ω**. Jaanch: I = E ÷ (R + r) = 5.4 V ÷ (24.3 Ω + 2.7 Ω) = 5.4 V ÷ 27 Ω = 0.2 A ✅

**8.** Given: E = 12 V, r = 0.045 Ω, I = 220 A. Lost volts = 220 A × 0.045 Ω = 9.9 V. V = 12 V − 9.9 V = **2.1 V**. Itne kam voltage par headlights lagbhag bujh jaati hain aur starter ko kaafi dhakka nahi milta: gaadi **start nahi hogi**. (Asli motor aisi halat mein itna current khichta bhi nahi, par naateeja wahi: battery "12 V" dikhati hai par load par girti hai.) Jaanch: 2.1 V + 9.9 V = 12 V ✅. Ye wahi Prerna wali kahani hai: bina load ke reading E hai, kaam ke waqt V.

**9.** Y-intercept: E = **6.3 V**. X-intercept: short-circuit current E ÷ r = 4.5 A, to r = 6.3 V ÷ 4.5 A = **1.4 Ω**. 2.0 A par V = 6.3 V − 2.0 A × 1.4 Ω = 6.3 V − 2.8 V = **3.5 V**. Jaanch: slope = −6.3 V ÷ 4.5 A = −1.4 V/A ✅. Back-substitution: bahar ka R = 3.5 V ÷ 2.0 A = 1.75 Ω, I = 6.3 V ÷ (1.75 Ω + 1.4 Ω) = 6.3 V ÷ 3.15 Ω = 2.0 A ✅

**10.** V = I R = E R ÷ (R + r). V = 0.95 E ⟹ R ÷ (R + r) = 0.95 ⟹ R = 0.95 R + 0.95 r ⟹ 0.05 R = 0.95 r ⟹ R = 19 r = 19 × 0.8 Ω = **15.2 Ω**. Jaanch: I = 3.0 V ÷ (15.2 Ω + 0.8 Ω) = 3.0 V ÷ 16 Ω = 0.1875 A; V = 0.1875 A × 15.2 Ω = 2.85 V = 0.95 × 3.0 V ✅. Seekh: V ko E ke paas rakhne ke liye R, r se kai guna bada hona chahiye (yahan 19 guna).

**11.** (a) **False** ❌: working circuit mein voltmeter V = E − I r padhta hai, E se chhota. (b) **False** ❌: wo reading current ke bina hai; bulb ke saath I r kharch hota hai, aur r bada ho to V bahut gir jaata hai (Prerna ki torch). (c) **True** ✅: R bada to I chhota, I r chhota, V → E. (d) **False** ❌: r cell ke andar hi hai, alag nikala nahi jaata; figure mein dabba sirf model hai.

---

Cell ka raaz khul gaya: har cell ke andar ek chhupa hua r hai, aur wahi tay karta hai ki E ka kitna hissa bahar tak pahunchta hai. Ab tum samajh gaye ki "1.5 V ka cell" aur "1.5 V jo bulb ko mila" do alag baatein hain.

**Agle topic (Topic 2) ka sawal:** torch mein do ya teen cells kyun lagte hain? Agar ek cell ulta laga do to kya hoga, aur cells ko series ya parallel mein jodne par E aur r ka kya hota hai?
