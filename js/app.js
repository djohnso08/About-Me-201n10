'use strict';

var correct = 0;

function getUserName () {
  var userName = prompt('What is your name?');
  alert('Welcome ' + userName + '! Hope you enjoy my guessing game.');
  console.log('Hi ' + userName);
}


function askFavMovie() {
  var movie = prompt('Is David\'s favorite movie Casablanca?' , 'type yes or no').toLowerCase();
  console.log('Question 1: Is David\'s favorite movie Casablanca?');

  if (movie === 'yes' || movie === 'y') {
    alert('You are correct!');
    correct++;
    console.log('Answer: ' + movie + ' Casablanca is my favorite movie');
  }
  else {
    alert('Incorrect. All the things of Humphrey Bogart!!!');
    console.log('');
  }

}

function askDance () {
  var dance = prompt('Have I ever won a dance contest?' , 'type yes or no').toLowerCase();
  console.log('Question 2: Have I ever won a dance contest?');

  if (dance === 'yes' || dance === 'y') {
    alert('You are correct! ');
    correct++;
    console.log('Answer: ' + dance + ' I have won a dance contest');
  }
  else {
    alert('Incorrect. The judges on Dancing with the stars would not appreciate your answer!!!');
  }

}

function askDiver () {
  var diver = prompt('Have I dove deeper than 100ft?' , 'Type yes or no').toLowerCase();
  console.log('Question 3: Have I dove deeper than 100ft?');

  if (diver === 'yes' || diver === 'y') {
    alert('You are correct! It get\'s cold down there');
    correct++;
    console.log('Answer: ' + diver + ' I have dove deeper than 100ft');
  }
  else {
    alert('Nice try, but you are incorrect!!!');
  }
}

function askMilitary () {
  var military = prompt('Was I in the military?' , 'Type yes or no').toLowerCase();
  console.log('Question 4: Was I in the military?');
  
  if (military === 'yes' || military === 'y') {
    alert('You are correct!');
    correct++;
    console.log('Answer: ' + military + ' I was in the military.');
  }
  else {
    alert('Not even close!!!');
  }
}

function askFrance (){
  var france = prompt('Have I lived in France?' , 'Type yes or no').toLowerCase();
  console.log('Question 5: Have I lived in France?');
  
  if (france === 'no' || france === 'n') {
    alert('You are correct!');
    console.log('Answer: ' + france + ' I have not lived in France.');
    correct++;
  }
  else {
    alert('I have not, but I wish I could!!!');
  }
}

function askFavNum () {
  for (var i = 0; i < 4; i++) {
    var number = prompt('What is my favorite number?');
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
  console.log('Answer: My favorite number was ' + number + '.');
}

function askStatesLived () {
  var statesLivedIn = ['washington','oklahoma','tennessee','virginia','kansas','arizona'];

  for (var j = 0;j < 6;j++) {
    var statesQuestion = prompt('Can you guess a state that I have lived in besides Washington?');
    console.log('Question 7: Can you guess a state that I have lived in besides Washington?');
    if (statesLivedIn.includes(statesQuestion.toLowerCase())) {
      alert('Great job I have lived in ' + statesQuestion);
      correct++;
      console.log('Answer: I have lived in ' + statesQuestion);
      j = 7;
    } else if (!statesLivedIn.includes(statesQuestion.toLowerCase())) {
      alert('Try Again!');
    }
  }
  alert('I have lived in ' + statesLivedIn + ' .');
}

alert('Welcome to my guessing game!');

getUserName ();

askFavMovie ();
askDance ();
askDiver ();
askMilitary ();
askFrance ();
askFavNum ();
askStatesLived ();

alert('You got ' + correct + ' out of 7 correct.');

alert('Thank you for playing my guessing game!');