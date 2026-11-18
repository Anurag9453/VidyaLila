# Chapter: Vibrations and Resonance (Part 2)

> **Class:** 10 | **Subject:** Physics
> **Ye file [vibrations-and-resonance.md](vibrations-and-resonance.md) se aage chalti hai** (wahan natural vibrations, natural frequency f_n aur simple pendulum ka T = 2π√(l ÷ g) tha). Chapter ki shuruaat: [vibrations-and-resonance.md](vibrations-and-resonance.md). Recall ke liye: amplitude, f aur T [sound-part3.md](../../../class9/physics/sound/sound-part3.md), 20 oscillations ka time [measurement-and-units-part3.md](../../../class9/physics/measurement-and-units/measurement-and-units-part3.md), pendulum mein energy ka badalna [work-energy-and-power-part6.md](../../../class9/physics/work-energy-and-power/work-energy-and-power-part6.md).
> **Topics covered in this file:**
> 2. Damping: Vibration Dheere Dheere Kyun Ruk Jaati Hai

---

# Topic 2: Damping: Vibration Dheere Dheere Kyun Ruk Jaati Hai

Topic 1 mein humne dekha ki har cheez ki apni "dhun" hoti hai: natural frequency f_n, jo cheez ki apni banawat (lambai, mass, kasaav) tay karti hai, usse nahi ki kitne zor se shuru kiya. Pendulum ke liye T = 2π√(l ÷ g) bhi dekha. Par ek sawaal baaki reh gaya: agar f_n aur T badalte hi nahi, to jhoola ek baar hila diya to **hamesha hilta kyun nahi rehta**? Aaj hum uski wajah, uska hisaab aur uske kaam dekhenge.

---

## Gaon ki sadak par bail-gaadi aur car

Mr. Jaywant apne bhatije Indrajit ko gaon le gaye the. Station se ghar tak kachchi sadak thi, gaddhon se bhari. Pehle ek bail-gaadi ki sawari mili: lakdi ke pahiye, lohe ki patti, aur seat seedhi gaadi ke dhaanche par. Har gaddhe par Indrajit ko seedha upar uchhalna pada. "Chacha, meri reedh ki haddi hil gayi!" wo hanste hue bola.

Wapsi mein gaon ke ek rishtedaar ki car mili. Wahi sadak, wahi gaddhe. Par ek bada gaddha aaya to car ki body ek baar neeche dhasi, ek baar halka sa upar uthi, aur bas, shaant. Do-teen baar uchhalna nahi hua.

Indrajit ne hairaan ho kar kaha, "Chacha, car mein to spring hai na? Spring to dabane par uchhalti hai. Phir ye bounce-bounce-bounce kyun nahi karti, jaise Topic 1 mein ruler hilta hi rehta tha?" Mr. Jaywant ne kaha, "Bahut accha sawaal. Jawab car ke pahiye ke upar chhupa hai: spring ke saath ek aur cheez lagi hai. Chalo, pehle samjhein ki aam jhoola kyun ruk jaata hai, phir wapas is car par aayenge."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Damping** | Wo asar jo vibrate karti cheez ki energy ko dheere-dheere kheench kar uska amplitude ghata deta hai | Hawa ka rukawat, pivot ka ghisav |
| **Damped vibration** | Wo vibration jisme damping ki wajah se amplitude samay ke saath kam hota jaata hai | Akele chhode gaye pendulum ka jhoolna |
| **Internal friction** | Dhaage, spring ya dhaatu ke bend hote waqt uske andar ke hisson ka ek doosre se ghisna | Dhaaga baar-baar mudne par thoda garam hota hai |
| **Energy ka bikhar jaana** | Mechanical energy ka heat aur sound ban kar aas-paas phail jaana, jisse wo jhoole ko wapas nahi milti | Pendulum ki PE ka kuch hissa hawa mein garmi ban jaana |
| **Amplitude envelope** | Vibration ki chotiyon ko jodne wali rekha jo dikhati hai ki amplitude samay ke saath kaise ghat raha hai | Figure 2.1 ki dotted rekha |
| **Shock absorber** | Tel bhara cylinder jisme piston chalta hai; ye spring ke vibrations ki energy ko garmi mein badal kar bounce rok deta hai | Car aur scooter ke pahiyon ke paas |
| **Critical damping** | Utni hi damping jisme cheez baar-baar hile bina, sabse jaldi apni shaant position par aa jaaye | Door closer wala darwaza |

---

## Class 9 ka recall

Class 9 mein do baatein padhi thin. **Pehli:** pendulum mein bob extreme position par saari energy PE rakhta hai aur sabse neeche saari KE, aur hawa aur friction ho to "dheere-dheere jhoola ruk jaata hai" ([work-energy-and-power-part6.md](../../../class9/physics/work-energy-and-power/work-energy-and-power-part6.md), Part D). Wahan ye line bas ek bracket mein thi, uska poora hisaab nahi tha. **Doosri:** amplitude A, frequency f aur f = 1 ÷ T ([sound-part3.md](../../../class9/physics/sound/sound-part3.md)). Aaj wahi adhoora bracket pura karenge: kitni energy gayi, kahan gayi, aur amplitude kitna ghata.

---

## Part A: Asli pendulum kyun rukta hai

Class 9 ka pendulum "ideal" tha: na hawa, na friction. Asli pendulum ko jab ek baar hila ke chhodo to teen "chor" uski energy dheere-dheere chura lete hain:

| Chor | Kya hota hai | Energy kahan jaati hai |
|---|---|---|
| **Air resistance** | Bob aage badhta hai to hawa ke kan use rokte hain | Hawa thodi garam, thodi sound |
| **Pivot ka friction** | Dhaaga jahan hook ya keel se bandha hai, wahan ghisav | Hook thoda garam |
| **Internal friction** | Dhaaga har bar mudta aur sidha hota hai | Dhaage ke andar garmi |

Teeno ka naam ek hi hai: **damping**. Aur ek zaroori baat jo Class 9 se jud rahi hai: **energy nasht nahi hui**. Mechanical energy (PE + KE) kam hui, par wahi energy heat aur sound ban gayi (conservation intact). Bas ye heat aur sound aas-paas phail jaati hain aur jhoole ko wapas nahi milti.

### Amplitude kaise ghatta hai

Pehle swing mein bob jahan se chhoda gaya wahin tak nahi lautta, thoda pehle ruk jaata hai. Agle swing mein aur thoda pehle. Isliye **amplitude har swing mein ek hi hissa ghat-ta hai**, ek hi ratio se, kam hote-hote shunya ke paas pahunchta hai. Ek swing ka matlab yahan ek poora oscillation (A se doosri taraf aur wapas A tak).

**Example 1: Amplitude ka ghatna**

Ek pendulum ka amplitude shuru mein 12 cm hai aur har poore swing mein 25% ghatta hai (yaani 75% bachta hai). 1, 2 aur 3 swing ke baad amplitude kitna hoga?

- **Given:** A_0 = 12 cm, har swing mein bachta hai 0.75 guna
- **Find:** A_1, A_2, A_3
- **Formula:** naya amplitude = purana amplitude × 0.75
- **Substitution:** A_1 = 12 × 0.75 = 9.0 cm; A_2 = 9.0 × 0.75 = 6.75 cm; A_3 = 6.75 × 0.75 = 5.0625 cm
- **Answer:** A_1 = **9.0 cm**, A_2 = **6.75 cm**, A_3 ≈ **5.06 cm**

Jaanch: 12 × 0.75 × 0.75 × 0.75 = 12 × 0.421875 = 5.0625 cm ✅, aur har amplitude pichhle se kam hai ✅

```
 Amplitude A, har chhota "o" ek swing ki choti hai (1 row = 1 cm, nearest cm tak)

12 cm Io.
      I: ..
      I:   ...
 9 cm I:      .o.
      I:       : .....
      I:       :      .o.
 6 cm I:       :       : .....
      I:       :       :      .o...
      I:       :       :       :   ....o....
 3 cm I:       :       :       :       :    ...o
      I:       :       :       :       :       :
      I:       :       :       :       :       :
      +------------------------------------------------> t (s)
       0.0     2.0     4.0     6.0     8.0     10.0
```

> **Figure 2.1** – Damped vibration: chotiyon 12, 9, 6.75 (7), 5.06 (5), 3.80 (4) aur 2.85 (3) cm hain. Chotiyon ko jodne wali dotted rekha **amplitude envelope** hai, jo dheere-dheere neeche aati hai. Do chotiyon ke beech ka samay (2.0 s) har jagah wahi hai (Part B mein dekhenge ki ye kyun).

### Energy ke saath kya hota hai

Class 9 se: mechanical energy = PE + KE. Har swing mein thodi energy heat aur sound ban jaati hai. Maan lo har swing ke baad **85%** energy bachti hai.

**Example 2: Energy ka hisaab**

Ek pendulum ki mechanical energy shuru mein 0.50 J hai. Har swing mein 85% energy bachti hai. 3 swing ke baad kitni energy bachi, aur kitni heat aur sound ban gayi?

- **Given:** E_0 = 0.50 J, har swing mein bachta hai 0.85 guna, swings = 3
- **Find:** E_3, aur heat aur sound mein gayi energy
- **Formula:** E_3 = E_0 × 0.85 × 0.85 × 0.85; gayi energy = E_0 − E_3
- **Substitution:** E_1 = 0.50 × 0.85 = 0.425 J; E_2 = 0.425 × 0.85 = 0.36125 J; E_3 = 0.36125 × 0.85 ≈ 0.3071 J. Gayi energy = 0.50 − 0.3071 = 0.1929 J
- **Answer:** bachi **0.307 J**, heat aur sound mein gayi **0.193 J**

Jaanch: 0.307 + 0.193 = 0.500 J ✅ (kul energy wahi, bas roop badla)

```
 Mechanical energy (# = bachi hui, . = heat aur sound mein gayi; 1 # = 0.025 J)

 shuru        #################### 0.500 J
 1 swing baad #################... 0.425 J
 2 swing baad ##############...... 0.361 J
 3 swing baad ############........ 0.307 J
```

> **Figure 2.2** – Har swing ke baad bachi hui energy (#) aur heat aur sound mein badli hui energy (.). Har row ki kul lambai 20 hai, yaani 0.500 J, isliye energy ka total kabhi nahi ghata, bas # kam aur . zyada hota gaya.

### Amplitude aur energy ka rishta

Chhote jhoolon ke liye ek tathya (poori wajah aage ki class mein): **energy amplitude ke square ke saath badhti hai**, yaani amplitude aadha hone par energy ek-chauthai reh jaati hai. Isi se ek dilchasp baat nikalti hai: amplitude thoda sa ghate to bhi energy zyada ghat-ti hai.

**Example 3: Amplitude 25% ghate to energy kitni bachti hai**

Agar har swing mein amplitude 0.75 guna ho jaata hai, to har swing mein energy kitni bachti hai?

- **Given:** amplitude ka ratio = 0.75
- **Find:** energy ka ratio
- **Formula:** energy ratio = (amplitude ratio)²
- **Substitution:** 0.75² = 0.75 × 0.75 = 0.5625
- **Answer:** har swing mein energy ka **56.25%** bachta hai (lagbhag 44% heat aur sound ban jaati hai)

Jaanch: Example 1 ke amplitudes 12 cm aur 9 cm lo: (9 ÷ 12)² = 0.75² = 0.5625 ✅

Ye hisaab Example 2 ke 85% energy wale pendulum jaisa hai: usme amplitude har swing mein √0.85 ≈ 0.92 guna hota (lagbhag 8% ghatta), yaani energy ke 15% ke nuksaan ka matlab amplitude ka sirf lagbhag 8% ka nuksaan.

---

## Part B: Frequency lagbhag wahi rehti hai

Figure 2.1 mein chotiyon ke beech ka samay har jagah 2.0 s hai, jabki amplitude 12 cm se 2.85 cm ho gaya. Ye koi sanyog nahi. Topic 1 mein dekha tha ki pendulum ka T sirf l aur g par depend karta hai, amplitude par nahi (chhote swings ke liye). Damping sirf amplitude ghatati hai, f_n aur T lagbhag wahi rehte hain.

**Example 4: Kitne samay mein amplitude 5 cm se kam hoga**

Ek 1.00 m lambe pendulum ka amplitude 12 cm hai aur har swing mein 25% ghatta hai. Kitne samay baad amplitude 5 cm se kam hoga? Ise Part A ke Example 1 ke saath milao.

- **Given:** l = 1.00 m, g = 9.8 m/s², A_0 = 12 cm, har swing mein 0.75 guna
- **Find:** kitne swing, aur kitna samay
- **Formula:** T = 2π√(l ÷ g); samay = swings × T
- **Substitution:** T = 2 × 3.14 × √(1.00 ÷ 9.8) = 6.28 × 0.3194 ≈ 2.0 s. Amplitude: 9.0, 6.75, 5.06 (3 swing, abhi 5 cm se zyada), 3.80 cm (4 swing, 5 cm se kam). Samay = 4 × 2.0 s = 8.0 s
- **Answer:** lagbhag **4 swing** mein, yaani lagbhag **8.0 s** mein

Jaanch: Example 1 mein 3 swing par A ≈ 5.06 cm (> 5 cm) aur 4 swing par 3.80 cm (< 5 cm) ✅. Samay ki unit s hai: swings × s/swing = s ✅

Ek bahut kaam ki baat: kyunki T nahi badalta, **pendulum clock ka kaam hi isi par tika hai**. Clock ke andar ek girta hua wazan ya battery har swing mein pendulum ko thodi energy wapas deti hai, jitni damping chura rahi hoti hai. Isse amplitude lagbhag ek hi rehta hai aur T bhi, isliye clock sahi samay dikhata hai.

**Example 5: Pendulum clock ko kitni energy deni padti hai**

Ek pendulum clock ka T ≈ 2.0 s hai. Har swing mein damping 0.0004 J energy heat aur sound mein badal deti hai. Ek din (24 ghante) mein clock ko kitni energy deni padegi? Agar ye energy ek 4 kg ke wazan ke girne se aati hai, to wazan lagbhag kitna neeche girega?

- **Given:** T ≈ 2.0 s, loss per swing = 0.0004 J, m = 4 kg, g = 9.8 m/s², 1 din = 24 × 3600 = 86400 s
- **Find:** ek din ki energy, aur wazan ka girna h
- **Formula:** swings = kul samay ÷ T; energy = swings × 0.0004 J; PE = m g h, to h = energy ÷ (m g)
- **Substitution:** swings = 86400 ÷ 2.0 = 43200; energy = 43200 × 0.0004 = 17.28 J; h = 17.28 ÷ (4 × 9.8) = 17.28 ÷ 39.2 ≈ 0.44 m
- **Answer:** lagbhag **17.3 J** energy, wazan lagbhag **0.44 m** neeche girega

Jaanch: m g h = 4 × 9.8 × 0.4408 = 17.28 J ✅. Dekho: itna chhota wazan bhi ek din chalata hai, kyunki har swing ka nuksaan bahut chhota hai.

### Ek baar socho: tuning fork ki awaaz

Class 9 mein tuning fork ko bajane par uski awaaz dheere-dheere dheemi hoti thi ([sound-part3.md](../../../class9/physics/sound/sound-part3.md): amplitude loudness se judi hai). Ab pata chala kyun: air resistance aur fork ke andar ki friction amplitude ghatati hain, isliye awaaz dheemi hoti hai. Par **sur wahi rehta hai**, kyunki f (aur isliye pitch) nahi badli. Ek honest baat: bahut zyada damping mein (jaise pendulum ko shehad mein hilana) vibration ka swing dheema ho jaata hai aur ruk bhi sakta hai, par aam hawa ki halki damping mein f aur T mein farak na ke barabar hai.

---

## Part C: Damping kab kaam ki, kab museebat

Damping dushman bhi hai aur dost bhi. Dono ki list dekho:

### Jahan damping chahiye

| Cheez | Damping kya karti hai | Bina damping ke kya hota |
|---|---|---|
| **Car aur scooter ka shock absorber** | Gaddhe ke baad bounce jaldi rokta hai | Car bar-bar uchhalti rehti |
| **Door closer** | Darwaza dheere aur bina dhamaake ke band karta hai | Darwaza dhamaake se band hota ya jhoolta rehta |
| **Weighing machine ya meter ki needle** | Needle jaldi sahi reading par ruk jaati hai | Needle pehle idhar-udhar jhoolti, reading padhna mushkil |
| **Seismograph** | Bhaari mass aur pen shaking ke baad hilte nahi rehte | Zameen shant hone ke baad bhi pen likhti rehti |
| **Bridge aur imaarat ke dampers** | Hawa ya sadak se aaye vibrations ko jaldi shaant karte hain | Vibrations zyada der tak chalte (Topic 5 mein) |

### Jahan damping nahi chahiye

Jhoole ka dheere-dheere ruk jaana, ya tuning fork ka jaldi chup ho jaana bachchon ko khalta hai. Pendulum clock mein damping energy chura leti hai, isliye clock ko ek girta wazan ya battery chahiye. Jis machine ko sahi samay ke liye lagataar hilna hai, use bahar se energy milti rehni zaroori hai (Topic 3 mein "bahar se hilana" ki baat shuru hogi).

### Critical damping: "bilkul sahi" matra

Ek hi darwaze ko teen tarah ke door closer se dekho: **bahut kam damping** par darwaza band hote hue baar-baar khulta-band hota hai ya dhamaake se band hota hai; **bahut zyada damping** par darwaza itni dheere band hota hai ki kai second lag jaate hain; aur **sahi (critical) damping** par darwaza sabse kam samay mein bina baar-baar hile band ho jaata hai.

### Shock absorber andar se kaise kaam karta hai

```
 car ki body     =======================================
                      ~                         I     I
                     ~~~                        I  o  I   <- piston
        spring -->    ~              tel bhara  I  I  I
                     ~~~             cylinder   I     I
                      ~                         I     I
                 =======================================
                         pahiye ka axle (sadak se judi)
```

> **Figure 2.3** – Car ki body aur axle ke beech do cheezein lagi hain: spring (~), jo gaddhe ka jhatka sokhti hai, aur shock absorber, jisme piston (o) tel mein dhakel kar bahut chhote chhedon se tel guzaarta hai. Tel ke andar ki ragad bounce ki energy ko garmi mein badal deti hai.

Spring akeli bounce ko roke nahi, kyunki spring energy ko wapas de deti hai. Shock absorber us energy ko garmi mein badal kar **bounce ko jaldi rok deta hai**. (Isliye lambi, tez sadak ke baad shock absorber thoda garam ho jaata hai.)

**Example 6: Car ke bounce mein shock absorber**

Gaddhe ke baad car ki body 6.0 cm ke amplitude se bounce karna shuru karti hai. Shock absorber har bounce mein amplitude ko sirf 40% bacha ke chhodta hai. Teen bounce ke baad amplitude kitna hoga? Agar shock absorber na ho to?

- **Given:** A_0 = 6.0 cm, har bounce mein 0.40 guna
- **Find:** A_1, A_2, A_3
- **Formula:** naya amplitude = purana × 0.40
- **Substitution:** A_1 = 6.0 × 0.40 = 2.4 cm; A_2 = 2.4 × 0.40 = 0.96 cm; A_3 = 0.96 × 0.40 = 0.384 cm
- **Answer:** teen bounce ke baad **0.384 cm** (lagbhag 4 mm), yaani bounce lagbhag khatam. Bina shock absorber ke amplitude lagbhag wahi rehta aur car kai bounce karti.

Jaanch: 6.0 × 0.40³ = 6.0 × 0.064 = 0.384 cm ✅

---

## Part D: Ghar par karke dekho

Ye activity **ghar par adult ke saath** karo.

**Activity 1: Ek hi ruler, do tarah ki hawa ki rukawat.** Ek plastic ya dhaatu ka ruler table ke kinare se aadha bahar nikaal kar ek haath se dabaye rakho. Uske khule sire par ek patla card (visiting card jaisa) tape se **kinare (edge) wale rukh** chipkao: card aise ho ki hilne ki disha mein uski patli dhaar aage ho. Ruler ko neeche dabake chhodo aur kitni der hilta hai dekho. Ab wahi card ghuma kar **chaudi side aage** karke dobara dekho. Dono baar card ka mass wahi hai, farak sirf hawa ki rukawat ka hai. Chaudi side wale card ke saath ruler **jaldi ruk jaayega**.

**Activity 2: Hawa mein ya paani mein.** Ek chhota halka patthar (haath ki mutthi se chhota) 30 cm ke dhaage se ek lakdi se baandho, aur lakdi ko ek badi balti ke munh par adult se pakadwao. Pehle patthar ko hawa mein thoda sa kheench kar chhodo aur ginti karo ki kitne swing ke baad jhoola lagbhag ruk jaata hai. Phir balti mein paani bharwao (patthar paani mein doobe rahe) aur dobara hilao. Paani mein jhoola **kuch hi swing mein ruk jaayega**. Paani hawa se kahin zyada rukawat deta hai. Bhaari bob ya kisi ki kursi par chadh kar kabhi nahi: sirf chhota, halka patthar.

---

## Wapas gaon ki sadak par

Indrajit ne kaha, "Chacha, to car ke andar spring aur shock absorber dono hain."

Mr. Jaywant ne haan mein sir hilaya. "Spring jhatka sokhti hai, shock absorber bounce rokta hai. Shock absorber kharab ho jaye to car gaddhe ke baad kai baar uchhalti hai. Mechanic ek chhota test karte hain: car ke ek kone ko dabakar chhodo (adult ke saath, car khadi hui). Achha shock absorber ek bounce ke baad ruk jaata hai. Kharab wala kai baar uchhalta hai."

Indrajit bola, "To bail-gaadi mein spring hi nahi thi, isliye har gaddhe ka jhatka seedha mujhe laga. Aur car mein spring bhi hai aur damping bhi."

"Bilkul. Aur ye bhi yaad rakho: gaddhe ki energy nasht nahi hui, shock absorber ke tel mein garmi ban gayi."

---

## Aam galtiyan (bachke rehna)

**1. "Damping se frequency bahut badal jaati hai."** ❌

Demonstration: 0.36 m ka pendulum lo (T ≈ 1.2 s). Pehle 10 swing ka time naapo jab A = 9 cm hai, phir wahi 10 swing ka time jab A ghat ke 4 cm reh gaya. Dono baar 10 swing lagbhag 12 s mein hote hain. Amplitude 9 cm se 4 cm hua, par T lagbhag wahi raha: sirf amplitude ghata, frequency nahi. (Class 9 ka tareeka: 10 swing ka total time naapo aur 10 se bhaag do.)

**2. "Vibration ruk gaya to energy nasht ho gayi."** ❌

Demonstration: Example 2 ka pendulum lo. Shuru mein 0.50 J, 3 swing ke baad 0.307 J. Baaki 0.193 J gayi kahan? Hawa thodi garam hui, hook thoda garam hua, dhaage ke andar garmi bani, aur thodi sound bani. Bahut chhoti garmi hai, thermometer pakad nahi paata, par 0.307 + 0.193 = 0.500 J ✅. Energy sirf roop badal kar phail gayi, nasht nahi hui (Class 9: conservation of energy).

---

## Quick Recap

- Asli pendulum ko ek baar hila ke chhodo to wo dheere-dheere ruk jaata hai: **damping** (air resistance, pivot ka friction, internal friction).
- Amplitude har swing mein ek hi ratio se ghatta hai: damped vibration. Amplitude envelope neeche aati hai.
- Energy **nasht nahi hoti**: mechanical energy heat aur sound ban kar phail jaati hai (conservation).
- Chhote jhoolon mein energy amplitude ke square ke saath badalti hai: amplitude 0.75 guna to energy 0.5625 guna.
- Frequency aur T lagbhag wahi rehte hain jabki amplitude ghat-ta hai: isiliye pendulum clock sahi chalta hai, bas use girte wazan ya battery se energy milti rehni chahiye.
- Damping kaam ki hai: shock absorber, door closer, meter ki needle, seismograph, weighing machine, bridge ke dampers.
- **Critical damping:** sahi matra, jisme cheez bina baar-baar hile sabse jaldi shaant ho.
- Activity: ruler par card (edge-on vs face-on) aur paani vs hawa mein halka patthar, adult ke saath.

---

## Practice Questions

(Take g = 9.8 m/s² and π = 3.14. Energy ratios per swing are given as percentages kept or lost.)

1. A pendulum has an amplitude of 20 cm. Each swing, its amplitude falls by 10 percent. Find the amplitude after 1, 2 and 3 swings.
2. A child on a playground swing has a mechanical energy of 60 J at the start. The swing loses 5 percent of its energy in each swing. Find the energy after 4 swings and the energy converted to heat and sound in these 4 swings.
3. A pendulum loses 8 percent of its energy in each swing. What percentage of its energy is left after 3 swings and after 7 swings?
4. A swing loses 12 percent of its energy in each swing. After how many swings will less than half of the starting energy be left? If one swing takes 3.5 s, find this time.
5. A pendulum's amplitude is multiplied by 0.70 in each swing. By what factor is its energy multiplied in each swing (use energy ∝ amplitude²)? If the starting energy is 40 J, find the energy after 2 swings.
6. A pendulum clock has T = 1.25 s. Damping converts 0.0003 J to heat and sound in each swing. How much energy must the clock supply in one day? If it comes from a falling 6 kg weight, how far must the weight fall in that day?
7. After a bump, a car body bounces with an amplitude of 7.5 cm. The shock absorber leaves 30 percent of the amplitude after each bounce. Find the amplitudes after 1, 2 and 3 bounces. After how many bounces is the amplitude below 0.5 cm?
8. A tuning fork is struck and its sound slowly fades but the pitch stays the same. Which quantity (amplitude A or frequency f) changes, and which stays nearly the same? Explain in two lines using damping.
9. For each case, say whether damping is wanted or unwanted and why: (a) the needle of a bathroom scale, (b) a swing in a park, (c) a door closer, (d) a seismograph pen, (e) the pendulum of a clock.
10. A pendulum has 0.72 J of mechanical energy at the start and 0.27 J after some swings. How much energy has changed into heat and sound, and what percentage of the starting energy is this? Was any energy destroyed?
11. Three door closers are tested on the same door. Closer X: the door closes in 3 s but bounces open and closes again several times. Closer Y: the door closes without any bounce but takes 40 s. Closer Z: the door closes without any bounce in 4 s. Which one has critical damping and why?
12. A pendulum of length 0.81 m is released and its amplitude falls from 14 cm to 3.5 cm in 3 minutes. Find its time period at the start, the number of swings in 3 minutes (lagbhag), and say what its T is near the end.

### Answers

1. **Given:** A_0 = 20 cm, har swing mein 0.90 guna. **Find:** A_1, A_2, A_3. **Formula:** naya = purana × 0.90. **Substitution:** 20 × 0.90 = 18 cm; 18 × 0.90 = 16.2 cm; 16.2 × 0.90 = 14.58 cm. **Answer:** **18 cm, 16.2 cm, 14.58 cm**.
   Jaanch: 20 × 0.90³ = 20 × 0.729 = 14.58 cm ✅

2. **Given:** E_0 = 60 J, har swing mein 0.95 guna, 4 swing. **Find:** E_4 aur heat aur sound mein gayi energy. **Formula:** E_4 = 60 × 0.95⁴; gayi = 60 − E_4. **Substitution:** 0.95⁴ = 0.8145; E_4 = 60 × 0.8145 = 48.87 J; gayi = 60 − 48.87 = 11.13 J. **Answer:** bachi **lagbhag 48.9 J**, gayi **lagbhag 11.1 J**.
   Jaanch: 48.87 + 11.13 = 60.00 J ✅

3. **Given:** har swing mein 0.92 guna bachta hai. **Find:** bacha hua percentage after 3 aur 7 swing. **Formula:** bacha = 0.92ⁿ. **Substitution:** 0.92³ = 0.7787; 0.92⁷ = 0.5578. **Answer:** **lagbhag 77.9%** (3 swing ke baad) aur **lagbhag 55.8%** (7 swing ke baad).
   Jaanch: 7 swing ke baad kam bacha, 3 ke baad zyada ✅ (energy sirf ghat-ti hai); 0.92³ × 0.92⁴ = 0.7787 × 0.7164 = 0.5578 ✅

4. **Given:** har swing mein 0.88 guna, T = 3.5 s. **Find:** pehla n jahan 0.88ⁿ < 0.5, aur samay. **Substitution:** 0.88⁵ = 0.5277 (abhi aadhe se zyada), 0.88⁶ = 0.4644 (aadhe se kam). **Answer:** **6 swing**; samay = 6 × 3.5 s = **21 s** (lagbhag).
   Jaanch: 0.88⁵ = 0.528 > 0.5 ✅ aur 0.88⁶ = 0.464 < 0.5 ✅

5. **Given:** amplitude ratio = 0.70, E_0 = 40 J. **Formula:** energy ratio = 0.70²; E_2 = 40 × (energy ratio)². **Substitution:** energy ratio = 0.49; E_2 = 40 × 0.49 × 0.49 = 40 × 0.2401 = 9.604 J. **Answer:** har swing mein energy **0.49 guna**; 2 swing ke baad **lagbhag 9.6 J**.
   Jaanch: 2 swing ke baad energy ratio 0.49² = 0.2401, aur 4 swing ke amplitude ratio 0.70⁴ = 0.2401 ke barabar hai ✅

6. **Given:** T = 1.25 s, loss = 0.0003 J per swing, m = 6 kg, 1 din = 86400 s. **Formula:** swings = 86400 ÷ T; energy = swings × loss; h = energy ÷ (m g). **Substitution:** swings = 86400 ÷ 1.25 = 69120; energy = 69120 × 0.0003 = 20.736 J; h = 20.736 ÷ (6 × 9.8) = 20.736 ÷ 58.8 ≈ 0.353 m. **Answer:** **lagbhag 20.7 J**; wazan **lagbhag 0.35 m** girega.
   Jaanch: m g h = 6 × 9.8 × 0.3527 = 20.74 J ✅

7. **Given:** A_0 = 7.5 cm, har bounce mein 0.30 guna. **Substitution:** 7.5 × 0.30 = 2.25 cm; 2.25 × 0.30 = 0.675 cm; 0.675 × 0.30 = 0.2025 cm. **Answer:** **2.25 cm, 0.675 cm, 0.2025 cm**. 0.675 cm abhi 0.5 cm se zyada hai, 0.2025 cm kam, isliye **3 bounce** ke baad amplitude 0.5 cm se kam hoga.
   Jaanch: 7.5 × 0.30³ = 7.5 × 0.027 = 0.2025 cm ✅

8. **Amplitude A** ghat-ta hai kyunki air resistance aur fork ke andar ka friction energy ko heat aur sound mein badalte hain (damping), isliye awaaz dheemi hoti hai. **Frequency f lagbhag wahi** rehti hai, isliye pitch (sur) nahi badalta.
   Jaanch: Class 9 se loudness amplitude se judi hai aur pitch frequency se ✅

9. (a) Chahiye: needle jaldi ruk kar reading de. (b) Nahi chahiye: bachche chahte hain jhoola der tak chale. (c) Chahiye: darwaza dheere aur bina dhamaake ke band ho. (d) Chahiye: shaking ke baad pen jhoolta na rahe. (e) Nahi chahiye: damping energy chura leti hai, isliye clock ko wazan ya battery se energy deni padti hai.
   Jaanch: jahan "jaldi shaant" chahiye wahan damping dost hai, jahan "der tak chalte rehna" chahiye wahan dushman ✅

10. **Given:** E_0 = 0.72 J, E = 0.27 J. **Formula:** gayi energy = E_0 − E; percentage = gayi ÷ E_0 × 100. **Substitution:** 0.72 − 0.27 = 0.45 J; 0.45 ÷ 0.72 × 100 = 62.5%. **Answer:** **0.45 J** (**62.5%**) heat aur sound mein badli. Koi energy nasht nahi hui.
    Jaanch: 0.27 + 0.45 = 0.72 J ✅

11. **Closer Z** (critical damping): wo sabse kam samay (4 s) mein bina bounce ke darwaza band karta hai. X mein damping kam hai (bar-bar bounce), Y mein zyada hai (bahut dheere, 40 s).
    Jaanch: Z ka samay (4 s) Y ke samay (40 s) se kam aur X jaisa bounce nahi, to X aur Y dono ke beech ki "sahi" sthiti hai ✅

12. **Given:** l = 0.81 m, samay = 3 min = 180 s. **Formula:** T = 2π√(l ÷ g). **Substitution:** T = 2 × 3.14 × √(0.81 ÷ 9.8) = 6.28 × 0.2875 = 1.805 s. Swings = 180 ÷ 1.805 ≈ 99.7 ≈ **100**. **Answer:** T ≈ **1.8 s** shuru mein, lagbhag **100 swing** 3 minute mein. Ant mein bhi T lagbhag **1.8 s** hi hoga, kyunki damping amplitude ghatati hai, T nahi.
    Jaanch: 100 × 1.8 s = 180 s ✅

---

Aaj tak jo jhoola "apne aap" ruk jaata tha, uska raaz ab tumhare haath hai: energy nasht nahi hui, bas garmi aur awaaz ban gayi. Agli baar car ke gaddhe par bounce dekho to shock absorber ko yaad karna.

**Aage kya?** Ab maan lo koi jhoole ko dheere-dheere nahi, **lagataar bahar se** hilata rahe: tuning fork haath mein pakad kar bajao to awaaz bahut halki, par wahi fork lakdi ki desk par dabao to loud. Desk ko kaun hilata hai, aur wo kis frequency par hilti hai? Topic 3 mein forced vibrations dekhenge.
