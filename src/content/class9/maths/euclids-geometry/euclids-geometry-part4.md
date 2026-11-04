# Chapter: Introduction to Euclid's Geometry (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [euclids-geometry-part3.md](euclids-geometry-part3.md) se aage chalti hai.** (Topic 1 [euclids-geometry.md](euclids-geometry.md) mein, Topic 2 [euclids-geometry-part2.md](euclids-geometry-part2.md) mein hai.)
> **Topics covered in this file:**
> 4. Theorems

---

# Topic 4: Theorems

Topic 3 mein humne ginti kari ki ek point, do points ya bahut saare points se kitni lines guzar sakti hain. Wahan ye bhi dekha tha ki do alag lines aapas mein zyada se zyada **ek hi point** share karti hain. Tab humne ye baat **dekh kar aur samajh kar** maan li thi.

Par maths mein "dekhne mein lagta hai" kaafi nahi hota. Har nayi baat ko **saabit (prove)** karna padta hai, aur wo bhi sirf un niyamon se jo humne Topic 1 mein Euclid ke **axioms aur postulates** ke roop mein, aur Topic 2 mein **incidence axioms** ke roop mein seekhe the. Isi saabit ki hui baat ko **theorem** kehte hain. Is aakhri topic mein hum seekhenge ki theorem kya hai, proof kaise likhte hain, aur Euclid ke kuch pehle theorems ko khud saabit karenge.

---

## Ek jasoos ki kahani

Mohalle mein ek ghar se mithai ka dabba gayab ho gaya. Jasoos Rani case sambhalti hai.

Uske paas teen cheezein hain:

1. **Suraag (clues):** Dabba shaam 5 baje tak tha. 5 se 6 ke beech ghar mein sirf Golu aaya. Golu ke haath par chashni lagi thi.
2. **Pakke niyam (rules) jo sab maante hain:** "Koi cheez apne aap gayab nahi hoti." "Ek waqt par ek insaan do jagah nahi ho sakta."
3. **Sochne ka tarika:** Har kadam par wo batati hai ki ye baat **kis suraag ya kis niyam se** nikli.

Kadam dar kadam sochkar wo nateeje par pahunchti hai: **"Mithai Golu ne khayi."** Aur kyunki har kadam ka **reason** diya gaya hai, koi bhi us nateeje ko jhuthla nahi sakta.

Geometry mein bhi bilkul yahi hota hai:

| Jasoos ki duniya | Geometry ki duniya |
|---|---|
| Suraag | **Given** (jo sawal mein diya hai) |
| Pakke niyam jo sab maante hain | **Axioms aur postulates** (Topic 1) |
| Kadam dar kadam sochna, har kadam ka reason | **Proof** |
| Nateeja: "Mithai Golu ne khayi" | **Theorem** (saabit ki hui baat) |

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Theorem** | Aisi baat jo axioms, postulates aur pehle se saabit baaton se **proof karke** sach dikhayi jaye | Do alag lines ka zyada se zyada ek common point hota hai |
| **Proposition** | Euclid theorem ko "proposition" kehte the. Dono ka matlab ek hi hai | Euclid ka Proposition 1 |
| **Proof** | Kadam dar kadam tark (reasoning), jisme har kadam ka reason diya ho | Neeche ke saare examples |
| **Given** | Sawal mein jo pehle se diya hai | "C, AB ka midpoint hai" |
| **To prove** | Jo hume saabit karna hai | "AC = ½ AB" |
| **Statement aur Reason** | Proof ka har kadam (statement) aur wo kyun sach hai (reason) | "AC = BC" ... "Given" |
| **Proof by contradiction** | Ulta maan kar dikhana ki usse koi niyam toot jata hai, isliye ulta galat hai | "Do alag lines ka zyada se zyada ek common point" theorem ka proof |
| **Hence proved** | Proof khatam hone ki nishani (ise Q.E.D. bhi likhte hain) | Proof ke aakhir mein |

---

## Part A: Theorem aur Axiom mein farak

Topic 1 mein humne Euclid ke axioms aur postulates seekhe the. Wo aisi baatein hain jinhe **bina proof ke sach maan liya** jata hai, kyunki wo itni seedhi hain ki sab maante hain.

Theorem ka mamla ulta hai. Theorem **seedha nahi maana jata**, use **saabit karna padta hai**.

| | Axiom / Postulate | Theorem |
|---|---|---|
| Proof chahiye? | **Nahi.** Seedha maan lete hain | **Haan.** Saabit karna padta hai |
| Kahan se aata hai? | Roz ke anubhav se, sab ko sach lagta hai | Axioms, postulates aur pehle ke theorems se |
| Example | "Do alag points se ek hi line guzarti hai" | "Do alag lines ka zyada se zyada ek common point hota hai" |

Ise ek building ki tarah socho:
- **Axioms aur postulates** building ki **neev (foundation)** hain.
- **Theorems** neev par bani **manzilein** hain. Har nayi manzil neeche wali manzilon ke sahare khadi hoti hai.

Isliye ek theorem saabit hone ke baad, aage ke theorems mein use bhi **reason** ki tarah use kar sakte hain.

### Proofs mein kaam aane wale niyam (sirf yaad dilane ke liye)

Ye sab Topic 1 aur 2 mein aa chuke hain. Yahan sirf ek jagah rakh rahe hain, kyunki proofs mein inka **number** bolna padta hai.

| Number | Euclid ka axiom |
|---|---|
| Axiom 1 | Jo cheezein ek hi cheez ke barabar hain, wo aapas mein barabar hain |
| Axiom 2 | Barabar mein barabar jodo, to total barabar |
| Axiom 3 | Barabar mein se barabar ghatao, to bacha hua barabar |
| Axiom 4 | Jo cheezein ek doosre par poori tarah fit (coincide) ho jayein, wo barabar hain |
| Axiom 5 | Poora hamesha apne hisse se bada hota hai |
| Axiom 6 | Jo cheezein ek hi cheez ka dugna hain, wo aapas mein barabar hain |
| Axiom 7 | Jo cheezein ek hi cheez ka aadha hain, wo aapas mein barabar hain |

| Number | Euclid ka postulate |
|---|---|
| Postulate 1 | Kisi bhi ek point se kisi doosre point tak seedhi line kheenchi ja sakti hai |
| Postulate 2 | Seemit (terminated) line ko dono taraf jitna chaho badhaya ja sakta hai |
| Postulate 3 | Kisi bhi centre aur kisi bhi radius se circle banaya ja sakta hai |
| Postulate 4 | Saare right angles barabar hote hain |
| Postulate 5 | Parallel postulate: andar ke angles ka jod 180° se kam ho, to lines usi taraf milti hain (Topic 1, Part D) |

Aur ek aur niyam, jise Topic 2 mein humne **Incidence Axiom 3** kaha tha:

> **Do alag points se ek aur sirf ek line guzarti hai.**

Dhyan do: proofs mein "Axiom 1-7" ka matlab hamesha Euclid ke axioms hain, incidence axioms nahi. Aur Topic 2 ka Incidence Axiom 4 ("do alag lines zyada se zyada ek point par milti hain") asal mein theorem hai. Wahi neeche **"Do alag lines ka zyada se zyada ek common point" theorem** ke roop mein prove karenge.

---

## Part B: Proof kaise likhte hain

Har proof ka ek tay dhaancha (structure) hota hai. Jaise letter mein "Date, To, Subject, Body" hota hai, waise hi proof mein:

1. **Figure:** Ek saaf chhota sa diagram.
2. **Given:** Sawal mein kya diya hai.
3. **To prove:** Kya saabit karna hai.
4. **Proof:** Kadam dar kadam. Har kadam ke saath **reason** likho (kaunsa axiom, postulate, given, ya pehle ka theorem).
5. **Hence proved.**

Proof ko aksar table mein likhte hain, taaki har statement ka reason saaf dikhe:

| Statement | Reason |
|---|---|
| (pehla kadam) | (kyun sach hai) |
| (doosra kadam) | (kyun sach hai) |
| ... | ... |

Ek sunehra niyam yaad rakho:

> **Har statement ke saath reason do. Bina reason ka kadam proof nahi, sirf andaaza hai.**

---

## Part C: Proof by contradiction (ulta maan kar dekhna)

Kabhi kabhi seedha saabit karna mushkil hota hai. Tab ek chalaak tarika use karte hain.

### Ek roz ki misaal

Aapki dost kehti hai, "Main kal raat 9 baje ghar par thi."

Aap ulta maan lete ho: "Theek hai, maan lo tum 9 baje **cinema** mein thi."
Par aapke paas ek pakka sach hai: 9 baje tumhari video call mein tum ghar ke kamre mein dikh rahi thi. Ek insaan ek waqt par do jagah nahi ho sakta.

To jo ulta maana tha ("cinema mein thi"), wo ek pakke sach se takra gaya. Isliye **ulta maanna galat tha**, aur dost ki baat sahi hai.

### Proof by contradiction ke kadam

1. Jo saabit karna hai, uska **ulta maan lo**.
2. Us ulte se aage socho.
3. Kahin na kahin ek **pakka niyam (axiom/postulate) ya given** toot jayega. Isse **contradiction** (virodh) kehte hain.
4. Isliye ulta galat tha, aur jo saabit karna tha **wo sahi hai.**

Ab isi tarike se ek asli theorem saabit karte hain.

---

## Part D: "Do alag lines ka zyada se zyada ek common point" theorem

> **Theorem:** Do alag (distinct) lines mein **ek se zyada point common nahi** ho sakte.

Topic 2 (Incidence Axiom 4) aur Topic 3 mein ye baat humne dekh kar maani thi. Ab ise saabit karte hain.

```
              l
               \     m
                \   /
                 \ /
                  P          <- do lines ek point P par milti hain
                 / \
                /   \
```

**Given:** l aur m do alag lines hain.

**To prove:** l aur m mein zyada se zyada ek point common hai.

**Proof (contradiction se):**

| Statement | Reason |
|---|---|
| 1. Maan lo l aur m **do alag points P aur Q** par milti hain. | Ulta maan liya (jo saabit karna hai uska ulta) |
| 2. To P aur Q dono line l par hain, aur dono line m par bhi hain. | Step 1 se |
| 3. Yaani do alag points P aur Q se **do alag lines** (l aur m) guzar rahi hain. | Step 2 se, aur given: l aur m alag hain |
| 4. Par do alag points se **sirf ek** line guzarti hai. | Do alag points se ek hi line (Incidence Axiom 3) |
| 5. Step 3 aur Step 4 aapas mein takra rahe hain. | Contradiction |
| 6. Isliye Step 1 ka maanna galat tha. l aur m do points share nahi kar sakti. | Step 5 se |

**Isliye do alag lines mein zyada se zyada ek point common hota hai. Hence proved.**

Dhyan do: proof ki chaabi **Incidence Axiom 3** (do alag points se ek hi line) thi. Theorem axioms ke sahare hi khada hai, yahi Part A wali building hai.

---

## Part E: Euclid ka Proposition 1 (Equilateral triangle banana)

Euclid ki kitaab "Elements" ka **sabse pehla proposition** yahi hai.

> **Proposition 1:** Kisi bhi diye hue line segment par ek **equilateral triangle** (teeno sides barabar) banaya ja sakta hai.

### Banane ke kadam

```
            C
           / \
          /   \
         /     \
        A-------B

   (A ko centre maan kar radius AB ka circle,
    B ko centre maan kar radius BA ka circle;
    dono circles upar C par milte hain)
```

1. Line segment **AB** diya hai.
2. **A** ko centre maan kar, radius **AB** se ek circle banao.
3. **B** ko centre maan kar, radius **BA** se ek doosra circle banao.
4. Dono circles jahan milte hain, us point ko **C** kaho.
5. **CA** aur **CB** ko jodo.

ΔABC hi hamara equilateral triangle hai. Ab ise saabit karte hain.

### Proof

**Given:** Line segment AB.

**To prove:** ΔABC equilateral hai, yaani AB = BC = CA.

| Statement | Reason |
|---|---|
| 1. A centre aur radius AB se circle banaya ja sakta hai. B centre aur radius BA se bhi. | Postulate 3 |
| 2. C ko A se aur C ko B se jod sakte hain (CA aur CB). | Postulate 1 |
| 3. AC = AB | Dono pehle circle (centre A) ki radius hain |
| 4. BC = AB | Dono doosre circle (centre B) ki radius hain |
| 5. AC = BC | Step 3 aur 4: dono AB ke barabar hain, to aapas mein barabar (**Axiom 1**) |
| 6. AB = BC = CA | Steps 3, 4, 5 se |

**Isliye ΔABC ek equilateral triangle hai. Hence proved.**

### Ek chhoti si dilchasp baat

Euclid ne yahan **bina bataye maan liya** ki dono circles kahin na kahin **milenge hi**. Ye baat unke kisi postulate mein seedhi likhi nahi thi. Baad mein mathematicians ne is chhoti si kami ko pakda. Iska matlab ye nahi ki proof galat hai, bas ye dikhata hai ki proofs mein **har chhupi hui maan-li gayi baat** par bhi nazar rakhni chahiye. Achha jasoos kuch bhi "maan" ke nahi chalta.

---

## Part F: Step by step proofs (har kadam par axiom ka naam)

### Example 1: AB + BC = AC

> A, B, C ek hi line par hain, aur B, A aur C ke beech mein hai. Saabit karo ki AB + BC = AC.

```
    A-----------B--------------C
```

**Given:** A, B, C collinear (ek line par) hain, B beech mein hai.
**To prove:** AB + BC = AC

| Statement | Reason |
|---|---|
| 1. AB aur BC ko saath rakho to wo segment AC par poori tarah fit ho jate hain. | B, A aur C ke beech hai |
| 2. AB + BC = AC | Jo cheezein coincide karein wo barabar hain (**Axiom 4**) |

**Hence proved.**

(Note: Is proof mein ye bhi maana gaya hai ki A aur C se ek hi line guzarti hai, jo Incidence Axiom 3 hai.)

### Example 2: Barabar mein se barabar ghatana

> A, B, C, D ek line par isi kram mein hain, aur AC = BD hai. Saabit karo ki AB = CD.

Topic 1 (Part E, Example 3) mein ye sawaal Axiom 3 ke example ki tarah dekha tha. Ab ise poore proof ke dhaanche mein likhte hain, har kadam ke reason ke saath.

```
    A--------B--------C--------D
```

**Given:** AC = BD, aur points A, B, C, D isi kram mein ek line par hain.
**To prove:** AB = CD

| Statement | Reason |
|---|---|
| 1. AC = AB + BC | B, A aur C ke beech hai (Axiom 4, Example 1 jaisa) |
| 2. BD = BC + CD | C, B aur D ke beech hai (Axiom 4) |
| 3. AB + BC = BC + CD | AC = BD diya hai, to Step 1 aur 2 barabar (**Axiom 1**) |
| 4. AB = CD | Dono taraf se **BC** ghatao. Barabar mein se barabar ghatane par bacha hua barabar (**Axiom 3**) |

**Hence proved.**

**Jaanch (numbers se):** Maan lo AB = 3, BC = 4, CD = 3. To AC = 7 aur BD = 7, barabar ✅. Aur AB = CD = 3 ✅

### Example 3: Midpoint ka aadha

> C, line segment AB ka midpoint hai. Saabit karo ki AC = ½ AB.

```
    A--------------C--------------B
```

**Given:** C, AB ka midpoint hai, yaani AC = BC.
**To prove:** AC = ½ AB

| Statement | Reason |
|---|---|
| 1. AC = BC | Given (midpoint ki definition) |
| 2. AC + AC = BC + AC | Dono taraf AC jodo. Barabar mein barabar jodne par total barabar (**Axiom 2**) |
| 3. BC + AC = AB | BC aur AC milkar AB par fit ho jate hain (**Axiom 4**) |
| 4. 2AC = AB | Step 2 aur 3 se (**Axiom 1**) |
| 5. AC = ½ AB | Dono taraf ko 2 se divide karo |

**Hence proved.**

### Example 4: Har line segment ka ek aur sirf ek midpoint hota hai

> Saabit karo ki har line segment ka **ek hi** midpoint hota hai.

Ye bhi contradiction se karte hain.

```
    A----------C-D---------------B      <- maan lo C aur D dono midpoints hain
```

**Given:** Line segment AB.
**To prove:** AB ka sirf ek midpoint hai.

| Statement | Reason |
|---|---|
| 1. Maan lo AB ke **do midpoints** C aur D hain. | Ulta maan liya |
| 2. AC = CB, to 2AC = AB | Example 3 jaisa (Axiom 2 aur Axiom 4) |
| 3. AD = DB, to 2AD = AB | Isi tarah |
| 4. 2AC = 2AD | Dono AB ke barabar hain (**Axiom 1**) |
| 5. AC = AD | Jo ek hi cheez (AB) ka aadha hain, wo barabar hain (**Axiom 7**) |
| 6. C aur D dono A se barabar doori par, aur dono AB par, ek hi taraf hain. To C aur D ek hi point hain. | Step 5 se |
| 7. Ye Step 1 ke "do alag midpoints" se takrata hai. | Contradiction |

**Isliye har line segment ka ek aur sirf ek midpoint hota hai. Hence proved.**

### Example 5: Ek hi cheez ke barabar (angles ke saath)

> ∠ABC = ∠PQR aur ∠PQR = ∠XYZ hai. Saabit karo ki ∠ABC = ∠XYZ.

| Statement | Reason |
|---|---|
| 1. ∠ABC = ∠PQR | Given |
| 2. ∠XYZ = ∠PQR | Given |
| 3. ∠ABC = ∠XYZ | Dono ∠PQR ke barabar hain, to aapas mein barabar (**Axiom 1**) |

**Hence proved.**

Roz ki zindagi mein bhi yahi: agar Riya ki height Aman ke barabar hai, aur Aman ki height Kabir ke barabar hai, to Riya aur Kabir ki height barabar hai. Yahi Axiom 1 hai.

### Example 6: Dugne barabar (Axiom 6)

> C, AB ka midpoint hai aur D, XY ka midpoint hai. Agar AC = XD ho, to saabit karo ki AB = XY.

```
    A-------C-------B

    X-------D-------Y
```

| Statement | Reason |
|---|---|
| 1. AB = 2AC | C, AB ka midpoint hai (Example 3 se) |
| 2. XY = 2XD | D, XY ka midpoint hai (isi tarah) |
| 3. AC = XD | Given |
| 4. AB = XY | AB aur XY, barabar cheezon (AC aur XD) ke dugne hain (**Axiom 6**) |

**Hence proved.**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Jo saabit karna hai, wahi reason mein use kar lena**
"To prove: AB = CD" mein, kisi kadam ka reason "kyunki AB = CD hai" likhna galat hai. Isse **circular reasoning** kehte hain, jaise jasoos kahe "Golu chor hai kyunki Golu chor hai." Ye proof nahi hai.

**Galti 2: Reason na likhna**
"AC = BC" likh kar aage badh jana kaafi nahi. Saath mein likho kyun: "radii of same circle" ya "Given" ya "Axiom 1".

**Galti 3: Figure se andaaza lagana**
"Figure mein dono barabar dikh rahe hain" reason nahi hai. Figure galat bhi bana ho sakta hai. Reason hamesha axiom, postulate, given ya pehle ka theorem hona chahiye.

**Galti 4: Kuch examples check karke "proved" likh dena**
Ruler se teen-chaar segments naap kar dekhna ki midpoint ek hi hai, **proof nahi** hai. Proof har ek segment ke liye sach dikhata hai, sirf kuch ke liye nahi. (Numbers wali jaanch sirf apna kaam confirm karne ke liye hai, proof ki jagah nahi.)

**Galti 5: Axiom ka galat number ya galat axiom**
Jodne (add) wale kadam par Axiom 2 lagta hai, ghatane (subtract) par Axiom 3. Inhe mix mat karo. Agar number yaad na ho, to axiom ke shabd likh do ("equals added to equals").

**Galti 6: Contradiction wale proof mein ulta theek se na maanna**
Contradiction mein **ulta saaf saaf likho** ("Maan lo l aur m do points P aur Q par milti hain"). Phir dikhao **kaunsa niyam** tootta hai. Sirf "ye galat hai" kehna kaafi nahi.

**Galti 7: Theorem aur axiom ko ek samajhna**
"Do alag lines ka zyada se zyada ek common point hota hai" ek **theorem** hai (proof chahiye). "Do alag points se ek hi line guzarti hai" ek **axiom** hai (seedha maana jata hai).

---

## Quick Recap

- **Theorem (proposition)** wo baat hai jo **proof** karke saabit ki jaye. **Axiom/postulate** bina proof ke maana jata hai.
- Axioms neev hain, theorems us par bani manzilein. Saabit hone ke baad ek theorem aage ke proofs mein reason ban sakta hai.
- **Proof ka dhaancha:** Figure, Given, To prove, Proof (Statement + Reason), Hence proved.
- **Proof by contradiction:** ulta maano, dikhao ki koi niyam tootta hai, isliye ulta galat aur asli baat sahi.
- **"Do alag lines ka zyada se zyada ek common point" theorem:** do alag lines mein zyada se zyada ek point common hota hai (Incidence Axiom 3 se contradiction).
- **Proposition 1:** kisi bhi segment par equilateral triangle ban sakta hai (Postulate 3, Postulate 1, Axiom 1).
- Proofs mein sabse zyada kaam aane wale: **Axiom 1** (ek hi cheez ke barabar), **Axiom 2** (barabar jodo), **Axiom 3** (barabar ghatao), **Axiom 4** (coincide), **Axiom 6** (dugne), **Axiom 7** (aadhe).
- Har kadam ka **reason** do. Figure ya kuch examples se andaaza proof nahi hai.

---

## Practice Questions

1. What is a theorem? How is it different from an axiom? Give one example of each.

2. Name the axiom or postulate used in each statement:
   (a) If a = b and b = c, then a = c.
   (b) If x + 5 = y + 5, then x = y.
   (c) A circle can be drawn with centre O and radius 3 cm.
   (d) If B lies between A and C on a line, then AC > AB.

3. Points A, B, C, D lie on a line in this order, and AB = CD. Prove that AC = BD.

4. Ram's weight is equal to Shyam's weight, and Shyam's weight is equal to Mohan's weight. What can you say about Ram's and Mohan's weights? Which axiom of Euclid did you use?

5. Point B lies between A and C on a line. Prove that AC > AB.

6. C is the midpoint of AB and D is the midpoint of XY. If AB = XY, prove that AC = XD.

7. In Euclid's Proposition 1, which postulate allows us to draw the two circles, and which axiom shows that AC = BC?

8. Two distinct lines l and m both pass through points P and Q. Using the theorem that two distinct lines can have at most one common point, prove that P and Q must be the same point.

### Answers

1. **Theorem** wo baat hai jo axioms, postulates aur pehle ke theorems se **proof karke** saabit ki jati hai. **Axiom** wo baat hai jo bina proof ke **sach maan li** jati hai.
   Example: Axiom: "Do alag points se ek hi line guzarti hai." Theorem: "Do alag lines mein zyada se zyada ek point common hota hai."

2. (a) **Axiom 1** (things equal to the same thing are equal to one another)
   (b) **Axiom 3** (equals subtracted from equals; dono taraf se 5 ghataya)
   (c) **Postulate 3** (circle can be drawn with any centre and any radius)
   (d) **Axiom 5** (the whole is greater than the part; AC poora hai, AB uska hissa)

3. **Given:** AB = CD, aur A, B, C, D isi kram mein ek line par hain.
   **To prove:** AC = BD

   | Statement | Reason |
   |---|---|
   | 1. AB = CD | Given |
   | 2. AB + BC = CD + BC | Dono taraf BC jodo (**Axiom 2**) |
   | 3. AB + BC = AC | AB aur BC milkar AC par fit hote hain (**Axiom 4**) |
   | 4. BC + CD = BD | Isi tarah (**Axiom 4**) |
   | 5. AC = BD | Steps 2, 3, 4 se (**Axiom 1**) |

   **Hence proved.**
   Jaanch: AB = CD = 2, BC = 5 lo. AC = 7, BD = 7 ✅

4. Ram aur Mohan ka weight **barabar** hai. Dono Shyam ke weight ke barabar hain, to aapas mein barabar. **Axiom 1** (things equal to the same thing are equal to one another).

5. **Given:** B, A aur C ke beech ek line par hai.
   **To prove:** AC > AB

   | Statement | Reason |
   |---|---|
   | 1. AC = AB + BC | AB aur BC milkar AC par fit hote hain (**Axiom 4**) |
   | 2. AB, AC ka ek hissa hai | Step 1 se |
   | 3. AC > AB | Poora apne hisse se bada hota hai (**Axiom 5**) |

   **Hence proved.**

6. **Given:** C, AB ka midpoint; D, XY ka midpoint; AB = XY.
   **To prove:** AC = XD

   | Statement | Reason |
   |---|---|
   | 1. AC = ½ AB | C, AB ka midpoint hai (Part F, Example 3) |
   | 2. XD = ½ XY | D, XY ka midpoint hai (isi tarah) |
   | 3. AB = XY | Given |
   | 4. AC = XD | AC aur XD, barabar cheezon (AB aur XY) ke aadhe hain (**Axiom 7**) |

   **Hence proved.**

7. Circles banane ki ijaazat **Postulate 3** deta hai (kisi bhi centre aur radius se circle). AC = BC dikhane ke liye **Axiom 1** lagta hai: AC = AB aur BC = AB (radii), to dono AB ke barabar hain, isliye AC = BC.

8. **Given:** l aur m alag lines hain, dono P aur Q se guzarti hain.
   **To prove:** P aur Q ek hi point hain.

   | Statement | Reason |
   |---|---|
   | 1. Maan lo P aur Q **alag** points hain. | Ulta maan liya |
   | 2. To alag lines l aur m mein **do alag common points** (P aur Q) hain. | Step 1 aur given se |
   | 3. Par do alag lines mein zyada se zyada ek point common hota hai. | **"Do alag lines ka zyada se zyada ek common point" theorem** |
   | 4. Step 2 aur 3 takrate hain. | Contradiction |
   | 5. Isliye P aur Q alag nahi ho sakte. P aur Q ek hi point hain. | Step 4 se |

   **Hence proved.** (Dhyan do, yahan ye theorem khud ek reason ban gaya. Yahi Part A wali building ki manzil hai.)

---

## Chapter wrap-up: Introduction to Euclid's Geometry

| Topic | Kya seekha | Sabse zaroori baat |
|---|---|---|
| 1. History, axioms aur postulates | Geometry ki shuruaat, Euclid aur "Elements", axiom vs postulate, Euclid ke 7 axioms aur 5 postulates (parallel postulate aur Playfair's axiom bhi) | Axioms aur postulates bina proof ke maane jate hain, ye geometry ki neev hain |
| 2. Geometry ke terms aur incidence axioms | Euclid ki definitions, undefined terms (point, line, plane), line, segment, ray, collinear points, intersecting, parallel aur concurrent lines, coplanar, 4 incidence axioms | Do alag points se ek aur sirf ek line guzarti hai |
| 3. Diye gaye points se kitni lines | 1, 2, 3 aur n points se kitni lines ban sakti hain (n(n − 1)/2), collinear points wale case, lines kitne points share kar sakti hain | Ek point se anginat lines, do points se sirf ek line | Ek point se anginat lines, do points se sirf ek line |
| 4. Theorems | Theorem vs axiom, proof ka dhaancha, proof by contradiction, "Do alag lines ka zyada se zyada ek common point" theorem, Proposition 1, step by step proofs | Har nayi baat axioms aur pehle ke theorems se, har kadam ke reason ke saath, saabit karni hoti hai |

---

Proof likhna shuru mein thoda ajeeb lagta hai, kyunki hum aisi baatein saabit kar rahe hote hain jo "dikhne mein" pehle se sach lagti hain. Par yahi aadat aage ke saare geometry chapters (lines aur angles, triangles, quadrilaterals) mein kaam aayegi. Bas jasoos Rani ki tarah socho: **har kadam, ek reason.** Aap kar loge.
