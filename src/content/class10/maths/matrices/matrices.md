# Chapter: Matrices

> **Class:** 10 | **Subject:** Mathematics
> Ye Class 10 Maths ka aathwa chapter hai. Pichhla chapter Ratio and Proportion tha, jiska aakhri topic yahan hai: [ratio-and-proportion-part5.md](../ratio-and-proportion/ratio-and-proportion-part5.md). (Class 9 aur Class 10 mein ab tak matrix ka koi chapter nahi aaya, isliye ye topic numbers ke dabbe ko bilkul shuru se samjhata hai.)
> **Topics covered in this file:**
> 1. Numbers Ka Dabba: Matrix Kya Hota Hai?

---

# Topic 1: Numbers Ka Dabba: Matrix Kya Hota Hai?

Pichhle chapter mein humne do ya teen cheezon ko ratio se tola: "kitna guna". Ab ek naya sawaal: jab **bahut saari cheezon ke bahut saare numbers** ek saath saamne hon, to unhe kaise likhein ki ek nazar mein sab samajh aa jaye? Aisi jagah par hum numbers ko ek **dabbe** mein, rows aur columns mein sajate hain. Is dabbe ka naam hai **matrix**. Is chapter mein hum matrix ko padhna, jodna-ghatana aur guna karna seekhenge; pehle topic mein sirf itna: **matrix hota kya hai, usme kaun sa number kahan baitha hai, aur uska aakar (order) kaise batate hain.**

---

## Srijan aur Papa ka stock register

Ravivaar ko Srijan Papa ki joote ki dukaan par hai. Papa ke paas ek mota register hai jisme har cheez ka stock likha hai. Aaj register mein **teen sizes** (6, 7, 8) aur **teen colours** (Black, Brown, White) ke joote hain:

```
           Black  Brown  White
Size 6  [    4      2      5    ]
Size 7  [    3      6      1    ]
Size 8  [    7      0      2    ]
```

> **Figure 1.1** – Papa ka stock register. Har size ek line (row) hai, har colour ek khada hissa (column). Brackets sirf numbers ko gher rahe hain; size aur colour ke naam bahar likhe hain.

Ek grahak aaya: "Size 8 mein brown joote hain?" Papa ne Srijan se poochha. Srijan ne register par ungli rakhi: **pehle size 8 wali line dhoondhi**, phir us line mein **brown wala column**. Wahan likha tha 0. "Nahi hain, mangwane padenge."

Srijan ko ek baat samajh aayi: size aur colour ke naam hata bhi do, to bhi agar yaad rahe ki **pehli line size 6 ki hai aur pehla column Black ka**, to sirf numbers se kaam chal jata hai. Aise numbers ke dabbe ko, brackets ke andar, **matrix** kehte hain. Bas itna hi.

Class 9 Statistics ([statistics-part2.md](../../../class9/maths/statistics/statistics-part2.md)) mein Raghu bhaiya ki dukaan ke joote ki **ek hi cheez** (size) ki tally aur frequency table thi: size ke aage bas ek number. Srijan ka register ek kadam aage hai: yahan **do cheezein ek saath** (size aur colour) hain, isliye numbers ek line mein nahi, ek chaukor dabbe mein aate hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Matrix** | Numbers ko rows aur columns mein, ek chaukor ya aayat dabbe mein, brackets ke andar sajana | Figure 1.2 ka A |
| **Row** | Matrix ki ek aadi (left se right) line | A ki pehli row: 4, 2, 5 |
| **Column** | Matrix ki ek khadi (upar se neeche) line | A ka pehla column: 4, 3, 7 |
| **Element** | Matrix ke andar ka ek akela number | A mein 6 ek element hai |
| **Position** | Element kis row aur kis column mein hai: pehle row, phir column. a₂₃ ka matlab 2nd row, 3rd column ka element | A mein a₂₃ = 1 |
| **Order** | Matrix ka aakar: m × n, yaani m rows aur n columns (pehle rows, phir columns) | A ka order 3 × 3 |
| **Row matrix** | Jisme sirf ek row ho (order 1 × n) | Size 7 ki row: 3, 6, 1 |
| **Column matrix** | Jisme sirf ek column ho (order m × 1) | Brown ka column: 2, 6, 0 |
| **Square matrix** | Jisme rows aur columns barabar hon (m = n) | A ka order 3 × 3 |
| **Main diagonal** | Square matrix mein upar-left se neeche-right tak ke elements | A mein 4, 6, 2 |
| **Zero matrix (O)** | Jisme har element 0 ho | Sab joote bik jaane ke baad ka register |
| **Diagonal matrix** | Square matrix jisme main diagonal ke bahar ke sab elements 0 hon | Figure 1.7 ka diagonal wala |
| **Identity matrix (I)** | Diagonal matrix jisme main diagonal ke sab elements 1 hon: "ek ka matrix" | Figure 1.7 ke I |

---

## Part A: Matrix kya hai, aur kaun sa number kahan hai

### Kyun: size aur colour ke naam hata sakte hain

Register mein naam isliye likhe the ki hum bhool na jayein ki line kis size ki hai. Par agar **kram pakka ho**, to naam ki zaroorat nahi. Isse numbers ka dabba chhota aur saaf ho jata hai, aur aage hum use jod, ghata aur guna bhi paayenge. Matrix ko hum capital letter se naam dete hain; Srijan ke register ko **A** kehte hain:

```
    [ 4  2  5 ]
A = [ 3  6  1 ]
    [ 7  0  2 ]
```

> **Figure 1.2** – Stock register ka matrix A. Teen rows (size 6, 7, 8) aur teen columns (Black, Brown, White). Size 6 ki row sabse upar hai, Black ka column sabse left mein.

(Matrix ko kabhi round brackets ( ) mein bhi likhte hain; hum is chapter mein square brackets [ ] hi rakhenge.)

### Kyun: position mein pehle row, phir column

Class 9 ke Coordinate Geometry ([coordinate-geometry.md](../../../class9/maths/coordinate-geometry/coordinate-geometry.md), Part E: Ordered Pair) mein tumne dekha tha ki ordered pair mein **kram maayne rakhta hai**: pehla number kis cheez ke liye, doosra kis cheez ke liye. (7, 2) aur (2, 7) alag jagah dikhate hain. Matrix mein bhi yahi hota hai: kisi element ko pakadne ke liye do numbers chahiye, aur kram pakka hona chahiye.

**Niyam:** pehle **row** ka number, phir **column** ka number. Element ko a ke saath do chhote numbers likhkar dikhate hain:

```
           column 1  column 2  column 3
row 1   [    a₁₁       a₁₂       a₁₃     ]
row 2   [    a₂₁       a₂₂       a₂₃     ]
row 3   [    a₃₁       a₃₂       a₃₃     ]
```

> **Figure 1.3** – Har element ka apna naam. a₂₃ ka pehla chhota number 2 row batata hai, doosra 3 column batata hai: yaani 2nd row aur 3rd column ka element.

a₁₂ aur a₂₁ alag hote hain. A mein a₁₂ = 2 (size 6, Brown), jabki a₂₁ = 3 (size 7, Black). Kram badalne par doosra hi joota-dabba mil gaya.

### Example 1: register se matrix aur wapas

Papa ka sawaal: "size 7, Brown ke kitne jode?" Size 7 doosri row hai, Brown doosra column. **Element a₂₂ = 6.** Aur "size 8, Brown?" Size 8 teesri row hai, Brown doosra column, to **a₃₂ = 0.**

**Jaanch:** Figure 1.1 mein "Size 7" wali line aur "Brown" wala column jahan milte hain wahan 6 likha hai ✅. "Size 8" aur "Brown" jahan milte hain wahan 0 hai ✅.

### Example 2: A ke kuch aur elements padhna

A mein: a₁₃ = 5 (size 6, White), a₂₃ = 1 (size 7, White), a₃₁ = 7 (size 8, Black).

**Ulta sawaal:** 0 kahan hai? Teesri row aur doosre column mein, yaani a₃₂. **Aur 2 kahan hai?** Do jagah: a₁₂ aur a₃₃. Ek hi number alag-alag positions par ho sakta hai, isliye number se position nahi, **position se number** nikalte hain.

**Jaanch:** a₃₃ ke liye teesri row (7, 0, 2) ka teesra number 2 hai ✅, aur a₁₂ ke liye pehli row (4, 2, 5) ka doosra number bhi 2 hai ✅.

### Example 3: mark-sheet se matrix

Teacher ma'am ne do bachchon (Roll 1 aur Roll 2) ke teen subjects ke marks (10 mein se) likhe. Pehle bachche ke 8, 6, 9 aur doosre ke 7, 9, 5.

```
            Maths   Science  English
Roll 1  [     8        6        9     ]
Roll 2  [     7        9        5     ]

    [ 8  6  9 ]
B = [ 7  9  5 ]
```

> **Figure 1.4** – Mark-sheet (upar) aur uska matrix B (neeche). Har bachcha ek row hai, har subject ek column.

Do rows (do bachche) aur teen columns (teen subjects), to B ka order 2 × 3 hai. **b₂₃ = 5** (Roll 2 ka English), aur **b₁₂ = 6** (Roll 1 ka Science).

**Jaanch:** B ki doosri row 7, 9, 5 hai, uska teesra number 5 hai, aur mark-sheet mein Roll 2 ke English ke aage bhi 5 hai ✅.

### Example 4: bus ki seating chart

Ek chhoti bus ki baayi taraf har row mein 2 seat hain: window aur aisle. Teen rows hain. Booking chart mein 1 ka matlab "booked" aur 0 ka matlab "khaali". Aaj row 1 mein sirf window booked hai, row 2 mein dono seat booked hain, aur row 3 mein koi booked nahi.

```
           Window  Aisle
Row 1   [    1       0     ]
Row 2   [    1       1     ]
Row 3   [    0       0     ]

    [ 1  0 ]
C = [ 1  1 ]
    [ 0  0 ]
```

> **Figure 1.5** – Seating chart (upar) aur uska matrix C (neeche). Teen rows aur do columns ka chart.

C mein teen rows aur do columns hain, to C ka order 3 × 2 hai. **c₃₁ = 0 aur c₃₂ = 0**: teesri row ki dono seat khaali hain. Booked seat gino to teen 1 milte hain: **3 seat booked.**

**Story check:** chart mein 3 rows × 2 seat = 6 seat hain, aur C mein bhi 6 elements hain; 3 booked aur 3 khaali, jod 6. (Ye "3" seat ginne ka ek **number** hai, C khud nahi: is farq par Aam galtiyan mein wapas aayenge.)

### Example 5: rule se matrix likhna

Position ko pakka karne ke liye ek khel: order 2 × 3 ka ek matrix likho jisme har element = 3 × (row number) − (column number) ho.

Row 1: 3 − 1 = 2, 3 − 2 = 1, 3 − 3 = 0. Row 2: 6 − 1 = 5, 6 − 2 = 4, 6 − 3 = 3.

```
    [ 2  1  0 ]
P = [ 5  4  3 ]
```

> **Figure 1.6** – Rule wala matrix P, order 2 × 3.

**Jaanch:** p₂₃ ke liye row number 2, column number 3: 3 × 2 − 3 = 3, aur P ki doosri row ka teesra number 3 hai ✅.

---

## Part B: Order, yaani matrix ka aakar

### Kyun: do dabbe ek jaise dikh sakte hain, par alag hote hain

Agar tum koi box mangwao aur sirf bolo "6 cheezein" to kaafi nahi: 2 rows × 3 columns ya 3 rows × 2 columns? Dono mein 6 cheezein hain, par shape alag hai. Isliye matrix ka aakar bataane ke liye **order** likhte hain: **m × n, yaani pehle rows, phir columns.** Ye bhi (x, y) jaise kram ka khel hai: 2 × 3 aur 3 × 2 alag order hain.

**Niyam:** m rows aur n columns wale matrix ka order m × n hai, aur usme **m × n elements** hote hain.

| Matrix | Rows | Columns | Order | Elements |
|---|---|---|---|---|
| A (stock register) | 3 | 3 | 3 × 3 | 9 |
| B (mark-sheet) | 2 | 3 | 2 × 3 | 6 |
| C (seating chart) | 3 | 2 | 3 × 2 | 6 |
| P (rule wala) | 2 | 3 | 2 × 3 | 6 |

B aur C mein 6-6 elements hain, par B ka order 2 × 3 hai aur C ka 3 × 2: **elements ki ginti barabar ho to bhi order alag ho sakta hai.**

### Example 6: order batao aur elements ginao

Matrix B (Figure 1.4): row ginte hain: 2; column ginte hain: 3. Order 2 × 3, elements 2 × 3 = 6.

**Jaanch:** B mein 8, 6, 9, 7, 9, 5 chhe numbers likhe hain ✅. Aur C mein 1, 0, 1, 1, 0, 0 bhi chhe hain, 3 × 2 = 6 ✅.

---

## Part C: Matrix ke kuch khaas roop

### Kyun: naam dene se baat chhoti ho jati hai

"Ek hi row wala matrix" ya "jisme har number 0 ho" baar-baar kehna lamba padta hai. Isliye khaas shaklon ke naam rakhe gaye hain. Srijan ke register se hi sab nikal aate hain.

- **Row matrix:** sirf ek row. Size 7 ki line (A ki doosri row) alag nikalo: 3, 6, 1 ek row mein, order 1 × 3.
- **Column matrix:** sirf ek column. Brown ka column: 2, 6, 0 ek ke neeche ek, order 3 × 1.
- **Square matrix:** rows = columns. A ka order 3 × 3 hai, to A square hai. Square matrix mein **main diagonal** hota hai: upar-left se neeche-right: A mein a₁₁, a₂₂, a₃₃, yaani 4, 6, 2. (Main diagonal sirf square matrix ke liye kehte hain.)
- **Zero matrix (O):** har element 0. Diwali sale mein sab joote bik jayein to register ka matrix zero matrix ban jata hai. Zero matrix kisi bhi order ka ho sakta hai.
- **Diagonal matrix:** square matrix jisme main diagonal ke **bahar** ke sab elements 0 hon. A ka diagonal 4, 6, 2 rakhkar baaki sab 0 kar do, to diagonal matrix mil jata hai. Diagonal ke elements khud 0 ho sakte hain; zaroori sirf bahar wale ka 0 hona hai.
- **Identity matrix (I):** diagonal matrix jisme diagonal ke sab elements 1 hon. Ise "**ek ka matrix**" kehte hain, kyunki aage jaakar ye "kuch na karne wala" matrix banega, bilkul jaise 1 se guna karne par number nahi badalta. Order ko I₂ (2 × 2) aur I₃ (3 × 3) likh kar dikhate hain.

```
Row matrix, order 1 × 3:
[ 3  6  1 ]

Column matrix, order 3 × 1:
[ 2 ]
[ 6 ]
[ 0 ]

Square matrix, order 3 × 3 (ye A hai):
[ 4  2  5 ]
[ 3  6  1 ]
[ 7  0  2 ]

Zero matrix O, order 3 × 3:
[ 0  0  0 ]
[ 0  0  0 ]
[ 0  0  0 ]

Diagonal matrix, order 3 × 3 (A ka main diagonal rakha, baaki 0):
[ 4  0  0 ]
[ 0  6  0 ]
[ 0  0  2 ]

Identity matrix I₂, order 2 × 2:
[ 1  0 ]
[ 0  1 ]

Identity matrix I₃, order 3 × 3:
[ 1  0  0 ]
[ 0  1  0 ]
[ 0  0  1 ]
```

> **Figure 1.7** – Khaas roopon ki jhalak. Row aur column matrix A ki ek row aur ek column se bane hain. Diagonal matrix ka diagonal A wala hi hai, baaki 0. Identity matrix ka diagonal sab 1 hai.

Ek chhoti honesty note: **har identity matrix diagonal matrix hai, par har diagonal matrix identity nahi.** Diagonal matrix 4, 6, 2 wala identity nahi, kyunki uske diagonal par 1 nahi hain. Aur zero matrix agar square ho, to wo bhi diagonal matrix ke niyam par khara utarta hai (bahar ke sab 0 hain).

### Example 7: pehchano ye kaun sa matrix hai

Figure 1.8 ke chhe matrices ka order aur roop batao.

```
(i)
[ 5  2  8 ]

(ii)
[ 9 ]
[ 4 ]
[ 0 ]

(iii)
[ 0  0  0 ]
[ 0  0  0 ]

(iv)
[ 5  0  0 ]
[ 0  8  0 ]
[ 0  0  3 ]

(v)
[ 4  0 ]
[ 3  7 ]

(vi)
[ 0  0 ]
[ 0  5 ]
```

> **Figure 1.8** – Chhe matrices (i) se (vi) tak, pehchaan ke liye.

- (i): ek row, teen columns. **Row matrix, order 1 × 3.**
- (ii): teen rows, ek column. **Column matrix, order 3 × 1.** (Is column ka aakhri element 0 hai: koi dikkat nahi.)
- (iii): har element 0, do rows aur teen columns. **Zero matrix, order 2 × 3.** Ye square nahi hai (2 ≠ 3), isliye ise diagonal matrix nahi kehte.
- (iv): square, order 3 × 3, bahar ke sab 0. **Diagonal matrix**, main diagonal 5, 8, 3. Ye identity nahi (diagonal par 1 nahi).
- (v): square, order 2 × 2, par a₂₁ = 3, jo 0 nahi hai. **Square hai, diagonal nahi.**
- (vi): square, order 2 × 2, bahar ke sab 0 (a₁₂ = 0, a₂₁ = 0), diagonal 0 aur 5. **Diagonal matrix** hai, bhale pehla diagonal element 0 hai. Zero matrix nahi, kyunki 5 maujood hai.

**Jaanch:** (v) mein bahar ke elements a₁₂ = 0 aur a₂₁ = 3 hain: ek 0 nahi hai, isliye diagonal nahi ✅. (iv) mein bahar ke chhe element 0 hain ✅. (iii) mein elements 2 × 3 = 6 hain aur sab 0 ✅.

### Example 8: apne haath se likho

Srijan ne Diwali sale ke baad ek chhota sa sawaal socha: "size 6 aur 7 ke Black aur Brown, saare bik gaye. Iska matrix kya hoga?" Do sizes (2 rows) aur do colours (2 columns), to order 2 × 2, aur chaaron elements 0. Ye **zero matrix O** hai (Figure 1.7 ka O isi ka bada bhai hai).

**Jaanch:** elements 2 × 2 = 4 hain aur sab 0 ✅. Story check: bikri ke baad kuch bacha nahi, matrix mein bhi kuch nahi bacha.

---

## Aam galtiyan (bachke rehna)

**Galti 1: order ko "columns × rows" padhna (2 × 3 ko teen rows ke saath banana)**

Ek bachche ko do bachchon ke teen subjects ke marks likhne the. Mark-sheet:

```
Table (2 rows, 3 columns):
            Maths   Science  English
Roll 1  [     5        9        3     ]
Roll 2  [     8        4        7     ]

Bachche ka matrix (galat):
[ 5  9 ]
[ 3  8 ]
[ 4  7 ]

Sahi matrix, order 2 × 3:
[ 5  9  3 ]
[ 8  4  7 ]
```

> **Figure 1.9** – Galat aur sahi matrix. Bachche ne numbers ko line mein padha (5, 9, 3, 8, 4, 7) aur "3 × 2" soch kar teen rows kaat di.

Bachche ne kaha "do bachche, teen subject, to order 3 × 2." Phir teen rows banayi. Par pehla number **rows** ka hota hai, aur rows yahan bachche hain: 2. Subjects columns hain: 3. Isliye order **2 × 3** hai.

**Jaanch:** bachche ke matrix ki pehli row [ 5  9 ] hai, jisme Roll 1 ke sirf do marks hain (English wala 3 doosri row mein chala gaya), yaani galat hai. Sahi matrix ki pehli row [ 5  9  3 ] hai, jo Roll 1 ke teeno marks hain ✅.

**Galti 2: matrix ko ek number samajhna (elements ka jod likh dena)**

Sunday ko Srijan ne sirf size 6 aur 7 ke Black aur Brown ki bikri likhi. Ek dost ne dekhkar kaha: "Is matrix ki value 14 hai."

```
Sunday ki bikri:
           Black  Brown
Size 6  [    2      6    ]
Size 7  [    5      1    ]

Ye ek matrix hai:
[ 2  6 ]
[ 5  1 ]

Ye ek number hai, matrix nahi: 14

Ek aur table jiska jod bhi 14 hai:
[ 7  7 ]
[ 0  0 ]
```

> **Figure 1.10** – Ek matrix aur uske elements ka jod. 14 sirf ek ginti hai; ye batata hi nahi ki kaun sa size aur colour kitna bika.

Matrix ka **koi ek value nahi** hota: wo numbers ka poora dabba hai, jisme har element ki apni position hai. Elements ka jod 14 ek number hai, aur use "matrix" kehna galat hai. Dekho: figure ke upar wala matrix aur neeche wala matrix bilkul alag bikri dikhate hain, par dono ke elements ka jod 14 hi hai. Sirf 14 dekhkar Srijan ko ye pata hi nahi chalta ki size 7 Brown kitna bika.

**Jaanch:** 2 + 6 + 5 + 1 = 14, aur 7 + 7 + 0 + 0 = 14 ✅ (dono ka jod barabar hai). Par dono matrix alag hain (a₂₁ = 5 upar wale mein, 0 neeche wale mein), isliye jod matrix ki jagah nahi le sakta.

---

## Quick Recap

- **Matrix** numbers ka rows aur columns mein sajaya hua dabba hai, jo brackets mein likha jata hai. Hum capital letter se naam dete hain: A, B, C.
- Har number ko **element** kehte hain. Element ki **position** a₂₃ jaisi likhi jati hai: **pehle row, phir column.** a₁₂ aur a₂₁ alag elements hain.
- **Order m × n** matlab m rows aur n columns (pehle rows). Elements ki ginti m × n hoti hai. 2 × 3 aur 3 × 2 alag order hain.
- Khaas roop: **row matrix** (1 × n), **column matrix** (m × 1), **square matrix** (m = n, main diagonal usi mein), **zero matrix O** (sab 0), **diagonal matrix** (diagonal ke bahar sab 0), **identity matrix I** (diagonal par sab 1, baaki 0: "ek ka matrix").
- Har identity matrix diagonal hai, par har diagonal matrix identity nahi.
- Aam galtiyan: order ko columns × rows padhna, aur matrix ko ek number (elements ka jod) samajhna.

---

## Practice Questions

Use the figures below for the questions that refer to them. Check each answer in the original table or matrix.

```
Table for Question 1 (Size 5 and Size 6, three colours):
            Navy    Grey     Tan
Size 5  [     9       1       3    ]
Size 6  [     2       8       4    ]

Table for Question 8 (bus seating, 1 = booked, 0 = free):
           Seat 1  Seat 2  Seat 3
Row 1   [    1       1       0    ]
Row 2   [    0       1       0    ]
Row 3   [    1       0       0    ]

Table for Question 10 (marks out of 10):
            Maths  Science
Roll 1  [     6       3    ]
Roll 2  [     9       5    ]
Roll 3  [     4       8    ]
```

> **Figure 1.11** – Three tables for Questions 1, 8 and 10. In each, the brackets enclose only the numbers.

```
Matrix for Question 2:
[ 5  8  2 ]
[ 9  0  4 ]
[ 1  7  3 ]

Matrices for Question 3:
(a)
[ 3  7 ]

(b)
[ 2 ]
[ 5 ]
[ 8 ]

(c)
[ 4  1  0 ]
[ 6  2  9 ]

(d)
[ 8  3 ]
[ 0  5 ]
[ 7  1 ]

(e)
[ 6  4  0 ]
[ 1  1  7 ]
[ 3  8  2 ]

Matrices for Question 6:
(a)
[ 0  0  0 ]

(b)
[ 7  0 ]
[ 0  3 ]

(c)
[ 1  0  0 ]
[ 0  1  0 ]
[ 0  0  1 ]

(d)
[ 0 ]
[ 0 ]

(e)
[ 2  5 ]
[ 0  8 ]

Matrix for Question 12:
[ 4  9 ]
[ 1  7 ]
[ 3  2 ]

Matrix for Question 13:
[ 3  5  1 ]
[ 4  0  6 ]
```

> **Figure 1.12** – Matrices for Questions 2, 3, 6, 12 and 13.

1. Using the table in Figure 1.11, write the stock as a matrix. State its order and the number of its elements. What does the element in the 2nd row and 3rd column mean in the shop, and what is its value?
2. For the matrix of Question 2 in Figure 1.12, write the elements a₁₃, a₂₁ and a₃₂. Write the position of the element 7 and of the element 9. What is the value of a₂₂?
3. Write the order of each matrix (a) to (e) in Question 3 of Figure 1.12.
4. Write the 3 × 2 matrix in which each element equals 2 × (row number) + (column number).
5. A matrix has 6 elements and at most 3 rows and at most 3 columns. List every order it can have. Explain why no matrix with at most 3 rows and at most 3 columns can have exactly 7 elements.
6. For each matrix (a) to (e) of Question 6 in Figure 1.12, write all the names that fit from this list: row matrix, column matrix, square matrix, zero matrix, diagonal matrix, identity matrix.
7. Write (a) the zero matrix of order 3 × 2, (b) the identity matrix of order 2, (c) the diagonal matrix of order 3 whose main diagonal is 7, 0, 9.
8. Using the seating table in Figure 1.11, write the booking matrix. State its order. Which seats of Row 3 are free, written as positions of elements? How many seats are booked in all? Is this count the matrix itself?
9. Say whether each statement is true or false and give a reason. (a) A 2 × 3 matrix and a 3 × 2 matrix have the same order. (b) In the element a₁₃ the 1 is the column number and the 3 is the row number. (c) Every identity matrix is a diagonal matrix. (d) Every diagonal matrix is an identity matrix. (e) A matrix with exactly 5 elements cannot be a square matrix. (f) A zero matrix must be a square matrix.
10. Using the marks table in Figure 1.11, write the matrix. What is its order? What does the element a₃₂ mean, and what is its value? What does a₁₂ = 3 mean?
11. Write the 2 × 3 matrix in which each element equals 9 − (row number × column number). Which value appears twice, and at which two positions?
12. A student wrote the order of the matrix of Question 12 in Figure 1.12 as 2 × 3. Find the mistake and give the correct order.
13. A student looked at the stock matrix of Question 13 in Figure 1.12 and wrote "the matrix is 19". Explain what is wrong, and say what the 19 really counts.

### Answers

**1.** Do rows (sizes 5, 6) aur teen columns (colours), to table ke numbers ko brackets mein rakhte hain.

```
[ 9  1  3 ]
[ 2  8  4 ]
```

> **Figure 1.13** – Question 1 ka matrix, order 2 × 3.

Order 2 × 3, elements 2 × 3 = 6. 2nd row (Size 6) aur 3rd column (Tan): element 4, yaani **size 6 Tan ke 4 jode.**
**Jaanch:** table mein Size 6 ke aage Tan ke niche 4 hai ✅, aur elements 9, 1, 3, 2, 8, 4 chhe hain ✅.

**2.** a₁₃ = 2 (pehli row ka teesra), a₂₁ = 9 (doosri row ka pehla), a₃₂ = 7 (teesri row ka doosra). Element 7 **teesri row, doosre column** (a₃₂) mein hai; element 9 **doosri row, pehle column** (a₂₁) mein hai. a₂₂ = 0.
**Jaanch:** doosri row 9, 0, 4 hai: uska doosra number 0 ✅, aur 9 usi row ka pehla ✅.

**3.** (a) 1 × 2 (ek row, do columns). (b) 3 × 1. (c) 2 × 3. (d) 3 × 2. (e) 3 × 3.
**Jaanch:** elements gino: (a) 2 = 1 × 2 ✅, (b) 3 = 3 × 1 ✅, (c) 6 = 2 × 3 ✅, (d) 6 = 3 × 2 ✅, (e) 9 = 3 × 3 ✅.

**4.** Element = 2 × row + column. Row 1: 3, 4. Row 2: 5, 6. Row 3: 7, 8.

```
[ 3  4 ]
[ 5  6 ]
[ 7  8 ]
```

> **Figure 1.14** – Question 4 ka matrix, order 3 × 2.

**Jaanch:** teesri row, doosra column: 2 × 3 + 2 = 8, aur matrix mein aakhri element 8 hai ✅.

**5.** m × n = 6 aur m ≤ 3, n ≤ 3. Jodiyan: 2 × 3 aur 3 × 2 (1 × 6 mein 6 columns, 6 × 1 mein 6 rows chahiye, jo 3 se zyada hain). **Orders: 2 × 3 aur 3 × 2.** 7 ke sirf 1 × 7 aur 7 × 1 jaise factor hain (7 prime hai), jinme 7 rows ya 7 columns chahiye, isliye jis matrix mein rows aur columns 3 se zyada nahi, usme 7 elements nahi ban sakte.
**Jaanch:** 2 × 3 = 6 ✅, 3 × 2 = 6 ✅, aur 1 × 6 = 6 par 6 columns 3 se zyada hain.

**6.** (a) ek row, teen zero: **row matrix** aur **zero matrix** (1 × 3). Square nahi hai, isliye diagonal nahi. (b) 2 × 2, bahar ke 0, 0: **square matrix** aur **diagonal matrix**, identity nahi (diagonal par 7 aur 3). (c) **identity matrix** (aur isliye diagonal aur square bhi). (d) do rows, ek column, dono 0: **column matrix** aur **zero matrix** (2 × 1). (e) 2 × 2: sirf **square matrix**, kyunki a₁₂ = 5 ≠ 0, isliye diagonal nahi.
**Jaanch:** (b) ke bahar ke elements 0, 0 ✅; (e) mein a₁₂ = 5 hai, isliye diagonal nahi ✅.

**7.** (a) 3 rows aur 2 columns, sab 0. (b) I₂, diagonal par 1, baaki 0. (c) diagonal 7, 0, 9, baaki sab 0.

```
Zero matrix O, order 3 × 2:
[ 0  0 ]
[ 0  0 ]
[ 0  0 ]

Identity matrix I₂:
[ 1  0 ]
[ 0  1 ]

Diagonal matrix, diagonal 7, 0, 9:
[ 7  0  0 ]
[ 0  0  0 ]
[ 0  0  9 ]
```

> **Figure 1.15** – Question 7 ke teen matrices.

**Jaanch:** (a) mein 3 × 2 = 6 zero ✅. (c) mein bahar ke chhe elements 0 hain, aur main diagonal par ek 0 hai jo diagonal matrix ke liye theek hai ✅.

**8.** Seating table se:

```
[ 1  1  0 ]
[ 0  1  0 ]
[ 1  0  0 ]
```

> **Figure 1.16** – Question 8 ka booking matrix, order 3 × 3.

Order 3 × 3. Row 3 mein khaali seat: a₃₂ aur a₃₃ (dono mein 0). Booked seat: 1 gino to chaar (a₁₁, a₁₂, a₂₂, a₃₁): **4 seat booked.** Ye 4 ek number hai, matrix khud nahi (matrix mein 9 elements hain).
**Jaanch:** 9 seat mein 4 booked aur 5 khaali: 4 + 5 = 9 ✅.

**9.** (a) **False ❌.** 2 × 3 aur 3 × 2 alag hain (rows aur columns ka kram alag). (b) **False ❌.** a₁₃ mein pehla number row ka hai: 1 row hai, 3 column hai. (c) **True ✅.** Identity ke bahar ke sab elements 0 hain. (d) **False ❌.** Question 6(b) ka matrix diagonal hai par identity nahi. (e) **True ✅.** Square matrix mein n × n elements hote hain: 1, 4, 9, 16, ..., aur 5 inme nahi aata. (f) **False ❌.** Zero matrix kisi bhi order ka ho sakta hai, jaise 1 × 3.

**10.** Teen rows (roll numbers), do columns (subjects):

```
[ 6  3 ]
[ 9  5 ]
[ 4  8 ]
```

> **Figure 1.17** – Question 10 ka matrix, order 3 × 2.

Order 3 × 2. a₃₂ matlab 3rd row (Roll 3), 2nd column (Science): **Roll 3 ke Science mein 8 marks.** a₁₂ = 3 ka matlab Roll 1 ke Science mein 3 marks hain.
**Jaanch:** table mein Roll 3 aur Science ke milne par 8 hai ✅, aur Roll 1 aur Science ke aage 3 ✅.

**11.** Element = 9 − (row × column). Row 1: 9 − 1 = 8, 9 − 2 = 7, 9 − 3 = 6. Row 2: 9 − 2 = 7, 9 − 4 = 5, 9 − 6 = 3.

```
[ 8  7  6 ]
[ 7  5  3 ]
```

> **Figure 1.18** – Question 11 ka matrix, order 2 × 3.

Value **7 do baar** aati hai: a₁₂ (1 × 2 = 2) aur a₂₁ (2 × 1 = 2) par, kyunki dono ka guna 2 hai.
**Jaanch:** a₁₂ = 9 − 2 = 7 ✅ aur a₂₁ = 9 − 2 = 7 ✅. Baaki chaar number 8, 6, 5, 3 alag-alag hain.

**12.** Figure 1.12 ke Question 12 mein teen rows aur do columns hain, aur order pehle rows phir columns hota hai, to sahi order **3 × 2** hai. Bachche ne "columns × rows" padh liya.
**Jaanch:** teen rows, har ek mein 2 element: 3 × 2 = 6 elements, aur gino to 4, 9, 1, 7, 3, 2 chhe hain ✅.

**13.** Matrix numbers ka dabba hai (2 rows, 3 columns, 6 elements), ek number nahi. 19 = 3 + 5 + 1 + 4 + 0 + 6 elements ka jod hai: yaani dukaan mein **kul 19 jode**. Ye ek ginti hai, matrix nahi; ye batata hi nahi ki kaun sa size ya colour kitna hai.
**Jaanch:** 3 + 5 + 1 = 9, 4 + 0 + 6 = 10, 9 + 10 = 19 ✅. Aur chaar elements 6, 4, 4, 5 wala koi 2 × 2 matrix bhi 19 deta hai: 6 + 4 + 4 + 5 = 19 ✅, par wo is stock se bilkul alag hai.

---

Ab tum kisi bhi table ko matrix bana sakte ho aur har number ko uski position se pakad sakte ho. Pehle row, phir column: yahi kram yaad rakhna.

**Aage ka rasta:** Topic 2 mein dekhenge ki do matrices **kab barabar** kehlate hain, do hafton ka stock **jodne aur ghatane** ka kya tareeka hai (sirf ek hi order ke matrix), aur ek matrix ko kisi number se **guna** karna (scalar multiplication) kaise hota hai.
