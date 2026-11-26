> **Class:** 12 | **Subject:** Mathematics | **Chapter 2:** Inverse Trigonometric Functions (Part 4)

# Sab Kuch Mila Kar: Mixed Problems, Equations and Chapter Wrap-up

> **Pichle topic mein:** Humne [Properties of Inverse Trigonometric Functions](inverse-trigonometric-functions-part3.md) padhe. Ab hum poore chapter — principal values, self-cancellation traps, complementary sums, triangle conversions, substitutions aur ITF equations — ko ek saath milakar mixed high-scoring problems solve karenge!

---

Om apne school ke Maths Fair mein "Angle Decoder" stall chala raha tha. Visitors ko aise equations milte the jo dekhne mein darawne lagte the — jaise cot⁻¹[(√(1+sin x) + √(1−sin x)) / (√(1+sin x) − √(1−sin x))] — par jaise hi half-angle identity lagti, poora expression sirf **x/2** ban jata! Yahi hai Inverse Trigonometric Functions ki asli beauty!

---

## Naye Shabd (Chapter Formula Snapshot)

- **Principal Ranges:** sin⁻¹ [−π/2, π/2], cos⁻¹ [0, π], tan⁻¹ (−π/2, π/2), cot⁻¹ (0, π), sec⁻¹ [0, π]−{π/2}, cosec⁻¹ [−π/2, π/2]−{0}.
- **Complementary:** sin⁻¹x + cos⁻¹x = tan⁻¹x + cot⁻¹x = sec⁻¹x + cosec⁻¹x = **π/2**.
- **tan⁻¹ addition (xy < 1):** tan⁻¹[(x + y)/(1 − xy)]; **2 tan⁻¹x:** sin⁻¹[2x/(1+x²)] = cos⁻¹[(1−x²)/(1+x²)] = tan⁻¹[2x/(1−x²)].

---

## Mixed Solved Examples

### Example 1: Half-Angle Simplification Classic
Prove that for x ∈ (0, π/4):
**cot⁻¹[ (√(1 + sin x) + √(1 − sin x)) / (√(1 + sin x) − √(1 − sin x)) ] = x / 2**.

**Solution:**
Write 1 + sin x = (cos(x/2) + sin(x/2))² and 1 − sin x = (cos(x/2) − sin(x/2))².
Since x ∈ (0, π/4), we have x/2 ∈ (0, π/8), where **cos(x/2) > sin(x/2) > 0**!
So:
- √(1 + sin x) = cos(x/2) + sin(x/2)
- √(1 − sin x) = cos(x/2) − sin(x/2)
Numerator = 2 cos(x/2); Denominator = 2 sin(x/2).
Ratio = 2 cos(x/2) / [2 sin(x/2)] = **cot(x/2)**.
Therefore, LHS = cot⁻¹(cot(x/2)) = **x/2** (valid since x/2 ∈ (0, π/8) ⊂ (0, π)) = RHS!

Jaanch: Test x = π/6 (30°, sin x = 1/2): √1.5 = 1.2247, √0.5 = 0.7071; (1.9318)/(0.5176) = 3.732 = cot(15°) = cot(π/12) → cot⁻¹(3.732) = π/12 = x/2 ✅

---

### Example 2: Solving an ITF Equation (And Checking Extraneous Roots!)
Solve for x: **tan⁻¹( (1 − x) / (1 + x) ) = (1/2) tan⁻¹x**, for x > 0.

**Solution:**
Notice that LHS = tan⁻¹(1) − tan⁻¹(x) = **π/4 − tan⁻¹x**!
Equation becomes:
π/4 − tan⁻¹x = (1/2) tan⁻¹x
π/4 = (3/2) tan⁻¹x
tan⁻¹x = (2/3) × (π/4) = **π/6**
**x = tan(π/6) = 1/√3** (satisfies x > 0!).

Jaanch: At x = 1/√3: LHS = tan⁻¹[(√3 − 1)/(√3 + 1)] = tan⁻¹(2 − √3) = π/12 (15°); RHS = (1/2)(π/6) = π/12 ✅

---

### Example 3: Combining sin⁻¹ and tan⁻¹ with cos⁻¹
Prove that: **sin⁻¹(12/13) + cos⁻¹(4/5) + tan⁻¹(63/16) = π**.

**Solution:**
Convert sin⁻¹(12/13) and cos⁻¹(4/5) to tan⁻¹:
- sin⁻¹(12/13) = **tan⁻¹(12/5)** (5–12–13 triangle).
- cos⁻¹(4/5) = **tan⁻¹(3/4)** (3–4–5 triangle).
Let A = tan⁻¹(12/5) and B = tan⁻¹(3/4). Check product xy = (12/5)(3/4) = **9/5 > 1**!
Since A, B ∈ (0, π/2) and xy > 1, we have **A + B ∈ (π/2, π)**!
Compute tan(A + B) = (12/5 + 3/4) / (1 − 36/20) = (63/20) / (−16/20) = **−63/16**.
Therefore, A + B = **π − tan⁻¹(63/16)**!
Adding tan⁻¹(63/16) to both sides:
A + B + tan⁻¹(63/16) = **π** = RHS!

Jaanch: 12/5 = 2.4 (67.38°), 3/4 = 0.75 (36.87°), 63/16 = 3.9375 (75.75°); 67.38° + 36.87° + 75.75° = 180° = π ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **ITF equation solve karne ke baad extraneous root reject na karna:**
   - *Galat:* tan⁻¹(2x) + tan⁻¹(3x) = π/4 ke dono roots x = 1/6 aur x = −1 likh dena.
   - *Sahi:* Hamesha har root ko **original equation** mein substitute karke check karo! x = −1 par dono terms negative hain, sum +π/4 kabhi nahi ho sakta → reject x = −1!

2. **√(1 − sin x) ko bina range check kiye cos(x/2) − sin(x/2) likh dena:**
   - *Galat:* Har x ke liye √(1 − sin x) = cos(x/2) − sin(x/2).
   - *Sahi:* √(a²) = **|a|** hota hai! x/2 ∈ (0, π/4) mein cos(x/2) > sin(x/2), tabhi + sign aata hai!

---

## Quick Recap

- **Golden Equation Check:** Always substitute final roots back into the ORIGINAL ITF equation to eliminate extraneous solutions!
- **When xy > 1 (both x, y > 0):** tan⁻¹x + tan⁻¹y = **π + tan⁻¹[(x + y)/(1 − xy)]**!
- **Best universal converter:** Right-triangle Pythagoras → convert everything to tan⁻¹ (or sin/cos addition formulas).

---

## Practice Questions

1. Evaluate: **cos⁻¹(cos 7π/6) + sin⁻¹(sin 5π/6)**.
2. Prove that: **tan⁻¹(√x) = (1/2) cos⁻¹[ (1 − x) / (1 + x) ]**, for x ∈ [0, 1].
3. Prove that: **9π/8 − (9/4) sin⁻¹(1/3) = (9/4) sin⁻¹(2√2 / 3)**.
4. Solve for x: **2 tan⁻¹(cos x) = tan⁻¹(2 cosec x)** (x ∈ (0, π)).
5. Solve for x: **sin⁻¹(1 − x) − 2 sin⁻¹x = π/2**.
6. Evaluate: **tan[ sin⁻¹(3/5) + cot⁻¹(3/2) ]**.
7. Prove that: **tan⁻¹[ (√(1 + x) − √(1 − x)) / (√(1 + x) + √(1 − x)) ] = π/4 − (1/2) cos⁻¹x**, for −1/√2 ≤ x ≤ 1.
8. Find the value of **cos(sec⁻¹x + cosec⁻¹x)** for |x| ≥ 1.
9. Solve for x: **tan⁻¹(x − 1)/(x − 2) + tan⁻¹(x + 1)/(x + 2) = π/4**.
10. Evaluate: **sin[ tan⁻¹(x) ]** for |x| < 1 in algebraic form.

---

### Answers

1. cos⁻¹(cos 7π/6) = 5π/6; sin⁻¹(sin 5π/6) = π/6.
   Sum = 5π/6 + π/6 = **π**.
   Jaanch: 150° + 30° = 180° = π ✅
2. Put x = tan²θ ⇒ √x = tan θ (θ ∈ [0, π/4]).
   RHS = (1/2) cos⁻¹[ (1 − tan²θ)/(1 + tan²θ) ] = (1/2) cos⁻¹(cos 2θ) = (1/2)(2θ) = θ = **tan⁻¹(√x)** = LHS!
3. LHS = (9/4)[ π/2 − sin⁻¹(1/3) ] = (9/4) cos⁻¹(1/3).
   Convert cos⁻¹(1/3) to sin⁻¹: perpendicular = √(3² − 1²) = √8 = 2√2 → cos⁻¹(1/3) = **sin⁻¹(2√2 / 3)**!
   So LHS = **(9/4) sin⁻¹(2√2 / 3)** = RHS!
   Jaanch: (1/3)² + (2√2/3)² = 1/9 + 8/9 = 1 ✅
4. Apply 2 tan⁻¹u = tan⁻¹[2u/(1 − u²)] with u = cos x:
   tan⁻¹[ 2 cos x / (1 − cos²x) ] = tan⁻¹(2 / sin x) ⇒ 2 cos x / sin²x = 2 / sin x ⇒ cos x / sin x = 1 ⇒ cot x = 1 ⇒ **x = π/4**.
   Jaanch: At x = π/4: LHS = 2 tan⁻¹(1/√2) = tan⁻¹[√2 / (1/2)] = tan⁻¹(2√2); RHS = tan⁻¹(2√2) ✅
5. Rewrite as sin⁻¹(1 − x) = π/2 + 2 sin⁻¹x. Take sin of both sides:
   1 − x = cos(2 sin⁻¹x) = 1 − 2x² ⇒ 2x² − x = 0 ⇒ x(2x − 1) = 0 ⇒ x = 0 or x = 1/2.
   Check both in original equation:
   - x = 0: sin⁻¹(1) − 0 = π/2 (Valid!).
   - x = 1/2: sin⁻¹(1/2) − 2 sin⁻¹(1/2) = −π/6 ≠ π/2 (**Reject x = 1/2!**).
   Answer: **x = 0**!
   Jaanch: Only x = 0 satisfies the original equation ✅
6. sin⁻¹(3/5) = tan⁻¹(3/4); cot⁻¹(3/2) = tan⁻¹(2/3).
   tan[ tan⁻¹(3/4) + tan⁻¹(2/3) ] = (3/4 + 2/3) / (1 − 6/12) = (17/12) / (6/12) = **17/6**.
   Jaanch: (9 + 8)/12 = 17/12; 1 − 1/2 = 1/2; (17/12)/(1/2) = 17/6 ✅
7. Put x = cos 2θ (2θ = cos⁻¹x): √(1 + cos 2θ) = √2 cos θ, √(1 − cos 2θ) = √2 sin θ.
   LHS = tan⁻¹[ (cos θ − sin θ)/(cos θ + sin θ) ] = tan⁻¹[ tan(π/4 − θ) ] = **π/4 − θ = π/4 − (1/2) cos⁻¹x** = RHS!
8. Since sec⁻¹x + cosec⁻¹x = π/2 for |x| ≥ 1: cos(π/2) = **0**.
9. Let a = (x − 1)/(x − 2), b = (x + 1)/(x + 2). Then (a + b)/(1 − ab) = 1 ⇒ a + b = 1 − ab.
   [(x−1)(x+2) + (x+1)(x−2)] = (x−2)(x+2) − (x−1)(x+1)
   (x² + x − 2 + x² − x − 2) = (x² − 4) − (x² − 1)
   2x² − 4 = −3 ⇒ 2x² = 1 ⇒ **x = ±1/√2**.
   Jaanch: Both ±1/√2 give xy < 1 and satisfy the equation ✅
10. Let θ = tan⁻¹x ⇒ tan θ = x/1 ⇒ hypotenuse = √(1 + x²) ⇒ sin θ = **x / √(1 + x²)**.
    Jaanch: At x = 1/√3: sin(π/6) = 1/2; (1/√3)/√(4/3) = 1/2 ✅

---

## Chapter Ka Saar (Inverse Trigonometric Functions Wrap-up)

| Topic | Key Formulas / Rules | Must-Remember Fact |
|---|---|---|
| 1. Domain & Range | sin⁻¹ [−π/2, π/2], cos⁻¹ [0, π], tan⁻¹ (−π/2, π/2) | Odd family (−α): sin⁻¹, tan⁻¹, cosec⁻¹; π−α family: cos⁻¹, cot⁻¹, sec⁻¹ |
| 2. Graphs & Cancellation | trig⁻¹(trig θ) = θ ONLY in principal branch | sin⁻¹x & tan⁻¹x increasing; cos⁻¹x & cot⁻¹x decreasing |
| 3. Core Identities | sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1−xy)] (xy<1) | 2 tan⁻¹x converts to sin⁻¹, cos⁻¹, or tan⁻¹; use right triangles! |
| 4. Equations & Proofs | Substitutions: √(1−x²)→sin θ, √(1+x²)→tan θ, √(x²−1)→sec θ | Always check roots in original equation to discard extraneous roots! |

---

Ab tumne Inverse Trigonometric Functions ke saare core concepts aur identities master kar liye hain! Competitive exams (JEE/NEET) ke liye **Piecewise Formulas of sin⁻¹(sin x) & cos⁻¹(cos x), Full tan⁻¹x + tan⁻¹y Formula for xy > 1, aur Telescoping ITF Series** padhne ke liye [Inverse Trigonometric Functions — Gehrai Mein (Advanced Level)](inverse-trigonometric-functions-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum **Matrices** shuru karenge — jahan numbers ke rectangular grids par multiplication, transpose, symmetric/skew-symmetric decomposition aur elementary row operations seekhenge!
