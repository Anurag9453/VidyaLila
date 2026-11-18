# Chapter: Vibrations and Resonance (Part 5)

> **Class:** 10 | **Subject:** Physics
> **Ye file [vibrations-and-resonance-part4.md](vibrations-and-resonance-part4.md) se aage chalti hai** (wahan resonance: f_d = f_n par chhote, taal mein push se bada amplitude, Barton ke pendulums aur response curve ka peak). Chapter ki shuruaat: [vibrations-and-resonance.md](vibrations-and-resonance.md). Recall ke liye: f aur T [sound-part3.md](../../../class9/physics/sound/sound-part3.md), sound ki speed [sound-part4.md](../../../class9/physics/sound/sound-part4.md), kaan [sound-part7.md](../../../class9/physics/sound/sound-part7.md).
> **Topics covered in this file:**
> 5. Resonance Real Duniya Mein: Pul, Imaarat, Saaz Aur Kaan

---

# Topic 5: Resonance Real Duniya Mein: Pul, Imaarat, Saaz Aur Kaan

Topic 4 ke end mein Sanjana ne poochha tha, "Resonance mazedaar hai, par kya ye kabhi kharaab bhi hota hai?" Wahan humne seekha tha ki resonance mein f_d = f_n hota hai, har push taal mein judta hai, aur amplitude tab rukta hai jab andar aati energy = damping se jaati energy. Aaj wahi idea jhoole se bahar nikal kar pul, imaarat, gaadi, saaz aur hamare apne kaan tak jaayega. Kahin ye nuksaan karta hai, kahin ye hamare bahut kaam ka hai. Aur ek jagah (Tacoma Narrows) hum imaandari se dekhenge ki popular kahani poori sach nahi hai.

---

## Pul par "Ek saath kadam na milaayein"

Itwaar ki subah Mr. Ukidve apne bhanje Eknath ko railway line ke oopar bane lambe footbridge par le gaye. Pul ki pehli seedhi par ek peela board laga tha: **"Ek saath kadam na milaayein."** Eknath ne padha aur hansa, "Mama, ye kya likha hai? Pul par sab apni chaal se hi to chalte hain!"

Tabhi neeche se ek julus nikla aur pul ki taraf aaya: dhol-tashe ke saath ek toli, sab ek hi taal par chal rahe the. Mr. Ukidve ne Eknath ko ek taraf ruk jaane ko kaha. Julus ke aage wale logon ko ek volunteer ne awaaz di, "Pul par kadam todkar chaliye!" Toli ne kadam ka rhythm tod diya aur aaram se pul paar kar li. Eknath ne pul ki railing par haath rakha. Halka sa kaanpna mehsoos hua, par bas utna hi.

"Mama, ye 'kadam todna' kya hota hai, aur pul ko isse kya farak padta hai?" Mama muskuraye, "Isme Topic 4 wala resonance chhupa hai. Chalo, pehle ek purani, sachi kahani sunte hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Break step (kadam todna)** | Sainiko ya logon ko diya gaya aadesh ki pul par apne kadam ka taal na milayein, taaki sabke push ek hi pal par na padein | "Break step!" ya pul par laga board |
| **Imaarat ka natural period** | Imaarat ke ek poore side-to-side hilne mein lagne wala time, jo imaarat ki oonchai aur banaawat se tay hota hai | 20 floor wali imaarat lagbhag 2 s |
| **Tuned mass damper** | Imaarat ke oopar latka bhaari vazan jiski f_n imaarat ki f_n ke paas rakhi jaati hai, taaki wo imaarat ki hilne wali energy ko soakh le | Taipei 101 ka damper |
| **Base isolation** | Imaarat ko neeve (foundation) se alag, lachili parton par rakhna, taaki zameen ka hilna imaarat tak poora na pahunche | Bhukamp-roodh imaarat ki neev |
| **Aeroelastic flutter** | Hawa aur lachilee structure ka aisa jodna jismein structure ka apna hilna hawa ke bal ko badalta hai aur hawa har cycle mein structure ko aur energy deti hai | Tacoma Narrows ka pul |

---

## Class 9 ka recall

Class 9 se do cheezein: frequency aur time period, f = 1 ÷ T ([sound-part3.md](../../../class9/physics/sound/sound-part3.md)), aur hawa mein sound ki speed lagbhag 340 m/s, v = fλ ([sound-part4.md](../../../class9/physics/sound/sound-part4.md)). Kaan ke baare mein Class 9 mein likha tha ki **ear canal lagbhag 2.5 cm lambi** hai aur eardrum usi frequency par kaanpta hai jis frequency ki sound wave aati hai ([sound-part7.md](../../../class9/physics/sound/sound-part7.md)). Is chapter se: f_d = f_n resonance hai (Topic 4), g = 9.8 m/s², π = 3.14.

---

## Part A: Marching soldiers aur pul

### Do purani ghatnayein (imaandari se)

Itihaas mein do jaani-maani ghatnayein hain, jo aksar bataayi jaati hain. Hum yahan lagbhag wahi baatein likh rahe hain jo sab sources mein milti hain.

- **Broughton Bridge, Manchester, England, 1831.** Ek chhota suspension pul tha. Kuch sainik ek taal mein kadam milakar pul par chale, aur pul toot gaya. Kuch sainik ghayal hue. Baad ki jaanch mein ek bolt ka toot jaana bhi bataya gaya: kaha jaata hai ki sainikon ke kadam se hui kaanpan ne use jaldi toda. Uske baad se sainik pul par kadam todkar chalte hain.
- **Basse-Chaîne pul, Angers, France, 1850.** Ek aur suspension pul, jis par sainik taal mein chal rahe the. Pul toota aur bahut saare sainik (sau se zyada) mare. Is ghatna mein toofan ki tez hawa aur zang lage anchorage cable ko bhi wajah mana jaata hai, to ise sirf "sainiko ke kadam" par chhodna aadha sach hoga.

Dono mein ek hi baat: **ek jaisa taal ka push pul ko baar-baar mila.** Topic 4 ka sabak: chhota push bhi, agar har cycle taal mein aaye aur damping kam ho, bada amplitude bana deta hai.

### Kyun? Figure 5.1

Insaan ek second mein lagbhag 2 kadam chalta hai, yaani f ≈ 2 Hz (lagbhag). Agar kisi pul ki f_n bhi lagbhag 2 Hz ho, to ek-ek kadam pul ko taal mein push dega.

```
bridge ke cycle (T=0.5 s) C.........C.........C.........C.........C
sainik taal mein (S)      S.........S.........S.........S.........S
sainik bina taal (s)      .....s.........s.........s.........s.....
                          0         0.5       1.0       1.5       2.0
                          samay (s)
```

> **Figure 5.1** – Ek schematic: 2 s ka samay, 1 akshar = 0.05 s. Pehli line mein pul ke cycle (C), har 0.5 s par ek. Doosri line mein taal mein chalte sainik (S): har kadam pul ke cycle ke usi pal par, to har push madad karta hai. Teesri line mein bina taal ke sainik (s): kadam beech mein padte hain, aadhe cycle baad, to ek taraf ka push doosre ko kaat deta hai.

### Example 1: Pul aur kadam

Ek footbridge ki f_n lagbhag 1.8 Hz hai. Doosre pul ki f_n 2.0 Hz hai. Log lagbhag 2 kadam per second se chal rahe hain (f_d = 2.0 Hz). Dono pul ke T nikalo aur batao kaun sa resonance ke kareeb hai.

**Given:** f_n = 1.8 Hz aur 2.0 Hz, f_d = 2.0 Hz.
**Find:** T (pul ke aur kadam ka), aur resonance wala pul.
**Formula:** T = 1 ÷ f.
**Substitution:** T₁ = 1 ÷ 1.8 = **0.556 s**. T₂ = 1 ÷ 2.0 = **0.50 s**. Kadam ka T = 1 ÷ 2.0 = **0.50 s**.
**Answer:** doosra pul (2.0 Hz) resonance ke saath, kyunki f_d = f_n = 2.0 Hz. Pehle pul ke paas hai (1.8 Hz, 0.2 Hz door), par ek jaisa nahi.
**Jaanch:** 2.0 Hz × 0.50 s = 1 ✅ aur 1.8 × 0.556 = 1.00 ✅. Topic 4 ka curve: f_d = f_n par peak, 1.8 Hz par kuch kam, ✅

(Ye ek simple model hai. Asli pul ki ek se zyada f_n hoti hain aur asli pul mein damping bhi hoti hai. Aur ek aadmi ka chalna bahut halka push hai: asli khatra tab banta hai jab bahut saare log, kam damping aur f_d ≈ f_n ek saath ho.)

### London ka Millennium Bridge (3 line mein)

Year 2000 mein London ka ek naya footbridge khula aur pehle hi dino mein uspar chalne wali bheed ke saath wo side-to-side hilne laga. Logon ne apne kadam us hilne ke saath milana shuru kar diye, aur isse hilna aur badh gaya. Pul ko band karna pada, engineers ne uske neeche **dampers lagaye** (Topic 2 ka damping), aur lagbhag do saal baad use phir se khola. Seekh: khatra bade force se nahi, taal mein judte push aur kam damping se hai, aur damping iska ilaaj hai.

### Example 2: Stadium ka stand

Ek stadium ke stand ka natural period lagbhag 0.5 s hai. Fans gaana gaate hue ek second mein 2 baar kood rahe hain. Kya stand resonance ke paas hai?

**Given:** T_n = 0.5 s, kood: 2 per second.
**Find:** f_n, f_d aur nateeja.
**Formula:** f = 1 ÷ T.
**Substitution:** f_n = 1 ÷ 0.5 = **2.0 Hz**. f_d = **2.0 Hz**.
**Answer:** f_d = f_n: resonance ki halat. Bheed ke ek saath koodne se stand ka hilna bahut badh sakta hai.
**Jaanch:** T_d = 1 ÷ 2.0 = 0.5 s = T_n ✅

**Suraksha ki baat:** stadium ke stands, balcony ya chhat par bheed mein ek taal mein kabhi mat koodo. Agar kisi stand par log ek saath koodne lagein, to aaram se baith kar ya kadam todkar rukwa do aur adult/staff ko batao. Ise kisi stand ya balcony par **test mat karo**.

**Paper par activity (ghar par adult ke saath, kaagaz aur pencil bas):** ek lambi patti par 0.5 s ke gap par 10 nishaan lagao: ye pul ke cycle hain. Ab Figure 5.1 ki tarah ek line mein S (cycle ke saath) aur doosri mein s (cycle ke beech) likho, aur ginti karo ki kaun si line ke push judte hain. Kisi pul par chalkar kuch nahi dekhna hai: ye sirf kaagaz ka khel hai.

---

## Part B: Bhukamp aur imaarat

### Har imaarat ka apna "natural period"

Topic 1 ke pendulum ki tarah imaarat bhi side-to-side hil sakti hai, aur uska apna T hota hai. Ek mota-moti rule: **mid-height imaarat ka natural period lagbhag 0.1 s per floor** (lagbhag, aur asli imaarat mein banaawat se badal jaata hai). 10 floor ki imaarat lagbhag 1 s ki. Oonchi imaarat dheere, chhoti imaarat tez hilti hai.

```
5 floor   I##### 0.5 s
10 floor  I########## 1.0 s
20 floor  I#################### 2.0 s
40 floor  I######################################## 4.0 s
          +----------------------------------------> period (s)
```

> **Figure 5.2** – Rule of thumb se imaarat ka natural period: 1 akshar (#) = 0.1 s. 40 floor ki imaarat 5 floor se 8 guna dheere hilti hai (4.0 ÷ 0.5 = 8).

Bhukamp mein zameen ka hilna ek **driver** hai, aur strong earthquake mein zameen ka period mostly 0.5 se 5 s ke beech hota hai (lagbhag). Resonance tab, jab zameen ka period imaarat ke period ke paas aa jaaye.

### Example 3: 20 floor ki imaarat

20 floor ki imaarat ka natural period aur f_n nikalo. Ek bhukamp mein zameen 2 s ke period se hil rahi hai. Kya mel hai? 5 floor aur 40 floor ki imaarat ka kya?

**Given:** 0.1 s per floor, zameen ka T_d = 2 s.
**Find:** T_n, f_n, mel.
**Formula:** T_n = 0.1 s × floors, f = 1 ÷ T.
**Substitution:** 20 floor: T_n = 0.1 × 20 = **2.0 s**, f_n = 1 ÷ 2.0 = **0.50 Hz**. 5 floor: 0.5 s. 40 floor: 4.0 s.
**Answer:** 20 floor ki imaarat T_n = 2.0 s = T_d: resonance ke kareeb, ye sabse zyada khatre mein. 5 floor (0.5 s) aur 40 floor (4.0 s) ka T_n, 2 s se door hai, to unka response chhota.
**Jaanch:** f_d = 1 ÷ 2 = 0.5 Hz = f_n ✅. Figure 5.2 se 20 floor ka bar 2.0 s ✅

### Mexico City, 1985

19 September 1985 ko Mexico City mein bada bhukamp aaya. Shehar ka bahut hissa purani jheel ki **naram mitti** par bana hai, aur wo mitti zameen ke hilne ko badha deti hai: mitti lagbhag 2 s ke period se hili (lagbhag). Rule of thumb se 2 s ka matlab lagbhag 20 floor, par mota-moti mid-height (lagbhag 6 se 15 floor ki) imaaraton ka period isi ke paas tha (rule of thumb sirf mota andaaza hai). Aksar bataya jaata hai ki yehi imaarat sabse zyada giriin, jabki bahut oonchi ya bahut chhoti imaaraton mein kam nuksaan hua. (Ye sab lagbhag aur saral roop hai: nuksaan mein imaarat ki banaawat, ghatiya construction aur mitti sab ka haath tha.)

### Imaarat ko bachane ke tarike

1. **Tuned mass damper:** imaarat ke oopar ek bhaari vazan latkaya jaata hai (Figure 5.3), jiski f_n imaarat ki f_n ke paas hoti hai. Jab imaarat hilti hai, vazan ulti taal mein hil kar energy soakh leta hai. **Taipei 101** mein aisa damper hai, lagbhag 660 tonnes ka (sirf naam aur number, hum uski gehraai nahi dekhenge).
2. **Base isolation:** imaarat ko lachili parton par rakhte hain, taaki zameen ka hilna imaarat tak poora na pahunche.
3. **Stiff core aur cross-bracing:** imaarat ko akdu banana, jisse uska natural period aur hilne ka dhang badal jaata hai.

```
          +--------------+
          :     =I=      :   <- latka hua damper (bhaari vazan)
          :      I       :
          :     [#]      :
          +--------------+
          :              :
          :   imaarat    :
          :              :
          ################    <- zameen
```

> **Figure 5.3** – Tuned mass damper ka schematic: imaarat ke sabse oopar chhat ke neeche ek bhaari vazan (#) dhaage ya spring se latka hai. Uski f_n imaarat ki f_n ke paas rakhi jaati hai.

(Ek line: bhukamp ke liye banne wale imaarat ke niyamon mein imaarat ki oonchai aur wahan ki mitti dono ginti jaati hain, kyunki dono natural period aur zameen ke period ko badalte hain. Is chapter mein bas ye idea hai, niyam nahi.)

---

## Part C: Tacoma Narrows Bridge, imaandari se

**7 November 1940**, Washington state (USA) ka Tacoma Narrows Bridge hawa mein buri tarah hilne laga aur gir gaya. Kai kitaabon aur videos mein ise "resonance ka classic udaharan" bataya jaata hai. Imaandari se: **engineers ise mainly aeroelastic flutter ka nateeja kehte hain.**

Flutter mein hawa ka koi apna "taal wala push" nahi hota. Hawa seedhi aur steady behti hai. Par jab pul ka deck thoda mud jaata hai, to hawa ka bal badal jaata hai, aur wo badla hua bal deck ko aur mod deta hai. Yaani **pul ka apna hilna hawa se energy ko cycle mein kheench leta hai**, aur wo energy damping se zyada ho jaati hai. Isliye amplitude badhta jaata hai. Ye resonance jaisa dikhta hai (bada amplitude, energy ka judna), par driver baahar ka taal wala push nahi, bahut kuch pul ke apne hilne par depend karta hai.

Soch lo ek jhanda: hawa steady hai, phir bhi jhanda phad-phad karta hai. Jhande ko koi 2 Hz ka dhakka nahi de raha: hawa aur jhande ka aapas ka rishta hi hilata hai.

---

## Part D: Gaadi, mashine aur chhoti-chhoti khadkhad

Resonance sirf bade pul mein nahi, ghar mein bhi dikhta hai.

- **Gaadi ka dashboard ya khidki:** engine ek khaas speed par chalta hai to uske jhatke dashboard ya window ki f_n ke paas aa jaate hain, aur wo khadkhad karti hai. Speed thodi badalte hi awaaz gayab.
- **Washing machine:** spin ke ek khaas speed par frame zor se hilta hai, aur usse upar ya neeche speed par kam.
- **Dheela bolt ya cover:** wahi baat.

**Ilaaj:** (1) driver ki frequency badal do (speed badlo), (2) f_n badal do (bolt kasna, vazan badalna), (3) damping badhao (rubber pad, foam). Ye teeno Topic 4 ke response curve se aate hain.

**Ghar par adult ke saath (sirf sunna):** washing machine ya table-fan ko chalu rahne par dhyan se suno: kya kisi speed par kuch khadkhad badh jaati hai? Kuch badalna ya hilana nahi: sirf sunna aur adult ko batana.

---

## Part E: Jab resonance kaam ki cheez hai

### Saaz: tumba aur air column

Sitar ke neeche ka lauki ka **tumba** aur tabla ka gola body sound board ki tarah kaam karte hain (Topic 3), aur unke andar ki hawa ke apne natural frequencies hain jo taar ya haath ke sur ko resonance se bada karte hain. Flute mein andar ka **air column** hai: ungli ke holes se uski lambai badalti hai, aur chhota air column ooncha sur deta hai (Topic 4). Saaz ki body kuch frequencies ko zyada badhati hai, aur isi se ek hi sur sitar aur guitar mein alag lagta hai (is baat ka naam Class 9 ne "quality" rakha tha).

### Kaan ki naali (ear canal): sabse khoobsurat check

Ear canal ek chhoti naali hai jo ek taraf khuli (baahar) aur doosri taraf eardrum se band hai. Ek taraf band naali ke andar ki hawa ki ek natural frequency hoti hai, aur wo tab resonate karti hai jab sound ki wavelength naali ki lambai ki **chaar guna** ho: **L = λ ÷ 4** (aage ki class mein derive hoga, yahan sirf check).

```
         khula munh      band (eardrum)
 hawa -->  :=====#
           <----> L = 2.8 cm
 <---------------------> lambda = 11.3 cm
 (1 akshar = 0.5 cm, scale lagbhag)
```

> **Figure 5.4** – Ear canal ek taraf band naali: L lagbhag λ ÷ 4. 3 kHz ki sound ke liye λ = 11.3 cm, aur λ ÷ 4 = 2.8 cm.

### Example 4: Ear canal 3 kHz par

Ear canal lagbhag 3 kHz par resonate karti hai. Hawa mein v = 340 m/s. λ aur λ ÷ 4 nikalo aur Class 9 ki 2.5 cm lambai se check karo.

**Given:** f = 3 kHz = 3000 Hz, v = 340 m/s.
**Find:** λ, λ ÷ 4.
**Formula:** λ = v ÷ f.
**Substitution:** λ = 340 ÷ 3000 = **0.113 m** = 11.3 cm. λ ÷ 4 = 0.113 ÷ 4 = **0.0283 m** = 2.8 cm.
**Answer:** λ ≈ 11.3 cm, λ ÷ 4 ≈ **2.8 cm**, aur ear canal lagbhag 2.5 cm hai. Kaafi paas (ek mota-moti check, lagbhag).
**Jaanch:** 3000 Hz × 0.113 m = 339 m/s, lagbhag 340 ✅. Ulta: L = 2.5 cm to f = 340 ÷ (4 × 0.025) = 3400 Hz, lagbhag 3 kHz ✅

Isliye hamare kaan 2 se 4 kHz ke aas-paas ki aawaazon (baat-cheet ki kai aawaazein) ke liye khaas taur par sensitive hain: ear canal unhe lagbhag resonance se badhati hai. Aur andar **cochlea** mein alag-alag hair cells alag-alag frequencies par zyada sensitive hoti hain (lagbhag, ek honest saral roop): ek tarah ki dheere-dheere tuning.

### Do chhoti baatein

- **Radio:** Topic 4 ka tuning, yani circuit ki f_n badal kar station chunna. **MRI machine** mein bhi resonance ka ek roop kaam aata hai (sirf naam, aage ki class mein).
- **Microwave oven:** aksar kaha jaata hai ki wo paani ke molecules ko resonance par hilata hai. Ye myth hai: oven mein 2.45 GHz ki wave paani ko garam karti hai, par ise resonance ka nateeja kehna sahi nahi.

---

## Wapas pul par

Pul ke neeche se train guzri. Eknath ne poochha, "Mama, to resonance se pul sirf tab khatre mein hota hai jab push taal mein ho, damping kam ho, aur f_d ≈ f_n?" "Haan, aur Tacoma ki kahani se ye bhi yaad rakhna ki kabhi kabhi 'resonance' kehne se pehle engineers sach dekhte hain." Eknath ne board ko phir se padha, "Ek saath kadam na milaayein," aur is baar apne kadam bhi thoda alag-alag rakhe.

---

## Aam galtiyan (bachke rehna)

1. **"Tacoma Narrows resonance ne tod diya, bas."** ❌ Engineers ise mainly **aeroelastic flutter** kehte hain. Demonstration: ek jhanda phad-phad karta hai jabki hawa steady hai: koi 2 Hz ka driver nahi. Pul mein bhi hawa ka bal pul ke apne mudne se badalta tha, aur har cycle mein zyada energy judti thi. Ye "resonance jaisa" lagta hai par asli driver alag hai. (Isse resonance galat nahi hota: Broughton aur Angers mein driver bahari taal wala push tha.)
2. **"Imaarat bahut mazboot hai, to bhukamp mein safe hai."** ❌ Mazboot hona alag baat hai, resonance se bachna alag. Demonstration: do 20 floor ki imaaratein, ek ka material zyada mazboot, dono ka natural period rule of thumb se lagbhag 2 s. Bhukamp mein zameen ka period 2 s ho to dono mein hilna bada hoga. Mazboot imaarat tootne se bachti hai, par bachne ke liye natural period ko zameen ke period se door rakhna aur damping badhana bhi zaroori hai (tuned mass damper, base isolation). Mexico City mein bhi imaarat ke period aur mitti ke period ka mel ek badi baat thi.

---

## Quick Recap

- **Marching soldiers:** Broughton 1831 aur Angers 1850: taal mein push, kam damping. Pul par kadam todkar chalo.
- Insaan lagbhag 2 kadam per second (f ≈ 2 Hz); pul ki f_n paas ho to khatra. Millennium Bridge (2000): dampers lagaye gaye.
- **Imaarat:** natural period lagbhag 0.1 s per floor; bhukamp ke zameen ke period (lagbhag 0.5 se 5 s) ke paas aaye to bada hilna. Mexico City 1985: naram mitti.
- **Bachaav:** tuned mass damper (Taipei 101, lagbhag 660 tonnes), base isolation, stiff core. Mazboot imaarat bhi resonance se hil sakti hai.
- **Tacoma Narrows (7 November 1940):** mainly aeroelastic flutter, sirf resonance nahi.
- Gaadi aur washing machine ki khadkhad: speed badlo ya damping badhao.
- **Kaan:** ear canal lagbhag 3 kHz par resonate karti hai: L = λ ÷ 4 = 2.8 cm, aur asli lagbhag 2.5 cm. Microwave resonance nahi.
- Stadium ya balcony par ek taal mein kabhi mat koodo.

---

## Practice Questions

(Take g = 9.8 m/s², π = 3.14, the speed of sound in air as 340 m/s and the building rule of thumb: natural period about 0.1 s per floor.)

1. A 12-floor building shakes in an earthquake whose ground period is 1.2 s. Find the building's natural period and frequency and say whether it is close to resonance.
2. A ground shaking has a period of 3.2 s. Which of three buildings of 6, 32 and 50 floors is most at risk? Give each building's natural period.
3. A footbridge has a natural frequency of 1.6 Hz. A group walks at 105 steps per minute. Find the time period of the bridge and of the walkers' steps, say whether resonance is close, and find the walking pace in steps per minute that would match the bridge.
4. A stadium stand has a natural period of 0.4 s. A crowd jumps 25 times in 10 s. Find the crowd's f_d and T_d, compare with the stand, and give one sensible safety advice.
5. An ear-canal-like tube is closed at one end and is 3.0 cm long. Using L = λ ÷ 4, find the wavelength of the sound it resonates with and the frequency.
6. A small child's ear canal is about 2.0 cm long. Use the same rule to find the frequency at which it resonates. Is it higher or lower than the frequency you found in Question 5?
7. The frame of a washing machine has a natural frequency of 9 Hz. At what drum speed in rpm will it shake the most?
8. A car's dashboard rattles most when the engine runs at 1800 rpm (take one push per revolution). Find the driving frequency and its time period in ms.
9. Taipei 101's damper is about 660 tonnes. Convert this into kg, and find how many cars of about 1.1 tonne this is equal to.
10. State true or false with a one-line reason: (a) Every bridge failure in history was caused by resonance. (b) A tuned mass damper has a natural frequency close to the building's. (c) The microwave oven heats food mainly by resonance. (d) Breaking step on a bridge reduces the chance of resonance.
11. Explain honestly in three or four lines why Tacoma Narrows is often called a resonance example, and what engineers say instead.
12. Why does adding dampers to a wobbling footbridge help? Answer using the response curve from Topic 4.
13. A friend says, "My building is very strong, so earthquakes cannot harm it." Reply using the idea of natural period and damping.
14. Soldiers walk at 2.2 steps per second and the bridge's natural frequency is 2.2 Hz. In 5 s, how many pushes arrive if all are in step? If half the soldiers are half a step out of step, what happens to the net push?

### Answers

1. **Given:** 12 floors, T_d = 1.2 s. **Find:** T_n, f_n. **Formula:** T_n = 0.1 × floors, f = 1 ÷ T. **Substitution:** T_n = 0.1 × 12 = **1.2 s**, f_n = 1 ÷ 1.2 = **0.83 Hz**. T_n = T_d, to resonance ke bahut kareeb.
   Jaanch: 0.83 Hz × 1.2 s = 1.0 ✅

2. T_n = 0.1 × floors: 6 floor **0.6 s**, 32 floor **3.2 s**, 50 floor **5.0 s**. Zameen ka T = 3.2 s, to **32 floor wali** sabse zyada khatre mein.
   Jaanch: 32 × 0.1 = 3.2 ✅

3. T_b = 1 ÷ 1.6 = **0.625 s**. Walkers: f_d = 105 ÷ 60 = 1.75 Hz, T_d = 1 ÷ 1.75 = **0.571 s**. 0.625 s ≠ 0.571 s, to resonance bilkul nahi, par kaafi paas (farak 0.15 Hz). Pace 1.6 steps per second = 1.6 × 60 = **96 steps per minute** match karegi.
   Jaanch: 1.6 Hz × 0.625 s = 1.0 ✅

4. f_d = 25 ÷ 10 = **2.5 Hz**, T_d = 1 ÷ 2.5 = **0.4 s**. Stand ka T_n = 0.4 s, to f_d = f_n: resonance ki halat. Advice: stand par ek taal mein na koodein, kadam todein aur staff ko batayein.
   Jaanch: 2.5 Hz × 0.4 s = 1 ✅

5. L = λ ÷ 4, to λ = 4 × 0.030 = **0.12 m** = 12 cm. f = v ÷ λ = 340 ÷ 0.12 = **2833 Hz**, lagbhag 2.8 kHz.
   Jaanch: 2833 Hz × 0.12 m = 340 m/s ✅

6. λ = 4 × 0.020 = 0.08 m. f = 340 ÷ 0.08 = **4250 Hz**, lagbhag 4.3 kHz. Ye Question 5 ke 2833 Hz se **zyada** hai: chhoti naali, ooncha sur (bottle ke air column jaisa, Topic 4).
   Jaanch: 4250 × 0.08 = 340 ✅

7. f = 9 Hz = 9 chakkar per second. Ek minute mein 9 × 60 = **540 rpm**.
   Jaanch: 540 ÷ 60 = 9 Hz ✅

8. 1800 rpm ÷ 60 = **30 Hz**. T = 1 ÷ 30 = 0.0333 s = **33.3 ms**.
   Jaanch: 30 Hz × 0.0333 s = 1.0 ✅

9. 660 tonnes = 660 × 1000 = **660,000 kg**. Gaadiyan = 660 ÷ 1.1 = **600** (lagbhag).
   Jaanch: 600 × 1.1 = 660 ✅

10. (a) **False** ❌, flutter aur doosre kaaran bhi hote hain (Tacoma). (b) **True** ✅, taaki damper imaarat ki energy soakh sake. (c) **False** ❌, ye myth hai. (d) **True** ✅, push taal mein nahi judte.

11. Tacoma ka deck hawa mein hila aur toot gaya, aur dekhne mein bahut bada amplitude resonance jaisa tha, isliye ise aksar resonance kehte hain. Engineers kehte hain ki hawa ka koi taal wala push nahi tha: pul ke apne mudne se hawa ka bal badla aur har cycle mein energy judti gayi: **aeroelastic flutter**.

12. Damping peak ko neecha aur chauda kar deta hai (Topic 4, Figure 4.2). Wobble ke bada hone ke liye andar aati energy ko damping se jaati energy se zyada hona chahiye. Dampers zyada energy bahar nikalte hain, to amplitude chhota rehta hai.

13. Mazboot hona tootne se rokta hai, par resonance se hilna kam nahi karta. Agar imaarat ka natural period zameen ke period ke paas ho aur damping kam ho, to wo bahut hilegi. Natural period door rakhna, damper aur base isolation bhi chahiye.

14. 2.2 steps per second, to 5 s mein 2.2 × 5 = **11 pushes**, sab taal mein, to sab madad karte hain. Agar aadhe sainik aadhe kadam peeche hon, to unke push ulte pal par padte hain aur aadhe sainiko ke push ko kaat dete hain: net push bahut kam. Isliye kadam todna kaam karta hai.
    Jaanch: 11 push in 5 s: 11 ÷ 5 = 2.2 Hz ✅

---

Ab tum jaante ho ki resonance kahan kharaab hai (taal mein push aur kam damping se pul aur imaarat), kahan kaam ka hai (saaz, kaan) aur kahan sirf resonance kehna sahi nahi (Tacoma). Eknath ne ghar jaakar apni copy mein "Ek saath kadam na milaayein" likha aur uske neeche Figure 5.1 ki tarah S aur s wali do lines bana dein.

**Aage kya?** Topic 6 mein poore chapter ka saar: natural, damped, forced aur resonance ka comparison table, kab kaun sa formula, mixed problems aur chapter ka wrap-up.
