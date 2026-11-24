# Chapter: Quadratic Equations (Part 5)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [quadratic-equations-part4.md](quadratic-equations-part4.md) se aage chalti hai** (wahan Topic 4 mein quadratic formula banaya aur √ ke neeche wale b² − 4ac ko "root ke andar ka hissa" kaha). Chapter ki shuruaat: [quadratic-equations.md](quadratic-equations.md). Chapter 2 ki parabola: [polynomials.md](../polynomials/polynomials.md).
> **Topics covered in this file:**
> 5. Discriminant: Roots Ka Swabhav Pehle Se Pata

---

# Topic 5: Discriminant: Roots Ka Swabhav Pehle Se Pata

Topic 4 ke end mein ek sawal chhoda tha: formula mein √ ke neeche ka b² − 4ac agar negative nikle to? Wahan hum us hisse ko bas "root ke andar ka hissa" kehte rahe. Is topic mein use **apna naam** milega, aur usse ek bada kaam hoga: equation **hal kiye bina** bata dena ki roots kitne hain, kaise hain, aur parabola x-axis ko kaatega, chhuega ya chhodega. Chapter 2 ne ye teen tasveeren dikhayi thi; ab hum unka algebra samjhenge.

---

## Sunayna aur fountain ki ribbon

Sunayna apne Papa ke saath shehar ke bade park mein ek fountain dekh rahi hai. Fountain ki dhaar ek jhuki hui curve banati hai: nozzle se x m door, dhaar ki unchai h = 8x − x² m hai (ye formula seedha maan lo; naap sirf hisaab ke liye hain, asli fountain jaisa nahi).

Papa ne ek khel shuru kiya: "Maan lo main fountain ke saamne, zameen ke samaantar, ek lambi ribbon tanta hoon. Dhaar ribbon ko kitni jagah chhuegi?"

Pehle din ribbon 12 m ooncha. Sunayna ne 8x − x² = 12 likha. Doosre din ribbon 16 m par, teesre din 20 m par. Teeno equations alag-alag hal karte-karte usne dekha ki kabhi dhaar ribbon ko **do jagah** chhoti hai, kabhi **sirf ek jagah**, aur kabhi **kahin nahi**. "Papa, kya bina hal kiye pata chal sakta hai ki kitni jagah?" Papa muskuraye: "Ek chhota sa number dekho: **b² − 4ac**. Uska sign sab bata deta hai."

```
20   ---------------------------------------------------   ribbon 3 (20 m)
18
16   -------------------------O-------------------------   ribbon 2 (16 m)
14
12   -------------O-----------------------O-------------   ribbon 1 (12 m)
10
 8
 6
 4
 2
 0   -*-----------------------------------------------*-
      0           2           4           6           8
```

> **Figure 5.1** – Fountain ki dhaar h = 8x − x² ke paanch point (x = 0, 2, 4, 6, 8 m par unchai 0, 12, 16, 12, 0 m; x neeche likha hai, unchai baayein) aur teen ribbon (lambi dashed lines). Ribbon 1 (12 m) dhaar ko x = 2 aur x = 6 par katti hai (O), ribbon 2 (16 m) sirf sabse ooncha point x = 4 chhoti hai (O), aur ribbon 3 (20 m) dhaar ke sabse ooncha point (16 m) se bhi upar hai. Beech ke point jodne se curve banti hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Discriminant (D)** | ax² + bx + c = 0 ka number D = b² − 4ac. Ye roots ko "alag-alag pehchaan" deta hai: iske sign se pata chalta hai ki roots kaise hain | x² − 8x + 12 = 0 mein D = 64 − 48 = 16 |
| **Roots ka swabhav (nature of roots)** | Roots ki kism: kitne hain, real hain ya nahi, rational hain ya irrational | D = 16 ho to do alag rational roots |
| **Do alag real roots** | Do alag-alag real numbers jo equation ko sahi karein | x = 2 aur x = 6 |
| **Real roots nahi** | Koi bhi real number equation ko sahi nahi karta. (Aage ki class mein complex numbers aayenge, jinse aise equations ke bhi roots milte hain) | x² − 8x + 20 = 0 |

---

## Class 9 aur Chapter 2 se yaad

- **Topic 4:** x = (−b ± √(b² − 4ac)) / (2a). Wahan kaha tha ki real roots tabhi, jab √ ke neeche ka hissa 0 ya positive ho. Aaj usi hisse ko D naam denge.
- **Topic 3:** (x + h)² = k mein k positive ho to do roots, k = 0 ho to ek root (do baar), k negative ho to real roots nahi. Wahi teen haalat ab D par tiki dikhengi.
- **Chapter 2** ([polynomials.md](../polynomials/polynomials.md), Part B aur Part C): parabola x-axis ko do jagah **kaat** sakti hai, ek jagah **chhoo** sakti hai, ya **miss** kar sakti hai.
- **Chapter 2 ka rishta:** roots ka jod −b/a aur guna c/a ([polynomials-part2.md](../polynomials/polynomials-part2.md)). Ise hum Jaanch mein use karte rahenge.
- **Chapter 1** ([real-numbers-part4.md](../real-numbers/real-numbers-part4.md)): jis positive integer ka square nahi hota, uska square root irrational hota hai.

---

## Part A: D ka naam, aur teen haalat

ax² + bx + c = 0 (a ≠ 0) ke liye **D = b² − 4ac** likhte hain. Naam: **discriminant**, kyunki ye roots ke prakaar ko alag-alag pehchan deta hai. Topic 4 ka formula ab chhota likha jaata hai:

**x = (−b ± √D) / (2a)**

Sab kuch √D par tika hai. Teen haalat:

| D kaisa hai | √D | Roots | Parabola |
|---|---|---|---|
| D > 0 | ek positive real number | (−b + √D)/(2a) aur (−b − √D)/(2a), ye **do alag** hain | x-axis ko do jagah kaatti hai |
| D = 0 | 0 | dono ek hi: x = −b/(2a), yaani **ek hi root, do baar** | x-axis ko ek jagah chhoti hai |
| D < 0 | koi real number nahi | real roots nahi | x-axis ko miss karti hai |

**Kyun?** Topic 4 ke kadam 4 aur 5 se (completing the square):

(x + b/(2a))² = D / (4a²)

Baayen taraf ek real number ka square hai, jo kabhi negative nahi hota. Daayen taraf ka denominator 4a² hamesha positive hai (a ≠ 0), to daayen taraf ka sign wahi hai jo D ka sign hai.

- D > 0 ho to daayen taraf positive number; uske do square roots hain (+ aur −), to x + b/(2a) = ±√D/(2a): do alag roots.
- D = 0 ho to daayen taraf 0; x + b/(2a) = 0 ke alawa kuch nahi: ek hi root x = −b/(2a).
- D < 0 ho to daayen taraf negative; kisi real number ka square negative nahi ho sakta, to real x hai hi nahi.

Ek aur cheez: x = −b/(2a) parabola ke vertex ka x-coordinate hai. Chapter 2 mein x² − x − 2 ka vertex x = 1/2 tha, aur −(−1)/(2 × 1) = 1/2 hi hai. (Kyun: completing the square se ax² + bx + c = a(x + b/(2a))² − D/(4a). Pehla hissa x = −b/(2a) par 0 hota hai, aur a > 0 ho to kahin negative nahi, isliye parabola wahin sabse neeche hota hai.) D = 0 ka matlab hai ki vertex ka point x-axis par baitha hai, isliye parabola wahan sirf chhoo kar lautti hai.

```
              ax² + bx + c = 0   (a ≠ 0)
                         :
                         v
            D = b² − 4ac nikalo (sign sambhal ke)
                         :
         +---------------+---------------+
         :               :               :
         v               v               v
      D > 0            D = 0           D < 0
   do alag real      ek hi root       real roots
      roots          (do baar)          nahi
         :               :               :
         v               v               v
  x = (−b ± √D)/2a   x = −b/(2a)    parabola x-axis
  parabola: kaatti   parabola: chhoti  ko miss karti
```

> **Figure 5.2** – Decision chart. Pehle D nikalo, phir uska sign dekho: D positive to do alag real roots, D zero to ek root do baar, D negative to real roots nahi. Roots nikalne ka formula tabhi chalta hai jab D 0 ya positive ho.

### Example 1: Sunayna ki teen ribbon (pehle D se anumaan, phir hal)

Dhaar ki unchai ribbon ki unchai H ke barabar ho: 8x − x² = H, yaani standard form **x² − 8x + H = 0**. Yahan a = 1, b = −8, c = H, aur D = 64 − 4H.

| Ribbon H (m) | Equation | D = 64 − 4H | D se anumaan |
|---|---|---|---|
| 12 | x² − 8x + 12 = 0 | 64 − 48 = 16 | D > 0: do jagah |
| 16 | x² − 8x + 16 = 0 | 64 − 64 = 0 | D = 0: ek jagah |
| 20 | x² − 8x + 20 = 0 | 64 − 80 = −16 | D < 0: kahin nahi |

Ab hal karke milate hain.

- **H = 12:** (x − 2)(x − 6) = 0, to **x = 2 ya x = 6**. Dhaar 2 m par upar jaate hue aur 6 m par neeche aate hue 12 m ki unchai se guzarti hai.
- **H = 16:** (x − 4)² = 0, to **x = 4**, ek hi root. Ye wahi point hai jahan dhaar sabse ooncha (16 m) hai: x = −b/(2a) = 8/2 = 4.
- **H = 20:** x² − 8x + 20 = (x − 4)² + 4. Ye kam se kam 4 hai, kabhi 0 nahi. **Real roots nahi.** Kahani mein: dhaar 16 m se upar ja hi nahi sakti, to 20 m ki ribbon tak nahi pahunchti.

**Jaanch:** H = 12: 8(2) − 4 = 12 ✅ aur 8(6) − 36 = 12 ✅; jod 2 + 6 = 8 = −b/a ✅, guna 12 = c/a ✅. H = 16: 8(4) − 16 = 16 ✅. H = 20: dhaar ki sabse badi unchai 16 m hai, jo 20 se kam hai ✅.

Dhyan do: H ke saath D ka sign badla, aur **jahan D = 0 aaya, wahi H dhaar ki sabse badi unchai (16 m) thi**. Isliye D = 0 "bas chhoone wali" haalat hai.

---

## Part B: Parabola ki tasveer: kaatna, chhoona, chhodna

Chapter 2 mein parabola ka graph x-axis se kaise milta hai, wo hamne dekha tha. Ab wahi tasveer D se jodte hain. Teeno graph p(x) = x² − 8x + H ke hain (ye "ribbon ki unchai − dhaar ki unchai" hai: jahan p(x) = 0, wahan dhaar ribbon par hai). Har * ek integer x par ek point hai (x = 1 se 7 tak), aur O wo point hai jahan graph x-axis par hai.

**D > 0 (H = 12, D = 16)**

```
  6
  5  *                                   *
  4
  3
  2
  1
  0 -------O-----------------------O-------------
 -1
 -2
 -3              *           *
 -4                    *
     1     2     3     4     5     6     7
```

> **Figure 5.3** – p(x) = x² − 8x + 12. Graph x = 2 aur x = 6 par x-axis ko **kaatta** hai (dono O). Sabse neeche ka point x = 4 par −4 hai. Do alag roots, D = 16 > 0.

**D = 0 (H = 16, D = 0)**

```
  9  *                                   *
  8
  7
  6
  5
  4        *                       *
  3
  2
  1              *           *
  0 -------------------O-------------------------
     1     2     3     4     5     6     7
```

> **Figure 5.4** – p(x) = x² − 8x + 16 = (x − 4)². Graph sirf x = 4 par x-axis ko **chhoota** hai (O) aur wapas upar mud jaata hai. Ek hi root, D = 0.

**D < 0 (H = 20, D = −16)**

```
 13  *                                   *
 12
 11
 10
  9
  8        *                       *
  7
  6
  5              *           *
  4                    *
  3
  2
  1
  0 ---------------------------------------------
     1     2     3     4     5     6     7
```

> **Figure 5.5** – p(x) = x² − 8x + 20 = (x − 4)² + 4. Graph x-axis se hamesha upar rehta hai: sabse neeche ka point x = 4 par 4 hai. x-axis ko **miss** karta hai, to real roots nahi, D = −16 < 0.

**Teen figures mein ek hi khel:** parabola ko upar-neeche khiskao (H badalte jao). Jab tak vertex x-axis ke neeche hai, do jagah kaatega. Jab vertex x-axis par aa jaye, chhoega (D = 0). Jab vertex x-axis ke upar nikal jaye, miss karega.

**a negative ho to?** Parabola ulta U hoti hai, par D ka matlab wahi rehta hai. Maan lo −2x² + 8x − 9 = 0: a = −2, b = 8, c = −9, D = 64 − 72 = −8 < 0. Graph x-axis ko miss karta hai, par is baar **neeche** ki taraf: x = 2 par sabse badi value −8 + 16 − 9 = −1 hai, aur baaki sab values usse bhi chhoti hain. **Roots ki ginti a ke sign se nahi, sirf D ke sign se tay hoti hai.**

**Jaanch:** −2x² + 8x − 9 = −2(x − 2)² − 1, jo hamesha −1 se chhota hai, kabhi 0 nahi ✅.

---

## Part C: Bina hal kiye roots ka swabhav

**Teen kadam:** (1) standard form mein likho. (2) a, b, c apne sign ke saath. (3) D = b² − 4ac nikalo aur uska sign dekho.

### Example 2: teen equations, teen swabhav

**(a) 5x² − 4x + 1 = 0.** a = 5, b = −4, c = 1. D = 16 − 20 = **−4 < 0**: real roots nahi.

**(b) 9x² + 30x + 25 = 0.** a = 9, b = 30, c = 25. D = 900 − 900 = **0**: ek hi root, x = −b/(2a) = −30/18 = **−5/3**.

**(c) 3x² − 4x − 2 = 0.** a = 3, b = −4, c = −2. D = 16 + 24 = **40 > 0**: do alag real roots. Roots: x = (4 ± √40)/6 = (2 ± √10)/3. Calculator se √10 ≈ 3.162: x ≈ 1.72 ya x ≈ −0.39.

**Jaanch:** (a) 5x² − 4x + 1 = 5(x − 2/5)² + 1/5, jo hamesha 1/5 se bada hai ✅. (b) (3x + 5)² = 9x² + 30x + 25, to x = −5/3 ✅. (c) jod = 4/3 = −b/a ✅, guna = (4 − 10)/9 = −2/3 = c/a ✅.

### Example 3: pehle standard form, phir D

**(a) 2x(x − 3) = −5.** Bracket kholo: 2x² − 6x = −5. −5 ko left laane par +5 ho jaata hai: **2x² − 6x + 5 = 0**. a = 2, b = −6, c = 5. D = 36 − 40 = **−4 < 0**: real roots nahi.

**(b) (x − 6)(x + 9) = 10.** Bracket kholo: x² + 3x − 54 = 10, to **x² + 3x − 64 = 0**. D = 9 + 256 = **265 > 0**. 265 perfect square nahi hai (16² = 256, 17² = 289), to roots do alag real, aur irrational: x = (−3 ± √265)/2.

**Jaanch:** (a) 2x² − 6x + 5 = 2(x − 3/2)² + 1/2, hamesha 1/2 se bada ✅. (b) (x − 6)(x + 9) = x² + 3x − 54, aur 10 ko left laane par −64 ✅. Jod = −3 = −b/a ✅, guna = (9 − 265)/4 = −64 = c/a ✅.

---

## Part D: Roots rational hain ya irrational?

Roots x = (−b ± √D)/(2a) mein √D ke alawa sab kuch rational hai (jab a, b, c integers ho). To roots rational tabhi, jab **√D rational ho**. Aur integer D ka √D rational tabhi hota hai jab D **perfect square** ho (Chapter 1: jis positive integer ka square nahi, uska root irrational).

**Niyam (a, b, c rational numbers hon to):** D perfect square ⇔ roots rational. D positive par perfect square nahi ⇔ roots irrational. (Agar a, b, c fractions hon, to pehle poori equation ko common denominator se guna karke integers bana lo.)

### Example 4: ek hi chhote farak par do swabhav

**(a) 6x² + 7x − 5 = 0.** D = 49 + 120 = 169 = 13². Perfect square, to roots rational: x = (−7 ± 13)/12 = 6/12 = **1/2** ya −20/12 = **−5/3**. Factorise bhi hota hai: (2x − 1)(3x + 5).

**(b) 6x² + 7x − 4 = 0.** D = 49 + 96 = 145. 12² = 144 aur 13² = 169, to 145 perfect square nahi. Roots irrational: x = (−7 ± √145)/12. Isse pehle hi pata chal gaya ki integer factors nahi milenge: ac = −24 ko aise do integers mein todna hai jinka jod 7 ho, aur aisi koi jodi hai hi nahi.

**Jaanch:** (a) (2x − 1)(3x + 5) = 6x² + 10x − 3x − 5 = 6x² + 7x − 5 ✅. Jod 1/2 − 5/3 = −7/6 = −b/a ✅, guna −5/6 = c/a ✅. (b) jod = −7/6 = −b/a ✅, guna = (49 − 145)/144 = −96/144 = −2/3 = c/a ✅.

**Faayda:** factorisation (Topic 1) se pehle D dekh lo. Perfect square ho to factorisation ka rasta khula hai. Nahi ho to waqt mat gawao, seedha formula (Topic 4).

**Ek imaandari ki shart.** Ye niyam tabhi chalta hai jab **a, b, c khud rational** ho. Agar a, b, c irrational hon, to D = 0 jaisa "saaf" D bhi irrational root de sakta hai. Jaise x² − 2√2 x + 2 = 0 mein D = 8 − 8 = 0, par root x = 2√2/2 = √2 irrational hai (x² − 2√2 x + 2 = (x − √2)²). Isliye is topic mein hum hamesha integer ya fraction wali equations lete hain.

---

## Part E: Unknown k dhundhna

Sawal aise aate hain: "k ki kaun si value par equation ke equal roots hain?" Tareeka ek hi: **D likho, k ka relation banao.**

- equal roots: D = 0
- real roots (ek ya do): D ≥ 0
- do alag real roots: D > 0
- real roots nahi: D < 0

Aur har baar yaad rakho: a ≠ 0 hona chahiye.

### Example 5: 2x² − 10x + k = 0 (k ki poori range)

a = 2, b = −10, c = k. **D = 100 − 8k.**

- **Equal roots:** 100 − 8k = 0, to **k = 25/2**. Tab root x = −b/(2a) = 10/4 = **5/2**.
- **Real roots:** 100 − 8k ≥ 0, to 100 ≥ 8k, **k ≤ 25/2**.
- **Do alag real roots:** k < 25/2.
- **Real roots nahi:** **k > 25/2**.

```
  D > 0: do alag real roots        D < 0: real roots nahi
<---+---------+---------+----O----+---------+------------>
    10        11        12        13        14
                            12.5
                    D = 0: ek hi root
```

> **Figure 5.6** – 2x² − 10x + k = 0 mein k badalne par roots ka swabhav. k = 12.5 (yaani 25/2) par ek hi root; usse chhote k par do alag real roots; usse bade k par real roots nahi.

**Jaanch:** k = 25/2 par 2(25/4) − 10(5/2) + 25/2 = 12.5 − 25 + 12.5 = 0 ✅. Range ki jaanch: k = 12 lo, to D = 100 − 96 = 4 > 0 aur 2x² − 10x + 12 = 2(x − 2)(x − 3), roots 2 aur 3 ✅. k = 13 lo, to D = 100 − 104 = −4 < 0, real roots nahi ✅.

### Example 6: (k + 4)x² + (k + 1)x + 1 = 0 (k ki do values)

a = k + 4, b = k + 1, c = 1. D = (k + 1)² − 4(k + 4)(1) = k² + 2k + 1 − 4k − 16 = **k² − 2k − 15**.

Equal roots: k² − 2k − 15 = 0. Factorise: (k − 5)(k + 3) = 0, to **k = 5 ya k = −3**. Dono mein a = k + 4 ≠ 0 (9 aur 1), to dono chalenge.

- k = 5: 9x² + 6x + 1 = (3x + 1)², root **−1/3**.
- k = −3: x² − 2x + 1 = (x − 1)², root **1**.

**Jaanch:** k = 5: D = 6² − 4(9)(1) = 36 − 36 = 0 ✅. k = −3: D = (−2)² − 4(1)(1) = 0 ✅. Roots −b/(2a) se bhi: k = 5 par −6/18 = −1/3 ✅, k = −3 par 2/2 = 1 ✅.

### Example 7: kx(x − 2) + 6 = 0 (ek value reject)

Bracket kholo: kx² − 2kx + 6 = 0. a = k, b = −2k, c = 6. D = 4k² − 24k = 4k(k − 6).

Equal roots: 4k(k − 6) = 0, to k = 0 ya k = 6. **k = 0 reject:** tab equation 0 + 6 = 0 ban jaati hai, jisme x hai hi nahi, aur a = 0 hone se wo quadratic bhi nahi rahi. Bachi **k = 6**: 6x² − 12x + 6 = 6(x − 1)², to ek root **x = 1**.

**Jaanch:** k = 6 par D = (−12)² − 4(6)(6) = 144 − 144 = 0 ✅. x = 1 rakho: 6(1)(1 − 2) + 6 = −6 + 6 = 0 ✅.

---

## Part F: Saabit karo ki roots real hain

D se "kisi bhi values ke liye roots real hi hote hain" jaisa saabit karna aasaan hai: D ko aisa likho ki uska sign dikh jaaye.

### Example 8: a aur c ke sign ulte hon

**Dawa:** agar a aur c ke sign ulte hain (ac < 0), to ax² + bx + c = 0 ke **do alag real roots** hote hain.

**Saboot:** ac < 0 ⇒ −4ac > 0. To D = b² − 4ac = (b² jo 0 ya positive) + (positive) **> 0**. D positive hai, to do alag real roots. ∎

**Tasveer se:** a > 0 ho to parabola upar khulti hai, aur x = 0 par uski value c < 0, yaani y-axis par wo x-axis ke neeche hai. Upar ki taraf jaate dono hisse ko x-axis paar karna hi padega: do jagah.

**Ek example:** 7x² − 3x − 5 = 0: a = 7 aur c = −5 ke sign ulte, D = 9 + 140 = 149 > 0.

**Ulta nahi chalta.** a aur c ke sign **same** hon to roots real ho bhi sakte hain, nahi bhi: 2x² + 9x + 4 = 0 mein a aur c dono positive hain, phir bhi D = 81 − 32 = 49 > 0 (roots −1/2 aur −4). To "same sign" se kuch nahi kaha ja sakta; D hi dekho.

### Example 9: (x − p)(x − q) = r² hamesha real roots deta hai

Bracket kholo: x² − (p + q)x + pq − r² = 0. a = 1, b = −(p + q), c = pq − r².

D = (p + q)² − 4(pq − r²) = p² + 2pq + q² − 4pq + 4r² = **(p − q)² + 4r²**.

Square kabhi negative nahi hota, to D ≥ 0 **har real p, q, r ke liye**. Isliye roots hamesha real hain. D = 0 tabhi, jab p = q aur r = 0. ∎

**Jaanch (numbers se):** p = 2, q = 7, r = 3 lo. Equation: x² − 9x + 14 − 9 = x² − 9x + 5 = 0, D = 81 − 20 = 61. Formula se (2 − 7)² + 4(9) = 25 + 36 = 61 ✅.

---

## Part G: Kya aisa park ban sakta hai?

Chapter 2 mein ek stage ka sawal aaya tha ([polynomials-part3.md](../polynomials/polynomials-part3.md), Example 15). Wahan kaha tha ki 20 m ki patti se jo bhi rectangle stage banega, uska area 25 m² se zyada nahi ho sakta, aur ye baat Chapter 3 mein pakki tarah dekhenge. Wo baat ab D se pakki hoti hai.

### Example 10: perimeter 46 m wala park

Sunayna ke school ke peeche ek rectangle park banana hai jiski kul fencing (perimeter) **46 m** hai. Length aur breadth ka jod 46 ÷ 2 = 23 m. Ek side x m lo, to doosri 23 − x m, aur area x(23 − x) = A. Isse **x² − 23x + A = 0**, jahan a = 1, b = −23, c = A, aur **D = 529 − 4A**.

| Area A (m²) | D = 529 − 4A | Kya park ban sakta hai? |
|---|---|---|
| 130 | 529 − 520 = 9 > 0 | Haan, do alag sides |
| 132.25 | 529 − 529 = 0 | Haan, sirf ek hi tareeke se: square |
| 150 | 529 − 600 = −71 < 0 | Nahi |

- **A = 130:** x² − 23x + 130 = 0, D = 9, x = (23 ± 3)/2 = 13 ya 10. Park **13 m × 10 m** ka.
- **A = 132.25:** D = 0, x = 23/2 = 11.5. Park **11.5 m × 11.5 m**, yaani square.
- **A = 150:** D < 0, koi real x nahi. Is perimeter par 150 m² area ka park **ban hi nahi sakta**.

**Aam baat:** perimeter 2s ho to x² − sx + A = 0, D = s² − 4A. D ≥ 0 ho tabhi park ban sakta hai, yaani **A ≤ s²/4**. Sabse bada area s²/4 hai, jab D = 0 yaani park **square** ho. Chapter 2 ke 20 m wale stage mein s = 10, to sabse bada area 100/4 = 25 m², wahi jo wahan kaha tha.

**Jaanch:** A = 130: 13 + 10 = 23 ✅, perimeter 2(13 + 10) = 46 ✅, area 13 × 10 = 130 ✅. A = 132.25: 11.5 × 11.5 = 132.25 ✅, perimeter 4 × 11.5 = 46 ✅. **Story check:** dono sides positive hain (13, 10 aur 11.5) ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "D < 0 matlab equation ka koi hal hi nahi"**

Sawal x² + 4x + 11 = 0. D = 16 − 44 = −28 < 0. Ek bachche ne likha: "D negative hai, to is equation ka **koi solution nahi hai**, equation hi galat hai."

Dekho, equation galat nahi hai. Kya hua, wo table se dekho:

| x | −4 | −3 | −2 | −1 | 0 |
|---|---|---|---|---|---|
| x² + 4x + 11 | 11 | 8 | 7 | 8 | 11 |

Value kabhi 0 nahi hoti (x² + 4x + 11 = (x + 2)² + 7 ≥ 7). To **koi real number** equation ko sahi nahi karta. Sahi baat: "**real roots nahi hain**." Aage ki class mein complex numbers naye numbers hain jinme isi equation ke bhi roots milte hain. Isliye "koi solution nahi" ki jagah hamesha "real roots nahi" likho. Fountain mein bhi yahi: 20 m ki ribbon ke liye x nahi mila, kyunki dhaar wahan tak pahunchti hi nahi, kahani mein ye bilkul theek jawab hai.

**Galti 2: "Equal roots ka matlab D = 1 ya root 1"**

Sawal: x² + kx + 16 = 0 ke equal roots ho. Ek bachche ne socha "equal roots yaani ek hi, to 1 hoga": D = 1 likha. k² − 64 = 1, k² = 65, k = √65. Ab k = √65 par D = 65 − 64 = 1 > 0, to is equation ke roots **alag-alag** hain, equal nahi.

Sahi: roots ka farak √D/a hota hai (Topic 4 ke Practice Question 14 mein dekha: a > 0 ho to bada root − chhota root = √D/a). Do roots equal hon, to farak 0, to √D = 0, **D = 0**. Isse k² − 64 = 0, **k = 8 ya k = −8**.

- k = 8: x² + 8x + 16 = (x + 4)², ek root **−4**.
- k = −8: x² − 8x + 16 = (x − 4)², ek root **4**.

Root "1" kabhi zaroori nahi: root x = −b/(2a) hai, wo kuch bhi ho sakta hai. Ek aur dekho: 9x² − 24x + 16 = 0 mein D = 576 − 576 = 0, equal roots hain, aur root 4/3 hai, 1 nahi.

**Jaanch:** k = 8 par D = 64 − 64 = 0 ✅ aur k = −8 par D = 64 − 64 = 0 ✅. 9x² − 24x + 16 = (3x − 4)², root 4/3 ✅.

---

## Quick Recap

- **D = b² − 4ac** ka naam discriminant hai. Formula: x = (−b ± √D) / (2a).
- **D > 0:** do alag real roots, parabola x-axis ko **kaatti** hai. **D = 0:** ek root do baar, x = −b/(2a), parabola **chhoti** hai. **D < 0:** real roots nahi, parabola **miss** karti hai.
- Kyun: (x + b/(2a))² = D/(4a²). Daayen taraf ka sign D ka sign hai, aur baayen taraf kabhi negative nahi.
- Roots ki ginti a ke sign par nahi, sirf D ke sign par tiki hai.
- Integer a, b, c ke liye: D perfect square hai to roots rational (aur factorisation chalegi), perfect square nahi hai (aur D > 0) to roots irrational.
- k ke sawal: D likho. Equal roots D = 0, real roots D ≥ 0, real roots nahi D < 0. Aur check karo a ≠ 0 (k = 0 jaisi value reject).
- Saabit karne ke liye D ko aisa likho ki sign dikh jaaye: ac < 0 hone par D > 0; ya D = (kuch)² + (kuch)² jaisa roop.
- Feasibility: sum ya perimeter diya ho aur product (ya area) maanga ho, to D ≥ 0 ki shart se pata chalta hai ki aisa rectangle ya aise numbers hain ya nahi. Perimeter 2s par sabse bada area s²/4 (square).
- "D < 0" ka matlab "real roots nahi" hai, "koi solution nahi" nahi. Aur "equal roots" ka matlab D = 0, D = 1 nahi.

---

## Practice Questions

1. Without solving, decide the nature of the roots of each equation using D: (a) 3x² − 5x + 4 = 0 (b) 4x² + 4x − 15 = 0 (c) 25x² − 20x + 4 = 0 (d) 2x² + 5x − 1 = 0. For (b) and (c), find the roots as well.

2. First write in standard form, then find D and the nature of the roots: (a) 5x² = 6x + 8 (b) (x + 3)² = 5x − 1. Solve (a) and verify with the sum and product of roots.

3. Without solving, say whether the roots are rational or irrational: (a) 12x² − 11x − 15 = 0 (b) 8x² − 3x − 7 = 0 (c) 15x² + 11x + 2 = 0. Find the roots wherever they are rational.

4. Find k for which the equation has equal roots, and write the roots: (a) kx² + 12x + 4 = 0 (b) (k + 1)x² − 2(k − 1)x + 1 = 0.

5. For the equation 5x² + 9x + k = 0, find (a) the values of k for which the roots are real, (b) the values of k for which there are no real roots, (c) the largest whole number k for which it has two distinct real roots. Verify (c) by solving.

6. Prove that x² + px − q² = 0 has real roots for every real p and q. When are the two roots equal? Check with p = 6 and q = 4.

7. Prove that (x − a)(x − b) + (x − b)(x − c) + (x − c)(x − a) = 0 has real roots for all real a, b, c. Check the statement for a = 1, b = 2, c = 4, and say when the roots are equal.

8. A rectangular park has perimeter 30 m. (a) Is area 54 m² possible? If so, find the sides. (b) Is area 60 m² possible? (c) What is the largest possible area for this perimeter, and what shape is the park then?

9. (a) Is it possible to find two real numbers with sum 22 and product 130? (b) Find the numbers with sum 22 and product 117. (c) What is the largest possible product of two real numbers whose sum is 22?

10. A ball thrown upward has height h = 7t − 2t² metres after t seconds. Using D, say whether the ball reaches the heights (a) 5 m (b) 49/8 m (c) 7 m, and find the times when it does. What is the largest height the ball reaches?

11. A quadratic x² + bx + c = 0 has two equal roots, each equal to 9. Find b and c, and check using D.

12. A student wrote for 3x² + 4x − 5 = 0: "D = 16 − 60 = −44 < 0, so no real roots." Find the mistake, find the correct D, and state the nature of the roots.

13. State True or False, with a reason:
    (a) If a and c have opposite signs, ax² + bx + c = 0 always has two distinct real roots.
    (b) A quadratic with integer coefficients and D = 50 has rational roots.
    (c) If a and c are both positive, ax² + bx + c = 0 has no real roots.
    (d) If D > 0, the roots are always irrational. (Test with 6x² + 5x − 4 = 0.)
    (e) If a > 0 and D < 0, the graph of ax² + bx + c lies entirely above the x-axis.
    (f) If D = 0, the equation has exactly one distinct root.

### Answers

1. (a) 3x² − 5x + 4 = 0: D = 25 − 48 = **−23 < 0**, to **real roots nahi**.
   (b) 4x² + 4x − 15 = 0: D = 16 + 240 = 256 = 16² > 0, do alag **rational** roots. x = (−4 ± 16)/8 = 12/8 = **3/2** ya −20/8 = **−5/2**.
   Jaanch: jod −1 = −b/a ✅, guna −15/4 = c/a ✅.
   (c) 25x² − 20x + 4 = 0: D = 400 − 400 = **0**, equal roots, x = 20/50 = **2/5** (dono baar). Jaanch: (5x − 2)² = 25x² − 20x + 4 ✅.
   (d) 2x² + 5x − 1 = 0: D = 25 + 8 = 33 > 0, do alag real roots (33 perfect square nahi, to irrational): (−5 ± √33)/4.

2. (a) 5x² = 6x + 8 ⇒ 5x² − 6x − 8 = 0. D = 36 + 160 = 196 = 14² > 0: do alag rational roots. x = (6 ± 14)/10 = 20/10 = **2** ya −8/10 = **−4/5**.
   Jaanch: jod 2 − 4/5 = 6/5 = −b/a ✅, guna −8/5 = c/a ✅.
   (b) (x + 3)² = 5x − 1 ⇒ x² + 6x + 9 − 5x + 1 = 0 ⇒ x² + x + 10 = 0. D = 1 − 40 = **−39 < 0**, real roots nahi.
   Jaanch: x² + x + 10 = (x + 1/2)² + 39/4, hamesha 39/4 se bada ✅.

3. (a) D = 121 + 720 = 841 = 29², perfect square, **rational**. x = (11 ± 29)/24 = 40/24 = **5/3** ya −18/24 = **−3/4**. Jaanch: jod 5/3 − 3/4 = 11/12 = −b/a ✅, guna −5/4 = −15/12 = c/a ✅.
   (b) D = 9 + 224 = 233. 15² = 225 aur 16² = 256, to 233 perfect square nahi: **irrational** roots, x = (3 ± √233)/16.
   (c) D = 121 − 120 = 1 = 1², **rational**. x = (−11 ± 1)/30 = −10/30 = **−1/3** ya −12/30 = **−2/5**. Jaanch: jod −11/15 = −b/a ✅, guna 2/15 = c/a ✅.

4. (a) a = k, b = 12, c = 4. D = 144 − 16k = 0, to **k = 9**. Equation 9x² + 12x + 4 = (3x + 2)², root **−2/3**. (a = 9 ≠ 0.) Jaanch: D = 144 − 4(9)(4) = 0 ✅.
   (b) a = k + 1, b = −2(k − 1), c = 1. D = 4(k − 1)² − 4(k + 1) = 4(k² − 2k + 1 − k − 1) = 4(k² − 3k) = 4k(k − 3). D = 0 ⇒ **k = 0 ya k = 3**. Dono mein a = k + 1 ≠ 0 (1 aur 4).
   k = 0: x² + 2x + 1 = (x + 1)², root **−1**. k = 3: 4x² − 4x + 1 = (2x − 1)², root **1/2**.
   Jaanch: k = 0: D = 4 − 4 = 0 ✅. k = 3: D = 16 − 16 = 0 ✅.

5. a = 5, b = 9, c = k. D = 81 − 20k.
   (a) Real roots: D ≥ 0, to 20k ≤ 81, **k ≤ 81/20** (yaani 4.05).
   (b) Real roots nahi: D < 0, **k > 81/20**.
   (c) Do alag real roots: D > 0, k < 81/20. Sabse bada whole number **k = 4**.
   Verify: 5x² + 9x + 4 = (5x + 4)(x + 1), roots **−4/5 aur −1**, alag-alag. k = 5 par D = 81 − 100 = −19 < 0.

6. a = 1, b = p, c = −q². D = p² + 4q². Dono square hain, to D ≥ 0: **roots hamesha real**. D = 0 tabhi jab p² = 0 aur q² = 0, yaani **p = q = 0** (tab equation x² = 0, root 0 do baar).
   Jaanch: p = 6, q = 4: x² + 6x − 16 = 0, D = 36 + 64 = 100 = 6² + 4(4²) ✅. Roots (−6 ± 10)/2 = **2 aur −8** ✅ (guna −16 = −q² ✅).

7. Bracket kholo: (x − a)(x − b) + (x − b)(x − c) + (x − c)(x − a) = 3x² − 2(a + b + c)x + (ab + bc + ca) = 0. D = 4(a + b + c)² − 12(ab + bc + ca) = 4(a² + b² + c² − ab − bc − ca) = **2[(a − b)² + (b − c)² + (c − a)²]**. Tino square ≥ 0, to D ≥ 0: **roots real**. D = 0 tabhi, jab a = b = c.
   Jaanch: a = 1, b = 2, c = 4: equation 3x² − 14x + 14 = 0, D = 196 − 168 = 28. Formula se 2(1 + 4 + 9) = 28 ✅.

8. Sabse pehle: perimeter 30, to length aur breadth ka jod 15. Ek side x, doosri 15 − x. x(15 − x) = A, yaani x² − 15x + A = 0, D = 225 − 4A.
   (a) A = 54: D = 225 − 216 = 9 > 0. Haan. x = (15 ± 3)/2 = 9 ya 6. Park **9 m × 6 m**. Jaanch: 9 + 6 = 15 ✅, 9 × 6 = 54 ✅.
   (b) A = 60: D = 225 − 240 = −15 < 0. **Nahi ban sakta.**
   (c) D ≥ 0 ke liye 4A ≤ 225, A ≤ 225/4 = **56.25 m²**. Tab D = 0, x = 15/2 = 7.5, to **square 7.5 m × 7.5 m**. Jaanch: 7.5 × 7.5 = 56.25 ✅, perimeter 4 × 7.5 = 30 ✅. Story check: sides positive ✅.

9. Do numbers x aur 22 − x: x(22 − x) = P, yaani x² − 22x + P = 0, D = 484 − 4P.
   (a) P = 130: D = 484 − 520 = **−36 < 0**, **aise real numbers nahi hain**.
   (b) P = 117: D = 484 − 468 = 16 > 0. x = (22 ± 4)/2 = 13 ya 9. **Numbers 13 aur 9.** Jaanch: 13 + 9 = 22 ✅, 13 × 9 = 117 ✅.
   (c) D ≥ 0 ke liye P ≤ 484/4 = **121**, jab D = 0 yaani dono numbers **11 aur 11**. Jaanch: 11 + 11 = 22 ✅, 11 × 11 = 121 ✅.

10. Height H par: 7t − 2t² = H ⇒ 2t² − 7t + H = 0, D = 49 − 8H.
   (a) H = 5: D = 49 − 40 = 9 > 0, do alag times. t = (7 ± 3)/4 = **1 s** (upar jaate hue) aur **2.5 s** (neeche aate hue). Jaanch: 7 − 2 = 5 ✅ aur 7(2.5) − 2(6.25) = 17.5 − 12.5 = 5 ✅.
   (b) H = 49/8: D = 49 − 8(49/8) = 49 − 49 = 0, ek hi time. t = −b/(2a) = 7/4 = **1.75 s**. Ye ball ki sabse badi unchai hai: 7(7/4) − 2(49/16) = 49/4 − 49/8 = 49/8.
   (c) H = 7: D = 49 − 56 = −7 < 0, **ball 7 m tak nahi pahunchti**.
   Sabse badi unchai **49/8 = 6.125 m** hai, wahi D = 0 wali haalat. (Story check: 5 m wale dono times 1.75 ke dono taraf 0.75 s door hain.)

11. Dono root 9 ke barabar hon, to x = −b/(2a) = −b/2 = 9, to **b = −18**. D = 0 se b² − 4c = 0, to c = b²/4 = 324/4 = **81**. Equation x² − 18x + 81 = (x − 9)².
   Jaanch: D = 324 − 324 = 0 ✅. Jod 9 + 9 = 18 = −b/a ✅, guna 81 = c/a ✅.

12. Galti: c = −5 hai, to 4ac = 4 × 3 × (−5) = **−60**, aur D = b² − 4ac = 16 − (−60) = 16 + 60 = **76**. Bachche ne 4ac = 4 × 3 × 5 = 60 le liya (c ka minus bhool gaya) aur 16 − 60 likh diya (sign slip). **D = 76 > 0**, 76 perfect square nahi (8² = 64, 9² = 81), to do alag real, **irrational** roots: x = (−4 ± √76)/6 = (−2 ± √19)/3.
    Jaanch: jod = −4/3 = −b/a ✅, guna = (4 − 19)/9 = −15/9 = −5/3 = c/a ✅. (Aur ye bhi: a = 3 aur c = −5 ke sign ulte, to Part F ke niyam se D > 0 pehle hi pakka tha ✅.)

13. (a) **True** ✅. ac < 0 se −4ac > 0, to D = b² − 4ac > 0 (Part F).
    (b) **False** ❌. 50 perfect square nahi (7² = 49), to √50 = 5√2 irrational, roots irrational.
    (c) **False** ❌. 3x² + 10x + 3 = 0 mein a aur c dono positive hain, par D = 100 − 36 = 64 > 0 aur roots −1/3 aur −3 real hain.
    (d) **False** ❌. 6x² + 5x − 4 = 0: D = 25 + 96 = 121 = 11² > 0, par roots (−5 ± 11)/12 = **1/2** aur **−4/3**, dono rational. Jaanch: 6/4 + 5/2 − 4 = 0 ✅.
    (e) **True** ✅. a > 0 ho to parabola upar khulti hai aur uski sabse chhoti value −D/(4a) hai, jo D < 0 par positive hai. Graph hamesha x-axis ke upar.
    (f) **True** ✅. D = 0 par x = −b/(2a) hi bachta hai (do baar ginna hai, par number ek hi hai).

---

Shabaash! Ab tum equation chhue bina bata sakte ho ki uske roots do hain, ek hain ya real hain hi nahi, aur ye bhi ki koi kahani (jaise park ya fountain ki dhaar) mumkin hai ya nahi. D ek chhota sa number hai, par aadha jawab wahin chhupa hota hai.

**Aage kya?** Ab tak hamare paas equation pehle se likhi hui thi. Topic 6 mein kahani pehle aayegi: numbers, umar, rectangle, triangle, bus aur boat, kaam aur samay. Tumhe kahani se equation khud banani hogi, hal karna hoga, aur ant mein **story check** (negative length ya aadha insaan to nahi aa gaya?) karna hoga. Wahan [Topic 6](quadratic-equations-part6.md) mein milte hain.
