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
	var poppedItem = stacks.a.pop();
	stacks.b.push(poppedItem);
}

function checkForWin() {
	if (stacks.b.length === 4 || stacks.c.length === 4);
	return false;
	console.log('Congrats! Game Won!');
}

function getPrompt() {
	prompt.get(['start', 'finish'], function (error,result) {
	  console.log(result);
	  // compareStacks();
	  getPrompt();
		moveBlock();
	  printStacks();
	  checkForWin();
});
}

moveBlock ();
getPrompt();
printStacks();
