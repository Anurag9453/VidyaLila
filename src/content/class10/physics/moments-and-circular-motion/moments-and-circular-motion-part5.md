# Chapter: Moments, Centre of Gravity and Circular Motion (Part 5)

> **Class:** 10 | **Subject:** Physics
> **Ye file [moments-and-circular-motion-part4.md](moments-and-circular-motion-part4.md) se aage chalti hai** (wahan stability: cheez kab tikti hai aur kab girti hai). Chapter ki shuruaat: [moments-and-circular-motion.md](moments-and-circular-motion.md). Recall ke liye: uniform circular motion [motion-part7.md](../../../class9/physics/motion/motion-part7.md), Newton ka pehla law [force-and-laws-of-motion-part3.md](../../../class9/physics/force-and-laws-of-motion/force-and-laws-of-motion-part3.md), friction [force-and-laws-of-motion-part4.md](../../../class9/physics/force-and-laws-of-motion/force-and-laws-of-motion-part4.md), F = ma [force-and-laws-of-motion-part6.md](../../../class9/physics/force-and-laws-of-motion/force-and-laws-of-motion-part6.md), aur gravity jo orbit mein ghumati hai [gravitation-and-space-missions-part4.md](../gravitation-and-space-missions/gravitation-and-space-missions-part4.md).
> **Topics covered in this file:**
> 5. Circular Motion Aur Centripetal Force

---

# Topic 5: Circular Motion Aur Centripetal Force

Topic 4 mein humne dekha ki ek cheez kab tikti hai aur kab girti hai: sab kuch CG, base aur moments ka khel tha, aur cheez **ek jagah** tiki thi. Ab ek alag sawal: jab cheez **chal rahi ho aur circle mein ghoom rahi ho**, tab use kaun thaame rakhta hai? Class 9 ke Motion chapter mein humne dekha tha ki circle par ghoomti cheez ki velocity har pal badalti hai, aur uski acceleration **kendra (centre) ki taraf** hoti hai. Tab kaha gaya tha ki ise nikaalna "aage ki class mein aayega." Aaj wo wada poora hoga: ye acceleration kitni hai, kaun sa force use paida karta hai, aur wo ruk jaaye to kya hota hai.

---

## School ground ki tether-ball

School ke maidan mein ek lamba pole gada tha, aur uske upar se ek rassi latak rahi thi jiske sire par ek gendh bandhi thi. Mr. Kirtane ki bhanji Janaki unke saath wahan aayi thi (khule maidan mein, adult ke saath). Do bachche gendh ko ghumane mein lage the. Gendh pole ke chaaro taraf zor se ghoom rahi thi aur rassi **kasi hui, tani hui** thi.

"Mama, rassi itni tani hui kyun hai?" Janaki ne poochha. "Gendh to apne aap udna chahti hai. Aur ek bachche ne rassi chhodi to gendh pole ki taraf nahi aayi, seedha **bahar** nikal gayi!"

Mr. Kirtane hanse. "Dono sawaal ek hi jagah milte hain, Janaki. Rassi gendh ko **andar ki taraf kheench** rahi hai, isi liye tani hui hai. Wo kheench band hui, to gendh us waqt jis taraf ja rahi thi, usi taraf seedhi nikal gayi. Aur ye bhi dekho: gendh ki raftaar to wahi hai, phir bhi uski **acceleration** hai. Chalo, ye sab naap-tol kar dekhte hain."

(Asli tether-ball mein rassi thodi si neeche ki taraf dhalti hai. Hum is topic mein sab kuch **chikni, samtal mez** par socheinge, jahan rassi bilkul seedhi aur kheench ka poora hissa kendra ki taraf hai. Ghoomte hue dhalti rassi ka poora hisaab aage ki class mein aayega.)

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Centripetal force (F_c)** | Circle mein ghoomti cheez par **kendra ki taraf** lagne wala **net** force | Gendh par rassi ka kheench |
| **Centripetal acceleration (a)** | Circle par ghoomti cheez ki acceleration, hamesha kendra ki taraf: a = v² ÷ r | Chikni mez par ghoomti gendh |
| **Angular speed (ω)** | Ek second mein kitna kona (radian mein) ghoom gaya: ω = 2π ÷ T = 2πf, unit rad/s | 2π rad ek poora chakkar (360°) |
| **Radian (rad)** | Kone ka ek naap: poora chakkar 2π radian ke barabar | Aadha chakkar = π rad |
| **Tension** | Rassi ya dhaage ka kheenchne wala force | Gendh ko ghumati rassi |
| **Tangent** | Circle ko ek point par sirf chhookar jaane wali seedhi line (Class 9) | Dhaaga tootne par gendh isi line par jaati hai |
| **Centrifugal force** | Ghoomte frame ke andar baithe ko lagne wala **dikhawati (apparent)** bahar ka dhakka | Mudti bus mein bahar ki taraf khisakna |
| **Banking** | Mod par sadak ko andar ki taraf jhukaana | Highway ke mod |
| **Centrifuge** | Tez ghoomkar cheezon ko unke mass ke hisaab se alag karne wali machine | Cream separator, lab ki centrifuge |

---

## Part A: Acceleration kendra ki taraf kyun, aur kitni?

Class 9 mein hum jaan chuke hain: uniform circular motion mein **speed** same rehti hai, par **velocity** ki disha har pal badalti hai (wo tangent ke saath hai). Velocity badalne ka matlab hai **acceleration**. Ab dekhte hain ki wo kitni hai.

Gendh ko circle par do paas-paas points A aur B par socho. Beech mein bahut kam time Δt guzra. A par velocity v₁, B par v₂. Dono ki **lambai (speed) barabar v** hai, par dishaen alag hain. Radius A se B tak Δθ kona ghoom gaya.

```
                                    ↖ v2
                                   B
                              .'
                        .'                 ↑ v1
              .'
   O───────────────────────────────────────A
   (centre)         radius r            kona Δθ (A se B tak)
```

> **Figure 5.1** – Circle par do points A aur B. Dono jagah velocity apne tangent ke saath hai, aur dishaen alag hain. Jab A se B tak ka kona Δθ bahut chhota ho, to B ki velocity A ki velocity se thodi si ghoom jaati hai.

Ab v₁ aur v₂ ko ek hi point se kheench kar dono ke sire jodo. Is jodne wali chhoti line ko **Δv** (velocity ka badlaav) kehte hain.

```
                  Δv
                ↖<───↑
                 \   │
                  \  │  v1
                   \ │
                    \│
                     Q  (dono ke sire ek hi point Q par)
        v2 (v1 se Δθ ghoomi hui)
```

> **Figure 5.2** – Do barabar lambai ki velocities v₁ aur v₂ ek point se. Dono ke sire jodne wali chhoti line Δv hai. Kona Δθ chhota ho, to Δv lagbhag ek chhote chaap jaisa hai, aur uski lambai v × Δθ ke lagbhag barabar hai. Disha: A aur B ke beech se kendra O ki taraf.

Is chhote kone ka kaam seedha hai. Do barabar bhujaon (lambai v) ke beech ka kona Δθ ho, to unke sire ke beech ki doori lagbhag **v × Δθ** hoti hai (chhote kone ke liye). Yani **Δv ≈ v × Δθ**.

Ab Δθ kitna hai? Gendh Δt time mein v × Δt doori chalti hai, aur circle ke radius r par ye chaap r × Δθ ke barabar hota hai. To **Δθ = v Δt ÷ r**. Dono ko jodo:

> Δv ≈ v × (v Δt ÷ r)
> a = Δv ÷ Δt = **v² ÷ r**

Aur Δv ki disha A aur B ke beech se **kendra ki taraf** nikli (Figure 5.2 dekho). Isi liye acceleration kendra ki taraf hai.

Is lesson mein humne ye **chhote-kone wali similar-triangle reasoning** use ki hai (calculus nahi). Result ka ek aasaan check bhi hai: speed **double** karo to gendh ek hi circle ko aadhe time mein poora karegi, yaani velocity ki disha **doguni tezi se** badlegi; aur har chhote kone par Δv = v Δθ bhi double hoga (kyunki v double hai). Dono double: a, v² ke saath badhti hai, double speed par **chaar guna** a. Wahi v² ÷ r deta hai.

ω ke roop mein: v = rω (Class 9 ke v = 2πr ÷ T ka hi roop, kyunki ω = 2π ÷ T), to

> a = v² ÷ r = (rω)² ÷ r = **ω² r**

Ek honest baat: radian **koi alag cheez nahi**, bas kone ka naap hai, isliye rad/s ko hum 1/s ki tarah hi calculation mein chalate hain.

### Example 1. Tether-ball ki acceleration aur kheench

Ek gendh (mass 0.36 kg) chikni mez par rassi se bandhi 1.2 m radius ke circle mein 4.2 m/s ki speed se ghoom rahi hai. Rassi mein tension aur gendh ki acceleration batao.

**Given:** m = 0.36 kg, r = 1.2 m, v = 4.2 m/s.
**Find:** a aur tension F_c.
**Formula:** a = v² ÷ r, F_c = m a.
**Substitution:** a = (4.2 m/s)² ÷ 1.2 m = 17.64 ÷ 1.2 = **14.7 m/s²**. F_c = 0.36 kg × 14.7 m/s² = **5.292 N**.
**Answer:** a = 14.7 m/s² (kendra ki taraf), tension = 5.292 N (lagbhag 5.3 N).
**Jaanch:** ω = v ÷ r = 4.2 ÷ 1.2 = 3.5 rad/s, to ω² r = 12.25 × 1.2 = 14.7 m/s² ✅. Weight = 0.36 × 9.8 = 3.528 N, to tension weight ka 5.292 ÷ 3.528 = **1.5 guna** hai: gendh circle mein itni acceleration le rahi hai jo g ki 1.5 guna hai ✅.

---

## Part B: F_c = mv² ÷ r, aur wo kaun sa force hai?

Newton ka doosra law (Class 9): F = ma. Acceleration a = v² ÷ r kendra ki taraf hai, to use banane ke liye kendra ki taraf **net force** chahiye:

> **F_c = m v² ÷ r = m ω² r**

Ek bahut zaroori baat: **centripetal force koi nayi qism ka force nahi hai**, jo gendh par "extra" jud jaata ho. Wo kisi **asli force** ka naam hai (rassi ka tension, friction, gravity, deewar ka dhakka), jo kendra ki taraf kaam kar raha hai. Free-body diagram mein hum rassi ka tension hi dikhate hain, F_c alag se nahi.

| Ghoomti cheez | Kendra ki taraf force kaun deta hai |
|---|---|
| Rassi se bandhi gendh | Rassi ka tension |
| Mod par ghoomti gaadi | Tyres aur sadak ke beech ka friction |
| Earth ke chaaro taraf satellite | Earth ki gravity (Chapter 1, Topic 4) |
| Spin dryer ke drum mein kapde | Drum ki deewar ka andar ki taraf dhakka (normal force) |

Satellite wali baat wahi hai jo Chapter 1 mein m v² ÷ r = G M m ÷ r² likhkar nikaali thi: wahan gravity ne ye role nibhaya. Aaj hum is vichaar ko **har ghoomti cheez** par laga rahe hain.

```
                              ↑ v (tangent)
                              │
   O ◄─────────────────────── ●  gendh
   (centre)
          F_c = tension (gendh se kendra O ki taraf)
```

> **Figure 5.3** – Upar se dekha chikni mez: kendra O, rassi aur gendh. Tension F_c gendh se kendra O ki taraf hai. Velocity v rassi se 90° par, tangent ke saath. F_c aur v hamesha ek doosre se sahi kone par hote hain, isi liye F_c speed nahi badalta, sirf disha badalta hai.

### Example 2. ω se tension

Ek 0.28 kg ka patthar 0.65 m ki rassi se chikni mez par ghoom raha hai aur ek chakkar 1.256 s mein poora karta hai. Tension? (π = 3.14)

**Given:** m = 0.28 kg, r = 0.65 m, T = 1.256 s.
**Find:** F_c.
**Formula:** ω = 2π ÷ T, F_c = m ω² r.
**Substitution:** ω = 2 × 3.14 ÷ 1.256 = 6.28 ÷ 1.256 = 5 rad/s. F_c = 0.28 × 5² × 0.65 = 0.28 × 25 × 0.65 = **4.55 N**.
**Answer:** F_c = 4.55 N.
**Jaanch:** v = rω = 0.65 × 5 = 3.25 m/s, to m v² ÷ r = 0.28 × 10.5625 ÷ 0.65 = 2.9575 ÷ 0.65 = 4.55 N ✅. Dono formula ka jawab ek hi hai.

---

## Part C: Force ruk jaaye to? Cheez tangent par bhaagti hai

Newton ka pehla law (Class 9): kisi cheez par net force zero ho, to wo seedhi line mein, same speed se chalti rahegi. Gendh ko circle mein rakhne wala kheench ruk jaaye, to **koi net force nahi**, aur gendh us waqt ki velocity par seedhi nikal jaati hai. Wo velocity **tangent** ke saath thi, to gendh **tangent** par jaati hai, radius ki line par bahar nahi (jaisa Class 9 mein bhi dekha tha).

```
                         ●  gendh (tootne ke baad)
                         ↑
                         │  seedhi tangent par
                         │
                         │
   O─────────────────────P - - - ->
          radius OP        (galat: radius par bahar nahi jaati)
```

> **Figure 5.4** – Rassi point P par tooti. Gendh radius OP ke 90° par, seedhi tangent ke saath nikalti hai. Wo OP ki seedh mein (bahar) nahi jaati, aur wapas circle mein bhi nahi mudti.

### Example 3. Rassi kab tootegi, aur tootne ke baad gendh kahan?

Ek 0.35 kg ki gendh 1.6 m ki rassi se chikni mez par ghoom rahi hai. Rassi zyaada se zyaada 31.5 N ka tension sah sakti hai. (a) Tootne se pehle gendh ki sabse badi speed? (b) Rassi tooti, to 0.5 s baad gendh tootne wale point se kitni door hogi, aur kendra se kitni door?

**Given:** m = 0.35 kg, r = 1.6 m, F_max = 31.5 N, t = 0.5 s.
**Find:** (a) v_max, (b) doori.
**Formula:** F_c = m v² ÷ r, to v = √(F_c r ÷ m); tootne ke baad seedhi gati: doori = v t.
**Substitution:** (a) v² = 31.5 × 1.6 ÷ 0.35 = 50.4 ÷ 0.35 = 144, to **v_max = 12 m/s**. (b) Tangent par doori = 12 × 0.5 = **6.0 m**. Ye doori radius ke 90° par hai, to kendra se doori = √(1.6² + 6.0²) = √(2.56 + 36) = √38.56 = **6.21 m** (lagbhag).
**Answer:** (a) 12 m/s; (b) 6.0 m tootne wale point se, kendra se lagbhag 6.21 m.
**Jaanch:** 0.35 × 12² ÷ 1.6 = 0.35 × 144 ÷ 1.6 = 31.5 N ✅. Agar gendh radius par seedhi bahar jaati, to kendra se doori 1.6 + 6.0 = 7.6 m hoti. Asli doori 6.21 m aayi, jo alag hai: **tangent hi sahi hai** ✅.

### Activity 1: Chhoti gendh, dhaaga aur khula maidan (sirf adult ke saath, khule maidan mein)

Ek **bahut halki, soft** chhoti gendh (jaise sponge ball) ko 0.5 m ke dhaage se bandho. Adult ke saath khule maidan mein, **aas-paas kisi ko khada kiye bina**, gendh ko apne kandhe ki oonchai par, sar se door, dheere se ghumao. Dhyan do: (1) tez ghumane par dhaaga zyaada kasa mehsoos hoga; (2) gendh chhoti aur halki rakho, kabhi koi bhaari cheez, patthar ya paani se bhari cheez mat ghumao; (3) dhaaga chhodna ho to khali jagah ki taraf, kisi insaan ki taraf kabhi nahi. **Bucket mein paani bharkar ghumana sirf padhne ke liye hai, student ye kabhi nahi karte.**

---

## Part D: v, m aur r ka asar (ratio method)

F_c = m v² ÷ r se teen baatein seedhi niklti hain:

- **m** double karo (v, r same) to F_c **double**.
- **v** double karo (m, r same) to F_c **chaar guna** (v² ki wajah se).
- **r** double karo (m, v same) to F_c **aadha**. Bada circle, kam mudna, kam force.

Do states ka ratio lene se hisaab chhota ho jaata hai:

> F₂ ÷ F₁ = (m₂ ÷ m₁) × (v₂ ÷ v₁)² × (r₁ ÷ r₂)

### Example 4. Ratio se naya tension

Ek gendh ko 8.4 N ke tension se ghumaya ja raha hai. Ab speed 1.5 guna kar di aur rassi chhoti karke radius **aadha** kar diya (mass same). Naya tension?

**Given:** F₁ = 8.4 N, v₂ = 1.5 v₁, r₂ = ½ r₁, m same.
**Find:** F₂.
**Formula:** F₂ = F₁ × (v₂ ÷ v₁)² × (r₁ ÷ r₂).
**Substitution:** F₂ = 8.4 × 1.5² × 2 = 8.4 × 2.25 × 2 = **37.8 N**.
**Answer:** 37.8 N, yaani 4.5 guna.
**Jaanch:** ratio = 2.25 × 2 = 4.5, aur 8.4 × 4.5 = 37.8 ✅. Ek aur check: agar sirf mass teen guna, speed double aur radius teen guna ho, to ratio 3 × 4 ÷ 3 = 4 guna, yani bahut badlaav ho sakta hai, isliye rassi ki seema dhyan se dekho.

---

## Part E: Mod par gaadi (friction hi centripetal force hai)

Sidhi sadak par chalti gaadi ko kendra ki taraf force nahi chahiye. Mod par chahiye. Wo force deta hai **tyres aur sadak ke beech ka friction**, jo gaadi ko andar ki taraf dhakelta hai.

```
                           ↑ v (aage)
   O ◄──────────────────[ gaadi ]
     F_c = friction (tyres par, andar ki taraf)
   (mod ka kendra)
```

> **Figure 5.5** – Upar se dekhi gaadi mod par. Friction ka andar ki taraf force F_c kendra O ki taraf hai, aur velocity v aage ki taraf. Gaadi ko mod mein rakhne wala yahi friction hai.

Friction ki ek **seema** hoti hai. Jab m v² ÷ r seema se zyaada ho jaata hai, to friction kaafi nahi hota aur gaadi **seedhi tangent par phisal jaati hai** (skid).

> v_max = √(f_max × r ÷ m)

### Example 5. Auto-rickshaw ka mod

Ek auto-rickshaw (savaari ke saath total 420 kg) 35 m radius ke mod par hai. Sookhi sadak par tyres adhiktam 2352 N ka friction de sakte hain. (a) Surakshit adhiktam speed? (b) Barish mein friction aadha, 1176 N, reh gaya: tab?

**Given:** m = 420 kg, r = 35 m, f₁ = 2352 N, f₂ = 1176 N.
**Find:** v_max dono cases mein.
**Formula:** v_max = √(f r ÷ m).
**Substitution:** (a) v² = 2352 × 35 ÷ 420 = 82320 ÷ 420 = 196, to **v = 14 m/s** (= 14 × 3.6 = 50.4 km/h). (b) v² = 1176 × 35 ÷ 420 = 41160 ÷ 420 = 98, to **v = 9.90 m/s** (= 35.6 km/h).
**Answer:** (a) 14 m/s ya lagbhag 50 km/h; (b) lagbhag 9.9 m/s ya lagbhag 36 km/h.
**Jaanch:** (a) 420 × 14² ÷ 35 = 420 × 196 ÷ 35 = 2352 N ✅. Agar sookhi sadak par 28 m/s (double) ho, to chahiye 420 × 784 ÷ 35 = 9408 N, jo 2352 N ka 4 guna hai: friction kaafi nahi, gaadi phisalegi ✅. Friction aadha hone par speed aadhi nahi hui, sirf √2 guna kam hui (14 ÷ 9.9 = 1.41) ✅.

### Banking (sirf qualitatively)

Highway ke mod par sadak ko **andar ki taraf thoda jhukaya** jaata hai (banking). Tab sadak ka dhakka (normal force), jo sadak se seedha 90° par hota hai, thoda **andar** ki taraf bhi jhuk jaata hai, aur centripetal force ka ek hissa wahi deta hai. Friction par bojh kam padta hai. Iska angle nikaalne wala formula aage ki class mein aayega, yahan sirf idea.

```
                        bahari kinara (oonchi)
               N      /
                 ↖  /
                  ■ gaadi
                /
              /
            /
<── kendra ki taraf (andar)
```

> **Figure 5.6** – Mod ka side-view: kendra baayein taraf, bahari kinara oonchi. Gaadi par sadak ka dhakka N sadak ke 90° par upar aur thoda andar (baayein) ki taraf hai. Isi N ka andar wala hissa centripetal force mein madad karta hai.

### Cyclist ka andar ki taraf jhukna

Mod par cyclist **andar ki taraf jhukta** hai. Kyun? Zameen cyclist ko jo dhakka deti hai, wo seedha upar nahi, thoda **tirchha** (upar aur andar) hona chahiye, taaki uska andar ka hissa F_c bane. Aur Topic 4 se: us dhakke ki line cyclist ke CG se guzarni chahiye, warna wo ulat jaayega. Isliye cyclist jis taraf mudta hai usi taraf jhukta hai. Kitna jhukna hai, uska formula aage ki class mein hai.

---

## Part F: Centrifugal force: ek honest baat

Mudti hui bus mein aap bahar ki taraf khisakte hain: kai log kehte hain "centrifugal force bahar dhakel raha hai." Ground par khade kisi vyakti ke nazariye se dekho to **bahar ki taraf koi asli force nahi hai**. Bus mud rahi hai, par aapka sharir **Newton ke pehle law** ke mutabik seedhi line mein jaana chahta hai. Seat aur bus ki deewar aapko andar ki taraf dhakelti hain tab aap mudte ho. Jab seat chikni ho, to aap seedhi line mein chalte rahte ho aur bus aapke neeche se mud jaati hai, to bus ke andar baithe ko lagta hai ki aap **bahar ki taraf phisal gaye**.

```
Upar se dekho (bus baayein mud rahi hai)

                     ↑
                     │  bus ka raasta (mod)
                    /
                  /
   ──────────────'  - - - - ->  aapka raasta (seedha, chikni seat par)
```

> **Figure 5.7** – Bus baayein mud rahi hai. Chikni seat par baitha vyakti seedhi line mein chalta rahta hai, isliye bus ke andar se wo dayein (bahar) ki taraf phisalta dikhta hai. Ground se dekhne par koi bahar ka force nahi, sirf inertia hai.

Ghoomte hue frame ke andar baithe observer ke liye ye bahar ka dhakka **"centrifugal force"** kehlata hai, aur wo ek **pseudo (dikhawati) force** hai: wo asli force nahi hai jo kisi cheez ne diya ho, sirf frame ke ghoomne se mehsoos hota hai. Is topic mein hum ground se dekhte hain, isliye hum sirf **centripetal force** (asli, andar ki taraf) ginte hain.

---

## Part G: Kaam mein: spin dryer, cream separator, centrifuge

**Spin dryer:** drum mein chhote chhote holes hote hain. Drum tez ghoomta hai, kapde drum ki deewar se andar ki taraf dhakel diye jaate hain (wahi normal force centripetal force hai). Paani ki boondein holes se **tangent par** nikal jaati hain (Class 9 mein bhi dekha tha), kyunki holes unhe andar ki taraf dhakelne wala force nahi dete.

**Cream separator aur centrifuge:** tez ghumane par mixture ke bhaari hisse bahar ki taraf zyaada jaate hain aur halke hisse (jaise cream) kendra ke paas ikattha hote hain. Ye machine "g se kai guna" acceleration paida karti hain.

### Example 6. Lab ki centrifuge

Ek lab ki centrifuge mein test tube ka sira kendra se 0.12 m par hai, aur machine 3000 rpm par ghoomti hai. Acceleration ko g ke guna mein batao, aur 5 gram (0.005 kg) ke ek kan par lagne wala force batao. (π = 3.14, g = 9.8 m/s²)

**Given:** r = 0.12 m, 3000 rpm, m = 0.005 kg.
**Find:** a, a ÷ g, F.
**Formula:** f = rpm ÷ 60, ω = 2πf, a = ω² r, F = m a.
**Substitution:** f = 3000 ÷ 60 = 50 Hz. ω = 2 × 3.14 × 50 = 314 rad/s. a = 314² × 0.12 = 98596 × 0.12 = **11831.5 m/s²**. a ÷ g = 11831.5 ÷ 9.8 = **lagbhag 1207**. F = 0.005 × 11831.52 = **59.16 N**.
**Answer:** a lagbhag 1.18 × 10⁴ m/s² (g ka lagbhag 1207 guna); F = 59.16 N.
**Jaanch:** kan ka weight sirf 0.005 × 9.8 = 0.049 N, to F weight ka 59.16 ÷ 0.049 = 1207 guna ✅, wahi ratio. Speed v = ω r = 314 × 0.12 = 37.7 m/s, to v² ÷ r = 1421 ÷ 0.12 lagbhag 11831 m/s² ✅.

(Centrifuge, hammer ya dryer ke saath koi student kabhi experiment nahi karta. Ye sab **sirf dekhne ya padhne ke liye** hai, teacher demo ya video.)

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Centripetal force ek alag force hai jo baaki forces ke upar jud jaata hai"**

Demonstration: Example 1 ki gendh chikni mez par hai. Us par teen force hain: weight (neeche), mez ka normal force (upar) aur rassi ka tension (kendra ki taraf). Weight aur normal force ek doosre ko kaat dete hain, bachta hai sirf tension. **Wahi net inward force hai, 5.292 N**, aur wahi F_c hai. Agar koi 5.292 N ka "F_c" **tension ke upar** aur jod de, to total 10.58 N ho jaata, aur gendh ki acceleration 29.4 m/s² nikalti, jo galat hai (asli 14.7 m/s² thi).

**Sahi:** F_c asli forces ka **net inward** hissa hai, koi extra force nahi.

**Galti 2: "Rassi toote to gendh radius par seedhi bahar bhaagti hai"**

Demonstration: Example 3 dobara dekho. 0.5 s mein radius par jaane se gendh kendra se 1.6 + 6.0 = 7.6 m door hoti. Par asli tangent ki disha mein wo kendra se 6.21 m door aati hai, aur tootne wale point par radius se 90° par ghoomti hai. Class 9 ke patthar wale example mein bhi wahi dekha tha: chhootne par wo tangent par jaata hai.

**Sahi:** gendh us waqt ki velocity ki disha mein, yaani **tangent** par seedhi jaati hai.

---

## Quick Recap

- Circle par ghoomti cheez ki acceleration **kendra ki taraf** hai: **a = v² ÷ r = ω² r**. (Chhote kone wali similar-triangle reasoning: Δv ≈ v Δθ, Δθ = vΔt ÷ r.)
- Isse kendra ki taraf **net force** F_c = m v² ÷ r = m ω² r chahiye; ω = 2π ÷ T = 2πf.
- F_c **asli force** hai (tension, friction, gravity, normal force), koi extra force nahi.
- F_c aur v hamesha ek doosre se 90° par hote hain: F_c speed nahi badalta, sirf disha.
- Force ruk jaaye to cheez **tangent** par seedhi jaati hai (Newton ka pehla law).
- v double to F_c chaar guna; r double to F_c aadha; m double to F_c double.
- Mod par gaadi mein friction F_c deta hai; v_max = √(f r ÷ m). Banking aur cyclist ka jhukna sirf idea.
- Centrifugal force ek **dikhawati (pseudo) force** hai, ghoomte frame ke andar mehsoos hone wala.
- Spin dryer, cream separator aur centrifuge isi par chalte hain.

---

## Practice Questions

1. A ball of mass 0.25 kg is whirled on a smooth table with a 0.8 m string at a speed of 4.4 m/s. Find its centripetal acceleration and the tension in the string.

2. A ball of mass 0.18 kg is whirled on a 0.8 m string at 1.5 revolutions per second on a smooth table. Find the angular speed ω, the speed v, and the tension. Take π = 3.14.

3. A car of mass 900 kg goes round a flat curve of radius 40 m. The maximum friction the road can give is 5760 N. (a) Find the maximum safe speed in m/s and km/h. (b) What friction would be needed at 20 m/s, and what happens?

4. A cyclist and cycle together have a mass of 78 kg. They turn on a bend of radius 18 m at 7.5 m/s. Find the inward force needed and compare it with the weight.

5. A bucket of mass 2.4 kg stands on a rotating platform 1.2 m from the axis, and the platform turns once in 3.14 s. The maximum friction on the bucket is 9.6 N. Will the bucket stay in place? Take π = 3.14.

6. A washing-machine drum of radius 0.25 m spins at 1200 rpm. Find the acceleration of a point on its wall, as a multiple of g, and the force on a wet cloth of mass 0.35 kg.

7. A hammer-throw ball of mass 4 kg moves in a circle of radius 1.6 m at 24 m/s just before release. Find the tension in the wire and compare it with the weight of the ball.

8. A car goes round a curve. Its speed becomes 1.5 times and the radius of the curve is doubled. By what factor does the required centripetal force change? (Mass same.)

9. A cream separator has a tube end 0.09 m from the axis and spins at 4500 rpm. Find the centripetal acceleration and express it as a multiple of g. (π = 3.14)

10. A ball of mass 0.40 kg is whirled on a 0.8 m string on a smooth table. The string breaks at a tension of 40.5 N. Find the maximum speed. In which direction does the ball move after breaking?

11. State True or False with a reason:
    (a) Centripetal force is an extra force in addition to tension and friction.
    (b) In uniform circular motion, the centripetal force does not change the speed of the body.
    (c) A stone moves radially outward when the string breaks.
    (d) Centrifugal force is a real force on the body seen from the ground.
    (e) Doubling the speed makes the centripetal force four times.

12. A passenger standing in a turning bus feels pushed outward. Explain this using Newton's first law as seen from the ground.

### Answers

1. **Given:** m = 0.25 kg, r = 0.8 m, v = 4.4 m/s. a = v² ÷ r = 19.36 ÷ 0.8 = **24.2 m/s²**. Tension F = m a = 0.25 × 24.2 = **6.05 N**.
   Jaanch: m v² ÷ r = 0.25 × 19.36 ÷ 0.8 = 6.05 N ✅.

2. ω = 2πf = 2 × 3.14 × 1.5 = **9.42 rad/s**. v = r ω = 0.8 × 9.42 = **7.536 m/s**. F = m ω² r = 0.18 × 88.7364 × 0.8 = **12.78 N** (lagbhag).
   Jaanch: m v² ÷ r = 0.18 × 56.79 ÷ 0.8 = 12.78 N ✅.

3. (a) v = √(f r ÷ m) = √(5760 × 40 ÷ 900) = √256 = **16 m/s** = 16 × 3.6 = **57.6 km/h**. (b) F needed = 900 × 20² ÷ 40 = 900 × 400 ÷ 40 = **9000 N**, jo 5760 N se zyaada hai, to gaadi **phisal jaayegi** (skid).
   Jaanch: 900 × 16² ÷ 40 = 5760 N ✅.

4. F = m v² ÷ r = 78 × 7.5² ÷ 18 = 78 × 56.25 ÷ 18 = **243.75 N**. Weight = 78 × 9.8 = 764.4 N. F weight ka 243.75 ÷ 764.4 = **0.32 guna** hai.
   Jaanch: a = 7.5² ÷ 18 = 3.125 m/s², to 78 × 3.125 = 243.75 N ✅.

5. ω = 2π ÷ T = 6.28 ÷ 3.14 = 2 rad/s. F needed = m ω² r = 2.4 × 4 × 1.2 = **11.52 N**. Friction sirf 9.6 N hai, 11.52 > 9.6, to bucket **nahi tikega**, wo tangent par phisal jaayega. Adhiktam ω = √(9.6 ÷ (2.4 × 1.2)) = √3.333 = 1.826 rad/s.
   Jaanch: 2.4 × 1.826² × 1.2 = 9.6 N ✅.

6. f = 1200 ÷ 60 = 20 Hz, ω = 2 × 3.14 × 20 = 125.6 rad/s. a = ω² r = 15775.36 × 0.25 = **3943.8 m/s²**, a ÷ g = 3943.84 ÷ 9.8 = **lagbhag 402 g**. Force = 0.35 × 3943.84 = **1380.3 N**.
   Jaanch: v = rω = 31.4 m/s, v² ÷ r = 985.96 ÷ 0.25 = 3943.84 ✅.

7. F = m v² ÷ r = 4 × 576 ÷ 1.6 = **1440 N**. Weight = 4 × 9.8 = 39.2 N, to F weight ka 1440 ÷ 39.2 = **lagbhag 36.7 guna**. Chhodte hi ball tangent par seedhi jaati hai.
   Jaanch: a = 576 ÷ 1.6 = 360 m/s², 4 × 360 = 1440 N ✅.

8. F₂ ÷ F₁ = (1.5)² × (1 ÷ 2) = 2.25 ÷ 2 = **1.125**. Force **1.125 guna** (12.5 percent zyaada) ho jaata hai.
   Jaanch: F ∝ v² ÷ r: 2.25 ÷ 2 = 1.125 ✅.

9. f = 4500 ÷ 60 = 75 Hz, ω = 2 × 3.14 × 75 = 471 rad/s. a = ω² r = 221841 × 0.09 = **19965.7 m/s²**, a ÷ g = **lagbhag 2037 g**.
   Jaanch: v = rω = 42.39 m/s, v² ÷ r = 1796.9 ÷ 0.09 lagbhag 19965 m/s² ✅.

10. v = √(F r ÷ m) = √(40.5 × 0.8 ÷ 0.40) = √81 = **9 m/s**. Tootne ke baad ball **tangent** ki disha mein seedhi jaati hai (radius par bahar nahi).
    Jaanch: 0.40 × 81 ÷ 0.8 = 40.5 N ✅.

11. (a) **False** ❌: F_c asli forces ka net inward hissa hai. (b) **True** ✅: F_c velocity ke 90° par hai, speed nahi badalta. (c) **False** ❌: tangent par jaata hai. (d) **False** ❌: ground se dekhne par bahar ka koi force nahi, wo pseudo force hai. (e) **True** ✅: F ∝ v², to 2² = 4 guna.

12. Ground se dekho to bus mud rahi hai, par passenger ka sharir inertia ki wajah se seedhi line mein jaana chahta hai (Newton ka pehla law). Bus ki deewar ya seat use andar ki taraf dhakelti hai tab wo mud paata hai. Bus ke andar baithe ko lagta hai ki bahar ki taraf dhakka lag raha hai: wahi centrifugal "force" hai, jo asli force nahi, bas ghoomte frame ka mehsoos hona hai.

---

Agli baar tether-ball ya mudti bus mein baitho, to Janaki ki tarah socho: kendra ki taraf **kaun sa asli force** kheench raha hai? Wahi F_c hai, aur wo ruk jaaye to cheez tangent par bhaagegi.

**Aage kya?** Ab hamare paas poore chapter ke paanch aujaar hain: couple, equilibrium, centre of gravity, stability aur centripetal force. Topic 6 mein inhe **mila kar** mixed problems hal karenge (jaise ek mod par ulatne ya phisalne ka sawal), aur chapter ka saar banayenge.
