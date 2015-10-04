'use strict';

var board = [
    [ ],
    [ ],
    [ ]
]

function printBoard() {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
}

var solution = 'cbab';
var guess = 'abcb';

function generateHints(solution, guess) {
    var solutionArray = solution.split(''); // ['c', null, 'a', null ]
    var guessArray = guess.split(''); // ['a', 'b', 'c', 'b']

    var correctLetterLocations = 0;

    // write a loop that loops over each item
    // in solutionArray
    for (var i = 0; i < solutionArray.length; i++) {
        // if solutionArray at index i is equal to
        // guessArray at index i, then increment correctLetterLocations,
        // and cancel out solutionArra at that index
        if (solutionArray[i] === guessArray[i]) {
            correctLetterLocations++;
            solutionArray[i] = null;
        }
    }

    var correctLetters = 0;
    for (var i = 0; i < solutionArray.length; i++) {
        // if solution array contains guessArray at index i,
        // increment correctLetters and cancel out index i of
        // solutionArray

        // must save the index just in case it does exist
        var targetIndex = solutionArray.indexOf(guessArray[i]);
        if ( targetIndex > -1 ) {
            correctLetters++;
            // so that we can "target" it for nullification
            solutionArray[targetIndex] = null;
        }
    }

    return correctLetterLocations + ' - ' + correctLetters;
}

console.log(generateHints(solution, guess));