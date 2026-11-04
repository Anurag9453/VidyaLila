# Chapter: Statistics

> **Class:** 9 | **Subject:** Mathematics
> **Ye ek naya chapter hai.** Ab tak humne numbers, shapes aur formulas ke saath kaam kiya. Is chapter mein hum **asli duniya ke numbers** ke saath kaam karenge: logon se poochhe gaye jawaab, khel ke score, mausam ke taapmaan. Inhe ikattha karna, saja ke rakhna, graph mein dikhana, aur unse matlab nikaalna. Isi ko **Statistics** kehte hain.
> **Topics covered in this file:**
> 1. Statistics aur Data ka Parichay

---

# Topic 1: Statistics aur Data ka Parichay

Ab tak ke chapters mein humne numbers ko khud chuna tha: "maan lo x = 3", "ek triangle jiski sides 13, 14, 15 hain". Par asli zindagi mein numbers hum nahi chunte, wo **duniya se aate hain**. Kisi ka ghar kitna door hai, kisi ne kitne run banaye, kal kitni baarish hui. Ye numbers bikhre hue aate hain, aur unse kuch samajhne ke liye ek tareeka chahiye. Is topic mein hum us tareeke ki shuruaat karenge: **data kya hai, kahan se aata hai, aur use thoda saja kaise lein.**

---

## Rehan aur school bus ki kahani

Rehan apni class ka **monitor** hai. Ek din Principal ma'am ne usse bulaya:

"Rehan, school naya bus route shuru karna chahta hai. Mujhe jaanna hai ki tumhari class ke bachche **school se kitni door** rehte hain. Kal tak pata karke batao."

Rehan ne class mein ek-ek se poochha aur ek kaagaz par likhta gaya. Shaam tak uske paas 20 bachchon ke jawaab the (km mein):

```
3, 7, 2, 12, 5, 3, 9, 1, 4, 6,
3, 15, 2, 8, 5, 4, 3, 10, 6, 2
```

Rehan kaagaz lekar Principal ma'am ke paas gaya. Ma'am ne poochha:
- "Sabse door kaun rehta hai?"
- "Sabse paas kaun?"
- "Kitne bachche 3 km ke andar rehte hain?"

Rehan ne kaagaz dekha aur atak gaya. Numbers to sab the, par **bikhre hue**. Har sawaal ke liye use poori list baar baar padhni pad rahi thi.

Ghar aakar usne ek chhota sa kaam kiya: saare numbers ko **chhote se bade** kram mein likh diya.

```
1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 12, 15
```

Ab saare jawaab ek nazar mein the:
- Sabse paas: **1 km**. Sabse door: **15 km**.
- 3 km ke andar: 1, 2, 2, 2, 3, 3, 3, 3, yaani **8 bachche**.

Rehan ne anjaane mein **Statistics** ka pehla kaam kar diya: **data ikattha kiya, aur use saja kar usse jawaab nikaale.** Is poore chapter mein hum yahi kaam aur achhe tareekon se karna seekhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Statistics** | Data ikattha karna, sajana, dikhana aur usse matlab nikaalna | Rehan ka bus wala survey |
| **Data** | Kisi sawaal ke jawaab mein ikatthe kiye gaye facts ya numbers | Rehan ki 20 doori ki list |
| **Observation** | Data ka ek akela jawaab | "Meera 7 km door rehti hai" ka 7 |
| **Variable** | Wo cheez jiske baare mein data liya ja raha hai, aur jo har insaan ke liye alag ho sakti hai | "School se doori" |
| **Raw data** | Jaisa ikattha kiya, waisa hi bikhra hua data | Rehan ki pehli list |
| **Primary data** | Jo data aapne **khud** ikattha kiya | Rehan ka survey |
| **Secondary data** | Jo data **kisi aur** ne ikattha kiya, aur aap use use kar rahe ho | Akhbaar mein chhape baarish ke aankde |
| **Range** | Sabse bade aur sabse chhote observation ka farak | 15 − 1 = 14 km |

---

## Part A: Statistics hai kya?

Statistics ek aisa tareeka hai jisse hum **bahut saare numbers se ek kahani** nikaalte hain. Iske paanch kadam hote hain. Rehan ki kahani ke saath dekho:

| Kadam | Matlab | Rehan ne kya kiya |
|---|---|---|
| 1. **Collection** (ikattha karna) | Sawaal poochh kar ya naap kar data lena | Har bachche se doori poochhi |
| 2. **Organisation** (sajana) | Data ko kram mein ya table mein rakhna | Numbers chhote se bade kram mein likhe |
| 3. **Presentation** (dikhana) | Table ya graph se dikhana taaki ek nazar mein samajh aaye | (Ye hum Topic 2 aur 3 mein karenge) |
| 4. **Analysis** (jaanch) | Data se calculation karna | Sabse door, sabse paas, 3 km ke andar kitne |
| 5. **Interpretation** (matlab nikaalna) | Calculation se faisla ya nateeja nikaalna | "Zyada bachche paas rehte hain, to bus chhote route par chalni chahiye" |

### Statistics kahan kaam aata hai?

Aap roz statistics dekhte ho, bas uska naam nahi lete:

- **Cricket:** Kisi batsman ka average, strike rate, kaunse bowler ne sabse zyada wicket liye.
- **Mausam:** "Kal baarish ki sambhavna 70% hai." Ye pichhle saalon ke data se nikalta hai.
- **Chunaav:** Exit poll mein kuch logon se poochh kar poore desh ka andaaza lagaya jata hai.
- **Mehngai:** Sabzi, doodh, petrol ke daam har mahine note karke pata lagta hai ki cheezein kitni mehngi hui.
- **Doctor:** Kis bimari mein kaunsi dawai kitne logon par asar karti hai.
- **YouTube aur apps:** Kaunsa video kitni baar dekha gaya, isi se agla video suggest hota hai.

### "Statistics" ke do matlab

Ye shabd do tarah use hota hai:

1. **Ek vishay (subject) ki tarah:** Data ke saath kaam karne ka poora tareeka. "Main statistics padh raha hoon."
2. **Numbers ke facts ki tarah:** Kisi cheez ke baare mein ikatthe kiye gaye aankde. "Is saal ki cricket statistics dekho: hamari team ke opener ne 12 match mein 650 run banaye."

---

## Part B: Data, Observation aur Variable

**Data** kisi sawaal ke jawaab mein ikatthe kiye gaye facts ka samooh hai. Data ka har ek jawaab ek **observation** kehlata hai.

Rehan ke survey mein:
- **Sawaal:** "Tum school se kitni door rehte ho?"
- **Variable:** school se doori (ye har bachche ke liye alag ho sakti hai, isliye "variable")
- **Data:** 20 numbers ki poori list
- **Ek observation:** jaise "7" (ek bachche ka jawaab)
- **Observations ki ginti:** 20

### Data do tarah ka hota hai

| | **Quantitative** (numbers wala) | **Qualitative** (gun ya prakar wala) |
|---|---|---|
| Kya batata hai | Kitna, kitne | Kaisa, kaunsa |
| Examples | Height, umar, doori, run, wazan | Pasandeeda rang, matri bhasha, school aane ka tareeka (bus/cycle/paidal) |
| Kya karna mumkin hai | Jod sakte ho, average nikaal sakte ho | Sirf gin sakte ho ki kitne logon ne kya chuna |

Ek seedhi pehchaan: **kya jawaab ek number hai jiska jod-ghatana matlab rakhta hai?** Haan to quantitative, nahi to qualitative.

Dhyan do: roll number bhi number hai, par do roll numbers ko jodne ka koi matlab nahi. Wo asal mein ek **naam** jaisa hai.

Quantitative data ke andar ek aur chhota farak hota hai (halki jhalak):
- **Ginti wala (discrete):** Sirf poore number, jaise bhai-behen kitne hain (0, 1, 2...). 2.5 bhai nahi ho sakte.
- **Naap wala (continuous):** Koi bhi value, jaise height 152.4 cm, wazan 41.75 kg.

Ye farak aage Topic 2 mein class intervals banate waqt kaam aayega.

---

## Part C: Primary aur Secondary Data

Data kahan se aaya, iske hisaab se do prakar hain.

### Primary data

Jo data aap **khud, pehli baar** ikattha karte ho, apne kisi khaas sawaal ke liye.

Examples:
- Rehan ne khud har bachche se doori poochhi.
- Ek dukaandaar roz note karta hai ki aaj kitne kilo aloo bike.
- Aap apne mohalle ke 30 gharon mein jaakar poochhte ho ki kitne logon ke paas cycle hai.

### Secondary data

Jo data **kisi aur ne pehle se** ikattha kiya hai, aur aap use apne kaam mein le rahe ho.

Examples:
- Akhbaar mein chhape pichhle saal ke baarish ke aankde.
- Sarkari website par di gayi jansankhya (census).
- Cricket website par kisi khiladi ke saare purane score.

### Dono ka farak

| | Primary data | Secondary data |
|---|---|---|
| Kisne ikattha kiya | Aapne khud | Kisi aur ne |
| Mehnat aur samay | Zyada | Kam |
| Bharosa | Zyada (aap jaante ho kaise liya) | Source par depend karta hai |
| Aapke sawaal se mel | Bilkul aapke sawaal ke hisaab se | Kabhi kabhi poora mel nahi khata |

**Ek mazedaar baat:** ek hi data kisi ke liye primary aur kisi aur ke liye secondary ho sakta hai. Rehan ki list **Rehan ke liye primary** hai. Par agar bus company Rehan ki list le kar use kare, to **company ke liye wo secondary** hai.

---

## Part D: Data ikattha kaise karein

### Chaar aam tareeke

| Tareeka | Kya hota hai | Example |
|---|---|---|
| **Survey** | Bahut logon se ek jaise sawaal poochhna | Rehan ka poori class se doori poochhna |
| **Questionnaire** (prashnavali) | Likhe hue sawaalon ka form, jise log khud bharte hain | School ka feedback form |
| **Interview** | Aamne-saamne baat karke detail mein poochhna | Reporter ka kisaan se fasal ke baare mein poochhna |
| **Records** | Pehle se likhi hui jaankari dekhna | Library ka register, hospital ki file |

### Achhe sawaal kaise likhein

Sawaal aisa ho ki jawaab dene wala apni **sachchi** baat bata sake.

- Kamzor sawaal: "Kya aap nahi maante ki hamare school ka khel ka maidaan bahut achha hai?"
  Ye sawaal pehle se "haan" ki taraf dhakel raha hai.
- Behtar: "Aap school ke khel ke maidaan ko kaisa maante ho? (bahut achha / theek / kharab)"

### Sabka sahi hissa poochho (fair sample)

Maan lo aapko jaanna hai ki **poore school** ka pasandeeda khel kaunsa hai, aur aap sirf **cricket team** ke 15 bachchon se poochh lo. Lagbhag sab "cricket" bolenge. Par iska matlab ye nahi ki poore school ko cricket pasand hai.

Isliye jab sab se poochhna mumkin na ho, to **alag alag tarah ke logon** se poochho: har class se, ladke-ladkiyon dono se, khel pasand karne wale aur na karne wale dono se. Aur data ko **imaandaari** se likho, apni pasand ke hisaab se badlo mat.

---

## Part E: Raw data ko sajana aur Range

### Kram mein lagana

Raw data ko sajane ka sabse pehla aur aasan kaam hai use **kram mein** likhna:
- **Ascending order (badhta kram):** chhote se bade
- **Descending order (ghatta kram):** bade se chhote

Ek tip: likhne ke baad **gin lo** ki observations ki ginti wahi hai jo pehle thi. Koi number chhoot na jaye ya do baar na likha jaye.

### Range

**Range = Sabse bada observation − Sabse chhota observation**

Range batata hai ki data **kitna faila hua** hai.

### Solved examples

**Example 1: Rehan ka data**

Ascending order: 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 12, 15

- Sabse bada = 15, sabse chhota = 1
- **Range = 15 − 1 = 14 km**
- 10 km se zyada door: 12 aur 15, yaani **2 bachche**

**Jaanch:** Ginti: pehli list mein 20 numbers, sajayi list mein bhi 20 ✅

**Example 2: Ek batsman ke 10 match ke run**

Raw data: 45, 12, 78, 0, 33, 101, 56, 8, 67, 23

Ascending: 0, 8, 12, 23, 33, 45, 56, 67, 78, 101
Descending: 101, 78, 67, 56, 45, 33, 23, 12, 8, 0

- **Range = 101 − 0 = 101 run**
- 50 ya usse zyada run wale match: 56, 67, 78, 101, yaani **4 match**

**Jaanch:** Dono list mein 10 numbers hain ✅

**Example 3: Shimla mein ek hafte ka subah ka taapmaan (°C)**

Raw data: 4, −2, 1, 6, −3, 0, 3

Ascending: −3, −2, 0, 1, 3, 4, 6

- Sabse chhota = −3 (dhyan do, −3 sabse thanda hai, isliye sabse chhota)
- **Range = 6 − (−3) = 6 + 3 = 9 °C**

**Jaanch:** −3 se 6 tak number line par gino: 9 kadam ✅

**Example 4: 8 school bags ka wazan (kg)**

Raw data: 3.5, 4.2, 2.8, 5.1, 3.9, 4.6, 3.2, 2.5

Ascending: 2.5, 2.8, 3.2, 3.5, 3.9, 4.2, 4.6, 5.1

- **Range = 5.1 − 2.5 = 2.6 kg**

**Example 5: Range se ulta sawaal**

Ek data ka range 25 hai aur sabse chhota observation 17 hai. Sabse bada kya hai?

Sabse bada − 17 = 25, to **sabse bada = 42**

**Jaanch:** 42 − 17 = 25 ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: Range mein pehla aur aakhri number le lena, bina kram mein lagaye**
Rehan ki raw list ka pehla number 3 aur aakhri 2 hai. Range 3 − 2 = 1 nahi hai. Pehle kram mein lagao, phir sabse bada aur sabse chhota lo: 15 − 1 = 14.

**Galti 2: Negative numbers mein range galat nikalna**
Taapmaan −3 se 6 tak ho, to range 6 − 3 = 3 nahi, balki 6 − (−3) = **9** hai.

**Galti 3: Repeat hone wale numbers ko ek hi baar likhna**
Rehan ki list mein 3 chaar baar aaya hai. Sajate waqt chaaron baar likhna hai, warna ginti aur jawaab dono galat ho jayenge.

**Galti 4: Primary aur secondary ko "number hai ya nahi" se pehchanna**
Farak is baat ka hai ki **data kisne ikattha kiya**, is baat ka nahi ki wo number hai ya shabd.

**Galti 5: Har number wale data ko quantitative maan lena**
Roll number, PIN code, bus number number hain, par inhe jodne ka matlab nahi. Ye naam ki tarah kaam karte hain.

**Galti 6: Sirf ek tarah ke logon se poochh kar sab ke baare mein nateeja nikaalna**
Cricket team se poochh kar "poore school ka pasandeeda khel cricket hai" kehna galat nateeja hai.

---

## Quick Recap

- **Statistics** = data ko ikattha karna, sajana, dikhana, jaanchna aur usse matlab nikaalna.
- "Statistics" ke do matlab: ek **vishay**, aur **numbers ke facts**.
- **Data** = facts ka samooh. Har ek jawaab ek **observation**. Jiske baare mein data liya, wo **variable**.
- **Quantitative** data (number, jaise height) aur **qualitative** data (gun, jaise pasandeeda rang).
- **Primary** data aap khud ikattha karte ho. **Secondary** data kisi aur ka ikattha kiya hota hai.
- Data lene ke tareeke: survey, questionnaire, interview, records. Sawaal seedhe ho, aur sabka sahi hissa poochho.
- Raw data ko **ascending** ya **descending** kram mein lagao, aur ginti check karo.
- **Range = sabse bada − sabse chhota.**

---

## Practice Questions

1. State whether each of the following is primary or secondary data:
   (a) A student measures the heights of all her classmates herself.
   (b) Population figures taken from a government census website.
   (c) A shopkeeper notes how many umbrellas he sells each day this month.
   (d) Last year's rainfall figures read in a newspaper.

2. State whether each variable gives qualitative or quantitative data:
   (a) Favourite colour
   (b) Number of brothers and sisters
   (c) Height of a student
   (d) Mother tongue

3. The ages (in years) of 8 people waiting at a bus stop are: 34, 18, 52, 27, 18, 45, 61, 30. Arrange them in ascending order and find the range.

4. The minimum temperatures (in °C) of a hill town on six days were: −5, 2, −1, 7, 3, −4. Find the range.

5. The range of a set of data is 38 and the smallest observation is 24. Find the largest observation.

6. A survey form asks: "Don't you agree that our school's sports facilities are excellent?" What is wrong with this question? Rewrite it as a fair question.

7. To find the favourite sport of all the students in a school, Riya asks only the 15 members of the school cricket team. Is this a fair way to collect the data? Give a reason.

8. Arrange the following weights (in kg) in descending order and find the range: 2.4, 3.1, 1.8, 2.9, 3.5

### Answers

1. (a) **Primary.** Student ne khud naapa.
   (b) **Secondary.** Ye data sarkar ne ikattha kiya, hum sirf use le rahe hain.
   (c) **Primary.** Dukaandaar khud note kar raha hai.
   (d) **Secondary.** Akhbaar ne kisi aur ka ikattha kiya data chhapa.

2. (a) **Qualitative** (rang ek gun hai, number nahi)
   (b) **Quantitative** (ginti wala number)
   (c) **Quantitative** (naap wala number)
   (d) **Qualitative** (bhasha ek prakar hai)

3. Ascending: **18, 18, 27, 30, 34, 45, 52, 61**
   Range = 61 − 18 = **43 years**
   Jaanch: 8 numbers the, 8 hi likhe, aur 18 do baar aaya hai ✅

4. Sabse bada = 7, sabse chhota = −5.
   Range = 7 − (−5) = 7 + 5 = **12 °C**

5. Sabse bada − 24 = 38, to sabse bada = **62**.
   Jaanch: 62 − 24 = 38 ✅

6. Ye sawaal pehle se "haan" bolne ki taraf dhakelta hai, isliye sachcha jawaab nahi milega.
   Behtar sawaal: **"How would you rate our school's sports facilities? (Very good / Average / Poor)"**

7. **Nahi, ye fair nahi hai.** Cricket team ke bachche lagbhag sab cricket hi bolenge. Poore school ke liye har class aur har tarah ke bachchon se poochhna chahiye.

8. Descending: **3.5, 3.1, 2.9, 2.4, 1.8**
   Range = 3.5 − 1.8 = **1.7 kg**

---

Shabaash! Aapne statistics ka pehla aur sabse zaroori kadam seekh liya: data ko pehchanna, ikattha karna aur saja kar uska range nikaalna. Rehan ki tarah, bikhre numbers se bhi ab aap jawaab nikaal sakte ho.

**Aage kya?** Rehan ki class mein 20 bachche the, to list sambhal gayi. Par agar poore school ke 500 bachchon ka data ho? Itne numbers ko kram mein likhna bhi thaka dega. Topic 2 mein hum **tally marks** aur **frequency table** seekhenge, jisse bada data bhi ek chhoti si table mein aa jata hai.
