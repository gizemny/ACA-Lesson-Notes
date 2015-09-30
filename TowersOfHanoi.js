'use strict';

var prompt = require ('prompt');
prompt.start();

var stacks = {
  a: [1, 2, 3, 4],
  b: [],
  c: []
};

function printStacks() {
	console.log('a: ' + stacks.a);
	console.log('b: ' + stacks.b);
	console.log('c: ' + stacks.c);
}

// function compareStacks(start, finish) {
// 	var lastIndex1 = result.start.length-1;
// 	var lastIndex2 = result.finish.length-1;
// 	var block1 = start[lastIndex1];
// 	var block2 = finish[lastIndex2];
// 	(block1 < block2) ? true : false;
// }

function moveBlock(start,finish) {
	// var poppedItem = stacks[start].pop();
	// stacks[finish].push(poppedItem);
	stacks[finish].push(stacks[start].pop());
}

function isLegal(start, finish) {
	var startLastIndex = stacks[start].length-1;
	var finishLastIndex = stacks[finish].length-1;

	var movingBlock = stacks[start][startLastIndex];

	var compareStack = stacks[finish][finishLastIndex];

	if (movingBlock < compareStack || !compareStack) {
		return true;
		} else {
		console.log('Not a legal move!');
		return false;
		}
	}
	
function checkForWin() {
if (stacks['b'].length === 4 || stacks['c'].length === 4) {
	console.log('Congrats! Game Won!');
	return true;
}
return false;
}

function getPrompt() {
  printStacks();
	prompt.get(['start', 'finish'], function (error,result) {
	  if (isLegal(result['start'], result['finish'])) {
	  	moveBlock(result['start'], result['finish']);
	  }
	  if (!checkForWin()) {
	  	getPrompt();
	  }
});
}

getPrompt();
