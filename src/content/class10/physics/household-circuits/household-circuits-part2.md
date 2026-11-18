# Chapter: Household Circuits and Safety (Part 2)

> **Class:** 10 | **Subject:** Physics
> **Ye file [household-circuits.md](household-circuits.md) se aage chalti hai** (wahan fuse aur MCB: taar ko garmi se bachane wale chowkidaar). Chapter ki shuruaat: [household-circuits.md](household-circuits.md). Recall ke liye: teen taar, teen-pin plug aur earth pin [electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md).
> **Topics covered in this file:**
> 2. Earthing Aur Shock: Body Ko Zameen Se Jodna

---

# Topic 2: Earthing Aur Shock: Body Ko Zameen Se Jodna

Topic 1 mein humne fuse aur MCB ko dekha: ye wiring ko garam hokar jalne se bachate hain. Par ek sawaal bacha tha: **insaan ko kaun bachata hai?** Ek aadmi ko khatarnaak jhatka lagne ke liye amperes ka current nahi chahiye, kuch milli-amperes (mA) hi kaafi hain, jabki fuse ya MCB tab hi chalte hain jab current amperes mein chadh jaaye. Class 9 mein humne dekha tha ki earth wire fault ke waqt body ko zameen se jodkar bachati hai. Aaj hum is kahani mein **numbers** bharenge: kitna current, kitna voltage, kitni der, aur kaun sa device kis kaam ka.

---

## Fridge ka jhanjhanata darwaza

Barsaat ki shaam thi. Mr. Raikar ke ghar mein bahar paani barsa raha tha aur zameen geeli thi. Unka bhatija Yatin kitchen mein gaya, geele haath se fridge ka darwaza kholne ko jhuka, aur "arre!" karke peeche hat gaya. Haath mein halki si jhanjhanahat hui thi, jaise koi chheenti-chheenti chal rahi ho.

"Chacha, fridge ne jhatka diya!" Yatin ne kaha.

Mr. Raikar ne fridge ko dobara chhoone ke bajaye pehle Yatin ko door kiya, phir ghar ka main switch band kiya aur apne jaan-pehchaan ke electrician ko phone kiya. Electrician aaye, sirf dekhne aur naapne ke upkaran lekar, aur kuch der baad bole, "Fridge ka andar ka insulation barsaat ki seel se thoda geela ho gaya hai, aur is socket ka earth ka connection kahin se toota hua hai. Main ise theek kar deta hoon. Saath mein ek RCCB bhi lagwa lijiye."

Yatin ne poocha, "Chacha, jab current leak ho raha tha to fuse kyun nahi udda? Aur earth ka connection hota to kya badalta? Aur ye RCCB jo aap lagwa rahe hain, wo kya karta hai?" Mr. Raikar muskuraye, "Teeno sawal ek hi cheez ke hain: bijli aur insaan ka rishta. Chalo, ek-ek karke kholte hain. Par ek baat pehle: ye sab hum **samajhne** ke liye kar rahe hain. Wiring, socket, plug ya appliance mein kuch kholna ya jodna sirf electrician ka kaam hai."

---

## Suraksha

> **Suraksha:** Ghar ki wiring, plug, switch, socket ya kisi appliance ko **kabhi mat chhuo, mat kholo, mat jodo aur khud jaanchne ki koshish mat karo**. Kuch ajeeb lage (jhanjhanahat, jalne ki gandh, geela socket) to door hatkar **bade ko batao**; main switch aur repair electrician aur bade ke kaam hain. Is topic mein tum sirf **padhoge, rating plate aur labels dekhoge, aur kagaz par naksha banaoge**.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Fault current** | Wo bada current jo kharabi ke waqt (live taar ka body ya earth se seedha mil jaana) bahut kam resistance wale raaste se behta hai | Metal body se chhooe live taar ka current, jo earth wire se zameen mein jaata hai |
| **Leakage current** | Wo chhota current jo asli raaste se hatkar geeli ya ghisi insulation, body ya zameen ke raaste bah nikalta hai | Seel se geeli insulation ke raaste fridge ki body tak aaya halka current |
| **Touch voltage** | Fault ke waqt appliance ki body aur us par haath rakhne wale ke pair ke neeche ki zameen ke beech ka voltage | Earth wire ke saath bhi kuch pal ke liye body kuch volt par hoti hai |
| **Earth electrode** | Zameen mein dabi dhaatu ki rod, pipe ya plate jisse ghar ka earth wire zameen se judta hai | Namdaar mitti mein gaadi tamba ya GI ki rod |
| **Double insulation** | Appliance ke andar bijli ke hisson aur haath ke beech insulation ki do alag parte, isliye earth pin ki zaroorat nahi | Hair dryer ya mixer jisme do-pin ka plug hai |
| **RCCB (RCD)** | Aisa switch jo live aur neutral ke current ka farak dekhta hai aur farak lagbhag 30 mA ya zyada ho to supply turant kaat deta hai | Distribution board mein "30 mA" likha switch |
| **Shareer ka resistance** | Insaan ke sharir (khaaskar chamdi) ki wo rukavat jo current ko rokti hai: sukhi chamdi mein bahut zyada, geeli mein bahut kam | Sukhe haath mein zyada, geele haath mein kam |

---

## Class 9 ka recall

Class 9 mein humne dekha tha: teen-pin plug ki lambi aur moti pin **earth** ki hoti hai, metal body wale appliance ki body earth wire se jud kar zameen se juri rehti hai, aur fault mein live taar body se chhoo jaaye to bada current earth wire se zameen mein chala jaata hai aur fuse udta hai. Ye bhi seekha tha ki earth wire normal kaam mein current nahi leti ([electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md)). Wahan "bada current" aur "bahut kam resistance" shabdon mein baat thi. Ab Yatin ke sawaal ka jawab **numbers** se milega.

---

## Part A: Bina earth ke fault

Ek metal body wala appliance socho jiska earth wire toota hua hai. Andar kahin live taar ka insulation ghis gaya aur taar body se chhoo gaya. Ab poori metal body **230 V** par aa gayi (Figure 2.1). Appliance abhi bhi chalta rehta hai, kyunki live aur neutral ke beech ka asli raasta (heater, motor) kharab nahi hua. Isliye **kuch pata bhi nahi chalta**, bas body "live" ho jaati hai.

```
                              METAL CASE (earth wire NAHI)
           Live (laal)        +-----------------------------------------+
+--------+                    :                                         :
:        :-----[Fuse]--->---------------+---------------+               :
: 230 V  :                    :         :               : fault: live   :
: supply :                    :     [heater]            : taar case se  :
:        :                    :         :               : chhoo gaya    :
:        :------------------------------+               :               :
+--------+  Neutral (kaala)   :                         X               :
     :                        +-----------------------------------------+
     :  neutral yahin zameen                                    :
     :  se juda (transformer ke paas)                           v
     :                                                [ insaan: 2.5 kohm ]
     :                                                          :
========================<<<<================================================
                              zameen (ground)
```

> **Figure 2.1** – Bina earth wire ke fault: live taar metal case se chhoo gaya, to case 230 V par hai. Jo insaan case ko chhoota hai, uska sharir loop ka hissa ban jaata hai: current live se case, insaan, zameen aur wapas neutral ke earth point se supply tak jaata hai.

Is loop mein current sirf insaan ke sharir ke resistance par depend karta hai. Ye resistance har insaan aur har halat mein alag hota hai: sukhi chamdi ka resistance bahut zyada (kuch sau kΩ tak bhi), geeli chamdi ka bahut kam (kuch kΩ ya usse bhi kam). Neeche ki table **hedged, lagbhag shikshak (educational) range** hai: asli asar insaan, raaste aur samay par depend karta hai.

| Sharir se guzarta current | Lagbhag asar |
|---|---|
| lagbhag 1 mA | halki jhanjhanahat mehsoos hoti hai |
| lagbhag 10 mA | maanspeshiyan jam sakti hain, insaan taar chhod nahi paata |
| 30 mA ya zyada (chhaati se hokar) | khatarnaak: saans aur dil par asar |
| kai sau mA | bahut khatarnaak, jaan ka khatra |

### Example 1: Geele haath aur geeli zameen

230 V par ek metal body appliance ka case "live" ho gaya hai (earth wire nahi hai). Ek insaan ka geele haath aur geele pair ka kul path resistance 2.5 kΩ hai. Current kitna hoga, aur circuit ke 10 A ke MCB ka kya hoga?

**Given:** V = 230 V, R = 2.5 kΩ = 2500 Ω, MCB = 10 A.
**Find:** Current I aur MCB se tulna.
**Formula:** I = V ÷ R.
**Substitution:** I = 230 V ÷ 2500 Ω = 0.092 A = 92 mA. MCB ka hissa = 0.092 A ÷ 10 A = 0.0092 = 0.92 percent.
**Answer:** I = 92 mA, jo 30 mA ke "khatarnaak" level se lagbhag 3 guna hai. Par ye MCB ki rating (10 A) ka sirf lagbhag 0.9 percent hai: **MCB ko kuch pata hi nahi chalta, wo trip nahi hota**.
**Jaanch:** 2500 Ω × 0.092 A = 230 V ✅. 92 mA ÷ 30 mA = 3.07 ✅

### Example 2: Wahi case, par sukhi chamdi

Wahi case aur 230 V, par insaan sukhi chamdi aur sukhe joote mein hai, kul path resistance 40 kΩ.

**Given:** V = 230 V, R = 40 kΩ = 40 000 Ω.
**Find:** I.
**Formula:** I = V ÷ R.
**Substitution:** I = 230 V ÷ 40 000 Ω = 0.00575 A = 5.75 mA.
**Answer:** I lagbhag 5.75 mA: sirf jhanjhanahat jaisa asar (table mein 1 mA aur 10 mA ke beech).
**Jaanch:** 40 000 Ω × 0.00575 A = 230 V ✅. 5.75 mA, 92 mA se 92 ÷ 5.75 = 16 guna kam ✅

Dono examples mein **voltage wahi 230 V** tha; sirf resistance badla, to current 16 guna badal gaya. Yahi baat bathroom ki hai: nal ke paani mein ghule hue namak aur minerals ions banate hain ([electrolysis.md](../../chemistry/electrolysis/electrolysis.md): nal ka paani halka conductor), aur geeli chamdi par ye paani chamdi ke resistance ko bahut gira deta hai. Isliye **geele haath aur geeli zameen** ka combination sabse khatarnaak hota hai.

---

## Part B: Earth wire ke saath fault

Ab wahi fault, par appliance ki body earth wire se juri hai (Figure 2.2). Live taar ab body se chhoota hai, to bada current body se judi **earth wire** ke andar se zameen mein jaata hai aur neutral ke earth point se hokar supply tak wapas aata hai. Loop mein ab koi bada resistance nahi hai: sirf live taar ka thoda hissa aur moti earth wire.

```
                              METAL CASE (earth wire judi hai)
           Live (laal)        +-----------------------------------------+
+--------+  If bada: Fuse udta hai                                      :
:        :-----[Fuse]--->---------------+---------------+               :
: 230 V  :                    :         :               : fault: live   :
: supply :                    :     [heater]            : taar case se  :
:        :                    :         :               : chhoo gaya    :
:        :------------------------------+               :               :
+--------+  Neutral (kaala)   :                         X               :
     :                        +-----------------------------------------+
     :  neutral yahin zameen                  v
     :  se juda (transformer ke paas)         : Earth wire (hara):
     :                                        : R bahut kam, If bada
     :                                        :
========================<<<<==================+=============================
                              zameen (ground)
```

> **Figure 2.2** – Earth wire ke saath wahi fault: live taar case se chhoota hai, bada fault current If earth wire se zameen mein jaata hai, aur Fuse (ya MCB) turant trip hota hai. Case sirf thode se voltage par rehta hai.

### Example 3: Fault current aur touch voltage

Fault ke loop mein live taar ka hissa R_L = 1.4 Ω aur earth wire R_e = 0.1 Ω maan lo (assumed, sirf samajhne ke liye: asli loop mein supply ka wapsi raasta bhi judta hai). Supply 230 V. Fault current, MCB (10 A) se kitna guna, aur case ka voltage (touch voltage) nikalo. Agar usi waqt koi 2.5 kΩ path wala insaan case ko chhoota ho, to uske sharir se kitna current jaayega?

**Given:** V = 230 V, R_L = 1.4 Ω, R_e = 0.1 Ω, MCB = 10 A, R_body = 2500 Ω.
**Find:** I_f, I_f ÷ 10 A, touch voltage V_t, body current.
**Formula:** I_f = V ÷ (R_L + R_e), V_t = I_f × R_e, I_body = V_t ÷ R_body.
**Substitution:** I_f = 230 V ÷ (1.4 Ω + 0.1 Ω) = 230 V ÷ 1.5 Ω = 153.3 A. Guna = 153.3 A ÷ 10 A = 15.3. V_t = 153.3 A × 0.1 Ω = 15.3 V. I_body = 15.3 V ÷ 2500 Ω = 0.0061 A = 6.1 mA.
**Answer:** I_f lagbhag 153 A (MCB ki rating ka 15 guna), isliye MCB (ya fuse) kuch hi pal mein trip hota hai. Case lagbhag 15 V par, aur insaan ke sharir se lagbhag 6 mA: Example 1 ke 92 mA se bahut kam, aur wo bhi sirf trip hone tak ke kuch pal.
**Jaanch:** 1.4 Ω + 0.1 Ω = 1.5 Ω ✅. 153.3 A × 1.5 Ω = 230 V ✅. V_t ÷ R_body = 15.33 ÷ 2500 = 6.1 mA ✅ (sharir earth wire ke parallel mein hai, aur uska resistance 0.1 Ω se bahut bada hai, isliye V_t lagbhag wahi rehta hai)

Isse teen baatein nikalti hain:

1. Earth wire ka kaam do hai: **(i)** body ko lagbhag zameen ke potential par rakhna (touch voltage kam) aur **(ii)** fault current ko itna bada banana ki fuse ya MCB **zaroor** chale. Bina earth ke fault ka current sirf sharir se jaata hai aur MCB ko kuch pata nahi chalta (Example 1).
2. **Earth wire kaafi moti** hoti hai (aksar live ke barabar ya uske aas paas), jabki normal kaam mein isme current nahi chalta. Kyunki fault ke kuch pal mein ise lagbhag 150 A jaisa current jhelna padta hai bina pighle, aur uska R chhota rakhna hai taaki touch voltage I_f × R_e chhota rahe.
3. **Earth wire mein fuse ya switch kabhi nahi lagta.** Agar wo fuse ho jaata ya switch off ho sakta, to bina kisi ko pata chale body ki earth chali jaati, aur agle fault mein body 230 V par jhelni padti.

### Earth electrode: zameen se asli jod

Earth wire ka doosra sira ghar ke bahar zameen mein dabi **earth electrode** se judta hai (Figure 2.3). Ye tamba ya GI ki rod, pipe ya plate hoti hai, jo **namdaar (moist) mitti** mein gaadi jaati hai, kyunki sookhi retili mitti bijli ko achhe se nahi chalne deti. Purani practice mein electrode ke aas paas charcoal aur namak ki parat bhi daali jaati thi taaki mitti namdaar rahe. Electrodes ki jaanch aur sudhaar electrician ka kaam hai.

```

+----------------+
: Distribution   : Earth wire (hara/peela-hara)
: board (DB)     :----------------------+
: Earth bar      :                      :
+----------------+                      :
                                        :
                                        :
  zameen ki satah                       :
========================================+===========================================
                                        :
                                        :   Earth electrode: tamba ya GI ki rod,
                                        :   pipe ya plate, namdaar mitti mein
                                        :   dabi hui
                                        :
                                        :   (purani practice: charcoal aur
                                        :   namak ki parat bhi)
                                        :
Kaam: fault current ko zameen tak kam resistance wala raasta dena.
```

> **Figure 2.3** – Earth electrode: distribution board ki earth bar se earth wire (hara ya peela-hara) zameen ke andar dabi dhaatu ki rod ya plate tak jaati hai. Namdaar mitti kam resistance deti hai.

**Bijli kadakne se bachaav (sirf naam):** unchi imaarat par **lightning conductor** lagta hai: chhat par nukili moti dhaatu ki rod, jisse moti tamba ya GI ki patti seedhe gehre earth electrode tak jaati hai. Bijli girti hai to wo imaarat ki deewar ke bajaye is kam resistance wale raaste se zameen mein chali jaati hai. Aasmaani bijli ka poora vigyaan aage ka vishay hai.

---

## Part C: Double insulation: jab earth pin ki zaroorat nahi

Hair dryer, mixer aur chhote charger par aksar **square ke andar square** ka nishaan hota hai aur plug do-pin ka hota hai. Isme bijli ke live hisse ke upar **pehli insulation** hoti hai, aur andar ke dhaatu ke hisson ke upar **doosri insulation** (plastic ka bahari khol). Haath sirf is bahari khol ko chhoota hai. Ek insulation ghis bhi jaaye to doosri parat haath aur live taar ke beech bani rehti hai. Isliye body ko earth karne ki zaroorat nahi, aur earth pin nahi hoti.

```
(a) Nishaan               (b) Parte, andar se bahar

  +---------------+       [     live parts: taar aur motor     ]
  :               :                          :
  :   +-------+   :       [          pehli insulation          ]
  :   :       :   :                          :
  :   +-------+   :       [      andar ke dhaatu ke hisse      ]
  :               :                          :
  +---------------+       [ doosri insulation: plastic ka khol ]
                                             :
square ke andar square    [      haath yahin chhoota hai       ]
```

> **Figure 2.4** – Double insulation: (a) square ke andar square ka nishaan, (b) live hisse se haath tak do alag insulation ki parte.

Dhyan do: double insulation tabhi tak surakshit hai jab khol tootta ya geela na ho. Tooti hui body wala double-insulated appliance bhi khatarnaak ho sakta hai. **Rating plate par nishaan padhna** theek hai; appliance kholkar dekhna kabhi nahi.

---

## Part D: RCCB: insaan ka chowkidaar

Example 1 mein dekha ki 92 mA ka jhatka MCB ko pata hi nahi chalta. Is kami ko poora karta hai **RCCB**. Ye live aur neutral dono taaron se guzarta hai aur **dono ke current ki tulna** karta hai. Normal halat mein jitna current live se jaata hai, utna hi neutral se lautta hai. Agar kahin leak ho (geeli insulation se body ke raaste, ya insaan ke sharir se zameen mein), to kuch current neutral ke bajaye **zameen ke raaste** wapas jaata hai, aur neutral mein current kam lautta hai. Is farak ko RCCB mehsoos karta hai. Farak **lagbhag 30 mA** ya zyada ho to wo **lagbhag 0.03 s** mein supply kaat deta hai. (Wo ye farak kaise mehsoos karta hai, uska vigyaan agle chapter Electromagnetism mein aayega; yahan sirf kaam samjho.)

```
                                                  Washing machine (metal body)
           Live (laal)                I live      +-------------------------+
+--------+        +---------------+   3.50 A      :                         :
:        :--->----- RCCB          ------------------------+-------+         :
: 230 V  :        : I live aur I  :               :       :       : damp    :
: supply :        : neutral ko    :               :   [motor]     : leak    :
:        :        : tolta hai     :               :       :       :         :
:        :---------               ------------------------+       :         :
+--------+        +---------------+   I neutral   :               X         :
     :                                3.46 A      +-------------------------+
     :  neutral yahin zameen                                            :
     :  se juda                                                         v
     :                                                                  :
     :                                                             [ insaan ]
     :                  leak 40 mA wapas aata hai                       :
=====+========================<<<<==============================================
                              zameen (ground)
```

> **Figure 2.5** – RCCB ka block diagram: live mein 3.50 A jaata hai, neutral mein sirf 3.46 A lautta hai. Baaki 0.04 A (40 mA) body aur insaan se hokar zameen ke raaste wapas gaya. Ye farak RCCB ko trip kara deta hai.

### Example 4: Seel se leak aur MCB

Fridge ka leakage current 7 mA hai (Yatin wali halat). MCB 10 A ka hai. Ye leak MCB ki rating se kitna guna chhota hai? MCB trip hoga?

**Given:** I_leak = 7 mA = 0.007 A, MCB rating = 10 A.
**Find:** Rating ÷ I_leak, aur MCB trip hoga ya nahi.
**Formula:** Anupat = 10 A ÷ I_leak.
**Substitution:** 10 A ÷ 0.007 A = 1428.6.
**Answer:** Leak MCB ki rating se lagbhag 1429 guna chhota hai, isliye MCB (ya fuse) trip **nahi** hota. Yahi wajah hai ki Yatin ke fridge mein fuse nahi udda: wo kewal wiring ko garmi se bachane ke liye bana hai.
**Jaanch:** 1429 × 0.007 A = 10.0 A ✅. 7 mA, 1 mA se zyada par 10 mA se kam: halki jhanjhanahat jaisa asar ✅

### Example 5: RCCB kab trip hoga

Ek washing machine ke live taar mein 3.50 A jaata hai aur neutral mein 3.46 A lautta hai. RCCB (30 mA) trip hoga?

**Given:** I_live = 3.50 A, I_neutral = 3.46 A, trip level = 30 mA = 0.030 A.
**Find:** Farak aur trip ka faisla.
**Formula:** I_farak = I_live − I_neutral.
**Substitution:** I_farak = 3.50 A − 3.46 A = 0.04 A = 40 mA.
**Answer:** 40 mA, jo 30 mA se zyada hai: RCCB trip karega (lagbhag 0.03 s mein).
**Jaanch:** 3.46 A + 0.04 A = 3.50 A ✅. 40 mA > 30 mA ✅ (aur agar neutral 3.49 A hota to farak 10 mA hota: trip nahi)

**RCCB ki do seemayein (honest):** (i) Agar koi **live aur neutral dono ko ek saath** chhoo le, to current ek taar se andar aur doosre se bahar jaata hai, farak nahi banta, aur RCCB trip nahi karta. (ii) RCCB earth wire ki jagah nahi leta: wo kewal ek **doosri parat** hai. RCCB laga ho tab bhi earth wire zaroori hai, kyunki body ko zameen ke potential par rakhne ka kaam earth wire hi karti hai.

### Chaar device, chaar alag kaam

Chaaron ko aksar ek hi samjha jaata hai. Table padhke dekho ki **har ek ka sirf ek mukhya kaam** hai.

| Device | Kya dekhta hai | Mukhya kaam | Kise bachata hai |
|---|---|---|---|
| Fuse | Bahut zyada current, kuch der tak | Pighalkar wiring ko garmi se bachana | Taar aur wiring ko garmi se |
| MCB | Zyada current (overload ya short circuit) | Apne aap trip hona, dobara reset hona | Taar aur wiring (aur appliance) |
| RCCB | Live aur neutral ke current ka farak (lagbhag 30 mA) | Leak par turant supply kaatna | Insaan |
| Earth wire | Fault mein body ka potential | Body ko zameen ke paas rakhna aur fault current bada banana | Insaan (aur fuse ya MCB ko chalne mein madad) |

Ab Yatin ke tino sawaal hal: fuse isliye nahi udda ki leak chhota tha; earth hota to leak ka raasta earth wire se zameen mein jaata aur body kam voltage par rehti; aur RCCB wahi chowkidaar hai jo chhote leak ko bhi pakadta hai.

---

## Part E: Chidiya aur bijli ki line

Aapne dekha hoga ki chidiya 11 kV ki bare line par baithi rehti hai aur kuch nahi hota. Par agar koi insaan seedhi se wahi line chhoo le, to jaan ka khatra hota hai. Kyun? Farak **potential difference** ka hai.

```
(a) Chidiya bare line par
                          paer A      paer B (10 cm door)
                             v           v
   ---------------------------------------------------------------------------
khambha     11 kV ki bare line, 60 A current behta hai
   :
      A aur B ka potential lagbhag barabar (farak 0.72 mV):
      chidiya ke andar se current nahi

(b) Insaan seedhi se line ko chhoota hai
khambha     11 kV ki line
   --------------------------------------
   :                                    :
   :                                    v  insaan + seedhi + zameen:
   :                                    :  kul R = 12 kohm
   :                                    :
==============================================================================
   :                          zameen: 0 V (lagbhag)
   :
Wapsi: zameen se substation ke earth point tak, phir loop poora.
```

> **Figure 2.6** – (a) Chidiya ke dono paer bare line par kuch cm door hain, aur taar ke us chhote hisse ka resistance bahut kam hai, to dono paeron ke beech potential difference nahi ke barabar. (b) Seedhi par khada insaan line (bahut unchhe potential) aur zameen (0 V) ke beech jud jaata hai.

### Example 6: Chidiya ke paeron ke beech voltage

Ek bare line mein 60 A ka current behta hai, aur taar ka resistance 0.12 Ω per km hai. Chidiya ke dono paer 10 cm door hain, aur chidiya ke sharir ka resistance 5 kΩ maan lo. Paeron ke beech voltage aur chidiya ke sharir se current nikalo.

**Given:** I_line = 60 A, r = 0.12 Ω/km, d = 10 cm = 0.1 m = 0.0001 km, R_bird = 5 kΩ = 5000 Ω.
**Find:** Taar ke 10 cm ka resistance, V ke beech, I_bird.
**Formula:** R = r × d, V = I_line × R, I_bird = V ÷ R_bird.
**Substitution:** R = 0.12 Ω/km × 0.0001 km = 1.2 × 10⁻⁵ Ω. V = 60 A × 1.2 × 10⁻⁵ Ω = 7.2 × 10⁻⁴ V = 0.72 mV. I_bird = 7.2 × 10⁻⁴ V ÷ 5000 Ω = 1.44 × 10⁻⁷ A = 0.144 µA.
**Answer:** Paeron ke beech sirf lagbhag 0.72 mV, aur chidiya ke sharir se lagbhag 0.14 µA (milli-ampere ka lakhwan hissa): koi asar nahi.
**Jaanch:** 1.2 × 10⁻⁵ Ω × 60 A = 7.2 × 10⁻⁴ V ✅. 7.2 × 10⁻⁴ ÷ 5000 = 1.44 × 10⁻⁷ A ✅. 0.144 µA, 1 mA (felt) se lakh guna kam ✅

Chidiya line ke "11 kV" par baithi hai, par uske **dono paer lagbhag ek hi potential par** hain: unke beech koi voltage nahi, to sharir se current ka koi raasta nahi banta. Agar chidiya ek paer line par rakhe aur doosra paer zameen se jude khambhe ko chhoo de (ya do alag lines ko ek saath chhoo le), to us raaste mein bada potential difference lagega aur use khatra hoga.

### Example 7: Seedhi par khada insaan, 11 kV ki line

Ek insaan seedhi se 11 kV ki line chhoo leta hai. Insaan, seedhi aur zameen ka kul path resistance 12 kΩ hai. Current kitna?

**Given:** V = 11 kV = 11 000 V, R = 12 kΩ = 12 000 Ω.
**Find:** I.
**Formula:** I = V ÷ R.
**Substitution:** I = 11 000 V ÷ 12 000 Ω = 0.917 A.
**Answer:** I lagbhag 0.92 A = 917 mA, jo 30 mA ke "khatarnaak" level se lagbhag 30 guna hai.
**Jaanch:** 12 000 Ω × 0.917 A = 11 004 V ≈ 11 000 V ✅. 917 mA ÷ 30 mA = 30.6 ✅ (isliye line ke paas kabhi seedhi, patang ya lambi cheez nahi)

### Rubber chappal aur insulated mat

Rubber ki chappal ya mat ka resistance bahut zyada hota hai, isliye wo **kuch hadd tak madad** karte hain, khaaskar sukhe hone par. Par wo **guarantee nahi** hain: ghisi, tooti ya geeli chappal bahut kam madad karti hai, aur 11 kV jaise high voltage par bilkul nahi. "Rubber chappal pehni hai, to live taar chhoo sakte hain" sochna galat hai.

### Jhatke par: do line recall

Peedit ko **seedha mat chhuo**: pehle **main supply band karo**, ya sookhi lakdi ki lathi se door karo, aur turant madad bulao ([electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md), Part C).

---

## Kuch karke dekho (safe)

**Ghar par adult ke saath (sirf padhna aur dekhna):** (1) Ghar ke 2-3 appliances ki rating plate padho: kis par square-ke-andar-square wala nishaan hai? Kis ka plug do-pin ka hai aur kis ka teen-pin ka? Ek chart banao. (2) Adult tumhe distribution board dikhaye to **bina chhuye** padho ki RCCB par "30 mA" likha hai ya nahi aur MCB par kitna A likha hai. Kuch dabana, kholna ya jaanchna **sirf adult ya electrician** ka kaam hai.

**Kagaz par:** Figure 2.1 aur 2.2 apni copy mein banao aur har taar ka rang (laal, kaala, hara) bharo.

**Sirf padhne ke liye (kaagaz par):** Socho ek torch ka 3 V ka bulb hai aur uske dono sire ek mote taar se jud jaayein. Current bulb ke raaste se nahi, kam resistance wale taar ke raaste se jaayega, to bulb bujh jaayega. Aisa jodna cell ko bahut zyada current dene par majboor karta hai aur taar-cell garm ho sakte hain, isliye ise koi student ya teacher bhi kabhi try nahi karta (Chapter 7 mein bhi short circuit sirf discussion ke liye hai). Ye bas earth wire ke raaste jaisa hi vichaar hai: current kam resistance wala raasta dhoondhta hai.

---

## Wapas fridge ke paas

Electrician ne socket ka earth connection theek kiya, aur Mr. Raikar ne RCCB lagwane ka order bhi de diya. Yatin ne kaha, "To fridge ki body ab zameen se jud gayi: leak hoga bhi to earth wire se zameen mein, aur MCB ya RCCB turant bata dega." Mr. Raikar ne sar hilaya. "Aur tumhara kaam kya tha?" Yatin ne hanskar kaha, "Door hatna aur bade ko batana."

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Earthing se appliance kam bijli kheenchta hai."** Earthing safety ke liye hai, bill ya power ke liye nahi. *Demonstration:* ek 360 W ka paani ka pump. Earth ho ya na ho, I = P ÷ V = 360 W ÷ 230 V = 1.565 A live se jaata hai aur utna hi neutral se lautta hai. Earth wire mein normal kaam mein lagbhag 0 A. Energy meter live ka current naapta hai, isliye power wahi 360 W: 230 V × 1.565 A = 360 W ✅.

**Galti 2: "Earth wire mein hamesha current behta hai."** Class 9 mein ye hi kaha tha ki wo sirf fault mein kaam aati hai. *Demonstration:* maan lo sahi chalte hue appliance ki earth wire mein 0.8 A behta rehta. To live mein jaane wale current aur neutral mein lautne wale current ka farak 0.8 A = 800 mA hota, jo RCCB ke 30 mA se 800 ÷ 30 = 26.7 guna zyada hai. RCCB har baar trip karta. Asal mein sahi appliance ke leakage ka current bahut hi chhota (mA ka ek chhota hissa) hota hai.

---

## Quick Recap

- Bina earth ke fault mein metal body 230 V par ho jaati hai; jhatke ka current V ÷ R_sharir se tay hota hai. Geeli chamdi: R kam, current bada.
- Hedged range: lagbhag 1 mA mehsoos, lagbhag 10 mA par pakad nahi chhootti, lagbhag 30 mA ya zyada khatarnaak.
- Earth wire: kam R ka raasta, bada fault current (fuse ya MCB trip), touch voltage V_t = I_f × R_e chhota. Kabhi fuse ya switch mein nahi.
- Earth electrode: namdaar mitti mein dabi dhaatu ki rod ya plate. Lightning conductor bhi isi se judta hai.
- Double insulation: do parte, do-pin plug, nishaan square ke andar square.
- RCCB: live aur neutral ke current ka farak, lagbhag 30 mA par, lagbhag 0.03 s mein trip. Insaan ka chowkidaar; fuse ya MCB wiring ke.
- Chidiya: dono paer ek potential par, isliye safe. Insaan line aur zameen ke beech: khatarnaak.
- Rubber chappal kuch madad, guarantee nahi.

---

## Practice Questions

(Use 230 V for the household supply. The body-current table is a hedged guide: about 1 mA felt, about 10 mA cannot let go, 30 mA or more dangerous.)

1. A person with wet hands and feet has a body-path resistance of 1 kΩ and touches the live metal case of an unearthed appliance at 230 V. Find the current in mA. The circuit has a 32 A MCB: what percentage of its rating is this current, and will the MCB trip?
2. The same person with dry skin has a body-path resistance of 100 kΩ. Find the current and say how many times smaller it is than the current in Question 1. Which effect from the table would you expect?
3. Three people get currents of 4 mA, 20 mA and 45 mA through their bodies. Classify each using the table. Which of them would trip a 30 mA RCCB, and which dangerous case would the RCCB miss?
4. A refrigerator has a normal current of 0.5 A in its live wire but leaks 28 mA to earth. Find the neutral current and the live-neutral difference. Using the 30 mA rule, will the RCCB trip? Add one honest remark about a real RCCB.
5. In a fault the total loop resistance is 0.2 Ω at 230 V. Find the fault current and how many times it is the rating of a 16 A MCB. Will the MCB trip?
6. A bare line carries 150 A and its wire has a resistance of 0.09 Ω per km. A bird's feet are 6 cm apart and its body resistance is 8 kΩ. Find the voltage between its feet and the current through the bird.
7. A person on a ladder touches a 11 kV line. The total path resistance is 25 kΩ. Find the current and how many times it is larger than the 30 mA dangerous level.
8. In a fault the live part of the loop has a resistance of 0.53 Ω and the earth wire 0.07 Ω. Find the fault current and the touch voltage. If the earth wire were replaced by a much thinner one of 0.70 Ω, find the new fault current and touch voltage. What does this show about the earth wire?
9. A hair dryer has a two-pin plug and the square-in-square symbol. Explain why it needs no earth pin, and name one condition in which it can still be dangerous.
10. Name the device that responds, and why: (a) a heater lead is slowly overloaded; (b) a person standing on a wet floor touches the live case of an unearthed appliance; (c) the live wire touches the earthed metal case of an iron.
11. A person's body-path resistance is 2 kΩ and the live case is touched at 230 V. Find the current. Find the heat produced in the body for 1.5 s (no RCCB) and for 0.03 s (RCCB), and compare them.
12. State True or False with a reason: (a) A healthy appliance's earth wire carries its normal current. (b) A fuse protects a person from electric shock. (c) A double-insulated appliance needs no earth pin. (d) A bird is safe on a bare line because it is light. (e) Rubber slippers make touching a live wire safe.
13. Why is a wet bathroom more dangerous than a dry bedroom for the same faulty appliance? Use ideas of skin resistance and tap water.

### Answers

1. **Given:** R = 1 kΩ = 1000 Ω, V = 230 V, MCB = 32 A. **Formula:** I = V ÷ R. **Substitution:** I = 230 V ÷ 1000 Ω = 0.23 A = **230 mA**. Percentage = 0.23 A ÷ 32 A × 100 = **0.72 percent**. MCB **trip nahi hoga**, kyunki current uski rating se bahut kam hai, jabki 230 mA khatarnaak hai (30 mA se lagbhag 7.7 guna).
   Jaanch: 1000 Ω × 0.23 A = 230 V ✅

2. **Given:** R = 100 kΩ = 100 000 Ω. **Substitution:** I = 230 V ÷ 100 000 Ω = 0.0023 A = **2.3 mA**. Q1 ke 230 mA se 230 ÷ 2.3 = **100 guna kam**. Table ke hisaab se halki jhanjhanahat (1 mA aur 10 mA ke beech).
   Jaanch: 100 000 Ω × 0.0023 A = 230 V ✅

3. 4 mA: **halki jhanjhanahat** (1 mA se upar, 10 mA se neeche). 20 mA: **pakad nahi chhootti** (10 mA se upar, 30 mA se neeche: muscles jam sakte hain). 45 mA: **khatarnaak** (30 mA se zyada). Sirf **45 mA** 30 mA wale RCCB ko trip karaega. **20 mA wala case RCCB se chhoot jaata hai**, jabki insaan taar chhod nahi paata: isliye RCCB akela kaafi nahi, earth wire, double insulation aur geele haath se bachna bhi zaroori hai.
   Jaanch: 4 < 30 ✅, 20 < 30 ✅, 45 > 30 ✅

4. **Given:** I_live = 0.5 A, I_leak = 28 mA = 0.028 A. **Formula:** I_neutral = I_live − I_leak. **Substitution:** I_neutral = 0.5 A − 0.028 A = **0.472 A**. Farak = 0.5 A − 0.472 A = 0.028 A = **28 mA**. 28 mA < 30 mA, to **seedhe niyam se trip nahi**. Honest baat: asli RCCB 30 mA ki rating ke aadhe aur poore ke beech kahin bhi chal sakta hai, isliye 28 mA ka lagatar leak aksar trip karaata hai aur fridge ki jaanch electrician se karwani chahiye.
   Jaanch: 0.472 A + 0.028 A = 0.5 A ✅

5. **Given:** R_loop = 0.2 Ω, V = 230 V. **Formula:** I = V ÷ R. **Substitution:** I = 230 V ÷ 0.2 Ω = **1150 A**. 1150 A ÷ 16 A = **71.9 guna**. MCB **zaroor trip** hoga (aur bahut jaldi).
   Jaanch: 0.2 Ω × 1150 A = 230 V ✅

6. **Given:** I_line = 150 A, r = 0.09 Ω/km, d = 6 cm = 0.00006 km, R_bird = 8 kΩ = 8000 Ω. **Formula:** R = r × d, V = I_line × R, I_bird = V ÷ R_bird. **Substitution:** R = 0.09 Ω/km × 0.00006 km = 5.4 × 10⁻⁶ Ω. V = 150 A × 5.4 × 10⁻⁶ Ω = 8.1 × 10⁻⁴ V = **0.81 mV**. I_bird = 8.1 × 10⁻⁴ V ÷ 8000 Ω = 1.01 × 10⁻⁷ A = **0.10 µA** (lagbhag).
   Jaanch: 5.4 × 10⁻⁶ Ω × 150 A = 8.1 × 10⁻⁴ V ✅

7. **Given:** V = 11 000 V, R = 25 kΩ = 25 000 Ω. **Formula:** I = V ÷ R. **Substitution:** I = 11 000 V ÷ 25 000 Ω = **0.44 A** = 440 mA. 440 mA ÷ 30 mA = **14.7 guna**.
   Jaanch: 25 000 Ω × 0.44 A = 11 000 V ✅

8. **Given:** R_L = 0.53 Ω, R_e = 0.07 Ω, V = 230 V. **Formula:** I_f = V ÷ (R_L + R_e), V_t = I_f × R_e. **Substitution:** loop = 0.53 Ω + 0.07 Ω = 0.60 Ω. I_f = 230 V ÷ 0.60 Ω = **383.3 A**. V_t = 383.3 A × 0.07 Ω = **26.8 V**. Patli earth wire: loop = 0.53 Ω + 0.70 Ω = 1.23 Ω. I_f = 230 V ÷ 1.23 Ω = **187.0 A**. V_t = 187.0 A × 0.70 Ω = **130.9 V**. Matlab patli (zyada R) earth wire se fault current ghat gaya aur body ka voltage 26.8 V se 130.9 V ho gaya: **earth wire ka R kam hona chahiye**.
   Jaanch: 383.3 A × 0.60 Ω = 230 V ✅. 187.0 A × 1.23 Ω = 230 V ✅

9. Hair dryer mein live hisson par aur andar ke dhaatu hisson par **do alag insulation ki parte** hain aur haath sirf bahari plastic khol ko chhoota hai, isliye ek parat kharab ho to bhi doosri bachati hai, aur body ko earth karne ki zaroorat nahi. Phir bhi khatarnaak: **khol tootne par ya geele (jaise bathroom ya paani mein girne par)**.

10. (a) **MCB** (bimetal strip dheere trip karti hai) ya fuse: wiring ko garmi se bachana. (b) **RCCB**: live se body, insaan aur zameen ke raaste jaata current live aur neutral ke beech farak banata hai (agar leak 30 mA ya zyada ho). (c) **Earth wire** bada fault current banati hai, aur us par **MCB ya fuse** trip hota hai, aur body kam voltage par rehti hai.

11. **Given:** R = 2 kΩ = 2000 Ω, V = 230 V. **Formula:** I = V ÷ R, H = I² R t. **Substitution:** I = 230 V ÷ 2000 Ω = 0.115 A = **115 mA**. P_body = (0.115 A)² × 2000 Ω = 26.45 W. 1.5 s: H = 26.45 W × 1.5 s = **39.7 J**. 0.03 s: H = 26.45 W × 0.03 s = **0.79 J**. Anupat = 39.7 J ÷ 0.79 J = **50 guna**. Matlab RCCB sharir mein garmi 50 guna kam kar deta hai: kam samay mein asar bhi kam hota hai (par 115 mA khud hi bahut khatarnaak range hai, isliye shuruaat hi rokna zaroori hai).
    Jaanch: 1.5 ÷ 0.03 = 50 ✅. 0.115² = 0.013225; × 2000 = 26.45 ✅

12. (a) **False** ❌: healthy appliance mein earth wire mein lagbhag koi current nahi; current live aur neutral mein hai. (b) **False** ❌: fuse wiring ko garmi se bachata hai; kuch mA ka jhatka usse nahi uddata. (c) **True** ✅: do parte insulation hain. (d) **False** ❌: wajah halka hona nahi, dono paer lagbhag ek potential par hain, to current ka raasta nahi. (e) **False** ❌: rubber kuch madad karta hai, par ghisa ya geela ho to nahi, aur high voltage par kaam nahi karta.

13. Bathroom mein nal ke paani mein ghule hue namak (ions) chamdi par geeli parat banate hain, isliye **sharir ka resistance bahut kam** ho jaata hai. Same 230 V par I = V ÷ R ke hisaab se current bahut bada (Example 1 aur 2: R 16 guna kam to current 16 guna zyada). Geeli zameen pair se zameen tak achha raasta bhi deti hai. Sookhe bedroom mein resistance zyada hai, isliye current kam.

---

Ab tum jaante ho ki earth wire, double insulation, RCCB aur fuse ya MCB ka alag-alag kaam kya hai, aur Yatin ke jhatke ke peeche ke numbers kya the. Aap ye kar sakte ho!

**Aage kya?** Topic 3 mein dekhenge ki ghar ka circuit asal mein kaise banta hai: lighting aur power circuit alag kyun, radial aur ring ka farak, aur wo staircase ki light jo dono manzil se jal aur bujh sakti hai.
