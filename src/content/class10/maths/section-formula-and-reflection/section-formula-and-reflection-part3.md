# Chapter: Section Formula and Reflection (Part 3)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [section-formula-and-reflection-part2.md](section-formula-and-reflection-part2.md) se aage chalti hai** (wahan Topic 2 mein section formula se ratio dhundhna, anjaan coordinate nikaalna aur parallelogram ka chautha vertex dekha). Chapter ki shuruaat: [section-formula-and-reflection.md](section-formula-and-reflection.md). Purani baatein: median aur centroid [triangles-part2.md](../../../class9/maths/triangles/triangles-part2.md), mid-point formula [distance-formula-part4.md](../../../class9/maths/distance-formula/distance-formula-part4.md), Mid-point Theorem [quadrilaterals-part2.md](../../../class9/maths/quadrilaterals/quadrilaterals-part2.md), AA test [similar-triangles-part3.md](../similar-triangles/similar-triangles-part3.md).
> **Topics covered in this file:**
> 3. Triangle Ka Santulan Point: Centroid

---

# Topic 3: Triangle Ka Santulan Point: Centroid

Topic 1 mein humne section formula seekha: agar P, segment AB ko AP : PB = m : n mein baante, to P ke coordinates x = (m x₂ + n x₁)/(m + n) aur y = (m y₂ + n y₁)/(m + n) hote hain. Topic 2 mein usi formula se ratio, anjaan coordinate aur parallelogram ka chautha vertex nikaale. Ab hum ek **triangle** par aate hain. Class 9 mein centroid ko dekha tha, par bas ek fact ki tarah: wahan likha tha ki 2 : 1 wali baat ka proof aage aayega. Ab hamare paas mid-point formula, section formula aur Chapter 9 ke similar triangles teeno hain, to centroid ke **numbers** bhi nikaalenge aur 2 : 1 ka **proof** bhi dekhenge.

---

## Naitik ka gatte ka sign

Naitik ne Eco Club ke liye gatte (cardboard) ka ek tikona sign design kiya. Wo use pencil ki nok par balance karke ghumana chahta hai, ek chhote spinner ki tarah. Papa ne kaha, "Pehle kaatne se pehle hi balance wali jagah nishan laga lo, warna poora sign kharab ho sakta hai."

Naitik ne graph paper par apna plan banaya (1 khana = 1 cm). Sign ke teen kone hain: A(−3, 9), B(5, −1) aur C(7, 7). Class 9 mein usne seekha tha ki balance wali jagah **centroid** hai, jo teeno medians ke milne ka point hota hai. Par graph paper par teeno medians kheenchna, un par nishan lagana, phir milne wala point padhna, kaafi lamba kaam hai.

Naitik ne poocha, "Kya teeno corners ke numbers se hi balance wale point ke numbers seedhe nikal sakte hain, bina kuch kheenche?" Papa muskuraaye, "Mid-point aur section formula ko kaam par lagao, jawab ek bahut chhota formula hoga."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Centroid formula** | Triangle ke teeno vertices ke x-coordinates ka average aur y-coordinates ka average: wahi centroid ke coordinates hain | Vertices (0, 0), (6, 0), (0, 3) ka centroid ((0 + 6 + 0)/3, (0 + 0 + 3)/3) = (2, 1) |
| **Gayab vertex (missing vertex)** | Triangle ke do vertices aur centroid pata ho, to teesre vertex ko dhundhna | Part C, Example 3 |

(Median, centroid aur "teen lines ka ek hi point par milna" Class 9 ke shabd hain. Is topic mein unka naya kaam coordinates se hai.)

---

## Class 9 aur pichhle topics se yaad

- **Median aur centroid** ([triangles-part2.md](../../../class9/maths/triangles/triangles-part2.md)): "Teeno medians hamesha **ek hi point** par milti hain" aur "Centroid har median ko **2 : 1** mein baant deta hai. Vertex wala hissa lamba (2 hisse), side wala hissa chhota (1 hissa)." Wahin ek note tha: "Is 2 : 1 wali baat ka proof aage ki classes mein aata hai."
- **Mid-point formula** ([distance-formula-part4.md](../../../class9/maths/distance-formula/distance-formula-part4.md)): A(x₁, y₁) aur B(x₂, y₂) ka mid-point ((x₁ + x₂)/2, (y₁ + y₂)/2) hota hai.
- **Section formula** (Topic 1, [section-formula-and-reflection.md](section-formula-and-reflection.md)): AP : PB = m : n ho to x = (m x₂ + n x₁)/(m + n), y = (m y₂ + n y₁)/(m + n). Yaad rakhne ki trick: m us point ke coordinate ke saath jaata hai jo **door wala** (B) hai.
- **Mid-point Theorem** ([quadrilaterals-part2.md](../../../class9/maths/quadrilaterals/quadrilaterals-part2.md)): "Kisi triangle ki do sides ke midpoints ko jodne wala line segment teesri side ke parallel hota hai, aur teesri side ka aadha hota hai." Isse hum 2 : 1 ka proof karenge.

---

## Part A: Naitik ke sign par centroid (graph par dekhna)

Teen corners: A(−3, 9), B(5, −1), C(7, 7). Pehle teeno sides ke **mid-point** nikaalte hain (Class 9 ka mid-point formula):

- D = BC ka mid-point = ((5 + 7)/2, (−1 + 7)/2) = (6, 3)
- E = CA ka mid-point = ((7 − 3)/2, (7 + 9)/2) = (2, 8)
- F = AB ka mid-point = ((−3 + 5)/2, (9 − 1)/2) = (1, 4)

Teeno medians hain AD, BE aur CF.

```
                 y
  9  A           :
  8              :       E
  7              .                           C
  6              :                   .
  5              :           G
  4              :   F
  3              :                       D
  2              :               .
  1              :
  0 -------------+------------------------------ x
 −1              :                   B
    −3  −2  −1   0   1   2   3   4   5   6   7
```

> **Figure 3.1** – Naitik ka plan graph paper par (y-axis colon ':' se, x-axis dashes '-' se, origin '+'; figure naap ke hisaab se nahi hai, 1 khana = 1 cm). Letters A, B, C corners hain, D, E, F sides ke mid-points aur G medians ke milne ka point. Dots (.) har median par bache hue grid ke point hain: (0, 7) A aur G ke beech (y-axis par hi), (4, 2) B aur G ke beech, (5, 6) C aur G ke beech. Sides figure mein nahi kheenchi gayi hain, sirf points hain.

Figure se gino: median AD par chalo to A se G tak **2 qadam** (A, dot, G) aur G se D tak **1 qadam**. Median BE par B se G tak 2 qadam (B, dot, G), G se E tak 1 qadam. Median CF par bhi C se G tak 2 qadam aur G se F tak 1 qadam. Teeno medians G(3, 5) par milti dikh rahi hain, aur har ek ko 2 : 1 mein baant rahi hain. Ab ise **numbers se** pakkaa karte hain.

### Teeno medians par 2 : 1 wala point

Median AD par A se 2 : 1 wala point: AG : GD = 2 : 1 hai, to section formula mein m = 2 (door wale D ke saath) aur n = 1:

- AD par: x = (2 × 6 + 1 × (−3))/3 = 9/3 = 3, y = (2 × 3 + 1 × 9)/3 = 15/3 = 5, yaani (3, 5)
- BE par (B pehla point, E(2, 8)): x = (2 × 2 + 1 × 5)/3 = 9/3 = 3, y = (2 × 8 + 1 × (−1))/3 = 15/3 = 5, yaani (3, 5)
- CF par (C pehla point, F(1, 4)): x = (2 × 1 + 1 × 7)/3 = 9/3 = 3, y = (2 × 4 + 1 × 7)/3 = 15/3 = 5, yaani (3, 5)

Teeno ne **ek hi point** G(3, 5) diya. Matlab teeno medians G se guzarti hain, aur G har ek ko 2 : 1 mein baantta hai.

Jaanch (doori se): AG = √((3 + 3)² + (5 − 9)²) = √(36 + 16) = √52 = 2√13 aur GD = √((6 − 3)² + (3 − 5)²) = √(9 + 4) = √13. AG : GD = 2√13 : √13 = 2 : 1 ✅

### Kyun? Class 9 ka vaada: 2 : 1 ka proof

Upar humne sirf **ek** triangle par check kiya. Ab saare triangles ke liye sach dikhate hain. ΔABC mein E, AC ka mid-point hai aur F, AB ka mid-point. Medians BE aur CF andar ek point G par milti hain (figure se saaf dikhta hai).

1. Mid-point Theorem se FE ∥ BC aur FE = ½ BC.
2. ΔGEF aur ΔGBC mein: ∠GEF = ∠GBC (FE ∥ BC aur BE transversal, alternate angles) aur ∠GFE = ∠GCB (FE ∥ BC aur CF transversal, alternate angles). Chapter 9 ke **AA test** se ΔGEF ~ ΔGBC.
3. Similar triangles ki sides ek hi ratio mein hoti hain, aur ratio FE : BC = 1 : 2 hai. To GE : GB = 1 : 2 aur GF : GC = 1 : 2.

Yaani BG : GE = 2 : 1 aur CG : GF = 2 : 1. **Koi bhi do medians ek doosre ko vertex ki taraf se 2 : 1 mein kaatti hain.**

Teeno medians ek hi point par kyun milti hain? Teesri median AD, median BE ko kisi point G′ par milti hai. Wahi tark (medians AD aur BE ke liye) dikhata hai ki BG′ : G′E = 2 : 1. BE par B se 2 : 1 wala point sirf **ek** hi hota hai, isliye G′ = G. To AD bhi G se guzarti hai. (Ek baat hum maan rahe hain: do medians andar ek point par milti hain, jo figure mein dikhta hai.)

---

## Part B: Centroid ka formula (kyun, phir derivation)

Naitik ko ye teen-teen section formula har triangle par nahi lagane. Wo ek hi baar general triangle par lagakar chhota formula banata hai.

ΔABC ke vertices A(x₁, y₁), B(x₂, y₂), C(x₃, y₃) hain. D, BC ka mid-point hai:

D = ((x₂ + x₃)/2, (y₂ + y₃)/2)

Centroid G median AD ko AG : GD = 2 : 1 mein baantta hai. Section formula mein m = 2 (D ke saath) aur n = 1 (A ke saath):

x = (2 × (x₂ + x₃)/2 + 1 × x₁)/3 = (x₂ + x₃ + x₁)/3

y = (2 × (y₂ + y₃)/2 + 1 × y₁)/3 = (y₂ + y₃ + y₁)/3

> **Centroid formula:** G = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)

**Teeno x ka average aur teeno y ka average.** Class 9 mein do points ka mid-point do ka average tha, ab teen points ka centroid teen ka average hai.

Dhyan do ki formula x₁, x₂, x₃ mein **barabar** (symmetrical) hai: kisi bhi vertex ko pehle rakho, answer wahi. Isliye median BE ya CF se shuru karte to bhi wahi G milta. (Ye hamare Part A ke teeno 3 aur 5 ka reason bhi hai.) Is derivation mein jo 2 : 1 wali baat lagi, wo upar proof ho chuki hai, to ye formula bhi ab proved hai (bas ek maani hui baat ke saath: do medians andar ek point par milti hain).

Jaanch Naitik ke sign se: x = (−3 + 5 + 7)/3 = 9/3 = 3, y = (9 − 1 + 7)/3 = 15/3 = 5. G = (3, 5), bilkul Part A wala ✅

**Balance ki baat:** Gatte ka sign G(3, 5) par pencil ki nok par balance hoga. Ye ek bhautik (physical) baat hai jo hum Class 9 ki tarah maan lete hain, iska proof yahan nahi hai.

---

## Part C: Solved examples

(Har example mein letters naye hain, pichhle examples se koi sambandh nahi.)

### Example 1: Seedha centroid, do tarah se jaanch

Triangle LMN ke vertices L(−10, 2), M(6, −9), N(10, 4) hain. Centroid dhoondho.

x = (−10 + 6 + 10)/3 = 6/3 = 2
y = (2 − 9 + 4)/3 = −3/3 = −1

**G = (2, −1)**

Jaanch (doosra tareeka, median par 2 : 1): MN ka mid-point = ((6 + 10)/2, (−9 + 4)/2) = (8, −5/2). L se 2 : 1: x = (2 × 8 + 1 × (−10))/3 = 6/3 = 2, y = (2 × (−5/2) + 1 × 2)/3 = (−5 + 2)/3 = −1. Dono tareeke (2, −1) par aaye ✅

### Example 2: Jab centroid ke coordinates fraction hon

Triangle UVW ke vertices U(−9, −4), V(2, 10), W(6, −3) hain. Centroid dhoondho.

x = (−9 + 2 + 6)/3 = −1/3
y = (−4 + 10 − 3)/3 = 3/3 = 1

**G = (−1/3, 1)**

Integer vertices ka centroid integer hona zaroori nahi. Jab sum 3 se kat na jaye, to fraction hi sahi answer hai.

Jaanch: VW ka mid-point = (4, 7/2). U se 2 : 1: x = (2 × 4 + 1 × (−9))/3 = −1/3, y = (2 × 7/2 + 1 × (−4))/3 = (7 − 4)/3 = 1. Same ✅

### Example 3: Gayab vertex

Triangle ke do vertices (8, −6) aur (−10, 3) hain, teesra vertex (x, y) hai, aur centroid (1, 2) hai. Teesra vertex dhoondho.

Centroid formula ulta lagao:
(8 − 10 + x)/3 = 1, to −2 + x = 3, **x = 5**
(−6 + 3 + y)/3 = 2, to −3 + y = 6, **y = 9**

**Teesra vertex = (5, 9)**

Shortcut: teesra vertex = 3 × centroid − baaki do vertices ka jod = (3 − (−2), 6 − (−3)) = (5, 9).

Jaanch: ((8 − 10 + 5)/3, (−6 + 3 + 9)/3) = (3/3, 6/3) = (1, 2) ✅

### Example 4: Isosceles triangle par sanity check

Triangle PQR ke vertices P(−8, −3), Q(4, −3), R(−2, 9) hain. Centroid nikaalo aur dekho ki sahi hai ya nahi.

```
                                     y
  9                          R       :
  8                          .       :
  7                          .       :
  6                          .       :
  5                          .       :
  4                          .       :
  3                          .       :
  2                          .       :
  1                          G       :
  0 -------------------------.-------+------------------ x
 −1                          .       :
 −2                          .       :
 −3  P                       M       :               Q
    −8  −7  −6  −5  −4  −3  −2  −1   0   1   2   3   4
```

> **Figure 3.2** – Isosceles triangle PQR (axes pehle jaisi: y-axis colon ':', x-axis dashes '-', origin '+'; figure naap ke hisaab se nahi hai). M, PQ ka mid-point hai aur dots R se M tak ke grid points hain. G centroid hai.

x = (−8 + 4 − 2)/3 = −6/3 = −2
y = (−3 − 3 + 9)/3 = 3/3 = 1

**G = (−2, 1)**

Sanity check: PR² = (−2 + 8)² + (9 + 3)² = 36 + 144 = 180 aur QR² = (−2 − 4)² + (9 + 3)² = 36 + 144 = 180, to PR = QR: triangle isosceles hai. PQ ka mid-point M(−2, −3) hai, aur R(−2, 9) uske theek upar hai, yaani median RM seedhi khadi line x = −2 par hai. Symmetry se centroid isi line par hoga, aur G ka x = −2 bhi yahi hai. Is median ki lambai 9 − (−3) = 12 hai. G ki oonchai base se 1 − (−3) = 4 hai, yaani median ka ek-tihai (1/3).

Jaanch: RG = 9 − 1 = 8, GM = 1 − (−3) = 4. RG : GM = 8 : 4 = 2 : 1 ✅

### Example 5: Teen dost, ek milne ki jagah

Teen dost ek map par rehte hain (1 khana = 100 m). Unke ghar (−10, 5), (8, 10) aur (5, −3) par hain. Unhone socha ki milne ki jagah teeno ke x ka average aur y ka average ho. Wo jagah kahan hogi, aur har dost ko kitna chalna padega?

x = (−10 + 8 + 5)/3 = 3/3 = 1
y = (5 + 10 − 3)/3 = 12/3 = 4

**Milne ki jagah = (1, 4)**

Doori (khanon mein): (−10, 5) se √(11² + 1²) = √122, (8, 10) se √(7² + 6²) = √85, (5, −3) se √(4² + 7²) = √65. Yaani lagbhag 11.0, 9.2 aur 8.1 khane, matlab lagbhag 1.1 km, 0.92 km aur 0.81 km.

Story check: milne ki jagah teeno gharon ke beech ke andar hai: x = 1, −10 aur 8 ke beech, y = 4, −3 aur 10 ke beech. Teeno ko barabar chalna nahi padta, kyunki centroid barabar doori wala point nahi hai (wo teeno vertices se barabar doori wala point Class 9 ka circumcentre hota hai, alag point).

Jaanch: teeno x ka jod = −10 + 8 + 5 = 3 = 3 × 1 aur teeno y ka jod = 5 + 10 − 3 = 12 = 3 × 4 ✅

---

## Aam galtiyan (bachke rehna)

### Galti 1: Median ko vertex se 1 : 2 mein baantna

Triangle XYZ ke vertices X(−9, 6), Y(5, −7), Z(1, −5) hain. Ek student ne soch liya ki centroid vertex ke paas wala "chhota hissa" hai, aur median XM (M = YZ ka mid-point) ko X se 1 : 2 mein baant diya.

M = ((5 + 1)/2, (−7 − 5)/2) = (3, −6).
Galat (1 : 2, m = 1): x = (1 × 3 + 2 × (−9))/3 = −15/3 = −5, y = (1 × (−6) + 2 × 6)/3 = 6/3 = 2. Galat point **(−5, 2)**.

Sahi (2 : 1, m = 2): x = (2 × 3 + 1 × (−9))/3 = −3/3 = −1, y = (2 × (−6) + 1 × 6)/3 = −6/3 = −2. Sahi centroid **(−1, −2)**.

Jaanch (galat point ko radd karna): centroid formula se x = (−9 + 5 + 1)/3 = −1, y = (6 − 7 − 5)/3 = −2, to centroid (−1, −2) hai ✅. Galat point (−5, 2) isse alag hai. Dekho kyun: XP² = (−5 + 9)² + (2 − 6)² = 32 aur PM² = (3 + 5)² + (−6 − 2)² = 128, yaani XP : PM = 1 : 2, jabki centroid par XG : GM = 2 : 1 hona chahiye.

**Yaad rakho:** Centroid ka **bada hissa vertex ki taraf** hai, **chhota hissa side ke mid-point ki taraf**. Vertex se 2, mid-point se 1.

### Galti 2: Teeno ko jodkar 2 se bhaag dena

Triangle KLM ke vertices K(5, 7), L(9, 2), M(6, 10) hain. Ek student ne Class 9 ke mid-point formula ki aadat se jode huye numbers ko 2 se bhaag diya:

x = (5 + 9 + 6)/2 = 20/2 = 10, y = (7 + 2 + 10)/2 = 19/2. Galat point **(10, 19/2)**.

Sahi: teen points hain, to 3 se bhaagna hai. x = 20/3, y = 19/3. Sahi centroid **(20/3, 19/3)**.

Jaanch (galat point ko radd karna): corners ke x 5, 9, 6 hain, sabse bada x = 9. Galat answer ka x = 10 usse bhi bada hai, yaani point triangle ke **bahar** nikla, jabki centroid hamesha andar hota hai. Sahi wale ka x = 20/3 (lagbhag 6.67) 5 aur 9 ke beech hai, aur y = 19/3 (lagbhag 6.33) 2 aur 10 ke beech hai ✅. Doosre tareeke se: LM ka mid-point (15/2, 6), K se 2 : 1: x = (2 × 15/2 + 5)/3 = 20/3, y = (2 × 6 + 7)/3 = 19/3 ✅

**Yaad rakho:** kitne points ka average, utne se bhaag. Do points ka mid-point ÷ 2, teen vertices ka centroid ÷ 3. Aur x ko x ke saath, y ko y ke saath hi jodo, kabhi x aur y ko aapas mein nahi.

---

## Quick Recap

- Median: vertex se saamne wali side ke mid-point tak ki line. Teeno medians centroid G par milti hain.
- Centroid har median ko vertex ki taraf se **2 : 1** mein baantta hai (AG : GD = 2 : 1). Proof: Mid-point Theorem aur AA test se.
- **Centroid formula:** G = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3). Ye mid-point formula aur 2 : 1 section formula se nikla.
- Teesra vertex = 3 × centroid − baaki do vertices ka jod.
- Do tareeke ek hi jawab dete hain: teeno ka average, ya median par 2 : 1 ka section point. Jaanch ke liye dono use karo.
- Centroid hamesha triangle ke andar hota hai: uske coordinates corners ke sabse chhote aur sabse bade coordinate ke beech hote hain.
- Gatte ka triangle centroid par balance hota hai (maani hui bhautik baat).
- Galtiyan: 1 : 2 mein baantna, aur 2 se bhaagna.

---

## Practice Questions

1. Find the centroid of the triangle with vertices (10, −6), (−7, 9) and (−9, 3).
2. Find the centroid of the triangle with vertices (8, −10), (−6, 5) and (−5, 9).
3. Two vertices of a triangle are (4, −9) and (−10, 8), and its centroid is (−2, 0). Find the third vertex.
4. The vertices of a triangle are (t, −7), (7, 2t) and (−4, 5). The centroid lies on the y-axis. Find t, and then the centroid.
5. In the triangle with vertices A(−9, −10), B(−10, 4) and C(4, −8), find the length of the median from A, and the distance from A to the centroid G.
6. A right-angled triangle has vertices (0, 0), (−9, 0) and (0, 10). Find its centroid.
7. True or false: if all three vertices of a triangle have integer coordinates, then its centroid also has integer coordinates. Give a reason, with an example if it is false: use the triangle with vertices (2, 1), (3, 5) and (6, 2).
8. A canopy has three pillars. Two of them stand at (−6, 4) and (8, −5) (1 unit = 1 m). The lamp hook is to be fixed at the centroid of the pillar positions, and it is at (3, 1). Where is the third pillar?
9. A triangular cardboard has its corners at (−10, −2), (4, 9) and (7, −5) on graph paper (1 unit = 1 cm). Where should the pencil tip be placed to balance it?
10. In triangle ABC, A = (−10, 9) and the centroid is G(−4, 3). Find the mid-point D of BC, and check that G divides AD in the ratio 2 : 1.
11. True or false: the centroid of the triangle with vertices (−9, 9), (9, 9) and (0, −9) lies on the y-axis. Give a reason, and find the centroid.
12. In triangle PQR, P = (10, −4), Q = (−8, 0) and R = (4, 10). Find the centroid G, the mid-point D of QR, and show by the distance formula that PG : GD = 2 : 1.

### Answers

1. x = (10 − 7 − 9)/3 = −6/3 = −2, y = (−6 + 9 + 3)/3 = 6/3 = 2. **G = (−2, 2)**.
   Jaanch: 3 × (−2) = −6 = 10 − 7 − 9 aur 3 × 2 = 6 = −6 + 9 + 3 ✅

2. x = (8 − 6 − 5)/3 = −3/3 = −1, y = (−10 + 5 + 9)/3 = 4/3. **G = (−1, 4/3)**.
   Jaanch: 3 × (4/3) = 4 = −10 + 5 + 9 aur 3 × (−1) = −3 = 8 − 6 − 5 ✅

3. Maan lo teesra vertex (a, b). (4 − 10 + a)/3 = −2, to −6 + a = −6, **a = 0**. (−9 + 8 + b)/3 = 0, to −1 + b = 0, **b = 1**. **Teesra vertex = (0, 1)**.
   Jaanch: ((4 − 10 + 0)/3, (−9 + 8 + 1)/3) = (−2, 0) ✅

4. y-axis par kisi bhi point ka x = 0 hota hai, to centroid ka x = 0: (t + 7 − 4)/3 = 0, t + 3 = 0, **t = −3**. Vertices (−3, −7), (7, −6), (−4, 5). Centroid y = (−7 − 6 + 5)/3 = −8/3. **Centroid = (0, −8/3)**.
   Jaanch: x = (−3 + 7 − 4)/3 = 0/3 = 0 ✅

5. BC ka mid-point D = ((−10 + 4)/2, (4 − 8)/2) = (−3, −2). Median AD = √((−3 + 9)² + (−2 + 10)²) = √(36 + 64) = **10**. G = ((−9 − 10 + 4)/3, (−10 + 4 − 8)/3) = (−5, −14/3). AG = √((−5 + 9)² + (−14/3 + 10)²) = √(16 + 256/9) = √(400/9) = **20/3**.
   Jaanch: AG ko median ka 2/3 hona chahiye: (2/3) × 10 = 20/3 ✅

6. x = (0 − 9 + 0)/3 = −3, y = (0 + 0 + 10)/3 = 10/3. **G = (−3, 10/3)**: har coordinate us leg ki lambai ka ek-tihai hai (9 ka 1/3 left mein aur 10 ka 1/3 upar).
   Jaanch: hypotenuse ka mid-point (−9/2, 5). Origin se 2 : 1: x = (2 × (−9/2) + 0)/3 = −3, y = (2 × 5 + 0)/3 = 10/3 ✅

7. **Galat** ❌. Centroid ke coordinates sum ÷ 3 hain, aur sum 3 se kat na jaye to fraction aata hai. Example: x = (2 + 3 + 6)/3 = 11/3, y = (1 + 5 + 2)/3 = 8/3. Centroid (11/3, 8/3), integer nahi.
   Jaanch: 11 aur 8 dono 3 se nahi katte, to answer integer ho hi nahi sakta ✅

8. Maan lo teesra pillar (x, y). (−6 + 8 + x)/3 = 3, to 2 + x = 9, **x = 7**. (4 − 5 + y)/3 = 1, to −1 + y = 3, **y = 4**. **Teesra pillar (7, 4)** par hai.
   Story check: hook (3, 1) teeno pillars ke andar wale hisse mein hai: x = 3, −6 aur 8 ke beech; y = 1, −5 aur 4 ke beech.
   Jaanch: ((−6 + 8 + 7)/3, (4 − 5 + 4)/3) = (3, 1) ✅

9. x = (−10 + 4 + 7)/3 = 1/3, y = (−2 + 9 − 5)/3 = 2/3. **Pencil ki nok (1/3, 2/3)** par, yaani lagbhag (0.33 cm, 0.67 cm) par.
   Story check: ye point graph paper ke origin ke bahut paas hai, aur teeno corners ke andar hai (x = 1/3, −10 aur 7 ke beech; y = 2/3, −5 aur 9 ke beech).
   Jaanch: 3 × (1/3) = 1 = −10 + 4 + 7 aur 3 × (2/3) = 2 = −2 + 9 − 5 ✅

10. G, AD ko 2 : 1 mein baantta hai: (2 × x_D + 1 × (−10))/3 = −4, to 2 x_D = −2, x_D = −1. (2 × y_D + 1 × 9)/3 = 3, to 2 y_D = 0, y_D = 0. **D = (−1, 0)**.
    Jaanch: AG² = (−4 + 10)² + (3 − 9)² = 72, GD² = (−1 + 4)² + (0 − 3)² = 18. AG : GD = √72 : √18 = 6√2 : 3√2 = 2 : 1 ✅

11. **Sahi** ✅. Teeno x ka jod = −9 + 9 + 0 = 0, to centroid ka x = 0, yaani point y-axis par hai. y = (9 + 9 − 9)/3 = 3. **Centroid = (0, 3)**.
    Jaanch: triangle symmetrical hai (−9 aur 9 y-axis ke dono taraf barabar), to centroid y-axis par hona chahiye, jo mila ✅

12. G = ((10 − 8 + 4)/3, (−4 + 0 + 10)/3) = (6/3, 6/3) = **(2, 2)**. D = ((−8 + 4)/2, (0 + 10)/2) = **(−2, 5)**. PG = √((2 − 10)² + (2 + 4)²) = √(64 + 36) = 10. GD = √((−2 − 2)² + (5 − 2)²) = √(16 + 9) = 5. PG : GD = 10 : 5 = **2 : 1**.
    Jaanch: PD = √((−2 − 10)² + (5 + 4)²) = √(144 + 81) = 15 = 10 + 5 ✅

---

Shabaash! Ab tum kisi bhi triangle ke teen corners dekhkar uska balance point seedha likh sakte ho: teeno x ka average, teeno y ka average. Agle topic mein hum puchhenge: agar triangle ke teen corners ke coordinates pata hon, to usse kaatne ke liye bina length aur height naape uska **area** kaise nikaalein? Topic 4 mein coordinates se triangle aur quadrilateral ka area aayega.
