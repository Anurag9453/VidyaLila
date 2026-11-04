# Chapter: Number Systems (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [number-systems.md](number-systems.md) se aage chalti hai.**
> **Topics covered in this file:**
> 2. Rational Numbers aur Decimals

---

# Topic 2: Rational Numbers aur Decimals

Topic 1 mein humne numbers ka poora parivaar dekha: natural numbers, whole numbers, integers aur rational numbers. Humne seekha ki rational number wo hai jise **p/q** ki shakal mein likh sakein (jahan q ≠ 0), unhe number line par kaise dikhate hain, aur ye bhi ki do rational numbers ke beech **anant (infinitely many)** rational numbers chhupe hote hain.

Ab ek naya sawaal. Hum roz paison aur naap mein **decimals** use karte hain: ₹12.50, 1.75 metre, 36.6°C. To kya har rational number ko decimal mein likh sakte hain? Aur decimal dekh kar kaise pata chale ki wo rational hai ya nahi? Is topic mein yahi pata lagayenge.

---

## Quiz ke inaam ki kahani

Meher, Arnav aur Zoya ne school ki quiz competition jeeti. Inaam mila **₹10**. Teeno ne socha ki barabar baant lete hain.

Arnav ne turant phone ka calculator khola aur likha **10 ÷ 3**. Screen par aaya:

**3.333333333**

Zoya boli, "Ye 3 khatam kab honge?" Arnav ne kaha, "Screen bhar gayi, isliye ruk gaye. Par shayad aage bhi chalte rehte."

Meher ne copy nikali aur haath se division kiya:

- 10 ÷ 3 = 3, bacha **1**
- 1 ke aage 0 lagaya: 10 ÷ 3 = 3, phir bacha **1**
- Phir 10 ÷ 3 = 3, phir bacha **1**
- ...

"Dekho!" Meher boli. "Har baar **wahi 1 bach raha hai**. To division kabhi khatam nahi hoga, aur har baar 3 hi aayega. Ye decimal **anant tak chalta hai, par ek hi pattern repeat karta hai**."

Phir Zoya ne apni cycle ki ₹7 ki ghanti ka hisaab lagaya, jo 8 doston mein baantna tha: 7 ÷ 8 = **0.875**. Ye wala to teen digit ke baad **khatam ho gaya**.

To kuch fractions ka decimal khatam ho jata hai, aur kuch ka pattern ke saath chalta rehta hai. Aisa kyun hota hai, aur kaunsa fraction kaisa decimal banayega, yahi is topic ka asli khel hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Terminating decimal** | Aisa decimal jo kuch digits ke baad **khatam** ho jaye | 7/8 = 0.875 |
| **Non-terminating recurring decimal** | Aisa decimal jo **kabhi khatam nahi hota**, par uske digits ka ek block **baar baar repeat** hota hai | 1/3 = 0.3333... |
| **Repeating block (period)** | Wo digits jo baar baar dohraye jaate hain | 1/7 mein 142857 |
| **Bar notation** | Repeat hone wale digits ke upar ek **line (bar)** lagakar chhota likhna | 0.3333... = 0.3̄ |
| **Pure recurring** | Decimal point ke **turant baad** se repeat shuru ho jaye | 0.4̄7̄ = 0.474747... |
| **Mixed recurring** | Pehle kuch digits **ek baar** aayein, phir repeat shuru ho | 0.47̄ = 0.47777... |
| **Lowest form** | Fraction jisme upar aur neeche ka koi common factor (1 ke alawa) na bacha ho | 9/15 ka lowest form 3/5 |
| **Successive magnification** | Number line ke ek chhote hisse ko baar baar "zoom" karke dekhna | 3.765 ko dhundhna |

---

## Part A: p/q ko decimal mein badalna (long division se)

Koi bhi fraction p/q ka matlab hai **p ÷ q**. Bas long division karte jao. Do hi cheezein ho sakti hain.

### Case 1: Remainder 0 ho jaye (terminating decimal)

**Example 1:** 7/8

```
        0.875
      -------
  8 ) 7.000
      6 4
      ---
        60
        56
        --
         40
         40
         --
          0      <- remainder 0, division khatam
```

- 70 ÷ 8 = 8, bacha 6
- 60 ÷ 8 = 7, bacha 4
- 40 ÷ 8 = 5, bacha **0**

**7/8 = 0.875** (terminating)

Jaanch: 0.875 × 8 = 7 ✅

**Example 2:** 13/20

- 130 ÷ 20 = 6, bacha 10
- 100 ÷ 20 = 5, bacha **0**

**13/20 = 0.65** (terminating)

### Case 2: Remainder kabhi 0 na ho, par repeat ho (recurring decimal)

**Example 3:** 1/3

- 10 ÷ 3 = 3, bacha 1
- 10 ÷ 3 = 3, bacha 1 (wahi remainder phir aa gaya!)

**1/3 = 0.3333...** (non-terminating recurring)

**Example 4:** 3/11

- 30 ÷ 11 = 2, bacha 8
- 80 ÷ 11 = 7, bacha 3
- 30 ÷ 11 = 2, bacha 8 (remainder 3 phir aa gaya, to aage sab repeat hoga)

**3/11 = 0.272727...** Yahan **27** ka block repeat ho raha hai.

**Example 5:** 1/7 (sabse mazedaar wala)

| Step | Division | Digit | Remainder |
|---|---|---|---|
| 1 | 10 ÷ 7 | 1 | 3 |
| 2 | 30 ÷ 7 | 4 | 2 |
| 3 | 20 ÷ 7 | 2 | 6 |
| 4 | 60 ÷ 7 | 8 | 4 |
| 5 | 40 ÷ 7 | 5 | 5 |
| 6 | 50 ÷ 7 | 7 | **1** |
| 7 | 10 ÷ 7 | 1 | 3 (phir se step 1 jaisa!) |

**1/7 = 0.142857 142857 142857...** Yahan **6 digits ka block (142857)** repeat hota hai.

Jaanch: 7 × 0.142857 = 0.999999, jo 1 ke bahut paas hai. Agar block anant tak chale to ye theek 1 ban jata hai (Part E mein dekhoge kyun) ✅

### Bar notation: chhota likhne ka tarika

Baar baar "..." likhna thakaane wala hai. Isliye **jo digits repeat hote hain, unke upar ek bar (line)** laga dete hain.

| Lamba roop | Bar notation | Repeating block |
|---|---|---|
| 0.3333... | 0.3̄ | 3 |
| 0.272727... | 0.2̄7̄ | 27 |
| 0.142857142857... | 0.1̄4̄2̄8̄5̄7̄ | 142857 |
| 0.58333... | 0.583̄ | sirf 3 |
| 2.1666... | 2.16̄ | sirf 6 |

> Dhyan do: bar **sirf un digits par** lagta hai jo repeat hote hain. 0.58333... mein 5 aur 8 ek hi baar aaye, isliye bar sirf 3 par hai.

---

## Part B: Remainder repeat hona hi kyun padta hai?

Ye is topic ka sabse sundar "kyun" hai.

Jab hum kisi number ko **7 se divide** karte hain, to remainder kya kya ho sakta hai? Sirf **0, 1, 2, 3, 4, 5 ya 6**. (7 ya usse bada remainder ho hi nahi sakta, warna ek aur baar divide ho jata.)

- Agar kabhi remainder **0** aa gaya, to division khatam: **terminating decimal**.
- Agar 0 kabhi nahi aaya, to bache sirf **6 options: 1 se 6**. Har step par in 6 mein se hi koi remainder aayega. To **zyada se zyada 6 steps ke andar** koi na koi remainder **dobara** aana hi padega.

Aur jaise hi koi remainder dobara aaya, uske baad ka poora kaam **bilkul pehle jaisa** hoga. Isliye digits ka block repeat ho jata hai.

Ise aise samjho: tumhare paas sirf 6 rang ki shirts hain. Agar roz alag shirt pehno, to 7th din tak koi na koi shirt **dobara pehenni hi padegi**.

**General niyam:** p/q mein non-zero remainders sirf **1 se (q − 1)** tak ho sakte hain. Isliye:
- Ya to decimal **khatam ho jayega** (remainder 0),
- Ya **zyada se zyada (q − 1) digits** ke block mein **repeat ho jayega**.

1/7 mein block ki lambai 6 = 7 − 1 thi, yaani pura maximum. 1/3 mein sirf 1 thi. Block chhota bhi ho sakta hai, par q − 1 se bada kabhi nahi.

---

## Part C: Bina divide kiye kaise pata chale ki decimal khatam hoga?

Ek shortcut hai jo bahut kaam ka hai.

> Fraction ko pehle **lowest form** mein likho. Agar **denominator mein sirf 2 aur 5 ke factors** hon (aur koi prime nahi), to decimal **terminating** hoga. Warna **non-terminating recurring**.

### Kyun? (halki si reasoning)

Decimal ka matlab hai **10, 100, 1000...** wale denominator. Aur **10 = 2 × 5**. To agar denominator sirf 2 aur 5 se bana hai, to upar-neeche kisi number se multiply karke use 10, 100 ya 1000 bana sakte ho.

- 3/8: 8 = 2 × 2 × 2. Upar-neeche **125** se multiply karo: 3/8 = 375/1000 = **0.375**
- 7/20: 20 = 2 × 2 × 5. Upar-neeche **5** se multiply karo: 7/20 = 35/100 = **0.35**

Par agar denominator mein **3, 7, 11** jaisa koi doosra prime hai, to wo 10 ki kisi bhi power mein kabhi fit nahi hoga (kyunki 10, 100, 1000 mein sirf 2 aur 5 hi hote hain). Isliye division kabhi khatam nahi hota.

### Examples ki table

| Fraction | Lowest form | Denominator ke factors | Decimal kaisa? | Decimal |
|---|---|---|---|---|
| 3/20 | 3/20 | 2 × 2 × 5 | Terminating | 0.15 |
| 13/125 | 13/125 | 5 × 5 × 5 | Terminating | 0.104 |
| 11/40 | 11/40 | 2 × 2 × 2 × 5 | Terminating | 0.275 |
| 7/12 | 7/12 | 2 × 2 × **3** | Recurring | 0.583̄ |
| 5/6 | 5/6 | 2 × **3** | Recurring | 0.83̄ |
| 2/7 | 2/7 | **7** | Recurring | 0.2̄8̄5̄7̄1̄4̄ |
| 9/15 | **3/5** | 5 | Terminating | 0.6 |

Aakhri row dhyan se dekho. 9/15 mein denominator 15 = 3 × 5 hai, jisme 3 hai, to lagta hai recurring hoga. Par pehle lowest form banao: 9/15 = **3/5**, aur 5 mein sirf 5 hai. To ye **terminating** hai: 0.6. **Isliye lowest form pehle banana zaroori hai.**

Jaanch: 9 ÷ 15 = 0.6 ✅

---

## Part D: Terminating decimal ko p/q mein badalna

Ye sabse aasan hai. Decimal ke baad jitne digits, neeche 1 ke aage utne zeros.

**Example 1:** 0.375

0.375 = 375/1000. Ab simplify karo (dono ko 125 se divide):

= **3/8**

Jaanch: 3 ÷ 8 = 0.375 ✅

**Example 2:** 2.45

2.45 = 245/100 = **49/20**

Jaanch: 49 ÷ 20 = 2.45 ✅

**Example 3:** 0.04

0.04 = 4/100 = **1/25**

Jaanch: 1 ÷ 25 = 0.04 ✅

---

## Part E: Pure recurring decimal ko p/q mein badalna

Yahan ek jaadui trick hai: **number ko x maano, 10 ya 100 se multiply karo, aur ghatao. Anant wala hissa apne aap kat jata hai.**

### Example 1: 0.3̄ = 0.3333...

Maan lo **x = 0.3333...** ... (1)

Ek digit repeat ho raha hai, to **10 se multiply** karo:

**10x = 3.3333...** ... (2)

Ab (2) mein se (1) ghatao:

```
  10x = 3.3333...
-   x = 0.3333...
  ---------------
   9x = 3
```

Dekho, peeche ke saare 3 kat gaye! Bacha 9x = 3, to x = 3/9 = **1/3**.

Jaanch: 1 ÷ 3 = 0.3333... ✅

### Example 2: 0.4̄7̄ = 0.474747...

x = 0.474747... ... (1)

Do digits (47) repeat ho rahe hain, to **100 se multiply** karo:

100x = 47.474747... ... (2)

(2) − (1): 99x = 47

x = **47/99**

Jaanch: 47 ÷ 99 = 0.4747... ✅

### Niyam yaad rakhne ka tarika

**Jitne digits repeat ho rahe hain, utne zero wale number (10, 100, 1000) se multiply karo.**

Isse ek shortcut bhi nikalta hai: pure recurring ke liye, **repeating block / utne hi 9**.
- 0.3̄ = 3/9 = 1/3
- 0.4̄7̄ = 47/99
- 0.1̄2̄3̄ = 123/999 = 41/333

### Ek mazedaar sawaal: kya 0.9̄ = 1?

Bahut log sochte hain ki 0.9999... thoda sa 1 se chhota hai. Chalo trick laga ke dekhte hain.

x = 0.9999... ... (1)

10x = 9.9999... ... (2)

(2) − (1): 9x = 9

x = **1**

Haan! **0.9̄ bilkul 1 ke barabar hai.** Ek aur tarike se dekho:
- 1/3 = 0.3333...
- Dono taraf 3 se guna karo: 3 × 1/3 = 0.9999...
- Par 3 × 1/3 = 1 hai.

To 0.9999... = 1. Ye do alag numbers nahi hain, ek hi number ke **do alag naam** hain, jaise "aadha" aur "0.5".

Agar mann na maane to ye socho: agar 0.9̄ aur 1 alag hote, to unke beech koi number hota (Topic 1 mein dekha tha ki do alag numbers ke beech hamesha numbers hote hain). Par 0.9999... aur 1 ke beech koi number dhundh hi nahi sakte.

---

## Part F: Mixed recurring decimal ko p/q mein badalna

Mixed recurring mein pehle kuch digits **ek baar** aate hain, phir repeat shuru hota hai. Yahan **do baar multiply** karte hain, taaki dono numbers mein decimal ke baad **same repeating hissa** bache.

### Example 1: 0.47̄ = 0.47777...

Yahan 4 ek baar aaya, aur 7 repeat ho raha hai.

x = 0.47777...

**Step 1:** Itna multiply karo ki repeat hone wala hissa decimal ke **theek baad** aa jaye. 4 ko decimal ke left le jao: 10 se multiply.

10x = 4.7777... ... (1)

**Step 2:** Ek repeating block aur aage khisakao: phir 10 se multiply (yaani x ko 100 se).

100x = 47.7777... ... (2)

**Step 3:** (2) − (1):

```
  100x = 47.7777...
-  10x =  4.7777...
  -----------------
   90x = 43
```

x = **43/90**

Jaanch: 43 ÷ 90 = 0.47777... ✅

### Example 2: 1.2̄7̄ = 1.272727...

Ye pure recurring hai, bas aage 1 hai. Do digits (27) repeat ho rahe hain.

x = 1.272727... ... (1)

100x = 127.272727... ... (2)

(2) − (1): 99x = 126

x = 126/99 = **14/11** (dono ko 9 se divide kiya)

Jaanch: 14 ÷ 11 = 1.2727... ✅

### Example 3: 2.16̄ = 2.1666...

x = 2.1666...

10x = 21.666... ... (1)

100x = 216.666... ... (2)

(2) − (1): 90x = 195

x = 195/90 = **13/6**

Jaanch: 13 ÷ 6 = 2.1666... ✅

### Golden rule

Do aise equations banao jinme **decimal ke baad ka hissa bilkul same** ho. Tab ghataane par anant wala hissa poora kat jata hai.

---

## Part G: Bada niyam: rational aur decimal ka rishta

Ab tak jo dekha, use ek line mein jodte hain.

> **Har rational number ka decimal ya to terminating hota hai, ya non-terminating recurring.**
>
> **Aur ulta bhi sach hai:** har terminating ya recurring decimal ko p/q mein likha ja sakta hai, yaani wo **rational** hai.

| Taraf | Kyun sach hai |
|---|---|
| Rational → terminating ya recurring | Part B: remainders limited hain, to ya 0 aayega ya koi remainder repeat hoga |
| Terminating → rational | Part D: 10, 100, 1000 wala denominator |
| Recurring → rational | Part E aur F: multiply-aur-ghatao wali trick |

To ab tumhare paas rational number ko pehchanne ka ek aur tarika hai: **uska decimal dekho**. Khatam hota hai ya pattern mein repeat hota hai? To rational hai.

Ab ek sawaal jo Topic 3 tak dimaag mein rakhna: kya koi aisa decimal bhi ho sakta hai jo **na khatam ho, aur na kabhi repeat ho**? Agar hai, to wo kya hoga?

---

## Part H: Decimals ko number line par dikhana (successive magnification)

Number line par 3 ya 3.5 dikhana aasan hai. Par **3.765** kahan hai? Itne chhote hisse dekhne ke liye hum **magnifying glass** wala tarika use karte hain: ek hissa lo, use zoom karo, phir uske andar ka hissa zoom karo.

### Example 1: 3.765 ko dhundhna

**Step 1:** 3.765 kahan hai? 3 aur 4 ke beech. Is hisse ko 10 barabar bhaagon mein baanto.

```
3   3.1  3.2  3.3  3.4  3.5  3.6  3.7  3.8  3.9  4
|----|----|----|----|----|----|----|----|----|----|
                                   [=====]
                                   3.7 se 3.8 ke beech
```

**Step 2:** 3.7 aur 3.8 ke beech wale hisse ko zoom karo aur 10 bhaagon mein baanto.

```
3.7  3.71 3.72 3.73 3.74 3.75 3.76 3.77 3.78 3.79 3.8
|----|----|----|----|----|----|----|----|----|----|
                              [====]
                              3.76 se 3.77 ke beech
```

**Step 3:** 3.76 aur 3.77 ke beech wale hisse ko zoom karo aur 10 bhaagon mein baanto.

```
3.76 3.761 3.762 3.763 3.764 3.765 3.766 3.767 3.768 3.769 3.77
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
                              ^
                            3.765
```

Mil gaya! 3.765, 3.76 se aage **5th nishaan** par hai.

**Har step par:** decimal ka ek aur digit "khulta" hai. 3 digits the, to 3 baar zoom kiya.

### Example 2: 4.26̄ ko 4 decimal places tak dikhana

4.26̄ = 4.26666... Ye kabhi khatam nahi hota, to hum ise **4 decimal places tak**, yaani **4.2666** tak dikhayenge.

| Zoom | Kis hisse mein dekha | 10 bhaagon mein baanta | Hamara number kahan |
|---|---|---|---|
| 1 | 4 se 5 | 4.1, 4.2, ... | 4.2 aur 4.3 ke beech |
| 2 | 4.2 se 4.3 | 4.21, 4.22, ... | 4.26 aur 4.27 ke beech |
| 3 | 4.26 se 4.27 | 4.261, 4.262, ... | 4.266 aur 4.267 ke beech |
| 4 | 4.266 se 4.267 | 4.2661, 4.2662, ... | **4.2666** par (6th nishaan) |

```
4.266  4.2661 4.2662 4.2663 4.2664 4.2665 4.2666 4.2667 4.2668 4.2669 4.267
|------|------|------|------|------|------|------|------|------|------|
                                          ^
                                        4.2666
```

Dhyan do: zoom 2, 3, 4 mein har baar number **6th nishaan ke aas paas** hi milta hai, kyunki 6 repeat ho raha hai. Agar aur zoom karte jaate, to har baar wahi pattern milta. Recurring decimal ko number line par ek fixed jagah hai, bas usko poora "pakadne" ke liye anant zoom chahiye. Isiliye hum kuch decimal places tak hi dikhate hain.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Bar galat digits par lagana**
- 0.47777... = 0.47̄ (bar sirf 7 par)
- 0.474747... = 0.4̄7̄ (bar 4 aur 7 dono par)

Dono bilkul alag numbers hain: 43/90 aur 47/99.

**Galti 2: Lowest form banaye bina 2-5 wala test lagana**
9/15 ko dekh kar "15 mein 3 hai, to recurring" bolna galat hai. Pehle 9/15 = 3/5 karo. Ye terminating hai (0.6).

**Galti 3: Mixed recurring mein sirf ek baar multiply karna**
x = 0.47777... ke liye 10x = 4.7777... aur x = 0.47777... ghataoge to 9x = 4.3 aayega, jisme decimal bacha rehta hai. Do aise numbers chahiye jinke decimal ke baad ka hissa same ho: 100x aur 10x.

**Galti 4: Pure recurring mein galat number se multiply karna**
0.4̄7̄ mein 2 digits repeat ho rahe hain, to 100 se multiply karna hai, 10 se nahi. 10x = 4.747... aur x = 0.474... ka decimal hissa same nahi hai, to kuch nahi katega.

**Galti 5: 0.3 aur 0.3̄ ko ek samajhna**
0.3 = 3/10, par 0.3̄ = 1/3. Dono alag hain. Bar wala kabhi khatam nahi hota.

**Galti 6: Calculator ke rounded answer ko exact maan lena**
Calculator 2/3 ko 0.666666667 dikhata hai (aakhri digit round ho jata hai). Asli value 0.6̄ hai. Calculator ki screen chhoti hai, decimal nahi.

**Galti 7: 0.9̄ ko 1 se chhota samajhna**
0.9999... = 1, bilkul barabar. Part E ki trick se khud check karo.

---

## Quick Recap

- p/q ko decimal mein badalne ke liye **long division** karo.
- Remainder **0** aaye to **terminating** decimal (7/8 = 0.875).
- Remainder kabhi 0 na ho to koi remainder **repeat** hoga, aur decimal **non-terminating recurring** banega (1/7 = 0.1̄4̄2̄8̄5̄7̄).
- Remainders sirf **1 se (q − 1)** tak ho sakte hain, isliye repeat hona pakka hai, aur block zyada se zyada **(q − 1)** digits ka hoga.
- **Bar** sirf repeat hone wale digits par lagta hai.
- **Lowest form** mein denominator ke factors sirf **2 aur 5** hon to terminating, warna recurring.
- Terminating → p/q: **10, 100, 1000** wala denominator, phir simplify.
- Recurring → p/q: **x maano, multiply karo, ghatao**. Pure recurring mein block / 9, 99, 999.
- Mixed recurring mein do baar multiply karo, taaki **decimal ke baad ka hissa same** ho.
- **0.9̄ = 1.**
- **Har rational ka decimal terminating ya recurring hota hai, aur har terminating ya recurring decimal rational hota hai.**
- Decimal ko number line par dikhane ke liye **successive magnification**: har zoom mein ek aur decimal digit.

---

## Practice Questions

1. Convert into decimal form using long division:
   (a) 5/16
   (b) 2/9
   (c) 4/11
   (d) 1/12

2. Without doing long division, state whether each will have a terminating or a non-terminating recurring decimal. Give a reason.
   (a) 17/8
   (b) 13/30
   (c) 21/35
   (d) 7/80
   (e) 11/24

3. Express in the form p/q:
   (a) 0.65
   (b) 0.6̄
   (c) 0.1̄8̄
   (d) 0.36̄ (only the 6 repeats)
   (e) 2.3̄

4. Using the fact that 1/9 = 0.1̄ and 8/9 = 0.8̄, show that 0.9̄ = 1.

5. What is the largest possible number of digits in the repeating block of the decimal of 1/13? Then find the actual decimal of 1/13 and its repeating block.

6. Describe, step by step, how you would show 2.665 on the number line using successive magnification.

7. State whether each statement is true or false. Give a reason.
   (a) The decimal of 1/7 has a repeating block of 6 digits.
   (b) Every non-terminating recurring decimal is a rational number.
   (c) 9/15 has a non-terminating recurring decimal.
   (d) Every fraction with denominator 12 has a non-terminating decimal.

### Answers

1. (a) 5/16: 16 = 2⁴, to terminating. 50 ÷ 16 = 3 r 2, 20 ÷ 16 = 1 r 4, 40 ÷ 16 = 2 r 8, 80 ÷ 16 = 5 r 0. **0.3125**
   Jaanch: 0.3125 × 16 = 5 ✅
   (b) 2/9: 20 ÷ 9 = 2 r 2, phir wahi remainder 2. **0.2̄**
   (c) 4/11: 40 ÷ 11 = 3 r 7, 70 ÷ 11 = 6 r 4, phir remainder 4 repeat. **0.3̄6̄**
   (d) 1/12: 10 ÷ 12 = 0 r 10, 100 ÷ 12 = 8 r 4, 40 ÷ 12 = 3 r 4, phir remainder 4 repeat. **0.083̄** (bar sirf 3 par)
   Jaanch: 0.08333... × 12 = 0.99999... = 1 ✅

2. (a) 17/8: 8 = 2³. **Terminating** (2.125).
   (b) 13/30: 30 = 2 × 3 × 5, aur 13/30 lowest form mein hai. Isme 3 hai, to **recurring** (0.43̄).
   (c) 21/35 = 3/5 (lowest form). Denominator sirf 5. **Terminating** (0.6).
   (d) 7/80: 80 = 2⁴ × 5. **Terminating** (0.0875).
   (e) 11/24: 24 = 2³ × 3, aur 11/24 lowest form mein hai. Isme 3 hai, to **recurring** (0.4583̄).

3. (a) 0.65 = 65/100 = **13/20**
   (b) x = 0.666..., 10x = 6.666..., 9x = 6, x = 6/9 = **2/3**
   (c) x = 0.1818..., 100x = 18.1818..., 99x = 18, x = 18/99 = **2/11**
   (d) x = 0.3666..., 10x = 3.666..., 100x = 36.666..., 90x = 33, x = 33/90 = **11/30**
   Jaanch: 11 ÷ 30 = 0.3666... ✅
   (e) 2.3̄ = 2 + 0.3̄ = 2 + 1/3 = **7/3**
   Jaanch: 7 ÷ 3 = 2.333... ✅

4. 1/9 + 8/9 = 9/9 = 1.
   Decimal mein: 0.1111... + 0.8888... = 0.9999...
   Dono ek hi cheez ka jod hain, to **0.9̄ = 1** ✅

5. 1/13 mein non-zero remainders sirf 1 se 12 tak ho sakte hain, to block **zyada se zyada 12 digits** ka ho sakta hai.
   Asli division: 10 ÷ 13 = 0 r 10, 100 ÷ 13 = 7 r 9, 90 ÷ 13 = 6 r 12, 120 ÷ 13 = 9 r 3, 30 ÷ 13 = 2 r 4, 40 ÷ 13 = 3 r 1, phir 10 (wahi shuruaat).
   **1/13 = 0.0̄7̄6̄9̄2̄3̄**, block **076923** (6 digits). Ye 12 se chhota hai, jo bilkul theek hai.

6. - **Zoom 1:** 2 aur 3 ke beech ko 10 bhaagon mein baanto. 2.665, 2.6 aur 2.7 ke beech hai.
   - **Zoom 2:** 2.6 aur 2.7 ke beech ko 10 bhaagon mein baanto. 2.665, 2.66 aur 2.67 ke beech hai.
   - **Zoom 3:** 2.66 aur 2.67 ke beech ko 10 bhaagon mein baanto. 2.665, 2.66 se aage **5th nishaan** par hai.

7. (a) **True** ✅. 1/7 = 0.1̄4̄2̄8̄5̄7̄, block 142857 (6 digits).
   (b) **True** ✅. Multiply-aur-ghatao trick se har recurring decimal p/q ban jata hai.
   (c) **False** ❌. 9/15 = 3/5 = 0.6, terminating hai.
   (d) **False** ❌. 3/12 = 1/4 = 0.25 terminating hai. Pehle lowest form banana zaroori hai.

---

Shabaash! Ab tum kisi bhi fraction ko decimal mein aur kisi bhi terminating ya recurring decimal ko fraction mein badal sakte ho, aur ye bhi samajh gaye ho ki aisa hota kyun hai.

Agle topic mein us sawaal ka jawab milega jo humne Part G mein chhoda tha: **aise decimals bhi hote hain jo na kabhi khatam hote, na kabhi repeat**. Ye numbers p/q mein likhe hi nahi ja sakte. Inse milte hain **irrational numbers**, aur phir poora **real numbers** ka parivaar.
