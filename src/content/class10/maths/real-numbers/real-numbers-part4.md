# Chapter: Real Numbers (Part 4)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [real-numbers-part3.md](real-numbers-part3.md) se aage chalti hai.** (Topic 1 [real-numbers.md](real-numbers.md) mein hai. Class 9 ka irrational numbers wala chapter: [number-systems-part3.md](../../../class9/maths/number-systems/number-systems-part3.md).)
> **Topics covered in this file:**
> 4. Irrational Numbers Ke Proof: Root P Kabhi Poora Nahi

---

# Topic 4: Irrational Numbers Ke Proof: Root P Kabhi Poora Nahi

Topic 2 mein humne dekha tha ki har composite number ka ek **hi** prime fingerprint hota hai (Fundamental Theorem of Arithmetic), aur Topic 3 mein usi fingerprint se HCF aur LCM nikale. Ab wahi fingerprint ek bilkul nayi jagah kaam aayega: **irrational numbers ke proof** mein.

Class 9 mein tumne [√2 ke irrational hone ka proof](../../../class9/maths/number-systems/number-systems-part3.md) dekha tha, aur wahan ek line likhi thi: "isi tarah ka proof √3, √5 waghera ke liye bhi chalta hai." Us line ko poora karne ka waqt ab aa gaya hai. Is topic mein hum ek chhota sa lemma **saabit** karenge, phir uske sahare √3, √7, √11 aur har prime ka root irrational dikhayenge, aur ye bhi dekhenge ki 4 + √3 ya √11 + √13 jaise numbers kab irrational hote hain.

---

## Shashank ki khidki

Shashank ek carpenter hai. Aaj usse ek square khidki ka frame banana hai jiski har side 1 metre hai, aur frame ko majboot rakhne ke liye ek tirchhi patti (diagonal brace) lagani hai. Pythagoras se brace ki lambai nikli **√2 metre**.

Shashank ke helper ne mazaak mein kaha, "Bhaiya, ye √2 to kabhi khatam hi nahi hota. Thoda sa fraction mein likh do na, wahi naap lenge." Shashank ne purani copy kholi aur dikhaya ki log kya kya fraction try karte aaye hain:

- 41/29: iska square 1681/841 hai, jabki 2 ka matlab 1682/841 hota. Thoda kam.
- 99/70: iska square 9801/4900 hai, jabki 2 ka matlab 9800/4900 hota. Thoda zyada.

Dono fraction √2 ke **bahut paas** hain, par theek nahi.

```
1.4136                                                    1.4144
---------------+---------------------------------+-----+--------->
             41/29                              √2   99/70
```

> **Figure 4.1** – 1.4136 se 1.4144 tak number line ka bahut zoomed hissa: √2 ko 41/29 neeche se aur 99/70 upar se dabaa rahe hain, par dono √2 ke barabar nahi hain.

Helper ne agli baat chhedi: "Kal ek aur kaam hai, ek dabba (1 metre ka cube) jiska andar ka diagonal √3 metre aata hai. Parson 1 metre × 2 metre ki khidki hai, uska diagonal √5. To kya har baar naya proof sochna padega?"

Shashank muskuraya: "Nahi. Ek hi **idea** sab ke liye kaam karta hai. Bas us idea ke andar ek chhoti si cheez saabit karni padti hai." Wahi chhoti cheez aaj ka pehla kaam hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Prime-divisibility lemma** | Is topic ka madadgaar result (lemma ka matlab Topic 1 mein dekha): prime p, a² ko bhaage to a ko bhi bhaagta hai | Part B |
| **Counter-example** | Ek aisa example jo kisi daave ko galat saabit kar de | "Har number ka square 4 se bhaag hota hai" ka counter-example: 3² = 9 |
| **Isolate karna** | Equation mein jis cheez par sawaal hai (jaise root) use akele ek taraf le aana | 3 + 2√7 = s se 2√7 = s − 3 |

---

## Part A: Class 9 ka √2 ka proof, aur ek chhota sa sawaal

Class 9 ke proof ko 6 lines mein yaad kar lete hain:

1. Maan lo √2 = p/q, jahan p aur q ka **koi common factor 1 ke alawa nahi hai** (fraction sabse chhote roop mein).
2. Square karo: p² = 2q².
3. To p² even hai, isliye p even hai. Likho p = 2m.
4. Rakho: 4m² = 2q², yaani q² = 2m².
5. To q² even hai, isliye q bhi even hai.
6. p aur q dono even, yaani 2 common factor. Ye step 1 se **takrata** hai. Isliye √2 rational nahi.

**"Sabse chhote roop" wali shart kyun?** Agar ye shart na hoti, to "dono 2 se bhaag hote hain" mein koi problem hi nahi hoti. Jaise 6/3 = 2 mein 3 common hai, par 2 phir bhi rational hai. Contradiction tabhi milti hai jab shuru mein hi common factor hata diya gaya ho.

Ab ek baat dhyan se dekho. Step 3 mein humne likha tha "p² even hai, isliye p even hai". Class 9 mein iska kaaran ye tha ki odd × odd = odd. Ye kaaran **sirf 2 ke liye** chalta hai (even aur odd ka khel). Par √3 ke liye step ye hoga: "p² 3 se bhaag hota hai, isliye p bhi 3 se bhaag hota hai." Kya ye sach hai? Aur **kyun**? Ye hi wo chhoti cheez hai jo Shashank ne kahi thi. Pehle ise saabit karte hain.

---

## Part B: Prime-divisibility lemma (ek chhota lemma, bada kaam)

> **Prime-divisibility lemma:** Agar p ek **prime** hai aur p, a² ko bhaag karta hai, to p, a ko bhi bhaag karta hai.

### Proof (Fundamental Theorem se)

Maan lo a ek positive integer hai. (a = 1 par kuch dekhna nahi: 1² = 1 ko koi prime bhaag nahi karta.)

**Kadam 1:** Fundamental Theorem kehta hai ki a ko primes ke product ke roop mein likh sakte hain: a = p₁ × p₂ × ... × pₖ (primes repeat ho sakte hain, jaise 2 × 2 × 3).

**Kadam 2:** a² = a × a, to a² mein **wahi primes, har ek do guna baar** aate hain: p₁, p₁, p₂, p₂, ..., pₖ, pₖ.

**Kadam 3:** Maan lo prime p, a² ko bhaag karta hai: a² = p × m. m ko bhi primes mein tod lo (agar m = 1 hai to kuch nahi). To "p aur m ke primes" milkar a² ka ek prime-factorisation ban gaya.

**Kadam 4:** Fundamental Theorem ka matlab hai ki a² ko primes mein todne ka **sirf ek hi tareeka** hai (order chhod kar). Kadam 2 wala tareeka aur Kadam 3 wala tareeka ek hi hain. Isliye p us list mein hona hi chahiye: p = pᵢ kisi i ke liye.

**Kadam 5:** Yaani p, a ka ek prime factor hai, to **p, a ko bhaag karta hai.** Saabit!

Bas yahi poora lemma hai. Dekho, isme asli kaam Topic 2 ke "ek hi fingerprint" ne kiya.

```
          154
         /   \
        2     77
             /  \
            7    11
```

> **Figure 4.2** – 154 ka prime tree: 154 = 2 × 77, 77 = 7 × 11 (aage Example 1 mein kaam aayega).

### Example 1: Lemma ko ek number par dekho

a = 154 lo. Figure 4.2 se **154 = 2 × 7 × 11**.

Ab 154² = 23716. Iska fingerprint: **2 × 2 × 7 × 7 × 11 × 11** (har prime do baar).

- Kya 7, 23716 ko bhaag karta hai? Fingerprint mein 7 hai, to haan: 23716 ÷ 7 = 3388. Aur lemma kehta hai 7, 154 ko bhi bhaag karna chahiye: 154 ÷ 7 = 22. Haan.
- Kya 3, 23716 ko bhaag karta hai? Fingerprint mein 3 nahi hai, to **nahi**. Aur 3, 154 ko bhi nahi bhaagta.

**Jaanch:** 23716 ÷ 7 = 3388 (poora), 154 ÷ 7 = 22 (poora); 23716 ÷ 3 = 7905.33... (poora nahi), 154 ÷ 3 = 51.33... (poora nahi) ✅

### Example 2: 11 divides n² hai to 121 bhi divides n² hai

**Sawaal:** Agar prime 11, n² ko bhaag karta hai, to dikhao ki 121 bhi n² ko bhaag karta hai.

**Hal:** Lemma se 11, n ko bhaag karta hai. To n = 11k (k koi integer). Tab n² = 121k², yaani 121 × k². Isliye 121, n² ko bhaag karta hai.

**Jaanch:** n = 198 = 11 × 18 lo. n² = 39204 aur 39204 ÷ 121 = 324 (poora) ✅

### Lemma sirf prime ke liye kyun?

Prime ki jagah koi composite number lete hain to kya hota hai? Ek **counter-example**: 4, 36 ko bhaag karta hai (36 ÷ 4 = 9), par 4, 6 ko **nahi** bhaagta (6 ÷ 4 = 1.5). Yahan 36 = 6². Kaaran: 6 = 2 × 3 mein 2 sirf ek baar hai, par 36 mein 2 do baar aa gaya (6 ko 6 se guna karne se). 4 = 2 × 2 ko do 2 chahiye the, wo 6² se mil gaye, par 6 se nahi mile. Prime ke liye aisa nahi hota: ek prime ko "ek hi baar" chahiye, aur a² mein jo prime aaya, wo a mein pehle se tha.

---

## Part C: Ab √3, √7, √11 aur har prime p

### Example 3: √3 irrational hai (model proof)

**Maan lo** √3 = p/q, p aur q ka koi common factor 1 ke alawa nahi.

1. Square: 3 = p²/q², yaani **p² = 3q²**.
2. To 3, p² ko bhaag karta hai. 3 prime hai, to **lemma** se 3, p ko bhaag karta hai. Likho p = 3m.
3. Rakho: 9m² = 3q², yaani **q² = 3m²**.
4. To 3, q² ko bhaag karta hai, to **lemma** se 3, q ko bhaag karta hai.
5. 3 dono p aur q ko bhaag karta hai, par shuru mein koi common factor nahi tha. **Contradiction.**

Isliye √3 irrational hai.

**Jaanch:** 97/56 try karo: 97² = 9409, aur 3 × 56² = 3 × 3136 = 9408. Dono **ek se alag** hain (9409 ≠ 9408), to p² = 3q² nahi bana ✅ Aur ye 1 ka farak kabhi 0 nahi hoga, yahi proof ka matlab hai.

√5 ke liye bhi bilkul yahi proof hai (3 ki jagah 5): p² = 5q², 5 divides p, p = 5m, q² = 5m², 5 divides q. Jaanch: 161² = 25921, 5 × 72² = 25920, 1 ka farak ✅

### Example 4: √7 irrational hai (poora proof)

**Maan lo** √7 = p/q, p, q positive integers, p aur q ka koi common factor 1 ke alawa nahi.

1. Square karo: 7 = p²/q², yaani **p² = 7q²**.
2. p² = 7 × q² likha hai, to 7, p² ko bhaag karta hai.
3. 7 prime hai, to **prime-divisibility lemma** se 7, p ko bhaag karta hai. Likho **p = 7m**.
4. Rakho: (7m)² = 7q², yaani 49m² = 7q², yaani **q² = 7m²**.
5. To 7, q² ko bhaag karta hai. Phir lemma se **7, q ko bhaag karta hai**.
6. 7 dono p aur q ka common factor hai. Par shuru mein hamne maana tha ki 1 ke alawa koi common factor nahi. Ye **contradiction** hai.

Isliye √7 = p/q ho hi nahi sakta. **√7 irrational hai.**

```
Maan lo: √7 = p/q, common factor nahi
                  ↓
           square: p² = 7q²
                  ↓
        7 divides p²  ⇒  7 divides p
        (lemma, 7 prime hai)  ⇒  p = 7m
                  ↓
        49m² = 7q²  ⇒  q² = 7m²
                  ↓
        7 divides q²  ⇒  7 divides q
                  ↓
   7 dono ka common factor: shuru ki baat se takraav
                  ↓
        Contradiction: √7 rational nahi hai
```

> **Figure 4.3** – √7 ke proof ka raasta: har kadam ke neeche agla kadam, aur aakhir mein contradiction.

**Jaanch:** 127/48 try karo: 127² = 16129, 7 × 48² = 7 × 2304 = 16128. Phir 1 ka farak: 16129 ≠ 16128 ✅

### Example 5: √11 irrational hai

**Maan lo** √11 = p/q, p aur q ka koi common factor 1 ke alawa nahi.

1. Square: **p² = 11q²**.
2. 11 divides p², 11 prime hai, lemma se 11 divides p. Likho p = 11m.
3. 121m² = 11q², yaani **q² = 11m²**.
4. 11 divides q², lemma se 11 divides q.
5. 11 dono ka common factor, contradiction. **√11 irrational hai.**

**Jaanch:** 199² = 39601 aur 11 × 60² = 11 × 3600 = 39600. 1 ka farak, barabar nahi ✅

### Sab primes ke liye ek saath

Dhyan se dekho: Example 3, 4, 5 mein **jaadu 3, 7 ya 11 ka nahi tha**. Sirf do cheezein lagi: (i) p² = (prime) × q², (ii) lemma, jo har prime ke liye sach hai. Isliye:

> **Har prime number p ke liye √p irrational hai.** (√2, √3, √5, √7, √11, √13, √17, ... sab.)

**Jaanch** √13 ke liye: 649² = 421201 aur 13 × 180² = 13 × 32400 = 421200. Phir 1 ka farak ✅

Aur Class 9 ka √2 proof bhi isi ka ek hissa hai: wahan "2 divides p² to 2 divides p" ko even/odd se saabit kiya tha. Lemma wahi baat har prime ke liye kehta hai.

---

## Part D: √4 aur √9 irrational kyun nahi? Aur baaki kaun irrational hain?

Agar "har prime ka root irrational" sach hai, to ye sawaal natural hai: 4 aur 9 par proof kya karta hai? Chalo wahi method √4 par lagate hain.

**Maan lo** √4 = p/q, koi common factor 1 ke alawa nahi. To p² = 4q². Yahan 4 prime **nahi** hai. Phir bhi 2 prime hai, 2 divides p², to 2 divides p. Likho p = 2m. Rakho: 4m² = 4q², yaani **q² = m²**, yaani q = m.

Ab p/q = 2m/m = **2**. Ye to ek poora rational number nikla, aur koi contradiction nahi. (Lowest terms mein m = q = 1, yaani 2/1.) Proof ka aakhri step "q bhi 2 se bhaag hota hai" yahan banta hi nahi, kyunki q² = m² se hume q = m mila, jo 2 se bhaag hone ka koi sabot nahi deta. √9 mein bhi yahi hota hai: p = 3m, q = m, aur p/q = 3.

**Seekh:** Jab n perfect square hota hai, to √n ek poora number hota hai (rational), aur proof kahin na kahin toot jata hai. Ye proof ki kamzori nahi, ye sach ka sabot hai.

### Extra: koi bhi non-square number ka root irrational

Class 9 mein bataya gaya tha ki √n irrational hota hai jab n perfect square nahi hota, par uska kaaran nahi diya gaya tha. Ab humare paas Fundamental Theorem hai, to ye "kyun" bhi dikhta hai. Ye extra hai, par bahut khoobsurat hai.

**Kaam ki baat:** a ko primes mein todo, a = 2ˣ × 3ʸ × 5ᶻ ..., to a² = 2²ˣ × 3²ʸ × 5²ᶻ ... mein **har prime ka exponent even** hota hai (doguna).

**Proof:** Maan lo n perfect square nahi hai aur √n = p/q hai. To **p² = n × q²**.

- Left side p² mein har prime **even** baar aata hai.
- n perfect square nahi hai, to n ke fingerprint mein kam se kam ek prime t **odd** baar aata hai. (Agar sabhi exponent even hote, to n = (kuch)² ban jata, perfect square hota.) q² mein t even baar aata hai. To n × q² mein t **odd + even = odd** baar aata hai.
- Ek hi number p² = n × q² ke do prime-fingerprint nahi ho sakte (Fundamental Theorem). Par ek mein t even baar hai, doosre mein odd baar. **Contradiction.**

Isliye √n irrational hai har aise n ke liye jo perfect square nahi hai. (Is proof ko "lowest terms" ki zaroorat bhi nahi padi.)

| n | n ka fingerprint | Kaun sa prime odd baar? | √n |
|---|---|---|---|
| 6 | 2 × 3 | 2 aur 3, dono ek ek baar | irrational |
| 12 | 2² × 3 | 3 (ek baar) | irrational (=2√3) |
| 72 | 2³ × 3² | 2 (teen baar) | irrational (=6√2) |
| 143 | 11 × 13 | 11 aur 13 | irrational |
| 144 | 2⁴ × 3² | koi nahi | 12, rational |
| 225 | 3² × 5² | koi nahi | 15, rational |

**Jaanch:** 144 = 12 × 12 ✅ aur 225 = 15 × 15 ✅ (jo bilkul perfect square nikle, unhi mein sab exponent even the).

---

## Part E: Rational aur irrational ko jodna, ghatana, guna aur bhaag karna

Class 9 mein tumne dekha tha ki 3 + √5 irrational hota hai. Wahan uska chhota sa kaaran diya gaya tha. Ab usse ek baar, saaf saaf, poore result ke roop mein saabit karte hain, kyunki aage sab examples isi par tike hain.

> **Result:** Maan lo r ek rational number hai aur x ek irrational number hai. To r + x, r − x, x − r irrational hain. Agar r ≠ 0 bhi hai, to r × x, x ÷ r aur r ÷ x bhi irrational hain.

**Proof (ek baar, sab ke liye):** Dhyan rakho: do rational numbers ka jod, ghatav, guna (aur non-zero se bhaag) hamesha rational hota hai.

- Maan lo r + x = s rational hai. To x = s − r hota, jo rational hai. Par x irrational tha. **Contradiction.** Ghatane ke liye bhi yahi.
- Maan lo r × x = s rational hai (r ≠ 0). To x = s ÷ r rational hota. Contradiction.
- Maan lo r ÷ x = s (r ≠ 0, to s ≠ 0). To x = r ÷ s rational hota. Contradiction. ∎

**Tareeka yaad rakho:** "Maan lo rational hai (s). Root ko **isolate** karo. Dusri taraf rational aa gaya. Par root to irrational hai. Contradiction."

### Example 6: 3 + 2√7 irrational hai

Maan lo 3 + 2√7 = s, s rational. **Isolate** karo: 2√7 = s − 3, yaani √7 = (s − 3) ÷ 2. Ye rational hai (rationals ka ghatav aur bhaag). Par √7 irrational hai (Example 4). **Contradiction.** Isliye 3 + 2√7 irrational hai.

**Jaanch:** s = 8.29 maan kar dekho. To √7 = (8.29 − 3) ÷ 2 = 2.645, aur 2.645² = 6.996025 ≠ 7. Maanne se sahi √7 nahi mil raha, yaani contradiction asli hai ✅

### Example 7: 5 − √11 irrational hai

Maan lo 5 − √11 = s. Isolate: √11 = 5 − s, rational. Par √11 irrational hai (Example 5). **Contradiction.** Isliye 5 − √11 irrational hai.

**Jaanch:** s = 1.68 lo. To √11 = 5 − 1.68 = 3.32, aur 3.32² = 11.0224 ≠ 11 ✅

### Example 8: 6/√13 irrational hai

Maan lo 6/√13 = s. 6 ≠ 0, to s ≠ 0. Cross multiply: 6 = s√13, yaani √13 = 6 ÷ s, rational. Par √13 irrational hai (Part C). **Contradiction.**

Doosra tareeka: **rationalise** karo: 6/√13 = 6√13/13 = (6/13) × √13. Ye "non-zero rational × irrational" hai, irrational.

**Jaanch:** 6 ÷ 3.60555... = 1.66410 aur (6/13) × 3.60555... = 1.66410 ✅

### Example 9: 4√5 − 3 irrational hai

Maan lo 4√5 − 3 = s. Isolate: 4√5 = s + 3, yaani √5 = (s + 3) ÷ 4, rational. Par √5 irrational hai (Example 3 mein √5 ka bhi proof dikhaya tha). **Contradiction.**

**Jaanch:** s = 5.94 lo. √5 = (5.94 + 3) ÷ 4 = 2.235, aur 2.235² = 4.995225 ≠ 5 ✅

### Example 10: 1/√7

Maan lo 1/√7 = s. s ≠ 0. To √7 = 1 ÷ s, rational. Contradiction. Ya seedha: 1/√7 = √7/7 = (1/7) × √7, irrational.

**Jaanch:** 1 ÷ 2.64575 = 0.37796 aur 2.64575 ÷ 7 = 0.37796 ✅

### Example 11: (3 + √11)(3 − √11)

Pehle dono factor irrational hain (Example 6 jaisa proof). Ab guna karo (Class 9 wali identity (a + b)(a − b) = a² − b²): 3² − (√11)² = 9 − 11 = **−2**. Ye rational hai!

**Jaanch:** (3 + 3.31662) × (3 − 3.31662) = 6.31662 × (−0.31662) = −2.0000 ✅

Isse ek **honest seekh** milti hai: do irrationals ka guna rational ho sakta hai. Part F mein jodne ke baare mein bhi yahi dekhenge.

---

## Part F: Do roots ka jod, aur do irrationals ka jod

### Example 12: √11 + √13 irrational hai

Yahan **dono** numbers irrational hain, to Part E ka result seedha nahi lagta. Ek aur kadam chahiye.

Maan lo √11 + √13 = s. Dono positive hain, to s > 0 aur rational hai.

1. Square karo: (√11 + √13)² = s², yaani 11 + 13 + 2√143 = s². (√11 × √13 = √143.)
2. Isolate: 24 + 2√143 = s², to **√143 = (s² − 24) ÷ 2**.
3. s rational hai, to s² rational, to (s² − 24) ÷ 2 rational. Yaani √143 rational.
4. Par 143 = 11 × 13 perfect square nahi hai (Part D table: 11 aur 13 ek ek baar aate hain), to **√143 irrational hai**. **Contradiction.**

Isliye √11 + √13 irrational hai.

**Jaanch (algebra ki):** √11 + √13 = 6.92218... s² = 47.91652... (s² − 24) ÷ 2 = 11.95826... aur √143 = 11.95826... ✅ (kadam 2 ka formula theek hai.)

### Do irrationals ka jod: kabhi rational, kabhi irrational

| Jod | Nateeja | Rational ya irrational |
|---|---|---|
| (6 + √21) + (3 − √21) | 9 | rational |
| √21 + (−√21) | 0 | rational |
| √21 + √21 | 2√21 | irrational |
| √11 + √13 | Example 12 | irrational |

Isliye "do irrationals ka jod hamesha irrational hota hai" kehna **galat** hai. Har baar proof se dekhna padta hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "√n tabhi irrational hai jab n prime ho"**

Ye sirf aadhi sach hai. Prime n ke liye √n irrational **zaroor** hai, par composite n ke liye bhi ho sakta hai.

- **√10:** 10 = 2 × 5, prime hain, par 10 khud prime nahi. Phir bhi 2 ek baar aata hai. Part D ke argument se p² = 10q² mein 2 left mein even baar, right mein odd baar aata hai. Contradiction. **√10 irrational hai.**
- **√45:** 45 = 3² × 5. 5 ek baar (odd). To √45 irrational hai. Seedha bhi: √45 = 3√5, rational × irrational.
- Aur kab nahi? **√196:** 196 = 2² × 7², sab exponent even, to √196 = 14, rational.

Sahi rule: **n perfect square nahi hai to √n irrational, perfect square hai to rational.** Prime hona zaroori nahi.

**Galti 2: "Do irrationals ka jod hamesha irrational hota hai"**

Ek **counter-example** hi kaafi hai.

- √21 irrational hai (21 = 3 × 7, perfect square nahi).
- 3 − √21 bhi irrational hai (Part E).
- Par jod: √21 + (3 − √21) = **3**, jo rational hai.

Kabhi jod irrational bhi nikalta hai (√21 + √21 = 2√21). Matlab sirf "irrational + irrational" dekh kar kuch nahi kaha ja sakta, har baar proof ya simplify karke dekhna padta hai. Jo jod **hamesha** irrational hota hai wo hai **rational + irrational** (Part E).

---

## Quick Recap

- Class 9 ka √2 proof: √2 = p/q (lowest terms) maan kar p aur q dono even nikalte hain, jo contradiction hai. "Lowest terms" wali shart isi contradiction ke liye zaroori hai.
- **Prime-divisibility lemma:** agar prime p, a² ko bhaag karta hai, to p, a ko bhi bhaag karta hai. Proof: a² mein a ka har prime do guna baar aata hai, aur Fundamental Theorem ke mutabik fingerprint ek hi hota hai.
- Lemma sirf **prime** ke liye hai. 4, 36 ko bhaagta hai par 6 ko nahi bhaagta.
- **√3, √5, √7, √11, √13 aur har prime p ka root irrational** hai: p² = (prime) × q², lemma bar bar lagao, p aur q dono mein common factor milta hai.
- **√4 aur √9** irrational nahi: proof ka aakhri step toot jata hai, kyunki q = m aa jata hai.
- **n perfect square nahi hai to √n irrational** (Fundamental Theorem: kisi prime ka exponent odd hota hai). Prime hona zaroori nahi: √6, √10, √12, √143 sab irrational.
- **Rational ± irrational, rational (non-zero) × irrational, irrational ÷ rational (non-zero)** sab irrational. Tareeka: rational maan lo, isolate karo, contradiction.
- **Do irrationals ka jod (ya guna) rational bhi ho sakta hai:** (6 + √21) + (3 − √21) = 9, (3 + √11)(3 − √11) = −2. √11 + √13 irrational hai, par proof se dekhna padta hai.

---

## Practice Questions

1. Let n = 3 × 29 × 37 = 3219. Which of the numbers 3, 29, 37, 71, 87 divide n²? Give your reason using prime factorisation.

2. Prove that √17 is irrational. State clearly where the "no common factor" assumption is used.

3. A student wants to prove that √361 is irrational and writes: "361 divides p², so 361 divides p." Use p = 57 to show that this statement is false. What is the value of √361, and what happens to the proof?

4. Prove that 7 + 3√23 is irrational.

5. Prove that 5/(2√41) is irrational.

6. Is (9 − √43)(9 + √43) rational or irrational? Show your working. Are the two factors rational or irrational?

7. Prove that √47 + √53 is irrational. You may use the fact that √n is irrational for every natural number n that is not a perfect square.

8. Using √59, write (with reason) two irrational numbers whose sum is rational, and two irrational numbers whose sum is irrational.

9. True or false? Give a reason for each.
   (a) √150 is irrational.
   (b) √576 is irrational.
   (c) If 12 divides n², then 12 divides n.
   (d) If 6 divides n², then 6 divides n.

10. A carpenter makes a square table top of area 202 cm². Can the side be written exactly as a fraction of a centimetre? Explain.

11. A student proves that √31 is irrational but forgets to say that p and q have no common factor except 1. Which step of the proof no longer gives a contradiction? Give an example of a fraction equal to a rational number where "both numerator and denominator are divisible by the same prime" is perfectly fine.

12. If a prime 97 divides n², prove that 97² also divides n². Check with n = 582.

13. Show that 4 + √200 is irrational. (Hint: simplify √200 first.)

### Answers

1. n = 3 × 29 × 37, to n² = 3² × 29² × 37² (har prime do baar). Isliye:
   - 3, 29, 37 divide karte hain (fingerprint mein hain).
   - 71 nahi (fingerprint mein nahi).
   - 87 = 3 × 29, aur n² mein 3 aur 29 dono hain, to **87 divide karta hai.**

   **Jaanch:** n² = 10361961. 10361961 ÷ 87 = 119103 (poora) ✅ aur 10361961 ÷ 71 = 145943.11... (poora nahi) ✅

2. Maan lo √17 = p/q, p aur q ka koi common factor 1 ke alawa nahi. Square: p² = 17q². To 17 divides p², 17 prime hai, to lemma se 17 divides p. Likho p = 17m. To 289m² = 17q², yaani q² = 17m². To 17 divides q², lemma se 17 divides q. Ab 17 dono p aur q ka common factor hai. **"No common factor" wali shart yahan use hui**: ye isi se takraati hai. Contradiction, to √17 irrational.
   **Jaanch:** 33² = 1089 aur 17 × 8² = 1088. Barabar nahi ✅

3. p = 57 = 3 × 19 lo. p² = 3249 = 361 × 9, to 361 divides p². Par 361 ÷ 57 = 6.33..., 361 divides 57 **nahi**. To "361 divides p² to 361 divides p" **galat** hai (361 = 19² prime nahi hai). Sahi lemma sirf prime 19 ke liye: p² = 361q² se 19 divides p, p = 19m, 361m² = 361q², q = m, to **p/q = 19**. √361 = 19, rational, aur proof ka contradiction nahi aata.
   **Jaanch:** 19 × 19 = 361 ✅

4. Maan lo 7 + 3√23 = s rational. Isolate: 3√23 = s − 7, √23 = (s − 7) ÷ 3, rational. Par √23 irrational (23 prime). Contradiction. To 7 + 3√23 irrational.
   **Jaanch:** s = 21.39 lo. (21.39 − 7) ÷ 3 = 4.79666..., aur 4.79666...² = 23.0080 ≠ 23 ✅

5. Maan lo 5/(2√41) = s, s ≠ 0. To 5 = 2s√41, √41 = 5 ÷ (2s), rational. Par √41 irrational (41 prime). Contradiction. Ya: 5/(2√41) = (5/82)√41, non-zero rational × irrational.
   **Jaanch:** 5 ÷ (2 × 6.40312) = 0.390434 aur (5/82) × 6.40312 = 0.390434 ✅

6. Guna: 9² − (√43)² = 81 − 43 = **38**, rational. Dono factor irrational hain (9 ± √43, rational ± irrational). Yaani do irrationals ka guna rational ho sakta hai.
   **Jaanch:** (9 − 6.55744) × (9 + 6.55744) = 2.44256 × 15.55744 = 38.0000 ✅

7. Maan lo √47 + √53 = s rational, s > 0. Square: 47 + 53 + 2√2491 = s², to √2491 = (s² − 100) ÷ 2, rational. Par 2491 = 47 × 53 perfect square nahi hai (49² = 2401 aur 50² = 2500 ke beech), to √2491 irrational. Contradiction. To √47 + √53 irrational.
   **Jaanch (algebra ki):** s = √47 + √53 = 14.13576, s² = 199.8198, (s² − 100) ÷ 2 = 49.9099, aur √2491 = 49.9099 ✅

8. Do irrationals jinka jod rational: **√59** aur **3 − √59** (3 − √59 irrational hai, rational − irrational). Jod = 3. Do irrationals jinka jod irrational: **√59** aur **√59**, jod = 2√59, jo 2 (non-zero rational) × irrational hai, to irrational.
   **Jaanch:** 7.68115 + (3 − 7.68115) = 3.0000 ✅ aur 2 × 7.68115 = 15.3623 (kabhi na rukne wala decimal)

9. (a) **True** ✅. 150 = 2 × 3 × 5²; 2 aur 3 ek ek baar (odd) aate hain, to √150 irrational.
   (b) **False** ❌. 576 = 2⁶ × 3², sab exponent even, √576 = 24 (24 × 24 = 576).
   (c) **False** ❌. n = 6: n² = 36, 12 divides 36 (36 ÷ 12 = 3), par 12, 6 ko nahi bhaagta. 12 = 2² × 3 prime nahi hai.
   (d) **True** ✅. 6 = 2 × 3, dono prime hain. 6 divides n² to 2 aur 3 dono n² ko divide karte hain, lemma se dono n ko divide karte hain. n ke fingerprint mein 2 aur 3 dono hain, to 6 divides n.

10. Side = √202. 202 = 2 × 101, dono ek ek baar (odd exponent), to 202 perfect square nahi, √202 irrational. Isliye side ko **kisi bhi p/q ke roop mein exact nahi likh sakte** (decimal kabhi khatam ya repeat nahi hota). Lagbhag 14.2127 cm, par exact nahi.
    **Jaanch:** 14² = 196 aur 15² = 225, 202 inke beech hai, to side 14 aur 15 ke beech ✅. Aur 14.2127² = 202.0008, yaani approximately 202 ✅

11. Proof ka **aakhri step** ("p aur q dono ka common factor 31 hai, par maana tha ki nahi hai") ab contradiction nahi deta, kyunki lowest-terms ki baat shuru mein kahi nahi gayi. Ek fraction jisme numerator aur denominator dono same prime se divisible hain aur sab theek hai: 93/3 = 31. Yahan 3 dono ka common factor hai, par 93/3 = 31 rational number hai. Isliye lowest-terms wali shart hataane se proof toot jata hai.
    **Jaanch:** 93 = 3 × 31, 3 = 3 × 1, 93 ÷ 3 = 31 ✅

12. 97 prime hai aur n² ko divide karta hai, to lemma se 97 divides n, n = 97k. To n² = 97² × k², yaani 97² divides n².
    **Jaanch:** n = 582 = 97 × 6. n² = 338724 = 9409 × 36 = 97² × 36 ✅

13. √200 = √(100 × 2) = 10√2. To 4 + √200 = 4 + 10√2. Maan lo = s rational. Isolate: 10√2 = s − 4, √2 = (s − 4) ÷ 10, rational. Par √2 irrational (Class 9). Contradiction. Isliye 4 + √200 irrational.
    **Jaanch:** s = 18.14 lo. (18.14 − 4) ÷ 10 = 1.414, aur 1.414² = 1.999396 ≠ 2 ✅

---

Agar lemma ka proof pehli baar mein poora na samajh aaye, to is picture ko yaad rakho: **a² mein a ka har prime do baar hota hai, aur fingerprint ek hi hota hai.** Bas yahi sab proofs ka dil hai. Ek baar ye baat tumhari pakad mein aa gayi, to √7 se √97 tak sab ek hi kahani ban jayenge.

Ab tak tumne dekha ki irrational number ka decimal "kabhi nahi rukta, kabhi repeat nahi hota", aur rational ka decimal kaisa dikhta hai ye Class 9 se jaante ho. Agle topic (Topic 5) mein hum dekhenge ki **kaunsa rational number rukega aur kaunsa repeat hoga, ye pehle se kaise pata chal jata hai**: 2 aur 5 wale rule ka asli "kyun".
