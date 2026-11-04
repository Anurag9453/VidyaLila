# Chapter: Factorisation (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [factorisation-part2.md](factorisation-part2.md) se aage chalti hai** (wahan Topic 2: Common factor hai). Topic 1 (overview, formulae aur methods) [factorisation.md](factorisation.md) mein hai.
> **Topics covered in this file:**
> 3. Factorisation by Grouping

---

# Topic 3: Factorisation by Grouping

## Topic 2 se aage

Topic 2 mein humne common factor nikalna poori tarah seekha tha:
- Monomials ka **HCF** nikalna (numbers ka HCF × letters ki sabse kam power)
- **Negative common factor** nikalna, jisse bracket ke andar ke sab signs badal jate hain
- Poore **bracket ko common factor** ki tarah nikalna, jaise 5x(a + b) - 3y(a + b) = (a + b)(5x - 3y)
- **Sign-flip** wali trick: (b - a) = -(a - b)

Par ek sawaal baaki reh gaya tha. Agar **saare terms mein koi ek cheez common na ho**, tab kya? Jaise ax + ay + bx + by. Yahan a sirf pehle do terms mein hai, b sirf aakhri do mein.

Iska jawab hai **grouping**. Aur achhi khabar ye hai ki isme kuch naya nahi seekhna. **Grouping = Topic 2 wala common factor, bas har group par alag se.** Pehle chhote groups banao, har group par Topic 2 ka tarika lagao, aur phir jo bracket bache use Topic 2 ki "bracket as common factor" wali trick se bahar nikal do.

Topic 1 mein grouping ka ek chhota sa parichay bhi dekha tha (ax + ay + bx + by, x³ + x² + x + 1, aur "kram badal ke try karo" wali tip). Ab ise gehrai se samjhenge: **ye kaam kyun karta hai, kaunse terms ko saath rakhein, pehli koshish fail ho to kya karein, aur 6 terms wale ya mushkil sawaal kaise todein.**

---

## Fruit ki dukaan ki kahani

Ek fruit wale ke yahan aam **₹x per kg** aur kele **₹y per dozen** hain.

- Raju ne **a kg aam** aur **a dozen kele** liye.
- Priya ne **b kg aam** aur **b dozen kele** liye.

Kul bill kitna bana? Har cheez ka alag hisaab:

**ax + ay + bx + by**

Ab dukaandaar ek aur tarike se sochta hai. Wo kehta hai: "1 kg aam aur 1 dozen kele ko milakar ek **set** maan lo. Ek set ka daam **(x + y)** hai."

- Raju ne **a set** liye: a(x + y)
- Priya ne **b set** liye: b(x + y)

To dono ne milkar **(a + b) set** liye, aur har set ka daam (x + y). Kul bill:

**(a + b)(x + y)**

Dono tarike se bill same aana chahiye:

**ax + ay + bx + by = (a + b)(x + y)**

Yahi grouping hai. Pehle **har insaan ke hisaab se group banaya** (Raju ka group, Priya ka group), har group mein se common cheez nikali, aur dekha ki dono groups mein **ek hi "set" (x + y)** bacha. Phir us set ko common nikal liya.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Grouping** | Terms ko chhote groups (aksar do-do) mein baantna | (ax + ay) + (bx + by) |
| **Group ka common factor** | Ek group ke andar jo cheez common hai | ax + ay mein **a** |
| **Common bracket** | Wo bracket jo har group se nikalne ke baad same bachta hai | a(x + y) + b(x + y) mein **(x + y)** |
| **Rearrange** | Terms ka kram badalna taaki sahi groups ban sakein | x² + y - xy - x → x² - x - xy + y |
| **Ulta bracket** | Aisa bracket jo doosre ka bilkul ulta ho | (y - x) = -(x - y) |

---

## Part A: Grouping kaam kyun karta hai

Topic 2 mein humne seekha tha:

**ab + ac = a(b + c)**

Isse **distributive law** kehte hain, bas ulta padha hua. Grouping mein hum isi niyam ko **do baar** lagate hain.

**ax + ay + bx + by**

**Pehli baar** (har group ke andar):
- ax + ay = a(x + y)
- bx + by = b(x + y)

Ab expression ban gaya: a(x + y) + b(x + y)

**Doosri baar** (poore expression par):
Yahan (x + y) dono terms mein common hai. Topic 2 mein humne yahi "bracket as common factor" wala kaam kiya tha. Ise ek chhota sa naam de do, jaise **(x + y) = S**. To expression ban gaya:

a·S + b·S = S(a + b)

Ab S ki jagah wapas (x + y) likho:

= **(x + y)(a + b)**

To grouping koi naya jaadu nahi hai. Ye bas **common factor ka tarika do baar** lagana hai: pehle group ke andar, phir groups ke beech.

---

## Part B: Kaunse terms ko saath rakhein?

Ye grouping ka sabse zaroori sawaal hai. Ek seedha niyam yaad rakho:

> **Jin terms mein kuch common ho, unhe saath rakho. Aur pehla bracket jo bane, doosre group se bhi wahi bracket nikalna chahiye.**

Is doosri baat ko "**target bracket**" wali trick samjho. Pehle group se jo bracket nikla, wahi aapka target hai. Doosre group se common factor aise nikalo (sign samet) ki wahi bracket bache.

### Example 1: Diye gaye kram mein seedha kaam karta hai

**a² - ab + ac - bc**

- Group 1: a² - ab = **a(a - b)**. Target bracket: **(a - b)**.
- Group 2: ac - bc = **c(a - b)**. Target mil gaya.

= a(a - b) + c(a - b)
= **(a - b)(a + c)**

Jaanch: (a - b)(a + c) = a² + ac - ab - bc ✅ (original wale terms hi hain, bas kram alag hai)

### Example 2: Teen variables wala

**x² + xy - 2xz - 2yz**

- Group 1: x² + xy = **x(x + y)**. Target: **(x + y)**.
- Group 2: -2xz - 2yz. Yahan agar hum **-2z** nikalein (Topic 2 wala negative common factor) to bachta hai (x + y). Target mil gaya.
  -2xz - 2yz = **-2z(x + y)**

= x(x + y) - 2z(x + y)
= **(x + y)(x - 2z)**

Jaanch: (x + y)(x - 2z) = x² - 2xz + xy - 2yz ✅

Dhyan do: agar hum doosre group se **+2z** nikalte, to bachta (-x - y), jo target se match nahi karta. Isliye **minus sign samet** nikala.

### Example 3: Pair chunne ki samajh

**2ax + 3by + 3ay + 2bx**

Diye gaye kram mein pehle do terms 2ax aur 3by hain. Inme **kuch bhi common nahi** (na number, na letter). To ye pair nahi chalega.

Ab dekho kaun kiske saath jamta hai:
- 2ax aur 2bx: dono mein **2x** common hai.
- 3ay aur 3by: dono mein **3y** common hai.

Inhe saath rakho:
= (2ax + 2bx) + (3ay + 3by)
= 2x(a + b) + 3y(a + b)
= **(a + b)(2x + 3y)**

Jaanch: (a + b)(2x + 3y) = 2ax + 3ay + 2bx + 3by ✅

---

## Part C: Jab pehli koshish fail ho jaye

Topic 1 mein tip thi ki "kram badal ke try karo". Ab dekhte hain ki asal mein fail hona kaisa dikhta hai, aur use theek kaise karte hain.

### Example 4: x² + y - xy - x

**Pehli koshish (diye gaye kram mein):**
- Group 1: x² + y. Isme kuch common nahi. **Fail.**

Koi baat nahi, doosra jod try karo.

**Doosri koshish:** x² aur xy mein x common hai, to inhe saath rakhte hain.
- (x² - xy) + (y - x)
- Group 1: x(x - y). Target: (x - y).
- Group 2: y - x. Ye (x - y) ka **ulta** hai! Topic 2 ki sign-flip trick: y - x = -(x - y).
= x(x - y) - 1(x - y)
= (x - y)(x - 1)

Ye bhi chal gaya. Par ek aur saaf tarika dekho.

**Teesri koshish:** Terms ko aise rakho: x² - x - xy + y
- Group 1: x² - x = **x(x - 1)**. Target: (x - 1).
- Group 2: -xy + y. **-y** nikalo: -y(x - 1). Target mil gaya.
= x(x - 1) - y(x - 1)
= **(x - 1)(x - y)**

Jaanch: (x - 1)(x - y) = x² - xy - x + y ✅

Doosri aur teesri koshish dono se **ek hi answer** aaya (bas brackets ka kram alag hai, jo multiplication mein farak nahi daalta). Iska matlab hai ki **grouping ka ek se zyada sahi raasta ho sakta hai.** Bas pairs aise chuno jinme kuch common ho.

### Example 5: x² + yz + xy + xz

**Pehli koshish:** x² + yz. Kuch common nahi. **Fail.**

**Rearrange karo:** x² ke saath wo term rakho jisme x ho.
x² + xy + xz + yz
- Group 1: x² + xy = x(x + y). Target: (x + y).
- Group 2: xz + yz = z(x + y). Mil gaya.
= **(x + y)(x + z)**

Jaanch: (x + y)(x + z) = x² + xz + xy + yz ✅

### Kab samjhein ki grouping nahi chalegi?

Agar aapne saare sambhav jod try kar liye aur kabhi bhi dono groups mein **same bracket** nahi aaya, to shayad ye expression grouping se nahi tootega. Tab doosre tarike (jaise identities, jo aage ke topics mein aayenge) try karne honge.

---

## Part D: Minus sign wale groups

Grouping mein sabse zyada galtiyan **minus sign** se hoti hain. Is part mein sirf isi par dhyan denge.

### Niyam (Topic 2 se)

Topic 2 mein dekha tha: jab aap **minus wala common factor** nikalte ho, to bracket ke andar ke **har term ka sign badal jata hai.** Grouping mein ye har doosre-teesre sawaal mein aata hai.

-ax + ay = **-a(x - y)**
Jaanch: -a × x = -ax, -a × (-y) = +ay ✅

### Example 6: 3x - 3y - ax + ay

- Group 1: 3x - 3y = **3(x - y)**. Target: (x - y).
- Group 2: -ax + ay. **-a** nikalo: **-a(x - y)**.
= 3(x - y) - a(x - y)
= **(x - y)(3 - a)**

Jaanch: (x - y)(3 - a) = 3x - ax - 3y + ay ✅

### Example 7: ab - a - b + 1 (chhupa hua -1)

- Group 1: ab - a = **a(b - 1)**. Target: (b - 1).
- Group 2: -b + 1. Isme koi letter common nahi dikhta, par hum **-1** nikal sakte hain: -1(b - 1).
= a(b - 1) - 1(b - 1)
= **(b - 1)(a - 1)**

Jaanch: (b - 1)(a - 1) = ab - b - a + 1 ✅

Ye **1 ya -1 nikalna** bahut kaam ki trick hai. Jab ek group mein koi common cheez na dikhe, to soch lo ki shayad 1 ya -1 common hai.

### Example 8: Ulta bracket wala

**a(x - y) + b(y - x)**

Yahan brackets (x - y) aur (y - x) dikhne mein alag hain, par asal mein ek doosre ke **ulte** hain (Topic 2 wali sign-flip):

**(y - x) = -(x - y)**

Isse ek number se samjho: 5 - 3 = 2, aur 3 - 5 = -2. Dono ka size same hai, bas sign ulta.

= a(x - y) + b × (-(x - y))
= a(x - y) - b(x - y)
= **(x - y)(a - b)**

Jaanch: (x - y)(a - b) = ax - bx - ay + by. Original: a(x - y) + b(y - x) = ax - ay + by - bx ✅

### Example 9: p²q - pr² - pq + r²

- Group 1 aur 3 ko saath rakho (dono mein pq common): p²q - pq = **pq(p - 1)**. Target: (p - 1).
- Group 2 aur 4 ko saath rakho: -pr² + r². **-r²** nikalo: **-r²(p - 1)**.
= pq(p - 1) - r²(p - 1)
= **(p - 1)(pq - r²)**

Jaanch: (p - 1)(pq - r²) = p²q - pr² - pq + r² ✅

---

## Part E: Badi powers wale expressions

Grouping sirf x aur y wale chhote expressions tak simit nahi hai. Cubic (degree 3) wale polynomials mein bhi bahut kaam aata hai.

### Example 10: x³ - 2x² + x - 2

- Group 1: x³ - 2x² = **x²(x - 2)**. Target: (x - 2).
- Group 2: x - 2 = **1(x - 2)**.
= x²(x - 2) + 1(x - 2)
= **(x - 2)(x² + 1)**

Jaanch: (x - 2)(x² + 1) = x³ + x - 2x² - 2 ✅

Dhyan do ki x² + 1 ko aur tod nahi sakte (Topic 1 mein dekha tha, a² + b² plus ke saath real numbers mein nahi tootta).

### Example 11: 2y³ - y² + 4y - 2

- Group 1: 2y³ - y² = **y²(2y - 1)**. Target: (2y - 1).
- Group 2: 4y - 2 = **2(2y - 1)**.
= y²(2y - 1) + 2(2y - 1)
= **(2y - 1)(y² + 2)**

Jaanch: (2y - 1)(y² + 2) = 2y³ + 4y - y² - 2 ✅

---

## Part F: 6 terms wale expressions

Jab 6 terms hon, to do tarike se group kar sakte hain:
- **3 + 3:** teen-teen terms ke do group
- **2 + 2 + 2:** do-do terms ke teen group

Dono tarike se answer ek hi aata hai. Jo aasan dikhe wo chuno.

### Example 12: ax + bx + cx + ay + by + cy

**Tarika 1 (3 + 3):**
- (ax + bx + cx) = **x(a + b + c)**
- (ay + by + cy) = **y(a + b + c)**
= x(a + b + c) + y(a + b + c)
= **(a + b + c)(x + y)**

**Tarika 2 (2 + 2 + 2):**
- (ax + ay) = a(x + y)
- (bx + by) = b(x + y)
- (cx + cy) = c(x + y)
= a(x + y) + b(x + y) + c(x + y)
= **(x + y)(a + b + c)**

Dono se same answer! Jaanch: (a + b + c)(x + y) = ax + ay + bx + by + cx + cy ✅

### Example 13: x² + xy + xz + 2x + 2y + 2z

**3 + 3 grouping:**
- (x² + xy + xz) = **x(x + y + z)**
- (2x + 2y + 2z) = **2(x + y + z)**
= **(x + y + z)(x + 2)**

Jaanch: (x + y + z)(x + 2) = x² + 2x + xy + 2y + xz + 2z ✅

### Example 14: ax + ay + az - bx - by - bz

- (ax + ay + az) = a(x + y + z)
- (-bx - by - bz) = **-b(x + y + z)** (minus samet nikala)
= **(x + y + z)(a - b)**

Jaanch: (x + y + z)(a - b) = ax - bx + ay - by + az - bz ✅

---

## Part G: Jab grouping ke baad bracket aur toot sake

Kabhi kabhi grouping ke baad jo factor bachta hai, use **aur bhi toda ja sakta hai.** Topic 1 mein humne "completely factorise karo" wali baat dekhi thi. Yahan wahi lagani hai.

### Example 15: x³ - x² - x + 1

- Group 1: x³ - x² = **x²(x - 1)**
- Group 2: -x + 1 = **-1(x - 1)**
= x²(x - 1) - 1(x - 1)
= (x - 1)(x² - 1)

Yahan ruk mat jana! **x² - 1** ek **difference of two squares** hai (x² - 1²), jise (x + 1)(x - 1) mein tod sakte hain. (Ye formula Topic 1 mein dekha tha, aur Topic 4 mein iske baare mein poori detail aayegi.)

= (x - 1)(x + 1)(x - 1)
= **(x - 1)²(x + 1)**

Jaanch: (x - 1)²(x + 1) = (x² - 2x + 1)(x + 1) = x³ + x² - 2x² - 2x + x + 1 = x³ - x² - x + 1 ✅

### Example 16: x(x + z) - y(y + z) (grouping + identity)

Pehle bracket kholo: x² + xz - y² - yz

Ab ek naye tarike se group karo: squares saath, z wale saath.
= (x² - y²) + (xz - yz)
= (x² - y²) + z(x - y)

x² - y² = (x + y)(x - y) (difference of squares, Topic 4 mein detail aayegi).
= (x + y)(x - y) + z(x - y)
= (x - y)[(x + y) + z]
= **(x - y)(x + y + z)**

Jaanch: (x - y)(x + y + z) = x² + xy + xz - xy - y² - yz = x² + xz - y² - yz ✅

Ye ek bahut mazedaar type hai: **grouping aur identity ek saath.**

---

## Part H: Thode mushkil examples

### Example 17: a(a - 2b - c) + 2bc

Pehle bracket kholo: a² - 2ab - ac + 2bc

- Group 1: a² - 2ab = **a(a - 2b)**. Target: (a - 2b).
- Group 2: -ac + 2bc. **-c** nikalo: -c(a - 2b).
= a(a - 2b) - c(a - 2b)
= **(a - 2b)(a - c)**

Jaanch: (a - 2b)(a - c) = a² - ac - 2ab + 2bc ✅

### Example 18: 1 + a + ac + a²c

- Group 1: 1 + a = **1(1 + a)**. Target: (1 + a).
- Group 2: ac + a²c = **ac(1 + a)**.
= **(1 + a)(1 + ac)**

Jaanch: (1 + a)(1 + ac) = 1 + ac + a + a²c ✅

### Example 19: m² - mn + 4m - 4n

- Group 1: m² - mn = **m(m - n)**
- Group 2: 4m - 4n = **4(m - n)**
= **(m - n)(m + 4)**

Jaanch: (m - n)(m + 4) = m² + 4m - mn - 4n ✅

---

## Grouping ke kadam (ek nazar mein)

1. **Sabse pehle** dekho ki kya poore expression mein koi common factor hai (Topic 2). Agar hai to pehle nikalo.
2. Terms ko **do-do ke groups** mein baanto (6 terms ho to 3 + 3 ya 2 + 2 + 2).
3. Har group se common factor nikalo. **Pehla bracket target hai.**
4. Doosre group se common factor **sign samet** aise nikalo ki target bracket bache. Zaroorat ho to **1 ya -1** nikalo.
5. Brackets match nahi hue? **Terms ka kram badlo** aur dobara try karo.
6. Common bracket ko bahar nikalo.
7. Dekho ki koi factor **aur toot sakta hai** ya nahi.
8. **Jaanch karo:** factors multiply karke original expression milna chahiye.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Brackets match hone se pehle hi aage badh jana**
a(x + y) + b(x - y) mein brackets **alag** hain (ek plus, ek minus). Inhe common nahi nikal sakte. Grouping tabhi poori hoti hai jab dono brackets **bilkul same** hon.

**Galti 2: Minus common nikalte waqt andar ka sign na badalna**
-ax + ay = -a(x **-** y), -a(x + y) nahi. Jaanch karo: -a(x + y) = -ax - ay, jo galat hai.

**Galti 3: 1 ya -1 nikalna bhool jana**
ab - a - b + 1 mein doosra group -b + 1 hai. Log yahan atak jate hain kyunki koi letter common nahi dikhta. **-1 nikalo**: -1(b - 1).

**Galti 4: Ulte bracket ko alag samajhna**
(y - x) aur (x - y) ek doosre ke ulte hain: (y - x) = -(x - y). Isse pehchano aur minus bahar nikal do.

**Galti 5: Pehli koshish fail hone par haar maan lena**
Agar diye gaye kram mein pair nahi bante, to kram badlo. Aksar doosri ya teesri koshish mein kaam ho jata hai.

**Galti 6: Grouping ke baad ruk jana**
(x - 1)(x² - 1) par ruk jana galat hai. x² - 1 aur toot sakta hai. Poora: (x - 1)²(x + 1).

**Galti 7: Ek group mein sirf ek term rakh dena (4 terms mein)**
4 terms ko 3 + 1 mein baantne se aksar kaam nahi banta (jab tak koi identity na lag rahi ho). Pehle **2 + 2** try karo.

**Galti 8: Jaanch na karna**
Grouping mein signs ki galti bahut aasaani se hoti hai. Har baar multiply karke check karo.

---

## Quick Recap

- **Grouping** = terms ko groups mein baantna, har group se common factor nikalna, phir **common bracket** bahar nikalna.
- Ye asal mein **common factor ka tarika do baar** lagana hai (pehle group ke andar, phir groups ke beech).
- **Target bracket trick:** pehle group se jo bracket nikla, doosre group se bhi wahi nikalna chahiye. Iske liye zaroorat ho to minus sign samet factor nikalo.
- Koi common cheez na dikhe to **1 ya -1** nikalo.
- **(y - x) = -(x - y)**. Ulte bracket ko pehchano.
- Pairs fail hon to **terms ka kram badlo.** Ek se zyada sahi raaste ho sakte hain, answer ek hi aayega.
- **6 terms** ko 3 + 3 ya 2 + 2 + 2 mein group kar sakte hain.
- Grouping ke baad dekho ki koi factor **aur toot sakta** hai ya nahi (jaise x² - 1).
- Hamesha **jaanch** karo.

---

## Practice Questions

1. Factorise by grouping:
   (a) mx + my + nx + ny
   (b) a² + ab + 3a + 3b
   (c) pq + 2p - 3q - 6

2. Rearrange the terms suitably and factorise:
   (a) a² + bc + ab + ac
   (b) xy - 6 + 2x - 3y

3. Factorise:
   (a) xy - x - y + 1
   (b) 3ax - 6ay - 8by + 4bx

4. Factorise:
   (a) x³ + 2x² + 3x + 6
   (b) 2y³ - y² + 4y - 2

5. Factorise:
   (a) ax + ay + az + bx + by + bz
   (b) 2ax + 2ay + 2az - 3bx - 3by - 3bz

6. Factorise: p(q - r) + s(r - q)

7. Factorise:
   (a) x(x - 2y - z) + 2yz
   (b) a² + a - ab - b

8. Factorise completely: y³ + y² - y - 1

### Answers

1. (a) m(x + y) + n(x + y) = **(x + y)(m + n)**
   (b) a(a + b) + 3(a + b) = **(a + b)(a + 3)**
   (c) p(q + 2) - 3(q + 2) = **(q + 2)(p - 3)**
   Jaanch (c): (q + 2)(p - 3) = pq - 3q + 2p - 6 ✅
2. (a) Kram badlo: a² + ab + ac + bc = a(a + b) + c(a + b) = **(a + b)(a + c)**
   (b) Kram badlo: xy + 2x - 3y - 6 = x(y + 2) - 3(y + 2) = **(y + 2)(x - 3)**
   Jaanch (b): (y + 2)(x - 3) = xy - 3y + 2x - 6 ✅
3. (a) x(y - 1) - 1(y - 1) = **(y - 1)(x - 1)**
   (b) Kram badlo: 3ax + 4bx - 6ay - 8by = x(3a + 4b) - 2y(3a + 4b) = **(3a + 4b)(x - 2y)**
   Jaanch (b): (3a + 4b)(x - 2y) = 3ax - 6ay + 4bx - 8by ✅
4. (a) x²(x + 2) + 3(x + 2) = **(x + 2)(x² + 3)**
   (b) y²(2y - 1) + 2(2y - 1) = **(2y - 1)(y² + 2)**
5. (a) a(x + y + z) + b(x + y + z) = **(x + y + z)(a + b)**
   (b) 2a(x + y + z) - 3b(x + y + z) = **(x + y + z)(2a - 3b)**
6. (r - q) = -(q - r), to p(q - r) - s(q - r) = **(q - r)(p - s)**
   Jaanch: (q - r)(p - s) = pq - qs - pr + rs. Original: pq - pr + sr - sq ✅
7. (a) Bracket kholo: x² - 2xy - xz + 2yz = x(x - 2y) - z(x - 2y) = **(x - 2y)(x - z)**
   Jaanch: (x - 2y)(x - z) = x² - xz - 2xy + 2yz ✅
   (b) a(a + 1) - b(a + 1) = **(a + 1)(a - b)**
8. y²(y + 1) - 1(y + 1) = (y + 1)(y² - 1). Ab y² - 1 = (y + 1)(y - 1).
   = (y + 1)(y + 1)(y - 1) = **(y + 1)²(y - 1)**
   Jaanch: (y² + 2y + 1)(y - 1) = y³ - y² + 2y² - 2y + y - 1 = y³ + y² - y - 1 ✅

---

Agar grouping mein pehli baar mein pair na bane to bilkul ghabrao mat. Bas ye yaad rakho: **jinme kuch common hai unhe saath rakho, aur dono groups se ek hi bracket nikalna chahiye.** Na nikle to kram badlo. Thodi practice ke baad aapki aankh khud pehchaanne lagegi ki kaunse terms ek doosre ke saathi hain.

---

**Aage kya (Topic 4):** Is topic mein do baar x² - 1 aur x² - y² jaise expressions aaye, jinhe humne bas "difference of squares" kehkar tod diya. Agle topic mein isi a² - b² = (a + b)(a - b) ko poori tarah samjhenge: ye kyun kaam karta hai, ise kaise pehchante hain, aur mushkil sawaalon mein kaise lagate hain.
