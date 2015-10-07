'use strict';

var prompt = require('prompt');
prompt.start();
var colors = require('colors/safe');

// set up the board and define some global variables
var board = [];

function printBoard() {
  for (var i = 0; i < board.length; i ++) {
    console.log(board[i]);
  }
}

var numTry = 0;
var solution = '';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomCode() {
	var letters = ['a', 'b', 'c', 'd', 'e' , 'g', 'h'];
	for (var i = 0; i < 4; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function insertCode(guess) {
  var guessArray = guess.split('');//  split the strings to arrays 
  var message = generateHints(guess);
  board.push(guess + ' ' + message); 
}

// generate clues by comparing guess string to solution string
function generateHints(guess) {
  var guessArray = guess.split('');//  split the strings to arrays 
	var solutionArray = solution.split('');//  split the strings to arrays 
	var correctPlacement = 0; // create a variable for correctPlacement
	// create for loop that checks each items in the solution array against guess array
	for (var i = 0; i < solutionArray.length; i++) {
	// if there is a match, set the location to null
		if (solutionArray[i] === guessArray[i]) {
			correctPlacement++; 
			solutionArray[i] = null;
		}
	}
	var correctLetter = 0; // create a variable for correctLetter
	// create for loop that checks indexOf each items in the guess array against solution array
	// note: indexOf automatically returns -1 if there are no instances
  // if there is a match it signifies correctLetter
	for (var i = 0; i < solutionArray.length; i++	) {
		var targetIndex = solutionArray.indexOf(guessArray[i]);
		if (targetIndex > -1) {
			correctLetter++;
			solutionArray[targetIndex] = null;
		}
}
return colors.red(correctPlacement + ' - ' + correctLetter);
}

function checkWin(guess) {
 if (guess === solution) {
 	console.log('You Win!')
  return true;
 } else {
  return false;
 }
}

function getPrompt() {
  printBoard();   
  prompt.get(['guess'], function (error, result) {
    // console.log('input received: ' + result['guess']);
    if (checkWin(result['guess']) === true) {
      return false;
    };
    insertCode(result['guess']);
    generateHints(result['guess']);
    getPrompt();
  });
}
generateRandomCode();
console.log(solution)

getPrompt();




