# Chapter: Household Circuits and Safety (Part 3)

> **Class:** 10 | **Subject:** Physics
> **Ye file [household-circuits-part2.md](household-circuits-part2.md) se aage chalti hai.** Chapter ki shuruaat: [household-circuits.md](household-circuits.md). Recall ke liye: Class 9 ki ghar ki wiring [electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md); R = ρ l ÷ A [current-electricity-ii-part4.md](../current-electricity-ii/current-electricity-ii-part4.md); lambi taar mein I² R garmi [current-electricity-ii-part5.md](../current-electricity-ii/current-electricity-ii-part5.md).
> **Topics covered in this file:**
> 3. Ghar Ka Circuit Kaise Banta Hai: Radial, Ring Aur Staircase Switch

---

# Topic 3: Ghar Ka Circuit Kaise Banta Hai: Radial, Ring Aur Staircase Switch

Topic 1 aur Topic 2 mein humne ghar ke chowkidaaron ko dekha: fuse aur MCB taar ko garam hokar jalne se bachate hain, aur earth aur RCCB insaan ko jhatke se. Par chowkidaar tabhi theek kaam karte hain jab ghar ka circuit khud sahi **design** kiya gaya ho: sahi hisse, sahi taar, sahi MCB. Aaj hum ek naye ghar ka naksha padhenge: kaun sa load kis circuit par, taar kitna mota, aur seedhi ki light do jagah se kaise chalti hai.

---

## Naye flat ka naksha

Mr. Salgaonkar ne ek naya do-manzila (duplex) flat liya tha, aur uski wiring ka kaam chal raha tha. Ek Sunday unki bhatiji Hemangi unke saath flat dekhne gayi. Ek electrician bhaiya deewar ke paas ek lamba kaagaz phailaye khade the: flat ka naksha, jis par chhote chhote nishaan aur kai alag lakeerein bani thin.

"Chacha, ye lakeerein kya hain?" Hemangi ne poochha.

"Ye wiring ka plan hai, beta. Dekho: ye lakeer sirf lamp aur fan ki, ye alag lakeer sockets ki, aur ye moti wali sirf AC ki. Sab ek hi board se nikalti hain, par har ek ka apna MCB hai." Electrician bhaiya ne bataya.

Hemangi soch mein padh gayi. "Ek hi lakeer se sab kuch jod dein to kitna taar bach jaata! Itni lakeerein kyun?"

Tabhi uski nazar seedhi par padi. "Aur Chacha, naksha kehta hai ki seedhi ki light ke do switch hain: ek neeche ke floor par aur ek upar. Light to ek hi hai! Neeche se jalaun aur upar jaakar bujha doon: ye kaise hoga? Ek lamp, do switch?"

Chacha muskuraye. "Dono sawaal ek hi kahani ke hisse hain. Chalo, ek ek karke samajhte hain." (Naksha dekhna aur samajhna theek hai. Wiring ko haath nahi lagana: wo electrician ka kaam hai.)

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Lighting circuit** | Ghar ke lamp, tube light aur fan ka circuit: kam current, patla taar, chhota MCB | 6 A ka MCB aur 1.5 mm² taar (lagbhag) |
| **Power circuit** | Sockets, AC jaise bhaari load ka circuit: zyada current, mota taar, bada MCB | 16 A ka MCB aur 2.5 mm² taar (lagbhag) |
| **Radial circuit** | Board se ek taraf chalkar apne loads tak jaane wala circuit, jiska apna MCB hota hai | India ke ghar ka aam tareeka |
| **Ring main** | Ek hi cable ka ghera: board se nikal kar sab sockets se guzarta hua wapas usi board par aata hai | UK ke ghar ka tareeka, 32 A ka MCB |
| **Taar ka size** | Taar ke kate hue mukh ka area (cross-section), mm² mein | 1.0, 1.5, 2.5 aur 4 mm² |
| **Two-way (staircase) switch** | Aisa switch jiska ek common sira do raaston mein se kisi ek se judta hai; do aise switch ek lamp ko do jagah se chalate hain | Seedhi ki light |
| **Traveller wires** | Do two-way switches ke beech ke do taar | Figure 3.5 ke upar aur neeche ke taar |
| **Truth table** | Switch ki saari positions aur har position par lamp ON ya OFF ki table | Part E |
| **Fan regulator, dimmer** | Fan ki speed ya lamp ki chamak ko kam-zyada karne wale device (yahan sirf naam) | Fan ka knob |

---

## Class 9 ka recall

Class 9 mein dekha tha: ghar mein bijli service line se main fuse, energy meter, main switch aur **distribution board** tak aati hai. Board se lighting circuit (kam current, patla taar) aur power circuit (zyada current, mota taar) alag nikalte hain. Ghar ke saare appliance **parallel** mein hote hain, aur switch aur fuse **live** taar mein lagte hain ([electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md)). Wahan "5 A" aur "15 A" ki baat thi; aaj ke MCB ki aam ratings 6 A aur 16 A hain. Chapter 7 mein R = ρ l ÷ A mila tha, aur ye bhi ki lambi patli taar I² R se garam hoti hai ([current-electricity-ii-part4.md](../current-electricity-ii/current-electricity-ii-part4.md) aur [current-electricity-ii-part5.md](../current-electricity-ii/current-electricity-ii-part5.md)). Ab hum puchhenge: **alag kyun, kitna mota, aur kaise jodein.**

> **Suraksha:** Is topic ke naksha aur figures sirf **samajhne** ke liye hain. Mains ki bijli (230 V) jaan le sakti hai. Kisi bhi taar, plug, switch, socket, distribution board ya appliance ko kholna, chhoona, jodna ya jaanchna **kabhi nahi**: ye sirf licensed electrician ka kaam hai. Hum sirf padhte, dekhte aur kaagaz par draw karte hain. Jo prayog hai wo sirf **3 V ki battery** ka hai aur school mein teacher ke saath.

---

## Part A: Ek ghar, kai circuits

Distribution board se har circuit ka **apna cable aur apna MCB** nikalta hai. Is tarah ke circuit ko **radial** kehte hain: board se load tak ek raasta, jaise pedh ki alag alag shakhayein.

```
DISTRIBUTION BOARD: har circuit ka apna MCB aur apna cable

Circuit 1: Lighting, taar 1.5 mm²               +---------------------+
L (laal) -----------[MCB 6 A]-------------------+ lamp, fan (parallel):
N (kaala) --------------------------------------+ body: earth se judi :
E (hara) ---------------------------------------+ ki dhaatu body      :
                                                +---------------------+

Circuit 2: Sockets, taar 2.5 mm²                +---------------------+
L (laal) -----------[MCB 16 A]------------------+ socket par lagaya   :
N (kaala) --------------------------------------+ appliance, body     :
E (hara) ---------------------------------------+ earth se judi       :
                                                +---------------------+

Circuit 3: AC, taar 2.5 mm²                     +---------------------+
L (laal) -----------[MCB 16 A]------------------+ AC (230 V)          :
N (kaala) --------------------------------------+ body earth se       :
E (hara) ---------------------------------------+ judi                :
                                                +---------------------+
```

> **Figure 3.1** – Radial wiring ka block diagram (sirf samajhne ke liye): har circuit ke apne L (live, laal), N (neutral, kaala) aur E (earth, hara) taar aur apna MCB. Loop board ke bus bars se shuru hokar load se guzarta hua neutral se wapas board tak band hota hai (Figure 7.3 jaisa, Class 9). Earth taar sirf body ko zameen se jodta hai, normal current nahi le jaata.

Lighting aur power circuit mein farq (hedged, lagbhag; ghar ke hisaab se badal sakta hai):

| Baat | Lighting circuit | Power circuit |
|---|---|---|
| Load | lamp, tube, fan | sockets, AC, bhaari appliance |
| Kul current | kam (kuch A) | zyada (10 A se upar bhi) |
| MCB | 6 A | 16 A |
| Taar | 1.0 ya 1.5 mm² | 2.5 ya 4 mm² |

**Alag kyun?** Teen kaaran:
1. **Ek ki kharabi, doosre par asar nahi.** Socket ke kisi appliance mein fault hua to sirf power circuit ka MCB trip hoga. Lights jalti rahengi, aur andhere mein seedhi par girne ka khatra nahi.
2. **Bhaari load ke liye mota taar.** Zyada current ka matlab zyada I² R. Power circuit ka taar mota hota hai taaki wo garam na ho. Lighting ke liye itna mota taar bekaar kharcha hota.
3. **MCB ka sahi match.** 6 A ka MCB lighting ke patle taar ko bachata hai, aur 16 A ka MCB 2.5 mm² ke taar ko. Ek hi circuit par hota to ek MCB patle aur mote dono taar ko theek se nahi bacha sakta: 6 A ka MCB bhaari load ko rok deta, aur 16 A ka MCB patle taar ko nahi bachata.

(Lighting circuit mein bhi earth taar hota hai, metal fittings ke liye. Figure 3.1 mein teeno circuit mein teeno taar dikhaye hain.)

**Ghar par adult ke saath (sirf dekhna):** apne ghar ke board ya meter ke paas dekho ki kitne MCB hain aur unpar kya likha hai (6 A, 16 A, 32 A). **Kuch kholna ya chhoona nahi.** Agar labels nazar na aayein to bas aage badho.

---

## Part B: Taar kitna mota?

Taar ka resistance R = ρ l ÷ A hota hai. **Taar jitna mota (A jitna bada), R utna kam**, aur usi current par I² R garmi utni kam. Isliye zyada current wale circuit ke liye mota taar chunte hain. Taar ke packet par likhi rating dekho: neeche ki table ghar ke copper taar ki **lagbhag** aam values hai (hedged, shaiksik).

| Taar ka size | Safe current (lagbhag) | R, ek taar, per metre (ρ = 1.7 × 10⁻⁸ Ω m) | Aam jagah |
|---|---|---|---|
| 1.0 mm² | 6 A | 0.0170 Ω | chhoti lighting |
| 1.5 mm² | 10 A | 0.0113 Ω | lighting, fan |
| 2.5 mm² | 16 A | 0.0068 Ω | sockets, AC |
| 4 mm² | 24 A | 0.00425 Ω | bhaari load |

**Ek zaroori baat:** bijli live taar se load tak jaati hai aur neutral se wapas aati hai. Isliye "board se lamp tak 22 m" ka matlab taar ki **kul length 44 m** (jaane aur aane ki). Chapter 7 ke extension lead mein bhi aise hi ginti thi.

### Example 1: Lighting circuit ki taar

**Given:** Board se aakhri lamp tak ka run 22 m, copper taar 1.5 mm² = 1.5 × 10⁻⁶ m², ρ = 1.7 × 10⁻⁸ Ω m, circuit ka current I = 4.5 A.
**Find:** Taar ka resistance, taar mein gira voltage aur taar mein garmi.
**Formula:** R = ρ l ÷ A (l = 2 × run); V = I R; P = I² R.
**Substitution:** l = 2 × 22 m = 44 m. R = 1.7 × 10⁻⁸ Ω m × 44 m ÷ 1.5 × 10⁻⁶ m² = 7.48 × 10⁻⁷ ÷ 1.5 × 10⁻⁶ Ω = 0.499 Ω. V = 4.5 A × 0.499 Ω = 2.24 V. P = (4.5 A)² × 0.499 Ω = 20.25 A² × 0.499 Ω = 10.1 W.
**Answer:** R lagbhag 0.50 Ω, voltage lagbhag 2.24 V (230 V ka lagbhag 1 percent), garmi lagbhag 10.1 W.
**Jaanch:** V × I = 2.244 V × 4.5 A = 10.1 W ✅. Garmi 44 m par phaili hai: 10.1 ÷ 44 = lagbhag 0.23 W per metre, jo 1.5 mm² ke safe current (10 A) par 100 A² × 0.0113 Ω = 1.13 W per metre se kaafi kam hai, to taar thanda rahega ✅. Units: Ω m × m ÷ m² = Ω ✅

### Example 2: Ek hi load, do taar

**Given:** Power circuit ka load 2.415 kW = 2415 W, supply 230 V, run 28 m (taar ki kul length 56 m). Taar A: 1.5 mm², taar B: 2.5 mm².
**Find:** Current, har taar ka R, taar mein garmi aur taar mein gira voltage.
**Formula:** I = P ÷ V; R = ρ l ÷ A; P_taar = I² R; V_taar = I R.
**Substitution:** I = 2415 W ÷ 230 V = 10.5 A. R_A = 1.7 × 10⁻⁸ × 56 ÷ 1.5 × 10⁻⁶ = 9.52 × 10⁻⁷ ÷ 1.5 × 10⁻⁶ = 0.635 Ω. R_B = 9.52 × 10⁻⁷ ÷ 2.5 × 10⁻⁶ = 0.381 Ω. P_A = (10.5 A)² × 0.635 Ω = 110.25 × 0.635 = 70.0 W, P_B = 110.25 × 0.381 = 42.0 W. V_A = 10.5 A × 0.635 Ω = 6.66 V, V_B = 10.5 A × 0.381 = 4.00 V.
**Answer:** 1.5 mm² mein lagbhag 70.0 W aur 6.66 V, 2.5 mm² mein lagbhag 42.0 W aur 4.00 V. (Appliance ko ab lagbhag 223.3 V aur 226.0 V milte hain: hum current ko 10.5 A hi maan rahe hain, ye ek mota andaza hai.)
**Jaanch:** 70.0 ÷ 42.0 = 1.67 = 2.5 ÷ 1.5 ✅ (same current par garmi 1 ÷ A ke hisaab se). 6.66 V × 10.5 A = 70.0 W ✅

10.5 A ka load 1.5 mm² ki lagbhag safe limit (10 A) se bhi upar hai, aur taar zyada garam. Isliye is circuit ke liye **2.5 mm²** (safe lagbhag 16 A) aur 16 A ka MCB chunte hain. (MCB chunne ka poora tareeka Topic 1 mein hai: MCB load se upar aur taar ki safe limit se neeche.)

---

## Part C: Radial aur ring main

India mein ghar aam taur par **radial** hote hain (Part A). UK jaise kuch deshon mein **ring main** chalta hai: **ek hi 2.5 mm² ka cable** (L, N, E teeno saath) 32 A ke MCB se nikalkar saare sockets se guzarta hai aur wapas usi MCB par aata hai.

```
                   [S1]                [S2]
                    :                   :
                    :                   :
        +----->-----+-------------------+----------->-----------+
        :                                        9 A            :
        :                                                       :
 +------+------+                                                :
 : MCB 32 A    :                                                +---[S3]
 : (L+N+E)     :                                                :
 +------+------+                                                :
        :                                                       :
        :                                        9 A            :
        +----->---------------+--------------------->-----------+
                              :
                              :
                            [S4]
```

> **Figure 3.2** – Ring main ka block diagram (sirf samajhne ke liye): ek cable, jisme L (laal), N (kaala) aur E (hara) saath chalte hain, 32 A ke MCB se nikalkar ghera banata hai. Sockets S1, S2, S4 aur S3 ghere se judi hain (parallel). S3 par 4.14 kW (18 A) ka heater hai, aur wo ghere ke theek beech mein hai, to dono raaste barabar lambe hain. ">" current ki disha hai.

Ring mein har socket ko bijli **do raaston se** milti hai. Do barabar raaste parallel mein hote hain, to S3 ka 18 A load beech mein hone par dono taraf lagbhag **9 A** aata hai (barabar R par current barabar baantta hai). Isi liye patli 2.5 mm² taar (safe lagbhag 16 A) 32 A tak ke circuit ko sambhal leti hai. Load ghere ke kinare par ho to ek taraf zyada current aata hai.

| Baat | Radial (India mein aam) | Ring main (UK-style) |
|---|---|---|
| Raasta | board se load tak ek raasta | board se ghera, wapas board |
| MCB aur taar ka mel | MCB 16 A, taar 2.5 mm² (safe lagbhag 16 A): seedha mel | MCB 32 A, taar 2.5 mm²: mel tabhi jab current dono taraf baante |
| Sockets | ek circuit par kam load | ek circuit par kai sockets |
| Taar toote ya joint dheela ho | wo hissa band: pata chal jaata hai | socket chalte rehte hain: pata nahi chalta |
| Plug mein fuse | aam taur par nahi hota | UK ke plug mein apna fuse hota hai, kyunki 32 A ka MCB appliance ki chhoti taar ke liye bahut bada hai |

### Example 3: Ring toot jaye to?

```
                   [S1]                [S2]
                    :                   :
                    :                   :
        +----->-----+-------------------+----------->-----------+
        :                                       18 A            :
        :                                                       :
 +------+------+                                                :
 : MCB 32 A    :                                                +---[S3]
 : (L+N+E)     :                                                :
 +------+------+                                                :
        :                                                       :
        :                        taar toota                     :
        +---------------------+--     X     --------------------+
                              :
                              :
                            [S4]
```

> **Figure 3.3** – Wahi ring, par neeche ka taar (X par) toota hua hai. S3 ka poora current ab sirf upar ke raaste se aata hai. MCB ko kuch pata nahi chalta, kyunki current 32 A se kam hai.

**Given:** Ring 2.5 mm² (safe lagbhag 16 A), MCB 32 A. S3 par 4.14 kW ka heater, supply 230 V, S3 ghere ke beech mein.
**Find:** Dono raaston mein current, aur ek taar toot jaye to current, safe limit se tulna aur kya MCB trip hoga.
**Formula:** I = P ÷ V; barabar raaste: I_har raasta = I ÷ 2; garmi ∝ I² (same taar).
**Substitution:** I = 4140 W ÷ 230 V = 18 A. Har raaste mein 18 A ÷ 2 = 9 A. Taar toota to ek raaste mein 18 A. 18 A ÷ 16 A = 1.125, garmi ka anupaat (1.125)² = 1.27.
**Answer:** Normal mein 9 A + 9 A, 16 A ki limit ke andar. Toot jaye to ek taar mein 18 A (limit se upar), lagbhag 27 percent zyada garmi, aur 18 A < 32 A hai, to MCB trip **nahi** hoga.
**Jaanch:** 9 A + 9 A = 18 A ✅. 18 A < 32 A ✅

Isliye ring main ke joint aur taar ki jaanch ka kaam sirf electrician ka hai, aur isliye India mein seedhe-saade radial circuit zyada aam hain.

---

## Part D: Switch live mein, lamp neutral se

Lamp ke saath switch **series** mein hota hai (wahi current), aur switch **live wire** mein lagta hai: **live → switch → lamp → neutral.** (Class 9 mein bhi: switch live mein.)

```
(a) Switch live taar mein

+--------+ L (laal)             switch
:        +----------[MCB 6 A]----o/  o----------------+
: 230 V  :                                            :
: supply :                                           (X)  lamp, switch OFF
:        : N (kaala)                                  :
:        +--------------------------------------------+
+--------+
E (hara) ------------------------------------------ [lamp ki dhaatu body]

(b) Switch neutral taar mein

+--------+ L (laal)
:        +----------[MCB 6 A]-------------------------+
: 230 V  :                                            :   <- live 230 V
: supply :                                           (X)  lamp, switch OFF
:        : N (kaala)                                  :
:        +-----------------------o/  o----------------+
+--------+                      switch
E (hara) ------------------------------------------ [lamp ki dhaatu body]
```

> **Figure 3.4** – (a) Sahi: switch live (laal) taar mein hai. Switch OFF hai, to lamp live se kata hua hai: lamp ke dono taraf lagbhag neutral wala potential hai. (b) Galat: switch neutral mein hai. Switch OFF hone par bhi live ka 230 V lamp tak pahunchta hai.

(a) mein switch kholte hi lamp **live se alag** ho jaata hai. (b) mein lamp bujha dikhta hai, par uski taraf ka taar abhi bhi 230 V par hai. Isliye "lamp bujha hai to safe hai" kabhi mat maano: kuch bhi kholna electrician ka kaam hai.

- **Socket ka alag switch:** socket ka apna switch aam taur par live mein hota hai. Switch OFF karke plug lagane ya nikalne se pins par current nahi hota.
- **Fan regulator aur dimmer:** fan ki speed aur lamp ki chamak ko kam-zyada karte hain, aur fan ya lamp ke series mein aate hain (andar ka kaam aage ki baat).
- **Multi-plug:** ek socket par kai appliance parallel mein, aur sab usi circuit ke MCB ke current mein jud jaate hain (Chapter 7 mein dekha tha; Topic 4 mein dekhenge ki zyada load par kya hota hai).

---

## Part E: Seedhi ki light, do switch

Ek aam switch lamp ko sirf ek jagah se chalata hai. **Two-way switch** (SPDT) mein ek **common** sira hota hai jo do sirinon (1 aur 2) mein se kisi ek se judta hai. Do aise switch S1 aur S2 ko do taaron se jodte hain (**traveller wires**):

- Live taar S1 ke common sire par aata hai.
- S1 ke sirine 1 aur 2 do traveller taaron se S2 ke sirine 1 aur 2 se jude hain.
- S2 ka common sira lamp ko jaata hai, aur lamp neutral par.

```
(a) S1 Up, S2 Up: lamp ON
                 S1         traveller 1    S2
                    o=====================o
+--------+ L (laal)/                       \
:        +========o                         o========(lamp)====+
:        :                                                     !
: 230 V  :          o---------------------o                    !
: supply :                  traveller 2                        !  lamp ON
:        :                                                     !
:        : N (kaala)                                           !
:        +=====================================================+
+--------+
E (hara) ------------------------------------------ [lamp ki dhaatu body]
(zameen se)

(b) S1 Down, S2 Up: lamp OFF
                 S1         traveller 1    S2
                    o---------------------o
+--------+ L (laal)                        \
:        +--------o                         o--------(lamp)----+
:        :         \                                           :
: 230 V  :          o---------------------o                    :
: supply :                  traveller 2                        :  lamp OFF
:        :                                                     :
:        : N (kaala)                                           :
:        +-----------------------------------------------------+
+--------+
E (hara) ------------------------------------------ [lamp ki dhaatu body]
(zameen se)
```

> **Figure 3.5** – Two-way switch ka circuit. "Up" ka matlab common upar ke sirine se juda, "Down" ka matlab neeche ke sirine se. "=" aur "!" wale hisse mein current hai. (a) S1 Up, S2 Up: upar ke traveller se poora loop band, lamp ON. (b) S1 Down, S2 Up: S1 neeche ke traveller par, S2 upar wale par: loop toota hua, lamp OFF. (Up aur Down kaagaz ke labels hain, asli switch par aise likha nahi hota.)

**Lamp tabhi ON jab S1 aur S2 ek hi traveller chunein.** Figure se truth table:

| S1 | S2 | Lamp |
|---|---|---|
| Up | Up | ON |
| Up | Down | OFF |
| Down | Up | OFF |
| Down | Down | ON |

### Example 4: Figure se truth table nikalna

**Given:** Figure 3.5 ka wiring. Chaaron position (S1, S2) = (Up, Up), (Up, Down), (Down, Up), (Down, Down).
**Find:** Har position par lamp ON ya OFF, aur kya koi bhi ek switch palatne se lamp badal jaati hai.
**Formula:** Lamp ON ⇔ S1 aur S2 ek hi traveller se jude hon.
**Substitution:** (Up, Up): dono upar wale traveller par, ON. (Up, Down): S1 upar, S2 neeche, alag traveller, OFF. (Down, Up): OFF. (Down, Down): dono neeche wale traveller par, ON.
**Answer:** ON, OFF, OFF, ON. Har position se kisi ek switch ko palatne par agli position ka lamp ulta ho jaata hai.
**Jaanch:** (Up, Up) ON mein S1 palto to (Down, Up) OFF ✅. (Down, Up) OFF mein S2 palto to (Down, Down) ON ✅. Har row ki agli row (ek switch palte) ulti hai ✅

Isliye seedhi ke neeche S1 se light jalao, upar jaakar S2 se bujha do, aur wapas aao to dobara jala do: **ek lamp, do jagah se**. Teen ya zyada jagah se chalane ke liye ek aur **intermediate switch** beech mein judta hai (sirf naam; ye electrician ka kaam hai).

**School mein teacher ke saath (low-voltage model):** 3 V ki battery (do 1.5 V ke cell), ek 3 V ka torch bulb aur do SPDT switch (ya paper-clip se bane switch) Figure 3.6 jaise jodo. Chaaron positions try karo aur truth table bharo. **Mains ke switch ya socket se aisa prayog kabhi nahi.**

```
                 S1         traveller 1    S2
                    o---------------------o
+--------+ + taraf /
:        +--------o                         o--------(bulb)----+
:        :                                 /                   :
: 3 V    :          o---------------------o                    :
: battery:                  traveller 2                        :  bulb OFF
:        :                                                     :
:        : - taraf                                             :
:        +-----------------------------------------------------+
+--------+
```

> **Figure 3.6** – Low-voltage model: 3 V ki battery, two-way switch S1 aur S2 aur torch bulb, poora closed loop. Yahan S1 Up, S2 Down hai: bulb OFF. Ek switch palto to bulb jal jayega.

**Ghar par adult ke saath (kaagaz par):** Figure 3.5 apni copy mein banao. Chaaron positions ke liye rang se current ka raasta bharo (jahan current nahi, wahan koi rang nahi). Kuch kholna ya chhoona nahi.

---

## Part F: Poore ghar ka plan

Ab Hemangi wala naksha numbers se.

### Example 5: Flat ke loads ko circuits mein baantna

**Given:** Lighting: 12 LED lamp (10 W har ek), 5 fan (50 W har ek), 2 LED tube (18 W har ek). Kitchen sockets: induction cooker 1.52 kW, mixer 0.55 kW, chimney 0.25 kW. Bedroom ka AC 1.95 kW. Supply 230 V. Sab ek saath chalein (sabse kharaab sthiti).
**Find:** Har circuit ka kul power aur current, aur agar sab ek hi 16 A ke circuit par hote to kya hota.
**Formula:** P_kul = jod; I = P ÷ V.
**Substitution:** Lighting: 12 × 10 + 5 × 50 + 2 × 18 = 120 + 250 + 36 = 406 W, I = 406 ÷ 230 = 1.77 A. Kitchen: 1520 + 550 + 250 = 2320 W, I = 2320 ÷ 230 = 10.1 A. AC: 1950 W, I = 1950 ÷ 230 = 8.48 A. Sab ek saath: 406 + 2320 + 1950 = 4676 W, I = 4676 ÷ 230 = 20.3 A.
**Answer:** Lighting 1.77 A (6 A ka MCB, 1.5 mm²), kitchen 10.1 A (16 A ka MCB, 2.5 mm²), AC 8.48 A (16 A ka MCB, 2.5 mm²). Sab ek hi 16 A ke circuit par hote to 20.3 A aata, jo 16 A se zyada hai.
**Jaanch:** 1.77 + 10.09 + 8.48 = 20.34 A ≈ 20.3 A ✅. 230 V × 20.33 A = 4676 W ✅

Teeno alag circuit hone se har ek MCB ki limit ke andar hai, aur ek ki fault baaki ko band nahi karti.

---

## Wapas naye flat mein

Hemangi ne ek naksha kaagaz par apne haath se bana liya: teen alag circuit aur seedhi ke do switch. "Chacha, ab samajh aaya: itni lakeerein taar ki barbaadi nahi, ghar ki suraksha hain! Aur do switch ek lamp ko isliye chala sakte hain kyunki har switch **raasta badalta** hai, sirf on-off nahi karta."

"Bilkul," Chacha bole. "Aur electrician bhaiya ka kaam dekhna theek hai, haath lagana nahi."

---

## Aam galtiyan (bachke rehna)

1. **"Two-way switch ke liye do lamp chahiye."** Ek hi lamp chahiye, do switch milkar use chalate hain. Demonstration: maan lo galti se do lamp lagaye, S1 se lamp 1 aur S2 se lamp 2. S1 ON, S2 OFF ho to sirf lamp 1 jalegi. Upar jaakar S2 ko dabane se lamp 2 jalegi, par lamp 1 **upar se bujh nahi sakti**. Do lamp hone se do jagah se ek hi lamp ka control nahi milta. Figure 3.5 mein ek lamp, do switch: kisi bhi switch ko palatne se wahi lamp badalti hai.
2. **"Taar bachane ke liye saare kamre ek hi circuit par."** Demonstration: teen kamron ka load 4.2 A, 5.8 A aur 7.5 A hai. Alag alag har kamra 16 A ke MCB ke andar hai. Ek hi circuit par total 4.2 + 5.8 + 7.5 = 17.5 A, jo 16 A se zyada hai: MCB trip hoga. Aur kisi ek kamre ki fault poore flat ki bijli le jaayegi. Taar ke kuch metre bachaye, par ek fault par poora flat andhera.

---

## Quick Recap

- Ghar ka circuit **radial**: board se har circuit ka apna cable aur MCB. **Lighting** (6 A, 1.0 ya 1.5 mm²) aur **power** (16 A, 2.5 ya 4 mm²) alag.
- Alag isliye: ek ki fault doosre ko band nahi kare, bhaari load ko mota taar mile, aur MCB taar se mel khaye.
- Taar ka size: R = ρ l ÷ A; mota taar, kam R, kam I² R. Taar ki length = 2 × run (live aur neutral).
- Safe current table (lagbhag): 1.0 mm² 6 A, 1.5 mm² 10 A, 2.5 mm² 16 A, 4 mm² 24 A; packet par rating dekho.
- **Ring main** (UK): 2.5 mm² ka ghera, 32 A ka MCB; har socket ko do raaston se bijli. Taar toote to pata nahi chalta, aur bacha taar overload ho sakta hai. India mein radial aam.
- Switch live mein, lamp neutral se: live → switch → lamp → neutral.
- **Two-way switch**: lamp ON jab S1 aur S2 ek hi traveller chunein; ek lamp, do jagah.
- Fan regulator aur dimmer: speed aur chamak kam-zyada (naam).

---

## Practice Questions

(Use 230 V, copper ρ = 1.7 × 10⁻⁸ Ω m, and the wire table of Part B. "Run" means the one-way distance, so the wire length is twice the run.)

1. A lighting circuit has a run of 18 m of 1.5 mm² copper wire and carries 5.4 A. Find the resistance of the wire, the voltage lost in it and the heat produced in it.
2. A power circuit has a run of 35 m of 2.5 mm² copper wire and carries 14.5 A. Find the wire's resistance, the heat produced and the voltage lost as a percentage of 230 V.
3. A run of 52 m of 4 mm² copper wire carries 21.5 A. Find the resistance, the heat produced and the heat per metre of wire.
4. A run of 45 m is wired once with 1.5 mm² and once with 4 mm² copper wire, each carrying 9 A. Find each wire's resistance and heat, and the ratio of the two heats. What does the ratio equal?
5. An electrician crossed the two traveller wires at S2 in a staircase circuit: the upper traveller now reaches the lower terminal of S2 and the lower traveller reaches the upper terminal. Using the labels of Figure 3.5, write the truth table and state when the lamp is ON.
6. A flat has these loads: 8 LED lamps (7 W each), 3 fans (58 W each), 1 tube light (28 W); and, on power circuits, an air fryer 1.38 kW, a rice cooker 0.72 kW, a refrigerator 0.34 kW and an AC 2.05 kW. (a) Find the current of the lighting circuit and say whether a 6 A MCB is enough. (b) Find the total current of the four power appliances and say if one 16 A circuit can carry them all. (c) Suggest a split into two circuits and find each current.
7. A 16 A power circuit supplies appliances of 1.15 kW, 0.84 kW and 0.62 kW. (a) Find the total current. (b) How much more power can be added before 16 A is reached? (c) A 1.32 kW appliance is plugged in as well. Find the new current and by what percentage it exceeds 16 A.
8. Using the wire table, choose the smallest wire size whose safe current is not less than the load current for circuits carrying 3.9 A, 9.2 A and 19 A.
9. A 2.5 mm² ring main with a 32 A MCB supplies a heater of 5.29 kW at the exact middle of the ring. (a) Find the current in each arm. (b) One arm breaks. Find the current in the remaining arm, compare the heating with that at the safe current, and say if the MCB trips.
10. True or False, with a reason: (a) In a ring main, each socket can get current from both directions. (b) A 4 mm² wire has a higher resistance than a 1.5 mm² wire of the same length. (c) Radial circuits are the usual practice in Indian homes. (d) A lamp's switch can be put in the neutral wire because the lamp is already joined to the live wire. (e) With two two-way switches and one lamp, the lamp is ON in two of the four switch positions.
11. A 2.5 mm² copper wire carries 12.5 A. The voltage lost in the wires must not exceed 5.2 V. Find the longest run allowed.
12. Two ordinary switches S1 and S2 are used for one lamp, (i) in series and (ii) in parallel. Write the truth table for each and show that neither works as a staircase circuit, where flipping either switch must always change the lamp's state.

### Answers

1. **Given:** run 18 m, l = 36 m, A = 1.5 × 10⁻⁶ m², I = 5.4 A. **Formula:** R = ρ l ÷ A; V = I R; P = I² R. **Substitution:** R = 1.7 × 10⁻⁸ × 36 ÷ 1.5 × 10⁻⁶ = 6.12 × 10⁻⁷ ÷ 1.5 × 10⁻⁶ = **0.408 Ω**. V = 5.4 × 0.408 = **2.20 V**. P = (5.4)² × 0.408 = 29.16 × 0.408 = **11.9 W**.
   Jaanch: V × I = 2.203 × 5.4 = 11.9 W ✅

2. l = 70 m, A = 2.5 × 10⁻⁶ m². R = 1.7 × 10⁻⁸ × 70 ÷ 2.5 × 10⁻⁶ = 1.19 × 10⁻⁶ ÷ 2.5 × 10⁻⁶ = **0.476 Ω**. P = (14.5)² × 0.476 = 210.25 × 0.476 = **100.1 W**. V = 14.5 × 0.476 = 6.90 V, jo 230 V ka 6.90 ÷ 230 × 100 = **3.0 percent** hai.
   Jaanch: 6.902 × 14.5 = 100.1 W ✅

3. l = 104 m, A = 4 × 10⁻⁶ m². R = 1.7 × 10⁻⁸ × 104 ÷ 4 × 10⁻⁶ = 1.768 × 10⁻⁶ ÷ 4 × 10⁻⁶ = **0.442 Ω**. P = (21.5)² × 0.442 = 462.25 × 0.442 = **204.3 W**. Per metre: 204.3 ÷ 104 = **1.96 W/m**.
   Jaanch: 21.5 × 0.442 = 9.50 V, 9.50 × 21.5 = 204.3 W ✅

4. l = 90 m. R₁.₅ = 1.7 × 10⁻⁸ × 90 ÷ 1.5 × 10⁻⁶ = **1.02 Ω**. R₄ = 1.7 × 10⁻⁸ × 90 ÷ 4 × 10⁻⁶ = **0.3825 Ω**. Garmi: (9)² × 1.02 = 81 × 1.02 = **82.6 W**; 81 × 0.3825 = **31.0 W**. Anupaat 82.62 ÷ 30.98 = 2.67, jo 4 ÷ 1.5 = 2.67 ke barabar hai: same current par garmi 1 ÷ A ke hisaab se.
   Jaanch: 1.02 ÷ 0.3825 = 2.67 ✅

5. Ab S2 ka Up wala sira neeche ke traveller se jud gaya aur Down wala upar ke traveller se. S1 Up = upar ka traveller, S1 Down = neeche ka. S2 Up = neeche ka traveller, S2 Down = upar ka. Lamp ON jab dono ek hi traveller chunein. (Up, Up): S1 upar, S2 neeche, **OFF**. (Up, Down): dono upar, **ON**. (Down, Up): dono neeche, **ON**. (Down, Down): S1 neeche, S2 upar, **OFF**. **Lamp ON tab jab dono switch alag positions par hon.**
   Jaanch: har row ki ulti row Figure 3.5 wali table se bilkul ulta hai ✅

6. (a) P = 8 × 7 + 3 × 58 + 28 = 56 + 174 + 28 = 258 W. I = 258 ÷ 230 = **1.12 A**, jo 6 A se bahut kam hai: 6 A MCB kaafi hai. (b) P = 1380 + 720 + 340 + 2050 = 4490 W. I = 4490 ÷ 230 = **19.5 A** > 16 A: ek 16 A circuit sab nahi utha sakta. (c) AC (2.05 kW) alag: 2050 ÷ 230 = **8.91 A**. Baaki teen: 1380 + 720 + 340 = 2440 W, 2440 ÷ 230 = **10.6 A**. Dono 16 A ke andar.
   Jaanch: 8.91 + 10.61 = 19.52 A ✅

7. (a) P = 1150 + 840 + 620 = 2610 W. I = 2610 ÷ 230 = **11.3 A**. (b) 16 A par P = 230 × 16 = 3680 W, to aur **1070 W** (3680 − 2610). (c) P = 2610 + 1320 = 3930 W, I = 3930 ÷ 230 = **17.1 A**. Zyada: (17.1 − 16) ÷ 16 × 100 = **6.8 percent**.
   Jaanch: 1070 ÷ 230 = 4.65 A, 11.35 + 4.65 = 16 A ✅

8. 3.9 A: **1.0 mm²** (safe 6 A). 9.2 A: **1.5 mm²** (safe 10 A), par margin bahut kam hai, to practice mein ek size upar (2.5 mm²) lena behtar hoga. 19 A: **4 mm²** (safe 24 A), kyunki 2.5 mm² ki limit 16 A hai.
   Jaanch: 6 ≥ 3.9 ✅, 10 ≥ 9.2 ✅, 24 ≥ 19 ✅ aur 16 < 19 (2.5 mm² chhota) ✅

9. (a) I = 5290 W ÷ 230 V = 23 A. Beech mein, to dono arm barabar: 23 ÷ 2 = **11.5 A** har arm. (b) Ek arm toota to **23 A** ek arm mein. 23 ÷ 16 = 1.4375, garmi (1.4375)² = 2.07, yaani lagbhag **107 percent zyada**. 23 A < 32 A, to MCB **trip nahi** hoga.
   Jaanch: 11.5 + 11.5 = 23 A ✅

10. (a) **True** ✅: ring ke dono taraf se raasta hai. (b) **False** ❌: mota taar ka R kam hota hai. (c) **True** ✅: aam taur par India mein radial. (d) **False** ❌: switch neutral mein ho to OFF par bhi live ka 230 V lamp tak rehta hai. (e) **True** ✅: (Up, Up) aur (Down, Down) par ON, yaani 4 mein se 2.

11. R = V ÷ I = 5.2 V ÷ 12.5 A = 0.416 Ω. l = R A ÷ ρ = 0.416 × 2.5 × 10⁻⁶ ÷ 1.7 × 10⁻⁸ = 1.04 × 10⁻⁶ ÷ 1.7 × 10⁻⁸ = 61.2 m (jaane aur aane ki). Run = 61.2 ÷ 2 = **30.6 m**.
    Jaanch: R = 1.7 × 10⁻⁸ × 61.2 ÷ 2.5 × 10⁻⁶ = 0.416 Ω; 12.5 × 0.416 = 5.2 V ✅

12. (i) Series: ON sirf jab S1 aur S2 dono ON. (ON, ON) ON; baaki teeno OFF. (ii) Parallel: ON jab koi bhi ek ON. (OFF, OFF) OFF; baaki teeno ON. Staircase ke liye har position se kisi bhi switch ko palatne par lamp badalni chahiye. Series: (OFF, OFF) mein S1 ko ON karo to (ON, OFF) bhi OFF, lamp nahi badli. Parallel: (ON, ON) mein S1 OFF karo to (OFF, ON) bhi ON, lamp nahi badli. Dono mein kuch position par ek switch ka asar nahi hota: staircase nahi bana.
    Jaanch: two-way switch mein har position par asar hota hai (Figure 3.5) ✅

---

Ab Hemangi ka naksha bhi pakka ho gaya, aur seedhi ki light bhi do jagah se chalegi. Aap bhi ghar ka naksha padh sakte ho. Aap ye kar sakte ho!

**Aage kya?** Circuit theek design ho tab bhi kabhi kabhi kuch galat ho jaata hai: taar ki insulation ghis jaye, plug ka contact dheela ho jaye, ya ek board par zyada appliance lag jayein. Topic 4 mein dekhenge ki **short circuit, overload aur loose contact** mein kya hota hai, aur dheela contact MCB ke hote hue bhi kyun khatarnaak hai.
