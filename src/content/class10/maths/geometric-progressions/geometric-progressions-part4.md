# Chapter: Geometric Progressions (Part 4)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [geometric-progressions-part3.md](geometric-progressions-part3.md) se aage chalti hai** (wahan Topic 3 mein do terms se poora GP banana, geometric mean aur teen numbers ko GP mein rakhna seekha). Chapter ki shuruaat: [geometric-progressions.md](geometric-progressions.md). nth term aur aakhri term: [geometric-progressions-part2.md](geometric-progressions-part2.md). AP ka Sₙ aur uski trick: [arithmetic-progressions-part4.md](../arithmetic-progressions/arithmetic-progressions-part4.md). Quadratic equation: [quadratic-equations-part4.md](../quadratic-equations/quadratic-equations-part4.md). Story check: [quadratic-equations-part6.md](../quadratic-equations/quadratic-equations-part6.md). Laws of exponents (Class 9): [number-systems-part6.md](../../../class9/maths/number-systems/number-systems-part6.md).
> **Topics covered in this file:**
> 4. Sum Of n Terms Of A GP: Sₙ = a(rⁿ − 1)/(r − 1)

---

# Topic 4: Sum Of n Terms Of A GP: Sₙ = a(rⁿ − 1)/(r − 1)

Topic 1 se Topic 3 tak hum GP ke **terms** ke saath khelte rahe: a, ar, ar², ... likhna, aₙ = a rⁿ⁻¹ se koi bhi term nikalna, aur do terms se poora GP banana. Ab wahi sawaal jo Chapter 4 mein AP ke liye poochha tha: agar pehle n terms ko **jod** diya jaaye to kul kitna hoga? AP mein "aage-peechhe likhkar jodne" ki Gauss wali chaal chali thi. GP mein wo chaal kaam nahi karti (kyun, Part A mein dekhenge), isliye yahan ek **nayi chaal** aayegi: poori list ko r se **guna** karo aur ghata do.

---

## Apeksha aur shatranj ke daane

Sunday ki dopahar Apeksha apni Didi ke saath shatranj (chess) khel rahi thi. Board ke 64 khaane dekhkar usne poochha, "Dadi, 64 hi khaane kyun?" Dadi ne chashma theek kiya aur ek purani kahani suna di.

Kaha jaata hai ki bahut pehle ek raja ko ek aavishkarak ne shatranj ka khel sikhaya. Raja itna khush hua ki bola, "Maango, jo maangoge milega." Aavishkarak ne haath jodkar kaha, "Maharaj, bas shatranj ke board par gehun ke daane de dijiye: pehle khaane par 1 daana, doosre par 2, teesre par 4, chauthe par 8, aur har agle khaane par pichhle se **double**, aakhri 64-wen khaane tak." Raja hans pada: "Bas itna? Kal hi mil jayega." Par jab khazanchi ne ginti shuru ki, to kuch hi khaane baad gehun ke godam khali hone lage.

Apeksha ne copy mein pehle 8 khaane likhe: 1, 2, 4, 8, 16, 32, 64, 128. Phir usne jodna shuru kiya: 1, 3, 7, 15, 31, 63, 127, **255.** "Dadi, 8 khaane tak 255 daane. Par 64 khaane tak kul kitne honge? Aur Gauss ki tarah shuru aur aakhir ko jodkar jodiyan banaun?" Didi ne tokte hue kaha, "Pehle dekh: 1 + 128 = 129, par 2 + 64 = 66. Jodiyon ka jod barabar nahi aa raha." Dadi muskuraayi: "Gauss ki chaal tab chalti hai jab har qadam par **jodte** hain. Yahan har qadam par **guna** hota hai, to chaal bhi guna wali chahiye."

Apeksha ne ek aur baat dekhi: 1, 3, 7, 15, 31, 63, 127, 255: har kul sankhya agle khaane ke daane se **ek kam** hai (agla khaana 2, 4, 8, 16, ... aur kul 1, 3, 7, 15, ...). "Ye ittefaq hai ya hamesha hota hai?" Aaj hum is sawaal ka jawab denge, aur 64 khaane ka kul bhi nikalenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Geometric series** | GP ke terms ko + lagakar likha hua jod: a + ar + ar² + ... + arⁿ⁻¹. Iska jod hi Sₙ hai. | 2 + 10 + 50 + 250 + 1250 |
| **Guna-ghatao chaal** | Series ko r se guna karke nayi series banana, phir nayi series mein se purani ghatana: beech ke saare terms kat jaate hain. | Part B |
| **Formula ke do roop** | r > 1 ho to a(rⁿ − 1)/(r − 1) lete hain, r < 1 ho to a(1 − rⁿ)/(1 − r). Dono ek hi cheez hain: numerator aur denominator dono ke sign ulte kar do. | Part B aur Part C |

(Sₙ aur "series" shabd Chapter 4 mein AP ke liye aa chuke hain; wahan wo AP ke terms ka jod tha, yahan GP ke.)

---

## Pichhle topics se yaad

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [Topic 1](geometric-progressions.md) | GP, common ratio r = aₙ₊₁/aₙ, aur a, ar, ar², ... | Part B: derivation ki pehli line |
| [Topic 2](geometric-progressions-part2.md) | aₙ = a rⁿ⁻¹ aur aakhri term l | Part B se Part F: aakhri term aur n |
| [Class 9, Number Systems Topic 6](../../../class9/maths/number-systems/number-systems-part6.md) | Laws of exponents: rⁿ × r = rⁿ⁺¹, aur powers pehchanna | Part B (cancelling) aur Part F (n nikalna) |
| [AP, Topic 4](../arithmetic-progressions/arithmetic-progressions-part4.md) | Sₙ ka formula seedha aur ulta likhkar jodne se | Part A aur Part H: AP aur GP ki tulna |
| [Quadratic equations, Topic 4](../quadratic-equations/quadratic-equations-part4.md) | Quadratic equation ko hal karna | Part F: r nikalna |
| [Quadratic equations, Topic 6](../quadratic-equations/quadratic-equations-part6.md) | Story check: har jawab ko kahani ke saamne khada karo | Part E aur Part F |

---

## Part A: Chhote khaane, bada pattern

Apeksha ki ginti ko ek line mein rakhte hain.

```
square   : [  1  ][  2  ][  3  ][  4  ][  5  ][  6  ][  7  ][  8  ]
daane    : [  1  ][  2  ][  4  ][  8  ][  16 ][  32 ][  64 ][ 128 ]
kul daane: [  1  ][  3  ][  7  ][  15 ][  31 ][  63 ][ 127 ][ 255 ]
```

> **Figure 4.1** – Shatranj ke pehle 8 khaane. Upar daane (har khaane mein pichhle ke double), neeche kul daane ab tak. Dhyan do: har kul sankhya agle khaane ke daane se ek kam hai: 1 = 2 − 1, 3 = 4 − 1, 7 = 8 − 1, 15 = 16 − 1, ... 255 = 256 − 1 (agla, 9-wa khaana 256 daane ka hoga).

Ye sirf pehle 8 khaane ki baat hai; "hamesha hota hai" abhi sabit nahi hua. Isko pakka karne ke liye ek asli tareeka chahiye, jo sirf shatranj ke daano par nahi, **kisi bhi GP par** chale. Wo Part B mein hai.

Pehle ye bhi dekho ki Gauss ki chaal GP par kyun nahi chalti. AP mein shuru ka term jitna badhta hai, aakhir ka utna hi ghatta hai, isliye jodiyon ka jod ek hi rehta hai. GP mein shuru se k-wa term a rᵏ⁻¹ aur aakhir se k-wa term bahut alag raftaar se badhte hain, aur jodiyon ka jod har jodi par badal jaata hai (r = 1 ya −1 chhodkar: 1 + 128 = 129, 2 + 64 = 66). Isliye dusri chaal chahiye.

---

## Part B: Formula ka janm: r se guna karo aur ghata do

GP lo: pehla term a, common ratio r, n terms. Series ye hai:

Sₙ = a + ar + ar² + ... + arⁿ⁻² + arⁿ⁻¹  ... (1)

Ab **dono taraf r se guna** karo. Har term ko r se guna karne par har power ek se badh jaati hai (a × r = ar, ar × r = ar², ..., arⁿ⁻² × r = arⁿ⁻¹, arⁿ⁻¹ × r = arⁿ):

r Sₙ = ar + ar² + ar³ + ... + arⁿ⁻¹ + arⁿ  ... (2)

Pehle ek chhote GP par dekho: 2, 10, 50, 250, 1250 (a = 2, r = 5, n = 5). Series ko aise likho ki jo terms dono mein barabar hain wo ek ke neeche ek aayein.

```
S   =      2 +     10 +     50 +    250 +   1250
5S  =              10 +     50 +    250 +   1250 +   6250
---------------------------------------------------------
5S - S = 6250 - 2 = 6248,  yaani  4S = 6248,  S = 1562
```

> **Figure 4.2** – Upar S (2 + 10 + 50 + 250 + 1250), neeche 5S (har term ko 5 se guna: 10 + 50 + 250 + 1250 + 6250). 10, 50, 250 aur 1250 dono mein hain, to 5S mein se S ghatane par wo sab kat jaate hain. Bachta hai sirf neeche ka aakhri term 6250 aur upar ka pehla term 2 (jo ghatne se minus ho jaata hai).

**Jaanch:** 2 + 10 + 50 + 250 + 1250 = 1562 ✅ aur aage jo formula banega uska (3): 2 × (5⁵ − 1)/(5 − 1) = 2 × 3124/4 = 1562 ✅.

Ab yahi **letters** se, har line dikhate hue.

**(2) − (1):** Left side: r Sₙ − Sₙ. Right side: (2) mein ar se arⁿ⁻¹ tak ke terms ke baad ek extra arⁿ hai; (1) mein ek extra a ke baad wahi ar se arⁿ⁻¹ tak ke terms hain. Isliye ar, ar², ..., arⁿ⁻¹ **dono mein hain aur kat jaate hain**, bachte hain arⁿ aur −a. To

r Sₙ − Sₙ = arⁿ − a

Left side se Sₙ common nikalo: Sₙ(r − 1) = a(rⁿ − 1). Agar r ≠ 1 ho (to r − 1 ≠ 0), dono taraf (r − 1) se divide kar sakte hain:

**Sₙ = a(rⁿ − 1)/(r − 1)**  ... (3)

Numerator aur denominator dono ko −1 se guna karo (value nahi badalti):

**Sₙ = a(1 − rⁿ)/(1 − r)**  ... (4)

(3) aur (4) **ek hi cheez** hain. Chuno wahi jo **positive** denominator de: r > 1 ho to (3), r < 1 ho to (4).

**r = 1 ka alag mamla.** r = 1 par (r − 1) zero ho jaata hai, aur zero se divide nahi kar sakte. Par r = 1 mein GP a, a, a, ..., a hai, har term a, to **Sₙ = na.**

**Aakhri term l ke saath ek aur roop.** l = arⁿ⁻¹ hai, to arⁿ = l × r. (3) mein arⁿ ki jagah lr:

**Sₙ = (lr − a)/(r − 1)**  ... (5)

Ye tab kaam aata hai jab n nahi, aakhri term pata ho.

**Ab Apeksha ka sawaal:** shatranj mein a = 1, r = 2, to (3): Sₙ = 1 × (2ⁿ − 1)/(2 − 1) = **2ⁿ − 1.** Aur 2ⁿ agle (n + 1)-wen khaane ka daana hai. To "kul daane = agle khaane ke daane − 1" **hamesha** sach hai, kyunki ye formula har n ke liye sach hai.

**Kab kaun sa:**

| Kya diya hai | Kaun sa formula | Kyun |
|---|---|---|
| a, r, n aur r > 1 | (3) | Positive numerator aur denominator |
| a, r, n aur r < 1 (r negative nahi) | (4) | 1 − rⁿ aur 1 − r dono positive |
| a, r, n aur r negative | Koi bhi (3) ya (4) | Dono barabar hain, sirf sign ka dhyan |
| a, r, aur aakhri term l (n nahi) | (5) | rⁿ nikalne ki zaroorat nahi |
| r = 1 | Sₙ = na | (3) aur (4) mein 0 se divide hota |

---

## Part C: Diye hue GP ka sum

### Example 1: r > 1

GP 100, 300, 900, ... ke pehle 6 terms ka sum. a = 100, r = 300/100 = 3, n = 6. (3):
S₆ = 100 × (3⁶ − 1)/(3 − 1) = 100 × 728/2 = 100 × 364 = **36400.**
**Jaanch:** terms 100, 300, 900, 2700, 8100, 24300 ko jodo: 100 + 300 = 400, + 900 = 1300, + 2700 = 4000, + 8100 = 12100, + 24300 = 36400 ✅. Aakhri term l = 24300 se (5): (24300 × 3 − 100)/(3 − 1) = 72800/2 = 36400 ✅.

### Example 2: r < 1

GP 1/4, 1/8, 1/16, ... ke pehle 10 terms ka sum. a = 1/4, r = (1/8)/(1/4) = 1/2, n = 10. r < 1, to (4):
S₁₀ = (1/4) × (1 − (1/2)¹⁰)/(1 − 1/2) = (1/4) × (1 − 1/1024)/(1/2) = (1/4) × (1023/1024) × 2 = **1023/2048.**
**Jaanch:** dusra roop (3): (1/4) × ((1/2)¹⁰ − 1)/((1/2) − 1) = (1/4) × (−1023/1024)/(−1/2) = (1/4) × (1023/1024) × 2 = 1023/2048 ✅ (do minus mil kar plus). Ye lagbhag 0.4995 hai.

```
n= 1  ####################                     0.2500
n= 2  ##############################           0.3750
n= 3  ###################################      0.4375
n= 4  ######################################   0.4688
n= 5  #######################################  0.4844
n= 6  #######################################  0.4922
n= 7  ######################################## 0.4961
n= 8  ######################################## 0.4980
n= 9  ######################################## 0.4990
n=10  ######################################## 0.4995
                                             ^ 0.5
```

> **Figure 4.3** – GP 1/4, 1/8, 1/16, ... ke S₁ se S₁₀ ki bars (1 bar-chinh lagbhag 0.0125 ke barabar), daayen taraf asli kimat. Har naya term chhota hai, isliye sum badhta to hai, par har baar kam. 0.5 ka nishaan neeche hai: S₁₀ bhi 0.5 se thoda chhota hai (0.4995). n = 7 ke baad bars ek jaise dikhte hain, kyunki farak ek bar-chinh se bhi chhota hai. Terms chhote hote jaate hain, par sum aage kahan jaata hai: ye aage ki class ka sawaal hai.

### Example 3: r negative (alternating)

GP 9, −18, 36, ... ke pehle 8 terms ka sum. a = 9, r = −18/9 = −2, n = 8. (3):
S₈ = 9 × ((−2)⁸ − 1)/(−2 − 1) = 9 × (256 − 1)/(−3) = 9 × 255/(−3) = 9 × (−85) = **−765.**
**Jaanch:** jodiyaan banao: (9 − 18) = −9, (36 − 72) = −36, (144 − 288) = −144, (576 − 1152) = −576. Jod: −9 − 36 − 144 − 576 = −765 ✅.

```
n=1                                 :# 9
n=2                                #: -9
n=3                                 :# 27
n=4                               ##: -45
n=5                                 :#### 99
n=6                         ########: -189
n=7                                 :############### 387
n=8  ###############################: -765
```

> **Figure 4.4** – GP 9, −18, 36, ... ke S₁ se S₈. Axis (:) ke daayen positive, baayen negative sum (1 bar-chinh lagbhag 25 ke barabar, chhoti values 9 aur 27 bhi ek chinh dikhayi gayi hain). Sum kabhi + kabhi − aata hai, kyunki r negative hai. Har baar naya term (magnitude mein) pichhle sum se bada hai, isliye sum ka sign aakhri term ke sign jaisa hai: n = 8 par aakhri term −1152 negative hai, to S₈ negative.

### Example 4: r = 1

GP 3, 3, 3, ... ke pehle 15 terms ka sum. r = 3/3 = 1, to (3) mein 0 se divide hota, isliye **S₁₅ = 15 × 3 = 45.**
**Jaanch:** 3 ko 15 baar jodna: 3 × 15 = 45 ✅ (har term 3 hai, kisi aur tareeke ki zaroorat nahi).

---

## Part D: Chessboard ka asli jawab

Ab Apeksha ka sawaal: 64 khaane ka kul. a = 1, r = 2, n = 64: S₆₄ = 2⁶⁴ − 1.

2⁶⁴ ek bahut bada number hai, isliye exactly likhna ho to ye hai: 2⁶⁴ − 1 = **18,446,744,073,709,551,615.** Isko lagbhag **1.8 × 10¹⁹** likhte hain (yaani lagbhag 18 ke aage 18 zero).

Kitna bada? Ek andaaza (lagbhag, kuch baatein maani hui): maan lo ek gehun ka daana lagbhag 0.05 gram ka hai. To 1.8 × 10¹⁹ daane ka vazan lagbhag 9 × 10¹⁷ gram, yaani lagbhag 9 × 10¹¹ tonne (nau sau arab tonne). Poori duniya mein ek saal mein gehun ki paidaavar lagbhag 80 crore tonne (8 × 10⁸) maani jaaye, to ye jawab lagbhag **ek hazaar saal se bhi zyada** ki duniya bhar ki gehun ki paidaavar ke baraabar hai. (Ye andaaza hai: daane ka vazan aur paidaavar ke aankde badal sakte hain, par nateeja hamesha "hazaaron saal" ke aas-paas hi aayega.) Raja ke godam kabhi poore nahi hote.

**Jaanch (pattern se):** 8 khaane tak 2⁸ − 1 = 255 aur Figure 4.1 ka kul 255 ✅.

### Example 5: kitne khaane par kul 1023?

Shatranj mein pehle n khaane ka kul 1023 daane ho gaya. n kitna? Sₙ = 2ⁿ − 1 = 1023, to 2ⁿ = 1024. 2 ke powers: 2, 4, 8, 16, 32, 64, 128, 256, 512, **1024** (ye dasva power hai), to **n = 10.**
**Jaanch:** S₁₀ = 2¹⁰ − 1 = 1023 ✅. Ye bhi dekho: 10-wen khaane mein 2⁹ = 512 daane hain, aur pehle 9 khaane ka kul 511, to 511 + 512 = 1023 ✅.

---

## Part E: Asli zindagi mein GP ka sum

Har sawaal mein pehle ye dekho: a kya hai, r kya hai, aur n kya hai.

### Example 6: Apeksha ki Mummy ka gullak

Mummy ne Apeksha se mazaak kiya: "Is mahine ek gullak mein pehle din ₹1 daalo, doosre din ₹2, teesre din ₹4, aur har din pichhle din ka double. 20 din mein gullak mein kul kitna hoga?" Yahan a = 1, r = 2, n = 20. (3): S₂₀ = 2²⁰ − 1. 2¹⁰ = 1024, to 2²⁰ = 1024 × 1024 = 1048576. **S₂₀ = ₹10,48,575** (lagbhag ₹10.5 lakh).
**Jaanch:** 20-wen din ka term 2¹⁹ = 524288, aur (5): (524288 × 2 − 1)/(2 − 1) = 1048575 ✅.
**Story check:** 20-wen din hi ₹5,24,288 daalne padte hain: ye asli gullak ke liye mumkin nahi, to ye mazaak hi hai. Mahine ke 30 din tak jaate to kul 2³⁰ − 1 = 1,07,37,41,823, yaani lagbhag ₹107 crore. Doubling dheere shuru hoti hai, par bahut jaldi bhaag jaati hai.

### Example 7: message ki chain

Apeksha ne ek achhe wishes ka message 4 doston ko bheja. Har kisi ne use 4 **naye** logon ko forward kiya, aur ye 6 round chala. Kul kitne message gaye? Round 1 mein 4, round 2 mein 4 × 4 = 16, round 3 mein 64, ... a = 4, r = 4, n = 6. (3): S₆ = 4 × (4⁶ − 1)/(4 − 1) = 4 × 4095/3 = 4 × 1365 = **5460 messages.**
**Jaanch:** 4 + 16 + 64 + 256 + 1024 + 4096 = 5460 ✅ (4 + 16 = 20, + 64 = 84, + 256 = 340, + 1024 = 1364, + 4096 = 5460).
**Story check:** Maanke chale ki kisi ko do baar message nahi mila. Asli mein log kai baar wahi message dobara paate hain, to asli ginti isse kam hogi. Ye ek model hai, aur ye dikhata hai ki chain kitni tezi se badhti hai: aakhri round mein hi 4096 message.

### Example 8: uchhalti hui gend

Ek gend zameen se uchhalti hai: pehli baar wo 100 cm oonchi uthi, aur har baar pichhli oonchai ki aadhi. Pehli 6 oonchaiyon ka jod? a = 100, r = 1/2, n = 6, r < 1, to (4):
S₆ = 100 × (1 − 1/64)/(1 − 1/2) = 100 × (63/64) × 2 = 200 × 63/64 = **196.875 cm.**
**Jaanch:** 100 + 50 + 25 + 12.5 + 6.25 + 3.125 = 196.875 ✅.
**Story check:** Har nayi oonchai pichhli se aadhi hai, to pehli oonchai 100 aur baaki sab milkar 100 se kam honge (50 + 25 + ... kabhi 100 tak nahi pahunchta), yaani jod 200 cm se kam rehna chahiye. 196.875 cm, 200 se kam hai, to jawab kahani se mel khaata hai. (Ye "oonchaiyon ka jod" hai, gend ke poore raste ki lambai nahi.)

---

## Part F: Sum diya hai, n ya r dhundo

### Example 9: n dhundo, powers pehchaan kar

GP 1/4, 3/4, 9/4, ... ke kitne terms ka sum 273.25 hai? a = 1/4, r = 3, to (3): Sₙ = (1/4)(3ⁿ − 1)/(3 − 1) = (3ⁿ − 1)/8. 273.25 = 1093/4, to (3ⁿ − 1)/8 = 1093/4, 3ⁿ − 1 = 2186, 3ⁿ = 2187. 3 ke powers: 3, 9, 27, 81, 243, 729, **2187**, to ye saatva power hai: **n = 7.**
**Jaanch:** a₇ = (1/4) × 3⁶ = 729/4. (5): (729/4 × 3 − 1/4)/(3 − 1) = (2187 − 1)/(4 × 2) = 2186/8 = 273.25 ✅. **Story check:** n whole aur positive hai, to chalta hai.

### Example 10: r dhundo (quadratic wali kahani)

GP ka pehla term 100 hai aur pehle 3 terms ka sum 475 hai. r kitna? Pehle 3 terms: 100, 100r, 100r². Sum: 100(1 + r + r²) = 475, to 1 + r + r² = 4.75, yaani r² + r − 3.75 = 0. Chaar se guna: 4r² + 4r − 15 = 0. Factor karo: (2r − 3)(2r + 5) = 0 (check: 4r² + 10r − 6r − 15 = 4r² + 4r − 15 ✓). To **r = 3/2 ya r = −5/2.**
Dono GP bante hain: r = 3/2 par 100, 150, 225, aur r = −5/2 par 100, −250, 625.
**Jaanch:** 100 + 150 + 225 = 475 ✅ aur 100 − 250 + 625 = 475 ✅.
**Story check:** Yahan koi kahani nahi, sirf numbers hain, to **dono r sahi hain.** (Agar kahani mein "har saal paisa badhta hai" likha hota to r = −5/2 reject ho jaata, kyunki growth ratio positive hota.)

---

## Part G: Beech ke terms ka sum, aur Sₙ − Sₙ₋₁

Pehle m terms mein se pehle k terms hata do to bacha **(k + 1)-wa se m-wa term tak.** Isliye **Sₘ − Sₖ.**

```
[a1][a2][a3][a4][a5][a6][a7][a8][a9]
<----- S4 -----><---- S9 - S4 ----->
<--------------- S9 --------------->
```

> **Figure 4.5** – 9 terms, pehle 4 terms ka S₄, aur S₉ − S₄ jisme terms a₅ se a₉ tak (5 terms) aate hain.

### Example 11: terms 5 se 9

GP 100, 200, 400, ... ke 5-wen se 9-wen term tak ka sum. a = 100, r = 2. S₉ = 100 × (2⁹ − 1) = 100 × 511 = 51100. S₄ = 100 × (2⁴ − 1) = 1500. **Sum = 51100 − 1500 = 49600.**
**Jaanch:** terms 5 se 9: 1600, 3200, 6400, 12800, 25600. Jod: 1600 + 3200 = 4800, + 6400 = 11200, + 12800 = 24000, + 25600 = 49600 ✅.

### Example 12: Sₙ − Sₙ₋₁ = aₙ

AP ke liye Chapter 4 mein aₙ = Sₙ − Sₙ₋₁ dekha tha. GP ke liye wahi baat: Sₙ − Sₙ₋₁ ek hi term bacha dega, aₙ. Letters se: Sₙ − Sₙ₋₁ = a(rⁿ − 1)/(r − 1) − a(rⁿ⁻¹ − 1)/(r − 1) = a(rⁿ − rⁿ⁻¹)/(r − 1) = a rⁿ⁻¹(r − 1)/(r − 1) = **a rⁿ⁻¹ = aₙ** ✓ (n ≥ 2 ke liye; S₁ = a).
Ek GP par dekho: 1/4, 1/2, 1, ... (r = 2). Sₙ = (1/4)(2ⁿ − 1). S₁₀ = (1/4) × 1023 = 255.75 aur S₉ = (1/4) × 511 = 127.75, to S₁₀ − S₉ = **128.**
**Jaanch:** a₁₀ = (1/4) × 2⁹ = 512/4 = 128 ✅.

---

## Part H: AP aur GP ke Sₙ ki tulna, aur ek baat compound interest ki

| | AP | GP |
|---|---|---|
| List aage badhti hai | ek fixed number **jodkar** (d) | ek fixed number se **guna** karke (r) |
| Sₙ ki chaal | seedha aur ulta likhkar jodo | r se guna karke ghatao |
| Formula | (n/2)[2a + (n − 1)d] | a(rⁿ − 1)/(r − 1) |
| Sₙ n ka kaisa function | n mein quadratic polynomial | rⁿ ke saath badalta (exponential) |
| n badhne par Sₙ | dheere-dheere badhta | r > 1 par bahut tezi se badhta |
| Alag mamla | d = 0 par Sₙ = na | r = 1 par Sₙ = na |

Dono formulas ke alag mamle ek jaise dikhte hain: jab list constant ho (d = 0 ya r = 1), to Sₙ = na.

**Compound interest ke saath rishta (saavdhaan).** Chapter 4 ke wade ke mutabiq compound interest ke saalana amounts ek GP hain, jiska r wahi growth factor (1 + R/100) hai. Maan lo ₹2,560 par 25% saalana compound interest: amounts 3200, 4000, 5000, 6250, ... (r = 1.25). In 4 saal ke amounts ka jod formula se 3200 × (1.25⁴ − 1)/0.25 = 18450 aata hai, par ye jod kisi sawaal ka jawab nahi: sawaal hamesha "n saal baad **amount**" hota hai, aur wo sirf **aₙ** hai (ek term), Sₙ nahi.
**Jaanch:** 3200 + 4000 + 5000 + 6250 = 18450 ✅. Aur 4 saal baad ka amount ₹6,250 hi hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: r < 1 par denominator ka sign bhool jaana (sum negative aa jaana)**

GP 7, 7/2, 7/4, ... ke pehle 6 terms ka sum. Ek bachche ne (3) ka numerator rakha aur denominator (1 − r) rakh diya: S₆ = 7 × ((1/2)⁶ − 1)/(1 − 1/2) = 7 × (1/64 − 1)/(1/2) = 7 × (−63/64) × 2 = **−441/32**, yaani lagbhag −13.78. **Ulta udaharan:** ye to positive numbers ka jod hai, ek negative jawab ho hi nahi sakta. Haath se jodo: 7 + 3.5 + 1.75 + 0.875 + 0.4375 + 0.21875 = 13.78125.
Kyun galat? r < 1 par rⁿ − 1 **negative** aata hai aur r − 1 bhi **negative**. Dono negative milkar positive dete hain. Jab bachche ne denominator ko (1 − r) kar diya, denominator positive ho gaya aur numerator negative raha, to sign galat. Ya to (3) ke dono sign rakho (rⁿ − 1 aur r − 1), ya (4) ke dono (1 − rⁿ aur 1 − r). Sahi: S₆ = 7 × (1 − 1/64)/(1 − 1/2) = 7 × (63/64) × 2 = **441/32 = 13.78125.**
**Jaanch:** (3) ke dono sign: 7 × (1/64 − 1)/(1/2 − 1) = 7 × (−63/64)/(−1/2) = 441/32 ✅ aur haath se jodne par 13.78125 ✅.

**Galti 2: S₉ − S₄ ko 4-wen se 9-wen term ka sum samajhna**

GP 7, 14, 28, ... mein ek bachche ne kaha: "S₉ − S₄ = terms 4 se 9 ka sum." Ye 6 terms hote hain. **Ulta udaharan:** S₉ = 7 × 511 = 3577 aur S₄ = 7 × 15 = 105, to S₉ − S₄ = 3472. Par 4-wen se 9-wen term (56, 112, 224, 448, 896, 1792) ka sum 7 × (8 + 16 + 32 + 64 + 128 + 256) = 7 × 504 = 3528 hai. Farak 3528 − 3472 = 56 = a₄.
Kyun? S₄ mein 4-wa term bhi shaamil hai, to use hatane par wo bhi hat jaata hai. Sahi baat: **Sₘ − Sₖ = terms (k + 1) se m tak.** S₉ − S₄ = 5-wa se 9-wa term. Agar 4-wen se 9-wen chahiye to S₉ − S₃. (Ye wahi galti hai jo Chapter 4 mein AP ke Sₙ mein dekhi thi: [arithmetic-progressions-part4.md](../arithmetic-progressions/arithmetic-progressions-part4.md), Galti 2.)
**Jaanch:** S₉ − S₃ = 3577 − 7 × 7 = 3577 − 49 = 3528 ✅.

---

## Quick Recap

- **Sₙ** = GP ke pehle n terms ka sum. Gauss ki jodi wali chaal GP par nahi chalti, kyunki jodiyon ka jod badalta hai.
- **Derivation:** Sₙ ko r se guna karo, dono ko ek ke neeche ek likho, ghatao: beech ke saare terms kat jaate hain, rSₙ − Sₙ = arⁿ − a. Isse **Sₙ = a(rⁿ − 1)/(r − 1)** (r ≠ 1).
- **Do roop:** r > 1 ho to a(rⁿ − 1)/(r − 1), r < 1 ho to a(1 − rⁿ)/(1 − r). Dono barabar hain. **r = 1 par Sₙ = na.**
- Aakhri term l pata ho to **Sₙ = (lr − a)/(r − 1).**
- Shatranj: a = 1, r = 2, Sₙ = 2ⁿ − 1, aur 64 khaane ka kul 2⁶⁴ − 1 ≈ 1.8 × 10¹⁹ daane.
- n dhundo: rⁿ ko powers pehchaan kar (jaise 2ⁿ = 1024 par n = 10). r dhundo: quadratic banti hai, dono jawab jaancho.
- **Beech ka sum:** Sₘ − Sₖ = terms (k + 1) se m tak. Aur **Sₙ − Sₙ₋₁ = aₙ** (GP mein bhi).
- Compound interest ke amounts GP hain, par sawaal ka jawab **aₙ** hota hai, Sₙ nahi.
- **Galti 1:** r < 1 par numerator aur denominator ke sign mel mein rakho, warna sum negative aa sakta hai. **Galti 2:** S₉ − S₄ terms 5 se 9 ka sum hai, 4 se 9 ka nahi.
- "Sum to infinity": terms chhote hote jaate hain par sum ka kya hoga, ye aage ki class mein.

---

## Practice Questions

1. Find the sum of the first 6 terms of the GP 3, 9/2, 27/4, ... .

2. Find the sum of the first 4 terms of the GP 7, 21/2, 63/4, ... .

3. Find the sum of the first 7 terms of the GP 2/3, −2, 6, ... . Why is the answer positive even though the terms alternate?

4. Find the sum of the first 6 terms of the GP 40, −120, 360, ... , and check it by using the last term in formula (5).

5. The GP 5, −10, 20, ... has sum −425 for the first n terms. Find n. Explain why n must be an even number.

6. The common ratio of a GP is 1/2 and the sum of its first 6 terms is 315. Find the first term and write all 6 terms.

7. The first term of a GP is 6 and the sum of its first three terms is 126. Find the common ratio. Are there two answers? Write the GP for each.

8. Find the sum of the 6th to the 9th terms of the GP 1/4, 1, 4, ... .

9. A ball bounces to a height of 64 cm after its first bounce, and after each bounce it rises to half of the previous height. Find the sum of the first 7 heights, and explain why this sum can never reach 128 cm however many bounces we add.

10. A student sends a message to 6 friends. Each of them sends it to 6 new people, and so on, and nobody receives it twice. (a) How many messages are sent in 3 rounds altogether? (b) What is the smallest number of rounds after which the total passes 10,000?

11. For a GP the sum of the first n terms is Sₙ = 2(3ⁿ − 1). Find the first term, the common ratio and the 6th term, using aₙ = Sₙ − Sₙ₋₁.

12. State True or False, with a reason: (a) For r = 1, Sₙ = a(rⁿ − 1)/(r − 1) can still be used. (b) For a GP with positive terms and 0 < r < 1, the sum of the first n terms can be negative. (c) S₁₂ − S₅ is the sum of the terms from the 6th to the 12th. (d) For every n ≥ 2, Sₙ − Sₙ₋₁ = aₙ. (e) In the GP 20, 10, 5, 5/2, ... the first term plus the last of 4 terms equals the second plus the third.

13. Compare the AP 12, 18, 24, ... and the GP 12, 18, 27, ... . Find S₄ and S₈ for both, and say which sum is larger at each n.

### Answers

1. a = 3, r = (9/2)/3 = 3/2, n = 6. r > 1, to (3): S₆ = 3 × ((3/2)⁶ − 1)/(3/2 − 1) = 3 × (729/64 − 1) × 2 = 6 × (665/64) = 3990/64 = **1995/32 = 62.34375.** Jaanch: 3 + 4.5 + 6.75 + 10.125 + 15.1875 + 22.78125 = 62.34375 ✅.

2. a = 7, r = (21/2)/7 = 3/2, n = 4. S₄ = 7 × ((3/2)⁴ − 1)/(1/2) = 14 × (81/16 − 1) = 14 × 65/16 = 910/16 = **455/8 = 56.875.** Jaanch: 7 + 10.5 + 15.75 + 23.625 = 56.875 ✅.

3. a = 2/3, r = −2/(2/3) = −3, n = 7. S₇ = (2/3) × ((−3)⁷ − 1)/(−3 − 1) = (2/3) × (−2188)/(−4) = (2/3) × 547 = **1094/3**, lagbhag 364.67. Positive isliye: numerator (−3)⁷ − 1 = −2188 negative aur denominator −4 negative, to jawab positive. Seedha dekho to: 7-wa term a₇ = (2/3) × 729 = 486 positive hai aur wahi baaki sab par bhaari padta hai (Figure 4.4 jaisi baat). Jaanch: (5): (lr − a)/(r − 1) = (486 × (−3) − 2/3)/(−4) = (−4376/3)/(−4) = 1094/3 ✅.

4. a = 40, r = −120/40 = −3, n = 6. S₆ = 40 × ((−3)⁶ − 1)/(−4) = 40 × 728/(−4) = 40 × (−182) = **−7280.** Jaanch: a₆ = 40 × (−3)⁵ = −9720, (5): (−9720 × (−3) − 40)/(−4) = (29160 − 40)/(−4) = −7280 ✅. Jodiyaan se bhi: (40 − 120) + (360 − 1080) + (3240 − 9720) = −80 − 720 − 6480 = −7280 ✅.

5. a = 5, r = −2. Sₙ = 5 × ((−2)ⁿ − 1)/(−3) = 5(1 − (−2)ⁿ)/3. Ise −425 ke barabar rakho: 1 − (−2)ⁿ = −425 × 3/5 = −255, to (−2)ⁿ = 256. 256 positive hai, aur (−2)ⁿ positive tab hi aata hai jab n even ho, to n even hona chahiye. 2⁸ = 256, to **n = 8.** Jaanch: jodiyaan (5 − 10) + (20 − 40) + (80 − 160) + (320 − 640) = −5 − 20 − 80 − 320 = −425 ✅.

6. r = 1/2, n = 6, S₆ = 315. (4): S₆ = a × (1 − 1/64)/(1/2) = a × 63/32 = 315, to a = 315 × 32/63 = 5 × 32 = **160.** Terms: 160, 80, 40, 20, 10, 5. Jaanch: 160 + 80 + 40 + 20 + 10 + 5 = 315 ✅.

7. a = 6, S₃ = 6(1 + r + r²) = 126, to 1 + r + r² = 21, r² + r − 20 = 0, (r − 4)(r + 5) = 0, **r = 4 ya r = −5.** Haan, do answers hain. r = 4 par GP 6, 24, 96; r = −5 par GP 6, −30, 150. Jaanch: 6 + 24 + 96 = 126 ✅ aur 6 − 30 + 150 = 126 ✅.

8. a = 1/4, r = 4. Terms 6 se 9: S₉ − S₅. S₉ = (1/4)(4⁹ − 1)/3 = 262143/12 = 21845.25, S₅ = (1/4)(4⁵ − 1)/3 = 1023/12 = 85.25. **Sum = 21845.25 − 85.25 = 21760.** (Dhyan: S₅ hataya, to 6-wen term se shuru hota hai.) Jaanch: a₆ = (1/4) × 4⁵ = 256, to terms 256, 1024, 4096, 16384, aur 256 + 1024 + 4096 + 16384 = 21760 ✅.

9. a = 64, r = 1/2, n = 7. (4): S₇ = 64 × (1 − 1/128)/(1/2) = 128 × (127/128) = **127 cm.** Jaanch: 64 + 32 + 16 + 8 + 4 + 2 + 1 = 127 ✅. Story check: har naye term ko jodne se sum 128 ke aur paas jaata hai (127, phir 127.5, ...), par kisi bhi n par Sₙ = 128 × (1 − 1/2ⁿ) hota hai, jo 128 se hamesha thoda chhota hai, kyunki 1/2ⁿ kabhi zero nahi hota.

10. a = 6, r = 6. (a) n = 3: S₃ = 6 × (6³ − 1)/5 = 6 × 215/5 = 6 × 43 = **258 messages.** Jaanch: 6 + 36 + 216 = 258 ✅. (b) S₅ = 6 × (6⁵ − 1)/5 = 6 × 7775/5 = 6 × 1555 = 9330, jo 10,000 se kam hai. 6-wen round mein 6⁶ = 46656 aur message jaate hain, to S₆ = 9330 + 46656 = 55986, jo 10,000 se zyada hai. To **6 round** chahiye. Jaanch: S₆ = 6 × (46656 − 1)/5 = 6 × 9331 = 55986 ✅. Story check: ye model hai (asli mein kai log message dobara paate hain).

11. S₁ = 2(3 − 1) = 4, to a = **4.** a₂ = S₂ − S₁ = 2(9 − 1) − 4 = 16 − 4 = 12, to r = 12/4 = 3. Poora: aₙ = Sₙ − Sₙ₋₁ = 2(3ⁿ − 3ⁿ⁻¹) = 2 × 3ⁿ⁻¹ × (3 − 1) = 4 × 3ⁿ⁻¹, to GP 4, 12, 36, ... aur **r = 3.** a₆ = 4 × 3⁵ = **972.** Jaanch: S₆ − S₅ = 2(729 − 1) − 2(243 − 1) = 1456 − 484 = 972 ✅.

12. (a) **False** ❌. r = 1 par r − 1 = 0, 0 se divide nahi hota; r = 1 par Sₙ = na use karo. (b) **False** ❌. Positive terms ka jod positive hota hai: r < 1 par (rⁿ − 1) aur (r − 1) dono negative hain, to Sₙ positive (Galti 1). (c) **True** ✅. S₁₂ − S₅ terms 6 se 12 ka sum hai (Galti 2). (d) **True** ✅. Example 12 mein dikhaya (S₁ = a alag). (e) **False** ❌. 20 + 5/2 = 22.5 aur 10 + 5 = 15, barabar nahi: ye AP wali baat hai, GP mein jodiyon ka jod barabar nahi hota (Part A).

13. AP 12, 18, 24, ...: a = 12, d = 6. S₄ = (4/2)[24 + 3 × 6] = 2 × 42 = 84. S₈ = (8/2)[24 + 7 × 6] = 4 × 66 = 264. GP 12, 18, 27, ...: a = 12, r = 3/2. S₄ = 12 × ((3/2)⁴ − 1)/(1/2) = 24 × (65/16) = 97.5. S₈ = 24 × ((3/2)⁸ − 1) = 24 × (6561/256 − 1) = 24 × 6305/256 = 18915/32 = 591.09375. **n = 4: GP bada (97.5 > 84); n = 8: GP aur bhi bada (591.09 > 264).** Dono 12, 18 se shuru hote hain, par teesra term AP mein 24 aur GP mein 27 hai, aur uske baad GP ke terms bahut tezi se aage nikalte jaate hain. Jaanch: GP ke terms 12, 18, 27, 40.5: 12 + 18 + 27 + 40.5 = 97.5 ✅ aur AP 12 + 18 + 24 + 30 = 84 ✅.

---

Shabaash! Ab tum kisi bhi GP ke pehle n terms ko "r se guna karo aur ghatao" ki chaal se jod sakte ho, shatranj ke daano ka hisaab laga sakte ho, aur ye bhi jaanch sakte ho ki Sₙ ka sign aur kahani dono jawab se mel khate hain ya nahi.

**Aage kya?** Topic 5 mein hum is poore chapter ko jodkar practice karenge: kab aₙ, kab Sₙ, kab a/r, a, ar, aur kab AP aur GP mein farak karna hai, aur chapter ka saar bhi ek jagah milega.
