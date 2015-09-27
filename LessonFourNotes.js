[].length;
[].join;
// remove item from end
.pop 
// add item to end 
.push
// this will return the length of the new array
arr.push('d')


// function compareBlock (fromStack, toStack) {
// 	var fsLastIndex = fromStack.length-1;
// 	var currentBlock - fromStack[fsLastIndex];
// 	var tsLastIndex = toStack.length-1;
// 	var compareBlock - toStack[tsLastIndex];


// 	if (currentBlock < compareBlock) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

input (stack1, stack2)
if (compareStacks(stack1, stack2)) {
	moveBlock(stack1, stack2)
}

function (stack1, stack2) {
	var lastIndex1 = stack1.length-1;
	var lastIndex2 = stack2.length-1;
	var block1 = stack1[lastIndex1];
	var block2 = stack2[lastIndex2];

	if (block1 < block2) ? true : false;

}

function checkForWin() {
	if (a.length === 4 || b.length === 4);
	return false;
}

function moveBlock(stack1, stack2) {
	var block = stack1.pop();
	stack2.push(block);
}

