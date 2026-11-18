# Chapter: Vibrations and Resonance (Part 3)

> **Class:** 10 | **Subject:** Physics
> **Ye file [vibrations-and-resonance-part2.md](vibrations-and-resonance-part2.md) se aage chalti hai** (wahan damping: vibration ki energy dheere dheere heat aur sound mein badalti hai). Chapter ki shuruaat: [vibrations-and-resonance.md](vibrations-and-resonance.md). Recall ke liye: f aur T [sound-part3.md](../../../class9/physics/sound/sound-part3.md), kaan ka eardrum [sound-part7.md](../../../class9/physics/sound/sound-part7.md), energy ka conservation [work-energy-and-power-part6.md](../../../class9/physics/work-energy-and-power/work-energy-and-power-part6.md).
> **Topics covered in this file:**
> 3. Forced Vibrations: Jab Koi Aur Hilaye

---

# Topic 3: Forced Vibrations: Jab Koi Aur Hilaye

Topic 1 mein humne dekha ki har object ki apni "tune" hoti hai, yaani natural frequency f_n, aur Topic 2 mein dekha ki chhod dene par vibration damping se dheere dheere mit jaati hai. Ab ek naya sawaal: **agar koi bahar se baar-baar hilata hi rahe, to object kis frequency par hilega: apni f_n par, ya hilane wale ki?** Is topic mein isi "jab koi aur hilaye" wali baat ko samjhenge.

---

## Faint fork aur loud desk

School ke music room mein Mr. Rahalkar ne apni bhatiji Radhika ko ek tuning fork diya. Fork par 320 Hz likha tha. Radhika ne fork ko rubber pad par halke se maara aur hawa mein pakad kar kaan ke paas laayi. Awaaz aayi, par bahut **dheemi**, bas kaan ke paas sunai deti thi.

Chacha ne kaha, "Ab fork ke neeche ka dandi wala hissa (stem) is lakdi ki desk par halke se tika do." Radhika ne tikaya, aur poora kamra "tiiiin" ki awaaz se bhar gaya. Awaaz **bahut loud** thi!

Radhika boli, "Chacha, fork to wahi hai, usne zyada zor se to hila nahi. Phir desk par rakhte hi awaaz loud kaise ho gayi? Kya desk ne apni koi tune gaa di? Aur fork ki awaaz jaldi band kyun ho gayi?" Chacha muskuraye, "Teeno sawaal ek hi baat se jude hain: **desk ko fork ne hilaya hai.** Ye idea samajh lo, phir 'Wapas music room mein' ke hissa mein teeno jawab milenge."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Driver (driving force)** | Wo cheez jo kisi object ko baar-baar, ek tay taal par dhakelti ya hilati hai | Desk ko hilane wala fork ka stem |
| **Driving frequency (f_d)** | Driver ek second mein kitni baar dhakelta hai. Unit: Hz | Washing machine ka drum 20 Hz par ghoomta hai: f_d = 20 Hz |
| **Forced vibration** | Wo vibration jo driver ke dhakkon se hoti hai, aur driver ki frequency par hoti hai | Fork ke saath hilta desk ka top |
| **Steady state** | Shuru ki gadbad ke mit jaane ke baad ki halat: driver chalta rahe to object ek jaisi vibration karta rehta hai | Haath se hilaya pendulum thodi der baad |
| **Response curve** | Wo graph jo dikhata hai ki f_d badalne par forced vibration ka amplitude kaisa badalta hai | Figure 3.2 |
| **Sounding board** | Badi patli satah jo driver ke saath hilkar bahut hawa ko dhakelti hai aur awaaz ko loud karti hai | Guitar ke upar ki patli lakdi |
| **Sympathetic vibration** | Ek object ki awaaz (hawa ke raste) paas ke doosre object ko hila de | Ek fork bajao, paas ka doosra fork bhi dheere se bajne lage |
| **Diaphragm** | Patli lachili jhilli jo sound ke saath hilti hai | Microphone ki jhilli |
| **rpm** | Revolutions per minute: ek minute mein kitne chakkar. 60 rpm = 1 Hz | 600 rpm = 10 Hz |

---

## Class 9 ka recall

Class 9 mein hum dekh chuke hain ki sound vibration se bani hoti hai, aur f = 1 ÷ T ([sound-part3.md](../../../class9/physics/sound/sound-part3.md)). Ye bhi dekha tha ki kaan ka eardrum sound ki frequency par hi kaanpta hai ([sound-part7.md](../../../class9/physics/sound/sound-part7.md)), aur speaker ka cone balloon ko hila deta hai ([sound.md](../../../class9/physics/sound/sound.md)): ye dono is topic ke pehle examples hain. Ek baat alag hai: [sound-part4.md](../../../class9/physics/sound/sound-part4.md) mein stage ke peeche "soundboard" awaaz ko audience ki taraf **mod** kar bhejta tha; yahan sounding board khud **vibrate** karta hai, ye doosri cheez hai. Energy ka conservation ([work-energy-and-power-part6.md](../../../class9/physics/work-energy-and-power/work-energy-and-power-part6.md)) hume aage ek jagah kaam aayega.

---

## Part A: Driver aur forced vibration

### Teen kirdaar

Is topic mein hamesha teen kirdaar hote hain: **driver** (jo hilata hai), **object** (jo hilta hai), aur object ki apni natural frequency **f_n**. Fork desk ko hilata hai, to fork driver hai aur desk object.

> **Niyam 1:** steady state mein forced vibration ki frequency **driver ki f_d** hoti hai, object ki f_n nahi.

Kyun? Driver har T_d = 1 ÷ f_d second mein ek dhakka deta hai, aur object ko wahi dhakke ke hisaab se chalna padta hai: jaise kisi ko haath pakad kar ghuma rahe ho to wo aapki taal par hi chalega. Object ki apni taal ka asar shuru mein dikhta hai, par damping (Topic 2) usse dheere dheere mita deti hai. Bacha hua **steady state** driver ki taal ka hota hai.

### Ek chhota experiment: haath se pendulum hilana

Ek 1.00 m lambe dhaage mein bahut halki cheez (chhoti rubber ball) bandh kar pendulum banao. Topic 1 ke hisaab se iska T lagbhag 2.0 s hai, yaani f_n lagbhag 0.5 Hz. Ab dhaage ka upar ka sira ungliyon mein pakad kar apna haath daayein-baayein **0.8 s mein ek baar** hilao (f_d = 1.25 Hz).

```
                       0.0         0.8         1.6         2.4         3.2         4.0
samay t (s)             +  .  .  .  +  .  .  .  +  .  .  .  +  .  .  .  +  .  .  .  +
hath ka daayan sira     X           X           X           X           X           X
pendulum, apni swing    X                             X                             X
pendulum, steady        X           X           X           X           X           X
```

> **Figure 3.1** – Samay ke saath marks (X = daayein sire par pahunchna). Haath har 0.8 s mein, pendulum akela har 2.0 s mein, par haath se hilne par steady state mein pendulum bhi har 0.8 s mein: driver ki taal.

Shuru ke 2 se 3 jhoole thode ulte-seedhe dikhte hain (apni f_n aur driver ki taal ka mel), phir damping unhe mita deti hai aur pendulum haath ki taal par ek jaisa hilne lagta hai.

> **Safe activity (ghar par adult ke saath):** halki rubber ball ya bahut halki cheez lo, patla dhaaga, kisi ko aas-paas se hata do, zameen par khade rehkar hi karo (kursi ya stool par kabhi nahi). Haath ko pehle bahut dheere, phir tez hilao. Dekho: har baar pendulum **haath ki hi taal** par hilta hai. Ye bhi dekho: kuch taal par amplitude bahut chhota rehta hai. Kisi ek taal par kaafi bada ho jaata hai: "bahut zyada", iska kaaran aur naam Topic 4 mein.

### Example 1: Phone ki vibration table par

**Given:** phone ki motor 180 Hz par driver hai; table-top forced vibration kar raha hai.
**Find:** table-top ki frequency aur time period.
**Formula:** steady state mein f = f_d; T = 1 ÷ f.
**Substitution:** f = 180 Hz; T = 1 ÷ 180 Hz = 0.00556 s.
**Answer:** table-top **180 Hz** par hilta hai, T lagbhag **5.56 ms**, chahe table ki apni f_n kuch bhi ho.
**Jaanch:** f × T = 180 Hz × 0.00556 s = 1.0 ✅

### Example 2: Washing machine ka frame

**Given:** drum 900 rpm par ghoom raha hai aur frame ko hilata hai.
**Find:** f_d aur T.
**Formula:** f_d = rpm ÷ 60 (kyunki 1 minute = 60 s); T = 1 ÷ f_d.
**Substitution:** f_d = 900 ÷ 60 = 15 Hz; T = 1 ÷ 15 = 0.0667 s.
**Answer:** frame **15 Hz** par hilta hai, T lagbhag **0.067 s**.
**Jaanch:** 15 Hz × 60 s = 900 chakkar ✅

### Example 3: Pendulum haath ki taal par

**Given:** 1.00 m ka pendulum (T lagbhag 2.0 s), haath har 0.8 s mein ek baar hilta hai.
**Find:** steady state mein pendulum ka T aur f.
**Formula:** f_d = 1 ÷ T_d; forced vibration ki f = f_d.
**Substitution:** f_d = 1 ÷ 0.8 s = 1.25 Hz.
**Answer:** pendulum **1.25 Hz** par hilta hai, T = **0.8 s** (apne 2.0 s par nahi).
**Jaanch:** T = 0.8 s haath ke T_d ke barabar hai, 2.0 s se alag ✅

---

## Part B: Kitna hilega? Response curve

Niyam 1 sirf **kis taal par** batata hai. Ab dusra sawaal: **kitni badi vibration?** Amplitude is par depend karta hai ki f_d, object ki f_n se kitni door ya kitni paas hai.

1.00 m wale pendulum (f_n lagbhag 0.50 Hz) ke saath ek chhote experiment ka andaaza: haath ka hilna har baar ek jitna rakho, bas f_d badlo.

| f_d (Hz) | 0.10 | 0.20 | 0.30 | 0.40 | 0.45 | 0.50 | 0.55 | 0.60 | 0.70 | 0.80 | 0.90 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A (cm, lagbhag) | 1.0 | 1.2 | 1.5 | 2.5 | 3.8 | 5.0 | 3.3 | 2.0 | 1.0 | 0.6 | 0.4 |

```
 5.0 I                           ###
     I                           ###
 4.0 I                      ###  ###
     I                      ###  ###  ###
 3.0 I                      ###  ###  ###
     I                 ###  ###  ###  ###
 2.0 I                 ###  ###  ###  ###  ###
     I            ###  ###  ###  ###  ###  ###
 1.0 I  ###  ###  ###  ###  ###  ###  ###  ###  ###
     I  ###  ###  ###  ###  ###  ###  ###  ###  ###  ###  ###
     +--------------------------------------------------------
       0.10 0.20 0.30 0.40 0.45 0.50 0.55 0.60 0.70 0.80 0.90   f_d (Hz)
                                 III
                                f_n lagbhag 0.50 Hz
A (cm): har ### ki ek parat = 0.5 cm (paas wale 0.5 cm tak round kiya)
```

> **Figure 3.2** – Response curve: f_d badalne par forced vibration ka amplitude. Sabse oonchi patti f_d = f_n ke paas (5.0 cm); dono taraf door jaate hi amplitude gir jaata hai. Is bahut bade amplitude ka naam aur kaaran Topic 4 mein.

Curve se teen baatein:
- f_d, f_n se bahut kam ya bahut zyada ho to amplitude **chhota**.
- f_d, f_n ke paas aaye to amplitude **tezi se badhta** hai.
- f_d = f_n par amplitude sabse bada, "bahut zyada": Topic 4 mein iska poora kissa.

### Example 4: Figure 3.2 padhna

**Given:** table ke ankon se f_d = 0.20 Hz par A = 1.2 cm aur f_d = 0.50 Hz par A = 5.0 cm.
**Find:** amplitude kitne guna badha, aur dono taal ke T.
**Formula:** anupaat = A₂ ÷ A₁; T = 1 ÷ f_d.
**Substitution:** 5.0 ÷ 1.2 = 4.17; T₁ = 1 ÷ 0.20 = 5.0 s; T₂ = 1 ÷ 0.50 = 2.0 s.
**Answer:** amplitude lagbhag **4 guna**; T = **5.0 s** aur **2.0 s**.
**Jaanch:** 1.2 cm × 4.17 = 5.0 cm ✅; T₂ = 2.0 s pendulum ke apne T ke barabar, isiliye wahan sabse bada A ✅

---

## Part C: Sounding board aur roz ki cheezein

### Fork aur desk

Fork ki patli bhujayein hawa ko bahut kam dhakelti hain: hawa unke aas-paas se nikal jaati hai, isliye awaaz dheemi. Stem ko desk par tikane se fork **driver** ban jaata hai aur desk ka bada top **forced vibration** karta hai. Badi satah ek saath bahut hawa dhakelti hai, to awaaz loud.

```
   (a) Hawa mein                        (b) Desk par

   I   I                                I   I
   I   I                                I   I
    \_/                                  \_/
     I                                    I
                                    ======================  desk ka top
   dheemi awaaz                     poora top hilta hai: loud awaaz
```

> **Figure 3.3** – (a) Fork hawa mein: sirf chhoti bhujayein hawa ko hilati hain. (b) Stem desk par: desk ka bada top fork ki taal par vibrate karta hai (forced vibration) aur sounding board ka kaam karta hai.

> **Safe activity (school mein teacher ke saath):** fork ko rubber pad par halke se maaro (kaanch, ceramic ya desk ke kinare par kabhi nahi). Pehle hawa mein, phir stem ko lakdi ki table ya cardboard ke dabbe par tika kar suno. Fork ki awaaz band hone ka samay dono mein napo.

### Sab jagah wahi kahani

```
 [ taar ] ---> [ bridge ] ---> [ upar ki patli lakdi ] ---> [ andar ki hawa ] ---> [ kaan ]
  driver                      forced vibration (sounding board)        awaaz hawa mein
```

> **Figure 3.4** – Guitar ya sitar mein taar driver hai. Wo bridge ke raste lakdi ke body ko hilati hai; badi satah hawa ko hilati hai, to taar akeli ke mukaable awaaz kaafi loud.

| Cheez | Driver | Forced vibration karne wala | Kya hota hai |
|---|---|---|---|
| Guitar, sitar, violin | Hilti taar | Lakdi ka body aur andar ki hawa | Loud, gunjti awaaz; sounding board |
| Loudspeaker | Badalta bijli ka current (Electromagnetism mein aage) | Cone | Cone amplifier ki frequency par hilta hai |
| Kaan ka eardrum | Hawa ke compression aur rarefaction | Eardrum | Sound ki hi frequency par kaanpta hai |
| Microphone ya phone ki diaphragm | Aati sound | Diaphragm | Jhilli sound ki taal par hilti hai |
| Washing machine | Ghoomta drum | Frame aur floor | Drum ki rpm ke hisaab se f_d |
| Car body | Idling engine ke dhakke | Body, dashboard | Engine ki taal par halka kaanpna |
| Phone table par | Vibration motor | Table ka top | Buzz table par tez sunai deta hai |

> **Safe activity (ghar par adult ke saath):** phone ko silent (vibrate) par rakho aur doosre phone se call lagwao. Ek baar phone ko tahe kiye kapde par, ek baar lakdi ki table par rakho. Table par buzz zyada loud: table forced vibration kar raha hai. Phone ko table ke kinare se door rakho taaki gir na jaye.

### Example 5: Fork ki frequency desk par

**Given:** 320 Hz ka fork desk par; hawa mein v = 340 m/s.
**Find:** desk se aati sound ki frequency aur wavelength.
**Formula:** f = f_d; λ = v ÷ f.
**Substitution:** f = 320 Hz; λ = 340 ÷ 320 = 1.0625 m.
**Answer:** frequency **320 Hz**, wavelength lagbhag **1.06 m**: fork ki hi awaaz, bas loud.
**Jaanch:** 320 Hz × 1.0625 m = 340 m/s ✅

### Example 6: Guitar ki taar

**Given:** taar 196 Hz par hilti hai; body forced vibration karti hai.
**Find:** body ka T aur sound ki wavelength (v = 340 m/s).
**Formula:** T = 1 ÷ f_d; λ = v ÷ f_d.
**Substitution:** T = 1 ÷ 196 = 0.00510 s; λ = 340 ÷ 196 = 1.735 m.
**Answer:** T lagbhag **5.10 ms**, λ lagbhag **1.73 m**.
**Jaanch:** 196 Hz × 1.735 m = 340 m/s ✅

### Example 7: Speaker ki frequency double

**Given:** speaker cone pehle 200 Hz, phir 400 Hz par driver hota hai.
**Find:** dono ke T aur anupaat.
**Formula:** T = 1 ÷ f_d.
**Substitution:** T₁ = 1 ÷ 200 = 0.005 s; T₂ = 1 ÷ 400 = 0.0025 s.
**Answer:** T₁ = **5 ms**, T₂ = **2.5 ms**; f double hone par T aadha.
**Jaanch:** T₁ ÷ T₂ = 2 ✅

### Sounding board ki ek imaandaar baat

Sounding board **energy paida nahi karta**. Fork ke paas jitni energy thi, utni hi hai. Bas wo ab **tez raftaar se** hawa mein jaati hai: awaaz loud, par jaldi khatam. (Class 9 ka energy conservation: [work-energy-and-power-part6.md](../../../class9/physics/work-energy-and-power/work-energy-and-power-part6.md).) Isiliye desk par fork ki awaaz hawa mein pakde fork se kaafi pehle band ho jaati hai.

---

## Part D: Sympathetic vibration

Do ek jaise fork, A aur B, alag-alag dabbon par paas-paas rakho. Sirf A ko maaro, phir A ko chhoo kar rok do. B ko kisi ne chhua bhi nahi, par **B dheere se bajta** sunai deta hai!

```
      Y                         Y
      I                         I
  [ box A ]    <------>     [ box B ]
 (maara gaya)    hawa     (chhua nahi)
```

> **Figure 3.5** – A ki hilti awaaz hawa ke raste B ke dabbe ko baar-baar dhakelti hai (f_d = A ki frequency). B forced vibration karta hai: ye sympathetic vibration hai.

Kyun? A ki sound ke compressions aur rarefactions B ko baar-baar dhakelte hain: A driver hai, B object. Ek jaisa fork B hone par jawab saaf milta hai, kyunki f_d aur B ki f_n paas hain (Figure 3.2 ki tarah). Kisi bahut alag f_n wale fork ke paas jawab kamzor hota hai. Is "paas hone" ka naam Topic 4 mein.

> **Safe activity (school mein teacher ke saath):** do ek jaise fork, dono dabbe ke munh ek taraf; sirf ek ko rubber pad par maaro, doosre ko na chhuo. Kaanch ke glass par ye kabhi nahi karte.

---

## Wapas music room mein

Chacha ne Radhika ke teeno sawaalon ke jawab diye.

**Desk loud kyun?** Fork driver hai, desk ka bada top forced vibration karta hai aur sounding board ban jaata hai: zyada hawa dhakela jaata hai.

**Kya desk ne apni tune gaayi?** Nahi. Desk fork ki taal par hila: awaaz wahi 320 Hz (Example 5), kisi "desk ki tune" ki nahi.

**Awaaz jaldi band kyun?** Fork ki energy tez rate par hawa mein chali gayi, to jaldi khatam. Hawa mein fork ki awaaz dheemi par der tak chalti hai.

Radhika boli, "To driver ki taal pehle, object ki apni tune baad mein!" Chacha ne kaha, "Taal driver ki, amplitude f_n se nazdeeki par."

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Forced vibration mein object apni natural frequency par hi hilta hai."**

Demonstration: maan lo desk-top ki apni f_n lagbhag 90 Hz hai. 320 Hz ka fork desk par rakho. Agar desk apni f_n par hilta, to 90 Hz ki dheemi bhanbhanahat sunai deti. Par kaan ko wahi 320 Hz ki "tiiiin" sunai deti hai. Wajah: desk ko driver ne 1 ÷ 320 = 3.1 ms mein ek dhakka diya, aur steady state mein wahi taal bachi. Sahi: forced vibration ki frequency **f_d** hoti hai (Niyam 1); f_n sirf amplitude ko asar karti hai.

**Galti 2: "Loud awaaz ka matlab sounding board ne energy paida ki."**

Demonstration (maan lo): hawa mein pakde fork ki awaaz 30 s tak chalti hai, dabbe par 6 s tak. Kul energy E dono mein ek hi. Hawa mein energy ka rate = E ÷ 30, dabbe par = E ÷ 6. Anupaat (E ÷ 6) ÷ (E ÷ 30) = 30 ÷ 6 = **5**. Yaani dabbe par energy 5 guna tez rate se nikli, na ki 5 guna zyada energy. Jaanch: 5 × (E ÷ 30) = E ÷ 6 ✅. Sahi: loud ka matlab tez rate; kul energy wahi, isiliye awaaz jaldi khatam.

---

## Quick Recap

- **Driver** object ko baar-baar dhakelta hai; **f_d** uski frequency.
- Steady state mein forced vibration ki frequency = **f_d**, object ki f_n nahi.
- Pehle thodi apni f_n ki vibration dikhti hai, damping use mita deti hai.
- Amplitude f_d aur f_n kitne paas hain us par depend karta hai: dono door to chhota, paas aate hi bada (response curve, Figure 3.2).
- Sounding board badi satah hai jo forced vibration se awaaz loud karta hai: energy paida nahi, bas tez rate se nikalti hai.
- Examples: fork aur desk, guitar, speaker cone, eardrum, microphone, washing machine, car body.
- Sympathetic vibration: ek object ki awaaz doosre ko hila de.
- rpm ÷ 60 = Hz; T = 1 ÷ f_d.

---

## Practice Questions

(Take the speed of sound in air as 340 m/s.)

1. A motor shakes a table-top at a driving frequency of 48 Hz. The table-top has a natural frequency of 35 Hz. At what frequency does it vibrate in steady state? Find the time period in ms.
2. A loudspeaker cone is driven at 85 Hz. Find the time period, the number of vibrations in 4 s, and the wavelength of the sound in air.
3. The drum of a washing machine spins at 600 rpm and later at 1200 rpm. Find f_d and T for each, and say how many times faster the frame shakes in the second case.
4. The eardrum is driven by a 2 kHz sound. Find the time period in ms, the wavelength in air, and the number of vibrations in 3 ms.
5. A 375 Hz fork is pressed on a desk whose own natural frequency is 140 Hz. At which frequency does the sound come from the desk? Find its wavelength in air and the time period.
6. A microphone diaphragm is driven by a 1 kHz sound. Find the time period and the number of vibrations in 0.25 s.
7. The idling engine of a car pushes the body 120 times in one second. Find f_d and T in ms. At another engine speed the pushes are 7.5 ms apart; find that f_d.
8. A fork's sound lasts 40 s in air and 8 s when its stem is pressed on a wooden box. Assuming the same total energy in both cases, compare the rate of energy loss. Does the box create energy?
9. State true or false with a one-line reason: (a) Forced vibration occurs at the object's natural frequency. (b) A guitar body is a sounding board. (c) The sound from a fork on a desk has a different pitch from the same fork in air. (d) A louder sound means more total energy was created.
10. Explain why a tuning fork sounds louder on a wooden desk than when held in the air, in three or four lines.
11. In a guitar, name the driver and the object that vibrate in a forced way, and say what decides the frequency of the sound that we hear.
12. A friend says, "My phone buzzes louder on a table because the table is vibrating with its own natural frequency." Correct the statement using the idea of f_d.

### Answers

1. Steady state mein table-top **driver ki taal** par hilta hai: f = f_d = **48 Hz** (35 Hz nahi). T = 1 ÷ 48 = 0.0208 s = **20.8 ms**.
   Jaanch: 48 Hz × 0.0208 s = 1.0 ✅

2. f_d = 85 Hz. T = 1 ÷ 85 = 0.01176 s = **11.8 ms**. Vibrations in 4 s = 85 × 4 = **340**. λ = 340 ÷ 85 = **4.0 m**.
   Jaanch: 85 Hz × 4.0 m = 340 m/s ✅

3. 600 rpm: f_d = 600 ÷ 60 = **10 Hz**, T = 1 ÷ 10 = **0.10 s**. 1200 rpm: f_d = 1200 ÷ 60 = **20 Hz**, T = **0.05 s**. Anupaat 20 ÷ 10 = **2 guna** tez.
   Jaanch: 20 Hz × 0.05 s = 1 ✅

4. 2 kHz = 2000 Hz. T = 1 ÷ 2000 = 0.0005 s = **0.5 ms**. λ = 340 ÷ 2000 = **0.17 m**. 3 ms = 0.003 s, to 2000 × 0.003 = **6 vibrations**.
   Jaanch: 2000 Hz × 0.17 m = 340 m/s ✅

5. Desk forced vibration karta hai, isliye frequency **375 Hz** (140 Hz nahi). λ = 340 ÷ 375 = 0.9067 ≈ **0.91 m**. T = 1 ÷ 375 = 0.002667 s ≈ **2.67 ms**.
   Jaanch: 375 Hz × 0.9067 m = 340 m/s ✅

6. 1 kHz = 1000 Hz. T = 1 ÷ 1000 = 0.001 s = **1 ms**. Vibrations in 0.25 s = 1000 × 0.25 = **250**.
   Jaanch: 1000 Hz × 0.001 s = 1 ✅

7. f_d = **120 Hz**, T = 1 ÷ 120 = 0.00833 s = **8.33 ms**. Doosri speed: T = 7.5 ms = 0.0075 s, f_d = 1 ÷ 0.0075 = **133 Hz** (lagbhag, 133.3 Hz).
   Jaanch: 120 Hz × 0.00833 s = 1.0 ✅ aur 133.3 Hz × 0.0075 s = 1.0 ✅

8. Rate hawa mein = E ÷ 40, box par = E ÷ 8. Anupaat = 40 ÷ 8 = **5**. Box par energy **5 guna tez rate** se nikalti hai. Box ne **energy paida nahi ki**: kul energy E hi hai.
   Jaanch: 5 × (E ÷ 40) = E ÷ 8 ✅

9. (a) **False** ❌. Frequency f_d hoti hai. (b) **True** ✅. Badi patli satah forced vibration se awaaz loud karti hai. (c) **False** ❌. Wahi frequency, wahi pitch; sirf loudness badhti hai. (d) **False** ❌. Energy paida nahi hoti, tez rate se nikalti hai.

10. Hawa mein fork ki patli bhujayein kam hawa dhakelti hain. Desk par stem lagane se fork driver ban jaata hai aur desk ka bada top forced vibration karta hai. Badi satah zyada hawa ko dhakelti hai, to awaaz loud. Kul energy wahi, bas jaldi nikalti hai.

11. Driver: **hilti taar**. Object: **lakdi ka body (aur andar ki hawa)**. Sunai dene wali awaaz ki frequency **taar ki f_d** se tay hoti hai, body ki f_n se nahi.

12. Table ka top phone ki **motor ki taal f_d** par hilta hai, apni f_n par nahi (Niyam 1). Table loud isliye karta hai kyunki badi satah zyada hawa dhakelti hai. f_n sirf is par asar karti hai ki amplitude kitna bada hoga.

---

Ab tum jaante ho ki jab koi aur hilaye to object driver ki taal par hilta hai, aur amplitude f_n se nazdeeki par depend karta hai. Radhika ne agle din Chacha ke saath ek fork phir desk par rakha aur is baar apna haath bhi desk par rakh kar kaanpna mehsoos kiya: "Chacha, ye to meri ungliyon mein bhi aa raha hai!"

**Aage kya?** Ab ek mazedaar sawaal: society garden ke jhoole par ek chhota sa dhakka bhi use bahut oonchi kyun bhej deta hai? Topic 4 mein dekhenge ki jab f_d = f_n ho jaata hai to kya hota hai: **resonance**.
