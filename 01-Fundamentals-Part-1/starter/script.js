//  Homework 4 Start
let country = "Israel";
const island = "not an island";
let continent = "Asia";
let popluation = "9";
const language = "Hebrew";
// popluation++;
// const finlandPopulation = 6;
// const averageCountryPopulation = 33;
// const description =
//   country +
//   " is in " +
//   continent +
//   " and its " +
//   popluation +
//   " million people speak " +
//   language;

// lesson 5
// const description = `${country} is in ${continent} and its ${popluation} mllion people speak ${language}`;
// console.log(description);

//lesson 6
/*
let verdict;
if (popluation > 33) {
  verdict = `${country}'s population is above average`;
} else {
  verdict = `${country}'s poupulation is ${
    averageCountryPopulation - popluation
  } million below average`;
}
console.log(verdict);
*/

//lesson 7
/*
if (language === "English" && popluation < 50 && island === "not an island") {
  console.log(`You should live is ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
*/
//lesson 8
/*
const language = "arabic";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

//lesson 9
/*
popluation > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
  */

// console.log(description);
// console.log(popluation);
// console.log(popluation > finlandPopulation);
// console.log(popluation > averageCountryPopulation);

//console.log(popluation / 2);

// console.log(country);
// console.log(continent);
// console.log(popluation);
/*
let isIsland = "Israel";
isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof popluation);
console.log(typeof country);
console.log(typeof language);


//  Homework 4 End
*/
/*
const numNeighbours = Number(
  prompt("how many neigvour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/

/*Challenage 1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK �
*/
//test 1
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);
*/

//test 2
/*;
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let = 3y;




let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

/*
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// let age = 30;
// age = 31;

// // const birthYear;
// // birthYear = 1990;

// var job = "programmer";
// job = "teacher";

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 meanst to the power of 3 = 2 * 2 * 2

// const firstName = "Jonans";
// const lastName = "gggg";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x- 1
// x--; // x = x- 1
// console.log(x);

// console.log(ageJonas > ageSarah); // > < >= <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// console.log("");
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "i'm " + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just any regular strings`);

console.log(
  "string with \n\
mulitple\n\
line"
);

console.log(`strings
multiple
lines`);

*/
/*
const age = 15;

if (age >= 18) {
  console.log("sarah can start driving lessons 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`sarah is too young. wait another ${yearsLeft} years`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
//Challenage 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
 

*/
//Challenage 3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/
/*
let averageScoreDolphins = (96 + 108 + 89) / 3;
let averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);
if (averageScoreDolphins > averageScoreKoalas) {
  console.log("Dolphins wins! 🏆  ");
} else if (averageScoreDolphins < averageScoreKoalas) {
  console.log("Koalas wins!🏆");
} else {
  console.log("Tie!!");
}

averageScoreDolphins = (97 + 112 + 101) / 3;
averageScoreKoalas = (109 + 95 + 123) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);
if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("Dolphins wins! 🏆");
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log("Koalas wins! 🏆");
} else {
  console.log("Tie!!");
}

averageScoreDolphins = (97 + 112 + 101) / 3;
averageScoreKoalas = (109 + 95 + 106) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);
if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("Dolphins wins!");
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log("Koalas wins!");
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  (averageScoreDolphins || averageScoreKoalas >= 100)
) {
  console.log("Tie!!");
}
*/

//Challenage 4
let bill = 40;
let smallTip = (15 / 100) * bill;
let bigTip = (20 / 100) * bill;

let theTip = bill >= 50 && bill <= 300 ? smallTip : bigTip;
console.log(theTip);
console.log(
  `the tip is ${theTip}, the bill is ${bill}, and the total value is ${
    bill + theTip
  }`
);

bill = 275;
smallTip = (15 / 100) * bill;
bigTip = (20 / 100) * bill;
theTip = bill >= 50 && bill <= 300 ? smallTip : bigTip;
console.log(theTip);
console.log(
  `the tip is ${theTip}, the bill is ${bill}, and the total value is ${
    bill + theTip
  }`
);

bill = 430;
smallTip = (15 / 100) * bill;
bigTip = (20 / 100) * bill;
theTip = bill >= 50 && bill <= 300 ? smallTip : bigTip;
console.log(theTip);
console.log(
  `the tip is ${theTip}, the bill is ${bill}, and the total value is ${
    bill + theTip
  }`
);
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �
*/

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI is higher than John's!. Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`
  );
} else if (BMIMark < BMIJohn) {
  console.log(`John's BMI is higher than Mark's!.
John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
} else {
  console.log(`They both have the same BMI!`);
}
*/
/*
// type convertions
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log("i am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; //11
n = n - 1; //
console.log(n);
*/

// 5 falsy values: 0, '', indefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("don't spend it all");
} else {
  console.log("you should get a job");
}

let height = 0;
if (height) {
  console.log("yay height is defined!");
} else {
  console.log("height is undefined");
}
*/
/*
const age = "18";
if (age === 18) console.log("you just became an adult (strict)");

if (age == 18) console.log("you just became an adult (loose)");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23?");
*/
/*
const hasDriverLicense = true; // A;
const hasGoodVision = true; // B;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (hasDriverLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("someone else should drive...");
}

const isTired = false; // C;
console.log(hasDriverLicense && hasDriverLicense && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/
/*
const day = "sunday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan my course structure ");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare thoery videos");
    break;
  case "wednsday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan my course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare thoery videos");
} else if (day === "wednsday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
*/

/*
const age = 33;
age >= 18
  ? console.log("i like to drink wine 🍷")
  : console.log("i like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
