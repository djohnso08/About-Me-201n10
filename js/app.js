'use strict';

var correct = 0;
console.log('Here lies some trickery questions! Beware of the trickery');

alert('Welcome to my guessing game!');

var userName = prompt('What is your name?');
alert('Welcome ' + userName + '! Hope you enjoy my guessing game.');

console.log('Imagine you are in a sinking rowboat surrounded by sharks. How would you survive?');

var movie = prompt('Is David\'s favorite movie Casablanca?' , 'Type yes or no').toLowerCase();
console.log('How can you lift an elephant with one hand?');

if (movie === 'yes' || movie === 'y') {
  alert('You are correct!');
  correct++;
}
else {
  alert('Incorrect. All the things of Humphrey Bogart!!!');
}

var dance = prompt('Have I ever won a dance contest?' , 'Type yes or no').toLowerCase();
console.log('There was a red bungalow. Everything in it was red - the walls, the carpets, the furniture. What color were the stairs?');

if (dance === 'yes' || dance === 'y') {
  alert('You are correct! ');
  correct++;
}
else {
  alert('Incorrect. The judges on Dancing with the stars would not appreciate your answer!!!');
}

var diver = prompt('Have I dove deeper than 100ft?' , 'Type yes or no').toLowerCase();
console.log('If you were running a race and you passed the person in 2nd place, what place would you be in now?');

if (diver === 'yes' || diver === 'y') {
  alert('You are correct! It get\'s cold down there');
  correct++;
}
else {
  alert('Nice try, but you are incorrect!!!');
}

var military = prompt('Was I in the military?' , 'Type yes or no').toLowerCase();
console.log('There was a red bungalow. Everything in it was red - the walls, the carpets, the furniture. What color were the stairs?');

if (military === 'yes' || military === 'y') {
  alert('You are correct!');
  correct++;
}
else {
  alert('Not even close!!!');
}

var france = prompt('Have I lived in France?' , 'Type yes or no').toLowerCase();
console.log('Can you name the two days starting with T besides Tuesday and Thursday?');

if (france === 'no' || france === 'n') {
  alert('You are correct!');
  correct++;
}
else {
  alert('I have not, but I wish I could!!!');
}

for (var i = 0; i < 4; i++) {
  var number = prompt('What is my favorite number?');
  console.log('My favorite number is' + number);
  if(parseInt(number) === 8){
    correct++;
    i = 5;
    alert('Correct');
  }else if (parseInt(number) < 8){
    alert('Too Low');
  }else if (parseInt(number) > 8){
    alert('Too High');
  }else{
    alert('You are going to need a number if you want to finish this quiz.');
  }
}

var statesLivedIn = ['washington','oklahoma','tennessee','virginia','kansas','arizona'];

for (var j = 0;j < 6;j++) {
  var statesQuestion = prompt('Can you guess a state that I have lived in besides Washington?');
  console.log(statesQuestion);
  if (statesLivedIn.includes(statesQuestion.toLowerCase())) {
    alert('Great job I have lived in' + statesQuestion);
    correct++;
    j = 7;
  } else if (!statesLivedIn.includes(statesQuestion.toLowerCase())) {
    alert('Try Again!');
  } else {
    alert('I have lived in' + statesLivedIn + ' .');
  }

}

alert('You got ' + correct + ' out of 7 correct.');

console.log('Spell "Ghost" out loud. Then spell "Most" out loud. Then spell "Roast" out loud. What do you put in a toaster?');

alert('Thank you for playing my guessing game!');

console.log('');
console.log('Here are your answers');
console.log('Stop imagining');
console.log('It is not a problem, since you will never find an elephant with one hand.');
console.log('You would be in 2nd place. You passed the person in 2nd place, not 1st');
console.log('There weren\'t any stairs. It was a bungalow!');
console.log('Today and tomorrow.');
console.log('Bread. Most people will answer "Toast".');