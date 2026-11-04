# Chapter: Factorisation (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [factorisation-part4.md](factorisation-part4.md) se aage chalti hai** (wahan Topic 4: Difference of Two Squares hai). Topic 1 (saare methods ka overview) [factorisation.md](factorisation.md) mein hai.
> **Topics covered in this file:**
> 5. Factorisation of Quadratic Trinomials

---

# Topic 5: Factorisation of Quadratic Trinomials

Topic 4 mein humne **2 terms** wale expressions tode the, jaise 3x² - 75 = 3(x + 5)(x - 5) (difference of two squares). Ab hum ek kadam aage badhte hain, **3 terms** wale expressions ki taraf, jinme x², x aur ek constant teeno hote hain. Inhe **quadratic trinomials** kehte hain.

Achhi baat ye hai ki is topic mein koi bilkul naya hathiyaar nahi aayega. Hum pichle do tools ko hi jodenge:
- **Topic 2 (common factor):** koi bhi trinomial mile, **sabse pehle** common factor nikalenge.
- **Topic 3 (grouping):** middle term ko do tukdon mein todne ke baad hamare paas **4 terms** ho jate hain, aur unhe hum **grouping** se hi hal karte hain. Yaani splitting asal mein ek trinomial ko "grouping wala sawaal" bana deta hai.

Topic 1 mein humne **middle term splitting** ka basic tarika dekha tha. Wahan x² + 5x + 6, x² - 7x + 12, x² + 2x - 15, x² - x - 6, 2x² + 7x + 3 aur 6x² - x - 2 jaise examples hal kiye the, aur signs ki ek table bhi banayi thi. Perfect square wale 4x² + 12x + 9 aur 25y² - 30y + 9 bhi wahin dekhe the.

Is topic mein hum us tarike ko **gehrai se** samjhenge:
- Splitting **kaam kyun karta hai.**
- Sahi jodi (pair) **bina andaze ke, ek system se** kaise dhundhein, chahe numbers bade hon.
- Negative leading coefficient, do variables, substitution aur fraction wale trinomials.
- Aur sabse zaroori: **kaise pata karein ki koi trinomial toda hi nahi ja sakta.**

---

## Priya ke tiles ki kahani

Priya ke ghar mein naya farsh lag raha hai. Mistri ke paas teen tarah ki tiles hain:

- **Badi square tile:** har side x, area **x²**
- **Lambi patti (strip):** x lambi aur 1 chaudi, area **x**
- **Chhoti square tile:** har side 1, area **1**

Mistri ke paas hain: **1 badi tile, 4 pattiyan aur 3 chhoti tiles.** Kul area = **x² + 4x + 3**.

Priya ki mummy kehti hain: "Saari tiles laga do, par farsh ek **poora rectangle** hona chahiye. Koi tile bachni nahi chahiye, koi kona khaali nahi rehna chahiye."

Mistri ne koshish ki:
- Badi tile kone mein rakhi.
- Uske right mein **3 pattiyan** khadi rakhi, aur neeche **1 patti** leti hui.
- Ab bache kone mein **3 chhoti tiles** theek baith gayi (3 × 1 ka hissa).

Poora rectangle ban gaya! Uski lambai **x + 3** aur chaudai **x + 1** nikli.

**x² + 4x + 3 = (x + 1)(x + 3)**

Ab mummy ne ek aur set diya: **1 badi tile, 1 patti aur 1 chhoti tile** (x² + x + 1). Mistri ne ghanta bhar koshish ki, par **rectangle bana hi nahi.** Kisi na kisi taraf kona khaali reh jata.

Is kahani mein poora topic chhupa hai:
- **Trinomial ko factorise karna = tiles ko ek rectangle mein jamaana.** Rectangle ki lambai aur chaudai hi factors hain.
- **Kuch trinomials ka rectangle banta hi nahi.** Unhe (integers mein) factorise nahi kar sakte. Hum aage seekhenge ki ye pehle se kaise pata karein, bina ghanta bhar koshish kiye.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Quadratic trinomial** | Degree 2 ka polynomial jisme 3 terms hon | 6x² + 5x - 6 |
| **Leading coefficient** | Sabse badi power wale term ka coefficient (yahan x² ka) | 6x² + 5x - 6 mein **6** |
| **Middle term** | Beech wala term (x wala) | 6x² + 5x - 6 mein **5x** |
| **Constant term** | Bina variable wala term | 6x² + 5x - 6 mein **-6** |
| **Factor pair** | Do numbers jinka product ek diya hua number ho | 12 ke factor pairs: (1, 12), (2, 6), (3, 4) |
| **Substitution** | Ek lambi cheez ko thodi der ke liye ek letter maan lena | (a + b) ko t maan lena |
| **Irreducible (integers mein)** | Jise integer coefficients wale factors mein toda na ja sake | x² + x + 1 |

Is poore topic mein hum trinomial ko **ax² + bx + c** likhenge. Yaani:
- **a** = x² ka coefficient
- **b** = x ka coefficient
- **c** = constant term

---

## Part A: Splitting kaam kyun karta hai?

Topic 1 mein rule tha: "aisi do numbers dhundo jinka **product = a × c** aur **sum = b** ho." Par ye rule aaya kahan se? Chaliye ulta chal kar dekhte hain.

### Do brackets ko multiply karke dekho

Maan lo factors hain **(2x + 3)** aur **(3x - 2)**. Inhe multiply karo:

(2x + 3)(3x - 2)
= 2x × 3x + 2x × (-2) + 3 × 3x + 3 × (-2)
= 6x² **- 4x + 9x** - 6
= 6x² + 5x - 6

Dhyan do beech mein kya hua. Multiply karte waqt middle term **do tukdon mein aaya: -4x aur 9x.** Baad mein humne unhe jod kar 5x bana diya.

**Splitting ka matlab hai: is jodne wale kaam ko ulta karna.** Hum 5x ko wapas -4x aur 9x mein tod dete hain, taaki grouping se brackets wapas mil jayein.

### Product a × c kyun?

Ab un do tukdon (-4 aur 9) ko multiply karo:
(-4) × 9 = **-36**

Aur a × c = 6 × (-6) = **-36**.

Dono barabar hain! Ye sanyog nahi hai. Har baar aisa hi hota hai. Kyun? Dekho:

General roop mein **(px + q)(rx + s)** ko multiply karo:
= pr·x² + **ps·x + qr·x** + qs

- a = pr (x² ka coefficient)
- c = qs (constant)
- Middle term ke do tukde: **ps** aur **qr**

Ab tukdon ka product: ps × qr = **(pr) × (qs) = a × c**

Aur tukdon ka sum: ps + qr = **b**

Isliye hamesha **product = a × c** aur **sum = b** wali jodi dhundhte hain. Ye koi ratne wala rule nahi, multiplication ka ulta hai.

### Tiles se bhi yahi dikhta hai

Kahani wale rectangle mein (x² + 4x + 3), 4 pattiyan do hisson mein bati thi: **3 khadi aur 1 leti hui.** Wahi 3 aur 1 hai jinka sum 4 aur product 3 (= a × c = 1 × 3) hai.

---

## Part B: Sahi jodi dhundhne ka system (factor pair table)

Chhote numbers mein jodi dimaag mein mil jati hai. Par jab numbers bade hon, to andaza lagana mushkil hota hai. Tab ye system use karo.

### Kadam

1. **a × c** nikalo.
2. Uske **saare factor pairs** ek table mein likho (sirf positive, chhote se bade).
3. Sign dekho:
   - Agar **a × c positive** hai, to dono numbers ka sign same hoga (b ka sign). Table mein **sum** dekho.
   - Agar **a × c negative** hai, to ek positive aur ek negative hoga. Table mein **difference** dekho.
4. Jis pair ka sum (ya difference) **b ke barabar** ho, wahi jodi hai.

### Example 1: x² - 21x + 108

a × c = 1 × 108 = **108** (positive). b = -21, to dono numbers **negative**. Sum 21 wala pair dhundho.

| Factor pair of 108 | Sum |
|---|---|
| 1, 108 | 109 |
| 2, 54 | 56 |
| 3, 36 | 39 |
| 4, 27 | 31 |
| 6, 18 | 24 |
| **9, 12** | **21** ✅ |

Jodi: **-9 aur -12**.

**x² - 21x + 108 = (x - 9)(x - 12)**

Jaanch: (x - 9)(x - 12) = x² - 12x - 9x + 108 = x² - 21x + 108 ✅

### Example 2: 6x² + 5x - 6

a × c = 6 × (-6) = **-36** (negative). To ek positive, ek negative. Difference 5 wala pair dhundho. b = +5 positive hai, to **bada number positive** hoga.

| Factor pair of 36 | Difference |
|---|---|
| 1, 36 | 35 |
| 2, 18 | 16 |
| 3, 12 | 9 |
| **4, 9** | **5** ✅ |
| 6, 6 | 0 |

Jodi: **+9 aur -4**.

6x² + 5x - 6
= 6x² + 9x - 4x - 6 (ab 4 terms ho gaye, yaani Topic 3 wala grouping ka sawaal)
= 3x(2x + 3) - 2(2x + 3) (har group se common factor nikala, Topic 2 ki tarah)
= **(2x + 3)(3x - 2)**

Jaanch: (2x + 3)(3x - 2) = 6x² - 4x + 9x - 6 = 6x² + 5x - 6 ✅

(Ye wahi factors hain jo Part A mein multiply kiye the.)

**Kram badal ke dekho:** Agar -4x pehle likho, to bhi answer wahi aata hai:
6x² - 4x + 9x - 6 = 2x(3x - 2) + 3(3x - 2) = (3x - 2)(2x + 3) ✅
Tukdon ka kram koi farak nahi daalta.

### Example 3: 12x² - 7x - 12

a × c = 12 × (-12) = **-144** (negative). Difference 7 chahiye. b = -7 negative hai, to **bada number negative** hoga.

| Factor pair of 144 | Difference |
|---|---|
| 1, 144 | 143 |
| 2, 72 | 70 |
| 3, 48 | 45 |
| 4, 36 | 32 |
| 6, 24 | 18 |
| 8, 18 | 10 |
| **9, 16** | **7** ✅ |
| 12, 12 | 0 |

Jodi: **-16 aur +9**.

12x² - 7x - 12
= 12x² - 16x + 9x - 12
= 4x(3x - 4) + 3(3x - 4)
= **(3x - 4)(4x + 3)**

Jaanch: (3x - 4)(4x + 3) = 12x² + 9x - 16x - 12 = 12x² - 7x - 12 ✅

### Ek chhoti si tip

Table mein jaise jaise neeche jate ho, sum ya difference **chhota hota jata hai.** To agar aapko chhota sum chahiye, to table ke neeche se shuru karo. Isse time bachta hai.

---

## Part C: Jab leading coefficient negative ho

Agar x² ka coefficient negative hai (jaise -x² + x + 6), to splitting mein signs ki galti hone ka chance bahut zyada hota hai. Isliye seedha tarika: **pehle -1 bahar nikalo.**

### Example 4: -x² + x + 6

-1 bahar nikalo (andar ke sab signs badal jayenge):
= -(x² - x - 6)

Ab bracket ke andar wala Topic 1 mein hal kar chuke hain: x² - x - 6 = (x - 3)(x + 2).

= **-(x - 3)(x + 2)**

Is minus ko kisi ek bracket ke andar bhi daal sakte ho: -(x - 3) = (3 - x).
= **(3 - x)(x + 2)**

Dono answer sahi hain.

Jaanch: (3 - x)(x + 2) = 3x + 6 - x² - 2x = -x² + x + 6 ✅

### Example 5: -2x² + 5x + 3

= -(2x² - 5x - 3)

Andar: a × c = -6, sum -5. Jodi: **-6 aur +1**.
2x² - 6x + x - 3 = 2x(x - 3) + 1(x - 3) = (x - 3)(2x + 1)

= **-(x - 3)(2x + 1)** ya **(3 - x)(2x + 1)**

Jaanch: (3 - x)(2x + 1) = 6x + 3 - 2x² - x = -2x² + 5x + 3 ✅

---

## Part D: Pehle common factor (hamesha!)

Topic 2 ka niyam yahan bhi sabse pehla kadam hai: **koi common factor ho to pehle nikalo.** Isse numbers chhote ho jate hain aur splitting aasan.

### Example 6: 3x² - 15x + 18

Teeno coefficients (3, 15, 18) mein 3 common hai.
= 3(x² - 5x + 6)
= **3(x - 2)(x - 3)**

Agar 3 nahi nikalte, to a × c = 54 ke pairs dhundhne padte. Kaam double ho jata.

Jaanch: 3(x - 2)(x - 3) = 3(x² - 5x + 6) = 3x² - 15x + 18 ✅

### Example 7: 2x³ - 8x² - 24x

Common factor **2x** hai.
= 2x(x² - 4x - 12)

Andar: product -12, sum -4. Jodi: **-6 aur 2**.
= **2x(x - 6)(x + 2)**

Jaanch: (x - 6)(x + 2) = x² - 4x - 12, aur 2x se multiply: 2x³ - 8x² - 24x ✅

Dhyan do, ye trinomial cubic dikhta hai, par common factor nikalne ke baad andar quadratic trinomial bacha.

---

## Part E: Do variables wale trinomials

Kabhi kabhi trinomial mein do letters hote hain, jaise **x² + 5xy + 6y²**. Ghabrao mat. Bas aise socho ki **y ek number ki tarah hai** jo har jagah saath chalta hai.

### Example 8: x² + 5xy + 6y²

x ke hisaab se dekho: a = 1, b = 5y, c = 6y². Numbers ke hisaab se product 6, sum 5. Jodi: **2 aur 3**. Har ek ke saath y laga do.
= **(x + 2y)(x + 3y)**

Jaanch: (x + 2y)(x + 3y) = x² + 3xy + 2xy + 6y² = x² + 5xy + 6y² ✅

### Example 9: x² - xy - 12y²

Product -12, sum -1. Jodi: **-4 aur 3**.
= **(x - 4y)(x + 3y)**

Jaanch: x² + 3xy - 4xy - 12y² = x² - xy - 12y² ✅

### Example 10: 2a² - 7ab + 6b²

a × c = 2 × 6 = 12 (positive), sum -7. Dono negative. Jodi: **-3 aur -4**.

2a² - 3ab - 4ab + 6b²
= a(2a - 3b) - 2b(2a - 3b)
= **(2a - 3b)(a - 2b)**

Jaanch: (2a - 3b)(a - 2b) = 2a² - 4ab - 3ab + 6b² = 2a² - 7ab + 6b² ✅

**Dhyan rakho:** Grouping mein doosre group se **-2b** nikala (sirf -2 nahi), kyunki -4ab aur 6b² dono mein b bhi common hai.

---

## Part F: Substitution wale trinomials

Kabhi kabhi trinomial **chhupa hua** hota hai. Dikhne mein lamba ya ajeeb lagta hai, par andar se wahi ax² + bx + c hai. Trick: **lambi cheez ko ek letter (jaise t) maan lo**, factorise karo, aur phir **wapas rakh do.**

Ise aise samjho: aap ek bade dabbe ko ek naam (t) de dete ho, taaki uske andar jhaankne ki zaroorat na pade. Kaam ho jane ke baad dabba wapas khol dete ho.

### Example 11: (a + b)² - 5(a + b) + 6

Dekho, **(a + b)** do baar aa raha hai. Ise **t** maan lo.
= t² - 5t + 6
= (t - 2)(t - 3)

Ab t ki jagah wapas (a + b) rakho:
= **(a + b - 2)(a + b - 3)**

### Example 12: x⁴ - 5x² + 4

Yahan x⁴ = (x²)². To **x² = t** maan lo.
= t² - 5t + 4
= (t - 1)(t - 4)

Wapas rakho:
= (x² - 1)(x² - 4)

Par ruko! Dono brackets **difference of squares** hain (Topic 4 yaad karo). Aur todo:
= **(x - 1)(x + 1)(x - 2)(x + 2)**

Jaanch: (x² - 1)(x² - 4) = x⁴ - 4x² - x² + 4 = x⁴ - 5x² + 4 ✅

### Example 13: (x² + x)² - 8(x² + x) + 12

**t = x² + x** maan lo.
= t² - 8t + 12
= (t - 2)(t - 6)

Wapas rakho:
= (x² + x - 2)(x² + x - 6)

Dono brackets khud quadratic trinomials hain. Unhe bhi todo:
- x² + x - 2: product -2, sum 1, jodi **2 aur -1** → (x + 2)(x - 1)
- x² + x - 6: product -6, sum 1, jodi **3 aur -2** → (x + 3)(x - 2)

= **(x + 2)(x - 1)(x + 3)(x - 2)**

Is tarah ke sawaalon mein sabse badi galti hoti hai: **t wapas rakhna bhool jana**, ya **wapas rakhne ke baad aage todna bhool jana.**

---

## Part G: Fraction aur decimal coefficients

Jab coefficients fraction mein hon, to splitting mushkil lagti hai. Aasan tarika: **pehle LCM se fractions hatao.**

### Example 14: x² + (5/6)x + 1/6

Denominators 6 aur 6 hain. 1/6 bahar nikalo (yaani sab ko 6 se multiply karke andar likho):
= (1/6)(6x² + 5x + 1)

Andar: a × c = 6, sum 5. Jodi: **2 aur 3**.
6x² + 2x + 3x + 1 = 2x(3x + 1) + 1(3x + 1) = (3x + 1)(2x + 1)

= **(1/6)(2x + 1)(3x + 1)**

Isse doosre roop mein bhi likh sakte ho: (1/6)(2x + 1)(3x + 1) = (x + 1/2)(x + 1/3).
Jaanch: (x + 1/2)(x + 1/3) = x² + (1/3)x + (1/2)x + 1/6 = x² + (5/6)x + 1/6 ✅

### Example 15: x² - 0.5x - 0.5

Decimals hatane ke liye 1/2 bahar nikalo:
= (1/2)(2x² - x - 1)

Andar: a × c = -2, sum -1. Jodi: **-2 aur 1**.
2x² - 2x + x - 1 = 2x(x - 1) + 1(x - 1) = (x - 1)(2x + 1)

= **(1/2)(2x + 1)(x - 1)** = **(x + 0.5)(x - 1)**

Jaanch: (x + 0.5)(x - 1) = x² - x + 0.5x - 0.5 = x² - 0.5x - 0.5 ✅

---

## Part H: Perfect square trinomial ko gehrai se pehchaanna

Topic 1 mein humne 4x² + 12x + 9 = (2x + 3)² dekha tha. Ab ek **pakka test** seekhte hain jisse turant pata chale ki trinomial perfect square hai ya nahi.

### Test 1: Teen sawaal

1. Kya **pehla term** kisi cheez ka square hai? (Jaise 9x² = (3x)²)
2. Kya **aakhri term** kisi cheez ka square hai, aur **positive** hai? (Jaise 16y² = (4y)²)
3. Kya **beech wala term = 2 × (pehle ki root) × (aakhri ki root)** hai?

Teeno ka jawab haan ho, to ye perfect square hai.

### Test 2: b² = 4ac (number wala shortcut)

ax² + bx + c perfect square hota hai jab **b² = 4ac** ho.

Check karo 4x² + 12x + 9:
- b² = 12² = 144
- 4ac = 4 × 4 × 9 = 144
- Barabar hain ✅. Perfect square hai: (2x + 3)².

Ab 4x² + 10x + 9 check karo:
- b² = 100
- 4ac = 144
- Barabar nahi. **Perfect square nahi hai.**

### Example 16: 9x² - 24xy + 16y²

- 9x² = (3x)², 16y² = (4y)²
- 2 × 3x × 4y = 24xy ✅ (aur minus hai)

= **(3x - 4y)²**

Jaanch: (3x - 4y)² = 9x² - 24xy + 16y² ✅

### Example 17: x² + x + 1/4

- x² = (x)², 1/4 = (1/2)²
- 2 × x × 1/2 = x ✅

= **(x + 1/2)²**

Jaanch: (x + 1/2)² = x² + x + 1/4 ✅

### Example 18: x² + 2√3 x + 3

- 3 = (√3)²
- 2 × x × √3 = 2√3 x ✅

= **(x + √3)²**

(Yahan splitting se integers mein jodi nahi milti, par perfect square ki pehchaan se turant ho gaya. Isliye ye test bahut kaam ka hai.)

---

## Part I: Kab trinomial toda hi nahi ja sakta?

Kahani mein mistri x² + x + 1 ka rectangle nahi bana paya. Kya hum pehle se ye jaan sakte the? Haan, factor pair table se.

### Factor pair table poori check karo

x² + x + 1 mein a × c = 1, sum 1 chahiye.

| Factor pair of 1 | Sum |
|---|---|
| 1, 1 | 2 |
| -1, -1 | -2 |

Sum 1 kisi bhi pair se nahi aata. **Saare pairs check karne ke baad** bhi jodi na mile, to ye trinomial **integers mein factorise nahi ho sakta.**

Isliye table banana zaroori hai. Do-teen pair try karke haar maan lena galat hai. **Saare** pairs check karo.

Ek aur example: x² + 3x + 1 mein a × c = 1, sum 3 chahiye. Pairs (1, 1) ka sum 2 aur (-1, -1) ka sum -2 hai. Sum 3 nahi milta, to ye bhi **integers mein factorise nahi hota.**

---

## Poora tarika ek nazar mein

Koi bhi quadratic trinomial mile, ye kram follow karo:

1. **Common factor** ho to nikalo.
2. **Leading coefficient negative** ho to -1 nikalo.
3. **Fraction ya decimal** ho to LCM se hatao.
4. **Chhupa trinomial** (repeat hone wala bracket ya x⁴, x²) ho to **substitution** karo.
5. **Perfect square** test lagao (b² = 4ac). Ho to seedha (√a·x ± √c)² likho.
6. Nahi to **a × c** ka **factor pair table** banao, sahi jodi dhundho, aur **grouping** karo.
7. Poori table check karne par bhi jodi na mile, to likho ki **integers mein factorise nahi hota.**
8. Substitution kiya ho to **wapas rakho**, aur dekho ki factors **aur toot sakte hain** ya nahi.
9. **Jaanch:** factors multiply karke original milna chahiye.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Product aur sum ko ulta le lena**
Product = **a × c**, sum = **b**. Kuch students product = b aur sum = ac le lete hain. Part A wala reason yaad rakho, phir ye galti nahi hogi.

**Galti 2: a × c negative ho to sum dekhna**
Jab a × c negative ho, to ek number positive aur ek negative hota hai. Table mein **difference** dekho. 12x² - 7x - 12 mein 9 aur 16 ka difference 7 hai, sum nahi.

**Galti 3: Grouping mein minus nikalte waqt sign na badalna**
-4x - 6 mein se -2 nikalo to **-2(2x + 3)** aata hai, -2(2x - 3) nahi. Hamesha jaanch karo: -2 × 3 = -6 ✅

**Galti 4: -1 nikalne ke baad bracket ke andar sab signs na badalna**
-x² + x + 6 = -(x² **-** x **-** 6). Teeno signs badalte hain, sirf pehla nahi.

**Galti 5: Common factor nikalna bhool jana**
3x² - 15x + 18 ko seedha split karne se kaam lamba ho jata hai. Pehle 3 nikalo.

**Galti 6: Substitution ke baad t wapas na rakhna**
(t - 2)(t - 3) answer nahi hai. Wapas rakho: (a + b - 2)(a + b - 3).

**Galti 7: Substitution ke baad aage na todna**
x⁴ - 5x² + 4 = (x² - 1)(x² - 4) par mat ruko. Dono difference of squares hain, aur toot sakte hain.

**Galti 8: Fraction wale mein bahar nikala hua number bhool jana**
x² + (5/6)x + 1/6 = **(1/6)**(2x + 1)(3x + 1). Agar 1/6 likhna bhool gaye, to answer 6 guna bada ho jayega.

**Galti 9: Do variables mein doosra letter bhool jana**
x² + 5xy + 6y² = (x + 2y)(x + 3y). Agar (x + 2)(x + 3) likh diya, to y gayab ho gaya. Jaanch se ye turant pakad mein aata hai.

**Galti 10: Kuch pairs try karke "factorise nahi hota" likh dena**
Pehle **poori** table banao aur saare pairs check karo. Tabhi kaho ki factorise nahi hota.

---

## Quick Recap

- **Splitting kyun kaam karta hai:** (px + q)(rx + s) multiply karne par middle term do tukdon (ps aur qr) mein aata hai. Unka **product = a × c** aur **sum = b**. Splitting is jodne ka ulta hai.
- **Tiles ki tarah socho:** trinomial ko factorise karna = tiles ka poora rectangle banana.
- **Factor pair table:** a × c ke saare pairs likho. a × c positive ho to **sum** dekho, negative ho to **difference**.
- **Negative leading coefficient:** pehle **-1** nikalo.
- **Common factor:** hamesha **sabse pehle** nikalo.
- **Do variables:** doosre letter ko number ki tarah saath le chalo (x² + 5xy + 6y² = (x + 2y)(x + 3y)).
- **Substitution:** repeat hone wali cheez ko t maano, factorise karo, wapas rakho, aur aage todo.
- **Fraction/decimal:** LCM bahar nikalo, phir andar split karo.
- **Perfect square test:** b² = 4ac.
- **Factorise nahi hota agar:** a × c ki **poori table** mein sahi jodi na mile.
- Hamesha **jaanch** karo.

---

## Practice Questions

1. Factorise using a factor pair table:
   (a) x² - 17x + 72
   (b) x² + 4x - 96
   (c) 8x² - 10x - 3
   (d) 15x² + x - 2

2. Take out the common factor first, and then factorise:
   (a) 4x² - 20x + 24
   (b) 5x³ + 15x² - 50x

3. Factorise: -x² + 7x - 10

4. Factorise:
   (a) a² - 9ab + 20b²
   (b) 3x² + 7xy + 2y²

5. Factorise using substitution:
   (a) (x - y)² - 7(x - y) + 12
   (b) x⁴ - 13x² + 36

6. Factorise: x² + (7/12)x + 1/12

7. Check whether each trinomial is a perfect square. If it is, factorise it.
   (a) 16x² - 40x + 25
   (b) 9x² + 12x + 5

8. Which of the following cannot be factorised over integers? Give a reason.
   (a) x² + 2x + 3
   (b) x² + 5x + 4
   (c) x² + 3x + 1
   (d) 2x² + 3x + 1

9. Find all integer values of k for which x² + kx + 6 can be factorised into two factors with integer coefficients.

### Answers

1. (a) a × c = 72 (positive), b = -17, dono negative. Pairs of 72 mein sum 17: **8 aur 9**.
   **(x - 8)(x - 9)**
   Jaanch: x² - 9x - 8x + 72 = x² - 17x + 72 ✅
   (b) a × c = -96 (negative), difference 4 chahiye, bada number positive. Pairs of 96: (8, 12) ka difference 4. Jodi: **12 aur -8**.
   **(x + 12)(x - 8)**
   Jaanch: x² - 8x + 12x - 96 = x² + 4x - 96 ✅
   (c) a × c = 8 × (-3) = -24, difference 10, bada number negative. Pair (2, 12). Jodi: **-12 aur 2**.
   8x² - 12x + 2x - 3 = 4x(2x - 3) + 1(2x - 3) = **(2x - 3)(4x + 1)**
   Jaanch: 8x² + 2x - 12x - 3 = 8x² - 10x - 3 ✅
   (d) a × c = 15 × (-2) = -30, difference 1, bada number positive. Pair (5, 6). Jodi: **6 aur -5**.
   15x² + 6x - 5x - 2 = 3x(5x + 2) - 1(5x + 2) = **(5x + 2)(3x - 1)**
   Jaanch: 15x² - 5x + 6x - 2 = 15x² + x - 2 ✅
2. (a) 4(x² - 5x + 6) = **4(x - 2)(x - 3)**
   (b) 5x(x² + 3x - 10). Andar product -10, sum 3: 5 aur -2. **5x(x + 5)(x - 2)**
   Jaanch: (x + 5)(x - 2) = x² + 3x - 10, aur 5x se multiply: 5x³ + 15x² - 50x ✅
3. -(x² - 7x + 10) = **-(x - 2)(x - 5)**, ya **(x - 2)(5 - x)**
   Jaanch: (x - 2)(5 - x) = 5x - x² - 10 + 2x = -x² + 7x - 10 ✅
4. (a) Product 20, sum -9: -4 aur -5. **(a - 4b)(a - 5b)**
   Jaanch: a² - 5ab - 4ab + 20b² = a² - 9ab + 20b² ✅
   (b) a × c = 6, sum 7: 6 aur 1. 3x² + 6xy + xy + 2y² = 3x(x + 2y) + y(x + 2y) = **(x + 2y)(3x + y)**
   Jaanch: 3x² + xy + 6xy + 2y² = 3x² + 7xy + 2y² ✅
5. (a) t = x - y. t² - 7t + 12 = (t - 3)(t - 4). Wapas rakho: **(x - y - 3)(x - y - 4)**
   (b) t = x². t² - 13t + 36 = (t - 4)(t - 9). Wapas rakho: (x² - 4)(x² - 9). Aage todo:
   **(x - 2)(x + 2)(x - 3)(x + 3)**
   Jaanch: (x² - 4)(x² - 9) = x⁴ - 9x² - 4x² + 36 = x⁴ - 13x² + 36 ✅
6. (1/12)(12x² + 7x + 1). Andar a × c = 12, sum 7: 3 aur 4.
   12x² + 3x + 4x + 1 = 3x(4x + 1) + 1(4x + 1) = (4x + 1)(3x + 1)
   **(1/12)(3x + 1)(4x + 1)**, ya **(x + 1/3)(x + 1/4)**
   Jaanch: (x + 1/3)(x + 1/4) = x² + (1/4)x + (1/3)x + 1/12 = x² + (7/12)x + 1/12 ✅
7. (a) b² = 1600, 4ac = 4 × 16 × 25 = 1600. Barabar hain, **perfect square hai.** 16x² = (4x)², 25 = 5², 2 × 4x × 5 = 40x.
   **(4x - 5)²**
   (b) b² = 144, 4ac = 4 × 9 × 5 = 180. Barabar nahi, **perfect square nahi hai.**
8. (a) **Factorise nahi hota.** a × c = 3. Pairs of 3: (1, 3) sum 4, (-1, -3) sum -4. Sum 2 kisi pair se nahi milta.
   (b) Factorise hota hai: **(x + 1)(x + 4)**.
   (c) **Factorise nahi hota.** a × c = 1. Pairs of 1: (1, 1) sum 2, (-1, -1) sum -2. Sum 3 kisi pair se nahi milta.
   (d) Factorise hota hai: a × c = 2, sum 3: 1 aur 2. **(2x + 1)(x + 1)**.
   To jawab: **(a) aur (c)**.
9. Product 6 wale saare integer pairs, aur unka sum hi k hai:
   | Pair | Sum (= k) |
   |---|---|
   | 1, 6 | 7 |
   | 2, 3 | 5 |
   | -1, -6 | -7 |
   | -2, -3 | -5 |

   **k = 7, 5, -5, -7**

---

Agar bade numbers dekh kar dar lag raha ho, to bas Priya ke mistri ko yaad karo. Wo andaze se tiles nahi lagata, ek system se lagata hai. Aap bhi table banao, saare pairs likho, aur sahi jodi apne aap saamne aa jayegi. Aur agar jodi na mile, to samjho ki rectangle banta hi nahi. Ye bhi ek sahi jawab hai.

**Aage kya:** Ab tak hum squares (x²) tak ruke the. Topic 6 mein hum ek level upar jayenge, **cubes** ki taraf, aur dekhenge ki (a + b)³ khulne par kya banta hai aur 4 terms wale expression ko wapas ek cube mein kaise pehchaante hain.
