# Chapter: Sequences and Series (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [sequences-and-series.md](sequences-and-series.md) tha** (Topic 1: Sequences vs Series, AP Recap, aur Arithmetic Mean AM). Class 10 mein basic GP padha tha: [geometric-progressions.md](../../../class10/maths/geometric-progressions/geometric-progressions.md).
> **Topics covered in this file:**
> 1. Geometric Progression (GP) Recap, Geometric Mean (GM), Aur Sum of Infinite GP

---

# Topic 2: Geometric Progression (GP) Recap, Geometric Mean (GM), Aur Sum of Infinite GP

Class 10 ke [geometric-progressions.md](../../../class10/maths/geometric-progressions/geometric-progressions.md) mein tumne dekha tha ki jab har agla term pichhle term ko ek fixed constant se **multiply** karne par banta hai, to use Geometric Progression (GP) kehte hain. 

Ab Class 11 mein hum is se aage ki gehri baatein seekhenge:
1. Do numbers ke beech multiple **Geometric Means (GMs)** kaise insert karte hain?
2. Kyun n inserted GMs ka product single GM ki n-th power ke barabar hota hai?
3. Aur sabse hairatangez: kya anant (infinite) terms ka jod bhi ek finite number ho sakta hai? Infinite GP ka sum formula kab kaam karta hai aur kab bilkul fail ho jata hai? Chalo dekhte hain!

---

## Avani ka acoustic studio design

Avani ek recording studio mein sound acoustic engineer hai. Use ek high-end soundproof recording booth design karna tha jisme sound reflection corridor mein har acoustic foam layer sound energy ko 50% kam (halve) kar deti hai.

Agar sound pulse ki shuruati intensity 64 decibel unit hai:
- Layer 1 ke baad: 64 × (1/2) = 32
- Layer 2 ke baad: 32 × (1/2) = 16
- Layer 3 ke baad: 16 × (1/2) = 8
- Layer 4 ke baad: 8 × (1/2) = 4

Avani ne notice kiya: "Yeh intensity ek perfect Geometric Progression bana rahi hai jiska common ratio r = 1/2 hai!"
Phir uske assistant ne poochha: "Agar sound pulse do deewaron ke beech anant baar (infinitely many times) aage-peechhe bounce kare, to kya total absorbed energy anant (infinite) ho jayegi?"

Avani ne muskurate huye diagram par samjhaya: "Nahi! Kyunki har bounce par intensity aadhi ho rahi hai (|r| < 1), isliye anant bounces ka kul jod bhi ek bilkul finite number hoga: S_∞ = a / (1 - r) = 64 / (1 - 1/2) = 128 units! Anant tukde milkar bhi ek bounded limit banate hain!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Geometric Progression (GP)** | Ek aisi sequence jisme har agla term pichhle term ko ek fixed non-zero ratio r se multiply karke milta hai | 3, 6, 12, 24, ... (r = 2) |
| **Common Ratio (r)** | Kisi bhi term aur uske theek pichhle term ka anupaat (aₖ / aₖ₋₁) | r = 6/3 = 2 |
| **Geometric Mean (GM)** | Do positive numbers a aur b ke theek beech ka number G, taaki a, G, b ek GP banayein | G = √(ab) |
| **n Geometric Means** | Do numbers a aur b ke beech n numbers G₁, G₂, ..., Gₙ insert karna taaki poora group GP ban jaye | 2 aur 162 ke beech 6, 18, 54 |
| **Infinite GP** | Ek aisi GP jisme terms kabhi khatam nahi hote (n -> ∞) | 1/2 + 1/4 + 1/8 + 1/16 + ... |
| **Sum to Infinity (S_∞)** | Infinite GP ke sabhi terms ka kul jod, jo sirf tab exist karta hai jab -1 < r < 1 < 1 ho | S_∞ = a / (1 - r) |

---

## Part A: Geometric Progression (GP) Ka Quick Recap

Class 10 ke [geometric-progressions.md](../../../class10/maths/geometric-progressions/geometric-progressions.md) se hum jante hain:
- Standard GP: a, ar, ar², ar³, ..., arⁿ⁻¹
- Common ratio: r = aₖ / aₖ₋₁ (constant non-zero value)
- n-th term (general term):
  aₙ = a · rⁿ⁻¹
- Sum of first n terms:
  Sₙ = a(1 - rⁿ) / (1 - r)  [ya Sₙ = a(rⁿ - 1) / (r - 1)], jahan r ≠ 1.
  (Agar r = 1 ho, to sabhi n terms a honge, isliye Sₙ = n · a).

```
Term 1       Term 2       Term 3       Term 4            Term n
  a  ------->  ar  ------->  ar² ------->  ar³  ... ------->  arⁿ⁻¹
       × r          × r          × r               × r
```

---

## Part B: Geometric Mean (GM)

### 1. Do Numbers Ke Beech Single GM
Agar do positive numbers a aur b ke beech ek number G is tarah rakha jaye ki:
a, G, b ek GP banayein,
to G ko a aur b ka **Geometric Mean** kehte hain.

Kyunki a, G, b ek GP hai:
Common ratio barabar hona chahiye:
G / a = b / G
Cross-multiply karne par:
G² = a · b
G = √(ab)

Example: 4 aur 36 ka GM kya hoga?
G = √(4 × 36) = √144 = 12.
Dekho: 4, 12, 36 ek GP hai jahan r = 3!

> **Dhyan do:** Class 11 mein hum GM hamesha **positive real numbers** ke liye consider karte hain, taaki square root ke andar negative na aaye aur progression consistent rahe.

---

## Part C: Do Numbers Ke Beech n Geometric Means Insert Karna

Maan lo hume do positive numbers a aur b ke beech **n** numbers G₁, G₂, G₃, ..., Gₙ is tarah insert karne hain ki poori sequence ek GP ban jaye:
a, G₁, G₂, G₃, ..., Gₙ, b

### 1. Common Ratio r Ka Formula ("Kyun" Ke Saath!)
Is poori GP mein kul kitne terms hain?
- Pehla term: a (Term 1)
- Beech ke terms: n terms (G₁ se Gₙ tak)
- Aakhri term: b (Term n + 2)

Kul terms = n + 2.
GP ke general term formula Tₘ = a · rᵐ⁻¹ ke mutabiq:
Term (n + 2) = b
a · rⁿ⁺²⁻¹ = b
a · rⁿ⁺¹ = b
rⁿ⁺¹ = b / a
r = (b / a)^(1 / (n + 1))

Har inserted geometric mean ka seedha formula:
- G₁ = a · r = a · (b / a)^(1 / (n + 1))
- G₂ = a · r² = a · (b / a)^(2 / (n + 1))
- Gₖ = a · rᵏ = a · (b / a)^(k / (n + 1))
- Gₙ = a · rⁿ = a · (b / a)^(n / (n + 1))

### 2. Shandaar Theorem: Product of n Inserted Means
Jab hum in sabhi n inserted geometric means ko multiply karte hain:
G₁ · G₂ · G₃ · ... · Gₙ

Har term ki value rakhne par:
Product = (a · r) · (a · r²) · (a · r³) · ... · (a · rⁿ)
= aⁿ · r^(1 + 2 + 3 + ... + n)

Power mein natural numbers ka sum: 1 + 2 + ... + n = n(n + 1)/2.
Product = aⁿ · r^[n(n + 1)/2]

Ab r = (b / a)^(1 / (n + 1)) substitute karne par:
r^[n(n + 1)/2] = [ (b / a)^(1 / (n + 1)) ]^[n(n + 1)/2] = (b / a)^(n / 2)

Isliye:
Product = aⁿ · (b / a)^(n / 2)
= aⁿ · b^(n / 2) / a^(n / 2)
= a^(n - n/2) · b^(n / 2)
= a^(n / 2) · b^(n / 2)
= (ab)^(n / 2)
= [√(ab)]ⁿ

**Nateeja:** n inserted geometric means ka product = (single geometric mean)ⁿ!
Πₖ₌₁ⁿ Gₖ = Gⁿ = [√(ab)]ⁿ

---

## Part D: Infinite Geometric Progression (Sum to Infinity)

Maan lo hamare paas ek GP hai jo kabhi khatam nahi hoti:
S = a + ar + ar² + ar³ + ...

Pehle n terms ka sum hum jante hain:
Sₙ = a(1 - rⁿ) / (1 - r) = a / (1 - r) - (a · rⁿ) / (1 - r)

### rⁿ Ka Behaviour Jab n Bahut Bada Hota Hai:
- Agar |r| < 1 (yaani -1 < r < 1), jaise r = 1/2:
  (1/2)¹ = 0.5
  (1/2)² = 0.25
  (1/2)¹⁰ ≈ 0.00097
  (1/2)¹⁰⁰ ≈ 0
  Jab n -> ∞, tab rⁿ -> 0!

Isliye doosra hissa (a · rⁿ)/(1 - r) khatam (zero) ho jata hai!
Bachta hai sirf pehla hissa:
S_∞ = a / (1 - r)   (Valid strictly when |r| < 1)

### Geometric Bisection Visualisation (Zeno Ka Paradox):
Socho ek 1 meter lambi lakdi hai:
- Pehle aadhi kaati: 1/2 m
- Bachi huyi ka aadha: 1/4 m
- Fir bachi huyi ka aadha: 1/8 m
1/2 + 1/4 + 1/8 + 1/16 + ...
Yahan a = 1/2, r = 1/2.
S_∞ = (1/2) / (1 - 1/2) = (1/2) / (1/2) = 1 meter!
Anant tukde milkar wahi poori 1 meter ki lakdi banate hain!

```
[----------- 1/2 -----------][---- 1/4 ----][--1/8--][-][.]
+ ======================== Total = 1 ========================|
```

### Repeating Decimals Ko Fractions Mein Badalna:
Infinite GP ka sabse sundar upyog repeating decimals ko p/q form mein badalna hai:
0.777... = 0.7 + 0.07 + 0.007 + ...
= 7/10 + 7/100 + 7/1000 + ...
Yahan a = 7/10, r = 1/10 (kyunki 7/100 ÷ 7/10 = 1/10).
S_∞ = (7/10) / (1 - 1/10) = (7/10) / (9/10) = 7/9.

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 2.1: Inserting 3 GMs Between 2 And 162
**Sawaal:** 2 aur 162 ke beech 3 geometric means insert karo, aur verify karo ki unka product (GM)³ ke barabar hai.

**Solution:**
Yahan a = 2, b = 162, n = 3.
Total terms = n + 2 = 5.
Common ratio:
r = (b / a)^(1 / (n + 1)) = (162 / 2)^(1 / 4) = 81^(1 / 4) = 3.

Teeno means hain:
- G₁ = a · r = 2 × 3 = 6
- G₂ = a · r² = 2 × 9 = 18
- G₃ = a · r³ = 2 × 27 = 54

Progression banegi: 2, 6, 18, 54, 162 (har step par × 3).
Teeno inserted means hain: 6, 18, 54.

Inka product:
Product = 6 × 18 × 54 = 5832.

Formula se check:
Single GM between 2 and 162:
G = √(2 × 162) = √324 = 18.
Gⁿ = G³ = 18³ = 5832.

Jaanch:
- Jaanch: GP ratio check: 6/2 = 3, 18/6 = 3, 54/18 = 3, 162/54 = 3 ✅
- Jaanch: Product check: 6 × 18 × 54 = 5832 aur 18³ = 5832 ✅

---

### Example 2.2: Sum of an Infinite GP
**Sawaal:** Infinite GP 6 + 2 + 2/3 + 2/9 + ... ka sum gyat karo.

**Solution:**
Yahan pehla term a = 6.
Common ratio:
r = 2 / 6 = 1/3.
Check condition: |r| = |1/3| = 1/3 < 1. Condition satisfy hoti hai!

Infinite GP sum formula:
S_∞ = a / (1 - r)
S_∞ = 6 / (1 - 1/3)
S_∞ = 6 / (2/3)
S_∞ = 6 × (3/2) = 9.

Jaanch:
- First term: 6
- First 2 terms: 6 + 2 = 8
- First 3 terms: 8 + 2/3 = 8.667
- First 4 terms: 8.667 + 2/9 = 8.889
- Jaanch: Limit 9 ki taraf ja rahi hai ✅

---

### Example 2.3: Bouncing Ball Problem
**Sawaal:** Ek ball ko 20 meter ki unchai se zameen par chhora jaata hai. Har bounce ke baad ball apni pichhli unchai ka 3/4 hissa upar uthti hai. Ball ke rukne tak uske dwara taye ki gayi kul vertical doori (total vertical distance) gyat karo.

**Solution:**
Ball pehle 20 meter neeche girti hai.
Uske baad:
- 1st bounce: 20 × (3/4) = 15 m upar jati hai, aur 15 m neeche aati hai (doori = 2 × 15 = 30 m).
- 2nd bounce: 15 × (3/4) = 11.25 m upar jati hai, aur 11.25 m neeche aati hai (doori = 2 × 11.25 m).
- Isi tarah har bounce par ball upar jaakar wapas neeche aati hai.

Kul doori:
Total Distance = Initial drop + 2 × (Sum of rebound heights)
Rebound heights form an infinite GP:
h₁ = 20 × (3/4) = 15
h₂ = 15 × (3/4) = 45/4
...
Yahan a = 15 aur r = 3/4. Kyunki |r| = 3/4 < 1, sum to infinity:
S_rebound = a / (1 - r) = 15 / (1 - 3/4) = 15 / (1/4) = 60 meter.

Total Distance = 20 + 2 × (S_rebound)
= 20 + 2(60)
= 20 + 120
= 140 meter.

Jaanch:
- Jaanch: Sₙ approach: S = 20 + 30 + 30(3/4) + 30(3/4)² + ... = 20 + 30 / (1 - 3/4) = 20 + 120 = 140 m ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Infinite GP formula S_∞ = a / (1 - r) ko tab laga dena jab |r| ≥ 1 ho
- **Galat soch:** "1 + 2 + 4 + 8 + ... ka sum S_∞ = 1 / (1 - 2) = 1 / (-1) = -1 hoga!"
- **Sahi samajh:** Positive numbers ko jodkar kabhi -1 nahi aa sakta! Infinite sum formula S_∞ = a / (1 - r) sirf aur sirf tab valid hota hai jab |r| < 1 (-1 < r < 1) ho. Agar |r| ≥ 1 ho, to terms badhte jaate hain aur series diverge karti hai (finite sum nahi hota).
- **Demonstration:**
  r = 2 ke liye terms 1, 2, 4, 8, 16... anant ki taraf ja rahe hain. Inka jod infinite hai, formula lagana bilkul galat hai!

### Galti 2: Opposite signs wale numbers ka GM nikalna
- **Galat soch:** "-4 aur 16 ka GM G = √((-4) × 16) = √(-64) = 8i hai."
- **Sahi samajh:** Real GP mein Geometric Mean hamesha positive real numbers ke liye define kiya jaata hai. Agar dono numbers opposite sign ke hon, to unka product negative ho jayega aur real geometric mean exist nahi karega.

### Galti 3: n GMs insert karte waqt common ratio ko r = (b/a)^(1/n) likhna
- **Galat soch:** "a aur b ke beech n means hain to power 1/n hogi."
- **Sahi samajh:** a aur b ke beech n means daalne par kul terms n + 2 bante hain. Isliye b = a · rⁿ⁺¹ hota hai, jisse r = (b / a)^(1 / (n + 1)) banta hai.

---

## Quick Recap

- **GP n-th term:** aₙ = a · rⁿ⁻¹.
- **GP Sum of n terms:** Sₙ = a(1 - rⁿ) / (1 - r) (r ≠ 1).
- **Single Geometric Mean:** Do positive numbers a aur b ke beech G = √(ab).
- **n Inserted GMs:** Common ratio r = (b / a)^(1 / (n + 1)).
- **Product Theorem:** n inserted GMs ka product = (√(ab))ⁿ = Gⁿ.
- **Sum of Infinite GP:** S_∞ = a / (1 - r) strictly valid if and only if |r| < 1.
- **Repeating Decimals:** 0.ddd... = (d / 10) / (1 - 1/10) = d / 9.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the 8th term and the general term of the GP: 5, 10, 20, 40, ...

**Solution:**
Here first term a = 5.
Common ratio r = 10 / 5 = 2.
General term:
aₙ = a · rⁿ⁻¹ = 5 · 2ⁿ⁻¹.

8th term:
a₈ = 5 · 2⁸⁻¹ = 5 · 2⁷ = 5 · 128 = 640.

Jaanch:
- Jaanch: a₁ = 5, a₂ = 10, a₃ = 20, a₄ = 40, a₅ = 80, a₆ = 160, a₇ = 320, a₈ = 640 ✅

---

### Question 2
The 4th term of a GP is 24 and the 7th term is 192. Find the first term and the common ratio.

**Solution:**
Let first term be a and common ratio be r.
T₄ = a · r³ = 24    --- (1)
T₇ = a · r⁶ = 192   --- (2)

Dividing (2) by (1):
(a · r⁶) / (a · r³) = 192 / 24
r³ = 8
r = 2.

Substituting r = 2 in (1):
a · (2)³ = 24
a · 8 = 24
a = 3.

First term a = 3, common ratio r = 2.

Jaanch:
- Jaanch: T₄ = 3 · 2³ = 3 · 8 = 24 ✅
- Jaanch: T₇ = 3 · 2⁶ = 3 · 64 = 192 ✅

---

### Question 3
Find the sum of the first 6 terms of the GP: 4, 12, 36, ...

**Solution:**
Here a = 4, r = 12 / 4 = 3, n = 6.
Sₙ = a(rⁿ - 1) / (r - 1)
S₆ = 4(3⁶ - 1) / (3 - 1)
3⁶ = 729.
S₆ = 4(729 - 1) / 2
S₆ = 2(728) = 1456.

Jaanch:
- Jaanch: Terms: 4 + 12 + 36 + 108 + 324 + 972 = 1456 ✅

---

### Question 4
Find the single geometric mean between 9 and 49.

**Solution:**
For two positive numbers a = 9 and b = 49:
G = √(ab) = √(9 × 49) = √9 × √49 = 3 × 7 = 21.

Progression: 9, 21, 49.
Common ratio: 21 / 9 = 7/3, and 49 / 21 = 7/3.

Jaanch:
- Jaanch: Common ratio is constant: 7/3 = 7/3 ✅

---

### Question 5
Insert 4 geometric means between 3 and 96.

**Solution:**
Here a = 3, b = 96, n = 4.
Total terms = n + 2 = 6.
Common ratio:
r = (b / a)^(1 / (n + 1)) = (96 / 3)^(1 / 5) = 32^(1 / 5) = 2.

The 4 inserted means are:
- G₁ = a · r = 3 × 2 = 6
- G₂ = a · r² = 3 × 4 = 12
- G₃ = a · r³ = 3 × 8 = 24
- G₄ = a · r⁴ = 3 × 16 = 48

The inserted GMs are: 6, 12, 24, 48.

Jaanch:
- Jaanch: Full GP: 3, 6, 12, 24, 48, 96 (each step × 2) ✅
- Jaanch: Next term after G₄ is 48 × 2 = 96 = b ✅

---

### Question 6
Show that the product of the 4 geometric means inserted between 3 and 96 is equal to the 4th power of their single geometric mean.

**Solution:**
From Question 5, the 4 inserted means are 6, 12, 24, 48.
Product of inserted means:
P = 6 × 12 × 24 × 48
= 72 × 1152
= 82944.

Single GM between 3 and 96:
G = √(3 × 96) = √288 = √(144 × 2) = 12√2.
4th power of G:
G⁴ = (12√2)⁴ = 12⁴ × (√2)⁴ = 20736 × 4 = 82944.

P = G⁴ = 82944.

Jaanch:
- Jaanch: 6 × 12 × 24 × 48 = 82944 ✅
- Jaanch: (12√2)⁴ = 82944 ✅

---

### Question 7
Find the sum of the infinite GP: 5, -5/3, 5/9, -5/27, ...

**Solution:**
Here a = 5.
Common ratio r = (-5/3) / 5 = -1/3.
Check condition: |r| = |-1/3| = 1/3 < 1. Series converges!

S_∞ = a / (1 - r)
= 5 / (1 - (-1/3))
= 5 / (1 + 1/3)
= 5 / (4/3)
= 15 / 4 = 3.75.

Jaanch:
- First term = 5
- Sum of two terms = 5 - 1.667 = 3.333
- Sum of three terms = 3.333 + 0.556 = 3.889
- Jaanch: Oscillates around 3.75 = 15/4 ✅

---

### Question 8
Express the recurring decimal 0.232323... as a rational number in simplest p/q form using an infinite GP.

**Solution:**
0.232323... = 0.23 + 0.0023 + 0.000023 + ...
= 23/100 + 23/10000 + 23/1000000 + ...

This is an infinite GP with:
First term a = 23/100
Common ratio r = (23/10000) / (23/100) = 1/100.
Since |r| = 1/100 < 1, the sum to infinity is:
S_∞ = a / (1 - r)
= (23/100) / (1 - 1/100)
= (23/100) / (99/100)
= 23 / 99.

Jaanch:
- Jaanch: 23 ÷ 99 = 0.232323... ✅

---

### Question 9
The first term of an infinite GP is 8 and its sum is 32. Find the common ratio.

**Solution:**
Given a = 8 and S_∞ = 32.
S_∞ = a / (1 - r)
32 = 8 / (1 - r)
32(1 - r) = 8
1 - r = 8 / 32 = 1/4
r = 1 - 1/4 = 3/4.

Check: |r| = 3/4 < 1, which is valid.

Jaanch:
- Jaanch: S_∞ = 8 / (1 - 3/4) = 8 / (1/4) = 32 ✅

---

### Question 10
If the sum of an infinite GP is 9 and the sum of the squares of its terms is 81/5, find the first term and the common ratio.

**Solution:**
Let the infinite GP be a, ar, ar², ...
Given:
S_∞ = a / (1 - r) = 9   --- (1)

The squares of the terms are a², a²r², a²r⁴, ...
This is also an infinite GP with first term a² and common ratio r²:
S_squares = a² / (1 - r²) = 81/5   --- (2)

We can factorize the denominator of (2):
1 - r² = (1 - r)(1 + r).
So:
[a / (1 - r)] · [a / (1 + r)] = 81/5.

Substitute a / (1 - r) = 9 from (1):
9 · [a / (1 + r)] = 81/5
a / (1 + r) = 9/5   --- (3)

Divide (1) by (3):
[a / (1 - r)] / [a / (1 + r)] = 9 / (9/5)
(1 + r) / (1 - r) = 5.

Cross-multiplying:
1 + r = 5(1 - r)
1 + r = 5 - 5r
6r = 4
r = 4/6 = 2/3.

Now find a using (1):
a = 9(1 - r) = 9(1 - 2/3) = 9(1/3) = 3.

First term a = 3, common ratio r = 2/3.

Jaanch:
- Jaanch: a / (1 - r) = 3 / (1 - 2/3) = 3 / (1/3) = 9 ✅
- Jaanch: a² / (1 - r²) = 9 / (1 - 4/9) = 9 / (5/9) = 81/5 ✅

---

### Question 11
Find the value of n if the sum of the first n terms of the GP 2, 6, 18, ... is 728.

**Solution:**
Here a = 2, r = 6 / 2 = 3, and Sₙ = 728.
Sₙ = a(rⁿ - 1) / (r - 1)
728 = 2(3ⁿ - 1) / (3 - 1)
728 = 2(3ⁿ - 1) / 2
728 = 3ⁿ - 1
3ⁿ = 729.

Since 3⁶ = 729:
n = 6.

Jaanch:
- Jaanch: 3⁶ = 729, 729 - 1 = 728 ✅

---

### Question 12
Insert 2 geometric means between 5 and 40, and write down the complete progression.

**Solution:**
Here a = 5, b = 40, and n = 2.
Total terms = 2 + 2 = 4.
Common ratio:
r = (b / a)^(1 / (n + 1)) = (40 / 5)^(1 / 3) = 8^(1 / 3) = 2.

The two inserted means are:
- G₁ = a · r = 5 × 2 = 10
- G₂ = a · r² = 5 × 4 = 20

Complete progression: 5, 10, 20, 40.

Jaanch:
- Jaanch: GP check: 10/5 = 2, 20/10 = 2, 40/20 = 2 ✅
- Jaanch: Inserted means: 10 and 20 ✅

---

Ab tumne dekh liya ki GP kya hoti hai, geometric means kaise insert hote hain aur infinite terms ka jod kab finite hota hai. Agle topic [sequences-and-series-part3.md](sequences-and-series-part3.md) mein hum dekhenge mathematics ka ek behad powerful principle: **Relation Between AM and GM (AM ≥ GM Inequality)** aur iska upyog minimum values nikalne mein!
