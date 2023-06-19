'use strict';

/*
const bookings = [];

//ES 6  -the new way
const createBooking = function (
  flightNum,
  numPassanger = 1,
  price = 199 * numPassanger
) {
  /*
//ES5 - the old way
    numPassanger = numPassanger || 1 // Old Way
price = price || 199 // Old Way
*/
/*
  const booking = {
    flightNum,
    numPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 5); //how to skip default parameter

const flight = 'LH234';
const jonas = {
  name: 'Jonas SSS',
  passport: 2321342342,
};

const checkIn = function (flightNum, passanger) {
  flightNum = 'LH999';
  passanger.name = 'Mr. ' + passanger.name;

  if (passanger.passport === 2321342342) {
    alert('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //passing a primitive type to a function is like passing a copy of it. so I DON'T CHANGE the original value.
console.log(jonas); // passing an object to a function is passing the reference of the object = therefore it's like passing the original value and not the copy = I DO CHANGE the original value.

//Is the same a doing...?
const flightNum = flight;
const passanger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

//we pass reference but not pass by reffernce

//example to how interactions with the SAME OBJECT can cause some issues
newPassport(jonas);
checkIn(flight, jonas);
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
/////////////////////////////////////////////////////////////

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Matan Shaked');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does NOT work
// book(23, 'Sarah Williams');

//The CALL method to THIS KEYWORD
book.call(eurowings, 23, 'Sara Williams'); // the FIRST ARGUMENT is the OBJECT that the THIS KEYWORD point to.
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Marry Williams');
console.log(swiss);

//APPLY METHOD to THIS KEYWORD - it's like the CALL method, but instead  of getting list of arguments, IT takes an array of arrguments and pass it to the function.

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // the old way
console.log(swiss);
book.call(swiss, ...flightData); // spread out the argument from the array; This is the NEW way.
console.log(swiss);

//Bind method

//book.call(eurowings, 23, 'Sara Williams')
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // bind the argument of the CALL method, BUT not calling it like the CALL method.
//the first parameter is the THIS KEYWORD, and after that come all the other paramters with their order.
bookEW23('Matan Shaked');
bookEW23('Nava Shaked');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
*/

/*
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); //right now it points to the element that the event handeler is attached to - it's NOT GOOD
*/

/*
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //the THIS KEYOWRD doesn't exist so I will write NULL.
//the BIND returns a new specific function.
// addVAT = (rate, value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

///////////////////////////////////////
//Coding Challenge
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �

*/
/*
const poll = {
  question: 'What is you favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  //This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${poll.question}\n${poll.options.join('\n')}\n(Write option number)`
      )
    );

    // if (typeof answer === 'number' && answer <= this.answers.length) {
    //   this.answers[answer] = this.answers[answer] + 1;
    // }
    typeof answer === 'number' && answer <= 3 && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document.body
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

console.log(poll.answers);

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] });

const data = { answers: [1, 5, 3, 9, 6, 1] };
poll.displayResults.call(data);
poll.displayResults.call(data, 'string');
*/
///////////////////////////////////////////////////////

//IIFE - Immediately Invoked Function Expressions
/*
const runOnce = function () {
  console.log('This will never again');
};

runOnce();

(function () {
  console.log('This will never again');
  const isPrivate = 23;
})();

// console.log(isPrivate); All data in function scope is private and encapuslated.

// in ARROW functions
(() => console.log('This will never again2'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate); // not private because of the VAR
console.log(isPrivate); // not accessable

// IIFE is not for privacy - because we have block scopes and function scopes for that with CONST and LET.
// IIFE is used when we want to USE THE FUNCTION JUST ONCE!
*/

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

//Examples

//Example 1
//Demonstrating closure by accessing variables even after the outer function has finished executing

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);

/////////////////////////////

//Example 2
//The closure includes also ARGUMENTS because they are local variables in the function

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // the closure has PRIORITY over scope chain = it used first the perGroup = n / 3 over perGroup = 1000 although the Execution Context of the first perGroup = n / 3 ;

boardPassengers(180, 3);

/*
setTimeout(function () {
  console.log('TIMER');
}, 1000);
*/

//////////////////////////////////////////
//Coding Challenge 2
/*
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example.s
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
