'use strict';

var prompt = require('prompt');
prompt.start();

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

var solution = 'ghab';
var guess = 'abcb';
//we dont actually need to clone anything because we started with a string 
// but when we split we turned it into an array 

// function clone(origArray) 
// var cloneArray = []
// for (var i = 0 ; i < origArray.length; i++)	{
// 	cloneArray.push(origArray[i]) }
// return cloneArray;


function generateHints(solution,guess) {
var solutionArray = solution.split('');
var guessArray = guess.split('');

var correctLetterLocation = 0; 
for (var i = 0; i < solutionArray.length; i++){
	if (solutionArray[i] === guessArray[i]) {
	correctLetterLocation++;
	solutionArray[i] = null;
	}
}

var correctLetters = 0;
for (var i = 0; i < solutionArray.length; i++){
	var targetIndex = solutionArray.indexOf(guessArray[i]);
	if (targetIndex > -1 { 
		correctLetters++;
		solutionArray[targetIndex] = null;
	}
}
//correctLetterSpaces ; correctLetters
return correctLetterLocation + ' - ' + correctLetters;

}

console.log(generateHints(solution,guess));