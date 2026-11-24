# Chapter: Arithmetic Progressions (Part 3)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [arithmetic-progressions-part2.md](arithmetic-progressions-part2.md) se aage chalti hai** (wahan Topic 2 mein aₙ = a + (n − 1)d seekha). Chapter ki shuruaat: [arithmetic-progressions.md](arithmetic-progressions.md). Chapter 2 mein zeros ko m − h, m, m + h likha tha: [polynomials-part4.md](../polynomials/polynomials-part4.md).
> **Topics covered in this file:**
> 3. AP Ko Pehchanne Ki Paheliyan: Do Terms Se Poora AP

---

# Topic 3: AP Ko Pehchanne Ki Paheliyan: Do Terms Se Poora AP

Topic 2 mein tumhare paas ek mazboot formula aaya: aₙ = a + (n − 1)d. Wahan hamesha a aur d diye hote the, aur hum koi bhi term nikaal lete the. Ab sawaal **ulta** hai: a aur d nahi diye, bas **kuch khabrein** di hain (do terms, ya ek term aur ek rishta, ya do terms ka jod), aur humein **poora AP** pakadna hai. Ye topic AP ki paheliyon ka hai: thode se suraagh se poore AP ka raaz kholna.

---

## Pankaj ka phata hua register

Pankaj ke Papa ki chhoti si dukaan kiraye par hai. Malik har saal kiraya ek fixed rakam se badhata hai, jaise ek AP ki tarah. (Asli zindagi mein kiraya aksar percent se badhta hai, par yahan hum maan rahe hain ki har saal ek jaisi rakam judti hai.) Ek din Papa ne purana kiraya-register nikaala. Dikkat ye thi ki uska beech ka page phata hua tha, aur bas do line bachi thi: **6th saal ka kiraya ₹14200** aur **11th saal ka kiraya ₹17450**.

Pankaj ne poochha, "Papa, pehle saal kitna kiraya tha? Aur har saal kitna badhta hai?" Papa muskuraye, "Do line mein hi sab kuch chhupa hai, beta. Dhundo to sahi." Pankaj ke dimaag mein Topic 2 ka formula ghoomne laga: "Agar a aur d pata hote to saal koi bhi hota, kiraya nikal leta. Par yahan to ulti ganga bah rahi hai!" Chalo, ulti ganga ko seedha karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Arithmetic mean (AM)** | Do numbers a aur c ka beech ka number: dono ko jodkar 2 se divide karo, yaani (a + c)/2. Ye dono se ek barabar doori par hota hai | 12 aur 30 ka AM = 42/2 = 21 |
| **Beech ka m aur gap h** | Teen numbers ko AP mein likhne ka tareeka: beech wala m, uske ek taraf m − h, doosri taraf m + h. h ek taraf ka gap hai (teen numbers mein d = h hota hai) | 4, 9, 14 mein m = 9, h = 5 |
| **Barabar-doori wale terms** | Ek finite AP ke do terms jinme ek shuruat se utni doori par ho jitni doori par doosra aakhir se ho: pehla aur aakhri, doosra aur aakhri se pehla, aise | 8 terms mein a₃ aur a₆ |

---

## Pichhle topics se yaad

Topic 2 ka formula **aₙ = a + (n − 1)d** hamara auzaar hai ([arithmetic-progressions-part2.md](arithmetic-progressions-part2.md)). Iska "kyun" yaad rakho: a₁ se aₙ tak pahunchne ke liye d ko n − 1 baar jodna padta hai. Isi baat se is topic ki saari paheliyan khulengi: bas ye dekhna hai ki do terms ke beech kitne "qadam" hain.

---

## Part A: Do terms se poora AP

**Idea:** pichhle formula ko do baar likho, aur ghata do.

aₚ = a + (p − 1)d  aur  a_q = a + (q − 1)d.

Ghatane par a kat jaata hai: aₚ − a_q = [(p − 1) − (q − 1)]d = **(p − q)d**.

Kyun? p-th aur q-th term ke beech **p − q qadam** hain, har qadam d ka. Isliye

**d = (aₚ − a_q) / (p − q)**, phir a = aₚ − (p − 1)d.

Dhyan rakho: ghatane ka **order upar aur neeche ek hi** hona chahiye (jis term ko pehle likha, uski position bhi pehle). Isi mein sign ki galti chhupi hoti hai, jo Aam galtiyan mein dekhenge.

### Example 1: Pankaj ka register

a₆ = 14200 aur a₁₁ = 17450. 6th se 11th tak **5 qadam** hain, to
a₁₁ − a₆ = 5d ⇒ 3250 = 5d ⇒ **d = 650**.
a₆ = a + 5d ⇒ 14200 = a + 3250 ⇒ **a = 10950**.
AP: 10950, 11600, 12250, ... Pehle saal ka kiraya ₹10950, aur har saal ₹650 ka badhav.
Aur 20th saal ka kiraya: a₂₀ = 10950 + 19 × 650 = 10950 + 12350 = **₹23300**.

```
saal 6      saal 7      saal 8      saal 9      saal 10     saal 11
Rs 14200    Rs 14850    Rs 15500    Rs 16150    Rs 16800    Rs 17450
  +650 --->   +650 --->   +650 --->   +650 --->   +650 --->
```

> **Figure 3.1** – Phate register ki do bachi line: 6th saal se 11th saal tak 5 qadam hain, har qadam +650. Isliye kul badhav 5 × 650 = 3250, aur 14200 + 3250 = 17450.

**Jaanch:** a₁₁ = 10950 + 10 × 650 = 10950 + 6500 = 17450 ✅ aur a₆ = 10950 + 5 × 650 = 14200 ✅. Doosre tareeke se: 6th saal se 5 qadam chalo (Figure 3.1), 14200 + 5 × 650 = 17450 ✅.
**Story check:** saal 1, 2, 3, ... poori ginti hai aur kiraya kabhi negative nahi. d = 650 > 0 hai aur kiraya sach mein badh raha hai, dono kahani se milte hain.

### Example 2: jab AP ghat raha ho

Kisi AP ka 9th term 19 hai aur 16th term −9. AP likho aur 25th term nikaalo.

d = (a₁₆ − a₉) / (16 − 9) = (−9 − 19) / 7 = −28/7 = **−4**. (Baad ka term chhota hai, to d negative aana hi chahiye: ye sign ka pehla test hai.)
a₉ = a + 8d, aur d = −4 hai to 8d = −32. Isliye 19 = a − 32 ⇒ **a = 51**.
AP: 51, 47, 43, 39, ... a₂₅ = 51 + 24 × (−4) = 51 − 96 = **−45**.
**Jaanch:** a₁₆ = 51 + 15 × (−4) = 51 − 60 = −9 ✅ aur a₉ = 51 − 32 = 19 ✅. Doosra tareeka: a₁₆ se 9 qadam aage, a₂₅ = −9 + 9 × (−4) = −45 ✅.

### Example 3: ek term aur ek rishta

Kisi AP ka 8th term 44 hai, aur 13th term 5th term ka **double** hai. AP dhundo.

Rishta likho: a₁₃ = 2a₅ ⇒ a + 12d = 2(a + 4d) = 2a + 8d ⇒ **a = 4d**. Ab 8th term: a + 7d = 44 ⇒ 4d + 7d = 44 ⇒ 11d = 44 ⇒ **d = 4**, to a = 16.
AP: 16, 20, 24, 28, 32, ...
**Jaanch:** a₅ = 32, a₁₃ = 16 + 12 × 4 = 64 = 2 × 32 ✅. a₈ = 16 + 28 = 44 ✅.
Yaad rakho: rishta a aur d ke beech ek equation deta hai, aur diya hua term doosri. Do unknowns, do equations.

### Example 4: terms ke jod wali shartein

Kisi AP mein a₄ + a₈ = 24 aur a₆ + a₁₀ = 44. AP dhundo.

a₄ + a₈ = (a + 3d) + (a + 7d) = 2a + 10d = 24 ... (1)
a₆ + a₁₀ = (a + 5d) + (a + 9d) = 2a + 14d = 44 ... (2)
(2) − (1) (dono taraf **ek hi order**): 4d = 20 ⇒ **d = 5**. (1) mein: 2a + 50 = 24 ⇒ 2a = −26 ⇒ **a = −13**.
AP: −13, −8, −3, 2, 7, 12, 17, 22, 27, 32, ...
**Jaanch:** a₄ = 2, a₈ = 22, jod 24 ✅. a₆ = 12, a₁₀ = 32, jod 44 ✅.

### Example 5: ek chhota saboot

Saabit karo: agar kisi AP mein aᵣ = s aur aₛ = r (r ≠ s) ho, to aᵣ₊ₛ = 0.

Pehle d: aᵣ − aₛ = (r − s)d. Par aᵣ − aₛ = s − r = −(r − s). To (r − s)d = −(r − s). r ≠ s hai, to dono taraf (r − s) se divide kar sakte hain: **d = −1**.
Ab a: aᵣ = a + (r − 1)d = a − (r − 1) = s ⇒ a = r + s − 1.
Ab aᵣ₊ₛ = a + (r + s − 1)d = (r + s − 1) − (r + s − 1) = **0**. Saabit.
**Jaanch** (ek sankhya wala udaharan): r = 4, s = 11. Yaani a₄ = 11 aur a₁₁ = 4. d = (4 − 11)/(11 − 4) = −1 ✅, a = 4 + 11 − 1 = 14. AP: 14, 13, 12, 11, ... Ab a₁₅ = 14 + 14 × (−1) = 0 aur r + s = 15 ✅.

---

## Part B: Beech wala term: arithmetic mean

AP ke teen lagaatar terms aₙ₋₁, aₙ, aₙ₊₁ lo. AP mein dono gap barabar hote hain:
aₙ − aₙ₋₁ = d = aₙ₊₁ − aₙ ⇒ 2aₙ = aₙ₋₁ + aₙ₊₁ ⇒ **aₙ = (aₙ₋₁ + aₙ₊₁)/2.**
Yaani har term apne padosiyon ka **arithmetic mean (AM)** hai, aur isi liye is progression ka naam arithmetic hai.

**Ulta bhi sach hai:** teen numbers a, b, c ke liye agar **2b = a + c**, to b − a = c − b, yaani dono gap barabar hain aur a, b, c ek AP mein hain (Topic 1 ka test). To

**a, b, c AP mein hain ⇔ 2b = a + c.**

### Example 6: k dhundo

Kis k ke liye k + 3, 3k − 5, 4k − 1 ek AP ke teen lagaatar terms hain?

Beech wala 3k − 5 hai: 2(3k − 5) = (k + 3) + (4k − 1) ⇒ 6k − 10 = 5k + 2 ⇒ **k = 12**.
Teeno numbers: 15, 31, 47, aur d = 16.
**Jaanch:** 31 − 15 = 16 aur 47 − 31 = 16 ✅.

### Example 7: bina d nikaale beech ka term

AP mein a₁₂ = 59 aur a₁₄ = 71 hai. a₁₃ kya hai?

a₁₃ in dono ke beech seedha padosi hai, to a₁₃ = (59 + 71)/2 = 130/2 = **65**.
**Jaanch:** a₁₂ se a₁₄ tak 2 qadam hain, to 2d = 12, d = 6. a₁₂ + 6 = 65 aur 65 + 6 = 71 ✅.

---

## Part C: Teen ya chaar numbers AP mein

Agar sawaal mein teen numbers AP mein hon aur unka jod ya guna diya ho, to a, a + d, a + 2d likhna thaka dene wala hota hai. Chapter 2 wala tareeka yahan bhi kaam aata hai: **m − h, m, m + h**. Faayda: jod mein h kat jaata hai.
(m − h) + m + (m + h) = **3m**, to jod se m seedha mil jaata hai.

```
      <-- h = 5 -->  <-- h = 5 -->
------+--------------+--------------+------
      4              9              14
      m - h          m              m + h
```

> **Figure 3.2** – Teen numbers AP mein: beech wala m, aur dono taraf barabar gap h. Yahan 4, 9, 14 mein m = 9, h = 5, aur AP ka common difference d = 5.

### Example 8: jod aur guna

Teen numbers AP mein hain, unka jod 27 hai aur guna 504. Numbers dhundo.

m − h, m, m + h. Jod: 3m = 27 ⇒ **m = 9**. Guna: (9 − h) × 9 × (9 + h) = 9(81 − h²) = 504 ⇒ 81 − h² = 56 ⇒ **h² = 25** ⇒ h = 5 ya h = −5.
h = 5 se **4, 9, 14**. h = −5 se 14, 9, 4: wahi teen numbers ulte order mein. To numbers **4, 9, 14** (ya inhe ulta likho).
**Jaanch:** 4 + 9 + 14 = 27 ✅. 4 × 9 × 14 = 36 × 14 = 504 ✅. Gap: 9 − 4 = 5 = 14 − 9 ✅.

### Example 9: jod aur squares ka jod

Teen numbers AP mein, jod 36 aur squares ka jod 530. Numbers?

3m = 36 ⇒ m = 12. Squares ka jod: (12 − h)² + (12 + h)² = 2 × 144 + 2h² = 288 + 2h², aur beech ka 12² = 144 alag. Kul = 432 + 2h² = 530 ⇒ 2h² = 98 ⇒ **h² = 49 ⇒ h = 7**.
Numbers: 12 − 7, 12, 12 + 7 = **5, 12, 19**.
**Jaanch:** 5 + 12 + 19 = 36 ✅. 25 + 144 + 361 = 530 ✅. Gap 7 aur 7 ✅.

### Example 10: chaar numbers AP mein

Chaar numbers ke liye **m − 3h, m − h, m + h, m + 3h** likho. Aise kyun? Lagaatar numbers ke beech ka gap 2h hai (m − 3h se m − h tak 2h, m − h se m + h tak 2h, phir 2h), to ye sach mein AP hai, jiska d = 2h. Jod = **4m**, aur h phir kat jaata hai. (m − 2h, m − h, m + h, m + 2h likhna galat hota: gap h, 2h, h ban jaate, jo barabar nahi.)

Chaar numbers AP mein, jod 52, aur pehle aur aakhri ka guna 133. Numbers?
4m = 52 ⇒ **m = 13**. Pehla × aakhri: (13 − 3h)(13 + 3h) = 169 − 9h² = 133 ⇒ 9h² = 36 ⇒ h² = 4 ⇒ **h = 2** (ya −2: ulta order).
Numbers: 13 − 6, 13 − 2, 13 + 2, 13 + 6 = **7, 11, 15, 19**.
**Jaanch:** 7 + 11 + 15 + 19 = 52 ✅. 7 × 19 = 133 ✅. Gap 4, 4, 4 ✅.

---

## Part D: Barabar-doori wale terms aur do AP

### Ends se barabar doori: jodi ka jod ek-sa

Ek AP ke n terms mein k-th term aur "peeche se k-th" term (jo aₙ₋ₖ₊₁ hai) ko jodo:
aₖ + aₙ₋ₖ₊₁ = [a + (k − 1)d] + [a + (n − k)d] = **2a + (n − 1)d**.
Is mein k hai hi nahi, to har barabar-doori wali jodi ka jod **ek hi** hai: a₁ + aₙ = a₂ + aₙ₋₁ = a₃ + aₙ₋₂ = ... Kyun? Jab ek term shuruat ki taraf ek qadam aage badhta hai, to uska saathi aakhir ki taraf ek qadam peeche hota hai: ek jagah d judta hai, doosri jagah d ghat jaata hai, aur jod nahi badalta.

```
 a₁    a₂    a₃    a₄    a₅    a₆    a₇    a₈
  5     9    13    17    21    25    29    33
  +-----------------------------------------+   a₁ + a₈ = 38
  :     +-----------------------------+     :   a₂ + a₇ = 38
  :     :     +-----------------+     :     :   a₃ + a₆ = 38
  :     :     :     +-----+     :     :     :   a₄ + a₅ = 38
```

> **Figure 3.3** – AP 5, 9, 13, ... ke pehle 8 terms. Shuruat aur aakhir se barabar doori ki chaaron jodiyon ka jod 38 hai (2a + 7d = 10 + 28 = 38). Ye "jodi ka jod ek-sa" wali baat Topic 4 mein poore AP ka jod nikaalne ki chaabi banegi (abhi sirf ek jhalak).

Isi ka ek rup: **agar do jodiyon mein term-numbers ka jod barabar hai, to terms ka jod bhi barabar hai.** (Jaise 4 + 12 = 7 + 9 to a₄ + a₁₂ = a₇ + a₉.) Beech ke akele term ke liye 2aₘ = aₚ + a_q jab m = (p + q)/2.

### Example 11: barabar-doori se term

Kisi AP mein a₅ + a₁₃ = 74. Ye bataiye: a₉, a₇ + a₁₁ aur a₃ + a₁₅ kya hain?

5 + 13 = 18 = 9 + 9 = 7 + 11 = 3 + 15. To a₉ + a₉ = 74 ⇒ **a₉ = 37**, aur **a₇ + a₁₁ = 74**, **a₃ + a₁₅ = 74**. (Ye bina a ya d jaane mil gaya.)
**Jaanch** (ek sach-much ka AP lekar, jisme a₅ + a₁₃ = 74 ho): a = 5, d = 4 lo. a₅ = 21, a₁₃ = 53, jod 74 ✅. Ab a₉ = 37 ✅, a₇ + a₁₁ = 29 + 45 = 74 ✅, a₃ + a₁₅ = 13 + 61 = 74 ✅.

### Example 12: do AP, ek hi d

Pankaj ki dukaan ke bagal wali dukaan ka kiraya bhi har saal ek hi rakam d se badhta hai, par uska shuruaati kiraya alag hai. Hum seedha numbers lete hain: do APs ka common difference **ek hi** hai, aur unke 17th terms ka farak 29 hai. 53rd terms ka farak kya hoga?

Pehle AP ka a, doosre ka b, dono ka d. aₙ − bₙ = [a + (n − 1)d] − [b + (n − 1)d] = **a − b**. d kat gaya, to farak **n par depend hi nahi karta**: har n par wahi. 17th par 29 hai, to 53rd par bhi **29**.
**Jaanch:** AP 8, 11, 14, ... (a = 8, d = 3) aur doosra b = 8 − 29 = −21, d = 3: −21, −18, −15, ... a₁₇ = 8 + 48 = 56, b₁₇ = −21 + 48 = 27, farak 29 ✅. a₅₃ = 8 + 156 = 164, b₅₃ = −21 + 156 = 135, farak 164 − 135 = 29 ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: do equations ko ghatate waqt sign ulta ho jaana**

Kisi AP mein a₇ = 58 aur a₁₂ = 33. Ek bacche ne likha: a + 6d = 58, a + 11d = 33. Phir upar wali ko neeche wali se ghataya (bayen taraf), par daayen taraf neeche wali se upar wali: (a + 6d) − (a + 11d) = **−5d**, aur 33 − 58 = **−25**, to −5d = −25 ⇒ **d = 5**. Phir a = 58 − 30 = 28.
**Ulta udaharan:** is AP se a₁₂ = 28 + 55 = **83**, jabki diya hua 33 hai. Aur dekho, a₇ = 58 se a₁₂ = 33 tak term ghat raha hai, to d negative hona chahiye tha, par bacche ko d = 5 mila: sign ki galti.
Kyun hui? Bayen taraf "pehla − doosra" liya, daayen taraf "doosra − pehla". **Dono taraf ek hi order** rakho. Sahi: (a + 11d) − (a + 6d) = 5d aur 33 − 58 = −25, to 5d = −25, **d = −5**, a = 58 + 30 = **88**.
**Jaanch:** AP 88, 83, 78, ... a₇ = 88 − 30 = 58 ✅ aur a₁₂ = 88 − 55 = 33 ✅.

**Galti 2: teen numbers ko a, a + d, a + 3d likhna**

"Teen numbers AP mein hain, jod 33" par bacche ne likha a, a + d, a + 3d (a + 2d wala term chhoot gaya), jod 3a + 4d = 33, aur a = 3, d = 6 le liya: 3, 9, 21.
**Ulta udaharan:** gap dekho: 9 − 3 = 6 par 21 − 9 = 12. Barabar nahi, to ye AP hi nahi hai. Galti ye thi ki a + 2d ki jagah seedha a + 3d likh diya.
Sahi tareeka: a, a + d, a + 2d, ya aur behtar **m − h, m, m + h**. Jod 33 ho to 3m = 33 ⇒ m = 11, aur h kuch bhi ho (h = 5 par 6, 11, 16, aur h = 9 par 2, 11, 20): har baar AP hi banta hai.
**Jaanch:** 6 + 11 + 16 = 33 ✅, gap 5, 5 ✅. 2 + 11 + 20 = 33 ✅, gap 9, 9 ✅.

---

## Quick Recap

- **Do terms se AP:** d = (aₚ − a_q)/(p − q) (dono taraf ek hi order), phir a = aₚ − (p − 1)d. p − q = un dono ke beech ke qadam.
- **Term + rishta ya terms ka jod:** har term ko a aur d mein likho, do equations banao, ghatao ya mila kar hal karo.
- **AM:** aₙ = (aₙ₋₁ + aₙ₊₁)/2. a, b, c AP mein ⇔ 2b = a + c.
- **Teen numbers:** m − h, m, m + h (jod 3m). **Chaar numbers:** m − 3h, m − h, m + h, m + 3h (jod 4m, d = 2h).
- **Barabar-doori wali jodiyon ka jod ek-sa:** a₁ + aₙ = a₂ + aₙ₋₁ = ... = 2a + (n − 1)d. (Topic 4 ki chaabi.)
- **Do AP, same d:** unke terms ka farak har n par ek-sa (a − b).
- **Galti 1:** equations ghatate waqt dono taraf ek order. **Galti 2:** teen numbers a, a + d, a + 2d (ya m − h, m, m + h), kabhi a + 3d nahi.

---

## Practice Questions

1. The 8th term of an AP is 67 and its 18th term is 127. Find the first term, the common difference, the AP's first four terms and the 30th term.

2. The 6th term of an AP is 2.3 and its 14th term is 8.7. Write the first four terms and find the 20th term.

3. The 11th term of an AP is −5 and its 23rd term is −89. Find the AP's first four terms and the 10th term. Is the AP increasing or decreasing, and does this match your d?

4. In an AP, the 14th term is three times the 4th term, and the 9th term is 70. Find the AP.

5. In an AP, a₆ + a₁₂ = 122 and a₁₀ − a₅ = 45. Find the AP's first four terms.

6. For what value of k are 2k − 1, 3k + 2, 6k − 5 three consecutive terms of an AP? Write the terms.

7. Three numbers are in AP with sum 42 and product 2394. Find them.

8. Three numbers are in AP with sum −12 and product 80. Find them.

9. Four numbers are in AP with sum 20 and the product of the middle two is 16. Find them.

10. Two APs have the same common difference. The first term of one is 23 and of the other −9. (a) What is the difference between their 42nd terms? (b) If the 10th term of the first AP is 86, find the 10th term of the second.

11. Prove that in any AP, aₖ₋ᵣ + aₖ₊ᵣ = 2aₖ (with r < k). Use it to find a₂₃ if a₁₇ = 41 and a₂₉ = 89.

12. In a tenant's agreement the shop rent rises by a fixed amount each year. The rent in the 5th year was ₹7950 and in the 12th year ₹11450. Find the 1st year's rent and the yearly rise. Can the rent ever be exactly ₹10200? Can it be exactly ₹14950? In which year?

13. True or False, with a reason: (a) The numbers 5, 9, 14 can be written as m − h, m, m + h. (b) In every AP, a₅ + a₁₁ = a₆ + a₁₀. (c) If 2b = a + c then a, b, c are in AP. (d) In every AP, a₃ + a₁₀ = a₆ + a₈.

### Answers

1. d = (127 − 67)/(18 − 8) = 60/10 = **6**. a₈ = a + 7d ⇒ 67 = a + 42 ⇒ **a = 25**. AP: **25, 31, 37, 43, ...**. a₃₀ = 25 + 29 × 6 = 25 + 174 = **199**.
   Jaanch: a₈ = 25 + 42 = 67 ✅, a₁₈ = 25 + 17 × 6 = 127 ✅.

2. d = (8.7 − 2.3)/(14 − 6) = 6.4/8 = **0.8**. a₆ = a + 5d ⇒ 2.3 = a + 4 ⇒ **a = −1.7**. AP: **−1.7, −0.9, −0.1, 0.7, ...**. a₂₀ = −1.7 + 19 × 0.8 = −1.7 + 15.2 = **13.5**.
   Jaanch: a₁₄ = −1.7 + 13 × 0.8 = −1.7 + 10.4 = 8.7 ✅. a₆ = −1.7 + 4 = 2.3 ✅.

3. d = (−89 − (−5))/(23 − 11) = −84/12 = **−7**. a₁₁ = a + 10d ⇒ −5 = a − 70 ⇒ **a = 65**. AP: **65, 58, 51, 44, ...**. a₁₀ = 65 + 9 × (−7) = 65 − 63 = **2**. d negative hai, to AP **decreasing** hai, aur kahani yahi: 11th term −5 se 23rd term −89 ghatta hai: match karta hai.
   Jaanch: a₂₃ = 65 + 22 × (−7) = 65 − 154 = −89 ✅. a₁₁ = 65 − 70 = −5 ✅. Aur a₁₀ = 2, a₁₁ = −5: gap −7 ✅.

4. Rishta: a + 13d = 3(a + 3d) = 3a + 9d ⇒ 4d = 2a ⇒ **a = 2d**. Phir a₉ = a + 8d = 2d + 8d = 10d = 70 ⇒ **d = 7**, a = 14. AP: **14, 21, 28, 35, ...**.
   Jaanch: a₄ = 35, a₁₄ = 14 + 91 = 105 = 3 × 35 ✅. a₉ = 14 + 56 = 70 ✅.

5. a₆ + a₁₂ = (a + 5d) + (a + 11d) = 2a + 16d = 122 ... (1). a₁₀ − a₅ = (a + 9d) − (a + 4d) = 5d = 45 ⇒ **d = 9**. (1) mein: 2a + 144 = 122 ⇒ 2a = −22 ⇒ **a = −11**. AP: **−11, −2, 7, 16, ...**.
   Jaanch: a₆ = −11 + 45 = 34, a₁₂ = −11 + 99 = 88, jod 122 ✅. a₁₀ = −11 + 81 = 70, a₅ = −11 + 36 = 25, farak 45 ✅.

6. Beech wala 3k + 2: 2(3k + 2) = (2k − 1) + (6k − 5) ⇒ 6k + 4 = 8k − 6 ⇒ 10 = 2k ⇒ **k = 5**. Terms: **9, 17, 25** (d = 8).
   Jaanch: 17 − 9 = 8 aur 25 − 17 = 8 ✅.

7. 3m = 42 ⇒ m = 14. Guna: 14(196 − h²) = 2394 ⇒ 196 − h² = 171 ⇒ h² = 25 ⇒ h = ±5. Numbers **9, 14, 19** (ya ulta order).
   Jaanch: 9 + 14 + 19 = 42 ✅. 9 × 14 = 126, 126 × 19 = 2394 ✅. Gap 5, 5 ✅.

8. 3m = −12 ⇒ m = −4. Guna: (−4)(16 − h²) = 80 ⇒ 16 − h² = −20 ⇒ h² = 36 ⇒ h = ±6. Numbers: −4 − 6, −4, −4 + 6 = **−10, −4, 2** (ya 2, −4, −10).
   Jaanch: −10 − 4 + 2 = −12 ✅. (−10)(−4) = 40, 40 × 2 = 80 ✅. Gap 6, 6 ✅.

9. 4m = 20 ⇒ m = 5. Beech ke do: (m − h)(m + h) = 25 − h² = 16 ⇒ h² = 9 ⇒ h = ±3. Numbers: m − 3h, m − h, m + h, m + 3h = 5 − 9, 5 − 3, 5 + 3, 5 + 9 = **−4, 2, 8, 14** (ya ulta).
   Jaanch: −4 + 2 + 8 + 14 = 20 ✅. 2 × 8 = 16 ✅. Gap 6, 6, 6 ✅.

10. (a) Farak a − b = 23 − (−9) = **32**, har n par, to 42nd terms ka bhi 32. (b) Pehle AP ka 10th term 86 hai, to doosre ka 86 − 32 = **54**.
    Jaanch: pehla AP: 23 + 9d = 86 ⇒ d = 7. Doosra: −9 + 9 × 7 = 54 ✅. 42nd: 23 + 41 × 7 = 310 aur −9 + 287 = 278, farak 32 ✅.

11. aₖ₋ᵣ + aₖ₊ᵣ = [a + (k − r − 1)d] + [a + (k + r − 1)d] = 2a + (2k − 2)d = 2[a + (k − 1)d] = 2aₖ. (r kat gaya.) Saabit.
    a₂₃ ke dono taraf 6 qadam: 17 = 23 − 6 aur 29 = 23 + 6, to a₂₃ = (a₁₇ + a₂₉)/2 = (41 + 89)/2 = **65**.
    Jaanch: a₁₇ se a₂₉ tak 12 qadam, 12d = 48, d = 4. a₂₃ = 41 + 6 × 4 = 65 ✅.

12. d = (11450 − 7950)/(12 − 5) = 3500/7 = **₹500** ka yearly badhav. a₅ = a + 4d ⇒ 7950 = a + 2000 ⇒ **a = ₹5950** (pehle saal ka kiraya). aₙ = 5950 + (n − 1) × 500.
    ₹10200: 5950 + (n − 1) × 500 = 10200 ⇒ (n − 1) × 500 = 4250 ⇒ n − 1 = 8.5 ⇒ n = 9.5. **Story check:** saal ginti ki poori sankhya hona chahiye, aur 9.5 saal nahi hota, to ₹10200 **kabhi nahi** aayega.
    ₹14950: (n − 1) × 500 = 9000 ⇒ n − 1 = 18 ⇒ **n = 19**. 19th saal mein.
    Jaanch: a₁₂ = 5950 + 11 × 500 = 11450 ✅. a₁₉ = 5950 + 18 × 500 = 14950 ✅. Ye bhi dekho: 9th saal ₹9950 aur 10th saal ₹10450, to ₹10200 inke beech aata hai, kisi saal ka kiraya nahi.

13. (a) **False** ❌. 9 − 5 = 4 aur 14 − 9 = 5, gap barabar nahi, to 5, 9, 14 AP hi nahi hain, m − h, m, m + h roop mein nahi aate. (b) **True** ✅. 5 + 11 = 16 = 6 + 10, to terms ka jod barabar (a₅ + a₁₁ = 2a + 14d = a₆ + a₁₀). (c) **True** ✅. 2b = a + c ⇒ b − a = c − b, dono gap barabar (Part B). (d) **False** ❌. 3 + 10 = 13 par 6 + 8 = 14: term-numbers ka jod barabar nahi, to terms ka jod barabar hone ki guarantee nahi. Jaanch: AP 1, 2, 3, ... lo: a₃ + a₁₀ = 13 aur a₆ + a₈ = 14 ✅.

---

Shabaash! Ab tum kisi bhi AP ko do suraaghon se pakad sakte ho, aur Pankaj ke phate register jaisi paheliyon ko khud suljha sakte ho: do terms se d aur a, beech ke term se AM, aur teen ya chaar numbers ke liye m aur h.

**Aage kya?** Part D mein tumne dekha ki barabar-doori wali jodiyon ka jod ek-sa hota hai. Topic 4 mein isi trick se, ek chhote bacche ki mashhoor kahani ke saath, 1 + 2 + ... + 100 jaisa lamba jod aur kisi bhi AP ke n terms ka jod (Sₙ) chutkiyon mein nikaalenge.
