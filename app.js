// //----------------- ✍️ Practice Questions (Chapter 1: Alert) -------------------------------
//ALL QUESTIONS
// Q1: Ek alert box show karo jisme likha ho "Welcome to my website!"
// Q2: Ek alert show karo jisme tumhara naam likha ho. (Apna naam alert mein likho)
// Q3: Do alag alag alert boxes banao — pehle mein ho "JavaScript is fun!" aur doosre mein ho "Let's learn more!"
// Q4: Alert box mein single quotes ka use karke likho: 'I love coding'
// Q5: Aisa alert likho jisme message ho "Error! Please enter a valid password."

//ALL ANSWERS
// //1
// alert("Welcome to my website!");

// //2
// alert("Fareeha abbasi");

// //3
// alert("JavaScript is fun!");
// alert("Let's learn more!");

// //4
// alert("I love coding");

// //5
// alert("Error! Please enter a valid password.");

// ---------------------💼 Interview Questions (Chapter 1: Alert)-------------------
// Q1: JavaScript mein alert() function kis liye use hota hai?
// Answer:
// alert() user ko ek pop-up message dikhane ke liye use hota hai. Yeh browser ke alert box mein text show karta hai.

// Q2: Kya alert() se user se koi input liya ja sakta hai?
// Answer:
// Nahi, alert() sirf message dikhata hai. Yeh user se koi input nahi leta.

// Q3: Kya alert() function ko bina quotes ke use kar sakte hain?
// Answer:
// Nahi, alert() mein jo text dikhana hota hai wo hamesha quotes (single ya double) mein likha jata hai.

// Q4: Kya JavaScript mein ek se zyada alert() ek sath use kiye ja sakte hain?
// Answer:
// Haan, tum multiple alert() lines use kar sakte ho. Browser unhe ek ke baad ek show karega.

// Q5: Agar tum alert() ke andar variable use karna chahti ho to kaise karo gi?
// Answer:
// Example:
// var name = "Fareeha";
// alert(name);
// var name = "Fareeha";
// alert(name);
// Yahan alert box mein Fareeha dikhai dega.

// Q6: Kya alert() kisi HTML element ko change kar sakta hai?
// Answer:
// Nahi, alert() sirf message show karta hai. Yeh HTML elements ko directly change nahi karta.

// Q7: Kya alert("5 + 5") ka result 10 hoga?
// Answer:
// Nahi, is case mein "5 + 5" ek string hai, to alert box mein 5 + 5 as text show hoga, calculation nahi hogi.

// //--------------------------------✍️ Practice Questions (Chapter 2) -------------------------
//ALL QUESTIONS
// Q1: Ek variable banao jiska naam ho fullName aur usme apna naam store karo.
// Q2: Ek variable message banao aur usme store karo: "JavaScript is awesome!", phir is variable ko alert mein use karo.
// Q3: Do variables banao — firstName aur lastName. Unmein apna first aur last name store karo. Phir ek alert show karo jisme dono combine ho kar full name dikhe.
// Q4: Ek variable city banao aur usme "Karachi" store karo. Phir usay console mein print karo.
// Q5: Ek variable greeting banao jisme likha ho "Good Morning!", phir alert() aur console.log() dono mein use karo.

//ALL ANSWERS
// //1
// var fullName = "Fareeha";

// //2
// var message = "Javascript is awesome";
// alert(message);

// //3
// var firstname = "Fareeha";
// var lastName = "abbasi";
// alert(firstname + " " + lastName);

// //4
// let city = "Karachi";
// console.log(city);

// //5
// let greeting = "Good Morning!";
// alert(greeting);
// console.log(greeting);

//--------------------- 💼 Interview Questions (Chapter 2: Variables for Strings)------------------------
// Q1: JavaScript mein variable kya hota hai?
// Answer:
// Variable ek container hota hai jo kisi value ko temporarily store karta hai, jaise string, number ya boolean.

// Q2: String ko variable mein kaise store karte hain?
// Answer:
// String ko double ya single quotes mein likhte hain aur variable mein assign kar dete hain:
// var name = "Fareeha";

// Q3: var, let, aur const mein kya farq hai?
// Answer:
// var: Function-scoped hota hai, purana method hai.
// let: Block-scoped hota hai, modern aur recommended hai.
// const: Block-scoped hota hai, aur value change nahi ki ja sakti.

// Q4: Agar hum string ko alert mein direct use na karein, to kaise karein?
// Answer:
// Pehle variable mein string store karo, phir us variable ko alert mein use karo:
// var msg = "Hello!";
// alert(msg);

// Q5: Variable ka naam kis tarah ka hona chahiye?
// Answer:
// Clear aur meaningful
// Number se start nahi hona chahiye
// Special characters (except _ and $) nahi hone chahiye
// CamelCase ka use acha hota hai

// Q6: Kya variable names case-sensitive hote hain?
// Answer:
// Haan — userName aur Username dono alag variables hain JavaScript mein.

// Q7: Kya string aur number dono ek variable mein store kiye ja sakte hain?
// Answer:
// Ek waqt mein ek hi value store hoti hai. Agar concatenate karna ho to ho sakta hai:
// var info = "Age: " + 25;

//---------------------------- ✍️ Practice Questions (Chapter 3) --------------------------
//ALL QUESTIONS
// Q1: Ek valid variable banao jiska naam ho userAge aur usme 25 store karo.
// Q2: Ek variable ka naam rakho 1name aur usme "Ali" store karo — kya yeh legal hai? Agar nahi to sahi name mein convert karo aur likho.
// Q3: Ek variable ka naam rakho user name aur usme "Fareeha" store karo — kya yeh legal hai? Agar nahi to correct karo.
// Q4: Ek variable banao $_total naam ka aur usme "500" store karo. Kya yeh legal hai?
// Q5: Neeche diye gaye variable names mein se sirf legal naam likho:
// firstName
// last-name
// full name
// total$Amount
// @price
// _isValid
// var

//ALL ANSWERS
//1
// let userAge = 25;

// //2
// let 1name = "Ali";
// //This is illegal
// let name = "Ali";
// //This is legal

// //3
// let user name = "Fareeha";
// //this is illegal
// let userName = "Fareeha";
// //This is legal

// //4
// let $_total = "500";
// //Yes this is legal

// //5
// //Only legal names
// let firstName;
// let total$Amount;
// let _isValid;

// --------------- 💼 Interview Questions (Chapter 3) --------------------------
// Q1: JavaScript mein variable ka naam kis cheez se start ho sakta hai?
// Answer:
// Variable ka naam letter (a–z, A–Z), underscore _ ya dollar sign $ se start ho sakta hai.

// Q2: Kya hum variable ka naam 1user rakh sakte hain?
// Answer:
// ❌ Nahi, variable number se start nahi ho sakta. 1user illegal hai.

// Q3: Kya my-name ek legal variable name hai?
// Answer:
// ❌ Nahi, - (dash) JavaScript mein allowed nahi hota.

// Q4: Variable name mein space use kar sakte hain?
// Answer:
// ❌ Nahi, space allowed nahi hai. full name illegal hai, use fullName likhna chahiye.

// Q5: Kya var, let, function jaise words variable ka naam ban sakte hain?
// Answer:
// ❌ Nahi, ye reserved words hain. Inhe variable names ke tor par use nahi kar sakte.

// Q6: JavaScript mein variable names case-sensitive hote hain ya nahi?
// Answer:
// ✅ Haan, JavaScript case-sensitive hai. UserName aur username alag variables hain.

// Q7: Kya yeh variable name valid hai: $priceTotal?
// Answer:
// ✅ Haan, $ se start hone wale variable names valid hote hain.

//----------------------------------✍️ Practice Questions (Chapter 4)-------------------------
//ALL QUESTIONS
// Q1: 8 aur 4 ko multiply karo aur result alert karo.
// Q2: 15 ko 3 se divide karo aur result ko console.log() mein print karo.
// Q3: 6 aur 9 ka sum ek variable total mein store karo, phir usay alert karo.
// Q4: Ek variable result banao aur usme (10 - 2) + (3 * 2) ka result store karo. Usay console.log() karo.
// Q5: 5 + 2 * 4 ka result directly alert karo (BODMAS apply hota hai).

//ALL ANSWERS
//1
// let multiply = 8 * 4;
// alert(multiply);

// //2
// let divide = 15 / 3;
// console.log(divide);

// //3
// let total = 6 + 9;
// alert(total);

// //4
// let result = 10 - 2 + 3 * 2;// -> Ya thora wrong ha is ko is tarha karta han
// // Expected:
// // Multiplication pehle hoti hai:
// // 10 - 2 + (3 * 2)
// // 10 - 2 + 6 = 14 ✅
// // Tumhara answer bhi sahi hi hai, lekin agar tum parantheses use kar leti (10 - 2) + (3 * 2) jaise question mein bola tha, to clearly follow hota.
// // ✔️ So it's fine! Just yaad rakho parentheses use karna agar order important ho.
// console.log(result);

// //5
// alert(5 + 2 * 4);

// -------------------- 👩‍💻 Interview Questions (Chapter 4) ----------------
// Q1: JavaScript mein addition aur subtraction kaise perform kiya jata hai?

// Answer:
// Addition ke liye + aur subtraction ke liye - operator use hota hai.
// Example: let sum = 5 + 3; let diff = 10 - 4;

// Q2: Agar ek expression mein +, *, aur - sab hoon, to kaunsa pehle solve hota hai?

// Answer:
// JavaScript BODMAS follow karta hai — pehle * (multiplication) hota hai, phir + aur -.

// Q3: Difference kya hai alert(5 + 3 * 2) aur alert((5 + 3) * 2) mein?

// Answer:

// 5 + 3 * 2 → 3 * 2 = 6, then 5 + 6 = 11

// (5 + 3) * 2 → 8 * 2 = 16
// Parantheses se order change hota hai.

// Q4: JavaScript mein agar division ka result decimal aaye to kya hota hai?

// Answer:
// JavaScript decimal result bhi calculate karta hai.
// Example: 7 / 2 = 3.5

// Q5: Agar tum 5 + 3 + "2" likho to result kya aayega aur kyun?

// Answer:
// Result: "82"
// Explanation: Pehle 5 + 3 = 8, phir "8" + "2" → string concatenation.

// Q6: Multiplication aur division mein kab error aasakta hai?

// Answer:
// Agar tum kisi number ko 0 se divide karo to result Infinity hota hai — error nahi aata, lekin unusual value hoti hai.
// Example: 10 / 0 = Infinity

// Q7: Kaunsa operator do numbers ko combine karta hai aur kabhi string bhi bana deta hai?

// Answer:
// + operator — ye addition bhi karta hai aur strings ko concatenate bhi.
// Example: "5" + 3 = "53"

//--------------------------------------  Practice Questions (Chapter 5) --------------------------------
//ALL ANSWERS
// //1
// let a = 10;
// let b = 5;
// let difference = a - b;
// alert(difference);

// //2
// let price = 7;l
// let quantity = 4;
// let cost = price * quantity; console.log(cost)

// //3
// let x = 12;
// let y = 5;
// let reminder = x % y;
// alert (reminder)

// //4
// let result = 3 + 6 + 9;
// console.log(result)

// //5
// let sum = 3 * 6 -10
// alert(sum)

//------------------------------// Chapter 5 – Interview Questions ----------------------------
// 1. JavaScript mein arithmetic operators ka kya kaam hota hai?
// Answer: Arithmetic operators numbers par mathematical operations karte hain, jaise + (add), − (subtract), * (multiply), / (divide), aur % (modulus ya remainder).

// 2. * aur % operator ka difference kya hai?
// Answer: * operator numbers ko multiply karta hai. % operator 2 numbers ka remainder return karta hai, jo division ke baad bacha hota hai.

// 3. JavaScript mein expressions kya hoti hain?
// Answer: Expression ek line of code hoti hai jo koi value return karti hai. Jaise:

// js
// Copy
// Edit
// let total = 5 + 3;
// Yahan 5 + 3 ek expression hai jo 8 return karegi.

// 4. JavaScript left-to-right ya right-to-left evaluate karti hai?
// Answer: JavaScript operator precedence follow karti hai, lekin jab operators ka precedence same hota hai (jaise + aur -), to evaluation left-to-right hoti hai.

// 5. let total = 10 + 4 * 2; iska result kya hoga aur kyun?
// Answer: Result hoga 18, kyunke pehle multiplication hoti hai (4 * 2 = 8) aur phir addition (10 + 8 = 18). Ye BODMAS rule follow karta hai.

// 6. Agar hum (6 + 2) * 3 likhen to pehle kya hoga?
// Answer: Parentheses (()) ka sabse zyada precedence hota hai, to pehle 6 + 2 = 8 hoga, phir 8 * 3 = 24.

// 7. console.log(10 % 3); ka output kya hoga?
// Answer: Output hoga 1, kyunke 10 ÷ 3 = 3 remainder 1 ke sath.

//--------------------------------  Practice Questions (Chapter 6) -------------------------
//All Answer
//1
// let a = 7;
// a++;
// console.log(a); // answer 7 hi Raha ga

// //2
// let b = 10;
// --b;
// alert(b); //answer 9 ho ga

// //3
// let x = 5;
// let y = x++;
// console.log("x:", x); // answer ho ga 66
// console.log("y:", y); // answer ho ga 55 //WRONG ANSWER

// //4
// let num = 12;
// let result = --num + 3;
// console.log(result);  // answer ho ga 14

// //5
// let val = 4;
// val--; // answer 4 Raha ga
// val++; //answer 4 ho ga
// console.log(val); //answer 4 ho ga  //wRONG ANSWER

//MORE QUESTIONS
// //1
// let score = 20;
// score--;
// console.log(score); // answer ha 19

// //2
// let value = 15;
// let result = ++value;
// alert(result); //answer ha 16

// //3
// let a = 3;
// let b = a--;
// console.log("a:", a); a = 2
// console.log("b:", b); b = 3

// //4
// let x = 5;
// let y = ++x + 2;
// console.log(y); answer ha 8

// //5
// let num = 10;
// let result = num++ + ++num;
// console.log(result); // answer is 21

//---------------------------- ✍️ Practice Questions (CHAPTER 7):
//AL QUESTIONS
// 1) Do variables firstName = "Ali" aur lastName = "Khan" hain. Unka full name fullName variable mein save karo aur alert mein dikhao.
// 2) Ek variable city = "Karachi" hai. Usay "I live in Karachi" ki form mein alert karo, city variable use karke.
// 3) fruit = "mango" aur color = "yellow" diye gaye hain. Ek sentence banao: "The mango is yellow" using string concatenation.
// 4) User ka naam variable userName = "Fareeha" mein store hai. Usay greet karo is tarah: "Hello, Fareeha!" using alert().
// 5) day = "Friday" aur activity = "coding" hain. Ek sentence console.log() karo: "On Friday, I do coding." using variables.

//ALL ANSWERS
//1
// let firstName = "Ali";
// let lastName = "khan";
// alert(firstName +  " " + lastName)

// //2
// let city = "Karachi";
// alert( "I live in " + city);

// //3
// let fruit = "mango";
// let color = "Yellow";
// alert("The " + fruit + " is " + color);

// //4
// let userName = "Fareeha";
// alert("Hello, " + userName);

// //5
// let day = "Friday";
// let activity = "coding";
// console.log("On " + day + ", I do " + activity);

//------------------------------------ Chapter 7 (String Concatenation) ke 7 Interview Questions with answers-------------------------

// 1) Q: JavaScript mein string concatenation kya hoti hai?
// A: Jab hum do ya zyada strings ko + operator ki madad se jor kar ek string banate hain, usay string concatenation kehte hain.
// Example:
// let fullName = "Ali" + " " + "Khan";
// 2) Q: Number aur string ko add karne se kya hota hai?
// A: JavaScript number ko string mein convert kar deta hai aur phir dono ko concatenate karta hai.
// Example:
// let result = "Age: " + 25; // Result: "Age: 25"
// 3) Q: alert("Hello " + name) mein + ka kya role hai?
// A: Yahan + operator "Hello " aur name ko concatenate karne ke liye use hua hai — taake dono mila kar ek message ban jaye.
// 4) Q: Kya hum sirf variables ke darmiyan bhi strings join kar sakte hain?
// A: Haan, bilkul. Jaise:
// let a = "Java";
// let b = "Script";
// let result = a + b; // result = "JavaScript"
// 5) Q: String ke aakhir mein space dena ho to kya karein?
// A: Space ko bhi string mein include karte hain:
// let greeting = "Hello ";
// let name = "Fareeha";
// alert(greeting + name); // Hello Fareeha
// 6) Q: Kya string concatenation mein brackets ka use zaroori hota hai?
// A: Zaroori nahi hota, lekin agar multiple operations ho rahe hon to clarity ke liye use karte hain:
// alert("Total: " + (5 + 10)); // Total: 15
// 7) Q: Concatenation aur addition mein farq kya hai?
// A:
// Addition: Do numbers ko jor kar result deta hai.
// Concatenation: Do strings ko jor kar ek lambi string banata hai.
// Example:
// 5 + 5        // 10 (Addition)
// "5" + 5      // "55" (Concatenation)

//CHATER -8 IS ALSO A CONCATINATION CAHPTER TO MA NA US KO NHI KIA KU KA CH-8 CH-7 KI HI TARHA THA//

//---------------- Practice Questions (Chapter 9) ----------------//
//ALL QUESTIONS
// 1. User se uska naam puchho aur alert mein usay greet karo:
// Hello, [user name]!
// 2. Ek prompt banaiye jo user se poochhe: "What's your favorite color?"
// Aur console mein likhiye: Your favorite color is [color]
// 3. Prompt se user se city ka naam lo aur alert mein likho:
// You are from [city]
// 4. Ek prompt lo jo user se age poochhe. Default value honi chahiye "18"
// Uske baad alert mein likho: You are [age] years old
// 5. Ek variable userHobby mein prompt se user ki hobby lo aur console mein likho:
// Hobby: [userHobby]

//ALL ANSWERS
//1
// let greet = prompt("Enter your name?");
// alert("Hello, " +  greet);

// //2
// let color = prompt(" What's your favorite color?");
// console.log("Your favorite color is " + color);

// //3
// let city = prompt("Enter your city name?");
// alert("Your are from " + city);

// //4
// let age = prompt("Enter your age");
// alert("You are " + age + " years old");

// //5
// let userHobby = prompt("Enter your hobby?");
// console.log("Hobby: " + userHobby);

//--------------------------------------  Chapter 10: if Statements. ------------------------------------
//ALL QUESTIONS
// Question 1:
// Tumhare paas ek variable temperature hai, jo temperature ka value store karta hai. Agar temperature 30 se zyada hai, toh "It's hot outside" print karna hai. Agar 30 se kam ho, toh "It's a pleasant day" print karna hai. Code likho.
// Question 2:
// Agar tumhare paas ek variable username hai, jo user ka name store karta hai, aur agar username "admin" hai, toh "Welcome Admin" print karna hai. Agar "admin" nahi hai, toh "Welcome Guest" print karna hai.
// Question 3:
// Tumhare paas ek variable score hai. Agar score 50 ya usse zyada hai, toh "You passed the exam!" print karna hai. Agar score 50 se kam hai, toh "Try again" print karna hai.
// Question 4:
// Agar tumhare paas ek variable hour hai, jo current hour ko store karta hai (24-hour format mein), toh agar hour 18 ya usse zyada hai, toh "Good evening" print karna hai. Agar hour 18 se kam hai, toh "Good morning" print karna hai.
// Question 5:
// Agar tumhare paas ek variable age hai, aur agar age 18 se zyada hai, toh "You are eligible to vote" print karna hai. Agar age 18 se kam hai, toh "You are not eligible to vote yet" print karna hai.

//ALL ANSWERS
//1
let temperature = 30;
if(temperature > 30){
    console.log("It's hot outside");
}else {
    console.log("Its a pleasent day");
}

//2
let userName = "admin";
if(userName == admin){
    console.log("Welcome admin");
}else{
    console.log("welcome quest");
    
}