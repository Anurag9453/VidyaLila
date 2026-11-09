# Chapter: Electricity (Part 3)

> **Class:** 9 | **Subject:** Physics
> **Ye file [electricity-part2.md](electricity-part2.md) se aage chalti hai** (wahan electric current, I = Q/t, ampere, ammeter aur circuit ke symbols the). Charge aur static electricity ki shuruaat [electricity.md](electricity.md) mein hai. Dabav (pressure) ka idea [pressure-and-fluids.md](../pressure-and-fluids/pressure-and-fluids.md) mein hai.
> **Topics covered in this file:**
> 3. Potential Difference aur Voltage

---

# Topic 3: Potential Difference aur Voltage

Pichhle topic mein humne dekha ki circuit **band (closed)** hota hai to current behta hai, aur use ampere mein ammeter se napte hain. Ab ek sawal: **current ko bahne ke liye dhakka kaun deta hai?** Paani nali mein apne aap nahi behta: use kisi na kisi ka "dabav" chahiye. To charges ko chalane wala dabav kya hai, wo kahan se aata hai, aur use napte kaise hain? Is topic mein hum yahi seekhenge: **potential difference**, jise roz ki bhasha mein hum **voltage** kehte hain.

---

## Mr. Gandhi ki dukaan par "V" ka rahasya

Mr. Gandhi ki mobile-accessories ki dukaan mein ek din Anaisha apni mummy ke saath aayi. Use apne phone ka naya charger lena tha. Mr. Gandhi ne ek charger kaunter par rakha. Us par chhote akshar mein likha tha: **"Input 230 V, Output 5 V"**.

Anaisha ne charger ko palta. Uske baad kaunter par rakhi ek chhoti torch ki cell dekhi: us par likha tha **"1.5 V"**. Dukaan ke kone mein rakhi car ki battery par likha tha **"12 V"**.

Anaisha ne puchha, "Uncle, ye 'V' kya hota hai? Aur is charger par do alag number kyun likhe hain: 230 V aur 5 V?"

Mr. Gandhi muskuraye, "Bahut achha sawal hai beta. Ye 'V' wahi cheez hai jo charge ko dhakelti hai. Chalo, pehle paani se samjhte hain, phir is charger ka raaz bhi kholenge." Is kahani ko hum topic ke beech mein solve karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Potential difference (V)** | Do points ke beech 1 coulomb charge ko ek point se doosre tak le jane mein kiya gaya kaam | Torch cell ke do sirey: 1.5 V |
| **Volt (V)** | Potential difference ka SI unit. 1 V = 1 J/C | Car battery: 12 V |
| **Voltage** | Potential difference ka roz ki bhasha wala naam | "Is battery ka voltage 12 V hai" |
| **Voltmeter** | Do points ke beech potential difference napne wala instrument | Bulb ke dono sirey par laga voltmeter |
| **Cell** | Chemical reaction se potential difference banane wali chhoti si cheez | Torch ki cell |
| **Battery** | Kai cells ko jodkar banaya gaya set | 3 V ki battery (do 1.5 V cells) |
| **Terminal** | Cell ya battery ka wo sira jahan se wire jodte hain: positive (+) ya negative (−) | Cell ka + aur − sira |
| **EMF** | Cell ka wo potential difference jo current na behne par uske terminals ke beech hota hai (naam bhar, aage ki class mein detail) | Cell ka "1.5 V" |
| **Transformer** | Ek device jo AC voltage ko ghata ya badha sakta hai | Charger ke andar ka transformer |

---

## Part A: Paani ka example, "dabav" ka farak

Do tanki socho. Ek chhat par rakhi **oonchi tanki**, doosri zameen par rakhi **neechi tanki**. Dono ko ek pipe se jodo. Pipe ka nal kholo to paani **oonchi tanki se neechi tanki ki taraf** behta hai. Kyun? Kyunki oonchi tanki ke paani ka dabav (pressure) zyada hai, neechi ka kam. Is **dabav ke farak** se paani behta hai. Dabav ka farak (pressure difference) nahi hoga, to paani behega hi nahi: dono tanki mein paani barabar ho gaya to behna ruk jaata hai.

```
   Oonchi tanki
   ┌────────┐
   │ ~~~~~~ │
   └───┬────┘
       │  paani behta hai
       ▼
   ┌───┴────┐
   │ ~~     │
   └────────┘
   Neechi tanki
```

> **Figure 3.1** – Paani oonchi tanki se neechi tanki ki taraf behta hai, kyunki dono ke dabav mein farak hai.

Dabav ke baare mein aur padhna ho to [pressure-and-fluids.md](../pressure-and-fluids/pressure-and-fluids.md) dekho.

**Bijli mein bhi bilkul yahi hota hai.** Wire ke andar charge tabhi bahta hai jab wire ke do sirey ke beech **"electrical dabav" ka farak** ho. Is farak ko hi kehte hain **potential difference**.

- Cell ya battery ka **positive terminal** "oonchi tanki" jaisa hai (zyada potential).
- Cell ya battery ka **negative terminal** "neechi tanki" jaisa hai (kam potential).
- **Cell ek pump ki tarah hai**: wo charge ko wapas "oopar" chadhati rehti hai, taaki farak bana rahe.

Bahar ke circuit (bulb, wire) mein conventional current **positive terminal (zyada potential) se negative terminal (kam potential) ki taraf** behta hai. Cell ke andar usi current ko wapas oopar chadhane ka kaam chemical reaction karti hai.

### Table: paani aur bijli ka mel

| Paani ke pipe mein | Bijli ke circuit mein |
|---|---|
| Paani ka behne ka rate (litre per second) | Electric current (ampere = coulomb per second) |
| Dabav (pressure) ka farak | Potential difference (volt) |
| Pump jo paani wapas oopar chadhata hai | Cell ya battery |
| Patla pipe jo paani ko rokta hai | Resistance (ye Topic 4 mein) |

Yaad rakho: ye ek **analogy** hai. Paani ke pipe se samajhna aasan hota hai, par wire mein paani nahi, charge behta hai.

---

## Part B: Potential difference ki definition: V = W/Q

Ab "electrical dabav" ko number dena hai. Socho ki 1 coulomb charge ko circuit ke ek point (A) se doosre point (B) tak le jane mein hum kitna kaam (work) karte hain. Jitna zyada kaam, utna zyada "dabav" ka farak.

> **Do points ke beech potential difference** = us charge ko ek point se doosre tak le jane mein kiya gaya kaam ÷ charge ki matra
>
> **V = W ÷ Q**
>
> V = potential difference (volt), W = kaam (joule), Q = charge (coulomb)

### Unit: volt

Agar W = 1 J aur Q = 1 C ho, to V = 1 J ÷ 1 C = 1 V. Yaani:

> **1 volt (V) = 1 joule per coulomb (1 J/C)**

Matlab agar do points ke beech potential difference **1 V** hai, to un dono ke beech **1 coulomb** charge ko le jane mein **1 joule** kaam hota hai.

### Chhote aur bade units

| Unit | Matlab | Value |
|---|---|---|
| millivolt (mV) | volt ka hazaarwan hissa | 1 mV = 0.001 V = 10⁻³ V |
| volt (V) | SI unit | 1 V |
| kilovolt (kV) | hazaar volt | 1 kV = 1000 V = 10³ V |

### Formula ko ulta-sidha karke use karna

W = Q × V ka matlab hai ki kaam = charge × potential difference. Ise teen tarah se likh sakte hain:

| Kya chahiye? | Formula |
|---|---|
| Potential difference V | V = W ÷ Q |
| Kaam (energy transfer) W | W = Q × V |
| Charge Q | Q = W ÷ V |

### Kuch solved examples

**Example 1.** Kisi charge ko do points ke beech le jane mein 24 J kaam hota hai, aur charge 6 C hai. Potential difference kitna hai?

V = W ÷ Q = 24 J ÷ 6 C = **4 V**.
Jaanch: Q × V = 6 C × 4 V = 24 J ✅

**Example 2.** 3 C charge 12 V ki battery ke beech se guzarti hai. Kitna kaam (energy transfer) hota hai?

W = Q × V = 3 C × 12 V = **36 J**.
Jaanch: W ÷ Q = 36 J ÷ 3 C = 12 V ✅

**Example 3.** Ek 9 V ki battery ne kuch charge ko circuit mein dhakela aur 90 J kaam kiya. Charge kitna tha?

Q = W ÷ V = 90 J ÷ 9 V = 90 J ÷ 9 J/C = **10 C**.
Jaanch: Q × V = 10 C × 9 V = 90 J ✅

**Example 4.** 1.5 V ki torch cell se har coulomb charge ko kitni energy milti hai? Aur 2 C charge ko?

1 C ke liye: W = 1 C × 1.5 V = 1 C × 1.5 J/C = **1.5 J**.
2 C ke liye: W = 2 C × 1.5 J/C = **3 J**.
Jaanch: 3 J ÷ 2 C = 1.5 J/C = 1.5 V ✅

**Example 5.** Ek 9 V ki battery 0.5 C charge ko circuit mein dhakelti hai. Battery kitna kaam karti hai?

W = Q × V = 0.5 C × 9 V = 0.5 C × 9 J/C = **4.5 J**.
Jaanch: 4.5 J ÷ 0.5 C = 9 J/C = 9 V ✅

**Example 6.** Nerve impulse ka potential difference lagbhag 70 mV hota hai. Ise volt mein likho. Aur 11 kV supply line ka voltage volt mein likho.

70 mV = 70 × 0.001 V = **0.07 V**.
11 kV = 11 × 1000 V = **11000 V**.
Jaanch: 0.07 V ÷ 0.001 = 70 mV ✅ aur 11000 V ÷ 1000 = 11 kV ✅

---

## Part C: Cell aur battery: potential difference kahan se aata hai?

**Cell** ke andar chemicals hote hain. Un chemicals ke beech **chemical reaction** hoti hai. Ye reaction cell ke do terminals ke beech ek potential difference bana kar rakhti hai: jab tak chemicals bache hain, tab tak farak bana rehta hai. Isiliye cell charge ko "dhakel" sakti hai. Jab chemicals khatam ho jate hain to cell "khatam" ho jati hai: ab wo farak nahi bana sakti.

**Battery** ka matlab hota hai **kai cells ka set**. Agar cells ko is tarah jodo ki ek ka positive doosre ke negative se juda ho (**series mein**), to unke voltages **add** ho jate hain. Ye sirf idea hai, detail aage ke topics mein.

```
        1.5 V      1.5 V
   ┌────┤├────────┤├────┐
   │    +  −      +  −   │
   │                     │
   └────────⊗────────────┘
      Total = 1.5 V + 1.5 V = 3 V
```

> **Figure 3.2** – Do 1.5 V ki cells series mein: ek ka negative doosre ke positive se juda hai, to total voltage 3 V.

**Example 7.** Do 1.5 V ki cells series mein jodi gayi hain. Battery ka total voltage kitna hoga? 1 C charge ko kitni energy milegi? Aur chaar aisi cells ka voltage?

Do cells: V = 1.5 V + 1.5 V = **3 V**. 1 C ke liye: W = 1 C × 3 J/C = **3 J**.
Chaar cells: V = 4 × 1.5 V = **6 V**.
Jaanch: 3 J ÷ 1 C = 3 J/C = 3 V ✅; 6 V ÷ 1.5 V = 4 cells ✅

**Ulta laga cell:** agar do 1.5 V cells mein se ek **ulta** lag jaaye (+ se +), to dono ek doosre ke dhakke ko cancel kar dete hain: 1.5 V − 1.5 V = **0 V**. Dhakka nahi, to current nahi. Topic 2 mein Hridaan ki torch isi wajah se nahi jali thi.

**Cell ya battery ki ek khaas baat:** battery apne andar charge "store" nahi karti. Wire mein charge pehle se hota hai. Battery to bas **energy deti hai**, jo charge ko dhakelti hai. Ise aage "Aam galtiyan" mein dekhenge.

**EMF** (ek line): Cell ka wo potential difference jo current na bahne par uske terminals ke beech hota hai, use cell ka EMF kehte hain. Abhi hum cell ke 1.5 V ko seedha uska voltage maan kar chalenge.

---

## Part D: Voltmeter: potential difference napne wala instrument

Ammeter Topic 2 mein current napta tha. Potential difference napne ke liye **voltmeter** hota hai. Symbol: ─(V)─.

Voltmeter ke teen niyam yaad rakho:

1. **Parallel mein lagao.** Jin do points ke beech ka potential difference chahiye, voltmeter ko un **dono points ke seedha beech (across)** jodo. Jaise bulb ka voltage chahiye to voltmeter bulb ke dono sirey par lagao.
2. **Positive terminal positive side par.** Voltmeter ka (+) wala sira cell ke positive terminal ki taraf wale point se jodo, aur (−) wala sira negative ki taraf wale point se.
3. **Voltmeter ka resistance bahut bada hota hai.** Isiliye wo circuit se lagbhag koi current nahi kheenchta, aur circuit ka current lagbhag waisa hi rehta hai.

Ek labelled circuit diagram dekho: cell, switch, bulb, ammeter (series mein) aur voltmeter (bulb ke parallel):

```
        ┌────────(A)────────┐
        │                   │
        │              ┌────┴────┐
       ─┴─ +           │         │
       ─┬─ −        ───⊗───    ─(V)─
        │              │         │
        │              └────┬────┘
        │                   │
        └───────/ switch ───┘

   Ammeter (A): bulb ke SERIES mein
   Voltmeter (V): bulb ke PARALLEL mein
```

> **Figure 3.3** – Cell, bulb aur switch ka circuit. Ammeter bulb ke series mein hai (current napta hai), voltmeter bulb ke parallel (potential difference napta hai).

### Voltmeter ki reading kaise padhein: least count

Har meter ki scale par chhote-chhote divisions hote hain. Ek division kitne volt ka hai, ye hota hai **least count (LC)**:

> **LC = scale ki poori range ÷ divisions ki sankhya**

Reading = (needle tak ke divisions) × LC.

**Example 8.** Ek voltmeter ki scale 0 se 3 V tak hai aur usme 30 divisions hain. Needle 14 division par ruki hai. Reading kitni hai?

LC = 3 V ÷ 30 = **0.1 V**.
Reading = 14 × 0.1 V = **1.4 V**.
Jaanch: 1.4 V ÷ 0.1 V = 14 divisions ✅

**Example 9.** Ek doosre voltmeter ki scale 0 se 5 V tak hai aur usme 50 divisions hain. Needle 22 division par hai. Reading kitni hai?

LC = 5 V ÷ 50 = **0.1 V**.
Reading = 22 × 0.1 V = **2.2 V**.
Jaanch: 2.2 V ÷ 0.1 V = 22 divisions ✅

### Ammeter aur voltmeter: ek nazar mein farak

| | Ammeter | Voltmeter |
|---|---|---|
| Kya napta hai? | Current (ampere mein) | Potential difference (volt mein) |
| Circuit mein kaise lagta hai? | **Series** mein | **Parallel** mein (across) |
| Resistance | Bahut chhota (current ko rokta nahi) | Bahut bada (current lagbhag nahi kheenchta) |
| Symbol | ─(A)─ | ─(V)─ |

---

## Part E: Roz ki zindagi ke voltages

Ye sab values **lagbhag (approximate)** hain:

| Jagah | Lagbhag voltage |
|---|---|
| Nerve impulse (humare nerves mein) | 70 mV = 0.07 V |
| Torch ki cell | 1.5 V |
| Mobile phone ki battery | 3.7 V |
| Car ki battery | 12 V |
| Ghar ka mains supply (India, AC) | 230 V |
| Shehar ki supply lines (jo bijli door-door tak le jaati hain) | 11 kV (11000 V) aur usse zyada |

Mains supply AC (alternating current) hota hai: Topic 2 mein is naam se mil chuke hain. Supply lines ke 11 kV aur usse bade voltage bahut khatarnak hote hain: unse door rehna hai.

---

## Part F: Mr. Gandhi ki kahani solve karte hain

Chalo Anaisha ke sawalon par aate hain.

**"V kya hota hai?"** **V** ka matlab **volt** hai: ye potential difference ka unit hai. 1 V = 1 J/C. Yaani torch cell par jo **1.5 V** likha hai, uska matlab: **cell har 1 coulomb charge ko 1.5 joule energy deti hai.** Car battery par **12 V** hai, yaani wo har 1 coulomb ko 12 J energy deti hai: torch cell se 8 guna zyada (12 ÷ 1.5 = 8).

**"Charger par do number kyun?"** Ghar ki socket 230 V (AC) deti hai, jo phone ke liye bahut zyada hai. Phone ko sirf 5 V chahiye. Charger ke andar ek **transformer** hota hai jo 230 V ko ghata kar chhota voltage banata hai (aur AC ko DC mein badalne ka circuit bhi hota hai). Isliye likha hai:

- **Input 230 V**: wo voltage jo charger socket se leta hai.
- **Output 5 V**: wo voltage jo charger phone ko deta hai.

**Example 10.** Charger se 2 C charge phone ko jaata hai (5 V output par). Aur socket (230 V) se 1 C charge guzre to kitni energy?

Charger ke output par: W = Q × V = 2 C × 5 V = **10 J**.
Socket par 1 C ke liye: W = 1 C × 230 V = 1 C × 230 J/C = **230 J**.
Jaanch: 10 J ÷ 2 C = 5 V ✅; 230 J ÷ 1 C = 230 V ✅

Anaisha ne kaha, "Uncle, matlab socket ka voltage bahut zyada hota hai: usse khelna nahi chahiye." Mr. Gandhi bole, "Bilkul sahi. Isliye charger ke andar transformer lagaya jata hai, aur kabhi kharab wire ya charger khud kholne ki koshish nahi karni chahiye."

---

## Part G: Energy transfer: W = Q V, aur W = V I t

Humne dekha ki **W = Q × V**. Topic 2 se hum jaante hain ki **Q = I × t** (current × time). Dono ko jodo:

> **W = V × I × t**
>
> W (joule) = V (volt) × I (ampere) × t (second)

Matlab: circuit mein kitni energy transfer hui, ye voltage, current aur time teeno se pata chalta hai. Is formula ka asli use hum **Topic 6** (heating effect aur electric power) mein karenge.

**Example 11.** Ek circuit mein 0.3 A current 2 minute tak behta hai. (a) Is dauran kitna charge guzra? (b) Agar potential difference 6 V hai, to kitna kaam hua? (c) W = V I t se check karo.

t = 2 min = 2 × 60 s = 120 s.
(a) Q = I × t = 0.3 A × 120 s = 0.3 C/s × 120 s = **36 C**.
(b) W = Q × V = 36 C × 6 V = 36 C × 6 J/C = **216 J**.
(c) W = V × I × t = 6 V × 0.3 A × 120 s = 1.8 W × 120 s = **216 J**.
Jaanch: dono tareeke se 216 J ✅

**Example 12.** Ek 12 V ki battery ne 120 J kaam kiya. (a) Kitna charge circuit se guzra? (b) Agar ek electron ka charge 1.6 × 10⁻¹⁹ C hai, to kitne electrons ne ye charge dhoya?

(a) Q = W ÷ V = 120 J ÷ 12 V = 120 J ÷ 12 J/C = **10 C**.
(b) Electrons ki sankhya n = Q ÷ e = 10 C ÷ (1.6 × 10⁻¹⁹ C) = **6.25 × 10¹⁹** electrons.
Jaanch: 6.25 × 10¹⁹ × 1.6 × 10⁻¹⁹ C = 10 C ✅ aur 10 C × 12 V = 120 J ✅

---

## Part H: Chidiya bijli ke taar par kyun nahi marti?

Kabhi tumne dekha hai ki **chidiya oonchi voltage wali (high-voltage) taar par baithi hoti hai, aur use kuch nahi hota?** Kyun?

Shock tab lagta hai jab kisi ke **sharir ke do points ke beech potential difference** ho, kyunki tab sharir se current behne lagta hai. Chidiya sirf **ek taar** ko chhuti hai: uske dono pair lagbhag ek hi potential par hote hain. Do pairon ke beech **potential difference lagbhag zero** hai, to uske sharir se koi current nahi behta.

Par agar chidiya ek taar ko chhue aur doosre taar, khambhe ya zameen ko bhi chhu le, to uske sharir ke beech potential difference ban jata hai, aur use bahut khatarnak shock lagta hai.

> **Safety warning (zaroori):** Ye sirf samajhne ke liye hai. **Kabhi bhi bijli ke taar, khambhe ya tooti hui taar ko mat chhoona, aur patang (kite) ya lambi cheez se bhi uske paas mat jaana.** High-voltage lines jaan leva hoti hain, aur insaan chidiya ki tarah safe nahi hota. Agar koi tooti taar dikhe to door raho aur bijli vibhag ko batao.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Voltmeter ko series mein jodna.**
Voltmeter ka resistance bahut bada hota hai. Series mein lagane par wo circuit ko lagbhag **block** kar deta hai aur current bahut kam ho jata hai: bulb nahi jalega. Voltmeter hamesha **parallel** mein lagta hai. Ammeter series mein, voltmeter parallel mein.

**Galti 2: "Bulb mein current use ho jata hai."**
Nahi. **Charge khatam nahi hota**: jitna current bulb mein jaata hai, utna hi wapas aata hai. Jo kam hota hai wo hai **energy**: har coulomb bulb mein se guzarte hue apni energy light aur heat mein de deta hai (aur potential difference isi kaam ko napta hai).

**Galti 3: Potential difference aur potential ko ek hi samajhna.**
Potential difference hamesha **do points ke beech** hota hai. Hum kehte hain "A aur B ke beech 6 V". "Ek point ka voltage" bolna adhura hai: uske saath reference chahiye hota hai.

**Galti 4: "Battery charge store karti hai."**
Nahi. Charge to wires mein pehle se hota hai. Battery chemical energy ko electrical energy mein badal kar charge ko **dhakelti** hai.

**Galti 5: Galat scale padhna.**
Voltmeter mein kai scale hote hain (jaise 0-3 V aur 0-15 V). Jis scale par terminal lagaya hai, usi scale se padho, aur **pehle least count nikalo**.

**Galti 6: Unit "volt" aur quantity "V" ko ek samajhna.**
Potential difference ek **quantity** hai (jise hum V ya "voltage" kehte hain), aur **volt** uska **unit** hai. Jaise length ek quantity hai aur metre uska unit. Isiliye hum "V = 6 V" likhte hain: pehla V quantity hai, doosra V unit.

---

## Quick Recap

- Charge ko behne ke liye "dabav" ka farak chahiye: ise **potential difference** kehte hain. Paani ke example mein oonchi aur neechi tanki ke dabav ka farak.
- **V = W ÷ Q**. Unit **volt**: **1 V = 1 J/C**. W = Q × V, Q = W ÷ V.
- 1 mV = 10⁻³ V, 1 kV = 10³ V.
- **Cell** mein chemical reaction potential difference banaye rakhti hai. **Battery** = kai cells. Series mein cells ke voltages add hote hain (1.5 V + 1.5 V = 3 V).
- Conventional current bahar ke circuit mein **positive (zyada potential) se negative (kam potential)** ki taraf behta hai.
- **Voltmeter** parallel mein lagta hai, resistance bahut bada hota hai, positive terminal positive side par.
- **LC = range ÷ divisions**; reading = divisions × LC.
- **W = V × I × t** (Topic 6 mein kaam aayega).
- Chidiya taar par safe hai kyunki uske sharir ke beech potential difference nahi. Insaan ko kabhi taar nahi chhoona.
- Charge use nahi hota; **energy** transfer hoti hai. Battery charge store nahi karti.

---

## Practice Questions

1. Define potential difference between two points. What is the SI unit and what does 1 volt mean?
2. How much work is done in moving a charge of 5 C across a potential difference of 12 V?
3. 60 J of work is done in moving a charge between two points. If the potential difference is 6 V, find the charge.
4. A device does 45 J of work to move 15 C of charge. Find the potential difference.
5. Convert: (a) 250 mV to V, (b) 33 kV to V, (c) 0.5 V to mV.
6. A current of 0.2 A flows for 5 minutes through a lamp connected to a 3 V supply. Find (a) the charge that flows and (b) the work done. Check using W = V I t.
7. A voltmeter has a scale of 0 to 15 V with 30 divisions. The needle shows 18 divisions. Find the least count and the reading.
8. How many 1.5 V cells must be connected in series to make a 9 V battery? How much energy does each coulomb get?
9. Draw a circuit diagram of a cell, a bulb, a switch, an ammeter and a voltmeter, showing correctly how the ammeter and the voltmeter are connected.
10. State True or False and correct if false: (a) A voltmeter is connected in series. (b) A battery stores charge. (c) A bird on a single high-voltage wire is safe because there is no potential difference between its feet. (d) The current is used up by a bulb.
11. A charger is marked "Input 230 V, Output 5 V". Explain what each number means and what device inside the charger changes the voltage.
12. Explain, using the water-tank analogy, why charge flows in a circuit. Why should a person never touch a power line even if birds sit on it safely?

### Answers

1. Do points ke beech potential difference = ek point se doosre tak 1 C charge le jane mein kiya gaya kaam (V = W ÷ Q). SI unit **volt (V)**. 1 V ka matlab hai 1 J/C: 1 C charge ko le jane mein 1 J kaam.

2. W = Q × V = 5 C × 12 V = 5 C × 12 J/C = **60 J**.
   Jaanch: 60 J ÷ 5 C = 12 V ✅

3. Q = W ÷ V = 60 J ÷ 6 V = 60 J ÷ 6 J/C = **10 C**.
   Jaanch: 10 C × 6 V = 60 J ✅

4. V = W ÷ Q = 45 J ÷ 15 C = **3 V**.
   Jaanch: 15 C × 3 V = 45 J ✅

5. (a) 250 mV = 250 × 0.001 V = **0.25 V**. (b) 33 kV = 33 × 1000 V = **33000 V**. (c) 0.5 V = 0.5 ÷ 0.001 = **500 mV**.
   Jaanch: 0.25 V ÷ 0.001 = 250 mV ✅; 33000 ÷ 1000 = 33 kV ✅; 500 × 0.001 = 0.5 V ✅

6. t = 5 min = 5 × 60 s = 300 s. (a) Q = I × t = 0.2 A × 300 s = 0.2 C/s × 300 s = **60 C**. (b) W = Q × V = 60 C × 3 V = **180 J**.
   Jaanch: W = V × I × t = 3 V × 0.2 A × 300 s = 0.6 W × 300 s = 180 J ✅

7. LC = 15 V ÷ 30 = **0.5 V**. Reading = 18 × 0.5 V = **9 V**.
   Jaanch: 9 V ÷ 0.5 V = 18 divisions ✅

8. Cells ki sankhya = 9 V ÷ 1.5 V = **6 cells**. Har coulomb ko energy = 1 C × 9 J/C = **9 J**.
   Jaanch: 6 × 1.5 V = 9 V ✅

9. Figure 3.3 jaisa circuit: cell, switch, bulb aur ammeter ek hi loop mein (series), aur voltmeter sirf bulb ke dono sirey par (parallel), voltmeter ka positive terminal cell ke positive side wale point se juda ho.

10. (a) **False** ❌. Voltmeter parallel mein lagta hai. (b) **False** ❌. Battery energy deti hai, charge wires mein pehle se hota hai. (c) **True** ✅. Uske dono pair lagbhag same potential par hain. (d) **False** ❌. Current use nahi hota, charge wapas aata hai; sirf energy transfer hoti hai.

11. **Input 230 V**: socket se aane wala mains voltage (AC). **Output 5 V**: wo voltage jo charger phone ko deta hai. Charger ke andar ka **transformer** 230 V ko 5 V jaise chhote voltage tak ghatata hai.

12. Oonchi tanki aur neechi tanki ke dabav ke farak se paani behta hai: usi tarah battery ke positive aur negative terminal ke beech potential difference se charge behta hai, aur cell (pump) us farak ko banaye rakhti hai. Chidiya ek taar par safe hai kyunki uske sharir ke beech potential difference nahi. Insaan agar taar ke saath zameen ya khambhe ko bhi chhu le to uske sharir ke beech bahut bada potential difference ban jata hai aur jaan leva shock lagta hai. Isliye **kabhi bijli ke taar ke paas bhi nahi jaana**.

---

Ab Anaisha ko pata chal gaya ki "V" matlab volt hai, aur charger mein do number kyun hote hain. Agli baar koi cell, battery ya charger dekho to uska voltage zaroor padhna aur socho ki wo har coulomb ko kitni energy de raha hai.

**Aage kya?** Voltage current ko dhakelta hai, par kya zyada voltage ka matlab hamesha zyada current? Voltage aur current ke beech ek mazedaar rishta hai: **Ohm ka law**. Ye dekhenge Topic 4 mein.
