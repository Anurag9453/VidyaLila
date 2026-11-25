# Chapter: Complex Numbers and Quadratic Equations (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [complex-numbers-and-quadratic-equations-part2.md](complex-numbers-and-quadratic-equations-part2.md) se aage chalti hai** (wahan Topic 2 mein Argand Plane, Modulus |z| aur Conjugate z̄ the). Trigonometric ratios aur quadrants (ASTC): [trigonometric-functions-part2.md](../trigonometric-functions/trigonometric-functions-part2.md).
> **Topics covered in this file:**
> 3. Polar Form of a Complex Number

---

# Topic 3: Polar Form of a Complex Number

Topic 2 mein humne complex number z = x + iy ko Argand plane par rectangular coordinates (x, y) se dikhaya. Par kisi point ka pata batane ka ek doosra, behad sundar tareeka bhi hai — **origin se uski seedhi doori (r)** aur **positive real axis se uska angle (θ)**! Isi ko **Polar Form** kehte hain. Is topic mein hum kisi bhi complex number ko (chahe wo kisi bhi quadrant ya axis par ho) polar form **r(cos θ + i sin θ)** mein badalna aur **Principal Argument** nikaalna seekhenge.

---

## Zafar ki radar wali toy boat

Park ke talab mein Zafar apni remote-controlled toy boat chala raha tha. Paas khade Papa ne kaha, "Agar boat ko point (1, √3) par bhejna ho, to use do tareekon se nirdesh de sakte ho:
- **Grid tareeka:** 1 metre East chalo, phir √3 metre North chalo.
- **Radar tareeka:** Positive East line se **60° (π/3)** ghoomo, aur seedhe **2 metre** chal do!"

Zafar ne check kiya: 2 cos 60° = 2(1/2) = 1 (East) aur 2 sin 60° = 2(√3/2) = √3 (North) — boat theek wahi (1, √3) par pahunchi!
Yahi radar tareeka **z = r(cos θ + i sin θ)** — **Polar Form** — kehlata hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Polar form** | z = r(cos θ + i sin θ), jahan r ≥ 0 aur θ angle hai | 1 + i√3 = 2(cos π/3 + i sin π/3) |
| **Modulus (r)** | Origin se doori: r = mod(z) = √(x² + y²) ≥ 0 | 1 + i√3 ke liye r = 2 |
| **Argument (arg z)** | Positive real axis se OP tak ka angle θ (radians mein) | π/3, π/3 + 2π, ... |
| **Principal Argument (Arg z)** | Wo akela unique argument θ jo **−π < θ ≤ π** mein aata hai | −1 + i ke liye 3π/4; 1 − i ke liye −π/4 |
| **Reference acute angle (α)** | First quadrant ka chhota angle (0 < α < π/2) jahan tan α = abs(y/x) | −1 + i ke liye α = π/4 |

---

## Part A: Rectangular Se Polar Form — Derivation Aur 4-Quadrant Recipe

Argand plane par kisi non-zero complex number **z = x + iy** ko point **P(x, y)** se dikhao. Origin O se P ki doori **r = √(x² + y²) > 0** aur positive real axis se angle **θ** ho, to right-triangle trigonometry se:

> **x = r cos θ**    aur    **y = r sin θ**

Dono ko z = x + iy mein rakho:

> **z = r (cos θ + i sin θ)**   *(yahi Polar Form hai!)*

*(Note: z = 0 ka modulus r = 0 hota hai, par uska argument **undefined** hota hai!)*

### Principal Argument θ ∈ (−π, π] — 4-Quadrant Master Recipe!

Sabse badi galti tab hoti hai jab log har quadrant mein seedha tan θ = y/x laga dete hain. Isse bachne ke liye hamesha ye **3-step recipe** lagao:

1. **Step 1 (Modulus r):** r = √(x² + y²) nikalo.
2. **Step 2 (Reference acute angle α):** Sign bhool kar sirf **tan α = |y / x|** se acute angle **α ∈ (0, π/2)** nikalo.
3. **Step 3 (Quadrant se Principal Argument θ):** Point (x, y) ka quadrant dekho:

```
                         Imaginary axis (θ = +π/2)
                                  :
            Quadrant II           :          Quadrant I
             (x < 0, y > 0)       :           (x > 0, y > 0)
              θ = π − α           :            θ = +α
                                  :
    (θ = π) ----------------------+---------------------- (θ = 0) Real axis
                                  :
            Quadrant III          :          Quadrant IV
             (x < 0, y < 0)       :           (x > 0, y < 0)
            θ = −(π − α)          :            θ = −α
                                  :
                         (θ = −π/2)
```

> **Figure 3.1** – Principal Argument θ ∈ (−π, π] ka 4-quadrant naksha: Q I (+α), Q II (π − α), Q III (−(π − α) = α − π), Q IV (−α).

### Chaar Axes Par Principal Arguments (Seedha Yaad Rakho!)

| Point | Example | Modulus r | Principal Argument θ |
|---|---|---|---|
| **Positive Real axis** (+x) | z = 5 | 5 | **0** |
| **Positive Imag axis** (+iy) | z = 4i | 4 | **+π/2** |
| **Negative Real axis** (−x) | z = −3 | 3 | **+π**  *(−π nahi, kyunki (−π, π]!)* |
| **Negative Imag axis** (−iy) | z = −4i | 4 | **−π/2** |

---

## Part B: Worked Examples (Saare 4 Quadrants + Axes!)

### Example 1: Quadrant I — z = 1 + i√3

**z = 1 + i√3** ko polar form mein badlo.

**Hal:**
1. x = 1 > 0, y = √3 > 0 → **Quadrant I**.
2. r = √(1² + (√3)²) = √(1 + 3) = **2**.
3. tan α = |√3 / 1| = √3 ⟹ α = **π/3**.
4. Q I mein θ = +α = **π/3**.
Polar form: **z = 2 (cos(π/3) + i sin(π/3))**.

**Jaanch:** 2(1/2 + i√3/2) = 1 + i√3 ✅.

### Example 2: Quadrant II — z = −1 + i

**z = −1 + i** ko polar form mein badlo.

**Hal:**
1. x = −1 < 0, y = 1 > 0 → **Quadrant II**.
2. r = √((−1)² + 1²) = **√2**.
3. tan α = |1 / (−1)| = 1 ⟹ α = **π/4**.
4. Q II mein θ = π − α = π − π/4 = **3π/4**.
Polar form: **z = √2 (cos(3π/4) + i sin(3π/4))**.

**Jaanch:** √2(−1/√2 + i(1/√2)) = −1 + i ✅; 3π/4 ∈ (−π, π] ✅.

### Example 3: Quadrant III — z = −√3 − i

**z = −√3 − i** ko polar form mein badlo.

**Hal:**
1. x = −√3 < 0, y = −1 < 0 → **Quadrant III**.
2. r = √((−√3)² + (−1)²) = √(3 + 1) = **2**.
3. tan α = |−1 / (−√3)| = 1/√3 ⟹ α = **π/6**.
4. Q III mein θ = −(π − α) = −(π − π/6) = **−5π/6**.
Polar form: **z = 2 (cos(−5π/6) + i sin(−5π/6))**.

**Jaanch:** 2(−√3/2 + i(−1/2)) = −√3 − i ✅; −5π/6 ∈ (−π, π] ✅.

### Example 4: Quadrant IV — z = 1 − i

**z = 1 − i** ko polar form mein badlo.

**Hal:**
1. x = 1 > 0, y = −1 < 0 → **Quadrant IV**.
2. r = √(1² + (−1)²) = **√2**.
3. tan α = |−1 / 1| = 1 ⟹ α = **π/4**.
4. Q IV mein θ = −α = **−π/4**.
Polar form: **z = √2 (cos(−π/4) + i sin(−π/4))**.

**Jaanch:** √2(1/√2 + i(−1/√2)) = 1 − i ✅; −π/4 ∈ (−π, π] ✅.

### Example 5: Axes Par Points — z = −3 aur z = −4i

(i) **z = −3** aur (ii) **z = −4i** ko polar form mein likho.

**Hal:**
- (i) z = −3 + 0i negative real axis par hai: r = 3, θ = **π**.
  **z = 3 (cos π + i sin π)**.
- (ii) z = 0 − 4i negative imaginary axis par hai: r = 4, θ = **−π/2**.
  **z = 4 (cos(−π/2) + i sin(−π/2))**.

**Jaanch:** 3(−1 + 0i) = −3 ✅; 4(0 + i(−1)) = −4i ✅.

### Example 6: Ulta Sawaal — Polar se Rectangular (a + ib) Form

**z = 4 (cos(2π/3) + i sin(2π/3))** ko standard form a + ib mein badlo.

**Hal:**
cos(2π/3) = −1/2, sin(2π/3) = √3/2.
z = 4(−1/2 + i√3/2) = **−2 + 2√3 i**.

**Jaanch:** |−2 + 2√3 i| = √(4 + 12) = 4, Q II mein α = π/3 ⟹ θ = 2π/3 ✅.

---

## Aam galtiyan

1. **Q II ya Q III mein seedha θ = α ya −α likh dena:** Student z = −1 − i ke liye tan θ = (−1)/(−1) = +1 dekh kar θ = π/4 likh deta hai!
   - *Galat kyun:* π/4 Quadrant I ka angle hai, jabki (−1, −1) Quadrant III mein hai! Hamesha 4-quadrant chart dekho: Q III mein θ = −(π − π/4) = **−3π/4**.
2. **Modulus r ko negative likh dena:** Student z = −3 ko −3(cos 0 + i sin 0) likh deta hai!
   - *Galat kyun:* Polar form mein r = |z| **hamesha ≥ 0** hota hai; minus sign angle θ = π ke andar jaata hai: **3(cos π + i sin π)**.
3. **Principal argument (−π, π] ke bahar chala jaana:** Student Q IV ke 1 − i ka principal argument 7π/4 likh deta hai.
   - *Sahi soch:* 7π/4 > π hai! Principal argument ke liye clockwise jao: **−π/4** ∈ (−π, π].

---

## Quick Recap

- **Polar form:** **z = r(cos θ + i sin θ)**, jahan **r = √(x² + y²) ≥ 0**.
- **Principal Argument θ ∈ (−π, π]:**
  - Q I: +α,  Q II: π − α,  Q III: −(π − α),  Q IV: −α  *(jahan tan α = |y/x|)*.
- **Axes:** +real → 0, +imag → π/2, −real → π, −imag → −π/2.

---

## Practice Questions

1. Find the modulus and principal argument of each of the following complex numbers:
   (a) −1 − i√3    (b) −√3 + i    (c) 2 − 2i    (d) 5i

2. Convert each of the following into Polar Form:
   (a) −1 − i    (b) √3 + i    (c) −2    (d) i

3. Convert **z = −16 / (1 + i√3)** into Polar Form. (Hint: simplify to a + ib first!)

4. Convert **z = (1 + 2i) / (1 − 3i)** into Polar Form.

5. Convert the following polar forms into standard a + ib form:
   (a) 6 (cos(5π/6) + i sin(5π/6))
   (b) 2 (cos(−π/3) + i sin(−π/3))

6. If z₁ = 2(cos(π/4) + i sin(π/4)) and z₂ = 3(cos(π/6) + i sin(π/6)), multiply them using Compound Angle formulas (Chapter 3) to show that **z₁ z₂ = 6(cos(5π/12) + i sin(5π/12))**.

7. Find the modulus and principal argument of **z = sin(π/6) + i cos(π/6)**. (Be careful: cos comes first in polar form!)

8. Find the polar form of **z = 1 + cos(π/3) + i sin(π/3)**.

9. For which values of real number a does the complex number **z = a + i** have principal argument **3π/4**?

10. Find the principal argument of **z = (1 + i)³**.

11. What is the geometric relationship between the principal argument of z and the principal argument of its conjugate z̄ (when z is not on the negative real axis)? Check with z = 1 + i√3.

12. True or False? Give a one-line reason:
    (a) In polar form r(cos θ + i sin θ), r can be negative.
    (b) The principal argument of −5 is −π.
    (c) The principal argument of z = 0 is 0.
    (d) For z = −2 + 2i, the principal argument is 3π/4.

### Answers

1. (a) Q III: r = √(1 + 3) = **2**, α = π/3 ⟹ θ = −(π − π/3) = **−2π/3**.
   (b) Q II: r = √(3 + 1) = **2**, α = π/6 ⟹ θ = π − π/6 = **5π/6**.
   (c) Q IV: r = √(4 + 4) = **2√2**, α = π/4 ⟹ θ = **−π/4**.
   (d) +Imag axis: r = **5**, θ = **π/2**. Jaanch: sabhi θ ∈ (−π, π] ✅.

2. (a) Q III, r = √2, θ = −3π/4 ⟹ **√2(cos(−3π/4) + i sin(−3π/4))**.
   (b) Q I, r = 2, θ = π/6 ⟹ **2(cos(π/6) + i sin(π/6))**.
   (c) −Real axis, r = 2, θ = π ⟹ **2(cos π + i sin π)**.
   (d) +Imag axis, r = 1, θ = π/2 ⟹ **1(cos(π/2) + i sin(π/2))**.

3. Simplify: z = −16(1 − i√3) / (1 + 3) = −4(1 − i√3) = **−4 + 4√3 i** (Q II!).
   r = √(16 + 48) = √64 = **8**; tan α = √3 ⟹ α = π/3 ⟹ θ = π − π/3 = **2π/3**.
   Polar form: **8(cos(2π/3) + i sin(2π/3))**. Jaanch: 8(−1/2 + i√3/2) = −4 + 4√3 i ✅.

4. Simplify: z = (1 + 2i)(1 + 3i) / (1 + 9) = (−5 + 5i) / 10 = **−1/2 + (1/2)i** (Q II!).
   r = √(1/4 + 1/4) = **1/√2**; α = π/4 ⟹ θ = **3π/4**.
   Polar form: **(1/√2)(cos(3π/4) + i sin(3π/4))**. Jaanch: (1/√2)(−1/√2 + i/√2) = −1/2 + i/2 ✅.

5. (a) 6(−√3/2 + i(1/2)) = **−3√3 + 3i**.
   (b) 2(1/2 + i(−√3/2)) = **1 − i√3**.

6. z₁ z₂ = 6[(cos π/4 cos π/6 − sin π/4 sin π/6) + i(sin π/4 cos π/6 + cos π/4 sin π/6)]
   = 6[cos(π/4 + π/6) + i sin(π/4 + π/6)] = **6(cos(5π/12) + i sin(5π/12))**!
   *(Moduli multiply, arguments add!)* Jaanch: π/4 + π/6 = 5π/12 ✅.

7. sin(π/6) = 1/2 = cos(π/3), cos(π/6) = √3/2 = sin(π/3)!
   Isliye z = cos(π/3) + i sin(π/3) ⟹ **r = 1**, **θ = π/3**. Jaanch: (1/2)² + (√3/2)² = 1 ✅.

8. z = 1 + 1/2 + i√3/2 = **3/2 + (√3/2)i** (Q I).
   r = √(9/4 + 3/4) = √3; tan α = (√3/2)/(3/2) = 1/√3 ⟹ α = π/6 ⟹ θ = **π/6**.
   Polar form: **√3(cos(π/6) + i sin(π/6))**. Jaanch: √3(√3/2 + i/2) = 3/2 + i√3/2 ✅.

9. θ = 3π/4 Q II mein hai, jahan x < 0, y > 0 aur |y/x| = tan(π/4) = 1.
   Kyunki y = 1, x = **a = −1**. Jaanch: −1 + i ka Arg = 3π/4 ✅.

10. (1 + i)³ = 1 + 3i − 3 − i = **−2 + 2i** (Q II). α = π/4 ⟹ **θ = 3π/4**. Jaanch: 3 × (π/4) = 3π/4 ✅!

11. **Arg(z̄) = −Arg(z)** (kyunki z̄ real axis ke paar mirror reflection hai!).
    Jaanch: z = 1 + i√3 ka Arg = +π/3; z̄ = 1 − i√3 (Q IV) ka Arg = −π/3 ✅.

12. (a) ❌ False: r = |z| ≥ 0 hamesha.
    (b) ❌ False: principal argument (−π, π] mein hota hai (−π shamil nahi, +π shamil hai!), isliye Arg(−5) = **+π**.
    (c) ❌ False: z = 0 ka argument undefined hota hai.
    (d) ✅ True: Q II mein α = π/4 ⟹ π − π/4 = 3π/4.

---

Ab tum kisi bhi complex number ko polar form mein badalna aur uska exact principal argument nikaalna jaante ho.

**Agle topic mein:** wapas lautte hain Class 10 ke us adhoore sawaal par — **Quadratic Equations with Complex Roots (D < 0)**!
