# Chapter: Gravitation II and Space Missions (Part 6)

> **Class:** 10 | **Subject:** Physics
> **Ye file [gravitation-and-space-missions-part5.md](gravitation-and-space-missions-part5.md) se aage chalti hai** (wahan rocket ka siddhant, thrust, multi-stage rocket aur Bharat ke antariksh mission). Chapter ki shuruaat: [gravitation-and-space-missions.md](gravitation-and-space-missions.md). Recall ke liye: g ka mass se na badalna [gravitation-part3.md](../../../class9/physics/gravitation/gravitation-part3.md), orbit mein gravity aur weightlessness [gravitation-part6.md](../../../class9/physics/gravitation/gravitation-part6.md).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

---

# Topic 6: Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

Topic 1 se 5 tak tumne is chapter ke saare auzaar ek ek karke seekhe: Kepler ke niyam jo planets ki chaal batate hain, g ka oonchai aur gehrai ke saath badalna, escape velocity, satellite ka orbit aur uska time, aur rocket tatha Bharat ke antariksh mission. Ab sawal ye hai: jab ek **naya sawal** saamne aaye, to kaun sa auzaar uthana hai? Aur jab ek sawal mein **do-teen auzaar** saath mein lagein, to unhe kis kram mein jodna hai? Is aakhri topic mein hum yahi seekhenge: formula chunna, unhe jodna, aur un galtiyon se bachna jo sabse zyada hoti hain. Ant mein poore chapter ka wrap-up hoga.

---

## Space Week ka buzzer round

School mein "Space Week" chal raha tha. Hall mein quiz tha, aur sabse mazedaar round tha **buzzer round**: quiz-master ek statement bolta, aur jis team ko lagta wo galat hai ya sahi, wo buzzer daba kar jawab deti. Sahi jawab par plus 5, galat par minus 2.

Mr. Kothavale apni bhatiji Vasudha ko ye quiz dikhane laye the, kyunki Vasudha ki team "Team Chandrayaan" finals mein thi. Buzzer round shuru hua. Vasudha ne tezi se buzzer dabaye, aur teen jawab galat nikle:

- "Bhaari gend ka g zyada hota hai, isliye wo pehle girti hai." Vasudha: "Sahi!" Galat nikla.
- "Escape velocity aur orbital velocity ek hi cheez ke do naam hain." Vasudha: "Haan!" Galat nikla.
- "Space station mein astronaut ka mass zero ho jaata hai, isliye wo tairta hai." Vasudha: "Bilkul!" Galat nikla.

Team ke score ke aage minus likha aaya. Ghar jaate waqt Vasudha udaas thi. "Chacha, mujhe saare formula yaad hain: Kepler, g, escape, orbit. Phir bhi mai ghabra gayi. Buzzer dabate waqt samajh hi nahi aata ki kaunsa formula kahan lagana hai, aur kaun si galti chhupi hai."

Mr. Kothavale haske. "Vasudha, formula yaad hona aadha kaam hai. Baaki aadha ye pehchanna hai ki **sawal kya maang raha hai**. Aaj ghar chalkar hum ek 'kaun sa formula kab' ka naksha banayenge, kuch milaye hue sawal karenge, aur un teeno galtiyon ko (aur ek chauthi ko) ek ek karke pakdenge. Agli baar buzzer tumhare haath mein hoga." Vasudha ne sar hilaya.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Orbit ki radius (r)** | Pind ke **centre** se satellite tak ki doori | Surface se 1.2 × 10⁶ m upar: r = 6.4 × 10⁶ + 1.2 × 10⁶ = 7.6 × 10⁶ m |
| **Oonchai (h)** | Pind ki **surface** se satellite tak ki doori | h = 1.2 × 10⁶ m |
| **Orbital speed (v_o)** | Gol orbit mein tikne ke liye zaroori speed | Surface ke paas Earth par lagbhag 7.9 km/s |
| **Escape speed (v_e)** | Wapas na aane ke liye surface se zaroori speed | Earth ke liye lagbhag 11.2 km/s |
| **Sanity check** | Answer ko sochkar parakhna ki wo hosh-o-hawas wala hai ya nahi | Earth ka satellite 7.9 km/s se tez gol orbit mein nahi chal sakta |
| **Ratio method** | Do cheezon ka hisaab bhaag karke, bina poore numbers daale | Mass 18 guna aur radius 2 guna ho to g kitna guna? |
| **Apparent weightlessness** | Scale ka reading 0 aana, jabki gravity lag rahi hai | Orbit mein astronaut |
| **Inertia (jadatv)** | Cheez ka apni halat badalne se mana karna: mass jitna zyada, utna zyada | Bhaari cheez ko dhakelna mushkil |

---

## Part A: Kaun sa formula kab

Chapter ke saare formula ek hi sawal se jude hain: **"kisi pind (M aur R wala) ke aas paas gravity kya kar rahi hai?"** Isliye kaun sa formula chunna hai, ye teen sawal poochkar tay ho jaata hai.

**Sawal 1: Kaun sa pind?** Earth, Moon, Mars ya koi kalpnik planet? Uska M aur R (ya g aur R) likho.
**Sawal 2: Kahan?** Surface par, ya surface se h upar, ya gehrai d par? Agar upar hai to **r = R + h** likh lo (centre se doori).
**Sawal 3: Kya chahiye?** Time, g, speed jo wapas na aane de, ya speed jo gol orbit mein tikaye?

Figure 6.1 ye naksha ek nazar mein dikhata hai.

```
 Sawal kis baare mein hai?
   :
   +-- Planet ka time ya Sooraj se doori
   :       Kepler ka teesra niyam: T² ∝ r³,  T₁²/T₂² = r₁³/r₂³
   :       (Earth ke units mein: T² = r³, T saal mein, r AU mein)
   :
   +-- g kisi oonchai ya gehrai par
   :       oonchai h par: g_h = g (R/(R + h))²
   :       gehrai d par:  g_d = g (1 − d/R)
   :
   +-- Itni tez phenko ki wapas na aaye
   :       Escape speed: v_e = √(2GM/R) = √(2gR)
   :
   +-- Gol orbit mein satellite
          Orbital speed: v_o = √(GM/r) = √(gR²/r),  r = R + h
          Ek chakkar ka time: T = 2πr/v_o
```

> **Figure 6.1** – "Kaun sa formula kab" ka naksha. Har shaakha chapter ke ek topic ka formula hai. Orbit wale sawal mein hamesha r = R + h lena hai, sirf h nahi.

Ab ek tez nazar un cheezon par jo **in sab formulon mein kabhi nahi aati**: girne wali ya ghoomne wali cheez ka **apna mass**. Isi liye ek 1 kg ka satellite aur ek 1000 kg ka satellite ek hi orbit mein ek hi speed se chalte hain (Topic 4).

**Do rishte jo yaad rakhne layak hain:**

- Surface par hi gol orbit lein (r = R), to v_o = √(gR). Earth ke liye √(9.8 × 6.4 × 10⁶) = √(6.272 × 10⁷) = 7.92 × 10³ m/s, yani **lagbhag 7.9 km/s**.
- Escape speed v_e = √(2gR) = √2 × √(gR) = **√2 × v_o**. Yani surface par escape speed gol-orbit speed se lagbhag **1.41 guna** hoti hai. Earth ke liye 11.2 ÷ 7.9 = 1.418 ≈ 1.41 ✅.

Ye do rishte baad mein Part B ke example 3 mein kaam aayenge.

---

## Part B: Milaye hue sawal

Ab hum aise sawal karenge jisme **do ya zyada topic** ek saath lagte hain. Har jagah pehle bolkar tay karo ki kaun sa formula kyun.

### Example 1: Kepler se time, phir speed (Topic 1 + gol orbit ki speed)

**Sawaal:** Ek kalpnik planet "Kalpa" Sooraj ke chaaro taraf ghoomta hai. Uski Sooraj se average doori 2.25 AU hai. (a) Kalpa ka saal (time period) kitna hai? (b) Wo ek gol raste par chalta maan lo, to uski orbital speed kitni hai? Earth ki speed ke saath compare karo. (1 AU = 1.5 × 10¹¹ m, 1 saal = 3.15 × 10⁷ s, π = 3.14)

**Given:** r = 2.25 AU. **Find:** T aur v.

**Kadam 1 (Kepler 3, Earth ke units mein):** T² = r³ = 2.25³ = 11.39, to T = √11.39 = **3.375 saal** (yaani 2.25 × √2.25 = 2.25 × 1.5).
**Kadam 2 (second mein):** T = 3.375 × 3.15 × 10⁷ s = **1.063 × 10⁸ s**.
**Kadam 3 (doori metre mein):** r = 2.25 × 1.5 × 10¹¹ m = **3.375 × 10¹¹ m**.
**Kadam 4 (speed):** v = 2πr ÷ T = 2 × 3.14 × 3.375 × 10¹¹ m ÷ (1.063 × 10⁸ s) = 2.12 × 10¹² m ÷ (1.063 × 10⁸ s) = 1.99 × 10⁴ m/s ≈ **19.9 km/s**.
**Kadam 5 (Earth ki speed):** v_Earth = 2 × 3.14 × 1.5 × 10¹¹ m ÷ (3.15 × 10⁷ s) = 2.99 × 10⁴ m/s ≈ **29.9 km/s**.

**Jaanch:** 19.9 ÷ 29.9 = 0.667, aur 1 ÷ √2.25 = 1 ÷ 1.5 = 0.667 ✅. Door wala planet dheere chalta hai (jaisa Topic 4 mein aaya: v_o ∝ 1/√r). Time bhi zyada: 3.375 saal > 1 saal ✅.

### Example 2: Oonchai par g, speed aur time (Topic 2 + Topic 4)

**Sawaal:** Ek satellite Earth ki surface se 1.2 × 10⁶ m upar gol orbit mein hai. Wahan (a) g, (b) orbital speed, (c) ek chakkar ka time nikalo. (g = 9.8 m/s², R = 6.4 × 10⁶ m, π = 3.14)

**Given:** h = 1.2 × 10⁶ m. **Find:** g_h, v_o, T.

**Pehle r:** r = R + h = 6.4 × 10⁶ + 1.2 × 10⁶ = **7.6 × 10⁶ m**. (R/r = 6.4 ÷ 7.6 = 0.842)

**(a) g_h:** g_h = g (R/r)² = 9.8 × (0.842)² = 9.8 × 0.709 = **6.95 m/s²**.

**(b) v_o:** v_o = √(gR²/r) = √(9.8 × (6.4 × 10⁶)² ÷ 7.6 × 10⁶) = √(9.8 × 4.096 × 10¹³ ÷ 7.6 × 10⁶) = √(5.282 × 10⁷) = 7.27 × 10³ m/s ≈ **7.27 km/s**.

**(c) T:** T = 2πr ÷ v_o = 2 × 3.14 × 7.6 × 10⁶ m ÷ (7.27 × 10³ m/s) = 4.773 × 10⁷ ÷ 7.27 × 10³ = 6.57 × 10³ s ≈ **109 minute** (lagbhag 1 ghanta 50 minute).

**Jaanch:** Ek sundar check: gol orbit mein gravity hi centripetal acceleration hai, to v_o² ÷ r = g_h hona chahiye. (7.27 × 10³)² ÷ 7.6 × 10⁶ = 5.282 × 10⁷ ÷ 7.6 × 10⁶ = 6.95 m/s² ✅. Aur 7.27 km/s < 7.9 km/s ✅ (upar jaane par speed kam hoti hai).

### Example 3: Escape speed aur orbital speed ki tulna

**Sawaal:** (a) Earth ke liye v_e ÷ v_o (surface ke paas) nikalo. (b) Moon ki escape speed lagbhag 2.4 km/s hai. Moon ki surface ke paas gol orbit ki speed kya hogi?

**Formula:** v_e = √2 × v_o (Part A).

**(a)** v_e = √(2gR) = √(2 × 9.8 × 6.4 × 10⁶) = √(1.2544 × 10⁸) = 1.12 × 10⁴ m/s = 11.2 km/s. v_o = √(gR) = 7.92 km/s. Ratio = 11.2 ÷ 7.92 = **1.41**.

**(b)** v_o(Moon) = v_e ÷ √2 = 2.4 ÷ 1.414 = **1.7 km/s** (lagbhag).

**Jaanch:** 1.7 × 1.414 = 2.40 km/s ✅. Aur seedhe: g = 1.6 m/s², R = 1.7 × 10⁶ m se √(gR) = √(1.6 × 1.7 × 10⁶) = √(2.72 × 10⁶) = 1.65 km/s ≈ 1.7 km/s ✅.

### Example 4: Mars ka satellite (data diya hua, R khud nikalo)

**Sawaal:** Mars par g = 3.7 m/s² aur escape speed 5.0 km/s di gayi hai. (a) Mars ki radius nikalo. (b) Mars ki surface se 1.0 × 10⁶ m upar gol orbit mein satellite ki speed aur time nikalo. (R ka maan 3.4 × 10⁶ m lo, π = 3.14)

**(a)** v_e = √(2gR) ko ulta karo: R = v_e² ÷ (2g) = (5.0 × 10³)² ÷ (2 × 3.7) = 2.5 × 10⁷ ÷ 7.4 = 3.38 × 10⁶ m ≈ **3.4 × 10⁶ m** ✅.

**(b)** r = R + h = 3.4 × 10⁶ + 1.0 × 10⁶ = **4.4 × 10⁶ m**.
v_o = √(gR²/r) = √(3.7 × (3.4 × 10⁶)² ÷ 4.4 × 10⁶) = √(3.7 × 1.156 × 10¹³ ÷ 4.4 × 10⁶) = √(9.72 × 10⁶) = 3.12 × 10³ m/s ≈ **3.1 km/s**.
T = 2πr ÷ v_o = 2 × 3.14 × 4.4 × 10⁶ ÷ (3.118 × 10³) = 2.763 × 10⁷ ÷ 3.118 × 10³ = 8.86 × 10³ s ≈ **2.46 ghante**.

**Jaanch:** Mars ke liye √(gR) = √(3.7 × 3.4 × 10⁶) = 3.55 km/s, aur upar jaane par speed kam: 3.1 < 3.55 ✅. Aur Mars ka v_e ÷ v_o(surface) = 5.0 ÷ 3.55 = 1.41 ✅.

### Example 5: Ratio method: ek kalpnik planet

**Sawaal:** Ek kalpnik planet ka mass Earth ka 18 guna aur radius Earth ka 2 guna hai. Earth ke saath compare karke uska surface g, escape speed aur surface par orbital speed nikalo. (Earth: g = 9.8 m/s², v_e = 11.2 km/s, v_o = 7.9 km/s)

**Ratio method:** g ∝ M/R², to g ka ratio = 18 ÷ 2² = 18 ÷ 4 = **4.5**. v_e ∝ √(M/R), to ratio = √(18 ÷ 2) = √9 = **3**. v_o bhi ∝ √(M/R), ratio = **3**.

- g = 4.5 × 9.8 = **44.1 m/s²**
- v_e = 3 × 11.2 = **33.6 km/s**
- v_o = 3 × 7.9 = **23.7 km/s**

**Jaanch:** v_e ÷ v_o = 33.6 ÷ 23.7 = 1.42 ≈ √2 ✅. Aur seedha formula se: √(2 × 44.1 × 12.8 × 10⁶) = √(1.129 × 10⁹) = 33.6 km/s ✅ (R = 2 × 6.4 × 10⁶ = 12.8 × 10⁶ m).

---

## Part C: Paper par chhota Earth (ghar par adult ke saath)

r = R + h ki sabse badi galti tab hoti hai jab hum orbit ki **sahi tasveer** nahi dekhte. Is activity mein tum Earth aur satellites ko **ek hi scale** par banaoge.

**Ghar par adult ke saath** (gol dhaage se bandhi pencil se gol banao; pin ya compass ki nok chubhti hai, isliye adult paas rahe): ek bada chart paper ya zameen par bichhi chadar lo.

- Scale: **1 cm = 1000 km**.
- Earth ki radius 6400 km, to **6.4 cm** ki radius ka gol banao (dhaage ka ek sira centre par pakda, doosre par pencil).
- ISS surface se lagbhag 400 km upar hai: wo surface se sirf **0.4 cm** upar, yani pencil ki ek ya do moti lakeeron jitna. Centre se r = 6.8 cm.
- Geostationary orbit centre se lagbhag 42,000 km hai: **42 cm** ki radius. Poore chart paper par shayad na aaye, adult ke saath poora kaagaz jodkar dekho.

Dekha? ISS "bahut upar" hota nahi hai: wo Earth ki **sataah ke bilkul paas** hai. Isi liye uski gravity lagbhag 89 percent hai (Galti 3 mein). Aur geostationary satellite ke liye "centre se doori" aur "surface se doori" mein bahut farak hai: 36,000 km aur 42,000 km. Isliye hamesha sawaal mein dekho: doori **kahan se** di gayi hai.

```
                 S    <- satellite
                 :
                 :  h = surface se oonchai
                 :
         .-------+-------.   <- Earth ki sataah
        /        :        \
       :         :  R      :
       :         :         :
       :         C         :   C = Earth ka centre
        \                 /
         '---------------'

   r = R + h : S se C tak ki poori doori.
   g_h aur v_o ke formula mein yehi r aata hai, sirf h nahi.
```

> **Figure 6.2** – r aur h ka fark. h surface se satellite tak naapi jaati hai; formula ke liye zaroori r Earth ke centre C se satellite S tak ki doori hai: r = R + h.

---

## Part D: Answer ko parakhne ke teen tareeke (sanity check)

Vasudha ki ghabrahat ka ek ilaaj hai: har answer ke baad **10 second** sochna ki wo mumkin hai ya nahi. Teen aasan checks:

1. **Earth ke gol-orbit satellite ki speed 7.9 km/s se zyada nahi hogi.** Surface ke paas wo sabse tez hai (7.9 km/s), upar jaane par kam hoti jaati hai: ISS par 7.7, geostationary par 3.1 km/s. Agar tumhara answer 15 ya 28 km/s aaya, to r galat daala hai.
2. **Oonchai par g, surface ke g (9.8 m/s²) se zyada nahi hoga.** Agar g_h > 9.8 aaya, to sochna hai ki shayad R/(R + h) ki jagah (R + h)/R likh diya.
3. **Surface ke paas ek chakkar lagbhag 85 minute se kam nahi.** Surface ke paas: 2πR ÷ v_o = 2 × 3.14 × 6.4 × 10⁶ ÷ 7.92 × 10³ = 5.08 × 10³ s ≈ 85 minute. Isse kam time Earth ke gol orbit mein hota hi nahi (exact 84.6 minute).

Figure 6.3 Earth ke aas-paas ki alag alag speed ek seedhi seedhi par rakhta hai.

```
   km/s
   11.2  ====  v_e : isse upar se phenko to Earth ko chhodkar chala jaata hai
     :         (7.9 aur 11.2 ke beech: bandhe huye, par lamba ellipse jaisa path)
    7.9  ====  v_o : surface ke bilkul paas gol orbit
    7.7  ====  ISS (lagbhag 400 km upar)
     :
    3.1  ====  geostationary (lagbhag 36,000 km upar)
     :
     :         v_o se kam par phenko to path zameen par wapas aata hai
    0
```

> **Figure 6.3** – Earth ke aas-paas ki speeds ki seedhi. Gol orbit ki speed jitni upar jaayein, utni kam hoti hai; escape speed sabse upar hai, v_o ka lagbhag √2 guna.

Ellipse wale hisse ki poori baat aage ki class mein aayegi; abhi bas itna samajh lo ki v_o se thodi zyada speed par satellite lamba ellipse banata hai, aur v_e par ya usse upar wo Earth se bahut door chala jaata hai.

---

## Part E: Aam galtiyan (bachke rehna)

Ye wahi galtiyan hain jinse Vasudha ka buzzer round bigda. Har ek ko ek chhote demonstration se pakdo.

**Galti 1: "Bhaari cheez ka g zyada hota hai, isliye wo pehle girti hai"**
Galti ye hai ki force aur acceleration ko ek maan lena. Demonstration: Mars par (g = 3.7 m/s²) do patthar chhodo, 3 kg aur 12 kg ke (hawa ignore karo).

- 3 kg par force = 3 × 3.7 = **11.1 N**, acceleration = 11.1 ÷ 3 = **3.7 m/s²**
- 12 kg par force = 12 × 3.7 = **44.4 N**, acceleration = 44.4 ÷ 12 = **3.7 m/s²**

Force chauguna hai, par mass bhi chauguna hai, to acceleration wahi. **g sirf M aur R par depend karta hai, girne wali cheez ke mass par nahi** (Class 9 mein sikka aur pankh ke saath ye dekha tha: [gravitation-part3.md](../../../class9/physics/gravitation/gravitation-part3.md)). Jaanch: 44.4 ÷ 11.1 = 4 = 12 ÷ 3 ✅.

**Galti 2: "Escape velocity aur orbital velocity ek hi cheez hain"**
Dono alag sawaalon ke jawab hain. Orbital speed: "Gol orbit mein **tikne** ke liye kitni speed?" Escape speed: "**Wapas na aane** ke liye kitni speed?" Demonstration: Earth ke surface ke paas v_o = 7.9 km/s aur v_e = 11.2 km/s. Agar (hawa ko chhodkar, sirf soch mein) surface ke paas ek gend 7.9 km/s se side mein (zameen ke samantar) phenki jaaye, to wo Earth ke chaaro taraf gol ghoomegi (ek satellite ban jaayegi), bahar nahi jaayegi. Agar 11.2 km/s par phenki, to wo chali jaayegi. Dono ke beech 11.2 ÷ 7.9 = 1.41 guna ka farak hai, aur ye √2 isliye aata hai ki v_e = √(2gR) aur v_o = √(gR). Ek aur fark: v_o **orbit ki radius r** par depend karta hai (upar jaao to kam), jabki v_e us jagah ke liye hai jahan se phenka (hum yahan surface wali baat kar rahe hain). Jaanch: √2 × 7.92 = 11.2 km/s ✅.

**Galti 3: "Weightless ka matlab massless"**
Space station mein scale ka reading **0** hota hai, par mass nahi badalta. Demonstration: ISS mein 100 kg ka tool-box tairta hai. Ek astronaut use 20 N ke dhakke se dhakelta hai.

- a = F ÷ m = 20 N ÷ 100 kg = **0.2 m/s²** (bahut dheere hilta hai)
- Agar wahi 20 N ek 2 kg ke dabbe par lage: a = 20 ÷ 2 = **10 m/s²** (jhat se bhaagta hai)

Mass (inertia) wahan bhi poora kaam karta hai: bhaari cheez ko hilana wahan bhi mushkil hai. Aur gravity bhi wahan hai: 70 kg ke astronaut par ISS ke paas g = 9.8 × (6.4 ÷ 6.8)² = 8.68 m/s² se force = 70 × 8.68 = **608 N** (lagbhag 89 percent). Scale 0 dikhata hai kyunki astronaut aur scale dono free fall mein hain (Topic 4, aur Class 9 ka [gravitation-part6.md](../../../class9/physics/gravitation/gravitation-part6.md)), gravity nahi hai isliye nahi. Jaanch: 608 ÷ 70 = 8.68 ✅.

**Galti 4: "Oonchai h ko hi doori maan lena" (r = R + h ki galti)**
Sabse classic slip. Demonstration: Ek satellite Earth ki surface se h = 1.2 × 10⁶ m upar hai (Part B ka example 2). Teen tareeke dekho:

- **Sahi:** r = R + h = 7.6 × 10⁶ m. v_o = 7.27 km/s ✅.
- **Galti A (sirf h liya):** r = 1.2 × 10⁶ m. Tab v_o = √(9.8 × 4.096 × 10¹³ ÷ 1.2 × 10⁶) = √(3.345 × 10⁸) = **18.3 km/s**, jo 11.2 km/s ki escape speed se bhi zyada hai! Ye bataata hai ki kuch gadbad hai. Aur g_h = 9.8 × (6.4 ÷ 1.2)² = 9.8 × 28.4 = **279 m/s²** (lagbhag), jo surface ke g se bhi bahut zyada hai: turant sanity check fail.
- **Galti B (h bhool gaye, sirf R liya):** r = R = 6.4 × 10⁶ m. Tab v_o = 7.92 km/s, jo surface ke orbit ki speed hai: 1.2 × 10⁶ m upar ki speed 7.27 km/s se lagbhag 9 percent zyada.

Isliye har orbit wale sawal mein pehli line likho: **r = R + h**. (Class 9 ke [gravitation-part6.md](../../../class9/physics/gravitation/gravitation-part6.md) mein "2R par doori" wali galti isi parivaar ki hai: centre se naapo.) Jaanch: 7.6 × 10⁶ = 6.4 × 10⁶ + 1.2 × 10⁶ ✅.

---

## Kahani ka jawab

Ghar pahunchkar Vasudha ne apni copy mein teen sawal likhe aur Mr. Kothavale ke saath ek ek karke hal kiye:

1. Bhaari gend: force zyada, par mass bhi zyada, to g wahi (Galti 1 ka Mars wala example).
2. Escape aur orbital: 11.2 aur 7.9 km/s, dono alag sawaal, ratio √2 (Galti 2).
3. Astronaut: scale 0, par mass wahi aur gravity lagbhag 89 percent (Galti 3).

"Chacha, ab mujhe samajh aaya ki buzzer se pehle **ruk kar ek sawal poochna** hai: ye force ki baat hai ya acceleration ki, tikne ki speed ki baat hai ya wapas na aane ki, gravity hai ya scale ka reading." Mr. Kothavale ne muskurakar kaha, "Yahi to physics hai, Vasudha: formula yaad rakhna aur sawal ko padhna, dono ek saath." Agle din finals mein Team Chandrayaan ne buzzer round mein sirf ek galti ki, aur wo bhi 'r = R + h' wale sawal par nahi.

---

## Quick Recap

- Pehle teen sawal: **kaun sa pind, kahan (surface ya oonchai, r = R + h), kya chahiye**.
- **Kepler 3:** T² ∝ r³. **g oonchai par:** g_h = g (R/(R + h))². **g gehrai par:** g_d = g (1 − d/R). **Escape:** v_e = √(2gR). **Orbit:** v_o = √(gR²/r), T = 2πr/v_o.
- Surface par v_e = √2 × v_o (Earth: 11.2 ÷ 7.9 = 1.41).
- Gol orbit mein gravity hi centripetal force hai: v_o² ÷ r = g_h. Satellite ka apna mass kisi formula mein nahi aata.
- **Chaar galtiyan:** bhaari cheez ka g zyada nahi; v_e aur v_o alag; weightless massless nahi; r = R + h, sirf h nahi.
- **Sanity check:** Earth ke satellite ki speed 7.9 km/s se kam, g_h 9.8 m/s² se kam, surface ke paas ek chakkar lagbhag 85 minute.
- **Ratio method:** g ∝ M/R², v_e ∝ √(M/R).

---

## Practice Questions

(Sab sawal angrezi mein. Jahan zaroorat ho π = 3.14 lo, 1 AU = 1.5 × 10¹¹ m, 1 saal = 3.15 × 10⁷ s, Earth ke liye g = 9.8 m/s² aur R = 6.4 × 10⁶ m.)

1. A comet takes 64 years to go once around the Sun. Using Kepler's third law, find its average distance from the Sun in AU and in metres.

2. A hypothetical planet is at an average distance of 25 AU from the Sun. Find (a) its time period in years, (b) its orbital speed in km/s, taking its path as a circle.

3. A spacecraft orbits the Moon in a circle at a height of 3.0 × 10⁵ m above the surface. For the Moon take g = 1.6 m/s² and R = 1.7 × 10⁶ m. Find the orbital speed in km/s and the time for one orbit in hours.

4. A satellite orbits Mars at a height of 6.0 × 10⁵ m above the surface. For Mars take g = 3.7 m/s² and R = 3.4 × 10⁶ m. Find (a) the value of g at that height, (b) the orbital speed, (c) the time for one orbit in hours. Verify that v_o² ÷ r equals the g found in part (a).

5. A hypothetical planet has mass 9.6 × 10²⁴ kg and radius 8.0 × 10⁶ m. Taking G = 6.67 × 10⁻¹¹ N m²/kg², find (a) g on its surface, (b) its escape speed, (c) the orbital speed just above its surface. Show that (b) divided by (c) is about 1.41.

6. A moon like Europa has g = 1.3 m/s² and radius 1.56 × 10⁶ m. Find its escape speed. How does it compare with the Moon's escape speed of about 2.4 km/s? What would a 60 kg person weigh there?

7. A satellite of mass 300 kg and another of mass 1200 kg orbit the Earth at the same height. Which has the greater orbital speed? Which has the greater gravitational force on it? Give a reason for each.

8. A student calculated the orbital speed of a satellite 5.0 × 10⁵ m above the Earth's surface as v = √(gR² ÷ h) and got 28.3 km/s. Find the mistake and the correct speed.

9. A satellite moves in a circle whose radius, measured from the Earth's centre, is 2.5 times the Earth's radius. Find (a) its height above the surface, (b) g at that height, (c) its orbital speed using v² ÷ r = g, and (d) check (c) by the ratio method starting from 7.9 km/s at the surface.

10. An astronaut of mass 80 kg floats in a spacecraft 400 km above the Earth, where g ≈ 8.68 m/s². (a) What is the gravitational force on her? (b) What does a weighing scale read? (c) She pushes a floating 400 kg equipment box with a force of 40 N. Find its acceleration.

11. State whether each statement is true or false, with a reason.
    (a) A rocket must reach 11.2 km/s to put a satellite in a circular orbit 400 km above the Earth.
    (b) The orbital speed of an Earth satellite increases as its height increases.
    (c) The value of g at a height h above the surface is more than 9.8 m/s².
    (d) Weightless astronauts have no mass.

12. Two moons orbit the same planet. Moon A has an orbital radius r and a period of 8 days. Moon B has an orbital radius 4r. Find (a) the period of Moon B, (b) the ratio of the orbital speed of B to that of A.

13. Match each question to the formula you would use. (i) Time for a planet to go round the Sun. (ii) Speed to put a satellite in a circular orbit. (iii) Speed so that a probe never returns. (iv) The value of g 500 km above the ground. (v) Time for one orbit once the speed is known.

### Answers

1. **Formula:** Kepler 3, T² = r³ (T saal mein, r AU mein). T = 64 saal.
   r³ = 64² = 4096, to r = ∛4096 = **16 AU**. Metre mein: 16 × 1.5 × 10¹¹ = **2.4 × 10¹² m**.
   Jaanch: 16³ = 4096 = 64² ✅.

2. **Formula:** T² = r³; v = 2πr ÷ T.
   (a) T² = 25³ = 15,625, T = √15,625 = **125 saal**.
   (b) r = 25 × 1.5 × 10¹¹ = 3.75 × 10¹² m; T = 125 × 3.15 × 10⁷ = 3.9375 × 10⁹ s. v = 2 × 3.14 × 3.75 × 10¹² ÷ (3.9375 × 10⁹) = 2.355 × 10¹³ ÷ 3.9375 × 10⁹ = 5.98 × 10³ m/s ≈ **5.98 km/s**.
   Jaanch: 125² = 15,625 = 25³ ✅; Earth ki 29.9 km/s ka 1 ÷ √25 = 1 ÷ 5 hissa = 5.98 km/s ✅.

3. **Given:** g = 1.6 m/s², R = 1.7 × 10⁶ m, h = 3.0 × 10⁵ m. r = R + h = **2.0 × 10⁶ m**.
   **Formula:** v_o = √(gR²/r), T = 2πr ÷ v_o.
   v_o = √(1.6 × (1.7 × 10⁶)² ÷ 2.0 × 10⁶) = √(1.6 × 2.89 × 10¹² ÷ 2.0 × 10⁶) = √(2.312 × 10⁶) = 1.52 × 10³ m/s = **1.52 km/s**.
   T = 2 × 3.14 × 2.0 × 10⁶ ÷ 1.52 × 10³ = 1.256 × 10⁷ ÷ 1.52 × 10³ = 8.26 × 10³ s = **2.30 ghante**.
   Jaanch: surface par √(gR) = 1.65 km/s, aur 1.52 < 1.65 ✅ (upar jaane par speed kam).

4. **Given:** g = 3.7 m/s², R = 3.4 × 10⁶ m, h = 6.0 × 10⁵ m. r = 3.4 × 10⁶ + 6.0 × 10⁵ = **4.0 × 10⁶ m**.
   (a) g_h = 3.7 × (3.4 ÷ 4.0)² = 3.7 × 0.7225 = **2.67 m/s²**.
   (b) v_o = √(g_h × r) = √(2.673 × 4.0 × 10⁶) = √(1.069 × 10⁷) = 3.27 × 10³ m/s = **3.27 km/s**.
   (c) T = 2 × 3.14 × 4.0 × 10⁶ ÷ 3.27 × 10³ = 2.512 × 10⁷ ÷ 3.27 × 10³ = 7.68 × 10³ s = **2.13 ghante**.
   Jaanch: v_o² ÷ r = (3.27 × 10³)² ÷ 4.0 × 10⁶ = 1.069 × 10⁷ ÷ 4.0 × 10⁶ = 2.67 m/s² ✅.

5. **Formula:** g = GM/R², v_e = √(2GM/R), v_o = √(GM/R).
   GM = 6.67 × 10⁻¹¹ × 9.6 × 10²⁴ = 6.403 × 10¹⁴ N m²/kg.
   (a) g = 6.403 × 10¹⁴ ÷ (8.0 × 10⁶)² = 6.403 × 10¹⁴ ÷ 6.4 × 10¹³ = **10.0 m/s²**.
   (b) v_e = √(2 × 6.403 × 10¹⁴ ÷ 8.0 × 10⁶) = √(1.601 × 10⁸) = 1.265 × 10⁴ m/s = **12.7 km/s**.
   (c) v_o = √(6.403 × 10¹⁴ ÷ 8.0 × 10⁶) = √(8.004 × 10⁷) = 8.95 × 10³ m/s = **8.95 km/s**.
   Jaanch: 12.65 ÷ 8.95 = 1.41 ✅. Aur √(gR) = √(10.0 × 8.0 × 10⁶) = 8.94 km/s ✅.

6. **Formula:** v_e = √(2gR). v_e = √(2 × 1.3 × 1.56 × 10⁶) = √(4.056 × 10⁶) = 2.01 × 10³ m/s ≈ **2.0 km/s**.
   Moon se compare: 2.0 ÷ 2.4 = 0.83, yani Moon ki escape speed se lagbhag 17 percent kam. Weight = mg = 60 × 1.3 = **78 N**.
   Jaanch: 78 ÷ 60 = 1.3 N/kg ✅ aur 2.0 km/s Earth ke 11.2 km/s se bahut kam ✅.

7. Dono ki orbital speed **barabar** hai. v_o = √(gR²/r) mein satellite ka mass hai hi nahi. Par gravitational force F = m × g_h zyada **1200 kg wale par** hai (chauguna, kyunki mass chauguna). Jaanch: force ratio = 1200 ÷ 300 = 4 ✅ aur acceleration (yani g_h) dono ki wahi hai.

8. Galti: unhone r ki jagah sirf **h = 5.0 × 10⁵ m** liya. Sahi r = R + h = 6.4 × 10⁶ + 5.0 × 10⁵ = **6.9 × 10⁶ m**.
   Sahi v_o = √(9.8 × 4.096 × 10¹³ ÷ 6.9 × 10⁶) = √(5.817 × 10⁷) = 7.63 × 10³ m/s ≈ **7.63 km/s**.
   Jaanch: 28.3 km/s escape speed (11.2) se bhi zyada tha, jo sanity check mein hi pakda jaata; sahi 7.63 < 7.9 ✅.

9. (a) r = 2.5 R = 2.5 × 6.4 × 10⁶ = 1.6 × 10⁷ m. Oonchai h = r − R = 1.5 R = **9.6 × 10⁶ m**.
   (b) g_h = 9.8 × (1 ÷ 2.5)² = 9.8 ÷ 6.25 = **1.57 m/s²**.
   (c) v_o = √(g_h × r) = √(1.568 × 1.6 × 10⁷) = √(2.509 × 10⁷) = 5.01 × 10³ m/s ≈ **5.01 km/s**.
   (d) Ratio method: v_o ∝ 1/√r, to v_o = 7.92 ÷ √2.5 = 7.92 ÷ 1.581 = **5.01 km/s** ✅ (dono tareeke ek jaise).

10. (a) F = m g = 80 × 8.68 = **694 N** (lagbhag 6.9 × 10² N).
    (b) Scale ka reading **0 N**, kyunki astronaut aur scale dono free fall mein hain.
    (c) a = F ÷ m = 40 N ÷ 400 kg = **0.10 m/s²** (box ka mass wahan bhi poora asar karta hai).
    Jaanch: 694 ÷ 80 = 8.68 ✅, 0.10 × 400 = 40 N ✅.

11. (a) **False** ❌. Satellite ko lagbhag 7.7 km/s ki sideways speed chahiye (ISS ki speed), 11.2 km/s nahi. 11.2 km/s escape ke liye hai.
    (b) **False** ❌. Upar jaane par v_o kam hoti hai (v_o ∝ 1/√r): ISS 7.7 km/s, geostationary 3.1 km/s.
    (c) **False** ❌. g_h = g (R/(R + h))² hamesha 9.8 se kam hota hai.
    (d) **False** ❌. Mass wahi rehta hai (Galti 3: 20 N ke dhakke par 100 kg ka box sirf 0.2 m/s² se tez hota hai).

12. **Formula:** Kepler 3: T² ∝ r³.
    (a) (T_B ÷ T_A)² = (r_B ÷ r_A)³ = 4³ = 64, to T_B ÷ T_A = √64 = 8, yani T_B = 8 × 8 = **64 din**.
    (b) Speed v = 2πr ÷ T, to v_B ÷ v_A = (4r ÷ 64) ÷ (r ÷ 8) = (4 ÷ 64) × (8 ÷ 1) = **1/2**. Door wala moon aadhi speed se chalta hai.
    Jaanch: v ∝ 1/√r = 1/√4 = 1/2 ✅.

13. (i) Kepler 3: T² ∝ r³. (ii) Orbital speed: v_o = √(GM/r) = √(gR²/r), r = R + h. (iii) Escape speed: v_e = √(2GM/R) = √(2gR). (iv) g_h = g (R/(R + h))², h = 5.0 × 10⁵ m, to R + h = 6.9 × 10⁶ m. (v) T = 2πr ÷ v_o.
    Jaanch: (iv) ka number: g_h = 9.8 × (6.4 ÷ 6.9)² = 9.8 × 0.860 = 8.43 m/s² ✅ (9.8 se kam).

---

# Chapter Wrap-up: Gravitation II and Space Missions

| Topic | Kya seekha | Ek line |
|---|---|---|
| 1. Kepler Ke Teen Niyam | Planet ellipse mein chalta hai (Sooraj ek focus par), barabar time mein barabar area, T² ∝ r³ | Sooraj ke paas planet tez chalta hai, aur door wala dheere aur zyada time mein |
| 2. g Kahan Kitna? | g oonchai par g (R/(R + h))², gehrai par g (1 − d/R); Moon aur doosre grah par g; mass nahi badalta | g centre se doori par depend karta hai; weight badalta hai, mass nahi |
| 3. Escape Velocity | v_e = √(2GM/R) = √(2gR), Earth ke liye lagbhag 11.2 km/s, cheez ke mass par depend nahi | Moon ki v_e kam hai, isliye uska atmosphere nahi tikta |
| 4. Satellite Ka Orbit | v_o = √(GM/r), T = 2πr/v_o; paas wala tez, geostationary 24 h, weightlessness free fall hai | Satellite gir raha hai aur Earth ko miss kar raha hai |
| 5. Rocket Aur Bharat Ke Antariksh Mission | Rocket action aur reaction se chalta hai, vacuum mein bhi; ISRO ke mission | Rocket ko dhakelne ke liye hawa nahi chahiye, aur Chandrayaan-3 ne Moon ke south pole ke paas soft landing ki |
| 6. Sab Kuch Mila Kar | Kaun sa formula kab, milaye hue sawal, chaar galtiyan, sanity check | r = R + h; v_e = √2 v_o; weightless massless nahi; g mass par depend nahi |

---

Vasudha ne is chapter mein dekha ki Kepler ke ellipse se leke Chandrayaan ki landing tak, sab kuch ek hi gravity ke formulas par chalta hai, bas sahi sawal poochna aana chahiye. Ab jab bhi kisi mission ki khabar aaye, tum uski speed aur time khud check kar sakte ho. Tum ye kar sakte ho!

Agle chapter (Class 10 Physics Chapter 2, Moments, Centre of Gravity and Circular Motion) mein dekhenge ki bus mod par kyun ulatne lagti hai aur racing car ko banked track kyun chahiye.
