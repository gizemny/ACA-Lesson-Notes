'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['number'], function (error, result) {
  var num = parseInt(result['number']);
  var divided; 
	if (num % 3 === 0 && num % 5 === 0) {
    divided = (num + ' is divisible by 3 & 5!')
	} else if (num % 3 === 0) {
    divided = (num + ' is divisible by 3!');
	} else if (num % 5 === 0) {
    divided = (num + ' is divisible by 5!');
	} else {
	divided = (num + ' is not divisible by 3 or 5!');
	}

console.log(divided);
});

