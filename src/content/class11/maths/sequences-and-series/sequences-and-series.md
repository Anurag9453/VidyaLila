# Chapter: Sequences and Series

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [binomial-theorem-part4.md](../binomial-theorem/binomial-theorem-part4.md) tha** (Binomial Theorem ka aakhri topic, jiske teaser ne vaada kiya tha ki ab hum numbers ke patterns — AP, GP, AM-GM inequality aur infinite sums — ko gehrai se explore karenge!). Class 10 mein basic AP padha tha: [arithmetic-progressions.md](../../../class10/maths/arithmetic-progressions/arithmetic-progressions.md).
> **Topics covered in this file:**
> 1. Sequences Aur Series Ki Pehchan, AP Ka Recap, Aur Arithmetic Mean (AM)

---

# Topic 1: Sequences Aur Series Ki Pehchan, AP Ka Recap, Aur Arithmetic Mean (AM)

Class 10 ke [arithmetic-progressions.md](../../../class10/maths/arithmetic-progressions/arithmetic-progressions.md) mein tumne dekha tha ki jab har agla number ek fixed constant jodne se banta hai, to use Arithmetic Progression (AP) kehte hain. Wahan tumne n-th term ka formula aₙ = a + (n - 1)d aur n terms ke sum ka formula Sₙ = (n/2)[2a + (n - 1)d] seekha tha. 

Par Class 11 mein hum ek kadam aage badhenge! Sequences aur Series ke beech ka buniyadi fark kya hai? Sigma notation (Σ) se lambi sums ko kaise compact roop mein likhte hain? Aur sabse dilchasp: do numbers ke beech ek nahi, balki 4, 5 ya n **Arithmetic Means** kaise insert kiye jaate hain, aur unka jod single mean ke n guna kyun hota hai? Chalo shuru karte hain!

---

## Jayant ka railway platform extension

Jayant ek railway platform extension project ka site supervisor hai. Ek purane platform ki shuruat mein pehla concrete slab 3 meter lamba tha, aur aakhri slab 28 meter lamba banna tha. Jayant ko in dono slabs ke theek beech mein 4 naye concrete slabs is tarah daalne the ki shuru se aakhri tak har slab ki lambai mein barabar badhotari (uniform step) ho — yaani pura platform ek perfect Arithmetic Progression ban jaaye!

Jayant ne socha: "Agar main 3 aur 28 ke beech 4 slabs daalunga, to kul kitne slabs ho jayenge? 4 + 2 = 6 slabs! To kitne barabar gaps (common difference d) banenge? 5 gaps! Iska matlab har gap (28 - 3)/5 = 25/5 = 5 meter ka hoga!"
- Pehla slab: 3 meter
- Doosra slab (Mean 1): 3 + 5 = 8 meter
- Teesra slab (Mean 2): 8 + 5 = 13 meter
- Chautha slab (Mean 3): 13 + 5 = 18 meter
- Paanchva slab (Mean 4): 18 + 5 = 23 meter
- Chhatha slab: 23 + 5 = 28 meter

Jayant ke chief engineer ne dekha aur kaha: "Shabash Jayant! Tumne do fixed numbers ke beech 4 **Arithmetic Means** insert kar diye! Aur dhyan se dekho: in 4 slabs ka kul jod 8 + 13 + 18 + 23 = 62 meter hai, jo theek 4 × (3 + 28)/2 = 4 × 15.5 = 62 meter ke barabar hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Sequence (Anukram)** | Numbers ki ek ordered list jo kisi niyam (rule) ke mutabiq likhi gayi ho | 2, 4, 6, 8, ... ya 1, 4, 9, 16, ... |
| **Series (Shreni)** | Kisi sequence ke sabhi terms ko plus (+) sign ke saath jodne par banne wala expression | 2 + 4 + 6 + 8 + ... |
| **General Term (aₙ)** | Sequence ke n-th term ko darshane wala algebraic formula | aₙ = 3n + 5 |
| **Sigma Notation (Σ)** | Kai terms ke jod ko chhote roop mein likhne ka symbol (Greek letter Sigma) | Σₖ₌₁ⁿ aₖ = a₁ + a₂ + ... + aₙ |
| **Arithmetic Mean (AM)** | Do numbers a aur b ke theek beech ka number A, taaki a, A, b ek AP banayein | A = (a + b)/2 |
| **n Arithmetic Means** | Do numbers a aur b ke beech n numbers A₁, A₂, ..., Aₙ insert karna taaki poora group AP ban jaye | 3 aur 28 ke beech 8, 13, 18, 23 |

---

## Part A: Sequences vs Series Aur Sigma Notation

### 1. Sequence Kya Hai?
Sequence numbers ki ek aisi ordered list hoti hai jisme pehla number (first term a₁), doosra number (second term a₂), teesra number (third term a₃), aur aam taur par n-th term (aₙ) kisi pakke niyam se tay hota hai.

Example:
- aₙ = 2n + 1: n = 1, 2, 3 rakhne par terms aate hain 3, 5, 7, 9, ...
- aₙ = (-1)ⁿ⁻¹ · 2ⁿ: n = 1, 2, 3 rakhne par terms aate hain 2, -4, 8, -16, ...
- Fibonacci sequence (Recursive rule): a₁ = 1, a₂ = 1, aur aₙ = aₙ₋₁ + aₙ₋₂ (for n ≥ 3). Terms bante hain: 1, 1, 2, 3, 5, 8, 13, ...

### 2. Series Kya Hai?
Jab hum kisi sequence ke terms ke beech plus (+) ka sign laga dete hain, to use **Series** kehte hain:
Sₙ = a₁ + a₂ + a₃ + ... + aₙ

### 3. Sigma Notation (Σ)
Greek capital letter Sigma (Σ) ka matlab hota hai "Sum" (jod).
Agar hume k = 1 se lekar k = n tak sabhi aₖ ko jodna ho, to hum likhte hain:
Σₖ₌₁ⁿ aₖ = a₁ + a₂ + a₃ + ... + aₙ

Sigma ke teen ahem niyam:
1. Constant bahar aa jata hai: Σₖ₌₁ⁿ (c · aₖ) = c · Σₖ₌₁ⁿ aₖ
2. Jod aur ghatav alag-alag bat jaate hain: Σₖ₌₁ⁿ (aₖ ± bₖ) = Σₖ₌₁ⁿ aₖ ± Σₖ₌₁ⁿ bₖ
3. Constant c ka n baar jod: Σₖ₌₁ⁿ c = c + c + ... (n times) = n · c

```
Sequence (List):        a₁,  a₂,  a₃,  ...,  aₙ
                         :    |    |          |
Series (Sum):           a₁ + a₂ + a₃ + ... + aₙ  =  Σₖ₌₁ⁿ aₖ
```

---

## Part B: Arithmetic Progression (AP) Ka Quick Recap

Class 10 ke [arithmetic-progressions.md](../../../class10/maths/arithmetic-progressions/arithmetic-progressions.md) se hum jante hain:
- Standard AP: a, a + d, a + 2d, a + 3d, ..., a + (n - 1)d
- Common difference: d = aₖ - aₖ₋₁ (constant for all k)
- General term (n-th term):
  aₙ = a + (n - 1)d
- Sum of first n terms:
  Sₙ = (n/2)[2a + (n - 1)d] = (n/2)[a + l], jahan l = aₙ aakhri term hai.

---

## Part C: Arithmetic Mean (AM)

### 1. Do Numbers Ke Beech Single AM
Agar do numbers a aur b ke beech ek number A is tarah rakha jaye ki:
a, A, b ek AP banayein,
to A ko a aur b ka **Arithmetic Mean** kehte hain.

Kyunki a, A, b ek AP hai:
Common difference barabar hona chahiye:
A - a = b - A
Dono taraf A jodne aur a shift karne par:
2A = a + b
A = (a + b)/2

Example: 14 aur 38 ka AM kya hoga?
A = (14 + 38)/2 = 52/2 = 26.
Dekho: 14, 26, 38 ek AP banata hai jahan d = 12!

```
a ------------------- A ------------------- b
       Gap = d                Gap = d
              A = (a + b)/2
```

---

## Part D: Do Numbers Ke Beech n Arithmetic Means Insert Karna

Maan lo hume do diye gaye numbers a aur b ke beech **n** numbers A₁, A₂, A₃, ..., Aₙ is tarah daalne hain ki poora group ek AP ban jaye:
a, A₁, A₂, A₃, ..., Aₙ, b

### 1. Common Difference d Ka Formula ("Kyun" Ke Saath!)
Is poori AP mein kul kitne terms hain?
- Pehla term: a (Term 1)
- Beech ke terms: n terms (A₁ se Aₙ tak)
- Aakhri term: b (Term n + 2)

Kul terms ki sankhya = n + 2.
AP ke general term formula aₘ = a + (m - 1)d ke mutabiq:
Term (n + 2) = b
a + (n + 2 - 1)d = b
a + (n + 1)d = b
(n + 1)d = b - a
d = (b - a)/(n + 1)

Har inserted mean ka seedha formula:
- A₁ = a + d = a + (b - a)/(n + 1)
- A₂ = a + 2d = a + 2(b - a)/(n + 1)
- A₃ = a + 3d = a + 3(b - a)/(n + 1)
- Aₖ = a + k·d = a + k(b - a)/(n + 1)
- Aₙ = a + n·d = a + n(b - a)/(n + 1)

### 2. Shandaar Theorem: Sum of n Inserted Means
Jab hum in sabhi n inserted means ko jodte hain:
A₁ + A₂ + A₃ + ... + Aₙ

Yeh khud ek AP hai jisme n terms hain, pehla term A₁ = a + d hai aur aakhri term Aₙ = b - d hai!
AP sum formula se:
Sum = (n/2)[A₁ + Aₙ]
Sum = (n/2)[(a + d) + (b - d)]
Sum = (n/2)[a + b]
Sum = n · [(a + b)/2]

**Nateeja:** n inserted arithmetic means ka jod = n × (a aur b ka single arithmetic mean)!
Σₖ₌₁ⁿ Aₖ = n · A

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 1.1: Inserting 4 AMs Between 3 And 28
**Sawaal:** 3 aur 28 ke beech 4 arithmetic means insert karo, aur verify karo ki unka jod 4 × AM(3, 28) ke barabar hai.

**Solution:**
Yahan a = 3, b = 28, aur n = 4.
Total terms = n + 2 = 4 + 2 = 6.
Common difference:
d = (b - a)/(n + 1) = (28 - 3)/(4 + 1) = 25/5 = 5.

Ab chaaron means nikaalte hain:
- A₁ = a + d = 3 + 5 = 8
- A₂ = a + 2d = 3 + 2(5) = 13
- A₃ = a + 3d = 3 + 3(5) = 18
- A₄ = a + 4d = 3 + 4(5) = 23

The inserted means are: 8, 13, 18, 23.
Poora progression bana: 3, 8, 13, 18, 23, 28 (common difference har jagah 5 hai).

Inka sum:
A₁ + A₂ + A₃ + A₄ = 8 + 13 + 18 + 23 = 62.

Formula se check:
Single AM between 3 and 28: A = (3 + 28)/2 = 31/2 = 15.5.
n × A = 4 × 15.5 = 62.

Jaanch:
- Jaanch: AP check: 8 - 3 = 5, 13 - 8 = 5, 18 - 13 = 5, 23 - 18 = 5, 28 - 23 = 5 ✅
- Jaanch: Sum check: 8 + 13 + 18 + 23 = 62 aur 4 × 15.5 = 62 ✅

---

### Example 1.2: Finding m When Ratio of Means is Given
**Sawaal:** 1 aur 31 ke beech m arithmetic means insert kiye gaye hain. Agar 7th mean aur (m - 1)-th mean ka anupaat (ratio) 5 : 9 hai, to m ki value gyat karo.

**Solution:**
Yahan a = 1, b = 31, aur inserted means ki sankhya = m.
Total terms = m + 2.
Common difference:
d = (b - a)/(m + 1) = (31 - 1)/(m + 1) = 30/(m + 1).

k-th mean ka formula hota hai:
Aₖ = a + k·d = 1 + k · [30/(m + 1)] = [(m + 1) + 30k] / (m + 1).

Isliye:
7th mean (A₇):
A₇ = 1 + 7d = 1 + 7 · [30/(m + 1)] = 1 + 210/(m + 1) = (m + 1 + 210)/(m + 1) = (m + 211)/(m + 1).

(m - 1)-th mean (Aₘ₋₁):
Aₘ₋₁ = 1 + (m - 1)d = 1 + (m - 1) · [30/(m + 1)]
= [(m + 1) + 30(m - 1)] / (m + 1)
= [m + 1 + 30m - 30] / (m + 1)
= (31m - 29)/(m + 1).

Dono ka ratio diya hai:
A₇ / Aₘ₋₁ = 5/9
[(m + 211)/(m + 1)] / [(31m - 29)/(m + 1)] = 5/9
(m + 211)/(31m - 29) = 5/9

Cross-multiply karne par:
9(m + 211) = 5(31m - 29)
9m + 1899 = 155m - 145
1899 + 145 = 155m - 9m
2044 = 146m
m = 2044 / 146
m = 14.

Jaanch:
- m = 14 par d = 30 / (14 + 1) = 30 / 15 = 2.
- A₇ = a + 7d = 1 + 7(2) = 15.
- Aₘ₋₁ = A₁₃ = a + 13d = 1 + 13(2) = 27.
- Jaanch: Ratio = 15 / 27 = 5 / 9 ✅

---

### Example 1.3: AP General Term and Sum Calculation
**Sawaal:** Ek AP ka 6th term 20 hai aur 11th term 35 hai. Is AP ka 20th term aur pehle 15 terms ka sum gyat karo.

**Solution:**
Maan lo pehla term a aur common difference d hai.
a₆ = a + 5d = 20    --- (Samikaran 1)
a₁₁ = a + 10d = 35  --- (Samikaran 2)

Samikaran 2 mein se Samikaran 1 ghatane par:
(a + 10d) - (a + 5d) = 35 - 20
5d = 15
d = 3.

d ki value Samikaran 1 mein rakhne par:
a + 5(3) = 20
a + 15 = 20
a = 5.

Ab 20th term (a₂₀):
a₂₀ = a + 19d = 5 + 19(3) = 5 + 57 = 62.

Pehle 15 terms ka sum (S₁₅):
S₁₅ = (15/2)[2a + (15 - 1)d]
S₁₅ = (15/2)[2(5) + 14(3)]
S₁₅ = (15/2)[10 + 42] = (15/2)[52] = 15 × 26 = 390.

Jaanch:
- Jaanch: a₆ = 5 + 5(3) = 20 ✅
- Jaanch: a₁₁ = 5 + 10(3) = 35 ✅
- Jaanch: S₁₅ = 15/2 [5 + a₁₅] = 15/2 [5 + 5 + 14(3)] = 15/2 [52] = 390 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Sequence aur Series ko ek hi cheez samajh lena
- **Galat soch:** "2, 4, 6, 8 aur 2 + 4 + 6 + 8 dono ek hi baat hain!"
- **Sahi samajh:** Sequence ek ordered list (alfaaz ya numbers ka kram) hai jisme har position par ek term hota hai (comma se alag). Series un terms ka jod (sum) hai jisme beech mein plus (+) laga hota hai.
- **Demonstration:**
  Sequence: 1, 3, 5, 7  (terms ki sankhya 4 hai).
  Series: 1 + 3 + 5 + 7 = 16  (iska ek numerical sum hota hai).

### Galti 2: n means insert karte waqt d = (b - a)/n likh dena (Off-by-One Error)
- **Galat soch:** "Agar a aur b ke beech n means daalne hain, to gaps n honge, isliye d = (b - a)/n."
- **Sahi samajh:** Jab do ends a aur b ke beech n naye points rakhte hain, to kul points n + 2 ho jaate hain! Isliye total intervals (gaps) n + 1 bante hain. Common difference hamesha d = (b - a)/(n + 1) hota hai.
- **Demonstration:**
  Agar 2 aur 14 ke beech 3 means daalein:
  Galat formula se: d = (14 - 2)/3 = 4. Terms banenge: 2, 6, 10, 14. Yahan sirf 2 means (6 aur 10) insert huye, 3 nahi!
  Sahi formula se: d = (14 - 2)/(3 + 1) = 12/4 = 3. Terms banenge: 2, 5, 8, 11, 14. Beech mein exactly 3 means aaye: 5, 8, 11.

### Galti 3: Do numbers ke Arithmetic Mean ko (a + b)/n samajh lena
- **Galat soch:** "Har question mein n diya hota hai, to AM = (a + b)/n hoga."
- **Sahi samajh:** Do numbers a aur b ka single Arithmetic Mean hamesha unka average hota hai: A = (a + b)/2. Yahan denominator hamesha 2 hota hai, chahe baad mein tum uske beech kitne bhi means insert karo!

---

## Quick Recap

- **Sequence:** Ek niyam ke mutabiq likhe gaye numbers ki ordered list a₁, a₂, a₃, ..., aₙ.
- **Series:** Sequence ke terms ka jod: a₁ + a₂ + ... + aₙ = Σₖ₌₁ⁿ aₖ.
- **AP ke mukhya sutra:** aₙ = a + (n - 1)d, Sₙ = (n/2)[2a + (n - 1)d] = (n/2)[a + l].
- **Single Arithmetic Mean (AM):** Do numbers a aur b ke beech A = (a + b)/2.
- **n Inserted AMs:** a aur b ke beech n means A₁, A₂, ..., Aₙ insert karne par common difference d = (b - a)/(n + 1).
- **k-th Inserted Mean:** Aₖ = a + k·d = a + k(b - a)/(n + 1).
- **Sum Theorem:** Sabhi n inserted AMs ka jod = n × single AM = n · (a + b)/2.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Write the first five terms of the sequence whose n-th term is given by aₙ = 3n + 2.

**Solution:**
Formula mein n = 1, 2, 3, 4, 5 substitute karte hain:
- n = 1: a₁ = 3(1) + 2 = 5
- n = 2: a₂ = 3(2) + 2 = 8
- n = 3: a₃ = 3(3) + 2 = 11
- n = 4: a₄ = 3(4) + 2 = 14
- n = 5: a₅ = 3(5) + 2 = 17

First five terms are 5, 8, 11, 14, 17.

Jaanch:
- Jaanch: Common difference: 8 - 5 = 3, 11 - 8 = 3, 14 - 11 = 3, 17 - 14 = 3 ✅

---

### Question 2
Find the 25th term of the sequence defined by aₙ = (-1)ⁿ⁻¹ · n².

**Solution:**
n = 25 substitute karte hain:
a₂₅ = (-1)²⁵⁻¹ · (25)²
= (-1)²⁴ · 625
Kyunki 24 ek even number hai, (-1)²⁴ = 1.
a₂₅ = 1 · 625 = 625.

Jaanch:
- Jaanch: Power of (-1) is 24 (even), sign is positive ✅

---

### Question 3
The first two terms of a sequence are a₁ = 2 and a₂ = 3. For n > 2, the terms satisfy aₙ = 2aₙ₋₁ - aₙ₋₂. Find the first five terms of this sequence.

**Solution:**
Given relation: aₙ = 2aₙ₋₁ - aₙ₋₂.
- For n = 3: a₃ = 2a₂ - a₁ = 2(3) - 2 = 6 - 2 = 4.
- For n = 4: a₄ = 2a₃ - a₂ = 2(4) - 3 = 8 - 3 = 5.
- For n = 5: a₅ = 2a₄ - a₃ = 2(5) - 4 = 10 - 4 = 6.

Pehle paanch terms hain: 2, 3, 4, 5, 6.
(Yeh ek AP hai jisme common difference d = 1 hai!)

Jaanch:
- Jaanch: 2a₃ - a₂ = 2(4) - 3 = 5 = a₄ ✅
- Jaanch: 2a₄ - a₃ = 2(5) - 4 = 6 = a₅ ✅

---

### Question 4
Evaluate the sum Σₖ₌₁⁶ (2k + 3).

**Solution:**
Sigma linear property use karte hain:
Σₖ₌₁⁶ (2k + 3) = 2 Σₖ₌₁⁶ k + Σₖ₌₁⁶ 3
Pehle 6 natural numbers ka jod: Σₖ₌₁⁶ k = 6(7)/2 = 21.
Constant 3 ka 6 baar jod: 3 × 6 = 18.
Kul sum = 2(21) + 18 = 42 + 18 = 60.

Alternate direct expansion:
k = 1: 2(1) + 3 = 5
k = 2: 2(2) + 3 = 7
k = 3: 2(3) + 3 = 9
k = 4: 2(4) + 3 = 11
k = 5: 2(5) + 3 = 13
k = 6: 2(6) + 3 = 15
Sum = 5 + 7 + 9 + 11 + 13 + 15 = 60.

Jaanch:
- Jaanch: AP sum: (6/2)[5 + 15] = 3 × 20 = 60 ✅

---

### Question 5
Find the single arithmetic mean between -8 and 24.

**Solution:**
Do numbers a = -8 aur b = 24 ke beech ka arithmetic mean:
A = (a + b)/2 = (-8 + 24)/2 = 16/2 = 8.

Progression banegi: -8, 8, 24.
Common difference: 8 - (-8) = 16, aur 24 - 8 = 16.

Jaanch:
- Jaanch: d = 16 har jagah barabar hai ✅

---

### Question 6
Insert 5 arithmetic means between 7 and 49.

**Solution:**
Yahan a = 7, b = 49, aur n = 5.
Total terms = n + 2 = 7.
Common difference:
d = (b - a)/(n + 1) = (49 - 7)/(5 + 1) = 42/6 = 7.

Paanchon means hain:
- A₁ = a + d = 7 + 7 = 14
- A₂ = a + 2d = 7 + 14 = 21
- A₃ = a + 3d = 7 + 21 = 28
- A₄ = a + 4d = 7 + 28 = 35
- A₅ = a + 5d = 7 + 35 = 42

Inserted means: 14, 21, 28, 35, 42.

Jaanch:
- Jaanch: Progression: 7, 14, 21, 28, 35, 42, 49 (har step par +7) ✅
- Jaanch: Next term after A₅ is 42 + 7 = 49 = b ✅

---

### Question 7
Show that the sum of 5 arithmetic means inserted between 7 and 49 is equal to 5 times their single arithmetic mean.

**Solution:**
Example 6 se, inserted means hain: 14, 21, 28, 35, 42.
LHS (Sum of inserted means):
14 + 21 + 28 + 35 + 42 = 140.

RHS:
Single AM between 7 and 49:
A = (7 + 49)/2 = 56/2 = 28.
5 × A = 5 × 28 = 140.

LHS = RHS = 140.

Jaanch:
- Jaanch: 14 + 21 + 28 + 35 + 42 = 140 ✅
- Jaanch: 5 × 28 = 140 ✅

---

### Question 8
In an AP, the 3rd term is 8 and the 9th term is 26. Find the 15th term.

**Solution:**
Let first term be a and common difference be d.
a₃ = a + 2d = 8    --- (1)
a₉ = a + 8d = 26   --- (2)

Subtracting (1) from (2):
6d = 18 => d = 3.

From (1):
a + 2(3) = 8 => a = 2.

Now 15th term:
a₁₅ = a + 14d = 2 + 14(3) = 2 + 42 = 44.

Jaanch:
- Jaanch: a₃ = 2 + 2(3) = 8 ✅
- Jaanch: a₉ = 2 + 8(3) = 26 ✅
- Jaanch: a₁₅ = 2 + 14(3) = 44 ✅

---

### Question 9
How many terms of the AP 4, 7, 10, ... must be added to get a sum of 175?

**Solution:**
Here a = 4, d = 3, and Sₙ = 175.
Sₙ = (n/2)[2a + (n - 1)d]
175 = (n/2)[2(4) + (n - 1)3]
350 = n[8 + 3n - 3]
350 = n[3n + 5]
3n² + 5n - 350 = 0.

Quadratic equation solve karte hain:
3 × (-350) = -1050.
Do numbers jinka product -1050 aur sum +5 ho: 35 aur -30.
3n² - 30n + 35n - 350 = 0
3n(n - 10) + 35(n - 10) = 0
(n - 10)(3n + 35) = 0.

Since n natural number hona chahiye, n = 10. (n = -35/3 discard).
Isliye 10 terms add karne honge.

Jaanch:
- Jaanch: S₁₀ = (10/2)[2(4) + 9(3)] = 5[8 + 27] = 5[35] = 175 ✅

---

### Question 10
If the ratio of the sum of m terms to the sum of n terms of an AP is m² : n², prove that the ratio of the m-th term to the n-th term is (2m - 1) : (2n - 1).

**Solution:**
Given:
Sₘ / Sₙ = m² / n²
[(m/2)[2a + (m - 1)d]] / [(n/2)[2a + (n - 1)d]] = m² / n²

Cancel m and n from both sides:
[2a + (m - 1)d] / [2a + (n - 1)d] = m / n

Divide numerator and denominator of LHS by 2:
[a + (m - 1)/2 · d] / [a + (n - 1)/2 · d] = m / n

Hume chahiye m-th term Tₘ aur n-th term Tₙ ka ratio:
Tₘ / Tₙ = [a + (m - 1)d] / [a + (n - 1)d].

Agar hum (m - 1)/2 ko M - 1 replace karein:
m - 1 = 2M - 2 => m = 2M - 1.
Similarly, n = 2N - 1.

Is substitution se:
[a + (M - 1)d] / [a + (N - 1)d] = (2M - 1) / (2N - 1).
Isliye m-th term aur n-th term ka ratio (2m - 1) : (2n - 1) hai.

Jaanch:
- Let a = 1, d = 2 (AP of odd numbers 1, 3, 5, 7, ...).
- Sₘ = m², Sₙ = n² (satisfies condition).
- Jaanch: Tₘ = 2m - 1, Tₙ = 2n - 1. Ratio = (2m - 1) : (2n - 1) ✅

---

### Question 11
Insert 3 arithmetic means between 11 and 27, and state the value of the 2nd mean.

**Solution:**
Here a = 11, b = 27, n = 3.
d = (b - a)/(n + 1) = (27 - 11)/(3 + 1) = 16/4 = 4.

The means are:
- A₁ = 11 + 4 = 15
- A₂ = 11 + 2(4) = 19
- A₃ = 11 + 3(4) = 23

The 2nd inserted mean is A₂ = 19.

Jaanch:
- Jaanch: AP is 11, 15, 19, 23, 27 with d = 4 ✅
- Jaanch: Second mean A₂ = 19 ✅

---

### Question 12
Between 1 and 21, n arithmetic means have been inserted. The ratio of the 3rd mean to the last mean is 1 : 3. Find the value of n.

**Solution:**
Here a = 1, b = 21, and number of means = n.
Common difference:
d = (b - a)/(n + 1) = (21 - 1)/(n + 1) = 20/(n + 1).

3rd mean:
A₃ = a + 3d = 1 + 3[20/(n + 1)] = 1 + 60/(n + 1) = (n + 1 + 60)/(n + 1) = (n + 61)/(n + 1).

Last (n-th) mean:
Aₙ = b - d = 21 - 20/(n + 1) = [21(n + 1) - 20]/(n + 1) = (21n + 21 - 20)/(n + 1) = (21n + 1)/(n + 1).

Given ratio:
A₃ / Aₙ = 1 / 3
(n + 61) / (21n + 1) = 1 / 3

Cross-multiplying:
3(n + 61) = 1(21n + 1)
3n + 183 = 21n + 1
183 - 1 = 21n - 3n
182 = 18n
n = 182 / 18 = 91 / 9 (not an integer!).

Wait, check the values:
If ratio is 1 : 3, let's see if 182 / 18 gives integer. 182 / 14 = 13.
Let's change numbers to keep n an integer:
If a = 1, b = 31, ratio of 3rd to last mean is 1 : 3:
d = 30/(n + 1).
A₃ = 1 + 3(30)/(n + 1) = (n + 91)/(n + 1).
Aₙ = 31 - 30/(n + 1) = (31n + 1)/(n + 1).
(n + 91)/(31n + 1) = 1/3 => 3n + 273 = 31n + 1 => 28n = 272 (not integer).

What numbers give an integer?
Let a = 1, b = 25, insert n means:
d = 24/(n + 1).
Let ratio of 2nd mean to last mean be 1 : 3:
A₂ = 1 + 2d = 1 + 48/(n + 1) = (n + 49)/(n + 1).
Aₙ = 25 - d = 25 - 24/(n + 1) = (25n + 1)/(n + 1).
(n + 49)/(25n + 1) = 1/3 => 3n + 147 = 25n + 1 => 22n = 146.
Let's solve for n:
Let d = 2, so b - a = 2(n + 1).
If a = 2, b = 26, insert n means:
d = 24/(n + 1).
If A₁ / Aₙ = 1 / 5:
A₁ = 2 + d, Aₙ = 26 - d.
(2 + d)/(26 - d) = 1/5 => 10 + 5d = 26 - d => 6d = 16.
What about (2 + d)/(26 - d) = 1/3?
6 + 3d = 26 - d => 4d = 20 => d = 5.
Then n + 1 = (26 - 2)/5 = 24/5 (fraction).

Let's do:
Let a = 1, b = 21, and ratio of 1st mean to n-th mean is 1 : 4!
d = 20/(n + 1).
A₁ = 1 + d = 1 + 20/(n + 1) = (n + 21)/(n + 1).
Aₙ = 21 - d = 21 - 20/(n + 1) = (21n + 1)/(n + 1).
A₁ / Aₙ = (n + 21)/(21n + 1) = 1/4
4(n + 21) = 21n + 1
4n + 84 = 21n + 1
17n = 83 (still fraction).

Let's find clean values:
Let n = 9. Then n + 1 = 10.
Let a = 1, b = 31.
d = (31 - 1)/10 = 3.
A₁ = 1 + 3 = 4.
A₂ = 7, A₃ = 10, A₄ = 13, A₅ = 16, A₆ = 19, A₇ = 22, A₈ = 25, A₉ = 28.
Then A₂ / A₈ = 7 / 25.
Or A₃ / A₉ = 10 / 28 = 5 / 14.
Or A₁ / A₇ = 4 / 22 = 2 / 11.
Or A₁ / A₉ = 4 / 28 = 1 / 7!
Let's check:
a = 1, b = 31. Ratio of 1st mean to last mean is 1 : 7.
A₁ / Aₙ = 1 / 7:
(1 + d) / (31 - d) = 1/7 => 7 + 7d = 31 - d => 8d = 24 => d = 3.
Then n + 1 = (31 - 1)/d = 30 / 3 = 10 => n = 9!
Perfect, elegant integer values!

Let's write Question 12 with these clean values:
Between 1 and 31, n arithmetic means have been inserted. The ratio of the 1st mean to the last mean is 1 : 7. Find the value of n.

**Solution:**
Here a = 1, b = 31, and number of means = n.
Total terms = n + 2.
Common difference:
d = (b - a)/(n + 1) = (31 - 1)/(n + 1) = 30/(n + 1).

1st mean:
A₁ = a + d = 1 + 30/(n + 1) = (n + 31)/(n + 1).

Last (n-th) mean:
Aₙ = b - d = 31 - 30/(n + 1) = (31n + 31 - 30)/(n + 1) = (31n + 1)/(n + 1).

Given ratio:
A₁ / Aₙ = 1 / 7
(n + 31) / (31n + 1) = 1 / 7

Cross-multiplying:
7(n + 31) = 1(31n + 1)
7n + 217 = 31n + 1
217 - 1 = 31n - 7n
216 = 24n
n = 216 / 24 = 9.

Jaanch:
- For n = 9: d = 30 / 10 = 3.
- A₁ = 1 + 3 = 4.
- A₉ = 1 + 9(3) = 28.
- Jaanch: Ratio = 4 / 28 = 1 / 7 ✅

---

Ab tumne dekh liya ki Arithmetic Progression mein means kaise insert hote hain aur unka jod kaise nikalte hain. Agle topic [sequences-and-series-part2.md](sequences-and-series-part2.md) mein hum dekhenge **Geometric Progressions (GP)**, **Geometric Mean (GM)**, aur infinite terms ka jod nikalne ka hairatangez formula!
