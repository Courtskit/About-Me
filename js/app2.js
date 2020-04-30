'use strict';

var score = 0;

var userName = prompt('What is your name?');
alert('Welcome to my page ' + userName + '! To begin, lets play a little game so that you can get to know me better.');

var questionArray = [
  'Gonna start this off easy for you. I work as a flight attendant. Do you think I like to travel?',
  'This question may be a bit trickier for yuh. Do you think that I enjoy math?',
  'I also enjoy eating healthy and working out. Do you think that I like to run?',
  'Would you guess that I like coffee?',
  'Do you think I am from the West Coast?'
];

var answerArray = [
  'yes',
  'yes',
  'no',
  'yes',
  'no'
];

var correctResponse = [
  'Nice job ' + userName + '!',
  'I do! I love problem solving.',
  'You are right! I do not enjoy running.',
  'Good answer. You are right. I LOVE coffee!',
  userName + ', how did you know? I am from South Carolina!'
];

var incorrectResponse = [
  'Well sitting on a plane does get old but I still love to travel!',
  'Actually, I really enjoy math!',
  'Absolutely not! Running is so hard for me. Good guess though.',
  'How could you say no to this question. I am disappointed, I thought you knew me better than that.',
  'Nope! I am from South Carolina but I do love it here in the Pacific North West.'
];

// Questions 1-5 

for(var i=0; i < questionArray.length; i++){
  var answer = prompt(questionArray[i]);
  if(answer.toLowerCase()[0] === answerArray[i][0]){
    alert(correctResponse[i]);
    score++;
    console.log('question ' + i + ' response is ' + answer);
  } else {
    alert(incorrectResponse[i]);
    console.log('question ' + i + ' response is ' + answer);
  }
}












// //Asks user if I like to travel
// var likeToTravel = prompt('').toLowerCase();
// if (likeToTravel === 'yes' || likeToTravel === 'y') {
//   alert();
//   score++;
//   // console.log(userName + ' answered correctly.');
// }
// if (likeToTravel === 'no' || likeToTravel === 'n') {
//   alert();
//   // console.log(userName + ' answered incorrectly.');
// }


// // Asks user if I like math
// var likeMath = prompt(').toLowerCase();
// if (likeMath === 'yes' || likeMath === 'y') {
//   alert();
//   score++;
//   // console.log(userName + ' answered correctly.');
// }
// if (likeMath === 'no' || likeMath === 'n') {
//   alert();
//   // console.log(userName + ' answered incorrectly.');
// }


// // Asks user if I like to run
// var likeToRun = prompt().toLowerCase();
// if (likeToRun === 'yes' || likeToRun === 'y') {
//   alert();
//   // console.log(userName + ' answered incorrectly.');
// }
// if (likeToRun === 'no' || likeToRun === 'n') {
//   alert();
//   score++;
//   // console.log(userName + ' answered correctly.');
// }


// // Asks user if they think I like coffee
// var likeCoffee = prompt().toLowerCase();
// if (likeCoffee === 'yes' || likeCoffee === 'y') {
//   alert();
//   score++;
//   // console.log(userName + ' answered correctly.');
// }
// if (likeCoffee === 'no' || likeCoffee === 'n') {
//   alert();
//   // console.log(userName + ' answered incorrectly.');
// }


// // Asks user if they think I am from the West Coast
// var fromWestCoast = prompt().toLowerCase();
// if (fromWestCoast === 'yes' || fromWestCoast === 'y') {
//   alert();
//   // console.log(userName + ' answered incorrectly.');
// }
// if (fromWestCoast === 'no' || fromWestCoast === 'n') {
//   alert();
//   score++;
//   // console.log(userName + ' answered correctly.');
// }