'use strict';
var doYou = prompt('Do you know');
if (doYou.toLowerCase() === 'yes') {
  alert('That is great!');
} else if (doYou.toLowerCase() === 'no') {
  alert('Oh, well that is okay.');
} else {
  prompt('Please answer with a yes or no.');
}

var userName = prompt('What is your name?');