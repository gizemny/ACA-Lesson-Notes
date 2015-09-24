'use strict';

var prompt = require('prompt');
prompt.start();

function showBoard() {
  console.log(board[0].join(' | '));
  console.log('---------');
  console.log(board[1].join(' | '));
  console.log('---------');
  console.log(board[2].join(' | '));
}

var playerTurn = 'X'; 

function placeMark(result) {
  var row_idx = parseInt(result['row'], 10);
  var col_idx = parseInt(result['column'], 10);
  board[row_idx][col_idx] = playerTurn ;
}

function getPrompt() {
  console.log("It's Player " + playerTurn + "turn.");	
  prompt.get(['row', 'column'], function (error, result) {
  if (acceptableInput(result) === false) {
  	console.log('Please enter a valid input');
  };

  placeMark(result);
  
  if (checkForWin() === true) {
 	 console.log('Player ' +  playerTurn + ' Won!'); 
 	 return false;
  };

  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
	if  (result['input'] === 'exit'){
		return false;
	}
	showBoard();
    getPrompt();
  });

}
var board = [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ]; 

function horizontalWin() {
    return (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
        (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
        (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn);
}

function verticalWin() {
    return (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
        (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
        (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn);
}

function diagonalWin() {
    return (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
        (board[2][0] === playerTurn && board[1][1] === playerTurn && board[0][2] === playerTurn);
}

function acceptableInput(result) {
  var row_idx = parseInt(result['row'], 10);
  var col_idx = parseInt(result['column'], 10);
    if (row_idx  > 2) {
    return false;
  }
}


function checkForWin() {
  if ( horizontalWin() || verticalWin() || diagonalWin() ) {
    console.log('Player ' +  playerTurn + ' Won!'); // announce to the world
    showBoard(); // show the board for bragging rights
    return true;
  }
  else {
  	return false;
  }
}


showBoard(); 
getPrompt();