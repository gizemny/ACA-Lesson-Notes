'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['number'], function (error, result) {
  var num = parseInt(result['number']);
    if (num % 3 === 0) {
    console.log(num + ' is divisible by 3!');
	} else if (num % 5 === 0) {
    console.log(num + ' is divisible by 5!');
	  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + ' is divisible by 3 & 5!')
	} }
	 else {
	console.log(num + ' is not divisible by 3 or 5!');
	}

});

