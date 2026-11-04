# Chapter: Mensuration

> **Class:** 9 | **Subject:** Mathematics
> **Ye ek naya chapter hai.** Isme hum cheezon ko **naapna** seekhenge: zameen kitni hai, deewar par kitna paint lagega, dabbe mein kitna saaman aayega. Triangle ki baatein [Triangles chapter](../triangles/triangles.md) mein aur area ki pehli jhalak [Quadrilaterals chapter ke Topic 3](../quadrilaterals/quadrilaterals-part3.md) mein dekh chuke hain. Ab un sab ko kaam mein lagayenge.
> **Topics covered in this file:**
> 1. Triangle ka Area aur Heron's Formula

---

# Topic 1: Triangle ka Area aur Heron's Formula

Quadrilaterals chapter ke Topic 3 mein humne dekha tha ki area ek **surface** ka naap hai, aur triangle ka area = **½ × base × height** hota hai. Bas ek dikkat hai: is formula ke liye **height** chahiye. Aur asli zindagi mein height naapna har baar aasan nahi hota. Is topic mein hum ek aisa jaadui formula seekhenge jo **sirf teeno sides** se triangle ka area bata deta hai. Uska naam hai **Heron's Formula**.

---

## Sameer aur traffic island ki kahani

Sameer ke mohalle ke chauraahe par ek **teen kone wala traffic island** hai. Teen sadkein milti hain, aur beech mein ek triangle jaisi zameen bach gayi hai. Nagar nigam ne Sameer ke chacha ko kaam diya: "Is triangle par ghaas lagao. ₹20 prati vargmetre lagega."

Chacha ko sabse pehle **area** chahiye tha. Unhone socha: "½ × base × height laga deta hoon."

Par ek problem thi. Triangle ke beech mein ek **bada sa purana peepal ka pedh** khada tha. Ek kone se saamne wali side tak **seedhi height** naapne ke liye pedh ke aar-paar jaana padta. Wo mumkin hi nahi tha.

Sameer ne kaha: "Chacha, kinaron par to aaram se chal sakte hain. Teeno sides naap lo!"

Unhone naapa:
- Pehli side: **13 m**
- Doosri side: **14 m**
- Teesri side: **15 m**

"Ab kya karein?" chacha ne poocha. "Height to hai hi nahi."

Sameer muskuraya: "Height ki zaroorat hi nahi. **Heron's formula** se sirf teeno sides se area nikal aata hai."

Thodi der baad jawab aaya: **84 vargmetre**. Ghaas ka kharcha = 84 × 20 = **₹1680**.

Ye 84 kaise aaya, yahi is topic mein seekhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Perimeter** | Kisi shape ki **boundary** ki kul lambai, yaani ek chakkar | 3, 4, 5 cm wale triangle ka perimeter = 12 cm |
| **Area** | Boundary ke **andar** ki jagah (surface) | Usi triangle ka area = 6 cm² |
| **Square unit** | Area ki unit: 1 unit × 1 unit ka chhota square | cm², m² |
| **Semi-perimeter (s)** | Perimeter ka **aadha** | 3, 4, 5 wale triangle mein s = 6 |
| **Heron's Formula** | Sirf teeno sides se triangle ka area nikalne ka formula | √[s(s−a)(s−b)(s−c)] |
| **Altitude (height)** | Vertex se saamne wali side par seedhi (90°) line | ½ × base × height mein yahi height hai |

---

## Part A: Perimeter vs Area (chhota sa recall)

Dono mein aksar confusion hota hai, isliye ek baar saaf kar lete hain.

- **Perimeter** = boundary par **chalna**. Agar aap park ke kinare-kinare ek chakkar lagao, to jitna chale wo perimeter hai. Unit: **cm, m** (lambai).
- **Area** = andar ki jagah **dhakna**. Agar aap park mein ghaas bichhao, to jitni ghaas lagi wo area hai. Unit: **cm², m²** (square units).

| Shape | Perimeter | Area |
|---|---|---|
| Rectangle (l, b) | 2(l + b) | l × b |
| Square (side a) | 4a | a² |
| Triangle (sides a, b, c) | a + b + c | ½ × base × height |

Triangle ka area ½ × base × height kyun hota hai, ye Quadrilaterals chapter ke Topic 3 mein dekha tha (triangle ek parallelogram ka aadha hota hai). Aur height yaani **altitude** kya hoti hai, ye [Triangles chapter ke Topic 2](../triangles/triangles-part2.md) mein dekha tha.

**Example:** Ek triangle ka base 8 cm aur height 5 cm hai.
Area = ½ × 8 × 5 = **20 cm²**

---

## Part B: Kuch khaas triangles ka area

Kuch triangles mein height **aasani se** mil jaati hai. Pehle unhe dekhte hain.

### 1. Right triangle

Right triangle mein do sides (legs) aapas mein **90°** par hoti hain. To ek leg ko base maano, doosra apne aap height ban jata hai.

**Area = ½ × leg₁ × leg₂**

**Example:** Legs 6 cm aur 8 cm.
Area = ½ × 6 × 8 = **24 cm²**

### 2. Equilateral triangle (teeno sides a)

Yahan height pata nahi hoti, par hum use nikal sakte hain.

```
            A
           /|\
          / | \
       a /  |h \ a
        /   |   \
       /    |    \
      B-----D-----C
        a/2   a/2
```

Upar se altitude AD daalo. Equilateral triangle mein ye base ko **do barabar hisson** mein baant deti hai: BD = a/2.

Ab ΔABD ek right triangle hai. **Pythagoras theorem** (pichhli classes wala) se:

h² = a² − (a/2)²
h² = a² − a²/4
h² = 3a²/4
h = (√3/2)a

Ab area:
Area = ½ × a × (√3/2)a

**Area = (√3/4) a²**

**Example:** Side 4 cm.
Area = (√3/4) × 16 = **4√3 cm²** ≈ 4 × 1.732 = **6.93 cm²**

### 3. Isosceles triangle (do sides barabar)

Isosceles triangle mein bhi barabar sides ke beech wale vertex se daali altitude base ko **aadha-aadha** kar deti hai. Ye baat Congruence of Triangles chapter mein isosceles triangle ki properties mein dekhi thi.

**Example:** Equal sides 5 cm, base 6 cm.

```
            A
           /|\
        5 / | \ 5
         /  |h \
        B---D---C
          3   3
```

BD = 3 cm. Right triangle ABD mein:
h² = 5² − 3² = 25 − 9 = 16, to **h = 4 cm**
Area = ½ × 6 × 4 = **12 cm²**

Par jab triangle **scalene** ho (teeno sides alag), jaise Sameer ka 13-14-15 wala, tab height nikalna mushkil ho jata hai. Wahan Heron's formula kaam aata hai.

---

## Part C: Heron's Formula

### Thoda sa itihaas

Lagbhag **2000 saal pehle** Egypt ke shehar **Alexandria** mein **Heron** naam ke ek mathematician aur engineer the. Unhone "Metrica" naam ki kitaab mein ye formula likha tha. Zameen naapne waalon ke liye ye bahut kaam ka tha, kyunki khet ke kinaare naapna aasan hai, par uske beech height naapna mushkil.

### Formula

Agar triangle ki sides **a, b, c** hain, to:

**Step 1: Semi-perimeter nikalo.**

**s = (a + b + c) / 2**

**Step 2: Area nikalo.**

**Area = √[ s (s − a) (s − b) (s − c) ]**

Bas itna hi. Height ki koi zaroorat nahi.

### Ye formula kyun sahi hai?

Is formula ka poora proof (derivation) Class 9 ke level se thoda aage ka hai, kyunki usme lambi algebra lagti hai. Isliye abhi hum use **check** karke bharosa banayenge.

**Jaanch: 3, 4, 5 wala triangle**

Ye ek right triangle hai (3² + 4² = 9 + 16 = 25 = 5²). To seedhe formula se:
Area = ½ × 3 × 4 = **6**

Ab Heron's formula se:
- s = (3 + 4 + 5)/2 = 12/2 = **6**
- s − a = 6 − 3 = 3
- s − b = 6 − 4 = 2
- s − c = 6 − 5 = 1
- Area = √(6 × 3 × 2 × 1) = √36 = **6** ✅

Dono tarike se **6**. Formula pakka kaam karta hai.

### Ek tip: root ke andar ka number aasaan karo

Root ke andar bada number aaye, to pehle use **prime factors** mein todo. Phir har factor ke **jode** (pair) bana lo. Har jodi mein se ek number bahar aa jata hai.

Jaise √(21 × 8 × 7 × 6):
- 21 = 3 × 7
- 8 = 2 × 2 × 2
- 7 = 7
- 6 = 2 × 3

Sab milakar: 2 × 2 × 2 × 2 × 3 × 3 × 7 × 7 = 2⁴ × 3² × 7²
√ = 2² × 3 × 7 = 4 × 3 × 7 = **84**

Bina bade multiplication ke jawab mil gaya.

---

## Part D: Solved Examples

### Example 1: Sameer ka traffic island (13, 14, 15 m)

- s = (13 + 14 + 15)/2 = 42/2 = **21**
- s − a = 21 − 13 = 8
- s − b = 21 − 14 = 7
- s − c = 21 − 15 = 6
- Area = √(21 × 8 × 7 × 6)

Upar wali tip se: √(2⁴ × 3² × 7²) = **84 m²**

Ghaas ka kharcha = 84 × ₹20 = **₹1680**

**Jaanch:** 21 × 8 × 7 × 6 = 7056, aur 84 × 84 = 7056 ✅

### Example 2: Isosceles triangle (5, 5, 6 cm)

Part B mein ise height se nikala tha (12 cm²). Ab Heron se:
- s = (5 + 5 + 6)/2 = **8**
- s − a = 3, s − b = 3, s − c = 2
- Area = √(8 × 3 × 3 × 2) = √144 = **12 cm²** ✅

Dono tarike se same.

### Example 3: Equilateral triangle (side 10 cm)

- s = (10 + 10 + 10)/2 = **15**
- s − a = s − b = s − c = 5
- Area = √(15 × 5 × 5 × 5) = √1875

1875 = 3 × 5 × 5 × 5 × 5 = 3 × 5⁴
√1875 = 5² × √3 = **25√3 cm²** ≈ 25 × 1.732 = **43.3 cm²**

**Jaanch:** (√3/4) × 10² = (√3/4) × 100 = 25√3 ✅

### Example 4: Perimeter aur ratio diye hain

Ek triangular plot ka perimeter **120 m** hai, aur sides ka ratio **3 : 4 : 5** hai. Area nikalo.

Sides 3x, 4x, 5x maano.
3x + 4x + 5x = 120, to 12x = 120, aur **x = 10**
Sides: **30 m, 40 m, 50 m**

- s = 120/2 = **60**
- s − a = 30, s − b = 20, s − c = 10
- Area = √(60 × 30 × 20 × 10)

Prime factors: 60 = 2² × 3 × 5, 30 = 2 × 3 × 5, 20 = 2² × 5, 10 = 2 × 5
Sab milakar: 2⁶ × 3² × 5⁴
√ = 2³ × 3 × 5² = 8 × 3 × 25 = **600 m²**

**Jaanch:** 30, 40, 50 ek right triangle hai (900 + 1600 = 2500). To ½ × 30 × 40 = 600 ✅

### Example 5: Isosceles triangle, base aur perimeter diye hain

Ek isosceles triangle ka base **10 cm** aur perimeter **36 cm** hai. Area nikalo.

Barabar sides = (36 − 10)/2 = 26/2 = **13 cm**
Sides: 13, 13, 10

- s = 36/2 = **18**
- s − a = 5, s − b = 5, s − c = 8
- Area = √(18 × 5 × 5 × 8) = √3600 = **60 cm²**

**Jaanch (height se):** Aadha base = 5, to h² = 13² − 5² = 169 − 25 = 144, aur h = 12.
Area = ½ × 10 × 12 = 60 ✅

### Example 6: Alag units ka chakkar

Ek triangle ki sides **50 cm, 1.2 m aur 1.3 m** hain. Area cm² mein nikalo.

Pehle sab **ek unit** mein: 50 cm, 120 cm, 130 cm.

- s = (50 + 120 + 130)/2 = 300/2 = **150**
- s − a = 100, s − b = 30, s − c = 20
- Area = √(150 × 100 × 30 × 20) = √9,000,000 = **3000 cm²**

**Jaanch:** 50² + 120² = 2500 + 14400 = 16900 = 130². Right triangle hai, to ½ × 50 × 120 = 3000 ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: s ki jagah poora perimeter le lena**
3, 4, 5 wale triangle mein agar s = 12 (perimeter) le lo, to:
√(12 × 9 × 8 × 7) = √6048 ≈ 77.8, jo bilkul galat hai. Sahi s = 6 hai, aur area 6.
Yaad rakho: **s = perimeter ka aadha**.

**Galti 2: Square root lagana bhool jana**
s(s − a)(s − b)(s − c) = 36 nikal kar ruk gaye, to area 36 bata doge. Asli area √36 = **6** hai.

**Galti 3: Alag units ko mila dena**
50 cm, 1.2 m, 1.3 m ko seedha 50, 1.2, 1.3 maan liya to answer bekaar ho jayega. Pehle **sab ko ek unit** mein badlo.

**Galti 4: Pehle check na karna ki triangle banta bhi hai ya nahi**
Sides 4, 5, 10 lo. 4 + 5 = 9, jo 10 se chhota hai, to ye **triangle banta hi nahi**. Heron lagaoge to s = 9.5 aur s − c = −0.5 (negative) aayega, aur root ke andar negative number aa jayega.
Isliye pehle [triangle inequality](../congruence-of-triangles/congruence-of-triangles-part4.md) check karo: kisi bhi do sides ka jod teesri se **bada** hona chahiye.

**Galti 5: Area ki unit galat likhna**
Area hamesha **square unit** mein hota hai: cm², m². "84 m" likhna galat hai, "84 m²" sahi hai.

**Galti 6: Equilateral formula mein a² ki jagah a**
Area = (√3/4) **a²** hai, (√3/4) a nahi. Side 10 ho to 25√3 aata hai, 2.5√3 nahi.

---

## Quick Recap

- **Perimeter** = boundary ki lambai (cm, m). **Area** = andar ki jagah (cm², m²).
- Triangle ka area = **½ × base × height**.
- **Right triangle:** ½ × leg₁ × leg₂.
- **Equilateral triangle:** (√3/4) a².
- **Isosceles triangle:** altitude base ko aadha karti hai, phir Pythagoras se height nikalo.
- **Heron's formula:** s = (a + b + c)/2, aur Area = √[s(s − a)(s − b)(s − c)]. Height ki zaroorat nahi.
- Root ke andar ke number ko **prime factors** mein todo, isse kaam aasaan ho jata hai.
- Pehle **units ek jaisi** karo, aur check karo ki **triangle banta bhi hai**.

---

## Practice Questions

1. Find the area of a triangle with sides 9 cm, 12 cm and 15 cm, using Heron's formula. Check your answer using ½ × base × height.

2. Find the area of a triangle with sides 7 cm, 8 cm and 9 cm. Leave your answer in surd form, and also give it correct to two decimal places (take √5 = 2.236).

3. Find the area of an equilateral triangle of side 6 cm, using (a) the formula (√3/4)a², and (b) Heron's formula.

4. An isosceles triangle has equal sides of 10 cm each and a base of 16 cm. Find its area.

5. The sides of a triangle are in the ratio 5 : 12 : 13 and its perimeter is 60 cm. Find its area.

6. Can a triangle have sides 4 cm, 5 cm and 10 cm? What goes wrong if you try to apply Heron's formula to these lengths?

7. A triangular wall has sides 26 m, 28 m and 30 m. Find the cost of painting it at ₹15 per m².

8. State whether each statement is true or false.
   (a) In Heron's formula, s stands for half the perimeter.
   (b) Heron's formula needs the height of the triangle.
   (c) The area of an equilateral triangle with side a is (√3/4)a.
   (d) A triangle with sides 3 cm, 4 cm and 5 cm has an area of 6 cm².

9. The area of an equilateral triangle is 16√3 cm². Find the length of its side.

### Answers

1. s = (9 + 12 + 15)/2 = 18. s − a = 9, s − b = 6, s − c = 3.
   Area = √(18 × 9 × 6 × 3) = √2916 = **54 cm²**
   Jaanch: 9² + 12² = 81 + 144 = 225 = 15², to right triangle hai. ½ × 9 × 12 = 54 ✅

2. s = (7 + 8 + 9)/2 = 12. s − a = 5, s − b = 4, s − c = 3.
   Area = √(12 × 5 × 4 × 3) = √720
   720 = 2⁴ × 3² × 5, to √720 = 2² × 3 × √5 = **12√5 cm²**
   12 × 2.236 = **26.83 cm²** (lagbhag)

3. (a) (√3/4) × 6² = (√3/4) × 36 = **9√3 cm²**
   (b) s = 9, s − a = s − b = s − c = 3. Area = √(9 × 3 × 3 × 3) = √243 = √(81 × 3) = **9√3 cm²** ✅
   Dono same, ≈ 15.59 cm².

4. Sides 10, 10, 16. s = 18. s − a = 8, s − b = 8, s − c = 2.
   Area = √(18 × 8 × 8 × 2) = √2304 = **48 cm²**
   Jaanch: Aadha base 8, to h² = 100 − 64 = 36, aur h = 6. ½ × 16 × 6 = 48 ✅

5. 5x + 12x + 13x = 60, to 30x = 60, aur x = 2. Sides: 10, 24, 26 cm.
   s = 30. s − a = 20, s − b = 6, s − c = 4.
   Area = √(30 × 20 × 6 × 4) = √14400 = **120 cm²**
   Jaanch: 10² + 24² = 100 + 576 = 676 = 26². ½ × 10 × 24 = 120 ✅

6. **Nahi.** 4 + 5 = 9, jo 10 se chhota hai, to ye sides triangle nahi bana sakti (triangle inequality toot jaati hai).
   Heron lagao to s = 19/2 = 9.5 aur s − c = 9.5 − 10 = −0.5 aata hai. Root ke andar ka product **negative** ho jata hai (9.5 × 5.5 × 4.5 × (−0.5) ≈ −117.6), aur negative ka square root real number nahi hota. Yahi ishaara hai ki triangle bana hi nahi.

7. s = (26 + 28 + 30)/2 = 42. s − a = 16, s − b = 14, s − c = 12.
   Area = √(42 × 16 × 14 × 12)
   42 = 2 × 3 × 7, 16 = 2⁴, 14 = 2 × 7, 12 = 2² × 3
   Sab milakar: 2⁸ × 3² × 7², to √ = 2⁴ × 3 × 7 = **336 m²**
   Kharcha = 336 × 15 = **₹5040**
   (Ye Sameer wale 13-14-15 triangle ka theek double size hai. Sides 2 guna hui, to area 2² = 4 guna: 84 × 4 = 336 ✅)

8. (a) **True** ✅. s = (a + b + c)/2.
   (b) **False** ❌. Heron's formula ka sabse bada fayda yahi hai ki height nahi chahiye.
   (c) **False** ❌. Sahi formula (√3/4)a² hai.
   (d) **True** ✅. s = 6, aur √(6 × 3 × 2 × 1) = 6.

9. (√3/4) a² = 16√3
   Dono taraf √3 se divide karo: a²/4 = 16, to a² = 64, aur **a = 8 cm**
   Jaanch: (√3/4) × 64 = 16√3 ✅

---

Ab aapke paas triangle ka area nikalne ke do hathiyar hain: height pata ho to ½ × base × height, aur sirf sides pata hon to Heron's formula. Sameer ke chacha ki tarah aap bhi ab kisi bhi teen kone wali zameen ka area bata sakte ho.

**Agle topic mein:** Agar zameen **chaar kone** wali ho, to kya karein? Ek chhoti si trick hai: use **do triangles** mein kaat do, aur Heron's formula do baar laga do.
