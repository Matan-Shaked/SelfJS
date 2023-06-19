'use strict';

// Data needed for a later exercise
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  */

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //put varaibles from an object as argumentents for a function. This one is good method for having a lot of data to a function without knowing how much parameters are in the function () or when there a lot of parameters. sometimes it's hard to know the order of the paranmetes for someone that using the function,. I can do it instead of manually define the parameters of the function. then the function will destruct the object to parameters that gets arguments (the values of the properties in the object).

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //putting values as Arguments to the function parameters using Spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  //Rest Paramters
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day} ,`;
}
console.log(openStr);

//property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entrie Object - creating an array of keys and values
const entries = Object.entries(openingHours);
console.log(entries);

//for of loop on an Object
for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}

/*
//WITH Optional chaining

// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users1 = [{ name: 'Jonas', email: 'hellp@jonas.io' }];
const users2 = [];
console.log(users1[0]?.name ?? 'User array empty');
console.log(users2[0]?.name ?? 'User array empty');
*/
/*
///////////////////////
//FOR-OF LOOP - it's for ARRAYS - can use continue and break
// for (const item of menu) console.log(item);
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, el] of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`); - this is the OLD way

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`); - this is the NEW way.
// }

// console.log([...menu.entries()]);
*/
//////////////////////////////////////////
//Coding Challenage 1
/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK �

*/

/*
////////////second solution

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, ...fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored in the game!`);
  console.log(...players);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.

team1 < team2 && console.log('team 1 is more likely to win the game!');
team1 > team2 && console.log('team 2 is more likely to win the game!');

*/

////////////first solution
// /////1.

// const [players1, players2] = game.players;

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// //5.
// const allInplayers = [...players1Final, ...players2];
// console.log(allInplayers);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
//   console.log(...players);
// };
// //5.
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

/*/ /////////////////////////////////////////
//Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator (assign a value to a variable if it is TRUTHY. bring back ONLY first TRUTHY variable). continue to the next element only it the current element is FALSE.

//use it to set default value if there is no value

// rest1.numbGuests = rest1.numGuests || 10;
// rest2.numbGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator (Null or undefined) - as if the null and the undefined were TRUTHY values and work like the OR operator - assign a value to a variable if it is TRUTHY. bring back ONLY first TRUTHY variable. continue to the next element only it the current element is FALSE.
//use it to set default value if there is no value including ZERO
// rest1.numbGuests = rest1.numGuests ?? 10;
// rest2.numbGuests = rest2.numGuests ?? 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator (assign a value to a variable if it is FALSY. bring back ONLY first FALSY variable). continue to the next element only it the current element is TRUE.
//use it to set default value if there is no value including ZERO
// rest1..owner = rest1.numGuests && <'ANONYMOUS'>;
// rest2..owner = rest2.numGuests && <'ANONYMOUS'>;

rest1.owners &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
//////////////////////////////////////////
// The Nulish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or ' ') - ??
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
//////////////////////////////////////////
//Short Circuiting (&& and ||)
console.log('-------OR------');

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------AND------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
//////////////////////////////////////////

//Spread operator - VALUES that separated by commas
//Rest operator - Varaible NAMES that separated by commas
//According to this difference I will decide what to choose - do I want VALUES TOGATHER IN AN ARRAY (SPREAD) or do I want the VARIABLE NAMES (and not there values) IN AN ARRAY?

//Rest operator - the opposite of the spread operator
// THe rest operator collect multiple elements and condense them into an array

//1) Destructuring - creating new arrays and objects

//Arrays
/*
const arr = [1, 2, ...[3, 4]]; // SPREAD - because it is on the RIGHT side of the assignment operator.
console.log(arr);

//REST - because it is on the LEFT side of the assignment operator.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //takes the rest of the elements that are unused in the destructing assignment and putting them into a new array. it does NOT include any Skipped elements, but only takes the rest of the elements after the last varaible the created. The REST element has to be THE LAST element and the ONLY ONE REST ELEMENT in every destructing assigment.

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
*/
//2) Functions - passing multiple arguments into a function
//This is REST ARGUMENTS
/*
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

//using SPREAD operator to put arguments in a function with REST Parameter.
const x = [23, 5, 7];
add(...x);
*/

//Another way - but it is restricted only for arrays in the function, and not also for an object.
/*
const add2 = function (numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
const x = [23, 5, 7];
console.log(...x);

add2([23, 5, 7]);
*/
/*
//arguments that go to Rest Parameters in function
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/
//////////////////////////////////////////////////////////

//Spread operator
//tool to expand an array:
//1) when we need to spread literal array to building NEW array.
//2) when we need to take the elements (VALUES) from an array and put them as an argument in a function.
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//the spread operator don't create new variables like the array and the object destructors. Hence, we can use it only in situations where I would otherwise write values seprated by commas.

//copy array with spread operator - shallow copy. similar to Object.asign.
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const mainMenuCopy2 = Object.assign(restaurant.mainMenu);
console.log(mainMenuCopy2);

//Join 2 arrays or more togather
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects;
//can use spread operator on iterables
const str = 'Jonas';
const letters = [...str, 'S.'];
console.log(letters);
console.log(...str);
//console.log (`${...str} shaked`); // it will not work, because this place is not expect to have multiple values seprated by commas.
*/

//Real-world example
/*

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //the old way
restaurant.orderPasta(...ingredients); //the better and new way from es6
*/
/*

//from es 2018 the spraed operator also works on object eventough there are not iterables.
//Objects - adding, removing, changing, properties to the object.
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Shaked' };
console.log(newRestaurant);

//copy Object with spread operator - shallow copy. similar to Object.asign.

const resturauntCopy = { ...restaurant };
resturauntCopy.name = 'Ristoante Roma';
console.log(resturauntCopy.name);
console.log(restaurant.name);

*/
/*
//////////////////////////////////////////////////////////
//Destructing objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Adulam 24',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Adulam 24',
  starterIndex: 1,
});

//Creating variables from an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Creating variables with different names from an object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Creating variables with default names from an object
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);
console.log(a, b);

//Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//////////////////////////////////////////////////////////
//Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

/* Switching variables
//Mutating Variables

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

//recieve 2 return values from function
const [starter, main] = restaurant.order(2, 0);
console.log(starter);
console.log(main);

//Nested destructing
//destructing array inside array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values to the destructed array
const [p = 1, q = 1, r = 1] = [8];
console.log([p, q, r]);
*/

/* my Targil
const matan = {
  ham: 'shaked',
  yefet: 1989,
  city: 'shoham',
};
console.log(matan);

const { shem = 'matan', ham } = matan;
console.log(shem);
console.log(ham);
*/

/*
//Coding Challenge 2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

//1.
for (const item of game.scored) console.log(item);
for (const item of game.scored.entries()) {
  console.log(item);
}
for (const [numberOfGoal, scorer] of game.scored.entries()) {
  console.log(`Goal ${numberOfGoal + 1}: ${scorer}`);
}

//2.
const odds = Object.values(game.odds);
console.log(odds);
const oddsAverage = function (...odds) {
  let sum = 0;
  for (let i = 0; i < odds.length; i++) {
    sum += odds[i];
  }
  console.log(sum / odds.length);
};
oddsAverage(...odds);

//other way
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3.
console.log(`Odd of victory ${game.team1} : ${game.odds.team1}`);
console.log(`Odd of draw : ${game.odds.x}`);
console.log(`Odd of victory ${game.team2} : ${game.odds.team2}`);

//other way
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}

//4.

const players = game.scored;
console.log(players);

const [Lewandowski, Gnarby, Hummels] = game.scored;
console.log(Lewandowski, Gnarby, Hummels);

const countLewandowski = players.filter(item => item === Lewandowski).length;
const countGnarby = players.filter(item => item === Gnarby).length;
const countHummels = players.filter(item => item === Hummels).length;

console.log(countHummels, countGnarby, countLewandowski);

const scorers = {
  Gnarby: countGnarby,
  Hummels: countHummels,
  Lewandowski: countLewandowski,
};

console.log(scorers);

//other way
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers2 = {};
// for (const player of game.scored) {
//   scorers2[player] ? scorers2[player]++ : (scorers2[player] = 1);
// }
// console.log(scorers2);
*/

/*
//Challenge 2 - repeat
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [goal, player] of game.scored.entries())
  console.log(`Goal ${goal + 1}: ${player}`);

//2.Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const oddsArr = Object.values(game.odds);
console.log(oddsArr);

let average = 0;
for (const odd of oddsArr) {
  average += odd;
}
console.log(average);
const answerAverage = average / oddsArr.length;
console.log(answerAverage);

//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �

const oddsArr2 = Object.entries(game.odds);
console.log(oddsArr2);

for (const [team, odd] of oddsArr2) {
  // console.log(team, odd);
  // console.log(`Odd of ${team} :${odd}`);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} :${odd}`);
}

//4.
// Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

const scorers = {};

const scored = game.scored;
console.log(scored);

for (const scorer of game.scored) {
  scorers[scorer]
    ? (scorers[scorer] = scorers[scorer] + 1)
    : (scorers[scorer] = 1);
}
console.log(scorers);

//other way
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(team, odd);
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} : ${odd}`);
// }
// //property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day} ,`;
// }
// console.log(openStr);

// //property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entrie Object - creating an array of keys and values
// const entries = Object.entries(openingHours);
// console.log(entries);

// //for of loop on an Object
// for (const [day, { open, close }] of entries) {
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
//
*/
//////////////////////////////////////////////////

//Coding Challenge 3
/*
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �
*/
/*
const gameEvents = new Map([
  [17, '⚽Goal'],
  [36, '⚔ Subtstitution'],
  [47, '⚽Goal'],
  [61, '⚔ Subtstitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '⚔ Subtstitution'],
  [72, '⚔ Subtstitution'],
  [76, '⚽Goal'],
  [80, '⚽Goal'],
  [92, '🟨 Yellow card'],
]);

console.log(gameEvents);

//1.
const eventsValues = [...gameEvents.values()];
console.log(eventsValues);
const array = new Set(eventsValues);
console.log(array);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(gameEvents.size);
const average = 90 / gameEvents.size;

console.log(`An event happened, on average, every ${average} minutes`);

//4.
for (const [minute, event] of gameEvents) {
  minute <= 45
    ? console.log(`[FIRST HALF] ${minute}: ${event}`)
    : console.log(`[SECOND HALF] ${minute}: ${event}`);
}
*/
/////////////////////////////////////////////
//SETS
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = [
  'Waiter',
  'Manager',
  'Chef',
  'Waiter',
  'Chef',
  'Waiter',
  'Waiter',
];

//How many differnent postions are in the staff?
const uniquePosition = new Set(staff);
console.log(uniquePosition);
console.log(uniquePosition.size);
*/
///////////////////////////////////////////
//MAPS - fundementals

/*
const rest = new Map();
rest.set('name', 'Matan');
rest.set(1, 'rotem');
console.log(rest.set(2, 'Shoham, Israel'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('true'));

const time = 21;
console.log(rest.get(time < rest.get('close') && time > rest.get('open')));
const time2 = 8;
console.log(rest.get(time2 < rest.get('close') && time2 > rest.get('open')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
*/
/////////////////////////////////////////
//MAPS
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

// answer === 3
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

//another way
console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

////////////////////////////////////////////////////////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//My way
/*
const checkMiddleSeat = function (seat) {
  //B and E are the middle seats.
  const b = seat.lastIndexOf('B');
  console.log(b);
  const e = seat.lastIndexOf('E');
  console.log(e);
  e >= 0 || b >= 0
    ? console.log('This is a middle seat')
    : console.log('You are not in a middle seat!');
};

const checkMiddleSeat = function (seat) {
  //B and E are the middle seats.
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat😢');
  else console.log('You got the perfect seat!😁');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Matan'));
console.log(typeof new String('Matan'));

console.log(typeof new String('Matan').slice(1));




console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//FIX capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passenger);
console.log(passengerCorrect);

//Function thast I made to FIX names
const correctTheName = function (...names) {
  console.log(names);
  for (const name of names) {
    const lower = name.toLowerCase();
    const correctName = lower[0].toUpperCase() + lower.slice(1);
    console.log(correctName);
  }
};

correctTheName('MATAN', 'rOTem', 'ASAf', 'ShArOn', 'zEFvgdsdAAAAA');
// Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);

const annoucement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(annoucement.replace('door', 'gate'));
console.log(annoucement.replaceAll('door', 'gate'));
console.log(annoucement.replace(/door/g, 'gate')); //regular expressions = (regex).

// Booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.startsWith('A3'));
console.log(newPlane.startsWith('Air'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to aboard!');
  } else {
    console.log('Wellcome aboard!');
  }
};

checkBaggage('I have laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and Join
console.log('a+very+nice+string');
console.log('a+very+nice+string'.split('+'));
console.log('matan shaked'.split(' '));

const [firstName, lastName] = 'matan shaked'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];
  for (const n of names) {
    //first way
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    //another way
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper);
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('matan shaked');

// Padding a string
const message = 'go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('matan'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4337846386464454));
console.log(maskCreditCard('4462464842486473846464'));
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(123);

*/
//////////////////////////////////////////////////////////////////
/*
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable 
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �

*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.querySelector('button');

//one way
btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, line] of rows.entries()) {
    [rows];
    const rowsTrimAndLowerCase = line.trim().toLowerCase();
    // console.log(rowsTrimAndLowerCase);

    //first part
    const firstPart = rowsTrimAndLowerCase.slice(
      0,
      rowsTrimAndLowerCase.indexOf('_')
    );

    //Second part
    const secondPart = rowsTrimAndLowerCase.slice(
      rowsTrimAndLowerCase.indexOf('_') + 1,
      rowsTrimAndLowerCase.length
    );
    // console.log(secondPart);
    const upperSecondPart = secondPart[0].toUpperCase() + secondPart.slice(1);
    // console.log(upperSecondPart);

    //Combination
    const combination = [firstPart, upperSecondPart].join('');
    console.log(`${combination}${'🆗'.repeat(i + 1)}`);
  }
});
*/

/*
//second way
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}${'🆗'.repeat(i + 1)}`;
    console.log(output);
  }
});

*/

///////////////////////////////////////////////
// later exercise

///////////////////////////////////
// 1 way

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights);

// We need to habe this in the console:
/*
  🔴 Delayed Departure from FAO to TXL (11h25)
      Arrival from BRU to FAO (11h45)
  🔴 Delayed Arrival from HEL to FAO (12h05)
      Departure from FAO to LIS (12h30)
  */
/*
const replaceAllSigns = flights
  // .replaceAll('+', '\n')
  .replaceAll('_', ' ')
  .replaceAll(';', ' ')
  .replaceAll('Delayed', '🔴 Delayed');
// console.log(replaceAllSigns);

const split = replaceAllSigns.split('+');
// console.log(split);

//open the array to keys and values
for (let [i, row] of split.entries()) {
  //catching the hours
  // console.log(i, row);
  let hour = row.slice(-5).replace(':', 'h');
  hour = `(${hour})`;
  // console.log(hour);

  //spliting each row to subr-row in order to get to each word in the rows
  const subrow = row.split(' ');
  // console.log(subrow);
  //catching the destinations and get only the first 3 letters and converting the letters to capital letters
  let from = subrow[subrow.length - 2].slice(0, 3).toUpperCase();

  let to = subrow[subrow.length - 3].slice(0, 3).toUpperCase();
  const arrivalOrDeparture = subrow[subrow.length - 4];
  // console.log(to, from);
  // console.log(arrivalOrDeparture);

  //catching the delayed flights
  const delayed =
    subrow[1] === '🔴' ? (subrow[1] = subrow[1] + ' ' + subrow[2]) : '';
  // console.log(delayed);

  //Combining the whole sentence
  console.log(
    `${delayed} ${arrivalOrDeparture} from ${to} to ${from} ${hour} `
  );
}
*/

////////////////////////////////
// way 2
const upper = str => str.slice(0, 3).toUpperCase();

console.log(flights);
for (const flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');
  to = to.padEnd(15, '+');
  // console.log();
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${upper(from)} to ${upper(to)} (${time.replace(':', 'h')})`;
  console.log(output);
  console.log(output.length);

  const gap = output.length < 44 ? 44 - output.length : 0;
  console.log(gap);
  const blank = ' ';

  const output2 = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${upper(from)} to ${upper(to)} ${blank.repeat(gap)} (${time.replace(
    ':',
    'h'
  )})`;
  // console.log(output2.length);
  // console.log(output2);
}

/*
  🔴 Delayed Departure from FAO to TXL (11h25)
      Arrival from BRU to FAO (11h45)
  🔴 Delayed Arrival from HEL to FAO (12h05)
      Departure from FAO to LIS (12h30)
  */

// if(row.includes('Departure') || row.includes('Arrival')){

// const spliter = /[+;]/;
// const split = flights.split(spliter);
// console.log(split);

// for (const [key, value] of split.entries()) {
//   // console.log(key, value);
//   console.log(value.replaceAll('_', ' ').trim());
// }

// const enter = Object.entries(split);
// console.log(enter);
// for (let [key, value] of enter) {
//   console.log(key, value);
// }
/*
for (let row of split) {
  let fixedRow1 = row.replaceAll('_', ' ').replaceAll(';', ' ');
  if (fixedRow1.includes('Delayed')) {
    const red = '🔴';
    fixedRow1 = red + fixedRow1;
  }
  console.log(fixedRow1);
}
*/

/*
underscore_case
 first_name
Some_Variable 
 calculate_AGE
delayed_departure
*/

//,
/*
//arguments that go to Rest Parameters in function
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/

/*
  //Rest Paramters
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
*/

///////////////////////////////////////
/*
const matan = {
  age: 33,
  family: 'Shaked',
};
console.log(matan);
//property NAMES
const bdika1 = Object.keys(matan);
console.log(bdika1);
//property VALUES
const bdika2 = Object.values(matan);
console.log(bdika2);

for (const rebar1 of bdika1) {
  console.log(rebar1);
}
for (const rebar2 of bdika2) {
  console.log(rebar2);
}

const matanEntries = Object.entries(matan);
console.log(matanEntries);

for (let [key, value] of matanEntries) {
  console.log(key, value);
}
*/
