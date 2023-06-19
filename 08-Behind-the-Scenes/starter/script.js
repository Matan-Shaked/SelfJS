'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // it will look first in the current scope and will not go outside of the block
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT'; //redefining variable in the inner scope affects outside scope

      //   const output = 'NEW OUTPUT'; // creating completely new variable and will not affect the outter scope
    }

    console.log(millenial); // works because it sees functions scope but not block scopes;
    // add(2, 3); //functions are blocked scoped in strict mode in ES6
    console.log(output); // redefining variable = inner scope affects outside scope;
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

//Variables
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
*/

//Functions
/*
console.log(addDecl(2, 3));
console.log(addExpr);
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
} // function declaration can be accessed with var varaible before it decalred

const addExpr = function (a, b) {
  return a + b;
}; // const variable sets its value to cannot access before initaliztion if it in the TDZ (temporary dead zone)

var addArrow = (a, b) => a + b; // var variable sets its value to undefined and it is not a function
*/

//Exanple
/*
console.log(numProducts); // the var variable of numProducts in this point is sets to undefined value.
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All product deleted');
}
*/

/*
var x = 1;
let y = 2;
const z = 3;
*/

/*
//use the global object - in case of the browser is the window object
console.log(this);

//normal function - points to undefined because there is no object that the function is attached to
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

//arrow function - use the this keyword of the parent function or the parent scope
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

//the function is attached to the Jonas object that calling her and that's why the this keyword point to Jonas object.
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); //points to matilda because this is the object that called the function (method)
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //method borrowing. a function is just a value.

matilda.calcAge();

const f = jonas.calcAge;
f(); //who called this f() function? no one - this is normal function and that's why it points to undefined (the owner of the function is undefined). the error is because there is noy way to read undefined.year.
*/

/*
var firstName = 'Matilda'; // it creats property in the global object - window - and then the This keyword is pointing to the window object when an arrow function calls is called.

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //solution 1
    /*
    const self = this; // self or that
    const isMillenial = function () {
      // console.log(this);
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial(); //a regular function call is set to undefined
  },
  */

/*
    //solution 2
    // usong the arrow function that don't have its own This keyword, and instead is going to the parent and using the parent's This keyword
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), // that why - NOT USER EVER NEVER ARROW functions as a method (function inside objects)
  greet2: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.calcAge();
jonas.greet();
// jonas.greet2();
// console.log(this);
// console.log(this.firstName);
*/

//Argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 9); // argument keyord is exist in arrow functions

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5); // argument keyord is not exist in arow functions

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

*/

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessiaca',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

//marriedJessica = {} // error - Ican't reassign constant variable, because this variable is already assigned to the the reffernce value in the stack. If it was let originally - I could do it. On the other hand I CAN CHANGE propeties of the objects no matter to the let, cinst and var variables because this chage is happening in the HEAP and don't change the refferne value of the variablre in the stack.

//Coping objects

const jessica2 = {
  firstName: 'Jessiaca',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//Shallow copy - copy the properties ONLY in the first level. the family object has not changed.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);

/*
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
*/
