# Chapter: Quadratic Equations (Part 4)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [quadratic-equations-part3.md](quadratic-equations-part3.md) se aage chalti hai** (wahan Topic 3 mein completing the square seekha: adhure square ko poora karke root lena). Chapter ki shuruaat: [quadratic-equations.md](quadratic-equations.md). Class 9 ka (a + b)² wala identity: [expansions.md](../../../class9/maths/expansions/expansions.md). Class 9 ki trinomial factorisation: [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md).
> **Topics covered in this file:**
> 4. Quadratic Formula: Ek Hi Formula, Har Equation

---

# Topic 4: Quadratic Formula: Ek Hi Formula, Har Equation

Topic 1 mein humne quadratic equations ko factorisation se tora, aur Topic 3 mein completing the square seekha, jo **kabhi fail nahi hota**, par har equation mein wahi lamba kaam dohrana padta hai: a se divide karo, aadha coefficient nikalo, uska square jodo, root lo. Is topic ka seedha sa vichaar hai: ye lamba kaam **ek hi baar**, ax² + bx + c = 0 par, **letters ke saath** kar liya jaaye. Jo nateeja niklega wo ek chhota sa formula hoga, aur uske baad har equation sirf a, b, c bharne ka khel ban jaayegi. Topic 2 ki fraction aur bracket wali equations bhi, jab wo quadratic ban jaayein, isi formula se hal hongi.

---

## Ayush ki seedhi aur society ki deewar

Ayush ke Papa ko society ki boundary wall par naya board lagwana hai. Unke paas 4 m lambi seedhi hai. Papa ne Ayush se ek paheli puchhi: "Seedhi ka foot deewar se x m door rakho, aur seedhi ka upar wala sira deewar par foot ki doori se 2 m zyada unchai par ho. To foot kitna door rakhna padega?"

(Dhyan rahe: asli seedhi hamesha kisi bade ki nigrani mein lagti hai. Ye sirf hisaab ki paheli hai.)

Ayush ne figure banayi.

```
deewar->    #\         ladder = 4 m
            # \
            #  \
x + 2 m     #   \
(unchai)    #    \
            #     \
            #      \
            #       \
            #        \
            #-----------
             <- x m ->
             (foot ki doori)
```

> **Figure 4.1** – Seedhi deewar se tikki hai. Foot deewar se x m door hai, seedhi ka upar wala sira zameen se x + 2 m ooncha hai, aur seedhi khud 4 m ki hai. Deewar, zameen aur seedhi milkar ek right triangle banate hain jiska hypotenuse seedhi hai (figure naap ke hisaab se nahi hai).

Class 9 ke [Pythagoras](../../../class9/maths/pythagoras-theorem/pythagoras-theorem.md) se: x² + (x + 2)² = 4².
x² + x² + 4x + 4 = 16, to 2x² + 4x − 12 = 0, aur 2 se divide karke **x² + 2x − 6 = 0**.

Ayush ne factorisation try ki: product −6 aur jod 2 wale do integers chahiye. Jode (1, −6), (−1, 6), (2, −3), (−2, 3) hain, aur inke jod −5, 5, −1, 1 hain. Koi bhi 2 nahi hai. "Ye to factorise hi nahi hoti!" Didi ne muskuraake kaha: "Completing the square chalega, par har baar wahi lambi kahani. Kyun na wo kahani ek baar **ax² + bx + c** ke liye likh lo? Phir har equation ke liye ek taiyaar formula mil jaayega." Chalo wahi karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Quadratic formula** | ax² + bx + c = 0 (a ≠ 0) ke roots dene wala taiyaar formula: x = (−b ± √(b² − 4ac)) / (2a) | Part A mein ban raha hai |
| **Root ke andar ka hissa** | Formula mein √ ke neeche likha poora b² − 4ac. Iska naam Topic 5 mein milega, yahan hum ise bas "root ke andar ka hissa" kehte hain | 3x² + 8x + 2 = 0 mein 64 − 24 = 40 |
| **Surd roop aur decimal roop** | Surd roop: root ko √ ke saath saaf-suthra likhna (jaise (5 + √5)/4). Decimal roop: calculator se value 2 decimal tak likhna | (5 + √5)/4 ≈ 1.81 |
| **Method chooser** | Ek chhota chart jo batata hai ki kaun si equation par kaun sa tareeka lagana aasaan rahega | Part F |

---

## Class 9 aur Chapter 2 se yaad

- **(a + b)² = a² + 2ab + b²** ([expansions.md](../../../class9/maths/expansions/expansions.md), Class 9): isse x² + 2·x·h + h² = (x + h)² banta hai, aur Part A ka poora derivation isi par tikka hai.
- **Trinomial factorisation** ([factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md)): ac ka product aur b ka jod dekhkar middle term todna. Jab wo jodi nahi milti (jaise x² + 2x − 6 mein), tab formula kaam aata hai.
- **Chapter 2** ([polynomials-part2.md](../polynomials/polynomials-part2.md)): roots ka jod −b/a aur guna c/a hota hai. Hum ise har example ki **Jaanch** mein use karenge, aur Part D mein dekhenge ki ye rishta formula se bhi nikalta hai. Parabola aur x-axis wali tasveer [polynomials.md](../polynomials/polynomials.md) ke Part B mein hai.
- **Irrational roots** (Chapter 1, [real-numbers-part4.md](../real-numbers/real-numbers-part4.md)): (−1 + √7) jaise roots irrational hote hain, isliye unhe surd roop mein hi sahi-sahi likha jaata hai.

---

## Part A: Formula banate hain (completing the square, ek baar letters ke saath)

Hum ax² + bx + c = 0 lete hain, jahan a ≠ 0. Saath-saath ek **numeric equation, 3x² + 8x + 2 = 0** par har kadam chalayenge, taaki letters dara na dein. Ye wahi kahani hai jo tum Topic 3 mein kar chuke ho, bas ab numbers ki jagah letters hain.

| Kadam | Letters ke saath (a, b, c) | Numeric: 3x² + 8x + 2 = 0 |
|---|---|---|
| 1. a se divide karo (a ≠ 0, isliye ho sakta hai) | x² + (b/a)x + c/a = 0 | x² + (8/3)x + 2/3 = 0 |
| 2. Constant ko doosri taraf bhejo | x² + (b/a)x = −c/a | x² + (8/3)x = −2/3 |
| 3. x ke coefficient ka aadha, uska square, dono taraf jodo | aadha: b/(2a). Square: b²/(4a²) | aadha: 4/3. Square: 16/9 |
| 4. Left taraf perfect square | (x + b/(2a))² = −c/a + b²/(4a²) | (x + 4/3)² = −2/3 + 16/9 |
| 5. Right taraf ek hi denominator (4a²) | −c/a = −4ac/(4a²), to right = (b² − 4ac)/(4a²) | −6/9 + 16/9 = 10/9, aur (64 − 24)/36 = 40/36 = 10/9 |
| 6. Dono taraf square root, ± ke saath | x + b/(2a) = ± √(b² − 4ac) / (2a) | x + 4/3 = ± √10 / 3 |
| 7. b/(2a) doosri taraf bhejo | x = (−b ± √(b² − 4ac)) / (2a) | x = (−4 ± √10) / 3 |

Dhyan se dekho kadam 3 aur 4 kyun chalte hain. Class 9 ka (a + b)² = a² + 2ab + b² yaad karo: x² + (b/a)x ko (x + h)² banane ke liye 2·x·h = (b/a)x chahiye, yaani **h = b/(2a)**, aur adhoora hissa h² = b²/(4a²) hai. Wo jodna hi "adhure square ko poora karna" hai.

```
        x          4/3
    +-------------+---------+
    :             :         :
x   :      x²     :  (4/3)x :
    :             :         :
    :             :         :
    +-------------+---------+
4/3 :    (4/3)x   :   16/9  : <- ye adhura kona
    :             :         :
    +-------------+---------+
```

> **Figure 4.2** – 3x² + 8x + 2 = 0 se bana x² + (8/3)x = −2/3 ek area ki tarah: x × x ka square (x²) aur do patti jinka area (4/3)x + (4/3)x = (8/3)x hai. Neeche-daayein wala 4/3 × 4/3 = 16/9 ka kona gayab tha. Use jodne se bada square (x + 4/3) × (x + 4/3) poora ho gaya. Figure naap ke hisaab se nahi hai.

Do baatein jo "kyun" mein aati hain:

- **Kadam 5 mein 4a²:** c/a ko 4a² denominator par laane ke liye upar-neeche 4a se guna kiya: c/a = 4ac/(4a²). Tab −4ac/(4a²) + b²/(4a²) = (b² − 4ac)/(4a²).
- **Kadam 6 mein 2a:** (4a²) ka square root asal mein 2|a| hota hai. Par hum ± likh rahe hain, aur ± dono sign de deta hai, isliye |a| ki jagah a likhna theek hai. a negative ho tab bhi formula wahi rehta hai.

Aur ek zaroori shart: kadam 6 mein root le sakte hain tabhi jab (b² − 4ac)/(4a²) negative na ho. Yaani **root ke andar ka hissa 0 ya positive** hona chahiye, tab real roots milte hain. Negative ho to real root nahi hota; uske baare mein Topic 5 mein poori baat hogi, aur aage ki class mein complex numbers.

```
          −b  ±  √( b² − 4ac )
   x  =  --------------------
                  2a
```

> **Figure 4.3** – Formula ke chaar hisse. Upar −b (b ka ulta sign), phir ± (do roots: ek + se, ek − se), phir √ ke andar poora b² − 4ac, aur neeche 2a jo **poore numerator** ke neeche hai (−b ke neeche bhi aur root ke neeche bhi).

**Formula ka numeric Jaanch (3x² + 8x + 2 = 0):** x = (−4 ± √10)/3. calculator se √10 ≈ 3.162, to x ≈ (−4 + 3.162)/3 = −0.279 aur x ≈ (−4 − 3.162)/3 = −2.387. Jod = (−4 + √10 − 4 − √10)/3 = −8/3 = −b/a ✅. Guna = (16 − 10)/9 = 6/9 = 2/3 = c/a ✅.

---

## Part B: Formula ko recipe ki tarah chalana

**Chaar kadam:** (1) equation ko standard form ax² + bx + c = 0 mein likho. (2) a, b, c **apne sign ke saath** pehchano. (3) bracket lagake bharo, khaaskar jab b ya c negative ho. (4) simplify karo aur Jaanch karo.

### Pehchaan ki table

| Equation | Standard form | a | b | c | −b |
|---|---|---|---|---|---|
| 4x² − 9x − 2 = 0 | wahi | 4 | −9 | −2 | 9 |
| 5x² = 3x + 8 | 5x² − 3x − 8 = 0 | 5 | −3 | −8 | 3 |
| 3 − 7x − 2x² = 0 | −2x² − 7x + 3 = 0 | −2 | −7 | 3 | 7 |
| x(x − 6) = −2 | x² − 6x + 2 = 0 | 1 | −6 | 2 | 6 |
| 2x² − 3 = 0 | wahi (x ka term nahi) | 2 | 0 | −3 | 0 |

Pehchaan ke niyam: (i) pehle sab kuch ek taraf laao. (ii) Term ke **aage ka sign** coefficient ka hissa hai: 5x² = 3x + 8 mein 3x ko left laane par −3x ho gaya. (iii) Jo term likha hi nahi (jaise 2x² − 3 mein x), uska coefficient **0** hai. (iv) a negative ho to formula seedha chalta hai; chaho to poori equation ko −1 se guna karke a positive bana lo.

### Example 1: seedhi wali paheli (x² + 2x − 6 = 0)

a = 1, b = 2, c = −6. Root ke andar: b² − 4ac = 2² − 4(1)(−6) = 4 + 24 = 28. √28 = √(4 × 7) = 2√7.

x = (−2 ± 2√7) / 2. Numerator ke dono term aur denominator ko 2 se divide karo: **x = −1 ± √7**.

calculator se √7 ≈ 2.646, to x ≈ 1.646 ya x ≈ −3.646.

**Jaanch:** jod = (−1 + √7) + (−1 − √7) = −2 = −b/a ✅. Guna = (−1)² − (√7)² = 1 − 7 = −6 = c/a ✅.

**Story check:** x ek doori hai, to negative nahi ho sakti. x = −1 − √7 ≈ −3.646 **reject**. Isliye foot deewar se **√7 − 1 ≈ 1.65 m** door, aur seedhi ka upar wala sira x + 2 = √7 + 1 ≈ 3.65 m ooncha. Pythagoras se: (√7 − 1)² + (√7 + 1)² = (8 − 2√7) + (8 + 2√7) = 16 = 4². Ayush ki paheli hal.

### Example 2: b negative aur a ≠ 1 (4x² − 10x + 5 = 0)

a = 4, b = −10, c = 5. **−b = −(−10) = +10.** b² = (−10)² = 100. 4ac = 4 × 4 × 5 = 80. Root ke andar: 100 − 80 = 20. √20 = 2√5.

x = (10 ± 2√5) / 8. Teeno (10, 2√5 aur 8) ko 2 se divide karo: **x = (5 ± √5) / 4**.

calculator se √5 ≈ 2.236: x ≈ (5 + 2.236)/4 = 1.809 ≈ 1.81 aur x ≈ (5 − 2.236)/4 = 0.691 ≈ 0.69.

**Jaanch:** jod = (5 + √5 + 5 − √5)/4 = 10/4 = 5/2 = −b/a ✅. Guna = (25 − 5)/16 = 20/16 = 5/4 = c/a ✅. Seedha bharke bhi: x = (5 + √5)/4 par 4x² = 4 × (30 + 10√5)/16 = (30 + 10√5)/4, −10x = −(50 + 10√5)/4, aur 5 = 20/4. Teeno ka jod = (30 + 10√5 − 50 − 10√5 + 20)/4 = 0 ✅.

### Example 3: root ke andar ka number bada hai, simplify karna padega (3x² + 4x − 8 = 0)

a = 3, b = 4, c = −8. Root ke andar: 4² − 4(3)(−8) = 16 + 96 = 112. √112 = √(16 × 7) = 4√7.

x = (−4 ± 4√7) / 6. Teeno ko 2 se divide karo: **x = (−2 ± 2√7) / 3**.

calculator se 2√7 ≈ 5.292: x ≈ (−2 + 5.292)/3 = 1.097 ≈ 1.10 aur x ≈ (−2 − 5.292)/3 = −2.431 ≈ −2.43.

**Jaanch:** jod = −4/3 = −b/a ✅. Guna = (4 − 28)/9 = −24/9 = −8/3 = c/a ✅.

### Example 4: jab root ke andar ka number perfect square ho (8x² − 14x + 3 = 0)

a = 8, b = −14, c = 3. Root ke andar: 196 − 96 = 100. √100 = 10, saaf.

x = (14 ± 10) / 16, to x = 24/16 = **3/2** ya x = 4/16 = **1/4**. Jab root ke andar ka number perfect square ho, roots rational nikalte hain aur formula factorisation jaisa hi jawab deta hai, bina middle term todne ki mehnat ke. (Isi baat ka poora hisaab Topic 5 mein.)

**Jaanch:** 8(3/2)² − 14(3/2) + 3 = 18 − 21 + 3 = 0 ✅. 8(1/4)² − 14(1/4) + 3 = 1/2 − 7/2 + 3 = 0 ✅. Factors: (2x − 3)(4x − 1) = 8x² − 2x − 12x + 3 ✅.

---

## Part C: Do khaas haalat (b = 0 aur c = 0)

Topic 1 mein x² = k aur x(ax + b) = 0 alag se dekhe the. Formula unhe bhi sambhal leta hai.

### Example 5: b = 0 (3x² − 18 = 0)

a = 3, b = 0, c = −18. Root ke andar: 0 − 4(3)(−18) = 216 = 36 × 6. √216 = 6√6. x = (0 ± 6√6)/6 = **±√6**. calculator se √6 ≈ 2.449: x ≈ ±2.45.

Seedha bhi: x² = 6 (Topic 1). Aam roop: ax² + c = 0 se x = ±√(−c/a). Yahan −c/a = 6.

**Jaanch:** jod 0 = −b/a ✅. Guna = −6 = c/a ✅.

### Example 6: c = 0 (4x² + 9x = 0)

a = 4, b = 9, c = 0. Root ke andar: 81 − 0 = 81, √81 = 9. x = (−9 ± 9)/8, to x = 0 ya x = −18/8 = **−9/4**. Aam roop: ax² + bx = 0 ke roots **0 aur −b/a**.

**Jaanch:** x(4x + 9) = 0 se wahi ✅. Jod = −9/4 = −b/a ✅. Guna = 0 = c/a ✅. (Yaad rakhna: x se divide karke 4x + 9 = 0 karoge to root x = 0 kho jaayega. Ye galti Topic 1 mein dekhi thi.)

---

## Part D: Jaanch kyun kaam karti hai? (formula aur Chapter 2 ka rishta)

Formula ke dono roots α = (−b + √(b² − 4ac)) / (2a) aur β = (−b − √(b² − 4ac)) / (2a) hain.

**Jod:** α + β = (−b + √(b² − 4ac) − b − √(b² − 4ac)) / (2a) = −2b / (2a) = **−b/a**. Dono √ wale term kat gaye.

**Guna:** αβ = ((−b)² − (√(b² − 4ac))²) / (2a)² = (b² − (b² − 4ac)) / (4a²) = 4ac / (4a²) = **c/a**. Yahan (p + q)(p − q) = p² − q² wala Class 9 ka identity laga.

Ek aur baat: **agar do numbers ka jod −b/a aur guna c/a ho, to wahi equation ke roots hain**, kyunki ye do numbers x² − (jod)x + (guna) = 0 ke roots hote hain, aur wo (a se divide ki hui) wahi equation hai. Isliye dono Jaanch milne par answer pakka sahi hai.

---

## Part E: Topic 2 ki equation, formula se

### Example 7: fraction wali equation (1/(x − 5) + 4/(x + 6) = 1)

x = 5 aur x = −6 par denominator 0 hota hai, to **x ≠ 5, x ≠ −6**. Dono taraf (x − 5)(x + 6) se guna karo (Topic 2 ka tareeka):
(x + 6) + 4(x − 5) = (x − 5)(x + 6)
5x − 14 = x² + x − 30
**x² − 4x − 16 = 0.**

a = 1, b = −4, c = −16. Root ke andar: 16 + 64 = 80 = 16 × 5, √80 = 4√5. x = (4 ± 4√5)/2 = **2 ± 2√5**. calculator se 2√5 ≈ 4.472: x ≈ 6.47 ya x ≈ −2.47.

Dono roots 5 aur −6 se alag hain, to dono **sahi** hain.

**Jaanch:** jod = 4 = −b/a ✅, guna = 4 − 20 = −16 = c/a ✅. Original mein x ≈ 6.472 rakho: 1/1.472 + 4/12.472 ≈ 0.679 + 0.321 = 1 ✅. x ≈ −2.472: 1/(−7.472) + 4/3.528 ≈ −0.134 + 1.134 = 1 ✅.

---

## Part F: Kaun sa tareeka kab? (ek hi equation, teen raaste)

Equation 4x² − 8x − 5 = 0 ko teeno tareeke se karte hain.

- **Factorisation:** ac = −20, jod −8 chahiye: −10 aur +2. 4x² − 10x + 2x − 5 = 2x(2x − 5) + 1(2x − 5) = (2x − 5)(2x + 1). Roots **5/2 aur −1/2**.
- **Completing the square:** x² − 2x = 5/4. Aadha coefficient −1, uska square 1: (x − 1)² = 5/4 + 1 = 9/4. x − 1 = ±3/2, to x = 5/2 ya −1/2.
- **Formula:** a = 4, b = −8, c = −5. Root ke andar: 64 + 80 = 144, √144 = 12. x = (8 ± 12)/8, to x = 20/8 = 5/2 ya x = −4/8 = −1/2.

**Jaanch:** jod = 2 = −b/a ✅. Guna = −5/4 = c/a ✅.

Teeno ek hi jawab dete hain. Farak mehnat aur bharose mein hai:

| Tareeka | Kab achha | Kab mushkil |
|---|---|---|
| Factorisation | Jab factors jhat se dikh jayein (chhote numbers) | Jab jodi na mile (jaise x² + 2x − 6), tab samay barbaad |
| Completing the square | Jab a = 1 aur b even ho, ya jab sawaal mein ye tareeka maanga ho. Formula ka "kyun" yahin se aaya | a ≠ 1 ho to fractions aate hain |
| Formula | Kisi bhi equation par, jab real roots hon. Bas a, b, c bharo | Sign slips ka darr (neeche Aam galtiyan) |

```
               Equation ko ax² + bx + c = 0 mein likho
                                  :
                                  v
                 Kya 1 minute mein factors dikh gaye?
              :                                     :
               haan                                  nahi
              :                                     :
              v                                     v
       Factorise karo                    Quadratic formula lagao
          (Topic 1)                (real roots hon to kaam karta hai)
              :                                     :
              v                                     v
                  Jaanch: jod = −b/a aur guna = c/a
```

> **Figure 4.4** – Method chooser. Pehle standard form, phir ek minute factors dhundo. Mil gaye to factorise karo, nahi mile to formula lagao. Dono raaston ke baad jod aur guna se Jaanch karo. Agar sawaal mein "completing the square se karo" likha ho, to Topic 3 wala tareeka lagao.

Formula ka bada faayda: usse **dimaag lagana nahi padta**, bas a, b, c aur thodi arithmetic. Isliye jab factors dikhte nahi, ek minute baad formula par aa jao.

---

## Aam galtiyan (bachke rehna)

**Galti 1: sign slip, −b aur b² mein**

Sawaal 2x² − 4x − 1 = 0. Ek bacche ne b = −4 ko dekhkar "−b" mein bhi −4 hi likh diya: x = (−4 ± √(16 + 8)) / 4 = (−4 ± 4.899)/4, to x ≈ 0.22 ya x ≈ −2.22.

Check karo. Jod −2 aaya, par −b/a = −(−4)/2 = **+2** hona chahiye. Seedha bharke bhi: x = 0.2247 par 2(0.0505) − 4(0.2247) − 1 = 0.101 − 0.899 − 1 = −1.798, jo 0 nahi hai.

Sahi: −b = −(−4) = **+4**, b² = (−4)² = **+16** (negative number ka square positive). Root ke andar 16 − 4(2)(−1) = 16 + 8 = 24, √24 = 2√6. x = (4 ± 2√6)/4 = **(2 ± √6)/2**. calculator se √6 ≈ 2.449: x ≈ 2.22 ya x ≈ −0.22. Ye bacche ke roots ke ulte sign wale hain.

**Jaanch:** jod = (2 + √6 + 2 − √6)/2 = 2 = −b/a ✅. Guna = (4 − 6)/4 = −1/2 = c/a ✅.

**Galti 2: 2a sirf root ke neeche, poore numerator ke neeche nahi**

Sawaal 5x² + 10x − 4 = 0. Root ke andar: 100 + 80 = 180 = 36 × 5, √180 = 6√5. Ek bacche ne likha: x = −10 ± 6√5/10 (yaani 10 sirf √ ke neeche). calculator se √5 ≈ 2.236, to 6√5/10 ≈ 1.342, aur x ≈ −8.66 ya x ≈ −11.34.

Check: jod = −20, par −b/a = −10/5 = −2. Galat.

Sahi: 2a poore numerator ke neeche hai: x = (−10 ± 6√5)/10. Teeno ko 2 se divide karo: (−5 ± 3√5)/5. Yaani −5/5 = −1, **par root wale term 3√5 ko bhi 5 se divide karna padta hai**, uska 3√5/5 bachta hai. calculator se 3√5 ≈ 6.708: x ≈ (−5 + 6.708)/5 = 0.342 ya x ≈ (−5 − 6.708)/5 = −2.342.

**Jaanch:** jod = −10/5 = −2 = −b/a ✅. Guna = (25 − 45)/25 = −20/25 = −4/5 = c/a ✅.

**Galti 3: √(b²) − 4ac likhna (root sirf b² par)**

Sawaal 7x² − 2x − 1 = 0. Ek bacche ne √(b²) − 4ac = 2 − 4(7)(−1) = 2 + 28 = 30 likha, aur x = (2 ± 30)/14 nikala: x = 32/14 = 16/7 ya x = −28/14 = −2.

Check: x = −2 par 7(4) − 2(−2) − 1 = 28 + 4 − 1 = **31**, jo 0 nahi hai. Galat.

Root ka √ nishaan **poore b² − 4ac** par hai: pehle b² − 4ac nikalo, **phir** root lo. Sahi: 4 + 28 = 32, √32 = 4√2. x = (2 ± 4√2)/14 = **(1 ± 2√2)/7**. calculator se 2√2 ≈ 2.828: x ≈ 0.547 ya x ≈ −0.261.

**Jaanch:** jod = 2/7 = −b/a ✅. Guna = (1 − 8)/49 = −7/49 = −1/7 = c/a ✅.

---

## Quick Recap

- Formula completing the square se **ek baar** ax² + bx + c = 0 par bana: **x = (−b ± √(b² − 4ac)) / (2a)**, jab a ≠ 0.
- Kadam: a se divide, constant idhar-udhar, (b/(2a))² dono taraf, perfect square, ± root, x akela. Real roots tabhi jab root ke andar ka hissa 0 ya positive ho (poori baat Topic 5).
- Pehle **standard form**, phir a, b, c **sign ke saath**. Jo term nahi hai uska coefficient 0 hai. −b mein b negative ho to −b positive.
- **2a poore numerator ke neeche** hai. Simplify karte waqt teeno term (aur denominator) ko common factor se divide karo.
- **√ poore b² − 4ac par** hai, sirf b² par nahi.
- Answer surd roop mein saaf likho, aur chaho to 2 decimal tak calculator se (√2 ≈ 1.414, √3 ≈ 1.732, √5 ≈ 2.236, √6 ≈ 2.449, √7 ≈ 2.646, √10 ≈ 3.162).
- b = 0 par roots ±√(−c/a); c = 0 par roots 0 aur −b/a.
- **Jaanch:** jod = −b/a, guna = c/a. Dono milen to roots pakke sahi (ye rishta formula se bhi nikalta hai).
- Topic 2 ki reducible equation: quadratic banao, formula lagao, aur denominator ko 0 karne wale root ko reject karo.
- Chooser: factors ek minute mein dikhein to factorise, nahi to formula. Word problem mein story check zaroor.

---

## Practice Questions

1. Write a, b, c and −b for each equation after bringing it to standard form: (a) 6 − 5x − 2x² = 0 (b) x(2x − 3) = 4. Then solve 7x² − 6x + 1 = 0 by the formula, giving the roots in surd form and to 2 decimal places.

2. Solve 4x² + 6x + 1 = 0 by the quadratic formula. Give the roots in surd form and in decimals (take √5 ≈ 2.236), and verify with the sum and product of the roots.

3. Solve 3x² − 6x − 1 = 0 by the formula. Give both roots in surd form, then to 2 decimal places (√3 ≈ 1.732).

4. Solve 5x² + 5x − 1 = 0 by the formula (√5 ≈ 2.236). Check by sum and product.

5. Solve 12x² + 7x − 10 = 0 by the formula. Is the answer rational? Verify by factorising as well.

6. Solve 6x(x + 1) = −1 by first writing it in standard form (√3 ≈ 1.732).

7. Solve 2x² − 2x − 1 = 0 by the formula (√3 ≈ 1.732), and check by sum and product.

8. Use the formula to solve 2x² − 14 = 0 (b = 0). Then solve it again as x² = 7 and compare (√7 ≈ 2.646).

9. Use the formula to solve 6x² − 5x = 0 (c = 0). Then solve it again by taking x common, and compare.

10. Solve 2/(x − 6) + 3/(x − 5) = 1. First write the conditions on x, then form the quadratic, solve it by the formula (√6 ≈ 2.449), and say whether each root is acceptable.

11. A rectangular garden is 6 m by 4 m. A path of the same width x runs around it on the outside, and the path's area is 38 m². Form the equation, solve it by the formula (√7 ≈ 2.646), and decide which root fits the story.

12. The length of a rectangular mat is 4 m more than its breadth, and its area is 36 m². Form the equation for the breadth, solve it by the formula (√10 ≈ 3.162), and give the breadth and length to 2 decimal places.

13. A student solved 3x² − 12x + 8 = 0 and wrote x = (−12 ± √48)/6 = (−12 ± 4√3)/6. Find the mistake, show by sum of roots that the answer is wrong, and give the correct roots.

14. For a > 0, show using the formula that (larger root) − (smaller root) = √(b² − 4ac) / a. Then check it on 9x² − 15x + 4 = 0 by finding both roots.

15. State True or False, with a reason:
    (a) The quadratic formula can be used on an equation that also factorises.
    (b) In x = (−b ± √(b² − 4ac)) / (2a), the 2a divides only the square-root part.
    (c) The formula cannot be used on 3x² − 18 = 0 because b is missing.
    (d) If two numbers have sum −b/a and product c/a, they are the roots of ax² + bx + c = 0.
    (e) For 7x² + 4x = 0, one of the roots is 0.

### Answers

1. (a) 6 − 5x − 2x² = 0 ko order mein likho: −2x² − 5x + 6 = 0. **a = −2, b = −5, c = 6, −b = 5.** (b) x(2x − 3) = 4 ⇒ 2x² − 3x − 4 = 0: **a = 2, b = −3, c = −4, −b = 3.**
   Ab 7x² − 6x + 1 = 0: a = 7, b = −6, c = 1. Root ke andar: 36 − 28 = 8, √8 = 2√2. x = (6 ± 2√2)/14 = **(3 ± √2)/7**. √2 ≈ 1.414: x ≈ (3 + 1.414)/7 = 0.631 ≈ **0.63** aur x ≈ (3 − 1.414)/7 = 0.227 ≈ **0.23**.
   Jaanch: jod = 6/7 = −b/a ✅, guna = (9 − 2)/49 = 7/49 = 1/7 = c/a ✅.

2. a = 4, b = 6, c = 1. Root ke andar: 36 − 16 = 20, √20 = 2√5. x = (−6 ± 2√5)/8 = **(−3 ± √5)/4**. x ≈ (−3 + 2.236)/4 = **−0.19** ya x ≈ (−3 − 2.236)/4 = **−1.31**.
   Jaanch: jod = −6/4 = −3/2 = −b/a ✅. Guna = (9 − 5)/16 = 1/4 = c/a ✅.

3. a = 3, b = −6, c = −1. −b = 6. Root ke andar: 36 + 12 = 48, √48 = 4√3. x = (6 ± 4√3)/6 = **(3 ± 2√3)/3**. 2√3 ≈ 3.464: x ≈ 6.464/3 = **2.15** ya x ≈ −0.464/3 = **−0.15**.
   Jaanch: jod = 2 = −b/a ✅. Guna = (9 − 12)/9 = −1/3 = c/a ✅.

4. a = 5, b = 5, c = −1. Root ke andar: 25 + 20 = 45, √45 = 3√5. x = (−5 ± 3√5)/10. 3√5 ≈ 6.708: x ≈ 1.708/10 = **0.17** ya x ≈ −11.708/10 = **−1.17**.
   Jaanch: jod = −10/10 = −1 = −b/a ✅. Guna = (25 − 45)/100 = −1/5 = c/a ✅.

5. a = 12, b = 7, c = −10. Root ke andar: 49 + 480 = 529, √529 = 23. x = (−7 ± 23)/24, to x = 16/24 = **2/3** ya x = −30/24 = **−5/4**. Haan, roots rational hain (root ke andar ka number perfect square tha).
   Jaanch: (3x − 2)(4x + 5) = 12x² + 15x − 8x − 10 = 12x² + 7x − 10 ✅. Jod = 2/3 − 5/4 = −7/12 = −b/a ✅.

6. 6x(x + 1) = −1 ⇒ 6x² + 6x + 1 = 0. a = 6, b = 6, c = 1. Root ke andar: 36 − 24 = 12, √12 = 2√3. x = (−6 ± 2√3)/12 = **(−3 ± √3)/6**. x ≈ (−3 + 1.732)/6 = **−0.21** ya x ≈ (−3 − 1.732)/6 = **−0.79**.
   Jaanch: jod = −1 = −b/a ✅. Guna = (9 − 3)/36 = 1/6 = c/a ✅.

7. a = 2, b = −2, c = −1. −b = 2. Root ke andar: 4 + 8 = 12, √12 = 2√3. x = (2 ± 2√3)/4 = **(1 ± √3)/2**. x ≈ (1 + 1.732)/2 = **1.37** ya x ≈ (1 − 1.732)/2 = **−0.37**.
   Jaanch: jod = 1 = −b/a ✅. Guna = (1 − 3)/4 = −1/2 = c/a ✅.

8. a = 2, b = 0, c = −14. Root ke andar: 0 + 112 = 112 = 16 × 7, √112 = 4√7. x = ±4√7/4 = **±√7 ≈ ±2.65** (2.646 se). Doosra tareeka: 2x² = 14 ⇒ x² = 7 ⇒ x = ±√7. Dono ek jaise.
   Jaanch: jod = 0 = −b/a ✅. Guna = −7 = c/a ✅.

9. a = 6, b = −5, c = 0. Root ke andar: 25 − 0 = 25, √25 = 5. x = (5 ± 5)/12, to x = 10/12 = **5/6** ya x = **0**. Doosra tareeka: x(6x − 5) = 0 ⇒ x = 0 ya x = 5/6.
   Jaanch: jod = 5/6 = −b/a ✅, guna = 0 = c/a ✅.

10. **Conditions:** x ≠ 6 aur x ≠ 5. (x − 6)(x − 5) se guna karo: 2(x − 5) + 3(x − 6) = (x − 6)(x − 5). Left: 2x − 10 + 3x − 18 = 5x − 28. Right: x² − 11x + 30. To x² − 16x + 58 = 0.
    a = 1, b = −16, c = 58. Root ke andar: 256 − 232 = 24, √24 = 2√6. x = (16 ± 2√6)/2 = **8 ± √6**. x ≈ 8 + 2.449 = **10.45** aur x ≈ 8 − 2.449 = **5.55**. Dono 6 aur 5 se alag hain, to **dono acceptable** hain.
    Jaanch: jod = 16 = −b/a ✅. Guna = 64 − 6 = 58 = c/a ✅. x = 10.449 par 2/4.449 + 3/5.449 ≈ 0.4495 + 0.5505 = 1 ✅. x = 5.551 par 2/(−0.4495) + 3/0.5505 ≈ −4.449 + 5.450 ≈ 1 ✅.

11. Garden aur path milake bahar ka rectangle (6 + 2x) × (4 + 2x) hai. Path ka area = bada rectangle − garden = (6 + 2x)(4 + 2x) − 6 × 4 = 24 + 20x + 4x² − 24 = 4x² + 20x. Ye 38 ke barabar: 4x² + 20x − 38 = 0, 2 se divide: **2x² + 10x − 19 = 0**.
    a = 2, b = 10, c = −19. Root ke andar: 100 + 152 = 252 = 36 × 7, √252 = 6√7. x = (−10 ± 6√7)/4 = **(−5 ± 3√7)/2**. 3√7 ≈ 7.937: x ≈ 2.937/2 = **1.47** ya x ≈ −12.937/2 = **−6.47**.
    **Story check:** width negative nahi ho sakti, to −6.47 reject. **Path ki chaudai ≈ 1.47 m.**
    Jaanch: 2x = −5 + 3√7, to bahar ke rectangle ka area (6 + 2x)(4 + 2x) = (1 + 3√7)(−1 + 3√7) = 63 − 1 = 62. 62 − 24 = 38 ✅.

12. Breadth x m, length (x + 4) m. x(x + 4) = 36 ⇒ x² + 4x − 36 = 0. a = 1, b = 4, c = −36. Root ke andar: 16 + 144 = 160 = 16 × 10, √160 = 4√10. x = (−4 ± 4√10)/2 = **−2 ± 2√10**. 2√10 ≈ 6.324: x ≈ 4.324 ya x ≈ −8.324.
    **Story check:** breadth negative nahi ho sakti, to −8.32 reject. **Breadth ≈ 4.32 m, length ≈ 8.32 m.**
    Jaanch: guna = 4 − 40 = −36 = c/a ✅, jod = −4 = −b/a ✅. Area ≈ 4.3246 × 8.3246 = 36.0 ✅.

13. Galti: b = −12 hai, to **−b = +12** hona chahiye tha, bacche ne −12 likh diya (sign slip). Jod check: uske roots (−12 + 4√3)/6 aur (−12 − 4√3)/6 ka jod −24/6 = **−4**, par −b/a = −(−12)/3 = **+4**. Galat. Seedha bharke: x = (−12 + 6.928)/6 ≈ −0.845 par 3(0.714) − 12(−0.845) + 8 ≈ 2.14 + 10.14 + 8 ≈ 20.3, jo 0 nahi.
    Sahi: root ke andar: 144 − 96 = 48 (bacche ka ye hissa theek tha), √48 = 4√3. x = (12 ± 4√3)/6 = **(6 ± 2√3)/3**. 2√3 ≈ 3.464: x ≈ 9.464/3 = 3.155 aur x ≈ 2.536/3 = 0.845.
    Jaanch: jod = 4 = −b/a ✅. Guna = (36 − 12)/9 = 24/9 = 8/3 = c/a ✅.

14. a > 0 aur root ke andar ka hissa 0 ya positive. Bada root = (−b + √(b² − 4ac))/(2a), chhota = (−b − √(b² − 4ac))/(2a) (a > 0 hai, to + wala bada hai). Farak = (2√(b² − 4ac))/(2a) = **√(b² − 4ac)/a**. (−b dono mein hai, kat gaya.)
    9x² − 15x + 4 = 0: a = 9, b = −15, c = 4. Root ke andar: 225 − 144 = 81, √81 = 9. x = (15 ± 9)/18, to x = 24/18 = **4/3** aur x = 6/18 = **1/3**. Farak 4/3 − 1/3 = 1, aur √81/9 = 9/9 = 1.
    Jaanch: jod = 5/3 = −b/a = 15/9 ✅, guna = 4/9 = c/a ✅.

15. (a) **True** ✅. Formula har quadratic par chalta hai, aur 4x² − 8x − 5 jaisi factorisable equation par bhi wahi roots deta hai (Part F).
    (b) **False** ❌. 2a poore numerator (−b ± √(...)) ke neeche hai. Sirf root ke neeche likhne se galat roots aate hain (Galti 2).
    (c) **False** ❌. b = 0 bhi ek coefficient hai: 3x² − 18 = 0 mein a = 3, b = 0, c = −18, aur formula ±√6 deta hai (Part C).
    (d) **True** ✅. Ye do numbers x² − (jod)x + (guna) = 0 ke roots hote hain, jo (a se divide ki hui) wahi equation hai.
    (e) **True** ✅. 7x² + 4x = 0 mein c = 0, to roots 0 aur −4/7 hain: x(7x + 4) = 0.

---

Shabaash! Ab tum kisi bhi quadratic ke saamne ghabrate nahi: a, b, c pehchano, formula bharo, aur jod-guna se jaanch lo. Ayush ki seedhi ka jawab bhi tumne nikaal liya: foot deewar se lagbhag 1.65 m door, aur −1 − √7 wali negative doori story ne reject kar di.

**Aage kya?** Ab tak hum bas ye maan ke chale ki √ ke andar ka b² − 4ac 0 ya positive hoga. Agar wo negative nikle to? Topic 5 mein is hisse ko naam milega, aur tum bina equation solve kiye bata paoge ki uske real roots honge ya nahi, kitne honge, aur parabola x-axis ko kaatega, chhuega ya chhodega. Wahan [Topic 5](quadratic-equations-part5.md) mein milte hain.
