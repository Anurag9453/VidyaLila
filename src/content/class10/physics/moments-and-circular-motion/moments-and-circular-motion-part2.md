# Chapter: Moments, Centre of Gravity and Circular Motion (Part 2)

> **Class:** 10 | **Subject:** Physics
> **Ye file [moments-and-circular-motion.md](moments-and-circular-motion.md) se aage chalti hai** (wahan couple: do barabar, ulte, parallel force jo body ko sirf ghumate hain, aur couple ka moment = F × d). Chapter ki shuruaat: [moments-and-circular-motion.md](moments-and-circular-motion.md). Recall ke liye: moment aur principle of moments [machines-part3.md](../../../class9/physics/machines/machines-part3.md), balanced forces [force-and-laws-of-motion-part2.md](../../../class9/physics/force-and-laws-of-motion/force-and-laws-of-motion-part2.md), weight [gravitation-part5.md](../../../class9/physics/gravitation/gravitation-part5.md).
> **Topics covered in this file:**
> 2. Equilibrium: Jab Kuch Bhi Na Ghoome Na Khisake

---

# Topic 2: Equilibrium: Jab Kuch Bhi Na Ghoome Na Khisake

Topic 1 mein humne couple dekha: do barabar aur ulte force, jo ek line mein nahi hote, body ko **sirf ghumate** hain, khisakate nahi. Isse ek sawal nikla: ek body ko **na khisakna** aur **na ghoomna** ho, to kya chahiye? Class 9 mein humne do alag cheezein seekhi thi: balanced forces (net force zero) aur principle of moments (clockwise moments = anticlockwise moments). Aaj dono ko **ek saath** jodenge. Isi jod ka naam hai **equilibrium**, aur isse hum nikaalenge ki beam, plank aur pole ko sambhalne wale supports par **kitna zor** padta hai.

**Is topic mein g = 9.8 m/s² liya gaya hai.** Class 9 mein hisaab aasaan rakhne ke liye 10 m/s² liya tha; ab 9.8 hi chalega, to 1 kg ka weight 9.8 N hai. Jahan "halka rod" ya "halka pole" likha ho, wahan uska apna weight ignore hai; jahan "uniform" likha ho, wahan weight **beech mein** (middle point par) maana jaata hai.

---

## Do mazdoor, ek bhaari bori

Mandi ke baahar Mr. Naigaonkar apne bhatije Nimish ke saath ek tempo ka intezaar kar rahe the. Saamne do mazdoor ek lambe baans ke dono sire apne kandhon par rakhe chal rahe the. Baans ke beech se zara ek taraf ek bhaari bori latki thi: ek mazdoor ke kaafi **paas**, doosre se kaafi **door**.

Nimish ne dekha ki **paas wale mazdoor** ka chehra laal tha aur wo pasine se bhara tha. Door wala mazdoor maze se baat karta chal raha tha.

"Chacha, bori ka weight to dono ke beech baat jaana chahiye na? Phir ek ke upar zyaada zor kyun lag raha hai?" Nimish bola.

Mr. Naigaonkar muskuraaye. "Bahut accha dekha, Nimish. Weight baantta zaroor hai, par **barabar nahi**. Jo mazdoor bori ke paas hai, wo zyaada uthata hai. Aur ye hum **guess** nahi karenge: ye baans **na ghoom raha hai, na gir raha hai**, aur ye do baatein hi hume exact number de dengi. Aao, wo do baatein samjhte hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Equilibrium** | Wo haalat jisme body na khisake aur na ghoome | Baans par latki bori, jab mazdoor ruke hue hon |
| **Net force** | Saare forces ka milakar asar (upar ke force minus neeche ke force) | Baans par: upar ke do force aur neeche ka weight |
| **Net moment** | Kisi point ke around saare moments ka milakar asar (clockwise minus anticlockwise) | Baans par kisi bhi ek point ke around |
| **Reaction (support force)** | Support ka upar ki taraf dhakka, jo body ka weight sambhalta hai | Mazdoor ke kandhe ka dhakka |
| **Rigid body** | Aisi body jo force lagne par apni shape nahi badalti | Lakdi ka plank, steel ka rod |
| **Uniform** | Har jagah ek jaisi: iska weight beech mein maana jaata hai | Ek barabar motai ka plank |
| **Halka (light) rod** | Wo rod jiska apna weight ignore kar dete hain | "Rod ko halka maano" |
| **Pivot (jis point ke around moment lete hain)** | Wo point jise hum moment ginne ke liye chunte hain: ye asli hinge ho, zaroori nahi | Baans ka koi bhi ek point |

---

## Part A: Equilibrium ki do shartein

Class 9 mein dekha tha ki balanced forces ka matlab net force zero. Par ek rod ke liye sirf ye **kaafi nahi**. Dekho kyun.

**Pehla case: force balance, par moment nahi.** Ek rod par 10 N upar aur 10 N neeche, dono ulte, par alag lines mein.

```
   ↑ 10 N
   ══════════════════════════════
                                ↓ 10 N
```

> **Figure 2.1** – Rod ke bayein sire par 10 N upar aur dayein sire par 10 N neeche. Net force = 10 N − 10 N = 0, par rod **ghoomega**: ye wahi couple hai jo Topic 1 mein dekha tha.

**Doosra case: moment balance, par force nahi.** Ek halka rod, jiske dono sire par 10 N ka force **upar** lag raha hai, aur beech ka point O hai.

```
   ↑ 10 N                                  ↑ 10 N
   ═════════════════════════════════════════
                       ▲
                       O
   :<───── 0.5 m ─────>:<───── 0.5 m ─────>:
```

> **Figure 2.2** – Halke rod par dono sire par 10 N upar. O ke around bayein force ka moment clockwise hai (bayan sira upar jaata hai) aur dayein force ka anticlockwise: 10 N × 0.5 m = 5 N m dono, to net moment zero. Par net force = 10 N + 10 N = 20 N upar, to rod **bina ghoome upar uthta chala jayega**.

Dono cases mein body equilibrium mein **nahi** hai. Isliye ek rigid body par parallel forces (jaise weight aur supports ke forces, sab seedhe upar ya neeche) ke liye:

> **Shart 1 (khisakna nahi chahiye):** upar ke forces ka jod = neeche ke forces ka jod. Yaani net force = 0.
> **Shart 2 (ghoomna nahi chahiye):** kisi bhi point ke around clockwise moments ka jod = anticlockwise moments ka jod. Yaani net moment = 0.

Ek maze ki baat: Shart 2 **kisi bhi point ke around** sahi hoti hai: agar body equilibrium mein hai, to usse koi bhi point chunlo, moments ka hisaab zero hi aayega. Isi baat se hisaab aasaan banta hai, jaise aage dekhenge.

---

## Part B: Do mazdooron ka sawaal

Ab Nimish ke baans par wapas. Is baans ko **halka pole** maano (uska apna weight ignore). Pole 2.4 m lamba hai. Bori ka mass 60 kg hai, aur wo aage wale mazdoor A se 0.8 m par latki hai. Mazdoor B pole ke doosre sire par hai.

**Example 1 (porters):** A aur B dono kitna force (reaction) lagate hain?

- Bori ka weight W = 60 kg × 9.8 m/s² = **588 N** (neeche).
- Do unknown hain: R_A aur R_B. Hisaab aasaan karne ke liye pivot **B** par lo, kyunki B ka force B ke around koi moment nahi banata (doori zero).
- B ke around: R_A ka moment (clockwise: pivot ke bayein taraf upar ka dhakka) = R_A × 2.4 m. Bori ka moment (anticlockwise: pivot ke bayein taraf neeche ka weight) = 588 N × (2.4 m − 0.8 m) = 588 N × 1.6 m.
- Principle of moments: R_A × 2.4 m = 588 N × 1.6 m = 940.8 N m
- R_A = 940.8 N m ÷ 2.4 m = **392 N**
- Shart 1: R_A + R_B = 588 N, to R_B = 588 N − 392 N = **196 N**.

```
   ↑ R_A = 392 N                             ↑ R_B = 196 N
   ═══════════════════════════════════════════
                 ↓ 588 N (bori)
   mazdoor A                                 mazdoor B
   :<── 0.8 m ──>:<───────── 1.6 m ─────────>:
```

> **Figure 2.3** – Halke pole par bori A se 0.8 m aur B se 1.6 m par. A ke kandhe ka dhakka 392 N aur B ka 196 N: jo bori ke paas hai, wo zyaada uthata hai.

**Jaanch:** Ab pivot **A** lekar dekho: R_B × 2.4 m = 588 N × 0.8 m, to R_B = 470.4 N m ÷ 2.4 m = 196 N ✅ (pehle wala jawab). 392 N + 196 N = 588 N ✅. Ek aur pattern: R_A : R_B = 392 : 196 = 2 : 1, aur doori ka ratio 1.6 : 0.8 = 2 : 1. **Jo door hai, wo kam uthata hai**: weight doori ke **ulte ratio** mein baanta hai ✅.

Nimish ne seeti bajayi. "To Chacha, bori ko beech mein laga dein to?" Mr. Naigaonkar bole, "Tab dono ke kandhe par **588 ÷ 2 = 294 N**. Ye baat yaad rakhna: aadha-aadha sirf **beech** par hota hai."

---

## Part C: Beam, plank aur do supports

Pole halka tha. Asli plank ka apna weight bhi hota hai. **Uniform** plank ka weight uske **beech** mein ek point par maana jaata hai, aur ye bhi ek weight hai jiska moment ginna padta hai.

**Example 2 (nale par plank):** Ek uniform plank 4.0 m lamba aur 18 kg ka hai. Uske dono sire nale ke dono kinaaron par tike hain. Ek aadmi (62 kg) bayein kinare A se 1.5 m par khada hai. A aur B par reaction kitna hai?

- Plank ka weight = 18 × 9.8 = **176.4 N**, A se 2.0 m par (beech).
- Aadmi ka weight = 62 × 9.8 = **607.6 N**, A se 1.5 m par, to B se 4.0 − 1.5 = 2.5 m par.
- Pivot B lo (R_B hat jaata hai): R_A × 4.0 m = 176.4 N × 2.0 m + 607.6 N × 2.5 m = 352.8 + 1519 = 1871.8 N m
- R_A = 1871.8 N m ÷ 4.0 m = **467.95 N** (lagbhag 468 N)
- Total weight = 176.4 + 607.6 = 784 N, to R_B = 784 − 467.95 = **316.05 N**

```
   ↑ R_A = 467.95 N                        ↑ R_B = 316.05 N
   ═════════════════════════════════════════
                  ↓    ↓
          607.6 N      176.4 N
   A       (aadmi)     (plank)             B
   :<── 1.5 m ───>:
   :<───── 2.0 m ─────>:
   :<─────────────── 4.0 m ───────────────>:
```

> **Figure 2.4** – Plank ke dono sire A aur B par tike hain. Aadmi A se 1.5 m par (607.6 N) aur plank ka apna weight A se 2.0 m par (176.4 N). Aadmi A ke paas hai, to A par zyaada reaction.

**Jaanch:** Pivot A lekar: R_B × 4.0 m = 176.4 × 2.0 + 607.6 × 1.5 = 352.8 + 911.4 = 1264.2 N m, to R_B = 316.05 N ✅. 467.95 + 316.05 = 784 N ✅.

**Aadmi chalta hai to kya hota hai?** Wahi plank, wahi aadmi: bas wo A se x doori par khada hai. Upar wale tarike se R_A = (176.4 × 2.0 + 607.6 × (4.0 − x)) ÷ 4.0 hai:

| x (A se doori) | R_A | R_B |
|---|---|---|
| 0 m (A ke upar) | 695.8 N | 88.2 N |
| 1.0 m | 543.9 N | 240.1 N |
| 1.5 m | 467.95 N | 316.05 N |
| 2.0 m (beech mein) | 392.0 N | 392.0 N |
| 3.0 m | 240.1 N | 543.9 N |
| 4.0 m (B ke upar) | 88.2 N | 695.8 N |

Har row mein R_A + R_B = 784 N hai. Aadmi jaise-jaise B ki taraf jaata hai, B ka reaction badhta hai aur A ka ghatta hai. Dhyan do: **sirf beech mein** (x = 2.0 m) dono 392 N hain, aur wo 784 ÷ 2 hai.

**Example 3 (jab ek support chhod de):** Ek uniform plank 5.0 m lamba aur 22 kg ka hai. Wo do eenton par tika hai: A plank ke bayein sire se 1.0 m par aur B bayein sire se 3.5 m par (to dayein taraf 1.5 m ka hissa bahar latka hai). Ek 64 kg ka aadmi plank ke **dayein sire** par khada ho jaaye to kya hoga? Aadmi B se kitna door (bahar ki taraf) khada ho sakta hai, jab tak plank ulat na jaaye?

- Plank ka weight = 22 × 9.8 = **215.6 N**, bayein sire se 2.5 m par, to B se 1.0 m **andar** ki taraf.
- Aadmi ka weight = 64 × 9.8 = **627.2 N**, dayein sire par, to B se 1.5 m **bahar**.
- Pivot A lo: R_B × 2.5 m = 215.6 N × 1.5 m + 627.2 N × 4.0 m = 323.4 + 2508.8 = 2832.2 N m, to R_B = **1132.88 N**.
- Total weight = 215.6 + 627.2 = 842.8 N, to R_A = 842.8 − 1132.88 = **−290.08 N**.

R_A **negative** aaya. Iska matlab hai ki A ki eent plank ko **neeche kheenchna** padta, jo eent kar hi nahi sakti (eent sirf dhakel sakti hai). Asal mein plank A se **uth jaayega** aur B ke around ulat jaayega.

- Sahi sawal: kitni doori tak plank A par tikta hai? Limit par R_A = 0, to sirf B ka reaction bacha. B ke around moments: plank ka weight (andar ki taraf, B se 1.0 m) aur aadmi (bahar ki taraf, B se y m) barabar ho:
- 215.6 N × 1.0 m = 627.2 N × y, to y = 215.6 ÷ 627.2 = **0.344 m** (lagbhag)

```
             ↑ R_A = 0                ↑ R_B = 842.8 N
   ═══════════════════════════════════════════════════
             ▲                        ▲
                            ↓            ↓
                      215.6 N (plank)    627.2 N (aadmi)
             A                        B
             :<─────── 2.5 m ────────>:
                            :< 1.0 m >:
                                      B se 0.344 m bahar: aadmi
```

> **Figure 2.5** – Limit ki haalat: aadmi B se 0.344 m bahar hai, A par reaction zero hai aur plank tika hua hai sirf B par. Isse aage aadmi gaya to plank A se uthta hai.

**Jaanch:** B ke around: 215.6 × 1.0 = 215.6 N m aur 627.2 × 0.344 = 215.7 N m ✅ (rounding ke andar). Aur R_B = 842.8 N = total weight ✅.

Ek imaandaar baat: **negative reaction** ka matlab hota hai ki hamne "support dhakel raha hai" maana, jabki support asal mein kheench nahi sakta. Aise mein body us support se alag ho jaati hai, aur hisaab ko dobara B-sirf-support ke saath karna padta hai.

---

## Part D: Ek hi pivot: scale aur see-saw

Ab ek hi tikne ki jagah wale cases, jaise class 9 ka see-saw, par is baar **rod ka apna weight** bhi hai.

**Example 4 (metre scale knife edge par):** Ek uniform metre scale ka mass 120 g hai. Usse 35 cm wale nishan par knife edge par rakha gaya hai. Bayein taraf 10 cm wale nishan par kitna mass latkayein ki wo balance rahe? Knife edge par kitna reaction hoga?

- Scale ka weight = 0.12 kg × 9.8 = **1.176 N**, 50 cm par. Knife edge se doori = 50 − 35 = 15 cm = **0.15 m** (dayein, clockwise).
- Latka hua weight W 35 − 10 = 25 cm = **0.25 m** bayein (anticlockwise).
- W × 0.25 m = 1.176 N × 0.15 m = 0.1764 N m, to W = 0.1764 ÷ 0.25 = **0.7056 N**
- Mass = 0.7056 ÷ 9.8 = 0.072 kg = **72 g**
- Reaction = 1.176 + 0.7056 = **1.8816 N** (upar)

```
        ↓ 0.7056 N (72 g)   ↓ 1.176 N (scale ka weight)
   ═══════════════════════════════════════════════════
   0 cm 10 cm        35 cm  50 cm               100 cm
                     ▲
                     knife edge (↑ 1.8816 N)
```

> **Figure 2.6** – Metre scale 35 cm par knife edge par. 10 cm par 72 g ka mass, aur scale ka apna weight 50 cm par. Dono moment 0.1764 N m ke barabar hain.

**Jaanch:** 0.7056 × 0.25 = 0.1764 N m aur 1.176 × 0.15 = 0.1764 N m ✅. Grams aur cm mein: 72 g × 25 cm = 1800 g cm, 120 g × 15 cm = 1800 g cm ✅ (units dono taraf same, isliye ye shortcut chalta hai).

**Example 5 (see-saw jiska pivot beech mein nahi):** Ek uniform see-saw plank 3.0 m lamba aur 20 kg ka hai. Pivot bayein sire se 1.0 m par hai. Bayein sire par 34 kg ka bachcha baitha hai. Dayein taraf 24 kg ka bachcha pivot se kitni door baithe ki balance ho?

- Bayein bachche ka weight = 34 × 9.8 = **333.2 N**, pivot se 1.0 m par: moment = 333.2 N m (anticlockwise).
- Plank ka weight = 20 × 9.8 = **196 N**, 1.5 m par, to pivot se 0.5 m **dayein**: moment = 196 × 0.5 = 98 N m (clockwise).
- Dayein bachche ka weight = 24 × 9.8 = **235.2 N**, doori d.
- Clockwise = anticlockwise: 98 + 235.2 × d = 333.2, to 235.2 × d = 235.2, to **d = 1.0 m**.
- Pivot par reaction = 333.2 + 196 + 235.2 = **764.4 N** (upar).

```
   ═════════════════════════════════════════════════════════════
   ↓                   ▲         ↓         ↓
   333.2 N                       196 N     235.2 N
   (bachcha)                     (plank)   (bachcha)
                       pivot: ↑ 764.4 N
   :<───── 1.0 m ─────>:
                       :< 0.5 m >:
                       :<─── d = 1.0 m ───>:
```

> **Figure 2.7** – Pivot bayein sire se 1.0 m par. Plank ka weight (196 N) beech mein, pivot se 0.5 m dayein. Dayein bachche ko pivot se 1.0 m par baithna hai.

**Jaanch:** 98 + 235.2 × 1.0 = 333.2 ✅. Agar plank ke weight ko bhool jaate, to d = 333.2 ÷ 235.2 = 1.42 m aata, jo galat hota ✅. Reaction: 333.2 + 196 + 235.2 = 764.4 N ✅ (Shart 1: upar = neeche).

**Example 6 (spring balance se latka rod):** Ek uniform rod 80 cm lamba aur 0.6 kg ka hai. Wo do spring balances se, bayein sire se 10 cm aur 70 cm par, seedha latka hai. Rod par bayein sire se 25 cm par 0.9 kg ka mass bhi latka hai. Dono balances kya padhenge?

- Rod ka weight = 0.6 × 9.8 = **5.88 N**, 40 cm par. Mass ka weight = 0.9 × 9.8 = **8.82 N**, 25 cm par.
- Balances 10 cm (L) aur 70 cm (R) par. Pivot L lo (L ka moment zero).
- R_R × 0.60 m = 5.88 × 0.30 + 8.82 × 0.15 = 1.764 + 1.323 = 3.087 N m
- R_R = 3.087 ÷ 0.60 = **5.145 N**. R_L = (5.88 + 8.82) − 5.145 = 14.7 − 5.145 = **9.555 N**.

```
        ↑ R_L = 9.555 N               ↑ R_R = 5.145 N
   ═════════════════════════════════════════
                ↓      ↓
          8.82 N       5.88 N
   0    10      25     40             70   80 cm
```

> **Figure 2.8** – Rod do spring balances se latka hai (10 cm aur 70 cm par, dono upar ki taraf kheench rahe hain). 25 cm par 0.9 kg ka mass aur 40 cm par rod ka apna weight. Bayan balance zyaada load sambhalta hai.

**Jaanch:** Spring balance aksar kg mein padhte hain: 9.555 ÷ 9.8 = 0.975 kg aur 5.145 ÷ 9.8 = 0.525 kg. Dono ka jod = 1.5 kg = 0.6 + 0.9 ✅. Pivot R lekar: R_L × 0.6 = 5.88 × 0.3 + 8.82 × 0.45 = 1.764 + 3.969 = 5.733, to R_L = 9.555 N ✅.

---

## Safe activity: scale aur do sikke (ghar par adult ke saath)

Ek 30 cm ki plastic ya lakdi ki scale lo, ek hexagonal pencil (ya koi bhi pencil, jise table par eraser ya clay se ruk jaane do), aur ek jaise do sikke. Scale ko pencil par seedha rakho, 15 cm wala nishan pencil ke upar. Scale uniform hai, to uska apna weight pivot par hai aur koi moment nahi banata.

1. Ek sikka scale ke bayein sire ki taraf rakho, pencil se 10 cm par. Doosra sikka dayein taraf itni jagah rakho ki scale balance ho: ye bhi 10 cm par hi aayega.
2. Ab bayein par sikkon ki **jodi** (2 sikke) 5 cm par rakho. Dayein par ek sikka kahan rakhna padega? Anuman lagao aur try karo: lagbhag 10 cm par balance milega, kyunki 2 sikke × 5 cm = 1 sikka × 10 cm.
3. Pencil ko 15 cm se hata kar 12 cm par laga do. Ab scale kis taraf jhukti hai? Scale ka apna weight ab moment bana raha hai (3 cm ka arm), isliye sikke ki jagah badalni padegi.

Isse yahi seekhte hain: balance **weight × doori** ka hota hai, aur scale ka apna weight bhi gina jaata hai jab pivot beech mein na ho.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Pivot hamesha beech mein hi chunna chahiye"**

Demonstration: Example 2 ko plank ke **beech** (A se 2.0 m) ko pivot lekar karo. Aadmi 0.5 m bayein hai.
- Bayein taraf: R_A ka moment (clockwise) = R_A × 2.0, aur aadmi ka weight (bayein, neeche) anticlockwise = 607.6 × 0.5 = 303.8 N m. Plank ka weight pivot par hai, to koi moment nahi. R_B upar dayein ki taraf anticlockwise: R_B × 2.0.
- R_A × 2.0 = R_B × 2.0 + 303.8, to R_A − R_B = 151.9.
- Shart 1: R_A + R_B = 784. Dono equation mil kar: R_A = **467.95 N**, R_B = **316.05 N**. Sahi, par **do equations** ka jhanjhat laga.

**Sahi:** koi bhi point sahi hai. Par chunao wo jo **ek unknown** ko hata de. Example 2 mein B ya A lene par ek hi equation se jawab aa gaya. Hisaab aasaan karne ke liye aisa pivot chunte hain jahan **kam se kam unknown forces** ki line guzre.

**Galti 2: "Support ka reaction hamesha load ka aadha hota hai"**

Demonstration: Example 1 mein bori 588 N hai, aur reactions 392 N aur 196 N hain, aadhe (294 N) nahi. Example 2 ki table dekho: aadmi x = 0 par ho to R_A = 695.8 N aur R_B = 88.2 N; ye 784 ÷ 2 = 392 N se bahut door hain. **Sirf tab** jab load (aur sab weights ka asar) bilkul **beech** mein ho, tab dono 392 N hote hain (x = 2.0 m wali row).

**Sahi:** reaction ka baant **doori ke ulte ratio** mein hota hai (Example 1: doori 0.8 : 1.6, reaction 392 : 196). Beech mein ho to doori barabar, to reaction bhi barabar.

---

## Quick Recap

- **Equilibrium** ki do shartein: **net force = 0** (khisakna nahi) aur **net moment = 0** (ghoomna nahi). Dono chahiye: ek se kaam nahi chalta (Figure 2.1 aur 2.2).
- **Moment kisi bhi point ke around** liya ja sakta hai. Wo point chuno jisse ek unknown hat jaaye.
- **Uniform rod** ka weight beech mein; **halka rod** ka weight ignore.
- **Reaction** support ka upar ka dhakka hai; do supports ke reactions ka jod = kul weight.
- **Doori ke ulte ratio** mein weight baantta hai: jo load ke paas hai, wo zyaada sambhalta hai (Example 1: 392 N aur 196 N).
- **Aadha-aadha** sirf tab jab load beech mein ho (Example 2 ki table).
- Agar hisaab mein reaction **negative** aaye, to wo support body ko chhod deta hai aur body ulat sakti hai (Example 3).
- Pivot beech mein na ho to **rod ka apna weight** ka moment bhi gino (Example 5).
- Spring balance ke readings: dono ka jod = kul weight (Example 6).

---

## Practice Questions

1. Two porters carry a light bamboo pole 3.0 m long. A trunk of mass 36 kg hangs 1.2 m from the front porter. Find the force on each porter in newtons.

2. A uniform plank 2.8 m long and 14 kg in mass rests on supports at its two ends. A child of mass 22 kg stands 0.7 m from the right end. Find the reaction at each support.

3. A uniform metre scale of mass 60 g is balanced on a knife edge at the 30 cm mark. A mass of 180 g hangs at the 5 cm mark. What mass must hang at the 80 cm mark for balance? Find also the reaction at the knife edge.

4. A uniform shelf 1.0 m long and 4.5 kg in mass rests on two brackets placed 0.1 m and 0.9 m from its left end. A box of 6 kg is placed 0.3 m from the left end. Find the force on each bracket.

5. A light rod 1.5 m long rests on two supports at its ends. A sack of mass 20 kg hangs from it. The right support carries 78.4 N. How far from the left end does the sack hang?

6. A light rod 1.0 m long has a downward force of 24 N at 0.10 m and a downward force of 56 N at 0.70 m, both from the left end. Find the single upward force that keeps it in equilibrium and the point from the left end where it must act.

7. A uniform rod 1.0 m long and 0.8 kg in mass hangs horizontally from a single spring balance by a string tied 0.2 m from the left end. A mass is hung at the left end. Find that mass and the reading of the spring balance in newtons.

8. A uniform plank 3.2 m long and 16 kg in mass rests on two bricks placed symmetrically 1.6 m apart. A child of 30 kg stands at one end of the plank. Will the plank tip? What is the largest mass of a child who can stand at the end without tipping it?

9. A uniform see-saw plank 3.6 m long and 18 kg in mass is pivoted 1.2 m from its left end. A child of 27 kg sits at the left end. What mass must sit at the right end for balance? Find also the reaction at the pivot.

10. A light rod 2.0 m long rests on supports at its ends. Loads of 132 N and 76 N hang at 0.6 m and 1.5 m from the left end. Find the reaction at each support.

11. State True or False and give one line of reason:
    (a) If the net force on a rod is zero, it must be in equilibrium.
    (b) Moments may be taken about any point for a body in equilibrium.
    (c) A uniform rod's weight acts at its middle.
    (d) When a load hangs near one end of a rod resting on two supports, the nearer support carries more.
    (e) A negative reaction at a brick support means the brick is pushing harder.

12. In Example 1, the porter at the far end (B) carries 196 N. He says that if the sack is moved to the middle of the pole, his load will become heavier. Is he right? Explain using the idea that load is shared in the inverse ratio of distances.

### Answers

1. Trunk ka weight = 36 × 9.8 = 352.8 N. Pivot peeche wale porter par: R_front × 3.0 = 352.8 × (3.0 − 1.2) = 352.8 × 1.8 = 635.04, to R_front = 635.04 ÷ 3.0 = **211.68 N**. R_back = 352.8 − 211.68 = **141.12 N**.
   Jaanch: pivot front lekar: R_back × 3.0 = 352.8 × 1.2 = 423.36, to R_back = 141.12 N ✅. Front aage ke paas hai, to zyaada load (211.68 > 141.12) ✅.

2. Plank ka weight = 14 × 9.8 = 137.2 N (1.4 m par), bachche ka weight = 22 × 9.8 = 215.6 N (right end se 0.7 m, to left se 2.1 m). Pivot right end lo: R_L × 2.8 = 137.2 × 1.4 + 215.6 × 0.7 = 192.08 + 150.92 = 343.0, to R_L = **122.5 N**. R_R = (137.2 + 215.6) − 122.5 = 352.8 − 122.5 = **230.3 N**.
   Jaanch: pivot left lo: R_R × 2.8 = 137.2 × 1.4 + 215.6 × 2.1 = 192.08 + 452.76 = 644.84, to R_R = 230.3 N ✅. Bachcha right ke paas hai, to R_R bada ✅.

3. 60 g = 0.06 kg: weight 0.588 N, 50 cm par, to knife edge (30 cm) se 0.20 m dayein. 180 g = 0.18 kg: weight 1.764 N, 5 cm par, to 0.25 m bayein. Anticlockwise = 1.764 × 0.25 = 0.441 N m. Clockwise: 0.588 × 0.20 = 0.1176 N m plus W × 0.50 m (80 cm par: 0.5 m). 0.441 = 0.1176 + 0.5 W, to W = 0.3234 ÷ 0.5 = 0.6468 N, mass = 0.6468 ÷ 9.8 = 0.066 kg = **66 g**. Reaction = (60 + 180 + 66) g = 306 g = 0.306 kg × 9.8 = **2.9988 N** (lagbhag 3.0 N).
   Jaanch: 0.1176 + 0.6468 × 0.5 = 0.441 ✅. Grams mein: 180 × 25 = 4500, 60 × 20 + 66 × 50 = 1200 + 3300 = 4500 ✅.

4. Shelf ka weight = 4.5 × 9.8 = 44.1 N (0.5 m par), box = 6 × 9.8 = 58.8 N (0.3 m par). Pivot left bracket (0.1 m): right bracket 0.9 − 0.1 = 0.8 m door. R_R × 0.8 = 44.1 × (0.5 − 0.1) + 58.8 × (0.3 − 0.1) = 44.1 × 0.4 + 58.8 × 0.2 = 17.64 + 11.76 = 29.4, to R_R = **36.75 N**. Kul weight = 102.9 N, to R_L = 102.9 − 36.75 = **66.15 N**.
   Jaanch: pivot right bracket: R_L × 0.8 = 44.1 × 0.4 + 58.8 × 0.6 = 17.64 + 35.28 = 52.92, to R_L = 66.15 N ✅.

5. Sack ka weight = 20 × 9.8 = 196 N. Pivot left end lo: R_R × 1.5 = 196 × x, to 78.4 × 1.5 = 117.6 = 196 x, to x = 117.6 ÷ 196 = **0.6 m** (left end se). R_L = 196 − 78.4 = 117.6 N.
   Jaanch: pivot right lo: R_L × 1.5 = 196 × (1.5 − 0.6) = 176.4, to R_L = 117.6 N ✅. Sack left ke paas hai, to R_L bada ✅.

6. Net force zero: F = 24 + 56 = **80 N upar**. Pivot left end lo: F × x = 24 × 0.10 + 56 × 0.70 = 2.4 + 39.2 = 41.6 N m, to x = 41.6 ÷ 80 = **0.52 m** left end se.
   Jaanch: pivot 0.52 m par lo: bayein 24 × 0.42 = 10.08 N m, dayein 56 × 0.18 = 10.08 N m ✅.

7. Rod ka weight = 0.8 × 9.8 = 7.84 N, beech (0.5 m) par: string (0.2 m par) se 0.3 m dayein. Mass M left end par, string se 0.2 m bayein. M g × 0.2 = 7.84 × 0.3 = 2.352, to M g = 11.76 N, M = 11.76 ÷ 9.8 = **1.2 kg**. Spring balance reading = 7.84 + 11.76 = **19.6 N** (2.0 kg).
   Jaanch: 11.76 × 0.2 = 2.352 ✅; 1.2 × 9.8 = 11.76 ✅.

8. Plank ka weight = 16 × 9.8 = 156.8 N, beech mein; brick B se andar ki taraf 0.8 m. Child ka weight = 30 × 9.8 = 294 N, B se bahar 0.8 m. B ke around: restoring (plank) = 156.8 × 0.8 = 125.44 N m; tipping (child) = 294 × 0.8 = 235.2 N m. 235.2 > 125.44, to **plank ulat jaayega**. Limit par m × 9.8 × 0.8 = 125.44, to m = 125.44 ÷ 7.84 = **16 kg**.
   Jaanch: 16 kg × 9.8 × 0.8 = 125.44 N m ✅ (plank ke mass ke barabar, kyunki do doori barabar hain).

9. Bachche ka weight = 27 × 9.8 = 264.6 N, pivot se 1.2 m: 317.52 N m (anticlockwise). Plank ka weight = 18 × 9.8 = 176.4 N, 1.8 m par, to pivot se 0.6 m dayein: 105.84 N m (clockwise). Dayein sire par pivot se 3.6 − 1.2 = 2.4 m. W × 2.4 = 317.52 − 105.84 = 211.68, to W = 88.2 N, mass = **9 kg**. Reaction = (27 + 18 + 9) × 9.8 = 54 × 9.8 = **529.2 N**.
   Jaanch: 105.84 + 88.2 × 2.4 = 105.84 + 211.68 = 317.52 ✅.

10. Pivot left end lo: R_R × 2.0 = 132 × 0.6 + 76 × 1.5 = 79.2 + 114 = 193.2, to R_R = **96.6 N**. R_L = (132 + 76) − 96.6 = 208 − 96.6 = **111.4 N**.
    Jaanch: pivot right lo: R_L × 2.0 = 132 × 1.4 + 76 × 0.5 = 184.8 + 38 = 222.8, to R_L = 111.4 N ✅.

11. (a) **False** ❌: net force zero ho par moments balance na ho (couple, Figure 2.1), to rod ghoomega.
    (b) **True** ✅: equilibrium mein kisi bhi point ke around net moment zero hota hai.
    (c) **True** ✅: uniform rod ka weight beech mein maana jaata hai.
    (d) **True** ✅: reaction doori ke ulte ratio mein baantte hain, to nazdeek wala zyaada sambhalta hai.
    (e) **False** ❌: negative reaction ka matlab hai ki support asal mein kheench nahi sakta, body us support se alag hokar ulatne lagti hai.

12. Haan, wo sahi hai. Abhi sack B se 1.6 m door hai aur A se 0.8 m, to B kam (196 N) uthata hai. Sack beech mein aaye to dono doori 1.2 m, to reaction barabar: 588 ÷ 2 = 294 N. B ka load 196 N se badhkar 294 N ho gaya, aur A ka 392 N se ghatkar 294 N.
    Jaanch: 294 + 294 = 588 N ✅; beech mein pivot B lo: R_A × 2.4 = 588 × 1.2, R_A = 294 N ✅.

---

Ab agli baar baans par bori ya plank par aadmi dikhe, to Nimish ki tarah dekho ki zor **kahan zyaada** hai: jo load ke paas, wo zyaada sambhalta hai. Do shartein, ek pivot, aur ho gaya hisaab.

**Aage kya?** Hum baar-baar kehte rahe ki uniform rod ka weight "beech mein" lagta hai. Par agar rod ek taraf moti ho, ya ek L-shape ki plate ho, ya ek khaali ring, to wo ek hi point kahan hoga, aur kya wo hamesha cheez ke andar hi hoga? Topic 3 mein is ek point **centre of gravity** ka pata lagayenge.
