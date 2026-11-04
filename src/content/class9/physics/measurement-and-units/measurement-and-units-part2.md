# Chapter: Measurement aur Units (Part 2)

> **Class:** 9 | **Subject:** Physics
> **Ye file [measurement-and-units.md](measurement-and-units.md) se aage chalti hai** (wahan Topic 1 hai: physical quantity kya hoti hai, measurement = number + unit, haath jaise informal units kyun fail hote hain, aur ek common standard unit kyun chahiye).
> **Topics covered in this file:**
> 2. SI Units: Fundamental, Derived aur Prefixes

---

# Topic 2: SI Units: Fundamental, Derived aur Prefixes

Topic 1 mein humne dekha tha ki kisi bhi measurement mein **number ke saath unit** zaroori hai, aur agar har koi apna alag unit (haath, bitta, mutthi) use kare to baat galat samajh aati hai. Isliye sabko ek **common standard** chahiye. Ab sawaal hai: wo standard asal mein hai kya, kaun-kaun si cheezein usme aati hain, aur ek unit se doosre unit mein jaate kaise hain? Yahi is topic ka kaam hai.

---

## Robot jo line ke paar chala gaya

School ki robotics team ki coach Ms. Menon ne Aarush ko ek chhota sa robot banane ka kaam diya. Robot ko ek seedhi track par chalna hai aur **track ke end wali line par ruk jana** hai. Instruction sheet par likha tha: **"Track length: 127 cm."**

Aarush ne robot ka programme likha. Uske programme mein distance ka box tha, jisme number daalna tha. Aarush ne 127 daal diya. Robot start hua, tez chala, aur... line par nahi ruka. Wo line ko paar karke aage nikal gaya aur table ke kone se takra gaya.

Ms. Menon ne programme dekha aur muskura kar poochha, "Aarush, ye 127 kis unit mein hai?"

Aarush ne kaha, "Ma'am, programme to inches maanta hai. Maine socha ki number hai, bas daal do."

Ms. Menon bolin, "Sheet par centimetre likha tha, programme mein inch. Number wahi, unit alag. Robot ko 127 cm nahi, 127 **inch** chalne ko kaha gaya, aur ek inch 2.54 cm ka hota hai. Isiliye wo itna aage nikal gaya."

Aarush ne kaha, "To galti robot ki nahi, meri thi. Par ma'am, agar sab log ek hi unit use karte to ye problem aati hi nahi."

Ms. Menon ne kaha, "Bilkul yahi baat scientists ne bahut pehle samajh li thi. Isliye duniya bhar mein ek hi system maana jata hai. Chalo, usi ko samjhte hain, aur phir tumhara robot wala hisaab bhi theek karte hain."

Is topic ke end mein hum Aarush ke robot ki exact galti nikalenge: kitna aage gaya, aur programme mein sahi number kya hona chahiye tha.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **SI system** | Duniya bhar mein maana jaane wala units ka agreed system (SI = Système International d'Unités) | metre, kilogram, second |
| **Base quantity** | Wo basic physical quantity jisse baaki quantities banai jaati hain | length, mass, time |
| **Fundamental (base) unit** | Base quantity ka apna independent unit | metre (m), kilogram (kg), second (s) |
| **Derived unit** | Wo unit jo base units ko guna ya bhaag karke banta hai | m², m³, m/s, kg/m³ |
| **Prefix** | Unit ke aage lagne wala shabd jo usse 10 ki power se bada ya chhota bana deta hai | kilo, centi, milli |
| **Power of ten** | 10 ko khud se kai baar guna karna (10³ = 10 × 10 × 10) | 10³ = 1000 |
| **Conversion factor** | Do units ke beech ka rishta, jise fraction banakar use karte hain | 1 m = 100 cm |
| **Scientific notation** | Bahut bade ya chhote number ko a × 10ⁿ ke roop mein likhna | 6.4 × 10⁶ m |

---

## Part A: SI system aur 7 base quantities

**SI system** ek aisa system hai jise **poori duniya ke scientists, engineers aur zyadatar desh** maante hain. Matlab Delhi ka ek student, Japan ka ek engineer aur Brazil ka ek scientist, sab "metre" bolenge to ek hi lambai ki baat karenge. Robot wali galti isi system ko follow karne se bach jaati.

SI system ki neev **7 base quantities** par hai. Har ek ka apna base unit hai aur ek chhota symbol hai.

| Base quantity | SI unit ka naam | Symbol | Class 9 mein? |
|---|---|---|---|
| Length (lambai) | metre | m | Haan |
| Mass (dravyaman) | kilogram | kg | Haan |
| Time (samay) | second | s | Haan |
| Temperature (taapman) | kelvin | K | Haan |
| Electric current (bijli ki dhara) | ampere | A | Sirf naam |
| Amount of substance (padarth ki matra) | mole | mol | Sirf naam |
| Luminous intensity (roshni ki tivrata) | candela | cd | Sirf naam |

Class 9 mein hum mainly **length, mass, time** use karenge, aur **temperature** (kelvin) bhi aayega. Baaki teen (ampere, mole, candela) abhi bas **naam yaad rakhne** ke liye hain. Unka kaam aage ki classes mein padega.

**Ek zaroori baat: mass ka SI unit kilogram (kg) hai, gram nahi.** Gram to kilogram ka ek hazaarwa hissa hai. Ye aksar bhool jaate hain, isliye aage bhi yaad dilayenge.

### Symbols likhne ke niyam

- Symbol **chhote letters** mein likhte hain: **m**, **kg**, **s**. Capital sirf tab jab unit ka naam kisi vyakti ke naam par ho (ampere se **A**, kelvin se **K**). Litre ka symbol **L** ek chhoot hai: wo capital likha jaata hai taaki 1 (ek) aur l mein confusion na ho.
- **s** likhte hain, "sec" nahi. **kg** likhte hain, "Kg" ya "KG" nahi.
- Symbol ke aage **s** laga kar plural nahi banate: "5 kg", "5 kgs" nahi.

---

## Part B: Fundamental units aur Derived units

**Fundamental (base) unit:** jo apne aap mein basic hai, kisi aur unit se nahi banta. Jaise m, kg, s.

**Derived unit:** jo **base units ko guna ya bhaag karke** banta hai. Ye bilkul aisa hai jaise do-teen basic ingredients milakar ek nayi dish ban jaye.

Chalo ek-ek karke dekhte hain ki derived units bante kaise hain.

| Quantity | Kaise banti hai | Derived unit |
|---|---|---|
| Area (kshetrafal) | length × length | m × m = **m²** |
| Volume (aayatan) | length × length × length | m × m × m = **m³** |
| Speed (chaal) | distance ÷ time | m ÷ s = **m/s** |
| Density (ghanatva) | mass ÷ volume | kg ÷ m³ = **kg/m³** |
| Force (bal) | mass × (m/s ke badalne ki dar) | kg m/s², jise **newton (N)** kehte hain |

Dhyan do:
- **Area** ka unit m² isliye hai kyunki area do lambaiyon ka guna hai. Ek square jiski side 1 m hai, uska area 1 m × 1 m = 1 m².
- **Volume** teen lambaiyon ka guna hai, isliye m³. Ek cube jiski side 1 m hai, uska volume 1 m³.
- **Speed** mein distance ko time se bhaag karte hain. Agar robot 2 m, 1 s mein chale to speed 2 m/s.
- **Density** ka matlab hai "ek unit volume mein kitna mass". Abhi sirf iska **unit** (kg/m³) samajh lo. Density ke sawaal Topic 5 mein aayenge.
- **Force** ka SI unit newton (N) hai. 1 N = 1 kg m/s². Ye sirf ek jhalak hai, force ka poora kissa aage ke chapters mein aayega.

### Aur bhi derived units ki jhalak

Aap dekhoge ki derived units ke naam kabhi-kabhi **naye** hote hain (jaise N), aur kabhi sirf base units ka combination likha jata hai (jaise m/s). Dono tarah ke derived units hain.

### Kuch non-SI units jo roz dikhte hain

SI ke bahar bhi kuch units roz ki zindagi mein chalte hain. Inhe pehchano aur **SI mein badalna** seekho.

| Non-SI unit | Kahan dikhta hai | SI se rishta |
|---|---|---|
| minute (min) | samay | 1 min = 60 s |
| hour (h) | samay | 1 h = 3600 s |
| litre (L) | doodh, petrol, paani | 1 L = 1000 cm³ = 10⁻³ m³ |
| tonne | truck ka load | 1 tonne = 1000 kg |
| km/h (kmph) | gaadi ki speed | 36 km/h = 10 m/s, yaani 1 km/h = 5/18 m/s |

Ye rishte aage ke examples mein banenge, tab dekhoge ki wo aate kahan se hain.

---

## Part C: Prefixes aur powers of ten

Kabhi hume bahut bada distance naapna hota hai (do shehron ke beech), kabhi bahut chhota (kagaz ki motai). Har baar "1000 m" ya "0.000001 m" likhna thakaane wala hai. Isliye SI mein **prefixes** hain: unit ke aage ek shabd laga do, aur wo unit 10 ki kisi power se bada ya chhota ho jata hai.

### Pehle 10 ki powers ko samajh lo

(Powers ya exponents ka idea pehle se yaad na ho to bhi chalega: neeche shuru se samjha diya hai.)

**10³ ka matlab:** 10 ko 3 baar guna karo.
10³ = 10 × 10 × 10 = **1000**.

Ek aasan trick: power mein jitna number hai, 1 ke baad utne zero lagao.
- 10² = 100 (do zero)
- 10³ = 1000 (teen zero)
- 10⁶ = 1000000 (chhe zero, yaani ek million)

**10⁻³ ka matlab:** negative power ka matlab hai "ulta" (reciprocal).
10⁻³ = 1 ÷ 10³ = 1 ÷ 1000 = **0.001**.

Trick: negative power mein, **decimal point ke baad utne digits** aate hain jitni power hai, aur aakhri digit 1 hota hai.
- 10⁻¹ = 0.1
- 10⁻² = 0.01
- 10⁻³ = 0.001
- 10⁻⁶ = 0.000001 (chhe digits ke baad 1)

Ye bhi yaad rakho: **10⁰ = 1**.

### Common prefixes

| Prefix | Symbol | Power of ten | Matlab | Example |
|---|---|---|---|---|
| giga | G | 10⁹ | 1000000000 | 1 GHz (sirf naam) |
| mega | M | 10⁶ | 1000000 | 1 Mm = 10⁶ m |
| kilo | k | 10³ | 1000 | 1 km = 1000 m |
| centi | c | 10⁻² | 0.01 | 1 cm = 0.01 m |
| milli | m | 10⁻³ | 0.001 | 1 mm = 0.001 m |
| micro | µ | 10⁻⁶ | 0.000001 | 1 µm = 10⁻⁶ m |
| nano | n | 10⁻⁹ | 0.000000001 | 1 nm = 10⁻⁹ m (sirf naam) |

Class 9 mein **kilo, centi, milli, micro, mega** zyada kaam aayenge. Giga aur nano abhi sirf **naam** ke taur par jaan lo.

**Ek hi prefix kisi bhi unit ke saath lag sakta hai:**
- 1 km = 10³ m, 1 kg = 10³ g, 1 kL = 10³ L
- 1 mm = 10⁻³ m, 1 mg = 10⁻³ g, 1 ms = 10⁻³ s
- 1 µm = 10⁻⁶ m, 1 µs = 10⁻⁶ s

**Dhyan do:** milli ka symbol chhota **m** hai, aur mega ka symbol capital **M**. 1 mm (millimetre) aur 1 Mm (megametre) mein bahut bada farak hai: 1 mm = 10⁻³ m, jabki 1 Mm = 10⁶ m.

---

## Part D: Unit conversion ka step-by-step tareeka

Unit badalne ka ek sidha, galti-rahit tareeka hai: **fraction ke roop mein 1 se guna karo.**

Kyunki 1 m = 100 cm, to
- 1 m ÷ 100 cm = 1 aur
- 100 cm ÷ 1 m = 1

Kisi bhi number ko 1 se guna karo to wo badalta nahi, sirf uska **roop** badalta hai. Hum ye fraction aise chunte hain ki **jo unit hatana hai wo cut ho jaye** (upar-neeche barabar hone par cancel).

> **Step 1:** Jo diya hai uska unit aur jo chahiye uska unit likho.
> **Step 2:** Dono ke beech ka rishta likho (jaise 1 m = 100 cm).
> **Step 3:** Rishte ko fraction banao jisme purana unit **neeche** ho (taaki cancel ho jaye).
> **Step 4:** Guna karo, unit cancel karo, number nikalo.
> **Step 5:** Jaanch: kya answer ka size samajh mein aata hai? (jaise cm se m mein jaane par number **chhota** hona chahiye.)

### Example 1: 250 cm ko metre mein badlo

Rishta: 1 m = 100 cm. Hume cm hatana hai, to fraction (1 m ÷ 100 cm) lenge.

250 cm × (1 m ÷ 100 cm) = 250 ÷ 100 m = **2.5 m**

**Jaanch:** 2.5 m × 100 = 250 cm ✅. Aur cm se m mein aaye to number chhota hua, theek hai.

### Example 2: 4.5 km ko metre mein badlo

Rishta: 1 km = 1000 m = 10³ m.

4.5 km × (1000 m ÷ 1 km) = 4.5 × 1000 m = **4500 m**

**Jaanch:** 4500 m ÷ 1000 = 4.5 km ✅

### Example 3: 350 g ko kilogram mein badlo

SI mein mass ka unit kg hai, isliye gram ko kg mein badalna padta hai. Rishta: 1 kg = 1000 g.

350 g × (1 kg ÷ 1000 g) = 350 ÷ 1000 kg = **0.35 kg**

**Jaanch:** 0.35 kg × 1000 = 350 g ✅

### Example 4: 500 mg ko kilogram mein badlo

Ye do step ka sawaal hai. Pehle mg se g, phir g se kg.

Rishta 1: 1 mg = 10⁻³ g
Rishta 2: 1 g = 10⁻³ kg

500 mg = 500 × 10⁻³ g = 0.5 g
0.5 g = 0.5 × 10⁻³ kg = 0.0005 kg = **5 × 10⁻⁴ kg**

Seedha ek line mein: 500 mg × (10⁻³ g ÷ 1 mg) × (10⁻³ kg ÷ 1 g) = 500 × 10⁻⁶ kg = 5 × 10⁻⁴ kg

**Jaanch:** 5 × 10⁻⁴ kg × 1000 = 0.5 g, aur 0.5 g × 1000 = 500 mg ✅

### Example 5: 2.5 ghante ko second mein badlo

Rishta: 1 h = 60 min, 1 min = 60 s, to 1 h = 60 × 60 = 3600 s.

2.5 h × (3600 s ÷ 1 h) = 2.5 × 3600 s = **9000 s**

**Jaanch:** 9000 ÷ 3600 = 2.5 h ✅

### Example 6: Speed ko km/h se m/s mein, aur wapas

**(a) 72 km/h ko m/s mein badlo.**

Dono units badalne hain: km se m, aur h se s. Rishte: 1 km = 1000 m aur 1 h = 3600 s.

72 km/h = 72 × (1000 m) ÷ (3600 s) = 72000 ÷ 3600 m/s = **20 m/s**

Isse ek shortcut milta hai: 1 km/h = 1000 ÷ 3600 = 5/18 m/s. To **km/h ko m/s mein badalne ke liye 3.6 se bhaag karo.** (72 ÷ 3.6 = 20 ✅)

**(b) 15 m/s ko km/h mein badlo.**

Ulta karo: **3.6 se guna karo.** 15 × 3.6 = **54 km/h**

Poora likhein to: 15 m/s × (3600 s ÷ 1 h) × (1 km ÷ 1000 m) = 15 × 3600 ÷ 1000 km/h = 54 km/h.

**Jaanch:** 54 ÷ 3.6 = 15 m/s ✅. Ye bhi dekho ki 36 km/h = 36 ÷ 3.6 = 10 m/s, jo Part B ki table mein diya tha.

### Example 7: 400 cm² ko m² mein badlo (dhyan se, ye square hai)

Yahan galti sabse zyada hoti hai, isliye dhyan se. 1 m = 100 cm hai, lekin **area square hota hai**, to 1 m² = (100 cm)² = 100 cm × 100 cm = **10000 cm²** = 10⁴ cm².

400 cm² × (1 m² ÷ 10⁴ cm²) = 400 ÷ 10000 m² = **0.04 m²**

**Jaanch:** 0.04 m² × 10⁴ = 400 cm² ✅

Agar 100 se bhaag karte to 4 m² aata, jo bahut bada hai. Ek chhoti si 20 cm × 20 cm ki tile ka area 400 cm² hai, wo 4 m² (ek poore kamre ka kone) nahi ho sakti.

### Example 8: 5000 cm³ ko m³ mein badlo (ye cube hai)

Volume mein teen lambaiyan hain, isliye 1 m³ = (100 cm)³ = 100 × 100 × 100 cm³ = **1000000 cm³** = 10⁶ cm³.

5000 cm³ × (1 m³ ÷ 10⁶ cm³) = 5000 ÷ 1000000 m³ = **0.005 m³** = 5 × 10⁻³ m³

**Jaanch:** 0.005 × 10⁶ = 5000 cm³ ✅

### Example 9: 2 litre ko m³ mein badlo

Rishta: 1 L = 1000 cm³ (ek litre ka dabba lagbhag 10 cm × 10 cm × 10 cm ka hota hai, 10 × 10 × 10 = 1000 cm³).

Pehle cm³ mein: 2 L = 2 × 1000 cm³ = 2000 cm³.
Ab Example 8 wale rishte se: 2000 cm³ × (1 m³ ÷ 10⁶ cm³) = 2000 ÷ 1000000 m³ = **0.002 m³** = 2 × 10⁻³ m³

Isse ek aur rishta mila: **1 L = 10⁻³ m³**, jaisa Part B ki table mein likha tha. To 1 m³ = 1000 L.

**Jaanch:** 0.002 m³ × 1000 = 2 L ✅

### Example 10: Density ka unit: 1 g/cm³ ko kg/m³ mein badlo

Density ka unit g/cm³ aur kg/m³ dono dikhte hain. Yahan sirf **unit badalna** seekh rahe hain (density ka hisaab Topic 5 mein).

Hume 1 g/cm³ chahiye kg/m³ mein. Dono hisse badalte hain:
- Upar wala (g) → kg: 1 g = 10⁻³ kg
- Neeche wala (cm³) → m³: 1 cm³ = 10⁻⁶ m³

1 g/cm³ = (1 × 10⁻³ kg) ÷ (1 × 10⁻⁶ m³) = 10⁻³ ÷ 10⁻⁶ kg/m³ = 10³ kg/m³ = **1000 kg/m³**

**Jaanch:** Paani ki density 1 g/cm³ hoti hai. Ek m³ paani yaani 1000 L paani, aur ek litre paani ka mass lagbhag 1 kg hota hai, to 1000 L ka mass 1000 kg. Yaani 1000 kg/m³ ✅

**Yaad rakhne ka tareeka:** g/cm³ se kg/m³ mein jaana ho to **1000 se guna karo**, ulta karna ho to 1000 se bhaag karo.

---

## Part E: Bahut bade aur bahut chhote numbers: scientific notation

Physics mein kabhi-kabhi aise numbers aate hain jinhe poora likhna mushkil hai. Jaise:

- Prakash (light) ki speed: lagbhag 300000000 m/s
- Earth ki radius: lagbhag 6400000 m
- Kagaz ki motai: lagbhag 0.0001 m

Inme zero ginte-ginte galti ho jati hai. Iska hal: **scientific notation**, yaani number ko **a × 10ⁿ** ke roop mein likhna, jahan a 1 aur 10 ke beech ka number ho.

**Bade numbers ke liye** (n positive): decimal point ko left jitne jagah khiskao, utni power.
- 300000000 m/s: point 8 jagah left jata hai, to **3 × 10⁸ m/s**
- 6400000 m: point 6 jagah left jata hai, to **6.4 × 10⁶ m**

**Jaanch:** 6.4 × 10⁶ = 6.4 × 1000000 = 6400000 ✅

**Chhote numbers ke liye** (n negative): point ko right khiskao, utni negative power.
- 0.0001 m: point 4 jagah right jata hai, to **1 × 10⁻⁴ m** (ya sirf 10⁻⁴ m)

**Jaanch:** 10⁻⁴ = 1 ÷ 10000 = 0.0001 ✅

Ye prefixes se bhi jodta hai: 6.4 × 10⁶ m = 6400 km (kyunki 6.4 × 10⁶ m ÷ 10³ = 6.4 × 10³ km). Aur 10⁻⁴ m = 0.1 mm = 100 µm.

---

## Part F: Aarush ke robot ka hisaab

Ab wapas Ms. Menon aur Aarush ke robot par aate hain. Sheet par track length thi **127 cm**. Aarush ne programme mein **127** daala, jo programme ne **inches** samajh liya.

**Rishta:** 1 inch = 2.54 cm (ye exact definition hai).

**Robot ko asal mein kitna chalne ko kaha gaya?**

127 inch × (2.54 cm ÷ 1 inch) = 127 × 2.54 cm = **322.58 cm**

Yaani robot **322.58 cm** chalne ko tha, jabki track sirf **127 cm** ki thi.

**Robot kitna aage nikla?**

322.58 cm − 127 cm = **195.58 cm** (lagbhag 1.96 m)

**Programme mein sahi number kya hona chahiye tha?**

Programme inches maanta hai, to 127 cm ko inch mein badalna hoga:

127 cm × (1 inch ÷ 2.54 cm) = 127 ÷ 2.54 inch = **50 inch**

**Jaanch:** 50 inch × 2.54 = 127 cm ✅

Aarush ne programme mein 50 daala, robot ne ek dum line par aakar brake maara. Ms. Menon ne kaha, "Dekha? Number wahi tha, par unit badalte hi poori kahani badal gayi. Isiliye hum hamesha **number ke saath unit** likhte hain, aur jab bhi mauka ho, **SI unit** (yahan metre) use karte hain. Agar sheet aur programme dono mein 1.27 m likha hota, to ye galti hoti hi nahi."

Aarush ne ek sticker apne laptop par laga diya: **"Number nahi, number + unit."**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Area aur volume mein sirf length wala factor use karna**

400 cm² ko m² mein badalte waqt 100 se bhaag karna galat hai.
- Galat: 400 ÷ 100 = 4 m²
- Sahi: 1 m² = 100 × 100 = 10⁴ cm², to 400 ÷ 10⁴ = **0.04 m²**

Isi tarah volume ke liye 1 m³ = 10⁶ cm³ hota hai, 100 nahi. **Niyam:** length ka factor jitni baar guna hua, area mein 2 baar aur volume mein 3 baar lagta hai.

**Galti 2: Prefixes ko mix kar dena**

"1 km = 100 m" likhna galat hai (kilo = 10³, to 1 km = 1000 m). "1 mm = 0.01 m" bhi galat hai (milli = 10⁻³, to 1 mm = 0.001 m). 0.01 m to **centimetre** hai. Prefix aur uski power ki table baar-baar dekhne se ye galti jaati hai.

**Galti 3: Symbols galat likhna**

- "Kg" ya "KG" nahi, **kg** likho.
- "sec" nahi, **s** likho.
- Chhote m (metre ya milli) aur capital M (mega) mein farak karo. "5 M" likhne ka matlab 5 mega-kuch hota hai, 5 metre nahi.
- "5 kgs" nahi, **5 kg**.

**Galti 4: Gram ko mass ka SI unit samajh lena**

Mass ka SI unit **kilogram** hai, gram nahi. Jab bhi kisi formula mein ya answer mein SI mein mass dena ho, gram ko pehle kg mein badlo. Jaise 350 g ko 0.35 kg likhna.

**Galti 5: Unit likhna hi bhool jana**

"Speed = 20" likhna adhoora hai. "Speed = 20 m/s" likho. Har step mein unit likhne se wo cancel bhi hota hai aur galtiyan pakad mein aati hain.

**Galti 6: Conversion ki direction ulti kar dena**

Agar cm se m mein ja rahe ho aur answer pehle se **bada** aa gaya, to ruk jao: kuch gadbad hai. Chhote unit (cm) se bade unit (m) mein jaane par number **chhota** hota hai, ulta karne par bada.

---

## Quick Recap

- **SI system** duniya bhar mein maana jaane wala units ka system hai. Isme **7 base quantities** hain: length (m), mass (kg), time (s), electric current (A), temperature (K), amount of substance (mol), luminous intensity (cd). Class 9 mein mainly m, kg, s aur K.
- **Mass ka SI unit kilogram** hai, gram nahi.
- **Derived units** base units ko guna-bhaag karke bante hain: area m², volume m³, speed m/s, density kg/m³, force N = kg m/s² (sirf jhalak).
- Non-SI units: 1 min = 60 s, 1 h = 3600 s, 1 L = 1000 cm³ = 10⁻³ m³, 1 tonne = 1000 kg, 36 km/h = 10 m/s.
- **Prefixes:** giga 10⁹, mega 10⁶, kilo 10³, centi 10⁻², milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹.
- **10³ = 1000, 10⁻³ = 0.001.** Negative power ka matlab "1 bhaag power".
- **Conversion method:** jo unit hatana hai use neeche rakh kar, 1 ke barabar fraction se guna karo.
- **km/h ko m/s mein badalne ke liye 3.6 se bhaag karo; m/s ko km/h mein badalne ke liye 3.6 se guna karo.**
- **1 m² = 10⁴ cm², 1 m³ = 10⁶ cm³, 1 g/cm³ = 1000 kg/m³.**
- **Scientific notation:** a × 10ⁿ, jaise 6.4 × 10⁶ m, 10⁻⁴ m.
- 1 inch = 2.54 cm (exact). Robot wali galti: sirf number likha, unit mismatch hua.
- Galtiyan: area/volume mein length ka factor use karna, prefixes mix karna, Kg/sec/M likhna, gram ko SI maan lena.

---

## Practice Questions

1. Convert 3.6 km into metres and into centimetres.

2. Convert 7.5 kg into grams, and 450 g into kilograms.

3. A bus moves at 90 km/h. Express this speed in m/s. A cyclist moves at 8 m/s. Express this in km/h.

4. A cricket match break lasts 2 hours 15 minutes. Express it in seconds.

5. The area of a table top is 0.5 m². Express it in cm². A notebook cover has an area of 3000 cm². Express it in m².

6. A water tank holds 2 m³ of water. How many litres is this? A small bottle has a volume of 750 cm³. Express it in m³ using powers of ten.

7. The density of gold is 19.3 g/cm³. Express this in kg/m³. (Only convert the unit; no other calculation is needed.)

8. Write in scientific notation: (a) the distance from the Earth to the Moon, about 384000000 m; (b) the thickness of a human hair, about 0.00008 m. Also write 1.5 × 10⁸ km as an ordinary number.

9. A thin wire has a diameter of 50 µm. Express this in metres using scientific notation, and also in millimetres.

10. Aarush's robot instruction sheet says the track is 90 cm long. By mistake he enters 90 into a programme that reads the number as inches. (a) How far (in cm) will the robot be told to move? (b) By how much will it overshoot the line? (c) What number should he have entered, to two decimal places?

11. A student writes: "250 cm² = 2.5 m²". Find the mistake and give the correct answer.

12. State True or False:
   (a) The SI unit of mass is the gram.
   (b) 1 mm = 10⁻³ m.
   (c) 1 m³ = 1000 cm³.
   (d) Speed has the derived unit m/s.
   (e) "5 Kg" is the correct way to write five kilograms in SI.

### Answers

1. 1 km = 1000 m, to 3.6 km = 3.6 × 1000 = **3600 m**. 1 m = 100 cm, to 3600 m = 3600 × 100 = **360000 cm** (ya 3.6 × 10⁵ cm).
   Jaanch: 360000 ÷ 100 = 3600 m, aur 3600 ÷ 1000 = 3.6 km ✅

2. 1 kg = 1000 g, to 7.5 kg = 7.5 × 1000 = **7500 g**. 450 g = 450 ÷ 1000 = **0.45 kg**.
   Jaanch: 7500 ÷ 1000 = 7.5 ✅ aur 0.45 × 1000 = 450 ✅

3. 90 km/h ÷ 3.6 = **25 m/s**. Poora: 90 × 1000 m ÷ 3600 s = 90000 ÷ 3600 = 25 m/s.
   8 m/s × 3.6 = **28.8 km/h**.
   Jaanch: 25 × 3.6 = 90 ✅ aur 28.8 ÷ 3.6 = 8 ✅

4. 2 h = 2 × 3600 = 7200 s. 15 min = 15 × 60 = 900 s. Total = 7200 + 900 = **8100 s**.
   Jaanch: 8100 ÷ 3600 = 2.25 h = 2 h 15 min ✅

5. 1 m² = 10⁴ cm². 0.5 m² = 0.5 × 10⁴ = **5000 cm²**. 3000 cm² = 3000 ÷ 10⁴ = **0.3 m²**.
   Jaanch: 0.3 × 10⁴ = 3000 ✅ aur 5000 ÷ 10⁴ = 0.5 ✅

6. 1 m³ = 1000 L, to 2 m³ = 2 × 1000 = **2000 L**. 750 cm³ = 750 ÷ 10⁶ m³ = 0.00075 m³ = **7.5 × 10⁻⁴ m³**.
   Jaanch: 7.5 × 10⁻⁴ × 10⁶ = 7.5 × 10² = 750 ✅

7. 1 g/cm³ = 1000 kg/m³, to 19.3 g/cm³ = 19.3 × 1000 kg/m³ = **19300 kg/m³**.
   Jaanch: 19.3 g = 19.3 × 10⁻³ kg aur 1 cm³ = 10⁻⁶ m³, to 19.3 × 10⁻³ kg ÷ 10⁻⁶ m³ = 19.3 × 10³ kg/m³ = 19300 kg/m³ ✅

8. (a) 384000000 m: point 8 jagah left, **3.84 × 10⁸ m**. (b) 0.00008 m: point 5 jagah right, **8 × 10⁻⁵ m**.
   1.5 × 10⁸ km = 1.5 × 100000000 km = **150000000 km**.
   Jaanch: 3.84 × 100000000 = 384000000 ✅ aur 8 ÷ 100000 = 0.00008 ✅

9. 1 µm = 10⁻⁶ m, to 50 µm = 50 × 10⁻⁶ m = **5 × 10⁻⁵ m**. Millimetre mein: 1 mm = 10⁻³ m, to 5 × 10⁻⁵ m ÷ 10⁻³ = 5 × 10⁻² mm = **0.05 mm**.
   Jaanch: 0.05 mm = 0.05 × 10⁻³ m = 5 × 10⁻⁵ m ✅

10. (a) 90 inch × 2.54 cm/inch = **228.6 cm**.
    (b) Overshoot = 228.6 − 90 = **138.6 cm**.
    (c) 90 cm ÷ 2.54 cm/inch = 35.433... inch, to **35.43 inch**.
    Jaanch: 35.43 × 2.54 = 89.99 cm, jo lagbhag 90 cm hai (do decimal tak round karne ki wajah se thoda farak) ✅

11. Student ne 100 se bhaag kiya, jabki area ke liye 1 m² = 10⁴ cm² hota hai. Sahi: 250 ÷ 10⁴ = **0.025 m²**.
    Jaanch: 0.025 × 10⁴ = 250 cm² ✅

12. (a) **False** ❌. SI unit kilogram hai, gram nahi.
    (b) **True** ✅. Milli = 10⁻³.
    (c) **False** ❌. 1 m³ = 10⁶ cm³ (1000 cm³ to 1 litre hai).
    (d) **True** ✅. Speed = distance ÷ time, to m/s.
    (e) **False** ❌. Sahi hai "5 kg", chhote letters mein.

---

Unit aur prefix ek baar samajh aa gaye to koi bhi physics ka number dekh kar tension nahi hogi: bas apne aap se poochho, "mere paas kaun sa unit hai aur mujhe kaun sa chahiye?" Aur Aarush ki tarah, number ke saath hamesha unit likho.

**Aage kya?** Hume units to mil gaye. Ab dekhte hain ki length, mass aur time ko asal mein kaise naapte hain.
