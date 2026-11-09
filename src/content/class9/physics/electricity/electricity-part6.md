# Chapter: Electricity (Part 6)

> **Class:** 9 | **Subject:** Physics
> **Ye file [electricity-part5.md](electricity-part5.md) se aage chalti hai** (wahan resistors ka series aur parallel combination tha). Poore chapter ke liye: [electricity.md](electricity.md). Pehle ke topics: W = V I t [electricity-part3.md](electricity-part3.md) mein, Ohm ka law [electricity-part4.md](electricity-part4.md) mein. Power (watt, kilowatt-hour) ke liye: [work-energy-and-power-part7.md](../work-energy-and-power/work-energy-and-power-part7.md). Heat aur Q = m c ΔT ke liye: [heat-and-temperature-part3.md](../heat-and-temperature/heat-and-temperature-part3.md).
> **Topics covered in this file:**
> 6. Heating Effect of Current aur Electric Power

---

# Topic 6: Heating Effect of Current aur Electric Power

Pichhle topic mein humne dekha ki resistors ko series aur parallel mein kaise jodte hain, aur ghar ki wiring parallel kyun hoti hai. Ek baat wahan adhoori reh gayi thi: **jab current kisi resistor se guzarta hai, to wo garam hota hai.** Is topic mein hum isi "garam hone" ko number mein badlenge: kitni heat banti hai, kis cheez par depend karti hai, aur uska fayda aur khatra kya hai. Saath mein **power** (watt) aur **fuse** bhi samjhenge, jo ghar ko is garmi ke khatre se bachata hai.

Do cheezein jo pehle seekh chuke ho, yahan kaam aayengi: **V = I R** (Ohm ka law, Topic 4) aur **W = V I t** (Topic 3). Bas inhe jodna hai.

**Is poore topic mein: ghar ka voltage 230 V maanenge, aur paani ka c = 4200 J/kg °C.**

---

## Extension board ki garmi

Sunday ki subah thi. Ms. Joglekar kitchen mein nashta bana rahi thi. Unka bhatija Neev bhi wahin tha. Ek hi extension board mein teen cheezein lagi thi: **toaster**, **mixer** aur **iron** (Neev ki school-shirt press karni thi).

Teeno ek saath chalu hue. Kuch der baad Neev ne extension board ka wire chhua aur bola, "Aunty, ye wire to garam ho gaya!" Tabhi achanak **tak!** ki awaaz aayi aur poore ghar ki light chali gayi. Ghar ka fuse ud gaya tha (uska taar pighal gaya tha).

Ms. Joglekar ne jaldi se teeno ke switch off kiye aur board ka plug nikala. Neev hairaan tha, "Aunty, wire mein to bas current beh raha tha. Wo garam kaise ho gaya? Aur fuse 'jal gaya' kyun? Fuse ka kya kaam hai?"

Ms. Joglekar boli, "Bahut achhe sawal hain beta. Dono ka jawab ek hi hai: **current ka heating effect**. Pehle usse samajh lete hain, phir apne kitchen ka hisaab numbers se karenge." Is kahani ko hum topic ke ant mein solve karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Heating effect of current** | Resistance se current guzarne par electrical energy ka heat mein badalna | Iron ka garm hona |
| **Joule ka heating law** | H = I² R t: banne wali heat current ke square, resistance aur time ke proportional hai | 2 A, 10 Ω, 30 s: 1200 J |
| **Electric power (P)** | Electrical energy kharch hone ki dar: P = W ÷ t = V I. Unit: watt (W) | 60 W ka bulb |
| **Watt (W)** | 1 W = 1 J/s = 1 V × 1 A | 1000 W = 1 kW |
| **Rating** | Appliance par likhi power aur voltage, jaise "60 W, 230 V" | Bulb ka cap |
| **Kilowatt-hour (kWh)** | Energy ka commercial unit: 1 kWh = 3.6 × 10⁶ J | 1 kW ka heater 1 ghanta |
| **Heating element** | Wo coil ya wire jo heat dene ke liye banaya jaata hai | Heater ki nichrome coil |
| **Filament** | Bulb ke andar patla tungsten ka wire jo garm hokar chamakta hai | Bulb ke andar |
| **Fuse** | Kam melting point ka patla wire jo zyada current par pighal kar circuit tod deta hai | Ghar ka fuse |
| **Overload** | Ek hi socket par bahut saare appliances lagane se current ka bahut badh jaana | Extension board par teen cheezein |
| **MCB** | Miniature Circuit Breaker: ek switch jo zyada current par apne aap trip ho jaata hai aur reset ho sakta hai | Aaj ke gharon ka main board |

---

## Part A: Wire garam kyun hota hai?

### Ek picture: free electrons ki takkar

Metal ke wire mein bahut saare **free electrons** hote hain. Battery ya supply jab voltage deti hai, to ye electrons ek disha mein chalne lagte hain: yahi current hai (Topic 2 aur 3). Par raaste mein wire ke **atoms** bhi rukawat banate hain. Electron chalte-chalte atoms se takrata hai, aur apni kuch energy atom ko de deta hai. Atom ko energy milne se wo zyada tezi se kaampne (vibrate) lagta hai. **Atoms ka zyada kaampna hi wire ka garm hona hai.**

Ye ek simple picture hai (asal baat aage ki classes mein aayegi), par ye samajhne ke liye kaafi hai ki resistance ka matlab hi hai "electrons ke raaste mein rukawat", aur is rukawat mein electrical energy heat ban jaati hai.

```
   Wire ke andar (electron: e, atom: O)

   ->  e ----> O      e ----> O      e ----> O
         takkar         takkar         takkar
   Har takkar mein electron ki energy atom ko mil jaati hai
   Atom zyada kaampta hai: wire garm
```

> **Figure 6.1** – Free electron chalte hue atoms se takrata hai aur apni energy unhe de deta hai: electrical energy heat mein badal jaati hai.

### Kitni heat banti hai? Joule ka law

Topic 3 mein humne dekha tha ki V voltage par Q charge ko chalane mein jo kaam hota hai, wo **W = V I t** hai. Ye saara electrical energy resistor mein heat ban jaata hai. Ab Ohm ka law **V = I R** lagao:

> W = V I t = (I R) × I × t = **I² R t**

Yahi **Joule ka heating law** hai:

> **H = I² R t**
> Heat (joule) = (current in A)² × resistance (Ω) × time (s)

Yani banne wali heat:
- **current ke square** ke proportional hai (I²),
- **resistance** ke proportional hai (R),
- **time** ke proportional hai (t).

Yahan "H" wahi heat hai jo electrical kaam ke barabar hai: electrical energy ka jo hissa heat ban gaya, wo kaam W ke barabar hai.

### Teen roop

V = I R se I ya R ko hata kar H ke teen roop milte hain:

| Roop | Kab use karein? |
|---|---|
| H = I² R t | Jab I aur R maloom ho (series circuit mein I same rehta hai) |
| H = V I t | Jab V aur I maloom ho |
| H = (V² ÷ R) × t | Jab V aur R maloom ho (parallel mein V same rehta hai) |

Teesra roop aise bana: I = V ÷ R, to V I t = V × (V ÷ R) × t = (V² ÷ R) t.

> **Thoda extra (Class 10 overlap):** H = I² R t ka naam Joule ke law of heating hai. Class 10 mein ise aur gehraai se dekhte hain. Abhi bas itna jaano ki current dugna karne par heat **char guna** hoti hai.

---

## Part B: Electric power

> **Thoda extra (Class 10 overlap):** P = V I ke saath P = I² R aur P = V² ÷ R wale roop Class 10 mein detail se aate hain. Yahan hum unhe simple hisaab ke liye use karenge.

Heat banne ki **dar** (kitni tezi se) hi **power** hai. Work-energy chapter se: power = work ÷ time. Yahan work electrical hai, W = V I t, to:

> **P = W ÷ t = V I**

V = I R se baaki roop bhi mil jaate hain:

> **P = V I = I² R = V² ÷ R**

**Unit:** watt (W). **1 W = 1 J/s = 1 V × 1 A.**

Bade unit: **1 kW = 1000 W**, aur **1 MW = 10⁶ W** (power station ki baat karte waqt).

### Appliance ki rating

Bulb ya heater par likha hota hai, jaise **"60 W, 230 V"**. Iska matlab: *ye appliance 230 V par chalaoge, to 60 W power use karega* (yaani har second 60 J electrical energy). Isse hum kuch aur bhi nikaal sakte hain:

- **Current:** I = P ÷ V
- **Resistance:** R = V² ÷ P (ya R = V ÷ I)

Kitchen ke appliances ki lagbhag ratings (230 V par):

| Appliance | Power (lagbhag) |
|---|---|
| LED / CFL bulb | 5 W se 15 W |
| Tube light | 40 W |
| Table fan | 60 W |
| Mixer | 600 W |
| Toaster | 800 W |
| Electric heater / iron | 1000 W |
| Geyser | 1500 W se 2000 W |

### Power aur energy ek cheez nahi hain

**Power** kitni tezi se energy kharch hoti hai (W = J/s). **Energy** kul kitni kharch hui:

> **E = P t** (joule, jab P watt mein aur t second mein ho)

Bijli ke bill ke liye joule bahut chhota unit hai (work-energy chapter mein dekha tha), isliye **kilowatt-hour (kWh)** use hota hai:

> **1 kWh = 1 kW × 1 h = 1000 W × 3600 s = 3.6 × 10⁶ J**

Bill kaise bante hain, ye Topic 7 mein dekhenge.

---

## Part C: Solved examples (formulas ka practice)

**Example 1 (H = I² R t):** 2 A current 10 Ω ke resistor se 30 s tak guzarta hai. Kitni heat banegi?

- H = I² R t = (2 A)² × 10 Ω × 30 s = 4 A² × 10 Ω × 30 s = 40 W × 30 s = **1200 J**

**Jaanch:** V = I R = 2 × 10 = 20 V. H = V I t = 20 V × 2 A × 30 s = 1200 J ✅

**Example 2 (H = V I t):** 230 V ke supply se ek heater 4 A current leta hai. 10 s mein kitni heat banegi?

- H = V I t = 230 V × 4 A × 10 s = 920 W × 10 s = **9200 J**

**Jaanch:** Power = 230 × 4 = 920 W = 920 J/s, to 10 s mein 9200 J ✅

**Example 3 (H = V² t ÷ R):** 230 V par 52.9 Ω ke ek coil se 60 s tak current guzarta hai. Heat kitni?

- V² = 230 × 230 = 52900 V²
- P = V² ÷ R = 52900 V² ÷ 52.9 Ω = 1000 W
- H = P t = 1000 W × 60 s = **60000 J**

**Jaanch:** I = V ÷ R = 230 ÷ 52.9 = 4.35 A. H = I² R t = (4.35)² × 52.9 × 60 = 18.92 × 52.9 × 60 ≈ 60000 J ✅

**Example 4 (P = V I):** ek bulb 230 V par 0.26 A current leta hai. Uski power kitni hai?

- P = V I = 230 V × 0.26 A = 59.8 W ≈ **60 W**

**Jaanch:** Ulta karo: 60 W ÷ 230 V = 0.261 A ≈ 0.26 A ✅

**Example 5 (rating se current):** (a) 60 W, 230 V ke bulb ka current. (b) 1000 W, 230 V ke heater ka current.

- (a) I = P ÷ V = 60 W ÷ 230 V = **0.26 A**
- (b) I = 1000 W ÷ 230 V = **4.35 A**

**Jaanch:** (a) 230 × 0.26 = 59.8 W ≈ 60 W ✅. (b) 230 × 4.35 = 1000.5 W ≈ 1000 W ✅. Dekho: heater bulb se lagbhag 17 guna zyada current leta hai (4.35 ÷ 0.26 ≈ 16.7), jaise uski power 1000 ÷ 60 ≈ 16.7 guna hai.

**Example 6 (rating se resistance):** (a) 100 W, 230 V ke bulb ka resistance. (b) 1000 W, 230 V ke heater ka resistance.

- (a) R = V² ÷ P = (230 V)² ÷ 100 W = 52900 V² ÷ 100 W = **529 Ω**
- (b) R = 52900 V² ÷ 1000 W = **52.9 Ω**

**Jaanch:** (a) I = 100 ÷ 230 = 0.4348 A, R = V ÷ I = 230 ÷ 0.4348 = 529 Ω ✅. (b) I = 4.348 A, R = 230 ÷ 4.348 = 52.9 Ω ✅. (Ye resistance tab ka hai jab appliance chal raha ho: filament garm hone par uska resistance badhta hai.)

**Example 7 (energy: geyser):** 1500 W ka geyser 20 minute chalta hai. Kitni energy kharch hui? (a) joule mein, (b) kWh mein.

- t = 20 min = 20 × 60 = 1200 s
- (a) E = P t = 1500 W × 1200 s = **1800000 J = 1.8 × 10⁶ J**
- (b) P = 1.5 kW, t = 20 ÷ 60 = 1/3 h, to E = 1.5 kW × (1/3) h = **0.5 kWh**

**Jaanch:** 0.5 kWh × 3.6 × 10⁶ J/kWh = 1.8 × 10⁶ J ✅ (dono answer barabar)

**Example 8 (immersion heater se paani garm karna):** 500 W ka immersion heater 1 kg paani ko 20 °C se 70 °C tak garm karta hai. Kitni der lagegi? (Maan lo saari heat paani ko mili.)

- ΔT = 70 − 20 = 50 °C
- Q = m c ΔT = 1 kg × 4200 J/kg °C × 50 °C = **210000 J**
- t = Q ÷ P = 210000 J ÷ 500 J/s = **420 s = 7 minute**

**Jaanch:** 500 W × 420 s = 210000 J ✅. (Asal mein thodi heat bahar bhi jaati hai, to thoda zyada time lagega.)

**Example 9 (current dugna, heat char guna):** 10 Ω ke resistor se (a) 1 A, (b) 2 A current 10 s tak guzare. Heat ka ratio?

- (a) H₁ = (1 A)² × 10 Ω × 10 s = **100 J**
- (b) H₂ = (2 A)² × 10 Ω × 10 s = **400 J**
- Ratio H₂ : H₁ = 400 : 100 = **4 : 1**

**Jaanch:** current ka ratio 2 hai, to heat ka ratio 2² = 4 ✅. (Isiliye "current dugna to heat dugni" galat hai.)

**Example 10 (fuse ki rating chunna):** ek ghar mein 1000 W aur 500 W ke do appliances ek saath, 230 V par, ek hi circuit mein chalte hain. Kaunsa fuse (5 A, 10 A, 15 A) lagayein?

- Kul power = 1000 + 500 = 1500 W
- Kul current I = P ÷ V = 1500 W ÷ 230 V = **6.52 A**
- 5 A ka fuse to pighal jayega (6.52 A > 5 A). Normal current ke thoda upar wala standard fuse: **10 A**.

**Jaanch:** 1000 ÷ 230 = 4.348 A, 500 ÷ 230 = 2.174 A, jod = 6.522 A ✅ (parallel branches ka total current, Topic 5). 6.52 A < 10 A, to 10 A fuse normal chalne par nahi jalega ✅

**Example 11 (2000 W ka geyser):** uske circuit ka fuse kaunsa hona chahiye?

- I = P ÷ V = 2000 W ÷ 230 V = **8.7 A**
- Standard ratings 5 A, 10 A, 15 A mein se 8.7 A se upar ki agli rating **10 A** hai. Isliye 10 A ka fuse. (Aksar bade geyser ke liye alag 15 A ka circuit bhi banta hai: ye wiring ke hisaab se electrician tay karta hai.)

**Jaanch:** 230 × 8.7 = 2001 W ≈ 2000 W ✅. 8.7 A < 10 A ✅

**Example 12 (do bulb: 60 W aur 100 W):** dono 230 V ke hain. Resistance nikalo. Series mein jodne par kaun zyada chamkega?

- R₆₀ = V² ÷ P = 52900 V² ÷ 60 W = **881.7 Ω**
- R₁₀₀ = 52900 V² ÷ 100 W = **529 Ω**
- 100 W ka resistance **kam** hai, 60 W ka **zyada**.

**Jaanch:** 230² ÷ 881.7 = 60 W ✅, 230² ÷ 529 = 100 W ✅.

**Thoda extra:** agar dono ko **series** mein 230 V par jodein, to dono mein same current I = 230 V ÷ (881.7 + 529) Ω = 230 ÷ 1410.7 = 0.163 A. Ab P = I² R: 60 W wala bulb 0.163² × 881.7 ≈ **23.4 W**, 100 W wala 0.163² × 529 ≈ **14.1 W**. Yaani series mein **60 W wala bulb zyada chamkega**, kyunki series mein current same hai aur P = I² R mein jiska R bada, uski power zyada. (Parallel mein ulta: V same hai, P = V² ÷ R, to 100 W wala zyada chamakta hai.)

**Example 13 (cable aur element ka farak):** 1000 W ke heater (R = 52.9 Ω) ko ek tamba (copper) cable se current milta hai. Maan lo cable ka resistance 0.05 Ω hai. Dono mein har second kitni heat banegi?

- Series hai, to dono mein current same: I = 4.35 A
- Element: P = I² R = (4.35 A)² × 52.9 Ω = 18.9 A² × 52.9 Ω ≈ **1000 J/s**
- Cable: P = (4.35 A)² × 0.05 Ω = 18.9 A² × 0.05 Ω ≈ **0.95 J/s**
- Ratio = 1000 ÷ 0.95 ≈ **1050 guna** (resistance ka ratio: 52.9 ÷ 0.05 = 1058)

**Jaanch:** current same ho to heat ka ratio resistance ke ratio ke barabar hona chahiye: 1058 ≈ 1050 (round off ka farak) ✅

**Example 14 (bulb ki energy):** 100 W ka bulb 5 ghante jalta hai. Energy kitni kharch hui? (a) kWh mein, (b) joule mein.

- P = 100 W = 0.1 kW, t = 5 h
- (a) E = 0.1 kW × 5 h = **0.5 kWh**
- (b) E = 0.5 × 3.6 × 10⁶ J = **1.8 × 10⁶ J**

**Jaanch:** 100 W × (5 × 3600 s) = 100 × 18000 = 1800000 J ✅. (Dhyan do: ye geyser wale Example 7 ke barabar hai: 1500 W sirf 20 minute mein utni energy leta hai jitni 100 W ka bulb 5 ghante mein.)

---

## Part D: Heating effect ke fayde: appliances

Bahut se appliances isi effect par bane hain, jahan hume **heat chahiye**:

| Appliance | Heating element |
|---|---|
| Electric heater, iron, toaster, kettle, geyser, hair dryer | Nichrome ki coil |
| Bulb (incandescent) | Tungsten ka filament |
| Soldering iron | Garm hone wali nok (tip) |
| Fuse | Patla kam melting point ka wire (Part E) |

### Heating element: nichrome kyun?

Heater, iron, toaster ki coil **nichrome** (nickel aur chromium ka alloy) ki hoti hai. Kyun?
1. **Resistivity zyada** hai (Topic 4): chhoti lambai mein bhi bada resistance milta hai, to I² R t ke mutabiq zyada heat banti hai.
2. **Melting point bahut ooncha** hai (lagbhag 1400 °C, approximate): lal garm hokar bhi pighalta nahi.
3. Garm hone par bhi hawa mein jaldi **oxidise (jang jaisa kharaab) nahi hota**, isliye coil lambe samay tak chalti hai.

Copper ya aluminium ke wire se heater nahi banate: unka resistance kam hai, to heat kam banegi.

### Bulb ka filament: tungsten kyun?

Purane **incandescent bulb** ke andar patla tungsten ka filament hota hai. Wo lagbhag **2500 °C** tak garm hokar safed roshni deta hai. Tungsten isliye kyunki:
- Uska **melting point bahut ooncha** hai: lagbhag **3400 °C** (approximate). 2500 °C par bhi wo pighalta nahi.
- Wo patla aur lamba taar banne ke kaabil hai, aur uska resistance kaafi hota hai.

Bulb ke andar hawa nahi hoti: usme **argon ya nitrogen jaisi inert gas** (jo kisi se react nahi karti) bhari hoti hai. Agar oxygen hota, to itna garm tungsten jal jaata (oxidise ho jaata). Inert gas mein wo jalta nahi, isliye filament chamakta rehta hai.

Ek aur dilchasp baat: incandescent bulb mein bijli ki energy ka **lagbhag sirf 5% roshni** banta hai, baaki **lagbhag 95% heat** ban kar bahar chali jaati hai (approximate values). Isiliye aise bulb haath se chhoo lo to bahut garm lagte hain. Aaj ke LED bulb isi kaaran se kam bijli mein utni roshni dete hain: unmein heat kam banti hai.

---

## Part E: Fuse aur MCB: ghar ke bodyguard

### Overload aur short circuit

Do halaat mein circuit mein current bahut badh jaata hai:

**1. Overload:** ek hi socket ya extension board par bahut saare appliances. Parallel mein jude hone ke kaaran **kul current = har branch ke current ka jod** (Topic 5). Appliances jitne zyada, utna kul current zyada.

**2. Short circuit:** jab **live aur neutral wire** (ya positive aur negative) kisi kharabi se aapas mein chhu jaayein. Tab raaste ka resistance lagbhag zero ho jaata hai, aur Ohm ke law (I = V ÷ R) se current **bahut hi zyada** ho jaata hai. Topic 2 mein humne short circuit dekha tha: wahi ghar mein ho to spark nikalta hai, wire jalne lagte hain aur **aag lag sakti hai**. Wahin ye bhi kaha tha ki isi khatre se bachane ke liye ghar mein fuse lagta hai, jo zyada current par pighal kar raasta tod deta hai. Ab dekhte hain ki wo ye kaise karta hai.

Dono hi halaat mein I badha to **I² R t** se wire mein heat **current ke square ke hisaab se** tezi se badhti hai: wire itna garm ho sakta hai ki uska plastic pighal jaaye aur aag lag jaaye.

### Fuse kya karta hai?

**Fuse** ek patla wire hota hai, jo aise alloy (tin aur lead, ya copper aur tin) ka bana hota hai jiska **melting point kam** hota hai. Isse circuit mein **series** mein, aur hamesha **live wire** mein lagate hain.

- Jab tak current **safe limit** ke andar hai, fuse wire halka garm hota hai par pighalta nahi.
- Jab current limit se zyada ho jaata hai (overload ya short circuit), fuse wire itna garm hota hai ki **pighal jaata hai**. Circuit **toot jaata hai**, current ruk jaata hai, aur appliances aur ghar ke wires bach jaate hain.

Isiliye kehte hain: fuse "jal gaya." Asal mein usne apni qurbani dekar ghar ko bacha liya.

```
        Live wire
   ─────────[ FUSE ]────────────┐
                                │
                              ┌─┴─┐
                              │ A │  Appliance
                              └─┬─┘
   ─────────────────────────────┘
        Neutral wire

   FUSE series mein, live wire mein: current zyada hua to
   fuse wire pighla, circuit khula, current band
```

> **Figure 6.2** – Fuse live wire mein, appliance ke series mein lagta hai. Zyada current par uska patla wire pighal kar circuit tod deta hai.

### Fuse ki rating

Fuse par **5 A, 10 A, 15 A** jaisi rating hoti hai: matlab itna current wo jhel sakta hai, usse zyada par pighal jaata hai. Rating hamesha appliances ke normal current se **thodi upar** chunte hain (Example 10 aur 11): bahut upar nahi (warna wo bachayega nahi), aur bilkul barabar nahi (warna normal chalte waqt hi jal jayega).

### MCB (circuit breaker)

Aaj ke bahut se gharon mein fuse wire ki jagah **MCB** (Miniature Circuit Breaker) lagte hain. Ye zyada current par apne aap **trip** ho jaate hain (switch neeche gir jaata hai), aur kharabi theek hone par hum use sirf **reset** (wapas on) kar sakte hain: fuse wire ki tarah har baar badalna nahi padta. Kaam wahi hai: current badhne par circuit todna.

> **Safety:** fuse badalna ya ghar ki wiring kholna **sirf licensed electrician ka kaam hai**. Bachon ko mains ki bijli ke saath kabhi koi experiment nahi karna chahiye. Ye topic sirf samajhne ke liye hai.

---

## Part F: Neev ke sawal ka jawab (numbers ke saath)

Ms. Joglekar ne teeno appliances ki ratings dekhi, aur 230 V par current nikala:

| Appliance | Power | I = P ÷ V |
|---|---|---|
| Toaster | 800 W | 800 ÷ 230 = **3.48 A** |
| Mixer | 600 W | 600 ÷ 230 = **2.61 A** |
| Iron | 1000 W | 1000 ÷ 230 = **4.35 A** |

Teeno parallel mein hain (extension board mein), to **kul current = jod**:

> I = 3.48 A + 2.61 A + 4.35 A = 10.44 A ≈ **10.43 A**

**Jaanch:** Kul power = 800 W + 600 W + 1000 W = 2400 W, to I = 2400 W ÷ 230 V = 10.43 A ✅ (dono tarike barabar; 10.44 aur 10.43 ka farak sirf rounding ka hai)

Ab extension board ka wire aam taur par **5 A** ke hisaab se bana hota hai, aur ghar ka fuse maan lo **10 A** ka tha. Kul current 10.43 A dono se zyada hai:
- Board ke wire ke liye current lagbhag **dugna** (10.43 ÷ 5 = 2.09). I² R t ke hisaab se heat lagbhag **(2.09)² ≈ 4.4 guna**. Isiliye board ka wire **garm** ho gaya.
- Ghar ke 10 A ke fuse ko bhi 10.43 A mila: wo garm hota gaya, aur pighal gaya. (Thodi si overload mein fuse ko pighalne mein kuch der lagti hai. Isi beech board ka wire garm ho raha tha.)

```
   Teen cheezein ek board par (har # ≈ 0.5 A):

   Toaster  : ####### 3.48 A
   Mixer    : ##### 2.61 A
   Iron     : ######### 4.35 A
   ----------------------------------------
   Kul      : ##################### 10.43 A

   Board ka wire (5 A) : ##########
   Ghar ka fuse (10 A) : ####################
```

> **Figure 6.3** – Teen appliances ke current jodne par kul current 10.43 A ho gaya, jo board ke 5 A aur ghar ke 10 A ke fuse, dono se zyada hai.

Ms. Joglekar ne kaha, "Dekha Neev? Teeno cheezein alag-alag theek hain. Par ek board par teeno ek saath lagayi, to current ka jod bahut ho gaya. Wire aur fuse dono ne apni limit se zyada jhela. Fuse ne ghar ko bachaya."

Neev hans diya aur bola, "Aunty, to iron ab alag socket mein lagate hain!" Ms. Joglekar muskurayi, "Bilkul. Aur fuse ko kabhi mote taar se nahi badalna: usse fuse ka kaam hi khatam ho jaata hai. Agle section mein dekho."

---

## Part G: Safety ke niyam

1. **Ek socket par bahut saare appliances mat lagao.** Heater, iron, geyser jaise zyada power wale appliances ko alag socket mein lagao.
2. **Fuse hamesha sahi rating ka lagao.** Kabhi bhi fuse ki jagah **mota taar (copper wire) ya zyada rating ka fuse** mat lagao: mota taar pighalta hi nahi, to current badhne par bhi circuit nahi tootega, aur wiring garm hokar aag laga sakti hai.
3. **Achhi quality ke, proper quality-marked appliances** hi kharido.
4. **Geele haath se switch ya plug mat chhuo.** Geele haath se bijli ka jhatka lag sakta hai.
5. **Koi bhi repair sirf licensed electrician kare**, aur usse pehle switch off ho aur plug nikla ho.
6. **Metal ki body wale appliances ka earthing** hona chahiye (iron, geyser, fridge): plug ka **teesra pin** (Topic 1 mein naam aaya tha, detail Topic 7 mein) earth se juda hota hai, taaki agar body mein current aa jaaye to wo zameen mein chala jaaye aur hume jhatka na lage.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Power aur energy ko ek maan lena**

Power (W = J/s) energy kharch hone ki **dar** hai. Energy (J ya kWh) kul kharch hui matra hai. 1000 W ka heater power hai. Wo 2 ghante chale, to energy = 1 kW × 2 h = **2 kWh**: ye energy hai. "Kilowatt" aur "kilowatt-hour" alag cheezein hain.

**Galti 2: "Heat current ke proportional hai"**

Galat. H = I² R t, to heat current ke **square** ke proportional hai. Example 9: current dugna kiya (1 A se 2 A), to heat 100 J se 400 J: **4 guna**, 2 guna nahi.

**Galti 3: Rating wale voltage ko bhool jaana**

"60 W, 230 V" ka matlab 60 W tabhi jab 230 V mile. Agar voltage kam mile (jaise 115 V), to power kam hoti hai: P = V² ÷ R. Aadha voltage dene par power chauthai (1/4) reh jaati hai. Isliye 230 V ka bulb 115 V par nahi lagate.

**Galti 4: Fuse ki jagah mota taar lagana**

Fuse ka kaam hai kam current par pighal jaana. Mota taar ya zyada rating ka fuse lagaya, to wo pighlega nahi, aur khatra badh jaayega. Fuse sirf **sahi rating** ka, aur **live wire mein series mein**.

**Galti 5: Unit badalna bhoolna**

Example 7 mein 20 minute ko pehle second mein (1200 s) ya ghante mein (1/3 h) badalna zaroori hai. Aur W ko kW mein badalna: 1500 W = 1.5 kW. Agar 1500 W × 20 min likhoge, to galat unit milega.

**Galti 6: "Zyada power wale bulb ka resistance zyada hota hai"**

Ulta hai. Same voltage par R = V² ÷ P, to **zyada power, kam resistance**. 100 W ka R = 529 Ω, 60 W ka R = 881.7 Ω (Example 12).

**Galti 7: "Cable aur heater ka current alag hota hai, isliye heater garm hota hai"**

Dono ka current same hai (series). Farak resistance ka hai: heater ka element 52.9 Ω, copper cable ka lagbhag 0.05 Ω. I² R t mein I same, to jiska R bada, uski heat zyada (Example 13).

---

## Quick Recap

- Current resistance se guzarta hai to **electrical energy heat mein badalti hai**: free electrons atoms se takrate hain aur unhe energy dete hain.
- **Joule ka law:** H = I² R t = V I t = (V² ÷ R) t, joule mein.
- **Heat current ke square ke proportional hai**: current dugna, heat 4 guna.
- **Power:** P = V I = I² R = V² ÷ R, unit watt. **1 W = 1 J/s = 1 V × 1 A**; 1 kW = 1000 W; 1 MW = 10⁶ W.
- **Rating** "60 W, 230 V": 230 V par 60 W power. Isse I = P ÷ V aur R = V² ÷ P nikalte hain.
- **Energy E = P t**; commercial unit **1 kWh = 3.6 × 10⁶ J**. Power (W) aur energy (J, kWh) alag hain.
- Heater, iron, toaster mein **nichrome** (zyada resistivity, ooncha melting point). Bulb mein **tungsten** filament (lagbhag 3400 °C melting point), **inert gas** ke andar.
- Cable kam garm hota hai, kyunki same current par uska resistance bahut kam hai (H = I² R t).
- **Fuse:** kam melting point ka patla wire, live wire mein, series mein: zyada current par pighal kar circuit todta hai. **MCB** trip hota hai aur reset ho sakta hai.
- Fuse ki rating normal current se thodi upar: 5 A, 10 A, 15 A.
- **Overload** (parallel mein currents ka jod) aur **short circuit** (R lagbhag zero) fuse ke kaaran hain.
- Safety: sockets overload na karo, sahi fuse lagao (mota taar kabhi nahi), geele haath se switch na chhuo, repair se pehle switch off, metal body wale appliance ka earthing.
- Kitchen ki kahani: toaster 3.48 A + mixer 2.61 A + iron 4.35 A ≈ 10.43 A, jo board ke 5 A aur ghar ke 10 A fuse dono se zyada tha.

---

## Practice Questions

1. A current of 3 A flows through a resistor of 5 Ω for 20 s. Find the heat produced.

2. An iron is rated 575 W at 230 V. Find (a) the current it draws, (b) its resistance, and (c) the energy used in 10 minutes in joule.

3. A 40 W, 230 V tube light is switched on. Find the current it draws and its resistance.

4. A 2.5 kW room heater is used for 2 hours. Find the energy used in kWh and in joule.

5. The current through a resistor is tripled while the resistance and the time stay the same. By what factor does the heat produced change?

6. A 1000 W immersion heater is used to heat 2 kg of water from 20 °C to 60 °C. Find the heat needed and the time taken (assume no heat loss). Use c of water = 4200 J/kg °C.

7. Three appliances of 750 W, 250 W and 1500 W run together on 230 V in one circuit. Find the total current and choose a fuse out of 5 A, 10 A and 15 A.

8. Why must a fuse never be replaced by a thick copper wire? Answer in two or three lines.

9. A 40 W and a 100 W bulb, both rated 230 V, are connected in parallel to 230 V. Find the current in each. Which one glows brighter?

10. A heater of power 1.5 kW is used at 230 V. Find its current and its resistance.

11. State True or False:
    (a) Doubling the current through a resistor doubles the heat produced in the same time.
    (b) 1 kWh is equal to 3.6 × 10⁶ J.
    (c) A fuse is connected in series in the live wire.
    (d) A 100 W bulb has a higher resistance than a 60 W bulb of the same voltage rating.

12. A 2000 W geyser is connected to a circuit having a 5 A fuse. What will happen when the geyser is switched on? Support your answer with a calculation.

13. The element of a heater becomes red hot, but the copper cable connecting it to the socket stays only slightly warm, although the same current flows through both. Explain.

14. Convert 0.25 kWh into joule.

### Answers

1. H = I² R t = (3 A)² × 5 Ω × 20 s = 9 A² × 5 Ω × 20 s = 45 W × 20 s = **900 J**.
   Jaanch: V = 3 × 5 = 15 V, H = 15 V × 3 A × 20 s = 900 J ✅

2. (a) I = P ÷ V = 575 W ÷ 230 V = **2.5 A**.
   (b) R = V ÷ I = 230 V ÷ 2.5 A = **92 Ω**.
   (c) t = 10 × 60 = 600 s, E = 575 W × 600 s = **345000 J**.
   Jaanch: R = V² ÷ P = 52900 ÷ 575 = 92 Ω ✅; P = I² R = 6.25 × 92 = 575 W ✅

3. I = 40 W ÷ 230 V = **0.174 A** (lagbhag 0.17 A). R = V² ÷ P = 52900 V² ÷ 40 W = **1322.5 Ω**.
   Jaanch: 230 V ÷ 0.1739 A = 1322.5 Ω ✅

4. P = 2.5 kW, t = 2 h, E = 2.5 kW × 2 h = **5 kWh**. Joule mein: 5 × 3.6 × 10⁶ J = **1.8 × 10⁷ J** (18000000 J).
   Jaanch: 2500 W × (2 × 3600 s) = 2500 W × 7200 s = 18000000 J ✅

5. H ∝ I², to current teen guna hone par heat 3² = **9 guna** ho jaati hai.
   Jaanch: I = 1 A to H = 1 × R × t; I = 3 A to H = 9 × R × t ✅

6. ΔT = 60 − 20 = 40 °C. Q = 2 kg × 4200 J/kg °C × 40 °C = 8400 J/°C × 40 °C = **336000 J**. t = Q ÷ P = 336000 J ÷ 1000 J/s = **336 s** (5.6 minute, yaani 5 minute 36 second).
   Jaanch: 1000 W × 336 s = 336000 J ✅

7. Kul power = 750 + 250 + 1500 = 2500 W. I = 2500 W ÷ 230 V = **10.87 A**. 10 A ka fuse is current par pighal jayega, to **15 A** ka fuse chuno.
   Jaanch: 750 ÷ 230 = 3.26 A, 250 ÷ 230 = 1.09 A, 1500 ÷ 230 = 6.52 A: jod = 10.87 A ✅

8. Fuse ka kaam kam melting point wale patle wire ka pighal kar circuit todna hai. Mota copper wire na jaldi garm hota hai, na pighalta hai (uska melting point bhi ooncha hai), to zyada current mein bhi circuit nahi tootega aur wiring garm hokar aag laga sakti hai.

9. 40 W bulb: I = 40 ÷ 230 = **0.174 A**. 100 W bulb: I = 100 ÷ 230 = **0.435 A**. Dono parallel mein hain, dono par poora 230 V hai, to **100 W wala zyada power leta hai aur zyada chamkta hai**.
   Jaanch: 230 × 0.174 = 40 W ✅, 230 × 0.435 = 100 W ✅

10. P = 1.5 kW = 1500 W. I = 1500 W ÷ 230 V = **6.52 A**. R = V² ÷ P = 52900 V² ÷ 1500 W = **35.3 Ω**.
    Jaanch: 230 ÷ 6.522 = 35.27 Ω ✅

11. (a) **False** ❌. H ∝ I², to current dugna karne par heat 4 guna hoti hai.
    (b) **True** ✅. 1 kW × 3600 s = 1000 W × 3600 s = 3.6 × 10⁶ J.
    (c) **True** ✅. Fuse live wire mein, series mein lagta hai.
    (d) **False** ❌. Same voltage par R = V² ÷ P, to 100 W bulb ka resistance kam hai (529 Ω, jabki 60 W ka 881.7 Ω).

12. I = 2000 W ÷ 230 V = 8.7 A, jo 5 A ki limit se zyada hai. To geyser chalu karte hi **5 A ka fuse pighal jayega** aur circuit tut jayega. Sahi fuse 10 A ka hota (8.7 A se thoda upar).
    Jaanch: 230 × 8.7 = 2001 W ✅; 8.7 > 5 ✅

13. Heater ke element aur cable dono **series** mein hain, to dono mein **current same** hai. Par heat H = I² R t hai: element ka resistance bahut zyada (jaise 52.9 Ω) aur cable ka bahut kam (jaise 0.05 Ω) hai, to same I aur t par element mein lagbhag 1000 guna zyada heat banti hai. Isliye element lal garm hota hai aur cable sirf thoda garm.

14. 0.25 kWh × 3.6 × 10⁶ J/kWh = **9 × 10⁵ J** = 900000 J.
    Jaanch: 250 W × 3600 s = 900000 J ✅

---

Ab tum Neev ko bata sakte ho ki wire garm kyun hota hai (electrons atoms se takrate hain, H = I² R t), aur fuse "jal gaya" matlab uska patla wire pighal kar ghar ko bachane ke liye circuit tod diya. Agli baar ghar mein board par kitna current aa raha hai, ye bhi socho: P ÷ V se turant pata chal jaata hai.

**Aage kya?** Ab tak humne ghar ki wiring ka sirf zikr kiya aur bill ka sirf "kWh" naam suna. Topic 7 mein dekhenge: **ghar ki wiring, bijli ka bill aur ek aur asar: chemical effect**.
