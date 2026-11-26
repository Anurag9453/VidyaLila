> **Class:** 12 | **Subject:** Mathematics | **Chapter 7:** Integrals (Part 3)

# Integrals of Special Functions (The 9 Golden Quadratic Forms)

> **Pichle topic mein:** Humne [Substitution, Partial Fractions and Integration by Parts](integrals-part2.md) padhe. Ab hum **9 sabse zaroori standard quadratic integral formulas** — 6 denominator forms aur 3 square-root numerator forms — aur **Completing the Square** + **Linear-over-Quadratic** trick master karenge!

---

Jagannath ne apni study wall par 9 formula cards ko 3 clean groups mein lagaya tha: (1) bina root ke quadratic denominators, (2) square-root ke andar quadratic denominators, aur (3) square-root ke andar quadratic numerators! Usne dekha ki koi bhi messy quadratic jaise **x² + 6x + 13** sirf **completing the square** ((x + 3)² + 2²) karte hi turant in 9 cards mein se ek ban jata hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Six Special Denominator Integrals** | dx/(x²−a²), dx/(a²−x²), dx/(x²+a²), dx/√(x²−a²), dx/√(a²−x²), dx/√(x²+a²) |
| **Three Special Root Integrals** | ∫√(a²−x²) dx, ∫√(x²+a²) dx, ∫√(x²−a²) dx (Area of circle/ellipse mein yahi use honge!) |
| **Linear-over-Quadratic Trick** | Numerator **(px + q)** ko **A · d/dx(denominator quadratic) + B** ke roop mein todna! |

---

## 1. The Six Special Denominator Formulas (MUST MEMORISE!)

1. **∫ dx / (x² − a²) = [1 / (2a)] ln | (x − a) / (x + a) | + C**
2. **∫ dx / (a² − x²) = [1 / (2a)] ln | (a + x) / (a − x) | + C**
3. **∫ dx / (x² + a²) = (1 / a) tan⁻¹(x / a) + C**
4. **∫ dx / √(x² − a²) = ln | x + √(x² − a²) | + C**
5. **∫ dx / √(a² − x²) = sin⁻¹(x / a) + C**
6. **∫ dx / √(x² + a²) = ln | x + √(x² + a²) | + C**

---

## 2. The Three Special Square-Root Integrals (Derived by Parts with v = 1!)

Har ek ka pattern identical hai: **(x/2) × (same root) ± (a²/2) × (its corresponding 1/root integral!)**:
7. **∫ √(a² − x²) dx = (x/2) √(a² − x²) + (a²/2) sin⁻¹(x / a) + C**
8. **∫ √(x² + a²) dx = (x/2) √(x² + a²) + (a²/2) ln | x + √(x² + a²) | + C**
9. **∫ √(x² − a²) dx = (x/2) √(x² − a²) − (a²/2) ln | x + √(x² − a²) | + C**

*(Memory trick: Sirf Formula #9 mein **−a²/2** hai — kyunki −a² ka sign khud negative hai! #7 aur #8 mein **+a²/2** hai!)*

---

## 3. Handling General Quadratics (ax² + bx + c)

1. **∫ dx / (ax² + bx + c)** or **∫ dx / √(ax² + bx + c):**
   - Factor out **a** (so x² coefficient is +1 or −1), then **complete the square** → directly apply Formulas #1–#6!
2. **∫ (px + q) / (ax² + bx + c) dx** or **∫ (px + q) / √(ax² + bx + c) dx:**
   - Write **px + q = A · (2ax + b) + B** (find A and B by comparing coefficients!).
   - First integral ∫ A(2ax + b)/(ax² + bx + c) dx = **A ln |ax² + bx + c|** (or **2A √(ax² + bx + c)** for root!).
   - Second integral ∫ B / (quadratic) dx → complete the square!

---

## Solved Examples

### Example 1: Completing the Square in Denominator
Evaluate: **∫ dx / (x² − 6x + 13)**.

**Solution:**
Complete the square: x² − 6x + 13 = (x − 3)² + 13 − 9 = **(x − 3)² + 2²**.
Apply Formula #3 (∫ du / (u² + a²) = (1/a) tan⁻¹(u/a)):
= **(1/2) tan⁻¹[ (x − 3) / 2 ] + C**!

Jaanch: Differentiate: (1/2) · [1 / (1 + (x−3)²/4)] · (1/2) = 1 / [4 + (x−3)²] = 1 / (x² − 6x + 13) ✅

---

### Example 2: Linear Over Quadratic (px + q = A(2ax + b) + B)
Evaluate: **∫ (x + 2) / (2x² + 6x + 5) dx**.

**Solution:**
Derivative of denominator = **4x + 6**.
Write **x + 2 = A(4x + 6) + B**:
- Compare x: 4A = 1 ⇒ **A = 1/4**.
- Compare constant: 6A + B = 2 ⇒ 6(1/4) + B = 2 ⇒ **B = 1/2**.
Split the integral:
I = (1/4) ∫ (4x + 6) / (2x² + 6x + 5) dx + (1/2) ∫ dx / (2x² + 6x + 5).
- First part = **(1/4) ln |2x² + 6x + 5|**.
- Second part: factor 2 out of denominator → (1/4) ∫ dx / (x² + 3x + 5/2) = (1/4) ∫ dx / [ (x + 3/2)² + (1/2)² ]
  = (1/4) × [ 1 / (1/2) ] tan⁻¹[ (x + 3/2) / (1/2) ] = **(1/2) tan⁻¹(2x + 3)**.
Final Answer: **(1/4) ln |2x² + 6x + 5| + (1/2) tan⁻¹(2x + 3) + C**!

Jaanch: Check (1/4)(4x + 6) + 1/2 = x + 3/2 + 1/2 = x + 2; (x + 3/2)² + 1/4 = x² + 3x + 5/2 ✅

---

### Example 3: Square-Root Quadratic Numerator
Evaluate: **∫ √(x² + 4x + 6) dx**.

**Solution:**
Complete the square: x² + 4x + 6 = **(x + 2)² + (√2)²**.
Apply Formula #8 (∫ √(u² + a²) du with u = x + 2, a = √2, a² = 2):
= **[(x + 2) / 2] √(x² + 4x + 6) + (2 / 2) ln | (x + 2) + √(x² + 4x + 6) | + C**
= **[(x + 2) / 2] √(x² + 4x + 6) + ln | x + 2 + √(x² + 4x + 6) | + C**!

Jaanch: (x + 2)² + 2 = x² + 4x + 6; a²/2 = 2/2 = 1 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Formula #1 (x² − a²) aur Formula #2 (a² − x²) ke numerator/denominator ulta kar dena:**
   - *Galat:* ∫ dx/(a² − x²) = (1/2a) ln |(a − x)/(a + x)|.
   - *Sahi:* **x² − a²** mein **minus upar** [(x − a)/(x + a)]; **a² − x²** mein **plus upar** [(a + x)/(a − x)]!

2. **Formula #9 (∫ √(x² − a²) dx) mein +a²/2 likh dena:**
   - *Galat:* (x/2)√(x² − a²) + (a²/2) ln|x + √(x² − a²)|.
   - *Sahi:* Yahan **−(a²/2)** hota hai!

---

## Quick Recap

- **6 Denominator forms:** x²−a², a²−x², x²+a² (tan⁻¹), √(x²−a²), √(a²−x²) (sin⁻¹), √(x²+a²).
- **3 Root forms:** (x/2)(root) ± (a²/2)(1/root integral) — minus ONLY for √(x² − a²)!
- **General quadratic:** Complete the square; for (px + q), write **px + q = A(derivative) + B**!

---

## Practice Questions

1. Evaluate: (a) **∫ dx / (x² − 16)**, (b) **∫ dx / (25 − x²)**, (c) **∫ dx / (x² + 9)**.
2. Evaluate: (a) **∫ dx / √(9 − 25x²)**, (b) **∫ dx / √(4x² + 9)**.
3. Evaluate: **∫ (3x²) / (x⁶ + 1) dx** (Hint: put t = x³!).
4. Evaluate: **∫ dx / (x² + 2x + 2)**.
5. Evaluate: **∫ dx / √(7 − 6x − x²)**.
6. Evaluate: **∫ (5x − 2) / (1 + 2x + 3x²) dx**.
7. Evaluate: **∫ (x + 2) / √(x² + 2x + 3) dx**.
8. Evaluate: **∫ √(4 − x²) dx**.
9. Evaluate: **∫ √(1 − 4x − x²) dx**.
10. Evaluate: **∫ (sec² x) / √(tan² x + 4) dx**.

---

### Answers

1. (a) **(1/8) ln |(x − 4)/(x + 4)| + C**; (b) **(1/10) ln |(5 + x)/(5 − x)| + C**; (c) **(1/3) tan⁻¹(x/3) + C**.
2. (a) Factor 5: (1/5) ∫ dx/√((3/5)² − x²) = **(1/5) sin⁻¹(5x/3) + C**.
   (b) Factor 2: (1/2) ∫ dx/√(x² + (3/2)²) = **(1/2) ln |x + √(x² + 9/4)| + C**.
   Jaanch: Differentiate (1/5) sin⁻¹(5x/3) = (1/5) · (5/3)/√(1 − 25x²/9) = 1/√(9 − 25x²) ✅
3. Put t = x³ ⇒ dt = 3x² dx → ∫ dt/(t² + 1) = **tan⁻¹(x³) + C**!
4. x² + 2x + 2 = (x + 1)² + 1² ⇒ **tan⁻¹(x + 1) + C**.
5. 7 − 6x − x² = 16 − (x + 3)² = 4² − (x + 3)² ⇒ **sin⁻¹[(x + 3) / 4] + C**!
   Jaanch: 16 − (x² + 6x + 9) = 7 − 6x − x² ✅
6. Write 5x − 2 = A(6x + 2) + B ⇒ A = 5/6, B = −11/3.
   **(5/6) ln |3x² + 2x + 1| − (11 / (3√2)) tan⁻¹[(3x + 1)/√2] + C**.
7. Write x + 2 = (1/2)(2x + 2) + 1.
   = **√(x² + 2x + 3) + ln |x + 1 + √(x² + 2x + 3)| + C**!
   Jaanch: (1/2)(2x + 2) + 1 = x + 2; (x + 1)² + 2 = x² + 2x + 3 ✅
8. Formula #7 (a = 2): **(x/2) √(4 − x²) + 2 sin⁻¹(x/2) + C**.
9. 1 − 4x − x² = 5 − (x + 2)² = (√5)² − (x + 2)²:
   **[(x + 2)/2] √(1 − 4x − x²) + (5/2) sin⁻¹[(x + 2)/√5] + C**!
10. Put t = tan x ⇒ dt = sec²x dx → ∫ dt/√(t² + 2²) = **ln |tan x + √(tan²x + 4)| + C**!

---

Ab tumne sabhi 9 special quadratic integrals aur completing-the-square tricks master kar liye hain!

**Agle topic mein:** Hum [Definite Integrals, Fundamental Theorem of Calculus and Properties](integrals-part4.md) padhenge — jahan **King's Property** aur **Even/Odd Symmetry** bade-bade integrals ko 2 lines mein solve kar denge!
