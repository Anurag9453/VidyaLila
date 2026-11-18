# Chapter: Current Electricity II: Cells, Networks and Real Components (Part 5)

> **Class:** 10 | **Subject:** Physics
> **Ye file [current-electricity-ii-part4.md](current-electricity-ii-part4.md) se aage chalti hai** (wahan taar, resistivity, thermistor aur colour code). Chapter ki shuruaat: [current-electricity-ii.md](current-electricity-ii.md). Recall ke liye Class 9: power aur rating [electricity-part6.md](../../../class9/physics/electricity/electricity-part6.md), bijli ka bill [electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md), series mein brightness [electricity-part5.md](../../../class9/physics/electricity/electricity-part5.md), paani ki specific heat [heat-and-temperature-part4.md](../../../class9/physics/heat-and-temperature/heat-and-temperature-part4.md); efficiency ke liye Class 10 [sources-of-energy.md](../sources-of-energy/sources-of-energy.md).
> **Topics covered in this file:**
> 5. Power Aur Energy: Rating Ka Matlab Aur Bijli Ka Hisaab

---

# Topic 5: Power Aur Energy: Rating Ka Matlab Aur Bijli Ka Hisaab

Topic 4 ke aakhir mein ek sawal chhoda gaya tha: bulb par jo "230 V, 60 W" likha hota hai, wo asal mein kya batata hai? Topic 4 mein humne ye bhi dekha tha ki bulb ka filament garm hone par apna resistance 10 se 15 guna kar leta hai, aur isliye rating wala resistance **poori chamak par** hi milta hai. Aaj usi sawal ka poora jawab: rating se current aur resistance kaise nikalte hain, supply kam ho to kya hota hai, do bulb ek saath hon to kaun tez jalta hai, heater ka taar kaise banta hai, aur mahine ke end mein bill kaise aata hai.

---

## Mandlik Mama ka verandah

Shaam ko Mr. Mandlik apni bhanji Lalita ke saath verandah mein baithe the. Upar ek bulb laga tha, jis par likha tha **230 V, 60 W**. Aaj wo bulb peeli, dheemi roshni de raha tha. Lalita boli, "Mama, is par to 60 W likha hai, par aaj ye 60 W jaisa jal hi nahi raha. Kya bulb kharab ho gaya?"

Mama ne apne inverter ka display dikhaya: aaj shaam mohalle mein bahut log ek saath AC aur cooler chala rahe the, aur ghar tak supply ka voltage girkar lagbhag **184 V** reh gaya tha. "Bulb theek hai, beta. Bulb ki rating ek **shart** hai: 'Mujhe 230 V do, to main 60 W loonga.' Voltage kam hua to wahi bulb kam power lega." Phir Lalita ne ek aur cheez dekhi: andar electric iron ki plate par bhi chhota sa likha tha, "230 V, 1100 W". Mama ne kaha, "Chalo, aaj in dono plates ko padhna seekhte hain, aur ye bhi dekhte hain ki mahine ka bill in sab ke peeche kaise aata hai."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Rating plate** | Appliance par likhi wo jaankari jo batati hai ki use kis voltage par chalana hai aur tab wo kitni power legi | Iron par "230 V, 1100 W" |
| **Rated voltage, rated power** | Rating plate ka voltage aur uspar milne wali power. Ye dono saath hi sahi hote hain | 230 V aur 60 W bulb ke |
| **Rated current** | Rated voltage par appliance jitna current leta hai: I = P ÷ V | 1100 W iron ka lagbhag 4.78 A |
| **Kam voltage par chalna** | Appliance ko rated voltage se kam voltage par chalana: power rated se kam milti hai | 230 V ka bulb 184 V par |
| **Connected load** | Ek hi supply se judne wale saare appliances ki power ka jod | Kamre ke fan, light aur kettle ki kul power |
| **Extension lead** | Plug se door appliance tak bijli le jaane wali lambi taar | Kamre ke bahar 10 m ka lead |
| **Star rating** | Appliance par star ka label: zyada star ka matlab same kaam ke liye kam bijli | 5-star AC |

---

## Class 9 ka recall

Class 9 mein P = V I = I² R = V² ÷ R mila tha, aur rating ka matlab bhi: "60 W, 230 V" yaani 230 V par 60 W ([electricity-part6.md](../../../class9/physics/electricity/electricity-part6.md)). Wahan 60 W bulb ka R = 881.7 Ω aur 40 W ka R = 1322.5 Ω nikala tha, aur dekha tha ki series mein 60 W aur 100 W ke do bulb mein 60 W wala zyada chamakta hai (Example 12). Bill mein 1 unit = 1 kWh = 3.6 × 10⁶ J, aur bill = units × rate ([electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md)). Heat Q = m c ΔT, paani ke liye c = 4200 J/kg °C ([heat-and-temperature-part4.md](../../../class9/physics/heat-and-temperature/heat-and-temperature-part4.md)). Aaj ye sab naye sawalon par: kam voltage, series aur parallel brightness ka *kaaran*, heater ka design, kettle ka time, ghar ka load aur lambi taar ki garmi.

---

## Part A: Rating plate padhna

Rating plate ek vaada hai: **"rated voltage par rakhoge, to rated power milegi."** Is vaade se do cheezein nikalti hain:

> **Rated current: I = P ÷ V.   Resistance (poori chamak par): R = V² ÷ P.**

```
  +--------------------------------+
  :  ELECTRIC IRON                 :
  :  Rated voltage :  230 V        :
  :  Rated power   :  1100 W       :
  +--------------------------------+
```

> **Figure 5.1** – Iron ki rating plate ka naksha: voltage aur power saath-saath likhe hain. Dono ek jodi hain: ek badle to doosra bhi badal jaata hai.

### Example 1: Iron ki plate

**Given:** Rated voltage V = 230 V, rated power P = 1100 W.
**Find:** Rated current I aur resistance R.
**Formula:** I = P ÷ V, R = V² ÷ P.
**Substitution:** I = 1100 W ÷ 230 V = 4.78 A. R = (230 V)² ÷ 1100 W = 52 900 V² ÷ 1100 W = 48.1 Ω.
**Answer:** I lagbhag 4.78 A, R lagbhag 48.1 Ω.
**Jaanch:** V = I R = 4.783 A × 48.09 Ω = 230 V ✅. P = V I = 230 V × 4.783 A = 1100 W ✅. Units: W ÷ V = A ✅, V² ÷ W = Ω ✅

Ye R iron ke **garm** element ka hai. Thanda element multimeter par isse kam dikhata hai (Topic 4). Aur ek baat: bulb par 60 W aur iron par 1100 W: iron ka R chhota hai (48.1 Ω, jabki 60 W bulb ka lagbhag 882 Ω). **Zyada power wale appliance ka R kam hota hai**, kyunki V² ÷ P mein P neeche hai.

---

## Part B: Kam voltage par wahi bulb

Bulb ka R lagbhag fixed maan lein (honest note neeche aa raha hai), to P = V² ÷ R se power voltage ke **square** ke saath badalti hai: P' = P × (V' ÷ V)².

### Example 2: Verandah ka bulb, 184 V par

**Given:** Bulb 230 V, 60 W; asli supply V' = 184 V.
**Find:** Naya current aur power.
**Formula:** R = V² ÷ P; I' = V' ÷ R; P' = V'² ÷ R.
**Substitution:** R = 52 900 V² ÷ 60 W = 881.7 Ω. I' = 184 V ÷ 881.7 Ω = 0.209 A. P' = (184 V)² ÷ 881.7 Ω = 33 856 V² ÷ 881.7 Ω = 38.4 W.
**Answer:** Lagbhag 0.209 A aur 38.4 W.
**Jaanch:** P' = V' I' = 184 V × 0.2087 A = 38.4 W ✅. Voltage 80 percent hua to power 0.8² = 0.64 guna: 0.64 × 60 W = 38.4 W ✅

Voltage ghatne se power **tezi se** ghatti hai. Table (wahi bulb, lagbhag):

| V' (V) | 230 | 184 | 161 | 115 |
|---|---|---|---|---|
| V' ÷ V | 1 | 0.8 | 0.7 | 0.5 |
| P' (W) | 60 | 38.4 | 29.4 | 15 |

**Aadha voltage, power ka sirf chauthai hissa.** (115 V par 60 × 0.25 = 15 W.)

**Honest note:** voltage kam hone par filament kam garm hota hai, to (Topic 4 ke hisaab se) uska R thoda **kam** ho jaata hai. Isliye asli power in numbers se **thodi zyada** hogi, par rujhan wahi rehta hai. Aur roshni power se bhi zyada ghatti hai aur peeli-laal lagti hai, kyunki kam garm filament ki chamak peeli-laal hoti hai (isi se Lalita ko bulb peeli lagi).

---

## Part C: Do bulb ek saath: kaun zyada chamakta hai?

Class 9 ne series mein brightness dikhayi thi. Ab uska **kaaran** ek line mein:

- **Series:** dono mein current **same** hai. P = I² R, to jiska R zyada, wahi zyada power le kar zyada chamakta hai.
- **Parallel:** dono par voltage **same** hai. P = V² ÷ R, to jiska R **kam**, wahi zyada power leta hai.

Dono baar kam wattage wale bulb ka R zyada hai (R = V² ÷ P). Isliye series mein **kam-wattage** wala aur parallel mein **zyada-wattage** wala tez jalta hai.

*(Neeche ka hisaab sirf padhne ke liye hai. Ghar ke mains par aise bulb ek ke baad ek jodne ka prayog kabhi mat karo.)*

### Example 3: 40 W aur 100 W, series mein, 230 V par

**Given:** Do bulb, dono 230 V ke: 40 W aur 100 W, series mein 230 V supply se.
**Find:** Har bulb ka voltage aur power.
**Formula:** R = V² ÷ P; series: R_kul = R₁ + R₂, I = V ÷ R_kul; V = I R, P = I² R.
**Substitution:** R₄₀ = 52 900 ÷ 40 = 1322.5 Ω. R₁₀₀ = 52 900 ÷ 100 = 529 Ω. R_kul = 1322.5 + 529 = 1851.5 Ω. I = 230 V ÷ 1851.5 Ω = 0.1242 A. V₄₀ = 0.1242 A × 1322.5 Ω = 164.3 V, V₁₀₀ = 0.1242 A × 529 Ω = 65.7 V. P₄₀ = (0.1242 A)² × 1322.5 Ω = 20.4 W, P₁₀₀ = (0.1242 A)² × 529 Ω = 8.16 W.
**Answer:** 40 W wala: lagbhag 164 V par, 20.4 W. 100 W wala: lagbhag 66 V par, 8.2 W.
**Jaanch:** 164.3 V + 65.7 V = 230 V ✅. P₄₀ + P₁₀₀ = 28.57 W = V I = 230 V × 0.1242 A = 28.57 W ✅ (power in = power out)

Dekho: **100 W wala** bulb sirf lagbhag 8 W le raha hai aur lagbhag bujha-sa, jabki **40 W wala** 20 W le kar zyada chamakta hai. Parallel mein dono par 230 V hoga aur 100 W wala 40 W wale se 2.5 guna zyada power legi. (Ye numbers lagbhag hain: dono filament kam garm hone se R kam ho jaata hai, par kram wahi rehta hai.)

Ab ek aisi jodi jo school ki lab mein sach mein kar sakte hain: low-voltage lamps.

### Example 4: Do lamps, 6 V ki battery par

**Given:** Lamp L1: 6 V, 3 W. Lamp L2: 6 V, 12 W. Battery 6 V (r chhoda).
**Find:** Series aur parallel dono mein har lamp ki power.
**Formula:** R = V² ÷ P; series P = I² R; parallel P = V² ÷ R.
**Substitution:** R₁ = 36 V² ÷ 3 W = 12 Ω. R₂ = 36 V² ÷ 12 W = 3 Ω. Series: I = 6 V ÷ 15 Ω = 0.4 A, P₁ = 0.16 A² × 12 Ω = 1.92 W, P₂ = 0.16 A² × 3 Ω = 0.48 W. Parallel: P₁ = 36 ÷ 12 = 3 W, P₂ = 36 ÷ 3 = 12 W.
**Answer:** Series: L1 = 1.92 W, L2 = 0.48 W (L1 tez). Parallel: L1 = 3 W, L2 = 12 W (L2 tez).
**Jaanch:** Series mein voltage 4.8 V + 1.2 V = 6 V ✅. Parallel mein dono rated power par hain ✅

```
   +------(X)-------------(X)--------+
   :    lamp L1         lamp L2      :
   :    6 V, 3 W        6 V, 12 W    :
   :                                 :
   :                                 :
   :                                 :
   +---------(-) ─┤├─ (+)------------+
               6 V battery
```

> **Figure 5.2** – Example 4 ka series circuit: battery, L1 aur L2 ek ke baad ek, poora closed loop. Current battery ke + sire se nikal kar L2, phir L1 se hota hua (−) sire par wapas aata hai: dono mein wahi current.

```
   +----------+-------------+---------------+
   :          :             :               :
   :          :             :               :
   :         (X) L1 6V 3W  (X) L2 6V 12W    :
   :          :             :               :
   +----------+-------------+               :
   :                                        :
   :              6 V battery               :
   +------------(-) ─┤├─ (+)----------------+
```

> **Figure 5.3** – Example 4 ka parallel circuit: dono lamp battery ke saath poore 6 V par, closed loop. Battery ka + sira daayein hai; current + se nikal kar upar wale rail se dono lamps mein baat jaata hai aur neeche wale rail se (−) sire par wapas aata hai.

**School mein teacher ke saath:** teacher ki nigrani mein 6 V ki battery (ya school ki low-voltage DC supply) se do aise lamps pehle series, phir parallel mein jodo. Dekho ki series mein kam-wattage wala aur parallel mein zyada-wattage wala zyada chamakta hai. Mains ke bulb se kabhi nahi.

---

## Part D: Heater ka taar banana

Heater banane wale ko do cheezein pata hoti hain: **kitne watt** aur **230 V**. Pehle R = V² ÷ P, phir R = ρ l ÷ A se length. (Class 9 mein ek nichrome taar ki length nikali thi; ab rating se shuru karte hain.)

### Example 5: 1100 W iron ka nichrome element

**Given:** P = 1100 W, V = 230 V, nichrome ρ = 1.1 × 10⁻⁶ Ω m, area A = 0.20 mm² = 2.0 × 10⁻⁷ m².
**Find:** Taar ki length l.
**Formula:** R = V² ÷ P; R = ρ l ÷ A, to l = R A ÷ ρ.
**Substitution:** R = 52 900 V² ÷ 1100 W = 48.09 Ω. l = 48.09 Ω × 2.0 × 10⁻⁷ m² ÷ 1.1 × 10⁻⁶ Ω m = 9.618 × 10⁻⁶ ÷ 1.1 × 10⁻⁶ m = 8.74 m.
**Answer:** Lagbhag 8.74 m ka taar (jo coil ki shakal mein lapeta jaata hai).
**Jaanch:** R = ρ l ÷ A = 1.1 × 10⁻⁶ × 8.74 ÷ 2.0 × 10⁻⁷ = 48.1 Ω ✅, aur 52 900 ÷ 48.1 = 1100 W ✅

Agar kaarigar taar ko 10 percent chhota kar de (7.87 m), to R = 43.3 Ω aur P = 52 900 ÷ 43.3 = lagbhag **1222 W**: lagbhag 11 percent zyada power, kyunki P ∝ 1 ÷ R. Isiliye heater ka taar **chhota** karne par power badhti hai: par taar usi rating ke liye bana hota hai, to uspar chhedkhani nahi karte.

---

## Part E: Kettle ka time, energy aur star rating

Kettle ki rating (watt = J/s) batati hai ki wo har second kitni bijli ki energy leta hai. Par sab energy paani tak nahi pahunchti: kettle ki efficiency lagbhag 80 se 90 percent hoti hai ([sources-of-energy.md](../sources-of-energy/sources-of-energy.md)).

> **Paani ko chahiye: Q = m c ΔT.   Bijli ko deni hai: input energy = Q ÷ efficiency.   Time = input energy ÷ P.**

### Example 6: 1.8 kW ka kettle

**Given:** P = 1.8 kW = 1800 W, m = 1.2 kg paani, 28 °C se 100 °C, efficiency 85 percent = 0.85, c = 4200 J/kg °C, tariff maan lo ₹6 per unit.
**Find:** Time, energy kWh mein aur ek baar ubalne ka kharcha.
**Formula:** Q = m c ΔT; input = Q ÷ 0.85; t = input ÷ P; 1 kWh = 3.6 × 10⁶ J.
**Substitution:** ΔT = 100 − 28 = 72 °C. Q = 1.2 kg × 4200 J/kg °C × 72 °C = 362 880 J. Input = 362 880 J ÷ 0.85 = 426 918 J. t = 426 918 J ÷ 1800 J/s = 237 s. Energy = 426 918 J ÷ 3.6 × 10⁶ J/kWh = 0.1186 kWh. Kharcha = 0.1186 kWh × ₹6/kWh = ₹0.71.
**Answer:** Lagbhag 237 s (kareeb 4 minute), 0.119 kWh, lagbhag 71 paise.
**Jaanch:** 1800 W × 237.2 s = 426 900 J ✅. Useful ÷ input = 362 880 ÷ 426 918 = 0.85 ✅ (efficiency 100 percent se kam, to input Q se zyada ✅)

**Star rating.** Do AC ek jaisa kaam karte hain, par 5-star wala kam bijli leta hai. Zyada star wale appliance mein bijli ka bekaar jaana kam hota hai (lagbhag), to kharidte waqt star dekhne se bill har mahine kam aata hai. Example 9 mein hum ek maani hui bachat dekhenge.

---

## Part F: Ghar ka load aur lambi taar

### Connected load aur fuse ka hisaab

Ghar ke appliances **parallel** mein jude hote hain (Class 9), to har ek par poora 230 V hota hai aur **currents jud jaate hain**: I_kul = P_kul ÷ V. Fuse (ya MCB) ki rating is I_kul se **thodi upar** chunte hain. (Yahan sirf hisaab: fuse aur MCB ki poori kahani Chapter 8 "Household Circuits and Safety" mein hogi.)

### Example 7: Kamre ka load

**Given:** Ek hi circuit par: fan 70 W, do LED lamp 14 W har ek, mixer 450 W, kettle 1800 W. Supply 230 V. Fuse ke vikalp: 5 A, 10 A, 15 A, 20 A.
**Find:** Kul current aur sahi fuse.
**Formula:** I = P ÷ V har ek ke liye; I_kul = P_kul ÷ V.
**Substitution:** P_kul = 70 W + 2 × 14 W + 450 W + 1800 W = 2348 W. I_kul = 2348 W ÷ 230 V = 10.2 A.
**Answer:** Kul current lagbhag 10.2 A. 10 A ka fuse udd jaata, to **15 A** ka fuse chunenge.
**Jaanch:** Har ek ka I: 0.304 A (fan), 0.122 A (do LED), 1.957 A (mixer), 7.826 A (kettle). Jod = 10.209 A ✅

### Lambi patli taar kyun garm hoti hai

Appliance aur plug ke beech ki lambi taar appliance ke **series** mein hoti hai. Uske R par bhi I² R garmi banti hai.

```
       +---------/\/\/ lead 0.34 Ω /\/\/--------+
       :                                        :
       :                                        :
 +----------+                             +----------+
 :  230 V   :                             :  kettle  :
 :  supply  :                             :  1800 W  :
 +----------+                             :  29.4 Ω  :
       :                                  +----------+
       :                                        :
       :                                        :
       +---------/\/\/ lead 0.34 Ω /\/\/--------+
```

> **Figure 5.4** – Supply se kettle tak 10 m ka extension lead: jaane aur aane ki taar milakar kul 20 m. Lead ka R do hisson (0.34 Ω + 0.34 Ω) mein dikhaya hai, kettle ka R (29.4 Ω) uske series mein, poora closed loop.

### Example 8: Patla lead, 1800 W ka kettle

**Given:** Lead 10 m ka, jaane aur aane ki kul taar 20 m, copper, area 0.50 mm² = 5.0 × 10⁻⁷ m², ρ = 1.7 × 10⁻⁸ Ω m. Kettle 230 V, 1800 W. Supply 230 V.
**Find:** Lead ka R, current, lead mein garmi, kettle par voltage aur uski asli power.
**Formula:** R = ρ l ÷ A; I = V ÷ R_kul; P_lead = I² R_lead; V_kettle = I R_kettle.
**Substitution:** R_lead = 1.7 × 10⁻⁸ × 20 ÷ 5.0 × 10⁻⁷ = 0.68 Ω. R_kettle = 52 900 ÷ 1800 = 29.39 Ω. R_kul = 29.39 + 0.68 = 30.07 Ω. I = 230 V ÷ 30.07 Ω = 7.65 A. P_lead = (7.65 A)² × 0.68 Ω = 39.8 W. V_kettle = 7.65 A × 29.39 Ω = 224.8 V. P_kettle = (7.65 A)² × 29.39 Ω = 1720 W.
**Answer:** Lead mein lagbhag 40 W ki garmi (20 m par phaili hui), kettle par lagbhag 225 V, aur kettle ki power lagbhag 1720 W (rated 1800 W se kam).
**Jaanch:** P_lead + P_kettle = 39.8 W + 1719.5 W = 1759.3 W, aur V I = 230 V × 7.649 A = 1759.3 W ✅ (power in = power out)

Agar usi lead ki jagah mota, 2.5 mm² area (R = 0.136 Ω) ka lead lo, to lead ki garmi ghatkar lagbhag 8.3 W reh jaati hai. Isliye **bade-watt ke appliance ke liye mota aur chhota lead** chunte hain, aur reel pe lipta lead poora kholkar use karte hain (taaki garmi bahar nikal sake).

---

## Part G: Bijli ka hisaab: AC aur iron

### Example 9: Mandlik Mama ka bill

**Given:** AC rated 1.2 kW, roz 6 ghante kamre mein; compressor sirf lagbhag 70 percent time chalta hai (maana hua). Iron 1100 W roz 30 minute. 30 din. Tariff maan lo ₹6 per unit.
**Find:** Dono ke units aur kul bill. Phir 20 percent kam bijli wale 5-star AC se bachat.
**Formula:** E = P × t (kWh = kW × h); bill = units × rate.
**Substitution:** AC roz: 1.2 kW × 6 h × 0.70 = 5.04 kWh, 30 din: 151.2 kWh. Iron roz: 1.1 kW × 0.5 h = 0.55 kWh, 30 din: 16.5 kWh. Kul = 151.2 + 16.5 = 167.7 kWh. Bill = 167.7 × ₹6 = ₹1006.2. 5-star AC: bachat = 0.20 × 151.2 = 30.24 kWh, 30.24 × ₹6 = ₹181.4.
**Answer:** Kul lagbhag 167.7 units, bill lagbhag ₹1006. 5-star AC se mahine mein lagbhag ₹181 bachte.
**Jaanch:** 167.7 kWh × 3.6 × 10⁶ J/kWh = 6.04 × 10⁸ J. Ulta: 1006.2 ÷ 6 = 167.7 ✅

Ye hai poora raaz: bill **energy** (kWh) ka hota hai, power ka nahi. Iron ki power (1.1 kW) AC jaisi hai par wo sirf aadha ghanta chalta hai, to uski units AC ke chhote hisse jitni hi.

**Ghar par adult ke saath:** ghar ke paanch appliances ki rating plate (ya bill par likhi kuch baatein) padho: kisi ko kholo mat, bas padho. Har ek ka I = P ÷ V aur R = V² ÷ P likho, aur bill ka rate aur units dekh kar apne ghar ka ek mahine ka hisaab aankho.

---

## Wapas verandah mein

Raat ko jab inverter ka voltage wapas lagbhag 225 V hua, to bulb phir chamak uthi. Lalita ne Mama se kaha, "To plate par jo likha hai, wo bulb ki 'sacchi power' nahi, sirf **230 V wali** power hai!" Mama bole, "Bilkul. Aur jis iron ko tum garm hote dekhti ho, uske andar ka lamba nichrome ka taar bhi isi rating se bana hai: 230 V, 1100 W."

---

## Aam galtiyan (bachke rehna)

1. **"100 W ka bulb hamesha 100 W bijli leta hai."** 100 W sirf **230 V par** milta hai. Demonstration: 230 V, 100 W bulb ka R = 52 900 ÷ 100 = 529 Ω. Supply 207 V (yaani 10 percent kam) ho to P' = (207 V)² ÷ 529 Ω = 42 849 ÷ 529 = **81 W**, 100 W nahi. Voltage 10 percent kam, power 19 percent kam, kyunki P ∝ V².
2. **"Zyada watt wale bulb ka resistance zyada hota hai."** R = V² ÷ P: V same ho to P zyada, **R kam**. Demonstration: 230 V par 20 W ke bulb ka R = 52 900 ÷ 20 = 2645 Ω aur 150 W ke bulb ka R = 52 900 ÷ 150 = 352.7 Ω. 150 W wale ka R chhota hai, aur usme current bada hai (150 ÷ 230 = 0.652 A, jabki 20 W mein 20 ÷ 230 = 0.087 A).

---

## Quick Recap

- Rating plate: **rated voltage par rated power**. I = P ÷ V, R = V² ÷ P (poori chamak par).
- Kam voltage par: P' = P (V' ÷ V)². Aadha voltage, chauthai power (lagbhag: filament cool hone se thodi zyada).
- **Series:** same I, P = I² R, zyada R (kam-watt wala) tez. **Parallel:** same V, P = V² ÷ R, kam R (zyada-watt wala) tez.
- Heater: R = V² ÷ P, phir l = R A ÷ ρ. Taar chhota to power zyada.
- Time = (m c ΔT ÷ efficiency) ÷ P. 1 kWh = 3.6 × 10⁶ J, bill = units × rate.
- Parallel appliances ke currents jud jaate hain: I_kul = P_kul ÷ V; fuse thodi upar chunte hain. Lambi patli lead mein I² R garmi.
- Zyada star ka matlab same kaam ke liye kam units.

---

## Practice Questions

(Use 230 V as the household supply. Water: c = 4200 J/kg °C. Copper ρ = 1.7 × 10⁻⁸ Ω m, nichrome ρ = 1.1 × 10⁻⁶ Ω m. Tariffs are given in each question. Treat each appliance's resistance as constant unless told otherwise.)

1. A tube light is marked 230 V, 36 W. Find its rated current and its resistance.
2. A water heater is marked 230 V, 3 kW. Find its rated current and its resistance. What power would it take on a 200 V supply (R unchanged)?
3. A 230 V, 45 W bulb is connected to a supply of 138 V. Find the current and the power. By what percentage does the power fall?
4. A 230 V, 25 W bulb and a 230 V, 75 W bulb are joined in series across 230 V. Find the current, the voltage and the power of each bulb. Which glows brighter? Which one would be brighter if they were in parallel?
5. A room heater is rated 230 V, 1.6 kW. It uses nichrome wire of area 0.30 mm². Find the length of wire needed. If the wire is shortened by 25 percent, find the new power.
6. A 2.2 kW geyser heats 15 L (15 kg) of water from 22 °C to 50 °C. (a) Find the heat needed. (b) Find the time if all the heat goes to the water. (c) The geyser is 88 percent efficient. Find the electrical energy in kWh and the cost at ₹5.50 per unit, and the time.
7. A 1.4 kW kettle of efficiency 80 percent heats 0.8 kg of water from 24 °C to 100 °C. Find the time taken.
8. An AC is rated 1.5 kW and runs for 8 h a day, with the compressor on for 55 percent of the time. Find the units used in 30 days and the cost at ₹7 per unit. A newer AC that uses 15 percent less energy for the same running replaces it: find the money saved in 30 days.
9. A refrigerator is rated 0.18 kW and its compressor runs for 40 percent of every 24 h. Find the units used in 30 days and the cost at ₹8.25 per unit.
10. On a kitchen circuit run a mixer (650 W), a microwave oven (1250 W), a refrigerator (180 W) and a lamp (26 W). (a) Find the total current. Which fuse out of 5 A, 10 A, 15 A, 20 A is suitable? (b) A 1.9 kW heater is also switched on. Find the new total current and the suitable fuse.
11. A 1.2 kW heater (230 V) is connected through an extension lead of total wire length 16 m and area 0.75 mm² (copper). Find the lead's resistance, the current, the heat produced in the lead each second, the voltage across the heater and its actual power.
12. Two lamps, 6 V, 4.5 W and 6 V, 9 W, are joined in series to a 6 V battery. Find the current, the power in each lamp and say which is brighter.
13. State True or False, with a reason: (a) A 60 W, 230 V bulb always consumes 60 W. (b) A 230 V, 15 W bulb has a greater resistance than a 230 V, 60 W bulb. (c) In series, the higher-wattage bulb is brighter. (d) Halving the voltage across a fixed resistor reduces the power to one-fourth. (e) Two 230 V bulbs of different wattage in parallel across 230 V each get their rated power.

### Answers

1. **Given:** V = 230 V, P = 36 W. **Formula:** I = P ÷ V, R = V² ÷ P. **Substitution:** I = 36 ÷ 230 = **0.157 A**. R = 52 900 ÷ 36 = **1469 Ω**. Jaanch: 0.1565 A × 1469 Ω = 230 V ✅

2. I = 3000 W ÷ 230 V = **13.04 A**. R = 52 900 ÷ 3000 = **17.63 Ω**. 200 V par: P' = (200 V)² ÷ 17.63 Ω = 40 000 ÷ 17.63 = **2268 W** (lagbhag 2.27 kW). Jaanch: 3000 × (200 ÷ 230)² = 3000 × 0.756 = 2268 W ✅

3. R = 52 900 ÷ 45 = 1175.6 Ω. I' = 138 V ÷ 1175.6 Ω = **0.117 A**. P' = (138 V)² ÷ 1175.6 Ω = 19 044 ÷ 1175.6 = **16.2 W**. Fall = (45 − 16.2) ÷ 45 = 0.64, yaani **64 percent**. Jaanch: 138 ÷ 230 = 0.6, 0.6² = 0.36, 0.36 × 45 = 16.2 W ✅

4. R₂₅ = 52 900 ÷ 25 = 2116 Ω, R₇₅ = 52 900 ÷ 75 = 705.3 Ω. R_kul = 2821.3 Ω. I = 230 ÷ 2821.3 = **0.0815 A**. V₂₅ = 0.0815 × 2116 = **172.5 V**, V₇₅ = 0.0815 × 705.3 = **57.5 V**. P₂₅ = (0.0815)² × 2116 = **14.1 W**, P₇₅ = (0.0815)² × 705.3 = **4.69 W**. Series mein **25 W wala** tez. Parallel mein dono par 230 V, to **75 W wala** tez.
   Jaanch: 172.5 + 57.5 = 230 V ✅. 14.06 + 4.69 = 18.75 W = 230 × 0.0815 = 18.75 W ✅

5. R = 52 900 ÷ 1600 = **33.06 Ω**. A = 0.30 mm² = 3.0 × 10⁻⁷ m². l = R A ÷ ρ = 33.06 × 3.0 × 10⁻⁷ ÷ 1.1 × 10⁻⁶ = **9.02 m**. Chhota karne par l = 0.75 × 9.02 m, R' = 0.75 × 33.06 = 24.80 Ω, P' = 52 900 ÷ 24.80 = **2133 W** (lagbhag 2.13 kW, yaani 1600 ÷ 0.75).
   Jaanch: ρ l ÷ A = 1.1 × 10⁻⁶ × 9.02 ÷ 3.0 × 10⁻⁷ = 33.1 Ω ✅

6. (a) Q = 15 kg × 4200 J/kg °C × (50 − 22) °C = 15 × 4200 × 28 = **1 764 000 J**. (b) t = 1 764 000 ÷ 2200 = **801.8 s** (lagbhag 13.4 minute). (c) Input = 1 764 000 ÷ 0.88 = 2 004 545 J = 2 004 545 ÷ 3.6 × 10⁶ = **0.557 kWh**. Kharcha = 0.557 × ₹5.50 = **₹3.06**. Time = 2 004 545 ÷ 2200 = **911 s** (lagbhag 15.2 minute).
   Jaanch: 2200 W × 911.2 s = 2.0045 × 10⁶ J ✅

7. ΔT = 100 − 24 = 76 °C. Q = 0.8 × 4200 × 76 = 255 360 J. Input = 255 360 ÷ 0.80 = 319 200 J. t = 319 200 ÷ 1400 = **228 s** (3 minute 48 second). Jaanch: 1400 W × 228 s = 319 200 J ✅

8. Roz: 1.5 kW × 8 h × 0.55 = 6.6 kWh. 30 din: **198 kWh**. Kharcha = 198 × ₹7 = **₹1386**. 15 percent kam: 0.15 × 198 = 29.7 kWh, bachat = 29.7 × ₹7 = **₹207.9** (lagbhag ₹208). Jaanch: 0.85 × 198 = 168.3 kWh, 198 − 168.3 = 29.7 ✅

9. Roz ka chalne ka time = 0.40 × 24 h = 9.6 h. Roz: 0.18 kW × 9.6 h = 1.728 kWh. 30 din: **51.84 kWh**. Kharcha = 51.84 × ₹8.25 = **₹427.7** (lagbhag). Jaanch: 51.84 × 8.25 = 427.68 ✅

10. (a) P_kul = 650 + 1250 + 180 + 26 = 2106 W. I = 2106 ÷ 230 = **9.16 A**. **10 A** ka fuse (9.16 A se thoda upar). (b) P_kul = 2106 + 1900 = 4006 W. I = 4006 ÷ 230 = **17.4 A**. 15 A ka fuse udd jaata, to **20 A**. Jaanch: 1900 ÷ 230 = 8.26 A, 9.16 + 8.26 = 17.42 A ✅

11. R_lead = 1.7 × 10⁻⁸ × 16 ÷ 7.5 × 10⁻⁷ = **0.363 Ω**. R_heater = 52 900 ÷ 1200 = 44.08 Ω. R_kul = 44.45 Ω. I = 230 ÷ 44.45 = **5.17 A**. Lead mein garmi = (5.17)² × 0.363 = **9.7 W**. Heater par voltage = 5.17 × 44.08 = **228.1 V**. Heater ki power = (5.17)² × 44.08 = **1180 W** (rated 1200 W se thodi kam).
    Jaanch: 9.7 + 1180.5 = 1190.2 W = 230 × 5.175 = 1190.2 W ✅

12. R₁ = 36 ÷ 4.5 = 8 Ω, R₂ = 36 ÷ 9 = 4 Ω. Series: I = 6 ÷ 12 = **0.5 A**. P₁ = (0.5)² × 8 = **2.0 W**, P₂ = (0.5)² × 4 = **1.0 W**. **4.5 W wala lamp** zyada chamakta hai. Jaanch: V₁ + V₂ = 4 + 2 = 6 V ✅. P₁ + P₂ = 3 W = 6 V × 0.5 A ✅

13. (a) **False** ❌: 60 W sirf 230 V par; voltage kam to power kam. (b) **True** ✅: R = V² ÷ P, P chhoti to R bada (4 guna). (c) **False** ❌: series mein kam-watt wale ka R zyada, to wahi zyada P = I² R le kar tez. (d) **True** ✅: P ∝ V², to (½)² = ¼. (e) **True** ✅: parallel mein dono par poora 230 V, to har ek ko apni rated power.

---

Ab tum kisi bhi plate ko padh kar current aur resistance nikaal sakte ho, jaante ho ki kam voltage par bulb dheemi kyun hoti hai, aur bill ke peeche kya hisaab hai. Lalita ne ghar ke har appliance ki plate ki ek chhoti diary banani shuru kar di.

**Aage kya?** Topic 6 mein is poore chapter ko ek saath jodenge: kab kaun sa idea lagana hai ek chart mein, aur mixed sawaal jaise "internal resistance wali cell do bulb ko chalaye to terminal voltage aur har bulb ki power kitni?", saath mein chapter ka wrap-up.
