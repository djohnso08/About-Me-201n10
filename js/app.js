'use strict';

var correct = 0;
console.log('Here lies some trickery questions! Beware of the trickery');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Welcome ' + user + '! Hope you enjoy my guessing game.');

console.log('If you were running a race and you passed the person in 2nd place, what place would you be in now?');

var answer = prompt('Is David\'s favorite movie Casablanca?' , 'Type yes or no').toLowerCase();
console.log('There was a red bungalow. Everything in it was red - the walls, the carpets, the furniture. What color were the stairs?');

if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    alert('You are correct!');
    correct++;
}
else {
    //if it's not correct, tell them to try again
    alert('Incorrect. All the things of Humphrey Bogart!!!');
}

alert('you have ' + correct + ' points');
console.log('Can you name the two days starting with T besides Tuesday and Thursday?');