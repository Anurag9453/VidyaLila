# Chapter: Similar Triangles (Part 5)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [similar-triangles-part4.md](similar-triangles-part4.md) se aage chalti hai** (wahan Topic 4 mein parchhai se unchai, right triangle ki altitude se bane teen similar triangles, aur Pythagoras ka naya saboot dekha). Chapter ki shuruaat: [similar-triangles.md](similar-triangles.md). Class 9 se triangle ka area: [mensuration.md](../../../class9/maths/mensuration/mensuration.md).
> **Topics covered in this file:**
> 5. Area Ka Rishta: Similar Triangles Ke Areas

---

# Topic 5: Area Ka Rishta: Similar Triangles Ke Areas

Topic 4 ke aakhir mein ek sawaal chhoda tha: agar Qasim ka model asli tanki se sides mein ek-dasvaan hissa hai, to kya uski **jagah** (area) bhi ek-dasvaan hogi? Ab tak hamara poora dhyan **lambaiyon** par raha: sides, heights, shadows. Topic 1 se humein pata hai ki similar triangles ki corresponding sides ek hi ratio k mein hoti hain. Aaj sawaal naya hai: **area ka kya hota hai?** Sides k guna, to area kitna guna? Jawab chaunkane wala hai, aur seedha tumhari jeb (paison) se juda hai.

---

## Kajal ke do patang

Makar Sankranti aane wali thi. Kajal ki Mummy ne ek chhota tikona kapde ka patang banaya tha, uski chhoti cousin ke liye. Kapde ka tukda tikona tha: **base 16 cm** aur **height 8 cm**. Kajal ne bhi apne liye patang maanga. "Mera patang bada hona chahiye, isse **dhai guna**," usne kaha. Yaani har lambai (base, height, har side) 2.5 guna.

Mummy ke saath wo kapde ki dukaan gayi. Shopkeeper uncle ne kaha, "Ye zari-wala resham ka kapda hai, isliye mehnga: ₹ 25 ke 100 cm² ke hisaab se milta hai, yaani ₹ 0.25 ka har ek cm²." Chhote patang ka kapda ₹ 16 mein aaya tha. Kajal ne turant hisaab lagaya: "Mera patang 2.5 guna bada hai, to kapda bhi 2.5 guna mehnga: ₹ 16 × 2.5 = ₹ 40. Bas?"

Mummy muskurayi. "Pehle ye dekho ki dono tukde **similar** hain: shape ek, size alag. Kapda sirf lambai mein nahi, **chauri** mein bhi badhta hai. Ab dekho ki kapde ka area kitna guna badhta hai."

```
          A                                P
         /|\                              /|\
        / | \                            / | \
       /  |  \                          /  |  \
      /   | 8 \                        /   |   \
     /    |    \                      /    |20  \
    B-----D-----C                    Q-----S-----R
     base 16 cm                        base 40 cm
```

> **Figure 5.1** – Baayein: Mummy ka chhota patang, ΔABC, base BC = 16 cm aur height AD = 8 cm. Daayein: Kajal ka bada patang, ΔPQR, base QR = 40 cm aur height PS = 20 cm. Dono similar hain, k = 40/16 = 2.5. Figure naap ke hisaab se nahi hai.

Kajal ka ₹ 40 wala jawab theek tha ya nahi, ye is topic ke andar pata chalega.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Area ratio** | Do figures ke areas ka ratio, ar(ΔABC) : ar(ΔPQR) ki tarah likhte hain | Do patangon ke kapde ka area ratio 4 : 25 |
| **Jodidaar heights (corresponding altitudes)** | Do similar triangles mein jo altitudes ek-dusre ke saamne wale vertices se girti hain | Figure 5.1 mein AD aur PS |
| **Square root se wapas jaana** | Area ratio se side ratio nikalne ke liye uska square root lena | Area ratio 16 : 25 se side ratio 4 : 5 |
| **Trapezium BCED** | Triangle ABC mein parallel line DE kaatne par neeche bacha hissa, jismein BC aur DE parallel sides hain | Figure 5.4 mein neeche wala hissa |

---

## Pehle se kya yaad hai

- **Topic 1** ([similar-triangles.md](similar-triangles.md)): ΔABC ~ ΔPQR mein AB/PQ = BC/QR = CA/RP = k, aur angles barabar.
- **Topic 3** ([similar-triangles-part3.md](similar-triangles-part3.md)): AA test. Aur Part D mein DE ∥ BC wale triangle mein ΔADE ~ ΔABC. Aaj hum isi se area nikalenge.
- **Class 9** ([mensuration.md](../../../class9/maths/mensuration/mensuration.md)): triangle ka area = ½ × base × height. Is topic ka poora saboot isi ek formula par khada hai.
- **Topic 2** ([similar-triangles-part2.md](similar-triangles-part2.md)): wahan BPT ka saboot bhi areas ke ratio se kiya tha. Aaj areas ka ratio khud hamara sawaal hai.

---

## Part A: Area k guna nahi, k × k guna badhta hai

### Kyun? Tile ki kahani

3 cm side ki ek square tile lo. Uska area 3 × 3 = 9 cm². Ab uski har lambai **doguni** kar do: side 6 cm, k = 2. Naye square ka area 6 × 6 = 36 cm². Kitni baar? 36 ÷ 9 = **4 guna**, 2 guna nahi. Dekhne mein bhi saaf hai: bade square ke andar chhoti tile **chaar** baar poori fit ho jaati hai (do ek line mein, do doosri line mein).

Yani lambai ko k guna karo to hum do dishaon mein badhte hain: **chauri mein bhi k guna aur lambai mein bhi k guna.** Isliye area k × k = **k²** guna.

Ye baat triangle mein bhi dikhti hai. ΔABC ki teen sides ke mid-points D, E, F jodo (Class 9 ka Mid-point Theorem: DE ∥ BC aur DE = ½ BC, aur baaki do jodiyan bhi waise).

```
            A
           / \
          /   \
         /     \
        D-------E
       / \     / \
      /   \   /   \
     /     \ /     \
    B-------F-------C
```

> **Figure 5.2** – D, E, F kramshah AB, AC, BC ke mid-points hain. Bade ΔABC mein chaar barabar chhote triangle ban gaye: ΔADE, ΔDBF, ΔEFC aur ΔFED.

Chaaron chhote triangle congruent hain (Class 9 ke Mid-point Theorem se unki teeno sides ΔABC ki sides ki aadhi hain), aur ΔADE ~ ΔABC ka k = ½. Area dekho: bade triangle mein chaar chhote triangle hain, to ar(ΔADE) = ¼ ar(ΔABC). Ye ¼ = (½)² hai. **k = ½ gaya, area ¼ gaya.** Tile mein bhi yahi: k = 2 se area 4 guna.

### Theorem: similar triangles ke areas ka ratio

> **Area ratio theorem:** Do similar triangles ke areas ka ratio unki corresponding sides ke ratio ke **square** ke barabar hota hai.
>
> Agar ΔABC ~ ΔPQR, to ar(ΔABC) : ar(ΔPQR) = (AB/PQ)² = (BC/QR)² = (CA/RP)² = k².

### Saboot

**Given:** ΔABC ~ ΔPQR, AB/PQ = BC/QR = CA/RP = k.

**To prove:** ar(ΔABC) / ar(ΔPQR) = k².

**Construction:** A se BC par perpendicular AD, aur P se QR par perpendicular PS kheencho.

```
          A                             P
         /:\                           /:\
        / : \                         / : \
       /  :  \                       /  :  \
      /   :   \                     /   :   \
     B----D----C                   Q----S----R
```

> **Figure 5.3** – ΔABC mein AD ⊥ BC aur ΔPQR mein PS ⊥ QR. Dono similar triangles hain, AD aur PS jodidaar heights hain.

**Step 1 (area ka ratio):** Area = ½ × base × height se

ar(ΔABC) / ar(ΔPQR) = (½ × BC × AD) / (½ × QR × PS) = (BC/QR) × (AD/PS).

**Step 2 (height ka ratio):** ΔABD aur ΔPQS mein ∠B = ∠Q (kyunki ΔABC ~ ΔPQR), aur ∠ADB = ∠PSQ = 90°. AA se **ΔABD ~ ΔPQS** (A↔P, B↔Q, D↔S). To corresponding sides ek ratio mein: AD/PS = AB/PQ = k.

**Step 3:** BC/QR = k (similar triangles ki definition se) aur AD/PS = k (Step 2). Step 1 mein daalo:

ar(ΔABC) / ar(ΔPQR) = k × k = **k².**

**Hence proved.** (Agar triangle obtuse ho to altitude ka foot D bahar girta hai, par Step 2 mein wahi AA chalta hai.) Dekho: saboot ke andar do alag cheezein k banin: **base ne ek k diya, height ne doosra k diya.** Isi ko Kajal ko dikhana hai.

Kajal ke patang se milao: k = 2.5. Base 16 se 40 (2.5 guna), height 8 se 20 (2.5 guna), area 64 se 400 (**6.25 guna**, yaani 2.5 × 2.5). Kajal ne sirf ek baar 2.5 guna kiya tha.

### Theorem ka ulta (side ratio nikalna)

Agar k² ek ratio hai area ka, to **k ko wapas pane ke liye square root lo.**

> Agar do similar triangles ke areas ka ratio a : b hai, to unki corresponding sides ka ratio √a : √b hota hai.

| Theorem | Kya diya hai | Kya milta hai |
|---|---|---|
| Area ratio theorem | Side ratio k | Area ratio k² |
| Uska ulta | Area ratio a : b | Side ratio √a : √b |

Kuch jodiyan, jo yaad ho jaayen to kaam aasaan:

| Area ratio | Side ratio |
|---|---|
| 4 : 9 | 2 : 3 |
| 9 : 16 | 3 : 4 |
| 25 : 49 | 5 : 7 |
| 1 : 3 | 1 : √3 (abhi sirf tulna: √3 lagbhag 1.73) |

### Kuch aur cheezein: perimeter, altitude aur median (remarks)

- **Perimeter:** har side k guna hoti hai, to teeno sides ka jod bhi k guna. **Perimeters ka ratio = side ratio = k.** Area ka ratio alag cheez hai (k²), dono ko mat milana.
- **Altitude:** Saboot ke Step 2 mein hi mil gaya: AD/PS = k.
- **Median:** ΔABC mein AM median (M, BC ka mid-point) aur ΔPQR mein PN median (N, QR ka mid-point). BM = ½ BC aur QN = ½ QR, to BM/QN = BC/QR = k = AB/PQ. ∠B = ∠Q ke saath **SAS** se ΔABM ~ ΔPQN, to AM/PN = k. Yani median bhi sides ke ratio mein hi hoti hain.

---

## Part B: Theorem se sawaal

### Example 1: side ratio se area

ΔABC ~ ΔPQR. BC = 14 cm, QR = 21 cm aur ar(ΔABC) = 40 cm². ar(ΔPQR) nikalo.

**Step 1 (ratio):** BC/QR = 14/21 = 2/3, to k = 2/3.

**Step 2 (area ratio):** ar(ΔABC) : ar(ΔPQR) = (2/3)² = 4/9.

**Step 3:** 40 / ar(ΔPQR) = 4/9, to ar(ΔPQR) = 40 × 9/4 = **90 cm².**

**Jaanch:** 90/40 = 9/4 = (3/2)², aur side ratio ulta likhne par QR/BC = 21/14 = 3/2 ✅

**Story check:** PQR ki sides bhi badi, to area bhi bada: 90 > 40. Aur sirf 3/2 guna (60) nahi, usse zyada (90) hai, jaisa k² ke liye hona chahiye.

### Example 2: area ratio se side

Do similar triangles ke areas 98 cm² aur 242 cm² hain. Chhote triangle ki ek side 28 cm hai. Bade triangle ki corresponding side nikalo.

**Step 1 (area ratio):** 98 : 242 = 49 : 121 (dono ko 2 se bhaag karo).

**Step 2 (square root):** side ratio = √49 : √121 = 7 : 11.

**Step 3:** 28 / x = 7/11, to x = 28 × 11/7 = **44 cm.**

**Jaanch:** (28/44)² = (7/11)² = 49/121 = 98/242 ✅

**Story check:** bade triangle ka area chhote ka lagbhag 2.5 guna hai (242/98), aur side 44/28 lagbhag 1.57 guna: sides ka badhav area ke badhav se kam hai, jaisa square root mein hota hai.

### Example 3: jab ratio ka root nahi nikalta (1 : 3)

Do similar triangles ke areas 30 cm² aur 90 cm² hain. Bade triangle ki sides chhote ki sides se kitni guna hain?

**Step 1:** area ratio = 30 : 90 = 1 : 3.

**Step 2:** side ratio = 1 : √3. √3 poora number nahi hai, par hum use tol sakte hain: 1.7² = 2.89 aur 1.8² = 3.24, aur 3 inke beech mein hai. To √3 **1.7 aur 1.8 ke beech** hai (lagbhag 1.73).

**Jaanch:** bade triangle ki sides chhote ki 1.73 guna: 1.73² = 2.9929, lagbhag 3 ✅ (area ratio 1 : 3 se milta hai).

**Story check:** sides 2 guna nahi hui hongi (2 guna karne par area 4 guna hota), na 1.5 guna (area 2.25 guna). 1.73 beech mein hai: theek.

### Example 4: perimeter aur area, dono saath

ΔABC ki sides 9, 10, 17 cm hain. ΔPQR ki sides 13.5, 15, 25.5 cm hain. Dikhao ki ΔABC ~ ΔPQR, aur perimeters aur areas ke ratio nikalo.

**Step 1 (similar?):** chhoti se badi tak sorted: 9, 10, 17 aur 13.5, 15, 25.5. 13.5/9 = 1.5, 15/10 = 1.5, 25.5/17 = 1.5. Teeno barabar, to SSS se **ΔABC ~ ΔPQR** (k = 3/2).

**Step 2 (perimeters):** 9 + 10 + 17 = 36 cm aur 13.5 + 15 + 25.5 = 54 cm. Ratio 36 : 54 = **2 : 3.**

**Step 3 (areas, Heron se):** ΔABC mein s = 18, area = √(18 × 9 × 8 × 1) = √1296 = 36 cm². ΔPQR mein s = 27, area = √(27 × 13.5 × 12 × 1.5) = √6561 = 81 cm². Ratio 36 : 81 = **4 : 9.**

**Jaanch:** perimeter ratio 2 : 3 = side ratio, aur area ratio 4 : 9 = (2 : 3)² ✅ ([Mensuration](../../../class9/maths/mensuration/mensuration.md) ka Heron formula yahan kaam aaya).

---

## Part C: Parallel line se kata hua triangle

Topic 3 ke Part D mein dekha tha: ΔABC mein DE ∥ BC (D, AB par; E, AC par) ho to ΔADE ~ ΔABC (AA se: ∠A common, ∠ADE = ∠ABC corresponding angles). Corresponding sides: AD ↔ AB, AE ↔ AC, DE ↔ BC. To k = AD/AB.

```
             A
            / \
           /   \
          /     \
         D-------E
        /         \
       /           \
      B-------------C
```

> **Figure 5.4** – DE ∥ BC. Upar chhota ΔADE, neeche trapezium BCED.

**Result:** ar(ΔADE) / ar(ΔABC) = (AD/AB)² = (AE/AC)² = (DE/BC)².

**Trapezium BCED ka area** = ar(ΔABC) − ar(ΔADE). Dhyan do: trapezium triangle nahi hai, uska area seedha formula se nahi, **bade mein se chhota nikaal kar** milta hai.

### Example 5: trapezium ka area

ΔABC mein DE ∥ BC. AD = 9 cm, AB = 15 cm aur ar(ΔABC) = 350 cm². ar(ΔADE) aur trapezium BCED ka area nikalo.

**Step 1 (ratio):** AD/AB = 9/15 = 3/5, to k = 3/5.

**Step 2 (chhota triangle):** ar(ΔADE) = 350 × (3/5)² = 350 × 9/25 = **126 cm².**

**Step 3 (trapezium):** ar(BCED) = 350 − 126 = **224 cm².**

**Jaanch:** trapezium/ΔABC = 224/350 = 16/25 = 1 − 9/25 ✅. Aur 126 + 224 = 350 ✅

**Story check:** D, A se 9 cm door hai, jabki poori AB 15 cm hai (A se aadhe raaste se thoda aage). Chhota triangle area ka 9/25 (36%) hai aur trapezium 64%: D aadhe se aage hai, isliye trapezium bada hona hi tha.

### Example 6: area dekar parallel line ki jagah dhoondhna

ΔABC mein DE ∥ BC. ar(ΔADE) = 80 cm², ar(trapezium BCED) = 45 cm², AB = 30 cm aur BC = 35 cm. AD, DB aur DE nikalo.

**Step 1 (poora area):** ar(ΔABC) = 80 + 45 = 125 cm².

**Step 2 (ratio):** ar(ΔADE) : ar(ΔABC) = 80 : 125 = 16 : 25.

**Step 3 (square root):** AD/AB = √16/√25 = 4/5. To AD = 30 × 4/5 = **24 cm**, DB = 30 − 24 = **6 cm.**

**Step 4:** DE/BC = AD/AB = 4/5, to DE = 35 × 4/5 = **28 cm.**

**Jaanch:** (24/30)² = (4/5)² = 16/25 = 80/125 ✅. Aur BPT se AD : DB = 24 : 6 = 4 : 1, jisse AD/AB = 4/5 phir se ✅

---

## Part D: Kapde ka kharcha (Kajal ka jawab)

Area ka matlab hai **kitna kapda lagega.** Agar kapde ka rate (₹ per cm²) ek hi ho, to **kharcha area ke barabar badhta hai**, lambai ke barabar nahi. Isliye kharche ka ratio = area ratio = k².

### Example 7: Kajal ka patang

Chhota patang: base 16 cm, height 8 cm. Bada patang (similar), k = 2.5. Kapde ka rate ₹ 0.25 per cm². Dono ke kapde ka kharcha nikalo.

**Step 1 (chhota):** area = ½ × 16 × 8 = 64 cm². Kharcha = 64 × 0.25 = **₹ 16.**

**Step 2 (bada):** base = 16 × 2.5 = 40 cm, height = 8 × 2.5 = 20 cm, area = ½ × 40 × 20 = 400 cm². Kharcha = 400 × 0.25 = **₹ 100.**

**Step 3 (theorem se):** ar ratio = 2.5² = 6.25, aur ₹ 16 × 6.25 = ₹ 100. Dono tareeke ek hi jawab dete hain.

**Jaanch:** 100/16 = 6.25 = (5/2)² ✅

**Story check:** Kajal ne ₹ 40 socha tha (sirf 2.5 guna). Asli kharcha ₹ 100 nikla: 6.25 guna, kyunki patang chauri mein bhi 2.5 guna badha tha. Kajal ke ₹ 40 se ₹ 60 zyada lagenge.

### Example 8: kharche se size

Ek bade patang ka kapda ₹ 735 ka aaya. Ek chhota patang bada se similar hai, aur chhote ki sides bade ki sides ki 2/7 hain. Rate dono ke liye ek hi hai. Chhote patang ka kharcha?

**Step 1:** k = 2/7 (chhota : bada), to area ratio = (2/7)² = 4/49.

**Step 2:** chhote ka kharcha = 735 × 4/49 = **₹ 60** (735 ÷ 49 = 15, 15 × 4 = 60).

**Jaanch:** 60/735 = 4/49 ✅ aur √(4/49) = 2/7 ✅

**Story check:** chhote ki sides bade ki 2/7 hain (ek-tihaai se bhi kam), to uska kharcha bade ke 4/49 (lagbhag 8%), yaani bahut kam: ₹ 60 theek lagta hai.

### Sirf triangle nahi: koi bhi flat shape

Ye niyam kisi bhi flat shape ke liye sach hai jo enlarge ya reduce hui ho:

- **Rectangle:** 7 cm × 5 cm ke patch ko k = 3 se bada karo: 21 cm × 15 cm. Area 35 cm² se 315 cm², yaani 9 guna = 3².
- **Circle:** radius r se kr karo to area π(kr)² = k² × πr², yaani k² guna. Saare circles similar hote hain, isliye ye sach hai.

(Ye general baat hum sirf yahan example se dekh rahe hain: is chapter mein saboot triangles ke liye hi hai.)

---

## Aam galtiyan (bachke rehna)

**Galti 1: area ratio ko side ratio ke barabar maan lena (square nahi karna)**

Ek triangle ΔABC ka base 8 cm aur height 12 cm hai: area = ½ × 8 × 12 = 48 cm². Ek similar triangle ΔPQR ka base 14 cm hai. Ek bachhe ne socha: "Sides ka ratio 14/8 = 7/4, to area bhi 7/4 guna." Usne likha:

ar(ΔPQR) = 48 × 7/4 = **84 cm².**

Ab asli triangle banao. k = 7/4, to height 12 ki bhi 7/4 guna: 12 × 7/4 = 21 cm. Area = ½ × 14 × 21 = **147 cm².** Bachhe ka 84 cm² bahut kam hai: usne sirf **ek** direction (base) badhaayi aur height ko bhool gaya.

Sahi: ar(ΔPQR) = 48 × (7/4)² = 48 × 49/16 = **147 cm².**

**Jaanch:** 147/48 = 49/16 = (7/4)² ✅ aur seedha ½ × 14 × 21 = 147 ✅

**Galti 2: area ratio se side ratio nikalte waqt square karna (square root nahi lena)**

Do similar triangles ke areas 45 cm² aur 125 cm² hain. Chhote ki ek side 12 cm hai. Ek bachhe ne socha: "Ulta rasta lena hai, to ratio ko square kar dun." Usne likha:

area ratio 45/125 = 9/25, to side ratio = (9/25)² = 81/625.

12/x = 81/625, to x = 12 × 625/81 = **lagbhag 92.6 cm.**

Check karo: area sirf 125/45 ≈ 2.8 guna bada hai, par side 92.6/12 ≈ 7.7 guna? Side ko 7.7 guna karne par area 7.7² ≈ 59 guna hota. Ye mel nahi khaata.

Sahi: side ratio = √9 : √25 = 3 : 5, to 12/x = 3/5, x = 12 × 5/3 = **20 cm.**

**Jaanch:** k = 20/12 = 5/3, to area ratio = 25/9 aur 45 × 25/9 = 125 ✅

Yaad rakhne ka tareeka: **side se area par jaana ho to square, area se side par jaana ho to square root.**

---

## Quick Recap

- Similar triangles ke areas ka ratio = corresponding sides ke ratio ka **square**: ar(ΔABC) : ar(ΔPQR) = k².
- Kyun? Area = ½ × base × height. Base k guna aur height bhi k guna (jodidaar heights ka ratio AA se k nikalta hai), to area k × k guna.
- Ulta: area ratio a : b ho to side ratio √a : √b. Area ratio 9 : 16 se side ratio 3 : 4. Agar root poora na nikle to sirf tulna karo (1 : 3 se sides 1 : √3, lagbhag 1 : 1.73).
- Perimeters, altitudes aur medians ka ratio **k** hota hai (square nahi).
- DE ∥ BC ho to ar(ΔADE) : ar(ΔABC) = (AD : AB)². Trapezium BCED = ar(ΔABC) − ar(ΔADE).
- Kapde ya paint ka kharcha area ke saath badhta hai, isliye kharche ka ratio = k² (agar rate ek hi ho).
- Galtiyan: area ratio ko side ratio ke barabar maan lena; area se side par jaate waqt square karna (root lena tha).

---

## Practice Questions

1. ΔABC ~ ΔDEF, BC = 10 cm, EF = 16 cm and ar(ΔABC) = 75 cm². Find ar(ΔDEF).
2. Two similar triangles ΔPQR and ΔXYZ have areas 144 cm² and 324 cm². If PQ = 18 cm, find XY.
3. Two similar triangles have areas in the ratio 25 : 49. The perimeter of the smaller one is 30 cm. Find the perimeter of the larger one.
4. In ΔABC, DE ∥ BC with D on AB and E on AC. AD : DB = 3 : 4 and ar(ΔABC) = 196 cm². Find ar(ΔADE) and the area of the trapezium BCED.
5. In ΔABC, DE ∥ BC with D on AB and E on AC. ar(ΔADE) : ar(trapezium BCED) = 9 : 16 and DE = 15 cm. Find BC.
6. In ΔABC, D and E are the mid-points of AB and AC. The area of the trapezium BCED is 117 cm². Find ar(ΔABC) and ar(ΔADE).
7. Two triangular sails are cut from the same cloth and are similar, with sides in the ratio 3 : 8. The smaller sail's cloth costs ₹ 72. What does the bigger sail's cloth cost (same rate per cm²)?
8. A big triangular kite cloth costs ₹ 375 and a smaller similar one costs ₹ 135 (same rate). The base of the big one is 30 cm. Find the corresponding base of the small one.
9. Two similar triangles have areas 18 cm² and 90 cm². Show that each side of the bigger triangle is between 2.2 and 2.3 times the corresponding side of the smaller one.
10. ΔABC ~ ΔPQR and ar(ΔABC) : ar(ΔPQR) = 16 : 81. If the altitude AD = 12 cm, find the corresponding altitude PS.
11. Two similar triangles have sides in the ratio 3 : 7. A median of the smaller triangle is 6.6 cm. Find the corresponding median of the larger triangle.
12. Prove that the ratio of the areas of two similar triangles is equal to the ratio of the squares of their corresponding altitudes.
13. A rectangular cloth label measures 6 cm by 11 cm. A similar label is made with every length 4 times as big. Find the ratio of their areas and the area of the bigger label.
14. Two similar triangles have areas 72 cm² and 98 cm². The perimeter of the bigger triangle is 91 cm. Find the perimeter of the smaller triangle.
15. State True or False.
    (a) If the sides of two similar triangles are in the ratio 2 : 5, their areas are in the ratio 2 : 5.
    (b) Two similar triangles with equal areas are congruent.
    (c) If two similar triangles have areas in the ratio 4 : 49, their perimeters are in the ratio 2 : 7.
    (d) In ΔABC with DE ∥ BC, ar(ΔADE) : ar(BCED) = (AD : DB)².
    (e) If D and E are mid-points of AB and AC, then ar(BCED) = 3 × ar(ΔADE).
    (f) A kite made with every length doubled needs twice the cloth.

### Answers

1. Side ratio BC/EF = 10/16 = 5/8, to area ratio = 25/64. 75 / ar(ΔDEF) = 25/64, to ar(ΔDEF) = 75 × 64/25 = **192 cm².**
   Jaanch: 192/75 = 64/25 = (8/5)² ✅

2. Area ratio 144 : 324 = 4 : 9, to side ratio 2 : 3. 18 / XY = 2/3, to XY = 18 × 3/2 = **27 cm.**
   Jaanch: (18/27)² = 4/9 = 144/324 ✅

3. Side ratio = √25 : √49 = 5 : 7, aur perimeter ka ratio bhi 5 : 7. 30 / x = 5/7, to x = 30 × 7/5 = **42 cm.**
   Jaanch: 30 : 42 = 5 : 7 ✅. (Dhyan: perimeter ka ratio square nahi hota.)

4. AD/AB = 3/(3 + 4) = 3/7, to ar(ΔADE) = 196 × (3/7)² = 196 × 9/49 = **36 cm².** Trapezium = 196 − 36 = **160 cm².**
   Jaanch: 36/196 = 9/49 ✅ aur 36 + 160 = 196 ✅

5. ar(ΔABC) = 9 + 16 = 25 (parts mein), to ar(ΔADE) : ar(ΔABC) = 9 : 25, aur DE/BC = √9/√25 = 3/5. 15 / BC = 3/5, to BC = 15 × 5/3 = **25 cm.**
   Jaanch: (15/25)² = 9/25 ✅

6. D, E mid-points hain, to AD/AB = ½, to ar(ΔADE) = ¼ ar(ΔABC), aur trapezium = ¾ ar(ΔABC) = 117. To ar(ΔABC) = 117 × 4/3 = **156 cm²**, aur ar(ΔADE) = 156/4 = **39 cm².**
   Jaanch: 39 + 117 = 156 ✅

7. Sides ratio 3 : 8, to area ratio 9 : 64, aur kharcha area ke saath badhta hai. Bade ka kharcha = 72 × 64/9 = 8 × 64 = **₹ 512.**
   Jaanch: 512/72 = 64/9 = (8/3)² ✅
   Story check: sides lagbhag 2.7 guna, to kharcha 2.7 guna (₹ 192) nahi, 7 guna se bhi zyada (₹ 512): k² ke hisaab se theek.

8. Kharche ka ratio = area ratio = 375 : 135 = 25 : 9, to side ratio = 5 : 3 (bada : chhota). 30 / x = 5/3, to x = 30 × 3/5 = **18 cm.**
   Jaanch: (18/30)² = 9/25 aur 135/375 = 9/25 ✅

9. Area ratio 18 : 90 = 1 : 5, to bade ki sides chhote ki √5 guna hain. 2.2² = 4.84 aur 2.3² = 5.29. 5, 4.84 aur 5.29 ke beech mein hai, to 2.2 < √5 < 2.3.
   Jaanch: 2.25² = 5.0625, jo 5 ke bahut paas hai, to √5 lagbhag 2.24 hai ✅

10. Area ratio 16 : 81, to k = √16 : √81 = 4 : 9. Altitudes ka ratio bhi k hai: 12 / PS = 4/9, to PS = 12 × 9/4 = **27 cm.**
    Jaanch: (12/27)² = (4/9)² = 16/81 ✅

11. Medians ka ratio sides ke ratio ke barabar: 6.6 / x = 3/7, to x = 6.6 × 7/3 = 2.2 × 7 = **15.4 cm.**
    Jaanch: 6.6 : 15.4 = 3 : 7 (dono ko 2.2 se bhaag karo: 3 aur 7) ✅

12. ΔABC ~ ΔPQR, AD aur PS jodidaar altitudes. Part A ke saboot ke Step 2 se AD/PS = k, aur theorem se ar(ΔABC) : ar(ΔPQR) = k². To ar(ΔABC) / ar(ΔPQR) = k² = (AD/PS)² = AD² / PS² **hence proved.**
    Jaanch: base 6, height 9 aur base 10, height 15 wale similar triangles lo (areas 27 aur 75): 27/75 = 9/25 aur (9/15)² = 9/25 ✅

13. k = 4, to area ratio = 4² = **16 : 1** (bada : chhota). Chhota label area = 6 × 11 = 66 cm². Bada = 66 × 16 = **1056 cm².**
    Jaanch: sides 24 × 44 = 1056 ✅

14. Area ratio 72 : 98 = 36 : 49, to side ratio = 6 : 7, perimeter ratio bhi 6 : 7. Chhote ka perimeter = 91 × 6/7 = 13 × 6 = **78 cm.**
    Jaanch: 78 : 91 = 6 : 7 (dono ko 13 se bhaag karo) ✅, aur (78/91)² = 36/49 = 72/98 ✅

15. (a) **False** ❌. Areas ka ratio 4 : 25 hota hai (square).
    (b) **True** ✅. k² = 1 se k = 1, to sides barabar: congruent.
    (c) **True** ✅. Side ratio √4 : √49 = 2 : 7, aur perimeter ka ratio side ratio ke barabar.
    (d) **False** ❌. Sahi hai ar(ΔADE) : ar(ΔABC) = (AD : AB)². Trapezium ke saath ratio alag aata hai.
    (e) **True** ✅. ΔADE ¼ part hai, to trapezium ¾ part: 3 guna.
    (f) **False** ❌. Har lambai doguni to area 4 guna, to kapda bhi 4 guna lagega.

---

Aaj tumne dekha ki lambai doguni karne se area doguna nahi, **chaar guna** hota hai, aur Kajal ke patang ke kapde ka kharcha 2.5 guna nahi, 6.25 guna kyon badhta hai. Ab jab bhi koi cheez "do guna bada" bataayi jaaye (poster, jhanda, kapda), to tum pehle sawaal poochh sakte ho: kya lambai do guna hai ya area? Aur jawab k ya k² mein tum nikaal sakte ho.

**Aage kya?** Topic 6 mein chapter ke saare auzaar (BPT, AA, SSS, SAS, altitude relation aur area ratio) ek saath milkar chalenge: word problems, practice aur chapter ka saar.

