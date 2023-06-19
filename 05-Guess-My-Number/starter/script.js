'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//general data and Functions
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumberStyleWidth = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayNumberContent = function (number) {
  document.querySelector('.number').textContent = number;
};

const bodyBackground = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

//What happen when the "check!" is clicked
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no guess
  if (!guess) {
    displayMessage('⛔ No number ');
    // document.querySelector('.message').textContent = '⛔ No number ';

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    //background color of the body in case of win
    // document.querySelector('body').style.backgroundColor = '#60b347';
    bodyBackground('#60b347');

    //width of the number in case of win
    displayNumberStyleWidth('30rem');
    // document.querySelector('.number').style.width = '30rem';
    displayNumberContent(secretNumber);
    // document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      console.log(highscore);
    }

    //When guess is different from secert number - wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;

      //   //When guess is too high
      //   else if (guess > secretNumber) {
      //     if (score > 1) {
      //       document.querySelector('.message').textContent = 'Too high! 📈';
      //       score--;
      //       document.querySelector('.score').textContent = score;

      //       //When player missed all his guessing
      //     } else {
      //       document.querySelector('.message').textContent = 'You lost the game!💥';
      //       document.querySelector('.score').textContent = 0;
      //     }

      //     //When guess is too low
      //   } else if (guess < secretNumber) {
      //     if (score > 1) {
      //       document.querySelector('.message').textContent = 'Too low! 📉';
      //       score--;
      //       document.querySelector('.score').textContent = score;

      //       //When player missed all his guessing
      //     } else {
      //       document.querySelector('.message').textContent = 'You lost the game!💥';
      //       document.querySelector('.score').textContent = 0;
      //     }
      //   }

      //When player missed all his guessing
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game!💥';
      displayMessage('You lost the game!💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayNumberContent('?');
  //   document.querySelector('.number').textContent = '?';
  bodyBackground('#222');
  //   document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumberStyleWidth = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayNumberContent = function (number) {
  document.querySelector('.number').textContent = number;
};

const bodyBackground = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

//What happen when the "check!" is clicked
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no guess
  if (!guess) {
    displayMessage('⛔ No number ');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    bodyBackground('#60b347');
    displayNumberStyleWidth('30rem');
    displayNumberContent(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      console.log(highscore);
    }

    //When guess is different from secert number - wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayNumberContent('?');
  bodyBackground('#222');
  document.querySelector('.number').style.width = '15rem';
});
