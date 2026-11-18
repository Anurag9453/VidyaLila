# Chapter: Household Circuits and Safety (Part 6)

> **Class:** 10 | **Subject:** Physics
> **Ye file [household-circuits-part5.md](household-circuits-part5.md) se aage chalti hai** (wahan socket ke peeche ki duniya: grid, high voltage par kam line loss, pole transformer, teen-phase, meter aur inverter ka changeover). Chapter ki shuruaat: [household-circuits.md](household-circuits.md). Recall ke liye Class 9: [electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md) (ghar ki wiring aur safety ke niyam); Class 10 pichhla chapter: [current-electricity-ii-part5.md](../current-electricity-ii/current-electricity-ii-part5.md) (power aur I² R garmi).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice, Safety Aur Chapter Ka Saar

---

# Topic 6: Sab Kuch Mila Kar: Practice, Safety Aur Chapter Ka Saar

Is chapter mein hum paanch kadam chale. Topic 1 mein fuse aur MCB (taar ko garmi se bachane wale), Topic 2 mein earthing aur RCCB (insaan ko jhatke se bachane wale), Topic 3 mein ghar ka circuit (radial, taar ka size, staircase switch), Topic 4 mein jab kuch galat ho (overload, short circuit, dheela contact), aur Topic 5 mein socket ke peeche ki duniya (power plant se ghar tak, high voltage par bhejne ka hisaab). Har topic akela saaf tha. Par asli zindagi mein ye sab ek saath kaam karte hain, aur sawaal bhi aksar do-teen topics ek saath maangte hain. Aaj chapter ko ek jagah jodte hain: **kaun kisko bachata hai, kab kaun sa idea lagta hai, aur ek lamba sawaal kaise todein.**

---

## Safety Week ka poster

Mr. Chavare ke school mein is hafte **Safety Week** chal raha tha. Sabse bada hissa tha poster competition: Class 10 ko "Bijli Surakshit Ghar" par poster banana tha, aur Friday ko ek **drill** aur ek **quiz** hona tha. Sunday ko unka bhatija Gaurang apna poster chart paper par bana kar Chacha ko dikhane laya. Upar chhe naam the: Fuse, MCB, RCCB, Earth wire, Switch, Double insulation. Neeche chaar badi slogan: "Kaala (neutral) taar safe hai", "Bada MCB, zyada power", "RCCB hai to earth chhodo", "Switch off to taar band".

Chacha ne poster dekha aur muskuraye. "Poster sundar hai, Gaurang. Par in chaar slogan mein ek-ek galti hai, aur chaaron ek hi jagah se aayi hain: tumne chhe chowkidaaron ke naam to yaad kar liye, par ye nahi pakda ki **har ek ka sirf ek kaam hai**, aur kaun kya nahi karta."

"Chacha, Friday ko quiz mein poochenge: fuse, MCB, RCCB, earth: kaun kisko bachata hai?" Gaurang ne ghabra kar kaha. Chacha bole, "Isiliye aaj poore chapter ko ek table, ek chart aur kuch mixed sawaalon mein jodte hain. Aur ek niyam pehle: poster ya drill mein koi bhi kaam aisa nahi hoga jo bachche khud karke dekhein. Taar, plug ya switch ghar se mat laana: sirf kagaz aur sketch pen."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Suraksha ki parat (protection layer)** | Ek alag guard jo ek hi tarah ki kharabi ko rokta hai; kai parat milkar kaam karti hain | Figure 6.1 ke paanch guard |
| **Master table** | Saare guards ki ek jagah ki list: kaun kya dekhta hai, kisko bachata hai aur kya nahi karta | Table 6.1 |
| **Open neutral** | Neutral taar ka beech se toot jaana ya dheela ho jaana, jisse appliance ke neutral wale sire par live ka voltage aa sakta hai | Figure 6.4 |
| **Size-jaanch** | Jawab ka aakaar dekh kar parakhna ki wo hosh-mand hai ya nahi, sirf arithmetic nahi | Line mein 4.4 MW ka 10 percent se zyada jal jaana: bahut zyada, shak karo |
| **Safety drill** | Khatre ke bina, tay kram ko pehle se dohrana, taaki asli waqt par ghabrahat na ho | School ka Friday wala bijli-aag drill (kagaz par) |

---

## Class 9 aur pichhle chapter ka recall

Class 9 mein ye sab chhote-chhote niyam alag alag the: live aur neutral ka rang, earth pin, switch live mein, MCB aur RCD ka sirf naam, safety ke niyam aur first aid ([electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md), Part B aur C). Wahan ye bhi kaha tha ki neutral **lagbhag** earth ke potential par hota hai, aur ki ghar ki wiring ya repair **sirf licensed electrician** ka kaam hai. Pichhle chapter mein R = ρ l ÷ A aur I² R garmi mili ([current-electricity-ii-part4.md](../current-electricity-ii/current-electricity-ii-part4.md), [part5](../current-electricity-ii/current-electricity-ii-part5.md)). Is topic mein un sab ke upar **is chapter ke paanch topics** ko ek saath rakhenge.

> **Suraksha:** is poore chapter ki tarah yahan bhi mains ki bijli (lagbhag 230 V) ke saath **kuch bhi chhoo, kholkar ya test karke nahi** dekhte. Plug, switch, socket, MCB board, fuse box ya kisi appliance ko kholna, taar jodna, ya kisi "short circuit" ko aazmaana **jaan le sakta hai**. Ye sab sirf licensed electrician ka kaam hai. Hum yahan sirf **padhte, kagaz par draw karte aur hisaab lagate** hain. Kuch ajeeb lage (garmi, smell, jhanjhanahat) to door hato aur bade ko batao.

---

## Part A: Kaun kisko bachata hai? (Master table)

Ek hi appliance ke raaste mein paanch guard ek ke baad ek aate hain (Figure 6.1). Dhyan se dekho: **RCCB dono taaron (live aur neutral) se guzarta hai**, baaki sab live taar mein hain, aur earth wire alag hai: wo normal kaam mein current nahi leti.

```
          Live (laal) taar
                           +------------+
+-------+---[1 Main MCB]---+------------+---[3 MCB 16 A]--[4 Switch]-+
:       :                  :            :                            :
:       :                  :(2) RCCB    :                  +----------------+
:230 V  :                  :live+neutral:                  : GEYSER (230 V) :
:supply :                  :dono andar  :                  : metal body     :..
:       :                  :se jaate    :                  :                : .
:       :                  :            :                  +----------------+ .
:       :                  :            :                            :        .
+-------+------------------+------------+----------------------------+        .
          Neutral (kaala)  +------------+                                     .
            ...................................................................
            (5) Earth wire (hara, dots): body se zameen mein dabi earth rod tak
```

> **Figure 6.1** – Ek metal-body geyser ke circuit ke paanch guard, poora closed loop. (1) Main MCB poore ghar ki wiring ke liye, (2) RCCB live aur neutral dono ko dekhta hai, (3) is circuit ka 16 A MCB, (4) live mein switch, (5) earth wire (dots wali, hara) body ko zameen se jodti hai. Appliance 230 V (lagbhag) par live aur neutral ke beech jude hain.

**Table 6.1** – Master table: har guard ka sirf ek kaam.

| Guard | Sirf ek kaam | Kise bachata hai | Kya nahi karta |
|---|---|---|---|
| Fuse | Zyada current par pighalkar live taar kaat dena (ek baar) | Taar aur wiring ko garmi se | Insaan ko jhatke se nahi; reset nahi hota |
| MCB | Overload par (bimetal) ya short circuit par (coil) apne aap trip, phir reset | Taar aur wiring (aur appliance) | Kuch mA ke jhatke ko dekhta hi nahi |
| RCCB | Live aur neutral ke current ka farak lagbhag 30 mA par supply kaatna | Insaan | Overload aur short circuit nahi rokta |
| Earth wire | Body ko zameen se jodna: touch voltage kam, fault current bada | Insaan (aur fuse ya MCB ko chalne mein madad) | Normal current nahi leti; RCCB ki jagah nahi leti |
| Switch (live mein) | Apne peeche ke hisse ko live se alag karna | Sirf us appliance ko on/off karna | Fault se taar ya insaan nahi bachata; switch tak ka taar live rehta hai |
| Double insulation | Do parte insulation: body kabhi live nahi hoti, earth pin nahi chahiye | Insaan | Tooti ya geeli body mein khatra; wiring ko nahi bachata |

Isliye ek guard ki kami doosra nahi bharta: MCB 230 mA ka jhatka dekh hi nahi sakta (Topic 2), aur RCCB 20 A ke overload ko nahi dekhta (Topic 1 aur 4). **Chaaron ek saath, tab hi ghar surakshit.**

**Ghar par adult ke saath (sirf padhna):** apne ghar ke distribution board ke bahar likhe label padho (6 A, 16 A, "30 mA" wala RCCB) aur kisi appliance ke rating plate par double-insulation ka nishaan (square ke andar square) dhundho. Kuch kholna ya chhoona nahi. Table 6.1 apni copy mein banao aur har row mein ek apne ghar ka example likho.

---

## Part B: Kab kaun sa idea? (Idea-chart)

Sawaal ke clue shabd dekho aur Table 6.2 se pehla idea chuno. Phir chaar kadam: **(1)** khatra pehchano (taar garm? insaan? lambi line?), **(2)** idea chuno, **(3)** formula mein units ke saath bharo, **(4)** jaanch karo: units, aur **size-jaanch** (jawab ka aakaar hosh-mand hai?).

**Table 6.2** – Kaun sa clue, kaun sa idea.

| Sawaal mein ye dikhe | Pehla idea | Pehla formula | Kahan seekha |
|---|---|---|---|
| Patla fuse taar, "kitni der mein pighla" | Garmi = pighalne ki garmi | I² R t = m c ΔT, to t = m c ΔT ÷ (I² R) | Topic 1 |
| Kaun sa MCB, kaun sa taar | Load, MCB aur taar ki seema | I = P ÷ V; load < MCB ≤ taar ki safe current | Topic 1 aur 3 |
| Taar ki length, area, voltage gira, taar ki garmi | Resistivity (length = 2 × run) | R = ρ l ÷ A, V = I R, P = I² R | Topic 3 |
| Insaan ko jhatka, geela ya sukha haath, RCCB | Sharir ka resistance | I = V ÷ R_sharir; RCCB: live minus neutral lagbhag 30 mA | Topic 2 |
| Earth wire, body ka voltage | Fault loop | I_f = V ÷ (R_L + R_e), V_t = I_f R_e | Topic 2 |
| Live neutral se mila, "kitna bada" current | Loop resistance | I = V ÷ R_loop | Topic 4 |
| Plug garm, par MCB chup | Contact resistance, hot spot | P = I² R_contact | Topic 4 |
| Do jagah se ek light | Truth table, do two-way switch | Lamp ON jab dono ek hi traveller chunein | Topic 3 |
| Bijli ki lambi line, "loss", kam ya zyada voltage | Line loss | I = P ÷ V, P_loss = I² R_line | Topic 5 |

---

## Part C: Mixed sawaal, ek ke baad ek

### Example 1: Naye geyser ka circuit (Topic 1 + 3)

**Given:** Naya geyser 2.99 kW (2990 W), supply 230 V. Board se geyser tak ka run 41 m (taar ki kul length 82 m), copper ρ = 1.7 × 10⁻⁸ Ω m. Topic 3 ki table: 1.5 mm² lagbhag 10 A, 2.5 mm² lagbhag 16 A, 4 mm² lagbhag 24 A; MCB 6, 10, 16, 32 A. Geyser roz 1.5 h chalta hai.
**Find:** Current, taar ka size, MCB, taar ka R, taar mein gira voltage, taar mein garmi, aur ek din ka energy loss.
**Formula:** I = P ÷ V; load < MCB ≤ taar ki safe current; R = ρ l ÷ A; V = I R; P = I² R; E = P t.
**Substitution:** I = 2990 W ÷ 230 V = 13.0 A. 1.5 mm² ki seema 10 A < 13.0 A, to 2.5 mm² (16 A). MCB: 13.0 A < 16 A ≤ 16 A, to **16 A**. R = 1.7 × 10⁻⁸ Ω m × 82 m ÷ 2.5 × 10⁻⁶ m² = 1.394 × 10⁻⁶ Ω m² ÷ 2.5 × 10⁻⁶ m² = 0.5576 Ω. V = 13.0 A × 0.5576 Ω = 7.25 V. P = (13.0 A)² × 0.5576 Ω = 169 A² × 0.5576 Ω = 94.2 W. E = 94.2 W × 1.5 h = 141.4 Wh = 0.141 kWh.
**Answer:** I = 13.0 A; 2.5 mm² taar; 16 A ka MCB; taar ka R lagbhag 0.558 Ω; voltage gira lagbhag 7.25 V (230 V ka lagbhag 3.2 percent); taar mein lagbhag 94.2 W; din ka loss lagbhag 0.141 kWh.
**Jaanch:** V × I = 7.249 V × 13.0 A = 94.2 W ✅. Topic 3 ki table ka R per metre 0.0068 Ω × 82 m = 0.5576 Ω ✅. Units: Ω m × m ÷ m² = Ω ✅. Agar galti se 1.5 mm² lete: R = 0.929 Ω aur 13.0 A uski 10 A seema ka 1.30 guna, to garmi (1.30)² = 1.69 guna ✅: isliye 2.5 mm².

### Example 2: Short circuit aur fuse (Topic 4 + 1)

**Given:** Ek purane board ke circuit mein taar ka loop resistance (fuse ke bina) 0.31 Ω, supply 230 V. Circuit par 15 A ka rewirable fuse hai: element ka mass 60 mg, uska resistance 0.08 Ω. c = 200 J/kg °C, 30 °C se pighalne ke 183 °C tak, garmi bahar na jaye (Topic 1 jaisa). Ye sirf kaagaz par: short circuit ko kabhi aazmate nahi.
**Find:** Short-circuit current, fuse rating se kitna guna, fuse ko pighalne tak pahunchne ka samay, us samay mein loop ke taar mein gayi energy, aur agar kuch na rokta to 1 s mein.
**Formula:** I = V ÷ R_kul; Q = m c ΔT; t = Q ÷ (I² R_fuse); E = I² R_loop t.
**Substitution:** R_kul = 0.31 Ω + 0.08 Ω = 0.39 Ω. I = 230 V ÷ 0.39 Ω = 589.7 A. 589.7 A ÷ 15 A = 39.3. Q = 6.0 × 10⁻⁵ kg × 200 J/kg °C × 153 °C = 1.836 J. P_fuse = (589.7 A)² × 0.08 Ω = 27 824 W. t = 1.836 J ÷ 27 824 W = 6.6 × 10⁻⁵ s = 0.066 ms. P_taar = (589.7 A)² × 0.31 Ω = 107 817 W; E = 107 817 W × 6.6 × 10⁻⁵ s = 7.1 J. Bina rok ke 1 s mein E = 107 817 W × 1 s = 107 817 J.
**Answer:** I lagbhag 590 A, yani fuse rating ka lagbhag 39.3 guna. Is simple model mein fuse lagbhag 0.066 ms mein pighalne ke point par; tab tak taar mein sirf lagbhag 7.1 J. Bina rok ke 1 s mein lagbhag 108 kJ.
**Jaanch:** P × t = 27 824 W × 6.599 × 10⁻⁵ s = 1.836 J ✅. Size-jaanch: asli fuse ya MCB isse kaafi dheere (garmi holder mein bahar nikalti hai, pighalne ki garmi alag lagti hai), lagbhag 0.01 s tak mein kaat dete hain: tab bhi lagbhag 1.1 kJ, 108 kJ se sau guna kam ✅.

### Example 3: Do voltage, ek line (Topic 5)

**Given:** Ek gaon ko lagbhag 4.4 MW (4.4 × 10⁶ W) bhejni hai. Line ka kul resistance (jaana aur aana) 28 Ω. Case A: seedha 33 kV (lagbhag) par, bina bade step-up ke. Case B: step-up transformer se 220 kV (lagbhag) par (Figure 6.2). (Ye ek hi line ka seedha model hai; asli lines teen-phase hoti hain, uska hisaab aage ki class mein.)
**Find:** Har case mein line ka current, line mein power loss, loss ka percent, dono loss ka anupaat, aur ek din (24 h) ka loss-energy aur uski keemat ₹3.80 per unit par.
**Formula:** I = P ÷ V; P_loss = I² R; percent = P_loss ÷ P × 100.
**Substitution:** A: I = 4.4 × 10⁶ W ÷ 33 000 V = 133.3 A; P_loss = (133.3 A)² × 28 Ω = 4.98 × 10⁵ W; percent = 4.98 × 10⁵ ÷ 4.4 × 10⁶ × 100 = 11.3. B: I = 4.4 × 10⁶ W ÷ 220 000 V = 20.0 A; P_loss = (20.0 A)² × 28 Ω = 11 200 W; percent = 11 200 ÷ 4.4 × 10⁶ × 100 = 0.255. Anupaat = 497 778 W ÷ 11 200 W = 44.4. Ek din: A: 497.8 kW × 24 h = 11 947 kWh, keemat 11 947 × ₹3.80 = ₹45 399. B: 11.2 kW × 24 h = 268.8 kWh, keemat 268.8 × ₹3.80 = ₹1021.

```
+-------+      +----------+                +----------+      +-----------+      +-------+
: POWER :----->: STEP-UP  :--------------->:SUBSTATION:----->:   POLE    :----->: GHAR  :
: PLANT :      :(V badhao):                :(V ghatao):      :transformer:      :(230 V):
+-------+      +----------+                +----------+      +-----------+      +-------+
           :                      :                      :                  :
         11 kV                 220 kV                  11 kV              230 V
                                                                          (415 V 3-phase)
                            Line ka R = 28 Ω (jaana + aana), line mein I = 20 A
```

> **Figure 6.2** – Bijli ki yatra left se right: lagbhag 11 kV par bani, step-up se 220 kV, line (R = 28 Ω), substation par step-down 11 kV, pole transformer se 415 V (teen-phase) aur 230 V (ghar). Sabhi voltage lagbhag. Line ka current 20 A Case B ka hai.

**Answer:** A mein 133.3 A aur lagbhag 498 kW (11.3 percent) line mein jalta; B mein 20 A aur lagbhag 11.2 kW (0.255 percent). Voltage 220 ÷ 33 = 6.67 guna to current 6.67 guna kam aur loss **44.4 guna** kam. Ek din ka loss A mein lagbhag ₹45 399, B mein lagbhag ₹1021.
**Jaanch:** 220 ÷ 33 = 6.67, aur 6.67² = 44.4 ✅. 11 947 kWh ÷ 268.8 kWh = 44.4 ✅. Size-jaanch: A mein har nauvi unit raaste mein jal jaati: bahut zyada; B mein 0.255 percent, na ke barabar: isliye lambi line par high voltage. Pole transformer ka kaam (11 kV se 415 V aur 230 V) function se hi samjhe: uska vigyaan agle chapter Electromagnetism mein.

### Example 4: Seedhi ki light aur raat ka master switch (Topic 3)

**Given:** Passage ki 13 W LED lamp do two-way switch S1, S2 se chalti hai (Figure 3.5 ke hisaab se lamp ON jab dono ek hi traveller chunein). Live taar mein sabse pehle ek aam switch M hai (raat ka master switch), phir S1, S2, lamp, neutral (Figure 6.3).
**Find:** Aathon positions ki truth table, kitni mein lamp ON, aur ON hone par lamp ka current.
**Formula:** Lamp ON ⇔ M ON aur S1, S2 ek hi traveller par; I = P ÷ V.
**Substitution:** M ON mein Topic 3 wala pattern: (Up, Up) ON, (Up, Down) OFF, (Down, Up) OFF, (Down, Down) ON. M OFF mein live lamp tak pahunchta hi nahi: chaaron OFF. I = 13 W ÷ 230 V = 0.0565 A.

| M | S1 | S2 | Lamp |
|---|---|---|---|
| OFF | Up | Up | OFF |
| OFF | Up | Down | OFF |
| OFF | Down | Up | OFF |
| OFF | Down | Down | OFF |
| ON | Up | Up | ON |
| ON | Up | Down | OFF |
| ON | Down | Up | OFF |
| ON | Down | Down | ON |

```
(a) M ON, S1 Up, S2 Up: lamp ON
                          S1            traveller 1     S2
                                  o===============o
+--------+ L (laal)             /                   \
:        +===[ M: ON ]========o                       o======(lamp)=====+
:230 V   :                                                              !
:supply  :                        o---------------o         lamp ON     !
:        :                            traveller 2                       !
:        :                                                              !
+--------+==============================================================+
           N (kaala)

(b) M OFF, S1 Up, S2 Up: lamp OFF
                          S1            traveller 1     S2
                                  o---------------o
+--------+ L (laal)             /                   \
:        +---[ M: OFF ]-------o                       o------(lamp)-----+
:230 V   :                                                              :
:supply  :                        o---------------o         lamp OFF    :
:        :                            traveller 2                       :
:        :                                                              :
+--------+--------------------------------------------------------------+
           N (kaala)
```

> **Figure 6.3** – (a) M ON, S1 Up, S2 Up: upar ke traveller se loop poora, lamp ON ("=" aur "!" mein current). (b) M OFF: loop khula, lamp OFF. Dhyan do: M OFF mein bhi supply se M tak ka live taar 230 V (lagbhag) par rehta hai, bas current nahi. (Up aur Down kaagaz ke labels hain.)

**Answer:** Aathon mein se sirf **2** mein lamp ON (M ON ke saath (Up, Up) aur (Down, Down)); ON hone par lagbhag 0.0565 A (56.5 mA).
**Jaanch:** 2³ = 8 rows ✅. M OFF ki chaaron rows OFF ✅. Series switch M aur two-way pair ek hi live taar mein hain, to unka current ek hi 56.5 mA hai ✅.

### Example 5: Ek fault, teen guard (Topic 2 + 4 + 1)

**Given:** Metal-body washing machine, 16 A MCB wale circuit par, aur lagbhag 30 mA ka RCCB. Fault: live taar body se chhoo gaya. Loop ka live hissa R_L = 0.44 Ω, earth wire R_e = 0.06 Ω, supply 230 V. Ek insaan body ko chhoota hai, uska path resistance lagbhag 4.2 kΩ (educational, hedged). Case A: earth wire theek. Case B: earth wire toota hua. (A mein insaan ka path earth wire ke parallel hai, par uska current bahut chhota hai, to V_t par asar nahi.)
**Find:** A mein fault current, MCB rating se kitna guna, touch voltage aur insaan ka current. B mein insaan ka current, kaun sa guard chalega, aur sharir mein garmi (RCCB 0.03 s mein trip).
**Formula:** I_f = V ÷ (R_L + R_e); V_t = I_f R_e; I_body = V_t ÷ R_body (A) ya V ÷ R_body (B); H = I² R t.
**Substitution:** A: loop = 0.44 Ω + 0.06 Ω = 0.50 Ω; I_f = 230 V ÷ 0.50 Ω = 460 A = 28.75 guna 16 A; V_t = 460 A × 0.06 Ω = 27.6 V; I_body = 27.6 V ÷ 4200 Ω = 0.00657 A = 6.57 mA. B: I_body = 230 V ÷ 4200 Ω = 0.0548 A = 54.8 mA; P_body = (0.0548 A)² × 4200 Ω = 12.6 W; H = 12.6 W × 0.03 s = 0.38 J.
**Answer:** A: 460 A bahut tezi se MCB ko trip karata hai aur tab tak body lagbhag 27.6 V par, insaan ke andar lagbhag 6.57 mA (mehsoos, par kam). B: 54.8 mA, lagbhag 30 mA se upar, to RCCB lagbhag 0.03 s mein trip; MCB nahi (54.8 mA ≪ 16 A); sharir mein lagbhag 0.38 J.
**Jaanch:** 460 A × 0.50 Ω = 230 V ✅; 27.6 V + 460 A × 0.44 Ω = 27.6 V + 202.4 V = 230 V ✅; 4200 Ω × 0.0548 A = 230 V ✅. Seekh: pehle earth wire body ko surakshit rakhti aur MCB ko chalati hai; earth toote to RCCB wapas pakadta hai. (RCCB lagbhag aadhe se poore 30 mA ke beech kahin trip karta hai, Topic 2; 54.8 mA dono se upar hai.)

---

## Part D: Safety Week ka drill aur quiz (sirf kagaz par)

Friday ke drill mein koi taar, plug ya switch nahi chhoota. **School mein teacher ke saath:** teen station banao, har ek ek card: (1) "jalne ki smell aur garm plug": bachche bolkar dohrate hain: door hato, bade ko batao (Topic 4 ka kram); (2) "kisi ko jhatka laga": bachche bolte hain: khud mat chhuo, bade ko bulao (Topic 2 ka recall); (3) "poster padhna": Table 6.1 ki ek row padhkar batao kaun kisko bachata hai. Quiz mein "kaun kya?" ka match karo. **Ghar par adult ke saath:** Table 6.2 ka ek chhota version apne bhai-behen ko samjhao. Koi taar ya plug ghar se mat lao.

---

## Wapas Safety Week mein

Friday ko drill ke baad quiz hua. Pehla sawaal: "Ek bachche ko geele haath se jhatka laga, aur board ka 16 A MCB nahi gira. Kaun sa guard use bachata?" Gaurang ne turant likha: "RCCB: kyunki MCB kuch mA ko dekh hi nahi sakta (Table 6.1), aur earth wire hoti to body ka voltage kam rehta." Dusra: "Taar ki rating 10 A hai, MCB 32 A: kya zyada power milegi?" "Nahi: power appliance tay karta hai, MCB sirf seema hai." Poster mein usne chaaron slogan badle: "Neutral ko bhi live samjho. MCB seema hai, power nahi. RCCB aur earth, dono. Main supply ka switch bada band kare." Chacha ne kaha, "Ab poster sirf sundar nahi, sahi bhi hai."

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Kaala (neutral) taar safe hai, ise chhoo sakte hain."**
Class 9 mein kaha tha ki neutral **lagbhag** earth ke potential par hota hai: wo sahi taar ke liye hai jisse sahi tarah current wapas ja raha ho. Demonstration (Figure 6.4, sirf kaagaz par): ek 16 W lamp ka switch ON hai, par neutral taar beech se toot gaya (**open neutral**). Lamp bujha dikhta hai, par uske neutral wale sire P par live ka lagbhag 230 V aa gaya hai, kyunki lamp ke andar se hokar live wahan tak pahunch jaata hai. Ab agar koi insaan (lagbhag 1.6 kΩ path) P ko chhoota hai: lamp ka R = V² ÷ P = (230 V)² ÷ 16 W = 3306 Ω (R ko fixed maana), kul R = 3306 Ω + 1600 Ω = 4906 Ω, I = 230 V ÷ 4906 Ω = 0.0469 A = **46.9 mA**, jo lagbhag 30 mA ke khatarnaak seema ka lagbhag 1.6 guna hai. Insaan par V = 0.0469 A × 1600 Ω = 75.0 V. Bijli ke taar ka rang bharose ki cheez nahi (purani wiring mein rang alag ho sakte hain), aur kaun sa taar kab live ho jaaye ye dekh kar pata nahi chalta. Isliye koi taar, kaala ho ya laal, nahi chhuna; electrician ki jaanch ke baad hi.

```
Lamp ka switch ON hai. Neutral taar beech mein toota hua hai (X).

+--------+ L (laal)
:        +=============[ S: ON ]====(lamp 16 W)=========+
:230 V   :                                              !
:supply  :                                              !    +----------------------+
:        :                                              P====:insaan R = 1.6 kΩ     :
:        :                                              :    +----------------------+
+--------+--------------X   X---------------------------+               !
    .      N (kaala)                                                    !
    .                                                                   !
    ....................................................................!
      zameen: wapsi raasta supply ke earth point tak (wahan neutral aur earth jude hain)

```

> **Figure 6.4** – Open neutral: neutral taar X par toota hua hai, switch ON hai. Lamp ke neutral wale sire P par live ka 230 V (lagbhag) aa gaya. Agar koi insaan P ko chhoota hai, current lamp, insaan aur zameen se hokar supply ke earth point (jahan neutral aur earth jude hain) tak wapas jaata hai. "=" aur "!" mein current; dots zameen ka raasta.

**Galti 2: "Bada MCB laga do, zyada power milegi."**
Demonstration: 1.0 mm² ke taar (lagbhag 6 A) par 6 A ka MCB hai. Dukaandaar poster ki tarah soch kar 16 A ka MCB laga deta hai: "16 A × 230 V = 3680 W milega." Wo 1.955 kW ka load chalata hai: I = 1955 W ÷ 230 V = **8.5 A**. 16 A ka MCB chup rehta hai (8.5 A < 16 A), par taar uski 6 A seema ka 8.5 ÷ 6 = 1.42 guna current le raha hai, to garmi (1.42)² = **2.01 guna**. Power to appliance ka R aur 230 V mil kar tay karte hain (P = V² ÷ R); MCB sirf wo "chhat" hai jahan tak current jaane diya jaata hai. Ooncha darwaza lagane se log lambe nahi ho jaate. Sahi hal: load do circuits mein baanto (Topic 3).

**Galti 3: "RCCB laga hai, to earth wire ki zaroorat nahi."**
Demonstration: fault loop R_L = 0.71 Ω aur earth wire R_e = 0.05 Ω hain, insaan ka path 10 kΩ (hedged). Earth theek: I_f = 230 V ÷ 0.76 Ω = 302.6 A, touch voltage V_t = 302.6 A × 0.05 Ω = 15.1 V, insaan mein I = 15.1 V ÷ 10 000 Ω = 1.51 mA (halka) aur MCB turant trip. Sirf RCCB, earth nahi: body 230 V par, insaan mein I = 230 V ÷ 10 000 Ω = **23.0 mA**: lagbhag 10 mA se upar (pakad nahi chhootti) par 30 mA se kam, to RCCB trip nahi karta, ya der se. RCCB **jhatka lagne ke baad** hi mehsoos karta hai; earth wire jhatka lagne se **pehle** body ko surakshit rakhti hai. Dono ke kaam alag hain (Table 6.1).

**Galti 4: "Switch off hai, to taar mara hua hai."**
Demonstration: Figure 6.3(b) mein M OFF hai, par supply se M tak ka live taar 230 V (lagbhag) par hai. Aur agar purani wiring mein galti se switch neutral mein laga hai (Topic 3 ka Figure 3.4(b)), to lamp-holder ka ek terminal switch OFF mein bhi 230 V par hai. Maan lo koi damp haath (lagbhag 3.5 kΩ path) use chhoota hai: I = 230 V ÷ 3500 Ω = 0.0657 A = **65.7 mA**, khatarnaak range mein. Switch sirf apne **peeche** ke hisse ko alag karta hai, aur ye dekh kar pata nahi chalta ki switch kaun se taar mein hai. Isliye "switch off" kaafi nahi: wiring par kaam tabhi, jab **bada main supply band kare**, aur wo bhi **licensed electrician** hi kare.

---

## Quick Recap

- **Har guard ka sirf ek kaam:** fuse aur MCB **taar** ko, RCCB aur earth wire **insaan** ko, switch ek appliance ko alag karta hai, double insulation body ko kabhi live nahi hone deti. Ek ki kami doosra nahi bharta.
- **Idea-chart:** I² R t = m c ΔT (fuse), I = P ÷ V aur load < MCB ≤ taar ki seema, R = ρ l ÷ A (length = 2 × run), I = V ÷ R (sharir aur loop), P = I² R (contact aur line loss).
- Chaar kadam: khatra pehchano, idea chuno, units ke saath formula, **jaanch aur size-jaanch**.
- Short circuit: I = V ÷ R_loop kai sau ampere; fuse ya MCB turant kaatte hain, bina rok ke 1 s mein kai kilojoule.
- High voltage par bhejne se current ghatta hai aur line loss I² R **V² ke ulte anupaat** mein (6.67 guna voltage, 44.4 guna kam loss).
- Staircase: M ON ho aur S1, S2 ek traveller par hon to hi lamp ON; switch ke baad ka hissa alag hai, switch tak ka taar live hi rehta hai.
- **Neutral bhi nahi chhuna** (open neutral), **bada MCB power nahi deta**, **RCCB earth ki jagah nahi**, **switch off se taar mara nahi hota.**
- Mains par koi prayog nahi, kuch nahi kholna, repair sirf licensed electrician ka.

---

## Practice Questions

(Use 230 V as the household supply, copper ρ = 1.7 × 10⁻⁸ Ω m, the wire table of Topic 3 (1.5 mm² about 10 A, 2.5 mm² about 16 A, 4 mm² about 24 A, 1.0 mm² about 6 A) and MCB ratings 6, 10, 16, 32 A. For fuse heating use c = 200 J/kg °C, melting point 183 °C, room temperature 30 °C and ignore heat loss. The body-current table is a hedged guide: about 1 mA felt, about 10 mA cannot let go, 30 mA or more dangerous. RCCB trips at about 30 mA in about 0.03 s.)

1. Name the guard (fuse, MCB, RCCB, earth wire, switch or double insulation) whose single job fits each case, with one line of reason: (a) a worn mixer cord lets live touch neutral and the current jumps to hundreds of amperes; (b) a child's wet hand touches an unearthed charger that leaks 36 mA through the child to the floor; (c) the live wire touches the metal case of an earthed machine, and the case must stay near zero volts; (d) a plastic-bodied drill has no earth pin at all.
2. A new 3.45 kW geyser circuit has a run of 27 m of copper wire. Find the current, choose the wire size and the MCB, then find the wire's resistance, the voltage lost in it, the heat produced in it and the cost of the energy wasted in the wire in 2 h at ₹7.75 per unit.
3. In a new circuit the fault loop resistance is 0.27 Ω. Find the short-circuit current, how many times it is of a 10 A MCB's rating, the heating power in the loop, and the energy produced in the loop before an MCB trips in 0.01 s.
4. A fuse element of mass 45 mg and resistance 0.055 Ω carries a fault current of 600 A. Find the time to reach its melting point. If the current were half as large, how many times longer would it take?
5. A town is to be sent 7.2 MW through a line of total resistance 9 Ω at 765 kV. Find the current and the line loss (in W and as a percent of 7.2 MW). If the same power went through the same line at half this voltage, find the current and the loss. By how many times does the loss change, and why is it not 2?
6. A staircase light has S1 and S2 as in Figure 3.5 (lamp ON when both pick the same traveller). Vallabh starts with S1 Up, S2 Up and the lamp ON. He flips S2, then S1, then S2, then S1. Give the lamp state after each flip. What state does the lamp end in, and why?
7. A person with a body-path resistance of 6 kΩ touches the live metal case of an unearthed machine at 230 V. Find the current. Will a 16 A MCB trip? Will a 30 mA RCCB? Compare the heat produced in the body if the supply is cut in 0.03 s with 0.6 s.
8. Choose the smallest wire size and the MCB for each load, or say none fits and what to do: (a) 0.69 kW; (b) 2.07 kW; (c) 5.06 kW.
9. In one line each, say which idea of Table 6.2 you would use FIRST: (a) how long a thin fuse wire takes to melt; (b) how hot a long, thin wire will become; (c) the current when live touches neutral directly; (d) a plug pin is warm although the MCB is silent; (e) why a long line is run at very high voltage.
10. True or False, with a reason: (a) A bigger MCB makes a heater deliver more power. (b) The neutral wire can be touched safely because it is at about earth potential. (c) An RCCB makes an earth wire unnecessary. (d) Switching a wall switch OFF makes all the wiring behind it dead. (e) For the same delivered power, sending at 10 times the voltage cuts the line loss to one-hundredth.
11. A 1035 W heater has a loose plug pin with a contact resistance of 3.4 Ω. Find the current, the heat produced at the contact, and the heater's actual power. Will a 6 A MCB notice it?
12. In about four lines explain what an RCCB can do that an earth wire cannot, and what an earth wire does that an RCCB cannot.

### Answers

1. (a) **MCB** (ya fuse): live neutral se mila, short circuit, kai sau A; coil ya fuse turant kaatta hai. (b) **RCCB**: 36 mA live aur neutral ke current ka farak banata hai, jo lagbhag 30 mA se upar hai (36 ÷ 30 = 1.2 guna), to supply kat jaati hai. (c) **Earth wire**: body ko zameen se jodkar touch voltage kam rakhti hai aur fault current bada banati hai. (d) **Double insulation**: do parte insulation, body live nahi hoti, earth pin ki zaroorat nahi.

2. **Given:** P = 3450 W, run 27 m (l = 54 m), 2 h, ₹7.75 per unit. **Find:** I, wire, MCB, R, V, P_taar, kharcha. **Formula:** I = P ÷ V; R = ρ l ÷ A; V = I R; P = I² R; E = P t. **Substitution:** I = 3450 W ÷ 230 V = 15.0 A. 1.5 mm² (10 A) kam; **2.5 mm²** (16 A). MCB: 15.0 A < 16 A ≤ 16 A: **16 A** (margin sirf 1 A). R = 1.7 × 10⁻⁸ × 54 ÷ 2.5 × 10⁻⁶ = 9.18 × 10⁻⁷ ÷ 2.5 × 10⁻⁶ = **0.367 Ω**. V = 15.0 A × 0.3672 Ω = **5.51 V**. P = (15.0 A)² × 0.3672 Ω = 225 A² × 0.3672 Ω = **82.6 W**. E = 82.6 W × 2 h = 165.2 Wh = 0.165 kWh; kharcha = 0.1652 kWh × ₹7.75 = **₹1.28**. **Jaanch:** V × I = 5.508 V × 15.0 A = 82.6 W ✅.

3. **Given:** R_loop = 0.27 Ω, V = 230 V. **Formula:** I = V ÷ R; P = V² ÷ R; E = P t. **Substitution:** I = 230 V ÷ 0.27 Ω = **851.9 A**. 851.9 A ÷ 10 A = **85.2 guna**. P = (230 V)² ÷ 0.27 Ω = 52 900 V² ÷ 0.27 Ω = **195 926 W** (lagbhag 196 kW). E = 195 926 W × 0.01 s = **1959 J** (lagbhag 1.96 kJ). **Jaanch:** (851.9 A)² × 0.27 Ω = 725 652 A² × 0.27 Ω = 195 926 W ✅.

4. **Given:** m = 45 mg = 4.5 × 10⁻⁵ kg, R = 0.055 Ω, I = 600 A. **Formula:** Q = m c ΔT; t = Q ÷ (I² R). **Substitution:** Q = 4.5 × 10⁻⁵ kg × 200 J/kg °C × 153 °C = 1.377 J. P = (600 A)² × 0.055 Ω = 360 000 A² × 0.055 Ω = 19 800 W. t = 1.377 J ÷ 19 800 W = 6.95 × 10⁻⁵ s = **0.0695 ms**. Aadha current (300 A): P = 90 000 A² × 0.055 Ω = 4950 W, t = 1.377 J ÷ 4950 W = 0.278 ms = **4 guna lamba**. **Jaanch:** t ∝ 1 ÷ I²: (600 ÷ 300)² = 4 ✅.

5. **Given:** P = 7.2 × 10⁶ W, R = 9 Ω, V = 765 kV = 765 000 V. **Formula:** I = P ÷ V; P_loss = I² R; percent = P_loss ÷ P × 100. **Substitution:** 765 kV: I = 7.2 × 10⁶ W ÷ 765 000 V = **9.41 A**; P_loss = (9.412 A)² × 9 Ω = 88.58 A² × 9 Ω = **797 W**; percent = 797 ÷ 7.2 × 10⁶ × 100 = **0.0111**. Aadha voltage (382 500 V): I = 7.2 × 10⁶ W ÷ 382 500 V = **18.8 A**; P_loss = (18.82 A)² × 9 Ω = 354.3 A² × 9 Ω = **3189 W**. Anupaat = 3189 ÷ 797.2 = **4**, 2 nahi: voltage aadha to current **double**, aur loss current ke **square** ke saath chalta hai, 2² = 4. **Jaanch:** 3189 W ÷ 797.2 W = 4.0 ✅; 18.82 A ÷ 9.412 A = 2 ✅.

6. Convention: ON jab dono ek hi traveller par (Figure 3.5). Shuruaat (Up, Up): ON. S2 flip: (Up, Down) **OFF**. S1 flip: (Down, Down) **ON**. S2 flip: (Down, Up) **OFF**. S1 flip: (Up, Up) **ON**. Lamp **ON** par khatam. Har flip ek switch ka traveller badalta hai, to "ek hi traveller par" ki sthiti ON aur OFF ke beech palatti rehti hai. **Jaanch:** 4 flips (even) pehli position par wapas: (Up, Up) ON ✅.

7. **Given:** R_body = 6 kΩ = 6000 Ω, V = 230 V. **Formula:** I = V ÷ R; H = I² R t. **Substitution:** I = 230 V ÷ 6000 Ω = 0.0383 A = **38.3 mA**. 16 A MCB: 38.3 mA ≪ 16 A, **trip nahi**. RCCB: 38.3 mA > lagbhag 30 mA, to **trip hoga**. P_body = (0.03833 A)² × 6000 Ω = 8.82 W. 0.03 s: H = 8.82 W × 0.03 s = **0.264 J**. 0.6 s: H = 8.82 W × 0.6 s = **5.29 J**. Anupaat 5.29 ÷ 0.264 = **20 guna**. **Jaanch:** 0.6 ÷ 0.03 = 20 ✅; 6000 Ω × 0.03833 A = 230 V ✅.

8. (a) I = 690 W ÷ 230 V = 3.0 A: **1.0 mm²** (6 A), MCB **6 A** (3.0 < 6 ≤ 6). (b) I = 2070 W ÷ 230 V = 9.0 A: **1.5 mm²** (10 A), MCB **10 A** (9.0 < 10 ≤ 10); margin kam hai, behtar 2.5 mm² ka taar (MCB phir bhi 10 A). (c) I = 5060 W ÷ 230 V = 22.0 A: taar **4 mm²** (24 A), par MCB: 16 A < 22.0 A (trip), 32 A > 24 A (taar ki seema se upar): **koi nahi fit**. Load do circuits mein baanto. **Jaanch:** 3.0 × 230 = 690 ✅, 9.0 × 230 = 2070 ✅, 22.0 × 230 = 5060 ✅.

9. (a) I² R t = m c ΔT (Topic 1). (b) R = ρ l ÷ A, phir P = I² R (Topic 3). (c) I = V ÷ R_loop (Topic 4). (d) Contact resistance: P = I² R_contact (Topic 4). (e) I = P ÷ V aur P_loss = I² R_line: V badhe to I ghatta, loss V² ke ulte anupaat mein ghatta hai (Topic 5).

10. (a) **False** ❌: power appliance ka R aur 230 V tay karte hain; MCB sirf seema hai. (b) **False** ❌: normal sahi circuit mein lagbhag, par open neutral mein neutral wala sira live ke voltage par aa sakta hai. (c) **False** ❌: RCCB jhatka lagne ke baad kaatta hai; earth wire pehle body ko surakshit rakhti hai. (d) **False** ❌: switch tak ka taar live rehta hai (aur galat wiring mein switch neutral mein ho sakta hai). (e) **True** ✅: I = P ÷ V 10 guna kam, to I² R sau guna kam.

11. **Given:** P = 1035 W, V = 230 V, R_contact = 3.4 Ω. **Formula:** R = V² ÷ P; I = V ÷ R_kul; P = I² R. **Substitution:** R_heater = 52 900 V² ÷ 1035 W = 51.1 Ω. R_kul = 51.11 Ω + 3.4 Ω = 54.51 Ω. I = 230 V ÷ 54.51 Ω = **4.22 A**. P_contact = (4.219 A)² × 3.4 Ω = 17.80 A² × 3.4 Ω = **60.5 W**. P_heater = 17.80 A² × 51.11 Ω = **910 W** (1035 W se kam). 6 A MCB: 4.22 A < 6 A, to **nahi dekhta**: hot spot chup-chaap garm rehta hai. **Jaanch:** 60.5 W + 909.9 W = 970.4 W = 230 V × 4.219 A = 970.4 W ✅.

12. RCCB: live aur neutral ke current ka farak (lagbhag 30 mA) dekh kar supply kaat deta hai, to wo kam current wale leak se bhi pakadta hai, jo MCB aur earth wire ko dikhta hi nahi (Topic 2). Earth wire: jhatka lagne se **pehle** body ko zameen ke paas (kam touch voltage) rakhti hai aur fault current bada banakar MCB ya fuse ko chalati hai; RCCB sirf farak dekhta hai, body ka voltage nahi sambhalta. Isliye dono saath: RCCB akela 23 mA jaise leak ko chhod sakta hai (Galti 3), aur earth akela jhatke ke kuch pal nahi rokti.

---

## Chapter ka saar: Household Circuits and Safety

```
Topic 1  ->  fuse aur MCB       :  I² R t = m c ΔT; load < MCB ≤ taar ki seema
Topic 2  ->  earthing aur shock :  I = V ÷ R_sharir; RCCB lagbhag 30 mA; earth wire
Topic 3  ->  ghar ka circuit    :  R = ρ l ÷ A; radial; two-way switch
Topic 4  ->  jab kuch galat     :  overload, short circuit I = V ÷ R_loop, dheela contact
Topic 5  ->  socket ke peeche   :  P = V I; line loss I² R = P² R ÷ V²; meter
Topic 6  ->  sab mila kar       :  master table, idea-chart, mixed sawaal
```

> **Figure 6.5** – Chapter ki chhe kadiyan: Topic 1 se 6 tak, har topic ek line mein.

| Topic | Kya seekha | Ek line |
|---|---|---|
| 1. Fuse Aur MCB | Bijli ke chowkidaar kaise kaam karte hain | Fuse jaan-boojh kar kamzor kadi hai: patla, kam melting point, live mein, I² R t = m c ΔT; mota taar ya bada fuse nahi; MCB mein bimetal dheeme overload ke liye aur coil short circuit ke liye, aur reset ho sakta hai; MCB chuno: load < rating ≤ taar ki safe current; dono taar ko bachate hain, insaan ko shock se nahi |
| 2. Earthing Aur Shock | Body ko zameen se jodna | Bina earth ke fault mein body 230 V par aur I = V ÷ R_sharir (geeli chamdi mein bahut zyada); earth wire kam R ka raasta, bada fault current aur chhota touch voltage; earth electrode; double insulation; RCCB live aur neutral ka farak lagbhag 30 mA par lagbhag 0.03 s mein; chidiya aur seedhi par khada insaan |
| 3. Ghar Ka Circuit | Radial, ring aur staircase switch | Lighting (lagbhag 6 A) aur power (lagbhag 16 A) circuit alag; taar ki table aur R = ρ l ÷ A (length 2 × run) aur I² R; radial India mein aam, ring main UK ka; switch live mein; two-way switch aur truth table (ON jab dono ek traveller par) |
| 4. Jab Kuch Galat Ho | Short circuit, overload aur loose contact | Overload dheere (I² se garmi), short circuit I = V ÷ R_loop (jaise 0.46 Ω par 500 A) aur dheela contact (hot spot, MCB chup); arcing; nakli taar; aag mein paani nahi, CO₂ ya dry powder; surge protector aur stabiliser; safety audit |
| 5. Socket Ke Peeche Ki Duniya | Power plant se ghar tak | Bijli-ghar (lagbhag 11 kV) se step-up transformer, transmission line (132 se 765 kV lagbhag), grid substation, distribution line aur pole transformer se ghar (230 V; teen-phase mein do live ke beech lagbhag 400 V); same P par V 10 guna to I dasvaan hissa aur loss I² R = P² R ÷ V² sau guna kam; 50 Hz (lagbhag 100 baar disha badalna per second); meter: ab minus pichhli reading; load shedding aur changeover switch |
| 6. Sab Kuch Mila Kar | Master table aur mixed sawaal | Har guard ka sirf ek kaam (taar, insaan, appliance); idea-chart aur size-jaanch; neutral bhi nahi chhuna, bada MCB power nahi, RCCB earth ki jagah nahi, switch off se taar mara nahi hota |

---

Aaj Gaurang ne dekha ki chhe chowkidaar alag alag yaad karne ki cheez nahi, ek hi kahani ke chhe kirdaar hain: ek ka kaam doosra nahi kar sakta. Chapter ke har sawaal ko ab tum chaar kadam mein todkar jaanch sakte ho. Aap ye kar sakte ho!

**Aage kya?** Class 10 Physics Chapter 9 Electromagnetism: ek current wali taar compass ki sui ko kyun dhakelti hai, aur ek chhoti si coil kaise pankha ghumati hai aur ghar ko roshan karne wali bijli banati hai?
