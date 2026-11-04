# Chapter: Simultaneous Linear Equations (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [simultaneous-linear-equations-part2.md](simultaneous-linear-equations-part2.md) se aage chalti hai** (wahan elimination, decimals/fractions saaf karna, aur "kaun sa method kab" tha). Shuruaati topic [simultaneous-linear-equations.md](simultaneous-linear-equations.md) mein hai.
> **Topics covered in this file:**
> 3. Cross-multiplication Method

---

# Topic 3: Cross-multiplication Method

Pichhle topics mein humne do tareeke seekhe: substitution aur elimination. Topic 2 mein Lakhan bhaiya ke juice wale do bill ghatate hi nimbu-paani gayab ho gaya tha, par har baar itna aasaan nahi hota. Topic 2 ke Example 4 (2x + 3y = 12 aur 3x + 4y = 17) mein pehle sochna pada ki x hatayein ya y, aur phir pehli equation ko 3 se aur doosri ko 2 se guna karna pada. Ab sawaal ye hai ki kya koi aisa tareeka hai jahan sochna nahi, bas **numbers bharo aur jawab nikalo**? Haan hai, aur uska naam hai cross-multiplication method.

---

## Zubin ki "formula machine"

Zubin Class 9 mein hai. Uski tuition mein Neelam didi roz alag-alag equations ki pairs dete hain. Zubin ko elimination aata hai, par har baar wahi jhanjhat: "x hataun ya y? Pehli equation ko 3 se guna karun ya doosri ko 2 se?" Ek din wo bola, "Didi, mujhe chai-wali machine jaisa kuch chahiye: ek button dabao, chai nikle. Equation daalo, x aur y nikle. Koi sochna nahi."

Neelam didi hans padi. "Machine to main nahi bana sakti, par ek **formula** zaroor bata sakti hoon. Pehle ek hi baar elimination se ye formula banate hain, kyunki jo cheez khud banayi ho wo yaad bhi rehti hai. Uske baad tum jitni chahe equations us mein daalna."

Aaj hum Zubin ke saath wahi machine banayenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Standard form** | Equation ko aise likhna ki saari cheezein ek taraf aur doosri taraf 0 | 2x + 3y − 13 = 0 |
| **Coefficient** | x ya y ke aage ka number (sign ke saath) | 2x − 5y − 7 = 0 mein a = 2, b = −5 |
| **Constant term (c)** | Wo number jiske saath koi variable nahi, standard form mein, sign ke saath | 2x − 5y − 7 = 0 mein c = −7 |
| **a₁, b₁, c₁** | Pehli equation ke a, b, c | 2x + 3y − 13 = 0 mein 2, 3, −13 |
| **a₂, b₂, c₂** | Doosri equation ke a, b, c | 3x + 2y − 12 = 0 mein 3, 2, −12 |
| **Cross-multiplication** | Tirchhe (cross) numbers ko aapas mein multiply karke ghatana | b₁ × c₂ − b₂ × c₁ |

---

## Part A: Pehle standard form, phir formula

### Standard form: sab kuch "= 0" ke saath

Koi bhi do linear equations ko hum is shakal mein likh sakte hain:

> **a₁x + b₁y + c₁ = 0**
> **a₂x + b₂y + c₂ = 0**

Yahan a₁, b₁, c₁, a₂, b₂, c₂ bas **number** hain (sign ke saath). Zubin ka pehla kaam hamesha yahi hoga: equation ko is form mein laana.

Dhyan dene wali baat: agar equation 2x + 3y = 13 hai, to c₁ = **13 nahi, −13** hoga. Kyunki 13 ko baayein taraf lane par uska sign badal jata hai: 2x + 3y − 13 = 0.

| Jaisi di gayi | Standard form | a | b | c |
|---|---|---|---|---|
| 2x + 3y = 13 | 2x + 3y − 13 = 0 | 2 | 3 | −13 |
| 3x − 5y = 7 | 3x − 5y − 7 = 0 | 3 | −5 | −7 |
| x + 5 = 2y | x − 2y + 5 = 0 | 1 | −2 | 5 |
| y = 4x − 3 | 4x − y − 3 = 0 | 4 | −1 | −3 |
| 3x = −2y | 3x + 2y + 0 = 0 | 3 | 2 | 0 |

Teesri row mein x + 5 = 2y ko "2y" baayein taraf bhej kar x + 5 − 2y = 0 mila, jise x − 2y + 5 = 0 likha. Aakhri row mein c = 0 hai, wo bhi ek number hai, ise "gayab" mat samajhna.

### Formula kahan se aaya? (halka sa derivation, elimination se)

Zubin ne elimination se hi shuruaat ki.

**x nikalte hain.** y ko hatana hai. Pehli equation ko b₂ se, doosri ko b₁ se multiply karte hain, taaki y ke saath dono mein b₁b₂ aa jaye:

- b₂ × (a₁x + b₁y + c₁ = 0) → a₁b₂x + b₁b₂y + b₂c₁ = 0
- b₁ × (a₂x + b₂y + c₂ = 0) → a₂b₁x + b₁b₂y + b₁c₂ = 0

Ab pehli mein se doosri ghatao (b₁b₂y kat gaya):

(a₁b₂ − a₂b₁)x + (b₂c₁ − b₁c₂) = 0

Is se:

> (a₁b₂ − a₂b₁) x = b₁c₂ − b₂c₁

**y nikalte hain.** Ab x hatana hai. Pehli ko a₂ se, doosri ko a₁ se multiply karo:

- a₂ × (a₁x + b₁y + c₁ = 0) → a₁a₂x + a₂b₁y + a₂c₁ = 0
- a₁ × (a₂x + b₂y + c₂ = 0) → a₁a₂x + a₁b₂y + a₁c₂ = 0

Doosri mein se pehli ghatao (a₁a₂x kat gaya):

(a₁b₂ − a₂b₁)y + (a₁c₂ − a₂c₁) = 0

Is se:

> (a₁b₂ − a₂b₁) y = c₁a₂ − c₂a₁

**Dono ko jodo.** Dono mein (a₁b₂ − a₂b₁) common hai. Usse bhaag do (jab wo 0 na ho):

> x = (b₁c₂ − b₂c₁) ÷ (a₁b₂ − a₂b₁)
> y = (c₁a₂ − c₂a₁) ÷ (a₁b₂ − a₂b₁)

Isse ek line mein aise likhte hain:

> **x / (b₁c₂ − b₂c₁) = y / (c₁a₂ − c₂a₁) = 1 / (a₁b₂ − a₂b₁)**

Ye wahi cheez hai, bas "teen cheezein barabar" wali shakal mein. Pehla aur teesra hissa milakar x dega, doosra aur teesra milakar y.

### Arrow-diagram ki trick (yaad rakhne ke liye)

Itne saare letters yaad karna mushkil hai, isliye Zubin ne ek chhoti si trick banayi. Coefficients ko do rows mein is order mein likho: **b, c, a, b**

```
        x          y          1
     --------   --------   --------
     b1   c1     c1   a1     a1   b1
       \ /         \ /         \ /
        X           X           X
       / \         / \         / \
     b2   c2     c2   a2     a2   b2
```

Har block mein **upar-baayein se neeche-daayein** wale arrow (\) ka product **plus**, aur **neeche-baayein se upar-daayein** wale arrow (/) ka product **minus**:

- x ke neeche: b₁ × c₂ − b₂ × c₁
- y ke neeche: c₁ × a₂ − c₂ × a₁
- 1 ke neeche: a₁ × b₂ − a₂ × b₁

Yani har block mein: **(upar-baayein × neeche-daayein) − (neeche-baayein × upar-daayein)**. Ek baar ye pattern pakad liya to formula yaad karne ki zaroorat nahi, bas diagram ban jata hai. Aur kyunki dono taraf tirchhe multiply karte hain, isi liye iska naam **cross-multiplication** hai.

Dhyan rahe: rows ka order hamesha **b, c, a, b** hi hai. Aage "Aam galtiyan" mein dekhenge ki order badalne par kya hota hai.

### Ek hi routine, har sawaal ke liye

Zubin ke liye machine ke steps ye hue:

> **Step 1:** Dono equations ko standard form (= 0) mein likho. Fractions/decimals ho to pehle saaf karo.
> **Step 2:** a₁, b₁, c₁, a₂, b₂, c₂ sign ke saath likh lo.
> **Step 3:** Teeno cross products nikalo: X = b₁c₂ − b₂c₁, Y = c₁a₂ − c₂a₁, D = a₁b₂ − a₂b₁.
> **Step 4:** x = X ÷ D, y = Y ÷ D.
> **Step 5:** Dono equations mein x, y daal kar jaanch karo.

---

## Part B: Solved examples

### Example 1: Seedhe positive numbers

Solve: 2x + 3y = 13 aur 3x + 2y = 12

**Step 1 (standard form):**
- 2x + 3y − 13 = 0 → a₁ = 2, b₁ = 3, c₁ = −13
- 3x + 2y − 12 = 0 → a₂ = 3, b₂ = 2, c₂ = −12

**Step 2 (cross products):**
- X = b₁c₂ − b₂c₁ = 3(−12) − 2(−13) = −36 + 26 = **−10**
- Y = c₁a₂ − c₂a₁ = (−13)(3) − (−12)(2) = −39 + 24 = **−15**
- D = a₁b₂ − a₂b₁ = 2 × 2 − 3 × 3 = 4 − 9 = **−5**

**Step 3:**
- x = X ÷ D = −10 ÷ −5 = **2**
- y = Y ÷ D = −15 ÷ −5 = **3**

**Jaanch:**
- 2(2) + 3(3) = 4 + 9 = 13 ✅
- 3(2) + 2(3) = 6 + 6 = 12 ✅

Dekha, teeno numbers negative aaye, par jab negative ko negative se bhaag diya to jawab positive. Negative aana galat nahi hai.

### Example 2: Negative coefficient

Solve: 3x − 5y = 7 aur 2x + y = 9

**Standard form:**
- 3x − 5y − 7 = 0 → a₁ = 3, b₁ = −5, c₁ = −7
- 2x + y − 9 = 0 → a₂ = 2, b₂ = 1, c₂ = −9

**Cross products:**
- X = b₁c₂ − b₂c₁ = (−5)(−9) − (1)(−7) = 45 + 7 = **52**
- Y = c₁a₂ − c₂a₁ = (−7)(2) − (−9)(3) = −14 + 27 = **13**
- D = a₁b₂ − a₂b₁ = (3)(1) − (2)(−5) = 3 + 10 = **13**

**Answer:**
- x = 52 ÷ 13 = **4**
- y = 13 ÷ 13 = **1**

**Jaanch:**
- 3(4) − 5(1) = 12 − 5 = 7 ✅
- 2(4) + 1 = 8 + 1 = 9 ✅

Yahan dhyan do: "− (1)(−7)" ka matlab "+7" hai (minus ka minus plus). Aise sign sabse zyada fisalte hain.

### Example 3: Equation ko pehle ghumana padega

Solve: 4x + 3y = 2 aur x + 5 = 2y

Doosri equation ke saare terms baayein taraf lao: x + 5 − 2y = 0, yani x − 2y + 5 = 0.

**Standard form:**
- 4x + 3y − 2 = 0 → a₁ = 4, b₁ = 3, c₁ = −2
- x − 2y + 5 = 0 → a₂ = 1, b₂ = −2, c₂ = 5

**Cross products:**
- X = b₁c₂ − b₂c₁ = (3)(5) − (−2)(−2) = 15 − 4 = **11**
- Y = c₁a₂ − c₂a₁ = (−2)(1) − (5)(4) = −2 − 20 = **−22**
- D = a₁b₂ − a₂b₁ = (4)(−2) − (1)(3) = −8 − 3 = **−11**

**Answer:**
- x = 11 ÷ (−11) = **−1**
- y = −22 ÷ (−11) = **2**

**Jaanch:**
- 4(−1) + 3(2) = −4 + 6 = 2 ✅
- (−1) + 5 = 4 aur 2y = 2(2) = 4 ✅

### Example 4: Fractions wali equations

Solve: x/3 + y/2 = 1 aur x/6 − y/4 = 3/2

Pehle fractions saaf karte hain (Topic 2 jaisa).

- Pehli ko 6 se guna (3 aur 2 ka LCM): 2x + 3y = 6
- Doosri ko 12 se guna (6, 4, 2 ka LCM): 2x − 3y = 18

**Standard form:**
- 2x + 3y − 6 = 0 → a₁ = 2, b₁ = 3, c₁ = −6
- 2x − 3y − 18 = 0 → a₂ = 2, b₂ = −3, c₂ = −18

**Cross products:**
- X = b₁c₂ − b₂c₁ = (3)(−18) − (−3)(−6) = −54 − 18 = **−72**
- Y = c₁a₂ − c₂a₁ = (−6)(2) − (−18)(2) = −12 + 36 = **24**
- D = a₁b₂ − a₂b₁ = (2)(−3) − (2)(3) = −6 − 6 = **−12**

**Answer:**
- x = −72 ÷ −12 = **6**
- y = 24 ÷ −12 = **−2**

**Jaanch (original fractions wali equations mein):**
- 6/3 + (−2)/2 = 2 − 1 = 1 ✅
- 6/6 − (−2)/4 = 1 + 0.5 = 1.5 = 3/2 ✅

### Example 5: Mile-jule coefficients

Solve: 7x − 2y = 3 aur 3x + 5y = 13

**Standard form:**
- 7x − 2y − 3 = 0 → a₁ = 7, b₁ = −2, c₁ = −3
- 3x + 5y − 13 = 0 → a₂ = 3, b₂ = 5, c₂ = −13

**Cross products:**
- X = b₁c₂ − b₂c₁ = (−2)(−13) − (5)(−3) = 26 + 15 = **41**
- Y = c₁a₂ − c₂a₁ = (−3)(3) − (−13)(7) = −9 + 91 = **82**
- D = a₁b₂ − a₂b₁ = (7)(5) − (3)(−2) = 35 + 6 = **41**

**Answer:**
- x = 41 ÷ 41 = **1**
- y = 82 ÷ 41 = **2**

**Jaanch:**
- 7(1) − 2(2) = 7 − 4 = 3 ✅
- 3(1) + 5(2) = 3 + 10 = 13 ✅

Zubin ne ye teeno cross products bina ek baar bhi "kaun sa variable hataun?" socha nikaal liye. Wahi uski formula machine thi.

---

## Part C: Jab denominator 0 ho jaye

Formula mein D = a₁b₂ − a₂b₁ se bhaag diya gaya hai. Aur 0 se bhaag nahi ho sakta. To agar kisi pair mein D = 0 nikle, tab?

Ek jhalak dekho: 2x + 3y = 5 aur 4x + 6y = 10. Yahan a₁ = 2, b₁ = 3, a₂ = 4, b₂ = 6. D = 2 × 6 − 4 × 3 = 12 − 12 = **0**.

Is case mein ya to **koi solution nahi hota, ya anginat (infinite) solutions** hote hain. Formula seedha jawab nahi deta. Kaun sa case kab hota hai, aur ise dekhne ka sabse sundar tareeka kya hai, ye **Topic 4** mein samjhenge. Abhi bas itna yaad rakho: **D = 0 aaye to ruk jao, x = X ÷ D mat likho.**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Equation ko "= 0" form mein laaye bina seedhe numbers utha lena**

2x + 3y = 13 mein c₁ = 13 le liya (sahi: −13).
- Galat: X = b₁c₂ − b₂c₁ mein 13 daal diya, to jawab galat aayega.
- Sahi: pehle 2x + 3y − 13 = 0 likho, tab c₁ = −13.

Aadat daal lo: **"= 0" likhe bina a, b, c mat nikalo.**

**Galti 2: Cross products mein sign ki galti**

Example 2 mein b₁c₂ = (−5)(−9) = **+45** hota hai, −45 nahi. Aur "− b₂c₁" ka matlab − (1)(−7) = **+7**. Jo log negative numbers ko bracket mein nahi likhte, wahi yahan fisalte hain.

**Sahi aadat:** har negative number ko bracket mein likho: (−5)(−9) − (1)(−7).

**Galti 3: Order galat likhna**

Formula mein b₁c₂ − b₂c₁ hai. Agar ulta likha, b₂c₁ − b₁c₂, to **X ka sign ulta** ho jayega. Isi tarah D mein agar order badla aur X mein nahi, to x ka sign galat aa jayega.

Example 1 mein agar D = a₂b₁ − a₁b₂ = 9 − 4 = +5 le liya, aur X = −10 hi rakha, to x = −10 ÷ 5 = −2 aa jayega. Jaanch mein 2(−2) + 3y = 13 nahi chalega. Isliye **teeno cross products ek hi pattern se nikalo**: b, c, a, b wale diagram ke hisaab se.

**Galti 4: Y ke liye c, a ka order bhool jana**

y wale block mein order **c₁ a₂ − c₂ a₁** hai, a₁ c₂ ... nahi. Isi liye arrow diagram mein y ke neeche "c a" likha hai. Agar y alag block mein ulta likh diya to y ka sign ulta aa jayega.

**Galti 5: Jaanch na karna**

Jaanch sirf formality nahi hai. Agar sign mein galti hui, to jaanch mein turant pakdi jayegi. Dono equations mein jawab daal kar dekho, dono sahi ho to hi aage badho.

---

## Quick Recap

- Pehle dono equations ko **a₁x + b₁y + c₁ = 0** aur **a₂x + b₂y + c₂ = 0** mein likho. Signs ka dhyan rakho: 2x + 3y = 13 se c = **−13**.
- Formula: **x / (b₁c₂ − b₂c₁) = y / (c₁a₂ − c₂a₁) = 1 / (a₁b₂ − a₂b₁)**.
- Ye elimination ka hi nichod hai: y hatao to x milta hai, x hatao to y milta hai.
- Arrow diagram: rows **b, c, a, b**, har block mein (upar-baayein × neeche-daayein) − (neeche-baayein × upar-daayein).
- x = X ÷ D, y = Y ÷ D, jahan X = b₁c₂ − b₂c₁, Y = c₁a₂ − c₂a₁, D = a₁b₂ − a₂b₁.
- Fractions/decimals ho to pehle saaf karo, phir standard form.
- Agar **D = 0**, to ya koi solution nahi ya anginat solutions. Ye Topic 4 mein.
- Galtiyan: "= 0" form bhoolna, sign ki galti, order ulta likhna. Jaanch zaroor karo.

---

## Practice Questions

1. Solve using the cross-multiplication method: 3x + y = 10 and x + 2y = 5. Verify your answer.

2. Solve: 5x − 3y = 1 and 2x + y = 7. Write a₁, b₁, c₁, a₂, b₂, c₂ clearly before using the formula.

3. Solve: 2x + y = −1 and 3x = −2y. (Hint: what is the value of c₂ in standard form?)

4. Solve: x/3 + y/2 = 4 and x/2 − y/4 = 2. First clear the fractions, then use cross-multiplication.

5. Solve: 2x + 5y = 1 and 3x + 2y = −4.

6. A student solves 3x + 2y = 12 and x − y = 1 and writes c₁ = 12 and c₂ = 1. What is wrong? Find the correct solution.

7. For the pair 4x + 6y = 10 and 2x + 3y = 5, calculate a₁b₂ − a₂b₁. Can you now find x and y directly from the formula? Why or why not?

8. State True or False:
   (a) Before using the formula, both equations must be written in the form ax + by + c = 0.
   (b) For the equation 2x + 3y = 5, the value of c in standard form is 5.
   (c) The denominator a₁b₂ − a₂b₁ is the same for both x and y.
   (d) The formula can be used even when a₁b₂ − a₂b₁ = 0.

### Answers

1. Standard form: 3x + y − 10 = 0 aur x + 2y − 5 = 0. To a₁ = 3, b₁ = 1, c₁ = −10, a₂ = 1, b₂ = 2, c₂ = −5.
   - X = b₁c₂ − b₂c₁ = (1)(−5) − (2)(−10) = −5 + 20 = 15
   - Y = c₁a₂ − c₂a₁ = (−10)(1) − (−5)(3) = −10 + 15 = 5
   - D = a₁b₂ − a₂b₁ = (3)(2) − (1)(1) = 5
   - x = 15 ÷ 5 = **3**, y = 5 ÷ 5 = **1**

   Jaanch: 3(3) + 1 = 10 ✅, 3 + 2(1) = 5 ✅

2. Standard form: 5x − 3y − 1 = 0 aur 2x + y − 7 = 0. To a₁ = 5, b₁ = −3, c₁ = −1, a₂ = 2, b₂ = 1, c₂ = −7.
   - X = (−3)(−7) − (1)(−1) = 21 + 1 = 22
   - Y = (−1)(2) − (−7)(5) = −2 + 35 = 33
   - D = (5)(1) − (2)(−3) = 5 + 6 = 11
   - x = 22 ÷ 11 = **2**, y = 33 ÷ 11 = **3**

   Jaanch: 5(2) − 3(3) = 10 − 9 = 1 ✅, 2(2) + 3 = 7 ✅

3. Standard form: 2x + y + 1 = 0 aur 3x + 2y + 0 = 0. To a₁ = 2, b₁ = 1, c₁ = 1, a₂ = 3, b₂ = 2, c₂ = **0** (hint ka jawab: c₂ = 0).
   - X = (1)(0) − (2)(1) = −2
   - Y = (1)(3) − (0)(2) = 3
   - D = (2)(2) − (3)(1) = 1
   - x = −2 ÷ 1 = **−2**, y = 3 ÷ 1 = **3**

   Jaanch: 2(−2) + 3 = −1 ✅, 3(−2) = −6 aur −2(3) = −6 ✅

4. Pehli ko 6 se guna: 2x + 3y = 24. Doosri ko 4 se guna: 2x − y = 8.
   Standard form: 2x + 3y − 24 = 0 aur 2x − y − 8 = 0. To a₁ = 2, b₁ = 3, c₁ = −24, a₂ = 2, b₂ = −1, c₂ = −8.
   - X = (3)(−8) − (−1)(−24) = −24 − 24 = −48
   - Y = (−24)(2) − (−8)(2) = −48 + 16 = −32
   - D = (2)(−1) − (2)(3) = −2 − 6 = −8
   - x = −48 ÷ −8 = **6**, y = −32 ÷ −8 = **4**

   Jaanch: 6/3 + 4/2 = 2 + 2 = 4 ✅, 6/2 − 4/4 = 3 − 1 = 2 ✅

5. Standard form: 2x + 5y − 1 = 0 aur 3x + 2y + 4 = 0. To a₁ = 2, b₁ = 5, c₁ = −1, a₂ = 3, b₂ = 2, c₂ = 4.
   - X = (5)(4) − (2)(−1) = 20 + 2 = 22
   - Y = (−1)(3) − (4)(2) = −3 − 8 = −11
   - D = (2)(2) − (3)(5) = 4 − 15 = −11
   - x = 22 ÷ −11 = **−2**, y = −11 ÷ −11 = **1**

   Jaanch: 2(−2) + 5(1) = −4 + 5 = 1 ✅, 3(−2) + 2(1) = −6 + 2 = −4 ✅

6. Galti: equation ko "= 0" form mein nahi likha. 3x + 2y = 12 ka standard form 3x + 2y − 12 = 0 hai, to c₁ = **−12**. Isi tarah x − y = 1 se x − y − 1 = 0, to c₂ = **−1**.
   a₁ = 3, b₁ = 2, c₁ = −12, a₂ = 1, b₂ = −1, c₂ = −1.
   - X = (2)(−1) − (−1)(−12) = −2 − 12 = −14
   - Y = (−12)(1) − (−1)(3) = −12 + 3 = −9
   - D = (3)(−1) − (1)(2) = −3 − 2 = −5
   - x = −14 ÷ −5 = **14/5**, y = −9 ÷ −5 = **9/5**

   Jaanch: 3(14/5) + 2(9/5) = 42/5 + 18/5 = 60/5 = 12 ✅, 14/5 − 9/5 = 5/5 = 1 ✅

7. a₁ = 4, b₁ = 6, a₂ = 2, b₂ = 3. D = (4)(3) − (2)(6) = 12 − 12 = **0**. Nahi, ab formula se seedha x aur y nahi nikal sakte, kyunki x = X ÷ D mein 0 se bhaag karna padega, jo possible nahi hai. Aise pair mein ya to koi solution nahi hota, ya anginat. Ye Topic 4 mein samjhenge.

8. (a) **True** ✅. Pehle "= 0" form zaroori hai.
   (b) **False** ❌. 2x + 3y − 5 = 0 hai, to c = −5.
   (c) **True** ✅. x aur y dono ke liye denominator D = a₁b₂ − a₂b₁ hi hai.
   (d) **False** ❌. D = 0 par 0 se bhaag karna padega, to formula seedha nahi chalta.

---

Zubin ki formula machine ab ready hai: standard form, teen cross products, do bhaag, aur jaanch. Thoda practice karoge to ye aadat ban jayegi, aur sochna sach mein kam ho jayega.

**Aage kya?** Ab tak humne equations ko sirf numbers se solve kiya. Topic 4 mein hum unhe **graph par line banakar** dekhenge: do lines kahan milti hain, aur jab D = 0 aaye to wo lines kaisi dikhti hain. Wahi se samajh aayega ki "koi solution nahi" ya "anginat solutions" ka asli matlab kya hai.
