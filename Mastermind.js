'use strict';

var prompt = require('prompt');
prompt.start();


var board = [' ', ' ', ' ', ' '];
// var arr1 = [1, 2, 3, 4]
// var arr2 = [];
// for (var i = 0; i > arr1.length; i++) {
//   arr2.push(arr[i] * 2);
// }

function printBoard() {
  var board = [' ', ' ', ' ', ' '];
  for (var i = 0; i < 10; i++) {     
  console.log(board.join(' '));
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var numTry = 0;

function insertCode(pattern) {
  var splitPattern = pattern.split('');
  board[numTry][0] = splitPattern[0];
  board[numTry][1] = splitPattern[1];
  board[numTry][2] = splitPattern[2];
  board[numTry][3] = splitPattern[3];
}

var solution = 'abcd'; 
function checkSolution(pattern) {
  if ( pattern === solution ) {
  console.log(pattern + ' is the solution!');
  return true; 
  } else {
  return false;
  }
}
checkSolution();

function getPrompt() {
  printBoard();   
  prompt.get(['pattern'], function (error, result) {
    console.log('input received: ' + result.pattern);
    getPrompt();
    // checkSolution();
      if (checkSolution(result.pattern) === true) { 
        return false;
        consol
      }   
    insertCode(result.pattern);
  });
}

getRandomArbitrary()
getPrompt();