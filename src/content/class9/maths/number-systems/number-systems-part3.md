# Chapter: Number Systems (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [number-systems-part2.md](number-systems-part2.md) se aage chalti hai.** (Topic 1 [number-systems.md](number-systems.md) mein hai.)
> **Topics covered in this file:**
> 3. Irrational Numbers aur Real Numbers

---

# Topic 3: Irrational Numbers aur Real Numbers

Topic 2 mein humne dekha ki har rational number (p/q) ka decimal roop do mein se ek tarah ka hota hai. Ya to wo **ruk jata hai** (terminating, jaise 7/8 = 0.875), ya ek pattern **baar baar repeat** karta hai (non-terminating recurring, jaise 1/7 = 0.142857142857...). Aur ulta bhi sach tha: aisa koi bhi decimal wapas p/q ban sakta hai.

To ek seedha sa sawaal uthta hai: **kya aisa decimal bhi ho sakta hai jo na kabhi ruke, na kabhi repeat kare?** Agar haan, to wo p/q nahi ho sakta. Is topic mein hum inhi "ajeeb" numbers se milenge, aur phir saare numbers ko mila kar ek bada parivaar banayenge: **real numbers**.

---

## Ek gupt club ki kahani

Bahut pehle, Greece mein **Pythagoras** naam ke ek gurudev the. (Haan, wahi jinke naam par triangle wala mashhoor theorem hai.) Unke shishyon ka ek club tha, aur us club ka ek pakka vishwas tha:

> "Duniya ki har lambai ko do poore numbers ke bhaag (p/q) se likha ja sakta hai."

Unhe ye baat itni pasand thi ki wo isse **numbers ki sundarta** maante the.

Phir club ke ek shishya **Hippasus** ne ek chhota sa sawaal socha. Ek square lo jiski har side **1 unit** hai. Uska **diagonal** kitna lamba hai?

```
   D ___________ C
    |         / |
    |       /   |
  1 |     /  ?  |
    |   /       |
    | /         |
   A ----------- B
          1
```

Pythagoras ke apne theorem se (jo aapne pichhli classes mein padha hai):

diagonal² = 1² + 1² = 2, yaani **diagonal = √2**

Hippasus ne bahut koshish ki ki √2 ko p/q mein likh de. 7/5 try kiya (7/5 = 1.4, square 1.96, thoda kam). 17/12 try kiya (square 2.0069..., thoda zyada). Har fraction ya thoda kam padta, ya thoda zyada. **Theek 2 kabhi nahi aaya.**

Aur phir unhone **saabit** kar diya ki ye kabhi ho hi nahi sakta. Kehte hain ki club wale is khoj se bahut pareshan hue, kyunki unka pyaara vishwas toot gaya tha. Kahani ka asli hissa kitna sach hai, ye koi pakka nahi jaanta. Par **khoj bilkul sach thi**: ek aisi lambai mil gayi thi jo p/q nahi hai.

Aaj hum us khoj ko aaram se, kadam kadam samjhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Non-terminating non-recurring decimal** | Aisa decimal jo na kabhi ruke, na kisi pattern ko baar baar dohraye | 0.101001000100001... |
| **Irrational number** | Wo number jise p/q (q ≠ 0, p aur q integers) mein likha hi na ja sake | √2, √3, π |
| **Real number** | Saare rational aur irrational numbers milakar | 5, −3/4, 0.333..., √2, π |
| **Proof by contradiction** | Ulta maan kar chalo, aur dikhao ki usse koi bematlab baat nikalti hai | √2 rational maano, aur galti pakdo |
| **Square root spiral** | Chhote right triangles jodkar √2, √3, √4... banane wala ghoomta hua chitra | Neeche Part E mein |
| **Perfect square** | Kisi poore number ka square | 1, 4, 9, 16, 25 |

---

## Part A: Na rukne wale, na dohrane wale decimals

Topic 2 mein humne do tarah ke decimals dekhe the:
- **Rukne wale:** 0.25, 3.875
- **Dohrane wale:** 0.333..., 0.142857142857...

Ab ye dekho:

**0.101001000100001...**

Pattern samjho: pehle 1, phir 0, phir 1, phir **do** 0, phir 1, phir **teen** 0, phir 1, phir **chaar** 0...

| Hissa | 1 | 0 | 1 | 00 | 1 | 000 | 1 | 0000 | 1 | ... |
|---|---|---|---|---|---|---|---|---|---|---|

Har baar zeros ki ginti **ek badh jaati hai**. Isliye:
- Ye kabhi **rukta nahi** (har 1 ke baad aur zeros, aur unke baad phir 1).
- Ye kabhi **repeat nahi hota**. Repeat hone ka matlab hota ki ek **fixed tukda** (jaise "142857") baar baar aaye. Yahan har agla tukda pichhle se lamba hai, to koi fixed tukda nahi hai.

Ek aur example:

**0.12345678910111213...**

Yahan decimal ke baad bas 1, 2, 3, 4, ... poore numbers ek ke baad ek likhte jao. Numbers kabhi khatam nahi hote, aur bade hote jaate hain (10, 11, ..., 100, ...). Koi ek tukda baar baar nahi aata.

### Dhyan rakhne wali baat

"Pattern hai" aur "repeat hota hai" alag baatein hain.
- 0.101001000100001... mein **pattern** hai (zeros badhte ja rahe hain), isliye hum aage likh pa rahe hain.
- Par **repeat** nahi hai, kyunki koi fixed block dohraya nahi ja raha.

Topic 2 mein humne dekha tha ki har rational ka decimal ya to rukta hai ya repeat hota hai. To aise decimals **rational ho hi nahi sakte**. Yahi hamare naye numbers hain.

---

## Part B: Irrational numbers

> **Irrational number** wo number hai jise **p/q** ki shakal mein nahi likha ja sakta (jahan p aur q integers hain aur q ≠ 0).

Decimal ki bhasha mein:

> Irrational number ka decimal **non-terminating aur non-recurring** hota hai.

"Ir" ka matlab hai "nahi". Ir-rational = jo rational nahi hai.

### Mashhoor irrational numbers

| Number | Decimal ki shuruaat | Note |
|---|---|---|
| √2 | 1.41421356... | Hippasus wala diagonal |
| √3 | 1.73205080... | |
| √5 | 2.23606797... | |
| π | 3.14159265... | Circle ki circumference ÷ diameter |
| 0.101001000... | | Part A wala |

### π aur 22/7 ka chakkar

Bahut se bachche sochte hain ki **π = 22/7**. Ye sach nahi hai.
- 22/7 = 3.142857142857... (ye repeat hota hai, to rational hai)
- π = 3.14159265358... (ye kabhi repeat nahi hota, irrational hai)

Dono pehle do decimal places tak milte hain (3.14), phir alag ho jaate hain. Isliye **22/7 sirf π ka ek achha andaaza (approximation)** hai, jo calculation aasan karne ke liye use hota hai. Isi tarah 3.14 bhi sirf andaaza hai.

### Kis number ka square root irrational hai?

| √n | n perfect square hai? | Result |
|---|---|---|
| √4 | Haan (2²) | **2, rational** |
| √9 | Haan (3²) | **3, rational** |
| √2 | Nahi | **Irrational** |
| √3 | Nahi | **Irrational** |
| √8 | Nahi | **Irrational** |
| √49 | Haan (7²) | **7, rational** |

> **Rule:** Agar n ek positive integer hai aur **perfect square nahi** hai, to **√n irrational** hota hai. Agar perfect square hai, to √n ek poora number (rational) hai.

To "root" dikhte hi irrational mat maan lena. √4 aur √49 bilkul seedhe-saadhe rational numbers hain.

---

## Part C: √2 irrational kyun hai? (Proof)

Hippasus ki khoj ko ab hum khud saabit karenge. Isme **proof by contradiction** lagega: **ulta maan lo, aur dikhao ki usse koi naamumkin baat nikalti hai.**

### Pehle ek chhoti si zaroori baat

**Agar kisi number ka square even hai, to wo number khud bhi even hota hai.**

Kyun? Odd numbers ke squares dekho:
- 1² = 1, 3² = 9, 5² = 25, 7² = 49

Sab **odd** hain. Odd × odd hamesha odd hota hai. To agar p² even hai, to p odd nahi ho sakta (warna p² odd hota). **Isliye p even hai.**

### Ab proof

**Maan lo** ki √2 rational hai. Tab use aise likh sakte hain:

√2 = p/q

jahan p aur q poore numbers hain, q ≠ 0, aur fraction **sabse chhote roop** mein hai, yaani p aur q ka koi common factor nahi (jaise 3/4, 6/8 nahi).

**Kadam 1:** Dono taraf square karo.
2 = p²/q², yaani **p² = 2q²**

**Kadam 2:** 2q² to 2 ka multiple hai, to **p² even** hai. Upar wali baat se **p bhi even** hai. To p = 2k likh sakte hain (k koi poora number).

**Kadam 3:** p = 2k ko p² = 2q² mein rakho:
(2k)² = 2q²
4k² = 2q²
**q² = 2k²**

**Kadam 4:** Ab q² bhi even hai, to **q bhi even** hai.

**Kadam 5:** p bhi even, q bhi even. Matlab dono mein **2 common factor** hai.

**Par** humne shuru mein maana tha ki p aur q ka **koi common factor nahi**. Ye ek **contradiction** (ulti baat) hai.

**Nateeja:** Hamara shuru wala maanna ("√2 rational hai") galat tha. Isliye **√2 irrational hai.** Saabit!

> Proof ka saar: "Agar √2 = p/q hota, to p aur q dono even hote. Par sabse chhote fraction mein dono even nahi ho sakte. Isliye √2 = p/q ho hi nahi sakta."

Isi tarah ka proof √3, √5 waghera ke liye bhi chalta hai. Abhi ke liye √2 wala samajh lena kaafi hai.

---

## Part D: √2 ko number line par dikhana

Irrational hone ka matlab ye nahi ki √2 "kahin nahi" hai. √2 ek **pakki lambai** hai (Hippasus ka diagonal), to number line par uski ek **pakki jagah** hai. Use dhundhte hain.

Isme Pythagoras theorem lagega (pichhli classes wala): right triangle mein **hypotenuse² = base² + height²**.

### √2 ke steps

1. Number line banao. 0 ko **O** aur 1 ko **A** kaho. Yaani **OA = 1 unit**.
2. A par OA ke **perpendicular** (90° par) ek line kheencho, aur us par **AB = 1 unit** naapo.
3. O ko B se jodo. Triangle OAB ek right triangle hai, to:
   OB² = OA² + AB² = 1² + 1² = 2, yaani **OB = √2**
4. Compass ki nok **O** par rakho, aur use **B** tak kholo (radius = OB = √2).
5. Arc ghumao jab tak wo number line ko kaate. Wo point **P** hai. **OP = √2.**

```
            B
            |\
          1 | \  √2
            |  \
   ---------O---A---P----2------->
            0   1  √2
```

(Chitra sirf andaaza hai. Asal mein B, A ke theek upar hoga, aur arc O ko centre maan kar B se number line tak aata hai.)

P lagbhag 1.414 par aata hai, yaani 1 aur 2 ke beech, 1.5 se thoda pehle.

### √3 ke steps

Ab √2 ko seedhi tarah use karo.

1. Upar wale chitra mein OB = √2 hai.
2. B par OB ke **perpendicular** ek line kheencho, aur us par **BD = 1 unit** naapo.
3. O ko D se jodo. Triangle OBD right triangle hai:
   OD² = OB² + BD² = (√2)² + 1² = 2 + 1 = 3, yaani **OD = √3**
4. Compass O par, radius OD, aur arc ko number line tak ghumao. Wo point **√3** hai (lagbhag 1.732).

**Jaanch:** 1.732 × 1.732 ≈ 2.9998, jo lagbhag 3 hai ✅

---

## Part E: Square root spiral

Part D ka tareeka aage badhate jao, to ek sundar ghoomta hua chitra banta hai.

1. O se shuru karo. **OP₁ = 1 unit.**
2. P₁ par OP₁ ke perpendicular **P₁P₂ = 1 unit**. To **OP₂ = √2**.
3. P₂ par OP₂ ke perpendicular **P₂P₃ = 1 unit**. To **OP₃ = √(2 + 1) = √3**.
4. P₃ par OP₃ ke perpendicular **P₃P₄ = 1 unit**. To **OP₄ = √(3 + 1) = √4 = 2**.
5. Aise hi chalte raho: √5, √6, √7, ...

```
              P₃
             /  \
          1 /    \
           /  √3  \
       P₄ /        \ P₂
         \          |
       √4 \ /  \√2  | 1
           .____\___|
           O    1   P₁
```

(Ye chitra sirf idea dikhata hai. Har baar bahar wali side 1 unit hoti hai, aur har nayi line O se nikalti hai.)

**Pattern:** Har agle triangle mein:
naya hypotenuse² = pichhla hypotenuse² + 1²

Isliye lambaiyan √1, √2, √3, √4, √5, ... banti hain. Beech beech mein rational bhi aate hain (√4 = 2, √9 = 3), aur baaki sab irrational hain.

---

## Part F: Do numbers ke beech irrational number dhundhna

Topic 1 mein humne dekha tha ki do rational numbers ke beech anant rational numbers hote hain. Irrationals ke saath bhi aisa hi hai.

**Trick:** Do numbers ke decimals likho, aur beech mein aisa decimal banao jo **na ruke, na repeat ho**.

### Example 1: 1/7 aur 2/7 ke beech ek irrational number

Decimals nikalo (Topic 2 wala lamba bhaag):
- 1/7 = 0.142857142857...
- 2/7 = 0.285714285714...

Beech mein koi aisa decimal chahiye jo 0.1428... se bada aur 0.2857... se chhota ho, aur na ruke, na repeat ho. Jaise:

**0.150150015000150000...**

(Shuruaat 0.15 se hai, jo 0.1428 aur 0.2857 ke beech hai. Uske baad 1, 5 aur badhte hue zeros, to ye repeat nahi hoga.)

**Jaanch:** 0.142857... < 0.15015... < 0.285714... ✅

Aur bhi bana sakte ho: 0.2010010001..., 0.25252252225..., anginat.

### Example 2: √2 aur √3 ke beech ek irrational number

- √2 ≈ 1.414
- √3 ≈ 1.732

Beech mein: **1.5050050005...** (5 ke baad zeros ek ek karke badhte hain)

**Jaanch:** 1.414... < 1.505... < 1.732... ✅

### Example 3: 2 aur 3 ke beech ek irrational number

Socho: 2 = √4 aur 3 = √9. To √5, √6, √7, √8 sab 2 aur 3 ke beech hain, aur irrational hain (5, 6, 7, 8 perfect squares nahi hain).

Jawab: **√5** (≈ 2.236). Ya √6, √7, √8.

### Example 4: 0.1 aur 0.12 ke beech ek rational aur ek irrational number

- Rational: **0.11** (ye rukta hai)
- Irrational: **0.1101001000100001...**

**Jaanch:** 0.1 < 0.11 < 0.12 ✅ aur 0.1 < 0.1101001... < 0.12 ✅

---

## Part G: Real numbers, poora parivaar

Ab saare numbers ko ek saath rakho.

> **Real numbers (R)** = saare **rational numbers** + saare **irrational numbers**

Topic 1 wala parivaar ab poora ho gaya:

```
R  (Real numbers)
├── Q  (Rational numbers: p/q)
│   └── Z  (Integers: ..., −2, −1, 0, 1, 2, ...)
│       └── W  (Whole numbers: 0, 1, 2, 3, ...)
│           └── N  (Natural numbers: 1, 2, 3, ...)
│   (Q mein fractions bhi: 1/2, −3/4, 0.333...)
│
└── Irrational numbers  (√2, √3, √5, π, 0.101001000...)
```

Seedhi bhasha mein:

**N ⊂ W ⊂ Z ⊂ Q ⊂ R**, aur **irrationals bhi R ke andar** hain.

Do zaroori baatein:
1. Koi bhi real number **ya to rational hai ya irrational**. Dono ek saath nahi, aur dono mein se koi na ho, ye bhi nahi.
2. Rational aur irrational ka **koi common number nahi** hai. Ye do alag dabbe hain jo milkar R banate hain.

### Number line par koi khaali jagah nahi

Ab ek bahut sundar baat.

> **Har real number ka number line par theek ek point hota hai, aur number line ka har point theek ek real number hota hai.**

Isse aise socho: agar number line par sirf rational numbers hote, to beech beech mein **chhed** reh jaate. Jaise √2 wali jagah khaali rehti, kyunki koi rational wahan nahi baithta. Irrationals un saare chhedon ko bhar dete hain.

Isliye **real numbers ki number line poori tarah "bhari hui"** hai: na koi gap, na koi point bina number ke. Isiliye number line ko kabhi kabhi **real number line** bhi kehte hain.

---

## Part H: Number ko pehchanna (classify karna)

**Steps:**
1. Agar root ho, to dekho ki andar **perfect square** hai ya nahi.
2. Agar decimal ho, to dekho ki wo **rukta hai, repeat hota hai, ya dono nahi**.
3. Agar fraction ho (q ≠ 0), to **rational** hai.

| Number | Kaam | Rational / Irrational |
|---|---|---|
| √9 | = 3 | **Rational** |
| √7 | 7 perfect square nahi | **Irrational** |
| 0.3333... | Repeat hota hai | **Rational** (= 1/3) |
| 2.010010001... | Na rukta, na repeat | **Irrational** |
| π | | **Irrational** |
| 22/7 | p/q hai | **Rational** |
| −√16 | = −4 | **Rational** |
| √(16/25) | = 4/5 | **Rational** |
| √0.09 | = 0.3 (kyunki 0.3 × 0.3 = 0.09) | **Rational** |
| 0 | = 0/1 | **Rational** |
| 1.4142 | Rukta hai (ye √2 nahi, uska andaaza hai) | **Rational** |

Aakhri row dhyan se dekho. **1.4142** ek rukta hua decimal hai, to rational hai. √2 ka decimal kabhi nahi rukta, isliye 1.4142 sirf uska andaaza hai.

### Rational aur irrational ko jodne ya guna karne ka kya?

Jaise 2 + √3 ya 2√3 rational hai ya irrational? Ye sawaal **Topic 4** ka hai, jahan hum real numbers par operations dekhenge.

---

## Aam galtiyan (bachke rehna)

**Galti 1: π = 22/7 maan lena**
22/7 = 3.142857... (repeat hota hai, rational). π = 3.14159... (irrational). 22/7 sirf andaaza hai.

**Galti 2: Har root ko irrational samajhna**
√4 = 2, √25 = 5, √(9/16) = 3/4. Ye sab rational hain. Root irrational tabhi hai jab andar perfect square na ho.

**Galti 3: "Pattern hai" ko "repeat" samajh lena**
0.101001000... mein pattern hai, par koi fixed tukda repeat nahi hota. Isliye irrational hai.

**Galti 4: Calculator ka answer dekh kar rational bol dena**
Calculator √2 = 1.4142135 dikhata hai, kyunki uski screen choti hai. Isse √2 ruka hua decimal nahi ban jata. Asli √2 aage bhi chalta rehta hai, bina ruke, bina repeat hue.

**Galti 5: Proof mein "sabse chhota roop" wali shart bhool jana**
√2 = p/q likhte waqt ye zaroor kaho ki p aur q ka koi common factor nahi. Contradiction isi shart se aata hai. Ye shart na ho to proof adhoora hai.

**Galti 6: Number line par √2 ka point "1.4" par laga dena**
√2 ki jagah compass se nikalte hain, jo 1.414... par aati hai. 1.4 par point lagana √2 nahi, 1.4 (= 7/5) hai.

**Galti 7: Ek number ko rational aur irrational dono kehna**
Koi bhi real number sirf ek hi dabbe mein aata hai. Ya rational, ya irrational.

---

## Quick Recap

- **Non-terminating non-recurring decimal:** na ruke, na koi fixed tukda repeat ho (jaise 0.101001000...).
- **Irrational number:** jise p/q mein na likh sakein. Iska decimal non-terminating non-recurring hota hai. Examples: √2, √3, √5, π.
- **π ≠ 22/7.** 22/7 sirf andaaza hai.
- **√n** irrational hai agar n perfect square nahi hai. √4, √9 jaise rational hain.
- **√2 irrational hai.** Proof: √2 = p/q (sabse chhota roop) maano, to p aur q dono even nikalte hain, jo contradiction hai.
- **√2 aur √3** number line par Pythagoras aur compass se: OB = √(1² + 1²) = √2, phir OD = √(2 + 1) = √3.
- **Square root spiral:** har baar 1 unit ki perpendicular jodo, to √2, √3, √4, ... milte hain.
- Do numbers ke beech **anant irrationals** hote hain. Na rukne, na dohrane wala decimal banao.
- **Real numbers = rationals + irrationals.** N ⊂ W ⊂ Z ⊂ Q ⊂ R.
- **Har real number ka number line par ek hi point, aur har point ka ek hi real number.** Number line mein koi gap nahi.

---

## Practice Questions

1. Classify each number as rational or irrational:
   (a) √25  (b) √12  (c) 0.676767...  (d) 1.010010001...  (e) 7/3  (f) √(4/9)  (g) π  (h) 3.1416

2. Is 22/7 equal to π? Explain your answer using their decimal forms.

3. Write two irrational numbers between 1/7 and 2/7.

4. Write one rational number and one irrational number between 0.2 and 0.21.

5. Find three irrational numbers between 3 and 4.

6. Describe, step by step, how to locate √2 on the number line.

7. Starting with OP₁ = 1 unit, and adding a 1-unit perpendicular at each step, what are the lengths OP₂, OP₃, OP₄ and OP₅ in a square root spiral?

8. State whether each statement is true or false. Give a reason.
   (a) Every real number is either rational or irrational.
   (b) Every square root is irrational.
   (c) The decimal expansion of an irrational number never ends and never repeats.
   (d) There are points on the number line that do not represent any real number.

9. In the proof that √2 is irrational, why is it important to assume that p/q is in its lowest terms?

### Answers

1. (a) √25 = 5, **rational**
   (b) 12 perfect square nahi hai, to √12 **irrational**
   (c) Repeat hota hai (67 dohraya ja raha hai), **rational**
   (d) Na rukta, na repeat, **irrational**
   (e) p/q roop, **rational**
   (f) √(4/9) = 2/3, **rational**
   (g) **Irrational**
   (h) Rukta hua decimal, **rational** (ye π nahi, sirf andaaza hai)

2. **Nahi.** 22/7 = 3.142857142857... jo repeat hota hai, to rational hai. π = 3.14159265... jo na rukta hai na repeat hota hai, to irrational hai. Dono sirf 3.14 tak milte hain. 22/7 bas π ka andaaza hai.

3. 1/7 = 0.142857... aur 2/7 = 0.285714...
   Do irrationals: **0.150150015000...** aur **0.2010010001...**
   Jaanch: 0.142857... < 0.15015... < 0.2010... < 0.285714... ✅

4. Rational: **0.205** (rukta hai).
   Irrational: **0.2050050005...** (5 ke baad badhte hue zeros).
   Jaanch: 0.2 < 0.205 < 0.21 ✅ aur 0.2 < 0.20500500... < 0.21 ✅

5. 3 = √9 aur 4 = √16. Beech mein √10, √11, √12, √13, √14, √15 sab irrational hain.
   Teen jawab: **√10, √11, √12** (ya decimal roop jaise 3.101001000...).

6. O = 0 aur A = 1 lo (OA = 1). A par perpendicular kheencho aur AB = 1 unit naapo. OB jodo: OB² = 1² + 1² = 2, to OB = √2. Compass O par rakho, radius OB lo, aur arc ko number line tak ghumao. Jahan arc kaate, wahi **√2** hai.

7. OP₂ = **√2**, OP₃ = **√3**, OP₄ = **√4 = 2**, OP₅ = **√5**.
   (Har baar: naya² = pichhla² + 1.)

8. (a) **True** ✅. Real numbers rationals aur irrationals milkar bante hain, aur har number inme se theek ek dabbe mein hota hai.
   (b) **False** ❌. √4 = 2, √9 = 3 rational hain. Sirf non-perfect squares ke root irrational hote hain.
   (c) **True** ✅. Yahi irrational ki pehchaan hai.
   (d) **False** ❌. Number line ka har point ek real number hai. Irrationals saare gaps bhar dete hain.

9. Proof mein hum dikhate hain ki p aur q **dono even** nikalte hain, yaani dono mein 2 common hai. Ye baat tabhi "galat" (contradiction) banti hai jab humne pehle maana ho ki p/q **sabse chhote roop** mein hai, yaani koi common factor nahi. Ye shart na ho, to "dono even" mein koi takraav nahi hota, aur proof poora nahi hota.

---

Agar √2 wala proof pehli baar mein poora samajh na aaye, to koi baat nahi. Bas uska saar yaad rakho: "√2 = p/q maano to p aur q dono even ban jaate hain, jo ho nahi sakta." Hippasus ko bhi ye baat samajhne mein waqt laga tha!

Agle topic (Topic 4) mein hum dekhenge ki jab rational aur irrational numbers jude ya guna hon (jaise 2 + √3, √2 × √8) to kya banta hai, kisi bhi √x ko number line par kaise dikhate hain, aur **nth root** kya hota hai.
