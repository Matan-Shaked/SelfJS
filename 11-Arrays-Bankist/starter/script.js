'use strict';
/*
Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK �
*/
////////////////////////////////////////////
//Answer - Coding Challenge #1
/*
//TEST 1
const dataJulia1 = [3, 5, 2, 12, 7];
console.log(dataJulia1);
const dataKate1 = [4, 1, 15, 8, 3];
console.log(dataKate1);

const checkdogs = function (dogsJulia, dogsKate) {
  const correctJulia = dogsJulia.slice(1, -2);
  // console.log(correctJulia);
  const combinedArray = correctJulia.concat(dogsKate);
  console.log(combinedArray);

  combinedArray.forEach(function (dogAge, i) {
    const type =
      dogAge > 3 ? `an adult and is ${dogAge} years old` : `still a puppy 🐶`;

    console.log(`Dog number ${i + 1} is ${type}`);
  });
};

checkdogs(dataJulia1, dataKate1);

//TEST 2
const dataJulia2 = [9, 16, 6, 8, 3];
console.log(dataJulia2);
const dataKate2 = [10, 5, 6, 1, 4];
console.log(dataKate2);

const checkdogs2 = function (dogsJulia, dogsKate) {
  
  const correctJulia = dogsJulia.slice();
  correctJulia.splice(0, 1);
  correctJulia.splice(-2);
  // console.log(correctJulia);
  const combinedArray = correctJulia.concat(dogsKate);
  console.log(combinedArray);

  combinedArray.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkdogs2(dataJulia2, dataKate2);
*/

//////////////////////////
//Coding Challenge #2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK �
*/

////////////////////////////////////////////
//Answer - Coding Challenge #2

//test data 1
const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age, i, arr) => {
    if (age <= 2) return age * 2;
    else return age * 4 + 16;
  });

  console.log(humanAges);

  const filterDogs = humanAges.filter((dog, i, arr) => dog >= 18);

  console.log(filterDogs);

  const averageHumanAge = filterDogs.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  // filterDogs.reduce((acc, cur, i, arr) => acc + cur, 0) / filterDogs.length;
  console.log(averageHumanAge);

  return averageHumanAge;
};

const testOne = calcAverageHumanAge(test1);
const testTwo = calcAverageHumanAge(test2);
console.log(testOne, testTwo);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////
// Maniuplating DOM
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //Good way to insert an HTML to DOM elements: 1) const the html with tmplate literal. 2) use the insertAdjacentHTML method to inesrt it
    ////////////////
    const html = `
          <div class="movements__row">
            
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__value">${mov}</div>
          </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
////////////////////////////////
//Computing Usernames

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);
////////////////////////////////
//Computing Usernames

const user = 'Steven Thomas Williams'; // stw
const username = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');
console.log(username);

///////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE - DOESN'T change the ORIGINAL ARRAY
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE - DOES Change the ORIGINAL ARRAY, Takes part of the array and return it.
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // Go to position 1 and delete 2 elements.
console.log(arr);

//Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('--'));

//AT
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));
console.log('jonas'.at(0));
console.log('jonas'.at(-1));

*/
/////////////////////////////////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}
console.log('-------FOR EACH------');

movements.forEach(function (
  theCurrentMovement,
  theCurrentIndex,
  theEntireArray
) {
  if (theCurrentMovement > 0) {
    console.log(
      `Movement ${theCurrentIndex + 1}: You deposited ${theCurrentMovement}`
    );
  } else {
    console.log(
      `Movement ${theCurrentIndex + 1}: You withdraw ${Math.abs(
        theCurrentMovement
      )}`
    );
  }
});
//0 : function(200)
//1 : function(450)
//2 : function(400)
// ...

// I can't use BREAK out of a loop using forEach loop. in this case I will use for OF loop.
*/
//////////////////////////////////////////////
/*

//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SET
const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

*/
//////////////////////////////////////////////

///////////////////
/*
// InnerHTML vs textContent
console.log(containerMovements.innerHTML);
console.log(containerMovements.textContent);
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

/////////////////////////////////
//// MAP method

//regular function
/*
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
  // return 23;
});
*/
/*
//Arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementUSDfor = [];
for (const mov of movements) {
  movementUSDfor.push(mov * eurToUsd);
}
console.log(movementUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);

////////////////////////////
// The FILTER mode
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawls = movements.filter(mov => mov < 0);

console.log(withdrawls);

const withdrawlsFor = [];
movements.filter(function (mov) {
  if (mov < 0) {
    withdrawlsFor.push(mov);
  }
});
console.log(withdrawlsFor);
*/
///////////////////////////
//The REDUCE method

//a accumlator -> SNOWBALL
/*
console.log(movements);
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration number${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);
*/
/*
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

let balance2 = 0;

for (const mov of movements) balance2 += mov;
console.log(balance2);

//Get the maximum value of the momvements array - with REDUCE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/
