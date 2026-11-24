# Chapter: Geometric Progressions (Part 2)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [geometric-progressions.md](geometric-progressions.md) se aage chalti hai** (wahan Topic 1 mein GP kya hoti hai, common ratio r aur a, ar, ar², ... wala aam roop seekha). Chapter ki shuruaat: [geometric-progressions.md](geometric-progressions.md). AP ka nth term: [arithmetic-progressions-part2.md](../arithmetic-progressions/arithmetic-progressions-part2.md). Simple vs compound interest wali baat: [arithmetic-progressions.md](../arithmetic-progressions/arithmetic-progressions.md). Exponents ke laws (Class 9): [number-systems-part6.md](../../../class9/maths/number-systems/number-systems-part6.md). Growth factor (Class 9): [compound-interest-part3.md](../../../class9/maths/compound-interest/compound-interest-part3.md).
> **Topics covered in this file:**
> 2. nth Term Of A GP: aₙ = a rⁿ⁻¹

---

# Topic 2: nth Term Of A GP: aₙ = a rⁿ⁻¹

Topic 1 mein humne dekha ki GP aisi list hai jisme har term apne pichhle term ko **ek hi fixed number r se guna** karke milta hai, aur uska aam roop a, ar, ar², ar³, ... hota hai. Par agar 10ven ya 40ven term chahiye, to kya ek-ek karke guna karte jayein? Is topic mein ek chhota sa formula banayenge jo seedha **kisi bhi position ka term** de dega. Wahi formula ulta bhi chalega: term se position, term se a ya r, aur ek finite GP mein terms ki ginti ya aakhir se term nikalne mein.

---

## Mukul, Nana ka talaab aur jalkumbhi ka patch

Mukul chhutti mein Nana ke gaon gaya. Gaon ke chhote talaab (lagbhag 4,500 m² ka) mein ek jalkumbhi (water hyacinth) ka patch tairta tha. Nana ne kaha, "Beta, aaj iska area 7 m² hai. Ye paudha bahut tez phailta hai: **har hafte apne area ka teen guna** ho jaata hai." (Asli paudhe hamesha itni saaf raftaar se nahi badhte, par kahani ke liye maan lete hain.)

Mukul ne copy mein likha:

Hafta 1: 7 m². Hafta 2: 7 × 3 = 21 m². Hafta 3: 21 × 3 = 63 m². Hafta 4: 63 × 3 = 189 m².

Nana muskuraaye, "Ab bata, **10ven hafte** mein kitna area hoga?" Mukul ne ginti ki: chhe aur baar guna karna padega... aur agar Nana poochhein ki 40ven hafte mein? 39 baar guna! Mukul ne copy band kar di, "Nana, koi shortcut hai kya?"

Hai, aur wo shortcut Topic 1 mein hi chhupa tha: **a, ar, ar², ar³, ...** ko dhyan se dekho, power hamesha position se **ek kam** hai. Wahi aaj ka formula hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Kadam ginti (n − 1)** | Pehle term se n-ve term tak pahunchne mein r se kitni baar guna karna padta hai. Pehle term se shuru karte hain, to guna n − 1 baar hota hai, n baar nahi. | a₆ tak 5 baar guna |
| **aₙ = a rⁿ⁻¹** | GP ke n-ve term ka formula: pehla term a, ratio r ki power (n − 1). | 7, 21, 63, ... mein a₅ = 7 × 3⁴ |
| **Ulta GP** | Finite GP ko aakhri term se pehle term tak ulta likhna. Naye GP ka ratio purane ratio ka ulta (1/r) hota hai. | 27, 18, 12 (r = 2/3) ka ulta 12, 18, 27 (r = 3/2) |
| **Term hai ya nahi** | Koi number GP ka term tab hai jab aₙ = a rⁿ⁻¹ mein n ka jawab poora aur positive ho. | 20480 ek term hai (n = 9), 3000 nahi (Part C) |
| **Exponential expression** | Aisa expression jisme n **power (ghaat) mein** ho, jaise 7 × 3ⁿ⁻¹. | aₙ = 7 × 3ⁿ⁻¹ |

---

## Pichhle topics se yaad

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [Topic 1](geometric-progressions.md) | GP, common ratio r = aₙ₊₁/aₙ, aam roop a, ar, ar², ... | Poore topic mein: a aur r ko pehchanna |
| [AP, Topic 2](../arithmetic-progressions/arithmetic-progressions-part2.md) | aₙ = a + (n − 1)d: "d ko n − 1 baar jodna" | Part A: wahi soch, bas jodne ki jagah guna |
| [Class 9, number systems, Topic 6](../../../class9/maths/number-systems/number-systems-part6.md) | Same base ko guna karo to exponents jodo; a⁰ = 1; a⁻ᵖ = 1/aᵖ | Part A, C, E: r ko baar-baar guna aur r ki power ghatana |
| [Class 9, compound interest, Topic 3](../../../class9/maths/compound-interest/compound-interest-part3.md) | Growth factor 1 + R/100 aur A = P(1 + R/100)ⁿ | Part F: saalana amounts ka GP |
| [AP, Topic 1, Part G](../arithmetic-progressions/arithmetic-progressions.md) | Simple interest AP hai, compound interest ke amounts AP nahi; "Chapter 5 naam dega" | Part F: ab hum us wade ko poora karte hain |

---

## Part A: Formula banate hain (r ko n − 1 baar guna)

Terms ko ek table mein likhte hain. Dhyan do ki har term mein r kitni baar laga hai.

| Position | Term | Pehle term se kitni baar r se guna? |
|---|---|---|
| 1 | a₁ = a | 0 baar |
| 2 | a₂ = a × r = ar | 1 baar |
| 3 | a₃ = ar × r = ar² | 2 baar |
| 4 | a₄ = ar² × r = ar³ | 3 baar |
| 5 | a₅ = ar³ × r = ar⁴ | 4 baar |
| 6 | a₆ = ar⁴ × r = ar⁵ | 5 baar |

```
term:     a₁        a₂        a₃        a₄        a₅        a₆
value:    a         a r       a r²      a r³      a r⁴      a r⁵
guna:               ×r        ×r        ×r        ×r        ×r
jumps:    0         1         2         3         4         5
```

> **Figure 2.1** – Chhe terms aur unke beech ke jumps. Pehle term a par koi guna nahi hua, isliye a₆ tak sirf 5 jumps (5 baar ×r) hain, 6 nahi.

Pattern saaf hai: **r ki power hamesha position se ek kam hai.** a₆ mein r⁵, a₄ mein r³. To n-ve term mein r ko (n − 1) baar guna padega, aur r ko n − 1 baar khud se guna karne ka matlab (Class 9 ka exponents wala rule) rⁿ⁻¹ hai:

> **aₙ = a rⁿ⁻¹**

**"Kyun n − 1?"** Ek seedhi si misaal: 6 khambon par 5 hi gap hote hain. Terms 6 hain, par ek term se doosre tak ke jumps 5 hi hote hain. Jahan se shuru karte ho (pehla term), wahan khud ek guna nahi lagta.

**AP se tulna.** AP mein aₙ = a + (n − 1)d: n − 1 baar **d jodte** the. GP mein aₙ = a rⁿ⁻¹: n − 1 baar **r se guna** karte hain. Soch ek hi hai (n − 1 jumps), bas jump ka tareeka alag hai: AP mein jodna, GP mein guna.

---

## Part B: Term nikalna (a, r aur n diya ho)

### Example 1: Nana ka talaab (7, 21, 63, ...)

Jalkumbhi ka area a = 7, r = 3. (a) 6ve hafte ka area. (b) Kya talaab 7ve hafte tak bhar jaata hai?

```
Hafta 1  #                           7 m²
Hafta 2  ###                         21 m²
Hafta 3  #########                   63 m²
Hafta 4  ########################### 189 m²
```

> **Figure 2.2** – Pehle chaar hafton ka area. Ek # = 7 m². Har bar pichhli bar se teen guna lambi hai: 1, 3, 9, 27 hashes.

**(a)** a₆ = a r⁵ = 7 × 3⁵ = 7 × 243 = **1701 m²**

**(b)** a₇ = 7 × 3⁶ = 7 × 729 = 5103 m². Talaab sirf 4,500 m² ka hai, aur 5103 > 4500. To 7ve hafte tak talaab poori tarah dhak jaata hai (asal mein area 4,500 par ruk jaayega, 5103 tak nahi jaa sakta).

**Jaanch:** 7 → 21 → 63 → 189 → 567 → 1701, yaani paanch baar ×3 karke a₆ = 1701 ✅

**Story check:** hafta ka number poora aur positive hai. 6ve hafte tak area 1701 m² (< 4,500 m²), to kahani mein baith raha hai. 7ve hafte ka 5103 talaab mein nahi aa sakta, isliye model wahan rukta hai.

### Example 2: a = 5/16, r = 4

GP 5/16, 5/4, 5, ... ka 7vaan term nikalo.

Pehle r pakka karo: (5/4) ÷ (5/16) = 4, aur 5 ÷ (5/4) = 4. To r = 4.

a₇ = (5/16) × 4⁶ = (5/16) × 4096 = 5 × (4096 ÷ 16) = 5 × 256 = **1280**

**Jaanch:** a₃ = 5 hai. Ab chaar baar ×4: 5 → 20 → 80 → 320 → 1280. a₇ = 1280 ✅

### Example 3: negative ratio (16/9, −8/3, 4, ...)

r = (−8/3) ÷ (16/9) = (−8/3) × (9/16) = −3/2. Check: 4 ÷ (−8/3) = −3/2 bhi hai. Chhe aur saatvaan term nikalo.

a₆ = (16/9) × (−3/2)⁵ = (16/9) × (−243/32) = −(16 × 243)/(9 × 32) = −3888/288 = **−27/2**

a₇ = (16/9) × (−3/2)⁶ = (16/9) × (729/64) = **81/4**

**Sign ka pattern:** (−3/2)ⁿ⁻¹ ka sign dekho. n − 1 **even** ho (n odd) to power positive, n − 1 **odd** ho (n even) to power negative.

| n | n − 1 | (−3/2)ⁿ⁻¹ ka sign | aₙ ka sign |
|---|---|---|---|
| 1, 3, 5, 7 | 0, 2, 4, 6 (even) | + | + |
| 2, 4, 6, 8 | 1, 3, 5, 7 (odd) | − | − |

Yaani a₆ negative aur a₇ positive aana hi chahiye, aur wahi aaya.

**Jaanch:** list 16/9, −8/3, 4, −6, 9, −27/2, 81/4 (har baar ×(−3/2)): chhe-ve par −27/2 ✅, saat-ve par 81/4 ✅

---

## Part C: "Kaunsa term hai?" aur "Term hai bhi ya nahi?"

Ab formula ulta chalayenge: term diya hai, n ke liye hal karte hain. Trick: aₙ = a rⁿ⁻¹ se **rⁿ⁻¹ = aₙ/a** nikalo, phir dekho ki ye r ki kaunsi power hai. Power jab poori aur positive ho tabhi n sahi hai.

### Example 4: GP 5/16, 5/4, 5, ... (r = 4)

**(a)** 20480 kaunsa term hai? **(b)** Kya 3000 is GP ka term hai?

**(a)** (5/16) × 4ⁿ⁻¹ = 20480 ⇒ 4ⁿ⁻¹ = 20480 × 16/5 = 4096 × 16 = 65536. Ab 4 ki powers: 4, 16, 64, 256, 1024, 4096, 16384, 65536, yaani 65536 = 4⁸. To n − 1 = 8, **n = 9**.

**Jaanch:** Example 2 se a₇ = 1280. Do aur baar ×4: a₈ = 5120, a₉ = 20480 ✅

**(b)** (5/16) × 4ⁿ⁻¹ = 3000 ⇒ 4ⁿ⁻¹ = 3000 × 16/5 = 9600. 4⁶ = 4096 aur 4⁷ = 16384, aur 9600 in dono ke **beech** hai. Koi poora n − 1 4ⁿ⁻¹ = 9600 nahi deta, to **3000 term nahi hai.**

**Jaanch:** a₇ = 1280 aur a₈ = 5120. 3000 inke beech mein padta hai, GP ne use "chhod" diya ✅

### Example 5: tank ka paani (729, 243, 81, ...)

Ek tank mein har din subah ka level pichhle din ke level ka ek-tihai hi bachta hai (baaki khet ko diya jaata hai). Pehle din subah level 729 L, doosre din 243 L, teesre din 81 L. **Kis din subah level 1/81 L hoga?** (1/81 L lagbhag 12 mL, ek chhoti chammach jitna.)

```
Din 1  ########################### 729 L
Din 2  #########                   243 L
Din 3  ###                         81 L
Din 4  #                           27 L
Din 5  .                           9 L
```

> **Figure 2.3** – Subah ka level, ek # = 27 L. Har din ka level pichhle ka ek-tihai hai: 27, 9, 3, 1 hashes. Din 5 (9 L) ek # se bhi chhota hai, isliye sirf ek bindu.

a = 729, r = 1/3. 729 = 3⁶ hai, aur 1/3 = 3⁻¹, to exponents ke rule (same base mein exponents jodte hain) se:

aₙ = 3⁶ × (3⁻¹)ⁿ⁻¹ = 3⁶ × 3^−(n−1) = 3^(7 − n)

Ab 1/81 = 3⁻⁴. To 7 − n = −4, **n = 11.**

**Jaanch:** 729, 243, 81, 27, 9, 3, 1, 1/3, 1/9, 1/27, 1/81. Gino to 1/81 gyarahvaan hai ✅

**Story check:** n = 11 poora aur positive, to 11ve din subah level 1/81 L hoga.

Isi GP mein **1/2 L** kab hoga? 3^(7 − n) = 1/2 chahiye, par 3 ki koi bhi poori power 1/2 nahi deti. To 1/2 is GP ka term nahi hai.

### Example 6: negative r mein term hai ya nahi? (16/9, −8/3, 4, ...)

Kya (a) 81/4 aur (b) −9 is GP ke terms hain? (r = −3/2, Example 3 wali GP.)

**(a)** (16/9)(−3/2)ⁿ⁻¹ = 81/4 ⇒ (−3/2)ⁿ⁻¹ = (81/4) × (9/16) = 729/64 = (3/2)⁶. Yahan (−3/2)⁶ = (3/2)⁶ bhi hai, kyunki 6 even hai. To n − 1 = 6, n = 7. **Haan, a₇ = 81/4** (Example 3 mein mil chuka).

**(b)** (16/9)(−3/2)ⁿ⁻¹ = −9 ⇒ (−3/2)ⁿ⁻¹ = −9 × 9/16 = −81/16. Pehle sirf **size** dekho: (3/2)ⁿ⁻¹ = 81/16 = (3/2)⁴, to n − 1 = 4. Par n − 1 = 4 even hai, aur even power par (−3/2)⁴ = +81/16 aata hai, −81/16 nahi. Size mil gaya par sign nahi mila, isliye **−9 term nahi hai.**

**Jaanch:** even positions (a₂, a₄, a₆) negative hain: −8/3, −6, −27/2. Inme −9 nahi hai. Aur 9 ka size a₅ = 9 hai, jo positive position hai, to −9 baith hi nahi sakta ✅

---

## Part D: a ya r dhundhna (ek baar mein ek unknown)

Formula mein chaar cheezein hain: a, r, n, aₙ. Jab inme se **teen** pata hon, chauthi seedhi nikalti hai.

### Example 7: a nikalo

Kisi GP ka r = 8 aur a₄ = 1536 hai. Pehla term?

a₄ = a r³ ⇒ 1536 = a × 8³ = a × 512 ⇒ a = 1536/512 = **3**

**Jaanch:** 3 → 24 → 192 → 1536 (har baar ×8), chautha term 1536 ✅

### Example 8: r nikalo

Kisi GP ka a = 4/27 aur a₄ = 32 hai. Common ratio?

a₄ = a r³ ⇒ 32 = (4/27) r³ ⇒ r³ = 32 × 27/4 = 216 ⇒ **r = 6** (kyunki 6³ = 216).

(Tisri power ke liye aur koi real r nahi milta. Par agar power even hoti, jaise r⁴ = 1296, to r = 6 aur r = −6 dono chalte. Aise do-do jawab wale sawaal Topic 3 mein aayenge.)

**Jaanch:** 4/27 → 8/9 → 16/3 → 32 (har baar ×6), a₄ = 32 ✅

---

## Part E: Aakhir se term aur terms ki ginti

### Terms ki ginti: rⁿ⁻¹ = l/a

Finite GP ka aakhri term l = aₙ hota hai. To l = a rⁿ⁻¹, yaani **rⁿ⁻¹ = l/a**. r ki power pehchano, to n mil jaata hai.

### Example 9: GP 3/125, 3/25, 3/5, ..., 1875

r = (3/25) ÷ (3/125) = 5. Check: (3/5) ÷ (3/25) = 5 bhi hai.

l = a rⁿ⁻¹ ⇒ 1875 = (3/125) × 5ⁿ⁻¹ ⇒ 5ⁿ⁻¹ = 1875 × 125/3 = 625 × 125 = 78125.

5 ki powers: 5, 25, 125, 625, 3125, 15625, 78125, yaani 78125 = 5⁷. To n − 1 = 7, **n = 8.**

**Jaanch:** 3/125, 3/25, 3/5, 3, 15, 75, 375, 1875. Gino to 8 terms, aakhri 1875 ✅

### Aakhir se k-vaan term (do tareeke)

**Tareeka 1: formula.** Aakhir se pehla term l hai. Ek kadam peechhe jaane par term r se **bhaag** diya jaata hai (kyunki aage jaate waqt r se guna tha). To aakhir se k-vaan term = **l/rᵏ⁻¹**.

**Tareeka 2: ulta GP.** Terms ko ulta likho: l, l/r, l/r², ... ye ek naya GP hai jiska pehla term l aur ratio **1/r** hai. Iska k-vaan term l × (1/r)ᵏ⁻¹ = l/rᵏ⁻¹, wahi cheez.

```
shuru se:   1          2          3          4          5          6          7          8
term:       3/125      3/25       3/5        3          15         75         375        1875
aakhir se:  8          7          6          5          4          3          2          1
```

> **Figure 2.4** – Example 9 ki GP: har term ki position shuru se (upar) aur aakhir se (neeche). Dono positions ka jod hamesha n + 1 = 9 hota hai, jaise 6 aur 3.

### Example 10: aakhir se 3rd term

Example 9 wali GP mein aakhir se 3rd term nikalo.

**Tareeka 1:** l/r² = 1875/5² = 1875/25 = **75**

**Tareeka 2 (ulta GP):** 1875, 375, 75, ... ye GP hai jiska a = 1875 aur ratio 1/5. Teesra term = 1875 × (1/5)² = 1875/25 = **75**

**Jaanch (shuru se gino):** Figure 2.4 mein aakhir se 3rd shuru se 8 − 3 + 1 = 6ve number par hai. a₆ = (3/125) × 5⁵ = (3/125) × 3125 = 3 × 25 = 75 ✅

Ek aur nazar: Example 5 wali finite GP 729, 243, 81, ..., 1/9 lo. rⁿ⁻¹ = l/a = (1/9) ÷ 729 = 1/6561 = (1/3)⁸, to n − 1 = 8, **n = 9**. Aakhir se 4th term = (1/9) ÷ (1/3)³ = (1/9) × 27 = **3**. **Jaanch:** list 729, 243, 81, 27, 9, 3, 1, 1/3, 1/9 mein aakhir se 1/9, 1/3, 1, 3: chautha 3 hai ✅

---

## Part F: aₙ ek exponential expression hai

aₙ = a rⁿ⁻¹ ko aise bhi likh sakte hain: aₙ = (a/r) × rⁿ. Pond wali GP ke liye aₙ = 7 × 3ⁿ⁻¹ = (7/3) × 3ⁿ. Isme **n power mein baitha hai.** Chapter 4 ka AP aₙ = a + (n − 1)d = dn + (a − d) tha, jisme n sirf d se guna hota tha (linear).

Dono ko ek hi jagah se shuru karke dekho (dono ke pehle do terms 7 aur 21 lete hain, par teesre term se raste alag ho jaate hain):

| n | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| AP (a = 7, d = 14) | 7 | 21 | 35 | 49 |
| GP (a = 7, r = 3) | 7 | 21 | 63 | 189 |

AP har baar 14 se badhti hai, GP har baar 3 guna. Isiliye GP ke terms tezi se bahut bade (ya bahut chhote) ho jaate hain.

### Example 11: compound interest ka wada poora hota hai

Chapter 4 ke Part G mein dekha tha ki ₹12,000 par 5% compound interest ke saalana amounts ₹12,600, ₹13,230, ₹13,891.50 the, aur unke differences barabar nahi the (630 aur 661.50), isliye wo AP nahi thi. Par **ratio** dekho: 13,230 ÷ 12,600 = 1.05 aur 13,891.50 ÷ 13,230 = 1.05. Ratio barabar hai, to ye **GP hai**, aur r = 1.05 yaani growth factor (1 + R/100) = 1 + 5/100. (Interest rate ko hum R% likhte hain, taaki common ratio r se na takraye.)

Ab is GP ka formula use karte hain. ₹3,125 par R = 20% (yahan sirf ginti saaf rakhne ke liye 20% maana hai) saalana compound interest, 5 saal. Saal-ant ke amounts?

Growth factor 1 + 20/100 = 6/5, to r = 6/5. Pehle saal ke ant ka amount a₁ = 3125 × 6/5 = 3750.

Amounts: 3750, 4500, 5400, 6480, ... Check: 4500/3750 = 6/5, 5400/4500 = 6/5, 6480/5400 = 6/5.

5 saal ke ant mein a₅ = 3750 × (6/5)⁴ = 3750 × 1296/625 = 6 × 1296 = **₹7,776**.

**Class 9 ke formula se milan:** a₁ = P(1 + R/100), isliye aₙ = P(1 + R/100) × (1 + R/100)ⁿ⁻¹ = P(1 + R/100)ⁿ. Yaani Class 9 ka A = P(1 + R/100)ⁿ asal mein GP ka nth term hi hai. Dekho: 3125 × (6/5)⁵ = 3125 × 7776/3125 = 7776, wahi jawab.

**Jaanch (jodkar nahi, guna karke):** 3750 → 4500 → 5400 → 6480 → 7776, chaar baar ×6/5 ✅

**Story check:** n = 5 saal poora hai, aur saare amounts poore rupaye hain (paise ki zaroorat nahi), to kahani mein theek baithta hai.

**Dhyan:** agar list ko shuru ke ₹3,125 (saal 0) se likho (3125, 3750, 4500, ...), to "5 saal baad" ka amount **chhathaan term** hoga (kyunki 3125 pehla term ban gaya). Position aur "kitne saal" mein ek ka farak aa jaata hai. Isliye hamesha pehle likho ki a₁ kya hai.

---

## Aam galtiyan (bachke rehna)

### Galti 1: aₙ = a rⁿ likhna (ek power zyada)

Ek GP hai 40, 60, 90, 135, ... (r = 3/2). Ek bacche ne chautha term nikalna chaha: "aₙ = a rⁿ, to a₄ = 40 × (3/2)⁴ = 40 × 81/16 = 405/2 = 202.5."

Check karo. List mein chautha term 135 likha hai, 202.5 nahi. Galat formula ko seedha pehle term par aazma lo: n = 1 daalo to a × r¹ = 40 × 3/2 = 60 aata, par pehla term 40 hai. **Pehle term par hi formula toot gaya.**

Sahi: aₙ = a rⁿ⁻¹, to a₄ = 40 × (3/2)³ = 40 × 27/8 = **135**.

**Jaanch:** 40 → 60 → 90 → 135, teen baar ×3/2 karke a₄ = 135 ✅

### Galti 2: AP aur GP ka mixup: a + (n − 1)r ya a × n × r

Ek GP hai 9, 45, 225, ... (r = 5). Teesra term nikalna hai. Do bacchon ne alag-alag galtiyan kiye:

- Pehle ne AP wala formula utha liya: a + (n − 1)r = 9 + 2 × 5 = **19**.
- Doosre ne bas teeno ko guna kar diya: a × n × r = 9 × 3 × 5 = **135**.

Dono galat hain, kyunki list mein a₃ = 225 hai. Do chhote test: n = 2 par pehla formula 9 + 5 = 14 deta hai (asli a₂ = 45), doosra 9 × 2 × 5 = 90 deta hai (asli 45).

Wajah: AP mein n − 1 baar **jodte** hain, GP mein n − 1 baar **r se guna** karte hain, yaani r ko khud se n − 1 baar guna (r ki power), na ki r ko kisi se jodna ya n se guna karna.

Sahi: a₃ = 9 × 5² = 9 × 25 = **225**.

**Jaanch:** 9 → 45 → 225, do baar ×5 karke a₃ = 225 ✅

---

## Quick Recap

- GP ka n-vaan term: **aₙ = a rⁿ⁻¹**. Pehle term a par koi guna nahi, isliye n-ve term tak sirf **n − 1** baar r se guna.
- AP aur GP ek hi soch ("n − 1 jumps"), par AP mein jodte hain (aₙ = a + (n − 1)d), GP mein guna karte hain.
- Position nikalna: **rⁿ⁻¹ = aₙ/a**, phir r ki power pehchano. n poora aur positive aaye tabhi wo number GP ka term hai.
- a ya r nikalna: formula mein teen cheezein pata hon to chauthi seedhi mil jaati hai (ek baar mein ek unknown).
- Negative r: **odd** positions par a wala sign, **even** positions par ulta sign.
- Finite GP mein terms ki ginti: **rⁿ⁻¹ = l/a**. Aakhir se k-vaan term: **l/rᵏ⁻¹** (ya ulta GP jiska ratio 1/r hai).
- aₙ = (a/r) rⁿ ek exponential expression hai (n power mein), jabki AP ka aₙ linear hota hai.
- Compound interest ke saalana amounts GP hain, r = 1 + R/100, aur A = P(1 + R/100)ⁿ wahi nth term formula hai.
- Galtiyan: aₙ = a rⁿ (ek power zyada), aur AP ka a + (n − 1)r ya a × n × r.

---

## Practice Questions

1. Find the 8th term of the GP 13, −26, 52, ...
2. In the GP 64, 16, 4, ..., which term is 1/64?
3. Consider the GP 0.003, 0.03, 0.3, ... (a) Is 30000 a term of it? If yes, which one? (b) Is 0.5 a term of it?
4. For the GP 5/49, −5/7, 5, ..., is 245 a term? Is −245 a term? Give reasons.
5. The common ratio of a GP is −3 and its 5th term is 891. Find the first term.
6. The first term of a GP is 343 and its 4th term is 1000. Find the common ratio and write the first four terms.
7. A finite GP is 1250, 750, 450, ..., 486/5. How many terms does it have? What is its 3rd term from the end?
8. A finite GP is 3200, −1600, 800, ..., 25/2. Find the number of terms and its 4th term from the end.
9. ₹15,625 is invested at R = 8% per annum compound interest. (a) Show that the year-end amounts for the first three years form a GP and name its first term and common ratio. (b) Use the nth term formula to find the amount at the end of 4 years. (c) If someone writes the list as 15625, 16875, 18225, ... (starting with the principal), which term of that list is the 4-year amount?
10. A water tank has 1024 L on the first morning. Every morning it holds 3/4 of the previous morning's level. (a) What is the level on the 4th morning? (b) On which morning does the level first fall below 350 L?
11. The nth term of a sequence is aₙ = 2 × (5/4)ⁿ. Show that it is a GP, find its first term and common ratio, and find a₄. Is aₙ linear in n?
12. True or false, with a one-line reason: (i) In a GP with r < 0, all odd-position terms have the same sign as a. (ii) The 20th term of the GP a, ar, ar², ... is a r²⁰. (iii) If every term of a GP is positive, then r must be positive. (iv) The k-th term from the end of a finite GP with last term l and ratio r is l ÷ rᵏ⁻¹.

### Answers

1. a = 13, r = −26/13 = −2. a₈ = 13 × (−2)⁷ = 13 × (−128) = **−1664**.
   Jaanch: 13, −26, 52, −104, 208, −416, 832, −1664 (har baar ×(−2)), aathvaan term −1664 ✅

2. a = 64 = 4³, r = 16/64 = 1/4 = 4⁻¹. aₙ = 4³ × 4^−(n−1) = 4^(4 − n). 1/64 = 4⁻³, to 4 − n = −3, **n = 7**.
   Jaanch: 64, 16, 4, 1, 1/4, 1/16, 1/64. Gino to saatvaan term 1/64 hai ✅

3. a = 0.003, r = 0.03/0.003 = 10.
   (a) 0.003 × 10ⁿ⁻¹ = 30000 ⇒ 10ⁿ⁻¹ = 30000/0.003 = 10,000,000 = 10⁷ ⇒ n − 1 = 7, **n = 8**. Haan, 30000 aathvaan term hai.
   (b) 10ⁿ⁻¹ = 0.5/0.003 = 500/3, jo 10 ki koi poori power nahi hai (10 ki powers 1, 10, 100, ... hain). **0.5 term nahi hai.**
   Jaanch: 0.003, 0.03, 0.3, 3, 30, 300, 3000, 30000, aathvaan 30000 ✅. 0.5 to 0.3 aur 3 ke beech hai, par list ne use chhod diya ✅

4. a = 5/49, r = (−5/7) ÷ (5/49) = −7. Check: 5 ÷ (−5/7) = −7 bhi hai.
   Size dekho: (5/49) × 7ⁿ⁻¹ = 245 ⇒ 7ⁿ⁻¹ = 245 × 49/5 = 2401 = 7⁴ ⇒ n − 1 = 4 (even).
   245: (−7)⁴ = +2401, to aₙ = +245. **Haan, 245 = a₅ hai.**
   −245: size ke liye wahi n − 1 = 4, par (−7)⁴ positive hai, negative nahi. **−245 term nahi hai.**
   Jaanch: 5/49, −5/7, 5, −35, 245 (har baar ×(−7)), paanchva term +245 ✅, even positions mein sirf negative numbers −5/7, −35, ... aate hain, −245 nahi ✅

5. a₅ = a r⁴ ⇒ 891 = a × (−3)⁴ = a × 81 ⇒ a = 891/81 = **11**.
   Jaanch: 11, −33, 99, −297, 891 (har baar ×(−3)), paanchva term 891 ✅

6. a₄ = a r³ ⇒ 1000 = 343 r³ ⇒ r³ = 1000/343 = (10/7)³ ⇒ **r = 10/7**. Terms: 343, 343 × 10/7 = 490, 490 × 10/7 = 700, 700 × 10/7 = 1000.
   Jaanch: chautha term 343 × (10/7)³ = 343 × 1000/343 = 1000 ✅

7. a = 1250, r = 750/1250 = 3/5. Check: 450/750 = 3/5 bhi hai. l = 486/5.
   (3/5)ⁿ⁻¹ = l/a = (486/5)/1250 = 486/6250 = 243/3125 = (3/5)⁵ ⇒ n − 1 = 5, **n = 6**.
   Aakhir se 3rd term = l/r² = (486/5) ÷ (9/25) = (486/5) × (25/9) = **270**.
   Jaanch: 1250, 750, 450, 270, 162, 486/5. Gino to 6 terms; aakhir se 3rd (486/5, 162, 270) yaani 270 ✅

8. a = 3200, r = −1600/3200 = −1/2. Check: 800/(−1600) = −1/2 bhi hai. l = 25/2.
   (−1/2)ⁿ⁻¹ = l/a = (25/2)/3200 = 25/6400 = (1/2)⁸ (kyunki 6400 = 25 × 2⁸). Size n − 1 = 8, aur 8 even hai to (−1/2)⁸ positive hai, sign bhi theek. **n = 9.**
   Aakhir se 4th term = l/r³ = (25/2) ÷ (−1/8) = (25/2) × (−8) = **−100**.
   Jaanch: 3200, −1600, 800, −400, 200, −100, 50, −25, 25/2. Gino to 9 terms; aakhir se 25/2, −25, 50, −100, yaani chautha −100 ✅

9. (a) Growth factor 1 + 8/100 = 27/25. Pehle teen saal ke ant ke amounts: 15625 × 27/25 = 16875, 16875 × 27/25 = 18225, 18225 × 27/25 = 19683. Ratios: 18225/16875 = 27/25 aur 19683/18225 = 27/25, barabar hain, to **GP hai: a = 16875, r = 27/25.**
   (b) a₄ = 16875 × (27/25)³ = 16875 × 19683/15625 = 1.08 × 19683 = **₹21,257.64** (paise tak).
   (c) Principal wali list mein 15625 pehla term hai, to saal 0 = 1st term, saal 4 = **5th term**.
   Jaanch: 19683 × 27/25 = 19683 × 1.08 = 21257.64 ✅. Class 9 formula: 15625 × (27/25)⁴ = 15625 × 531441/390625 = 531441/25 = 21257.64 ✅
   Story check: n = 4 poora, amount paise tak sahi hai (rupaye aur 2 decimal).

10. a = 1024, r = 3/4.
    (a) a₄ = 1024 × (3/4)³ = 1024 × 27/64 = 16 × 27 = **432 L**.
    (b) a₅ = 1024 × (3/4)⁴ = 1024 × 81/256 = 4 × 81 = 324 L. a₄ = 432 > 350 aur a₅ = 324 < 350, to **5ve din subah** level pehli baar 350 L se neeche jaata hai.
    Jaanch: 1024 → 768 → 576 → 432 → 324 (har baar ×3/4), chautha 432 ✅, paanchva 324 ✅
    Story check: din poora aur positive hai, levels sahi aur kam hote ja rahe hain.

11. a₁ = 2 × 5/4 = 5/2, a₂ = 2 × 25/16 = 25/8, a₃ = 2 × 125/64 = 125/32. Ratios: (25/8) ÷ (5/2) = 5/4 aur (125/32) ÷ (25/8) = 5/4. aₙ₊₁/aₙ = [2 × (5/4)ⁿ⁺¹]/[2 × (5/4)ⁿ] = 5/4 har n ke liye, to **GP hai, a = 5/2, r = 5/4**. a₄ = 2 × (5/4)⁴ = 2 × 625/256 = **625/128**.
    aₙ mein n power mein hai, to ye **linear nahi** (exponential hai); linear aₙ ke terms barabar differences se badhte hain, yahan differences 25/8 − 5/2 = 5/8 aur 125/32 − 25/8 = 25/32 hain, barabar nahi.
    Jaanch: a₄ = a₃ × 5/4 = (125/32) × (5/4) = 625/128 ✅ aur a rⁿ⁻¹ roop se (5/2)(5/4)³ = (5/2)(125/64) = 625/128 ✅

12. (i) **True** ✅: odd position par n − 1 even hota hai, to rⁿ⁻¹ positive hai aur aₙ = a × (positive) ka sign a wala hi rehta hai.
    (ii) **False** ❌: 20ve term mein r ki power 19 hai, a r¹⁹ hona chahiye, r²⁰ nahi.
    (iii) **True** ✅: r = a₂/a₁ aur dono positive hain, to r positive hi hoga.
    (iv) **True** ✅: aakhir se pehla term l hai, aur har kadam peechhe jaane par r se bhaag dena padta hai, to k-vaan term l/rᵏ⁻¹ hai.

---

Ab 10ven ya 40ven term nikalne ke liye ek-ek kar ke guna karne ki zarurat nahi, bas a aur r pakke karo aur aₙ = a rⁿ⁻¹ lagao. Tum dekhoge ki jaise AP mein n − 1 baar d jodte the, yahan bhi n − 1 baar r se guna hota hai, aur wahi ek chhota sa "n − 1" tumhe har sawaal mein bachayega.

**Aage kya?** Topic 3 mein tum ek nayi paheli suljhaoge: GP ke sirf do terms diye hain, to poora GP kaise banega? Aur teen numbers ko GP mein rakhne ki kuch aur paheliyan bhi milengi.
