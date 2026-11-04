# Chapter: Pressure aur Fluids (Part 7)

> **Class:** 9 | **Subject:** Physics
> **Ye file [pressure-and-fluids-part6.md](pressure-and-fluids-part6.md) se aage chalti hai.** (Chapter ki shuruaat [pressure-and-fluids.md](pressure-and-fluids.md) se hoti hai.)
> **Topics covered in this file:**
> 7. Floatation: Kaun Tairega, Kaun Doobega?

---

# Topic 7: Floatation: Kaun Tairega, Kaun Doobega?

Pichle topic mein humne Archimedes' principle seekha: kisi bhi fluid mein dooba hua (poora ya aadha) body upar ki taraf ek upthrust mehsoos karta hai, aur ye upthrust us **displaced fluid ke weight** ke barabar hota hai. Usi se hum relative density bhi nikaal paaye. Ab sawaal ye hai ki is principle se ye kaise tay hota hai ki koi cheez **tairegi, doobegi ya beech mein ruk jaayegi**?

Ye is chapter ka aakhri topic hai, to end mein poore chapter ka wrap-up bhi hoga. Is poore topic mein hum **g = 10 m/s²** lenge (hisaab aasaan rahe), aur paani ki density **1000 kg/m³**.

---

## Shipyard mein Yug ka sawaal

Shipyard mein ek bada paani ka tank hai, jahan chhote model ships ki testing hoti hai. Engineer Ms. Ranganathan kaam kar rahi hain, aur unka bhatija Yug aaj unke saath aaya hai.

Yug ke haath mein do cheezein hain: ek chhoti si loha ki keel (iron nail) aur loha ka bana ek bada khilone wala ship. Wo pehle nail tank mein chhodta hai: **tap!** Nail seedha neeche chala jaata hai. Phir wo ship paani par rakhta hai. Ship araam se tairta rehta hai, aur usme to loha bhi nail se kai guna zyada hai!

"Aunty, ye kya jaadu hai?" Yug sar kharochta hai. "Dono loha ke hain. Chhota sa nail doob gaya, aur itna bhaari ship tair raha hai. Ye to ulta hai!"

Ms. Ranganathan muskurati hain. "Jaadu nahi hai, Yug. Bas ek cheez ko dhyan se dekhna hai: loha **akela** nahi, ship ka **poora shape** (andar ki hawa ke saath) paani ko kitna hataata hai. Chalo, Archimedes ke saath hisaab lagate hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Floatation (tairna)** | Cheez ka fluid ki surface par tikna, aur uska kuch hissa fluid mein dooba hona | Paani par lakdi ka tukda |
| **Law of floatation** | Tairti cheez apne weight ke barabar weight ka fluid hatati (displace karti) hai | 50 kg ki lakdi 50 kg paani hatati hai |
| **Equilibrium (santulan)** | Jab neeche ka force (weight) aur upar ka force (upthrust) barabar ho, to cheez na upar jaati hai na neeche | Paani par shaant tairti naav |
| **Average density** | Poore body ka total mass ÷ total volume (andar ki khaali jagah ya hawa bhi gin kar) | Khokhle ship ki average density |
| **Immersed volume (V_im)** | Body ka wo hissa jo fluid ke andar hai | Aadhi dooba hui lakdi |
| **Fraction immersed** | V_im ÷ total volume: kitna hissa dooba hai | Ice ka lagbhag 0.9 |
| **Ballast tank** | Submarine ke andar ka tank jisme paani bharkar ya khaali karke uska weight badla jaata hai | Submarine ko neeche ya upar karna |
| **Plimsoll line (load line)** | Ship ke side par bani line jo batati hai ki ship kitna safely dooba sakta hai | Cargo ship ke paas ki nishaan |
| **Hydrometer** | Ek tairti glass ki nali jo liquid ki density bataati hai | Lactometer, battery tester |

---

## Part A: Tairne ki shart

### Weight neeche, upthrust upar

Fluid mein rakhi cheez par do force lagte hain:

- **Weight (W)** neeche ki taraf, W = mg
- **Upthrust (U)** upar ki taraf, U = ρ_fluid × V_im × g (Topic 5 aur 6)

```
        ^  U (upthrust, upar)
        │
   _____│______
  │            │   <- lakdi ka block
~~│~~~~~~~~~~~~│~~~~~~~~~~~~  paani ki surface
  │____________│
        │
        v  W (weight, neeche)
```

> **Figure 7.1** – Tairte block par do force: weight neeche, upthrust upar. Tairne par dono barabar hote hain, to block shaant (equilibrium mein) rehta hai.

### Teen sambhavnayein

- Agar **U < W**: neeche ka force bada, cheez **doobti** hai.
- Agar **U > W**: upar ka force bada, cheez upar uthti hai (aur surface par aakar tair jaati hai).
- Agar **U = W**: dono balanced, cheez **tairti hai** (ya poori dooba ho to kahin bhi ruk jaati hai).

Ek zaroori baat: jab cheez surface par **shaant tair rahi hai**, tab upthrust **barabar** hai weight ke, na zyada, na kam. Jab cheez upar uth rahi thi, tab upthrust zyada tha. Jaise hi wo surface par aayi, dooba hissa kam hua, upthrust kam hua, aur wo weight ke barabar aakar ruk gaya.

### Law of floatation

Tairne par U = W. Aur Archimedes ke hisaab se U = displaced fluid ka weight. Isliye:

**Tairti cheez apne weight ke barabar weight ka fluid displace karti hai.** Ye hai **law of floatation**.

Matlab 50 kg ki lakdi ka tukda tairega to wo 50 kg paani hataayega (aur U = 50 kg × 10 m/s² = 500 N).

---

## Part B: Density se faisla

Poori tarah dooba hua solid body lo, jiski total volume V hai.

- Uska weight: W = ρ_body × V × g
- Poori dooba hone par upthrust: U = ρ_fluid × V × g

Dono mein V aur g common hain. To sirf **density** ka farq bachta hai:

| Condition | W aur U ki tulna | Kya hota hai |
|---|---|---|
| ρ_body **>** ρ_fluid | W > U | **Doobta hai** (sink) |
| ρ_body **=** ρ_fluid | W = U | **Beech mein kahin bhi ruk jaata hai** (suspend) |
| ρ_body **<** ρ_fluid | W < U (jab poora dooba ho) | **Upar uthta hai aur tairta hai** (float) |

Ye bahut kaam ki baat hai: **hum alag alag cheezon ke weight ya size ki tulna nahi karte, sirf density ki karte hain.** Isiliye bhaari kankar doobta hai aur halka sa kaath ka bada tukda tairta hai, kyunki asli baat "kitna bhaari" nahi, "kitni density" hai.

### Example 1: Float ya sink?

Ek block ka mass 4.5 kg aur volume 0.005 m³ hai. Ye paani (1000 kg/m³) aur tel (800 kg/m³) mein kya karega?

ρ_block = 4.5 kg ÷ 0.005 m³ = **900 kg/m³**

- Paani mein: 900 < 1000, to **tairega**.
- Tel mein: 900 > 800, to **doobega**.

Jaanch (tel mein force se): W = 4.5 kg × 10 m/s² = 45 N. Poora dooba hone par U = 800 kg/m³ × 0.005 m³ × 10 m/s² = 40 N. U (40 N) < W (45 N), to doobta hai ✅. Paani mein poora dooba ho to U = 1000 kg/m³ × 0.005 m³ × 10 m/s² = 50 N > 45 N, to upar uthta hai ✅

---

## Part C: Kitna hissa dooba rehta hai?

Jo cheez tairti hai wo poori nahi, **aanshik roop se (partly) dooba hoti hai**. Kitna hissa dooba rahega? Condition W = U se nikaalte hain.

Total volume V, dooba hua volume V_im:

W = ρ_body × V × g
U = ρ_fluid × V_im × g

W = U lagane par:

ρ_body × V × g = ρ_fluid × V_im × g

g dono taraf se kat gaya:

**V_im ÷ V = ρ_body ÷ ρ_fluid**

Yaani **fraction immersed = ρ_body ÷ ρ_fluid.**

Dhyan do: isme **size ya mass aaya hi nahi**, sirf density ka ratio aaya. Isliye 1 cm³ aur 1 m³ ki lakdi ka wahi fraction dooba rehta hai.

### Example 2: Lakdi, ice aur cork

Paani mein (1000 kg/m³):

- Lakdi (600 kg/m³): 600 ÷ 1000 = **0.6**, yaani 60% dooba.
- Ice (lagbhag 900 kg/m³): 900 ÷ 1000 = **0.9**, yaani lagbhag 90% paani ke neeche. Isiliye iceberg ka sirf thoda sa hissa (lagbhag 10%) upar dikhta hai.
- Cork (240 kg/m³): 240 ÷ 1000 = **0.24**, yaani 24% dooba, 76% upar.

Jaanch (lakdi, V = 1 m³ maano): W = 600 kg × 10 m/s² = 6000 N. V_im = 0.6 m³, U = 1000 kg/m³ × 0.6 m³ × 10 m/s² = 6000 N, W = U ✅

### Example 3: Floating cheez ka mass, displaced volume se

Ek lakdi ka log paani mein tair raha hai aur wo 0.05 m³ paani displace karta hai. Uska mass kitna hai?

Displaced paani ka mass = 1000 kg/m³ × 0.05 m³ = 50 kg
Law of floatation: log ka weight = displaced paani ka weight, to log ka mass = **50 kg**.

Jaanch: Upthrust = 1000 kg/m³ × 10 m/s² × 0.05 m³ = 500 N. Log ka weight = 50 kg × 10 m/s² = 500 N. U = W ✅

### Example 4: Cuboid block kitna doobega?

Ek block 20 cm × 10 cm × 10 cm ka hai, density 800 kg/m³. Ye paani mein is tarah tairta hai ki **20 cm × 10 cm wali side neeche** ho (yaani khada height 10 cm). Kitna gehra dooba rahega?

Fraction immersed = 800 ÷ 1000 = 0.8
Dooba hua depth = 0.8 × 10 cm = **8 cm**

Jaanch (force se): V = 0.2 × 0.1 × 0.1 = 0.002 m³, m = 800 × 0.002 = 1.6 kg, W = 1.6 kg × 10 m/s² = 16 N. Neeche ka area = 0.2 m × 0.1 m = 0.02 m². Agar depth 0.08 m ho, V_im = 0.02 × 0.08 = 0.0016 m³, U = 1000 kg/m³ × 10 m/s² × 0.0016 m³ = 16 N. U = W ✅

(Agar wahi block 20 cm wali height khada rakhe, to depth 0.8 × 20 = 16 cm hogi: fraction wahi, par depth alag. Fraction size par nahi, density par nirbhar hai.)

---

## Part D: Denser fluid mein cheez upar tairti hai

Formula: fraction immersed = ρ_body ÷ ρ_fluid. Agar ρ_fluid **bada** ho, to fraction **chhota** hota hai: cheez **kam dooba**, yaani **zyada upar** tairti hai.

| Fluid | Density (lagbhag) | 900 kg/m³ ki ice ka fraction dooba |
|---|---|---|
| Fresh (meetha) paani | 1000 kg/m³ | 900 ÷ 1000 = 0.90 |
| Samundar ka paani | 1030 kg/m³ | 900 ÷ 1030 = 0.874 (lagbhag 0.87) |

Isiliye samundar mein tairna **nadi ya pool se aasaan** hai. Insaan ki average density lagbhag 985 kg/m³ maan lo (phephdon mein hawa bhari ho tab, lagbhag value):

- Meethe paani mein: 985 ÷ 1000 = 0.985, yaani 98.5% dooba, sirf 1.5% bahar.
- Samundar mein: 985 ÷ 1030 = 0.956, yaani 95.6% dooba, lagbhag 4.4% bahar.

Dead Sea ka paani bahut namkeen hai, uski density lagbhag 1240 kg/m³ hoti hai (ye ek lagbhag value hai). Wahan 985 ÷ 1240 = 0.79, to lagbhag 21% hissa bahar rehta hai. Isiliye log wahan aaraam se kitaab padhte hue tairte dikhte hain. Ye koi jaadu nahi: sirf paani ki zyada density.

---

## Part E: Kahani ka hisaab: nail vs ship

**Nail:** loha ki density lagbhag 7800 kg/m³ hai. Nail poora thos loha hai, to uski average density bhi 7800 kg/m³ > 1000 kg/m³. Isliye wo doobta hai.

**Ship:** ship **thos loha nahi** hota, wo khokhla hota hai: loha ki patli chaadar se bana ek bada dabba, jiske andar hawa bhari hai. Ship ke liye hume **average density** dekhni hai:

**Average density = poore ship ka total mass ÷ poore ship ka total volume (andar ki hawa wali jagah milake)**

Hawa ka mass lagbhag zero hai, par uski jagah (volume) ship ke paani ko hataane ke kaam aati hai. Isse total volume bahut bada ho jaata hai, aur average density 1000 se kam aa jaati hai. Tab ship tairta hai.

### Example 5: Yug ka khilona ship

Yug ke khilone ship mein loha 0.6 kg hai, aur uska poora volume (andar ki hawa ke saath) 0.002 m³ (2000 cm³) hai. Nail ka mass 7.8 g aur volume 1 cm³ hai.

Nail: 7.8 g ÷ 1 cm³ = 7.8 g/cm³ = 7800 kg/m³ (1 g/cm³ = 1000 kg/m³). 7800 > 1000, to **doobta hai**.
Ship: 0.6 kg ÷ 0.002 m³ = **300 kg/m³** < 1000, to **tairta hai**.

Kitna dooba hoga? Fraction = 300 ÷ 1000 = 0.3. V_im = 0.3 × 0.002 m³ = 0.0006 m³ (600 cm³).

Jaanch: U = 1000 kg/m³ × 10 m/s² × 0.0006 m³ = 6 N, W = 0.6 kg × 10 m/s² = 6 N ✅

Dhyan do: wohi loha hai (0.6 kg loha ka thos tukda sirf 0.6 ÷ 7800 = 0.0000769 m³ ya lagbhag 77 cm³ hota, aur wo doob jaata). Par use khokhle shape mein fula dene se 2000 cm³ paani hataata hai. Ship loha ki wajah se nahi, **shape ki wajah se** tairta hai.

### Example 6: Khokhli iron boat

Ek khokhli iron boat ka mass 800 kg hai aur hull ka total volume 2 m³ hai.

Average density = 800 kg ÷ 2 m³ = **400 kg/m³** < 1000, to tairti hai.
Fraction immersed = 400 ÷ 1000 = 0.4, yaani V_im = 0.4 × 2 m³ = 0.8 m³ (40%).

**Extra load**: jab tak average density 1000 kg/m³ tak na pahunche, boat tair sakti hai. Us waqt total mass = 1000 kg/m³ × 2 m³ = 2000 kg.
Extra load = 2000 kg − 800 kg = **1200 kg**.

Us waqt boat poori tarah dooba hogi (fraction = 1.0), yaani paani ki surface boat ke kinare ke barabar.

Jaanch: Weight = 2000 kg × 10 m/s² = 20,000 N. Poora dooba hone par U = 1000 kg/m³ × 10 m/s² × 2 m³ = 20,000 N. W = U ✅

### Example 7: Safe load

Isi boat par 600 kg load rakha jaaye to?

Total mass = 800 kg + 600 kg = 1400 kg
Average density = 1400 ÷ 2 = 700 kg/m³ < 1000, to tairti hai.
Fraction immersed = 700 ÷ 1000 = 0.7, yaani V_im = 0.7 × 2 = 1.4 m³ (70%).

Jaanch: U = 1000 kg/m³ × 10 m/s² × 1.4 m³ = 14,000 N, W = 1400 kg × 10 m/s² = 14,000 N ✅

Boat 1200 kg tak ka load maximum le sakti hai, par asal mein hum use kinare tak kabhi nahi bharte: lehr se paani andar aa sakta hai. Ships ke liye isi safe limit ko Plimsoll line se dikhaya jaata hai (Part F).

### Example 8: Submarine ka sirf hisaab

Ek chhoti submarine ka mass 90,000 kg aur total volume 100 m³ hai.

Average density = 90,000 ÷ 100 = 900 kg/m³ < 1000, to surface par tairti hai (90% dooba).
Poori dooba hone par U = 1000 kg/m³ × 10 m/s² × 100 m³ = 1,000,000 N. Weight = 90,000 kg × 10 m/s² = 900,000 N. U > W.

Ab ballast tanks mein 15,000 kg paani bhar do:
Total mass = 90,000 + 15,000 = 105,000 kg
Average density = 105,000 ÷ 100 = **1050 kg/m³** > 1000, to **doobegi**.

Agar sirf 10,000 kg paani bharte: total mass = 100,000 kg, density = 100,000 ÷ 100 = 1000 kg/m³, ye **suspend** hoga (beech paani mein ruk jaayegi) ✅

---

## Part F: Aas-paas ke upyog (applications)

### Ships aur boats

Ship ka shape khokhla aur bada hota hai, taaki wo bahut saara paani hataaye aur average density 1000 kg/m³ se kam rahe. Zyada cargo bharne par uska weight badhta hai, aur wo thoda aur gehra doobta hai.

### Submarine

Submarine ke andar **ballast tanks** hote hain. Neeche jaane ke liye inme **samundar ka paani bharte hain**: weight badhta hai, average density badhti hai, submarine doobti hai. Upar aane ke liye **compressed air** tanks mein bharkar paani bahar nikaal dete hain: weight kam, average density kam, submarine upar uthti hai. Example 8 isi ka numeric version tha.

### Plimsoll line (load line)

Cargo ship ke side par ek nishaan hota hai jise **Plimsoll line** kehte hain. Isse pata chalta hai ki ship kitna dooba sakta hai. Alag alag lines hoti hain kyunki **paani ki density alag hoti hai**: namkeen paani (salt water) mein ship thoda upar tairta hai, meethe paani (fresh water) mein zyada neeche, aur garam (tropical) paani mein bhi thoda aur neeche (garam paani halka hota hai). Isliye wahi ship meethe paani ki nadi mein zyada gehra dooba dikhega.

### Hydrometer aur lactometer

**Hydrometer** ek lambi, band glass ki nali hai jiske neeche ke hisse mein wazan (chhote chhote lead pellets) hota hai, taaki wo seedhi khadi tairti rahe. Is par scale bani hoti hai. Nali ka weight fixed hai, to U = W har liquid mein same rehna chahiye. Isliye:

ρ_liquid × V_im × g = W, yaani **V_im ∝ 1 ÷ ρ_liquid**.

Halke liquid mein nali **zyada** doobegi, aur bhaari liquid mein **kam**. Is idea se hydrometer se density padh lete hain. Doodh ki density ke liye **lactometer** (milk ki shuddhata check karne wala hydrometer), battery ke acid ki density ke liye, aur sugar ke ghol (syrup) ki density ke liye alag alag hydrometer use hote hain.

### Example 9: Hydrometer

Ek hydrometer ki nali ka cross-section same hai. Paani mein wo 8 cm dooba hai. Density 800 kg/m³ wale liquid mein kitni doobegi?

V_im ∝ length immersed (kyunki cross-section same), aur weight fixed:
1000 kg/m³ × 8 cm = 800 kg/m³ × L
L = (1000 × 8) ÷ 800 = **10 cm**

Halka liquid hai, to nali zyada dooba (10 cm > 8 cm) ✅
Jaanch: 1000 × 8 = 8000 aur 800 × 10 = 8000 ✅
(Density 1250 kg/m³ wale liquid mein: L = 8000 ÷ 1250 = 6.4 cm, kam, kyunki liquid bhaari hai.)

### Hawa mein tairna: balloons

Hawa bhi ek fluid hai, aur uski density lagbhag **1.2 kg/m³** hai. Isliye hawa mein bhi cheez par upthrust lagta hai: U = ρ_hawa × V × g. Koi cheez hawa mein tab uthegi (float karegi) jab uski **average density hawa se kam** ho. Helium balloon aur hot-air balloon yahi karte hain: helium (ya garam hawa) bahar ki hawa se halki hoti hai, to poora balloon (gas + kapda + load) ki average density hawa se kam ho jaati hai.

### Example 10: Helium balloon ki uthaan

10 m³ ke helium balloon ka total mass (gas + kapda + basket) 5 kg hai. Hawa ki density 1.2 kg/m³ hai. Balloon par net upward force?

Upthrust = ρ_hawa × V × g = 1.2 kg/m³ × 10 m³ × 10 m/s² = **120 N** (upar)
Weight = 5 kg × 10 m/s² = **50 N** (neeche)
Net upward force = 120 N − 50 N = **70 N** (upar)

Jaanch: average density = 5 kg ÷ 10 m³ = 0.5 kg/m³ < 1.2 kg/m³, to balloon upar uthega ✅ (70 N > 0)

### Machhli, life jacket

- **Machhli** ke andar **swim bladder** (hawa ki thaili) hota hai. Wo usse phula-pichka kar apni average density paani ke barabar rakhti hai, aur bina mehnat ke kisi bhi gehrai par ruk sakti hai.
- **Life jacket** mein halka foam ya hawa hoti hai. Ye insaan ke saath total volume bahut badha deta hai par mass lagbhag nahi badhata, to average density 1000 se kam ho jaati hai, aur insaan tairta rehta hai.

### Steel ka container: bhara vs khaali

### Example 11: Khaali aur bhara drum

Ek khokhla steel drum ka mass 20 kg aur volume 0.1 m³ (100 litre) hai.

**Khaali:** average density = 20 ÷ 0.1 = **200 kg/m³** < 1000, to tairta hai (0.2 dooba).
**Paani se poora bhara:** total mass = 20 + 100 (paani 1000 × 0.1 = 100 kg) = 120 kg. Average density = 120 ÷ 0.1 = **1200 kg/m³** > 1000, to **doob jaata hai**.

Jaanch: Poora dooba hone par U = 1000 kg/m³ × 10 m/s² × 0.1 m³ = 1000 N, bhare drum ka weight = 120 kg × 10 m/s² = 1200 N. W > U ✅ (doobta hai). Khaali ka weight 200 N < 1000 N, to upar uthta hai ✅

Ye wahi baat hai: andar hawa ho to drum tairta hai, aur hawa ki jagah paani bharne par average density badhti hai aur drum doob jaata hai.

---

## Part G: Doobna, tairna, ruk jaana: ek nazar

| Sthiti | Average density ki tulna | Weight aur upthrust (poora dooba ho to) | Kya hota hai |
|---|---|---|---|
| Doobna (sink) | ρ_body > ρ_fluid | U < W | Neeche jaata hai |
| Suspend | ρ_body = ρ_fluid | U = W | Kahin bhi ruk jaata hai |
| Float | ρ_body < ρ_fluid | U > W (poore dooba hone par), aur tairne par U = W | Surface par tairta hai, fraction = ρ_body ÷ ρ_fluid dooba |

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Bhaari cheez hamesha doobti hai"**
Jahaz ka mass lakhon kg hota hai, phir bhi tairta hai, jabki chhota sa kankar doob jaata hai. Weight nahi, **average density** matter karti hai.

**Galti 2: "Ship sirf hawa ki wajah se tairta hai"**
Hawa ka kaam bas itna hai ki poora body (loha + andar ki hawa) ka volume bada ho. **Poore body ki average density** (hawa ki jagah milake) 1000 se kam honi chahiye. Example 5 mein 0.6 kg loha 2000 cm³ ka volume ghera to average density 300 aayi.

**Galti 3: "Tairti cheez par upthrust uske weight se zyada hota hai"**
Shaant tairti cheez par upthrust **bilkul barabar** hota hai weight ke (U = W, Part A). Example 3 mein dono 500 N the.

**Galti 4: "Volume immersed aur total volume ek hi hain"**
Example 4 mein block ka total volume 0.002 m³ hai, par dooba hua volume sirf 0.0016 m³. U = ρ_fluid × V_im × g mein hamesha **dooba hua volume** lagta hai.

**Galti 5: "Bade object ka zyada hissa dooba hoga"**
Fraction = ρ_body ÷ ρ_fluid. Bade ya chhote, 600 kg/m³ ki lakdi hamesha 60% dooba hogi paani mein.

---

## Quick Recap

- Tairne ki shart: **upthrust = weight** (equilibrium). Tairti cheez apne weight ke barabar weight ka fluid displace karti hai (law of floatation).
- Density se: ρ_body > ρ_fluid: doobta hai; ρ_body = ρ_fluid: suspend; ρ_body < ρ_fluid: tairta hai.
- Tairti cheez ka **fraction immersed = ρ_body ÷ ρ_fluid** (ice paani mein lagbhag 0.9, lakdi 0.6, cork 0.24). Ye size par nirbhar nahi karta.
- Denser fluid mein cheez upar tairti hai (samundar mein tairna aasaan, Dead Sea mein aur bhi).
- Ship khokhla hota hai, to uski **average density** (andar ki hawa ke saath) 1000 se kam hoti hai. Nail thos loha hai (7800), to doobta hai.
- Upyog: ships, submarines (ballast tanks paani se bhare aur compressed air se khaali), Plimsoll line, hydrometer aur lactometer (halke liquid mein zyada doobte hain), balloons (hawa ki density lagbhag 1.2 kg/m³), machhli ka swim bladder, life jackets.
- Is topic mein g = 10 m/s² aur paani ki density 1000 kg/m³ liye gaye.

---

## Practice Questions

(Take g = 10 m/s² and density of water = 1000 kg/m³ unless stated.)

1. A block has a mass of 2.4 kg and a volume of 0.003 m³. State whether it floats, sinks or stays suspended in (a) water, (b) a liquid of density 800 kg/m³, (c) a liquid of density 1200 kg/m³.

2. Ice has a density of about 900 kg/m³. What fraction of an iceberg is under sea water of density 1030 kg/m³? Give the answer to two decimal places.

3. A wooden log floats in water and displaces 0.3 m³ of water. Find the mass and the weight of the log.

4. A wooden block of density 500 kg/m³ and volume 0.02 m³ floats in water. Find the volume immersed, the upthrust on it and its mass.

5. A hollow boat has a mass of 500 kg and the volume of its hull is 1.5 m³. Find its average density, and the maximum extra load it can carry before it is just fully immersed.

6. A helium balloon of volume 20 m³ has a total mass of 8 kg. Taking the density of air as 1.2 kg/m³, find the upthrust, the weight and the net upward force.

7. A block of density 600 kg/m³ is 15 cm tall and floats upright in water. Find the depth to which it is immersed.

8. A hydrometer tube has the same cross-section along its length. It floats with 6 cm of its length immersed in water. How much will be immersed in a liquid of density 1200 kg/m³? Is the liquid lighter or denser than water?

9. State whether each statement is true or false, with a reason.
   (a) A heavy object always sinks in water.
   (b) A floating object feels an upthrust larger than its weight.
   (c) A floating object is more immersed in sea water than in river water.

10. A steel ball sinks but a steel ship floats. Explain with average density. Also, why does a lactometer sink more in milk that has been diluted with water?

### Answers

1. ρ = 2.4 kg ÷ 0.003 m³ = **800 kg/m³**.
   (a) 800 < 1000: **floats** in water.
   (b) 800 = 800: **stays suspended** anywhere in that liquid.
   (c) 800 < 1200: **floats** in that liquid.
   Jaanch (b): W = 2.4 kg × 10 m/s² = 24 N, U (poora dooba) = 800 kg/m³ × 0.003 m³ × 10 m/s² = 24 N, W = U ✅

2. Fraction = 900 ÷ 1030 = 0.8737... ≈ **0.87**, yaani lagbhag 87% dooba.
   Jaanch: 0.87 × 1030 = 896 ≈ 900 ✅

3. Displaced paani ka mass = 1000 × 0.3 = 300 kg. Law of floatation se log ka mass = **300 kg**, weight = 300 kg × 10 m/s² = **3000 N**.
   Jaanch: U = 1000 kg/m³ × 10 m/s² × 0.3 m³ = 3000 N = W ✅

4. Fraction = 500 ÷ 1000 = 0.5, to V_im = 0.5 × 0.02 = **0.01 m³**. U = 1000 kg/m³ × 10 m/s² × 0.01 m³ = **100 N**. Mass = 500 × 0.02 = **10 kg**.
   Jaanch: W = 10 kg × 10 m/s² = 100 N = U ✅

5. Average density = 500 ÷ 1.5 = 333.3 ≈ **333 kg/m³**.
   Poora dooba hone par total mass = 1000 × 1.5 = 1500 kg, to extra load = 1500 − 500 = **1000 kg**.
   Jaanch: W = 1500 kg × 10 m/s² = 15,000 N, U = 1000 kg/m³ × 10 m/s² × 1.5 m³ = 15,000 N ✅

6. Upthrust = 1.2 kg/m³ × 20 m³ × 10 m/s² = **240 N**. Weight = 8 kg × 10 m/s² = **80 N**. Net = 240 − 80 = **160 N** upar.
   Jaanch: average density = 8 ÷ 20 = 0.4 kg/m³ < 1.2 ✅

7. Fraction = 600 ÷ 1000 = 0.6, depth = 0.6 × 15 cm = **9 cm**.
   Jaanch: area A ho to W = 600 × A × 0.15 × 10 = 900A N, U = 1000 × A × 0.09 × 10 = 900A N ✅

8. 1000 × 6 = 1200 × L, to L = 6000 ÷ 1200 = **5 cm**. Kam doobi, to liquid paani se **bhaari (denser)** hai.
   Jaanch: 1000 × 6 = 6000 aur 1200 × 5 = 6000 ✅

9. (a) **False** ❌. Density matter karti hai: jahaz bhaari hai par tairta hai.
   (b) **False** ❌. Tairne par U = W exactly.
   (c) **False** ❌. Sea water denser hai, to cheez **kam** dooba hoti hai (zyada upar tairti hai).

10. Steel ball thos hai, average density lagbhag 7800 > 1000, to doobti hai. Steel ship khokhla hota hai, to steel + andar ki hawa milake average density 1000 se kam hoti hai, aur wo tairta hai.
    Paani milane se doodh halka ho jaata hai (density kam), aur hydrometer/lactometer halke liquid mein zyada doobta hai (V_im ∝ 1 ÷ ρ_liquid).

---

Yug ne ab samjha ki nail aur ship dono loha ke hain, par kaam alag hai: ek thos hai, to uski density 7800 hai; doosra khokhla hai, to poore shape ki density 1000 se kam hai. Aaj ke baad kisi bhi cheez ke tairne ya doobne ka jawab aap density se de sakte ho. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Pressure aur Fluids

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Thrust aur Pressure | Thrust (surface par lagta perpendicular force) aur pressure P = F ÷ A, unit pascal (Pa = N/m²) | Area kam to pressure zyada: keel nukili kyun hoti hai |
| 2. Pressure in Liquids | Liquid ke andar pressure P = h ρ g; gehrai badhne par badhta hai, har disha mein barabar | Pressure gehrai aur density par nirbhar, container ke shape par nahi |
| 3. Pascal's Law aur Hydraulic Machines | Band liquid par lagaya pressure har jagah barabar pahunchta hai; hydraulic press, lift aur brakes | F₂ = F₁ × A ÷ a: chhote force se bada force |
| 4. Atmospheric Pressure | Hawa ka pressure; 1 atm = 1.013 × 10⁵ Pa; barometer mein 76 cm Hg | Hawa ka pressure bahut bada hai, par sharir ke andar ka pressure use balance karta hai, isliye mehsoos nahi hota; straw aur suction hook mein hawa **dhakelti** hai |
| 5. Upthrust (Buoyancy) | Fluid mein dooba body upar ka force mehsoos karta hai: U = ρ g V; apparent weight = weight − upthrust; doobna, tairna, rukna weight aur upthrust ki tulna se | Fluid mein weight kam "lagta" hai |
| 6. Archimedes' Principle aur Relative Density | Upthrust = displaced fluid ka weight; RD = weight in air ÷ loss of weight in water; liquid ki RD = loss in liquid ÷ loss in water; hydrometer aur lactometer ka naam | RD ka koi unit nahi hota |
| 7. Floatation | Tairne par U = W; law of floatation; density se faisla; fraction immersed = ρ_body ÷ ρ_fluid; ships, submarines, Plimsoll line, hydrometer, balloons | Weight nahi, **average density** matter karti hai |

### Key definitions aur units

| Quantity | Matlab | SI unit |
|---|---|---|
| Thrust | Surface par perpendicular lagne wala total force | newton (N) |
| Pressure | Force ÷ area | pascal (Pa = N/m²) |
| Pascal | 1 N ka force 1 m² par barabar failne se bana pressure | Pa |
| Atmosphere (atm) | Samundar ki satah par hawa ka pressure; 1 atm = 1.013 × 10⁵ Pa | Pa (atm ek practical unit hai, SI nahi) |
| Upthrust | Fluid ka upar ki taraf lagne wala force | newton (N) |
| Apparent weight | Fluid mein weight − upthrust | newton (N) |
| Relative density | Density of substance ÷ density of water (ya weight in air ÷ loss of weight in water) | koi unit nahi |
| Average density | Poore body ka total mass ÷ total volume (khaali jagah ke saath) | kg/m³ |

### Formulae

| Kya | Formula |
|---|---|
| Pressure | P = F ÷ A |
| Liquid pressure | P = h ρ g |
| Hydraulic machine | F₂ ÷ A = F₁ ÷ a, yaani F₂ = F₁ × A ÷ a |
| Atmospheric pressure | 1 atm = 1.013 × 10⁵ Pa = 76 cm Hg |
| Upthrust | U = ρ g V (V = dooba hua volume) |
| Apparent weight | weight − upthrust |
| Relative density | RD = ρ_substance ÷ ρ_water = weight in air ÷ loss of weight in water |
| Liquid ki RD | RD = loss in liquid ÷ loss in water (wahi doobne wala solid) |
| Floating condition | Upthrust = weight |
| Fraction immersed | V_im ÷ V = ρ_body ÷ ρ_fluid |

### Doobna, suspend aur tairna

| Sthiti | Density ki tulna | Weight aur upthrust | Kya hota hai |
|---|---|---|---|
| Sink | ρ_body > ρ_fluid | W > U | Neeche jaata hai |
| Suspend | ρ_body = ρ_fluid | W = U | Beech mein ruk jaata hai |
| Float | ρ_body < ρ_fluid | Tairne par U = W | Surface par tairta hai, partly dooba |

---

Agla chapter (Work, Energy aur Power) is baat par hai ki force kya **kar** sakta hai: yaani kaam aur takat.
