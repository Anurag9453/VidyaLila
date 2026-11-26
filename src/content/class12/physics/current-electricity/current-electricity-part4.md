# Chapter: Current Electricity (Part 4)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Cells, EMF and Internal Resistance](current-electricity-part3.md)

---

## Bageeche ke Paani ke Pipes aur Closed Loops

**Ashish** apne Mama ke khet mein drip-irrigation ke pipes dekh raha tha. Ek T-junction par do pipes se 5 litre/min aur 3 litre/min paani aa raha tha, aur teesre pipe se theek 8 litre/min paani bahar ja raha tha! Mama ne kaha: "Beta, junction par paani na gayab hota hai na apne aap banta hai — jitna aaya utna hi bahar jayega!"

Physics ke complex electric circuits mein — jahan kai batteries aur resistors ek jaal (network) banate hain — wahan bhi bilkul aise hi do golden rules lagte hain: **Kirchhoff's Rules**! Aur inhi rules se banta hai resistance naapne ka sabse accurate setup: **Wheatstone Bridge**!

---

## Naye Shabd (New Words)

- **Junction (Node):** Circuit ka woh point jahan **teen ya usse zyada** conducting branches aakar milti hain.
- **Loop (Mesh):** Circuit ke andar koi bhi **bandh (closed) conducting path** jo ek point se shuru hokar wapas usi point par khatam ho.
- **Kirchhoff's Junction Rule (KCL):** Kisi bhi junction par aane wale currents ka sum, wahan se jaane wale currents ke sum ke barabar hota hai (Σ I = 0). Yeh **Conservation of Charge** par based hai!
- **Kirchhoff's Loop Rule (KVL):** Kisi bhi closed loop ke chaaron taraf sabhi potential changes (EMFs aur IR drops) ka algebraic sum **ZERO** hota hai (Σ ΔV = 0). Yeh **Conservation of Energy** par based hai!
- **Wheatstone Bridge:** Chaar resistors (P, Q, R, S) ka ek diamond-shaped network jismein beech mein ek **galvanometer (G)** laga hota hai; balance condition mein galvanometer se **zero current** behta hai!

---

## 1. Kirchhoff's First Rule (Junction Rule / KCL)

**Statement:** At any junction, the sum of currents entering the junction equals the sum of currents leaving the junction:

**Σ I_in = Σ I_out**

*Kyun?* Steady current mein kisi junction par charge jama (accumulate) nahi ho sakta — isliye jitna charge per second aata hai, utna hi bahar jaana padta hai (**Law of Conservation of Charge**).

---

## 2. Kirchhoff's Second Rule (Loop Rule / KVL)

**Statement:** Around any closed loop of a circuit, the algebraic sum of all changes in electric potential is **zero**:

**Σ ΔV = 0**

*Kyun?* Electrostatic potential sirf position par depend karta hai! Agar tum ek closed chakkar lagakar wapas starting point par aa jao, to net potential change (aur unit charge par net energy change) **zero** hona hi chahiye (**Law of Conservation of Energy**).

### Sign Convention (Loop mein Chalte Waqt — Kabhi Galti Nahi Hogi!):
Loop mein chalne ki koi bhi direction (clockwise ya anticlockwise) chun lo:
1. **Battery se guzarte waqt:**
   - Negative (−) se Positive (+) ki taraf jaao ⟹ potential badha ⟹ **+ε**
   - Positive (+) se Negative (−) ki taraf jaao ⟹ potential ghata ⟹ **−ε**
2. **Resistor R (current I) se guzarte waqt:**
   - Current ki **direction mein** chalo ⟹ potential ghata ⟹ **−I R**
   - Current ke **opposite direction mein** chalo ⟹ potential badha ⟹ **+I R**

---

## 3. Wheatstone Bridge aur Balance Condition

Chaar resistors **P, Q, R, S** ko ek diamond shape (A-B-C-D) mein joda jaata hai. A aur C ke beech battery, aur B aur D ke beech ek sensitive **galvanometer (G)** laga hota hai:

```
              B
            /   \
         P /     \ Q
          /   G   \
     A --*----O----*-- C
          \   :   /
         R \  :  / S
            \   /
              D
```

### Balanced Condition (I_g = 0):
Jab resistors ki values aisi hon ki B aur D ka potential **bilkul barabar (V_B = V_D)** ho jaaye, to galvanometer se **koi current nahi behta (I_g = 0)**!
- Tab branch AB aur BC mein **same current I₁** behta hai, aur branch AD aur DC mein **same current I₂** behta hai!
- Loop ABDA mein KVL (I_g = 0): −I₁ P + I₂ R = 0 ⟹ **I₁ P = I₂ R** ... (1)
- Loop BCDB mein KVL (I_g = 0): −I₁ Q + I₂ S = 0 ⟹ **I₁ Q = I₂ S** ... (2)
- Equation (1) ko (2) se divide karo (I₁ aur I₂ kat gaye!):

**P / Q = R / S**

**Super Power:** Jab P/Q = R/S ho, to beech wale resistor (galvanometer G) mein zero current hone ke karan hum **beech wali branch ko circuit se hata sakte hain** — aur network turant simple series-parallel ban jaata hai!

---

## Solved Examples

### Example 1: Kirchhoff's Junction Rule (KCL)
At a circuit junction, currents **I₁ = 5 A** and **I₂ = 3 A** enter the junction, while **I₃** and **I₄ = 2 A** leave the junction. Find **I₃**.

**Hal (Solution):**
- Σ I_in = Σ I_out ⟹ I₁ + I₂ = I₃ + I₄
- 5 + 3 = I₃ + 2 ⟹ 8 = I₃ + 2 ⟹ **I₃ = 6 A**.
- **Jaanch:** Entering = 5 + 3 = 8 A; Leaving = 6 + 2 = 8 A ✅.

### Example 2: Two-Loop Circuit using KVL
Two cells of EMFs **10 V** (with series resistance **2 Ω**) and **6 V** (with series resistance **2 Ω**) are connected in parallel across a common central resistor of **4 Ω** (positive terminals joined at top junction A, negative at bottom junction B). Find the current through the central **4 Ω** resistor.

**Hal (Solution):**
- Maan lo left battery (10 V) se upar ki taraf current **I₁** aur right battery (6 V) se upar ki taraf current **I₂** nikalta hai.
- Junction A par KCL: central 4 Ω resistor mein neeche ki taraf current = **I₁ + I₂**.
- **Left Loop (10 V → 2 Ω → 4 Ω):**
  +10 − 2 I₁ − 4(I₁ + I₂) = 0 ⟹ 10 − 6 I₁ − 4 I₂ = 0 ⟹ **3 I₁ + 2 I₂ = 5** ... (1)
- **Right Loop (6 V → 2 Ω → 4 Ω):**
  +6 − 2 I₂ − 4(I₁ + I₂) = 0 ⟹ 6 − 4 I₁ − 6 I₂ = 0 ⟹ **2 I₁ + 3 I₂ = 3** ... (2)
- (1) + (2) jodo: 5 I₁ + 5 I₂ = 8 ⟹ **I₁ + I₂ = 8 / 5 = 1.6 A**!
- *(Alag-alag check bhi kar lo: (1) − (2) ⟹ I₁ − I₂ = 2 ⟹ I₁ = 1.8 A, I₂ = −0.2 A! Minus sign ka matlab hai 6 V battery actually charge ho rahi hai — 0.2 A uske andar ja raha hai!)*
- **Jaanch:** Central 4 Ω par voltage = 1.6 × 4 = 6.4 V; Left branch: 10 − 2(1.8) = 6.4 V ✅; Right branch: 6 − 2(−0.2) = 6.4 V ✅.

### Example 3: Balanced Wheatstone Bridge
In a Wheatstone bridge, **P = 4 Ω**, **Q = 6 Ω**, and **R = 10 Ω**.
(a) What value of **S** will balance the bridge?
(b) When balanced, find the equivalent resistance between A and C (battery terminals).

**Hal (Solution):**
- (a) Balance condition: P / Q = R / S ⟹ 4 / 6 = 10 / S ⟹ **S = (10 × 6) / 4 = 15 Ω**.
- (b) Balanced bridge mein beech ka galvanometer hata do!
  - Top branch (P + Q) = 4 + 6 = **10 Ω**.
  - Bottom branch (R + S) = 10 + 15 = **25 Ω**.
  - Dono parallel mein: R_AC = (10 × 25) / (10 + 25) = 250 / 35 = **50 / 7 Ω ≈ 7.14 Ω**.
- **Jaanch:** 4/6 = 2/3, 10/15 = 2/3 ✅; (10×25)/35 = 50/7 Ω ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Loop mein current ke ulte chalte waqt bhi −I R likh dena:**
   - *Galat:* Har resistor ke aage aankh bandh karke −I R laga dena.
   - *Sahi:* Current ki direction mein chalo to **−I R**, aur current ke **opposite** chalo to **+I R**!
2. **Unbalanced Wheatstone bridge mein bhi beech ka resistor hata dena:**
   - *Galat:* P/Q ≠ R/S hone par bhi galvanometer branch delete kar dena.
   - *Sahi:* Beech wali branch **SIRF tab** hatayi ja sakti hai jab **P/Q = R/S** (exact balance) ho! Warna poora Kirchhoff KVL lagana padega!
3. **KCL aur KVL ke conservation laws ko aapas mein badal dena:**
   - *Galat:* Junction rule ko energy conservation bol dena.
   - *Sahi:* **Junction Rule (KCL) = Charge Conservation**; **Loop Rule (KVL) = Energy Conservation**!

---

## Quick Recap

| Rule / Circuit | Equation | Physical Law / Condition |
|---|---|---|
| Kirchhoff's Junction Rule (KCL) | Σ I_in = Σ I_out | Conservation of **Charge** |
| Kirchhoff's Loop Rule (KVL) | Σ ΔV = 0 around closed loop | Conservation of **Energy** |
| KVL Sign Convention | − to + battery: +ε; along I: −IR; against I: +IR | Pick any loop direction consistently |
| Balanced Wheatstone Bridge | P / Q = R / S | V_B = V_D ⟹ I_g = 0 (middle branch removable!) |

---

## Practice Questions

1. Name the fundamental conservation laws on which (a) Kirchhoff's first rule, and (b) Kirchhoff's second rule are based.
2. At a junction, three currents 4 A, 2.5 A, and 1.5 A enter, while two currents 3 A and I leave. Find I.
3. In a single closed loop, a 12 V battery and a 4 V battery are connected in opposition with a 2 Ω and a 6 Ω resistor in series. Using Kirchhoff's loop rule, find the current in the loop.
4. State the balance condition of a Wheatstone bridge. What happens to the balance point if the battery and the galvanometer are interchanged?
5. Four resistors of 5 Ω, 10 Ω, 15 Ω, and 30 Ω form a Wheatstone bridge in order P, Q, R, S, with a 20 Ω galvanometer across BD. Is the bridge balanced? Find the equivalent resistance across AC.
6. In Example 2's style, a 12 V battery (internal resistance 1 Ω) and a 6 V battery (internal resistance 1 Ω) are connected in parallel (positive to positive) across an external resistor of 2 Ω. Using Kirchhoff's rules, find the current in the 2 Ω resistor.
7. Five identical resistors of 10 Ω each are connected in a Wheatstone bridge configuration (four on the outer arms P, Q, R, S and the fifth across the middle diagonal BD). Find the equivalent resistance between A and C.
8. State whether True or False: If a solved current comes out negative while applying Kirchhoff's rules, it means our equations are wrong.
9. In a balanced Wheatstone bridge, P = 12 Ω, Q = 18 Ω, and S = 27 Ω. Find R.
10. A closed loop ABCDA contains a 20 V battery (positive at A), a 3 Ω resistor in AB, a 5 Ω resistor in BC, and a 2 Ω resistor in CD (no battery in other arms). Find the current and the potential difference V_B − V_C.

### Answers

1. (a) First rule (Junction rule): **Law of Conservation of Charge**.
   (b) Second rule (Loop rule): **Law of Conservation of Energy**.

2. Σ I_in = 4 + 2.5 + 1.5 = 8.0 A = 3 + I ⟹ **I = 5.0 A**.
   Jaanch: 3 + 5 = 8 A ✅.

3. Loop mein 12 V ke + se nikal kar chalo: +12 − 2I − 6I − 4 = 0 ⟹ 8 − 8I = 0 ⟹ **I = 1.0 A**.
   Jaanch: Net EMF = 12 − 4 = 8 V; R_total = 2 + 6 = 8 Ω ⟹ I = 1.0 A ✅.

4. Balance condition: **P / Q = R / S**. Agar battery aur galvanometer ko aapas mein **interchange** kar dein, tab bhi balance condition (P/R = Q/S ⟺ P/Q = R/S) bilkul **same rehti hai** (bridge balanced hi rehta hai)!

5. Check: P/Q = 5/10 = 1/2; R/S = 15/30 = 1/2 ⟹ **Haan, bridge balanced hai!** (20 Ω galvanometer ko hata do!)
   Top branch = 5 + 10 = 15 Ω; Bottom branch = 15 + 30 = 45 Ω.
   R_AC = (15 × 45) / (15 + 45) = 675 / 60 = **11.25 Ω**.
   Jaanch: 675 / 60 = 45 / 4 = 11.25 Ω ✅.

6. Left loop: 12 − I₁ − 2(I₁ + I₂) = 0 ⟹ 3I₁ + 2I₂ = 12 ... (1)
   Right loop: 6 − I₂ − 2(I₁ + I₂) = 0 ⟹ 2I₁ + 3I₂ = 6 ... (2)
   Jodo (1) + (2): 5(I₁ + I₂) = 18 ⟹ **I₁ + I₂ = 18/5 = 3.6 A** (2 Ω resistor mein current!).
   Jaanch: V_2Ω = 3.6 × 2 = 7.2 V; I₁ = (12 − 7.2)/1 = 4.8 A, I₂ = (6 − 7.2)/1 = −1.2 A ⟹ I₁ + I₂ = 3.6 A ✅.

7. P/Q = 10/10 = 1 aur R/S = 10/10 = 1 ⟹ **balanced**! Beech ka 10 Ω hata do!
   Top branch = 10 + 10 = 20 Ω; Bottom branch = 10 + 10 = 20 Ω.
   R_AC = (20 × 20) / (20 + 20) = **10 Ω**.
   Jaanch: 20 || 20 = 10 Ω ✅.

8. **False ❌.** Negative sign ka sirf itna matlab hai ki us branch mein actual current hamari maani hui arrow direction ke **opposite** beh raha hai — magnitude bilkul sahi hota hai!

9. P/Q = R/S ⟹ 12/18 = R/27 ⟹ 2/3 = R/27 ⟹ **R = 18 Ω**.
   Jaanch: 12/18 = 2/3; 18/27 = 2/3 ✅.

10. Loop KVL: +20 − 3I − 5I − 2I = 0 ⟹ 10I = 20 ⟹ **I = 2.0 A**.
    Potential drop across 5 Ω (B se C): **V_B − V_C = I × 5 = 2.0 × 5 = 10 V**.
    Jaanch: 2(3 + 5 + 2) = 20 V ✅.

---

Ab tum Kirchhoff's Rules aur Wheatstone Bridge ka har pechida circuit solve kar sakte ho!

**Agle topic mein:** Wheatstone Bridge ka real lab avataar **Meter Bridge**, aur bina current khiche accurate EMF naapne wala **Potentiometer** seekhenge!
