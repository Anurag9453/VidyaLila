# Chapter: Section Formula and Reflection

> **Class:** 10 | **Subject:** Mathematics
> **Ye Class 10 Maths ka Chapter 10 hai.** Pichhla chapter (Chapter 9, Similar Triangles) ka aakhri topic: [similar-triangles-part6.md](../similar-triangles/similar-triangles-part6.md). Is topic ke kaam aane wale auzaar: parallel line aur BPT [similar-triangles-part2.md](../similar-triangles/similar-triangles-part2.md), AA test [similar-triangles-part3.md](../similar-triangles/similar-triangles-part3.md), ratio [ratio-and-proportion.md](../ratio-and-proportion/ratio-and-proportion.md). Class 9 se: mid-point [distance-formula-part4.md](../../../class9/maths/distance-formula/distance-formula-part4.md) aur distance [distance-formula.md](../../../class9/maths/distance-formula/distance-formula.md).
> **Topics covered in this file:**
> 1. Beech Ka Point: Section Formula

---

# Topic 1: Beech Ka Point: Section Formula

Chapter 9 mein tumne similar triangles aur BPT seekhe: ek parallel line triangle ki do sides ko ek hi ratio mein kaat deti hai, aur AA test se do triangles similar nikalte hain. Chapter 7 mein ratio ki bhasha aayi thi: a : b ka matlab "kitna guna ya kitna hissa", aur ratio mein order maayne rakhta hai. Aur Class 9 mein coordinates par ek chhota sa formula mila tha: do points ka mid-point, yaani theek **aadhe** raste ka point. Ab ek sawaal uthta hai: agar point theek aadhe par nahi, kisi aur **hisse** par ho, to uske coordinates kaise nikalenge? Ye topic usi sawaal ka jawab hai, aur jawab ke raaste mein Chapter 9 ke auzaar hi kaam aayenge.

---

## Dnyaneshwar ka drone

Dnyaneshwar ko Didi ne ek chhota sa khilona drone gift kiya. Usne school ke maidan ka grid map banaya, jisme **1 unit = 10 m** hai. Launch pad A map par (1, 4) par hai aur landing pad B (11, 9) par. Drone A se seedha B tak udega.

Papa ne kaha, "Ek chhota seeds ka packet bhi bhejte hain. Par B tak nahi: usse raste ke **2 : 3** wale point par girana hai, yaani A se 2 hissa chalne ke baad aur B se 3 hissa pehle." (Drone khule maidan mein, bade ki nigrani mein aur logon se door hi udaya jaata hai.)

Dnyaneshwar ne map dekha. Mid-point wala formula use karta, to wo theek aadhe par girata, par yahan "aadha" nahi, "2 : 3" hai. "To is point ke coordinates kaise nikaalun?" usne socha.

```
 y
10 :  .  .  .  .  .  .  .  .  .  .  .  .
 9 :  .  .  .  .  .  .  .  .  .  .**B  .
 8 :  .  .  .  .  .  .  .  .**.**.  .  .
 7 :  .  .  .  .  .  .**.**.  .  .  .  .
 6 :  .  .  .  .**.**.  .  .  .  .  .  .
 5 :  .  .**.**.  .  .  .  .  .  .  .  .
 4 :  A**.  .  .  .  .  .  .  .  .  .  .
 3 :  .  .  .  .  .  .  .  .  .  .  .  .
 2 :  .  .  .  .  .  .  .  .  .  .  .  .
 1 :  .  .  .  .  .  .  .  .  .  .  .  .
 0 +------------------------------------  x
   0  1  2  3  4  5  6  7  8  9 10 11 12
```

> **Figure 1.1** – Dnyaneshwar ka map (1 unit = 10 m). Is chapter ke sab figures mein y-axis colon (:) se, x-axis dash (-) se aur origin + se dikhaya jaata hai; chhote dot grid ke crossings hain aur har point apne crossing par ek letter se likha hai. Launch pad A(1, 4) aur landing pad B(11, 9); beech ki * wali lakeer drone ka seedha raasta hai. Parcel ka point abhi nahi pata. Figure naap ke hisaab se nahi hai (not to scale).

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Section formula** | Wo formula jo segment ko diye gaye ratio mein baantne wale point ke coordinates deta hai | A(1, 4) aur B(11, 9) ko 2 : 3 mein baantne wala point (5, 6) |
| **P, AB ko m : n mein baantta hai** | P segment AB par hai aur AP : PB = m : n. Pehla number m, pehle point A ki taraf wale tukde AP ka hai. Dono tukde mil kar poora AB banate hain | AP : PB = 2 : 3 |
| **Andar se (internally)** | P, A aur B ke beech mein hi hai, segment AB ke upar | Drone ka packet raste mein girta hai, raste ke bahar nahi |
| **Trisection points** | Segment ke wo do points jo use 3 barabar tukdon mein baantte hain | AB ke 1 : 2 aur 2 : 1 wale point |
| **Cross rule** | Section formula yaad rakhne ka tareeka: ratio ka pehla number m door wale point B ke coordinate ke saath guna hota hai, doosra number n A ke coordinate ke saath | x = (m x₂ + n x₁) / (m + n) |

---

## Class 9 aur pichhle chapters se yaad

- **Mid-point** ([distance-formula-part4.md](../../../class9/maths/distance-formula/distance-formula-part4.md)): "Do numbers ka mid-point unka **average** hai", aur coordinates ke liye "x ka average, y ka average", yaani M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2). Aaj ka formula isi ka bada roop hai.
- **Distance formula** ([distance-formula.md](../../../class9/maths/distance-formula/distance-formula.md)): d = √[(x₂ − x₁)² + (y₂ − y₁)²]. Isse hum har answer ki Jaanch karenge.
- **BPT** ([similar-triangles-part2.md](../similar-triangles/similar-triangles-part2.md)): DE ∥ BC ho to AD : DB = AE : EC. **AA test** ([similar-triangles-part3.md](../similar-triangles/similar-triangles-part3.md)): do angle barabar hon to triangles similar.
- **Ratio** ([ratio-and-proportion.md](../ratio-and-proportion/ratio-and-proportion.md)): a : b ek fraction a/b hai, order maayne rakhta hai, aur cross-multiply se barabar ratios tulte hain.

---

## Part A: Pehle number line par (kyun?)

Naya formula seedha map par sochne se pehle, ek seedhi lakeer par sochte hain, jahan sirf ek number lagta hai.

Number line par A = 2 aur B = 14 lo. P, AB ko **1 : 3** mein baantta hai, yaani AP : PB = 1 : 3. Poora raasta 1 + 3 = 4 barabar hisson ka hai. AB = 14 − 2 = 12, to ek hissa 12 / 4 = 3 ka hua. P, A se **1 hissa** door hai: P = 2 + 3 = **5**.

```
      A        P                          B
+--+--*--+--+--*--+--+--+--+--+--+--+--+--*--+
0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
```

> **Figure 1.2** – Number line par A = 2, B = 14 aur P = 5. AP = 3 aur PB = 9, to AP : PB = 1 : 3. Figure naap ke hisaab se nahi hai.

Isi ko ek formula ki tarah likhte hain. m : n mein poora raasta m + n hisson ka hai, aur P, A se **m hisse** door hai, yaani A se raste ka m / (m + n) hissa:

P = a + (m / (m + n)) × (b − a)

(yahan A = a aur B = b). Ise simplify karo:

P = [a(m + n) + m(b − a)] / (m + n) = [m b + n a] / (m + n)

> **Number line par:** P = (m b + n a) / (m + n)

Check: m = 1, n = 3, a = 2, b = 14 lo. P = (1 × 14 + 3 × 2) / 4 = 20 / 4 = 5, bilkul upar jaisa.

**Jaanch:** AP = 5 − 2 = 3 aur PB = 14 − 5 = 9, to AP : PB = 3 : 9 = 1 : 3 ✅

Ek cheez dhyan se dekho: **b** (door wale sire) ke saath **m** guna hua aur **a** ke saath **n**. Ye "ulta" lagta hai, par iska kyun neeche Part C mein hai.

---

## Part B: Ab map par: section formula

Map par ek point ke do number hote hain, x aur y. Drone A se B tak seedhi (tirchhi) lakeer par udta hai. Hum dikhayenge ki x par bhi wahi "m / (m + n) hissa" wala kaam hota hai, aur y par bhi.

**Given:** A(x₁, y₁) aur B(x₂, y₂). P(x, y) segment AB par hai aur AP : PB = m : n.

**Picture:** Is derivation ke liye wo picture lete hain jisme x₁ < x₂ aur y₁ < y₂ (Dnyaneshwar ke drone jaisa: B, A se right aur upar).

**Construction:** A se ek horizontal line aur B se ek vertical line kheencho; wo C(x₂, y₁) par milti hain. P se ek vertical line kheencho jo AC ko Q(x, y₁) par kaatti hai.

```
                              **B
                       *******  !
                  *****         !
           ***P***              !
      *****   !                 !
  A-----------Q-----------------C
```

> **Figure 1.3** – Ek general picture (yahan axes nahi dikhaye; * lakeer AB hai, seedhi khadi lakeeren ! se dikhayi hain). A(x₁, y₁), B(x₂, y₂), C(x₂, y₁), Q(x, y₁), P(x, y). AC horizontal hai, CB aur QP vertical hain. Figure naap ke hisaab se nahi hai.

**Step 1:** PQ aur BC dono vertical hain, to **PQ ∥ BC**. Triangle ACB mein ye line side AB ko P par aur side AC ko Q par kaatti hai.

**Step 2:** Chapter 9 ka **BPT** (Topic 2) kehta hai: AQ : QC = AP : PB = m : n.

(Isi ko AA test se bhi dekh sakte ho: ΔAQP aur ΔACB mein ∠A common hai aur ∠AQP = ∠ACB = 90°, to AA se ΔAQP ~ ΔACB. Isse AQ / AC = AP / AB = m / (m + n): wahi "m / (m + n) hissa" jo number line par mila tha.)

**Step 3:** AQ aur QC horizontal hain, to unki lambai x ke farak se milti hai: AQ = x − x₁ aur QC = x₂ − x. To

(x − x₁) / (x₂ − x) = m / n

**Step 4:** Cross-multiply: n(x − x₁) = m(x₂ − x), yaani nx − n x₁ = m x₂ − m x. x wali cheezein ek taraf karo: x(m + n) = m x₂ + n x₁.

> **x = (m x₂ + n x₁) / (m + n)**

**y ke liye:** P se ek horizontal line kheencho; wo CB ko R(x₂, y) par kaatti hai. Ab PR ∥ AC hai, to ΔACB mein BPT se BR : RC = BP : PA = n : m. BR = y₂ − y aur RC = y − y₁, yaani (y₂ − y) / (y − y₁) = n / m. Cross-multiply karne par y(m + n) = m y₂ + n y₁.

> **y = (m y₂ + n y₁) / (m + n)**

> **Section formula (internal):** A(x₁, y₁) aur B(x₂, y₂) ko P andar se AP : PB = m : n mein baante, to
> **P = ( (m x₂ + n x₁) / (m + n) , (m y₂ + n y₁) / (m + n) )**

**Ye proof hai ya maanyata?** Honest baat: ye derivation ek picture (B, A se right aur upar) ke liye poori ki gayi hai. Jab B, A se left ya neeche ho to wahi argument lambaiyon ki jagah (x₂ − x₁) jaise farak (jo negative bhi ho sakte hain) se chalta hai, aur formula wahi rehta hai. Isko hum Example 4 mein ek aisi position par aazmayenge jahan B, A se left hai.

Ab Dnyaneshwar ka map dekho: A(1, 4), B(11, 9), P(5, 6), aur helper points Q(5, 4), C(11, 4).

```
 y
10 :  .  .  .  .  .  .  .  .  .  .  .  .
 9 :  .  .  .  .  .  .  .  .  .  .**B  .
 8 :  .  .  .  .  .  .  .  .**.**.  !  .
 7 :  .  .  .  .  .  .**.**.  .  .  !  .
 6 :  .  .  .  .**P**.  .  .  .  .  !  .
 5 :  .  .**.**.  !  .  .  .  .  .  !  .
 4 :  A-----------Q-----------------C  .
 3 :  .  .  .  .  .  .  .  .  .  .  .  .
 2 :  .  .  .  .  .  .  .  .  .  .  .  .
 1 :  .  .  .  .  .  .  .  .  .  .  .  .
 0 +------------------------------------  x
   0  1  2  3  4  5  6  7  8  9 10 11 12
```

> **Figure 1.4** – Dnyaneshwar ke drone ka raasta A se B (* lakeer), horizontal AC (- lakeer) aur vertical CB, QP (! lakeeren). Yahan AQ = 5 − 1 = 4 aur QC = 11 − 5 = 6, to AQ : QC = 4 : 6 = 2 : 3, jo AP : PB hona chahiye tha. Figure naap ke hisaab se nahi hai.

---

## Part C: Formula ko yaad kaise rakhein, aur kya-kya sach hona chahiye

### Cross rule: m kiske saath?

x = (m x₂ + n x₁) / (m + n). **m** (pehla number, A ki taraf ke tukde ka) **B** ke coordinate ke saath guna hota hai, aur **n** **A** ke coordinate ke saath. Isliye "cross" kehte hain.

**Kyun aisa?** Maan lo m chhota hai, jaise 1 : 9. Tab AP chhota hai, yaani P, A ke bahut **paas** hai. To P ka x, x₁ (A ke x) ke paas hona chahiye. Formula mein x₁ ke saath n = 9 (bada number) jud raha hai, to x₁ ka asar bada, x₂ ka (m = 1) chhota. Formula ek tarah ka **wazan wala average** hai: jis point ke paas P hai, usko zyada wazan milta hai. Aur wazan **door wale hisse** ka hota hai: P, A ke paas hai matlab AP chhota, PB bada, aur bada PB hi A ke coordinate ko wazan deta hai.

### Ratio padhna: AP : PB, hamesha A pehle

| Wakya | AP : PB | m | n |
|---|---|---|---|
| P, AB ko 2 : 3 mein baantta hai | 2 : 3 | 2 | 3 |
| AP, AB ka ek chauthai hissa hai | 1 : 3 | 1 | 3 |
| AP : AB = 3 : 8 | 3 : 5 | 3 | 5 |
| PB, AP se do guna hai | 1 : 2 | 1 | 2 |
| AP, PB se chaar guna hai | 4 : 1 | 4 | 1 |

Dhyan do: "AP : AB = 3 : 8" mein 8 poora AB hai, to PB = 8 − 3 = 5 hissa. Ratio **AP : PB** hi section formula ka m : n hai.

### Teen sanity checks (har answer par lagao)

1. P ka x, x₁ aur x₂ ke **beech** mein hona chahiye, aur y bhi y₁ aur y₂ ke beech (kyunki P andar se A aur B ke beech hai).
2. Agar m < n, to P, A ke zyada paas hona chahiye. Agar m > n, to B ke zyada paas.
3. m = n ho to P theek **mid-point** hona chahiye.

### Mid-point 1 : 1 ka case hai

m = n = 1 daalo: x = (1 × x₂ + 1 × x₁) / 2 = (x₁ + x₂) / 2, aur y = (y₁ + y₂) / 2. Ye wahi Class 9 ka mid-point formula hai. Aur agar m = n = 5 bhi lo, to x = 5(x₁ + x₂) / 10, jo phir (x₁ + x₂) / 2 hi hai: "barabar hisse" ka matlab hi mid-point hai, chahe kitne bhi hisse ginein.

---

## Part D: Solved examples

(Har example mein A, B, P ke letters naye hain.)

### Example 1: Dnyaneshwar ka seeds packet

A(1, 4), B(11, 9). P, AB ko 2 : 3 mein baantta hai (AP : PB = 2 : 3). 1 unit = 10 m. P ke coordinates dhoondho.

m = 2, n = 3, x₁ = 1, y₁ = 4, x₂ = 11, y₂ = 9.

x = (2 × 11 + 3 × 1) / (2 + 3) = (22 + 3) / 5 = 25 / 5 = **5**
y = (2 × 9 + 3 × 4) / (2 + 3) = (18 + 12) / 5 = 30 / 5 = **6**

**P = (5, 6).**

**Story check:** x = 5 aur y = 6, dono A aur B ke coordinates (1 se 11, 4 se 9) ke beech hain. m = 2 < n = 3, to P, A ke zyada paas hona chahiye, aur hai. Map par AB = 5√5 ≈ 11.2 unit, lagbhag 112 m; packet A se lagbhag 45 m par girta hai aur B se lagbhag 67 m door hota hai, jinka ratio 2 : 3 hai.

**Jaanch:** AP = √((5 − 1)² + (6 − 4)²) = √(16 + 4) = √20 = 2√5. PB = √((11 − 5)² + (9 − 6)²) = √(36 + 9) = √45 = 3√5. AP : PB = 2√5 : 3√5 = 2 : 3 ✅

### Example 2: Fibre cable ka junction box

Ek seedhi fibre cable exchange A(3, 11) se exchange B(11, 4) tak bichhi hai (1 unit = 1 km). Cable par junction box P aise lagana hai ki AP : PB = 3 : 5. P ke coordinates dhoondho.

m = 3, n = 5. x₁ = 3, y₁ = 11, x₂ = 11, y₂ = 4.

x = (3 × 11 + 5 × 3) / 8 = (33 + 15) / 8 = 48 / 8 = **6**
y = (3 × 4 + 5 × 11) / 8 = (12 + 55) / 8 = 67 / 8 = **8.375**

**P = (6, 67/8)**, yaani (6, 8.375).

**Story check:** x = 6 aur y = 8.375, dono A aur B ke coordinates ke beech hain (x: 3 se 11, y: 4 se 11). m = 3 < n = 5, to P, A ke paas hai. AB = √113 ≈ 10.6 km, to junction box A se lagbhag 4.0 km par hai, B se lagbhag 6.6 km door.

**Jaanch:** AP² = (6 − 3)² + (67/8 − 11)² = 9 + (−21/8)² = 9 + 441/64 = 1017/64. PB² = (11 − 6)² + (4 − 67/8)² = 25 + (−35/8)² = 25 + 1225/64 = 2825/64. AP² : PB² = 1017 : 2825 = 9 : 25 (dono 113 ke multiple: 9 × 113 aur 25 × 113). To AP : PB = 3 : 5 ✅

### Example 3: Ratio ko pehle AP : PB mein badlo

Drone ko A(3, 6) se B(8, 11) tak udna hai. Point P raste ka 1/5 hissa A se door hai, yaani AP : AB = 1 : 5. P ke coordinates dhoondho.

**Pehle ratio:** AB = AP + PB aur AB ke 5 hisson mein se 1 hissa AP hai, to PB = 4 hissa. AP : PB = **1 : 4**. (Seedha AP : AB = 1 : 5 ko m : n bana dena galat hota.) m = 1, n = 4.

x = (1 × 8 + 4 × 3) / 5 = (8 + 12) / 5 = 20 / 5 = **4**
y = (1 × 11 + 4 × 6) / 5 = (11 + 24) / 5 = 35 / 5 = **7**

**P = (4, 7).**

**Jaanch:** AP = √((4 − 3)² + (7 − 6)²) = √2. AB = √((8 − 3)² + (11 − 6)²) = √50 = 5√2. PB = √((8 − 4)² + (11 − 7)²) = √32 = 4√2. AP : AB = 1 : 5 ✅ aur AP : PB = √2 : 4√2 = 1 : 4 ✅

### Example 4: Jab B, A se left hai

Ek khet ki seedhi baad (fence) corner post A(9, 2) se corner post B(3, 10) tak jaati hai (1 unit = 10 m). Gate ka khamba P aise lagana hai ki AP : PB = 3 : 2. P ke coordinates dhoondho.

Yahan x₂ = 3 chhota hai x₁ = 9 se, yaani B, A se **left** hai. Formula wahi chalta hai. m = 3, n = 2.

x = (3 × 3 + 2 × 9) / 5 = (9 + 18) / 5 = 27 / 5 = **5.4**
y = (3 × 10 + 2 × 2) / 5 = (30 + 4) / 5 = 34 / 5 = **6.8**

**P = (5.4, 6.8).**

**Story check:** x = 5.4 hai, jo 3 aur 9 ke beech hai, aur y = 6.8 hai, jo 2 aur 10 ke beech hai. m = 3 > n = 2, to P, B ke zyada paas hona chahiye. Baad ki lambai AB = 10 unit = 100 m, to A se P tak 60 m aur P se B tak 40 m honi chahiye.

**Jaanch:** AP = √((5.4 − 9)² + (6.8 − 2)²) = √(12.96 + 23.04) = √36 = 6. PB = √((3 − 5.4)² + (10 − 6.8)²) = √(5.76 + 10.24) = √16 = 4. AP : PB = 6 : 4 = 3 : 2 ✅ aur AB = 6 + 4 = 10 unit ✅

### Example 5: Trisection points (do barabar tukde)

Drone ke track par A(2, 10) se B(11, 4) tak do charging pads P aur Q lagane hain, jo track ko 3 barabar tukdon mein baante (1 unit = 100 m). P, A ke paas wala pad hai. P aur Q ke coordinates dhoondho.

3 barabar tukde, to P, AB ko **1 : 2** mein baantta hai (AP ek tukda, PB do tukde), aur Q, AB ko **2 : 1** mein.

P (m = 1, n = 2): x = (1 × 11 + 2 × 2) / 3 = 15 / 3 = **5**, y = (1 × 4 + 2 × 10) / 3 = 24 / 3 = **8**. P = (5, 8).
Q (m = 2, n = 1): x = (2 × 11 + 1 × 2) / 3 = 24 / 3 = **8**, y = (2 × 4 + 1 × 10) / 3 = 18 / 3 = **6**. Q = (8, 6).

```
 y
11 :  .  .  .  .  .  .  .  .  .  .  .  .
10 :  .  A**.  .  .  .  .  .  .  .  .  .
 9 :  .  . *.**.* .  .  .  .  .  .  .  .
 8 :  .  .  .  .**P**.  .  .  .  .  .  .
 7 :  .  .  .  .  . *.**.* .  .  .  .  .
 6 :  .  .  .  .  .  .  .**Q**.  .  .  .
 5 :  .  .  .  .  .  .  .  . *.**.* .  .
 4 :  .  .  .  .  .  .  .  .  .  .**B  .
 3 :  .  .  .  .  .  .  .  .  .  .  .  .
 2 :  .  .  .  .  .  .  .  .  .  .  .  .
 1 :  .  .  .  .  .  .  .  .  .  .  .  .
 0 +------------------------------------  x
   0  1  2  3  4  5  6  7  8  9 10 11 12
```

> **Figure 1.5** – Track A(2, 10) se B(11, 4). Beech ke do pads P(5, 8) aur Q(8, 6) track ko 3 barabar tukdon mein baantte hain. Figure naap ke hisaab se nahi hai.

**Story check:** dono pads A aur B ke beech hain, aur P pehle (A ke paas) aur Q baad mein (B ke paas) aate hain, jaisa ratio 1 : 2 aur 2 : 1 se hona chahiye. Har tukda √13 unit ≈ 3.6 unit, yaani lagbhag 360 m.

**Jaanch:** AP² = (5 − 2)² + (8 − 10)² = 9 + 4 = 13, PQ² = (8 − 5)² + (6 − 8)² = 9 + 4 = 13, QB² = (11 − 8)² + (4 − 6)² = 9 + 4 = 13. Teeno barabar ✅. Ek doosre tareeke se: Q, PB ka mid-point hona chahiye: ((5 + 11) / 2, (8 + 4) / 2) = (8, 6) ✅

### Example 6: Mid-point, section formula se

A(5, 12) aur B(11, 2) ka point P jo AB ko 1 : 1 mein baantta hai.

m = n = 1: x = (1 × 11 + 1 × 5) / 2 = 16 / 2 = **8**, y = (1 × 2 + 1 × 12) / 2 = 14 / 2 = **7**. P = (8, 7).

**Jaanch:** AP² = (8 − 5)² + (7 − 12)² = 9 + 25 = 34 aur PB² = (11 − 8)² + (2 − 7)² = 9 + 25 = 34. AP = PB ✅ (Class 9 ke mid-point formula se bhi ((5 + 11) / 2, (12 + 2) / 2) = (8, 7).)

---

## Aam galtiyan (bachke rehna)

### Galti 1: Formula mein coordinates ulta jodna (m x₁ + n x₂)

A(2, 11), B(10, 8). P, AB ko 1 : 4 mein baantta hai (AP : PB = 1 : 4). Kisi ne x = (m x₁ + n x₂) / (m + n) likh diya, yaani m = 1 ko A ke saath aur n = 4 ko B ke saath guna kar diya:

x = (1 × 2 + 4 × 10) / 5 = 42 / 5 = 8.4, y = (1 × 11 + 4 × 8) / 5 = 43 / 5 = 8.6. Wo point (8.4, 8.6) mila.

**Kya galat hua?** Ratio 1 : 4 mein P, A ke paas hona chahiye (m chhota), par (8.4, 8.6) B(10, 8) ke paas hai. Sanity check pakad leta hai.

**Sahi:** x = (1 × 10 + 4 × 2) / 5 = 18 / 5 = 3.6, y = (1 × 8 + 4 × 11) / 5 = 52 / 5 = 10.4. P = **(3.6, 10.4)**.

**Jaanch (galat point W = (8.4, 8.6)):** AW² = (8.4 − 2)² + (8.6 − 11)² = 40.96 + 5.76 = 46.72 aur WB² = (10 − 8.4)² + (8 − 8.6)² = 2.56 + 0.36 = 2.92. AW² : WB² = 16 : 1, to AW : WB = 4 : 1, 1 : 4 nahi ❌
**Jaanch (sahi point P = (3.6, 10.4)):** AP² = 1.6² + 0.6² = 2.56 + 0.36 = 2.92 aur PB² = 6.4² + 2.4² = 40.96 + 5.76 = 46.72. AP² : PB² = 1 : 16, to AP : PB = 1 : 4 ✅

**Yaad rakho:** m door wale point B ke coordinate ke saath jaata hai (cross rule).

### Galti 2: Ratio ulta padhna (PB : AP samajh lena)

A(4, 3), B(12, 8). "P, AB ko 3 : 5 mein baantta hai." Kisi ne socha ki 3 hissa B ki taraf (PB) ka hai aur 5 hissa A ki taraf (AP) ka, aur isliye m = 5, n = 3 le liya:

x = (5 × 12 + 3 × 4) / 8 = 72 / 8 = 9, y = (5 × 8 + 3 × 3) / 8 = 49 / 8 = 6.125. Point W = (9, 6.125) mila.

```
A       P                       Q       B
+-------+-----------------------+-------+
```

> **Figure 1.6** – Ek seedhi lakeer AB. P, A ke paas hai (AP : PB = 1 : 4), aur Q, B ke paas hai (AP : PB = 4 : 1). Ratio ulta padhne par P ki jagah Q mil jaata hai. Figure naap ke hisaab se nahi hai.

**Kya galat hua?** "P, AB ko 3 : 5 mein baantta hai" ka matlab **AP : PB = 3 : 5** hai: pehla number **pehle point A** ki taraf ke tukde AP ka. Is galti mein formula sahi laga, par m aur n ulte bhare gaye. (Galti 1 aur Galti 2 ka nateeja milta-julta hai, kyunki dono mein P ki jagah "doosre sire se wahi ratio" wala point ban jaata hai. Par galti alag jagah hoti hai: pehli formula likhne mein, doosri ratio padhne mein.)

**Sahi:** m = 3, n = 5: x = (3 × 12 + 5 × 4) / 8 = 56 / 8 = 7, y = (3 × 8 + 5 × 3) / 8 = 39 / 8 = 4.875. P = **(7, 4.875)**.

**Jaanch (galat point W = (9, 6.125)):** AW² = 5² + 3.125² = 25 + 9.765625 = 34.765625 aur WB² = 3² + 1.875² = 9 + 3.515625 = 12.515625. AW² : WB² = 25 : 9, to AW : WB = 5 : 3, 3 : 5 nahi ❌
**Jaanch (sahi point P = (7, 4.875)):** AP² = 3² + 1.875² = 12.515625 aur PB² = 5² + 3.125² = 34.765625. AP² : PB² = 9 : 25, to AP : PB = 3 : 5 ✅

**Yaad rakho:** "AP : PB" likho, pehle A. Ratio ka pehla number A ki taraf wale hisse ka hai, aur sanity check: pehla number chhota to P, A ke paas.

---

## Quick Recap

- **Number line:** A = a, B = b, AP : PB = m : n ho to P = (m b + n a) / (m + n), yaani A se raste ka m / (m + n) hissa.
- **Section formula (internal):** A(x₁, y₁), B(x₂, y₂), AP : PB = m : n ho to P = ((m x₂ + n x₁) / (m + n), (m y₂ + n y₁) / (m + n)).
- **Derivation:** ek picture (B, A se right aur upar) mein BPT (ya AA) se AQ : QC = m : n, aur AQ, QC x ke farak hain. Doosri positions mein wahi argument farak (negative bhi) se chalta hai.
- **Cross rule:** m door wale point B ke coordinate ke saath, n A ke coordinate ke saath.
- **Mid-point:** m = n = 1 ka case, Class 9 wala formula.
- **Trisection points:** AB ko 1 : 2 aur 2 : 1 mein baantne wale do point.
- **Ratio padhna:** hamesha AP : PB, pehla A. "AP : AB = 3 : 8" ho to AP : PB = 3 : 5.
- **Sanity checks:** x aur y A aur B ke beech, m < n to P, A ke paas, m = n to mid-point.
- **Jaanch:** distance formula se AP aur PB nikalo, ya squares ka ratio m² : n².
- **Galtiyan:** formula mein m x₁ + n x₂ likhna, aur ratio ko PB : AP padhna.

---

## Practice Questions

Check every answer by finding AP and PB with the distance formula (or the squares of the distances).

1. Find the point P that divides the segment joining A(3, 1) and B(9, 12) in the ratio 1 : 3 (AP : PB = 1 : 3).

2. Find the point P that divides the segment joining A(1, 3) and B(6, 10) in the ratio 2 : 3.

3. Find the point P that divides the segment joining A(6, 9) and B(10, 10) in the ratio 3 : 5.

4. Find the point P that divides the segment joining A(6, 10) and B(11, 7) in the ratio 1 : 4. State whether P is nearer to A or to B, and explain without calculating.

5. A survey drone takes off from a pad A(2, 1) and lands on a pad B(9, 12) (1 unit = 20 m). It drops a marker at a point P with AP : PB = 3 : 2. Find the coordinates of P, and the distance AP in metres, correct to the nearest metre.

6. Find the points of trisection of the segment joining A(7, 1) and B(10, 10). Show that the three parts are equal in length.

7. Find the mid-point of the segment joining A(5, 2) and B(11, 9), first by the Class 9 mid-point formula and then by the section formula with a suitable ratio.

8. A point P lies on the segment joining A(1, 2) and B(9, 11) such that AP = (3/8) AB. Find the coordinates of P.

9. On a number line, A is at 0 and B is at 10. Find the points that divide AB in the ratio 2 : 3 and in the ratio 3 : 2. Are they the same point? Where does each lie compared with the mid-point of AB?

10. On a number line, A is at 5 and B is at 13. Find the point P with AP : PB = 3 : 5.

11. A student wants the point dividing the segment joining A(11, 2) and B(1, 9) in the ratio 3 : 2. She writes x = (3 × 11 + 2 × 1) / 5 = 7 and y = (3 × 2 + 2 × 9) / 5 = 24/5. Find her mistake, give the correct point, and check it.

12. In a drone race, the start gate is at A(1, 12) and the finish gate at B(10, 7). The marshal's flag P is placed on the straight line AB with AP : PB = 2 : 3. Find the coordinates of P.

13. State whether each statement is true or false. Give a reason.
    (a) If P divides AB in the ratio 1 : 3, then P is nearer to B than to A.
    (b) If P divides AB in the ratio 2 : 3, then the x-coordinate of P lies between x₁ and x₂.
    (c) Taking m = n = 7 in the section formula gives the mid-point of AB.
    (d) The point dividing AB in the ratio m : n is the same as the point dividing BA in the ratio n : m.
    (e) If AP : PB = 3 : 5, then AP = (3/5) AB.

### Answers

1. m = 1, n = 3. x = (1 × 9 + 3 × 3) / 4 = 18 / 4 = **4.5**, y = (1 × 12 + 3 × 1) / 4 = 15 / 4 = **3.75**. P = **(4.5, 3.75)**.
   Jaanch: AP² = (4.5 − 3)² + (3.75 − 1)² = 2.25 + 7.5625 = 9.8125 aur PB² = (9 − 4.5)² + (12 − 3.75)² = 20.25 + 68.0625 = 88.3125. AP² : PB² = 9.8125 : 88.3125 = 1 : 9, to AP : PB = 1 : 3 ✅

2. m = 2, n = 3. x = (2 × 6 + 3 × 1) / 5 = 15 / 5 = **3**, y = (2 × 10 + 3 × 3) / 5 = 29 / 5 = **5.8**. P = **(3, 5.8)**.
   Jaanch: AP² = (3 − 1)² + (5.8 − 3)² = 4 + 7.84 = 11.84 aur PB² = (6 − 3)² + (10 − 5.8)² = 9 + 17.64 = 26.64. 11.84 : 26.64 = 4 : 9, to AP : PB = 2 : 3 ✅

3. m = 3, n = 5. x = (3 × 10 + 5 × 6) / 8 = 60 / 8 = **7.5**, y = (3 × 10 + 5 × 9) / 8 = 75 / 8 = **9.375**. P = **(7.5, 9.375)**.
   Jaanch: AP² = 1.5² + 0.375² = 2.25 + 0.140625 = 2.390625 aur PB² = 2.5² + 0.625² = 6.25 + 0.390625 = 6.640625. Ratio 2.390625 : 6.640625 = 9 : 25, to AP : PB = 3 : 5 ✅

4. m = 1, n = 4. x = (1 × 11 + 4 × 6) / 5 = 35 / 5 = **7**, y = (1 × 7 + 4 × 10) / 5 = 47 / 5 = **9.4**. P = **(7, 9.4)**.
   Bina hisaab ke: m = 1 chhota hai n = 4 se, to AP chhota aur PB bada hai, yaani P, **A ke zyada paas** hai (AP raste ka 1/5 hissa hai).
   Jaanch: AP² = (7 − 6)² + (9.4 − 10)² = 1 + 0.36 = 1.36 aur PB² = (11 − 7)² + (7 − 9.4)² = 16 + 5.76 = 21.76. 1.36 : 21.76 = 1 : 16, to AP : PB = 1 : 4 ✅

5. m = 3, n = 2. x = (3 × 9 + 2 × 2) / 5 = 31 / 5 = **6.2**, y = (3 × 12 + 2 × 1) / 5 = 38 / 5 = **7.6**. P = **(6.2, 7.6)**.
   AP² = (6.2 − 2)² + (7.6 − 1)² = 17.64 + 43.56 = 61.2 unit². AB² = 7² + 11² = 49 + 121 = 170, aur AP = (3/5) AB, to AP = (3/5) √170 ≈ 0.6 × 13.04 ≈ 7.82 unit. 1 unit = 20 m, to AP ≈ 156.5 m, yaani lagbhag **156 m**.
   Story check: P ka x = 6.2 (2 aur 9 ke beech) aur y = 7.6 (1 aur 12 ke beech) hai, aur m = 3 > n = 2 hai, to P, B ke zyada paas hai. Poori udaan AB ≈ 13.04 unit ≈ 261 m, aur 3/5 hissa ≈ 156 m.
   Jaanch: PB² = (9 − 6.2)² + (12 − 7.6)² = 7.84 + 19.36 = 27.2. AP² : PB² = 61.2 : 27.2 = 9 : 4, to AP : PB = 3 : 2 ✅

6. Trisection points: P, AB ko 1 : 2 mein aur Q, AB ko 2 : 1 mein baantta hai.
   P (m = 1, n = 2): x = (1 × 10 + 2 × 7) / 3 = 24 / 3 = **8**, y = (1 × 10 + 2 × 1) / 3 = 12 / 3 = **4**. P = **(8, 4)**.
   Q (m = 2, n = 1): x = (2 × 10 + 1 × 7) / 3 = 27 / 3 = **9**, y = (2 × 10 + 1 × 1) / 3 = 21 / 3 = **7**. Q = **(9, 7)**.
   Jaanch: AP² = (8 − 7)² + (4 − 1)² = 1 + 9 = 10, PQ² = (9 − 8)² + (7 − 4)² = 1 + 9 = 10, QB² = (10 − 9)² + (10 − 7)² = 1 + 9 = 10. Teeno tukde barabar ✅

7. Class 9 formula se: ((5 + 11) / 2, (2 + 9) / 2) = (8, 11/2) = **(8, 5.5)**.
   Section formula se m : n = 1 : 1: x = (1 × 11 + 1 × 5) / 2 = 8, y = (1 × 9 + 1 × 2) / 2 = 5.5. Dono tareeke mein **(8, 5.5)**.
   Jaanch: AP² = (8 − 5)² + (5.5 − 2)² = 9 + 12.25 = 21.25 aur PB² = (11 − 8)² + (9 − 5.5)² = 9 + 12.25 = 21.25. AP = PB ✅

8. AP = (3/8) AB, to PB = AB − AP = (5/8) AB, yaani AP : PB = 3 : 5. m = 3, n = 5. x = (3 × 9 + 5 × 1) / 8 = 32 / 8 = **4**, y = (3 × 11 + 5 × 2) / 8 = 43 / 8 = **5.375**. P = **(4, 5.375)**.
   Jaanch: AP² = (4 − 1)² + (5.375 − 2)² = 9 + 11.390625 = 20.390625 aur AB² = 8² + 9² = 145. AP² / AB² = 20.390625 / 145 = 0.140625 = 9/64 = (3/8)², to AP = (3/8) AB ✅

9. 2 : 3 wala point: 0 + (2/5) × 10 = **4**, yaani (3 × 0 + 2 × 10) / 5 = 4. 3 : 2 wala point: 0 + (3/5) × 10 = **6**, yaani (2 × 0 + 3 × 10) / 5 = 6. **Same point nahi hain.** Mid-point 5 hai; 4, mid-point ke A ki taraf (left) hai (kyunki m = 2 < n = 3) aur 6, B ki taraf (right) hai.
   Jaanch: 4 ke liye AP = 4 aur PB = 6, 4 : 6 = 2 : 3 ✅. 6 ke liye AP = 6 aur PB = 4, 6 : 4 = 3 : 2 ✅

10. m = 3, n = 5. P = (3 × 13 + 5 × 5) / 8 = (39 + 25) / 8 = 64 / 8 = **8**.
    Jaanch: AP = 8 − 5 = 3 aur PB = 13 − 8 = 5, to AP : PB = 3 : 5 ✅

11. Galti: usne m x₁ + n x₂ likha (3 ko A ke 11 ke saath aur 2 ko B ke 1 ke saath guna kiya). Cross rule ke hisaab se m = 3 ko B ke saath aana chahiye tha. Sahi: x = (3 × 1 + 2 × 11) / 5 = 25 / 5 = **5**, y = (3 × 9 + 2 × 2) / 5 = 31 / 5 = **6.2**. P = **(5, 6.2)**.
    Jaanch: AP² = (5 − 11)² + (6.2 − 2)² = 36 + 17.64 = 53.64 aur PB² = (1 − 5)² + (9 − 6.2)² = 16 + 7.84 = 23.84. 53.64 : 23.84 = 9 : 4, to AP : PB = 3 : 2 ✅ (Uska (7, 4.8) wala point AP : PB = 2 : 3 deta, jo ulta ratio hai.)

12. m = 2, n = 3. x = (2 × 10 + 3 × 1) / 5 = 23 / 5 = **4.6**, y = (2 × 7 + 3 × 12) / 5 = 50 / 5 = **10**. P = **(4.6, 10)**.
    Story check: x = 4.6 (1 aur 10 ke beech) aur y = 10 (7 aur 12 ke beech) hai. m = 2 < n = 3, to flag start gate ke zyada paas hai.
    Jaanch: AP² = (4.6 − 1)² + (10 − 12)² = 12.96 + 4 = 16.96 aur PB² = (10 − 4.6)² + (7 − 10)² = 29.16 + 9 = 38.16. 16.96 : 38.16 = 4 : 9, to AP : PB = 2 : 3 ✅

13. (a) **False** ❌. 1 : 3 mein AP chhota aur PB bada hai, to P, **A ke** zyada paas hai.
    (b) **True** ✅. P andar se A aur B ke beech hai, aur formula x₁ aur x₂ ka (positive wazan wala) average hai, to x, x₁ aur x₂ ke beech aata hai.
    (c) **True** ✅. x = 7(x₁ + x₂) / 14 = (x₁ + x₂) / 2, aur y bhi aise hi. Barabar hisse hamesha mid-point dete hain.
    (d) **True** ✅. BA mein pehla point B hai, to BP : PA = n : m, yaani AP : PB = m : n. Formula mein A aur B tathaa m aur n dono badalne par x = (n x₁ + m x₂) / (n + m) wahi rehta hai.
    (e) **False** ❌. AP : PB = 3 : 5 mein poora AB 3 + 5 = 8 hisse ka hai, to AP = (3/8) AB, (3/5) AB nahi.

---

Tumne dekha ki "kisi hisse par point" ka sawaal bhi ek hi formula se hal ho jaata hai, aur har baar tum distance formula se apna jawab khud jaanch sakte ho. Jab bhi ratio dikhe, pehle likho AP : PB, pehla A, aur phir cross rule lagao.

**Agle topic mein (Topic 2):** abhi tak point ya ratio diya tha aur coordinates nikalne the. Ab ulta kaam bhi karenge: point diya ho aur **ratio** dhoondhna ho, ya koi axis AB ko kis ratio mein kaatti hai, ya ek coordinate gayab ho. Parallelogram ka chautha corner bhi isi formula se milega: [section-formula-and-reflection-part2.md](section-formula-and-reflection-part2.md).
