'use strict';

var prompt = require('prompt');
prompt.start();
var colors = require('colors/safe');

// set up the board and define some global variables
var board = [
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ']
];

function printBoard() {
  console.log(board[0].join(' '));
  console.log(board[1].join(' '));
  console.log(board[2].join(' '));
  console.log(board[3].join(' '));
  console.log(board[4].join(' '));
  console.log(board[5].join(' '));
  console.log(board[6].join(' '));
  console.log(board[7].join(' '));
  console.log(board[8].join(' '));
  console.log(board[9].join(' '));
}

// var numTry = board.length

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function insertCode(pattern) {
  var splitPattern = pattern.split('');
  var message = computeMessage(splitPattern);
//...
board[numTry].push(message);

  board[numTry][0] = splitPattern[0];
  board[numTry][1] = splitPattern[1];
  board[numTry][2] = splitPattern[2];
  board[numTry][3] = splitPattern[3];
}


// generate random for solution
var solution = 'ccdd';
var guess = 'bdbb';

function generateRandomCode() {
	var letters = ['a', 'b', 'c', 'd', 'e' , 'g', 'h'];
	solution = [
    letters[getRandomInt(0, letters.length)],
    letters[getRandomInt(0, letters.length)],
    letters[getRandomInt(0, letters.length)],
    letters[getRandomInt(0, letters.length)]
].join('');
}
// generate clues by comparing guess string to solution string
function generateHints(solution, guess) {
// first split the strings to arrays 
	var guessArray = guess.split('');
	var solutionArray = solution.split('');

	// create a variable for correctPlacement
	var correctPlacement = 0;
	// create for loop that checks each items in the solution array against guess array
	for (var i = 0; i < solutionArray.length; i++) {
	// if there is a match, set the location to null
		if (solutionArray[i] === guessArray[i]) {
			correctPlacement++; 
			solutionArray[i] = null;
		}
	}

	// create a variable for correctLetter
	var correctLetter = 0;
	// create for loop that checks indexOf each items in the guess array against solution array
	// note: indexOf automatically returns -1 if there are no instances
	for (var i = 0; i < solutionArray.length; i++	) {
		var targetIndex = solutionArray.indexOf(guessArray[i]);
		if (targetIndex > -1) {
			correctLetter++;
			solutionArray[targetIndex] = null;
		}
}

// if there is a match it signifies correctLetter

// repeat all of this while ... 
// while () {

// }
return colors.red(correctPlacement + ' - ' + correctLetter);
}

// function checkWin() {
// // if guessArray === solutionArray
//  if (guessArray === solutionArray) {
//  	return false;
//  }
// } 


function getPrompt() {
  printBoard();   
  generateRandomCode();
  prompt.get(['guess'], function (error, result) {
    console.log('input received: ' + result.guess);
    // insertCode(result.guess);
    generateHints(result.guess)
    // checkSolution();
      // if (checkSolution(result.pattern) === true) { 
      //   return false;
      // }   
    getPrompt();

  });
}



console.log(generateHints(solution, guess));

// getPrompt();




