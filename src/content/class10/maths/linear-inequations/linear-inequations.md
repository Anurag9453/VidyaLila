# Chapter: Linear Inequations

> **Class:** 10 | **Subject:** Mathematics
> **Ye Class 10 Maths ka chhatha chapter hai.** Pichhle chapter ki aakhri file ([geometric-progressions-part5.md](../geometric-progressions/geometric-progressions-part5.md): Geometric Progressions ka saar) se hum yahan aaye hain. Wahan chapter ke aakhir mein aage ki jhalak di thi: wo sawaal aayenge jab baat "barabar" ki nahi, "se zyada" ya "se kam" ki ho, to kya karein? Class 9 ke saathi: [number-systems.md](../../../class9/maths/number-systems/number-systems.md) (N, W, Z), [number-systems-part3.md](../../../class9/maths/number-systems/number-systems-part3.md), Part D (number line) aur [linear-equations-in-two-variables.md](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables.md) (ek variable ki equation).
> **Topics covered in this file:**
> 1. Barabar Nahi, Bada Ya Chhota: Inequation Kya Hoti Hai?

---

# Topic 1: Barabar Nahi, Bada Ya Chhota: Inequation Kya Hoti Hai?

Ab tak tumne jitni bhi equations dekhi, sabme beech mein "=" tha, aur aksar ek hi jawab nikalta tha. Par roz ki zindagi mein bahut saare niyam "barabar" ke nahi, **"limit"** ke hote hain: "isse zyada nahi", "isse kam nahi". Class 9 mein inequalities ka koi chapter nahi tha, isliye ye chapter bilkul naya hai. Is topic mein hum limit ki bhasha ko symbols mein likhna, true aur false kathan (statement) pehchanna, aur ek naya sawaal samajhna seekhenge: jab jawab **ek number nahi, numbers ka poora jhund** ho, to use kaise likhein.

---

## Nikita aur lift ka board

Nikita apni society ke lift mein Papa ke saath neeche utar rahi thi. Lift ke andar ek board laga tha: **"Maximum 8 persons."** Nikita ne pehli baar dhyan se padha aur sochne lagi: "Maximum 8 ka matlab kya hai? Kya lift mein **theek 8** log hi chadh sakte hain?"

Tab tak pehli manzil par 3 log aur chadh gaye, phir 2 aur. Lift chalti rahi. Papa hanse: "Dekho, 3, 5 ya 7 log bhi chadh sakte hain. Aur akeli tum bhi. Board ne 8 nahi bataya, **8 tak** ki chhoot di hai." Nikita ne ginti shuru ki: 1, 2, 3, ..., 8 allowed. Aur 9? Nahi.

Shaam ko Mummy ke saath wo ek cinema hall gayi. Ticket window par ek board tha (maan lo ek hall ka niyam): **"12 saal se kam ke bachche ke saath koi bada hona zaroori hai."** Uske chhote cousin ki umar 9 thi, to uske saath bada chahiye tha. Nikita 15 ki thi, to use nahi. Ghar aate hue wo soch rahi thi: "Dono boards mein '=' kahin nahi tha. Fir bhi ye bilkul pakke niyam the. Inhe maths mein kaise likhte honge? Aur jawab '8' ya '12' jaisa ek number to nahi, bahut saare numbers the!"

Aaj hum ye hi seekhenge: **limit wale sawaalon ko symbols mein kaise likhein, aur unke "bahut saare jawab" ko kaise sambhaalein.**

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Inequality** | Do cheezon ko "bada ya chhota" ke symbol (<, >, ≤, ≥) se jodta hua kathan. Ye true bhi ho sakta hai, false bhi. | 3 < 7 true hai; −5 > 2 false hai |
| **Inequation** | Wo inequality jisme ek variable (jaise x) ho. x ki keemat par dekha jaata hai ki wo true banti hai ya false. | x + 2 < 6 |
| **Replacement set** | Wo set jisme se x ko chunne ki ijaazat hai. Hum khud tay karte hain: N, W, Z, R ya koi di hui list. | x ∈ {1, 2, 3} |
| **Solution set** | Replacement set ke wo saare members jinke liye inequation **true** ho jaati hai. | Example 3 |
| **Set-builder form** | Set ko "x aise ki ..." likhkar batana: braces mein x, ek colon, phir shartein. | {x : x ∈ Z, x < 4} |

---

## Class 9 se yaad

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [number-systems.md](../../../class9/maths/number-systems/number-systems.md), Part A | **N = {1, 2, 3, 4, 5, ...}**, **W = {0, 1, 2, 3, 4, ...}**, **Z = {..., −3, −2, −1, 0, 1, 2, 3, ...}** | Replacement sets (Part D, Part F) |
| [number-systems.md](../../../class9/maths/number-systems/number-systems.md), Part D | Number line: right ki taraf number bada, left ki taraf chhota (−3 < −1). [number-systems-part3.md](../../../class9/maths/number-systems/number-systems-part3.md), Part D mein √2 ko bhi apni pakki jagah mili thi | Part B, Figure 1.1 |
| [linear-equations-in-two-variables.md](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables.md) | "Linear equation in one variable wo equation hai jisme sirf ek variable ho aur uski power 1 ho." | Part C: equation aur inequation ka farak |

R ka matlab hai saare real numbers (rational aur irrational dono: Class 9 ka poora parivaar). Isse hum Part F mein milenge.

---

## Part A: Limit ki bhasha, symbols mein

Chaar symbols yaad rakho:

- **<** : "se chhota" (less than). 3 < 7 padhte hain "3, 7 se chhota hai".
- **>** : "se bada" (greater than). 7 > 3.
- **≤** : "se chhota ya barabar" (less than or equal to). Isme "barabar" bhi shamil hai.
- **≥** : "se bada ya barabar" (greater than or equal to).

Nukila kona hamesha **chhote number ki taraf** hota hai. Ab roz ki bhasha ko symbols mein badalne ki table:

| Board ya vaakya ki bhasha | Symbol | Hinglish mein |
|---|---|---|
| less than, fewer than, below, under | < | "se kam", "se neeche" |
| more than, greater than, exceeds, over, above | > | "se zyada", "se upar" |
| at most, maximum, not more than, no more than, does not exceed, up to | ≤ | "zyada se zyada", "se zyada nahi" |
| at least, minimum, not less than, no less than | ≥ | "kam se kam", "se kam nahi" |
| exactly, equal to | = | "theek itna" |

Dhyan do: "se zyada nahi" ka matlab hai **≤** (barabar tak chalega), aur "se zyada" ka matlab hai **>** (barabar nahi chalega).

### Example 1: Boards ko symbols mein likho

Variable ke liye: n = log (persons), a = umar (saal), w = wazan (kg), p = khiladi. Likho:

(i) Lift: "Maximum 8 persons."
(ii) Hall: "12 saal se kam ke bachche ke saath bada zaroori hai."
(iii) Station ka niyam (maan lo): "Ek yatri ka luggage 40 kg se zyada nahi ho sakta."
(iv) Team banane ke liye "kam se kam 5 khiladi" chahiye.
(v) Wahi station: "40 kg se zyada wazan par extra charge lagega."

**Hal:**
(i) "Maximum" = zyada se zyada, to **n ≤ 8**.
(ii) "Se kam" = **a < 12**.
(iii) "Se zyada nahi" = **w ≤ 40**.
(iv) "Kam se kam" = **p ≥ 5**.
(v) "Se zyada" = **w > 40**. Dhyan se dekho: (iii) mein 40 kg chalta hai, (v) mein 40 kg par extra charge **nahi** lagta. Isliye (iii) mein ≤ hai aur (v) mein sirf >.

**Jaanch:** (i) n = 8 lo: 8 ≤ 8 true ✅. n = 9 lo: 9 ≤ 8 false ❌ (lift mein 9 nahi). (ii) Cousin ki umar 9: 9 < 12 true ✅. Nikita ki umar 15: 15 < 12 false ❌ (use bade ki zaroorat nahi). (iii) w = 40: 40 ≤ 40 true ✅; w = 41: 41 ≤ 40 false ❌. (iv) p = 5: 5 ≥ 5 true ✅; p = 4: 4 ≥ 5 false ❌. (v) w = 40: 40 > 40 false ❌; w = 41: 41 > 40 true ✅.

---

## Part B: Number line aur true/false kathan

Class 9 ki number line yaad karo: jo number **baayen** mein hota hai wo **chhota**, jo **daayen** mein hota hai wo **bada**. Isliye **a < b ka matlab hai: a, number line par b ke baayen hai.** Ye negative numbers par bhi waisa hi chalta hai.

```
--+---+---+---@---+---+---+---+---@---+---+---+---@---+---+---+---@-->
 −9  −8  −7  −6  −5  −4  −3  −2  −1   0   1   2   3   4   5   6   7
```

> **Figure 1.1** – Number line −9 se 7 tak. @ ka matlab hai us number ka point (−6, −1, 3 aur 7), + ka matlab hai baaki integers ke tick. Sabse baayen −6 hai, phir −1, phir 3, phir 7: yaani −6 < −1 < 3 < 7.

Ek inequality (number se number) ya to **true** hoti hai ya **false**. Lift ke board se ek dekhne ka tareeka: basement ki manzilen −1, −2, −3 likhi jaati hain. B2 (yaani −2) neeche hai B1 (yaani −1) se, isliye −2 < −1.

### Example 2: True ya false?

Faisla karo: (a) 3 < 7 (b) −1 > −6 (c) 0 > −2 (d) −6 ≤ −6 (e) −1 ≥ 2 (f) −8 < −3 (g) 5 ≥ 5 (h) 2 < −3.

**Hal:** Har baar dekho ki pehla number, number line par doosre ke baayen hai ya daayen.
(a) 3, 7 ke baayen hai: **true**.
(b) −1 aur −6 mein −1 daayen hai, to −1 bada hai: **true**.
(c) 0, −2 ke daayen hai: **true**.
(d) Dono barabar hain, aur ≤ mein "barabar" chalta hai: **true**.
(e) −1, 2 ke baayen hai, to −1 ≥ 2 nahi ho sakta: **false**.
(f) −8, −3 ke baayen hai: **true**.
(g) 5 = 5, ≥ mein barabar chalta hai: **true**.
(h) 2, −3 ke baayen nahi, daayen hai: **false**.

**Jaanch:** Figure 1.1 se: −6 < −1 ✅ (b se mel khata hai), aur farak lekar: 0 − (−2) = 2 > 0 ✅, −1 − 2 = −3 < 0, yaani −1 ≥ 2 false ✅. Yaad rakho: **a > b tabhi true hai jab a − b positive ho.**

---

## Part C: Equation ek jawab, inequation bahut saare

Class 9 ki ek variable ki equation lo: **x + 2 = 6.** Isme x = 4 ke alawa koi number kaam nahi karta: sirf **ek jawab.**

Ab "=" ki jagah "<" likh do: **x + 2 < 6.** Ye ek **inequation** hai. x = 3 lo: 3 + 2 = 5 aur 5 < 6 true. x = 1 lo: 1 + 2 = 3 < 6 true. x = 0 bhi chalta hai. Lekin x = 4 nahi: 4 + 2 = 6, aur 6 < 6 false (6 apne se chhota nahi hai). Yaani inequation mein aksar **bahut saare** x kaam karte hain, aur kaun kaun, ye is par bhi nirbhar hai ki **x kahan se chuna ja sakta hai.**

| | Equation | Inequation |
|---|---|---|
| Example | x + 2 = 6 | x + 2 < 6 |
| Beech ka chihn | = | <, >, ≤ ya ≥ |
| Jawab kitne? | aksar ek | aksar bahut saare |

---

## Part D: Replacement set aur solution set

x ko kahan se chunna hai, ye **replacement set** batata hai. Jo members inequation ko true bana dein, unka set **solution set** hai. Chhote replacement set mein hum bas **ek ek karke aazmate** hain.

### Example 3: Replacement set {−4, −3, −2, ..., 7}

x + 2 < 6, jahan x ∈ {−4, −3, −2, −1, 0, 1, 2, 3, 4, 5, 6, 7}. Solution set S likho.

**Hal:** Har x ke liye x + 2 nikalo aur dekho ki 6 se chhota hai ya nahi.

| x | x + 2 | x + 2 < 6 ? |
|---|---|---|
| −4 | −2 | true |
| −3 | −1 | true |
| −2 | 0 | true |
| −1 | 1 | true |
| 0 | 2 | true |
| 1 | 3 | true |
| 2 | 4 | true |
| 3 | 5 | true |
| 4 | 6 | false |
| 5 | 7 | false |
| 6 | 8 | false |
| 7 | 9 | false |

True aane wale x: −4 se 3 tak. To **S = {−4, −3, −2, −1, 0, 1, 2, 3}**. Kul 8 members.

```
--@---@---@---@---@---@---@---@---+---+---+---+--
 −4  −3  −2  −1   0   1   2   3   4   5   6   7
```

> **Figure 1.2** – Replacement set {−4, ..., 7} ke tick. @ ka matlab hai solution set ka member (−4 se 3 tak), + ka matlab hai wo member jo solution nahi hai (4 se 7 tak). Integers ke liye sirf alag alag dots hote hain, line shade nahi hoti.

**Jaanch:** Andar ka ek value, x = 3: 3 + 2 = 5 < 6 true ✅. Bilkul bahar ka pehla value, x = 4: 4 + 2 = 6 < 6 false ❌, to 4 solution set mein nahi hai, jaisa Figure 1.2 mein dikha.

---

## Part E: "<" aur "≤" mein ek member ka farak

Example 3 ki inequation mein sirf "<" ko "≤" kar do: **x + 2 ≤ 6**, wahi replacement set {−4, ..., 7}.

### Example 4: Kya ab 4 solution banega?

**Hal:** Pehle wali table wahi hai, bas x = 4 par ab 4 + 2 = 6 aur 6 ≤ 6 **true** (barabar chalta hai). x = 5 par 7 ≤ 6 false hi rehta hai. Isliye **S = {−4, −3, −2, −1, 0, 1, 2, 3, 4}**, 9 members. Dono sets ko ek saath dekho:

```
x + 2 < 6    --@---@---@---@---@---@---@---@---+---+---+---+--
              −4  −3  −2  −1   0   1   2   3   4   5   6   7

x + 2 ≤ 6    --@---@---@---@---@---@---@---@---@---+---+---+--
              −4  −3  −2  −1   0   1   2   3   4   5   6   7
```

> **Figure 1.3** – Ek hi replacement set par do inequations. Upar wali line (<) mein @ −4 se 3 tak, neeche wali (≤) mein −4 se 4 tak. @ ka matlab hai solution set ka member, + ka matlab hai jo solution nahi. Dono mein farak sirf 4 ka hai: yahi "barabar" ka kaam hai.

**Jaanch:** x = 4 par: x + 2 < 6 false ❌ aur x + 2 ≤ 6 true ✅. x = 5 par dono false: 7 < 6 ❌ aur 7 ≤ 6 ❌, to 5 kisi ka member nahi.

---

## Part F: Wahi inequation, alag replacement set

Replacement set badalne se solution set badal jaata hai. Wahi inequation **x + 2 < 6** lo (yaani x < 4 hone chahiye, kyunki 4 par 6 < 6 false hota hai) aur ise N, W, Z, R par aazmao.

| Replacement set | Solution set | Kitne members? |
|---|---|---|
| N = {1, 2, 3, 4, ...} | {1, 2, 3} | 3 |
| W = {0, 1, 2, 3, ...} | {0, 1, 2, 3} | 4 |
| Z = {..., −2, −1, 0, 1, 2, 3, ...} | {..., −3, −2, −1, 0, 1, 2, 3} | anant (kabhi khatam nahi) |
| R (saare real numbers) | list nahi ho sakti | anant |

N mein 0 aur negative numbers hain hi nahi, W mein sirf 0 juda, Z mein dono taraf ke integers. R mein 3.9, 3.99, 3.999, 0.5, −7.25 sab hain, kyunki R mein integers ke beech mein bhi bahut saare numbers hote hain. Inhe ek ek karke likha nahi ja sakta, aur 4 se chhota "sabse bada" number bhi nahi milta (3.9 ke baad 3.99 aata hai, phir 3.999, ...). Isliye aise sets ko **set-builder form** mein likhte hain:

**{x : x ∈ R, x < 4}** padho: "wo saare x, jo R ke hain aur 4 se chhote hain."

Z ke liye bhi: **{x : x ∈ Z, x < 4}**, aur list karke likho to {..., −2, −1, 0, 1, 2, 3} (teen dots ka matlab "isi tarah baayen taraf chalta jaata hai").

### Example 5: Ek hi inequation, chaaron sets

Inequation x − 3 ≤ −1 (yaani x ≤ 2) ke liye N, W, Z aur R mein solution set likho.

**Hal:** x ≤ 2 matlab 2 aur usse chhote numbers.
- N mein 2 se chhote ya barabar: **{1, 2}**.
- W mein: **{0, 1, 2}**.
- Z mein: **{..., −2, −1, 0, 1, 2}**.
- R mein: **{x : x ∈ R, x ≤ 2}** (list nahi hoti; 2 khud member hai kyunki ≤ hai).

**Jaanch:** x = 2: 2 − 3 = −1 ≤ −1 true ✅ (N, W, Z, R chaaron mein 2 hai). x = 3: 3 − 3 = 0 ≤ −1 false ❌. x = 0 sirf N mein nahi hai (N 1 se shuru hota hai), par W, Z, R mein hai: 0 − 3 = −3 ≤ −1 true ✅.

---

## Part G: Story mein inequation

Kahani ka sawaal bhi isi tarah hal hota hai: **chhoti cheezein pehchano (variable), inequation likho, solution set nikalo, aur story check karo**: kya jawab replacement set mein hai aur kahani mein sensible hai?

### Example 6: Nikita ka lift

Lift mein n log hain, "maximum 8 persons". Kya n = 2.5 ho sakta hai? Likho aur n ke saare sambhav values batao.

**Hal:** Logon ki ginti 0, 1, 2, ... hoti hai, to replacement set **W** (0 yaani lift khaali). Inequation: **n ≤ 8.** Solution set: **S = {n : n ∈ W, n ≤ 8} = {0, 1, 2, 3, 4, 5, 6, 7, 8}**, kul 9 values.
**Jaanch:** n = 8: 8 ≤ 8 true ✅. n = 9: 9 ≤ 8 false ❌.
**Story check:** 8 log theek hain (board "maximum" kehta hai, 8 bhi allowed). 2.5 log hote hi nahi, isliye replacement set R nahi, W liya.

### Example 7: Station par extra charge

"40 kg se zyada wazan par extra charge" (Example 1 (v)). Wazan w kg, aur wazan 40.5, 62.25 jaisa bhi ho sakta hai. Kaun se w par extra charge lagega?

**Hal:** Wazan decimal bhi ho sakta hai, to replacement set **R**. Inequation: **w > 40.** Solution set **{w : w ∈ R, w > 40}**. List nahi ho sakti.
**Jaanch:** w = 40.5: 40.5 > 40 true ✅. w = 40: 40 > 40 false ❌.
**Story check:** 40 kg theek 40 kg par extra charge nahi lagta (board "40 se zyada" kehta hai). 40.5 kg par lagta hai, aur wazan decimal ho sakta hai, isliye R sahi hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "−4 > −9 false hai, kyunki 4 < 9"**

Ek bachche ne kaha: "4 chhota hai 9 se, to −4 bhi −9 se chhota hoga. Yaani −4 > −9 galat hai."
**Ulta udaharan:** Maan lo −4 ka matlab hai ₹4 ka udhaar aur −9 ka ₹9 ka udhaar. Kiski halat behtar hai? Jo kam udhaar mein hai, yaani ₹4 wala. To −4 **bada** hai. Number line par bhi dekho:

```
--+---@---+---+---+---+---@---+---+---+---+---+---+-->
−10  −9  −8  −7  −6  −5  −4  −3  −2  −1   0   1   2
```

> **Figure 1.4** – Number line −10 se 2 tak. @ ka matlab hai −9 aur −4 ke point. −4 ka point −9 ke **daayen** hai, to −4 > −9.

Farak se: −4 − (−9) = −4 + 9 = 5, jo positive hai, to −4 bada hai.
Kyun? Positive numbers mein "bada digit, bada number" hota hai, par negative mein ulta: jitna **bada digit**, utna number zero se **door baayen taraf**, yaani chhota.
**Jaanch:** −9 < −4 true ✅. −4 > −9 true ✅. Galat daava "−4 < −9" false ❌ (−4, −9 ke daayen hai).

**Galti 2: "Inequation ka bhi ek hi jawab hota hai, equation ki tarah"**

Ek bachche ne x − 1 < 4 (x ∈ N) ko equation samajh liya: "x − 1 = 4, to x = 5. Jawab 5."
**Ulta udaharan:** x = 5 lo: 5 − 1 = 4 aur 4 < 4 **false**. To 5 jawab hi nahi hai! Ab x = 1, 2, 3, 4 aazmao: 1 − 1 = 0, 2 − 1 = 1, 3 − 1 = 2, 4 − 1 = 3, saare 4 se chhote hain, saare true. To **solution set = {1, 2, 3, 4}**, chaar jawab, aur 5 unme nahi.
Kyun? Inequation poochti hai "kaun kaun se x?", ek x nahi. Jahan "=" chalta, wahan sirf ek point milta; "<" mein us point tak ka poora hissa milta hai (point khud nahi, ≤ hota to khud bhi).
**Jaanch:** x = 4: 4 − 1 = 3 < 4 true ✅. x = 5: 5 − 1 = 4 < 4 false ❌.

---

## Quick Recap

- **Symbols:** < "se chhota", > "se bada", ≤ "chhota ya barabar", ≥ "bada ya barabar". Nukila kona chhote number ki taraf.
- **Limit ki bhasha:** "at most, maximum, se zyada nahi" ⇒ ≤; "at least, minimum, se kam nahi" ⇒ ≥; "more than, se zyada" ⇒ >; "less than, se kam" ⇒ <.
- **Number line:** a < b matlab a, b ke baayen. Negative numbers mein −9 < −4 (Galti 1).
- **Equation aur inequation:** x + 2 = 6 ka ek jawab; x + 2 < 6 ke aksar bahut saare (Galti 2).
- **Replacement set** wo set hai jisme se x chuna jaata hai; **solution set** uske wo members jo inequation ko true banayein. Chhote set mein ek ek karke aazmao.
- Wahi inequation N, W, Z aur R par alag solution set deti hai; R ka set list nahi hota, set-builder form: {x : x ∈ R, x < 4}.
- "<" aur "≤" ka farak sirf end-point ka hota hai (Part E).
- **Story check:** jawab replacement set mein ho aur kahani mein samajh aaye.

---

## Practice Questions

1. Write each as an inequality using the given letter. (i) A lift's load must not exceed 630 kg (L). (ii) Entry only for people aged at least 15 years (a). (iii) Bags together must weigh less than 35 kg (w). (iv) A shared auto starts only with a minimum of 4 riders (p). (v) A hall holds fewer than 300 people (n). (vi) A parcel may weigh up to 22 kg (w).

2. Say whether each statement is true or false. (i) −7 < −2 (ii) −11 > −5 (iii) 0 > −13 (iv) −15 ≥ −15 (v) −2 ≤ −8 (vi) 5 > −14.

3. Arrange 4, −8, 0, −3, −10 from smallest to biggest, writing the < sign between them.

4. The replacement set is {−3, −2, −1, 0, 1, 2, 3, 4, 5, 6, 7, 8}. Find the solution set of each. (i) x + 1 > 4 (ii) 3 + x ≤ 2 (iii) x − 7 < −2 (iv) 6 − x ≥ 1.

5. List the solution set of x + 3 ≤ 9 when x ∈ N.

6. List the solution set of 12 − x > 7 when x ∈ W.

7. Describe the solution set of x + 9 > 6 when x ∈ Z in set-builder form, and write the five smallest members.

8. Write the solution set of x + 0.5 ≤ 3.5 when x ∈ R in set-builder form. Which of 2.9, 3 and 3.01 belong to it? Why can its members not be listed one by one?

9. Which numbers among −1, 0, 3, 6 satisfy 2 + x ≥ 5?

10. For x ∈ N, solve (i) x + 7 = 10 and (ii) x + 7 < 10. Why do the answers differ in count?

11. A school lift allows at most 6 children at a time. Taking n as the number of children (a counting number or zero), write the inequation and its solution set. Is n = 7 allowed? Does n = 3.5 make sense?

12. A student says: "−3 > −12 is false, because 3 < 12." Is the student right? Explain with the number line and with a difference.

13. Write one inequation of the form x + a < b (a and b whole numbers) whose solution set over N is {1, 2, 3, 4, 5}. Is the answer unique?

### Answers

**1.** Shabdon se symbol: (i) "must not exceed" ⇒ **L ≤ 630**. (ii) "at least" ⇒ **a ≥ 15**. (iii) "less than" ⇒ **w < 35**. (iv) "minimum of 4" ⇒ **p ≥ 4**. (v) "fewer than" ⇒ **n < 300**. (vi) "up to" ⇒ **w ≤ 22**.
**Jaanch:** (i) 630 ≤ 630 true ✅, 631 ≤ 630 false ❌. (iii) 34 < 35 true ✅, 35 < 35 false ❌. (vi) 22 ≤ 22 true ✅, 23 ≤ 22 false ❌.

**2.** Number line par baayen wala chhota. (i) −7, −2 ke baayen hai: **true** ✅. (ii) −11, −5 ke baayen hai, to −11 > −5 **false** ❌. (iii) 0, −13 ke daayen hai: **true** ✅. (iv) dono barabar, ≥ mein chalta hai: **true** ✅. (v) −2, −8 ke daayen hai, to −2 ≤ −8 **false** ❌. (vi) 5, −14 ke daayen hai: **true** ✅.
**Jaanch:** (ii) −11 − (−5) = −6 negative, to −11 chhota hai, false ✅ (mel khata hai).

**3.** Baayen se daayen: −10, −8, −3, 0, 4. To **−10 < −8 < −3 < 0 < 4**.
**Jaanch:** har pair: −10 < −8 ✅, −8 < −3 ✅, −3 < 0 ✅, 0 < 4 ✅.

**4.** Har x ke liye aazmao. (i) x + 1 > 4 ⇒ x > 3 (3 + 1 = 4 > 4 false). **S = {4, 5, 6, 7, 8}**. (ii) 3 + x ≤ 2: x = −1 par 2 ≤ 2 true, x = 0 par 3 ≤ 2 false. **S = {−3, −2, −1}**. (iii) x − 7 < −2: x = 4 par −3 < −2 true, x = 5 par −2 < −2 false. **S = {−3, −2, −1, 0, 1, 2, 3, 4}**. (iv) 6 − x ≥ 1: x = 5 par 1 ≥ 1 true, x = 6 par 0 ≥ 1 false. **S = {−3, −2, −1, 0, 1, 2, 3, 4, 5}**.
**Jaanch:** (i) x = 4: 5 > 4 true ✅, x = 3: 4 > 4 false ❌. (ii) x = −1: 2 ≤ 2 ✅, x = 0: 3 ≤ 2 ❌. (iii) x = 4: −3 < −2 ✅, x = 5: −2 < −2 ❌. (iv) x = 5: 1 ≥ 1 ✅, x = 6: 0 ≥ 1 ❌.

**5.** x + 3 ≤ 9 ⇒ x = 6 par 9 ≤ 9 true, x = 7 par 10 ≤ 9 false. **S = {1, 2, 3, 4, 5, 6}**.
**Jaanch:** x = 6: 9 ≤ 9 true ✅; x = 7: 10 ≤ 9 false ❌.

**6.** 12 − x > 7: x = 4 par 8 > 7 true, x = 5 par 7 > 7 false. W mein 0 se shuru: **S = {0, 1, 2, 3, 4}**.
**Jaanch:** x = 0: 12 > 7 ✅; x = 5: 7 > 7 ❌.

**7.** x + 9 > 6: x = −2 par 7 > 6 true, x = −3 par 6 > 6 false. Isliye x ≥ −2: **S = {x : x ∈ Z, x > −3}** (ya x ≥ −2). Paanch sabse chhote members: **−2, −1, 0, 1, 2**. S ka koi sabse bada member nahi, kyunki Z dayen taraf anant hai.
**Jaanch:** x = −2: 7 > 6 true ✅; x = −3: 6 > 6 false ❌.

**8.** x + 0.5 ≤ 3.5 ⇒ x = 3 par 3.5 ≤ 3.5 true. **S = {x : x ∈ R, x ≤ 3}**. 2.9: 3.4 ≤ 3.5 true, **member**. 3: 3.5 ≤ 3.5 true, **member**. 3.01: 3.51 ≤ 3.5 false, **member nahi**. R mein 3 se chhote ya barabar numbers ki list nahi ban sakti, kyunki 2.9 aur 3 ke beech bhi 2.99, 2.999, ... bahut saare numbers hain.
**Jaanch:** x = 3 (end-point) member hai, ≤ ki wajah se: ✅.

**9.** Har ek par 2 + x ≥ 5: −1 ⇒ 1 ≥ 5 false; 0 ⇒ 2 ≥ 5 false; 3 ⇒ 5 ≥ 5 true; 6 ⇒ 8 ≥ 5 true. **3 aur 6.**
**Jaanch:** 3 end-point hai (5 ≥ 5 ✅), 2 par 4 ≥ 5 false ❌.

**10.** (i) x + 7 = 10 ⇒ x = 3, **{3}**, ek jawab. (ii) x + 7 < 10: x = 2 par 9 < 10 true, x = 3 par 10 < 10 false, to **{1, 2}**, do jawab. Farak ka kaaran: equation sirf ek point pakadti hai, inequation us point se neeche ka poora hissa (point khud nahi).
**Jaanch:** x = 3 equation mein ✅ (10 = 10) par inequation mein ❌ (10 < 10).

**11.** Bachchon ki ginti 0, 1, 2, ... hai, replacement set W. Inequation **n ≤ 6**, **S = {0, 1, 2, 3, 4, 5, 6}** (7 values). n = 7: 7 ≤ 6 false, **allowed nahi**.
**Jaanch:** n = 6: 6 ≤ 6 ✅; n = 7: 7 ≤ 6 ❌.
**Story check:** n = 3.5 ka matlab "saade teen bachche" hoga, jo sambhav nahi, isliye 3.5 replacement set W ka member hi nahi.

**12.** Student **galat** hai. Number line par −12, −3 ke baayen hai, to −3 daayen, yaani bada: **−3 > −12 true**. Farak se: −3 − (−12) = 9 positive, to −3 bada. "3 < 12" sach hai, par negative lagane par order ulta ho jaata hai.
**Jaanch:** −12 < −3 true ✅, −3 > −12 true ✅.

**13.** Hume x ∈ N par x + a < b se {1, 2, 3, 4, 5} chahiye, yaani x = 5 chale aur x = 6 na chale. Ek jawab: **x + 4 < 10** (5 + 4 = 9 < 10 true, 6 + 4 = 10 < 10 false). Doosra: **x + 1 < 7**. **Unique nahi** hai: a aur b ko saath saath badal sakte ho, bas b − a = 6 rakho.
**Jaanch:** x + 4 < 10 mein x = 5: 9 < 10 ✅, x = 6: 10 < 10 ❌. x + 1 < 7 mein x = 5: 6 < 7 ✅, x = 6: 7 < 7 ❌.

---

Shabaash! Ab tum kisi bhi board ya niyam ko symbols mein likh sakte ho, true aur false kathan pehchan sakte ho, aur solution set aur replacement set ka farak samajhte ho. Nikita ke lift ke board mein ab tumhe sirf "n ≤ 8" nahi, 0 se 8 tak ka poora jhund dikhega.

**Aage kya?** Topic 2 (linear-inequations-part2.md) mein hum bade replacement sets par ek ek karke aazmane ki jagah inequation ko **hal karna** seekhenge: kaun se kadam seedhe hain, aur ek aisa kadam jisme sign ulat jaata hai (ek negative number se guna ya bhaag karne par).
