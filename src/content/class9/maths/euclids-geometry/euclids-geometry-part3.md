# Chapter: Introduction to Euclid's Geometry (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [euclids-geometry-part2.md](euclids-geometry-part2.md) se aage chalti hai.** (Topic 1 [euclids-geometry.md](euclids-geometry.md) mein hai.)
> **Topics covered in this file:**
> 3. Number of Lines Passing Through Given Points

---

# Topic 3: Diye gaye points se kitni lines guzarti hain?

Topic 2 mein humne geometry ke basic shabd seekhe the: point, line, line segment, ray, collinear points, aur intersecting, parallel aur concurrent lines. Wahin humne **incidence axioms** bhi padhe the, jo batate hain ki points aur lines ek doosre se kaise jude hote hain. Jaise, ek point se anginat lines guzarti hain, aur do alag points se sirf ek line.

Is topic mein hum un axioms ko **ginti ke khel** mein badlenge. Sawal simple hai: **agar kuch points diye hon, to unse kitni lines ban sakti hain?** Pehle 1 point, phir 2, phir 3, aur phir ek mazedaar pattern jo kitne bhi points par kaam karta hai.

---

## Party mein haath milane ki kahani

Riya ki birthday party mein **4 dost** aaye: Aman, Bela, Chetan aur Dia. Sabne tay kiya ki **har dost baaki har dost se sirf ek baar haath milayega.**

Riya ne ginna shuru kiya:
- Aman ne Bela, Chetan, Dia se haath milaya: **3**
- Bela ne Chetan aur Dia se (Aman se pehle hi mila chuki thi): **2**
- Chetan ne Dia se: **1**
- Dia ke liye koi bacha hi nahi: **0**

Kul haath milane = 3 + 2 + 1 = **6**

Ab ise geometry mein badlo. Chaar dost = chaar **points**. Har haath milana = do points ko jodne wali ek **line**. To 4 points se (jinme koi teen ek seedh mein na hon) **6 lines** banti hain.

Bas, yahi is poore topic ka raaz hai: **har jodi (pair) ek line deti hai.** Ab ise dheere dheere samajhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Collinear points** | Aise points jo ek hi seedhi line par hon (Topic 2 mein dekha tha) | Ek line par A, B, C |
| **Non-collinear points** | Aise points jo ek line par na hon | Triangle ke teen kone |
| **"No three collinear"** | Points mein se koi bhi teen ek seedh mein nahi hain | Square ke chaar kone |
| **Pair (jodi)** | Do points ka ek group | A aur B ki jodi |
| **Concurrent lines** | Teen ya zyada lines jo ek hi point se guzrein (Topic 2 mein dekha tha) | Cycle ke pahiye ki teeliyan beech mein milti hain |
| **Point of intersection** | Wo point jahan do lines ek doosre ko kaatti hain | Do sadkon ka chauraha |

---

## Part A: Ek point se kitni lines?

Socho raat mein aapke haath mein ek torch hai. Aap use ek jagah khade hokar idhar ghumao, udhar ghumao, upar, neeche. Har baar roshni ki ek nayi seedhi line banti hai, aur sab lines **aapke haath (ek hi point)** se nikalti hain.

Ya cycle ke pahiye ko dekho. Beech ke hub se bahut saari teeliyan (spokes) nikalti hain, sab alag disha mein.

```
        \   |   /
         \  |  /
          \ | /
    -------- P --------
          / | \
         /  |  \
        /   |   \
```

Ek point P se hum jitni chaahein utni lines kheench sakte hain. Kabhi khatam nahi hoti.

> **Ek point se anginat (infinitely many) lines guzar sakti hain.**

Ye Topic 2 ka incidence axiom hi hai. Yahan bas ise picture se pakka kar liya.

---

## Part B: Do points se kitni lines?

Ab do alag points A aur B lo. Inhe jodne wali kitni seedhi lines ho sakti hain?

```
    A ●━━━━━━━━━━━━━━━━━━● B
```

Koshish karke dekho: A se B tak doosri seedhi line kheencho. Wo pehli line ke upar hi aa jayegi. **Sirf ek hi** seedhi line ban sakti hai.

> **Do alag points se theek ek (exactly one) line guzarti hai.**

Ye baat aapne do jagah dekhi hai:
- Topic 1 mein **Euclid ka pehla postulate**: kisi bhi point se kisi doosre point tak ek seedhi line kheenchi ja sakti hai.
- Topic 2 mein **Incidence Axiom 3**: do alag points se ek aur sirf ek line guzarti hai. ("Sirf ek" wali baat isi axiom se aati hai.)

Roz ki zindagi mein: do khambhon ke beech ek seedhi taar sirf ek hi tarike se tani ja sakti hai.

---

## Part C: Teen points se kitni lines?

Teen points ke saath do alag sawal ho sakte hain, aur dono ka jawab alag hai. Dhyan se padho.

### Sawal 1: Kya ek hi line teeno points se guzar sakti hai?

**Case 1: Teeno collinear hon**

```
    A ●━━━━━━━━● B ━━━━━━━━● C
```

Haan, **ek line** teeno se guzarti hai.

**Case 2: Teeno non-collinear hon**

```
            A
            ●
          /   \
         /     \
        ●-------●
        B       C
```

**Koi bhi ek line** teeno se nahi guzar sakti. Agar A aur B se line kheencho, to C us par nahi aata.

### Sawal 2: Teen points ki jodiyon se kul kitni lines banti hain?

Teen points ki jodiyan: AB, BC, CA. Yaani **3 jodiyan**.

- **Non-collinear hon** to har jodi alag line deti hai. Kul **3 lines** (ye triangle ki teen sides hain).
- **Collinear hon** to teeno jodiyan ek hi line par hain. Kul **1 line**.

| Teen points | Kya ek line teeno se guzar sakti hai? | Jodiyon se kul lines |
|---|---|---|
| Collinear | Haan, ek | **1** |
| Non-collinear | Nahi | **3** |

---

## Part D: Chaar ya zyada points (koi teen collinear nahi)

### Chaar points

Square ke chaar kone A, B, C, D lo. Inme koi teen ek seedh mein nahi hain.

```
    A ●───────────● B
      │ \       / │
      │   \   /   │
      │     X     │
      │   /   \   │
      │ /       \ │
    D ●───────────● C
```

Jodiyan gino:
- Sides: AB, BC, CD, DA = **4**
- Diagonals: AC, BD = **2**
- Kul = **6 lines**

Party wali kahani yaad hai? 4 dost, 6 haath milane. Bilkul wahi.

### Paanch points

Pentagon ke paanch kone lo (koi teen collinear nahi).
- Sides = 5
- Diagonals = 5
- Kul = **10 lines**

Haath milane ke tarike se: pehla point baaki 4 se, doosra baaki 3 se, teesra 2 se, chautha 1 se.
4 + 3 + 2 + 1 = **10** ✅

### Pattern dhundho

| Points (n) | Ginti | Lines |
|---|---|---|
| 2 | 1 | 1 |
| 3 | 2 + 1 | 3 |
| 4 | 3 + 2 + 1 | 6 |
| 5 | 4 + 3 + 2 + 1 | 10 |
| 6 | 5 + 4 + 3 + 2 + 1 | 15 |

### Shortcut formula

Har point baaki **(n − 1)** points se jud sakta hai. To n points se n × (n − 1) jode bante hain. Par isme har line **do baar** gini gayi (AB bhi aur BA bhi, jo ek hi line hai). Isliye 2 se divide karo:

> **n points (koi teen collinear nahi) se banne wali lines = n(n − 1) / 2**

Check:
- n = 4: 4 × 3 / 2 = **6** ✅
- n = 5: 5 × 4 / 2 = **10** ✅
- n = 6: 6 × 5 / 2 = **15** ✅
- n = 10: 10 × 9 / 2 = **45** ✅

Ye formula sirf tab kaam karta hai jab **koi teen points collinear na hon.** Collinear points ho to kya karein, ye agle part mein.

---

## Part E: Jab kuch points collinear hon

Jab kuch points ek seedh mein hon, to unki saari jodiyan **ek hi line** deti hain. Isliye lines kam ho jati hain.

### Example 1: 4 points, theek 3 collinear

A, B, C ek line par hain, aur D us line se bahar hai.

```
                D
                ●
             /  |  \
            /   |   \
    A ●━━━━━━━━━● B ━━━━━━━━● C
```

Lines gino:
- A, B, C wali ek line: **1**
- D se A, D se B, D se C: **3**
- Kul = **4 lines**

**Jaanch formula se:** 4 points ki kul jodiyan = 6. Inme se A, B, C ki 3 jodiyan (AB, BC, CA) ek hi line hain. Yaani 3 jodiyon ki jagah 1 line. 6 − 3 + 1 = **4** ✅

### Example 2: 5 points, theek 3 collinear

A, B, C ek line par, D aur E bahar (aur koi teen collinear nahi).

- Kul jodiyan = 5 × 4 / 2 = 10
- A, B, C ki 3 jodiyan ek line ban jati hain: 10 − 3 + 1 = **8 lines** ✅

Haath se bhi gino: ABC (1), DA, DB, DC (3), EA, EB, EC (3), DE (1). Kul 1 + 3 + 3 + 1 = **8** ✅

### Example 3: 5 points, 4 collinear

A, B, C, D ek line par, E bahar.

- A, B, C, D wali ek line: 1
- E se A, B, C, D: 4
- Kul = **5 lines**

Formula se: 10 − 6 + 1 = **5** ✅ (A, B, C, D ki 4 × 3 / 2 = 6 jodiyan ek line ban gayi.)

### General tarika

> **Lines = (kul jodiyan) − (collinear points ki jodiyan) + 1**

Yaani n points mein se m points collinear hon (aur koi aur teen collinear na hon):

**Lines = n(n − 1)/2 − m(m − 1)/2 + 1**

### Example 4: Saare points collinear

Agar saare n points ek hi line par hon, to chahe 5 hon ya 50, **sirf 1 line** sabse guzarti hai.

Formula se (n = m): n(n − 1)/2 − n(n − 1)/2 + 1 = **1** ✅

---

## Part F: Lines ke common points

Ab sawal ulta karte hain: **lines diye hon, to unke kitne points common ho sakte hain?**

### Do alag lines

Topic 2 (Incidence Axiom 4) mein dekha tha: do alag lines ya to **1** point par kaatti hain, ya parallel hon to **0** common points. Yaani **zyada se zyada 1**. (Iska proof Topic 4 mein aayega.)

### Teen alag lines

Teen lines ke beech intersection points kitne ho sakte hain? Chaar case hain:

| Case | Picture | Intersection points |
|---|---|---|
| Teeno parallel | Railway ki teen patriyan | **0** |
| Do parallel, teesri dono ko kaate | Do patriyan aur ek sadak jo dono ko cross kare | **2** |
| Teeno ek hi point se guzrein (concurrent) | Pahiye ki teeliyan | **1** |
| Koi do parallel nahi, aur concurrent bhi nahi | Ek triangle ki teen sides badha do | **3** |

```
  Concurrent (1 point)        Triangle wali (3 points)

      \  |  /                       \     /
       \ | /                         \   /
   ---- \|/ ----                      \ /
        /|\                        ----X----
       / | \                          / \
      /  |  \                        /   \
                                  ──/─────\──
```

To teen lines ke **0, 1, 2 ya 3** intersection points ho sakte hain. **Zyada se zyada 3.**

### Concurrent lines

Topic 2 mein dekha tha ki jab teen ya zyada lines **ek hi point** se guzrein, to unhe concurrent lines kehte hain. Part A ki torch wali picture yahi thi: ek point se bahut saari lines, sab concurrent.

---

## Part G: Ek point se parallel lines

Ek line l aur uske bahar ek point P lo. P se l ke parallel kitni lines kheench sakte hain?

```
        P
   ─────●─────────────   (P se parallel, sirf ek)

   ───────────────────   l
```

Jawab: **sirf ek.** Ye wahi **Playfair's axiom** hai jo Topic 1 (Part D) mein Euclid ke paanchve postulate ke aasan roop ki tarah dekha tha. Yahan bas ginti ke nazariye se yaad rakho ki P se l ke parallel theek ek line jaati hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Teen points se hamesha ek line" samajhna**
Teen points se ek line tabhi guzarti hai jab wo **collinear** hon. Non-collinear teen points se koi ek line nahi guzarti.

**Galti 2: n(n − 1)/2 ko har jagah laga dena**
Ye formula sirf tab hai jab **koi teen points collinear na hon.** 4 points mein 3 collinear hon, to answer 6 nahi, **4** hai.

**Galti 3: 2 se divide karna bhool jana**
4 points ke liye 4 × 3 = 12 likh dena galat hai. AB aur BA ek hi line hai, isliye **12 / 2 = 6**.

**Galti 4: Ek point se ek hi line samajhna**
Ek point se **anginat** lines guzarti hain. "Ek line" wala niyam **do** points ke liye hai.

**Galti 5: Do lines ko do points par milte maan lena**
Do alag lines zyada se zyada **ek** point par milti hain. Agar do points common hon, to wo do lines nahi, ek hi line hai.

**Galti 6: Teen lines ke hamesha 3 intersection points samajhna**
3 **zyada se zyada** hai. Lines parallel ya concurrent hon to 0, 1 ya 2 bhi ho sakte hain.

**Galti 7: Collinear points ki jodiyan alag alag gin lena**
A, B, C collinear hon to AB, BC, CA alag lines nahi hain. Teeno milkar **ek** line hain.

---

## Quick Recap

- **1 point** se: **anginat** lines.
- **2 alag points** se: **theek 1** line (Topic 2 ka Incidence Axiom 3. Euclid ka pehla postulate sirf itna kehta hai ki line kheenchi ja sakti hai).
- **3 points:** collinear hon to ek line teeno se guzarti hai (jodiyon se kul 1 line). Non-collinear hon to koi ek line teeno se nahi guzarti (jodiyon se kul 3 lines).
- **n points, koi teen collinear nahi:** lines = **n(n − 1)/2**. Har jodi ek line, jaise har do dost ek baar haath milayein.
- **Kuch points collinear hon:** lines = kul jodiyan − collinear points ki jodiyan + 1.
- **Saare points collinear:** sirf **1** line.
- **Do alag lines:** 0 ya 1 common point.
- **Teen alag lines:** 0, 1, 2 ya 3 intersection points (zyada se zyada 3).
- **Line ke bahar ek point se** us line ke parallel **sirf ek** line.

---

## Practice Questions

1. How many lines can pass through:
   (a) one given point?
   (b) two distinct given points?

2. Three points A, B and C are given. How many lines can be drawn through all three points if:
   (a) they are collinear?
   (b) they are non-collinear?

3. How many lines can be drawn through 6 points, no three of which are collinear?

4. Find the number of lines that can be drawn through 10 points, no three of which are collinear.

5. Four points A, B, C and D are given such that A, B and C are collinear and D does not lie on the line through them. How many distinct lines can be drawn through pairs of these points? Name them.

6. Seven points are given, out of which exactly 4 are collinear and no other three are collinear. How many distinct lines can be drawn through pairs of these points?

7. If 21 lines can be drawn through n points, no three of which are collinear, find n.

8. What is the maximum number of points of intersection of:
   (a) two distinct lines?
   (b) three distinct lines?

9. State whether each statement is true or false. Give a reason.
   (a) Two distinct lines can have two points in common.
   (b) Infinitely many lines can pass through a single point.
   (c) Through three non-collinear points, exactly one line can be drawn.
   (d) Through a point not on a given line, exactly one line can be drawn parallel to the given line.

### Answers

1. (a) **Anginat (infinitely many)** lines.
   (b) **Theek ek** line.

2. (a) **Ek** line teeno se guzarti hai.
   (b) **Koi nahi.** Teeno se ek saath koi line nahi guzar sakti.

3. n = 6: 6 × 5 / 2 = **15 lines**

4. n = 10: 10 × 9 / 2 = **45 lines**

5. A, B, C ki ek line, aur D se A, B, C tak teen lines.
   **4 lines:** line ABC, DA, DB, DC.
   Jaanch: kul jodiyan 6, collinear ki jodiyan 3. 6 − 3 + 1 = 4 ✅

6. Kul jodiyan = 7 × 6 / 2 = 21. Collinear 4 points ki jodiyan = 4 × 3 / 2 = 6, jo ek line ban jati hain.
   Lines = 21 − 6 + 1 = **16 lines**

7. n(n − 1)/2 = 21, to n(n − 1) = 42. Do lagatar numbers jinka product 42 ho: 7 × 6 = 42.
   **n = 7**
   Jaanch: 7 × 6 / 2 = 21 ✅

8. (a) **1** (agar lines kaatti hain. Parallel hon to 0.)
   (b) **3** (jab koi do parallel na hon aur teeno ek point par na milein).

9. (a) **False.** Do alag lines zyada se zyada ek point par milti hain. Do common points hon to wo ek hi line hogi.
   (b) **True.** Ek point se anginat lines guzarti hain.
   (c) **False.** Teen non-collinear points se koi ek line nahi guzarti. Jodiyon se 3 alag lines banti hain.
   (d) **True.** Ye Euclid ke paanchve postulate ka aasan roop (Playfair's axiom) hai.

---

Agar ye sab yaad rakhna mushkil lage, to bas party yaad karo: **har do dost ek baar haath milate hain, aur har do points ek line banate hain.** Bas collinear points par dhyan rakhna, kyunki wo sab milkar ek hi line banate hain.

**Agle topic mein (Topic 4: Theorems):** Ab tak humne jo baatein maan kar chalaayi, jaise "do alag lines ek se zyada point par nahi milti", unhe Euclid ke axioms aur postulates ki madad se **prove** karna seekhenge.
