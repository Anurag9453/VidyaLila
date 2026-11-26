> **Class:** 12 | **Subject:** Mathematics | **Chapter 1:** Relations and Functions (Part 4)

# Binary Operations

> **Pichle topic mein:** Humne [Composition of Functions and Invertible Functions](relations-and-functions-part3.md) padha. Ab hum dekhenge ki addition (+) aur multiplication (×) jaise operations asal mein functions hi hain — aur hum kisi bhi custom **Binary Operation (*)** ke liye closure, commutativity, associativity, identity aur inverse kaise check karte hain!

---

Mansi apne bhai ke saath ek naya board game design kar rahi thi jismein do dice numbers a aur b milakar ek naya score banta hai: **a * b = a + b + ab**! Mansi ne check kiya: "Kya 2 * 3 aur 3 * 2 barabar hain? Haan, 11 = 11! Kya (1 * 2) * 3 aur 1 * (2 * 3) barabar hain? Haan, 23 = 23! Aur kaunsa number kisi bhi score ko change nahi karta? **0** (kyunki a * 0 = a + 0 + 0 = a)!"

Aise hi kisi bhi do numbers ko combine karke usi set ka ek naya number dene wale rule ko **Binary Operation** kehte hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Binary Operation (*)** | Set A par ek function ***: A × A → A** jo A ke kisi bhi ordered pair (a, b) ko A ke hi ek unique element (a * b) par map kare (**Closure property!**) |
| **Commutative** | Jab har a, b ∈ A ke liye **a * b = b * a** ho |
| **Associative** | Jab har a, b, c ∈ A ke liye **(a * b) * c = a * (b * c)** ho |
| **Identity Element (e)** | Set A ka woh unique element e jiske liye **a * e = e * a = a** (∀ a ∈ A) |
| **Invertible Element (a⁻¹)** | Jab element a ∈ A ke liye koi b ∈ A mile such that **a * b = b * a = e** (tab b = a⁻¹) |

---

## 1. Checking Closure (Is * Even a Binary Operation?)

Sabse pehle check karo ki **a * b hamesha set A ke ANDAR** aata hai ya nahi:
- **Subtraction (−) on N:** 2 − 5 = −3 ∉ N → **NOT a binary operation on N!** (Par Z aur R par hai!)
- **Division (÷) on R:** 5 ÷ 0 undefined hai → **NOT a binary operation on R!** (Par R − {0} par hai!)
- **Number of binary operations on a finite set A with n elements:** Since |A × A| = n², total functions from A × A to A = **n^(n²)**! (For n = 2: 2⁴ = 16; for n = 3: 3⁹ = 19683!)

---

## 2. Four Core Properties of a Binary Operation (*)

1. **Commutative:** a * b = b * a, ∀ a, b ∈ A.
   - *Operation table shortcut:* Table main diagonal ke across **symmetrical** honi chahiye!
2. **Associative:** (a * b) * c = a * (b * c), ∀ a, b, c ∈ A.
   - *Counterexample trap:* Subtraction (a − b) aur division (a / b) aur exponentiation (a^b) associative **NAHI** hote!
3. **Identity Element (e ∈ A):** Solve **a * e = a** AND verify **e * a = a** AND check **e ∈ A**!
   - *Uniqueness:* Identity element agar exist karta hai toh woh hamesha **UNIQUE** hota hai!
   - *Trap:* Addition (+) ka identity 0 hai, par **N = {1, 2, 3, ...}** mein 0 nahi hai → **+ on N has NO identity!**
4. **Inverse of a (a⁻¹ ∈ A):** Only possible if **e exists**! Solve **a * b = e** AND verify **b * a = e** AND check **b ∈ A**!
   - *Uniqueness:* Associative operation mein har invertible element ka inverse **UNIQUE** hota hai!

---

## Solved Examples

### Example 1: Full Analysis of a * b = ab / 4 on Q − {0}
On the set of non-zero rational numbers Q − {0}, define **a * b = ab / 4**. Check commutativity, associativity, find the identity element e, and find the inverse of any element a.

**Solution:**
1. **Closure:** If a, b ∈ Q − {0}, then ab/4 is a non-zero rational number → valid binary operation.
2. **Commutative:** b * a = ba / 4 = ab / 4 = a * b → **Commutative**.
3. **Associative:**
   (a * b) * c = (ab / 4) * c = (ab/4)c / 4 = abc / 16.
   a * (b * c) = a * (bc / 4) = a(bc/4) / 4 = abc / 16.
   Equal → **Associative**.
4. **Identity element (e):** Set a * e = a → ae / 4 = a. Since a ≠ 0, divide by a → **e = 4 ∈ Q − {0}**.
   Check: 4 * a = 4a/4 = a. So **e = 4**.
5. **Inverse of a:** Set a * b = e = 4 → ab / 4 = 4 → ab = 16 → **a⁻¹ = 16 / a ∈ Q − {0}**.

Jaanch: Pick a = 2 → a⁻¹ = 16/2 = 8. Check 2 * 8 = (2 × 8)/4 = 4 = e! Check 2 * 4 = (2×4)/4 = 2 ✅

---

### Example 2: Testing a * b = a + b − ab on R − {1}
On A = R − {1}, define **a * b = a + b − ab**. Find the identity element and the inverse of a ∈ A.

**Solution:**
1. **Closure check:** Could a + b − ab = 1? If a + b − ab = 1, then (a − 1)(1 − b) = 0 ⇒ a = 1 or b = 1 (impossible since a, b ∈ R − {1}!). So a * b ∈ R − {1} always!
2. **Identity (e):** a * e = a → a + e − ae = a → e(1 − a) = 0. Since a ≠ 1, **e = 0 ∈ R − {1}**.
3. **Inverse (b = a⁻¹):** a * b = 0 → a + b − ab = 0 → b(1 − a) = −a → **a⁻¹ = a / (a − 1)** (well-defined since a ≠ 1, and a/(a−1) ≠ 1 since a ≠ a − 1!).

Jaanch: Pick a = 3 → a⁻¹ = 3/(3 − 1) = 3/2. Check 3 * (3/2) = 3 + 3/2 − 9/2 = 3 − 3 = 0 = e ✅

---

### Example 3: Reading an Operation Table
Consider the binary operation * on S = {1, 2, 3, 4} defined by a * b = min(a, b):

| * | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 1 | 1 | 1 | 1 |
| **2** | 1 | 2 | 2 | 2 |
| **3** | 1 | 2 | 3 | 3 |
| **4** | 1 | 2 | 3 | 4 |

Find: (a) (2 * 3) * 4, (b) Is * commutative? (c) Identity element e, (d) Which elements are invertible?

**Solution:**
(a) (2 * 3) * 4 = 2 * 4 = **2**.
(b) Table is symmetric about main diagonal (min(a, b) = min(b, a)) → **Commutative**.
(c) Row 4 matches the header (1, 2, 3, 4) and Column 4 matches the left column → **Identity e = 4**!
(d) Look for '4' in each row: ONLY row 4 contains 4 (4 * 4 = 4) → **Only 4 is invertible** (with 4⁻¹ = 4)!

Jaanch: min(a, 4) = a for all a ∈ {1, 2, 3, 4}; for a < 4, min(a, b) ≤ a < 4 so no inverse exists ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Identity e nikal kar yeh check na karna ki e ∈ A hai ya nahi:**
   - *Galat:* N = {1, 2, 3, ...} par a * b = a + b ka identity e = 0 likh dena.
   - *Sahi:* 0 ∉ N! Isliye + on N ka **NO identity element** hai!

2. **a * b = a + 2b jaise non-commutative operation ko sirf a * e = a se solve karke chhod dena:**
   - *Galat:* a * e = a ⇒ a + 2e = a ⇒ e = 0, so e = 0 is identity!
   - *Sahi:* **e * a = a** bhi check karo! 0 * a = 0 + 2a = 2a ≠ a → **NO identity exists!**

3. **Finite set par total binary operations ko n² bol dena:**
   - *Galat:* 2 elements par 2² = 4 binary operations.
   - *Sahi:* Formula **n^(n²)** hai! For n = 2: 2⁴ = **16** binary operations!

---

## Quick Recap

- **Binary operation:** *: A × A → A (closure is mandatory!).
- **Total binary ops on n elements:** **n^(n²)**.
- **Commutative:** a * b = b * a. **Associative:** (a * b) * c = a * (b * c).
- **Identity e:** Must satisfy BOTH a * e = a AND e * a = a, AND e ∈ A.
- **Inverse a⁻¹:** Must satisfy BOTH a * b = e AND b * a = e, AND b ∈ A.

---

## Practice Questions

1. Determine whether * defined by a * b = a − b is a binary operation on: (a) N, (b) Z.
2. Check whether a * b = ab + 1 on Z is commutative and associative.
3. On Q, define a * b = ab / 2. Show that * is commutative and associative, find its identity element, and find the inverse of 5.
4. On N, define a * b = LCM(a, b). Find: (a) 5 * 7 and 20 * 16, (b) Is * commutative and associative? (c) Identity element in N, (d) Which elements of N are invertible?
5. On R − {−1}, define a * b = a + b + ab. Find the identity element and the inverse of a ∈ R − {−1}.
6. Show that a * b = a + 2b on R is neither commutative nor associative, and has no identity element.
7. Let A = N × N and (a, b) * (c, d) = (a + c, b + d). Show that * is commutative and associative. Does an identity element exist in N × N?
8. How many binary operations can be defined on a set A = {a, b}?
9. On Z, define a * b = a + b − 5. Find the identity element e and the inverse of 8.
10. On the set S = {0, 1, 2, 3, 4, 5}, define addition modulo 6: a +₆ b = remainder when (a + b) is divided by 6. Find the identity element and the inverse of 4.

---

### Answers

1. (a) **No** on N (e.g., 1 − 2 = −1 ∉ N). (b) **Yes** on Z (difference of two integers is always an integer).
2. - Commutative: b * a = ba + 1 = ab + 1 = a * b → **Yes**.
   - Associative: Test a = 1, b = 2, c = 3: (1 * 2) * 3 = 3 * 3 = 10; 1 * (2 * 3) = 1 * 7 = 8. Since 10 ≠ 8 → **Not associative**.
3. Commutative (ab/2 = ba/2) and Associative ((ab/2)c/2 = abc/4 = a(bc/2)/2).
   Identity: ae/2 = a ⇒ **e = 2**.
   Inverse of 5: 5b/2 = 2 ⇒ **b = 4/5**.
   Jaanch: 5 * (4/5) = (5 × 4/5)/2 = 4/2 = 2 = e ✅
4. (a) 5 * 7 = **35**; 20 * 16 = **80**.
   (b) LCM(a, b) = LCM(b, a) (**Commutative**); LCM(LCM(a,b), c) = LCM(a, LCM(b,c)) (**Associative**).
   (c) LCM(a, 1) = a → **Identity e = 1 ∈ N**.
   (d) LCM(a, b) = 1 ⇔ a = 1 and b = 1 → **Only 1 is invertible** (1⁻¹ = 1)!
5. Identity: a + e + ae = a ⇒ e(1 + a) = 0 ⇒ **e = 0** (since a ≠ −1).
   Inverse: a + b + ab = 0 ⇒ b(1 + a) = −a ⇒ **a⁻¹ = −a / (1 + a)** ∈ R − {−1}.
   Jaanch: At a = 2: a⁻¹ = −2/3; 2 * (−2/3) = 2 − 2/3 − 4/3 = 0 = e ✅
6. - Not commutative: 1 * 2 = 5, 2 * 1 = 4 (5 ≠ 4).
   - Not associative: (1 * 2) * 3 = 5 * 3 = 11; 1 * (2 * 3) = 1 * 8 = 17 (11 ≠ 17).
   - No identity: a * e = a ⇒ e = 0, but 0 * a = 2a ≠ a!
7. Commutative: (a+c, b+d) = (c+a, d+b). Associative: ((a+c)+e, (b+d)+f) = (a+(c+e), b+(d+f)).
   Identity would be (0, 0), which is **NOT in N × N** (since 0 ∉ N) → **No identity element**!
8. n = 2 → n^(n²) = 2^(2²) = 2⁴ = **16** binary operations.
9. Identity: a + e − 5 = a ⇒ **e = 5**.
   Inverse of 8: 8 + b − 5 = 5 ⇒ b + 3 = 5 ⇒ **b = 2**.
   Jaanch: 8 * 2 = 8 + 2 − 5 = 5 = e ✅
10. Identity: a +₆ 0 = a ⇒ **e = 0**.
    Inverse of 4: 4 +₆ b = 0 (mod 6) ⇒ 4 + 2 = 6 ≡ 0 (mod 6) → **4⁻¹ = 2**!
    Jaanch: (4 + 2) mod 6 = 0 ✅

---

Ab tum kisi bhi binary operation ki saari 5 properties (closure, commutative, associative, identity, inverse) bina galti ke verify kar sakte ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up](relations-and-functions-part5.md) mein hum poore Relations & Functions chapter ke mixed exam problems solve karenge aur final summary table banayenge!
