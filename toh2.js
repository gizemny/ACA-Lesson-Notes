'use strict';

var prompt = require('prompt');
prompt.start();
// create associate array of stacks 
var stacks = {
	a: [1, 2, 3, 4],
	b: [],
	c: []
}
//console log the stacks 
function printStacks(){
	console.log('a: ' + stacks.a);
	console.log('b: ' + stacks.b);
	console.log('c: ' + stacks.c);
}
//move the block by pop/push 
function moveBlock(start,finish) {
	stacks[finish].push(stacks[start].pop());
}
//check if the move is legal 
//find last index and parse user input then compare to and from
function isLegal(start,finish) {
	var startStackLastIndex = stacks[start].length-1;
	var finishStackLastIndex = stacks[finish].length-1;
	var fromStack = stacks[start][startStackLastIndex];
 	var toStack = stacks[finish][finishStackLastIndex];

 	if (fromStack < toStack || !toStack) {
 		return true; 
 	} else {
 		console.log('Not allowed!')
 		return false;
 	}
}

function checkWin() {
	if (stacks['b'].length === 4 || stacks['c'].length === 4) {
		console.log('You won!');
		return true;
	} else {
		return false;
	}
}

function getPrompt() {
  printStacks();
  prompt.get(['start','finish'], function (error, result) {
    if(isLegal(result['start'], result['finish'])) {
    	moveBlock(result['start'], result['finish'])
    } 
    if (!checkWin()) {
    	getPrompt();
    }
    
  });
}

getPrompt();