# Chapter: Polynomials (Part 6)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [polynomials-part5.md](polynomials-part5.md) se aage chalti hai** (wahan Topic 5 mein division algorithm ke gehre sawaal aaye: p(x) = g(x) q(x) + r(x), dividend ya remainder dhundna, aur do anjaane coefficient wali divisibility). Chapter ki shuruaat: [polynomials.md](polynomials.md). Class 9 ka division, remainder aur factor theorem: [polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

---

# Topic 6: Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

Topic 1 mein graph ne bataya ki zero kahan milte hain. Topic 2 aur 3 mein quadratic ke zeros ka jod (S) aur guna (P) mila, aur ulta safar bhi: zeros se polynomial banana. Topic 4 mein cubic ke teen relation aaye. Topic 5 mein division algorithm ne wo sawaal khole jinme koi polynomial gayab tha. Ab har auzaar tumhare paas hai. Is topic mein koi naya auzaar nahi aayega. Ab seekhna hai ye: **sawaal dekh kar kaunsa auzaar uthana hai**, aur kai auzaar ek hi sawaal mein kaise saath chalte hain.

---

## Drishti ka Polynomial Fair

Drishti ke school mein aaj Polynomial Fair hai. Gate par teen stall hain: **graph**, **relations** aur **cubic**. Har stall par ek chhota sawaal hal karo to ek stamp milta hai. Teeno stamp lagne par teacher ma'am ek **Mystery Card** deti hain, aur wahi asli imtihaan hai.

Mystery Card par paanch sawaal hain, par kisi par likha nahi ki kaunsa stall kaam aayega. Ek sawaal mein sirf "parabola neeche ki taraf khulti hai" aur "zeros ka jod 1" likha hai. Doosre mein "ek zero doosre zeros ke jod ke barabar hai". Teesre mein "x⁴ ... exactly divisible hai".

Drishti ne pehle sawaal ko ghoor kar dekha aur socha: "Agar main galat stall par chali gayi to samay bhi jayega aur jawab bhi galat aayega." Teacher ma'am muskuraayin: "Bilkul. Sawaal ka **ishaara** pakdo, phir auzaar chuno."

Chalo, Drishti ke saath wahi seekhein.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Raasta chart** | Ek table jo batati hai ki sawaal ka kaunsa ishaara dikhe to kaunsa auzaar uthana hai | Is topic ka Figure 6.1 aur Part A ki table |
| **Mila-jula sawaal** | Aisa sawaal jisme do ya zyada topics ke auzaar ek ke baad ek lagte hain | Part B ke saare examples |
| **Cross-check** | Jawab ko pehle raaste se alag, doosre raaste se dobara jaanchna | Relations se nikale zero ko division se bhi jaanchna |

---

## Class 9 se yaad

Class 9 mein tumne [polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md) mein division algorithm (dividend = divisor × quotient + remainder), remainder theorem aur factor theorem seekhe the. Class 10 ke Chapter 1 mein [real-numbers.md](../real-numbers/real-numbers.md) mein Euclid ka lemma bhi tha, jo numbers ka wahi rishta hai. Is chapter mein wahi auzaar graph, S aur P, aur teen relation ke saath mile. Ab sab milkar kaam karenge.

---

## Part A: Raasta chart: kaunsa sawaal, kaunsa auzaar

Drishti ne pichhle paanch topics ko ek signboard par likha.

```
Kitne zero? Graph chhoota ya kaat-ta hai?   ----->  Graph                       (Topic 1)
Quadratic: jod aur guna, ya k se banana     ----->  S aur P                     (Topic 2, 3)
Cubic: teen jod-guna, teen zero se banana   ----->  Teen relation               (Topic 4)
Ek ya do zero diye, baaki zero?             ----->  Relations ya factor+division (Topic 4, 5)
Dividend, divisor, quotient, remainder      ----->  Division algorithm          (Topic 5)
```

> **Figure 6.1** – Drishti ka signboard: sawaal ka ishaara ek taraf, uska auzaar doosri taraf. Har auzaar ke baad bracket mein wo Topic likha hai jahan wo seekha gaya.

Ab wahi baat thodi vistaar se, ek table mein.

| Sawaal ka ishaara | Auzaar | Cross-check ka tareeka |
|---|---|---|
| Zero ginne hain ya dekhne hain, parabola upar ya neeche | Graph aur (x, p(x)) table | Zero ko p(zero) = 0 mein daalo |
| Quadratic ke zeros ka jod, guna, ya α² + β² jaise expression | S = −b/a, P = c/a | Agar zero mil jaayein to seedha jodo aur guna karo |
| Quadratic banana: zero ya (S, P) diye hain | k(x² − Sx + P) | Bracket kholo, zero wapas daalo |
| "Ek zero doosre ka m guna", "zeros ulte", "sum = product" | α aur mα (ya α aur −α) S aur P mein | Mile hue coefficient se zero dobara banao |
| Cubic ke teeno zero, ya teen jod-guna | α + β + γ = −b/a, αβ + βγ + γα = c/a, αβγ = −d/a | Teeno relation par check |
| Ek zero diya, baaki dhundo | Relations se baaki do ka jod aur guna, ya (x − zero) se divide | Dono raaste se wahi zero aane chahiye |
| "x⁴ ... exactly divisible hai" | Remainder ko 0 karo, ya zero daal kar p(zero) = 0 | Quotient × divisor wapas multiply |

**Ek zaroori imaandari:** relations tab lagte hain jab saare zero real hon. Isliye pehle dekho ki polynomial ke kitne real zero hain (graph ya table se), phir relations lagao. Topic 4 ka "pehle dekho ki teen zero hain" yahan bhi sach hai.

---

## Part B: Mila-jula sawaal

Ab Drishti ke Mystery Card ke sawaal, ek-ek karke.

### Example 1: graph, S aur P, aur k ek saath

**Sawaal:** Ek parabola neeche ki taraf khulti hai. Uske polynomial ke zeros ka jod 3 aur guna −4 hai, aur graph y-axis ko (0, 4) par kaat-ta hai. Polynomial dhundo, graph banao aur graph se zero padho.

**Hal:**
- Topic 3 se: polynomial k(x² − Sx + P) = k(x² − 3x − 4).
- y-axis par x = 0, to p(0) = k × (−4) = 4, yaani k = −1. (Parabola neeche khulti hai, to k negative hona hi chahiye. Wahi nikla.)
- **Polynomial: p(x) = −x² + 3x + 4.** Topic 1 ka seekha ye bhi yaad rakho: y-axis par jahan kate (0, 4), wo zero nahi hai. Wo to bas p(0) hai.
- (x, p(x)) table banao aur graph lagao:

```
  7                     :                                      x   p(x)
  6                     :     *     *                         -2   -6
  5                     :                                     -1    0   <- zero
  4                     *                 *                    0    4
  3                     :                                      1    6
  2                     :                                      2    6
  1                     :                                      3    4
  0  -------------O-----+-----------------------O-----------   4    0   <- zero
 -1                     :                                      5   -6
 -2                     :
 -3                     :
 -4                     :
 -5                     :
 -6         *           :                             *
           -2    -1     0     1     2     3     4     5
```

> **Figure 6.2** – y = −x² + 3x + 4 ke points (x = −2 se 5 tak). Graph x-axis ko x = −1 aur x = 4 par kaat-ta hai (O ke nishaan). Parabola neeche khulti hai, kyunki a = −1 negative hai. Dono taraf ke points (x = 1 aur 2, x = 0 aur 3, ...) ek-dusre ke mirror hain, to axis of symmetry zeros ke theek beech mein, x = 3/2 par hai. Har line 1 unit ki hai.

Graph se zero: **−1 aur 4**.

**Jaanch:** p(−1) = −1 − 3 + 4 = 0 ✅, p(4) = −16 + 12 + 4 = 0 ✅. Jod −1 + 4 = 3 = −b/a = −3/(−1) = 3 ✅. Guna (−1)(4) = −4 = c/a = 4/(−1) = −4 ✅. Axis x = 3/2 zeros ke beech ka point hai: (−1 + 4)/2 = 3/2 ✅. Vertex ki height: p(3/2) = −9/4 + 9/2 + 4 = 25/4 = 6.25, jo table ke 6 se thoda upar hai, to graph ke 6, 6 ke beech ek chhoti si "topi" banti hai ✅.

### Example 2: cubic, ek zero diya, baaki relations se

**Sawaal:** Cubic 6x³ − 7x² − 43x + 30 ka ek zero 3 hai. Baaki do zero relations se dhundo aur division se cross-check karo.

**Hal:** Pehle ye zero hai bhi? p(3) = 162 − 63 − 129 + 30 = 0, haan. Maan lo zeros 3, β, γ.
- a = 6, b = −7, c = −43, d = 30.
- Teeno ka jod: 3 + β + γ = −b/a = 7/6, to **β + γ = 7/6 − 3 = −11/6**.
- Teeno ka guna: 3βγ = −d/a = −5, to **βγ = −5/3**.
- Baaki do zero ka quadratic (Topic 3): x² − (−11/6)x + (−5/3) = x² + (11/6)x − 5/3. 6 se guna karo: 6x² + 11x − 10.
- Factor: 6x² + 11x − 10 = (2x + 5)(3x − 2). Zero **−5/2 aur 2/3**.
- Zeros: **3, −5/2, 2/3**.

**Jaanch (relations se):** jod 3 − 5/2 + 2/3 = (18 − 15 + 4)/6 = 7/6 ✅. Do-do ka guna-jod: 3(−5/2) + (−5/2)(2/3) + (2/3)(3) = −15/2 − 5/3 + 2 = (−45 − 10 + 12)/6 = −43/6 = c/a ✅. Guna: 3 × (−5/2) × (2/3) = −5 = −d/a ✅.
**Jaanch (cross-check, division se):** (6x³ − 7x² − 43x + 30) ÷ (x − 3) = 6x² + 11x − 10, remainder 0, wahi quadratic ✅.

### Example 3: do anjaane coefficient aur divisibility

**Sawaal:** x⁴ − x³ + ax² + bx − 60 ko x² − x − 12 se exactly divide hona hai. a aur b dhundo, aur polynomial ke saare real zero batao.

**Hal:** Long division karo (a, b abhi anjaane hain):
- x⁴ ÷ x² = x². x² × (x² − x − 12) = x⁴ − x³ − 12x². Bacha: (a + 12)x² + bx − 60.
- Agla term (a + 12). (a + 12)(x² − x − 12) = (a + 12)x² − (a + 12)x − 12(a + 12). Bacha: (b + a + 12)x + (12a + 84).
- Remainder 0 chahiye (Topic 5: r(x) = 0), to **dono coefficient 0**:
  - 12a + 84 = 0, to **a = −7**.
  - a + b + 12 = 0, to **b = −5**.
- Polynomial: x⁴ − x³ − 7x² − 5x − 60. Quotient a + 12 = 5 ke saath x² + 5.

```
                      x²             + 5
                ----------------------------------------
 x² − x − 12 )        x⁴    − x³   − 7x²    − 5x    − 60
                      x⁴    − x³  − 12x²
                ------------------------
                                     5x²    − 5x    − 60
                                     5x²    − 5x    − 60
                                ------------------------
                                                       0
```

> **Figure 6.3** – (x⁴ − x³ − 7x² − 5x − 60) ÷ (x² − x − 12). Har term apne power ke column mein hai: x⁴, x³, x², x aur constant. Quotient x² + 5, remainder 0.

Zeros: x⁴ − x³ − 7x² − 5x − 60 = (x² − x − 12)(x² + 5) = (x − 4)(x + 3)(x² + 5). Zero 4 aur −3. x² + 5 kabhi 0 nahi hota (x² ≥ 0, to x² + 5 ≥ 5). Is biquadratic ke **sirf do real zero** hain, 4 aur −3.

**Jaanch:** (x² − x − 12)(x² + 5) = x⁴ + 5x² − x³ − 5x − 12x² − 60 = x⁴ − x³ − 7x² − 5x − 60 ✅. Factor theorem se: p(4) = 256 − 64 − 112 − 20 − 60 = 0 ✅ aur p(−3) = 81 + 27 − 63 + 15 − 60 = 0 ✅.

### Example 4: S, P aur α² + β² saath

**Sawaal:** x² − 12x + k ke zeros α, β hain aur α² + β² = 104. k dhundo, phir zero aur 1/α + 1/β.

**Hal:** S = 12, P = k. Topic 2 ka formula: α² + β² = S² − 2P = 144 − 2k.
- 144 − 2k = 104, to **k = 20**.
- Polynomial x² − 12x + 20 = (x − 2)(x − 10). Zero **2 aur 10**.
- 1/α + 1/β = S/P = 12/20 = **3/5**.

**Jaanch:** 2² + 10² = 4 + 100 = 104 ✅. 1/2 + 1/10 = 5/10 + 1/10 = 6/10 = 3/5 ✅. Jod 12 aur guna 20 coefficient se mile ✅.

### Example 5: cubic jisme ek zero baaki do ke jod ke barabar hai

**Sawaal:** x³ − 8x² + 11x + k ka ek zero baaki do zeros ke jod ke barabar hai. k aur teeno zero dhundo.

**Hal:** Zeros α, β, γ aur α = β + γ.
- Jod: α + β + γ = 8, par β + γ = α, to **2α = 8**, α = 4.
- 4 zero hai, to p(4) = 64 − 128 + 44 + k = 0, to **k = 20**.
- (x³ − 8x² + 11x + 20) ÷ (x − 4) = x² − 4x − 5 = (x − 5)(x + 1).
- Zeros: **4, 5, −1**.

**Jaanch:** 5 + (−1) = 4 ✅ (condition). Jod 4 + 5 − 1 = 8 = −b/a ✅. Do-do ka guna-jod: 20 − 5 − 4 = 11 = c/a ✅. Guna: 4 × 5 × (−1) = −20 = −d/a, to d = 20 ✅. Teeno relation mil gaye, to **cross-check** ho gaya (division aur relations dono ek hi jawab).

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Polynomial ke zero uske coefficients hote hain"**

x² + 2x − 24 lo. Ek bacche ne likha: "Coefficients 1, 2 aur −24 hain, to zeros 1, 2, −24." Par quadratic ke zero **do** hote hain, teen nahi. Check karo: p(1) = 1 + 2 − 24 = −21, p(2) = 4 + 4 − 24 = −16. Koi bhi 0 nahi. Asli zero: x² + 2x − 24 = (x + 6)(x − 4), to **4 aur −6**.
Coefficients zero nahi hote, par zeros ke jod aur guna se jude hote hain: 4 + (−6) = −2 = −b/a aur 4 × (−6) = −24 = c/a. Coefficient **relations** mein aate hain, zero banke nahi.

**Galti 2: "α + β = 0 ka matlab dono zero 0 hain"**

2x² − 18 lo. Yahan b = 0 hai, to S = 0. Bacche ne likha: α = β = 0. Par p(0) = −18, zero nahi. Asli zero: 2(x² − 9) = 2(x − 3)(x + 3), to **3 aur −3**. S = 0 ka matlab sirf itna: ek zero doosre ka **negative** hai.
Aur ek dhokha: x² + 25 mein bhi b = 0 hai, par x² + 25 ≥ 25, kabhi 0 nahi. Iska graph x-axis ko milta hi nahi, to **koi real zero hi nahi**. Sirf "S = 0" dekh kar zero maan lena galat hai: pehle dekho ki real zero hain bhi.

**Galti 3: "Cubic ke relations biquadratic mein bhi bilkul waise hi"**

x⁴ − 5x³ + 5x² + 5x − 6 ke zero 1, 2, −1, 3 hain (bracket kholkar dekho: (x² − 1)(x² − 5x + 6) = x⁴ − 5x³ + 5x² + 5x − 6). Bacche ne cubic ki tarah likha: guna = −(constant)/a = −(−6) = 6. Par asli guna 1 × 2 × (−1) × 3 = **−6**. Chaar zeros ka guna **+e/a** hota hai, −e/a nahi. Jod ka sign zaroor wahi rehta hai: 1 + 2 − 1 + 3 = 5 = −b/a.
Yaani biquadratic ke relations ke signs −, +, −, + chalte hain, aur beech ke relations mein kai aur terms jud jaate hain. Is chapter mein hum cubic tak hi rukte hain, biquadratic ki poori kahani **aage ki class** mein.

**Galti 4: quadratic divisor ke liye sirf ek zero check karna**

Sawaal: kya x² − 5x − 14, p(x) = x³ − 3x² − 27x − 7 ka factor hai?

Ek bacche ne socha: "x² − 5x − 14 = (x − 7)(x + 2). p(7) = 343 − 147 − 189 − 7 = 0, to factor hai." Par divisor ke **do** zero hain, 7 aur −2, aur factor hone ke liye p ko **dono** par 0 hona chahiye (Topic 5 ka Example 7: jahan divisor 0 hota hai, wahan p aur remainder ki value barabar hoti hai). Doosra zero check karo: p(−2) = −8 − 12 + 54 − 7 = **27**, jo 0 nahi hai. To x² − 5x − 14 factor **nahi** hai.

Division se pakka karo: x(x² − 5x − 14) = x³ − 5x² − 14x, subtract: 2x² − 13x − 7. Phir 2(x² − 5x − 14) = 2x² − 10x − 28, subtract: **−3x + 21**. Remainder non-zero hai. Aur r(7) = −21 + 21 = 0, r(−2) = 6 + 21 = 27: wahi do values jo p ne di thi (p(7) = 0, p(−2) = 27).

**Jaanch:** (x² − 5x − 14)(x + 2) + (−3x + 21) = x³ + 2x² − 5x² − 10x − 14x − 28 − 3x + 21 = x³ − 3x² − 27x − 7 ✅

---

## Quick Recap

- **Raasta chart:** zero ginne ho to graph; quadratic ke jod aur guna ke liye S aur P; cubic ke liye teen relation; baaki zero ke liye relations ya factor + division; gayab polynomial ke liye division algorithm.
- Mila-jula sawaal mein auzaar ek ke baad ek lagte hain, aur har jawab ko doosre raaste se **cross-check** karo.
- Quadratic banane mein k na bhoolo; parabola neeche khule to k negative hota hai, aur y-intercept se k tay ho sakta hai.
- Divisibility mein remainder ke **har** coefficient ko 0 karo, to utne hi equation milte hain jitne anjaane coefficient.
- Relations tab lagao jab saare zero real hon; zero ginti pehle, relations baad mein.
- Galtiyan: coefficients ko zero samajhna, S = 0 se zero 0 maan lena, cubic ke relations biquadratic mein copy karna (guna ka sign +e/a), aur quadratic divisor ke liye sirf ek zero check karke "factor hai" kehna (dono zero chahiye).

---

## Practice Questions

1. For each task, name the best tool (graph, S and P, three relations, factor theorem with division, or division algorithm) and give one line of reason. Then solve (a), (d) and (e).
   (a) Find α² + β² for the zeros of 5x² − 12x + 3.
   (b) Form the cubic whose zeros are 1/2, −4 and 6.
   (c) Decide whether the graph of x³ − 5x + 1 meets the x-axis once or three times.
   (d) Find the quotient and the remainder when 4x³ − 2x² + 9 is divided by 2x² + 1.
   (e) Find all zeros of 3x³ − 2x² − 19x − 6, given that 3 is a zero.

2. Complete a table of (x, p(x)) for p(x) = 2x² − 3x − 5 for x = −2, −1, 0, 1, 2, 3. Read one zero from the table, find the other from the sign change, and check both using S and P.

3. For the zeros α and β of 4x² − 16x + 7, find α² + β² and 1/α + 1/β without finding the zeros. Then confirm using the zeros.

4. One zero of 4x³ + 8x² − 9x − 18 is −2. Find the other two zeros using the relations, and cross-check by division.

5. Find a and b so that 3x³ + ax² + bx + 42 is exactly divisible by x² − 4x − 21. Then find all zeros of the cubic.

6. The graph of a cubic with leading coefficient not given meets the x-axis at x = −3, x = 1/2 and x = 4, and meets the y-axis at (0, 12). Find the polynomial.

7. The graph of y = 3x² + kx + 12 touches the x-axis at one point. Find all possible values of k and the point of contact in each case.

8. The polynomial x³ + 3x² + kx + 20 has (x + 4) as a factor. Find k. Divide to find the quotient, and decide how many real zeros the cubic has. Are the three relations usable here?

9. The numbers 1 and −5 are zeros of x⁴ − 2x³ − 21x² + 62x − 40. Find the other zeros, and check the sum and the product of all four zeros against the coefficients.

10. Complete a table of p(x) = x³ + x² − 8x − 12 for x = −4, −3, ..., 4. Read the zeros, explain what the graph does at the repeated zero, and verify the three relations with that zero counted twice.

11. State True or False, with a reason:
    (a) If a quadratic has two zeros that are negatives of each other, then b = 0.
    (b) Since b = 0 in x² + 49, its zeros are 7 and −7.
    (c) If a cubic with a = 1 has three negative zeros, then d is positive.
    (d) For a biquadratic ax⁴ + bx³ + cx² + dx + e with four real zeros, the product of the zeros is −e/a.
    (e) If p(6) = 0, then x² − 3x − 18 is a factor of p(x).

### Answers

1. (a) **S aur P**: sawaal zero maangta hi nahi, sirf zeros ka ek symmetric expression. S = 12/5, P = 3/5, α² + β² = S² − 2P = 144/25 − 6/5 = 144/25 − 30/25 = **114/25**.
   (b) **Teen relation** (zeros se cubic banana): zero diye hain, polynomial banana hai.
   (c) **Graph** (table of values): kitni baar axis kate ye graph se pata chalta hai. p(−3) = −11, p(−2) = 3, p(0) = 1, p(1) = −3, p(2) = −1, p(3) = 13. Sign teen jagah badalta hai (−3 aur −2 ke beech, 0 aur 1 ke beech, 2 aur 3 ke beech), to graph **teen baar** kat-ta hai (cubic ke zyada se zyada teen zero, to yahi teen).
   (d) **Division algorithm**: dividend aur divisor diye hain. Dividend 4x³ − 2x² + 0x + 9, divisor 2x² + 0x + 1. 2x × (2x² + 1) = 4x³ + 2x, bacha −2x² − 2x + 9. Phir −1 × (2x² + 1) = −2x² − 1, bacha −2x + 10. **Quotient 2x − 1, remainder −2x + 10** (degree 1 < 2).
   **Jaanch:** (2x² + 1)(2x − 1) + (−2x + 10) = 4x³ − 2x² + 2x − 1 − 2x + 10 = 4x³ − 2x² + 9 ✅.
   (e) **Factor theorem + division** (ek zero diya hai, baaki dhundo): (3x³ − 2x² − 19x − 6) ÷ (x − 3) = 3x² + 7x + 2 = (3x + 1)(x + 2). Zero **3, −1/3, −2**.
   **Jaanch:** p(3) = 81 − 18 − 57 − 6 = 0 ✅. Jod 3 − 1/3 − 2 = 2/3 = −b/a ✅.

2. Table: p(−2) = 8 + 6 − 5 = 9, p(−1) = 2 + 3 − 5 = 0, p(0) = −5, p(1) = 2 − 3 − 5 = −6, p(2) = 8 − 6 − 5 = −3, p(3) = 18 − 9 − 5 = 4. Zero **−1** (table mein seedha). p(2) = −3 negative aur p(3) = 4 positive, to doosra zero 2 aur 3 ke beech hai. Parabola upar khulti hai (a = 2 > 0). S = −b/a = 3/2, to doosra zero = 3/2 − (−1) = **5/2**, jo 2 aur 3 ke beech hi hai.
   **Jaanch:** p(5/2) = 25/2 − 15/2 − 5 = 0 ✅. P = (−1)(5/2) = −5/2 = c/a ✅.

3. S = 16/4 = 4, P = 7/4. α² + β² = S² − 2P = 16 − 7/2 = **25/2**. 1/α + 1/β = (α + β)/(αβ) = S/P = 4 ÷ 7/4 = **16/7**.
   **Jaanch:** 4x² − 16x + 7 = (2x − 1)(2x − 7), zero 1/2 aur 7/2. Squares: 1/4 + 49/4 = 50/4 = 25/2 ✅. Reciprocals: 2 + 2/7 = 16/7 ✅.

4. a = 4, b = 8, c = −9, d = −18. Zeros −2, β, γ. Jod: −2 + β + γ = −8/4 = −2, to **β + γ = 0**. Guna: (−2)βγ = −d/a = 18/4 = 9/2, to **βγ = −9/4**. β + γ = 0 ka matlab γ = −β, to −β² = −9/4, β² = 9/4, **β = 3/2, γ = −3/2**.
   Zeros: **−2, 3/2, −3/2**.
   **Jaanch (division):** (4x³ + 8x² − 9x − 18) ÷ (x + 2) = 4x² − 9 = (2x − 3)(2x + 3), zero ±3/2 ✅. Do-do ka guna-jod: (−2)(3/2) + (3/2)(−3/2) + (−3/2)(−2) = −3 − 9/4 + 3 = −9/4 = c/a ✅.

5. Quotient 3x + c hoga (degree 3 − 2 = 1, leading 3). Constant term: (−21)(c) = 42, to **c = −2**. (x² − 4x − 21)(3x − 2) = 3x³ − 2x² − 12x² + 8x − 63x + 42 = 3x³ − 14x² − 55x + 42. Milao: **a = −14, b = −55**.
   Zeros: x² − 4x − 21 = (x − 7)(x + 3), aur 3x − 2 = 0 se x = 2/3. Zero **7, −3, 2/3**.
   **Jaanch:** p(7) = 1029 − 686 − 385 + 42 = 0 ✅, p(−3) = −81 − 126 + 165 + 42 = 0 ✅. Guna 7 × (−3) × 2/3 = −14 = −d/a = −42/3 = −14 ✅.

6. Zeros −3, 1/2, 4, to p(x) = k(x + 3)(x − 1/2)(x − 4). y-axis par x = 0: p(0) = k × 3 × (−1/2) × (−4) = 6k = 12, to **k = 2**. 2(x − 1/2) = 2x − 1, to p(x) = (x + 3)(2x − 1)(x − 4) = (2x² + 5x − 3)(x − 4) = 2x³ − 8x² + 5x² − 20x − 3x + 12 = **2x³ − 3x² − 23x + 12**.
   **Jaanch:** p(−3) = −54 − 27 + 69 + 12 = 0 ✅, p(1/2) = 1/4 − 3/4 − 23/2 + 12 = 0 ✅, p(4) = 128 − 48 − 92 + 12 = 0 ✅, p(0) = 12 ✅. Jod −3 + 1/2 + 4 = 3/2 = −b/a ✅.

7. Chhoone ka matlab zero ek hi hai (dohra): α = β. S = 2α = −k/3, P = α² = 12/3 = 4, to **α = 2 ya α = −2**.
   α = 2: 4 = −k/3, **k = −12**, polynomial 3x² − 12x + 12 = 3(x − 2)², point (2, 0).
   α = −2: −4 = −k/3, **k = 12**, polynomial 3x² + 12x + 12 = 3(x + 2)², point (−2, 0).
   **Jaanch:** 3(x − 2)² = 3x² − 12x + 12 ✅ aur 3(x + 2)² = 3x² + 12x + 12 ✅. Dono (x − zero)² ke roop mein hain, to graph x-axis ko sirf chhoota hai.

8. (x + 4) factor hai, to zero −4: p(−4) = −64 + 48 − 4k + 20 = 4 − 4k = 0, **k = 1**. (x³ + 3x² + x + 20) ÷ (x + 4) = **x² − x + 5**. Ab x² − x + 5 = x(x − 1) + 5. Agar x ≤ 0 ya x ≥ 1 to x(x − 1) ≥ 0, to value ≥ 5. Agar 0 < x < 1 to x(x − 1) > −1, to value > 4. Kabhi 0 nahi, to is cubic ka **sirf ek real zero (−4)** hai. Teen real zero hain hi nahi, to **teen relations nahi lagaye ja sakte**.
   **Jaanch:** (x + 4)(x² − x + 5) = x³ − x² + 5x + 4x² − 4x + 20 = x³ + 3x² + x + 20 ✅. Table: p(−5) = −35, p(−4) = 0, p(−3) = 17, p(−2) = 22, p(−1) = 21, p(0) = 20, p(1) = 25, p(2) = 42. Sign sirf ek baar badalta hai ✅.

9. Pehle zero check: p(1) = 1 − 2 − 21 + 62 − 40 = 0, p(−5) = 625 + 250 − 525 − 310 − 40 = 0, dono sach. Divisor (x − 1)(x + 5) = x² + 4x − 5. Division: (x⁴ − 2x³ − 21x² + 62x − 40) ÷ (x² + 4x − 5) = x² − 6x + 8. x² − 6x + 8 = (x − 2)(x − 4). Baaki zero **2 aur 4**.
   Zeros: 1, −5, 2, 4.
   **Jaanch:** Jod 1 − 5 + 2 + 4 = 2 = −b/a = −(−2)/1 ✅. Guna 1 × (−5) × 2 × 4 = −40 = **+e/a** = −40 ✅ (chaar zeros ka guna +e/a, Galti 3 wala sign). p(2) = 16 − 16 − 84 + 124 − 40 = 0 ✅.

10. Table: p(−4) = −28, p(−3) = −6, p(−2) = 0, p(−1) = −4, p(0) = −12, p(1) = −18, p(2) = −16, p(3) = 0, p(4) = 36. Zero **−2 aur 3**.
    x = −2 par graph x-axis ko chhoota hai: dono taraf p(−3) = −6 aur p(−1) = −4 negative hain, graph neeche se aata hai, x-axis ko chhoo kar wapas neeche mudta hai. Iska matlab −2 **dohra zero** hai: (x + 2)² (x − 3) = (x² + 4x + 4)(x − 3) = x³ + x² − 8x − 12.
    **Jaanch:** zeros −2, −2, 3. Jod −2 − 2 + 3 = −1 = −b/a ✅. Do-do ka guna-jod: 4 − 6 − 6 = −8 = c/a ✅. Guna: (−2)(−2)(3) = 12 = −d/a = 12 ✅.

11. (a) **True** ✅. Zeros α aur −α ka jod 0 = −b/a, to b = 0.
    (b) **False** ❌. x² + 49 ≥ 49, kabhi 0 nahi, graph x-axis ko milta hi nahi. b = 0 dekh kar zero maan lena galat hai.
    (c) **True** ✅. Teen negative numbers ka guna negative hota hai, αβγ = −d/a = −d, to d = −αβγ positive. Jaise (x + 1)(x + 2)(x + 4) = x³ + 7x² + 14x + 8, d = 8 ✅.
    (d) **False** ❌. Chaar zeros ka guna **+e/a** hota hai. Jaise zeros 1, −1, 3, −3 ka polynomial (x² − 1)(x² − 9) = x⁴ − 10x² + 9: guna 1 × (−1) × 3 × (−3) = 9 = e/a ✅.
    (e) **False** ❌. x² − 3x − 18 = (x − 6)(x + 3) ke do zero hain, 6 aur −3, aur factor hone ke liye p ko dono par 0 hona chahiye. Jaise p(x) = x − 6: p(6) = 0, par p(−3) = −9, aur x − 6 ki degree divisor se kam hai, to x² − 3x − 18 uska factor ho hi nahi sakta.

---

Drishti ne teeno stamp aur Mystery Card ke paanchon jawab jama kiye, aur teacher ma'am ne use ek chhota sa trophy diya. Tum bhi ab sawaal ka ishaara pakad kar sahi auzaar chun sakte ho, aur har jawab ko doosre raaste se parakh sakte ho. Shabaash!

Ab chapter ka saar neeche ek table mein hai.

---

# Chapter Wrap-up: Polynomials

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Polynomial ka graph | y = p(x) ka graph (x, p(x)) table se; linear mein seedhi line aur ek zero; quadratic mein parabola (a > 0 upar, a < 0 neeche) aur 0, 1 ya 2 zero; cubic mein S-jaisi curve aur zyada se zyada 3 zero | Zero wo x hai jahan graph x-axis ko milta hai; y-axis par kata point zero nahi hota |
| 2. Quadratic ke zeros aur coefficients | α + β = −b/a, αβ = c/a, aur uska "kyun"; α² + β², 1/α + 1/β, (α − β)², α³ + β³ zero nikaale bina | Pehle sign yaad rakho: jod ke saath −b/a |
| 3. Zeros se polynomial banao | x² − Sx + P aur uska koi bhi non-zero multiple k; "double", "reciprocal", "ulte", "sum = product", "farak" jaisi conditions; naye zeros wala polynomial; rectangle ke l aur b | Hamesha k ko yaad rakho; "ek zero doosre ka double" mein α aur 2α likho |
| 4. Cubic ke zeros aur coefficients | Teen relations: α + β + γ = −b/a, αβ + βγ + γα = c/a, αβγ = −d/a; zeros se cubic banana; ek ya do zero diye ho to baaki; AP, GP, dohra zero | Relations tab lagao jab teeno zero real hon; signs −, +, − |
| 5. Division algorithm ke gehre sawaal | p(x) = g(x) q(x) + r(x) jahan r = 0 ya degree r < degree g; dividend, quotient ya remainder dhundna; quadratic divisor; k aur m ki divisibility; baaki zero | Dividend mein gayab powers ke liye 0x³ jaise placeholder likho, aur remainder ki degree divisor se kam rakho |
| 6. Sab kuch mila kar | Raasta chart; mila-jula sawaal jisme graph, S aur P, relations aur division ek saath; cross-check; galtiyan: coefficients ko zero samajhna, S = 0 se zero 0 maan lena, biquadratic mein cubic ke relations, quadratic divisor ke liye sirf ek zero check karna | Sawaal ka ishaara pakdo, phir auzaar chuno, aur jawab doosre raaste se jaancho |

---

Polynomials ka ye safar graph se shuru hua, zeros aur coefficients ke rishte se guzra, aur division tak pahuncha. Ab tum kisi bhi polynomial ke zeros ko dekh, bana aur parakh sakte ho.

**Aage kya?** Class 10 Maths Chapter 3 Quadratic Equations mein dekhenge ki zero dhundhne ke aur bhi tareeke hain, aur har quadratic ke zeros hote hain ya nahi, ye pehle se kaise pata chale.
