# Chapter: Mensuration (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [mensuration-part4.md](mensuration-part4.md) se aage chalti hai.** (Chapter ki shuruaat [mensuration.md](mensuration.md) se hoti hai.)
> **Topics covered in this file:**
> 5. Right Circular Cone

---

# Topic 5: Right Circular Cone

Topic 4 mein Aarav ne tin ka label khol kar dekha tha ki cylinder ki gol deewar ek rectangle ban jaati hai. Wahan humne cylinder ko achhe se samjha tha: gol base, seedhi deewar, aur uski curved surface ka area 2πrh, poora surface 2πr(r + h), aur volume πr²h. Ab us cylinder ka ek "nukeela bhai" aata hai. Iska base bhi gol hai, par upar jaate jaate ye patla hota jata hai aur ek point par khatam ho jata hai. Ise **cone** kehte hain. Cylinder wali kaafi baatein yahan kaam aayengi, khaas kar volume mein.

---

## Golu ki birthday party

Golu ka 10th birthday hai. Mummy ne teen cheezein mangwayi hain:

1. **Birthday caps:** chamakdaar kaagaz ki nukeeli topiyan, jo sabke sar par lagengi.
2. **Ice-cream cones:** biscuit wale, jinke andar ice-cream bharti hai.
3. Rasoi mein tel ki botal bharne ke liye ek **keep** (funnel).

Golu ne dhyan se dekha: teeno ka aakaar ek jaisa hai. Neeche gol, upar nukeela.

Phir uske dimaag mein do sawaal aaye:

- "Ek cap banane mein **kitna kaagaz** lagta hai?" (Ye surface ka sawaal hai.)
- "Ek cone mein **kitni ice-cream** aati hai?" (Ye volume ka sawaal hai.)

Is topic mein hum dono sawaalon ke jawab dhundhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Cone (shanku)** | Gol base wala aisa thos aakaar jo upar ek point par nukeela ho jata hai | Ice-cream cone, birthday cap, keep |
| **Right circular cone** | Aisa cone jiska nukeela point base ke centre ke theek upar ho | Seedhi khadi birthday cap |
| **Vertex (sheersh)** | Upar wala nukeela point | Cap ki nok |
| **Radius (r)** | Gol base ka radius | Cap ke ghere ka aadha diameter |
| **Height (h)** | Vertex se base ke centre tak seedhi (khadi) doori | Cap ki nok se neeche tak seedha |
| **Slant height (l)** | Vertex se base ke kinaare tak, cone ki deewar ke saath tirchhi doori | Cap ki nok se kinaare tak kaagaz ki lambai |
| **CSA** | Curved surface area: sirf tirchhi deewar ka area | Cap ka kaagaz |
| **TSA** | Total surface area: deewar + gol base | Band dhakkan wala cone |

---

## Part A: Cone ke hisse aur slant height

Cone ko seedha kaat kar beech se dekho, to andar ek right triangle chhupa hota hai:

```
              A  (vertex / nok)
             /|\
            / | \
         l /  |  \ l
          /   | h \
         /    |    \
        /     |     \
       B------O------C
           r      r
```

- **O** base ka centre hai.
- **AO = h** (height, seedhi khadi).
- **OB = r** (radius).
- **AB = l** (slant height, tirchhi).

Triangle AOB mein angle O par 90° hai. Isliye **Pythagoras theorem** (pichhli classes wala) se:

> **l² = r² + h²**, yaani **l = √(r² + h²)**

Dhyan do: slant height hamesha height se **badi** hoti hai, kyunki wo right triangle ka hypotenuse hai.

### Example 1

Ek cone ka radius 7 cm aur height 24 cm hai. Slant height nikalo.

l = √(7² + 24²) = √(49 + 576) = √625 = **25 cm**

**Jaanch:** 7² + 24² = 625 = 25² ✅

---

## Part B: Curved Surface Area (CSA) = πrl

### Cap ko khol kar dekho

Golu ne ek birthday cap ko uski seam (jod) ke saath kaat kar khol diya aur table par failaya. Kya mila? Ek **haath ka pankha** jaisa aakaar, yaani circle ka ek tukda (sector).

```
   Cap (cone)                 Kholne ke baad (pankha / sector)

       /\                         .-~~~~~~-.
      /  \                      .'  \      `.
     /    \          --->      /     \  l    \
    /      \                  |       \      |
   /________\                  \       *     /
     ghera = 2πr                `.  l  ↗   .'
                                  `-.....-'
                                kinaare ki lambai = 2πr
```

- Pankhe ki **radius** = cap ki slant height **l**.
- Pankhe ke gol kinaare ki **lambai** = cap ke base ka ghera = **2πr**.

Agar ye pankha poora circle hota (radius l), to uska area πl² hota aur kinaara 2πl. Hamara pankha us poore circle ka sirf utna hissa hai jitna kinaara hai:

Hissa = 2πr / 2πl = r / l

Isliye pankhe ka area = (r / l) × πl² = **πrl**

> **CSA of a cone = πrl**

(Ye ek "halki jhalak" wali samajh hai. Iska poora formal proof aage ki classes mein aata hai. Abhi ke liye itna samajhna kaafi hai ki cap ka kaagaz khol do, to wo ek pankha ban jata hai.)

### Example 2

Ek cone ka radius 7 cm aur slant height 25 cm hai. CSA nikalo. (π = 22/7)

CSA = πrl = (22/7) × 7 × 25 = 22 × 25 = **550 cm²**

### Example 3: Golu ki caps

Har cap ka radius 7 cm aur height 24 cm hai. 10 caps banane mein kitna kaagaz lagega? (Overlap ko chhod do.)

- Pehle slant height: Example 1 se l = 25 cm.
- Ek cap ka kaagaz = πrl = 550 cm² (Example 2 se).
- 10 caps = 10 × 550 = **5500 cm²**

**Jaanch:** 5500 ÷ 10 = 550 = (22/7) × 7 × 25 ✅

Dhyan do: cap ka **neeche wala hissa khula** hota hai, isliye yahan sirf CSA chahiye, TSA nahi.

---

## Part C: Total Surface Area (TSA) = πr(l + r)

Agar cone ka gol base bhi **band** ho (jaise ek thos lakdi ka cone), to us base ka area bhi jodna padega. Base ek circle hai, jiska area πr² hai.

TSA = CSA + base = πrl + πr²

> **TSA of a cone = πr(l + r)**

### Example 4

r = 7 cm, h = 24 cm wale thos cone ka TSA nikalo.

l = 25 cm (Example 1 se)

TSA = πr(l + r) = (22/7) × 7 × (25 + 7) = 22 × 32 = **704 cm²**

**Jaanch:** CSA 550 + base (22/7 × 49 = 154) = 704 ✅

### Kab CSA, kab TSA?

| Cheez | Kya chahiye | Kyun |
|---|---|---|
| Birthday cap ka kaagaz | CSA | Neeche khula hai |
| Ice-cream cone ka biscuit | CSA | Upar (chauda hissa) khula hai |
| Shamiana ka kapda | CSA | Zameen ki taraf khula hai |
| Thos lakdi ka cone paint karna | TSA | Har taraf band hai |

---

## Part D: Volume = (1/3)πr²h

### Teen cone, ek cylinder

Ice-cream wale bhaiya ne Golu ko ek khel dikhaya. Unke paas do bartan the:

- Ek **cone**, jiska radius r aur height h hai.
- Ek **cylinder**, jiska radius bhi **r** aur height bhi **h** hai (bilkul same base, same height).

Unhone cone ko paani se bhara aur cylinder mein daala. Phir dobara bhara aur daala. Teesri baar daalte hi cylinder **poora bhar gaya**.

Matlab: **3 cone ka paani = 1 cylinder ka paani.**

Topic 4 mein humne seekha tha ki cylinder ka volume πr²h hota hai. To:

> **Volume of a cone = (1/3)πr²h**

Ye aap ghar par bhi try kar sakte ho: mote kaagaz se same base aur same height ka ek cone aur ek cylinder banao, aur cone se ret ya chawal daal kar dekho.

### Example 5

r = 7 cm, h = 24 cm wale cone ka volume nikalo.

V = (1/3) × (22/7) × 7² × 24
= (1/3) × (22/7) × 49 × 24
= (1/3) × 22 × 7 × 24
= 22 × 7 × 8
= **1232 cm³**

**Jaanch (cylinder se):** Same r aur h wala cylinder: (22/7) × 49 × 24 = 3696 cm³. Aur 3696 ÷ 3 = 1232 ✅

### Example 6: Gehun ka dher

Gaon mein gehun ka ek dher cone ki shakal mein pada hai. Uska radius 2.1 m aur height 2.8 m hai. Baarish se bachane ke liye ise tirpal (canvas) se dhakna hai.

(a) Dher mein kitna gehun hai (volume)?
(b) Kitni tirpal lagegi?

(π = 22/7)

**(a) Volume**

V = (1/3) × (22/7) × (2.1)² × 2.8
= (1/3) × (22/7) × 4.41 × 2.8
= **12.936 m³**

(Step: 4.41 × 2.8 = 12.348; 12.348 × 22 = 271.656; 271.656 ÷ 21 = 12.936)

**(b) Tirpal**

Pehle slant height: l = √(2.1² + 2.8²) = √(4.41 + 7.84) = √12.25 = 3.5 m

Tirpal sirf dher ki tirchhi deewar par lagegi, zameen par nahi. To CSA chahiye:

CSA = πrl = (22/7) × 2.1 × 3.5 = 6.6 × 3.5 = **23.1 m²**

**Jaanch:** 2.1 : 2.8 : 3.5 = 3 : 4 : 5, jo ek jaana-pehchana right triangle hai ✅

### Example 7: Volume se height nikalna

Ek cone ka radius 7 cm aur volume 616 cm³ hai. Uski height kitni hai?

616 = (1/3) × (22/7) × 49 × h
616 = (1/3) × 154 × h
616 × 3 = 154h
1848 = 154h
h = **12 cm**

**Jaanch:** (1/3) × (22/7) × 49 × 12 = (1/3) × 154 × 12 = 616 ✅

### Example 8: Volume se radius nikalna

Ek cone ki height 21 cm aur volume 1078 cm³ hai. Radius nikalo.

1078 = (1/3) × (22/7) × r² × 21
1078 = 22 × r² (kyunki (1/3) × (22/7) × 21 = 22)
r² = 49
r = **7 cm**

**Jaanch:** (1/3) × (22/7) × 49 × 21 = 22 × 49 = 1078 ✅

---

## Part E: Roz ki zindagi ke sawaal

### Example 9: Shamiana

Shaadi ke liye ek cone ke aakaar ka shamiana lagana hai. Uske base ka radius 7 m aur slant height 10 m hai. Kapda ₹70 per m² ke rate se aata hai. Kapde ka kharcha kitna hoga?

Kapda sirf tirchhi deewar par lagega (zameen khuli hai), to CSA:

CSA = πrl = (22/7) × 7 × 10 = **220 m²**

Kharcha = 220 × 70 = **₹15,400**

### Example 10: Cone vs cylinder

Ek cone aur ek cylinder, dono ka radius 7 cm aur height 24 cm hai. Kisme kitna aata hai?

- Cylinder: πr²h = (22/7) × 49 × 24 = **3696 cm³**
- Cone: (1/3) × 3696 = **1232 cm³**

Same base aur same height hone par bhi cone mein cylinder ka sirf **ek-tihaai** aata hai. Isliye ice-cream wale cone mein utni ice-cream nahi aati jitni dikhti hai!

---

## Aam galtiyan (bachke rehna)

**Galti 1: CSA mein h laga dena**
CSA = πr**l** hai, πr**h** nahi. r = 7, h = 24 wale cone mein πrh = 528 aayega, jabki sahi CSA = πrl = 550 hai. Pehle l nikalo, phir formula lagao.

**Galti 2: Volume mein 1/3 bhool jana**
(22/7) × 49 × 24 = 3696 cylinder ka volume hai. Cone ka volume iska 1/3, yaani 1232 hai. Cone ke volume mein **hamesha 1/3** aata hai.

**Galti 3: Diameter ko radius samajh lena**
"Diameter 14 cm" diya ho, to r = **7 cm** hai, 14 nahi. Sawaal dhyan se padho: radius diya hai ya diameter?

**Galti 4: Volume mein l laga dena**
Volume = (1/3)πr²**h** hai. Yahan **seedhi height** chahiye, tirchhi nahi. Agar l diya ho, to pehle h = √(l² − r²) nikalo.

**Galti 5: Khule cone mein TSA laga dena**
Cap, ice-cream cone, shamiana, tirpal: inka base khula hai, to **CSA** lagao. TSA sirf tab, jab base bhi band ho.

**Galti 6: Units mix karna**
Area hamesha **cm²** ya **m²** mein aata hai, aur volume **cm³** ya **m³** mein. Answer ke saath sahi unit likho.

---

## Quick Recap

- Cone ke teen naap: **r** (radius), **h** (seedhi height), **l** (slant height).
- **l = √(r² + h²)** (Pythagoras se). l hamesha h se bada hota hai.
- **CSA = πrl**: cone ko khol do to ek pankha (sector) banta hai.
- **TSA = πr(l + r)** = CSA + gol base.
- **Volume = (1/3)πr²h**: same base aur height wale cylinder ka ek-tihaai.
- Khule cone (cap, shamiana, dher par tirpal) mein **CSA**, band cone mein **TSA**.
- Volume mein **h**, surface area mein **l**.

---

## Practice Questions

1. A cone has radius 5 cm and height 12 cm. Find its slant height.

2. Find the curved surface area of a cone with radius 3.5 cm and slant height 10 cm. (Take π = 22/7.)

3. Find the total surface area of a solid cone with radius 14 cm and height 48 cm. (Take π = 22/7.)

4. Find the volume of a cone with radius 3.5 cm and height 12 cm. (Take π = 22/7.)

5. A birthday cap is a cone with base diameter 14 cm and slant height 25 cm. How much paper is needed to make 8 such caps? (Take π = 22/7.)

6. A heap of wheat is in the shape of a cone with base diameter 6 m and height 4 m. Find (a) the volume of the heap and (b) the area of canvas needed to just cover it. (Take π = 3.14.)

7. The volume of a cone is 462 cm³ and its radius is 7 cm. Find its height. (Take π = 22/7.)

8. A cylinder has volume 924 cm³. What is the volume of a cone with the same base radius and the same height?

9. State whether each statement is true or false. Give a reason.
   (a) The curved surface area of a cone is πrh.
   (b) The slant height of a cone is always greater than its height.
   (c) If the radius of a cone is doubled and the height stays the same, its volume also doubles.
   (d) A cone's volume is one-third of the volume of a cylinder with the same base and height.

### Answers

1. l = √(5² + 12²) = √(25 + 144) = √169 = **13 cm**

2. CSA = πrl = (22/7) × 3.5 × 10 = 11 × 10 = **110 cm²**

3. l = √(14² + 48²) = √(196 + 2304) = √2500 = 50 cm. TSA = πr(l + r) = (22/7) × 14 × (50 + 14) = 44 × 64 = **2816 cm²**

4. V = (1/3) × (22/7) × (3.5)² × 12 = (1/3) × (22/7) × 12.25 × 12 = **154 cm³**
   (12.25 × 12 = 147; 147 ÷ 21 = 7; 7 × 22 = 154)

5. Diameter 14 hai, to r = 7 cm. Ek cap = πrl = (22/7) × 7 × 25 = 550 cm².
   8 caps = 8 × 550 = **4400 cm²**

6. r = 3 m, h = 4 m, to l = √(9 + 16) = 5 m.
   (a) V = (1/3) × 3.14 × 9 × 4 = 3.14 × 12 = **37.68 m³**
   (b) Canvas = CSA = 3.14 × 3 × 5 = **47.1 m²** (zameen wala hissa nahi dhakna, isliye sirf CSA)

7. 462 = (1/3) × (22/7) × 49 × h = (1/3) × 154 × h
   1386 = 154h, to **h = 9 cm**
   Jaanch: (1/3) × 154 × 9 = 462 ✅

8. Cone = cylinder ka 1/3, to 924 ÷ 3 = **308 cm³**

9. (a) **False** ❌. CSA = πr**l** hai, slant height se, seedhi height se nahi.
   (b) **True** ✅. l right triangle ka hypotenuse hai (l² = r² + h²), isliye h se bada hota hai.
   (c) **False** ❌. Volume mein r² hai. r double hone par r² chaar guna hota hai, to volume **4 guna** ho jata hai.
   (d) **True** ✅. Teen cone ka paani ek cylinder bhar deta hai.

---

Ab jab bhi ice-cream cone haath mein aaye, to yaad rakhna: biscuit ka area πrl hai, aur andar ki ice-cream (1/3)πr²h. Aap kar loge!

**Agle topic mein:** Ab ek aisi cheez aati hai jiska koi kona nahi, koi kinaara nahi, sirf golai hi golai: **sphere (gend) aur hemisphere (aadhi gend, jaise katori)**. Unka surface area aur volume kaise nikalte hain, ye Topic 6 mein dekhenge.
