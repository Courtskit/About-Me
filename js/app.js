'use strict';

var userName = prompt('What is your name?');
alert('Welcome to my page ' + userName + '! To begin, lets play a little game so that you can get to know me better.');

var score = 0;

//Asks user if I like to travel
var likeToTravel = prompt('Gonna start this off easy for you. I work as a flight attendant. Do you think I like to travel?').toLowerCase();
if (likeToTravel === 'yes' || likeToTravel === 'y') {
  alert('Nice job ' + userName + '!');
  score++;
  // console.log(userName + ' answered correctly.');
}
if (likeToTravel === 'no' || likeToTravel === 'n') {
  alert('Well sitting on a plane does get old but I still love to travel!');
  // console.log(userName + ' answered incorrectly.');
}


// Asks user if I like math
var likeMath = prompt('This question may be a bit trickier for yuh. Do you think that I enjoy math?').toLowerCase();
if (likeMath === 'yes' || likeMath === 'y') {
  alert('I do! I love problem solving.');
  score++;
  // console.log(userName + ' answered correctly.');
}
if (likeMath === 'no' || likeMath === 'n') {
  alert('Actually, I really enjoy math!');
  // console.log(userName + ' answered incorrectly.');
}


// Asks user if I like to run
var likeToRun = prompt('I also enjoy eating healthy and working out. Do you think that I like to run?').toLowerCase();
if (likeToRun === 'yes' || likeToRun === 'y') {
  alert('Absolutely not! Running is so hard for me. Good guess though.');
  // console.log(userName + ' answered incorrectly.');
}
if (likeToRun === 'no' || likeToRun === 'n') {
  alert('You are right! I do not enjoy running.');
  score++;
  // console.log(userName + ' answered correctly.');
}


// Asks user if they think I like coffee
var likeCoffee = prompt('Would you guess that I like coffee?').toLowerCase();
if (likeCoffee === 'yes' || likeCoffee === 'y') {
  alert('Good answer. You are right. I LOVE coffee! ');
  score++;
  // console.log(userName + ' answered correctly.');
}
if (likeCoffee === 'no' || likeCoffee === 'n') {
  alert('How could you say no to this question. I am disappointed, I thought you knew me better than that.');
  // console.log(userName + ' answered incorrectly.');
}


// Asks user if they think I am from the West Coast
var fromWestCoast = prompt('Do you think I am from the West Coast?').toLowerCase();
if (fromWestCoast === 'yes' || fromWestCoast === 'y') {
  alert('Nope! I am from South Carolina but I do love it here in the Pacific North West.');
  // console.log(userName + ' answered incorrectly.');
}
if (fromWestCoast === 'no' || fromWestCoast === 'n') {
  alert(userName + ', how did you know? I am from South Carolina!');
  score++;
  // console.log(userName + ' answered correctly.');
}

var numberGame = 4;
for (var i = 0; i < 4; i++) {
  var guess = prompt('Guess my favorite number from 1-10?');
  if (guess == numberGame) {
    alert('You are correct! Great job.');
    score++;
    break;
  } else if (guess < numberGame) {
    alert('Not it! You are too low! Please try again.');
  } else if (guess > numberGame) {
    alert('Nope. You are too high! Please try again.');
  }
  if (i === 3) {
    alert('Good try! The correct answer is 4.');
  }
}

var favColor = ['blue', 'green', 'yellow'];

for (var i = 0; i < 6; i++) {
  var colorGuess = prompt('What do you think is one of my favorite colors?');
  if (colorGuess === favColor[0] || colorGuess === favColor[1] || colorGuess === favColor[2]) {
    console.log('You are right. Blue, green, and yellow are my favorite!');
    score++;
    break;
  } else {
    console.log('Nope, good guess though.');
  }
  if (i === 5) {
    alert('Good try. My favorite colors are blue, green, and yellow.');
  }
}


alert('I hope enjoyed learning a few facts about me, ' + userName + '. You scored ' + score + ' out of 7. Thanks for visiting my site!');



// function userResponse(){
//   var userAnswer = 'yes';
//   if(userAnswer === 'yes'){
//     console.log('user answered yes');
//   } else {
//     console.log('user answered no');
//   }
// }

// userResponse();