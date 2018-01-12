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

alert('You got ' + correct + ' correct');
console.log('Can you name the two days starting with T besides Tuesday and Thursday?');

alert('Did you notice the software developer in question two question 2?');

console.log('');
console.log('Here are your answers');
console.log('You would be in 2nd place. You passed the person in 2nd place, not 1st');
console.log('There weren\'t any stairs. It was a bungalow!');
console.log('Today and tomorrow.');
console.log('Bread. Most people will answer "Toast".');