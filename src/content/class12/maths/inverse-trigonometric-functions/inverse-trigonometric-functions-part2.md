> **Class:** 12 | **Subject:** Mathematics | **Chapter 2:** Inverse Trigonometric Functions (Part 2)

# Principal Value Branches, Graphs and Self-Cancellation Traps

> **Pichle topic mein:** Humne [Basic Concepts, Domain and Range](inverse-trigonometric-functions.md) mein sabhi 6 inverse trig functions ki principal value branches yaad kin. Ab hum unke **Graphs (mirror image across y = x)** dekhenge, aur exam ka sabse bada trap — **sin⁻¹(sin θ) ≠ θ jab θ principal branch ke bahar ho** — hamesha ke liye solve karenge!

---

Nita apne robotics lab mein ek robotic arm ke joint-angle software ko debug kar rahi thi. Code mein likha tha: angle = arcsin(sin(120°)). Nita ne socha output 120° aayega, par screen par **60°** aaya! Kyun? Kyunki sin(120°) = √3/2 hota hai, aur arcsin ki principal branch **[−90°, +90°]** hai — isliye arcsin(√3/2) hamesha **60° (π/3)** lautata hai, 120° nahi!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Reflection Across y = x** | Kisi bhi function f(x) ke graph ko line **y = x** mein mirror-reflect karne par uske inverse **f⁻¹(x)** ka graph milta hai |
| **Strictly Increasing / Decreasing** | **sin⁻¹x** aur **tan⁻¹x** hamesha badhte hain (increasing); **cos⁻¹x** aur **cot⁻¹x** hamesha ghat-te hain (decreasing)! |
| **Self-Cancellation Rule** | trig⁻¹(trig θ) = θ **SIRF TAB** jab θ us function ki **principal value branch** ke andar ho! |

---

## 1. Graphs of Principal Value Branches

1. **y = sin⁻¹ x** (Domain [−1, 1], Range [−π/2, π/2], **strictly increasing**, passes through (−1, −π/2), (0, 0), (1, π/2)):
```
        y
   π/2  │         * (1, π/2)
        │       /
     0 -┼------*------- x
        │    / (0,0)
  -π/2  │  * (-1, -π/2)
```

2. **y = cos⁻¹ x** (Domain [−1, 1], Range [0, π], **strictly decreasing**, passes through (−1, π), (0, π/2), (1, 0)):
```
        y
     π  │ * (-1, π)
        │   \
   π/2  │    * (0, π/2)
        │      \
     0 -┼-------*------ x
               (1, 0)
```

3. **y = tan⁻¹ x** (Domain R, Range (−π/2, π/2), **strictly increasing**, horizontal asymptotes at y = +π/2 and y = −π/2):
```
        y
   π/2  │ - - - - - - - (asymptote y = π/2)
        │         ___/
     0 -┼-------*------- x
        │   ___/
  -π/2  │ - - - - - - - (asymptote y = -π/2)
```

---

## 2. The Golden Self-Cancellation Rules

1. **trig(trig⁻¹ x) = x** — ALWAYS true for every **x ∈ Domain**!
   - e.g., sin(sin⁻¹(0.7)) = 0.7; tan(tan⁻¹(−5)) = −5.
2. **trig⁻¹(trig θ) = θ** — ONLY true when **θ ∈ Principal Value Branch**!
   - If θ is **outside** the principal branch, use **allied-angle identities** (like sin(π − α) = sin α, cos(2π − α) = cos α, tan(π + α) = tan α) to bring the angle **inside** the principal branch BEFORE cancelling!

---

## Solved Examples

### Example 1: Evaluating sin⁻¹(sin 2π/3) and sin⁻¹(sin 3π/5)
Find the exact values of: (a) sin⁻¹(sin 2π/3), (b) sin⁻¹(sin 3π/5).

**Solution:**
Principal branch of sin⁻¹ is **[−π/2, π/2]**.
(a) 2π/3 = 120° ∉ [−π/2, π/2]. Rewrite using sin(π − α) = sin α:
    sin(2π/3) = sin(π − π/3) = sin(π/3).
    Now π/3 ∈ [−π/2, π/2], so sin⁻¹(sin 2π/3) = sin⁻¹(sin π/3) = **π/3**!

(b) 3π/5 = 108° ∉ [−π/2, π/2]. Rewrite: sin(3π/5) = sin(π − 2π/5) = sin(2π/5).
    Since 2π/5 = 72° ∈ [−π/2, π/2], sin⁻¹(sin 3π/5) = **2π/5**!

Jaanch: sin(2π/3) = √3/2 = sin(π/3), and π/3 ∈ [−π/2, π/2]; sin(3π/5) = sin(2π/5), and 2π/5 ∈ [−π/2, π/2] ✅

---

### Example 2: Evaluating cos⁻¹(cos 7π/6) and cos⁻¹(cos 13π/6)
Find the exact values of: (a) cos⁻¹(cos 7π/6), (b) cos⁻¹(cos 13π/6).

**Solution:**
Principal branch of cos⁻¹ is **[0, π]**.
(a) 7π/6 = 210° ∉ [0, π]. Rewrite using cos(2π − α) = cos α:
    cos(7π/6) = cos(2π − 5π/6) = cos(5π/6).
    Since 5π/6 = 150° ∈ [0, π], cos⁻¹(cos 7π/6) = **5π/6**!

(b) 13π/6 = 2π + π/6 → cos(13π/6) = cos(π/6).
    Since π/6 ∈ [0, π], cos⁻¹(cos 13π/6) = **π/6**!

Jaanch: cos(7π/6) = −√3/2 = cos(5π/6); cos(13π/6) = √3/2 = cos(π/6) ✅

---

### Example 3: Evaluating tan⁻¹(tan 3π/4) and tan⁻¹(tan 7π/6)
Find the exact values of: (a) tan⁻¹(tan 3π/4), (b) tan⁻¹(tan 7π/6).

**Solution:**
Principal branch of tan⁻¹ is **(−π/2, π/2)**.
(a) 3π/4 ∉ (−π/2, π/2). Rewrite using tan(α − π) = tan α:
    tan(3π/4) = tan(3π/4 − π) = tan(−π/4).
    Since −π/4 ∈ (−π/2, π/2), tan⁻¹(tan 3π/4) = **−π/4**!

(b) 7π/6 ∉ (−π/2, π/2). Rewrite: tan(7π/6) = tan(π + π/6) = tan(π/6).
    Since π/6 ∈ (−π/2, π/2), tan⁻¹(tan 7π/6) = **π/6**!

Jaanch: tan(3π/4) = −1 = tan(−π/4); tan(7π/6) = 1/√3 = tan(π/6) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Bina range check kiye sin⁻¹(sin θ) = θ likh dena:**
   - *Galat:* sin⁻¹(sin 2π/3) = 2π/3.
   - *Sahi:* Pehle check karo kya θ ∈ [−π/2, π/2] hai! 2π/3 bahar hai → answer **π/3** hai!

2. **cos⁻¹(cos 7π/6) ko −π/6 ya 7π/6 likh dena:**
   - *Galat:* cos(π + π/6) = −cos(π/6) dekh kar −π/6 likh dena.
   - *Sahi:* cos⁻¹ ki range **[0, π]** hai (kabhi negative nahi aata!) → cos(2π − 5π/6) = cos(5π/6) → **5π/6**!

3. **cos⁻¹x ko increasing function maan lena:**
   - *Galat:* x₁ < x₂ ⇒ cos⁻¹(x₁) < cos⁻¹(x₂).
   - *Sahi:* **cos⁻¹x aur cot⁻¹x strictly DECREASING** hain! (Inequality palat jati hai: x₁ < x₂ ⇒ cos⁻¹(x₁) > cos⁻¹(x₂)!)

---

## Quick Recap

- **Increasing graphs:** sin⁻¹x, tan⁻¹x. **Decreasing graphs:** cos⁻¹x, cot⁻¹x.
- **trig(trig⁻¹ x) = x** for all x in domain.
- **trig⁻¹(trig θ) = θ** ONLY if θ is inside the principal value branch; otherwise shift θ via allied angles (π − α, 2π − α, θ ± π) into the branch first!

---

## Practice Questions

1. Evaluate: (a) sin⁻¹(sin 5π/6), (b) cos⁻¹(cos 5π/3), (c) tan⁻¹(tan 5π/4).
2. Evaluate: (a) sin⁻¹(sin 4π/3), (b) cos⁻¹(cos 11π/6), (c) tan⁻¹(tan 7π/4).
3. Evaluate: **sin⁻¹(cos 33π/5)** (Hint: convert cos to sin first!).
4. Find the domain of **f(x) = sin⁻¹(x) + cos(x)**.
5. State whether each function is strictly increasing or strictly decreasing on its domain: (a) sin⁻¹x, (b) cos⁻¹x, (c) tan⁻¹x, (d) cot⁻¹x.
6. Evaluate: **cos⁻¹(cos 2π/3) + sin⁻¹(sin 2π/3)**.
7. Find the value of **sin⁻¹(sin 2)** (Note: 2 is in **radians**, where π/2 ≈ 1.57 and π ≈ 3.14!).
8. Find the value of **cos⁻¹(cos 4)** (4 radians lies between π ≈ 3.14 and 2π ≈ 6.28!).
9. Explain geometrically how the graph of y = cos⁻¹x is obtained from y = cos x on [0, π].
10. Find the range (minimum and maximum values) of **f(x) = 3 sin⁻¹x + π/2**.

---

### Answers

1. (a) sin(5π/6) = sin(π − π/6) = sin(π/6) → **π/6**.
   (b) cos(5π/3) = cos(2π − π/3) = cos(π/3) → **π/3**.
   (c) tan(5π/4) = tan(π + π/4) = tan(π/4) → **π/4**.
   Jaanch: π/6 ∈ [−π/2, π/2], π/3 ∈ [0, π], π/4 ∈ (−π/2, π/2) ✅
2. (a) sin(4π/3) = sin(π + π/3) = −sin(π/3) = sin(−π/3) → **−π/3**.
   (b) cos(11π/6) = cos(2π − π/6) = cos(π/6) → **π/6**.
   (c) tan(7π/4) = tan(2π − π/4) = tan(−π/4) → **−π/4**.
3. 33π/5 = 6π + 3π/5 → cos(33π/5) = cos(3π/5) = sin(π/2 − 3π/5) = sin(−π/10).
   Since −π/10 ∈ [−π/2, π/2], answer = **−π/10**!
   Jaanch: 3π/5 = 108°, cos(108°) = sin(90° − 108°) = sin(−18°) = sin(−π/10) ✅
4. Domain of sin⁻¹x is [−1, 1]; domain of cos x is R. Intersection = **[−1, 1]**.
5. (a) Strictly **increasing**; (b) Strictly **decreasing**; (c) Strictly **increasing**; (d) Strictly **decreasing**.
6. cos⁻¹(cos 2π/3) = 2π/3 (since 2π/3 ∈ [0, π]!).
   sin⁻¹(sin 2π/3) = π/3 (since 2π/3 ∉ [−π/2, π/2]!).
   Sum = 2π/3 + π/3 = **π**.
   Jaanch: 120° + 60° = 180° = π ✅
7. Since π/2 ≈ 1.57 < 2 < π ≈ 3.14, we have **π − 2 ≈ 1.14 ∈ [−π/2, π/2]**, and sin(2) = sin(π − 2).
   Therefore, sin⁻¹(sin 2) = **π − 2**!
   Jaanch: π − 2 ≈ 1.1416 ∈ [−1.57, 1.57] ✅
8. Since π ≈ 3.14 < 4 < 2π ≈ 6.28, we have **2π − 4 ≈ 2.28 ∈ [0, π]**, and cos(4) = cos(2π − 4).
   Therefore, cos⁻¹(cos 4) = **2π − 4**!
   Jaanch: 2π − 4 ≈ 2.283 ∈ [0, 3.14] ✅
9. By reflecting the graph of y = cos x (restricted to x ∈ [0, π]) across the **45° line y = x** (swapping coordinates (x, y) → (y, x)).
10. Since −π/2 ≤ sin⁻¹x ≤ π/2:
    Multiply by 3: −3π/2 ≤ 3 sin⁻¹x ≤ 3π/2.
    Add π/2: **−π ≤ 3 sin⁻¹x + π/2 ≤ 2π** → Range = **[−π, 2π]** (min = −π, max = 2π).
    Jaanch: At x = −1: 3(−π/2) + π/2 = −π; at x = 1: 3(π/2) + π/2 = 2π ✅

---

Ab tum graphs aur self-cancellation ke har radian/degree trap ko bina soche pakad sakte ho!

**Agle topic mein:** Hum [Properties of Inverse Trigonometric Functions](inverse-trigonometric-functions-part3.md) padhenge — jahan **sin⁻¹x + cos⁻¹x = π/2**, **tan⁻¹x + tan⁻¹y**, aur **trig substitutions** seekhenge!
