# Chapter: Simultaneous Linear Equations (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [simultaneous-linear-equations.md](simultaneous-linear-equations.md) se aage chalti hai** (wahan Topic 1 hai: ek equation kaafi kyun nahi, "simultaneous" ka matlab, jodi ki jaanch, aur substitution method step by step).
> **Topics covered in this file:**
> 2. Elimination Method (Variable ko Hataana)

---

# Topic 2: Elimination Method (Variable ko Hataana)

Topic 1 mein humne substitution method seekha tha: Gupta Stationers ke do bills (2x + y = 40 aur x + 3y = 70) se ek variable ki value nikali, aur doosri equation mein "rakh di". Wo tareeka hamesha chalta hai, par Topic 1 ke Example 9 (2x + 3y = 13 aur 5x − 2y = 4) mein x = (13 − 3y)/2 jaisa fraction aa gaya tha, aur kaam bhaari ho gaya tha.

Is topic mein ek **doosra, aksar zyada safai wala** tareeka seekhenge: **elimination**. Idea simple hai: dono equations ko jodo ya ghatao, taaki ek variable **gayab** ho jaye. Phir bacha hua variable seedha mil jata hai.

---

## Lakhan bhaiya ka juice thela

Mohalle ke cricket ground ke bahar Lakhan bhaiya ka juice ka thela lagta hai. Wahan do hi cheezein milti hain: **nimbu-paani** aur **mausambi juice**. Rate-board pichhli baarish mein dhul gaya, aur Lakhan bhaiya bas total bata dete hain.

Rukhsar ki cricket team do din practice ke baad thele par ruki:

- **Shanivaar ka bill:** 3 nimbu-paani + 2 mausambi = ₹86
- **Ravivaar ka bill:** 3 nimbu-paani + 5 mausambi = ₹161

Rukhsar boli, "Dono din nimbu-paani to barabar the, 3-3. Farak sirf mausambi ka hai. Ravivaar ko 3 mausambi **zyada** li, aur bill ₹75 **zyada** aaya."

Matlab: 3 mausambi = ₹161 − ₹86 = ₹75, to **1 mausambi juice = ₹25**.

Dekha? Dono bill ghataye, to nimbu-paani ka kissa hi khatam ho gaya. Ab ek mausambi ₹25 pata hai, to Shanivaar ke bill se: 3 nimbu-paani + 2 × 25 = 86, yaani 3 nimbu-paani = 36, to **1 nimbu-paani = ₹12**.

Jaanch: Ravivaar ka bill: 3 × 12 + 5 × 25 = 36 + 125 = 161 ✅

Isi ko algebra mein likhein (nimbu-paani = x, mausambi juice = y):

> 3x + 2y = 86
> 3x + 5y = 161

Dono ko ghatane par 3x − 3x = 0, aur bacha 3y = 75. Yahi **elimination** hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Elimination** | "Hataana". Equations jodkar ya ghatakar ek variable ko khatam karna | 3x aur 3x ghatane par x gayab |
| **Coefficient** | Variable ke saamne wala number | 3x mein coefficient 3 |
| **Barabar coefficient** | Dono equations mein ek variable ke saamne ek hi number | 5x aur 5x |
| **Ulte (opposite) coefficient** | Ek mein +, doosre mein − wahi number | +3y aur −3y |
| **LCM** | Do numbers ka sabse chhota common multiple. Isse coefficients barabar banate hain | 3 aur 4 ka LCM 12 |
| **Back-substitution** | Ek variable mil jaye to uski value kisi equation mein rakhkar doosra nikalna | y = 2 rakhkar x nikalna |

---

## Part A: Idea, aur do aasan cases

**Elimination ka niyam:** Equation ke dono taraf kuch bhi barabar jodo ya ghatao, to equation sahi rehti hai. Jab dono equations sachchi hain, to unhe jodna ya ghatana bhi sachcha hi rahega. Isiliye jo (x, y) dono equations ko satisfy karta hai, wo naye equation ko bhi karega.

Hum ye chunte hain ki **kaunsa variable hatana hai**, aur dono equations ko aise jodte ya ghatate hain ki wo variable zero ho jaye.

### Case 1: Coefficients barabar hain, to GHATAO

Dono equations mein jis variable ke saamne **same number aur same sign** ho, usko hatane ke liye ek equation doosri mein se ghata do.

### Example 1: 5x + 3y = 21 aur 5x + y = 17

x ke coefficient dono mein 5 hain, to ghatate hain.

Pehli equation − doosri equation:

(5x + 3y) − (5x + y) = 21 − 17
5x − 5x + 3y − y = 4
2y = 4
**y = 2**

Ab y = 2 ko doosri equation mein rakho:
5x + 2 = 17, to 5x = 15, **x = 3**

**Jaanch:**
- Pehli: 5 × 3 + 3 × 2 = 15 + 6 = 21 ✅
- Doosri: 5 × 3 + 2 = 17 ✅

**Jawab: x = 3, y = 2**

### Case 2: Coefficients ulte hain, to JODO

Agar ek variable ke saamne +number aur doosre mein −number (wahi number) ho, to dono equations **jod do**.

### Example 2: 4x + 3y = 17 aur 5x − 3y = 1

y ke coefficient +3 aur −3 hain: ulte. Jodte hain.

(4x + 3y) + (5x − 3y) = 17 + 1
9x + 0 = 18
**x = 2**

Pehli equation mein x = 2 rakho:
4 × 2 + 3y = 17, to 8 + 3y = 17, 3y = 9, **y = 3**

**Jaanch:**
- Pehli: 4 × 2 + 3 × 3 = 8 + 9 = 17 ✅
- Doosri: 5 × 2 − 3 × 3 = 10 − 9 = 1 ✅

**Jawab: x = 2, y = 3**

**Yaad rakhne ka tareeka:** *same sign, same number: ghatao. Ulte sign, same number: jodo.*

---

## Part B: Jab coefficients barabar nahi hain (LCM wala idea)

Zyadatar sawaalon mein coefficients na barabar hote hain, na ulte. Tab hum **ek ya dono equations ko ek number se multiply** karke ek variable ke coefficients **barabar** bana lete hain. Phir Part A wala kaam.

**Kaise decide karein kitna multiply karna hai?** Jis variable ko hatana hai, uske dono coefficients ka **LCM** dekho. Har equation ko aise number se guna karo ki us variable ka coefficient LCM ban jaye.

Jaise: x ke coefficients 3 aur 4 hain. LCM = 12. Pehli ko 4 se, doosri ko 3 se guna karo. Dono mein 12x ho jayega.

**Bahut zaroori:** Equation ko multiply karte waqt **poori equation** (dono taraf, har term) ko multiply karo, sirf ek taraf ko nahi.

### Example 3: 3x + 2y = 16 aur 5x − 4y = 12 (ek equation ko multiply)

y ke coefficients 2 aur −4 hain. Pehli equation ko 2 se guna karein to +4y aa jayega, jo −4y se ulta hai.

Pehli ko 2 se guna:
2 × (3x + 2y) = 2 × 16
**6x + 4y = 32** ...(i)

Doosri jaisi hai:
**5x − 4y = 12** ...(ii)

(i) aur (ii) ko jodo (y ulte hain):
11x = 44
**x = 4**

Pehli original equation mein x = 4:
3 × 4 + 2y = 16, to 12 + 2y = 16, 2y = 4, **y = 2**

**Jaanch:**
- Pehli: 3 × 4 + 2 × 2 = 12 + 4 = 16 ✅
- Doosri: 5 × 4 − 4 × 2 = 20 − 8 = 12 ✅

**Jawab: x = 4, y = 2**

### Example 4: 2x + 3y = 12 aur 3x + 4y = 17 (dono equations ko multiply)

Maan lo hum x ko hatate hain. x ke coefficients 2 aur 3, LCM = 6.
- Pehli ko 3 se guna: 6x + 9y = 36 ...(i)
- Doosri ko 2 se guna: 6x + 8y = 34 ...(ii)

Ab x ke coefficient barabar (6 aur 6) hain, to ghatao: (i) − (ii)

(6x + 9y) − (6x + 8y) = 36 − 34
**y = 2**

Pehli original equation mein y = 2:
2x + 3 × 2 = 12, to 2x = 6, **x = 3**

**Jaanch:**
- Pehli: 2 × 3 + 3 × 2 = 6 + 6 = 12 ✅
- Doosri: 3 × 3 + 4 × 2 = 9 + 8 = 17 ✅

**Jawab: x = 3, y = 2**

Chaho to y ko bhi hata sakte ho (coefficients 3 aur 4, LCM 12). Jawab wahi aayega. Jo variable aasan lage, use hatao.

---

## Part C: Decimal aur fraction wale sawaal

Jab equations mein decimals ya fractions hon, to pehle unhe **saaf** kar lo: poori equation ko ek suitable number se guna karke integers bana lo. Phir normal elimination.

### Example 5 (decimals): 0.2x + 0.3y = 1.3 aur 0.3x + 0.2y = 1.7

Decimal ek digit ke baad hai, to dono equations ko **10** se guna karo:
- 2x + 3y = 13 ...(i)
- 3x + 2y = 17 ...(ii)

x hataate hain (coefficients 2 aur 3, LCM 6):
- (i) × 3: 6x + 9y = 39 ...(iii)
- (ii) × 2: 6x + 4y = 34 ...(iv)

(iii) − (iv): 5y = 5, to **y = 1**

(i) mein y = 1: 2x + 3 = 13, 2x = 10, **x = 5**

**Jaanch (original decimal equations mein):**
- Pehli: 0.2 × 5 + 0.3 × 1 = 1.0 + 0.3 = 1.3 ✅
- Doosri: 0.3 × 5 + 0.2 × 1 = 1.5 + 0.2 = 1.7 ✅

**Jawab: x = 5, y = 1**

### Example 6 (fractions): x/2 + y/3 = 3 aur x/4 − y/3 = 0

Pehli equation ke denominators 2 aur 3, LCM = 6. Poori equation ko 6 se guna:
6 × (x/2) + 6 × (y/3) = 6 × 3, yaani **3x + 2y = 18** ...(i)

Doosri ke denominators 4 aur 3, LCM = 12. Poori equation ko 12 se guna:
12 × (x/4) − 12 × (y/3) = 12 × 0, yaani **3x − 4y = 0** ...(ii)

Ab x ke coefficient dono mein 3 hain, to ghatao: (i) − (ii)
(3x + 2y) − (3x − 4y) = 18 − 0
2y + 4y = 18
6y = 18, to **y = 3**

(i) mein y = 3: 3x + 6 = 18, 3x = 12, **x = 4**

**Jaanch (original fraction wali equations mein):**
- Pehli: 4/2 + 3/3 = 2 + 1 = 3 ✅
- Doosri: 4/4 − 3/3 = 1 − 1 = 0 ✅

**Jawab: x = 4, y = 3**

---

## Part D: Ek chalaak trick (symmetric jodi)

Kabhi-kabhi sawaal dekhne mein darawna lagta hai, par numbers ki ek khaas jodi hoti hai. Dekho:

### Example 7: 37x + 43y = 123 aur 43x + 37y = 117

Yahan x aur y ke coefficients **aapas mein badal gaye** hain (37, 43 aur 43, 37). Seedha LCM nikalna bahut bada kaam hoga. Ek chhoti trick:

**Step 1: Dono ko jodo.**
(37x + 43x) + (43y + 37y) = 123 + 117
80x + 80y = 240
Dono taraf 80 se bhaag do:
**x + y = 3** ...(i)

**Step 2: Dono ko ghatao** (doosri − pehli).
(43x − 37x) + (37y − 43y) = 117 − 123
6x − 6y = −6
Dono taraf 6 se bhaag do:
**x − y = −1** ...(ii)

Ab ye do bahut chhoti equations hain. Inhe jodo:
(x + y) + (x − y) = 3 + (−1)
2x = 2, to **x = 1**

(i) mein x = 1: 1 + y = 3, to **y = 2**

**Jaanch:**
- Pehli: 37 × 1 + 43 × 2 = 37 + 86 = 123 ✅
- Doosri: 43 × 1 + 37 × 2 = 43 + 74 = 117 ✅

**Jawab: x = 1, y = 2**

Ye trick tab chalti hai jab coefficients aise **ulte-seedhe** ho jayein. Agar na dikhe, to normal LCM wala tareeka hamesha kaam karta hai.

---

## Part E: Substitution ya elimination, kab kaunsa?

Dono tareeke sahi jawab dete hain. Farak sirf **kaunsa kab zyada aasan** hai.

| Baat | Substitution | Elimination |
|---|---|---|
| Idea | Ek variable ko doosre ke terms mein likho, aur rakh do | Equations jodo/ghatao taaki ek variable gayab ho |
| Jab best | Kisi equation mein koi variable ka coefficient 1 ya −1 ho (jaise x + 2y = 7) | Coefficients barabar ya ulte hon, ya simple multiple banaye ja sakein |
| Fractions ka darr | Aksar fractions aa jate hain (jaise x = 3y/2) | Integers mein hi kaam hota hai |
| Kaam ki lambai | Kuch sawaalon mein chhota, kuch mein bahut lamba | Aam taur par ek saaf routine |
| Galti kahan hoti hai | Bracket aur sign mein | Sign ghatane mein, aur poori equation multiply karna bhoolne mein |
| Dono kaam karte hain? | Haan | Haan |

**Thumb rule:** Pehle dekho ki koi coefficient 1 hai ya nahi. Haan, to substitution ki taraf jhuk sakte ho. Nahi, to elimination aksar saaf rehta hai. Aur jaanch hamesha karo: dono ka jawab same aana chahiye.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Equation ko multiply karte waqt sirf ek taraf guna karna**

3x + 2y = 16 ko 2 se guna karna hai.
- Galat: 6x + 4y = 16 (sirf left side guna, right side 16 waisa hi chhod diya)
- Sahi: 6x + 4y = **32** (dono taraf)

Ye galti jawab ko bilkul bigaad deti hai. Hamesha poori equation ko guna karo: har term, aur barabar ke dusri taraf wala number bhi.

**Galti 2: Ghatate waqt sign galat karna**

(5x + 3y) − (5x − 2y) mein doosre bracket ke andar ke **dono signs badalte hain**.
- Galat: 5x + 3y − 5x − 2y = 1y (ye y ko 3 − 2 = 1 bana deta hai)
- Sahi: 5x + 3y − 5x + 2y = **5y**

Jab bhi ghatao, doosri equation ke har term ka sign badalkar likhna behtar hai (ya bracket lagao).

**Galti 3: Ek variable mil gaya, aur ruk gaye**

Example 1 mein y = 2 mila. Yahan rukna aadha jawab hai. Doosra variable bhi chahiye: y = 2 ko kisi equation mein rakhkar x = 3 nikalo. Jawab ek **jodi (x, y)** hota hai, akela x ya y nahi.

**Galti 4: Galat variable ko "hata hua" maan lena**

Agar coefficients barabar nahi hain aur aap seedha ghata do (bina multiply kiye), to variable gayab nahi hoga. Pehle check karo: kya jis variable ko hata rahe ho, uske coefficient barabar (ghatane ke liye) ya ulte (jodne ke liye) hain?

**Galti 5: Jaanch sirf ek equation mein karna**

Jawab dono equations ko satisfy karna chahiye. Agar sirf ek mein check kiya to galti pakad nahi paoge (jis equation se y nikala, wahi to sahi dikhegi hi). Hamesha **dono** mein check karo.

---

## Quick Recap

- **Elimination:** equations ko jodkar ya ghatakar ek variable ko hata do.
- Coefficients **barabar** (same sign) to **ghatao**. **Ulte** sign to **jodo**.
- Warna LCM nikalo aur ek ya dono equations ko **poori tarah** (dono taraf) multiply karke coefficients barabar banao.
- Decimals: 10 ya 100 se guna. Fractions: denominators ke LCM se guna. Phir normal elimination.
- Ek variable milne ke baad uski value kisi equation mein rakhkar doosra nikalo. Jawab ek jodi hota hai.
- Symmetric jodi (37, 43 aur 43, 37 jaisi) mein jodne aur ghatane se x + y aur x − y mil jate hain.
- **Jaanch hamesha dono equations mein karo.**
- Substitution tab achha jab koi coefficient 1 ho. Elimination tab achha jab coefficients ke multiples aasani se mil jayein.

---

## Practice Questions

1. Solve by elimination: 2x + 5y = 16 and 2x − 3y = 0. Verify in both equations.

2. Solve by elimination: 3x − 2y = 5 and 4x + 2y = 30.

3. Solve: 3x + 4y = 10 and 5x − 2y = 8. (Hint: multiply one equation so that the coefficients of y become opposite.)

4. Solve by multiplying both equations: 3x + 5y = 21 and 4x + 3y = 17.

5. Solve: 0.5x + 0.2y = 2.1 and 0.4x − 0.1y = 0.9. First clear the decimals.

6. Solve: x/2 + y/4 = 4 and x/3 + y/2 = 4. First clear the fractions.

7. Solve using the "add and subtract" trick: 47x + 53y = 247 and 53x + 47y = 253.

8. A student solving x + 2y = 7 and x − y = 1 wrote: "Subtract: x − x = 0, 2y − y = y, 7 − 1 = 6, so y = 6." Find the mistake and give the correct solution.

9. State True or False:
   (a) Adding two equations of a pair gives a new equation that the solution of the pair still satisfies.
   (b) To clear a fraction, it is enough to multiply only the left side of the equation by the LCM.
   (c) After finding the value of one variable, the problem is solved.
   (d) For 3x + 2y = 7 and 3x − 2y = 1, adding the two equations eliminates x.

### Answers

1. x ke coefficients barabar hain (2 aur 2), to ghatao: (2x + 5y) − (2x − 3y) = 16 − 0, to 8y = 16, **y = 2**. Pehli mein: 2x + 10 = 16, 2x = 6, **x = 3**.
   Jaanch: 2 × 3 + 5 × 2 = 6 + 10 = 16 ✅. 2 × 3 − 3 × 2 = 6 − 6 = 0 ✅

2. y ke coefficients −2 aur +2 ulte hain, to jodo: 7x = 35, **x = 5**. Pehli mein: 15 − 2y = 5, 2y = 10, **y = 5**.
   Jaanch: 3 × 5 − 2 × 5 = 15 − 10 = 5 ✅. 4 × 5 + 2 × 5 = 20 + 10 = 30 ✅

3. Doosri ko 2 se guna: 10x − 4y = 16. Pehli mein +4y hai, jodo: 3x + 4y + 10x − 4y = 10 + 16, to 13x = 26, **x = 2**. Pehli mein: 6 + 4y = 10, 4y = 4, **y = 1**.
   Jaanch: 3 × 2 + 4 × 1 = 10 ✅. 5 × 2 − 2 × 1 = 8 ✅

4. x hatate hain (LCM of 3, 4 = 12). Pehli ko 4 se: 12x + 20y = 84. Doosri ko 3 se: 12x + 9y = 51. Ghatao: 11y = 33, **y = 3**. Pehli mein: 3x + 15 = 21, 3x = 6, **x = 2**.
   Jaanch: 3 × 2 + 5 × 3 = 6 + 15 = 21 ✅. 4 × 2 + 3 × 3 = 8 + 9 = 17 ✅

5. Dono ko 10 se guna: 5x + 2y = 21 aur 4x − y = 9. Doosri ko 2 se guna: 8x − 2y = 18. Jodo: 13x = 39, **x = 3**. 4 × 3 − y = 9, to **y = 3**.
   Jaanch: 0.5 × 3 + 0.2 × 3 = 1.5 + 0.6 = 2.1 ✅. 0.4 × 3 − 0.1 × 3 = 1.2 − 0.3 = 0.9 ✅

6. Pehli ko 4 se guna: 2x + y = 16. Doosri ko 6 se guna: 2x + 3y = 24. Ghatao: (2x + 3y) − (2x + y) = 24 − 16, to 2y = 8, **y = 4**. 2x + 4 = 16, 2x = 12, **x = 6**.
   Jaanch: 6/2 + 4/4 = 3 + 1 = 4 ✅. 6/3 + 4/2 = 2 + 2 = 4 ✅

7. Jodo: 100x + 100y = 500, to x + y = 5. Doosri − pehli: 6x − 6y = 6, to x − y = 1. Jodo: 2x = 6, **x = 3**, aur **y = 2**.
   Jaanch: 47 × 3 + 53 × 2 = 141 + 106 = 247 ✅. 53 × 3 + 47 × 2 = 159 + 94 = 253 ✅

8. Galti sign mein hai. Ghatate waqt −(−y) = **+y**, to 2y − (−y) = 3y, na ki y. Sahi: (x + 2y) − (x − y) = 7 − 1, to 3y = 6, **y = 2**. Phir x + 4 = 7, **x = 3**.
   Jaanch: 3 + 2 × 2 = 7 ✅. 3 − 2 = 1 ✅

9. (a) **True** ✅. Dono equations x, y ki sachchi values par sahi hain, to unka jod bhi sahi hoga.
   (b) **False** ❌. Poori equation ko (dono taraf) guna karna hota hai.
   (c) **False** ❌. Doosra variable bhi nikalna hai, jawab ek jodi hai.
   (d) **False** ❌. y ke coefficients +2 aur −2 hain, to jodne par **y** gayab hota hai (6x = 8), x nahi.

---

Elimination ek baar haath mein aa jaye, to kaam kaafi tez ho jata hai: "kaunsa variable hataun?" ye socho, coefficients barabar karo, jodo ya ghatao, aur dono equations mein jaanch.

**Aage kya?** Ab tak hum dono equations ko ek-ek karke todte rahe. Topic 3 mein ek aur rochak tareeka milega: **cross-multiplication**, jisme coefficients ko ek khaas pattern mein guna karke x aur y seedha ek hi line mein mil jate hain.
