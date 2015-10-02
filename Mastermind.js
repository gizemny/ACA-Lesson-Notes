'use strict';

var prompt = require('prompt');
prompt.start();


// var board = [' ', ' ', ' ', ' '];
// var arr1 = [1, 2, 3, 4]
// var arr2 = [];
// for (var i = 0; i > arr1.length; i++) {
//   arr2.push(arr[i] * 2);
// }

// function printBoard() {
//   var board = [' ', ' ', ' ', ' '];
//   for (var i = 0; i < 10; i++) {     
//   console.log(board.join(' '));
//   }
// }

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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var numTry = board.length

var solution = 'abcd'; 

function insertCode(pattern) {
  var splitPattern = pattern.split('');
  board[numTry][0] = splitPattern[0];
  board[numTry][1] = splitPattern[1];
  board[numTry][2] = splitPattern[2];
  board[numTry][3] = splitPattern[3];
}

function checkSolution(pattern) {
  if ( pattern === solution ) {
  console.log(pattern + ' is the solution!');
  return true; 
  } else {
  return false;
  }
}

function getPrompt() {
  printBoard();   
  prompt.get(['pattern'], function (error, result) {
    console.log('input received: ' + result.pattern);
    insertCode(result.pattern);
    // checkSolution();
      if (checkSolution(result.pattern) === true) { 
        return false;
      }   
    getPrompt();

  });
}

getRandomArbitrary()
getPrompt();