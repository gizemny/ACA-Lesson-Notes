'use strict';

var prompt = require('prompt');
prompt.start();

prompt.get(['word'], function(error, result) {
    var word = result['word']
    var firstLetter = word[0];
	var restWord = word.replace(word[0], '');
	var vowelIndex = word.indexOf('a');

	if ((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex) || (vowelIndex === -1) ) {
	    vowelIndex = word.indexOf('e');
	} 

	if ( (word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex) || (vowelIndex === -1) ) {
	    vowelIndex = word.indexOf('i');
	}

	if ( (word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex) || (vowelIndex === -1) ) {
	    vowelIndex = word.indexOf('o');
	}

	if ( (word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex) || (vowelIndex === -1) ) {
	    vowelIndex = word.indexOf('u');
	}

	var firstPart = word.slice(0, vowelIndex);
	console.log(firstPart)
	var restWord = word.slice(vowelIndex, word.length);
	console.log(restWord)

    console.log(restWord + firstPart + 'ay');
});

