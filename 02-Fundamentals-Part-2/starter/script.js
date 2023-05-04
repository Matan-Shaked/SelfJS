"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :)");

// // const interface = "Audio";
// // const private = 534;
// // const if = 23;

/*
function logger() {
  console.log("My name is Jonas");
}

// calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//lesson 2
/*
"use strict";
function describeCountry(country, population, capitalCity) {
  const wellcome = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return wellcome;
}

const Israel = describeCountry("Israel", 9, "Jerusalem");
const Finland = describeCountry("Finland", 6, "Helsinki");
const Greece = describeCountry("Greece", 10, "Athens");

console.log(Israel);
console.log(Finland);
console.log(Greece);
*/

/*
// function declaration
//can call the function before I define it because of the Hoisting thing - not a good idea in many cases
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
// better to use in my opinion
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);
*/
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
const israel = percentageOfWorld1(9);
const usa = percentageOfWorld1(350);
console.log(china);
console.log(israel);
console.log(usa);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const china2 = percentageOfWorld1(1441);
const israel2 = percentageOfWorld1(9);
const usa2 = percentageOfWorld1(350);
console.log(china, china2);
console.log(israel, israel2);
console.log(usa, usa2);
*/

//arrow function (also function expression)
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
//lesson 3
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const china = percentageOfWorld3(1441);
const israel = percentageOfWorld3(9);
const usa = percentageOfWorld3(350);
console.log(china);
console.log(israel);
console.log(usa);
*/

//lesson 4
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage} of the world`;
  console.log(description);
};

console.log(describePopulation("china", 1441));
*/
//lesson 5
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }

  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

//coding challenge 1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK �
*/

/*
//data 1
const calcAverage1 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphins1 = calcAverage1(44, 23, 71);
const koalas1 = calcAverage1(65, 54, 49);
console.log(dolphins1);
console.log(koalas1);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${dolphins1} vs. ${koalas1} 🏆`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${koalas1} vs. ${dolphins1}) 🏆`);
  } else {
    console.log("NO WINNER!");
  }
}

const check1 = checkWinner(dolphins1, koalas1);
console.log(check1);

//data 2
const calcAverage2 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphins2 = calcAverage2(85, 54, 41);
const koalas2 = calcAverage2(23, 34, 27);
console.log(dolphins2);
console.log(koalas2);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${dolphins2} vs. ${koalas2}) 🏆`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${koalas2} vs. ${dolphins2}) 🏆`);
  } else {
    console.log("NO WINNER!");
  }
}

const check2 = checkWinner(dolphins2, koalas2);
console.log(check2);
*/
/*
//arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);
console.log(years1);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "jonas";
const jonas = [firstName, "SSS", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//exercise
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];
console.log(ages);
*/

/*
const friends = ["Michael", "Steven", "Peter"];
//add elements
const newLength = friends.push("Jay"); // returen the length of the array
console.log(friends);
console.log(newLength);

const newLength1 = friends.unshift("John"); // returen the length of the array
console.log(friends);
console.log(newLength1);

//remove elements
const popped = friends.pop(); //last, returns the removed element
console.log(friends);
console.log(popped);

friends.shift(); //first, returns the removed element ;
console.log(friends);

console.log(friends.indexOf("Steven")); //locate the index of element
console.log(friends.indexOf("bob"));

console.log(friends.includes("Steven")); // true  - strict check
console.log(friends.includes("bob")); // false - strict check

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
*/

//lesson 6
/*
const populations = [1440, 350, 24, 9];
console.log(populations);
function check(length) {
  if (length.length === 4) {
    console.log(true);
  }
}
check(populations);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);
*/

//lesson 7
/*
const neighbours = ["Egypt", "Jordan", "Syria", "Lebanon"];
let newNeighbours = neighbours.push("Utopia");
console.log(neighbours);
newNeighbours = neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
console.log(neighbours.indexOf("Egypt"));
neighbours[0] = "The Republic of Egypt";
console.log(neighbours);
*/

//Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) �
GOOD LUCK �
*/
/*
function calcTip(bill) {
  const smallTip = (15 / 100) * bill;
  const bigTip = (20 / 100) * bill;
  const theTip = bill >= 50 && bill <= 300 ? smallTip : bigTip;
  return theTip;
}

const test = calcTip(1000);
console.log(test);

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(bills);
console.log(tips);
console.log(total);
*/

/*
//objects
const jonas = [
  "firstName",
  "SSS",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas2 = {
  firstName: "Jonas",
  lastName: "SSS",
  age: "teacher",
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas2);
console.log(jonas2.lastName);
console.log(jonas2["lastName"]);

const nameKey = "Name";
console.log(nameKey);
console.log(jonas2["first" + nameKey]);
console.log(jonas2["last" + nameKey]);

const interstedIn = prompt(
  "What do you want to know about Jonas? Choose between firstname, lastname, age, job, and friends"
);
console.log(jonas2.interstedIn);
console.log(jonas2[interstedIn]);

if (jonas2[interstedIn]) {
  console.log(jonas2[interstedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstname, lastname, age, job, and friends"
  );
}

jonas2.location = "Portugal";
jonas2["twiter"] = "@ssss";
console.log(jonas2);

//challenge
//"(Jonas) has (3) friends and his best friend is called (Michael)"

console.log(
  `${jonas2.firstName} has ${jonas2.friends.length} friends and his best friend is called ${jonas2.friends[0]}`
);
*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "SSS",
  birthyear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthyear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },

  // getSummary: function () {
  //   this.age = 2037 - this.birthyear;
  //   const hasDriverLicense =
  //     this.hasDriverLicense === true
  //       ? `he has a driver license`
  //       : `doesn't have a driver license`;
  //   this.summary = `${this.firstName} is a ${this.age} year old ${this.job}, and ${hasDriverLicense}`;
  //   return this.summary;
  // },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he ${
      this.hasDriverLicense
        ? "has a driving license"
        : "doesn't have a driving license"
    } `;
  },
};
console.log(jonas.getSummary());
// console.log(jonas.summary);
*/

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas["calcAge"](1991));

//challenge
//"Jonas is a 46-year old teacher, and he has/doesn't have a driver license"

//lesson 5 - Introduction to Objects
/*
const myCountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: 9,
  neighbours: ["Egypt", "Jordan", "Lebanon", "Syria"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};
console.log(myCountry.checkIsland());

// const x = !Boolean(0);
// const y = Boolean(0);
// console.log(x, y);
*/
/*
console.log(myCountry.describe());
//lesson 6 - Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

console.log(myCountry.population + 2);
console.log(myCountry["population"] - 2);
//lesson 7 - Object Methods
// inserted upon
*/

//coding challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK �
*/

/*
const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(markMiller.calcBMI());
console.log(johnSmith.calcBMI());

const whoIsBetter = function () {
  if (johnSmith.BMI < markMiller.BMI) {
    return `Mark's BMI (${markMiller.BMI}) is higher than John's (${johnSmith.BMI})`;
  } else if (markMiller.BMI < johnSmith.BMI) {
    return `John's BMI (${johnSmith.BMI}) is higher than Mark's (${markMiller.BMI})`;
  }
};

console.log(whoIsBetter());
*/

//for loop keeps running while contion is TRUE
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetitons ${rep} 🏋️‍♀️🏋️‍♂️`);
}

//lesson 8
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}
*/
/*
const jonas = [
  "firstName",
  "SSS",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //Reading from Jonas array
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

// continue and break statement
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
*/

//lesson 9
/*
const populations = [1440, 350, 24, 9];
const percentages2 = [];
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
const israel = percentageOfWorld1(9);
const usa = percentageOfWorld1(350);
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);
*/
/*
const jonas = [
  "firstName",
  "SSS",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting exeircise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excerise ${exercise} Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}
*/
//lesson 9
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
  for (let ii = 0; ii <= listOfNeighbours[i].length - 1; ii++) {
    console.log(`Neighbour: ${listOfNeighbours[i][ii]}`);
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetitons ${rep} 🏋️‍♀️🏋️‍♂️`);
// }

/*
let rep = 1;

while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetitons ${rep} 🏋️‍♀️🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is about to end...");
}

console.log(dice);
*/
//lesson 10
/*
const populations = [1440, 350, 24, 9];
const percentages3 = [];
const percentageOfWorld1 = function (populations) {
  return (populations / 7900) * 100;
};
let rep = 0;
console.log(populations.length - 1);
while (rep <= populations.length - 1) {
  const perc = percentageOfWorld1(populations[rep]);
  percentages3.push(perc);
  rep++;
}
console.log(percentages3);
*/

//Coding Challenge #4
/*Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calculator = function calcTip(bill) {
  const theTip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return theTip;
};

let rep = 0;
while (rep <= bills.length - 1) {
  const tiping = calculator(bills[rep]);
  tips.push(tiping);
  const newValue = tips[rep] + bills[rep];
  totals.push(newValue);
  rep++;
}
console.log(bills);
console.log(tips);
console.log(totals);

/*
const arr = totals;
let sum = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  sum = arr[i] + sum;
}
const average = sum / arr.length;
console.log(average);
*/

/*
const averageTipCalc = function (array) {
  const arr = array;
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    // sum = arr[i] + sum;
    sum += arr[i];
  }
  // const average = sum / arr.length;
  // return average;
  return sum / arr.length;
};

console.log(averageTipCalc(totals));
*/
