# Chapter: Relations and Functions (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [relations-and-functions-part3.md](relations-and-functions-part3.md) se aage chalti hai** (wahan Topic 3 mein Functions ki paribhasha aur 7 standard real functions ke graphs the). Chapter ki shuruaat: [relations-and-functions.md](relations-and-functions.md). Intervals par operations: [sets-part3.md](../sets/sets-part3.md).
> **Topics covered in this file:**
> 4. Algebra of Real Functions Aur Domain-Range Nikaalne Ke Tareeke

---

# Topic 4: Algebra of Real Functions Aur Domain-Range Nikaalne Ke Tareeke

Topic 3 mein humne ek-ek standard function (x², 1/x, |x|, [x]) ko alag-alag dekha. Par asli Maths aur Physics mein hum in functions ko **milakar naye functions** banate hain — jaise f(x) + g(x) ya f(x)/g(x). Is topic mein hum **Algebra of Real Functions** seekhenge (khaas kar combined function ka Domain kaise tay hota hai), aur phir square-root, rational aur modulus functions ka **Domain aur Range** nikaalne ki pakki recipe seekhenge.

---

## Rekha aur Papa ki tailoring workshop

Rekha apne Papa ki chhoti si tailoring workshop mein bill banaane mein madad kar rahi thi. Ek order mein **x shirts** silni thin:
- Kapde ka kharch ek function tha: **f(x) = 300x** (₹300 per shirt).
- Silai aur button ka kharch doosra function tha: **g(x) = 150x + 200** (₹150 per shirt + ₹200 fixed cutting charge).

Papa ne kaha, "Total bill ka ek hi formula bana do, aur har shirt ka **average kharch** bhi nikaalo."
Rekha ne dono functions ko seedha jod diya:
- **Total bill:** (f + g)(x) = 300x + (150x + 200) = **450x + 200**.
- **Average kharch per shirt:** Total ÷ x = (450x + 200) / x.

Phir Rekha ruki: "Papa, is bhaag wale formula mein **x = 0** nahi rakh sakte, warna denominator zero ho jayega!"
Papa muskuraaye: "Bilkul sahi! Jab do functions ko jodte ya ghatate ho to dono ka common domain chalta hai, par jab **bhaag (quotient)** karte ho to denominator zero dene wale x ko turant bahar nikaalna padta hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Algebra of functions** | Do real functions f aur g ko jodna, ghatana, guna, bhaag ya scalar se guna karna | (f + g)(x) = f(x) + g(x) |
| **Common domain** | Dono functions jahan ek saath defined hon: D₁ ∩ D₂ | [0, ∞) ∩ R = [0, ∞) |
| **Quotient function (f/g)** | f(x) ÷ g(x), jahan x ∈ D₁ ∩ D₂ aur **g(x) ≠ 0** | √x ÷ x ke liye x > 0 |
| **Domain of a real function** | Sabhi real x jinke liye f(x) ek **asli (real) aur finite** number de | √(x − 4) ke liye x ≥ 4 |
| **Principal square root** | √a ka maan hamesha **non-negative (≥ 0)** hota hai (jab a ≥ 0) | √9 = +3 (kabhi −3 nahi!) |

---

## Part A: Algebra of Real Functions

Maan lo **f : D₁ → R** aur **g : D₂ → R** do real functions hain. Inka common domain **D = D₁ ∩ D₂** hai (kyunki koi bhi combined operation tabhi chalega jab f(x) aur g(x) **dono** us x par defined hon!).

| Operation | Formula | Domain |
|---|---|---|
| **Addition (f + g)** | (f + g)(x) = f(x) + g(x) | D₁ ∩ D₂ |
| **Subtraction (f − g)** | (f − g)(x) = f(x) − g(x) | D₁ ∩ D₂ |
| **Scalar multiplication (cf)** | (cf)(x) = c · f(x)  (c ∈ R) | D₁ |
| **Product (fg)** | (fg)(x) = f(x) · g(x) | D₁ ∩ D₂ |
| **Quotient (f/g)** | (f/g)(x) = f(x) / g(x) | (D₁ ∩ D₂) − {x : g(x) = 0} |

### Example 1: Do Polynomial Functions par Chaaron Operations

Maan lo **f(x) = x² + 1** aur **g(x) = 2x − 3** (dono ka domain R hai).
Nikalo: (i) (f + g)(x), (ii) (f − g)(x), (iii) (fg)(x), (iv) (f/g)(x) aur sabka domain batao.

**Hal:**
- D₁ = R, D₂ = R ⟹ D₁ ∩ D₂ = R.
- (i) **(f + g)(x)** = (x² + 1) + (2x − 3) = **x² + 2x − 2**, Domain = **R**.
- (ii) **(f − g)(x)** = (x² + 1) − (2x − 3) = **x² − 2x + 4**, Domain = **R**.
- (iii) **(fg)(x)** = (x² + 1)(2x − 3) = **2x³ − 3x² + 2x − 3**, Domain = **R**.
- (iv) **(f/g)(x)** = **(x² + 1) / (2x − 3)**.
  Denominator zero kab hoga? 2x − 3 = 0 ⟹ **x = 3/2**.
  Isliye Domain(f/g) = **R − {3/2}**.

**Jaanch:** x = 2 par: f(2) = 5, g(2) = 1. (f+g)(2) = 4+4−2 = 6 = 5+1 ✅; (f−g)(2) = 4−4+4 = 4 = 5−1 ✅; (fg)(2) = 16−12+4−3 = 5 = 5×1 ✅; (f/g)(2) = 5/1 = 5 ✅.

### Example 2: Alag Domains wale Functions — f(x) = √x aur g(x) = x

Maan lo **f(x) = √x** (Domain D₁ = [0, ∞)) aur **g(x) = x** (Domain D₂ = R).
Nikalo (f + g)(x), (f − g)(x), (fg)(x), aur (f/g)(x) unke exact domains ke saath.

**Hal:**
- Common domain: D₁ ∩ D₂ = [0, ∞) ∩ R = **[0, ∞)**.
- (f + g)(x) = **√x + x**, Domain = **[0, ∞)**.
- (f − g)(x) = **√x − x**, Domain = **[0, ∞)**.
- (fg)(x) = x√x = **x^(3/2)**, Domain = **[0, ∞)**.
- (f/g)(x) = √x / x = **1/√x**.
  Yahan g(x) = x = 0 par denominator 0 ho jaata hai, isliye 0 ko hatao!
  Domain(f/g) = [0, ∞) − {0} = **(0, ∞)**.

**Jaanch:** x = 4 par: f(4) = 2, g(4) = 4 ⟹ (f+g)(4) = 6, (f/g)(4) = 2/4 = 1/2 = 1/√4 ✅; x = 0 par f/g undefined ✅.

---

## Part B: Real Functions Ka Domain Nikaalne Ke Do Golden Rules

Jab koi real function f(x) bina domain likhe diya ho, to uska **natural domain** nikaalne ke liye Class 11 mein sirf **do khatron (danger zones)** se bachna hota hai:

1. **Denominator ≠ 0:** Kisi bhi bhaag (fraction) ka neeche wala hissa zero nahi hona chahiye.
2. **Even root ke andar ≥ 0:** Kisi bhi square root √(expression) ke andar ki cheez **≥ 0** honi chahiye (kyunki negative number ka square root real nahi hota!).
   *(Aur agar √(expression) **denominator** mein ho, to expression **strictly > 0** hona chahiye!)*

### Example 3: Square-root aur Rational Functions ka Domain aur Range

Nikalo Domain aur Range:
(i) **f(x) = √(x − 4)**
(ii) **g(x) = 1 / (x − 5)**

**Hal:**
- **(i) f(x) = √(x − 4):**
  - **Domain:** Square root ke andar x − 4 ≥ 0 ⟹ **x ≥ 4**, yaani **[4, ∞)**.
  - **Range:** Principal square root hamesha ≥ 0 hota hai! Jaise-jaise x, 4 se ∞ tak badhta hai, √(x − 4), 0 se ∞ tak har non-negative real number leta hai.
    Isliye **Range = [0, ∞)**.
- **(ii) g(x) = 1 / (x − 5):**
  - **Domain:** Denominator x − 5 ≠ 0 ⟹ x ≠ 5, yaani **R − {5}**.
  - **Range:** Maan lo y = 1/(x − 5) aur x ko y ke roop mein likho:
    x − 5 = 1/y ⟹ **x = 5 + 1/y**.
    Ye x har real y ke liye defined hai **siwaye y = 0 ke**! (Aur waise bhi 1/(x − 5) kabhi 0 nahi ban sakta.)
    Isliye **Range = R − {0}**.

**Jaanch:** (i) x = 4 → f(4) = 0, x = 8 → f(8) = 2 ✅; (ii) y = 2 ke liye x = 5 + 1/2 = 5.5, g(5.5) = 1/0.5 = 2 ✅.

---

## Part C: Modulus Aur Rational-Modulus Functions Ka Domain-Range

### Example 4: h(x) = 2 − |x − 3|

**h(x) = 2 − |x − 3|** ka Domain aur Range nikalo.

**Hal:**
- **Domain:** Har real x ke liye |x − 3| defined hai → **Domain = R**.
- **Range:** Hum jaante hain ki har real x ke liye **|x − 3| ≥ 0**.
  Dono taraf −1 se guna karo (inequality palat jaati hai!):
  **−|x − 3| ≤ 0**
  Ab dono taraf 2 jodo:
  **2 − |x − 3| ≤ 2**, yaani **h(x) ≤ 2**.
  (x = 3 par exact h(3) = 2 milta hai, aur x door jaane par h(x) → −∞.)
  Isliye **Range = (−∞, 2]**.

**Jaanch:** h(3) = 2 − 0 = 2 (maximum), h(0) = 2 − 3 = −1 ≤ 2 ✅.

### Example 5: Shifted Signum — k(x) = |x − 2| / (x − 2)

**k(x) = |x − 2| / (x − 2)** ka Domain aur Range nikalo.

**Hal:**
- **Domain:** Denominator x − 2 ≠ 0 ⟹ x ≠ 2 → **Domain = R − {2}**.
- **Range:** Do cases dekho (Modulus ki paribhasha se):
  - Case 1 (x > 2): x − 2 > 0, to |x − 2| = x − 2 ⟹ k(x) = (x − 2)/(x − 2) = **+1**.
  - Case 2 (x < 2): x − 2 < 0, to |x − 2| = −(x − 2) ⟹ k(x) = −(x − 2)/(x − 2) = **−1**.
  (x = 2 domain mein hai hi nahi, isliye 0 kabhi output nahi banega!)
  Isliye **Range = {−1, 1}** (sirf do numbers!).

**Jaanch:** k(5) = 3/3 = +1 ✅; k(0) = 2/(−2) = −1 ✅.

### Example 6: Linear Rational Function — m(x) = (2x + 1) / (x − 3)

**m(x) = (2x + 1) / (x − 3)** ka Domain aur Range nikalo.

**Hal:**
- **Domain:** x − 3 ≠ 0 ⟹ **Domain = R − {3}**.
- **Range:** y = (2x + 1)/(x − 3) ko x ke liye hal karo:
  - y(x − 3) = 2x + 1
  - xy − 3y = 2x + 1
  - x(y − 2) = 3y + 1
  - **x = (3y + 1) / (y − 2)**
  Ye x har real y ke liye real number dega, **siwaye y − 2 = 0 (yaani y = 2)** ke!
  Isliye **Range = R − {2}**.

**Jaanch:** Agar y = 5, to x = (15 + 1)/(5 − 2) = 16/3; check m(16/3) = (32/3 + 1)/(16/3 − 3) = (35/3)/(7/3) = 5 ✅!

---

## Aam galtiyan

1. **(f/g)(x) ke domain se g(x) = 0 hatana bhool jaana:** Student f(x) = x² + 1, g(x) = 2x − 3 ke liye Domain(f/g) = R likh deta hai.
   - *Galat kyun:* x = 3/2 par g(3/2) = 0 ho jaata hai aur zero se bhaag undefined hai! Hamesha g(x) = 0 ke sabhi roots hatao.
2. **(f + g)(x) ka domain D₁ ∪ D₂ le lena (D₁ ∩ D₂ ke bajay):** Student f(x) = √x (D₁ = [0, ∞)) aur g(x) = x (D₂ = R) ke liye (f + g) ka domain R likh deta hai.
   - *Galat kyun:* x = −4 par g(−4) to defined hai par f(−4) = √(−4) real nahi! Dono ek saath sirf **D₁ ∩ D₂** par chalte hain.
3. **√(x²) ko seedha x likh dena:** Student kehta hai "square aur root kat gaye, to √(x²) = x."
   - *Galat kyun:* x = −5 rakh kar dekho: √((−5)²) = √25 = **+5** (na ki −5!). Hamesha **√(x²) = |x|** hota hai!

---

## Quick Recap

- **Algebra of functions:** f + g, f − g, fg ka domain = **D₁ ∩ D₂**; (f/g) ka domain = **(D₁ ∩ D₂) − {x : g(x) = 0}**.
- **Domain ke 2 rules:** (1) Denominator ≠ 0, (2) Square root ke andar ≥ 0.
- **Range ke 3 tareeke:** (1) x ko y ke roop mein likho aur y ka domain dekho (rational functions), (2) |expr| ≥ 0 ya x² ≥ 0 se inequality banao, (3) Piecewise cases (|x − a|/(x − a) → {−1, 1}).

---

## Practice Questions

1. Let f(x) = x² and g(x) = 2x + 1 be two real functions. Find (f + g)(x), (f − g)(x), (fg)(x), and (f/g)(x) along with their domains.

2. Let f(x) = √(x − 1) and g(x) = √(5 − x). Find the domains of:
   (a) f    (b) g    (c) f + g    (d) f/g

3. Let f = {(1, 4), (2, 7), (3, 10), (4, 13)} and g = {(1, 2), (2, 0), (3, −2), (4, 5)}. Find:
   (a) f + g    (b) f − 2g    (c) fg    (d) f/g (be careful about the domain of f/g!).

4. Find the Domain of each of the following real functions:
   (a) f(x) = (x² + 3x + 5) / (x² − 5x + 4)
   (b) g(x) = (2x + 1) / (x² − 9)
   (c) h(x) = √(3x − 12)

5. Find the Domain and Range of:
   (a) f(x) = √(x + 3)
   (b) g(x) = 1 / √(x − 2)

6. Find the Domain and Range of:
   (a) f(x) = 5 − |x + 1|
   (b) g(x) = 3 + |x − 4|

7. Find the Domain and Range of f(x) = |x + 5| / (x + 5).

8. Find the Domain and Range of the rational function f(x) = (3x − 2) / (x + 4).

9. Find the Domain and Range of f(x) = 1 / (2 − x²). (Hint: check denominator = 0 for domain, and solve for x² ≥ 0 for range!)

10. If f(x) = x + 1/x (for x ≠ 0), prove that [f(x)]³ = f(x³) + 3f(x).

11. Find the Domain of f(x) = 1 / (x − [x]) (where [x] is the greatest integer function).

12. True or False? Give a one-line reason:
    (a) For all real x, √(x²) = x.
    (b) The domain of (f/g)(x) is always equal to D_f ∩ D_g.
    (c) If f(x) = 1/(x − 1) and g(x) = x − 1, then (fg)(x) = 1 for all x ∈ R.

### Answers

1. D₁ = R, D₂ = R:
   - (f + g)(x) = **x² + 2x + 1**, Domain = R
   - (f − g)(x) = **x² − 2x − 1**, Domain = R
   - (fg)(x) = **2x³ + x²**, Domain = R
   - (f/g)(x) = **x² / (2x + 1)**, Domain = **R − {−1/2}** (kyunki 2x + 1 = 0 ⟹ x = −1/2).
   Jaanch: x = 1 par f(1) = 1, g(1) = 3; (fg)(1) = 3, (f/g)(1) = 1/3 ✅.

2. (a) x − 1 ≥ 0 ⟹ **D_f = [1, ∞)**.
   (b) 5 − x ≥ 0 ⟹ x ≤ 5 ⟹ **D_g = (−∞, 5]**.
   (c) D_f ∩ D_g = **[1, 5]**.
   (d) g(x) = 0 par x = 5 hatao ⟹ **[1, 5)**. Jaanch: x = 5 par g(5) = 0 (denominator 0) ✅.

3. Common domain {1, 2, 3, 4}:
   (a) f + g = **{(1, 6), (2, 7), (3, 8), (4, 18)}**
   (b) f − 2g = **{(1, 0), (2, 7), (3, 14), (4, 3)}**
   (c) fg = **{(1, 8), (2, 0), (3, −20), (4, 65)}**
   (d) x = 2 par g(2) = 0, isliye 2 bahar! f/g = **{(1, 2), (3, −5), (4, 13/5)}**.
   Jaanch: 10 ÷ (−2) = −5, 13 ÷ 5 = 13/5 ✅.

4. (a) x² − 5x + 4 = (x − 1)(x − 4) ≠ 0 ⟹ **R − {1, 4}**.
   (b) x² − 9 = (x − 3)(x + 3) ≠ 0 ⟹ **R − {−3, 3}**.
   (c) 3x − 12 ≥ 0 ⟹ x ≥ 4 ⟹ **[4, ∞)**.

5. (a) Domain: x + 3 ≥ 0 ⟹ **[−3, ∞)**; Range: **[0, ∞)**.
   (b) Square root denominator mein hai, isliye x − 2 > 0 (strictly!) ⟹ Domain: **(2, ∞)**; Range: **(0, ∞)** (0 kabhi nahi banega!).

6. (a) Domain = **R**. |x + 1| ≥ 0 ⟹ 5 − |x + 1| ≤ 5 ⟹ Range = **(−∞, 5]**.
   (b) Domain = **R**. |x − 4| ≥ 0 ⟹ 3 + |x − 4| ≥ 3 ⟹ Range = **[3, ∞)**.

7. Denominator x + 5 ≠ 0 ⟹ Domain = **R − {−5}**.
   x > −5 par +1 aur x < −5 par −1 ⟹ Range = **{−1, 1}**.

8. Domain = **R − {−4}**.
   y = (3x − 2)/(x + 4) ⟹ xy + 4y = 3x − 2 ⟹ x(y − 3) = −4y − 2 ⟹ x = (−4y − 2)/(y − 3).
   y ≠ 3 ⟹ Range = **R − {3}**. Jaanch: y = 1 ke liye x = (−6)/(−2) = 3, f(3) = 7/7 = 1 ✅.

9. **Domain:** 2 − x² ≠ 0 ⟹ x ≠ ±√2 ⟹ **R − {−√2, √2}**.
   **Range:** y = 1/(2 − x²) ⟹ 2 − x² = 1/y ⟹ x² = 2 − 1/y = (2y − 1)/y.
   Kyunki x² ≥ 0, (2y − 1)/y ≥ 0 aur y ≠ 0:
   - ya to y < 0 (numerator −, denominator − → ratio +),
   - ya y ≥ 1/2 (dono + ya numerator 0).
   Isliye **Range = (−∞, 0) ∪ [1/2, ∞)**.
   Jaanch: x = 0 par y = 1/2; x = 2 par y = −1/2; y = 1/4 ke liye x² = 2 − 4 = −2 (namumkin!) ✅.

10. LHS = (x + 1/x)³ = x³ + 1/x³ + 3(x)(1/x)(x + 1/x) = (x³ + 1/x³) + 3(x + 1/x) = **f(x³) + 3f(x)** = RHS.
    Jaanch: x = 2 par f(2) = 5/2, LHS = 125/8; f(8) + 3f(2) = (8 + 1/8) + 15/2 = 65/8 + 60/8 = 125/8 ✅.

11. Denominator x − [x] ≠ 0 ⟹ x ≠ [x]. Hum jaante hain x = [x] tabhi hota hai jab x ek **integer** ho!
    Isliye **Domain = R − Z** (sabhi non-integer real numbers).

12. (a) ❌ False: √(x²) = |x| hota hai (jaise √((−3)²) = +3 ≠ −3).
    (b) ❌ False: un points ko bhi hatana padta hai jahan g(x) = 0 ho!
    (c) ❌ False: x = 1 par f(1) undefined hai, isliye (fg)(x) = 1 sirf **R − {1}** par true hai (x = 1 par nahi!).

---

Ab tum real functions ko jodna, ghatana, guna-bhaag karna aur unke Domain-Range ko bina galti nikaalna seekh chuke ho.

**Agle aur aakhri topic mein:** poore chapter ka **Decision Map**, 6 mixed challenge problems, 12 practice sawaal, aur **Chapter Ka Saar**!
