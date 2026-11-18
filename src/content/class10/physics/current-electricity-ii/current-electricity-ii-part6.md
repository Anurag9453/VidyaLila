# Chapter: Current Electricity II: Cells, Networks and Real Components (Part 6)

> **Class:** 10 | **Subject:** Physics
> **Ye file [current-electricity-ii-part5.md](current-electricity-ii-part5.md) se aage chalti hai** (wahan power aur energy: rating ka matlab, kam voltage par bulb, heater, kettle aur bijli ka hisaab). Chapter ki shuruaat: [current-electricity-ii.md](current-electricity-ii.md). Recall ke liye Class 9: [electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md) (meters ki jagah), [electricity-part6.md](../../../class9/physics/electricity/electricity-part6.md) (power ke formulas), [electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md) (kWh aur bill).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

---

# Topic 6: Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

Is chapter mein hum paanch kadam chale. Topic 1 mein cell ke andar ka E aur r aur terminal voltage; Topic 2 mein cells ka series, parallel aur pack; Topic 3 mein mushkil resistor-jaal (symmetry, balanced bridge, ladder, divider, asli meters); Topic 4 mein taar aur resistor (ρ l ÷ A, kheenchna, thermistor, LDR, colour code); aur Topic 5 mein power aur energy (rating ka matlab, bulb, heater, kettle aur bijli ka hisaab). Har topic akela saaf tha. Par asli sawal aksar do-teen topics ek saath maangte hain. Aaj chapter ko ek jagah jodte hain: **kab kaun sa idea, aur ek lamba sawaal kaise todein.**

---

## Circuit Mela ka buzzer round

Mr. Nimbalkar ke school mein saal ka "Circuit Mela" laga tha: bulb ki ladiyan, ek chhota buzzer-wala bijli ka game aur sabse peeche ek quiz stall. Unka bhatija Dhiraj Class 10 mein tha, aur wo seedha quiz stall par pahunch gaya: **buzzer round**. Niyam saaf tha: sawaal ke saath ek chhota circuit dikhaya jaata hai, jo pehle buzzer dabaye aur sahi bole, use ek point; galat bole to ek point kat jaata hai.

Pehle sawaal mein ek battery ke saath do bulb parallel mein the, aur poochha gaya: "Battery ke sirey par voltmeter kya padhega?" Dhiraj ne buzzer dabaya, "EMF!" Galat: ek point kata. Doosre sawaal mein ek heater ka coil beech se kaat kar dono tukde parallel jode gaye the: "Power kitni guna?" Dhiraj bola, "Double!" Phir galat: chaar guna hoti hai. Teesre sawaal mein ek bulb ke saath ammeter laga tha, aur Dhiraj ne quizmaster ke sawaal poora padhne se pehle hi buzzer daba diya. Aakhir mein uska score minus teen tha.

Quiz stall se bahar nikle to Chacha hanse. "Dhiraj, tumhe formulas aate hain, maine pichhle hafte dekha. Problem ye hai ki tum **pehla formula** buzzer ke saath hi nikaal dete ho, sawaal ki baat poori suni bina. Aao, ek chart banate hain: kaun sa sawaal kaun sa idea maangta hai. Aur ek aadat bhi: har sawaal mein pehle **source**, phir **network**, phir **hisaab**, aakhir mein **jaanch**." Dhiraj ne poochha, "Aur agla round?" Chacha bole, "Agla round aisa hi hoga: battery, do bulb, aur power. Chalo, chart se jeette hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Idea-chart** | Ek chhoti table jo sawaal ke clue shabdon se batati hai ki kaun sa idea pehle lagana hai | Table 6.1 |
| **Mixed problem** | Aisa sawaal jismein do ya zyada topics ke idea ek saath lagte hain | Cell ke saath do bulb aur unki power |
| **Unit-jaanch** | Har step ke baad dekhna ki jawab ki unit sahi bani: A × Ω = V, V² ÷ Ω = W | (11.755 V)² ÷ 2.4 Ω ki unit W aati hai |

---

## Class 9 se ek chhota recall

- [electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md): ammeter hamesha us jagah series mein, jahan current napna ho; voltmeter us hisse ke parallel jiska voltage napna ho. Wahan ek line yaad dilayi gayi thi ki ammeter ko resistor ke parallel laga do to usmein se bahut zyada current guzar kar use kharaab kar sakta hai.
- [electricity-part6.md](../../../class9/physics/electricity/electricity-part6.md): P = V I = I² R = V² ÷ R, aur ek hissa "Power aur energy ek cheez nahi hain".
- [electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md): bill ka 1 unit = 1 kWh, aur appliance ki rating W mein hoti hai, bill kWh mein.

Class 9 ne ye galtiyan ek-ek line mein pakdi thi. Aaj hum inhein numbers ke saath pakdenge, aur saath mein poore chapter ko ek chart mein baandhenge.

---

## Part A: Kab kaun sa idea? (Idea-chart)

Pehle chart (Table 6.1). Sawaal ke clue shabd dhundho, aur dekho kaun sa idea bolta hai.

**Table 6.1** – Kaun sa clue, kaun sa idea.

| Sawaal mein ye dikhe | Pehla idea | Pehla formula | Kahan seekha |
|---|---|---|---|
| Cell, "EMF", bulb dim, load par voltage gira | Cell ke andar r | I = E ÷ (R + r), V = E − I r | Topic 1 |
| Kai cells, ulta cell, battery pack | Cells ka combination | Series: n E aur n r. Parallel: E wahi, r ÷ n. Mixed: n E aur n r ÷ m | Topic 2 |
| Diamond ya jaal jismein series ya parallel na dikhe, ladder | Symmetry, balanced bridge, door se reduce | R₁ ÷ R₂ = R₃ ÷ R₄ to beech ke resistor mein 0 A | Topic 3 |
| Do resistors se voltage ka hissa, load lagaya, meter ki resistance | Potential divider, meter ka asar | V_out = V × R₂ ÷ (R₁ + R₂); load ke saath R₂ ∥ R_L | Topic 3 |
| Taar ki lambai, area, material; kheenchna ya kaatna | Resistivity | R = ρ l ÷ A, kheencho to n² R, n tukde parallel to R ÷ n² | Topic 4 |
| Bulb thanda ya garm, thermistor, LDR, rang ki patliyan | Real components | Hot R lagbhag 10 se 15 guna cold; NTC; colour code | Topic 4 |
| Rating plate, bulb ki power, heater, bahut kam ya zyada voltage | Rated V aur P | R = V² ÷ P, I = P ÷ V, P' = V'² ÷ R | Topic 5 |
| Kettle, geyser, bill, "kitne rupaye" | Energy aur cost | E = P t, 1 kWh = 3.6 × 10⁶ J, m c ΔT ÷ efficiency | Topic 5 |

Chart batata hai ki **kya** lagana hai. Ek lambe sawaal mein **kis kram** mein lagana hai, ye Figure 6.1 batata hai. Chacha ne Dhiraj ke liye ek hi raasta banaya, jo har mixed problem par chalta hai.

```
 Kadam 1: Source ko pehchano
          E aur r kya hain? (pack ho to n E aur n r ÷ m)
              :
              v
 Kadam 2: Bahar ke network ko ek R_bahar banao
          series, parallel, symmetry, bridge, divider;
          taar ho to ρ l ÷ A, rating ho to V² ÷ P
              :
              v
 Kadam 3: I = E ÷ (R_bahar + r), phir wapas jao
          V = E − I r, har branch ka I, har resistor ki power
              :
              v
 Kadam 4: Jaanch
          unit-jaanch, energy balance (E I = I² R + I² r),
          aur ek limiting case
```

> **Figure 6.1** – Mixed problem ka chaar-kadam raasta: pehle source, phir bahar ka network, phir current aur wapas hisaab, aakhir mein jaanch.

**School mein teacher ke saath (Circuit Mela stall ka chhota kaam):** teacher do AA cell, ek torch bulb ka holder, ek ammeter aur ek voltmeter dete hain. Ammeter bulb ke series mein aur voltmeter bulb ke parallel mein lagana hai, aur teacher dekhte hain ki dono sahi jagah par hain, tabhi switch dabta hai. Pehle sirf cell ke sirey par voltmeter padho (lagbhag E), phir bulb jalakar padho (V, jo E se chhota). Cell ko kabhi taar se seedha mat jodo.

**Ghar par adult ke saath (sirf padhna):** ghar ke teen appliances ki rating plate (kuch kholna nahi) padho aur I = P ÷ V nikalo; phir energy meter ya bill par dekho ki units kWh mein hain, kW mein nahi. Koi appliance, plug ya taar mat kholo, aur mains par koi experiment nahi.

---

## Part B: Mixed sawaal, ek ke baad ek

### Example 1: Battery, do lamp aur power (Topic 1 + 5)

Ek fresh car battery (E lagbhag 12 V, r lagbhag 0.02 Ω) se do lamp parallel mein jude hain (Figure 6.2): ek 12 V, 60 W aur doosra 12 V, 90 W. Har lamp ka resistance, battery ke sirey par voltage, har lamp ka current aur power, aur battery ki efficiency nikalo.

```
           P (+)
             +----------------+-------------+-------------+
    + - - - -o- - - - +       :             :             :
    :        :        :       :             :             :
    :E = --------- +  :       :             :             :
    :12 V  -----   -  :      (V)      [2.4 Ω, 60 W] [1.6 Ω, 90 W]
    :        :        :       :             :             :
    :r = [0.02 Ω]     :       :             :             :
    :        :        :       :             :             :
    + - - - -o- - - - +       :             :             :
             : N (-)          :             :             :
             +----------------+-------------+-------------+
```

> **Figure 6.2** – Battery (dashed dabba: E aur r series mein) se do lamp parallel mein. Voltmeter (V) battery ke sirey P aur N ke beech parallel mein hai, P positive terminal hai.

- Given: E = 12 V, r = 0.02 Ω; lamp A: 12 V, 60 W; lamp B: 12 V, 90 W
- Find: R_A, R_B, I, V, I_A, I_B, P_A, P_B, efficiency
- Formula: R = V_rated² ÷ P_rated; parallel R = R_A R_B ÷ (R_A + R_B); I = E ÷ (R + r); V = E − I r; P = V² ÷ R
- Substitution: R_A = (12 V)² ÷ 60 W = 144 V² ÷ 60 W = **2.4 Ω**; R_B = 144 V² ÷ 90 W = **1.6 Ω**. R_parallel = (2.4 Ω × 1.6 Ω) ÷ (2.4 Ω + 1.6 Ω) = 3.84 Ω² ÷ 4.0 Ω = 0.96 Ω. I = 12 V ÷ (0.96 Ω + 0.02 Ω) = 12 V ÷ 0.98 Ω = **12.245 A**. V = 12 V − 12.245 A × 0.02 Ω = 12 V − 0.245 V = **11.755 V**.
- Parallel mein dono par wahi V: I_A = 11.755 V ÷ 2.4 Ω = **4.90 A**, I_B = 11.755 V ÷ 1.6 Ω = **7.35 A**. P_A = (11.755 V)² ÷ 2.4 Ω = 138.18 V² ÷ 2.4 Ω = **57.6 W**, P_B = 138.18 V² ÷ 1.6 Ω = **86.4 W**. Efficiency = V ÷ E = 11.755 V ÷ 12 V = **0.98**, yaani 98 percent.

**Jaanch:** I_A + I_B = 4.90 A + 7.35 A = 12.25 A ✅. Energy balance: E I = 12 V × 12.245 A = 146.9 W; lamps 57.6 W + 86.4 W = 144.0 W; battery ke andar I² r = (12.245 A)² × 0.02 Ω = 3.0 W; 144.0 W + 3.0 W = 147.0 W ✅. Unit-jaanch: V² ÷ Ω = W ✅. Limiting case: r → 0 par V → 12 V aur P → 60 W aur 90 W ✅. Dono lamp ko apni rated power ka lagbhag 96 percent mila, kyunki (11.755 ÷ 12)² = 0.96. (Honest note: kam voltage par filament thoda thanda hokar chhota R le leta hai, to asli power is hisaab se thodi zyada hogi; yahan R ko fixed maan kar chale.)

### Example 2: Heater ka coil, kaagaz par (Topic 4 + 5)

230 V par 2300 W ka heater banana hai, nichrome ke taar (area 0.22 mm²) se. Coil ka R, current aur lambai nikalo. Phir sochkar dekho: agar coil ko beech se kaat kar dono barabar tukde parallel jod diye jaayein to kya hoga? (Ye **sirf kaagaz par** ka hisaab hai: ghar ke heater ya geyser ka coil kholna, kaatna ya badalna mana hai, ye sirf electrician ka kaam hai.)

- Given: V = 230 V, P = 2300 W, ρ = 1.1 × 10⁻⁶ Ω m, A = 0.22 mm² = 2.2 × 10⁻⁷ m²
- Find: R, I, l; kaatne ke baad R', P', I'
- Formula: R = V² ÷ P; I = P ÷ V; l = R A ÷ ρ; do barabar tukde parallel mein: R ÷ 2² (Topic 4)
- Substitution: R = 52900 V² ÷ 2300 W = **23 Ω**; I = 2300 W ÷ 230 V = **10 A**; l = 23 Ω × 2.2 × 10⁻⁷ m² ÷ 1.1 × 10⁻⁶ Ω m = 5.06 × 10⁻⁶ ÷ 1.1 × 10⁻⁶ m = **4.6 m**.
- Kaatne ke baad: har tukda 2.3 m, 11.5 Ω; parallel R' = 11.5 Ω ÷ 2 = **5.75 Ω**; P' = 52900 V² ÷ 5.75 Ω = **9200 W**; I' = 9200 W ÷ 230 V = **40 A**.

**Jaanch:** R' = R ÷ 4 = 23 Ω ÷ 4 = 5.75 Ω ✅. P' ÷ P = 9200 ÷ 2300 = 4 ✅ (R chauthai, to P chaar guna). 230 V ÷ 5.75 Ω = 40 A ✅. Fuse ka sirf hisaab: 10 A ke heater ke liye 15 A ka fuse 10 A se upar hai, par 40 A par wo bhi nahi tikega: fuse ki poori kahani Chapter 8 mein. Honest note: table ka ρ lagbhag 20 °C ka hai; garm coil mein ρ thoda zyada hota hai, isliye asli coil is hisaab se thoda chhota hota hai.

### Example 3: 12 cells ka pack aur ek bridge (Topic 2 + 3 + 1)

Circuit Mela ke stall ke liye 12 fresh AA cell ka pack: 4 cells ki series wali 3 strings parallel mein (har cell E lagbhag 1.5 V, r lagbhag 0.3 Ω). Pack ek bridge circuit chalata hai (Figure 6.3): R₁ = 6 Ω, R₂ = 10 Ω, R₃ = 9 Ω, R₄ = 15 Ω, beech mein R₅ = 47 Ω. Pack ka E_total aur r_total, bridge ka R, current, terminal voltage, R₅ ka current aur har string ka current nikalo.

```
           R1 = 6 Ω           R2 = 10 Ω
      +-----/\/\/\/-------+-----/\/\/\/-------+
      :                   : B                 :
    A :               [R5=47 Ω]               : C
      :                   : D                 :
      +-----/\/\/\/-------+-----/\/\/\/-------+
      :    R3 = 9 Ω           R4 = 15 Ω       :
      :                                       :
      :       + - - - - - - - - - - - +       :
      :       : E=6.0 V               :       :
      +-------:(+)--||--/\/\/--(-)----:-------+
              :         r = 0.4 Ω     :
              + - - - - - - - - - - - +
```

> **Figure 6.3** – Pack (dashed dabba, A ki taraf uska + sira) bridge ko chalata hai. A aur C bridge ke do sire hain, B aur D beech ke do points, jinke beech R₅ hai.

- Given: n = 4, m = 3, E = 1.5 V, r = 0.3 Ω; R₁ = 6 Ω, R₂ = 10 Ω, R₃ = 9 Ω, R₄ = 15 Ω, R₅ = 47 Ω
- Find: E_total, r_total, R_bridge, I, V, I₅, string current
- Formula: E_total = n E; r_total = n r ÷ m; balance: R₁ ÷ R₂ = R₃ ÷ R₄; I = E_total ÷ (R + r_total); V = E_total − I r_total
- Substitution: E_total = 4 × 1.5 V = **6.0 V**; r_total = 4 × 0.3 Ω ÷ 3 = **0.4 Ω**. Balance: 6 ÷ 10 = 0.6 aur 9 ÷ 15 = 0.6, barabar, to bridge balanced hai aur R₅ mein **0 A** (Topic 3). Do raaste: 6 Ω + 10 Ω = 16 Ω aur 9 Ω + 15 Ω = 24 Ω. R_bridge = (16 Ω × 24 Ω) ÷ (16 Ω + 24 Ω) = 384 Ω² ÷ 40 Ω = **9.6 Ω**. I = 6.0 V ÷ (9.6 Ω + 0.4 Ω) = 6.0 V ÷ 10 Ω = **0.6 A**. V = 6.0 V − 0.6 A × 0.4 Ω = **5.76 V**. Har string: 0.6 A ÷ 3 = **0.2 A**.
- Raaston ke currents: upar 5.76 V ÷ 16 Ω = 0.36 A, neeche 5.76 V ÷ 24 Ω = 0.24 A. V_B = 0.36 A × 10 Ω = 3.6 V (C ko 0 V maan kar) aur V_D = 0.24 A × 15 Ω = 3.6 V.

**Jaanch:** V_B = V_D = 3.6 V, to R₅ ke dono sire barabar potential par ✅. 0.36 A + 0.24 A = 0.6 A ✅. Energy balance: E I = 6.0 V × 0.6 A = 3.6 W; bridge mein 0.36² × 16 + 0.24² × 24 = 2.0736 W + 1.3824 W = 3.456 W; pack ke andar I² r = 0.36 × 0.4 = 0.144 W; 3.456 W + 0.144 W = 3.6 W ✅. R₅ ki jagah koi bhi value (ya taar) hoti, jawab wahi rehta.

### Example 4: LDR aur divider, street light ka dimaag (Topic 3 + 4)

6 V ki supply (r chhoda) se ek fixed 12 kΩ aur ek LDR series mein hain. LDR andhere mein lagbhag 3.5 MΩ aur tez roshni mein lagbhag 450 Ω ka hai. LDR ke dono sire ka voltage dono halat mein nikalo, aur batao ki ye kaise "andhera pakadne wala" signal ban sakta hai.

- Given: V = 6 V, R_fixed = 12 kΩ, R_dark = 3.5 MΩ = 3500 kΩ, R_light = 450 Ω = 0.45 kΩ
- Find: V_LDR andhere mein aur roshni mein, current
- Formula: V_LDR = V × R_LDR ÷ (R_fixed + R_LDR) (divider, Topic 3); I = V ÷ (R_fixed + R_LDR)
- Substitution: Andhere mein V_LDR = 6 V × 3500 kΩ ÷ (12 kΩ + 3500 kΩ) = 21000 ÷ 3512 V = **5.98 V**; I = 6 V ÷ 3.512 MΩ = **1.7 μA**. Roshni mein V_LDR = 6 V × 0.45 kΩ ÷ (12 kΩ + 0.45 kΩ) = 2.7 ÷ 12.45 V = **0.22 V**; I = 6 V ÷ 12.45 kΩ = **0.48 mA**.

**Jaanch:** Andhere mein fixed resistor par 6 V − 5.98 V = 0.02 V, aur 1.7 μA × 12 kΩ = 0.02 V ✅. Voltage ka ratio aur resistance ka ratio barabar: 5.98 V ÷ 0.0205 V lagbhag 292 aur 3500 kΩ ÷ 12 kΩ lagbhag 292 ✅. Matlab: **andhere mein LDR par voltage bada (lagbhag 6 V), roshni mein chhota (lagbhag 0.2 V).** Isi bade-chhote signal se street light ka switch chalta hai (switch ki circuit aage ki class mein).

---

## Wapas Circuit Mela mein

Agla round aaya, aur sawaal wahi tha jo Chacha ne bola tha: "Fresh car battery, 12 V aur 0.02 Ω, do lamp parallel mein, 60 W aur 90 W. Battery ke sirey par voltage?" Dhiraj ne sawaal poora suna. Kadam 1: E = 12 V aur r = 0.02 Ω. Kadam 2: lamp ke R rating se (2.4 Ω aur 1.6 Ω), parallel 0.96 Ω. Kadam 3: I = 12 ÷ 0.98 ≈ 12.2 A, V = 12 − 12.2 × 0.02 ≈ 11.76 V. Tab buzzer dabaya: "Lagbhag 11.76 volt: EMF nahi, kyunki current chal raha hai!" Ghanti baji, aur ek point mila. Chacha ne door se angootha uthaya.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Ammeter sirf padhta hai, use bulb ke parallel lagane mein kya bura hai?"**
Sahi: ammeter ki resistance bahut chhoti hoti hai, to bulb ke parallel lagate hi wo lagbhag short circuit ban jaata hai. Ammeter hamesha series mein.

Demo (Figure 6.4): 2 AA cell series mein (E lagbhag 3.0 V, r lagbhag 0.6 Ω) aur ek 7.4 Ω ka bulb. Sahi circuit: I = 3.0 V ÷ (7.4 Ω + 0.6 Ω) = 0.375 A, bulb par 2.775 V, power (0.375 A)² × 7.4 Ω = 1.04 W. Ab ek ammeter (R_A = 0.2 Ω, maana hua) galti se bulb ke parallel laga do: bulb aur ammeter ka parallel R = (7.4 × 0.2) ÷ (7.4 + 0.2) Ω = 0.195 Ω, I = 3.0 V ÷ (0.195 Ω + 0.6 Ω) = 3.77 A. Bulb par sirf 3.77 A × 0.195 Ω = 0.735 V reh gaya, uski power (0.735 V)² ÷ 7.4 Ω = 0.073 W: bulb lagbhag bujh gaya. Ammeter se (0.735 V ÷ 0.2 Ω) lagbhag 3.7 A guzra, jabki school ka ammeter aksar 1 A ya 3 A tak ka hota hai: wo kharaab ho sakta hai.

```
   P (+)
    +-----------------------------------+-------------+
    :                                   :             :
    :                                   :             :
    :                              [7.4 Ω bulb]      (A)
    :                                   :             :
    :                                   :             :
    :   + - - - - - - - - - - +         :             :
    +---:(+)--||--/\/\/--(-)--:---------+-------------+
        : E=3.0 V  r=0.6 Ω    :
        + - - - - - - - - - - +
```

> **Figure 6.4** – Galat connection: ammeter (A) bulb ke parallel. Ammeter bulb ko lagbhag short kar deta hai. Sahi: ammeter bulb ke series mein.

**Galti 2: "Voltmeter ko bhi series mein laga sakte hain, wo bhi to bas padhta hai."**
Sahi: voltmeter ka resistance bahut bada hota hai, to series mein lagate hi wo circuit ko lagbhag open kar deta hai. Voltmeter hamesha us hisse ke parallel.

Demo (Figure 6.5): wahi cell aur wahi 7.4 Ω ka bulb, par ab 5 MΩ (maana hua) ka voltmeter bulb ke series mein. I = 3.0 V ÷ (5 000 000 Ω + 7.4 Ω + 0.6 Ω) = 0.60 μA (lagbhag). Bulb par 0.60 μA × 7.4 Ω = 4.4 μV: bulb bilkul nahi jalta. Voltmeter par 0.60 μA × 5 000 000 Ω = lagbhag 3.0 V: reading cell ke E ke paas aati hai, to koi soch sakta hai ki sab theek hai, jabki bulb andhera hai.

```
   P (+)
    +------------------------(V)----------------------+
    :                                                 :
    :                                                 :
    :                                            [7.4 Ω bulb]
    :                                                 :
    :                                                 :
    :   + - - - - - - - - - - +                       :
    +---:(+)--||--/\/\/--(-)--:-----------------------+
        : E=3.0 V  r=0.6 Ω    :
        + - - - - - - - - - - +
```

> **Figure 6.5** – Galat connection: voltmeter (V) bulb ke series mein. Cell ka lagbhag poora voltage voltmeter par aa jaata hai, bulb ko kuch nahi milta.

**Galti 3: "P = V² ÷ R aur P = I² R alag-alag jawab dete hain."**
Sahi: dono ek hi power dete hain, bas V wo hona chahiye jo **usi resistor ke dono sire** par hai, aur I wo jo **usi resistor** se guzra.

Demo: 13.5 V ki supply par 4.5 Ω aur 9 Ω series mein. I = 13.5 V ÷ 13.5 Ω = 1 A. Dhiraj 4.5 Ω ke liye P = V² ÷ R mein poora 13.5 V daalta hai: (13.5 V)² ÷ 4.5 Ω = 40.5 W, jabki I² R = (1 A)² × 4.5 Ω = 4.5 W. Galti: 4.5 Ω ke dono sire par voltage 13.5 V nahi, 1 A × 4.5 Ω = 4.5 V hai. Sahi daalo to (4.5 V)² ÷ 4.5 Ω = 4.5 W ✅, dono formula barabar. (Poori supply par 13.5² ÷ 13.5 = 13.5 W = 4.5 W + 9 W ✅.)

**Galti 4: "Power hi to energy hai."**
Sahi: power energy kharch hone ki **dar** hai (J per s ya kW). Energy = power × samay.

Demo: ek 2.4 kW ka heater 3 minute chala: 2.4 kW × (3 ÷ 60) h = 0.12 kWh. Ek 5 W ka night lamp 24 ghante chala: 0.005 kW × 24 h = 0.12 kWh. Heater ki power lamp se 480 guna zyada hai, par dono ne **barabar energy** (0.12 kWh = 0.12 × 3.6 × 10⁶ J = 4.32 × 10⁵ J) li. Power batati hai kitni tezi se; energy batati hai kitni kul.

**Galti 5: "kW aur kWh ek hi cheez hain."**
Sahi: kW power ki unit hai (rating plate par), kWh energy ki unit hai (energy meter aur bill par).

Demo: meter ka reading 4236.5 se 4318.9 hua. Dhiraj likhta hai "82.4 kW kharch hue". Sahi: 4318.9 − 4236.5 = **82.4 kWh**, yaani 82.4 unit. Agar ₹6.50 per unit diya ho to bill 82.4 × ₹6.50 = ₹535.60. Aur ek 1 kW ka heater aadha ghanta chale to energy 1 kW × 0.5 h = 0.5 kWh hui, par heater ki power us dauran bhi 1 kW hi rahi.

---

## Quick Recap

- Mixed problem ka raasta: **source** (E, r), **network** (ek R_bahar), **I = E ÷ (R_bahar + r)** aur wapas hisaab, phir **jaanch** (unit, energy balance, limiting case).
- Idea-chart: cell aur dim bulb mein r (Topic 1); pack mein n E, n r, r ÷ n, n r ÷ m (Topic 2); jaal mein symmetry, balanced bridge, divider (Topic 3); taar mein ρ l ÷ A, n², R ÷ n², colour code (Topic 4); rating mein R = V² ÷ P aur energy mein P t (Topic 5).
- Ammeter series mein, voltmeter parallel mein. Ammeter parallel mein lagbhag short, voltmeter series mein lagbhag open.
- P = V² ÷ R = I² R = V I, par V aur I usi resistor ke hon.
- Power dar hai (W, kW), energy kul hai (J, kWh): E = P t.
- Energy balance: E I = (bahar ke resistors ki power) + I² r.

---

## Practice Questions

(Use E = 1.5 V and r = 0.3 Ω for a fresh AA cell, 3.7 V and 0.1 Ω for a Li-ion cell, and c = 4200 J/kg °C for water. Resistivity of nichrome 1.1 × 10⁻⁶ Ω m. Colour digits: black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9; gold means ± 5 percent. Ignore a cell's internal resistance wherever it is not given.)

1. Three fresh AA cells are joined in series to two bulbs of 6 Ω and 9 Ω connected in parallel. Find the current drawn from the pack, the terminal voltage, the current and power in each bulb, and the efficiency of the pack.
2. A lamp marked 6 V, 12 W must run at its rated condition from a battery of two Li-ion cells in series. A series resistor R_b is used. Find the resistance of the lamp, the current needed, the value of R_b, the power wasted in R_b and inside the battery, and the fraction of the battery's total power that reaches the lamp.
3. A heater is to be made from nichrome wire of area 0.44 mm² to give 920 W on a 230 V supply. Find the resistance, the current and the length of wire. The shop has only wire of area 0.33 mm²: what length would the same heater need, and what fraction of the first length is it?
4. A pack is made of six AA cells: 3 identical strings in parallel, each string having 2 cells in series. It feeds a two-section ladder (counted from the pack): series arm 2.3 Ω, shunt 5.0 Ω, series arm 1.4 Ω, shunt 3.6 Ω, with the shunts joined to the return wire. Find E_total and r_total of the pack, the total current, the terminal voltage, the potential of the first node above the return wire, and the current and power in the last 3.6 Ω shunt.
5. An NTC thermistor is in series with a fixed 16 kΩ resistor across a 6.6 V cell, and the output is taken across the fixed resistor. The thermistor is 24 kΩ in a cool room and 8 kΩ at fever temperature. Find the output voltage and the current in each case. Does the output rise or fall as the temperature rises?
6. A heater rated 1.35 kW at 230 V has its coil stretched (uniformly, volume unchanged) so that its length becomes 1.4 times the original. Find the original resistance, the new resistance, the new power on 230 V and the percentage fall in power. Why is the fall not just 40 percent?
7. A 1.3 kW kettle of 87.5 percent efficiency heats 1.5 kg of water from 35 °C to 100 °C. Find the heat gained by the water, the electrical energy used, the time taken, and the cost of 30 such boilings at ₹9 per unit.
8. A battery pack gives V = 4.82 V at I = 0.80 A and V = 4.26 V at I = 2.40 A. Find E and r. Then, for a 2.65 Ω load, find the current, the terminal voltage and the heat produced inside the pack per second.
9. Resistor X has bands grey, red, brown, gold, and resistor Y has bands yellow, violet, brown, gold. They are joined in series across a Li-ion cell. Find the value of each, the nominal total resistance and current, and the range of the total resistance and of the current allowed by the tolerance (take both resistors at the same extreme).
10. A small shop uses a 0.95 kW iron for 20 minutes daily, three 8 W LED lamps for 5 hours daily and a 0.75 kW pump for 2 hours daily. For a 30-day month at ₹6.50 per unit, find the energy used by each, the total energy and the bill.
11. Name the FIRST idea and the first formula you would use: (a) A torch cell reads 1.5 V on a multimeter with nothing connected, yet the torch bulb glows dimly. (b) A wire is stretched to a greater length and you are asked for its new resistance. (c) Four resistors form a diamond with a fifth across the middle, and the ratio of the top pair equals the ratio of the bottom pair. (d) An appliance plate shows its rated voltage and power, and you need its working resistance. (e) A toy needs a fixed voltage and must also run for a long time on AA cells.
12. True or false, with a reason: (a) An ammeter can be connected across a bulb because it only reads current. (b) A voltmeter joined in series with a bulb makes the bulb glow normally. (c) For one resistor, P = V² ÷ R and P = I² R can give different answers when used correctly. (d) A 3 kW heater always uses 3 kWh. (e) A 1 kW appliance used for half an hour uses 0.5 kWh.

### Answers

1. Given: n = 3, E = 1.5 V, r = 0.3 Ω; bulbs 6 Ω ∥ 9 Ω. Formula: E_total = 3 E, r_total = 3 r, R_parallel = R₁ R₂ ÷ (R₁ + R₂), I = E_total ÷ (R + r_total), V = I R. Substitution: E_total = 4.5 V, r_total = 0.9 Ω; R_parallel = 54 ÷ 15 = 3.6 Ω; I = 4.5 V ÷ (3.6 Ω + 0.9 Ω) = **1 A**; V = 1 A × 3.6 Ω = **3.6 V**. Bulb 6 Ω: I = 3.6 V ÷ 6 Ω = **0.6 A**, P = 3.6² ÷ 6 = **2.16 W**. Bulb 9 Ω: I = 3.6 V ÷ 9 Ω = **0.4 A**, P = 3.6² ÷ 9 = **1.44 W**. Efficiency = 3.6 ÷ 4.5 = **0.8**, yaani 80 percent. Jaanch: 0.6 A + 0.4 A = 1 A ✅; E I = 4.5 W = 2.16 + 1.44 + I² r (0.9 W) ✅.
2. Given: lamp 6 V, 12 W; E_total = 2 × 3.7 V = 7.4 V, r_total = 2 × 0.1 Ω = 0.2 Ω. R_lamp = V² ÷ P = 36 V² ÷ 12 W = **3 Ω**; I = P ÷ V = 12 W ÷ 6 V = **2 A**. Loop: E = I (R_lamp + R_b + r_total), 7.4 V = 2 A × (3 Ω + R_b + 0.2 Ω), to 3.7 Ω = 3.2 Ω + R_b, **R_b = 0.5 Ω**. Power in R_b = I² R_b = 4 × 0.5 = **2.0 W**; inside battery = 4 × 0.2 = **0.8 W**. Total power = 7.4 V × 2 A = 14.8 W, lamp fraction = 12 ÷ 14.8 = **0.81**, yaani lagbhag 81 percent. Jaanch: 12 W + 2.0 W + 0.8 W = 14.8 W ✅.
3. Given: P = 920 W, V = 230 V, A = 0.44 mm² = 4.4 × 10⁻⁷ m². R = V² ÷ P = 52900 ÷ 920 = **57.5 Ω**; I = 920 ÷ 230 = **4 A**; l = R A ÷ ρ = 57.5 × 4.4 × 10⁻⁷ ÷ 1.1 × 10⁻⁶ = **23 m**. Patla taar: wahi R = 57.5 Ω chahiye, to l' = R A' ÷ ρ = 57.5 × 3.3 × 10⁻⁷ ÷ 1.1 × 10⁻⁶ = **17.25 m**, yaani pehli lambai ka 17.25 ÷ 23 = **0.75** hissa (area 0.75 guna, to lambai bhi 0.75 guna). Jaanch: A ÷ l = 4.4 × 10⁻⁷ ÷ 23 = 1.913 × 10⁻⁸ aur 3.3 × 10⁻⁷ ÷ 17.25 = 1.913 × 10⁻⁸ ✅ (R = ρ l ÷ A wahi).
4. E_total = 2 × 1.5 V = **3.0 V**, r_total = 2 × 0.3 Ω ÷ 3 = **0.2 Ω**. Door se: last arm aur shunt series: 1.4 Ω + 3.6 Ω = 5.0 Ω; wo 5.0 Ω pehle shunt (5.0 Ω) ke parallel: 2.5 Ω; arm 2.3 Ω ke saath: R = 4.8 Ω. I = 3.0 V ÷ (4.8 Ω + 0.2 Ω) = **0.6 A**; V = 3.0 − 0.6 × 0.2 = **2.88 V**. Arm 1 par 0.6 × 2.3 = 1.38 V, to V(N₁) = 2.88 − 1.38 = **1.5 V**. Pehle shunt mein 1.5 ÷ 5.0 = 0.3 A, to aage ki shaakha mein 0.6 − 0.3 = 0.3 A. Last 3.6 Ω shunt: **0.3 A**, P = 0.3² × 3.6 = **0.324 W**. Jaanch: V(N₂) = 1.5 − 0.3 × 1.4 = 1.08 V = 0.3 × 3.6 ✅; E I = 1.8 W = 0.828 (arm 1) + 0.45 (shunt 5.0) + 0.126 (arm 2) + 0.324 (last shunt) + 0.072 (pack ke andar) ✅.
5. Thanda: V_out = 6.6 V × 16 ÷ (24 + 16) = **2.64 V**, I = 6.6 V ÷ 40 kΩ = **0.165 mA**. Bukhaar: V_out = 6.6 V × 16 ÷ (8 + 16) = **4.4 V**, I = 6.6 V ÷ 24 kΩ = **0.275 mA**. Temperature badhne par thermistor ka R ghatta hai, to fixed resistor ka hissa badhta hai: output **badhta** hai. Jaanch: 2.64 V + 6.6 × 24 ÷ 40 (3.96 V) = 6.6 V ✅; 4.4 V + 2.2 V = 6.6 V ✅.
6. R = 230² ÷ 1350 = 52900 ÷ 1350 = **39.2 Ω**. Length 1.4 guna, volume wahi, to R' = n² R = 1.96 × 39.185 Ω = **76.8 Ω**. P' = 52900 ÷ 76.8 = **689 W** (lagbhag); fall = (1350 − 689) ÷ 1350 = **49 percent**. Sirf 40 percent isliye nahi ki length badhne ke saath area bhi ghatta hai: R n² guna hota hai, aur P ∝ 1 ÷ R. Jaanch: 1350 ÷ 1.96 = 688.8 ✅; I' = 230 ÷ 76.8 = 2.99 A, P' = I'² R' = 8.97 × 76.8 = 689 W ✅.
7. Q = m c ΔT = 1.5 kg × 4200 J/kg °C × 65 °C = **409500 J**. Input = 409500 ÷ 0.875 = **468000 J**. t = 468000 J ÷ 1300 W = **360 s** (6 minute). Ek baar: 468000 ÷ 3.6 × 10⁶ = 0.13 kWh; 30 baar = 3.9 kWh; cost = 3.9 × ₹9 = **₹35.10**. Jaanch: 1300 W × 360 s = 468000 J ✅; 0.875 × 468000 = 409500 ✅.
8. V = E − I r ke do equations: 4.82 = E − 0.80 r aur 4.26 = E − 2.40 r. Ghatane par 0.56 = 1.60 r, **r = 0.35 Ω**; E = 4.82 + 0.80 × 0.35 = **5.1 V**. 2.65 Ω load: I = 5.1 ÷ (2.65 + 0.35) = **1.7 A**; V = 1.7 × 2.65 = **4.505 V**; heat = I² r = 2.89 × 0.35 = **1.01 W** (lagbhag 1.01 J har second). Jaanch: 5.1 − 1.7 × 0.35 = 4.505 V ✅; E I = 8.67 W = 7.66 W (load) + 1.01 W ✅.
9. X: grey 8, red 2, brown ×10 = 82 × 10 = **820 Ω**, ± 5 percent. Y: yellow 4, violet 7, brown ×10 = 47 × 10 = **470 Ω**, ± 5 percent. Nominal total = 820 + 470 = **1290 Ω**, I = 3.7 V ÷ 1290 Ω = **2.87 mA**. Range: 0.95 × 1290 = **1225.5 Ω** se 1.05 × 1290 = **1354.5 Ω**. Current: 3.7 ÷ 1354.5 = **2.73 mA** se 3.7 ÷ 1225.5 = **3.02 mA**. Jaanch: 779 + 446.5 = 1225.5 ✅; 861 + 493.5 = 1354.5 ✅ (ek bada R, ek chhota current).
10. Iron: 0.95 kW × (20 ÷ 60) h = 0.3167 kWh daily, 30 din mein **9.5 kWh**. LED: 3 × 0.008 kW × 5 h = 0.12 kWh daily, **3.6 kWh**. Pump: 0.75 kW × 2 h = 1.5 kWh daily, **45 kWh**. Total = 9.5 + 3.6 + 45 = **58.1 kWh**. Bill = 58.1 × ₹6.50 = **₹377.65**. Sabse zyada pump, kyunki power bhi badi aur samay bhi lamba. Jaanch: 0.3167 + 0.12 + 1.5 = 1.9367 kWh daily, × 30 = 58.1 ✅.
11. (a) Cell ka r: V = E − I r (Topic 1): bina load wali reading E hai, load par V kam. (b) Resistivity: R' = n² R, kyunki length n guna aur area ek-n-th (Topic 4). (c) Balanced bridge: R₁ ÷ R₂ = R₃ ÷ R₄, to beech ke resistor mein 0 A, use hata kar series aur parallel (Topic 3). (d) Rating: R = V² ÷ P (Topic 5). (e) Cells ka combination: voltage ke liye cells series mein, aur lamba chalne ke liye aisi kai strings parallel mein, r_total = n r ÷ m (Topic 2).
12. (a) **False** ❌: ammeter ki R bahut chhoti hai, to bulb lagbhag short ho jaata hai aur ammeter kharaab ho sakta hai. (b) **False** ❌: voltmeter ki R bahut badi hai, to current lagbhag zero aur bulb andhera. (c) **False** ❌: sahi V aur I lene par dono hamesha barabar. (d) **False** ❌: 3 kW power hai, energy P t hai: use kitni der chala, ye bhi chahiye. (e) **True** ✅: 1 kW × 0.5 h = 0.5 kWh.

---

## Chapter ka saar: Current Electricity II

```
Topic 1  ->  EMF aur r          :  V = E − I r, I = E ÷ (R + r)
Topic 2  ->  cells ka pack      :  series n E, n r; parallel r ÷ n; mixed n r ÷ m
Topic 3  ->  mushkil circuit    :  symmetry, balanced bridge, ladder, divider, meters
Topic 4  ->  taar aur resistor  :  R = ρ l ÷ A, n² R, R ÷ n², colour code, thermistor, LDR
Topic 5  ->  power aur energy   :  R = V² ÷ P, I = P ÷ V, E = P t, kWh aur bill
Topic 6  ->  sab mila kar       :  chart, mixed sawaal, bachi hui galtiyan
```

> **Figure 6.6** – Chapter ki chhe kadiyan: Topic 1 se 6 tak, har topic ek line mein.

| Topic | Kya seekha | Ek line |
|---|---|---|
| 1. EMF Aur Internal Resistance | Cell ke andar ka raaz | Cell E ke saath r series mein hai; I = E ÷ (R + r), V = E − I r, lost volts I r; bina load ke V = E, load par V < E; short-circuit current E ÷ r (sirf kaagaz par); do (V, I) readings se E aur r |
| 2. Cells Ka Combination | Series, parallel aur battery pack | Series: n E aur n r (ulta cell E ghatata hai); parallel: E wahi, r ÷ n; mixed: n E aur n r ÷ m; R > r ho to series; efficiency V ÷ E; naye aur purane cell kabhi mat milao |
| 3. Mushkil Circuits Aasaani Se | Symmetry, bridge aur divider | Nodes ko naam do aur redraw karo; symmetry aur balanced bridge mein beech ke resistor mein 0 A; ladder door se reduce; divider V_out = V R₂ ÷ (R₁ + R₂) load se girta hai; asli meter ki apni R |
| 4. Taar Aur Resistor | Resistivity, temperature aur colour code | Taar n guna kheencho to R n² guna, n tukde parallel to R ÷ n²; bulb ka hot R lagbhag 10 se 15 guna cold; NTC thermistor, LDR, superconductor; colour code: do digit, multiplier, tolerance |
| 5. Power Aur Energy | Rating ka matlab aur bijli ka hisaab | Rating se R = V² ÷ P aur I = P ÷ V (poori chamak par); kam voltage par P' = P (V' ÷ V)²; series mein kam-watt ka bulb zyada roshan, parallel mein zyada-watt ka; heater ka taar: R = V² ÷ P phir l = R A ÷ ρ; kettle ka samay m c ΔT ÷ efficiency ÷ P; parallel appliances ke currents jud jaate hain (fuse thodi upar); patli lambi lead mein I² R garmi; 100 W bulb 230 V par hi 100 W leta hai |
| 6. Sab Kuch Mila Kar | Chart aur mixed sawaal | Source, network, hisaab, jaanch; ammeter series mein, voltmeter parallel mein; P ke teeno formula ek hi power dete hain; power dar hai aur energy kul; kW aur kWh alag |

Dhiraj ne Chacha ko apna score card dikhaya: aakhri round mein paanch mein se paanch. "Ab main buzzer pehle nahi dabata," usne hanskar kaha, "pehle chaar kadam padhta hoon." Tum bhi ab kisi bhi bijli ke sawaal ko dekh kar pooch sakte ho: source kaun hai, network kya hai, kaun sa idea lagega, aur jawab ki jaanch kaise hogi.

**Aage kya?** Class 10 Physics Chapter 8 Household Circuits and Safety: ek akela fuse kaise poore ghar ko aag se bachata hai, aur tumhare plug ki teesri pin kya karti hai?
