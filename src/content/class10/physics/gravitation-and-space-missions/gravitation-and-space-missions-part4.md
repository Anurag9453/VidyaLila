# Chapter: Gravitation II and Space Missions (Part 4)

> **Class:** 10 | **Subject:** Physics
> **Ye file [gravitation-and-space-missions-part3.md](gravitation-and-space-missions-part3.md) se aage chalti hai** (wahan escape velocity: Earth se hamesha ke liye jaane ke liye lagbhag 11.2 km/s). Chapter ki shuruaat: [gravitation-and-space-missions.md](gravitation-and-space-missions.md). Recall ke liye: Class 9 ka satellites wala topic [gravitation-part6.md](../../../class9/physics/gravitation/gravitation-part6.md), circular motion [motion-part7.md](../../../class9/physics/motion/motion-part7.md), aur F = m a [force-and-laws-of-motion-part6.md](../../../class9/physics/force-and-laws-of-motion/force-and-laws-of-motion-part6.md).
> **Topics covered in this file:**
> 4. Satellite Ka Orbit: Kitna Tez, Kitna Time

---

# Topic 4: Satellite Ka Orbit: Kitna Tez, Kitna Time

Topic 3 mein humne dekha ki Earth se **hamesha ke liye** nikalne ke liye lagbhag 11.2 km/s chahiye. Isse kam raftaar par cheez Earth se bandhi rehti hai. Ek satellite bhi aisi hi bandhi hui cheez hai, par ek khaas tareeke se: wo **gir rahi hai aur phir bhi girti nahi**. Class 9 mein humne ye idea Newton ke cannon se samjha tha, aur ek pattern yaad rakha tha: **jitna paas, utna tez aur utna kam time**. Tab kaha gaya tha ki "poora hisaab aage ki class mein aayega." Aaj wo wada poora hoga. Hum ek hi equation se nikaalenge ki satellite kitna tez chalta hai, ek chakkar mein kitna time lagata hai, aur wo ek jagah tika hua kaise dikhta hai.

---

## Chhat ki dish aur tikka hua satellite

Mr. Phadnis apne bhanje Sharad ke saath shaam ko ghar ki chhat par aaye the (chhat ki mundair se door, adult ke saath). Chhat ke ek kone mein DTH ki dish lagi thi, jo hamesha **aasmaan ke ek hi dhundhle se hisse** ki taraf muh kiye rehti thi. Sharad ne dekha ki Sooraj din bhar ek jagah se doosri jagah chala gaya, taare raat bhar ghoome, par dish **ek inch bhi nahi hili**.

"Mama, dish kis cheez ko dekh rahi hai?" Sharad ne poochha. "Ek satellite ko, jo Earth se lagbhag 36,000 km upar hai," Mr. Phadnis bole.

"Par Mama, satellite to Earth ke chaaro taraf ghoomte hain na? Phir wo ek hi jagah tika kaise reh sakta hai? Aur agar tika hua hai, to gir kyun nahi jaata?"

Mr. Phadnis hanse. "Dono sawaal ek hi jawab se sulajhte hain, Sharad. Wo **tika hua nahi hai**: wo lagbhag 3 km har second ki raftaar se bhaag raha hai. Aur wo **gir bhi raha hai**: har pal. Bas uski raftaar aur uski doori **bilkul sahi jodi** mein hain. Chalo, wo jodi hum hisaab se nikaalte hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Orbit** | Wo raasta jis par ek cheez gravity ke asar mein dusri cheez ke chaaro taraf ghoomti hai | ISS ka Earth ke chaaro taraf ka raasta |
| **Orbital speed (v_o)** | Orbit mein tikne ke liye jo raftaar chahiye | ISS ki lagbhag 7.7 km/s |
| **Time period (T)** | Ek poore chakkar ka time | ISS ka lagbhag 92 se 93 minute |
| **Centripetal force** | Circle mein ghumti cheez par kendra ki taraf lagne wala force | Orbit mein gravity |
| **LEO** | Low Earth Orbit: surface se lagbhag 160 se 2,000 km upar | ISS, remote sensing satellites |
| **MEO** | Medium Earth Orbit: lagbhag 2,000 se 35,000 km | GPS jaise navigation satellites (lagbhag 20,000 km) |
| **GEO** | Geostationary orbit: lagbhag 36,000 km upar | TV aur INSAT jaise satellites |
| **Geostationary satellite** | Wo satellite jo Earth se dekhne par aasmaan mein ek hi jagah tika dikhta hai | Ghar ki dish ka satellite |
| **Polar orbit** | Dono dhruvon (poles) ke upar se guzarne wala orbit | Earth ki tasveer lene wale satellite |
| **Sun-synchronous orbit** | Aisa lagbhag polar orbit jisme satellite har baar ek jagah par roz ek hi sthaniya (local) samay par pahunchta hai | Remote sensing satellites |
| **Apparent weightlessness** | Weight "mehsoos" na hona, jabki gravity lag rahi hoti hai | Orbit mein tairta astronaut |
| **Space debris** | Space mein ghoomta bekaar kachra: purane satellite, rocket ke tukde | Ek chhota sa bolt |

---

## Part A: Gravity hi wo force hai jo satellite ko ghumata hai

Class 9 mein motion ke chapter mein dekha tha ki circle mein ghumti cheez ki velocity ki disha har pal badalti hai, isliye usme acceleration hoti hai, aur wo **circle ke kendra ki taraf** hoti hai. Aur jahan acceleration hai, wahan force bhi chahiye jo use kendra ki taraf kheenche. Wahan hamne uski value nahi nikali thi. Ab hum bina nikaale ye stated result use karenge: m kg ki cheez jo r radius ke circle mein v raftaar se ghoom rahi hai, uske liye kendra ki taraf force

> F = m v² / r

Dhaage se bandhe patthar mein ye force dhaaga deta hai. Satellite mein ye force kaun deta hai? Koi dhaaga to hai nahi. Wo force hai **Earth ki gravity**: Topic 2 ki tarah satellite Earth ke **kendra** se r = R + h door hai (R Earth ki radius, h surface se oonchai).

```
         . - - - - - - S - - - -> v - - - - .
      .'                :                      '.
    /                   : F  (gravity,           \
   :                    :    kendra ki taraf)     :
   :                    v                         :
   :              .-----------.                   :
   :             (   Earth  *  )                  :
   :              '-----------'                   :
    \                                            /
      '.                                      .'
         ' - - - - - - - - - - - - - - - - '
```

> **Figure 4.1** – Satellite S Earth ke kendra * se r door hai. Gravity F hamesha kendra ki taraf hai, aur velocity v orbit ki tangent par (aage ki taraf). F aur v ek doosre se sahi kone (90 degree) par hain.

Ab dono ko barabar rakho: **gravity wahi centripetal force hai**.

> m v² / r = G M m / r²

Dono taraf m hai, kat gaya. Ek r bhi kat jaata hai:

> v² = G M / r, yaani **v_o = √(G M / r)**

Class 9 ki tarah g = G M / R² se G M = g R² hota hai, to ek aur roop:

> **v_o = √(g R² / r)** (aur r = R + h)

Ek ghumne ka chakkar 2πr ki doori ka hota hai, to time period:

> **T = 2πr / v_o**

Teen baatein dhyan se dekho, kyunki yahi Class 9 ke "wade" ka jawab hain:

1. **r jitna chhota, v_o utna bada.** r neeche root ke bhaag mein hai: paas wale satellite ko tez chalna hi padta hai, kyunki wahan gravity zyada hai aur use circle mein modne ke liye zyada force chahiye. Door wale par gravity kam hai, wo dheere ghoomta hai.
2. **T = 2πr / v_o:** paas wale ka raasta chhota bhi hai aur raftaar bhi zyada hai, isliye uska time bahut kam. Door wale ka raasta lamba bhi hai aur raftaar bhi kam, isliye time bahut zyada. (Topic 1 ka Kepler ka T² ∝ r³ yahi hai: v_o ka formula T mein daalo to T² = 4π²r³ / (G M) aata hai: 4π² aur G M fixed hain, to T² sirf r³ ke saath badalta hai.)
3. **Satellite ka apna mass m formula se kat gaya.** 100 kg ka satellite aur 10,000 kg ka satellite, agar ek hi oonchai par hain, to **ek hi raftaar** aur **ek hi time period**. Bhaari par gravity zyada hai, par use modna bhi utna hi mushkil hai, bilkul Class 9 ke free fall (g mass par nahi) ki tarah.

**Ek activity (ghar par adult ke saath):** khuli jagah par, jahan paas mein koi na ho, ek halki kapde ki gend ya mudi hui sock ko lagbhag 50 cm ke dhaage se bandho. Adult ke saath, dhire se use apne aas-paas ghumao. Dhaaga **kendra ki taraf** kheench raha hai, aur gend bahar nikalne ko karti hai. Tez ghumane par dhaage ka kheechaav zyada mehsoos hoga (F = m v² / r mein v bada to F bada). Satellite mein dhaaga nahi, **gravity** hai. (Sirf halki gend lo: koi kadi cheez ya bhaari cheez nahi, aur kabhi kisi ke paas nahi.)

### Example 1. Earth ki sataah ke bilkul paas orbit

**Sawaal:** Agar Earth ki sataah ke bilkul paas koi satellite (hawa ke bina, kalpana) ghoomta, to uski raftaar aur time period kitna hota? (g = 9.8 m/s², R = 6.4 × 10⁶ m)

**Given:** r = R = 6.4 × 10⁶ m, g = 9.8 m/s²
**Find:** v_o aur T
**Formula:** v_o = √(g R² / r) = √(g R) (kyunki r = R), T = 2πr / v_o
**Substitution:**
- g R = 9.8 m/s² × 6.4 × 10⁶ m = 6.272 × 10⁷ m²/s²
- v_o = √(6.272 × 10⁷) m/s = 7920 m/s lagbhag = **7.9 km/s**
- 2πr = 2 × 3.14 × 6.4 × 10⁶ m = 4.02 × 10⁷ m
- T = 4.02 × 10⁷ m ÷ 7920 m/s = 5075 s lagbhag = **84.6 minute**, yani lagbhag 85 minute

**Jaanch:** unit: √(m/s² × m) = √(m²/s²) = m/s ✅. Aur v_o × T = 7920 m/s × 5075 s = 4.02 × 10⁷ m = circumference ✅.

Ye **7.9 km/s** hai, wahi "sataah ke paas ki orbital speed" jo aksar likhi jaati hai. Asli satellite hawa ki wajah se sataah ke itna paas nahi ghoom sakta (hawa use rok degi), isliye wo kam se kam lagbhag 160 km upar hota hai, aur wahan T thoda zyada, lagbhag 88 minute hoga. Class 9 ka "lagbhag 90 minute" yahi tha.

### Raftaar aur time: ek tulna

Neeche ki table mein wahi formula alag-alag jagah ke liye lagaya gaya hai. (Pehli teen rows mein v_o = √(g R² / r) liya hai; GEO aur Moon ki rows mein v_o = √(G M / r), kyunki wahan G aur M seedhe diye gaye hain. Dono tareekon mein farak 1 percent se bahut kam hai.)

| Jagah | r (kendra se, m) | v_o (km/s) | T |
|---|---|---|---|
| Sataah ke paas (kalpana) | 6.4 × 10⁶ | 7.92 | lagbhag 85 minute |
| ISS (surface se 400 km) | 6.8 × 10⁶ | 7.68 | lagbhag 92 se 93 minute |
| Surface se 1000 km | 7.4 × 10⁶ | 7.37 | lagbhag 105 minute |
| Geostationary (36,000 km) | 4.2 × 10⁷ | 3.09 | lagbhag 24 ghante |
| Moon | 3.84 × 10⁸ | 1.02 | lagbhag 27.3 din |

Pattern saaf hai: r badhta gaya, v_o ghatti gayi, T badhta gaya. Class 9 ka "wada" poora hua.

---

## Part B: ISS ki raftaar, time aur "girna"

International Space Station (ISS) Earth se lagbhag 400 km upar ghoomta hai. Ek hi formula se uske ek ek number ki jaanch karte hain.

### Example 2. ISS ki raftaar, time period aur ek din ke chakkar

**Given:** h = 400 km = 4 × 10⁵ m, R = 6.4 × 10⁶ m, g = 9.8 m/s²
**Find:** v_o, T, aur ek din (24 h) mein chakkar
**Formula:** r = R + h, v_o = √(g R² / r), T = 2πr / v_o
**Substitution:**
- r = 6.4 × 10⁶ + 0.4 × 10⁶ = **6.8 × 10⁶ m** (dhyan: kendra se naapa)
- g R² = 9.8 × (6.4 × 10⁶)² = 9.8 × 4.096 × 10¹³ = 4.014 × 10¹⁴ m³/s²
- v_o² = 4.014 × 10¹⁴ ÷ 6.8 × 10⁶ = 5.903 × 10⁷ m²/s², to v_o = **7683 m/s lagbhag = 7.7 km/s**
- 2πr = 2 × 3.14 × 6.8 × 10⁶ = 4.27 × 10⁷ m
- T = 4.27 × 10⁷ ÷ 7683 = **5560 s lagbhag = 92.7 minute**
- Din mein chakkar = 1440 minute ÷ 92.7 minute = **15.5** lagbhag

**Answer:** v_o lagbhag 7.7 km/s (yani lagbhag 27,700 km/h), T lagbhag 92 se 93 minute, din mein lagbhag 15 se 16 chakkar.

**Jaanch:** 7683 m/s × 5560 s = 4.27 × 10⁷ m ✅. Aur 15.5 × 92.7 min = 1437 min, lagbhag 1440 min = 1 din ✅. Ye Class 9 ke "lagbhag 90 minute" aur "din mein lagbhag 16 chakkar" se milta hai: wahan hamne ise sirf yaad rakha tha, aaj nikaal liya. (ISS mein astronaut isliye roz lagbhag 15 se 16 baar Sooraj nikalte aur doobte dekhte hain.)

### Example 3. Satellite roz "girta" kitna hai?

Class 9 mein kaha tha: satellite gir raha hai, par Earth ko miss karta rehta hai. Ab isko number mein dekhte hain.

**Given:** ISS par g_h = g (R / (R + h))² (Topic 2) aur v_o = 7683 m/s
**Find:** ek second mein ISS kitna "girta" hai, aur Earth ki sataah us beech kitni "mudti" hai
**Formula:** neeche girne ki doori s = ½ g_h t² (Class 9 free fall), aur g_h = g (R / r)²
**Substitution:**
- g_h = 9.8 × (6.4 ÷ 6.8)² = 9.8 × 0.8858 = **8.68 m/s²**
- 1 second mein girna: s = ½ × 8.68 × 1² = **4.34 m**
- 1 second mein ISS 7683 m aage jaata hai. Itni doori par Earth ki gol sataah (r = 6.8 × 10⁶ m ke circle par) kendra ki taraf: (7683)² ÷ (2 × 6.8 × 10⁶) = 5.903 × 10⁷ ÷ 1.36 × 10⁷ = **4.34 m**

**Answer:** ISS 1 second mein 4.34 m "girta" hai, aur utni hi Earth ki sataah 7.7 km aage jaane mein mud jaati hai. Isliye ISS kabhi sataah se nahi takraata.

**Jaanch:** dono 4.34 m ✅. Ye bhi saabit hua ki v_o²/r = g_h: 7683² ÷ (6.8 × 10⁶) = 8.68 m/s² ✅. Yani orbit mein **centripetal acceleration wahi hai jo us oonchai par g hai**.

### Example 4. Mass ka asar nahi: do satellite, ek oonchai

**Sawaal:** ISS ki oonchai par do satellite hain: 200 kg aur 2000 kg ke. Dono par gravity ka force aur dono ki acceleration nikalo.

**Given:** m₁ = 200 kg, m₂ = 2000 kg, g_h = 8.68 m/s²
**Find:** F aur a
**Formula:** F = m g_h, a = F ÷ m
**Substitution:**
- F₁ = 200 × 8.68 = **1736 N**, F₂ = 2000 × 8.68 = **17,360 N**
- a₁ = 1736 ÷ 200 = **8.68 m/s²**, a₂ = 17,360 ÷ 2000 = **8.68 m/s²**

**Answer:** force 10 guna alag, par acceleration (aur isliye raftaar v_o aur T) barabar.

**Jaanch:** F₂ ÷ F₁ = 10 = m₂ ÷ m₁ ✅, aur dono a barabar ✅.

### Example 5. Radius 4 guna ho jaaye

**Sawaal:** ISS ke orbit (r = 6.8 × 10⁶ m) se 4 guna bade radius ke orbit par satellite ki raftaar aur time period ISS se kitne guna?

**Formula:** v_o ∝ 1/√r, T = 2πr / v_o (to T ∝ r^1.5, yani T² ∝ r³)
**Substitution:**
- r' = 4r = 2.72 × 10⁷ m
- v_o' = √(4.014 × 10¹⁴ ÷ 2.72 × 10⁷) = √(1.476 × 10⁷) = **3842 m/s** = 3.84 km/s
- v_o' ÷ v_o = 3842 ÷ 7683 = **0.5**
- T' = 2π × 2.72 × 10⁷ ÷ 3842 = 4.45 × 10⁴ s = **12.4 ghante**
- T' ÷ T = 44,500 ÷ 5560 = **8**

**Answer:** raftaar aadhi, time 8 guna.

**Jaanch:** √4 = 2 (isliye v aadhi) ✅ aur 4 × 2 = 8 (raasta 4 guna, raftaar aadhi, to time 4 × 2 = 8 guna) ✅.

---

## Part C: Orbit ke parivaar: LEO, MEO, GEO aur polar

Satellite ka kaam kya hai, uske hisaab se uska orbit chuna jaata hai. Figure 4.2 oonchai ke hisaab se parivaar dikhata hai (scale par nahi).

```
   Surface se oonchai (lagbhag; chitra scale par nahi)

   36,000 km   - - - - - - - - - - - - - - - - - -   GEO
                                                      geostationary, T = 24 h
       :                                              (communication, TV, weather)
       :   MEO: lagbhag 2,000 se 35,000 km
       :   (navigation, jaise GPS lagbhag 20,000 km)
       :
    2,000 km   - - - - - - - - - - - - - - - - - -
       :   LEO: lagbhag 160 se 2,000 km
       :   (ISS 400 km, remote sensing 600 se 800 km)
     160 km    - - - - - - - - - - - - - - - - - -
   ======================== Earth ki sataah ===========
```

> **Figure 4.2** – Satellite orbits ka parivaar oonchai ke hisaab se. LEO sabse paas hai (tez, kam time), GEO sabse door (dheere, lagbhag 24 ghante). Chitra scale par nahi hai.

| Orbit | Lagbhag oonchai | Time period | Mukhya kaam |
|---|---|---|---|
| LEO | 160 se 2,000 km | lagbhag 90 se 130 minute | ISS, Earth ki tasveer (remote sensing), kai internet satellite |
| MEO | 2,000 se 35,000 km | kuch ghante | navigation satellite (GPS jaise) |
| GEO | lagbhag 36,000 km | 24 ghante | TV, phone aur data communication, mausam (INSAT jaise); India ke NavIC navigation satellite bhi isi oonchai par (geostationary aur usi jaise 24 ghante wale jhuke orbit mein) hain |
| Polar / sun-synchronous | lagbhag 600 se 800 km (LEO mein) | lagbhag 100 minute | Earth ka nakshaa, kheti, jangal aur badal ki tasveer |

### Polar aur sun-synchronous orbit

Polar orbit dono dhruvon ke upar se guzarta hai (Figure 4.3). Satellite jab ek chakkar lagata hai, tab Earth neeche apni dhuri par ghoom jaati hai, isliye agle chakkar mein satellite **kisi aur** hisse ke upar hota hai. Kai chakkar ke baad wo poori Earth ko dekh leta hai.

```
                    N
            . - - - : - - - .
          .'      .-:-.       '.
         /       (  :  )        \
        :        (--*--)         :    * = Earth ka kendra
         \       (  :  )        /     orbit dono dhruvon ke
          '.      '-:-'       .'      upar se guzarta hai
            ' - - - : - - - '
                    S
```

> **Figure 4.3** – Polar orbit: Earth ke ghoomne wale axis (N se S) ke saath saath guzarta hai. Satellite upar-neeche chalta hai, aur Earth uske neeche pashchim se poorv ghoomti rehti hai.

Sun-synchronous orbit ka khaas fayda: satellite roz kisi bhi jagah ke upar lagbhag **ek hi sthaniya samay (local time)** par aata hai. Isliye tasveer mein Sooraj ki roshni ka kone lagbhag ek jaisa rehta hai, aur din-ba-din ya mahine-ba-mahine ki tulna theek se hoti hai (jaise fasal kitni badhi).

---

## Part D: Geostationary: aasmaan mein tikka hua satellite

Ab Sharad ke sawaal par aate hain. Satellite ghar ki dish ko **tika hua** dikhne ke liye chaar sharten poori honi chahiye:

1. **Time period 24 ghante** (lagbhag; asli Earth ka ek chakkar 23 h 56 min ka hota hai): taaki jitni der mein Earth ek chakkar kare, satellite bhi ek chakkar kare.
2. **Poorv ki disha mein** (pashchim se poorv): Earth ghoomne ki disha mein hi.
3. **Equator ke tal (plane) mein**: orbit ka kendra Earth ka kendra hai, aur Earth ke equator ke upar hi saath chalna mumkin hai.
4. **Oonchai lagbhag 36,000 km**: ye wahi hai jahan T = 24 h aata hai. (Hum isse niche nikaalenge.)

```
   t = 0 ghante                      t = 6 ghante

                                          S
                                          :
     .---.                                G
    (  *  )--G----S                     .---.
     '---'                             (  *  )
                                        '---'
```

> **Figure 4.4** – North Pole ke upar se dekha gaya Earth. Earth ulti ghadi ki disha mein ghoomti hai, satellite S bhi usi disha mein usi dar se ghoomta hai. G equator par ek dish wala shehar hai: 6 ghante baad dono ek-doosre ke saath 90 degree ghoom gaye, par S aur G ek hi seedh mein hain. Isliye G se dekhne par S tika dikhta hai.

### Example 6. Geostationary satellite ki raftaar aur time

**Sawaal:** Geostationary orbit ki kendra se doori r = 4.2 × 10⁷ m hai. v_o aur T nikaalo. (G = 6.67 × 10⁻¹¹ N m²/kg², M = 6 × 10²⁴ kg)

**Given:** r = 4.2 × 10⁷ m, G M = 6.67 × 10⁻¹¹ × 6 × 10²⁴ = 4.002 × 10¹⁴ m³/s²
**Find:** v_o aur T
**Formula:** v_o = √(G M / r), T = 2πr / v_o
**Substitution:**
- v_o² = 4.002 × 10¹⁴ ÷ 4.2 × 10⁷ = 9.529 × 10⁶ m²/s², to v_o = **3087 m/s** = 3.1 km/s lagbhag
- 2πr = 2 × 3.14 × 4.2 × 10⁷ = 2.64 × 10⁸ m
- T = 2.64 × 10⁸ ÷ 3087 = 8.55 × 10⁴ s = **23.7 ghante** lagbhag

**Answer:** v_o lagbhag 3.1 km/s, T lagbhag 24 ghante. Surface se oonchai = 4.2 × 10⁷ − 6.4 × 10⁶ = 3.56 × 10⁷ m lagbhag **36,000 km**.

**Jaanch:** 3087 m/s × 85,500 s = 2.64 × 10⁸ m ✅. T 24 h se lagbhag 1 percent kam aaya kyunki hamne r ko 4.2 × 10⁷ m tak round kiya (asli r thoda zyada hai, aur T chhoti r par r^1.5 ke hisaab se kam aata hai). Ek aur jaanch Topic 1 ke tareeke se (wahan Example 10 mein r se T nikala tha, yahan ulta T se r): Moon ka T = 27.3 din, r = 3.84 × 10⁸ m. T² ∝ r³ se 24 h wale ka r = 3.84 × 10⁸ × (1 ÷ 27.3)^(2/3) = 3.84 × 10⁸ × 0.1103 = **4.2 × 10⁷ m** ✅.

Dekho, 36,000 km par satellite 3.1 km/s se chalta hai, jabki ISS 7.7 km/s se. **Door hai, isliye dheere**: bilkul wahi pattern.

### Dish itni kyun ghoomti nahi?

Satellite Earth ke saath saath "ghoom" raha hai, isliye dish ek baar sahi disha mein lag jaaye to wahi disha hamesha sahi rehti hai. Isliye DTH ki dish ko ghumani nahi padti. India (equator se uttar) mein dish **dakshin ki taraf aur thodi upar** jhuki hoti hai, kyunki satellite equator ke tal mein hai, jo hamare dakshin mein hai. Ek geostationary satellite Earth ke lagbhag 40 percent hisse ko "dekh" sakta hai, aur lagbhag teen aise satellite dhruvon ko chhodkar sabhi jagah dekh lete hain.

**Ghar par adult ke saath:** kisi din shaam ke samay chhat par (mundair se door) ya khuli jagah se dish ko dekho, aur dish ki disha ke saath aasmaan mein kisi pedh ya imaarat ke upar ka nishan yaad kar lo. Kuch ghante baad dobara dekho: Sooraj aage chala gaya, par dish ki disha wahi hai. (Dish ko chhedna ya hilaana nahi: signal chala jaata hai.)

---

## Part E: Weightlessness: free fall hi hai

Class 9 mein kaha tha: astronaut tairte isliye hain ki wo aur spacecraft **saath saath free fall** mein hain. Ab isko hisaab se dekhte hain, aur Example 3 ki baat se jodte hain: ISS par gravity lagbhag 90 percent hai (8.68 m/s²), phir bhi astronaut tairte hain.

### Example 7. Scale kya padhega?

**Sawaal:** 72 kg ka astronaut ISS mein hai (g_h = 8.68 m/s²). Uspar gravity kitni hai, aur weighing scale kya dikhayega? Zameen par uska weight kitna hai?

**Given:** m = 72 kg, g = 9.8 m/s², g_h = 8.68 m/s²
**Find:** zameen par weight, ISS par gravity ka force, scale reading
**Formula:** W = m g, scale reading N = m (g_h − a), jahan a scale ke saath astronaut ki acceleration hai
**Substitution:**
- Zameen par: 72 × 9.8 = **705.6 N**
- ISS par gravity ka force: 72 × 8.68 = **625 N** lagbhag (surface ke 89 percent)
- ISS mein scale aur astronaut dono g_h se hi gir rahe hain, to a = g_h, aur N = 72 × (8.68 − 8.68) = **0 N**

**Answer:** gravity 625 N lagbhag, par scale 0 N.

**Jaanch:** 625 ÷ 705.6 = 0.886 = (6.4 ÷ 6.8)² ✅. Mass 72 kg dono jagah wahi ✅.

```
   Aam lift                          Rassi toot gayi (sirf soch)

   +-----------+                     +-----------+
   :  65 kg    :                     :  65 kg    :
   :  aadmi    :                     :  aadmi    :   <- tairta hua
   :  [scale]  :                     :  [scale]  :
   :  637 N    :                     :   0 N     :
   +-----------+                     +-----------+
         :                                  :
      (rassi)                               v  lift aur aadmi
                                               dono g se gir rahe
```

> **Figure 4.5** – Class 9 wali lift ki soch: 65 kg ka aadmi (weight 65 × 9.8 = 637 N). Aam lift mein scale 637 N, rassi toot jaane par (sirf kalpana, hawa ke bina) scale 0 N. Gravity wahi hai, par aadmi aur scale dono saath saath gir rahe hain. (Asli lift mein aisa kabhi nahi hota: safety brakes lage hote hain.)

Satellite mein bhi yahi hai: fark sirf itna hai ki wo seedha neeche nahi girta, uski side ki raftaar use Earth ke chaaro taraf mod deti hai (Example 3). Dono mein "girna" ek jaisa hai, isliye weightlessness bhi ek jaisi.

**Ek activity (ghar par adult ke saath):** ek plastic ya kaagaz ka disposable cup lo. Adult uski taleti ke paas ek pin se do chhote chhed kar de. Cup ko paani se bharo aur bahar khuli jagah ya baalti ke upar pakdo: paani chhedon se dhaar banakar nikalta hai. Ab adult cup ko seene ki oonchai se (baalti ya ghaas ke upar) chhod de. Gir te samay **dhaar band** ho jaati hai! Cup aur paani dono saath gir rahe hain, to paani cup mein ruka-sa rehta hai, jaise astronaut spacecraft mein. Paani cup se "dabta" nahi, isliye chhedon se nahi nikalta.

```
   Khada cup                       Girte waqt cup

   +-------+                       +-------+
   :~~~~~~~:  paani                :~~~~~~~:
   :~~~~~~~:                       :~~~~~~~:
   +--o-o--+                       +--o-o--+
      : :   dhaar bahar               (dhaar band)
      v v
```

> **Figure 4.6** – Chhed wala cup: khada hone par paani chhedon se nikalta hai. Girte hue cup mein paani aur cup dono ek ho kar gir rahe hain, isliye dhaar band ho jaati hai: free fall mein weightlessness.

### Astronauts par weightlessness ka asar (ek imaandaar paragraph)

Lambe samay tak weightlessness mein rehne par sharir badalta hai. Gravity ab khoon aur sharir ke paani ko pairon ki taraf nahi kheenchti, isliye ye sar aur chehre ki taraf zyada aa jaate hain aur chehra phoola hua lagta hai. Haddiyan aur muscles par roz ka bojh nahi padta, to ve dheere dheere kamzor hone lagte hain (haddiyon se calcium kam hota hai). Reedh ki haddi thodi khichkar astronaut kuch cm lamba bhi ho jaata hai, wapas aane par ye theek ho jaata hai. Kuch astronauts ko shuru ke dinon mein ji michlaane jaisa mehsoos hota hai. Isliye ISS ke astronaut roz lagbhag 2 ghante exercise karte hain, aur doctors ki nigrani mein rehte hain.

---

## Part F: Space debris aur bheed-bhari orbit

LEO mein kai hazaar satellites, purane rocket ke hisse aur takkar se bane tukde ghoom rahe hain (jinhe radar se track kiya jaata hai ve kai hazaar hain, aur chhote tukde lakhon mein). Ye sab **orbital speed** se chalte hain, yaani lagbhag 7 se 8 km/s, to ek chhota sa tukda bhi bahut khatarnak hai.

### Example 8. Chhote bolt ki ghaatak takkar

**Sawaal:** 10 gram ka ek tukda 7.7 km/s ki relative speed se kisi satellite se takrata hai. Uski gati-oorja (kinetic energy) kitni hai? Ek 1000 kg ki car kitni raftaar par ye hi oorja rakhegi?

**Given:** m = 0.01 kg, v = 7700 m/s; car M = 1000 kg
**Find:** KE aur car ki raftaar
**Formula:** KE = ½ m v² (Class 9)
**Substitution:**
- KE = ½ × 0.01 × (7700)² = 0.005 × 5.929 × 10⁷ = **2.96 × 10⁵ J** lagbhag 3 lakh J
- Car: ½ × 1000 × V² = 2.96 × 10⁵, to V² = 592, V = 24.3 m/s = **88 km/h** lagbhag

**Answer:** ek 10 gram ka tukda ek 88 km/h par chalti 1000 kg ki car jitni oorja se takrata hai.

**Jaanch:** 0.5 × 1000 × 24.3² = 2.95 × 10⁵ J ✅.

Isliye space agencies satellites ko tukdon se bachane ke liye orbit badalti hain, aur purane satellite ko **orbit se hata dete hain**: LEO ke satellite ko neeche laya jaata hai, jahan hawa ki rukawat use dheere dheere jalakar khatam kar deti hai. Geostationary satellite ko wahan se lagbhag 300 km upar "graveyard orbit" mein bhej dete hain, taaki naye satellite ke liye jagah bane. Orbit ko saaf rakhna ab bahut zaroori hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Satellite par gravity nahi lagti"**

Demonstration: ISS par g_h = 9.8 × (6.4 ÷ 6.8)² = **8.68 m/s²**, yani surface ka 89 percent (Example 3). Agar ISS par gravity zero hoti to wo seedha tangent par aage chalta jaata (jaise dhaaga katne par patthar, Class 9) aur Earth se door ud jaata. Wo ghoom isliye raha hai ki gravity use har second 4.34 m "girati" hai, aur ye gir-na hi uska circle hai. **Sahi:** satellite par gravity lagti hai, aur gravity hi wo centripetal force hai (m v² / r = G M m / r²). Astronaut tairta hai kyunki wo free fall mein hai, gravity ke na hone se nahi.

**Galti 2: "Geostationary satellite hilta nahi, bilkul sthir hai"**

Demonstration: Equator par ek jagah Earth ke saath ghoom rahi hai: speed = 2π × 6.4 × 10⁶ ÷ 86,400 = **465 m/s** lagbhag. Geostationary satellite ki speed = 2π × 4.2 × 10⁷ ÷ 86,400 = **3054 m/s** (lagbhag 3.1 km/s), yaani Earth ke us point se 6.6 guna tez. Agar wo sach mein sthir hota (speed 0), to 36,000 km par bhi gravity g_h = 9.8 × (6.4 ÷ 42)² = 0.23 m/s² use kheenchti, aur pehle minute mein hi wo ½ × 0.23 × 60² = **410 m** neeche aa jaata. **Sahi:** wo Earth ke saath ghoom raha hai (T = 24 h), isliye **Earth se dekhne par** tika dikhta hai. Space se dekho to bhaag raha hai: 3.1 km/s, yani lagbhag 11,000 km har ghante.

---

## Quick Recap

- Orbit mein gravity hi centripetal force hai: m v² / r = G M m / r². Isse **v_o = √(G M / r) = √(g R² / r)** aur **T = 2πr / v_o**, jahan r = R + h kendra se naapa jaata hai.
- **Jitna paas, utna tez aur kam time**; jitna door, utna dheere aur zyada time. Satellite ka mass formula mein nahi aata.
- Lagbhag numbers: sataah ke paas 7.9 km/s (85 minute); ISS 400 km par lagbhag 7.7 km/s aur lagbhag 92 se 93 minute; geostationary 36,000 km par lagbhag 3.1 km/s aur 24 ghante; Moon lagbhag 1.02 km/s aur 27.3 din.
- Orbit parivaar: LEO, MEO, GEO aur polar/sun-synchronous, har ek ka apna kaam.
- Geostationary ki chaar sharten: T = 24 h, pashchim se poorv, equator ke tal mein, lagbhag 36,000 km. Wo Earth ke saath ghoom raha hai, sthir nahi hai.
- Weightlessness free fall hai (lift ki rassi toot jaane jaisi): gravity lagti hai, par scale par nahi dikhti. Lambe samay ka asar astronaut ke sharir par padta hai.
- Space debris orbital speed se chalta hai, isliye bahut khatarnak; orbit bheed-bhari hai.

---

## Practice Questions

Use g = 9.8 m/s², R = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m²/kg², M = 6 × 10²⁴ kg, π = 3.14 unless stated.

1. A communication satellite is at 700 km above the Earth's surface. Find its orbital speed in km/s and its time period in minutes. How many orbits does it complete in one day?
2. A satellite is at 2000 km above the surface. Find its orbital speed and time period.
3. Compare the satellites of Questions 1 and 2: find the ratio of their speeds (v₁ ÷ v₂) and the ratio of their time periods (T₂ ÷ T₁). Which satellite is faster, and which takes more time?
4. Treat the Moon as a satellite of the Earth (r = 3.84 × 10⁸ m). Using only G and M, find its orbital speed and time period in days. Also find the Moon's centripetal acceleration (v² ÷ r) and compare it with g = 9.8 m/s² as a fraction.
5. A geostationary satellite at r = 4.2 × 10⁷ m completes one orbit in 24 hours. Find (a) the distance it travels in 15 minutes in km, and (b) the angle (in degrees) through which the satellite, and a city on the equator below it, turn about the Earth's centre in those 15 minutes. Why does the satellite not get left behind?
6. Two satellites of masses 500 kg and 2000 kg orbit at 2000 km above the surface. Find the gravitational force on each and show that their orbital speeds are equal.
7. A 68 kg astronaut is in a satellite at 700 km above the surface. Find the gravitational force on the astronaut and the reading of a weighing scale in the satellite. Why are they different?
8. A 54 kg student stands on a weighing scale in a lift. What does the scale read (a) when the lift is at rest, (b) when the lift falls freely (cable cut, ideal case), and (c) when the lift moves downward with an acceleration of 2 m/s²? (Take N = m (g − a).)
9. A satellite A orbits at a radius r and takes 2 hours per orbit. Satellite B orbits at a radius 9 times larger. Find B's time period and the ratio of their speeds (v_B ÷ v_A).
10. A polar satellite is at 800 km above the surface. Find (a) its orbital speed, (b) its time period in minutes, (c) the number of orbits per day, and (d) by roughly how many degrees the Earth turns beneath the satellite during one orbit.
11. A 5 gram bolt of space debris moves at 7.5 km/s. Find its kinetic energy. From what height would a 1 kg stone (g = 10 m/s²) have to fall to have the same energy?
12. State true or false, with a one-line reason: (a) A satellite at a lower orbit has a longer time period. (b) A heavy satellite must move faster than a light one at the same height. (c) A geostationary satellite can be placed above Delhi. (d) The gravity on a satellite at 700 km is zero.
13. Explain in your own words why a geostationary satellite must orbit in the equatorial plane and must have a time period of 24 hours.

### Answers

**1.** **Given:** h = 700 km = 7 × 10⁵ m, so r = 6.4 × 10⁶ + 0.7 × 10⁶ = 7.1 × 10⁶ m. **Find:** v_o, T, orbits per day. **Formula:** v_o = √(g R² / r), T = 2πr / v_o.
- g R² = 4.014 × 10¹⁴ m³/s². v_o² = 4.014 × 10¹⁴ ÷ 7.1 × 10⁶ = 5.654 × 10⁷, v_o = 7519 m/s = **7.52 km/s**
- 2πr = 2 × 3.14 × 7.1 × 10⁶ = 4.459 × 10⁷ m. T = 4.459 × 10⁷ ÷ 7519 = 5930 s = **98.8 minute** lagbhag
- Orbits per day = 1440 ÷ 98.8 = **14.6**, yani lagbhag 14 se 15

**Jaanch:** 7519 × 5930 = 4.459 × 10⁷ m ✅. ISS (400 km) se thoda dheere aur thoda zyada time, jaisa pattern kehta hai ✅.

**2.** r = 6.4 × 10⁶ + 2.0 × 10⁶ = 8.4 × 10⁶ m. v_o² = 4.014 × 10¹⁴ ÷ 8.4 × 10⁶ = 4.779 × 10⁷, to v_o = 6913 m/s = **6.91 km/s**. 2πr = 2 × 3.14 × 8.4 × 10⁶ = 5.275 × 10⁷ m, T = 5.275 × 10⁷ ÷ 6913 = 7631 s = **127 minute** lagbhag (2 ghante 7 minute).
**Jaanch:** 6913 × 7631 = 5.275 × 10⁷ m ✅.

**3.** v₁ ÷ v₂ = 7.519 ÷ 6.913 = **1.088**. Seedha formula se: √(r₂ ÷ r₁) = √(8.4 ÷ 7.1) = √1.183 = 1.088 ✅. T₂ ÷ T₁ = 7631 ÷ 5930 = **1.29**; formula se (r₂ ÷ r₁)^1.5 = 1.183^1.5 = 1.29 ✅. **Answer:** 700 km wala satellite zyada tez (lagbhag 9 percent) hai, aur 2000 km wale ko ek chakkar mein zyada time lagta hai (lagbhag 29 percent zyada).

**4.** G M = 4.002 × 10¹⁴. v_o² = 4.002 × 10¹⁴ ÷ 3.84 × 10⁸ = 1.0422 × 10⁶, v_o = 1021 m/s = **1.02 km/s**. T = 2π × 3.84 × 10⁸ ÷ 1021 = 2.412 × 10⁹ ÷ 1021 = 2.363 × 10⁶ s = 2.363 × 10⁶ ÷ 86,400 = **27.4 din** lagbhag. Centripetal acceleration = v² ÷ r = 1.0422 × 10⁶ ÷ 3.84 × 10⁸ = **2.71 × 10⁻³ m/s²**. Fraction = 2.71 × 10⁻³ ÷ 9.8 = 2.77 × 10⁻⁴ = lagbhag **1/3600**.
**Jaanch:** (R ÷ r)² = (6.4 × 10⁶ ÷ 3.84 × 10⁸)² = (1/60)² = 1/3600 ✅: Moon Earth ke kendra se lagbhag 60 R par hai, isliye gravity 60² = 3600 guna kam. T lagbhag 27.3 din se milta hai ✅.

**5.** (a) v = 2πr ÷ T = 2 × 3.14 × 4.2 × 10⁷ ÷ 86,400 = 2.638 × 10⁸ ÷ 86,400 = 3053 m/s. 15 minute (900 s) mein: 3053 × 900 = 2.75 × 10⁶ m = **lagbhag 2750 km**.
(b) 24 ghante (1440 minute) mein 360 degree, to 15 minute mein 360 × 15 ÷ 1440 = **3.75 degree**. Satellite bhi 3.75 degree aur neeche ka shehar bhi 3.75 degree ghoomta hai. **Jaanch:** 2750 km ÷ (2 × 3.14 × 42,000 km) × 360 = 3.75 degree ✅. Satellite bade circle par chalta hai, par ek chakkar ka time wahi 24 h hai, isliye ek hi radius-line par dono saath rehte hain (Figure 4.4). Dono ek hi seedh mein ghoom rahe hain, isliye satellite peeche nahi chhootta.

**6.** g_h = 9.8 × (6.4 ÷ 8.4)² = 9.8 × 0.5805 = 5.689 m/s². F₁ = 500 × 5.689 = **2844 N**, F₂ = 2000 × 5.689 = **11,378 N**. v_o = √(g R² / r) = 6913 m/s dono ke liye (Question 2): m formula mein hai hi nahi. Accelerations: 2844 ÷ 500 = 5.689 aur 11,378 ÷ 2000 = 5.689 m/s² dono barabar ✅.

**7.** g_h = 9.8 × (6.4 ÷ 7.1)² = 9.8 × 0.8125 = 7.96 m/s². Gravity ka force = 68 × 7.96 = **541 N** lagbhag (zameen par weight 68 × 9.8 = 666.4 N). Scale: astronaut aur scale dono a = g_h se gir rahe hain, N = 68 × (7.96 − 7.96) = **0 N**. Force aur scale alag isliye kyunki scale gravity nahi, astronaut ka scale par dabav naapta hai. Free fall mein dabav 0 hai.
**Jaanch:** 541 ÷ 666.4 = 0.812 = (6.4 ÷ 7.1)² ✅.

**8.** (a) N = m g = 54 × 9.8 = **529.2 N**. (b) free fall mein a = g: N = 54 × (9.8 − 9.8) = **0 N**. (c) N = 54 × (9.8 − 2) = 54 × 7.8 = **421.2 N**. **Jaanch:** (c) 421.2 N < 529.2 N, jaisa neeche tezi se jaate lift mein halka mehsoos hota hai ✅. Ye (b) sirf kalpana hai; asli lift mein safety brakes hote hain.

**9.** T² ∝ r³: T_B = T_A × 9^1.5 = 2 × 27 = **54 ghante**. Raftaar v ∝ 1/√r: v_B ÷ v_A = 1/√9 = **1/3**. **Jaanch:** T ke liye raasta 9 guna, raftaar 1/3, to time 9 × 3 = 27 guna ✅.

**10.** r = 6.4 × 10⁶ + 0.8 × 10⁶ = 7.2 × 10⁶ m. (a) v_o² = 4.014 × 10¹⁴ ÷ 7.2 × 10⁶ = 5.575 × 10⁷, v_o = 7467 m/s = **7.47 km/s**. (b) T = 2 × 3.14 × 7.2 × 10⁶ ÷ 7467 = 4.522 × 10⁷ ÷ 7467 = 6056 s = **101 minute** lagbhag. (c) 1440 ÷ 101 = **14.3** orbits. (d) Earth 360 degree ghoomti hai 24 h = 1440 min mein: 360 × 101 ÷ 1440 = **25 degree** lagbhag. Equator par ye 2π × 6.4 × 10⁶ × 25 ÷ 360 = lagbhag 2.8 × 10⁶ m = 2800 km ki doori hai: har orbit pichhle se itna pashchim mein hota hai, isliye kai orbit mein poori Earth dikh jaati hai.
**Jaanch:** 7467 × 6056 = 4.52 × 10⁷ m ✅.

**11.** KE = ½ × 0.005 × (7500)² = 0.0025 × 5.625 × 10⁷ = **1.41 × 10⁵ J** lagbhag. Stone: m g h = 1.41 × 10⁵, to h = 1.41 × 10⁵ ÷ (1 × 10) = **14,000 m** = 14 km lagbhag. **Jaanch:** 1 × 10 × 14,062 = 1.41 × 10⁵ J ✅.

**12.** (a) **False** ❌: neecha orbit chhota hai aur raftaar zyada, to T kam. (b) **False** ❌: v_o = √(G M / r) mein satellite ka mass nahi hai. (c) **False** ❌: geostationary satellite sirf equator ke tal mein ho sakta hai, Delhi (equator se door) ke bilkul upar nahi. (d) **False** ❌: g_h = 7.96 m/s² (Question 7), gravity zero nahi, wahi orbit mein rakhti hai.

**13.** Gravity hamesha Earth ke **kendra** ki taraf lagti hai, isliye har orbit ka kendra Earth ka kendra hota hai. Aisa circle jo equator se door kisi latitude (jaise Delhi) ke upar rahe, uska kendra Earth ka kendra nahi ho sakta, to wo orbit ban hi nahi sakta. Orbit hamesha Earth ke kendra wale bade circle par hi ho sakta hai. Agar satellite equator ke tal mein ho aur uska T = 24 h ho (Earth ke ek chakkar ke barabar), aur disha Earth jaisi (pashchim se poorv) ho, to wo Earth ke ek hi sthan ke upar rehta dikhega (Figure 4.4). T = 24 h hone par hi r = 4.2 × 10⁷ m aata hai (Example 6), yani surface se lagbhag 36,000 km.

---

Shabaash! Aaj tumne ek hi equation se ISS, geostationary satellite aur Moon ki raftaar aur time nikaal liye, aur jo "wada" Class 9 ne kiya tha use khud poora kiya.

Agle topic mein ek aur sawaal: ye satellite itni oonchai aur itni raftaar tak pahunchte kaise hain? Topic 5 mein hum rocket ka siddhant dekhenge (action aur reaction), aur Bharat ke antariksh missions ki kahani: Sriharikota se Chandrayaan aur Mangalyaan tak.
