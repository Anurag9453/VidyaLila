# Chapter: Vibrations and Resonance (Part 6)

> **Class:** 10 | **Subject:** Physics
> **Ye file [vibrations-and-resonance-part5.md](vibrations-and-resonance-part5.md) se aage chalti hai** (wahan resonance real duniya mein: pul, imaarat, saaz aur kaan). Chapter ki shuruaat: [vibrations-and-resonance.md](vibrations-and-resonance.md). Recall ke liye: f aur T [sound-part3.md](../../../class9/physics/sound/sound-part3.md), pendulum ka time period [measurement-and-units-part3.md](../../../class9/physics/measurement-and-units/measurement-and-units-part3.md).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

---

# Topic 6: Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

Topic 1 se 5 tak humne chaar naam seekhe: free (natural) vibration, damped vibration, forced vibration aur resonance. Topic 5 mein dekha ki resonance pul, imaarat, saaz aur kaan mein kaise dikhta hai, kabhi madadgaar, kabhi khatarnak (aur Tacoma Narrows ne yaad dilaya ki har bada hilna resonance nahi hota). Ab ek hi cheez baaki hai: **sab ko ek jagah jodna.** Kab kaun sa naam lagta hai, kab kaun sa formula, aur ek sawaal mein do-teen topics ek saath aa jayein to kya karein? Aaj chapter ka saar bhi banega aur ek chhota "chart" bhi jo har sawaal mein kaam aayega.

---

## Vibration Mela ka buzzer round

School mein "Vibration Mela" laga tha. Mr. Yardi apni bhatiji Mukta ko mela dikhane laye. Pehle stall par Barton's pendulums the, jahan ek bhaari driver ke saath paanch halke pendulums latke the (Topic 4 jaisa), dusre stall par ek patli ruler ka "diving board" tha jisse overhang badal kar uski dhun badalti thi, aur teesre stall par tuning fork ek desk par rakha tha. Sabse bheed **buzzer round** par thi.

Quizmaster ne poochha, "Ek jhoole ko ek baar dhakka diya aur chhod diya. Ye kaun sa vibration hai?" Mukta ne bina soche buzzer daba diya, "Forced vibration!" Buzzer ne ghanti bajayi, par jawab galat nikla. Agle sawaal par wo "damped" bol gayi, jabki sahi jawab kuch aur tha. Teen sawaal ke baad uska score zero tha.

Bahar aakar wo udaas thi. "Chacha, naam sab yaad hain, par buzzer ke waqt sab ghul-mil jaate hain." Chacha hanse, "Naam yaad karne se nahi, **teen sawaal** poochne se jawab milta hai. Chalo, ek table aur ek chart banate hain. Agle round tak tum buzzer ki raja ho jaogi."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Per-swing multiplier (chaal-anupaat)** | Har swing mein amplitude jitne guna reh jaata hai wo sankhya. Amplitude 6 percent ghate to multiplier 0.94 hai | 18 cm ka amplitude agle swing mein 18 × 0.94 = 16.92 cm |
| **Halving count (aadha hone ke swing)** | Amplitude ko shuru ke aadhe se neeche aane mein kitne swing lagte hain | Multiplier 0.94 par 12 swing |
| **Seema ki jaanch (limiting-case check)** | Jawab ko ek bahut chhoti ya bahut badi value par rakh kar dekhna ki wo samajh mein aata hai ya nahi | Pendulum ki lambai badhao to T badhna chahiye, ghatna nahi |
| **Cheat-chart (kab kaun sa)** | Ek chhoti list jo sawaal mein diye gaye data dekh kar batati hai ki kaun sa formula ya kaun sa vibration lagega | Table 6.2 |

---

## Class 9 ka recall

Do cheezein Class 9 se: frequency f aur time period T ka rishta f = 1 ÷ T ([sound-part3.md](../../../class9/physics/sound/sound-part3.md)), aur pendulum ka T kai oscillations ka total time naap kar nikalna ([measurement-and-units-part3.md](../../../class9/physics/measurement-and-units/measurement-and-units-part3.md)). Is chapter ke Topic 1 se: T = 2π√(l ÷ g), g = 9.8 m/s², π = 3.14. Baaki sab Topic 1 se 5 mein hi bana hai, hum use dohrayenge nahi, bas jodenge.

---

## Part A: Chaar vibrations, ek table

Ek hi jhoola chaar roop le sakta hai. Mukta ke buzzer ki problem ye thi ki wo naam se naam jodti thi. Table 6.1 mein har naam ko paanch sawaalon se pehchaano: **kaun hilata hai, frequency kya, amplitude kaisa, energy ka kya, ek example.**

**Table 6.1** – Chaar vibrations ek jagah.

| Vibration | Kaun hilata hai | Frequency | Amplitude | Energy | Example |
|---|---|---|---|---|---|
| Free (natural) | Sirf ek baar ka dhakka, phir koi nahi | f_n, cheez ki apni | Pehle dhakke se tay hota hai | Shuru ki energy hi hai, aur koi nahi jodta | Jhoole ko ek baar dhakka dekar chhod diya |
| Damped | Ek baar ka dhakka, aur hawa aur ghisav ruki hui rukawat | Lagbhag f_n, wahi rehti hai | Samay ke saath ghatta hai | Heat aur sound mein badalti hai, nasht nahi | Asli pendulum jo dheere dheere ruk jaata hai |
| Forced | Baahri driver baar-baar | f_d, driver ki | f_d aur f_n door to chhota, paas to bada | Driver deta rehta hai, damping le jaati hai | Desk par rakhe fork se hilta desk |
| Resonance | Driver, f_d = f_n par | f_d = f_n | Sabse bada | Andar aane wali energy = damping se jaane wali | Jhoole par har jhoole mein ek halka tap |

Table 6.1 ke baad ek zaroori baat: ye chaar alag-alag dibbe nahi hain. **Resonance forced vibration ka hi ek khaas roop hai** (jab f_d = f_n), aur asli duniya mein damping lagbhag har vibration mein hoti hai. Isliye "damped" ya "free" bolte waqt hum ye dekhte hain ki baahar se koi driver chal raha hai ya nahi, aur chal raha ho to f_d ko f_n se milate hain.

Figure 6.1 wahi teen sawaal hain jo Chacha ne Mukta ko diye.

```
Q1  Kya koi baahri driver baar-baar hila raha hai?
      +-- NAHI --> free vibration, f = f_n
      I
      I           Q2  Kya amplitude ghat raha hai?
      I                 +-- HAAN --> damped vibration, f lagbhag f_n
      I                 +-- NAHI --> adarsh free vibration (bahut kam damping)
      I
      +-- HAAN --> forced vibration, f = f_d
                    Q3  Kya f_d = f_n?
                          +-- HAAN --> resonance, amplitude sabse bada
                          +-- NAHI --> amplitude chhota, par f = f_d hi
```

> **Figure 6.1** – Teen sawaalon ka raasta: pehle driver hai ya nahi (Q1), phir free mein amplitude ghat raha hai ya nahi (Q2), aur driver ho to f_d, f_n ke barabar hai ya nahi (Q3).

### Example 1: Chaar mein se kaun? (koi calculation nahi)

Neeche chhe sthitiyan hain. Figure 6.1 ke teen sawaal lagao.

| Sthiti | Q1 driver? | Q3 f_d = f_n? | Naam |
|---|---|---|---|
| Ruler ko ek baar chhedo, wo hilti hai aur dheere ruk jaati hai | Nahi | Lagu nahi | Damped (free, jo hawa se ghat-ti hai) |
| Mela ke stall par motor pendulums ko hilata hai, par motor ki frequency kisi pendulum se nahi milti | Haan | Nahi | Forced, amplitude chhota |
| Wahi stall, ab motor ki frequency ek pendulum ki f_n ke barabar | Haan | Haan | Resonance |
| Phone ki buzz se table ka hilna | Haan | Nahi (sirf f_d) | Forced |
| Fork ko hawa mein pakda, awaaz dheere dheere kam hui, pitch wahi | Nahi | Lagu nahi | Damped |
| Haath se chhote jhatke dekar button-pendulum ko bada kiya, rhythm uski dhun se mila hua | Haan | Haan | Resonance |

**Jaanch:** har row mein Q1 ka jawab "Haan" ho to Q3 poochha gaya, aur "Nahi" ho to Q2. Koi bhi sthiti dono raaston par nahi aayi ✅

---

## Part B: Kab kaun sa formula? (cheat-chart)

Mukta ko formulas bhi ghul-mil jaate the. Table 6.2 mein sawaal mein **kya diya hai** dekh kar tool chunna hai.

**Table 6.2** – Kab kaun sa tool (cheat-chart).

| Diya hua | Nikalna hai | Tool | Pehle kya karo |
|---|---|---|---|
| Pendulum ki l, aur g | T | T = 2π√(l ÷ g) | l ko metre mein karo |
| T (ya kai swing ka total time) | l | l = g × T² ÷ (4π²) | T = total time ÷ swings |
| T | f | f = 1 ÷ T | ms ko s mein karo |
| rpm | f_d | rpm ÷ 60 = Hz | phir T = 1 ÷ f_d |
| Do pendulums, l alag | T ka anupaat | T ∝ √l | l₂ ÷ l₁ ka √ |
| Amplitude, multiplier, swings | amplitude ya kitne swing | A × multiplier, har swing mein ek baar | har baar ek guna, dobara |
| Driver ki f_d, aur object ki f_n | resonance hai ya nahi | f_d = f_n ? | dono ko Hz mein likho |
| f aur sound ki speed 340 m/s | wavelength | λ = v ÷ f | kHz ko Hz mein karo |

Teen aadatein jo jawab ko sahi rakhti hain:
1. **Pehle ikaai (unit):** cm ko m, kHz ko Hz, rpm ko Hz, ms ko s banao. Phir formula.
2. **Seema ki jaanch:** l badhe to T badhna chahiye. g kam ho (pahaadi, Chaand) to T badhna chahiye. Jawab ulta aaye to formula ghalat laga hai.
3. **Back-substitution:** nikli hui l se dobara T nikaalo, wahi aana chahiye.

---

## Part C: Mixed sawaal (Topics 1 se 5 saath)

### Example 2: Mela ka lamba pendulum aur pahaadi

Mela ke hall mein lagbhag 3.24 m lamba pendulum latka hai. (a) Uska T aur f_n nikalo. (b) Is pendulum se ek ghadi chalti hai. Maan lo (kalpanik, sirf samajhne ke liye) pahaadi par g = 9.78 m/s² hai. Wahan T kitna hoga, aur ghadi ek din (86400 s) mein kitna peeche rahegi?

**Given:** l = 3.24 m, g = 9.8 m/s² (plain), g = 9.78 m/s² (pahaadi, kalpanik), π = 3.14.
**Find:** T, f_n; pahaadi par T; ghadi ka ek din ka nuksaan.
**Formula:** T = 2π√(l ÷ g), f = 1 ÷ T.
**Substitution:** Plain: T = 6.28 × √(3.24 ÷ 9.8) = 6.28 × √0.3306 = 6.28 × 0.575 = **3.61 s**, f_n = 1 ÷ 3.61 = **0.277 Hz**. Pahaadi: T = 6.28 × √(3.24 ÷ 9.78) = 6.28 × 0.5756 = **3.615 s**. Ratio = 3.615 ÷ 3.611 = 1.00102. Ghadi har swing ko ginti hai, to ek din mein wo 86400 ÷ 1.00102 = 86311.8 s dikhayegi.
**Answer:** T lagbhag 3.61 s, f_n lagbhag 0.28 Hz. Pahaadi par T thoda zyada (lagbhag 3.615 s). Ghadi ek din mein lagbhag 88 s peeche.
**Jaanch:** g kam hua to T badha ✅ (seema ki jaanch). Seedha ratio √(9.8 ÷ 9.78) = 1.00102 bhi wahi deta hai, aur 86400 − 86311.8 = 88.2 s ✅. Units: m ÷ (m/s²) = s², √ se s ✅

### Example 3: 6 percent ghatne wala amplitude aur "aadha hone ke swing"

Wahi 3.24 m wala pendulum (T = 3.61 s) 18 cm ke amplitude se chhoda gaya. Damping se har swing mein amplitude 6 percent ghat-ta hai (multiplier 0.94). Kitne swing baad amplitude shuru ke aadhe (9 cm) se neeche aayega, aur isme kitna samay lagega? Amplitude us waqt kitna hoga, aur T kitna rahega?

**Given:** A₀ = 18 cm, multiplier = 0.94, T = 3.61 s.
**Find:** pehla n jisme A < 9 cm, samay, A aur T.
**Formula:** A_n = A_(n−1) × 0.94, har swing mein ek baar (dohrate hue guna).
**Substitution:**

| n | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A (cm) | 16.92 | 15.90 | 14.95 | 14.05 | 13.21 | 12.42 | 11.67 | 10.97 | 10.31 | 9.70 | 9.11 | 8.57 |

n = 11 par 9.11 cm abhi 9 se bada hai. n = 12 par 8.57 cm. Samay = 12 × 3.61 = 43.3 s.
**Answer:** **12 swing** (lagbhag 43 s) mein amplitude aadhe se neeche aata hai, tab A lagbhag 8.57 cm. T phir bhi lagbhag 3.61 s hi hai (Topic 2: damping se f lagbhag nahi badalti).
**Jaanch:** 0.94¹¹ = 0.506 (aadhe se thoda upar) aur 0.94¹² = 0.476 (aadhe se neeche) ✅. Figure 6.2 mein bhi ':' wali line 12 vein swing par paar hoti hai ✅

```
amplitude, har # = 0.5 cm; ':' = aadhe ka nishaan (9 cm)
swing  0  18.00 cm  I####################################
swing  1  16.92 cm  I##################################
swing  2  15.90 cm  I################################
swing  3  14.95 cm  I##############################
swing  4  14.05 cm  I############################
swing  5  13.21 cm  I##########################
swing  6  12.42 cm  I#########################
swing  7  11.67 cm  I#######################
swing  8  10.97 cm  I######################
swing  9  10.31 cm  I#####################
swing 10   9.70 cm  I###################
swing 11   9.11 cm  I##################:
swing 12   8.57 cm  I################# :
swing 13   8.05 cm  I################  :
swing 14   7.57 cm  I###############   :
```

> **Figure 6.2** – Multiplier 0.94 par amplitude ka girna, 18 cm se shuru. Har # = 0.5 cm. ':' wala nishaan 9 cm ka hai: swing 11 par bar usse chhoo raha hai, swing 12 par pehli baar neeche chala gaya.

Ek dilchasp baat (Topic 2 ka chhote jhoolon wala tathya: energy amplitude ke square ke saath badalti hai): amplitude ka multiplier 0.94 ho to energy ka multiplier 0.94² = 0.8836 hota hai. Energy ko aadha hone mein sirf **6 swing** lagte hain (0.8836⁶ = 0.476), jabki amplitude ko 12. Ye ek chhote jhoole ke liye model hai, bade swing par thoda alag ho sakta hai.

### Example 4: Mela ke motor ke liye pendulum

Mela ke ek stall par motor stand ko 21 rpm par ghumata hai aur wahi pendulums ko hilata hai. Kitni lambai ka pendulum motor ke saath resonate karega? Stall mein lambaiyan 1.21 m, 1.69 m, 2.03 m, 2.56 m aur 3.24 m ke pendulums hain. Kaun sa sabse bada hilega?

**Given:** 21 rpm, g = 9.8 m/s², π = 3.14.
**Find:** f_d, T, l; stall ka resonate karne wala pendulum.
**Formula:** f_d = rpm ÷ 60, T = 1 ÷ f_d, l = g × T² ÷ (4π²).
**Substitution:** f_d = 21 ÷ 60 = **0.35 Hz**. T = 1 ÷ 0.35 = 2.857 s. l = 9.8 × 2.857² ÷ 39.44 = 9.8 × 8.163 ÷ 39.44 = **2.03 m**.
**Answer:** 2.03 m ka pendulum resonate karega, yaani stall ka **2.03 m wala** sabse bada hilega. Baaki chaaron bhi 0.35 Hz par hi hilenge (forced vibration, Topic 3), par unka amplitude chhota rahega.
**Jaanch:** 2.03 m ka T = 6.28 × √(2.03 ÷ 9.8) = 6.28 × 0.455 = 2.86 s ✅, f = 1 ÷ 2.86 = 0.35 Hz ✅. Dusre pendulums ka f_n: 1.21 m par 0.45 Hz, 1.69 m par 0.38 Hz, 2.56 m par 0.31 Hz, 3.24 m par 0.28 Hz, sab 0.35 Hz se alag ✅

### Example 5: Balcony aur taal (sirf padhne ke liye)

Maan lo (kalpanik value) ek balcony ki natural frequency f_n = 1.6 Hz hai. Log kitne kadam ya taal per minute par chalen to f_d = f_n ho? Aam chalne ki raftaar lagbhag 2 kadam per second hai. Kya wo bhi khatre mein hai?

**Given:** f_n = 1.6 Hz (kalpanik), chalna lagbhag 2 Hz.
**Find:** T aur per-minute taal, aur f_d ÷ f_n.
**Formula:** T = 1 ÷ f, per minute = f × 60, anupaat f_d ÷ f_n.
**Substitution:** T = 1 ÷ 1.6 = **0.625 s**. Per minute = 1.6 × 60 = **96** taal. Chalne ke liye f_d ÷ f_n = 2 ÷ 1.6 = **1.25**.
**Answer:** Lagbhag 96 kadam ya kudaan per minute ek-saath ho jaayein to f_d = f_n. Aam chalna (lagbhag 2 Hz) 1.25 guna hai: resonance nahi, par response curve (Figure 4.2) mein peak ke dhalaan ke kaafi paas, isliye nishchint nahi kah sakte.
**Jaanch:** 96 ÷ 60 = 1.6 Hz ✅. 0.625 × 1.6 = 1.00 ✅. **Sabse safe niyam:** balcony ya stand par kabhi bhi ek rhythm mein koodna ya stamp karna nahi. Ye sirf padhne ke liye hai, ghar ya school mein test mat karo.

**Ghar par adult ke saath (chaaron vibrations ek dhaage par):** ek button ko lagbhag 0.80 m lambe dhaage se latkao (T lagbhag 1.8 s, Topic 1 ka formula). Table ya chair ke kinare se dhaage ko latkao, par khud zameen par raho. (1) **Free:** button ko thoda kheench kar chhodo, dekho wo apni dhun par hilta hai. (2) **Damped:** ek minute baad dekho ki amplitude kam ho gaya par har swing lagbhag utna hi time le raha hai. (3) **Forced:** dhaage ka upar ka sira ungli se pakad kar bahut chhote jhatke do, kabhi tez, kabhi bahut dheere: button chhota hilta hai. (4) **Resonance:** ab jhatkon ko button ki apni lay ke saath milao: bahut bada swing aa jayega. Koi bhaari cheez nahi, kursi par khade hokar kuch nahi.

## Wapas Vibration Mela mein

Agle round mein quizmaster ne poochha, "Ek bhaari driver aur halke pendulums, sirf ek bada hil raha hai. Kyun?" Mukta ne buzzer dabane se pehle Figure 6.1 ke teen sawaal dohraye: driver hai (haan), f_d = f_n? (sirf usi ka, jiski lambai driver ke barabar hai). "**Resonance!**" Is baar ghanti sahi bajee. Phir "amplitude 6 percent har swing ghate to kitne swing mein aadha?" par usne dimaag mein 0.94 se baar-baar guna kiya aur "12" bol di. Teen aur sahi jawab ke baad usne mela ka chhota inaam jeeta. Chacha ne kaha, "Naam yaad karne se zyada kaam aaya poochna: kaun hila raha hai, aur kitni taal se."

---

## Pichhli galtiyan, ek line mein

Jo galtiyan Topic 1 se 5 mein pakdi gayin (bhaari bob dheere nahi jhoolta, dhakka f_n nahi badalta, damping f ko lagbhag nahi badalta, energy nasht nahi hoti, forced vibration driver ki f_d par hota hai, loud ka matlab zyada energy nahi, resonance ko bada force nahi chahiye, ye hamesha todta nahi, Tacoma sirf resonance nahi, aur mazboot imaarat resonance se nahi bachti) unhe wahan dekho. Yahan paanch naayi galtiyan hain jo chaaron naamon ko jodte waqt aati hain.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Frequency aur amplitude ek hi cheez hain."** ❌

Demonstration: Example 2 ka 3.24 m wala pendulum. Pehle use 6 cm kheench kar chhodo, phir 11 cm. Dono baar ek swing mein lagbhag 3.61 s lagte hain, f lagbhag 0.28 Hz. Amplitude (cm mein) alag hua, frequency (Hz mein) wahi. Ek cheez "kitni door tak" hai, doosri "kitni baar per second". Units bhi alag hain, to dono ek nahi ho sakte. Sahi: amplitude = kitni badi vibration, frequency = kitni tez vibration.

**Galti 2: "Damped vibration ki frequency zero hoti hai kyunki wo ruk rahi hai."** ❌

Demonstration: Example 3 ka pendulum (T = 3.61 s). Shuru ke 36.1 s mein 10 swing, amplitude 18 cm se lagbhag 9.7 cm. Kaafi baad, 144 s se 180 s ke beech mein bhi lagbhag 10 swing, jabki amplitude ab lagbhag 1.5 cm reh gaya (18 × 0.94⁴⁰ lagbhag 1.5 cm). Swing ginti ka tarika wahi: "kitne swing per second". Agar frequency zero hoti to swing hi nahi hote. Sahi: damping se **amplitude** ghatta hai, frequency lagbhag wahi rehti hai.

**Galti 3: "Driver ruk gaya, phir bhi object f_d par hi hilta rehta hai."** ❌

Demonstration: ghar par adult ke saath, 0.80 m ke button-pendulum ko haath ke jhatkon se (1 jhatka har 1.25 s, yaani f_d = 0.80 Hz) hilao: wo 0.80 Hz par hilta hai. Haath rok do. Ab button apni dhun (T lagbhag 1.8 s, f_n lagbhag 0.56 Hz) par hilta hai aur damping se dheere dheere ruk jaata hai. Sahi: forced vibration tab tak hai jab tak driver chal raha hai. Driver ke ruk jaane par object apni f_n par damped vibration karta hai (Topic 3 mein shuru ki gadbad bhi yahi thi).

**Galti 4: "T = 2π√(g ÷ l)" (ulta formula).** ❌

Demonstration: l = 2.89 m lo. Sahi: T = 6.28 × √(2.89 ÷ 9.8) = 6.28 × 0.543 = **3.41 s**. Ulta: 6.28 × √(9.8 ÷ 2.89) = 6.28 × 1.84 = **11.6 s**, jo bilkul jhooth hai: itna lamba pendulum 11.6 s ka swing nahi leta, aur ulte formula mein l badhane par T **ghat-ta**, jabki asli mein l badhne par T badhta hai (seema ki jaanch). Units bhi mel nahi khate: g ÷ l ka unit 1 ÷ s² hai, to √ se 1 ÷ s milega, time nahi. Sahi: l upar (numerator), g neeche.

**Galti 5: "Do sources ki awaaz ek jaisi hai, to resonance hai."** ❌

Demonstration: Mukta aur uski saheli dono 262 Hz ka ek hi sur gaati hain. Awaaz ek jaisi hai, par kuch bhi bada hilta nahi. Resonance tab hai jab ek cheez (driver) doosri cheez ko hila rahi ho aur uska **amplitude bada ho jaaye** kyunki f_d = f_n. Do fork jinki f_n barabar ho aur ek ko bajane par doosra bhi dikhne layak hile, wo resonance (sympathetic) hai. Sirf same pitch nahi, ek-doosre ko hilana zaroori hai.

---

## Quick Recap

- **Free:** ek baar ka dhakka, f = f_n. **Damped:** f lagbhag f_n, amplitude ghatta hai, energy heat aur sound banti hai. **Forced:** driver chalta hai, f = f_d. **Resonance:** f_d = f_n, amplitude sabse bada, andar aane wali energy = bahar jaane wali.
- Teen sawaal: driver hai? amplitude ghat raha hai? f_d = f_n?
- Formulas: T = 2π√(l ÷ g), l = g T² ÷ (4π²), f = 1 ÷ T, rpm ÷ 60 = Hz, T ∝ √l, λ = v ÷ f.
- Damping ke sawaal mein amplitude har swing ek multiplier se guna hota hai (Example 3: 0.94 par 12 swing mein aadha).
- Pehle ikaai (unit) badlo, phir formula; seema ki jaanch aur back-substitution se jawab pakka karo.
- Paanch aam galtiyan: f aur A ek nahi, damped ki f zero nahi, driver ruke to f_d nahi, T = 2π√(l ÷ g) hi sahi, same awaaz resonance nahi.

---

## Practice Questions

(Take g = 9.8 m/s², π = 3.14 and the speed of sound in air as 340 m/s. Values marked "imagined" are only for practice.)

1. A pendulum is 1.96 m long. Find its time period and its natural frequency.
2. The length of a pendulum clock's pendulum increases by 44 percent because of a loose fitting. By what factor does T change? If the clock was correct before, how many minutes does it lose in one real hour?
3. A pendulum's amplitude starts at 24 cm and is multiplied by 0.97 each swing. Find the amplitude after 10 swings.
4. A pendulum's amplitude is multiplied by 0.82 each swing and one swing takes 3.3 s. After how many swings does the amplitude first fall below half of its starting value, and how long does this take?
5. A stall motor turns at 27 rpm and drives a set of pendulums. Find f_d, T and the length of the pendulum that resonates.
6. A driver has f_d = 0.38 Hz. Three pendulums have lengths 1.32 m, 1.72 m and 2.20 m. Find T for each and say which will swing widest.
7. An imagined stage platform has f_n = 2.8 Hz. Find its time period in ms and the number of beats per minute of a rhythm that would match f_n.
8. Find the wavelength in air of a note of 740 Hz. A thin wine glass rings at about 740 Hz when tapped (imagined, lagbhag). Does a singer holding exactly that note guarantee that the glass breaks? Give two reasons.
9. A student writes T = 2π√(g ÷ l) for a pendulum of length 4.41 m. Find the answer the student gets, then the correct T, and say in one line why the student's answer cannot be right.
10. State true or false with a one-line reason: (a) Frequency and amplitude are the same thing. (b) A damped vibration has zero frequency. (c) After the driver stops, the object keeps vibrating at f_d. (d) Two people singing the same note are an example of resonance. (e) At f_d = f_n the amplitude is largest.
11. For each, name the type (free damped, forced or resonance): (a) a spoon tapped gently once on a table and heard fading, (b) a washing machine drum at 840 rpm shaking its frame, (c) a child pushed once on a swing and left, (d) a child pushed at each forward swing in time with the swing, (e) a loudspeaker cone playing a song.
12. A diving board (a flat plank fixed at one end) is imagined with a diver of larger mass standing at its free end instead of a lighter one. Without calculation, does its natural frequency go up or down? What happens if the overhanging length is made shorter? Use only the ruler idea of Topic 1.
13. A seesaw-like plank balanced on a pivot is given a push by a child sitting on one end: the plank rocks and slowly stops. Name the type of vibration, say what slowly reduces the amplitude, and say where the lost energy goes.

### Answers

1. **Given:** l = 1.96 m. **Find:** T, f. **Formula:** T = 2π√(l ÷ g), f = 1 ÷ T. **Substitution:** T = 6.28 × √(1.96 ÷ 9.8) = 6.28 × √0.2 = 6.28 × 0.4472 = **2.81 s**. f = 1 ÷ 2.81 = **0.356 Hz**.
   Jaanch: 2.81 × 0.356 = 1.00 ✅. l = 1.96 m, 1 m se bada, to T 2.0 s se bada ✅ (seema ki jaanch).

2. **Given:** l naya = 1.44 × l purana (44 percent badhi). **Find:** T ka factor, ghadi ka nuksaan. **Formula:** T ∝ √l. **Substitution:** √1.44 = **1.2**, yaani T 1.2 guna. Ghadi swing ginti hai: asli 1 ghante (3600 s) mein wo 3600 ÷ 1.2 = 3000 s dikhati hai. Nuksaan = 3600 − 3000 = 600 s = **10 minute**.
   Jaanch: lambi pendulum dheemi chali, ghadi peeche hui ✅. 3000 + 600 = 3600 s ✅

3. **Given:** A₀ = 24 cm, multiplier 0.97, 10 swing. **Formula:** A₁₀ = 24 × 0.97¹⁰. **Substitution:** 0.97¹⁰ = 0.737 (har baar 0.97 se guna karke), A₁₀ = 24 × 0.737 = **17.7 cm**.
   Jaanch: sirf 3 percent per swing, to 10 swing mein lagbhag 26 percent hi ghata (24 se 17.7) ✅

4. Multiplier 0.82: 1 swing 0.82, 2 swing 0.672, 3 swing 0.551, 4 swing 0.452. 3 swing par abhi 0.551 (aadhe se zyada), **4 swing** par pehli baar 0.5 se neeche. Samay = 4 × 3.3 = **13.2 s**.
   Jaanch: 0.82⁴ = 0.452 < 0.5 aur 0.82³ = 0.551 > 0.5 ✅

5. **Given:** 27 rpm. **Formula:** f_d = rpm ÷ 60, T = 1 ÷ f_d, l = g T² ÷ (4π²). **Substitution:** f_d = 27 ÷ 60 = **0.45 Hz**. T = 1 ÷ 0.45 = **2.22 s**. l = 9.8 × 2.22² ÷ 39.44 = 9.8 × 4.938 ÷ 39.44 = **1.23 m**.
   Jaanch: T = 6.28 × √(1.23 ÷ 9.8) = 6.28 × 0.354 = 2.22 s ✅

6. Driver T = 1 ÷ 0.38 = 2.63 s. 1.32 m: T = 6.28 × √(1.32 ÷ 9.8) = **2.30 s**. 1.72 m: 6.28 × √(1.72 ÷ 9.8) = **2.63 s**. 2.20 m: 6.28 × √(2.20 ÷ 9.8) = **2.98 s**. Isliye **1.72 m wala** sabse bada hilega, kyunki uska T driver ke T (2.63 s) ke barabar hai: f_d = f_n. Baaki do bhi 0.38 Hz par hilenge par chhote.
   Jaanch: 1 ÷ 2.63 = 0.38 Hz ✅. Lambai ke saath T badhta gaya (2.30, 2.63, 2.98) ✅

7. **Given:** f_n = 2.8 Hz (imagined). T = 1 ÷ 2.8 = 0.357 s = **357 ms**. Per minute = 2.8 × 60 = **168** beats.
   Jaanch: 168 ÷ 60 = 2.8 Hz ✅. 0.357 × 2.8 = 1.00 ✅

8. λ = v ÷ f = 340 ÷ 740 = **0.46 m**. Nahi, guarantee nahi. Wajah 1: glass ki f_n sirf lagbhag 740 Hz hai (har glass ki alag, lagbhag 500 se 1000 Hz), aur gayika ki awaaz thodi bhi hile to f_d, f_n se door ho jaati hai. Wajah 2: glass tootne ke liye awaaz bahut loud, steady aur kaafi der tak chahiye, aur glass patla hona chahiye. Ghar par kabhi glass todne ki koshish nahi: toota glass chot deta hai.
   Jaanch: 740 × 0.46 = 340 m/s ✅

9. Student ka: T = 6.28 × √(9.8 ÷ 4.41) = 6.28 × 1.49 = **9.36 s**. Sahi: T = 6.28 × √(4.41 ÷ 9.8) = 6.28 × 0.671 = **4.21 s**. Student ka jawab galat hai kyunki l = 1 m par T lagbhag 2.0 s hai aur T ∝ √l hai, to 4.41 m par T lagbhag 2.0 × 2.1 = 4.2 s hona chahiye, 9.4 s nahi. Ulte formula mein l badhne par T ghat-ta, aur units 1 ÷ s ban jaate hain.
   Jaanch: 4.21 ÷ 2.006 = 2.10 = √4.41 ✅

10. (a) **False** ❌: A kitni door tak (cm), f kitni baar per second (Hz). (b) **False** ❌: damping amplitude ghatati hai, f lagbhag wahi rehti hai. (c) **False** ❌: driver ruke to object apni f_n par damped vibration karta hai. (d) **False** ❌: resonance mein ek cheez doosri ko f_d = f_n par bada hilati hai, sirf same awaaz nahi. (e) **True** ✅: f_d = f_n par amplitude sabse bada.

11. (a) **Damped (free)**: ek baar ka tap, awaaz fading. (b) **Forced**: f_d = 840 ÷ 60 = 14 Hz, frame us par hilta hai. (c) **Damped (free)**: ek baar dhakka, phir chhod diya. (d) **Resonance**: har forward swing par push, f_d = f_n. (e) **Forced**: cone sound ki frequency par hilta hai.

12. Mass-spring wali baat (Topic 1): zyada mass dheere hilta hai, to bhaari diver ke saath f_n **kam** ho jaati hai. Overhang chhota karne par patti (ruler) kadak ho jaati hai aur jaldi hilti hai, to f_n **zyada** hoti hai. Ye sirf gunaatmak jawab hai.

13. Ek baar ka push aur phir chhod diya: **damped (free) vibration**. Amplitude ko hawa ki rukawat, pivot ka ghisav aur plank ke andar ka ghisav ghatate hain. Lost energy **heat aur thodi sound** ban kar aas-paas phail jaati hai, nasht nahi hoti.

---

## Chapter ka saar: Vibrations and Resonance

```
Topic 1  ->  free vibration  :  f_n apni dhun hai: l, mass, kadakpan
Topic 2  ->  damped          :  amplitude ghatta, f lagbhag wahi
Topic 3  ->  forced          :  object f_d par hilta hai
Topic 4  ->  resonance       :  f_d = f_n par amplitude sabse bada
Topic 5  ->  real duniya     :  pul, imaarat, saaz, kaan
Topic 6  ->  sab mila kar    :  chart, mixed sawaal, saar
```

> **Figure 6.3** – Chapter ki chhe kadiyan: Topic 1 se 6 tak, har topic ek line mein.

| Topic | Kya seekha | Ek line |
|---|---|---|
| 1. Natural Vibrations Aur Pendulum | Har cheez ki apni dhun | Free vibration ki f_n cheez se tay hoti hai (lambai, mass, kadakpan), dhakke se nahi; T = 2π√(l ÷ g); T bob ke mass par nahi; ratio method T ∝ √l; l = 1.00 m par T lagbhag 2.0 s, seconds pendulum l lagbhag 0.99 m |
| 2. Damping | Vibration dheere dheere kyun ruki | Hawa aur ghisav se energy heat aur sound banti hai (nasht nahi), amplitude ghatta hai, f lagbhag wahi; shock absorber, door closer, meter ki needle; critical damping |
| 3. Forced Vibrations | Jab koi aur hilaye | Driver ki f_d par object hilta hai; amplitude is par tikta hai ki f_d, f_n ke kitne paas hai; sounding board, sympathetic vibration; rpm ÷ 60 = Hz |
| 4. Resonance | Jab frequency mil jaaye | f_d = f_n par amplitude sabse bada, kyunki har push taal mein aakar jud jaata hai; Barton's pendulums; l = g T² ÷ (4π²); radio ki tuning, bottle ka air column; bada force zaroori nahi |
| 5. Resonance Real Duniya Mein | Pul, imaarat, saaz aur kaan | Kharab resonance (Broughton 1831, Angers 1850, Millennium Bridge 2000, Mexico City 19 September 1985) aur damping, tuned mass damper wale upay; Tacoma Narrows (7 November 1940) mostly aeroelastic flutter; achha resonance: saaz, radio, kaan (lagbhag 3 kHz) |
| 6. Sab Kuch Mila Kar | Chart aur mixed sawaal | Teen sawaal (driver? amplitude ghat raha? f_d = f_n?), formula chart, repeated multiplication se damping, ulta formula aur f zero jaisi galtiyan pakadna |

Chaar naam, ek jhoola: Mukta ne seekh liya ki naam yaad karne se zyada kaam poochna aata hai. Tum bhi ab kisi bhi vibration ko dekh kar pooch sakte ho: kaun hila raha hai, kitni taal se, aur energy kahan ja rahi hai.

**Aage kya?** Class 10 Physics Chapter 7 Current Electricity II: ek hi battery ek bulb ko tez aur agle ko dheema kyun jalati hai, aur har cell ke andar chhupi "internal resistance" kya hai?
