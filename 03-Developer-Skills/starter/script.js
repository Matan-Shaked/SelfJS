// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// lesson 1
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
/*

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, -100, -2, -6, -1, 'error', 9, 13, 17, 100, 14, 9, 5];
console.log(temperatures);
console.log(temperatures2);

const calcRempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length - 1; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcRempAmplitude([3, 7, 4, 22, 1, 11, -11, -1]);
const amplitude = calcRempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should recieve two arrays of tempratues.
//1) understanding the problem:
// - With 2 arrays, should we implement functionality twice? NO! just merge two arrays

//2) Breaking up into sub-problems
// - how to merge 2 arrays?

const calcRempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length - 1; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcRempAmplitude([3, 7, 4, 22, 1, 11, -11, -1]);
const amplitudeNew = calcRempAmplitudeNew(temperatures, temperatures2);

console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurment = {
    type: 'temparture',
    unit: 'celsius',
    //C)Fix the bug = convert the string into a number
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  //B) Find the bug
  console.log(measurment);
  console.table(measurment);
  //   console.log(measurment.value);
  //   console.warn(measurment.value);
  //   console.error(measurment.value);

  const kelvin = measurment.value + 273;
  return kelvin;
};
//A) Identify the bug
console.log(measureKelvin());

//Antoher bug
const calcRempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  debugger;
  let max = 0;
  let min = 0;
  for (let i = 0; i <= temps.length - 1; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNewBug = calcRempAmplitudeNew([9, 8, 11], [1, 11, 18]);

//A)identify the bug - the min is 0, but there is no 0 in the array.
*/

//challenge 1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �*/

//my try
// 1) understandong the problem:
// - how to connect bewween temparture to number of day?
// - how to convet number in array into string?
// - how to not over-write in for loop?
// - how to count the number of for loops that have been done
// how to put for loop output inside one string?
//2)sub-problems:
// - connect bewween value to number of index of elemnt in the array.
// - convert number to string.
// - find a way to not over write in a for loop
// -count the number of for loops that have been done
// -put for loop output inside one string
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let totalDay = '...';
  for (let temp = 0; temp <= arr.length - 1; temp++) {
    const dayNumber = temp + 1;
    const tempThisDay = arr[temp];
    totalDay += `${tempThisDay}ºC in ${dayNumber} days...`;
  }
  console.log(totalDay);
  return totalDay;
};

const x = printForecast(data1);
const y = printForecast(data2);
console.log(x);
console.log(y);

//my second try
// 1) understanding the problem
// - I see array that transformed to string with ... separtions.
// - I need the number of the days - this is the Index number + 1.

//2) breaking to semi-problems
// - transfrom array into string
// - trasform each element with ºC
// - strings need to contain day (index + 1)
// - Add ... between elements and start and end of string

// "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let string = '';

//   for (let i = 0; i < arr.length; i++) {
//     string = string + `${arr[i]}ºC`;
//   }
//   console.log(string);
// };

// printForecast(data1);
